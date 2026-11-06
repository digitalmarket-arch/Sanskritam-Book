/**
 * Build the book's chapters from the app's curriculum.
 *
 * The SanskritamApp mobile app is the source of truth for the course text.
 * scripts/syncFromApp.mjs copies its data files verbatim into ./app/; this
 * module turns the app's sections into the book's chapter structure, so no
 * chapter is ever patched by hand here. Both the web book and the PDF
 * (scripts/updatePdfCurriculum.mjs) read the result.
 *
 * The conversion only changes presentation:
 *   - one app section = one book chapter; unit and lesson numbers are kept
 *   - each app exercise type maps to a book exercise type (see EXERCISE_LABELS)
 *   - pictographic emoji are dropped (keycap digits 1\uFE0F\u20E3 become "1."), because
 *     the printed book does not use them; every word, number and symbol of
 *     the app's text is kept
 */
import type { Exercise as AppExercise, Section } from './app/curriculum';
import type {
  CurriculumChapter,
  CurriculumExercise,
  CurriculumLesson,
  CurriculumUnit,
  ExerciseType,
} from './curriculumData';

/** How each exercise type is labelled in the book (as in the original content export). */
export const EXERCISE_LABELS: Record<ExerciseType, string> = {
  meditation: 'MEDITATION (ध्यान)',
  letter_card: 'LETTER CARD',
  listening: 'LISTENING (श्रुति)',
  quiz: 'QUIZ — MULTIPLE CHOICE',
  memory: 'MEMORY QUIZ (स्मृति)',
  match: 'MATCH THE PAIRS',
  listen_pick: 'LISTEN & PICK',
  recital: 'SEQUENCE RECITAL (क्रम)',
  order: 'TAP IN ORDER',
  info_card: 'INFO CARD',
};

// ─── Text clean-up ───────────────────────────────────────────

const KEYCAP = /([0-9#*])\uFE0F?\u20E3/gu;
/** An emoji (with its variation selector, skin tone or ZWJ sequence) and one following space. */
const EMOJI = /\p{Extended_Pictographic}(?:\uFE0F|[\u{1F3FB}-\u{1F3FF}]|\u200D\p{Extended_Pictographic}\uFE0F?)* ?/gu;
/** Pictographic code points the course uses as ordinary symbols, not decoration. */
const KEEP = new Set(['↔']);

/** Drop decorative emoji; keep all text. */
export function cleanText(text: string | undefined): string {
  if (!text) return '';
  return text
    .replace(KEYCAP, '$1.')
    .replace(EMOJI, (match) => (KEEP.has(match.trim()) ? match : ''))
    .replace(/\uFE0F/g, '')
    .replace(/[ \t]+$/gm, '')
    .trim();
}

/** "A / B / B" → "A / B" (a phrase repeated by mistake in a subtitle). */
function dedupeSegments(text: string): string {
  const parts = text.split(' / ');
  return parts.filter((part, i) => i === 0 || part.trim() !== parts[i - 1].trim()).join(' / ');
}

/** A line made only of rule characters (═══, ───) is decoration between headings. */
const isRule = (line: string) => /^[\s═─━-]{3,}$/.test(line) && /[═─━-]{3}/.test(line);

function lines(text: string | undefined): string[] {
  return cleanText(text)
    .split('\n')
    .map((line) => line.replace(/\s+$/, ''))
    .filter((line) => line.trim() !== '' && !isRule(line));
}

// ─── Exercises ───────────────────────────────────────────────

type Body = Omit<CurriculumExercise, 'id' | 'title'>;

function convertExercise(ex: AppExercise): Body {
  const options = ex.options?.map(cleanText);
  const audio = ex.audio || undefined;
  switch (ex.type) {
    case 'dhyan': {
      const [heading, ...rest] = lines(ex.text);
      return { type: 'meditation', durationSeconds: ex.duration, sanskritPrompt: heading, bodyText: rest.join('\n') };
    }
    case 'letter_card':
      return {
        type: 'letter_card',
        letter: ex.letter,
        pronunciationGuide: cleanText(ex.phonetic),
        hindiExample: cleanText(ex.phHi),
        meaning: cleanText(ex.meaning),
        lore: cleanText(ex.meaningNote),
        deity: cleanText(ex.deity),
        deityLore: cleanText(ex.deityNote),
        articulationPoint: cleanText(ex.place),
        articulationDetail: cleanText(ex.placeNote),
        exampleWords: ex.words?.map((w) => ({ sanskrit: w.s, translit: w.p, meaning: cleanText(w.m) })),
      };
    case 'shruti':
      return {
        type: 'listening',
        preText: lines(ex.preText).join('\n'),
        audioPlayed: audio,
        revealText: lines(ex.revealText).join('\n'),
        question: cleanText(ex.q),
        options,
        correctIndex: ex.answer as number,
      };
    case 'multi':
      return { type: 'quiz', question: cleanText(ex.q), options, correctIndex: ex.answer as number, audioPlayed: audio };
    case 'smriti': {
      const shown = lines(ex.showText);
      const title = shown.length > 1 && shown[0].trim().endsWith(':') ? shown.shift()!.trim() : undefined;
      return {
        type: 'memory',
        memorizeTitle: title,
        memorizeItems: shown.map((line) => line.trim().replace(/^[•✦]\s*/, '')),
        memorizeSeconds: ex.showTime,
        question: cleanText(ex.q),
        options,
        correctIndex: ex.answer as number,
      };
    }
    case 'match':
      return {
        type: 'match',
        matchPrompt: cleanText(ex.q),
        pairs: (ex.pairs ?? []).map(([left, right]) => ({ left: cleanText(left), right: cleanText(right) })),
      };
    case 'listen_pick':
      return {
        type: 'listen_pick',
        question: cleanText(ex.prompt),
        audioPlayed: audio,
        options: ex.tiles?.map(cleanText),
        correctIndex: ex.tiles?.indexOf(String(ex.answer)) ?? -1,
      };
    case 'krama':
      return {
        type: 'recital',
        sequenceTitle: cleanText(ex.title),
        sequenceItems: ex.sequence?.map(cleanText),
        question: cleanText(ex.q),
        options,
        correctIndex: ex.answer as number,
        audioPlayed: audio,
      };
    case 'sequence':
      return { type: 'order', orderPrompt: cleanText(ex.title), orderItems: ex.items?.map(cleanText), audioPlayed: audio };
    case 'info': {
      const [title, ...rest] = lines(ex.text);
      return { type: 'info_card', infoTitle: title?.trim(), infoLines: rest, audioSample: audio };
    }
  }
}

/** Drop keys whose value is undefined or empty, so the data stays readable. */
function compact<T extends object>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, v]) => v !== undefined && v !== '' && !(Array.isArray(v) && v.length === 0)),
  ) as T;
}

// ─── Chapters ────────────────────────────────────────────────

/** "Vowels / स्वर" → { title: 'Vowels', sanskritTitle: 'स्वर' } */
function splitSectionName(name: string): { title: string; sanskritTitle: string } {
  const at = name.indexOf(' / ');
  return at < 0 ? { title: name, sanskritTitle: '' } : { title: name.slice(0, at), sanskritTitle: name.slice(at + 3) };
}

/**
 * Turn the app's sections into book chapters.
 * `unitPages` maps a unit number to the PDF page where it starts.
 */
export function buildChapters(sections: Section[], unitPages: Record<number, number> = {}): CurriculumChapter[] {
  return sections.map((section, index) => {
    const number = index + 1;
    const units: CurriculumUnit[] = section.units.map((unit) => {
      const lessons: CurriculumLesson[] = unit.lessons.map((lesson) => {
        const slug = lesson.id.replace(/\./g, '-');
        const exercises = lesson.ex.map((ex, i) => {
          const body = convertExercise(ex);
          return compact({ id: `ex-${slug}-${i + 1}`, title: `EXERCISE ${i + 1} · ${EXERCISE_LABELS[body.type]}`, ...body });
        });
        return { id: `lesson-${slug}`, number: lesson.id, title: cleanText(lesson.title), subtitle: cleanText(lesson.desc), exercises };
      });
      return {
        id: `unit-${unit.u}`,
        number: unit.u,
        title: cleanText(unit.title),
        subtitle: cleanText(unit.sub),
        pageStart: unitPages[unit.u] ?? 0,
        lessons,
      };
    });
    return {
      id: `ch-${number}`,
      number,
      ...splitSectionName(cleanText(section.section)),
      subtitle: dedupeSegments(cleanText(section.sDesc)),
      units,
    };
  });
}

// ─── Letter cards (for the Varṇamālā lab) ────────────────────

export interface LetterCardFacts {
  lesson: string;
  phonetic: string;
  meaning: string;
  deity: string;
  words: string[];
}

/** Every letter card in the course, keyed by its letter. */
export function letterCards(sections: Section[]): Map<string, LetterCardFacts> {
  const cards = new Map<string, LetterCardFacts>();
  for (const unit of sections.flatMap((s) => s.units)) {
    for (const lesson of unit.lessons) {
      for (const ex of lesson.ex) {
        if (ex.type !== 'letter_card' || !ex.letter || cards.has(ex.letter)) continue;
        cards.set(ex.letter, {
          lesson: lesson.id,
          phonetic: cleanText(ex.phonetic),
          meaning: cleanText(ex.meaning),
          deity: cleanText(ex.deity),
          words: (ex.words ?? []).map((w) => `${w.s} (${w.p}) — ${cleanText(w.m)}`),
        });
      }
    }
  }
  return cards;
}

// ─── Devanagari → IAST (for short names such as अच्, यण्) ─────

const VOWELS: Record<string, string> = {
  'अ': 'a', 'आ': 'ā', 'इ': 'i', 'ई': 'ī', 'उ': 'u', 'ऊ': 'ū', 'ऋ': 'ṛ', 'ॠ': 'ṝ', 'ऌ': 'ḷ',
  'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au',
};
const SIGNS: Record<string, string> = {
  'ा': 'ā', 'ि': 'i', 'ी': 'ī', 'ु': 'u', 'ू': 'ū', 'ृ': 'ṛ', 'ॄ': 'ṝ', 'ॢ': 'ḷ',
  'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au',
};
const CONSONANTS: Record<string, string> = {
  'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'ङ': 'ṅ', 'च': 'c', 'छ': 'ch', 'ज': 'j', 'झ': 'jh', 'ञ': 'ñ',
  'ट': 'ṭ', 'ठ': 'ṭh', 'ड': 'ḍ', 'ढ': 'ḍh', 'ण': 'ṇ', 'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n',
  'प': 'p', 'फ': 'ph', 'ब': 'b', 'भ': 'bh', 'म': 'm', 'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v',
  'श': 'ś', 'ष': 'ṣ', 'स': 's', 'ह': 'h',
};

export function toIast(text: string): string {
  let out = '';
  const chars = Array.from(text);
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (ch in CONSONANTS) {
      out += CONSONANTS[ch];
      const next = chars[i + 1];
      if (next === '्') i++;
      else if (next && next in SIGNS) { out += SIGNS[next]; i++; }
      else out += 'a';
    } else if (ch in VOWELS) out += VOWELS[ch];
    else if (ch === 'ं') out += 'ṃ';
    else if (ch === 'ः') out += 'ḥ';
    else out += ch;
  }
  return out;
}

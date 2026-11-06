// ─────────────────────────────────────────────────────────────
//  GENERATED FILE — do not edit by hand.
//  Copied verbatim from digitalmarket-arch/SanskritamApp
//  src/data/chandas.ts @ 6622cf8a59d5b70411b3b5b3ea4246800777ff81 (origin/claude/vibrant-lamport-avspmz)
//  Fix mistakes in the app, then re-run: node scripts/syncFromApp.mjs
// ─────────────────────────────────────────────────────────────
/**
 * ═══════════════════════════════════════════════════════════
 *  CHANDAS SCANNER — Sanskrit meter (prosody) analysis
 *
 *  Splits Devanagari verse into syllables (akṣaras) and marks each
 *  one light (लघु, ⏑) or heavy (गुरु, ─) by the classical rules:
 *
 *    heavy  — the vowel is long (आ ई ऊ ॠ ॡ ए ऐ ओ औ), or
 *           — anusvāra / visarga follows the vowel (ं ः), or
 *           — two or more consonants follow the vowel
 *             (word breaks do not matter in verse; line breaks do)
 *    light  — everything else
 *
 *  Candrabindu (ँ) only nasalises a vowel and does not add weight;
 *  avagraha (ऽ) marks an elided अ and is not a syllable. The Vedic
 *  anusvāra and ardhavisarga letters (e.g. the Yajurvedic ꣳ) count
 *  like ं and ः; Vedic tone marks are ignored.
 *
 *  Pure functions, no React Native imports — unit-tested in Node.
 * ═══════════════════════════════════════════════════════════
 */

export type Weight = 'L' | 'G';
export type WeightReason = 'long' | 'nasal-visarga' | 'conjunct' | 'closed' | 'light';

export interface Syllable {
  text: string;
  weight: Weight;
  reason: WeightReason;
  /** A word ends with this syllable (a space, punctuation or the line end follows). */
  wordEnd: boolean;
}

export interface Pada {
  syllables: Syllable[];
  /** Weights as a string, e.g. 'GGLGGLLGLGG'. */
  pattern: string;
  /** Named meter this pāda matches, if any. */
  meter: string | null;
  /** Plain-English observation shown under the pāda. */
  note: string;
}

export interface VerseScan {
  padas: Pada[];
  /** Name of the verse's meter when the pādas agree on one. */
  meter: string | null;
  /** Explanation of the verse-level verdict. */
  summary: string;
  syllableCount: number;
}

/** Classical meters named by their exact light/heavy pattern per pāda. */
export const NAMED_METERS: { name: string; pattern: string }[] = [
  // 8 syllables (ja-ra-la-ga); a śloka pāda is checked by its cadence instead
  { name: 'Pramāṇikā', pattern: 'LGLGLGLG' },
  // 11 syllables — Triṣṭubh family
  { name: 'Indravajrā', pattern: 'GGLGGLLGLGG' },
  { name: 'Upendravajrā', pattern: 'LGLGGLLGLGG' },
  { name: 'Śālinī', pattern: 'GGGGGLGGLGG' },
  { name: 'Rathoddhatā', pattern: 'GLGLLLGLGLG' },
  { name: 'Svāgatā', pattern: 'GLGLLLGLLGG' },
  // 12 syllables — Jagatī family
  { name: 'Vaṃśastha', pattern: 'LGLGGLLGLGLG' },
  { name: 'Indravaṃśā', pattern: 'GGLGGLLGLGLG' },
  { name: 'Drutavilambita', pattern: 'LLLGLLGLLGLG' },
  { name: 'Bhujaṅgaprayāta', pattern: 'LGGLGGLGGLGG' },
  { name: 'Toṭaka', pattern: 'LLGLLGLLGLLG' },
  // longer classical meters
  { name: 'Vasantatilakā', pattern: 'GGLGLLLGLLGLGG' },
  { name: 'Mālinī', pattern: 'LLLLLLGGGLGGLGG' },
  { name: 'Pañcacāmara', pattern: 'LGLGLGLGLGLGLGLG' },
  { name: 'Mandākrāntā', pattern: 'GGGGLLLLLGGLGGLGG' },
  { name: 'Śikhariṇī', pattern: 'LGGGGGLLLLLGGLLLG' },
  { name: 'Śārdūlavikrīḍita', pattern: 'GGGLLGLGLLLGGGLGGLG' },
  { name: 'Sragdharā', pattern: 'GGGGLGGLLLLLLGGLGGLGG' },
];

/** Syllables per pāda for the meters this scanner knows (8 = anuṣṭubh / gāyatrī). */
const PADA_LENGTHS = [8, 11, 12, 14, 15, 16, 17, 19, 21];

// ─── Character classes ───────────────────────────────────────

/** Independent vowels → true when long. */
const INDEPENDENT_VOWELS: Record<string, boolean> = {
  'अ': false, 'आ': true, 'इ': false, 'ई': true, 'उ': false, 'ऊ': true,
  'ऋ': false, 'ॠ': true, 'ऌ': false, 'ॡ': true,
  'ए': true, 'ऐ': true, 'ओ': true, 'औ': true,
};

/** Dependent vowel signs (mātrās) → true when long. */
const VOWEL_SIGNS: Record<string, boolean> = {
  'ा': true, 'ि': false, 'ी': true, 'ु': false, 'ू': true,
  'ृ': false, 'ॄ': true, 'ॢ': false, 'ॣ': true,
  'े': true, 'ै': true, 'ो': true, 'ौ': true,
};

const VIRAMA = '्';
const NUKTA = '़';
const OM = 'ॐ';
/**
 * Anusvāra, visarga, jihvāmūlīya, upadhmānīya, and the Vedic anusvāra /
 * ardhavisarga letters (U+1CE9–1CEC, U+1CEE–1CF3, U+1CFA, and ꣳ U+A8F3–A8F4):
 * each makes its syllable heavy.
 */
const WEIGHT_MARKS = new Set([
  '\u0902', '\u0903', '\u1CF5', '\u1CF6',
  '\u1CE9', '\u1CEA', '\u1CEB', '\u1CEC',
  '\u1CEE', '\u1CEF', '\u1CF0', '\u1CF1', '\u1CF2', '\u1CF3',
  '\u1CFA', '\uA8F3', '\uA8F4',
]);
/** Candrabindu (and the Vedic spacing candrabindu): nasalisation only, no weight. */
const NASAL_MARKS = new Set(['\u0901', '\uA8F2']);

/** Vedic tone and recitation marks — shown in texts, irrelevant to syllable weight. */
function isToneMark(code: number): boolean {
  return (code >= 0x0951 && code <= 0x0954)
    || (code >= 0x1CD0 && code <= 0x1CE8)
    || code === 0x1CED || code === 0x1CF4
    || (code >= 0x1CF7 && code <= 0x1CF9)
    || (code >= 0xA8E0 && code <= 0xA8F1);
}
/** Line (pāda / half-verse) separators: newline, daṇḍa, double daṇḍa, ASCII bars. */
const LINE_BREAK = /[\n\r।॥|]+/;

function isConsonant(ch: string): boolean {
  const code = ch.codePointAt(0) ?? 0;
  return (code >= 0x0915 && code <= 0x0939) || (code >= 0x0958 && code <= 0x095F);
}

interface Akshara {
  text: string;
  /** Consonants before the vowel. */
  onset: number;
  long: boolean;
  /** Anusvāra or visarga present. */
  marked: boolean;
  /** Word-final consonants (with virāma) after the vowel. */
  coda: number;
  wordEnd: boolean;
}

/** Parse one line into orthographic syllables with the facts weight depends on. */
function parseLine(line: string): Akshara[] {
  const chars = Array.from(line.normalize('NFC'));
  const out: Akshara[] = [];
  let pending = '';      // consonants (with virāma) waiting for a vowel
  let pendingCount = 0;

  // At a word break, a word-final consonant closes the previous syllable.
  const endWord = () => {
    const last = out[out.length - 1];
    if (!last) return;
    last.wordEnd = true;
    if (!pendingCount) return;
    last.text += pending;
    last.coda += pendingCount;
    pending = '';
    pendingCount = 0;
  };

  const startSyllable = (text: string, onset: number, long: boolean): Akshara => {
    const syllable: Akshara = { text: pending + text, onset: pendingCount + onset, long, marked: false, coda: 0, wordEnd: false };
    pending = '';
    pendingCount = 0;
    out.push(syllable);
    return syllable;
  };

  let i = 0;
  while (i < chars.length) {
    const ch = chars[i];
    let syllable: Akshara | null = null;

    if (isConsonant(ch)) {
      let consonant = ch;
      i++;
      if (chars[i] === NUKTA) { consonant += NUKTA; i++; }
      if (chars[i] === VIRAMA) {
        // A bare consonant: joins the next vowel's cluster (or ends the word).
        pending += consonant + VIRAMA;
        pendingCount++;
        i++;
        continue;
      }
      const sign = chars[i];
      if (sign !== undefined && sign in VOWEL_SIGNS) {
        syllable = startSyllable(consonant + sign, 1, VOWEL_SIGNS[sign]);
        i++;
      } else {
        syllable = startSyllable(consonant, 1, false); // inherent अ
      }
    } else if (ch in INDEPENDENT_VOWELS) {
      syllable = startSyllable(ch, 0, INDEPENDENT_VOWELS[ch]);
      i++;
    } else if (ch === OM) {
      syllable = startSyllable(ch, 0, true);
      i++;
    } else {
      // Spaces and punctuation end a word. Avagraha, accents, digits etc. carry no sound.
      if (/\s/.test(ch) || /[,.;:!?'"()\-–—]/.test(ch)) endWord();
      i++;
      continue;
    }

    // Marks that sit on the vowel just read.
    while (i < chars.length) {
      const mark = chars[i];
      if (WEIGHT_MARKS.has(mark)) { syllable.text += mark; syllable.marked = true; i++; continue; }
      if (NASAL_MARKS.has(mark)) { syllable.text += mark; i++; continue; }
      if (isToneMark(mark.codePointAt(0) ?? 0)) { i++; continue; }
      break;
    }
  }
  endWord();
  return out;
}

/** Weigh each syllable of a line (consonants are counted across word breaks). */
export function scanLine(line: string): Syllable[] {
  const aksharas = parseLine(line);
  return aksharas.map((a, index) => {
    const next = aksharas[index + 1];
    const following = a.coda + (next ? next.onset : 0);
    let weight: Weight = 'L';
    let reason: WeightReason = 'light';
    if (a.long) { weight = 'G'; reason = 'long'; }
    else if (a.marked) { weight = 'G'; reason = 'nasal-visarga'; }
    else if (next && following >= 2) { weight = 'G'; reason = 'conjunct'; }
    else if (!next && a.coda > 0) { weight = 'G'; reason = 'closed'; }
    return { text: a.text, weight, reason, wordEnd: a.wordEnd };
  });
}

/** Human explanation of why a syllable is light or heavy. */
export function describeWeight(syllable: Syllable): string {
  switch (syllable.reason) {
    case 'long': return `${syllable.text} — heavy (गुरु): its vowel is long`;
    case 'nasal-visarga': return `${syllable.text} — heavy (गुरु): it carries anusvāra or visarga`;
    case 'conjunct': return `${syllable.text} — heavy (गुरु): two or more consonants follow its short vowel`;
    case 'closed': return `${syllable.text} — heavy (गुरु): it ends in a consonant`;
    default: return `${syllable.text} — light (लघु): short vowel, at most one consonant follows`;
  }
}

export function toPattern(syllables: Syllable[]): string {
  return syllables.map(s => s.weight).join('');
}

/** Exact pattern match, except the last syllable of a pāda, which is free (anceps). */
export function matchesPattern(pattern: string, meterPattern: string): boolean {
  if (pattern.length !== meterPattern.length) return false;
  return pattern.slice(0, -1) === meterPattern.slice(0, -1);
}

export function identifyPada(pattern: string): string | null {
  return NAMED_METERS.find(m => matchesPattern(pattern, m.pattern))?.name ?? null;
}

/** Prosody marks as text. ˘ (U+02D8) and — (U+2014) exist in every Android system font. */
export const markFor = (weight: Weight) => (weight === 'G' ? '—' : '˘');
const symbols = (pattern: string) => pattern.split('').map(w => markFor(w as Weight)).join(' ');

/** Cut a line into pieces ending at the given syllable positions. */
function cut(syllables: Syllable[], ends: number[]): Syllable[][] {
  return ends.map((end, k) => syllables.slice(k === 0 ? 0 : ends[k - 1], end));
}

/**
 * Split a line into 2–4 pādas of 7–9 syllables, cutting only where a word
 * ends. Vedic pādas are not always exactly 8 syllables long (the Gāyatrī's
 * first pāda has 7 as written), so equal chunks would cut through a word.
 */
function splitAtWordBreaks(syllables: Syllable[]): Syllable[][] | null {
  const n = syllables.length;
  const breaks = syllables.flatMap((s, i) => (s.wordEnd && i + 1 < n ? [i + 1] : []));
  const options: number[][] = [];
  const walk = (start: number, ends: number[]) => {
    const rest = n - start;
    if (ends.length > 0 && rest >= 7 && rest <= 9) options.push([...ends, n]);
    if (ends.length === 3) return;
    for (const b of breaks) if (b - start >= 7 && b - start <= 9) walk(b, [...ends, b]);
  };
  walk(0, []);
  if (options.length === 0) return null;
  const cost = (ends: number[]) => ends.reduce((sum, end, k) => sum + Math.abs(end - (k ? ends[k - 1] : 0) - 8), 0);
  return cut(syllables, options.reduce((a, b) => (cost(b) < cost(a) ? b : a)));
}

/** Split one line (a pāda or a half-verse) into pādas. */
function splitLine(syllables: Syllable[]): Syllable[][] {
  const n = syllables.length;
  // 1. The whole line is one pāda of a named meter (Pañcacāmara has 16 syllables).
  if (identifyPada(toPattern(syllables))) return [syllables];
  // 2. Equal pādas of a known length, preferring the split under which the most
  //    pādas match a named meter; on a tie the shorter pādas win, so a śloka
  //    half-verse of 16 syllables becomes 8 + 8.
  let best: Syllable[][] | null = null;
  let bestScore = -1;
  for (const size of PADA_LENGTHS) {
    if (![2, 3, 4].some(count => size * count === n)) continue;
    const parts = cut(syllables, Array.from({ length: n / size }, (_, k) => (k + 1) * size));
    const score = parts.filter(p => identifyPada(toPattern(p)) !== null).length;
    if (score > bestScore) { best = parts; bestScore = score; }
  }
  if (best && bestScore > 0) return best;
  // 3. Pādas of uneven length, cut at word breaks.
  if (n % 8 !== 0) {
    const uneven = splitAtWordBreaks(syllables);
    if (uneven) return uneven;
  }
  return best ?? [syllables];
}

/** Vipulās: the accepted alternatives to ˘ — — at syllables 5–7 of an odd pāda. */
const VIPULA: Record<string, string> = { LLL: 'na', GLL: 'bha', GGG: 'ma', GLG: 'ra' };

/** Śloka cadence at syllables 5-6-7: odd pādas ˘ — —, even pādas ˘ — ˘. */
function anushtubhNote(pattern: string, padaIndex: number): string {
  const cadence = pattern.slice(4, 7);
  const shown = `Syllables 5-6-7 = ${symbols(cadence)}`;
  if (padaIndex % 2 === 1) {
    return cadence === 'LGL'
      ? `${shown} ✓ even-pāda rule of the śloka`
      : `${shown} — the even-pāda rule expects ${symbols('LGL')}`;
  }
  if (cadence === 'LGG') return `${shown} ✓ odd-pāda rule of the śloka`;
  if (VIPULA[cadence]) return `${shown} — ${VIPULA[cadence]}-vipulā, a variant allowed in odd pādas`;
  if (cadence === 'LGL') return `${shown} — that is the even-pāda cadence; an odd pāda expects ${symbols('LGG')}`;
  return `${shown} — the odd-pāda rule expects ${symbols('LGG')}`;
}

/** Scan a verse: lines are split at newlines and daṇḍas (। ॥). */
export function scanVerse(text: string): VerseScan {
  const lines = text.split(LINE_BREAK).map(scanLine).filter(line => line.length > 0);
  const groups = lines.flatMap(splitLine);
  const patterns = groups.map(toPattern);
  const syllableCount = groups.reduce((n, p) => n + p.length, 0);
  const lengths = groups.map(p => p.length);
  const allEight = groups.length > 0 && lengths.every(n => n === 8);

  // A śloka is more than 8-syllable pādas in pairs (a few Gītā verses have
  // six): its even pādas end ˘ — ˘ at syllables 5–7, and its odd pādas
  // almost never do. Meters such as Pramāṇikā have that cadence everywhere.
  const cadence = (p: string) => p.slice(4, 7);
  const odd = patterns.filter((_, i) => i % 2 === 0);
  const even = patterns.filter((_, i) => i % 2 === 1);
  const inPairs = allEight && groups.length % 2 === 0;
  const anushtubh = inPairs
    && even.filter(p => cadence(p) === 'LGL').length * 2 >= even.length
    && odd.filter(p => cadence(p) === 'LGL').length * 2 < odd.length;

  const padas: Pada[] = groups.map((syllables, index) => {
    const pattern = patterns[index];
    const meter = anushtubh ? null : identifyPada(pattern);
    let note: string;
    if (anushtubh) note = anushtubhNote(pattern, index);
    else if (meter) note = `${syllables.length} syllables · matches ${meter}`;
    // 8-syllable pādas in pairs that miss the śloka: show which cadence breaks it.
    else if (inPairs) note = anushtubhNote(pattern, index);
    else if (syllables.length === 8) note = '8 syllables — the pāda length of anuṣṭubh and gāyatrī';
    else note = `${syllables.length} syllables — no exact match in this scanner's list`;
    return { syllables, pattern, meter, note };
  });

  const names = padas.map(p => p.meter);
  let meter: string | null = null;
  let summary: string;
  if (padas.length === 0) {
    summary = 'Type or paste a verse in Devanagari.';
  } else if (anushtubh) {
    meter = 'Anuṣṭubh (śloka)';
    summary = `${padas.length} pādas of 8 syllables with the śloka cadence — the meter of the epics and the Gītā.`;
  } else if (padas.length === 3 && lengths.every(n => n >= 7 && n <= 9)) {
    meter = 'Gāyatrī';
    summary = allEight
      ? 'Three pādas of 8 syllables — the Vedic gāyatrī.'
      : 'Three pādas of about 8 syllables — Vedic gāyatrī. Metrically, a short pāda is restored to 8 by reading -य/-व as -इय/-उव (वरेण्यम् → वरेणियम्).';
  } else if (padas.length === 1) {
    meter = padas[0].meter;
    summary = meter
      ? `This pāda matches ${meter}. Add the other pādas, one per line, to check the whole verse.`
      : `One line of ${syllableCount} syllables. Put each pāda or half-verse on its own line to identify the meter.`;
  } else if (names.every(n => n !== null) && new Set(names).size === 1) {
    meter = names[0];
    summary = `Every pāda matches ${meter}.`;
  } else if (names.every(n => n === 'Indravajrā' || n === 'Upendravajrā')) {
    meter = 'Upajāti';
    summary = 'A mix of Indravajrā and Upendravajrā pādas is called Upajāti.';
  } else if (allEight) {
    summary = `${padas.length} pādas of 8 syllables, but not in the śloka pattern: odd pādas end ${symbols('LGG')} and even pādas ${symbols('LGL')} at syllables 5–7.`;
  } else {
    summary = 'The pādas do not agree on one named meter. Check the line breaks — put each pāda or half-verse on its own line.';
  }
  return { padas, meter, summary, syllableCount };
}

/** Verses to try in the scanner, each tied to a lesson in the course. */
export const SAMPLE_VERSES: { id: string; title: string; text: string }[] = [
  {
    id: 'gita',
    title: 'Gītā 2.47',
    text: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
  },
  {
    id: 'gayatri',
    title: 'Gāyatrī mantra',
    text: 'तत्सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि\nधियो यो नः प्रचोदयात् ॥',
  },
  {
    id: 'kumara',
    title: 'Kumārasambhava 1.1',
    text: 'अस्त्युत्तरस्यां दिशि देवतात्मा\nहिमालयो नाम नगाधिराजः ।\nपूर्वापरौ तोयनिधी वगाह्य\nस्थितः पृथिव्या इव मानदण्डः ॥',
  },
  {
    id: 'megha',
    title: 'Meghadūta 1.1',
    text: 'कश्चित्कान्ताविरहगुरुणा स्वाधिकारात्प्रमत्तः\nशापेनास्तङ्गमितमहिमा वर्षभोग्येण भर्तुः ।\nयक्षश्चक्रे जनकतनयास्नानपुण्योदकेषु\nस्निग्धच्छायातरुषु वसतिं रामगिर्याश्रमेषु ॥',
  },
];

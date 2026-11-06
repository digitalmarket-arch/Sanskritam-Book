#!/usr/bin/env node
/**
 * Typeset the complete curriculum PDF from the book's data.
 *
 * Writes Sanskritam-Curriculum.pdf and public/Sanskritam-Curriculum.pdf, plus
 * src/data/pdfLayout.ts (the page each unit starts on, which the web book
 * shows next to every unit).
 *
 * The chapters come from src/data/curriculumData.ts, which builds them from the
 * SanskritamApp curriculum (copied in by scripts/syncFromApp.mjs). So the PDF,
 * the web book and the app all show the same corrected text. Nothing in here
 * is course content; to change the text, change the app and re-sync.
 *
 * Usage: node scripts/updatePdfCurriculum.mjs
 *
 * Fonts are the open-licence (OFL) Noto families installed as dev
 * dependencies (@expo-google-fonts/noto-sans-*). Each character is set in the
 * first font that has it: Devanagari in Noto Sans Devanagari, Latin and IAST
 * in Noto Sans, arrows and prosody marks in the Math / Symbols fonts. All
 * runs on a line share one baseline.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import PDFDocument from 'pdfkit';

const require = createRequire(import.meta.url);
const fontkit = require('@pdf-lib/fontkit');
const { loadTs } = require('./lib/loadTs.cjs');
const { contentHash } = require('./lib/contentHash.cjs');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUTS = ['Sanskritam-Curriculum.pdf', 'public/Sanskritam-Curriculum.pdf'].map((f) => path.join(ROOT, f));
const LAYOUT_FILE = path.join(ROOT, 'src/data/pdfLayout.ts');

const { CURRICULUM_CHAPTERS, CURRICULUM_TOTALS } = loadTs(path.join(ROOT, 'src/data/curriculumData.ts'));
const { APP_SOURCE } = loadTs(path.join(ROOT, 'src/data/app/source.ts'));

// ─── Fonts ───────────────────────────────────────────────────

const FONT_MODULES = {
  deva: '@expo-google-fonts/noto-sans-devanagari/400Regular/NotoSansDevanagari_400Regular.ttf',
  devaBold: '@expo-google-fonts/noto-sans-devanagari/700Bold/NotoSansDevanagari_700Bold.ttf',
  sans: '@expo-google-fonts/noto-sans/400Regular/NotoSans_400Regular.ttf',
  sansBold: '@expo-google-fonts/noto-sans/700Bold/NotoSans_700Bold.ttf',
  math: '@expo-google-fonts/noto-sans-math/400Regular/NotoSansMath_400Regular.ttf',
  symbols: '@expo-google-fonts/noto-sans-symbols/400Regular/NotoSansSymbols_400Regular.ttf',
  symbols2: '@expo-google-fonts/noto-sans-symbols-2/400Regular/NotoSansSymbols2_400Regular.ttf',
};
const FONTS = Object.fromEntries(
  Object.entries(FONT_MODULES).map(([name, mod]) => {
    const file = require.resolve(mod);
    return [name, { file, face: fontkit.create(fs.readFileSync(file)) }];
  }),
);
const has = (font, cp) => FONTS[font].face.hasGlyphForCodePoint(cp);

const isDevanagari = (cp) =>
  (cp >= 0x0900 && cp <= 0x097f) || (cp >= 0xa8e0 && cp <= 0xa8ff) || (cp >= 0x1cd0 && cp <= 0x1cff);
/** Marks that belong to the character before them. */
const isCombining = (cp) => (cp >= 0x0300 && cp <= 0x036f) || cp === 0x200c || cp === 0x200d || cp === 0xfe0f;
/** Characters every text font has; they stay in the current run so a line does not flip fonts on a space. */
const NEUTRAL = /[\s0-9.,;:!?'"()[\]\-–—/·…‘’“”=+&%]/u;
const missing = new Set();

function pickFont(cp, bold) {
  if (isDevanagari(cp) || cp === 0x25cc) return bold ? 'devaBold' : 'deva';
  for (const name of bold ? ['sansBold', 'devaBold', 'math', 'symbols', 'symbols2'] : ['sans', 'deva', 'math', 'symbols', 'symbols2']) {
    if (has(name, cp)) return name;
  }
  return null;
}

/** Split text into runs, each set in one font. */
function fontRuns(text, bold) {
  const runs = [];
  for (const ch of text) {
    const cp = ch.codePointAt(0);
    const last = runs[runs.length - 1];
    let font;
    if (last && (isCombining(cp) || (NEUTRAL.test(ch) && has(last.font, cp)))) font = last.font;
    else font = pickFont(cp, bold);
    if (!font) {
      missing.add(`U+${cp.toString(16).toUpperCase()} ${ch}`);
      continue;
    }
    if (last && last.font === font) last.text += ch;
    else runs.push({ font, text: ch });
  }
  return runs;
}

// ─── Page geometry & styles ──────────────────────────────────

const PAGE = { width: 595.28, height: 841.89 };
const MARGIN = { top: 64, bottom: 64, left: 60, right: 60 };
const TEXT_WIDTH = PAGE.width - MARGIN.left - MARGIN.right;
const BOTTOM = PAGE.height - MARGIN.bottom;
const RUNNING_HEAD = 'Sanskritam — Complete Curriculum';

const INK = '#111827';
const BODY = '#1F2937';
const MUTED = '#6B7280';
const LABEL = '#92400E';
const CORRECT = '#065F46';

const STYLES = {
  coverDeva: { size: 40, bold: true, color: INK, align: 'center' },
  coverTitle: { size: 22, bold: true, color: INK, align: 'center' },
  coverText: { size: 12, color: '#374151', align: 'center' },
  coverSmall: { size: 9.5, color: MUTED, align: 'center' },
  tocTitle: { size: 18, bold: true, color: INK },
  chapter: { size: 18, bold: true, color: INK },
  chapterSub: { size: 11, color: '#4B5563' },
  unit: { size: 14, bold: true, color: INK },
  unitSub: { size: 10, color: MUTED },
  lesson: { size: 12, bold: true, color: INK },
  lessonSub: { size: 9.5, color: MUTED },
  label: { size: 9, bold: true, color: LABEL },
  body: { size: 10, color: BODY },
  strong: { size: 10, bold: true, color: INK },
  muted: { size: 9, color: MUTED },
  letter: { size: 28, bold: true, color: INK },
  option: { size: 10, color: BODY, indent: 14 },
  correct: { size: 10, bold: true, color: CORRECT, indent: 14 },
  item: { size: 10, color: BODY, indent: 14 },
};
/** Line height and baseline as multiples of the font size (room for Devanagari marks above and below). */
const LINE = 1.6;
const BASELINE = 1.12;

// ─── Layout engine ───────────────────────────────────────────

class Typesetter {
  constructor(doc) {
    this.doc = doc;
    this.y = MARGIN.top;
  }

  newPage() {
    this.doc.addPage({ size: 'A4', margin: 0 });
    this.y = MARGIN.top;
  }

  get pageNumber() {
    return this.doc.bufferedPageRange().count;
  }

  ensureSpace(height) {
    if (this.y + height > BOTTOM) this.newPage();
  }

  space(points) {
    this.y += points;
  }

  rule() {
    this.ensureSpace(12);
    this.doc.moveTo(MARGIN.left, this.y).lineTo(PAGE.width - MARGIN.right, this.y).strokeColor('#E5E7EB').lineWidth(0.75).stroke();
    this.y += 6;
  }

  width(font, size, text) {
    return this.doc.font(FONTS[font].file).fontSize(size).widthOfString(text);
  }

  /** Width of text set in its fallback fonts. */
  measure(text, size, bold) {
    return fontRuns(text, bold).reduce((n, r) => n + this.width(r.font, size, r.text), 0);
  }

  /** Draw one line (no wrapping, no page breaks) with its top at y; returns its width. */
  drawLine(text, x, y, size, bold, color) {
    let cursor = x;
    for (const run of fontRuns(text, bold)) {
      this.doc
        .font(FONTS[run.font].file)
        .fontSize(size)
        .fillColor(color)
        .text(run.text, cursor, y, { lineBreak: false, baseline: -size * BASELINE });
      cursor += this.width(run.font, size, run.text);
    }
    return cursor - x;
  }

  /** Break one paragraph (no newlines) into lines of atoms that fit the width. */
  layout(text, style, width) {
    const size = style.size;
    // Words: runs cut after each space; a word may span several fonts.
    const words = [];
    let word = [];
    for (const run of fontRuns(text, !!style.bold)) {
      for (const piece of run.text.match(/\S+\s*|\s+/gu) ?? []) {
        word.push({ font: run.font, text: piece, width: this.width(run.font, size, piece) });
        if (/\s$/u.test(piece)) {
          words.push(word);
          word = [];
        }
      }
    }
    if (word.length) words.push(word);

    const lines = [];
    let line = [];
    let lineWidth = 0;
    const trailing = (atoms) => {
      const last = atoms[atoms.length - 1];
      const trimmed = last.text.replace(/\s+$/u, '');
      return last.width - (trimmed ? this.width(last.font, size, trimmed) : 0);
    };
    for (let w of words) {
      let wWidth = w.reduce((n, a) => n + a.width, 0);
      if (line.length && lineWidth + wWidth - trailing(w) > width) {
        lines.push(line);
        line = [];
        lineWidth = 0;
      }
      // A word wider than the whole line is cut between grapheme clusters.
      while (wWidth - trailing(w) > width) {
        const [head, rest] = this.cutWord(w, width, size);
        lines.push(head);
        w = rest;
        wWidth = w.reduce((n, a) => n + a.width, 0);
      }
      line.push(...w);
      lineWidth += wWidth;
    }
    if (line.length) lines.push(line);
    return lines;
  }

  cutWord(atoms, width, size) {
    const segmenter = new Intl.Segmenter('hi', { granularity: 'grapheme' });
    const head = [];
    let used = 0;
    for (let i = 0; i < atoms.length; i++) {
      const atom = atoms[i];
      let taken = '';
      for (const { segment } of segmenter.segment(atom.text)) {
        const next = this.width(atom.font, size, taken + segment);
        if (used + next > width && (head.length || taken)) {
          if (taken) head.push({ ...atom, text: taken, width: this.width(atom.font, size, taken) });
          const restText = atom.text.slice(taken.length);
          const rest = [{ ...atom, text: restText, width: this.width(atom.font, size, restText) }, ...atoms.slice(i + 1)];
          return [head, rest];
        }
        taken += segment;
      }
      head.push(atom);
      used += atom.width;
    }
    return [head, []];
  }

  /** Set a paragraph; `\n` starts a new line. Returns the page it started on. */
  paragraph(text, styleName, extra = {}) {
    const style = { ...STYLES[styleName], ...extra };
    const size = style.size;
    const lineHeight = size * LINE;
    const startPage = (() => {
      this.ensureSpace(lineHeight * (style.keepLines ?? 1));
      return this.pageNumber;
    })();
    for (const raw of String(text).split('\n')) {
      // Leading spaces in the course text are indentation.
      const lead = raw.match(/^ */)[0].length;
      const indent = (style.indent ?? 0) + lead * size * 0.3;
      const lines = this.layout(raw.slice(lead) || ' ', style, TEXT_WIDTH - indent);
      for (const atoms of lines) {
        this.ensureSpace(lineHeight);
        while (atoms.length && /^\s+$/u.test(atoms[atoms.length - 1].text)) atoms.pop();
        const last = atoms[atoms.length - 1];
        if (last) {
          const trimmed = last.text.replace(/\s+$/u, '');
          atoms[atoms.length - 1] = { ...last, text: trimmed, width: this.width(last.font, size, trimmed) };
        }
        const total = atoms.reduce((n, a) => n + a.width, 0);
        let x = MARGIN.left + indent;
        if (style.align === 'center') x = MARGIN.left + (TEXT_WIDTH - total) / 2;
        if (style.align === 'right') x = MARGIN.left + TEXT_WIDTH - total;
        for (const atom of atoms) {
          if (atom.text) {
            this.doc
              .font(FONTS[atom.font].file)
              .fontSize(size)
              .fillColor(style.color)
              .text(atom.text, x, this.y, { lineBreak: false, baseline: -size * BASELINE });
          }
          x += atom.width;
        }
        this.y += lineHeight;
      }
    }
    this.y += style.after ?? size * 0.25;
    return startPage;
  }
}

// ─── Exercises → paragraphs (the layout of the original content export) ──

function options(t, ex) {
  for (const [i, opt] of (ex.options ?? []).entries()) {
    const letter = String.fromCharCode(65 + i);
    if (i === ex.correctIndex) t.paragraph(`${letter}. ${opt}  ✓ CORRECT`, 'correct', { after: 1 });
    else t.paragraph(`${letter}. ${opt}`, 'option', { after: 1 });
  }
}

function exercise(t, ex) {
  t.ensureSpace(60);
  t.rule();
  t.paragraph(ex.title, 'label', { keepLines: 3 });
  const audio = () => ex.audioPlayed && t.paragraph(`Audio played: ${ex.audioPlayed}`, 'muted');
  switch (ex.type) {
    case 'meditation':
      t.paragraph(`Duration: ${ex.durationSeconds} seconds`, 'muted');
      t.paragraph(ex.sanskritPrompt, 'strong');
      if (ex.bodyText) t.paragraph(ex.bodyText, 'body');
      break;
    case 'letter_card':
      t.paragraph(ex.letter, 'letter', { after: 0 });
      t.paragraph([ex.pronunciationGuide, ex.hindiExample].filter(Boolean).join(' · '), 'body');
      t.paragraph(`Meaning: ${ex.meaning}`, 'strong');
      if (ex.lore) t.paragraph(ex.lore, 'body');
      if (ex.deity) {
        t.paragraph(`Deity: ${ex.deity}`, 'strong');
        if (ex.deityLore) t.paragraph(ex.deityLore, 'body');
      }
      t.paragraph(`Articulation: ${ex.articulationPoint}`, 'strong');
      if (ex.articulationDetail) t.paragraph(ex.articulationDetail, 'body');
      if (ex.exampleWords?.length) {
        t.paragraph('Example words:', 'strong');
        for (const w of ex.exampleWords) t.paragraph(`• ${w.sanskrit} (${w.translit}) — ${w.meaning}`, 'item', { after: 1 });
      }
      break;
    case 'info_card':
      if (ex.audioSample) t.paragraph(`Audio played: ${ex.audioSample}`, 'muted');
      if (ex.infoTitle) t.paragraph(ex.infoTitle, 'strong');
      for (const line of ex.infoLines ?? []) t.paragraph(line, 'body', { after: 1.5 });
      break;
    case 'listening':
      if (ex.preText) t.paragraph(ex.preText, 'body');
      audio();
      if (ex.revealText) {
        t.paragraph('Reveal text:', 'strong');
        t.paragraph(ex.revealText, 'body');
      }
      t.paragraph(`Question: ${ex.question}`, 'strong');
      options(t, ex);
      break;
    case 'quiz':
      t.paragraph(`Question: ${ex.question}`, 'strong');
      audio();
      options(t, ex);
      break;
    case 'memory':
      t.paragraph(`Memorize (shown ${ex.memorizeSeconds}s):`, 'muted');
      if (ex.memorizeTitle) t.paragraph(ex.memorizeTitle, 'strong');
      for (const item of ex.memorizeItems ?? []) t.paragraph(`• ${item}`, 'item', { after: 1 });
      t.paragraph(`Question: ${ex.question}`, 'strong');
      options(t, ex);
      break;
    case 'match':
      t.paragraph(`Prompt: ${ex.matchPrompt}`, 'strong');
      for (const p of ex.pairs ?? []) t.paragraph(`• ${p.left} → ${p.right}`, 'item', { after: 1 });
      break;
    case 'listen_pick':
      t.paragraph(`Prompt: ${ex.question}`, 'strong');
      audio();
      options(t, ex);
      break;
    case 'recital':
      t.paragraph(ex.sequenceTitle, 'strong');
      for (const [i, item] of (ex.sequenceItems ?? []).entries()) t.paragraph(`${i + 1}. ${item}`, 'item', { after: 1 });
      audio();
      t.paragraph(`Question: ${ex.question}`, 'strong');
      options(t, ex);
      break;
    case 'order':
      t.paragraph(`Task: ${ex.orderPrompt}`, 'strong');
      t.paragraph('Correct order:', 'muted');
      for (const [i, item] of (ex.orderItems ?? []).entries()) t.paragraph(`${i + 1}. ${item}`, 'item', { after: 1 });
      audio();
      break;
    default:
      throw new Error(`Unknown exercise type ${ex.type} (${ex.id})`);
  }
  t.space(4);
}

// ─── Document ────────────────────────────────────────────────

const TOC_LINE = 15;
const TOC_HEADING = 40;
const TOC_FIRST_CAPACITY = Math.floor((BOTTOM - MARGIN.top - TOC_HEADING) / TOC_LINE);
const TOC_CAPACITY = Math.floor((BOTTOM - MARGIN.top) / TOC_LINE);
const tocPagesFor = (entries) =>
  entries <= TOC_FIRST_CAPACITY ? 1 : 1 + Math.ceil((entries - TOC_FIRST_CAPACITY) / TOC_CAPACITY);

function truncate(t, text, size, bold, width) {
  if (t.measure(text, size, bold) <= width) return text;
  const chars = Array.from(text);
  while (chars.length > 1 && t.measure(`${chars.join('')}…`, size, bold) > width) chars.pop();
  return `${chars.join('').trimEnd()}…`;
}

async function main() {
  const doc = new PDFDocument({ size: 'A4', margin: 0, bufferPages: true, autoFirstPage: true });
  const chunks = [];
  doc.on('data', (c) => chunks.push(c));
  const done = new Promise((resolve) => doc.on('end', resolve));

  const totals = CURRICULUM_TOTALS;
  doc.info.Title = `Sanskritam — Complete Curriculum (${totals.chapters} Chapters · ${totals.units} Units)`;
  doc.info.Author = 'Sanskritam';
  doc.info.Subject = 'The complete Sanskrit course of the SanskritamApp: Varṇamālā to Pāṇini, Vedic Sanskrit, Darśana, Poetics, the Śāstras and the Dhātupāṭha';
  doc.info.Keywords = `SanskritamApp ${APP_SOURCE.commit}`;

  const t = new Typesetter(doc);

  // Page 1 — cover
  t.y = 250;
  t.paragraph('संस्कृतम्', 'coverDeva', { after: 10 });
  t.paragraph('Sanskritam — Complete Curriculum', 'coverTitle', { after: 14 });
  t.paragraph('Chapters, units, lessons and exercises — the full course, with answers', 'coverText');
  t.paragraph(`${totals.chapters} chapters · ${totals.units} units · ${totals.lessons} lessons · ${totals.exercises} exercises`, 'coverText', { after: 30 });
  t.paragraph(`Typeset from the SanskritamApp curriculum (commit ${APP_SOURCE.commit.slice(0, 7)})`, 'coverSmall');
  t.paragraph(`Generated ${new Date().toISOString().slice(0, 10)}`, 'coverSmall');

  // Table of contents pages are reserved now and filled in at the end.
  const tocEntries = CURRICULUM_CHAPTERS.flatMap((ch) => [{ chapter: ch }, ...ch.units.map((unit) => ({ unit }))]);
  const tocPageCount = tocPagesFor(tocEntries.length);
  const tocFirstPage = 2;
  for (let i = 0; i < tocPageCount; i++) t.newPage();

  // Chapters
  const chapterPages = {};
  const unitPages = {};
  for (const ch of CURRICULUM_CHAPTERS) {
    t.newPage();
    chapterPages[ch.number] = t.pageNumber;
    doc.addNamedDestination(`chapter-${ch.number}`);
    const chapterOutline = doc.outline.addItem(`Chapter ${ch.number} — ${ch.title} / ${ch.sanskritTitle}`);
    t.paragraph(`Chapter ${ch.number} — ${ch.title} / ${ch.sanskritTitle}`, 'chapter', { after: 4 });
    t.paragraph(ch.subtitle, 'chapterSub', { after: 14 });
    for (const unit of ch.units) {
      t.ensureSpace(120);
      unitPages[unit.number] = t.pageNumber;
      doc.addNamedDestination(`unit-${unit.number}`, 'XYZ', null, PAGE.height - t.y + 10, null);
      chapterOutline.addItem(`Unit ${unit.number} — ${unit.title}`);
      t.paragraph(`Unit ${unit.number} — ${unit.title}`, 'unit', { after: 2 });
      t.paragraph(unit.subtitle, 'unitSub', { after: 10 });
      for (const lesson of unit.lessons) {
        t.ensureSpace(90);
        t.paragraph(`Lesson ${lesson.number} — ${lesson.title}`, 'lesson', { after: 2 });
        t.paragraph(lesson.subtitle, 'lessonSub', { after: 8 });
        for (const ex of lesson.exercises) exercise(t, ex);
        t.space(6);
      }
    }
  }

  // Table of contents
  let tocPage = 0;
  doc.switchToPage(tocFirstPage - 1);
  let y = MARGIN.top;
  t.drawLine('Table of Contents', MARGIN.left, y, 18, true, INK);
  y += TOC_HEADING;
  const numberWidth = 30;
  for (const entry of tocEntries) {
    if (y + TOC_LINE > BOTTOM) {
      tocPage++;
      doc.switchToPage(tocFirstPage - 1 + tocPage);
      y = MARGIN.top;
    }
    const isChapter = !!entry.chapter;
    const page = isChapter ? chapterPages[entry.chapter.number] : unitPages[entry.unit.number];
    const indent = isChapter ? 0 : 16;
    const size = isChapter ? 10.5 : 9.5;
    const label = isChapter
      ? `Chapter ${entry.chapter.number} — ${entry.chapter.title} / ${entry.chapter.sanskritTitle}`
      : `Unit ${entry.unit.number} — ${entry.unit.title}`;
    const shown = truncate(t, label, size, isChapter, TEXT_WIDTH - indent - numberWidth - 16);
    const textWidth = t.drawLine(shown, MARGIN.left + indent, y, size, isChapter, isChapter ? INK : BODY);
    // Dotted leader, then the page number flush right.
    const dotsFrom = MARGIN.left + indent + textWidth + 6;
    const dotsTo = MARGIN.left + TEXT_WIDTH - numberWidth;
    let dots = '';
    while (t.width('sans', size, `${dots}. `) < dotsTo - dotsFrom) dots += '. ';
    if (dots) t.drawLine(dots, dotsFrom, y, size, false, '#9CA3AF');
    const num = String(page);
    t.drawLine(num, MARGIN.left + TEXT_WIDTH - t.width('sans', size, num), y, size, false, INK);
    doc.goTo(MARGIN.left + indent, y, TEXT_WIDTH - indent, TOC_LINE, isChapter ? `chapter-${entry.chapter.number}` : `unit-${entry.unit.number}`);
    y += TOC_LINE;
  }
  if (tocPage + 1 !== tocPageCount) throw new Error(`Table of contents used ${tocPage + 1} pages, ${tocPageCount} reserved`);

  // Running head and page numbers
  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    const n = i + 1;
    if (n > 1) {
      doc.font(FONTS.sans.file).fontSize(8.5).fillColor(MUTED);
      doc.text(RUNNING_HEAD, MARGIN.left + TEXT_WIDTH - doc.widthOfString(RUNNING_HEAD), 30, { lineBreak: false });
    }
    const label = `Page ${n} of ${range.count}`;
    doc.font(FONTS.sans.file).fontSize(8.5).fillColor(MUTED);
    doc.text(label, MARGIN.left + (TEXT_WIDTH - doc.widthOfString(label)) / 2, PAGE.height - 42, { lineBreak: false });
  }

  doc.end();
  await done;
  const bytes = Buffer.concat(chunks);
  for (const file of OUTPUTS) fs.writeFileSync(file, bytes);

  const layout = [
    '// ─────────────────────────────────────────────────────────────',
    '//  GENERATED FILE — do not edit by hand.',
    '//  Written by scripts/updatePdfCurriculum.mjs after it typesets',
    '//  Sanskritam-Curriculum.pdf: the page each unit starts on.',
    '// ─────────────────────────────────────────────────────────────',
    'export const PDF_LAYOUT: { pageCount: number; contentHash: string; unitPages: Record<number, number> } = {',
    `  pageCount: ${range.count},`,
    `  contentHash: '${contentHash(CURRICULUM_CHAPTERS)}',`,
    '  unitPages: {',
    ...Object.entries(unitPages).map(([unit, page]) => `    ${unit}: ${page},`),
    '  },',
    '};',
    '',
  ].join('\n');
  fs.writeFileSync(LAYOUT_FILE, layout);

  if (missing.size) console.warn(`Characters with no glyph in any font (left out): ${[...missing].join(', ')}`);
  console.log(
    `Wrote ${OUTPUTS.map((f) => path.relative(ROOT, f)).join(' and ')}: ${range.count} pages, ` +
      `${totals.chapters} chapters, ${totals.units} units, ${totals.lessons} lessons, ${totals.exercises} exercises.`,
  );
  console.log(`Updated ${path.relative(ROOT, LAYOUT_FILE)} (unit start pages).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

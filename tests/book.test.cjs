/**
 * The book must say what the app says.
 *
 * These tests check that the chapters built from the app's curriculum keep
 * every lesson, answer and line of text, that the lab data is the app's, that
 * the PDF was regenerated after the last text change, and that the errors
 * fixed in the app's fact-checks have not come back.
 */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { loadTs, ROOT } = require('./helpers/load-ts.cjs');
const { contentHash } = require('../scripts/lib/contentHash.cjs');

const { DATA } = loadTs('src/data/app/curriculum.ts');
const app = {
  ...loadTs('src/data/app/labReference.ts'),
  ...loadTs('src/data/app/pratyahara.ts'),
};
const book = loadTs('src/data/curriculumData.ts');
const { cleanText } = loadTs('src/data/fromApp.ts');
const { PDF_LAYOUT } = loadTs('src/data/pdfLayout.ts');
const { SANDHI_WORKBENCH_CASES } = loadTs('src/data/sandhiWorkbench.ts');
const { CHANDAS_SAMPLES } = loadTs('src/data/chandasSamples.ts');
const { scanVerse } = loadTs('src/data/app/chandas.ts');
const { scrambled } = loadTs('src/utils/scramble.ts');

const chapters = book.CURRICULUM_CHAPTERS;
const bookLessons = chapters.flatMap((c) => c.units.flatMap((u) => u.lessons));
const appLessons = DATA.flatMap((s) => s.units.flatMap((u) => u.lessons));
const bookExercises = bookLessons.flatMap((l) => l.exercises);

/** Every string inside a value. */
const strings = (value) =>
  typeof value === 'string'
    ? [value]
    : Array.isArray(value)
      ? value.flatMap(strings)
      : value && typeof value === 'object'
        ? Object.values(value).flatMap(strings)
        : [];
/** Text with layout (spaces, rules, bullets) removed, for "is all the text still there?" checks. */
const squash = (text) => cleanText(text).replace(/[\s═─━•✦]+/gu, '');

const TYPE_MAP = {
  dhyan: 'meditation', letter_card: 'letter_card', shruti: 'listening', multi: 'quiz', smriti: 'memory',
  match: 'match', listen_pick: 'listen_pick', krama: 'recital', sequence: 'order', info: 'info_card',
};

test('one chapter per app section, with the same units and lessons in the same order', () => {
  assert.equal(chapters.length, DATA.length);
  DATA.forEach((section, i) => {
    const ch = chapters[i];
    assert.equal(`${ch.title} / ${ch.sanskritTitle}`, cleanText(section.section));
    assert.deepEqual(ch.units.map((u) => u.number), section.units.map((u) => u.u));
  });
  assert.deepEqual(bookLessons.map((l) => l.number), appLessons.map((l) => l.id));
  assert.equal(new Set(bookExercises.map((e) => e.id)).size, bookExercises.length, 'exercise ids are unique');
});

test('every exercise keeps its type, options and answer', () => {
  appLessons.forEach((lesson, li) => {
    const converted = bookLessons[li].exercises;
    assert.equal(converted.length, lesson.ex.length, `lesson ${lesson.id}`);
    lesson.ex.forEach((ex, i) => {
      const b = converted[i];
      const where = `${lesson.id} #${i + 1}`;
      assert.equal(b.type, TYPE_MAP[ex.type], where);
      if (ex.options) {
        assert.deepEqual(b.options, ex.options.map(cleanText), where);
        assert.equal(b.correctIndex, ex.answer, where);
      }
      if (ex.type === 'listen_pick') {
        assert.ok(b.correctIndex >= 0, where);
        assert.equal(b.options[b.correctIndex], cleanText(String(ex.answer)), where);
      }
      if (ex.pairs) assert.deepEqual(b.pairs.map((p) => [p.left, p.right]), ex.pairs.map((p) => p.map(cleanText)), where);
      if (ex.items) assert.deepEqual(b.orderItems, ex.items.map(cleanText), where);
      if (ex.sequence) assert.deepEqual(b.sequenceItems, ex.sequence.map(cleanText), where);
    });
  });
});

test('no words are lost: all of the app text is in the book (emoji aside)', () => {
  appLessons.forEach((lesson, li) => {
    lesson.ex.forEach((ex, i) => {
      const bookText = squash(strings(bookLessons[li].exercises[i]).join(''));
      const { type, audio, answer, ...content } = ex;
      for (const s of strings(content)) {
        assert.ok(bookText.includes(squash(s)), `${lesson.id} #${i + 1}: missing "${s.slice(0, 60)}"`);
      }
    });
  });
});

test('the book text has no emoji left', () => {
  for (const s of strings(chapters)) {
    const emoji = s.match(/\p{Extended_Pictographic}/gu)?.filter((c) => c !== '↔');
    assert.ok(!emoji?.length, `emoji in "${s.slice(0, 60)}"`);
  }
});

test('answers stay inside their options and match tiles are distinct', () => {
  for (const ex of bookExercises) {
    if (ex.options) {
      assert.ok(ex.correctIndex >= 0 && ex.correctIndex < ex.options.length, ex.id);
      assert.equal(new Set(ex.options).size, ex.options.length, `${ex.id}: duplicate options`);
    }
    if (ex.pairs) {
      const tiles = ex.pairs.flatMap((p) => [p.left, p.right]);
      assert.equal(new Set(tiles).size, tiles.length, `${ex.id}: repeated tile text`);
    }
  }
});

test('tap-in-order items are not numbered and are never shown in answer order', () => {
  for (const ex of bookExercises.filter((e) => e.type === 'order')) {
    for (const item of ex.orderItems) assert.doesNotMatch(item, /^\s*\d+\s*[.)]/, `${ex.id}: "${item}" is numbered`);
    const shown = scrambled(ex.orderItems, ex.id);
    assert.deepEqual([...shown].sort(), [...ex.orderItems].sort(), ex.id);
    assert.notDeepEqual(shown, ex.orderItems, `${ex.id} is shown already in order`);
    assert.deepEqual(scrambled(ex.orderItems, ex.id), shown, `${ex.id}: the shuffle is fixed`);
  }
});

test('the errors fixed by the fact-checks do not come back', () => {
  const sources = [
    ...['src', 'scripts'].flatMap(function walk(dir) {
      return fs.readdirSync(path.join(ROOT, dir), { withFileTypes: true }).flatMap((entry) => {
        const rel = path.join(dir, entry.name);
        if (entry.isDirectory()) return rel === path.join('src', 'data', 'app') ? [] : walk(rel);
        return /\.(tsx?|mjs|cjs)$/.test(entry.name) ? [rel] : [];
      });
    }),
  ];
  const texts = [
    ['book chapters', strings(chapters).join('\n')],
    ['lab data', strings([book.PRATYAHARA_PRESETS, book.DASHAGANI_VERB_CLASSES, book.NOUN_TABLES, book.VERB_TABLES, book.VARNAMALA_PHONEMES, SANDHI_WORKBENCH_CASES, CHANDAS_SAMPLES]).join('\n')],
    ...sources.map((file) => [file, fs.readFileSync(path.join(ROOT, file), 'utf8')]),
  ];
  const ERRORS = [
    [/Śākala(?!ya)/u, 'the Ṛgveda padapāṭha is attributed to Śākalya'],
    [/ल् → ळ्/u, 'the Vedic ळ stands for ड'],
    [/-जीवे/u, 'जीवसे is the -असे infinitive'],
    [/Vedic infinitives/u, 'जीवितुम् / पातुम् are the classical forms'],
    [/प्रकृतिपाठौ/u, 'three base modes are not a dual'],
    [/1\.1–1\.4/u, 'the Yoga-sūtra lesson covers 1.1–1.3'],
    [/डुम्रीञ्/u, 'the first class-9 root is डुक्रीञ्'],
    [/दानादानयोः/u, 'the class-3 gloss is हु दानादनयोः'],
    [/क्-इत्/u, 'class-6 श is apit, ṅit-like by 1.2.4'],
    [/ईयसुट्/u, 'the optative affix is यासुट्'],
    // ण् → न् at the start of a root (णम् → नम्) is णो नः 6.1.65; only ष् → स् is 6.1.64.
    [/^(?=[^\n]*(?:णम्|णो नः|नत्व))(?=[^\n]*6\.1\.64)(?![^\n]*6\.1\.65)[^\n]*$/mu, 'णो नः is 6.1.65'],
    [/भुनक्ति[^\n]{0,40}\beats\b/u, 'भुनक्ति means "protects"'],
    [/√श्रु[^\n]{0,40}(Class 5|स्वादि|3\.1\.73)/u, '√श्रु is bhvādi and takes श्नु by 3.1.74'],
    [/नी \(weak before consonants\)/u, '-नी- only before the weak consonant endings'],
  ];
  for (const [name, text] of texts) {
    for (const [pattern, why] of ERRORS) assert.doesNotMatch(text, pattern, `${name}: ${why}`);
  }
  const all = strings(chapters).join('\n');
  // Attributions and sūtra citations that a lesson must give alongside the claim.
  for (const lesson of bookLessons) {
    const text = strings(lesson).join('\n');
    if (text.includes('जगन्मिथ्या')) assert.match(text, /Brahmajñānāvalīmālā/u, `${lesson.number}: say where the line comes from`);
    if (/क्त्रि/u.test(text)) assert.match(text, /3\.3\.88[\s\S]*4\.4\.20/u, `${lesson.number}: क्त्रि + मप् cite 3.3.88 and 4.4.20`);
  }
  assert.match(all, /Śākalya/u);
  assert.match(all, /13 vowels/u);
  assert.doesNotMatch(all, /14 vowels/u);
});

test('lab data is the app\'s, with the corrected pratyāhāras and ṇatva derivation', () => {
  assert.equal(book.DASHAGANI_VERB_CLASSES, app.VERB_CLASSES);
  assert.equal(book.NOUN_TABLES.length + book.VERB_TABLES.length, app.PARADIGM_TABLES.length);
  assert.equal(book.DASHAGANI_VERB_CLASSES[8].entry, 'डुक्रीञ् द्रव्यविनिमये');
  assert.equal(book.DASHAGANI_VERB_CLASSES[2].entry, 'हु दानादनयोः');

  book.MAHESHVARA_SUTRAS.forEach((s, i) => {
    assert.deepEqual(s.letters, app.MAHESHVARA_SUTRAS[i].letters);
    assert.equal(s.itMarker, app.MAHESHVARA_SUTRAS[i].it);
  });
  const preset = (code) => book.PRATYAHARA_PRESETS.find((p) => p.code === code);
  assert.match(preset('शर्').famousSutra, /^वा शरि \(8\.3\.36\)/u);
  assert.match(preset('खर्').famousSutra, /^खरि च \(8\.4\.55\)/u);
  assert.match(preset('झल्').meaning, /ह/u);
  assert.ok(preset('झल्').letters.includes('ह'));
  assert.equal(preset('हल्').letters.filter((l) => l === 'ह').length, 1, 'ह counted once');

  const natva = SANDHI_WORKBENCH_CASES.find((c) => c.mergedResult === 'रामेण');
  assert.equal(natva.leftWord, 'राम');
  assert.match(natva.sutra, /7\.1\.12[\s\S]*8\.4\.1[\s\S]*8\.4\.2/u);
  assert.ok(!SANDHI_WORKBENCH_CASES.some((c) => c.leftWord === 'रामे'));
});

test('the phonetics lab gives a deity only where a letter card does, worded as the card words it', () => {
  const cards = new Map();
  for (const ex of bookExercises) if (ex.type === 'letter_card' && !cards.has(ex.letter)) cards.set(ex.letter, ex);
  for (const p of book.VARNAMALA_PHONEMES) {
    const card = cards.get(p.devanagari);
    assert.equal(p.deity, card?.deity, p.devanagari);
    if (card) assert.equal(p.meaning, card.meaning, p.devanagari);
  }
});

test('every meter sample scans to a named meter', () => {
  for (const sample of CHANDAS_SAMPLES) assert.ok(scanVerse(sample.text).meter, sample.title);
  assert.equal(scanVerse(CHANDAS_SAMPLES.find((s) => s.id === 'raghu').text).meter, 'Anuṣṭubh (śloka)');
});

test('the PDF was typeset from the current text, and every unit has its page', async () => {
  assert.equal(PDF_LAYOUT.contentHash, contentHash(chapters), 'text changed since the PDF was made: run node scripts/updatePdfCurriculum.mjs');
  const units = chapters.flatMap((c) => c.units);
  for (const unit of units) assert.ok(unit.pageStart > 2 && unit.pageStart <= PDF_LAYOUT.pageCount, `unit ${unit.number}`);
  const { PDFDocument } = require('pdf-lib');
  for (const file of ['Sanskritam-Curriculum.pdf', 'public/Sanskritam-Curriculum.pdf']) {
    const pdf = await PDFDocument.load(fs.readFileSync(path.join(ROOT, file)), { updateMetadata: false });
    assert.equal(pdf.getPageCount(), PDF_LAYOUT.pageCount, file);
  }
});

test('the counts on the page metadata match the curriculum', () => {
  const { chapters: c, units: u, lessons: l, exercises: e } = book.CURRICULUM_TOTALS;
  const phrase = `${c} chapters, ${u} units, ${l} lessons, and ${e} exercises`;
  assert.ok(fs.readFileSync(path.join(ROOT, 'metadata.json'), 'utf8').includes(phrase), 'metadata.json');
  assert.ok(fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8').includes(phrase), 'index.html');
});

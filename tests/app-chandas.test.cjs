// ─────────────────────────────────────────────────────────────
//  GENERATED FILE — do not edit by hand.
//  Copied from digitalmarket-arch/SanskritamApp, with module paths pointed at src/data/app/
//  tests/chandas.test.cjs @ 6622cf8a59d5b70411b3b5b3ea4246800777ff81 (origin/claude/vibrant-lamport-avspmz)
//  Fix mistakes in the app, then re-run: node scripts/syncFromApp.mjs
// ─────────────────────────────────────────────────────────────
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadTs } = require('./helpers/load-ts.cjs');

const { scanLine, scanVerse, toPattern, identifyPada, matchesPattern, NAMED_METERS, SAMPLE_VERSES } = loadTs('src/data/app/chandas.ts');

// Modules loaded by loadTs live in another VM realm; copy arrays into this
// realm before deep comparison so prototypes match.
const list = (values, pick = value => value) => Array.from(values, pick);
const pattern = text => toPattern(scanLine(text));
const syllables = text => list(scanLine(text), s => s.text);

test('each weight rule: long vowel, anusvāra/visarga, conjunct, otherwise light', () => {
  assert.equal(pattern('रामः'), 'GG');           // long ā; visarga
  assert.equal(pattern('कमल'), 'LLL');           // all short, single consonants
  assert.equal(pattern('अग्नि'), 'GL');          // अ before the conjunct ग्न
  assert.equal(pattern('संस्कृतम्'), 'GLG');      // सं anusvāra; स्कृ has one consonant after it; तम् is closed
  assert.equal(scanLine('रामः')[1].reason, 'nasal-visarga');
  assert.equal(scanLine('अग्नि')[0].reason, 'conjunct');
});

test('candrabindu does not make a syllable heavy, but anusvāra does', () => {
  assert.equal(pattern('कँम'), 'LL');
  assert.equal(pattern('कंम'), 'GL');
});

test('consonants count across word breaks; avagraha, digits and accents are silent', () => {
  // the त् of अभवत् plus the स of the next word make वत् heavy
  assert.equal(pattern('अभवत् स'), 'LLGL');
  assert.deepEqual(syllables('अभवत् स'), ['अ', 'भ', 'वत्', 'स']);
  assert.equal(pattern('सोऽहम्'), 'GG');
  assert.equal(pattern('ॐ नमः'), 'GLG');
  assert.equal(pattern('धर्म १२'), pattern('धर्म'));
});

test('syllables follow Devanagari akṣaras, conjuncts included', () => {
  assert.deepEqual(syllables('कर्मण्येवाधिकारस्ते'), ['क', 'र्म', 'ण्ये', 'वा', 'धि', 'का', 'र', 'स्ते']);
  assert.deepEqual(syllables('तत्सवितुर्वरेण्यं'), ['त', 'त्स', 'वि', 'तु', 'र्व', 'रे', 'ण्यं']);
});

test('Bhagavad Gītā 2.47 scans as a regular śloka (anuṣṭubh)', () => {
  const verse = scanVerse(SAMPLE_VERSES.find(v => v.id === 'gita').text);
  assert.deepEqual(list(verse.padas, p => p.pattern), ['GGGGLGGG', 'GLGLLGLL', 'GGLLLGGG', 'GGGGLGLL']);
  assert.equal(verse.meter, 'Anuṣṭubh (śloka)');
  assert.equal(verse.syllableCount, 32);
  for (const pada of verse.padas) assert.match(pada.note, /✓/);
});

test('Kumārasambhava 1.1 mixes Indravajrā and Upendravajrā: Upajāti', () => {
  const verse = scanVerse(SAMPLE_VERSES.find(v => v.id === 'kumara').text);
  assert.deepEqual(list(verse.padas, p => p.meter), ['Indravajrā', 'Upendravajrā', 'Indravajrā', 'Upendravajrā']);
  assert.equal(verse.meter, 'Upajāti');
});

test('Meghadūta 1.1 is Mandākrāntā in every pāda (final syllable free)', () => {
  const verse = scanVerse(SAMPLE_VERSES.find(v => v.id === 'megha').text);
  assert.equal(verse.padas.length, 4);
  assert.ok(verse.padas.every(p => p.meter === 'Mandākrāntā'));
  assert.equal(verse.meter, 'Mandākrāntā');
  // pādas 3 and 4 end in a light syllable — allowed at the end of a pāda
  assert.equal(verse.padas[2].pattern.at(-1), 'L');
});

test('the Gāyatrī mantra as written has 7 + 8 + 8 syllables and is still gāyatrī', () => {
  const verse = scanVerse(SAMPLE_VERSES.find(v => v.id === 'gayatri').text);
  assert.deepEqual(list(verse.padas, p => p.syllables.length), [7, 8, 8]);
  assert.equal(verse.meter, 'Gāyatrī');
  assert.match(verse.summary, /वरेणियम्/);
});

test('a half-verse on one line is split into its two pādas', () => {
  const verse = scanVerse('धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः');
  assert.deepEqual(list(verse.padas, p => p.pattern), ['GGGGLGGG', 'LLGGLGLG']);
  assert.equal(verse.meter, 'Anuṣṭubh (śloka)');
});

test('meter catalogue: patterns are well-formed and only the last syllable is free', () => {
  for (const meter of NAMED_METERS) assert.match(meter.pattern, /^[LG]+$/);
  assert.equal(new Set(NAMED_METERS.map(m => m.pattern)).size, NAMED_METERS.length);
  assert.equal(identifyPada('GGLGGLLGLGL'), 'Indravajrā');
  assert.equal(identifyPada('LGLGGLLGLGG'), 'Upendravajrā');
  assert.equal(matchesPattern('GGLGGLLGLLG', 'GGLGGLLGLGG'), false);
});

test('a 16-syllable line of Pañcacāmara stays one pāda and is not called a śloka', () => {
  const verse = scanVerse('जटाटवीगलज्जलप्रवाहपावितस्थले\nगलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम् ।\nडमड्डमड्डमड्डमन्निनादवड्डमर्वयं\nचकार चण्डताण्डवं तनोतु नः शिवः शिवम् ॥');
  assert.deepEqual(list(verse.padas, p => p.syllables.length), [16, 16, 16, 16]);
  assert.equal(verse.meter, 'Pañcacāmara');
});

test('8-syllable pādas without the śloka cadence are not called a śloka', () => {
  // ja-ra-la-ga in every pāda: the odd pādas have the even-pāda cadence ˘ — ˘
  const verse = scanVerse('नमामि भक्तवत्सलं\nकृपालुशीलकोमलं ।\nभजामि ते पदाम्बुजं\nअकामिनां स्वधामदम् ॥');
  assert.notEqual(verse.meter, 'Anuṣṭubh (śloka)');
  assert.equal(verse.meter, 'Pramāṇikā');
});

test('odd-pāda notes tell a vipulā from the even-pāda cadence', () => {
  // Build lines from weight patterns: क is light before one consonant, का is heavy.
  const line = weights => Array.from(weights, w => (w === 'G' ? 'का' : 'क')).join('');
  const shloka = scanVerse([line('LLLLGLLL'), line('LLLLLGLL'), line('LLLLLGGL'), line('LLLLLGLL')].join('\n'));
  assert.equal(shloka.meter, 'Anuṣṭubh (śloka)');
  assert.match(shloka.padas[0].note, /bha-vipulā/);
  assert.match(shloka.padas[2].note, /✓ odd-pāda/);
  // An odd pāda with the even cadence ˘ — ˘ breaks the pattern, and the notes say where.
  const broken = scanVerse([line('LLLLLGLL'), line('LLLLLGLL'), line('LLLLLGGL'), line('LLLLLGLL')].join('\n'));
  assert.equal(broken.meter, null);
  assert.match(broken.summary, /not in the śloka pattern/);
  assert.match(broken.padas[0].note, /even-pāda cadence/);
  assert.match(broken.padas[2].note, /✓ odd-pāda/);
});

test('the Gāyatrī mantra in its usual two-line layout splits 7 + 8 + 8 at word breaks', () => {
  for (const text of [
    'तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि ।\nधियो यो नः प्रचोदयात् ॥',
    'तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्',
  ]) {
    const verse = scanVerse(text);
    assert.deepEqual(list(verse.padas, p => p.syllables.length), [7, 8, 8]);
    assert.equal(verse.meter, 'Gāyatrī');
  }
  const words = scanLine('तत्सवितुर्वरेण्यं भर्गो');
  assert.deepEqual(list(words, s => s.wordEnd), [false, false, false, false, false, false, true, false, true]);
});

test('Vedic anusvāra and ardhavisarga letters make a syllable heavy; tone marks do not', () => {
  assert.equal(pattern('हꣳसः'), 'GG');                  // Yajurvedic ꣳ (U+A8F3)
  assert.equal(scanLine('हꣳसः')[0].text, 'हꣳ');
  assert.equal(pattern('सᳯस'), 'GL');              // VEDIC SIGN LONG ANUSVARA
  assert.equal(pattern('नᳲकः'), 'GG');             // VEDIC SIGN ARDHAVISARGA
  assert.equal(pattern('पु॑रु॒ष ए॒वेदꣳ सर्वम्'), pattern('पुरुष एवेदं सर्वम्'));
});

test('empty or non-Devanagari input gives an empty, explained result', () => {
  for (const input of ['', '   ', 'hello 123', '॥ १ ॥']) {
    const verse = scanVerse(input);
    assert.equal(verse.padas.length, 0);
    assert.equal(verse.meter, null);
    assert.ok(verse.summary.length > 0);
  }
});

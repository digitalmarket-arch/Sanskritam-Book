// ─────────────────────────────────────────────────────────────
//  GENERATED FILE — do not edit by hand.
//  Copied from digitalmarket-arch/SanskritamApp, with module paths pointed at src/data/app/
//  tests/pratyahara.test.cjs @ 6622cf8a59d5b70411b3b5b3ea4246800777ff81 (origin/claude/vibrant-lamport-avspmz)
//  Fix mistakes in the app, then re-run: node scripts/syncFromApp.mjs
// ─────────────────────────────────────────────────────────────
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { loadTs } = require('./helpers/load-ts.cjs');

const { MAHESHVARA_SUTRAS, FAMOUS_PRATYAHARAS, expandPratyahara } = loadTs('src/data/app/pratyahara.ts');

// loadTs modules live in another VM realm; copy arrays before deep comparison.
const letters = (first, to, from) => Array.from(expandPratyahara(first, to, from).letters);
const split = text => text.split(' ');

test('the fourteen sūtras hold the 9 simple vowels and 33 consonants, ह twice', () => {
  assert.equal(MAHESHVARA_SUTRAS.length, 14);
  const all = MAHESHVARA_SUTRAS.flatMap(s => Array.from(s.letters));
  assert.equal(all.length, 43);
  assert.equal(new Set(all).size, 42);
  assert.deepEqual(all.filter(l => l === 'ह').length, 2);
});

test('vowel pratyāhāras', () => {
  assert.deepEqual(letters('अ', 4), split('अ इ उ ऋ ऌ ए ओ ऐ औ'));   // अच्
  assert.deepEqual(letters('इ', 2), split('इ उ ऋ ऌ'));               // इक्
  assert.deepEqual(letters('अ', 2), split('अ इ उ ऋ ऌ'));             // अक्
  assert.deepEqual(letters('ए', 3), split('ए ओ'));                   // एङ्
  assert.deepEqual(letters('ऐ', 4), split('ऐ औ'));                   // ऐच्
  assert.deepEqual(letters('ए', 4), split('ए ओ ऐ औ'));               // एच्
});

test('consonant pratyāhāras', () => {
  assert.deepEqual(letters('य', 6), split('य व र ल'));                // यण्
  assert.deepEqual(letters('ज', 10), split('ज ब ग ड द'));            // जश्
  assert.deepEqual(letters('श', 13), split('श ष स'));                // शर्
  assert.deepEqual(letters('ख', 13), split('ख फ छ ठ थ च ट त क प श ष स')); // खर्
  assert.equal(letters('झ', 14).length, 24);                         // झल्: 20 non-nasal stops + श ष स ह
  assert.equal(letters('ह', 14).length, 33);                         // हल्: every consonant once
  assert.equal(letters('अ', 14).length, 42);                         // अल्: every sound
});

test('ण् closes two sūtras: the sūtra number decides अण् and इण्', () => {
  assert.deepEqual(letters('अ', 1), split('अ इ उ'));
  assert.deepEqual(letters('इ', 6), split('इ उ ऋ ऌ ए ओ ऐ औ ह य व र ल'));
  assert.equal(expandPratyahara('इ', 6).name, 'इण्');
  assert.equal(expandPratyahara('अ', 4).name, 'अच्');
  assert.equal(expandPratyahara('ह', 14).name, 'हल्');
});

test('a marker before the starting sound, or an unknown sound, is not a pratyāhāra', () => {
  assert.equal(expandPratyahara('य', 4), null);
  assert.equal(expandPratyahara('क', 2), null);
  assert.equal(expandPratyahara('x', 14), null);
  assert.equal(expandPratyahara('अ', 15), null);
});

test('no pratyāhāra starts at the second ह (sūtra 14); हल् starts at sūtra 5', () => {
  assert.equal(expandPratyahara('ह', 14, 14), null);
  assert.equal(expandPratyahara('ह', 13, 14), null);
  assert.equal(expandPratyahara('ह', 14).from[0], 5);
  assert.equal(expandPratyahara('ह', 14, 5).letters.length, 33);
  // but the second ह is still inside groups that close with ल्
  assert.deepEqual(letters('श', 14), split('श ष स ह'));
});

test('every famous pratyāhāra expands, with a distinct name', () => {
  const names = FAMOUS_PRATYAHARAS.map(p => {
    const result = expandPratyahara(p.first, p.to);
    assert.ok(result, `${p.first} → sūtra ${p.to}`);
    assert.ok(p.sutra.includes('('), `${result.name} needs a sūtra citation`);
    return result.name;
  });
  assert.equal(new Set(names).size, names.length);
});

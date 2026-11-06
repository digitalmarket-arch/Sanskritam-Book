// ─────────────────────────────────────────────────────────────
//  GENERATED FILE — do not edit by hand.
//  Copied verbatim from digitalmarket-arch/SanskritamApp
//  src/data/pratyahara.ts @ 6622cf8a59d5b70411b3b5b3ea4246800777ff81 (origin/claude/vibrant-lamport-avspmz)
//  Fix mistakes in the app, then re-run: node scripts/syncFromApp.mjs
// ─────────────────────────────────────────────────────────────
/**
 * ═══════════════════════════════════════════════════════════
 *  MAHEŚVARA SŪTRAS & PRATYĀHĀRAS
 *
 *  Pāṇini names any run of sounds with two pieces: a starting
 *  sound and an "it" marker (the silent final letter of a sūtra).
 *  अच् = from अ up to the marker च् = every vowel.
 *
 *  Pure data + functions, unit-tested in Node.
 * ═══════════════════════════════════════════════════════════
 */

export interface MaheshvaraSutra {
  n: number;
  letters: string[];
  /** The it-marker that closes the sūtra. */
  it: string;
}

export const MAHESHVARA_SUTRAS: MaheshvaraSutra[] = [
  { n: 1, letters: ['अ', 'इ', 'उ'], it: 'ण्' },
  { n: 2, letters: ['ऋ', 'ऌ'], it: 'क्' },
  { n: 3, letters: ['ए', 'ओ'], it: 'ङ्' },
  { n: 4, letters: ['ऐ', 'औ'], it: 'च्' },
  { n: 5, letters: ['ह', 'य', 'व', 'र'], it: 'ट्' },
  { n: 6, letters: ['ल'], it: 'ण्' },
  { n: 7, letters: ['ञ', 'म', 'ङ', 'ण', 'न'], it: 'म्' },
  { n: 8, letters: ['झ', 'भ'], it: 'ञ्' },
  { n: 9, letters: ['घ', 'ढ', 'ध'], it: 'ष्' },
  { n: 10, letters: ['ज', 'ब', 'ग', 'ड', 'द'], it: 'श्' },
  { n: 11, letters: ['ख', 'फ', 'छ', 'ठ', 'थ', 'च', 'ट', 'त'], it: 'व्' },
  { n: 12, letters: ['क', 'प'], it: 'य्' },
  { n: 13, letters: ['श', 'ष', 'स'], it: 'र्' },
  { n: 14, letters: ['ह'], it: 'ल्' },
];

export interface Pratyahara {
  /** The name, e.g. 'अच्'. */
  name: string;
  /** Sounds it covers, in sūtra order (ह counted once). */
  letters: string[];
  /** Position of the first sound: [sūtra number, index in sūtra]. */
  from: [number, number];
  /** Number of the sūtra whose marker closes it. */
  to: number;
}

/**
 * Expand a pratyāhāra from its first sound and closing marker.
 * `toSutra` picks which sūtra's marker is meant; it must not come
 * before the starting sound. ण् closes both sūtra 1 and sūtra 6, so
 * pass the sūtra number to choose (अण् usually means अ इ उ, with the
 * first ण्; इण् uses the second). When `fromSutra` is omitted the
 * first occurrence of the sound is used (ह appears in 5 and 14).
 * No pratyāhāra starts at the second ह: it is there only so that groups
 * closing with ल् (हल्, शल्, झल्) include ह.
 */
export function expandPratyahara(
  first: string, toSutra: number, fromSutra?: number,
): Pratyahara | null {
  const end = MAHESHVARA_SUTRAS.find(s => s.n === toSutra);
  if (!end) return null;
  const start = MAHESHVARA_SUTRAS.find(s =>
    (fromSutra === undefined || s.n === fromSutra) && s.letters.includes(first));
  if (!start || start.n > end.n) return null;
  if (first === 'ह' && start.n === 14) return null;
  const letters: string[] = [];
  for (const sutra of MAHESHVARA_SUTRAS) {
    if (sutra.n < start.n || sutra.n > end.n) continue;
    const from = sutra.n === start.n ? sutra.letters.indexOf(first) : 0;
    for (const letter of sutra.letters.slice(from)) if (!letters.includes(letter)) letters.push(letter);
  }
  return { name: first + end.it, letters, from: [start.n, start.letters.indexOf(first)], to: end.n };
}

export interface FamousPratyahara {
  first: string;
  to: number;
  meaning: string;
  /** A sūtra of the Aṣṭādhyāyī that uses this pratyāhāra. */
  sutra: string;
}

/** Pratyāhāras learners meet first, each with a sūtra that uses it. */
export const FAMOUS_PRATYAHARAS: FamousPratyahara[] = [
  { first: 'अ', to: 4, meaning: 'All vowels', sutra: 'इको यणचि (6.1.77) — इक् becomes यण् before अच्' },
  { first: 'ह', to: 14, meaning: 'All consonants', sutra: 'हलन्त्यम् (1.3.3) — a final consonant in teaching is an it' },
  { first: 'अ', to: 14, meaning: 'Every sound', sutra: 'अलोऽन्त्यस्य (1.1.52) — a substitute replaces the final sound' },
  { first: 'इ', to: 2, meaning: 'Simple vowels except अ', sutra: 'इको गुणवृद्धी (1.1.3) — guṇa and vṛddhi replace इक्' },
  { first: 'अ', to: 2, meaning: 'Simple vowels', sutra: 'अकः सवर्णे दीर्घः (6.1.101) — अक् + a like vowel → long' },
  { first: 'य', to: 6, meaning: 'Semivowels', sutra: 'इको यणचि (6.1.77) — इ उ ऋ ऌ become य व र ल before a vowel' },
  { first: 'ए', to: 3, meaning: 'Guṇa diphthongs', sutra: 'अदेङ् गुणः (1.1.2) — अ, ए, ओ are called guṇa' },
  { first: 'ऐ', to: 4, meaning: 'Vṛddhi diphthongs', sutra: 'वृद्धिरादैच् (1.1.1) — आ, ऐ, औ are called vṛddhi' },
  { first: 'ए', to: 4, meaning: 'All diphthongs', sutra: 'एचोऽयवायावः (6.1.78) — ए ओ ऐ औ → अय् अव् आय् आव् before a vowel' },
  { first: 'ज', to: 10, meaning: 'Voiced unaspirated stops', sutra: 'झलां जशोऽन्ते (8.2.39) — a final झल् becomes जश्' },
  { first: 'झ', to: 14, meaning: 'Non-nasal stops, sibilants and ह', sutra: 'झलां जश् झशि (8.4.53) — झल् becomes जश् before झश्' },
  { first: 'ख', to: 13, meaning: 'Voiceless stops and sibilants', sutra: 'खरि च (8.4.55) — झल् becomes चर् before खर्' },
  { first: 'श', to: 13, meaning: 'Sibilants', sutra: 'वा शरि (8.3.36) — before शर्, visarga may stay' },
  { first: 'इ', to: 6, meaning: 'Vowels except अ, semivowels and ह', sutra: 'इण्कोः (8.3.57) — the domain of ṣatva: स् → ष् after इण् or क-वर्ग' },
];

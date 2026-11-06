/**
 * The book's data.
 *
 * Course content comes from the SanskritamApp mobile app, which is the
 * fact-checked source of truth. scripts/syncFromApp.mjs copies the app's data
 * files into ./app/ verbatim; this module builds the book's chapters, the lab
 * reference data and the meter scanner's samples from those copies. To fix
 * the course text, fix it in the app and re-run the sync — do not patch the
 * files in ./app/.
 */
import { DATA } from './app/curriculum';
import { PARADIGM_TABLES, VERB_CLASSES } from './app/labReference';
import type { ParadigmTable, VerbClass } from './app/labReference';
import { FAMOUS_PRATYAHARAS, expandPratyahara } from './app/pratyahara';
import { buildChapters, letterCards, toIast } from './fromApp';
import { PDF_LAYOUT } from './pdfLayout';

// ─── Curriculum ──────────────────────────────────────────────

export type ExerciseType =
  | 'meditation'
  | 'letter_card'
  | 'info_card'
  | 'listening'
  | 'quiz'
  | 'match'
  | 'order'
  | 'memory'
  | 'listen_pick'
  | 'recital';

export interface CurriculumExercise {
  id: string;
  type: ExerciseType;
  title: string;
  // Meditation
  durationSeconds?: number;
  sanskritPrompt?: string;
  bodyText?: string;
  // Letter Card
  letter?: string;
  pronunciationGuide?: string;
  hindiExample?: string;
  meaning?: string;
  lore?: string;
  deity?: string;
  deityLore?: string;
  articulationPoint?: string;
  articulationDetail?: string;
  exampleWords?: { sanskrit: string; translit: string; meaning: string }[];
  // Info Card
  infoTitle?: string;
  infoLines?: string[];
  audioSample?: string;
  // Listening (Shruti), Quiz, Memory (Smriti), Listen & Pick, Sequence Recital (Krama)
  preText?: string;
  audioPlayed?: string;
  revealText?: string;
  memorizeTitle?: string;
  memorizeItems?: string[];
  memorizeSeconds?: number;
  sequenceTitle?: string;
  sequenceItems?: string[];
  question?: string;
  options?: string[];
  correctIndex?: number;
  // Match the pairs
  matchPrompt?: string;
  pairs?: { left: string; right: string }[];
  // Tap in Order (items are listed in the correct order)
  orderPrompt?: string;
  orderItems?: string[];
}

export interface CurriculumLesson {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  exercises: CurriculumExercise[];
}

export interface CurriculumUnit {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  /** Page of the PDF where the unit starts (0 until the PDF has been generated). */
  pageStart: number;
  lessons: CurriculumLesson[];
}

export interface CurriculumChapter {
  id: string;
  number: number;
  title: string;
  sanskritTitle: string;
  subtitle: string;
  units: CurriculumUnit[];
}

/** All 17 chapters, built from the app's curriculum. */
export const CURRICULUM_CHAPTERS: CurriculumChapter[] = buildChapters(DATA, PDF_LAYOUT.unitPages);

/** Number of pages in Sanskritam-Curriculum.pdf (written by scripts/updatePdfCurriculum.mjs). */
export const PDF_PAGE_COUNT = PDF_LAYOUT.pageCount;

export const CURRICULUM_TOTALS = (() => {
  const units = CURRICULUM_CHAPTERS.flatMap((c) => c.units);
  const lessons = units.flatMap((u) => u.lessons);
  return {
    chapters: CURRICULUM_CHAPTERS.length,
    units: units.length,
    lessons: lessons.length,
    exercises: lessons.reduce((n, l) => n + l.exercises.length, 0),
  };
})();

// ─── Varṇamālā (sound inventory for the phonetics lab) ───────

export interface PhonemeEntry {
  devanagari: string;
  iast: string;
  ipaHint: string;
  category: 'vowel' | 'anusvara_visarga' | 'stop' | 'semivowel' | 'sibilant';
  articulation: 'Kantha (Throat)' | 'Taalu (Palate)' | 'Moordhaa (Roof)' | 'Danta (Teeth)' | 'Oshtha (Lips)' | 'Compound';
  voicing: string;
  /** Lesson whose letter card teaches this sound, if there is one. */
  lesson?: string;
  /** Meaning association, as the course's letter card gives it. */
  meaning?: string;
  /** Deity or principle associated with the letter, worded as the course words it (a traditional mnemonic). */
  deity?: string;
  examples: string[];
}

type PhonemeBase = Omit<PhonemeEntry, 'lesson' | 'meaning' | 'deity'>;

/**
 * Articulation and voicing of each sound. Associations (meaning, deity) and
 * example words are added from the course's letter cards below; sounds without
 * a letter card carry no association.
 */
const PHONEME_BASE: PhonemeBase[] = [
  { devanagari: 'अ', iast: 'a', ipaHint: "uh (as in 'up')", category: 'vowel', articulation: 'Kantha (Throat)', voicing: 'Hrasva (Short Vowel)', examples: ['अमृत (Amrit) — Nectar', 'अग्नि (Agni) — Fire', 'अर्थ (Arth) — Meaning'] },
  { devanagari: 'आ', iast: 'ā', ipaHint: "aa (as in 'father')", category: 'vowel', articulation: 'Kantha (Throat)', voicing: 'Deergha (Long Vowel)', examples: ['आत्मा (Aatmaa) — Soul', 'आकाश (Aakaash) — Sky', 'आनन्द (Aanand) — Bliss'] },
  { devanagari: 'इ', iast: 'i', ipaHint: "i (as in 'it')", category: 'vowel', articulation: 'Taalu (Palate)', voicing: 'Hrasva (Short Vowel)', examples: ['इन्द्र (Indra) — King of Gods', 'इच्छा (Icchaa) — Desire'] },
  { devanagari: 'ई', iast: 'ī', ipaHint: "ee (as in 'see')", category: 'vowel', articulation: 'Taalu (Palate)', voicing: 'Deergha (Long Vowel)', examples: ['ईश्वर (Eeshvar) — God', 'ईर्ष्या (Eershyaa) — Jealousy'] },
  { devanagari: 'उ', iast: 'u', ipaHint: "u (as in 'put')", category: 'vowel', articulation: 'Oshtha (Lips)', voicing: 'Hrasva (Short Vowel)', examples: ['उमा (Umaa) — Parvati', 'उपनिषद् (Upanishad) — Sacred text'] },
  { devanagari: 'ऊ', iast: 'ū', ipaHint: "oo (as in 'pool')", category: 'vowel', articulation: 'Oshtha (Lips)', voicing: 'Deergha (Long Vowel)', examples: ['ऊर्जा (Oorjaa) — Energy', 'ऊर्ध्व (Oordhva) — Upward'] },
  { devanagari: 'ऋ', iast: 'ṛ', ipaHint: 'ri (tongue curls back to roof)', category: 'vowel', articulation: 'Moordhaa (Roof)', voicing: 'Retroflex Vowel', examples: ['ऋषि (Rishi) — Sage', 'ऋग्वेद (Rigveda) — Oldest Veda', 'ऋतु (Ritu) — Season'] },
  { devanagari: 'ए', iast: 'e', ipaHint: "e (as in 'hey')", category: 'vowel', articulation: 'Compound', voicing: 'Guna (अ + इ · Throat+Palate)', examples: ['एक (Eka) — One', 'एव (Eva) — Only/Indeed'] },
  { devanagari: 'ऐ', iast: 'ai', ipaHint: "ai (as in 'aisle')", category: 'vowel', articulation: 'Compound', voicing: 'Vriddhi (अ + ए · Throat+Palate)', examples: ['ऐश्वर्य (Aishvarya) — Prosperity', 'ऐक्य (Aikya) — Unity'] },
  { devanagari: 'ओ', iast: 'o', ipaHint: "o (as in 'go')", category: 'vowel', articulation: 'Compound', voicing: 'Guna (अ + उ · Throat+Lips)', examples: ['ओम् (Om) — Sacred syllable', 'ओजस् (Ojas) — Vitality'] },
  { devanagari: 'औ', iast: 'au', ipaHint: "au (as in 'how')", category: 'vowel', articulation: 'Compound', voicing: 'Vriddhi (अ + ओ · Throat+Lips)', examples: ['औषधि (Aushadhi) — Medicine', 'औदार्य (Audaarya) — Greatness'] },
  { devanagari: 'अं', iast: 'aṃ', ipaHint: 'Anusvara — nasal m resonance', category: 'anusvara_visarga', articulation: 'Compound', voicing: 'Anusvara (Nasal)', examples: ['संस्कृतम् (Sanskritam) — Refined'] },
  { devanagari: 'अः', iast: 'aḥ', ipaHint: 'Visarga — breathy h release', category: 'anusvara_visarga', articulation: 'Kantha (Throat)', voicing: 'Visarga (Aspirate)', examples: ['रामः (Raamah) — Rama', 'शान्तिः (Shaantih) — Peace'] },
  // Ka-varga
  { devanagari: 'क', iast: 'ka', ipaHint: "ka (as in 'cup')", category: 'stop', articulation: 'Kantha (Throat)', voicing: 'Unvoiced Unaspirated (अघोष अल्पप्राण)', examples: ['कमल (Kamal) — Lotus', 'कृष्ण (Krishna) — Krishna'] },
  { devanagari: 'ख', iast: 'kha', ipaHint: 'kha (k + strong breath)', category: 'stop', articulation: 'Kantha (Throat)', voicing: 'Unvoiced Aspirated (अघोष महाप्राण)', examples: ['खग (Khaga) — Bird', 'खेल (Khel) — Play'] },
  { devanagari: 'ग', iast: 'ga', ipaHint: "ga (as in 'go')", category: 'stop', articulation: 'Kantha (Throat)', voicing: 'Voiced Unaspirated (घोष अल्पप्राण)', examples: ['गज (Gaja) — Elephant', 'गृह (Griha) — Home'] },
  { devanagari: 'घ', iast: 'gha', ipaHint: 'gha (g + deep breath)', category: 'stop', articulation: 'Kantha (Throat)', voicing: 'Voiced Aspirated (घोष महाप्राण)', examples: ['घट (Ghata) — Pot', 'घर (Ghar) — House'] },
  { devanagari: 'ङ', iast: 'ṅa', ipaHint: "nga (as in 'sing')", category: 'stop', articulation: 'Kantha (Throat)', voicing: 'Nasal (अनुनासिक)', examples: ['गङ्गा (Gangaa) — Ganges'] },
  // Cha-varga
  { devanagari: 'च', iast: 'ca', ipaHint: "cha (as in 'church')", category: 'stop', articulation: 'Taalu (Palate)', voicing: 'Unvoiced Unaspirated (अघोष अल्पप्राण)', examples: ['चन्द्र (Chandra) — Moon', 'चक्र (Chakra) — Wheel'] },
  { devanagari: 'छ', iast: 'cha', ipaHint: 'chha (ch + breath)', category: 'stop', articulation: 'Taalu (Palate)', voicing: 'Unvoiced Aspirated (अघोष महाप्राण)', examples: ['छाया (Chhaayaa) — Shadow', 'छात्र (Chhaatra) — Student'] },
  { devanagari: 'ज', iast: 'ja', ipaHint: "ja (as in 'just')", category: 'stop', articulation: 'Taalu (Palate)', voicing: 'Voiced Unaspirated (घोष अल्पप्राण)', examples: ['जल (Jala) — Water', 'जगत् (Jagat) — World'] },
  { devanagari: 'झ', iast: 'jha', ipaHint: 'jha (j + breath)', category: 'stop', articulation: 'Taalu (Palate)', voicing: 'Voiced Aspirated (घोष महाप्राण)', examples: ['झष (Jhasha) — Fish'] },
  { devanagari: 'ञ', iast: 'ña', ipaHint: "nya (as in 'canyon')", category: 'stop', articulation: 'Taalu (Palate)', voicing: 'Nasal (अनुनासिक)', examples: ['प्रज्ञा (Prajnaa) — Wisdom', 'यज्ञ (Yajna) — Sacrifice'] },
  // Ta-varga (Retroflex)
  { devanagari: 'ट', iast: 'ṭa', ipaHint: 'Ta (hard, tongue curled to roof)', category: 'stop', articulation: 'Moordhaa (Roof)', voicing: 'Unvoiced Unaspirated (अघोष अल्पप्राण)', examples: ['टीका (Teekaa) — Commentary', 'टंकार (Tankaara) — Bowstring twang'] },
  { devanagari: 'ठ', iast: 'ṭha', ipaHint: 'Tha (retroflex T + breath)', category: 'stop', articulation: 'Moordhaa (Roof)', voicing: 'Unvoiced Aspirated (अघोष महाप्राण)', examples: ['ठाकुर (Thaakura) — Deity/Lord'] },
  { devanagari: 'ड', iast: 'ḍa', ipaHint: 'Da (hard D, tongue curled)', category: 'stop', articulation: 'Moordhaa (Roof)', voicing: 'Voiced Unaspirated (घोष अल्पप्राण)', examples: ['डमरु (Damaru) — Shiva drum'] },
  { devanagari: 'ढ', iast: 'ḍha', ipaHint: 'Dha (retroflex D + breath)', category: 'stop', articulation: 'Moordhaa (Roof)', voicing: 'Voiced Aspirated (घोष महाप्राण)', examples: ['दृढ (Dridha) — Firm/Steadfast'] },
  { devanagari: 'ण', iast: 'ṇa', ipaHint: 'Na (retroflex nasal N)', category: 'stop', articulation: 'Moordhaa (Roof)', voicing: 'Nasal (अनुनासिक)', examples: ['प्राण (Praana) — Breath', 'रामायण (Raamaayana) — Epic'] },
  // ta-varga (Dental)
  { devanagari: 'त', iast: 'ta', ipaHint: 'ta (soft, tongue at upper teeth)', category: 'stop', articulation: 'Danta (Teeth)', voicing: 'Unvoiced Unaspirated (अघोष अल्पप्राण)', examples: ['तत्त्व (Tattva) — Essence', 'तारा (Taaraa) — Star'] },
  { devanagari: 'थ', iast: 'tha', ipaHint: 'tha (soft dental t + breath)', category: 'stop', articulation: 'Danta (Teeth)', voicing: 'Unvoiced Aspirated (अघोष महाप्राण)', examples: ['रथ (Ratha) — Chariot', 'कथा (Kathaa) — Story'] },
  { devanagari: 'द', iast: 'da', ipaHint: "da (soft, like 'this')", category: 'stop', articulation: 'Danta (Teeth)', voicing: 'Voiced Unaspirated (घोष अल्पप्राण)', examples: ['दान (Daan) — Charity', 'देव (Deva) — God'] },
  { devanagari: 'ध', iast: 'dha', ipaHint: 'dha (soft dental d + breath)', category: 'stop', articulation: 'Danta (Teeth)', voicing: 'Voiced Aspirated (घोष महाप्राण)', examples: ['धर्म (Dharma) — Duty', 'ध्यान (Dhyaana) — Meditation'] },
  { devanagari: 'न', iast: 'na', ipaHint: 'na (dental nasal)', category: 'stop', articulation: 'Danta (Teeth)', voicing: 'Nasal (अनुनासिक)', examples: ['नमस्ते (Namaste) — Bowing to you', 'नदी (Nadee) — River'] },
  // pa-varga (Labial)
  { devanagari: 'प', iast: 'pa', ipaHint: "pa (as in 'pun')", category: 'stop', articulation: 'Oshtha (Lips)', voicing: 'Unvoiced Unaspirated (अघोष अल्पप्राण)', examples: ['पुस्तक (Pustak) — Book', 'प्राण (Praana) — Life-breath'] },
  { devanagari: 'फ', iast: 'pha', ipaHint: 'pha (p + puff of air)', category: 'stop', articulation: 'Oshtha (Lips)', voicing: 'Unvoiced Aspirated (अघोष महाप्राण)', examples: ['फल (Phala) — Fruit'] },
  { devanagari: 'ब', iast: 'ba', ipaHint: "ba (as in 'bud')", category: 'stop', articulation: 'Oshtha (Lips)', voicing: 'Voiced Unaspirated (घोष अल्पप्राण)', examples: ['बालक (Baalaka) — Boy', 'बुद्धि (Buddhi) — Intellect'] },
  { devanagari: 'भ', iast: 'bha', ipaHint: 'bha (b + deep breath)', category: 'stop', articulation: 'Oshtha (Lips)', voicing: 'Voiced Aspirated (घोष महाप्राण)', examples: ['भक्ति (Bhakti) — Devotion', 'भारत (Bhaarata) — Land of Light'] },
  { devanagari: 'म', iast: 'ma', ipaHint: "ma (as in 'mother')", category: 'stop', articulation: 'Oshtha (Lips)', voicing: 'Nasal (अनुनासिक)', examples: ['माता (Maataa) — Mother', 'मन (Man) — Mind'] },
  // Semi-vowels (Antahstha)
  { devanagari: 'य', iast: 'ya', ipaHint: "ya (as in 'yes')", category: 'semivowel', articulation: 'Taalu (Palate)', voicing: 'Antahstha (Semi-vowel · Air/वायु)', examples: ['योग (Yoga) — Union', 'यज्ञ (Yajna) — Sacrifice'] },
  { devanagari: 'र', iast: 'ra', ipaHint: 'ra (rolled/tapped at roof)', category: 'semivowel', articulation: 'Moordhaa (Roof)', voicing: 'Antahstha (Semi-vowel · Fire/अग्नि)', examples: ['राम (Raama) — Lord Rama', 'रवि (Ravi) — Sun'] },
  { devanagari: 'ल', iast: 'la', ipaHint: "la (dental liquid 'l')", category: 'semivowel', articulation: 'Danta (Teeth)', voicing: 'Antahstha (Semi-vowel · Earth/पृथ्वी)', examples: ['लोक (Loka) — World', 'कमल (Kamala) — Lotus'] },
  { devanagari: 'व', iast: 'va', ipaHint: 'va (labio-dental glide)', category: 'semivowel', articulation: 'Oshtha (Lips)', voicing: 'Antahstha (Semi-vowel · Water/जल)', examples: ['विद्या (Vidyaa) — Knowledge', 'वन (Vana) — Forest'] },
  // Sibilants & Aspirate (Ushma)
  { devanagari: 'श', iast: 'śa', ipaHint: "sha (palatal, as in 'ship')", category: 'sibilant', articulation: 'Taalu (Palate)', voicing: 'Ushma Sibilant (ऊष्म · Palate)', examples: ['शान्ति (Shaanti) — Peace', 'शक्ति (Shakti) — Power'] },
  { devanagari: 'ष', iast: 'ṣa', ipaHint: 'sha (retroflex, tongue curled to roof)', category: 'sibilant', articulation: 'Moordhaa (Roof)', voicing: 'Ushma Sibilant (ऊष्म · Roof)', examples: ['पुरुष (Purusha) — Cosmic Person', 'ओषधि (Oshadhi) — Healing Herb'] },
  { devanagari: 'स', iast: 'sa', ipaHint: "sa (dental, as in 'sun')", category: 'sibilant', articulation: 'Danta (Teeth)', voicing: 'Ushma Sibilant (ऊष्म · Teeth)', examples: ['सत्य (Satya) — Truth', 'सूर्य (Soorya) — Sun'] },
  { devanagari: 'ह', iast: 'ha', ipaHint: "ha (voiced throat breath, 'hello')", category: 'sibilant', articulation: 'Kantha (Throat)', voicing: 'Ushma Aspirate (ऊष्म · Throat)', examples: ['हरि (Hari) — Vishnu', 'हिमालय (Himaalaya) — Himalayas'] },
];

/** Descriptions of अं and अः, as Lesson 1.8 gives them. */
const AYOGAVAHA_MEANINGS: Record<string, string> = {
  'अं': 'nasal "m" sound at end',
  'अः': 'breathy "h" sound at end',
};

export const VARNAMALA_PHONEMES: PhonemeEntry[] = (() => {
  const cards = letterCards(DATA);
  return PHONEME_BASE.map((p) => {
    const card = cards.get(p.devanagari);
    if (!card) return { ...p, meaning: AYOGAVAHA_MEANINGS[p.devanagari] };
    return {
      ...p,
      ipaHint: card.phonetic || p.ipaHint,
      lesson: card.lesson,
      meaning: card.meaning,
      deity: card.deity,
      examples: card.words.length ? card.words : p.examples,
    };
  });
})();

// ─── Māheśvara-sūtras & pratyāhāras ──────────────────────────

export interface MaheshvaraSutra {
  number: number;
  devanagari: string;
  iast: string;
  letters: string[];
  itMarker: string;
  classDescription: string;
}

/** The 14 sūtras (letters and markers are checked against the app's list in tests/). */
export const MAHESHVARA_SUTRAS: MaheshvaraSutra[] = [
  { number: 1, devanagari: 'अ इ उ ण्', iast: 'a i u ṇ', letters: ['अ', 'इ', 'उ'], itMarker: 'ण्', classDescription: 'Simple short vowels (प्रथम स्वर)' },
  { number: 2, devanagari: 'ऋ ऌ क्', iast: 'ṛ ḷ k', letters: ['ऋ', 'ऌ'], itMarker: 'क्', classDescription: 'Retroflex & dental vocalic liquids' },
  { number: 3, devanagari: 'ए ओ ङ्', iast: 'e o ṅ', letters: ['ए', 'ओ'], itMarker: 'ङ्', classDescription: 'Guṇa compound vowels (गुण स्वर)' },
  { number: 4, devanagari: 'ऐ औ च्', iast: 'ai au c', letters: ['ऐ', 'औ'], itMarker: 'च्', classDescription: 'Vṛddhi compound vowels (वृद्धि स्वर — completes अच्)' },
  { number: 5, devanagari: 'ह य व र ट्', iast: 'ha ya va ra ṭ', letters: ['ह', 'य', 'व', 'र'], itMarker: 'ट्', classDescription: 'Aspirate + first 3 semi-vowels' },
  { number: 6, devanagari: 'ल ण्', iast: 'la ṇ', letters: ['ल'], itMarker: 'ण्', classDescription: 'Dental semi-vowel (completes यण्)' },
  { number: 7, devanagari: 'ञ म ङ ण न म्', iast: 'ña ma ṅa ṇa na m', letters: ['ञ', 'म', 'ङ', 'ण', 'न'], itMarker: 'म्', classDescription: 'All 5 nasal consonants (अनुनासिक)' },
  { number: 8, devanagari: 'झ भ ञ्', iast: 'jha bha ñ', letters: ['झ', 'भ'], itMarker: 'ञ्', classDescription: 'Voiced aspirated stops (part 1)' },
  { number: 9, devanagari: 'घ ढ ध ष्', iast: 'gha ḍha dha ṣ', letters: ['घ', 'ढ', 'ध'], itMarker: 'ष्', classDescription: 'Voiced aspirated stops (part 2 — completes झष्)' },
  { number: 10, devanagari: 'ज ब ग ड द श्', iast: 'ja ba ga ḍa da ś', letters: ['ज', 'ब', 'ग', 'ड', 'द'], itMarker: 'श्', classDescription: 'Voiced unaspirated stops (जश् class)' },
  { number: 11, devanagari: 'ख फ छ ठ थ च ट त व्', iast: 'kha pha cha ṭha tha ca ṭa ta v', letters: ['ख', 'फ', 'छ', 'ठ', 'थ', 'च', 'ट', 'त'], itMarker: 'व्', classDescription: 'Voiceless aspirated + unaspirated stops' },
  { number: 12, devanagari: 'क प य्', iast: 'ka pa y', letters: ['क', 'प'], itMarker: 'य्', classDescription: 'Remaining voiceless stops (completes खय् / झय्)' },
  { number: 13, devanagari: 'श ष स र्', iast: 'śa ṣa sa r', letters: ['श', 'ष', 'स'], itMarker: 'र्', classDescription: 'Three sibilants (शर् class)' },
  { number: 14, devanagari: 'ह ल्', iast: 'ha l', letters: ['ह'], itMarker: 'ल्', classDescription: 'Final aspirate closure (completes हल् & अल्)' },
];

export interface PratyaharaPreset {
  code: string;
  iast: string;
  startLetter: string;
  endMarker: string;
  /** [sūtra of the first sound, sūtra whose marker closes the group] */
  sutraSpan: [number, number];
  /** The sounds covered, in sūtra order (ह counted once). */
  letters: string[];
  meaning: string;
  famousSutra: string;
}

/** The pratyāhāras learners meet first, each with a sūtra that uses it (from the app). */
export const PRATYAHARA_PRESETS: PratyaharaPreset[] = FAMOUS_PRATYAHARAS.map((p) => {
  const expanded = expandPratyahara(p.first, p.to);
  if (!expanded) throw new Error(`Bad pratyāhāra ${p.first}…${p.to}`);
  return {
    code: expanded.name,
    iast: toIast(expanded.name),
    startLetter: p.first,
    endMarker: MAHESHVARA_SUTRAS[p.to - 1].itMarker,
    sutraSpan: [expanded.from[0], expanded.to],
    letters: expanded.letters,
    meaning: p.meaning,
    famousSutra: p.sutra,
  };
});

// ─── Verb classes & paradigm tables (from the app's Śāstra Lab) ──

export type DhatuGanaClass = VerbClass;
export const DASHAGANI_VERB_CLASSES: DhatuGanaClass[] = VERB_CLASSES;

export type { ParadigmTable };
export const NOUN_TABLES: ParadigmTable[] = PARADIGM_TABLES.filter((t) => t.group === 'noun');
export const VERB_TABLES: ParadigmTable[] = PARADIGM_TABLES.filter((t) => t.group === 'verb');

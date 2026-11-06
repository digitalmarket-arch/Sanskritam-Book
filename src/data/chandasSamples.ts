import { SAMPLE_VERSES } from './app/chandas';

/** English renderings of the samples (where the verse is only partly translated, the note says so). */
export const TRANSLATIONS: Record<string, string> = {
  gita: 'First half: you have the right to action alone, never to its fruits.',
  gayatri: 'We meditate upon that adorable effulgence of the divine Sun; may He illumine our intellects.',
  kumara: 'First half: in the northern direction stands the divine-souled lord of mountains named Himālaya.',
  raghu:
    'United like word and meaning — for the right comprehension of word and meaning, I salute the parents of the universe, Pārvatī and Parameśvara.',
};

/**
 * The verses to try. The scanner and its samples are the app's tested
 * src/data/chandas.ts (copied into src/data/app/); the book adds one more
 * śloka, Raghuvaṃśa 1.1.
 */
export const CHANDAS_SAMPLES: { id: string; title: string; text: string; translation?: string }[] = [
  ...SAMPLE_VERSES,
  {
    id: 'raghu',
    title: 'Raghuvaṃśa 1.1',
    text: 'वागर्थाविव सम्पृक्तौ वागर्थप्रतिपत्तये ।\nजगतः पितरौ वन्दे पार्वतीपरमेश्वरौ ॥',
  },
].map((v) => ({ ...v, translation: TRANSLATIONS[v.id] }));

/** Classical meters as Lessons 12.1–12.2 describe them. */
export const METER_TABLE = [
  { name: 'गायत्री (Gāyatrī)', count: '3 × 8 = 24', note: 'The most sacred Vedic meter' },
  { name: 'अनुष्टुप् (Anuṣṭubh)', count: '4 × 8 = 32', note: 'The śloka of the Bhagavad Gītā, Rāmāyaṇa, Mahābhārata and almost all purāṇas' },
  { name: 'त्रिष्टुभ् (Triṣṭubh)', count: '4 × 11 = 44', note: 'Most common Vedic meter (>40% of Ṛgveda); Indravajrā, Upendravajrā, Upajāti' },
  { name: 'जगती (Jagatī)', count: '4 × 12 = 48', note: 'Cadence ⏑ ─ ⏑ ─ ⏑ ─, one syllable more than triṣṭubh' },
  { name: 'मन्दाक्रान्ता (Mandākrāntā)', count: '4 × 17 = 68', note: 'The meter of Kālidāsa’s Meghadūta' },
  { name: 'शार्दूलविक्रीडितम्', count: '4 × 19 = 76', note: '“Tiger’s play” — grand, declamatory verses' },
];

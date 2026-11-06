/**
 * Worked sandhi derivations for the Pāṇini lab's workbench. Each case gives
 * the input, the result and the sūtras that produce it, in the order they
 * apply.
 */
export interface SandhiRuleCase {
  id: string;
  category: string;
  sutra: string;
  leftWord: string;
  rightWord: string;
  mergedResult: string;
  stepExplanation: string;
}

export const SANDHI_WORKBENCH_CASES: SandhiRuleCase[] = [
  {
    id: 'yan-1',
    category: 'Yaṇ Sandhi (यण् सन्धि)',
    sutra: 'इको यणचि (6.1.77)',
    leftWord: 'इति',
    rightWord: 'अपि',
    mergedResult: 'इत्यपि',
    stepExplanation: 'इति ends in इ (member of इक्). Followed by अ (member of अच्), इ undergoes आदेश (substitution) to palatal semi-vowel य् → इत्यपि.',
  },
  {
    id: 'yan-2',
    category: 'Yaṇ Sandhi (यण् सन्धि)',
    sutra: 'इको यणचि (6.1.77)',
    leftWord: 'सु',
    rightWord: 'आगतम्',
    mergedResult: 'स्वागतम्',
    stepExplanation: 'सु ends in उ (member of इक्). Before आ (अच्), उ substitutes to labial semi-vowel व् → स्वागतम् ("Welcome").',
  },
  {
    id: 'guna-1',
    category: 'Guṇa Sandhi (गुण सन्धि)',
    sutra: 'आद्गुणः (6.1.87) + अदेङ् गुणः (1.1.2)',
    leftWord: 'सूर्य',
    rightWord: 'उदयः',
    mergedResult: 'सूर्योदयः',
    stepExplanation: 'अ + उ blend into Throat+Lips Guṇa vowel ओ (एङ् class) → सूर्योदयः ("Sunrise").',
  },
  {
    id: 'dirgha-1',
    category: 'Dīrgha Sandhi (दीर्घ सन्धि)',
    sutra: 'अकः सवर्णे दीर्घः (6.1.101)',
    leftWord: 'देव',
    rightWord: 'आलयः',
    mergedResult: 'देवालयः',
    stepExplanation: 'Homorganic vowels अ + आ merge into long दीर्घ vowel आ → देवालयः ("Temple").',
  },
  {
    id: 'visarga-1',
    category: 'Visarga Sandhi (विसर्ग सन्धि)',
    sutra: 'अतो रोरप्लुतादप्लुते (6.1.113) + एङः पदान्तादति (6.1.109)',
    leftWord: 'रामः',
    rightWord: 'अहम्',
    mergedResult: 'रामोऽहम्',
    stepExplanation: 'अः before short अ becomes ओ, and the following अ undergoes लोप (deletion) marked by avagraha (ऽ) → रामोऽहम्.',
  },
  {
    id: 'natva-1',
    category: 'Ṇatva Cerebralization (णत्वम्)',
    sutra: 'टाङसिङसामिनात्स्याः (7.1.12) + आद्गुणः (6.1.87) + रषाभ्यां नो णः समानपदे (8.4.1) + अट्कुप्वाङ्नुम्व्यवायेऽपि (8.4.2)',
    leftWord: 'राम',
    rightWord: 'टा (3rd case sg.)',
    mergedResult: 'रामेण',
    stepExplanation: 'After an अ-stem the ending टा becomes इन (7.1.12): राम + इन. अ + इ merge into ए (6.1.87): रामेन. The न is in the same word as the र of राम, and only vowels and the labial म stand between them, so it becomes ण (8.4.1–2) → रामेण.',
  },
];

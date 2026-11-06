// ─────────────────────────────────────────────────────────────
//  GENERATED FILE — do not edit by hand.
//  Copied verbatim from digitalmarket-arch/SanskritamApp
//  src/data/labReference.ts @ 6622cf8a59d5b70411b3b5b3ea4246800777ff81 (origin/claude/vibrant-lamport-avspmz)
//  Fix mistakes in the app, then re-run: node scripts/syncFromApp.mjs
// ─────────────────────────────────────────────────────────────
/**
 * ═══════════════════════════════════════════════════════════
 *  ŚĀSTRA LAB REFERENCE DATA
 *
 *  The ten verb classes (दशगणी) and full paradigm tables, used by
 *  the Śāstra Lab screen. Adapted from the Sanskritam-Book companion
 *  and corrected: Dhātupāṭha glosses are quoted as the Dhātupāṭha
 *  gives them, and every example is the attested present form.
 * ═══════════════════════════════════════════════════════════
 */

export interface VerbClassExample {
  form: string;
  root: string;
  meaning: string;
}

export interface VerbClass {
  n: number;
  name: string;
  iast: string;
  /** The class's first root as listed in the Dhātupāṭha, with its meaning-gloss. */
  entry: string;
  vikarana: string;
  sutra: string;
  rule: string;
  examples: VerbClassExample[];
}

export const VERB_CLASSES: VerbClass[] = [
  {
    n: 1, name: 'भ्वादिः', iast: 'bhvādi', entry: 'भू सत्तायाम्',
    vikarana: 'शप् → -अ-', sutra: 'कर्तरि शप् (3.1.68)',
    rule: 'Adds -अ-; a final vowel, or a short इ/उ/ऋ before the last consonant, takes guṇa (भू → भव-, बुध् → बोध-). About half of all roots are here.',
    examples: [
      { form: 'भवति', root: '√भू', meaning: 'is, becomes' },
      { form: 'पठति', root: '√पठ्', meaning: 'reads' },
      { form: 'गच्छति', root: '√गम्', meaning: 'goes' },
    ],
  },
  {
    n: 2, name: 'अदादिः', iast: 'adādi', entry: 'अद भक्षणे',
    vikarana: 'शप् deleted (लुक्)', sutra: 'अदिप्रभृतिभ्यः शपः (2.4.72)',
    rule: 'No stem affix: the endings join the root directly.',
    examples: [
      { form: 'अत्ति', root: '√अद्', meaning: 'eats' },
      { form: 'अस्ति', root: '√अस्', meaning: 'is' },
      { form: 'याति', root: '√या', meaning: 'goes' },
    ],
  },
  {
    n: 3, name: 'जुहोत्यादिः', iast: 'juhotyādi', entry: 'हु दानादनयोः',
    vikarana: 'शप् → श्लु (doubling)', sutra: 'जुहोत्यादिभ्यः श्लुः (2.4.75)',
    rule: 'The root is reduplicated (श्लौ 6.1.10).',
    examples: [
      { form: 'जुहोति', root: '√हु', meaning: 'offers into the fire' },
      { form: 'ददाति', root: '√दा', meaning: 'gives' },
      { form: 'दधाति', root: '√धा', meaning: 'places' },
    ],
  },
  {
    n: 4, name: 'दिवादिः', iast: 'divādi', entry: 'दिवु क्रीडाविजिगीषा…',
    vikarana: 'श्यन् → -य-', sutra: 'दिवादिभ्यः श्यन् (3.1.69)',
    rule: 'Adds -य-; the root vowel does not take guṇa.',
    examples: [
      { form: 'दीव्यति', root: '√दिव्', meaning: 'plays, shines' },
      { form: 'नृत्यति', root: '√नृत्', meaning: 'dances' },
      { form: 'मन्यते', root: '√मन्', meaning: 'thinks' },
    ],
  },
  {
    n: 5, name: 'स्वादिः', iast: 'svādi', entry: 'षुञ् अभिषवे',
    vikarana: 'श्नु → -नु- / -नो-', sutra: 'स्वादिभ्यः श्नुः (3.1.73)',
    rule: 'Adds -नु-, strengthened to -नो- in the active singular.',
    examples: [
      { form: 'सुनोति', root: '√सु', meaning: 'presses (soma)' },
      { form: 'आप्नोति', root: '√आप्', meaning: 'obtains' },
      { form: 'शक्नोति', root: '√शक्', meaning: 'is able, can' },
    ],
  },
  {
    n: 6, name: 'तुदादिः', iast: 'tudādi', entry: 'तुद व्यथने',
    vikarana: 'श → -अ-', sutra: 'तुदादिभ्यः शः (3.1.77)',
    rule: 'Adds -अ- like class 1, but without guṇa: श lacks the प् marker, so 1.2.4 makes it ङित्-like.',
    examples: [
      { form: 'तुदति', root: '√तुद्', meaning: 'strikes' },
      { form: 'लिखति', root: '√लिख्', meaning: 'writes' },
      { form: 'पृच्छति', root: '√प्रच्छ्', meaning: 'asks' },
    ],
  },
  {
    n: 7, name: 'रुधादिः', iast: 'rudhādi', entry: 'रुधिर् आवरणे',
    vikarana: 'श्नम् → न inside the root', sutra: 'रुधादिभ्यः श्नम् (3.1.78)',
    rule: 'Inserts न after the root\'s last vowel (मिदचोऽन्त्यात्परः 1.1.47).',
    examples: [
      { form: 'रुणद्धि', root: '√रुध्', meaning: 'obstructs' },
      { form: 'भिनत्ति', root: '√भिद्', meaning: 'splits' },
      { form: 'युनक्ति', root: '√युज्', meaning: 'joins, yokes' },
    ],
  },
  {
    n: 8, name: 'तनादिः', iast: 'tanādi', entry: 'तनु विस्तारे',
    vikarana: 'उ → -उ- / -ओ-', sutra: 'तनादिकृञ्भ्य उः (3.1.79)',
    rule: 'Adds -उ-, strengthened to -ओ- in the active singular. √कृ belongs here.',
    examples: [
      { form: 'तनोति', root: '√तन्', meaning: 'stretches' },
      { form: 'करोति', root: '√कृ', meaning: 'does, makes' },
    ],
  },
  {
    n: 9, name: 'क्र्यादिः', iast: 'kryādi', entry: 'डुक्रीञ् द्रव्यविनिमये',
    vikarana: 'श्ना → -ना- / -नी-', sutra: 'क्र्यादिभ्यः श्ना (3.1.81)',
    rule: 'Adds -ना- in the active singular; -नी- before the other endings that begin with a consonant (क्रीणीतः), -न्- before a vowel (क्रीणन्ति).',
    examples: [
      { form: 'क्रीणाति', root: '√क्री', meaning: 'buys' },
      { form: 'जानाति', root: '√ज्ञा', meaning: 'knows' },
      { form: 'गृह्णाति', root: '√ग्रह्', meaning: 'takes' },
    ],
  },
  {
    n: 10, name: 'चुरादिः', iast: 'curādi', entry: 'चुर स्तेये',
    vikarana: 'णिच् + शप् → -अय-', sutra: 'सत्याप… चुरादिभ्यो णिच् (3.1.25)',
    rule: 'Adds णिच् (-इ-, which becomes -अय- before शप्).',
    examples: [
      { form: 'चोरयति', root: '√चुर्', meaning: 'steals' },
      { form: 'कथयति', root: '√कथ्', meaning: 'tells' },
      { form: 'चिन्तयति', root: '√चिन्त्', meaning: 'thinks' },
    ],
  },
];

export interface ParadigmTable {
  id: string;
  group: 'noun' | 'verb';
  title: string;
  subtitle: string;
  rows: { label: string; forms: [string, string, string] }[];
}

const CASES = [
  'प्रथमा · Nom.', 'द्वितीया · Acc.', 'तृतीया · Ins.', 'चतुर्थी · Dat.',
  'पञ्चमी · Abl.', 'षष्ठी · Gen.', 'सप्तमी · Loc.', 'सम्बोधनम् · Voc.',
];
const PERSONS = ['प्रथमपुरुषः · 3rd', 'मध्यमपुरुषः · 2nd', 'उत्तमपुरुषः · 1st'];

const table = (
  id: string, group: ParadigmTable['group'], title: string, subtitle: string,
  labels: string[], forms: [string, string, string][],
): ParadigmTable => ({ id, group, title, subtitle, rows: forms.map((f, i) => ({ label: labels[i], forms: f })) });

export const PARADIGM_TABLES: ParadigmTable[] = [
  table('rama', 'noun', 'रामः', 'Masculine -अ stem, like देव, बालक, वृक्ष. The ण in रामेण, रामाणाम् comes from the र (8.4.1–2).', CASES, [
    ['रामः', 'रामौ', 'रामाः'], ['रामम्', 'रामौ', 'रामान्'], ['रामेण', 'रामाभ्याम्', 'रामैः'],
    ['रामाय', 'रामाभ्याम्', 'रामेभ्यः'], ['रामात्', 'रामाभ्याम्', 'रामेभ्यः'], ['रामस्य', 'रामयोः', 'रामाणाम्'],
    ['रामे', 'रामयोः', 'रामेषु'], ['हे राम', 'हे रामौ', 'हे रामाः'],
  ]),
  table('hari', 'noun', 'हरिः', 'Masculine -इ stem, like कवि, मुनि, अग्नि.', CASES, [
    ['हरिः', 'हरी', 'हरयः'], ['हरिम्', 'हरी', 'हरीन्'], ['हरिणा', 'हरिभ्याम्', 'हरिभिः'],
    ['हरये', 'हरिभ्याम्', 'हरिभ्यः'], ['हरेः', 'हरिभ्याम्', 'हरिभ्यः'], ['हरेः', 'हर्योः', 'हरीणाम्'],
    ['हरौ', 'हर्योः', 'हरिषु'], ['हे हरे', 'हे हरी', 'हे हरयः'],
  ]),
  table('nadi', 'noun', 'नदी', 'Feminine -ई stem, like देवी, पुत्री.', CASES, [
    ['नदी', 'नद्यौ', 'नद्यः'], ['नदीम्', 'नद्यौ', 'नदीः'], ['नद्या', 'नदीभ्याम्', 'नदीभिः'],
    ['नद्यै', 'नदीभ्याम्', 'नदीभ्यः'], ['नद्याः', 'नदीभ्याम्', 'नदीभ्यः'], ['नद्याः', 'नद्योः', 'नदीनाम्'],
    ['नद्याम्', 'नद्योः', 'नदीषु'], ['हे नदि', 'हे नद्यौ', 'हे नद्यः'],
  ]),
  table('mati', 'noun', 'मतिः', 'Feminine -इ stem, like बुद्धि, भक्ति. Four singular cases have two correct forms.', CASES, [
    ['मतिः', 'मती', 'मतयः'], ['मतिम्', 'मती', 'मतीः'], ['मत्या', 'मतिभ्याम्', 'मतिभिः'],
    ['मत्यै / मतये', 'मतिभ्याम्', 'मतिभ्यः'], ['मत्याः / मतेः', 'मतिभ्याम्', 'मतिभ्यः'], ['मत्याः / मतेः', 'मत्योः', 'मतीनाम्'],
    ['मत्याम् / मतौ', 'मत्योः', 'मतिषु'], ['हे मते', 'हे मती', 'हे मतयः'],
  ]),
  table('phala', 'noun', 'फलम्', 'Neuter -अ stem, like वन, जल. The 1st and 2nd cases are the same.', CASES, [
    ['फलम्', 'फले', 'फलानि'], ['फलम्', 'फले', 'फलानि'], ['फलेन', 'फलाभ्याम्', 'फलैः'],
    ['फलाय', 'फलाभ्याम्', 'फलेभ्यः'], ['फलात्', 'फलाभ्याम्', 'फलेभ्यः'], ['फलस्य', 'फलयोः', 'फलानाम्'],
    ['फले', 'फलयोः', 'फलेषु'], ['हे फल', 'हे फले', 'हे फलानि'],
  ]),
  table('lat', 'verb', '√भू · लट्', 'Present — "is, becomes".', PERSONS, [
    ['भवति', 'भवतः', 'भवन्ति'], ['भवसि', 'भवथः', 'भवथ'], ['भवामि', 'भवावः', 'भवामः'],
  ]),
  table('lan', 'verb', '√भू · लङ्', 'Imperfect — a past before today (अनद्यतने लङ् 3.2.111).', PERSONS, [
    ['अभवत्', 'अभवताम्', 'अभवन्'], ['अभवः', 'अभवतम्', 'अभवत'], ['अभवम्', 'अभवाव', 'अभवाम'],
  ]),
  table('lrt', 'verb', '√भू · लृट्', 'Simple future — "will be" (भू + इ + स्य).', PERSONS, [
    ['भविष्यति', 'भविष्यतः', 'भविष्यन्ति'], ['भविष्यसि', 'भविष्यथः', 'भविष्यथ'], ['भविष्यामि', 'भविष्यावः', 'भविष्यामः'],
  ]),
  table('lot', 'verb', '√भू · लोट्', 'Imperative — "let him be!", "be!".', PERSONS, [
    ['भवतु', 'भवताम्', 'भवन्तु'], ['भव', 'भवतम्', 'भवत'], ['भवानि', 'भवाव', 'भवाम'],
  ]),
  table('vidhilin', 'verb', '√भू · विधिलिङ्', 'Optative — "should be, may be" (भव + इ → भवे-).', PERSONS, [
    ['भवेत्', 'भवेताम्', 'भवेयुः'], ['भवेः', 'भवेतम्', 'भवेत'], ['भवेयम्', 'भवेव', 'भवेम'],
  ]),
  table('lit', 'verb', '√भू · लिट्', 'Perfect — remote past, not witnessed (परोक्षे लिट् 3.2.115).', PERSONS, [
    ['बभूव', 'बभूवतुः', 'बभूवुः'], ['बभूविथ', 'बभूवथुः', 'बभूव'], ['बभूव', 'बभूविव', 'बभूविम'],
  ]),
];

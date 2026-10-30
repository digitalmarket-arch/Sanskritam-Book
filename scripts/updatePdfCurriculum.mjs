import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import { PDFDocument as PdfLibDoc } from 'pdf-lib';

const ROOT_PDF = '/app/applet/Sanskritam-Curriculum.pdf';
const BACKUP_PDF = '/app/applet/public/Sanskritam-Curriculum-Original-137p.pdf';
const PUBLIC_PDF = '/app/applet/public/Sanskritam-Curriculum.pdf';
const APPEND_TEMP_PDF = '/tmp/chapters_13_to_17.pdf';

const FONT_DEVA_REG = '/usr/share/fonts/truetype/noto/NotoSansDevanagari-Regular.ttf';
const FONT_DEVA_BOLD = '/usr/share/fonts/truetype/noto/NotoSansDevanagari-Bold.ttf';

// Ensure /app/applet/public exists
fs.mkdirSync('/app/applet/public', { recursive: true });

// Keep a clean backup of the original 137-page PDF so script is idempotent
if (!fs.existsSync(BACKUP_PDF)) {
  fs.copyFileSync(ROOT_PDF, BACKUP_PDF);
}

const NEW_CHAPTERS = [
  {
    number: 13,
    title: 'Chapter 13 — Vedic Sanskrit & Rgveda Hymns / वैदिक-संस्कृतम्',
    subtitle: 'Chandas grammar, Agni/Nāsadīya/Puruṣa Sūktas & Padapāṭha-Kramapāṭha preservation',
    units: [
      {
        number: 46,
        title: 'Unit 46 — Vedic Grammar / छन्दोव्याकरणम्',
        subtitle: 'How Vedic (छन्दस्) differs from Classical (भाषा) — लेट् लकारः, Infinitives & Tmesis',
        lessons: [
          {
            number: '13.1',
            title: 'Lesson 13.1 — Vedic Subjunctive (लेट् लकारः), 12 Infinitives & Separated Prefixes',
            subtitle: 'Pāṇini’s "छन्दसि" rules — the bridge from Rgveda to Classical Sanskrit',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'Key Grammatical Features of Vedic Sanskrit (छन्दस्):',
                lines: [
                  '1. Eleventh Lakāra — लेट् (leṭ · Subjunctive): Found only in Veda (सूत्र ३.४.७: लिङर्थे लेट्). Expresses volitional/subjunctive mood (e.g., पताति = may he fly, करति = may he do).',
                  '2. Rich Infinitive System (तुमर्थे से-सेन्-असे-असेन्-क्से-कसेन्-अध्यै-अध्यैन्-कध्यै-कध्यैन्-शध्यै-शध्यैन्-तवै-तवेङ्-तवेनः ३.४.९): Where Classical uses only -तुम् (गन्तुम्), Vedic uses -तवै (गन्तवै), -अध्यै (पिबध्यै = to drink), -जीवे (जीवसे = to live).',
                  '3. Tmesis (व्यवहित-उपसर्गः · 1.4.80 ते प्राग्धातोः / 1.4.82 व्यवहिताश्च): In Classical, prefixes fuse to the verb (आगच्छति). In Vedic, upasargas can stand separated from the verb (आ गमत् = may he come).',
                  '4. Vedic Instrumental Plural -एभिः (बहुलं छन्दसि ७.१.१०): अ-stem nouns take -एभिः alongside -ऐः (e.g., देवेभिः = देवैः = by the gods).',
                  '5. Retroflex ड् → ळ् (ḷa): Intervocalic ड् turns into retroflex lateral flap ळ् in Rgveda (अग्निमीळे = अग्निम् ईडे = I praise Agni).',
                ],
              },
              {
                title: 'EXERCISE 2 · MATCH THE PAIRS',
                heading: 'Prompt: Match Vedic forms to Classical Sanskrit equivalents:',
                lines: [
                  '• ईळे (īḷe · Rgveda 1.1.1) → ईडे (īḍe — "I praise/adore")',
                  '• देवेभिः (devebhiḥ) → देवैः (devaiḥ — 3rd pl "by the gods")',
                  '• जीवसे / पिबध्यै → जीवितुम् / पातुम् (Vedic infinitives)',
                  '• लेट् लकारः (लिङर्थे लेट् 3.4.7) → 11th Vedic subjunctive mood',
                ],
              },
              {
                title: 'EXERCISE 3 · QUIZ — MULTIPLE CHOICE',
                heading: 'Question: In the Ashtadhyayi, which word does Pāṇini use in 200+ sūtras to specify "in the Veda"?',
                lines: [
                  'A. लोके (in the world)',
                  'B. छन्दसि / मन्त्रे / निगमे  ✓ CORRECT',
                  'C. काव्ये (in poetry)',
                  'D. नाट्ये (in drama)',
                ],
              },
            ],
          },
        ],
      },
      {
        number: 47,
        title: 'Unit 47 — Rgveda Sūktas / ऋग्वेद-सूक्तानि',
        subtitle: 'Agni Sūkta (1.1), Nāsadīya Sūkta (10.129) & Puruṣa Sūkta (10.90)',
        lessons: [
          {
            number: '13.2',
            title: 'Lesson 13.2 — Parsing the Opening & Cosmological Hymns of the Rgveda',
            subtitle: 'अग्निमीळे पुरोहितम् · नासदासीन्नो सदासीत्तदानीम्',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'Word-by-Word Analysis of Rgveda 1.1.1 & 10.129.1:',
                lines: [
                  'Rgveda 1.1.1 (Gāyatrī Meter · Rishi Madhucchandas Vaiśvāmitra):',
                  '"अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् । होतारं रत्नधातमम् ॥"',
                  '• अग्निम् (Agni, 2nd sg) + ईळे (I praise, 1st sg Ātmanepada) + पुरोहितम् (foremost priest)',
                  '• यज्ञस्य (of the sacrifice, 6th sg) + देवम् (divine/shining) + ऋत्विजम् (ministrant at right season)',
                  '• होतारम् (invoker) + रत्न-धातमम् (bestower of supreme treasures).',
                  'Nāsadīya Sūkta (Rgveda 10.129.1 · Triṣṭubh Meter · Hymn of Creation):',
                  '"नासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।"',
                  '• "Then there was neither non-existence (असत्) nor existence (सत्); there was no realm of air (रजः), nor sky (व्योम) beyond it."',
                  '• 10.129.2: "आनीदवातं स्वधया तदेकम्" — "That One (तद् एकम्) breathed windlessly (अवातम्) by its own intrinsic power (स्वधया)."',
                ],
              },
              {
                title: 'EXERCISE 2 · MATCH THE PAIRS',
                heading: 'Prompt: Match Rgvedic terms from 1.1.1 and 10.129:',
                lines: [
                  '• पुरोहितम् (purohitam) → Placed in front / Foremost priest',
                  '• रत्नधातमम् (ratnadhātamam) → Bestower of rich treasures (superlative)',
                  '• नासदासीत् (nāsad āsīt) → Neither non-existence was',
                  '• आनीदवातम् (ānīd avātam) → Breathed without wind (by its own power)',
                ],
              },
              {
                title: 'EXERCISE 3 · QUIZ — MULTIPLE CHOICE',
                heading: 'Question: The Nāsadīya Sūkta (Rgveda 10.129) is celebrated worldwide as:',
                lines: [
                  'A. A manual of chariot warfare',
                  'B. The oldest philosophical hymn of cosmological inquiry ("Neither non-being nor being was then")  ✓ CORRECT',
                  'C. A list of grammar rules',
                  'D. A seasonal harvest calendar',
                ],
              },
            ],
          },
        ],
      },
      {
        number: 48,
        title: 'Unit 48 — Padapāṭha & Vikṛtipāṭha / पदपाठ-विकृतिपाठाः',
        subtitle: 'How Vedic oral tradition preserved every syllable & accent without error for 3,500 years',
        lessons: [
          {
            number: '13.3',
            title: 'Lesson 13.3 — Saṃhitāpāṭha, Padapāṭha, Kramapāṭha, Jaṭāpāṭha & Ghanapāṭha',
            subtitle: 'Ancient cryptographic error-correction for oral transmission',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'प्रकृतिपाठौ (Base Modes) & अष्टविकृतयः (8 Combinatorial Permutations):',
                lines: [
                  '1. संहितापाठः (Saṃhitāpāṭha): Continuous euphonic text with full sandhi applied.',
                  '2. पदपाठः (Padapāṭha · codified by Śākala): Every word isolated in its pre-sandhi pada form, with compounds split.',
                  '3. क्रमपाठः (Kramapāṭha · Word-Step): Words chanted in overlapping pairs: (1-2), (2-3), (3-4)...',
                  '4. जटापाठः (Jaṭāpāṭha · Braided): Forward-reverse-forward weave: (1-2, 2-1, 1-2), (2-3, 3-2, 2-3)...',
                  '5. घनपाठः (Ghanapāṭha · Bell/Dense Matrix): (1-2, 2-1, 1-2-3, 3-2-1, 1-2-3) — guarantees zero mutation across millennia.',
                ],
              },
              {
                title: 'EXERCISE 2 · SEQUENCE RECITAL (क्रम)',
                heading: 'Order the Vedic recitation systems from continuous text to the densest permutation:',
                lines: [
                  '• 1. संहितापाठः (Continuous sandhi text)',
                  '• 2. पदपाठः (Isolated word-by-word analysis)',
                  '• 3. क्रमपाठः (Pairwise stepping: 1-2, 2-3)',
                  '• 4. जटापाठः (Braided reversal: 1-2-2-1-1-2)',
                  '• 5. घनपाठः (Full 3-word bell matrix: 1-2-2-1-1-2-3-3-2-1-1-2-3)  ✓ CORRECT',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    number: 14,
    title: 'Chapter 14 — Darśana Philosophy & Upaniṣads / षड्दर्शनानि उपनिषदश्च',
    subtitle: 'Mahāvākyas, Nyāya Syllogism, Sāṃkhya-Yoga & Advaita Vedānta',
    units: [
      {
        number: 49,
        title: 'Unit 49 — Upaniṣads & Mahāvākyas / महावाक्यानि',
        subtitle: 'The Four Great Sentences of the Vedas & Īśāvāsya Upaniṣad',
        lessons: [
          {
            number: '14.1',
            title: 'Lesson 14.1 — The Four Mahāvākyas & Pūrṇamadaḥ Pūrṇamidam',
            subtitle: 'प्रज्ञानं ब्रह्म · अहं ब्रह्मास्मि · तत्त्वमसि · अयमात्मा ब्रह्म',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'Grammatical & Philosophical Analysis of the Four Vedic Mahāvākyas:',
                lines: [
                  '1. प्रज्ञानं ब्रह्म (Prajñānaṃ Brahma · Aitareya Upaniṣad 3.3 · Rgveda): प्रज्ञानम् (1st sg N "Consciousness") + ब्रह्म (1st sg N "is Brahman").',
                  '2. अहं ब्रह्मास्मि (Ahaṃ Brahmāsmi · Bṛhadāraṇyaka Upaniṣad 1.4.10 · Yajurveda): अहम् ("I") + ब्रह्म + अस्मि (1st sg present of √अस् "am").',
                  '3. तत्त्वमसि (Tat Tvam Asi · Chāndogya Upaniṣad 6.8.7 · Sāmaveda): तत् ("That") + त्वम् ("Thou") + असि (2nd sg present of √अस् "art").',
                  '4. अयमात्मा ब्रह्म (Ayam Ātmā Brahma · Māṇḍūkya Upaniṣad 1.2 · Atharvaveda): अयम् (this) + आत्मा (Self) + ब्रह्म (is Brahman).',
                  'Śānti Mantra: "पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते । पूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥"',
                ],
              },
              {
                title: 'EXERCISE 2 · MATCH THE PAIRS',
                heading: 'Prompt: Match each Mahāvākya to its source Upaniṣad and Veda:',
                lines: [
                  '• प्रज्ञानं ब्रह्म → Aitareya Upaniṣad (Rgveda)',
                  '• अहं ब्रह्मास्मि → Bṛhadāraṇyaka Upaniṣad (Yajurveda)',
                  '• तत्त्वमसि → Chāndogya Upaniṣad (Sāmaveda)',
                  '• अयमात्मा ब्रह्म → Māṇḍūkya Upaniṣad (Atharvaveda)',
                ],
              },
            ],
          },
        ],
      },
      {
        number: 50,
        title: 'Unit 50 — Nyāya-Vaiśeṣika Logic / न्याय-वैशेषिकौ',
        subtitle: 'Pramāṇas (Epistemology) & the 5-Step Formal Syllogism (पञ्चावयव-न्यायः)',
        lessons: [
          {
            number: '14.2',
            title: 'Lesson 14.2 — Four Pramāṇas & Gautama’s 5-Step Syllogism (पर्वतो वह्निमान् धूमात्)',
            subtitle: 'प्रत्यक्ष, अनुमान, उपमान, शब्द · प्रतिज्ञा, हेतु, उदाहरण, उपनय, निगमन',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'How Indian Logicians Structured Epistemology & Deductive/Inductive Proof:',
                lines: [
                  'The 4 Pramāṇas (Valid Means of Knowledge): 1. प्रत्यक्ष (Perception) · 2. अनुमान (Inference) · 3. उपमान (Comparison/Analogy) · 4. शब्द (Reliable Verbal Testimony).',
                  'The Classic 5-Member Syllogism (पञ्चावयव-वाक्यम्):',
                  '1. प्रतिज्ञा (Proposition): पर्वतो वह्निमान् — "The mountain has fire."',
                  '2. हेतुः (Reason · 5th Ablative): धूमात् — "Because of smoke."',
                  '3. उदाहरणम् (Universal Concomitance + Empirical Example): यत्र यत्र धूमः तत्र तत्र वह्निः, यथा महानसे — "Wherever there is smoke, there is fire, as in a kitchen hearth."',
                  '4. उपनयः (Application): तथा चायं धूमवान् — "And this mountain is likewise smoky."',
                  '5. निगमनम् (Conclusion): तस्मात् तथा (वह्निमान्) — "Therefore, it has fire."',
                ],
              },
              {
                title: 'EXERCISE 2 · SEQUENCE RECITAL (क्रम)',
                heading: 'Arrange the 5 steps (पञ्चावयव) of a Nyāya logical proof in canonical order:',
                lines: [
                  '• 1. प्रतिज्ञा (Proposition: पर्वतो वह्निमान्)',
                  '• 2. हेतुः (Reason: धूमात्)',
                  '• 3. उदाहरणम् (Universal rule + example: यथा महानसे)',
                  '• 4. उपनयः (Application to current case: तथा चायम्)',
                  '• 5. निगमनम् (Validated conclusion: तस्मात् तथा)  ✓ CORRECT',
                ],
              },
            ],
          },
        ],
      },
      {
        number: 51,
        title: 'Unit 51 — Sāṃkhya-Yoga & Vedānta / सांख्य-योग-वेदान्ताः',
        subtitle: 'Patañjali’s Yoga-Sūtras, Puruṣa-Prakṛti & Advaita Ontology',
        lessons: [
          {
            number: '14.3',
            title: 'Lesson 14.3 — Parsing Patañjali’s Yoga-Sūtras (1.1–1.3) & Śaṅkara’s Vedānta',
            subtitle: 'अथ योगानुशासनम् · योगश्चित्तवृत्तिनिरोधः · तदा द्रष्टुः स्वरूपेऽवस्थानम्',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'Sūtra-by-Sūtra Grammatical Breakdown of Patañjali 1.1–1.3:',
                lines: [
                  'Yoga-Sūtra 1.1: अथ योगानुशासनम् — अथ (auspicious commencement) + योग-अनुशासनम् (exposition of Yoga).',
                  'Yoga-Sūtra 1.2: योगश्चित्तवृत्तिनिरोधः — योगः + चित्त-वृत्ति-निरोधः ("Yoga is the cessation of the fluctuations of the mind-field").',
                  'Yoga-Sūtra 1.3: तदा द्रष्टुः स्वरूपेऽवस्थानम् — तदा (then) + द्रष्टुः (of the Seer, 6th sg) + स्व-रूपे (in its own true nature, 7th sg) + अवस्थानम् (abiding).',
                  'Sāṃkhya Dualism: पुरुषः (pure witness consciousness) vs प्रकृतिः (primordial nature composed of सत्त्व, रजस्, तमस्).',
                  'Advaita Vedānta Summary: "ब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः"',
                ],
              },
              {
                title: 'EXERCISE 2 · QUIZ — MULTIPLE CHOICE',
                heading: 'Question: In "योगश्चित्तवृत्तिनिरोधः" (1.2), the compound चित्त-वृत्ति-निरोधः is a:',
                lines: [
                  'A. Dvandva ("mind and fluctuations and cessation")',
                  'B. Ṣaṣṭhī-Tatpuruṣa ("the cessation of the fluctuations of the mind")  ✓ CORRECT',
                  'C. Avyayībhāva adverb',
                  'D. Finite verb',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    number: 15,
    title: 'Chapter 15 — Nāṭyaśāstra Drama & Alaṅkāra-Kāvya / नाट्यशास्त्रं महाकाव्यञ्च',
    subtitle: 'Bharata’s Rasa Theory, Navarasas, Ānandavardhana’s Dhvani & Classical Drama',
    units: [
      {
        number: 52,
        title: 'Unit 52 — Rasa-Sūtra & Navarasa / रससिद्धान्तः',
        subtitle: 'Bharata Muni’s Nāṭyaśāstra & the 9 Aesthetic Flavors',
        lessons: [
          {
            number: '15.1',
            title: 'Lesson 15.1 — The Rasa-Sūtra & the 9 Rasas with their Sthāyibhāvas',
            subtitle: 'विभावानुभावव्यभिचारिसंयोगाद् रसनिष्पत्तिः',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'The Foundation of Indian Aesthetics (नाट्यशास्त्रम् ६.३१):',
                lines: [
                  'Bharata’s Rasa-Sūtra: "विभावानुभावव्यभिचारिसंयोगाद् रसनिष्पत्तिः" — Aesthetic flavor (रस) arises from the union of determinants (विभाव), consequents/expressions (अनुभाव), and transitory states (व्यभिचारिभाव).',
                  'The 9 Rasas (नवरसाः) and their Permanent Emotions (स्थायीभावाः):',
                  '1. शृङ्गारः (Love/Beauty) ← रतिः · 2. हास्यः (Comic) ← हासः · 3. करुणः (Compassion/Pathos) ← शोकः',
                  '4. रौद्रः (Fury) ← क्रोधः · 5. वीरः (Heroic) ← उत्साहः · 6. भयानकः (Terror) ← भयम्',
                  '7. बीभत्सः (Odious) ← जुगुप्सा · 8. अद्भुतः (Wonder) ← विस्मयः · 9. शान्तः (Peace) ← शमः / निर्वेदः.',
                ],
              },
              {
                title: 'EXERCISE 2 · MATCH THE PAIRS',
                heading: 'Prompt: Match each aesthetic Rasa to its underlying Sthāyibhāva:',
                lines: [
                  '• शृङ्गारः (Śṛṅgāra — Romantic/Beauty) → रतिः (Rati — Love/Delight)',
                  '• वीरः (Vīra — Heroic) → उत्साहः (Utsāha — Dynamic Energy)',
                  '• करुणः (Karuṇa — Pathos/Compassion) → शोकः (Śoka — Sorrow)',
                  '• अद्भुतः (Adbhuta — Wonder) → विस्मयः (Vismaya — Astonishment)',
                ],
              },
            ],
          },
        ],
      },
      {
        number: 53,
        title: 'Unit 53 — Dhvani & Śabda-Śakti / ध्वनिः शब्दशक्तिश्च',
        subtitle: 'Abhidhā, Lakṣaṇā, Vyañjanā & Ānandavardhana’s Dhvanyāloka',
        lessons: [
          {
            number: '15.2',
            title: 'Lesson 15.2 — Three Powers of a Word & "काव्यस्यात्मा ध्वनिः"',
            subtitle: 'Literal (अभिधा), Figurative (लक्षणा) & Suggestive Resonance (व्यञ्जना / ध्वनि)',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'How Sanskrit Poetics Analyzes Literal, Metaphorical & Suggested Meaning:',
                lines: [
                  '1. अभिधा (Abhidhā — Denotation): Primary dictionary meaning (e.g., गङ्गा = the river Ganges).',
                  '2. लक्षणा (Lakṣaṇā — Indication/Metonymy): Secondary meaning triggered when literal meaning is incompatible. Classic example: "गङ्गायां घोषः" ("The cowherd hamlet is ON the Ganges" → means on the bank of the Ganges).',
                  '3. व्यञ्जना (Vyañjanā — Suggestion): Conveys coolness (शीतलत्वम्) and sacred purity (पावनत्वम्).',
                  'Dhvanyāloka 1.1 (Ānandavardhana): "काव्यस्यात्मा ध्वनिः" — "Suggestion (Dhvani) is the very soul of poetry."',
                ],
              },
              {
                title: 'EXERCISE 2 · QUIZ — MULTIPLE CHOICE',
                heading: 'Question: In "गङ्गायां घोषः" ("A hamlet on the Ganges"), reading "on the Ganges" as "on the bank of the Ganges" is which śabda-śakti?',
                lines: [
                  'A. अभिधा (Literal denotation)',
                  'B. लक्षणा (Secondary indication)  ✓ CORRECT',
                  'C. छन्दस् (Prosody)',
                  'D. सन्धि (Sound junction)',
                ],
              },
            ],
          },
        ],
      },
      {
        number: 54,
        title: 'Unit 54 — Mahākāvya & Rūpaka / पञ्चमहाकाव्यानि रूपकञ्च',
        subtitle: 'The Five Great Court Epics & Sanskrit Theatrical Architecture',
        lessons: [
          {
            number: '15.3',
            title: 'Lesson 15.3 — The Pañca-Mahākāvyas (Kālidāsa, Bhāravi, Māgha, Śrīharṣa)',
            subtitle: 'रघुवंशम्, कुमारसम्भवम्, किरातार्जुनीयम्, शिशुपालवधम्, नैषधीयचरितम्',
            exercises: [
              {
                title: 'EXERCISE 1 · MATCH THE PAIRS',
                heading: 'Prompt: Match each of the Five Great Mahākāvyas to its poet:',
                lines: [
                  '• रघुवंशम् & कुमारसम्भवम् → कालिदासः (Kālidāsa — Master of Upamā)',
                  '• किरातार्जुनीयम् → भारविः (Bhāravi — Master of Artha-gaurava)',
                  '• शिशुपालवधम् → माघः (Māgha — Master of all three qualities)',
                  '• नैषधीयचरितम् → श्रीहर्षः (Śrīharṣa — नैषधं विद्वदौषधम्)',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    number: 16,
    title: 'Chapter 16 — Āyurveda, Astronomy & Scientific Śāstras / विज्ञानशास्त्राणि',
    subtitle: 'Caraka/Suśruta Āyurveda, Āryabhaṭa’s Mathematics/Astronomy & Kauṭilya’s Arthaśāstra',
    units: [
      {
        number: 55,
        title: 'Unit 55 — Āyurveda / आयुर्वेदः',
        subtitle: 'Tridoṣa Theory (वात-पित्त-कफ) & Suśruta’s Definition of Health (स्वस्थः)',
        lessons: [
          {
            number: '16.1',
            title: 'Lesson 16.1 — Parsing Suśruta Saṃhitā 15.41 & Vāgbhaṭa’s Aṣṭāṅga-Hṛdaya',
            subtitle: 'समदोषः समाग्निश्च समधातुमलक्रियः । प्रसन्नात्मेन्द्रियमनाः स्वस्थ इत्यभिधीयते ॥',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'Etymology of Āyurveda & Suśruta’s Holistic Definition of Health:',
                lines: [
                  'आयुर्वेदः = आयुस् (life/vitality) + वेदः (science/knowledge). The वृद्धत्रयी (Three Great Classics) are चरकसंहिता, सुश्रुतसंहिता, and अष्टाङ्गहृदयम्.',
                  'The Three Doṣas (त्रिदोषाः): वायुः/वातः (Kinetic/Nervous) · पित्तम् (Metabolic/Thermal) · कफः/श्लेष्मा (Structural/Cohesive).',
                  'Suśruta Saṃhitā (Sūtrasthāna 15.41) Definition of स्वस्थ (Svastha — "established in oneself"):',
                  '"समदोषः समाग्निश्च समधातुमलक्रियः । प्रसन्नात्मेन्द्रियमनाः स्वस्थ इत्यभिधीयते ॥"',
                  '• सम-दोषः (balanced three doṣas) + सम-अग्निः (balanced digestive fire) + सम-धातु-मल-क्रियः (balanced 7 tissues & elimination) + प्रसन्न-आत्म-इन्द्रिय-मनाः (serene soul, senses, and mind) = स्वस्थः.',
                ],
              },
              {
                title: 'EXERCISE 2 · MATCH THE PAIRS',
                heading: 'Prompt: Match each Sanskrit medical term from Suśruta 15.41:',
                lines: [
                  '• स्वस्थः (स्व + स्थ) → Healthy (literally: abiding in oneself)',
                  '• समदोषः (Sama-doṣaḥ) → Having balanced Vāta, Pitta, and Kapha',
                  '• समाग्निः (Samāgniḥ) → Having balanced metabolic/digestive fire',
                  '• प्रसन्नात्मेन्द्रियमनाः → Whose soul, senses, and mind are serene',
                ],
              },
            ],
          },
        ],
      },
      {
        number: 56,
        title: 'Unit 56 — Gaṇita & Jyotiṣa / गणित-ज्योतिषशास्त्रम्',
        subtitle: 'Śulbasūtras, Āryabhaṭīya, Sūrya-Siddhānta & Kaṭapayādi / Bhūtasaṃkhyā Coding',
        lessons: [
          {
            number: '16.2',
            title: 'Lesson 16.2 — Baudhāyana’s Theorem, Āryabhaṭa’s Value of π & Encoding Numbers in Verse',
            subtitle: 'चतुरधिकं शतमष्टगुणं द्वाषष्टिस्तथा सहस्राणाम् (π ≈ 3.1416)',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'How Sanskrit Mathematicians Expressed Theorems & High-Precision Constants in Meter:',
                lines: [
                  '1. Baudhāyana Śulbasūtra (1.12 · ~800 BCE — Pythagorean Theorem): "दीर्घचतुरस्रस्याक्ष्णया रज्जुः पार्श्वमानी तिर्यङ्मानी च यत्पृथग्भूते कुरुतस्तदुभयं करोति"',
                  '2. Āryabhaṭīya (Gaṇitapāda 10 · 499 CE — Value of π): "चतुरधिकं शतमष्टगुणं द्वाषष्टिस्तथा सहस्राणाम् । अयुतद्वयविष्कम्भस्यासन्नो वृत्तपरिणाहः ॥"',
                  '• Calculation: ((100 + 4) × 8) + 62,000 = 62,832 circumference for diameter 20,000 (अयुतद्वय). Thus π = 62,832 / 20,000 = 3.1416 — marked आसन्नः ("approximate/irrational").',
                  '3. Bhūtasaṃkhyā System: शून्य/ख = 0, चन्द्र/भूमि = 1, नेत्र/अश्विन् = 2, अग्नि/गुण = 3, वेद/युग = 4, भूत/बाण = 5, रस = 6, ऋषि = 7, वसु = 8, ग्रह = 9.',
                ],
              },
              {
                title: 'EXERCISE 2 · MATCH THE PAIRS',
                heading: 'Prompt: Decode each poetic Bhūtasaṃkhyā word into the digit it represents:',
                lines: [
                  '• ख / आकाश / शून्य (Sky/Void) → 0 (Zero)',
                  '• चन्द्र / इन्दु / पृथ्वी (Moon/Earth) → 1 (One)',
                  '• नेत्र / पक्ष / अश्विन् (Eyes/Wings) → 2 (Two)',
                  '• वेद / समुद्र / युग (Vedas/Oceans) → 4 (Four)',
                ],
              },
            ],
          },
        ],
      },
      {
        number: 57,
        title: 'Unit 57 — Arthaśāstra & Nīti / अर्थशास्त्रं नीतिश्च',
        subtitle: 'Kauṭilya’s Saptāṅga State Theory & Governance Maxims',
        lessons: [
          {
            number: '16.3',
            title: 'Lesson 16.3 — Kauṭilya’s Arthaśāstra: प्रजासुखे सुखं राज्ञः',
            subtitle: 'स्वाम्यमात्यजनपददुर्गकोशदण्डमित्राणि प्रकृतयः (6.1.1)',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'The 7 Limbs of a Sovereign State & Welfare Governance:',
                lines: [
                  'Kauṭilya’s Arthaśāstra (1.19.34): "प्रजासुखे सुखं राज्ञः प्रजानां च हिते हितम् । नात्मप्रियं हितं राज्ञः प्रजानां तु प्रियं हितम् ॥"',
                  '• "In the happiness of the citizens lies the ruler’s happiness; in their welfare lies his welfare."',
                  'Saptāṅga Theory (6.1.1): 1. स्वामी (Sovereign) · 2. अमात्यः (Ministers) · 3. जनपदः (Territory & People) · 4. दुर्गम् (Fortified Infrastructure) · 5. कोशः (Treasury) · 6. दण्डः (Defense & Justice) · 7. मित्रम् (Allies).',
                ],
              },
              {
                title: 'EXERCISE 2 · QUIZ — MULTIPLE CHOICE',
                heading: 'Question: In Kauṭilya’s Saptāṅga theory, "कोशः" (Kośaḥ) refers to:',
                lines: [
                  'A. Fortress (दुर्गम्)',
                  'B. The Treasury / Economic Reserve (कोशः)  ✓ CORRECT',
                  'C. Foreign Allies (मित्रम्)',
                  'D. Territory (जनपदः)',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    number: 17,
    title: 'Chapter 17 — Pāṇinian Dhātupāṭha & Gaṇapāṭha Mastery / धातुपाठः गणपाठश्च',
    subtitle: 'The 10 Daśagaṇī Verb Classes, 2,000 Root Catalogue, Gaṇapāṭha Lists & Prakriyā Derivation',
    units: [
      {
        number: 58,
        title: 'Unit 58 — The 10 Verb Classes / दशगणी (विकरणप्रत्ययाः)',
        subtitle: 'Bhvādi (1) to Curādi (10) — How Vikaraṇa Affixes Build Every Present Stem',
        lessons: [
          {
            number: '17.1',
            title: 'Lesson 17.1 — Mastering All 10 Gaṇas & Their Vikaraṇa Sūtras (3.1.68–3.1.81)',
            subtitle: 'शप्, लुक्, श्लु, श्यन्, श्नु, श, श्नम्, उ, श्ना, णिच्',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'How Pāṇini Classifies ~2,000 Verb Roots into 10 Present-Stem Classes:',
                lines: [
                  '1. भ्वादिः (Class 1 · शप् = अ, Guṇa): √भू → भवति, √पठ् → पठति (कर्तरि शप् 3.1.68).',
                  '2. अदादिः (Class 2 · शपो लुक् = Zero): √अस् → अस्ति, √अद् → अत्ति (अदिप्रभृतिभ्यः शपः 2.4.72).',
                  '3. जुहोत्यादिः (Class 3 · श्लु = Reduplication): √हु → जुहोति, √दा → ददाति (जुहोत्यादिभ्यः श्लुः 2.4.75).',
                  '4. दिवादिः (Class 4 · श्यन् = य, no Guṇa): √नृत् → नृत्यति, √दिव् → दीव्यति (दिवादिभ्यः श्यन् 3.1.69).',
                  '5. स्वादिः (Class 5 · श्नु = नु/नो): √श्रु → शृणोति, √आप् → आप्नोति (स्वादिभ्यः श्नुः 3.1.73).',
                  '6. तुदादिः (Class 6 · श = अ, blocks Guṇa): √लिख् → लिखति, √तुद् → तुदति (तुदादिभ्यः शः 3.1.77).',
                  '7. रुधादिः (Class 7 · श्नम् = न/न् infix): √रुध् → रुणद्धि, √भिद् → भिनत्ति (रुधादिभ्यः श्नम् 3.1.78).',
                  '8. तनादिः (Class 8 · उ = उ/ओ): √कृ → करोति, √तन् → तनोति (तनादिकृञ्भ्यः उः 3.1.79).',
                  '9. क्र्यादिः (Class 9 · श्ना = ना/नी): √ज्ञा → जानाति, √क्री → क्रीणाति (क्र्यादिभ्यः श्ना 3.1.81).',
                  '10. चुरादिः (Class 10 · णिच् + शप् = अय): √चुर् → चोरयति, √चिन्त् → चिन्तयति.',
                ],
              },
              {
                title: 'EXERCISE 2 · MATCH THE PAIRS',
                heading: 'Prompt: Match each conjugated verb to its Dhātupāṭha class and vikaraṇa suffix:',
                lines: [
                  '• भवति (√भू · Class 1 भ्वादि) → शप् (अ with Guṇa)',
                  '• अस्ति (√अस् · Class 2 अदादि) → शपो लुक् (Zero affix — direct attachment)',
                  '• शृणोति (√श्रु · Class 5 स्वादि) → श्नु (नु / नो affix)',
                  '• जानाति (√ज्ञा · Class 9 क्र्यादि) → श्ना (ना / नी affix)',
                ],
              },
              {
                title: 'EXERCISE 3 · QUIZ — MULTIPLE CHOICE',
                heading: 'Question: Why does √लिख् (Class 6, श) form लिखति instead of *लेखति?',
                lines: [
                  'A. Because इ cannot take Guṇa',
                  'B. Because श lacks the प्-इत् marker; by सार्वधातुकमपित् (1.2.4) it acts as ङ्-इत् and blocks Guṇa  ✓ CORRECT',
                  'C. Because लिखति is past tense',
                  'D. Because लिख् is a noun',
                ],
              },
            ],
          },
        ],
      },
      {
        number: 59,
        title: 'Unit 59 — Dhātupāṭha & Gaṇapāṭha Architecture',
        subtitle: 'Upadeśa Root Encodings (डुकृञ्, षुञ्) & Lexical Word-Lists (सर्वादिगणः, स्वरादिगणः)',
        lessons: [
          {
            number: '17.2',
            title: 'Lesson 17.2 — Decoding "डुकृञ् करणे" & How Gaṇapāṭha Powers the Ashtadhyayi',
            subtitle: 'Why Pāṇini wrote 3 companion databases: माहेश्वरसूत्राणि, धातुपाठः, गणपाठः',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'How Pāṇini’s Root & Lexical Databases Plug Into the Sūtras:',
                lines: [
                  '• "भू सत्तायाम्" (1.1) = Root √भू in the sense of "being/existence" (सत्तायाम्).',
                  '• "डुकृञ् करणे" (8.10) = Root √कृ ("doing"). Prefix डु-इत् marks -मप (कृत्रिम); suffix ञ्-इत् marks उभयपदी (करोति & कुरुते, by 1.3.72).',
                  '• सर्वादीनि सर्वनामानि (1.1.27): Points to the 35-word सर्वादि list in Gaṇapāṭha (सर्व, विश्व, उभ, इतर, तत्, यत्, किम्...).',
                  '• स्वरादिनिपातमव्ययम् (1.1.37): Points to the स्वरादि list of indeclinables.',
                ],
              },
              {
                title: 'EXERCISE 2 · MATCH THE PAIRS',
                heading: 'Prompt: Match each metalinguistic encoding to its grammatical effect:',
                lines: [
                  '• ञ्-इत् on a root (e.g., डुकृञ्) → Ubhayapadī (both Parasmaipada & Ātmanepada)',
                  '• ङित् / अनुदात्तेत् on a root (e.g., लभ्) → Ātmanepadī only (1.3.12)',
                  '• सर्वादिगणः (1.1.27) → 35 pronominal stems declining like सर्व',
                  '• स्वरादिगणः (1.1.37) → Lexical list of pure indeclinables (अव्ययानि)',
                ],
              },
            ],
          },
        ],
      },
      {
        number: 60,
        title: 'Unit 60 — Complete Prakriyā / रूपसिद्धि-प्रक्रिया',
        subtitle: 'Step-by-Step Sūtra-by-Sūtra Derivations of भवति, रामः & देवालयः',
        lessons: [
          {
            number: '17.3',
            title: 'Lesson 17.3 — Executing Pāṇini’s Compiler Step-by-Step',
            subtitle: 'From √भू + लट् to भवति · From राम + सुँ to रामः',
            exercises: [
              {
                title: 'EXERCISE 1 · INFO CARD',
                heading: 'How the Ashtadhyayi Derives Words Like a Deterministic State Machine:',
                lines: [
                  'DERIVATION 1: √भू → भवति ("he is")',
                  '• Step 1: भू (1.3.1) + लट् (वर्तमाने लट् 3.2.123) → भू + ल्.',
                  '• Step 2: Replace ल् with 3rd sg active ending तिप् (3.4.78) → भू + ति.',
                  '• Step 3: Insert class-1 vikaraṇa शप् before sārvadhātuka ति (कर्तरि शप् 3.1.68) → भू + अ + ति.',
                  '• Step 4: Apply Guṇa to ऊ before शप् (सार्वधातुकार्धधातुकयोः 7.3.84) → भो + अ + ति.',
                  '• Step 5: Apply Ayādi-sandhi ओ → अव् before अ (एचोऽयवायावः 6.1.78) → भव् + अ + ति = भवति ✓',
                  'DERIVATION 2: राम → रामः (1st case sg)',
                  '• राम (1.2.45) + सुँ (4.1.2) → राम + स् → राम + रुँ (ससजुषो रुः 8.2.66) → रामः (खरवसानयोर्विसर्जनीयः 8.3.15) ✓',
                ],
              },
              {
                title: 'EXERCISE 2 · QUIZ — MULTIPLE CHOICE',
                heading: 'Question: In deriving भवति from भो + अ + ति, which Pāṇinian sūtra converts ओ + अ into अव् + अ?',
                lines: [
                  'A. इको यणचि (6.1.77)',
                  'B. एचोऽयवायावः (6.1.78 — ए/ओ/ऐ/औ become अय्/अव्/आय्/आव् before a vowel)  ✓ CORRECT',
                  'C. आद्गुणः (6.1.87)',
                  'D. अदर्शनं लोपः (1.1.60)',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

async function generateAndMergePdf() {
  await new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 64, bottom: 64, left: 60, right: 60 },
      bufferPages: true,
    });

    const stream = fs.createWriteStream(APPEND_TEMP_PDF);
    doc.pipe(stream);

    doc.registerFont('DevaReg', FONT_DEVA_REG);
    doc.registerFont('DevaBold', FONT_DEVA_BOLD);

    // Page 1 of Appendix: Expanded Table of Contents for Chapters 13-17
    doc.font('DevaBold').fontSize(16).fillColor('#111827').text('Expanded Curriculum — Chapters 13 to 17 (Units 46–60)', { align: 'left' });
    doc.moveDown(0.3);
    doc.font('DevaReg').fontSize(10.5).fillColor('#4B5563').text('Researched & Added Advanced Scholarly Modules: Vedic Sanskrit, Darśana, Nāṭyaśāstra, Vijñāna-Śāstras & Pāṇinian Dhātupāṭha/Gaṇapāṭha');
    doc.moveDown(1);

    for (const ch of NEW_CHAPTERS) {
      doc.font('DevaBold').fontSize(11.5).fillColor('#111827').text(ch.title);
      for (const u of ch.units) {
        doc.font('DevaReg').fontSize(10).fillColor('#374151').text(`    ${u.title} — ${u.subtitle}`);
      }
      doc.moveDown(0.5);
    }

    // Render each new Chapter (13-17)
    for (const ch of NEW_CHAPTERS) {
      doc.addPage();
      doc.font('DevaBold').fontSize(14).fillColor('#111827').text(ch.title);
      doc.moveDown(0.2);
      doc.font('DevaReg').fontSize(11).fillColor('#4B5563').text(ch.subtitle);
      doc.moveDown(0.8);

      for (const u of ch.units) {
        if (doc.y > 670) doc.addPage();
        doc.font('DevaBold').fontSize(12.5).fillColor('#111827').text(u.title);
        doc.font('DevaReg').fontSize(10).fillColor('#6B7280').text(u.subtitle);
        doc.moveDown(0.6);

        for (const les of u.lessons) {
          if (doc.y > 680) doc.addPage();
          doc.font('DevaBold').fontSize(11).fillColor('#111827').text(les.title);
          doc.font('DevaReg').fontSize(9.5).fillColor('#6B7280').text(les.subtitle);
          doc.moveDown(0.5);

          for (const ex of les.exercises) {
            if (doc.y > 660) doc.addPage();
            // Subtle rule line
            doc.moveTo(60, doc.y).lineTo(535, doc.y).strokeColor('#E5E7EB').lineWidth(0.75).stroke();
            doc.moveDown(0.4);

            doc.font('DevaBold').fontSize(9.5).fillColor('#92400E').text(ex.title);
            doc.moveDown(0.2);
            doc.font('DevaBold').fontSize(10).fillColor('#111827').text(ex.heading);
            doc.moveDown(0.25);

            for (const line of ex.lines) {
              if (doc.y > 720) doc.addPage();
              const isCorrect = line.includes('✓ CORRECT');
              doc.font(isCorrect ? 'DevaBold' : 'DevaReg')
                .fontSize(9.5)
                .fillColor(isCorrect ? '#065F46' : '#1F2937')
                .text(line, { indent: 8, lineGap: 2 });
            }
            doc.moveDown(0.6);
          }
        }
      }
    }

    // Add headers and page footers to all appended pages
    const range = doc.bufferedPageRange();
    const totalCombinedPages = 137 + range.count;
    for (let i = range.start; i < range.start + range.count; i++) {
      doc.switchToPage(i);
      const pageNum = 138 + i;
      doc.font('DevaReg').fontSize(8.5).fillColor('#6B7280').text(
        'Sanskritam — Complete Curriculum (Expanded 17-Chapter Edition)',
        60,
        32,
        { align: 'right', width: 475, lineBreak: false }
      );
      doc.font('DevaReg').fontSize(8.5).fillColor('#6B7280').text(
        `Page ${pageNum} of ${totalCombinedPages}`,
        60,
        785,
        { align: 'center', width: 475, lineBreak: false }
      );
    }

    doc.end();
    stream.on('finish', resolve);
    stream.on('error', reject);
  });

  // Merge original 137 pages + newly generated pages using pdf-lib
  const origBytes = fs.readFileSync(BACKUP_PDF);
  const appendBytes = fs.readFileSync(APPEND_TEMP_PDF);

  const mergedPdf = await PdfLibDoc.load(origBytes);
  const appendPdf = await PdfLibDoc.load(appendBytes);

  const copiedPages = await mergedPdf.copyPages(appendPdf, appendPdf.getPageIndices());
  for (const page of copiedPages) {
    mergedPdf.addPage(page);
  }

  mergedPdf.setTitle('Sanskritam — Complete Curriculum (17 Chapters · 60 Units)');
  mergedPdf.setSubject('Complete Sanskrit Curriculum from Varnamala to Panini, Vedic Sanskrit, Darshana, Natyashastra, Scientific Shastras & Dhatupatha');

  const finalBytes = await mergedPdf.save();
  fs.writeFileSync(ROOT_PDF, finalBytes);
  fs.writeFileSync(PUBLIC_PDF, finalBytes);
  console.log(`Successfully updated ${ROOT_PDF} and ${PUBLIC_PDF}. Total pages: ${mergedPdf.getPageCount()}`);
}

generateAndMergePdf().catch((err) => {
  console.error(err);
  process.exit(1);
});

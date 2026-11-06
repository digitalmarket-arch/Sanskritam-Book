// ─────────────────────────────────────────────────────────────
//  GENERATED FILE — do not edit by hand.
//  Copied verbatim from digitalmarket-arch/SanskritamApp
//  src/data/curriculum.ts @ 6622cf8a59d5b70411b3b5b3ea4246800777ff81 (origin/claude/vibrant-lamport-avspmz)
//  Fix mistakes in the app, then re-run: node scripts/syncFromApp.mjs
// ─────────────────────────────────────────────────────────────
// Exercise types
export type ExerciseType =
  | 'dhyan' | 'letter_card' | 'shruti' | 'multi'
  | 'smriti' | 'match' | 'listen_pick' | 'krama'
  | 'sequence' | 'info';

export interface WordExample {
  s: string;  // Sanskrit
  p: string;  // Phonetic
  m: string;  // Meaning
}

export interface Exercise {
  type: ExerciseType;
  text?: string; duration?: number;
  letter?: string; phonetic?: string; phHi?: string;
  meaning?: string; meaningNote?: string;
  deity?: string; deityNote?: string;
  place?: string; placeNote?: string;
  words?: WordExample[];
  q?: string; options?: string[]; answer?: number | string;
  audio?: string; preText?: string; revealText?: string;
  showText?: string; showTime?: number;
  pairs?: [string, string][];
  prompt?: string; tiles?: string[];
  title?: string; sequence?: string[]; items?: string[];
}

export interface Lesson {
  id: string; title: string; icon: string; desc: string; ex: Exercise[];
}

export interface Unit {
  u: number; title: string; sub: string; icon: string; color: string; lessons: Lesson[];
}

export interface Section {
  section: string; sIcon: string; sColor: string; sDesc: string; units: Unit[];
}

// ══════════════════════════════════════════════════════════════
//  FULL CURRICULUM — 30+ lessons across 6 sections
// ══════════════════════════════════════════════════════════════

export const DATA: Section[] = [

// ═══════════════════════════════════════════════════
// SECTION 1: VOWELS (स्वर)
// ═══════════════════════════════════════════════════
{
  section: 'Vowels / स्वर',
  sIcon: '\uD83D\uDD49\uFE0F',
  sColor: '#F59E0B',
  sDesc: '13 vowels — the soul of Sanskrit / स्वर — संस्कृत की आत्मा',
  units: [
    // ─── Unit 1: अ & आ ───
    {
      u: 1, title: 'अ & आ (a & aa)', sub: 'Vishnu & Saraswati', icon: '\u2728', color: '#F59E0B',
      lessons: [
        {
          id: '1.1', title: 'अ (a) — The First Sound', icon: '\u2728',
          desc: 'Vishnu / विष्णु — origin of all / सृष्टि का आदि',
          ex: [
            { type: 'dhyan', text: '\uD83E\uDDD8 ध्यान (Dhyaan) — Prepare Your Mind / मन तैयार करें\n\nTake 3 deep breaths. / ३ गहरी श्वास लें।\n\nIn the ancient गुरुकुल (Gurukul), every lesson began with meditation.\nप्राचीन गुरुकुल में हर पाठ ध्यान से आरम्भ होता था।\n\nA still mind absorbs like a still lake reflects perfectly.\nशान्त मन, स्थिर सरोवर की भाँति, पूर्ण रूप से अवशोषित करता है।', duration: 6 },
            { type: 'letter_card', letter: 'अ', phonetic: "uh (as in 'up')", phHi: "जैसे 'अब' में",
              meaning: 'Beginning, Creation, Knowledge / आदि, सृष्टि, ज्ञान',
              meaningNote: 'Every Sanskrit consonant secretly carries अ — it is the inherent vowel, the seed of all speech. Every word begins from it.',
              deity: 'विष्णु (Vishnu) — Preserver / पालनकर्ता',
              deityNote: 'In the Gita (10.33), Krishna says "अक्षराणाम् अकारोऽस्मि" — "Among letters, I am अ". Just as Vishnu pervades all existence, अ pervades all language.',
              place: 'Throat / कण्ठ (Kantha) — deepest point',
              placeNote: 'Produced from the deepest part of the vocal tract with the tongue at rest. This is why it is the most natural and primordial human sound.',
              words: [{ s: 'अमृत', p: 'Amrit', m: 'Nectar' }, { s: 'अग्नि', p: 'Agni', m: 'Fire' }, { s: 'अर्थ', p: 'Arth', m: 'Meaning' }] },
            { type: 'shruti', preText: '\uD83D\uDC42 श्रुति (Shruti) — Listen first, then answer\nपहले सुनें, फिर उत्तर दें\n\n\u266A Tap the play button to hear अ (a)', audio: 'अ', revealText: "अ (a) is the FIRST and MOST SACRED letter!\nसंस्कृत का प्रथम और सबसे पवित्र अक्षर!\n\nKrishna says in Gita:\n'अक्षराणाम् अकारोऽस्मि'\n= Among letters, I am अ", q: 'अ (a) represents which deity?', options: ['शिव (Shiva)', 'विष्णु (Vishnu)', 'ब्रह्मा (Brahma)', 'इन्द्र (Indra)'], answer: 1 },
            { type: 'multi', q: 'Where is अ (a) produced? / अ कहाँ बनता है?', options: ['Lips / ओष्ठ', 'Teeth / दन्त', 'Palate / तालु', 'Throat / कण्ठ'], answer: 3, audio: 'अ' },
            { type: 'smriti', showText: '\uD83D\uDCF8 Memorize:\n\n\u2728 अ (a) = विष्णु (Vishnu)\n\uD83D\uDCCD Throat / कण्ठ\n\uD83D\uDCA1 Beginning / आदि\n\uD83D\uDCD6 Gita: अक्षराणाम् अकारोऽस्मि', showTime: 7, q: '\uD83E\uDDE0 अ (a) means?', options: ['End / अन्त', 'Love / प्रेम', 'Beginning / आदि', 'Fire / अग्नि'], answer: 2 },
          ],
        },
        {
          id: '1.2', title: 'आ (aa) — Expansion', icon: '\uD83C\uDF1F',
          desc: 'Saraswati / सरस्वती — wisdom / ज्ञान',
          ex: [
            { type: 'letter_card', letter: 'आ', phonetic: "aa (as in 'father')", phHi: "जैसे 'आम' में",
              meaning: 'Expansion, Abundance / विस्तार, प्रचुरता',
              meaningNote: 'आ is the long form of अ — the seed sound stretched into fullness. Words like आत्मा (soul) and आकाश (sky) carry this sense of unfolding vastness.',
              deity: 'सरस्वती (Saraswati) — traditional mnemonic / विद्या की देवी',
              deityNote: 'Saraswati flows like a river — knowledge that expands and nourishes. आ embodies that flowing, ever-widening quality of true understanding.',
              place: 'Throat / कण्ठ — held 2× longer than अ',
              placeNote: 'Same articulation point as अ but sustained twice as long. In Sanskrit, vowel length is a real distinction — दीर्घ (long) carries more weight than ह्रस्व (short).',
              words: [{ s: 'आत्मा', p: 'Aatmaa', m: 'Soul' }, { s: 'आकाश', p: 'Aakaash', m: 'Sky' }, { s: 'आनन्द', p: 'Aanand', m: 'Bliss' }] },
            { type: 'multi', q: 'आ (aa) is the ___ form of अ (a):', options: ['Short / ह्रस्व', 'Long / दीर्घ', 'Nasal / अनुनासिक', 'Combined / संयुक्त'], answer: 1, audio: 'आ' },
            { type: 'match', q: 'Match आ words:', pairs: [['आत्मा (Aatmaa)', 'Soul \uD83D\uDD4A\uFE0F'], ['आकाश (Aakaash)', 'Sky \u2601\uFE0F'], ['आनन्द (Aanand)', 'Bliss \uD83D\uDE0A'], ['आचार्य (Aachaarya)', 'Teacher \uD83C\uDF93']] },
            { type: 'listen_pick', prompt: "\u266A Which word is 'Soul'?", audio: 'आत्मा', answer: 'आत्मा (Aatmaa) = Soul', tiles: ['आकाश (Aakaash) = Sky', 'आत्मा (Aatmaa) = Soul', 'आनन्द (Aanand) = Bliss', 'आचार्य (Aachaarya) = Teacher'] },
            { type: 'krama', title: '\uD83D\uDCFF क्रम-पाठ — First 2 vowels:', sequence: ['अ (a) = विष्णु / Beginning', 'आ (aa) = सरस्वती / Expansion'], q: 'Pattern: Short \u2192 Long. Which pair?', options: ['अ \u2192 आ (a \u2192 aa)', 'इ \u2192 उ (i \u2192 u)', 'ए \u2192 ओ (e \u2192 o)', 'क \u2192 ख (ka \u2192 kha)'], answer: 0 },
          ],
        },
      ],
    },
    // ─── Unit 2: इ ई उ ऊ ───
    {
      u: 2, title: 'इ ई उ ऊ (i ee u oo)', sub: 'Love & Power / प्रेम एवं शक्ति', icon: '\uD83D\uDC95', color: '#EC4899',
      lessons: [
        {
          id: '1.3', title: 'इ & ई — Love & Joy', icon: '\uD83D\uDC95',
          desc: 'Kamadeva & Lakshmi / कामदेव एवं लक्ष्मी',
          ex: [
            { type: 'letter_card', letter: 'इ', phonetic: "i (as in 'it')", phHi: "जैसे 'इधर' में",
              meaning: 'Love, Desire / प्रेम, इच्छा',
              meaningNote: 'इ is the bright sound of yearning — found in words like इच्छा (desire) and इष्ट (beloved). The tongue rises eagerly toward the palate.',
              deity: 'कामदेव (Kaamadeva) — God of Love 💘 (traditional mnemonic)',
              deityNote: 'Kaamadeva, the divine archer of love, governs all longing and desire. The forward-reaching motion of इ mirrors his arrows that draw hearts together.',
              place: 'Palate / तालु (Taalu)',
              placeNote: 'Produced when the front of the tongue rises close to the hard palate. This is why इ feels brighter and more focused than the open अ.',
              words: [{ s: 'इन्द्र', p: 'Indra', m: 'King of Gods' }, { s: 'इच्छा', p: 'Icchaa', m: 'Desire' }] },
            { type: 'letter_card', letter: 'ई', phonetic: "ee (as in 'see')", phHi: "जैसे 'ईश्वर' में",
              meaning: 'Joy, Prosperity / आनन्द, समृद्धि',
              meaningNote: 'ई is इ stretched into stable abundance. Words like ईश्वर (Lord) and ईशा (ruler) hold this sustained, confident brilliance.',
              deity: 'लक्ष्मी (Lakshmi) — Goddess of Wealth 💰 (traditional mnemonic)',
              deityNote: 'Lakshmi represents wealth that endures — material and spiritual. ई carries that same quality of prosperity made stable through extension.',
              place: 'Palate / तालु — held 2× longer',
              placeNote: 'Same palatal position as इ but held with steady duration. The longer hold gives ई its quality of established, lasting brightness.',
              words: [{ s: 'ईश्वर', p: 'Eeshvar', m: 'God' }, { s: 'ईर्ष्या', p: 'Eershyaa', m: 'Jealousy' }] },
            { type: 'multi', q: 'इ (i) is produced at?', options: ['Throat / कण्ठ', 'Palate / तालु', 'Teeth / दन्त', 'Lips / ओष्ठ'], answer: 1, audio: 'इ' },
            { type: 'match', q: 'Match:', pairs: [['इन्द्र (Indra)', 'King of Gods \uD83D\uDC51'], ['ईश्वर (Eeshvar)', 'God \uD83D\uDE4F'], ['इच्छा (Icchaa)', 'Desire \uD83D\uDCAB'], ['ईर्ष्या (Eershyaa)', 'Jealousy']] },
            { type: 'sequence', title: 'All vowels so far:', items: ['अ (a)', 'आ (aa)', 'इ (i)', 'ई (ee)'], audio: 'अ आ इ ई' },
          ],
        },
        {
          id: '1.4', title: 'उ & ऊ — Power & Energy', icon: '\uD83D\uDD31',
          desc: 'Shiva & Parvati / शिव एवं पार्वती',
          ex: [
            { type: 'dhyan', text: '\uD83E\uDDD8 Round your lips / होंठ गोल करें\n\nThe vowels उ (u) and ऊ (oo) need rounded lips.\nFeel the difference from throat अ (a) to lips उ (u).\n\nकण्ठ के अ से ओष्ठ के उ तक का अन्तर अनुभव करें।', duration: 5 },
            { type: 'letter_card', letter: 'उ', phonetic: "u (as in 'put')", phHi: "जैसे 'उल्लू' में",
              meaning: 'Protection, Transformation / रक्षा, परिवर्तन',
              meaningNote: 'उ is the second letter of the sacred ॐ (a-u-m). It represents the dynamic, transformative middle — the journey between origin and silence.',
              deity: 'शिव (Shiva) — Transformer 🔱 (traditional mnemonic)',
              deityNote: 'Shiva destroys what no longer serves and transforms it into the new. उ carries this rounded, gathering force — the closing of lips that contains and reshapes.',
              place: 'Lips / ओष्ठ (Oshtha) — rounded 👄',
              placeNote: 'Made by rounding both lips while the tongue retracts to the back. This is the most "physical" vowel — you can feel it forming at the very front of your mouth.',
              words: [{ s: 'उमा', p: 'Umaa', m: 'Parvati' }, { s: 'उपनिषद्', p: 'Upanishad', m: 'Sacred text' }] },
            { type: 'letter_card', letter: 'ऊ', phonetic: "oo (as in 'pool')", phHi: "जैसे 'ऊन' में",
              meaning: 'Energy, Strength / ऊर्जा, शक्ति',
              meaningNote: 'ऊ is the sustained form of उ — concentrated power held steady. Notice how ऊर्जा (energy) and ऊर्ध्व (upward) both carry a sense of rising force.',
              deity: 'पार्वती (Parvati) — traditional association / आदिशक्ति',
              deityNote: 'Parvati embodies the patient, sustaining feminine power that holds creation together. ऊ extends उ\'s transformative energy into enduring strength.',
              place: 'Lips / ओष्ठ — held 2× longer',
              placeNote: 'The same rounded-lip position as उ, but maintained for twice the duration. This is the pattern across all vowels — short (ह्रस्व) and long (दीर्घ) pairs.',
              words: [{ s: 'ऊर्जा', p: 'Oorjaa', m: 'Energy' }, { s: 'ऊर्ध्व', p: 'Oordhva', m: 'Upward' }] },
            { type: 'multi', q: 'उ (u) is produced at?', options: ['Throat / कण्ठ', 'Palate / तालु', 'Teeth / दन्त', 'Lips / ओष्ठ'], answer: 3, audio: 'उ' },
            { type: 'smriti', showText: '\uD83D\uDCF8 Articulation pattern:\n\n\uD83D\uDC45 अ आ = Throat / कण्ठ\n\uD83D\uDC45 इ ई = Palate / तालु\n\uD83D\uDC45 उ ऊ = Lips / ओष्ठ\n\nShort \u2192 Long pair each!', showTime: 6, q: '\uD83E\uDDE0 उ ऊ are produced at?', options: ['Throat / कण्ठ', 'Palate / तालु', 'Roof / मूर्धा', 'Lips / ओष्ठ'], answer: 3 },
          ],
        },
      ],
    },
    // ─── Unit 3: ऋ + Compound Vowels ───
    {
      u: 3, title: 'ऋ ए ऐ ओ औ', sub: 'Sacred vowels & compounds / पवित्र स्वर एवं संयुक्त', icon: '\uD83C\uDF1E', color: '#0EA5E9',
      lessons: [
        {
          id: '1.5', title: 'ऋ — Cosmic Truth', icon: '\u2696\uFE0F',
          desc: 'ऋत (Rita) — Cosmic Order / ब्रह्माण्डीय व्यवस्था',
          ex: [
            { type: 'letter_card', letter: 'ऋ', phonetic: 'ri (tongue curls back!)', phHi: 'जीभ पीछे मुड़ती है!',
              meaning: 'Cosmic Truth / ब्रह्माण्डीय सत्य',
              meaningNote: 'ऋ is a vowel that behaves like a consonant — utterly unique. It begins words like ऋषि (sage), ऋत (cosmic order), and ऋतु (season) — all things that follow universal rhythm.',
              deity: 'ऋत (Rita) — The Cosmic Law ⚖️',
              deityNote: 'Rita is the ancient Vedic principle that governs the order of nature — sunrise, seasons, dharma. ऋ literally embodies this universal rhythm humans must align with.',
              place: 'Roof / मूर्धा (Moordhaa) — retroflex',
              placeNote: 'The tongue curls backward to touch the hard palate roof. This retroflex sound is unique to Indian languages and gives ऋ its distinct, almost growling quality.',
              words: [{ s: 'ऋषि', p: 'Rishi', m: 'Sage 🧘' }, { s: 'ऋग्वेद', p: 'Rigveda', m: 'Oldest Veda' }, { s: 'ऋतु', p: 'Ritu', m: 'Season' }] },
            { type: 'multi', q: 'ऋ (ri) is unique because:', options: ['It is nasal', 'It is retroflex (tongue curls back)', 'It has no sound', 'It is silent'], answer: 1, audio: 'ऋ' },
            { type: 'match', q: 'Match ऋ words:', pairs: [['ऋषि (Rishi)', 'Sage \uD83E\uDDD8'], ['ऋग्वेद (Rigveda)', 'Oldest Veda \uD83D\uDCDC'], ['ऋतु (Ritu)', 'Season \uD83C\uDF42'], ['ऋण (Rina)', 'Debt \uD83D\uDCB8']] },
            { type: 'smriti', showText: '\uD83D\uDCF8 5 articulation points:\n\n1. कण्ठ (Throat) = अ आ\n2. तालु (Palate) = इ ई\n3. मूर्धा (Roof) = ऋ\n4. दन्त (Teeth) = ल\n5. ओष्ठ (Lips) = उ ऊ', showTime: 7, q: '\uD83E\uDDE0 ऋषि (Rishi) means?', options: ['King', 'Sage', 'Priest', 'Warrior'], answer: 1 },
          ],
        },
        {
          id: '1.6', title: 'ए ऐ — Compound Vowels 1', icon: '\uD83C\uDF08',
          desc: 'Seeking & Exalted / खोज एवं उत्कृष्ट',
          ex: [
            { type: 'info', text: '\uD83D\uDD14 Compound Vowels / संयुक्त स्वर:\n\nWhen vowels combine, they create new sounds!\nजब स्वर मिलते हैं, नई ध्वनि बनती है!\n\nअ + इ = ए (a + i = e)\nअ + ए = ऐ (a + e = ai)\n\nThese are called गुण (Guna) and वृद्धि (Vriddhi)', audio: 'ए' },
            { type: 'letter_card', letter: 'ए', phonetic: "e (as in 'hey')", phHi: "जैसे 'एक' में",
              meaning: 'Seeking, Calling / खोज, पुकार',
              meaningNote: 'ए is the sound of reaching out — एक (one), एव (only), एहि (come!). It opens the speaker outward, calling something into focus.',
              deity: 'वायु (Vaayu) — traditional mnemonic: wind that carries the calling voice',
              deityNote: 'Vayu carries voices across distances, connecting one being to another. ए shares this quality of bridging — formed by combining अ + इ (throat + palate).',
              place: 'Throat+Palate / कण्ठतालु (Guna)',
              placeNote: 'A blended articulation where sound moves from throat (अ) up to palate (इ). This blend is called गुण — the first level of vowel combination.',
              words: [{ s: 'एक', p: 'Eka', m: 'One' }, { s: 'एव', p: 'Eva', m: 'Only/Indeed' }] },
            { type: 'letter_card', letter: 'ऐ', phonetic: "ai (as in 'aisle')", phHi: "जैसे 'ऐसा' में",
              meaning: 'Exalted, Supreme / उत्कृष्ट, परम',
              meaningNote: 'ऐ carries grandeur and elevation — ऐश्वर्य (sovereign prosperity), ऐक्य (supreme unity). It is the sound of things lifted to their highest form.',
              deity: 'अग्नि (Agni) — God of Sacred Fire 🔥 (traditional mnemonic)',
              deityNote: 'Agni carries offerings upward to the gods — a force of elevation. ऐ similarly elevates ए to its grander, longer form (vriddhi = "growth").',
              place: 'Throat+Palate / कण्ठतालु (Vriddhi)',
              placeNote: 'The "vriddhi" (growth) form of ए — the same blend, but stretched and intensified. वृद्धि is the second, fuller stage of vowel combination after गुण.',
              words: [{ s: 'ऐश्वर्य', p: 'Aishvarya', m: 'Prosperity' }, { s: 'ऐक्य', p: 'Aikya', m: 'Unity' }] },
            { type: 'multi', q: 'ए is formed by combining:', options: ['अ + उ', 'अ + इ (Guna)', 'इ + उ', 'अ + ऋ'], answer: 1 },
            { type: 'multi', q: 'ऐ is formed by combining:', options: ['अ + ई', 'इ + उ', 'अ + ए (Vriddhi)', 'उ + इ'], answer: 2 },
          ],
        },
        {
          id: '1.7', title: 'ओ औ — Compound Vowels 2', icon: '\uD83D\uDD49\uFE0F',
          desc: 'OM & Devotion / ॐ एवं भक्ति',
          ex: [
            { type: 'letter_card', letter: 'ओ', phonetic: "o (as in 'go')", phHi: "जैसे 'ओम' में",
              meaning: 'Sacred OM, Devotion / पवित्र ॐ, भक्ति',
              meaningNote: 'ओ is the heart of ॐ — the sacred syllable said to be the sound of the universe. It blends the openness of अ with the rounding of उ.',
              deity: 'ब्रह्म (Brahman) — traditional association via the sacred syllable ॐ',
              deityNote: 'Brahman is the formless, infinite ground of all existence. ओ carries this completeness — the union of beginning (अ) and ending (उ) into one resonant whole.',
              place: 'Throat+Lips / कण्ठोष्ठ (Guna)',
              placeNote: 'A guna blend of अ (throat) + उ (lips). The voice begins deep and rounds outward — physically tracing the journey from origin to expression.',
              words: [{ s: 'ओम्', p: 'Om', m: 'Sacred syllable 🕉️' }, { s: 'ओजस्', p: 'Ojas', m: 'Vitality' }] },
            { type: 'letter_card', letter: 'औ', phonetic: "au (as in 'how')", phHi: "जैसे 'और' में",
              meaning: 'Power, Grandeur / शक्ति, वैभव',
              meaningNote: 'औ holds majestic power — औषधि (medicine, healing power), औदार्य (greatness). It is ओ stretched to its grandest, most resonant form.',
              deity: 'दुर्गा (Durga) — traditional association 🛡️',
              deityNote: 'Durga is the supreme protective force, embodying the highest expression of शक्ति. औ resonates with that fully-stretched, awe-inspiring power.',
              place: 'Throat+Lips / कण्ठोष्ठ (Vriddhi)',
              placeNote: 'The vriddhi (intensified) form of ओ. Where ओ is balanced, औ is expanded — the same blend held longer and pronounced fuller.',
              words: [{ s: 'औषधि', p: 'Aushadhi', m: 'Medicine 💊' }, { s: 'और', p: 'Aur', m: 'And/More' }] },
            { type: 'multi', q: 'ओ is formed by combining:', options: ['अ + उ (Guna)', 'अ + इ', 'उ + इ', 'अ + ऋ'], answer: 0 },
            { type: 'match', q: 'Guna vs Vriddhi:', pairs: [['अ + इ = ए', 'Guna · Throat+Palate'], ['अ + ए = ऐ', 'Vriddhi · Throat+Palate'], ['अ + उ = ओ', 'Guna · Throat+Lips'], ['अ + ओ = औ', 'Vriddhi · Throat+Lips']] },
            { type: 'krama', title: '\uD83D\uDCFF Complete vowel chain:', sequence: ['अ (a) — Throat', 'आ (aa) — Throat', 'इ (i) — Palate', 'ई (ee) — Palate', 'उ (u) — Lips', 'ऊ (oo) — Lips', 'ऋ (ri) — Roof', 'ए (e) — Throat+Palate', 'ऐ (ai) — Throat+Palate', 'ओ (o) — Throat+Lips', 'औ (au) — Throat+Lips'], q: 'How many main vowels in Sanskrit?', options: ['8', '10', '11', '14'], answer: 2 },
          ],
        },
        {
          id: '1.8', title: 'अं अः — Anusvara & Visarga', icon: '\uD83D\uDD14',
          desc: 'Nasal & Breath / अनुस्वार एवं विसर्ग',
          ex: [
            { type: 'info', text: '\uD83D\uDD14 Special sounds / विशेष ध्वनियाँ:\n\nअं (Anusvara) = nasal "m" sound at end\nअः (Visarga) = breathy "h" sound at end\n\nThese complete the vowel system!\nये स्वर प्रणाली को पूर्ण करते हैं!\n\nExample: रामः (Raamah) — the ः is Visarga\nExample: संस्कृतम् — the ं is Anusvara' },
            { type: 'multi', q: 'रामः — the ः at the end is called:', options: ['Anusvara / अनुस्वार', 'Visarga / विसर्ग', 'Halant / हलन्त', 'Nukta / नुक्ता'], answer: 1 },
            { type: 'multi', q: 'संस्कृतम् — the ं is called:', options: ['Visarga / विसर्ग', 'Anusvara / अनुस्वार', 'Chandrabindu', 'Nukta'], answer: 1 },
            { type: 'match', q: 'Match:', pairs: [['अं (Anusvara)', 'Nasal "m" sound'], ['अः (Visarga)', 'Breathy "h" sound'], ['रामः', 'Raama-h (Visarga)'], ['संस्कृतं', 'Sanskrita-m (Anusvara)']] },
            { type: 'smriti', showText: '\uD83D\uDCF8 Complete vowel system:\n\n\u2728 11 main vowels: अ आ इ ई उ ऊ ऋ ए ऐ ओ औ\n\uD83D\uDD14 2 special: अं (Anusvara), अः (Visarga)\n\uD83C\uDFAF Total: 13 sounds = 11 svara (vowels) + 2 ayogavaha (अं/अः). Note: anusvara & visarga are ayogavaha — dependent sounds, not vowels.', showTime: 7, q: '\uD83E\uDDE0 Visarga sounds like:', options: ['Nasal "m"', 'Breathy "h"', 'Silent', 'Rolling "r"'], answer: 1 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 2: CONSONANTS (व्यञ्जन)
// ═══════════════════════════════════════════════════
{
  section: 'Consonants / व्यञ्जन',
  sIcon: '\uD83D\uDD14',
  sColor: '#EA580C',
  sDesc: '25 stops + 8 others = scientific phonetic system / वैज्ञानिक ध्वनि प्रणाली',
  units: [
    // ─── Unit 4: क-वर्ग (Gutturals) ───
    {
      u: 4, title: 'क-वर्ग (ka-varga)', sub: 'Throat consonants / कण्ठ्य व्यञ्जन', icon: '\uD83D\uDD25', color: '#EA580C',
      lessons: [
        {
          id: '2.1', title: 'क ख ग घ ङ — Throat Group', icon: '\uD83D\uDD25',
          desc: 'Gutturals / कण्ठ्य — from the throat',
          ex: [
            { type: 'info', text: '\uD83D\uDD14 The 25 consonants follow a SCIENTIFIC pattern!\n\nEach group of 5:\n1. Unvoiced (अघोष) — क\n2. Aspirated (महाप्राण) — ख\n3. Voiced (घोष) — ग\n4. Voiced+Aspirated — घ\n5. Nasal (अनुनासिक) — ङ\n\nक-वर्ग = Throat / कण्ठ group', audio: 'क' },
            { type: 'letter_card', letter: 'क', phonetic: "ka (as in 'cup')", phHi: "जैसे 'कमल' में",
              meaning: 'Mnemonic — क begins कर्म / कर्ता (action, doer) / स्मृति-सङ्केत',
              meaningNote: 'क begins कर्म (action), कर्ता (doer), कमल (lotus). It is the consonant of doing — the first sharp, decisive sound after the inherent vowel अ.',
              deity: 'ब्रह्मा (Brahma) — traditional mnemonic association',
              deityNote: 'Brahma sets creation in motion — the active principle that brings forms into being. क is the first letter of the consonant alphabet, mirroring this role of beginnings.',
              place: 'Throat / कण्ठ — Unvoiced (अघोष)',
              placeNote: 'Made by briefly stopping airflow at the back of the throat. "Unvoiced" means the vocal cords don\'t vibrate — pure breath, no hum (try whispering "k").',
              words: [{ s: 'कमल', p: 'Kamal', m: 'Lotus 🪷' }, { s: 'कृष्ण', p: 'Krishna', m: 'Krishna' }] },
            { type: 'letter_card', letter: 'ख', phonetic: "kha (k + breath)", phHi: "जैसे 'खेल' में",
              meaning: 'Sky, Space, Openness / आकाश',
              meaningNote: 'ख literally means "sky" in Sanskrit. Words like खग (sky-goer = bird) and खेल (play, free movement) carry this sense of open space.',
              deity: 'वरुण (Varuna) — traditional association (mnemonic, not textually assigned to ख)',
              deityNote: 'Varuna oversees the vast sky and cosmic order from above. ख embodies this openness — the breath after the stop opens like sky after thunder.',
              place: 'Throat / कण्ठ — Aspirated (महाप्राण)',
              placeNote: 'Same throat position as क, but released with a strong puff of breath. महाप्राण literally means "great breath" — feel the air rush out.',
              words: [{ s: 'खग', p: 'Khaga', m: 'Bird 🐦' }, { s: 'खेल', p: 'Khel', m: 'Play' }] },
            { type: 'multi', q: 'क is Unvoiced. ग is:', options: ['Unvoiced / अघोष', 'Aspirated / महाप्राण', 'Voiced / घोष', 'Nasal / अनुनासिक'], answer: 2 },
            { type: 'krama', title: '\uD83D\uDCFF क-वर्ग pattern:', sequence: ['क (ka) — Unvoiced', 'ख (kha) — Aspirated', 'ग (ga) — Voiced', 'घ (gha) — Voiced+Aspirated', 'ङ (nga) — Nasal'], q: 'The 5th letter in every group is:', options: ['Unvoiced', 'Aspirated', 'Voiced', 'Nasal / अनुनासिक'], answer: 3 },
            { type: 'match', q: 'Match क-वर्ग words:', pairs: [['कमल (Kamal)', 'Lotus \uD83E\uDEB7'], ['खग (Khaga)', 'Bird \uD83D\uDC26'], ['गज (Gaja)', 'Elephant \uD83D\uDC18'], ['घर (Ghar)', 'House \uD83C\uDFE0']] },
          ],
        },
      ],
    },
    // ─── Unit 5: च-वर्ग (Palatals) ───
    {
      u: 5, title: 'च-वर्ग (cha-varga)', sub: 'Palatal consonants / तालव्य', icon: '\uD83D\uDC8E', color: '#8B5CF6',
      lessons: [
        {
          id: '2.2', title: 'च छ ज झ ञ — Palate Group', icon: '\uD83D\uDC8E',
          desc: 'Palatals / तालव्य — tongue touches palate',
          ex: [
            { type: 'letter_card', letter: 'च', phonetic: "cha (as in 'church')", phHi: "जैसे 'चन्द्र' में",
              meaning: 'Moon, Movement / चन्द्र, चलन',
              meaningNote: 'च begins चन्द्र (moon), चक्र (wheel), चल (movement). Notice how all three involve circular motion — च carries the sense of orbiting beauty.',
              deity: 'चन्द्र (Chandra) — Moon (mnemonic: च begins चन्द्र) 🌙',
              deityNote: 'Chandra governs the night sky and the cycles of mind. च shares this gentle, curving quality — neither sharp like क nor rough like the retroflexes.',
              place: 'Palate / तालु — Unvoiced (अघोष)',
              placeNote: 'Made when the middle of the tongue presses against the hard palate, then releases. Notice the soft, brushy quality — lighter than क (throat).',
              words: [{ s: 'चन्द्र', p: 'Chandra', m: 'Moon 🌙' }, { s: 'चक्र', p: 'Chakra', m: 'Wheel/Circle' }] },
            { type: 'letter_card', letter: 'ज', phonetic: "ja (as in 'just')", phHi: "जैसे 'जल' में",
              meaning: 'Begins जल (water), जीवन (life), जन्म (birth)',
              meaningNote: 'ज is the sound of life-giving — जल (water), जन्म (birth), जीव (living being), जगत् (world). It carries the quality of vital flow.',
              deity: 'विष्णु as जगन्नाथ (Lord of the World) — traditional mnemonic',
              deityNote: 'Vishnu in his form as जगन्नाथ rules the living world. ज itself begins many words for life — the voiced palatal sound resonates with vitality.',
              place: 'Palate / तालु — Voiced (घोष)',
              placeNote: 'Same palatal position as च, but with vocal cord vibration ("voiced"). Touch your throat saying "j" — you\'ll feel the buzz that "ch" lacks.',
              words: [{ s: 'जल', p: 'Jala', m: 'Water 💧' }, { s: 'जगत्', p: 'Jagat', m: 'World' }] },
            { type: 'krama', title: '\uD83D\uDCFF च-वर्ग pattern:', sequence: ['च (cha) — Unvoiced', 'छ (chha) — Aspirated', 'ज (ja) — Voiced', 'झ (jha) — Voiced+Aspirated', 'ञ (nya) — Nasal'], q: 'च-वर्ग is produced at:', options: ['Throat / कण्ठ', 'Palate / तालु', 'Roof / मूर्धा', 'Teeth / दन्त'], answer: 1 },
            { type: 'multi', q: 'जगत् (Jagat) means:', options: ['Moon', 'Water', 'World / जगत्', 'Fire'], answer: 2 },
            { type: 'match', q: 'Match:', pairs: [['चन्द्र (Chandra)', 'Moon \uD83C\uDF19'], ['जल (Jala)', 'Water \uD83D\uDCA7'], ['छाया (Chhaaya)', 'Shadow \uD83C\uDF11'], ['ज्ञान (Jnaan)', 'Knowledge \uD83D\uDCDA']] },
          ],
        },
      ],
    },
    // ─── Unit 6: ट-वर्ग (Retroflexes) ───
    {
      u: 6, title: 'ट-वर्ग (Ta-varga)', sub: 'Retroflex consonants / मूर्धन्य', icon: '\uD83D\uDCA5', color: '#DC2626',
      lessons: [
        {
          id: '2.3', title: 'ट ठ ड ढ ण — Roof Group', icon: '\uD83D\uDCA5',
          desc: 'Retroflexes / मूर्धन्य — tongue curls back!',
          ex: [
            { type: 'info', text: '\uD83D\uDCA5 Retroflex = tongue curls BACK to touch the roof!\nमूर्धन्य = जीभ पीछे मुड़कर तालु को छूती है!\n\nThis is UNIQUE to Indian languages!\nयह भारतीय भाषाओं की विशेषता है!\n\nEnglish speakers: think of the "t" in "true"\nbut with tongue curled even further back.' },
            { type: 'letter_card', letter: 'ट', phonetic: "Ta (hard, tongue curled)", phHi: "जैसे 'टमाटर' में",
              meaning: 'Mnemonic: sharp, striking sound / स्मृति-संकेत: तीक्ष्ण ध्वनि',
              meaningNote: 'ट is sharp and decisive — टंकार (twang of a bowstring), टीका (incisive commentary). It cuts through with precision.',
              deity: 'इन्द्र (Indra) — Wielder of the Vajra ⚡ (mnemonic only)',
              deityNote: 'Indra strikes with his thunderbolt — sudden and exact. The retroflex ट carries this same striking quality, alien to most languages but native to Sanskrit.',
              place: 'Roof / मूर्धा — Retroflex (मूर्धन्य)',
              placeNote: 'The tongue curls backward to touch the hard palate roof. This मूर्धन्य articulation is what gives Indian languages their characteristic sound — try it: tongue UP and BACK.',
              words: [{ s: 'टीका', p: 'Teekaa', m: 'Commentary' }] },
            { type: 'krama', title: '\uD83D\uDCFF ट-वर्ग pattern:', sequence: ['ट (Ta) — Unvoiced', 'ठ (Tha) — Aspirated', 'ड (Da) — Voiced', 'ढ (Dha) — Voiced+Asp.', 'ण (Na) — Nasal (Retroflex N!)'], q: 'ण is special because:', options: ['It is silent', 'It is retroflex nasal', 'It is a vowel', 'It is same as न'], answer: 1 },
            { type: 'multi', q: 'Retroflex means the tongue:', options: ['Touches teeth', 'Stays flat', 'Curls backward to roof', 'Touches lips'], answer: 2, audio: 'ट' },
            { type: 'smriti', showText: '\uD83D\uDCF8 3 groups so far:\n\n1. क-वर्ग = Throat / कण्ठ\n2. च-वर्ग = Palate / तालु\n3. ट-वर्ग = Roof / मूर्धा (Retroflex!)\n\nEach has the SAME 5-pattern:\nUnvoiced \u2192 Aspirated \u2192 Voiced \u2192 V+A \u2192 Nasal', showTime: 7, q: '\uD83E\uDDE0 ट-वर्ग is produced at:', options: ['Throat', 'Palate', 'Roof / मूर्धा', 'Teeth'], answer: 2 },
          ],
        },
      ],
    },
    // ─── Unit 7: त-वर्ग (Dentals) ───
    {
      u: 7, title: 'त-वर्ग (ta-varga)', sub: 'Dental consonants / दन्त्य', icon: '\u2728', color: '#0891B2',
      lessons: [
        {
          id: '2.4', title: 'त थ द ध न — Teeth Group', icon: '\u2728',
          desc: 'Dentals / दन्त्य — tongue touches teeth',
          ex: [
            { type: 'info', text: '\u2728 Dental = tongue touches TEETH\nदन्त्य = जीभ दाँतों को छूती है\n\nIMPORTANT: Sanskrit त (ta) is SOFTER than English "t"\nThe tongue touches the BACK of upper teeth, not the ridge!\n\nCompare: ट (retroflex) vs त (dental)\nट = tongue curled back, त = tongue at teeth' },
            { type: 'letter_card', letter: 'त', phonetic: "ta (soft, tongue at teeth)", phHi: "जैसे 'तारा' में",
              meaning: 'Mnemonic — त-initial words: तत् (that), तत्त्व (essence)',
              meaningNote: 'त carries pointing and being — तत् (that), तत्त्व (true essence), तारा (star). Notice how the soft त in तत्त्वमसि ("that thou art") differs from the harsh ट.',
              deity: 'सत्य (Satya) — mnemonic association (no traditional Śikṣā deity assigned to त)',
              deityNote: 'Satya is the principle that what IS, IS — the unchanging truth. The dental त expresses this through gentle precision, not aggression.',
              place: 'Teeth / दन्त — Unvoiced (अघोष)',
              placeNote: 'The tongue lightly touches the back of the upper teeth. This is SOFTER than English "t" — Sanskrit त is quite different from the ट that English "t" actually resembles.',
              words: [{ s: 'तत्त्व', p: 'Tattva', m: 'Element/Truth' }, { s: 'तारा', p: 'Taaraa', m: 'Star ⭐' }] },
            { type: 'letter_card', letter: 'द', phonetic: "da (soft, tongue at teeth)", phHi: "जैसे 'दान' में",
              meaning: 'Giving, Granting / दान, दया',
              meaningNote: 'द is the sound of giving — दान (charity), दया (compassion), देव (the shining one who grants). The soft voiced sound itself feels generous.',
              deity: 'देव (Deva) — mnemonic: द is the first sound of देव, "the shining one"',
              deityNote: 'देव comes from the root "div" meaning "to shine, to give". Devas are the cosmic givers — and द begins their very name.',
              place: 'Teeth / दन्त — Voiced (घोष)',
              placeNote: 'Same gentle dental position as त, but with vocal cord vibration. Compare द (soft, vocal) with ड (retroflex, voiced) — try saying "this" vs "drum".',
              words: [{ s: 'दान', p: 'Daan', m: 'Charity' }, { s: 'देव', p: 'Deva', m: 'God 🙏' }] },
            { type: 'krama', title: '\uD83D\uDCFF त-वर्ग:', sequence: ['त (ta) — Unvoiced', 'थ (tha) — Aspirated', 'द (da) — Voiced', 'ध (dha) — Voiced+Asp.', 'न (na) — Nasal'], q: 'त vs ट: what is the difference?', options: ['Same sound', 'त = dental (teeth), ट = retroflex (roof)', 'त = nasal, ट = voiced', 'No difference in Sanskrit'], answer: 1 },
            { type: 'match', q: 'Match त-वर्ग words:', pairs: [['तत्त्व (Tattva)', 'Element/Truth'], ['दान (Daan)', 'Charity/Giving'], ['धर्म (Dharma)', 'Duty/Righteousness'], ['नमस्ते (Namaste)', 'Hello/Greeting']] },
          ],
        },
      ],
    },
    // ─── Unit 8: प-वर्ग (Labials) ───
    {
      u: 8, title: 'प-वर्ग (pa-varga)', sub: 'Lip consonants / ओष्ठ्य', icon: '\uD83D\uDC44', color: '#D946EF',
      lessons: [
        {
          id: '2.5', title: 'प फ ब भ म — Lips Group', icon: '\uD83D\uDC44',
          desc: 'Labials / ओष्ठ्य — both lips meet',
          ex: [
            { type: 'letter_card', letter: 'प', phonetic: "pa (as in 'pun')", phHi: "जैसे 'पुस्तक' में",
              meaning: 'Holding, Drinking, Protection / पाल, पान',
              meaningNote: 'प comes from पा meaning "to drink, to hold, to protect" — हence पुस्तक (book that holds knowledge), प्राण (life-breath), पिता (one who protects).',
              deity: 'पवन (Pavana) — traditional mnemonic (प → prāṇa at the lips)',
              deityNote: 'Pavana animates all living things with breath. The lip-closure of प is exactly how breath is held and released — every spoken प is a tiny prana.',
              place: 'Lips / ओष्ठ — Unvoiced (अघोष)',
              placeNote: 'Made by closing both lips and releasing without vocal cord vibration. The lips are the FRONTMOST articulator — प starts the journey of breath at the very edge of the body.',
              words: [{ s: 'पुस्तक', p: 'Pustak', m: 'Book 📖' }, { s: 'प्राण', p: 'Praana', m: 'Life-breath' }] },
            { type: 'letter_card', letter: 'म', phonetic: "ma (as in 'mother')", phHi: "जैसे 'माता' में",
              meaning: 'Mnemonic: माता (mother), मन (mind), मात्रा (measure) — all begin with म',
              meaningNote: 'म is the universal sound of nurture — माता (mother) sounds nearly identical across English, Latin, Greek, Sanskrit. It is the closing sound of ॐ.',
              deity: 'माँ / Divine Mother — mnemonic (म echoes माता)',
              deityNote: 'The cosmic mother who births and holds all creation. म is also the final resonance of ॐ — the sound of return and rest into the source.',
              place: 'Lips / ओष्ठ — Nasal (अनुनासिक)',
              placeNote: 'The lips close like प, but air flows through the nose, creating that humming resonance. This is why babies cry "mama" first — closed lips with hum is the easiest sound.',
              words: [{ s: 'माता', p: 'Maataa', m: 'Mother' }, { s: 'मन', p: 'Man', m: 'Mind 🧠' }] },
            { type: 'krama', title: '\uD83D\uDCFF प-वर्ग:', sequence: ['प (pa) — Unvoiced', 'फ (pha) — Aspirated', 'ब (ba) — Voiced', 'भ (bha) — Voiced+Asp.', 'म (ma) — Nasal'], q: 'प-वर्ग is the ___ group in the 5 vargas:', options: ['1st (Throat)', '2nd (Palate)', '4th (Teeth)', '5th (Lips)'], answer: 3 },
            { type: 'smriti', showText: '\uD83D\uDCF8 ALL 5 consonant groups:\n\n1. क-वर्ग = Throat / कण्ठ\n2. च-वर्ग = Palate / तालु\n3. ट-वर्ग = Roof / मूर्धा\n4. त-वर्ग = Teeth / दन्त\n5. प-वर्ग = Lips / ओष्ठ\n\n= 25 consonants total! (5 \u00D7 5)', showTime: 8, q: '\uD83E\uDDE0 Total stop consonants:', options: ['20', '25', '30', '33'], answer: 1 },
            { type: 'sequence', title: 'Order the 5 groups (throat \u2192 lips):', items: ['क-वर्ग (Throat)', 'च-वर्ग (Palate)', 'ट-वर्ग (Roof)', 'त-वर्ग (Teeth)', 'प-वर्ग (Lips)'] },
          ],
        },
      ],
    },
    // ─── Unit 9: Semi-vowels & Sibilants ───
    {
      u: 9, title: 'अन्तःस्थ + ऊष्म', sub: 'Semi-vowels + Sibilants / अर्धस्वर + ऊष्म', icon: '\uD83C\uDF0A', color: '#059669',
      lessons: [
        {
          id: '2.6', title: 'य र ल व — Semi-vowels (4 Elements)', icon: '\uD83C\uDF0D',
          desc: 'Half-vowels = 4 Elements / अर्धस्वर = ४ तत्त्व',
          ex: [
            { type: 'info', text: '\uD83C\uDF0D Semi-vowels (अन्तःस्थ) = between vowels & consonants\n\nEach represents an ELEMENT:\nय (ya) = Air / वायु \uD83C\uDF2C\uFE0F\nर (ra) = Fire / अग्नि \uD83D\uDD25\nल (la) = Earth / पृथ्वी \uD83C\uDF0D\nव (va) = Water / जल \uD83D\uDCA7\n\nThey flow smoothly like the elements they represent!' },
            { type: 'letter_card', letter: 'य', phonetic: "ya (as in 'yes')", phHi: "जैसे 'योग' में",
              meaning: 'Union, Air, Joining / योग, वायु, युज्',
              meaningNote: 'य comes from युज् ("to yoke, unite") — the same root as योग (yoga). It is the consonantal cousin of इ — both flow from the palate.',
              deity: 'वायु (Vaayu) — Air & the Joining Force',
              deityNote: 'Vayu is the breath that connects all beings — y has been classed as a "semi-vowel" because it glides like air, neither fully stopping nor opening.',
              place: 'Palate / तालु — Semi-vowel (अन्तःस्थ)',
              placeNote: 'य is "between" (अन्तःस्थ) — formed near the इ position but with slight friction. It glides instead of stopping, joining sounds rather than separating them.',
              words: [{ s: 'योग', p: 'Yoga', m: 'Union 🧘' }, { s: 'यज्ञ', p: 'Yajna', m: 'Sacrifice' }] },
            { type: 'letter_card', letter: 'र', phonetic: "ra (rolled, like Spanish)", phHi: "जैसे 'राम' में",
              meaning: 'Fire, Movement, Brilliance / अग्नि, गति',
              meaningNote: 'र is the consonant of motion and fire — रवि (sun), रथ (chariot), राग (passion/melody). The rolled tongue itself flickers like flame.',
              deity: 'अग्नि (Agni) — God of Fire 🔥',
              deityNote: 'Agni is the fire that moves upward — र carries this same dynamic energy. Sanskrit teachers say each rolled र is a small spark of vital fire.',
              place: 'Roof / मूर्धा — Semi-vowel (अन्तःस्थ)',
              placeNote: 'A short retroflex flap — the tongue lightly touches the roof and bounces. Unlike English "r" (which slides), Sanskrit र is briefly tapped, almost trilled.',
              words: [{ s: 'राम', p: 'Raama', m: 'Lord Rama' }, { s: 'रवि', p: 'Ravi', m: 'Sun ☀️' }] },
            { type: 'match', q: 'Semi-vowels = Elements:', pairs: [['य (ya)', 'Air / वायु \uD83C\uDF2C\uFE0F'], ['र (ra)', 'Fire / अग्नि \uD83D\uDD25'], ['ल (la)', 'Earth / पृथ्वी \uD83C\uDF0D'], ['व (va)', 'Water / जल \uD83D\uDCA7']] },
            { type: 'multi', q: 'र (ra) represents which element?', options: ['Water / जल', 'Earth / पृथ्वी', 'Fire / अग्नि', 'Air / वायु'], answer: 2, audio: 'र' },
          ],
        },
        {
          id: '2.7', title: 'श ष स ह — Sibilants & Aspirate', icon: '\uD83C\uDF2C\uFE0F',
          desc: 'Breath sounds / ऊष्म ध्वनि',
          ex: [
            { type: 'letter_card', letter: 'श', phonetic: "sha (as in 'ship')", phHi: "जैसे 'शान्ति' में",
              meaning: 'Mnemonic: श begins शान्ति (peace), शुभ (auspicious)',
              meaningNote: 'श begins all words of grace and tranquility — शान्ति (peace), शक्ति (sacred power), शुभ (auspicious). Even the Vedic peace mantra ends with "शान्तिः शान्तिः शान्तिः".',
              deity: 'शिव (Shiva) — mnemonic: शिव/शुभ begin with श (auspicious)',
              deityNote: 'The very name शिव means "auspicious, gentle". The soft श sound itself feels like a calming exhale — a perfect carrier for शान्ति.',
              place: 'Palate / तालु — Sibilant (ऊष्म)',
              placeNote: 'A friction sound (sibilant) made at the palate — air flows continuously through a narrow gap. ऊष्म means "warm/breathy" — feel the air streaming out.',
              words: [{ s: 'शान्ति', p: 'Shaanti', m: 'Peace ☮️' }, { s: 'शक्ति', p: 'Shakti', m: 'Power' }] },
            { type: 'letter_card', letter: 'स', phonetic: "sa (as in 'sun')", phHi: "जैसे 'सत्य' में",
              meaning: 'Truth, Together, Being / सत्य, सह, सत्',
              meaningNote: 'स is the sound of "is-ness" — सत् means "that which truly exists". Found in सत्य (truth), सत्संग (gathering with truth), and the very name संस्कृत.',
              deity: 'सरस्वती (Saraswati) — traditional association (mnemonic: स begins her name & स्वाहा)',
              deityNote: 'Saraswati flows wherever truth is sought. स begins her own name and स्वाहा (the chant offering at sacred fire) — speech that becomes offering.',
              place: 'Teeth / दन्त — Sibilant (ऊष्म)',
              placeNote: 'A continuous hissing sound at the teeth. Compare श (palate) vs ष (retroflex) vs स (teeth) — three sibilants at three points, one of Sanskrit\'s many fine distinctions.',
              words: [{ s: 'सत्य', p: 'Satya', m: 'Truth' }, { s: 'सूर्य', p: 'Soorya', m: 'Sun ☀️' }] },
            { type: 'letter_card', letter: 'ह', phonetic: "ha (as in 'hello')", phHi: "जैसे 'हरि' में",
              meaning: 'Space, Breath, Ether / आकाश, प्राण',
              meaningNote: 'ह is pure breath voiced — the most spacious sound. हंस means "swan" (also "I am That"), हृदय (heart-space), हिमालय (abode of snow & sky).',
              deity: 'हरि (Hari), a name of विष्णु — mnemonic link (हरि begins with ह)',
              deityNote: 'Hari is Vishnu in his role as remover — he takes away suffering as the breath ह itself dissolves obstruction. ह is also the LAST consonant — completing the alphabet.',
              place: 'Throat / कण्ठ — Aspirate (ऊष्म)',
              placeNote: 'Pure breath from the throat with vocal cord vibration — voiced friction. ह is the most "spiritual" consonant: just breath given voice, without any blockage.',
              words: [{ s: 'हरि', p: 'Hari', m: 'Vishnu' }, { s: 'हिमालय', p: 'Himaalaya', m: 'Himalayas 🏔️' }] },
            { type: 'multi', q: 'श vs ष vs स — what differs?', options: ['Nothing, same sound', 'Articulation point changes', 'Volume changes', 'Speed changes'], answer: 1 },
            { type: 'smriti', showText: '\uD83D\uDCF8 Sibilant positions:\n\n\u262E\uFE0F श (sha) = Palate / तालु\n\u2694\uFE0F ष (sha) = Roof / मूर्धा (Retroflex!)\n\uD83D\uDCDA स (sa) = Teeth / दन्त\n\uD83C\uDF0C ह (ha) = Throat / कण्ठ\n\nComplete alphabet = 33 consonants!', showTime: 7, q: '\uD83E\uDDE0 ष (sha) is produced at:', options: ['Palate', 'Roof / मूर्धा (Retroflex)', 'Teeth', 'Throat'], answer: 1 },
          ],
        },
        {
          id: '2.8', title: 'Full Alphabet Review', icon: '\uD83C\uDFC6',
          desc: 'Master the complete वर्णमाला',
          ex: [
            { type: 'info', text: '\uD83C\uDFC6 The Complete Sanskrit Alphabet (वर्णमाला):\n\nVowels (13): अ आ इ ई उ ऊ ऋ ॠ ऌ ए ऐ ओ औ (अं anusvāra and अः visarga are ayogavāha — dependent sounds, NOT vowels)\n\nConsonants (33):\nक ख ग घ ङ (Throat)\nच छ ज झ ञ (Palate)\nट ठ ड ढ ण (Roof)\nत थ द ध न (Teeth)\nप फ ब भ म (Lips)\nय र ल व (Semi-vowels)\nश ष स ह (Sibilants)\n\nTotal: 46 sounds! Most scientific alphabet ever created.' },
            { type: 'match', q: 'Match groups to positions:', pairs: [['क-वर्ग', 'Throat / कण्ठ'], ['च-वर्ग', 'Palate / तालु'], ['ट-वर्ग', 'Roof / मूर्धा'], ['प-वर्ग', 'Lips / ओष्ठ']] },
            { type: 'multi', q: 'Total letters in Sanskrit alphabet:', options: ['26 (like English)', '33', '46', '52'], answer: 2 },
            { type: 'sequence', title: 'Order the 5 vargas:', items: ['क-वर्ग (कण्ठ)', 'च-वर्ग (तालु)', 'ट-वर्ग (मूर्धा)', 'त-वर्ग (दन्त)', 'प-वर्ग (ओष्ठ)'] },
            { type: 'multi', q: 'Sanskrit alphabet is considered scientific because:', options: ['It has many letters', 'Letters are organized by articulation point & voicing', 'It is very old', 'It looks beautiful'], answer: 1 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 3: FIRST WORDS (प्रथम शब्द)
// ═══════════════════════════════════════════════════
{
  section: 'First Words / प्रथम शब्द',
  sIcon: '\uD83D\uDCAC',
  sColor: '#22C55E',
  sDesc: 'Essential vocabulary & sentences / आवश्यक शब्द एवं वाक्य',
  units: [
    // ─── Unit 10: Greetings ───
    {
      u: 10, title: 'Greetings / अभिवादन', sub: 'Hello, Thank you, Welcome', icon: '\uD83D\uDE4F', color: '#22C55E',
      lessons: [
        {
          id: '3.1', title: 'Greetings & Courtesies', icon: '\uD83D\uDE4F',
          desc: 'नमस्ते, धन्यवादः, स्वागतम्',
          ex: [
            { type: 'info', text: '\uD83D\uDE4F Essential Greetings:\n\nनमस्ते (Namaste) = Hello\n  नमः + ते = "I bow to you"\n\nधन्यवादः (Dhanyavaadah) = Thank you\nस्वागतम् (Svaagatam) = Welcome\nक्षमस्व (Kshamasva) = Forgive me\nशुभ प्रभातम् (Shubha Prabhaatam) = Good morning\nशुभ रात्रिः (Shubha Raatrih) = Good night' },
            { type: 'match', q: 'Match greetings:', pairs: [['नमस्ते', 'Hello / I bow to you'], ['धन्यवादः', 'Thank you'], ['स्वागतम्', 'Welcome'], ['क्षमस्व', 'Forgive me']] },
            { type: 'multi', q: 'नमस्ते literally means:', options: ['Good day', 'I bow to you / नमः + ते', 'Be well', 'Goodbye'], answer: 1 },
            { type: 'listen_pick', prompt: "\u266A Which means 'Good morning'?", audio: 'शुभ प्रभातम्', answer: 'शुभ प्रभातम् = Good morning', tiles: ['शुभ रात्रिः = Good night', 'शुभ प्रभातम् = Good morning', 'नमस्ते = Hello', 'धन्यवादः = Thank you'] },
            { type: 'smriti', showText: '\uD83D\uDCF8 Daily greetings:\n\n\uD83C\uDF05 शुभ प्रभातम् = Good morning\n\u2600\uFE0F शुभ दिनम् = Good day\n\uD83C\uDF19 शुभ रात्रिः = Good night\n\uD83D\uDE4F नमस्ते = Hello (anytime)\n\uD83D\uDC4B पुनर्मिलामः = See you again', showTime: 6, q: '\uD83E\uDDE0 "See you again" = ?', options: ['क्षमस्व', 'पुनर्मिलामः', 'धन्यवादः', 'स्वागतम्'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 11: Pronouns & Simple Sentences ───
    {
      u: 11, title: 'Sentences / वाक्य', sub: 'Subject + Verb / कर्ता + क्रिया', icon: '\uD83D\uDDE3\uFE0F', color: '#10B981',
      lessons: [
        {
          id: '3.2', title: 'Pronouns / सर्वनाम', icon: '\uD83D\uDC64',
          desc: 'I, You, He, She, We / अहम्, त्वम्, सः, सा, वयम्',
          ex: [
            { type: 'info', text: '\uD83D\uDC64 Sanskrit Pronouns:\n\n\uD83D\uDC64 अहम् (Aham) = I / मैं\n\uD83D\uDC64 त्वम् (Tvam) = You / तुम\n\uD83D\uDC68 सः (Sah) = He / वह (पु.)\n\uD83D\uDC69 सा (Saa) = She / वह (स्त्री.)\n\uD83D\uDC65 वयम् (Vayam) = We / हम\n\uD83D\uDC65 यूयम् (Yooyam) = You all / तुम सब\n\uD83D\uDC65 ते (Te) = They (m.) / वे (पु.)' },
            { type: 'match', q: 'Match pronouns:', pairs: [['अहम् (Aham)', 'I / मैं'], ['त्वम् (Tvam)', 'You / तुम'], ['सः (Sah)', 'He / वह'], ['वयम् (Vayam)', 'We / हम']] },
            { type: 'multi', q: "'She' in Sanskrit:", options: ['सः (Sah)', 'सा (Saa)', 'तत् (Tat)', 'वयम् (Vayam)'], answer: 1 },
            { type: 'multi', q: "'We' in Sanskrit:", options: ['यूयम्', 'ते', 'वयम् (Vayam)', 'अहम्'], answer: 2 },
          ],
        },
        {
          id: '3.3', title: 'Simple Sentences / सरल वाक्य', icon: '\uD83D\uDCAC',
          desc: 'Subject + Object + Verb (SOV)',
          ex: [
            { type: 'info', text: '\uD83D\uDCAC Sanskrit word order = SOV (Subject-Object-Verb)\n\nरामः गच्छति = Rama goes\nसीता पठति = Sita reads\nबालकः खेलति = The boy plays\nअहं गच्छामि = I go\nत्वं पठसि = You read\n\nVerb endings change with the subject!\nक्रिया विभक्ति कर्ता के अनुसार बदलती है!' },
            { type: 'match', q: 'Match sentences:', pairs: [['रामः गच्छति', 'Rama goes'], ['सीता पठति', 'Sita reads'], ['अहं गच्छामि', 'I go'], ['बालकः खेलति', 'The boy plays']] },
            { type: 'multi', q: 'सीता हसति = ?', options: ['Sita reads', 'Sita laughs', 'Sita goes', 'Sita eats'], answer: 1 },
            { type: 'multi', q: "'I go' = ?", options: ['रामः गच्छति', 'सीता पठति', 'अहं गच्छामि', 'बालकः खेलति'], answer: 2 },
            { type: 'krama', title: '\uD83D\uDCFF Verb endings (गच्छ = go):', sequence: ['अहं गच्छामि = I go (-आमि)', 'त्वं गच्छसि = You go (-असि)', 'सः गच्छति = He goes (-अति)', 'वयं गच्छामः = We go (-आमः)', 'यूयं गच्छथ = You all go (-अथ)', 'ते गच्छन्ति = They go (-अन्ति)'], q: '"They go" = ?', options: ['गच्छति', 'गच्छामि', 'गच्छन्ति', 'गच्छसि'], answer: 2 },
          ],
        },
      ],
    },
    // ─── Unit 12: Numbers ───
    {
      u: 12, title: 'Numbers / संख्या', sub: 'एक to दश (1-10)', icon: '\uD83D\uDD22', color: '#F59E0B',
      lessons: [
        {
          id: '3.4', title: 'Numbers 1-10 / एक से दश', icon: '\uD83D\uDD22',
          desc: 'Sanskrit counting / संस्कृत गणना',
          ex: [
            { type: 'info', text: '\uD83D\uDD22 Numbers 1-10:\n\n1 = एक (Eka)\n2 = द्वि (Dvi)\n3 = त्रि (Tri)\n4 = चतुर् (Chatur)\n5 = पञ्च (Pancha)\n6 = षट् (Shat)\n7 = सप्त (Sapta)\n8 = अष्ट (Ashta)\n9 = नव (Nava)\n10 = दश (Dasha)\n\nMany English words come from these!\nTri-angle, Oct-agon, Nov-ember, Dec-ember' },
            { type: 'match', q: 'Match numbers:', pairs: [['एक (Eka)', 'One / 1'], ['त्रि (Tri)', 'Three / 3'], ['पञ्च (Pancha)', 'Five / 5'], ['दश (Dasha)', 'Ten / 10']] },
            { type: 'multi', q: 'सप्त (Sapta) = ?', options: ['6', '7', '8', '9'], answer: 1 },
            { type: 'sequence', title: 'Order 1-5:', items: ['एक (1)', 'द्वि (2)', 'त्रि (3)', 'चतुर् (4)', 'पञ्च (5)'] },
            { type: 'multi', q: '"October" comes from अष्ट (Ashta = 8) because Roman calendar started in March. What is अष्ट?', options: ['6', '7', '8', '9'], answer: 2 },
            { type: 'smriti', showText: '\uD83D\uDCF8 English from Sanskrit numbers:\n\nद्वि (Dvi=2) \u2192 Dual, Duo\nत्रि (Tri=3) \u2192 Triple, Triangle\nपञ्च (5) \u2192 Punch (5 ingredients!)\nअष्ट (8) \u2192 October (was 8th month)\nनव (9) \u2192 November\nदश (10) \u2192 December, Decimal', showTime: 7, q: '\uD83E\uDDE0 "Decimal" comes from:', options: ['पञ्च (5)', 'सप्त (7)', 'अष्ट (8)', 'दश (10)'], answer: 3 },
          ],
        },
      ],
    },
    // ─── Unit 13: Nature & Family ───
    {
      u: 13, title: 'Nature & Family', sub: 'प्रकृति एवं परिवार', icon: '\uD83C\uDF33', color: '#16A34A',
      lessons: [
        {
          id: '3.5', title: 'Nature / प्रकृति', icon: '\uD83C\uDF33',
          desc: 'Sky, Water, Fire, Earth, Wind',
          ex: [
            { type: 'info', text: '\uD83C\uDF33 5 Elements (पञ्चतत्त्व):\n\nआकाश (Aakaash) = Sky/Space \uD83C\uDF0C\nवायु (Vaayu) = Air/Wind \uD83C\uDF2C\uFE0F\nअग्नि (Agni) = Fire \uD83D\uDD25\nजल (Jala) = Water \uD83D\uDCA7\nपृथ्वी (Prithvee) = Earth \uD83C\uDF0D\n\nNature words:\nसूर्य (Soorya) = Sun \u2600\uFE0F\nचन्द्र (Chandra) = Moon \uD83C\uDF19\nतारा (Taaraa) = Star \u2B50\nवृक्ष (Vriksha) = Tree \uD83C\uDF33\nनदी (Nadee) = River \uD83C\uDF0A\nपर्वत (Parvata) = Mountain \uD83C\uDFD4\uFE0F' },
            { type: 'match', q: 'Match 5 elements:', pairs: [['आकाश', 'Sky/Space \uD83C\uDF0C'], ['वायु', 'Air/Wind \uD83C\uDF2C\uFE0F'], ['अग्नि', 'Fire \uD83D\uDD25'], ['पृथ्वी', 'Earth \uD83C\uDF0D']] },
            { type: 'multi', q: 'सूर्य (Soorya) = ?', options: ['Moon', 'Star', 'Sun \u2600\uFE0F', 'Sky'], answer: 2 },
            { type: 'listen_pick', prompt: "\u266A Which means 'River'?", audio: 'नदी', answer: 'नदी = River \uD83C\uDF0A', tiles: ['वृक्ष = Tree', 'नदी = River \uD83C\uDF0A', 'पर्वत = Mountain', 'सूर्य = Sun'] },
          ],
        },
        {
          id: '3.6', title: 'Family / परिवार', icon: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66',
          desc: 'Mother, Father, Brother, Sister',
          ex: [
            { type: 'info', text: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66 Family / परिवार:\n\nपिता (Pitaa) = Father\nमाता (Maataa) = Mother\nभ्राता (Bhraataa) = Brother\nभगिनी (Bhaginee) = Sister\nपुत्र (Putra) = Son\nपुत्री (Putree) = Daughter\nगुरु (Guru) = Teacher\nमित्र (Mitra) = Friend\nबालक (Baalak) = Boy\nबालिका (Baalikaa) = Girl' },
            { type: 'match', q: 'Match family:', pairs: [['पिता (Pitaa)', 'Father'], ['माता (Maataa)', 'Mother'], ['भ्राता (Bhraataa)', 'Brother'], ['पुत्री (Putree)', 'Daughter']] },
            { type: 'multi', q: 'गुरु (Guru) means:', options: ['Father', 'Friend', 'Teacher', 'Brother'], answer: 2 },
            { type: 'multi', q: 'मित्र (Mitra) means:', options: ['Mother', 'Friend', 'Son', 'Girl'], answer: 1 },
          ],
        },
        {
          id: '3.7', title: 'Body & Colors / शरीर एवं रंग', icon: '\uD83C\uDFA8',
          desc: 'Head, Hand, Eye + Colors',
          ex: [
            { type: 'info', text: '\uD83C\uDFA8 Body / शरीर:\n\nशिरस् (Shiras) = Head\nनेत्र (Netra) = Eye \uD83D\uDC41\uFE0F\nकर्ण (Karna) = Ear\nहस्त (Hasta) = Hand \u270B\nपाद (Paada) = Foot \uD83E\uDDB6\nहृदय (Hridaya) = Heart \u2764\uFE0F\n\nColors / रंग:\nश्वेत (Shveta) = White\nकृष्ण (Krishna) = Black/Dark\nरक्त (Rakta) = Red\nपीत (Peeta) = Yellow\nनील (Neela) = Blue' },
            { type: 'match', q: 'Match body parts:', pairs: [['नेत्र (Netra)', 'Eye \uD83D\uDC41\uFE0F'], ['हस्त (Hasta)', 'Hand \u270B'], ['हृदय (Hridaya)', 'Heart \u2764\uFE0F'], ['कर्ण (Karna)', 'Ear']] },
            { type: 'multi', q: 'कृष्ण (Krishna) as a color means:', options: ['White', 'Blue', 'Black/Dark', 'Red'], answer: 2 },
            { type: 'match', q: 'Match colors:', pairs: [['श्वेत (Shveta)', 'White'], ['रक्त (Rakta)', 'Red'], ['पीत (Peeta)', 'Yellow'], ['नील (Neela)', 'Blue']] },
          ],
        },
      ],
    },
    // ─── Unit 14: Animals & Food ───
    {
      u: 14, title: 'Animals & Food', sub: 'पशु एवं आहार', icon: '\uD83D\uDC18', color: '#F97316',
      lessons: [
        {
          id: '3.8', title: 'Animals / पशु', icon: '\uD83D\uDC18',
          desc: 'Elephant, Horse, Cow, Bird, Fish',
          ex: [
            { type: 'info', text: '\uD83D\uDC18 Animals / पशु:\n\nगज (Gaja) = Elephant \uD83D\uDC18\nअश्व (Ashva) = Horse \uD83D\uDC0E\nगौ (Gau) = Cow \uD83D\uDC04\nसिंह (Simha) = Lion \uD83E\uDD81\nखग (Khaga) = Bird \uD83D\uDC26\nमत्स्य (Matsya) = Fish \uD83D\uDC1F\nसर्प (Sarpa) = Snake \uD83D\uDC0D\nश्वन् (Shvan) = Dog \uD83D\uDC15\nमार्जार (Maarjaara) = Cat \uD83D\uDC08\nमयूर (Mayoora) = Peacock \uD83E\uDD9A' },
            { type: 'match', q: 'Match animals:', pairs: [['गज (Gaja)', 'Elephant \uD83D\uDC18'], ['सिंह (Simha)', 'Lion \uD83E\uDD81'], ['मयूर (Mayoora)', 'Peacock \uD83E\uDD9A'], ['मत्स्य (Matsya)', 'Fish \uD83D\uDC1F']] },
            { type: 'multi', q: 'खग (Khaga) literally means "sky-goer". It is a:', options: ['Fish', 'Snake', 'Bird \uD83D\uDC26', 'Horse'], answer: 2 },
            { type: 'multi', q: 'श्वन् (Shvan) = ?', options: ['Cat', 'Dog \uD83D\uDC15', 'Horse', 'Cow'], answer: 1 },
          ],
        },
        {
          id: '3.9', title: 'Food & Daily Life / आहार', icon: '\uD83C\uDF5A',
          desc: 'Rice, Water, Milk, Fruit',
          ex: [
            { type: 'info', text: '\uD83C\uDF5A Food & Daily Life:\n\nअन्न (Anna) = Food/Rice \uD83C\uDF5A\nजल (Jala) = Water \uD83D\uDCA7\nदुग्ध (Dugdha) = Milk \uD83E\uDD5B\nफल (Phala) = Fruit \uD83C\uDF4E\nपुष्प (Pushpa) = Flower \uD83C\uDF3A\nगृह (Griha) = Home \uD83C\uDFE0\nपथ (Patha) = Path/Road \uD83D\uDEE3\uFE0F\nवस्त्र (Vastra) = Clothing \uD83D\uDC55\nग्राम (Graama) = Village\nनगर (Nagara) = City \uD83C\uDFD9\uFE0F' },
            { type: 'match', q: 'Match:', pairs: [['अन्न (Anna)', 'Food/Rice \uD83C\uDF5A'], ['दुग्ध (Dugdha)', 'Milk \uD83E\uDD5B'], ['फल (Phala)', 'Fruit \uD83C\uDF4E'], ['पुष्प (Pushpa)', 'Flower \uD83C\uDF3A']] },
            { type: 'multi', q: 'गृह (Griha) means:', options: ['Village', 'City', 'Home \uD83C\uDFE0', 'Road'], answer: 2 },
            { type: 'multi', q: 'नगर (Nagara) = ?', options: ['Village', 'City \uD83C\uDFD9\uFE0F', 'Home', 'Temple'], answer: 1 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 4: GRAMMAR (व्याकरण)
// ═══════════════════════════════════════════════════
{
  section: 'Grammar / व्याकरण',
  sIcon: '\uD83D\uDCD0',
  sColor: '#8B5CF6',
  sDesc: "Panini's system / पाणिनि की प्रणाली",
  units: [
    // ─── Unit 15: Cases ───
    {
      u: 15, title: 'कारक & विभक्ति', sub: 'Cases & Declensions', icon: '\uD83C\uDFAD', color: '#8B5CF6',
      lessons: [
        {
          id: '4.1', title: '7 Cases / ७ विभक्तियाँ', icon: '\uD83C\uDFAF',
          desc: 'Roles words play in sentences',
          ex: [
            { type: 'info', text: '\uD83C\uDFAF 7 Cases (विभक्ति):\n\nSanskrit words change their endings based on their ROLE in the sentence!\n\n1. प्रथमा (Subject) — रामः = Rama (does)\n2. द्वितीया (Object) — रामम् = Rama (to whom)\n3. तृतीया (Instrument) — रामेण = by Rama\n4. चतुर्थी (Purpose) — रामाय = for Rama\n5. पञ्चमी (Source) — रामात् = from Rama\n6. षष्ठी (Possession) — रामस्य = of Rama\n7. सप्तमी (Location) — रामे = in/at Rama' },
            { type: 'match', q: 'Match cases:', pairs: [['रामः (Raamah)', 'Subject / कर्ता'], ['रामम् (Raamam)', 'Object / कर्म'], ['रामेण (Raamena)', 'By/With'], ['रामस्य (Raamasya)', 'Of / का']] },
            { type: 'krama', title: '\uD83D\uDCFF राम declension:', sequence: ['रामः = Subject (who?)', 'रामम् = Object (whom?)', 'रामेण = By/With (how?)', 'रामाय = For (for whom?)', 'रामात् = From (from where?)', 'रामस्य = Of (whose?)', 'रामे = In/At (where?)'], q: 'After रामेण comes?', options: ['रामम्', 'रामाय', 'रामात्', 'रामे'], answer: 1 },
            { type: 'multi', q: 'रामे = ?', options: ['3rd / तृतीया', '5th / पञ्चमी', '6th / षष्ठी', '7th Locative / सप्तमी'], answer: 3 },
            { type: 'smriti', showText: '\uD83D\uDCF8 7 cases:\n\n1. प्रथमा = Subject (who?) \uD83D\uDC64\n2. द्वितीया = Object (whom?) \uD83C\uDFAF\n3. तृतीया = Instrument (by?) \uD83D\uDD27\n4. चतुर्थी = Purpose (for?) \uD83C\uDF81\n5. पञ्चमी = Source (from?) \uD83D\uDEAA\n6. षष्ठी = Possession (whose?) \uD83D\uDCBC\n7. सप्तमी = Location (where?) \uD83D\uDCCD', showTime: 8, q: '\uD83E\uDDE0 "Source/From" = which case?', options: ['तृतीया (3rd)', 'चतुर्थी (4th)', 'पञ्चमी (5th)', 'षष्ठी (6th)'], answer: 2 },
          ],
        },
        {
          id: '4.2', title: 'Three Numbers / तीन वचन', icon: '\uD83D\uDD22',
          desc: 'Singular, Dual, Plural',
          ex: [
            { type: 'info', text: '\uD83D\uDD22 Sanskrit has THREE numbers!\n\nEnglish: Singular & Plural\nSanskrit: Singular, DUAL & Plural!\n\nएकवचन (Singular) = 1\nद्विवचन (Dual) = exactly 2\nबहुवचन (Plural) = 3+\n\nExample with राम:\nरामः = 1 Rama\nरामौ = 2 Ramas (dual!)\nरामाः = 3+ Ramas' },
            { type: 'multi', q: 'Sanskrit has ___ number(s):', options: ['1 (no plurals)', '2 (singular & plural)', '3 (singular, dual, plural!)', '4'], answer: 2 },
            { type: 'match', q: 'Match:', pairs: [['रामः', 'One Rama (singular)'], ['रामौ', 'Two Ramas (dual)'], ['रामाः', 'Many Ramas (plural)'], ['द्विवचन', 'Dual number (exactly 2)']] },
            { type: 'multi', q: 'रामौ means:', options: ['One Rama', 'Two Ramas (dual)', 'Many Ramas', 'No Rama'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 16: Verb Conjugation ───
    {
      u: 16, title: 'Verbs / धातु', sub: 'Conjugation / क्रिया रूप', icon: '\uD83C\uDFC3', color: '#7C3AED',
      lessons: [
        {
          id: '4.3', title: 'Present Tense / वर्तमान काल', icon: '\uD83C\uDFC3',
          desc: 'गच्छ (go), पठ (read), खाद (eat)',
          ex: [
            { type: 'info', text: '\uD83C\uDFC3 Present Tense (लट् लकार):\n\nRoot: गच्छ (gacch = go)\n\nSingular:\nअहं गच्छामि = I go\nत्वं गच्छसि = You go\nसः गच्छति = He goes\n\nDual:\nआवां गच्छावः = We two go\nयुवां गच्छथः = You two go\nतौ गच्छतः = They two go\n\nPlural:\nवयं गच्छामः = We go\nयूयं गच्छथ = You all go\nते गच्छन्ति = They go' },
            { type: 'match', q: 'Match verb forms:', pairs: [['गच्छामि (-आमि)', 'I go'], ['गच्छसि (-असि)', 'You go'], ['गच्छति (-अति)', 'He/She goes'], ['गच्छन्ति (-अन्ति)', 'They go']] },
            { type: 'multi', q: '"She reads" = सा ___:', options: ['पठामि', 'पठसि', 'पठति', 'पठन्ति'], answer: 2 },
            { type: 'krama', title: '\uD83D\uDCFF Verb ending pattern (Singular):', sequence: ['-आमि (aami) = I', '-असि (asi) = You', '-अति (ati) = He/She/It'], q: '"I eat" = अहं खादामि. "He eats" = सः ___:', options: ['खादामि', 'खादसि', 'खादति', 'खादन्ति'], answer: 2 },
            { type: 'smriti', showText: '\uD83D\uDCF8 Common verbs:\n\nगच्छति = goes\nपठति = reads\nखादति = eats\nपिबति = drinks\nहसति = laughs\nवदति = speaks\nपश्यति = sees\nशृणोति = hears\nलिखति = writes\nजानाति = knows', showTime: 7, q: '\uD83E\uDDE0 पश्यति means:', options: ['Goes', 'Reads', 'Sees', 'Eats'], answer: 2 },
          ],
        },
        {
          id: '4.4', title: 'Past & Future / भूत एवं भविष्य', icon: '\u23F3',
          desc: 'Was, Will be / था, होगा',
          ex: [
            { type: 'info', text: '\u23F3 Three Tenses:\n\nPast (लङ्): अगच्छत् = He went\nPresent (लट्): गच्छति = He goes\nFuture (लृट्): गमिष्यति = He will go\n\nPast endings:\nअहम् अगच्छम् = I went\nत्वम् अगच्छः = You went\nसः अगच्छत् = He went\n\nFuture endings:\nगमिष्यामि = I will go\nगमिष्यसि = You will go\nगमिष्यति = He will go' },
            { type: 'match', q: 'Match tenses:', pairs: [['गच्छति', 'He goes (Present)'], ['अगच्छत्', 'He went (Past)'], ['गमिष्यति', 'He will go (Future)'], ['अगच्छम्', 'I went (Past)']] },
            { type: 'multi', q: 'गमिष्यामि = ?', options: ['I went', 'I go', 'I will go', 'He will go'], answer: 2 },
            { type: 'multi', q: 'Past tense in Sanskrit is called:', options: ['लट् लकार', 'लङ् लकार', 'लृट् लकार', 'लोट् लकार'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 17: Sandhi ───
    {
      u: 17, title: 'Sandhi / सन्धि', sub: 'Sound combination rules / ध्वनि संयोजन', icon: '\uD83E\uDDE9', color: '#0891B2',
      lessons: [
        {
          id: '4.5', title: 'Vowel Sandhi / स्वर सन्धि', icon: '\uD83E\uDDE9',
          desc: 'When vowels meet, they merge!',
          ex: [
            { type: 'info', text: '\uD83E\uDDE9 Sandhi = Junction / सन्धि = जोड़\n\nWhen two words meet, their sounds MERGE!\nजब दो शब्द मिलते हैं, ध्वनियाँ मिल जाती हैं!\n\nBasic vowel sandhi rules:\n\nअ + अ/आ = आ (दीर्घ सन्धि)\n  Example: देव + आलय = देवालय (temple)\n\nअ + इ = ए (गुण सन्धि)\n  Example: सुर + इन्द्र = सुरेन्द्र\n\nअ + उ = ओ (गुण सन्धि)\n  Example: सूर्य + उदय = सूर्योदय (sunrise)' },
            { type: 'multi', q: 'देव + आलय = ?', options: ['देवआलय', 'देवालय (अ+आ=आ)', 'देवोलय', 'देवेलय'], answer: 1 },
            { type: 'match', q: 'Match sandhi rules:', pairs: [['अ + अ = आ', 'दीर्घ सन्धि'], ['अ + इ = ए', 'गुण सन्धि'], ['सुर + इन्द्र', 'सुरेन्द्र'], ['सूर्य + उदय', 'सूर्योदय']] },
            { type: 'multi', q: 'सूर्य + उदय = ? (अ + उ = ओ)', options: ['सूर्यउदय', 'सूर्योदय', 'सूर्यौदय', 'सूर्यादय'], answer: 1 },
            { type: 'smriti', showText: '\uD83D\uDCF8 Sandhi types:\n\n1. दीर्घ: same vowel merges long\n   अ+अ=आ, इ+इ=ई, उ+उ=ऊ\n\n2. गुण: अ + इ/उ/ऋ\n   अ+इ=ए, अ+उ=ओ, अ+ऋ=अर्\n\n3. वृद्धि: अ/आ + ए/ओ\n   अ+ए=ऐ, अ+ओ=औ (सदा + एव = सदैव)', showTime: 8, q: '\uD83E\uDDE0 अ + ऋ = ?', options: ['ऐ', 'ओ', 'अर्', 'औ'], answer: 2 },
          ],
        },
      ],
    },
    // ─── Unit 18: Compounds ───
    {
      u: 18, title: 'Compounds / समास', sub: 'Word combinations / शब्द संयोजन', icon: '\uD83E\uDDF1', color: '#6D28D9',
      lessons: [
        {
          id: '4.6', title: 'Sanskrit Compounds / समास', icon: '\uD83E\uDDF1',
          desc: 'Combine words into one!',
          ex: [
            { type: 'info', text: '\uD83E\uDDF1 Compounds (समास):\n\nSanskrit combines words into single compound words!\nThis is how Sanskrit creates complex ideas concisely.\n\nTypes:\n\n1. द्वन्द्व (And-compound):\n   राम + सीता = रामसीते (Rama and Sita)\n\n2. तत्पुरुष (Determinative):\n   राज + पुत्र = राजपुत्रः (King\'s son = Prince)\n\n3. बहुव्रीहि (Possessive):\n   दश + आनन = दशानन (Ten-faced = Ravana)\n\n4. अव्ययीभाव (Adverbial):\n   उप + नगर = उपनगर (Near city = suburb)' },
            { type: 'match', q: 'Match compound types:', pairs: [['द्वन्द्व', 'And-compound (A and B)'], ['तत्पुरुष', "Determinative (A's B)"], ['बहुव्रीहि', 'Possessive (having AB)'], ['राजपुत्रः', "King's son = Prince"]] },
            { type: 'multi', q: 'दशानन (Ten-faced) refers to:', options: ['Rama', 'Hanuman', 'Ravana', 'Krishna'], answer: 2 },
            { type: 'multi', q: 'राज + पुत्र = राजपुत्रः is which type?', options: ['द्वन्द्व', 'तत्पुरुष', 'बहुव्रीहि', 'अव्ययीभाव'], answer: 1 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 5: CONVERSATION (संवाद)
// ═══════════════════════════════════════════════════
{
  section: 'Conversation / संवाद',
  sIcon: '\uD83D\uDDE3\uFE0F',
  sColor: '#0EA5E9',
  sDesc: 'Speak Sanskrit in daily life / दैनिक जीवन में संस्कृत',
  units: [
    {
      u: 19, title: 'Daily Phrases', sub: 'Everyday Sanskrit / दैनिक संस्कृत', icon: '\u2600\uFE0F', color: '#0EA5E9',
      lessons: [
        {
          id: '5.1', title: 'At Home / गृहे', icon: '\uD83C\uDFE0',
          desc: 'What is this? Where? When?',
          ex: [
            { type: 'info', text: '\uD83C\uDFE0 Useful questions:\n\nकिम् (Kim) = What?\nकः (Kah) = Who? (m.)\nका (Kaa) = Who? (f.)\nकुत्र (Kutra) = Where?\nकदा (Kadaa) = When?\nकथम् (Katham) = How?\nकिमर्थम् (Kimartham) = Why?\n\nExamples:\nएतत् किम्? = What is this?\nभवान् कः? = Who are you? (m.)\nसः कुत्र गच्छति? = Where does he go?\nत्वं कदा आगच्छसि? = When do you come?' },
            { type: 'match', q: 'Match question words:', pairs: [['किम् (Kim)', 'What?'], ['कुत्र (Kutra)', 'Where?'], ['कदा (Kadaa)', 'When?'], ['कथम् (Katham)', 'How?']] },
            { type: 'multi', q: 'एतत् किम्? means:', options: ['Who is this?', 'What is this?', 'Where is this?', 'When is this?'], answer: 1 },
            { type: 'multi', q: '"Why?" in Sanskrit:', options: ['किम्', 'कुत्र', 'कदा', 'किमर्थम्'], answer: 3 },
          ],
        },
        {
          id: '5.2', title: 'Responses / उत्तर', icon: '\uD83D\uDCAC',
          desc: 'Yes, No, I want, I know',
          ex: [
            { type: 'info', text: '\uD83D\uDCAC Useful responses:\n\nआम् (Aam) = Yes\nन (Na) = No\nअस्ति (Asti) = There is / It exists\nनास्ति (Naasti) = There is not\nमम नाम... (Mama naama) = My name is...\nमह्यम् रोचते (Mahyam rochate) = I like\nअहं जानामि (Aham jaanaami) = I know\nअहं न जानामि = I don\'t know\nकृपया (Kripayaa) = Please\nपुनः वदतु (Punah vadatu) = Say again' },
            { type: 'match', q: 'Match responses:', pairs: [['आम् (Aam)', 'Yes'], ['न (Na)', 'No'], ['कृपया (Kripayaa)', 'Please'], ['अहं जानामि', 'I know']] },
            { type: 'multi', q: '"My name is..." = ?', options: ['अहं जानामि', 'मम नाम...', 'मह्यम् रोचते', 'कृपया'], answer: 1 },
            { type: 'multi', q: 'नास्ति means:', options: ['Yes, it is', 'There is not / It does not exist', 'I know', 'Please'], answer: 1 },
          ],
        },
        {
          id: '5.3', title: 'Shopping & Travel / बाजार', icon: '\uD83D\uDED2',
          desc: 'How much? I want. Give me.',
          ex: [
            { type: 'info', text: '\uD83D\uDED2 Shopping & Travel:\n\nकियत् मूल्यम्? = How much (price)?\nअहम् इच्छामि = I want\nमह्यं यच्छतु = Give me (please)\nबहु = Much/Many\nअल्प = Little/Few\nमहत् = Big\nलघु = Small\nसुन्दर = Beautiful\nउत्तम = Best/Excellent\nपर्याप्तम् = Enough' },
            { type: 'match', q: 'Match:', pairs: [['कियत् मूल्यम्?', 'How much?'], ['अहम् इच्छामि', 'I want'], ['सुन्दर', 'Beautiful'], ['पर्याप्तम्', 'Enough']] },
            { type: 'multi', q: 'मह्यं यच्छतु means:', options: ['How much?', 'Give me', 'I want', 'Enough'], answer: 1 },
            { type: 'multi', q: '"Big" in Sanskrit:', options: ['लघु', 'अल्प', 'महत्', 'बहु'], answer: 2 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 6: WISDOM (सुभाषित)
// ═══════════════════════════════════════════════════
{
  section: 'Wisdom / सुभाषित',
  sIcon: '\uD83D\uDCDC',
  sColor: '#B45309',
  sDesc: 'Ancient wisdom verses / प्राचीन ज्ञान श्लोक',
  units: [
    {
      u: 20, title: 'Subhashita / सुभाषित', sub: 'Wisdom sayings / ज्ञान वचन', icon: '\uD83E\uDDD8', color: '#B45309',
      lessons: [
        {
          id: '6.1', title: 'Famous Verses 1', icon: '\uD83D\uDCDC',
          desc: 'विद्या, सत्य, धर्म',
          ex: [
            { type: 'info', text: '\uD83D\uDCDC Famous Sanskrit verses:\n\n1. विद्या ददाति विनयम्\n   (Vidyaa dadaati vinayam)\n   = Knowledge gives humility\n\n2. सत्यमेव जयते\n   (Satyameva jayate)\n   = Truth alone triumphs\n   (India\'s national motto!)\n\n3. वसुधैव कुटुम्बकम्\n   (Vasudhaiva kutumbakam)\n   = The world is one family\n\n4. अहिंसा परमो धर्मः\n   (Ahimsaa paramo dharmah)\n   = Non-violence is the highest duty' },
            { type: 'match', q: 'Match verses:', pairs: [['विद्या ददाति विनयम्', 'Knowledge gives humility'], ['सत्यमेव जयते', 'Truth alone triumphs'], ['वसुधैव कुटुम्बकम्', 'World is one family'], ['अहिंसा परमो धर्मः', 'Non-violence = highest duty']] },
            { type: 'multi', q: "India's national motto is:", options: ['विद्या ददाति विनयम्', 'सत्यमेव जयते', 'वसुधैव कुटुम्बकम्', 'अहिंसा परमो धर्मः'], answer: 1 },
            { type: 'multi', q: 'वसुधैव कुटुम्बकम् means:', options: ['Truth wins', 'Knowledge is power', 'The world is one family', 'Non-violence'], answer: 2 },
            { type: 'smriti', showText: '\uD83D\uDCF8 Memorize these:\n\n\uD83D\uDCDA विद्या = Knowledge\n\u2696\uFE0F सत्य = Truth\n\uD83C\uDF0D वसुधा = Earth\n\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66 कुटुम्ब = Family\n\u262E\uFE0F अहिंसा = Non-violence\n\uD83D\uDE4F धर्म = Duty/Righteousness', showTime: 7, q: '\uD83E\uDDE0 विद्या means:', options: ['Truth', 'Family', 'Knowledge', 'Peace'], answer: 2 },
          ],
        },
        {
          id: '6.2', title: 'Famous Verses 2', icon: '\uD83C\uDF1F',
          desc: 'Gita, Upanishad, Panchatantra',
          ex: [
            { type: 'info', text: '\uD83C\uDF1F More wisdom:\n\n5. कर्मण्येवाधिकारस्ते\n   (Karmanyevaadhikaaraste)\n   = You have the right to action (only)\n   (Bhagavad Gita 2.47)\n\n6. तमसो मा ज्योतिर्गमय\n   (Tamaso maa jyotirgamaya)\n   = Lead me from darkness to light\n   (Brihadaranyaka Upanishad)\n\n7. परोपकारः पुण्याय\n   (Paropakarah punyaaya)\n   = Helping others is virtue\n\n8. उद्यमेन हि सिध्यन्ति कार्याणि\n   = Tasks succeed through effort' },
            { type: 'multi', q: 'तमसो मा ज्योतिर्गमय — "Lead me from ___ to ___"', options: ['Silence to sound', 'Darkness to light', 'Earth to sky', 'Fear to peace'], answer: 1 },
            { type: 'match', q: 'Match sources:', pairs: [['कर्मण्येवाधिकारस्ते', 'Bhagavad Gita'], ['तमसो मा ज्योतिर्गमय', 'Upanishad'], ['परोपकारः पुण्याय', 'Helping = Virtue'], ['उद्यमेन हि सिध्यन्ति', 'Effort = Success']] },
            { type: 'multi', q: 'परोपकारः means:', options: ['Self-study', 'Helping others', 'Meditation', 'Charity'], answer: 1 },
            { type: 'smriti', showText: '\uD83D\uDCF8 Key concepts:\n\n\uD83C\uDFAF कर्म (Karma) = Action/Deed\n\uD83D\uDD2E तमस् (Tamas) = Darkness\n\u2728 ज्योतिस् (Jyotis) = Light\n\uD83E\uDD1D परोपकार = Helping others\n\uD83D\uDCAA उद्यम (Udyama) = Effort\n\uD83C\uDF1F पुण्य (Punya) = Virtue/Merit', showTime: 7, q: '\uD83E\uDDE0 ज्योतिस् means:', options: ['Darkness', 'Light', 'Sound', 'Truth'], answer: 1 },
          ],
        },
        {
          id: '6.3', title: 'Shlokas to Memorize', icon: '\uD83D\uDE4F',
          desc: 'Daily prayer verses / दैनिक प्रार्थना',
          ex: [
            { type: 'info', text: '\uD83D\uDE4F Daily verses:\n\n\u2609 Morning:\nगुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः\n= Guru is Brahma, Vishnu, and Shiva\n\n\u2609 Before meals:\nब्रह्मार्पणं ब्रह्म हविः\n= The offering is Brahman (Gita 4.24)\n\n\u2609 Evening:\nॐ सह नाववतु सह नौ भुनक्तु\n= May we be protected together\n   (Upanishad peace prayer)\n\n\u2609 Universal:\nसर्वे भवन्तु सुखिनः\n= May all be happy' },
            { type: 'match', q: 'Match:', pairs: [['गुरुर्ब्रह्मा गुरुर्विष्णुः', 'Guru = Brahma, Vishnu, Shiva'], ['सर्वे भवन्तु सुखिनः', 'May all be happy'], ['सह नाववतु', 'May we be protected'], ['ॐ शान्तिः शान्तिः शान्तिः', 'Om Peace Peace Peace']] },
            { type: 'multi', q: 'सर्वे भवन्तु सुखिनः means:', options: ['May truth win', 'May all be happy', 'May God protect', 'May light shine'], answer: 1 },
            { type: 'multi', q: 'How many times is शान्तिः chanted?', options: ['Once', 'Twice', 'Thrice (for 3 types of suffering)', 'Four times'], answer: 2 },
            { type: 'smriti', showText: '\uD83D\uDCF8 The 3 शान्तिः:\n\nChanted thrice for relief from:\n\n1. आधिदैविक = Divine/Natural disasters\n2. आधिभौतिक = External/Physical troubles\n3. आध्यात्मिक = Internal/Spiritual suffering\n\nॐ शान्तिः शान्तिः शान्तिः', showTime: 7, q: '\uD83E\uDDE0 शान्तिः is chanted thrice because:', options: ['It sounds nice', 'For 3 types of suffering', 'For 3 gods', 'Ancient tradition only'], answer: 1 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 7: ADVANCED GRAMMAR (उन्नत व्याकरण)
// ═══════════════════════════════════════════════════
{
  section: 'Advanced Grammar / उन्नत व्याकरण',
  sIcon: '\uD83E\uDDE0',
  sColor: '#6366F1',
  sDesc: 'Gender, prefixes, suffixes / लिंग, उपसर्ग, प्रत्यय',
  units: [
    {
      u: 21, title: 'Gender / लिंग', sub: 'Masculine, Feminine, Neuter', icon: '\u2696\uFE0F', color: '#6366F1',
      lessons: [
        {
          id: '7.1', title: '3 Genders / तीन लिंग', icon: '\u2696\uFE0F',
          desc: 'पुल्लिंग, स्त्रीलिंग, नपुंसकलिंग',
          ex: [
            { type: 'info', text: '\u2696\uFE0F Sanskrit has 3 genders:\n\nपुल्लिंग (Masculine):\n  रामः, बालकः, देवः, गजः\n  (Ends in -अः usually)\n\nस्त्रीलिंग (Feminine):\n  सीता, बालिका, देवी, नदी\n  (Ends in -आ or -ई usually)\n\nनपुंसकलिंग (Neuter):\n  फलम्, जलम्, वनम्, पुस्तकम्\n  (Ends in -अम् usually)\n\nGender affects ALL word endings!' },
            { type: 'match', q: 'Match to gender:', pairs: [['रामः (Raamah)', 'Masculine / पुल्लिंग'], ['सीता (Seetaa)', 'Feminine, -आ ending / स्त्रीलिंग'], ['फलम् (Phalam)', 'Neuter / नपुंसकलिंग'], ['नदी (Nadee)', 'Feminine, -ई ending / स्त्रीलिंग']] },
            { type: 'multi', q: 'वनम् (Vanam = forest) is:', options: ['Masculine', 'Feminine', 'Neuter (-अम्)', 'No gender'], answer: 2 },
            { type: 'multi', q: 'Words ending in -अः are usually:', options: ['Feminine', 'Neuter', 'Masculine', 'All genders'], answer: 2 },
          ],
        },
        {
          id: '7.2', title: 'Feminine Forms / स्त्रीलिंग', icon: '\uD83D\uDC51',
          desc: 'How to make feminine words',
          ex: [
            { type: 'info', text: '\uD83D\uDC51 Making feminine forms:\n\nAdd -आ or -ई:\nबालकः (boy) \u2192 बालिका (girl)\nदेवः (god) \u2192 देवी (goddess)\nसिंहः (lion) \u2192 सिंही (lioness)\n\nCommon patterns:\n-अ \u2192 -आ: छात्रः \u2192 छात्रा (student)\n-अ \u2192 -ई: देवः \u2192 देवी (god/goddess)\n\nSome words change completely:\nपिता (father) \u2192 माता (mother)\nभ्राता (brother) \u2192 भगिनी (sister)' },
            { type: 'match', q: 'Match masculine \u2192 feminine:', pairs: [['बालकः (boy)', 'बालिका (girl)'], ['देवः (god)', 'देवी (goddess)'], ['पुत्रः (son)', 'पुत्री (daughter)'], ['सिंहः (lion)', 'सिंही (lioness)']] },
            { type: 'multi', q: 'छात्रः (male student) \u2192 ?', options: ['छात्री', 'छात्रा', 'छात्रम्', 'छात्रौ'], answer: 1 },
            { type: 'multi', q: 'Which pair changes completely (not just suffix)?', options: ['बालकः/बालिका', 'पिता/माता', 'देवः/देवी', 'सिंहः/सिंही'], answer: 1 },
          ],
        },
      ],
    },
    {
      u: 22, title: 'Prefixes / उपसर्ग', sub: '22 Sanskrit prefixes', icon: '\uD83D\uDD17', color: '#4F46E5',
      lessons: [
        {
          id: '7.3', title: 'Common Prefixes / उपसर्ग', icon: '\uD83D\uDD17',
          desc: 'प्र, परा, अप, सम्, अनु, अव...',
          ex: [
            { type: 'info', text: '\uD83D\uDD17 Prefixes (उपसर्ग) change verb meaning:\n\nप्र (pra) = forward, forth\n  गच्छति \u2192 प्रगच्छति (goes forth)\n\nसम् (sam) = together, complete\n  गच्छति \u2192 संगच्छति (goes together)\n\nवि (vi) = apart, special\n  ज्ञान \u2192 विज्ञान (science = special knowledge)\n\nउप (upa) = near, under\n  वन \u2192 उपवन (garden = near-forest)\n\nअनु (anu) = after, following\n  गच्छति \u2192 अनुगच्छति (follows)\n\nपरि (pari) = around\n  वार \u2192 परिवार (family = those around you)' },
            { type: 'match', q: 'Match prefixes:', pairs: [['प्र (pra)', 'Forward/Forth'], ['सम् (sam)', 'Together/Complete'], ['वि (vi)', 'Apart/Special'], ['अनु (anu)', 'After/Following']] },
            { type: 'multi', q: 'विज्ञान (Vijnaana = Science) uses prefix:', options: ['प्र (forward)', 'सम् (together)', 'वि (special)', 'अनु (after)'], answer: 2 },
            { type: 'multi', q: 'परिवार (family) literally means:', options: ['Forward people', 'Special group', 'Those around you', 'After others'], answer: 2 },
            { type: 'smriti', showText: '\uD83D\uDCF8 Prefixes in modern words:\n\nप्र = प्रगति (progress)\nसम् = संस्कृत (refined/perfected)\nवि = विज्ञान (science)\nउप = उपग्रह (satellite)\nअनु = अनुवाद (translation)\nपरि = परिवार (family)\nप्रति = प्रतिक्रिया (reaction)\nसु = सुन्दर (beautiful)', showTime: 7, q: '\uD83E\uDDE0 संस्कृत literally means:', options: ['Ancient language', 'God\'s language', 'Refined/Perfected (सम्+कृत)', 'Sacred text'], answer: 2 },
          ],
        },
      ],
    },
    {
      u: 23, title: 'Suffixes / प्रत्यय', sub: 'Word-building suffixes', icon: '\uD83E\uDDF1', color: '#7C3AED',
      lessons: [
        {
          id: '7.4', title: 'Common Suffixes / प्रत्यय', icon: '\uD83E\uDDF1',
          desc: '-त्व, -ता, -इन्, -वत्, -मय',
          ex: [
            { type: 'info', text: '\uD83E\uDDF1 Suffixes build new words:\n\n-त्व (-tva) = "-ness" (abstract quality)\n  मनुष्य \u2192 मनुष्यत्व (humanity)\n  देव \u2192 देवत्व (divinity)\n\n-ता (-taa) = "-ness" (state)\n  सुन्दर \u2192 सुन्दरता (beauty)\n  महत् \u2192 महत्ता (greatness)\n\n-वत् (-vat) = "having, like"\n  बल \u2192 बलवत् (powerful)\n  भग \u2192 भगवत् (blessed = Bhagavat)\n\n-मय (-maya) = "full of, made of"\n  आनन्द \u2192 आनन्दमय (full of bliss)\n  सत्य \u2192 सत्यमय (full of truth)' },
            { type: 'match', q: 'Match suffixes:', pairs: [['-त्व (-tva)', '-ness (abstract)'], ['-ता (-taa)', '-ness (state)'], ['-वत् (-vat)', 'Having/Like'], ['-मय (-maya)', 'Full of/Made of']] },
            { type: 'multi', q: 'भगवत् (Bhagavat) uses suffix:', options: ['-त्व', '-ता', '-वत् (having)', '-मय'], answer: 2 },
            { type: 'multi', q: 'आनन्दमय means:', options: ['Without bliss', 'Full of bliss', 'Near bliss', 'After bliss'], answer: 1 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 8: LITERATURE (साहित्य)
// ═══════════════════════════════════════════════════
{
  section: 'Literature / साहित्य',
  sIcon: '\uD83D\uDCDA',
  sColor: '#B91C1C',
  sDesc: 'Stories, epics & poetry / कथा, महाकाव्य एवं काव्य',
  units: [
    {
      u: 24, title: 'Panchatantra / पञ्चतन्त्र', sub: 'Animal fables / पशु कथाएँ', icon: '\uD83E\uDD81', color: '#B91C1C',
      lessons: [
        {
          id: '8.1', title: 'Panchatantra Stories', icon: '\uD83E\uDD81',
          desc: 'Wisdom through animal fables',
          ex: [
            { type: 'info', text: '\uD83E\uDD81 Panchatantra (पञ्चतन्त्र):\n\n5 books of animal fables by Vishnu Sharma\nWritten ~300 BCE — oldest fable collection!\n\nThe 5 books:\n1. मित्रभेद = Loss of Friends\n2. मित्रसम्प्राप्ति = Gaining Friends\n3. काकोलूकीय = War & Peace (Crows & Owls)\n4. लब्धप्रणाश = Loss of Gains\n5. अपरीक्षितकारक = Rash Actions\n\nFamous moral: "A learned person is honored everywhere"\nविद्वान् सर्वत्र पूज्यते' },
            { type: 'multi', q: 'Panchatantra was written by:', options: ['Valmiki', 'Vyasa', 'Vishnu Sharma', 'Kalidasa'], answer: 2 },
            { type: 'match', q: 'Match Panchatantra books:', pairs: [['मित्रभेद', 'Loss of Friends'], ['मित्रसम्प्राप्ति', 'Gaining Friends'], ['काकोलूकीय', 'Crows & Owls'], ['लब्धप्रणाश', 'Loss of Gains']] },
            { type: 'multi', q: 'पञ्चतन्त्र means:', options: ['Five stories', 'Five strategies/principles', 'Five animals', 'Five gods'], answer: 1 },
            { type: 'smriti', showText: '\uD83D\uDCF8 Panchatantra morals:\n\n\uD83E\uDD89 Unity is strength\n   संघे शक्तिः\n\n\uD83D\uDC22 Slow & steady wins\n   धैर्येण सर्वं सिध्यति\n\n\uD83E\uDD81 Think before you act\n   अपरीक्षितं न कुर्यात्\n\n\uD83D\uDC26 Knowledge > Wealth\n   विद्या धनं सर्वधनं प्रधानम्', showTime: 7, q: '\uD83E\uDDE0 संघे शक्तिः means:', options: ['Knowledge is power', 'Unity is strength', 'Patience wins', 'Truth triumphs'], answer: 1 },
          ],
        },
      ],
    },
    {
      u: 25, title: 'Epics / महाकाव्य', sub: 'Ramayana & Mahabharata', icon: '\uD83C\uDFF9', color: '#DC2626',
      lessons: [
        {
          id: '8.2', title: 'Ramayana / रामायण', icon: '\uD83C\uDFF9',
          desc: 'The first poem / आदिकाव्य',
          ex: [
            { type: 'info', text: '\uD83C\uDFF9 Ramayana (रामायण):\n\nAuthor: Valmiki / वाल्मीकि\nVerse count: 24,000 shlokas!\nKnown as: आदिकाव्य (First Poem)\n\n7 Books (काण्ड):\n1. बालकाण्ड = Childhood\n2. अयोध्याकाण्ड = Ayodhya\n3. अरण्यकाण्ड = Forest\n4. किष्किन्धाकाण्ड = Kishkindha\n5. सुन्दरकाण्ड = Beauty (Lanka)\n6. युद्धकाण्ड = War\n7. उत्तरकाण्ड = Epilogue\n\nरामायण = राम + अयन = Journey of Rama' },
            { type: 'multi', q: 'Ramayana was written by:', options: ['Vyasa', 'Valmiki / वाल्मीकि', 'Kalidasa', 'Tulsidas'], answer: 1 },
            { type: 'match', q: 'Match characters:', pairs: [['राम (Raama)', 'Hero / Prince of Ayodhya'], ['सीता (Seetaa)', 'Wife of Rama'], ['हनुमान् (Hanumaan)', 'Monkey devotee'], ['रावण (Raavana)', 'King of Lanka']] },
            { type: 'multi', q: 'रामायण literally means:', options: ['Story of Rama', 'Journey of Rama (राम + अयन)', 'Victory of Rama', 'Kingdom of Rama'], answer: 1 },
          ],
        },
        {
          id: '8.3', title: 'Mahabharata / महाभारत', icon: '\u2694\uFE0F',
          desc: 'The great epic / महाकाव्य',
          ex: [
            { type: 'info', text: '\u2694\uFE0F Mahabharata (महाभारत):\n\nAuthor: Vyasa / व्यास\nVerse count: 100,000 shlokas!\nLongest poem EVER written!\n\nमहाभारत = महा + भारत = Great India\n\nKey teaching (from Gita):\nयदा यदा हि धर्मस्य ग्लानिर्भवति भारत\n= Whenever dharma declines, O Bharata...\n\nThe Bhagavad Gita (700 verses) is in\nthe Bhishma Parva (6th of 18 books)!' },
            { type: 'multi', q: 'Mahabharata was written by:', options: ['Valmiki', 'Vyasa / व्यास', 'Kalidasa', 'Panini'], answer: 1 },
            { type: 'match', q: 'Match:', pairs: [['महाभारत', 'Great India (100k verses)'], ['भगवद्गीता', 'Song of God (Bhishma Parva)'], ['व्यास', 'Author of Mahabharata'], ['रामायण', 'Journey of Rama (24k verses)']] },
            { type: 'multi', q: 'Bhagavad Gita is part of:', options: ['Ramayana', 'Mahabharata', 'Vedas', 'Upanishads'], answer: 1 },
            { type: 'multi', q: 'How many verses in Mahabharata?', options: ['24,000', '50,000', '100,000', '200,000'], answer: 2 },
          ],
        },
      ],
    },
    {
      u: 26, title: 'Kalidasa / कालिदास', sub: 'Greatest Sanskrit poet', icon: '\uD83C\uDFAD', color: '#9F1239',
      lessons: [
        {
          id: '8.4', title: 'Works of Kalidasa', icon: '\uD83C\uDFAD',
          desc: 'Shakespeare of Sanskrit',
          ex: [
            { type: 'info', text: '\uD83C\uDFAD Kalidasa (कालिदास):\n\n"Shakespeare of India" (~4th century CE)\nMaster of simile (उपमा कालिदासस्य)\n\nMajor works:\n\uD83C\uDFAD अभिज्ञानशाकुन्तलम् = Shakuntala (play)\n\uD83D\uDCDC मेघदूतम् = Cloud Messenger (poem)\n\uD83C\uDF1F रघुवंशम् = Dynasty of Raghu (epic)\n\u2600\uFE0F ऋतुसंहारम् = Gathering of Seasons\n\uD83C\uDFAD विक्रमोर्वशीयम् = Vikrama & Urvashi\n\nFamous line:\nउपमा कालिदासस्य = "Kalidasa\'s similes (are unmatched)"' },
            { type: 'match', q: 'Match Kalidasa works:', pairs: [['अभिज्ञानशाकुन्तलम्', 'Play about Shakuntala'], ['मेघदूतम्', 'Cloud Messenger (poem)'], ['रघुवंशम्', 'Dynasty of Raghu'], ['ऋतुसंहारम्', 'Gathering of Seasons']] },
            { type: 'multi', q: 'Kalidasa is called:', options: ['Father of Grammar', 'Shakespeare of India', 'First Poet', 'King of Poets'], answer: 1 },
            { type: 'multi', q: 'मेघदूतम् means:', options: ['Sky poem', 'Cloud Messenger', 'Rain song', 'Wind tale'], answer: 1 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 9: ETYMOLOGY (शब्द व्युत्पत्ति)
// ═══════════════════════════════════════════════════
{
  section: 'Word Origins / व्युत्पत्ति',
  sIcon: '\uD83C\uDF10',
  sColor: '#0D9488',
  sDesc: 'Sanskrit roots in world languages / विश्व भाषाओं में संस्कृत',
  units: [
    {
      u: 27, title: 'English from Sanskrit', sub: 'Cognates & borrowings', icon: '\uD83C\uDF10', color: '#0D9488',
      lessons: [
        {
          id: '9.1', title: 'Indo-European Cognates', icon: '\uD83C\uDF10',
          desc: 'Same roots, different languages!',
          ex: [
            { type: 'info', text: '\uD83C\uDF10 Sanskrit \u2192 English cognates:\n\nमातृ (Maatri) \u2192 Mother\nपितृ (Pitri) \u2192 Father (Latin: Pater)\nभ्रातृ (Bhraatri) \u2192 Brother\nनव (Nava) \u2192 New, Novel\nनाम (Naama) \u2192 Name\nत्रि (Tri) \u2192 Three, Triple\nद्वि (Dvi) \u2192 Two, Dual\nदन्त (Danta) \u2192 Dental, Tooth (Dent)\nज्ञा (Jnaa) \u2192 Know (Gno-sis)\nविद् (Vid) \u2192 Video (to see)\nअग्नि (Agni) \u2192 Ignite\nयुग (Yuga) \u2192 Yoke, Yoga' },
            { type: 'match', q: 'Match Sanskrit \u2192 English:', pairs: [['मातृ (Maatri)', 'Mother'], ['नव (Nava)', 'New/Novel'], ['अग्नि (Agni)', 'Ignite'], ['दन्त (Danta)', 'Dental/Tooth']] },
            { type: 'multi', q: '"Video" comes from Sanskrit:', options: ['विद् (Vid = to see)', 'वि (Vi = apart)', 'वायु (Vaayu)', 'वन (Vana)'], answer: 0 },
            { type: 'multi', q: '"Ignite" comes from:', options: ['इन्द्र (Indra)', 'अग्नि (Agni = Fire)', 'ईश (Eesha)', 'ऊर्जा (Oorjaa)'], answer: 1 },
            { type: 'smriti', showText: '\uD83D\uDCF8 More cognates:\n\nयुग (Yuga) \u2192 Yoke, Yoga\nमध्य (Madhya) \u2192 Middle, Mid\nवाच् (Vaach) \u2192 Voice, Vocal\nनक्त (Nakta) \u2192 Night, Nocturnal\nस्थ (Stha) \u2192 Stand, State, Station\nपद (Pada) \u2192 Foot, Pedal, Pedestrian\nविधवा (Vidhavaa) \u2192 Widow\nसर्प (Sarpa) \u2192 Serpent', showTime: 7, q: '\uD83E\uDDE0 "Serpent" comes from:', options: ['सूर्य (Sun)', 'सर्प (Sarpa = Snake)', 'सत्य (Truth)', 'शक्ति (Power)'], answer: 1 },
          ],
        },
        {
          id: '9.2', title: 'Sanskrit in Technology', icon: '\uD83D\uDCBB',
          desc: 'Ancient words, modern meanings',
          ex: [
            { type: 'info', text: '\uD83D\uDCBB Sanskrit in modern Hindi/tech:\n\nदूरदर्शन = Television\n  दूर (far) + दर्शन (seeing)\n\nआकाशवाणी = Radio\n  आकाश (sky) + वाणी (voice)\n\nअन्तर्जाल = Internet\n  अन्तर् (between) + जाल (net)\n\nसंगणक = Computer\n  सम् (together) + गणक (counter)\n\nचलदूरभाष = Mobile phone\n  चल (moving) + दूर (far) + भाष (speak)\n\nविमान = Airplane\n  वि (special) + मान (vehicle)' },
            { type: 'match', q: 'Match modern terms:', pairs: [['दूरदर्शन', 'Television (far-seeing)'], ['अन्तर्जाल', 'Internet (between-net)'], ['संगणक', 'Computer (counter)'], ['विमान', 'Airplane (special vehicle)']] },
            { type: 'multi', q: 'आकाशवाणी literally means:', options: ['Sky-seeing', 'Sky-voice (= Radio)', 'Sky-net', 'Far-voice'], answer: 1 },
            { type: 'multi', q: 'The genius of Sanskrit: you can create new words by:', options: ['Borrowing from English', 'Combining roots + prefixes + suffixes', 'Random invention', 'Copying other languages'], answer: 1 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 10: READING PRACTICE (पठन अभ्यास)
// ═══════════════════════════════════════════════════
{
  section: 'Reading / पठन',
  sIcon: '\uD83D\uDCD6',
  sColor: '#CA8A04',
  sDesc: 'Read real Sanskrit texts / वास्तविक संस्कृत पठन',
  units: [
    {
      u: 28, title: 'Simple Stories', sub: 'Read & understand / पढ़ें एवं समझें', icon: '\uD83D\uDCD6', color: '#CA8A04',
      lessons: [
        {
          id: '10.1', title: 'Story: The Thirsty Crow', icon: '\uD83D\uDCD6',
          desc: 'तृष्णार्तः काकः — A famous fable',
          ex: [
            { type: 'info', text: '\uD83D\uDCD6 Story / कथा:\n\nएकः काकः अस्ति। (There is one crow.)\nसः तृष्णार्तः अस्ति। (He is thirsty.)\nसः जलम् इच्छति। (He wants water.)\nसः एकं घटं पश्यति। (He sees a pot.)\nघटे अल्पं जलम् अस्ति। (In the pot, little water is.)\nसः पाषाणान् क्षिपति। (He throws pebbles.)\nजलम् उपरि आगच्छति। (Water comes up.)\nसः जलं पिबति। (He drinks water.)\nसः सुखी भवति। (He becomes happy.)\n\n\uD83D\uDCA1 Moral: बुद्धिः बलात् श्रेष्ठा\n= Intelligence is better than strength' },
            { type: 'multi', q: 'एकः काकः अस्ति = ?', options: ['There is one crow', 'The crow flies', 'Two crows are there', 'The crow is happy'], answer: 0 },
            { type: 'multi', q: 'सः जलं इच्छति = ?', options: ['He sees water', 'He wants water', 'He drinks water', 'He throws water'], answer: 1 },
            { type: 'match', q: 'Match story vocabulary:', pairs: [['काकः (Kaakah)', 'Crow'], ['तृष्णार्तः', 'Thirsty'], ['घटः (Ghatah)', 'Pot'], ['पाषाणः (Paashaanah)', 'Pebble/Stone']] },
            { type: 'sequence', title: 'Order the story:', items: ['काकः तृष्णार्तः अस्ति (Crow is thirsty)', 'सः घटं पश्यति (He sees a pot)', 'सः पाषाणान् क्षिपति (He throws pebbles)', 'सः जलं पिबति (He drinks water)'] },
          ],
        },
        {
          id: '10.2', title: 'Story: Lion & Mouse', icon: '\uD83E\uDD81',
          desc: 'सिंहः मूषकश्च — Help comes from unlikely places',
          ex: [
            { type: 'info', text: '\uD83E\uDD81 Story / कथा:\n\nएकः सिंहः वने निद्रां करोति।\n(A lion sleeps in the forest.)\n\nएकः मूषकः सिंहस्य उपरि धावति।\n(A mouse runs over the lion.)\n\nसिंहः क्रुद्धः भवति।\n(The lion becomes angry.)\n\nमूषकः वदति — "मां मुञ्च! अहं तव सहायं करिष्यामि।"\n(Mouse says — "Release me! I will help you.")\n\nएकदा सिंहः जाले बद्धः भवति।\n(One day the lion is trapped in a net.)\n\nमूषकः जालं कर्तयति।\n(The mouse cuts the net.)\n\nसिंहः मुक्तः भवति।\n(The lion is freed.)\n\n\uD83D\uDCA1 Moral: न कोऽपि लघुः\n= No one is insignificant' },
            { type: 'multi', q: 'सिंहः वने निद्रां करोति = ?', options: ['The lion hunts in the forest', 'The lion sleeps in the forest', 'The lion runs in the forest', 'The lion eats in the forest'], answer: 1 },
            { type: 'match', q: 'Match vocabulary:', pairs: [['सिंहः', 'Lion'], ['मूषकः', 'Mouse'], ['जालम्', 'Net/Trap'], ['मुक्तः', 'Freed/Released']] },
            { type: 'multi', q: 'The moral "न कोऽपि लघुः" means:', options: ['Everyone is strong', 'No one is insignificant', 'Lions are king', 'Mice are clever'], answer: 1 },
          ],
        },
      ],
    },
    {
      u: 29, title: 'Verse Reading', sub: 'Read actual shlokas', icon: '\uD83D\uDCDC', color: '#A16207',
      lessons: [
        {
          id: '10.3', title: 'Bhagavad Gita Verse', icon: '\uD83D\uDCDC',
          desc: 'Read & understand a Gita shloka',
          ex: [
            { type: 'info', text: '\uD83D\uDCDC Bhagavad Gita 2.47:\n\nकर्मण्येवाधिकारस्ते\nmaa phaleshu kadaachana\nmaa karmaphalaheturbhoo:\nmaa te sango\'stvakarmaṇi\n\nWord by word:\nकर्मणि = in action\nएव = only\nअधिकारः = right\nते = your\nमा = not\nफलेषु = in fruits\nकदाचन = ever\n\nMeaning:\nYou have the right to action alone,\nnever to its fruits.\nDo not let the fruit be your motive,\nnor be attached to inaction.' },
            { type: 'multi', q: 'कर्मणि means:', options: ['In fruits', 'In action', 'In knowledge', 'In peace'], answer: 1 },
            { type: 'match', q: 'Match Gita words:', pairs: [['कर्म', 'Action/Deed'], ['फल', 'Fruit/Result'], ['अधिकार', 'Right/Authority'], ['सङ्ग', 'Attachment']] },
            { type: 'multi', q: 'The verse teaches:', options: ['Always seek rewards', 'Focus on action, not results', 'Avoid all action', 'Pray for success'], answer: 1 },
          ],
        },
        {
          id: '10.4', title: 'Upanishad Prayer', icon: '\uD83D\uDE4F',
          desc: 'असतो मा सद्गमय — Lead me to truth',
          ex: [
            { type: 'info', text: '\uD83D\uDE4F Brihadaranyaka Upanishad 1.3.28:\n\nअसतो मा सद्गमय।\n(asato maa sadgamaya)\nLead me from untruth to truth.\n\nतमसो मा ज्योतिर्गमय।\n(tamaso maa jyotirgamaya)\nLead me from darkness to light.\n\nमृत्योर्मा अमृतं गमय।\n(mrityormaa amritam gamaya)\nLead me from death to immortality.\n\nWord by word:\nअसत् = untruth, सत् = truth\nतमस् = darkness, ज्योतिस् = light\nमृत्यु = death, अमृत = immortal' },
            { type: 'match', q: 'Match pairs:', pairs: [['असत् (Asat)', 'Untruth / अनृत'], ['सत् (Sat)', 'Truth / सत्य'], ['तमस् (Tamas)', 'Darkness / अन्धकार'], ['अमृत (Amrit)', 'Immortal / अमर']] },
            { type: 'multi', q: 'तमसो मा ज्योतिर्गमय = ?', options: ['Lead me from truth to untruth', 'Lead me from darkness to light', 'Lead me from light to darkness', 'Lead me from death to life'], answer: 1 },
            { type: 'sequence', title: 'Order the prayer:', items: ['असतो मा सद्गमय (Untruth \u2192 Truth)', 'तमसो मा ज्योतिर्गमय (Darkness \u2192 Light)', 'मृत्योर्मा अमृतं गमय (Death \u2192 Immortality)'] },
            { type: 'smriti', showText: '\uD83D\uDCF8 Three transformations:\n\n1. असत् \u2192 सत् (Untruth \u2192 Truth)\n   = Intellectual journey\n\n2. तमस् \u2192 ज्योतिस् (Dark \u2192 Light)\n   = Moral journey\n\n3. मृत्यु \u2192 अमृत (Death \u2192 Immortal)\n   = Spiritual journey', showTime: 7, q: '\uD83E\uDDE0 How many transformations in this prayer?', options: ['1', '2', '3', '4'], answer: 2 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 11: PANINI'S ASHTADHYAYI (पाणिनीयं व्याकरणम्)
// The foundational Sanskrit grammar — 8 chapters, 4000 sutras
// ═══════════════════════════════════════════════════
{
  section: "Panini's System / पाणिनीयं व्याकरणम्",
  sIcon: '📿',
  sColor: '#9333EA',
  sDesc: '~2,500-year-old grammar — the most scientific linguistic system ever created / सर्वाधिक वैज्ञानिक व्याकरण / सर्वाधिक वैज्ञानिक व्याकरण',
  units: [
    // ─── Unit 30: Maheshvara Sutras + Pratyahara ───
    {
      u: 30,
      title: 'Maheshvara Sutras / माहेश्वराणि सूत्राणि',
      sub: "The 14 sutras of Shiva's drum",
      icon: '🔱',
      color: '#9333EA',
      lessons: [
        {
          id: '11.1', title: '14 Maheshvara Sutras', icon: '🔱',
          desc: "Shiva's drum sutras — origin of the alphabet's order",
          ex: [
            { type: 'info', text: '🔱 The Maheshvara Sutras (माहेश्वराणि सूत्राणि):\n\nLegend: When Shiva danced his cosmic dance, his डमरु (damaru drum) sounded 14 times, producing these sutras. Panini built his entire grammar on them.\n\nThe 14 sutras (each ends with a marker letter called इत्):\n\n1. अ इ उ ण्\n2. ऋ ऌ क्\n3. ए ओ ङ्\n4. ऐ औ च्\n5. ह य व र ट्\n6. ल ण्\n7. ञ म ङ ण न म्\n8. झ भ ञ्\n9. घ ढ ध ष्\n10. ज ब ग ड द श्\n11. ख फ छ ठ थ च ट त व्\n12. क प य्\n13. श ष स र्\n14. ह ल्\n\nThe markers (ण्, क्, ङ्, च्, ट्, ण्, म्, ञ्, ष्, श्, व्, य्, र्, ल्) are NOT letters — they are anchors used to form pratyāhāras (groupings).' },
            { type: 'multi', q: 'How many Maheshvara sutras are there?', options: ['8', '10', '14', '16'], answer: 2 },
            { type: 'multi', q: 'What is the legendary origin of these sutras?', options: ["Brahma's voice", "Shiva's drum (डमरु)", "Vyasa's pen", "Indra's thunder"], answer: 1 },
            { type: 'krama', title: '📿 First 4 sutras:', sequence: ['1. अ इ उ ण्', '2. ऋ ऌ क्', '3. ए ओ ङ्', '4. ऐ औ च्'], q: 'After ए ओ ङ् comes?', options: ['ऋ ऌ क्', 'ऐ औ च्', 'ह य व र ट्', 'ल ण्'], answer: 1 },
            { type: 'smriti', showText: '📸 The 14 sutras structure:\n\nSutras 1-4: VOWELS (अच्)\nSutra 5-6: SEMI-VOWELS (य् व् र् ल्)\nSutra 7: NASALS (ञ म ङ ण न)\nSutras 8-11: STOPS (झ भ घ ढ ध ज ब ग ड द ख फ छ ठ थ च ट त क प)\nSutras 13-14: SIBILANTS + ह (श ष स ह)', showTime: 8, q: '🧠 Sutras 1-4 contain which class?', options: ['Consonants', 'Vowels (स्वर/अच्)', 'Sibilants', 'Nasals'], answer: 1 },
          ],
        },
        {
          id: '11.2', title: 'Pratyāhāra System / प्रत्याहारः', icon: '🔗',
          desc: 'Panini\'s genius: compress hundreds of letters into 2-letter codes',
          ex: [
            { type: 'info', text: '🔗 Pratyāhāra (प्रत्याहारः) = "drawing back/together"\n\nPanini formed shortcut groupings using:\n  [first letter] + [marker letter that ends the group]\n\nExamples:\n\n• अच् (ac) = अ + च्\n  → All letters from अ until just before च् marker\n  → अ इ उ ऋ ऌ ए ओ ऐ औ (= ALL VOWELS)\n\n• हल् (hal) = ह + ल्\n  → All from ह until ल् marker (last)\n  → ALL CONSONANTS\n\n• इक् (ik) = इ + क्\n  → इ उ ऋ ऌ (the "high" vowels)\n\n• यण् (yaṇ) = य + ण्\n  → य व र ल (semi-vowels)\n\n• अल् (al) = अ + ल्\n  → ALL letters (entire alphabet)\n\nThis lets Panini write rules like\n  "इको यणचि" (6.1.77) = "इक् becomes यण् before अच्"\n= "i,u,ṛ,ḷ become y,v,r,l before any vowel"\n= the basis of vowel sandhi!' },
            { type: 'match', q: 'Match pratyāhāras to their meaning:', pairs: [['अच्', 'All vowels'], ['हल्', 'All consonants'], ['इक्', 'इ उ ऋ ऌ'], ['यण्', 'य व र ल']] },
            { type: 'multi', q: 'अल् (al) refers to:', options: ['Only vowels', 'Only consonants', 'All phonemes (entire alphabet)', 'Only nasals'], answer: 2 },
            { type: 'multi', q: 'How do you read a pratyāhāra like "अच्"?', options: ['First letter only', 'Last letter only', 'First letter through letter just before the marker', 'Random selection'], answer: 2 },
            { type: 'multi', q: 'Why is the pratyāhāra system considered genius?', options: ['It looks pretty', 'It compresses long letter lists into 2-character codes — used 1000s of times in 4000 sutras', 'It is sacred', 'It is colorful'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 31: Sandhi Master Rules ───
    {
      u: 31,
      title: 'Sandhi Master Rules / सन्धिशास्त्रम्',
      sub: 'Visarga, consonant, ṣatva, ṇatva',
      icon: '🧩',
      color: '#0891B2',
      lessons: [
        {
          id: '11.3', title: 'Visarga Sandhi / विसर्गसन्धिः', icon: '⚡',
          desc: 'Rules when अः (visarga) meets the next sound',
          ex: [
            { type: 'info', text: '⚡ Visarga (अः · ḥ) Sandhi:\n\nThe most important sandhi — appears in EVERY Sanskrit sentence.\n\nRules:\n\n1. अः + अ = ओ + (avagraha )\n   रामः + अहम् = रामोऽहम्\n\n2. अः + voiced cons. (g, j, d, b, etc.) = ओ + voiced\n   रामः + गच्छति = रामो गच्छति\n\n3. अः + voiceless palatal/dental/cerebral = स/श/ष\n   रामः + च = रामश्च\n   रामः + ते = रामस्ते\n   रामः + टीका = रामष्टीका\n\n4. अः + क/प (voiceless velar/labial) = अः stays\n   रामः + करोति = रामः करोति\n\n5. आः + vowel (other than अ) = आ + that vowel (drop visarga)\n   देवाः + एते = देवा एते' },
            { type: 'multi', q: 'रामः + अहम् = ?', options: ['रामहम्', 'रामोऽहम्', 'रामाहम्', 'रामेहम्'], answer: 1 },
            { type: 'multi', q: 'रामः + गच्छति = ?', options: ['रामः गच्छति', 'रामो गच्छति', 'रामा गच्छति', 'रामे गच्छति'], answer: 1 },
            { type: 'match', q: 'Match visarga + sound combos:', pairs: [['अः + च', '...श्च (श)'], ['अः + त', '...स्त (स)'], ['अः + क', '...ः क (unchanged)'], ['अः + अ', '...ोऽ (ओ + avagraha)']] },
            { type: 'smriti', showText: '📸 Visarga rules:\n\n• अः + अ → ओऽ\n• अः + voiced cons. → ओ\n• अः + च/छ → श्\n• अः + त/थ → स्\n• अः + ट/ठ → ष्\n• अः + क/प → ः stays\n• आः + non-अ vowel → आ', showTime: 8, q: '🧠 अः + क/प = ?', options: ['ओ', 'श्', 'स्', 'ः stays unchanged'], answer: 3 },
          ],
        },
        {
          id: '11.4', title: 'Ṣatva & Ṇatva / षत्व-णत्व', icon: '🔄',
          desc: 'When स→ष and न→ण (cerebralization)',
          ex: [
            { type: 'info', text: '🔄 Ṣatva (षत्व) & Ṇatva (णत्व) — RETROFLEXION\n\nषत्व (स → ष): a dental स retroflexes to ष after इ ई उ ऊ ऋ ए ऐ ओ औ ह य व र ल क ग (rule आदेशप्रत्यययोः 8.3.59, trigger set इण्कुँ).\n\nणत्व (न → ण): a dental न retroflexes to ण only after र, ऋ/ॠ or ष in the same word (रषाभ्यां नो णः 8.4.1) — the trigger is र/ष, NOT इ/उ.\n\nSamples:\n\n• रामस्य → रामस्य stays (अ + स — no retroflexing trigger)\n• रामेषु (rāmeṣu, loc. pl.) — स → ष after ए (ṣatva; इण्कोः 8.3.57)\n• रामेण (rāmeṇa) — न → ण because the preceding र of राम triggers it (रषाभ्यां नो णः 8.4.1)\n• बालेन stays न — no र/ष trigger present, so no ṇatva\n\n💡 The classic example: After रामे(ण) the ending was originally -न, but ṇatva converts it.\n\nRule (8.4.2): "अट्कुप्वाङ्नुम्व्यवायेऽपि" — even with intervening अट् (vowels), क्/प्/ङ् class, अङ्, नुम् — the cerebralization still happens.' },
            { type: 'multi', q: 'Ṣatva converts स to:', options: ['श', 'ष', 'ह', 'च'], answer: 1 },
            { type: 'multi', q: 'Ṇatva converts न to:', options: ['ङ', 'ञ', 'ण', 'म'], answer: 2 },
            { type: 'match', q: 'Match cerebralization:', pairs: [['षत्व (ṣatva)', 'स → ष'], ['णत्व (ṇatva)', 'न → ण'], ['Trigger sounds', 'इ/उ/ऋ/र/क-class'], ['Effect class', 'Dental → Retroflex']] },
            { type: 'multi', q: 'Why does Sanskrit have these cerebralization rules?', options: ['Aesthetic only', 'Articulation harmony — when tongue is already retroflexed by preceding sound, it stays retroflexed', 'Random tradition', 'Nobody knows'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 32: Verb System Deep Dive ───
    {
      u: 32,
      title: 'Verb System / आख्यातम्',
      sub: '10 lakaras, voice, sanadi',
      icon: '🏃',
      color: '#DC2626',
      lessons: [
        {
          id: '11.5', title: '10 Lakāras / दश लकाराः', icon: '⏳',
          desc: 'All tenses and moods of Sanskrit',
          ex: [
            { type: 'info', text: '⏳ The 10 Lakāras (लकाराः) — Sanskrit\'s complete tense/mood system:\n\nNamed after their L-marker (Pāṇinian convention):\n\n1. लट् (laṭ) — Present indicative\n   गच्छति = he goes\n\n2. लिट् (liṭ) — Perfect (remote past)\n   जगाम = he went (long ago)\n\n3. लुट् (luṭ) — Periphrastic future (definite, distant)\n   गन्ता = he will go (tomorrow+)\n\n4. लृट् (lṛṭ) — Simple future\n   गमिष्यति = he will go\n\n5. लोट् (loṭ) — Imperative\n   गच्छतु = let him go!\n\n6. लङ् (laṅ) — Imperfect (past, before today)\n   अगच्छत् = he went\n\n7. विधिलिङ् (vidhiliṅ) — Optative ("should/may")\n   गच्छेत् = he should go\n\n8. आशीर्लिङ् (āśīrliṅ) — Benedictive ("may it be!")\n   गम्यात् = may he go\n\n9. लुङ् (luṅ) — Aorist (past, no time emphasis)\n   अगमत् = he went\n\n10. लृङ् (lṛṅ) — Conditional\n    अगमिष्यत् = he would have gone' },
            { type: 'match', q: 'Match lakāras:', pairs: [['लट् (laṭ)', 'Present (gacchati)'], ['लिट् (liṭ)', 'Perfect (jagāma)'], ['लृट् (lṛṭ)', 'Simple future'], ['लोट् (loṭ)', 'Imperative ("let him!")']] },
            { type: 'multi', q: 'Which lakāra means "he should go" / optative?', options: ['लट्', 'विधिलिङ् (vidhi-liṅ)', 'लुट्', 'लोट्'], answer: 1 },
            { type: 'multi', q: 'Sanskrit\'s past tense alone has how many distinct lakāras?', options: ['1', '2', '3 (लिट्, लङ्, लुङ्)', '5'], answer: 2 },
            { type: 'krama', title: '📿 Past-tense lakāras:', sequence: ['लिट् = perfect (remote, unwitnessed)', 'लङ् = imperfect (past before today)', 'लुङ् = aorist (general past)'], q: 'Which is for events the speaker did NOT witness?', options: ['लिट्', 'लङ्', 'लुङ्', 'All three equally'], answer: 0 },
          ],
        },
        {
          id: '11.6', title: 'Ātmanepada / Parasmaipada', icon: '⚖️',
          desc: 'The two voices of Sanskrit verbs',
          ex: [
            { type: 'info', text: '⚖️ The Two Voices:\n\nपरस्मैपद (Parasmaipada · "for-another-step")\n  Action benefits someone else\n  Endings: -ति, -तः, -न्ति (sg/du/pl)\n  Example: यजति = he sacrifices (for the gods)\n\nआत्मनेपद (Ātmanepada · "for-self-step")\n  Action benefits oneself\n  Endings: -ते, -एते, -अन्ते\n  Example: यजते = he sacrifices (for himself)\n\nSome roots take ONLY parasmaipada (परस्मैपदी):\n  गम्, भू, अस्, हन्\n\nSome roots take ONLY ātmanepada (आत्मनेपदी):\n  सेव्, ईक्ष्, लभ्, मन्\n\nSome take BOTH (उभयपदी):\n  कृ, यज्, ज्ञा\n\n💡 Modern descendants:\n  आत्मनेपद → Greek middle voice → similar concept' },
            { type: 'match', q: 'Match endings (3rd person sg):', pairs: [['गच्छति', 'Parasmaipada (परस्मै)'], ['यजते', 'Ātmanepada (आत्मने)'], ['भवति', 'Parasmaipada'], ['लभते', 'Ātmanepada']] },
            { type: 'multi', q: 'Which voice means "action for self"?', options: ['परस्मैपद (Parasmaipada)', 'आत्मनेपद (Ātmanepada)', 'Both equally', 'Neither'], answer: 1 },
            { type: 'multi', q: 'A verb that takes both voices is called:', options: ['Parasmaipadī', 'Ātmanepadī', 'Ubhayapadī (उभयपदी)', 'Avyaya'], answer: 2 },
            { type: 'multi', q: 'यजति vs. यजते — what is the difference?', options: ['No difference', 'यजति = sacrifice for someone else; यजते = sacrifice for self/own benefit', 'यजति is plural', 'यजति is past tense'], answer: 1 },
          ],
        },
        {
          id: '11.7', title: 'Sanādi / सनाद्यन्ताः', icon: '🔄',
          desc: '10 derived secondary verb stems',
          ex: [
            { type: 'info', text: '🔄 Sanādi (सनादि) = "starting with सन् ..."\n\nPanini\'s 10 secondary verb stem types — derived from primary roots:\n\n1. सन् (san) — Desiderative ("wants to ___")\n   जिगमिषति = he wants to go (from गम्)\n\n2. क्यच् (kyac) — Denominative ("acts like ___")\n   पुत्रीयति = he treats X as a son\n\n3. काम्यच् (kāmyac) — "wishes for ___"\n\n4. क्यङ् (kyaṅ) — "becomes like ___"\n   श्यामायते = becomes dark\n\n5. क्यष् (kyaṣ) — Same idea, Parasmaipada variant\n\n6. णिच् (ṇic) — Causative ("makes someone ___")\n   गमयति = he makes (someone) go\n   = he sends\n   पाठयति = he makes (someone) read = he teaches\n\n7. यङ् (yaṅ) — Intensive/Frequentative ("does repeatedly")\n   जङ्गम्यते = he goes again and again\n\n8. यङ्लुक् (yaṅluk) — Intensive without ya\n\n9. णिङ् (ṇiṅ) — Same as णिच् for ātmanepada\n\nThe two BIG ones to know:\n  णिच् (causative) — used constantly\n  सन् (desiderative) — used in literature' },
            { type: 'match', q: 'Match sanādi types:', pairs: [['णिच् (ṇic)', 'Causative — "makes do"'], ['सन् (san)', 'Desiderative — "wants to"'], ['यङ् (yaṅ)', 'Intensive — "does repeatedly"'], ['क्यच् (kyac)', 'Denominative — "acts like"']] },
            { type: 'multi', q: 'गमयति means:', options: ['He goes', 'He wants to go', 'He makes (someone) go / he sends', 'He keeps going'], answer: 2 },
            { type: 'multi', q: 'जिगमिषति is which sanādi?', options: ['Causative (णिच्)', 'Desiderative (सन्)', 'Intensive (यङ्)', 'Denominative'], answer: 1 },
            { type: 'multi', q: 'पाठयति (he teaches) is the causative of which root?', options: ['गम् (go)', 'पठ् (read)', 'भू (be)', 'कृ (do)'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 33: Suffix System ───
    {
      u: 33,
      title: 'Suffix System / प्रत्ययाः',
      sub: 'Krit, taddhita, strī-pratyaya',
      icon: '🧱',
      color: '#16A34A',
      lessons: [
        {
          id: '11.8', title: 'Krit Pratyaya / कृत्प्रत्ययाः', icon: '✂️',
          desc: 'Primary derivatives — verbs become nouns',
          ex: [
            { type: 'info', text: '✂️ Krit Pratyayas (कृत्प्रत्ययाः) — primary derivative suffixes\n\nThey turn VERB ROOTS into NOUNS / ADJECTIVES.\n\nMost important ones:\n\n• तृच् / तृ (tṛc) — Agent ("doer of X")\n  कर्तृ (kartṛ) = doer (from कृ)\n  गन्तृ (gantṛ) = goer (from गम्)\n  दातृ (dātṛ) = giver (from दा)\n\n• क्तवतु (ktavatu) — Past active\n  कृतवान् = (one who has) done\n\n• क्त (kta) — Past passive participle\n  कृत = done\n  गत = gone\n  उक्त = said\n\n• क्त्वा (ktvā) — Gerund ("having done")\n  कृत्वा = having done\n  गत्वा = having gone\n\n• ल्यप् (lyap) — Gerund (after prefix)\n  आगत्य = having come\n  उपगम्य = having approached\n\n• तुमुन् (tumun) — Infinitive\n  कर्तुम् = to do\n  गन्तुम् = to go\n\n• शानच् / शतृ — Present participle\n  गच्छन् = going\n  कुर्वन् = doing\n\n• ण्यत् / यत् / तव्य / अनीय — Future passive ("ought to be")\n  कर्तव्य = ought to be done\n  करणीय = same\n  कार्य = same' },
            { type: 'match', q: 'Match krit suffixes:', pairs: [['तृ (tṛ)', 'Agent (doer)'], ['क्त (kta)', 'Past passive participle'], ['क्त्वा (ktvā)', 'Gerund "having ___"'], ['तुमुन् (tumun)', 'Infinitive']] },
            { type: 'multi', q: 'कर्तृ (kartṛ) means:', options: ['Action', 'Doer / Agent', 'Done', 'To do'], answer: 1 },
            { type: 'multi', q: 'कर्तुम् means:', options: ['Doer', 'Done', 'Having done', 'To do (infinitive)'], answer: 3 },
            { type: 'multi', q: 'कर्तव्य means:', options: ['Doer', 'Done', 'To do', 'Ought to be done / duty'], answer: 3 },
          ],
        },
        {
          id: '11.9', title: 'Taddhita Pratyaya / तद्धितप्रत्ययाः', icon: '🪡',
          desc: 'Secondary derivatives — nouns from nouns',
          ex: [
            { type: 'info', text: '🪡 Taddhita (तद्धित) = "useful/fitting for that"\n\nSuffixes that turn NOUNS into OTHER NOUNS or ADJECTIVES.\n\nMost-used taddhita types:\n\n• अण् (aṇ) — Patronymic ("son/descendant of")\n  दशरथ → दाशरथिः (Rama, son of Daśaratha)\n  वसुदेव → वासुदेवः (Krishna)\n\n• इञ् (iñ) — Same kind of patronymic\n  दाक्षि = descendant of दक्ष\n\n• मतुप् / वतुप् (matup) — "having ___"\n  धन → धनवान् = wealthy\n  ज्ञान → ज्ञानवान् = wise\n\n• ठक् / ठञ् (ṭhak) — "studying / following ___"\n  व्याकरण → वैयाकरणः = grammarian\n\n• तल् / त्व (tva) — Abstract noun ("-ness")\n  देव → देवत्व = divinity\n  गुरु → गुरुत्व = greatness\n  मनुष्य → मनुष्यत्व = humanity\n\n• मय (maya) — "made of / full of"\n  सुवर्ण → सुवर्णमय = golden\n  आनन्द → आनन्दमय = full of bliss\n\n• तर / तम (tara/tama) — Comparative / Superlative\n  गुरु → गुरुतर (greater) → गुरुतम (greatest)' },
            { type: 'match', q: 'Match taddhita suffixes:', pairs: [['अण् (aṇ)', 'Patronymic — "son of"'], ['मतुप् (-vat)', '"having ___"'], ['तल् / त्व (-tva)', 'Abstract "-ness"'], ['मय (-maya)', '"made of / full of"']] },
            { type: 'multi', q: 'दाशरथिः (son of Daśaratha) refers to:', options: ['Krishna', 'Rama', 'Buddha', 'Arjuna'], answer: 1 },
            { type: 'multi', q: 'देवत्व means:', options: ['God', 'Divinity (the quality of being divine)', 'Goddess', 'Temple'], answer: 1 },
            { type: 'multi', q: 'आनन्दमय means:', options: ['No bliss', 'Half-bliss', 'Full of bliss', 'Past bliss'], answer: 2 },
            { type: 'smriti', showText: '📸 Taddhita masters:\n\n🪔 -त्व/-ता = "-ness" (abstract)\n🌸 -मय = "made of / full of"\n👨‍👦 -अण्/-इञ् = patronymic\n💎 -मत्/-वत् = "possessing"\n📈 -तर / -तम = more / most', showTime: 7, q: '🧠 -त्व/-ता = ?', options: ['"having"', '"made of"', 'Abstract noun "-ness"', 'Patronymic'], answer: 2 },
          ],
        },
      ],
    },
    // ─── Unit 34: Compounds & Reduplication ───
    {
      u: 34,
      title: 'Advanced Sandhi & Form / उत्तरव्याकरणम्',
      sub: 'Reduplication, accent, full samasa',
      icon: '🧩',
      color: '#EA580C',
      lessons: [
        {
          id: '11.10', title: 'Reduplication / द्वित्वम्', icon: '🔁',
          desc: 'Doubling rules for perfect tense and intensive',
          ex: [
            { type: 'info', text: '🔁 Dvitva (द्वित्वम्) = REDUPLICATION\n\nPanini\'s rule (6.1.1): "एकाचो द्वे प्रथमस्य"\n  → "Of a monosyllabic root, the first part is doubled"\n\nUsed in:\n\n1. PERFECT TENSE (लिट्)\n   गम् → ज + गाम = जगाम (he went)\n   कृ → च + कार = चकार (he did)\n   पठ् → प + पाठ = पपाठ (he read)\n\n2. INTENSIVE (यङ्)\n   गम् → जङ्गम्यते (goes again and again)\n   कृ → चेक्रीयते (does repeatedly)\n\n3. DESIDERATIVE (सन्)\n   गम् → जिगमिषति (wants to go)\n   पा → पिपासति (wants to drink)\n\n4. CLASS-3 PRESENT (श्लौ 6.1.10)\n   हु → जुहोति (offers), दा → ददाति (gives)\n\n5. REDUPLICATED AORIST (चङि 6.1.11)\n   जन् → अजीजनत् (he begot)\n\nReduplication rules — the doubled syllable:\n\n• Aspirated → unaspirated (झा → ज)\n• Voiced velar (ग) → palatal (ज)\n• Voiceless velar (क) → palatal (च)\n• Vowels reduce: ā → a, e/o → i\n• Internal न drops: नन्द् → नन्द (only first syllable)\n\nClassic example:\n  कृ + लिट् → कृ-कार (raw)\n  → च-कार (k → c by palatalization)\n  → चकार ✓' },
            { type: 'multi', q: 'जगाम (he went) is reduplication of which root?', options: ['गम् (gam)', 'जग् (jag)', 'गा (gā)', 'गुम् (gum)'], answer: 0 },
            { type: 'multi', q: 'In reduplication, क/ख/ग/घ become:', options: ['p/ph/b/bh', 'च/छ/ज/झ (palatals)', 'ट/ठ/ड/ढ (retroflex)', 'They stay the same'], answer: 1 },
            { type: 'match', q: 'Match perfect tense reduplications:', pairs: [['कृ → ?', 'चकार'], ['गम् → ?', 'जगाम'], ['पठ् → ?', 'पपाठ'], ['भू → ?', 'बभूव']] },
            { type: 'multi', q: 'Reduplication is used in:', options: ['Only perfect tense', 'Only present tense', 'Perfect, intensive, desiderative, class-3 present and the reduplicated aorist', 'No tense'], answer: 2 },
          ],
        },
        {
          id: '11.11', title: 'Three Accents / त्रिस्वराः', icon: '🎵',
          desc: 'Udātta, anudātta, svarita — the music of Vedic Sanskrit',
          ex: [
            { type: 'info', text: '🎵 The Three Svaras (त्रिस्वराः):\n\nVedic Sanskrit had pitch accent (like Greek, Japanese — NOT stress like English).\n\n1. उदात्त (udātta) — High pitch / "raised"\n   Marked: ́ (no mark in modern texts)\n\n2. अनुदात्त (anudātta) — Low pitch / "not raised"\n   Marked: ◌॒ (horizontal line below)\n\n3. स्वरित (svarita) — Falling tone\n   Marked: ◌॑ (vertical line above)\n\nThe svarita arises when udātta is followed by anudātta — it\'s the gliding fall.\n\nVedic chanting preserves these accents to this day. Without them, the meaning of Vedic verses can change!\n\nClassic example:\n  इन्द्रशत्रुर्वर्धस्व (Tvaṣṭṛ to Vṛtra)\n\nWith one accent → "May Indra\'s slayer prosper" (Tatpuruṣa)\nWith different accent → "May the slayer of Indra prosper" (Bahuvrīhi)\n\nA single accent change → opposite meaning!\n\nPanini codifies all this in chapters 6.1, 6.2, and 8.4.\n\nClassical Sanskrit dropped the accent system, replacing it with stress on the heavy syllable. But Vedic recitation still preserves it perfectly after 3,500+ years.' },
            { type: 'match', q: 'Match svaras:', pairs: [['उदात्त (udātta)', 'High pitch'], ['अनुदात्त (anudātta)', 'Low pitch'], ['स्वरित (svarita)', 'Falling pitch'], ['Vedic accent type', 'Pitch (like Greek), not stress']] },
            { type: 'multi', q: 'Sanskrit accent is:', options: ['Stress-based like English', 'Pitch-based like Greek/Japanese', 'Time-based like Spanish', 'No accent'], answer: 1 },
            { type: 'multi', q: 'Why do accent rules matter for Vedic interpretation?', options: ['Aesthetic only', 'A single accent change can flip the meaning of a compound (e.g., who slays whom)', 'They are random', 'Modern Sanskrit uses them constantly'], answer: 1 },
            { type: 'multi', q: 'Where does स्वरित come from?', options: ['Independent accent', 'Always at the start', 'Glide between उदात्त and anudātta', 'In compounds only'], answer: 2 },
          ],
        },
        {
          id: '11.12', title: '6 Samāsa Types / षट् समासाः', icon: '🔗',
          desc: 'All compound types Panini classifies',
          ex: [
            { type: 'info', text: '🔗 The 6 Compound Types (समासाः):\n\n1. अव्ययीभाव (Avyayībhāva) — adverbial\n   Lead member is indeclinable, whole compound is indeclinable\n   उप + नगर = उपनगरम् (near the city = suburb)\n   यथा + शक्ति = यथाशक्ति (according to ability)\n\n2. तत्पुरुष (Tatpuruṣa) — determinative\n   Second member dominant; first qualifies\n   Sub-types based on which case the first member is in:\n   - राज + पुत्र = राजपुत्र (king\'s son)\n   - ग्राम + गत = ग्रामगत (gone to village)\n\n3. कर्मधारय (Karmadhāraya) — appositional Tatpuruṣa\n   Both members refer to same thing\n   नील + कमल = नीलकमल (blue lotus)\n   महा + राज = महाराज (great king)\n\n4. द्विगु (Dvigu) — numerical Karmadhāraya\n   First member is a number\n   त्रि + लोक = त्रिलोकम् (three worlds)\n   पञ्च + वटी = पञ्चवटी (five-banyan grove)\n\n5. द्वन्द्व (Dvandva) — copulative ("and")\n   राम + लक्ष्मण = रामलक्ष्मणौ (Rama and Lakshmana)\n   माता + पिता = मातापितरौ (mother and father)\n\n6. बहुव्रीहि (Bahuvrīhi) — possessive ("having ___")\n   The compound refers to something OUTSIDE itself\n   दश + आनन = दशानन ("ten-faced" = Ravana)\n   पीत + अम्बर = पीताम्बर ("yellow-clothed" = Vishnu)\n   चक्रपाणि = "wheel-handed" = Vishnu' },
            { type: 'match', q: 'Match compound types:', pairs: [['अव्ययीभाव', 'Adverbial — yathā-śakti'], ['तत्पुरुष', 'Determinative — rāja-putra'], ['द्वन्द्व', 'And-compound — Rāma-Lakṣmaṇau'], ['बहुव्रीहि', 'Possessive — daśānana']] },
            { type: 'multi', q: 'द्विगु compounds always have:', options: ['Two roots', 'A number as the first member', 'Two prefixes', 'Two verbs'], answer: 1 },
            { type: 'multi', q: 'दशानन (ten-faced = Ravana) is which type?', options: ['Tatpuruṣa', 'Karmadhāraya', 'Dvandva', 'Bahuvrīhi (refers to person OUTSIDE the compound)'], answer: 3 },
            { type: 'multi', q: 'नीलकमल (blue lotus) — both members describe the SAME thing. This is:', options: ['Avyayībhāva', 'Karmadhāraya (appositional)', 'Dvandva', 'Bahuvrīhi'], answer: 1 },
            { type: 'krama', title: '📿 6 Samāsa types in order:', sequence: ['1. अव्ययीभाव (Avyayībhāva)', '2. तत्पुरुष (Tatpuruṣa)', '3. कर्मधारय (Karmadhāraya)', '4. द्विगु (Dvigu)', '5. द्वन्द्व (Dvandva)', '6. बहुव्रीहि (Bahuvrīhi)'], q: 'After कर्मधारय comes?', options: ['तत्पुरुष', 'द्विगु', 'द्वन्द्व', 'बहुव्रीहि'], answer: 1 },
          ],
        },
        {
          id: '11.13', title: 'Why the Ashtadhyayi Matters', icon: '🌍',
          desc: "Panini's gift to humanity",
          ex: [
            { type: 'info', text: '🌍 Why Panini\'s Ashtadhyayi matters:\n\nAbout 2,500 years ago (c. 500 BCE), Panini described the entire grammar of Sanskrit in ~4,000 sutras using:\n\n• Recursive definitions (decades before Greek logicians)\n• Meta-rules (rules about rules)\n• A formal system equivalent to a context-free grammar\n• An optimization scheme (Pratyāhāra) that compresses the alphabet into reusable codes\n\nWestern linguists rediscovered these techniques in the 20th century:\n\n• Bloomfield (1929): "the most perfect grammar"\n• Chomsky\'s generative grammar (1957): inspired by Panini\n• Backus-Naur Form (BNF, used in computer science): identical structure to Pāṇinian sutras\n\nQuotes from modern scholars:\n\n"Panini\'s grammar is the most complete generative grammar of any language yet written, and it remains the most advanced of its kind."\n  — Frits Staal\n\nWhat Panini built:\n  ✦ 8 chapters (अष्ट + अध्याय = "eight + chapters")\n  ✦ 32 pādas (sections)\n  ✦ ~4000 sūtras\n  ✦ Maheshvara Sutras as foundation\n  ✦ Pratyāhāra compression\n  ✦ Sandhi rules\n  ✦ Kāraka semantic theory\n  ✦ Compounds, derivatives, voice, tense, accent, retroflexion\n  ✦ Complete formal description of one of the world\'s richest languages\n\nLearning Sanskrit IS learning Panini\'s system.\nEvery letter, every word, every sentence in this app traces back to those 4,000 sutras.\n\n🙏 आचार्याय नमः · Salutations to the master.' },
            { type: 'multi', q: 'How many sūtras did Panini write?', options: ['400', '1,000', '~4,000', '40,000'], answer: 2 },
            { type: 'multi', q: 'Which is closer to Panini\'s sutra structure?', options: ['English grammar books', 'Backus-Naur Form (used in CS)', 'Latin declension tables', 'Random word lists'], answer: 1 },
            { type: 'multi', q: 'Why is Panini called the father of linguistics?', options: ['He invented Sanskrit', 'He created a formal generative grammar 2,500 years before modern linguistics', 'He composed the Vedas', 'He wrote dictionaries'], answer: 1 },
            { type: 'multi', q: 'Bloomfield (1929) called the Ashtadhyayi:', options: ['"The longest grammar"', '"The most perfect grammar"', '"The simplest grammar"', '"The first grammar"'], answer: 1 },
            { type: 'smriti', showText: '📸 Final review:\n\n🔱 Maheshvara Sutras = 14 foundational sutras\n🔗 Pratyāhāra = compression scheme (अच्, हल्, इक्...)\n⚡ Sandhi = sound joining rules\n🎯 Kāraka = 6 semantic roles\n⏳ Lakāra = 10 tenses/moods\n⚖️ Two voices = Parasmaipada / Ātmanepada\n✂️ Krit = primary derivatives\n🪡 Taddhita = secondary derivatives\n🔁 Dvitva = reduplication\n🎵 Three accents = udātta/anudātta/svarita\n🔗 Six samāsa = compound types\n\n~2,500 years. 4,000 sutras. One genius.', showTime: 12, q: '🧠 The Ashtadhyayi is divided into how many chapters?', options: ['4', '8 (अष्ट + अध्यायी)', '12', '16'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 35: Pāṇinian Theory Foundations ───
    {
      u: 35,
      title: 'Pāṇinian Foundations / पाणिनीय-सिद्धान्ताः',
      sub: 'Kāraka, operations, meta-rules — the deep machinery',
      icon: '⚙️',
      color: '#7C3AED',
      lessons: [
        {
          id: '11.14', title: 'Six Kārakas / षट् कारकाणि', icon: '🎯',
          desc: "Panini's semantic role theory — 2,500 years before modern linguistics",
          ex: [
            { type: 'info', text: '🎯 The Six Kārakas (षट् कारकाणि):\n\nKāraka literally = "doer / factor of action". Panini\'s genius was separating SEMANTIC ROLE (kāraka) from MORPHOLOGICAL CASE (vibhakti).\n\nModern linguists call this "thematic roles" — Panini formalized it 2,500 years ago.\n\nThe 6 kārakas (Adhyāya 1.4.23–55):\n\n1. कर्तृ (kartṛ) — AGENT\n   "The independent one" (1.4.54: स्वतन्त्रः कर्ता)\n   → रामः गच्छति (Rama goes) — Rama is kartṛ\n\n2. कर्म (karman) — PATIENT/OBJECT\n   "What the agent most desires to reach" (1.4.49)\n   → रामः ग्रामं गच्छति — ग्राम is karman\n\n3. करण (karaṇa) — INSTRUMENT\n   "The most effective means" (1.4.42: साधकतमं करणम्)\n   → रामः बाणेन हन्ति — बाण (arrow) is karaṇa\n\n4. सम्प्रदान (sampradāna) — RECIPIENT\n   "The one toward whom giving happens" (1.4.32)\n   → रामः ब्राह्मणाय धनं ददाति — ब्राह्मण is sampradāna\n\n5. अपादान (apādāna) — SOURCE/ABLATION\n   "The fixed point of separation" (1.4.24: ध्रुवमपायेऽपादानम्)\n   → वृक्षात् पत्रं पतति — वृक्ष (tree) is apādāna\n\n6. अधिकरण (adhikaraṇa) — LOCATION\n   "The locus of action" (1.4.45)\n   → रामः ग्रामे वसति — ग्राम is adhikaraṇa\n\n💡 KEY INSIGHT: Vibhakti (case ending) maps to kāraka but ISN\'T the kāraka. Same kāraka can take different cases:\n  • Agent in active voice → 1st case (रामः)\n  • Agent in passive voice → 3rd case (रामेण)\n  Same SEMANTIC role, different MORPHOLOGY.\n\nThis distinction wasn\'t formally made in Western linguistics until Fillmore\'s "Case Grammar" (1968) — Panini did it in ~500 BCE.' },
            { type: 'multi', q: 'कर्तृ (kartṛ) means:', options: ['Action', 'Doer / Agent', 'Done', 'To do'], answer: 1 },
            { type: 'multi', q: 'In "रामः बाणेन हन्ति" (Rama kills with an arrow), बाण is which kāraka?', options: ['कर्तृ', 'कर्म', 'करण (instrument)', 'अपादान'], answer: 2 },
            { type: 'multi', q: 'In "वृक्षात् पत्रं पतति" (a leaf falls from the tree), वृक्ष is:', options: ['अधिकरण (location)', 'अपादान (source/ablation)', 'सम्प्रदान', 'करण'], answer: 1 },
            { type: 'match', q: 'Match kāraka to role:', pairs: [['कर्तृ', 'Agent (doer)'], ['कर्म', 'Patient (object)'], ['करण', 'Instrument'], ['सम्प्रदान', 'Recipient'], ['अपादान', 'Source'], ['अधिकरण', 'Location']] },
            { type: 'multi', q: "Why is Panini's kāraka system revolutionary?", options: ['It makes Sanskrit pretty', 'It separates semantic role from morphological case — anticipating modern thematic role theory by 2,500 years', 'It has 6 things', 'It is sacred'], answer: 1 },
            { type: 'krama', title: '📿 6 Kārakas in canonical order:', sequence: ['1. कर्तृ (Agent)', '2. कर्म (Object)', '3. करण (Instrument)', '4. सम्प्रदान (Recipient)', '5. अपादान (Source)', '6. अधिकरण (Location)'], q: 'After करण comes?', options: ['कर्तृ', 'सम्प्रदान', 'अपादान', 'अधिकरण'], answer: 1 },
          ],
        },
        {
          id: '11.15', title: 'Lopa, Āgama, Ādeśa / लोप-आगम-आदेश', icon: '⚙️',
          desc: "Panini's three fundamental operations on forms",
          ex: [
            { type: 'info', text: '⚙️ The Three Operations of Pāṇinian Grammar:\n\nEverything Panini does to a word — every transformation in those 4,000 sutras — falls into ONE of three operation types:\n\n1. लोप (LOPA) — DELETION / DROP\n   A sound or affix vanishes.\n   Sutra 1.1.60: अदर्शनं लोपः — "non-appearance is lopa"\n\n   Example: रामस् + अहम् → रामोऽहम्\n     The original "स" went through visarga → ओ; \n     for the next word, अ underwent lopa (replaced by avagraha ऽ).\n\n   Special types:\n   • श्लु (ślu) — root reduplication zero (in class 3 verbs: हु → जुहोति, with reduplication but no infix)\n   • लुक् (luk) — affix dropped without trace\n   • लुप् (lup) — affix dropped, leaving meaning trace\n\n2. आगम (ĀGAMA) — INSERTION / AUGMENT\n   A new sound is added.\n   Marked by it-letters showing WHERE it inserts:\n   • -ट् marker → at the start (e.g., इट्, अट्)\n   • -क् marker → at the end\n   • -म् marker → after the last vowel (e.g., नुम् in फलानि)\n\n   Example: भू + स्य + ति → भविष्यति (इट् inserts इ: भव्-इ-ष्यति)\n   Example: अ-ग-छ-त् (अट् augment अ added at start of past tense)\n     गम् → अगच्छत् ("he went")\n\n3. आदेश (ĀDEŚA) — SUBSTITUTION / REPLACEMENT\n   One sound replaces another.\n\n   Example: इ + अ → य् + अ = या (इको यणचि — इ → य before vowel)\n   Example: स → ष (ṣatva substitution)\n   Example: न → ण (ṇatva substitution)\n\n💡 ELEGANT POINT: These three cover EVERY morphological change in Sanskrit. Panini\'s entire grammar = (lopa | āgama | ādeśa) applied recursively under the right conditions.\n\nThis is exactly how modern computational linguistics models morphology: insertion, deletion, substitution rules with ordering. Panini got there 2,500 years early.' },
            { type: 'multi', q: 'लोप (lopa) means:', options: ['Insertion', 'Deletion (अदर्शनम्)', 'Substitution', 'Doubling'], answer: 1 },
            { type: 'multi', q: 'आगम (āgama) means:', options: ['Substitution', 'Deletion', 'Augment / Insertion', 'Reduplication'], answer: 2 },
            { type: 'multi', q: 'आदेश (ādeśa) means:', options: ['Insertion', 'Deletion', 'Substitution / Replacement', 'Doubling'], answer: 2 },
            { type: 'match', q: 'Match operation to example:', pairs: [['Lopa', 'अहम् → ऽहम् (अ deleted)'], ['Āgama', 'गम् → अगच्छत् (अट् augment)'], ['Ādeśa', 'स → ष (ṣatva)'], ['Three together', "Cover every Pāṇinian transform"]] },
            { type: 'multi', q: 'In modern linguistics, these three operations parallel:', options: ['Phonemes / morphemes / syntagmemes', 'Insertion / deletion / substitution rules in computational morphology', 'Subject / verb / object', 'Past / present / future'], answer: 1 },
            { type: 'smriti', showText: '📸 Three operations of Pāṇinian grammar:\n\n• लोप (lopa) = DELETE\n  → अदर्शनं लोपः\n  → रामोऽहम् (अ dropped)\n\n• आगम (āgama) = INSERT\n  → marked by it-letters showing position\n  → अ-गच्छत् (अट् inserted at front)\n\n• आदेश (ādeśa) = SUBSTITUTE\n  → one sound replaces another\n  → इ + अ → य (yaṇ ādeśa)\n\nEvery transformation in 4,000 sutras = one of these three.', showTime: 10, q: '🧠 If a sound is REPLACED by another sound, the operation is:', options: ['Lopa', 'Āgama', 'Ādeśa', 'Dvitva'], answer: 2 },
          ],
        },
        {
          id: '11.16', title: 'Paribhāṣā / परिभाषा', icon: '📜',
          desc: "Meta-rules: how to read Panini's sutras themselves",
          ex: [
            { type: 'info', text: '📜 Paribhāṣā (परिभाषा) = META-RULES\n\nPanini\'s sutras don\'t just describe Sanskrit — they describe HOW TO READ themselves. These rules-about-rules are paribhāṣā.\n\nThis is one of the most modern aspects of his grammar — he formally separates:\n\n  • OBJECT-language rules (about Sanskrit)\n  • META-language rules (about the grammar itself)\n\nTuring did this in 1936. Panini did it in 500 BCE.\n\nFamous paribhāṣās:\n\n1. विप्रतिषेधे परं कार्यम् (1.4.2)\n   "When two rules conflict, the LATER rule prevails."\n   → Rule ordering — like priority in modern PL!\n\n2. नाजानन्तर्ये बहिष्ट्वप्रक्लृप्तिः (Paribhāṣenduśekhara 13)\n   "Adjacency is not broken by something irrelevant."\n   → Rules about feature-adjacency.\n\n3. यथासंख्यमनुदेशः समानाम् (1.3.10)\n   "Match same-numbered items respectively."\n   → If a rule lists [a, b, c] → [x, y, z], read as a→x, b→y, c→z.\n   This is exactly modern parallel substitution!\n\n4. एकदेशविकृतमनन्यवत् (Paribhāṣā 37)\n   "Something altered in one part is treated as the same whole."\n   → Identity persistence under transform.\n\n5. आदिरन्त्येन सहेता (1.1.71)\n   "First letter together with the marker indicates the pratyāhāra."\n   → How to READ pratyāhāra notation. Without this meta-rule, you couldn\'t read अच्!\n\n📿 CATEGORY OF PARIBHĀṢĀ\n\n• निर्वचन (definitional) — what a term means (e.g., what counts as a sutra)\n• विधि (operational) — how rules apply\n• निषेध (prohibitive) — when rules DON\'T apply\n• अधिकार (governing) — a rule that "rules over" a stretch of subsequent sutras (like a header)\n\n💡 MIND-BLOWING POINT:\nWestern computer science took until ~1960 (BNF, attribute grammars, ALGOL 68 reports) to figure out that you need a meta-language to describe a grammar precisely.\n\nPanini built this layered system 2,500 years earlier — and his meta-rules are still consistent and decidable when implemented as a computer program (cf. Kiparsky, Cardona).' },
            { type: 'multi', q: 'Paribhāṣā means:', options: ['Sound rule', 'Compound rule', 'Meta-rule (rule about how to read rules)', 'Verb rule'], answer: 2 },
            { type: 'multi', q: '"विप्रतिषेधे परं कार्यम्" means:', options: ['Always apply the first rule', 'When two rules conflict, the later one prevails', 'Apply both rules', 'Skip both rules'], answer: 1 },
            { type: 'multi', q: 'Why is Panini\'s separation of meta-rules from object-rules considered "modern"?', options: ['It looks pretty', 'Western linguistics + computer science only formalized this distinction in the 20th century (BNF, attribute grammars)', 'It has lots of rules', 'It uses Sanskrit'], answer: 1 },
            { type: 'match', q: 'Match paribhāṣā to function:', pairs: [['विप्रतिषेधे परं', 'Conflict → later rule wins'], ['यथासंख्यम्', 'Parallel substitution'], ['आदिरन्त्येन सहेता', 'How to read pratyāhāra'], ['अधिकार', 'Header rule governing range']] },
            { type: 'multi', q: 'अधिकार (adhikāra) sutras are:', options: ['Verb-only rules', 'Header rules that govern a range of subsequent sutras', 'Optional rules', 'Beginner rules'], answer: 1 },
            { type: 'smriti', showText: '📸 Paribhāṣā = META-RULES\n\n4 types:\n• निर्वचन — definitional\n• विधि — operational\n• निषेध — prohibitive\n• अधिकार — governing/header\n\nKey paribhāṣās:\n• विप्रतिषेधे परं कार्यम् = later rule wins\n• यथासंख्यम् = parallel substitution\n• आदिरन्त्येन सहेता = read pratyāhāra\n\nPanini: 500 BCE.\nBNF + meta-grammar: ~1960 CE.\n2,500 years early.', showTime: 10, q: '🧠 An अधिकार sutra is a:', options: ['Lone rule', 'Header that governs a range of subsequent rules', 'Verb rule', 'Conjunction rule'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 41: Anubandha System (it-saṃjñā) ───
    {
      u: 41,
      title: 'Anubandha / अनुबन्धाः',
      sub: "Panini's marker letters — the secret code of his sutras",
      icon: '🔖',
      color: '#C026D3',
      lessons: [
        {
          id: '11.17', title: 'It-saṃjñā / Anubandhas', icon: '🔖',
          desc: "The hidden marker letters that encode rule behavior",
          ex: [
            { type: 'info', text: '🔖 Anubandha (अनुबन्धः) = "marker / it-letter"\n\nWhen Panini writes "घञ्" or "क्त्वा" or "लट्", the consonants ञ्, क्, ट् are NOT part of the suffix. They are MARKERS that tell you HOW the suffix behaves.\n\nDefining sutra: "उपदेशे ऽजनुनासिक इत्" (1.3.2) — "in original-statement, a nasal vowel is it"\n+ "हलन्त्यम्" (1.3.3) — "the final consonant of an upadeśa is it"\n\n📿 KEY MARKERS AND THEIR EFFECTS:\n\n• ट् (ṭ) — denotes ādi (start) position\n  → ट-it suffix attaches at the FRONT\n  → Examples: ट-it augments come at start (अट्, आट्)\n\n• क् (k) — "no guṇa, no vṛddhi"\n  → क-it suffixes prevent guṇa/vṛddhi of stem vowel\n  → क्त, क्तवतु → no strengthening (बु-त = बुत, not बोत)\n\n• ङ् (ṅ) — "no guṇa" (just guṇa block)\n  → ङ-it suffixes block guṇa specifically\n  → लिङ् ending (potential)\n\n• श् (ś) — "sārvadhātuka" marker\n  → ś-it suffixes are sārvadhātuka (present-class)\n  → शप् (the शप् vikaraṇa for class 1)\n\n• प् (p) — "pit" → marks anudātta\n• ञ् (ñ) — vṛddhi-causing\n  → ञ-it suffix → root vowel takes vṛddhi\n  → ण्यत्, घञ् → vṛddhi triggered\n\n• ण् (ṇ) — vṛddhi (strongest grade)\n• न् (n) — udātta accent on ending vowel\n\n📿 EXAMPLES:\n\nलट् (laṭ — present tense indicator):\n  ल = real letter (the lakāra base)\n  ट् = marker — encodes "primary endings"\n\nक्त्वा (ktvā — gerund):\n  क्त्वा\n  क् = marker (no guṇa to root)\n  त्वा = actual suffix\n  ∴ कृ + क्त्वा → कृ + त्वा → कृत्वा ("having done")\n  No guṇa applied because of the क् marker!\n\nघञ् (ghañ — primary derivative):\n  घ = it-marker (ghu/ghi class signal)\n  अ = actual vowel\n  ञ् = vṛddhi-causing marker\n  Applied to √भू: vṛddhi → भाव (state, being)\n\n💡 THE GENIUS: Panini compresses RULE BEHAVIOR into the spelling of every suffix. By reading the markers, you instantly know which rules apply. This is type-system encoding — 2,500 years before computer science.' },
            { type: 'multi', q: 'In the suffix क्त्वा (ktvā), the क् is:', options: ['Pronounced', 'A marker (it-letter) blocking guṇa, not pronounced', 'Part of the actual ending', 'A consonant that joins'], answer: 1 },
            { type: 'multi', q: 'A ञ-it suffix (like घञ्) triggers:', options: ['No change', 'Guṇa', 'Vṛddhi (strongest grade)', 'Lopa'], answer: 2 },
            { type: 'multi', q: 'क-it suffixes prevent:', options: ['Sandhi', 'Guṇa AND vṛddhi of the root vowel', 'Reduplication', 'Accent shift'], answer: 1 },
            { type: 'match', q: 'Match marker → effect:', pairs: [['ङ् (ṅ)', 'Blocks guṇa'], ['क् (k)', 'Blocks guṇa + vṛddhi'], ['ञ् (ñ)', 'Triggers vṛddhi'], ['ट् (ṭ)', 'Indicates ādi (start) position'], ['श् (ś)', 'Marks sārvadhātuka']] },
            { type: 'multi', q: 'Why are markers like श्, ङ्, क् considered Pāṇinian "type system"?', options: ['Aesthetic', 'They encode rule-behavior into the spelling — reading the markers tells you which rules apply, exactly like type annotations in programming', 'Decorative', 'Sound-only purpose'], answer: 1 },
            { type: 'smriti', showText: '📸 The 7 most useful anubandhas:\n\n• ट् — ādi (front)\n• क् — no guṇa, no vṛddhi\n• ङ् — no guṇa\n• ञ् — vṛddhi triggered\n• श् — sārvadhātuka\n• प् — pit (accent)\n• ण् — vṛddhi (strongest)\n\nRead the marker → know the rules.', showTime: 8, q: '🧠 क-it markers cause:', options: ['Vṛddhi only', 'No guṇa AND no vṛddhi', 'Sandhi', 'Accent shift only'], answer: 1 },
          ],
        },
        {
          id: '11.18', title: 'Special Pratyāhāras / विशेष-प्रत्याहाराः', icon: '🔠',
          desc: "Beyond अच्/हल् — the 30+ pratyāhāras Panini actually uses",
          ex: [
            { type: 'info', text: '🔠 The Full Pratyāhāra Set\n\nPanini built ~42 pratyāhāras from the 14 Maheshvara Sutras. Reading any sutra requires knowing these. Beyond अच्/हल्/इक्/यण्, here are the major ones:\n\n📿 VOWEL PRATYĀHĀRAS:\n\n• अच् (ac) = ALL vowels: अ इ उ ऋ ऌ ए ओ ऐ औ\n• अण् (aṇ) = "1st-grade" vowels: अ इ उ\n• इक् (ik) = simple vowels: इ उ ऋ ऌ\n• उक् (uk) = उ ऋ ऌ\n• एङ् (eṅ) = ए ओ\n• ऐच् (aic) = ऐ औ (vṛddhi vowels)\n\n📿 SEMI-VOWEL & CONSONANT PRATYĀHĀRAS:\n\n• हल् (hal) = ALL consonants\n• यण् (yaṇ) = semi-vowels: य व र ल\n• अट् (aṭ) = vowels + semi-vowels + ह\n• यण् + nasals = ञम् (ñam) = nasals\n\n📿 STOP CONSONANT PRATYĀHĀRAS:\n\n• झल् (jhal) = all stops + sibilants (झ-ह range)\n• झय् (jhay) = voiced + voiceless stops (no sibilant)\n• खय् (khay) = voiceless stops only\n• चय् (cay) = voiceless unaspirated stops (च ट त क प)\n• झश् (jhaś) = all voiced stops (झ भ घ ढ ध ज ब ग ड द)\n• जश् (jaś) = also voiced unaspirated\n• शर् (śar) = sibilants: श ष स\n• खर् (khar) = voiceless stops + sibilants\n• झर् (jhar) = mixed group\n\n📿 KEY USAGE EXAMPLES:\n\nSutra 8.4.53: झलां जश् झशि\n  → "झल् changes to जश् (voiced) before झश्"\n  → Final stops voice when followed by another voiced stop\n  → लभ् + त = लब्ध (b+t → b+dh)\n\nSutra 8.2.39: झलां जशोऽन्ते\n  → Similar: voicing assimilation\n\nSutra 8.2.30: चोः कुः\n  → "चय्-letters become कय्-letters word-finally"\n  → वाच् + सु → वाक्सु (च→क)\n\n📿 HOW TO READ A PRATYĀHĀRA — the formula:\n\n1. Find the FIRST letter (start anchor)\n2. Find the marker (it-letter) at the end\n3. Include EVERYTHING from anchor to (but not past) the marker — across multiple Maheshvara sutras if needed\n\nExample: यण् = "य to ण् marker" → spans Maheshvara sutras 5–6:\n  Sutra 5: ह य व र ट्\n  Sutra 6: ल ण्\n  → Start at य, end before ण् → य व र ल ✓\n\n💡 IMPORTANT: There are TWO ण्s (in sutras 1 and 6) and TWO ह्s. Panini uses CONTEXT to disambiguate. The paribhāṣā "आदिरन्त्येन सहेता" tells you to read with the LAST occurrence of the marker that produces a meaningful group.' },
            { type: 'multi', q: 'अण् (aṇ) refers to:', options: ['All vowels', 'Just अ इ उ (the 3 simple short vowels)', 'All consonants', 'Vṛddhi vowels'], answer: 1 },
            { type: 'multi', q: 'झल् (jhal) refers to:', options: ['Vowels only', 'All semi-vowels', 'Stops + sibilants (झ to ह range)', 'Nasals'], answer: 2 },
            { type: 'multi', q: 'खय् (khay) refers to:', options: ['Voiceless stops only', 'Voiced stops', 'All vowels', 'Sibilants'], answer: 0 },
            { type: 'match', q: 'Match pratyāhāra to letters:', pairs: [['अण्', 'अ इ उ'], ['एङ्', 'ए ओ'], ['ऐच्', 'ऐ औ (vṛddhi)'], ['शर्', 'श ष स (sibilants)'], ['झय्', 'voiced + voiceless stops']] },
            { type: 'multi', q: '"चोः कुः" sutra (8.2.30) does what?', options: ['Voicing change', 'च-class becomes क-class word-finally (वाच् → वाक्)', 'Sandhi blocking', 'Reduplication'], answer: 1 },
            { type: 'multi', q: 'Why does Panini use ~42 pratyāhāras?', options: ['Decoration', 'Compression: each codes a complete consonant/vowel class — 4000 sutras stay short', 'For rhythm', 'Tradition'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 42: Stem States — Aṅga, Pada, Bha + Iṭ-Samprasāraṇa ───
    {
      u: 42,
      title: 'Stem States / अङ्ग-पद-भ',
      sub: 'When and how stems transform — the operational pivots',
      icon: '🧱',
      color: '#0891B2',
      lessons: [
        {
          id: '11.19', title: 'Aṅga, Pada, Bha / स्थानभेदाः', icon: '🧱',
          desc: 'The three operational states a stem can be in',
          ex: [
            { type: 'info', text: '🧱 STEM STATES — Aṅga, Pada, Bha\n\nPanini classifies a stem into 3 states depending on what affix follows. Each state triggers DIFFERENT rules. This is fundamental — without these labels, you can\'t tell when sandhi applies.\n\n📿 1. अङ्ग (AṄGA) — "operand stem"\n   Definition (1.4.13): यस्मात् प्रत्ययविधिस्तदादिप्रत्ययेऽङ्गम्\n   → "What a suffix is added to, when it meets the suffix, becomes aṅga"\n\n   When stem + suffix is being formed, the stem is aṅga.\n   Most internal sandhi rules trigger ON aṅga.\n\n   Example: रामा (stem) + सु (nom.sg.) → रामस् (aṅga state)\n   Aṅga rules apply: vowel changes, augments, etc.\n\n📿 2. पद (PADA) — "completed word"\n   Definition (1.4.14): सुप्तिङन्तं पदम्\n   → "What ends in sup (case suffix) or tiṅ (verb suffix) is pada"\n\n   Once a word is FINISHED with a sup or tiṅ ending, it becomes pada.\n   Word-final sandhi (visarga, jash-tva) applies to pada-final.\n\n   Example: रामस् (after sup ending) → pada → visarga sandhi → रामः ✓\n\n📿 3. भ (BHA) — "weak/abbreviated stem"\n   Definition (1.4.18): यचि भम्\n   → "Before vowel-initial endings or those starting in sibilant + vowel, the stem is bha"\n\n   In "weak" cases (3rd-7th cases) before vowel endings, stems collapse:\n     राजन् → in nominative pada → राजा (full)\n     राजन् → before vowel-initial ending (3rd onwards) → राज्ञ् (bha state)\n     → राज्ञा (with him) ← bha + ā\n\n📿 USAGE TABLE (राजन् "king"):\n  Case 1 sg: राजा       (pada — n drops)\n  Case 2 sg: राजानम्    (aṅga — n stays)\n  Case 3 sg: राज्ञा      (bha — n → ñ; dropped middle)\n  Case 6 pl: राज्ञाम्     (bha — same collapse)\n\n💡 RULE TRIGGERS:\n  • Aṅga state → most internal operations (guṇa, vṛddhi, augments)\n  • Pada state → word-final operations (visarga, jash-tva)\n  • Bha state → stem collapse before vowel endings\n\nWithout knowing which state applies, you can\'t tell if a rule applies. This is the key to advanced parsing.' },
            { type: 'multi', q: 'पद (pada) is defined as:', options: ['Any stem', 'A stem that ends in sup or tiṅ (case or verb ending) — i.e., a finished word', 'Before vowel ending', 'Reduplicated form'], answer: 1 },
            { type: 'multi', q: 'भ (bha) state applies:', options: ['Always', 'When a vowel-initial ending follows (weak cases)', 'Word-finally', 'In compounds only'], answer: 1 },
            { type: 'multi', q: 'राज्ञा (rājñā, "by the king") — what state was the stem राजन् in?', options: ['Aṅga', 'Pada', 'Bha (weak — before vowel ending आ, the न् → ञ् + collapse)', 'None'], answer: 2 },
            { type: 'match', q: 'Match state to function:', pairs: [['Aṅga', 'Stem + suffix junction (most rules apply)'], ['Pada', 'Finished word (final-sandhi triggers)'], ['Bha', 'Weak stem before vowel-init endings']] },
            { type: 'multi', q: 'Why are these states critical to know?', options: ['Aesthetic', 'Each state triggers a DIFFERENT set of rules — same stem behaves differently in different states', 'Just labels', 'Only for grammarians'], answer: 1 },
          ],
        },
        {
          id: '11.20', title: 'Iṭ-Āgama & Samprasāraṇa', icon: '🔄',
          desc: 'The इ-augment and the y/v/r/l ↔ i/u/ṛ/ḷ shift',
          ex: [
            { type: 'info', text: '🔄 Two more critical Pāṇinian operations:\n\n══════════════════════════════════\nA. IṬ-ĀGAMA (इडागमः) — "the इ insertion"\n══════════════════════════════════\n\nWhen an ārdhadhātuka suffix (non-present-class suffix) attaches to a verb root, an इ might be inserted between root and suffix. This decides "seṭ" vs "aniṭ".\n\nSutra: आर्धधातुकस्येड्वलादेः (7.2.35)\n  → "An इ is inserted before an ārdhadhātuka suffix beginning with a consonant"\n\n📿 SET (सेट्) ROOTS — take इ:\n  • √पठ् + क्त = पठ् + इ + त = पठित ("read")\n  • √भू + क्त्वा = भू + इ + त्वा = भूत्वा? → actually भूत्वा (special)\n  • √जीव् + क्त = जीव + इ + त = जीवित ("alive")\n  • √लिख् + क्त = लिख् + इ + त = लिखित ("written")\n\n📿 ANIṬ (अनिट्) ROOTS — DO NOT take इ:\n  • √कृ + क्त = कृ + त = कृत ("done")\n  • √गम् + क्त = गत ("gone")\n  • √पच् + क्त = पक्व ("cooked")\n  • √भुज् + क्त = भुक्त ("eaten")\n\nA root\'s seṭ/aniṭ status is fixed (memorized from dhātupāṭha). Roots ending in "ī" with a special diacritic are aniṭ; the rest are usually seṭ.\n\nWHY IT MATTERS: Every past participle, gerund, infinitive, future form depends on whether the root is seṭ or aniṭ — completely changes the form.\n\n══════════════════════════════════\nB. SAMPRASĀRAṆA (सम्प्रसारणम्) — semi-vowel ↔ vowel\n══════════════════════════════════\n\nDefinition (1.1.45): इग्यणः सम्प्रसारणम्\n  → "An इक् (इ उ ऋ ऌ) replacing a यण् (य व र ल) is samprasāraṇa"\n\nThis is REVERSE of yaṇ-sandhi:\n  Yaṇ-sandhi: इ → य (forward)\n  Samprasāraṇa: य → इ (backward)\n\nApplied especially in:\n• Perfect tense formation\n• kta participles of certain roots\n• Compounds before specific suffixes\n\nExamples:\n  √यज् ("worship") + क्त → इ-य-ज + त → इष्ट ("worshipped")\n    [the य → इ via samprasāraṇa]\n  √वच् ("speak") + क्त → उ-व-च + त → उक्त ("spoken")\n    [the व → उ]\n  √स्वप् ("sleep") + क्त → सु-व-प + त → सुप्त ("slept")\n  √प्रच्छ् ("ask") + क्त → पृ-च्छ + त → पृष्ट ("asked")\n    [the र → ऋ]\n\n💡 PĀṆINIAN PRINCIPLE:\n  These two operations + lopa + āgama + ādeśa cover ~80% of all stem-modifications in Sanskrit.\n  Master these and almost any verb form becomes derivable.' },
            { type: 'multi', q: 'A SET (seṭ) root takes:', options: ['Lopa', 'इ-augment (इडागम) before consonant ārdhadhātuka suffixes', 'Vṛddhi', 'No change'], answer: 1 },
            { type: 'multi', q: 'गत (gata, "gone") from √गम् — is √गम् seṭ or aniṭ?', options: ['Seṭ', 'Aniṭ (no इ inserted: gam + ta = gata)', 'Either', 'Cannot tell'], answer: 1 },
            { type: 'multi', q: 'Samprasāraṇa converts:', options: ['Vowels to semi-vowels', 'Semi-vowels (य/व/र/ल) to corresponding vowels (इ/उ/ऋ/ऌ)', 'Consonants to vowels', 'No change'], answer: 1 },
            { type: 'multi', q: '√यज् + क्त → इष्ट ("worshipped"). What operation made य → इ?', options: ['Lopa', 'Yaṇ-sandhi', 'Samprasāraṇa (reverse-yaṇ)', 'Reduplication'], answer: 2 },
            { type: 'match', q: 'Match root → kta participle:', pairs: [['√कृ', 'कृत (aniṭ — no इ)'], ['√पठ्', 'पठित (seṭ — with इ)'], ['√यज्', 'इष्ट (samprasāraṇa)'], ['√वच्', 'उक्त (samprasāraṇa)'], ['√जीव्', 'जीवित (seṭ)']] },
            { type: 'multi', q: 'Why are seṭ/aniṭ + samprasāraṇa essential to learn?', options: ['Optional', 'Every past participle, gerund, infinitive form depends on these — affects daily Sanskrit', 'Vedic only', 'Rare'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 43: Voice & Verbal Derivatives ───
    {
      u: 43,
      title: 'Three Prayogas / त्रयः प्रयोगाः',
      sub: 'Active, passive, impersonal + participles + gerund/infinitive',
      icon: '🗣️',
      color: '#16A34A',
      lessons: [
        {
          id: '11.21', title: 'Kartari, Karmaṇi, Bhāve / त्रयः प्रयोगाः', icon: '🗣️',
          desc: 'The three voices of Sanskrit: active, passive, impersonal',
          ex: [
            { type: 'info', text: '🗣️ The Three Prayogas (प्रयोगाः) — Voice in Sanskrit\n\nPāṇini gives THREE voices — Western grammar usually has two (active/passive). Sanskrit has a third — bhāve (impersonal/abstract).\n\n══════════════════════════════════\n1. कर्तरि प्रयोगः (KARTARI) — ACTIVE\n══════════════════════════════════\nThe agent (kartṛ) is in 1st case, verb agrees with agent.\n\n  रामः फलं खादति।\n  Rāma (1st) eats fruit (2nd).\n  → Rāma is the focus. Verb खादति agrees with रामः.\n\n══════════════════════════════════\n2. कर्मणि प्रयोगः (KARMAṆI) — PASSIVE\n══════════════════════════════════\nThe object (karman) becomes 1st case; agent goes to 3rd case (instrumental). Verb agrees with the patient.\n\nFormation: root + य (yaK suffix) → passive stem\n  Sutra 3.1.67: सार्वधातुके यक्\n\n  रामेण फलं खाद्यते।\n  By Rāma (3rd) the fruit (1st) is eaten.\n  → Fruit is the focus. Verb खाद्यते (3rd sg passive) agrees with फलम्.\n\nMore examples:\n  • Active: रामः पुस्तकं पठति।\n    Passive: रामेण पुस्तकं पठ्यते। (the book is read by Rāma)\n  • Active: सः गृहं गच्छति।\n    Passive: तेन गृहं गम्यते। (the house is gone-to by him)\n\n══════════════════════════════════\n3. भावे प्रयोगः (BHĀVE) — IMPERSONAL\n══════════════════════════════════\nUsed with INTRANSITIVE verbs. Both kartṛ and karman are in non-1st cases. Verb is in default 3rd singular passive form. The ACTION ITSELF is the focus.\n\nFormation: same as karmaṇi — root + य (yaK)\n\n  रामेण सुप्यते।\n  By Rāma (3rd) [it] is slept.\n  → Sleep is the focus. No object (intransitive). Verb is 3rd sg passive form, but with no subject in 1st case.\n\nMore examples:\n  • रामेण हस्यते। (laughing happens by Rāma)\n  • मया गम्यते। (going happens by me)\n  • भिक्षुणा भिक्ष्यते। (begging happens by the beggar)\n\n💡 THE KEY DIFFERENCE:\n  • Kartari → focus on agent (transitive or intransitive)\n  • Karmaṇi → focus on patient (transitive only; passive)\n  • Bhāve → focus on action (intransitive; impersonal)\n\nMost Sanskrit prose uses karmaṇi as much as kartari. Vedic Sanskrit uses bhāve frequently. Without knowing all 3, half the literature seems strange.\n\n📿 PASSIVE VERB FORMATION:\n\nLAṬ (present) passive of √पठ्:\n  Sg: पठ्यते / पठ्यसे / पठ्ये\n  Du: पठ्येते / पठ्येथे / पठ्यावहे\n  Pl: पठ्यन्ते / पठ्यध्वे / पठ्यामहे    (3rd / 2nd / 1st person)' },
            { type: 'multi', q: 'In कर्मणि प्रयोग (passive), the agent goes to which case?', options: ['1st (nominative)', '2nd (accusative)', '3rd (instrumental — तेन/रामेण)', '6th (genitive)'], answer: 2 },
            { type: 'multi', q: '"रामेण फलं खाद्यते" means:', options: ['Rāma eats fruit', 'The fruit is eaten by Rāma (passive)', 'Rāma sees fruit', 'Eating happens'], answer: 1 },
            { type: 'multi', q: 'भावे प्रयोग is used with:', options: ['Transitive verbs', 'Intransitive verbs (action-focus, no object)', 'Compounds', 'Imperatives only'], answer: 1 },
            { type: 'multi', q: 'The passive/impersonal stem is formed by adding which suffix?', options: ['यक् (yak) → -ya- before endings', 'क्त (kta)', 'णिच् (ṇic)', 'सन् (san)'], answer: 0 },
            { type: 'match', q: 'Match prayoga to subject case:', pairs: [['Kartari (active)', 'Agent in 1st case'], ['Karmaṇi (passive)', 'Object in 1st case, agent in 3rd'], ['Bhāve (impersonal)', 'No 1st case; agent in 3rd, verb in default 3rd sg']] },
            { type: 'multi', q: 'Why is bhāve unique to Sanskrit (vs English)?', options: ['English has it', 'Sanskrit foregrounds the ACTION itself with no required subject — closest English gets is "it is being slept"', 'Aesthetic only', 'Vedic-only'], answer: 1 },
          ],
        },
        {
          id: '11.22', title: 'Participles / कृदन्त-भेदाः', icon: '🎭',
          desc: 'kta, ktavatu, śatṛ, śānac — the -ed/-ing forms of Sanskrit',
          ex: [
            { type: 'info', text: '🎭 PARTICIPLES (कृदन्ताः) — Verbal Adjectives\n\nIn Sanskrit, participles do enormous work — they replace whole clauses. Six major types:\n\n══════════════════════════════════\n1. क्त (KTA) — past passive participle ("-ed")\n══════════════════════════════════\nMeaning: "having been [verb]ed" (passive past)\n\n  √कृ + क्त = कृत (done, made)\n  √गम् + क्त = गत (gone)\n  √पठ् + क्त = पठित (read — seṭ root, इ inserted)\n  √दृश् + क्त = दृष्ट (seen)\n  √श्रु + क्त = श्रुत (heard)\n  √भू + क्त = भूत (been)\n\n  Used as adjective: कृतं कार्यम् (done work / completed task)\n\n══════════════════════════════════\n2. क्तवतु (KTAVATU) — past active participle ("having -ed")\n══════════════════════════════════\nMeaning: "[someone] who has [verb]ed" (active past)\n\n  √कृ + क्तवतु = कृतवत् (one who has done)\n  √गम् + क्तवतु = गतवत् (one who has gone)\n  √पठ् + क्तवतु = पठितवत् (one who has read)\n\n  सः रामायणं पठितवान्।\n  "He (is one who has) read the Rāmāyaṇa."\n\n══════════════════════════════════\n3. शतृ (ŚATṚ) — present active participle ("-ing")\n══════════════════════════════════\nMeaning: "[someone who is] [verb]ing" (active present)\nFor parasmaipada verbs.\n\nFormation: present stem + अत् (with marker श्)\n  √पठ् → पठ् + अत् → पठन्त् → पठन् ("reading")\n  √गम् → गच्छ + अत् → गच्छन्त् → गच्छन् ("going")\n\n  गच्छन् बालकः → "the boy who is going" / "the going boy"\n\n══════════════════════════════════\n4. शानच् (ŚĀNAC) — present middle participle\n══════════════════════════════════\nFor ātmanepada verbs. Ends in -मान.\n\n  √सेव् → सेवमान ("serving")\n  √भाष् → भाषमाण ("speaking")\n  √याच् → याचमान ("requesting")\n\n══════════════════════════════════\n5. स्यत् / स्यमान (FUTURE PARTICIPLE)\n══════════════════════════════════\nMeans "about to [verb]" — present + य.\n\n══════════════════════════════════\n6. क्त्यः / यत् / अनीयर् (FUTURE PASSIVE / GERUNDIVE)\n══════════════════════════════════\nMeans "should be [verb]ed" / "fit to be [verb]ed".\n\n  Suffixes: -तव्य (tavya), -अनीय (anīya), -य (ya)\n\n  √पठ् + तव्य = पठितव्य ("ought to be read")\n  √कृ + अनीय = करणीय ("ought to be done")\n  √सेव् + य = सेव्य ("worthy of being served")\n\n💡 USAGE TIP:\nA single participle can replace a whole subordinate clause:\n  "गच्छन् रामः" = "Rāma, who is going" / "Rāma while going"\n  "कृतम् कार्यम्" = "the work that has been done"\n\nThis lets Sanskrit pack enormous information into compact phrases.' },
            { type: 'multi', q: 'क्त (kta) participle gives:', options: ['Active future', 'Active present', 'Past PASSIVE — "having been [verb]ed" (e.g., कृत = done)', 'Subjunctive'], answer: 2 },
            { type: 'multi', q: 'शतृ (śatṛ) is used to form:', options: ['Past tense', 'Present ACTIVE participle for parasmaipada (e.g., पठन् = "reading")', 'Future', 'Imperative'], answer: 1 },
            { type: 'multi', q: 'शानच् (śānac) is used for:', options: ['Past', 'Present middle participle for ātmanepada (e.g., सेवमान = "serving")', 'Future', 'Imperative'], answer: 1 },
            { type: 'multi', q: 'पठितव्य means:', options: ['Read', 'Reading', 'Has read', 'OUGHT to be read (future passive / gerundive)'], answer: 3 },
            { type: 'match', q: 'Match suffix → meaning:', pairs: [['क्त (kta)', 'Past passive ("done")'], ['क्तवतु', 'Past active ("having done")'], ['शतृ', 'Present active ("doing")'], ['शानच्', 'Present middle ("doing — for self")'], ['तव्य/अनीय/य', 'Future passive ("ought to be done")']] },
            { type: 'multi', q: 'Why are participles so powerful in Sanskrit?', options: ['Decorative', 'A single participle replaces a subordinate clause — packs huge info compactly', 'Required by grammar only', 'Rare'], answer: 1 },
          ],
        },
        {
          id: '11.23', title: 'Gerund & Infinitive / क्त्वा-तुमुन्', icon: '🚶',
          desc: 'Having-done (ktvā/lyap) + To-do (tumun) — daily Sanskrit',
          ex: [
            { type: 'info', text: '🚶 GERUND & INFINITIVE\n\nThe two most COMMON non-finite forms in Sanskrit prose. Master these and you can read 70% of any text.\n\n══════════════════════════════════\nA. GERUND — "having [verb]ed"\n══════════════════════════════════\n\n📿 क्त्वा (KTVĀ) — for SIMPLE roots\n  Sutra: समानकर्तृकयोः पूर्वकाले (3.4.21)\n  → "For two acts with the same agent, the earlier one takes ktvā"\n\n  √कृ + क्त्वा → कृ + त्वा → कृत्वा ("having done")\n  √गम् + क्त्वा → गत्वा ("having gone")\n  √पठ् + क्त्वा → पठित्वा ("having read")\n  √भू + क्त्वा → भूत्वा ("having become")\n\nUsage:\n  कृत्वा कार्यं रामः गच्छति।\n  "Having done the work, Rāma goes."\n\n📿 ल्यप् (LYAP) — for PREFIXED roots (with उपसर्ग)\n  Sutra: समासेऽनञ्पूर्वे क्त्वो ल्यप् (7.1.37)\n  → "After a prefix (other than नञ्), क्त्वा becomes ल्यप् → -य"\n\n  आ + √गम् + ल्यप् → आगत्य ("having come")\n  उप + √गम् + ल्यप् → उपगम्य ("having approached")\n  अनु + √कृ + ल्यप् → अनुकृत्य ("having imitated")\n  सम् + √भू + ल्यप् → सम्भूय ("having become together")\n\nUsage:\n  शास्त्रं पठित्वा गुरुं प्रणम्य गच्छति।\n  "Having read the scripture, having bowed to the guru, [he] goes."\n  (Notice: पठित्वा = simple ktvā; प्रणम्य = prefixed lyap)\n\n══════════════════════════════════\nB. INFINITIVE — "to [verb]"\n══════════════════════════════════\n\n📿 तुमुन् (TUMUN) — gives -तुम्\n  Sutra: तुमुन्ण्वुलौ क्रियायां क्रियार्थायाम् (3.3.10)\n  → "When the action is for the sake of another action, use tumun"\n\n  √कृ + तुमुन् → कर्तुम् ("to do")\n  √गम् + तुमुन् → गन्तुम् ("to go")\n  √पठ् + तुमुन् → पठितुम् ("to read")\n  √पा + तुमुन् → पातुम् ("to drink")\n  √भू + तुमुन् → भवितुम् ("to be")\n\nUsage:\n  रामः ग्रामं गन्तुम् इच्छति।\n  "Rāma wishes TO GO to the village."\n\n  सः वेदं पठितुम् आगच्छति।\n  "He comes TO READ the Veda."\n\n══════════════════════════════════\nKEY DIFFERENCES\n══════════════════════════════════\n\n• क्त्वा / ल्यप् → "HAVING done" (sequential, completed first)\n  → root + त्वा (no prefix) OR root + य (with prefix)\n\n• तुमुन् → "TO do" (purpose, future intent)\n  → root + तुम्\n\n📿 PRO TIP:\nIn any Sanskrit narrative, you\'ll see chains:\n  "उत्थाय (lyap) | स्नात्वा (ktvā) | भुक्त्वा (ktvā) | पुस्तकं ग्रहीतुम् (tumun) गच्छति।"\n  → "Having gotten up, having bathed, having eaten, [he] goes TO TAKE the book."\n\nA single Sanskrit sentence can string 5+ ktvā/lyap clauses before the final verb.' },
            { type: 'multi', q: 'क्त्वा (ktvā) gives the meaning:', options: ['"To [verb]"', '"Having [verb]ed" — gerund', '"-ing"', '"Will [verb]"'], answer: 1 },
            { type: 'multi', q: 'When a root has a prefix (उपसर्ग), क्त्वा becomes:', options: ['Stays क्त्वा', 'ल्यप् → -य ending (e.g., आगत्य)', 'तुमुन्', 'Disappears'], answer: 1 },
            { type: 'multi', q: 'गन्तुम् means:', options: ['Going', 'Having gone', 'TO GO (infinitive)', 'Will go'], answer: 2 },
            { type: 'multi', q: '"रामः वेदं पठितुम् आगच्छति" means:', options: ['Rāma reads the Veda', 'Rāma comes after reading the Veda', 'Rāma comes TO READ the Veda', 'Rāma will read the Veda'], answer: 2 },
            { type: 'match', q: 'Match form to root:', pairs: [['कृत्वा', '√कृ + ktvā ("having done")'], ['आगत्य', 'आ + √गम् + lyap ("having come")'], ['गन्तुम्', '√गम् + tumun ("to go")'], ['पठित्वा', '√पठ् + ktvā ("having read")'], ['सम्भूय', 'सम् + √भू + lyap ("having become together")']] },
            { type: 'krama', title: '📿 Reading order in a chain:', sequence: ['उत्थाय (having risen)', 'स्नात्वा (having bathed)', 'भुक्त्वा (having eaten)', 'गन्तुम् (to go)', 'गच्छति (goes — main verb)'], q: '🧠 Final verb in such a chain comes:', options: ['First', 'Middle', 'LAST (Sanskrit verb-final)', 'Anywhere'], answer: 2 },
          ],
        },
      ],
    },
    // ─── Unit 44: Vibhakti-Prayoga, Pronouns, Numerals ───
    {
      u: 44,
      title: 'Vibhakti & Sarvanāma / प्रयोगाः',
      sub: 'Semantic case usage + irregular pronouns and numerals',
      icon: '🎯',
      color: '#8B5CF6',
      lessons: [
        {
          id: '11.24', title: 'Vibhakti-Prayoga / विभक्ति-प्रयोगः', icon: '🎯',
          desc: 'When each case is used semantically — beyond mere kāraka',
          ex: [
            { type: 'info', text: '🎯 VIBHAKTI-PRAYOGA — When to USE each case\n\nKāraka theory tells you the SEMANTIC roles. Vibhakti tells you the MORPHOLOGICAL cases. But which case is used WHEN? Panini gives specific rules in Adhyāya 2.3 — beyond just "agent = 1st, object = 2nd".\n\n══════════════════════════════════\n1ST CASE (PRATHAMĀ) — beyond subject:\n══════════════════════════════════\n• Subject of any sentence (agent in active, patient in passive)\n• PREDICATE NOUN: सः बालकः (he is a boy)\n• Naming/citation: रामः इति नाम (the name "Rāma")\n\n══════════════════════════════════\n2ND CASE (DVITĪYĀ) — beyond direct object:\n══════════════════════════════════\n• Direct object: फलं खादति\n• Destination of motion: ग्रामं गच्छति (to the village)\n• Duration of time: मासं पठति (reads for a month)\n• Distance: क्रोशं गच्छति (goes for a kṛośa)\n• Through/across: नदीं तरति (crosses the river)\n• "On both sides of": उभयतो ग्रामम् (on both sides of the village)\n\n══════════════════════════════════\n3RD CASE (TṚTĪYĀ) — beyond instrument:\n══════════════════════════════════\n• Instrument: हस्तेन (with the hand)\n• Agent in passive: रामेण कृतम् (done BY Rāma)\n• Accompaniment: मित्रेण सह (along with the friend)\n• Cause: ज्ञानेन मुक्तिः (liberation through knowledge)\n• Mode/manner: मधुरेण स्वरेण (in a sweet voice)\n• Body part affected: अक्ष्णा काणः (one-eyed)\n• Distinguishing mark: जटाभिर्तापसः (an ascetic, by his matted hair)\n\n══════════════════════════════════\n4TH CASE (CATURTHĪ) — beyond recipient:\n══════════════════════════════════\n• Recipient (दा-class verbs): ब्राह्मणाय धनम्\n• Purpose/benefit: मोक्षाय यत्नः (effort FOR liberation)\n• "For": यज्ञाय पशुः (animal FOR sacrifice)\n• Pleasing/intended for: देवेभ्यो नमः (salutations TO the gods)\n\n══════════════════════════════════\n5TH CASE (PAÑCAMĪ) — beyond ablation:\n══════════════════════════════════\n• Source/origin: वृक्षात् पत्रं (leaf FROM tree)\n• Comparison: रामात् बलवान् (stronger THAN Rāma)\n• FEAR: व्याघ्रात् बिभेति (fears THE TIGER)\n• Cause/reason: पापात् दुःखम् (sorrow FROM sin)\n• "Different from": धर्मात् भिन्नः (different FROM dharma)\n• Time after which: संवत्सरात् (after a year)\n\n══════════════════════════════════\n6TH CASE (ṢAṢṬHĪ) — possession + relation:\n══════════════════════════════════\n• Possession: रामस्य पुस्तकम्\n• "Of": ज्ञानस्य फलम् (the fruit OF knowledge)\n• Object of certain verbs: स्मरामि रामस्य (I remember OF Rāma)\n\n══════════════════════════════════\n7TH CASE (SAPTAMĪ) — beyond location:\n══════════════════════════════════\n• Location: वने वसति (lives IN the forest)\n• Time: रात्रौ (AT night)\n• "On the occasion of": युद्धे (in battle)\n• "In respect to": धर्मे निरतः (devoted TO dharma)\n• Topic: रामे रत्ता सीता (Sītā [in love] WITH Rāma)\n\n══════════════════════════════════\n8TH CASE (SAMBODHANA) — vocative:\n══════════════════════════════════\n• Direct address: हे राम! (O Rāma!)\n\n💡 KEY VERBS DEMANDING SPECIFIC CASES:\n  • भी (fear) → 5th case (व्याघ्रात्)\n  • स्था (stand) → 7th case (वने)\n  • दा (give) → 4th case (ब्राह्मणाय)\n  • स्मृ (remember) → 6th case (रामस्य)\n  • सेव् (serve) → 2nd case (गुरुम्)\n  • रुच् (please) → 4th case (बालकाय रोचते — "is pleasing TO the boy")' },
            { type: 'multi', q: '"Fears the tiger" in Sanskrit uses which case for tiger?', options: ['1st (व्याघ्रः)', '2nd (व्याघ्रम्)', '5th (व्याघ्रात्) — "fear FROM"', '7th (व्याघ्रे)'], answer: 2 },
            { type: 'multi', q: '"Stronger than Rāma" — Rāma goes in:', options: ['2nd', '3rd', '5th case (पञ्चमी for comparison)', '6th'], answer: 2 },
            { type: 'multi', q: '"With a friend" (accompaniment) uses which case + word?', options: ['2nd + सह', '3rd + सह (मित्रेण सह)', '4th + सह', '6th'], answer: 1 },
            { type: 'multi', q: '"Goes to the village" — village in:', options: ['1st', '2nd (ग्रामम्) — destination', '3rd', '7th'], answer: 1 },
            { type: 'match', q: 'Match verb → required case:', pairs: [['भी (fear)', '5th case'], ['दा (give)', '4th case (recipient)'], ['स्मृ (remember)', '6th case'], ['सेव् (serve)', '2nd case (object)'], ['स्था (stand)', '7th case (location)']] },
            { type: 'multi', q: '"Reads for a month" — month in:', options: ['1st', '2nd (मासम्) — duration', '3rd', '7th'], answer: 1 },
            { type: 'multi', q: 'For "by knowledge" (cause/instrument), use:', options: ['1st', '3rd (ज्ञानेन)', '5th', '6th'], answer: 1 },
          ],
        },
        {
          id: '11.25', title: 'Pronouns & Numerals / सर्वनाम-सङ्ख्या', icon: '👥',
          desc: 'Irregular declensions of saḥ, ayam, kaḥ, eka, dvi, tri, catur',
          ex: [
            { type: 'info', text: '👥 PRONOUNS (सर्वनामानि) and NUMERALS (सङ्ख्याः)\n\nThese are highly IRREGULAR — they don\'t follow normal noun paradigms. But they\'re among the most common words in Sanskrit, so they MUST be memorized.\n\n══════════════════════════════════\nसः / सा / तत् (he / she / it) — DEMONSTRATIVE\n══════════════════════════════════\n             Masc.        Fem.       Neut.\nNom.sg:      सः           सा          तत्\nAcc.sg:      तम्          ताम्         तत्\nIns.sg:      तेन          तया         तेन\nDat.sg:      तस्मै         तस्यै        तस्मै\nAbl.sg:      तस्मात्       तस्याः       तस्मात्\nGen.sg:      तस्य          तस्याः        तस्य\nLoc.sg:      तस्मिन्        तस्याम्      तस्मिन्\n\nNom.pl:      ते            ताः          तानि\nGen.pl:      तेषाम्        तासाम्       तेषाम्\n\nNote स् → त् in oblique cases — the स् is ONLY in nominative singular!\n\n══════════════════════════════════\nएषः / एषा / एतत् (this) + अयम् / इयम् / इदम् (this) — PROXIMAL\n══════════════════════════════════\nएषः → like सः (just एष- prefix)\n\nअयम् "this" — VERY irregular:\nNom.sg:    अयम् (m)     इयम् (f)    इदम् (n)\nAcc.sg:    इमम्         इमाम्       इदम्\nIns.sg:    अनेन         अनया       अनेन\nDat.sg:    अस्मै         अस्यै        अस्मै\nGen.sg:    अस्य          अस्याः       अस्य\nLoc.sg:    अस्मिन्        अस्याम्      अस्मिन्\n\nNom.pl:    इमे          इमाः        इमानि\nIns.pl:    एभिः          आभिः       एभिः\n\n══════════════════════════════════\nकः / का / किम् (who/what) — INTERROGATIVE\n══════════════════════════════════\nLike सः: कः, कम्, केन, कस्मै... and किम् for neuter\n\n══════════════════════════════════\nयः / या / यत् (which/who) — RELATIVE\n══════════════════════════════════\nLike सः with य- stem: यः, यम्, येन, यस्मै, यस्य, यस्मिन्\n\nUsed in यः-तत् pairs:\n  यः धर्मं पालयति, सः सुखी भवति।\n  ("HE WHO protects dharma — that one is happy")\n\n══════════════════════════════════\nNUMERALS (सङ्ख्याः) 1-10\n══════════════════════════════════\n\n📿 EKA (एक "one") — declines like सर्व-pronoun, MASC/FEM/NEUT separately\nNom: एकः / एका / एकम्\nAcc: एकम् / एकाम् / एकम्\nIns: एकेन / एकया / एकेन\nGen: एकस्य / एकस्याः / एकस्य\n\n📿 DVI (द्वि "two") — DUAL FORMS ONLY\nNom: द्वौ (m) / द्वे (f, n)\nAcc: द्वौ / द्वे\nIns: द्वाभ्याम् (all genders)\nGen: द्वयोः\nLoc: द्वयोः\n\n📿 TRI (त्रि "three") — PLURAL ONLY\nNom: त्रयः (m) / तिस्रः (f) / त्रीणि (n)\nAcc: त्रीन् / तिस्रः / त्रीणि\nIns: त्रिभिः (m,n) / तिसृभिः (f)\nGen: त्रयाणाम् (m,n) / तिसृणाम् (f)\n\n📿 CATUR (चतुर् "four") — also PLURAL ONLY\nNom: चत्वारः (m) / चतस्रः (f) / चत्वारि (n)\nAcc: चतुरः / चतस्रः / चत्वारि\nIns: चतुर्भिः / चतसृभिः\nGen: चतुर्णाम् (m,n) / चतसृणाम् (f)\n\n📿 5–10 are INDECLINABLE in form but show case via context\n  पञ्च, षट्, सप्त, अष्ट (or अष्टौ), नव, दश\n  → take same form for nom/acc, oblique cases attach -भिः, -भ्यः, -आम्, -सु\n\n📿 SARVA-PRONOUN PARADIGM\n\nWords like सर्व (all), अन्य (other), विश्व (all), स्व (own), पूर्व (former), उत्तर (later) follow the सः-paradigm in some cases — they\'re called सर्वनाम-स्थानीय.' },
            { type: 'multi', q: '"By him" in Sanskrit is:', options: ['सः', 'तम्', 'तेन (instrumental — स् → त् in oblique)', 'तस्य'], answer: 2 },
            { type: 'multi', q: 'अयम् ("this masc.") in instrumental singular is:', options: ['अयेन', 'अनेन (highly irregular)', 'अस्येन', 'इयेन'], answer: 1 },
            { type: 'multi', q: '"Three" (nom. masc.) is:', options: ['त्रयः', 'तिस्रः', 'त्रीणि', 'त्रिभिः'], answer: 0 },
            { type: 'multi', q: '"Three" (nom. fem.) is irregularly:', options: ['त्र्याः', 'त्रयः', 'तिस्रः (irregular feminine)', 'त्रीणि'], answer: 2 },
            { type: 'match', q: 'Match form to gender/number:', pairs: [['तस्य', '6th sg masc/neut "of him/it"'], ['तस्याः', '6th sg fem "of her"'], ['तेषाम्', '6th pl masc/neut "of them"'], ['तासाम्', '6th pl fem "of them (f)"'], ['द्वौ', 'Nom dual masc "two"']] },
            { type: 'multi', q: '"Two" exists in Sanskrit only in:', options: ['Singular', 'Dual (द्वौ/द्वे)', 'Plural', 'All numbers'], answer: 1 },
            { type: 'multi', q: 'Why are pronouns/numerals essential despite being irregular?', options: ['Optional', 'They appear in EVERY sentence — "he said", "she went", "this one", "those three"', 'Vedic only', 'For poetry'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 45: Avyaya & Meta-Principles ───
    {
      u: 45,
      title: 'Avyaya & Meta-Rules / अव्यय-न्यायाः',
      sub: 'Indeclinables + the principles that govern rule application',
      icon: '🌐',
      color: '#0D9488',
      lessons: [
        {
          id: '11.26', title: 'Avyaya, Apavāda, Antaraṅga / अव्यय-न्यायाः', icon: '🌐',
          desc: 'Indeclinables + the meta-principles of rule resolution',
          ex: [
            { type: 'info', text: '🌐 AVYAYA + RULE-RESOLUTION PRINCIPLES\n\nTwo final pillars of Pāṇinian mastery: the indeclinable system, and the meta-rules that decide which Pāṇinian sūtra wins when several apply.\n\n══════════════════════════════════\nA. AVYAYA (अव्ययम्) — INDECLINABLES\n══════════════════════════════════\n\nDefinition (1.1.37): स्वरादिनिपातमव्ययम्\n  → "स्व-readings, particles, and the like are avyaya"\n+ (1.1.38): तद्धितश्चासर्वविभक्तिः\n+ (1.1.39): कृन्मेजन्तः\n+ (1.1.41): अव्ययीभावश्च\n\nAVYAYAS DON\'T CHANGE FORM. They have no case, gender, or number — they\'re grammatically frozen.\n\nMajor categories:\n\n📿 1. NIPĀTA (निपात — particles):\n  • च (ca) — "and"\n  • वा (vā) — "or"\n  • हि (hi) — "indeed/because"\n  • खलु (khalu) — "indeed/certainly"\n  • एव (eva) — "only/exactly"\n  • अपि (api) — "also/even"\n  • तु (tu) — "but"\n  • किल (kila) — "they say"\n  • नाम (nāma) — "called/by name"\n  • किम् (kim) — "what?"\n\n📿 2. UPASARGA (उपसर्ग — verbal prefixes — 22 of them):\n  प्र, परा, अप, सम्, अनु, अव, निस्, निर्, दुस्, दुर्, वि, आ, नि, अधि, अपि, अति, सु, उद्, अभि, प्रति, परि, उप\n\n📿 3. KRIDANTA-AVYAYA (verbal indeclinables):\n  • Gerunds: कृत्वा, गत्वा, आगत्य\n  • Infinitives: कर्तुम्, गन्तुम्\n\n📿 4. TADDHITĀNTA-AVYAYA:\n  • यथा (as), तथा (so), यदा (when), तदा (then), यत्र (where), तत्र (there), कुत्र (where?), अद्य (today), श्वः (tomorrow), ह्यः (yesterday)\n\n📿 5. PURE INDECLINABLES (शब्दाव्यय):\n  • अद्य (today), इह (here), तत्र (there), कुत्र (where), सर्वत्र (everywhere)\n  • सम्यक् (properly), सहसा (suddenly), शीघ्रम् (quickly)\n\n══════════════════════════════════\nB. META-PRINCIPLES OF PĀṆINIAN RULE-RESOLUTION\n══════════════════════════════════\n\nWhen multiple sūtras apply to the same form, which wins? Panini\'s answer comes from these meta-principles:\n\n📿 1. UTSARGA-APAVĀDA (उत्सर्ग-अपवाद) — General vs Specific\n  Definition: A SPECIFIC rule (apavāda) overrides a GENERAL rule (utsarga).\n  This is the famous "exception overrides general" principle.\n\n  Example:\n  • General: इको यणचि (इक् → यण् before अच्)\n  • Specific exception: व्योर्लघुप्रयत्नतरः (व, य do special things in specific contexts)\n  → Specific wins.\n\n📿 2. ANTARAṄGA-BAHIRAṄGA (अन्तरङ्ग-बहिरङ्ग) — Internal vs External\n  Definition: An INTERNAL rule (antaraṅga — closer to the stem) applies BEFORE an EXTERNAL rule (bahiraṅga — farther from the stem).\n  Even if both apply, internal goes first.\n\n  Example: Reduplication (internal) → applies before sandhi at word boundary (external)\n\n📿 3. SIDDHA-ASIDDHA (सिद्ध-असिद्ध) — Done vs Not-yet-done\n  Sutras in 8.2-8.4 are TREATED AS NOT-YET-APPLIED for rules in earlier adhyāyas. This avoids paradoxes.\n  Sutra 8.2.1: पूर्वत्रासिद्धम् → "What comes earlier [in the sūtra order] is treated as not-yet-applied"\n\n📿 4. STHĀNĪ-STHĀNI-BHĀVA (स्थानी-स्थानि-भावः) — Substituent acts as the original\n  Sutra (1.1.56): स्थानिवदादेशोऽनल्विधौ\n  → "A substitute behaves like the original (it replaced) for further rules"\n  This is the principle of TRANSITIVITY of substitution.\n\n📿 5. VIPRATIṢEDHE PARAṂ KĀRYAM (विप्रतिषेधे परं कार्यम्) — Later rule wins\n  When two rules conflict and neither is utsarga/apavāda, the LATER (in Pāṇini\'s ordering) rule applies.\n\n💡 SUMMARY OF DECISION ORDER:\n  1. Specific (apavāda) over general (utsarga)\n  2. Internal (antaraṅga) over external (bahiraṅga)\n  3. If both rules in 8.2–8.4, treat earlier as not-yet-applied (avoid loops)\n  4. Substitute = original for further rules (sthāni-bhāva)\n  5. If still conflict — later sūtra wins (vipratiṣedha)\n\nThis is exactly how a modern computer-science conflict-resolution algorithm works — Panini designed one for natural language 2,500 years before computers.' },
            { type: 'multi', q: 'Avyaya means:', options: ['Verb', 'Noun', 'Indeclinable — does not change form (no case, gender, number)', 'Adjective'], answer: 2 },
            { type: 'multi', q: 'Apavāda principle says:', options: ['First rule wins', 'Specific (exception) overrides general', 'Last rule wins', 'No conflicts'], answer: 1 },
            { type: 'multi', q: 'Antaraṅga-bahiraṅga principle says:', options: ['Random ordering', 'Internal (stem-closer) rule applies BEFORE external (boundary) rule', 'External first', 'Same time'], answer: 1 },
            { type: 'multi', q: 'When two rules conflict and neither is utsarga/apavāda nor antaraṅga, the resolver is:', options: ['First rule', 'विप्रतिषेधे परं कार्यम् — the LATER rule wins', 'Random', 'Both apply'], answer: 1 },
            { type: 'match', q: 'Match avyaya to meaning:', pairs: [['च (ca)', 'and'], ['वा (vā)', 'or'], ['हि (hi)', 'indeed/because'], ['एव (eva)', 'only/exactly'], ['अपि (api)', 'also/even'], ['तत्र (tatra)', 'there'], ['यथा (yathā)', 'as']] },
            { type: 'multi', q: 'Sthāni-sthāni-bhāva (1.1.56) means:', options: ['Original wins always', 'A substitute behaves like the original it replaced — for further rules', 'No substitution', 'Substitute disappears'], answer: 1 },
            { type: 'multi', q: 'How many upasargas (verbal prefixes) does Sanskrit have?', options: ['10', '14', '22', '30'], answer: 2 },
            { type: 'smriti', showText: '📸 RULE-RESOLUTION HIERARCHY (Pāṇini\'s "compiler"):\n\n1. Apavāda > Utsarga\n   (specific beats general)\n\n2. Antaraṅga > Bahiraṅga\n   (internal beats external)\n\n3. In 8.2-8.4 zone:\n   पूर्वत्रासिद्धम्\n   (treat earlier as not-yet-applied)\n\n4. Sthāni-bhāva (1.1.56)\n   (substitute = original for further rules)\n\n5. Vipratiṣedha (1.4.2)\n   (later rule wins — last resort)\n\n+ AVYAYA = indeclinables\n  (च, वा, हि, एव, तत्र, यथा...)\n\nPanini\'s decision algorithm — 2,500 years before computer science.', showTime: 12, q: '🧠 The hierarchy "specific > general" is called:', options: ['Sthāni-bhāva', 'Antaraṅga', 'Utsarga-apavāda', 'Vipratiṣedha'], answer: 2 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 12: MASTERY / प्रावीण्यम्
// Closes the loop: meter, poetics, full paradigms, composition, capstone
// Anyone who completes this is genuinely a Sanskrit expert
// ═══════════════════════════════════════════════════
{
  section: 'Mastery / प्रावीण्यम्',
  sIcon: '🏆',
  sColor: '#B45309',
  sDesc: 'Meter, poetics, full paradigms, composition — become a true Sanskrit scholar / सच्चा संस्कृत विद्वान् बनो',
  units: [
    // ─── Unit 36: Chandas (Meter / Prosody) ───
    {
      u: 36,
      title: 'Chandas / छन्दस्',
      sub: 'The meter and music of Sanskrit verse',
      icon: '🎼',
      color: '#B45309',
      lessons: [
        {
          id: '12.1', title: 'Anuṣṭubh & the Śloka / अनुष्टुप्', icon: '🎼',
          desc: 'The most common Sanskrit meter — used in 90% of classical verse',
          ex: [
            { type: 'info', text: '🎼 Chandas (छन्दस्) = METER / PROSODY\n\nSanskrit meter is QUANTITATIVE — based on syllable WEIGHT, not stress (English) or count alone (Hindi).\n\nTwo syllable types:\n• लघु (laghu / L) — LIGHT\n  → short vowel (अ इ उ ऋ) NOT followed by 2 consonants, NOT ending in अं/अः\n• गुरु (guru / G) — HEAVY\n  → long vowel (आ ई ऊ ॠ ए ऐ ओ औ), OR\n  → any vowel + अं/अः, OR\n  → any vowel followed by 2+ consonants\n\n📜 ANUṢṬUBH (अनुष्टुप्) — the Śloka meter:\n  • 4 quarters (पाद · pādas)\n  • 8 syllables each\n  • Total 32 syllables\n  • Used in: Bhagavad Gītā, Rāmāyaṇa, Mahābhārata, almost ALL purāṇas\n\nRules for an Anuṣṭubh / Pathyā Śloka:\n  • Syllables 5, 6, 7 of pāda 1 & 3 (odd pādas):\n      L-G-G — short, long, long\n  • Syllables 5, 6, 7 of pāda 2 & 4 (even pādas):\n      L-G-L  — short, long, short (the "iambic" cadence)\n  • Syllable 8 free (anything)\n\nFamous example — Bhagavad Gītā 2.47:\n  कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\n  मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥\n\n  • Pāda 1: कर्मण्ये- वाधिकारस्ते (8 syllables, syllables 5-6-7 = L G G (धि-का-रस्) — odd-pāda cadence)\n  • Pāda 2: मा फलेषु कदाचन (8 syllables, ends L G L G — even-pāda cadence ✓)\n\n💡 If you can scan an anuṣṭubh, you can read 90% of all Sanskrit literature.' },
            { type: 'multi', q: 'A heavy (guru) syllable is one with:', options: ['Stress', 'Long vowel OR vowel + 2 consonants OR anusvāra/visarga', 'Any consonant', 'High pitch'], answer: 1 },
            { type: 'multi', q: 'How many syllables are in one pāda of anuṣṭubh?', options: ['4', '8', '11', '12'], answer: 1 },
            { type: 'multi', q: 'How many total syllables in an anuṣṭubh śloka?', options: ['16', '24', '32', '48'], answer: 2 },
            { type: 'match', q: 'Match meter to syllable count per pāda:', pairs: [['Anuṣṭubh', '8'], ['Triṣṭubh', '11'], ['Jagatī', '12'], ['Gāyatrī', '8 (3 pādas only)']] },
            { type: 'multi', q: 'In an even-pāda cadence (5-6-7), the pattern is:', options: ['G-G-G', 'L-G-L (short-long-short)', 'L-L-L', 'G-L-G'], answer: 1 },
            { type: 'multi', q: 'Which famous text is composed almost entirely in anuṣṭubh?', options: ['Ṛg Veda', 'Bhagavad Gītā', 'Aṣṭādhyāyī', 'Pāṇini\'s sūtras'], answer: 1 },
          ],
        },
        {
          id: '12.2', title: 'Triṣṭubh, Jagatī, Gāyatrī / दीर्घछन्दांसि', icon: '🎶',
          desc: 'The Vedic meters — heart of the Ṛgveda',
          ex: [
            { type: 'info', text: '🎶 The major Vedic & Classical meters:\n\n📿 GĀYATRĪ (गायत्री) — 24 syllables\n  • 3 pādas × 8 syllables\n  • The most sacred Vedic meter\n  • Famous example: ॐ भूर्भुवः स्वः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥\n\n📜 TRIṢṬUBH (त्रिष्टुभ्) — 44 syllables\n  • 4 pādas × 11 syllables\n  • Most common Vedic meter (>40% of Ṛgveda)\n  • Cadence at end: ⏑ ─ ⏑ ─ ─\n  • Sub-types: Indravajrā, Upendravajrā, Upajāti\n\n🎵 JAGATĪ (जगती) — 48 syllables\n  • 4 pādas × 12 syllables\n  • Cadence: ⏑ ─ ⏑ ─ ⏑ ─ (one extra than triṣṭubh)\n\n💎 INDRAVAJRĀ (इन्द्रवज्रा) — sub-type of triṣṭubh\n  Pattern: ─ ─ ⏑ ─ ─ ⏑ ⏑ ─ ⏑ ─ ─\n  Famous opening of Kālidāsa\'s Kumārasambhava:\n  अस्त्युत्तरस्यां दिशि देवतात्मा — fits Indravajrā exactly\n  हिमालयो नाम नगाधिराजः — first syllable light: Upendravajrā (⏑ ─ ⏑ ─ ─ …)\n  A verse that mixes the two is called Upajāti. Scan it yourself in the Śāstra Lab.\n\n💎 MANDĀKRĀNTĀ (मन्दाक्रान्ता) — slow-stepping, 17 syllables/pāda\n  Pattern: ─ ─ ─ ─ | ⏑ ⏑ ⏑ ⏑ ⏑ ─ | ─ ⏑ ─ ─ ⏑ ─ ─\n  The meter of Kālidāsa\'s Meghadūta — the entire 121-verse poem.\n\n💎 ŚĀRDŪLAVIKRĪḌITA (शार्दूलविक्रीडितम्) — "tiger\'s play", 19 syllables\n  Used for grand, declamatory verses (Bharavi, Magha)\n\n💎 SRAGDHARĀ (स्रग्धरा) — "garland-bearing", 21 syllables\n  Most majestic — used in stotras (Devī Māhātmyam, Hanumān-bāhuk)\n\n💡 EXPERT INSIGHT:\nWhen reading any Sanskrit verse:\n  1. Count syllables per pāda\n  2. Mark L/G\n  3. Match to known meter\nThis tells you (a) the meter (b) likely the poet/era (c) often the mood.' },
            { type: 'multi', q: 'How many syllables in Gāyatrī meter total?', options: ['16', '24', '32', '48'], answer: 1 },
            { type: 'multi', q: 'Triṣṭubh has how many syllables per pāda?', options: ['8', '11', '12', '17'], answer: 1 },
            { type: 'multi', q: 'Kālidāsa\'s entire Meghadūta is composed in which meter?', options: ['Anuṣṭubh', 'Indravajrā', 'Mandākrāntā', 'Gāyatrī'], answer: 2 },
            { type: 'match', q: 'Match meter to famous use:', pairs: [['Gāyatrī', 'Vedic mantras (Sāvitrī)'], ['Anuṣṭubh', 'Bhagavad Gītā / Epics'], ['Mandākrāntā', "Kālidāsa's Meghadūta"], ['Śārdūlavikrīḍita', 'Grand classical kāvya']] },
            { type: 'multi', q: "Why does meter matter for understanding Sanskrit?", options: ['Aesthetic only', 'Helps disambiguate readings, identify era, follow text correctly + decide pronunciation when ambiguous', "It doesn't really", "Only for chanting"], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 37: Alaṅkāra (Poetics) ───
    {
      u: 37,
      title: 'Alaṅkāra / अलङ्कारः',
      sub: 'The figures of speech — soul of Sanskrit poetry',
      icon: '💎',
      color: '#9333EA',
      lessons: [
        {
          id: '12.3', title: 'Upamā, Rūpaka, Utprekṣā / औपम्यालङ्काराः', icon: '💎',
          desc: 'The three core comparison-figures',
          ex: [
            { type: 'info', text: '💎 Alaṅkāra (अलङ्कारः) = "ornament" → FIGURE OF SPEECH\n\nWithout alaṅkāra, Sanskrit poetry is just words. WITH it — pure magic.\n\nTwo broad categories:\n  • शब्दालङ्कार (śabdālaṅkāra) — sound-figures (yamaka, anuprāsa, śleṣa)\n  • अर्थालङ्कार (arthālaṅkāra) — meaning-figures (upamā, rūpaka, utprekṣā...)\n\n📿 The 3 core comparison-figures:\n\n1. उपमा (UPAMĀ) — SIMILE\n   Explicit comparison using इव, यथा, वत्.\n   • मुखं चन्द्र इव — "the face is LIKE the moon"\n   4 components: उपमेय (subject), उपमान (standard), साधारण-धर्म (common quality), उपमा-वाचक (comparison word)\n\n2. रूपक (RŪPAKA) — METAPHOR\n   IDENTIFICATION (no "like").\n   • मुख-चन्द्रः — "the face-moon" (face IS moon, fused)\n   • चरण-कमलम् — "lotus-feet" (feet IS lotus)\n   • भव-सागरः — "ocean of existence"\n\n3. उत्प्रेक्षा (UTPREKṢĀ) — POETIC FANCY / "AS IF"\n   IMAGINATIVE supposition. Marker: इव, मन्ये, ध्रुवम्.\n   • चन्द्रोऽयं मुखेन साकं नभसि क्रीडतीव — "It is AS IF the moon plays in the sky together with her face"\n\nDIFFERENCE:\n  Upamā: A is LIKE B (separate)\n  Rūpaka: A IS B (fused)\n  Utprekṣā: A might be B (imagined)\n\nFamous example — Kālidāsa\'s genius:\n  वागर्थाविव सम्पृक्तौ वागर्थप्रतिपत्तये ।\n  जगतः पितरौ वन्दे पार्वतीपरमेश्वरौ ॥\n  ("Like word and meaning united — I salute the parents of the universe, Pārvatī and Parameśvara")\n  → upamā (इव) of Śiva-Pārvatī to word-meaning unity. Both are perfectly inseparable.' },
            { type: 'multi', q: 'उपमा (upamā) is:', options: ['Identification', 'Explicit comparison (with "like")', 'Imagined supposition', 'Sound repetition'], answer: 1 },
            { type: 'multi', q: 'चरण-कमलम् ("lotus-feet") is which alaṅkāra?', options: ['Upamā', 'Rūpaka (metaphor — feet IS lotus)', 'Utprekṣā', 'Yamaka'], answer: 1 },
            { type: 'multi', q: 'Utprekṣā is recognized by markers like:', options: ['न, मा', 'च, वा', 'इव, मन्ये, ध्रुवम् (imagined supposition)', 'अति, सम्'], answer: 2 },
            { type: 'match', q: 'Match figure to mark/structure:', pairs: [['Upamā', 'A is LIKE B (इव/यथा)'], ['Rūpaka', 'A IS B (compound, no marker)'], ['Utprekṣā', 'A might-be B (मन्ये/ध्रुवम्)'], ['Common element', 'All compare two things']] },
            { type: 'multi', q: 'Why study alaṅkāra to understand Kālidāsa?', options: ['Aesthetic only', 'Every great Sanskrit poem layers multiple alaṅkāras — reading without them = reading prose', 'Optional', 'Only for poets'], answer: 1 },
          ],
        },
        {
          id: '12.4', title: 'Śleṣa, Yamaka, Anuprāsa / शब्दालङ्काराः', icon: '🎭',
          desc: 'Pun, repetition, alliteration — the sound magic',
          ex: [
            { type: 'info', text: '🎭 The Sound-Figures (शब्दालङ्काराः):\n\n1. श्लेष (ŚLEṢA) — PUN / DOUBLE MEANING\n   Same words, two simultaneous meanings.\n   Sanskrit\'s great strength: rich polysemy + sandhi makes śleṣa effortless.\n\n   Example: रामभद्र महाराज जय श्री रघुनन्दन ।\n     → can refer SIMULTANEOUSLY to Rāma AND Kṛṣṇa with same syllables\n\n   Mahākavi Subandhu and Bāṇa wrote ENTIRE works in śleṣa, where every verse means two stories at once. Rāghava-pāṇḍavīya tells Rāmāyaṇa AND Mahābhārata in one text!\n\n2. यमक (YAMAKA) — REPETITION OF SOUND, DIFFERENT MEANING\n   Same syllable string repeated with different meanings.\n   • भज भज गोविन्दं भज गोविन्दं\n     ("worship Govinda, worship Govinda" — repetition for emphasis)\n   • सजलं तोयं सजलं तोयं — twice "watery water" with different parsings\n\n3. अनुप्रास (ANUPRĀSA) — ALLITERATION\n   Repetition of consonants for sonic beauty.\n   • चटुल-चकित-चकोर-चकोरी-चपल-चटुल-चन्द्रिकाः\n     (notice the च recurring)\n\n4. वक्रोक्ति (VAKROKTI) — "CROOKED SPEECH"\n   Indirect / suggestive expression.\n\n5. विरोध (VIRODHA) — APPARENT CONTRADICTION\n   • "She is alive yet dead with grief"\n\n6. अतिशयोक्ति (ATIŚAYOKTI) — HYPERBOLE\n   • "Her face shames the moon"\n\n💎 EXPERT TIP:\nA single Kālidāsa or Bhāravi verse may contain 3–5 alaṅkāras layered. The reader unpacks them like a puzzle. THIS is why Sanskrit poetry is considered the densest, richest in any language.\n\nA traditional verse says:\n  "उपमा कालिदासस्य भारवेरर्थगौरवम् ।\n   दण्डिनः पदलालित्यं माघे सन्ति त्रयो गुणाः ॥"\n  ("Kālidāsa is praised for upamā, Bhāravi for depth of meaning, Daṇḍin for word-grace — but Māgha has all three.")' },
            { type: 'multi', q: 'श्लेष (śleṣa) is:', options: ['Alliteration', 'Pun / double meaning', 'Simile', 'Repetition'], answer: 1 },
            { type: 'multi', q: 'Anuprāsa is:', options: ['Pun', 'Hyperbole', 'Alliteration / consonant repetition', 'Rhyme'], answer: 2 },
            { type: 'multi', q: 'A work that tells Rāmāyaṇa AND Mahābhārata simultaneously through śleṣa is:', options: ['Mahābhārata', 'Rāghava-pāṇḍavīya', 'Bhagavad Gītā', 'Pañcatantra'], answer: 1 },
            { type: 'match', q: 'Match figure to type:', pairs: [['Śleṣa', 'Pun / double meaning'], ['Yamaka', 'Sound-repetition diff. meaning'], ['Anuprāsa', 'Alliteration'], ['Atiśayokti', 'Hyperbole']] },
            { type: 'multi', q: 'The traditional verse उपमा कालिदासस्य… praises three poets for which qualities?', options: ['Rhyme, rhythm, meter', 'Upamā (Kālidāsa), depth (Bhāravi), word-grace (Daṇḍin) — Māgha has all three', 'Vedic, classical, modern', 'Length, brevity, balance'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 38: Full Paradigms — Declensions & Conjugations ───
    {
      u: 38,
      title: 'Full Paradigms / पूर्णरूपावलिः',
      sub: 'Master the noun and verb tables you actually need',
      icon: '📋',
      color: '#0891B2',
      lessons: [
        {
          id: '12.5', title: 'Declension Master Table / सुप्-तालिका', icon: '📋',
          desc: 'The 5 stem-patterns that cover 90% of all Sanskrit nouns',
          ex: [
            { type: 'info', text: '📋 NOUN DECLENSION (सुप्-प्रत्ययाः) — full paradigms for the 5 most common stems:\n\n══════════════════════════════════\nरामः (rāma — masc. अ-stem) — MOST COMMON\n══════════════════════════════════\n         Singular   Dual         Plural\n1. कर्ता   रामः      रामौ         रामाः\n2. कर्म    रामम्     रामौ         रामान्\n3. करण    रामेण     रामाभ्याम्   रामैः\n4. सम्प्र.  रामाय    रामाभ्याम्   रामेभ्यः\n5. अपा.   रामात्   रामाभ्याम्   रामेभ्यः\n6. सम्ब.  रामस्य   रामयोः       रामाणाम्\n7. अधि.  रामे     रामयोः       रामेषु\n8. सम्बो. हे राम!  हे रामौ!     हे रामाः!\n\n══════════════════════════════════\nहरिः (hari — masc. इ-stem)\n══════════════════════════════════\n         Sg          Du            Pl\n1. हरिः   हरी          हरयः\n2. हरिम्  हरी          हरीन्\n3. हरिणा हरिभ्याम्     हरिभिः\n6. हरेः   हर्योः        हरीणाम्\n\n══════════════════════════════════\nनदी (nadī — fem. ई-stem) "river"\n══════════════════════════════════\n         Sg          Du            Pl\n1. नदी    नद्यौ        नद्यः\n2. नदीम्  नद्यौ        नदीः\n3. नद्या  नदीभ्याम्   नदीभिः\n6. नद्याः नद्योः       नदीनाम्\n\n══════════════════════════════════\nफलम् (phala — neut. अ-stem) "fruit"\n══════════════════════════════════\nNeuters: 1st = 2nd in all numbers; rest like rāma.\n         Sg          Du            Pl\n1./2.   फलम्         फले           फलानि\n3.     फलेन        फलाभ्याम्     फलैः\n6.     फलस्य       फलयोः        फलानाम्\n\n══════════════════════════════════\nमतिः (mati — fem. इ-stem) "mind"\n══════════════════════════════════\n         Sg          Du            Pl\n1.     मतिः         मती          मतयः\n2.     मतिम्       मती          मतीः\n6.     मत्याः/मतेः मत्योः        मतीनाम्\n\n💡 STRATEGY: Memorize रामः perfectly. Then नदी and फलम्. With these three, you can decline ~70% of Sanskrit nouns. Add हरिः and a पितृ (relation) stem and you\'re at 90%.' },
            { type: 'multi', q: 'रामेण (rāmeṇa) is which case/number?', options: ['Nom. Sg', 'Acc. Sg', 'Inst. Sg (3rd case singular)', 'Loc. Sg'], answer: 2 },
            { type: 'multi', q: 'फलानि (phalāni) means:', options: ['One fruit', 'Two fruits', 'Many fruits (Nom./Acc. plural)', 'No fruit'], answer: 2 },
            { type: 'multi', q: "What's special about neuter declensions?", options: ['Always plural', '1st case = 2nd case in all numbers', 'No case 3', 'No vocative'], answer: 1 },
            { type: 'match', q: 'Match form to function:', pairs: [['रामस्य', '6th — "of Rāma"'], ['रामे', '7th — "in Rāma"'], ['हे राम!', '8th — vocative'], ['रामाणाम्', '6th plural — "of the Rāmas"']] },
            { type: 'multi', q: 'Which 3 stems give 70% noun coverage?', options: ['Only रामः', 'रामः + नदी + फलम् (masc-a, fem-ī, neut-a)', 'All 8 cases × 3 numbers', 'Only vowel stems'], answer: 1 },
            { type: 'krama', title: '📿 8 cases (कारक-विभक्ति order):', sequence: ['1. प्रथमा (Nom)', '2. द्वितीया (Acc)', '3. तृतीया (Ins)', '4. चतुर्थी (Dat)', '5. पञ्चमी (Abl)', '6. षष्ठी (Gen)', '7. सप्तमी (Loc)', '8. सम्बोधन (Voc)'], q: 'After पञ्चमी comes?', options: ['चतुर्थी', 'षष्ठी (Gen.)', 'सप्तमी', 'द्वितीया'], answer: 1 },
          ],
        },
        {
          id: '12.6', title: 'Verb Master Table / तिङ्-तालिका', icon: '🏃',
          desc: 'Full conjugation of √भू "to be" — your verb skeleton key',
          ex: [
            { type: 'info', text: '🏃 VERB CONJUGATION (तिङ्-प्रत्ययाः) — the master verb √भू (bhū) "to be":\n\nपरस्मैपद ENDINGS for class 1, root √भू → stem भव-:\n\n══════════════════════════════════\nलट् (LAṬ) — PRESENT TENSE\n══════════════════════════════════\n         Sg          Du            Pl\n3rd      भवति        भवतः         भवन्ति\n2nd      भवसि        भवथः         भवथ\n1st      भवामि       भवावः        भवामः\n\n══════════════════════════════════\nलङ् (LAṄ) — IMPERFECT (past, before today)\n══════════════════════════════════\nAdds अ- augment + secondary endings.\n         Sg          Du            Pl\n3rd      अभवत्       अभवताम्      अभवन्\n2nd      अभवः       अभवतम्       अभवत\n1st      अभवम्       अभवाव        अभवाम\n\n══════════════════════════════════\nलृट् (LṚṬ) — SIMPLE FUTURE\n══════════════════════════════════\nAdds स्य- before endings.\n3rd      भविष्यति    भविष्यतः      भविष्यन्ति\n2nd      भविष्यसि    भविष्यथः      भविष्यथ\n1st      भविष्यामि   भविष्यावः     भविष्यामः\n\n══════════════════════════════════\nलोट् (LOṬ) — IMPERATIVE\n══════════════════════════════════\n3rd      भवतु        भवताम्        भवन्तु\n2nd      भव          भवतम्         भवत\n1st      भवानि       भवाव          भवाम\n\n══════════════════════════════════\nविधिलिङ् (VIDHILIṄ) — POTENTIAL ("should/may")\n══════════════════════════════════\n3rd      भवेत्        भवेताम्       भवेयुः\n2nd      भवेः         भवेतम्        भवेत\n1st      भवेयम्       भवेव          भवेम\n\n══════════════════════════════════\nलिट् (LIṬ) — PERFECT (with reduplication)\n══════════════════════════════════\n3rd      बभूव         बभूवतुः       बभूवुः\n2nd      बभूविथ      बभूवथुः       बभूव\n1st      बभूव        बभूविव        बभूविम\n\n💡 ROOT LIST WORTH MEMORIZING (top 20):\n  √भू (be), √कृ (do), √गम् (go), √पठ् (read), √पा (drink), √स्था (stand), √दा (give), √ज्ञा (know), √लभ् (obtain), √अस् (be), √स्मृ (remember), √श्रु (hear), √दृश् (see), √भज् (worship), √याच् (request), √जि (conquer), √मन् (think), √सेव् (serve), √वच् (speak), √नी (lead).\n\nMaster √भू completely → swap stems → you can conjugate ANY verb in class 1.' },
            { type: 'multi', q: 'भवति (bhavati) means:', options: ['He was', 'He is / he becomes (3rd Sg present)', 'He will be', 'He should be'], answer: 1 },
            { type: 'multi', q: 'अभवत् (abhavat) is:', options: ['Present', 'Imperfect (लङ्) — "he was/became"', 'Future', 'Potential'], answer: 1 },
            { type: 'multi', q: 'भवेत् (bhavet) means:', options: ['He is', 'He was', 'He will be', 'He may/should be (potential — विधिलिङ्)'], answer: 3 },
            { type: 'match', q: 'Match lakāra to function:', pairs: [['लट्', 'Present'], ['लङ्', 'Imperfect (past)'], ['लृट्', 'Future'], ['लोट्', 'Imperative ("let him/do!")'], ['विधिलिङ्', 'Potential ("should/may")'], ['लिट्', 'Perfect (reduplicated)']] },
            { type: 'multi', q: 'How is लिट् (perfect) marked?', options: ['Future suffix', 'Reduplication of root', 'No marking', 'Only in passive'], answer: 1 },
            { type: 'krama', title: '📿 Tense progression for √भू:', sequence: ['भवति (is)', 'अभवत् (was)', 'बभूव (had been — perf.)', 'भविष्यति (will be)', 'भवतु (let him be)', 'भवेत् (may be)'], q: 'After अभवत् comes (perfect)?', options: ['भवति', 'बभूव', 'भविष्यति', 'भवेत्'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 39: Composition & Sutra Reading ───
    {
      u: 39,
      title: 'Composition & Sūtra Reading / रचना',
      sub: 'Active production + parsing real sūtras',
      icon: '✍️',
      color: '#16A34A',
      lessons: [
        {
          id: '12.7', title: 'Translate to Sanskrit / अनुवादः', icon: '✍️',
          desc: 'Build your own Sanskrit sentences from English',
          ex: [
            { type: 'info', text: '✍️ COMPOSITION (अनुवादः) — From English to Sanskrit\n\nThe 5-step composition formula:\n\n1. Identify SUBJECT → noun in 1st case (rāmaḥ)\n2. Identify OBJECT → noun in 2nd case (phalam)\n3. Choose VERB ROOT → conjugate for person/number/tense\n4. Add modifiers (adjectives agree in gender-number-case)\n5. Apply SANDHI between final & initial sounds\n\nExamples:\n\n📝 "Rāma reads a book"\n  • Rāma = रामः (1st sg M)\n  • book = पुस्तकम् → object → पुस्तकम् (2nd sg N)\n  • read = √पठ् → present 3rd sg → पठति\n  → रामः पुस्तकं पठति।\n  (sandhi: पुस्तकम् + पठति → पुस्तकं पठति, anusvāra)\n\n📝 "I go to the village"\n  • I = अहम् (1st sg)\n  • village = ग्रामम् (2nd sg M, accusative for "destination")\n  • go = √गम् → present 1st sg → गच्छामि\n  → अहं ग्रामं गच्छामि।\n\n📝 "The good students are reading"\n  • students = छात्राः (1st pl M)\n  • good = साधु → adjective agrees → साधवः (1st pl M)\n  • are reading = पठन्ति (3rd pl)\n  → साधवः छात्राः पठन्ति।\n\n📝 "Give the food to the brahmin"\n  • food = अन्नम् (2nd sg N)\n  • to brahmin = ब्राह्मणाय (4th sg, sampradāna)\n  • give = देहि (imperative 2nd sg of √दा)\n  → ब्राह्मणाय अन्नं देहि।\n\n🌟 GOLDEN RULES:\n  • Sanskrit word order is FREE → put emphasis at start or end\n  • Verb usually ends the sentence\n  • Adjectives ALWAYS agree in gender + number + case\n  • Apply sandhi at every junction\n\nWith ~200 vocabulary words + 20 verb roots + the 5-step formula, you can compose original Sanskrit sentences for any everyday situation.' },
            { type: 'multi', q: 'For "Rāma reads a book", पुस्तकम् should be in which case?', options: ['1st (subject)', '2nd (direct object — what is read)', '3rd (instrument)', '6th (genitive)'], answer: 1 },
            { type: 'multi', q: 'Which sentence is correct for "I go to the village"?', options: ['अहं ग्रामे गच्छामि', 'अहं ग्रामं गच्छामि (destination → 2nd case)', 'अहं ग्रामस्य गच्छामि', 'मम ग्रामं गच्छति'], answer: 1 },
            { type: 'multi', q: 'For "Give to the brahmin", ब्राह्मण goes in:', options: ['1st case', '2nd case', '3rd case (instrument)', '4th case — सम्प्रदान (recipient)'], answer: 3 },
            { type: 'match', q: 'Match English → Sanskrit case:', pairs: [['"Rāma" (subject)', 'रामः — 1st'], ['"sees the book"', 'पुस्तकम् — 2nd'], ['"with a pen"', 'लेखन्या — 3rd'], ['"to the teacher"', 'गुरवे — 4th'], ['"from the city"', 'नगरात् — 5th'], ['"in the forest"', 'वने — 7th']] },
            { type: 'multi', q: 'In Sanskrit, the verb USUALLY appears:', options: ['First', 'Last (default)', 'Middle', 'Doesn\'t matter — free word order'], answer: 1 },
            { type: 'multi', q: 'Adjectives in Sanskrit must agree with their noun in:', options: ['Only gender', 'Only number', 'Gender + number + case (all three)', 'Nothing'], answer: 2 },
          ],
        },
        {
          id: '12.8', title: 'Read a Real Sūtra / सूत्रपठनम्', icon: '📿',
          desc: 'Parse three actual Pāṇinian sutras line by line',
          ex: [
            { type: 'info', text: '📿 PARSING REAL PĀṆINIAN SŪTRAS\n\nFinally, let\'s read three actual sūtras the way a scholar does.\n\n══════════════════════════════════\nSŪTRA 1.1.1 — वृद्धिरादैच्\n══════════════════════════════════\nवृद्धिः + आत् + ऐच्\n  • वृद्धिः = "vṛddhi" (the technical term being defined)\n  • आत् = "ā" + त् marker\n  • ऐच् = pratyāhāra: ऐ + च् marker → आ ऐ औ\n\nMeaning: "vṛddhi = आ, ऐ, औ" (the long-grade vowels).\nThis is a निर्वचन (definitional) sūtra — DEFINING vṛddhi.\n\n══════════════════════════════════\nSŪTRA 1.1.2 — अदेङ् गुणः\n══════════════════════════════════\nअत् + एङ् + गुणः\n  • अत् = अ + त् marker → only अ\n  • एङ् = pratyāhāra ए + ङ् marker → ए, ओ\n  • गुणः = "guṇa" (the term being defined)\n\nMeaning: "guṇa = अ, ए, ओ" (the medium-grade vowels).\n\n══════════════════════════════════\nSŪTRA 6.1.77 — इको यणचि\n══════════════════════════════════\nइकः (gen.sg.) + यण् + अचि (loc.sg.)\n  • इकः = "of इक्" (इक् = इ उ ऋ ऌ)\n  • यण् = pratyāhāra य + ण् marker → य व र ल\n  • अचि = "before अच्" (अच् = all vowels)\n\nMeaning: "इ/उ/ऋ/ऌ become य/व/र/ल before any vowel."\n  → इति + अपि → इत्यपि (इ → य before अ)\n  → सु + आगतम् → स्वागतम् (उ → व before आ)\n  → मातृ + आज्ञा → मात्राज्ञा (ऋ → र before आ)\n\nThis is the YAṆ-SANDHI rule! ONE 4-syllable sūtra captures FOUR sound changes simultaneously, all because of the pratyāhāra compression.\n\n💎 THIS is Pāṇinian genius:\n  1. Compress letter-lists into 2-letter pratyāhāras\n  2. Use grammatical cases (genitive = "of", locative = "before") to specify rule structure\n  3. Apply meta-rules (paribhāṣā) like यथासंख्यम् for parallel substitution\n  4. Result: a 4000-sūtra grammar that fits in a small book yet generates ALL valid Sanskrit\n\nWhen you can read a sūtra like this on your own — congratulations, you\'ve joined the 2,500-year-old tradition of Pāṇinian scholars.' },
            { type: 'multi', q: 'In सūtra 1.1.1 "वृद्धिरादैच्", ऐच् refers to:', options: ['One letter ऐ', 'प्रत्याहार ऐ→च्: आ ऐ औ (vṛddhi vowels)', 'Random sounds', 'Consonants'], answer: 1 },
            { type: 'multi', q: '"इको यणचि" (6.1.77) describes which sound change?', options: ['Visarga sandhi', 'Yaṇ sandhi: i/u/ṛ/ḷ → y/v/r/l before vowels', 'Reduplication', 'Compound formation'], answer: 1 },
            { type: 'multi', q: 'सु + आगतम् = स्वागतम् — this applies which sutra?', options: ['1.1.1', '1.1.2', '6.1.77 (इको यणचि — उ → व before आ)', '8.4.2'], answer: 2 },
            { type: 'match', q: 'Match sūtra to its job:', pairs: [['वृद्धिरादैच्', 'Defines vṛddhi = ā ai au'], ['अदेङ् गुणः', 'Defines guṇa = a e o'], ['इको यणचि', 'Yaṇ sandhi rule'], ['Meta-rule used', 'प्रत्याहार reading (1.1.71)']] },
            { type: 'multi', q: 'How does Panini achieve such compression?', options: ['He omits cases', 'Pratyāhāra (compress letter sets) + grammatical cases (rule structure) + paribhāṣā (meta-rules)', 'Random shorthand', 'Magic'], answer: 1 },
            { type: 'smriti', showText: '📸 Reading a Pāṇinian sūtra:\n\n1. Split into words (ignore sandhi)\n2. Identify pratyāhāras (e.g., अच्, इक्, यण्)\n3. Read grammatical cases (gen = "of", loc = "before/in", nom = "is/becomes")\n4. Apply paribhāṣā for ambiguities\n\n"इको यणचि" =\n  → "OF इक् (इ उ ऋ ऌ)"\n  → "[becomes] यण् (य व र ल)"\n  → "BEFORE अच् (any vowel)"\n\n4 syllables → covers 4 sound changes.', showTime: 12, q: '🧠 The genius of Pāṇinian sūtras lies in:', options: ['Beauty alone', 'Maximum compression — pratyāhāra + cases + meta-rules → 4000 sūtras = entire grammar', 'Length', 'Simplicity of words'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 40: Capstone — Mastery & Path Forward ───
    {
      u: 40,
      title: 'Capstone / समापनम्',
      sub: "You've arrived. Here's where you go next.",
      icon: '🏆',
      color: '#DC2626',
      lessons: [
        {
          id: '12.9', title: 'You Are a Sanskrit Expert / त्वं विद्वान् असि', icon: '🏆',
          desc: 'Comprehensive review + roadmap for lifelong study',
          ex: [
            { type: 'info', text: '🏆 SAṂSKṚTA-VIDVAT-PRĀPTI · You have become a Sanskrit scholar.\n\nWhat you now know:\n\n📿 PHONETICS\n  ✦ All 13 vowels (अ आ इ ई उ ऊ ऋ ॠ ऌ ए ऐ ओ औ); अं (anusvāra) & अः (visarga) are ayogavāha — dependent sounds, NOT counted among the vowels\n  ✦ All 33 consonants — 5 vargas + semi-vowels + sibilants + ह\n  ✦ Anusvāra, visarga, all retroflexes\n\n📜 PĀṆINIAN GRAMMAR\n  ✦ 14 Maheshvara Sūtras\n  ✦ Pratyāhāra system (अच्, हल्, इक्, यण्...)\n  ✦ All major sandhi rules (vowel, consonant, visarga, ṣatva, ṇatva)\n  ✦ 6 Kārakas — semantic role theory\n  ✦ 8 Vibhaktis × 3 numbers (Nom→Voc, sg/du/pl)\n  ✦ 10 Lakāras — present, past (3), future (2), imperative, potential, benedictive, conditional\n  ✦ Parasmaipada vs Ātmanepada\n  ✦ Sanādi — causative, desiderative, intensive, denominative\n  ✦ Krit & Taddhita — primary & secondary derivatives\n  ✦ Reduplication (dvitva)\n  ✦ Three Vedic accents (udātta, anudātta, svarita)\n  ✦ 6 Samāsa types (avyayībhāva, tatpuruṣa, karmadhāraya, dvigu, dvandva, bahuvrīhi)\n  ✦ Lopa, Āgama, Ādeśa — the 3 fundamental operations\n  ✦ Paribhāṣā meta-rules\n  ✦ Reading actual sūtras (1.1.1, 1.1.2, 6.1.77)\n\n📋 PARADIGMS\n  ✦ Decline रामः, हरिः, नदी, मतिः, फलम्\n  ✦ Conjugate √भू through 6 lakāras\n  ✦ Top 20 verb roots\n\n🎼 PROSODY & POETICS\n  ✦ Anuṣṭubh, Triṣṭubh, Jagatī, Gāyatrī, Mandākrāntā, Śārdūlavikrīḍita\n  ✦ Upamā, Rūpaka, Utprekṣā, Śleṣa, Yamaka, Anuprāsa\n\n📖 LITERATURE\n  ✦ Rāmāyaṇa, Mahābhārata, Pañcatantra, Kālidāsa\n  ✦ Bhagavad Gītā verse parsing\n  ✦ Upaniṣadic prayer parsing\n  ✦ Subhāṣita recognition\n\n✍️ ACTIVE SKILLS\n  ✦ Read shlokas\n  ✦ Compose original sentences (5-step formula)\n  ✦ Translate Sanskrit ↔ English\n\n🌍 CULTURAL & ETYMOLOGICAL\n  ✦ Indo-European cognates\n  ✦ Sanskrit in modern technology\n  ✦ Wisdom verses memorized\n\n📚 WHERE TO GO NEXT (lifelong study path):\n\n  0. IN THIS APP: Chapters 13–17 — Vedic Sanskrit, Philosophy, Poetics & Drama, the Sciences, and Pāṇini\'s Dhātupāṭha\n  1. YEAR 1: Read all of Bhagavad Gītā in Sanskrit (Gītā Press edition with anvaya)\n  2. YEAR 2: Tackle Hitopadeśa & Pañcatantra in original\n  3. YEAR 3: Begin Kālidāsa — Raghuvaṃśa or Kumārasambhava\n  4. YEAR 4: Read Vyākaraṇa-vṛtti (Kāśikā) — the classical commentary on Pāṇini\n  5. YEAR 5: Vedic — Ṛgveda hymns with Sāyaṇa\'s commentary\n\n  Resources:\n  • Sanskrit Documents Archive (sanskritdocuments.org) — entire literature, free\n  • Apte\'s Sanskrit-English Dictionary (the standard)\n  • Macdonell\'s Vedic Grammar (for Vedic)\n  • Kāśikā-vṛtti — sūtra-by-sūtra Pāṇini commentary\n\n💎 THE TRUTH:\n  Sanskrit is not a "dead language."\n  It is the living key to 5,000 years of human thought —\n  philosophy, mathematics, astronomy, poetry, medicine, music, dharma.\n\n  You now hold that key.\n\n  शुभं भवतु । May good fortune attend you.\n  सत्यमेव जयते । Truth alone triumphs.\n  सर्वे भवन्तु सुखिनः । May all beings be happy.\n\n  🙏 आचार्येभ्यो नमः । Salutations to all teachers.' },
            { type: 'multi', q: 'How many lakāras does Sanskrit have?', options: ['4', '6', '10 (दश लकाराः)', '14'], answer: 2 },
            { type: 'multi', q: 'How many kārakas (semantic roles) did Panini formalize?', options: ['4', '6 (षट् कारकाणि)', '8', '10'], answer: 1 },
            { type: 'multi', q: 'The 3 fundamental operations of Pāṇinian grammar are:', options: ['Vowel/consonant/sandhi', 'Lopa, Āgama, Ādeśa (deletion, augment, substitution)', 'Past/present/future', 'Subject/verb/object'], answer: 1 },
            { type: 'multi', q: 'Mandākrāntā meter is famous for being used in:', options: ['Bhagavad Gītā', 'Kālidāsa\'s Meghadūta (entire poem)', 'Aṣṭādhyāyī', 'Vedic hymns'], answer: 1 },
            { type: 'match', q: 'Match domain to topic:', pairs: [['Phonetics', '13 vowels + 33 consonants'], ['Grammar', '8 vibhaktis × 3 numbers + 10 lakāras'], ['Prosody', 'Anuṣṭubh, Triṣṭubh, Mandākrāntā'], ['Poetics', 'Upamā, Rūpaka, Śleṣa'], ['Literature', 'Gītā, Rāmāyaṇa, Kālidāsa'], ['Pāṇini', '4000 sūtras, 8 chapters']] },
            { type: 'krama', title: '📿 Your 5-year forward path:', sequence: ['Y1: Bhagavad Gītā', 'Y2: Hitopadeśa', 'Y3: Kālidāsa', 'Y4: Kāśikā-vṛtti (Pāṇini commentary)', 'Y5: Ṛgveda with Sāyaṇa'], q: 'After Year 3 (Kālidāsa) comes?', options: ['Pañcatantra', 'Kāśikā-vṛtti (Pāṇini commentary)', 'Ṛgveda', 'Modern Sanskrit'], answer: 1 },
            { type: 'smriti', showText: '🏆 You are a Sanskrit Expert.\n\n✦ All sounds, all sandhi, all cases\n✦ All tenses, all derivatives, all compounds\n✦ Pāṇini\'s entire framework\n✦ Vedic + Classical meters\n✦ The poetic figures of Kālidāsa\n✦ Active composition skills\n✦ Real sūtra parsing\n\n~2,500-year-old tradition.\n4,000 sūtras of Pāṇini.\n86 core lessons — the whole foundation.\nNext: the śāstra chapters (13–17).\n\nThe ancient acharyas would recognize you as a fellow scholar.\n\nNow read. Compose. Teach.\nKeep the flame alive.\n\n🙏 ॐ शान्तिः शान्तिः शान्तिः ॥', showTime: 15, q: '🧠 What is the Sanskrit phrase for "knowledge"?', options: ['कर्म (karma)', 'विद्या (vidyā)', 'शक्ति (śakti)', 'भक्ति (bhakti)'], answer: 1 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTIONS 13–17: THE ŚĀSTRAS (शास्त्राणि)
// Beyond the core course: Vedic Sanskrit, philosophy, poetics,
// the sciences and Pāṇini's root list. Adapted from the
// Sanskritam-Book companion curriculum and re-checked against
// the primary sources (sūtra numbers, attributions, translations).
// ═══════════════════════════════════════════════════

// ═══════════════════════════════════════════════════
// SECTION 13: VEDIC SANSKRIT (वैदिक-संस्कृतम्)
// ═══════════════════════════════════════════════════
{
  section: 'Vedic Sanskrit / वैदिक-संस्कृतम्',
  sIcon: '🔥',
  sColor: '#C2410C',
  sDesc: 'The language of the Ṛgveda — its grammar, its hymns and the oral tradition that kept them intact / ऋग्वेद की भाषा',
  units: [
    // ─── Unit 46: Vedic grammar ───
    {
      u: 46,
      title: 'Vedic Grammar / छन्दस्',
      sub: 'How Vedic differs from Classical Sanskrit',
      icon: '📜',
      color: '#C2410C',
      lessons: [
        {
          id: '13.1', title: 'Vedic vs Classical / छन्दो भाषा च', icon: '📜',
          desc: 'The subjunctive लेट्, extra infinitives and free-standing prefixes',
          ex: [
            { type: 'info', audio: 'अग्निमीळे पुरोहितम्', text: '📜 Vedic (छन्दस्) vs Classical (भाषा)\n\nPāṇini describes two registers: everyday Sanskrit (भाषा) and the language of the Vedic hymns (छन्दस्). Rules that hold only for the Veda carry words such as छन्दसि ("in the Veda"), मन्त्रे or निगमे.\n\nFive features you can spot in the Ṛgveda:\n\n1️⃣ लेट् (leṭ) — the subjunctive: "may he…, let him…"\n   लिङर्थे लेट् (3.4.7) · e.g. पताति "may it fly", करति "may he do"\n   Pāṇini\'s ten l-affixes include लेट्, but classical Sanskrit dropped it. The "10 lakāras" of Lesson 11.5 are the classical set, where लिङ् is split into विधिलिङ् and आशीर्लिङ्.\n\n2️⃣ Many infinitives (तुमर्थे सेसेनसे… 3.4.9)\n   Classical uses only -तुम् (गन्तुम्, जीवितुम्).\n   Vedic also has -असे (जीवसे "to live"), -ध्यै (पिबध्यै "to drink"), -तवै (एतवै "to go") and more.\n\n3️⃣ Tmesis — prefixes stand apart\n   Classical: आगच्छति (prefix fused to the verb).\n   Vedic: the prefix may follow the verb or be separated from it by other words (छन्दसि परेऽपि 1.4.81 · व्यवहिताश्च 1.4.82).\n\n4️⃣ Instrumental plural -एभिः (बहुलं छन्दसि 7.1.10)\n   देवेभिः = classical देवैः "by the gods".\n\n5️⃣ ळ for ड between vowels\n   अग्निमीळे = अग्निम् ईडे "I praise Agni" — the very first words of the Ṛgveda.' },
            { type: 'multi', q: 'Which word does Pāṇini use to mark a rule as Vedic-only?', options: ['भाषायाम् (in everyday speech)', 'काव्ये (in poetry)', 'छन्दसि (in the Veda)', 'सूत्रे (in a sūtra)'], answer: 2 },
            { type: 'match', q: 'Match the Vedic form to its classical equivalent:', pairs: [['ईळे (Ṛgveda 1.1.1)', 'ईडे — "I praise"'], ['देवेभिः', 'देवैः — "by the gods"'], ['जीवसे', 'जीवितुम् — "to live"'], ['पिबध्यै', 'पातुम् — "to drink"']] },
            { type: 'multi', q: 'लेट् (leṭ) is the Vedic:', options: ['Subjunctive — "may he…, let him…"', 'Perfect tense', 'Passive voice', 'Dual number'], answer: 0 },
            { type: 'smriti', showText: '📸 Spot the Vedic features:\n\n🔥 लेट् = subjunctive (लिङर्थे लेट् 3.4.7)\n🎯 -असे, -ध्यै, -तवै = extra infinitives\n🔀 A prefix may stand apart from its verb\n👥 -एभिः: देवेभिः = देवैः\n🗣️ ळ for ड: ईळे = ईडे', showTime: 8, q: '🧠 In अग्निमीळे, the ळ stands for classical:', options: ['ल', 'र', 'ण', 'ड'], answer: 3 },
          ],
        },
      ],
    },
    // ─── Unit 47: Ṛgveda hymns ───
    {
      u: 47,
      title: 'Ṛgveda Hymns / सूक्तानि',
      sub: 'Agni Sūkta (1.1) & Nāsadīya Sūkta (10.129)',
      icon: '🔥',
      color: '#D97706',
      lessons: [
        {
          id: '13.2', title: 'Agni & Nāsadīya Sūktas / सूक्तपठनम्', icon: '🔥',
          desc: 'Read the first verse of the Ṛgveda and its Hymn of Creation',
          ex: [
            { type: 'info', audio: 'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् । होतारं रत्नधातमम् ॥', text: '🔥 Ṛgveda 1.1.1 — the first verse of the oldest Veda\nMeter: Gāyatrī · Seer: Madhucchandas Vaiśvāmitra\n\nअग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम् ।\nहोतारं रत्नधातमम् ॥\n\nWord by word (पदच्छेदः):\n• अग्निम् — Agni (2nd case: the one praised)\n• ईळे — I praise (= classical ईडे)\n• पुरोहितम् — placed in front: the chief priest\n• यज्ञस्य — of the sacrifice (6th case)\n• देवम् — the god, the shining one\n• ऋत्विजम् — who offers at the right season (ऋतु + यज्)\n• होतारम् — the invoker\n• रत्नधातमम् — greatest giver of treasures (-तम = "most")\n\n"I praise Agni, the chief priest, the god who serves the sacrifice, the invoker, the greatest giver of treasures."\n\n🌌 Ṛgveda 10.129 — Nāsadīya Sūkta, the Hymn of Creation (Triṣṭubh meter):\nनासदासीन्नो सदासीत्तदानीं नासीद्रजो नो व्योमा परो यत् ।\n"Then there was neither non-being (असत्) nor being (सत्); there was no air, nor the sky beyond."\n\nआनीदवातं स्वधया तदेकम् (10.129.2)\n"That One breathed, without wind, by its own power."' },
            { type: 'multi', q: 'In अग्निमीळे, the word अग्निम् is in which case?', options: ['1st — the subject', '6th — "of Agni"', '2nd — the one being praised', '7th — "in Agni"'], answer: 2 },
            { type: 'match', q: 'Match each word of Ṛgveda 1.1.1 to its meaning:', pairs: [['पुरोहितम्', 'Chief priest (placed in front)'], ['यज्ञस्य', 'Of the sacrifice'], ['होतारम्', 'The invoker'], ['रत्नधातमम्', 'Greatest giver of treasures']] },
            { type: 'smriti', showText: '📸 Memorize Ṛgveda 1.1.1:\n\nअग्निमीळे पुरोहितं\nयज्ञस्य देवमृत्विजम् ।\nहोतारं रत्नधातमम् ॥\n\nMeter: Gāyatrī — 3 pādas × 8 syllables', showTime: 9, q: '🧠 Ṛgveda 1.1.1 is composed in which meter?', options: ['Anuṣṭubh', 'Triṣṭubh', 'Gāyatrī', 'Mandākrāntā'], answer: 2 },
            { type: 'multi', q: 'Why is the Nāsadīya Sūkta (10.129) famous?', options: ['It lists the rules of grammar', 'It asks how creation began — "neither non-being nor being was then"', 'It describes a chariot race', 'It is a harvest calendar'], answer: 1 },
            { type: 'match', q: 'Match the opening words to the hymn:', pairs: [['अग्निमीळे पुरोहितम्', 'Agni Sūkta (1.1)'], ['नासदासीन्नो सदासीत्', 'Nāsadīya Sūkta (10.129)'], ['सहस्रशीर्षा पुरुषः', 'Puruṣa Sūkta (10.90)'], ['तत्सवितुर्वरेण्यम्', 'Gāyatrī Mantra (3.62.10)']] },
          ],
        },
      ],
    },
    // ─── Unit 48: The oral tradition ───
    {
      u: 48,
      title: 'Padapāṭha & Vikṛti / पाठभेदाः',
      sub: 'How the Vedas were preserved by memory alone',
      icon: '🔁',
      color: '#9A3412',
      lessons: [
        {
          id: '13.3', title: 'Saṃhitā, Pada, Krama, Jaṭā, Ghana / पाठाः', icon: '🔁',
          desc: 'The recitation patterns that guarded every syllable',
          ex: [
            { type: 'info', audio: 'ओषधयः सं वदन्ते सोमेन सह राज्ञा', text: '🔁 How do you keep a text unchanged for three thousand years — by memory alone?\n\nVedic reciters learned every hymn in several patterns (पाठाः). A slip in one pattern would clash with the others, so errors were caught.\n\n📿 Base patterns (प्रकृतिपाठाः):\n1. संहितापाठः — the continuous text, with all sandhi\n2. पदपाठः — every word separated, sandhi undone (the Ṛgveda padapāṭha is attributed to Śākalya)\n3. क्रमपाठः — overlapping pairs: 1-2, 2-3, 3-4 …\n\n🔀 Derived patterns (विकृतयः) — eight are traditionally counted:\nजटा माला शिखा रेखा ध्वजो दण्डो रथो घनः\n• जटापाठः (braid): 1-2, 2-1, 1-2 · 2-3, 3-2, 2-3 …\n• घनपाठः (bell): 1-2, 2-1, 1-2-3, 3-2-1, 1-2-3 …\n\n🎯 Example — Ṛgveda 10.97.22:\nओषधयः सं वदन्ते सोमेन सह राज्ञा\nKrama: ओषधयः सम् · सं वदन्ते · वदन्ते सोमेन · सोमेन सह · सह राज्ञा\n\n🌏 UNESCO recognised the tradition of Vedic chanting as a Masterpiece of the Oral and Intangible Heritage of Humanity (2003).' },
            { type: 'sequence', title: '🔁 Order the patterns from simplest to most complex:', items: ['संहितापाठः — continuous text', 'पदपाठः — word by word', 'क्रमपाठः — pairs 1-2, 2-3', 'जटापाठः — braid 1-2, 2-1, 1-2', 'घनपाठः — bell 1-2, 2-1, 1-2-3 …'] },
            { type: 'multi', q: 'In the पदपाठः, the reciter:', options: ['Chants the hymn backwards', 'Says every word separately, with sandhi undone', 'Skips every second word', 'Recites only the accents'], answer: 1 },
            { type: 'multi', q: 'Which pattern is the क्रमपाठः?', options: ['1-2, 2-1, 1-2 …', '4-3, 3-2, 2-1 …', '1, 2, 3, 4 …', '1-2, 2-3, 3-4 …'], answer: 3 },
            { type: 'krama', title: '📿 Ghana on the first three words of the Ṛgveda (sandhi left out):', sequence: ['अग्निम् ईळे', 'ईळे अग्निम्', 'अग्निम् ईळे पुरोहितम्', 'पुरोहितम् ईळे अग्निम्', 'अग्निम् ईळे पुरोहितम्'], q: 'Why did reciters practise such patterns?', options: ['To make chanting longer', 'To cross-check memory so no syllable or accent could change', 'To translate the hymns', 'To change the meter'], answer: 1 },
            { type: 'multi', q: 'How many derived patterns (विकृतयः) are traditionally counted?', options: ['3', '5', '8', '11'], answer: 2 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 14: PHILOSOPHY (दर्शनम्)
// ═══════════════════════════════════════════════════
{
  section: 'Philosophy / दर्शनम्',
  sIcon: '🧘',
  sColor: '#1D4ED8',
  sDesc: 'Upaniṣads, Nyāya logic, Yoga and Vedānta — read the source texts / उपनिषद्, न्याय, योग एवं वेदान्त',
  units: [
    // ─── Unit 49: Mahāvākyas ───
    {
      u: 49,
      title: 'Mahāvākyas / महावाक्यानि',
      sub: 'The four great sayings of the Upaniṣads',
      icon: '🕉️',
      color: '#1D4ED8',
      lessons: [
        {
          id: '14.1', title: 'The Four Mahāvākyas / चत्वारि महावाक्यानि', icon: '🕉️',
          desc: 'Parse the great sayings — one from each Veda',
          ex: [
            { type: 'info', audio: 'प्रज्ञानं ब्रह्म । अहं ब्रह्मास्मि । तत्त्वमसि । अयमात्मा ब्रह्म ।', text: '🕉️ The four Mahāvākyas — "great sayings" — are traditionally taken one from each Veda:\n\n1. प्रज्ञानं ब्रह्म — "Consciousness is Brahman"\n   Aitareya Upaniṣad 3.3 · Ṛgveda\n   प्रज्ञानम् + ब्रह्म (both 1st case)\n\n2. अहं ब्रह्मास्मि — "I am Brahman"\n   Bṛhadāraṇyaka Upaniṣad 1.4.10 · Yajurveda\n   अहम् + ब्रह्म + अस्मि ("am" — √अस्, 1st person)\n\n3. तत्त्वमसि — "You are That"\n   Chāndogya Upaniṣad 6.8.7 · Sāmaveda\n   तत् + त्वम् + असि ("are" — √अस्, 2nd person)\n\n4. अयमात्मा ब्रह्म — "This Self is Brahman"\n   Māṇḍūkya Upaniṣad 2 · Atharvaveda\n   अयम् + आत्मा + ब्रह्म\n\n💡 Grammar: these are nominal sentences — nouns in the 1st case side by side, with "is" understood. Only अस्मि and असि spell the verb out.\n\n📿 The Īśa Upaniṣad opens:\nईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।\n"All this — whatever moves in this moving world — is pervaded by the Lord."' },
            { type: 'match', q: 'Match each Mahāvākya to its Veda:', pairs: [['प्रज्ञानं ब्रह्म', 'Ṛgveda (Aitareya)'], ['अहं ब्रह्मास्मि', 'Yajurveda (Bṛhadāraṇyaka)'], ['तत्त्वमसि', 'Sāmaveda (Chāndogya)'], ['अयमात्मा ब्रह्म', 'Atharvaveda (Māṇḍūkya)']] },
            { type: 'multi', q: 'In तत्त्वमसि, the word असि means:', options: ['I am', 'he is', 'you are (√अस्, 2nd person)', 'they are'], answer: 2 },
            { type: 'multi', q: 'The correct पदच्छेदः (word split) of अहं ब्रह्मास्मि is:', options: ['अहम् + ब्रह्म + अस्मि', 'अहम् + ब्रह्मा + स्मि', 'अहं + ब्रह्मास् + मि', 'अह + म्ब्रह्म + अस्मि'], answer: 0 },
            { type: 'multi', q: 'ईशावास्यमिदं सर्वम् means:', options: ['The Lord lives only in temples', 'This world must be renounced', 'All beings are equal', 'All this is pervaded by the Lord'], answer: 3 },
            { type: 'smriti', showText: '📸 The four Mahāvākyas:\n\n🕉️ प्रज्ञानं ब्रह्म — Aitareya · Ṛgveda\n🕉️ अहं ब्रह्मास्मि — Bṛhadāraṇyaka · Yajurveda\n🕉️ तत्त्वमसि — Chāndogya · Sāmaveda\n🕉️ अयमात्मा ब्रह्म — Māṇḍūkya · Atharvaveda', showTime: 9, q: '🧠 तत्त्वमसि comes from which Upaniṣad?', options: ['Aitareya', 'Chāndogya', 'Māṇḍūkya', 'Īśa'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 50: Nyāya logic ───
    {
      u: 50,
      title: 'Nyāya Logic / न्यायः',
      sub: 'Means of knowledge & the five-step proof',
      icon: '🔍',
      color: '#0369A1',
      lessons: [
        {
          id: '14.2', title: 'Pramāṇas & the Five-Step Proof / प्रमाणानि', icon: '🔍',
          desc: '"The hill has fire, because it has smoke"',
          ex: [
            { type: 'info', audio: 'पर्वतो वह्निमान् धूमात्', text: '🔍 Nyāya — the Indian science of reasoning (Gautama\'s Nyāya-sūtra)\n\n📚 Four प्रमाणानि — valid means of knowledge (Nyāya-sūtra 1.1.3):\n1. प्रत्यक्षम् — perception\n2. अनुमानम् — inference\n3. उपमानम् — comparison, analogy\n4. शब्दः — reliable testimony\n\n🔥 The five-member proof (पञ्चावयववाक्यम्):\n1. प्रतिज्ञा (thesis) — पर्वतो वह्निमान् "The hill has fire."\n2. हेतुः (reason) — धूमात् "Because it has smoke." (5th case = "because of")\n3. उदाहरणम् (example) — यो यो धूमवान् स स वह्निमान्, यथा महानसः "Whatever has smoke has fire, like a kitchen."\n4. उपनयः (application) — तथा चायम् "This hill is like that: it has smoke."\n5. निगमनम् (conclusion) — तस्मात्तथा "Therefore it has fire."\n\n💡 This five-step form is परार्थानुमानम् — inference laid out to convince someone else. Unlike a bare three-line syllogism, it insists on a real-world example (the kitchen).' },
            { type: 'sequence', title: '🔥 Put the five members of the proof in order:', items: ['प्रतिज्ञा — the hill has fire', 'हेतुः — because of smoke', 'उदाहरणम् — smoke means fire, as in a kitchen', 'उपनयः — this hill has smoke', 'निगमनम् — therefore it has fire'] },
            { type: 'match', q: 'Match each pramāṇa to its meaning:', pairs: [['प्रत्यक्षम्', 'Perception'], ['अनुमानम्', 'Inference'], ['उपमानम्', 'Comparison / analogy'], ['शब्दः', 'Reliable testimony']] },
            { type: 'multi', q: 'Seeing smoke on a distant hill and concluding "there is fire" is:', options: ['प्रत्यक्षम् (perception)', 'अनुमानम् (inference)', 'उपमानम् (comparison)', 'शब्दः (testimony)'], answer: 1 },
            { type: 'multi', q: 'In धूमात् ("because of smoke"), which case expresses the reason?', options: ['1st (प्रथमा)', '3rd (तृतीया)', '7th (सप्तमी)', '5th (पञ्चमी)'], answer: 3 },
          ],
        },
      ],
    },
    // ─── Unit 51: Yoga & Vedānta ───
    {
      u: 51,
      title: 'Yoga & Vedānta / योगः वेदान्तश्च',
      sub: 'Patañjali\'s sūtras, Sāṅkhya & Advaita',
      icon: '🧘',
      color: '#4338CA',
      lessons: [
        {
          id: '14.3', title: 'Yoga-sūtra 1.1–1.3 & Vedānta / योगसूत्राणि', icon: '🧘',
          desc: 'योगश्चित्तवृत्तिनिरोधः — parse the most famous definition of yoga',
          ex: [
            { type: 'info', audio: 'अथ योगानुशासनम् । योगश्चित्तवृत्तिनिरोधः । तदा द्रष्टुः स्वरूपेऽवस्थानम् ।', text: '🧘 Patañjali\'s Yoga-sūtra opens with three short sūtras:\n\n1.1 अथ योगानुशासनम्\n   अथ (now — an auspicious opening) + योग-अनुशासनम् (the teaching of yoga)\n   "Now, the teaching of yoga."\n\n1.2 योगश्चित्तवृत्तिनिरोधः\n   योगः + चित्त-वृत्ति-निरोधः\n   "Yoga is the stilling of the fluctuations of the mind."\n   चित्तवृत्तिनिरोधः = चित्तस्य वृत्तीनां निरोधः — a ṣaṣṭhī-tatpuruṣa ("stilling OF the fluctuations OF the mind")\n\n1.3 तदा द्रष्टुः स्वरूपेऽवस्थानम्\n   तदा (then) + द्रष्टुः (of the seer, 6th case of द्रष्टृ) + स्वरूपे (in its own nature, 7th case) + अवस्थानम् (abiding)\n   "Then the seer abides in its own nature."\n\n⚖️ Sāṅkhya, the sister system of Yoga, is dualist:\n• पुरुषः — pure, witnessing consciousness\n• प्रकृतिः — nature, made of three गुणाः: सत्त्वम् (clarity), रजस् (activity), तमस् (inertia)\n\n🕉️ Advaita Vedānta, the school of Śaṅkara, is non-dual. A traditional one-line summary (Brahmajñānāvalīmālā, attributed to Śaṅkara):\nब्रह्म सत्यं जगन्मिथ्या जीवो ब्रह्मैव नापरः\n"Brahman is real, the world is appearance; the individual self is Brahman alone, not other."' },
            { type: 'multi', q: 'In योगश्चित्तवृत्तिनिरोधः, the compound चित्त-वृत्ति-निरोधः is a:', options: ['Dvandva — "mind and thoughts and stopping"', 'Bahuvrīhi — "one whose mind is stopped"', 'Ṣaṣṭhī-tatpuruṣa — "stilling of the fluctuations of the mind"', 'Avyayībhāva — an adverb'], answer: 2 },
            { type: 'multi', q: 'Why does योगः become योगश् before चित्त…?', options: ['Visarga sandhi: before च, ः → स् → श् (8.3.34, 8.4.40)', 'It is a Vedic form', 'A spelling mistake', 'योगश् is a different word'], answer: 0 },
            { type: 'match', q: 'Match the term to its meaning:', pairs: [['चित्तम्', 'Mind-field'], ['वृत्तिः', 'Fluctuation, thought-wave'], ['निरोधः', 'Stilling, restraint'], ['द्रष्टा', 'The seer, the witness']] },
            { type: 'match', q: 'Match the Sāṅkhya term to its meaning:', pairs: [['सत्त्वम्', 'Clarity, lightness'], ['रजस्', 'Activity, passion'], ['तमस्', 'Inertia, heaviness'], ['पुरुषः', 'Witness consciousness']] },
            { type: 'smriti', showText: '📸 Yoga-sūtra 1.1–1.3:\n\n1.1 अथ योगानुशासनम्\n   "Now, the teaching of yoga."\n1.2 योगश्चित्तवृत्तिनिरोधः\n   "Yoga is the stilling of the mind\'s fluctuations."\n1.3 तदा द्रष्टुः स्वरूपेऽवस्थानम्\n   "Then the seer abides in its own nature."', showTime: 10, q: '🧠 Which sūtra defines yoga?', options: ['1.1 अथ योगानुशासनम्', '1.2 योगश्चित्तवृत्तिनिरोधः', '1.3 तदा द्रष्टुः स्वरूपेऽवस्थानम्', 'None of them'], answer: 1 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 15: POETICS & DRAMA (काव्यं नाट्यं च)
// ═══════════════════════════════════════════════════
{
  section: 'Poetics & Drama / काव्यं नाट्यं च',
  sIcon: '🎭',
  sColor: '#BE185D',
  sDesc: 'Rasa, dhvani, the great court epics and the shape of a Sanskrit play / रस, ध्वनि एवं नाटक',
  units: [
    // ─── Unit 52: Rasa ───
    {
      u: 52,
      title: 'Rasa Theory / रसः',
      sub: 'Bharata\'s Nāṭyaśāstra & the nine rasas',
      icon: '🎭',
      color: '#BE185D',
      lessons: [
        {
          id: '15.1', title: 'Rasa-sūtra & Navarasa / नवरसाः', icon: '🎭',
          desc: 'How art is "tasted" — the aesthetic flavours of Indian theatre',
          ex: [
            { type: 'info', audio: 'विभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः', text: '🎭 Bharata\'s Nāṭyaśāstra (chapter 6) states the Rasa-sūtra:\n\nविभावानुभावव्यभिचारिसंयोगाद्रसनिष्पत्तिः\n"Rasa arises from the union of causes (विभावाः), expressions (अनुभावाः) and passing feelings (व्यभिचारिभावाः)."\n\n• विभावः — the cause or setting (the beloved, a moonlit garden)\n• अनुभावः — the outward expression (a glance, tears, trembling)\n• व्यभिचारिभावः — a passing feeling (worry, joy, doubt…)\nTogether they awaken a lasting emotion (स्थायिभावः), which the audience "tastes" as रसः.\n\n🌈 The rasas and their lasting emotions:\n1. शृङ्गारः (love) ← रतिः (delight)\n2. हास्यः (comedy) ← हासः (laughter)\n3. करुणः (pathos) ← शोकः (grief)\n4. रौद्रः (fury) ← क्रोधः (anger)\n5. वीरः (heroism) ← उत्साहः (energy)\n6. भयानकः (terror) ← भयम् (fear)\n7. बीभत्सः (disgust) ← जुगुप्सा (aversion)\n8. अद्भुतः (wonder) ← विस्मयः (astonishment)\n9. शान्तः (peace) ← शमः (calm)\n\nBharata lists eight rasas. Later critics added शान्तः — defended above all by Abhinavagupta — giving the famous नवरसाः.' },
            { type: 'match', q: 'Match each rasa to its lasting emotion (स्थायिभावः):', pairs: [['शृङ्गारः (love)', 'रतिः (delight)'], ['वीरः (heroism)', 'उत्साहः (energy)'], ['करुणः (pathos)', 'शोकः (grief)'], ['अद्भुतः (wonder)', 'विस्मयः (astonishment)']] },
            { type: 'multi', q: 'How many rasas does Bharata himself list in the Nāṭyaśāstra?', options: ['Five', 'Nine', 'Eight', 'Twelve'], answer: 2 },
            { type: 'multi', q: 'On stage, a grieving character\'s tears and trembling are the:', options: ['अनुभावाः (outward expressions)', 'विभावाः (causes)', 'स्थायिभावाः (lasting emotions)', 'रसाः (tastes)'], answer: 0 },
            { type: 'match', q: 'Match the rasa to its English name:', pairs: [['हास्यः', 'Comedy'], ['रौद्रः', 'Fury'], ['भयानकः', 'Terror'], ['शान्तः', 'Peace']] },
            { type: 'multi', q: 'Which critic is best known for defending शान्तः as the ninth rasa?', options: ['Pāṇini', 'Abhinavagupta', 'Kālidāsa', 'Kauṭilya'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 53: Dhvani ───
    {
      u: 53,
      title: 'Dhvani / ध्वनिः',
      sub: 'Literal, indicated & suggested meaning',
      icon: '🔔',
      color: '#A21CAF',
      lessons: [
        {
          id: '15.2', title: 'Three Powers of a Word / शब्दशक्तयः', icon: '🔔',
          desc: '"Suggestion is the soul of poetry" — Ānandavardhana',
          ex: [
            { type: 'info', audio: 'काव्यस्यात्मा ध्वनिः । गङ्गायां घोषः ।', text: '🔔 Sanskrit poetics says a word can mean in three ways (शब्दशक्तयः):\n\n1. अभिधा — denotation: the dictionary meaning\n   गङ्गा = the river Ganges\n\n2. लक्षणा — indication: a secondary meaning, used when the literal one cannot work\n   गङ्गायां घोषः — literally "a cowherds\' village IN the Ganges"\n   No village stands in a river, so we understand "on the BANK of the Ganges".\n\n3. व्यञ्जना — suggestion: what the words evoke beyond both\n   Why say "on the Ganges" instead of "on the bank"? To suggest coolness (शैत्यम्) and purity (पावनत्वम्).\n\n📖 Ānandavardhana\'s Dhvanyāloka (9th century CE) opens:\nकाव्यस्यात्मा ध्वनिः — "Suggestion (ध्वनिः) is the soul of poetry."\n\n💡 The finest poetry, he argued, is where the suggested meaning outshines the literal one.' },
            { type: 'multi', q: 'Reading गङ्गायां घोषः as "a village on the BANK of the Ganges" uses:', options: ['अभिधा (literal meaning)', 'लक्षणा (indication)', 'छन्दस् (meter)', 'सन्धिः (sound-joining)'], answer: 1 },
            { type: 'multi', q: 'The coolness and purity that "on the Ganges" evokes come from:', options: ['अभिधा', 'लक्षणा', 'उपमा (simile)', 'व्यञ्जना (suggestion)'], answer: 3 },
            { type: 'match', q: 'Match each term to its meaning:', pairs: [['अभिधा', 'Dictionary meaning'], ['लक्षणा', 'Secondary, indicated meaning'], ['व्यञ्जना', 'Suggested meaning'], ['ध्वनिः', '"Soul of poetry"']] },
            { type: 'multi', q: 'Who wrote the Dhvanyāloka?', options: ['Bharata', 'Daṇḍin', 'Ānandavardhana', 'Pāṇini'], answer: 2 },
          ],
        },
      ],
    },
    // ─── Unit 54: Mahākāvya & Nāṭaka ───
    {
      u: 54,
      title: 'Mahākāvya & Nāṭaka / काव्यं नाटकं च',
      sub: 'The five great poems & how a play is built',
      icon: '📚',
      color: '#9F1239',
      lessons: [
        {
          id: '15.3', title: 'Pañca-mahākāvya & Nāṭaka / पञ्चमहाकाव्यानि', icon: '📚',
          desc: 'Kālidāsa, Bhāravi, Māgha, Śrīharṣa — and the shape of a Sanskrit play',
          ex: [
            { type: 'info', audio: 'उपमा कालिदासस्य भारवेरर्थगौरवम् । दण्डिनः पदलालित्यं माघे सन्ति त्रयो गुणाः ॥', text: '📚 The five great court epics (पञ्चमहाकाव्यानि):\n1. रघुवंशम् — Kālidāsa\n2. कुमारसम्भवम् — Kālidāsa\n3. किरातार्जुनीयम् — Bhāravi\n4. शिशुपालवधम् — Māgha\n5. नैषधीयचरितम् — Śrīharṣa\n\nA traditional verse sums up the masters:\nउपमा कालिदासस्य भारवेरर्थगौरवम् ।\nदण्डिनः पदलालित्यं माघे सन्ति त्रयो गुणाः ॥\n"Simile is Kālidāsa\'s, depth of meaning Bhāravi\'s, grace of words Daṇḍin\'s — Māgha has all three."\nAnd of Śrīharṣa\'s learned poem: नैषधं विद्वदौषधम् — "the Naiṣadha is a tonic for scholars."\n\n🎭 How a Sanskrit play (नाटकम्) is built:\n• नान्दी — the opening benediction\n• प्रस्तावना — the prologue, where the सूत्रधारः (stage-director) introduces the play\n• अङ्काः — the acts (Kālidāsa\'s Abhijñānaśākuntalam has seven)\n• विदूषकः — the hero\'s jester-companion\n• भरतवाक्यम् — the closing blessing\n\nThe dramatic tradition counts ten kinds of play (दशरूपकम्); the नाटकम् is the foremost.' },
            { type: 'match', q: 'Match each mahākāvya to its poet:', pairs: [['रघुवंशम्', 'कालिदासः'], ['किरातार्जुनीयम्', 'भारविः'], ['शिशुपालवधम्', 'माघः'], ['नैषधीयचरितम्', 'श्रीहर्षः']] },
            { type: 'multi', q: 'भारवेरर्थगौरवम् praises Bhāravi for:', options: ['Simile', 'Depth of meaning', 'Sweet sounds', 'Long compounds'], answer: 1 },
            { type: 'multi', q: 'According to the verse, which poet has "all three" qualities?', options: ['Kālidāsa', 'Bhāravi', 'Daṇḍin', 'Māgha'], answer: 3 },
            { type: 'sequence', title: '🎭 Put the parts of a nāṭaka in order:', items: ['नान्दी — benediction', 'प्रस्तावना — prologue', 'अङ्काः — the acts', 'भरतवाक्यम् — closing blessing'] },
            { type: 'multi', q: 'Who introduces the play in the prologue (प्रस्तावना)?', options: ['सूत्रधारः (stage-director)', 'विदूषकः (jester)', 'नायकः (hero)', 'राजा (king)'], answer: 0 },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 16: THE SCIENCES (विज्ञानशास्त्राणि)
// ═══════════════════════════════════════════════════
{
  section: 'Sciences / विज्ञानशास्त्राणि',
  sIcon: '🔭',
  sColor: '#047857',
  sDesc: 'Āyurveda, mathematics and statecraft in their own Sanskrit words / आयुर्वेद, गणित एवं अर्थशास्त्र',
  units: [
    // ─── Unit 55: Āyurveda ───
    {
      u: 55,
      title: 'Āyurveda / आयुर्वेदः',
      sub: 'The three doṣas & the definition of health',
      icon: '🌿',
      color: '#047857',
      lessons: [
        {
          id: '16.1', title: 'Tridoṣa & Svastha / स्वस्थलक्षणम्', icon: '🌿',
          desc: 'Parse Suśruta\'s famous definition of a healthy person',
          ex: [
            { type: 'info', audio: 'समदोषः समाग्निश्च समधातुमलक्रियः । प्रसन्नात्मेन्द्रियमनाः स्वस्थ इत्यभिधीयते ॥', text: '🌿 आयुर्वेदः = आयुस् (life) + वेदः (knowledge) — "the knowledge of life"\n\n📚 The three great classics (बृहत्त्रयी):\n• चरकसंहिता — Caraka: internal medicine\n• सुश्रुतसंहिता — Suśruta: surgery\n• अष्टाङ्गहृदयम् — Vāgbhaṭa: a compact synthesis of both\n\n⚖️ Vāgbhaṭa (Aṣṭāṅgahṛdaya, Sūtrasthāna 1):\nवायुः पित्तं कफश्चेति त्रयो दोषाः समासतः ।\n"In brief, the doṣas are three: vāta, pitta and kapha."\n• वातः / वायुः — movement\n• पित्तम् — heat, digestion, transformation\n• कफः — structure, cohesion\n\n🩺 Suśruta\'s definition of health (Sūtrasthāna 15):\nसमदोषः समाग्निश्च समधातुमलक्रियः ।\nप्रसन्नात्मेन्द्रियमनाः स्वस्थ इत्यभिधीयते ॥\n• समदोषः — whose doṣas are balanced\n• समाग्निः — whose digestive fire is balanced\n• समधातुमलक्रियः — whose tissues and excretions work evenly\n• प्रसन्नात्मेन्द्रियमनाः — whose self, senses and mind are content\n• स्वस्थ इत्यभिधीयते — is called "healthy"\n\n💡 स्वस्थ literally means "established in oneself" (स्व + स्थ).' },
            { type: 'match', q: 'Match each part of Suśruta\'s verse to its meaning:', pairs: [['समदोषः', 'Balanced doṣas'], ['समाग्निः', 'Balanced digestive fire'], ['प्रसन्नात्मेन्द्रियमनाः', 'Content self, senses and mind'], ['स्वस्थः', 'Healthy — "established in oneself"']] },
            { type: 'match', q: 'Match each term to its principle:', pairs: [['वातः', 'Movement'], ['पित्तम्', 'Heat and transformation'], ['कफः', 'Structure and cohesion'], ['अग्निः', 'Digestive fire']] },
            { type: 'multi', q: 'Which classic is famous for surgery?', options: ['चरकसंहिता', 'अष्टाङ्गहृदयम्', 'सुश्रुतसंहिता', 'अर्थशास्त्रम्'], answer: 2 },
            { type: 'multi', q: 'समाग्निश्च splits into:', options: ['समा + ग्नि + श्च', 'सम + अग्निः + च', 'सम + आग्नि + च', 'समाग् + निश्च'], answer: 1 },
            { type: 'multi', q: 'स्वस्थ ("healthy") literally means:', options: ['Established in oneself (स्व + स्थ)', 'Having a strong body', 'Free from all food', 'Very old'], answer: 0 },
          ],
        },
      ],
    },
    // ─── Unit 56: Mathematics ───
    {
      u: 56,
      title: 'Mathematics / गणितम्',
      sub: 'Baudhāyana, Āryabhaṭa & numbers in verse',
      icon: '📐',
      color: '#0F766E',
      lessons: [
        {
          id: '16.2', title: 'Śulba, π & Number Codes / सङ्ख्यासङ्केताः', icon: '📐',
          desc: 'Āryabhaṭa\'s π and how poets wrote numbers as words',
          ex: [
            { type: 'info', audio: 'चतुरधिकं शतमष्टगुणं द्वाषष्टिस्तथा सहस्राणाम्', text: '📐 Mathematics in Sanskrit verse\n\n1️⃣ Baudhāyana Śulbasūtra (roughly 800–500 BCE) — rules for building fire-altars:\nदीर्घचतुरस्रस्याक्ष्णया रज्जुः पार्श्वमानी तिर्यङ्मानी च यत्पृथग्भूते कुरुतस्तदुभयं करोति\n"The diagonal cord of a rectangle makes as much as its long side and its short side make separately" — the area statement we now call Pythagoras\'s theorem.\n\n2️⃣ Āryabhaṭīya (499 CE), Gaṇitapāda 10:\nचतुरधिकं शतमष्टगुणं द्वाषष्टिस्तथा सहस्राणाम् ।\nअयुतद्वयविष्कम्भस्यासन्नो वृत्तपरिणाहः ॥\n"Add 4 to 100, multiply by 8, and add 62,000: this is the approximate (आसन्नः) circumference of a circle whose diameter is 20,000."\n\n(100 + 4) × 8 + 62,000 = 62,832\nπ ≈ 62,832 ÷ 20,000 = 3.1416' },
            { type: 'multi', q: 'Āryabhaṭa\'s circle has diameter 20,000 and circumference 62,832. What value of π is that?', options: ['3', '3.14', '22 ÷ 7 exactly', '3.1416'], answer: 3 },
            { type: 'multi', q: 'Āryabhaṭa calls his circumference आसन्नः. What does that tell us?', options: ['It is exact', 'It is approximate', 'It is a secret', 'It works for squares only'], answer: 1 },
            { type: 'info', text: '🔢 Writing numbers as words — so they fit the meter\n\n1️⃣ भूतसङ्ख्या — things that come in a known number:\nख / शून्य (sky, void) = 0 · चन्द्र / भू (moon, earth) = 1 · नेत्र (eyes) = 2 · अग्नि (the three sacred fires) = 3 · वेद = 4 · बाण (Kāma\'s five arrows) = 5 · रस (six tastes) = 6 · ऋषि (seven sages) = 7 · वसु = 8 · ग्रह = 9\n\n2️⃣ कटपयादि — every consonant stands for a digit:\nक ट प य = 1 · ख ठ फ र = 2 · ग ड ब ल = 3\nघ ढ भ व = 4 · ङ ण म श = 5 · च त ष = 6\nछ थ स = 7 · ज द ह = 8 · झ ध = 9 · ञ न = 0\nThe digits are then read from right to left (अङ्कानां वामतो गतिः).\n\n🎵 Example: the names of Carnatic music\'s 72 parent (melakarta) rāgas encode their numbers. In मायामालवगौळ, म = 5 and य = 1 → read backwards: rāga no. 15.' },
            { type: 'match', q: 'Decode these Bhūtasaṅkhyā words:', pairs: [['ख / शून्य (sky, void)', '0'], ['चन्द्र (moon)', '1'], ['नेत्र (eyes)', '2'], ['वेद (the Vedas)', '4']] },
            { type: 'multi', q: 'In कटपयादि, which digit does म stand for?', options: ['1', '3', '5', '9'], answer: 2 },
            { type: 'multi', q: 'Why did astronomers write numbers as words like वेद or ग्रह?', options: ['To hide them from students', 'So numbers fit the meter and are easy to memorise', 'Because Sanskrit had no digits', 'For decoration only'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 57: Arthaśāstra ───
    {
      u: 57,
      title: 'Arthaśāstra / अर्थशास्त्रम्',
      sub: 'Kauṭilya\'s science of statecraft',
      icon: '👑',
      color: '#B45309',
      lessons: [
        {
          id: '16.3', title: 'Saptāṅga & Welfare / प्रजासुखम्', icon: '👑',
          desc: '"In the happiness of the subjects lies the king\'s happiness"',
          ex: [
            { type: 'info', audio: 'प्रजासुखे सुखं राज्ञः प्रजानां च हिते हितम्', text: '👑 Kauṭilya\'s Arthaśāstra — the classical science of statecraft and economy\n\n🏛️ The seven limbs of a state (Arthaśāstra 6.1.1):\nस्वाम्यमात्यजनपददुर्गकोशदण्डमित्राणि प्रकृतयः\n1. स्वामी — the ruler\n2. अमात्यः — ministers\n3. जनपदः — territory and people\n4. दुर्गम् — fortified towns\n5. कोशः — treasury\n6. दण्डः — army, the force of law\n7. मित्रम् — allies\n\n💛 The ruler\'s duty (Arthaśāstra 1.19.34):\nप्रजासुखे सुखं राज्ञः प्रजानां च हिते हितम् ।\nनात्मप्रियं हितं राज्ञः प्रजानां तु प्रियं हितम् ॥\n"In the happiness of the subjects lies the king\'s happiness, in their welfare his welfare. What pleases himself is not his good; what pleases his subjects is his good."\n\n💡 Grammar: प्रजासुखे is 7th case — "IN the happiness of the subjects". राज्ञः is 6th case of राजन् — "of the king".' },
            { type: 'sequence', title: '🏛️ Order the seven limbs as Kauṭilya lists them:', items: ['स्वामी — ruler', 'अमात्यः — ministers', 'जनपदः — territory & people', 'दुर्गम् — fort', 'कोशः — treasury', 'दण्डः — army', 'मित्रम् — ally'] },
            { type: 'multi', q: 'In the seven-limb theory, कोशः means:', options: ['Fortress', 'Ally', 'Treasury', 'Territory'], answer: 2 },
            { type: 'multi', q: 'Here, in प्रजासुखे सुखं राज्ञः, राज्ञः means:', options: ['The king (subject)', 'Of the king (6th case of राजन्)', 'By the king (3rd case)', 'O king!'], answer: 1 },
            { type: 'match', q: 'Match the limb to its meaning:', pairs: [['अमात्यः', 'Minister'], ['दुर्गम्', 'Fortified town'], ['दण्डः', 'Army, force of law'], ['मित्रम्', 'Ally']] },
          ],
        },
      ],
    },
  ],
},

// ═══════════════════════════════════════════════════
// SECTION 17: VERB ROOTS (धातुपाठः)
// ═══════════════════════════════════════════════════
{
  section: 'Verb Roots / धातुपाठः',
  sIcon: '🌳',
  sColor: '#92400E',
  sDesc: 'The ten verb classes, Pāṇini\'s root list and step-by-step derivation / दश गण, धातुपाठ एवं प्रक्रिया',
  units: [
    // ─── Unit 58: The ten verb classes ───
    {
      u: 58,
      title: 'Ten Verb Classes / दश गणाः',
      sub: 'How a root becomes a present-tense stem',
      icon: '🌱',
      color: '#92400E',
      lessons: [
        {
          id: '17.1', title: 'Daśagaṇī / दशगणी', icon: '🌱',
          desc: 'भ्वादि to चुरादि — one stem-forming affix per class',
          ex: [
            { type: 'info', audio: 'भवति अत्ति जुहोति दीव्यति सुनोति तुदति रुणद्धि तनोति क्रीणाति चोरयति', text: '🌱 Pāṇini\'s Dhātupāṭha lists about 2,000 verb roots in TEN classes (गणाः). Each class is named after its first member and builds its present stem in its own way — usually with a stem-forming affix called विकरणम्.\n\n1. भ्वादिः — शप् (-अ-), with guṇa of the root vowel where possible: √भू → भवति (कर्तरि शप् 3.1.68)\n2. अदादिः — no affix (शप् is deleted): √अद् → अत्ति, √अस् → अस्ति (अदिप्रभृतिभ्यः शपः 2.4.72)\n3. जुहोत्यादिः — शप् becomes श्लु (zero) and the root is reduplicated: √हु → जुहोति, √दा → ददाति (जुहोत्यादिभ्यः श्लुः 2.4.75 · श्लौ 6.1.10)\n4. दिवादिः — श्यन् (-य-): √दिव् → दीव्यति, √नृत् → नृत्यति (3.1.69)\n5. स्वादिः — श्नु (-नु-/-नो-): √सु → सुनोति, √आप् → आप्नोति (3.1.73)\n6. तुदादिः — श (-अ-) but NO guṇa: √तुद् → तुदति, √लिख् → लिखति (3.1.77)\n7. रुधादिः — श्नम् (न inserted INSIDE the root): √रुध् → रुणद्धि, √भिद् → भिनत्ति (3.1.78)\n8. तनादिः — उ (-उ-/-ओ-): √तन् → तनोति, √कृ → करोति (3.1.79)\n9. क्र्यादिः — श्ना (-ना-/-नी-): √क्री → क्रीणाति, √ज्ञा → जानाति (3.1.81)\n10. चुरादिः — णिच्, then शप् (-अय-): √चुर् → चोरयति, √कथ् → कथयति (3.1.25)\n\n💡 Classes 1, 4, 6 and 10 end their stem in -अ- ("thematic") and take the same endings as भवति. Classes 2, 3, 5, 7, 8 and 9 are "athematic".' },
            { type: 'match', q: 'Match the verb to its class:', pairs: [['भवति', 'Class 1 · भ्वादिः'], ['अस्ति', 'Class 2 · अदादिः'], ['जुहोति', 'Class 3 · जुहोत्यादिः'], ['करोति', 'Class 8 · तनादिः']] },
            { type: 'match', q: 'Match the class to its vikaraṇa:', pairs: [['दिवादिः (4)', 'श्यन् → -य-'], ['स्वादिः (5)', 'श्नु → -नु- / -नो-'], ['रुधादिः (7)', 'श्नम् → न inside the root'], ['क्र्यादिः (9)', 'श्ना → -ना- / -नी-']] },
            { type: 'multi', q: 'Classes 1 and 6 both add -अ-. Why is it लिखति (class 6) and not *लेखति?', options: ['Because इ can never take guṇa', 'Because लिखति is a past tense', 'Class 6 श has no प् marker, so it acts as ङित् (1.2.4) and blocks guṇa (1.1.5)', 'Because लिख् is a noun'], answer: 2 },
            { type: 'multi', q: 'चोरयति ("he steals") belongs to which class?', options: ['Class 1 · भ्वादिः', 'Class 4 · दिवादिः', 'Class 6 · तुदादिः', 'Class 10 · चुरादिः'], answer: 3 },
            { type: 'smriti', showText: '📸 How each class builds its present stem:\n\n1 भू — शप् (-अ-)\n2 अद् — शप् dropped\n3 हु — श्लु: reduplication\n4 दिव् — श्यन् (-य-)\n5 सु — श्नु (-नु-)\n6 तुद् — श (-अ-, no guṇa)\n7 रुध् — श्नम् (न inside)\n8 तन् — उ\n9 क्री — श्ना (-ना-)\n10 चुर् — णिच् + शप् (-अय-)', showTime: 12, q: '🧠 Which class puts न INSIDE the root (रुणद्धि)?', options: ['Class 5 · स्वादिः', 'Class 7 · रुधादिः', 'Class 8 · तनादिः', 'Class 9 · क्र्यादिः'], answer: 1 },
          ],
        },
      ],
    },
    // ─── Unit 59: Dhātupāṭha & Gaṇapāṭha ───
    {
      u: 59,
      title: 'Dhātupāṭha & Gaṇapāṭha / धातुपाठः',
      sub: 'Pāṇini\'s root list & word lists',
      icon: '🗂️',
      color: '#78350F',
      lessons: [
        {
          id: '17.2', title: 'Reading a Root Entry / उपदेशः', icon: '🗂️',
          desc: 'Decode भू सत्तायाम् and डुकृञ् करणे',
          ex: [
            { type: 'info', audio: 'भू सत्तायाम् । डुकृञ् करणे ।', text: '🗂️ The Aṣṭādhyāyī works with companion lists:\n• माहेश्वरसूत्राणि — the sound inventory (Lesson 11.1)\n• धातुपाठः — the list of verb roots\n• गणपाठः — lists of words that share a rule\n\n📖 A Dhātupāṭha entry = the root in its "taught" form (उपदेशः) + its meaning in the 7th case:\n• भू सत्तायाम् — √भू "in the sense of being"\n• डुकृञ् करणे — √कृ "in the sense of doing, making"\n\n🔖 The extra letters are इत् markers (Lesson 11.17) — tags that switch rules on:\n• ञ् at the end → the root is उभयपदी: करोति when the action is for another, कुरुते when its fruit goes to the doer (स्वरितञितः कर्त्रभिप्राये क्रियाफले 1.3.72)\n• डु at the start → the root takes the suffix क्त्रि, always followed by मप् (ड्वितः क्त्रिः 3.3.88 · क्त्रेर्मम्नित्यम् 4.4.20) → कृत्रिमम् "artificial, man-made"\n• Roots taught with initial ष् or ण् (षह्, णम्) are used with स्, न् (सह्, नम्) — धात्वादेः षः सः 6.1.64 · णो नः 6.1.65\n\n📚 Gaṇapāṭha: when a sūtra says "X-आदि" ("X and the rest"), it points to a list:\n• सर्वादीनि सर्वनामानि (1.1.27) — सर्व, विश्व, उभ … तद्, यद्, किम् are pronouns\n• स्वरादिनिपातमव्ययम् (1.1.37) — स्वर्, अन्तर्, प्रातर्, उच्चैस्, नीचैस् … are indeclinables' },
            { type: 'multi', q: 'In the entry भू सत्तायाम्, what does सत्तायाम् give?', options: ['The class number', 'The meaning — "in the sense of being" (7th case)', 'The past tense', 'The poet who used it'], answer: 1 },
            { type: 'match', q: 'Match the marker or list to its effect:', pairs: [['ञ् in डुकृञ्', 'Both करोति and कुरुते (उभयपदी)'], ['डु in डुकृञ्', 'Takes क्त्रि + मप् → कृत्रिम'], ['सर्वादि list', 'Words declined as pronouns'], ['स्वरादि list', 'Indeclinables (अव्ययानि)']] },
            { type: 'multi', q: 'The Dhātupāṭha root षह् is actually used as:', options: ['षह्', 'शह्', 'हस्', 'सह् (धात्वादेः षः सः 6.1.64)'], answer: 3 },
            { type: 'multi', q: 'सर्वादीनि सर्वनामानि (1.1.27) means:', options: ['All words are nouns', 'Every pronoun begins with स', 'सर्व and the words listed with it are called pronouns (सर्वनाम)', 'सर्व is a verb'], answer: 2 },
          ],
        },
      ],
    },
    // ─── Unit 60: Prakriyā ───
    {
      u: 60,
      title: 'Prakriyā / प्रक्रिया',
      sub: 'Derive words step by step, sūtra by sūtra',
      icon: '⚙️',
      color: '#7C2D12',
      lessons: [
        {
          id: '17.3', title: 'Deriving भवति, रामः & देवालयः / रूपसिद्धिः', icon: '⚙️',
          desc: 'Run Pāṇini\'s grammar like a program',
          ex: [
            { type: 'info', audio: 'भवति । रामः । देवालयः ।', text: '⚙️ प्रक्रिया = derivation. Start from a root or stem, apply sūtras one by one, and the correct word comes out — like running a program.\n\n🏃 √भू → भवति ("he is, he becomes")\n1. भू + लट् — present tense (वर्तमाने लट् 3.2.123)\n2. भू + ति — ल् is replaced by the 3rd-person singular ending तिप् (तिप्तस्झि… 3.4.78)\n3. भू + अ + ति — the class-1 vikaraṇa शप् (कर्तरि शप् 3.1.68)\n4. भो + अ + ति — guṇa: ऊ → ओ (सार्वधातुकार्धधातुकयोः 7.3.84)\n5. भव् + अ + ति = भवति ✓ — before a vowel, ए ओ ऐ औ become अय् अव् आय् आव् (एचोऽयवायावः 6.1.78)\n\n👑 राम → रामः ("Rāma", 1st case singular)\n1. राम + सुँ — the nominative singular ending (स्वौजसमौट्… 4.1.2) → राम + स्\n2. राम + रुँ — final स् becomes रुँ (ससजुषो रुः 8.2.66) → राम + र्\n3. रामः ✓ — र् at a pause becomes visarga (खरवसानयोर्विसर्जनीयः 8.3.15)\n\n🛕 देव + आलयः → देवालयः ("temple")\nअ + आ → आ: like vowels merge into one long vowel (अकः सवर्णे दीर्घः 6.1.101) ✓' },
            { type: 'sequence', title: '⚙️ Order the steps that turn √भू into भवति:', items: ['भू + लट्', 'भू + ति', 'भू + अ + ति', 'भो + अ + ति', 'भव् + अ + ति = भवति'] },
            { type: 'multi', q: 'Which sūtra turns भो + अ into भव् + अ?', options: ['इको यणचि (6.1.77)', 'एचोऽयवायावः (6.1.78)', 'आद्गुणः (6.1.87)', 'अकः सवर्णे दीर्घः (6.1.101)'], answer: 1 },
            { type: 'multi', q: 'In deriving रामः, the स् of सुँ first becomes:', options: ['रुँ (ससजुषो रुः 8.2.66)', 'ष्', 'म्', 'Nothing — it disappears'], answer: 0 },
            { type: 'match', q: 'Match each step to its sūtra:', pairs: [['भू + लट् (present tense)', 'वर्तमाने लट् 3.2.123'], ['Insert शप् (-अ-)', 'कर्तरि शप् 3.1.68'], ['ऊ → ओ (guṇa)', 'सार्वधातुकार्धधातुकयोः 7.3.84'], ['देव + आलयः → देवालयः', 'अकः सवर्णे दीर्घः 6.1.101']] },
            { type: 'multi', q: '🏆 Capstone: √जि ("to conquer") is also class 1. Run the same steps — what do you get?', options: ['जिति', 'जेति', 'जयति', 'जायति'], answer: 2 },
          ],
        },
      ],
    },
  ],
},

]; // end DATA

// UI strings
export const UI = {
  en: {
    check: 'Check', next: 'Continue', skip: 'Skip',
    correct: 'Correct! \u2728', wrong: 'Incorrect \u2715',
    done: 'Lesson Complete!', xp: 'XP', hearts: 'Hearts',
    match: 'Tap pairs to match', got: 'Got it!', of: 'of',
    hear: '\u266A Tap to hear', daily: 'Daily Goal', level: 'Level',
    begin: 'Begin', breathe: 'Breathe...',
    reveal: 'Reveal & Answer \u2193', tapOrder: 'Tap in correct order',
    reset: 'Reset',
  },
  hi: {
    check: '\u091C\u093E\u0901\u091A\u0947\u0902', next: '\u0906\u0917\u0947', skip: '\u091B\u094B\u0921\u093C\u0947\u0902',
    correct: '\u0938\u0939\u0940! \u2728', wrong: '\u0917\u0932\u0924 \u2715',
    done: '\u092A\u093E\u0920 \u092A\u0942\u0930\u094D\u0923!', xp: 'XP', hearts: '\u091C\u0940\u0935\u0928',
    match: '\u091C\u094B\u0921\u093C\u0940 \u092E\u093F\u0932\u093E\u0907\u090F', got: '\u0938\u092E\u091D\u093E!', of: '\u0915\u093E',
    hear: '\u266A \u0938\u0941\u0928\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u091F\u0948\u092A \u0915\u0930\u0947\u0902', daily: '\u0926\u0948\u0928\u093F\u0915 \u0932\u0915\u094D\u0937\u094D\u092F', level: '\u0938\u094D\u0924\u0930',
    begin: '\u0906\u0930\u092E\u094D\u092D', breathe: '\u0936\u094D\u0935\u093E\u0938 \u0932\u0947\u0902...',
    reveal: '\u0926\u0947\u0916\u0947\u0902 \u090F\u0935\u0902 \u0909\u0924\u094D\u0924\u0930 \u0926\u0947\u0902 \u2193', tapOrder: '\u0938\u0939\u0940 \u0915\u094D\u0930\u092E \u092E\u0947\u0902 \u091F\u0948\u092A \u0915\u0930\u0947\u0902',
    reset: '\u092A\u0941\u0928\u0903',
  },
} as const;

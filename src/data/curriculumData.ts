export type ExerciseType =
  | 'meditation'
  | 'letter_card'
  | 'info_card'
  | 'listening'
  | 'quiz'
  | 'match'
  | 'order'
  | 'memory';

export interface CurriculumExercise {
  id: string;
  type: ExerciseType;
  title: string;
  // Meditation
  durationSeconds?: number;
  sanskritPrompt?: string;
  hindiPrompt?: string;
  englishPrompt?: string;
  // Letter Card
  letter?: string;
  transliteration?: string;
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
  // Listening (Shruti) & Quiz & Memory
  audioPlayed?: string;
  revealText?: string;
  memorizeItems?: string[];
  memorizeSeconds?: number;
  question?: string;
  options?: string[];
  correctIndex?: number;
  // Match the pairs
  matchPrompt?: string;
  pairs?: { left: string; right: string }[];
  // Tap in Order / Sequence Recital
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

export interface PhonemeEntry {
  devanagari: string;
  iast: string;
  ipaHint: string;
  category: 'vowel' | 'anusvara_visarga' | 'stop' | 'semivowel' | 'sibilant';
  articulation: 'Kantha (Throat)' | 'Taalu (Palate)' | 'Moordhaa (Roof)' | 'Danta (Teeth)' | 'Oshtha (Lips)' | 'Compound';
  voicing: string;
  deity: string;
  meaning: string;
  examples: string[];
}

export const VARNAMALA_PHONEMES: PhonemeEntry[] = [
  { devanagari: 'अ', iast: 'a', ipaHint: "uh (as in 'up')", category: 'vowel', articulation: 'Kantha (Throat)', voicing: 'Hrasva (Short Vowel)', deity: 'विष्णु (Vishnu) — Preserver', meaning: 'Beginning, Creation, Knowledge / आदि, सृष्टि, ज्ञान', examples: ['अमृत (Amrit) — Nectar', 'अग्नि (Agni) — Fire', 'अर्थ (Arth) — Meaning'] },
  { devanagari: 'आ', iast: 'ā', ipaHint: "aa (as in 'father')", category: 'vowel', articulation: 'Kantha (Throat)', voicing: 'Deergha (Long Vowel)', deity: 'सरस्वती (Saraswati) — Wisdom', meaning: 'Expansion, Abundance / विस्तार, प्रचुरता', examples: ['आत्मा (Aatmaa) — Soul', 'आकाश (Aakaash) — Sky', 'आनन्द (Aanand) — Bliss'] },
  { devanagari: 'इ', iast: 'i', ipaHint: "i (as in 'it')", category: 'vowel', articulation: 'Taalu (Palate)', voicing: 'Hrasva (Short Vowel)', deity: 'कामदेव (Kaamadeva) — God of Love', meaning: 'Love, Desire / प्रेम, इच्छा', examples: ['इन्द्र (Indra) — King of Gods', 'इच्छा (Icchaa) — Desire'] },
  { devanagari: 'ई', iast: 'ī', ipaHint: "ee (as in 'see')", category: 'vowel', articulation: 'Taalu (Palate)', voicing: 'Deergha (Long Vowel)', deity: 'लक्ष्मी (Lakshmi) — Prosperity', meaning: 'Joy, Prosperity / आनन्द, समृद्धि', examples: ['ईश्वर (Eeshvar) — God', 'ईर्ष्या (Eershyaa) — Jealousy'] },
  { devanagari: 'उ', iast: 'u', ipaHint: "u (as in 'put')", category: 'vowel', articulation: 'Oshtha (Lips)', voicing: 'Hrasva (Short Vowel)', deity: 'शिव (Shiva) — Transformer', meaning: 'Protection, Transformation / रक्षा, परिवर्तन', examples: ['उमा (Umaa) — Parvati', 'उपनिषद् (Upanishad) — Sacred text'] },
  { devanagari: 'ऊ', iast: 'ū', ipaHint: "oo (as in 'pool')", category: 'vowel', articulation: 'Oshtha (Lips)', voicing: 'Deergha (Long Vowel)', deity: 'पार्वती (Parvati) — Divine Mother', meaning: 'Energy, Strength / ऊर्जा, शक्ति', examples: ['ऊर्जा (Oorjaa) — Energy', 'ऊर्ध्व (Oordhva) — Upward'] },
  { devanagari: 'ऋ', iast: 'ṛ', ipaHint: 'ri (tongue curls back to roof)', category: 'vowel', articulation: 'Moordhaa (Roof)', voicing: 'Retroflex Vowel', deity: 'ऋत (Rita) — Cosmic Law', meaning: 'Cosmic Truth / ब्रह्माण्डीय सत्य', examples: ['ऋषि (Rishi) — Sage', 'ऋग्वेद (Rigveda) — Oldest Veda', 'ऋतु (Ritu) — Season'] },
  { devanagari: 'ए', iast: 'e', ipaHint: "e (as in 'hey')", category: 'vowel', articulation: 'Compound', voicing: 'Guna (अ + इ · Throat+Palate)', deity: 'वायु (Vaayu) — Wind & Movement', meaning: 'Seeking, Calling / खोज, पुकार', examples: ['एक (Eka) — One', 'एव (Eva) — Only/Indeed'] },
  { devanagari: 'ऐ', iast: 'ai', ipaHint: "ai (as in 'aisle')", category: 'vowel', articulation: 'Compound', voicing: 'Vriddhi (अ + ए · Throat+Palate)', deity: 'अग्नि (Agni) — Sacred Fire', meaning: 'Exalted, Supreme / उत्कृष्ट, परम', examples: ['ऐश्वर्य (Aishvarya) — Prosperity', 'ऐक्य (Aikya) — Unity'] },
  { devanagari: 'ओ', iast: 'o', ipaHint: "o (as in 'go')", category: 'vowel', articulation: 'Compound', voicing: 'Guna (अ + उ · Throat+Lips)', deity: 'ब्रह्म (Brahman) — Absolute Reality', meaning: 'Sacred OM, Devotion / पवित्र ॐ, भक्ति', examples: ['ओम् (Om) — Sacred syllable', 'ओजस् (Ojas) — Vitality'] },
  { devanagari: 'औ', iast: 'au', ipaHint: "au (as in 'how')", category: 'vowel', articulation: 'Compound', voicing: 'Vriddhi (अ + ओ · Throat+Lips)', deity: 'दुर्गा (Durga) — Goddess of Power', meaning: 'Power, Grandeur / शक्ति, वैभव', examples: ['औषधि (Aushadhi) — Medicine', 'औदार्य (Audaarya) — Greatness'] },
  { devanagari: 'अं', iast: 'aṃ', ipaHint: 'Anusvara — nasal m resonance', category: 'anusvara_visarga', articulation: 'Compound', voicing: 'Anusvara (Nasal)', deity: 'अनुस्वार — Resonance', meaning: 'Pure nasal closure at syllable end', examples: ['संस्कृतम् (Sanskritam) — Refined'] },
  { devanagari: 'अः', iast: 'aḥ', ipaHint: 'Visarga — breathy h release', category: 'anusvara_visarga', articulation: 'Kantha (Throat)', voicing: 'Visarga (Aspirate)', deity: 'विसर्ग — Prana Release', meaning: 'Echoing breath release at word end', examples: ['रामः (Raamah) — Rama', 'शान्तिः (Shaantih) — Peace'] },
  // Ka-varga
  { devanagari: 'क', iast: 'ka', ipaHint: "ka (as in 'cup')", category: 'stop', articulation: 'Kantha (Throat)', voicing: 'Unvoiced Unaspirated (अघोष अल्पप्राण)', deity: 'ब्रह्मा (Brahma) — Creator', meaning: 'Creation, Doer / सृष्टि, कर्ता', examples: ['कमल (Kamal) — Lotus', 'कृष्ण (Krishna) — Krishna'] },
  { devanagari: 'ख', iast: 'kha', ipaHint: 'kha (k + strong breath)', category: 'stop', articulation: 'Kantha (Throat)', voicing: 'Unvoiced Aspirated (अघोष महाप्राण)', deity: 'वरुण (Varuna) — Cosmic Sky', meaning: 'Sky, Space, Openness / आकाश', examples: ['खग (Khaga) — Bird', 'खेल (Khel) — Play'] },
  { devanagari: 'ग', iast: 'ga', ipaHint: "ga (as in 'go')", category: 'stop', articulation: 'Kantha (Throat)', voicing: 'Voiced Unaspirated (घोष अल्पप्राण)', deity: 'गणेश (Ganesha) — Lord of Categories', meaning: 'Movement, Going / गमन, गति', examples: ['गज (Gaja) — Elephant', 'गृह (Griha) — Home'] },
  { devanagari: 'घ', iast: 'gha', ipaHint: 'gha (g + deep breath)', category: 'stop', articulation: 'Kantha (Throat)', voicing: 'Voiced Aspirated (घोष महाप्राण)', deity: 'रुद्र (Rudra) — Thundercloud', meaning: 'Density, Vessel / घट, घन', examples: ['घट (Ghata) — Pot', 'घर (Ghar) — House'] },
  { devanagari: 'ङ', iast: 'ṅa', ipaHint: "nga (as in 'sing')", category: 'stop', articulation: 'Kantha (Throat)', voicing: 'Nasal (अनुनासिक)', deity: 'आकाश (Aakaasha) — Throat Nasal', meaning: 'Velar nasal resonance', examples: ['गङ्गा (Gangaa) — Ganges'] },
  // Cha-varga
  { devanagari: 'च', iast: 'ca', ipaHint: "cha (as in 'church')", category: 'stop', articulation: 'Taalu (Palate)', voicing: 'Unvoiced Unaspirated (अघोष अल्पप्राण)', deity: 'चन्द्र (Chandra) — Moon Deity', meaning: 'Moon, Movement / चन्द्र, चलन', examples: ['चन्द्र (Chandra) — Moon', 'चक्र (Chakra) — Wheel'] },
  { devanagari: 'छ', iast: 'cha', ipaHint: 'chha (ch + breath)', category: 'stop', articulation: 'Taalu (Palate)', voicing: 'Unvoiced Aspirated (अघोष महाप्राण)', deity: 'छाया (Chhaayaa) — Radiance & Shade', meaning: 'Canopy, Shelter / छाया, छत्र', examples: ['छाया (Chhaayaa) — Shadow', 'छात्र (Chhaatra) — Student'] },
  { devanagari: 'ज', iast: 'ja', ipaHint: "ja (as in 'just')", category: 'stop', articulation: 'Taalu (Palate)', voicing: 'Voiced Unaspirated (घोष अल्पप्राण)', deity: 'जगन्नाथ (Jagannatha) — Lord of World', meaning: 'Water, Life, Birth / जल, जीवन, जन्म', examples: ['जल (Jala) — Water', 'जगत् (Jagat) — World'] },
  { devanagari: 'झ', iast: 'jha', ipaHint: 'jha (j + breath)', category: 'stop', articulation: 'Taalu (Palate)', voicing: 'Voiced Aspirated (घोष महाप्राण)', deity: 'मरुत् (Marut) — Storm Cascade', meaning: 'Waterfall, Tempest / झरना', examples: ['झष (Jhasha) — Fish'] },
  { devanagari: 'ञ', iast: 'ña', ipaHint: "nya (as in 'canyon')", category: 'stop', articulation: 'Taalu (Palate)', voicing: 'Nasal (अनुनासिक)', deity: 'ज्ञान (Jnaana) — Palatal Nasal', meaning: 'Wisdom nexus', examples: ['प्रज्ञा (Prajnaa) — Wisdom', 'यज्ञ (Yajna) — Sacrifice'] },
  // Ta-varga (Retroflex)
  { devanagari: 'ट', iast: 'ṭa', ipaHint: 'Ta (hard, tongue curled to roof)', category: 'stop', articulation: 'Moordhaa (Roof)', voicing: 'Unvoiced Unaspirated (अघोष अल्पप्राण)', deity: 'इन्द्र (Indra) — Wielder of Vajra', meaning: 'Strength, Sharpness / बल, तीक्ष्णता', examples: ['टीका (Teekaa) — Commentary', 'टंकार (Tankaara) — Bowstring twang'] },
  { devanagari: 'ठ', iast: 'ṭha', ipaHint: 'Tha (retroflex T + breath)', category: 'stop', articulation: 'Moordhaa (Roof)', voicing: 'Unvoiced Aspirated (अघोष महाप्राण)', deity: 'मूर्धन्य — Firmness', meaning: 'Solidity, Imprint', examples: ['ठाकुर (Thaakura) — Deity/Lord'] },
  { devanagari: 'ड', iast: 'ḍa', ipaHint: 'Da (hard D, tongue curled)', category: 'stop', articulation: 'Moordhaa (Roof)', voicing: 'Voiced Unaspirated (घोष अल्पप्राण)', deity: 'डमरु (Damaru) — Shiva Drum', meaning: 'Cosmic Beat / डमरु नाद', examples: ['डमरु (Damaru) — Shiva drum'] },
  { devanagari: 'ढ', iast: 'ḍha', ipaHint: 'Dha (retroflex D + breath)', category: 'stop', articulation: 'Moordhaa (Roof)', voicing: 'Voiced Aspirated (घोष महाप्राण)', deity: 'ढक्का (Dhakkaa) — Deep Drum', meaning: 'Shield, Resonance', examples: ['दृढ (Dridha) — Firm/Steadfast'] },
  { devanagari: 'ण', iast: 'ṇa', ipaHint: 'Na (retroflex nasal N)', category: 'stop', articulation: 'Moordhaa (Roof)', voicing: 'Nasal (अनुनासिक)', deity: 'प्राण (Praana) — Life Force', meaning: 'Retroflex nasal harmony (Ṇatva)', examples: ['प्राण (Praana) — Breath', 'रामायण (Raamaayana) — Epic'] },
  // ta-varga (Dental)
  { devanagari: 'त', iast: 'ta', ipaHint: 'ta (soft, tongue at upper teeth)', category: 'stop', articulation: 'Danta (Teeth)', voicing: 'Unvoiced Unaspirated (अघोष अल्पप्राण)', deity: 'सत्य (Satya) — Truth Personified', meaning: 'Truth, That, Element / सत्य, तत्, तत्त्व', examples: ['तत्त्व (Tattva) — Essence', 'तारा (Taaraa) — Star'] },
  { devanagari: 'थ', iast: 'tha', ipaHint: 'tha (soft dental t + breath)', category: 'stop', articulation: 'Danta (Teeth)', voicing: 'Unvoiced Aspirated (अघोष महाप्राण)', deity: 'पथ (Patha) — Sacred Way', meaning: 'Path, Chariot / पथ, रथ', examples: ['रथ (Ratha) — Chariot', 'कथा (Kathaa) — Story'] },
  { devanagari: 'द', iast: 'da', ipaHint: "da (soft, like 'this')", category: 'stop', articulation: 'Danta (Teeth)', voicing: 'Voiced Unaspirated (घोष अल्पप्राण)', deity: 'देव (Deva) — Shining Givers', meaning: 'Giving, Granting / दान, दया', examples: ['दान (Daan) — Charity', 'देव (Deva) — God'] },
  { devanagari: 'ध', iast: 'dha', ipaHint: 'dha (soft dental d + breath)', category: 'stop', articulation: 'Danta (Teeth)', voicing: 'Voiced Aspirated (घोष महाप्राण)', deity: 'धर्म (Dharma) — Cosmic Order', meaning: 'Holding, Righteousness / धर्म, ध्यान', examples: ['धर्म (Dharma) — Duty', 'ध्यान (Dhyaana) — Meditation'] },
  { devanagari: 'न', iast: 'na', ipaHint: 'na (dental nasal)', category: 'stop', articulation: 'Danta (Teeth)', voicing: 'Nasal (अनुनासिक)', deity: 'नदी (Nadee) — Flowing River', meaning: 'Bowing, Humility / नमस्ते', examples: ['नमस्ते (Namaste) — Bowing to you', 'नदी (Nadee) — River'] },
  // pa-varga (Labial)
  { devanagari: 'प', iast: 'pa', ipaHint: "pa (as in 'pun')", category: 'stop', articulation: 'Oshtha (Lips)', voicing: 'Unvoiced Unaspirated (अघोष अल्पप्राण)', deity: 'पवन (Pavana) — Bringer of Breath', meaning: 'Holding, Protection / पाल, पान', examples: ['पुस्तक (Pustak) — Book', 'प्राण (Praana) — Life-breath'] },
  { devanagari: 'फ', iast: 'pha', ipaHint: 'pha (p + puff of air)', category: 'stop', articulation: 'Oshtha (Lips)', voicing: 'Unvoiced Aspirated (अघोष महाप्राण)', deity: 'फल (Phala) — Ripened Fruit', meaning: 'Fruition, Blossom / फल, पुष्प', examples: ['फल (Phala) — Fruit'] },
  { devanagari: 'ब', iast: 'ba', ipaHint: "ba (as in 'bud')", category: 'stop', articulation: 'Oshtha (Lips)', voicing: 'Voiced Unaspirated (घोष अल्पप्राण)', deity: 'बल (Bala) — Strength & Wisdom', meaning: 'Strength, Intelligence / बल, बुद्धि', examples: ['बालक (Baalaka) — Boy', 'बुद्धि (Buddhi) — Intellect'] },
  { devanagari: 'भ', iast: 'bha', ipaHint: 'bha (b + deep breath)', category: 'stop', articulation: 'Oshtha (Lips)', voicing: 'Voiced Aspirated (घोष महाप्राण)', deity: 'भगवत् (Bhagavat) — Radiant Lord', meaning: 'Light, Devotion, Being / भा, भक्ति, भू', examples: ['भक्ति (Bhakti) — Devotion', 'भारत (Bhaarata) — Land of Light'] },
  { devanagari: 'म', iast: 'ma', ipaHint: "ma (as in 'mother')", category: 'stop', articulation: 'Oshtha (Lips)', voicing: 'Nasal (अनुनासिक)', deity: 'आदिशक्ति / माँ (Divine Mother)', meaning: 'Mother, Mind, Measure / माता, मन, मात्रा', examples: ['माता (Maataa) — Mother', 'मन (Man) — Mind'] },
  // Semi-vowels (Antahstha)
  { devanagari: 'य', iast: 'ya', ipaHint: "ya (as in 'yes')", category: 'semivowel', articulation: 'Taalu (Palate)', voicing: 'Antahstha (Semi-vowel · Air/वायु)', deity: 'वायु (Vaayu) — Joining Force', meaning: 'Union, Air, Joining / योग, वायु', examples: ['योग (Yoga) — Union', 'यज्ञ (Yajna) — Sacrifice'] },
  { devanagari: 'र', iast: 'ra', ipaHint: 'ra (rolled/tapped at roof)', category: 'semivowel', articulation: 'Moordhaa (Roof)', voicing: 'Antahstha (Semi-vowel · Fire/अग्नि)', deity: 'अग्नि (Agni) — God of Fire', meaning: 'Fire, Movement, Brilliance / अग्नि, गति', examples: ['राम (Raama) — Lord Rama', 'रवि (Ravi) — Sun'] },
  { devanagari: 'ल', iast: 'la', ipaHint: "la (dental liquid 'l')", category: 'semivowel', articulation: 'Danta (Teeth)', voicing: 'Antahstha (Semi-vowel · Earth/पृथ्वी)', deity: 'पृथ्वी (Prithvee) — Earth', meaning: 'Earth, Stability, Rhythm / लोक, लय', examples: ['लोक (Loka) — World', 'कमल (Kamala) — Lotus'] },
  { devanagari: 'व', iast: 'va', ipaHint: 'va (labio-dental glide)', category: 'semivowel', articulation: 'Oshtha (Lips)', voicing: 'Antahstha (Semi-vowel · Water/जल)', deity: 'वरुण (Varuna) — Waters', meaning: 'Water, Speech, Knowledge / विद्या, वाणी', examples: ['विद्या (Vidyaa) — Knowledge', 'वन (Vana) — Forest'] },
  // Sibilants & Aspirate (Ushma)
  { devanagari: 'श', iast: 'śa', ipaHint: "sha (palatal, as in 'ship')", category: 'sibilant', articulation: 'Taalu (Palate)', voicing: 'Ushma Sibilant (ऊष्म · Palate)', deity: 'शिव (Shiva) — The Auspicious One', meaning: 'Peace, Auspiciousness / शान्ति, शुभ', examples: ['शान्ति (Shaanti) — Peace', 'शक्ति (Shakti) — Power'] },
  { devanagari: 'ष', iast: 'ṣa', ipaHint: 'sha (retroflex, tongue curled to roof)', category: 'sibilant', articulation: 'Moordhaa (Roof)', voicing: 'Ushma Sibilant (ऊष्म · Roof)', deity: 'षडानन / सूर्य — Solar Precision', meaning: 'Sixfold Order, Wisdom / ऋषि, पुरुष', examples: ['पुरुष (Purusha) — Cosmic Person', 'ओषधि (Oshadhi) — Healing Herb'] },
  { devanagari: 'स', iast: 'sa', ipaHint: "sa (dental, as in 'sun')", category: 'sibilant', articulation: 'Danta (Teeth)', voicing: 'Ushma Sibilant (ऊष्म · Teeth)', deity: 'सरस्वती (Saraswati) — Goddess of Truth', meaning: 'Truth, Together, Being / सत्य, सह, सत्', examples: ['सत्य (Satya) — Truth', 'सूर्य (Soorya) — Sun'] },
  { devanagari: 'ह', iast: 'ha', ipaHint: "ha (voiced throat breath, 'hello')", category: 'sibilant', articulation: 'Kantha (Throat)', voicing: 'Ushma Aspirate (ऊष्म · Throat)', deity: 'हरि (Hari) — Remover of Sorrow', meaning: 'Space, Breath, Ether / आकाश, प्राण', examples: ['हरि (Hari) — Vishnu', 'हिमालय (Himaalaya) — Himalayas'] },
];

export interface MaheshvaraSutra {
  number: number;
  devanagari: string;
  iast: string;
  letters: string[];
  itMarker: string;
  classDescription: string;
}

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
  sutraSpan: [number, number];
  meaning: string;
  famousSutra: string;
}

export const PRATYAHARA_PRESETS: PratyaharaPreset[] = [
  { code: 'अच्', iast: 'ac', startLetter: 'अ', endMarker: 'च्', sutraSpan: [1, 4], meaning: 'All Vowels (अ इ उ ऋ ऌ ए ओ ऐ औ)', famousSutra: 'इको यणचि (6.1.77) — before any vowel (अच्)' },
  { code: 'हल्', iast: 'hal', startLetter: 'ह', endMarker: 'ल्', sutraSpan: [5, 14], meaning: 'All Consonants (from ह in Sutra 5 to ल् in Sutra 14)', famousSutra: 'हलन्त्यम् (1.3.3) — final consonant is an it-marker' },
  { code: 'इक्', iast: 'ik', startLetter: 'इ', endMarker: 'क्', sutraSpan: [1, 2], meaning: 'Simple non-a vowels (इ उ ऋ ऌ)', famousSutra: 'इको गुणवृद्धी (1.1.3) — इक् takes guṇa and vṛddhi' },
  { code: 'यण्', iast: 'yaṇ', startLetter: 'य', endMarker: 'ण्', sutraSpan: [5, 6], meaning: 'All 4 Semi-vowels (य व र ल)', famousSutra: 'इको यणचि (6.1.77) — इक् becomes यण् before अच्' },
  { code: 'अल्', iast: 'al', startLetter: 'अ', endMarker: 'ल्', sutraSpan: [1, 14], meaning: 'All Phonemes — the entire Sanskrit alphabet', famousSutra: 'अलोऽन्त्यस्य (1.1.52) — substitution applies to final phoneme' },
  { code: 'एङ्', iast: 'eṅ', startLetter: 'ए', endMarker: 'ङ्', sutraSpan: [3, 3], meaning: 'Guṇa vowels (ए ओ)', famousSutra: 'अदेङ् गुणः (1.1.2) — अ, ए, ओ are called Guṇa' },
  { code: 'ऐच्', iast: 'aic', startLetter: 'ऐ', endMarker: 'च्', sutraSpan: [4, 4], meaning: 'Vṛddhi diphthongs (ऐ औ)', famousSutra: 'वृद्धिरादैच् (1.1.1) — आ, ऐ, औ are called Vṛddhi' },
  { code: 'जश्', iast: 'jaś', startLetter: 'ज', endMarker: 'श्', sutraSpan: [10, 10], meaning: 'Voiced unaspirated stops (ज ब ग ड द)', famousSutra: 'झलां जशोऽन्ते (8.2.39) — word-final stops voice to जश्' },
  { code: 'झल्', iast: 'jhal', startLetter: 'झ', endMarker: 'ल्', sutraSpan: [8, 14], meaning: 'All stops + sibilants (excludes nasals & semi-vowels)', famousSutra: 'झलां जश् झशि (8.4.53) — voicing assimilation' },
  { code: 'शर्', iast: 'śar', startLetter: 'श', endMarker: 'र्', sutraSpan: [13, 13], meaning: 'All 3 Sibilants (श ष स)', famousSutra: 'खरि च (8.4.55) — devoicing before voiceless obstruents' },
];

import { COMPLETE_17_CHAPTERS, DASHAGANI_VERB_CLASSES, DhatuGanaClass } from './expandedChaptersData';
export { DASHAGANI_VERB_CLASSES };
export type { DhatuGanaClass };

const INITIAL_CHAPTERS: CurriculumChapter[] = [
  {
    id: 'ch-1',
    number: 1,
    title: 'Vowels',
    sanskritTitle: 'स्वर',
    subtitle: '14 vowels — the soul of Sanskrit / स्वर — संस्कृत की आत्मा',
    units: [
      {
        id: 'unit-1',
        number: 1,
        title: 'अ & आ (a & aa)',
        subtitle: 'Vishnu & Saraswati — Origin & Expansion',
        pageStart: 4,
        lessons: [
          {
            id: 'lesson-1-1',
            number: '1.1',
            title: 'अ (a) — The First Sound',
            subtitle: 'Vishnu / विष्णु — origin of all / सृष्टि का आदि',
            exercises: [
              {
                id: 'ex-1-1-1',
                type: 'meditation',
                title: 'EXERCISE 1 · MEDITATION (ध्यान)',
                durationSeconds: 6,
                sanskritPrompt: 'ध्यान (Dhyaan) — Prepare Your Mind / मन तैयार करें',
                hindiPrompt: 'प्राचीन गुरुकुल में हर पाठ ध्यान से आरम्भ होता था। शान्त मन, स्थिर सरोवर की भाँति, पूर्ण रूप से अवशोषित करता है।',
                englishPrompt: 'Take 3 deep breaths. In the ancient Gurukul, every lesson began with meditation. A still mind absorbs like a still lake reflects perfectly.',
              },
              {
                id: 'ex-1-1-2',
                type: 'letter_card',
                title: 'EXERCISE 2 · LETTER CARD',
                letter: 'अ',
                transliteration: 'a',
                pronunciationGuide: "uh (as in 'up')",
                hindiExample: "जैसे 'अब' में",
                meaning: 'Beginning, Creation, Knowledge / आदि, सृष्टि, ज्ञान',
                lore: 'Every Sanskrit consonant secretly carries अ — it is the inherent vowel, the seed of all speech. Every word begins from it.',
                deity: 'विष्णु (Vishnu) — Preserver / पालनकर्ता',
                deityLore: 'In the Gita (10.33), Krishna says "अक्षराणाम् अकारोऽस्मि" — "Among letters, I am अ". Just as Vishnu pervades all existence, अ pervades all language.',
                articulationPoint: 'Throat / कण्ठ (Kantha) — deepest point',
                articulationDetail: 'Produced from the deepest part of the vocal tract with the tongue at rest. This is why it is the most natural and primordial human sound.',
                exampleWords: [
                  { sanskrit: 'अमृत', translit: 'Amrit', meaning: 'Nectar' },
                  { sanskrit: 'अग्नि', translit: 'Agni', meaning: 'Fire' },
                  { sanskrit: 'अर्थ', translit: 'Arth', meaning: 'Meaning' },
                ],
              },
              {
                id: 'ex-1-1-3',
                type: 'listening',
                title: 'EXERCISE 3 · LISTENING (श्रुति)',
                audioPlayed: 'अ',
                revealText: "अ (a) is the FIRST and MOST SACRED letter! संस्कृत का प्रथम और सबसे पवित्र अक्षर! Krishna says in Gita: 'अक्षराणाम् अकारोऽस्मि' = Among letters, I am अ",
                question: 'अ (a) represents which deity?',
                options: ['शिव (Shiva)', 'विष्णु (Vishnu)', 'ब्रह्मा (Brahma)', 'इन्द्र (Indra)'],
                correctIndex: 1,
              },
              {
                id: 'ex-1-1-4',
                type: 'quiz',
                title: 'EXERCISE 4 · QUIZ — MULTIPLE CHOICE',
                audioPlayed: 'अ',
                question: 'Where is अ (a) produced? / अ कहाँ बनता है?',
                options: ['Lips / ओष्ठ', 'Teeth / दन्त', 'Palate / तालु', 'Throat / कण्ठ'],
                correctIndex: 3,
              },
              {
                id: 'ex-1-1-5',
                type: 'memory',
                title: 'EXERCISE 5 · MEMORY QUIZ (स्मृति)',
                memorizeSeconds: 7,
                memorizeItems: [
                  'अ (a) = विष्णु (Vishnu)',
                  'Articulation = Throat / कण्ठ',
                  'Meaning = Beginning / आदि',
                  'Gita 10.33 = अक्षराणाम् अकारोऽस्मि',
                ],
                question: 'अ (a) means?',
                options: ['End / अन्त', 'Love / प्रेम', 'Beginning / आदि', 'Fire / अग्नि'],
                correctIndex: 2,
              },
            ],
          },
          {
            id: 'lesson-1-2',
            number: '1.2',
            title: 'आ (aa) — Expansion',
            subtitle: 'Saraswati / सरस्वती — wisdom / ज्ञान',
            exercises: [
              {
                id: 'ex-1-2-1',
                type: 'letter_card',
                title: 'EXERCISE 1 · LETTER CARD',
                letter: 'आ',
                transliteration: 'ā',
                pronunciationGuide: "aa (as in 'father')",
                hindiExample: "जैसे 'आम' में",
                meaning: 'Expansion, Abundance / विस्तार, प्रचुरता',
                lore: 'आ is the long form of अ — the seed sound stretched into fullness. Words like आत्मा (soul) and आकाश (sky) carry this sense of unfolding vastness.',
                deity: 'सरस्वती (Saraswati) — Goddess of Knowledge / विद्या की देवी',
                deityLore: 'Saraswati flows like a river — knowledge that expands and nourishes. आ embodies that flowing, ever-widening quality of true understanding.',
                articulationPoint: 'Throat / कण्ठ — held 2× longer than अ',
                articulationDetail: 'Same articulation point as अ but sustained twice as long. In Sanskrit, vowel length is a real distinction — दीर्घ (long) carries more weight than ह्रस्व (short).',
                exampleWords: [
                  { sanskrit: 'आत्मा', translit: 'Aatmaa', meaning: 'Soul' },
                  { sanskrit: 'आकाश', translit: 'Aakaash', meaning: 'Sky' },
                  { sanskrit: 'आनन्द', translit: 'Aanand', meaning: 'Bliss' },
                ],
              },
              {
                id: 'ex-1-2-2',
                type: 'quiz',
                title: 'EXERCISE 2 · QUIZ — MULTIPLE CHOICE',
                audioPlayed: 'आ',
                question: 'आ (aa) is the ___ form of अ (a):',
                options: ['Short / ह्रस्व', 'Long / दीर्घ', 'Nasal / अनुनासिक', 'Combined / संयुक्त'],
                correctIndex: 1,
              },
              {
                id: 'ex-1-2-3',
                type: 'match',
                title: 'EXERCISE 3 · MATCH THE PAIRS',
                matchPrompt: 'Match आ words to their English meanings:',
                pairs: [
                  { left: 'आत्मा (Aatmaa)', right: 'Soul' },
                  { left: 'आकाश (Aakaash)', right: 'Sky' },
                  { left: 'आनन्द (Aanand)', right: 'Bliss' },
                  { left: 'आचार्य (Aachaarya)', right: 'Teacher' },
                ],
              },
              {
                id: 'ex-1-2-4',
                type: 'quiz',
                title: 'EXERCISE 4 · LISTEN & PICK',
                audioPlayed: 'आत्मा',
                question: "Which word means 'Soul'?",
                options: ['आकाश (Aakaash) = Sky', 'आत्मा (Aatmaa) = Soul', 'आनन्द (Aanand) = Bliss', 'आचार्य (Aachaarya) = Teacher'],
                correctIndex: 1,
              },
              {
                id: 'ex-1-2-5',
                type: 'quiz',
                title: 'EXERCISE 5 · SEQUENCE RECITAL (क्रम)',
                question: 'Pattern: Short → Long (ह्रस्व → दीर्घ). Which pair matches?',
                options: ['अ → आ (a → aa)', 'इ → उ (i → u)', 'ए → ओ (e → o)', 'क → ख (ka → kha)'],
                correctIndex: 0,
              },
            ],
          },
        ],
      },
      {
        id: 'unit-2',
        number: 2,
        title: 'इ ई उ ऊ (i ee u oo)',
        subtitle: 'Love & Power / प्रेम एवं शक्ति',
        pageStart: 6,
        lessons: [
          {
            id: 'lesson-1-3',
            number: '1.3',
            title: 'इ & ई — Love & Joy',
            subtitle: 'Kamadeva & Lakshmi / कामदेव एवं लक्ष्मी',
            exercises: [
              {
                id: 'ex-1-3-1',
                type: 'letter_card',
                title: 'EXERCISE 1 · LETTER CARD',
                letter: 'इ',
                transliteration: 'i',
                pronunciationGuide: "i (as in 'it')",
                hindiExample: "जैसे 'इधर' में",
                meaning: 'Love, Desire / प्रेम, इच्छा',
                lore: 'इ is the bright sound of yearning — found in words like इच्छा (desire) and इष्ट (beloved). The tongue rises eagerly toward the palate.',
                deity: 'कामदेव (Kaamadeva) — God of Love',
                deityLore: 'Kaamadeva, the divine archer of love, governs all longing and desire. The forward-reaching motion of इ mirrors his arrows.',
                articulationPoint: 'Palate / तालु (Taalu)',
                articulationDetail: 'Produced when the front of the tongue rises close to the hard palate.',
                exampleWords: [
                  { sanskrit: 'इन्द्र', translit: 'Indra', meaning: 'King of Gods' },
                  { sanskrit: 'इच्छा', translit: 'Icchaa', meaning: 'Desire' },
                ],
              },
              {
                id: 'ex-1-3-2',
                type: 'letter_card',
                title: 'EXERCISE 2 · LETTER CARD',
                letter: 'ई',
                transliteration: 'ī',
                pronunciationGuide: "ee (as in 'see')",
                hindiExample: "जैसे 'ईश्वर' में",
                meaning: 'Joy, Prosperity / आनन्द, समृद्धि',
                lore: 'ई is इ stretched into stable abundance. Words like ईश्वर (Lord) and ईशा (ruler) hold this sustained, confident brilliance.',
                deity: 'लक्ष्मी (Lakshmi) — Goddess of Wealth',
                deityLore: 'Lakshmi represents wealth that endures — material and spiritual.',
                articulationPoint: 'Palate / तालु — held 2× longer',
                articulationDetail: 'Same palatal position as इ but held with steady duration.',
                exampleWords: [
                  { sanskrit: 'ईश्वर', translit: 'Eeshvar', meaning: 'God / Lord' },
                  { sanskrit: 'ईर्ष्या', translit: 'Eershyaa', meaning: 'Jealousy' },
                ],
              },
              {
                id: 'ex-1-3-3',
                type: 'quiz',
                title: 'EXERCISE 3 · QUIZ — MULTIPLE CHOICE',
                audioPlayed: 'इ',
                question: 'इ (i) is produced at which articulation point?',
                options: ['Throat / कण्ठ', 'Palate / तालु', 'Teeth / दन्त', 'Lips / ओष्ठ'],
                correctIndex: 1,
              },
              {
                id: 'ex-1-3-4',
                type: 'order',
                title: 'EXERCISE 5 · TAP IN ORDER',
                orderPrompt: 'Arrange the first four Sanskrit vowels in canonical order:',
                orderItems: ['अ (a)', 'आ (aa)', 'इ (i)', 'ई (ee)'],
              },
            ],
          },
          {
            id: 'lesson-1-4',
            number: '1.4',
            title: 'उ & ऊ — Power & Energy',
            subtitle: 'Shiva & Parvati / शिव एवं पार्वती',
            exercises: [
              {
                id: 'ex-1-4-1',
                type: 'meditation',
                title: 'EXERCISE 1 · MEDITATION (ध्यान)',
                durationSeconds: 5,
                sanskritPrompt: 'Round your lips / होंठ गोल करें',
                hindiPrompt: 'कण्ठ के अ से ओष्ठ के उ तक का अन्तर अनुभव करें।',
                englishPrompt: 'The vowels उ (u) and ऊ (oo) need rounded lips. Feel the physical shift from throat अ (a) to lips उ (u).',
              },
              {
                id: 'ex-1-4-2',
                type: 'letter_card',
                title: 'EXERCISE 2 · LETTER CARD',
                letter: 'उ',
                transliteration: 'u',
                pronunciationGuide: "u (as in 'put')",
                hindiExample: "जैसे 'उल्लू' में",
                meaning: 'Protection, Transformation / रक्षा, परिवर्तन',
                lore: 'उ is the second letter of the sacred ॐ (a-u-m). It represents the dynamic, transformative middle.',
                deity: 'शिव (Shiva) — Transformer',
                deityLore: 'Shiva transforms what no longer serves into the new. उ carries this rounded, gathering force.',
                articulationPoint: 'Lips / ओष्ठ (Oshtha) — rounded',
                articulationDetail: 'Made by rounding both lips while the tongue retracts to the back.',
                exampleWords: [
                  { sanskrit: 'उमा', translit: 'Umaa', meaning: 'Parvati' },
                  { sanskrit: 'उपनिषद्', translit: 'Upanishad', meaning: 'Sacred text' },
                ],
              },
              {
                id: 'ex-1-4-3',
                type: 'quiz',
                title: 'EXERCISE 4 · QUIZ — MULTIPLE CHOICE',
                audioPlayed: 'उ',
                question: 'उ (u) and ऊ (oo) are produced at:',
                options: ['Throat / कण्ठ', 'Palate / तालु', 'Teeth / दन्त', 'Lips / ओष्ठ'],
                correctIndex: 3,
              },
            ],
          },
        ],
      },
      {
        id: 'unit-3',
        number: 3,
        title: 'ऋ ए ऐ ओ औ & अं अः',
        subtitle: 'Sacred vowels, Guṇa, Vṛddhi & Prana / पवित्र स्वर एवं संयुक्त',
        pageStart: 9,
        lessons: [
          {
            id: 'lesson-1-5',
            number: '1.5',
            title: 'ऋ — Cosmic Truth & ए ऐ ओ औ Compound Vowels',
            subtitle: 'Rita, Guna & Vriddhi / ऋत, गुण एवं वृद्धि',
            exercises: [
              {
                id: 'ex-1-5-1',
                type: 'letter_card',
                title: 'EXERCISE 1 · LETTER CARD',
                letter: 'ऋ',
                transliteration: 'ṛ',
                pronunciationGuide: 'ri (tongue curls back!)',
                hindiExample: 'जीभ पीछे मुड़ती है!',
                meaning: 'Cosmic Truth / ब्रह्माण्डीय सत्य',
                lore: 'ऋ is a vowel that behaves like a consonant — utterly unique. It begins words like ऋषि (sage), ऋत (cosmic order), and ऋतु (season).',
                deity: 'ऋत (Rita) — The Cosmic Law',
                deityLore: 'Rita is the ancient Vedic principle that governs the order of nature — sunrise, seasons, dharma.',
                articulationPoint: 'Roof / मूर्धा (Moordhaa) — retroflex',
                articulationDetail: 'The tongue curls backward to touch the hard palate roof.',
                exampleWords: [
                  { sanskrit: 'ऋषि', translit: 'Rishi', meaning: 'Sage' },
                  { sanskrit: 'ऋग्वेद', translit: 'Rigveda', meaning: 'Oldest Veda' },
                  { sanskrit: 'ऋतु', translit: 'Ritu', meaning: 'Season' },
                ],
              },
              {
                id: 'ex-1-5-2',
                type: 'info_card',
                title: 'EXERCISE 2 · COMPOUND VOWELS (गुण & वृद्धि)',
                infoTitle: 'Compound Vowels / संयुक्त स्वर & Special Sounds (अं अः)',
                audioSample: 'ओम्',
                infoLines: [
                  'अ + इ = ए (a + i = e) → Guna (1st level · Throat+Palate)',
                  'अ + ए = ऐ (a + e = ai) → Vriddhi (2nd level · Throat+Palate)',
                  'अ + उ = ओ (a + u = o) → Guna (1st level · Throat+Lips · Heart of ॐ)',
                  'अ + ओ = औ (a + o = au) → Vriddhi (2nd level · Throat+Lips)',
                  'अं (Anusvara) = nasal "m" sound at end (e.g., संस्कृतम्)',
                  'अः (Visarga) = breathy "h" sound at end (e.g., रामः)',
                ],
              },
              {
                id: 'ex-1-5-3',
                type: 'match',
                title: 'EXERCISE 3 · MATCH GUNA & VRIDDHI',
                matchPrompt: 'Match the vowel combinations to their resulting sound & grade:',
                pairs: [
                  { left: 'अ + इ = ए', right: 'Guna (Throat + Palate)' },
                  { left: 'अ + ए = ऐ', right: 'Vriddhi (Exalted Palatal)' },
                  { left: 'अ + उ = ओ', right: 'Guna (Throat + Lips · ॐ)' },
                  { left: 'अः (Visarga)', right: 'Breathy "h" sound at end' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch-2',
    number: 2,
    title: 'Consonants',
    sanskritTitle: 'व्यञ्जन',
    subtitle: '25 stops + 8 others = scientific phonetic system / वैज्ञानिक ध्वनि प्रणाली',
    units: [
      {
        id: 'unit-4',
        number: 4,
        title: 'क-वर्ग से प-वर्ग (The 5 Vargas)',
        subtitle: '25 Stop Consonants organized by articulation & voicing',
        pageStart: 15,
        lessons: [
          {
            id: 'lesson-2-1',
            number: '2.1',
            title: 'क ख ग घ ङ — The Scientific 5×5 Matrix',
            subtitle: 'Gutturals to Labials / कण्ठ से ओष्ठ तक',
            exercises: [
              {
                id: 'ex-2-1-1',
                type: 'info_card',
                title: 'EXERCISE 1 · INFO CARD — THE 5×5 MATRIX',
                infoTitle: 'The 25 Stop Consonants follow a rigorous scientific pattern',
                audioSample: 'क ख ग घ ङ',
                infoLines: [
                  'Column 1: Unvoiced Unaspirated (अघोष अल्पप्राण) — क, च, ट, त, प',
                  'Column 2: Unvoiced Aspirated (अघोष महाप्राण) — ख, छ, ठ, थ, फ',
                  'Column 3: Voiced Unaspirated (घोष अल्पप्राण) — ग, ज, ड, द, ब',
                  'Column 4: Voiced Aspirated (घोष महाप्राण) — घ, झ, ढ, ध, भ',
                  'Column 5: Nasal (अनुनासिक) — ङ, ञ, ण, न, म',
                  'Row progression moves from back of throat to front of lips: कण्ठ → तालु → मूर्धा → दन्त → ओष्ठ',
                ],
              },
              {
                id: 'ex-2-1-2',
                type: 'order',
                title: 'EXERCISE 2 · TAP IN ORDER (THROAT TO LIPS)',
                orderPrompt: 'Order the 5 consonant vargas from deepest in the throat to the front of the lips:',
                orderItems: [
                  '1. क-वर्ग (Throat / कण्ठ)',
                  '2. च-वर्ग (Palate / तालु)',
                  '3. ट-वर्ग (Roof / मूर्धा)',
                  '4. त-वर्ग (Teeth / दन्त)',
                  '5. प-वर्ग (Lips / ओष्ठ)',
                ],
              },
              {
                id: 'ex-2-1-3',
                type: 'quiz',
                title: 'EXERCISE 3 · QUIZ — DENTAL VS RETROFLEX',
                question: 'त (ta) vs ट (Ta): what is the articulation difference?',
                options: [
                  'Same sound',
                  'त = dental (tongue at teeth), ट = retroflex (tongue curled to roof)',
                  'त = nasal, ट = voiced',
                  'No difference in Sanskrit',
                ],
                correctIndex: 1,
              },
            ],
          },
          {
            id: 'lesson-2-6',
            number: '2.6',
            title: 'य र ल व & श ष स ह — Semi-vowels & Sibilants',
            subtitle: 'Antahstha (4 Elements) & Ushma (Breath Sounds)',
            exercises: [
              {
                id: 'ex-2-6-1',
                type: 'match',
                title: 'EXERCISE 1 · MATCH SEMI-VOWELS TO ELEMENTS',
                matchPrompt: 'Match each Antahstha (semi-vowel) to its classical element & articulation:',
                pairs: [
                  { left: 'य (ya — Palate)', right: 'Air / वायु (Joining)' },
                  { left: 'र (ra — Roof)', right: 'Fire / अग्नि (Motion)' },
                  { left: 'ल (la — Teeth)', right: 'Earth / पृथ्वी (Stability)' },
                  { left: 'व (va — Lips)', right: 'Water / जल (Flow)' },
                ],
              },
              {
                id: 'ex-2-6-2',
                type: 'quiz',
                title: 'EXERCISE 2 · COMPLETE VARNAMALA QUIZ',
                question: 'Why is the 46-letter Sanskrit Varnamala considered the most scientific alphabet?',
                options: [
                  'It has many letters',
                  'Letters are systematically organized by anatomical articulation point & voicing',
                  'It is very old',
                  'It is used only in poetry',
                ],
                correctIndex: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch-3',
    number: 3,
    title: 'First Words',
    sanskritTitle: 'प्रथम शब्द',
    subtitle: 'Essential vocabulary & sentences / आवश्यक शब्द एवं वाक्य',
    units: [
      {
        id: 'unit-10',
        number: 10,
        title: 'Greetings, Pronouns, Numbers & Nature',
        subtitle: 'Units 10–14 · अभिवादन, वाक्य, संख्या, प्रकृति एवं आहार',
        pageStart: 27,
        lessons: [
          {
            id: 'lesson-3-1',
            number: '3.1',
            title: 'Greetings, Pronouns & SOV Sentences',
            subtitle: 'नमस्ते, अहम् गच्छामि, एक से दश',
            exercises: [
              {
                id: 'ex-3-1-1',
                type: 'info_card',
                title: 'EXERCISE 1 · ESSENTIAL GREETINGS & SOV STRUCTURE',
                infoTitle: 'Greetings (अभिवादन) & Subject-Object-Verb Sentences',
                audioSample: 'नमस्ते शुभ प्रभातम्',
                infoLines: [
                  'नमस्ते (Namaste) = नमः + ते = "I bow to you"',
                  'धन्यवादः (Dhanyavaadah) = Thank you · स्वागतम् (Svaagatam) = Welcome',
                  'शुभ प्रभातम् = Good morning · पुनर्मिलामः = See you again',
                  'अहम् गच्छामि (Aham gacchaami) = I go (-आमि ending for 1st person sg)',
                  'त्वम् पठसि (Tvam pathasi) = You read (-असि ending for 2nd person sg)',
                  'रामः गच्छति (Raamah gacchati) = Rama goes (-अति ending for 3rd person sg)',
                ],
              },
              {
                id: 'ex-3-1-2',
                type: 'match',
                title: 'EXERCISE 2 · MATCH PRONOUNS & VERBS',
                matchPrompt: 'Match the Sanskrit pronouns and sentences to their meanings:',
                pairs: [
                  { left: 'अहम् गच्छामि', right: 'I go' },
                  { left: 'सीता पठति', right: 'Sita reads' },
                  { left: 'ते गच्छन्ति', right: 'They go' },
                  { left: 'पुनर्मिलामः', right: 'See you again' },
                ],
              },
              {
                id: 'ex-3-1-3',
                type: 'quiz',
                title: 'EXERCISE 3 · NUMBERS & ETYMOLOGY QUIZ',
                question: '"Decimal" and "December" trace back to which Sanskrit number?',
                options: ['पञ्च (Pancha = 5)', 'सप्त (Sapta = 7)', 'अष्ट (Ashta = 8)', 'दश (Dasha = 10)'],
                correctIndex: 3,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch-4',
    number: 4,
    title: 'Grammar Foundations',
    sanskritTitle: 'व्याकरण',
    subtitle: 'Cases, Three Numbers, Verb Tenses, Sandhi & Samasa',
    units: [
      {
        id: 'unit-15',
        number: 15,
        title: 'कारक, विभक्ति, धातु, सन्धि & समास',
        subtitle: 'Units 15–18 · Declensions, Conjugations, Sound Junctions & Compounds',
        pageStart: 37,
        lessons: [
          {
            id: 'lesson-4-1',
            number: '4.1',
            title: '7 Vibhaktis, 3 Numbers (Ekavachana/Dvivachana/Bahuvachana) & Vowel Sandhi',
            subtitle: 'रामः, रामौ, रामाः & देवालय, सूर्योदय',
            exercises: [
              {
                id: 'ex-4-1-1',
                type: 'info_card',
                title: 'EXERCISE 1 · THE 7 CASES & VOWEL SANDHI',
                infoTitle: 'How Sanskrit encodes role into word endings',
                audioSample: 'रामः रामम् रामेण रामाय रामात् रामस्य रामे',
                infoLines: [
                  '1. प्रथमा (Subject): रामः · 2. द्वितीया (Object): रामम् · 3. तृतीया (By/With): रामेण',
                  '4. चतुर्थी (For): रामाय · 5. पञ्चमी (From): रामात् · 6. षष्ठी (Of): रामस्य · 7. सप्तमी (In/At): रामे',
                  'Three Numbers: रामः (1 Rama) · रामौ (Dual: exactly 2 Ramas) · रामाः (3+ Ramas)',
                  'दीर्घ सन्धि: देव + आलय = देवालय (अ + आ = आ)',
                  'गुण सन्धि: सुर + इन्द्र = सुरेन्द्र (अ + इ = ए) · सूर्य + उदय = सूर्योदय (अ + उ = ओ)',
                ],
              },
              {
                id: 'ex-4-1-2',
                type: 'match',
                title: 'EXERCISE 2 · MATCH CASES & SANDHI',
                matchPrompt: 'Match each inflected form or sandhi junction to its grammatical function:',
                pairs: [
                  { left: 'रामेण (3rd Case · तृतीया)', right: 'By / With Rama (Instrument)' },
                  { left: 'रामात् (5th Case · पञ्चमी)', right: 'From Rama (Source/Ablation)' },
                  { left: 'देव + आलय → देवालय', right: 'दीर्घ सन्धि (अ + आ = आ)' },
                  { left: 'सूर्य + उदय → सूर्योदय', right: 'गुण सन्धि (अ + उ = ओ)' },
                ],
              },
              {
                id: 'ex-4-1-3',
                type: 'quiz',
                title: 'EXERCISE 3 · PAST, PRESENT & FUTURE TENSES',
                question: 'Which form means "I will go" (Future Tense / लृट् लकार)?',
                options: ['अगच्छम् (I went)', 'गच्छामि (I go)', 'गमिष्यामि (I will go)', 'गच्छति (He goes)'],
                correctIndex: 2,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch-5',
    number: 5,
    title: 'Conversation',
    sanskritTitle: 'संवाद',
    subtitle: 'Speak Sanskrit in daily life / दैनिक जीवन में संस्कृत',
    units: [
      {
        id: 'unit-19',
        number: 19,
        title: 'Daily Phrases — Questions, Responses & Travel',
        subtitle: 'किम्, कुत्र, कदा, कथम्, किमर्थम्, आम्, अस्ति, नास्ति',
        pageStart: 44,
        lessons: [
          {
            id: 'lesson-5-1',
            number: '5.1',
            title: 'The 7 Question Words (ककारः) & Everyday Responses',
            subtitle: 'एतत् किम्? मम नाम... मह्यम् रोचते',
            exercises: [
              {
                id: 'ex-5-1-1',
                type: 'info_card',
                title: 'EXERCISE 1 · CONVERSATIONAL TOOLKIT',
                infoTitle: 'Questions & Responses for Daily Spoken Sanskrit',
                audioSample: 'एतत् किम् अस्ति मम नाम',
                infoLines: [
                  'किम् (What?) · कः/का (Who?) · कुत्र (Where?) · कदा (When?) · कथम् (How?) · किमर्थम् (Why?)',
                  'आम् (Yes) · न (No) · अस्ति (There is / exists) · नास्ति (There is not)',
                  'मम नाम ... (My name is ...) · मह्यम् रोचते (I like) · अहं जानामि (I know)',
                  'कियत् मूल्यम्? (How much is the price?) · मह्यं यच्छतु (Please give me) · पर्याप्तम् (Enough)',
                ],
              },
              {
                id: 'ex-5-1-2',
                type: 'match',
                title: 'EXERCISE 2 · MATCH CONVERSATIONAL PHRASES',
                matchPrompt: 'Match the Sanskrit conversational expressions to English:',
                pairs: [
                  { left: 'किमर्थम् (Kimartham)', right: 'Why?' },
                  { left: 'नास्ति (Naasti)', right: 'There is not / Does not exist' },
                  { left: 'कियत् मूल्यम्?', right: 'How much (price)?' },
                  { left: 'मह्यं यच्छतु', right: 'Give me (please)' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch-6',
    number: 6,
    title: 'Wisdom',
    sanskritTitle: 'सुभाषित',
    subtitle: 'Ancient wisdom verses / प्राचीन ज्ञान श्लोक',
    units: [
      {
        id: 'unit-20',
        number: 20,
        title: 'Subhashita — Immortal Epigrams & Shlokas',
        subtitle: 'विद्या ददाति विनयम् · सत्यमेव जयते · वसुधैव कुटुम्बकम्',
        pageStart: 47,
        lessons: [
          {
            id: 'lesson-6-1',
            number: '6.1',
            title: 'Famous Subhashitas & Daily Peace Mantras',
            subtitle: 'Gita, Upanishads & Universal Prayers',
            exercises: [
              {
                id: 'ex-6-1-1',
                type: 'info_card',
                title: 'EXERCISE 1 · EIGHT IMMORTAL SUBHASHITAS',
                infoTitle: 'Subhashita (सुभाषित) — "Well-Spoken" Jewels of Wisdom',
                audioSample: 'विद्या ददाति विनयम् सत्यमेव जयते वसुधैव कुटुम्बकम्',
                infoLines: [
                  '1. विद्या ददाति विनयम् — Knowledge gives humility',
                  '2. सत्यमेव जयते — Truth alone triumphs (Mundaka Upanishad · National Motto)',
                  '3. वसुधैव कुटुम्बकम् — The world is one family (Maha Upanishad)',
                  '4. अहिंसा परमो धर्मः — Non-violence is the highest duty',
                  '5. कर्मण्येवाधिकारस्ते — You have the right to action alone (Bhagavad Gita 2.47)',
                  '6. तमसो मा ज्योतिर्गमय — Lead me from darkness to light (Brihadaranyaka Upanishad)',
                  '7. परोपकारः पुण्याय — Helping others is virtue',
                  '8. सर्वे भवन्तु सुखिनः — May all beings be happy',
                ],
              },
              {
                id: 'ex-6-1-2',
                type: 'quiz',
                title: 'EXERCISE 2 · THREEFOLD SHANTI QUIZ',
                question: 'Why is शान्तिः (Shaantih) chanted thrice at the end of Vedic prayers?',
                options: [
                  'For musical rhythm only',
                  'For relief from the 3 types of suffering: आधिदैविक (natural), आधिभौतिक (external), आध्यात्मिक (internal)',
                  'For three seasons',
                  'Random convention',
                ],
                correctIndex: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch-7',
    number: 7,
    title: 'Advanced Grammar',
    sanskritTitle: 'उन्नत व्याकरण',
    subtitle: 'Gender (लिङ्ग), 22 Prefixes (उपसर्ग) & Suffixes (प्रत्यय)',
    units: [
      {
        id: 'unit-21',
        number: 21,
        title: 'लिङ्ग, उपसर्ग & प्रत्यय',
        subtitle: 'Units 21–23 · Masculine/Feminine/Neuter, Verbal Prefixes & Word-Building',
        pageStart: 51,
        lessons: [
          {
            id: 'lesson-7-1',
            number: '7.1',
            title: 'Three Genders, 22 Upasargas & Word-Building Pratyayas',
            subtitle: 'पुल्लिङ्ग, स्त्रीलिङ्ग, नपुंसकलिङ्ग + प्र, सम्, वि, अनु + त्व, ता, वत्, मय',
            exercises: [
              {
                id: 'ex-7-1-1',
                type: 'info_card',
                title: 'EXERCISE 1 · GENDER, PREFIXES & SUFFIXES',
                infoTitle: 'How Sanskrit generates thousands of precise words from roots',
                audioSample: 'प्रगति संस्कृत विज्ञान परिवार आनन्दमय',
                infoLines: [
                  '3 Genders: पुल्लिङ्ग (रामः, देवः -अः) · स्त्रीलिङ्ग (सीता, नदी -आ/-ई) · नपुंसकलिङ्ग (फलम्, वनम् -अम्)',
                  'Upasargas (Prefixes): प्र (forward → प्रगति), सम् (together/perfected → संस्कृत), वि (special → विज्ञान), परि (around → परिवार)',
                  'Suffixes: -त्व / -ता ("-ness": देवत्व divinity, सुन्दरता beauty)',
                  'Suffixes: -वत् ("having": बलवत् powerful, भगवत् blessed) · -मय ("full of": आनन्दमय full of bliss)',
                ],
              },
              {
                id: 'ex-7-1-2',
                type: 'quiz',
                title: 'EXERCISE 2 · ETYMOLOGY OF SANSKRIT',
                question: 'The word संस्कृत (Sanskrit) is formed with prefix सम् + कृत and literally means:',
                options: ['Ancient language', 'Refined / Perfected / Well-formed (सम् + कृत)', 'Secret script', 'Northern speech'],
                correctIndex: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch-8',
    number: 8,
    title: 'Literature',
    sanskritTitle: 'साहित्य',
    subtitle: 'Stories, epics & poetry / कथा, महाकाव्य एवं काव्य',
    units: [
      {
        id: 'unit-24',
        number: 24,
        title: 'Panchatantra, Ramayana, Mahabharata & Kalidasa',
        subtitle: 'Units 24–26 · पञ्चतन्त्र, आदिकाव्य, महाभारत & कालिदास',
        pageStart: 56,
        lessons: [
          {
            id: 'lesson-8-1',
            number: '8.1',
            title: 'The Great Classics of Sanskrit Literature',
            subtitle: 'Vishnu Sharma, Valmiki, Vyasa & Kalidasa',
            exercises: [
              {
                id: 'ex-8-1-1',
                type: 'info_card',
                title: 'EXERCISE 1 · FOUR PILLARS OF SANSKRIT LITERATURE',
                infoTitle: 'Fables, Epics & Classical Drama',
                audioSample: 'विद्वान् सर्वत्र पूज्यते उपमा कालिदासस्य',
                infoLines: [
                  'पञ्चतन्त्र (Panchatantra · ~300 BCE) by Vishnu Sharma: 5 books of strategy fables (मित्रभेद, मित्रसम्प्राप्ति, काकोलूकीय, लब्धप्रणाश, अपरीक्षितकारक). Moral: संघे शक्तिः (Unity is strength).',
                  'रामायण (Ramayana) by महर्षि वाल्मीकि (Valmiki): 24,000 shlokas across 7 Kandas — revered as आदिकाव्य (The First Poem).',
                  'महाभारत (Mahabharata) by महर्षि व्यास (Vyasa): 100,000 shlokas — longest poem in human history; contains the 700-verse Bhagavad Gita.',
                  'कालिदास (Kalidasa · ~4th c. CE): अभिज्ञानशाकुन्तलम् (Shakuntala), मेघदूतम् (Cloud Messenger), रघुवंशम्. Famous dictum: उपमा कालिदासस्य (Kalidasa’s similes are unmatched).',
                ],
              },
              {
                id: 'ex-8-1-2',
                type: 'match',
                title: 'EXERCISE 2 · MATCH AUTHORS & MASTERPIECES',
                matchPrompt: 'Match each classical work or epithet to its author or meaning:',
                pairs: [
                  { left: 'विष्णु शर्मा (Vishnu Sharma)', right: 'पञ्चतन्त्र (Five Strategies)' },
                  { left: 'वाल्मीकि (Valmiki)', right: 'रामायण (आदिकाव्य · 24,000 shlokas)' },
                  { left: 'व्यास (Vyasa)', right: 'महाभारत (100,000 shlokas & Gita)' },
                  { left: 'कालिदास (Kalidasa)', right: 'मेघदूतम् & अभिज्ञानशाकुन्तलम्' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch-9',
    number: 9,
    title: 'Word Origins',
    sanskritTitle: 'व्युत्पत्ति',
    subtitle: 'Sanskrit roots in world languages & modern technology / विश्व भाषाओं में संस्कृत',
    units: [
      {
        id: 'unit-27',
        number: 27,
        title: 'Indo-European Cognates & Modern Tech Coinages',
        subtitle: 'मातृ → Mother, विद् → Video, अग्नि → Ignite, अन्तर्जाल → Internet',
        pageStart: 61,
        lessons: [
          {
            id: 'lesson-9-1',
            number: '9.1',
            title: 'Shared Indo-European Roots & Computational Vocabulary',
            subtitle: 'From Ancient Roots to Modern Science',
            exercises: [
              {
                id: 'ex-9-1-1',
                type: 'info_card',
                title: 'EXERCISE 1 · COGNATES & TECH VOCABULARY',
                infoTitle: 'How Sanskrit connects to English, Latin & Greek',
                audioSample: 'मातृ पितृ भ्रातृ विद् अग्नि दूरदर्शन संगणक',
                infoLines: [
                  'मातृ (Maatri) → Mater / Mother · पितृ (Pitri) → Pater / Father · भ्रातृ (Bhraatri) → Brother',
                  'नाम (Naama) → Name · दन्त (Danta) → Dental · विद् (Vid = to see/know) → Video, Vision, Wisdom',
                  'अग्नि (Agni) → Ignis / Ignite · सर्प (Sarpa) → Serpent · स्थ (Stha) → Stand, State, Station',
                  'Modern Tech Coinages: दूरदर्शन (far-seeing = Television) · आकाशवाणी (sky-voice = Radio)',
                  'अन्तर्जाल (between-net = Internet) · संगणक (together-counter = Computer) · विमान (special-vehicle = Airplane)',
                ],
              },
              {
                id: 'ex-9-1-2',
                type: 'match',
                title: 'EXERCISE 2 · MATCH SANSKRIT ROOTS TO COGNATES',
                matchPrompt: 'Match the Sanskrit root or compound to its English cognate or tech meaning:',
                pairs: [
                  { left: 'विद् (Vid — to see/know)', right: 'Video / Vision' },
                  { left: 'अग्नि (Agni — fire)', right: 'Ignite' },
                  { left: 'अन्तर्जाल (Antar-jaala)', right: 'Internet (between-net)' },
                  { left: 'संगणक (Sam-ganaka)', right: 'Computer (counter)' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch-10',
    number: 10,
    title: 'Reading',
    sanskritTitle: 'पठन',
    subtitle: 'Read real Sanskrit texts / वास्तविक संस्कृत पठन',
    units: [
      {
        id: 'unit-28',
        number: 28,
        title: 'Simple Fables & Sacred Verse Parsing',
        subtitle: 'Units 28–29 · तृष्णार्तः काकः, सिंहः मूषकश्च, Gita 2.47 & Upanishad Prayer',
        pageStart: 64,
        lessons: [
          {
            id: 'lesson-10-1',
            number: '10.1',
            title: 'The Thirsty Crow, Lion & Mouse, and Word-by-Word Verse Reading',
            subtitle: 'बुद्धिः बलात् श्रेष्ठा · न कोऽपि लघुः · असतो मा सद्गमय',
            exercises: [
              {
                id: 'ex-10-1-1',
                type: 'info_card',
                title: 'EXERCISE 1 · STORY: THE THIRSTY CROW (तृष्णार्तः काकः)',
                infoTitle: 'Read complete Sanskrit narrative sentences in sequence',
                audioSample: 'एकः काकः अस्ति सः तृष्णार्तः अस्ति बुद्धिः बलात् श्रेष्ठा',
                infoLines: [
                  'एकः काकः अस्ति। (There is one crow.) · सः तृष्णार्तः अस्ति। (He is thirsty.)',
                  'सः जलं इच्छति। (He wants water.) · सः एकं घटं पश्यति। (He sees a pot.)',
                  'घटे अल्पं जलम् अस्ति। (In the pot, there is little water.)',
                  'सः पाषाणान् क्षिपति। (He drops pebbles.) · जलम् उपरि आगच्छति। (The water rises up.)',
                  'सः जलं पिबति। सः सुखी भवति। (He drinks water and becomes happy.)',
                  'Moral: बुद्धिः बलात् श्रेष्ठा — Intelligence is superior to brute strength.',
                ],
              },
              {
                id: 'ex-10-1-2',
                type: 'order',
                title: 'EXERCISE 2 · ORDER THE UPANISHAD PRAYER (1.3.28)',
                orderPrompt: 'Order the three transformations of the Brihadaranyaka Upanishad prayer (intellectual → moral → spiritual):',
                orderItems: [
                  '1. असतो मा सद्गमय (Lead me from untruth to truth)',
                  '2. तमसो मा ज्योतिर्गमय (Lead me from darkness to light)',
                  '3. मृत्योर्मा अमृतं गमय (Lead me from death to immortality)',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch-11',
    number: 11,
    title: "Pāṇini's System",
    sanskritTitle: 'पाणिनीयं व्याकरणम्',
    subtitle: '5,000-year-old formal grammar — Maheshvara Sutras, Pratyahara, Karaka, Lakara, Anubandha & Meta-Rules',
    units: [
      {
        id: 'unit-30',
        number: 30,
        title: 'Maheshvara Sutras & Pratyāhāra Compression',
        subtitle: 'Unit 30 · माहेश्वराणि सूत्राणि एवं प्रत्याहारः',
        pageStart: 69,
        lessons: [
          {
            id: 'lesson-11-1',
            number: '11.1',
            title: 'The 14 Sutras of Shiva’s Drum & 2-Letter Pratyāhāra Codes',
            subtitle: 'अ इ उ ण् ... ह ल् · इको यणचि (6.1.77)',
            exercises: [
              {
                id: 'ex-11-1-1',
                type: 'info_card',
                title: 'EXERCISE 1 · THE 14 MAHESHVARA SUTRAS & PRATYAHARA',
                infoTitle: 'How Pāṇini compressed phoneme classes into 2-character algebraic codes',
                audioSample: 'अ इ उ ण् ऋ ऌ क् ए ओ ङ् ऐ औ च् ह य व र ट् ल ण्',
                infoLines: [
                  '1. अ इ उ ण् · 2. ऋ ऌ क् · 3. ए ओ ङ् · 4. ऐ औ च् (Sutras 1–4 = ALL VOWELS = अच्)',
                  '5. ह य व र ट् · 6. ल ण् (Semi-vowels = यण्) · 7. ञ म ङ ण न म् (Nasals = ञम्)',
                  '8. झ भ ञ् · 9. घ ढ ध ष् · 10. ज ब ग ड द श् · 11. ख फ छ ठ थ च ट त व् · 12. क प य् · 13. श ष स र् · 14. ह ल्',
                  'Formula (आदिरन्त्येन सहेता 1.1.71): [First letter] + [Final इत् marker] includes all letters in between, excluding the markers.',
                  'Example: इको यणचि (6.1.77) = इक् (इ उ ऋ ऌ) becomes यण् (य व र ल) before अच् (any vowel).',
                ],
              },
              {
                id: 'ex-11-1-2',
                type: 'match',
                title: 'EXERCISE 2 · MATCH PRATYAHARA CODES',
                matchPrompt: 'Match each Pāṇinian pratyāhāra code to the phoneme set it represents:',
                pairs: [
                  { left: 'अच् (ac)', right: 'All Vowels (Sutras 1–4)' },
                  { left: 'हल् (hal)', right: 'All Consonants (Sutras 5–14)' },
                  { left: 'इक् (ik)', right: 'इ उ ऋ ऌ (Simple non-a vowels)' },
                  { left: 'अल् (al)', right: 'All Phonemes (Entire Alphabet)' },
                ],
              },
              {
                id: 'ex-11-1-3',
                type: 'quiz',
                title: 'EXERCISE 3 · PRATYAHARA COMPRESSION QUIZ',
                question: 'In Pāṇini’s Ashtadhyayi, what is the closest modern computer science equivalent to his sūtra and pratyāhāra notation?',
                options: [
                  'Unstructured word lists',
                  'Backus-Naur Form (BNF) context-free grammar & type-system compression',
                  'Alphabetical dictionaries',
                  'Phonetic spelling reform',
                ],
                correctIndex: 1,
              },
            ],
          },
        ],
      },
      {
        id: 'unit-31',
        number: 31,
        title: 'Visarga Sandhi, Ṣatva-Ṇatva, 10 Lakāras & Sanādi',
        subtitle: 'Units 31–34 · सन्धिशास्त्रम्, आख्यातम्, कृत्-तद्धित & द्वित्वम्',
        pageStart: 71,
        lessons: [
          {
            id: 'lesson-11-3',
            number: '11.3',
            title: 'Visarga Sandhi, Cerebralization (Ṣatva/Ṇatva), 10 Lakāras & Voices',
            subtitle: 'रामोऽहम्, रामेण, लट् से लृङ् तक, परस्मैपद एवं आत्मनेपद',
            exercises: [
              {
                id: 'ex-11-3-1',
                type: 'info_card',
                title: 'EXERCISE 1 · VISARGA SANDHI, 10 LAKARAS & VOICES',
                infoTitle: 'Master Rules of Sound Junctions and the Verb System',
                audioSample: 'रामोऽहम् रामो गच्छति रामेण भवति बभूव भविष्यति',
                infoLines: [
                  'Visarga Sandhi: अः + अ → ओऽ (रामः + अहम् = रामोऽहम्) · अः + voiced consonant → ओ (रामो गच्छति)',
                  'Ṣatva & Ṇatva (8.4.2): After इ/उ/ऋ/र/क-class, dental स → ष (हरेष्षुत) and dental न → ण (रामेण, ब्रह्माणि).',
                  'The 10 Lakāras: 1. लट् (Present) · 2. लिट् (Perfect/Reduplicated: जगाम) · 3. लुट् (Distant Future: गन्ता) · 4. लृट् (Simple Future: गमिष्यति) · 5. लोट् (Imperative: गच्छतु) · 6. लङ् (Imperfect: अगच्छत्) · 7. विधिलिङ् (Optative: गच्छेत्) · 8. आशीर्लिङ् (Benedictive: गम्यात्) · 9. लुङ् (Aorist: अगमत्) · 10. लृङ् (Conditional: अगमिष्यत्).',
                  'Two Voices: परस्मैपद (for another: यजति) vs. आत्मनेपद (for self: यजते); roots taking both are उभयपदी.',
                  'Sanādi Stems: णिच् (Causative: पाठयति = teaches) · सन् (Desiderative: जिगमिषति = wants to go) · यङ् (Intensive: जङ्गम्यते).',
                ],
              },
              {
                id: 'ex-11-3-2',
                type: 'quiz',
                title: 'EXERCISE 2 · VISARGA SANDHI QUIZ',
                question: 'Apply Visarga Sandhi to: रामः + अहम् = ?',
                options: ['रामहम्', 'रामोऽहम् (अः + अ → ओ + अवग्रह ऽ)', 'रामाहम्', 'रामेहम्'],
                correctIndex: 1,
              },
              {
                id: 'ex-11-3-3',
                type: 'match',
                title: 'EXERCISE 3 · MATCH LAKARAS & DERIVATIVES',
                matchPrompt: 'Match each Pāṇinian grammatical form to its exact function:',
                pairs: [
                  { left: 'लिट् लकार (जगाम / चकार)', right: 'Perfect Tense with Reduplication (द्वित्वम्)' },
                  { left: 'विधिलिङ् (गच्छेत् / भवेत्)', right: 'Optative / Potential ("should/may")' },
                  { left: 'णिच् प्रत्यय (पाठयति)', right: 'Causative ("makes read = teaches")' },
                  { left: 'क्तवा / ल्यप् (कृत्वा / आगत्य)', right: 'Gerund ("having done / having come")' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'unit-35',
        number: 35,
        title: 'Pāṇinian Foundations: Kārakas, Lopa-Āgama-Ādeśa, Anubandha & Meta-Rules',
        subtitle: 'Units 35, 41–45 · षट् कारकाणि, लोप-आगम-आदेश, अनुबन्धाः, अङ्ग-पद-भ & परिभाषा',
        pageStart: 87,
        lessons: [
          {
            id: 'lesson-11-14',
            number: '11.14',
            title: 'The Deep Machinery of the Ashtadhyayi',
            subtitle: '6 Kārakas, 3 Operations, It-Markers, Stem States (Aṅga/Pada/Bha), 3 Prayogas & Rule Resolution',
            exercises: [
              {
                id: 'ex-11-14-1',
                type: 'info_card',
                title: 'EXERCISE 1 · PANINI’S FORMAL COMPILER ARCHITECTURE',
                infoTitle: 'Semantic Roles, Morphological Operations, Type Markers & Conflict Resolution',
                audioSample: 'स्वतन्त्रः कर्ता अदर्शनं लोपः विप्रतिषेधे परं कार्यम्',
                infoLines: [
                  '6 Kārakas (Semantic Roles ≠ Morphological Case): 1. कर्तृ (Agent · स्वतन्त्रः कर्ता) · 2. कर्म (Patient) · 3. करण (Instrument) · 4. सम्प्रदान (Recipient) · 5. अपादान (Fixed Source) · 6. अधिकरण (Locus).',
                  '3 Fundamental Operations: लोप (Deletion · अदर्शनं लोपः 1.1.60) · आगम (Insertion/Augment · e.g. इडागम in पठित) · आदेश (Substitution · e.g. इ → य, सम्प्रसारण य → इ in इष्ट/उक्त).',
                  'Anubandha (इत् Markers): क् blocks guṇa/vṛddhi (कृ + क्त्वा = कृत्वा) · ञ्/ण् triggers vṛddhi (भू + घञ् = भाव) · ट् attaches at start.',
                  '3 Stem States: अङ्ग (internal stem+suffix junction) · पद (finished word ending in सुप्/तिङ्) · भ (weak stem before vowel endings: राजन् → राज्ञा).',
                  '3 Prayogas (Voices): कर्तरि (Active: रामः फलं खादति) · कर्मणि (Passive: रामेण फलं खाद्यते) · भावे (Impersonal: रामेण सुप्यते).',
                  'Rule-Resolution Hierarchy: 1. अपवाद > उत्सर्ग (Specific overrides general) · 2. अन्तरङ्ग > बहिरङ्ग (Internal before external) · 3. पूर्वत्रासिद्धम् (8.2–8.4 treated as unapplied) · 4. विप्रतिषेधे परं कार्यम् (1.4.2: Later rule wins).',
                ],
              },
              {
                id: 'ex-11-14-2',
                type: 'match',
                title: 'EXERCISE 2 · MATCH PANINIAN OPERATIONS & META-RULES',
                matchPrompt: 'Match each Pāṇinian technical term to its computational function:',
                pairs: [
                  { left: 'अदर्शनं लोपः (1.1.60)', right: 'Deletion of a phoneme or affix' },
                  { left: 'इग्यणः सम्प्रसारणम् (1.1.45)', right: 'Semi-vowel य/व/र/ल reverts to इ/उ/ऋ/ऌ (e.g., उक्त)' },
                  { left: 'उत्सर्ग-अपवाद', right: 'Specific exception rule overrides general rule' },
                  { left: 'विप्रतिषेधे परं कार्यम् (1.4.2)', right: 'When two rules conflict, the later sutra prevails' },
                ],
              },
              {
                id: 'ex-11-14-3',
                type: 'quiz',
                title: 'EXERCISE 3 · ANUBANDHA TYPE-SYSTEM QUIZ',
                question: 'Why does √कृ + क्त्वा form कृत्वा (without guṇa), whereas √भू + घञ् forms भाव (with vṛddhi)?',
                options: [
                  'Random irregularity',
                  'The इत्-marker क् in क्त्वा blocks guṇa/vṛddhi, while the इत्-marker ञ् in घञ् triggers vṛddhi',
                  'Only vowels take sandhi',
                  'कृत्वा is plural',
                ],
                correctIndex: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ch-12',
    number: 12,
    title: 'Mastery',
    sanskritTitle: 'प्रावीण्यम्',
    subtitle: 'Meter (छन्दस्), Poetics (अलङ्कारः), Full Paradigms, Sūtra Parsing & Capstone',
    units: [
      {
        id: 'unit-36',
        number: 36,
        title: 'Chandas, Alaṅkāra, Full Paradigms & Sūtra Reading',
        subtitle: 'Units 36–40 · छन्दस्, अलङ्कारः, पूर्णरूपावलिः, रचना एवं समापनम्',
        pageStart: 119,
        lessons: [
          {
            id: 'lesson-12-1',
            number: '12.1',
            title: 'Prosody (Anuṣṭubh, Gāyatrī, Mandākrāntā) & Poetics (Upamā, Rūpaka, Śleṣa)',
            subtitle: 'लघु (L) & गुरु (G) Scansion + Figures of Speech',
            exercises: [
              {
                id: 'ex-12-1-1',
                type: 'info_card',
                title: 'EXERCISE 1 · CHANDAS (PROSODY) & ALANKARA (POETICS)',
                infoTitle: 'Quantitative Syllable Weight & Classical Poetic Figures',
                audioSample: 'वागर्थाविव सम्पृक्तौ वागर्थप्रतिपत्तये जगतः पितरौ वन्दे पार्वतीपरमेश्वरौ',
                infoLines: [
                  'Syllable Weight: लघु (Laghu · L) = short vowel not followed by conjunct or अं/अः · गुरु (Guru · G) = long vowel, or followed by 2+ consonants, or ending in अं/अः.',
                  'Anuṣṭubh (अनुष्टुप्): 4 pādas × 8 syllables = 32 syllables. Even pādas end in L-G-L (⏑ ─ ⏑) cadence.',
                  'Vedic & Kāvya Meters: गायत्री (3×8 = 24) · त्रिष्टुभ् (4×11 = 44) · जगती (4×12 = 48) · मन्दाक्रान्ता (17/pāda · Meghadūta) · शार्दूलविक्रीडितम् (19/pāda).',
                  'Arthālaṅkāra: उपमा (Simile: मुखं चन्द्र इव) · रूपक (Metaphor: चरण-कमलम्) · उत्प्रेक्षा ("As if": मन्ये/इव).',
                  'Śabdālaṅkāra: श्लेष (Simultaneous double meaning) · यमक (Syllable repetition) · अनुप्रास (Consonant alliteration).',
                ],
              },
              {
                id: 'ex-12-1-2',
                type: 'match',
                title: 'EXERCISE 2 · MATCH METERS & ALANKARAS',
                matchPrompt: 'Match each prosodic meter or poetic ornament to its definition:',
                pairs: [
                  { left: 'अनुष्टुप् (Anuṣṭubh)', right: '4 pādas × 8 syllables = 32 (Bhagavad Gītā)' },
                  { left: 'मन्दाक्रान्ता (Mandākrāntā)', right: '17 syllables/pāda (Kālidāsa’s Meghadūta)' },
                  { left: 'रूपक (Rūpaka · चरण-कमलम्)', right: 'Metaphor — direct fusion without "like"' },
                  { left: 'श्लेष (Śleṣa)', right: 'Double meaning / pun across an entire verse' },
                ],
              },
            ],
          },
          {
            id: 'lesson-12-8',
            number: '12.8',
            title: 'Parsing Real Pāṇinian Sūtras & Capstone Scholar Roadmap',
            subtitle: 'वृद्धिरादैच् (1.1.1) · अदेङ् गुणः (1.1.2) · इको यणचि (6.1.77)',
            exercises: [
              {
                id: 'ex-12-8-1',
                type: 'info_card',
                title: 'EXERCISE 1 · PARSING SUTRAS 1.1.1, 1.1.2 & 6.1.77',
                infoTitle: 'Read Pāṇini’s Ashtadhyayi in the original algebraic Sanskrit',
                audioSample: 'वृद्धिरादैच् अदेङ् गुणः इको यणचि शुभं भवतु सत्यमेव जयते',
                infoLines: [
                  'Sūtra 1.1.1 — वृद्धिरादैच् = वृद्धिः + आत् (आ) + ऐच् (ऐ, औ) → Defines Vṛddhi as आ, ऐ, औ.',
                  'Sūtra 1.1.2 — अदेङ् गुणः = अत् (अ) + एङ् (ए, ओ) + गुणः → Defines Guṇa as अ, ए, ओ.',
                  'Sūtra 6.1.77 — इको यणचि = इकः (6th case "in place of इक्: इ उ ऋ ऌ") + यण् (1st case "यण्: य व र ल") + अचि (7th case "before अच्: any vowel").',
                  'Example derivations of 6.1.77: इति + अपि → इत्यपि · सु + आगतम् → स्वागतम् · मातृ + आज्ञा → मात्राज्ञा.',
                  '5-Year Scholar Path: Year 1: Bhagavad Gītā with anvaya → Year 2: Hitopadeśa & Pañcatantra → Year 3: Kālidāsa → Year 4: Kāśikā-vṛtti on Pāṇini → Year 5: Ṛgveda.',
                ],
              },
              {
                id: 'ex-12-8-2',
                type: 'quiz',
                title: 'EXERCISE 2 · FINAL CAPSTONE QUIZ',
                question: 'In Sūtra 6.1.77 "इको यणचि", how does Pāṇini indicate "BEFORE any vowel"?',
                options: [
                  'By writing a long sentence in English',
                  'By placing the pratyāhāra अच् in the 7th Locative case: अचि ("when a vowel follows")',
                  'By repeating the vowel twice',
                  'By omitting the vowel',
                ],
                correctIndex: 1,
              },
            ],
          },
        ],
      },
    ],
  },
];

// Merge detailed lessons from INITIAL_CHAPTERS into COMPLETE_17_CHAPTERS so every unit has its full exercise suite
export const CURRICULUM_CHAPTERS: CurriculumChapter[] = COMPLETE_17_CHAPTERS.map((chap) => {
  const initChap = INITIAL_CHAPTERS.find((c) => c.number === chap.number);
  if (!initChap) return chap;
  return {
    ...chap,
    units: chap.units.map((u) => {
      const initUnit = initChap.units.find((iu) => iu.number === u.number);
      if (!initUnit) return u;
      // Combine unique lessons by lesson number, preferring the one with more exercises
      const lessonMap = new Map<string, CurriculumLesson>();
      for (const l of u.lessons) {
        lessonMap.set(l.number, l);
      }
      for (const il of initUnit.lessons) {
        const existing = lessonMap.get(il.number);
        if (!existing || il.exercises.length >= existing.exercises.length) {
          lessonMap.set(il.number, il);
        }
      }
      return {
        ...u,
        lessons: Array.from(lessonMap.values()),
      };
    }),
  };
});

export interface DeclensionTableData {
  id: string;
  stem: string;
  title: string;
  subtitle: string;
  rows: { caseName: string; sg: string; du: string; pl: string }[];
}

export const DECLENSION_TABLES: DeclensionTableData[] = [
  {
    id: 'rama',
    stem: 'राम (a-stem Masculine)',
    title: 'रामः — Masculine अ-कारान्त',
    subtitle: 'Covers ~50% of all masculine nouns in Sanskrit',
    rows: [
      { caseName: '1. प्रथमा (Nominative · Subject)', sg: 'रामः', du: 'रामौ', pl: 'रामाः' },
      { caseName: '2. द्वितीया (Accusative · Object)', sg: 'रामम्', du: 'रामौ', pl: 'रामान्' },
      { caseName: '3. तृतीया (Instrumental · By/With)', sg: 'रामेण', du: 'रामाभ्याम्', pl: 'रामैः' },
      { caseName: '4. चतुर्थी (Dative · For/To)', sg: 'रामाय', du: 'रामाभ्याम्', pl: 'रामेभ्यः' },
      { caseName: '5. पञ्चमी (Ablative · From)', sg: 'रामात्', du: 'रामाभ्याम्', pl: 'रामेभ्यः' },
      { caseName: '6. षष्ठी (Genitive · Of)', sg: 'रामस्य', du: 'रामयोः', pl: 'रामाणाम्' },
      { caseName: '7. सप्तमी (Locative · In/On)', sg: 'रामे', du: 'रामयोः', pl: 'रामेषु' },
      { caseName: '8. सम्बोधन (Vocative · Address)', sg: 'हे राम!', du: 'हे रामौ!', pl: 'हे रामाः!' },
    ],
  },
  {
    id: 'nadi',
    stem: 'नदी (ī-stem Feminine)',
    title: 'नदी — Feminine ई-कारान्त ("River")',
    subtitle: 'Standard paradigm for long-ī feminine nouns (देवी, भगिनी, पुत्री)',
    rows: [
      { caseName: '1. प्रथमा (Nominative)', sg: 'नदी', du: 'नद्यौ', pl: 'नद्यः' },
      { caseName: '2. द्वितीया (Accusative)', sg: 'नदीम्', du: 'नद्यौ', pl: 'नदीः' },
      { caseName: '3. तृतीया (Instrumental)', sg: 'नद्या', du: 'नदीभ्याम्', pl: 'नदीभिः' },
      { caseName: '4. चतुर्थी (Dative)', sg: 'नद्यै', du: 'नदीभ्याम्', pl: 'नदीभ्यः' },
      { caseName: '5. पञ्चमी (Ablative)', sg: 'नद्याः', du: 'नदीभ्याम्', pl: 'नदीभ्यः' },
      { caseName: '6. षष्ठी (Genitive)', sg: 'नद्याः', du: 'नद्योः', pl: 'नदीनाम्' },
      { caseName: '7. सप्तमी (Locative)', sg: 'नद्याम्', du: 'नद्योः', pl: 'नदीषु' },
      { caseName: '8. सम्बोधन (Vocative)', sg: 'हे नदि!', du: 'हे नद्यौ!', pl: 'हे नद्यः!' },
    ],
  },
  {
    id: 'phala',
    stem: 'फल (a-stem Neuter)',
    title: 'फलम् — Neuter अ-कारान्त ("Fruit")',
    subtitle: '1st and 2nd cases are identical; Cases 3–7 follow रामः',
    rows: [
      { caseName: '1. प्रथमा (Nominative)', sg: 'फलम्', du: 'फले', pl: 'फलानि' },
      { caseName: '2. द्वितीया (Accusative)', sg: 'फलम्', du: 'फले', pl: 'फलानि' },
      { caseName: '3. तृतीया (Instrumental)', sg: 'फलेन', du: 'फलाभ्याम्', pl: 'फलैः' },
      { caseName: '4. चतुर्थी (Dative)', sg: 'फलाय', du: 'फलाभ्याम्', pl: 'फलेभ्यः' },
      { caseName: '5. पञ्चमी (Ablative)', sg: 'फलात्', du: 'फलाभ्याम्', pl: 'फलेभ्यः' },
      { caseName: '6. षष्ठी (Genitive)', sg: 'फलस्य', du: 'फलयोः', pl: 'फलानाम्' },
      { caseName: '7. सप्तमी (Locative)', sg: 'फले', du: 'फलयोः', pl: 'फलेषु' },
      { caseName: '8. सम्बोधन (Vocative)', sg: 'हे फल!', du: 'हे फले!', pl: 'हे फलानि!' },
    ],
  },
  {
    id: 'hari',
    stem: 'हरि (i-stem Masculine)',
    title: 'हरिः — Masculine इ-कारान्त',
    subtitle: 'Standard paradigm for short-i masculine stems (कवि, मुनि, ऋषि, अग्नि)',
    rows: [
      { caseName: '1. प्रथमा (Nominative)', sg: 'हरिः', du: 'हरी', pl: 'हरयः' },
      { caseName: '2. द्वितीया (Accusative)', sg: 'हरिम्', du: 'हरी', pl: 'हरीन्' },
      { caseName: '3. तृतीया (Instrumental)', sg: 'हरिणा', du: 'हरिभ्याम्', pl: 'हरिभिः' },
      { caseName: '4. चतुर्थी (Dative)', sg: 'हरये', du: 'हरिभ्याम्', pl: 'हरिभ्यः' },
      { caseName: '5. पञ्चमी (Ablative)', sg: 'हरेः', du: 'हरिभ्याम्', pl: 'हरिभ्यः' },
      { caseName: '6. षष्ठी (Genitive)', sg: 'हरेः', du: 'हर्योः', pl: 'हरीणाम्' },
      { caseName: '7. सप्तमी (Locative)', sg: 'हरौ', du: 'हर्योः', pl: 'हरिषु' },
      { caseName: '8. सम्बोधन (Vocative)', sg: 'हे हरे!', du: 'हे हरी!', pl: 'हे हरयः!' },
    ],
  },
];

export interface VerbLakaraTable {
  id: string;
  lakara: string;
  title: string;
  formula: string;
  rows: { person: string; sg: string; du: string; pl: string }[];
}

export const VERB_BHU_TABLES: VerbLakaraTable[] = [
  {
    id: 'lat',
    lakara: 'लट् (laṭ)',
    title: 'Present Indicative (वर्तमान काल)',
    formula: 'Root √भू → Guṇa भो + अ (शप्) → भव- + Primary Endings',
    rows: [
      { person: 'प्रथम पुरुष (3rd Person · He/She/They)', sg: 'भवति', du: 'भवतः', pl: 'भवन्ति' },
      { person: 'मध्यम पुरुष (2nd Person · You)', sg: 'भवसि', du: 'भवथः', pl: 'भवथ' },
      { person: 'उत्तम पुरुष (1st Person · I/We)', sg: 'भवामि', du: 'भवावः', pl: 'भवामः' },
    ],
  },
  {
    id: 'lan',
    lakara: 'लङ् (laṅ)',
    title: 'Imperfect Past (अनद्यतन भूत)',
    formula: 'अट् augment (अ-) + भव- + Secondary Endings',
    rows: [
      { person: 'प्रथम पुरुष (3rd Person)', sg: 'अभवत्', du: 'अभवताम्', pl: 'अभवन्' },
      { person: 'मध्यम पुरुष (2nd Person)', sg: 'अभवः', du: 'अभवतम्', pl: 'अभवत' },
      { person: 'उत्तम पुरुष (1st Person)', sg: 'अभवम्', du: 'अभवाव', pl: 'अभवाम' },
    ],
  },
  {
    id: 'lrt',
    lakara: 'लृट् (lṛṭ)',
    title: 'Simple Future (सामान्य भविष्यत्)',
    formula: 'Stem भवि- (सेट्) + स्य + Primary Endings',
    rows: [
      { person: 'प्रथम पुरुष (3rd Person)', sg: 'भविष्यति', du: 'भविष्यतः', pl: 'भविष्यन्ति' },
      { person: 'मध्यम पुरुष (2nd Person)', sg: 'भविष्यसि', du: 'भविष्यथः', pl: 'भविष्यथ' },
      { person: 'उत्तम पुरुष (1st Person)', sg: 'भविष्यामि', du: 'भविष्यावः', pl: 'भविष्यामः' },
    ],
  },
  {
    id: 'lot',
    lakara: 'लोट् (loṭ)',
    title: 'Imperative Mood (आज्ञा / प्रार्थना)',
    formula: 'Stem भव- + Imperative Endings',
    rows: [
      { person: 'प्रथम पुरुष (3rd Person)', sg: 'भवतु', du: 'भवताम्', pl: 'भवन्तु' },
      { person: 'मध्यम पुरुष (2nd Person)', sg: 'भव', du: 'भवतम्', pl: 'भवत' },
      { person: 'उत्तम पुरुष (1st Person)', sg: 'भवानि', du: 'भवाव', pl: 'भवाम' },
    ],
  },
  {
    id: 'vidhilin',
    lakara: 'विधिलिङ् (vidhiliṅ)',
    title: 'Optative / Potential ("Should / May")',
    formula: 'Stem भव- + ईयसुट् (-ए-) + Secondary Endings',
    rows: [
      { person: 'प्रथम पुरुष (3rd Person)', sg: 'भवेत्', du: 'भवेताम्', pl: 'भवेयुः' },
      { person: 'मध्यम पुरुष (2nd Person)', sg: 'भवेः', du: 'भवेतम्', pl: 'भवेत' },
      { person: 'उत्तम पुरुष (1st Person)', sg: 'भवेयम्', du: 'भवेव', pl: 'भवेम' },
    ],
  },
  {
    id: 'lit',
    lakara: 'लिट् (liṭ)',
    title: 'Perfect Tense (परोक्ष भूत · Reduplicated)',
    formula: 'Reduplication (द्वित्वम्) ब-भूव- + Perfect Endings',
    rows: [
      { person: 'प्रथम पुरुष (3rd Person)', sg: 'बभूव', du: 'बभूवतुः', pl: 'बभूवुः' },
      { person: 'मध्यम पुरुष (2nd Person)', sg: 'बभूविथ', du: 'बभूवथुः', pl: 'बभूव' },
      { person: 'उत्तम पुरुष (1st Person)', sg: 'बभूव', du: 'बभूविव', pl: 'बभूविम' },
    ],
  },
];

import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface VerseSpecimen {
  id: string;
  title: string;
  meterName: string;
  meterRule: string;
  devanagari: string;
  translation: string;
}

const VERSE_SPECIMENS: VerseSpecimen[] = [
  {
    id: 'gita-2-47',
    title: 'Bhagavad Gītā 2.47 (Pāda 1 & 2)',
    meterName: 'अनुष्टुप् (Anuṣṭubh · 8 syllables/pāda)',
    meterRule: 'Odd pāda 5-6-7 = L-G-G · Even pāda 5-6-7 = L-G-L (⏑ ─ ⏑ cadence)',
    devanagari: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन',
    translation: 'You have the right to action alone, never to its fruits.',
  },
  {
    id: 'gayatri',
    title: 'Gāyatrī Mantra (Ṛgveda 3.62.10)',
    meterName: 'गायत्री (Gāyatrī · 3 pādas × 8 = 24 syllables)',
    meterRule: 'Three octosyllabic pādas — the foundational Vedic meter',
    devanagari: 'तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्',
    translation: 'We meditate upon that adorable effulgence of the divine Sun; may He illumine our intellects.',
  },
  {
    id: 'kalidasa-1-1',
    title: 'Kālidāsa — Raghuvaṃśa 1.1 (Upamā Alaṅkāra)',
    meterName: 'अनुष्टुप् (Anuṣṭubh Śloka)',
    meterRule: '32 syllables total across 4 pādas · Famous Upamā (इव) of Word & Meaning',
    devanagari: 'वागर्थाविव सम्पृक्तौ वागर्थप्रतिपत्तये जगतः पितरौ वन्दे पार्वतीपरमेश्वरौ',
    translation: 'United like word and meaning — for the right comprehension of word and meaning, I salute the parents of the universe, Pārvatī and Parameśvara.',
  },
  {
    id: 'kumarasambhava',
    title: 'Kālidāsa — Kumārasambhava 1.1 (Pāda 1)',
    meterName: 'इन्द्रवज्रा / उपजाति (Triṣṭubh family · 11 syllables/pāda)',
    meterRule: '11 syllables per pāda · Cadence ends in ⏑ ─ ⏑ ─ ─',
    devanagari: 'अस्त्युत्तरस्यां दिशि देवतात्मा हिमालयो नाम नगाधिराजः',
    translation: 'In the northern direction stands the divine-souled lord of mountains named Himālaya.',
  },
];

interface ScannedSyllable {
  text: string;
  weight: 'L' | 'G';
  reason: string;
}

// Accurate Devanagari Quantitative Syllable (Akshara) Scanner
function scanDevanagariSyllables(input: string): ScannedSyllable[] {
  const cleaned = input.replace(/[।॥,.;!?|]/g, ' ').trim();
  if (!cleaned) return [];

  const independentVowels = new Set(['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ॠ', 'ऌ', 'ए', 'ऐ', 'ओ', 'औ']);
  const longIndependent = new Set(['आ', 'ई', 'ऊ', 'ॠ', 'ए', 'ऐ', 'ओ', 'औ']);
  const shortMatras = new Set(['ि', 'ु', 'ृ', 'ॢ']);
  const longMatras = new Set(['ा', 'ी', 'ू', 'ॄ', 'े', 'ै', 'ो', 'ौ']);
  const halant = '्';
  const anusvaraVisarga = new Set(['ं', 'ः', 'ँ']);

  const isConsonant = (ch: string) => {
    const code = ch.charCodeAt(0);
    return code >= 0x0915 && code <= 0x0939;
  };

  const chars = Array.from(cleaned).filter((c) => c !== ' ' && c !== '\n');
  const aksharas: { text: string; hasLongVowel: boolean; hasAnusvaraVisarga: boolean; nextStartsConjunct: boolean }[] = [];

  let i = 0;
  while (i < chars.length) {
    let chunk = '';
    let hasLong = false;
    let hasAV = false;

    if (independentVowels.has(chars[i])) {
      chunk += chars[i];
      if (longIndependent.has(chars[i])) hasLong = true;
      i++;
    } else if (isConsonant(chars[i])) {
      // Collect consonant cluster
      while (i < chars.length && isConsonant(chars[i])) {
        chunk += chars[i];
        i++;
        if (i < chars.length && chars[i] === halant) {
          chunk += chars[i];
          i++;
        } else {
          break;
        }
      }
      // Check vowel matra
      if (i < chars.length) {
        if (longMatras.has(chars[i])) {
          chunk += chars[i];
          hasLong = true;
          i++;
        } else if (shortMatras.has(chars[i])) {
          chunk += chars[i];
          i++;
        }
      }
    } else {
      i++;
      continue;
    }

    // Check anusvara / visarga
    while (i < chars.length && anusvaraVisarga.has(chars[i])) {
      chunk += chars[i];
      hasAV = true;
      i++;
    }

    // Trailing word-final halant consonant attaches to previous syllable
    if (i < chars.length && isConsonant(chars[i]) && i + 1 === chars.length - 1 && chars[i + 1] === halant) {
      chunk += chars[i] + chars[i + 1];
      hasAV = true;
      i += 2;
    }

    aksharas.push({
      text: chunk,
      hasLongVowel: hasLong,
      hasAnusvaraVisarga: hasAV,
      nextStartsConjunct: false,
    });
  }

  // Determine if the next akshara starts with a consonant conjunct (2+ consonants before vowel)
  for (let idx = 0; idx < aksharas.length - 1; idx++) {
    const nextText = aksharas[idx + 1].text;
    if (nextText.includes(halant)) {
      aksharas[idx].nextStartsConjunct = true;
    }
  }

  return aksharas.map((ak) => {
    if (ak.hasLongVowel) {
      return { text: ak.text, weight: 'G', reason: 'दीर्घ स्वर (Long vowel)' };
    }
    if (ak.hasAnusvaraVisarga) {
      return { text: ak.text, weight: 'G', reason: 'अनुस्वार / विसर्ग (Nasal/Aspirate)' };
    }
    if (ak.nextStartsConjunct) {
      return { text: ak.text, weight: 'G', reason: 'संयोगादि गुरु (Followed by conjunct)' };
    }
    return { text: ak.text, weight: 'L', reason: 'ह्रस्व (Short vowel · Laghu)' };
  });
}

export const ChandasScanner: React.FC = () => {
  const [selectedSpecimen, setSelectedSpecimen] = useState<VerseSpecimen>(VERSE_SPECIMENS[0]);
  const [customVerse, setCustomVerse] = useState<string>(VERSE_SPECIMENS[0].devanagari);

  const syllables = scanDevanagariSyllables(customVerse);
  const guruCount = syllables.filter((s) => s.weight === 'G').length;
  const laghuCount = syllables.filter((s) => s.weight === 'L').length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-slate-500">
            CHAPTER 12 · PROSODY & POETICS (छन्दःशास्त्रम् एवं अलङ्कारः)
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Interactive Chandas Syllable Weight (Laghu / Guru) Scanner
          </h2>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {VERSE_SPECIMENS.map((spec) => (
            <button
              key={spec.id}
              type="button"
              onClick={() => {
                setSelectedSpecimen(spec);
                setCustomVerse(spec.devanagari);
                soundEngine.speakSanskrit(spec.devanagari);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedSpecimen.id === spec.id
                  ? 'border-sky-600 bg-sky-700 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
              }`}
            >
              {spec.title.split('(')[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Two-Zone Sandbox Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Zone: Live Scansion Stage */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-sky-700 font-semibold">
                {selectedSpecimen.meterName}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">{selectedSpecimen.meterRule}</div>
            </div>
            <button
              type="button"
              onClick={() => soundEngine.speakSanskrit(customVerse, 0.78)}
              className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-lg flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              Chant Verse
            </button>
          </div>

          {/* Editable Devanagari Input */}
          <div>
            <label className="block text-xs font-mono text-slate-500 mb-1.5">
              DEVANAGARI VERSE INPUT (TYPE OR SELECT PRESET TO SCAN LIVE):
            </label>
            <textarea
              value={customVerse}
              onChange={(e) => setCustomVerse(e.target.value)}
              rows={2}
              className="w-full p-3.5 rounded-lg border border-slate-300 bg-slate-50 font-devanagari text-lg text-slate-900 focus:outline-none focus:border-sky-600"
            />
          </div>

          {/* Scanned Syllable Grid */}
          <div>
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
              <span>QUANTITATIVE SYLLABLES (अक्षराणि): {syllables.length} TOTAL</span>
              <span>
                GURU (─): {guruCount} · LAGHU (⏑): {laghuCount}
              </span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5">
              {syllables.map((syl, idx) => {
                const isGuru = syl.weight === 'G';
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => soundEngine.speakSanskrit(syl.text)}
                    title={syl.reason}
                    className={`p-2.5 rounded-lg border text-center transition-colors cursor-pointer ${
                      isGuru
                        ? 'border-sky-600 bg-sky-50/80 text-sky-950'
                        : 'border-slate-200 bg-slate-50/70 text-slate-800'
                    }`}
                  >
                    <div className="text-xs font-mono text-slate-400 tabular-nums">
                      #{idx + 1}
                    </div>
                    <div className="text-xl font-bold font-devanagari my-1">{syl.text}</div>
                    <div
                      className={`text-xs font-mono font-bold ${
                        isGuru ? 'text-sky-700' : 'text-slate-600'
                      }`}
                    >
                      {isGuru ? '─ G' : '⏑ L'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Translation Note */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-700">
            <span className="font-semibold text-slate-900">Meaning: </span>
            {selectedSpecimen.translation}
          </div>
        </div>

        {/* Right Zone: Prosody Wave Visualizer & Classical Meter Rules */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-slate-100 rounded-xl p-6 border border-slate-800 space-y-4">
            <div className="text-xs font-mono text-sky-400">
              QUANTITATIVE RHYTHM WAVEFORM (लघु = 1 मात्रा · गुरु = 2 मात्रे)
            </div>
            <svg
              viewBox="0 0 360 120"
              className="w-full h-28 bg-slate-950 rounded-lg border border-slate-800 p-2"
              role="img"
              aria-label="Syllable weight bar chart"
            >
              {syllables.slice(0, 16).map((syl, i) => {
                const x = 12 + i * 21.5;
                const isG = syl.weight === 'G';
                const barH = isG ? 68 : 34;
                const y = 92 - barH;
                return (
                  <g key={i}>
                    <rect
                      x={x}
                      y={y}
                      width="14"
                      height={barH}
                      rx="3"
                      fill={isG ? '#0284C7' : '#64748B'}
                    />
                    <text
                      x={x + 7}
                      y={110}
                      textAnchor="middle"
                      fontSize="9"
                      fill="#94A3B8"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      {syl.weight}
                    </text>
                  </g>
                );
              })}
            </svg>
            <div className="text-xs text-slate-300 leading-relaxed">
              In Sanskrit prosody (छन्दस्), a short vowel becomes heavy (गुरु · 2 mātrās) if followed by a consonant conjunct (संयोगादि) or ending in अनुस्वार/विसर्ग.
            </div>
          </div>

          {/* Reference Table of Classical Meters */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3">
            <h3 className="text-base font-semibold text-slate-900">
              Major Vedic & Classical Meters (छन्दांसि)
            </h3>
            <div className="divide-y divide-slate-200 text-xs">
              {[
                { name: 'गायत्री (Gāyatrī)', count: '3 × 8 = 24', note: 'Most sacred Vedic meter (Ṛgveda)' },
                { name: 'अनुष्टुप् (Anuṣṭubh)', count: '4 × 8 = 32', note: '90% of Bhagavad Gītā, Rāmāyaṇa, Mahābhārata' },
                { name: 'त्रिष्टुभ् / इन्द्रवज्रा', count: '4 × 11 = 44', note: '40% of Ṛgveda + Kālidāsa mahākāvya' },
                { name: 'जगती (Jagatī)', count: '4 × 12 = 48', note: 'Lively 12-syllable Vedic & classical cadence' },
                { name: 'मन्दाक्रान्ता (Mandākrāntā)', count: '4 × 17 = 68', note: 'Slow-stepping meter of Kālidāsa’s Meghadūta' },
                { name: 'शार्दूलविक्रीडितम्', count: '4 × 19 = 76', note: '"Tiger’s Play" — grand declamatory verse' },
              ].map((m) => (
                <div key={m.name} className="py-2.5 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-slate-900 font-devanagari">{m.name}</div>
                    <div className="text-slate-500">{m.note}</div>
                  </div>
                  <span className="font-mono text-sky-700 font-semibold tabular-nums shrink-0">
                    {m.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

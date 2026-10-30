import React, { useState } from 'react';
import { Volume2, Play, ArrowRight } from 'lucide-react';
import {
  MAHESHVARA_SUTRAS,
  PRATYAHARA_PRESETS,
  PratyaharaPreset,
  DASHAGANI_VERB_CLASSES,
  DhatuGanaClass,
} from '../data/curriculumData';
import { soundEngine } from '../utils/soundEngine';

interface SandhiRuleCase {
  id: string;
  category: string;
  sutra: string;
  leftWord: string;
  rightWord: string;
  mergedResult: string;
  stepExplanation: string;
}

const SANDHI_WORKBENCH_CASES: SandhiRuleCase[] = [
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
    sutra: 'रषाभ्यां नो णः समानपदे (8.4.1) + अट्कुप्वाङ्नुम्व्यवायेऽपि (8.4.2)',
    leftWord: 'रामे',
    rightWord: 'न (Instrumental suffix)',
    mergedResult: 'रामेण',
    stepExplanation: 'Preceding र in राम triggers retroflexion of dental न → ण even across intervening vowels/labials (अट्/प-वर्ग) → रामेण.',
  },
];

export const PaniniEngine: React.FC = () => {
  const [selectedPratyahara, setSelectedPratyahara] = useState<PratyaharaPreset>(PRATYAHARA_PRESETS[0]);
  const [selectedSandhi, setSelectedSandhi] = useState<SandhiRuleCase>(SANDHI_WORKBENCH_CASES[0]);
  const [selectedGana, setSelectedGana] = useState<DhatuGanaClass>(DASHAGANI_VERB_CLASSES[0]);

  const getIncludedLetters = (preset: PratyaharaPreset): string[] => {
    const [startSutra, endSutra] = preset.sutraSpan;
    const collected: string[] = [];
    let started = false;

    for (const s of MAHESHVARA_SUTRAS) {
      if (s.number < startSutra || s.number > endSutra) continue;
      for (const letter of s.letters) {
        if (s.number === startSutra && letter === preset.startLetter) {
          started = true;
        }
        if (started) {
          collected.push(letter);
        }
      }
    }
    return collected;
  };

  const activeLetters = getIncludedLetters(selectedPratyahara);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-slate-500">
            CHAPTERS 11 & 17 · PANINI’S ASHTADHYAYI, DHATUPATHA & GANAPATHA
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Maheshvara Sūtras, Pratyāhāra Compiler & 10 Daśagaṇī Verb Classes
          </h2>
        </div>

        {/* Pratyahara Selector */}
        <div className="flex flex-wrap items-center gap-1.5">
          {PRATYAHARA_PRESETS.map((preset) => (
            <button
              key={preset.code}
              type="button"
              onClick={() => {
                setSelectedPratyahara(preset);
                soundEngine.speakSanskrit(preset.code);
              }}
              className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedPratyahara.code === preset.code
                  ? 'border-sky-600 bg-sky-700 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
              }`}
            >
              {preset.code} ({preset.iast})
            </button>
          ))}
        </div>
      </div>

      {/* Two-Zone Layout: Left 14 Sutras Matrix, Right Pratyahara Decoder & Sandhi Compiler */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Zone: The 14 Maheshvara Sutras */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-slate-900 font-devanagari">
                माहेश्वराणि सूत्राणि — The 14 Sutras of Shiva’s Damaru
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Highlighted phonemes belong to active Pratyāhāra{' '}
                <span className="font-mono font-semibold text-sky-700">{selectedPratyahara.code}</span>. Amber final consonant is the uncounted इत्-marker.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                soundEngine.playDamaruBeat(0);
                soundEngine.speakSanskrit('अ इ उ ण् ऋ ऌ क् ए ओ ङ् ऐ औ च्');
              }}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5" />
              Chant Sutras 1–4
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MAHESHVARA_SUTRAS.map((sutra, idx) => {
              const inSpan =
                sutra.number >= selectedPratyahara.sutraSpan[0] &&
                sutra.number <= selectedPratyahara.sutraSpan[1];
              const isEndSutra = sutra.number === selectedPratyahara.sutraSpan[1];

              return (
                <div
                  key={sutra.number}
                  onClick={() => {
                    soundEngine.playDamaruBeat(idx);
                    soundEngine.speakSanskrit(sutra.devanagari);
                  }}
                  className={`p-3.5 rounded-lg border transition-colors cursor-pointer ${
                    inSpan
                      ? 'border-sky-600 bg-sky-50/50'
                      : 'border-slate-200 bg-slate-50/40 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                    <span className="tabular-nums">SŪTRA {String(sutra.number).padStart(2, '0')}</span>
                    <span>{sutra.iast}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 my-1">
                    {sutra.letters.map((l, lIdx) => {
                      const isIncluded = inSpan && activeLetters.includes(l);
                      return (
                        <span
                          key={lIdx}
                          className={`w-8 h-8 rounded flex items-center justify-center text-base font-devanagari font-semibold ${
                            isIncluded
                              ? 'bg-sky-700 text-white'
                              : 'bg-white border border-slate-200 text-slate-800'
                          }`}
                        >
                          {l}
                        </span>
                      );
                    })}
                    {/* Final It-Marker */}
                    <span
                      className={`w-8 h-8 rounded flex items-center justify-center text-base font-devanagari font-semibold border ${
                        isEndSutra
                          ? 'bg-amber-600 text-white border-amber-700'
                          : 'bg-slate-100 text-slate-500 border-slate-300'
                      }`}
                      title="इत् (Anubandha marker — excluded from phoneme output)"
                    >
                      {sutra.itMarker}
                    </span>
                  </div>

                  <div className="text-xs text-slate-600 mt-2">{sutra.classDescription}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Zone: Active Pratyahara Inspector & Interactive Sandhi Compiler */}
        <div className="lg:col-span-5 space-y-6">
          {/* Pratyahara Expansion Card */}
          <div className="bg-slate-900 text-slate-100 rounded-xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <div className="text-xs font-mono text-sky-400">
                  META-RULE 1.1.71 · आदिरन्त्येन सहेता
                </div>
                <div className="text-xl font-bold font-devanagari mt-0.5">
                  प्रत्याहारः {selectedPratyahara.code} ({selectedPratyahara.iast})
                </div>
              </div>
              <span className="text-xs font-mono text-emerald-400 tabular-nums">
                ● {activeLetters.length} PHONEMES
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">START ANCHOR (आदि)</span>
                <span className="text-lg font-bold text-sky-400 font-devanagari">
                  {selectedPratyahara.startLetter} (Sūtra {selectedPratyahara.sutraSpan[0]})
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-400 block">STOP MARKER (इत्)</span>
                <span className="text-lg font-bold text-amber-400 font-devanagari">
                  {selectedPratyahara.endMarker} (Sūtra {selectedPratyahara.sutraSpan[1]})
                </span>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 mb-2">
                EXPANDED PHONEME SET ({activeLetters.length} LETTERS):
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex flex-wrap gap-1.5 font-devanagari text-base">
                {activeLetters.map((ch, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => soundEngine.speakSanskrit(ch)}
                    className="px-2 py-1 rounded bg-slate-800 hover:bg-sky-700 text-slate-100 transition-colors cursor-pointer"
                  >
                    {ch}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 text-xs space-y-1">
              <div className="text-slate-300 font-medium">{selectedPratyahara.meaning}</div>
              <div className="text-sky-300 font-mono">{selectedPratyahara.famousSutra}</div>
            </div>
          </div>

          {/* Interactive Sutra & Sandhi Derivation Workbench */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <div>
              <div className="text-xs font-mono text-slate-500">
                COMPUTATIONAL MORPHOLOGY · LOPA, AGAMA & ADESHA
              </div>
              <h3 className="text-base font-semibold text-slate-900 mt-0.5">
                Interactive Sandhi & Sūtra Derivation Workbench
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {SANDHI_WORKBENCH_CASES.map((sc) => (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => {
                    setSelectedSandhi(sc);
                    soundEngine.speakSanskrit(sc.mergedResult);
                  }}
                  className={`px-2.5 py-1.5 text-xs font-devanagari rounded-md border transition-colors cursor-pointer ${
                    selectedSandhi.id === sc.id
                      ? 'border-sky-600 bg-sky-50 text-sky-950 font-semibold'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-400'
                  }`}
                >
                  {sc.leftWord} + {sc.rightWord}
                </button>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span>{selectedSandhi.category}</span>
                <span className="text-sky-700 font-semibold">{selectedSandhi.sutra}</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 py-2">
                <div className="flex items-center gap-2 text-xl font-bold font-devanagari text-slate-900">
                  <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg">
                    {selectedSandhi.leftWord}
                  </span>
                  <span className="text-slate-400">+</span>
                  <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg">
                    {selectedSandhi.rightWord}
                  </span>
                  <ArrowRight className="w-5 h-5 text-sky-600" />
                  <span className="px-3.5 py-1.5 bg-sky-700 text-white rounded-lg">
                    {selectedSandhi.mergedResult}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => soundEngine.speakSanskrit(selectedSandhi.mergedResult)}
                  className="p-2 text-sky-700 hover:bg-sky-100 rounded-lg transition-colors cursor-pointer"
                  title="Pronounce derived form"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed font-devanagari">
                {selectedSandhi.stepExplanation}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 17: Interactive 10 Daśagaṇī Dhātupāṭha Explorer */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <div className="text-xs font-mono text-slate-500">
              CHAPTER 17 · UNIT 58 · PANINIAN DHATUPATHA (~2,000 ROOTS IN 10 CLASSES)
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-devanagari mt-0.5">
              दशगणी धातुपाठः — The 10 Present-Stem Verb Classes & Vikaraṇa Affixes
            </h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {DASHAGANI_VERB_CLASSES.map((g) => (
              <button
                key={g.ganaNumber}
                type="button"
                onClick={() => {
                  setSelectedGana(g);
                  soundEngine.speakSanskrit(g.example3sgPresent);
                }}
                className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-lg border transition-colors cursor-pointer ${
                  selectedGana.ganaNumber === g.ganaNumber
                    ? 'border-sky-600 bg-sky-700 text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'
                }`}
              >
                Gana {g.ganaNumber} · {g.sanskritName}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 bg-slate-900 text-slate-100 rounded-xl p-5 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-sky-400 tabular-nums">
              <span>CLASS {selectedGana.ganaNumber} OF 10 · ~{selectedGana.rootCount} ROOTS</span>
              <span>{selectedGana.vikaranaSutra}</span>
            </div>
            <div className="text-2xl font-bold font-devanagari text-white">
              {selectedGana.sanskritName} ({selectedGana.iastName})
            </div>
            <div className="text-xs text-slate-300 font-devanagari">
              Head Root: <span className="text-white font-semibold">{selectedGana.firstRoot}</span> · Vikaraṇa Affix:{' '}
              <span className="text-amber-400 font-semibold">{selectedGana.vikarana}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
              {selectedGana.formationRule}
            </p>
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono text-slate-400">{selectedGana.exampleRoot}</div>
                <div className="text-lg font-bold font-devanagari text-emerald-400">
                  → {selectedGana.example3sgPresent}
                </div>
                <div className="text-xs text-slate-400">{selectedGana.meaning}</div>
              </div>
              <button
                type="button"
                onClick={() => soundEngine.speakSanskrit(selectedGana.example3sgPresent)}
                className="px-3 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Play
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 font-mono text-slate-500">
                  <th className="py-2 pr-2">#</th>
                  <th className="py-2 px-2">Gaṇa Name</th>
                  <th className="py-2 px-2">Vikaraṇa</th>
                  <th className="py-2 px-2">Pāṇini Sūtra</th>
                  <th className="py-2 pl-2">3rd Sg Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-devanagari">
                {DASHAGANI_VERB_CLASSES.map((g) => {
                  const isAct = selectedGana.ganaNumber === g.ganaNumber;
                  return (
                    <tr
                      key={g.ganaNumber}
                      onClick={() => {
                        setSelectedGana(g);
                        soundEngine.speakSanskrit(g.example3sgPresent);
                      }}
                      className={`cursor-pointer transition-colors ${
                        isAct ? 'bg-sky-50 font-semibold text-sky-950' : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <td className="py-2 pr-2 font-mono tabular-nums">{g.ganaNumber}</td>
                      <td className="py-2 px-2">{g.sanskritName}</td>
                      <td className="py-2 px-2 font-semibold text-amber-800">{g.vikarana}</td>
                      <td className="py-2 px-2 font-mono text-slate-500">{g.vikaranaSutra}</td>
                      <td className="py-2 pl-2 font-semibold text-slate-900">
                        {g.example3sgPresent}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

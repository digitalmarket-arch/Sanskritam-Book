import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { DECLENSION_TABLES, VERB_BHU_TABLES } from '../data/curriculumData';
import { soundEngine } from '../utils/soundEngine';

export const ParadigmExplorer: React.FC = () => {
  const [selectedNounId, setSelectedNounId] = useState<string>(DECLENSION_TABLES[0].id);
  const [selectedVerbId, setSelectedVerbId] = useState<string>(VERB_BHU_TABLES[0].id);

  // Interactive 5-Step Sentence Composer (Unit 39 · रचना)
  const [subjectChoice, setSubjectChoice] = useState<number>(0);
  const [objectChoice, setObjectChoice] = useState<number>(0);
  const [verbChoice, setVerbChoice] = useState<number>(0);

  const SUBJECTS = [
    { label: 'रामः (Rāma · 3rd Sg)', person: '3sg', sanskrit: 'रामः' },
    { label: 'सीता (Sītā · 3rd Sg)', person: '3sg', sanskrit: 'सीता' },
    { label: 'अहम् (I · 1st Sg)', person: '1sg', sanskrit: 'अहम्' },
    { label: 'त्वम् (You · 2nd Sg)', person: '2sg', sanskrit: 'त्वम्' },
    { label: 'छात्राः (Students · 3rd Pl)', person: '3pl', sanskrit: 'छात्राः' },
  ];

  const OBJECTS = [
    { label: 'पुस्तकम् (a book · 2nd case)', sanskrit: 'पुस्तकं', english: 'the book' },
    { label: 'ग्रामम् (to the village · 2nd case)', sanskrit: 'ग्रामं', english: 'to the village' },
    { label: 'वेदम् (the Veda · 2nd case)', sanskrit: 'वेदं', english: 'the Veda' },
    { label: 'फलम् (fruit · 2nd case)', sanskrit: 'फलं', english: 'the fruit' },
  ];

  const VERBS = [
    {
      label: '√पठ् (reads)',
      english: 'reads / read',
      forms: { '3sg': 'पठति', '1sg': 'पठामि', '2sg': 'पठसि', '3pl': 'पठन्ति' },
    },
    {
      label: '√गम् (goes)',
      english: 'goes / go',
      forms: { '3sg': 'गच्छति', '1sg': 'गच्छामि', '2sg': 'गच्छसि', '3pl': 'गच्छन्ति' },
    },
    {
      label: '√दृश्/पश्य (sees)',
      english: 'sees / see',
      forms: { '3sg': 'पश्यति', '1sg': 'पश्यामि', '2sg': 'पश्यसि', '3pl': 'पश्यन्ति' },
    },
    {
      label: '√खाद् (eats)',
      english: 'eats / eat',
      forms: { '3sg': 'खादति', '1sg': 'खादामि', '2sg': 'खादसि', '3pl': 'खादन्ति' },
    },
  ];

  const activeNoun = DECLENSION_TABLES.find((t) => t.id === selectedNounId) || DECLENSION_TABLES[0];
  const activeVerb = VERB_BHU_TABLES.find((t) => t.id === selectedVerbId) || VERB_BHU_TABLES[0];

  const sub = SUBJECTS[subjectChoice];
  const obj = OBJECTS[objectChoice];
  const vrb = VERBS[verbChoice];
  const conjugatedVerb = vrb.forms[sub.person as keyof typeof vrb.forms];
  const composedSentence = `${sub.sanskrit === 'अहम्' ? 'अहं' : sub.sanskrit === 'त्वम्' ? 'त्वं' : sub.sanskrit} ${obj.sanskrit} ${conjugatedVerb}।`;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-5">
        <div className="text-xs font-mono text-slate-500">
          UNITS 38 & 39 · FULL PARADIGMS (सुप्-तिङ्-तालिका) & COMPOSITION (अनुवादः)
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mt-1">
          Master Noun Declensions, Verb Lakāras & Interactive Sentence Builder
        </h2>
      </div>

      {/* Interactive 5-Step Sentence Composer */}
      <div className="bg-slate-900 text-slate-100 rounded-xl p-6 border border-slate-800 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-sky-400">
              UNIT 39 · 5-STEP COMPOSITION FORMULA (कर्ता 1st + कर्म 2nd + क्रिया Agreement + सन्धि)
            </div>
            <h3 className="text-lg font-semibold text-white mt-0.5">
              Interactive Sanskrit Sentence Synthesizer
            </h3>
          </div>
          <button
            type="button"
            onClick={() => soundEngine.speakSanskrit(composedSentence)}
            className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            Pronounce Composed Sentence
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1.5">
              1. SUBJECT (कर्ता · प्रथमा विभक्ति)
            </label>
            <select
              value={subjectChoice}
              onChange={(e) => setSubjectChoice(Number(e.target.value))}
              className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white font-devanagari"
            >
              {SUBJECTS.map((s, idx) => (
                <option key={idx} value={idx}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1.5">
              2. OBJECT (कर्म · द्वितीया विभक्ति)
            </label>
            <select
              value={objectChoice}
              onChange={(e) => setObjectChoice(Number(e.target.value))}
              className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white font-devanagari"
            >
              {OBJECTS.map((o, idx) => (
                <option key={idx} value={idx}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1.5">
              3. VERB ROOT (धातु · तिङ् Agreement)
            </label>
            <select
              value={verbChoice}
              onChange={(e) => setVerbChoice(Number(e.target.value))}
              className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-sm text-white font-devanagari"
            >
              {VERBS.map((v, idx) => (
                <option key={idx} value={idx}>
                  {v.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-slate-400">
              DERIVED SANSKRIT SENTENCE (WITH ANUSVARA SANDHI):
            </div>
            <div className="text-2xl font-bold font-devanagari text-sky-400 mt-1">
              {composedSentence}
            </div>
          </div>
          <div className="text-xs font-mono text-emerald-400">
            ● AGREES IN PERSON ({sub.person.toUpperCase()})
          </div>
        </div>
      </div>

      {/* Two-Column Tables: Left Subanta Noun Declensions, Right Tinanta Verb Conjugations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Noun Declensions */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-slate-900 font-devanagari">
                {activeNoun.title}
              </h3>
              <p className="text-xs text-slate-500">{activeNoun.subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg">
              {DECLENSION_TABLES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedNounId(t.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    selectedNounId === t.id
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.stem.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-mono text-slate-500">
                  <th className="py-2 pr-2">विभक्ति (Case)</th>
                  <th className="py-2 px-2">एकवचन (1)</th>
                  <th className="py-2 px-2">द्विवचन (2)</th>
                  <th className="py-2 pl-2">बहुवचन (3+)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-devanagari">
                {activeNoun.rows.map((row) => (
                  <tr key={row.caseName} className="hover:bg-slate-50">
                    <td className="py-2.5 pr-2 font-sans text-xs font-medium text-slate-700">
                      {row.caseName}
                    </td>
                    {[row.sg, row.du, row.pl].map((cell, cIdx) => (
                      <td key={cIdx} className="py-2 px-2">
                        <button
                          type="button"
                          onClick={() => soundEngine.speakSanskrit(cell)}
                          className="text-left font-semibold text-slate-900 hover:text-sky-700 transition-colors cursor-pointer"
                        >
                          {cell}
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Verb Conjugations */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-base font-semibold text-slate-900 font-devanagari">
                √भू ("to be") — {activeVerb.lakara} · {activeVerb.title}
              </h3>
              <p className="text-xs text-slate-500 font-mono">{activeVerb.formula}</p>
            </div>
            <div className="flex flex-wrap gap-1 bg-slate-100 p-1 rounded-lg">
              {VERB_BHU_TABLES.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedVerbId(v.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                    selectedVerbId === v.id
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {v.lakara.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-mono text-slate-500">
                  <th className="py-2 pr-2">पुरुष (Person)</th>
                  <th className="py-2 px-2">एकवचन (Sg)</th>
                  <th className="py-2 px-2">द्विवचन (Du)</th>
                  <th className="py-2 pl-2">बहुवचन (Pl)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-devanagari">
                {activeVerb.rows.map((row) => (
                  <tr key={row.person} className="hover:bg-slate-50">
                    <td className="py-3 pr-2 font-sans text-xs font-medium text-slate-700">
                      {row.person}
                    </td>
                    {[row.sg, row.du, row.pl].map((cell, cIdx) => (
                      <td key={cIdx} className="py-3 px-2">
                        <button
                          type="button"
                          onClick={() => soundEngine.speakSanskrit(cell)}
                          className="text-base font-semibold text-slate-900 hover:text-sky-700 transition-colors cursor-pointer"
                        >
                          {cell}
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-900">Top 12 Verb Roots (धातवः) to Swap: </span>
            √भू (भवति · be), √गम् (गच्छति · go), √पठ् (पठति · read), √पा (पिबति · drink), √स्था (तिष्ठति · stand), √दृश् (पश्यति · see), √दा (यच्छति/ददाति · give), √कृ (करोति · do), √ज्ञा (जानाति · know), √श्रु (शृणोति · hear), √लभ् (लभते · obtain), √सेव् (सेवते · serve).
          </div>
        </div>
      </div>
    </div>
  );
};

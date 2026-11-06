import React, { useMemo, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';
import { describeWeight, markFor, scanVerse } from '../data/app/chandas';
import type { Syllable } from '../data/app/chandas';
import { CHANDAS_SAMPLES as SAMPLES, METER_TABLE } from '../data/chandasSamples';

export const ChandasScanner: React.FC = () => {
  const [sampleId, setSampleId] = useState<string | null>(SAMPLES[0].id);
  const [verse, setVerse] = useState<string>(SAMPLES[0].text);
  const [picked, setPicked] = useState<{ pada: number; index: number } | null>(null);

  const scan = useMemo(() => scanVerse(verse), [verse]);
  const sample = SAMPLES.find((s) => s.id === sampleId);
  const syllables: Syllable[] = scan.padas.flatMap((p) => p.syllables);
  const guruCount = syllables.filter((s) => s.weight === 'G').length;
  const laghuCount = syllables.length - guruCount;
  const pickedSyllable = picked ? scan.padas[picked.pada]?.syllables[picked.index] : undefined;

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
          {SAMPLES.map((spec) => (
            <button
              key={spec.id}
              type="button"
              onClick={() => {
                setSampleId(spec.id);
                setVerse(spec.text);
                setPicked(null);
                soundEngine.speakSanskrit(spec.text);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                sampleId === spec.id
                  ? 'border-sky-600 bg-sky-700 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
              }`}
            >
              {spec.title}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Zone: Live Scansion Stage */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 space-y-6">
          <div className="flex flex-wrap items-start justify-between gap-4" aria-live="polite">
            <div>
              <div className="text-xs font-mono text-sky-700 font-semibold">
                {scan.meter ?? (scan.padas.length ? 'NO SINGLE NAMED METER' : 'NOTHING TO SCAN YET')}
              </div>
              <div className="text-xs text-slate-600 mt-0.5 max-w-md">{scan.summary}</div>
              {scan.syllableCount > 0 && (
                <div className="text-xs font-mono text-slate-500 mt-1 tabular-nums">
                  {scan.syllableCount} syllables · {scan.padas.length} {scan.padas.length === 1 ? 'pāda' : 'pādas'}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => soundEngine.speakSanskrit(verse, 0.78)}
              className="px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-lg flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              Chant Verse
            </button>
          </div>

          {/* Editable Devanagari Input */}
          <div>
            <label htmlFor="chandas-verse" className="block text-xs font-mono text-slate-500 mb-1.5">
              DEVANAGARI VERSE — ONE PĀDA OR HALF-VERSE PER LINE (TYPE OR PICK A SAMPLE):
            </label>
            <textarea
              id="chandas-verse"
              value={verse}
              onChange={(e) => {
                setVerse(e.target.value);
                setSampleId(null);
                setPicked(null);
              }}
              rows={4}
              maxLength={800}
              placeholder="धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः"
              className="w-full p-3.5 rounded-lg border border-slate-300 bg-slate-50 font-devanagari text-lg text-slate-900 focus:outline-none focus:border-sky-600"
            />
          </div>

          {/* Scanned pādas */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500">
              <span>QUANTITATIVE SYLLABLES (अक्षराणि) — TAP ONE TO SEE WHY</span>
              <span className="tabular-nums">
                GURU (—): {guruCount} · LAGHU (˘): {laghuCount}
              </span>
            </div>

            {scan.padas.map((pada, p) => (
              <div key={p} className="space-y-2">
                <div className="text-xs font-mono text-slate-500">PĀDA {p + 1}</div>
                <div className="flex flex-wrap gap-2">
                  {pada.syllables.map((syl, i) => {
                    const isGuru = syl.weight === 'G';
                    const isPicked = picked?.pada === p && picked.index === i;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setPicked(isPicked ? null : { pada: p, index: i });
                          soundEngine.speakSanskrit(syl.text);
                        }}
                        title={describeWeight(syl)}
                        aria-label={describeWeight(syl)}
                        aria-pressed={isPicked}
                        className={`min-w-[3rem] px-2 py-2 rounded-lg border text-center transition-colors cursor-pointer ${
                          isGuru
                            ? 'border-sky-600 bg-sky-50/80 text-sky-950'
                            : 'border-slate-200 bg-slate-50/70 text-slate-800'
                        } ${isPicked ? 'ring-2 ring-amber-500' : ''}`}
                      >
                        <div className="text-xl font-bold font-devanagari">{syl.text}</div>
                        <div className={`text-sm font-mono font-bold ${isGuru ? 'text-sky-700' : 'text-slate-600'}`}>
                          {markFor(syl.weight)}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="text-xs text-slate-600">{pada.note}</div>
                {picked?.pada === p && pickedSyllable && (
                  <div className="text-xs font-devanagari text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                    {describeWeight(pickedSyllable)}
                  </div>
                )}
              </div>
            ))}
          </div>

          {sample?.translation && (
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-700">
              <span className="font-semibold text-slate-900">Meaning: </span>
              {sample.translation}
            </div>
          )}
        </div>

        {/* Right Zone: Rhythm, Rules & Classical Meters */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-slate-100 rounded-xl p-6 border border-slate-800 space-y-4">
            <div className="text-xs font-mono text-sky-400">
              QUANTITATIVE RHYTHM (लघु = 1 मात्रा · गुरु = 2 मात्रे)
            </div>
            <svg
              viewBox={`0 0 ${Math.max(360, 12 + syllables.length * 11)} 120`}
              className="w-full h-28 bg-slate-950 rounded-lg border border-slate-800 p-2"
              role="img"
              aria-label="Syllable weight bar chart"
            >
              {syllables.map((syl, i) => {
                const isG = syl.weight === 'G';
                const barH = isG ? 68 : 34;
                return <rect key={i} x={8 + i * 11} y={92 - barH} width="8" height={barH} rx="2" fill={isG ? '#0284C7' : '#64748B'} />;
              })}
            </svg>
            <div className="text-xs text-slate-300 leading-relaxed space-y-1.5">
              <p>
                — गुरु (heavy): a long vowel (आ ई ऊ ॠ ए ऐ ओ औ), or anusvāra / visarga (ं ः), or a short vowel followed by
                two or more consonants, even across a word break.
              </p>
              <p>˘ लघु (light): a short vowel (अ इ उ ऋ ऌ) followed by at most one consonant.</p>
              <p>The last syllable of a pāda may be either; a candrabindu (ँ) adds no weight.</p>
            </div>
          </div>

          {/* Reference Table of Classical Meters */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-3">
            <h3 className="text-base font-semibold text-slate-900">Major Vedic & Classical Meters (छन्दांसि)</h3>
            <div className="divide-y divide-slate-200 text-xs">
              {METER_TABLE.map((m) => (
                <div key={m.name} className="py-2.5 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-slate-900 font-devanagari">{m.name}</div>
                    <div className="text-slate-500">{m.note}</div>
                  </div>
                  <span className="font-mono text-sky-700 font-semibold tabular-nums shrink-0">{m.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

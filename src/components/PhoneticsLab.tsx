import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { VARNAMALA_PHONEMES, PhonemeEntry } from '../data/curriculumData';
import { soundEngine } from '../utils/soundEngine';

const ARTICULATION_ZONES: {
  id: 'all' | PhonemeEntry['articulation'];
  label: string;
  sanskrit: string;
  coords: { x: number; y: number };
}[] = [
  { id: 'all', label: 'All 46 Sounds', sanskrit: 'सम्पूर्ण वर्णमाला', coords: { x: 200, y: 140 } },
  { id: 'Kantha (Throat)', label: 'Throat', sanskrit: 'कण्ठ (Kantha)', coords: { x: 255, y: 215 } },
  { id: 'Taalu (Palate)', label: 'Palate', sanskrit: 'तालु (Taalu)', coords: { x: 215, y: 120 } },
  { id: 'Moordhaa (Roof)', label: 'Roof / Retroflex', sanskrit: 'मूर्धा (Moordhaa)', coords: { x: 175, y: 102 } },
  { id: 'Danta (Teeth)', label: 'Teeth / Dental', sanskrit: 'दन्त (Danta)', coords: { x: 132, y: 138 } },
  { id: 'Oshtha (Lips)', label: 'Lips / Labial', sanskrit: 'ओष्ठ (Oshtha)', coords: { x: 102, y: 152 } },
  { id: 'Compound', label: 'Blended / Guna-Vriddhi', sanskrit: 'कण्ठतालु / कण्ठोष्ठ', coords: { x: 195, y: 165 } },
];

export const PhoneticsLab: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<'all' | PhonemeEntry['articulation']>('all');
  const [activePhoneme, setActivePhoneme] = useState<PhonemeEntry>(VARNAMALA_PHONEMES[0]);

  const filteredPhonemes =
    selectedZone === 'all'
      ? VARNAMALA_PHONEMES
      : VARNAMALA_PHONEMES.filter((p) => p.articulation === selectedZone);

  const handleSelectPhoneme = (p: PhonemeEntry) => {
    setActivePhoneme(p);
    soundEngine.speakSanskrit(p.devanagari);
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="border-b border-slate-200 pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-slate-500">
            CHAPTERS 1 & 2 · SCIENTIFIC PHONETIC MATRIX (46 VARNAS)
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Interactive Varnamala & Vocal Tract Articulation Lab
          </h2>
        </div>

        {/* Interactive Filter Segmented Control */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg">
          {ARTICULATION_ZONES.map((z) => (
            <button
              key={z.id}
              type="button"
              onClick={() => setSelectedZone(z.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                selectedZone === z.id
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {z.label}
            </button>
          ))}
        </div>
      </div>

      {/* Two-Zone Sandbox Layout: Left 65% Interactive Phoneme Matrix, Right 35% Vocal Tract Diagram & Specimen Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Zone: Interactive 46-Sound Matrix */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-slate-900">
                Tap any Sanskrit letter to hear its resonance & inspect articulation
              </h3>
              <span className="text-xs font-mono text-slate-500 tabular-nums">
                Showing {filteredPhonemes.length} of 46 sounds
              </span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5">
              {filteredPhonemes.map((p) => {
                const isSelected = activePhoneme.devanagari === p.devanagari;
                return (
                  <button
                    key={p.devanagari}
                    type="button"
                    onClick={() => handleSelectPhoneme(p)}
                    className={`p-3 rounded-lg border text-center transition-colors cursor-pointer flex flex-col items-center justify-center ${
                      isSelected
                        ? 'border-sky-600 bg-sky-50 text-sky-950 font-bold'
                        : 'border-slate-200 bg-slate-50/60 hover:border-slate-400 hover:bg-white text-slate-900'
                    }`}
                  >
                    <span className="text-2xl font-devanagari leading-none">{p.devanagari}</span>
                    <span className="text-xs font-mono text-slate-500 mt-1.5">{p.iast}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 5x5 Stop Consonant Reference Grid */}
          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-slate-900">
                The 5×5 Stop Consonant Architecture (पञ्च वर्ग · 25 स्पर्श व्यञ्जन)
              </h3>
              <span className="text-xs font-mono text-slate-500">Throat → Lips</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-mono text-slate-500">
                    <th className="py-2 pr-3">Varga (Position)</th>
                    <th className="py-2 px-2">1. अघोष अल्पप्राण</th>
                    <th className="py-2 px-2">2. अघोष महाप्राण</th>
                    <th className="py-2 px-2">3. घोष अल्पप्राण</th>
                    <th className="py-2 px-2">4. घोष महाप्राण</th>
                    <th className="py-2 pl-2">5. अनुनासिक</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-devanagari">
                  {[
                    { name: 'क-वर्ग (कण्ठ · Throat)', chars: ['क', 'ख', 'ग', 'घ', 'ङ'] },
                    { name: 'च-वर्ग (तालु · Palate)', chars: ['च', 'छ', 'ज', 'झ', 'ञ'] },
                    { name: 'ट-वर्ग (मूर्धा · Roof)', chars: ['ट', 'ठ', 'ड', 'ढ', 'ण'] },
                    { name: 'त-वर्ग (दन्त · Teeth)', chars: ['त', 'थ', 'द', 'ध', 'न'] },
                    { name: 'प-वर्ग (ओष्ठ · Lips)', chars: ['प', 'फ', 'ब', 'भ', 'म'] },
                  ].map((row) => (
                    <tr key={row.name}>
                      <td className="py-2.5 pr-3 font-sans text-xs font-medium text-slate-700">
                        {row.name}
                      </td>
                      {row.chars.map((c) => {
                        const found = VARNAMALA_PHONEMES.find((p) => p.devanagari === c);
                        const isActive = activePhoneme.devanagari === c;
                        return (
                          <td key={c} className="py-2 px-2">
                            <button
                              type="button"
                              onClick={() => found && handleSelectPhoneme(found)}
                              className={`w-10 h-10 rounded-lg border text-lg font-semibold transition-colors cursor-pointer ${
                                isActive
                                  ? 'border-sky-600 bg-sky-50 text-sky-900'
                                  : 'border-slate-200 bg-white hover:border-slate-400 text-slate-900'
                              }`}
                            >
                              {c}
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Zone: Interactive Anatomical Vocal Tract SVG + Selected Phoneme Inspector */}
        <div className="lg:col-span-5 space-y-6">
          {/* Vocal Tract SVG Visualizer */}
          <div className="bg-slate-900 text-slate-100 rounded-xl p-6 border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-xs font-mono text-sky-400">
                  VOCAL TRACT RESONANCE MAP (उच्चारण स्थान)
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  Active Point: {activePhoneme.articulation}
                </div>
              </div>
              <button
                type="button"
                onClick={() => soundEngine.speakSanskrit(activePhoneme.devanagari)}
                className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                Play {activePhoneme.devanagari}
              </button>
            </div>

            <svg
              viewBox="0 0 360 260"
              className="w-full h-56 bg-slate-950/70 rounded-lg border border-slate-800"
              role="img"
              aria-label="Sanskrit Vocal Tract Articulation Diagram"
            >
              {/* Coordinate Grid */}
              <line x1="0" y1="65" x2="360" y2="65" stroke="#1E293B" strokeDasharray="3 3" />
              <line x1="0" y1="130" x2="360" y2="130" stroke="#1E293B" strokeDasharray="3 3" />
              <line x1="0" y1="195" x2="360" y2="195" stroke="#1E293B" strokeDasharray="3 3" />

              {/* Stylized Vocal Tract Profile Outline */}
              <path
                d="M 95 90 Q 150 65 225 85 Q 285 110 285 185 L 285 245 M 100 150 Q 140 120 190 120 Q 245 125 255 215 L 255 245"
                fill="none"
                stroke="#475569"
                strokeWidth="2.5"
              />
              {/* Tongue Curve */}
              <path
                d="M 118 162 Q 175 135 230 175"
                fill="none"
                stroke="#64748B"
                strokeWidth="2"
                strokeDasharray="4 2"
              />

              {/* 5 Articulation Nodes */}
              {[
                { id: 'Kantha (Throat)', x: 255, y: 205, label: '1. कण्ठ (Throat)' },
                { id: 'Taalu (Palate)', x: 215, y: 118, label: '2. तालु (Palate)' },
                { id: 'Moordhaa (Roof)', x: 170, y: 98, label: '3. मूर्धा (Roof)' },
                { id: 'Danta (Teeth)', x: 128, y: 136, label: '4. दन्त (Teeth)' },
                { id: 'Oshtha (Lips)', x: 96, y: 155, label: '5. ओष्ठ (Lips)' },
              ].map((node) => {
                const isActive =
                  activePhoneme.articulation === node.id ||
                  (activePhoneme.articulation === 'Compound' &&
                    (node.id === 'Kantha (Throat)' ||
                      node.id === 'Taalu (Palate)' ||
                      node.id === 'Oshtha (Lips)'));

                return (
                  <g
                    key={node.id}
                    onClick={() => setSelectedZone(node.id as PhonemeEntry['articulation'])}
                    className="cursor-pointer"
                  >
                    {isActive && (
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="16"
                        fill="rgba(14, 165, 233, 0.22)"
                        stroke="#38BDF8"
                        strokeWidth="1.5"
                      />
                    )}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={isActive ? '7' : '5'}
                      fill={isActive ? '#38BDF8' : '#64748B'}
                    />
                    <text
                      x={node.x + (node.x < 150 ? -8 : 12)}
                      y={node.y + 4}
                      textAnchor={node.x < 150 ? 'end' : 'start'}
                      fill={isActive ? '#F8FAFC' : '#94A3B8'}
                      fontSize="10"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Detailed Phoneme Card */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-bold text-slate-900 font-devanagari">
                  {activePhoneme.devanagari}
                </span>
                <div>
                  <div className="text-lg font-semibold text-sky-700 font-mono">
                    {activePhoneme.iast} · {activePhoneme.ipaHint}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {activePhoneme.articulation} · {activePhoneme.voicing}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-slate-500 block">Meaning & Essence</span>
                <span className="font-semibold text-slate-900 font-devanagari">
                  {activePhoneme.meaning}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block">Deity / Cosmic Principle</span>
                <span className="font-medium text-slate-800 font-devanagari">
                  {activePhoneme.deity}
                </span>
              </div>
              <div>
                <span className="text-xs text-slate-500 block mb-1.5">
                  Curriculum Example Words (Click to pronounce):
                </span>
                <div className="flex flex-wrap gap-2">
                  {activePhoneme.examples.map((ex, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => soundEngine.speakSanskrit(ex.split('(')[0])}
                      className="px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:border-sky-600 text-xs font-devanagari text-slate-800 transition-colors cursor-pointer"
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

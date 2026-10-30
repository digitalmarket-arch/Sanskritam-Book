import React, { useState, useMemo } from 'react';
import { Download, Printer, Volume2, Eye, EyeOff, FileText, BookOpen, Search } from 'lucide-react';
import { CURRICULUM_CHAPTERS, CurriculumChapter } from '../data/curriculumData';
import { soundEngine } from '../utils/soundEngine';

export const PdfBookStudio: React.FC = () => {
  const [viewMode, setViewMode] = useState<'book_pages' | 'embedded_pdf'>('book_pages');
  const [selectedChapterNum, setSelectedChapterNum] = useState<number | 'all' | 'new_only'>('new_only');
  const [showAnswerKeys, setShowAnswerKeys] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pdfPageAnchor, setPdfPageAnchor] = useState<number>(138);

  const visibleChapters: CurriculumChapter[] = useMemo(() => {
    let list = CURRICULUM_CHAPTERS;
    if (selectedChapterNum === 'new_only') {
      list = CURRICULUM_CHAPTERS.filter((c) => c.number >= 13);
    } else if (typeof selectedChapterNum === 'number') {
      list = CURRICULUM_CHAPTERS.filter((c) => c.number === selectedChapterNum);
    }

    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list
      .map((ch) => ({
        ...ch,
        units: ch.units.filter(
          (u) =>
            u.title.toLowerCase().includes(q) ||
            u.subtitle.toLowerCase().includes(q) ||
            u.lessons.some(
              (l) =>
                l.title.toLowerCase().includes(q) ||
                l.subtitle.toLowerCase().includes(q) ||
                l.exercises.some(
                  (ex) =>
                    ex.title.toLowerCase().includes(q) ||
                    (ex.infoTitle && ex.infoTitle.toLowerCase().includes(q)) ||
                    (ex.question && ex.question.toLowerCase().includes(q)) ||
                    (ex.infoLines && ex.infoLines.some((ln) => ln.toLowerCase().includes(q)))
                )
            )
        ),
      }))
      .filter((ch) => ch.units.length > 0);
  }, [selectedChapterNum, searchQuery]);

  const handleJumpToChapter = (ch: CurriculumChapter) => {
    setSelectedChapterNum(ch.number);
    const startPage = ch.units[0]?.pageStart || 1;
    setPdfPageAnchor(startPage);
  };

  return (
    <div className="space-y-8">
      {/* Studio Header */}
      <div className="border-b border-slate-200 pb-5 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-slate-500 tabular-nums">
            SANSKRITAM — COMPLETE CURRICULUM PDF EDITION · 17 CHAPTERS · 60 UNITS · 161 PAGES
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Curriculum PDF Book Viewer & Export Studio
          </h2>
        </div>

        {/* Actions: View Toggle, Answer Key Toggle, Print, Download PDF */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            <button
              type="button"
              onClick={() => setViewMode('book_pages')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'book_pages'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Typeset Book Pages
            </button>
            <button
              type="button"
              onClick={() => setViewMode('embedded_pdf')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'embedded_pdf'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Embedded PDF File (161p)
            </button>
          </div>

          {viewMode === 'book_pages' && (
            <button
              type="button"
              onClick={() => setShowAnswerKeys((prev) => !prev)}
              className="px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-400 rounded-lg flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {showAnswerKeys ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              {showAnswerKeys ? 'Answer Keys Shown' : 'Answer Keys Hidden'}
            </button>
          )}

          <button
            type="button"
            onClick={() => window.print()}
            className="px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:border-slate-400 rounded-lg flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / Export View
          </button>

          <a
            href="/Sanskritam-Curriculum.pdf"
            download="Sanskritam-Curriculum-17-Chapters.pdf"
            className="px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF (161 Pages)
          </a>
        </div>
      </div>

      {/* Two-Zone Layout: Left 67% Book / PDF Stage, Right 33% Table of Contents & Filter Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Stage */}
        <div className="lg:col-span-8 space-y-6">
          {/* Quick Filter Bar */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  setSelectedChapterNum('new_only');
                  setPdfPageAnchor(138);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedChapterNum === 'new_only'
                    ? 'border-sky-600 bg-sky-700 text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'
                }`}
              >
                New Chapters 13–17 (Units 46–60 · p.138–161)
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedChapterNum('all');
                  setPdfPageAnchor(1);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedChapterNum === 'all'
                    ? 'border-sky-600 bg-sky-700 text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'
                }`}
              >
                All 17 Chapters (Units 1–60 · p.1–161)
              </button>
            </div>

            <div className="relative flex-1 min-w-[200px] max-w-xs">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sūtras, verses, terms..."
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-600"
              />
            </div>
          </div>

          {viewMode === 'embedded_pdf' ? (
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="px-6 py-3 bg-slate-900 text-slate-100 flex items-center justify-between text-xs font-mono">
                <span>FILE: /Sanskritam-Curriculum.pdf (161 Pages · Chapters 1–17)</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPdfPageAnchor(1)}
                    className="text-sky-400 hover:underline cursor-pointer"
                  >
                    Jump to Cover (p.1)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPdfPageAnchor(138)}
                    className="text-emerald-400 hover:underline cursor-pointer"
                  >
                    Jump to New Ch.13–17 (p.138)
                  </button>
                </div>
              </div>
              <object
                key={pdfPageAnchor}
                data={`/Sanskritam-Curriculum.pdf#page=${pdfPageAnchor}`}
                type="application/pdf"
                className="w-full h-[780px] border-0"
              >
                <div className="p-8 text-center space-y-4">
                  <p className="text-sm text-slate-600">
                    Your browser’s inline PDF plugin is restricted in this sandboxed frame. Use the button below to download the complete 161-page PDF directly, or switch to the Typeset Book Pages view.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href="/Sanskritam-Curriculum.pdf"
                      download="Sanskritam-Curriculum-17-Chapters.pdf"
                      className="px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg inline-flex items-center gap-1.5"
                    >
                      <Download className="w-4 h-4" />
                      Download Updated PDF (161 Pages)
                    </a>
                    <button
                      type="button"
                      onClick={() => setViewMode('book_pages')}
                      className="px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                    >
                      Switch to Typeset Book View
                    </button>
                  </div>
                </div>
              </object>
            </div>
          ) : (
            /* Typeset Book Pages matching the exact PDF export format */
            <div className="space-y-8">
              {visibleChapters.map((ch) => (
                <article
                  key={ch.id}
                  className="bg-white border border-slate-200 rounded-xl p-8 md:p-10 space-y-8 print:border-0 print:p-0"
                >
                  {/* Top-Right Running Header matching PDF */}
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono border-b border-slate-100 pb-3">
                    <span>CHAPTER {String(ch.number).padStart(2, '0')} OF 17</span>
                    <span>Sanskritam — Complete Curriculum</span>
                  </div>

                  {/* Chapter Title Block */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-bold text-slate-900 font-devanagari">
                      Chapter {ch.number} — {ch.title} / {ch.sanskritTitle}
                    </h3>
                    <p className="text-base italic text-slate-600 font-devanagari">{ch.subtitle}</p>
                  </div>

                  {/* Units */}
                  <div className="space-y-8">
                    {ch.units.map((u) => (
                      <div key={u.id} className="space-y-5 pt-4 border-t border-slate-200">
                        <div className="flex items-baseline justify-between gap-4">
                          <div>
                            <h4 className="text-lg font-bold text-slate-900 font-devanagari">
                              Unit {u.number} — {u.title}
                            </h4>
                            <p className="text-sm italic text-slate-500 font-devanagari">
                              {u.subtitle}
                            </p>
                          </div>
                          <span className="text-xs font-mono text-slate-400 tabular-nums shrink-0">
                            PDF p.{u.pageStart}
                          </span>
                        </div>

                        {/* Lessons */}
                        <div className="space-y-6">
                          {u.lessons.map((les) => (
                            <div key={les.id} className="space-y-4">
                              <div>
                                <div className="text-base font-bold text-slate-900 font-devanagari">
                                  Lesson {les.number} — {les.title}
                                </div>
                                <div className="text-xs italic text-slate-500 font-devanagari">
                                  {les.subtitle}
                                </div>
                              </div>

                              {/* Exercises */}
                              <div className="space-y-4 divide-y divide-slate-100">
                                {les.exercises.map((ex) => (
                                  <div key={ex.id} className="pt-4 space-y-2.5">
                                    <div className="flex items-center justify-between">
                                      <span className="text-xs font-mono font-bold text-amber-800 tracking-wide">
                                        {ex.title}
                                      </span>
                                      {(ex.audioSample || ex.letter || ex.audioPlayed) && (
                                        <button
                                          type="button"
                                          onClick={() =>
                                            soundEngine.speakSanskrit(
                                              ex.audioSample || ex.letter || ex.audioPlayed || ''
                                            )
                                          }
                                          className="text-xs text-sky-700 hover:underline flex items-center gap-1 cursor-pointer"
                                        >
                                          <Volume2 className="w-3.5 h-3.5" />
                                          Listen
                                        </button>
                                      )}
                                    </div>

                                    {/* Letter Card in Book View */}
                                    {ex.type === 'letter_card' && (
                                      <div className="space-y-1.5 text-sm font-devanagari">
                                        <div className="flex items-baseline gap-3">
                                          <span className="text-4xl font-bold text-slate-900">
                                            {ex.letter}
                                          </span>
                                          <span className="text-slate-600">
                                            {ex.pronunciationGuide} · {ex.hindiExample}
                                          </span>
                                        </div>
                                        <div>
                                          <span className="font-semibold">Meaning: </span>
                                          {ex.meaning}
                                        </div>
                                        <div className="italic text-slate-600">{ex.lore}</div>
                                        <div>
                                          <span className="font-semibold">Deity: </span>
                                          {ex.deity}
                                        </div>
                                        <div>
                                          <span className="font-semibold">Articulation: </span>
                                          {ex.articulationPoint}
                                        </div>
                                      </div>
                                    )}

                                    {/* Info Card in Book View */}
                                    {ex.type === 'info_card' && (
                                      <div className="space-y-1.5 text-sm font-devanagari">
                                        <div className="font-semibold text-slate-900">
                                          {ex.infoTitle}
                                        </div>
                                        <ul className="space-y-1.5 pl-3">
                                          {ex.infoLines?.map((ln, i) => (
                                            <li key={i} className="text-slate-800 leading-relaxed">
                                              {ln}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {/* Meditation in Book View */}
                                    {ex.type === 'meditation' && (
                                      <div className="space-y-1 text-sm font-devanagari">
                                        <div className="font-semibold">
                                          Duration: {ex.durationSeconds} seconds · {ex.sanskritPrompt}
                                        </div>
                                        <div className="text-slate-700">{ex.hindiPrompt}</div>
                                        <div className="text-slate-600">{ex.englishPrompt}</div>
                                      </div>
                                    )}

                                    {/* Quiz / Listening / Memory in Book View */}
                                    {(ex.type === 'quiz' ||
                                      ex.type === 'listening' ||
                                      ex.type === 'memory') && (
                                      <div className="space-y-1.5 text-sm font-devanagari">
                                        {ex.memorizeItems && (
                                          <div className="p-2.5 bg-slate-50 rounded border border-slate-200 text-xs space-y-1">
                                            <div className="font-semibold text-slate-700">
                                              Memorize ({ex.memorizeSeconds}s):
                                            </div>
                                            {ex.memorizeItems.map((m, mi) => (
                                              <div key={mi}>• {m}</div>
                                            ))}
                                          </div>
                                        )}
                                        <div className="font-semibold text-slate-900">
                                          Question: {ex.question}
                                        </div>
                                        <ul className="space-y-1 pl-4">
                                          {ex.options?.map((opt, oIdx) => {
                                            const isAns = oIdx === ex.correctIndex;
                                            return (
                                              <li
                                                key={oIdx}
                                                className={
                                                  showAnswerKeys && isAns
                                                    ? 'font-bold text-emerald-800'
                                                    : 'text-slate-700'
                                                }
                                              >
                                                {String.fromCharCode(65 + oIdx)}. {opt}{' '}
                                                {showAnswerKeys && isAns && ' ✓ CORRECT'}
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      </div>
                                    )}

                                    {/* Match the Pairs in Book View */}
                                    {ex.type === 'match' && (
                                      <div className="space-y-1.5 text-sm font-devanagari">
                                        <div className="font-semibold text-slate-900">
                                          Prompt: {ex.matchPrompt}
                                        </div>
                                        <ul className="space-y-1 pl-4">
                                          {ex.pairs?.map((p, pIdx) => (
                                            <li key={pIdx} className="text-slate-800">
                                              • {p.left}{' '}
                                              {showAnswerKeys ? (
                                                <span className="font-semibold text-emerald-800">
                                                  → {p.right}
                                                </span>
                                              ) : (
                                                <span className="text-slate-400">→ [Match]</span>
                                              )}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {/* Order / Sequence Recital in Book View */}
                                    {ex.type === 'order' && (
                                      <div className="space-y-1.5 text-sm font-devanagari">
                                        <div className="font-semibold text-slate-900">
                                          {ex.orderPrompt}
                                        </div>
                                        <ul className="space-y-1 pl-4">
                                          {ex.orderItems?.map((it, iIdx) => (
                                            <li key={iIdx} className="text-slate-800">
                                              • {it}
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Right Deck: Complete 17-Chapter Table of Contents & Jump Index */}
        <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-6 space-y-5 sticky top-20">
          <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Complete Table of Contents
              </h3>
              <p className="text-xs text-slate-500">17 Chapters · 60 Units · 161 PDF Pages</p>
            </div>
          </div>

          <div className="divide-y divide-slate-200 max-h-[640px] overflow-y-auto pr-1">
            {CURRICULUM_CHAPTERS.map((ch) => {
              const isNew = ch.number >= 13;
              const isSelected = selectedChapterNum === ch.number;
              return (
                <div key={ch.id} className="py-2.5 first:pt-0 last:pb-0">
                  <button
                    type="button"
                    onClick={() => handleJumpToChapter(ch)}
                    className={`w-full text-left p-2 rounded-lg transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-sky-50 border border-sky-200'
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono tabular-nums">
                      <span className={isNew ? 'text-sky-700 font-bold' : 'text-slate-500'}>
                        CH.{String(ch.number).padStart(2, '0')} {isNew ? '· NEW MODULE' : ''}
                      </span>
                      <span className="text-slate-400">p.{ch.units[0]?.pageStart}</span>
                    </div>
                    <div className="text-sm font-semibold text-slate-900 font-devanagari mt-0.5">
                      {ch.title} / {ch.sanskritTitle}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {ch.units.length} {ch.units.length === 1 ? 'Unit' : 'Units'} (
                      {ch.units.map((u) => `U${u.number}`).join(', ')})
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
};

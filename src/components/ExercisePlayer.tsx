import React, { useState, useEffect } from 'react';
import { Volume2, Play, RotateCcw, CheckCircle2, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';
import { CurriculumExercise } from '../data/curriculumData';
import { soundEngine } from '../utils/soundEngine';

interface ExercisePlayerProps {
  exercise: CurriculumExercise;
  exerciseIndex: number;
  totalExercises: number;
  onComplete: () => void;
  onNext: () => void;
  isCompleted: boolean;
}

export const ExercisePlayer: React.FC<ExercisePlayerProps> = ({
  exercise,
  exerciseIndex,
  totalExercises,
  onComplete,
  onNext,
  isCompleted,
}) => {
  // Meditation state
  const [meditationLeft, setMeditationLeft] = useState<number>(exercise.durationSeconds || 6);
  const [meditationRunning, setMeditationRunning] = useState<boolean>(false);

  // Listening state
  const [listeningRevealed, setListeningRevealed] = useState<boolean>(false);

  // Quiz state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Memory state
  const [memoryPhase, setMemoryPhase] = useState<'memorize' | 'question'>('memorize');
  const [memoryTimer, setMemoryTimer] = useState<number>(exercise.memorizeSeconds || 7);

  // Match state
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<number, number>>({});
  const [shuffledRight, setShuffledRight] = useState<{ text: string; origIdx: number }[]>([]);
  const [matchError, setMatchError] = useState<boolean>(false);

  // Order state
  const [availableOrderItems, setAvailableOrderItems] = useState<string[]>([]);
  const [pickedOrderItems, setPickedOrderItems] = useState<string[]>([]);
  const [orderSubmitted, setOrderSubmitted] = useState<boolean>(false);

  // Reset state when exercise changes
  useEffect(() => {
    setMeditationLeft(exercise.durationSeconds || 6);
    setMeditationRunning(false);
    setListeningRevealed(false);
    setSelectedOption(null);
    setQuizSubmitted(false);
    setMemoryPhase('memorize');
    setMemoryTimer(exercise.memorizeSeconds || 7);
    setSelectedLeft(null);
    setMatchedPairs({});
    setMatchError(false);
    setOrderSubmitted(false);

    if (exercise.type === 'match' && exercise.pairs) {
      const items = exercise.pairs.map((p, idx) => ({ text: p.right, origIdx: idx }));
      // Deterministic shuffle based on exercise id
      const rotated = [...items].sort((a, b) => a.text.localeCompare(b.text));
      setShuffledRight(rotated);
    }

    if (exercise.type === 'order' && exercise.orderItems) {
      const reversed = [...exercise.orderItems].reverse();
      setAvailableOrderItems(reversed);
      setPickedOrderItems([]);
    }
  }, [exercise]);

  // Meditation countdown
  useEffect(() => {
    if (!meditationRunning) return;
    if (meditationLeft <= 0) {
      setMeditationRunning(false);
      soundEngine.playMeditationBell();
      onComplete();
      return;
    }
    const timer = window.setTimeout(() => {
      setMeditationLeft((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [meditationRunning, meditationLeft, onComplete]);

  // Memory countdown
  useEffect(() => {
    if (exercise.type !== 'memory' || memoryPhase !== 'memorize') return;
    if (memoryTimer <= 0) {
      setMemoryPhase('question');
      return;
    }
    const timer = window.setTimeout(() => {
      setMemoryTimer((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [exercise.type, memoryPhase, memoryTimer]);

  const handleSelectQuizOption = (idx: number) => {
    setSelectedOption(idx);
    setQuizSubmitted(true);
    if (idx === exercise.correctIndex) {
      soundEngine.playResonanceTone(392, 0.35);
      onComplete();
    } else {
      soundEngine.playResonanceTone(180, 0.25);
    }
  };

  const handlePairRightClick = (rightOrigIdx: number) => {
    if (selectedLeft === null) return;
    if (selectedLeft === rightOrigIdx) {
      const next = { ...matchedPairs, [selectedLeft]: rightOrigIdx };
      setMatchedPairs(next);
      setSelectedLeft(null);
      setMatchError(false);
      soundEngine.playResonanceTone(349.23, 0.3);
      if (exercise.pairs && Object.keys(next).length === exercise.pairs.length) {
        onComplete();
      }
    } else {
      setMatchError(true);
      soundEngine.playResonanceTone(165, 0.25);
    }
  };

  const handlePickOrderItem = (item: string) => {
    const nextPicked = [...pickedOrderItems, item];
    const nextAvail = availableOrderItems.filter((i) => i !== item);
    setPickedOrderItems(nextPicked);
    setAvailableOrderItems(nextAvail);
    soundEngine.playResonanceTone(293.66, 0.2);

    if (exercise.orderItems && nextPicked.length === exercise.orderItems.length) {
      setOrderSubmitted(true);
      const isCorrect = nextPicked.every((val, i) => val === exercise.orderItems![i]);
      if (isCorrect) {
        soundEngine.playMeditationBell();
        onComplete();
      }
    }
  };

  const resetOrder = () => {
    if (!exercise.orderItems) return;
    setAvailableOrderItems([...exercise.orderItems].reverse());
    setPickedOrderItems([]);
    setOrderSubmitted(false);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
      {/* Header Metadata Bar (Zero-Pill Unboxed Text) */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs text-slate-600 font-mono tabular-nums">
          <span>{exercise.title}</span>
          <span aria-hidden="true">·</span>
          <span>
            Step {exerciseIndex + 1} of {totalExercises}
          </span>
        </div>
        <div className="text-xs font-mono tabular-nums">
          {isCompleted ? (
            <span className="text-emerald-700 font-semibold">● NOMINAL / COMPLETED</span>
          ) : (
            <span className="text-sky-700 font-semibold">● ACTIVE STAGE</span>
          )}
        </div>
      </div>

      {/* 1. MEDITATION EXERCISE */}
      {exercise.type === 'meditation' && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-50 border border-slate-200 rounded-lg p-6">
            <div className="space-y-2 max-w-xl">
              <h3 className="text-xl font-semibold text-slate-900 font-devanagari">
                {exercise.sanskritPrompt}
              </h3>
              <p className="text-base text-slate-700 font-devanagari">{exercise.hindiPrompt}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{exercise.englishPrompt}</p>
            </div>

            <div className="flex flex-col items-center shrink-0">
              <div className="w-28 h-28 rounded-full border-2 border-sky-600 flex flex-col items-center justify-center bg-white">
                <span className="text-3xl font-bold font-mono tabular-nums text-slate-900">
                  {meditationLeft}s
                </span>
                <span className="text-xs text-slate-500">ध्यान काल</span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playMeditationBell();
                    setMeditationLeft(exercise.durationSeconds || 6);
                    setMeditationRunning(true);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5" />
                  {meditationRunning ? 'Breathing...' : 'Begin Dhyaan (Chime)'}
                </button>
                {!isCompleted && (
                  <button
                    type="button"
                    onClick={() => {
                      soundEngine.playMeditationBell();
                      setMeditationLeft(0);
                      onComplete();
                    }}
                    className="px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Mark Ready
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. LETTER CARD EXERCISE */}
      {exercise.type === 'letter_card' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Phoneme Showcase Box */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-lg p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs text-slate-500 font-mono mb-2">
                  PHONEME SPECIMEN · {exercise.articulationPoint}
                </div>
                <div className="flex items-baseline gap-4 my-4">
                  <span className="text-7xl font-bold text-slate-900 font-devanagari select-all">
                    {exercise.letter}
                  </span>
                  <div>
                    <div className="text-xl font-semibold text-sky-700 font-mono">
                      {exercise.transliteration} · {exercise.pronunciationGuide}
                    </div>
                    <div className="text-sm text-slate-600 font-devanagari mt-1">
                      {exercise.hindiExample}
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  soundEngine.speakSanskrit(exercise.letter || 'अ');
                  onComplete();
                }}
                className="w-full py-2.5 px-4 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Pronounce {exercise.letter} ({exercise.transliteration})
              </button>
            </div>

            {/* Meaning, Deity & Articulation Details */}
            <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-slate-500">Meaning & Principle</div>
                  <div className="text-base font-semibold text-slate-900 font-devanagari">
                    {exercise.meaning}
                  </div>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">{exercise.lore}</p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-500">Presiding Deity / अधिष्ठातृ देवता</div>
                  <div className="text-sm font-semibold text-slate-900 font-devanagari">
                    {exercise.deity}
                  </div>
                  <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                    {exercise.deityLore}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-500">Articulation Mechanics (उच्चारण स्थान)</div>
                  <div className="text-sm font-semibold text-slate-900">
                    {exercise.articulationPoint}
                  </div>
                  <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                    {exercise.articulationDetail}
                  </p>
                </div>
              </div>

              {exercise.exampleWords && exercise.exampleWords.length > 0 && (
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-500 mb-2">Example Words (Click to hear):</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {exercise.exampleWords.map((w, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          soundEngine.speakSanskrit(w.sanskrit);
                          onComplete();
                        }}
                        className="text-left p-2.5 rounded-lg border border-slate-200 hover:border-sky-600 bg-slate-50/60 transition-colors cursor-pointer"
                      >
                        <div className="text-base font-semibold text-slate-900 font-devanagari flex items-center justify-between">
                          <span>{w.sanskrit}</span>
                          <Volume2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                        </div>
                        <div className="text-xs text-slate-600 mt-0.5">
                          {w.translit} — {w.meaning}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. INFO CARD EXERCISE */}
      {exercise.type === 'info_card' && (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-slate-900 font-devanagari">
              {exercise.infoTitle}
            </h3>
            {exercise.audioSample && (
              <button
                type="button"
                onClick={() => {
                  soundEngine.speakSanskrit(exercise.audioSample!);
                  onComplete();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Listen to Recitation
              </button>
            )}
          </div>

          <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg bg-slate-50/50">
            {exercise.infoLines?.map((line, idx) => (
              <div
                key={idx}
                className="p-3.5 flex items-start justify-between gap-4 hover:bg-white transition-colors"
              >
                <div className="text-sm text-slate-800 font-devanagari leading-relaxed">
                  <span className="font-mono text-xs text-slate-400 mr-2.5 tabular-nums">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  {line}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.speakSanskrit(line.split('=')[0].split('→')[0]);
                    onComplete();
                  }}
                  className="p-1.5 text-slate-500 hover:text-sky-700 rounded transition-colors shrink-0 cursor-pointer"
                  title="Pronounce line"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {!isCompleted && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onComplete}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                Acknowledge & Complete Concept
              </button>
            </div>
          )}
        </div>
      )}

      {/* 4. LISTENING (SHRUTI) & 5. QUIZ & 6. MEMORY QUIZ */}
      {(exercise.type === 'listening' || exercise.type === 'quiz' || exercise.type === 'memory') && (
        <div className="space-y-6">
          {/* Memory Phase Box */}
          {exercise.type === 'memory' && (
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-600">
                  SMRITI FLASH MEMORIZATION · {memoryPhase === 'memorize' ? `Remaining: ${memoryTimer}s` : 'Recall Active'}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    if (memoryPhase === 'memorize') {
                      setMemoryPhase('question');
                    } else {
                      setMemoryTimer(exercise.memorizeSeconds || 7);
                      setMemoryPhase('memorize');
                    }
                  }}
                  className="text-xs font-medium text-sky-700 hover:underline cursor-pointer"
                >
                  {memoryPhase === 'memorize' ? 'Skip to Question →' : 'Peek Study Notes'}
                </button>
              </div>
              {memoryPhase === 'memorize' && (
                <ul className="space-y-2">
                  {exercise.memorizeItems?.map((item, i) => (
                    <li key={i} className="text-sm font-medium text-slate-800 font-devanagari">
                      • {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Audio Prompt Button if present */}
          {exercise.audioPlayed && (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-500">श्रुति (Shruti) — Listen First</div>
                <div className="text-sm font-medium text-slate-800 font-devanagari mt-0.5">
                  Tap play to hear the Sanskrit sound: <span className="font-bold">{exercise.audioPlayed}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  soundEngine.speakSanskrit(exercise.audioPlayed!);
                  setListeningRevealed(true);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Volume2 className="w-4 h-4" />
                Play Audio ({exercise.audioPlayed})
              </button>
            </div>
          )}

          {exercise.revealText && listeningRevealed && (
            <div className="p-4 bg-sky-50/70 border border-sky-200 rounded-lg text-sm text-slate-800 font-devanagari">
              {exercise.revealText}
            </div>
          )}

          {/* Question & Multiple Choice Options */}
          {(exercise.type !== 'memory' || memoryPhase === 'question') && (
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-slate-900 font-devanagari">
                {exercise.question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {exercise.options?.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === exercise.correctIndex;
                  let btnStyle = 'border-slate-200 bg-white hover:border-slate-400 text-slate-800';
                  if (quizSubmitted) {
                    if (isCorrect) {
                      btnStyle = 'border-emerald-600 bg-emerald-50/70 text-emerald-950 font-semibold';
                    } else if (isSelected && !isCorrect) {
                      btnStyle = 'border-red-600 bg-red-50/70 text-red-950';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectQuizOption(idx)}
                      className={`p-4 rounded-lg border text-left transition-colors flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                    >
                      <span className="text-sm font-devanagari">
                        <span className="font-mono text-xs text-slate-400 mr-2">
                          {String.fromCharCode(65 + idx)}.
                        </span>
                        {opt}
                      </span>
                      {quizSubmitted && isCorrect && (
                        <span className="text-xs font-mono text-emerald-700 whitespace-nowrap shrink-0 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          ✓ CORRECT
                        </span>
                      )}
                      {quizSubmitted && isSelected && !isCorrect && (
                        <span className="text-xs font-mono text-red-700 whitespace-nowrap shrink-0 flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4" />
                          ▲ RETRY
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 7. MATCH THE PAIRS EXERCISE */}
      {exercise.type === 'match' && exercise.pairs && (
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-900">{exercise.matchPrompt}</h3>
            <span className="text-xs font-mono text-slate-500 tabular-nums">
              Matched: {Object.keys(matchedPairs).length} / {exercise.pairs.length}
            </span>
          </div>

          {matchError && (
            <div className="text-xs font-mono text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
              ▲ MISMATCH DETECTED — Select a left item and click its corresponding meaning on the right.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-2.5">
              {exercise.pairs.map((pair, idx) => {
                const isMatched = matchedPairs[idx] !== undefined;
                const isSelected = selectedLeft === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isMatched}
                    onClick={() => {
                      setSelectedLeft(idx);
                      setMatchError(false);
                      soundEngine.speakSanskrit(pair.left.split('(')[0]);
                    }}
                    className={`w-full p-3.5 rounded-lg border text-left text-sm font-devanagari transition-colors flex items-center justify-between cursor-pointer ${
                      isMatched
                        ? 'border-emerald-600 bg-emerald-50/60 text-emerald-900 font-semibold'
                        : isSelected
                        ? 'border-sky-600 bg-sky-50 text-sky-950 font-semibold'
                        : 'border-slate-200 bg-white hover:border-slate-400 text-slate-800'
                    }`}
                  >
                    <span>{pair.left}</span>
                    <span className="text-xs font-mono">
                      {isMatched ? '✓ MATCHED' : isSelected ? '● SELECTED' : 'Select →'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-2.5">
              {shuffledRight.map((item, idx) => {
                const isMatched = Object.values(matchedPairs).includes(item.origIdx);
                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isMatched}
                    onClick={() => handlePairRightClick(item.origIdx)}
                    className={`w-full p-3.5 rounded-lg border text-left text-sm font-devanagari transition-colors flex items-center justify-between cursor-pointer ${
                      isMatched
                        ? 'border-emerald-600 bg-emerald-50/60 text-emerald-900 font-semibold'
                        : 'border-slate-200 bg-slate-50/70 hover:border-sky-600 hover:bg-white text-slate-800'
                    }`}
                  >
                    <span>{item.text}</span>
                    {isMatched && <span className="text-xs font-mono text-emerald-700">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 8. TAP IN ORDER / SEQUENCE RECITAL */}
      {exercise.type === 'order' && exercise.orderItems && (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-base font-semibold text-slate-900">{exercise.orderPrompt}</h3>
            <button
              type="button"
              onClick={resetOrder}
              className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Sequence
            </button>
          </div>

          {/* Constructed Sequence */}
          <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 min-h-[68px] flex flex-wrap items-center gap-2">
            {pickedOrderItems.length === 0 ? (
              <span className="text-xs text-slate-400">
                Tap the items below in their canonical Sanskrit sequence...
              </span>
            ) : (
              pickedOrderItems.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-md bg-white border border-slate-300 text-sm font-devanagari font-medium text-slate-900"
                >
                  {item}
                </div>
              ))
            )}
          </div>

          {/* Available Choices */}
          <div className="flex flex-wrap gap-2.5">
            {availableOrderItems.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handlePickOrderItem(item)}
                className="px-4 py-2.5 rounded-lg border border-slate-200 bg-white hover:border-sky-600 text-sm font-devanagari text-slate-800 transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>

          {orderSubmitted && (
            <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-mono">
              {pickedOrderItems.every((val, i) => val === exercise.orderItems![i]) ? (
                <span className="text-emerald-700 font-semibold">
                  ● SEQUENCE VERIFIED — Canonical krama-pāṭha order achieved.
                </span>
              ) : (
                <span className="text-amber-700 font-semibold">
                  ▲ ORDER MISMATCH — Click "Reset Sequence" to arrange in exact progression.
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Bottom Navigation Footer */}
      <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
        <div className="text-xs text-slate-500">
          Tip: Click any Sanskrit term or speaker icon for instant pronunciation.
        </div>
        <button
          type="button"
          onClick={onNext}
          className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span>{exerciseIndex + 1 < totalExercises ? 'Next Exercise' : 'Complete Lesson'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

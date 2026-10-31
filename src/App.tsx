import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import {
  Volume2,
  VolumeX,
  CheckCircle2,
  BookOpen,
  Compass,
  Cpu,
  Music,
  Table2,
  FileText,
  Download,
  Clock,
  Bookmark,
  Layers,
  Mic,
  MicOff,
  X,
} from 'lucide-react';
import { CURRICULUM_CHAPTERS } from './data/curriculumData';
import { ExercisePlayer } from './components/ExercisePlayer';
import { PhoneticsLab } from './components/PhoneticsLab';
import { PaniniEngine } from './components/PaniniEngine';
import { ChandasScanner } from './components/ChandasScanner';
import { ParadigmExplorer } from './components/ParadigmExplorer';
import { PdfBookStudio } from './components/PdfBookStudio';
import { soundEngine } from './utils/soundEngine';

type WorkspaceTab = 'curriculum' | 'phonetics' | 'panini' | 'chandas' | 'paradigms' | 'pdf_book';
type VolumeFilterId = 'all' | 'vol1' | 'vol2' | 'vol3' | 'vol4';

interface CurriculumVolume {
  id: Exclude<VolumeFilterId, 'all'>;
  number: string;
  sanskritLabel: string;
  title: string;
  chapterRange: [number, number];
  pages: string;
}

const CURRICULUM_VOLUMES: CurriculumVolume[] = [
  {
    id: 'vol1',
    number: 'Vol. I',
    sanskritLabel: 'प्रथमः खण्डः',
    title: 'Foundations, Script, Sandhi & Syntax (Ch. 1–6)',
    chapterRange: [1, 6],
    pages: 'pp. 1–50',
  },
  {
    id: 'vol2',
    number: 'Vol. II',
    sanskritLabel: 'द्वितीयः खण्डः',
    title: 'Classical Grammar, Samāsa, Chandas & Literature (Ch. 7–10)',
    chapterRange: [7, 10],
    pages: 'pp. 51–67',
  },
  {
    id: 'vol3',
    number: 'Vol. III',
    sanskritLabel: 'तृतीयः खण्डः',
    title: 'Pāṇini’s Aṣṭādhyāyī & Grand Synthesis (Ch. 11–12)',
    chapterRange: [11, 12],
    pages: 'pp. 68–137',
  },
  {
    id: 'vol4',
    number: 'Vol. IV',
    sanskritLabel: 'चतुर्थः खण्डः',
    title: 'Vedic, Darśana, Nāṭya-Kāvya, Śāstras & Dhātupāṭha (Ch. 13–17)',
    chapterRange: [13, 17],
    pages: 'pp. 138–161',
  },
];

function getVolumeForChapter(chapterNumber: number): CurriculumVolume {
  return (
    CURRICULUM_VOLUMES.find(
      (v) => chapterNumber >= v.chapterRange[0] && chapterNumber <= v.chapterRange[1]
    ) || CURRICULUM_VOLUMES[0]
  );
}

const SPOKEN_NUMBER_MAP: Record<string, number> = {
  one: 1,
  first: 1,
  ekam: 1,
  eka: 1,
  two: 2,
  second: 2,
  dve: 2,
  dvi: 2,
  three: 3,
  third: 3,
  trini: 3,
  tri: 3,
  four: 4,
  fourth: 4,
  catvari: 4,
  five: 5,
  fifth: 5,
  panca: 5,
  six: 6,
  sixth: 6,
  sat: 6,
  seven: 7,
  seventh: 7,
  sapta: 7,
  eight: 8,
  eighth: 8,
  asta: 8,
  nine: 9,
  ninth: 9,
  nava: 9,
  ten: 10,
  tenth: 10,
  dasa: 10,
  eleven: 11,
  ekadasa: 11,
  twelve: 12,
  dvadasa: 12,
  thirteen: 13,
  trayodasa: 13,
  fourteen: 14,
  caturdasa: 14,
  fifteen: 15,
  pancadasa: 15,
  sixteen: 16,
  sodasa: 16,
  seventeen: 17,
  saptadasa: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
};

function parseSpokenNumber(text: string): number | null {
  const digitMatch = text.match(/\b(\d{1,2})\b/);
  if (digitMatch) {
    return parseInt(digitMatch[1], 10);
  }
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const nextW = words[i + 1];
    if (
      (w === 'twenty' || w === 'thirty' || w === 'forty' || w === 'fifty') &&
      nextW &&
      SPOKEN_NUMBER_MAP[nextW] &&
      SPOKEN_NUMBER_MAP[nextW] < 10
    ) {
      return SPOKEN_NUMBER_MAP[w] + SPOKEN_NUMBER_MAP[nextW];
    }
    if (SPOKEN_NUMBER_MAP[w] !== undefined) {
      return SPOKEN_NUMBER_MAP[w];
    }
  }
  return null;
}

interface RecentSyllabusItem {
  id: string;
  chapterIdx: number;
  unitIdx: number;
  chapterNumber: number;
  unitNumber: number;
  title: string;
  pageStart: number;
  searchTerm?: string;
}

const RECENT_STORAGE_KEY = 'sanskritam_recent_syllabus_v1';
const BOOKMARKS_STORAGE_KEY = 'sanskritam_bookmarked_units_v1';

const DEFAULT_BOOKMARK_ITEMS: RecentSyllabusItem[] = [
  {
    id: 'ch-13-unit-47',
    chapterIdx: 12,
    unitIdx: 1,
    chapterNumber: 13,
    unitNumber: 47,
    title: 'Ṛgveda Sūktas / ऋग्वेद-सूक्तानि',
    pageStart: 141,
  },
];

const DEFAULT_RECENT_ITEMS: RecentSyllabusItem[] = [
  {
    id: 'ch-1-unit-1',
    chapterIdx: 0,
    unitIdx: 0,
    chapterNumber: 1,
    unitNumber: 1,
    title: 'अ & आ (a & aa)',
    pageStart: 4,
  },
  {
    id: 'ch-11-unit-30',
    chapterIdx: 10,
    unitIdx: 0,
    chapterNumber: 11,
    unitNumber: 30,
    title: 'Maheshvara Sutras / माहेश्वराणि सूत्राणि',
    pageStart: 69,
    searchTerm: 'Maheshvara',
  },
  {
    id: 'ch-17-unit-58',
    chapterIdx: 16,
    unitIdx: 0,
    chapterNumber: 17,
    unitNumber: 58,
    title: 'The 10 Verb Classes / दशगणी',
    pageStart: 170,
    searchTerm: 'Dhatu',
  },
];

export function App() {
  const [activeTab, setActiveTab] = useState<WorkspaceTab>('curriculum');
  const [selectedChapterIdx, setSelectedChapterIdx] = useState<number>(12);
  const [selectedUnitIdx, setSelectedUnitIdx] = useState<number>(0);
  const [selectedLessonIdx, setSelectedLessonIdx] = useState<number>(0);
  const [selectedExerciseIdx, setSelectedExerciseIdx] = useState<number>(0);
  const [completedExercises, setCompletedExercises] = useState<Record<string, boolean>>({});
  const [chapterFilter, setChapterFilter] = useState<string>('');
  const [selectedVolumeId, setSelectedVolumeId] = useState<VolumeFilterId>('all');
  const [audioVolume, setAudioVolume] = useState<number>(85);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const handleVolumeChange = (newPercent: number) => {
    setAudioVolume(newPercent);
    soundEngine.setVolume(newPercent / 100);
    if (newPercent === 0 && !isMuted) {
      setIsMuted(true);
      soundEngine.setMuted(true);
    } else if (newPercent > 0 && isMuted) {
      setIsMuted(false);
      soundEngine.setMuted(false);
    }
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundEngine.setMuted(nextMuted);
  };
  const [recentItems, setRecentItems] = useState<RecentSyllabusItem[]>(() => {
    try {
      const saved = window.localStorage.getItem(RECENT_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore storage errors
    }
    return DEFAULT_RECENT_ITEMS;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(recentItems));
    } catch {
      // ignore storage errors
    }
  }, [recentItems]);

  const [bookmarkedItems, setBookmarkedItems] = useState<RecentSyllabusItem[]>(() => {
    try {
      const saved = window.localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // ignore storage errors
    }
    return DEFAULT_BOOKMARK_ITEMS;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarkedItems));
    } catch {
      // ignore storage errors
    }
  }, [bookmarkedItems]);

  const currentChapter = CURRICULUM_CHAPTERS[selectedChapterIdx] || CURRICULUM_CHAPTERS[0];
  const currentUnit = currentChapter.units[selectedUnitIdx] || currentChapter.units[0];
  const currentLesson = currentUnit.lessons[selectedLessonIdx] || currentUnit.lessons[0];
  const currentExercise =
    currentLesson.exercises[selectedExerciseIdx] || currentLesson.exercises[0];

  const { totalUnitsCount, totalLessonsCount, allExercisesCount } = useMemo(() => {
    let uCount = 0;
    let lCount = 0;
    let eCount = 0;
    for (const ch of CURRICULUM_CHAPTERS) {
      uCount += ch.units.length;
      for (const u of ch.units) {
        lCount += u.lessons.length;
        for (const l of u.lessons) {
          eCount += l.exercises.length;
        }
      }
    }
    return { totalUnitsCount: uCount, totalLessonsCount: lCount, allExercisesCount: eCount };
  }, []);

  const completedCount = Object.keys(completedExercises).length;

  const handleMarkExerciseComplete = () => {
    setCompletedExercises((prev) => ({
      ...prev,
      [currentExercise.id]: true,
    }));
  };

  const handleNextExerciseOrLesson = () => {
    handleMarkExerciseComplete();

    if (selectedExerciseIdx + 1 < currentLesson.exercises.length) {
      setSelectedExerciseIdx(selectedExerciseIdx + 1);
      return;
    }

    if (selectedLessonIdx + 1 < currentUnit.lessons.length) {
      setSelectedLessonIdx(selectedLessonIdx + 1);
      setSelectedExerciseIdx(0);
      return;
    }

    if (selectedUnitIdx + 1 < currentChapter.units.length) {
      setSelectedUnitIdx(selectedUnitIdx + 1);
      setSelectedLessonIdx(0);
      setSelectedExerciseIdx(0);
      return;
    }

    if (selectedChapterIdx + 1 < CURRICULUM_CHAPTERS.length) {
      setSelectedChapterIdx(selectedChapterIdx + 1);
      setSelectedUnitIdx(0);
      setSelectedLessonIdx(0);
      setSelectedExerciseIdx(0);
    }
  };

  const recordRecentNavigation = (cIdx: number, uIdx: number, queryText?: string) => {
    const ch = CURRICULUM_CHAPTERS[cIdx];
    if (!ch) return;
    const u = ch.units[uIdx] || ch.units[0];
    if (!u) return;

    const itemId = `ch-${ch.number}-unit-${u.number}`;
    const trimmedQuery = queryText?.trim() ? queryText.trim() : undefined;

    setRecentItems((prev) => {
      const existing = prev.find((item) => item.id === itemId);
      const entry: RecentSyllabusItem = {
        id: itemId,
        chapterIdx: cIdx,
        unitIdx: uIdx,
        chapterNumber: ch.number,
        unitNumber: u.number,
        title: u.title,
        pageStart: u.pageStart,
        searchTerm: trimmedQuery || existing?.searchTerm,
      };
      const filtered = prev.filter((item) => item.id !== itemId);
      return [entry, ...filtered].slice(0, 6);
    });
  };

  const selectChapter = (cIdx: number, uIdx = 0) => {
    setSelectedChapterIdx(cIdx);
    setSelectedUnitIdx(uIdx);
    setSelectedLessonIdx(0);
    setSelectedExerciseIdx(0);
    setActiveTab('curriculum');
    recordRecentNavigation(cIdx, uIdx, chapterFilter);
  };

  const removeRecentItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRecentItems((prev) => prev.filter((item) => item.id !== id));
  };

  const currentUnitBookmarkId = `ch-${currentChapter.number}-unit-${currentUnit.number}`;
  const isCurrentUnitBookmarked = bookmarkedItems.some(
    (item) => item.id === currentUnitBookmarkId
  );

  const toggleCurrentUnitBookmark = () => {
    setBookmarkedItems((prev) => {
      const exists = prev.some((item) => item.id === currentUnitBookmarkId);
      if (exists) {
        return prev.filter((item) => item.id !== currentUnitBookmarkId);
      }
      const newEntry: RecentSyllabusItem = {
        id: currentUnitBookmarkId,
        chapterIdx: selectedChapterIdx,
        unitIdx: selectedUnitIdx,
        chapterNumber: currentChapter.number,
        unitNumber: currentUnit.number,
        title: currentUnit.title,
        pageStart: currentUnit.pageStart,
      };
      return [newEntry, ...prev];
    });
  };

  const removeBookmarkItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedItems((prev) => prev.filter((item) => item.id !== id));
  };

  // --- Hands-Free Web Speech API Voice Command Navigation ---
  const [isVoiceActive, setIsVoiceActive] = useState<boolean>(false);
  const [voiceTranscript, setVoiceTranscript] = useState<string>('');
  const [voiceFeedback, setVoiceFeedback] = useState<string>(
    'Say "Next lesson", "Previous lesson", "Chapter 13", "Unit 47", or "Recite"'
  );
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const voiceActiveRef = useRef<boolean>(false);
  const recognitionRef = useRef<any>(null);

  const handlePreviousLesson = useCallback(() => {
    if (selectedLessonIdx > 0) {
      setSelectedLessonIdx(selectedLessonIdx - 1);
      setSelectedExerciseIdx(0);
      return `Lesson ${currentUnit.lessons[selectedLessonIdx - 1]?.number || selectedLessonIdx}`;
    }
    if (selectedUnitIdx > 0) {
      const prevUnit = currentChapter.units[selectedUnitIdx - 1];
      const lastLessonIdx = Math.max(0, prevUnit.lessons.length - 1);
      setSelectedUnitIdx(selectedUnitIdx - 1);
      setSelectedLessonIdx(lastLessonIdx);
      setSelectedExerciseIdx(0);
      return `Unit ${prevUnit.number} · Lesson ${prevUnit.lessons[lastLessonIdx]?.number || 1}`;
    }
    if (selectedChapterIdx > 0) {
      const prevChap = CURRICULUM_CHAPTERS[selectedChapterIdx - 1];
      const lastUnitIdx = Math.max(0, prevChap.units.length - 1);
      const prevUnit = prevChap.units[lastUnitIdx];
      const lastLessonIdx = Math.max(0, prevUnit.lessons.length - 1);
      setSelectedChapterIdx(selectedChapterIdx - 1);
      setSelectedUnitIdx(lastUnitIdx);
      setSelectedLessonIdx(lastLessonIdx);
      setSelectedExerciseIdx(0);
      return `Ch.${prevChap.number} · Unit ${prevUnit.number}`;
    }
    return 'Already at first lesson of Chapter 1';
  }, [selectedLessonIdx, selectedUnitIdx, selectedChapterIdx, currentUnit, currentChapter]);

  const handleNextLesson = useCallback(() => {
    if (selectedLessonIdx + 1 < currentUnit.lessons.length) {
      const nextLes = currentUnit.lessons[selectedLessonIdx + 1];
      setSelectedLessonIdx(selectedLessonIdx + 1);
      setSelectedExerciseIdx(0);
      return `Lesson ${nextLes.number}: ${nextLes.title}`;
    }
    if (selectedUnitIdx + 1 < currentChapter.units.length) {
      const nextU = currentChapter.units[selectedUnitIdx + 1];
      setSelectedUnitIdx(selectedUnitIdx + 1);
      setSelectedLessonIdx(0);
      setSelectedExerciseIdx(0);
      return `Unit ${nextU.number}: ${nextU.title}`;
    }
    if (selectedChapterIdx + 1 < CURRICULUM_CHAPTERS.length) {
      const nextCh = CURRICULUM_CHAPTERS[selectedChapterIdx + 1];
      setSelectedChapterIdx(selectedChapterIdx + 1);
      setSelectedUnitIdx(0);
      setSelectedLessonIdx(0);
      setSelectedExerciseIdx(0);
      return `Chapter ${nextCh.number}: ${nextCh.title}`;
    }
    return 'Reached final lesson of Chapter 17';
  }, [selectedLessonIdx, selectedUnitIdx, selectedChapterIdx, currentUnit, currentChapter]);

  const executeVoiceCommand = useCallback(
    (rawSpeech: string) => {
      const text = rawSpeech.toLowerCase().trim();
      if (!text) return;
      setVoiceTranscript(rawSpeech.trim());
      setVoiceError(null);

      // 1. Recite / Chant current Sanskrit verse or prompt
      if (
        text.includes('recite') ||
        text.includes('chant') ||
        text.includes('speak') ||
        text.includes('repeat') ||
        text.includes('pronounce') ||
        text.includes('listen')
      ) {
        const sanskritToSpeak =
          currentExercise.audioSample ||
          currentExercise.audioPlayed ||
          currentExercise.sanskritPrompt ||
          currentExercise.letter ||
          currentExercise.exampleWords?.[0]?.sanskrit ||
          currentLesson.title ||
          currentChapter.sanskritTitle;
        soundEngine.speakSanskrit(sanskritToSpeak);
        setVoiceFeedback(`Reciting aloud: ${sanskritToSpeak}`);
        return;
      }

      // 2. Bookmark current unit
      if (text.includes('bookmark') || text.includes('save unit')) {
        toggleCurrentUnitBookmark();
        setVoiceFeedback(
          isCurrentUnitBookmarked
            ? `Removed bookmark for Unit ${currentUnit.number}`
            : `Bookmarked Unit ${currentUnit.number}: ${currentUnit.title}`
        );
        return;
      }

      // 3. Volume I-IV jump (e.g. "volume 4", "volume four")
      if (text.includes('volume')) {
        const volNum = parseSpokenNumber(text);
        if (volNum && volNum >= 1 && volNum <= 4) {
          const targetVol = CURRICULUM_VOLUMES[volNum - 1];
          const firstChapIdx = CURRICULUM_CHAPTERS.findIndex(
            (c) => c.number === targetVol.chapterRange[0]
          );
          if (firstChapIdx >= 0) {
            setSelectedVolumeId(targetVol.id);
            selectChapter(firstChapIdx, 0);
            soundEngine.playResonanceTone(587.33, 0.2);
            setVoiceFeedback(`Jumped to ${targetVol.number} (${targetVol.sanskritLabel})`);
            return;
          }
        }
      }

      // 4. Specific Chapter jump (e.g. "chapter 13", "next chapter", "previous chapter")
      if (text.includes('chapter') || text.includes('adhyaya')) {
        if (text.includes('next') || text.includes('forward') || text.includes('agrim')) {
          if (selectedChapterIdx + 1 < CURRICULUM_CHAPTERS.length) {
            const nextIdx = selectedChapterIdx + 1;
            selectChapter(nextIdx, 0);
            soundEngine.playResonanceTone(523.25, 0.2);
            setVoiceFeedback(
              `Next Chapter → Ch.${CURRICULUM_CHAPTERS[nextIdx].number}: ${CURRICULUM_CHAPTERS[nextIdx].title}`
            );
          } else {
            setVoiceFeedback('Already at Chapter 17');
          }
          return;
        }
        if (text.includes('previous') || text.includes('back') || text.includes('last') || text.includes('purva')) {
          if (selectedChapterIdx > 0) {
            const prevIdx = selectedChapterIdx - 1;
            selectChapter(prevIdx, 0);
            soundEngine.playResonanceTone(440, 0.2);
            setVoiceFeedback(
              `Previous Chapter → Ch.${CURRICULUM_CHAPTERS[prevIdx].number}: ${CURRICULUM_CHAPTERS[prevIdx].title}`
            );
          } else {
            setVoiceFeedback('Already at Chapter 1');
          }
          return;
        }
        const chapNum = parseSpokenNumber(text);
        if (chapNum && chapNum >= 1 && chapNum <= CURRICULUM_CHAPTERS.length) {
          const targetIdx = CURRICULUM_CHAPTERS.findIndex((c) => c.number === chapNum);
          if (targetIdx >= 0) {
            selectChapter(targetIdx, 0);
            soundEngine.playResonanceTone(523.25, 0.2);
            setVoiceFeedback(
              `Opened Chapter ${chapNum}: ${CURRICULUM_CHAPTERS[targetIdx].title}`
            );
            return;
          }
        }
      }

      // 5. Unit navigation ("next unit", "previous unit", "unit 47")
      if (text.includes('unit')) {
        if (text.includes('next') || text.includes('forward')) {
          if (selectedUnitIdx + 1 < currentChapter.units.length) {
            const nextUIdx = selectedUnitIdx + 1;
            selectChapter(selectedChapterIdx, nextUIdx);
            soundEngine.playResonanceTone(523.25, 0.2);
            setVoiceFeedback(
              `Next Unit → Unit ${currentChapter.units[nextUIdx].number}: ${currentChapter.units[nextUIdx].title}`
            );
          } else if (selectedChapterIdx + 1 < CURRICULUM_CHAPTERS.length) {
            selectChapter(selectedChapterIdx + 1, 0);
            soundEngine.playResonanceTone(523.25, 0.2);
            setVoiceFeedback(
              `Next Unit → Ch.${CURRICULUM_CHAPTERS[selectedChapterIdx + 1].number} Unit ${CURRICULUM_CHAPTERS[selectedChapterIdx + 1].units[0].number}`
            );
          } else {
            setVoiceFeedback('Already at the final unit (Unit 60)');
          }
          return;
        }
        if (text.includes('previous') || text.includes('back') || text.includes('last')) {
          if (selectedUnitIdx > 0) {
            const prevUIdx = selectedUnitIdx - 1;
            selectChapter(selectedChapterIdx, prevUIdx);
            soundEngine.playResonanceTone(440, 0.2);
            setVoiceFeedback(
              `Previous Unit → Unit ${currentChapter.units[prevUIdx].number}: ${currentChapter.units[prevUIdx].title}`
            );
          } else if (selectedChapterIdx > 0) {
            const prevCh = CURRICULUM_CHAPTERS[selectedChapterIdx - 1];
            const lastUIdx = Math.max(0, prevCh.units.length - 1);
            selectChapter(selectedChapterIdx - 1, lastUIdx);
            soundEngine.playResonanceTone(440, 0.2);
            setVoiceFeedback(
              `Previous Unit → Ch.${prevCh.number} Unit ${prevCh.units[lastUIdx].number}`
            );
          } else {
            setVoiceFeedback('Already at Unit 1');
          }
          return;
        }
        const unitNum = parseSpokenNumber(text);
        if (unitNum !== null) {
          for (let cIdx = 0; cIdx < CURRICULUM_CHAPTERS.length; cIdx++) {
            const uIdx = CURRICULUM_CHAPTERS[cIdx].units.findIndex((u) => u.number === unitNum);
            if (uIdx >= 0) {
              selectChapter(cIdx, uIdx);
              soundEngine.playResonanceTone(523.25, 0.2);
              setVoiceFeedback(
                `Opened Unit ${unitNum}: ${CURRICULUM_CHAPTERS[cIdx].units[uIdx].title}`
              );
              return;
            }
          }
        }
      }

      // 6. Lesson navigation ("next lesson", "previous lesson", "lesson 2")
      if (text.includes('lesson') || text.includes('patha')) {
        if (text.includes('next') || text.includes('forward') || text.includes('agrim')) {
          const dest = handleNextLesson();
          soundEngine.playResonanceTone(523.25, 0.2);
          setVoiceFeedback(`Next Lesson → ${dest}`);
          return;
        }
        if (text.includes('previous') || text.includes('back') || text.includes('last') || text.includes('purva')) {
          const dest = handlePreviousLesson();
          soundEngine.playResonanceTone(440, 0.2);
          setVoiceFeedback(`Previous Lesson → ${dest}`);
          return;
        }
        const lesNum = parseSpokenNumber(text);
        if (lesNum !== null && lesNum >= 1 && lesNum <= currentUnit.lessons.length) {
          setSelectedLessonIdx(lesNum - 1);
          setSelectedExerciseIdx(0);
          soundEngine.playResonanceTone(523.25, 0.2);
          setVoiceFeedback(
            `Opened Lesson ${currentUnit.lessons[lesNum - 1].number}: ${currentUnit.lessons[lesNum - 1].title}`
          );
          return;
        }
      }

      // 7. Exercise / General "next" or "previous" commands
      if (
        text === 'next' ||
        text.includes('next exercise') ||
        text.includes('continue') ||
        text.includes('advance')
      ) {
        handleNextExerciseOrLesson();
        soundEngine.playResonanceTone(523.25, 0.2);
        setVoiceFeedback('Advanced to next exercise / lesson');
        return;
      }

      if (
        text === 'previous' ||
        text === 'back' ||
        text.includes('previous exercise') ||
        text.includes('go back')
      ) {
        if (selectedExerciseIdx > 0) {
          setSelectedExerciseIdx(selectedExerciseIdx - 1);
          soundEngine.playResonanceTone(440, 0.2);
          setVoiceFeedback(`Returned to Exercise ${selectedExerciseIdx}`);
        } else {
          const dest = handlePreviousLesson();
          soundEngine.playResonanceTone(440, 0.2);
          setVoiceFeedback(`Returned to ${dest}`);
        }
        return;
      }

      setVoiceFeedback(
        `Unrecognized command "${rawSpeech.trim()}". Try "Next lesson", "Previous lesson", "Chapter 13", "Unit 47", or "Recite".`
      );
    },
    [
      currentChapter,
      currentUnit,
      currentLesson,
      currentExercise,
      selectedChapterIdx,
      selectedUnitIdx,
      selectedExerciseIdx,
      isCurrentUnitBookmarked,
      handleNextLesson,
      handlePreviousLesson,
    ]
  );

  const executeVoiceCommandRef = useRef(executeVoiceCommand);
  useEffect(() => {
    executeVoiceCommandRef.current = executeVoiceCommand;
  }, [executeVoiceCommand]);

  const toggleVoiceCommands = () => {
    if (isVoiceActive) {
      voiceActiveRef.current = false;
      setIsVoiceActive(false);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore stop error
        }
      }
      setVoiceFeedback('Voice navigation paused');
      return;
    }

    const SpeechRecognitionAPI =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    voiceActiveRef.current = true;
    setIsVoiceActive(true);
    setVoiceError(null);

    if (!SpeechRecognitionAPI) {
      setVoiceError(
        'Web Speech API is not supported in this browser. Use the quick voice command triggers below.'
      );
      return;
    }

    try {
      const recognition = new SpeechRecognitionAPI();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const lastIdx = event.results.length - 1;
        const transcript = event.results[lastIdx]?.[0]?.transcript;
        if (transcript) {
          executeVoiceCommandRef.current(transcript);
        }
      };

      recognition.onerror = (event: any) => {
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setVoiceError(
            'Microphone permission denied or blocked. You can still test voice commands using the buttons below.'
          );
          voiceActiveRef.current = false;
        } else if (event.error !== 'no-speech' && event.error !== 'aborted') {
          setVoiceError(`Speech recognition notice: ${event.error}`);
        }
      };

      recognition.onend = () => {
        if (voiceActiveRef.current) {
          try {
            recognition.start();
          } catch {
            // ignore restart race
          }
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
      soundEngine.playResonanceTone(523.25, 0.15);
      setVoiceFeedback(
        'Listening hands-free... Say "Next lesson", "Previous lesson", "Chapter 1..17", "Unit 1..60", or "Recite"'
      );
    } catch {
      setVoiceError(
        'Could not initialize microphone stream. Use the quick voice command buttons below.'
      );
    }
  };

  useEffect(() => {
    return () => {
      voiceActiveRef.current = false;
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  const filteredChapters = useMemo(() => {
    const q = chapterFilter.trim().toLowerCase();
    const activeVol =
      selectedVolumeId === 'all'
        ? null
        : CURRICULUM_VOLUMES.find((v) => v.id === selectedVolumeId) || null;

    return CURRICULUM_CHAPTERS.map((ch, idx) => ({ ch, idx })).filter(({ ch }) => {
      if (
        activeVol &&
        (ch.number < activeVol.chapterRange[0] || ch.number > activeVol.chapterRange[1])
      ) {
        return false;
      }
      if (!q) return true;
      return (
        ch.title.toLowerCase().includes(q) ||
        ch.sanskritTitle.toLowerCase().includes(q) ||
        ch.subtitle.toLowerCase().includes(q) ||
        ch.units.some((u) => u.title.toLowerCase().includes(q) || String(u.number) === q)
      );
    });
  }, [chapterFilter, selectedVolumeId]);

  const currentVolume = getVolumeForChapter(currentChapter.number);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-8 print:hidden">
        {/* Zone 1: Single text element Brand wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('curriculum');
          }}
          className="text-lg font-bold tracking-tight text-slate-900 font-display whitespace-nowrap shrink-0"
        >
          संस्कृतम् · Sanskritam
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a
            href="#curriculum"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('curriculum');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'curriculum'
                ? 'text-slate-900 underline underline-offset-8 decoration-2 decoration-sky-700'
                : 'hover:text-slate-900'
            }`}
          >
            Curriculum
          </a>
          <a
            href="#phonetics"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('phonetics');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'phonetics'
                ? 'text-slate-900 underline underline-offset-8 decoration-2 decoration-sky-700'
                : 'hover:text-slate-900'
            }`}
          >
            Phonetics Lab
          </a>
          <a
            href="#panini"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('panini');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'panini'
                ? 'text-slate-900 underline underline-offset-8 decoration-2 decoration-sky-700'
                : 'hover:text-slate-900'
            }`}
          >
            Pāṇini Engine
          </a>
          <a
            href="#chandas"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('chandas');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'chandas'
                ? 'text-slate-900 underline underline-offset-8 decoration-2 decoration-sky-700'
                : 'hover:text-slate-900'
            }`}
          >
            Chandas Scanner
          </a>
          <a
            href="#pdf-book"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('pdf_book');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'pdf_book'
                ? 'text-slate-900 underline underline-offset-8 decoration-2 decoration-sky-700'
                : 'hover:text-slate-900'
            }`}
          >
            PDF Book (161p)
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setActiveTab('pdf_book');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Open 17-Chapter PDF
          </button>
        </div>
      </header>

      {/* Main Content Container (1440px Desktop Presence) */}
      <main className="flex-1 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Hero Overview Banner & Workspace Mode Switcher */}
        <section className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 print:hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8 flex flex-col justify-between space-y-5">
              <div className="space-y-2">
                {/* Clean unboxed metadata with typographic separators */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-mono tabular-nums">
                  <span>4 Volumes (चत्वारः खण्डाः)</span>
                  <span aria-hidden="true">·</span>
                  <span>17 Chapters</span>
                  <span aria-hidden="true">·</span>
                  <span>{totalUnitsCount} Units</span>
                  <span aria-hidden="true">·</span>
                  <span>{totalLessonsCount}+ Lessons</span>
                  <span aria-hidden="true">·</span>
                  <span>161-Page Complete PDF</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  संस्कृतम् — Complete 17-Chapter Interactive Curriculum
                </h1>

                <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
                  Complete 60-unit syllabus spanning foundational <span className="font-devanagari font-semibold text-slate-900">वर्णमाला</span>, <span className="font-devanagari font-semibold text-slate-900">Pāṇini’s Aṣṭādhyāyī</span>, and the 5 newly researched advanced modules: <span className="font-devanagari font-semibold text-slate-900">वैदिक-संस्कृतम्</span> (Ch.13), <span className="font-devanagari font-semibold text-slate-900">षड्दर्शनानि उपनिषदश्च</span> (Ch.14), <span className="font-devanagari font-semibold text-slate-900">नाट्यशास्त्रं महाकाव्यञ्च</span> (Ch.15), <span className="font-devanagari font-semibold text-slate-900">विज्ञानशास्त्राणि</span> (Ch.16), and <span className="font-devanagari font-semibold text-slate-900">धातुपाठः गणपाठश्च</span> (Ch.17).
                </p>
              </div>

              {/* Resume Where I Left Off Action Bar */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const latest = recentItems[0];
                    if (latest) {
                      selectChapter(latest.chapterIdx, latest.unitIdx);
                    } else {
                      selectChapter(0, 0);
                    }
                  }}
                  className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>Resume Where I Left Off</span>
                </button>
                {recentItems[0] && (
                  <span className="text-xs text-slate-500 font-devanagari">
                    Last visited:{' '}
                    <span className="font-mono text-slate-700 font-semibold tabular-nums">
                      Ch.{String(recentItems[0].chapterNumber).padStart(2, '0')} · Unit{' '}
                      {recentItems[0].unitNumber}
                    </span>{' '}
                    · <span className="text-slate-700">{recentItems[0].title}</span>
                  </span>
                )}
              </div>

              {/* Interactive Workspace Mode Segmented Control */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {[
                  { id: 'curriculum', label: '01. Guided Curriculum (Ch.1–17)', icon: BookOpen },
                  { id: 'pdf_book', label: '02. PDF Book Viewer & Download (161p)', icon: FileText },
                  { id: 'phonetics', label: '03. Varnamala Lab (46 Sounds)', icon: Compass },
                  { id: 'panini', label: '04. Pāṇini & Daśagaṇī Engine', icon: Cpu },
                  { id: 'chandas', label: '05. Chandas Prosody Scanner', icon: Music },
                  { id: 'paradigms', label: '06. Paradigms & Sentence Builder', icon: Table2 },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveTab(item.id as WorkspaceTab)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
                        active
                          ? 'bg-sky-700 text-white border-sky-700'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-400'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Hero Column: Direct PDF Download & Progress Telemetry */}
            <div className="lg:col-span-4 bg-slate-900 text-slate-100 rounded-xl p-6 flex flex-col justify-between border border-slate-800">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-sky-400">
                  <span>UPDATED PDF EDITION (161 PAGES)</span>
                  <button
                    type="button"
                    onClick={() =>
                      soundEngine.speakSanskrit(
                        'अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्'
                      )
                    }
                    className="text-sky-300 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    Chant ṚV 1.1.1
                  </button>
                </div>
                <div className="text-xl font-bold font-devanagari text-white">
                  अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Chapters 13–17 (Units 46–60) have been researched and appended to <span className="font-mono text-white">Sanskritam-Curriculum.pdf</span> (Pages 138–161).
                </p>
                <div className="pt-1 flex flex-wrap gap-2">
                  <a
                    href="/Sanskritam-Curriculum.pdf"
                    download="Sanskritam-Curriculum-17-Chapters.pdf"
                    className="px-3.5 py-2 text-xs font-semibold bg-sky-600 hover:bg-sky-500 text-white rounded-lg inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Updated PDF
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveTab('pdf_book')}
                    className="px-3 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-100 rounded-lg whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Read in Browser
                  </button>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono tabular-nums">
                  <span className="text-slate-400">ACTIVE MODULE</span>
                  <span className="text-emerald-400 font-semibold">
                    ● {completedCount} / {allExercisesCount} COMPLETED
                  </span>
                </div>
                <div className="text-xs text-slate-300 font-mono tabular-nums">
                  Ch.{currentChapter.number} ({currentChapter.sanskritTitle}) · Unit{' '}
                  {currentUnit.number} · PDF p.{currentUnit.pageStart}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TAB 1: GUIDED CURRICULUM SANDBOX (TWO-ZONE SPLIT) */}
        {activeTab === 'curriculum' && (
          <section id="curriculum" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left / Main Interactive Stage (67% width on desktop) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Quick Jump Strip for All 4 Volumes & Newly Researched Chapters 13-17 */}
              <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-sky-700" />
                    CURRICULUM VOLUMES (I–IV):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {CURRICULUM_VOLUMES.map((vol) => {
                      const isCurrentVol = currentVolume.id === vol.id;
                      const firstChapIdx = CURRICULUM_CHAPTERS.findIndex(
                        (c) => c.number === vol.chapterRange[0]
                      );
                      return (
                        <button
                          key={vol.id}
                          type="button"
                          onClick={() => {
                            setSelectedVolumeId(vol.id);
                            if (firstChapIdx >= 0) selectChapter(firstChapIdx, 0);
                          }}
                          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            isCurrentVol
                              ? 'border-slate-900 bg-slate-900 text-white font-semibold'
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'
                          }`}
                        >
                          {vol.number} ({vol.sanskritLabel}) · Ch.{vol.chapterRange[0]}–{vol.chapterRange[1]}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-slate-500">
                    VOLUME IV ADVANCED CHAPTERS (13–17):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {CURRICULUM_CHAPTERS.filter((c) => c.number >= 13).map((ch) => {
                      const cIdx = CURRICULUM_CHAPTERS.findIndex((c) => c.id === ch.id);
                      const isAct = selectedChapterIdx === cIdx;
                      return (
                        <button
                          key={ch.id}
                          type="button"
                          onClick={() => selectChapter(cIdx)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            isAct
                              ? 'border-sky-600 bg-sky-700 text-white font-semibold'
                              : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white'
                          }`}
                        >
                          Ch.{ch.number}: {ch.sanskritTitle}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Active Chapter / Unit / Lesson Header Deck */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-mono tabular-nums">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sky-700 font-semibold">
                      {currentVolume.number} ({currentVolume.sanskritLabel})
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      Chapter {currentChapter.number}: {currentChapter.title} ({currentChapter.sanskritTitle})
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>
                      Unit {currentUnit.number}: {currentUnit.title}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>PDF Page {currentUnit.pageStart}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* Audio Volume Control (Slider + Mute) */}
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 text-slate-700">
                      <button
                        type="button"
                        onClick={handleToggleMute}
                        aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                        title={isMuted ? 'Unmute Sanskrit pronunciation & chimes' : 'Mute audio'}
                        className="text-slate-600 hover:text-slate-900 cursor-pointer flex items-center"
                      >
                        {isMuted || audioVolume === 0 ? (
                          <VolumeX className="w-3.5 h-3.5 text-rose-600" />
                        ) : (
                          <Volume2 className="w-3.5 h-3.5 text-sky-700" />
                        )}
                      </button>
                      <label
                        htmlFor="sanskrit-audio-volume"
                        className="text-[11px] font-mono tabular-nums text-slate-600 whitespace-nowrap"
                      >
                        Volume: {isMuted ? '0%' : `${audioVolume}%`}
                      </label>
                      <input
                        id="sanskrit-audio-volume"
                        type="range"
                        min={0}
                        max={100}
                        step={5}
                        value={isMuted ? 0 : audioVolume}
                        onChange={(e) => handleVolumeChange(Number(e.target.value))}
                        className="w-16 h-1.5 accent-sky-700 cursor-pointer"
                      />
                    </div>

                    {/* Web Speech API Hands-Free Voice Command Toggle */}
                    <button
                      type="button"
                      onClick={toggleVoiceCommands}
                      aria-pressed={isVoiceActive}
                      title={
                        isVoiceActive
                          ? 'Disable hands-free voice command navigation'
                          : 'Enable hands-free Web Speech API voice commands for recitation practice'
                      }
                      className={`px-3 py-1.5 rounded-lg border text-xs font-sans font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                        isVoiceActive
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900'
                      }`}
                    >
                      {isVoiceActive ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                          <Mic className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Voice Nav: On</span>
                        </>
                      ) : (
                        <>
                          <MicOff className="w-3.5 h-3.5 text-slate-500" />
                          <span>Voice Commands</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={toggleCurrentUnitBookmark}
                      aria-label={isCurrentUnitBookmarked ? 'Remove unit bookmark' : 'Bookmark unit'}
                      title={
                        isCurrentUnitBookmarked
                          ? 'Remove unit from My Bookmarks'
                          : 'Save unit to My Bookmarks'
                      }
                      className={`px-3 py-1.5 rounded-lg border text-xs font-sans font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                        isCurrentUnitBookmarked
                          ? 'border-sky-600 bg-sky-50 text-sky-900 font-semibold'
                          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900'
                      }`}
                    >
                      <Bookmark
                        className={`w-3.5 h-3.5 ${
                          isCurrentUnitBookmarked ? 'fill-sky-700 text-sky-700' : 'text-slate-500'
                        }`}
                      />
                      <span>{isCurrentUnitBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
                    </button>
                  </div>
                </div>

                {/* Hands-Free Voice Command Console (Shown when Voice Nav is active) */}
                {isVoiceActive && (
                  <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3.5 space-y-2.5 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2 font-mono text-emerald-950">
                        <Mic className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span className="font-semibold">
                          HANDS-FREE RECITATION MODE (WEB SPEECH API)
                        </span>
                        {voiceTranscript && (
                          <span className="text-emerald-800">
                            · Heard: “{voiceTranscript}”
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-[11px] text-emerald-800">
                        {voiceFeedback}
                      </span>
                    </div>

                    {voiceError && (
                      <div className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded px-2.5 py-1.5">
                        {voiceError}
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-emerald-200/70">
                      <span className="text-[11px] text-slate-600">
                        Speak aloud or tap a command to navigate hands-free while reciting:
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {[
                          { label: '“Previous lesson”', cmd: 'previous lesson' },
                          { label: '“Next lesson”', cmd: 'next lesson' },
                          { label: '“Previous chapter”', cmd: 'previous chapter' },
                          { label: '“Next chapter”', cmd: 'next chapter' },
                          { label: '“Next exercise”', cmd: 'next exercise' },
                          { label: '“Recite”', cmd: 'recite' },
                        ].map((item) => (
                          <button
                            key={item.cmd}
                            type="button"
                            onClick={() => executeVoiceCommand(item.cmd)}
                            className="px-2 py-1 rounded border border-emerald-300 bg-white hover:bg-emerald-100/70 text-emerald-950 font-mono text-[11px] transition-colors cursor-pointer"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 font-devanagari">
                      Lesson {currentLesson.number} — {currentLesson.title}
                    </h2>
                    <p className="text-sm text-slate-600 font-devanagari mt-0.5">
                      {currentLesson.subtitle}
                    </p>
                  </div>

                  {/* Unit Selector within Active Chapter */}
                  {currentChapter.units.length > 1 && (
                    <div className="flex flex-wrap gap-1.5">
                      {currentChapter.units.map((u, uIdx) => (
                        <button
                          key={u.id}
                          type="button"
                          onClick={() => selectChapter(selectedChapterIdx, uIdx)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                            selectedUnitIdx === uIdx
                              ? 'border-sky-600 bg-sky-50 text-sky-900 font-semibold'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'
                          }`}
                        >
                          Unit {u.number}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Lesson Switcher & Exercise Step Tabs */}
                <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {currentUnit.lessons.map((les, lIdx) => (
                      <button
                        key={les.id}
                        type="button"
                        onClick={() => {
                          setSelectedLessonIdx(lIdx);
                          setSelectedExerciseIdx(0);
                        }}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          selectedLessonIdx === lIdx
                            ? 'bg-slate-900 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        Lesson {les.number}
                      </button>
                    ))}
                  </div>

                  {/* Exercise Step Selector */}
                  <div className="flex items-center gap-1.5">
                    {currentLesson.exercises.map((ex, eIdx) => {
                      const done = !!completedExercises[ex.id];
                      const active = selectedExerciseIdx === eIdx;
                      return (
                        <button
                          key={ex.id}
                          type="button"
                          onClick={() => setSelectedExerciseIdx(eIdx)}
                          className={`px-2.5 py-1 text-xs font-mono tabular-nums rounded border transition-colors cursor-pointer flex items-center gap-1 ${
                            active
                              ? 'border-sky-600 bg-sky-700 text-white font-semibold'
                              : done
                              ? 'border-emerald-600 bg-emerald-50 text-emerald-800'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-400'
                          }`}
                        >
                          <span>Ex.{eIdx + 1}</span>
                          {done && <CheckCircle2 className="w-3 h-3" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Interactive Exercise Stage */}
              <ExercisePlayer
                exercise={currentExercise}
                exerciseIndex={selectedExerciseIdx}
                totalExercises={currentLesson.exercises.length}
                onComplete={handleMarkExerciseComplete}
                onNext={handleNextExerciseOrLesson}
                isCompleted={!!completedExercises[currentExercise.id]}
              />
            </div>

            {/* Right Zone: Complete 17-Chapter / 60-Unit Syllabus Navigator (33% width) */}
            <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-6 space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-900">
                    17-Chapter Syllabus Index
                  </h3>
                  <span className="text-xs font-mono text-slate-500 tabular-nums">
                    4 Vols · 60 Units · 161p
                  </span>
                </div>

                {/* Volume Filter Tabs in Syllabus Index */}
                <div className="flex flex-wrap gap-1">
                  {[
                    { id: 'all', label: 'All (17)' },
                    { id: 'vol1', label: 'Vol. I (1–6)' },
                    { id: 'vol2', label: 'Vol. II (7–10)' },
                    { id: 'vol3', label: 'Vol. III (11–12)' },
                    { id: 'vol4', label: 'Vol. IV (13–17)' },
                  ].map((vTab) => {
                    const active = selectedVolumeId === vTab.id;
                    return (
                      <button
                        key={vTab.id}
                        type="button"
                        onClick={() => setSelectedVolumeId(vTab.id as VolumeFilterId)}
                        className={`px-2 py-1 text-[11px] font-mono rounded border transition-colors cursor-pointer ${
                          active
                            ? 'bg-slate-900 text-white border-slate-900 font-semibold'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-white'
                        }`}
                      >
                        {vTab.label}
                      </button>
                    );
                  })}
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (filteredChapters.length > 0) {
                      const firstMatch = filteredChapters[0];
                      const q = chapterFilter.trim().toLowerCase();
                      const matchedUnitIdx = q
                        ? Math.max(
                            0,
                            firstMatch.ch.units.findIndex(
                              (u) =>
                                u.title.toLowerCase().includes(q) ||
                                u.subtitle.toLowerCase().includes(q) ||
                                String(u.number) === q
                            )
                          )
                        : 0;
                      selectChapter(firstMatch.idx, matchedUnitIdx);
                    }
                  }}
                  className="relative"
                >
                  <input
                    type="text"
                    value={chapterFilter}
                    onChange={(e) => setChapterFilter(e.target.value)}
                    placeholder="Filter 17 chapters or 60 units (press Enter to jump)..."
                    className="w-full px-3 py-2 pr-8 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-sky-600"
                  />
                  {chapterFilter && (
                    <button
                      type="button"
                      onClick={() => setChapterFilter('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                      title="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </form>

                {/* My Bookmarks List (Separate from Recent searches) */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5 text-sky-700" />
                      My Bookmarks ({bookmarkedItems.length})
                    </span>
                    {bookmarkedItems.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setBookmarkedItems([])}
                        className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  {bookmarkedItems.length === 0 ? (
                    <p className="text-xs text-slate-400 py-1">
                      Click Bookmark in the unit header to save units here.
                    </p>
                  ) : (
                    <div className="space-y-1">
                      {bookmarkedItems.map((item) => {
                        const isCurrentlyActive =
                          selectedChapterIdx === item.chapterIdx &&
                          selectedUnitIdx === item.unitIdx;
                        return (
                          <div
                            key={item.id}
                            onClick={() => selectChapter(item.chapterIdx, item.unitIdx)}
                            className={`group flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                              isCurrentlyActive
                                ? 'border-sky-600 bg-sky-50/90 text-sky-950 font-semibold'
                                : 'border-slate-200/80 bg-white hover:border-slate-300 text-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-1.5 min-w-0 font-devanagari">
                              <Bookmark className="w-3 h-3 fill-sky-700 text-sky-700 shrink-0" />
                              <span className="font-mono text-[11px] text-slate-500 shrink-0 tabular-nums">
                                Ch.{String(item.chapterNumber).padStart(2, '0')} · U{item.unitNumber}
                              </span>
                              <span aria-hidden="true" className="text-slate-300">
                                ·
                              </span>
                              <span className="truncate">{item.title}</span>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <span className="font-mono text-[11px] text-slate-400 tabular-nums">
                                p.{item.pageStart}
                              </span>
                              <button
                                type="button"
                                onClick={(e) => removeBookmarkItem(item.id, e)}
                                className="p-0.5 text-slate-400 hover:text-slate-700 rounded transition-colors cursor-pointer"
                                title="Remove from My Bookmarks"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Recent Searches & Previously Viewed Units/Chapters List */}
                {recentItems.length > 0 && (
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-500 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        Recent searches
                      </span>
                      <button
                        type="button"
                        onClick={() => setRecentItems([])}
                        className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                      >
                        Clear
                      </button>
                    </div>

                    <div className="space-y-1">
                      {recentItems.map((item) => {
                        const isCurrentlyActive =
                          selectedChapterIdx === item.chapterIdx &&
                          selectedUnitIdx === item.unitIdx;
                        return (
                          <div
                            key={item.id}
                            onClick={() => {
                              setSelectedChapterIdx(item.chapterIdx);
                              setSelectedUnitIdx(item.unitIdx);
                              setSelectedLessonIdx(0);
                              setSelectedExerciseIdx(0);
                              setActiveTab('curriculum');
                              recordRecentNavigation(item.chapterIdx, item.unitIdx);
                            }}
                            className={`group flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg border text-xs transition-colors cursor-pointer ${
                              isCurrentlyActive
                                ? 'border-sky-600 bg-sky-50/90 text-sky-950 font-semibold'
                                : 'border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-slate-300 text-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-1.5 min-w-0 font-devanagari">
                              <span className="font-mono text-[11px] text-slate-500 shrink-0 tabular-nums">
                                Ch.{String(item.chapterNumber).padStart(2, '0')} · U{item.unitNumber}
                              </span>
                              <span aria-hidden="true" className="text-slate-300">
                                ·
                              </span>
                              <span className="truncate">{item.title}</span>
                              {item.searchTerm && (
                                <span className="text-[11px] text-sky-700 font-mono shrink-0">
                                  (“{item.searchTerm}”)
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <span className="font-mono text-[11px] text-slate-400 tabular-nums">
                                p.{item.pageStart}
                              </span>
                              <button
                                type="button"
                                onClick={(e) => removeRecentItem(item.id, e)}
                                className="p-0.5 text-slate-400 hover:text-slate-700 rounded transition-colors cursor-pointer"
                                title="Remove from recent searches"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="divide-y divide-slate-200 max-h-[600px] overflow-y-auto pr-1">
                {filteredChapters.map(({ ch, idx }) => {
                  const isCurrent = idx === selectedChapterIdx;
                  const isSearching = chapterFilter.trim().length > 0;
                  const isNewChap = ch.number >= 13;
                  return (
                    <div key={ch.id} className="py-3 first:pt-0 last:pb-0">
                      <button
                        type="button"
                        onClick={() => selectChapter(idx, 0)}
                        className={`w-full text-left p-2.5 rounded-lg transition-colors cursor-pointer ${
                          isCurrent ? 'bg-sky-50/80 border border-sky-200' : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-mono tabular-nums">
                          <span className={isNewChap ? 'text-sky-700 font-bold' : 'text-slate-500'}>
                            {getVolumeForChapter(ch.number).number.toUpperCase()} · CHAPTER{' '}
                            {String(ch.number).padStart(2, '0')}{' '}
                            {isNewChap ? '· NEW' : ''}
                          </span>
                          <span className="text-slate-400">p.{ch.units[0]?.pageStart}</span>
                        </div>
                        <div className="text-sm font-semibold text-slate-900 font-devanagari mt-0.5">
                          {ch.title} / {ch.sanskritTitle}
                        </div>
                        <div className="text-xs text-slate-600 mt-0.5 line-clamp-1">
                          {ch.subtitle}
                        </div>
                      </button>

                      {(isCurrent || isSearching) && (
                        <div className="mt-2 pl-3 space-y-1 border-l border-slate-200">
                          {ch.units.map((u, uIdx) => (
                            <button
                              key={u.id}
                              type="button"
                              onClick={() => selectChapter(idx, uIdx)}
                              className={`w-full text-left px-2.5 py-1.5 rounded text-xs font-devanagari transition-colors cursor-pointer flex items-center justify-between ${
                                isCurrent && selectedUnitIdx === uIdx
                                  ? 'bg-slate-900 text-white font-semibold'
                                  : 'text-slate-600 hover:bg-slate-100'
                              }`}
                            >
                              <span className="truncate">
                                Unit {u.number}: {u.title}
                              </span>
                              <span className="font-mono text-[11px] opacity-75 shrink-0 ml-2 tabular-nums">
                                p.{u.pageStart}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </aside>
          </section>
        )}

        {/* TAB 2: PDF BOOK VIEWER & EXPORT STUDIO */}
        {activeTab === 'pdf_book' && <PdfBookStudio />}

        {/* TAB 3: VARNAMALA PHONETICS LAB */}
        {activeTab === 'phonetics' && <PhoneticsLab />}

        {/* TAB 4: PANINI & DASHAGANI ENGINE */}
        {activeTab === 'panini' && <PaniniEngine />}

        {/* TAB 5: CHANDAS PROSODY SCANNER */}
        {activeTab === 'chandas' && <ChandasScanner />}

        {/* TAB 6: PARADIGMS & SENTENCE BUILDER */}
        {activeTab === 'paradigms' && <ParadigmExplorer />}
      </main>

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 px-6 mt-12 print:hidden">
        <div className="max-w-[1360px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="font-devanagari">
            संस्कृतम् — Complete Curriculum (17 Chapters · 60 Units · 161 PDF Pages) · शुभं भवतु · सत्यमेव जयते
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/Sanskritam-Curriculum.pdf"
              download="Sanskritam-Curriculum-17-Chapters.pdf"
              className="text-sky-700 hover:underline font-medium"
            >
              Download Updated PDF (161p)
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

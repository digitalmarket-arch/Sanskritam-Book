# Changelog

All notable changes to the Sanskritam 2.0 curriculum. Format follows
[Keep a Changelog](https://keepachangelog.com/); versions are project-wide milestones
(individual lessons also carry their own semver in front matter).

## [Unreleased]

### Added

- **v4.c01 lesson 4, first draft** — the Chapter 1 exam (one closed-book 45-minute sitting, five
  tasks, the chapter on one page, the retake sets). Not reviewed.
- **Research: the v4.c02 fact base** (`research/notes/vol4-ch2-inside-the-ashtadhyayi.md`),
  verified before drafting by three checkers with every finding challenged, and the chapter frame
  `curriculum/volume-4/chapter-02/chapter.md` (draft). Volume 4, Chapter 2 — अष्टाध्यायीप्रवेशः ·
  Inside the Aṣṭādhyāyī: base and affix, with the three names a base takes before an ending (अङ्ग,
  पद, भ) shown on राजन्; substitute, augment and deletion, with guṇa and vṛddhi as names of vowel
  sets; words carried down and headings, shown on the rules that make ण and ष; the Chapter 2
  exam. 16 ledger-new words planned, 521 → 537; 31 tools, 43 in the toolbox after the chapter.
  The verification confirmed 32 findings (1 blocker, 8 major, 23 minor) and rejected 5; 44 fixes
  were applied, 1 was found already made and 16 were duplicates between checkers. The blocker:
  the Hindi parallel credited the ण of रामायण and प्रमाण to 8.4.1–2 — other rules make them
  (8.4.3; 8.4.29), and the examples are now words the chapter's own rules explain (कारण, हरण,
  मरण; भविष्य). Other corrections: two replies to 1.x cards that argued against claims the cards
  did not make; a neuter form in -अम् is accepted as nominative or accusative; a Whitney
  quotation cut mid-sentence gets its ellipsis; the exam's guard notes say what is really shared
  between Station 0 and the tasks. Eleven editor's decisions are recorded in its §7; by one of
  them the exam's last task no longer ends on a form that is not a word (रामाय is reached through
  a printed step of a later lesson).

- **v4.c02 lessons 1–3, first drafts** — One base, three names (strong, pada and bha before
  the twelve endings; रामः and फलम् derived; 521 → 527); Replace, add, delete (substitute,
  augment and deletion; guṇa and vṛddhi as names of vowel sets; अगच्छत् derived; 527 → 532);
  Words carried down (anuvṛtti and headings; the ṇ of रामेण and the ṣ of रामेषु; 532 → 537).
  Not reviewed.
- **Research: the v4.c03 fact base** (`research/notes/vol4-ch3-roots-and-the-full-verb.md`),
  verified before drafting by three checkers with every finding challenged, and the chapter frame
  `curriculum/volume-4/chapter-03/chapter.md` (draft). Volume 4, Chapter 3 — धातुः
  तिङ्विस्तारश्च · Roots & the Full Verb: the root, the l-affix and its eighteen endings, with
  the pada decided by the root's marker; the class sign and the ten present classes; strong and
  weak forms by the p marker; the perfect; the future, with a card of the other four lakāras;
  the Chapter 3 exam on the √भू table. Six lessons, 28 ledger-new words planned, 537 → 565; 46
  tools, 89 in the toolbox after the chapter; three passages of the Hitopadeśa and the
  Pañcatantra measured for their glossed words (8 of 43, 7 of 37, 4 of 24). The verification
  confirmed 30 findings (2 blockers, 9 major, 19 minor) and rejected 5; 65 fixes were applied and
  5 were duplicates between checkers. The blockers: 6.4.111 श्नसोरल्लोपः was said to drop the
  vowel of the class-9 sign श्ना — it drops the अ of the class-7 infix and of अस्; and पृच्छति was
  given as the example of a ṅit class sign blocking guṇa, where no guṇa could arise — the example
  is now लिखति. Other corrections: ṇ is made last in the derivation of शृणोति (8.2.1); the rule
  that chooses the plural ending (1.4.21) is named; both sets of endings are accepted where the
  seers may act for themselves or for others (1.3.72); the weak stem of करोति is कुरु-, not करु-;
  quoted roots are not joined to इति against the rules for a final च्; no accent name is printed
  for a root's marker. Nine editor's decisions are recorded in its §8.

### Changed

- **Volume 4 plan §7.6:** nine rows from the v4.c03 fact base (the weak perfect stems of गम् and
  दा; यच्छ from दाण् as well as from यम्; the headings the data file gives the class signs and the
  lakāra rules; स्वस्मै replaced; the न carried into 1.1.5; रात्रौ a recognised form; the spelling
  list of the e-texts; a slip in the local Whitney at §944; the Teacher-Notes sūtras).
- **REFERENCES.md:** the key `dcs` (the Digital Corpus of Sanskrit; search-confirmed, page not
  opened), for the corpus counts that Chapter 3 prints with their method.
- **Volume 4 plan §7.6:** eleven rows from the v4.c02 fact base (the 1.x page's own example; the
  न carried into 8.4.37 is the negative; how a heading's own row is printed; 1.4.17 and the
  Kāśikā; 3.4.100; the spelling list of the e-texts; Whitney §235; the toolbox card in an exam;
  the Teacher-Notes sūtras; no derivation ending on a non-word; the Hindi examples of ṇatva and
  ṣatva).

### Fixed

- **Quiz answers spread over the option letters.** At 0.18.0 the correct answers of the
  quizzes clustered on one letter: of the 668 multiple-choice keys of the 91 reviewed lessons,
  398 stood at (b) (60%), 153 at (a), 107 at (c) and 10 at (d) (1.5%); 73 lessons broke the rule
  now written into STYLE_GUIDE §5, and in four quizzes every key was the same letter
  (v2.c04.l03, v2.c05.l02 and v2.c05.l04 all (a); v3.c04.l04 all (b)). A learner could score by
  position. The options of 260 questions in those 73 lessons are re-ordered — no stem, option
  or explanation changes a word — and the keys now stand at (a) 168, (b) 202, (c) 169, (d) 129;
  in a quiz of n questions with k options every letter is the key ⌊n/k⌋ to ⌈n/k⌉ + 1 times and
  no three questions in a row have the same key. The four lessons of v4.c01 and the three
  drafts of v4.c02 were treated the same way. Every lesson is checked by script
  (`scripts/quizcheck.py`, new: the same option texts, the same keyed text, the same stems, the
  letters named in each explanation moved with their options), by a character count of its diff
  (the added and removed lines hold the same characters apart from the option letters) and by
  an independent reader; the method and the counts are in the verification log. The JSON
  exports are regenerated.
- **Erratum, v3.c04.l04 §15.** भवति is "one of the course's first verbs", not "the course's
  first verb" (that is चलति, v1.c03.l02); found by the post-fix verification of v4.c01, whose
  lesson 3 points to the line.
- **Erratum, v3.c03.l02 §8.** "the course teaches every verb in one family only" is limited in
  time — "until v4.c03.l01 …" — because Volume 4, Chapter 3 will teach पचति / पचते and यजति /
  यजते in both sets (found by the v4.c03 fact base).

- **v4.c01 lessons 1–3, accuracy review** (one reviewer per lesson, every finding verified): 36
  confirmed findings (1 blocker, 11 major, 24 minor), none rejected; 91 fixes applied. The
  blocker: चय् names the first member of each of the five series, not of four. The other passes
  and the post-fix verification follow before the chapter ships.

## [0.18.0] — 2026-11-10

Volume 3, Chapter 6 — सम्पूर्णपठनम् · Connected Reading — is reviewed and shipped, and with it
**Volume 3 (Core Grammar) is complete**: 30 lessons in six chapters of five, 148 ledger-new
words, 508 readable words at its exit (360 → 508; every planned chapter exit reached). The
chapter adds no new table. It puts the cases, the verb, the joins, the pronouns and the
compounds to work on connected text, first the course's own and then the books': the two
Volume 2 stories read joined; eight sentences of the Hitopadeśa and six of the Pañcatantra,
printed as the GRETIL e-text has them with the course's pause form beneath; three verses put
in prose order; and the Volume 3 exam, which gates Volume 4. Five lessons, 20 ledger-new
words, 488 → 508. The course now has 91 reviewed lessons (61 in Volumes 1–2, 30 in Volume 3).

### Added

- **v3.c06, five lessons, reviewed** — every course-written line printed joined, with its pause
  form beneath; every authentic passage under the source line "text of the GRETIL e-text":
  - द्वे कथे · The Two Stories, Joined (reading): the Volume 2 crow and lion printed joined and
    read straight through at three speeds, with no pause at a seam; the crow told in the past
    with the 1.x details restored (तृष्णार्तः, the stones in the plural, the moral
    बुद्धिर्बलाच्छ्रेष्ठा); the recognition card R5 for the absolutive in -त्वा / -य, "having
    …-ed" — recognised, never produced, never scored (formation v4.c04); the benediction parsed
    word by word, which closes its thread; headwords उपायः, इतस्ततः, तृष्णा and आर्तः, four in
    all (488 → 492).
  - कपोताः मूषकः च · The Doves and the Mouse (reading): the speech frame, X उवाच — "…" and "…"
    इति X अवदत्, with no join across the dash or the closing quotation mark; the lion and the
    mouse in dialogue in the past, with the 1.x lines restored (साहाय्यम् for सहायम्); eight
    sentences of the Hitopadeśa's own text on the doves and the mouse (Book 1, frame story),
    with a bridge over the gaps. Here the course's serial ends and hands over to the source:
    Teacher Notes list every place where the retelling of Chapters 1–5 departs from the text. A
    HISTORY callout on the Hitopadeśa (its compiler Nārāyaṇa and the patron Dhavalacandra, as
    its closing verses name them; roughly the 9th–12th centuries CE on the scholarly estimate;
    the oldest dated manuscript, of 1373 CE); headwords सुहृत्, बन्धनम्, नाना, शाल्मली, साहाय्यम्
    and प्रत्युपकारः, six in all (492 → 498).
  - वानरः मकरः च · The Monkey and the Crocodile (reading): six sentences of the Pañcatantra
    (Book 4, frame story); the story-opening formula — अस्ति + a place + the subject; X नाम Y;
    the present + स्म — with four first sentences from two books; sūtra 3.2.118 लट् स्मे, the one
    sūtra quoted to the learner in this chapter; HISTORY callouts on the Pañcatantra's
    translation into Middle Persian under Khosrow I, according to the Encyclopaedia Iranica, and
    on the Suṃsumāra-jātaka (no. 208), with no claim of priority either way; a TRADITION line
    on Viṣṇuśarman; headwords वानरः, मकरः, जम्बूः, सलिलम् and महान्, five in all (498 → 503).
  - त्रयः श्लोकाः · Three Verses (reading): अन्वयः, a verse's prose order, in seven fixed
    steps, written in pause form, on three verses — विद्या ददाति विनयम्, Hitopadeśa,
    introductory verses, 6; अयं निजः परो वेति … वसुधैव कुटुम्बकम् with its speaker, a jackal
    (Hitopadeśa 1.71), beside its Pañcatantra locus (Book 5, the third of the brahmins who made
    a lion); यस्य बुद्धिर्बलं तस्य, from the Pañcatantra, Book 1; rhythm by ear and by count, four
    quarters of eight syllables; उद्यमेन हि सिध्यन्ति read once more with no gloss, which closes
    the thread-verse overlay; headwords विनयः, याति, आप्नोति, वसुधा and मदः, with धनम् as an
    upgrade (503 → 508).
  - तृतीयखण्डपरीक्षा · The Volume 3 Exam (review): six tasks in two closed-book 45-minute
    sittings (duration 90) — the lion dialogue heard joined, with ten questions; a dictation
    of five joined sentences, none of them a sentence of the lessons; an unseen passage of the
    Pañcatantra (Book 4) with five marginal glosses in 33 words, translated, with six questions
    in Sanskrit; twenty forms from the volume's productive cells; a Volume 3 story retold in ten
    sentences; an honesty sort of eight cards — with Station 0, about 8 minutes, before the
    first sitting and outside both. The volume on one page and its paradigm ledger audited
    (§15); the monthly task Volume 2's exam booked is closed; the first Station 0 items of
    v4.c01.l01 and v4.c01.l02 are booked. Passing gates Volume 4; the ledger stays at 508.

  The Hindi parallels are exact contrasts: Hindi -कर / -करके beside the absolutive; कि before
  a quotation in Hindi, इति after it in Sanskrit; किसी गाँव में एक राजा रहता था beside अस्ति
  कस्मिंश्चिद्ग्रामे … निवसति स्म; अन्वय, a word Hindi uses for the same exercise. Vocabulary counts
  4 · 6 · 5 · 6 · 0; cells drilled 0 · 0 · 0 · 6 · 0 new. Self-study minutes: 40 · 44 · 40 · 44
  · 60.
- GLOSSARY: लिट्, स्म, क्त्वा · ल्यप्, अन्वय and the speech frame (उद्धरण-ढाँचा); the row श्लोक
  updated.
- `research/notes/vol3-plan.md` §7.6: the corrections the Chapter 6 fact base and review made to
  the plan, and the rules its review settled.
- **Research: the v4.c01 fact base** (`research/notes/vol4-ch1-the-fourteen-sutras.md`), verified
  before drafting by three checkers with every finding challenged, and the chapter frame
  `curriculum/volume-4/chapter-01/chapter.md` (draft). Volume 4, Chapter 1 — माहेश्वराणि सूत्राणि ·
  The Fourteen Sūtras: the fourteen sūtras and the pratyāhāra; savarṇa and tapara; the case code
  of a sūtra; the Chapter 1 exam. 13 ledger-new words planned, 508 → 521; twelve tools. The
  verification confirmed 25 findings (2 blockers, 9 major, 14 minor) and rejected 5; 63 fixes
  were applied and 7 were duplicates between checkers. Both blockers were the same point found
  twice: the आत् of 6.1.87 आद्गुणः had been listed as a tapara letter; it is the ablative of अ and
  covers अ and आ. Other corrections: the frame no longer promises that every owned vowel join is
  re-derived; 1.3.3 marks the final consonant of an item as first taught, not the last sound of
  a rule's wording; a labelled preview line says why the स् of भिस् is kept (1.3.4); the 1.x
  "~42 pratyāhāras" is quoted beside the Kāśikā's own count and is not called an error; the
  exam's task D asks only for joins that a teaching lesson derives; the pass rule includes the
  §19 quiz. Nine editor's decisions are recorded in its §7, among them the re-timed class plans
  of lessons 1–3 (self-study 43 · 40 · 45 · 40).
- **v4.c01 lessons 1–3, first drafts** (status draft; not reviewed, and not counted among the
  reviewed lessons) — अइउण् · The Fourteen Sūtras; सवर्णम् · One Letter for Its Whole Family;
  इको यणचि · How a Rule Speaks. Each validated when drafted; after drafting, notes and tier marks
  that stood in parentheses directly after Devanagari words were moved into square brackets.

### Changed

- **The Volume 3 frame** (`curriculum/volume-3/volume.md`): `reviewed`. It now states what
  Chapter 6 delivered (four reading lessons and the Volume 3 exam in two 45-minute sittings,
  which gates Volume 4; the reading skills; the authentic texts read) and the exit profile as
  delivered: the exam's unseen passage measures 5 glossed of 33 words; the storyteller's present
  + स्म is taught in v3.c06.l03; the source lines of the verses as the Chapter 6 callouts word
  them (Hitopadeśa 1.71 and the Pañcatantra, Book 5; no Mahā Upaniṣad); the paradigm ledger at
  exit as audited in v3.c06.l05 §15; the ledger at 508, every chapter exit reached; 30 lessons;
  and what goes to Volume 4.
- STYLE_GUIDE §8: 508 reached; Volume 3 complete. STYLE_GUIDE §3.1: an anvaya (the prose order
  of a verse) is written in pause form, as a paradigm table and a vigraha are.
- ROADMAP: Chapter 6 reviewed and Volume 3 complete; the status log; the preservation-map row of
  the 1.x graded readers (the crow in v3.c06.l01, the lion and mouse in v3.c06.l02). README: the
  counts.
- **REFERENCES:** `torzsok2007`, entered under 0.17.0, is withdrawn, and the `hitopadesha` entry
  keeps the range (c. 9th–12th c. CE on the scholarly estimate) and the manuscript (MS Add.
  2564, 1373 CE) only: the 800–950 CE estimate it was cited for could not be confirmed (see
  Fixed).
- **Volume 4 plan §7.6:** eleven rows from the v4.c01 fact base (the entry pattern of Station 0;
  the spelling list of the e-texts; the pratyāhāra count as the Kāśikā's own; four-column
  derivation tables; the आत् of 6.1.87 is not tapara; 1.3.4 and the endings; the pass rule of the
  chapter exams; timing a class plan from its exercises).

### Fixed

- **v3.c06 review (passes A–D, every finding verified by skeptics, each reviewer returning a
  coverage record of what was opened; Pass C in two rounds):** 84 findings confirmed (no
  blockers, 35 major, 49 minor) and 3 rejected. Pass A, lesson by lesson, 50 — lesson 1: 12,
  lesson 2: 8, lesson 3: 10, lesson 4: 9, lesson 5: 11; Pass B 15; Pass C 6; Pass D 13. 209
  fixes applied (49 for lessons 1–2, 29 for lessons 3–4, 131 for the exam's Pass A with
  Passes B, C and D, applied in one run), 4 found already made, 32 duplicates between passes;
  three of the applied fixes collided with another pass's fix on the same lines and were set
  aside by the editor, so 206 stand (the exam's quiz keeps one spread of keys; the dictation's
  first sentence has one wording). Pass C was run a second time on the chapter as reviewed,
  with the whole checklist again, and returned no finding (a coverage record of 25 lines).
  Among the findings: the estimate "800–950 CE, printed with the Clay Sanskrit Library
  translation" for the Hitopadeśa could not be confirmed by search and does not print — lesson
  2 dates the book as the fourteen shipped lessons do (9th–12th centuries CE on the scholarly
  estimate) and keeps the oldest dated manuscript (Cambridge University Library MS Add. 2564,
  Nepāla saṃvat 493 = 1373 CE; search-confirmed; page not opened); lesson 1 gave the wrong
  reason for Volume 2's पिपासितः — Volume 2 preferred it because तृष्णा also means "craving" — and
  its hook said that the pause line said fast gives the joined line's sounds; lesson 2's model
  line used अष्टौ, which is display only (अष्ट is owned), and asked a yes/no question with a
  final वा where the course teaches अपि; it now records H8's बन्धनानि छिन्नानि as a seam the e-text
  leaves unjoined (6.1.73; Whitney §227) and lists every departure of the serial that earlier
  lessons put on the record; lesson 3's objective 3 and exercise 3 ask for the same thing (the
  first sentence of two stories), two universal claims about how stories begin were reworded to
  what the lesson shows, the Pañcatantra's date stays with the reign the Encyclopaedia Iranica
  gives, attributed, and no word of kinship stands between the Pañcatantra story and the Jātaka;
  lesson 4's mouth check for न no longer keeps the lips closed, and its class plan gives the
  second and third verses the time they need (self-study 40 → 44 minutes); in the exam,
  Station 0's retelling is said aloud and keyed by a checklist, no dictation sentence is a
  sentence of lessons 1–4, Teacher Notes say why the retelling, the dictation and the unseen
  passage share one story, cards 4 and 6 of task F carry the sūtra numbers Volume 3 printed in
  learner text (8.3.34; 6.1.77 against the 1.x book's 1.1.45), task C's translation rule no
  longer asks for one tense where the passage has two, जम्बूः is an ū-stem, and three phrases
  printed as quotations of earlier lessons are verbatim or unquoted; the quiz keys of lessons 1,
  3, 4 and 5 are spread (they had been (a) throughout); the Hindi school term पूर्वकालिक क्रिया
  prints without Guru's key. At the merge of the passes the editor carried the withdrawal of
  the estimate through REFERENCES.md, lesson 2's Teacher Notes, the fact base and plan §7.6,
  corrected the list of lessons that put the serial's departures on the record, and moved
  three notes out of parentheses directly after a Devanagari word. A post-fix verification
  re-read ten files (the five lessons, chapter.md, the fact base, the Volume 3 frame,
  GLOSSARY.md, the plan and REFERENCES.md) against the commits before the review fixes, in four
  runs, with every claimed leftover challenged: 37 claimed, 4 refuted; of the 33 that stood, 26
  were distinct and were fixed (4 major, 22 minor) and 7 were duplicates between verifiers. The
  four majors were one point: places in the fact base and in this changelog's 0.17.0 notes
  that still stated the withdrawn 800–950 CE estimate as live.
- **Erratum, v1.c01.l02 §4** (the Māheśvara sūtras): the lesson said the Aṣṭādhyāyī "opens
  with" the fourteen sound-lists; they are handed down at its head and are not among its numbered
  rules. The same passage called the arrangement one of "maximum rule-writing efficiency" and
  told the drum legend with "a verse ascribed to Nandikeśvara", a "cosmic dance" and "the
  inventory's perfection". It now says what the arrangement does (a rule can name a whole span
  of sounds with a two-letter abbreviation) and tells the legend as "a traditional telling",
  with no verse, no ascription and no praise word, as Volume 4 tells it. The register of the
  callout (TRADITION) and the two Volume 1 exam cards that sort it are unchanged.

## [0.17.0] — 2026-11-10

Volume 3, Chapter 5 — सर्वनाम-अव्यय-समासाः · Pronouns, Indeclinables, Compounds — is reviewed
and shipped: five lessons, 28 ledger-new words, 460 → 488 readable words. The pronoun forms the
learner has carried whole since Volume 1 (मम, तव, मह्यम्, सः, कः, the ते of नमस्ते, the polite
भवान्) are put in their tables: the personal pronouns with their short forms, then the pronominal
declension of तद् and its family. The chapter then teaches the words that never change — the
correlative grid, the relative–correlative sentence, the particles and the twenty-two upasargas —
and compounds through their विग्रहः, in four kinds. From v3.c05.l01 on, the learner's own
compositions are written joined, with their pause form beneath.

### Added

- **v3.c05, five lessons, reviewed** — every course-written line printed joined, with its pause
  form beneath:
  - अहम् त्वम् भवान् · I, You, Your Honour (conversation): अस्मद् and युष्मद् — every singular
    cell and the plural nominative, accusative, instrumental and genitive productive — with their
    short forms (मा मे नौ नः; त्वा ते वाम् वः) and where a short form may not stand: never first in
    a sentence, never where the word carries emphasis; भवत् and भवती with the third-person verb,
    and the plural भवन्तः; सखा and सखे; the recognition card for the -वान् / -मान् nominatives;
    sūtra 8.1.22 तेमयावेकवचनस्य; the नमस्ते thread closed in a three-line proof (नमः takes the
    dative, 2.3.16; ते is the short dative of त्वम्, 8.1.22; ः before त becomes स्, 8.3.34); a
    guest at the door; headwords स्वयम्, सखा, स्नेहः and विश्वासः, four in all (460 → 464).
  - सः अयम् यः · This, That, Which (grammar): तद् in three genders as the model table, with सः
    and सा from one stem and every other cell from त-, which corrects the 1.x book's "स् → त्"; the Δ
    cards for एतद्, यद्, किम्, सर्व, अन्य and एक; the key cells of इदम्; the indefinites कश्चित्,
    काचित्, किञ्चित्, कोऽपि, कापि, किमपि; sūtra 1.1.27 सर्वादीनि सर्वनामानि; headwords अयम्, यः, अन्यः,
    परः, कश्चित्, कदाचित्, स्वः and निजः, eight in all (464 → 472).
  - अव्ययानि · The Words That Never Change (vocabulary): the correlative grid (-त्र, -तः, -दा,
    -था); the relative–correlative sentence (यः … सः; यत्र … तत्र; यदा … तदा; यथा … तथा); the
    particles च, वा, हि and तु, which never stand first, with एव, इव and अपि; अधः, उपरि and समीपे
    with the genitive; the twenty-two upasargas of the tradition's list as a reference card,
    beside Whitney's nineteen; sūtras 1.1.37 स्वरादिनिपातमव्ययम् and 1.4.59 उपसर्गाः क्रियायोगे;
    Hitopadeśa 1.40 read in homework; headwords यदा, तदा, यथा, तथा, एवम्, क्व, हि and अधः, eight in
    all (472 → 480).
  - समासाः · Compounds (grammar): the four rules (every member but the last in stem form, only
    the last inflected, sandhi at the inner seam, the compound understood through its vigraha);
    four kinds produced and resolved with their vigrahas — द्वन्द्वः, तत्पुरुषः, कर्मधारयः, a kind
    of तत्पुरुषः, and बहुव्रीहिः — and the context test (the thing itself, or someone who has
    it); द्विगुः, उपपद and अव्ययीभावः recognised only; sūtras 2.2.29 चार्थे द्वन्द्वः and 2.2.24
    अनेकमन्यपदार्थे; the compounds of Volumes 1–2 resolved, from विद्यालयः and मातृभाषा to जलज and
    खग; headwords कण्ठः, नीलकण्ठः, ग्रीवा, चित्रः, पादपः, तुल्यः, उदारः and चरितम्, with शक्तिः as an
    upgrade (480 → 488).
  - परीक्षा · Chapter 5 Exam (review): T8, the grid and the four kinds on one page; five tasks in
    one closed-book 45-minute sitting (eight sentences whose nouns become pronoun cells, with one
    case question from earlier in the volume; six pairs of sentences joined with a relative and
    its correlative; ten compounds named and resolved with their cases; a new page of the serial
    read at sight, joined, with ten questions; a dialogue with a guest, joined over its pause
    form), with Station 0, about 15 minutes, before it, so about 60 minutes in the room; the
    ledger stays at 488.

  The serial's episode 5 (our retelling, after Hitopadeśa 1) goes back to the day the doves
  flew with the net and tells it again with names — the dove-king चित्रग्रीवः and his friend the
  mouse हिरण्यकः — in four parts through lessons 1–4; the exam's unseen passage is a new page of
  it. The Hindi parallels are exact contrasts: Hindi आप with a plural verb beside भवान् with the
  third-person singular; Hindi यह and वह, one form for every gender, beside अयम्, इयम्, इदम्; जो …
  वह built clause for clause as यः … सः, with the gender marked in Sanskrit only; the six kinds of
  समास of the Hindi school textbooks beside the tradition's four. Vocabulary counts 4 · 8 · 8 ·
  9 · 0; cells drilled 46 · 73 · 0 · 0 · 0 new, 119 reviewed in the exam. Self-study minutes:
  35 · 52 · 45 · 45 · 45.
- GLOSSARY: सर्वनाम, निपात, विग्रह, द्वन्द्व, तत्पुरुष, कर्मधारय, द्विगु, बहुव्रीहि, अव्ययीभाव, उपपद,
  प्रादि; the rows अव्यय, उपसर्ग and समास updated.
- `research/notes/vol3-plan.md` §7.6: the corrections the Chapter 5 fact base and review made to
  the plan, and the rules its review settled.
- **The Volume 4 plan** (`research/notes/vol4-plan.md`): the binding contract for the six
  chapter fact bases of Volume 4 — पाणिनीयम् · The Pāṇinian System (B1 → B2), 28 lessons in
  six chapters (4 · 4 · 6 · 5 · 5 · 4). Its spine is derivation first (prakriyā): every
  teaching lesson is built round the derivation of a form the learner already owns, and its
  last task is the learner deriving भू → भवति, in task C of v4.c06.l04. For each lesson it fixes
  the one grammar point, the forms, the sūtras by tier, the derivations step by step, the
  model sentences, the headwords and the ledger figure; for the volume, the memory budget,
  the 238 distinct Aṣṭādhyāyī sūtras in learner text (B 26 · Q 25 · R 11 · D 121 · K 51, and
  4 owned Volume 3 sūtras re-read; the fourteen Māheśvara sūtras counted apart; memory load
  at exit 25 new Q + 25 new B by gist), every row the Volume 3 plan left to Volume 4 with
  the lesson that takes it, the texts read with a status for every word-form, and what is
  left to Volume 5. Ledger: 119 new headwords, 508 → 627 (planned exits 521 · 537 · 565 ·
  591 · 617 · 627). It records how it was made (§7): three candidate designs
  (derivation-first, reader-first, system-first) and three judges (a Pāṇinian, a pedagogue,
  a house editor), who ranked derivation-first first (rank points 9, mean score 56.3 of 70;
  reader-first 5, 52.0; system-first 4, 49.3); a synthesis on that spine with grafts from
  the other two (§7.2), every error the judges found fixed or kept with a reason (§7.1); a
  completeness critique, 46 gaps, each fixed (§7.4), and a check of that repair, 17 new
  problems, all fixed; the deputy's decisions on the 19 open questions, confirmed by the
  editor on 2026-11-10 (§7.3); a line-by-line review by fourteen readers (a Pāṇinian
  checker and a course editor for each chapter block, two for the volume frame), every
  finding challenged by a skeptic: 215 confirmed (10 blockers, 72 major, 133 minor), 14
  rejected; the fixes applied most severe first (317 as written, 11 already made by an
  earlier fix, 47 collisions merged in 41 clusters and re-checked: 29 edits); and a
  post-check through four lenses (tables and arithmetic; restatements, in two halves; the
  form and the Sanskrit of the new text): 33 confirmed (14 major, 19 minor), 5 rejected, all
  applied (§7.5). Among the blockers fixed: the अकः of 6.1.101 is an ablative ("after an
  ak"), not a genitive; 8.3.34 replaces the visarga of नमः with स् before ते, it does not
  "keep" a स्; the व् of शृण्वन्ति comes from 6.4.87, not 6.1.77; the steps of दा → ददौ are put
  in order; joined lines are joined (वानर्यस्ति; a cited root before इति); the intermediate
  string of कपोतराजः and the order of the steps in भवान् are corrected. The review left the
  headword total and the exits unchanged, swapped one headword (v4.c01.l02: सवर्णः for
  उच्चारणम्) and raised the sūtra count from 237 to 238. The scripts the plan cites are in
  `research/evidence/vol4-plan/`.
- `curriculum/volume-4/volume.md`: the Volume 4 frame (draft).
- **v3.c06 fact base and chapter frame** (`research/notes/vol3-ch6-connected-reading.md`;
  draft): four reading lessons and the Volume 3 exam, 20 ledger-new words (488 → 508), with
  every authentic passage re-found by line in the e-texts. Verified before drafting by three
  checkers, every finding challenged: 35 confirmed (16 major, 19 minor), 4 rejected; 60 fixes
  applied, 5 found already made, 9 duplicates between checkers. Twelve editor's decisions
  followed (its §7).
- **REFERENCES:** `cowell1895` (the Jātaka translation) and `iranica` (Encyclopaedia Iranica, two
  articles), each search-confirmed; page not opened. (`torzsok2007`, the Clay Sanskrit Library
  Hitopadeśa, was entered and withdrawn at the chapter's Pass C: the estimate it was cited for
  could not be confirmed.)

### Changed

- STYLE_GUIDE §8, rules 16–23: from Volume 4 on the ledger also covers derivation — roots,
  labels, sūtra-internal forms, and the kṛt, taddhita, passive, causative and ordinal forms
  built from owned words never count; a causative, kṛt or taddhita word with its own
  lexicalised sense counts once when headworded; a headword is chosen by a lesson's need or by DCS
  frequency, never because an exam's unseen passage uses it. Each Volume 4 teaching lesson's
  §14 adds "tools added: n". Planned Volume 4 exits: 521 · 537 · 565 · 591 · 617 · 627.
- STYLE_GUIDE §8: 488 reached.
- ROADMAP: Volume 4 planned (note and status log); a Volume 5 note fixing the scope of
  v5.c03 and marking the Mahābhāṣya and Paribhāṣenduśekhara strand "not planned unless the
  ROADMAP adds a strand" (plan §6, Q18).
- IMPROVEMENT_REPORT §10: the rows for IR-016 (taught v4.c02.l03, read v4.c06.l02), IR-022
  (v4.c03.l03), IR-023 (v4.c05.l01) and IR-026 (v4.c04.l04) aligned with the plan's §4.0.1
  (Q8).
- research/verification-log.md: how the Volume 4 plan was made and checked, and the rule
  that a chapter fact base corrects the plan where the plan is wrong.
- **REFERENCES `hitopadesha`:** the entry keeps "c. 9th–12th c. CE" (now "on the scholarly
  estimate") and adds the oldest dated manuscript known (MS Add. 2564, 1373 CE); the citation
  format names all five sections. A narrower 800–950 CE estimate was drafted and withdrawn at
  the chapter's Pass C.
- **Volume 4 plan, the Station 0 chain into Volume 4:** v4.c01.l01 runs the two items that
  v3.c06.l05 and v3.c06.l04 book for it, and v4.c01.l02 the third, as the v3.c06 fact base
  words them; the amendment is recorded in the plan's §7.6.

### Fixed

- **v3.c05 review (passes A–D, every finding verified by skeptics; Pass C in two rounds):** 88
  findings confirmed (3 blockers, 44 major, 41 minor) and 1 rejected; 260 fixes applied, 3
  found already made, 11 duplicates between passes, two of which the editor merged by hand in
  the exam's task D key. The four passes found 85 (3 blockers, 42 major, 40 minor; 254 fixes) —
  Pass A, lesson by lesson, 58; Pass B 10; Pass C 3; Pass D 14. Pass C was run a second time,
  because its first round returned only three findings and no record of what it had opened;
  with a coverage record of 19 lines it found 3 more (2 major, 1 minor; 6 fixes). Among the
  findings: lesson 2 offered a recognition-only cell (अस्मै) as a wrong quiz option and said
  that Hindi यह / वह serve three genders (two blockers); the exam's keys accepted a dative
  vigraha for a genitive tatpuruṣa, which lesson 4 calls wrong — the Kāśikā on 2.1.36 keeps the
  dative compound for a product and its material (the third blocker); lesson 2 could not be
  taught in 45 minutes as written — exercise 1, the conversation and the quiz moved to homework
  (self-study 40 → 52 minutes), and the quizzes of lessons 3 and 4 moved the same way (40 → 45
  each); the callout on 1.1.37 and 1.4.59 now words both as the naming rules they are, as the
  Kāśikā reads them; the vigraha of सज्जनः is सन् जनः; three lines of the exam's unseen passage
  restated lesson lines and were reworded, and its second question now asks what only the
  passage tells; the hook of lesson 1 said the learner had never been told what the ते of
  नमस्ते is; the 1.x pages this chapter replaces (pp. 42–43, 82–84, 111–115) were opened, and
  their errors are listed with corrections in the Teacher Notes of lessons 2–4 (the 1.x lesson
  "6 Samāsa Types", pp. 83–84, added to lesson 4's list at the second citation round); the six
  kinds of समास, at the first round, and the six names of सर्वनाम, at the second, are credited to the
  Hindi school textbooks with no key, because Guru's own page was not opened, so `guru1952` is
  not cited in this chapter; at the second round, Whitney §1102 is cited beside §1122 for the
  place of एव and इव. A post-fix verification re-read nine files (the five lessons, chapter.md, the
  fact base, GLOSSARY.md and the plan) against the commits before the review fixes, in three
  runs, with every claimed leftover challenged: 21 leftovers fixed (1 major, 20 minor), none
  refuted; a fourth run checked the second citation round's fixes in four files: 5 minor
  leftovers fixed, 1 duplicate between two verifiers, none refuted — 26 in all (1 major, 25
  minor). An editor's sweep by script moved 21 notes that stood in parentheses directly after a
  Devanagari word into square brackets.
- **Erratum, v2.c02.l02 §4 and its Teacher Notes** (वसुधैव कुटुम्बकम्): the statement that the
  line "also appears in the Mahopaniṣad" is withdrawn — no edition was opened and no key
  supports it — and replaced by the locus the project has read, the Pañcatantra, Book 5,
  where one of four brahmin friends speaks the verse; "a famous line" is now "a line". The
  two matching rows of the verification log say the same.

## [0.16.0] — 2026-11-10

Volume 3, Chapter 4 — सन्धिः · Sandhi in Use — is reviewed and shipped: five lessons, 21
ledger-new words, 439 → 460 readable words. The joined words the learner has carried whole
since Volumes 1 and 2 (नमस्ते, नास्ति, कोऽपि, जगच्च) are opened: the chapter teaches how words join
where vowels meet, where a visarga meets the next sound and where consonants meet, splitting
before joining in every lesson, and then how to take any joined line back into its words.
From v3.c04.l04 on, every course-written line is printed joined, with its pause form beneath
it.

### Added

- **v3.c04, five lessons, reviewed** — joined so far in lessons 1–3, joined over the pause
  form from lesson 4:
  - स्वरसन्धिः · When Vowels Meet: the seven vowel rules — सवर्णदीर्घः, गुणः, वृद्धिः, यण्,
    अयादि at a word end, पूर्वरूपम्, प्रगृह्यम् — with seven sūtras quoted (6.1.101, 6.1.87,
    6.1.88, 6.1.77, 6.1.78, 6.1.109, 1.1.11); the hyphenated inner seam of a compound, as in
    सूर्य-उदये → सूर्योदये; two worked seams carried from the 1.x book, देवालयः and सूर्योदयः;
    headwords आलयः, उदयः, ईशः, इव, एव and वा, with सूर्यः as an upgrade (439 → 445).
  - नमस्ते · The Visarga at the Seam: the visarga map — the -अः, -आः and other-vowel
    columns, the r-finals पुनः, प्रातः and अन्तः, the special words सः, एषः and भोः — with
    sūtras 8.3.34 and 6.1.132; the नमस्ते thread, step 2: नमः + ते; the 1.x book's visarga
    examples built from owned words, रामोऽहम्, रामो गच्छति, रामश्च and रामः करोति; headwords
    प्रातः, बहिः, अन्तः, उच्चैः, शनैः and तु, all six new (445 → 451).
  - जगच्च · When Consonants Meet: the consonant map — a final म् as anusvāra before a
    consonant, the voicing of a final stop, त् before च, छ and ज, the doubled न्, and writing
    a consonant-final word together with the next — with sūtras 8.3.23, 8.2.39 and 8.4.40;
    headwords दिक्, सम्यक्, नाथः and धीमान्, four in all (451 → 455).
  - पदच्छेदः · Un-joining: Saṃhitā and Pada: the six steps of splitting a joined line, and
    the reverse table; the whole past-tense retelling of v3.c03.l03 printed joined over its
    pause form; sūtras 1.4.109 and 1.4.110; one TRADITION line on the Vedic padapāṭha and on
    a word division that Yāska's Nirukta (6.28) disputes; the changes inside a word (ṇ, ṣ,
    भवति) named and left to Volume 4; headwords पदम्, वाक्यम्, सन्धिः, अवसानम् and संहिता,
    five in all (455 → 460).
  - सन्धिपरीक्षा · The Sandhi Exam: the three maps and the reverse table on one page; five
    tasks in one closed-book 45-minute sitting (sixteen joined shapes split, each with its
    rule; sixteen seams joined; the Volume 2 crow story read aloud joined; a dictation
    written joined, then in its pause form; three lines each on नमस्ते, विद्यालयः, परोपकारः
    and न कोऽपि लघुः), with Station 0, about 8 minutes, before it; the ledger stays at 460.

  The serial is re-read rather than continued (our retelling, after Hitopadeśa 1): four
  selections — ten lines joined at the vowel seams, ten at the vowel and visarga seams, ten
  at every seam, and in lesson 4 the whole 13-line past-tense retelling joined over its pause
  form. The Hindi parallels are exact contrasts: the five names of Hindi school grammar's
  स्वर सन्धि beside the tradition's seven; the tatsama words a Hindi speaker already says
  joined; Hindi print's anusvāra dot beside the Sanskrit class nasal. Self-study minutes:
  35 · 44 · 38 · 40 · 40.
- `research/notes/vol3-ch4-sandhi-in-use.md`: the Chapter 4 fact base — every joined form
  re-derived against Whitney and the sūtra named, the fourteen sūtras checked in the data
  file and the Kāśikā, the printing and IAST layout decided once for the chapter, the Station
  0 bookings worded once, each lesson's texts, exercises and keys, and the editor's eleven
  decisions (§7). The chapter frame was written with it.
- GLOSSARY: स्वरसन्धिः, सवर्णदीर्घः, गुणः, वृद्धिः, यण्, अयादि, पूर्वरूपम्, प्रगृह्यम्, विसर्गसन्धिः,
  व्यञ्जनसन्धिः, संहिता, पदपाठः, पदच्छेदः, अवसानम्; the rows सन्धि, अवग्रह, अनुस्वार, विसर्ग and
  विराम-रूप updated.
- **REFERENCES key `nirukta`** (Yāska's *Nirukta*, ed. Sarup; the course quotes the GRETIL
  e-text), for one TRADITION line in v3.c04.l04 on a disputed word division (Nirukta 6.28
  on Ṛgveda 10.29.1).
- `research/notes/vol3-plan.md` §7.6: the corrections the Chapter 4 research made to the
  plan, and the rules its review settled.
- **Fact base for v3.c05** (सर्वनाम-अव्यय-समासाः · Pronouns, Indeclinables, Compounds),
  `research/notes/vol3-ch5-pronouns-indeclinables-compounds.md`, and the chapter frame
  (status draft). Verified by three checkers with every finding challenged: 52 confirmed
  findings (3 blockers, 19 major, 30 minor), 3 rejected; the editor's decisions are in its §7.

### Changed

- **STYLE_GUIDE §3.1:** the stops that sandhi does not cross now include the question mark,
  the exclamation mark and the comma, and the word before a stop stands in its pause form.
- STYLE_GUIDE §8: 460 reached.
- **`scripts/export_json.py`** exports only lessons whose status is `reviewed` or
  `published`, as the website build already does; `--include-drafts` exports the rest too.
  A draft that is still being written no longer reaches `json/`.

### Fixed

- **v3.c04 fact base, before drafting:** three checkers, with every finding challenged,
  confirmed 40 findings (17 major, 23 minor), 8 of them duplicates between checkers, so 32
  distinct (13 major, 19 minor), and rejected 2. Among the majors: the plan was right that
  the mouse of Hitopadeśa 1 asks the crow कस्त्वम् — in the prose after Hit 1.53 — and the
  fact base's "correction" of that locus was withdrawn; 1.4.110 defines अवसानम्, the pause,
  and no sūtra defines the padapāṭha, which the chapter frame had paired with it in three
  places; छ doubles after a short vowel between words too (6.1.73), and the doubling is
  optional only after a word-final long vowel (6.1.75–76); the क् of दिक् is by 8.2.62, not
  8.2.30; the ण rule as worded predicted \*रामाण्, though a word-final न never becomes ण;
  तयागच्छन्ति, which 8.3.19 allows beside त आगच्छन्ति, stood as a wrong quiz option; "the
  verb decides" was a false test for the two readings of मूषक आगच्छति; प्रातः stood in
  lesson 1, one lesson before it is taught; the exam's Station 0 and its conversation
  rehearsed two of the exam's own task items; and the 1.x book's vowel and visarga pages
  had been neither checked nor carried in. The editor's eleven decisions followed
  (§7): among them the `nirukta` key, the comma as a stop, the Ṛgveda locus 10.29.1, the
  exam with task C printed joined only, and the -आः column of the visarga map made
  productive.
- **v3.c04 review (passes A–D, every finding verified by skeptics):** 99 findings
  confirmed (34 major, 65 minor) — 98 distinct (33 major, 65 minor), since one was found by
  two passes — and 7 rejected, five of them because another pass had already made the same
  fix; 242 fixes applied and 1 found already applied. No blocker. Among the findings:
  lesson 2 could not be taught in 45 minutes as written — its dictation moved to homework
  (self-study 40 → 44 minutes), and lesson 3's listening drill moved the same way (35 →
  38); the Hindi voicing rule in lesson 3 wrongly listed ज, ल, ह for त्; 1.1.11 is a
  definition in the first book and does not stand under the heading संहितायाम्; the
  voice-over of lesson 2 said -अः becomes -ओ before every voiced sound; quiz options that
  were correct joins under another analysis, or only a different word division, were
  replaced by error forms; keys now accept every correct answer (the anusvāra or the class
  nasal, the visarga or the doubled sibilant, the voiced or the voiceless pause form); the
  1.x book's sandhi examples (pp. 41–42 vowels; pp. 71–73 visarga) were re-derived — the
  correct ones built from owned words are carried into lessons 1 and 2, and the wrong ones,
  among them a memory card that defines वृद्धि as आ + इ/उ, are listed in the Teacher Notes
  with their corrections; the exam's visarga map now agrees with lesson 2's (पुनः is an
  r-final); every lesson's §3 reaches the lessons its review_of lists. A post-fix
  verification re-read twelve files against the diff from their first drafts, in three
  runs, with every claimed defect challenged: 25 minor leftovers fixed, none refuted; the
  editor aligned three more sentences of lesson 2 on the -आः column with its maps.
- **v1.c03.l04 §14 (the मनः row)** promised the "full noun story" of मनस् in Volume 3. The
  Volume 3 plan teaches its seam in v3.c04.l02 and leaves the declension of s-stems to
  Volume 4 (v4.c05); the line now says so.
- **v2.c06.l04 (§15 and §27)** sent all "word-building machinery" to Volume 3. Volume 3
  teaches prefixes and compounds (v3.c05.l03–l04); roots and suffixes are Volume 4's. Both
  lines now say so.
- **v3.c03.l05 §20 (a Station 0 booking)** printed the four example forms in a parenthesis
  directly after the Devanagari word विधिलिङ्, where only IAST may stand; they now follow a
  dash. v3.c04.l01, which runs that booking, carries the same wording.

## [0.15.0] — 2026-11-10

Volume 3, Chapter 3 — तिङन्तप्रवेशः (The Present-System Verb) — is reviewed and shipped:
five lessons, 28 ledger-new words, 411 → 439 readable words. The verb now runs through
every person and number, in two families of endings, and in four tenses and moods: the
present, the imperfect, the imperative and the optative.

### Added

- **v3.c03, five lessons, reviewed** — pause form throughout:
  - वयम् गच्छामः · We Go: the present in all nine cells (table T6, the first family of
    endings), with अस् and कृ learned whole; the pronouns आवाम्, वयम्, युवाम्, यूयम् as
    labelled cells; two doers on a dual verb; sūtra 7.3.101 अतो दीर्घो यञि for the
    lengthening in गच्छामि, गच्छावः, गच्छामः; a recognition card for the athematic plurals
    (शृण्वन्ति, जानन्ति, ददति) (411 → 418).
  - मह्यम् रोचते · The Second Family of Endings: लभते and five more verbs in the
    ātmanepada; रोचते, owned since Volume 2, gets its whole table; the dictionary's P., A.
    and U.; a recognition card for the passive in -यते, with मन्यते and जायते kept apart as
    middles (418 → 424).
  - आसीत् · There Was: the imperfect as the story tense — the augment, its place after a
    prefix (आगच्छत्, प्राविशत्), ऐच्छत्; the chunks उवाच, अब्रवीत् and आह; पुरा and अथ
    (424 → 432).
  - वदतु, वदेत् · Requests and Advice: the imperative as a card on forms already known
    (sūtras 3.4.85 and 3.4.86), with -स्व and -ताम् in the second family; भवान् with the
    3rd person for a polite request; मा for "don't"; the optative as a card, productive in
    its 3rd person, with न for "should not" (432 → 439).
  - क्रियापरीक्षा · The Verb Exam: the present system on one page; five tasks in one
    45-minute sitting (a conjugation grid, the Volume 2 crow story retold in the imperfect,
    a requests role-play, listening, dictation), with Station 0 before it.

  One production formula holds in every table: singular and plural in all persons and the
  3rd-person dual are produced; the 1st- and 2nd-person duals are shown and parsed, never
  required and never scored. The serial continues (our retelling, after Hitopadeśa 1):
  the king of the doves speaks, the flock flies off with the net, and the mouse cuts the
  snares. The Hindi parallels are exact contrasts: two numbers against three; तू, तुम and
  आप against the 2nd person and भवान्; ने with the past of a transitive verb against the
  Sanskrit imperfect; चाहिए against the optative; मत against मा.
- `research/notes/vol3-ch3-present-system-verb.md`: the Chapter 3 fact base — every
  paradigm cell re-derived against Whitney, the three sūtras checked against the Kāśikā,
  the Station 0 bookings worded once, each lesson's texts, exercises and keys, and the
  editor's decisions.
- STYLE_GUIDE §3.1, pause form and joined text: all course-written Sanskrit stays in pause
  form through v3.c04.l03; from v3.c04.l04 it is printed joined, with the pause form, IAST
  and gloss below each line. The section fixes where joined words are written together and
  where a space stands, where sandhi does not apply (across a daṇḍa, a speech dash, a
  closing quotation mark before इति), how a compound's inner seam is shown, and how
  authentic text is divided. It is the Volume 3 plan's §1.4, approved with the plan and
  required before Chapter 4 is drafted.
- GLOSSARY: परस्मैपदम्, उभयपदी, कर्मवाच्य, लङ्, लकारः, आगमः, लोट्, विधिलिङ्, निषेधः; the rows
  आत्मनेपद, लट् and द्विवचनम् · बहुवचनम् updated.
- `research/notes/vol3-plan.md` §7.6: the corrections the Chapter 3 research made to the
  plan, and the rules its review settled.

### Changed

- STYLE_GUIDE §8: 439 reached.

### Fixed

- **v3.c03 fact base, before drafting:** three independent lenses and an evidence verifier
  confirmed 38 findings (16 major, 22 minor) and rejected 4. Among the majors: homework
  that asked for "what you did today" in the imperfect, which the same lesson teaches as
  the past not of today; sūtra 3.4.85 glossed as giving the imperative all the imperfect's
  endings; the six lakāras still to come miscounted (the benedictive is a use of लिङ्); a
  polite request put in the mouth of the Hitopadeśa's tiger, who is reporting another's
  advice; a misquoted example from Whitney; exercises that required recognition-only
  cells.
- **v3.c03 review (passes A–D, every finding verified):** 79 findings confirmed — 74
  distinct, since five were found by two passes — and 8 rejected; 147 fixes. One blocker:
  lesson 2 said that in Hindi मुझे फल अच्छे लगते हैं the liked thing is the subject, in a
  FACT callout, in the Hindi, in a note and in a quiz key; Hindi seats the liker in a
  को-form, and what the two languages share is the verb's agreement with the liked thing
  (the course's wording since v2.c05). Majors (24 distinct), among them: two friends
  saying वयम् in the lesson that teaches the dual for two; the Hindi names of the three
  persons given to the wrong persons; "the family is a property of the word" for every
  verb the course owns (कृ and others take both); "the done-to becomes the कर्ता" in a
  passive; पूर्ण भूत for मैंने फल खाया (it is सामान्य भूत); the chunks उवाच, अब्रवीत्, आह
  said to exist in the 3rd singular only (they are taught in it only); quiz items with a
  second defensible answer; exercise prompts with two readings; "every Volume 1 story
  opened with पश्य"; भवान् with the 3rd person cited to a Whitney section that does not
  say it; the tradition's names of the persons and families cited to a Laghukaumudī
  passage that only recites the forms; Station 0 keys that scored recognition cells; a
  quiz placed neither in class nor in homework; an exam model answer that did not follow
  its own examiner's card. A post-fix verification re-read all seven changed files
  against their pre-review text, with every claimed defect challenged: 16 minor
  leftovers fixed, none refuted.

## [0.14.0] — 2026-11-10

Volume 3, Chapter 2 — सुबन्तविस्तारः (Nouns & Cases II) — is reviewed and shipped: five
lessons, 24 ledger-new words, 387 → 411 readable words. The noun is now open beyond the
a-stem singular: the plural, the feminine with agreement, the i-, u- and ṛ-stems, the dual,
and a map of the six roles.

### Added

- **v3.c02, five lessons, reviewed** — pause form throughout:
  - बहवः · Many: the a-stem plural in every case (table T2: रामाः, फलानि, with देवानाम्
    beside रामाणाम्); the plural askers and answers; adjectives agreeing in number and case;
    the numerals 1, 3, 4 and 5–10 with masculine and neuter nouns (त्रयः, त्रीन्, त्रीणि);
    the verb's -अन्ति and सन्ति beside a plural doer, labelled as Chapter 3's (387 → 392).
  - सा प्रिया · She, and the Words that Follow Her: the ā-stem feminine (T3, बालिका) with सा
    and ताः; नदी as a delta card; agreement in gender; एका, तिस्रः, चतस्रः, with the 1.x
    book's "ततस्रः" corrected in the open (392 → 399).
  - अग्निः गुरुः च · Fire and Teacher: the i- and u-stems (T4), where the stem vowel
    strengthens and गुरवे नमः, owned since Volume 2, explains itself; the feminine delta
    card (मतिः, धेनुः); बहु; the ablative "than"; a recognition card for पक्षी (399 → 406).
  - पितरौ · Parents: the ṛ-stems (T5: पिता, माता, दाता, स्वसा); the dual as a card of three
    endings, productive in the nominative and accusative; द्वौ / द्वे and उभौ; sūtra 1.2.70
    पिता मात्रा (406 → 411).
  - कारकाणि · The Roles Map, the chapter exam: the six kārakas each beside its usual case,
    and the places where case and job part company (नमः with a dative and no receiver; सह
    with an instrumental of company; the doer in the instrumental in मया कृतम्); the 8×3
    table of रामः restored from the 1.x book and verified; a recognition card for the -त
    participle of transitive verbs; five tasks in one 45-minute sitting, with Station 0
    before it.

  The serial continues (our retelling, after Hitopadeśa 1): the hunter comes back with
  grains and snares, the flock flies down, and the king of the doves is caught. The Hindi
  parallels are exact contrasts again: the oblique plural, अच्छा / अच्छी / अच्छे against
  three genders, दो with a plural against the dual, the plural of respect.
- `research/notes/vol3-ch2-plural-stems-dual.md`: the Chapter 2 fact base — tables T2–T5
  and the dual card checked cell by cell against Whitney, the numerals by gender, the roles
  map, the Station 0 bookings worded once for both lessons, each lesson's texts, exercises
  and keys, and the editor's decisions.
- REFERENCES: `fillmore1968` (C. J. Fillmore, "The Case for Case", 1968) and
  `kiparskystaal1969` (P. Kiparsky and J. F. Staal, "Syntactic and Semantic Relations in
  Pāṇini", 1969), both cited bare, for one HISTORY note in lesson 5 that sets Pāṇini's
  kārakas beside the semantic roles of modern grammar as a parallel, with no claim of
  influence either way.
- GLOSSARY: द्विवचनम् and बहुवचनम्; पुंलिङ्गम्, स्त्रीलिङ्गम्, नपुंसकलिङ्गम्; विशेष्यम्;
  सङ्ख्या; the stem-class names अकारान्त … ऋकारान्त; एकशेषः. विशेषण and कारकम् updated.
- `research/notes/vol3-plan.md` §7.6: the corrections the chapter fact bases have made to
  the plan, listed for the chapters still to come.
- `research/notes/vol3-ch3-present-system-verb.md` and
  `curriculum/volume-3/chapter-03/chapter.md`: the Chapter 3 fact base and frame as first
  written; their verification is in progress and no lesson is drafted from them yet.

### Changed

- STYLE_GUIDE §8: 411 reached. Two rules the review settled are recorded in
  `research/verification-log.md`: a form that is not yet taught may not stand even as a
  wrong option of a quiz or exercise item, and everything a lesson asks of the learner
  outside class time is counted in `self_study_minutes`.

### Fixed

- **v2.c03 (numbers), erratum** — lessons 1, 2, 3 and 5 said that the gender of the number
  words waits for Volume 4. The Volume 3 plan teaches the numerals 1–10 in the nominative
  and accusative, by gender, in v3.c02, and leaves the full numeral system to v4.c05. The
  24 lines that carried the old pointer now say so, as do two related-lessons notes found
  at verification; the ROADMAP's preservation-map row for the numeral paradigms names
  v3.c02, v3.c05 and v4.c05.
- **v3.c02 fact base, before drafting:** three independent lenses (forms, facts, contract)
  and an evidence verifier confirmed 39 findings (3 blocker, 8 major, 28 minor) and
  rejected 1. The blockers: the recognition card for the -त participle was stated for
  every verb, with intransitive examples (found by two lenses) — it holds for transitive
  verbs; and मात्रे नमामि was starred as an error although नम् takes the accusative or the
  dative. Among the majors: sūtra numbers meant for Teacher Notes printed in learner text;
  three wrong Whitney locators; an objective that promised production of recognition-only
  cells; a key that accepted कर्णः but not कर्णम् for the singular of कर्णौ.
- **v3.c02 review (passes A–D, every finding verified):** 61 findings confirmed — 56
  distinct, since Pass B confirmed five that Pass D had already fixed — and 13 rejected,
  seven of them because another pass had fixed the same thing first; 108 fixes. One
  blocker: lesson 4 said the feminine dual बालिके looks like a locative singular (it
  coincides with the vocative singular; the locative is बालिकायाम्). Majors (18 distinct):
  untaught forms used as wrong quiz options; reel lines in lessons 2 and 3 that claimed
  more than the lessons teach; "Hindi गुरु never changes" (it does, in the oblique plural);
  a rule for the genitive plural that would have produced *हरीनाम्; the crow story's moral
  given to "the crow and the lion"; a listening pair with no locative in its "locative"
  phrase; an exercise key that rejected correct answers; the numeral's oblique cells on
  the dual card, in lesson 4 and again in the exam; गत filed under verbs with no object
  although the goal of motion is a कर्म; an exam-day check that applied the ṇ rule to the
  ṣ of -एषु; the exam's record of the serial's departures, which called the river "ours";
  a Hindi grammar cited for a statement about the course's Sanskrit; the exam's examples
  printing five of the eight sentences of the task they prepare; preparation counted in
  neither time figure (self-study is now 65 minutes: 20 before the sitting, 45 after);
  lesson 4's review section missing three of the lessons it claims to review. After the
  passes, the gender terms in Hindi text were given their Hindi spellings throughout (28
  lines). A post-fix verification re-read all twelve changed files against their
  pre-review text, with every claimed defect challenged: 19 minor leftovers fixed, one
  claimed defect refuted.

## [0.13.0] — 2026-11-10

Volume 3 — व्याकरणम् · Core Grammar opens. The volume is planned in full, and its first
chapter, सुबन्तप्रवेशः (Nouns & Cases I), is reviewed and shipped: five lessons, 27
ledger-new words, 360 → 387 readable words.

### Added

- **v3.c01, five lessons, reviewed** — the masculine and neuter a-stem singular in all
  eight cells, two cases a lesson, each case arriving as the answer to its question word;
  pause form throughout:
  - कः किम् — कर्ता कर्म च · Who and What: the nominative and the accusative; the goal of
    motion; two accusatives with नयति and पृच्छति (360 → 367).
  - कुत्र कुतः — अधिकरणम् अपादानम् च · Where and From Where: the locative (place, the
    place reached, time) and the ablative (367 → 374).
  - केन कस्मै — करणम् सम्प्रदानम् च · With What, For Whom: the instrumental and the dative;
    सह and विना; नमः, स्वस्ति and रोचते with the dative; the ṇ of रामेण as an observed
    spelling in three columns; sūtras 2.3.16 and 2.3.19 (374 → 381).
  - कस्य हे — सम्बन्धः सम्बोधनम् च · Whose? and O …!: the genitive and the vocative;
    possession with the genitive; the two cases that, according to Pāṇini, are not kārakas
    (381 → 387).
  - विभक्तयः · The Eight Cases, the chapter exam: Station 0, four stations and five tasks —
    listening with case questions, dictation, the production grid, the case detective over
    both Volume 2 stories, a recorded scene description — with the singular column
    assembled and sūtra 1.4.14.

  Every grammar lesson follows one recipe (a scene; the question the new form answers; the
  forms the learner already owns that answer it; the pattern named; the table built by the
  learner; production), reports the cells it drills, and ends its grammar section with a
  paradigm ledger. The Hindi parallels (को, से, के साथ, में / पर, का / के / की, ने, हे)
  are taught as exact contrasts. The §17 story is a serial: our retelling of the doves and
  the mouse, after Hitopadeśa 1, labelled as a retelling on every page.
- **The Volume 3 plan** (`research/notes/vol3-plan.md`): the binding contract for the six
  chapter fact bases. For each of the 30 lessons it fixes the one grammar point, the forms
  (every paradigm cell in Devanagari and IAST), the model sentences, the headwords and the
  ledger figure; for the volume, what becomes allowed when, the eight memorised tables and
  their delta cards, the recognition cards, the 28 sūtras quoted to the learner, every
  promise Volumes 1–2 made to Volume 3 with the lesson that keeps it, the Chapter 6 texts
  (a Hitopadeśa passage, a Pañcatantra story opening, three verses, the unseen exam
  passage) with a status for every word-form and measured gloss ratios, and what is left
  to Volume 4. It records how it was made: three independent designs, three judges, a
  synthesis, a critique (24 gaps), the editor's decisions on 14 open questions, and a
  block-by-block review of the repaired plan (68 confirmed fixes, 12 rejected).
- `curriculum/volume-3/volume.md`: the Volume 3 frame (draft until the volume is complete).
- `research/notes/vol3-ch1-cases-singular.md`: the Chapter 1 fact base — table T1 checked
  cell by cell against Whitney, the ṇ sort, the Hindi parallels, the Station 0 bookings
  worded once for both lessons, and each lesson's texts, exercises and keys.
- STYLE_GUIDE §8, rules 6–15: from Volume 3 on the ledger counts lemmas — one entry per
  noun, adjective, pronoun or verb; no cell of a taught table ever counts again — and each
  grammar lesson reports the cells it drills and keeps a paradigm ledger. Volume 3 exits as
  planned: 387 · 411 · 439 · 460 · 488 · 508 (387 reached with this release).
- REFERENCES: `kachru2006` (Y. Kachru, *Hindi*, 2006) and `guru1952` (K. Guru, *Hindī
  vyākaraṇ*, 1952), both cited bare; `laghukaumudi` is cited by the sūtra under which a
  passage stands.
- GLOSSARY: the seven numbered case names and सम्बोधनम्; कारकम् and the role names करणम्,
  सम्प्रदानम्, अपादानम्, अधिकरणम्; सम्बन्धः; सुप्, तिङ्, सुबन्तम्, तिङन्तम्, पदम्. कर्ता and
  कर्म are re-glossed as role names (Volume 1's "subject" and "object" kept as the rough
  labels they were), and विभक्ति as "case".

### Fixed

- **v3.c01 fact base, before drafting:** three independent lenses (forms, facts, contract)
  and an evidence verifier confirmed 40 findings (16 major, 24 minor) and rejected 8. Among
  them: दण्डेन सह for a carried stick, which undid the means / company contrast the chapter
  teaches; a Hindi prompt that used को with पूछना; "-म् on every masculine object" (true of
  the singular only); a folk etymology of मनोरथ; "owned" lines quoted from lessons that do
  not contain them; two headwords never used in a sentence.
- **v3.c01 review (passes A–D, every finding verified):** 58 findings confirmed (15 major,
  43 minor), 5 rejected; 74 fixes. Majors: सह stated to follow its partner as a rule of
  Sanskrit (it is the course's practice order; both orders are correct); "the च-row (but
  not य)" among the ṇ blockers, which put य in the च-row; two HISTORY callouts that had the
  Hitopadeśa's hunter spread his net under the tree; कम् अपि, the indefinite, used as a
  कम्? question; a drill that said the locative's -े never follows त (प्रभाते does); the
  error *अहम् पुस्तकम् अस्ति blamed on Hindi word order; विभक्ति defined in Hindi as a
  "kāraka-form" in the lesson that teaches two cases that are not kārakas; an exam item
  with two defensible answers; an exam that needs about 55 minutes in the room while its
  front matter said 45 (now stated); lesson 3 naming a different pair of departures from
  the Hitopadeśa than its siblings; the glossary missing every case and role name the
  lessons point to. A post-fix verification re-read all
  eight changed files against their pre-review text, with every claimed defect challenged:
  six files were clean, and three minor defects were fixed (two fixes had each added five
  minutes to the exam's homework; the fact base kept the exam's old model sentence; the
  chapter frame counted 25 "nouns" where the exam scores 25 noun tokens).

## [0.12.1] — 2026-11-10

A correction release: an independent error sweep of everything shipped through 0.12.0 —
all 61 lessons of Volumes 1–2, the chapter and volume frames, the research notes and the
project documents. No lesson was added and no ledger figure changed.

### Fixed

- **Course-wide sweep:** 264 findings confirmed (6 blocker, 114 major, 144 minor) and 39
  rejected, after every finding passed an evidence check and every blocker and major two
  further lenses. 431 exact fixes went into 83 files. A post-fix
  verification then re-read all 83 changed files in 23 groups against the pre-sweep commit,
  with every claimed defect challenged: 31 claimed, 3 refuted, 23 distinct leftovers fixed
  (a duplicated Station 0 item in v1.c03.l06, a headword count that no longer added up in
  v2.c01.l05, a stale "कृ's ष" label, missed restatements, a duplicated GLOSSARY row,
  line wrapping).
- **Wrong content removed (the six blockers):**
  - v2.c04.l05 still taught, in seven places and two answer keys, that the ष of करोषि is
    "कृ's own habit"; the 2026-08-06 review had withdrawn that reason everywhere else
    (शृणोषि has the same ष). The exam now says what l03 says: the ष comes with the whole
    word.
  - v2.c04.l04 quiz item 9 keyed "a word's ending shifts with its role" for five words in
    -म्, four of which are neuters that keep -म् as subject too. The key now separates
    विद्यालयम् from the four neuters.
  - v1.c02.l05 derived all four of ए ऐ ओ औ from a+i / a+u; ऐ and औ come from ā+i / ā+u
    (Whitney §§27–29), as l04 already said.
  - v2.c06.l03 still said in five places that a describing word "wears" its noun's ending;
    it agrees with its noun in gender, number and case.
- **Half-applied earlier corrections completed:** अपि is not an enclitic (v2.c02 exam and
  fact base); स्वसा as the older, inherited word for "sister" (v2.c02); only the
  numerals one to four mark gender (v2.c03.l01, l05); Hindi does write visarga in a few
  tatsama words (v1.c02.l07); the "few native words begin with ट ठ ड ढ" statement and its
  quiz key (v1.c03.l06).
- **Citations brought in line with their sources** (dictionary citations checked against
  Apte 1890 and Monier-Williams, grammar citations against Whitney and the Aṣṭādhyāyī):
  wording the dictionaries do not carry is no longer printed as a quotation (कुशलम् ते,
  the धन्यवादः gloss, परिवारः "family", शुभम् अस्तु as a closing formula); citations to
  headwords Apte does not have (हल् in the grammatical sense, सप्ताह) now point to where
  the word is recorded; जगत् ~ √गम् is cited to Monier-Williams, which gives it; wrong
  Whitney section numbers are corrected (virāma §11, vowel signs §10, candrabindu, vowel
  length, the diphthongs); one HISTORY callout had Whitney "warning English readers" about
  their t and d — what §47 reports is that Indian speakers make the dentals with the tip
  well forward against the upper teeth, so that English t and d sound closer to the
  retroflex row to them, and the callout now says that; STYLE_GUIDE's model FACT callout
  cited Whitney §19 for a statement §21 makes.
- **Promises the course did not keep:** v1.c06.l02 and v2.c01 promised the gender system,
  the plural and the feminine polite forms "later in Volume 2"; they are Volume 3's, and
  every such pointer now says so. v1.c03.l01 sent compounds to Volume 2 (Volume 3).
- **False statements about the course's own history:** "the course's first self-authored
  connected production" (v2.c04.l05; v2.c02.l05 had one), "the learner owns only पठामि and
  वदामि" (v2.c04.l01; अस्मि, नमामि and वसामि are owned), two claims about the 1.x
  curriculum that its PDF does not bear out.
- **Claims of scale and superlatives (STYLE_GUIDE §7):** retrieval practice is described as
  what Roediger & Karpicke 2006 shows — it beats re-reading for long-term retention — and
  no longer as "the strongest rehearsal there is" (nine lessons); formulaic chunks are
  "taught whole and analysed later" [REF:nation2013], not "learned fastest"; unsourced
  rankings reworded ("the most famous name in Sanskrit", "the most famous syllable on
  Earth", "the busiest verb in the language", "one of the tradition's most quoted lines",
  "zero itself is India's gift").
- **Revision chain:** v1.c03.l06's Station 0 now runs the card re-sort that v1.c02.l07
  booked "before the Chapter 3 quiz" (it had been dropped); v1.c06.l04's Station 0 names
  the third item v1.c05.l05 booked; v2.c02.l01's Station 0 re-runs the courtesy ladder
  with the calling shape श्रीमन् (it had the naming shape श्रीमान्, which v2.c01.l04 teaches
  against); v2.c05.l05's task E thresholds agree with their rubric; the Volume 1 exit
  profile says what the volume exam asks for — reading a first śloka aloud in pause form —
  not "recites one memorized śloka".
- **Phonetic coaching:** ल is made with the tip just behind the upper teeth (v2.c05.l04
  had "on the ridge"); किमर्थम् is three syllables, not "four even beats" (v2.c05.l01).
- **Hindi:** "pause form" is विराम-रूप everywhere (ten places said ठहराव-रूप). GLOSSARY
  now names one head term for "cognate", सजातीय, and records सजात and सगोत्र as the
  variants some lessons use.

### Added

- GLOSSARY: 30 entries the lessons use but the glossary lacked — 24 terms (the grammar
  terms Volume 2 teaches: क्रिया, पुरुष and the three persons, एकवचन, लट्, उपसर्ग, धातु,
  आत्मनेपद, विभक्ति, लिङ्ग, समास, सन्धि, कर्ता, कर्म; the working terms प्रयत्न, -कार,
  संज्ञा, पाद, सुभाषित, कुशलप्रश्न; विराम-रूप; सजातीय, तत्सम, तद्भव) and six entries of the
  course's own working vocabulary (ledger, upgrade row, Station 0, loanword, calque, the
  four kinds of word journey).
- `research/verification-log.md`: the sweep's method, counts and the decisions it settled.

## [0.12.0] — 2026-11-01

Volume 2 Chapter 6 — कथाः शब्दयात्राश्च (Stories & Word Journeys) reviewed and shipped:
**Volume 2 (Words & Sentences) is complete** — 30 lessons, 123 ledger-new words, 360
readable words at its exit. Before its review, the chapter had a deep research pass of its
own: every factual claim re-verified on the web and challenged by an independent skeptic.

### Added

- v2.c06 five lessons, reviewed: The Thirsty Crow (the crow story in pause form; an Aesopic
  fable, Perry 390, with no known version in India's old fable books), The Lion and the
  Mouse (Perry 150, also told in an Egyptian Demotic narrative; its two Indian cousins; the
  1.x text compared and corrected in the open), Three Sayings (अहिंसा परमो धर्मः at its
  five critical-edition loci and the धर्महिंसा misquotation; उद्यमेन हि सिध्यन्ति… from the
  Hitopadeśa; परोपकारः पुण्याय… in TRADITION framing), Word Journeys (the 1.x "English from
  Sanskrit" list re-sorted into cognate, loan, Latin route and false; modern coinages
  labelled) and the Volume 2 exam (Station 0, four review stations and five tasks; it
  gates Volume 3). 32 ledger-new words: 328 → 360.
- `research/evidence/vol2-ch6-deep-research.json`: the chapter's deep-research dossier —
  159 claims in six topics, each with its evidence, sources, the skeptic's challenge and the
  decision taken.
- REFERENCES: `rackham1940` (Pliny, *Natural History* 10.125, Loeb), `sternbach1974`
  (*Mahā-subhāṣita-saṃgraha*, cited by subhāṣita number), `piyusham5` (the Uttar Pradesh
  Class 5 Sanskrit reader, cited by lesson title). The `hitopadesha` entry names the course's
  verse numbering (the GRETIL e-text) and where it diverges from the Nirṇaya Sāgara edition
  that Apte cites; `panchatantra` names its Sanskrit text (Jha, Chowkhamba 1991);
  `mahabharata` gains the citing form for star and appendix passages and the e-text credit.

### Fixed

- v2.c06 deep research: 159 claims re-verified; 86 held as written, 73 were flagged, and
  after the skeptic's challenge 67 were corrected (219 edits) and 6 kept as written. Main
  corrections: the crow fable's earliest known versions are Greek and Latin of the 1st
  century CE (a Greek epigram and Pliny's report), with Avianus (c. 400 CE) later; *yoga* is
  first recorded in English in 1785 (Wilkins's Bhagavad Gītā), not c. 1820; *video* is from
  Latin *vidēre* "to see"; Grimm's Law carries its exception (*t* after *s* or *k* stays:
  *stand*, *night*); दूरदर्शनम् is an older compound ("far-seeing; foresight") in a new
  sense; anusvāra before *s*/*h* transcribed as a nasalized vowel throughout, as in
  Volume 1.
- v2.c06 review (passes A–D, adversarially verified): 65 findings confirmed (1 blocker,
  29 major, 35 minor) and 2 rejected, merging to 34 distinct issues; 83 fixes. The blocker:
  l03's grammar callout said a describing word "wears the ending of the noun it describes"
  — now agreement in gender, number and case. Majors: the exam accepts either Indian
  cousin of the lion story, with the Hitopadeśa's added to its cited callout; the reading
  ladder's story bar follows l01's natural pace (under 65 s; was "under 40 s", faster than
  l01's own timed bar); Station 0 runs the deck l04 booked; the crow retelling is scored on
  l01's plot map; exam pointers in l02/l03 corrected (the lion story is task A's listening
  text); "where the story comes from" → "where it is found"; unsourced superlatives cut;
  "sources you can check" → "source lines as firm as the evidence". A post-fix
  verification re-read all 11 changed files against the pre-review commit: six were clean,
  and five minor defects (stale §27 notes, one Hindi restatement of a claim the review had
  scoped, one fact-base clause) were fixed.
- `curriculum/volume-2/volume.md` describes Volume 2 as built: 360 readable words at exit,
  123 ledger-new (never more than 11 in a lesson), the present singular in all three persons,
  the four-kind word sort.
- v2.c02.l02: वसुधैव कुटुम्बकम् located as Mitralābha 71 in the GRETIL numbering (was "in
  common editions"; the Nirṇaya Sāgara edition has 70).
- STYLE_GUIDE §8: the canonical Volume 2 exits gain 360.

### Known follow-up

- A course-wide superlative audit (STYLE_GUIDE §7): earlier exams still say retrieval plus
  recombination is "the strongest rehearsal pair there is" (v2.c03.l05, v2.c04.l05,
  v2.c05.l05; similar lines in v2.c04.l03 and v2.c05.l02), and some Volume 1 hooks use "the
  most famous" lines. Chapter 6 was cleaned; the rest is logged for one sweep.

## [0.11.0] — 2026-10-27

Volume 2 Chapter 5 — संवादः (Daily Conversation) complete and reviewed; Chapter 6 —
कथाः शब्दयात्राश्च (Stories & Word Journeys) drafted in full; and the course's first public
delivery target, the website.

### Added

- v2.c05 five lessons: When and Why (कदा, किमर्थम्, यतः, इदानीम्, आगच्छति — the nine-asker
  kit and the *kʷ- shelf), Keeping the Conversation Alive (अहम् न अवगच्छामि, भवान् पुनः
  वदतु, मन्दम्, अस्तु — the classroom-survival chain with usage labels), Wanting and Liking
  (इच्छति; मह्यम् / तुभ्यम् रोचते "it pleases me"), At the Market (आपणः, कियत्, मूल्यम्,
  ददातु, बहु / अल्पम् / पर्याप्तम्; bare-number prices) and the Conversation Exam (role
  cards, nine honesty cards, an unscripted round). 20 ledger-new words: 308 → 328.
- v2.c06 five lessons drafted (status: draft, review next): The Thirsty Crow, The Lion
  and the Mouse, Three Sayings, Word Journeys and the Volume 2 exam; open review items in
  the fact base §7.
- GLOSSARY: विशेषण.
- **Website.** `scripts/build_site.py` builds a static site from the curriculum Markdown
  (reviewed files only): home page with the sound grid and course map, volume and chapter
  pages, every reviewed lesson with labelled register callouts, linked `[REF:]`
  citations and lesson cross-references, a teacher view for §22–§27, a word list of every
  §14 headword, a sources page listing where each reference is cited, glossary, method,
  roadmap, changelog and search. Styles and script live in `website/assets/`;
  `website/README.md` documents the mapping and the publishing rule.
- **GitHub Pages deploy.** `.github/workflows/pages.yml` validates, builds and uploads the
  site on every push to `main` or a `claude/**` branch and deploys it from `main` (one-time setup: Settings → Pages →
  Source: GitHub Actions).
- `markdown-it-py` added to `scripts/requirements.txt`; `_site/` ignored.

### Fixed

- v2.c05 review (passes A–D, adversarially verified): 27 findings confirmed (10 major,
  17 minor) and fixed, 4 rejected; a post-fix verification of every changed file found
  one stale metadata line, also fixed. Majors: the present tense no longer "cannot state
  a past" (it cannot make one with ह्यः; Whitney §§777–778); भवान् glossed "sir", with
  भवती for a woman; the pronoun-free request ददातु labelled a modern spoken convention;
  Hindi मुझे … पसंद है no longer said to make the liked thing the subject; the *kʷ- shelf
  reconciled with v2.c03.l02's कति ~ *quot*.
- Validator: the IPA check accepts the NFC-composed nasalized vowels (ĩ ũ ã ẽ õ) that
  STYLE_GUIDE §2's [◌̃] transcription produces.

## [0.10.0] — 2026-10-24

Volume 2 Chapter 4 — क्रियाः (First Verbs) complete and reviewed, closing the Volume 2
Chapters 1–4 arc; and a deep research audit of everything shipped before it (Volume 1 and
Volume 2 Chapters 1–3), with every finding verified by independent skeptic panels before
any fix was applied.

### Added
- v2.c04 five lessons: The Verb Bank (seven new verbs, whole-word, with the जानाति~know
  and पिबति~bibit shelf and the honest "गच्छति and *go* are not related" line), The
  Three Persons (the course's first grammar lesson: -मि/-सि/-ति named from forms the
  learner already owned; असि completes the identity trio), What Are You Doing? (the
  करोति family as chunks; अन्नम्, क्षीरम्), A Day of Verbs (a 12-sentence passage in all
  three persons, three-speed protocol), and The Verb Exam (production conjugation both
  directions; the मम दिनम् self-narration). 11 ledger-new words: 297 → 308.
- STYLE_GUIDE §8 — the word-ledger rule (ledger-new, review and upgrade rows; verb forms;
  what `vocabulary_count` counts).
- GLOSSARY: अन्तर्निहित स्वर, वर्ग, स्थान.

### Changed
- Deep audit: 46 lessons, 9 chapter frames, research notes and governance docs audited by
  per-lesson expert reviewers (web-checked), chapter-coherence reviewers and five
  course-wide sweeps (ledger, cross-references, references/docs, banned claims and
  registers, phonetic consistency). 1,264 findings confirmed (77 blocker, 510 major, 677
  minor), 109 rejected on verification; 1,068 fixes applied across 78 files, the rest
  duplicates or already fixed, one refused as resting on a false premise. Highlights:
  grammar in model sentences (सर्वे वदन्ति; the vocative कमले), नमस्ते as three beats,
  the Ṛgveda's oral-only span ("well over a thousand years"), Sanskrit as Hindi's ancestor
  *through the Prakrits*, भो as the regular sandhi form in connected text, वार as
  Sanskrit's own day-word (सोमवार is not a "worn-down" वासर), नव "nine" (numeral नवन्)
  distinguished from नव "new", uncited "five thousand years" figures removed, re-solved
  answer keys, and a v2.c04 review (70 findings) that corrected false in-course history
  (the first -ति verb is चलति, not वदति).
- JSON exports regenerated (51 lessons); verification log extended.

### Fixed
- Volume 2 word ledger corrected at audit: eight double counts removed. Four were
  identical Volume 1 headwords counted again (पिता, नदी, एक, कति), now review rows; four
  were sentence-dress or neuter forms of Volume 1 headwords (दिनम्, शुभम्, मेघः, कालः),
  now upgrade rows, which never increment the ledger. The cumulative chain is now
  237 → 258 → 277 → 297 (21 / 19 / 20 ledger-new for v2.c01–c03); the 0.7.0–0.9.0
  entries below are restated with the corrected figures, which fall by 2, 5 and 8 at
  the three chapter exits. v2.c04 enters at 297 and exits at 308.

## [0.9.0] — 2026-10-20

Volume 2 Chapter 3 — संख्याः कालश्च (Numbers & Time) complete and reviewed: the numbers
1–10 and the calendar, carried by the course's two flagship direction-honesty stories —
the October/November/December correction (cognates, not derivation) and होरा, the hour
that was borrowed INTO Sanskrit from Greek.

### Added
- v2.c03 five lessons: One to Five (counting chant as display; त्रि's first ledger
  entry), Six to Ten (THE month-name fix with the 1.x captions quoted verbatim; the
  नव nine/new split; कति), Time Words (होरा completes the loan-vs-cognate toolkit;
  the कालश्च title seam opened read-only), The Week (वासरः + seven day-names; the
  seven-planet week honestly dated "early centuries CE"; Hindi -वार descent), and the
  Numbers & Time Exam (counting production, nine direction cards incl. the
  both-directions dharma/होरा card, calendar task on the learner's own grid).
- REFERENCES: oed key (month names, weekday names, hour).
- STYLE_GUIDE §4 rule 4: cited-HISTORY carve-out for assessment items (mirrored in
  EDITORIAL_GUIDELINES and the review checklist).

### Changed
- Review passes ran as an adversarially verified workflow (4 dimensions × 3-skeptic
  panels): 56 confirmed findings fixed, incl. one grammar blocker in model story
  content. Arrow-naming convention stated chapter-wide (name the arrow by its origin).
- JSON exports regenerated (46 lessons); verification log extended. Ledger 277 → 297.

### Fixed
- 1.x banned claim corrected in-curriculum: "Oct-agon, Nov-ember, Dec-ember come from
  these" — the month names are Latin counting its own calendar; अष्ट and octō are
  siblings from one ancestor.

## [0.8.0] — 2026-08-03

Volume 2 Chapter 2 — परिवारः जगच्च (Family & the World) complete and reviewed: the
kinship-cognate flagship delivered direction-honest, the पञ्चतत्त्व register split, and
the च/कुत्र toolkit — with the 1.x और gloss corrected in-curriculum.

### Added
- v2.c02 research notes and chapter frame; five lessons (family set with the
  daughter/sister division-of-labor honesty; the pointing trio + the cognate shelf with
  Jones 1786; the world set + अग्निः homecoming; कुत्र and च; the family-tree and
  scene exam with direction cards).
- v2.c03 (numbers & time) and v2.c04 (first verbs) fact bases + chapter frames,
  prepared ahead: the October/November/December derivation fix, the होरा inbound-loan
  showcase, the -मि/-सि/-ति pattern plan with stem honesty.
- GLOSSARY: अव्यय.

### Changed
- JSON exports regenerated (41 lessons); verification log extended. Ledger 258 → 277.

## [0.7.0] — 2026-08-02

Volume 2 Chapter 1 — अभिवादनम् (Greetings & Courtesy) complete and reviewed. Volume 2
opens with its register upgrade: every courtesy formula labeled classical idiom or
modern spoken convention — taught proudly, labeled truthfully.

### Added
- Volume 2 frame (curriculum/volume-2/volume.md): the word-load shift, the chunk-first
  policy, the classical/modern label axis, the 1.x salvage map.
- v2.c01 research notes (per-word attestation and labels; V1-interval wiring) and
  chapter frame.
- Five lessons: the greeting kit (भोः, अञ्जलिः with the ञ्ज payoff, भद्रम् ते, स्वस्ति;
  Volume 1's exam interval + three-artifact ceremony in Station 0); the classical
  wellness exchange (अपि कुशलम्? with कथम् completing the question kit); greetings
  through the day (the सुप्रभातम् both-things-true card; the दिन ~ diena cognate set
  with the English-day trap avoided); courtesy & farewell (the धन्यवादः label showcase,
  क्षमस्व, न-negation with the नास्तिक X-ray, स्वस्ति beside पुनः मिलामः); and the
  Courtesy Exam (role-card improvisation; task D sorts by the keystone label table).
- GLOSSARY: अभिवादन, शिष्टाचार.

### Changed
- Cumulative ledger reconciled across parallel drafts: 237 → 258 (21 ledger-new,
  26 headwords drilled).
- JSON exports regenerated for all 36 lessons; verification log extended.

## [0.6.0] — 2026-08-02

**Volume 1 content-complete.** Chapter 6 — पठनम् (Reading Bootcamp) complete and
reviewed: 31 lessons, 237 readable words, the full writing system, and the ROADMAP's
Volume 1 exit criterion met — the learner reads real connected words and a first
(sandhi-light) śloka.

### Added
- v1.c06 research notes and chapter frame (homorganic-nasal fact base, dialogue and
  passage skeletons, three-texts-three-registers śloka plan, Volume Exam design).
- Four lessons: long words & the hidden nasals (ङ्ग ञ्च vertical stacks; संस्कृतम् at
  reading speed; the गंगा/गङ्गा spelling honesty); the first dialogue (मम नाम / अहम् …
  अस्मि frames, the question kit, अपि; the v1.c01.l01 Maya arc closed in Sanskrit); the
  first connected passage (अर्जुनः पठति, the सः thread, three-speed fluency protocol);
  the first śloka & the Volume Exam (Hitopadeśa prastāvikā pāda, Muṇḍaka 3.1.6 with the
  1950 national-motto history, the maṅgala śloka honestly labeled "source unrecorded",
  syllable-counting, five exam tasks, completion certificate).
- REFERENCES: mundaka, hitopadesha, stateemblem1950.
- GLOSSARY: अनुच्छेद, पञ्चम, संवाद, श्लोक.

### Changed
- v1.c01.l01 §16's forward-promise corrected at source ("Sanskrit self-introductions
  come later in this volume" — was "in Chapter 2", inaccurate as published); v1.c06.l02
  quotes the corrected line and closes the arc.
- The "consolidated word list in v1.c06" promise (v1.c04/v1.c05) resolved as a generated
  word-appendix asset built from the per-chapter §14 tables by the export pipeline.
- JSON exports regenerated for all 31 lessons; verification log extended with v1.c06
  verdicts and review-pass findings.

## [0.5.0] — 2026-07-31

Volume 1 Chapter 5 — संयोगः (Virāma & Conjuncts) complete and reviewed. The writing
system is complete: IR-007 — the 1.x curriculum's largest gap (mātrā logic, virāma and
conjuncts never taught) — is closed in-curriculum.

### Added
- v1.c05 research notes and chapter frame (virāma Law 5, weld mechanism Law 6, r-forms,
  signs inventory, per-lesson attested word lists).
- Five lessons: the virāma with the first-person unlock (अहम् वदामि); the conjunct
  mechanism with the नमस्ते ceremony (the promise tracked since Chapter 1 closes); the
  irregular ligatures क्ष त्र ज्ञ श्र द्ध with the Unicode-virāma insight and the
  respectful ज्ञ habit-vs-target treatment; the two faces of र (धर्म कर्म अर्थ homecoming);
  the remaining signs ऽ ँ । ॥ + digits ०–९ with the two-way Conjunct Exam and the
  संस्कृतम् ceremony. 57 new words; 214 cumulative; every 🔊 glue word retired.
- v1.c06 research notes and chapter frame prepared ahead (reading bootcamp fact base).
- REFERENCES: ifrah2000 (digit-history source).
- GLOSSARY: अक्षर, अवग्रह, चन्द्रबिन्दु, दण्ड, हलन्त, रेफ, संयुक्ताक्षर, विराम.

### Changed
- Script-law numbering reconciled repo-wide: the varga grid is now "the grid principle"
  (un-numbered) in c03/c04 reviews; the numbered series runs Laws 1–4 (mātrā system),
  Law 5 (virāma), Law 6 (conjunct weld).
- Cumulative word-ledger harmonized to the audited Chapter 4 baseline (157 → 214).
- JSON exports regenerated for all 27 lessons; verification log extended with v1.c05
  verdicts and review-pass findings.

## [0.4.0] — 2026-07-30

Volume 1 Chapter 4 — अन्तःस्थाः ऊष्माणश्च (Semivowels & Sibilants) complete and reviewed.
The varṇamālā is complete.

### Added
- v1.c04 research notes and chapter frame (the completion arc, register policy for
  religiously resonant name-words).
- Four lessons: the antaḥsthā with the व middle-ground and the volume's largest vocabulary
  unlock; the ś/ṣ flagship contrast via tongue-position transfer (closes IR-012); ह and the
  complete-alphabet moment; the Alphabet Exam.
- GLOSSARY: अन्तःस्थ, ऊष्मन्.

### Changed
- JSON exports regenerated for all 22 lessons; verification log extended.

## [0.3.0] — 2026-07-30

Volume 1 Chapter 3 — स्पर्शाः (The Stop Consonants) complete and reviewed.

### Added
- v1.c03 research notes (per-varga fact base, manner-row pedagogy, pause-form convention)
  and chapter frame.
- Six lessons: one per varga with all five members at equal depth (closes IR-042), the
  reusable manner row with physical checks, nuqta discipline, dental/retroflex contrast
  work, the first readable verb (चलति) and first readable sentences, and the grid-mastery
  review with cumulative 114-word table.
- GLOSSARY: स्पर्श, अघोष, घोष, महाप्राण, अल्पप्राण, अनुनासिक.

### Changed
- JSON exports regenerated for all 18 lessons; verification log extended with v1.c03
  verdicts and review-pass findings.

## [0.2.0] — 2026-07-30

Volume 1 Chapter 2 — स्वराः (The Vowels) complete and reviewed.

### Added
- v1.c02 research notes (per-vowel fact base, attested word inventories) and chapter frame.
- Seven lessons: इ/ई (left-hook mātrā rule), उ/ऊ, ऋ (classical /r̩/ with respectful
  regional-variant framing — fixes IR-009 in the curriculum itself), ए/ऐ (pure vs glide —
  fixes IR-010), ओ/औ + ॐ (four-register showcase), anusvāra/visarga (ayogavāha delivered —
  fixes IR-008), and the full-system review with a 54-word cumulative assessment.
- GLOSSARY: अनुस्वार, विसर्ग, सन्ध्यक्षर entries.

### Changed
- JSON exports regenerated for all 12 lessons; verification log extended with v1.c02
  research verdicts and review-pass findings.

## [0.1.0] — 2026-07-20

First production milestone: project bootstrap + Volume 1 Chapter 1 reviewed.

### Added
- Project bootstrap: repository scaffold, governance documents (README, STYLE_GUIDE,
  EDITORIAL_GUIDELINES, REFERENCES, ROADMAP, GLOSSARY, CONTRIBUTING), lesson/chapter/volume
  templates.
- `analysis/`: full audit of the 1.x curriculum PDF and the improvement report.
- `research/`: Volume 1 Chapter 1 phonetics research notes; claim-verification log.
- Volume 1 Chapter 1 — प्रवेशः (5 lessons, 27-section format).
- Machine layer: front-matter + lesson JSON Schemas, validator, JSON exporter,
  transliterator, automation prompt templates, CI stub.

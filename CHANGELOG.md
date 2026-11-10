# Changelog

All notable changes to the Sanskritam 2.0 curriculum. Format follows
[Keep a Changelog](https://keepachangelog.com/); versions are project-wide milestones
(individual lessons also carry their own semver in front matter).

## [Unreleased]

### Added

- STYLE_GUIDE §3.1, pause form and joined text: all course-written Sanskrit stays in pause
  form through v3.c04.l03; from v3.c04.l04 it is printed joined, with the pause form, IAST
  and gloss below each line. The section fixes where joined words are written together and
  where a space stands, where sandhi does not apply (across a daṇḍa, a speech dash, a
  closing quotation mark before इति), how a compound's inner seam is shown, and how
  authentic text is divided. It is the Volume 3 plan's §1.4, approved with the plan and
  required before Chapter 4 is drafted.

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

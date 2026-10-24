# Changelog

All notable changes to the Sanskritam 2.0 curriculum. Format follows
[Keep a Changelog](https://keepachangelog.com/); versions are project-wide milestones
(individual lessons also carry their own semver in front matter).

## [Unreleased]

### Fixed
- Volume 2 word ledger corrected at audit: eight double counts removed. Four were
  identical Volume 1 headwords counted again (पिता, नदी, एक, कति), now review rows; four
  were sentence-dress or neuter forms of Volume 1 headwords (दिनम्, शुभम्, मेघः, कालः),
  now upgrade rows, which never increment the ledger. The cumulative chain is now
  237 → 258 → 277 → 297 (21 / 19 / 20 ledger-new for v2.c01–c03); the 0.7.0–0.9.0
  entries below are restated with the corrected figures, which fall by 2, 5 and 8 at
  the three chapter exits. v2.c04 (unreleased) shifts accordingly, eight lower: 297
  entering, 308 exit.

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

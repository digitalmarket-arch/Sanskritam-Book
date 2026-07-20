# Improvement Report — Sanskritam 1.x → Sanskritam 2.0

How the uploaded curriculum (`Sanskritam-Curriculum.pdf`, 137 pp., "1.x") compares with the
Sanskritam 2.0 design, finding by finding. Every criticism cites a 1.x page; every criticism
maps to a concrete 2.0 remedy. Structural catalog of the source: `source-inventory.md`.

---

## 1. Executive summary

The 1.x curriculum has a sound macro-arc (sounds → words → grammar → Pāṇini → literature) and
a surprisingly reliable Pāṇinian core — 38 of 40 numbered sūtra citations verified correct.
But it fails as a learning instrument on five fronts: **(1)** it never teaches the script
machinery (mātrās, virāma, conjuncts) its own examples require; **(2)** its assessment layer
is mechanically broken (corrupted options, inline answers) and contains zero production
exercises among 459; **(3)** its romanization is ad-hoc Hindi-style with systematic phonetic
errors; **(4)** it interleaves devotional symbolism with linguistic fact and grades the
symbolism as fact; **(5)** its sequencing puts reading before sandhi and paradigm theory
before any conjugation practice.

| Category | 1.x status | 2.0 remedy |
|---|---|---|
| Script coverage | mātrā/virāma/conjuncts never taught | v1.c02 (mātrā with each vowel), v1.c05 (virāma/conjuncts) |
| Transliteration | ad-hoc, Hindi schwa-deletion, श=ष | IAST only, validator denylist (STYLE_GUIDE §1) |
| Pronunciation | no IPA; ऋ="ri"; ए/ओ as diphthongs | IPA contract table (STYLE_GUIDE §2) |
| Fact vs symbolism | deity-per-letter quizzed as fact | four-register policy (STYLE_GUIDE §4) |
| Assessment | 100% recognition, keys inline, options corrupted | ≥2 production exercises/lesson, separated keys, schema-validated |
| Sequencing | reading before sandhi; lakāra dump | ROADMAP v2–v4 progression |
| Sourcing | apocryphal quotes, inflated dates | REF-required HISTORY register, banned-claims list |
| Structure | unit numbering broken (35→41, 12<11) | id scheme validated against paths |
| Typography | Word export, machine-illegible Devanagari | Unicode NFC Markdown, XeLaTeX build gate |

## 2. Methodology

Full-text extraction of all 137 pages; three independent audit passes (pp. 4–50, 47–95,
96–137) cataloging structure, pedagogy, factual accuracy, and register hygiene; visual
verification of rendered pages against extracted text; programmatic census of exercise types
and defect counts. Findings are numbered `IR-NNN`, cite 1.x as `(p.N)`, and point to their 2.0
remedy as `→ 2.0:`. Where the PDF's font corruption affected extraction, quotes were verified
against the rendered page image.

## 3. Structural and mechanical defects

**IR-001 · Broken quiz options throughout.** All multiple-choice options render as repeated
placeholder glyphs — 808 such lines; e.g. "QQQQQQQQ… / RRRRRRRR…" as the visible options for a
seṭ/aniṭ question (p.101), "OOOO…/PPPP…" in the Māheśvara-sūtra quiz (p.70). Every one of the
219 MCQs is unusable in print. → 2.0: exercises are structured Markdown validated by
`scripts/validate.py`; JSON export carries options as data (IR-044 covers the answer-key
issue).

**IR-002 · Machine-illegible Devanagari.** The Word-2021 PDF's font encoding produces garbage
on text extraction (e.g. सुभाषित extracts as "सुिाभित", कालिदास as "काभ दास" — TOC, pp.2–3);
search and copy-paste fail for the entire book. → 2.0: Unicode NFC Markdown is the source of
truth; the print gate (`build/fonts.md`) requires a pdftotext round-trip test.

**IR-003 · Unit numbering broken.** Chapter 11 contains Units 30–35 then 41–45 (pp.69–118);
Chapter 12 restarts at Units 36–40 (pp.119–137) — later chapter, lower numbers. Unit 36
follows Unit 45. → 2.0: ids (`v4.c03.l02`) are validated against file paths; no hand-kept
counters.

**IR-004 · Broken audio placeholders.** Listening exercises play "अ" regardless of target:
"Which means 'Good morning'?" — "Audio played: अ" (p.27); same for "River" (p.32). → 2.0:
`media.audio` assets are per-lesson, named by id, and validated to exist (or `planned:`).

**IR-005 · Duplicated content.** The taddhita suffixes -त्व/-ता/-मय/-वत् are taught twice with
the same examples and the identical quiz item "आनन्दमय means → Full of bliss" (p.54 and p.80).
→ 2.0: single sequenced strand (v4.c04); duplication caught at the roadmap level.

**IR-006 · Template abandonment.** The MEDITATION exercise type appears twice (pp.4, 8) and
then vanishes; chapters 3–6 collapse into passive INFO-CARD dumps (77 across the book).
→ 2.0: one lesson contract (27 sections) for every lesson; EDITORIAL_GUIDELINES budgets
prevent silent format drift.

## 4. Linguistic accuracy

### Script and phonetics

**IR-007 · The mātrā gap (most serious single defect).** The book displays hundreds of words
with vowel signs (का, कि, गच्छति…) but never once teaches how mātrās attach to consonants, what
the inherent अ is beyond one aside, or how virāma works (हलन्त appears only as a wrong quiz
distractor, p.14). Conjuncts (क्ष, ज्ञ, स्व…) appear constantly and are never explained. A
learner using only this book cannot read this book. → 2.0: mātrā ा taught in v1.c01.l04, every
vowel's mātrā taught with the vowel (v1.c02), virāma + conjuncts get chapter v1.c05.

**IR-008 · Vowel count contradictions.** Chapter title: "14 vowels" (p.4); quiz: "11 main
vowels ✓" (p.12); review: "13 total sounds" with अं/अः counted as vowels (pp.14, 26). ॠ, ऌ, ॡ
never presented. Anusvāra and visarga are categorized as vowels — they are ayogavāha,
dependent sounds. → 2.0: v1.c02 presents the full inventory with the correct count and the
correct category, stated once and used consistently.

**IR-009 · ऋ taught as "ri"** — "ri (tongue curls back!)" (p.9), contradicting its own
articulation note. ऋ is syllabic /r̩/; "ri" is the modern Hindi reflex. → 2.0: /r̩/ as target
(STYLE_GUIDE §2.1), regional [ɾɪ] noted as a variant.

**IR-010 · ए/ओ anchored to English diphthongs** — "e as in 'hey'" (p.11), "o as in 'go'"
(p.12). English hey/go are [eɪ]/[oʊ]; Sanskrit ए/ओ are pure long /eː/ /oː/. → 2.0: STYLE_GUIDE
bans diphthong anchors for these vowels; anchors must state their imprecision.

**IR-011 · र contradictorily described** — "rolled, like Spanish" and "a short retroflex
flap… briefly tapped" in the same lesson (p.23). → 2.0: /ɾ/ tap primary, trill acceptable in
recitation — one value, stated once.

**IR-012 · श and ष both romanized "sha"** (pp.24–25) — in the very lesson whose point is
their difference. ह classified as a sibilant (p.26); it is a voiced glottal fricative /ɦ/.
→ 2.0: ś vs ṣ mandatory; ह documented as non-sibilant ūṣman.

**IR-013 · "Retroflex is unique to Indian languages"** (pp.10, 18) — false (Swedish,
Norwegian, and many other languages have retroflexes [REF:masica1991]). → 2.0: banned claim;
counterexamples taught instead.

**IR-014 · Hindi-style romanization throughout** — schwa-deleted "Amrit", "Arth" (p.4), "Man"
(p.22) for amṛta, artha, mana(s); doubled-letter length ("aa/ee/oo"); inconsistent capitals.
→ 2.0: IAST everywhere; validator denylist catches the 1.x forms.

**IR-015 · Hindi words presented as Sanskrit** — टमाटर (a modern loanword) anchors ट (p.18);
और glossed as the Sanskrit word for "and" (pp.12–13; Sanskrit uses च); घर given for gṛha
(p.16) though the book itself later teaches गृह (p.35). → 2.0: anchor words must be attested
Sanskrit; Hindi anchors allowed only in the clearly-marked Hindi layer.

### Grammar

**IR-016 · ṣatva/ṇatva lesson conceptually broken** (pp.73–74). One trigger list is given for
both स→ष and न→ण; the example claims "in रामेण the इ triggers ण" — it is the र (रषाभ्यां नो णः,
[REF:ashtadhyayi 8.4.1]); the card cites 8.4.2 correctly and then contradicts it in prose;
हरेष्षुत and "ब्रह्मन् + अस्ति → ब्रह्माणि" are garbled examples. → 2.0: rebuilt on 8.4.1–2 in
v4.c06.

**IR-017 · Sūtra citation errors** — इको यणचि cited as 1.1.45 (p.71); it is 6.1.77 (1.1.45 is
इग्यणः सम्प्रसारणम्). "8.2.39: झलां जश् झशि" (p.96) attaches 8.4.53's text and gloss to the wrong
number (8.2.39 is झलां जशोऽन्ते). → 2.0: sūtra numbers verified against the sūtrapāṭha before
use (EDITORIAL_GUIDELINES §2), logged in research/verification-log.md.

**IR-018 · Pratyāhāra label errors** (p.96) — cay glossed "voiceless aspirated" (it is the
voiceless *unaspirated* stops च ट त क प); jhaś conflated with jaś. Also the Māheśvara memory
aid "Sutras 8–11: STOPS (…क प)" skips sūtra 12 कपय् entirely while including its letters
(p.70). → 2.0: v4.c01 memory aids rebuilt and checked against the 14 sūtras.

**IR-019 · liṭ contradiction** — recital card labels लिट् "remote past, **witnessed**" while
the quiz correctly requires "NOT witnessed" (pp.74–75; परोक्षे लिट्, [REF:ashtadhyayi 3.2.115]).
→ 2.0: liṭ = parokṣa stated once, correctly, in v4.c03.

**IR-020 · कृ listed as parasmaipada-only AND ubhayapadī in the same card** (pp.75–76). कृ is
ubhayapadī (करोति / कुरुते). → 2.0: v4.c03 pada lists re-derived from the Dhātupāṭha.

**IR-021 · guṇa misfiled as āgama** — "भू + ति → भवति (where गुण inserts व)" offered as an
example of insertion (p.89); guṇa is substitution (ādeśa); the ओ→अव् step is internal sandhi.
The adjacent अट्-augment example is correct. → 2.0: lopa/āgama/ādeśa examples re-derived in
v4.c02.

**IR-022 · Anubandha rules wrong** — "ङ् blocks guṇa; क् blocks guṇa + vṛddhi" (pp.93, 95):
क्ङिति च ([REF:ashtadhyayi 1.1.5]) blocks both for both. "न् → udātta on ending vowel" (p.94):
the accent rule for ñit/ṇit affixes is initial udātta, not final. → 2.0: v4.c02 anubandha
table verified per sūtra.

**IR-023 · Broken passive paradigm** — the laṭ passive of √पठ् (p.103) mislabels its rows
(the "singular" row holds the 3rd-person series) and prints invalid forms (पयैथे, पयेयाथे).
Correct: पठ्यते/पठ्येते/पठ्यन्ते · पठ्यसे/पठ्येथे/पठ्यध्वे · पठ्ये/पठ्यावहे/पठ्यामहे. → 2.0: v4.c03
rebuilds; validator can't catch wrong-but-consistent tables, so paradigms are copied from
verified reference tables only.

**IR-024 · Nonexistent "future participle"** — "शप् + य/यान (FUTURE PARTICIPLE)" (p.105). śap
is the class-1 vikaraṇa; the future participle is śatṛ/śānac on the sya-stem (करिष्यन्).
→ 2.0: participle inventory in v4.c04 from standard grammars.

**IR-025 · Assorted paradigm/list errors** — quiz "Three (fem.) → ततस्रः ✓" contradicting its
own correct info card तिस्रः (pp.113–114); upasarga list prints अति and उप twice, omits नि and
अपि, still claims "22" (p.114); sanādi "10 types" lists 9 (p.76); देवी filed under "add -आ"
feminines (p.52; देवी is ī-stem, ṅīp); "स् → त् in oblique cases" as the tad-paradigm rule
(p.112; it is suppletion, स only in सः/सा). → 2.0: paradigm sources verified; lists counted by
the validator where enumerable.

**IR-026 · इन्द्रशत्रु accent example fails** — both glosses given ("Indra's slayer" vs "the
slayer of Indra") mean the same thing (p.82). The real contrast: tatpuruṣa "slayer of Indra"
vs bahuvrīhi "he whose slayer is Indra". → 2.0: the famous example done correctly in v4.c02.

### Literature and prosody

**IR-027 · Yamaka examples are not yamaka** — "भज गोविन्दं भज गोविन्दं" and "सजलं तोयं" (p.124)
repeat sound *with the same meaning* (that is emphasis/anuprāsa); yamaka requires repeated
sound with different meanings. → 2.0: real yamaka examples in v5.c04.

**IR-028 · Anuṣṭubh cadence imprecise; scansion sloppy** — odd-pāda cadence given as
"L-G-any" (p.119); the pathyā norm is ⏑ − − (L-G-G) at positions 5–7 of odd pādas. The BG 2.47
worked scansion prints wrong cadence strings. → 2.0: v5.c04 with correct pathyā/vipulā
treatment.

**IR-029 · Gāyatrī miscounted** — the "24 syllables" total is applied to text including
ॐ भूर्भुवः स्वः (p.120); the 24 count (3×8) covers only तत्सवितुर्… ([REF:rigveda 3.62.10]); the
vyāhṛtis are a liturgical prefix. → 2.0: v5.c04 counts the verse proper.

**IR-030 · Attribution/dating errors** — Panchatantra "~300 BCE… oldest fable collection"
(p.56): extant text c. 200 BCE–300 CE and Aesop is older; महाभारत glossed "Great India"
(p.58): bhārata = the Bharata clan; "Gita is Chapter 6 of the Mahabharata" (p.58): it sits
within the Bhīṣmaparvan (6th of 18 *books*), chapters 23–40; "संगे शक्तिः" for "unity is
strength" (p.57): the maxim is सङ्घे शक्तिः and is not a Panchatantra verse. → 2.0: v5 texts
with verified loci; banned-claims list.

## 5. Historical and factual claims

**IR-031 · Apocryphal Einstein quote** praising Pāṇinian grammar, attributed flatly to
"Albert Einstein" (p.85). No reliable source exists. → 2.0: banned claim; replaced by
*sourced* modern assessments (e.g. Cardona, Staal — with citations).

**IR-032 · Systematic date inflation** — "5,000-year-old grammar", "5,000 years. 4,000
sutras. One genius." (pp.69, 85–86, 135, 137). Scholarly consensus: Ṛgveda c. 1500–1200 BCE
[REF:jamison2014 p.5]; Pāṇini c. 4th century BCE [REF:cardona1997]. Also "Chomsky's 1957
generative grammar: inspired by Panini" (p.85) — overstated; and "anuṣṭubh = 90% of classical
literature" (p.119) — unsourced marketing number. → 2.0: HISTORY register requires citations
and range phrasing; percentages without sources don't ship.

**IR-033 · Reversed etymologies quizzed as fact** — "October comes from अष्ट, November from
नव, December from दश" (pp.30–31): the English month names derive from Latin octo/novem/decem;
the Latin and Sanskrit forms are *cognates* under PIE, and the quiz hard-codes the false
derivation as correct. Also युग → "juggle" (p.62): juggle < Latin iocus, unrelated. विमान
decomposed as "वि + मान (vehicle)" (p.62): it is वि + √मा. The cognates unit itself is
otherwise strong (19/20 correct). → 2.0: v2.c06 teaches cognate-vs-loanword explicitly; the
19 good cognate sets kept with PIE roots [REF:mallory2006].

## 6. Fact / tradition / symbolism conflation

**IR-034 · Deity-per-letter graded as linguistic fact.** Every akshara carries a "Deity" line
in its definitional card (अ=Vishnu p.4, आ=Saraswati p.5, इ=Kāmadeva p.6, ई=Lakshmi p.7,
उ=Shiva p.8 … क=Brahma p.15 … ह=Hari p.25), and the association is then *quizzed with a single
correct answer*: "अ represents which deity? → Vishnu ✓ CORRECT" (p.5); likewise the semivowel
elements "र represents which element? → Fire ✓" (pp.22–24). Letters are also assigned lexical
"Meanings" ("क Meaning: Creation, Doer", p.15) that they do not have. → 2.0: the four-register
policy (STYLE_GUIDE §4): symbolic associations live in SYMBOL callouts, are never assessed,
and never sit inside the definitional card. Genuinely lexical items (ख "sky", खग "sky-goer")
are promoted to FACT with dictionary citations.

**IR-035 · Sacredness as phonology** — "अ is the FIRST and MOST SACRED letter" (p.5), ह "the
most spiritual consonant" (p.25), ऋ "embodies the universal rhythm humans must align with"
(p.10). → 2.0: BG 10.33 and kindred material presented in SYMBOL register as literature —
which is more honest *and* more moving.

**IR-036 · What 1.x got right, kept as the model** — the Śiva-drum origin of the Māheśvara
sūtras is explicitly labeled "Legend" (p.69), and one quiz *debunks* "Sanskrit means God's
language" in favor of "refined/perfected" (p.54). These two moments are the template the
whole 2.0 register system generalizes.

## 7. Pedagogical design

**IR-037 · Zero production exercises.** Census: 459 exercises, all recognition or ordering
(219 MCQ, 79 match, 77 passive info cards, 29 timed-flash memory, 25 letter cards, 18
recitals, 6 tap-order, 4 listening, 2 meditation). No writing, no speaking, no dictation, no
translation into Sanskrit, anywhere. → 2.0: every lesson ships ≥2 production exercises
(EDITORIAL_GUIDELINES §1, enforced in review Pass D).

**IR-038 · No objectives, no review, no teacher support.** No lesson states learning
outcomes; there is no cross-chapter revision (review confined within chapters); no homework;
no teacher notes. → 2.0: sections 2/3/20/21/22 of the 27-section contract; `review_of` ids
drive spiral revision.

**IR-039 · Sequencing inversion: reading before sandhi.** Learners read connected text and
verses with live sandhi (रामोऽहम्-type forms) in Chapters 6 and 10 (pp.47–50, 64–68) while
sandhi is taught in Chapter 11 (pp.71+). → 2.0: v2 readers use sandhi-resolved text; sandhi
(v3.c04) precedes connected reading (v3.c06).

**IR-040 · The verb cliff.** All 10 lakāras, both padas, and the sanādi derivations arrive in
three lessons (pp.74–77) with zero prior conjugation practice anywhere in the book. → 2.0:
verbs ramp across v2.c04 (laṭ 3rd person) → v3.c03 (four common lakāras, drilled) → v4.c03
(full system).

**IR-041 · Meta-grammar at the wrong altitude.** Paribhāṣā, anubandha theory, and the 42
pratyāhāras (pp.91–96) function as trivia for a learner who cannot yet decline a noun.
→ 2.0: meta-grammar lives in v4, after the forms it explains; Volume 1–3 learners never meet
it.

**IR-042 · Uneven letter coverage.** Only "corner" letters of each varga get letter cards —
ग घ ङ, छ झ ञ, ठ ड ढ, थ ध न, फ ब भ have no card, no example words (pp.15–26). → 2.0: v1.c03
gives all five members of every varga identical treatment.

**IR-043 · Capstone without assessment.** The final unit is a summary card, a reading
roadmap, and a motivational close; its hardest question after 137 pages is "what is the word
for knowledge?" (pp.134–137). → 2.0: v5.c05 integrative capstone: compose, recite, derive a
form Pāṇini-style, translate.

## 8. Assessment integrity

**IR-044 · Answers printed inside questions.** Every quiz marks its correct option inline
("✓ CORRECT"), making self-testing impossible (throughout; e.g. pp.5, 70, 101, 125). → 2.0:
questions and keys separated structurally (`<details>` key blocks; separate key files for
worksheets; schema-level separation in JSON exports) — validator-enforced.

**IR-045 · Distractors are filler.** Where options are legible, wrong answers are often
arbitrary rather than diagnostic. → 2.0: distractors must instantiate real errors from
section 12 (Common Mistakes) — review Pass D checks.

**IR-046 · Quiz difficulty mismatch.** Recognition-only questions even for advanced
morphology (pp.96–118), then trivially easy capstone items (p.137). → 2.0: every objective is
assessed at its own can-do level; production tasks carry the advanced load.

## 9. What the source got right

Recorded explicitly, because 2.0 keeps all of it (destinations in ROADMAP §preservation map):

1. The articulatory place×manner grid with correct अघोष/महाप्राण/घोष/अनुनासिक terminology
   (pp.15–26) — promoted to the backbone of Volume 1.
2. The Chapter 4 grammar core: rāma 7-case table, three numbers, full गच्छ present/past/future,
   vowel-sandhi worked examples, four samāsa types (pp.37–43) — all verified correct.
3. The thematic vocabulary sets and 10-verb bank (pp.27–36, 40) — well-chosen, correct,
   high-frequency.
4. The subhāṣita chapter with correct attributions incl. Gītā 2.47 and 4.24, the three-śānti
   explanation (pp.47–51).
5. The graded readers — Thirsty Crow, Lion & Mouse (pp.64–66) — clean connected prose, the
   best pedagogy in the book.
6. The IE cognates unit, 19/20 correct (pp.61–62).
7. The Pāṇinian strand's skeleton: Māheśvara sūtras correctly listed (p.69), pratyāhāra system
   (pp.70–71), visarga sandhi (pp.71–73), 10 lakāras with correct example forms (p.74), kāraka
   with 6/6 verified sūtras + the Fillmore parallel (pp.87–89), krit/taddhita examples
   (pp.78–80), reduplication with 6.1.1 (p.81), six samāsa types (pp.83–85), meta-rules with
   correct citations (pp.115–117), aṅga/pada/bha via राजन् (pp.97–99), gerund/infinitive
   (pp.106–108), samprasāraṇa set (pp.100–101).
8. The complete, correct √भू table across six lakāras incl. reduplicated liṭ (pp.127–128) and
   the rāma 8×3 master table (p.125); tad/idam paradigms and gendered numerals (pp.111–113).
9. "Read a Real Sūtra" (pp.130–134) — 1.1.1, 1.1.2, 6.1.77 parsed word-by-word; the book's
   pedagogical high point, expanded into a full chapter in v4.c06.
10. Honest register moments: the Śiva-drum story labeled "Legend" (p.69); the "God's
    language" myth actively debunked (p.54).
11. Overall sūtra-citation reliability: 38/40 numbered citations correct across the book.

## 10. Traceability matrix

| ID | 1.x defect (page) | 2.0 remedy |
|---|---|---|
| IR-001 | corrupted quiz options (808 lines) | structured exercises + validator |
| IR-002 | machine-illegible Devanagari (whole book) | Unicode NFC Markdown; pdftotext gate |
| IR-003 | unit numbering broken (pp.69–137) | id↔path validation |
| IR-004 | audio placeholders (pp.27, 32) | per-lesson media manifest validation |
| IR-005 | duplicated suffix unit (pp.54, 80) | single strand v4.c04 |
| IR-006 | template abandonment (pp.4→) | 27-section contract |
| IR-007 | mātrā/virāma/conjuncts never taught | v1.c01.l04, v1.c02, v1.c05 |
| IR-008 | vowel count 14/11/13; ayogavāha as vowels (pp.4–26) | v1.c02 inventory |
| IR-009 | ऋ = "ri" (p.9) | /r̩/ target |
| IR-010 | ए/ओ = hey/go (pp.11–12) | /eː oː/ monophthongs |
| IR-011 | र trill vs flap contradiction (p.23) | /ɾ/ primary |
| IR-012 | श=ष="sha"; ह "sibilant" (pp.24–26) | ś/ṣ; ह=/ɦ/ |
| IR-013 | "retroflex unique to India" (pp.10,18) | banned; counterexamples |
| IR-014 | Hindi-style romanization (pp.4+) | IAST + denylist |
| IR-015 | टमाटर/और/घर as Sanskrit (pp.12–18) | attested anchors only |
| IR-016 | ṣatva/ṇatva broken (pp.73–74) | rebuilt on 8.4.1–2 |
| IR-017 | sūtra numbers 1.1.45, 8.2.39 wrong (pp.71,96) | verified citations |
| IR-018 | cay/jhaś labels; कपय् skipped (pp.70,96) | v4.c01 rebuilt |
| IR-019 | liṭ "witnessed" (pp.74–75) | parokṣa |
| IR-020 | कृ pada contradiction (pp.75–76) | Dhātupāṭha-derived |
| IR-021 | guṇa as āgama (p.89) | v4.c02 examples |
| IR-022 | anubandha ङ्/क्, न् accent (pp.93–95) | per-sūtra table |
| IR-023 | √पठ् passive table broken (p.103) | rebuilt paradigm |
| IR-024 | "future participle śap+ya" (p.105) | correct inventory |
| IR-025 | ततस्रः; upasarga list; sanādi count; देवी (pp.52–114) | verified lists |
| IR-026 | इन्द्रशत्रु glosses (p.82) | correct contrast |
| IR-027 | fake yamaka (p.124) | real examples |
| IR-028 | anuṣṭubh cadence (p.119) | pathyā L-G-G |
| IR-029 | Gāyatrī count (p.120) | verse-proper count |
| IR-030 | Panchatantra/Mbh/Gītā/सङ्घे errors (pp.56–58) | verified loci |
| IR-031 | Einstein quote (p.85) | banned; sourced replacements |
| IR-032 | 5,000-year & 90% claims (pp.69–137) | HISTORY register |
| IR-033 | October←aṣṭa etc. (pp.30–31, 62) | cognate vs loan lesson |
| IR-034 | deity-per-letter quizzed (pp.4–25) | SYMBOL register, never assessed |
| IR-035 | sacredness as phonology (pp.5–25) | SYMBOL register |
| IR-036 | (positive) legend labeled | generalized as policy |
| IR-037 | zero production exercises | ≥2 per lesson |
| IR-038 | no objectives/review/teacher notes | sections 2/3/20/21/22 |
| IR-039 | reading before sandhi | v2 resolved-text readers; v3.c04→c06 |
| IR-040 | lakāra cliff (pp.74–77) | v2→v3→v4 ramp |
| IR-041 | meta-grammar altitude (pp.91–96) | deferred to v4 |
| IR-042 | corner-letters-only coverage (pp.15–26) | full varga treatment |
| IR-043 | capstone w/o assessment (pp.134–137) | integrative capstone v5.c05 |
| IR-044 | inline ✓ CORRECT (throughout) | separated keys |
| IR-045 | filler distractors | mistake-driven distractors |
| IR-046 | difficulty mismatch | objective-aligned assessment |

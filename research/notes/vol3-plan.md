# Volume 3 — व्याकरणम् · Core Grammar (A2 → B1) — the volume plan

Final plan, repaired. The editor-in-chief merged it from three candidate designs
(function-first, paradigm-economy, reading-backward) and three judges' reports (the
synthesis, §7.1–§7.2); a completeness critique then found 24 gaps (G1–G24), and the editor
took binding decisions on the critique's alternatives and on the plan's open questions
(2026-11-10). This text applies both: every gap's fix is listed with the places changed in
§7.4, and every decision in §7.3. Spine: **function-first**.
Grafts: the Chapter 6 texts, form inventories, gloss ratios, the §17 serial and
split-before-join from **reading-backward**; the memory budget, delta cards, R-cards, the
thread verses, the नमस्ते thread and the paradigm-economy sūtras (3.4.85–86, 7.3.101,
6.1.132, 8.1.22) from **paradigm-economy**. Every error the judges found is fixed (§7.1);
every gap the critique found is fixed (§7.4); an independent review of the repaired plan
followed, and its confirmed fixes are applied too (§7.5). This is the binding contract for
the six chapter fact bases of Volume 3 (§0).

Sources re-checked at synthesis (local, read-only): Whitney 1889 by chapter (cited §n);
the Aṣṭādhyāyī data file (every sūtra number and text in this plan was looked up there);
the GRETIL Hitopadeśa (`hitop_u.htm`, Brzezinski/Stiehl v1.1) and Pañcatantra
(`vispancu.htm`, Jha ed. as input by Brzezinski) e-texts, with every passage and locus in
§5 re-found by line; Apte 1890 and Monier-Williams 1899 for headwords; a compiled
list of every §14 vocabulary row of Volumes 1–2 for double counts (none among the 148
ledger-new; one homograph flagged, अन्तः).

---

## 0. How to use this plan

0. **How it was made.** Three designs → three judges → synthesis (§7.1 errors fixed, §7.2
   decisions) → a completeness critique (G1–G24) → the editor's decisions on it and on the
   open questions (§7.3, 2026-11-10) → this repaired text (§7.4: one row per gap, with the
   places changed). Nothing in §7.3 is open any longer.
1. **It is the binding contract for six chapter fact bases.** Each chapter's research note
   (`research/notes/vol3-chN-….md`, written in the format of `vol2-ch4-first-verbs.md`) copies
   its chapter block from §4 as section 0, and may not change a lesson's grammar point,
   forms, headwords or ledger figures without an editor decision recorded in its §7.
2. **What each lesson block fixes:** id, titles, lesson_type, the one grammar point, the
   exact forms (tables), 4–6 model sentences, the ledger-new headwords, the labelled
   previews and deferrals, the payoff, the main risk, and what Station 0 books. Drafting
   adds the 27 sections around them. It does not add grammar.
3. **What each fact base must still verify at Pass C:** every paradigm cell against
   Whitney (sections named in each table); every headword against Apte and MW; every
   sūtra against the Aṣṭādhyāyī file (§4.0.4); every authentic passage against one printed
   edition the fact base can actually open, each difference recorded (where none can be
   opened, the source line says "text of the GRETIL e-text" and nothing more; §7.3,
   decision 1); every HISTORY line against a REFERENCES key. A line with no key does not
   print.
4. **The ledger chain in §3 is canonical.** Chapter exits for STYLE_GUIDE §8: **387 · 411 ·
   439 · 460 · 488 · 508.**
5. **Status codes used throughout:** ✓ productive (the learner produces every cell) ·
   ◐ recognition (parse when met; produce only the listed cells) · ○ labelled preview or
   display (one honest line, address given). In §5 inventories: **T** taught (lesson) ·
   **C** chunk headword (lesson; Volume 4 address) · **L** recognised under an R-card label
   (lesson) · **G** glossed in the margin, not taught.
6. **Prerequisite PRs before drafting** (§7.2, D-list): the STYLE_GUIDE §8 ledger rules
   6–15 (§3; merged into STYLE_GUIDE §8 with this plan, 2026-11-10); the STYLE_GUIDE §3 joined-text printing convention (§1.4, approved by
   decision 6; a prerequisite commit before c04 is drafted); the v2.c03 numeral
   forward-line erratum (D11, approved by decision 7) and, in the same release as v3.c02,
   a ROADMAP preservation-map PR changing the "tad/idam/numeral paradigms" row to "v3.c02
   (numeral nom./acc.), v3.c05 (tad/idam), v4.c05 (numeral system)"; new REFERENCES keys,
   each added by the fact base of the chapter that first needs it (decision 4).

---

## 1. Volume principles and what changes from Volume 2

### 1.1 The principles

1. **Chunks open into systems.** Volume 2 gave whole words: घटे, वने, सिंहस्य, माम्,
   मह्यम्, वदतु, मुञ्च, मिलामः, रोचते. Volume 3 takes each one back from the learner's
   memory and shows the cell it came from. Every grammar lesson follows one recipe:
   **(1) a scene in sentences; (2) the question the new form answers; (3) the owned forms
   that already answer it (the evidence table); (4) the pattern named; (5) the table
   assembled by the learner; (6) production.** A table is never the first thing on the
   page.
2. **One grammar point per lesson, stated as one function.** Chapter 1 has seven cases
   for four teaching lessons, so it pairs them by function, and each pair is one idea: the
   doer and the done-to; place (where, from where); the giving frame (with what, for
   whom); the two cases that do not hang on the verb (genitive, vocative). The last pairing
   follows Pāṇini: neither is a kāraka (the genitive covers the remainder, 2.3.50 षष्ठी शेषे;
   the vocative is a use of the nominative, 2.3.47 सम्बोधने च). Where a lesson carries a second
   item, the plan names it as a **card** (a reference or recognition item with no
   production target; D8 records the two exceptions, the dual and optative cards), never as a second grammar point.
3. **The question word is the way in.** Each case arrives as the answer to an asker the
   learner owns or can build: कः कम् केन कस्मै कस्मात् कस्य कस्मिन्, with the pronoun
   answer beside it (सः तम् तेन तस्मै तस्मात् तस्य तस्मिन्).
4. **Memory budget: eight tables, everything else a delta card.** The learner memorises
   eight tables in the volume. Every other paradigm is a **Δ card**: the few cells that
   differ from a table already owned, derived in class and checked, never rote-learned
   (§1.3).
5. **Kāraka is functional, not theoretical.** The learner gets कर्ता कर्म करणम्
   सम्प्रदानम् अपादानम् अधिकरणम् as names for jobs in sentences they can say, and the honest
   finding that case and role are not one-to-one. The defining sūtras (1.4.24–1.4.54) and
   the case-assigning sūtras (2.3.2 ff.) appear in Teacher Notes only; their reading is
   v4.c05.
6. **Pause form retires in stages, never by stealth** (the dates are in §1.2).
7. **The ledger counts lemmas, not forms**, and a separate paradigm ledger (✓ ◐ ○) counts
   tables (§3).
8. **Authentic text enters with its residue named.** Chapter 6 reads the two Volume 2
   stories joined, a Hitopadeśa passage, a Pañcatantra story opening and three verses, at
   loci re-verified in the GRETIL e-texts. Every form in them is T, C, L or G (§5), and
   the gloss ratio is measured.
9. **Backward from reading, forward from the learner.** The Chapter 6 texts were fixed
   first. Every headword they need is placed in Chapters 1–5, and the §17 serial (§1.5)
   recycles each one before Chapter 6 reads it.
10. **Pāṇini enters as names before rules.** The learner meets प्रथमा … सप्तमी, लट् लङ्
    लोट् लिङ्, परस्मैपदम् आत्मनेपदम्, सवर्णदीर्घः गुणः वृद्धिः यण्, तत्पुरुषः बहुव्रीहिः … as
    names for things already in hand. A sūtra is quoted only when it states in one line
    what the learner has just observed, and only if it is short enough to read with the
    lesson's grammar: 28 sūtras in learner text, listed in §4.0.4. Sūtra reading is v4.c06.
11. **The honesty program continues, now about grammar.** Case ≠ role. The Muṇḍaka's
    जयते is the middle where classical prose says जयति. मा + imperative is the prohibitive
    of the epics and later prose, beside the older मा + augmentless aorist. The
    Hitopadeśa's line वसुधैव कुटुम्बकम्, quoted today as a motto, is spoken in the text by a
    scheming jackal (Hit 1.71). "The divine
    in me bows to the divine in you" is a modern reading of नमस्ते (SYMBOL), not its
    grammar. The 1.x errors in Volume 3's territory are corrected in the open: तिस्रः, not
    "ततस्रः"; देवी is an ī-stem; सः/त- is suppletion, not "स् → त्"; the upasargas are
    twenty-two (IR-025); इको यणचि is 6.1.77 (IR-017); भवति is भो + अति by ayādi, with guṇa
    a substitution (IR-021).
12. **§9–§11 become connected-speech sections.** No new sounds remain to teach. The work
    is endings heard clearly (रामेण vs देवेन, -आभ्याम् vs -आभिः); the rhythm of joined
    speech (a seam is not a pause); anuṣṭubh by ear in Chapter 6 (metre itself is
    v5.c04); dictation in both forms.
13. **Production in every lesson (≥ 2 productive tasks), and it grows:** answering case
    questions; plural and feminine description; narrating in the past; requests and
    advice; joining and un-joining; resolving and coining compounds; retelling an
    authentic story in one's own Sanskrit.
14. **Every exam has a stated length.** Chapter exams (l05) fit one 45-minute sitting;
    the Volume 3 exam is two sittings (§4.6, c06.l05).

### 1.2 What becomes allowed, and when

| Feature | First allowed in taught text | Productive (✓) from | Until then |
|---|---|---|---|
| Case forms, a-stem m./n. singular | the pair's lesson, c01.l01–l04 | the same lesson | V2 chunks only (घटे, वने …) |
| Vocative | a-stems c01.l04; ā/ī c02.l02; i/u c02.l03; ṛ c02.l04 | the same lesson | भोः and V2's whole calling chunks only (pause form भोः राम!, आचार्य!; v2.c01.l01); हे is a c01.l04 headword, joined भो राम is c04.l02, and each stem's vocative waits for its lesson |
| Noun plural | c02.l01 | c02.l01 (a-stems), then each stem lesson | singular only |
| 3pl verb (-अन्ति, सन्ति) | c02.l01, labelled agreement partner | c03.l01 | — |
| Agreement (adjective ↔ noun) | c02.l01 (m./n., number and case) | c02.l02 (gender) | V2 bare one-word answers |
| Numerals by gender, nom./acc. | 1, 3, 4, 5–10 c02.l01 (m./n.); f. c02.l02; 2 c02.l04 | the same lessons | V2 chant (counting dress) |
| Dual | nouns c02.l04; verbs c03.l01 | nouns: nom./acc. ✓; verbs: the 3rd-person dual ✓; oblique noun duals and 1st- and 2nd-person verb duals ◐ (D13) | — |
| All persons of the verb: sg./pl. in all persons + 3du | c03.l01 (all nine cells shown) | c03.l01: singular and plural in all persons, and the 3rd-person dual, ✓; 1st- and 2nd-person duals ◐ | V2 singular |
| Ātmanepada | c03.l02 | c03.l02 (laṭ, by the same formula); laṅ/loṭ/liṅ listed cells only | रोचते, क्षमस्व as chunks |
| Past: the imperfect | c03.l03 | c03.l03 (P by the same formula; Ā अलभत only) | आसीत् display only |
| Past: the storyteller's present + स्म (3.2.118) | c06.l03 (प्रतिवसति स्म) | c06.l03 | not used in taught text |
| Quotation closed by इति | c03.l01, as a labelled pattern ("…" इति X वदति) | named as the speech frame in c06.l02 | — |
| Imperative | c03.l04 | c03.l04 (P by the same formula); Ā listed cells | वदतु, ददातु, अस्तु, मुञ्च, पश्य chunks |
| Optative (a card on the imperative's lesson) | c03.l04 | c03.l04: P 3rd person ✓ (-एत्, -एताम्, -एयुः; "one should"); स्यात्, स्युः, कुर्यात्, लभेत ✓; the rest ◐ | — |
| Joined text | c04.l01–l03: joined **only at seams already taught**, the rest of the line in pause form, labelled "joined so far" | from **c04.l04**: every taught text printed joined with its pause form beneath | pause form |
| Joined writing by the learner | c04 exercises | expected in composition from c05.l01 | pause form |
| Full pronoun tables, relatives | tables c05.l01–l02; the relative sentence (यः …, सः …) c05.l03 | listed cells (§4.5) | owned cells |
| Compounds | c05.l04 | vigraha of four kinds | read whole |
| R-tier forms (participles, absolutive, -यते, -इन्) | only after their R-card (§1.3) | never in Volume 3 | absent from taught text |

### 1.3 The memory budget, the Δ cards and the R-cards

**The eight memorised tables**

| # | Table | Lesson | Δ cards derived from it |
|---|---|---|---|
| T1 | a-stem m./n., singular (रामः, फलम्; the instr. sg. taught as -एन on देवः, with रामेण beside it as the same ending after र्: decision 11) | c01.l01–l05 | the a-adjective m./n. |
| T2 | a-stem plural (रामाः, फलानि; the gen. pl. taught as -आनाम् on देवानाम्, with रामाणाम् beside it: decision 11) | c02.l01 | — |
| T3 | ā-stem f. (बालिका) | c02.l02 | नदी (ī-stem; the feminine set -ऐ -आः -आम् with a य्-glide); the a-adjective in -आ |
| T4 | i/u-stems m. (अग्निः, गुरुः) | c02.l03 | मतिः, धेनुः (feminine: instr. sg. -या/-वा, three optional cells + acc. pl. -ईः/-ऊः) |
| T5 | ṛ-stems (पिता; दाता) | c02.l04 | माता, दुहिता (acc. pl. -ॄः); भ्राता; स्वसा (strong stem like दाता) |
| T6 | primary endings, P and Ā (laṭ) | c03.l01–l02 | अस्, कृ (learned whole, nine cells each) |
| T7 | secondary endings, P and Ā (laṅ) | c03.l03 | loṭ (c03.l04: 3.4.85 लोटो लङ्वत्) and vidhiliṅ (c03.l04); the Ā loṭ's 3sg, 3pl, 2sg and 1st persons are a Δ on T6 Ā (-ताम्, -न्ताम्, -स्व, -ऐ; 3.4.90–93, Teacher Notes) |
| T8 | personal pronouns + तद् (अहम्, त्वम्; सः सा तत्) | c05.l01–l02 | एतद्, यद्, किम्, सर्व, अन्य, एक; इदम् (key cells ✓, the rest ◐); भवत् (◐ beyond listed cells) |

**Two summary cards (c02.l05), learned once, never re-taught**

- *The dual card:* three forms in every noun and pronoun: nom./acc./voc. · instr./dat./abl.
  (-भ्याम्) · gen./loc. (-ओः).
- *The recurring endings* ("almost or quite unbroken range", Whitney §310a — the hedge is
  printed): -भ्याम् and -ओः in the dual; -भिः, -भ्यः, -आम्, -सु/-षु in the plural, with the
  exceptions printed on the card: the a-stem's -ऐः (देवैः; 7.1.9 अतो भिस ऐस्, Teacher Notes)
  and the -न्- that vowel stems insert in the genitive plural (रामाणाम्, नदीनाम्, गुरूणाम्,
  पितॄणाम्).
- *Free facts:* the neuter's nominative and accusative are always one form; the vocative
  dual and plural equal the nominative; **in nouns and third-person pronouns** the dative
  and ablative plural are one form (रामेभ्यः, तेभ्यः) — but not in अस्मद्/युष्मद्
  (अस्मभ्यम् vs अस्मत्, युष्मभ्यम् vs युष्मत्).

**The R-cards (recognition only; placed before Chapter 6 needs them)**

| Card | Lesson | What the learner can do | Examples (owned stems where possible) | Taught in |
|---|---|---|---|---|
| R1 -इन् stems | c02.l03 | parse seven cells | पक्षी, पक्षिणम्, पक्षिणा, पक्षिणः, पक्षिणि, पक्षिभिः, पक्षिणाम्; सुखिनः | v4.c05 |
| R2 -त participle as a past + instrumental doer | c02.l05 | read "X-ed by Y" | बद्धः, मुक्तः, कृतम्, गतः (owned); मया कृतम्; तेन उक्तम्; उक्तं च "and it has been said" | v4.c04, v4.c05 |
| R3 passive in -यते | c03.l02 | read "is X-ed" | उच्यते, दृश्यते, श्रूयते (Pañcatantra 4's opening: तद्यथानुश्रूयते) | v4.c05 |
| R4 athematic verbs, other cells whole | c03.l01, c03.l03, c03.l04 | parse | शृण्वन्ति, जानन्ति, गृह्णन्ति, स्वपन्ति, ददति; अशृणोत्, अगृह्णात्, अददात्; शृणु, देहि | v4.c03 |
| R5 absolutive -त्वा / -य | c06.l01 (before Hit A1, A8; Panc 4 B3, B5; the exam passage T5, §5.6) | read "having X-ed" | उक्त्वा, दृष्ट्वा, गत्वा; आगत्य, निष्क्रम्य | v4.c04 |
| R6 -वत् / -मत् / -अत् nominatives | c05.l01 | parse nom. sg. | भवान् (✓), श्रीमान् (owned), धीमान्, महान्, पुण्यवान् | v4.c05 |

### 1.4 The joined-text printing convention (approved, decision 6; enters STYLE_GUIDE §3 in a prerequisite commit before c04 is drafted)

- **Course-written joined text:** full external sandhi is applied. Words are written
  together wherever the seam fuses into one akṣara or a conjunct, or the first word ends
  in a consonant (जलमस्ति, तन्मे, जगच्च, कश्चिद्दुःखभाग्भवेत्, गुरुर्वदति); words are
  separated by a space where the first word, after sandhi, ends in a vowel, anusvāra or
  visarga (स पिपासितोऽस्ति, सत्यं वद, परमो धर्मः, मूषक आगच्छति). No sandhi across a
  daṇḍa, across the dash of a speech frame (उवाच — "…"), or across the closing quotation
  mark before इति ("…करिष्यामि" इति; beyond इति sandhi resumes: "…लघुरसि" इत्यवदत्).
- **Authentic text:** the word division of the e-text REFERENCES names (decision 1), evident
  e-text typos corrected and each correction listed in Teacher Notes, with every departure
  from full sandhi noted beside it (महान् जम्बूपादपः for
  महाञ्जम्बू°; पात्रत्वात् धनम् for पात्रत्वाद्धनम्). The full join is a v3.c04.l04
  exercise ("editions vary").
- **Below every joined line** from c04.l04 on: the pause form (पदपाठः), then IAST and the
  gloss.
- **A compound is one word in the pause form.** Where a line shows a compound's inner seam
  (c04.l01–l03), its members are printed hyphenated, never as free words: सूर्य-उदये →
  सूर्योदये.

### 1.5 The two threads and the serial

**The §17 serial: "the doves and the mouse", retold.** Every teaching lesson's §17
continues one story in the learner's current grammar: the Hitopadeśa 1 frame (a hunter,
a net, a flock of doves, a mouse friend). It is labelled on every page "our retelling,
after Hitopadeśa 1 (Mitralābha)", and is never presented as the text. When v3.c06.l02
reads the original, it is the original of a story the learner already knows.

| Chapter | Episode | Grammar it uses | Words it recycles before c06 |
|---|---|---|---|
| c01 | the hunter comes to the tree; one dove; the net | singular cases | व्याधः, कपोतः, जालम्, वृक्षः, तीरम्, विवरम्, मूषकः |
| c02 | the flock sees the grains and lands; the king of the doves; two feet in the net | plural, agreement, f. nouns, i/u, dual | कपोताः, तण्डुलाः, पाशाः, तरुः, पक्षिणः (R1), नृपः |
| c03 | the king's speech (imperatives); the past telling | all persons, middle, imperfect, moods | प्रविशति, उवाच, आह, अथ, मा, भक्षयति |
| c04 | the whole serial so far, re-read joined | sandhi | every seam of the original's sentences |
| c05 | names: चित्रग्रीवः as a compound (a bahuvrīhi), हिरण्यकः glossed ("golden one"; हिरण्य + suffix -क, a derivative, not a compound); "he who cuts the snares …" | pronouns, relatives, compounds | सखा, मे, अस्मान्, एवम्, अधः, ग्रीवा, चित्रः |
| c06.l02 | the original, Hitopadeśa 1 | — | — |

**The thread verses** (re-read in every l05 with a growing "explained" overlay):

| Verse (owned since) | c01 | c02 | c03 | c04 | c05 | c06 |
|---|---|---|---|---|---|---|
| उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः। न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥ (v2.c06.l03; Hit 0.36) | उद्यमेन, सिंहस्य, मुखे | कार्याणि, मनोरथैः, मृगाः; सुप्तस्य (R2) | सिध्यन्ति, प्रविशन्ति | (no seams) | हि; मनोरथः as compound | read with no gloss |
| अहिंसा परमो धर्मः (v2.c06.l03) | — | अहिंसा (ā-stem), परमः agreement | — | परमो (visarga) | अ-हिंसा (compound) | — |
| सत्यमेव जयते (v1.c06.l04; Muṇḍaka 3.1.6) | सत्यम् | — | जयते (Ā; the honesty line) | सत्यमेव | — | — |
| सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥ (v1.c06.l04) | — | भद्राणि; सुखिनः (R1) | भवन्तु, सन्तु, पश्यन्तु, भवेत्, मा (labelled) | कश्चिद्, दुःखभाग् | सर्वे, कश्चित्; निरामयाः (bahuvrīhi) | fully parsed |

**The नमस्ते thread** (closed in three steps, then derived by the learner): v3.c01.l03
नमः takes the dative (2.3.16) → v3.c04.l02 a visarga before त becomes स् (8.3.34) →
v3.c05.l01 ते is the enclitic "to you" of त्वम् (8.1.22 तेमयावेकवचनस्य), and the learner
writes नमः + ते → नमस्ते as a three-line proof.

---

## 2. Exit profile and entry requirements

### 2.1 Entry (checked by v2.c06.l05)

The learner has passed the Volume 2 exam; owns **360 readable words**; reads and writes
pause form; produces the present singular in all three persons (-मि -सि -ति, with the
stretch to -आमि); asks with the nine askers (कः का किम् कुतः कथम् कुत्र कति कदा
किमर्थम्); uses the whole-word chunks of Volumes 1–2 (घटे, वने, सिंहस्य, माम्, मह्यम्, वदतु,
ददातु, अस्तु, मुञ्च, पश्य, क्षमस्व, मिलामः, रोचते); has *seen* the seams नास्ति, कोऽपि,
परमो धर्मः, पुनर्मिलामः, जगच्च.

### 2.2 Exit (after passing v3.c06.l05, which gates Volume 4)

CEFR-informed functional labels only; Sanskrit has no official CEFR mapping
[REF:cefr2020]. The learner can:

**Understand**
1. Read a course-graded story of 150–250 words in joined Sanskrit at first sight, with a
   glossary for at most one word in twenty, and answer questions with the case askers
   (कः कम् केन कस्मै कस्मात् कस्य कस्मिन्; कुत्र कुतः कदा कथम् किमर्थम्).
2. Read an unseen passage of classical narrative prose (Hitopadeśa or Pañcatantra),
   printed joined, with marginal glosses for no more than one word in five (the exam
   passage measures 6 glossed of 33 words, names excluded, about 1 in 5.5; §5.6), and say
   who did what to whom, where,
   with what and why.
3. Take a verse of the difficulty of Hitopadeśa 0.6 into its words (पदच्छेदः) and put it
   in prose order (अन्वयः).
4. Follow a short joined conversation on a familiar topic (family, school, the market,
   a story).

**Speak and write**
5. Describe people, places and things with adjectives that agree in gender, number and
   case; count things with 1–10 in the right gender (nominative and accusative).
6. Narrate past events in the imperfect (and the storyteller's present + स्म, from
   c06.l03), with direct speech closed by इति.
7. Make requests, give commands and prohibitions (मा + imperative; न + optative), and say
   what should be done, politely with भवान्/भवती.
8. Use the present, imperfect and imperative of the ledger's thematic verbs in the
   parasmaipada — singular and plural in all persons, and the 3rd-person dual (1st- and
   2nd-person duals ◐) — and the optative in the 3rd person ("one should"); the present
   in the ātmanepada by the same formula; and अस् and कृ in the listed cells of all four.
9. Write a paragraph joined and give its pause form; pass dictation in either form.
10. Resolve a compound of the four kinds into its parts with the right cases (विग्रहः),
    and coin transparent compounds from owned words.

**Know about**
11. Say, with an owned example for each, what each case does in a sentence, and show
    three places where case and role part company.
12. Explain why नमस्ते, नास्ति, विद्यालयः, परोपकारः and कोऽपि look as they do.
13. Name the tradition's terms for the cases, persons, voices and the four present-system
    lakāras; recognise by number and gist the 28 sūtras the volume quotes (§4.0.4).
14. Give an honest source line (locus, speaker, register) for every verse read in the
    volume.

**Paradigm ledger at exit.** ✓ a-stems m./n.; ā-stems f.; ī-stems f. (नदी); i/u-stems
m. (and f. nom., acc. and instr.: मतिः मतिम् मत्या, मतयः मतीः मतिभिः); ṛ-stems (singular, nom./acc. plural, vocative);
the dual nom./acc. of every taught stem; personal pronouns (singular, plural
nom./acc./instr./gen. — अस्माभिः, युष्माभिः among them — the enclitics मे ते नः वः);
तद् in three genders and its family (एतद्, यद्, किम्, सर्व, अन्य, एक); numerals 1–10
nom./acc.; thematic laṭ P and Ā, laṅ P and loṭ P (singular and plural in all persons, and
the 3rd-person dual); vidhiliṅ P in the 3rd person; अस् and कृ in the listed cells of all
four. ◐ oblique duals; 1st- and 2nd-person verb duals; vidhiliṅ P 1st and 2nd persons;
feminine i/u optional cells; ṛ-stem oblique plurals; इदम् beyond its key cells; भवत्
beyond its listed cells; सखा; Ā in laṅ/loṭ/liṅ beyond the listed cells (laṅ: अलभत only);
R1–R6. **Readable words at exit: 508** (§3).

---

## 3. Ledger policy for Volume 3 (extends STYLE_GUIDE §8)

STYLE_GUIDE §8 rules 1–5 stay in force unchanged. Volume 3 adds rules 6–15 (merged
into §8 with this plan, in shorter wording; this table is the fuller statement). The guiding test: **a word counts once, when the learner
first owns its lemma as a headword; nothing a taught pattern builds ever counts again.**

| # | Rule | Examples |
|---|---|---|
| 6 | **Nominal lemma.** A noun counts once, as its nominative singular with gender (मृगः m., तीरम् n., सभा f.). An adjective counts once, in the masculine nominative singular, with its three-gender citation (मधुरः -रा -रम्). A pronoun counts once, as its masculine nominative singular (अयम्, यः) or its only form (स्वयम्); a dual-only word counts as its masculine nominative dual (उभौ). | मृगः counts; मृगम्, मृगेण, मृगाः never do. |
| 7 | **Paradigm forms never count**, regular or suppletive. Every cell of a taught table belongs to its lemma: इयम्, इमम्, अनेन belong to अयम्; मया, अस्माकम् to अहम्; पितरौ to पिता; the interrogative's cases (कम् केन कस्मै …) to the owned कः; numeral cells (त्रयः, तिस्रः) to the owned numeral stems (त्रि …). Already-counted cells from Volumes 1–2 (मम, तव, मह्यम्, तुभ्यम्, तस्य, एतत्) stay counted; the ledger never decreases. | Chapter 1's question and answer words add 0. |
| 8 | **Verb lemma** (rule 4, unchanged). One entry per verb, as its 3sg present (गच्छति), a middle verb as its 3sg middle (लभते). Every cell of every taught lakāra belongs to the lemma (अगच्छत्, गच्छतु, गच्छेत्, गच्छन्ति). A form taught whole because its system or its stem formation is Volume 4's counts once as its own word (rule 4's chunk clause): the perfects उवाच and आह, and the imperfect अब्रवीत्, taught whole because class-2 ब्रू, whose strong stem takes -ई- before consonant endings (Whitney §632), is v4.c03's. Already-counted chunks (वदतु, ददातु, अस्तु, मुञ्च, पश्य, क्षमस्व, मिलामः, शृणोमि …) stay counted and are not re-counted when they gain a table. A lemma first headworded after its chunk counts once: ददाति (beside the counted ददातु). **Rejected:** paradigm-economy's "upgrade rows for verbs" (§7.2, D6). | उवाच counts (a chunk); आसीत् does not (a cell of अस्, taught c03.l03). |
| 9 | **Prefixed verbs** count as their own lemma when headworded (V2: आगच्छति, अवगच्छति): निवसति, प्रविशति, प्रयच्छति. The twenty-two upasargas are grammar items on a reference card, not ledger words (अपि "also", a V1 free particle, stays counted). A prefixed form met only in a read text (प्रतिवसति, सम्भाषसे) is L, not ledgered. | न्यवसत् is a cell of निवसति. |
| 10 | **Compounds** count only when headworded because they are lexicalised (नीलकण्ठः "Śiva; peacock"; पादपः "tree") — never when transparent and built from owned members (गोदावरीतीरे, जम्बूफलानि, अल्पशक्तिः). A member first met inside a compound counts when it first stands as its own headword (आलयः from विद्यालयः). | — |
| 11 | **Sandhi spellings never count** (नास्ति, कोऽपि). A word first seen joined counts when it is first a pause-form headword. नमस्ते, counted in v1.c01.l01 as the course's first greeting before its seam was taught, stays counted (the ledger never decreases, rule 7); explaining its seam in v3.c04.l02 adds nothing. | नमस्ते stays counted; नास्ति never counts. |
| 12 | **Proper names** count only when headworded for the learner's own sentences (the V2 precedent अर्जुनः). Names met only in a read text (हिरण्यकः, चित्रग्रीवः, रक्तमुखः, करालमुखः, गोदावरी …) are gloss-line items, rule 5 display. | Chapter 6 ledgers no names. |
| 13 | **R-tier forms are display** (rule 5) unless headworded: absolutives (उक्त्वा, आगत्य), participles not headworded (छिन्नानि, दत्तानि, सुप्तस्य), -यते forms, perfect forms other than the two perfect chunk headwords, उवाच and आह, such as ददौ and बभूव, the future (करिष्यामि). | उक्त्वा never counts. |
| 14 | **Stems outside the taught classes** count once when headworded by their nominative (दिक् from दिश्, धीमान्, सुहृत्, महान्, पक्षी, सखा, जम्बूः); their other cells are ◐ or ○ and never count. | पक्षिणः is a cell of पक्षी. |
| 15 | **Lexicalised indefinites and pairs.** The indefinites in -चित् and the lexicalised pair इतस्ततः count once when headworded (कश्चित्, कदाचित् c05.l02; इतस्ततः c06.l01); every other -चित्/-अपि form and every unheadworded grid cell (कोऽपि, किञ्चित्, कुत्रचित्, सर्वत्र, सर्वदा, इत्थम्) is pattern-built and never counts. Evidence of lexicalisation: MW's own entry *itas-tatas*; कश्चित् and कदाचित् are the interrogative + चित् indefinites of Whitney §507, headworded because the course drills them as whole words (कश्चित् X-ः आसीत्, c05.l02; कदाचित्, Text C B3). | इतस्ततः counts; सर्वत्र never does. |

Front-matter `vocabulary_count` keeps its §8 meaning (ledger-new + upgrade rows drilled).
Upgrade rows continue for stems returning in sentence dress, each assigned to the lesson
block that first drills it: ग्राम → ग्रामः (c01.l01); हस्त → हस्तः, पुत्र → पुत्रः, मित्र →
मित्रम् (c01.l03); अर्थ → अर्थः (c01.l04); कोमल → कोमलः, लोक → लोकः, कण → कणः, नेत्र →
नेत्रम् (c02.l01); ऋषि → ऋषिः (c03.l03); सूर्य → सूर्यः (c04.l01); शक्ति → शक्तिः
(c05.l04); धन → धनम् (c06.l04). They are `vocabulary_count` rows only; the ledger is
unaffected. Each grammar
lesson's §14 adds one separate line, **"cells drilled: n"**, and its §15 ends with the
**paradigm ledger** (✓ ◐ ○ by table), which each exam audits.

**Budgets.** 4–8 ledger-new per teaching lesson (cap 8; the brief's 4–10 range, tightened
on the pedagogue's advice); 0 in each l05.

| Chapter | Entering | l01 | l02 | l03 | l04 | l05 | New | Exit |
|---|---|---|---|---|---|---|---|---|
| c01 सुबन्तप्रवेशः | 360 | 7 | 7 | 7 | 6 | 0 | 27 | **387** |
| c02 सुबन्तविस्तारः | 387 | 5 | 7 | 7 | 5 | 0 | 24 | **411** |
| c03 तिङन्तप्रवेशः | 411 | 7 | 6 | 8 | 7 | 0 | 28 | **439** |
| c04 सन्धिः | 439 | 6 | 6 | 4 | 5 | 0 | 21 | **460** |
| c05 सर्वनाम-अव्यय-समासाः | 460 | 4 | 8 | 8 | 8 | 0 | 28 | **488** |
| c06 सम्पूर्णपठनम् | 488 | 4 | 6 | 5 | 5 | 0 | 20 | **508** |

Lesson chain: 360 → 367 → 374 → 381 → 387 → 387 · 392 → 399 → 406 → 411 → 411 · 418 → 424
→ 432 → 439 → 439 · 445 → 451 → 455 → 460 → 460 · 464 → 472 → 480 → 488 → 488 · 492 → 498
→ 503 → 508 → 508. **Volume 3 adds 148 (360 → 508).** Canonical exits: **387 · 411 · 439 ·
460 · 488 · 508.** The real load is the cells: §14 reports them per lesson.

All 148 headwords were checked against the compiled Volumes 1–2 vocabulary list (no double counts) and are
attested in Monier-Williams; Apte was spot-checked at synthesis (nominative-form
headwords or sub-entries). The drafting pass re-checks each against both, as for
Volume 2. One homograph
is flagged: अन्तः "inside" (antar, c04.l02) vs अन्तः, the nominative of the owned अन्त
"end" (V1).

---

## 4. Chapter-by-chapter syllabus

### 4.0 The volume at a glance

| id | Title | Type | The one grammar point | New |
|---|---|---|---|---|
| v3.c01.l01 | कः किम् — कर्ता कर्म च · Who and What | grammar | the accusative: the done-to and the goal (the nominative named as the doer's case) | 7 |
| v3.c01.l02 | कुत्र कुतः · Where and From Where | grammar | the place cases: locative "in, at" and ablative "from" | 7 |
| v3.c01.l03 | केन कस्मै · With What, For Whom | grammar | the giving frame: instrumental "with, by" and dative "to, for" | 7 |
| v3.c01.l04 | कस्य हे · Whose? and O …! | conversation | the two cases that do not hang on the verb: genitive and vocative | 6 |
| v3.c01.l05 | विभक्तयः · The Eight Cases — Chapter 1 Exam | review | the singular column assembled | 0 |
| v3.c02.l01 | बहवः · Many | grammar | the a-stem plural, all cases (with number–case agreement and the m./n. numerals) | 5 |
| v3.c02.l02 | सा प्रिया · She, and the Words that Follow Her | grammar | the feminine: ā-stems, with the ī-stem as its Δ card (and gender agreement) | 7 |
| v3.c02.l03 | अग्निः गुरुः च · Fire and Teacher | grammar | i- and u-stems: the vowel that strengthens | 7 |
| v3.c02.l04 | पितरौ · Parents | grammar | ṛ-stems, and the dual card पितरौ needs | 5 |
| v3.c02.l05 | कारकाणि · The Roles Map — Chapter 2 Exam | review | the kāraka map: case vs role | 0 |
| v3.c03.l01 | वयम् गच्छामः · We Go | grammar | laṭ parasmaipada, all nine cells (अस्, कृ whole) | 7 |
| v3.c03.l02 | मह्यम् रोचते · The Second Family | grammar | laṭ ātmanepada | 6 |
| v3.c03.l03 | आसीत् · There Was | grammar | the imperfect (laṅ): augment + secondary endings | 8 |
| v3.c03.l04 | वदतु, वदेत् · Requests and Advice | conversation | the imperative, built from the secondary set (3.4.85; the Ā -ताम्, -स्व from the present); the optative as a card (3rd person productive) | 7 |
| v3.c03.l05 | क्रियापरीक्षा · The Verb Exam | review | the present system on one page | 0 |
| v3.c04.l01 | स्वरसन्धिः · When Vowels Meet | grammar | vowel sandhi (split, then join) | 6 |
| v3.c04.l02 | नमस्ते · The Visarga at the Seam | grammar | visarga sandhi | 6 |
| v3.c04.l03 | जगच्च · When Consonants Meet | grammar | consonant sandhi at word edges | 4 |
| v3.c04.l04 | पदच्छेदः · Un-joining: Saṃhitā and Pada | reading | the reverse procedure | 5 |
| v3.c04.l05 | सन्धिपरीक्षा · The Sandhi Exam | review | join and un-join | 0 |
| v3.c05.l01 | अहम् त्वम् भवान् · I, You, Your Honour | conversation | the personal pronouns and their enclitics | 4 |
| v3.c05.l02 | सः अयम् यः · This, That, Which | grammar | the pronominal declension | 8 |
| v3.c05.l03 | अव्ययानि · The Words That Never Change | vocabulary | indeclinables: the correlative grid and the relative sentence it serves (यः …, सः …) | 8 |
| v3.c05.l04 | समासाः · Compounds | grammar | the compound and its vigraha (four kinds) | 8 |
| v3.c05.l05 | परीक्षा · Chapter 5 Exam | review | pronouns, indeclinables, compounds | 0 |
| v3.c06.l01 | द्वे कथे · The Two Stories, Joined | reading | reading a joined narrative straight through (with the R5 absolutive card) | 4 |
| v3.c06.l02 | कपोताः मूषकः च · The Doves and the Mouse | reading | the speech frame: X उवाच — "…" / "…" इति | 6 |
| v3.c06.l03 | वानरः मकरः च · The Monkey and the Crocodile | reading | the story-opening formula (with the storyteller's present + स्म, 3.2.118) | 5 |
| v3.c06.l04 | त्रयः श्लोकाः · Three Verses | reading | अन्वयः, prose order | 5 |
| v3.c06.l05 | तृतीयखण्डपरीक्षा · The Volume 3 Exam | review | the volume; gates Volume 4 (two sittings) | 0 |

### 4.0.1 The Volume 2 deferral tracker, redeemed

| Deferred in Volume 2 (v2.c06.l05 §15) | Addressed to | Redeemed in |
|---|---|---|
| Case endings (घटे, वने, सिंहस्य, माम्, मह्यम् — read whole) | v3.c01–c02 | माम् v3.c01.l01; घटे, वने v3.c01.l02; मह्यम् v3.c01.l03; सिंहस्य v3.c01.l04; the column v3.c01.l05; other stems v3.c02.l02–l04 |
| Plurals and the dual (कति answers kept bare; "sweet mangoes" refused) | Volume 3 | noun plural and कति + 3–10 v3.c02.l01; मधुराणि आम्राणि v3.c02.l02; dual nouns and द्वौ/द्वे v3.c02.l04; plural and dual verbs v3.c03.l01 |
| Describing words and agreement (बहु, अल्पम् as one-word answers) | Volume 3 | number–case agreement v3.c02.l01; gender v3.c02.l02 (अल्पम् जलम्, एकम् घटम् explained); बहु as a u-adjective v3.c02.l03 |
| The present in every person and number | v3.c03 | v3.c03.l01 (P), v3.c03.l02 (Ā) |
| Sandhi as a system (नास्ति, जगच्च, कोऽपि, परमो धर्मः) | v3.c04 | नास्ति v3.c04.l01; कोऽपि, परमो धर्मः v3.c04.l02; जगच्च v3.c04.l03; reading joined text v3.c04.l04 on |
| Compounds (मनोरथः, परोपकारः, दूरदर्शनम्, रविवासरः) | v3.c05 | v3.c05.l04 (परोपकारः's inner seam from v3.c04.l01; मनोरथः's from v3.c04.l02) |
| How stems are built (शृणोति, गृह्णाति, स्वपिति) | Volume 4 | **stays v4.c03.** Volume 3 gives their other cells as whole words (R4) |
| Moods and tenses beyond the present (वदतु, मुञ्च; the 1.x future) | later volumes | the present-system moods and past: v3.c03.l03–l04. The future, perfect and aorist stay v4.c03; उवाच, अब्रवीत्, आह are chunks (v3.c03.l03); करिष्यामि is glossed (v3.c06.l02) |

### 4.0.2 The 1.x preservation map rows that land in Volume 3

| 1.x asset (ROADMAP map) | Volume 3 destination | Note |
|---|---|---|
| rāma paradigm (pp.37–43); rāma 8×3 master table (p.125) | singular v3.c01.l05; plural v3.c02.l01; dual v3.c02.l04; the 8×3 table restored v3.c02.l05 §15 | verified correct; ṇ cells marked; देवेन, देवानाम् printed beside रामेण, रामाणाम् (decision 11) |
| गच्छ paradigms (present / past / future) | present v3.c03.l01; past v3.c03.l03 | the future (गमिष्यति) is real Sanskrit and waits for v4.c03, said in one line in v3.c03.l03 |
| vowel sandhi worked examples | v3.c04.l01 | 6.1.77 cited correctly (IR-017) |
| samāsa, four types | v3.c05.l04 | the इन्द्रशत्रु accent example goes to v4.c04 (IR-026) |
| visarga sandhi (pp.71–73) | v3.c04.l02 | — |
| kāraka lesson + Fillmore note (pp.87–89) | v3.c02.l05 (functional) | sūtras in Teacher Notes; the Fillmore note prints only with a REFERENCES key (D17) |
| tad / idam / numeral paradigms (pp.111–113, 125–127) | tad, idam v3.c05.l02; numeral nominatives/accusatives v3.c02.l01–l04 | IR-025 (तिस्रः; suppletion); numeral obliques and the system v4.c05 (D11); the ROADMAP map row becomes "v3.c02 (numeral nom./acc.), v3.c05 (tad/idam), v4.c05 (numeral system)" by a PR in the same release as v3.c02 (§0 item 6) |
| Graded readers (pp.64–66), original form | v3.c06.l01 (crow; Text B1), v3.c06.l02 (lion; Text B2) | पाषाणान्, बुद्धिर्बलाच्छ्रेष्ठा, तृष्णार्तः, धावति and the mouse's promise come back; the V2 texts are reprinted unchanged as Text A (D21) |

### 4.0.3 The promises of Volumes 1–2 that Volume 3 must keep

Compiled from every "Volume 3" forward line in the 61 shipped lessons (a search of
the lessons made for the function-first design, re-sampled at the plan review, §7.5). Each is redeemed by name, in §3 or §15, with a back-link.

| Promise (where made) | Redeemed in |
|---|---|
| रामः and हरिः end in ः; सीता and गीता do not (v1.c05.l01) | v3.c01.l01 (m. -ः); v3.c02.l02 (f. -आ) |
| मातृ in the dictionary, माता in the sentence; मातृभाषा (v1.c02.l03) | v3.c02.l04; मातृभाषा v3.c05.l04 (first member in stem form) |
| ॠ "pays off at the genitive plurals" (v1.c02.l03) | v3.c02.l04: पितॄन्, मातॄणाम् |
| the calling forms कमले, मातः (v1.c02.l04, v2.c01.l01) | a-stem voc. v3.c01.l04; कमले, बालिके v3.c02.l02; मातः, पितः v3.c02.l04 |
| कति खगाः? एकः खगः (v1.c03.l01) | v3.c02.l01 |
| विद्यालयः vs विद्यालयम् (v1.c06.l03) | v3.c01.l01 |
| the endings inside मम / तव / नाम (v1.c06.l02) | मम, तव v3.c01.l04; नाम (an n-stem used whole) v3.c06.l03 note |
| नमः + ते (v1.c05.l02 §13); गुरवे नमः (v2.c01.l01) | dative + नमः v3.c01.l03; गुरवे v3.c02.l03; the seam v3.c04.l02; ते v3.c05.l01 |
| भो राम (v2.c01.l01) | voc. v3.c01.l04; the seam भोः + राम → भो राम v3.c04.l02 |
| सर्वं कुशलम् (v2.c01.l02); नास्ति, पुनर्मिलामः, अनुगृहीतोऽस्मि (v2.c01.l04) | v3.c04.l01–l03 |
| जगच्च (v2.c02.l04); कालश्च (v2.c03.l03); ईकारश्च (v1.c02.l01) | ḥ + c v3.c04.l02; t + c v3.c04.l03 |
| षड् (v2.c03.l01–l02) | v3.c04.l03 (8.2.39) |
| स्तः, "where the verbless deferral is repaid" (v2.c02.l04) | v3.c02.l04 (preview), v3.c03.l01 |
| locatives "invented under pressure" (गृहे, आकाशे); fronted time words (v2.c02.l05, v2.c03.l03) | v3.c01.l02 (गृहे, सोमवासरे); रात्रौ v3.c02.l03 |
| prefixes as a system (अव + गच्छति) (v2.c05.l02) | augment placement v3.c03.l03; the 22 v3.c05.l03 |
| the request mood (वदतु, ददातु, अस्तु, मुञ्च, पश्य) (v2.c05.l02, v2.c06.l02) | v3.c03.l04 |
| "the second ending family" (रोचते, क्षमस्व) (v2.c05.l03) | v3.c03.l02; क्षमस्व v3.c03.l04 |
| the liker needs a to-form of each name (अर्जुनाय रोचते) (v2.c05.l03) | v3.c01.l03 |
| the past tense आसीत्; कश्चित् (v2.c06.l01) | आसीत् v3.c03.l03; कश्चित् v3.c05.l02 |
| सत्यम् + एव; the सर्वे भवन्तु components (v1.c06.l04) | v3.c04.l03; full parse v3.c06.l01 (thread overlay) |
| avagraha "used when sandhi arrives" (v1.c05.l05) | v3.c04.l01 (तेऽपि), v3.c04.l02 (कोऽपि) |
| the s → ṣ sound law (v1.c04.l02; v2.c04's ष of करोषि/शृणोषि "waits for Volume 4") | observed v3.c02.l01 (रामेषु vs बालिकासु); named v3.c04.l04; the rule itself v4.c02, so the Volume 2 pointer stays true |
| nasal assimilation between words (v1.c06.l01) | v3.c04.l03 |
| repha alternations with visarga (v1.c05.l04) | v3.c04.l02 |
| the compound machinery behind जलज, खग, कमलमुकुलम् (v1.c03.l02, v1.c02.l02) | v3.c05.l04 |
| the Hitopadeśa cousin of the lion story (v2.c06.l02 HISTORY) | v3.c06.l02 |
| "monthly until Volume 3 ends" (v2.c06.l05 §20: one story aloud, one saying with its source, the nine askers) | every l05 §20 |
| numeral gender and case "in Volume 4" (v2.c03.l01–l03) | **changed by erratum** (D11): gender in counting v3.c02; the system stays v4.c05 |
| मनः, the pause form of the noun मनस् as नमः is of नमस् — "full noun story in Volume 3" (v1.c03.l04) | the seam मनस् + रथः → मनोरथः v3.c04.l02; मनसः in its vigraha v3.c05.l04; the s-stem declension is **re-addressed** to v4.c05 (§6), said in one line in v3.c04.l02 |
| word-building from parts (root, prefixes, suffixes, compounding): "the machinery itself is Volume 3's business" (v2.c06.l04) | upasargas v3.c05.l03; compounds v3.c05.l04; roots (v4.c03) and suffixes (v4.c04) **re-addressed** (§6), said in one line in v3.c05.l04 |
| the dual ending of अयोगवाहौ, "the full story is Volume 3's" (v1.c02.l06) | v3.c02.l04 (the dual card; अयोगवाहौ named in the payoff) |
| छात्रा (v1.c06.l02); कुशलिनी (v2.c01.l02); the she- and thing-forms of सुखी (v2.c06.l01) — "with the gender system in Volume 3" | छात्रा v3.c02.l02 (ā-stem); कुशलिनी, सुखिनी v3.c02.l02 (-ई, declined like नदी; one line); the neuter सुखि goes with the -इन् class, **re-addressed** to v4.c05 (§6) |
| क्रुद्धः, बद्धः, मुक्तः, लघुः "changed for a lioness or for a thing" (v2.c06.l02) | क्रुद्धा/क्रुद्धम्, बद्धा/बद्धम्, मुक्ता/मुक्तम् v3.c02.l02 (a-adjective agreement); the u-adjective feminine (लघुः or लघ्वी) **re-addressed** to v4.c05 (c02.l03 Deferred) |
| the calling shapes श्रीमन्, भगवन् and the vocative as a system "with the case machinery in Volume 3" (v2.c01.l04) | the vocative v3.c01.l04; voc. भवन् v3.c05.l01, with श्रीमन् named on the R6 card (भगवन् as display) |

### 4.0.4 The sūtras Volume 3 quotes in learner text (28; all verified in the data file)

Each is quoted once, as a one-line statement of what the learner has just observed; none
is analysed.

| Sūtra | Text | Lesson | Why it earns its place |
|---|---|---|---|
| 2.3.16 | नमःस्वस्तिस्वाहास्वधालम्वषड्योगाच्च | c01.l03 | रामाय नमः, स्वस्ति + dative, with owned words (नमस्ते thread, step 1) |
| 2.3.19 | सहयुक्तेऽप्रधाने | c01.l03 | सह + instrumental in four words |
| 1.4.14 | सुप्तिङन्तं पदम् | c01.l05 | why the chapters are called सुबन्त- and तिङन्त- |
| 1.2.70 | पिता मात्रा | c02.l04 | why पितरौ means "parents" |
| 7.3.101 | अतो दीर्घो यञि | c03.l01 | the V2 "stretch" (गच्छामि, गच्छावः, गच्छामः) gets its rule |
| 3.4.85 · 3.4.86 | लोटो लङ्वत् · एरुः | c03.l04 | the P imperative is the imperfect's set; -ति/-न्ति → -तु/-न्तु (the Ā -ताम्, -स्व from the present: Teacher Notes) |
| 6.1.101 · 6.1.87 · 6.1.88 · 6.1.77 · 6.1.78 · 6.1.109 · 1.1.11 | अकः सवर्णे दीर्घः · आद्गुणः · वृद्धिरेचि · इको यणचि · एचोऽयवायावः · एङः पदान्तादति · ईदूदेद्द्विवचनं प्रगृह्यम् | c04.l01 | the vowel rules, two to four words each; 6.1.77 fixes IR-017 |
| 8.3.34 · 6.1.132 | विसर्जनीयस्य सः · एतत्तदोः सुलोपोऽकोरनञ्समासे हलि | c04.l02 | the visarga is an s at heart (नमस्ते thread, step 2); the सः/एषः seam V2 taught without a name |
| 8.3.23 · 8.2.39 · 8.4.40 | मोऽनुस्वारः · झलां जशोऽन्ते · स्तोः श्चुना श्चुः | c04.l03 | सत्यं वद; षड्; जगच्च |
| 1.4.109 · 1.4.110 | परः सन्निकर्षः संहिता · विरामोऽवसानम् | c04.l04 | the tradition's names for joined text and pause |
| 8.1.22 | तेमयावेकवचनस्य | c05.l01 | ते and मे (नमस्ते thread, step 3) |
| 1.1.27 | सर्वादीनि सर्वनामानि | c05.l02 | why सर्व declines like सः (सर्वे, सर्वस्मै) |
| 1.1.37 · 1.4.59 | स्वरादिनिपातमव्ययम् · उपसर्गाः क्रियायोगे | c05.l03 | what an avyaya and an upasarga are |
| 2.2.29 · 2.2.24 | चार्थे द्वन्द्वः · अनेकमन्यपदार्थे | c05.l04 | dvandva and bahuvrīhi in a phrase each |
| 3.2.118 | लट् स्मे | c06.l03 | the storyteller's present + स्म, where प्रतिवसति स्म is read (re-homed from c03.l03, G4) |

Count, by lesson (c01.l03 · c01.l05 · c02.l04 · c03.l01 · c03.l04 · c04.l01 · c04.l02 · c04.l03
· c04.l04 · c05.l01 · c05.l02 · c05.l03 · c05.l04 · c06.l03): 2 + 1 + 1 + 1 + 2 + 7 + 2 + 3 + 2
+ 1 + 1 + 2 + 2 + 1 = **28**. Named in learner text but not quoted and not counted: 4.1.2 (the *sup*
list, shown once as a picture, c01.l05); 5.4.91 (a forward pointer in the कपोतराजः gloss, c05.l04 reading, "in v4.c04").

**Teacher Notes only** (correct numbers, for v4): 1.4.24, 1.4.32, 1.4.42, 1.4.45, 1.4.49,
1.4.54 (kāraka definitions) and 2.3.2, 2.3.13, 2.3.18, 2.3.28, 2.3.36, 2.3.50 (case
assignment), 2.3.47 सम्बोधने च, 2.3.12 (goal of motion: acc. or dat.), 1.4.33
रुच्यर्थानां प्रीयमाणः (मह्यम् रोचते); 1.3.17 नेर्विशः (न्यविशत); 1.3.19 विपराभ्यां जेः; 3.4.87 सेर्ह्यपिच्च, 6.4.105 अतो
हेः, 3.4.89 मेर्निः, 3.4.90 आमेतः, 3.4.91 सवाभ्यां वामौ, 3.4.92 आडुत्तमस्य पिच्च, 3.4.93 एत ऐ, 7.2.80 अतो येयः; 6.4.71–72 (augment, vṛddhi augment); 8.3.15, 8.3.17, 8.3.22, 6.1.113–114;
6.3.25 आनङ् ऋतो द्वन्द्वे; 2.2.18 कुगतिप्रादयः; 2.1.57 विशेषणं विशेष्येण बहुलम् (karmadhāraya); 7.1.25 अद्ड् डतरादिभ्यः पञ्चभ्यः (अन्यत्); 1.1.34 पूर्वपरावरदक्षिणोत्तरापराधराणि व्यवस्थायामसंज्ञायाम् (पर's optional pronominal endings, D25); 1.1.40 क्त्वातोसुन्कसुनः; 7.1.9 अतो भिस ऐस्;
8.1.18 अनुदात्तं सर्वमपादादौ; 8.1.24 न चवाहाहैवयुक्ते; 8.4.1–2, 8.4.37 (ṇatva); 8.3.59 (ṣatva); 2.1.57 विशेषणं विशेष्येण बहुलम्
(karmadhāraya, c05.l04); 7.1.25 and 1.1.34 (अन्य, पर; c05.l02, D25); 1.3.17 नेर्विशः (न्यविशत, §5).

### 4.0.5 Station 0 chain and review

- v3.c01.l01's Station 0 carries v2.c06.l05's +1-week booking. From c02 on, each
  chapter's l01 runs the previous exam's +1-day item and the previous l04's +1-week item;
  its l02 runs the previous exam's +1-week item (each l05 books +1 day for the next l01
  and +1 week for the next l02; each l04 books +1 week for the next l01).
- Within a chapter: lesson n's §3 runs n−1's +1-day item and n−2's +1-week item, as in
  Volume 2 [REF:cepeda2006]. Each lesson block below names what it books ("S0 → next").
- The volume spiral: every l05 re-tests one item from each earlier Volume 3 chapter (a
  case question in c02–c06 exams; a verb form in c04–c06; a join in c05–c06), and runs the
  thread-verse overlay (§1.5).
- The "monthly until Volume 3 ends" task booked in v2.c06.l05 §20 is honoured in each l05's
  §20.

---

### 4.1 Chapter 1 — सुबन्तप्रवेशः · Nouns & Cases I

**Goals.** Answer every case question about a masculine or neuter a-stem noun in the
singular; ask the questions; name each case and its job; read both Volume 2 stories noun
by noun without a gloss.

**Grammar inventory (exact).** a-stem masculine (रामः, देवः) and neuter (फलम्), singular,
all eight cells (Whitney §330); the interrogative कः/किम् singular (Whitney §504; कः कम् केन कस्मै
कस्मात् कस्य कस्मिन्; n. किम्); सः/तत् singular as the answer word (Whitney §495; तम् तेन तस्मै तस्मात्
तस्य तस्मिन्); the अहम्/त्वम् singular cells each case pair needs (Whitney §491; माम्, त्वाम्; मया,
त्वया; मह्यम्, तुभ्यम्; मम, तव); the vibhakti names प्रथमा … सप्तमी, सम्बोधनम्; the role
names कर्ता कर्म करणम् सम्प्रदानम् अपादानम् अधिकरणम्; the ṇ-for-न् spelling reflex as an
observed shape (c01.l03), rule deferred to v4.c02. Case uses taught: goal of motion
(accusative), time (locative), company with सह, the dative with नमः and रोचते.

**Deferral-tracker rows redeemed:** row 1 for the a-stem singular. **1.x assets carried:**
the rāma singular column (pp.37–43). **Promises kept:** विद्यालयः/विद्यालयम्; रामः's ः;
गुरवे नमः (as a pattern); अर्जुनाय रोचते; भो राम (as a vocative); मम/तव; locatives under
pressure.

**Serial (§17), episode 1.** The hunter, the tree on the bank, one dove, the mouse in its
hole; singular only.

**Exam shape (l05, one 45-minute sitting).** A listening: a 10-sentence scene read aloud,
then 10 case questions answered in one word (8 min). B dictation: 8 inflected words, 2
sentences (7 min). C production grid: 12 prompts, a noun and an asker → that noun's form (e.g.
जालम् + केन? → जालेन) (8 min). D case detective: every noun in both Volume 2 stories, its
case and its job (12 min); the moral's बुद्धिः (buddhiḥ), an i-stem taught in c02.l03, is printed as a display with its case given (nominative, doer) and is not scored. E scene description: 6 sentences about a picture, each case at
least once, recorded (10 min).

#### v3.c01.l01 — कः किम् — कर्ता कर्म च · "Who and What: the Doer and the Done-to"

- **lesson_type:** grammar. **Station 0:** v2.c06.l05's +1 week. **review_of:**
  v2.c06.l05, v2.c06.l01, v2.c06.l02, v2.c04.l04, v1.c06.l03.
- **The one grammar point:** the accusative (द्वितीया) marks the done-to (कर्म) and the
  goal of motion; the nominative (प्रथमा) marks the doer (कर्ता). A neuter has one form
  for both.
- **Forms taught (Whitney §330; pronoun cells §§491, 495, 504):**

| Case | रामः m. | फलम् n. | asker | answer word |
|---|---|---|---|---|
| प्रथमा nom. | रामः rāmaḥ | फलम् phalam | कः kaḥ · किम् kim (n.) | सः saḥ · तत् tat (n.) |
| द्वितीया acc. | रामम् rāmam | फलम् phalam | कम् kam · किम् kim (n.) | तम् tam · तत् tat (n.) |

  Pronoun cells: माम् mām "me" (owned), त्वाम् tvām "you" (new cell).
- **Sentence patterns:** X-ः Y-म् VERB-ति (doer, done-to); X-ः PLACE-म् गच्छति (goal);
  कः …? / कम् …? / किम् …? answered by one word in the matching case.
- **Model sentences (pause form):**
  1. व्याधः मृगम् पश्यति। (vyādhaḥ mṛgam paśyati.) "The hunter sees the deer."
  2. कः मृगम् पश्यति? — व्याधः। (kaḥ mṛgam paśyati? — vyādhaḥ.) "Who sees the deer? — The hunter."
  3. व्याधः कम् पश्यति? — मृगम्। (vyādhaḥ kam paśyati? — mṛgam.) "Whom does the hunter see? — The deer."
  4. छात्रः विद्यालयम् गच्छति। (chātraḥ vidyālayam gacchati.) "The student goes to school."
  5. व्याधः मृगम् ग्रामम् नयति। (vyādhaḥ mṛgam grāmam nayati.) "The hunter leads the deer to the village." (two accusatives; the tradition's example अजां ग्रामं नयति stays in Teacher Notes)
  6. गुरुः शिष्यम् नाम पृच्छति। (guruḥ śiṣyam nāma pṛcchati.) "The teacher asks the student his name."
- **New headwords (7; 360 → 367):**

| देवनागरी | IAST | Gender / class | Gloss | Why now |
|---|---|---|---|---|
| मृगः | mṛgaḥ | m. a | deer; wild animal | Hit 0.36 मृगाः |
| व्याधः | vyādhaḥ | m. a | hunter | serial; Hit 1 frame |
| कपोतः | kapotaḥ | m. a | dove, pigeon | serial; Hit 1 (A8 कपोतानाम्) |
| मार्गः | mārgaḥ | m. a | path, road | goal sentences |
| नयति | nayati | verb, thematic | leads, carries | two-accusative verb |
| पृच्छति | pṛcchati | verb, thematic | asks | two-accusative verb |
| त्यजति | tyajati | verb, thematic | leaves, abandons | object practice |

  Upgrade: ग्रामः (ग्राम, V1).
- **Previewed (labelled):** सः/तम् and कः/कम् share endings with रामः/रामम् (the rest of
  the pronoun table: c05.l02). **Deferred:** other stems and genders (c02); the plural
  (c02.l01).
- **Payoff:** v1.c06.l03's विद्यालयः / विद्यालयम् ("a word's ending shifts with its role")
  is now one line of grammar; पुस्तकम् पठति and पुस्तकम् अस्ति show one form, because it is
  neuter; सिंहः मूषकम् गृह्णाति and माम् मुञ्च read with full understanding; रामः's
  visarga (v1.c05.l01) is the masculine nominative. Half of that promise is kept here; the
  other half (सीता) waits one chapter.
- **Main risk:** the English word-order reflex ("the doer is whoever comes first"). Fix:
  shuffle drills (मृगम् व्याधः पश्यति means the same); the endings, not the order, carry
  the roles. Hindi को marks both definite objects and recipients: कम् vs कस्मै is drilled
  in l03.
- **Serial (§17):** व्याधः वनम् गच्छति। सः जालम् नयति। कपोतः व्याधम् न पश्यति।
- **S0 → next:** +1 day: ten कः/कम् question–answer pairs; +1 week (c01.l03): the
  word-order shuffle.

#### v3.c01.l02 — कुत्र कुतः — अधिकरणम् अपादानम् च · "Where and From Where"

- **lesson_type:** grammar. **review_of:** v3.c01.l01, v2.c02.l04 (कुत्र), v1.c02.l06
  (कुतः, ततः, इतः, अतः), v2.c03.l03 (time words).
- **The one grammar point:** the place cases. The locative (सप्तमी) answers कुत्र? "in,
  at, on, into" (अधिकरणम्) and also "when?" for times; the ablative (पञ्चमी) answers कुतः?
  "from" (अपादानम्).
- **Forms taught (Whitney §330; pronoun cells §§495, 504):**

| Case | रामः | फलम् | asker | answer word |
|---|---|---|---|---|
| पञ्चमी abl. | रामात् rāmāt | फलात् phalāt | कस्मात् kasmāt · कुतः kutaḥ | तस्मात् tasmāt |
| सप्तमी loc. | रामे rāme | फले phale | कस्मिन् kasmin · कुत्र kutra | तस्मिन् tasmin |

- **Sentence patterns:** X-ः PLACE-े अस्ति / VERB-ति; X-ः PLACE-आत् आगच्छति; from–to:
  PLACE-आत् PLACE-म् गच्छति; time: DAY-े.
- **Model sentences:**
  1. कुत्र मृगः अस्ति? — वने। (kutra mṛgaḥ asti? — vane.) "Where is the deer? — In the forest."
  2. फलम् वृक्षात् पतति। (phalam vṛkṣāt patati.) "The fruit falls from the tree."
  3. बालकः कुतः आगच्छति? — ग्रामात्। (bālakaḥ kutaḥ āgacchati? — grāmāt.) "Where is the boy coming from? — From the village."
  4. छात्रः गृहात् विद्यालयम् गच्छति। (chātraḥ gṛhāt vidyālayam gacchati.) "The student goes from home to school."
  5. मूषकः कूपे पतति। (mūṣakaḥ kūpe patati.) "The mouse falls into the well." (the locative of the place reached)
  6. अर्जुनः सोमवासरे विद्यालयम् गच्छति। (arjunaḥ somavāsare vidyālayam gacchati.) "Arjuna goes to school on Monday."
- **New headwords (7; 367 → 374):** तीरम् tīram n. a "bank, shore" (Hit openings -तीरे) ·
  देशः deśaḥ m. a "country, place" (Hit नानादिग्देशात्) · कूपः kūpaḥ m. a "well" · विवरम्
  vivaram n. a "hole, burrow" (the serial's mouse; Hit हिरण्यकविवरम्) · पतति patati
  "falls; flies down" · तिष्ठति tiṣṭhati "stands, stays" (stem तिष्ठ- regular for the
  learner; why it is तिष्ठ- is v4.c03) · निवसति nivasati "dwells" (prefixed lemma, rule 9;
  Hit निवसन्ति).
- **Previewed:** कुतः is itself a "from"-word, like ततः, इतः, अतः, owned since v1.c02.l06
  (the -तः family c05.l03). For most other stems the ablative and genitive singular share
  one form (c02.l03), one line. **Deferred:** the locative absolute (v4.c05).
- **Payoff:** घटे, वने, जाले from the Volume 2 stories, and घटे क्षिपति "throws into the
  pot", a locative of the place reached; v2.c03's fronted time word becomes a real
  locative (सोमवासरे); कुत्र, owned for a volume, gets an answer with an ending.
- **Main risk:** the locative's English range (in / on / at / into / among). Fix: one
  locative, many prepositions, four picture drills; and the -े of the locative confused
  with the -े of the owned रोचते or of ते in नमस्ते: dictation triplets रामः · रामम् · रामे.
- **Serial:** तीरे एकः वृक्षः अस्ति। वृक्षे कपोतः निवसति। मूषकः विवरे निवसति। व्याधः ग्रामात् वनम् आगच्छति।
- **S0 → next:** +1 day: from–to sentences (PLACE-आत् PLACE-म्); +1 week (c01.l04): the
  three-way locative picture drill.

#### v3.c01.l03 — केन कस्मै — करणम् सम्प्रदानम् च · "With What, For Whom"

- **lesson_type:** grammar. **review_of:** v3.c01.l02, v3.c01.l01, v2.c05.l03 (मह्यम्,
  तुभ्यम्, रोचते), v2.c01.l01 (नमः), v2.c05.l04 (ददातु).
- **The one grammar point:** the giving frame. The instrumental (तृतीया) answers केन?
  "with what, by whom" (करणम्, and company with सह); the dative (चतुर्थी) answers कस्मै?
  "to whom, for whom, for what" (सम्प्रदानम्).
- **Forms taught (Whitney §330; pronoun cells §§491, 495, 504):**

| Case | रामः | देवः | फलम् | asker | answer word | I · you |
|---|---|---|---|---|---|---|
| तृतीया instr. | रामेण rāmeṇa | देवेन devena | फलेन phalena | केन kena | तेन tena | मया mayā · त्वया tvayā |
| चतुर्थी dat. | रामाय rāmāya | देवाय devāya | फलाय phalāya | कस्मै kasmai | तस्मै tasmai | मह्यम् mahyam · तुभ्यम् tubhyam (owned) |

  **The ending is taught as -एन on देवः** (decision 11): देवेन is the plain form, and रामेण
  is the same ending after र्; रामः stays the memorised model word, and every printing of
  T1 shows देवेन beside रामेण.

  **The ṇ reflex (observed spelling; rule v4.c02):** when र, ऋ or ष stands earlier in the
  same word, and nothing between it and the न except vowels, ह य व र, the क-row or the
  प-row, the न of -एन becomes ण. Three columns, never two:

| trigger, not blocked → ण | no trigger → न | trigger, blocked → न |
|---|---|---|
| रामेण rāmeṇa, पुत्रेण putreṇa, मित्रेण mitreṇa, वृक्षेण vṛkṣeṇa, मृगेण mṛgeṇa, मूषकेण mūṣakeṇa, गृहेण gṛheṇa | देवेन devena, हस्तेन hastena, जालेन jālena, दण्डेन daṇḍena, कपोतेन kapotena, शशकेन śaśakena | रथेन rathena (थ), पर्वतेन parvatena (त), अर्जुनेन arjunena (ज), पाषाणेन pāṣāṇena (ण) |

  A word-final न is never affected: रामान् (c02.l01) beside रामाणाम्. **Teacher Notes:**
  8.4.1 रषाभ्यां नो णः समानपदे, 8.4.2 अट्कुप्वाङ्नुम्व्यवायेऽपि, 8.4.37 पदान्तस्य; a
  word-boundary count of the local GRETIL mirror (2026-11-10): पुरुषेण 632 vs पुरुषेन 8;
  पर्वतेन 37 vs पर्वतेण 0; पाषाणेन 15 vs पाषाणेण 0; रथेन 783 vs रथेण 0 (method stated; no
  wider claim).
- **Sentence patterns:** X-ः Y-एन Z-म् VERB (means); X-ः Y-एन सह गच्छति (company); X-ः
  Y-आय Z-म् ददाति / कथयति (recipient); Y-आय नमः; Y-आय Z-ः रोचते.
- **Model sentences:**
  1. व्याधः जालेन मृगम् गृह्णाति। (vyādhaḥ jālena mṛgam gṛhṇāti.) "The hunter catches the deer with a net."
  2. केन सह गच्छसि? — मित्रेण सह। (kena saha gacchasi? — mitreṇa saha.) "Who are you going with? — With a friend."
  3. माता बालकाय फलम् ददाति। (mātā bālakāya phalam dadāti.) "Mother gives the boy a fruit."
  4. अर्जुनः रथेन ग्रामम् गच्छति। (arjunaḥ rathena grāmam gacchati.) "Arjuna goes to the village by chariot."
  5. रामाय नमः। (rāmāya namaḥ.) "Homage to Rāma."
  6. अर्जुनाय क्षीरम् रोचते। (arjunāya kṣīram rocate.) "Arjuna likes milk." (the to-form v2.c05.l03 promised)
- **New headwords (7; 374 → 381):** ददाति dadāti "gives" (the lemma of the counted chunk
  ददातु; rule 8) · कथयति kathayati "tells" (-अय- thematic; Hit कथयति) · सह saha "with" (+
  instr.) · विना vinā "without" (+ instr.; + acc./abl. in Teacher Notes) · दण्डः daṇḍaḥ m. a
  "stick, staff" · रथः rathaḥ m. a "chariot" (and the रथ of मनोरथः, c05.l04) · शशकः
  śaśakaḥ m. a "hare" (no-trigger column; the verse of c06.l04). Upgrade: हस्तः, पुत्रः,
  मित्रम्.
- **Sūtras quoted:** 2.3.16 नमःस्वस्तिस्वाहास्वधालम्वषड्योगाच्च ("with नमः, स्वस्ति … the
  dative"; both owned since v2.c01); 2.3.19 सहयुक्तेऽप्रधाने ("with सह, the instrumental
  for the lesser partner").
- **Previewed:** ते "to you" is a short form of तुभ्यम्, so नमः ते is "homage to you" (the
  seam c04.l02; ते c05.l01) — **नमस्ते thread, step 1.** कृपया "please" is the instrumental
  of कृपा "with compassion" (ā-stems c02.l02). उद्यमेन "by effort" is an instrumental.
  **Deferred:** the passive's instrumental agent (R2 c02.l05; theory v4.c05).
- **Payoff:** गुरवे नमः is a dative (its u-stem shape c02.l03), and v2.c01's §12 warning
  against building "X-वे नमः" for every noun becomes the rule रामाय नमः; मह्यम् रोचते is a
  dative; उद्यमेन हि सिध्यन्ति begins with an instrumental.
- **Main risk:** -एन/-आय vs l02's -आत्/-े; in Hindi, instrument and "from" are both se: छड़ी से "with the stick", पेड़ से "from the
  tree", while company is के साथ "with", like सह. Fix: a three-way picture drill (with the stick / with a friend / from the tree)
  with the Hindi gloss row shown: se twice (colliding), के साथ once (matching सह + instr.); and the ṇ sort (20 owned words into the three
  columns).
- **Serial:** व्याधः हस्तेन अन्नम् क्षिपति। कपोतः अन्नाय वृक्षात् पतति। (the dative of purpose, labelled)
- **S0 → next:** +1 day: the ṇ sort; +1 week (c01.l05): the three-way picture drill.

#### v3.c01.l04 — कस्य हे — सम्बन्धः सम्बोधनम् च · "Whose? and O …!"

- **lesson_type:** conversation. **review_of:** v3.c01.l03, v3.c01.l01, v1.c06.l02 (मम
  नाम, तव), v2.c06.l02 (सिंहस्य, उपरि), v2.c01.l01 (भोः, भो राम).
- **The one grammar point:** the two cases that do not hang on the verb. The genitive
  (षष्ठी) links a noun to a noun, "of, -'s" (सम्बन्धः, not a kāraka); the vocative
  (सम्बोधनम्) links the speaker to the one addressed.
- **Forms taught (Whitney §330; pronoun cells §§491, 495, 504):**

| Case | रामः | फलम् | asker | answer word | I · you |
|---|---|---|---|---|---|
| षष्ठी gen. | रामस्य rāmasya | फलस्य phalasya | कस्य kasya | तस्य tasya (owned) | मम mama · तव tava (owned) |
| सम्बोधनम् voc. | (हे) राम (he) rāma | (हे) फल (he) phala | — | — | — |

- **Sentence patterns:** X-स्य Y-ः (verbless possession); X-स्य समीपे / उपरि; हे X! + a
  question or request; मम नाम … ("the name of me").
- **Model sentences:**
  1. कस्य पुस्तकम्? — छात्रस्य। (kasya pustakam? — chātrasya.) "Whose book? — The student's."
  2. मूषकः सिंहस्य उपरि चलति। (mūṣakaḥ siṃhasya upari calati.) "The mouse walks over the lion." (उपरि takes the genitive)
  3. नृपस्य सेवकः वदति — हे नृप! वृक्षस्य समीपे सिंहः अस्ति। (nṛpasya sevakaḥ vadati — he nṛpa! vṛkṣasya samīpe siṃhaḥ asti.) "The king's servant says: O king! There is a lion near the tree."
  4. हे राम! कुत्र गच्छसि? (he rāma! kutra gacchasi?) "Rāma! Where are you going?"
  5. शब्दस्य अर्थः कः? (śabdasya arthaḥ kaḥ?) "What is the meaning of the word?"
- **New headwords (6; 381 → 387):** हे he "O!" (calling particle) · नृपः nṛpaḥ m. a "king"
  (the a-stem king, so "king" is usable before राजन्'s consonant declension: the system
  v4.c05, its aṅga/pada/bha analysis v4.c02) ·
  सेवकः sevakaḥ m. a "servant" · वचनम् vacanam n. a "word, speech" · शब्दः śabdaḥ m. a
  "word, sound" (and शब्दरूपाणि "word-forms") · समीपम् samīpam n. a "nearness"; समीपे
  "near" (+ gen.). Upgrade: अर्थः.
- **Previewed:** the vocatives of other stems (बालिके, मातः) arrive with them in c02;
  joined भो राम (भोः + राम) is c04.l02. **Deferred:** the genitive with participles and
  the genitive/locative absolute (v4.c05).
- **Payoff:** मम नाम is literally "the name of me", the frame owned since v1.c06.l02;
  तस्य "his" (v1.c06) is the genitive of सः; सिंहस्य उपरि; the vocative is the bare stem,
  which is why हे राम! sounds like the dictionary form.
- **Main risk:** the genitive as a verb "to have". Sanskrit says मम पुस्तकम् अस्ति "of me
  a book is"; flag "*अहम् पुस्तकम् अस्ति". Learners carry the nominative they have produced for two
  volumes into address (*हे रामः!, *भोः रामः!); Hindi's own हे राम helps here: pair-drill हे राम / भो राम.
- **Serial:** कपोतस्य मित्रम् मूषकः। मूषकस्य विवरम् वृक्षस्य समीपे अस्ति। व्याधः वदति — हे कपोत! अत्र अन्नम् अस्ति।
- **S0 → next:** +1 day: ten whose-questions; +1 week (c02.l01): हे + name role-play.

#### v3.c01.l05 — विभक्तयः · "The Eight Cases" — Chapter 1 Exam

- **lesson_type:** review. **review_of:** v3.c01.l01–l04, v2.c06.l05.
- **Assembly (§15):** the singular column (T1), the asker and answer columns, the vibhakti
  and role names, and the tradition's way of chanting it (TRADITION: the शब्दरूप
  recitation of school practice, रामः रामौ रामाः …; Chapter 1 chants only the first
  column).

| विभक्तिः | रामः | फलम् | कः | सः | job (kāraka where there is one) |
|---|---|---|---|---|---|
| प्रथमा | रामः | फलम् | कः · किम् | सः · तत् | कर्ता doer |
| द्वितीया | रामम् | फलम् | कम् · किम् | तम् · तत् | कर्म done-to; goal |
| तृतीया | रामेण · देवेन | फलेन | केन | तेन | करणम् means; company with सह |
| चतुर्थी | रामाय | फलाय | कस्मै | तस्मै | सम्प्रदानम् recipient; "for"; with नमः |
| पञ्चमी | रामात् | फलात् | कस्मात् · कुतः | तस्मात् | अपादानम् "from" |
| षष्ठी | रामस्य | फलस्य | कस्य | तस्य | सम्बन्धः "of" (not a kāraka) |
| सप्तमी | रामे | फले | कस्मिन् · कुत्र | तस्मिन् | अधिकरणम् "in, on, at"; time |
| सम्बोधनम् | हे राम | हे फल | — | — | calling (not a kāraka) |

  The pronoun columns already differ in three masculine cells (-स्मै -स्मात् -स्मिन्),
  and the neuter तत् stands where फलम् has -म् (nominative and accusative): noticed, parked for c05.l02. **Sūtra quoted:** 1.4.14 सुप्तिङन्तं पदम् ("a word is what ends in a
  sup or a tiṅ ending"), which names this chapter (सुबन्त-) and Chapter 3 (तिङन्त-). The
  ending list behind *sup* (4.1.2 स्वौजसमौट्छष्टाभ्याम्भिस्… सुप्) is shown once as a
  picture, not read; *sup* is a pratyāhāra running from the first ending सु to the final
  marker प् (Teacher Notes).
- **Thread overlay (c01):** उद्यमेन, सिंहस्य, मुखे; सत्यम्.
- **Exam:** chapter header shape. Ledger stays 387. Paradigm ledger: T1 ✓.
- **Payoff:** both Volume 2 stories, parsed noun by noun, without a gloss (the moral's i-stem बुद्धिः (buddhiḥ) shown with its case given, as a display; it is parsed in c02.l03).
- **Main risk:** drills passed, free speech frozen; task E is scored on communication
  first and endings second (rubric in §22).
- **S0 → next:** +1 day (c02.l01): the singular column chanted and written; +1 week
  (c02.l02): task C's grid, reshuffled.

---

### 4.2 Chapter 2 — सुबन्तविस्तारः · Nouns & Cases II

**Goals.** Talk about more than one; describe with agreeing adjectives; decline the
feminines, the i- and u-stems and the kinship words; count in the right gender; meet the
dual; close with the roles map.

**Grammar inventory (exact).** a-stem plural m./n., all cases (T2; Whitney §330);
agreement of a-adjectives (-ः -आ -म्) in gender, number and case; numerals nom./acc.:
एकः/एका/एकम्, द्वौ/द्वे, त्रयः/त्रीन्/तिस्रः/त्रीणि, चत्वारः/चतुरः/चतस्रः/चत्वारि, पञ्च …
दश (Whitney §§482–483); the 3pl verb (-अन्ति, सन्ति) as agreement partner (preview; full
c03.l01); ā-stem feminine बालिका, sg. and pl. (T3; Whitney §364) with नदी as its Δ card;
सा/ताः; i-stems and u-stems masculine (T4; अग्निः, गुरुः; Whitney §§339–341) with मतिः,
धेनुः as the feminine Δ card; बहु as a u-adjective; the -इन् R1 card; ṛ-stems (T5; पिता,
माता; दाता, स्वसा; Whitney §373) with 1.2.70; the dual card; at l05 the kāraka map, the
R2 card (-त + instrumental doer), the recurring-endings card and the free facts.

**Deferral-tracker rows redeemed:** 1 (other stems), 2 (plural, dual nouns, कति answers),
3 (agreement). **1.x assets carried:** the rāma 8×3 table (p.125, restored at l05); the
kāraka lesson, functionally (pp.87–89); the numeral nominatives with IR-025's तिस्रः;
देवी as an ī-stem (IR-025). **Promises kept:** कति खगाः; सीता/गीता; कमले; मातृ/माता; ॠ in
the genitive plural; मातः; गुरवे नमः; स्तः (preview); रात्रौ.

**Serial, episode 2.** The flock sees the grains and lands; the king of the doves; two
feet in the net.

**Exam shape (l05, one 45-minute sitting).** A transformation: singular ↔ plural ↔ dual
across all taught stems, 12 items (8 min). B agreement cloze: one adjective in three
genders against 10 nouns, with numerals (8 min). C the roles map: label the job of every
noun in 8 sentences, three of them not one-to-one (8 min). D parse Hit 0.36, every word's
case and number (8 min). E production: describe one's family and home, 6+ sentences with
kinship words, one dual, three adjectives, two numerals, recorded (10 min).

#### v3.c02.l01 — बहवः · "Many: the a-Stem Plural"

- **lesson_type:** grammar. **Station 0:** v3.c01.l05's +1 day item and v3.c01.l04's +1 week
  item. **review_of:** v3.c01.l05, v2.c03.l01–l02 (numbers), v1.c03.l01 (कति खगाः), v2.c06.l03 (the verse).
- **The one grammar point:** the plural of a-stems, all cases. An adjective in -अ takes the
  same number and case as its noun (m./n.); a plural doer takes the verb in -अन्ति.
- **Forms taught (T2):**

| Case | रामाः m. pl. | फलानि n. pl. | m. asker · answer | n. asker · answer |
|---|---|---|---|---|
| प्रथमा | रामाः rāmāḥ | फलानि phalāni | के ke · ते te | कानि kāni · तानि tāni |
| द्वितीया | रामान् rāmān | फलानि phalāni | कान् kān · तान् tān | कानि · तानि |
| तृतीया | रामैः rāmaiḥ | फलैः phalaiḥ | कैः kaiḥ · तैः taiḥ | (as m.) |
| चतुर्थी | रामेभ्यः rāmebhyaḥ | फलेभ्यः phalebhyaḥ | केभ्यः kebhyaḥ · तेभ्यः tebhyaḥ | (as m.) |
| पञ्चमी | रामेभ्यः rāmebhyaḥ | फलेभ्यः phalebhyaḥ | केभ्यः · तेभ्यः | (as m.) |
| षष्ठी | रामाणाम् rāmāṇām · देवानाम् devānām | फलानाम् phalānām | केषाम् keṣām · तेषाम् teṣām | (as m.) |
| सप्तमी | रामेषु rāmeṣu | फलेषु phaleṣu | केषु keṣu · तेषु teṣu | (as m.) |
| सम्बोधनम् | हे रामाः | हे फलानि | — | — |

  Numerals with m./n. nouns (Whitney §§482–483; nom. · acc.):

| | m. | n. |
|---|---|---|
| 1 | एकः ekaḥ · एकम् ekam | एकम् ekam |
| 3 | त्रयः trayaḥ · त्रीन् trīn | त्रीणि trīṇi |
| 4 | चत्वारः catvāraḥ · चतुरः caturaḥ | चत्वारि catvāri |
| 5–10 | पञ्च pañca · षट् ṣaṭ · सप्त sapta · अष्ट aṣṭa / अष्टौ aṣṭau · नव nava · दश daśa — one form for nom. and acc., all genders | |

  (The 2 waits for the dual, c02.l04. The feminines एका, तिस्रः, चतस्रः come with the
  feminine nouns, l02. Only nom./acc. are taught; the oblique cells and the numeral system
  are v4.c05, D11.)
- **Sentence patterns:** NUM X-आः सन्ति; X-आः VERB-अन्ति; ADJ-आः X-आः / ADJ-आनि X-आनि;
  कति X-आः? — NUM.
- **Model sentences:**
  1. वृक्षे पञ्च काकाः सन्ति। (vṛkṣe pañca kākāḥ santi.) "There are five crows in the tree."
  2. कति छात्राः? — त्रयः छात्राः। (kati chātrāḥ? — trayaḥ chātrāḥ.) "How many students? — Three."
  3. कपोताः तण्डुलान् खादन्ति। (kapotāḥ taṇḍulān khādanti.) "The doves eat grains of rice."
  4. कोमलानि पत्राणि वृक्षात् पतन्ति। (komalāni patrāṇi vṛkṣāt patanti.) "Soft leaves fall from the tree."
  5. काकः पाषाणान् घटे क्षिपति। (kākaḥ pāṣāṇān ghaṭe kṣipati.) "The crow throws stones into the pot." (the 1.x plural, restored)
  6. सप्त दिवसाः एकः सप्ताहः। (sapta divasāḥ ekaḥ saptāhaḥ.) "Seven days are one week."
- **New headwords (5; 387 → 392):** पत्रम् patram n. a "leaf; letter" (MW spells pattra;
  Apte पत्रम्) · कर्णः karṇaḥ m. a "ear" · दिवसः divasaḥ m. a "day" (Hit 1.3 दिवसे दिवसे; T5
  अन्यतमे दिवसे) · तण्डुलः taṇḍulaḥ m. a "grain of rice" (Hit 1 तण्डुलकणान्) · पाशः pāśaḥ
  m. a "noose, snare" (the serial; Hit पाशान्). Upgrades: लोकः, कणः, नेत्रम्, कोमलः.
  The genitive plural is taught as -आनाम् on देवानाम्; रामाणाम् is the same ending after र्
  (decision 11).
- **Previewed (labelled):** -अन्ति and सन्ति (full grid c03.l01); the ṣ in रामेषु beside
  the s that stays in बालिकासु (l02): the s → ṣ law of v1.c04.l02, observed (named
  c04.l04; rule v4.c02). The title's बहवः (bahavaḥ) "many" is not an a-stem form: it is
  the masculine plural of the owned बहु, a u-adjective (-अवः, the pattern of l03's
  गुरवः), read whole here and explained in c02.l03.
- **Payoff:** Hitopadeśa 0.36 explains itself further: कार्याणि (n. nom. pl.), मनोरथैः
  (instr. pl.), मृगाः (nom. pl.), and सिध्यन्ति, प्रविशन्ति as plural partners. कति gets a
  full answer. The V2 one-word answer अल्पम् begins to agree (बहु, a u-adjective, agrees from l03).
- **Main risk:** -आः read as singular. Dictation pairs रामः/रामाः, काकः/काकाः. Second risk:
  पञ्च + plural noun with a singular verb ("five is …"): drill सन्ति.
- **Serial:** व्याधः तण्डुलान् जालम् च क्षिपति। कपोताः तण्डुलान् पश्यन्ति। ते जाले पतन्ति।
- **S0 → next:** +1 day: कति questions with 3–10; +1 week (c02.l03): the plural column from
  memory.

#### v3.c02.l02 — सा प्रिया · "She, and the Words that Follow Her"

- **lesson_type:** grammar. **review_of:** v3.c02.l01, v2.c02.l01–l02 (एषः, एषा),
  v2.c05.l04 (बहु, अल्पम्), v2.c06.l01 (अल्पम् जलम्, एकम् घटम्), v1.c05.l01.
- **The one grammar point:** the feminine declension. The ā-stem is the table (T3); the
  ī-stem is its Δ card; an a-adjective follows a feminine noun in -आ (gender agreement).
- **Forms taught (T3; Whitney §364):**

| Case | बालिका sg. | बालिकाः pl. | सा · ताः |
|---|---|---|---|
| प्रथमा | बालिका bālikā | बालिकाः bālikāḥ | सा sā · ताः tāḥ |
| द्वितीया | बालिकाम् bālikām | बालिकाः bālikāḥ | ताम् tām · ताः tāḥ |
| तृतीया | बालिकया bālikayā | बालिकाभिः bālikābhiḥ | तया tayā · ताभिः tābhiḥ |
| चतुर्थी | बालिकायै bālikāyai | बालिकाभ्यः bālikābhyaḥ | तस्यै tasyai · ताभ्यः tābhyaḥ |
| पञ्चमी | बालिकायाः bālikāyāḥ | बालिकाभ्यः bālikābhyaḥ | तस्याः tasyāḥ · ताभ्यः |
| षष्ठी | बालिकायाः bālikāyāḥ | बालिकानाम् bālikānām | तस्याः tasyāḥ · तासाम् tāsām |
| सप्तमी | बालिकायाम् bālikāyām | बालिकासु bālikāsu | तस्याम् tasyām · तासु tāsu |
| सम्बोधनम् | हे बालिके bālike | हे बालिकाः bālikāḥ | — |

  **Δ card — नदी (ī-stem), the same feminine set with a य्-glide:** nom. नदी nadī (no ः)
  · acc. नदीम् nadīm · instr. नद्या nadyā · dat. नद्यै nadyai · abl./gen. नद्याः nadyāḥ ·
  loc. नद्याम् nadyām · voc. नदि nadi · nom./voc. pl. नद्यः nadyaḥ · acc. pl. नदीः nadīḥ ·
  नदीभिः, नदीभ्यः, नदीनाम्, नदीषु.

  **Agreement:** प्रियः पुत्रः · प्रिया पुत्री · प्रियम् मित्रम्; विशालः वृक्षः · विशाला नदी ·
  विशालम् वनम् (Whitney §332: a-adjectives make the feminine in -आ, some in -ई; the -ई ones
  are named only when met). **Feminine numerals:** एका ekā (acc. एकाम्) · तिस्रः tisraḥ
  (nom. = acc.; IR-025: not "ततस्रः") · चतस्रः catasraḥ (nom. = acc.).
- **Sentence patterns:** ADJ-आ X-आ / ADJ-आ X-ई in every case; सा VERB-ति; X-आयाः / X-याः
  Y-े ("on the bank of the river").
- **Model sentences:**
  1. बालिका नदीम् पश्यति। (bālikā nadīm paśyati.) "The girl sees the river."
  2. एषा मम प्रिया भगिनी। (eṣā mama priyā bhaginī.) "This is my dear sister."
  3. नद्याः तीरे विशालः वृक्षः अस्ति। (nadyāḥ tīre viśālaḥ vṛkṣaḥ asti.) "On the river's bank there is a great tree." (the Hitopadeśa opening's shape, c06)
  4. अहम् मधुराणि आम्राणि इच्छामि। (aham madhurāṇi āmrāṇi icchāmi.) "I want sweet mangoes." (the v2.c05 refusal, redeemed)
  5. तिस्रः बालिकाः नदीम् गच्छन्ति। (tisraḥ bālikāḥ nadīm gacchanti.) "Three girls go to the river."
  6. देवी सभायाम् वदति। (devī sabhāyām vadati.) "The queen speaks in the assembly."
- **New headwords (7; 392 → 399):** देवी devī f. ī "goddess; queen" (IR-025: an ī-stem, not
  "add -आ") · पत्नी patnī f. ī "wife" (T5 स्वपत्न्यै) · सभा sabhā f. ā "assembly, hall" ·
  आम्रम् āmram n. a "mango (fruit)" (आम्रः m. the tree) · मधुरः madhuraḥ adj. -रा -रम्
  "sweet" · विशालः viśālaḥ adj. -ला -लम् "wide, great" (Hit 1 विशालः शाल्मलीतरुः) · कृष्णः
  kṛṣṇaḥ adj. -ष्णा -ष्णम् "black, dark" (and कृष्णेन, c01.l03's blocked column revisited:
  the ण of the stem stands between ष and the ending's न, so कृष्णेन, not *कृष्णेण).
- **Previewed:** कृपया is the instrumental of कृपा (c01.l03's promise kept). **Deferred:**
  the feminine of i/u/ṛ adjectives (बहु in l03; others v4.c05); comparative and
  superlative (-तर, -तम; v4.c04).
- **Payoff:** सीता and गीता have no ः because the ā-stem nominative has none (v1.c05.l01);
  कमले and बालिके are vocatives (v1.c02.l04); अल्पम् जलम् and एकम् घटम् are agreement; the
  "sweet mangoes" refusal of v2.c05 is lifted; छात्रा (v1.c06.l02) is the ā-stem she-form of छात्रः;
  क्रुद्धः, बद्धः, मुक्तः (v2.c06.l02) agree like प्रियः (क्रुद्धा, क्रुद्धम्); and कुशलिनी
  (v2.c01.l02) and सुखिनी, the she-forms of कुशली and सुखी, end in -ई and decline like नदी
  (one line; the -इन् class and the neuter सुखि are v4.c05).
- **Main risk:** the ā-stem's look-alike -आः cells (nom. pl., acc. pl., abl./gen. sg.).
  Fix: the "question decides" drill (one written form, three askers: काः? काः? कस्याः?; the feminine asker cells are shown beside T3 as a display, built from the सा column by putting क् for त्: का (owned), काम्, कया, कस्यै, कस्याः (abl. = gen.), कस्याम्; pl. काः (nom. = acc.), काभिः, काभ्यः (dat. = abl.), कासाम्, कासु; recognition only, the Δ card is c05.l02).
  And gender by meaning: मित्रम् "friend" is neuter whatever the friend.
- **Serial:** नद्याः तीरे विशालः वृक्षः अस्ति। तस्मिन् वृक्षे कपोताः निवसन्ति। व्याधस्य पत्नी ग्रामे अस्ति।
- **S0 → next:** +1 day: the "question decides" drill; +1 week (c02.l04): agreement cloze in
  three genders.

#### v3.c02.l03 — अग्निः गुरुः च · "Fire and Teacher: i- and u-Stems"

- **lesson_type:** grammar. **review_of:** v3.c02.l02, v3.c01.l03, v2.c02.l03 (अग्निः, RV
  1.1.1), v2.c01.l01 (गुरवे नमः), v2.c03.l03 (time).
- **The one grammar point:** i- and u-stems. The stem vowel strengthens before some
  endings (अग्नये, गुरवे; अग्नेः, गुरोः; अग्नौ, गुरौ), and the ablative and genitive
  singular share one form.
- **Forms taught (T4; Whitney §§339, 341):**

| Case | अग्निः m. | गुरुः m. |
|---|---|---|
| प्रथमा | अग्निः agniḥ | गुरुः guruḥ |
| द्वितीया | अग्निम् agnim | गुरुम् gurum |
| तृतीया | अग्निना agninā | गुरुणा guruṇā |
| चतुर्थी | अग्नये agnaye | गुरवे gurave |
| पञ्चमी / षष्ठी | अग्नेः agneḥ | गुरोः guroḥ |
| सप्तमी | अग्नौ agnau | गुरौ gurau |
| सम्बोधनम् | हे अग्ने agne | हे गुरो guro |
| pl. प्रथमा | अग्नयः agnayaḥ | गुरवः guravaḥ |
| pl. द्वितीया | अग्नीन् agnīn | गुरून् gurūn |
| pl. तृतीया | अग्निभिः agnibhiḥ | गुरुभिः gurubhiḥ |
| pl. चतुर्थी / पञ्चमी | अग्निभ्यः agnibhyaḥ | गुरुभ्यः gurubhyaḥ |
| pl. षष्ठी | अग्नीनाम् agnīnām | गुरूणाम् gurūṇām |
| pl. सप्तमी | अग्निषु agniṣu | गुरुषु guruṣu |

  **Δ card — the feminines मतिः, धेनुः:** like the masculines, except instr. मत्या matyā /
  धेन्वा dhenvā; acc. pl. मतीः matīḥ / धेनूः dhenūḥ; and three cells that may take the
  feminine set: dat. मत्यै matyai or मतये; abl./gen. मत्याः matyāḥ or मतेः; loc. मत्याम्
  matyām or मतौ (धेन्वै/धेनवे, धेन्वाः/धेनोः, धेन्वाम्/धेनौ). Both are correct; drill the
  masculine-like forms first; no frequency claim. **बहु** as a u-adjective: बहु जलम्, बहूनि
  फलानि, बहवः वृक्षाः (feminine बह्वी: one line). ṇ again: गुरुणा, ऋषिणा, हरिणा vs अग्निना,
  कविना.

  **R1 card — the -इन् look-alike (recognition only; Whitney §440):** पक्षी pakṣī "bird",
  पक्षिणम्, पक्षिणा, पक्षिणः (abl./gen. sg.; nom./acc. pl.), पक्षिणि, पक्षिभिः, पक्षिणाम्; the
  owned सुखी, सुखिनः "happy (ones)". The class is v4.c05.
- **Sentence patterns:** the c01 frames with i/u nouns; बहु in agreement; X-ः Y-आत्
  श्रेष्ठः ("better than").
- **Model sentences:**
  1. गुरवे नमः। (gurave namaḥ.) "Homage to the teacher." (v2.c01's display, now a dative)
  2. शिष्यः गुरुणा सह पठति। (śiṣyaḥ guruṇā saha paṭhati.) "The student studies with the teacher."
  3. कपिः तरोः फलानि गृह्णाति। (kapiḥ taroḥ phalāni gṛhṇāti.) "The monkey takes fruits from the tree."
  4. रात्रौ आकाशे ताराः सन्ति। (rātrau ākāśe tārāḥ santi.) "At night there are stars in the sky." (रात्रौ: loc. of the owned रात्रिः)
  5. सः अतिथये भोजनम् ददाति। (saḥ atithaye bhojanam dadāti.) "He gives food to the guest."
  6. बुद्धिः बलात् श्रेष्ठा। (buddhiḥ balāt śreṣṭhā.) "Intelligence is better than strength." (the 1.x moral: the ablative "than", f. agreement; named in l05's map)
- **New headwords (7; 399 → 406):** तरुः taruḥ m. u "tree" (Hit शाल्मलीतरुः; Panc 4 तरोरधः)
  · शत्रुः śatruḥ m. u "enemy" · अतिथिः atithiḥ m. i "guest" (Panc 4 समभ्यागतोऽतिथिः) ·
  साधुः sādhuḥ m. u, also adj. "good; a good man" · धेनुः dhenuḥ f. u "cow" · पक्षी pakṣī m.
  (-इन्; rule 14) "bird" (Hit 1 पक्षिणः) · श्रेष्ठः śreṣṭhaḥ adj. -ष्ठा -ष्ठम् "best; better
  (than, + abl.)" (MW s.v. śreṣṭha).
- **Previewed:** अग्निमीळे (RV 1.1.1, v2.c02's homecoming) begins with the accusative
  अग्निम् (Vedic ळ as v2.c02 noted). **Deferred:** neuter i/u (मधु, वारि), पतिः, सखा
  (whole in c05.l01), the feminine of u-adjectives beyond बह्वी (v4.c05).
- **Payoff:** गुरवे नमः; अग्निमीळे; बुद्धिः एव बलम् as a grammatical sentence; the -ए/-ओ/-औ
  strengthening the learner will meet again as guṇa and vṛddhi (c04.l01).
- **Main risk:** load. Production targets are the two masculine columns plus the feminine
  nom./acc./instr.; the optional feminine cells and R1 are ◐. The lesson teaches the
  masculines in sentences first and shows the feminine only as a Δ card. R1 stays here
  (decision 9); its load is a watch item for the chapter review.
- **Serial:** पक्षिणः रात्रौ तरौ निवसन्ति। (पक्षिणः: R1, labelled) प्रभाते कपोताः तरोः आकाशम् गच्छन्ति। व्याधः कपोतानाम् शत्रुः।
- **S0 → next:** +1 day: the masculine i/u columns from memory; +1 week (c02.l05): the
  feminine Δ cells as recognition.

#### v3.c02.l04 — पितरौ · "Parents: ṛ-Stems and the Dual"

- **lesson_type:** grammar. **review_of:** v3.c02.l03, v2.c02.l01 (kinship set),
  v1.c02.l03 (मातृ, ॠ), v2.c02.l04 (the स्तः promise), v2.c06.l04 (दन्तः, पादः).
- **The one grammar point:** the kinship and agent nouns in -ऋ (T5). The one new table is
  the ṛ-stem; the dual arrives as a three-ending card (no new table), because पितरौ is the
  word that needs it.
- **Forms taught (T5; Whitney §373):**

| Case | पिता m. | माता f. | दाता m. (agent; स्वसा f. alike) |
|---|---|---|---|
| प्रथमा | पिता pitā | माता mātā | दाता dātā |
| द्वितीया | पितरम् pitaram | मातरम् mātaram | दातारम् dātāram |
| तृतीया | पित्रा pitrā | मात्रा mātrā | दात्रा dātrā |
| चतुर्थी | पित्रे pitre | मात्रे mātre | दात्रे dātre |
| पञ्चमी / षष्ठी | पितुः pituḥ | मातुः mātuḥ | दातुः dātuḥ |
| सप्तमी | पितरि pitari | मातरि mātari | दातरि dātari |
| सम्बोधनम् | हे पितः pitaḥ | हे मातः mātaḥ | हे दातः dātaḥ |
| du. प्र./द्वि. | पितरौ pitarau | मातरौ mātarau | दातारौ dātārau |
| pl. प्रथमा | पितरः pitaraḥ | मातरः mātaraḥ | दातारः dātāraḥ |
| pl. द्वितीया | पितॄन् pitṝn | मातॄः mātṝḥ | दातॄन् dātṝn (स्वसॄः svasṝḥ) |
| pl. तृतीया | पितृभिः pitṛbhiḥ | मातृभिः mātṛbhiḥ | दातृभिः dātṛbhiḥ |
| pl. चतुर्थी / पञ्चमी | पितृभ्यः pitṛbhyaḥ | मातृभ्यः mātṛbhyaḥ | दातृभ्यः dātṛbhyaḥ |
| pl. षष्ठी | पितॄणाम् pitṝṇām | मातॄणाम् mātṝṇām | दातॄणाम् dātṝṇām |
| pl. सप्तमी | पितृषु pitṛṣu | मातृषु mātṛṣu | दातृषु dātṛṣu |

  भ्राता goes like पिता, दुहिता like माता; स्वसा takes दाता's long strong stem
  (स्वसारम्, स्वसारौ, स्वसारः) with the feminine acc. pl. स्वसॄः.

  **The dual card (three forms for every stem):**

| Stem | nom./acc./voc. | instr./dat./abl. | gen./loc. |
|---|---|---|---|
| रामः | रामौ rāmau | रामाभ्याम् rāmābhyām | रामयोः rāmayoḥ |
| फलम् | फले phale | फलाभ्याम् phalābhyām | फलयोः phalayoḥ |
| बालिका | बालिके bālike | बालिकाभ्याम् | बालिकयोः bālikayoḥ |
| नदी | नद्यौ nadyau | नदीभ्याम् nadībhyām | नद्योः nadyoḥ |
| अग्निः / मतिः | अग्नी agnī / मती matī | अग्निभ्याम् | अग्न्योः agnyoḥ |
| गुरुः / धेनुः | गुरू gurū / धेनू dhenū | गुरुभ्याम् | गुर्वोः gurvoḥ |
| पिता | पितरौ pitarau | पितृभ्याम् pitṛbhyām | पित्रोः pitroḥ |
| सः / सा, तत् | तौ tau / ते te | ताभ्याम् tābhyām | तयोः tayoḥ |
| कः | कौ kau | काभ्याम् | कयोः kayoḥ |
| 2 | द्वौ dvau (m.) / द्वे dve (f. n.) | (द्वाभ्याम्, ◐) | (द्वयोः, ◐) |

- **Sentence patterns:** X-ः Y-ः च + dual verb (preview); द्वौ/द्वे + dual noun; X-स्य
  द्वौ Y-औ स्तः (body pairs).
- **Model sentences:**
  1. मम पिता माता च गृहे स्तः। (mama pitā mātā ca gṛhe staḥ.) "My father and mother are at home." (स्तः, v2.c02.l04's promise; the dual verb previewed)
  2. पितरौ वनम् गच्छतः। (pitarau vanam gacchataḥ.) "The parents go to the forest."
  3. अहम् मातरम् नमामि। (aham mātaram namāmi.) "I bow to my mother." (नमति + acc. vs नमः + dat., contrasted)
  4. हे मातः! हे पितः! (he mātaḥ! he pitaḥ!) "Mother! Father!"
  5. एतत् मम भ्रातुः पुस्तकम्। (etat mama bhrātuḥ pustakam.) "This is my brother's book."
  6. बालकस्य द्वौ कर्णौ स्तः। (bālakasya dvau karṇau staḥ.) "The boy has two ears."
- **New headwords (5; 406 → 411):** दाता dātā m. ṛ "giver" · कर्ता kartā m. ṛ "doer, maker"
  (the kāraka name itself, an agent noun of कृ) · उभौ ubhau pron. adj., dual only (f./n.
  उभे) "both" · नयनम् nayanam n. a "eye" (its inner seam ने + अनम्, c04.l01) · ओष्ठः oṣṭhaḥ
  m. a "lip" (and the ओष्ठ्य of v1.c01.l02).
- **Sūtra quoted:** 1.2.70 पिता मात्रा — "father, with mother": पितरौ, "the two fathers", is
  the word for "parents".
- **Previewed:** 3du -तः (गच्छतः, स्तः), full c03.l01; the dvandva मातापितरौ (first member
  माता-, 6.3.25 in Teacher Notes) c05.l04. **Deferred:** नप्तृ, नृ, neuter ṛ-stems (v4.c05).
- **Payoff:** मातृ and माता (v1.c02.l03) are the stem and the nominative of one word; ॠ,
  learned "for completeness", is a real vowel in पितॄन् and मातॄणाम्; मातः is the vocative
  (v1.c02.l04); कर्ता names the doer's role and is itself a doer-noun; अयोगवाहौ (v1.c02.l06)
  is रामौ's shape, "the two ayogavāhas".
- **Main risk:** the dual is unfamiliar and rare in prose. Teach it as the "pairs" number
  (eyes, ears, hands, parents). Production: ṛ-stem singular, nom./acc. plural and
  vocative; dual nom./acc. of every stem; the other cells ◐.
- **Serial:** कपोतानाम् नृपः अपि जाले पतति। तस्य द्वौ पादौ पाशे स्तः। (no -त participle
  before R2, c02.l05)
- **S0 → next:** +1 day: kinship cells (पिता/माता singular); +1 week (c03.l01): body-pair
  duals.

#### v3.c02.l05 — कारकाणि · "The Roles Map" — Chapter 2 Exam

- **lesson_type:** review. **review_of:** v3.c02.l01–l04, v3.c01.l05.
- **Assembly (§15):** the kāraka map (restoring the 1.x kāraka lesson functionally), the
  rāma 8×3 table (1.x p.125, with ṇ cells marked and देवेन, देवानाम् beside रामेण,
  रामाणाम्: decision 11), the dual card, the recurring-endings
  card and the free facts (§1.3), and the paradigm ledger for Chapters 1–2.

| Job (kāraka) | Usual case | Owned example | Where case and job part company |
|---|---|---|---|
| कर्ता doer | प्रथमा | व्याधः मृगम् पश्यति | with a -त participle the doer is instrumental (R2 below) |
| कर्म done-to | द्वितीया | मृगम् | goal of motion: ग्रामम् गच्छति; two objects: शिष्यम् नाम पृच्छति |
| करणम् means | तृतीया | जालेन | company: मित्रेण सह (2.3.19) is not a means |
| सम्प्रदानम् recipient | चतुर्थी | बालकाय फलम् ददाति | with नमः, स्वस्ति (2.3.16): a dative with no recipient; with रोचते the liker is still सम्प्रदानम् for Pāṇini (1.4.33, Teacher Notes), though nothing is given |
| अपादानम् fixed point of separation | पञ्चमी | वृक्षात् पतति | "than": बलात् श्रेष्ठा |
| अधिकरणम् location | सप्तमी | वने, सोमवासरे | time is also "where" |
| (सम्बन्धः relation — not a kāraka) | षष्ठी | रामस्य पुत्रः | with उपरि, समीपे: सिंहस्य उपरि |
| (सम्बोधनम् address — not a kāraka) | सम्बोधनम् | हे राम | — |

  **TRADITION line (learner text):** "Pāṇini defines each of the six kārakas in one general sūtra,
  with further sūtras for special cases (1.4.24–1.4.54) and assigns their cases in another set (2.3.2 ff.); Volume 4 reads them
  (v4.c05)." The defining and assigning sūtras, with numbers, are in Teacher Notes only.

  **R2 card — the -त participle as a past, with the doer in the instrumental (recognition
  only):** the owned बद्धः, मुक्तः, क्रुद्धः, पिपासितः, and V1's कृत, गत are verbal
  adjectives. With one as the "verb", the doer goes into the instrumental: मया कृतम् "done
  by me"; तेन उक्तम् "said by him"; उक्तं च "and it has been said" (the Pañcatantra's
  verse-introducer: 330 times in the local Jha e-text, `vispancu.htm`; method stated, no
  wider claim). Production: none. Formation v4.c04;
  voice v4.c05.

  **HISTORY/FACT (conditional, D17):** the 1.x Fillmore note: Charles Fillmore's "The Case
  for Case" (1968) proposed deep semantic roles for English; the parallel with Pāṇini's
  kārakas is often discussed and is stated as a parallel, never as influence. It prints
  only if `fillmore1968` and a scholarly comparison key are added; otherwise it moves to
  v4.c05.
- **Thread overlay (c02):** कार्याणि, मनोरथैः, मृगाः; सुप्तस्य (R2); अहिंसा, परमः; भद्राणि;
  सुखिनः (R1).
- **Exam:** chapter header shape. Ledger stays 411. Paradigm ledger: T1–T5 ✓ in the listed
  cells; dual nom./acc. ✓; R1, R2 ◐.
- **Payoff:** the learner can say what every noun in every owned sentence is doing, and why
  the dictionary's "with" and "to" are not enough.
- **Main risk:** the map used as a lookup table; task C's three not-one-to-one sentences
  guard it.
- **S0 → next:** +1 day (c03.l01): the roles map from memory; +1 week (c03.l02): the 8×3
  table chanted.

---

### 4.3 Chapter 3 — तिङन्तप्रवेशः · The Present-System Verb

**Goals.** Use the verb in every person (singular and plural in all persons, and the 3rd-person dual; 1st- and 2nd-person duals ◐); use the second family of endings; tell a story in
the past; ask, command, forbid and advise. This is IR-040's "four common lakāras,
drilled", read as the four present-system lakāras (D14).

**Grammar inventory (exact).** Primary endings (T6): laṭ parasmaipada, nine cells,
thematic verbs (the गच्छति type: every owned regular verb, classes 1, 4, 6, 10 as "stems
given"; Whitney §735), with 7.3.101 for the -आ- stretch; laṭ ātmanepada, nine cells (लभते
type). अस् (Whitney §636) and कृ (Whitney §714) whole in all four lakāras, with listed
production cells. Secondary endings (T7): laṅ P and Ā (Whitney §742) with the augment and
its place after an upasarga; the vṛddhi augment of vowel-initial stems as whole words
(ऐच्छत्); the Ā laṅ displayed (◐) except अलभत. (The storyteller's present + स्म, 3.2.118,
is c06.l03's, where प्रतिवसति स्म is read.) loṭ and vidhiliṅ as Δ cards on T7 (3.4.85–86;
Whitney §§738–739), both padas (the Ā loṭ's 3sg, 3pl, 2sg and 1st persons are a Δ on T6 Ā instead: -ते → -ताम्, -न्ते → -न्ताम्, -से → -स्व, 1st-person -ए → -ऐ; 3.4.90–93, Teacher Notes), with production subsets: loṭ the production target,
vidhiliṅ a card with its 3rd person productive. Verb production everywhere: singular and
plural in all persons, and the 3rd-person dual, ✓; 1st- and 2nd-person duals ◐ (D13). Prohibition: मा + imperative (Whitney
§579c) and न + optative (§580). Chunks: उवाच, अब्रवीत्, आह. R3 (-यते), R4 (athematic other
cells). The names लट् लङ् लोट् लिङ्, परस्मैपदम् आत्मनेपदम्, प्रथमः मध्यमः उत्तमः पुरुषः
(owned). The subject pronouns' nominatives (आवाम् वयम्, युवाम् यूयम्) as labelled cells
(full tables c05.l01).

**Deferral-tracker rows redeemed:** 4 (the present in every person and number), 8 (the
present-system moods and the past). **1.x assets carried:** the गच्छ present and past
(pp.37–43); the 1.x future named and deferred. **Promises kept:** मिलामः, स्तः, रोचते,
क्षमस्व, वदतु/ददातु/अस्तु/मुञ्च/पश्य, आसीत्, "two doers on one verb" (v2.c04.l04).

**Serial, episode 3.** The king of the doves speaks (imperatives, optatives); the episode
retold in the past.

**Exam shape (l05, one 45-minute sitting).** A conjugation grid: verb + lakāra + person +
number → the form, 16 items, ✓ cells only (P: singular and plural in all persons and the 3rd-person dual; liṅ in the 3rd person only; the listed Ā cells) (10 min). B tense switch: retell the
Volume 2 crow story in the imperfect, 8 lines (10 min). C requests role-play: a guest at a
teacher's home, four imperatives, two optatives, one prohibition, polite भवान् (10 min). D
listening: a short dialogue with plural and dual verbs, 6 questions (8 min). E dictation,
6 forms (5 min).

#### v3.c03.l01 — वयम् गच्छामः · "We Go: the Whole Present"

- **lesson_type:** grammar. **Station 0:** v3.c02.l05's +1 day item and v3.c02.l04's +1 week
  item. **review_of:** v3.c02.l05, v2.c04.l02 (the three persons), v2.c01.l04 (मिलामः), v3.c02.l01 (-अन्ति),
  v3.c02.l04 (स्तः).
- **The one grammar point:** the present in all nine cells, person × number, one ending
  set (T6, P).
- **Forms taught (Whitney §735):**

| पुरुषः | एकवचनम् | द्विवचनम् | बहुवचनम् |
|---|---|---|---|
| उत्तमः (I / we) | गच्छामि gacchāmi | गच्छावः gacchāvaḥ | गच्छामः gacchāmaḥ |
| मध्यमः (you) | गच्छसि gacchasi | गच्छथः gacchathaḥ | गच्छथ gacchatha |
| प्रथमः (he / they) | गच्छति gacchati | गच्छतः gacchataḥ | गच्छन्ति gacchanti |
| pronouns | अहम् · त्वम् · सः/सा | आवाम् āvām · युवाम् yuvām · तौ tau / ते te | वयम् vayam · यूयम् yūyam · ते te / ताः tāḥ |

| अस् | एक. | द्वि. | बहु. | | कृ | एक. | द्वि. | बहु. |
|---|---|---|---|---|---|---|---|---|
| उत्तमः | अस्मि asmi | स्वः svaḥ | स्मः smaḥ | | उत्तमः | करोमि karomi | कुर्वः kurvaḥ | कुर्मः kurmaḥ |
| मध्यमः | असि asi | स्थः sthaḥ | स्थ stha | | मध्यमः | करोषि karoṣi | कुरुथः kuruthaḥ | कुरुथ kurutha |
| प्रथमः | अस्ति asti | स्तः staḥ | सन्ति santi | | प्रथमः | करोति karoti | कुरुतः kurutaḥ | कुर्वन्ति kurvanti |

  **Sūtra quoted:** 7.3.101 अतो दीर्घो यञि — the V2 "stretch": an -अ stem lengthens before
  an ending in य, व, म … (गच्छामि, गच्छावः, गच्छामः). **R4 (whole words, ◐):** शृण्वन्ति
  śṛṇvanti, जानन्ति jānanti, गृह्णन्ति gṛhṇanti, स्वपन्ति svapanti, ददति dadati (no न्!);
  मुञ्चन्ति and कृन्तन्ति are regular.
- **Sentence patterns:** PRON + VERB in every cell; two singular doers joined by च → dual
  verb; a group → plural.
- **Model sentences:**
  1. वयम् संस्कृतम् पठामः। (vayam saṃskṛtam paṭhāmaḥ.) "We study Sanskrit."
  2. यूयम् कुत्र गच्छथ? — वयम् गृहम् गच्छामः। (yūyam kutra gacchatha? — vayam gṛham gacchāmaḥ.) "Where are you all going? — We are going home."
  3. आवाम् मित्रे स्वः। (āvām mitre svaḥ.) "We two are friends." (मित्रम् n., dual)
  4. बालकाः क्रीडन्ति, बालिके नृत्यतः। (bālakāḥ krīḍanti, bālike nṛtyataḥ.) "The boys play; the two girls dance."
  5. ते किम् कुर्वन्ति? (te kim kurvanti?) "What are they doing?"
  6. पुनः मिलामः। (punaḥ milāmaḥ.) "We meet again." (owned since v2.c01.l04; now a 1pl)
- **New headwords (7; 411 → 418):** धावति dhāvati "runs" (the 1.x lion verb, restored) ·
  क्रीडति krīḍati "plays" · रक्षति rakṣati "protects" · स्मरति smarati "remembers" ·
  चिन्तयति cintayati "thinks" (-अय-; Hit अचिन्तयत्) · भ्रमति bhramati "wanders" · नृत्यति
  nṛtyati "dances" (class 4; stem नृत्य- given).
- **Previewed:** the full personal pronoun tables (c05.l01); the subject pronoun may drop,
  because the ending carries person and number (as in v2.c04). **Deferred:** stem
  formation and the classes as a system (v4.c03).
- **Payoff:** मिलामः, the farewell owned since v2.c01, is "we meet"; स्तः and सन्ति close
  the "two doers / many doers" deferrals; the V2 stretch has a rule.
- **Main risk:** -थः/-थ and -तः/-ति confusions; dual production. The person wheel of
  v2.c04.l02 gets three rings. **Production:** singular and plural in all persons, and
  the 3rd-person dual, ✓; 1st- and 2nd-person duals ◐ (all nine cells are shown and
  parsed). §12 warning for c05.l02: स्वः "we two are" vs स्वः "own".
- **Serial:** "वयम् तण्डुलान् खादामः" इति कपोताः वदन्ति। "यूयम् कुत्र गच्छथ?" इति नृपः पृच्छति।
  ("…" इति: a labelled pattern from here, §1.2; named as the speech frame in c06.l02)
- **S0 → next:** +1 day: the person wheel (गच्छ); +1 week (c03.l03): अस् and कृ in nine cells.

#### v3.c03.l02 — मह्यम् रोचते · "The Second Family of Endings"

- **lesson_type:** grammar. **review_of:** v3.c03.l01, v2.c05.l03 (रोचते), v1.c06.l04
  (सत्यमेव जयते), v2.c01.l04 (क्षमस्व).
- **The one grammar point:** the ātmanepada present: a second ending set, fixed for each
  verb as the dictionary gives it (Apte: P., A., U.) (T6, Ā).
- **Forms taught (Whitney §735, middle):**

| पुरुषः | एक. | द्वि. | बहु. |
|---|---|---|---|
| उत्तमः | लभे labhe | लभावहे labhāvahe | लभामहे labhāmahe |
| मध्यमः | लभसे labhase | लभेथे labhethe | लभध्वे labhadhve |
| प्रथमः | लभते labhate | लभेते labhete | लभन्ते labhante |

  **R3 card — passive in -यते (recognition only):** the same endings on a stem in -य-:
  उच्यते ucyate "is said", दृश्यते dṛśyate "is seen", श्रूयते śrūyate "is heard"
  (Pañcatantra 4 introduces its frame with तद्यथानुश्रूयते "as it is handed down", verified
  in the e-text after Jha 4.1, a research-note number; learner text says "Pañcatantra 4,
  frame story"). Formation v4.c05. Not every -यते is R3: this lesson's मन्यते and जायते are middle verbs whose given stem ends in -य- (मन्य-, जाय-); the headword list, not the ending, decides.
- **Sentence patterns:** the same frames; मह्यम् X-ः रोचते / मह्यम् X-आः रोचन्ते.
- **Model sentences:**
  1. छात्रः पुस्तकम् लभते। (chātraḥ pustakam labhate.) "The student gets a book."
  2. अहम् संस्कृतम् भाषे। (aham saṃskṛtam bhāṣe.) "I speak Sanskrit."
  3. वृक्षाः वर्धन्ते। (vṛkṣāḥ vardhante.) "The trees grow."
  4. फलानि मह्यम् रोचन्ते। (phalāni mahyam rocante.) "I like fruits."
  5. त्वम् किम् मन्यसे? (tvam kim manyase?) "What do you think?"
  6. सत्यम् एव जयते। (satyam eva jayate.) "Truth alone prevails." (Muṇḍaka 3.1.6; owned)
- **New headwords (6; 418 → 424):** लभते labhate "gets, obtains" · भाषते bhāṣate "speaks"
  (and सम्भाषसे of c06.l02) · वर्धते vardhate "grows" · शोभते śobhate "shines, looks fine"
  · मन्यते manyate "thinks, considers" (class 4) · जायते jāyate "is born, arises".
- **Honesty line (FACT):** in classical prose "conquers, prevails" is usually जयति; the
  Muṇḍaka's जयते is the middle, which the grammarians prescribe only after वि and परा
  (1.3.19 विपराभ्यां जेः, Teacher Notes). Both are Sanskrit; the motto keeps the
  Upaniṣad's form [REF:mundaka 3.1.6]; [REF:apte1890 s.v. जि].
- **Previewed:** क्षमस्व is this family's request form (c03.l04); some verbs take both
  families (करोति/कुरुते) — one line, v4.c03 (where the 1.x कृ error, IR-020, is fixed).
  **Deferred:** the passive as a system (v4.c05).
- **Payoff:** रोचते is not irregular, it is a middle verb, which is why "the fruit pleases
  me" was the honest gloss; सत्यमेव जयते's verb.
- **Main risk:** converting verbs between families (*लभति in §12); the -ए look-alikes
  (लभते 3sg, वने loc., फले du.); reading the class-4 middles मन्यते, जायते as R3 passives.
- **Serial:** कपोताः तण्डुलान् न लभन्ते। "अत्र अन्नम् दृश्यते" (R3, labelled) इति एकः कपोतः वदति।
- **S0 → next:** +1 day: P/Ā sort of 12 verbs by Apte's label; +1 week (c03.l04): the Ā
  table from memory.

#### v3.c03.l03 — आसीत् · "There Was: the Story Tense"

- **lesson_type:** grammar. **review_of:** v3.c03.l02, v3.c03.l01, v2.c06.l01 (आसीत्
  display), v2.c03.l03 (ह्यः), v2.c05.l02 (आगच्छति, अवगच्छति).
- **The one grammar point:** the imperfect (लङ्): the augment अ- + the stem + the
  secondary endings (T7). In a prefixed verb the augment stands after the prefix.
- **Forms taught (Whitney §742):**

| पुरुषः | एक. | द्वि. | बहु. |
|---|---|---|---|
| उत्तमः | अगच्छम् agaccham | अगच्छाव agacchāva | अगच्छाम agacchāma |
| मध्यमः | अगच्छः agacchaḥ | अगच्छतम् agacchatam | अगच्छत agacchata |
| प्रथमः | अगच्छत् agacchat | अगच्छताम् agacchatām | अगच्छन् agacchan |
| अस् (Whitney §636) | आसम् āsam · आसीः āsīḥ · आसीत् āsīt | आस्व āsva · आस्तम् āstam · आस्ताम् āstām | आस्म āsma · आस्त āsta · आसन् āsan |
| कृ (Whitney §714) | अकरवम् akaravam · अकरोः akaroḥ · अकरोत् akarot | अकुर्व akurva · अकुरुतम् akurutam · अकुरुताम् akurutām | अकुर्म akurma · अकुरुत akuruta · अकुर्वन् akurvan |
| Ā (लभ्) | अलभे alabhe · अलभथाः alabhathāḥ · अलभत alabhata | अलभावहि alabhāvahi · अलभेथाम् alabhethām · अलभेताम् alabhetām | अलभामहि alabhāmahi · अलभध्वम् alabhadhvam · अलभन्त alabhanta |

  **Production:** P: singular and plural in all persons, and the 3rd-person dual, ✓;
  1st- and 2nd-person duals ◐; अस् आसीत्, आसन्, आसम् ✓; कृ अकरोत्, अकुर्वन् ✓; Ā अलभत ✓,
  the rest of the Ā table displayed (◐); the rest ◐. **Augment placement:** आ + अगच्छत् → आगच्छत्; अव +
  अगच्छत् → अवागच्छत्; प्र + अविशत् → प्राविशत्; उप + अविशत् → उपाविशत्; निर् + अगच्छत् →
  निरगच्छत्; नि + अवसत् → न्यवसत् (the vowel joins shown as facts; their names are
  c04.l01's). Vowel-initial stems take the vṛddhi augment, as whole words: इच्छति → ऐच्छत्
  aicchat (6.4.72 Teacher Notes). **R4 (whole words, ◐):** अशृणोत् aśṛṇot, अजानात् ajānāt,
  अगृह्णात् agṛhṇāt, अददात् adadāt (3pl अददुः adaduḥ), अस्वपत् asvapat (printed; अस्वपीत्
  named once as the other form; the c03 fact base confirms both against Whitney §631
  before drafting, decision 12), अब्रुवन् abruvan (3pl of अब्रवीत्). **Chunks (rule 8):**
  अब्रवीत् "said" (√ब्रू), उवाच "said" (perfect of √वच्), आह "says, said" (a perfect form
  used as present and past; system v4.c03). (The storyteller's present + स्म and 3.2.118
  are c06.l03's: G4.) **One honest line:** the 1.x course's गच्छ "future" is real Sanskrit
  (गमिष्यति) and waits for Volume 4.
- **Sentence patterns:** ह्यः / पुरा / एकदा / अथ + imperfect; X-ः उवाच / अब्रवीत् — "…"।
- **Model sentences:**
  1. एकः काकः आसीत्। सः जलम् ऐच्छत्। (ekaḥ kākaḥ āsīt. saḥ jalam aicchat.) "There was a crow. He wanted water."
  2. ह्यः अहम् ग्रामम् अगच्छम्। (hyaḥ aham grāmam agaccham.) "Yesterday I went to the village."
  3. मूषकः आगच्छत्। सः जालम् अकृन्तत्। (mūṣakaḥ āgacchat. saḥ jālam akṛntat.) "The mouse came. He cut the net."
  4. ते बालकाः गृहे आसन्। (te bālakāḥ gṛhe āsan.) "Those boys were at home."
  5. नृपः उवाच — "मम सेवकः कुत्र अस्ति?" (nṛpaḥ uvāca — "mama sevakaḥ kutra asti?") "The king said: 'Where is my servant?'"
  6. पुरा एकः ऋषिः वने अवसत्। (purā ekaḥ ṛṣiḥ vane avasat.) "Long ago a sage lived in the forest." (अवसत्: the imperfect of the owned वसामि; पुरा with the imperfect)
- **New headwords (8; 424 → 432):** प्रविशति praviśati "enters" · उपविशति upaviśati "sits
  down" · निर्गच्छति nirgacchati "goes out" · अब्रवीत् abravīt "(he) said" (chunk) · उवाच
  uvāca "(he) said" (chunk) · आह āha "(he) says / said" (chunk) · पुरा purā "long ago" · अथ
  atha "then, now (opening a scene)" (T5 अथान्यतमे दिवसे). Upgrade: ऋषिः.
- **Previewed:** कश्चित् "a certain" replaces एकः in c05.l02 (the later language uses एक
  almost as "a, a certain": Whitney §482c, citing the Hitopadeśa — e-text: एको वृद्धो
  व्याघ्रः). **Deferred:** the perfect, aorist and futures as systems
  (v4.c03); the storyteller's present + स्म (c06.l03).
- **Payoff:** आसीत्, displayed since v2.c06.l01 ("the past tense waits"); ह्यः has a verb to
  go with it; the Volume 2 stories can be told as stories are told.
- **Main risk:** the augment before a prefix (*अप्रविशत्); अगच्छत (2pl) vs अगच्छत् (3sg) —
  a virāma decides; Ā अलभत vs P अगच्छत. Dictation pairs; the augment drill uses only the
  six prefixed verbs the learner owns.
- **Serial:** व्याधः तत्र आगच्छत्। सः तण्डुलान् जालम् च अक्षिपत्। कपोताः तण्डुलान् अपश्यन्, जाले च अपतन्। नृपः उवाच — …
- **S0 → next:** +1 day: the augment-placement drill; +1 week (c03.l05): the crow story in
  the imperfect.

#### v3.c03.l04 — वदतु, वदेत् · "Requests and Advice"

- **lesson_type:** conversation. **review_of:** v3.c03.l03, v2.c05.l02 (वदतु, अस्तु),
  v2.c05.l04 (ददातु), v2.c06.l02 (मुञ्च), v1.c05.l05 (पश्य), v2.c01.l04 (क्षमस्व),
  v1.c06.l04 (सर्वे भवन्तु).
- **The one grammar point:** the imperative (लोट्) for commands, requests and blessings,
  built on the secondary set (a Δ card on T7; in the Ā, the 3sg, 3pl, 2sg and the 1st persons are a Δ on T6 Ā instead, below). The optative (विधिलिङ्) for "should, may,
  would" rides with it as a **card**, also a Δ card on T7: its 3rd person ("one should")
  is productive, the rest is recognition.
- **Forms taught (Whitney §§738–739):**

| पुरुषः | लोट् एक. | द्वि. | बहु. | लिङ् एक. | द्वि. | बहु. |
|---|---|---|---|---|---|---|
| उत्तमः | गच्छानि gacchāni | गच्छाव gacchāva | गच्छाम gacchāma | गच्छेयम् gaccheyam | गच्छेव gaccheva | गच्छेम gacchema |
| मध्यमः | गच्छ gaccha | गच्छतम् gacchatam | गच्छत gacchata | गच्छेः gaccheḥ | गच्छेतम् gacchetam | गच्छेत gaccheta |
| प्रथमः | गच्छतु gacchatu | गच्छताम् gacchatām | गच्छन्तु gacchantu | गच्छेत् gacchet | गच्छेताम् gacchetām | गच्छेयुः gaccheyuḥ |
| Ā (लभ्) | लभै labhai · लभस्व labhasva · लभताम् labhatām | लभावहै · लभेथाम् · लभेताम् | लभामहै · लभध्वम् · लभन्ताम् labhantām | लभेय labheya · लभेथाः · लभेत labheta | लभेवहि · लभेयाथाम् · लभेयाताम् | लभेमहि · लभेध्वम् · लभेरन् labheran |
| अस् | असानि asāni · एधि edhi · अस्तु astu | असाव · स्तम् · स्ताम् | असाम · स्त · सन्तु santu | स्याम् syām · स्याः · स्यात् syāt | स्याव · स्यातम् · स्याताम् | स्याम · स्यात · स्युः syuḥ |
| कृ | करवाणि karavāṇi · कुरु kuru · करोतु karotu | करवाव · कुरुतम् · कुरुताम् | करवाम · कुरुत · कुर्वन्तु kurvantu | कुर्याम् kuryām · कुर्याः · कुर्यात् kuryāt | कुर्याव · कुर्यातम् · कुर्याताम् | कुर्याम · कुर्यात · कुर्युः kuryuḥ |

  **How they are built (sūtras quoted):** 3.4.85 लोटो लङ्वत् "the imperative is like the
  imperfect" (in the P, the secondary set without the augment; the Ā differs, below); 3.4.86 एरुः "its -इ becomes -उ"
  (-ति → -तु, -न्ति → -न्तु). The Ā imperative is not the imperfect's set minus the augment: its 3sg, 3pl and 2sg are made from the present (T6 Ā), -ते → -ताम्, -न्ते → -न्ताम्, -से → -स्व (लभते → लभताम्, लभन्ते → लभन्ताम्, लभसे → लभस्व; क्षमस्व likewise), and its 1st persons turn the present's -ए into -ऐ (लभै, लभावहै, लभामहै); only the 2du, 3du and 2pl look like the imperfect without its अ- (लभेथाम्, लभेताम्, लभध्वम्). Teacher Notes: 3.4.87 सेर्ह्यपिच्च (-सि → -हि) and 6.4.105 अतो
  हेः (-हि drops after -अ: गच्छ); 3.4.89 मेर्निः and 3.4.92 आडुत्तमस्य पिच्च (गच्छानि); 3.4.90 आमेतः, 3.4.91 सवाभ्यां वामौ, 3.4.93 एत ऐ (the Ā -ताम्, -न्ताम्, -स्व, -ध्वम्, -ऐ, -वहै, -महै); 7.2.80 अतो येयः (the optative's -ए-). **Production:** P
  loṭ: singular and plural in all persons, and the 3rd-person dual, ✓; 1st- and
  2nd-person duals ◐; Ā लभस्व, लभताम् ✓ (क्षमस्व is this cell); अस्तु, सन्तु ✓; कुरु,
  करोतु, कुर्वन्तु ✓. **The optative card:** P liṅ: 3rd person ✓ (गच्छेत्, गच्छेताम्,
  गच्छेयुः; the "one should" use); स्यात्, स्युः, कुर्यात्, लभेत ✓; the rest of liṅ ◐.
  Everything else ◐. **R4 (whole words):** शृणु śṛṇu, जानीहि jānīhi, गृहाण
  gṛhāṇa, देहि dehi "give!", and the owned ददातु. **Prohibition:** मा + imperative (मा गच्छ
  "don't go") — the ordinary prohibitive of the epics and later prose (Whitney §579c, which
  cites the Hitopadeśa; c06.l02 reads मा मैवं कुरु), beside the older मा + augmentless aorist
  (one honest line; v4.c03); and न + optative "one should not" (§580: very common later).
  **Not a pattern:** मा + optative is very rare (Whitney §579b); the benediction's मा
  कश्चिद्दुःखभाग्भवेत् is read as that verse's construction, never built.
- **Sentence patterns:** भवान् + 3sg imperative (owned, v2.c05); त्वम् + 2sg; X-ः सदा
  …-एत् (general advice); न … -एत् (advice against); मा + 2sg imperative.
- **Model sentences:**
  1. भवान् पुनः वदतु। (bhavān punaḥ vadatu.) "Please say it again." (owned)
  2. शीघ्रम् आगच्छ! (śīghram āgaccha!) "Come quickly!"
  3. मा गच्छ! अत्र तिष्ठ। (mā gaccha! atra tiṣṭha.) "Don't go! Stay here."
  4. छात्रः सदा सत्यम् वदेत्; सः असत्यम् न वदेत्। (chātraḥ sadā satyam vadet; saḥ asatyam na vadet.) "A student should always speak the truth; he should not speak untruth." (असत्यम्: अ + सत्यम्, display)
  5. भवान् फलम् भक्षयतु। (bhavān phalam bhakṣayatu.) "Please eat the fruit, sir." (the c06.l03 monkey's line, in course words)
  6. सर्वे भवन्तु सुखिनः। (sarve bhavantu sukhinaḥ.) "May all be happy." (owned; भवन्तु = 3pl imperative; सुखिनः R1)
- **New headwords (7; 432 → 439):** मा mā "do not" (prohibitive) · शीघ्रम् śīghram
  "quickly" · सदा sadā "always" · जीवति jīvati "lives" (सुखम् जीव!) · दुःखम् duḥkham n. a
  "sorrow, pain" · भक्षयति bhakṣayati "eats" (-अय-; Panc 4 भक्षयतु) · प्रयच्छति prayacchati
  "gives, offers" (stem प्रयच्छ- given; T5 प्रयच्छति).
- **Payoff:** every request chunk of Volume 2 finds its cell — वदतु, ददातु, अस्तु, मुञ्च,
  पश्य, क्षमस्व (Ā 2sg); सर्वे भवन्तु सुखिनः is a sentence the learner could have built.
- **Main risk:** the optative read as a past (गच्छेत् vs अगच्छत्). Fix: "the अ- in front is
  the past; the -े- inside is the wish"; a sorting quiz. Second risk: the Ā table's size —
  only the listed cells are drilled.
- **Serial:** नृपः अवदत् — "अत्र वने तण्डुलाः कुतः? मा गच्छत!" कपोताः तस्य वचनम् न अशृण्वन्। (2pl prohibition; अशृण्वन् R4, labelled) — after Hitopadeśa 1, where the dove-king asks how rice grains can be in an empty forest (prose after Hit 1.4).
- **S0 → next:** +1 day: "rules for a good student" in the optative; +1 week (c04.l01):
  the request role-play.

#### v3.c03.l05 — क्रियापरीक्षा · "The Verb Exam"

- **lesson_type:** review. **review_of:** v3.c03.l01–l04, v3.c02.l05.
- **Assembly (§15):** the present-system table on one page: T6 and T7, P and Ā, the four
  lakāras for गच्छ/लभ, plus अस् and कृ, with the names लट्, लङ्, लोट्, विधिलिङ् and the
  honest line that the tradition counts ten lakāras, six of them Volume 4's. Paradigm
  ledger: T6, T7 ✓ (listed cells); R3, R4 ◐.
- **Thread overlay (c03):** सिध्यन्ति, प्रविशन्ति; जयते; भवन्तु, सन्तु, पश्यन्तु, भवेत्, मा
  (labelled).
- **Exam:** chapter header shape. Ledger stays 439.
- **S0 → next:** +1 day (c04.l01): five verbs in the four lakāras (3sg); +1 week (c04.l02):
  the tense switch, reversed.

---

### 4.4 Chapter 4 — सन्धिः · Sandhi in Use

**Goals.** Split any joined text back into words; join words as fluent Sanskrit joins
them; read and write joined text. **Splitting comes before joining in every lesson**,
because the learner's real task is reading print.

**Grammar inventory (exact).** Vowel sandhi: 6.1.101, 6.1.87, 6.1.88, 6.1.77, 6.1.78
(with word-final ए + vowel other than अ → अ + hiatus and word-final ऐ → आ + hiatus, Whitney §133; a word-final ओ outside -अः is rare and varies, §134, and is not drilled), 6.1.109,
pragṛhya duals 1.1.11 (Whitney §§126–138). Visarga sandhi (Whitney §§170–179): before
surds (ः, श्, ष्, स्), before sibilants (ः or doubling), -अः → -ओ before voiced and before
अ (with ऽ), -अः → -अ before other vowels, -आः → -आ before voiced sounds, other vowels + ḥ →
र्, र् + र्, the r-finals after अ (पुनः, प्रातः, अन्तः; बहिः is bahis, an s-final whose seams after इ are the same), सः/एषः (6.1.132), भोः (8.3.17 + 8.3.22,
Teacher Notes). Consonant sandhi at word edges: final म् → anusvāra (8.3.23), homorganic
nasal optional; final stops voiced before voiced sounds (8.2.39); stop before nasal → its
nasal; त् + palatal (8.4.40); त् + ल; त् + श → च्छ; त् + ह → usually द्ध (द्ह also allowed, Whitney §163); final न्/ङ् doubled after a
short vowel before a vowel (Whitney §210); न् + च/छ/ट/ठ/त/थ → ंश्/ंष्/ंस् (Whitney §208).
The reverse procedure (पदच्छेदः) and saṃhitā/pada (1.4.109–110). Internal sandhi observed
and named only: ṇatva, ṣatva, guṇa inside गुरवे, and भवति = भो + अति (IR-021).

**Deferral-tracker row redeemed:** 5. **1.x assets carried:** vowel sandhi worked examples
(pp.37–43) with 6.1.77 (IR-017); visarga sandhi (pp.71–73). **Promises kept:** नास्ति,
तथास्तु, स्वागतम्, नमस्ते, कोऽपि, परमो धर्मः, पुनर्मिलामः, पुनरपि, अनुगृहीतोऽस्मि, ईकारश्च,
कालश्च, भो राम, जगच्च, षड्, सर्वं कुशलम्, सत्यमेव, avagraha, nasal assimilation,
repha/visarga.

**Printing inside the chapter.** l01–l03: examples printed pause → joined; a running text
is joined only at the seams already taught, labelled "joined so far". From **l04** on
every taught text is joined, with its pause form beneath (§1.4). §9–§11 carry the
connected-speech rule: a seam is spoken without a pause; a space in joined print is a word
boundary, not a breath.

**Serial, episode 4.** The whole serial so far, re-read joined, the learner splitting each
seam and naming its lesson.

**Exam shape (l05, one 45-minute sitting).** A split 16 joined phrases, each with its rule
name (10 min). B join 16 seams of mixed types (8 min). C read aloud the Volume 2 crow story
joined (the c06.l01 text, first seen here as the learner's own product) at natural pace (7
min). D dictation in joined form, then the pause form (8 min). E explain in three lines
each: नमस्ते, विद्यालयः, परोपकारः, न कोऽपि लघुः (10 min).

#### v3.c04.l01 — स्वरसन्धिः · "When Vowels Meet"

- **lesson_type:** grammar. **Station 0:** v3.c03.l05's +1 day item and v3.c03.l04's +1 week
  item. **review_of:** v3.c03.l05, v2.c01.l04 (नास्ति), v1.c02.l04–l05 (ए ऐ ओ औ as a+i, a+u: "they drive the
  sandhi patterns you will meet in Volume 3"), v1.c05.l05 (avagraha), v3.c02.l03 (अग्नये).
- **The one grammar point:** what happens when a word-final vowel meets a word-initial
  vowel — read first by splitting, then produced by joining.
- **Forms taught (each with its name, its sūtra and owned examples; Whitney §§126–138):**

| Rule | Pattern | Examples (pause → joined) |
|---|---|---|
| सवर्णदीर्घः (6.1.101 अकः सवर्णे दीर्घः) | like vowels → one long | न अस्ति → नास्ति · विद्या-आलयः → विद्यालयः · हिम-आलयः → हिमालयः · तथा अस्तु → तथास्तु · तथा अपि → तथापि (तथा 'so', glossed here; its headword is c05.l03; तथापि 'even so', display) |
| गुणः (6.1.87 आद्गुणः) | अ/आ + इ/ई → ए; + उ/ऊ → ओ; + ऋ → अर् | न इति → नेति · वा इति → वेति · गण-ईशः → गणेशः · सूर्य-उदयः → सूर्योदयः · पर-उपकारः → परोपकारः · सिंहस्य उपरि → सिंहस्योपरि · महा-ऋषिः → महर्षिः (display: the महा- stem, c05.l04) |
| वृद्धिः (6.1.88 वृद्धिरेचि) | अ/आ + ए/ऐ → ऐ; + ओ/औ → औ | सदा एव → सदैव · मा एवम् → मैवम् (display: A6, c06.l02) · वसुधा एव → वसुधैव (display: c06.l04) · तत्र एकः → तत्रैकः |
| यण् (6.1.77 इको यणचि) | इ/उ/ऋ + unlike vowel → य्/व्/र् | इति अवदत् → इत्यवदत् · सु-आगतम् → स्वागतम् · उपरि आगच्छति → उपर्यागच्छति · अपि आह → अप्याह |
| अयादि (6.1.78 एचोऽयवायावः) | ए/ऐ/ओ/औ + vowel → अय्/आय्/अव्/आव्; at word end ए + a vowel other than अ → अ + hiatus, and ऐ → आ + hiatus (Whitney §133); a word-final ओ outside -अः (the u-stem vocative गुरो) varies (§134) and is not drilled | inside words: भो + अति → भवति · ने + अनम् → नयनम्; at word end: ते आगच्छन्ति → त आगच्छन्ति · ते इच्छन्ति → त इच्छन्ति |
| पूर्वरूपम् (6.1.109 एङः पदान्तादति) | word-final ए/ओ + अ → ए/ओ + ऽ | ते अपि → तेऽपि · वने अस्ति → वनेऽस्ति · घटे अल्पम् → घटेऽल्पम् |
| प्रगृह्यम् (1.1.11 ईदूदेद्द्विवचनं प्रगृह्यम्) | a dual in -ई -ऊ -ए never joins | द्वे बालिके अत्र · द्वे फले अपि (no join: these are duals; the vocative बालिके or the locative फले before अ would join, बालिकेऽत्र, फलेऽपि) |

  **IR-017 in the open:** इको यणचि is 6.1.77 (the 1.x book cited 1.1.45). **IR-021 in the
  open (FACT):** भवति, the course's first verb, is भो + अति by ayādi; the ओ is the guṇa
  *substitute* of the root's ऊ (Volume 4: v4.c02), not an "insertion". **The splitting
  heuristic (FACT):** a joined आ may hide अ+अ, अ+आ, आ+अ or आ+आ; a joined ए may hide अ+इ,
  अ+ई, आ+इ, आ+ई or a word in -ए. Meaning decides; the dictionary confirms.
- **Model sentences (pause → joined, vowel seams only):**
  1. अत्र जलम् न अस्ति। → अत्र जलम् नास्ति। "There is no water here." (the म् seams wait for l03)
  2. सूर्य-उदये बालकाः विद्यालयम् गच्छन्ति। → सूर्योदये बालकाः विद्यालयम् गच्छन्ति। "At sunrise the boys go to school." (सूर्योदये is one compound word, its members hyphenated in the pause form, §1.4; compounds c05.l04)
  3. मूषकः सिंहस्य उपरि चलति। → मूषकः सिंहस्योपरि चलति।
  4. सदा एव सत्यम् वदेत्। → सदैव सत्यम् वदेत्। "One should always speak the truth."
  5. सु-आगतम्! → स्वागतम्! "Well come!"
- **New headwords (6; 439 → 445):** आलयः ālayaḥ m. a "dwelling, abode" (out of विद्यालयः,
  हिमालयः; rule 10) · उदयः udayaḥ m. a "rising" · ईशः īśaḥ m. a "lord" · इव iva "like, as
  if" (enclitic) · एव eva "only, itself, indeed" (display through Volume 2; now headworded,
  because owned joined lines keep fusing it: सत्यमेव, बुद्धिरेव, सदैव) · वा vā "or"
  (enclitic; वेति of Hit 1.71). Upgrade: सूर्यः.
- **Previewed:** guṇa and vṛddhi inside words (गुरवे from गुरु + ए; the vṛddhi augment
  ऐच्छत्) are the same vowel grades: one line, the system v4.c02. **Deferred:** Vedic
  exceptions (v5.c03); optional exceptions (v4).
- **Payoff:** नास्ति (v2.c01.l04), तथास्तु (v2.c05.l02), स्वागतम् (v1.c05), विद्यालयः and
  हिमालयः (Volume 1), परोपकारः (v2.c06.l03), सिंहस्योपरि, भवति. Owned words turn out to be
  sandhi.
- **Main risk:** over-splitting every ए and ओ; joining across a daṇḍa or a speaker change
  (the Hitopadeśa keeps आह — अहम् apart across the dash).
- **Serial (joined so far):** कपोताः अपि तत्रागच्छन् … (the -आः + vowel seam is l02's:
  printed in pause form until then) — the episode re-read with only l01's vowel seams
  joined (e.g. तत्रैव wherever तत्र एव occurs).
- **S0 → next:** +1 day: split 10 vowel seams; +1 week (c04.l03): join 10.

#### v3.c04.l02 — नमस्ते · "The Visarga at the Seam"

- **lesson_type:** grammar. **review_of:** v3.c04.l01, v1.c01.l01 (नमस्ते), v1.c05.l02
  (नमः + ते), v2.c06.l02–l03 (कोऽपि, परमो धर्मः), v2.c01.l01 (भो राम), v2.c01.l04
  (पुनर्मिलामः, अनुगृहीतोऽस्मि), v1.c02.l01 (ईकारश्च).
- **The one grammar point:** a final visarga is a final स् (or र्) at heart, and its shape
  at a seam depends on what precedes it and what follows (8.3.34 विसर्जनीयस्य सः; the pause
  form 8.3.15 in Teacher Notes).
- **Forms taught (Whitney §§170–179; the decision path: what vowel precedes? what follows?
  is it सः/एषः?):**

| Before | -अः | -आः | other vowel + ḥ (-इः -उः -एः -ऐः -ओः) | r-finals after अ (पुनः, प्रातः, अन्तः) |
|---|---|---|---|---|
| क ख प फ, or pause | ः stays — रामः करोति · पुनः पुनः | ः stays | ः stays | ः stays |
| च छ | श् — रामश्च · कालश्च · ईकारश्च | -आश्च — दन्ताश्च | -इश्च — हरिश्च | -श्च |
| ट ठ | ष् — named once, not drilled (Whitney §170c) | -आष्- | -इष्- | -ष्- |
| त थ | स् — नमस्ते · कस्त्वम् · मूषकस्तस्य | -आस्त- | -इस्त- — हरिस्तत्र | -स्त- |
| श ष स | ः, or the sibilant doubled (नमः शिवाय / नमश्शिवाय) | same | same | same |
| voiced consonant | ओ — परमो धर्मः · सिंहो हसति · क्रुद्धो भवति | आ — छात्रा गच्छन्ति | र् — गुरुर्वदति · बुद्धिर्बलात् · बहिर्गच्छति | र् — पुनर्मिलामः |
| अ | ओऽ — कोऽपि · सोऽपि · अनुगृहीतोऽस्मि | आ + hiatus — देवा अत्र | र् — हरिरत्र · गुरुरपि | र् — पुनरपि · प्रातरपि |
| other vowels | अ + hiatus — राम आगच्छति · मूषक आगच्छति | आ + hiatus | र् — बुद्धिरेव | र् — प्रातरेव |
| र | ओ, as before any voiced consonant — रामो रक्षति | आ, as before any voiced consonant — देवा रक्षन्ति | र् drops, a short vowel lengthens — गुरुः रक्षति → गुरू रक्षति (Whitney §179) | the same — पुनः रक्षति → पुना रक्षति |

  **Special words (sūtra quoted):** 6.1.132 एतत्तदोः सुलोपोऽकोरनञ्समासे हलि — सः and एषः drop
  their ः before any consonant (स गच्छति, एष बालकः; Whitney §176), the सः/एषः seam Volume 2
  taught without a name; before a vowel they behave like -अः (सोऽपि, स एकम्). भोः + voiced
  → भो (भो राम; 8.3.17 with 8.3.22 हलि सर्वेषाम् in Teacher Notes). **Production (◐ elsewhere):** every -अः row ✓ except ट ठ (named, not drilled);
  -इः/-उः → र् ✓; सः/एषः ✓; the r-finals in पुनः, प्रातः, अन्तः ✓ (बहिः ✓ by the -इः column); -आः rows and the र +
  र row ◐.
- **Model sentences (pause → joined):**
  1. नमः ते। → नमस्ते। "Homage to you." (**नमस्ते thread, step 2**)
  2. कः त्वम्? → कस्त्वम्? "Who are you?" (Hitopadeśa 1's mouse asks it)
  3. न कः अपि लघुः। → न कोऽपि लघुः।
  4. अहिंसा परमः धर्मः। → अहिंसा परमो धर्मः।
  5. पुनः मिलामः। → पुनर्मिलामः।
  6. रामः च सीता च। → रामश्च सीता च।
- **New headwords (6; 445 → 451):** प्रातः prātaḥ "in the morning" (r-final: प्रातरेव) ·
  बहिः bahiḥ "outside" (bahis, an s-final: after इ its seams match the r-finals', बहिर्गच्छति) · अन्तः antaḥ "inside" (r-final; §12: not अन्तः "end", the
  nominative of the owned अन्त) · उच्चैः uccaiḥ "loudly, high" · शनैः śanaiḥ "slowly" (शनैः
  शनैः; Saturn's name शनैश्चरः "slow-goer" stands under शनैः in Apte, and MW s.v. śani calls शनि "prob. 'slow-moving'", while Apte s.v. शनिः derives it from √शो: the link to शनिवासरः is offered as "probably related", never assessed) · तु tu "but, however" (enclitic;
  the classic -ः + त seam: रामस्तु).
- **Honesty note (SYMBOL):** "the divine in me bows to the divine in you" is a
  modern interpretation of नमस्ते. The words say नमः "homage, a bow" + ते "to you". The
  interpretation may be meaningful to people who use it; it is not the grammar, and the
  course says so in a SYMBOL callout, never assessed.
- **Payoff:** नमस्ते, the course's first word (v1.c01.l01), whose seam was "noticed, taught
  there" (v1.c05.l02), is नमः + ते joined by the rule that turns ḥ into स् before त्. Every
  visarga seam previewed in Volumes 1–2 is now produced, not just noticed. And मनोरथः is
  मनस् + रथः, "the mind's chariot" (the inner seam, as V2 noted). One line keeps v1.c03.l04 honest: मनः is the pause form of मनस्, as नमः is of नमस्; the declension of such s-stems is v4.c05.
- **Main risk:** the table's size. Taught by "what precedes" columns, -अः first (most
  frequent); a one-page "visarga wheel" asset.
- **S0 → next:** +1 day: the visarga wheel, -अः column; +1 week (c04.l04): the -इः/-उः
  column.

#### v3.c04.l03 — जगच्च · "When Consonants Meet"

- **lesson_type:** grammar. **review_of:** v3.c04.l02, v2.c02.l04 (जगच्च), v2.c03.l01–l02
  (षड्), v2.c01.l02 (सर्वं कुशलम्), v1.c06.l04 (सत्यमेव, दुःखभाग्), v1.c06.l01 (ङ ञ
  homorganic).
- **The one grammar point:** a word-final consonant takes on the voicing, and sometimes the
  place, of what follows; a final म् becomes the anusvāra before a consonant.
- **Forms taught (Whitney §§159, 161–163, 202–210, 213):**

| Rule | Examples (pause → joined) |
|---|---|
| final म् before a consonant → ं (8.3.23 मोऽनुस्वारः); before a vowel it stays and joins | सत्यम् वद → सत्यं वद · सर्वम् कुशलम् → सर्वं कुशलम् · सत्यम् एव → सत्यमेव · जलम् अस्ति → जलमस्ति |
| the anusvāra may be written as the homorganic nasal (optional) | किम् करोति → किं करोति / किङ्करोति |
| final क् ट् त् प् → voiced before a voiced sound (8.2.39 झलां जशोऽन्ते) | षट् अत्र → षडत्र · जगत्-ईशः → जगदीशः · तत् अपि → तदपि · दिक् देशात् → दिग्देशात् · कश्चित् दुःखभाक् → कश्चिद्दुःखभाक् · दुःखभाक् भवेत् → दुःखभाग्भवेत् · ग्रामात् गच्छति → ग्रामाद्गच्छति |
| final stop before a nasal → its nasal (usual) | जगत्-नाथः → जगन्नाथः · षट्-मुखः → षण्मुखः · तत् मे → तन्मे — मे "my, to me": display, the enclitic of c05.l01 · तत् न → तन्न |
| त् + च/छ → च्च/च्छ; + ज → ज्ज (8.4.40 स्तोः श्चुना श्चुः) | जगत् च → जगच्च · तत् च → तच्च · सत्-जनः → सज्जनः |
| त् + ल → ल्ल | तत् लभते → तल्लभते |
| त् + श → च्छ (Whitney §203) | बलात् श्रेष्ठा → बलाच्छ्रेष्ठा |
| त् + ह → usually द्ध; द्ह is also allowed (8.4.62, Whitney §163) | तत् हितम् → तद्धितम् |
| final न् (ङ्) after a short vowel doubles before a vowel (Whitney §210) | तस्मिन् एव → तस्मिन्नेव · अस्मिन् एव काले → अस्मिन्नेव काले — Hit 1, prose after 1.4; अस्मिन् asmin "in this" glossed (the locative of इदम्, taught c05.l02) |
| न् + च/छ, ट/ठ, त/थ → ंश्, ंष्, ंस् (Whitney §208) | तान् च → तांश्च · वृक्षान् च → वृक्षांश्च · कस्मिन् चित् → कस्मिंश्चित् — preview: the locative of कश्चित् "someone, a certain", c05.l02 |

  **Production:** म् → ं ✓; voicing ✓; त् + च ✓; न् doubling ✓; nasal assimilation,
  त् + श, न् + च/त ◐.
- **Model sentences (pause → joined):**
  1. सत्यम् वद। धर्मम् चर। → सत्यं वद। धर्मं चर। (चर display)
  2. जलम् उपरि आगच्छति। → जलमुपर्यागच्छति।
  3. परिवारः जगत् च। → परिवारो जगच्च। (v2.c02's chapter title, joined)
  4. सत्यम् एव जयते। → सत्यमेव जयते।
  5. बुद्धिः बलात् श्रेष्ठा। → बुद्धिर्बलाच्छ्रेष्ठा। (the 1.x moral, joined)
- **New headwords (4; 451 → 455):** दिक् dik f. (stem दिश् diś) "direction, quarter"
  (rule 14; its faces दिग्-, दिक्-; consonant-stem declension v4.c05) · सम्यक् samyak
  "properly, rightly" · नाथः nāthaḥ m. a "protector, lord" (जगन्नाथः; T5 नाथ!) · धीमान्
  dhīmān adj. "wise" (the -मत् stem धीमत्; nominative only, headworded whole; its R6 card comes in c05.l01; rule 14: counted by its m. nominative; Hit 1.1 धीमताम्).
- **Payoff:** जगच्च, षड्, सर्वं कुशलम्, सत्यमेव, दुःखभाग्, कश्चिद् — all owned, all
  explained; the homorganic nasal of गङ्गा and पञ्च (v1.c06.l01) is the same habit across a
  word boundary.
- **Main risk:** double application (*सत्यंएव). The rule "anusvāra only before a
  consonant" is drilled with a vowel/consonant sort.
- **S0 → next:** +1 day: the vowel/consonant sort; +1 week (c04.l05): the six owned
  consonant seams.

#### v3.c04.l04 — पदच्छेदः · "Un-joining: Saṃhitā and Pada"

- **lesson_type:** reading. **review_of:** v3.c04.l01–l03, v2.c06.l03 (the three sayings),
  v1.c06.l04 (the śloka lesson).
- **The one grammar point:** the reverse procedure, from joined text back to words: scan
  left to right; at each fused sound list every pause-form pair that could have produced
  it; choose the one that gives real words in a grammatical sentence.
- **Content:** the ambiguity table (आ ← a+a, a+ā, ā+a, ā+ā; ए ← a+i, a+ī, ā+i, ā+ī, or a
  word in -ए; ओ ← -अः before a voiced consonant, or -अः before अ (written ओऽ: restore the अ), or a+u, a+ū, ā+u, ā+ū, or a word in -ओ; -आ before a vowel ← -आः; र् ←
  -इः/-उः, an r-final, or a real र्); the saṃhitā text over its padapāṭha (TRADITION: the
  Vedic word-by-word recitation; the Ṛgveda's padapāṭha is ascribed by the tradition to
  Śākalya, cited from a padapāṭha source key the c04 fact base adds (decision 4) — the
  course's pause form is the same idea); **sūtras quoted:**
  1.4.109 परः सन्निकर्षः संहिता ("the closest contact is saṃhitā"), 1.4.110 विरामोऽवसानम्
  ("a stop is the pause"). Internal sandhi named and parked: ṇ in रामेण; ṣ in रामेषु, नदीषु
  (s → ṣ after a vowel other than a/ā, or after k, r); guṇa in गुरवे — rules v4.c02.
  **The s → ṣ law is *named* here** (observed in v3.c02.l01: रामेषु vs बालिकासु; the ष of
  करोषि, v3.c03.l01, is the same law): this lesson gives it its name and its shape only;
  the rule itself is v4.c02's, so v2.c04's line that the reason for the ष of करोषि /
  शृणोषि "waits for Volume 4" stays true. **The printing convention (§1.4)** is taught here, with "editions vary": GRETIL's महान्
  जम्बूपादपः and पात्रत्वात् धनम् shown beside their full joins.
- **Practice texts (all owned):** अहिंसा परमो धर्मः; सत्यमेव जयते; न कोऽपि लघुः; सर्वे भवन्तु
  सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥ (V1's
  benediction, un-joined by the learner); the serial so far, joined.
- **From this lesson on,** every taught text in Volume 3 is printed joined with its pause
  form beneath.
- **Model sentences (joined → pause):**
  1. स जलं पिबति। → सः जलम् पिबति।
  2. घटेऽल्पं जलमस्ति। → घटे अल्पम् जलम् अस्ति।
  3. कपोता जाले पतन्ति। → कपोताः जाले पतन्ति।
  4. मूषकस्तस्योपरि धावति। → मूषकः तस्य उपरि धावति।
- **New headwords (5; 455 → 460):** पदम् padam n. a "word (an inflected word); step" ·
  वाक्यम् vākyam n. a "sentence" · सन्धिः sandhiḥ m. i "joining" · अवसानम् avasānam n. a
  "pause, end" (1.4.110) · संहिता saṃhitā f. ā "joined text" (1.4.109).
- **Payoff:** every joined line of Volumes 1–2 (the mottos, the sayings, the benediction)
  can now be taken apart by the learner alone; the course's pause form is the tradition's
  padapāṭha idea.
- **Main risk:** guessing. The procedure requires every candidate split to be written
  before choosing; the quiz rewards the candidate list, not only the answer.
- **S0 → next:** +1 day: split the benediction from memory; +1 week (c05.l01): split one
  serial episode.

#### v3.c04.l05 — सन्धिपरीक्षा · "The Sandhi Exam"

- **lesson_type:** review. **review_of:** v3.c04.l01–l04, v3.c03.l05. Exam: chapter header
  shape. **Thread overlay (c04):** परमो, सत्यमेव, कश्चिद्, दुःखभाग्. Ledger stays 460.
  Paradigm ledger: the three sandhi maps ✓ in the listed rows.
- **S0 → next:** +1 day (c05.l01): five joins, five splits; +1 week (c05.l02): read the
  crow story joined at speed.

---

### 4.5 Chapter 5 — सर्वनाम-अव्यय-समासाः · Pronouns, Indeclinables, Compounds

**Goals.** Use every pronoun; tie clauses with relatives and correlatives; command the
words that never change; read and build compounds. From this chapter on, the learner's
own written compositions are joined, with their pause form.

**Grammar inventory (exact).** अस्मद् and युष्मद् in full with the enclitics (Whitney
§491), production limited (l01); भवत् m. and भवती f. (Whitney §§452–456) with listed cells;
सखा whole (Whitney §343); R6 (-वत्/-मत्/-अत् nominatives). The pronominal declension
(Whitney §§495–496, 509, 523–524): तद् in three genders (T8, ✓), एतद्, यद्, किम् (f. का), सर्व,
अन्य (n. अन्यत्), एक as Δ cards (पर as a plain a-adjective, D25); इदम् (Whitney §501) key cells ✓, the rest ◐;
indefinites with चित्/अपि (कश्चित्, कोऽपि, किञ्चित्, कदाचित्) (l02). The relative–correlative
sentence (यः … सः), the correlative grid (क-, त-, य-, इ-/अ-, सर्व-; -त्र -तः -दा -था) and its
चित्/अपि row; the particles (च वा अपि एव हि तु न इति इव मा); अधः, उपरि, समीपे + genitive;
the 22 upasargas as a reference card (IR-025) (l03). (The R5 absolutive card is c06.l01's:
G6.) Compounds: द्वन्द्वः,
तत्पुरुषः (with its subtypes named: the case-tatpuruṣa, karmadhāraya, dvigu; upapada as a
note), बहुव्रीहिः, अव्ययीभावः; first member in stem form; vigraha.

**Deferral-tracker row redeemed:** 6 (compounds). **1.x assets carried:** tad/idam
paradigms (pp.111–113) with IR-025's suppletion correction; the 22 upasargas (IR-025); the
four samāsa types (pp.37–43). **Promises kept:** मम/तव/मह्यम् in their tables; नमस्ते's ते;
भवान्'s forms; कश्चित्; prefixes as a system; मातृभाषा; जलज, खग.

**Serial, episode 5.** The names: चित्रग्रीवः ("whose neck is bright") and हिरण्यकः; "the
one who cuts snares is my friend"; the doves fly to the mouse's burrow.

**Exam shape (l05, one 45-minute sitting).** A pronoun substitution: replace nouns with
the right pronoun forms in an 8-sentence paragraph (8 min). B relative clauses: join 6
pairs of sentences with यः/यत्र/यदा (8 min). C compounds: 10 compounds from the ledger,
name the kind, give the vigraha with cases (10 min). D course-written passage at sight (new wording, not the lessons' lines): the
serial's episode 5, joined, 10 sentences, with questions (10 min). E production: a dialogue
with a guest using भवान्/भवती, two relatives and two compounds of one's own, written joined
with its pause form (9 min).

#### v3.c05.l01 — अहम् त्वम् भवान् · "I, You, Your Honour"

- **lesson_type:** conversation. **Station 0:** v3.c04.l05's +1 day item and v3.c04.l04's +1
  week item. **review_of:** v3.c04.l05, v3.c01 (pronoun cells), v2.c05.l02 (भवान्), v1.c06.l02 (मम, तव).
- **The one grammar point:** the personal pronouns and their short (enclitic) forms (T8,
  first half). भवत्, a 3rd-person word, is shown beside them with listed cells.
- **Forms taught (Whitney §491; enclitics in brackets):**

| Case | अहम् sg · du · pl | त्वम् sg · du · pl |
|---|---|---|
| प्रथमा | अहम् aham · आवाम् āvām · वयम् vayam | त्वम् tvam · युवाम् yuvām · यूयम् yūyam |
| द्वितीया | माम् mām (मा mā) · आवाम् (नौ nau) · अस्मान् asmān (नः naḥ) | त्वाम् tvām (त्वा tvā) · युवाम् (वाम् vām) · युष्मान् yuṣmān (वः vaḥ) |
| तृतीया | मया mayā · आवाभ्याम् āvābhyām · अस्माभिः asmābhiḥ | त्वया tvayā · युवाभ्याम् yuvābhyām · युष्माभिः yuṣmābhiḥ |
| चतुर्थी | मह्यम् mahyam (मे me) · आवाभ्याम् (नौ) · अस्मभ्यम् asmabhyam (नः) | तुभ्यम् tubhyam (ते te) · युवाभ्याम् (वाम्) · युष्मभ्यम् yuṣmabhyam (वः) |
| पञ्चमी | मत् mat · आवाभ्याम् · अस्मत् asmat | त्वत् tvat · युवाभ्याम् · युष्मत् yuṣmat |
| षष्ठी | मम mama (मे) · आवयोः āvayoḥ (नौ) · अस्माकम् asmākam (नः) | तव tava (ते) · युवयोः yuvayoḥ (वाम्) · युष्माकम् yuṣmākam (वः) |
| सप्तमी | मयि mayi · आवयोः · अस्मासु asmāsu | त्वयि tvayi · युवयोः · युष्मासु yuṣmāsu |

  **Production:** all singular cells ✓ (mostly owned); plural nom./acc./instr./gen. ✓;
  the enclitics मे ते नः वः ✓; the duals ◐. The free-facts card's exception lives here:
  dat. pl. अस्मभ्यम् ≠ abl. pl. अस्मत्. **Enclitic rule (FACT):** the short forms are
  unaccented and never begin a sentence or stand where emphasis falls (Whitney §491b); nor do they open a verse-quarter (8.1.18 अनुदात्तं सर्वमपादादौ, Teacher Notes); the grammarians
  add that they are not used beside च, वा, ह, अह, एव (8.1.24, Teacher Notes). **Sūtra
  quoted:** 8.1.22 तेमयावेकवचनस्य — ते and मे stand for the singular dative and genitive.

  **भवत् m. (Whitney §456), listed cells ✓, the rest ◐:** भवान् bhavān · भवन्तम्
  bhavantam · भवता bhavatā · भवते bhavate · भवतः bhavataḥ (abl./gen.) · भवति bhavati (loc.!
  a homograph of "is") · voc. भवन् bhavan; du. भवन्तौ; pl. भवन्तः bhavantaḥ · भवताम्
  bhavatām (gen.) · भवद्भिः · भवत्सु. भवती f. like नदी. **R6:** the same nominative shape
  in श्रीमान् (owned; voc. श्रीमन्, like भवन्), धीमान् (c04.l03), महान् (c06.l03, an -अत् stem with long आ in its
  strong cells: महान्तम्), पुण्यवान् (c06.l02, gloss).

  **सखा (Whitney §343), whole words, ◐; produce nom. and voc.:** सखा sakhā · सखायम्
  sakhāyam · सख्या sakhyā · सख्ये · सख्युः sakhyuḥ (abl./gen.) · सख्यौ (loc.) · voc. सखे
  sakhe; du. सखायौ; pl. सखायः sakhāyaḥ · सखीन्.
- **Model sentences (joined, with pause form):**
  1. फलं मे रोचते। — फलम् मे रोचते। "I like the fruit." (मे for मह्यम्; never first)
  2. नमस्ते। — नमः ते। "Homage to you." (**नमस्ते thread, step 3**; the learner writes the
     three-line proof: नमः + dative (2.3.16) · ते = तुभ्यम् (8.1.22) · ः + त → स्त (8.3.34))
  3. भवान् कुत आगच्छति? भवती कुत्र गच्छति? — भवान् कुतः आगच्छति? भवती कुत्र गच्छति? "Where do you come from, sir? Where are you going, madam?"
  4. अस्माकं गुरुर्भवतां ग्रामे वसति। — अस्माकम् गुरुः भवताम् ग्रामे वसति। "Our teacher lives in your village (polite pl.)."
  5. सखे! त्वया सहाहमप्यागच्छामि। — सखे! त्वया सह अहम् अपि आगच्छामि। "Friend! I'm coming with you too."
  6. स्वयं पठ। — स्वयम् पठ। "Read by yourself."
- **New headwords (4; 460 → 464):** स्वयम् svayam "oneself, by oneself" (indeclinable;
  Whitney §513) · सखा sakhā m. "friend" (irregular; rule 14; Hit सखे!) · स्नेहः snehaḥ m. a
  "affection" · विश्वासः viśvāsaḥ m. a "trust".
- **Payoff:** मम, तव, मह्यम्, तुभ्यम्, माम् (owned) take their places in two tables; भद्रम्
  ते and नमस्ते's ते are enclitic datives; भवान् takes the 3sg because it is grammatically
  "Your Honour" (v2.c05.l02). The नमस्ते thread closes.
- **Main risk:** enclitics used sentence-first (*मे फलं रोचते); भवति "in you" vs भवति "is".
  Quiz distractors and §12.
- **Serial:** चित्रग्रीव उवाच — "मम सखा मूषकोऽस्ति। सोऽस्मान्रक्षेत्।" — चित्रग्रीवः उवाच — "मम सखा मूषकः अस्ति। सः अस्मान् रक्षेत्।" (the name is glossed until l04 resolves it)
- **S0 → next:** +1 day: the singular and plural pronoun cells; +1 week (c05.l03): the
  नमस्ते proof from memory.

#### v3.c05.l02 — सः अयम् यः · "This, That, Which"

- **lesson_type:** grammar. **review_of:** v3.c05.l01, v3.c01.l05 (the pronoun column),
  v2.c02.l02 (एषः, एषा, एतत्), v2.c06.l01 (कश्चित् display), v1.c06.l04 (सर्वे).
- **The one grammar point:** the pronominal declension: the ending set shared by तद्,
  एतद्, यद्, किम्, सर्व, अन्य, एक (1.1.27 सर्वादीनि सर्वनामानि), with इदम् as its
  irregular member. The relative sentence that यद् builds (यः …, सः …) is c05.l03's (G6).
- **Forms taught (T8, second half; Whitney §495):**

| Case | सः m. sg · du · pl | तत् n. | सा f. sg · du · pl |
|---|---|---|---|
| प्रथमा | सः saḥ · तौ tau · ते te | तत् tat · ते te · तानि tāni | सा sā · ते te · ताः tāḥ |
| द्वितीया | तम् tam · तौ · तान् tān | तत् · ते · तानि | ताम् tām · ते · ताः |
| तृतीया | तेन tena · ताभ्याम् tābhyām · तैः taiḥ | (as m.) | तया tayā · ताभ्याम् · ताभिः tābhiḥ |
| चतुर्थी | तस्मै tasmai · ताभ्याम् · तेभ्यः tebhyaḥ | (as m.) | तस्यै tasyai · ताभ्याम् · ताभ्यः tābhyaḥ |
| पञ्चमी | तस्मात् tasmāt · ताभ्याम् · तेभ्यः | (as m.) | तस्याः tasyāḥ · ताभ्याम् · ताभ्यः |
| षष्ठी | तस्य tasya · तयोः tayoḥ · तेषाम् teṣām | (as m.) | तस्याः · तयोः · तासाम् tāsām |
| सप्तमी | तस्मिन् tasmin · तयोः · तेषु teṣu | (as m.) | तस्याम् tasyām · तयोः · तासु tāsu |

  **Δ cards:** एतद् = ए- + the तद् forms, nom. sg. एषः, एषा (owned; the optional एनम्, एनेन
  in Teacher Notes). यद्: यः yaḥ, या yā, यत् yat; यम्, येन, यस्मै … (regular to the table).
  किम्: कः, का, किम्; f. काम्, कया, कस्यै, कस्याः, कस्याम्; pl. काः, कासाम्. सर्व: सर्वः
  सर्वा सर्वम्, m. pl. सर्वे (not *सर्वाः, which is the feminine plural only), सर्वेषाम्, सर्वस्मै; n. pl. सर्वाणि. अन्य: n. sg.
  अन्यत् (7.1.25, Teacher Notes). एक: एकस्मै, एकस्मिन्, f. एकस्यै. पर is declined as a
  plain a-adjective, परः परा परम् (D25).

  **इदम् (Whitney §501), key cells ✓, the rest ◐:** m. अयम् ayam · इमम् imam · अनेन anena
  · अस्मै asmai · अस्मात् asmāt · अस्य asya · अस्मिन् asmin; du. इमौ · आभ्याम् · अनयोः; pl.
  इमे ime · इमान् · एभिः · एभ्यः · एषाम् · एषु. f. इयम् iyam · इमाम् imām · अनया anayā ·
  अस्यै · अस्याः asyāḥ · अस्याम् asyām; du. इमे; pl. इमाः imāḥ · आभिः · आभ्यः · आसाम् · आसु.
  n. इदम् idam (nom./acc.); du. इमे; pl. इमानि imāni. Key cells: the three nominatives
  and accusatives in every number, अनेन, अस्य, अस्याः, अस्मिन्.

  **IR-025 in the open:** the 1.x rule "स् → त् in the oblique cases" is wrong; स appears
  only in सः and सा, the rest is त-: two stems sharing one paradigm (suppletion; Whitney
  §495). **Indefinites:** कः / का / किम् + चित् / अपि → कश्चित्, कापि, किञ्चित्, कोऽपि; केनचित्,
  कस्मिंश्चित् (the seams are c04's).
- **Sentence patterns:** कश्चित् X-ः आसीत्; अयम्/इयम्/इदम् + predicate; सर्वे X-आः; the
  यद् cells (यः, या, यत्; यम्, येन …) in the table drills only.
- **Model sentences (joined, with pause form):**
  1. अयं मम भ्राता। इयं मम भगिनी। इदं मम गृहम्। — अयम् मम भ्राता। इयम् मम भगिनी। इदम् मम गृहम्। "This is my brother, this my sister, this my house."
  2. सर्वे छात्रा अत्र सन्ति। — सर्वे छात्राः अत्र सन्ति। "All the students are here."
  3. कश्चिन्नृप आसीत्। — कश्चित् नृपः आसीत्। "There was a certain king." (the opener v2.c06.l01 promised)
  4. तस्मिन्वन एकः सिंह आसीत्। — तस्मिन् वने एकः सिंहः आसीत्। "In that forest there was a lion." (वने + एकः → वन एकः, c04.l01's word-final ए before a vowel other than अ)

  (Two former models, यः पठति स जानाति and यो मूषकः पाशान्कृन्तति स मम सखा, move to c05.l03
  with the relative sentence: G6.)
- **New headwords (8; 464 → 472):** अयम् ayam pron. "this" (इदम्) · यः yaḥ rel. pron. "who,
  which" (यद्) · अन्यः anyaḥ pron. adj. "other" · परः paraḥ pron. adj. "other, another;
  further" (Hit 1.71 परः) · कश्चित् kaścit indef. "someone, a certain" · कदाचित् kadācit
  "once, at some time" (Panc 4 B3) · स्वः svaḥ pron. adj. "own" (T5 स्वपत्न्यै; Hit
  स्वकोटरम्) · निजः nijaḥ adj. "own, one's own" (Hit 1.71).
- **§12 warning:** स्वः "own" vs स्वः "we two are" (अस्, c03.l01): one spelling, two words.
- **Deferred:** the relative–correlative sentence (यः …, सः …): c05.l03, the next lesson.
- **Payoff:** सर्वे भवन्तु सुखिनः — why the masculine plural is सर्वे, not *सर्वाः like रामाः; एषः/एषा (v2.c02) are एतद्; तस्य,
  तस्मिन् and कस्य stop being exceptions; कश्चित् opens stories; the सः seam (6.1.132)
  belongs to a real paradigm.
- **Main risk:** इदम्'s many stems (अय-, इम-, अन-, अ-, ए-, आ-). Production stops at the key
  cells; the rest is ◐.
- **S0 → next:** +1 day: तद् in three genders, singular; +1 week (c05.l04): the यद्, किम्
  and सर्व Δ cells.

#### v3.c05.l03 — अव्ययानि · "The Words That Never Change"

- **lesson_type:** vocabulary (most of the grid is owned). **review_of:** v3.c05.l02,
  v1.c02.l06 (ततः, अतः, इतः, कुतः), v1.c05.l03 (अत्र, तत्र, यत्र), v2.c05.l01 (कदा,
  इदानीम्, यतः), v2.c05.l02 (prefixes).
- **The one grammar point:** indeclinables (अव्ययम्, 1.1.37 स्वरादिनिपातमव्ययम्): the
  correlative grid built on the pronoun stems, and the relative–correlative sentence it
  serves (यः …, सः …; यत्र …, तत्र …; यदा …, तदा …; यथा …, तथा …): one pattern, the
  relative clause first and its correlative after (moved here from c05.l02, G6). One card
  rides with it, not a production target: the upasarga reference card (1.4.59 उपसर्गाः
  क्रियायोगे). (The R5 absolutive card is c06.l01's, G6.)
- **The grid (owned in bold):**

| | क- "which?" | इ-/अ- "this" | त- "that" | य- "which (rel.)" | सर्व- "all" |
|---|---|---|---|---|---|
| place (-त्र) | **कुत्र** · क्व | **अत्र** | **तत्र** | **यत्र** | सर्वत्र |
| from (-तः) | **कुतः** | **इतः** · **अतः** | **ततः** | **यतः** | सर्वतः |
| time (-दा) | **कदा** | **इदानीम्** | तदा | यदा | सर्वदा; beside it, not सर्व- forms: **एकदा** "once" (v2.c06.l02), **सदा** "always" (c03.l04) |
| manner (-था, -थम्) | **कथम्** | इत्थम् · एवम् | तथा | यथा | सर्वथा |
| + चित् / अपि "some-, any-" | कुत्रचित्, कुत्रापि · कुतश्चित् · कदाचित्, कदापि · कथञ्चित् | | | | |

  Adverbial तत् "so, then" and यत् "that, because" (A2's तन्मे; B4's तद्भक्षयतु).
  **Particles** (owned unless marked): च, **अपि**, **न**, **इति**, एव, इव, वा (c04.l01), तु
  (c04.l02), मा (c03.l04), हि (new). **Postpositions with the genitive:** उपरि (owned),
  समीपे (c01.l04), अधः (new): तरोः अधः "under the tree" (Panc 4 B3).

  **The upasarga card (reference; IR-025):** 22 — प्र परा अप सम् अनु अव निस् निर् दुस् दुर्
  वि आ(ङ्) नि अधि अपि अति सु उत् अभि प्रति परि उप (the 1.x list repeated अति and उप and
  dropped नि and अपि). The learner's prefixed verbs: आगच्छति, अवगच्छति, निर्गच्छति,
  प्रविशति, उपविशति, निवसति, प्रयच्छति; display: उत्तिष्ठति, प्रतिवसति (c06.l03), सम्भाषते
  (c06.l02).
- **Sentence patterns:** यः …, सः …; यत् …, तत् …; यत्र …, तत्र …; यदा …, तदा …; यथा …,
  तथा …; "…?" इति सः अपृच्छत्.
- **Model sentences (joined, with pause form):**
  1. यः पठति स जानाति। — यः पठति सः जानाति। "Whoever studies, knows." (from c05.l02, G6)
  2. यत्र वृक्षास्तत्र पक्षिणः। — यत्र वृक्षाः तत्र पक्षिणः। "Where there are trees, there are birds." (course sentence)
  3. यदा गुरुरागच्छति तदा छात्रा उपविशन्ति। — यदा गुरुः आगच्छति तदा छात्राः उपविशन्ति। "When the teacher comes, the students sit down."
  4. यथा गुरुस्तथा शिष्यः। — यथा गुरुः तथा शिष्यः। "As the teacher, so the student." (course sentence)
  5. "क्व गच्छसि?" इति स तरोरधोऽपृच्छत्। — "क्व गच्छसि?" इति सः तरोः अधः अपृच्छत्। "'Where are you going?' he asked, under the tree." (no absolutive: R5 is c06.l01's)
  6. यो मूषकः पाशान्कृन्तति स मम सखा। — यः मूषकः पाशान् कृन्तति सः मम सखा। "The mouse who cuts snares is my friend." (the serial's line; from c05.l02, G6)
- **New headwords (8; 472 → 480):** यदा yadā "when (rel.)" · तदा tadā "then" · यथा yathā
  "as, so that" · तथा tathā "so, thus" (and तथास्तु, तथापि) · एवम् evam "thus, so" (Hit A6
  मैवम्, A8 एवमुक्त्वा; Panc 4 B5) · क्व kva "where?" (T5) · हि hi "for, indeed" (उद्यमेन हि)
  · अधः adhaḥ "below, under" (+ gen.; Panc 4 B3).
- **Payoff:** ततः, अतः, इतः, कुतः, अत्र, तत्र, यत्र (Volume 1), कदा, इदानीम्, यतः (Volume 2)
  were one system all along; the prefix in अवगच्छति is one of 22; कदाचित् is क- + -दा + चित्.
- **Main risk:** overload. The lesson's production stops at the grid, the particles and
  the relative sentence; the upasarga card is read, not drilled; यावत् … तावत्, the
  -वत्/-मात्र adverbs and the gati prefixes go to v4.c04 (§6).
- **Serial:** यत्र मूषकस्य विवरं तत्र कपोता अगच्छन्। — यत्र मूषकस्य विवरम् तत्र कपोताः अगच्छन्।
- **S0 → next:** +1 day: the grid from memory; +1 week (c05.l05): relative pairs.

#### v3.c05.l04 — समासाः · "Compounds"

- **lesson_type:** grammar. **review_of:** v3.c05.l03, v3.c04.l01 (परोपकारः), v3.c02.l04
  (dual), v1.c03.l02 (जलज), v2.c06.l04 (दूरदर्शनम्), v2.c03.l03 (रविवासरः).
- **The one grammar point:** a compound joins stems into one word, and is understood by
  its विग्रहः, the phrase with case endings it compresses. Four kinds.
- **Forms taught:**

| Kind | Definition (one line) | Examples → vigraha |
|---|---|---|
| द्वन्द्वः "pair" (2.2.29 चार्थे द्वन्द्वः) | X and Y; dual or plural at the end | सिंहमूषकौ = सिंहः च मूषकः च (the V2 story) · मातापितरौ = माता च पिता च (माता- first: 6.3.25, Teacher Notes) |
| तत्पुरुषः "his man" — **(a) case-tatpuruṣa** | the first member in a case relation to the second | विद्यालयः = विद्यायाः आलयः (gen.) · परोपकारः = परस्य उपकारः (उपकारः "help", gloss) · मनोरथः = मनसः रथः (मनसः display) · अमृततुल्यम् = अमृतेन तुल्यम् (instr.) · समुद्रतीरम् = समुद्रस्य तीरम् (तीरम् c01.l02) · सभामध्ये = सभायाः मध्ये |
| — **(b) karmadhāraya** (2.1.57 विशेषणं विशेष्येण बहुलम्, Teacher Notes) | adjective + noun, one referent | नीलकमलम् = नीलम् कमलम् · चित्रवनम् = चित्रम् वनम् · प्रियमित्रम् = प्रियम् मित्रम् |
| — **(c) dvigu** | a numeral first | पञ्चतन्त्रम् "the five books" · सप्ताहः "seven days" (owned) |
| — **(d) upapada** (note) | the second member a verb-noun | जलजम् = जले जायते · खगः = खे गच्छति (ख "sky", gloss) · पादपः = पादैः पिबति |
| बहुव्रीहिः "much rice" (2.2.24 अनेकमन्यपदार्थे) | describes someone else | नीलकण्ठः = नीलः कण्ठः यस्य सः (Śiva; the peacock) · चित्रग्रीवः = चित्रा ग्रीवा यस्य सः (Hit's dove-king) · अल्पशक्तिः = अल्पा शक्तिः यस्य सः · उदारचरितः = उदारम् चरितम् यस्य सः |
| अव्ययीभावः | an indeclinable first; the whole is indeclinable | यथाशक्ति "as far as one can" · प्रतिदिनम् "daily" (◐; recognition) |

  **Prādi (label, not a fifth kind):** सुप्रभातम् (owned) and सुकोमल- are सु- compounds, the
  prādi type of tatpuruṣa (2.2.18 कुगतिप्रादयः, Teacher Notes): सु "well, very" + noun. It
  is *not* filed as a karmadhāraya. **Rules:** (1) the first member stands in stem form
  (मातृभाषा, not *माताभाषा — v1.c02.l03's promise; राज- from राजन्); one note so the rule
  is not misapplied: the महा- of महाभारतम् is a special compound form of महत्, not its
  stem; (2) only the last member is inflected; (3) sandhi applies at the inner seam (पर +
  उपकारः, मनस् + रथः); (4) the names are themselves examples (बहुव्रीहि "having much rice";
  तत्पुरुष "his man"). The इन्द्रशत्रु accent example (IR-026) goes to v4.c04.
  **Production:** vigraha of dvandva, case-tatpuruṣa, karmadhāraya and bahuvrīhi ✓;
  dvigu, upapada, avyayībhāva ◐.
- **Model sentences (joined, with pause form):**
  1. मातापितरौ गृहे स्तः। — मातापितरौ गृहे स्तः। "Mother and father are at home."
  2. चित्रग्रीवो नाम कपोतराजः। — चित्रग्रीवः नाम कपोतराजः। "A dove-king called Citragrīva." (कपोतराजः: -राज at a compound's end, G, 5.4.91 in v4.c04; X नाम Y "a Y called X" is display here, its formula c06.l03's)
  3. नीलकण्ठो वने नृत्यति। — नीलकण्ठः वने नृत्यति। "The peacock dances in the forest."
  4. पादपस्याधः शशकस्तिष्ठति। — पादपस्य अधः शशकः तिष्ठति। "The hare stays under the tree."
  5. अहमल्पशक्तिः। — अहम् अल्पशक्तिः। "I am of little strength." (Hit 1, A7, met here first)
- **New headwords (8; 480 → 488):** कण्ठः kaṇṭhaḥ m. a "throat" (and कण्ठ्य, v1.c01.l02) ·
  नीलकण्ठः nīlakaṇṭhaḥ m. "Śiva; the peacock" (lexicalised bahuvrīhi; rule 10) · ग्रीवा
  grīvā f. ā "neck" · चित्रः citraḥ adj. -त्रा -त्रम् "bright, many-coloured" · पादपः
  pādapaḥ m. a "tree" (lexicalised upapada: "drinking by the feet"; rule 10; Panc 4 B1) ·
  तुल्यः tulyaḥ adj. -ल्या -ल्यम् "equal, like" (+ instr. or gen.; Panc 4 B4) · उदारः
  udāraḥ adj. -रा -रम् "noble, generous" (Hit 1.71) · चरितम् caritam n. a "conduct, deeds"
  (Hit 1.71). Upgrade: शक्तिः.
- **Payoff:** विद्यालयः, हिमालयः, मनोरथः, परोपकारः, दूरदर्शनम्, रविवासरः, सुप्रभातम्,
  शुभरात्रिः, मध्याह्नः, जलज, खग, गोपाल, वर्णमाला, मातृभाषा, महाभारतम् — the compounds of Volumes 1–2 (most of them ledger rows; मनोरथः and
  मातृभाषा from owned lines), each resolved by the learner; कमलमुकुलम् "lotus bud" (v1.c02.l02, two owned
  words) = कमलस्य मुकुलम्; and पादः "foot" (V2) is inside पादपः "tree". Of v2.c06.l04's four
  word-building parts, the prefix (c05.l03) and the compound are now taught; roots (v4.c03)
  and suffixes (v4.c04) wait, said in one line.
- **Main risk:** tatpuruṣa vs bahuvrīhi when both readings are possible. The context test:
  "does the compound name the thing itself, or someone who has it?" The real ambiguity
  (इन्द्रशत्रुः) is v4.c04's.
- **Serial:** चित्रग्रीवः कपोतैः सह हिरण्यकस्य विवरम् अगच्छत्। — joined: चित्रग्रीवः कपोतैः सह हिरण्यकस्य विवरमगच्छत्। (हिरण्यकः: "golden one", a name, glossed)
- **S0 → next:** +1 day: ten vigrahas; +1 week (c06.l01): name the kind of ten owned
  compounds.

#### v3.c05.l05 — परीक्षा · "Chapter 5 Exam"

- **lesson_type:** review. **review_of:** v3.c05.l01–l04, v3.c04.l05. Exam: chapter header
  shape. **Thread overlay (c05):** हि; मनोरथः; अ-हिंसा; सर्वे, कश्चित्, निरामयाः (bahuvrīhi:
  निर् + आमयः "illness", G). Ledger stays 488. Paradigm ledger: T8 ✓ (listed cells); R6 ◐
  (R5 comes in c06.l01).
- **S0 → next:** +1 day (c06.l01): the crow story read joined; +1 week (c06.l02): the
  serial's five episodes retold aloud in two minutes.

---

### 4.6 Chapter 6 — सम्पूर्णपठनम् · Connected Reading

**Goals.** Read joined narrative; follow speech frames; begin a story as Sanskrit stories
begin; put a verse in prose order; meet the Hitopadeśa and the Pañcatantra in their own
words.

**Grammar inventory (one reading skill per lesson).** Reading a joined narrative
paragraph straight through, with the R5 absolutive card (l01); the speech frame X उवाच /
आह / अवदत् — "…", and "…" इति (l02); the story-opening formula अस्ति + locative +
nominative, X नाम Y, प्रतिवसति स्म — the storyteller's present + स्म, with 3.2.118 लट् स्मे
(l03); अन्वयः (l04). No new paradigm. Every form in the texts is T, C, L or G (§5).

**Deferral-tracker rows redeemed:** the "Volume 3 teaches the system" lines of
v2.c06.l01–l03 (the stories and the verse are now read without a whole-word gloss for any
taught form). **1.x assets carried:** the graded readers in original form (Text B1, B2).
**Promises kept:** the Hitopadeśa cousin of the lion story (v2.c06.l02); the benediction
fully parsed (thread overlay, l01).

**Exam shape (l05): the Volume 3 exam, two 45-minute sittings; it gates Volume 4.**
*Sitting 1 — reading and listening.* A listening: Text B2 (the lion and mouse dialogue)
read joined at natural pace, 10 questions (10 min). B dictation: joined text, then its
pause form (8 min). C **unseen authentic text** T5 (§5.6), with 6 marginal glosses:
translate, and answer 6 questions in Sanskrit (27 min). *Sitting 2 — production and
knowledge.* D grammar production, 20 items: decline a noun of a named class in a named case
and number; conjugate a verb in a named lakāra, pada and cell (✓ cells of §2.2 only); join 4 seams; split 4;
resolve 2 compounds (15 min). E composition: retell any Volume 3 story in the past, 10
sentences, with two lines of dialogue closed by इति and one relative sentence, written
joined with its pause form, then recorded (20 min). F honesty sort: 8 cards (verse sources
and speakers, each restated in c06.l05 §4 as a cited HISTORY callout; the जयते line; a
FACT card: नमस्ते = नमः + ते, homage + the enclitic dative, ः + त → स्त (8.3.34); मा +
imperative; the 1.x corrections: 6.1.77, भवति, तिस्रः, the 22 upasargas; mosaic vs
continuous quotation) (10 min). No SYMBOL content is assessed (STYLE_GUIDE §4). Passing
gates Volume 4.

#### v3.c06.l01 — द्वे कथे · "The Two Stories, Joined"

- **lesson_type:** reading. **Station 0:** v3.c05.l05's +1 day item and v3.c05.l04's +1 week
  item. **review_of:** v3.c05.l05, v2.c06.l01, v2.c06.l02, v3.c04.l04, v3.c03.l03.
- **The one grammar point:** reading a joined narrative paragraph straight through: pause
  form first, then joined, then joined at speed (Volume 2's three-speed protocol).
- **The R5 card — absolutive (recognition only; moved here from c05.l03, G6, still before
  Hitopadeśa A1, A8, Pañcatantra 4 B3, B5 and T5):** -त्वा / (after a prefix) -य = "having …-ed"; it never changes
  and its doer is the doer of the main verb (in an "X-ed by Y" sentence, R2, the instrumental Y: एवमुक्त्वा तेन … छिन्नानि, A8): एवम् उक्त्वा "having said so", दृष्ट्वा "having
  seen", गत्वा "having gone", आगत्य "having come", निष्क्रम्य "having come out".
  Absolutives are indeclinables too (1.1.40, Teacher Notes). Formation v4.c04.
- **Texts (§5.1):** Text A1 (the crow) and Text A2 (the lion), the Volume 2 texts
  reprinted unchanged, only joined; Text B1, the course's past-tense telling of the crow
  with the 1.x details restored (पाषाणान्, तृष्णार्तः, बुद्धिर्बलाच्छ्रेष्ठा). Thread overlay
  closes: the benediction, fully parsed (§5.4(d)).
- **New headwords (4; 488 → 492):** उपायः upāyaḥ m. a "means, way, stratagem" · इतस्ततः
  itastataḥ "here and there" · तृष्णा tṛṣṇā f. ā "thirst; craving" · आर्तः ārtaḥ adj. -र्ता
  -र्तम् "afflicted, distressed" (so the 1.x तृष्णार्तः = तृष्णया आर्तः reads as a built
  tatpuruṣa, D22).
- **Payoff:** the 1.x reader that Volume 2 corrected is read in its 1.x details, and the
  learner can say which details were never wrong (तृष्णार्तः, the plural, the moral) and
  which were (V2 research note 0.3–0.4).
- **Main risk:** reading speed collapses on joined text. The three speeds, and a seam hunt
  (each seam named by its c04 lesson).
- **S0 → next:** +1 day: the crow story aloud, joined; +1 week (c06.l03): retell B1 from
  memory.

#### v3.c06.l02 — कपोताः मूषकः च · "The Doves and the Mouse" (Hitopadeśa)

- **lesson_type:** reading. **review_of:** v3.c06.l01, v2.c06.l02, v3.c05.l04, v3.c03.l04.
- **The one grammar point:** the speech frame. Quoted words keep their own persons and
  tenses; X उवाच / आह / अवदत् — "…" opens a quotation, and इति closes one; no sandhi across
  the dash, and none across the closing quotation mark before इति ("…करिष्यामि" इति; full
  sandhi would give करिष्यामीति, shown once as "editions vary"; §1.4).
- **Texts (§5.2):** Text B2, the course's past-tense dialogue telling of the lion and the
  mouse with the 1.x lines restored (धावति; the mouse's promise with करिष्यामि glossed); then
  the authentic Hitopadeśa passage A1–A8 (eight sentences, a mosaic with ellipses and
  per-sentence loci) with a short English/Hindi bridge for the omitted plot.
- **HISTORY callout ([REF:hitopadesha], which exists, for the dating "c. 9th–12th c. CE";
  decision 4):** the Hitopadeśa (attributed to Nārāyaṇa) and its relation to the
  Pañcatantra (the Pañcatantra translation key the c06 fact base adds); restate v2.c06.l02's claim
  exactly — in the frame story of the Hitopadeśa's first book, a mouse gnaws through a net
  to free a flock of birds; no claim about which story came first.
- **New headwords (6; 492 → 498):** सुहृत् suhṛt m. "friend" (consonant stem, rule 14; A4
  प्रियसुहृन्मे, T5 परमसुहृत्) · बन्धनम् bandhanam n. a "bond" (A8) · नाना nānā "various"
  (A1) · शाल्मली śālmalī f. ī "silk-cotton tree" (A1) · साहाय्यम् sāhāyyam n. a "help,
  assistance" (Apte s.v. साहाय्य; B2; decision 2: if the c06 fact base finds सहायं करोति
  "helps" attested in a citable text, the 1.x wording is restored and the headword is
  सहायः instead — the count stays 6, the ledger 508) · प्रत्युपकारः pratyupakāraḥ m. a "a kindness returned" (B2).
- **Payoff:** the cousin promised at the Volume 2 exam is read in its own words; दन्ताश्च
  मे कोमलाः, "and my teeth are soft", is an authentic sentence in which every word is owned;
  मा मैवं कुरु shows the prohibitive the course taught.
- **Main risk:** the passage is a mosaic. The lesson says so on the page (ellipses, loci),
  and the bridge tells the omitted plot honestly. The perfect forms are chunks, never
  "taught".
- **S0 → next:** +1 day: the speech-frame drill (convert 6 lines between X उवाच — "…" and
  "…" इति X अवदत्); +1 week (c06.l04): A1–A8 read aloud.

#### v3.c06.l03 — वानरः मकरः च · "The Monkey and the Crocodile" (Pañcatantra)

- **lesson_type:** reading. **review_of:** v3.c06.l02, v3.c03.l04, v3.c05.l03, v3.c04.l04.
- **The one grammar point:** the story-opening formula — अस्ति + locative + subject ("there
  is, in X, a Y"); X नाम Y ("a Y called X"); the storyteller's present + स्म = past
  (moved here from c03.l03, G4). **Sūtra quoted:** 3.2.118 लट् स्मे "the present (लट्),
  with स्म" — for the past, as प्रतिवसति स्म "lived" shows (re-homed in §4.0.4).
- **Texts (§5.3):** the opening of the Pañcatantra's Book 4 frame story (B1–B5, verbatim,
  with the verses between B4 and B5 omitted and marked); then a **formula drill** of four
  first sentences only: Hitopadeśa kathāmukha (prose after 0.9), Hitopadeśa 1 (A1, met in
  l02), "Pañcatantra 1, the lion Madotkaṭa, first sentence", "Pañcatantra 1, the jackal
  Caṇḍarava, first sentence" (Pañcatantra loci printed by tantra and story; the Jha
  numbers stay in the research note and Teacher Notes, §5). Teacher Notes: the Jha e-text
  opens a passage with अस्ति कस्मिंश्चित् 27 times (20 spelt कस्मिंश्चिद्, 4 -त्, 2 -न्, 1 -ज्) and has प्रतिवसति स्म 32 times, plus one
  e-text typo "prativasa ti sma" (grep of the local `vispancu.htm`; method stated, no
  wider claim).
- **HISTORY callout (the Pañcatantra translation key the c06 fact base adds, decision 4):**
  the Pañcatantra's date, hedged (IR-030), with the sixth-century Middle Persian
  translation as the firm lower anchor; a Jātaka cousin of the monkey and the crocodile
  only if Chapter 6 research verifies its number and title; otherwise the line is cut
  (decision 5).
- **New headwords (5; 498 → 503):** वानरः vānaraḥ m. a "monkey" · मकरः makaraḥ m. a
  "crocodile, sea-monster" · जम्बूः jambūḥ f. ū "rose-apple tree" (rule 14: nominative and
  compound stem जम्बू- only; ū-stems v4.c05) · सलिलम् salilam n. a "water" · महान् mahān adj.
  "great" (the -अत् stem महत्, strong stem महान्त्-; R6; nominative chunk).
- **Payoff:** the first authentic Sanskrit story opening read whole; अस्ति कस्मिंश्चित् …
  opens many tales, and each of its seams belongs to a Chapter 4 lesson; भवान् … भक्षयतु is
  c03.l04's polite imperative, used by a monkey to a crocodile; पादपः (c05.l04) is the
  Pañcatantra's own word for the tree. And नाम, owned since v1.c06.l02's मम नाम, is an
  -अन् noun used whole, as an indeclinable "by name" here.
- **Main risk:** the long compound सुकोमलबालुकासनाथे in B3, glossed whole with its
  structure shown; the honest line that long compounds belong to some prose styles, with no
  scale claim.
- **S0 → next:** +1 day: write a story opening with the formula; +1 week (c06.l05): B1–B5
  retold in pause form.

#### v3.c06.l04 — त्रयः श्लोकाः · "Three Verses"

- **lesson_type:** reading. **review_of:** v3.c06.l03, v3.c04.l04, v2.c06.l03, v1.c06.l04.
- **The one grammar point:** अन्वयः, putting a verse in prose order: find the verbs; find
  their subjects by case; attach each adjective by agreement; place the relative before
  its correlative — the commentators' method (TRADITION), taught on the easiest verse
  first.
- **Texts (§5.4), three:** Hitopadeśa 0.6 (विद्या ददाति विनयम्…, the ablative chain);
  Hitopadeśa 1.71 (अयं निजः परो वेति…, with its speaker, the jackal); "Pañcatantra 1, the
  lion Bhāsuraka and the hare (verse introducing the story)" (यस्य बुद्धिर्बलं तस्य…, with
  the Hitopadeśa 2.122 variant noted; Jha 1.237 in the research note only) — the classical cousin of
  the course's own moral बुद्धिः एव बलम्. Hit 0.36 is re-read as the thread overlay's last
  stop (no glosses), not as a fourth text.
- **New headwords (5; 503 → 508):** विनयः vinayaḥ m. a "discipline, modesty" · याति yāti
  "goes; attains" (class 2, stem whole like जानाति; यान्ति, अयात् whole) · आप्नोति āpnoti
  "obtains" (stem whole like शृणोति; T5 प्राप्नोषि = प्र + आप्नोषि) · वसुधा vasudhā f. ā "the
  earth" · मदः madaḥ m. a "intoxication, pride" (मदोन्मत्तः). Upgrade: धनम्.
- **Payoff:** वसुधैव कुटुम्बकम्, a phrase the learner may already have met, is read in context
  and with its speaker; बुद्धिः एव बलम् meets यस्य बुद्धिर्बलं तस्य; anuṣṭubh rhythm heard
  (metre is v5.c04).
- **Main risk:** treating a verse as a puzzle; the fixed anvaya procedure, verse 0.6 first.
- **S0 → next:** +1 day: the anvaya of 0.6 from memory; +1 week: the Volume 4 entry
  review (v4.c01.l01's Station 0).

#### v3.c06.l05 — तृतीयखण्डपरीक्षा · "The Volume 3 Exam"

- **lesson_type:** review. **review_of:** v3.c06.l01–l04, v3.c05.l05, v3.c04.l05,
  v3.c03.l05, v3.c02.l05, v3.c01.l05. Two sittings (chapter header). Ledger stays **508**
  (Volume 3: 148 ledger-new). Paradigm ledger audited in full (§2.2). Gates Volume 4
  (पाणिनीयम्). §20 books v4.c01.l01's Station 0 and closes the "monthly until Volume 3
  ends" task.
- **The lesson's §4 restates, as cited HISTORY callouts, every source line task F's cards test** (a
  HISTORY item is assessed only with a cited callout in the same lesson, STYLE_GUIDE §4):
  Hitopadeśa 1.71 (mitralābha) and its jackal speaker [REF:hitopadesha]; the Pañcatantra
  Book 1 lion-and-hare story [REF:panchatantra]; Muṇḍaka 3.1.6 for सत्यमेव जयते
  [REF:mundaka 3.1.6]. The नमस्ते card is a FACT card (नमः + ते; 8.3.34); the SYMBOL
  callout of c04.l02 is never assessed.

---

## 5. The Chapter 6 texts and their form inventories

Every text is printed joined (convention §1.4), with its pause form beneath, IAST and a
gloss line. Course-written texts are quoted in full. Authentic texts are quoted verbatim
from the GRETIL e-texts at loci re-found at synthesis by line number (Hitopadeśa:
`hitop_u.htm`; Pañcatantra: `vispancu.htm`), printed from the e-texts REFERENCES names with
evident typos corrected and listed in Teacher Notes (e.g. Jha 1.311's "prativasa ti"), and
compared by the Chapter 6 fact base with one printed edition it can open, each difference
recorded; where none can be opened, the source line says "text of the GRETIL e-text" and
nothing more (decision 1). **Loci in learner text:** Hitopadeśa by its GRETIL numbering
(Hit 1.71); Pañcatantra by tantra and story only ("Pañcatantra 4, frame story, the opening
prose"), because verse numbers differ between editions (REFERENCES `panchatantra`). Every
"Jha n.n" number below is for the research note and Teacher Notes only. Status codes:
**T** taught (lesson) · **C** chunk headword · **L** recognised under an R-card or a
labelled pattern · **G** glossed. Names are glossed and excluded from the gloss ratios.

### 5.1 v3.c06.l01 — the two stories, joined; and the 1.x crow

**Text A1 — the Volume 2 crow (v2.c06.l01 §17), unchanged, joined.**

> एकः काकोऽस्ति। स पिपासितोऽस्ति। स जलमिच्छति। स एकं घटं पश्यति। घटेऽल्पं जलमस्ति।
> स एकं पाषाणं घटे क्षिपति। स पुनः पुनः क्षिपति। जलमुपर्यागच्छति। स जलं पिबति।
> स सुखी भवति। बुद्धिरेव बलम्।
>
> *ekaḥ kāko 'sti. sa pipāsito 'sti. sa jalam icchati. sa ekaṃ ghaṭaṃ paśyati. ghaṭe 'lpaṃ
> jalam asti. sa ekaṃ pāṣāṇaṃ ghaṭe kṣipati. sa punaḥ punaḥ kṣipati. jalam upary āgacchati.
> sa jalaṃ pibati. sa sukhī bhavati. buddhir eva balam.*

Seams, by lesson: -अः + अ → ओऽ (काकोऽस्ति, पिपासितोऽस्ति; c04.l02); सः before a consonant
→ स (6.1.132; c04.l02); before ए → स by the ordinary -अः + vowel rule (स एकम्; c04.l02); -म् + vowel joins, -म् + consonant → ं (c04.l03);
-ए + अ → एऽ (घटेऽल्पम्; c04.l01); इ + आ → या (उपर्यागच्छति; c04.l01); -इः + vowel → -इर्
(बुद्धिरेव; c04.l02); -अः before क् and प् stays (एकः काकः, पुनः पुनः). Forms: all T
(c01–c03); सुखी is a V2 chunk and an R1 cell. **Untaught: none.**

**Text A2 — the Volume 2 lion (v2.c06.l02 §17), unchanged, joined.**

> एकः सिंहो वने स्वपिति। एको मूषकः सिंहस्योपरि चलति। सिंहः क्रुद्धो भवति। स मूषकं
> गृह्णाति। मूषको वदति — मां मुञ्च! अहमपि तव मित्रम्। सिंहो हसति। स मूषकं मुञ्चति।
> एकदा सिंहो जाले बद्धो भवति। मूषक आगच्छति। स जालं कृन्तति। सिंहो मुक्तो भवति।
> न कोऽपि लघुः।
>
> *ekaḥ siṃho vane svapiti. eko mūṣakaḥ siṃhasyopari calati. siṃhaḥ kruddho bhavati. sa
> mūṣakaṃ gṛhṇāti. mūṣako vadati — māṃ muñca! aham api tava mitram. siṃho hasati. sa
> mūṣakaṃ muñcati. ekadā siṃho jāle baddho bhavati. mūṣaka āgacchati. sa jālaṃ kṛntati.
> siṃho mukto bhavati. na ko 'pi laghuḥ.*

Notes: -अः before स् stays (एकः सिंहः, मूषकः सिंहस्य; the doubled-sibilant option shown once);
-अः before ह् → ओ (सिंहो हसति: ह is voiced); no sandhi across the dash. **Untaught: none.**

**Text B1 — the course's telling in the past, with the 1.x details restored** (pause line
first in the lesson; joined line here):

1. कश्चित्काकस्तृष्णार्त आसीत्। — कश्चित् काकः तृष्णार्तः आसीत्। "A certain crow was tormented by thirst." (the 1.x word; पिपासितः given as its synonym)
2. स जलायेतस्ततोऽभ्रमत्। — सः जलाय इतस्ततः अभ्रमत्। "He wandered here and there for water."
3. तदा स एकं घटमपश्यत्। — तदा सः एकम् घटम् अपश्यत्। "Then he saw a pot."
4. घटेऽल्पं जलमासीत्। — घटे अल्पम् जलम् आसीत्। "There was a little water in the pot."
5. काक उपायमचिन्तयत्। — काकः उपायम् अचिन्तयत्। "The crow thought of a way."
6. स पाषाणान्घटेऽक्षिपत्। — सः पाषाणान् घटे अक्षिपत्। "He threw stones into the pot." (the 1.x plural)
7. शनैः शनैर्जलमुपर्यागच्छत्। — शनैः शनैः जलम् उपरि आगच्छत्। "Little by little the water came up."
8. काको जलमपिबत्, सुखी चाभवत्। — काकः जलम् अपिबत्, सुखी च अभवत्। "The crow drank the water and was happy."
9. बुद्धिर्बलाच्छ्रेष्ठा। — बुद्धिः बलात् श्रेष्ठा। "Intelligence is better than strength." (the 1.x moral: ablative "than", f. agreement)

Inventory: तृष्णार्तः (T: tatpuruṣa c05.l04 of तृष्णा + आर्तः, c06.l01 headwords); जलाय
(dative of purpose, T c01.l03); इतस्ततः (T, headword); अभ्रमत्, अपश्यत्, अचिन्तयत्,
अक्षिपत्, आगच्छत्, अपिबत्, अभवत्, आसीत् (T c03.l03); उपायम् (T); पाषाणान् (T c02.l01); शनैः
(T c04.l02); श्रेष्ठा (T c02.l03). **Untaught: none.** Not restored (V2 research note
0.4): निद्राम् करोति (unidiomatic).

### 5.2 v3.c06.l02 — the lion in dialogue; the doves and the mouse

**Text B2 — the course's dialogue telling, past tense, the 1.x lines restored:**

1. पुरा कश्चित्सिंहो वनेऽस्वपत्। — पुरा कश्चित् सिंहः वने अस्वपत्। "Long ago a certain lion was sleeping in the forest." (the imperfect: अस्वपत्, R4 whole word, c03.l03; present + स्म waits for c06.l03, G4)
2. तदैको मूषकस्तस्योपर्यधावत्। — तदा एकः मूषकः तस्य उपरि अधावत्। "Then a mouse ran over him." (the 1.x धावति)
3. सिंहः क्रुद्धोऽभवत्, मूषकं चागृह्णात्। — सिंहः क्रुद्धः अभवत्, मूषकम् च अगृह्णात्। "The lion grew angry and seized the mouse."
4. मूषकोऽवदत् — "हे सिंह! मां मुञ्च। अहमपि कदाचित्तव साहाय्यं करिष्यामि" इति। — मूषकः अवदत् — "हे सिंह! माम् मुञ्च। अहम् अपि कदाचित् तव साहाय्यम् करिष्यामि" इति। "The mouse said: 'Lion! Let me go. One day I too will help you.'"
5. सिंहोऽहसत्। "त्वं लघुरसि" इत्यवदत्, तं चामुञ्चत्। — सिंहः अहसत्। "त्वम् लघुः असि" इति अवदत्, तम् च अमुञ्चत्। "The lion laughed. 'You are small,' he said, and let him go."
6. एकदा सिंहो व्याधस्य जालेऽपतत्। — एकदा सिंहः व्याधस्य जाले अपतत्। "One day the lion fell into a hunter's net."
7. मूषकस्तस्य शब्दमशृणोत्, शीघ्रं चागच्छत्। — मूषकः तस्य शब्दम् अशृणोत्, शीघ्रम् च आगच्छत्। "The mouse heard his cry and came quickly."
8. स दन्तैर्जालमकृन्तत्। — सः दन्तैः जालम् अकृन्तत्। "He cut the net with his teeth."
9. सिंहो मुक्तोऽभवत्, अवदच्च — "सखे! त्वं सत्यं मम मित्रम्" इति। — सिंहः मुक्तः अभवत्, अवदत् च — "सखे! त्वम् सत्यम् मम मित्रम्" इति। "The lion was free, and said: 'Friend! You truly are my friend.'"
10. एवं मूषकः प्रत्युपकारमकरोत्। न कोऽपि लघुः। — एवम् मूषकः प्रत्युपकारम् अकरोत्। न कः अपि लघुः। "So the mouse returned the kindness. No one is small."

Inventory: all T except **करिष्यामि** "I will do" (G: "the future, Volume 4"); अस्वपत्,
अगृह्णात्, अशृणोत् are R4 whole words (L, c03.l03); साहाय्यम् and प्रत्युपकारः are this
lesson's headwords. **Correction to record (decision 2):** the 1.x line read अहम् तव सहायम्
करिष्यामि. MW gives सहायः m. "companion, helper" and "assistance" only as a compound's first
member; Apte gives साहाय्यम् "help". The course prints साहाय्यम् unless the Chapter 6 fact
base finds सहायं करोति "helps" attested in a text it can cite; then the 1.x wording is
restored and the headword is सहायः instead. The ledger stays 508 either way.

**Text A — Hitopadeśa 1 (Mitralābha), the doves and the mouse: eight sentences, verbatim,
with ellipses.** Each locus is the e-text's prose block after the verse named.

| # | Locus (GRETIL `hitop_u.htm`) | Joined text (Devanagari per §1.4) | IAST as the e-text prints it | Gloss |
|---|---|---|---|---|
| A1 | prose after Hit 1.2 | अस्ति गोदावरीतीरे विशालः शाल्मलीतरुः। तत्र नानादिग्देशादागत्य रात्रौ पक्षिणो निवसन्ति। | asti godāvarī-tīre viśālaḥ śālmalī-taruḥ \| tatra nānā-dig-deśād āgatya rātrau pakṣiṇo nivasanti \| | "On the bank of the Godāvarī there is a great silk-cotton tree. There, having come from lands in every direction, birds settle at night." |
| … | (the hunter, the net, the dove-king's warning and the fall: told in the bridge) | | | |
| A2 | prose after Hit 1.38 (Citragrīva speaks) | तन्मे मित्रं हिरण्यको नाम मूषिकराजो गण्डकीतीरे चित्रवने निवसति। | tan me mitraṃ hiraṇyako nāma mūṣika-rājo gaṇḍakī-tīre citra-vane nivasati \| | "So: my friend, the mouse-king Hiraṇyaka, lives in the Bright Forest on the Gaṇḍakī's bank." |
| … | (the doves fly to the burrow; the frightened mouse keeps silent: told in the bridge) | | | |
| A3 | prose after Hit 1.38 | चित्रग्रीव उवाच — सखे हिरण्यक! कथमस्मान्न सम्भाषसे? | citragrīva uvāca-sakhe hiraṇyaka ! katham asmān na sambhāṣase ? | "Citragrīva said: 'Friend Hiraṇyaka! Why do you not speak to us?'" |
| … | (he knows the voice and comes out: told in the bridge) | | | |
| A4 | prose after Hit 1.38 | आः! पुण्यवानस्मि प्रियसुहृन्मे चित्रग्रीवः समायातः। | āḥ ! puṇyavān asmi priya-suhṛn me citragrīvaḥ samāyātaḥ \| | "Ah! I am blessed: my dear friend Citragrīva has come." |
| … | (a verse on friendship; he sees them bound: told in the bridge) | | | |
| A5 | prose after Hit 1.39 | सखे! किमेतत्? | sakhe ! kim etat ? | "Friend! What is this?" |
| … | (the fruit of past deeds; the mouse moves to cut the king's bond: told in the bridge) | | | |
| A6 | prose after Hit 1.41 (Citragrīva) | मित्र! मा मैवं कुरु। | mitra ! mā maivaṃ kuru \| | "Friend! No — don't do that." |
| … | ("cut my followers' snares first, mine afterwards": told in the bridge) | | | |
| A7 | prose after Hit 1.41 (Hiraṇyaka) | हिरण्यकोऽप्याह — अहमल्पशक्तिः। दन्ताश्च मे कोमलाः। | hiraṇyako 'py āha-aham alpa-śaktiḥ \| dantāś ca me komalāḥ \| | "Hiraṇyaka too said: 'I am of little strength, and my teeth are soft.'" |
| … | (the mouse offers to free the king first; the king refuses; the mouse praises him: told in the bridge) | | | |
| A8 | prose after Hit 1.49 | एवमुक्त्वा तेन सर्वेषां कपोतानां बन्धनानि छिन्नानि। | evam uktvā tena sarveṣāṃ kapotānāṃ bandhanāni chinnāni \| | "Having said this, he cut the bonds of all the doves" (lit. "by him … [were] cut"). |

The bridge (English/Hindi, course-written) tells the omitted plot at every gap, and every
gap between two A-sentences is marked by a … row in the table above. Between A1 and A2: the
hunter scatters grains and spreads a net; the dove-king Citragrīva asks how there can be
rice grains in an empty forest; the doves land and are caught; they fly up together,
carrying the net, the hunter gives up the chase, and the doves ask their king what to do.
Between A2 and A3: they fly to the mouse's burrow, and Hiraṇyaka, afraid, keeps silent.
Between A3 and A4: he knows the voice and comes out. Between A4 and A5: he sees them bound
in the snares. Between A5 and A6: Citragrīva calls it the fruit of past deeds; Hiraṇyaka
moves to cut the king's bond first. Between A6 and A7: the king asks him to cut his
followers' snares first and his own afterwards. Between A7 and A8: the mouse offers to cut
the king's snare first and cites the policy of saving oneself; the king insists that his
followers be freed before him, and the mouse, pleased by his care for them, praises him.

| Form (pause) | Analysis | Status |
|---|---|---|
| अस्ति (opening) | "there is" | T v1.c05; formula c06.l03 |
| गोदावरीतीरे, गण्डकीतीरे | name + तीरम्, case-tatpuruṣa, loc. | names G; T c01.l02, c05.l04 |
| विशालः · शाल्मलीतरुः | adj. nom. · compound, -उ nom. | T c02.l02 · T c06.l02, c02.l03 |
| तत्र | adverb | T v1.c05 |
| नानादिग्देशात् | नाना + दिक् + देश, abl. | T c06.l02, c04.l03, c01.l02 |
| आगत्य | absolutive | L R5 (c06.l01) |
| रात्रौ | loc. f. -इ | T c02.l03 |
| पक्षिणः | -इन् nom. pl. | L R1 (c02.l03); पक्षी T |
| निवसन्ति, निवसति | prefixed verb, 3pl/3sg | T c01.l02, c03.l01 |
| तत् "so" · मे | adverbial तत् · enclitic gen. | T c05.l03 · T c05.l01 |
| मित्रम् | in apposition to the subject हिरण्यकः (the verb is निवसति): a noun in apposition keeps its own gender (n. beside m.) | T |
| हिरण्यकः नाम | name + नाम "by name" | name G; नाम T v1.c06.l02, used as X नाम Y in c05.l04's model चित्रग्रीवो नाम कपोतराजः; the formula is named in c06.l03 |
| मूषिकराजः | मूषिक (variant of मूषक) + -राज (5.4.91) | **G** |
| चित्रवने | karmadhāraya, loc. | T c05.l04 |
| चित्रग्रीवः | bahuvrīhi (name) | T c05.l04 (as example) |
| उवाच · आह | perfect chunks | C c03.l03 → v4.c03 |
| सखे · हिरण्यक | voc. of सखा · voc. -अ | T c05.l01 · T c01.l04 |
| कथम् · अस्मान् · न | | T v2.c01 · T c05.l01 · T |
| सम्भाषसे | सम् + भाषसे, Ā 2sg | L (c03.l02 + the upasarga card) |
| आः | interjection | **G** |
| पुण्यवान् | -वत् nom. (पुण्यम् owned) | **G** (R6 shape) |
| अस्मि | | T |
| प्रियसुहृत् | karmadhāraya; सुहृत् | T c05.l04; T c06.l02 |
| समायातः | -त of सम् + आ + √या "arrived" | **G** (R2 shape) |
| किम् एतत् | | T c05.l02 |
| मा मा एवम् कुरु | prohibitive + imperative | T c03.l04, c05.l03 |
| अल्पशक्तिः | bahuvrīhi | T c05.l04 |
| दन्ताः · कोमलाः · च · मे | nom. pl. + agreeing adj. | T c02.l01–l02 |
| एवम् · उक्त्वा | · absolutive | T c05.l03 · L R5 |
| तेन | instr. of तद्, the doer of a -त participle | T c05.l02; L R2 |
| सर्वेषाम् कपोतानाम् | gen. pl. | T c05.l02, c02.l01 |
| बन्धनानि · छिन्नानि | nom. pl. n. · -त of छिद् | T c06.l02 · **G** (R2 shape) |
| Seams | नानादिग्देशादागत्य (क्→ग्, त्→द्; c04.l03) · पक्षिणो, हिरण्यको, मूषिकराजो (c04.l02) · तन्मे, प्रियसुहृन्मे (c04.l03) · चित्रग्रीव उवाच (c04.l02) · कथमस्मान्न, किमेतत्, अहमल्प°, एवमुक्त्वा (c04.l03) · मैवं (c04.l01, c04.l03) · हिरण्यकोऽप्याह (c04.l02 + c04.l01) · दन्ताश्च (c04.l02) · मित्रं, सर्वेषां, कपोतानां (c04.l03); no sandhi across the dash | T |

**Gloss ratio:** about 53 words (names excluded); glossed: आः, पुण्यवान्, समायातः, मूषिकराजः,
छिन्नानि = **5, about 1 in 11.**

### 5.3 v3.c06.l03 — the monkey and the crocodile; the formula drill

**Text C — Pañcatantra 4 (Labdhapraṇāśa), frame story (vānara-makara-vṛttāntaḥ), Jha ed. as
in GRETIL.** Learner-text locus: "Pañcatantra 4, frame story, the opening prose" (B1–B4)
and "… the prose after the verses on the guest" (B5). Research note (Jha numbering): B1–B4
are the first four sentences of the prose after Jha 4.1 (after the heading line
तद्यथानुश्रूयते, R3); the block ends उक्तं च (R2) and four verses on hospitality (Jha
4.2–4.5) follow, **omitted and marked**; B5 is the first sentence of the prose after Jha 4.5.

| # | Locus (Jha numbering: research note only) | Joined text | Pause form / gloss |
|---|---|---|---|
| B1 | prose after Jha 4.1, s.1 | अस्ति कस्मिंश्चित्समुद्रोपकण्ठे महान् जम्बूपादपः सदाफलः। | अस्ति कस्मिंश्चित् समुद्रोपकण्ठे महान् जम्बूपादपः सदाफलः। "Near a certain sea-shore there is a great rose-apple tree, always in fruit." (The e-text leaves महान् जम्बू° unjoined; full sandhi gives महाञ्जम्बू°, c04.l04.) |
| B2 | s.2 | तत्र च रक्तमुखो नाम वानरः प्रतिवसति स्म। | तत्र च रक्तमुखः नाम वानरः प्रतिवसति स्म। "And there lived a monkey named Raktamukha ('Red-face')." |
| B3 | s.3 | तत्र च तस्य तरोरधः कदाचित्करालमुखो नाम मकरः समुद्रसलिलान्निष्क्रम्य सुकोमलबालुकासनाथे तीरोपान्ते न्यविशत। | तत्र च तस्य तरोः अधः कदाचित् करालमुखः नाम मकरः समुद्रसलिलात् निष्क्रम्य सुकोमलबालुकासनाथे तीरोपान्ते न्यविशत। "And one day, under that tree, a crocodile named Karālamukha ('Gape-jaw') came out of the sea-water and settled at the edge of the shore, which was spread with very soft sand." |
| B4 | s.4 | ततश्च रक्तमुखेन स प्रोक्तः — भोः! भवान् समभ्यागतोऽतिथिः। तद्भक्षयतु मया दत्तान्यमृततुल्यानि जम्बूफलानि। | ततः च रक्तमुखेन सः प्रोक्तः — भोः! भवान् समभ्यागतः अतिथिः। तत् भक्षयतु मया दत्तानि अमृततुल्यानि जम्बूफलानि। "Then Raktamukha said to him: 'Sir! You are a guest who has come to us. So please eat these rose-apples I give you; they are like nectar.'" |
| … | (उक्तं च and four verses on the guest, Jha 4.2–4.5: omitted) | | |
| B5 | prose after Jha 4.5, s.1 | एवमुक्त्वा तस्मै जम्बूफलानि ददौ। | एवम् उक्त्वा तस्मै जम्बूफलानि ददौ। "Having said this, he gave him rose-apples." |

| Form | Analysis | Status |
|---|---|---|
| कस्मिंश्चित् | loc. of कश्चित् | T c05.l02; seam c04.l03 |
| समुद्रोपकण्ठे | tatpuruṣa, loc.; उपकण्ठ "vicinity" | T c05.l04, c04.l01; **G** उपकण्ठ |
| महान् | -अत् nom. | C c06.l03 (R6) → v4.c05 |
| जम्बूपादपः · सदाफलः | compound · bahuvrīhi | T c06.l03, c05.l04 |
| रक्तमुखः, करालमुखः | names (bahuvrīhi) | names G |
| वानरः, मकरः | nom. | T c06.l03 |
| प्रतिवसति स्म | प्रति + वसति; present + स्म | L (upasarga card) + T c06.l03 (3.2.118) |
| तस्य तरोः अधः | gen. + अधः | T c05.l02, c02.l03, c05.l03 |
| कदाचित् | | T c05.l02 |
| समुद्रसलिलात् | tatpuruṣa, abl. | T c05.l04, c01.l02, c06.l03 |
| निष्क्रम्य | absolutive after a prefix | L R5; the stem **G** |
| सुकोमलबालुकासनाथे | "furnished with very soft sand", loc. | **G** (structure shown) |
| तीरोपान्ते | tatpuruṣa + guṇa seam; उपान्त "edge" | T c04.l01; **G** उपान्त |
| न्यविशत | नि + अविशत, Ā imperfect 3sg | L (c03.l03 augment + c04.l01 yaṇ; Ā by 1.3.17 नेर्विशः, Teacher Notes) |
| ततः च · सः | | T |
| रक्तमुखेन … प्रोक्तः | instr. doer + -त | L R2; **G** प्रोक्तः |
| भोः · भवान् | | T |
| समभ्यागतः अतिथिः | -त adj. + -इ noun | **G** समभ्यागतः; T अतिथिः c02.l03 |
| तत् · भक्षयतु | "so" · 3sg ipv. with भवान् | T c05.l03 · T c03.l04 |
| मया दत्तानि | instr. + -त of ददाति | L R2 |
| अमृततुल्यानि · जम्बूफलानि | tatpuruṣa · compound, acc. pl. n. | T c05.l04 |
| एवम् उक्त्वा · तस्मै | | T c05.l03 · L R5 · T c05.l02 |
| ददौ | perfect 3sg "gave" | **G** → v4.c03 |
| Seams | समुद्रोपकण्ठे, तीरोपान्ते (c04.l01) · रक्तमुखो, करालमुखो (c04.l02) · तरोरधः (c04.l02) · समुद्रसलिलान्निष्क्रम्य (c04.l03) · न्यविशत (c04.l01) · ततश्च (c04.l02) · स प्रोक्तः (6.1.132) · समभ्यागतोऽतिथिः (c04.l02) · तद्भक्षयतु (c04.l03) · दत्तान्यमृत° (c04.l01) · एवमुक्त्वा, कस्मिंश्चित् (c04.l03) | T |

**Gloss ratio:** 44 words (names excluded); glossed: उपकण्ठ, निष्क्रम्य, सुकोमलबालुकासनाथे,
उपान्त, प्रोक्तः, समभ्यागतः, ददौ = **7, about 1 in 6.** B3 is the lesson's "stretch
sentence".

**The formula drill (first sentences only; verified loci):**

| Source (learner-text locus) | Locus (research note) | Opening |
|---|---|---|
| Hitopadeśa, kathāmukha | prose after Hit 0.9 | अस्ति भागीरथीतीरे पाटलिपुत्रनामधेयं नगरम्। (asti bhāgīrathī-tīre pāṭaliputra-nāmadheyaṃ nagaram) — G नामधेयम् "name" |
| Hitopadeśa 1 | prose after Hit 1.2 | A1 (above) |
| Pañcatantra 1, the lion Madotkaṭa, first sentence | prose after Jha 1.311 | अस्ति कस्मिंश्चिद्वनोद्देशे मदोत्कटो नाम सिंहः प्रतिवसति स्म। (asti kasmiṃścid vanoddeśe madotkaṭo nāma siṃhaḥ prativasati sma; e-text typo "prativasa ti") — G उद्देशः "region" |
| Pañcatantra 1, the jackal Caṇḍarava, first sentence | prose after Jha 1.282 | अस्ति कस्मिंश्चिद्वनोद्देशे चण्डरवो नाम शृगालः प्रतिवसति स्म। (… caṇḍaravo nāma śṛgālaḥ prativasati sma) — G शृगालः "jackal" |

### 5.4 v3.c06.l04 — three verses

**(a) Hitopadeśa 0.6** (prastāvikā; `Hit_0.6`, verified)

> विद्या ददाति विनयं विनयाद्याति पात्रताम्।
> पात्रत्वात् धनमाप्नोति धनाद्धर्मं ततः सुखम्॥
> *vidyā dadāti vinayaṃ vinayād yāti pātratām | pātratvāt dhanam āpnoti dhanād dharmaṃ
> tataḥ sukham ||*

Pause: विद्या ददाति विनयम् विनयात् याति पात्रताम्। पात्रत्वात् धनम् आप्नोति धनात् धर्मम् ततः
सुखम्॥ Anvaya: विद्या विनयम् ददाति। (नरः) विनयात् पात्रताम् याति। पात्रत्वात् धनम् आप्नोति।
धनात् धर्मम्, ततः सुखम् (आप्नोति)। "Learning gives discipline; through discipline one comes
to worthiness; through worthiness one gains wealth; through wealth, dharma; and from that,
happiness." The e-text prints पात्रत्वात् धनम् unjoined; strict sandhi gives पात्रत्वाद्धनम्
(c04.l04's "editions vary").

| Form | Status |
|---|---|
| विद्या, ददाति, विनयम्, याति, आप्नोति, धनम्, धर्मम्, सुखम्, ततः | T (c02.l02, c01.l03, c06.l04, v1–v2) |
| विनयात्, धनात् | T c01.l02 — the ablative of cause "through", a reading note on the अपादान case |
| पात्रताम् · पात्रत्वात् | -ता, -त्व abstracts of the owned पात्र: L ("-ता/-त्व = -ness", like the owned एकता, ममता); formation v4.c04 |
| Seams | विनयं, धर्मं (c04.l03) · विनयाद्याति, धनाद्धर्मम् (c04.l03) · धनमाप्नोति (c04.l03) |

**Untaught:** none beyond the labelled -ता/-त्व pair.

**(b) Hitopadeśa 1.71** (`Hit_1.71`, verified; also in Pañcatantra 5, Jha 5.37 in the
e-text, verified — the Jha number for the research note only)

> अयं निजः परो वेति गणना लघुचेतसाम्।
> उदारचरितानां तु वसुधैव कुटुम्बकम्॥
> *ayaṃ nijaḥ paro veti gaṇanā laghu-cetasām | udāra-caritānāṃ tu vasudhaiva
> kuṭumbakam ||*

Pause: अयम् निजः परः वा इति गणना लघुचेतसाम्। उदारचरितानाम् तु वसुधा एव कुटुम्बकम्॥ "'This one
is one of us, that one an outsider' — that is how the small-minded count; for those whose
conduct is noble, the earth itself is family."

| Form | Status |
|---|---|
| अयम्, निजः, परः, वा, इति, तु | T c05.l02, c04.l01–l02 |
| गणना | **G** "reckoning" (ā-stem, the class T) |
| लघुचेतसाम् | **G** bahuvrīhi on the s-stem चेतस् "mind", gen. pl. (s-stems v4.c05); लघु T |
| उदारचरितानाम् | T bahuvrīhi c05.l04 (the lesson's own example), gen. pl. |
| वसुधा एव | T c06.l04; vṛddhi seam c04.l01 |
| कुटुम्बकम् | L: the owned कुटुम्बम् + -क, which adds nothing here |
| Seams | अयं (c04.l03) · परो (c04.l02) · वेति (c04.l01) · वसुधैव (c04.l01) · उदारचरितानां (c04.l03) |

**Context (HISTORY, to cite):** in the Hitopadeśa the verse is spoken by the jackal in the
story of the deer, the crow and the jackal; the prose before 1.70 reads इत्याकर्ण्य स जम्बुकः
सकोपमाह, and 1.71 follows as his second verse (अन्यच्च). He befriends the deer intending to
eat him; the crow distrusts him. The line is quoted today as a motto of universal kinship;
no modern institutional use is mentioned (decision 3). The Mahā Upaniṣad locus prints only
if Chapter 6 research verifies it on the web and adds a REFERENCES key; otherwise the line
does not print (decision 3).

**(c) Pañcatantra 1, the lion Bhāsuraka and the hare (verse introducing the story)**
(learner-text locus; research note: Jha 1.237, `Panc_1.237`, verified; Damanaka to
Karaṭaka, introducing the lion Bhāsuraka and the hare). **Variant:** Hitopadeśa 2.122 (`Hit_2.122`, verified) reads
बुद्धिर्यस्य बलं तस्य … and पश्य सिंहो मदोन्मत्तः. The course prints the Pañcatantra
reading and notes the Hitopadeśa variant.

> यस्य बुद्धिर्बलं तस्य निर्बुद्धेस्तु कुतो बलम्।
> वने सिंहो मदोन्मत्तः शशकेन निपातितः॥
> *yasya buddhir balaṃ tasya nirbuddhes tu kuto balam | vane siṃho madonmattaḥ śaśakena
> nipātitaḥ ||*

Pause: यस्य बुद्धिः बलम् तस्य निर्बुद्धेः तु कुतः बलम्। वने सिंहः मदोन्मत्तः शशकेन निपातितः॥
"Whoever has intelligence has strength; but for one without intelligence, where is
strength? In the forest a lion, mad with pride, was brought down by a hare."

| Form | Status |
|---|---|
| यस्य … तस्य | T c05.l02 (the cells), c05.l03 (the relative sentence, G6): relative–correlative genitive, "who has … has" |
| बुद्धिः, बलम्, कुतः, वने, सिंहः | T |
| निर्बुद्धेः | T: bahuvrīhi (निर् + बुद्धि), gen. sg. m. -इ (c02.l03, c05.l04) |
| तु | T c04.l02 |
| मदोन्मत्तः | मदः T c06.l04 + उन्मत्तः **G** "maddened"; case-tatpuruṣa (मदेन उन्मत्तः) + guṇa seam |
| शशकेन … निपातितः | instr. doer + -त: L R2; शशकः T c01.l03; निपातितः **G** (causative, v4.c03) |
| Seams | बुद्धिर्बलं (c04.l02) · निर्बुद्धेस्तु (c04.l02) · कुतो, सिंहो (c04.l02) · बलं (c04.l03) · मदोन्मत्तः (c04.l01) |

**(d) The thread verses, closed.** Hit 0.36 (उद्यमेन हि सिध्यन्ति …) is re-read at l04's
§3 with no gloss (the e-text prints *nahi*; keep Volume 2's न हि); सिध्यन्ति's class-4 stem
and सुप्तस्य (R2) are L. The benediction (V1) is parsed in full at l01's §3:

> सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥
> Pause: सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चित् दुःखभाक् भवेत्॥

Taught: सर्वे (c05.l02), भवन्तु सन्तु पश्यन्तु (c03.l04), भद्राणि (c02.l01), कश्चित्
(c05.l02), the two joins (c04.l03). L: सुखिनः (R1), मा … भवेत् (c03.l04's labelled rare
construction). G: निरामयाः (bahuvrīhi, निर् + आमयः "illness"), दुःखभाक् (root noun -भाज्
"sharer"). Keep v1.c06.l04's source label unchanged.

### 5.5 The residue, and what it changed in the syllabus

| Residue | Where | Decision |
|---|---|---|
| Absolutive -त्वा/-य | Hit A1, A8; Panc 4 B3, B5; T5 | R5 card in **c06.l01**, still before every text that needs it (moved from c05.l03 to lighten it, G6; function-first had c06.l03, too late for A1) |
| -त participle as a past, instrumental doer | A8, B4, Jha 1.237, T5, 0.36 | R2 card in **c02.l05** |
| -इन् stems | A1, the benediction | R1 card in **c02.l03**; पक्षी headword |
| -यते passive | Panc 4's heading तद्यथानुश्रूयते | R3 card in **c03.l02** |
| -वत्/-अत् nominatives | A4, B1 | R6 card in c05.l01; महान् headword c06.l03 |
| Perfect forms | A3, A7, B5, T5 | उवाच, आह chunks (c03.l03, beside the imperfect chunk अब्रवीत्); ददौ glossed |
| Future | B2 करिष्यामि | glossed; no future preview (D14) |
| -ता / -त्व | 0.6 | L, with the owned एकता, ममता |
| s-stems | लघुचेतसाम्; मनसः in मनोरथः's vigraha | glossed; v4.c05 |
| Causative | निपातितः | glossed; v4.c03 |
| -राज at a compound's end; मूषिक | A2; c05.l04's कपोतराजः | glossed; 5.4.91 in v4.c04 |
| Class-7 imperative छिन्धि; छेत्स्यति | avoided: the passage stops before them | — |
| Single words | उपकण्ठ, उपान्त, सुकोमलबालुकासनाथे, आः, पुण्यवान्, समायातः, प्रोक्तः, समभ्यागतः, गणना, उन्मत्तः, नामधेयम्, उद्देशः, शृगालः, निरामय, -भाक् | glossed display; candidates for Volume 5 |

### 5.6 T5 — the unseen passage of the Volume 3 exam (c06.l05, task C)

**Locus (corrected):** learner text: "Pañcatantra 4, frame story, the prose after the
verses on the guest" (Jha ed. as in GRETIL; research note: the prose after Jha 4.5). B5 is
that block's first sentence; its **second and third sentences are
omitted** (सोऽपि तानि भक्षयित्वा … भूयोऽपि स्वभवनमगात्। एवं नित्यमेव तौ वानरमकरौ …
सुखेन तिष्ठतः।) and replaced on the page by an ellipsis and one English line ("The crocodile
eats, goes home, and the two friends meet every day."); T5 is the block's fourth and fifth
sentences, followed by the whole of the next short prose block (स आह — भद्रे! … प्रयच्छति).
Verbatim:

> … सोऽपि मकरो भक्षितशेषाणि जम्बूफलानि गृहं गत्वा स्वपत्न्यै प्रयच्छति। अथान्यतमे दिवसे
> तया स पृष्टः — नाथ! क्वैवंविधान्यमृतफलानि प्राप्नोषि? स आह — भद्रे! ममास्ति
> परमसुहृद्रक्तमुखो नाम वानरः। स प्रीतिपूर्वकमिमानि फलानि प्रयच्छति।

Pause: सः अपि मकरः भक्षितशेषाणि जम्बूफलानि गृहम् गत्वा स्वपत्न्यै प्रयच्छति। अथ अन्यतमे दिवसे
तया सः पृष्टः — नाथ! क्व एवंविधानि अमृतफलानि प्राप्नोषि? सः आह — भद्रे! मम अस्ति
परमसुहृत् रक्तमुखः नाम वानरः। सः प्रीतिपूर्वकम् इमानि फलानि प्रयच्छति। "The crocodile, for
his part, takes home the rose-apples left over from eating and gives them to his wife.
Then one day she asked him: 'My lord, where do you get such nectar-fruits?' He says: 'My
dear, I have a best friend, a monkey named Raktamukha. He gives me these fruits with
affection.'"

| Form | Status |
|---|---|
| सः अपि · मकरः · जम्बूफलानि · गृहम् | T c05.l02 · c06.l03 · c06.l03 · v2 |
| स्वपत्न्यै | T: स्वः (c05.l02) + पत्नी (c02.l02), dat. f. -ई |
| प्रयच्छति (×2) | T c03.l04 |
| अथ · दिवसे · तया | T c03.l03 · c02.l01 · c05.l02 |
| नाथ | T voc. of नाथः (c04.l03) |
| क्व | T c05.l03 |
| अमृतफलानि | T built compound (अमृत owned) |
| प्राप्नोषि | L: प्र + आप्नोषि (आप्नोति c06.l04; the upasarga card) |
| आह | C c03.l03 |
| भद्रे | T voc. f. of the owned भद्र (c02.l02) |
| मम अस्ति · परमसुहृत् · नाम · वानरः · इमानि · फलानि | T (c05.l04, c06.l02, c05.l02) |
| रक्तमुखः | name (met in c06.l03) |
| **Glossed (6):** भक्षितशेषाणि "the left-overs", गत्वा "having gone", अन्यतमे "on a certain (day)", पृष्टः "asked", एवंविधानि "of this kind", प्रीतिपूर्वकम् "with affection" | G |
| Seams | सोऽपि, स आह, मकरो (c04.l02) · अथान्यतमे, क्वैवं°, ममास्ति (c04.l01) · °विधान्यमृत° (c04.l01) · परमसुहृद्रक्त° (c04.l03) · °कमिमानि (c04.l03) | T |

**Gloss ratio: 6 of 33 words (34 with the name रक्तमुखः; names excluded), about 1 in 5.5.**
This sets exit can-do 2 at "no more than one word in five". **Retake form (decision 8):**
the Hitopadeśa A-passage's unread continuation is too dense (छिन्धि, छेत्स्यसि); Chapter 6
research measures the candidate, Pañcatantra 4's next block (अथ तयाभिहितम् …); if it needs
more than one gloss in five words, the retake is the same passage (T5) after two weeks.

---

## 6. Left deliberately to Volume 4

| Topic | Volume 3 status | Volume 4 home |
|---|---|---|
| The Māheśvara sūtras, pratyāhāras (incl. *sup*, *tiṅ* as pratyāhāras), the Aṣṭādhyāyī's architecture, anubandhas | not used beyond the chapter names | v4.c01, v4.c02 |
| Kāraka theory: 1.4.23–55 and the vibhakti sūtras 2.3.1 ff.; upapada vs kāraka vibhakti; the double accusative (1.4.51) | functional map; sūtras in Teacher Notes | v4.c05 |
| Roots (धातुः), the ten present classes as a system, stem formation with the guṇa/vṛddhi grades applied (शृणोति, गृह्णाति, स्वपिति, तिष्ठति, यच्छति) | stems given whole | v4.c03 (tracker row 7) |
| The six lakāras outside the present system: perfect (लिट्, परोक्षे — IR-019), aorist (and मा + aorist), both futures, conditional, benedictive; the √भू six-lakāra table | उवाच, आह chunks (अब्रवीत्, also a chunk, is the imperfect of class-2 ब्रू; its stem is the v4.c03 item); ददौ, करिष्यामि glossed | v4.c03 |
| कृ as ubhayapadī (IR-020); voice; passive and impersonal conjugation (IR-023); causative | Ā as a second ending set; R3 | v4.c03, v4.c05 |
| Participles (-अत्, -मान, -त as formation; IR-024), absolutives, infinitives (the 1.x gerund/infinitive lesson) | R2, R5 recognition | v4.c04 |
| कृत् and तद्धित derivation (-ता, -त्व, -मत्, -वत्, -इन्, -क, agent -तृ as a process; IR-005) | products met, not processes | v4.c04 |
| The rājan example of aṅga/pada/bha (the one declension v4.c02 reads as architecture) | नृपः used instead (c01.l04) | **v4.c02** |
| Consonant-stem declension as a system: राजन्'s full paradigm, -इन् (R1), -अस् (s-stems: चेतस्, मनस्), -मत्/-वत्/-अत् beyond the listed cells (R6), root nouns (दिक्/दिश्, सुहृत्/सुहृद्, -भाज्), ū-stems (जम्बूः), सखि, पति, neuter i/u (मधु, वारि); the feminine of i/u/ṛ adjectives; नप्तृ, नृ and neuter ṛ-stems | R1, R6; nominatives headworded | **v4.c05** (प्रयोगाः विभक्तिविस्तारश्च) |
| Internal sandhi rules: ṇatva (8.4.1–2), ṣatva (8.3.59), guṇa and vṛddhi defined as substitutes (1.1.1–2; IR-016, IR-021; their use in stem formation is v4.c03) | observed and named (the s → ṣ law named in c04.l04) | **v4.c02** (D18); 8.4.1–2 may be read as sūtras in v4.c06 |
| Compound accent and the इन्द्रशत्रु contrast (IR-026); samāsānta (5.4.91 राजाहस्सखिभ्यष्टच्); prādi, gati, upapada as kinds | four kinds; prādi and upapada as labels | **v4.c04** |
| -तर / -तम (comparative and superlative) | deferred (c02.l02) | v4.c04 |
| यावत् … तावत्; the -वत् / -मात्र adverbs; gati prefixes | deferred (c05.l03) | v4.c04 |
| The locative and genitive absolute | deferred (c01.l02, c01.l04) | v4.c05 |
| Numeral declension (द्वि–चतुर् oblique cells, 5–19 obliques, ordinals, numeral syntax) | nom./acc. by gender | v4.c05 (D11) |
| The 1.x meta-rules (8.2.1, 1.1.56, 1.4.2); sūtra reading word by word | sūtras quoted in translation | v4.c06 |
| Vedic forms, accent, the Ṛgveda padapāṭha in detail | one TRADITION line | v5.c03 |
| Metre (anuṣṭubh) and अन्वय as a commentarial method in depth | rhythm by ear; anvaya as a reading procedure | v5.c04, v5.c01 |

---

## 7. Decisions taken at synthesis, errors fixed, the editor's decisions, and the critique's fixes

### 7.1 Every error the judges found, and its fix

| # | Error (design) | Fix in this plan |
|---|---|---|
| E1 | ṇatva contrast "हस्तेन, जालेन, दण्डेन, रथेन (a dental blocks it)" — three of four have no trigger (FF); "देवेन, सिंहेन, शशकेन" given as blocked (RB) | three columns in c01.l03: trigger → ण · no trigger · trigger blocked (रथेन, पर्वतेन, अर्जुनेन, पाषाणेन); interveners stated per 8.4.2 (Teacher Notes), word-final न exempt (8.4.37) |
| E2 | सुप्रभातम् filed as karmadhāraya (FF) | labelled prādi tatpuruṣa (2.2.18, Teacher Notes); karmadhāraya examples नीलकमलम्, चित्रवनम्, प्रियमित्रम् (all members owned by c05.l04; G3, G11) |
| E3 | "recognise the eight sūtras" vs ~22 quoted (FF) | one counted list of 28 (§4.0.4) and the can-do says 28 |
| E4 | exam task cross-reference "(§5.6)" wrong (FF) | the exam text is T5, §5.6, and the reference is checked |
| E5 | स्वः "own" vs स्वः "we two are" unflagged (FF) | §12 warning in c05.l02, pre-flagged in c03.l01 |
| E6 | numeral gender pulled into V3 against v2.c03's "Volume 4" (FF, RB) | D11: taught (nom./acc.), with a v2.c03 erratum PR |
| E7 | मा + optative as a general wish pattern (FF) | c03.l04: "very rare" (Whitney §579b); the benediction's construction is read, never built |
| E8 | "dat. = abl. in the plural always" (PE) | the free-facts card restricts it to nouns and third-person pronouns, and prints अस्मभ्यम् ≠ अस्मत् |
| E9 | "six constants" for "every noun" (PE) | Whitney's "almost or quite unbroken" printed, with देवैः and the -न्- genitives as listed exceptions |
| E10 | "four feminine endings" naming three (PE) | the feminine set is called by its three endings -ऐ -आः -आम् (c02.l02 Δ card) |
| E11 | garbled IR-017 line (PE) | "इको यणचि is 6.1.77 (the 1.x book cited 1.1.45)", c04.l01 |
| E12 | PE ledger rule 7 (verb "upgrade rows") contradicts §8 rules 3–4 | rejected; rule 8 above keeps rule 4 (D6) |
| E13 | वाङ्मयम् as word-edge sandhi (PE) | not used; -मय is a suffix (a taddhita, v4.c04; G8) |
| E14 | ṇatva given two V4 homes (PE) | one home, v4.c02 (D18) |
| E15 | Hit loci incomplete and out of order; "काककूर्ममृगाखवः" as a quotation (PE) | PE's passage not used; every A-sentence has its own verified locus in reading order; no course coinage attached to a locus |
| E16 | "*sup* … from its last syllable" (PE) | c01.l05 Teacher Notes: *sup* is a pratyāhāra from सु to the final marker प् |
| E17 | T5 called "directly continuing B5. Verbatim." (RB) | two omitted sentences marked with an ellipsis; locus corrected (§5.6) |
| E18 | स्वपत्न्यै listed as taught though पत्नी is unowned (RB) | पत्नी headworded in c02.l02; the ratio re-measured (6 of 33, names excluded; G15) |
| E19 | "न with the imperative" as a prohibitive (RB) | मा + imperative (Whitney §579c) and न + optative (§580), c03.l04 |
| E20 | "the 1.x past of गच्छ goes to v4.c03" vs "arrives drilled" (RB) | the past (imperfect) is c03.l03; only the 1.x future goes to v4.c03 |
| E21 | ṛ-stems never declined, breaking V1 promises (RB) | c02.l04 keeps them (T5), with ॠ in पितॄन्, मातॄणाम् and मातः |
| E22 | "महान् — -मत्/-महत् stem" (RB) | महत् is an -अत् stem (strong stem महान्त्-), c06.l03 and R6 |
| E23 | proper names "never ledgered (rule 5)" against the अर्जुनः precedent (FF) | rule 12: names count only when headworded for the learner's own sentences |
| E24 | "यत्र धूमः तत्र अग्निः (the logicians' stock example)", "यथा राजा तथा प्रजा (saying)" unsourced (FF) | replaced by course sentences (यत्र वृक्षास्तत्र पक्षिणः; यथा गुरुस्तथा शिष्यः), labelled as such |
| E25 | Caṇḍarava as the unseen exam text: 6 glosses for ~16 words, an untaught finite participle (FF) | the exam text is T5 (about 1 in 5.5; G15); Caṇḍarava's first sentence only, in c06.l03's formula drill |
| E26 | T2 silently changing the V2 text (धावति for चलति) (RB) | V2 texts reprinted unchanged (Text A); 1.x details only in Text B (D21) |
| E27 | c02.l04 quoting twelve kāraka sūtras in a "functional" lesson (RB) | one TRADITION line in learner text; the sūtras in Teacher Notes (D16) |
| E28 | upasarga list cut to 10, IR-025 not delivered (PE) | all 22 on the c05.l03 reference card |
| E29 | exams longer than one sitting (all three) | chapter exams timed to 45 minutes; the Volume 3 exam is two sittings |

### 7.2 Decisions (with reasons)

| # | Decision | Reason |
|---|---|---|
| D1 | **Spine: function-first.** | All three judges ranked it first: the most complete coverage of the tracker, the roadmap, the preservation map and every V1–V2 promise; ledger rules compatible with §8; register discipline. |
| D2 | **Chapter 6 texts from reading-backward** (Hitopadeśa doves/mouse; Pañcatantra 4 opening; Pañcatantra 1's lion-and-hare verse, Jha 1.237; T5), with the T/C/L/G inventory and measured gloss ratios. | Verified verbatim; gloss ratios about 1 in 11, 1 in 6 and 1 in 5.5 (re-measured, G15) against function-first's denser kathāmukha/Madotkaṭa openings and Caṇḍarava. |
| D3 | **The §17 serial** (the Hitopadeśa frame retold through c01–c05), labelled "our retelling". | Makes c06.l02 the original of a known story; recycles the backward-planned words (कपोतः, पाशः, विवरम् …) so they do not decay. |
| D4 | **Memory budget: eight memorised tables + Δ cards** (paradigm-economy's idea, adapted to the spine). | The clearest load instrument; turns नदी, मति/धेनु, माता, एतद्/यद्/किम्, loṭ/liṅ into small deltas. |
| D5 | **R-cards placed before Chapter 6 needs them:** R1 c02.l03, R2 c02.l05, R3 c03.l02, R5 c06.l01 (moved from c05.l03 by G6, still before A1) (plus R4, R6). | All judges: function-first's single late label (c06.l03) is too late for Hitopadeśa prose. |
| D6 | **Reject paradigm-economy's ledger rule 7.** ददाति counts as its own lemma beside the counted ददातु; कुरु, अकरोत् are cells. | §8 rule 3 confines upgrade rows to nouns and adjectives; rule 4 counts whole-word chunks. |
| D7 | **Ledger: 148 new, exit 508**, cap 8 per lesson; names excluded (rule 12); absolutives and other R forms display (rule 13); उवाच, आह, अब्रवीत् count as chunks (rule 8). | Within the sanskritist's 490–513 range; the pedagogue's cap of 8; the rule-4 chunk precedent kept for finite verbs only. |
| D8 | **One grammar point per lesson; pairs and cards declared.** Chapter 1's case pairs are accepted as one function each; the dual is a card in c02.l04; the optative is a card in c03.l04 (G5); the upasarga list is a card in c05.l03 and R5 a card in c06.l01 (G6). | The house rule, applied honestly: a card has no production target. **Recorded exceptions:** two second-item cards carry listed ✓ cells by decision: the dual card in c02.l04 (nom./acc. ✓; D13, decision 10) and the optative card in c03.l04 (3rd person, with स्यात्, स्युः, कुर्यात्, लभेत ✓; G5, D14: IR-040's "four common lakāras, drilled"). The upasarga reference card and the R-cards have no production target. Δ cards are cells of their lesson's own table, not second items, and keep the ✓/◐ marks their lesson block prints. |
| D9 | **Split before join** in every Chapter 4 lesson. | The learner's real task is reading print. |
| D10 | **Joined text:** at taught seams only in c04.l01–l03; fully joined over the pause form from c04.l04; learner compositions joined from c05.l01. Printing convention §1.4 enters STYLE_GUIDE §3 before c04. | Avoids paradigm-economy's preview of untaught seams; gives two more chapters of joined reading than reading-backward. All judges asked for one settled convention. |
| D11 | **Numerals:** 1, 3, 4, 5–10 nom./acc. with m./n. nouns (c02.l01); the feminines (c02.l02); 2 with the dual (c02.l04). Obliques and the numeral system stay v4.c05. **Erratum PR to v2.c03.l01–l03** (approved, decision 7; ships in the same release as v3.c02): every "numeral gender … Volume 4" line becomes "gender in counting: Volume 3 (v3.c02); the full numeral system: Volume 4 (v4.c05)". **With it, a ROADMAP PR** changes the preservation-map row "tad/idam/numeral paradigms" to "v3.c02 (numeral nom./acc.), v3.c05 (tad/idam), v4.c05 (numeral system)" (G21). | The V2 exam's tracker (the latest shipped statement) sends कति agreement to Volume 3; a B1 learner must say "two girls"; the preservation map puts numeral paradigms at v3.c05 and v4.c05. Keeping V3 to nom./acc. honours the rest of v2.c03's fence. |
| D12 | **ṛ-stems stay in V3** (c02.l04). | V1 promises (मातृ/माता; ॠ in the genitive plural; मातः). |
| D13 | **Dual production:** nom./acc. of nouns and 3rd-person verbs ✓; the rest ◐. One formula for verbs everywhere (G7): singular and plural in all persons, and the 3rd-person dual, ✓; 1st- and 2nd-person duals ◐. Confirmed by decision 10. | All three judges' recommendation; low prose frequency. |
| D14 | **Four lakāras = the present system** (laṭ, laṅ, loṭ, vidhiliṅ); no future preview; करिष्यामि glossed. | IR-040's "four common lakāras, drilled"; the c06 texts were chosen to avoid the future. |
| D15 | **Production subsets** for the heavy lessons: c02.l03 (masc. i/u ✓; fem. nom./acc./instr. ✓, the optional fem. cells ◐), c02.l04 (ṛ singular, nom./acc. pl., voc.), c03.l03 and c03.l04 (P by the D13 formula; c03.l04's optative 3rd person only, G5; Ā listed cells, c03.l03's Ā laṅ अलभत only, G4; अस्/कृ listed cells), c04.l02 (-अः and -इः/-उः rows ✓), c05.l01–l02 (listed cells; इदम् key cells). | The pedagogue's load map; every subset is printed in the lesson block. |
| D16 | **Kāraka sūtras in Teacher Notes;** one TRADITION line in learner text. | ROADMAP: theory waits for v4.c05; two of three judges. |
| D17 | **Fillmore note conditional:** prints in c02.l05 only with `fillmore1968` and a scholarly-comparison key; else it moves to v4.c05. | Preservation map vs the missing REFERENCES keys. |
| D18 | **ṇatva and ṣatva rules: v4.c02** (internal sandhi). | One home, as the judges asked. |
| D19 | **मा + imperative** taught as the later ordinary prohibitive, with one line on the older मा + aorist; **न + optative** for "one should not". | Whitney §§579c, 580; the Hitopadeśa uses मा … कुरु. |
| D20 | **Sūtras quoted: 28** (§4.0.4), adding paradigm-economy's 7.3.101, 3.4.85–86, 6.1.132 and 8.1.22 to function-first's set; the rest in Teacher Notes. | Each states an observation in one line; the नमस्ते thread and the V2 "stretch" get their rules. |
| D21 | **V2 stories reprinted unchanged as Text A; 1.x details in Text B** (B1 crow c06.l01; B2 lion c06.l02). | Reviewed text is not mutated (house editor); the preservation map's "original form" is still delivered. |
| D22 | **तृष्णार्तः restored** as a built tatpuruṣa (तृष्णा + आर्तः headwords). | V2 research note 0.3: "not wrong"; now readable without a chunk. |
| D23 | **Verses in c06.l04 limited to three** (Hit 0.6, Hit 1.71, Pañcatantra 1's lion-and-hare verse, Jha 1.237); 0.36 and the benediction close as thread verses; Hit 0.37 dropped. | The pedagogue's cap; 0.37 needs a causative participle and an -इन् stem in one couplet. |
| D24 | **Exam unseen text: T5**, ellipsis and corrected locus; Caṇḍarava only as a formula-drill sentence. | Gloss ratio and authenticity. |
| D25 | **पर** is taught as an a-adjective (परः परा परम्) with one Teacher Notes line that it may take pronominal endings in some senses (1.1.34); it is not drilled with the pronominal set. | It is not among the five that take -अत् in the neuter (7.1.25), and its pronominal use is optional. |
| D26 | **Chapter 1 stays function-paired, singular only** (FF's pairs; RB's singular-only pacing is the same). | Both designs agree on singular-only; FF's pairs answer the asker. |
| D27 | **एवम्, क्व, अथ, पत्नी, सुहृत्, जम्बूः headworded** before the texts that need them. | Brings T5 to about 1 in 5.5 (within one in five) and the A and B passages to about 1 in 11 and 1 in 6 (re-measured, G15). |

### 7.3 Editor's decisions on the open questions (2026-11-10)

Each question as the synthesis asked it, then the editor's binding decision. Nothing here
is open any longer; the body of the plan has been changed wherever a decision changes it.

1. **Printed editions.** Which editions does REFERENCES adopt, given the e-text typos?
   **Decision:** authentic passages are printed from the e-texts REFERENCES names
   (`hitopadesha`: the GRETIL e-text and its verse numbering; `panchatantra`: Jha's text as
   input there), with evident e-text typos corrected and each correction listed in Teacher
   Notes. The Chapter 6 fact base compares every passage with one printed edition it can
   actually open and records each difference; where none can be opened, the source line
   says "text of the GRETIL e-text" and nothing more is claimed. (§0 item 3, §1.4, §5.)
2. **सहायम् करोति.** Is सहायं करोति "helps" attested? **Decision:** print साहाय्यम् (Apte
   s.v. साहाय्य) unless the Chapter 6 fact base finds सहायं करोति "helps" attested in a text
   it can cite. The ledger stays 508 either way: if the 1.x wording is restored, the
   headword is सहायः instead. (c06.l02, §5.2.)
3. **वसुधैव कुटुम्बकम्'s other loci.** **Decision:** Chapter 6 research verifies the Mahā
   Upaniṣad locus on the web and adds a REFERENCES key, or the line does not print. No
   modern institutional use is mentioned. (§5.4b.)
4. **New REFERENCES keys.** **Decision:** each is added by the fact base of the chapter that
   first needs it, with verified bibliographic data: `fillmore1968` and one
   kāraka-comparison source (c02; else the Fillmore note moves to v4.c05, D17); a
   Pañcatantra translation key (c06); a padapāṭha source (c04). `mundaka` and `hitopadesha`
   exist: that item is closed, and c06.l02 cites [REF:hitopadesha] for its dating (G24).
   (§0 item 6, c02.l05, c04.l04, c06.l02, c06.l03.)
5. **A Jātaka cousin** of the monkey and the crocodile. **Decision:** print only if Chapter 6
   research verifies its number and title; otherwise cut. (c06.l03.)
6. **The joined-text convention (§1.4).** **Decision:** approved as written. It enters
   STYLE_GUIDE §3 in a prerequisite commit before c04 is drafted. (§0 item 6, §1.4 heading.)
7. **The v2.c03 numeral erratum (D11).** **Decision:** approved; it ships in the same
   release as v3.c02, together with the ROADMAP preservation-map row (G21). (§0 item 6,
   §4.0.2, D11.)
8. **A retake form for the Volume 3 exam.** **Decision:** Chapter 6 research measures the
   candidate (Pañcatantra 4's next block, अथ तयाभिहितम् …); if it needs more than one gloss
   in five words, the retake is the same passage (T5) after two weeks. (§5.6.)
9. **The -इन् card (R1) in c02.l03.** **Decision:** R1 stays in c02.l03, recorded as a watch
   item for the chapter review. (c02.l03 main risk.)
10. **The dual's weight for B1.** **Decision:** ◐ for oblique duals and for 1st/2nd-person
    dual verbs at exit is accepted (D13). (§1.2, §2.2.)
11. **रामः vs बालकः as the model word.** **Decision:** रामः stays the memorised model
    (tradition; the 1.x table), but the instrumental singular and genitive plural are
    *taught* as -एन and -आनाम् on देवः, and रामेण / रामाणाम् are shown as the same endings
    after र् (the ṇ cells are marked in every table). Wherever T1 or T2 is printed, the देवः
    forms stand beside the रामः forms in those two cells. (§1.3 T1/T2, §4.0.2, c01.l03,
    c01.l05, c02.l01, c02.l05.)
12. **अस्वपत् vs अस्वपीत्.** **Decision:** अस्वपत् is printed and अस्वपीत् is named once;
    the c03 fact base confirms both against Whitney §631 before drafting. (c03.l03.)
13. **c05.l03's load.** **Decision:** the upasarga card stays in c05.l03; there is no
    Volume 4 fallback. (c05.l03 now carries the relative sentence and lost R5 to c06.l01,
    G6.)
14. **Front-matter field for cells.** **Decision:** "cells drilled: n" stays a §14 line; no
    schema or validator change. (§3.)

### 7.4 The critique of 2026-11-10 and its fixes

One row per gap. "Places changed" names every section or lesson block edited for it.
Where the fix as written was itself wrong or could not be applied, the nearest correct
fix was made and the deviation is stated in the "Fix made" column.

| Id | Severity | The gap, in one line | Fix made | Places changed |
|---|---|---|---|---|
| G1 | major | The Volume 3 exam's task F assessed the नमस्ते SYMBOL card, and HISTORY cards had no cited callout in c06.l05. | The SYMBOL card is replaced by a FACT card (नमस्ते = नमः + ते, homage + the enclitic dative; ः + त → स्त, 8.3.34); c06.l05 §4 restates as cited HISTORY callouts Hit 1.71 and its jackal speaker [REF:hitopadesha], the Pañcatantra Book 1 lion-and-hare story [REF:panchatantra] and Muṇḍaka 3.1.6 [REF:mundaka 3.1.6]. | §4.6 exam shape (task F); c06.l05 block |
| G2 | major | Learner-facing Pañcatantra loci used Jha's verse numbers, which REFERENCES forbids. | Learner text cites Pañcatantra by tantra and story ("Pañcatantra 4, frame story, the opening prose"; "Pañcatantra 1, the lion Madotkaṭa, first sentence"; "Pañcatantra 1, the lion Bhāsuraka and the hare (verse introducing the story)"); every Jha number is relabelled "Jha n.n" and kept for the research note and Teacher Notes. Hitopadeśa loci unchanged. (§4.0.4, named in the critique's "where", holds no Pañcatantra locus: nothing to change there.) | §5 intro; c03.l02 R3 note; c06.l03 texts; c06.l04 texts; §5.3 (Text C heading, B table, formula drill); §5.4(b), (c); §5.5; §5.6 locus; D2; D23 |
| G3 | major | c05.l04 used सुहृत् and सलिलम् a chapter before they are taught. | प्रियसुहृत् → प्रियमित्रम् = प्रियम् मित्रम्; समुद्रसलिलम् → समुद्रतीरम् = समुद्रस्य तीरम् (तीरम् c01.l02); E2 updated. प्रियसुहृत् and समुद्रसलिल° now first appear in A4 and B3. | c05.l04 forms table; §7.1 E2 |
| G4 | major | c03.l03 was overloaded, and its present + स्म was taught again in c06.l03. | Editor's second path: only the present + स्म and 3.2.118 move to c06.l03; 3.2.118 re-homed in §4.0.4 (count stays 28); पुरा stays a c03.l03 headword, used with the imperfect; the Ā laṅ table is display (◐) except अलभत. c03.l03's model 6 is rewritten in the imperfect (पुरा एकः ऋषिः वने अवसत्). Text B2 line 1 (c06.l02, before c06.l03) is rewritten in the imperfect (पुरा कश्चित्सिंहो वनेऽस्वपत्, the R4 whole word) — the decision names only c03.l03's lines, but B2 line 1 would otherwise use स्म one lesson before it is taught. Headword counts unchanged. | §1.2 (past rows); §2.2 can-do 6 and paradigm ledger; §4.0 (c06.l03 row); §4.0.4 (row moved, count line re-derived); §4.3 inventory; c03.l03 block (production, chunks paragraph, model 6, Deferred); c06.l03 block (grammar point, sūtra); §4.6 inventory; §5.2 B2 line 1 and inventory; §5.3 status of प्रतिवसति स्म; D15 |
| G5 | major | c03.l04 presented two grammar points (imperative and optative) as one, promising all liṅ cells. | The imperative is the production target; the optative is a card: P liṅ 3rd person ✓ (-एत्, -एताम्, -एयुः) with स्यात्, स्युः, कुर्यात्, लभेत; the rest of liṅ ◐. Ā लभेत and the 3rd-person dual are kept under the "3rd person" of the critique's own line; स्युः (3pl of अस्) is kept beside स्यात् for the same reason. | §1.2 (imperative and optative rows); §2.2 can-do 8 and paradigm ledger; §4.0 (c03.l04 row); §4.3 inventory; c03.l04 block (grammar point, production); D8; D15 |
| G6 | major | c05.l02 carried both the pronominal declension and the relative sentence. | c05.l02 teaches the declension only (यः stays its headword); the relative sentence and its two models move to c05.l03; R5 moves to c06.l01 (before A1, A8, B3, B5, T5); c05.l03's absolutive model is replaced by "क्व गच्छसि? इति स तरोरधोऽपृच्छत्". To keep c05.l03 within 4–6 model sentences, its "फलं वा जलं वा?" model is dropped (वा keeps its c04.l01 examples). c05.l02's +1-week booking (formerly "यः … सः pairs") becomes the यद्/किम्/सर्व Δ cells. | §1.2; §1.3 R5 row; §1.5 serial table (c05: R5 removed); §4.0 (c05.l02, c05.l03, c06.l01 rows); §4.5 inventory; c05.l02 block; c05.l03 block; c05.l05 paradigm ledger; c06.l01 block (R5 card); §4.6 inventory; §5.2 आगत्य; §5.5 R5 row; D5; D8 |
| G7 | major | Dual-production rules contradicted each other. | One formula everywhere: "singular and plural in all persons, and the 3rd-person dual, ✓; 1st- and 2nd-person duals ◐". D13 stands. | §1.2 (dual row; the "all nine verb cells" row → "sg./pl. in all persons + 3du"; Ā, imperfect, imperative rows); §2.2 can-do 8 and paradigm ledger; §4.3 inventory; c03.l01 main risk; c03.l03 and c03.l04 production; D13; D15 |
| G8 | major | v4.c02 was given far more than its four lessons hold; several deferrals had no Volume 4 home. | Consonant-stem declension as a system (with R1, R6, s-stems, दिक्, सुहृत्, जम्बूः, सखि, पति, neuter i/u, feminine adjectives, नप्तृ/नृ/neuter ṛ) → v4.c05; v4.c02 keeps the rājan aṅga/pada/bha example, ṇatva/ṣatva and guṇa/vṛddhi; compound accent (IR-026) and 5.4.91 → v4.c04; Vedic forms and accent → v5.c03 only; new §6 rows for the locative/genitive absolute (v4.c05), -तर/-तम (v4.c04), यावत्/तावत् with -वत्/-मात्र adverbs and gati (v4.c04); the upasarga card stays in Volume 3. -मय (E13) re-addressed to v4.c04 with the taddhitas, since v4.c02 keeps only the three items above. | §1.3 R1, R6; §4.0.2 samāsa row; c01.l04 (नृपः); c02.l02, c02.l03 (R1, Deferred), c02.l04 Deferred; c04.l01 Deferred; c04.l03 दिक्; c05.l03 main risk; c05.l04 (accent, 5.4.91, main risk); §5.3 महान्; §5.4(b) लघुचेतसाम्; §5.5 s-stems; §6; §7.1 E13 |
| G9 | minor | c04.l01's serial printed the -आः + vowel seam a lesson early. | Printed कपोताः अपि तत्रागच्छन् …, with only l01's vowel seams joined (e.g. तत्रैव wherever तत्र एव occurs). | c04.l01 serial |
| G10 | minor | Several forms appeared before they were taught, without a display label. | c04.l01: वने आस्ते → ते इच्छन्ति → त इच्छन्ति; फले इमे → फले अपि; तदा एकः → तत्र एकः → तत्रैकः; मैवम् tagged display (A6); महर्षिः tagged display; पितृ आज्ञा dropped (the critique's alternative पितृ इच्छा → पित्रिच्छा uses the unowned इच्छा); इति आदि → इति अवदत् → इत्यवदत् (no replacement was given; आदि is unowned); वसुधैव also tagged display (c06.l04; not listed by the critique, same defect). c04.l02: हरी रम्यः and पुना रमते → गुरुः रक्षति → गुरू रक्षति, पुनः रक्षति → पुना रक्षति; निर्बुद्धेस्तु → हरिस्तत्र. c04.l03: विनयाद्याति → ग्रामात् गच्छति → ग्रामाद्गच्छति (the critique's जगत् याति still uses याति, unowned until c06.l04). c01.l02: "the -े of the owned रोचते or of ते in नमस्ते" (the critique's फले dual is owned only from c02.l04). c02.l04 serial: तस्य द्वौ पादौ पाशे स्तः. New §1.2 row: quotation closed by इति allowed from c03.l01 as a labelled pattern, named in c06.l02; c03.l01 serial labelled. The c04.l01 एव note lost its unverified "most-joined" claim. | §1.2; c01.l02 main risk; c02.l04 serial; c03.l01 serial; c04.l01 table and headword note; c04.l02 table; c04.l03 table |
| G11 | minor | c05.l04 used लक्ष्मणः and उत्पलम्, which are not in the ledger. | रामलक्ष्मणौ → सिंहमूषकौ = सिंहः च मूषकः च; नीलोत्पलम् → नीलकमलम् = नीलम् कमलम्; a one-line note that the महा- of महाभारतम् is a special compound form of महत्. Rule (3)'s seam example नील + उत्पलम् dropped with it. | c05.l04 forms table and rules; §7.1 E2 |
| G12 | minor | A1's seam note gave 6.1.132 for सः before a vowel. | "सः before a consonant → स (6.1.132); before ए → स by the ordinary -अः + vowel rule (c04.l02)". | §5.1 Text A1 seams |
| G13 | minor | c04.l03 printed पाशांश्छिन्धि while §5.5 says छिन्धि is avoided. | Editor's decision: replaced by वृक्षान् च → वृक्षांश्च; छिन्धि is not shown; §5.5 unchanged. | c04.l03 table |
| G14 | minor | c04.l01's pause form printed the bare stem सूर्य as a free word. | Pause form printed as सूर्य-उदये; because §1.4 did not yet state the convention the critique assumed, §1.4 gains one line: a compound is one word in the pause form, its members hyphenated where its inner seam is shown. | c04.l01 model 2; §1.4 |
| G15 | minor | Gloss-ratio word counts and the प्रतिवसति स्म count were wrong. | A passage about 53 words, 5 glossed, about 1 in 11; Text C 44 words, 7 glossed, about 1 in 6; T5 6 of 33 (names excluded), about 1 in 5.5; प्रतिवसति स्म 32 times (plus one e-text typo), re-counted in `vispancu.htm` (32 + 1; उक्तं च 330 and अस्ति कस्मिंश्चिद् 20 confirmed; the c06 review re-counted the line-initial अस्ति कस्मिंश्चित् in all its spellings: 27). | §2.2 can-do 2; §5.2; §5.3; §5.6; c06.l03 texts; §7.1 E18, E25; D2; D27 |
| G16 | minor | l01 Station 0 lines and §4.0.5 contradicted the l05 bookings. | Each l01 (c02–c06) now reads "previous l05's +1 day item and previous l04's +1 week item"; §4.0.5 reworded (l01 runs the exam's +1-day item and l04's +1-week item; l02 runs the exam's +1-week item). | §4.0.5; c02.l01, c03.l01, c04.l01, c05.l01, c06.l01 |
| G17 | minor | The exit ledger omitted the productive instr. pl. pronouns; R1's row listed six cells for "seven". | Instr. pl. (अस्माभिः, युष्माभिः) added to §2.2; पक्षिणि added to R1. | §2.2 paradigm ledger; §1.3 R1 |
| G18 | minor | The ṛ-stem table omitted dat./abl. pl. | Row "pl. चतुर्थी / पञ्चमी: पितृभ्यः, मातृभ्यः, दातृभ्यः" added. | c02.l04 T5 table |
| G19 | minor | No ledger rule covered why कश्चित्, कदाचित्, इतस्ततः count while कोऽपि, किञ्चित्, सर्वत्र do not. | Rule 15 added (rules 6–15). Evidence corrected: MW has its own entry only for *itas-tatas*; कश्चित् and कदाचित् are not separate MW headwords (they sit under *ka*/*kadā*), so the rule cites them as the interrogative + चित् indefinites of Whitney §507, headworded because the course drills them as whole words. Ledger total unchanged. | §3 (intro and rule 15); §0 item 6 |
| G20 | minor | Promised upgrade rows were assigned to no lesson; other V1 stems in sentence dress were unlisted. | Upgrade lines added: हस्तः, पुत्रः, मित्रम् (c01.l03); कोमलः (c02.l01); ऋषिः (c03.l03, kept in model 6 rewritten in the imperfect); सूर्यः (c04.l01); शक्तिः (c05.l04); धनम् (c06.l04). §3's list now assigns every upgrade to its lesson. `vocabulary_count` only. | §3; c01.l03; c02.l01; c03.l03; c04.l01; c05.l04; c06.l04 |
| G21 | minor | The ROADMAP preservation-map row for numerals had no prerequisite PR. | A ROADMAP PR changing the row to "v3.c02 (numeral nom./acc.), v3.c05 (tad/idam), v4.c05 (numeral system)" is added to §0 item 6 and D11, shipping with the v2.c03 erratum (decision 7). | §0 item 6; §4.0.2 tad/idam row; D11 |
| G22 | minor | c03.l03 quoted Whitney's abbreviated एको व्याघ्रः as the Hitopadeśa's text. | "Whitney §482c, citing the Hitopadeśa — e-text: एको वृद्धो व्याघ्रः" (re-found in `hitop_u.htm`). | c03.l03 Previewed |
| G23 | minor | The Chapter 1 exam's sample prompt gave one noun and answered with another. | जालम् + केन? → जालेन. | §4.1 exam shape (task C) |
| G24 | minor | Q4 asked whether the `mundaka` key exists; it and `hitopadesha` do. | Q4's mundaka item closed; c06.l02 cites [REF:hitopadesha] for the dating; decision 4 lists only the keys still to add. | §7.3 decision 4; c06.l02 HISTORY callout |

**Part C (house constraints) applied with the gaps:** the scale claim "the most famous line
of the Hitopadeśa" (§1.1 item 11) reworded, and likewise "widely quoted" (§5.4b), "a phrase
many learners already know" (c06.l04), "the dual card they make famous" (§4.0), "the
course's most-joined word" (c04.l01) and "commonest verse-introducer" (c02.l05, now a
counted, sourced figure only); no SYMBOL content in any assessed task (G1); c04.l04 states
that it *names* the s → ṣ law and that the rule is v4.c02's, so v2.c04's pointer stays true
(also §4.0.3). The plan uses no Hindi term for "pause form" or "cognate", so विराम-रूप and
सजातीय needed no change here; drafting uses them.

### 7.5 The plan review of 2026-11-10

After the repair, the plan was read once more by seven independent reviewers — one for each
chapter block (Chapter 6's with §5) and one for the volume frame (§0–§3, §4.0, §6, §7) —
who re-derived every paradigm cell against Whitney, checked every headword against Apte or
Monier-Williams and the Volumes 1–2 ledger, every sentence for agreement, case and sandhi,
every sūtra against the Aṣṭādhyāyī text, every authentic passage against its e-text, and
walked the lessons in order for words and forms used before they are taught. Each finding
was then challenged by a skeptic told to refute it. **68 findings were confirmed
(0 blocker, 21 major, 47 minor) and 12 rejected.** All confirmed fixes are
applied in this text; the ledger is unchanged (148 new; exits 387 · 411 · 439 · 460 · 488 ·
508) and the learner-text sūtra count is still 28.

| Id | Severity | Where | The finding, in one line |
|---|---|---|---|
| c01#0 | minor | §4.1 Exam shape, task D (and the l05 payoff it serves) | Task D asks for every noun in both Volume 2 stories with its case and job. |
| c01#1 | minor | v3.c01.l03, Main risk | The plan says Hindi uses से for instrument, company and 'from'. |
| c01#2 | minor | v3.c01.l04, Main risk | The claim that 'Hindi speakers over-use भोः + nominative (भोः रामः!)' has no basis. |
| c01#3 | minor | §1.2, Vocative row, 'Until then' column | The column gives the pre-lesson state as 'भोः, हे + nominative-looking stem only'. |
| c01#5 | minor | v3.c01.l05, Assembly note under the table | 'The pronoun column already differs in three cells (-स्मै -स्मात् -स्मिन्)' holds only for the masculine. |
| c01#6 | minor | §4.1 Grammar inventory (pronoun cells) | §0 item 3 requires every table to name its Whitney sections. Chapter 1 cites only §330, the a-stem nouns, but it also teaches the cells of कः/किम्, सः/तत् and अहम्/त्वम्. |
| c02#0 | major | v3.c02.l01 title (heading and §4.0 row) and l01 Payoff | The a-stem plural lesson is titled बहवः. That is the masculine nominative plural of the u-adjective बहु, with guṇa -अवः, and the u-stem class is not taught until c02.l03. |
| c02#1 | major | v3.c02.l05 TRADITION line (learner text) | 'Pāṇini defines each of the six kārakas in one sūtra' is wrong as stated. |
| c02#2 | minor | v3.c02.l05 kāraka map, सम्प्रदानम् row, column 'Where case and job part company' | The row puts रोचते beside नमः/स्वस्ति as a place where case and job part company. |
| c02#3 | minor | v3.c02.l02 Main risk drill | The 'question decides' drill uses the feminine asker forms काः and कस्याः. |
| c02#6 | minor | §1.3 memory-budget table, T4 row | The T4 Δ description says the feminines differ only in 'three optional cells + acc. |
| c03#0 | major | v3.c03.l04 (grammar point and 'How they are built'); §4.3 grammar inventory; §1.3 T7 row; §4.0.4 3.4.85 row an | The plan says the imperative is a Δ card on T7 (the secondary set) 'both padas'. |
| c03#1 | major | v3.c03.l02, the R3 card and Main risk | The R3 card teaches that '-यते' means 'is X-ed': the same endings on a stem in -य-. |
| c03#3 | minor | v3.c03.l03 model sentence 5 | The direct speech after उवाच — is printed without quotation marks. |
| c04#0 | major | c04.l02 visarga table header, chapter grammar inventory, c04.l02 production line, c04.l02 headword बहिः | बहिः is filed as an r-final beside पुनः, प्रातः, अन्तः, but the word is bahis, which ends in s. |
| c04#1 | major | c04 grammar inventory (vowel sandhi) and c04.l01 table, अयादि row | The plan states that word-final ए/ओ before a vowel other than अ becomes अ + hiatus, citing Whitney §133. |
| c04#2 | major | c04.l03 table, न् doubling row | The locus for अस्मिन्नेव काले is wrong. In the GRETIL Hitopadeśa the phrase comes in the prose after Hit 1.4, not after 1.3. |
| c04#3 | major | c04.l02 headword शनैः | The plan says Apte holds शनि (of शनिवासरः) to be 'related' to शनैः. |
| c04#4 | major | c04.l01 table, सवर्णदीर्घः row | Splitting तथास्तु and तथापि as तथा + अस्तु and तथा + अपि uses तथा 'so', which is only headworded in c05.l03 (its block says '(and तथास्तु, तथापि)'). |
| c04#5 | major | c04.l03 consonant table (nasal, anusvāra and न् + च rows) | Three examples use words that are not owned at c04.l03 and carry no label. |
| c04#6 | major | c04.l03 Forms taught heading | The Whitney locator §§202–210, 213 does not cover four of the table's rules: final stops voiced before voiced sounds (§159), stop + nasal → nasal (§161), त् + ल → ल्ल (§162) and त् + ह (§163). |
| c04#7 | minor | c04.l02 visarga table, र row | There are two slips in the र row. (1) The -अः and -आः cells are '—', which reads as 'no form'. |
| c04#8 | minor | c04.l02 visarga table, अ row and 'other vowels' row | The row for a following अ gives बुद्धिरेव and प्रातरेव, but in both the next vowel is ए, not अ. |
| c04#9 | minor | c04.l02 visarga table | The chapter inventory lists visarga → ष् before surds, but the table has no ट/ठ row (Whitney §170c). |
| c04#10 | minor | c04.l04 ambiguity table | The ए entry lists every source (a/ā + i/ī), but the ओ entry gives only a+u. |
| c04#11 | minor | c04 grammar inventory, c04.l02 special words, §4.0.4 Teacher Notes list | भोः + voiced consonant → भो is cited to 8.3.17 alone. 8.3.17 only turns the visarga into य्; the य् is dropped before a consonant by 8.3.22 हलि सर्वेषाम्, so भो राम needs both sūtras. |
| c04#12 | minor | c04.l03 headword धीमान् | धीमान् is glossed 'wise' but labelled 'm.', as if it were a masculine noun. |
| c04#13 | minor | c04.l03 table, त् + ह row | त् + ह → द्ध is printed as if it were the only outcome. Whitney §163 (and 8.4.62 झयो होऽन्यतरस्याम्) makes the aspirate optional: तद्हितम् is also correct. |
| c04#14 | minor | c04.l01 serial | The c04.l01 serial is supposed to be joined at every l01 vowel seam ('only l01's vowel seams joined, e.g. |
| c06#0 | major | §5.2, the bridge paragraph after the Hitopadeśa A1–A8 table | The bridge puts the doves' flight to the mouse's burrow before A2, but in the text it comes after A2. |
| c06#1 | major | c06.l03 block, Teacher Notes line on the Jha e-text; §7.4 G15 | The count of passage openings with अस्ति कस्मिंश्चित् is wrong. |
| c06#2 | minor | §5.2 Hitopadeśa inventory, row हिरण्यकः नाम | The row marks 'X नाम Y' as T c06.l03, but A2 is read in c06.l02, one lesson before c06.l03. |
| c06#3 | minor | §5.2 Hitopadeśa inventory, row मित्रम् | In A2 मित्रम् is not a predicate noun: the verb is निवसति, and मित्रम् is in apposition to the subject हिरण्यकः. |
| c06#4 | minor | c06.l01 block, R5 card | The card says 'its doer is the sentence's doer'. In A8 (एवमुक्त्वा तेन … बन्धनानि छिन्नानि), the nominative of the sentence is बन्धनानि; the doer of उक्त्वा is the instrumental तेन of the R2 'X-ed by Y' frame. |
| c06#5 | minor | c06.l01 R5 card; §1.3 R5 row | Chapter 6 uses the same labels twice. 'Text A1/A2' and 'Text B1/B2' are the Volume 2 reprints and the course tellings; 'A1–A8' are the Hitopadeśa sentences; 'B1–B5' are the Pañcatantra Text C sentences. |
| c06#6 | minor | c06.l02 block, the one grammar point (Text B2 lines 4, 5, 9) | Text B2 leaves a vowel unjoined before इति across the closing quotation mark (करिष्यामि" इति, लघुरसि" इत्यवदत्, मित्रम्" इति). |
| c06#8 | minor | §5.4(c) inventory, row यस्य … तस्य | The relative–correlative sentence was moved from c05.l02 to c05.l03 by G6, but the row still cites c05.l02 alone. |
| c06#9 | minor | §5.2 Hitopadeśa table, A4 Devanagari | The Devanagari column adds a comma that the e-text does not have. |
| c06#11 | minor | c06.l01 block, Texts line | The benediction parse is cross-referenced to §5.5d, but no §5.5d exists (§5.5 is the residue table). |
| c05#1 | major | v3.c05.l04, model sentence 2 | The sentence चित्रग्रीवो नाम कपोतराजः uses the formula X नाम Y ('a Y called X'). |
| c05#2 | major | v3.c05.l01, Enclitic rule (FACT) | The plan credits Whitney §491b with the rule that the enclitics never begin a verse-quarter. |
| c05#3 | minor | §1.3, T8 row | §1.3 marks इदम्'s key cells as recognition (◐). The c05.l02 block says those cells are productive ('key cells ✓, the rest ◐'), and so does §2.2, which puts only 'इदम् beyond its key cells' under ◐. |
| c05#4 | minor | §1.5, serial table, c05 row | The row calls हिरण्यकः a compound. It is हिरण्य + the suffix -क, a derivative, not a compound. |
| c05#5 | minor | §5.4, inventory of the यस्य बुद्धिर्बलं तस्य verse | The inventory gives the relative–correlative genitive यस्य … तस्य as taught in c05.l02. |
| c05#6 | minor | v3.c05.l02, Δ card for सर्व; Payoff | The card stars सर्वाः as ungrammatical. सर्वाः is the correct feminine nominative and accusative plural of सर्व, and the learner will meet it. |
| c05#7 | minor | v3.c05.l02, Indefinites | The line derives कापि from कः + अपि. कापि is the feminine का + अपि, and किञ्चित् is the neuter किम् + चित्. |
| c05#8 | minor | v3.c05.l02, model sentence 1 | The joined line is split by commas and left unjoined at भ्राता, इयम्. |
| c05#9 | minor | v3.c05.l03, the grid, time row | सदा is a c03.l04 headword, so it is owned, but it is not printed in bold. |
| c05#10 | minor | v3.c05.l04, compounds table (case-tatpuruṣa and upapada rows) | Two vigrahas use members that stand alone as unowned words with no label: उपकारः in परस्य उपकारः, and ख 'sky' in खे गच्छति. |
| c05#11 | minor | §4.5, Exam shape, task D | Task D is called an 'unseen' passage, but it is 'the serial's episode 5', which the learner reads in the §17 of c05.l01–l04. |
| c05#12 | minor | v3.c05.l04, Payoff | The payoff calls its list 'the ledger's compounds', but मनोरथः and मातृभाषा are not ledger rows. |
| c05#13 | minor | v3.c05.l03, review_of | The review_of locator for अत्र, तत्र, यत्र is wrong. The ledger rows for these words are v1.c05.l03 (and l05), not v1.c05.l04. |
| c05#14 | minor | §4.5, Grammar inventory | The Whitney locator for the pronominal declension leaves out §523, which is the section for अन्य ('declined like ta throughout', so अन्यत्). |
| c05#15 | minor | §4.0.4, Teacher Notes list | Chapter 5 sends three sūtras to Teacher Notes that are missing from §4.0.4's Teacher Notes list: 2.1.57 (karmadhāraya, c05.l04), 7.1.25 (अन्यत्, c05.l02) and 1.1.34 (पर, D25). |
| c05#16 | minor | v3.c05.l03, model sentence 5 | The quoted question has no quotation marks. The lesson's own sentence pattern ('"…?" इति सः अपृच्छत्') and c03.l01's speech pattern both mark the quotation. |
| volume#0 | major | §3 rule 11 | Rule 11 lists नमस्ते among the sandhi spellings that "never count". |
| volume#1 | major | §3 rules 8 and 13; §6 lakāra row; §5.5 'Perfect forms' row | Rule 13 speaks of "perfect forms other than the three chunk headwords", and §6 and §5.5 list अब्रवीत् with the perfects. |
| volume#2 | major | §4.0.3 (and the c02.l02, c04.l02, c05.l01, c05.l04 blocks) | §4.0.3 says it was compiled from every 'Volume 3' forward line, but several shipped promises are missing, and the plan quietly sends some of them to Volume 4. |
| volume#3 | major | c06.l03 Teacher Notes line; §7.4 G15 | The c06.l03 block says the Jha e-text "opens a passage with अस्ति कस्मिंश्चित् 20 times". |
| volume#4 | major | §1.3 T4 row; §2.2 paradigm ledger; D15 | §1.3 gives the feminine i/u Δ as only 'three optional cells + acc. |
| volume#5 | major | §1.1 item 2; D8 (and, by reference, §1.2 dual and optative rows, D13, G5) | Three statements define a card as having no production target: the house rule, §1.1 item 2 ('a reference or recognition item with no production target') and D8's reason ('a card has no production target'). |
| volume#6 | minor | §1.3 T7 row | The T7 Δ cell cites 3.4.85 लोटो लङ्वत् for both loṭ and vidhiliṅ. |
| volume#7 | minor | c04.l03 headword धीमान् vs §1.3 R6 (c05.l01) | §1.3 places the R6 card in c05.l01, but the c04.l03 headword धीमान् is glossed 'nominative, R6' one chapter earlier. |
| volume#9 | minor | §1.1 item 2 | 'The last pairing is Pāṇini's own' overstates. Pāṇini does not pair the genitive and the vocative. |
| volume#10 | minor | §4.0.4 count line and Teacher Notes list | §1.1 item 10 and §4.0.4 claim that exactly 28 sūtras appear in learner text. |
| volume#12 | minor | §2.1 | §2.1 says the learner 'uses the chunks the tracker lists' and then names 13 chunks. |
| volume#13 | minor | §3 rule 6 | Rule 6 counts a pronoun or pronominal adjective by its masculine nominative singular 'or its only form'. |
| volume#14 | minor | §7.4 G19 | G19 says rule 15 cites कश्चित् and कदाचित् 'as the fixed story-openers of narrative prose (Whitney §507)'. |

Rejected on challenge (kept as written):

| Id | Where | The claim |
|---|---|---|
| c01#4 | v3.c01.l02, Previewed | The preview points to c02.l03 for 'the ablative and genitive singular share one form'. |
| c01#7 | v3.c01.l01, headword table, मार्गः 'Why now' | मार्गः is justified as 'goal sentences', but with a verb of motion मार्गम् is the way travelled ('goes along the road'), not the destination. |
| c02#4 | v3.c02.l02 block | l02 is the only teaching lesson in Chapter 2 with no production subset. |
| c02#5 | v3.c02.l03 Deferred line | The l03 block teaches बहु's neuter forms (बहु जलम्, बहूनि फलानि), which are neuter u-stem cells with -ūni, while the same block defers 'neuter i/u (मधु, वारि)' with no exception noted. |
| c03#2 | v3.c03.l04 Payoff | The payoff says सर्वे भवन्तु सुखिनः 'is a sentence the learner could have built'. |
| c03#4 | §1.3 R3 row; v3.c03.l02 R3 card; §5.3 heading note; §5.5 residue table | The Pañcatantra heading is printed joined as तद्यथानुश्रूयते. |
| c06#7 | §5.4(a) Hit 0.6 inventory, row पात्रताम् · पात्रत्वात् | The learner owns पात्र only as 'vessel' (v1.c05.l03), so '-ness' gives 'vessel-ness', not the plan's 'worthiness'. |
| c06#10 | §5.1 Text A2 (Devanagari and IAST) | The shipped Volume 2 text puts a dash before the moral ('सिंहः मुक्तः भवति। — न कः अपि लघुः।'). |
| c06#12 | c06.l05 block | §4.0.5 says each l05 books +1 day for the next l01 and +1 week for the next l02. |
| c05#0 | v3.c05.l01, model sentence 4 | The sentence uses the simple verb वसति, which the learner does not own at this point. |
| volume#8 | §1.4 first bullet | The joined-text rule covers a final consonant (written together), a final vowel, anusvāra or visarga (space), and fusion. |
| volume#11 | §1.5 thread-verse table, benediction row | The benediction is attributed to v1.c06.l04 but is printed fully joined (मा कश्चिद्दुःखभाग्भवेत्). |

### 7.6 Corrections made by the chapter fact bases

A chapter fact base is checked against the sources before its lessons are drafted, and it
corrects this plan where the plan is wrong; each fact base lists its deviations in its §7.
The plan's text above is left as it was reviewed. The corrections below matter to chapters
still to come: a later fact base follows this table, not the lines it corrects.

| From | The plan says | Correction (where it matters next) |
|---|---|---|
| v3.c02 | §1.3 (the R2 row) and the c02.l05 block list गतः, क्रुद्धः and पिपासितः among the R2 forms and say "with one as the verb, the doer goes into the instrumental"; §1.5, the c02.l05 block and §5 label सुप्तस्य "(R2)" | R2 is the frame of a **transitive** verb's -त participle (बद्धः, मुक्तः, कृत, उक्त): the doer in the instrumental, the participle agreeing with the thing done. गत is from a verb of motion, whose goal is still a कर्म (3.4.72 lists such verbs apart); क्रुद्धः, पिपासितः and सुप्त are from verbs with no object. In the course's sentences these agree with their doer, and सुप्तस्य in the verse is not R2 (c06.l04; v4.c04–c05) |
| v3.c02 | c02.l05 block: उक्तं च "330 times" in the Pañcatantra e-text | 329 as a whole word; the bare string gives 330 because of one *yuktaṃ caitat*. The Hitopadeśa e-text has 7 by the same method (8 as a bare string). Later counts use the whole-word method and say so (c06.l03) |
| v3.c02 | §1.1 and the c02.l05 TRADITION line: "1.4.24–1.4.54 … 2.3.2 ff." | 1.4.24–1.4.55 and 2.3.1 ff., as the v3.c01 review fixed the range (v4.c05) |
| v3.c02 | c02.l04 block, the dual card's row for 2: "(द्वाभ्याम्, ◐) (द्वयोः, ◐)" | The numeral's oblique cells are printed nowhere in Volume 3 (D11: v4.c05); the row shows द्वौ / द्वे only |
| v3.c02 | c02.l04 block, model sentence 3: नमति + accusative "contrasted" with नमः + dative | नम् takes the accusative or the dative (Apte s.v. नम्): मात्रे नमामि is never marked wrong; the contrast taught is verb against indeclinable |
| v3.c02 | c02.l03 block: the ṇ of the genitive plural shown on गुरूणाम् only | The triggers are र, ऋ and ष with nothing blocking, on the i-side too: हरीणाम्, ऋषीणाम् (c04.l04 names the law; v4.c02 teaches it) |
| v3.c02 | §1.5, serial episode 2: "the king of the doves; two feet in the net" | As built: the free dove of episode 1 gives the warning (in the Hitopadeśa the king warns and is overruled); the king is caught last, with two feet in the snare; the hunter's wife and the young dove's parents are ours; the river, its bank and the silk-cotton tree are the text's. Episode 3 starts from the king in the snare (c03); c06.l02's Teacher Notes list every departure |
| v3.c03 | c03.l04 block and D19: मा + imperative as "the ordinary prohibitive of the epics and later prose" | Whitney's words are "an ordinary form of prohibition" (§579c); from the earliest language मा regularly takes an augmentless past form, and that construction is also classical (v4.c03). मा with the optative is attested (rare): it is never offered as a wrong option |
| v3.c03 | c03.l03 block, S0 → next: "+1 week (c03.l05): the crow story in the imperfect" | That text is task B of the c03 exam, so the booking is "yesterday, told" (six sentences in the imperfect); the exam keeps the crow story. c04.l05 and c06.l01 still read the crow story joined |
| v3.c03 | c03.l04 block, serial: नृपः अवदत् — "अत्र वने तण्डुलाः कुतः? मा गच्छत!" | As built: the king recalls the warning as the free dove's (Chapter 2 gave the warning to that dove), and the grains lie on the bank (तीरे), not in the forest. Episode 3 ends with the mouse cutting the snares, the king's last (c04 re-reads the serial joined; c06.l02) |
| v3.c03 | §4.3 inventory: "classes 1, 4, 6, 10 … Whitney §735"; भवत् only at §456 in c05.l01 | §735 is the a-class example; the classes are §§759–761, §751 ff. and §607 (v4.c03). भवान् with the 3rd person is Whitney §456, already cited in c03.l04 |
| v3.c03 | §4.0.4: 3.4.85 लोटो लङ्वत् glossed "the P imperative is the imperfect's set" | Five cells of the first family's imperative have the imperfect's endings; -तु and -न्तु come from the present's -ति, -न्ति by 3.4.86; the second family's -स्व, -ताम् stand on the present (the plan's own correction c03#0). The ten lakāras: four are the present system's, the other six are लिट्, लुट्, लृट्, लेट्, लुङ्, लृङ्; the benedictive is a use of लिङ् (v4.c03) |
| v3.c01 | (see that fact base's §7, "Deviations from the plan") | Among them: the two-accusative example is the Laghukaumudī's ग्राममजां नयति (the plan's wording is Apte's); the kāraka sūtras run from 1.4.24 to 1.4.55 |
| v3.c04 | c04.l02 block: "-आः rows and the र + र row ◐" | The -आः column of the visarga map is ✓ (the c04 fact base's deviation 6, editor's decision 10): आ before every voiced sound, with a gap before a vowel, the -अः shapes before voiceless sounds; the other-vowel column is ✓ for -इः -उः -एः -ऐः -ओः. Only the र + र row stays ◐. From v3.c05.l01 every plural subject in a composition is joined by this column |
| v3.c04 | §1.4: "Below every joined line from c04.l04 on: the pause form (पदपाठः), then IAST and the gloss" | Each Devanagari line carries its own IAST in parentheses directly after it: from c04.l04 line 1 is the joined line with its IAST, line 2 the pause form with its IAST, line 3 the English gloss and the Hindi. In c04.l01–l03 word examples stand in four-column tables (pause form · IAST · joined · IAST) and running lines keep their pause form in a split key below the text. The IAST of a joined line has a space at every word boundary and writes the words together only where two vowels have fused: *jalam icchati*, *ko 'pi*, but *nāsti*. A hyphenated compound form never stands directly before a parenthesis: it has its own IAST column, or the parenthesis comes at the line's end (the c04 fact base's row 0.2; deviation 2) |
| v3.c04 | §1.4: no sandhi across a daṇḍa, a speech-frame dash or the closing quotation mark before इति | The question mark, the exclamation mark and the comma are stops as well, and the word before a stop stands in its pause form (STYLE_GUIDE §3.1, amended 2026-11-10; deviation 7). हे is never joined to a following vowel (Whitney §138f), and no drill puts हे before a vowel |
| v3.c04 | c04.l01 block, the अयादि row and IR-021: भो + अति → भवति taught in l01 "inside words" | भवति = भो + अति is named in c04.l04, with the other three changes inside a word (the ṇ of रामेण, the ṣ of रामेषु and करोषि, the guṇa inside गुरवे); the rules are v4.c02. नयनम् = ने + अनम् stays in c04.l01 as one display line, because v3.c02.l04 promised it there (deviation 3) |
| v3.c04 | c04.l01 block, the अयादि row: at a word end only ए → अ + gap and ऐ → आ + gap | Two rows added to the vowel map: a word-final -औ → -आव् before a vowel (Whitney §134b), production ✓, which the a-stem duals need at once (पितरावपि, कपोतावपि); and the contrast of the -औ dual, which joins, with the -ई/-ऊ/-ए dual, which never joins (1.1.11) (deviation 4) |
| v3.c04 | §4.0.4 and the c04.l02 block: 8.3.34 as "the visarga is an s at heart" | The learner wording is "the visarga is replaced by स् before a voiceless consonant" (the Kāśikā: *khari parataḥ*). That Pāṇini's visarga is itself the pause shape of a final स्, by 8.3.15, is said in Teacher Notes only (deviation 5) |
| v3.c04 | c04.l02 block, main risk: "-अः first (most frequent)" | No sandhi is called common or frequent, here or later, without a count. -अः is taught first because it has more shapes and more owned examples than any other column; where a preference is stated it is Whitney's own words, quoted and cited (§161a, §163a, §172a, §202c, §203) (deviation 8) |
| v3.c04 | §1.5 and §4.4, serial episode 4: "the whole serial so far, re-read joined"; the c04.l01 line कपोताः अपि तत्रागच्छन् | As built: four selections — ten lines joined at the vowel seams (l01), ten at the vowel and visarga seams (l02), ten at every seam (l03), and the whole 13-line past-tense retelling of v3.c03.l03 joined over its pause form (l04) — every line copied from its source §17, with a split key naming each seam's lesson. The l01 line, which is not a line of the serial, is replaced by real serial lines (deviation 11) |
| v3.c04 | §4.4: no self-study minutes for the chapter's lessons | 35 · 44 · 38 · 40 · 40, each §21 adding up. First set at 35 · 40 · 35 · 40 · 40; Pass B moved lesson 2's dictation and lesson 3's listening drill from class to homework, because the class slot could not hold them (deviation 15) |
| v3.c05 | c05.l02 block, model sentence 3: कश्चिन्नृप आसीत् | The model is कश्चिद्व्याध आसीत्, with ✓ seams only; कश्चिन्नृप आसीत् stands once beneath it as a labelled recognition line — a stop before a nasal is ◐ in Chapter 4 — left out of the dictation and never required. Until a chapter teaches that seam, no model, exercise or key needs it (editor's decision 2) |
| v3.c05 | silent on अदस् (असौ) | Not taught in Volume 3: one Teacher-Notes line in c05.l02, and असौ "that one yonder" is glossed wherever a Chapter 6 text meets it; Volume 4 leaves it recognition-only, and Volume 5 meets it in reading (editor's decision 3) |
| v3.c05 | c05.l03 block, sentence patterns: यदा …, तदा … | ततः after a यदा-clause is good Sanskrit: keys expect तदा and accept ततः, and no quiz option offers ततः as wrong (editor's decision 10) |
| v3.c05 | c05.l04 block, model 2: चित्रग्रीवो नाम कपोतराजः | कपोतानां नृपश्चित्रग्रीवः: the X नाम Y formula stays c06.l03's, and -राज or -सख at a compound's end (5.4.91) is v4.c04's; no Volume 3 text coins one (deviation 4) |
| v3.c05 | c05.l03 block: nothing on a relative clause that ends in -न् | The न् + त seam stays ◐ (Chapter 4's consonant map): a relative clause ending in -न् is closed by a comma before its correlative (यदा कपोतास्तत्रागच्छन्, तदा …), in course texts and in the keys of learner sentences (deviation 6) |
| v3.c05 | §1.5, serial episode 5: "the doves fly to the mouse's burrow" | As built: episode 3 had already freed the doves, so episode 5 tells the same flight again with names, in four parts (c05.l01–l04 §17: the names in the sky; the doves ask about the mouse; the burrow and the mouse coming out; the snares cut, with the mouse's own *aham alpa-śaktiḥ, dantāś ca me komalāḥ*) and one new exam page (task D, sharing no line with the four parts). c06.l02's Teacher Notes list every departure (the c05 fact base's table 0.I) (deviation 7) |
| v3.c05 | c05 exam shape: task A "an 8-sentence paragraph"; B 8 and C 10 minutes | Task A is eight separate sentences, each with its own antecedent and speaker; 2 minutes of instructions inside the 45, B 7 and C 9; Station 0 about 15 minutes before the sitting (room time about 60), timed from its two items' counts (deviation 9; the c05 fact base's §7 item 7) |
| v3.c05 | no self-study minutes for the chapter's lessons | 35 · 52 · 45 · 45 · 45, each §21 adding up. First set at 35 · 40 · 40 · 40 · 45; Pass A moved lesson 3's quiz to homework, and Pass B moved lesson 2's exercise 1, §16 and quiz and lesson 4's quiz to homework, because their class slots could not hold them (deviation 14) |
| v3.c05 | c05.l04 block, the case-tatpuruṣa row: विद्यालयः = विद्यायाः आलयः, a genitive; nothing on a dative vigraha | A dative vigraha is not accepted for विद्यालयः or जलपात्रम् — विद्यायै आलयः, जलाय पात्रम् — in keys, Station 0 keys and exams: the Kāśikā on 2.1.36 makes the dative tatpuruṣa only where the first member is made from the second (यूपाय दारु → यूपदारु) and refuses it for रन्धनाय स्थाली. A compound that can be read two ways (अल्पशक्तिः, नीलकण्ठः, शुभरात्रिः, प्रियमित्रम्) has one answer only in its context: every prompt gives the compound's use, and where no context is given a key accepts either analysis (c05.l04 and c05.l05 §22; v4.c04 continues) |
| v3.c06 | §4.0.5 and the c06 blocks: l04 "+1 week: the Volume 4 entry review"; l05's booking for v4.c01.l01 only | v3.c06.l04 books S0-bg (+1 week, the Volume 3 entry check) and v3.c06.l05 books S0-bh (+1 day) for v4.c01.l01 and S0-bi (+1 week) for v4.c01.l02, worded as in their §20; the monthly task of v2.c06.l05 is closed in v3.c06.l05 §20 |
| v3.c06 | text labels A1–A8, B1–B5 | H1–H8 (Hitopadeśa), P1–P6 (Pañcatantra, sentences counted by daṇḍa), D1–D4, V1–V3, T5; Texts A1, A2, B1, B2 keep their names; H1 prints सोऽब्रवीत् — |
| v3.c06 | gloss ratios of the Chapter 6 texts | H 4 of 55, P 6 of 44, T5 5 of 33 (exit can-do 2 measured on 5 of 33) |
| v3.c06 | the Hitopadeśa "c. 9th–12th c. CE"; the Pañcatantra "c. 200 BCE–300 CE (IR-030)" | the Hitopadeśa stays "9th–12th centuries CE on the scholarly estimate" (a narrower 800–950 CE estimate was withdrawn at Pass C: not confirmed), with the oldest dated manuscript, 1373 CE, added; no date range for the Pañcatantra — the Encyclopaedia Iranica's Middle Persian translation under Khosrow I, attributed; the Jātaka line prints with no claim of priority |
| v3.c06 | वसुधैव कुटुम्बकम् with a Mahā Upaniṣad parallel | the Hitopadeśa 1.71 (a jackal) and the Pañcatantra, Book 5 (the third brahmin); the Mahā Upaniṣad does not print |
| v3.c06 | adverbial तत् "so" taught in c05.l03 | labelled in c06.l02–l03, not taught in Volume 3 |
| v3.c06 | कस्मिंश्चित् ◐ (c05.l02 display) | ✓ as a word of the story-opening formula (c06.l03); its न् + च seam stays ◐ |
| v3.c06 | task D compounds | वानरमकरौ and स्वपत्नी: a जम्बू- compound would need the ū-stem genitive जम्ब्वाः (v4.c05) |
| v3.c06 | no self-study minutes for c06 | 40 · 44 · 40 · 40 · 60, each §21 adding up; l05 duration 90 (two sittings of 45) |

Rules the chapter reviews settled, binding on later chapters: a form that is not yet taught
may not stand even as a wrong option of a quiz or exercise item; `self_study_minutes` covers
everything a lesson asks of the learner outside class time, and §21 adds up to it; a
Whitney section is cited only after it has been opened and found to say what it is cited
for; in Hindi text grammar terms take their Hindi spellings (पुल्लिंग, स्त्रीलिंग,
नपुंसकलिंग, लिंग), in Sanskrit text their Sanskrit ones (पुंलिङ्गम् …).
Added at the Chapter 3 review: a wrong option may be an error form built from taught
material, but not an untaught form and not a construction the language attests; a prompt
with two readings is changed so that one remains; recognition cells (◐) are never scored,
in Station 0 keys as elsewhere; the Laghukaumudī is cited under the sūtra where the cited
words stand (a recital is not cited for the names it illustrates); the Hindi liking
sentence has its liker in a को-form — only the verb's agreement with the liked thing is
shared with Sanskrit.
Added at the Chapter 4 review: split keys and other notes after a Devanagari word go in
square brackets or after a dash, never in a parenthesis, which holds IAST only; no fact-base
row number stands in learner-facing text; a course convention is stated as plain text, not
in a FACT callout; a wrong option is at fault only if it could be a correct answer to the
item as asked; a dictation's items are not printed where the learner writes them from
hearing; a class slot must be able to hold what is put in it, and what cannot fit goes to
homework; §3 reaches every lesson that review_of lists; a quotation in quotation marks is
verbatim from a source that was opened.
Added at the Chapter 5 review: a recognition-only cell or kind is never a wrong option; the Δ
cards carry the model table's marks; quiz options of two or more words are printed joined, and
all the options of one item alike; a compound that can be analysed two ways has one answer
only in its context, and a key accepts either analysis where no context is given; no
contingency clause stands in a timing plan; a statement about what an earlier lesson taught
is checked by grep; an exam's unseen passage repeats no line of the lessons, and each of its
questions is answerable from the passage alone; a reviewer returns a record of what was
opened and checked.

# Volume 4 — पाणिनीयम् · The Pāṇinian System (B1 → B2) — the volume plan

Final plan. The editor-in-chief merged it from three candidate designs (derivation-first,
reader-first, system-first) and the reports of three judges (paniniya, pedagogue,
house-editor), who ranked derivation-first first (rank points 9, mean score 56.3 of 70),
reader-first second (5; 52.0) and system-first third (4; 49.3). Spine: **derivation first
(prakriyā)**. Every teaching lesson is built round the derivation of a form the learner
already owns, and a rule, a term or a marker enters the course at the moment that derivation
needs it and not before. The volume is a growing toolbox; its last task is the learner
deriving भू → भवति (v4.c06.l04, task C).

Grafts (each recorded with its reason in §7.2):
- from **reader-first**: the DCS frequency tables as the binding evidence for what is ✓ and
  what is ◐ (§1.3.1); the Chapter 6 progression saṃjñā → vidhi → paribhāṣā; the "Kāśikā kit"
  and four of the grammarians' stock-example words; the data file's anuvṛtti and adhikāra
  fields as scaffolding that is later withdrawn; 1.2.6 for बभूव; 1.1.56 shown through
  अस्तेर्भूः and ब्रुवो वचिः; the unseen exam sūtra 3.1.133 ण्वुल्तृचौ; the kṛt evidence table;
  कृष्णेन and वाक्षु in the ṇatva/ṣatva sort; the e-text correction list (Māheśvara sūtra 11);
- from **system-first**: the fixed derivation format (§1.4.2); the padaccheda with case labels
  under every quoted sūtra; the data-file counts of the Aṣṭādhyāyī; the 1.x errata on laṅ
  ("recent past", "past habitual") and on the ātmanepada ("benefits oneself"), with 3.2.111
  read cold; the kit / non-kit contrast of the kṛt suffixes (कृतः / कर्ता); त इच्छन्ति as the
  second example of 8.2.1; the case names as ordinals; the register-sort exam task; the audit
  of the Volume 3 Teacher-Notes sūtras "for v4" (§4.0.6); the unseen passage of Hit 1 (deer,
  jackal and field) as half of the volume exam's reading.

Every error the judges found in the base design was re-verified and fixed, or kept with a
reason (§7.1). Chapter 5's lessons 3 and 4 are swapped (consonant stems before the
absolutes), its last teaching lesson becomes the kāraka lesson, and Chapter 6's three
reading lessons are re-cut by sūtra kind (§7.2).

**Sources re-checked at synthesis (local, read-only):**

- **The sūtras.** Every number and text was looked up in the Aṣṭādhyāyī data file
  (`corp/ashd/sutraani/data.txt`, 3,983 entries) with a lookup script; the texts below are
  copied from it. The table of §4.0.3 is generated from the lesson blocks by script
  (`research/evidence/vol4-plan/synth-work/sutras.py`) and checked against the file.
- **The commentaries.** Every Kāśikā line Chapter 6 reads was re-found in `jvkasipu.htm`;
  every Laghusiddhāntakaumudī passage in `varlghku.htm`; the इन्द्रशत्रु passage in
  `pmbhassu.htm` (Paspaśāhnika).
- **Paradigms.** Paradigm sections in Whitney 1889, chapter files in `corp/vish/…/whitney/`;
  section numbers were confirmed by printing each section's opening (§821, §822 and §826
  re-read at synthesis).
- **Headwords.** Every new headword was checked against the compiled ledger of Volumes 1–3
  (`ledger-all.tsv` plus the 148 Volume 3 headwords of `vol3-plan.md`): no double count (one
  candidate, सुहृत्, was found owned since v3.c06.l02 and dropped; one base headword, प्रभातम्,
  was found owned since v2.c01.l03 and replaced). Each is attested in
  Monier-Williams (`<k1>` lookup); Apte is spot-checked, and its anusvāra spellings are left
  to Pass C.
- **Frequencies.** Tense, form and lemma frequencies were counted from the DCS morphological
  corpus (`corp/dcs/…/Hitopadeśa`, `Viṣṇupurāṇa`), with the scripts named in §1.3.1.
- **Passages.** Every passage was re-found by line in the GRETIL Hitopadeśa (`hitop_u.htm`),
  Pañcatantra (`vispancu.htm`, Jha ed.) and Mahābhārata (`mbh_03_u.htm`).
- **The 1.x book.** The errata added at synthesis were re-read in `Sanskritam-Curriculum.pdf`
  with pdftotext (pp. 74–76, 127–128).

Status codes as in the Volume 3 plan: **✓** productive · **◐** recognition · **○** labelled
preview or display. In §5 inventories: **T** taught (lesson) · **C** chunk headword ·
**L** recognised under a card · **G** glossed. Sūtra tiers in learner text (§1.1 principle 9,
§1.4.1): **Q** quoted and recognised by gist · **B** one of the 26 sūtras of the भवति
derivation, recognised by number and gist · **D** cited in a derivation step (number, text and
English line printed; not memorised) · **K** on a reference card · **R** read with the vṛtti
in Chapter 6 (the text before the learner; assessed only in reading).

---

## 0. How to use this plan

0. **How it was made.** Three designs → three judges → synthesis → critique and repair → the
   editor's confirmation → review → post-check. §7.1 lists every error a
   judge found in the base design with its fix (or the reason it was kept); §7.2 every graft
   taken, adapted or declined, and the base design's own decisions as kept or amended; §7.3
   the deputy's decisions on the open questions, confirmed by the editor on 2026-11-10; §7.4
   the 46 gaps of the critique and the fix made for each; §7.5 the line-by-line review that
   followed and its post-check; §7.6 the corrections the chapter fact bases make.
1. **It is the binding contract for six chapter fact bases.** Each chapter's research note
   (`research/notes/vol4-chN-….md`, written in the format of `vol3-ch1-cases-singular.md`)
   copies its chapter block from §4 as section 0, and may not change a lesson's grammar
   point, forms, sūtras and their tiers, derivations, headwords or ledger figures without an
   editor decision recorded in its §7.
2. **What each lesson block fixes:** id, titles, lesson_type, the one grammar point, the
   exact forms (tables), the sūtras by tier, the derivations step by step, 4–6 model
   sentences, the ledger-new headwords, the labelled previews and deferrals, the payoff, the
   main risk, and what Station 0 books. Drafting adds the 27 sections around them. It does not
   add grammar, and it does not add a sūtra to learner text.
3. **What each fact base must still verify at Pass C:** every paradigm cell against Whitney
   (sections named in each table); every headword against Apte and MW; every sūtra against the
   data file (§4.0.3); every Kāśikā and LSK line against the e-text and, where one can be
   opened, a printed edition (each difference recorded; where none can be opened, the source
   line says "text of the GRETIL e-text" and nothing more, the Volume 3 decision 1 rule); every
   authentic passage by its locus; every HISTORY line against a REFERENCES key. A line with no
   key does not print.
4. **The ledger chain in §3 is canonical.** Chapter exits for STYLE_GUIDE §8: **521 · 537 ·
   565 · 591 · 617 · 627.**
5. **The memory budget in §1.3 is canonical.** Five memorised tables (T9–T13); the Δ cards and
   recognition cards named there; the sūtra budget of §1.4.1 (new by gist: 25 Q + 25 B; by
   number: the 28 of Volume 3 and the 26 of B).
6. **Prerequisite PRs before drafting** (§7.2, §7.3): the STYLE_GUIDE §8 ledger rules 16–23
   (§3); the IMPROVEMENT_REPORT summary rows for IR-016, IR-022, IR-023 and IR-026 (§4.0.1,
   Q8); a ROADMAP note fixing the scope of v5.c03 and marking the Mahābhāṣya and
   Paribhāṣenduśekhara strand "not planned" (§6, Q18); one new REFERENCES key,
   `nandikeshvarakashika`, only once a citable edition is found (§7.3 Q2: no key now). Every other key this plan cites
   (`maheshvarasutras`, `cardona1997`, `kashika`, `laghukaumudi`, `siddhantakaumudi`,
   `mahabhashya`, `fillmore1968`, `kiparskystaal1969`, `hitopadesha`, `panchatantra`,
   `mahabharata`, `cefr2020`, `cepeda2006`, and `whitney1889`, `dhatupatha`, `apte1890`,
   `monierwilliams1899`, which it names as Whitney, the Dhātupāṭha, Apte and MW) was checked in
   REFERENCES.md at synthesis.

---

## 1. Volume principles and what changes from Volume 3

### 1.1 The principles (how Volume 4 differs from Volume 3)

1. **Derivation first.** Volume 3 opened chunks into systems ("the cell it came from").
   Volume 4 opens the system into its machine ("the rule that made the cell"). Every
   teaching lesson follows one recipe:
   - **(1)** a form the learner has used since Volumes 1–3 (रामः, रामेण, भवति, नमस्ते, अगच्छत्,
     शृणोति, उवाच, कृतम्, आगत्य, पठ्यते …);
   - **(2)** the question it raises ("why ण here and न there?", "why शृणोति but शृण्वन्ति?");
   - **(3)** the one or two new tools that answer it: a term, a marker, a rule;
   - **(4)** the derivation, done once with the teacher, step by step, each step with its
     sūtra;
   - **(5)** the same tools run by the learner on two or three new forms;
   - **(6)** production with the forms the tools now make.
   A table is never the first thing on the page; neither is a sūtra.
2. **Two jobs, one spine.** The derivations are chosen so that each new tool explains forms
   and also makes new ones. The rule that explains उवाच (reduplication, 6.1.8) also makes
   जगाम, चकार and ददौ. The marker that explains शृणोति / शृण्वन्ति (the p of the endings, 1.2.4,
   with 1.1.5) also explains तुदति and पृच्छति (श has no p, so it counts as ṅit); and 1.1.5,
   through the k of क्त, explains कृतम्. Job (a), the B2 grammar, is therefore
   not a second strand beside job (b), how Pāṇini works: it is the output of the same tools.
3. **One grammar point per lesson; a second item only as a card.** A card has no production
   target, except where the block lists ✓ cells by decision (the Volume 3 D8 precedent). This
   volume records three such exceptions (§7.2.4, decision V4-D6):
   - the gerundive card in c05.l01 (-तव्य ✓);
   - the numeral card (listed cells ✓): द्वि–चतुर् and the tens in c05.l03; 5–19 and the
     ordinals in c05.l04's Station 0 and §15, so that c05.l03 carries one productive point
     (V4-D9, amended after the critique, G17);
   - मा + aorist in c03.l05, where only the chunk मा भैषीः is ✓.
   The "card" rows of c04.l03's taddhita table (-तर/-तम ✓; यावत्/तावत् ✓ as a pair) are not a
   fourth exception: they are taddhitas, part of that lesson's one point, and are called a card
   only because their sūtras are K.
   One lesson carries a large card with **no** production target, and is named here so that
   it is not read as two points: c05.l04, whose one production point is the locative
   absolute and whose card is the kāraka map (the six definitions, vivakṣā, upapada vs kāraka
   vibhakti), assessed only as "According to Pāṇini…" (V4-D8, amended after the critique,
   G18).
4. **The altitude rule (IR-041).** A term or rule appears in learner text only when a
   derivation on that page uses it. Pāṇini's architecture, from saṃjñā and paribhāṣā to
   adhikāra and anuvṛtti, is therefore met by working with it, not by survey.
   - There is no list of all the pratyāhāras: the learner meets the ones the owned rules use
     (§4.1), plus a drill set. The 1.x figure "~42 pratyāhāras" is not repeated; a count
     prints only with its method (the c01 fact base counts the pratyāhāras of the sūtra text
     and states how; §4.0.4).
   - There is no table of all anubandhas: each marker arrives with the form it explains, and
     c03.l03 collects them onto one card.
   - There is no list of paribhāṣās: c06.l03 reads the three of the 1.x book, each with a
     form it decides.
5. **Two kinds of statement, kept apart (the four registers).**
   - What the language does is **FACT**, cited to Whitney or to a text. For example: in the
     later language the perfect "is simply a preterit … equivalent with the imperfect", "on
     the whole less common than the imperfect" (Whitney §821b), and in the Hitopadeśa its
     tokens are almost all 3rd person (DCS, §1.3.1); the aorist is rare in classical prose
     (Whitney §826 counts eight occurrences in the Hitopadeśa; the DCS gives nine aorist
     tokens there, five indicative (one, the passive aśrāvi, identified by hand) and four
     prohibitive, §1.3.1).
   - What Pāṇini's grammar says about it is **TRADITION**: attributed ("According to Pāṇini,
     … 3.2.115") and assessed only in that form.
   - Where the two disagree, both are printed, which happens four times in this volume. आह
     is a perfect of √अह् for Whitney (§801a) and a substitute for the present of ब्रू for
     Pāṇini (3.4.84). Class 10 is a present class for the tradition and a causative-like
     formation for Whitney (§607). guṇa is a substitute for Pāṇini (1.1.2–3) and "a prefixed
     a-element" for Whitney (§235a). The perfect is "the past not witnessed" for Pāṇini
     (3.2.115) and for Whitney (§821a) "there is no evidence of its being either exclusively
     or distinctively so employed at any period".
   - Dated statements are **HISTORY**, with a key and a hedge. Pāṇini is placed "c. 4th c.
     BCE on the usual scholarly estimate" [REF:cardona1997]; the Kāśikā "c. 7th c. CE"
     [REF:kashika]; the Laghusiddhāntakaumudī "17th c." [REF:laghukaumudi].
   - The Śiva-drum origin of the fourteen sūtras is **TRADITION, labelled legend** (IR-036),
     and is never assessed.
6. **No scale claims without numbers (EDITORIAL_GUIDELINES §3).** The volume uses only
   counted figures, each with its method: "the sūtrapāṭha this course checks against has
   3,983 numbered sūtras (count of the data file's entries): 351 · 268 · 631 · 635 · 555 ·
   736 · 438 · 369 in the eight books" (c06.l01); the DCS counts of §1.3.1; Whitney §826's
   aorist counts. Banned, and never printed except as a quoted, sourced 1.x error in c06.l04
   task G ("The 1.x book wrote: '…' (p. n)", EDITORIAL_GUIDELINES §3): "most perfect / most
   scientific grammar", "5,000 years", the Einstein quotation, "Chomsky was inspired by
   Pāṇini".
7. **Production in every lesson (at least two productive tasks), and the derivation is
   itself a production task.** From c01.l03 on, every lesson has a "derive it yourself" item:
   the learner writes the steps with sūtra numbers (the text of each sūtra is supplied on the
   lesson's toolbox card). This is never the only production task: every teaching lesson also
   makes the learner write or say sentences with the new forms.
8. **The toolbox card.** Every teaching lesson ends §15 with the cumulative **toolbox**: the
   tools added that day, with the forms each one derives. Two things are kept apart:
   - **the cumulative toolbox**, the sum of every lesson's "tools added" (§4.0.3): 12 at the
     end of Chapter 1, 43 after Chapter 2, 89 after Chapter 3, 131 after Chapter 4, 160
     after Chapter 5 and 174 at c06.l03 (counted by script);
   - **the task C card** (§4.6): a 60-sūtra selection from it, the 26 of the भवति derivation
     and 34 distractors, in sūtra-number order, so that c06.l04 task C tests choosing and
     ordering, not recall of numbers.
9. **Five tiers of sūtra in learner text, and a sūtra budget (§1.4.1).**
   - **Q (quoted):** read with a word-by-word gloss and its padaccheda, and recognised by gist.
     It states what the learner has just observed (the Volume 3 rule) or does a step the
     learner performs. At most three new Q in a lesson; **25 new Q in the volume.**
   - **B (the भवति set):** the 26 sūtras of the final derivation (§4.6.1). Each is printed as
     B, with its padaccheda, where it is first used, and is recognised **by number and gist**
     at exit. 25 are new
     (6.1.78 is owned from Volume 3).
   - **D (derivation step):** number, text and an English line, printed in a derivation
     table as the authority for one step; not memorised, not assessed by number.
   - **K (card):** on a reference card only (the ten class signs, the four other lakāras, the
     perfect's further tools, the sanādi affixes).
   - **R (read):** read with the Kāśikā or the LSK in Chapter 6, the text before the learner;
     assessed only by reading, never from memory (the kāraka definitions, the बभूव prakriyā).
   Until Chapter 6, Q-sūtras are read through the case code taught in c01.l03 and nothing
   more. Chapter 6 teaches reading them with the vṛtti. Totals are in §4.0.3. The memory load
   at exit is therefore 25 Q + 25 B new sūtras by gist, and by number only the 28 of Volume 3
   and the 26 of B (53 numbers, 6.1.78 being in both).
10. **The honesty programme continues, now about the grammar itself.**
    - The 1.x errors in this volume's territory are quoted and corrected in the open, each in
      the lesson that needs it (§4.0.4).
    - Pāṇini describes a language; his rules derive forms, they do not "generate meaning".
    - The grammar is a work of the tradition with its own commentators (Kātyāyana, Patañjali,
      the Kāśikā, Bhaṭṭoji). Where the course follows the Kāśikā or the
      Laghusiddhāntakaumudī, it says so.
    - Pāṇini's derivations are a description, not a history: बभूव is not "older" than भवति
      because it has more steps.
11. **Joined text throughout.** Every course text is printed joined, with its pause form
    beneath, as Volume 3 leaves it (STYLE_GUIDE §3, the §1.4 convention of the Volume 3
    plan). Derivation tables print each step as a string with seams shown (भू + अ + ति); a
    derivation's last line is the joined word.
12. **§9–§11 (pronunciation) become "the sounds inside the rules".**
    - Chapter 1 recites the fourteen sūtras, with the tradition's recitation practice labelled
      TRADITION.
    - Thereafter the voice-over reads each derivation aloud, with the anubandhas named but not
      pronounced in the result ("शप् — the श् and प् are markers; what you hear is अ").
    - Accent is heard and marked only in c04.l04's इन्द्रशत्रु card. Elsewhere it is only named:
      as the it-vowel property that 1.3.12 and 1.3.72 read (c03.l01, its accent names printing
      only under §7.3 Q1; "accented अ" on the c03.l03 anubandha card), and in one Teacher Note
      (6.1.197, c03.l03). Accent as a system and Vedic forms are Volume 5's.
13. **Every exam has a stated length.** The chapter exams each fit one 45-minute sitting.
    The Volume 4 exam takes two sittings (c06.l04, §4.6).

### 1.2 What becomes allowed, and when

| Feature | First allowed in taught text | Productive (✓) from | Until then |
|---|---|---|---|
| Pratyāhāra names (अच् हल् इक् यण् एच् एङ् अक् यञ् झल् जश् चर् खर् इण् …) | c01.l01 | c01.l01 (expand any pratyāhāra from the fourteen sūtras) | "the vowels", "the stops" in English |
| Sūtra case code (gen. = in place of, loc. = before, abl. = after, nom. = result) | c01.l03 | c01.l03 (read any Q-sūtra's structure) | Volume 3's one-line paraphrases |
| Derivation tables (step · result · sūtra) | c01.l01 (6.1.77 re-read) | c01.l03 (learner writes them) | — |
| Terms prakṛti, pratyaya, it, aṅga, pada, bha, prātipadika | c02.l01 (इत् "marker" from c01.l01, with 1.3.3 and 1.3.9; the marker on affixes, 1.3.2, from c02.l01) | c02.l01 (इत् from c01.l01: find the marker, expand the pratyāhāra) | — |
| ādeśa / āgama / lopa; guṇa and vṛddhi as substitutes | c02.l02 (the word आदेशः from c01.l03; लोपः previewed in c01.l01) | c02.l02 | Volume 3's "guṇa" as a name for a sandhi |
| anuvṛtti, adhikāra | c02.l03 (8.4.1 → 8.4.2) | c02.l03 | the word carried down is printed in brackets [ ] with a "carried" label |
| राजन् and the consonant stems | c02.l01 (three cells derived; full table ○) | c05.l03 | नृपः |
| The verb ending as ल् → tiṅ; pada from the root's marker | c03.l01 | c03.l01 | Ā as "the second family" |
| Class signs (vikaraṇa), the ten classes | c03.l02 | c03.l02 (classify and form the present of any owned verb) | stems given whole |
| Athematic strong/weak stems (R4) | c03.l03 | c03.l03 (owned athematic verbs: P laṭ/laṅ/loṭ by the D13 formula; ददाति in its listed cells; the athematic Ā cells beyond the listed ◐) | R4 whole words |
| Perfect (लिट्) | c03.l04 | c03.l04: 3rd person sg./du./pl. P ✓; the rest of P and Ā ◐; periphrastic perfect ◐ | उवाच, आह chunks; ददौ glossed |
| Future (लृट्) | c03.l05 | c03.l05: P and Ā, sg. and pl. in all persons, 3du (the Volume 3 D13 formula) | करिष्यामि glossed |
| Periphrastic future, conditional, aorist, benedictive | c03.l05 (card) | ◐ throughout; the chunk मा भैषीः ✓ | — |
| Past participle -त, -तवत् | c04.l01 | c04.l01: -त all cells (a-stem declension), -तवत् nominatives | R2 card |
| Present participle -अत् / -मान / -आन | c04.l01 | c04.l01: -मान all cells; -अत् nom. sg./pl. and loc. sg.; all -अत् cells from c05.l03 | — |
| Absolutive -त्वा / -य; infinitive -तुम्; agent noun -तृ as a process | c04.l02 | c04.l02 (-तृ: nom. sg. of owned verbs ✓; its other cells are the owned ṛ-stem cells) | R5 card; कर्ता, दाता as words |
| Taddhita derivatives (-ता, -त्व, -मत्/-वत्, -इन्, vṛddhi derivatives, -ईय, -तर/-तम) | c04.l03 | c04.l03 (-ता, -त्व, -वत्/-मत् nom., -इन् nom., -तर/-तम, the pair यावत्/तावत् ✓; the rest ◐) | met as words |
| Compounds as derivations (sup-lopa, samāsānta, upapada) | c04.l04 | c04.l04 | Volume 3's vigraha |
| Passive and impersonal; gerundives | c05.l01 | c05.l01: laṭ/loṭ passive ✓; passive kta ✓; -तव्य ✓ | R3, R2 cards |
| Causative | c05.l02 | c05.l02: present-system causatives of owned verbs ✓ | — |
| Consonant-stem declension; numerals in full | c05.l03 | c05.l03 (listed cells, §4.5); numerals 5–19 and the ordinals from c05.l04 (its Station 0 and §15) | R1, R6 cards; nominatives |
| Kāraka theory (the six definitions; kāraka vs upapada vibhakti; the case outside the kārakas) | c05.l01 (kartṛ, karman, 2.3.1) | — (a card with no production target, principle 3: the whole map in c05.l04, assessed only as "According to Pāṇini…") | Volume 3's roles map |
| Locative absolute | c05.l04 | c05.l04 ✓ (on the full -अत् and -त stems); genitive absolute ◐ | — |
| Reading sūtras with the vṛtti | c06.l01 | c06.l01 | — |

### 1.3 The memory budget, the Δ cards and the recognition cards

#### 1.3.1 The evidence: what a page of narrative needs (DCS; adopted from reader-first §1.0)

Scripts: `research/evidence/vol4-plan/tools/dcsfreq.py`, `dcs2.py`, `dcs3.py`, `dcs4.py` over the CoNLL-U files of the
DCS (re-run at synthesis for the past-tense rows). Verb tokens are DCS `VERB` tokens; "kta"
is `VerbForm=Part` without `Tense`; "present participle" is `Part` + `Tense=Pres` (śatṛ,
śānac and the passive -yamāna together).

**Table 1.3a — verbs (share of all verb tokens)**

| Rank | Form | Hitopadeśa (5,217 verbs) | Viṣṇupurāṇa (14,163) | Owned at V3 exit? | V4 lesson |
|---|---|---|---|---|---|
| 1 | -ta participle (kta) | **30.9%** (vac 161, kṛ 63, gam 51, āgam 41, prāp 35) | **32.7%** | R2 card only | c04.l01 |
| 2 | present indicative | 26.2% | 14.4% | ✓ (thematic), R4 (athematic) | c03.l01–l03 |
| 3 | absolutive (-tvā 227 + -ya 423 + others) | **13.2%** | 8.8% | R5 card only | c04.l02 |
| 4 | perfect, the periphrastic included (āha 112, uvāca 63, ūcuḥ 14, babhūva 6) | 5.0% | **17.4%** (uvāca 589) | chunks उवाच, आह | c03.l04 |
| 5 | imperative (śṛṇu / śrūyatām 49) | 6.5% | 5.2% | ✓ | passive imperative, c05.l01 |
| 6 | gerundive (kṛ 64 = kartavya …) | 4.9% | 2.6% | — | c05.l01 card |
| 7 | optative | 3.9% | 2.9% | ✓ 3rd person | — |
| 8 | present participle | 3.9% | 4.8% | R6 nominatives | c04.l01 (formation), c05.l03 (declension) |
| 9 | infinitive | 2.0% | 1.4% | — | c04.l02 |
| 10 | imperfect | 1.9% | 4.5% | ✓ | — |
| 11 | future | 1.4% | 3.8% | glossed (करिष्यामि) | c03.l05 |
| 12 | aorist, all types (incl. mā + aorist 4, precative 3) | 0.2% | 1.3% (abhūt 119 of 185) | — | c03.l05 card; मा भैषीः chunk |
| 13 | periphrastic perfect (cintayāmāsa) | 0.1% | 1.1% | — | c03.l04 (◐) |
| 14 | conditional | 0 | 0.04% | — | c03.l05 card |

Row 4 is `Tense=Past`, `Mood=Ind`, less the aorists, which the DCS tags with the same tense
and a `Formation` of root, them, s, is or red (row 12 counts them; the Hitopadeśa's passive aorist aśrāvi carries no Formation tag and is taken out by hand): Hitopadeśa 264 − 5 = 259
(5.0%), Viṣṇupurāṇa 2,643 − 172 = 2,471 (17.4%). Row 13 is a sub-count of row 4
(`Formation=peri`: Hitopadeśa 7, Viṣṇupurāṇa 158). Re-counted after the critique with
`research/evidence/vol4-plan/work/dcspast.py` (G24); the earlier 5.1% and 18.7% had the aorists inside.

The perfect's 3rd-person dominance and the aorist count were re-counted at synthesis: of the
271 finite Hitopadeśa tokens tagged `Tense=Past` (275 with four tokens of the participle vidvān), the commonest are āha 112, uvāca 63, ūcuḥ 13 (+ 1
ūcur), babhūva 6, prāha 6, cintayāmāsa 5; the aorists are agamat 3, prādāt 1, aśrāvi 1 and the
prohibitives bhaiṣīḥ 3, kṛthāḥ 1 (`Mood=Jus`): nine in all, against Whitney §826's "eight in
the Hitopadeśa" (his count and the DCS tagging need not cover the same tokens). Passive forms
(`Voice=Pass`): Hitopadeśa 328 = 6.3% of verbs (203 present, 104 imperative such as श्रूयताम्,
क्रियताम्); Viṣṇupurāṇa 744 = 5.3%. Finite verbs on -ay- lemmas (class 10, causatives,
denominatives): Hitopadeśa 266 of 2,353 finite = 11.3% (कथय 62, चिन्तय 30, दर्शय 10).

**Table 1.3b — nominal stems (share of declined noun and adjective tokens)**

| Stem class | Hitopadeśa (8,792) | top lemmas | Owned at V3 exit | V4 lesson |
|---|---|---|---|---|
| -a | 70.2% | deva, artha, putra, mitra | ✓ | — |
| -i | 6.2% | sakhi, bhūmi, buddhi, pati | ✓ (pati, sakhi ◐) | c05.l03 Δ (◐) |
| **-in** | **4.3%** | mantrin 58, svāmin 49, pakṣin 26 | R1 | c04.l03 (formation), c05.l03 |
| **-an** | **4.3%** | **rājan 184**, ātman 50, nāman 36, karman 32 | — | c02.l01 (three cells), c05.l03 |
| -ā / -ī / -u / -ṛ | 4.1 / 1.8 / 2.4 / 0.8% | | ✓ | — |
| other consonant (root nouns) | 1.8% | āpad, suhṛd, vāc, sampad | nominatives | c05.l03 (listed cells) |
| -mat / -vat | 1.4% | bhavat 46, bhagavat 9 | R6 | c04.l03, c05.l03 |
| **-as** | 1.4% | manas 23, saras, śiras, yaśas | — | c05.l03 |
| -at | 0.8% | **mahat 47** | महान् | c04.l01, c05.l03 |

Consonant stems together are about **14%** of declined tokens, more than all the non-a vowel
stems; compound members (`Case=Cpd`) are **12.6%** of all Hitopadeśa tokens (16.6% in the
Viṣṇupurāṇa).

**What the measurement decides in this plan.**
- -ta participles and absolutives (44% of Hitopadeśa verb tokens together) each get a full
  lesson with an authentic reading (c04.l01 with N3a; c04.l02 with N3a's second sentence and
  the Chapter 4 exam's N3b).
- The perfect is productive in the 3rd person (c03.l04); the future in full (c03.l05); the
  aorist, conditional, periphrastic future and benedictive are one ◐ card, with मा भैषीः as
  the single ✓ chunk (V4-D7). system-first's productive aorist lesson is declined (§7.2).
- The passive (6%) and the -ay- stems (11% of finite verbs) get full lessons (c05.l01,
  c05.l02); the gerundive (4.9%) gets ✓ -तव्य on a card.
- राजन् and the -in stems (8.6% together) are declined in full in c05.l03, as the Volume 3
  §6 row requires; राजन्'s three names are met in c02.l01.
- The new headwords added at synthesis were chosen by this corpus's lemma frequency, not
  from the exam passages (§3, rule 22).

#### 1.3.2 The tables, the Δ cards and the recognition cards

Volume 3 memorised eight tables (T1–T8). Volume 4 adds **five memorised tables (T9–T13)**.
Everything else is either a **Δ card** (derived from a table already owned, checked, never
rote-learned) or a **rule-made form**: a form the learner is expected to derive with the
tools, not to remember. That third category is the point of the volume.

| # | Table | Lesson | What it makes; its Δ cards |
|---|---|---|---|
| T9 | The fourteen sūtras (recited and written) | c01.l01 | every pratyāhāra (rule-made, not memorised) |
| T10 | Perfect endings, P (णल् अतुस् उस् / थल् अथुस् अ / णल् व म, as -अ -अतुः -उः / -थ -अथुः -अ / -अ -व -म) | c03.l04 | the perfect of any owned root given its reduplicated stem; Ā perfect (-ए -आते -इरे …) as Δ ◐ |
| T11 | The -अत् participle (गच्छन्) in all cells: strong, pada and bha stems | c05.l03 | -मत्/-वत् (Δ: nom. sg. lengthened, भगवान्); -इन् (Δ: पक्षी); राजन् (Δ: bha cells राज्ञा); मनस् (Δ: nom. -अः, -ओ- before bh-: मनोभिः) |
| T12 | The future: stem in -स्य- / -इष्य- + the present endings (T6) | c03.l05 | conditional (Δ on T7: अ- + future stem + secondary endings) ◐ |
| T13 | The passive: root + य + Ā endings of T6 | c05.l01 | the impersonal (3sg only); the causative passive (कार्यते) ◐ |

**Δ cards (derived in class, never memorised).**
- Class-by-class present stems, from the class sign: c03.l02.
- Strong and weak stems of the athematic classes: c03.l03.
- The causative stem in -अय-, from the vṛddhi/guṇa rule: c05.l02.
- Numerals: द्वि–चतुर् oblique cells and the tens as nouns (c05.l03); 5–19 (the n-stems on the
  pada cells of the राजन् Δ, gen. -आनाम्; षष् a ṣ-stem apart), and the ordinals (c05.l04, Station 0 and §15).
- अदस् (असौ, अमुम्, अमुना …): one card, c05.l03, ◐.

**The rule-made forms (derived, not memorised).** The kta participle of any owned verb
(given set or aniṭ, c04.l01); the absolutive and infinitive (c04.l02); taddhita derivatives
(c04.l03).

**Recognition only, through Volume 5 (◐/○; no production target in Volume 4):**
- the aorist except the chunk मा भैषीः;
- the periphrastic future, the conditional, the benedictive;
- the perfect active participle (-वांस्: विद्वान् as a headword nominative);
- the perfect in the 1st and 2nd persons, the Ā perfect, the periphrastic perfect (चिन्तयामास);
- the desiderative, intensive and denominative;
- the genitive absolute;
- root-noun declension beyond the listed cells;
- अदस्;
- the future participle (करिष्यन्, the c04.l01 card) and the -अनीय and -य gerundives (the c05.l01 card);
- accent (one card: इन्द्रशत्रु, c04.l04);
- the class-3 present beyond ददाति's listed cells; the athematic Ā cells beyond the listed (ब्रूते);
- Vedic leṭ (one line, c03.l05).

**The R-cards of Volume 3, redeemed.**

| Card | Volume 3 lesson | Becomes ✓ in |
|---|---|---|
| R1 -इन् stems | v3.c02.l03 | v4.c04.l03 (formation, 5.2.115), v4.c05.l03 (declension) |
| R2 -त + instrumental doer | v3.c02.l05 | v4.c04.l01 (formation), v4.c05.l01 (the passive construction, 3.4.70) |
| R3 -यते passive | v3.c03.l02 | v4.c05.l01 |
| R4 athematic cells | v3.c03.l01–l04 | v4.c03.l03 |
| R5 absolutive | v3.c06.l01 | v4.c04.l02 |
| R6 -वत् / -मत् / -अत् nominatives | v3.c05.l01 | v4.c04.l03 (formation, 5.2.94), v4.c05.l03 (declension) |

### 1.4 Conventions for printing sūtras, derivations and technical terms

#### 1.4.1 The sūtra tiers and the sūtra budget

Every sūtra printed in learner text carries one tier (principle 9), stated in its lesson
block and in §4.0.3. The budget, counted by script from the lesson blocks:

| Tier | What the learner does with it | New in Volume 4 | Assessed |
|---|---|---|---|
| **Q** | reads it with its padaccheda; says what it does | 25 | by gist ("According to Pāṇini, …"), with the text in front of the learner from c06 on |
| **B** | uses it as a step of भवति; finds it on the toolbox card | 25 (+ 6.1.78, owned) | by number and gist (c06.l04 task C, D) |
| **D** | reads it as the authority for one derivation step | see §4.0.3 | never by number; only as "which rule did this?" with the card open |
| **K** | looks it up on a card | see §4.0.3 | never |
| **R** | reads it with the Kāśikā or the LSK in Chapter 6 | see §4.0.3 | only in reading, the text given |

A lesson may add at most **three new Q**; its §14 prints "tools added: n" (the new Q, B and
D of the day) beside "cells drilled: n", so that Pass D can audit the load.

#### 1.4.2 The derivation format (fixed for the volume; adopted from system-first §1.6)

Each derivation is a numbered table. Each line has the step number, the string with its
seams shown (भू + अ + ति), the sūtra (number and text; tier as in the block) and a gloss of
three to six words. Example (c02.l03):

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | राम + टा | 4.1.2 (the sup list, owned picture) | the instr. sg. ending |
| 1 | राम + इन | 7.1.12 टाङसिङसामिनात्स्याः (D) [अतः carried from 7.1.9] | after an a-stem, टा → इन |
| 2 | रामेन | 6.1.87 आद्गुणः (owned) | अ + इ → ए |
| 3 | रामेण | 8.4.1 रषाभ्यां नो णः समानपदे (Q), with 8.4.2 (D) | न → ण after र् in one word |

- A derivation is Pāṇini's analysis of a form (TRADITION), so it is assessed only in the
  attributed frame (STYLE_GUIDE §4 rule 4; principle 5): **every derivation item, in lessons
  and in exams, is headed "Derive, according to Pāṇini, …"**. Each exam shape in §4 repeats
  the wording.
- The learner writes the first three columns; the gloss is optional before Chapter 6.
- Only the steps the lesson teaches are written out. A step that belongs to a later lesson is
  one line marked with its lesson, e.g. "(c03.l02) the class sign", with its sūtra number and
  gloss. A step that belongs to an earlier lesson may be merged into one line, e.g. "c03.l01's
  steps 2–7". No derivation contains an unlabelled jump.
- The last line is the joined word, printed in bold.
- A derivation is never longer than ten lines in a teaching lesson. Longer ones (the final
  भवति, §4.6.1) are split at the seams the lessons taught.

#### 1.4.3 How a quoted sūtra is printed

- The sūtra in Devanagari as the data file gives it; beneath it the **padaccheda with each
  word's case named** (from c01.l03 on; adopted from system-first): इको यणचि — इकः (षष्ठी:
  in place of) · यण् (प्रथमा: the result) · अचि (सप्तमी: before). IAST follows on first
  quotation only.
- A word carried from an earlier sūtra (anuvṛtti) is printed in square brackets with its
  source: [अचि, carried from 6.1.77]. From c02.l03 to c05.l05 the bracket line reproduces the
  data file's anuvṛtti (`an`) field, labelled "carried (data file)", and its adhikāra (`ad`)
  field, labelled "headings (data file)", as scaffolding (adopted from reader-first). Two
  kinds of entry are not printed as the file has them, and the line says so. (i) A heading
  that the volume has not taught by that lesson, or does not teach at all, is replaced by
  "(further headings: Teacher Notes)". Examples are 8.2.1 पूर्वत्रासिद्धम् before c06.l03,
  8.2.108 संहितायाम्, 3.1.3 आद्युदात्तश्च, 8.1.16 पदस्य, 6.4.22 असिद्धवदत्राभात् and 4.1.1
  ङ्याप्प्रातिपदिकात्; the fact base checks every heading against the tier lists. Such
  headings are not tools, are not Teacher-Notes sūtras in the sense below, and enter no count.
  (ii) A word the file lists but the rule does not take (e.g. 7.3.103's दीर्घः, whose rule
  gives एत्) is printed with "(the file carries it; this rule does not use it)". In Chapter 6
  the scaffolding is withdrawn: the
  learner supplies the carried words and checks them against the vṛtti's "इति वर्तते" or
  "इत्यनुवर्तते".
- The data file's own label of a sūtra's kind (saṃjñā, paribhāṣā, adhikāra, atideśa, vidhi)
  is shown only in c06.l01, as the file's tagging, not as the tradition's classification: the
  file tags 1.1.69 as vidhi, where the LSK reads it as a definition ("सवर्णस्य संज्ञा स्यात्").
- Commentary lines (Kāśikā, LSK) are printed in Devanagari from the GRETIL IAST, with the
  e-text's evident typos corrected and each correction listed in Teacher Notes (§4.6).
- **Teacher-Notes sūtras.** A number written in this plan as "(n, Teacher Notes)" or
  "(Teacher Notes: n)" is an instruction to the fact base: the sūtra goes in Teacher Notes
  with its number and text, and the learner text prints the words "Teacher Notes" and no
  number. Such sūtras are not tools and are not in the count of §4.0.3 (the list is in its
  Totals). A sūtra whose number the learner must see is given a tier (D or K) instead.

#### 1.4.4 Technical terms

- Each Sanskrit term is printed in Devanagari with its IAST on first use, then in Devanagari;
  English prose may use the IAST (aṅga, pada, bha).
- One English equivalent is fixed for each and used everywhere: प्रकृतिः base · प्रत्ययः affix
  · इत् marker · अङ्गम् aṅga (the base before an affix) · आदेशः substitute · आगमः augment ·
  लोपः deletion · अनुवृत्तिः carrying down · अधिकारः heading · परिभाषा meta-rule · संज्ञा
  technical name (a definition) · विधिः operation (rule) · अतिदेशः extension rule · विकरणः
  class sign · लकारः l-affix (tense-mood) · कारकम् kāraka (a role in the action).
- guṇa and vṛddhi stay untranslated. Whitney's own glosses ("guṇa *secondary quality*",
  "vṛddhi *growth, increment*", §235a) are quoted once, in c02.l02, as FACT about the words.
- Rule 20 (§3) decides which terms count in the ledger.

### 1.5 The threads and the serial

**The §17 serial, "the monkey and the crocodile, continued".**
- **The story.** Volume 3 read the opening of Pañcatantra 4 (Text C and T5: Raktamukha
  feeds Karālamukha; the crocodile's wife asks where the fruit comes from). Volume 4's
  serial retells what follows, in the learner's current grammar, labelled on every page
  "our retelling, after Pañcatantra 4 (Labdhapraṇāśa), frame story". In the story the wife
  demands the monkey's heart; the crocodile hesitates, then invites the monkey home and
  carries him out to sea.
- **Where it stops.** The serial stops before the monkey's trick. c05.l05 reads the trick in
  the original as an unseen passage, and the serial never prints it.
- **The originals the volume reads.** Short original sentences from the same frame are read
  in c03.l05 (the wife's demand, with its futures) and c05.l01 (the journey, with its
  passives); c05.l04 reads the start of the journey (a locative absolute). Each is a story
  the learner already knows.

| Chapter | Episode | Grammar it uses | Words it recycles |
|---|---|---|---|
| c01–c02 | (no serial: §17 is the grammarians' line, below) | — | — |
| c03 | the wife's demand; the crocodile's reply; "she must be a she-monkey"; he goes back to the monkey | perfect narration (उवाच, जगाम), future in speech, strong/weak present cells | हृदयम्, भार्या, प्रयोजनम्, नूनम् |
| c04 | the invitation; the monkey climbs on his back | -त participles, absolutives (आरुह्य, गत्वा), infinitives (गन्तुम्), taddhitas (अमृतमयम्) | पृष्ठ- (glossed), गृहम्, आगच्छ |
| c05 | out at sea: "go slowly!"; the crocodile reveals his purpose | passives (गम्यताम्, नीयसे), causatives (प्रापयामि), locative absolute with a different doer (मकरे समुद्रं गच्छति) | शरीरम्, जलधिः, त्वरते |
| c05.l05 | the trick, in the original (unseen) | — | — |

**The grammarians' line (the §17 of Chapters 1, 2 and 6).** HISTORY and TRADITION
callouts, each with its key:
- c01: Pāṇini, his predecessors named in the sūtras (e.g. Śākalya, named in a sūtra: Teacher Notes: 8.3.19, which c06.l03 reads as D),
  and the fourteen sūtras' legend (TRADITION, labelled);
- c02: Kātyāyana and Patañjali; the Mahābhāṣya's statement of why grammar is studied
  (Paspaśāhnika);
- c06: the Kāśikā and the Kaumudīs, and how a beginner in the tradition met the grammar
  through Varadarāja's Laghusiddhāntakaumudī. Its opening follows this volume's Chapter 1,
  with one rule from Chapter 2: VLk 1–4 हलन्त्यम्, अदर्शनं लोपः (1.1.60, read in c02.l02),
  तस्य लोपः, आदिरन्त्येन सहेता; VLk 10–11
  (1.1.9, which the e-text prints "1,1.8", and 1.1.69, the savarṇa block); VLk 15–17 (6.1.77,
  1.1.66, 1.1.50). VLk 5–9 and 12–14 (1.2.27, 1.2.29–31, 1.1.8, 1.4.109, 1.1.7, 1.4.14; the e-text labels VLk 9 "1,2.8" and VLk 12 "1,1.109") stand
  between and are not this chapter's. That is said in c01.l01 as TRADITION and verified
  (`varlghku.htm`, lines 114–166).

**The भवति thread** (closed by the learner in c06.l04). Each step of the भवति derivation is
taught at its moment, on another form:

| Step of भवति | Tool | Taught on | Lesson |
|---|---|---|---|
| भो + अति → भवति | 6.1.78 एचोऽयवायावः read in the case code (+1.3.10) | भवति itself (the one step shown early, as in Volume 3) | c01.l03 |
| भू is a dhātu; affixes follow it | 1.3.1, 3.1.1, 3.1.2, 3.1.91 | रामः for 3.1.1–2; पठति for 1.3.1 and 3.1.91 | c02.l01, c03.l01 |
| ऊ → ओ is guṇa, a substitute | 1.1.2, 1.1.3, 1.1.50 (first in c01.l01, D, read in c01.l03); 1.1.52 (D) | सूर्योदयः; नयति for 1.1.52 | c02.l02; c03.l02 |
| the aṅga and its heading | 1.4.13, 6.4.1 अङ्गस्य | रामः, रामेण | c02.l01, c02.l03 |
| markers vanish | 1.3.2, 1.3.3, 1.3.9, 1.3.8 | सुँ, लट्, शप् | c01.l01, c02.l01, c03.l02 |
| लट् for the present; ल् → तिप् | 3.2.123, 3.4.77–78, 1.3.78, 1.4.99–108, 1.4.22 | पठति, रोचते | c03.l01 |
| शप् and guṇa before it | 3.4.113, 3.1.68, 7.3.84 | नयति, स्मरति | c03.l02 |
| why guṇa is not blocked | 1.2.4, 1.1.5 (शप् and तिप् are pit) | शृणोति / शृण्वन्ति | c03.l03 |
| kartari | 3.4.69 | पठ्यते vs पठति | c05.l01 |
| the whole, in order, from the toolbox card | — | भू → भवति | **c06.l04** |

**The नमस्ते thread, concluded.** Volume 3 derived नमः + ते → नमस्ते (8.3.34). c02.l01 adds
the other direction: the visarga of नमः is itself the made form. नमस् is an avyaya (1.1.37,
owned), so the ending सुँ after it is deleted by 2.4.82 अव्ययादाप्सुपः (D; the LSK reads it as
VLk 373); the word is still a pada, because a deleted affix still counts (1.1.62, Teacher
Notes); then स् → रुँ (8.2.66) → visarga (8.3.15). Before ते the visarga also arises (8.3.15 also works before a khar
such as त्) and is then replaced by स् (8.3.34), so नमस्ते shows an स् again, as a
substitute for the visarga, and नमः shows the visarga. The s-stem declension (मनस्, as a Δ card of listed cells) comes in c05.l03.

---

## 2. Exit profile and entry requirements

### 2.1 Entry (checked by v3.c06.l05)

**The exam and the ledger.** The learner has passed the Volume 3 exam, and owns 508
readable words (§3 of the Volume 3 plan).

**Paradigm ledger at entry** (Volume 3 plan §2.2):
- ✓ a-stems m./n.; ā-stems f.; ī-stems f.;
- ✓ i/u-stems m. (f. nom./acc./instr.); ṛ-stems (listed cells); the dual nom./acc.;
- ✓ personal pronouns (listed cells); तद् and its family; numerals 1–10 nom./acc.;
- ✓ thematic laṭ P and Ā, laṅ P, loṭ P (sg./pl. in all persons + 3du), vidhiliṅ P 3rd
  person; अस् and कृ in their listed cells;
- ◐ the rest, and R1–R6.

**Sūtras.** The learner recognises by number and gist the 28 sūtras of the Volume 3 plan,
§4.0.4: 2.3.16, 2.3.19, 1.4.14, 1.2.70, 7.3.101, 3.4.85, 3.4.86, 6.1.101, 6.1.87, 6.1.88,
6.1.77, 6.1.78, 6.1.109, 1.1.11, 8.3.34, 6.1.132, 8.3.23, 8.2.39, 8.4.40, 1.4.109, 1.4.110,
8.1.22, 1.1.27, 1.1.37, 1.4.59, 2.2.29, 2.2.24, 3.2.118.

**Names.** The learner knows the tradition's names for the cases, the persons, the voices,
the four present-system lakāras, the sandhi kinds (सवर्णदीर्घः गुणः वृद्धिः यण् …) and the
compound kinds.

**Reading.** The learner reads an unseen Hitopadeśa or Pañcatantra prose passage, printed
joined, with at most one gloss in five words. Every prepared and exam text of Volume 4 is
held to that ceiling or better (§5).

### 2.2 Exit (after passing v4.c06.l04, which gates Volume 5)

CEFR-informed functional labels only; Sanskrit has no official CEFR mapping
[REF:cefr2020]. The learner can:

**Understand**
1. Read an unseen passage of classical narrative prose of about 60–150 words, printed joined,
   with marginal glosses for no more than one word in six, names excluded. The figure is set
   by X-b (§5.8), a Hitopadeśa story not read before and chosen with no regard to the ledger:
   10 glossed of 63, about 1 in 6.3. With X-a, the end of the Vīravara thread (3 of 32), the
   exam's 95 words measure 13 glossed, about 1 in 7.3; the c05.l05 passage measures 6 of 31,
   about 1 in 5.2 (all counted by script from the printed pause forms, §5). Then say what
   happened, to whom, when and why, including:
   - who did what in passive sentences;
   - which action came first in absolutive chains;
   - what the absolutes set as background.
2. Recognise and parse every finite form and every participle in such a passage. That covers
   all the classical tense-moods (the ten rows of the c03.l06 table), with the aorist,
   benedictive, conditional and periphrastic future ◐ (recognised and named, not produced),
   the passive, causative and impersonal, the participles, the absolutive, the infinitive
   and the gerundive.
3. Read a short sūtra of the kinds met in the volume (saṃjñā, vidhi, paribhāṣā, adhikāra) by
   its case code:
   - supply its anuvṛtti from the preceding sūtra when told which word is carried;
   - say what it does;
   - check that against one line of the Kāśikā and its examples.
4. Follow the Laghusiddhāntakaumudī's prakriyā of a form already learned (the बभूव passage,
   VLk 393–401), naming each sūtra's job.

**Speak and write**
5. Narrate in the past with the imperfect, the perfect (3rd person), the -त participle with
   the instrumental of the agent, and absolutive chains (-त्वा, -य).
6. Speak of the future (लृट्) and of purpose (infinitive -तुम्); say what must or may be
   done (-तव्य, + instrumental); say what one has someone else do (the causative, with the
   right cases for the causee).
7. Turn active sentences into passive and back, and use the impersonal (मया गम्यते); set a
   scene with the locative absolute.
8. Decline the consonant stems of the listed classes (राजन्, -अत्, -मत्/-वत्, -इन्, -अस्) and
   use the numerals in all cases (listed cells), with the ordinals.
9. Coin transparent derivatives with the taught taddhitas (-ता, -त्व, -वत्/-मत्, -इन्, -तर,
   -तम) and resolve owned derivatives into base + suffix; name the doer of an owned verb with
   -तृ (कर्ता, गन्ता, वक्ता) and say why its root form differs from the -त participle's (the
   k-marker of क्त: no guṇa, the nasal dropped, samprasāraṇa).

**Derive and know about**
10. **Derive, according to Pāṇini, भू → भवति by themselves**: every step in order, each with
    its sūtra, chosen from
    the toolbox card (which lists the rules in number order, not in derivation order, with
    34 distractors; §4.6). Also derive
    any of the volume's model forms of the same difficulty: नयति, रामेण, अगच्छत्, शृणोति, जगाम,
    करिष्यति, कृतम्, आगत्य, पठ्यते, पाठयति, राजभिः, रामेभ्यः.
11. Recite and write the fourteen Māheśvara sūtras and expand any pratyāhāra from them.
12. Say, "according to Pāṇini", what a kāraka is and how case follows from it: the six
    definitions; 2.3.1 अनभिहिते; kāraka vs upapada vibhakti (नमस्करोति देवान् vs देवेभ्यो नमः);
    the double accusative; the absolute as a case outside the kārakas. Give an owned example
    of each.
13. Name the three meta-rules of the 1.x book (1.4.2, 1.1.56, 8.2.1) and show, with रामेभ्यः,
    केन and राजभिः (and त इच्छन्ति), what each decides.
14. Recognise by gist the volume's 25 new Q sūtras and the 25 new B sūtras (§1.4.1, §4.0.3),
    and by number and gist the 28 of Volume 3 and the 26 of the भवति derivation (§4.6.1). Sort
    a set of statements about the grammar into FACT, TRADITION, HISTORY, legend and banned
    claim (c06.l04 task G). Give an honest source line for every authentic passage read, and say in one
    line each where the Kāśikā, the Laghusiddhāntakaumudī and the Mahābhāṣya stand in the
    tradition (HISTORY, hedged dates).

**Paradigm ledger at exit.**
- **✓ productive:**
  - all Volume 3 ✓ tables;
  - the athematic present-system cells of the owned athematic verbs (P, by the D13 formula;
    ददाति in its listed cells);
  - the perfect, 3rd persons P;
  - the future, P and Ā;
  - the passive, laṭ and loṭ;
  - the causative, present system;
  - the participles -त (all cells), -तवत् (nom.), -मान (all cells), -अत् (all cells, T11);
  - the absolutive and the infinitive; the agent noun in -तृ (nom. sg.; its other cells are
    the owned ṛ-stem cells); the gerundive in -तव्य;
  - consonant stems: राजन्, -अत्, -मत्/-वत्, -इन्, -अस् (listed cells, §4.5);
  - numerals in all cases (listed cells) and the ordinals 1st–10th;
  - the taught taddhitas.
- **◐ recognition:**
  - the perfect, 1st and 2nd persons and Ā; the periphrastic perfect;
  - the periphrastic future; the conditional; the aorist; the benedictive;
  - the perfect participle; the future participle;
  - the desiderative, intensive and denominative;
  - the genitive absolute;
  - root nouns beyond the listed cells; अदस्;
  - the class-3 cells beyond ददाति's listed ones; the athematic Ā cells beyond the listed (ब्रूते);
  - the -अनीय and -य gerundives;
  - accent (one card).
- **Readable words at exit: 627** (§3).

---

## 3. Ledger policy for Volume 4 (extends STYLE_GUIDE §8, rules 1–15)

Rules 1–15 stay in force. The guiding test is unchanged: a word counts once, when the
learner first owns its lemma as a headword; nothing a taught pattern builds ever counts
again. Volume 4's taught patterns now include whole derivational processes, so rules 16–21
say what they build, and rules 22–23 (added at synthesis, reconciling the three designs) say
how headwords are chosen and how ordinals count.

| # | Rule | Examples |
|---|---|---|
| 16 | **Roots are grammar items, not words.** A root (धातुः: √भू, √गम्, डुकृञ्) as cited in a derivation or a Dhātupāṭha entry never counts. The verb counts once, as its 3sg present (rule 8). A root met only inside a sūtra's example (तुद्, नुद्, लू) is display. | √भू adds 0; भवति has counted since v1.c04.l01. |
| 17 | **Every form a taught formation builds from an owned verb belongs to that verb:** perfect, future, aorist, benedictive and conditional cells; passive and causative cells; the causative stem's whole present system. **Exception:** a causative whose meaning is not "cause to X" is headworded as its own lemma and counts once. The ones headworded in this volume are दर्शयति "shows", बोधयति "teaches, informs", स्थापयति "places" (MW and Apte give them their own senses), आकर्णयति "listens", a denominative of the owned कर्णः (Whitney §1053 ff.), and व्यापादयति "kills" (वि + आ + पद् "cause to perish": MW gives it its own sense). वेदयति "informs" and अर्पयति "hands over" would count under the same clause if headworded; neither is (अर्पयति was dropped, §7.1.2 S2). | गमयति, पाठयति, कारयति add 0; दर्शयति counts. |
| 18 | **Kṛt products of owned verbs are pattern-built** and never count: participles, absolutives, infinitives, gerundives, and agent nouns in -तृ when used as verb-forms. A kṛt noun or adjective with a lexicalised sense counts once when headworded. Already-counted kṛt words (कृत, गत, मृत, मुक्त, कर्ता, दाता, नयनम्, ज्ञानम् …) stay counted (rule 7: the ledger never decreases). | पठितः, गत्वा, कर्तुम्, कर्तव्यम् add 0; प्रसन्नः "gracious" counts if headworded. |
| 19 | **Taddhita products are pattern-built when transparent** (base owned, suffix taught): एकता, धनवान्, बलवत्तरः, पुत्रवत् add 0. A lexicalised taddhita counts once when headworded (rule 10's logic). Owned taddhitas (लौकिक, ममता, एकता, सुखी, पक्षी, श्रीमान्, धीमान्) stay counted. | लौकिक is re-derived in c04.l03 and adds 0. |
| 20 | **Technical vocabulary.** A grammatical term counts once when headworded as a noun the learner uses in Sanskrit sentences (§6 Sanskrit Explanation): सूत्रम्, प्रत्ययः, धातुः, आदेशः, लोपः. Labels never count: pratyāhāras (अच्, हल्), affix names with their markers (शप्, तिप्, क्त, ल्यप्), lakāra names (लट्, लिट्) and saṃjñā letters (टि, घु). Most of these were already display names in Volume 3 (लट्, लङ्). | प्रत्याहारः counts; अच् never does. |
| 21 | **Sūtra-internal and commentary forms never count** (अचि, इकः, भिसः, वेति, ग्रामादागच्छति as an example). A word first met in a sūtra or the Kāśikā counts when it is first headworded (गौः in c06.l01, from upādhyāyāya gāṃ dadāti). | — |
| 22 | **How a headword is chosen.** A word is headworded because the lesson's derivation or reading needs it, or because it ranks among the commonest lemmas of the DCS Hitopadeśa not yet owned (`research/evidence/vol4-plan/synth-work/hitlem.txt`; e.g. स्वामिन् 68, भय 43, आलोचय् 25, स्त्री 24, कोप 22, भृत्य 22, दैव 21, कारण 21, उत्था 21, मूर्ख 20). It is **never** chosen because it occurs in an exam's unseen passage; where a word chosen for a lesson or a prepared text also occurs there, §5 reports the gloss ratio both ways. | शृगालः (20 tokens) is *not* headworded, because the volume exam's X-b uses it: it stays glossed. |
| 23 | **Ordinals add 0.** The ordinals प्रथमः … दशमः are taddhita products of owned cardinals (5.2.48 ff.; the irregular प्रथम, द्वितीय, तृतीय, तुरीय are given as listed forms) and are pattern-built (rule 19); the case names प्रथमा … सप्तमी, display in Volume 3, are their feminines and add 0 too. A lexicalised kṛt adjective in -य (शक्यम् "possible") or -त (वृद्धः "old") counts once when headworded (rule 18). | प्रथमः, पञ्चमः add 0; शक्यम् counts. |

Rules 4, 8 and 13 are read with rule 17. The chunk मा भैषीः (aorist, taught whole because
the aorist is ◐) counts once, as उवाच did in Volume 3. Its system is never productive in
Volume 4, so it is never re-counted. Upgrade rows continue (`vocabulary_count` only): गणः
(c03.l02, V1 गण) and गुणः (c02.l02, V1 गुण). अर्थः and कालः took their upgrade rows in
v3.c01.l04 and v2.c03.l03; in Volume 4 they are review rows.

**Budgets.**
- 3–8 ledger-new per teaching lesson (cap 8, as in Volume 3); 0 in each exam.
- Volume 4 adds fewer words than Volume 3 (119 against 148) and much more apparatus. The real
  load is rules and cells, so each lesson's §14 adds a third line beside "cells drilled: n":
  **"tools added: n"** (the new Q, B and D sūtras the lesson first uses, §1.4.1; a sūtra owned from Volume 3 is not counted).

| Chapter | Entering | l01 | l02 | l03 | l04 | l05 | l06 | New | Exit |
|---|---|---|---|---|---|---|---|---|---|
| c01 माहेश्वराणि सूत्राणि | 508 | 5 | 4 | 4 | 0 | — | — | 13 | **521** |
| c02 अष्टाध्यायीप्रवेशः | 521 | 6 | 5 | 5 | 0 | — | — | 16 | **537** |
| c03 धातुः तिङ्विस्तारश्च | 537 | 5 | 6 | 4 | 6 | 7 | 0 | 28 | **565** |
| c04 कृत्-तद्धित-समासाः | 565 | 8 | 7 | 6 | 5 | 0 | — | 26 | **591** |
| c05 प्रयोगाः विभक्तिविस्तारश्च | 591 | 7 | 6 | 7 | 6 | 0 | — | 26 | **617** |
| c06 सूत्रपाठः | 617 | 4 | 3 | 3 | 0 | — | — | 10 | **627** |

Lesson chain:
- **c01:** 508 → 513 → 517 → 521 → 521.
- **c02:** 521 → 527 → 532 → 537 → 537.
- **c03:** 537 → 542 → 548 → 552 → 558 → 565 → 565.
- **c04:** 565 → 573 → 580 → 586 → 591 → 591.
- **c05:** 591 → 598 → 604 → 611 → 617 → 617.
- **c06:** 617 → 621 → 624 → 627 → 627.

**Volume 4 adds 119 (508 → 627).** Canonical exits: **521 · 537 · 565 · 591 · 617 · 627.**
Of the base design's 96, 92 are kept and 4 were dropped: 2 as double or forbidden counts
(प्रभातम्, owned since v2.c01.l03, §7.1.2 S8; अर्पयति, chosen for an exam's unseen passage, S2),
राज्यम्, which no text or sentence of the plan used (review: N1's श्लोकद्वयम् needed द्वयम्), and
उच्चारणम्, used in no sentence (review: c01.l02's सवर्णौ needed सवर्णः).
27 were added at synthesis and review (rule 22; recounted by script, `research/evidence/vol4-plan/work/basehw.py`): 5 replace
the dropped four (युद्धम् for प्रभातम्; व्यापादयति and मृत्युः for अर्पयति; द्वयम् for राज्यम्; सवर्णः for उच्चारणम्), 3 are Kāśikā stock
words for c06.l01 (उपाध्यायः, परशुः, कटः), and 19 were chosen by DCS frequency or a reading's
need (among them स्थाली, the Kāśikā's example in c05.l04, and असिद्धः, 8.2.1's word). 92 + 27
= 119, so that every prepared and exam text reads at one gloss in five or better (§5).

All 119 headwords were checked by script (`research/evidence/vol4-plan/synth-work/hw.py`) against the compiled list of
Volumes 1–3 (no double counts; श्वः and अद्य, owned since Volume 2, were dropped from candidate
lists; the base design's प्रभातम्, owned since v2.c01.l03, was replaced by युद्धम्; सुहृत्,
owned since v3.c06.l02, was not added). The verbs जयति and हरति are new lemmas beside the
owned nouns जय and हर (V1), by rule 8. The script also checks that each block lists exactly
its §3 figure, and that the chain adds up from 508. All are attested in
Monier-Williams; Apte is spot-checked (nominative headwords, or anusvāra spellings to be
checked at Pass C). Flagged pair and homograph: the -इ- of स्वपिति (c03.l02) and the -इ- of पठिष्यति (c03.l05) are
the same augment इट्, given by two sūtras (7.2.76 रुदादिभ्यः सार्वधातुके before a sārvadhātuka
ending of the rud-group; 7.2.35 आर्धधातुकस्येड् वलादेः before an ārdhadhātuka one such as स्य);
the true homograph is the 1sg Ā ending इट् of 3.4.78 (c03.l01), a different item with the same
name (लप्स्ये: स्य + the ending इट्, no augment); named in §12 of both lessons; and विद्यते "is found, exists" (c05.l01) vs the owned वेत्ति family (Teacher
Notes only).

---
## 4. Chapter-by-chapter syllabus

### 4.0 The volume at a glance

| id | Title | Type | The one grammar point | The spine derivation | New |
|---|---|---|---|---|---|
| v4.c01.l01 | अइउण् · The Fourteen Sūtras | grammar | the fourteen sūtras and the pratyāhāra (first sound + marker) | इति + अवदत् → इत्यवदत् (6.1.77, read at last) | 5 |
| v4.c01.l02 | सवर्णम् · One Letter for Its Whole Family | grammar | savarṇa and tapara: how long a letter in a rule reaches | विद्या + आलयः → विद्यालयः; गच्छामि vs गच्छथ | 4 |
| v4.c01.l03 | इको यणचि · How a Rule Speaks | grammar | the case code of the sūtras (gen. · loc. · abl. · nom.) | भो + अति → भवति; देव + भिस् → देवैः | 4 |
| v4.c01.l04 | प्रथमपरीक्षा · Chapter 1 Exam | review | the sound system as a grammar's alphabet | — | 0 |
| v4.c02.l01 | अङ्गं पदं भम् · One Base, Three Names | grammar | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) | राम + सुँ → रामः; नमस् → नमः; राजन् → राजभिः, राज्ञा | 6 |
| v4.c02.l02 | आदेशः आगमः लोपः · Replace, Add, Delete | grammar | the three operations; guṇa and vṛddhi defined as substitutes | सूर्योदयः; गच्छ- → अगच्छत् | 5 |
| v4.c02.l03 | अनुवृत्तिः · Words Carried Down | grammar | anuvṛtti and adhikāra (with ṇatva and ṣatva as the material) | रामेण; रामेषु; करोषि | 5 |
| v4.c02.l04 | द्वितीयपरीक्षा · Chapter 2 Exam | review | reading the machinery | — | 0 |
| v4.c03.l01 | लट् · From ल् to -ति | grammar | the l-affix and its replacement; pada from the root's marker | पठ् → पठति; रुच् → रोचते | 5 |
| v4.c03.l02 | शप् · The Class Sign | grammar | the vikaraṇa: ten present classes; guṇa before a pit sign | नी → नयति; स्मृ → स्मरति | 6 |
| v4.c03.l03 | पित् ङित् · Strong and Weak | grammar | the p-marker decides strong vs weak (1.2.4 + 1.1.5) | शृणोति / शृण्वन्ति; अस्ति / सन्ति | 4 |
| v4.c03.l04 | लिट् · The Perfect | grammar | the perfect: doubling + its own endings | गम् → जगाम; दा → ददौ; वच् → उवाच (read in the production table, not derived) | 6 |
| v4.c03.l05 | लृट् · The Future | grammar | the -स्य- future (with the card of the four other lakāras) | कृ → करिष्यति | 7 |
| v4.c03.l06 | तृतीयपरीक्षा · Chapter 3 Exam: the √भू Table | review | the classical tense-mood table (ten rows) on one page | — | 0 |
| v4.c04.l01 | क्तः शतृ · Done and Doing | grammar | the participle as a kṛt adjective: -त/-तवत् (k-marked, weak root) and -अत्/-मान (on the present stem) | कृ → कृत; गम् → गत; गच्छत् shown, not derived | 8 |
| v4.c04.l02 | क्त्वा तुमुन् तृच् · Having Done, To Do, the Doer | grammar | the indeclinable kṛt forms, and what the k-marker does to the root: -त्वा/-य (k-marked: weak root) vs -तुम् and the agent -तृ (not k-marked: guṇa, the nasal kept, no samprasāraṇa) | गम् → गत्वा, आगत्य · गन्तुम्, गन्ता | 7 |
| v4.c04.l03 | तद्धिताः · Words from Words | grammar | the taddhita: base + secondary suffix, with vṛddhi | पाणिनि → पाणिनीयम्; लोक → लौकिक | 6 |
| v4.c04.l04 | समासः · Compounds as Derivations | grammar | the compound as a derivation (sup-lopa, samāsānta, upapada) | राज्ञः पुरुषः → राजपुरुषः; जल + जन् → जलज | 5 |
| v4.c04.l05 | चतुर्थपरीक्षा · Chapter 4 Exam | review | making words | — | 0 |
| v4.c05.l01 | कर्मणि प्रयोगः · Who the Ending Names | grammar | passive and impersonal (3.4.69; yak; 2.3.1) | पठ्यते; उच्यते; मया गम्यते | 7 |
| v4.c05.l02 | णिच् · Making Someone Do | grammar | the causative, and the causee's case (1.4.51–53) | भू → भावयति; पठ् → पाठयति; कृ → कारयति | 6 |
| v4.c05.l03 | हलन्ताः · Consonant Stems as One System | grammar | one ending set, three stems (strong · pada · bha); द्वि–चतुर् and the tens as a Δ card | गच्छत् + सुँ → गच्छन्; भवत् → भवान् | 7 |
| v4.c05.l04 | कारकाणि सति सप्तमी च · The Six Roles, and the Case Outside Them | grammar | the locative absolute (2.3.37–38), the case no kāraka gives; its card is the kāraka map (the six kārakas, 1.4.23–55, through 2.3.1, and the upapada case) | अस् → सत्, सति; सूर्ये उदिते, glossed | 6 |
| v4.c05.l05 | पञ्चमपरीक्षा · Chapter 5 Exam | review | voice and case | — | 0 |
| v4.c06.l01 | संज्ञा · Reading a Definition with Its Commentary | reading | the anatomy of a vṛtti, on the kāraka saṃjñās (sūtra, carried words, gloss, example, "इति किम्?") | the kāraka prakaraṇa read; the kārakas of six owned sentences named | 4 |
| v4.c06.l02 | विधिः · Reading an Operation | reading | reading vidhi sūtras with the Kāśikā, and a prakriyā in the LSK's own words | 8.4.1–2, 7.3.84 read; LSK on बभूव | 3 |
| v4.c06.l03 | परिभाषा · When Rules Meet | reading | the three meta-rules (1.4.2, 1.1.56, 8.2.1) | रामेभ्यः; केन; राजभिः; त इच्छन्ति | 3 |
| v4.c06.l04 | चतुर्थखण्डपरीक्षा · The Volume 4 Exam | review | the volume; gates Volume 5 (two sittings) | **भू → भवति, by the learner** | 0 |

### 4.0.1 Every row of the Volume 3 plan's §6, with its Volume 4 lesson

| Volume 3 §6 row | Volume 4 lesson(s) |
|---|---|
| The Māheśvara sūtras, pratyāhāras (incl. *sup*, *tiṅ*), the Aṣṭādhyāyī's architecture, anubandhas → v4.c01, v4.c02 | sūtras and pratyāhāras: c01.l01–l02; *sup* as a pratyāhāra: c02.l01; *tiṅ*: c03.l01; architecture (prakṛti, pratyaya, saṃjñā, operations, anuvṛtti, adhikāra): c02.l01–l03; anubandhas: arrive with their forms (c01.l01 … c04.l04) and are collected on the card in c03.l03 |
| Kāraka theory: 1.4.23–55, vibhakti sūtras 2.3.1 ff.; upapada vs kāraka vibhakti; double accusative (1.4.51) → v4.c05 | 1.4.49, 1.4.54, 2.3.1, 2.3.2, 2.3.18, 2.3.46: c05.l01; 1.4.51–53, 1.4.55 (the double accusative 1.4.51 ✓): c05.l02; **the kāraka lesson c05.l04** (the six definitions, the kāraka map, vivakṣā, upapada vibhakti 2.3.16 vs kāraka vibhakti, and the absolute as the case outside the kārakas); read with the Kāśikā: c06.l01 |
| Roots, the ten present classes, stem formation with guṇa/vṛddhi (शृणोति, गृह्णाति, स्वपिति, तिष्ठति, यच्छति) → v4.c03 | c03.l01 (root), c03.l02 (classes; तिष्ठति, यच्छति, स्वपिति), c03.l03 (शृणोति, गृह्णाति) |
| The six lakāras outside the present system (लिट् = परोक्षे, IR-019; aorist and मा + aorist; both futures; conditional; benedictive); the √भू six-lakāra table → v4.c03 | c03.l04 (लिट्), c03.l05 (लृट् ✓; लुट्, लृङ्, लुङ्, आशीर्लिङ् ◐; मा भैषीः), c03.l06 (the √भू table: the ten rows of the classical table, liṅ in its two uses; the tradition's own ten count liṅ once and include the Vedic leṭ, c03.l05) |
| कृ ubhayapadī (IR-020); voice; passive and impersonal (IR-023); causative → v4.c03, v4.c05 | IR-020: c03.l01; voice, passive, impersonal, IR-023: c05.l01; causative: c05.l02 |
| Participles (-अत्, -मान, -त; IR-024), absolutives, infinitives → v4.c04 | c04.l01 (participles as formation, IR-024; -अत् declined in c05.l03, as the consonant-stem row requires), c04.l02 (absolutive, infinitive) |
| कृत् and तद्धित derivation (-ता, -त्व, -मत्, -वत्, -इन्, -क, agent -तृ; IR-005) → v4.c04 | kṛt: c04.l01–l02 (agent -तृ as a process with ✓ nominatives, c04.l02, beside -तुम्); taddhita: c04.l03 (-ता, -त्व, -मत्/-वत्, -इन् processed, -मय and -वत् on the card; the -इक of लौकिक is ठञ्, 5.1.44 with 7.3.50, not ठक्; the plain -क of बालकः and हिरण्यकः is on the card, ◐, as क / कन् by the rules headed by 5.3.70 and by 5.4.29, kept in Teacher Notes; Volume 3's "products met, not processes" closes for the rest, and the single strand closes IR-005's duplicated suffix unit) |
| The rājan example of aṅga/pada/bha → **v4.c02** | **c02.l01**; declension c05.l03 |
| Consonant-stem declension as a system (राजन्, -इन्, -अस्, -मत्/-वत्/-अत्, root nouns, ū-stems, सखि, पति, neuter i/u, feminine adjectives, नप्तृ, नृ, neuter ṛ) → **v4.c05** | **c05.l03** (T11 + ✓ Δ cards; the rest ◐ Δ cards) |
| Internal sandhi: ṇatva (8.4.1–2), ṣatva (8.3.59), guṇa and vṛddhi defined as substitutes (1.1.1–2; IR-016, IR-021) → **v4.c02** (D18); 8.4.1–2 read as sūtras in v4.c06 | ṇatva, ṣatva: **c02.l03**; guṇa/vṛddhi defined: **c02.l02** (IR-021); 8.4.1–2 read with the Kāśikā: c06.l02 (IR-016 closed) |
| Compound accent and the इन्द्रशत्रु contrast (IR-026); samāsānta (5.4.91); prādi, gati, upapada → v4.c04 | c04.l04 |
| -तर / -तम → v4.c04 | c04.l03 (card, ✓) |
| यावत्…तावत्; the -वत् / -मात्र adverbs; gati prefixes → v4.c04 | c04.l03 for यावत्/तावत् (the pair ✓, part of the taddhita point; its sūtra 5.2.39 is K) and the -वत् / -मात्र adverbs (card, ◐); c04.l04 for gati |
| The locative and genitive absolute → v4.c05 | c05.l04 |
| Numeral declension (द्वि–चतुर् obliques, 5–19 obliques, ordinals, numeral syntax) → v4.c05 (D11) | c05.l03 (numeral card: द्वि–चतुर्, the tens, 100, 1000 and their syntax); c05.l04 (Station 0 and §15: 5–19 obliques, the ordinals, the case names as ordinals) |
| The 1.x meta-rules (8.2.1, 1.1.56, 1.4.2); sūtra reading word by word → v4.c06 | c06.l03 (meta-rules); c06.l01, c06.l02 (reading) |
| Vedic forms, accent, the Ṛgveda padapāṭha → v5.c03 | not in Volume 4 (one leṭ line, c03.l05; the accent card, c04.l04) |
| Metre and अन्वय in depth → v5.c04, v5.c01 | not in Volume 4 |

Four locus differences are recorded rather than silently made:
- IR-016's "→ v4.c06" (IMPROVEMENT_REPORT) and the Volume 3 plan's "ṇatva v4.c02" are both
  kept: the rule is taught in c02.l03 and read in c06.l02.
- IR-026's "→ v4.c02" (IMPROVEMENT_REPORT) yields to the Volume 3 plan's binding "v4.c04"
  (G8 of that plan's critique).
- IR-022's "→ v4.c02 anubandha table" is met in v4.c03.l03, where the anubandha card collects
  the markers once the p-marker has been taught (the k- and ṅ-rows need 1.2.4 and 1.1.5).
- IR-023's "→ v4.c03 rebuilds" is met in v4.c05.l01, the passive lesson (T13), because the
  passive belongs to the voice chapter (V4-D5).
The report's summary table is to be updated for all four by one PR (§7.3, Q8).

### 4.0.2 The ROADMAP preservation-map rows that land in Volume 4

| 1.x asset (PDF page) | ROADMAP destination | Volume 4 lesson | Note |
|---|---|---|---|
| 10 lakāras + forms (pp.74–75) | v4.c03 | c03.l05 (card), c03.l06 (table) | IR-019, IR-020, IR-040 corrected; the tradition's ten (with leṭ, Vedic only, and liṅ counted once) told apart from the table's ten rows (liṅ split) |
| Kāraka lesson + Fillmore note (pp.87–89) | v3.c02 (functional), v4.c05 (theory) | c05.l01, c05.l02, c05.l04 (theory; the kāraka lesson is c05.l04), c06.l01 (the sūtras read) | the Fillmore note prints in c05.l04: both keys exist (Q6 closed) |
| √भू 6-lakāra table (pp.127–128) | v4.c03 | c03.l06, completed to the ten rows of the classical table | cell-checked against Whitney at the fact base |
| tad/idam/numeral paradigms (pp.111–113, 125–127) | v3.c02, v3.c05, v4.c05 (numeral system) | c05.l03 (numeral card, first half), c05.l04 (Station 0 and §15, second half) | the ROADMAP row as amended by the Volume 3 D11 PR |
| rājan aṅga/pada/bha example (pp.97–99) | v4.c02 | c02.l01 | declined in c05.l03 |
| Gerund/infinitive lesson (pp.106–108) | v4.c04 | c04.l02 | with production; R5 closed |
| Meta-rules 8.2.1/1.1.56/1.4.2 (pp.115–117) | v4.c06 | c06.l03 | each with the owned form it decides |
| "Read a Real Sūtra" (pp.130–134) | v4.c06 (expanded to a chapter) | c06.l01–l03 | Kāśikā and LSK lines verified |
| (ROADMAP note) the 1.x Chapter 11 skeleton, 38/40 citations correct | Volume 4 | whole volume | the two wrong citations (IR-017: 1.1.45, 8.2.39) corrected in c01.l01 and c04.l01 |

### 4.0.3 Every sūtra quoted to the learner

Generated by script (`research/evidence/vol4-plan/synth-work/sutras.py`) from the tier lines of the lesson blocks, with
every number and text looked up in the data file; regenerate after any change to a block.
Tiers as in §1.1 principle 9 and §1.4.1. "Owned V3" = among the 28 of the Volume 3 plan
(§4.0.4 there). "Tier for the budget" is the highest tier the sūtra reaches (B > Q > R > D >
K); a B sūtra is B wherever it is printed. "Later" lists every later lesson that prints it.

| Sūtra | Text (data file) | First in learner text (tier) | Later | Tier for the budget | The lesson's point |
|---|---|---|---|---|---|
| 1.1.71 | आदिरन्त्येन सहेता | c01.l01 (Q) | — | Q | the fourteen sūtras and the pratyāhāra (first sound + marker) |
| 1.3.3 | हलन्त्यम् | c01.l01 (B) | — | B | the fourteen sūtras and the pratyāhāra (first sound + marker) |
| 1.3.9 | तस्य लोपः | c01.l01 (B) | — | B | the fourteen sūtras and the pratyāhāra (first sound + marker) |
| 6.1.77 | इको यणचि | c01.l01 (re) | — | owned (owned V3) | the fourteen sūtras and the pratyāhāra (first sound + marker) |
| 1.1.50 | स्थानेऽन्तरतमः | c01.l01 (D) | c01.l03 (D) | D | the fourteen sūtras and the pratyāhāra (first sound + marker) |
| 1.1.69 | अणुदित् सवर्णस्य चाप्रत्ययः | c01.l02 (Q) | — | Q | savarṇa and tapara: how long a letter in a rule reaches |
| 1.1.9 | तुल्यास्यप्रयत्नं सवर्णम् | c01.l02 (D) | — | D | savarṇa and tapara: how long a letter in a rule reaches |
| 1.1.70 | तपरस्तत्कालस्य | c01.l02 (D) | — | D | savarṇa and tapara: how long a letter in a rule reaches |
| 6.1.101 | अकः सवर्णे दीर्घः | c01.l02 (re) | c06.l01 (re) | owned (owned V3) | savarṇa and tapara: how long a letter in a rule reaches |
| 7.3.101 | अतो दीर्घो यञि | c01.l02 (re) | — | owned (owned V3) | savarṇa and tapara: how long a letter in a rule reaches |
| 1.1.49 | षष्ठी स्थानेयोगा | c01.l03 (Q) | — | Q | the case code of the sūtras (gen. · loc. · abl. · nom.) |
| 1.1.66 | तस्मिन्निति निर्दिष्टे पूर्वस्य | c01.l03 (Q) | — | Q | the case code of the sūtras (gen. · loc. · abl. · nom.) |
| 1.1.67 | तस्मादित्युत्तरस्य | c01.l03 (Q) | — | Q | the case code of the sūtras (gen. · loc. · abl. · nom.) |
| 1.3.10 | यथासंख्यमनुदेशः समानाम् | c01.l03 (D) | — | D | the case code of the sūtras (gen. · loc. · abl. · nom.) |
| 7.1.9 | अतो भिस ऐस् | c01.l03 (D) | c06.l03 (D) | D | the case code of the sūtras (gen. · loc. · abl. · nom.) |
| 6.1.78 | एचोऽयवायावः | c01.l03 (re) | c05.l02 (D), c06.l03 (D) | B (owned V3) | the case code of the sūtras (gen. · loc. · abl. · nom.) |
| 1.4.17 | स्वादिष्वसर्वनामस्थाने | c02.l01 (Q) | — | Q | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 1.4.18 | यचि भम् | c02.l01 (Q) | — | Q | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 3.1.1 | प्रत्ययः | c02.l01 (B) | — | B | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 3.1.2 | परश्च | c02.l01 (B) | — | B | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 1.3.2 | उपदेशेऽजनुनासिक इत् | c02.l01 (B) | — | B | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 1.4.13 | यस्मात् प्रत्ययविधिस्तदादि प्रत्ययेऽङ्गम् | c02.l01 (B) | — | B | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 8.2.66 | ससजुषो रुः | c02.l01 (D) | — | D | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 8.3.15 | खरवसानयोर्विसर्जनीयः | c02.l01 (D) | — | D | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 7.1.24 | अतोऽम् | c02.l01 (D) | — | D | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 6.1.107 | अमि पूर्वः | c02.l01 (D) | — | D | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 8.2.7 | नलोपः प्रातिपदिकान्तस्य | c02.l01 (D) | c05.l03 (D), c06.l03 (D) | D | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 6.4.134 | अल्लोपोऽनः | c02.l01 (D) | c05.l03 (D) | D | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 2.4.82 | अव्ययादाप्सुपः | c02.l01 (D) | — | D | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 8.4.40 | स्तोः श्चुना श्चुः | c02.l01 (D) | — | D (owned V3) | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 1.2.45 | अर्थवदधातुरप्रत्ययः प्रातिपदिकम् | c02.l01 (K) | — | K | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 1.1.43 | सुडनपुंसकस्य | c02.l01 (K) | c05.l03 (D) | D | prakṛti + pratyaya; the base's names aṅga / pada / bha (the rājan example) |
| 1.1.1 | वृद्धिरादैच् | c02.l02 (Q) | — | Q | the three operations; guṇa and vṛddhi defined as substitutes |
| 1.1.2 | अदेङ् गुणः | c02.l02 (B) | — | B | the three operations; guṇa and vṛddhi defined as substitutes |
| 1.1.3 | इको गुणवृद्धी | c02.l02 (B) | — | B | the three operations; guṇa and vṛddhi defined as substitutes |
| 1.1.46 | आद्यन्तौ टकितौ | c02.l02 (D) | c04.l02 (D), c06.l02 (D) | D | the three operations; guṇa and vṛddhi defined as substitutes |
| 1.1.60 | अदर्शनं लोपः | c02.l02 (D) | — | D | the three operations; guṇa and vṛddhi defined as substitutes |
| 6.1.84 | एकः पूर्वपरयोः | c02.l02 (D) | — | D | the three operations; guṇa and vṛddhi defined as substitutes |
| 6.1.87 | आद्गुणः | c02.l02 (D) | — | D (owned V3) | the three operations; guṇa and vṛddhi defined as substitutes |
| 6.1.88 | वृद्धिरेचि | c02.l02 (D) | — | D (owned V3) | the three operations; guṇa and vṛddhi defined as substitutes |
| 3.4.100 | इतश्च | c02.l02 (D) | — | D | the three operations; guṇa and vṛddhi defined as substitutes |
| 6.4.71 | लुङ्लङ्लृङ्क्ष्वडुदात्तः | c02.l02 (D) | — | D | the three operations; guṇa and vṛddhi defined as substitutes |
| 1.1.51 | उरण् रपरः | c02.l02 (K) | c03.l02 (D) | D | the three operations; guṇa and vṛddhi defined as substitutes |
| 8.4.1 | रषाभ्यां नो णः समानपदे | c02.l03 (Q) | c06.l02 (R) | Q | anuvṛtti and adhikāra (with ṇatva and ṣatva as the material) |
| 6.4.1 | अङ्गस्य | c02.l03 (B) | — | B | anuvṛtti and adhikāra (with ṇatva and ṣatva as the material) |
| 8.3.59 | आदेशप्रत्यययोः | c02.l03 (D) | — | D | anuvṛtti and adhikāra (with ṇatva and ṣatva as the material) |
| 8.4.2 | अट्कुप्वाङ्नुम्व्यवायेऽपि | c02.l03 (D) | c06.l02 (R) | R | anuvṛtti and adhikāra (with ṇatva and ṣatva as the material) |
| 7.1.12 | टाङसिङसामिनात्स्याः | c02.l03 (D) | c06.l01 (D), c06.l03 (D) | D | anuvṛtti and adhikāra (with ṇatva and ṣatva as the material) |
| 7.3.103 | बहुवचने झल्येत् | c02.l03 (D) | c06.l03 (D) | D | anuvṛtti and adhikāra (with ṇatva and ṣatva as the material) |
| 8.3.55 | अपदान्तस्य मूर्धन्यः | c02.l03 (D) | — | D | anuvṛtti and adhikāra (with ṇatva and ṣatva as the material) |
| 8.3.57 | इण्कोः | c02.l03 (D) | — | D | anuvṛtti and adhikāra (with ṇatva and ṣatva as the material) |
| 8.4.37 | पदान्तस्य | c02.l03 (D) | — | D | anuvṛtti and adhikāra (with ṇatva and ṣatva as the material) |
| 3.4.99 | नित्यं ङितः | c02.l03 (D) | — | D | anuvṛtti and adhikāra (with ṇatva and ṣatva as the material) |
| 1.3.12 | अनुदात्तङित आत्मनेपदम् | c03.l01 (Q) | — | Q | the l-affix and its replacement; pada from the root's marker |
| 1.3.72 | स्वरितञितः कर्त्रभिप्राये क्रियाफले | c03.l01 (Q) | — | Q | the l-affix and its replacement; pada from the root's marker |
| 1.3.1 | भूवादयो धातवः | c03.l01 (B) | — | B | the l-affix and its replacement; pada from the root's marker |
| 3.2.123 | वर्तमाने लट् | c03.l01 (B) | — | B | the l-affix and its replacement; pada from the root's marker |
| 3.4.77 | लस्य | c03.l01 (B) | — | B | the l-affix and its replacement; pada from the root's marker |
| 3.4.78 | तिप्तस्झिसिप्थस्थमिब्वस्मस् तातांझथासाथांध्वमिड्वहिमहिङ् | c03.l01 (B) | — | B | the l-affix and its replacement; pada from the root's marker |
| 1.3.78 | शेषात् कर्तरि परस्मैपदम् | c03.l01 (B) | — | B | the l-affix and its replacement; pada from the root's marker |
| 3.1.91 | धातोः | c03.l01 (B) | — | B | the l-affix and its replacement; pada from the root's marker |
| 1.4.99 | लः परस्मैपदम् | c03.l01 (B) | — | B | the l-affix and its replacement; pada from the root's marker |
| 1.4.101 | तिङस्त्रीणि त्रीणि प्रथममध्यमोत्तमाः | c03.l01 (B) | — | B | the l-affix and its replacement; pada from the root's marker |
| 1.4.102 | तान्येकवचनद्विवचनबहुवचनान्येकशः | c03.l01 (B) | — | B | the l-affix and its replacement; pada from the root's marker |
| 1.4.108 | शेषे प्रथमः | c03.l01 (B) | — | B | the l-affix and its replacement; pada from the root's marker |
| 1.4.22 | द्व्येकयोर्द्विवचनैकवचने | c03.l01 (B) | — | B | the l-affix and its replacement; pada from the root's marker |
| 1.4.100 | तङानावात्मनेपदम् | c03.l01 (D) | — | D | the l-affix and its replacement; pada from the root's marker |
| 3.4.79 | टित आत्मनेपदानां टेरे | c03.l01 (D) | — | D | the l-affix and its replacement; pada from the root's marker |
| 3.4.113 | तिङ्शित्सार्वधातुकम् | c03.l02 (B) | — | B | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 3.1.68 | कर्तरि शप् | c03.l02 (B) | — | B | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 1.3.8 | लशक्वतद्धिते | c03.l02 (B) | — | B | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 7.3.84 | सार्वधातुकार्धधातुकयोः | c03.l02 (B) | c04.l02 (D), c05.l02 (D), c06.l02 (R) | B | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 1.1.52 | अलोऽन्त्यस्य | c03.l02 (D) | — | D | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 7.3.86 | पुगन्तलघूपधस्य च | c03.l02 (D) | c05.l02 (D) | D | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 7.2.76 | रुदादिभ्यः सार्वधातुके | c03.l02 (D) | — | D | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 7.3.77 | इषुगमियमां छः | c03.l02 (D) | — | D | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 7.3.78 | पाघ्राध्मास्थाम्नादाण्दृश्यर्त्तिसर्त्तिशदसदां पिबजिघ्रधमतिष्ठमनयच्छपश्यर्च्छधौशीयसीदाः | c03.l02 (D) | — | D | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 2.4.72 | अदिप्रभृतिभ्यः शपः | c03.l02 (K) | — | K | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 2.4.75 | जुहोत्यादिभ्यः श्लुः | c03.l02 (K) | — | K | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 3.1.69 | दिवादिभ्यः श्यन् | c03.l02 (K) | — | K | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 3.1.73 | स्वादिभ्यः श्नुः | c03.l02 (K) | — | K | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 3.1.77 | तुदादिभ्यः शः | c03.l02 (K) | — | K | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 3.1.78 | रुधादिभ्यः श्नम् | c03.l02 (K) | — | K | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 3.1.79 | तनादिकृञ्भ्य उः | c03.l02 (K) | — | K | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 3.1.81 | क्र्यादिभ्यः श्ना | c03.l02 (K) | — | K | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 3.1.25 | सत्यापपाशरूपवीणातूलश्लोकसेनालोमत्वचवर्मवर्णचूर्णचुरादिभ्यो णिच् | c03.l02 (K) | — | K | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 7.3.79 | ज्ञाजनोर्जा | c03.l02 (K) | — | K | the vikaraṇa: ten present classes; guṇa before a pit sign |
| 1.2.4 | सार्वधातुकमपित् | c03.l03 (Q) | c06.l02 (R) | Q | the p-marker decides strong vs weak (1.2.4 + 1.1.5) |
| 1.1.5 | क्ङिति च | c03.l03 (Q) | c04.l01 (D), c04.l02 (D) | Q | the p-marker decides strong vs weak (1.2.4 + 1.1.5) |
| 3.1.74 | श्रुवः शृ च | c03.l03 (D) | — | D | the p-marker decides strong vs weak (1.2.4 + 1.1.5) |
| 7.1.3 | झोऽन्तः | c03.l03 (D) | — | D | the p-marker decides strong vs weak (1.2.4 + 1.1.5) |
| 6.4.110 | अत उत् सार्वधातुके | c03.l03 (D) | — | D | the p-marker decides strong vs weak (1.2.4 + 1.1.5) |
| 6.4.111 | श्नसोरल्लोपः | c03.l03 (D) | c05.l04 (D) | D | the p-marker decides strong vs weak (1.2.4 + 1.1.5) |
| 6.1.16 | ग्रहिज्यावयिव्यधिवष्टिविचतिवृश्चतिपृच्छतिभृज्जतीनां ङिति च | c03.l03 (D) | — | D | the p-marker decides strong vs weak (1.2.4 + 1.1.5) |
| 6.4.113 | ई हल्यघोः | c03.l03 (K) | — | K | the p-marker decides strong vs weak (1.2.4 + 1.1.5) |
| 3.2.115 | परोक्षे लिट् | c03.l04 (Q) | c06.l02 (R) | Q | the perfect: doubling + its own endings |
| 6.1.8 | लिटि धातोरनभ्यासस्य | c03.l04 (D) | c06.l02 (R) | R | the perfect: doubling + its own endings |
| 3.4.82 | परस्मैपदानां णलतुसुस्थलथुसणल्वमाः | c03.l04 (D) | c06.l02 (R) | R | the perfect: doubling + its own endings |
| 7.2.116 | अत उपधायाः | c03.l04 (D) | c05.l02 (D) | D | the perfect: doubling + its own endings |
| 7.4.60 | हलादिः शेषः | c03.l04 (D) | c06.l02 (R) | R | the perfect: doubling + its own endings |
| 7.4.59 | ह्रस्वः | c03.l04 (D) | c06.l02 (R) | R | the perfect: doubling + its own endings |
| 7.4.62 | कुहोश्चुः | c03.l04 (D) | — | D | the perfect: doubling + its own endings |
| 7.1.34 | आत औ णलः | c03.l04 (D) | — | D | the perfect: doubling + its own endings |
| 7.4.66 | उरत् | c03.l04 (K) | — | K | the perfect: doubling + its own endings |
| 8.4.54 | अभ्यासे चर्च | c03.l04 (K) | c06.l02 (R) | R | the perfect: doubling + its own endings |
| 7.2.115 | अचो ञ्णिति | c03.l04 (K) | c05.l02 (D) | D | the perfect: doubling + its own endings |
| 6.1.17 | लिट्यभ्यासस्योभयेषाम् | c03.l04 (K) | — | K | the perfect: doubling + its own endings |
| 6.1.15 | वचिस्वपियजादीनां किति | c03.l04 (K) | c04.l01 (D), c04.l02 (D), c05.l01 (D) | D | the perfect: doubling + its own endings |
| 1.2.5 | असंयोगाल्लिट् कित् | c03.l04 (K) | — | K | the perfect: doubling + its own endings |
| 1.2.6 | इन्धिभवतिभ्यां च | c03.l04 (K) | c06.l02 (K) | K | the perfect: doubling + its own endings |
| 3.4.84 | ब्रुवः पञ्चानामादित आहो ब्रुवः | c03.l04 (K) | — | K | the perfect: doubling + its own endings |
| 3.1.35 | कास्प्रत्ययादाममन्त्रे लिटि | c03.l04 (K) | — | K | the perfect: doubling + its own endings |
| 3.1.40 | कृञ् चानुप्रयुज्यते लिटि | c03.l04 (K) | — | K | the perfect: doubling + its own endings |
| 3.3.13 | लृट् शेषे च | c03.l05 (D) | — | D | the -स्य- future (with the card of the four other lakāras) |
| 3.1.33 | स्यतासी लृलुटोः | c03.l05 (D) | — | D | the -स्य- future (with the card of the four other lakāras) |
| 3.4.114 | आर्धधातुकं शेषः | c03.l05 (D) | — | D | the -स्य- future (with the card of the four other lakāras) |
| 7.2.35 | आर्धधातुकस्येड् वलादेः | c03.l05 (D) | — | D | the -स्य- future (with the card of the four other lakāras) |
| 7.2.70 | ऋद्धनोः स्ये | c03.l05 (D) | — | D | the -स्य- future (with the card of the four other lakāras) |
| 7.2.58 | गमेरिट् परस्मैपदेषु | c03.l05 (D) | — | D | the -स्य- future (with the card of the four other lakāras) |
| 3.3.15 | अनद्यतने लुट् | c03.l05 (K) | — | K | the -स्य- future (with the card of the four other lakāras) |
| 2.4.85 | लुटः प्रथमस्य डारौरसः | c03.l05 (K) | — | K | the -स्य- future (with the card of the four other lakāras) |
| 3.3.139 | लिङ्निमित्ते लृङ् क्रियातिपत्तौ | c03.l05 (K) | — | K | the -स्य- future (with the card of the four other lakāras) |
| 3.1.43 | च्लि लुङि | c03.l05 (K) | — | K | the -स्य- future (with the card of the four other lakāras) |
| 3.1.44 | च्लेः सिच् | c03.l05 (K) | — | K | the -स्य- future (with the card of the four other lakāras) |
| 3.3.173 | आशिषि लिङ्लोटौ | c03.l05 (K) | — | K | the -स्य- future (with the card of the four other lakāras) |
| 3.4.116 | लिङाशिषि | c03.l05 (K) | — | K | the -स्य- future (with the card of the four other lakāras) |
| 3.1.93 | कृदतिङ् | c04.l01 (D) | — | D | the participle as a kṛt adjective: -त/-तवत् (k-marked, weak root) and -अत्/-मान (on the present stem) |
| 3.2.102 | निष्ठा | c04.l01 (D) | — | D | the participle as a kṛt adjective: -त/-तवत् (k-marked, weak root) and -अत्/-मान (on the present stem) |
| 1.1.26 | क्तक्तवतू निष्ठा | c04.l01 (D) | — | D | the participle as a kṛt adjective: -त/-तवत् (k-marked, weak root) and -अत्/-मान (on the present stem) |
| 3.2.124 | लटः शतृशानचावप्रथमासमानाधिकरणे | c04.l01 (D) | c05.l04 (D) | D | the participle as a kṛt adjective: -त/-तवत् (k-marked, weak root) and -अत्/-मान (on the present stem) |
| 6.4.37 | अनुदात्तोपदेशवनतितनोत्यादीनामनुनासिक लोपो झलि क्ङिति | c04.l01 (D) | c04.l02 (D) | D | the participle as a kṛt adjective: -त/-तवत् (k-marked, weak root) and -अत्/-मान (on the present stem) |
| 8.2.30 | चोः कुः | c04.l01 (D) | — | D | the participle as a kṛt adjective: -त/-तवत् (k-marked, weak root) and -अत्/-मान (on the present stem) |
| 8.2.40 | झषस्तथोर्धोऽधः | c04.l01 (K) | — | K | the participle as a kṛt adjective: -त/-तवत् (k-marked, weak root) and -अत्/-मान (on the present stem) |
| 8.4.53 | झलां जश् झशि | c04.l01 (K) | — | K | the participle as a kṛt adjective: -त/-तवत् (k-marked, weak root) and -अत्/-मान (on the present stem) |
| 7.2.82 | आने मुक् | c04.l01 (K) | — | K | the participle as a kṛt adjective: -त/-तवत् (k-marked, weak root) and -अत्/-मान (on the present stem) |
| 3.4.72 | गत्यर्थाकर्मकश्लिषशीङ्स्थाऽऽसवसजनरुहजीर्यतिभ्यश्च | c04.l01 (K) | — | K | the participle as a kṛt adjective: -त/-तवत् (k-marked, weak root) and -अत्/-मान (on the present stem) |
| 3.3.14 | लृटः सद् वा | c04.l01 (K) | — | K | the participle as a kṛt adjective: -त/-तवत् (k-marked, weak root) and -अत्/-मान (on the present stem) |
| 3.4.21 | समानकर्तृकयोः पूर्वकाले | c04.l02 (Q) | — | Q | the indeclinable kṛt forms, and what the k-marker does to the root: -त्वा/-य (k-marked: weak root) vs -तुम् and the agent -तृ (not k-marked: guṇa, the nasal kept, no samprasāraṇa) |
| 7.1.37 | समासेऽनञ्पूर्वे क्त्वो ल्यप् | c04.l02 (D) | — | D | the indeclinable kṛt forms, and what the k-marker does to the root: -त्वा/-य (k-marked: weak root) vs -तुम् and the agent -तृ (not k-marked: guṇa, the nasal kept, no samprasāraṇa) |
| 6.1.71 | ह्रस्वस्य पिति कृति तुक् | c04.l02 (D) | c06.l03 (D) | D | the indeclinable kṛt forms, and what the k-marker does to the root: -त्वा/-य (k-marked: weak root) vs -तुम् and the agent -तृ (not k-marked: guṇa, the nasal kept, no samprasāraṇa) |
| 3.3.10 | तुमुन्ण्वुलौ क्रियायां क्रियार्थायाम् | c04.l02 (D) | — | D | the indeclinable kṛt forms, and what the k-marker does to the root: -त्वा/-य (k-marked: weak root) vs -तुम् and the agent -तृ (not k-marked: guṇa, the nasal kept, no samprasāraṇa) |
| 6.4.38 | वा ल्यपि | c04.l02 (D) | — | D | the indeclinable kṛt forms, and what the k-marker does to the root: -त्वा/-य (k-marked: weak root) vs -तुम् and the agent -तृ (not k-marked: guṇa, the nasal kept, no samprasāraṇa) |
| 1.1.40 | क्त्वातोसुन्कसुनः | c04.l02 (D) | — | D | the indeclinable kṛt forms, and what the k-marker does to the root: -त्वा/-य (k-marked: weak root) vs -तुम् and the agent -तृ (not k-marked: guṇa, the nasal kept, no samprasāraṇa) |
| 1.1.39 | कृन्मेजन्तः | c04.l02 (D) | — | D | the indeclinable kṛt forms, and what the k-marker does to the root: -त्वा/-य (k-marked: weak root) vs -तुम् and the agent -तृ (not k-marked: guṇa, the nasal kept, no samprasāraṇa) |
| 8.3.24 | नश्चापदान्तस्य झलि | c04.l02 (D) | — | D | the indeclinable kṛt forms, and what the k-marker does to the root: -त्वा/-य (k-marked: weak root) vs -तुम् and the agent -तृ (not k-marked: guṇa, the nasal kept, no samprasāraṇa) |
| 8.4.58 | अनुस्वारस्य ययि परसवर्णः | c04.l02 (D) | — | D | the indeclinable kṛt forms, and what the k-marker does to the root: -त्वा/-य (k-marked: weak root) vs -तुम् and the agent -तृ (not k-marked: guṇa, the nasal kept, no samprasāraṇa) |
| 7.2.117 | तद्धितेष्वचामादेः | c04.l03 (Q) | — | Q | the taddhita: base + secondary suffix, with vṛddhi |
| 4.1.76 | तद्धिताः | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 4.1.92 | तस्यापत्यम् | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 5.1.119 | तस्य भावस्त्वतलौ | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 5.2.94 | तदस्यास्त्यस्मिन्निति मतुप् | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 4.1.95 | अत इञ् | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 6.4.148 | यस्येति च | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 5.1.44 | लोकसर्वलोकाट्ठञ् | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 7.3.50 | ठस्येकः | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 4.2.114 | वृद्धाच्छः | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 1.1.73 | वृद्धिर्यस्याचामादिस्तद् वृद्धम् | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 7.1.2 | आयनेयीनीयियः फढखच्छघां प्रत्ययादीनाम् | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 5.2.115 | अत इनिठनौ | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 8.2.9 | मादुपधायाश्च मतोर्वोऽयवादिभ्यः | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 4.1.4 | अजाद्यतष्टाप् | c04.l03 (D) | — | D | the taddhita: base + secondary suffix, with vṛddhi |
| 5.3.57 | द्विवचनविभज्योपपदे तरबीयसुनौ | c04.l03 (K) | — | K | the taddhita: base + secondary suffix, with vṛddhi |
| 5.3.55 | अतिशायने तमबिष्ठनौ | c04.l03 (K) | — | K | the taddhita: base + secondary suffix, with vṛddhi |
| 4.3.143 | मयड्वैतयोर्भाषायामभक्ष्याच्छादनयोः | c04.l03 (K) | — | K | the taddhita: base + secondary suffix, with vṛddhi |
| 5.1.115 | तेन तुल्यं क्रिया चेद्वतिः | c04.l03 (K) | — | K | the taddhita: base + secondary suffix, with vṛddhi |
| 5.2.39 | यद्तदेतेभ्यः परिमाणे वतुप् | c04.l03 (K) | — | K | the taddhita: base + secondary suffix, with vṛddhi |
| 2.1.3 | प्राक् कडारात् समासः | c04.l04 (D) | — | D | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 2.1.4 | सह सुपा | c04.l04 (D) | — | D | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 2.4.71 | सुपो धातुप्रातिपदिकयोः | c04.l04 (D) | — | D | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 5.4.91 | राजाहस्सखिभ्यष्टच् | c04.l04 (D) | — | D | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 1.2.46 | कृत्तद्धितसमासाश्च | c04.l04 (D) | — | D | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 2.2.18 | कुगतिप्रादयः | c04.l04 (D) | — | D | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 2.2.19 | उपपदमतिङ् | c04.l04 (D) | — | D | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 3.2.97 | सप्तम्यां जनेर्डः | c04.l04 (D) | — | D | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 6.4.143 | टेः | c04.l04 (D) | — | D | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 1.1.64 | अचोऽन्त्यादि टि | c04.l04 (D) | — | D | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 6.3.46 | आन्महतः समानाधिकरणजातीययोः | c04.l04 (D) | — | D | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 2.1.22 | तत्पुरुषः | c04.l04 (K) | — | K | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 6.1.223 | समासस्य | c04.l04 (K) | — | K | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 6.2.1 | बहुव्रीहौ प्रकृत्या पूर्वपदम् | c04.l04 (K) | — | K | the compound as a derivation (sup-lopa, samāsānta, upapada) |
| 2.3.1 | अनभिहिते | c05.l01 (Q) | — | Q | passive and impersonal (3.4.69; yak; 2.3.1) |
| 1.4.54 | स्वतन्त्रः कर्ता | c05.l01 (Q) | c06.l01 (R) | Q | passive and impersonal (3.4.69; yak; 2.3.1) |
| 1.4.49 | कर्तुरीप्सिततमं कर्म | c05.l01 (Q) | c06.l01 (R) | Q | passive and impersonal (3.4.69; yak; 2.3.1) |
| 3.4.69 | लः कर्मणि च भावे चाकर्मकेभ्यः | c05.l01 (B) | — | B | passive and impersonal (3.4.69; yak; 2.3.1) |
| 3.1.67 | सार्वधातुके यक् | c05.l01 (D) | — | D | passive and impersonal (3.4.69; yak; 2.3.1) |
| 1.3.13 | भावकर्मणोः | c05.l01 (D) | — | D | passive and impersonal (3.4.69; yak; 2.3.1) |
| 2.3.2 | कर्मणि द्वितीया | c05.l01 (D) | — | D | passive and impersonal (3.4.69; yak; 2.3.1) |
| 2.3.18 | कर्तृकरणयोस्तृतीया | c05.l01 (D) | — | D | passive and impersonal (3.4.69; yak; 2.3.1) |
| 2.3.46 | प्रातिपदिकार्थलिङ्गपरिमाणवचनमात्रे प्रथमा | c05.l01 (D) | — | D | passive and impersonal (3.4.69; yak; 2.3.1) |
| 7.4.25 | अकृत्सार्वधातुकयोर्दीर्घः | c05.l01 (D) | — | D | passive and impersonal (3.4.69; yak; 2.3.1) |
| 7.4.28 | रिङ् शयग्लिङ्क्षु | c05.l01 (D) | — | D | passive and impersonal (3.4.69; yak; 2.3.1) |
| 3.1.95 | कृत्याः | c05.l01 (K) | — | K | passive and impersonal (3.4.69; yak; 2.3.1) |
| 3.1.96 | तव्यत्तव्यानीयरः | c05.l01 (K) | — | K | passive and impersonal (3.4.69; yak; 2.3.1) |
| 3.1.97 | अचो यत् | c05.l01 (K) | — | K | passive and impersonal (3.4.69; yak; 2.3.1) |
| 3.4.70 | तयोरेव कृत्यक्तखलर्थाः | c05.l01 (K) | — | K | passive and impersonal (3.4.69; yak; 2.3.1) |
| 1.4.52 | गतिबुद्धिप्रत्यवसानार्थशब्दकर्माकर्मकाणामणि कर्ता स णौ | c05.l02 (Q) | — | Q | the causative, and the causee's case (1.4.51–53) |
| 1.4.51 | अकथितं च | c05.l02 (Q) | — | Q | the causative, and the causee's case (1.4.51–53) |
| 3.1.26 | हेतुमति च | c05.l02 (D) | — | D | the causative, and the causee's case (1.4.51–53) |
| 1.4.55 | तत्प्रयोजको हेतुश्च | c05.l02 (D) | — | D | the causative, and the causee's case (1.4.51–53) |
| 3.1.32 | सनाद्यन्ता धातवः | c05.l02 (D) | — | D | the causative, and the causee's case (1.4.51–53) |
| 7.3.36 | अर्तिह्रीव्लीरीक्नूयीक्ष्माय्यातां पुङ्णौ | c05.l02 (D) | — | D | the causative, and the causee's case (1.4.51–53) |
| 1.4.53 | हृक्रोरन्यतरस्याम् | c05.l02 (D) | — | D | the causative, and the causee's case (1.4.51–53) |
| 3.1.7 | धातोः कर्मणः समानकर्तृकादिच्छायां वा | c05.l02 (K) | — | K | the causative, and the causee's case (1.4.51–53) |
| 3.1.22 | धातोरेकाचो हलादेः क्रियासमभिहारे यङ् | c05.l02 (K) | — | K | the causative, and the causee's case (1.4.51–53) |
| 7.1.70 | उगिदचां सर्वनामस्थानेऽधातोः | c05.l03 (D) | — | D | one ending set, three stems (strong · pada · bha); द्वि–चतुर् and the tens as a Δ card |
| 6.4.14 | अत्वसन्तस्य चाधातोः | c05.l03 (D) | — | D | one ending set, three stems (strong · pada · bha); द्वि–चतुर् and the tens as a Δ card |
| 6.1.68 | हल्ङ्याब्भ्यो दीर्घात् सुतिस्यपृक्तं हल् | c05.l03 (D) | — | D | one ending set, three stems (strong · pada · bha); द्वि–चतुर् and the tens as a Δ card |
| 8.2.23 | संयोगान्तस्य लोपः | c05.l03 (D) | — | D | one ending set, three stems (strong · pada · bha); द्वि–चतुर् and the tens as a Δ card |
| 1.1.47 | मिदचोऽन्त्यात्परः | c05.l03 (D) | — | D | one ending set, three stems (strong · pada · bha); द्वि–चतुर् and the tens as a Δ card |
| 6.4.8 | सर्वनामस्थाने चासम्बुद्धौ | c05.l03 (D) | — | D | one ending set, three stems (strong · pada · bha); द्वि–चतुर् and the tens as a Δ card |
| 7.1.55 | षट्चतुर्भ्यश्च | c05.l03 (K) | — | K | one ending set, three stems (strong · pada · bha); द्वि–चतुर् and the tens as a Δ card |
| 7.2.107 | अदस औ सुलोपश्च | c05.l03 (K) | — | K | one ending set, three stems (strong · pada · bha); द्वि–चतुर् and the tens as a Δ card |
| 2.3.37 | यस्य च भावेन भावलक्षणम् | c05.l04 (Q) | — | Q | the locative absolute (2.3.37–38), the case no kāraka gives; its card is the kāraka map (the six kārakas, 1.4.23–55, through 2.3.1, and the upapada case) |
| 1.4.23 | कारके | c05.l04 (D) | c06.l01 (R) | R | the locative absolute (2.3.37–38), the case no kāraka gives; its card is the kāraka map (the six kārakas, 1.4.23–55, through 2.3.1, and the upapada case) |
| 2.3.38 | षष्ठी चानादरे | c05.l04 (D) | — | D | the locative absolute (2.3.37–38), the case no kāraka gives; its card is the kāraka map (the six kārakas, 1.4.23–55, through 2.3.1, and the upapada case) |
| 1.4.24 | ध्रुवमपायेऽपादानम् | c05.l04 (K) | c06.l01 (R) | R | the locative absolute (2.3.37–38), the case no kāraka gives; its card is the kāraka map (the six kārakas, 1.4.23–55, through 2.3.1, and the upapada case) |
| 1.4.32 | कर्मणा यमभिप्रैति स सम्प्रदानम् | c05.l04 (K) | c06.l01 (R) | R | the locative absolute (2.3.37–38), the case no kāraka gives; its card is the kāraka map (the six kārakas, 1.4.23–55, through 2.3.1, and the upapada case) |
| 1.4.42 | साधकतमं करणम् | c05.l04 (K) | c06.l01 (R) | R | the locative absolute (2.3.37–38), the case no kāraka gives; its card is the kāraka map (the six kārakas, 1.4.23–55, through 2.3.1, and the upapada case) |
| 1.4.45 | आधारोऽधिकरणम् | c05.l04 (K) | c06.l01 (R) | R | the locative absolute (2.3.37–38), the case no kāraka gives; its card is the kāraka map (the six kārakas, 1.4.23–55, through 2.3.1, and the upapada case) |
| 2.3.28 | अपादाने पञ्चमी | c05.l04 (K) | c06.l01 (K) | K | the locative absolute (2.3.37–38), the case no kāraka gives; its card is the kāraka map (the six kārakas, 1.4.23–55, through 2.3.1, and the upapada case) |
| 2.3.13 | चतुर्थी सम्प्रदाने | c05.l04 (K) | — | K | the locative absolute (2.3.37–38), the case no kāraka gives; its card is the kāraka map (the six kārakas, 1.4.23–55, through 2.3.1, and the upapada case) |
| 2.3.36 | सप्तम्यधिकरणे च | c05.l04 (K) | — | K | the locative absolute (2.3.37–38), the case no kāraka gives; its card is the kāraka map (the six kārakas, 1.4.23–55, through 2.3.1, and the upapada case) |
| 2.3.50 | षष्ठी शेषे | c05.l04 (K) | — | K | the locative absolute (2.3.37–38), the case no kāraka gives; its card is the kāraka map (the six kārakas, 1.4.23–55, through 2.3.1, and the upapada case) |
| 8.2.39 | झलां जशोऽन्ते | c06.l01 (re) | — | owned (owned V3) | the anatomy of a vṛtti, on the kāraka saṃjñās (sūtra, carried words, gloss, example, "इति किम्?") |
| 7.3.82 | मिदेर्गुणः | c06.l02 (D) | — | D | reading vidhi sūtras with the Kāśikā, and a prakriyā in the LSK's own words |
| 6.4.88 | भुवो वुग्लुङ्लिटोः | c06.l02 (D) | — | D | reading vidhi sūtras with the Kāśikā, and a prakriyā in the LSK's own words |
| 6.1.4 | पूर्वोऽभ्यासः | c06.l02 (D) | — | D | reading vidhi sūtras with the Kāśikā, and a prakriyā in the LSK's own words |
| 7.4.73 | भवतेरः | c06.l02 (D) | — | D | reading vidhi sūtras with the Kāśikā, and a prakriyā in the LSK's own words |
| 1.4.2 | विप्रतिषेधे परं कार्यम् | c06.l03 (Q) | — | Q | the three meta-rules (1.4.2, 1.1.56, 8.2.1) |
| 1.1.56 | स्थानिवदादेशोऽनल्विधौ | c06.l03 (Q) | — | Q | the three meta-rules (1.4.2, 1.1.56, 8.2.1) |
| 8.2.1 | पूर्वत्रासिद्धम् | c06.l03 (Q) | — | Q | the three meta-rules (1.4.2, 1.1.56, 8.2.1) |
| 8.2.2 | नलोपः सुप्स्वरसंज्ञातुग्विधिषु कृति | c06.l03 (D) | — | D | the three meta-rules (1.4.2, 1.1.56, 8.2.1) |
| 7.3.102 | सुपि च | c06.l03 (D) | — | D | the three meta-rules (1.4.2, 1.1.56, 8.2.1) |
| 7.2.103 | किमः कः | c06.l03 (D) | — | D | the three meta-rules (1.4.2, 1.1.56, 8.2.1) |
| 8.3.18 | व्योर्लघुप्रयत्नतरः शाकटायनस्य | c06.l03 (D) | — | D | the three meta-rules (1.4.2, 1.1.56, 8.2.1) |
| 8.3.19 | लोपः शाकल्यस्य | c06.l03 (D) | — | D | the three meta-rules (1.4.2, 1.1.56, 8.2.1) |
| 2.4.52 | अस्तेर्भूः | c06.l03 (D) | — | D | the three meta-rules (1.4.2, 1.1.56, 8.2.1) |
| 2.4.53 | ब्रुवो वचिः | c06.l03 (D) | — | D | the three meta-rules (1.4.2, 1.1.56, 8.2.1) |

**Totals.** 238 distinct Aṣṭādhyāyī sūtras appear in Volume 4 learner text (the fourteen
Māheśvara sūtras are counted apart; regenerated after the critique, which added 1.1.39 (D,
c04.l02), 7.3.79 (K, c03.l02) and 8.3.18 (D, c06.l03)). By the budget tier: **B 26** (25 new +
6.1.78, owned), **Q 25** (all new), R 11, D 121, K 51, and 4 owned Volume 3 sūtras only
re-read. The table and these totals count the sūtras of the tier lines only: "First in learner
text" means the first tier line and "Later" the later tier lines. A number printed elsewhere
in learner text is not counted: an owned Volume 3 sūtra as a reminder (in Chapter 1: 6.1.109,
which has no row, 8.2.39, whose row starts at c06.l01's re-read line, and 6.1.78 and 6.1.101 in c01.l01's pratyāhāra table; 8.4.40
in c01.l02–l03 and the Chapter 1 exam's spiral; 6.1.88 in c01.l03; 1.1.11 in c01.l02; 6.1.87 in c01.l03's trap line and the Chapter 1 exam;
8.3.34 in the Chapter 1 exam's spiral), a pointer to a later lesson
(1.1.1, 1.1.2, 1.1.51 and 8.3.57 in c01.l02; 8.2.66 and 8.2.30 in the Chapter 1 exam's spiral), a preview or display step
(8.2.66 + 8.3.15 and 6.1.84 in c01.l03, 6.1.84 again in the Chapter 1 exam's task C; 8.3.32 in the note on c01.l03's यणादेशः; 4.1.2 in c02.l01), or a number shown only to correct the 1.x
book (1.1.45, IR-017). The memory load at exit (can-do 14) is therefore **25 new Q + 25 new B by gist**,
and **by number** the 28 of Volume 3 and the 26 of B, which overlap in 6.1.78: 53 numbers.
The D, K and R tiers are printed tools, never recalled. The four unseen exam sūtras (7.1.13
in c02.l04; 3.2.111 in c03.l06; 6.1.97 and 3.1.133 in c06.l04) are read, not taught, and are
not counted; nor are the numbers task B prints beside them as sources or glosses (6.1.94,
6.1.96, 7.1.1). Nor are the Teacher-Notes sūtras, which by the convention of §1.4.3 print in
Teacher Notes with their numbers and in learner text only as the words "Teacher Notes":
those of §4.0.6 and of the lesson blocks, among them 1.1.10, 1.1.62, 1.2.27, 1.3.4, 1.3.7, 1.4.60–61,
2.1.5, 2.2.8, 3.1.83, 3.3.158, 3.4.65, 3.4.87, 3.4.92, 3.4.104, 4.1.5, 4.1.15, 4.2.59, 4.3.120, 6.1.58, 6.1.65, 6.1.73, 6.1.108,
6.1.90, 6.1.113–114, 6.1.197, 6.4.51, 6.4.66, 6.4.72, 6.4.87, 6.4.105, 6.4.106, 6.4.24, 6.4.120, 6.4.144, 7.1.36, 7.1.80–81, 7.1.91, 7.2.10, 7.2.118, 7.3.3,
7.3.93, 7.3.111, 7.4.40, 7.4.46, 8.2.36, 8.3.40 and 8.4.41 (and 1.1.24, 1.1.59, 1.2.1, 3.1.99,
3.1.124, 5.2.37, 5.3.7, 6.4.7, 6.4.81 and 6.4.136), all verified in the data file. (3.4.104,
listed in the c03 inventory at synthesis but on no card, is now a Teacher-Notes sūtra.)

### 4.0.4 The errors of the 1.x Pāṇinian chapter, and where each is corrected in the open

| IR | The 1.x error | Corrected in | How |
|---|---|---|---|
| IR-016 | ṣatva/ṇatva broken: "in रामेण the इ triggers ण"; one trigger list for both; garbled examples (pp.73–74) | v4.c02.l03 (rule); v4.c06.l02 (the Kāśikā) | र and ष trigger (8.4.1), and ऋ/ॠ by the vārttika the Kāśikā cites there (Teacher Notes); interveners per 8.4.2; ṣatva's own triggers (इण्, कु; 8.3.57–59); the 1.x line quoted and corrected |
| IR-017 | इको यणचि cited as 1.1.45; "8.2.39: झलां जश् झशि" (pp.71, 96) | v4.c01.l01 (6.1.77; 1.1.45 is इग्यणः सम्प्रसारणम्); v4.c04.l01 (8.4.53 vs 8.2.39) | both numbers checked in the data file and shown |
| IR-018 | cay glossed "voiceless aspirated"; jhaś conflated with jaś; कपय् skipped (pp.70, 96) | v4.c01.l01 | चय् = च ट त क प (unaspirated); झश् ≠ जश्; the memory aid rebuilt with all 14, कपय् included |
| IR-019 | लिट् labelled "remote past, witnessed" (pp.74–75) | v4.c03.l04 | 3.2.115 परोक्षे; the Kāśikā's भूतानद्यतनपरोक्षे; FACT on actual usage beside it |
| IR-020 | कृ both "parasmaipada only" and ubhayapadī (pp.75–76) | v4.c03.l01 | डुकृञ्: ञ् → 1.3.72; करोति / कुरुते (Kāśikā's कुरुते) |
| IR-021 | guṇa filed as āgama: "भू + ति → भवति (where गुण inserts व)" (p.89) | v4.c02.l02 (and the first step in v4.c01.l03) | guṇa is ādeśa (1.1.2–3); व from 6.1.78; the अट् example kept as the true āgama |
| new (review) | the same card's lopa example "रामस् + अपि → रामोऽपि … अ underwent lopa (replaced by avagraha ऽ)" and its ṭ-marker example "-ट् marker → at start (e.g., नुम् augment)" (p.89) | v4.c02.l02 | ओ + अ → ओ is one substitute for both (6.1.109, owned, under 6.1.84), not lopa; ऽ is a sign; नुम् is m-marked (1.1.47, preview; taught c05.l03) |
| IR-022 | "ङ् blocks guṇa; क् blocks guṇa + vṛddhi"; "न् → udātta on ending vowel" (pp.93–95) | v4.c03.l03 (anubandha card); accent half in Teacher Notes | 1.1.5 blocks both for both (Kāśikā: "te na bhavataḥ"); 6.1.197 initial udātta (Teacher Notes) |
| IR-023 | the √पठ् laṭ passive mislabelled; पठ्यैथे, पठ्येयाथे (p.103) | v4.c05.l01 | the paradigm rebuilt (T13), copied from Whitney §§768–774 |
| IR-024 | "शप् + य/यान (FUTURE PARTICIPLE)" (p.105) | v4.c04.l01 | the participle inventory card; शप् is the class-1 sign (c03.l02); future participle करिष्यन् (3.3.14) |
| IR-025 | sanādi "10 types" listing 9 (p.76) (its other items closed in Volume 3) | v4.c05.l02 | 3.1.32 read; no count printed: the card names the affixes the course uses and quotes the 1.x "10 types" as the error it is (§7.3 Q7) |
| IR-026 | इन्द्रशत्रु glossed "Indra's slayer" vs "the slayer of Indra" (p.82) | v4.c04.l04 | tatpuruṣa (6.1.223) vs bahuvrīhi (6.2.1); the Mahābhāṣya verse quoted at its locus |
| IR-036 | (positive) the Śiva-drum origin labelled "Legend" (p.69) | v4.c01.l01 | kept: TRADITION, labelled legend, never assessed, keyed |
| IR-040 | the verb cliff (all 10 lakāras in three lessons, pp.74–77) | v4.c03 (six lessons, after the V2–V3 ramp) | the ramp completed: present system (V3) → root, classes, strong/weak, perfect, future, the card (V4) |
| IR-041 | meta-grammar at the wrong altitude (pp.91–96) | the whole volume (§1.1, principle 4) | every term, marker and meta-rule enters with the form it explains; no free-standing lists |
| new (synthesis) | "Panini built ~42 pratyāhāras" (1.x p. 95, found by pdftotext) | v4.c01.l01 | quoted and not repeated; a count prints only with the c01 fact base's counting method |
| new (synthesis) | लङ् "Imperfect (recent past)" (p. 74 ff.) and "IMPERFECT (past habitual)" (pp. 127–128) | v4.c03 intro, c03.l06 (task A: 3.2.111 read cold) | the past not of today: 3.2.111 अनद्यतने लङ्, Kāśikā अविद्यमानाद्यतने भूतेऽर्थे |
| new (synthesis) | "Ātmanepada: action benefits oneself" for every verb (pp. 74–76) | v4.c03.l01 | true of ubhayapada roots only (1.3.72: कुरुते, पचते); रोचते, लभते are Ā by 1.3.12 with no such sense |
| new (review) | 8.2.1 glossed "What comes earlier [in the sūtra order] is treated as not-yet-applied", and the summary "If both rules in 8.2–8.4, treat earlier as not-yet-applied" (p. 116); व्योर्लघुप्रयत्नतरः (8.3.18) given as the "specific exception" to इको यणचि (p. 115) | v4.c06.l03 | the later rule is the one treated as not applied, for the earlier ones (Kāśikā on 8.2.1: उत्तर उत्तरो योगः पूर्वत्र पूर्वत्रासिद्धो भवति); 8.3.18 is no exception to 6.1.77 (इक् → यण्): it concerns a word-final य्/व् after भो, भगो, अघो or after अ/आ (8.3.17's words) before a vowel or voiced sound (Kāśikā: पदान्तयोः … अशि परतः), read beside 8.3.19 with त इच्छन्ति; the 1.x lines quoted and corrected |
| new (review) | rājan card: 1.4.18 glossed "Before vowel-initial endings or those starting in sibilant + vowel"; "Case 1 sg: राजा (pada — n drops)"; "Case 2 sg: राजानम् (aṅga — n stays)"; collapse to राज्ञ् "in the 3rd–7th cases" (p.98) | v4.c02.l01 | यचि = before य or a vowel, strong endings excepted; before सुँ and अम् the base is strong (1.1.43); राजा's न् drops because the word is a pada (1.4.14 with 1.1.62) under 8.2.7; राजभिः is a pada cell; 6.4.134 drops only the अ |

---

### 4.0.5 Station 0 chain and review

- v4.c01.l01's Station 0 carries v3.c06.l05's +1-day booking (the exam text again) and v3.c06.l04's +1-week booking (the Volume 3 entry check); v4.c01.l02's carries v3.c06.l05's +1-week booking (one story told in Volume 3 Sanskrit), as the v3.c06 fact base words them (row 0.30, S0-bh, S0-bg, S0-bi). From c02 on, each chapter's
  l01 runs the previous exam's +1-day item and the previous chapter's last teaching
  lesson's +1-week item. Its l02 runs the previous exam's +1-week item. Each exam books +1
  day for the next l01 and +1 week for the next l02; each chapter's last teaching lesson
  books +1 week for the next l01.
- Within a chapter, lesson n's §3 runs n−1's +1-day item and n−2's +1-week item
  [REF:cepeda2006]. Each block names what it books ("S0 → next").
- **The derivation spiral.** From c02.l04 on, every exam re-derives, "according to Pāṇini",
  the item of the chapter before it (c02.l04: नास्ति, a Chapter 1 sandhi; c03.l06: रामेण;
  c04.l05: नयति; c05.l05: कृतम्, and Chapter 3's शृणोति / शृण्वन्ति as well; c06.l04: all five,
  नास्ति, रामेण, नयति, कृतम्, पठ्यते). Every exam also reads a Volume 3 thread verse
  and names what Volume 4 has added to it: सर्वे भवन्तु सुखिनः… (c01.l04: its seams, none of them a vowel seam;
  c02.l04: the ण of भद्राणि, 8.4.1–2, and the ः of निरामयाः, 8.2.66 and 8.3.15;
  c05.l05: its सुखिनः now a strong cell of the -इन् stem), उद्यमेन हि सिध्यन्ति… (c03.l06, c04.l05:
  its सिध्यन्ति a class-4 present, its सुप्तस्य a kta participle) and all four thread verses
  (c06.l04).

### 4.0.6 The Volume 3 Teacher-Notes sūtras "for v4", and where each lands

The Volume 3 plan (§4.0.4) kept these sūtras in Teacher Notes "for v4". Each now has a home
(adopted from system-first's audit). "Printed" means it enters learner text at the tier
named; "TN" means it stays in Teacher Notes, with the lesson that needs it.

| Sūtra(s) | Text (data file) | Volume 4 home | Tier |
|---|---|---|---|
| 1.4.24, 1.4.32, 1.4.42, 1.4.45 | ध्रुवमपायेऽपादानम् · कर्मणा यमभिप्रैति स सम्प्रदानम् · साधकतमं करणम् · आधारोऽधिकरणम् | c05.l04 (the kāraka map); c06.l01 (read with the Kāśikā) | K, then R |
| 1.4.49, 1.4.54 | कर्तुरीप्सिततमं कर्म · स्वतन्त्रः कर्ता | c05.l01; c06.l01 | Q, then R |
| 2.3.2, 2.3.18 | कर्मणि द्वितीया · कर्तृकरणयोस्तृतीया | c05.l01 | D |
| 2.3.13, 2.3.28, 2.3.36, 2.3.50 | चतुर्थी सम्प्रदाने · अपादाने पञ्चमी · सप्तम्यधिकरणे च · षष्ठी शेषे | c05.l04 (the kāraka map) | K |
| 2.3.47 | सम्बोधने च | c05.l04 | TN (the vocative as a use of the nominative) |
| 2.3.12 | गत्यर्थकर्मणि द्वितीयाचतुर्थ्यौ चेष्टायामनध्वनि | c05.l04 | TN (ग्रामं / ग्रामाय गच्छति) |
| 1.4.33 | रुच्यर्थानां प्रीयमाणः | c05.l04 | TN (मह्यं रोचते: the one pleased is sampradāna) |
| 1.3.17 | नेर्विशः | c03.l01 | TN (न्यविशत: Ā after नि) |
| 1.3.19 | विपराभ्यां जेः | c03.l02 | TN, beside सत्यं जयति: the rule gives Ā only after वि and परा, so it does **not** license the Muṇḍaka's bare जयते; Volume 3's honesty line on जयते stands (system-first's "the motto's जयते has a sūtra" is declined, §7.2) |
| 3.4.87, 6.4.105, 3.4.89, 3.4.90, 3.4.91, 3.4.92, 3.4.93 | सेर्ह्यपिच्च · अतो हेः · मेर्निः · आमेतः · सवाभ्यां वामौ · आडुत्तमस्य पिच्च · एत ऐ | c03.l03 (the loṭ cells of the athematic verbs: हि is apit, so शृणु / कुरु are weak, and हि then drops after the उ of the suffix, नु or उ, by 6.4.106 उतश्च प्रत्ययादसंयोगपूर्वात्, a Volume 4 Teacher-Notes sūtra not on the Volume 3 list; आट् is pit, so the 1st persons are strong, शृणवानि / करवाणि) | TN |
| 7.2.80 | अतो येयः | c03.l01 (the owned optative भवेत् mapped onto the 18) | TN |
| 6.4.71 · 6.4.72 | लुङ्लङ्लृङ्क्ष्वडुदात्तः · आडजादीनाम् | c02.l02 | D · TN (the vṛddhi augment of ऐच्छत्) |
| 8.3.15 | खरवसानयोर्विसर्जनीयः | c02.l01 | D |
| 8.3.17, 8.3.22 | भोभगोअघोअपूर्वस्य योऽशि · हलि सर्वेषाम् | c06.l03 (त इच्छन्ति; राम आगच्छति) | TN |
| 6.1.113, 6.1.114 | अतो रोरप्लुतादप्लुते · हशि च | c02.l02 (रामोऽपि beside रामः, the IR-021 card; 6.1.114 in रामो गच्छति) | TN |
| 6.3.25 | आनङ् ऋतो द्वन्द्वे | c04.l04 (मातापितरौ) | TN |
| 2.2.18 | कुगतिप्रादयः | c04.l04 | D |
| 2.1.57 | विशेषणं विशेष्येण बहुलम् | c04.l04 (karmadhāraya) | TN |
| 1.1.34 · 7.1.25 | पूर्वपरावरदक्षिणोत्तरापराधराणि व्यवस्थायामसंज्ञायाम् · अद्ड् डतरादिभ्यः पञ्चभ्यः | c01.l03: 1.1.34 makes पूर्वः, उत्तरः pronominals in the sense of relative position; 7.1.25 is the contrast: its neuter -अत् is for the five डतरादि only (कतरत्, कतमत्, इतरत्, अन्यतरत्, अन्यत्; अन्यत् v3.c05.l02), so the neuter of पूर्व and उत्तर is पूर्वम्, उत्तरम् | TN |
| 1.1.40 | क्त्वातोसुन्कसुनः | c04.l02 | D |
| 7.1.9 | अतो भिस ऐस् | c01.l03 | D |
| 8.1.18, 8.1.24 | अनुदात्तं सर्वमपादादौ · न चवाहाहैवयुक्ते | Volume 5: 8.1.18 on the v5.c03 accent card, if the ROADMAP note PR gives v5.c03 that card (§6, Q18); 8.1.24 (no enclitic ते, मे after च, वा, ह, अह, एव) in the Teacher Notes of the first Volume 5 reading that needs it | — |
| 8.4.1–2, 8.4.37 | रषाभ्यां नो णः समानपदे · अट्कुप्वाङ्नुम्व्यवायेऽपि · पदान्तस्य | c02.l03; c06.l02 (8.4.1–2) | Q (8.4.1), D (8.4.2, 8.4.37); then R (8.4.1–2) |
| 8.3.59 | आदेशप्रत्यययोः | c02.l03 | D |

All numbers and texts were looked up in the data file (8.3.17's text is printed as the file
gives it, भोभगोअघोअपूर्वस्य योऽशि).

---

### 4.1 Chapter 1 — माहेश्वराणि सूत्राणि · The Fourteen Sūtras

**Goals.**
- Recite, write and use the fourteen sūtras.
- Name any stretch of sounds by its pratyāhāra.
- Say how long a letter in a rule reaches.
- Read the case code of a sūtra.
- Re-derive, with full understanding, every owned vowel-sandhi rule of v3.c04.l01.

**Grammar inventory (exact).**
- The 14 Māheśvara sūtras: [REF:maheshvarasutras 1–14]; the Kāśikā's comment on each, which
  precedes its comment on 1.1.1 (`jvkasipu.htm` lines 135–292: which pratyāhāras each marker
  closes, the two ṇ, the helping अ).
- The marker consonant (इत्): 1.3.3, 1.3.9.
- The pratyāhāra: 1.1.71. Those used: अच्, हल्, इक्, यण्, अक्, एच्, एङ्, यञ्, झल्, जश्, चय् (in no sūtra; only in a vārttika, Teacher Notes), चर्,
  खर्, इण्, अण् (two), अट्, शर्, झश्.
- Savarṇa: 1.1.9, 1.1.10 (Teacher Notes), 1.1.69.
- Tapara: 1.1.70.
- The case code: 1.1.49, 1.1.66, 1.1.67. Nearest substitute: 1.1.50. Respectively: 1.3.10.

**Volume 3 §6 rows carried:** the Māheśvara sūtras and pratyāhāras, including *sup* and
*tiṅ* as pratyāhāras (the *tiṅ* list itself is in c03.l01).

**1.x assets carried:**
- the Māheśvara sūtras and pratyāhāras of the 1.x Pāṇinian chapter (pp.69–70, 96), rebuilt
  per IR-018;
- the "Legend" label of p.69, kept as the model (IR-036).

**Errors corrected in the open:**
- IR-018: cay glossed "voiceless aspirated"; jhaś conflated with jaś; कपय् skipped in the
  memory aid;
- IR-017: इको यणचि's number, re-confirmed;
- the 1.x claim "Panini built ~42 pratyāhāras" (the 1.x book, p. 95, found by pdftotext): quoted
  and not repeated; a count prints only with its method (IR-041).

**Exam shape (l04, one 45-minute sitting).**
- **A** — write the fourteen sūtras from memory and mark every marker (6 min).
- **B** — expand ten pratyāhāras, three of them "trap" cases: अण् (the first ण्, अ इ उ, in
  every rule but 1.1.69, where it runs to the second, अ … ल) against इण् (always the second
  ण्); हल् with ह in two sūtras; चय् vs झश् (8 min).
- **C** — read six sūtras of c01.l03's case-code table, saying for each what is replaced, by
  what and where (10 min): 6.1.77, 6.1.78, 6.1.101, 7.1.9, 7.3.101, 8.4.40. (6.1.87 आद्गुणः
  is not on c01.l03's case-code table and is not case-coded here; it is derived in task D.
  In 6.1.101, as in 6.1.87, "what is replaced" is the bracket [पूर्वपरयोः] of c01.l03, both
  sounds: अकः, like 6.1.87's आत्, is ablative; 7.3.101's अतः is genitive, as the data file's
  padaccheda gives them.)
- **D** — "Derive, according to Pāṇini, …": five owned vowel joins in table form, each step
  with its sūtra (12 min):
  नास्ति, इत्यवदत्, तत्रैव, सूर्योदयः and विद्यालयः. (The word-internal lengthening of गच्छामः,
  7.3.101, is case-coded in task C, not derived here: it is not a join of two words.)
- **E** — production (9 min). Write six Sanskrit sentences about the sound system with the
  chapter's headwords (e.g. सूत्रस्यान्त्यो वर्ण इत्।), then say them aloud.

#### v4.c01.l01 — अइउण् · "The Fourteen Sūtras"

- **lesson_type:** grammar. **Station 0:** v3.c06.l05's +1 day and v3.c06.l04's +1 week. **review_of:**
  v3.c06.l05, v3.c04.l01 (the vowel sūtras), v1.c04.l04 (the complete varṇamālā),
  v1.c03.l01 (the varga grid).
- **The one grammar point:**
  - The fourteen sūtras list the sounds of Sanskrit in the order the grammar uses (their
    authorship and transmission: HISTORY, [REF:cardona1997], the callout below). Each line
    is closed by a consonant that is not one of its sounds, a marker (इत्).
  - A pratyāhāra, a sound plus a marker, names every sound from that sound up to the
    marker (1.1.71).
- **Forms taught (the sūtras; [REF:maheshvarasutras]):**

| # | Sūtra | IAST | Sounds listed | Marker |
|---|---|---|---|---|
| 1 | अइउण् | a i u ṇ | अ इ उ | ण् |
| 2 | ऋऌक् | ṛ ḷ k | ऋ ऌ | क् |
| 3 | एओङ् | e o ṅ | ए ओ | ङ् |
| 4 | ऐऔच् | ai au c | ऐ औ | च् |
| 5 | हयवरट् | ha ya va ra ṭ | ह य व र | ट् |
| 6 | लण् | la ṇ | ल | ण् |
| 7 | ञमङणनम् | ña ma ṅa ṇa na m | ञ म ङ ण न | म् |
| 8 | झभञ् | jha bha ñ | झ भ | ञ् |
| 9 | घढधष् | gha ḍha dha ṣ | घ ढ ध | ष् |
| 10 | जबगडदश् | ja ba ga ḍa da ś | ज ब ग ड द | श् |
| 11 | खफछठथचटतव् | kha pha cha ṭha tha ca ṭa ta v | ख फ छ ठ थ च ट त | व् |
| 12 | कपय् | ka pa y | क प | य् |
| 13 | शषसर् | śa ṣa sa r | श ष स | र् |
| 14 | हल् | ha l | ह | ल् |

  The consonants carry a helping अ (हयवरट् = h y v r + ṭ). That अ is "for pronunciation"
  (TRADITION: the Kāśikā on the sixth sūtra, लण्: हकारादिष्वकार उच्चारणार्थः, न अनुबन्धः
  "the a in ha etc. is for pronunciation, not a marker"). The e-text of the Kāśikā prints
  sūtra 11 as "kha pha dha ḍha tha …"; the course prints छ ठ (Teacher Notes, with the other
  e-text corrections of §4.6). The learner places each line
  on the Volume 1 grid. The vowels come first, then the semivowels, then the nasals, then
  the voiced aspirates, then the voiced plain stops, then the voiceless stops, then the
  sibilants and ह (§10 IPA ties each to STYLE_GUIDE §2). **ह appears twice** (sūtras 5 and
  14). **ण् closes two sūtras** (1 and 6). Both facts are needed in c01.l02.

  **The pratyāhāras of the day** (each expanded by the learner on the grid):

| Pratyāhāra | From … to marker | Sounds | Where the learner already met it |
|---|---|---|---|
| अच् | अ … ऐऔच् | all vowels | 6.1.77 इको यणचि (the अच् of अचि) |
| हल् | ह (sūtra 5) … हल् | all consonants | the name "halanta" (a consonant-final stem) |
| इक् | इ … ऋऌक् | इ उ ऋ ऌ | 6.1.77 |
| यण् | य … लण् | य व र ल | 6.1.77 |
| एच् | ए … ऐऔच् | ए ओ ऐ औ | 6.1.78 एचोऽयवायावः |
| एङ् | ए … एओङ् | ए ओ | 6.1.109 एङः पदान्तादति |
| अक् | अ … ऋऌक् | अ इ उ ऋ ऌ | 6.1.101 अकः सवर्णे दीर्घः |
| झल् | झ … हल् | all stops except nasals, + श ष स ह | 8.2.39 झलां जशोऽन्ते |
| जश् | ज … जबगडदश् | ज ब ग ड द | 8.2.39 (षट् → षड्) |
| चय् | च … कपय् | च ट त क प | in no sūtra, only in a vārttika (Teacher Notes: the LSK under 8.3.28, चयो द्वितीयाः शरि पौष्करसादेः); taught for IR-018: "voiceless *unaspirated*", not "aspirated" |

- **Sūtras (tiers, §1.4.1).** **Q:** 1.1.71 आदिरन्त्येन सहेता ("the first, with the final
  marker, [names itself and the sounds between]"). **B:** 1.3.3 हलन्त्यम् ("the final consonant [of a
  teaching] is a marker"); 1.3.9 तस्य लोपः ("it is dropped"). **Re-read (owned):** 6.1.77
  इको यणचि. **D:** 1.1.50 (preview, step 4). Tools added: 4.
- **The derivation (the day's spine): इति + अवदत् → इत्यवदत्** (owned since v3.c04.l01)

| Step | String | Tool |
|---|---|---|
| 0 | इति + अवदत् | (two words in contact, joined text) |
| 1 | the final इ is in **इक्** (अ**इ**उण् · ऋऌ**क्** → इ उ ऋ ऌ) | 1.1.71 |
| 2 | the next sound अ is in **अच्** (अइउण् … ऐऔच्) | 1.1.71 |
| 3 | an इक् sound before an अच् sound is replaced by a **यण्** sound (य व र ल) | 6.1.77 इको यणचि |
| 4 | which यण्? the one that matches इ: **य्** (both palatal) | 1.1.50, *preview*, read in c01.l03 |
| 5 | इत्य् + अवदत् → **इत्यवदत्** | — |

- **Model sentences (joined, with the pause form; Sanskrit about the system with owned
  words):**
  1. सूत्राणामादिरइउण्। (pause: सूत्राणाम् आदिः अइउण्।) "The first of the sūtras is अइउण्."
  2. सूत्रस्यान्त्यो वर्ण इत्। (सूत्रस्य अन्त्यः वर्णः इत्।) "The last sound of each of the
     fourteen sūtras is a marker." (सूत्रम् here is one of the fourteen; in इको यणचि the last
     sound is no marker.)
  3. अजिति स्वराणां प्रत्याहारः। (अच् इति स्वराणाम् प्रत्याहारः।) "अच् is the abbreviation for
     the vowels."
  4. हलिति व्यञ्जनानां प्रत्याहारः। (हल् इति व्यञ्जनानाम् प्रत्याहारः।) "हल् is the
     abbreviation for the consonants."
  5. इगिति इ उ ऋ ऌ इति चत्वारो वर्णाः। (इक् इति इ उ ऋ ऌ इति चत्वारः वर्णाः।) "इक् means the
     four sounds i u ṛ ḷ." (The joined line keeps the quoted sounds इ उ ऋ ऌ unjoined, as a
     quoted list: joining them would change the sounds being named. The Kāśikā does the same,
     "a i u ityanena" under अइउण्, "ṛ ḷ ity etau" under ऋऌक्.)
  6. इतो लोपः। (इतः लोपः।) "A marker disappears." (लोपः is taught in c02.l02; here it is a
     labelled preview, glossed, from 1.3.9's तस्य लोपः.)
- **New headwords (5; 508 → 513):**

| देवनागरी | IAST | Gender / class | Gloss | Why now |
|---|---|---|---|---|
| सूत्रम् | sūtram | n. a | rule (in a grammar); thread | the chapter's name |
| प्रत्याहारः | pratyāhāraḥ | m. a | abbreviation (lit. "drawing together") | the day's tool |
| आदिः | ādiḥ | m. i | beginning; (at a compound's end) "and so on" | 1.1.71 आदिः; Hit दानधर्मादिकम्, इत्यादि |
| अन्त्यः | antyaḥ | adj. -न्त्या -न्त्यम् | last, final | 1.1.71, 1.3.3 |
| अक्षरम् | akṣaram | n. a | syllable; written letter | the recitation of the sūtras (§9) |

  Not counted (rule 20): the fourteen sūtras and every pratyāhāra name; इत् is a label.
- **Previewed (labelled):**
  - 1.1.50 स्थानेऽन्तरतमः (c01.l03);
  - how many pratyāhāras there are: the 1.x "~42" is quoted and not repeated; the number
    prints only with the fact base's counting method (§4.0.4);
  - लोपः as a word (c02.l02);
  - the markers on affixes (सुँ c02.l01; शप् c03.l02).
- **Deferred:**
  - the two-ण् question and savarṇa (c01.l02);
  - the case code (c01.l03).
- **TRADITION callout (labelled legend; never assessed).**
  - A legend (the 1.x wording; the Nandikeśvarakāśikā's verse is not quoted, §7.3 Q2)
    tells that when Śiva danced, his drum sounded fourteen times and gave these sūtras. The 1.x book called
    this "Legend" (IR-036), and so does the course.
  - No REFERENCES key is added for the Nandikeśvarakāśikā (§7.3 Q2), so the callout keeps the
    1.x wording ("a legend tells …") and quotes no verse.
  - Beside it is a HISTORY line: the fourteen sūtras are transmitted with the Aṣṭādhyāyī, not
    inside its eight books [REF:maheshvarasutras]; [REF:cardona1997].
- **Payoff:**
  - 6.1.77 इको यणचि, quoted in Volume 3 as five mysterious syllables, now reads: "ik before
    ac: yaṇ".
  - The 1.x book's mis-number of it (1.1.45) is shown and re-corrected (IR-017): 1.1.45 is
    इग्यणः सम्प्रसारणम्.
- **Main risk:** the sūtras learned as a chant with no grid. Fix:
  - write each line into the Volume 1 grid before reciting;
  - drill the two IR-018 traps (चय् = च ट त क प; झश् = the voiced stops, ≠ जश्).
- **§17 (the grammarians' line, 1):**
  - Pāṇini and the names he cites in the sūtras: Śākalya (Teacher Notes: 8.3.19; c06.l03 reads it as D), Āpiśali,
    Śākaṭāyana. HISTORY, hedged, [REF:cardona1997].
  - The LSK (its saṃjñā section) opens with three of this lesson's tools (VLk 1, 3, 4:
    1.3.3, 1.3.9, 1.1.71; VLk 2, the definition of लोपः, is c02.l02's). TRADITION, verified in
    `varlghku.htm`.
- **S0 → next:** +1 day: recite the fourteen; expand अच् हल् इक् यण्. +1 week (c01.l03): the
  pratyāhāra traps.

#### v4.c01.l02 — सवर्णम् · "One Letter for Its Whole Family"

- **lesson_type:** grammar. **Station 0:** v4.c01.l01's +1 day and v3.c06.l05's +1 week. **review_of:** v4.c01.l01, v3.c04.l01 (6.1.101), v3.c03.l01
  (7.3.101, the V2 "stretch"), v1.c02.l01–l03 (vowel length).
- **The one grammar point:**
  - In a rule, a short vowel (and a letter marked with उ) stands for its whole family. That
    family is its savarṇas: sounds made at the same place with the same effort (1.1.9,
    1.1.69). The limit is in the sūtra's last word, अप्रत्ययः: a letter that the rule itself
    puts in does not cover its family. So the यण् that 6.1.77 puts in is the plain य व र ल
    only, never their nasalised forms. (Teacher Notes, under 1.1.69: the LSK takes प्रत्यय as
    anything introduced, "प्रतीयते विधीयत इति प्रत्ययः। अविधीयमानोऽणुदिच्च सवर्णस्य संज्ञा
    स्यात्", and adds "अनुनासिकाननुनासिकभेदेन यवला द्विधा"; the Kāśikā gives affixes as its
    examples: "अप्रत्ययः इति किम्? सनाशंसभिक्ष उः (3.2.168), अ साम्प्रतिके (4.3.9), दीर्घो न
    भवति".)
  - A letter followed by त् (तपर) stands for its own length only (1.1.70).
- **Forms taught:**

| Written in a rule | Covers | Why | Example rule |
|---|---|---|---|
| अ (in अक्, अण्) | अ आ (and the 3-mora आ३) | 1.1.69 | 6.1.101 अकः सवर्णे दीर्घः |
| इ, उ, ऋ | इ ई · उ ऊ · ऋ ॠ (+ ऌ with ऋ, by the tradition's vārttika: Teacher Notes) | 1.1.69 | 6.1.77 इको यणचि |
| अत् (तपर) | short अ only | 1.1.70 | 7.3.101 अतो दीर्घो यञि; 1.1.2 अदेङ् गुणः (c02.l02) |
| आत् (तपर) | आ only | 1.1.70 | 1.1.1 वृद्धिरादैच् (c02.l02) |
| चु, तु (उदित्) | the whole च-row, त-row | 1.1.69 | 8.4.40 स्तोः श्चुना श्चुः (owned) |

  **The two-ण् question.** अण् is formed with the **first** ण् (अ इ उ) in every rule but one:
  in 1.1.69 it runs to the **second** (अ … ल), so that 1.1.69 reaches ऋ ऌ ए ओ ऐ औ and the
  semivowels too. इण् is always formed with the second (8.3.57 इण्कोः: इ … ल, which is why ए
  and ओ trigger ṣatva in c02.l03). TRADITION, from the Kāśikā on लण्: "इण्ग्रहणानि सर्वाणि
  परेण णकारेण। अण्ग्रहणानि तु पूर्वेण, 'अणुदित्सवर्णस्य चाप्रत्ययः' इत्येतदेवैकं परेण।"; the
  Kāśikā on अइउण् names 1.1.51 उरण् रपरः as its example of the first; the LSK under 1.1.69:
  "अत्रैवाण् परेण णकारेण". The learner is told the rule and the one exception; the lines
  themselves are Teacher Notes until c06.
- **Sūtras (tiers).** **Q:** 1.1.69 अणुदित् सवर्णस्य चाप्रत्ययः. **D:** 1.1.9
  तुल्यास्यप्रयत्नं सवर्णम्; 1.1.70 तपरस्तत्कालस्य. **Re-read:** 6.1.101, 7.3.101 (both
  owned). Tools added: 3. (The GRETIL e-text of the LSK labels 1.1.9 "1,1.8", and its VLk 9,
  1.1.8 मुखनासिकावचनोऽनुनासिकः, "1,2.8": slips of the e-text, not the LSK's numbering. The
  course follows the data file and lists both in Teacher Notes with the other e-text
  corrections of §4.6.)
- **The derivations:**

  (a) **विद्या + आलयः → विद्यालयः** (owned since V1; seam taught v3.c04.l01)

| Step | String | Tool |
|---|---|---|
| 0 | विद्या + आलयः | — |
| 1 | आ is covered by the अ of **अक्**, since अ stands for its savarṇa आ | 1.1.69 |
| 2 | आ + आ are savarṇa (same place, same effort) | 1.1.9 |
| 3 | both are replaced by one long vowel: आ | 6.1.101 अकः सवर्णे दीर्घः |
| 4 | **विद्यालयः** | — |

  (b) **गच्छ + मि → गच्छामि, but गच्छ + थ → गच्छथ** (owned since V2/V3)

| Step | गच्छ + मि | गच्छ + थ | Tool |
|---|---|---|---|
| 1 | the stem ends in short अ: **अत्** (tapara) fits | the same | 1.1.70 |
| 2 | म is in **यञ्** (य व र ल ञ म ङ ण न झ भ) | थ is not in यञ् | 1.1.71 |
| 3 | the अ is lengthened: गच्छा + मि | no change | 7.3.101 अतो दीर्घो यञि |
| 4 | **गच्छामि** (and गच्छावः, गच्छामः) | **गच्छथ** (and गच्छतः, गच्छसि) | — |

  The learner predicts the seven owned present cells of पठति from the rule before checking
  them (the 1st-person dual गच्छावः above is a ◐ cell, printed, not produced).
- **Model sentences:**
  1. अ आ च सवर्णौ। (अ आ च सवर्णौ।) "अ and आ are savarṇa (of one family)." (सवर्णः is today's
     headword, rule 20; the dual is owned. The joined line keeps the quoted sounds अ आ unjoined: joined,
     they would merge into one आ, the very savarṇa-dīrgha the lesson teaches.)
  2. इकारो दीर्घो न, ह्रस्वः। (इकारः दीर्घः न, ह्रस्वः।) "इ is not long but short."
  3. विद्या आलय इति द्वे पदे, एको दीर्घः। (विद्या आलयः इति द्वे पदे, एकः दीर्घः।) "In
     'vidyā ālayaḥ': two words, one long vowel for both." (द्वे पदे is the owned dual
     nom./acc., and पदे stays unjoined before एकः by 1.1.11; the oblique dual of द्वि waits
     for c05.l03, and the gen./loc. dual ending in -योः is ◐ at entry. The pause form keeps
     विद्या आलयः unjoined, as a quoted phrase.)
  4. गच्छामीत्यत्र मकारो यञ्। (गच्छामि इति अत्र मकारः यञ्।) "In gacchāmi, the m is a yañ
     sound."
  5. गच्छथेत्यत्र दीर्घो नास्ति। (गच्छथ इति अत्र दीर्घः न अस्ति।) "In gacchatha there is no
     long vowel."
- **New headwords (4; 513 → 517):** दीर्घः dīrghaḥ adj. -र्घा -र्घम् "long" (6.1.101 दीर्घः;
  Panc 4 दीर्घतर°) · ह्रस्वः hrasvaḥ adj. -स्वा -स्वम् "short" (1.2.27; 7.4.59 in c03.l04) ·
  प्रयत्नः prayatnaḥ m. a "effort; articulatory effort" (1.1.9) · सवर्णः savarṇaḥ adj. -र्णा
  -र्णम् "of the same class of sounds, homogeneous" (1.1.9 सवर्णम्, 1.1.69 सवर्णस्य; the
  lesson's title; MW "belonging to the same class of sounds, homogeneous with"). (The
  Kāśikā's उच्चारणार्थः in c01.l01 stays a commentary form, rule 21.)
- **Previewed:** 1.1.1–2's आत् and अत् (c02.l02). **Deferred:** savarṇa between vowels and
  consonants is excluded (1.1.10 नाज्झलौ, Teacher Notes: इ and श share a place but are not
  savarṇa).
- **Payoff:** Volume 2's "stretch" rule (गच्छामि but गच्छसि) and Volume 3's 7.3.101 meet: the
  learner can now say why गच्छथ has no long आ. This is the first time the learner predicts a
  cell from a rule.
- **Main risk:** reading every letter in a rule as covering its long partner. Fix: the tapara
  drill. Sort ten rule-letters into "family" (अ, इ, उ, चु) and "this length only" (अत्,
  आत्).
- **S0 → next:** +1 day: the yañ/non-yañ sort (8 endings); +1 week (c01.l04): the savarṇa
  table.

#### v4.c01.l03 — इको यणचि · "How a Rule Speaks"

- **lesson_type:** grammar. **review_of:** v4.c01.l02, v4.c01.l01, v3.c04.l01–l02,
  v3.c01.l05 (the case names).
- **The one grammar point:** a sūtra speaks in cases.
  - The **genitive** names what is replaced: "in place of X" (1.1.49).
  - The **locative** names what follows: the operation applies before it (1.1.66).
  - The **ablative** names what precedes: the operation applies after it (1.1.67).
  - The **nominative** names the result.
  - In these words the genitive and the ablative singular have one form (इकः, एचः, अकः, अतः,
    भिसः; स्तोः too). The form does not decide the case. The rule's sense does, and the
    padaccheda printed under each sūtra names it (§1.4.3). In 7.1.9 the result ऐस् is an
    ending, so it stands in place of the ending: भिसः is the genitive and अतः the ablative
    ("after short a"). In 7.3.101 the result दीर्घः is a vowel, so it stands in place of the
    short a: अतः is the genitive ("in place of short a"). (The vṛtti's two readings, Kāśikā
    on 7.1.9 "अकारान्तादङ्गादुत्तरस्य भिसः" and on 7.3.101 "अकारान्तस्याङ्गस्य दीर्घः":
    Teacher Notes.)
  - When there are as many replaced items as results, they pair off in order (1.3.10). Where
    one item could take several results, the nearest one wins (1.1.50).
- **Forms taught (the case code, on owned rules):**

| Rule | Genitive: in place of | Nominative: result | Locative: before | Ablative: after |
|---|---|---|---|---|
| 6.1.77 इको यणचि | इकः (i u ṛ ḷ) | यण् (y v r l) | अचि (a vowel) | — |
| 6.1.78 एचोऽयवायावः | एचः (e o ai au) | अय् अव् आय् आव् | [अचि, carried from 6.1.77] | — |
| 6.1.101 अकः सवर्णे दीर्घः | [पूर्वपरयोः: both sounds, carried from a heading; c02.l02] | दीर्घः (one long vowel) | सवर्णे [अचि] | अकः (after an ak) |
| 7.1.9 अतो भिस ऐस् | भिसः (the ending -भिस्) | ऐस् | — | अतः (after short a) |
| 7.3.101 अतो दीर्घो यञि | अतः (short a: here the genitive, the same form as 7.1.9's ablative) | दीर्घः | यञि (a yañ sound) | — |
| 8.4.40 स्तोः श्चुना श्चुः | स्तोः (s, t-row) | श्चुः (ś, c-row) | श्चुना (instrumental: "in contact with") | — |

  The bracket [अचि] is the course's first anuvṛtti, printed as "carried from the rule
  before". It is labelled and explained in c02.l03. Two traps of the code are shown on this
  table:
  - the ending -अः of a sound-name is genitive and ablative alike, and the padaccheda printed
    beneath the sūtra (§1.4.3) decides: 6.1.77's इकः and 7.3.101's अतः are genitive, 7.1.9's
    अतः and 6.1.101's अकः ablative (so is 6.1.87's आत्);
  - in 6.1.87 and 6.1.101 the replaced item is not a word of the sūtra: a heading carried over
    them, [पूर्वपरयोः] "in place of both, the earlier and the later", makes one substitute
    replace both sounds (the heading and its number are c02.l02's; here a labelled bracket).
- **Sūtras (tiers).** **Q:** 1.1.49 षष्ठी स्थानेयोगा; 1.1.66 तस्मिन्निति निर्दिष्टे पूर्वस्य;
  1.1.67 तस्मादित्युत्तरस्य. **D:** 1.1.50 स्थानेऽन्तरतमः; 1.3.10 यथासंख्यमनुदेशः समानाम्;
  7.1.9 अतो भिस ऐस् (first met here; in Volume 3 it was in Teacher Notes only). **Re-read
  (owned):** 6.1.78 (B). Tools added: 5. From this lesson on, every quoted sūtra is printed
  with its padaccheda and each word's case (§1.4.3).
- **The derivations:**

  (a) **भो + अति → भवति** (the last step of भवति, as Volume 3 gave it, IR-021; now read as a
  rule)

| Step | String | Tool |
|---|---|---|
| 0 | भो + अति | (how ओ arose is c02.l02; how अति arose is c03) |
| 1 | ओ is in एच्; [a vowel follows] | 6.1.78 (with अचि carried from 6.1.77) |
| 2 | ए ओ ऐ औ → अय् अव् आय् आव्, in order: ओ is the second, so **अव्** | 1.3.10 |
| 3 | भव् + अति → **भवति** | — |

  (b) **देव + भिस् → देवैः** (owned since v3.c02.l01; the -ऐः exception of the
  recurring-endings card)

| Step | String | Tool |
|---|---|---|
| 0 | देव + भिस् | — |
| 1 | after short अ (abl. अतः) the ending भिस् (gen. भिसः) is replaced by ऐस् (nom.) | 7.1.9 अतो भिस ऐस् |
| 2 | देव + ऐस् → अ + ऐ → ऐ | 6.1.88 वृद्धिरेचि (owned) |
| 3 | देवैस् → **देवैः** (final स् → visarga) | the two steps 8.2.66 + 8.3.15, *preview*: c02.l01 |

  **The learner derives** (derive it yourself, principle 7) **ने + अति → नयति** (6.1.78 with
  1.3.10: ए is the first of एच्, so अय्; how ए arose is c03.l02) and **राम + भिस् → रामैः**
  (7.1.9, 6.1.88, the visarga step as in (b)).
- **Model sentences:**
  1. इक इत्यत्र षष्ठी, स्थान इत्यर्थः। (इकः इति अत्र षष्ठी, स्थाने इति अर्थः।) "In 'ikaḥ'
     there is a genitive, meaning 'in place of'."
  2. अचीति सप्तमी, पूर्वस्य कार्यम्। (अचि इति सप्तमी, पूर्वस्य कार्यम्।) "'aci' is a locative:
     the operation is on what comes before."
  3. अत इति पञ्चमी, उत्तरस्य कार्यम्। (अतः इति पञ्चमी, उत्तरस्य कार्यम्।) "'ataḥ' is an
     ablative: the operation is on what comes after."
  4. इको यणादेशः। (इकः यणादेशः।) "In place of an ik, the yaṇ substitute." (यणादेशः is the
     Kāśikā's own compound, on 6.1.77: इको यणादेशो भवति. Two free words यण् आदेशः could not
     stand apart in joined text: a consonant-final word is written together with the next
     vowel, STYLE_GUIDE §3.1, and 8.3.32 would double the ण्.)
  5. पूर्वो वर्ण इक्, उत्तरोऽच्। (पूर्वः वर्णः इक्, उत्तरः अच्।) "The earlier sound is an ik,
     the later an ac."
  6. सूत्रस्य विधिः कः? (सूत्रस्य विधिः कः?) "What is the sūtra's operation?"
- **New headwords (4; 517 → 521):** आदेशः ādeśaḥ m. a "substitute; command" (Apte: both) ·
  पूर्वः pūrvaḥ pron. adj. -र्वा -र्वम् "preceding, earlier; eastern" (1.1.66; the pronominal
  cells are Teacher Notes, 1.1.34) · उत्तरः uttaraḥ pron. adj. -रा -रम् "following, later;
  northern"; n. उत्तरम् "answer" (1.1.67) · विधिः vidhiḥ m. i "rule, injunction; method;
  fate" (Hit "विधिः" as fate). (कार्यम् is owned; पूर्वः's and उत्तरः's pronominal behaviour is display
  only.)
- **Previewed:** anuvṛtti, the bracket [अचि] (c02.l03); 8.2.66 + 8.3.15 (c02.l01); the
  heading [पूर्वपरयोः], one substitute for both vowels, in the 6.1.101 row (its sūtra, 6.1.84 एकः
  पूर्वपरयोः, and its number are c02.l02's).
  **Deferred:** the instrumental of association in 8.4.40, read as a case-code exception
  (Teacher Notes; Chapter 6 for the vṛtti).
- **Payoff:**
  - The learner reads, unaided, the structure of every vowel sūtra Volume 3 quoted.
  - देवैः, the -ऐः exception that the Volume 3 card listed without a reason, now has its
    rule.
  - The last step of भवति is read as the tradition writes it. This is the first step of the
    भवति thread.
- **Main risk:** reading the locative as "in" (as in v3.c01.l02) instead of "before", and
  taking every -अः word for one case (अतः is ablative in 7.1.9, genitive in 7.3.101). Fix:
  - a two-column drill: the case in a sentence (वने "in the forest") vs the case in a sūtra
    (अचि "before a vowel");
  - six rules in which the learner circles the replaced item and arrows the context;
  - the अतः pair, 7.1.9 and 7.3.101, read side by side: "what can the result stand in
    place of?" decides which word is the genitive.
- **S0 → next:** +1 day: case-code five owned sūtras; +1 week (c02.l01): the case-code drill
  again, then देवैः derived.

#### v4.c01.l04 — प्रथमपरीक्षा · "Chapter 1 Exam"

- **lesson_type:** review. **review_of:** v4.c01.l01–l03, v3.c04.l01, v3.c06.l05.
- **Assembly (§15):**
  - T9, the fourteen sūtras, with every marker;
  - the pratyāhāra index (all those used, each expanded);
  - the savarṇa/tapara table;
  - the case-code table;
  - the toolbox card, 12 tools (4 + 3 + 5, the chapter's "tools added").
  The six Volume 3 vowel sūtras are re-printed with their parts labelled.
- **Exam:** the chapter shape above (45 min). Ledger stays 521.
- **Spiral:** one Volume 3 joined line (सर्वे भवन्तु सुखिनः…). The line has no vowel join
  between words: the learner says so, then marks its two changed seams, कश्चित् + दुःखभाक् →
  कश्चिद्दुःखभाक् and दुःखभाक् + भवेत् → दुःखभाग्भवेत्, and names the owned sūtra for both
  (8.2.39 झलां जशोऽन्ते, Volume 3, read from the pause forms); and also marks, inside कश्चित्,
  the visarga seam कः + चित्, by 8.3.34 विसर्जनीयस्य सः and then 8.4.40 स्तोः श्चुना श्चुः, both
  owned. The unchanged visarga of सुखिनः सर्वे is not asked; nor is निस् → निर् in निरामयाः, by
  8.2.66 (c02.l01), nor the final of the base -भाज् → -भाग्, by 8.2.30 (c04.l01).
- **Payoff:** Volume 3's sandhi chapter, re-read as Pāṇini's rules.
- **Main risk:** memorised numbers, no grasp of the code. The rubric weights C and D (the
  reading and the derivations) over A (recall).
- **S0 → next:** +1 day (c02.l01): write the fourteen; +1 week (c02.l02): pratyāhāra traps.

---

### 4.2 Chapter 2 — अष्टाध्यायीप्रवेशः · Inside the Aṣṭādhyāyī

**Goals.**
- Take an owned word apart into base and affix, with its markers.
- Name the base aṅga, pada or bha.
- Tell substitution, augment and deletion apart; define guṇa and vṛddhi.
- Read a sūtra whose words must be carried down from the rules above.
- Derive the ṇ of रामेण and the ṣ of रामेषु and करोषि.

**Grammar inventory (exact).**
- Base and affix: prakṛti and pratyaya (3.1.1, 3.1.2); prātipadika (1.2.45, K).
- The markers of the sup affixes: the सुँ of 4.1.2 (owned picture); 1.3.2 (nasal vowel it);
  the other endings' markers in one line (1.3.7 and 1.3.4, Teacher Notes; 1.3.8, preview).
- *sup* as a pratyāhāra (सुँ … सुप्, 1.1.71 on 4.1.2).
- The names of the base: aṅga (1.4.13), pada (1.4.17 with 1.4.14), bha (1.4.18),
  sarvanāmasthāna (1.1.43, K).
- The rājan example: राजा, राजभिः, राज्ञा derived (Whitney §§420–424). नमः from नमस्: 2.4.82
  (D), the नमस्ते thread (§1.5).
- The operations: 1.1.60 lopa; 1.1.46 the place of an augment; 6.1.84 one-for-two (D).
- The grades defined: guṇa and vṛddhi (1.1.1, 1.1.2, 1.1.3).
- Anuvṛtti (8.4.1 → 8.4.2; 3.4.99 → 3.4.100; 7.1.9 → 7.1.12).
- Adhikāra (6.4.1 अङ्गस्य; 8.3.55 अपदान्तस्य मूर्धन्यः; 8.3.57 इण्कोः).
- ṇatva: 8.4.1–2, with 8.4.37 पदान्तस्य (D).
- ṣatva: 8.3.59 under 8.3.55 and 8.3.57.

**Volume 3 §6 rows carried:**
- the Aṣṭādhyāyī's architecture and anubandhas (begun; completed in c03.l03);
- the rājan example of aṅga/pada/bha (**v4.c02**, as the row requires);
- internal sandhi: ṇatva (8.4.1–2) and ṣatva (8.3.59), with guṇa and vṛddhi defined as
  substitutes (1.1.1–3; IR-016, IR-021).

**1.x assets carried:**
- the rājan aṅga/pada/bha example (pp.97–99), with its errors corrected in the open
  (c02.l01; §4.0.4);
- the lopa/āgama/ādeśa examples, re-derived (IR-021; p.89);
- ṣatva/ṇatva, rebuilt (IR-016; pp.73–74);
- the correct अट्-augment example of p.89, kept.

**Exam shape (l04, 45 min).**
- **A** — label base, affix and markers in eight owned forms, the markers as c02.l01's
  ending-marker line gives them (8 min).
- **B** — name the base aṅga / pada / bha before six endings of राजन् (6 min).
- **C** — for six operations, say which kind each is and what its marker or case shows
  (8 min).
- **D** — "Derive, according to Pāṇini, …": four owned forms, every step with its sūtra
  (15 min): पुत्रेण, बालकेषु and राजभिः in full (for राजभिः the derivation ends with 8.2.7 and then the visarga steps 8.2.66 and 8.3.15, as in रामः; why 7.1.9 does not then apply is 8.2.1, c06.l03's, and is not asked); and शृणोषि (V2 promise) from the given stem
  शृणो-, as करोषि is in c02.l03, deriving the ṣ only (the stem's own steps are Chapter 3's).
- **E** — an unseen rule pair: 7.1.13 ङेर्यः after 7.1.12. Say which word is carried and,
  "according to Pāṇini", derive राम + ङे → रामय (8 min). The step रामय → रामाय (7.3.102) is given as display; it is
  c06.l03's.

#### v4.c02.l01 — अङ्गं पदं भम् · "One Base, Three Names"

- **lesson_type:** grammar. **Station 0:** v4.c01.l04's +1 day item; v4.c01.l03's +1 week
  item. **review_of:** v4.c01.l04, v4.c01.l03, v3.c01.l05 (1.4.14, the sup picture),
  v3.c01.l04 (नृपः "the a-stem king"), v1.c05.l02 (नमः).
- **The one grammar point:**
  - A word is a base (प्रकृतिः) plus an affix (प्रत्ययः) placed after it (3.1.1–2), with the
    affix's markers removed. The base is called **aṅga** before any affix (1.4.13).
  - Before case endings it has two further names. It is **pada** before the consonant-initial
    endings other than the five strong ones (1.4.17). It is **bha** before the vowel- or
    य-initial ones other than the five strong ones (1.4.18).
  - What a rule does to a base depends on the name it bears.
- **Forms taught:**

  (a) **राम + सुँ → रामः**

| Step | String | Tool |
|---|---|---|
| 0 | राम (prātipadika) + सुँ (the first sup affix, 4.1.2) | 3.1.1 प्रत्ययः, 3.1.2 परश्च |
| 1 | the nasal उँ of सुँ is a marker | 1.3.2 उपदेशेऽजनुनासिक इत् |
| 2 | it is dropped: राम + स् | 1.3.9 तस्य लोपः |
| 3 | राम is aṅga before स् | 1.4.13 |
| 4 | रामस् → रामरुँ (स् → रुँ at the end of a pada: रामस् ends in a sup, so it is a pada by 1.4.14, owned) | 8.2.66 ससजुषो रुः |
| 5 | (उँ marker dropped) रामर् → **रामः** (at a pause) | 8.3.15 खरवसानयोर्विसर्जनीयः |

  Second derivation, done by the learner: **फल + सुँ → फलम्**. Steps: 7.1.24 अतोऽम् replaces
  सुँ with अम् after a short-a neuter; then 6.1.107 अमि पूर्वः gives a + am → am.

  **The markers of the other endings** (one line, so that 1.3.3 is not over-applied): the
  initial ज् of जस् and ट् of टा are markers (1.3.7, Teacher Notes); the initial श् of शस् and
  ङ् of ङे, ङसिँ, ङस्, ङि are markers (1.3.8 लशक्वतद्धिते, *preview*, c03.l02); but the final
  स् of भिस्, भ्यस्, जस्, ङस्, ओस् and the म् of अम्, भ्याम्, आम् are **not** markers: in a case
  or verb ending a final dental, स् or म् is kept (1.3.4, Teacher Notes). So the अम् of
  फलम् keeps its म्, भिस् stays भिस्, and सुप् loses only its प्.

  **सुप् is a pratyāhāra too** (1.1.71; the Volume 3 §6 row, §4.0.1): from सुँ, the first
  ending of 4.1.2, to the प् of सुप्, the last, it names all twenty-one case endings. 2.4.82's
  सुपः and c02.l03's "plural sup" use it.

  (b) **राजन्: three cells, three names** (the 1.x pp.97–99 example; Whitney §424)

| Cell | Ending | Name of राजन् before it | What follows | Result |
|---|---|---|---|---|
| instr. pl. | भिस् | **pada** (1.4.17: consonant-initial, not strong) | 8.2.7 नलोपः प्रातिपदिकान्तस्य: the pada-final न् of a nominal base is dropped; then 8.2.66 and 8.3.15 as in रामः | राज + भिस् → **राजभिः** (not *राजैः: राज now ends in अ, yet 7.1.9 अतो भिस ऐस्, owned, does not apply; why is 8.2.1, *preview*, c06.l03) |
| instr. sg. | टा (→ आ) | **bha** (1.4.18 यचि भम्: vowel-initial, not strong) | 6.4.134 अल्लोपोऽनः: the अ of a bha-stem in -अन् is dropped → राज्न् + आ; 8.4.40 स्तोः श्चुना श्चुः: न् → ञ् after ज् | **राज्ञा** |
| nom. sg. | सुँ (→ स्) | **strong** (sarvanāmasthāna, 1.1.43, K) | display only (c05.l03): 6.4.8 lengthens the upadhā, 6.1.68 drops the स्, 8.2.7 drops the न् | **राजा** |

  The full राजन् table is printed as ○ display (Whitney §424). It becomes ✓ in c05.l03.

  **The 1.x card corrected in the open (pp.97–99).** It glossed 1.4.18 as "Before
  vowel-initial endings or those starting in sibilant + vowel, the stem is bha" (p.98): the
  य of यचि is the semivowel य, not a sibilant. यचि = before an ending that begins with य or a
  vowel, the five strong ones excepted (carried from 1.4.17). It printed "Case 1 sg: राजा
  (pada — n drops)" and "Case 2 sg: राजानम् (aṅga — n stays)": before सुँ and अम् the base is
  strong (1.1.43, K), not pada and not merely aṅga (every base is aṅga before an affix,
  1.4.13). The न् of राजा drops for another reason: once सुँ is dropped, the whole word राजन्
  is a pada (1.4.14 with 1.1.62, Teacher Notes, as in नमः below), and 8.2.7 applies. It said
  that in "the 3rd–7th cases" the stem collapses to राज्ञ्: राजभिः is a 3rd-case cell where the
  base is pada, and 6.4.134 drops only the अ (राज्न् + आ → राज्ञा, table b).

  (c) **नमस् → नमः** (owned since v1.c03.l04, split from नमस्ते in v1.c05.l02; the नमस्ते thread, §1.5)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | नमस् + सुँ | 1.1.37 (owned): नमस् is an avyaya | an indeclinable still takes the ending |
| 1 | नमस् (the ending is deleted) | 2.4.82 अव्ययादाप्सुपः (D) | after an avyaya, sup → luk |
| 2 | (still a pada: the deleted affix counts) | 1.1.62, Teacher Notes; 1.4.14 (owned) | — |
| 3 | नमरुँ → नमर् | 8.2.66 ससजुषो रुः (D) | pada-final स् → रुँ |
| 4 | **नमः** | 8.3.15 खरवसानयोर्विसर्जनीयः (D) | at a pause → visarga |

  Before ते, step 4 applies too (8.3.15 also works before a khar such as त्): नमः + ते. The
  visarga is then replaced by स् (8.3.34 विसर्जनीयस्य सः, owned): नमस्ते. So the स् of
  नमस्ते is a substitute for the visarga, not the stem's स् left untouched.
- **Sūtras (tiers).** **Q:** 1.4.17 स्वादिष्वसर्वनामस्थाने; 1.4.18 यचि भम्. **B:** 3.1.1
  प्रत्ययः; 3.1.2 परश्च; 1.3.2 उपदेशेऽजनुनासिक इत्; 1.4.13 यस्मात् प्रत्ययविधिस्तदादि
  प्रत्ययेऽङ्गम्. **D:** 8.2.66 ससजुषो रुः; 8.3.15 खरवसानयोर्विसर्जनीयः; 7.1.24 अतोऽम्; 6.1.107
  अमि पूर्वः; 8.2.7 नलोपः प्रातिपदिकान्तस्य; 6.4.134 अल्लोपोऽनः; 2.4.82 अव्ययादाप्सुपः; 8.4.40
  (owned). **K:** 1.2.45 अर्थवदधातुरप्रत्ययः प्रातिपदिकम्; 1.1.43 सुडनपुंसकस्य. Tools added: 13
  (the heaviest count of Chapter 2: six of them are the one-line steps of रामः and नमः).
- **Model sentences:**
  1. रामशब्दे राम इति प्रकृतिः, सुरिति प्रत्ययः। (राम-शब्दे राम इति प्रकृतिः, सुः इति
     प्रत्ययः।) "In the word rāmaḥ, rāma is the base and su the affix."
  2. प्रत्ययः प्रकृतेः परो भवति। (प्रत्ययः प्रकृतेः परः भवति।) "The affix comes after the
     base." (3.1.2 in a sentence; प्रकृतेः, the ablative of an f. i-stem, is the masculine-like cell of
     Volume 3's मतिः Δ card, ◐: read here, not drilled.)
  3. राजा नृपश्चैकार्थौ। (राजा नृपः च एक-अर्थौ।) "राजा and नृपः have one meaning."
  4. राज्ञा सह सेवको गच्छति। (राज्ञा सह सेवकः गच्छति।) "The servant goes with the king."
  5. राजभिः किं कृतम्? (राजभिः किम् कृतम्?) "What was done by the kings?" (the R2 frame, owned)
  6. स्वामी भृत्येन सह गच्छति। (स्वामी भृत्येन सह गच्छति।) "The master goes with his
     servant." (स्वामी, like राजा, is counted by its nominative; its cells come in c05.l03)
- **New headwords (6; 521 → 527):** राजा rājā m. (stem राजन्) "king" (rule 14: counted by its
  nominative; other cells ◐ until c05.l03; Hit passim) · प्रत्ययः pratyayaḥ m. a "affix;
  trust, conviction" · प्रकृतिः prakṛtiḥ f. i "base (of a word); nature" (Hit 1.17
  प्रकृत्या "by nature") · आत्मा ātmā m. (stem आत्मन्) "self; soul" (rule 14; Hit आत्मनः;
  आत्मानम् display) · स्वामी svāmī m. (stem स्वामिन्) "master, lord; owner" (rule 14; among the
  commonest unowned nouns of the Hitopadeśa, 68 DCS tokens; rule 22) · भृत्यः bhṛtyaḥ m. a
  "servant, dependant" (Hit 22 tokens; the Vīravara thread's word for him; a kṛt noun of भृ,
  lexicalised, rule 18).
- **Previewed:** the sarvanāmasthāna and the strong cells (c05.l03); why 7.1.9 does not apply to राज + भिस् (8.2.1, c06.l03); the visarga's other
  outcomes (owned, v3.c04.l02). **Deferred:** the n-stem and consonant-stem system (c05.l03);
  why राज- in राजपुरुषः (c04.l04).
- **Payoff:**
  - रामः and the visarga learned in v1.c02.l06: the ः is what is left of an ending.
  - नमः is the same story (§1.5, the नमस्ते thread).
  - नृपः, which Volume 3 gave "so that king is usable before राजन्", meets राजा.
  - राज्ञा's ज्ञ, a conjunct from Volume 1, is a sandhi the learner owns (8.4.40).
- **Main risk:** aṅga/pada/bha taken as three different stems to memorise. Fix:
  - the "one base, three names" sort. Twelve endings of राजन् go into strong / pada / bha
    boxes, with the rule each box triggers (strong: 6.4.8 lengthens the अ, display until
    c05.l03 / pada: 8.2.7 / bha: 6.4.134, which the loc. sg. may skip, राज्ञि or राजनि,
    Teacher Notes: 6.4.136);
  - the forms themselves are not learned yet.
- **§17 (grammarians, 2):** Kātyāyana's vārttikas and Patañjali's Mahābhāṣya. HISTORY,
  hedged (Patañjali c. 2nd c. BCE [REF:mahabhashya]). The Mahābhāṣya's own statement of why
  grammar is studied (§1.5), printed as ○ display with a gloss (not a headword, not a tool;
  प्रयोजनम् becomes owned in c03.l05): रक्षोहागमलघ्वसन्देहाः प्रयोजनम् (rakṣohāgamalaghvasandehāḥ
  prayojanam) "the purposes [of grammar] are preservation (of the Veda), adaptation (ūha,
  of mantras to the rite), scripture (āgama), economy (laghu) and freedom from doubt
  (asandeha)". Source: Paspaśāhnika, Kielhorn I.1.14–2.2; `pmbhassu.htm` Pas 3, sentence 2,
  whose "proyojanam" is an e-text typo, corrected and listed in Teacher Notes (§1.4.3; the spelling list of §4.6).
  TRADITION, attributed, assessed only as "According to Patañjali …".
- **S0 → next:** +1 day: derive रामः, फलम्; +1 week (c02.l03): the strong/pada/bha sort.

#### v4.c02.l02 — आदेशः आगमः लोपः · "Replace, Add, Delete"

- **lesson_type:** grammar. **review_of:** v4.c02.l01, v4.c01.l03, v3.c03.l03 (the augment
  अ-), v3.c04.l01 (गुणः, वृद्धिः as sandhi names).
- **The one grammar point:** a rule does one of three things.
  - It **replaces** (आदेशः, named by the genitive).
  - It **adds** (आगमः). Where it adds is shown by the augment's own marker: a ṭ-marked augment
    goes at the beginning of its host, a k-marked one at the end (1.1.46).
  - It **deletes** (लोपः, 1.1.60).
  guṇa (अ ए ओ) and vṛddhi (आ ऐ औ) are names for substitutes (1.1.1–2), applied to i u ṛ ḷ
  (1.1.3).
- **Forms taught:**

| Name | Defined as | Replaces (1.1.3) | ↔ |
|---|---|---|---|
| गुणः | अ ए ओ (1.1.2 अदेङ् गुणः: अत् + एङ्) | इ/ई → ए · उ/ऊ → ओ · ऋ/ॠ → अर् · ऌ → अल् | — |
| वृद्धिः | आ ऐ औ (1.1.1 वृद्धिरादैच्: आत् + ऐच्) | इ/ई → ऐ · उ/ऊ → औ · ऋ/ॠ → आर् · ऌ → आल् | — |

  (अर् / अल्: the ṛ-vowels' substitutes come with र्/ल् by 1.1.51 उरण् रपरः; K now, D in
  c03.l02.)

  (a) **ādeśa — सूर्य + उदयः → सूर्योदयः** (owned since v3.c04.l01)

| Step | String | Tool |
|---|---|---|
| 0 | सूर्य + उदयः | — |
| 1 | अ + उ: one substitute for both | 6.1.84 एकः पूर्वपरयोः (D) |
| 2 | the substitute is guṇa: ओ (nearest to उ) | 6.1.87 आद्गुणः; 1.1.2; 1.1.50 |
| 3 | **सूर्योदयः** | — |

  The learner then derives तत्र + एव → तत्रैव by 6.1.88 वृद्धिरेचि, the vṛddhi twin, and reads
  the guṇa that v3.c04 named in गुरवे and left for Volume 4 as the same substitute: गुरु + ए →
  गुरो + ए → गुरवे (6.1.78; the rule that orders this guṇa, 7.3.111 घेर्ङिति, Teacher Notes).

  (b) **āgama and lopa — गच्छ- + लङ् → अगच्छत्** (owned since v3.c03.l03)

| Step | String | Operation | Tool |
|---|---|---|---|
| 0 | गच्छ + ल् (laṅ, with markers ङ् अ removed) | — | (stem गच्छ- given; c03.l02) |
| 1 | ल् → तिप् (3sg P), its प् a marker (1.3.3, 1.3.9): ति | **ādeśa** | 3.4.78, *preview*, c03.l01 |
| 2 | ति → त्: the इ of a ṅ-marked l-affix's P ending is dropped | **lopa** | 3.4.100 इतश्च (ङितः carried from 3.4.99: the second anuvṛtti, labelled) |
| 3 | अट् is added: its ट् says "at the beginning" | **āgama** | 6.4.71 लुङ्लङ्लृङ्क्ष्वडुदात्तः; 1.1.46 आद्यन्तौ टकितौ |
| 4 | अ + गच्छ + त् → **अगच्छत्** | — | — |

  The learner then reads ऐच्छत्, owned since v3.c03.l03, as the same three operations with the
  one difference Volume 3 left for this chapter: इच्छ- begins with a vowel, so the augment is
  आट्, not अट् (6.4.72 आडजादीनाम्, Teacher Notes), and आ + इ → ऐ is vṛddhi, a substitute (6.1.90
  आटश्च, Teacher Notes): ऐ + च्छ + त् → ऐच्छत्.

  **IR-021 corrected in the open.** The 1.x book printed "भू + ति → भवति (where गुण inserts
  व)" as an example of insertion (p.89).
  - guṇa is a substitute (ऊ → ओ); it inserts nothing.
  - The व comes from a second substitute, ओ → अव् (6.1.78, c01.l03).
  - Nothing in भवति is an āgama. The 1.x book's next example, the अट् augment, is a true
    āgama, and the course keeps it (b).
  - The same card's lopa example is corrected too: "रामस् + अपि → रामोऽपि … अ underwent
    lopa (replaced by avagraha ऽ)" (p.89). In Pāṇini's terms nothing is dropped there:
    -अः before अ gives ओ (owned, v3.c04.l02), and then ओ + अ → ओ is one substitute for both
    (6.1.109 एङः पदान्तादति, owned, under 6.1.84). The ऽ is a printing sign that shows where
    the अ stood (v3.c04.l01), not an operation. (Teacher Notes: the ओ comes from रुँ → उ by
    6.1.113 and अ + उ → ओ by 6.1.87; before a voiced consonant the same उ comes by 6.1.114,
    रामो गच्छति.)
  - And its ṭ-marker example, "नुम् augment", is wrong: नुम् is m-marked, so it goes after the
    last vowel, not at the start (1.1.47 मिदचोऽन्त्यात्परः, *preview*, c05.l03). अट् is the
    ṭ-marked augment (b).
  - FACT beside TRADITION: Whitney describes the same change another way, "a prefixed
    a-element which is combined with the other" (§235a), and glosses the words as "guṇa
    *secondary quality*" and "vṛddhi *growth, increment*". Both accounts give ओ from ऊ;
    neither inserts a व.
- **Sūtras (tiers).** **Q:** 1.1.1 वृद्धिरादैच्. **B:** 1.1.2 अदेङ् गुणः; 1.1.3 इको
  गुणवृद्धी. **D:** 1.1.46 आद्यन्तौ टकितौ; 1.1.60 अदर्शनं लोपः; 6.1.84 एकः पूर्वपरयोः; 6.1.87,
  6.1.88 (owned); 3.4.100 इतश्च; 6.4.71 लुङ्लङ्लृङ्क्ष्वडुदात्तः. **K:** 1.1.51 उरण् रपरः.
  Tools added: 8.
- **Model sentences:**
  1. गुणो वृद्धिश्चादेशौ, आगमौ न। (गुणः वृद्धिः च आदेशौ, आगमौ न।) "guṇa and vṛddhi are
     substitutes, not augments."
  2. अगच्छदित्यत्राकार आगमः। (अगच्छत् इति अत्र अकारः आगमः।) "In agacchat the a is an
     augment."
  3. इकारस्य लोपः। (इकारस्य लोपः।) "The i is dropped."
  4. धनस्य वृद्धिर्हानिश्च। (धनस्य वृद्धिः हानिः च।) "The growth and loss of wealth."
     (ordinary senses of the new headwords)
  5. सूर्योदये पक्षिणः कूजन्ति। (सूर्योदये पक्षिणः कूजन्ति।) "At sunrise the birds sing."
     (कूजति, V1; पक्षिणः: R1, labelled, its cells c05.l03; सूर्योदये is one word, a compound,
     in both forms)
  6. कोपस्य हानिः सुखस्य वृद्धिः। (कोपस्य हानिः सुखस्य वृद्धिः।) "Less anger, more
     happiness." (lit. "the loss of anger, the growth of happiness")
- **New headwords (5; 527 → 532):** लोपः lopaḥ m. a "dropping, disappearance" (1.1.60) ·
  आगमः āgamaḥ m. a "arrival; augment; (tradition) authoritative text" (Apte) · वृद्धिः
  vṛddhiḥ f. i "growth, increase" (also the term; Hit अर्थवृद्धिः) · हानिः hāniḥ f. i "loss,
  decrease" (the antonym the learner needs for वृद्धिः) · कोपः kopaḥ m. a "anger" (Hit 22 DCS
  tokens, rule 22; Hit सकोपमाह). (गुणः, owned since V1 as गुण
  "quality", is an upgrade row.)
- **Previewed:** 3.4.78 (c03.l01); 1.1.47 (the m-marked नुम्, c05.l03); the ṅ marker of laṅ (collected on the anubandha card,
  c03.l03). **Deferred:** the anuvṛtti of ङितः (named c02.l03); 6.1.197's accent rule
  (IR-022, second half: corrected in the Teacher Notes of c03.l03; accent itself is
  Volume 5's).
- **Payoff:**
  - अगच्छत्, owned since Volume 3, is now three operations.
  - The Volume 3 sandhi names गुणः and वृद्धिः are revealed as Pāṇini's own definitions.
  - IR-021 is closed.
- **Main risk:** "guṇa = add a". Fix: the substitution ladder. इ → ए, never इ + अ; then the
  learner writes भू → भो → भव् as two substitutions.
- **S0 → next:** +1 day: label 8 operations; +1 week (c02.l04): the guṇa/vṛddhi ladder.

#### v4.c02.l03 — अनुवृत्तिः · "Words Carried Down"

- **lesson_type:** grammar. **review_of:** v4.c02.l02, v4.c02.l01, v3.c01.l03 (the ṇ reflex,
  three columns), v3.c02.l01 (रामेषु vs बालिकासु), v3.c04.l04 (the s → ṣ law named),
  v2.c04 (करोषि, शृणोषि: "waits for Volume 4").
- **The one grammar point:**
  - A sūtra is often incomplete on its own. Words of earlier sūtras continue into it
    (अनुवृत्तिः, "carrying down").
  - Some sūtras are headings (अधिकारः) that stand over a long stretch. 6.4.1 अङ्गस्य stands
    over every rule to the end of Book 7; 8.3.55 अपदान्तस्य मूर्धन्यः over the ṣatva rules.
- **Forms taught (the two internal sandhi rules, as anuvṛtti's material):**

  (a) **ṇatva — राम + टा → रामेण**

| Step | String | Tool |
|---|---|---|
| 0 | राम + टा (आ) | — |
| 1 | टा → इन after an a-stem aṅga | 7.1.12 टाङसिङसामिनात्स्याः (D) — [carried (data file): अतः, 7.1.9] [headings (data file): अङ्गस्य, 6.4.1] |
| 2 | राम + इन → रामेन | 6.1.87 आद्गुणः |
| 3 | र is earlier in the same word; न → ण | 8.4.1 रषाभ्यां नो णः समानपदे |
| 4 | …but ā, m, e stand between र and न: allowed | 8.4.2 अट्कुप्वाङ्नुम्व्यवायेऽपि — [carried (data file): रषाभ्याम्, 8.4.1] [carried (course): नः णः समानपदे, 8.4.1] (further headings: Teacher Notes) |
| 5 | **रामेण** | — |

  The Volume 3 three-column sort is re-run as rule checks:
  - देवेन: no trigger, so 8.4.1 does not apply;
  - रथेन: थ (a dental) intervenes; it is not in अट्, the k-row, the p-row, आङ् or num, so
    8.4.2 does not allow it;
  - रामान्: word-final न, which 8.4.37 पदान्तस्य (D) — [carried (data file): रषाभ्याम्, 8.4.1; न, 8.4.34] (further headings: Teacher Notes) — exempts;
  - कृष्णेन: the trigger ष is there, but ण stands between it and the न, and ण is none of the
    interveners 8.4.2 allows, so no second ण (added from reader-first's sort);
  - पितॄणाम्, मातॄणाम् (owned, the Volume 3 recurring-endings card): ऋ/ॠ also trigger, by the
    vārttika the Kāśikā cites under 8.4.1 (ऋवर्णाच्चेति वक्तव्यम्, with तिसृणाम्, चतसृणाम्;
    Teacher Notes). c03.l03's शृणु refers back to this line.
  **IR-016 corrected:** "in रामेण the इ triggers ण" is false. The र does (8.4.1; र, ष, and ऋ/ॠ
  by the vārttika), and the 1.x card's own 8.4.2 is now read correctly.

  (b) **ṣatva — रामेषु and करोषि**

| Step | रामेषु | करोषि | Tool |
|---|---|---|---|
| 0 | राम + सु (loc. pl. सुप्) | करो- + सि (2sg) | — |
| 1 | राम → रामे before a jhal-initial plural sup | — | 7.3.103 बहुवचने झल्येत् (D) — [carried (data file): अतः, 7.3.101; सुपि, 7.3.102 (*preview*, c06.l03); दीर्घः, 7.3.101 (the file carries it; this rule does not use it)] [headings (data file): अङ्गस्य, 6.4.1] |
| 2 | स follows ए (in इण्) and belongs to an affix | स follows ओ (in इण्) and belongs to an affix | 8.3.59 आदेशप्रत्यययोः — [carried (data file): सः, from 8.3.56, the word that names स् as the target; नुम्विसर्जनीयशर्व्यवाये · अपि, from 8.3.58] [headings (data file): इण्कोः, 8.3.57, and अपदान्तस्य मूर्धन्यः, 8.3.55: two adhikāras, the two this lesson reads of the four the file lists] (further headings: Teacher Notes) |
| 3 | **रामेषु** | **करोषि** | — |

  Contrast: बालिकासु keeps स, because आ is not in इण्. And वाक्षु (वाच् + सु → वाक् + सु by
  8.2.30, display, c04.l01): the trigger is the क्, the "कु" of 8.3.57 इण्कोः (added from reader-first).
  From this lesson on, the bracket line under a quoted sūtra prints the data file's
  anuvṛtti and adhikāra fields (§1.4.3) as the file gives them, with the two exceptions
  §1.4.3 names: headings not yet taught, and a carried word the rule does not use, such as
  7.3.103's दीर्घः. Under 8.4.2 the file carries one
  word, "carried (data file): रषाभ्याम् (8.4.1)"; the rest of what continues is printed on a
  separate course line, "carried (course): नः णः समानपदे (8.4.1)", so that the learner sees
  which words the file records and which the reading supplies (the Kāśikā writes all of them
  out, c06.l02).
- **Sūtras (tiers).** **Q:** 8.4.1 रषाभ्यां नो णः समानपदे. **B:** 6.4.1 अङ्गस्य. **D:** 8.3.59
  आदेशप्रत्यययोः; 8.4.2 अट्कुप्वाङ्नुम्व्यवायेऽपि; 7.1.12 टाङसिङसामिनात्स्याः; 7.3.103 बहुवचने
  झल्येत्; 8.3.55 अपदान्तस्य मूर्धन्यः; 8.3.57 इण्कोः; 8.4.37 पदान्तस्य; 3.4.99 नित्यं ङितः (the
  source of c02.l02's anuvṛtti). Tools added: 10.
- **Model sentences:**
  1. रामेणेत्यत्र रेफो णत्वस्य निमित्तम्। (रामेण इति अत्र रेफः णत्वस्य निमित्तम्।) "In रामेण
     the r is the cause of the ṇ." (रेफः "the letter r" is display; णत्वम्, a term, is
     glossed.)
  2. अङ्गस्येत्यधिकारः। (अङ्गस्य इति अधिकारः।) "'aṅgasya' is a heading."
  3. पूर्वसूत्रात्पदान्यनुवर्तन्ते। (पूर्वसूत्रात् पदानि अनुवर्तन्ते।) "Words continue from
     the previous sūtra." (अनुवर्तन्ते is display, ○, beside the headword अनुवृत्तिः.)
  4. रथेनेति देवेनेति च समानः प्रत्ययः। (रथेन इति देवेन इति च समानः प्रत्ययः।) "In रथेन
     and देवेन the affix is the same."
  5. शृणोषि करोषि च — सकारो मूर्धन्यो भवति। (शृणोषि करोषि च — सकारः मूर्धन्यः भवति।) "In
     śṛṇoṣi and karoṣi the s becomes retroflex." (मूर्धन्य, owned V1.)
  6. णत्वस्य कारणं रेफः। (णत्वस्य कारणम् रेफः।) "The cause of the ṇ is the r."
- **New headwords (5; 532 → 537):** अनुवृत्तिः anuvṛttiḥ f. i "continuation (of a word into
  later rules)" · अधिकारः adhikāraḥ m. a "heading (in a grammar); authority, right" ·
  समानः samānaḥ adj. -ना -नम् "same, equal" (8.4.1 समानपदे) · निमित्तम् nimittam n. a
  "cause, occasion, sign" (Kāśikā nimittanimittinau; Hit तन्निमित्तः) · कारणम् kāraṇam n. a
  "cause, reason" (Hit 21 DCS tokens, rule 22; the everyday word beside the grammarians'
  निमित्तम्).
- **Previewed:** the Kāśikā line of 8.4.1 (c06.l02). **Deferred:** asiddha (8.2.1) and why
  8.4.1 sees forms made earlier (c06.l03).
- **Payoff:** these all now have rules:
  - the ṇ of रामेण (v3.c01.l03: "rule in v4.c02");
  - the ṣ of रामेषु (v3.c02.l01);
  - the ṣ of करोषि and शृणोषि, a Volume 2 pointer kept "Volume 4" for two volumes.
- **Main risk:** anuvṛtti as guesswork. Fix: anuvṛtti is always given, in brackets, by the
  course until Chapter 6. The learner's task is to apply the completed rule, not to find
  the carried words.
- **S0 → next:** +1 day: the ṇ/no-ṇ sort with reasons; +1 week (c03.l01): derive रामेषु.

#### v4.c02.l04 — द्वितीयपरीक्षा · "Chapter 2 Exam"

- **lesson_type:** review. **review_of:** v4.c02.l01–l03, v4.c01.l04.
- **Assembly (§15):**
  - the anatomy of a word (prakṛti · pratyaya · it);
  - the strong/pada/bha box (राजन्);
  - the operations table;
  - the guṇa/vṛddhi ladder;
  - the toolbox card, 43 tools (Chapter 1's 12 + Chapter 2's 31: 13 + 8 + 10).
- **Exam:** the chapter shape (45 min). Ledger stays 537.
- **Spiral:** the Chapter 1 item, नास्ति, derived "according to Pāṇini"; and the Volume 3
  joined line of the Chapter 1 exam (§7.3 Q17), सर्वे भवन्तु सुखिनः… re-read, in which the
  learner names what Chapter 2 has added: the ण of भद्राणि (र before it, आ between: 8.4.1–2)
  and the ः of निरामयाः before the daṇḍa (स् → रुँ → ः: 8.2.66, 8.3.15).
- **Payoff:** the learner derives three owned forms they could not explain before the
  chapter: रामेण, राजभिः and the ṣ of शृणोषि.
- **Main risk:** task E (an unseen anuvṛtti). It is scaffolded: the carried word is to be
  chosen from three offered.
- **S0 → next:** +1 day (c03.l01): derive रामेण; +1 week (c03.l02): the operations table.

---
### 4.3 Chapter 3 — धातुः तिङ्विस्तारश्च · Roots & the Full Verb

**Goals.**
- Take any owned finite verb back to its root as the Dhātupāṭha lists it.
- Say from the root's marker which pada it takes.
- Classify every owned verb into its present class by its class sign, and form its present
  system.
- Explain strong and weak stems by the p-marker.
- Use the perfect (3rd persons) and the future. Recognise the other four lakāras.
- Assemble the √भू table of the classical tense-moods, ten rows (the 1.x six-lakāra table
  restored and completed; the tradition's own count of ten l-affixes, with leṭ and with liṅ
  once, is told apart in c03.l05).

**Grammar inventory (exact).**
- **The root and its pada.** Dhātu: 1.3.1. The l-affixes: 3.2.123, 3.4.77–78.
  - The pada rules: 1.3.12, 1.3.72, 1.3.78, 1.4.99–100. Person and number: 1.4.101–102,
    1.4.108, 1.4.22. 3.4.79 (the Ā -ए).
  - Dhātupāṭha entries, cited as the LSK prints them (`varlghku.htm`): भू सत्तायाम्; पठ
    व्यक्तायां वाचि; रुच दीप्तावभिप्रीतौ च; डुकृञ् करणे; डुपचष् पाके; णीञ् प्रापणे; गमॢ गतौ;
    श्रु श्रवणे; तुद व्यथने; प्रच्छ ज्ञीप्सायाम्; कृती छेदने; ञिभी भये. The it-vowels' accents
    are TRADITION, stated per root.
- **The class signs:**
  - 3.4.113 (sārvadhātuka); 3.1.68 शप्; 2.4.72 (luk, class 2); 2.4.75 (ślu, class 3); 3.1.69
    श्यन्; 3.1.73 श्नु (3.1.74 for श्रु); 3.1.77 श; 3.1.78 श्नम्; 3.1.79 उ; 3.1.81 श्ना;
    3.1.25 णिच् (class 10).
  - Guṇa before them: 7.3.84; 7.3.86 for a light penultimate.
  - Substitute stems: 7.3.77, 7.3.78. स्वपिति: 7.2.76.
  - Whitney §§602–607 (the classes), 734 (class 1), 752 (class 6), 759 (class 4).
- **Strong and weak:** 1.2.4, 1.1.5. 6.4.111 (अस्), 6.4.110 (कृ), 6.1.16 (प्रच्छ्), 7.1.3
  झोऽन्तः. Whitney §§604, 612 ff.
- **The perfect.** 3.2.115 (IR-019); 3.4.82; 6.1.8; 7.4.59–60, 7.4.62, 7.4.66; 8.4.54;
  7.2.115–116; 7.1.34; 6.1.15, 6.1.17, 1.2.5, 1.2.6 (बभूव); 3.4.84 (आह); the periphrastic
  perfect 3.1.35, 3.1.40 (K). Whitney §§780–801, 821a–b (§822 concerns the Brāhmaṇas and is
  not cited).
- **The future.** 3.3.13, 3.1.33, 3.4.114, 7.2.35, 7.2.70, 7.2.58. Whitney §§931–939, 948.
- **The card of the other four:**
  - the periphrastic future: 3.3.15, 2.4.85; Whitney §§942–949;
  - the conditional: 3.3.139; Whitney §940;
  - the aorist: 3.1.43–44; Whitney §§824–910, 826 (frequency), 927;
  - the benedictive: 3.3.173, 3.4.116 (Teacher Notes: 3.4.104 किदाशिषि, why भूयात् has no
    guṇa); Whitney §§921–925.
- **Frequency evidence (DCS, finite verbs, counted 2026-11).**
  - **Hitopadeśa:** present indicative 1,368; imperative 337; Tense=Past 271 (264 indicative
    + 4 jussive + 3 precative: about 260 perfects — āha 112, uvāca 63, ūcuḥ 13 (+1 ūcur),
    babhūva 6 … — 9 aorists, 5 indicative and 4 prohibitive, 3 bhaiṣīḥ and 1 kṛthāḥ; and the
    3 precatives bhūyāt ×2, bhūyān); optative 205; imperfect 99; future 73 (§1.3.1).
  - **Viṣṇupurāṇa:** Tense=Past indicative 2,643 (of them 172 aorists, so 2,471 perfects,
    158 of them periphrastic); present 2,045; imperfect 637; future 532; conditional 5.
  This is why the perfect is productive in the 3rd person, the future in full, and the other
  four are ◐. Whitney's own statement is the hedge printed with it: in the later language the
  perfect is "equivalent with the imperfect … on the whole less common than the imperfect,
  although the preferences of different authors are diverse" (§821b); the DCS shows both
  sides (Hitopadeśa: imperfect 99 against about 260 perfects, most of them आह and उवाच;
  Viṣṇupurāṇa: perfect 17.4% of verbs against 4.5% imperfect; §1.3.1, row 4).
- **1.x errata added at synthesis (from system-first; re-read in the 1.x PDF with
  pdftotext, pp. 74–76 and 127–128):** laṅ is labelled "Imperfect (recent past)" (p. 74 ff.)
  and "IMPERFECT (past habitual)" (pp. 127–128); it is the past *not of today* (3.2.111
  अनद्यतने लङ्; Kāśikā: अविद्यमानाद्यतने भूतेऽर्थे वर्तमानाद्धातोर्लङ् प्रत्ययो भवति). The
  ātmanepada is glossed "Action benefits oneself" for every verb; that is the sense only of
  ubhayapada roots (1.3.72), not of Ā-only roots such as लभते or रोचते (1.3.12).

**Volume 3 §6 rows carried:**
- **Roots and the ten present classes.**
  - Stem formation with the grades (शृणोति, गृह्णाति, स्वपिति, तिष्ठति, यच्छति): l02–l03.
  - The six lakāras outside the present system, with लिट् = परोक्षे (IR-019) and मा + aorist:
    l04–l05.
  - The √भू six-lakāra table: l06.
- **कृ as ubhayapadī (IR-020):** l01.
- **Tracker row 7** (how stems are built): l02–l03.
- **R4:** l03.

**1.x assets carried:**
- the 10 lakāras + forms (pp.74–75): l05 card and l06;
- the √भू six-lakāra table (pp.127–128): l06, restored and completed to ten;
- the गच्छ future (pp.37–43): l05 (गमिष्यति).

**Exam shape (l06, one 45-minute sitting).**
- **A** — the √भू table. Fill the 3rd-person cells of the table's six productive rows from
  memory or rule; the four ◐ rows are printed filled, and the learner names each one's lakāra
  and use (no credit for producing a ◐ cell; §4.3, c03.l06 main risk) (8 min). Then read
  3.2.111 अनद्यतने लङ् cold in the case code, with the bracket line printing both data-file fields as §1.4.3 sets them:
  [carried (data file): कृत्, 3.1.93 (*preview*, c04.l01)] [headings (data file): प्रत्ययः, 3.1.1;
  परश्च, 3.1.2; धातोः, 3.1.91; भूते, 3.2.84 (not a tool; printed by name for this task, as the
  heading the reading needs)] (further headings: Teacher Notes), and correct the 1.x labels "recent past" and "past habitual" (4 min;
  adopted from system-first).
- **B** — class detective. Name the class, class sign and present stem of 12 owned verbs,
  three of them traps: गच्छति (class 1 with 7.3.77), पृच्छति (class 6), जानाति (class 9, with
  ज्ञा → जा by 7.3.79, on c03.l02's substitute-stem card) (8 min).
- **C** — strong/weak: fill 8 cells of शृणोति, करोति, अस्ति, ब्रवीति and say why, "according
  to Pāṇini" (7 min).
- **D** — read an unseen passage, the Vīravara dialogue of Hit 3 (Text N8, §5.7), with its glosses,
  and answer 6 questions (10 min).
- **E** — production (8 min): tell an episode of the serial in the past with four perfects,
  then say what each character will do (four futures). Written, then spoken.

#### v4.c03.l01 — लट् · "From ल् to -ति: the Verb's Ending"

- **lesson_type:** grammar. **Station 0:** v4.c02.l04's +1 day; v4.c02.l03's +1 week.
  **review_of:**
  - v4.c02.l04;
  - v3.c03.l01–l02 (the present, both padas; T6);
  - v3.c03.l02 (रोचते, the "second family");
  - v2.c04.l01 (the 10-verb bank).
- **The one grammar point:**
  - Every finite verb begins as a root (धातुः) plus an abstract affix ल्, whose name (लट्
    present, लङ् imperfect …) says the time or mood (3.2.123).
  - The ल् is replaced by one of eighteen endings (3.4.77–78).
  - Which set, parasmaipada or ātmanepada, is decided by the root's own marker in the
    Dhātupāṭha (1.3.12, 1.3.72, 1.3.78). Which person and number is decided by the sentence
    (1.4.101–108).
- **Forms taught:**

  **The eighteen (3.4.78), as the learner reads them:**

| | 3rd (प्रथमः) | 2nd (मध्यमः) | 1st (उत्तमः) |
|---|---|---|---|
| P sg. · du. · pl. | तिप् तस् झि | सिप् थस् थ | मिप् वस् मस् |
| Ā sg. · du. · pl. | त आताम् झ | थास् आथाम् ध्वम् | इट् वहि महिङ् |

  The learner maps each one onto T6/T7 (owned since Volume 3), and the owned optative भवेत् onto
  the same set (Teacher Notes: 7.2.80 अतो येयः). One pada rule beyond the three taught stays in
  Teacher Notes: 1.3.17 नेर्विशः (न्यविशत, Ā after नि).
  - The markers drop: तिप् → ति, मिप् → मि, इट् → इ, महिङ् → महि. तस्, थस्, वस्, मस् and
    आताम्, थास्, आथाम्, ध्वम् keep their final consonant (1.3.4, Teacher Notes; c02.l01's line).
  - In laṭ the Ā endings take -ए by 3.4.79, because laṭ is ṭ-marked: त → ते, इ → ए.
  - झि and झ become -अन्ति, -अन्ते (Teacher Notes here: 7.1.3 झोऽन्तः, which c03.l03 prints as D).

  **The root's marker decides the pada** (the accent names in the Marker column print only if the c03 fact base cites an accented Dhātupāṭha under a REFERENCES key; otherwise the column reads "(accent not shown)" and cites the LSK's grouping, §7.3 Q1):

| Dhātupāṭha entry (LSK) | Marker | Rule | Pada | Owned form |
|---|---|---|---|---|
| पठ व्यक्तायां वाचि | अ (udātta: no Ā trigger) | 1.3.78 शेषात् कर्तरि परस्मैपदम् | P | पठति |
| रुच दीप्तावभिप्रीतौ च | अ (anudātta) | 1.3.12 अनुदात्तङित आत्मनेपदम् | Ā | रोचते |
| डुकृञ् करणे | ञ् | 1.3.72 स्वरितञितः कर्त्रभिप्राये क्रियाफले | both: Ā when the fruit goes to the doer | करोति · कुरुते |
| डुपचष् पाके | अ (svarita) | 1.3.72 | both | पचति · पचते |

  **IR-020 corrected in the open.** The 1.x card listed कृ as "parasmaipada only" and as
  "ubhayapadī" (pp.75–76). कृ is ubhayapadī, by its ञ् (1.3.72; Kāśikā example कुरुते).
  **The second 1.x erratum of this lesson:** "Ātmanepada: action benefits oneself" holds only
  where 1.3.72 applies (कुरुते, पचते, यजते); रोचते and लभते are ātmanepada by 1.3.12 with no
  such sense. The 1.x line is quoted and corrected.
- **Sūtras (tiers).** **Q:** 1.3.12 अनुदात्तङित आत्मनेपदम्; 1.3.72 स्वरितञितः कर्त्रभिप्राये
  क्रियाफले. **B:** 1.3.1 भूवादयो धातवः; 3.2.123 वर्तमाने लट्; 3.4.77 लस्य; 3.4.78
  तिप्तस्झिसिप्थस्थमिब्वस्मस् तातांझथासाथांध्वमिड्वहिमहिङ्; 1.3.78 शेषात् कर्तरि परस्मैपदम्; 3.1.91
  धातोः (the heading over the lakāra rule); 1.4.99 लः परस्मैपदम्; 1.4.101 तिङस्त्रीणि त्रीणि
  प्रथममध्यमोत्तमाः; 1.4.102 तान्येकवचनद्विवचनबहुवचनान्येकशः; 1.4.108 शेषे प्रथमः; 1.4.22
  द्व्येकयोर्द्विवचनैकवचने. **D:** 1.4.100 तङानावात्मनेपदम्; 3.4.79 टित आत्मनेपदानां टेरे.
  Tools added: 15, tied with c04.l03 for the most of any lesson; eleven of them are the B steps the volume's last
  task needs, and they are drilled as one chain ("ल् → which set → which person → which
  number"), not as eleven facts. The 18 endings themselves are owned (T6/T7).
- **The derivation: पठ (Dhātupāṭha) → पठति**

| Step | String | Tool |
|---|---|---|
| 0 | पठ "speak aloud" | the Dhātupāṭha entry; 1.3.1 (it is a dhātu) |
| 1 | पठ् (its final अ is a marker) | 1.3.2, 1.3.9 |
| 2 | present time: पठ् + लट् | 3.2.123 वर्तमाने लट् |
| 3 | पठ् + ल् (अ and ट् are markers) | 1.3.2, 1.3.3, 1.3.9 |
| 4 | ल् is to be replaced by one of the eighteen | 3.4.77 लस्य, 3.4.78 |
| 5 | no Ā marker on पठ्: the P set, the first nine | 1.3.78; 1.4.99 (1.4.100 takes the last nine out) |
| 6 | the doer is neither "you" nor "I": 3rd person; one doer: singular → तिप् | 1.4.108; 1.4.22 |
| 7 | पठ् + ति (प् marker) | 1.3.3, 1.3.9 |
| 8 | पठ् + **अ** + ति → **पठति** | the class sign अ, *preview*, c03.l02 |

  **The learner derives रुच् → रोचते.** The anudātta marker gives Ā (1.3.12) → त (3sg Ā) → ते
  (3.4.79). The vowel ओ comes from guṇa of the light penultimate (7.3.86, given as a
  labelled step; c03.l02).
- **Model sentences:**
  1. पठेति धातुः, पठतीति तिङन्तं पदम्। (पठ इति धातुः, पठति इति तिङन्तम् पदम्।) "paṭh is
     the root; paṭhati is a tiṅ-final word."
  2. माता पुत्राय भोजनं पचति, स्वस्मै च पचते। (माता पुत्राय भोजनम् पचति, स्वस्मै च पचते।)
     "Mother cooks food for her son, and cooks for herself." (the 1.3.72 contrast)
  3. ऋषयो देवान्यजन्ति। (ऋषयः देवान् यजन्ति।) "The seers worship the gods."
  4. तवाभिप्रायः कः? (तव अभिप्रायः कः?) "What is your intention?"
  5. कुरुत इत्यात्मनेपदं, करोतीति परस्मैपदम्। (कुरुते इति आत्मनेपदम्, करोति इति
     परस्मैपदम्।) "kurute is ātmanepada, karoti parasmaipada."
  6. सिंहाद्भयं जायते। (सिंहात् भयम् जायते।) "Fear arises from the lion." (जायते, the owned
     Ā verb, beside रोचते: both Ā by 1.3.12)
- **New headwords (5; 537 → 542):**
  - धातुः dhātuḥ m. u "root (of a verb); element; metal" — the chapter's name;
  - अभिप्रायः abhiprāyaḥ m. a "intention, purpose" — 1.3.72 कर्त्रभिप्राये; Panc 4
    निजाभिप्रायम्;
  - पचति pacati "cooks" (ubhaya: पचते) — the Kāśikā's model verb;
  - यजति yajati "worships, sacrifices" (ubhaya: यजते) — the Kāśikā's 1.3.72 example; its
    perfect इयाज, ईजे comes in c03.l04 (◐);
  - भयम् bhayam n. a "fear, danger" (+ abl. of the source) — Hit 43 DCS tokens (rule 22); मा
    भैषीः (c03.l05) is its verb.
- **Previewed:**
  - the class sign अ (शप्, c03.l02);
  - 7.3.86 (c03.l02);
  - the passive and impersonal uses of the same ल्, kartari vs karmaṇi (3.4.69, c05.l01).
- **Deferred:** the Ā lakāras' other cells, by Δ, are already owned from Volume 3. The
  accent marks of the Dhātupāṭha are Volume 5's (one TRADITION line).
- **Payoff:**
  - The Volume 3 "second family of endings" (रोचते, owned since v2.c05.l03) is Pāṇini's
    ātmanepada, and the dictionary records which verbs take it.
  - कुरुते and करोति are one root.
- **Main risk:** the 18 endings memorised as a new table. Fix: they are mapped onto T6/T7.
  The new content is the markers, not the endings.
- **§17 (serial, c03 episode 1):** the crocodile's wife and her demand, told in the
  present. Serial text, our retelling: सा वदति — "तस्य हृदयं मह्यं प्रयच्छ।" (हृदयम् "heart" is
  glossed here; it is headworded in c03.l05, where N2 needs it.)
- **S0 → next:** +1 day: P or Ā for 10 owned verbs from their Dhātupāṭha entries; +1 week
  (c03.l03): derive पठति to step 7.

#### v4.c03.l02 — शप् · "The Class Sign: Ten Families of Present Stems"

- **lesson_type:** grammar. **review_of:** v4.c03.l01, v4.c02.l02 (guṇa as substitute),
  v4.c01.l03 (6.1.78), v3.c01.l02 (तिष्ठति: "why it is तिष्ठ- is v4.c03"), v2.c04.l01.
- **The one grammar point:**
  - Between the root and a sārvadhātuka ending (one marked with ś, or a tiṅ; 3.4.113), a
    class sign (विकरणः) is inserted. For the root's class it is शप् (3.1.68) or one of its
    replacements, and it gives the present stem.
  - Before a pit, non-ṅit sign, a root-final इ उ ऋ takes guṇa (7.3.84).
- **Forms taught (the ten classes, each with owned verbs):**

| Class (by first root) | Sign | Rule (K) | Owned verbs | Stem |
|---|---|---|---|---|
| 1 भ्वादि | शप् → अ | 3.1.68 | भवति, नयति, वदति, जयति, तरति, हरति, चरति | guṇa + अ |
| 2 अदादि | (none: शप् deleted) | 2.4.72 | अस्ति, याति, स्वपिति; ब्रवीति, हन्ति, एति (c03.l03) | root itself |
| 3 जुहोत्यादि | (none: शप् → श्लु, root doubled) | 2.4.75 | ददाति | reduplicated root |
| 4 दिवादि | श्यन् → य | 3.1.69 | नृत्यति, मन्यते, जायते | root + य |
| 5 स्वादि | श्नु → नु | 3.1.73 (3.1.74 for श्रु) | आप्नोति; शृणोति by its sign only (the Dhātupāṭha lists श्रु श्रवणे among the bhvādi roots; 3.1.74 gives it श्नु in place of शप्) | root + नु/नो |
| 6 तुदादि | श → अ | 3.1.77 | पृच्छति, क्षिपति, मुञ्चति, कृन्तति, लिखति, इच्छति | root (no guṇa) + अ |
| 7 रुधादि | श्नम् → न inside the root | 3.1.78 | युनक्ति (c03.l03) | root with -न-/-न्- |
| 8 तनादि | उ | 3.1.79 | करोति | root + उ/ओ |
| 9 क्र्यादि | श्ना → ना | 3.1.81 | गृह्णाति, जानाति | root + ना/नी |
| 10 चुरादि | णिच् → अय (with शप्) | 3.1.25 | कथयति, चिन्तयति, भक्षयति | root + अय |

  **TRADITION and FACT side by side.** Pāṇini counts ten classes. Whitney (§607) treats the
  tenth as a causative-type derivative "not limited to the present-system". Both are
  printed; the learner is assessed on Pāṇini's count only in the form "According to
  Pāṇini…".

  **Card — the substitute stems (K: 7.3.77, 7.3.78, 7.3.79; the first two are D in the
  tier line):** the roots whose present stem replaces the root before the class sign.

| Root | Stem | Rule | Owned since |
|---|---|---|---|
| गम् | गच्छ | 7.3.77 इषुगमियमां छः (+ 6.1.73 छे च [ह्रस्वस्य तुक्, carried from 6.1.71], Teacher Notes) | V2 |
| इष् | इच्छ | 7.3.77 | V2 |
| यम् (with प्र) | यच्छ | 7.3.77 | V3 प्रयच्छति |
| पा "drink" | पिब | 7.3.78 पाघ्राध्मास्थाम्नादाण्दृश्यर्त्तिसर्त्तिशदसदां पिबजिघ्रधमतिष्ठमनयच्छपश्यर्च्छधौशीयसीदाः | V2 पिबति |
| स्था | तिष्ठ | 7.3.78 | V3 तिष्ठति; उत्तिष्ठति "rises" (this lesson) |
| दृश् | पश्य | 7.3.78 | V2 पश्यति |
| सद् | सीद | 7.3.78 | this lesson (सीदति) |
| ज्ञा | जा (+ ना: जानाति) | 7.3.79 ज्ञाजनोर्जा (K; also जायते from जन्) | V2 जानाति |

  स्वपिति gets its -इ-, the augment इट्, by 7.2.76 रुदादिभ्यः सार्वधातुके (D; also रोदिति,
  c05.l04): the Kāśikā, "rudādibhyaḥ uttarasya valādeḥ sārvadhātukasya iḍāgamo bhavati".
  §12: this augment इट् is not the 1sg Ā ending इट् of c03.l01 (3.4.78); the same augment
  returns before the future's स्य in c03.l05.
- **Sūtras (tiers).** **Q:** none new (the lesson's four rules are B). **B:** 3.4.113
  तिङ्शित्सार्वधातुकम्; 3.1.68 कर्तरि शप्; 1.3.8 लशक्वतद्धिते (the श् of शप् is a marker); 7.3.84
  सार्वधातुकार्धधातुकयोः. **D:** 1.1.51 उरण् रपरः; 1.1.52 अलोऽन्त्यस्य; 7.3.86 पुगन्तलघूपधस्य
  च; 7.2.76 रुदादिभ्यः सार्वधातुके; 7.3.77 इषुगमियमां छः; 7.3.78 (the substitute stems). **K:**
  2.4.72, 2.4.75, 3.1.69, 3.1.73, 3.1.77, 3.1.78, 3.1.79, 3.1.81, 3.1.25 (the class signs);
  7.3.79 ज्ञाजनोर्जा (the substitute-stem card; the Chapter 3 exam's जानाति trap needs it).
  Tools added: 10.
- **The derivation: नी → नयति** (owned since v3.c01.l01)

| Step | String | Tool |
|---|---|---|
| 0 | णीञ् प्रापणे → नी (ण् → न्: 6.1.65, Teacher Notes; ञ् marker: ubhaya, 1.3.72) | 1.3.1; 1.3.3, 1.3.9 |
| 1 | नी + लट् → नी + ल् → नी + तिप् → नी + ति | c03.l01's steps 2–7 |
| 2 | ति is sārvadhātuka (a tiṅ) | 3.4.113 |
| 3 | the class sign: नी + शप् + ति | 3.1.68 कर्तरि शप् |
| 4 | श् and प् are markers: नी + अ + ति | 1.3.8, 1.3.3, 1.3.9 |
| 5 | नी is the aṅga before अ; its final ई → guṇa ए | 7.3.84; 1.1.3; 1.1.52; 1.1.50 |
| 6 | ने + अ + ति → नय् + अ + ति | 6.1.78 एचोऽयवायावः |
| 7 | **नयति** | — |

  **The learner derives स्मृ → स्मरति** (ṛ → guṇa अर्, 1.1.51 उरण् रपरः) and **जि → जयति**.
  Both are the same steps as नयति. The learner is told that one other owned verb (not named)
  has exactly these steps too: the volume's last task (§1.5, the भवति thread).
- **Model sentences:**
  1. भ्वादिगणे शबिति विकरणः। (भू-आदि-गणे शप् इति विकरणः।) "In the bhū class the class sign
     is śap." (विकरणः, a term, is display, ○; rule 20.)
  2. वीरो नदीं तरति। (वीरः नदीम् तरति।) "The hero crosses the river."
  3. सत्यं जयति। (सत्यम् जयति।) "Truth prevails." (the classical form, beside the Muṇḍaka's
     जयते: v3.c03.l02's honesty line; Teacher Notes: 1.3.19 विपराभ्यां जेः gives Ā only after वि
     and परा, so it does not license the bare जयते)
  4. दुःखेन मनः सीदति। (दुःखेन मनः सीदति।) "The mind sinks with sorrow."
  5. तिष्ठतीत्यत्र स्थेति धातुः। (तिष्ठति इति अत्र स्था इति धातुः।) "In tiṣṭhati the root
     is sthā."
  6. सूर्योदये मृगा उत्तिष्ठन्ति, वने चरन्ति च। (सूर्योदये मृगाः उत्तिष्ठन्ति, वने चरन्ति च।)
     "At sunrise the deer get up and graze in the forest."
- **New headwords (6; 542 → 548):** जयति jayati "conquers, prevails" (class 1) · तरति tarati
  "crosses" (class 1; Kāśikā on 7.3.84 तरति) · हरति harati "takes away, carries" (class 1;
  हर, V1, is its agent-noun relative) · सीदति sīdati "sits; sinks, despairs" (class 1, stem by 7.3.78) · उत्तिष्ठति uttiṣṭhati "rises, gets
  up" (उद् + स्था, stem by 7.3.78; Volume 3 display, now a headword: Hit 21 DCS tokens, rule
  22) · चरति carati "moves, wanders; grazes" (class 1; Hit 18 tokens; N3a's चरन्, c04.l01).
  Upgrade: गणः (गण, V1).
- **Previewed:** the p of शप् and why class 6 has no guṇa (c03.l03). **Deferred:** class-3
  reduplication rules (Teacher Notes; the reduplication tools come in c03.l04); class 7 in
  full (c03.l03, one verb).
- **Payoff:** tracker row 7 closed.
  - तिष्ठति, पश्यति, पिबति, गच्छति, इच्छति, प्रयच्छति are no longer "irregular". Two sūtras make
    all six: 7.3.77 three (गच्छ, इच्छ, यच्छ) and 7.3.78 three (तिष्ठ, पश्य, पिब), and सीदति
    besides.
  - "Why it is तिष्ठ- is v4.c03" (v3.c01.l02) is kept.
  - The ten classes, which Volume 3 left as given stems, are on one page with the learner's
    own verbs in nine of them.
- **Main risk:** the class signs memorised as ten facts. Fix: the classes are sorted by what
  the learner sees (a thematic -अ- stem: 1, 4, 6, 10; an athematic stem: 2, 3, 5, 7, 8, 9).
  The rule numbers stay on the card.
- **§17 (serial, ep. 2):** the crocodile's answer (मा मैवं वद, our retelling).
- **S0 → next:** +1 day: classify 10 owned verbs; +1 week (c03.l04): derive नयति unaided.

#### v4.c03.l03 — पित् ङित् · "Strong and Weak: What the p Marker Does"

- **lesson_type:** grammar. **review_of:** v4.c03.l02, v4.c03.l01, v3.c03.l01 (अस्, कृ
  learned whole), v3.c03.l01–l04 (R4 cells), v2.c04.l01 (शृणोति).
- **The one grammar point:**
  - A sārvadhātuka affix without the marker p counts as ṅ-marked (1.2.4), and before a k- or
    ṅ-marked affix guṇa and vṛddhi do not apply (1.1.5).
  - So the singular P endings तिप् सिप् मिप्, which carry p, give a strong (guṇa) stem, and
    every other ending gives a weak one.
  - The same marker explains why class 6 (श, with no p) has no guṇa at all.
- **Forms taught:**

| Verb | Before तिप् (pit → strong) | Before तस् (apit → ṅit → weak) | Before झि → -अन्ति (weak) | Rule beyond 1.2.4 + 1.1.5 |
|---|---|---|---|---|
| शृणोति (sign श्नु; a bhvādi root, 3.1.74) | शृणोति | शृणुतः | शृण्वन्ति — उ + अ → व् by 6.4.87 हुश्नुवोः सार्वधातुके, not uvaṅ by 6.4.77 (Teacher Notes) | 3.1.74 श्रुवः शृ च |
| करोति (class 8) | करोति | कुरुतः | कुर्वन्ति | 6.4.110 अत उत् सार्वधातुके (Kāśikā on 1.2.4: कुरुतः, कुर्वन्ति) |
| अस्ति (class 2) | अस्ति | स्तः | सन्ति | 6.4.111 श्नसोरल्लोपः |
| ब्रवीति (class 2) | ब्रवीति | ब्रूतः | ब्रुवन्ति | (-ई- of ब्रवीति: 7.3.93, Teacher Notes) |
| हन्ति (class 2) | हन्ति | हतः | घ्नन्ति | (Teacher Notes) |
| एति (class 2) | एति | इतः | यन्ति | (यन्ति: 6.4.81 इणो यण्, Teacher Notes) |
| युनक्ति (class 7) | युनक्ति | युङ्क्तः | युञ्जन्ति | 3.1.78; 6.4.111 |
| गृह्णाति (class 9) | गृह्णाति | गृह्णीतः | गृह्णन्ति | 6.4.113 ई हल्यघोः (K) |
| पृच्छति (class 6) | पृच्छति (श is apit: no guṇa; samprasāraṇa) | पृच्छतः | पृच्छन्ति | 6.1.16 ग्रहिज्या…पृच्छति… ङिति च |

  Whitney §§611–732 (classes 2, 3, 5, 7, 8, 9) for every cell. The laṅ and loṭ of the same
  verbs follow the same split:
  - laṅ strong in the 3sg/2sg/1sg only: अशृणोत् / अशृणुताम् / अशृण्वन्;
  - loṭ strong in the 3sg and in all the 1st persons: शृणोतु; शृणवानि, शृणवाव, शृणवाम (the
    1st-person endings take the augment आट्, which is pit: 3.4.92, Teacher Notes; the -नि of
    शृणवानि is 3.4.89 मेर्निः, and the ātmanepada loṭ replacements, which this lesson does not
    print, are 3.4.90 आमेतः, 3.4.91 सवाभ्यां वामौ, 3.4.93 एत ऐ, all Teacher Notes, beyond the owned
    3.4.85–86); weak
    elsewhere: शृणुताम्, शृण्वन्तु, and the 2sg शृणु, because its ending हि is apit (3.4.87,
    Teacher Notes) and is then dropped after the उ of नु (6.4.106 उतश्च प्रत्ययादसंयोगपूर्वात्,
    LSK VLk 505, Teacher Notes);
  - the 2sg imperatives शृणु and देहि as listed (owned whole), and गृहाण as a listed form of
    गृह्णाति (after a consonant-final class-9 root, श्ना becomes -आन before हि and the हि
    drops: 3.1.83 हलः श्नः शानज्झौ, 6.4.105, Teacher Notes); N3b, the Chapter 4 exam's passage,
    has it.
- **Sūtras (tiers).** **Q:** 1.2.4 सार्वधातुकमपित्; 1.1.5 क्ङिति च. **D:** 3.1.74 श्रुवः शृ च;
  7.1.3 झोऽन्तः; 6.4.110 अत उत् सार्वधातुके; 6.4.111 श्नसोरल्लोपः; 6.1.16
  ग्रहिज्यावयिव्यधिवष्टिविचतिवृश्चतिपृच्छतिभृज्जतीनां ङिति च. **K:** 6.4.113 ई हल्यघोः. Tools
  added: 7.
- **The derivation: शृणोति and शृण्वन्ति**

| Step | शृणोति | शृण्वन्ति | Tool |
|---|---|---|---|
| 0 | श्रु + ति (तिप्) | श्रु + अन्ति (झि) | c03.l01; 7.1.3 |
| 1 | श्रु + श्नु: class sign in place of शप्, and श्रु → शृ | the same | 3.1.74 (श्नुः carried from 3.1.73; श्रु is a bhvādi root) |
| 2 | शृ + नु → शृणु (ṇ after ṛ: the vārttika on 8.4.1, met in c02.l03 with पितॄणाम्; Teacher Notes) | the same | 8.4.1 + vārttika |
| 3 | तिप् has p: not ṅit → guṇa of the उ of नु: णो | झि has no p: ṅit (1.2.4) → **no** guṇa (1.1.5) | 7.3.84 vs 1.2.4 + 1.1.5 |
| 4 | **शृणोति** | शृणु + अन्ति → **शृण्वन्ति** | 6.4.87 हुश्नुवोः सार्वधातुके: yaṇ, not uvaṅ by 6.4.77 (LSK VLk 503; Teacher Notes) |

  **IR-022 corrected in the open.** The 1.x card read "ङ् blocks guṇa; क् blocks guṇa +
  vṛddhi" (pp.93, 95). 1.1.5 क्ङिति च blocks both guṇa and vṛddhi before both markers
  (Kāśikā: "te na bhavataḥ"). The card's accent claim for ñit/nit affixes is also wrong:
  6.1.197 gives initial udātta, not final. That correction prints in Teacher Notes only
  (accent is Volume 5's).

  **The anubandha card (K, collected here):** every marker met so far, with what it does; the
  last three rows (ṇ/ñ, k, ḍ) are ○ previews, filled in by the lessons named in their last column.

| Marker | On | Effect | Rule | Lesson |
|---|---|---|---|---|
| ण् क् … (the 14) | the Māheśvara sūtras | close a pratyāhāra | 1.1.71 | c01.l01 |
| उँ (nasal vowel) | सुँ | marker | 1.3.2 | c02.l01 |
| ज्, ट् · श्, ङ् (initial) | जस्, टा · शस्, ङे, ङसिँ, ङस्, ङि | marker | Teacher Notes · 1.3.8 | c02.l01 |
| स्, म् (final, in an ending) | भिस्, जस्, अम्, आम्; तस्, थास्, ध्वम् | **not** a marker | Teacher Notes | c02.l01, c03.l01 |
| ट् | अट् (augment) | at the beginning | 1.1.46 | c02.l02 |
| ङ् | लङ् | ṅit l-affix: इ of the P ending dropped (3.4.100) | 3.4.99–100 | c02.l02 |
| ट् | लट् | Ā ṭi → ए | 3.4.79 | c03.l01 |
| ञ् · accented अ | roots | pada | 1.3.12, 1.3.72 | c03.l01 |
| श् | शप्, श, श्नु … | sārvadhātuka | 3.4.113 | c03.l02 |
| प् (present / absent) | endings, class signs | strong / weak | 1.2.4, 1.1.5 | c03.l03 |
| ण्, ञ् | णल्, णिच्, ञ-taddhitas | vṛddhi | 7.2.115–117 | c03.l04, c05.l02, c04.l03 |
| क् | क्त, क्त्वा, यक् | no guṇa | 1.1.5 | c04.l01, c05.l01 |
| ड् | ड (upapada), डा (luṭ) | ṭi deleted | 6.4.143 | c04.l04, c03.l05 card |

  **The evidence for the card (display ○; adopted from reader-first's kṛt table):** one root,
  five kṛt affixes, three grades; the markers alone predict which.

| Affix (marker) | Form of कृ | Grade | Why | Owned? |
|---|---|---|---|---|
| क्त (क्) | कृतः | none | k-marked: 1.1.5 blocks guṇa | V1 कृत |
| तृच् (च् only) | कर्ता | guṇa | no k, ṅ, ñ, ṇ: 7.3.84 applies | V1–V3 |
| ल्युट् (ल्, ट्) | करणम् | guṇa | the same | V3 (the kāraka name) |
| ण्वुल् (ण्, ल्) | कारकः | vṛddhi | ṇ-marked: 7.2.115 | V3 (कारकाणि) |
| घञ् (घ्, ञ्) | कारः | vṛddhi | ñ-marked: 7.2.115 | display |

  The affix names are labels (rule 20); none of the five is derived here, and no kṛt sūtra
  is quoted: the sūtra that gives ण्वुल् and तृच् (3.1.133) is the unseen sūtra of the volume
  exam (c06.l04, task B).
- **Model sentences:**
  1. वयं गुरोर्वचनं शृणुमः। (वयम् गुरोः वचनम् शृणुमः।) "We listen to the teacher's words."
  2. ते छात्राः सम्यक्कुर्वन्ति। (ते छात्राः सम्यक् कुर्वन्ति।) "Those students do it
     properly."
  3. कुत्र स्तस्तौ? — गृहे स्तः। (कुत्र स्तः तौ? — गृहे स्तः।) "Where are those two? — At
     home."
  4. गुरुर्ब्रवीति, शिष्या ब्रुवन्ति। (गुरुः ब्रवीति, शिष्याः ब्रुवन्ति।) "The teacher says;
     the students say."
  5. व्याधो मृगान्हन्ति। (व्याधः मृगान् हन्ति।) "The hunter kills the deer."
  6. ते ग्रामं यन्ति। (ते ग्रामम् यन्ति।) "They go to the village."
- **New headwords (4; 548 → 552):**
  - ब्रवीति bravīti "says" (class 2) — the lemma of the counted chunk अब्रवीत् (rule 8);
  - हन्ति hanti "kills, strikes" (class 2; weak घ्नन्ति);
  - एति eti "goes" (class 2; weak यन्ति) — Panc 4.16 पुनरेति;
  - युनक्ति yunakti "yokes, joins" (class 7) — युक्तः "joined, endowed" in c04.l01; योग;
    class 7 now has an owned member.
- **Previewed:** the ṇ-marker's vṛddhi (c03.l04); the k-marker on kta (c04.l01); the ḍ-marker's ṭi-deletion (c03.l05 card, c04.l04).
  **Production (✓):** the P cells of laṭ, laṅ and loṭ of the owned athematic verbs other than
  ददाति, by the D13 formula; ददाति in its listed cells. **Deferred:** the class-3 cells beyond
  ददाति's listed ones (◐; the reduplication tools come in c03.l04); the athematic Ā cells
  beyond the listed (◐, e.g. ब्रूते, coded L in the reading inventories).
- **Payoff:**
  - R4 closes: शृण्वन्ति, जानन्ति, गृह्णन्ति, ददति, स्वपन्ति, अशृणोत्, अगृह्णात्, अददात्, शृणु and
    देहि are now cells of tables the learner can build.
  - अस् and कृ, "learned whole" in v3.c03.l01, are explained: स्तः and कुरुतः are weak forms.
  - The Kāśikā's own examples (कुरुतः कुर्वन्ति; चिनुतः चिन्वन्ति) are read in c06.l02.
- **Main risk:** the strong/weak split applied to thematic verbs (a weak *भुवतः for भवतः). Fix:
  thematic classes have no split; the class sign takes the endings. A two-column sort:
  thematic vs athematic.
- **§17 (serial, ep. 3):** the wife's suspicion, in the present only (the future waits for
  c03.l05): "तस्य वानर्यस्ति" इति सा ब्रवीति। (pause: "तस्य वानरी अस्ति" इति सा ब्रवीति।)
- **S0 → next:** +1 day: 8 strong/weak cells; +1 week (c03.l05): the anubandha card.

#### v4.c03.l04 — लिट् · "The Perfect"

- **lesson_type:** grammar. **review_of:** v4.c03.l03, v4.c03.l02, v3.c03.l03 (उवाच, आह,
  अब्रवीत् as chunks), v3.c06.l02 (उवाच in Hit 1), v3.c06.l03 (ददौ glossed).
- **The one grammar point:**
  - The perfect (लिट्) is made by doubling the root (6.1.8) and adding its own endings
    (3.4.82).
  - The singular active is strong (vṛddhi or guṇa). Its endings णल्, थल् (and the 1sg णल्)
    carry no प्: they count as pit only because they replace तिप्, सिप्, मिप्, and a
    substitute behaves like what it replaced (1.1.56, previewed for c06.l03). The other
    endings, after a root not ending in a conjunct, are kit by 1.2.5 असंयोगाल्लिट् कित् (K),
    so they take the weak root.
  - According to Pāṇini (3.2.115) it is the past "not witnessed by the speaker" (परोक्षे).
    FACT beside it: "there is no evidence of its being either exclusively or distinctively
    so employed at any period" (Whitney §821a); in the later language it is "simply a
    preterit … equivalent with the imperfect … on the whole less common than the
    imperfect, although the preferences of different authors are diverse" (§821b). In the
    Hitopadeśa almost all its tokens are 3rd person (आह, उवाच, ऊचुः); in the Viṣṇupurāṇa it is
    the commonest past (17.4% of verbs, the periphrastic included and the aorists left out;
    §1.3.1, row 4).
- **Forms taught (T10; Whitney §553c (the perfect endings), §§795–797, 800):**

| | 3rd | 2nd | 1st |
|---|---|---|---|
| P endings (3.4.82) | णल् -अ · अतुस् -अतुः · उस् -उः | थल् -थ · अथुस् -अथुः · अ -अ | णल् -अ · व -व · म -म |

  **Production cells (✓, 3rd person P):**

| Root | 3sg | 3du | 3pl | How |
|---|---|---|---|---|
| गम् | जगाम | जग्मतुः | जग्मुः | doubling, ग → ज (7.4.62), upadhā vṛddhi before णल् (7.2.116) |
| कृ | चकार | चक्रतुः | चक्रुः | doubling, ऋ → अ in the doubled syllable (7.4.66), क → च, vṛddhi (7.2.115) |
| भू | बभूव | बभूवतुः | बभूवुः | no strong singular (*बभाव): 1.2.6 इन्धिभवतिभ्यां च makes liṭ after भू k-marked (Kāśikā: भवतेः खल्वपि — बभूव; K, adopted from reader-first); the prakriyā is read in the LSK, c06.l02 |
| दा | ददौ | ददतुः | ददुः | -औ for णल् after आ (7.1.34) |
| वच् | उवाच | ऊचतुः | ऊचुः | doubled syllable va → u (6.1.17); weak: वच् → उ अ च् → उच् (6.1.15, 1.2.5; उ + अ → उ, a labelled step, 6.1.108 in Teacher Notes) |
| पत् | पपात | पेततुः | पेतुः | weak पेत्- (6.4.120, Teacher Notes) |
| श्रु | शुश्राव | शुश्रुवतुः | शुश्रुवुः | — |
| ब्रू → **आह** | आह | आहतुः | आहुः | 3.4.84: a substitute for 5 forms of ब्रू's laṭ (see below) |

  ◐: the 1st and 2nd persons (जगन्थ/जगमिथ …); the Ā perfect (लेभे, चक्रे, ईजे, -ए -आते -इरे);
  the periphrastic perfect (चिन्तयामास, तोषयामास, 3.1.35 + 3.1.40, K).

  **TRADITION and FACT side by side on आह.**
  - Pāṇini (3.4.84 ब्रुवः पञ्चानामादित आहो ब्रुवः) makes आह, आहतुः, आहुः (and आत्थ, आहथुः)
    optional substitutes for the first five laṭ forms of ब्रू. They are present forms in
    his account.
  - Whitney (§801a) files आह under the perfect of a defective √अह्.
  - Whitney adds that आह is "everywhere used with present value" (§821c); the DCS tags the
    Hitopadeśa's 112 tokens Tense=Past, a tag of the form, not of its time. In one Hitopadeśa
    dialogue (Hit 3, story 8, prose after Hit 3.101: the unseen exam text N8, §5.7) आह alternates
    with the present ब्रूते; the lesson states this without quoting the passage. Volume 3
    glossed आह "says, said".
  All three statements print; only "According to Pāṇini…" items are assessed.
- **Sūtras (tiers).** **Q:** 3.2.115 परोक्षे लिट्. **D** (the two derivations the learner
  writes, जगाम and ददौ): 6.1.8 लिटि धातोरनभ्यासस्य; 3.4.82 परस्मैपदानां णलतुसुस्थलथुसणल्वमाः;
  7.2.116 अत उपधायाः; 7.4.60 हलादिः शेषः; 7.4.59 ह्रस्वः; 7.4.62 कुहोश्चुः; 7.1.34 आत औ णलः.
  **K** (the card "the perfect's further tools", read with the production table, not
  derived; trimmed at synthesis to keep the lesson to 45 minutes): 7.4.66 उरत्; 8.4.54
  अभ्यासे चर्च; 7.2.115 अचो ञ्णिति; 6.1.17 लिट्यभ्यासस्योभयेषाम्; 6.1.15 वचिस्वपियजादीनां किति;
  1.2.5 असंयोगाल्लिट् कित्; 1.2.6 इन्धिभवतिभ्यां च; 3.4.84 ब्रुवः पञ्चानामादित आहो ब्रुवः; 3.1.35
  कास्प्रत्ययादाममन्त्रे लिटि; 3.1.40 कृञ् चानुप्रयुज्यते लिटि. Tools added: 8. The 3rd-person
  perfect of every owned verb is printed in its vocabulary row, as the future stem is in
  c03.l05: the rules explain the forms, they are not memorised.

  **IR-019 corrected in the open.** The 1.x recital card labelled लिट् "remote past,
  witnessed"; its own quiz required "not witnessed". The sūtra says परोक्षे "out of sight",
  and the Kāśikā glosses the domain as भूतानद्यतनपरोक्षे.
- **The derivation: गम् + लिट् → जगाम** (the c03.l01 steps to the ending, then:)

| Step | String | Tool |
|---|---|---|
| 0 | गम् + ल् (लिट्) → गम् + तिप् → गम् + णल् (P 3sg) | 3.2.115; 3.4.78; 3.4.82 |
| 1 | णल् → अ (ण्, ल् markers) | 1.3.7 चुटू (ण्, Teacher Notes); 1.3.3 (ल्); 1.3.9 |
| 2 | the root is doubled: गम्गम् + अ | 6.1.8 लिटि धातोरनभ्यासस्य |
| 3 | in the first copy only the first consonant stays: ग + गम् + अ | 7.4.60 हलादिः शेषः |
| 4 | ग → ज in the first copy | 7.4.62 कुहोश्चुः |
| 5 | णल् is ṇit: the penultimate अ → आ (vṛddhi) | 7.2.116 अत उपधायाः |
| 6 | **जगाम** | — |

  The learner derives **दा → ददौ** in the order the Kāśikā gives on 7.1.34 (autvam, ekādeśaḥ,
  sthānivadbhāvaḥ, dvirvacanam): 7.1.34 आत औ णलः (णल् → औ); दा + औ → दौ (6.1.88, owned);
  doubling, दा standing in for दौ (6.1.8; 1.1.59, Teacher Notes); 7.4.59 short in the doubled
  syllable: ददौ. They then read **वच् → उवाच, ऊचुः** in the production table, strong vs weak side by side
  (6.1.17 vs 6.1.15 + 1.2.5, all K, from the card; in both columns the अ after the new उ merges into it, "u + a → u", a labelled step whose rule, 6.1.108 सम्प्रसारणाच्च, is in Teacher Notes): read, not written as a derivation table; the
  forms stay ✓ cells.
- **Model sentences:**
  1. पुरा नलो नाम राजा बभूव। (पुरा नलः नाम राजा बभूव।) "Long ago there was a king named
     Nala." (Nala as a display name, rule 12)
  2. स राजा नगराद्बहिर्जगाम। (सः राजा नगरात् बहिः जगाम।) "That king went out of the city."
  3. ऋषिः शिष्यानुवाच। (ऋषिः शिष्यान् उवाच।) "The seer spoke to his pupils."
  4. तस्मै धनं ददौ। (तस्मै धनम् ददौ।) "He gave him wealth."
  5. ते सर्वे श्लोकं शुश्रुवुः। (ते सर्वे श्लोकम् शुश्रुवुः।) "They all heard the verse."
  6. पतिः खड्गेन सह द्वारं जगाम। (पतिः खड्गेन सह द्वारम् जगाम।) "The husband went to the
     door with a sword."
- **New headwords (6; 552 → 558):**
  - पतिः patiḥ m. "lord; husband" (rule 14: irregular i-stem, by its nominative; पत्या ◐;
    declension c05.l03 Δ) — Hit नरपतिः, भूपतिः;
  - द्वयम् dvayam n. a "pair, couple" (a taddhita of द्वि, 5.2.42–43, taught as a word; usually at
    a compound's end: Apte dvaya, -yaṃ 1; MW dvaya n.) — N1's श्लोकद्वयम् needs it (rule 22);
  - श्लोकः ślokaḥ m. a "verse" (Hit frame श्लोकद्वयम्);
  - द्वारम् dvāram n. a "door, gate" (Hit 3 राजद्वारम्, N6; the द्वारि of N1 is the locative of
    the consonant stem द्वार् f., MW dvār, and is glossed there, §5.1);
  - खड्गः khaḍgaḥ m. a "sword" (Hit 3);
  - प्राप्नोति prāpnoti "reaches, obtains" (prefixed lemma, rule 9; perfect प्राप; T5's
    प्राप्नोषि, an L in Volume 3, is now a T).
- **Reading (§13/§17, authentic): Text N1** (§5.1). The Hitopadeśa frame's opening (शुश्राव)
  and Hit 3 (शुश्राव, निर्जगाम). The perfects are T, the absolutives L (R5). 8 glossed of 43
  words, names excluded: about 1 in 5.4.
- **Previewed:** the perfect participle (विद्वान्, c05.l03, ◐); बभूव's derivation (c06.l02).
  **Deferred:** 1st/2nd persons and Ā (◐ through Volume 5); the periphrastic perfect in full
  (Volume 5 reading).
- **Payoff:**
  - उवाच, आह and the glossed ददौ of Volume 3 become cells.
  - The ṇ of णल् does the same work as the ṇ of णिच् (c05.l02) and the ñ of the ञ-taddhitas
    (c04.l03); the vṛddhi row of the anubandha card, a preview in c03.l03, now has its first taught marker (the ṇ of णल्).
- **Main risk:**
  - The perfect reached for in the 1st person. जगाम (beside जगम, 7.1.91 णलुत्तमो वा, Teacher
    Notes) is a correct 1sg perfect, but the 1st-person perfect (जगम/जगाम) is ◐ in this
    volume. Fix: the perfect is taught as the narrator's tense, 3rd person.
  - The learner's "I went" is the imperfect अगच्छम्, which the learner owns.
- **§17 (serial, ep. 4):** the crocodile went back (जगाम) and spoke (उवाच).
- **S0 → next:** +1 day: 3rd-person perfects of 6 roots; +1 week (c03.l06): derive जगाम.

#### v4.c03.l05 — लृट् · "The Future" (with the card of the other four lakāras)

- **lesson_type:** grammar. **review_of:** v4.c03.l04, v4.c03.l03, v4.c02.l03 (8.3.59), v3.c06.l02
  (करिष्यामि glossed), v3.c03.l01 (T6).
- **The one grammar point:**
  - The future (लृट्; 3.3.13) adds the sign स्य to the root (3.1.33), then the present endings
    (T6).
  - स्य is ārdhadhātuka (3.4.114), so it takes guṇa (7.3.84) and, after most roots, the
    augment इट् (7.2.35). The स then becomes ष after इ (8.3.59, owned).
- **Forms taught (T12; Whitney §§931–939):**

| Root | Future stem | 3sg · 3du · 3pl | Note |
|---|---|---|---|
| भू | भविष्य- | भविष्यति · भविष्यतः · भविष्यन्ति | seṭ |
| कृ | करिष्य- | करिष्यति (Ā करिष्यते) | iṭ by 7.2.70 ऋद्धनोः स्ये |
| गम् | गमिष्य- | गमिष्यति | iṭ in P by 7.2.58 गमेरिट् परस्मैपदेषु |
| पठ् | पठिष्य- | पठिष्यति | seṭ |
| दा | दास्य- | दास्यति | aniṭ |
| नी | नेष्य- | नेष्यति | aniṭ |
| दृश् | द्रक्ष्य- | द्रक्ष्यति | aniṭ (Teacher Notes for -क्ष्-) |
| वच् | वक्ष्य- | वक्ष्यति | aniṭ |
| लभ् | लप्स्य- | लप्स्यते | Ā, aniṭ |
| स्था | स्थास्य- | स्थास्यति | aniṭ |

  **All persons:** P and Ā, sg. and pl., 3du (the D13 formula), on T6:
  - P: करिष्यामि, करिष्यसि, करिष्यति …;
  - Ā: लप्स्ये, लप्स्यसे, लप्स्यते ….

  Whether a root takes इट् is lexical: the course gives each verb's future stem in its
  vocabulary row, from Whitney §935 and the Dhātupāṭha (7.2.10, Teacher Notes). The rule is
  not memorised.

  **Card — the other four lakāras (◐; recognise and name, never produce; Whitney §826 for
  the aorist's rarity):**

| Lakāra | Rule (K) | Sign | √भू, 3sg · 3pl | Use |
|---|---|---|---|---|
| लुट् periphrastic future | 3.3.15 अनद्यतने लुट्; 2.4.85 लुटः प्रथमस्य डारौरसः | -तास्- (3rd: an agent noun) | भविता · भवितारः | a definite future, not today (TRADITION, 3.3.15); FACT: that sense is "but faintly traceable in later use" (Whitney §949); the DCS tags no periphrastic future in the Hitopadeśa and 38 in the Viṣṇupurāṇa, against 73 and 494 simple futures (`Tense=Fut`, `Formation=peri`) |
| लृङ् conditional | 3.3.139 लिङ्निमित्ते लृङ् क्रियातिपत्तौ | अ- + future stem + secondary endings | अभविष्यत् · अभविष्यन् | "would have": unfulfilled (Whitney §940) |
| लुङ् aorist | 3.1.43 च्लि लुङि; 3.1.44 च्लेः सिच् | अ- + root/-स्-/-इष्-/-अ- … | अभूत् · अभूवन् (root aorist); अगमत् (a-aorist); अकार्षीत् (s-aorist) | a past; "only … eight in the Hitopadeśa" (Whitney §826); the DCS tags nine there, five indicative (अगमत् ×3, प्रादात्, अश्रावि) and four prohibitive (भैषीः ×3, कृथाः); मा + augmentless aorist = prohibitive (Whitney §579) |
| आशीर्लिङ् benedictive | 3.3.173 आशिषि लिङ्लोटौ; 3.4.116 लिङाशिषि | -यास्- | भूयात् · भूयासुः | blessings: "may it be" (3 in the Hitopadeśa, DCS) |

  **The chunk:** मा भैषीः "do not be afraid!" (s-aorist of भी, augmentless after मा; Hit ×3,
  DCS). It is taught whole and counts (rule 8's chunk clause). The pattern मा + aorist stays
  ◐; मा + imperative, owned, is the learner's productive prohibitive (v3.c03.l04).

  **Vedic leṭ, and how the tradition counts ten.** One line, as TRADITION: the LSK opens its
  tiṅanta section, before VLk 375 (= 3.4.69), with the list "laṭ, liṭ, luṭ, ḷṭ, leṭ, loṭ,
  laṅ, liṅ, luṅ, ḷṅ / eṣu pañcamo lakāraśchandomātragocaraḥ" (`varlghku.htm`, line 1293):
  the tradition's ten l-affixes include leṭ, Vedic only, and count liṅ once. The classical
  table of c03.l06 also has ten rows, because it splits liṅ into vidhiliṅ and āśīrliṅ and
  leaves leṭ out. leṭ is Volume 5's.
- **Sūtras (tiers).** **Q:** none new; the future is made with D tools on owned B ones
  (7.3.84) and the owned 8.3.59. **D:** 3.3.13 लृट् शेषे च; 3.1.33 स्यतासी लृलुटोः; 3.4.114
  आर्धधातुकं शेषः; 7.2.35 आर्धधातुकस्येड् वलादेः; 7.2.70 ऋद्धनोः स्ये; 7.2.58 गमेरिट्
  परस्मैपदेषु. **K:** 3.3.15 अनद्यतने लुट्; 2.4.85 लुटः प्रथमस्य डारौरसः; 3.3.139 लिङ्निमित्ते
  लृङ् क्रियातिपत्तौ; 3.1.43 च्लि लुङि; 3.1.44 च्लेः सिच्; 3.3.173 आशिषि लिङ्लोटौ; 3.4.116
  लिङाशिषि. Tools added: 6.
- **The derivation: कृ → करिष्यति** (the 1.x future of गच्छ, गमिष्यति, is derived by the learner
  as the second item)

| Step | String | Tool |
|---|---|---|
| 0 | कृ + लृट् → कृ + ल् → कृ + तिप् → कृ + ति | 3.3.13; c03.l01 |
| 1 | the sign: कृ + स्य + ति | 3.1.33 स्यतासी लृलुटोः |
| 2 | स्य is ārdhadhātuka (not a tiṅ, not ś-marked) | 3.4.114 |
| 3 | इट् before स्य after ṛ-final roots: कृ + इ + स्य + ति | 7.2.70 ऋद्धनोः स्ये (the general rule 7.2.35 is quoted beside it) |
| 4 | guṇa of ऋ before the ārdhadhātuka: कर् + इ + स्य + ति | 7.3.84; 1.1.51 उरण् रपरः |
| 5 | स after इ, in an affix → ष: करिष्यति | 8.3.59 (owned, c02.l03) |
| 6 | **करिष्यति** | — |

- **Model sentences:**
  1. श्वोऽहं ग्रामं गमिष्यामि। (श्वः अहम् ग्रामम् गमिष्यामि।) "Tomorrow I shall go to the
     village."
  2. यदि त्वं पठिष्यसि, ज्ञानं लप्स्यसे। (यदि त्वम् पठिष्यसि, ज्ञानम् लप्स्यसे।) "If you
     study, you will gain knowledge."
  3. नूनं स आगमिष्यति। (नूनम् सः आगमिष्यति।) "Surely he will come."
  4. मा भैषीः, अहं तव साहाय्यं करिष्यामि। (मा भैषीः, अहम् तव साहाय्यम् करिष्यामि।) "Do not
     be afraid; I will help you." (V3 B2's line, now taught)
  5. तस्य हृदयेन मम प्रयोजनम्। (तस्य हृदयेन मम प्रयोजनम्।) "I need his heart" (lit. "with
     his heart is my purpose").
  6. राजा ते वर्तनं दास्यति। (राजा ते वर्तनम् दास्यति।) "The king will give you a wage."
- **New headwords (7; 558 → 565):**
  - मा भैषीः mā bhaiṣīḥ (chunk) "do not be afraid!";
  - नूनम् nūnam "surely, certainly" — Panc 4 तन्नूनं सा वानरी भविष्यति;
  - हृदयम् hṛdayam n. a "heart" — the serial; Panc 4;
  - भार्या bhāryā f. ā "wife" — Panc 4 भार्यया ते प्रयोजनम्;
  - प्रयोजनम् prayojanam n. a "purpose, need, use" (+ instr. of the thing needed) — Panc 4;
    Hit;
  - यदि yadi "if" — Panc 4; Hit 3 यदि मया सेवकेन प्रयोजनमस्ति;
  - वर्तनम् vartanam n. a "livelihood; wages" — the Vīravara thread's key word (N6, N8: किं ते
    वर्तनम्?); MW, Apte; a kṛt noun of वर्तते, lexicalised (rule 18).
- **Reading: Text N2** (§5.2), Pañcatantra 4, the wife's demand (भविष्यति ×2). 7 glossed of 37
  words: about 1 in 5.3.
- **Previewed:** the future participle करिष्यन् (c04.l01 card). **Deferred:** the periphrastic
  future, conditional, aorist and benedictive, all ◐ (Volume 5 reading); मा + aorist
  beyond मा भैषीः, ◐ (Volume 5 reading; its production is not planned, §6).
- **Payoff:**
  - करिष्यामि, the one glossed future of Volume 3, is now made by rule.
  - The 1.x गच्छ "future" row (गमिष्यति) is restored.
  - 8.3.59 (c02.l03) works again inside a new form: the ṣ of भविष्यति is the ṣ of रामेषु.
- **Main risk:** iṭ guessed by rule. Fix: the future stem is a vocabulary fact, printed in the
  vocabulary row of every verb; the rule only explains it. §12 meets the pair of §3: the -इ- of
  स्वपिति (c03.l02) is the same augment इट्, given before a sārvadhātuka ending by 7.2.76, as the
  future's इट् is given before स्य by 7.2.35; the 1sg Ā ending इट् (3.4.78, c03.l01) only shares
  the name: लप्स्ये is लभ् + स्य + that ending, with no augment.
- **§17 (serial, ep. 5):** the wife's threat and the crocodile's resolve (futures).
- **S0 → next:** +1 day: futures of 8 owned verbs; +1 week (c04.l01): derive करिष्यति.

#### v4.c03.l06 — तृतीयपरीक्षा · "Chapter 3 Exam: the √भू Table"

- **lesson_type:** review. **review_of:** v4.c03.l01–l05, v3.c03.l05.
- **Assembly (§15): the √भू table** (1.x pp.127–128, six lakāras, restored; completed to the
  ten rows of the classical table. TRADITION, as c03.l05 prints it: the tradition's ten
  l-affixes include leṭ (Vedic only) and count liṅ once; the classical table has ten rows
  because liṅ is split into vidhiliṅ and āśīrliṅ. Whitney §§734, 800, 932, 940, 944, 829,
  924)

| Lakāra | Name and use | 3sg | 3du | 3pl | Status |
|---|---|---|---|---|---|
| लट् | present | भवति | भवतः | भवन्ति | ✓ |
| लङ् | imperfect: the past not of today (3.2.111; the 1.x labels "recent past", "past habitual" corrected) | अभवत् | अभवताम् | अभवन् | ✓ |
| लोट् | imperative | भवतु | भवताम् | भवन्तु | ✓ |
| विधिलिङ् | optative | भवेत् | भवेताम् | भवेयुः | ✓ (3rd) |
| लिट् | perfect (परोक्षे) | बभूव | बभूवतुः | बभूवुः | ✓ (3rd) |
| लृट् | future | भविष्यति | भविष्यतः | भविष्यन्ति | ✓ |
| लुट् | periphrastic future | भविता | भवितारौ | भवितारः | ◐ |
| लृङ् | conditional | अभविष्यत् | अभविष्यताम् | अभविष्यन् | ◐ |
| लुङ् | aorist | अभूत् | अभूताम् | अभूवन् | ◐ |
| आशीर्लिङ् | benedictive | भूयात् | भूयास्ताम् | भूयासुः | ◐ |
| (लेट्) | Vedic subjunctive: the tradition's fifth l-affix, not a row of the classical table | — | — | — | ○ (Volume 5) |

  The 1.x table's six lakāras are compared cell by cell against Whitney at the c03 fact
  base; any 1.x error found is listed in that fact base's §7. The source inventory reports
  the table's forms as "complete and correct"; its laṅ label ("past habitual", pp. 127–128)
  is not, and is corrected here (adopted from system-first). The table is checked against
  Whitney's synopsis of √भू in his Appendix as well as the sections named. Beside it: the
  anubandha card (c03.l03) and the toolbox card, 89 tools (Chapters 1–2's 43 + Chapter 3's 46:
  15 + 10 + 7 + 8 + 6).
- **Exam:** the chapter shape (45 min). Ledger stays 565.
- **Spiral:** the Chapter 2 item ("Derive, according to Pāṇini, रामेण") and the Volume 3 thread verse (उद्यमेन हि
  सिध्यन्ति…: सिध्यन्ति as class 4, सिध् + श्यन्).
- **Payoff:** the √भू table: one root, all ten rows of the classical table, made by the tools of
  three chapters.
- **Main risk:** the ◐ rows treated as productive by stronger learners. The rubric gives no
  credit for producing them; naming them is the target.
- **S0 → next:** +1 day (c04.l01): the six ✓ rows; +1 week (c04.l02): class detective.

---
### 4.4 Chapter 4 — कृत्-तद्धित-समासाः · Derivation & Compounds

**Goals.** Make and use the participles, the absolutive, the infinitive; build words from
words with the taught taddhitas; read a compound as a derivation; correct the 1.x
participle and accent errors in the open.

**Grammar inventory (exact).** kṛt as a term (3.1.93); niṣṭhā (1.1.26, 3.2.102): -त and
-तवत्, Whitney §§952–956, 959 (the -न type of §957, as in निमग्नः, is glossed in N3b, not taught); the active use of -त with verbs of motion (3.4.72, K); śatṛ and
śānac (3.2.124; 7.2.82; Whitney §584); the participle inventory card (IR-024): present
-अत्/-मान/-आन, future -स्यत्/-स्यमान (करिष्यन्, 3.3.14, K), perfect -वांस्/-आन (◐, Whitney
§802), past -त/-तवत्; the absolutive -त्वा / -य (3.4.21, 7.1.37, 6.1.71; indeclinable by 1.1.40;
Whitney §§989–993); the infinitive -तुम् (3.3.10; completing इच्छति and शक्नोति, Teacher Notes: 3.3.158, 3.4.65; indeclinable by 1.1.39, as a kṛt ending in
म्; Whitney §968); the agent noun -तृ (तृच्; Whitney §§943, 1182;
its sūtra 3.1.133 kept unseen for c06.l04); taddhitas (4.1.76; 4.1.92 the apatya domain;
7.2.117–118 vṛddhi; 6.4.148; 5.1.119 -ता/-त्व; 5.2.94 -मत्/-वत् with 8.2.9; 5.2.115 -इन्;
5.1.44 and 7.3.50 -इक; 4.2.114 and 7.1.2 -ईय; card: 5.3.57 / 5.3.55 -तर/-तम, 4.3.143 -मय,
5.1.115 -वत् "like", 5.2.39 यावत्/तावत्, -मात्र, the plain -क of 5.3.70 ff., 5.3.7 -तः "from" (तसिल्, Teacher Notes; Whitney §1098a); Whitney §§1202–1245); compounds as
derivations (2.1.3, 2.1.4, 2.4.71, 1.2.46; 2.2.18 prādi/gati; 2.2.19 and 3.2.97 upapada;
6.4.143 ḍit; 5.4.91 samāsānta; 6.3.46 महा-; Whitney §§1246–1316); accent card for IR-026
(6.1.223, 6.2.1).

**Volume 3 §6 rows carried:** participles (-अत्, -मान, -त as formation; IR-024),
absolutives, infinitives (the 1.x gerund/infinitive lesson) → l01–l02; kṛt and taddhita
derivation (-ता, -त्व, -मत्, -वत्, -इन्, -क, agent -तृ as a process; IR-005) → l02 (agent -तृ
as a process, ✓ nominatives, beside -तुम्: the k-marker contrast adopted from system-first),
l03; compound accent and the इन्द्रशत्रु contrast (IR-026);
samāsānta (5.4.91); prādi, gati, upapada as kinds → l04; -तर / -तम → l03; यावत्…तावत् → l03 (the pair ✓, part of the taddhita point); the -वत्
/ -मात्र adverbs → l03 (card, ◐); gati prefixes → l04. **1.x assets carried:** the
gerund/infinitive lesson (pp.106–108) → l02; the इन्द्रशत्रु example (p.82) → l04,
corrected. **Errors corrected:** IR-024 (l01), IR-026 (l04), IR-017's second half (8.2.39 vs
8.4.53, l01).

**Exam shape (l05, 45 min).** A — participles: 10 owned verbs × (-त, -तवत् nom., and the present participle as
c04.l01's table gives it: -अत् nom. of a P verb, -मान/-आन of an Ā verb, both for an ubhayapada
verb such as कृ; formed on each verb's owned present stem as c04.l01 forms it (-अत् as "the 3pl without -इ": गच्छन्ति → गच्छन्त्-; -मान after an a-stem, -आन otherwise; Whitney §584); not वच्, whose row in that table has none; no passive -यमान) (8 min). B — absolutive and infinitive: join 6 pairs of sentences with -त्वा/-य, 4
with -तुम्, and name the doer of 4 owned verbs with -तृ (8 min). C — "Derive, according to Pāṇini, …": three forms of the chapter with every step,
one from each of l02–l04 (l02: आगत्य or गत्वा; l03: पाणिनीयम् or लौकिक; l04: राजपुरुषः or जलज; l01's -त is formed in task A, and its कृत is derived step by step as कृतम् in the Chapter 5 exam's spiral) (10 min). D — the unseen passage **N3b** (§5.3: the end of the old tiger
story, Hit 1, kathā 1), 9 glossed of 45, 1 in 5, with questions on who did what first
(12 min). E — production: a 6-sentence account of a day using two absolutive chains, one
infinitive of purpose, two -त past participles with the instrumental (7 min).

#### v4.c04.l01 — क्तः शतृ · "Done and Doing: Participles as kṛt Adjectives"

- **lesson_type:** grammar. **Station 0:** v4.c03.l06's +1 day; v4.c03.l05's +1 week.
  **review_of:** v4.c03.l06, v4.c03.l03 (1.1.5), v3.c02.l05 (R2: मया कृतम्), v1.c02.l03 (कृत),
  v1.c03.l01 (गत).
- **The one grammar point:** a participle is a kṛt affix — one added to a root that is not a
  tiṅ (3.1.93) — and it makes an adjective: -त (क्त) "done, gone" and -तवत् (क्तवतु) "having
  done" (the niṣṭhā, 1.1.26), -अत् (शतृ) "doing" and -मान/-आन (शानच्) "doing (Ā)", which
  replace laṭ (3.2.124). The k of क्त is a k-marker: no guṇa (1.1.5, owned).
- **Forms taught (Whitney §§952–956, 959, 584):**

| Root (owned verb) | -त | -तवत् (nom. m.) | -अत् (nom. m. sg.) / -मान | Tool beyond the affix |
|---|---|---|---|---|
| कृ (करोति) | कृत | कृतवान् | कुर्वन् · कुर्वाणः | 1.1.5 (no guṇa); कुर्वाणः ṇ by 8.4.2 |
| गम् (गच्छति) | गत | गतवान् | गच्छन् | 6.4.37 (nasal dropped before kit) |
| वच् (ब्रवीति's other root) | उक्त | उक्तवान् | — | 6.1.15 (samprasāraṇa before kit); 8.2.30 चोः कुः |
| पठ् (पठति) | पठित | पठितवान् | पठन् | 7.2.35 iṭ (owned) |
| दृश् (पश्यति) | दृष्ट | दृष्टवान् | पश्यन् | 8.2.36 + 8.4.41 (Teacher Notes) |
| स्था (तिष्ठति) | स्थित | स्थितवान् | तिष्ठन् | 7.4.40 (आ → इ, Teacher Notes) |
| लभ् (लभते) | लब्ध | लब्धवान् | लभमानः | 8.2.40 झषस्तथोर्धोऽधः + 8.4.53 झलां जश् झशि |
| दा (ददाति) | दत्त | दत्तवान् | ददत् | 7.4.46 (Teacher Notes) |

  Production: -त ✓ all cells (it declines as an a-stem: T1–T3); -तवत् nominatives ✓
  (-वान् -वती -वत्); -मान ✓ all cells (a-stem); -अत् nom. sg./pl. (गच्छन्, गच्छन्तः) and loc.
  sg. (गच्छति) ✓, the rest ✓ from c05.l03 (T11). **Use:** -त is passive with transitive verbs
  (मया पठितम्) and active with verbs of motion and intransitives (रामो वनं गतः; 3.4.72, K).

  **The participle inventory card (IR-024 corrected in the open).** The 1.x book printed
  "शप् + य/यान (FUTURE PARTICIPLE)" (p.105). शप् is the class-1 sign of c03.l02, not a
  participle; the future participle is शतृ/शानच् on the future stem (करिष्यन्, करिष्यमाणः;
  3.3.14 लृटः सद् वा, K). The full card: present -अत् / -मान, -आन · future -स्यत् / -स्यमान
  (◐) · perfect -वांस् / -आन (◐: विद्वान्, c05.l03) · past -त · -तवत् · gerundives (c05.l01).
  **IR-017's second half:** the 1.x book gave "8.2.39: झलां जश् झशि"; that text is 8.4.53 (used
  here for लब्ध), and 8.2.39 is झलां जशोऽन्ते (षड्, owned).
- **Sūtras (tiers).** **Q:** none new. **D:** 3.1.93 कृदतिङ्; 3.2.102 निष्ठा; 1.1.26 क्तक्तवतू
  निष्ठा; 3.2.124 लटः शतृशानचावप्रथमासमानाधिकरणे; 6.4.37
  अनुदात्तोपदेशवनतितनोत्यादीनामनुनासिक लोपो झलि क्ङिति; 8.2.30 चोः कुः; 6.1.15 वचिस्वपियजादीनां किति (K on the c03.l04 card; D from this lesson); and the owned 1.1.5,
  7.2.35. **K** (the IR-017 card and the participle inventory card): 8.2.40
  झषस्तथोर्धोऽधः; 8.4.53 झलां जश् झशि; 7.2.82 आने मुक्; 3.4.72
  गत्यर्थाकर्मकश्लिषशीङ्स्थाऽऽसवसजनरुहजीर्यतिभ्यश्च; 3.3.14 लृटः सद् वा. Tools added: 7.
  **Load trimmed at synthesis** (the pedagogue's hot spot "four participles in one lesson"):
  the -त form of each owned verb is printed in its vocabulary row, as the future stem is
  (c03.l05), and the rules beyond 1.1.5 and 6.4.37 are read off the card, not derived; -अत्
  and -मान are formed in one move from the owned present stem ("the 3pl without -इ":
  गच्छन्ति → गच्छन्त्-, Whitney §584). -मान is ✓ in all cells, because it declines as an a-stem
  and is drilled through T1–T3, the owned tables; -अत् is drilled only in its ✓ cells, the
  nominatives (and the loc. sg. गच्छति), until T11 in c05.l03. The two derivations
  of the day (कृत, गत) and the learner's two (उक्त, पठित) are all -त.
- **The derivation: कृ → कृत** (owned since v1.c02.l03 as a word) **and गम् → गत** (v1.c03.l01)

| Step | कृ + क्त | गम् + क्त | Tool |
|---|---|---|---|
| 0 | कृ + क्त (the niṣṭhā, past) | गम् + क्त | 3.2.102; 1.1.26 |
| 1 | क् is a marker: कृ + त | गम् + त | 1.3.8 लशक्वतद्धिते; 1.3.9 |
| 2 | त is ārdhadhātuka and kit. It takes no iṭ (7.2.35): कृ is aniṭ, as its vocabulary row (कृत) shows (a labelled step; 7.2.10, Teacher Notes). guṇa (7.3.84) would apply, but 1.1.5 blocks it | no iṭ (7.2.35): गम् is aniṭ, as its vocabulary row (गत) shows (a labelled step; 7.2.10, Teacher Notes) | 1.1.5 क्ङिति च |
| 3 | — | before a kit jhal-initial affix, the nasal of गम् is dropped: ग + त | 6.4.37 |
| 4 | **कृत** | **गत** | — |

  The learner derives **उक्त** (वच् + त → उ + अ + च् + त by 6.1.15, the व replaced by its vowel उ; उ + अ → उ, a labelled step (the rule, 6.1.108 सम्प्रसारणाच्च, is in Teacher Notes) → उच् + त → उक्त by 8.2.30) and **पठित** (iṭ).
  **गच्छत्** is shown, not derived: गच्छ + शतृ → गच्छ + अत् → गच्छत् ("a + a → a", a labelled
  step; the rule, 6.1.97 अतो गुणे, is the unseen sūtra of c06.l04 task B).
- **Model sentences:**
  1. रामो वनं गतः। (रामः वनम् गतः।) "Rāma went to the forest."
  2. मया पुस्तकं पठितम्। (मया पुस्तकम् पठितम्।) "I read the book" (lit. "by me the book was
     read").
  3. स कार्यं कृतवान्। (सः कार्यम् कृतवान्।) "He did the work."
  4. बालको ग्रामं गच्छन्हसति। (बालकः ग्रामम् गच्छन् हसति।) "The boy laughs as he goes to the
     village."
  5. वृद्धो व्याघ्रः सरस्तीरे तिष्ठन्पान्थं पश्यति। (वृद्धः व्याघ्रः सरः-तीरे तिष्ठन् पान्थम्
     पश्यति।) "The old tiger, standing on the lake's shore, sees a traveller."
  6. भाग्येन धनं लब्धं मूर्खेण। (भाग्येन धनम् लब्धम् मूर्खेण।) "The fool got money by luck."
     (lit. "by luck wealth was obtained by the fool"; लब्धम् from the vocabulary row of लभते)
- **New headwords (8; 565 → 573):** व्याघ्रः vyāghraḥ m. a "tiger" (Hit 1, kathā 1) · वृद्धः
  vṛddhaḥ adj. -द्धा -द्धम् "old" (lexicalised kta of वृध्, rule 18; Hit वृद्धो व्याघ्रः) ·
  पान्थः pānthaḥ m. a "traveller" (Hit) · सरः saraḥ n. (stem सरस्) "lake" (rule 14; सरसि,
  सरस्तीरे: s-stem cells ◐ until c05.l03) · सुवर्णम् suvarṇam n. a "gold" · कङ्कणम् kaṅkaṇam
  n. a "bracelet" (Hit सुवर्णकङ्कणम्) · भाग्यम् bhāgyam n. a "luck, fortune" (N3a भाग्येनैतत्
  सम्भवति; Hit; a taddhita of भाग, lexicalised, rule 19) · मूर्खः mūrkhaḥ adj./m. "foolish;
  a fool" (Hit 20 DCS tokens, rule 22; the traveller of N3a is the type).
- **Reading: Text N3a** (§5.3), Hit 1, kathā 1, opening sentence: the old tiger on the lake
  shore (चरन्; स्नातः glossed "bathed", because its verb स्नाति is c04.l02's headword): 4 glossed of 20, 1 in 5 (चरति c03.l02).
- **Previewed:** the -अत् strong/weak stems (c05.l03); the passive construction with -त
  (3.4.70, c05.l01). **Deferred:** the perfect and future participles (◐); agent nouns in
  -तृ as a process (c04.l02).
- **Payoff:** कृत (V1), गत (V1), मृत (V1), the R2 card's मया कृतम्, तेन उक्तम्, बद्धः and मुक्तः:
  all now made: the k of क्त blocks guṇa by 1.1.5 क्ङिति च, the same rule that blocks it in शृणुतः, where the ending has no k but counts as ṅ-marked (the apit rule of c03.l03). (बद्धः also loses the nasal of बन्ध् before a k-marked affix (6.4.24, Teacher Notes); its त → ध and ध् → द् are the card's 8.2.40 and 8.4.53.)
- **Main risk:** passive -त with an active subject (*अहं पुस्तकं पठितः). Fix: the two frames
  side by side, transitive (मया … पठितम्) vs motion (अहं … गतः), and the -तवत् active (अहं
  पुस्तकं पठितवान्).
- **§17 (serial, c04 ep. 1):** the crocodile, having gone to the monkey, spoke (गतः, उक्तम्).
- **S0 → next:** +1 day: -त of 8 verbs; +1 week (c04.l03): derive गत and उक्त.

#### v4.c04.l02 — क्त्वा तुमुन् तृच् · "Having Done, To Do, the Doer: Absolutive, Infinitive, Agent"

- **lesson_type:** grammar. **review_of:** v4.c04.l01, v3.c06.l01 (R5 card: उक्त्वा, आगत्य),
  v3.c06.l02 (एवमुक्त्वा), v2.c05.l03 (इच्छति).
- **The one grammar point:** the absolutive and the infinitive, two kṛt forms that do not
  decline (avyaya: -त्वा by 1.1.40 क्त्वातोसुन्कसुनः, D; -तुम्, a kṛt ending in म्, by 1.1.39
  कृन्मेजन्तः, D), and what the k-marker does to the root.
  - The absolutive -त्वा (क्त्वा) marks an action done earlier by the same doer as the main
    verb (3.4.21); in a verb with a prefix it is replaced by -य (ल्यप्, 7.1.37), which after a
    short root vowel takes the augment त् (6.1.71).
  - The infinitive -तुम् (तुमुन्) says what an action is for (3.3.10) and completes इच्छति,
    शक्नोति (by two further rules, Teacher Notes: 3.3.158 with verbs of wishing, 3.4.65 with शक्).
  - **The k-marker (adopted from system-first's kit / non-kit contrast):** क्त्वा is
    k-marked, exactly as क्त was, and तुमुन् is not. The k-marker does three things to the
    root, each met on an owned verb (Whitney §991, §968):
    1. it blocks guṇa (1.1.5): कृत्वा / कर्तुम्, श्रुत्वा / श्रोतुम् (7.3.84 gives the guṇa where
       no k stops it);
    2. it licenses the loss of a root's nasal (6.4.37, D in c04.l01): गत्वा / गन्तुम्. गम् has
       no ik vowel, so there is no guṇa to block here: the two differ only by the nasal;
    3. it licenses samprasāraṇa (6.1.15, D in c04.l01): उक्त्वा / वक्तुम्.
    (दृष्ट्वा / द्रष्टुम्: before a non-k jhal-initial affix दृश् takes the augment अम्, 6.1.58
    सृजिदृशोर्झल्यमकिति, Teacher Notes.)
  - The same full root with -तृ (तृच्, not k-marked) names the doer: कर्ता, गन्ता, वक्ता
    (Whitney §943, §1182).
    The agent noun is the third form of the lesson because it shares the infinitive's stem;
    it declines as the owned ṛ-stems (v3.c02.l04), so only its nominative is new production.
    This is the Volume 3 §6 row "agent -तृ as a process", in the lesson where its grade is
    explained.
- **Forms taught (Whitney §§989–993, 968, 943):**

| Verb | -त्वा (k-marked: weak root) | with a prefix: -य / -त्य | -तुम् (no k: full root) | -तृ, nom. sg. (no k: full root) |
|---|---|---|---|---|
| गच्छति | गत्वा | आगत्य (or आगम्य), उपगम्य | गन्तुम् | गन्ता |
| करोति | कृत्वा | -कृत्य (उपकृत्य) | कर्तुम् | कर्ता (owned) |
| ब्रवीति (वच्) | उक्त्वा | — | वक्तुम् | वक्ता |
| पश्यति (दृश्) | दृष्ट्वा | — | द्रष्टुम् | द्रष्टा |
| शृणोति | श्रुत्वा | — | श्रोतुम् | श्रोता |
| ददाति | दत्त्वा | प्रदाय | दातुम् | दाता (owned) |
| स्नाति | स्नात्वा | — | स्नातुम् | स्नाता |
| प्रविशति | — | प्रविश्य | प्रवेष्टुम् | प्रवेष्टा |
| आलोचयति (class 10) | — | आलोच्य (the class sign णिच् is deleted before -य: 6.4.51 णेरनिटि, Teacher Notes) | आलोचयितुम् | — |
| आकर्णयति | — | आकर्ण्य | — | — |

  ✓ for every owned verb, with the -तुम् and -त्वा forms given in each vocabulary row where the
  root is irregular (as for the future stem, c03.l05). The minimal pairs are drilled first,
  each with the k-marker's job named: कृतः / कर्ता (guṇa blocked), गतः / गन्ता (the nasal lost,
  6.4.37), उक्तः / वक्ता (samprasāraṇa, 6.1.15), दृष्टः / द्रष्टा (the अम् augment only without
  k, Teacher Notes).
- **Sūtras (tiers).** **Q:** 3.4.21 समानकर्तृकयोः पूर्वकाले. **D:** 7.1.37 समासेऽनञ्पूर्वे
  क्त्वो ल्यप्; 6.1.71 ह्रस्वस्य पिति कृति तुक्; 3.3.10 तुमुन्ण्वुलौ क्रियायां क्रियार्थायाम्; 6.4.38
  वा ल्यपि; 1.1.40 क्त्वातोसुन्कसुनः; 1.1.39 कृन्मेजन्तः; 8.3.24 नश्चापदान्तस्य झलि; 8.4.58
  अनुस्वारस्य ययि परसवर्णः; 1.1.46, 1.1.5, 7.3.84 (owned); 6.4.37, 6.1.15 (D since c04.l01). The
  sūtra that gives तृच् (3.1.133) is not quoted: it is the unseen sūtra of c06.l04 (task B),
  where the learner predicts कारकः beside कर्ता from its two markers. Tools added: 9.
- **The derivation: आ + गम् + क्त्वा → आगत्य** (owned since v3.c06.l01 as R5)

| Step | String | Tool |
|---|---|---|
| 0 | आ + गम् + क्त्वा (same doer, earlier action) | 3.4.21 |
| 1 | in a compound with a prefix (not नञ्), क्त्वा → ल्यप्: आ + गम् + य | 7.1.37; the compound itself is (c04.l04) 2.2.18 कुगतिप्रादयः, "a prefix compounds with the kṛt form after it" (labelled) |
| 2 | optionally the nasal of गम् drops before ल्यप्: आ + ग + य | 6.4.38 वा ल्यपि |
| 3 | ल्यप् is p-marked and (as क्त्वा's substitute) a kṛt: after a short vowel, तुक् — k-marked, so it goes at the end of what it attaches to | 6.1.71; 1.1.46 (owned); the "counts as kṛt" step is 1.1.56, read in c06.l03 (labelled) |
| 4 | आ + ग + त् + य → **आगत्य** (or आगम्य, without step 2) | — |

  The learner derives **गत्वा** (6.4.37, as for गत) and **गन्तुम्** (गम् + तुम्: म् → anusvāra →
  न् before त; 8.3.24, 8.4.58).
- **Model sentences:**
  1. स गृहं गत्वा पश्चाद्भोजनं खादति। (सः गृहम् गत्वा पश्चात् भोजनम् खादति।) "He goes home
     and afterwards eats."
  2. मूषक आगत्य जालमकृन्तत्। (मूषकः आगत्य जालम् अकृन्तत्।) "The mouse came and cut the
     net."
  3. व्याघ्रो जले स्नात्वा पान्थं वदति। (व्याघ्रः जले स्नात्वा पान्थम् वदति।) "The tiger,
     having bathed in the water, speaks to the traveller." (जले, not सरसि: the s-stem cells
     are ◐ until c05.l03)
  4. स पङ्कान्निर्गन्तुं न शक्नोति। (सः पङ्कात् निर्गन्तुम् न शक्नोति।) "He cannot get out
     of the mud."
  5. तद्वचनमाकर्ण्य पान्थो लोभात्सरः प्राविशत्। (तत् वचनम् आकर्ण्य पान्थः लोभात् सरः
     प्राविशत्।) "Hearing those words, the traveller out of greed entered the lake."
  6. कर्ता करोति, वक्ता वदति; किं कर्तुमिच्छसीत्यालोचय। (कर्ता करोति, वक्ता वदति; किम् कर्तुम्
     इच्छसि इति आलोचय।) "The doer does, the speaker speaks; consider what you want to do."
- **New headwords (7; 573 → 580):** स्नाति snāti "bathes" (class 2; Hit स्नातः, स्नात्वा,
  स्नातुम्) · शक्नोति śaknoti "is able, can" (class 5; + infinitive; Panc 4 शक्नोति) ·
  आकर्णयति ākarṇayati "listens, hears" (denominative of the owned कर्णः, rule 17; आकर्ण्य: Hit 11 DCS absolutive tokens of
  ākarṇay, fifteenth among the Hitopadeśa's absolutive lemmas, `VerbForm=Conv`; Panc 4 तदाकर्ण्य) · लोभः lobhaḥ m. a "greed" (Hit
  लोभाकृष्टेन, लोभात्) · पङ्कः paṅkaḥ m. a "mud, mire" (Hit 11 DCS tokens; Hit 1, the elephant Karpūratilaka and the jackals, after Hit 1.191: महापङ्के निमग्नः; it also stands three times in N3b, the Chapter 4 exam's passage, which §5.3 therefore reports both ways, rule 22) · आलोचयति ālocayati
  "considers, reflects" (class 10, prefixed lemma, rule 9; Hit 25 DCS tokens, rule 22; N3a
  आलोचितम्, its absolutive आलोच्य) · पश्चात् paścāt "afterwards; behind" (indecl., + gen. or abl., Apte; Hit
  25 tokens; the word of absolutive chains).
- **Reading: Text N3a, second sentence** (§5.3): ततो लोभाकृष्टेन केनचित्पान्थेनालोचितम् … (1
  glossed of 8, लोभाकृष्टेन; आलोचितम् and भाग्येन are now taught).
- **Previewed:** 1.1.56 (c06.l03, where the Kāśikā gives this very example, prakṛtya); 2.2.18 (c04.l04, the compound that 7.1.37's समासे needs).
  **Deferred:** the -अम् absolutive (◐, Teacher Notes); the gerundive (c05.l01).
- **Payoff:** the R5 card closes; the 1.x gerund/infinitive lesson (pp.106–108) is restored
  with production; एवमुक्त्वा, आगत्य, निष्क्रम्य of the Volume 3 readings are now cells.
- **Main risk:** the absolutive with a different doer (*मयि आगत्य स गच्छति). Fix: the
  same-doer test (3.4.21 read as a check), with the locative absolute promised for different
  doers (c05.l04). Second risk: the nasal kept in the absolutive (*गन्त्वा). Fix: the minimal
  pairs with the k-marker's three jobs named, and the k on the card.
- **§17 (serial, ep. 2):** the monkey, hearing (आकर्ण्य) the invitation, climbs (आरुह्य,
  glossed) on the crocodile's back.
- **S0 → next:** +1 day: 6 sentence pairs joined; +1 week (c04.l04): derive आगत्य.

#### v4.c04.l03 — तद्धिताः · "Words from Words: Secondary Suffixes"

- **lesson_type:** grammar. **review_of:** v4.c04.l02, v4.c02.l02 (vṛddhi as substitute),
  v4.c03.l04 (the ṇ of णल्), v1.c02.l05 (लौकिक), v1.c02.l04 (एकता), v1.c02.l01 (ममता),
  v3.c02.l03 (पक्षी, R1), v3.c05.l01 (श्रीमान्, R6).
- **The one grammar point:** a taddhita (4.1.76) is added not to a root but to a word
  (prātipadika) in a sense the sūtra names (4.1.92 तस्यापत्यम् "his offspring", 5.1.119 "its
  being", 5.2.94 "it has"). A ñ- or ṇ-marked taddhita gives the first vowel of the base
  vṛddhi (7.2.117); a final -अ or -इ of the base drops before a taddhita that begins with a vowel or य्, before which the base is bha (6.4.148; bha, c02.l01): not before -ता, -त्व, -मत् (एकता, not *एक्ता).
- **Forms taught (Whitney §§1202–1245):**

| Sense (sūtra) | Suffix (marker) | Base → derivative | Productive |
|---|---|---|---|
| "-ness" (5.1.119 तस्य भावस्त्वतलौ) | तल् → -ता (f.), त्व → -त्वम् (n.) | एक → एकता (owned V1); मम → ममता (owned V1); गुरु → गुरुत्वम्; बाल → बालत्वम् | ✓ |
| "having" (5.2.94; 8.2.9) | मतुप् → -मत् / -वत् | श्री → श्रीमत् (श्रीमान्, owned R6); धन → धनवत् (धनवान्); बल → बलवत् | ✓ (nom.) |
| "having" (5.2.115 अत इनिठनौ) | इनि → -इन् | पक्ष → पक्षिन् (पक्षी, owned R1); बल → बलिन् (बली); सुख → सुखिन् (सुखी, owned V2) | ✓ (nom.) |
| "known in the world" (5.1.44) | ठञ् → -इक (7.3.50), vṛddhi | लोक → लौकिक (owned V1) | ◐ (the pattern) |
| "of / by X" (4.2.114, a vṛddha base) | छ → -ईय (7.1.2) | पाणिनि → पाणिनीय | ◐ |
| "son of" (4.1.92, 4.1.95) | इञ् → -इ, vṛddhi | दशरथ → दाशरथिः (Rāma; name, display) | ○ |
| "belonging to X" (4.3.120 तस्येदम्, Teacher Notes) | अण् → -अ, vṛddhi | देव → दैवम् "what is the gods': fate" (this lesson's headword) | ◐ (the pattern) |
| card: "more / most" (5.3.57, 5.3.55) | -तर / -तम | प्रिय → प्रियतर, प्रियतम; बलवत् → बलवत्तर | ✓ |
| card: "made of" (4.3.143) | मयट् → -मय | अमृत → अमृतमय (Panc 4) | ◐ |
| card: "like" (5.1.115) | वति → -वत् (indeclinable) | पुत्र → पुत्रवत् "like a son"; आत्मन् → आत्मवत् (Hit 1.14) | ◐ |
| card: "as much as" (5.2.39) | वतुप् → -वत् | यद् → यावत्, तद् → तावत् (Hit: यावत् … तावत् …) | ✓ (the pair) |
| card: "only" | -मात्र (5.2.37, Teacher Notes) | दर्शनमात्रेण, तिलमात्रम् (Panc 4) | ◐ |
| card: "from" (5.3.7 पञ्चम्यास्तसिल्, Teacher Notes; Whitney §1098a) | तसिल् → -तः | तद् → ततः, इदम् → इतः, एतद् → अतः, किम् → कुतः — all owned since v1.c02.l06, whose promised "suffix story" this is; the stem changes त-, इ-, अ-, कु- are Teacher Notes | ◐ |
| card: a word from a word, often in the same sense, or a name (Teacher Notes: the क / कन् rules headed by 5.3.70 प्रागिवात्कः, and 5.4.29 यावादिभ्यः कन्) | क / कन् → -क; no ñ or ṇ marker, and the initial क् is not a k-marker (1.3.8 लशक्वतद्धिते exempts a taddhita: the क् belongs to the affix; the न् of कन् is a marker), so no vṛddhi | बाल → बालकः "boy, child" (owned V1); हिरण्य "gold" → हिरण्यकः (the mouse's name in v3.c05; name, display) | ◐ |

- **Sūtras (tiers).** **Q:** 7.2.117 तद्धितेष्वचामादेः. **D:** 4.1.76 तद्धिताः; 4.1.92
  तस्यापत्यम्; 5.1.119 तस्य भावस्त्वतलौ; 5.2.94 तदस्यास्त्यस्मिन्निति मतुप्; 4.1.95 अत इञ्; 6.4.148
  यस्येति च; 5.1.44 लोकसर्वलोकाट्ठञ्; 7.3.50 ठस्येकः; 4.2.114 वृद्धाच्छः; 1.1.73
  वृद्धिर्यस्याचामादिस्तद् वृद्धम्; 7.1.2 आयनेयीनीयियः फढखच्छघां प्रत्ययादीनाम्; 5.2.115 अत
  इनिठनौ; 8.2.9 मादुपधायाश्च मतोर्वोऽयवादिभ्यः; 4.1.4 अजाद्यतष्टाप् (-ता feminine). **K:**
  5.3.57 द्विवचनविभज्योपपदे तरबीयसुनौ; 5.3.55 अतिशायने तमबिष्ठनौ; 4.3.143
  मयड्वैतयोर्भाषायामभक्ष्याच्छादनयोः; 5.1.115 तेन तुल्यं क्रिया चेद्वतिः; 5.2.39
  यद्तदेतेभ्यः परिमाणे वतुप्. Tools added: 15, most of them the one-line D steps of the two
  derivations; the senses (5.1.119, 5.2.94, 4.1.92) are taught as the three questions
  "-ness? has? son of?", not as numbers. A k-marked taddhita brings the same vṛddhi by 7.2.118
  किति च (Teacher Notes; the -इक of लौकिक here is ठञ्, ñ-marked).
- **The derivations: पाणिनि → पाणिनीयम्** (the volume's own name) **and लोक → लौकिक** (owned
  since v1.c02.l05)

| Step | पाणिनीयम् | लौकिक | Tool |
|---|---|---|---|
| 0 | पाणिनि (whose first vowel आ is vṛddhi: a "vṛddha" word) | लोक | 1.1.73 |
| 1 | + छ "belonging to, made by" | + ठञ् "known in" | 4.2.114 वृद्धाच्छः · 5.1.44 |
| 2 | छ → ईय | ठ → इक; ञ् marker | 7.1.2 · 7.3.50 |
| 3 | — | ñ-marked: first vowel ओ → औ: लौक + इक | 7.2.117 |
| 4 | final इ dropped before the taddhita: पाणिन् + ईय | final अ dropped: लौक् + इक | 6.4.148 यस्येति च |
| 5 | **पाणिनीय** (n. पाणिनीयम् "Pāṇini's [system]") | **लौकिक** "worldly" | — |

  The learner derives **एकता** and **बलवान्** (बल + मतुप् → 8.2.9 म् → व् → बलवत् → nom. बलवान्,
  the R6 pattern).
- **Model sentences:**
  1. पाणिनेरिदं पाणिनीयम्। (पाणिनेः इदम् पाणिनीयम्।) "This (system) of Pāṇini is the
     Pāṇinīya."
  2. बलमस्यास्तीति बली। (बलम् अस्य अस्ति इति बली।) "He has strength: so he is 'balin'."
  3. सिंहो मूषकाद्बलवत्तरः। (सिंहः मूषकात् बलवत्तरः।) "The lion is stronger than the
     mouse."
  4. अयं पण्डितो व्याकरणशास्त्रं जानाति। (अयम् पण्डितः व्याकरण-शास्त्रम् जानाति।) "This scholar
     knows the science of grammar."
  5. यावद्गुरुर्वदति, तावच्छिष्याः शृण्वन्ति। (यावत् गुरुः वदति, तावत् शिष्याः शृण्वन्ति।) "As
     long as the teacher speaks, the students listen."
  6. देवस्येदं दैवम्। (देवस्य इदम् दैवम्।) "What is the gods' is 'daiva', fate."
- **New headwords (6; 580 → 586):** पक्षः pakṣaḥ m. a "wing; side; (in argument) position"
  (the base of the owned पक्षी) · वेदः vedaḥ m. a "the Veda; knowledge" (base of वैदिक, Teacher
  Notes) · शास्त्रम् śāstram n. a "treatise, science" (Hit धर्मशास्त्राणि) · व्याकरणम्
  vyākaraṇam n. a "grammar" (वैयाकरणः "grammarian", display; its rules 4.2.59 and 7.3.3, Teacher Notes) · पण्डितः paṇḍitaḥ
  m./adj. "learned (man)" (Hit 1.14 स पण्डितः) · दैवम् daivam n. a "fate, destiny" (a vṛddhi
  taddhita of the owned देवः, lexicalised, rule 19; Hit 21 DCS tokens, rule 22; the
  Introduction's line पूर्वजन्मकृतं कर्म तद्दैवमिति कथ्यते).
- **Previewed:** the declension of -मत्/-वत्/-इन् beyond the nominative (c05.l03).
  **Deferred:** the full apatya system and the -ईयस् / -इष्ठ comparatives (श्रेष्ठ, owned, is
  shown as -इष्ठ in Teacher Notes); the gender-forming suffixes beyond -आ/-ई (Volume 5
  reading).
- **Payoff:** लौकिक, ममता, एकता — V1 words read "as words" in the first weeks of the course —
  and पक्षी, सुखी, श्रीमान्, धीमान् (Volumes 2–3 nominatives) are derived; the course's volume
  title पाणिनीयम् derives itself.
- **Main risk:** vṛddhi applied to every taddhita (*ऐकता). Fix: only ñ/ṇ/k-marked ones
  (7.2.117–118); -ता, -त्व, -मत्, -इन् carry no such marker: a two-box sort of 12 derivatives.
- **§17 (serial, ep. 3):** the monkey on the crocodile's back; "his heart is made of nectar"
  (अमृतमयम्) said by the crocodile to himself.
- **S0 → next:** +1 day: 6 derivatives built; +1 week (c04.l05): derive पाणिनीयम्.

#### v4.c04.l04 — समासः · "Compounds as Derivations"

- **lesson_type:** grammar. **review_of:** v4.c04.l03, v4.c02.l01 (pada; 8.2.7), v3.c05.l04
  (vigraha, four kinds; the कपोतराजः pointer to 5.4.91), v1.c03.l02 (जलज, खग).
- **The one grammar point:** a compound is a derivation: words in the sense the sūtra names
  combine (2.1.3–4), their inner case endings are deleted (2.4.71), and the first member,
  now a pada, takes pada rules (राजन् → राज-). Some compounds take a final suffix of their own
  (samāsānta, 5.4.91); in the upapada type a kṛt affix and the compound are made together
  (2.2.19, 3.2.97).
- **Forms taught:**

  (a) **राज्ञः पुरुषः → राजपुरुषः**

| Step | String | Tool |
|---|---|---|
| 0 | राजन् + ङस् · पुरुष + सुँ ("the king's man"), in the tatpuruṣa sense | 2.1.3; 2.1.4; (2.2.8 षष्ठी, Teacher Notes) |
| 1 | the compound is a prātipadika | 1.2.46 कृत्तद्धितसमासाश्च (D) |
| 2 | its inner endings are deleted: राजन् पुरुष | 2.4.71 सुपो धातुप्रातिपदिकयोः |
| 3 | राजन् is a pada (the deleted ending still counts, 1.1.62, Teacher Notes): its final न् drops | 8.2.7 (owned, c02.l01) |
| 4 | **राजपुरुषः** (+ सुँ, as रामः) | — |

  The vigraha's राज्ञः is derived on the spot, as राज्ञा was in c02.l01 (bha before a vowel
  ending: 6.4.134, 8.4.40); the other राजन् cells stay ◐ until c05.l03.

  (b) **जल + जन् + ड → जलज "water-born, lotus"** (owned since v1.c03.l02)

| Step | String | Tool |
|---|---|---|
| 0 | जले + जन् ("born in water"): with a locative upapada, the affix ड after जन् | 3.2.97 सप्तम्यां जनेर्डः |
| 1 | ड is ḍ-marked: the ṭi (अन्, the last vowel and what follows, 1.1.64) of जन् drops. 6.4.143 stands in the section headed भस्य, a heading the volume does not teach, so its bracket line shows "(further headings: Teacher Notes)" (§1.4.3 (i); the fact base gives the heading's number, 6.4.129, in Teacher Notes as a replaced heading, not as a Teacher-Notes sūtra, and it enters no count), and जन् before a kṛt affix is not bha (bha is only before sup and taddhita affixes, c02.l01); the Kāśikā on 6.4.143 applies it all the same, because the ḍ marker would otherwise do nothing: डिति अभस्य अपि अनुबन्धकरणसामर्थ्यात् टिलोपो भवति, with उपसरजः, the same formation (Teacher Notes: the e-text's 'sāmarthyat' corrected to 'sāmarthyāt'; the LSK says the same for luṭ डा under 2.4.85) | 6.4.143 टेः; 1.1.64 अचोऽन्त्यादि टि |
| 2 | जल + ज + अ → the upapada compound **जलज** | 2.2.19 उपपदमतिङ्; 2.4.71 |

  (c) **कपोतानां राजा → कपोतराजः** (the Volume 3 pointer, v3.c05.l04 gloss): कपोत + राजन् →
  + टच् (5.4.91) → कपोतराजन् + अ → (ṭi-lopa of राजन् before the vowel-initial taddhita: 6.4.144, Teacher Notes) → कपोतराज् + अ →
  **कपोतराजः**, an a-stem. So also महाराजः (महत् → महा-, 6.3.46, D).

  (d) **The kinds, re-filed as Pāṇini files them** (the four of Volume 3 plus the named
  sub-kinds): tatpuruṣa (2.1.22, K) with karmadhāraya (2.1.57, Teacher Notes) and dvigu inside it; bahuvrīhi
  (owned 2.2.24); dvandva (owned 2.2.29; मातापितरौ, owned since v3.c05.l04, its first member माता-: 6.3.25, Teacher Notes); avyayībhāva
  (◐; its heading, 2.1.5, Teacher Notes); and the 2.2.18 group: ku-, gati-
  and prādi-compounds (सुप्रभातम्, owned v2.c01; प्रभातम्, owned since v2.c01.l03, as a
  lexicalised prādi). gati: ऊरीकृत्य, स्वीकृत्य (◐ with a gloss; 1.4.60–61, Teacher Notes).

  (e) **The accent card (IR-026; one card, accent left to Volume 5).** TRADITION and FACT:
  the Mahābhāṣya (Paspaśāhnika, Kielhorn I.2.10–14; `pmbhassu.htm` Pas 4.2) quotes a verse
  — दुष्टः शब्दः स्वरतो वर्णतो वा मिथ्याप्रयुक्तो न तमर्थमाह। स वाग्वज्रो यजमानं हिनस्ति यथेन्द्रशत्रुः
  स्वरतोऽपराधात्॥ — "a word wrongly used in accent or sound does not say its meaning …, as
  'indraśatru' did, through a fault of accent". TRADITION (the rules): according to Pāṇini,
  a compound is accented on its last syllable (6.1.223 समासस्य: इन्द्रशत्रु́, a tatpuruṣa,
  "slayer of Indra"), and a bahuvrīhi keeps the first member's own accent
  (6.2.1 बहुव्रीहौ प्रकृत्या पूर्वपदम्: इ́न्द्रशत्रु "whose slayer is Indra"). FACT beside it, with Whitney's own
  hedges: determinatives with an ordinary noun as final member "are regularly and usually
  accented on the final syllable" (§1267), and "oftenest, the possessive has as a compound
  the natural accent of its prior member" (§1295); both sections were re-read at the
  critique. **IR-026 corrected in the open:** the 1.x book glossed the two as "Indra's slayer"
  vs "the slayer of Indra" — one meaning twice; the real contrast is tatpuruṣa vs
  bahuvrīhi. The story behind the verse (Tvaṣṭṛ's sacrifice) prints only with a REFERENCES
  key for its Brāhmaṇa locus; none is cited, so it does not print in Volume 4 (§7.3 Q5). Accent marks are display; nothing is
  assessed but the tatpuruṣa/bahuvrīhi meaning contrast.

  **Production:** ✓ building the ṣaṣṭhī-tatpuruṣa of two owned nouns from its vigraha (with
  8.2.7 for an n-stem first member: जन्मदिनम्, राजपुरुषः), the upapada in -ज "born in X"
  on an owned noun in the locative (3.2.97, as जलज), and the -राज samāsānta (कपोतराजः,
  महाराजः); the vigraha of dvandva, case-tatpuruṣa, karmadhāraya and bahuvrīhi ✓ as in
  v3.c05.l04. Avyayībhāva, dvigu, other upapada types and the gati compounds ◐; accent marks
  are display (only the meaning contrast of card (e) is assessed, "According to Pāṇini…").
- **Sūtras (tiers).** **Q:** none new. **D:** 2.1.3 प्राक् कडारात् समासः; 2.1.4 सह सुपा; 2.4.71
  सुपो धातुप्रातिपदिकयोः; 5.4.91 राजाहस्सखिभ्यष्टच् (the Volume 3 pointer, kept); 1.2.46
  कृत्तद्धितसमासाश्च; 2.2.18
  कुगतिप्रादयः; 2.2.19 उपपदमतिङ्; 3.2.97 सप्तम्यां जनेर्डः; 6.4.143 टेः; 1.1.64 अचोऽन्त्यादि
  टि; 6.3.46 आन्महतः समानाधिकरणजातीययोः. **K:** 2.1.22 तत्पुरुषः; 6.1.223 समासस्य; 6.2.1
  बहुव्रीहौ प्रकृत्या पूर्वपदम्. Tools added: 11.
- **Model sentences:**
  1. राज्ञः पुरुषो राजपुरुषः। (राज्ञः पुरुषः राजपुरुषः।) "The king's man is a 'rājapuruṣa'."
  2. जले जायत इति जलजम्। (जले जायते इति जलजम्।) "It is born in water: so, 'jalaja'."
  3. कपोतानां राजा कपोतराजः। (कपोतानाम् राजा कपोतराजः।) "The king of the doves is the
     'dove-king'."
  4. प्रभाते मन्त्री नृपाय वार्तां कथयति। (प्रभाते मन्त्री नृपाय वार्ताम् कथयति।) "At dawn
     the minister tells the king the news." (नृपाय, not राज्ञे: the राजन् cells beyond c02.l01's
     three are ◐ until c05.l03)
  5. मम जन्मदिनं श्वः। (मम जन्मदिनम् श्वः।) "My birthday is tomorrow." (जन्मन् + दिनम्: 8.2.7)
  6. स्वस्य भावः स्वभावः। (स्वस्य भावः स्वभावः।) "One's own being is 'svabhāva', nature."
     (a ṣaṣṭhī-tatpuruṣa, step for step like राजपुरुषः; भावः "being, state" is glossed: the vigraha's word, a kṛt noun of भवति, not a headword)
- **New headwords (5; 586 → 591):** जन्म janma n. (stem जन्मन्) "birth" (rule 14; Panc 4
  जन्मदिनम्) · मन्त्री mantrī m. (stem मन्त्रिन्) "minister, counsellor" (rule 14; the -इन्
  type; Hit 3 मन्त्रिभिः) · वार्ता vārtā f. ā "news, report" (Hit 9 DCS tokens, the Vīravara
  thread) · स्वभावः svabhāvaḥ m. a "nature, disposition" (a lexicalised tatpuruṣa, rule 10;
  Hit 19 DCS tokens, rule 22) · युद्धम् yuddham n. a "battle, fight" (a lexicalised kta of
  युध्यते, rule 18; Hit 18 DCS tokens, rule 22; Hit 3, the Vigraha book, passim). (The base
  design's प्रभातम् was dropped at synthesis: it is owned since v2.c01.l03, a double count.
  वार्ता also occurs in the volume exam's X-a; §5.8 reports its ratio both ways, rule 22.)
- **Previewed:** the n-stem cells of जन्मन्, मन्त्रिन् (c05.l03). **Deferred:** accent beyond the
  one card (Volume 5); avyayībhāva in production (◐).
- **Payoff:** जलज (V1's "water-born") is the course's oldest compound, derived; the
  कपोतराजः gloss of Volume 3 ("5.4.91 in v4.c04") is kept; राजपुरुषः shows why compounds
  use राज- and never राजन्-.
- **Main risk:** sup-lopa misread as "compounds have no grammar". Fix: the deleted ending
  still acts (राजन् is a pada) — the learner derives राजपुरुषः and जन्मदिनम् both.
- **§17 (serial, ep. 4):** out to sea; the monkey's name as a compound (रक्तमुखः, bahuvrīhi:
  "whose face is red"; display).
- **S0 → next:** +1 day: 6 compounds derived; +1 week (c05.l01): the accent contrast,
  "According to Pāṇini…".

#### v4.c04.l05 — चतुर्थपरीक्षा · "Chapter 4 Exam"

- **lesson_type:** review. **review_of:** v4.c04.l01–l04, v4.c03.l06.
- **Assembly (§15):** the kṛt card (participles, absolutive, infinitive, with their markers
  and what each marker does); the taddhita table; the compound derivation steps; toolbox
  card (131 tools: 89 to the end of Chapter 3 + Chapter 4's 42, i.e. 7 + 9 + 15 + 11).
- **Exam:** chapter shape (45 min). Ledger stays 591. **Spiral:** the Chapter 3 item
  ("Derive, according to Pāṇini, नयति"); the thread verse उद्यमेन हि सिध्यन्ति… (सुप्तस्य = kta of स्वप्, 6.1.15; R2's formation closed, its passive construction closing in c05.l01).
- **Payoff:** the unseen N3b (the tiger's trap) read with 1 gloss in 5 (9 of 45; 20 of 45, about 1 in 2.3, if its Chapter 4 headwords are not counted as known, §5.3, rule 22).
- **Main risk:** task C's derivations turned into recitation; the forms to derive are drawn
  at random from the chapter set.
- **S0 → next:** +1 day (c05.l01): absolutive chains; +1 week (c05.l02): participles.

---

### 4.5 Chapter 5 — प्रयोगाः विभक्तिविस्तारश्च · Voices & Case in Depth

**Goals.** Use the passive and the impersonal; make and use causatives with the right case
for the one made to act; decline the consonant stems as one system; count and order in
every case (the listed cells); know Pāṇini's kāraka theory as the reason the cases fall where they do, and set
scenes with the locative absolute, the case no kāraka gives.

**Order (changed at synthesis, §7.2).** The base design taught the absolutes (with the
kāraka definitions on a card) before the consonant stems. The judges found the kāraka theory
under-delivered as a card, and the absolute built on a half-taught -अत् stem. The plan now
runs passive (l01) → causative (l02) → consonant stems, with the full -अत् table (l03) →
the kāraka lesson, whose contrast case is the absolute (l04). The kāraka theory is thus met
three times: kartṛ, karman and 2.3.1 where the passive needs them (l01), hetu and the double
accusative where the causative needs them (l02), and the whole map, with upapada vs kāraka
vibhakti and the absolute, in l04; c06.l01 then reads the prakaraṇa with the Kāśikā.

**Grammar inventory (exact).** Voice (prayoga): 3.4.69, 3.1.67, 1.3.13, 2.3.1, 2.3.2,
2.3.18, 2.3.46 (Whitney §§768–774, 998–999); gerundives (3.1.95–97, 3.4.70; Whitney
§§961–966); the causative (3.1.26, 1.4.55, 3.1.32, 7.2.115–116, 7.3.86, 7.3.36; 1.4.51–53;
Whitney §§1041–1052); the sanādi card (3.1.7, 3.1.22, the denominatives; ◐); the absolutes
(2.3.37–38; Whitney §303 b–d for the locative, §300 b for the genitive); the kāraka definitions (1.4.23–55: 1.4.24, 32, 42, 45, 49,
54, 55; 2.3.50 for the genitive); consonant stems (1.1.43, 7.1.70, 6.4.14, 6.1.68, 8.2.23,
6.4.8, 6.4.134, 8.2.7; Whitney §§378–464: 424 राजन्, 440 -इन्, 447 -अत्, 453 -मत्/-वत्, 414
-अस्, 385–392 root nouns); numerals (Whitney §§475–489; 7.1.55); अदस् (7.2.107, Whitney
§501, ◐).

**Volume 3 §6 rows carried:** kāraka theory (1.4.23–55, the vibhakti sūtras 2.3.1 ff.,
upapada vs kāraka vibhakti, the double accusative 1.4.51) → l01, l02, **l04** (the kāraka
lesson; the definitions read with the Kāśikā in c06.l01); passive and impersonal
conjugation (IR-023), causative → l01, l02; consonant-stem declension as a system (राजन्,
-इन्, -अस्, -मत्/-वत्/-अत्, root nouns, ū-stems, सखि, पति, neuter i/u, the feminine of i/u/ṛ
adjectives, नप्तृ, नृ, neuter ṛ) → l03; numeral declension and syntax (D11) → l03 (first half)
and l04's Station 0 and §15 (second half); the
locative and genitive absolute → l04. **1.x assets carried:** the kāraka lesson + Fillmore
note (pp.87–89), theory → l01, l02, l04 (the Fillmore note prints in l04: `fillmore1968` and
`kiparskystaal1969` are both in REFERENCES.md, so the Volume 3 D17 condition is met; Q6
closed); the √पठ् passive (p.103), rebuilt (IR-023) → l01; the numeral paradigms
(pp.111–113, 125–127) → l03 (first half) and l04 (Station 0 and §15, second half); the sanādi list (p.76), counted (IR-025) → l02.

**Exam shape (l05, 45 min).** A — voice transformations: 8 sentences active ↔ passive, 2
impersonal (8 min). B — causatives: 6 sentences, the causee in the right case (1.4.52–53),
two with a double accusative (7 min). C — consonant stems and numerals: 12 cells (8 min).
D — the absolutes: join 5 sentence pairs with a locative absolute, each pair with two
different doers (the mirror of c04's same-doer absolutive task) (6 min). E — the unseen passage N7 (§5.6: Panc 4, the
monkey's trick), 6 glossed of 31, about 1 in 5.2 (10 min). F — "According to Pāṇini…": name the
kāraka of six nouns in owned sentences and the rule that gives each its case (kāraka
vibhakti, upapada vibhakti, or the absolute) (6 min).

#### v4.c05.l01 — कर्मणि प्रयोगः · "Who the Ending Names: Passive and Impersonal"

- **lesson_type:** grammar. **Station 0:** v4.c04.l05's +1 day; v4.c04.l04's +1 week.
  **review_of:** v4.c04.l05, v4.c03.l01 (the l-affix), v3.c03.l02 (R3: उच्यते, दृश्यते,
  श्रूयते), v3.c02.l05 (the roles map), v3.c06.l03 (तद्यथानुश्रूयते).
- **The one grammar point:** according to Pāṇini (3.4.69 लः कर्मणि च भावे चाकर्मकेभ्यः) the
  same l-affix may name the agent (kartari: active), the object (karmaṇi: passive), or, with
  intransitive verbs, the action itself (bhāve: impersonal). Whatever the ending names is
  "expressed" and stands in the nominative (2.3.46); a kāraka not expressed takes its own
  case (2.3.1 अनभिहिते): the object the accusative (2.3.2), the agent the instrumental
  (2.3.18). The passive stem is root + य (यक्, 3.1.67) with the ātmanepada endings (1.3.13).
  The two definitions this needs, kartṛ and karman (1.4.54, 1.4.49), are read now.
- **Forms taught (T13; IR-023's √पठ् table rebuilt; Whitney §§768–774):**

| | singular | dual | plural |
|---|---|---|---|
| 3rd | पठ्यते | पठ्येते | पठ्यन्ते |
| 2nd | पठ्यसे | पठ्येथे | पठ्यध्वे |
| 1st | पठ्ये | पठ्यावहे | पठ्यामहे |

  **IR-023 corrected in the open:** the 1.x table (p.103) put the 3rd-person series in the
  "singular" row and printed the non-forms पठ्यैथे, पठ्येयाथे. Owned verbs' passives: उच्यते
  (6.1.15: यक् is kit), दृश्यते, श्रूयते (श्रु → श्रू by 7.4.25 अकृत्सार्वधातुकयोर्दीर्घः), क्रियते (7.4.28
  रिङ् शयग्लिङ्क्षु), गम्यते, नीयते, दीयते (दा → दी, 6.4.66, Teacher Notes), लभ्यते, कथ्यते (class 10:
  the अय drops, Teacher Notes). ✓ laṭ and loṭ (गम्यताम्, त्वर्यताम्: the
  impersonal imperative of narrative; क्रियताम्, with its object in the nominative, as N6's
  अस्मद्वर्तनं क्रियताम्); the laṅ passive (अदृश्यत) ◐.

  **Card — the gerundive (3.1.95 कृत्याः, 3.1.96 तव्यत्तव्यानीयरः, 3.1.97 अचो यत्; 3.4.70
  तयोरेव कृत्यक्तखलर्थाः: these and kta are karmaṇi/bhāve):** -तव्य ✓ (कर्तव्यम्, गन्तव्यम्,
  वक्तव्यम्, दातव्यम्: "must be X-ed", + instrumental of the agent); -अनीय, -य ◐ (करणीयम्,
  कार्यम् — the owned कार्यम् is one; 3.1.97 gives यत् after a vowel-final root, but a root
  ending in ऋ, like कृ, takes ṇyat by a later rule (3.1.124, Teacher Notes), and its ṇ brings
  vṛddhi (the ṇ-marker rule of the c03.l04 card, a tool from c05.l02): कृ → कार्यम्). Hitopadeśa has 256 gerundive tokens (DCS), more than
  its 103 infinitives.
- **Sūtras (tiers).** **Q:** 2.3.1 अनभिहिते; 1.4.54 स्वतन्त्रः कर्ता; 1.4.49 कर्तुरीप्सिततमं
  कर्म. **B:** 3.4.69 लः कर्मणि च भावे चाकर्मकेभ्यः. **D:** 3.1.67 सार्वधातुके यक्; 1.3.13
  भावकर्मणोः; 2.3.2 कर्मणि द्वितीया; 2.3.18 कर्तृकरणयोस्तृतीया; 2.3.46
  प्रातिपदिकार्थलिङ्गपरिमाणवचनमात्रे प्रथमा; 7.4.25 अकृत्सार्वधातुकयोर्दीर्घः; 7.4.28 रिङ्
  शयग्लिङ्क्षु; 6.1.15 (owned). **K:** 3.1.95 कृत्याः; 3.1.96 तव्यत्तव्यानीयरः; 3.1.97 अचो यत्;
  3.4.70 तयोरेव कृत्यक्तखलर्थाः. Tools added: 11.
- **The derivation: पठति vs पठ्यते** (the ending names the agent vs the object)

| Step | रामः पुस्तकं पठति | रामेण पुस्तकं पठ्यते | Tool |
|---|---|---|---|
| 0 | पठ् + ल् (laṭ) | पठ् + ल् | 3.2.123 |
| 1 | ल् names the agent (kartari) | ल् names the object (karmaṇi) | 3.4.69 |
| 2 | P (no Ā marker): तिप् → ति | in karmaṇi always Ā: त → ते | 1.3.78 · 1.3.13; 3.4.78 (ल् → तिप् · त), with c03.l01's steps 6–7 (3rd sg.: 1.4.108, 1.4.22; प् dropped: 1.3.3, 1.3.9); 3.4.79 |
| 3 | शप्: पठ + अ + ति | the sign is यक् (k-marked) instead: पठ् + य + ते | 3.1.68 · 3.1.67 |
| 4 | **पठति** | **पठ्यते** | — |
| 5 | the agent is expressed → nominative रामः; the object is not → accusative पुस्तकम् | the object is expressed → nominative पुस्तकम्; the agent is not → instrumental रामेण | 2.3.46; 2.3.1 with 2.3.2 · 2.3.18 |

  The learner derives **उच्यते** (yak is kit → samprasāraṇa, as in उक्त) and the impersonal
  **मया गम्यते** "I go" (lit. "by me it is gone": bhāve, 3sg only). गम् normally takes an object (ग्रामं
  गच्छति), and its passive is then karmaṇi (ग्रामो गम्यते); the impersonal is used when no goal is
  meant, as with शनैः शनैर्गम्यताम् in N4, while त्वर्यताम् (त्वरते, no object) is the plain
  intransitive case. Teacher Notes, under 3.4.69: according to the Kāśikā, "gamyate grāmo
  devadattena" is karmaṇi, its bhāve example is a different verb ("āsyate devadattena"), and
  "sakarmakebhyo bhāve na bhavanti"; an object-taking verb counts as intransitive here only
  while its object is not meant (attributed to the later tradition, not tested).
- **Model sentences:**
  1. मया पुस्तकं पठ्यते। (मया पुस्तकम् पठ्यते।) "The book is read by me."
  2. वने सिंहो दृश्यते। (वने सिंहः दृश्यते।) "A lion is seen in the forest."
  3. शीघ्रं गम्यताम्। (शीघ्रम् गम्यताम्।) "Let it be gone quickly" = "Go quickly!"
  4. त्वया सत्यं वक्तव्यम्। (त्वया सत्यम् वक्तव्यम्।) "You must speak the truth."
  5. अत्र जलं न विद्यते। (अत्र जलम् न विद्यते।) "There is no water here."
  6. त्वया किं शक्यं कर्तुम्? गुरोर्वचनमनुष्ठीयताम्। (त्वया किम् शक्यम् कर्तुम्? गुरोः वचनम्
     अनुष्ठीयताम्।) "What can you do? Let the teacher's word be carried out."
- **New headwords (7; 591 → 598):** शरीरम् śarīram n. a "body" (Panc 4 प्लाव्यते मे शरीरम्) ·
  जलधिः jaladhiḥ m. i "ocean" (lexicalised compound, rule 10; Panc 4) · आलोकयति ālokayati
  "looks at, sees" (class 10; prefixed lemma; Panc 4 आलोक्य, Hit 3 अवलोक्य) · त्वरते tvarate
  "hurries" (Ā; Panc 4 त्वर्यताम्) · विद्यते vidyate "is found; exists, there is" (a
  lexicalised passive of विद् "find", rule 17's logic; the Dhātupāṭha lists it as its own
  class-4 ātmanepada root विद सत्तायाम्, Teacher Notes; Hit passim; it also occurs in the
  volume exam's X-a, §5.8, rule 22) · शक्यम् śakyam adj. n. "possible, can be (done)" (the
  -य gerundive of शक्नोति, lexicalised: rule 23; its यत् comes from a rule of its own for शक्
  (3.1.99, Teacher Notes), not from 3.1.97; + infinitive; Hit 16 DCS tokens; N8
  नैतच्छक्यम्) · अनुतिष्ठति anutiṣṭhati "carries out, performs" (अनु + स्था; passive
  अनुष्ठीयते, -त अनुष्ठित in the vocabulary row; Hit 26 DCS tokens, rule 22; N5 अनुष्ठिते).
- **Reading: Text N4** (§5.4): Panc 4, the start of the journey — "यद्येवं तत्किं विलम्ब्यते।
  त्वर्यताम्।" and "भ्रातः! शनैः शनैर्गम्यताम्। जलकल्लोलैः प्लाव्यते मे शरीरम्।" — 4 glossed of 21,
  about 1 in 5.25 (counted from the pause form, §5.4).
- **Previewed:** the causative passive (प्लाव्यते, glossed; c05.l02 card). **Deferred:** the
  laṅ passive and the passive aorist (अश्रावि, Hit; ◐); the remaining kāraka definitions
  (c05.l04; c06.l01).
- **Payoff:** R2 and R3 close: मया कृतम् and तद्यथानुश्रूयते are kartṛ/karman in Pāṇini's terms;
  Volume 3's roles map ("case ≠ role") gets its reason — the role stays, the case follows
  what the ending expresses.
- **Main risk:** passive with the agent in the nominative (*रामः पुस्तकं पठ्यते). Fix: the
  "who does the ending name?" question asked before every sentence; the derivation's step 5
  as a two-line check.
- **§17 (serial, c05 ep. 1):** at sea: "शनैः शनैर्गम्यताम्" (our retelling, then the original
  in N4).
- **S0 → next:** +1 day: 8 active → passive; +1 week (c05.l03): the passive table and
  -तव्य.

#### v4.c05.l02 — णिच् · "Making Someone Do: the Causative"

- **lesson_type:** grammar. **review_of:** v4.c05.l01, v4.c03.l04 (the ṇ of णल्: vṛddhi),
  v4.c03.l02 (class 10 -अय), v3.c01.l01 (नयति, पृच्छति with two accusatives; the Teacher Note
  अजां ग्रामं नयति).
- **The one grammar point:** the causative adds णिच् (→ -इ, then -अय- before the endings)
  to a root in the sense "cause someone to X" (3.1.26 हेतुमति च), making a new root (3.1.32
  सनाद्यन्ता धातवः). The ṇ marker gives vṛddhi of a final vowel (7.2.115) and of a
  penultimate अ (7.2.116); a light penultimate i/u/ṛ takes guṇa (7.3.86). The one made to
  act (the prayojya) is an accusative with verbs of motion, knowing, eating, sound and
  intransitives (1.4.52), otherwise an instrumental; with कृ and हृ either (1.4.53). Owned
  two-object verbs (नयति, पृच्छति) are the double accusative of 1.4.51 अकथितं च.
- **Forms taught (Whitney §§1041–1043):**

| Verb | Causative | Rule | Productive |
|---|---|---|---|
| भवति (भू) | भावयति "brings about; cherishes" | 7.2.115 (ऊ → औ), then 6.1.78 | ✓ |
| पठति | पाठयति "teaches (to read)" | 7.2.116 | ✓ |
| करोति (कृ) | कारयति "has made" | 7.2.115 (ऋ → आर्) | ✓ |
| गच्छति (गम्) | गमयति "sends; spends (time)" | short by the "mit" list of the Dhātupāṭha (Teacher Notes) | ✓ |
| पश्यति (दृश्) | दर्शयति "shows" (headword) | 7.3.86 | ✓ |
| तिष्ठति (स्था) | स्थापयति "places" (headword) | 7.3.36 (पुक्) | ✓ |
| बुध् (owned बुद्ध) | बोधयति "awakens, informs" (headword) | 7.3.86 | ✓ |
| ऋ | अर्पयति "hands over" | 7.3.36 | ◐ (not headworded: it occurs in the Chapter 5 exam's unseen N7, rule 22) |
| वि + आ + पद् | व्यापादयति "kills" (headword) | 7.2.116 | ✓ |
| तुष्यति | तोषयति "pleases" | 7.3.86 | ✓ |
| जानाति | ज्ञापयति "makes known" | 7.3.36 | ◐ |

  ✓ in the present system; the causative's -त and -य: कारित, स्थापित, दर्शयित्वा, स्थाप्य ◐;
  the causative passive (कार्यते, प्लाव्यते) ◐; the periphrastic perfect (तोषयामास) ◐ as in
  c03.l04.

  **The sanādi card (◐; IR-025 corrected in the open):** 3.1.32 calls "dhātu" what ends in
  the affixes from सन् onward: the desiderative (सन्, 3.1.7: पिपठिषति "wants to read",
  जिगमिषति), the intensive (यङ्, 3.1.22: ◐), the denominatives (आकर्णयति, owned), the
  causative (णिच्) and others. The 1.x book said "10 types" and listed nine; the card quotes
  that line as the error it is and prints no count of its own (§7.3 Q7: a count depends on
  whether affixes or sūtras are counted).
- **Sūtras (tiers).** **Q:** 1.4.52 गतिबुद्धिप्रत्यवसानार्थशब्दकर्माकर्मकाणामणि कर्ता स णौ;
  1.4.51 अकथितं च. **D:** 3.1.26 हेतुमति च; 1.4.55 तत्प्रयोजको हेतुश्च; 7.2.115 अचो ञ्णिति (K in
  c03.l04, now used); 3.1.32 सनाद्यन्ता धातवः; 7.3.86 पुगन्तलघूपधस्य च; 7.3.36
  अर्तिह्रीव्लीरीक्नूयीक्ष्माय्यातां पुङ्णौ; 1.4.53 हृक्रोरन्यतरस्याम्; and the owned 7.2.116, 7.3.84,
  6.1.78, 3.1.68. **K:** 3.1.7 धातोः कर्मणः समानकर्तृकादिच्छायां वा; 3.1.22 धातोरेकाचो हलादेः
  क्रियासमभिहारे यङ्. Tools added: 8. The causee of दृश् (a verb of seeing, "बुद्धि-"): in the
  parasmaipada it is accusative only, by 1.4.52; the Kāśikā on 1.4.53, citing the
  vārttika अभिवादिदृशोरात्मनेपद उपसंख्यानम्, allows the instrumental only in the ātmanepada (दर्शयते भृत्यान् राजानं, भृत्यैः इति वा) and adds:
  "आत्मनेपदे इति किम्? दर्शयति चैत्रं मैत्रमपरः" (Teacher Notes; read in c06).
- **The derivation: भू → भावयति** (preparation for c06.l04: the learner sees every tool of
  भवति except शप्'s guṇa context, applied to a different form)

| Step | String | Tool |
|---|---|---|
| 0 | भू + णिच् ("cause to be") | 3.1.26 |
| 1 | ण् and च् are markers: भू + इ | 1.3.7 चुटू (ण्, Teacher Notes); 1.3.3 (च्); 1.3.9 |
| 2 | ṇ-marked: final ऊ → vṛddhi औ: भौ + इ | 7.2.115 अचो ञ्णिति |
| 3 | औ before a vowel → आव्: भावि | 6.1.78 |
| 4 | भावि is a dhātu: + ल् → + तिप् → + शप् (c03.l01–l02) | 3.1.32; 3.4.78; 3.1.68 |
| 5 | guṇa of the इ before शप्: भावे + अ + ति | 7.3.84 |
| 6 | ए → अय्: **भावयति** | 6.1.78 |

  The learner derives **पाठयति** and **कारयति**.
- **Model sentences:**
  1. गुरुः शिष्यं वेदं पाठयति। (गुरुः शिष्यम् वेदम् पाठयति।) "The teacher teaches the pupil
     the Veda." (1.4.52: शब्दकर्म, double accusative)
  2. माता बालकं ग्रामं गमयति। (माता बालकम् ग्रामम् गमयति।) "Mother sends the boy to the
     village."
  3. राजा सेवकेन कार्यं कारयति। (राजा सेवकेन कार्यम् कारयति।) "The king has the servant do
     the work." (1.4.53: सेवकं also correct)
  4. व्याघ्रः पान्थं कङ्कणं दर्शयति। (व्याघ्रः पान्थम् कङ्कणम् दर्शयति।) "The tiger shows the
     traveller the bracelet." (1.4.52: the one who sees is the karman of the causative;
     corrected at synthesis from the base's dative पान्थाय)
  5. गुरुः शिष्यं नाम पृच्छति। (गुरुः शिष्यम् नाम पृच्छति।) "The teacher asks the pupil his
     name." (v3.c01.l01's model, now 1.4.51)
  6. व्याधो मृगं व्यापादयति, मृगो मृत्युं गच्छति। (व्याधः मृगम् व्यापादयति, मृगः मृत्युम्
     गच्छति।) "The hunter kills the deer; the deer goes to its death."
- **New headwords (6; 598 → 604):** दर्शयति darśayati "shows" · बोधयति bodhayati "awakens;
  informs, teaches" · स्थापयति sthāpayati "places, sets up" · व्यापादयति vyāpādayati "kills"
  (lit. "makes perish"; Hit 26 DCS tokens, rule 22) · तुष्यति tuṣyati "is pleased" (class 4;
  its causative तोषयति; Hit सन्तुष्ट- 10 DCS tokens; it also occurs in X-a, §5.8) · मृत्युः
  mṛtyuḥ m. u "death" (Hit 19 DCS tokens, rule 22). The first four count as lexicalised
  causatives (rule 17). (The base design's अर्पयति was dropped: it was chosen for the Chapter 5
  exam's unseen passage, which rule 22 forbids.)
- **Reading: Text N6** (§5.5): Hit 3, Vīravara at the palace door (कारय, कारितः, क्रियताम्) — 3
  glossed of 31, about 1 in 10 (वर्तनम् is now taught, c03.l05).
- **Previewed:** the causative's participles and passive (◐). **Deferred:** desiderative and
  intensive in production (Volume 5); the causative aorist (अजीजनत्, ◐).
- **Payoff:** class 10 (कथयति, चिन्तयति, भक्षयति) and the causative share one -अय-; the
  Volume 3 double accusatives have their sūtra; Nala's तोषयामास (glossed in the c03.l04
  Teacher Notes) is a causative perfect.
- **Main risk:** the causee's case. Fix: the 1.4.52 list as a two-box sort (motion,
  knowing, eating, sound, intransitive → accusative; the rest → instrumental), with कृ's
  either-or as the boundary case.
- **§17 (serial, ep. 2):** the crocodile: "I will bring you (प्रापयामि, glossed) to my
  house."
- **S0 → next:** +1 day: 8 causatives; +1 week (c05.l04): "Derive, according to Pāṇini, भावयति".

#### v4.c05.l03 — हलन्ताः · "Consonant Stems as One System"

- **lesson_type:** grammar. **review_of:** v4.c05.l02, v4.c02.l01 (strong · pada · bha; the
  rājan example), v4.c04.l01 (गच्छन्), v4.c04.l03 (-मत्, -इन्), v3.c02.l05 (the recurring
  endings card), v3.c02.l01–l04 (numerals nom./acc.), v1.c05.l01 (भवान्).
- **The one grammar point:** consonant stems take the plain endings of the recurring-endings
  card with no change to the endings; what changes is the stem — strong before the five
  sarvanāmasthāna endings (1.1.43, K in c02.l01, now D), the pada stem before consonant endings, the bha
  stem before vowel endings (Chapter 2's three names, now as a declension). The -अत्/-मत्
  stems take a nasal in the strong cells (7.1.70); -मत्/-वत् and भवत् first lengthen their penultimate अ in the nom.
  sg. (6.4.14), before the nasal is added (the derivation's steps 2–3).
- **Forms taught: T11, गच्छत् m. (Whitney §447)**

| Case | Singular | Dual | Plural | Stem |
|---|---|---|---|---|
| प्रथमा | गच्छन् | गच्छन्तौ | गच्छन्तः | strong |
| द्वितीया | गच्छन्तम् | गच्छन्तौ | गच्छतः | strong · strong · bha |
| तृतीया | गच्छता | गच्छद्भ्याम् | गच्छद्भिः | bha · pada · pada |
| चतुर्थी | गच्छते | गच्छद्भ्याम् | गच्छद्भ्यः | |
| पञ्चमी | गच्छतः | गच्छद्भ्याम् | गच्छद्भ्यः | |
| षष्ठी | गच्छतः | गच्छतोः | गच्छताम् | |
| सप्तमी | गच्छति | गच्छतोः | गच्छत्सु | |
| सम्बोधनम् | गच्छन् | गच्छन्तौ | गच्छन्तः | |

  (f. गच्छन्ती, declined like नदी; n. गच्छत्, गच्छन्ती, गच्छन्ति: Whitney §§447–449.)
  Teacher Notes line: the participle of a thematic stem keeps its nasal before the -ई of the
  feminine and of the neuter dual (after शप् and श्यन् always, 7.1.81 शप्श्यनोर्नित्यम्; after
  the class-6 श optionally, तुदती/तुदन्ती, 7.1.80 आच्छीनद्योर्नुम्); an athematic stem has none
  (अदती, रुदती).

  **Δ cards (✓ listed cells):** भगवत् (§453: भगवान्, भगवन्तम्, भगवता, भगवतः; voc. भगवन्);
  बलिन् (§440: बली, बलिनम्, बलिना, बलिभिः, बलिनाम्; = पक्षी, मन्त्री); राजन् (§424: the
  c02.l01 cells + राजानम्, राज्ञः, राज्ञाम्, राजसु; = आत्मन्, and in the oblique cells the neuter जन्मन्, with -मन्- not losing its
  अ after a consonant: आत्मना, Teacher Notes); मनस् (§414: मनः, मनसा, मनसः, मनोभिः, मनसि;
  = यशः, तेजः, सरः; वयः follows in c05.l04, where it is headworded). **Δ cards (◐):** root nouns वाच्/दिश्/सुहृद्/वणिज् (§§385–392;
  वाचा, दिशि, सुहृदा, वणिजः listed ✓); विद्वस् (§461, ◐); जम्बू (ū-stem), सखि, पति (§343),
  neuter मधु/वारि (§§341, 339), the feminine of i/u/ṛ adjectives (लघुः → लघ्वी; कर्ता → कर्त्री, display; its rule, 4.1.5, Teacher Notes), नप्तृ (naptṛ) 'grandson', whose strong cells are vṛddhied like the agent -तृ of c04.l02 (नप्तारम्; Whitney §370; v3.c02.l04's promise), नृ and neuter ṛ (◐).
  **अदस् card (◐; §501):** असौ, अमुम्, अमुना, अमुष्मै, अमुष्मात्, अमुष्य, अमुष्मिन्; अमू; अमी
  (7.2.107 अदस औ सुलोपश्च, K).

  **The numeral card, first half (D11; Whitney §§475–489; listed cells ✓).** Split after the
  critique (G17; V4-D9 amended) so that the lesson carries one productive point, the
  consonant-stem system: here the numerals whose cells are new endings or new stems; the
  second half (5–19, the ordinals and the case names as ordinals, below) is the Station 0
  and §15 work of c05.l04, a Δ drill on this lesson's tables with no new sūtra.

| Numeral | Cells taught (✓) |
|---|---|
| एक | pronominal: एकस्मै, एकस्मात्, एकस्मिन् (owned type) |
| द्वि | द्वौ/द्वे · द्वाभ्याम् · द्वयोः |
| त्रि | m. त्रयः त्रीन् त्रिभिः त्रिभ्यः त्रयाणाम् त्रिषु · f. तिस्रः तिसृभिः तिसृणाम् |
| चतुर् | m. चत्वारः चतुरः चतुर्भिः चतुर्भ्यः चतुर्णाम् (7.1.55) चतुर्षु · f. चतस्रः चतसृणाम् |
| tens, 100, 1000 | विंशतिः त्रिंशत् चत्वारिंशत् पञ्चाशत् षष्टिः सप्ततिः अशीतिः नवतिः शतम् सहस्रम् — nouns, f. (-इः, -अत्) or n.: the -इ ones like मतिः in its owned cells only (nom., acc., instr.; the other f. i-stem cells stay ◐ and are not set) and शतम्, सहस्रम् like फलम् (owned tables); त्रिंशत्, चत्वारिंशत्, पञ्चाशत् like T11's weak cells throughout, with no nasal (त्रिंशता, त्रिंशद्भिः); the counted thing in the genitive or in agreement (Whitney §486) |

- **Sūtras (tiers).** **Q:** none new. **D:** 1.1.43 सुडनपुंसकस्य; 7.1.70 उगिदचां
  सर्वनामस्थानेऽधातोः; 6.4.14 अत्वसन्तस्य चाधातोः; 6.1.68 हल्ङ्याब्भ्यो दीर्घात् सुतिस्यपृक्तं हल्;
  8.2.23 संयोगान्तस्य लोपः; 1.1.47 मिदचोऽन्त्यात्परः; 6.4.8 सर्वनामस्थाने चासम्बुद्धौ; 8.2.7, 6.4.134
  (owned). **K:** 7.1.55 षट्चतुर्भ्यश्च; 7.2.107 अदस औ सुलोपश्च. Tools added: 7.
- **The derivation: गच्छत् + सुँ → गच्छन्** and **भवत् + सुँ → भवान्** (owned since v1.c05.l01)

| Step | गच्छन् | भवान् | Tool |
|---|---|---|---|
| 0 | गच्छत् (शतृ: ṛ-marked, "ugit") + सुँ | भवत् (an उ-marked affix, "ugit") + सुँ | — |
| 1 | सुँ is sarvanāmasthāna (strong) | the same | 1.1.43 |
| 2 | — | -अतु/-अस्-type stem: its penultimate अ lengthened before the nom. sg. सुँ: भवात् — first, while अ is still the penultimate; the Kāśikā on 6.4.14: "अत्र कृते दीर्घे नुमागमः कर्तव्यः" | 6.4.14 |
| 3 | ugit before a strong ending: + नुम्, placed after the last vowel: गच्छन्त् | भवान्त् | 7.1.70; 1.1.47 |
| 4 | a single consonant ending after a consonant is dropped: गच्छन्त्, भवान्त् | | 6.1.68 |
| 5 | a final cluster loses its last consonant: **गच्छन्**, **भवान्** | | 8.2.23 |

  Teacher Notes line: after step 5 the न् of गच्छन्, भवान् is final, yet 8.2.7 does not drop
  it as it does in राजा: 8.2.23 stands later in the last three pādas, so 8.2.7 cannot see its
  result (8.2.1, read in c06.l03).
  The learner derives **भगवान्** (as भवान्) and re-derives **राजा** (6.4.8, 6.1.68, 8.2.7 —
  the c02.l01 display, now ✓).
- **Model sentences:**
  1. भगवान्सर्वं जानाति। (भगवान् सर्वम् जानाति।) "The Blessed One knows all."
  2. बलिना राज्ञा शत्रवो जिताः। (बलिना राज्ञा शत्रवः जिताः।) "The enemies were conquered by
     the mighty king."
  3. विद्वान्सर्वत्र पूज्यते। (विद्वान् सर्वत्र पूज्यते।) "A learned man is honoured
     everywhere." (Pañcatantra 2, Mitrasamprāpti, frame story: the last quarter of a verse whose
     second half is स्वदेशे पूज्यते राजा विद्वान्सर्वत्र पूज्यते — Jha 2.58, `vispancu.htm` line 2977,
     for the research note only; पूज्यते "is honoured" is glossed: the passive of the class-10
     पूजयति, a verb not headworded, beside the owned पूजा)
  4. तस्य यशो महत्। तेजश्च महत्। (तस्य यशः महत्। तेजः च महत्।) "His fame is great, and great
     is his splendour." (Teacher Notes line: two subjects joined by च would take the neuter dual
     महती, Whitney §450, a cell not taught here; hence two clauses, each with the owned n. sg. महत्.)
  5. विंशतिर्वणिजः सहस्रं सुवर्णानि नयन्ति। (विंशतिः वणिजः सहस्रम् सुवर्णानि नयन्ति।) "Twenty
     merchants carry a thousand gold pieces."
  6. चतुर्णां मित्राणां गृहाणि त्रिषु ग्रामेषु सन्ति। (चतुर्णाम् मित्राणाम् गृहाणि त्रिषु ग्रामेषु
     सन्ति।) "The four friends' houses are in three villages." (The base's पञ्चभिः … चतुर्थे
     sentence moves to c05.l04's §15 with the second half of the card.)
- **New headwords (7; 604 → 611):** भगवान् bhagavān m. (stem भगवत्) "the Blessed One; venerable"
  (rule 14; V2's display भगवन् now a cell) · यशः yaśaḥ n. (stem यशस्) "fame" · तेजः tejaḥ n.
  (stem तेजस्) "splendour, energy" · विद्वान् vidvān m./adj. (stem विद्वस्) "learned, wise"
  (Whitney §461: a perfect participle without reduplication; for Pāṇini वसु replacing the
  शतृ of विद् "know" (वेत्ति), 7.1.36, Teacher Notes; ◐ cells) · वणिक् vaṇik m. (stem वणिज्) "merchant" (Hit 2
  वर्धमानो नाम वणिक्) · विंशतिः viṃśatiḥ f. i "twenty" · सहस्रम् sahasram n. a "thousand".
- **Previewed:** the -वांस् and -ईयस् stems (◐); asiddha (8.2.1), named once in the Teacher
  Notes line on why गच्छन्, भवान् keep their न् (c06.l03). **Deferred:** the remaining Δ cells (◐) to
  Volume 5 reading; the numeral derivatives beyond the ordinals (-धा, -शः: Whitney §489,
  Volume 5).
- **Payoff:** भवान्, the course's first respectful "you" (v1.c05.l01), derives itself; R1 and
  R6 close; the rājan example of c02.l01 becomes a declension; Volume 2's counting chant
  (एक … दश) begins to be a paradigm in every case, in its listed cells (द्वि–चतुर् here; पञ्च … दश in c05.l04's §15).
- **Main risk:** too many stems at once (the judges' hot spot). Fix: one memorised table
  (T11) and four Δ cards derived from it in class, 45 minutes being: T11 and its two
  derivations (15), the four ✓ Δ cards (15), the numeral card's first half (6), production
  with the day's cells (4), the ◐ cards read once, as a parse-only list for §15 (5). The ◐
  cards are never drilled, and the exam asks for listed cells only. The numeral card's
  second half and the case names as ordinals are moved to c05.l04 (G17).
- **§17 (serial, ep. 3):** at sea, the crocodile reveals his purpose to "भवान्" (our
  retelling): "मम भार्या भवतो हृदयमिच्छति" — भवान् and भवतः as cells of the day's table.
- **S0 → next:** +1 day (c05.l04): 12 consonant-stem cells, then the numeral card's second
  half (5–19 on the pada cells of the राजन् Δ, षष् apart; the ordinals), carried on into c05.l04's §15; +1 week (c05.l05):
  derive, according to Pāṇini, गच्छन्.

#### v4.c05.l04 — कारकाणि सति सप्तमी च · "The Six Roles, and the Case Outside Them"

- **lesson_type:** grammar. **review_of:** v4.c05.l03 (the full -अत् table), v4.c05.l02
  (hetu; 1.4.51–53), v4.c05.l01 (kartṛ, karman, 2.3.1), v4.c04.l01 (participles), v4.c04.l02
  (the absolutive's same-doer rule), v3.c02.l05 (the roles map), v3.c01.l03 (2.3.16, नमः +
  dative), v3.c01.l02 ("the locative absolute: v4.c05").
- **The one grammar point:** the locative absolute, the case that no kāraka gives, as the
  lesson's one production target; its frame is a card, the kāraka map, which answers "where
  does a case come from?" (TRADITION, assessed only as "According to Pāṇini…", never
  produced). Rebuilt at synthesis so that the kāraka theory is taught in full and not left
  to a line of a card (the pedagogue's and paniniya's finding); restated after the critique
  (G18; V4-D8 amended) so that the lesson is not read as two points: the map is principle
  3's one large card with no production target.
  - A **kāraka** is a participant defined by its part in the action, under the heading 1.4.23
    कारके. Two were met in c05.l01 (kartṛ 1.4.54, karman 1.4.49), the hetu in c05.l02 (1.4.55);
    this lesson completes the six: apādāna (1.4.24), sampradāna (1.4.32), karaṇa (1.4.42),
    adhikaraṇa (1.4.45). Its case follows only where the verb's ending has not expressed it
    (2.3.1 अनभिहिते, c05.l01). The genitive is "the rest" (2.3.50 षष्ठी शेषे): no kāraka.
  - **The speaker's choice (vivakṣā).** One thing can be presented as different kārakas: the
    Kāśikā gives स्थाल्यां पचति, the pot as adhikaraṇa (on 1.4.45), and स्थाली पचति, the pot as
    kartṛ (on 1.4.54). The roles map of v3.c02.l05 ("case ≠ role") was this.
  - **A case from a word, not a role (upapada-vibhakti).** The dative with नमः is given by
    the word नमः (2.3.16, owned since v3.c01.l03). Where a kāraka case and a word's case
    compete, the kāraka case wins: शिष्या गुरुं नमस्कुर्वन्ति (the teacher is the karman of the
    verb: accusative), but गुरवे नमः (dative by 2.3.16). TRADITION, the Paribhāṣenduśekhara's
    उपपदविभक्तेः कारकविभक्तिर्बलीयसी (Paribh. 102, on नमस्करोति देवान्; Teacher Notes for the
    text; adopted from system-first and reader-first).
  - **A locative that is no kāraka: the absolute.** When one action marks the time or the
    condition of another, the noun whose action it is goes in the locative with a participle
    agreeing (2.3.37 यस्य च भावेन भावलक्षणम्); with the sense "in disregard of" the genitive
    is also used (2.3.38 षष्ठी चानादरे, ◐). This is the lesson's production target; the kāraka
    map is its frame.
- **Forms taught.**

  (a) **The kāraka map** (a reference card, not a memorised table: every row is read off an
  owned sentence; adapted from system-first's T16):

| Kāraka | According to Pāṇini (K here; read with the Kāśikā in c06.l01) | Its case, when the ending does not express it | Owned example |
|---|---|---|---|
| अपादानम् | 1.4.24 ध्रुवमपायेऽपादानम् "the fixed point in a departure" | ablative (2.3.28 अपादाने पञ्चमी) | ग्रामादागच्छति (v3.c01.l02) |
| सम्प्रदानम् | 1.4.32 कर्मणा यमभिप्रैति स सम्प्रदानम् "the one aimed at with the object" | dative (2.3.13 चतुर्थी सम्प्रदाने) | बालकाय फलं ददाति (v3.c01.l03) |
| करणम् | 1.4.42 साधकतमं करणम् "the most effective means" | instrumental (2.3.18, c05.l01) | जालेन (v3.c01.l03) |
| अधिकरणम् | 1.4.45 आधारोऽधिकरणम् "the substratum" | locative (2.3.36 सप्तम्यधिकरणे च) | वने (v3.c01.l02); स्थाल्यां पचति |
| कर्म | 1.4.49 (c05.l01) | accusative (2.3.2) | ग्रामं गच्छति (v3.c01.l01) |
| कर्ता, हेतुः | 1.4.54, 1.4.55 (c05.l01, c05.l02) | instrumental (2.3.18); nominative when expressed (2.3.46) | रामेण पठ्यते; स्थाली पचति |
| — (no kāraka) | 2.3.50 षष्ठी शेषे | genitive | राज्ञः पुरुषः |
| — (no kāraka) | 2.3.37 यस्य च भावेन भावलक्षणम् | locative (+ participle) | सूर्ये उदिते — उदित "risen", glossed |

  (b) **The absolute**: the participles of c04.l01 and the full -अत् table of c05.l03 in the
  locative singular and plural (उदिते, glossed "risen"; गते, कृते, गच्छति, वदति, सति, गतेषु, गच्छत्सु); सति
  "being", the locative of सत् (owned since V1 as "being, real"), derived:

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | अस् + लट् → अस् + शतृ | 3.2.124 (D, c04.l01) | the present participle |
| 1 | अस् + अत् | 1.3.2 (the ऋ), 1.3.8 (the श्), 1.3.9 (B) | markers dropped; no class sign (class 2, 2.4.72, K) |
| 2 | स् + अत् | 6.4.111 श्नसोरल्लोपः (D, c03.l03) | शतृ is sārvadhātuka without p → ṅit (1.2.4): the अ of अस् drops |
| 3 | **सत्**; locative **सति** | — | the locative cell of T11 |

  The Kāśikā's own example of 2.3.37 (Teacher Notes; adopted from system-first): गोषु
  दुह्यमानासु गतः, दुग्धास्वागतः "he left while the cows were being milked, and came back
  when they had been milked".

  The genitive absolute (◐), after the Kāśikā's example on 2.3.38 रुदतः प्राव्राजीत्: रुदतः
  पुत्रस्य पिता वनं जगाम "though the son wept, the father went to the forest".

  **The Fillmore note (HISTORY; the 1.x pp. 87–89 asset, kept).** It prints here, because
  both keys exist in REFERENCES.md: in 1968 C. J. Fillmore proposed "deep cases" (semantic
  roles) for modern grammar [REF:fillmore1968]; Kiparsky and Staal (1969) described Pāṇini's
  grammar as a hierarchy of levels with the kārakas between meaning and the case endings
  [REF:kiparskystaal1969]. Nothing is said about influence either way, and the note is not
  assessed.
- **Station 0 and §15: the numeral card, second half** (moved from c05.l03 after the
  critique, G17; V4-D9 amended). Station 0 runs c05.l03's +1-day item, the consonant-stem
  cells, and c05.l02's +1-week item ("Derive, according to Pāṇini, भावयति"); §15 carries on from it with a Δ drill on c05.l03's tables. No sūtra is added, and the
  cells are listed ✓ as before (D11). The 45 minutes: Station 0 (both items) and the numeral Δ
  drill (10), the kāraka map read off owned sentences (10), the absolute and the सति derivation
  (12), model sentences and production (7), N5 and §17 (6). The case names as ordinals and the Fillmore
  note are display only, read in the map's 10 minutes:

| Numeral | Cells taught (✓) |
|---|---|
| पञ्चन्–दशन् | पञ्च · पञ्चभिः · पञ्चभ्यः · पञ्चानाम् · पञ्चसु (पञ्चानाम्: नुट् by 7.1.55, because numerals ending in -ष्, -न् are called "षट्", Teacher Notes: 1.1.24; the -आ- before नाम्, Teacher Notes: 6.4.7; the न् lost by 8.2.7; nom./acc. पञ्च has no ending at all, the bare stem with its न् lost by 8.2.7 (Whitney §483: "no proper plural form, but show the bare stem instead"), so neither पञ्च nor पञ्चानाम् is copied from राजन्; पञ्चभिः पञ्चभ्यः पञ्चसु, n-stems: the pada cells of the राजन् Δ, राजभिः; षष् → षट् षड्भिः षण्णाम् षट्सु, 7.1.55 from c05.l03; अष्टन् → अष्टौ/अष्ट, अष्टाभिः) |
| 11–19 | एकादश द्वादश त्रयोदश चतुर्दश पञ्चदश षोडश सप्तदश अष्टादश नवदश (also ऊनविंशतिः) — declined like पञ्च |
| ordinals | प्रथमः द्वितीयः तृतीयः चतुर्थः पञ्चमः षष्ठः सप्तमः अष्टमः नवमः दशमः (✓, a-stem adjectives on T1–T3; rule 23); एकादशः … विंशः/विंशतितमः (◐) |

  **The case names are ordinals** (adopted from system-first; it sits here, beside the card
  that says where a case comes from). प्रथमा, द्वितीया … सप्तमी, the names the learner has used
  since v3.c01, are the feminine ordinals ("the first [vibhakti]" …). Why -आ in प्रथमा,
  द्वितीया, तृतीया but -ई in चतुर्थी … सप्तमी: an a-stem adjective makes its feminine in -आ
  (4.1.4 अजाद्यतष्टाप्, owned D from c04.l03), but ordinals in -थ and -म take -ई (4.1.15: the
  ordinal affix डट् is ṭ-marked; Whitney §487h: "prathamá …, dvitī́ya, tṛtī́ya, and turī́ya …
  form their feminine in ā; all the rest make it in ī"; Teacher Notes for the sūtra).
  Display; only the forms are ✓. §15's sentence: पञ्चभिर्मित्रैः सह चतुर्थे दिने गमिष्यामि।
  (पञ्चभिः मित्रैः सह चतुर्थे दिने गमिष्यामि।) "I shall go with five friends on the fourth day."
- **Sūtras (tiers).** **Q:** 2.3.37 यस्य च भावेन भावलक्षणम्. **D:** 1.4.23 कारके; 2.3.38 षष्ठी
  चानादरे; 3.2.124, 6.4.111 (owned). **K:** 1.4.24 ध्रुवमपायेऽपादानम्; 1.4.32 कर्मणा यमभिप्रैति स
  सम्प्रदानम्; 1.4.42 साधकतमं करणम्; 1.4.45 आधारोऽधिकरणम्; 2.3.28 अपादाने पञ्चमी; 2.3.13 चतुर्थी
  सम्प्रदाने; 2.3.36 सप्तम्यधिकरणे च; 2.3.50 षष्ठी शेषे. Tools added: 3 (+ 8 on the card).
- **Model sentences:**
  1. सूर्य उदिते पक्षिणः कूजन्ति। (सूर्ये उदिते पक्षिणः कूजन्ति।) "When the sun has risen, the
     birds sing." (उदिते glossed "risen": the -त of उद् + एति, c03.l03 and the upasarga card; the prefixed verb उदेति is not headworded)
  2. एवं सति किं करिष्यामः? (एवम् सति किम् करिष्यामः?) "This being so, what shall we do?"
  3. गुरौ वदति शिष्याः शृण्वन्ति। (गुरौ वदति शिष्याः शृण्वन्ति।) "While the teacher speaks,
     the students listen."
  4. सूर्येऽस्तं गते पान्थो ग्रामं प्राविशत्। (सूर्ये अस्तम् गते पान्थः ग्रामम् प्राविशत्।) "When
     the sun had set, the traveller entered the village."
  5. स्त्री स्थाल्यां भोजनं पचति; स्थाली पचतीत्यपि वक्तुं शक्यम्। (स्त्री स्थाल्याम् भोजनम् पचति;
     स्थाली पचति इति अपि वक्तुम् शक्यम्।) "The woman cooks food in a pot; one may also say 'the pot
     cooks'."
  6. शिष्या गुरुं नमस्कुर्वन्ति, गुरवे नमः। (शिष्याः गुरुम् नमस्कुर्वन्ति, गुरवे नमः।) "The pupils
     bow to the teacher: homage to the teacher." (नमस् + कृ, a gati compound: the स् by 8.3.40,
     Teacher Notes)
- **New headwords (6; 611 → 617):** अस्तम् astam (indecl., with गच्छति, इ) "setting; home"
  (Hit 1.4 रविरस्तं गमिष्यति) · वयः vayaḥ n. (stem वयस्) "age; youth" (rule 14; MBh वयसि
  प्राप्ते, N5) · रोदिति roditi "weeps" (class 2, -इ- by 7.2.76 like स्वपिति; the Kāśikā's रुदतः
  on 2.3.38; the Vīravara thread; it also occurs in X-a, §5.8) · आश्चर्यम् āścaryam n. a
  "wonder, surprise" (Hit 6 DCS tokens; Hit 3 साश्चर्यम्; also in X-a, §5.8) · स्त्री strī f.
  "woman, wife" (irregular ī-stem: स्त्रियम्/स्त्रीम्, स्त्रिया, स्त्रियाः, Whitney §366, listed
  cells ◐; Hit 24 DCS tokens, rule 22) · स्थाली sthālī f. ī "pot, cooking pot" (the Kāśikā's
  example on 1.4.45 and 1.4.54; MW).
- **Reading: Text N5** (§5.4): Panc 4 "तथानुष्ठितेऽगाधे जलधौ गच्छन्तं मकरमालोक्य
  भयत्रस्तमना वानरः प्रोवाच" (2 glossed of 10: अनुतिष्ठति and भयम् are now taught) and MBh
  3.50.11a अथ तां वयसि प्राप्ते (0 of 4; "then, (her) youth having come, … her": वयसि प्राप्ते
  is the absolute, and तां is the object of the next quarter's पर्युपास्ते "attended", which the
  gloss line names; re-verified in
  GRETIL `mbh_03_u.htm`, 03,050.011a), the epic line printed as a verse quarter with its
  locus.
- **Previewed:** none. **Deferred:** the genitive absolute in production (◐ to Volume 5); the
  kāraka sūtras read with their commentary (c06.l01); the further case rules of 2.3 (Teacher
  Notes: 2.3.12, 2.3.47; the Volume 3 Teacher-Notes list, §4.0.6).
- **Payoff:** सत् (V1's "being") is a participle of अस्ति; एवं सति, a phrase of every
  narrative chapter, is parsed; Volume 3's "locative absolute (v4.c05)" deferral closes; the
  roles map of v3.c02.l05 is set beside Pāṇini's definitions; नमः + dative (v3.c01.l03)
  turns out to be the one case in the learner's first sentences that no role gives.
- **Main risk:** (1) every locative + participle read as place. Fix: the "when / since /
  while" question and the "different doer" check (the absolutive task's mirror). (2) the
  kāraka names learned as six more case names. Fix: the स्थाली pair, and a sort of six owned
  sentences by kāraka and by case, in two columns that do not always match.
- **§17 (serial, ep. 4, last):** a different-doer absolute, as the lesson teaches it:
  "मकरे समुद्रमध्यं गते वानरोऽचिन्तयत्…" (मकरे समुद्रमध्यम् गते वानरः अचिन्तयत्; "when the
  crocodile had gone into mid-ocean, the monkey thought …"); then "तस्मिन्समुद्रमध्ये गच्छति
  वानरस्तूष्णीमभवत्" (तस्मिन् समुद्र-मध्ये गच्छति वानरः तूष्णीम् अभवत्; the monkey silent while
  the crocodile swims on; तूष्णीम् glossed). The trick ("भगवन्! मम हृदयं तु वृक्षे तिष्ठति…") is **not printed**: the
  serial never tells it (§1.5); the original continues in c05.l05.
- **S0 → next:** +1 day (c05.l05): 5 absolute pairs; +1 week (c06.l01): the kāraka map,
  "According to Pāṇini…".

#### v4.c05.l05 — पञ्चमपरीक्षा · "Chapter 5 Exam"

- **lesson_type:** review. **review_of:** v4.c05.l01–l04, v4.c04.l05.
- **Assembly (§15):** the voice map (who the ending names → which cases fall where); the
  causee box; the consonant-stem system with T11 and its Δ cards; the numeral card; the
  kāraka map with the absolute; toolbox card (160 tools: 131 + Chapter 5's 29, i.e. 11 + 8 +
  7 + 3).
- **Exam:** chapter shape (45 min). Ledger stays 617. **Spiral:** "Derive, according to
  Pāṇini, …" Chapter 4's item (कृतम्) and Chapter 3's (शृणोति / शृण्वन्ति); the thread verse सर्वे भवन्तु सुखिनः… (सुखिनः now a
  strong cell of the -इन् stem: the nom. pl. is a sarvanāmasthāna ending, 1.1.43; the -इन्
  stem keeps -इन्- in its strong and bha cells and drops the न् in the pada cells, बलिभिः
  by 8.2.7, Whitney §440).
- **Payoff:** the original of the serial's untold ending — the monkey's trick (N7, unseen),
  read with about 1 gloss in 5.2 (6 of 31; अर्पयामि is glossed, rule 22).
- **Main risk:** E's passage has a dative read as a genitive (भ्रातृपत्न्या अर्पयामि = पत्न्यै
  + अर्पयामि, a seam of 6.1.78 + the य् dropped before a vowel, as in सूर्य उदिते; the sūtra,
  8.3.19, is read in c06.l03); the gloss line names the seam.
- **S0 → next:** +1 day (c06.l01): passive ↔ active; +1 week (c06.l02): the causee box.

---
### 4.6 Chapter 6 — सूत्रपाठः · Reading Real Sūtras

**Goals.**
- Read a sūtra as the tradition reads it: words, cases, the anuvṛtti supplied, the vṛtti's
  paraphrase, its example and its counter-example ("X इति किम्?").
- Read the three kinds in turn (re-cut at synthesis, after reader-first): definitions
  (saṃjñā, l01), operations (vidhi, l02, with a prakriyā in the Laghusiddhāntakaumudī's own
  words), rules about rules (paribhāṣā, l03).
- Apply the three meta-rules of the 1.x book.
- Then, at the exam, derive भवति from the toolbox card, read two unseen sūtras, and read two
  unseen narrative passages.

**Grammar inventory (exact).**
- **The vṛtti's anatomy and the "Kāśikā kit"** (adopted from reader-first): the five moves
  (c06.l01) and the commentator's formulas, taught as chunks, not counted (rule 21): इति वर्तते
  / इत्यनुवर्तते "… continues (from above)"; इत्यधिकारो वेदितव्यः "… is to be understood as a
  heading"; … संज्ञं भवति "… is called …"; … परतः "when … follows"; … स्थाने "in place of …";
  X इति किम्? "why the word X?"; इत्येवमादयः "and so on"; … इत्यर्थः "that is the meaning".
- **saṃjñā (l01):** the kāraka prakaraṇa, 1.4.23, 24, 32, 42, 45, 49, 54, with Kāśikā lines,
  including two of its "इति किम्" tests (on 1.4.42 and 1.4.49).
- **vidhi (l02):** 8.4.1 and 8.4.2 (IR-016: 8.4.1–2 "may be read as sūtras in v4.c06",
  Volume 3 §6); 7.3.84; the LSK prakriyā of बभूव, VLk 393–401, P 3.2.115 … 8.4.54
  (`varlghku.htm`); and, as review, 1.2.4 with its Kāśikā line (the c03.l03 promise).
- **paribhāṣā (l03):** 1.4.2, 1.1.56, 8.2.1 with 8.2.2. Kāśikā lines on 1.4.2, 1.1.56 (with
  its अस्तेर्भूः / ब्रुवो वचिः examples), 8.2.1 (with its व्/य्-lopa examples), 8.2.2, 7.3.102,
  7.3.103.
- **The data file as a map (c06.l01; adopted from system-first, with paniniya's caution):**
  the sūtrapāṭha the course checks against has 3,983 records, 351 · 268 · 631 · 635 · 555 ·
  736 · 438 · 369 in the eight books; the file tags 200 records as saṃjñā, 24 as paribhāṣā,
  73 as adhikāra, 69 as atideśa and 3,629 as vidhi. The kinds sum to 3,995: 12 records carry
  two different kinds (e.g. 1.4.23 कारके, saṃjñā and adhikāra), and 85 carry more than one
  tag entry (78 two, 7 three), many of them of the same kind. These are
  the file's labels, counted by script, not the tradition's classification (the file calls
  1.1.69 a vidhi; the LSK reads it as a definition). HISTORY/FACT, never assessed.
- **The unseen sūtras of the exam:** 6.1.97 अतो गुणे and 3.1.133 ण्वुल्तृचौ, each with its
  Kāśikā line.

**Volume 3 §6 row carried:** the 1.x meta-rules (8.2.1, 1.1.56, 1.4.2); sūtra reading word
by word → l03, l01, l02. **1.x assets carried:**
- the meta-rules (pp.115–117) → l03;
- "Read a Real Sūtra" (pp.130–134), expanded to a chapter → l01–l03.

**Spelling rule for commentary text.** The Kāśikā and LSK lines are printed in Devanagari
from the GRETIL IAST, with the e-text's evident typos corrected, each listed in Teacher
Notes (the Volume 3 decision 1 rule): *uttarasy* → *uttarasya* (8.4.1); *āgachhati* →
*āgacchati* (1.4.24); *vkṛkṣebhyaḥ* → *vṛkṣebhyaḥ* (7.3.103); *kārakṃ … bhavti* → *kārakaṃ
… bhavati* (1.4.54); *kartrur* → *kartur* (1.4.49 heading); *ghūtānadyatana … dhātḥ* →
*bhūtānadyatana … dhātoḥ* (3.2.115); and, from reader-first's list, Māheśvara sūtra 11
*kha pha dha ḍha tha* → *kha pha cha ṭha tha*; *ekenauran rapraḥ* → *ekena uraṇ raparaḥ* (on
sūtra 1); *akramakebhyaḥ* → *akarmakebhyaḥ* (3.4.69); *kartuṛkayoḥ* → *kartṛkayoḥ* (3.4.21
heading); *vartamanād* → *vartamānād* (3.2.123). Added after the critique (G44), found by
the script below: *śasiddhatvāt* → *asiddhatvāt* (8.2.1); *sakramakebhyo* → *sakarmakebhyo*
(3.4.69); *tamab-grahanam* → *tamab-grahaṇam* (1.4.42); *ādhārah* → *ādhāraḥ* (1.4.45);
*rephaṣākārabhyām* → *rephaṣakārābhyām* (8.4.2); *apadantāt* → *apadāntāt* and *sthane* →
*sthāne* (6.1.97); *vahiraṅgeṣu* → *bahiraṅgeṣu* (1.4.2, the limit line); LSK *abhyāsatyāco* → *abhyāsasyāco* (VLk 399)
and *babhuvatuḥ* → *babhūvatuḥ* (VLk 401); Kāśikā *anubandhakaraṇasāmarthyat* → *anubandhakaraṇasāmarthyāt* (6.4.143, c04.l04); Hitopadeśa *bho bho panthāḥ* → *bho bhoḥ pānthāḥ* (N3a: the
second भोः keeps its visarga before p);
Pañcatantra *marakam* → *makaram* (N5); Mahābhāṣya *proyojanam* → *prayojanam* (Paspaśāhnika, c02.l01 §17). LSK e-text sūtra labels, corrected from the data file: VLk 9 "P_1,2.8" → 1.1.8, VLk 10 "P_1,1.8" → 1.1.9, VLk 12 "P_1,1.109" → 1.4.109. The joins the course makes where the e-text prints
the words apart are listed with them: *tat śrutvā* → तच्छ्रुत्वा (N1), *bhāgyena etat* →
भाग्येनैतत् (N3a), beside the ones §5 already records (पान्थेनालोचितम्, काकेनोक्तम्, मृगस्तत्र),
and the Kāśikā e-text's split joins (*eva-ikaṃ*, *ca-apratyayaḥ* on लण्), printed joined.
**Method:** `research/evidence/vol4-plan/work/etdiff.py` transliterates each e-text with `research/evidence/vol4-plan/tools/i2d.py`, normalises
both sides (spaces, a nasal before a consonant, a vowel join) and aligns every commentary and
narrative line printed in this plan against its e-text locus (`research/evidence/vol4-plan/work/passages.tsv`, 60
passages; the Kāśikā lines added at the plan review, among them those on 1.2.4, 6.1.77, 6.4.14, 6.4.143, 7.2.76 and 8.2.1's व्/य् examples, are not yet in that file: they were checked by hand against `jvkasipu.htm`, and the c06 fact base adds them); the list above is its whole output apart from ellipses and the course's own
joins. The c06 fact base re-runs it on every line it adds, and Teacher Notes print the full
list.

**The Volume 4 exam (l04): two sittings of 45 minutes.**

*Sitting 1, derivation and sūtras.*
- **A** — the fourteen sūtras and six pratyāhāras (5 min).
- **B** — two unseen sūtras with their Kāśikā lines (12 min):
  - 6.1.97 अतो गुणे: case-code it; say what is carried (अपदान्तात्, 6.1.96; पररूपम्, 6.1.94;
    अचि, 6.1.77: the data file carries all three, the Kāśikā names the first, and without
    पररूपम् the sūtra has no result); explain, according to Pāṇini, भवन्ति (भव + अन्ति →
    भवन्ति) and पचन्ति;
  - 3.1.133 ण्वुल्तृचौ (adopted from reader-first): Kāśikā "धातोः इति वर्तते। सर्वधातुभ्यो
    ण्वुल्तृचौ प्रत्ययौ भवतः। कारकः। कर्ता।"; from the two affixes' markers, say why कर्ता
    has guṇa and कारकः vṛddhi (the c03.l03 evidence table and 7.2.115; वु → अक by 7.1.1
    युवोरनाकौ, glossed), and predict हारकः, हर्ता from हरति.
- **C** — **"Derive, according to Pāṇini, भू → भवति", from the toolbox card** (20 min; the
  answer key is §4.6.1).
- **D** — "According to Pāṇini…" (8 min; the task C toolbox card is collected first): five items
  on kāraka and the meta-rules; then five sūtras given by number (from the 26 of B and the 28
  of Volume 3), the gist of each to be written.

*Sitting 2, reading and composition.*
- **E** — two unseen passages (§5.8), 95 words: X-a, the end of the Vīravara thread (Hit 3,
  Vīravara's report and the king's wonder; 3 glossed of 32), and X-b, a Hitopadeśa story the
  course has not read (Hit 1, the deer, the jackal and the field; adopted from system-first's
  R4; 10 glossed of 63). Answer eight questions and parse every ✓ verb form; the ◐ forms (चिन्तयामास, ब्रूते, the -य gerundive अदृश्या)
  and the glossed योजिताः, त्रातुम् are named in the margin and never scored (25 min).
- **F** — composition (15 min). The learner writes an eight-sentence story with at least:
  - one perfect, one future and one passive;
  - one causative with its causee;
  - one absolutive chain and one locative absolute.
  It is written joined with its pause form, then read aloud.
- **G** — the register sort (5 min; adopted from system-first): eight statements about the
  grammar sorted into FACT, TRADITION, HISTORY, legend and banned claim (e.g. "the perfect is
  the past not witnessed" — TRADITION; "Whitney counts eight aorists in the Hitopadeśa" —
  FACT; "the Kāśikā is of c. the 7th c. CE" — HISTORY; "the sounds came from Śiva's drum" —
  legend; and one banned claim, printed only as a quoted, sourced 1.x error: "The 1.x book
  wrote: '5,000-year-old grammar — the most scientific linguistic system ever created'
  (p. 69)" — banned claim, documented error; re-found in `Sanskritam-Curriculum.pdf` with
  pdftotext at the critique).

Passing gates Volume 5.

**What "from the toolbox card" means in task C** (the base design's "unaided"; the ROADMAP's
"done by the learner").
- The learner has the **toolbox card**: 60 sūtras, text and an English line each,
  printed in number order and not grouped by derivation. Among them are the 26 the
  derivation needs (§4.6.1) and 34 others the volume used. Nothing else is allowed
  (no notes, no step prompts, no derivation of भवति ever printed whole before this task).
- The task tests choosing and ordering the tools, not recalling numbers. The 26 numbers are
  asked for by heart only in task D's short items and at Station 0 (exit can-do 14).
- Scoring: each of the 26 sūtras correctly placed, 1 point (right string, right tool); the
  order, 4 points; 26 + 4 = 30, pass at 21. (The answer key has 19 rows, §4.6.1; the learner's
  table may merge or split them, and the 26 sūtras are what is scored.) The card prints the numbers (§7.3 Q9, option (a)).

#### v4.c06.l01 — संज्ञा · "Reading a Definition with Its Commentary"

- **lesson_type:** reading. **Station 0:** v4.c05.l05's +1 day; v4.c05.l04's +1 week.
  **review_of:** v4.c05.l05, v4.c05.l04 (the kāraka map), v4.c05.l01 (1.4.49, 1.4.54),
  v3.c02.l05 (the roles map), v4.c02.l03 (anuvṛtti; the data file's bracket line).
- **The one grammar point:** a vṛtti reads a sūtra in five moves, shown on the sūtras that
  name things (saṃjñā):
  1. It restores the sūtra's words in full (with their cases).
  2. It supplies what is carried from above (anuvṛtti, adhikāra): here 1.4.23 कारके, "to be
     understood as a heading" (कारके इत्यधिकारो वेदितव्यः).
  3. It restates the rule in plain Sanskrit: "… तत् कारकम् X-संज्ञं भवति".
  4. It gives examples (उदाहरणम्).
  5. It tests a word of the sūtra with a counter-example ("X इति किम्?", "why the word X?"):
     the case that the word excludes.
  From this lesson on, the data file's bracket line (§1.4.3) is withdrawn: the learner
  supplies the carried words, then checks them against the vṛtti.
- **The text — the kāraka prakaraṇa (Kāśikā; each line verified):**

| Sūtra | Kāśikā line read (definition + example) | Owned link |
|---|---|---|
| 1.4.23 कारके | कारके इत्यधिकारो वेदितव्यः। | the heading |
| 1.4.24 ध्रुवमपायेऽपादानम् | ध्रुवं यदपाययुक्तमपाये साध्ये यदवधिभूतं तत्कारकमपादानसंज्ञं भवति। ग्रामादागच्छति। पर्वतादवरोहति। | ग्रामात् (v3.c01.l02) |
| 1.4.32 कर्मणा यमभिप्रैति स सम्प्रदानम् | कर्मणा करणभूतेन कर्ता यमभिप्रैति तत्कारकं सम्प्रदानसंज्ञं भवति। … उपाध्यायाय गां ददाति। | बालकाय फलं ददाति (v3.c01.l03) |
| 1.4.42 साधकतमं करणम् | क्रियासिद्धौ यत्प्रकृष्टोपकारकं विवक्षितं तत्साधकतमं कारकं करणसंज्ञं भवति। दात्रेण लुनाति। परशुना छिनत्ति। तमब्ग्रहणं किम्? गङ्गायां घोषः। | जालेन (v3.c01.l03) |
| 1.4.45 आधारोऽधिकरणम् | … कर्तृकर्मणोः क्रियाश्रयभूतयोः धारणक्रियां प्रति य आधारः तत्कारकमधिकरणसंज्ञं भवति। कटे आस्ते। … स्थाल्यां पचति। | वने (v3.c01.l02); स्थाल्यां पचति (c05.l04); कटे आस्ते is the e-text's word division, a departure from full sandhi noted per Volume 3 §1.4: by the owned hiatus rule it joins as कट आस्ते (Whitney §133) |
| 1.4.49 कर्तुरीप्सिततमं कर्म | कर्तुः क्रियया यदाप्तुमिष्टतमं तत्कारकं कर्मसंज्ञं भवति। कटं करोति। ग्रामं गच्छति। कर्तुः इति किम्? माषेष्वश्वं बध्नाति। | ग्रामं गच्छति (v3.c01.l01) |
| 1.4.54 स्वतन्त्रः कर्ता | स्वतन्त्र इति प्रधानभूत उच्यते। … तत्कारकं कर्तृसंज्ञं भवति। देवदत्तः पचति। स्थाली पचति। | पचति (c03.l01); स्थाली पचति (c05.l04) |

  - Move 5 twice: on 1.4.42, "why the superlative -तम?" — गङ्गायां घोषः "the herdsmen's
    village on the Ganges" (the river is a location, not the most effective means); on 1.4.49,
    "why 'of the agent'?" — माषेष्वश्वं बध्नाति "he ties the horse among the beans": the beans
    are what the *horse* wants, not the agent (Kāśikā: कर्मण ईप्सिता माषाः, न कर्तुः). Both
    glossed.
  - Glossed: दात्रेण "with a sickle", लुनाति "cuts", आस्ते "sits", अवरोहति "descends", गङ्गायाम्,
    घोषः, माषेषु, अश्वम्, बध्नाति, देवदत्तः (the grammarians' stock name, display). परशुना,
    कटे, उपाध्यायाय are this lesson's headwords (the Kāśikā's stock examples; adopted from
    reader-first, three of its eight).
  - One TRADITION line, with its key: according to Pāṇini, a kāraka is defined by its part
    in the action (1.4.23 ff.), and the case follows by 2.3.1 अनभिहिते (c05.l01); that is the
    tradition's account of Volume 3's "case ≠ role" [REF:kashika]. (Who designed it and when
    is HISTORY and is not stated here.)
  - The data file as a map (the counts above), shown once, with the caution that its tags are
    the file's.
- **Sūtras (tiers).** **Q:** none new. **R:** 1.4.24, 1.4.32, 1.4.42, 1.4.45 (K since c05.l04,
  now read), 1.4.23 (D since c05.l04), and 1.4.49, 1.4.54 (Q since c05.l01). In the derive-it-yourself item: **D:** 7.1.12 (since c02.l03). **K:**
  2.3.28 (since c05.l04). **Re-read (owned):** 6.1.101, 8.2.39 (V3). Tools added: 0 (the
  lesson adds reading, not rules).
- **The derivation of the day:** none new. The learner labels the kārakas of six owned
  sentences and checks each label against its Kāśikā line. The "derive it yourself" item
  (principle 7), with owned tools only: "Derive, according to Pāṇini, ग्रामाद् in
  ग्रामादागच्छति": the apādāna (1.4.24, R) takes the pañcamī (2.3.28, K); ग्राम + ङसि (4.1.2,
  owned picture) → ग्राम + आत् (7.1.12, D) → ग्रामात् (6.1.101, owned) → **ग्रामाद्** before
  the आ of आगच्छति (8.2.39 झलां जशोऽन्ते, owned).
- **Model sentences:**
  1. कारक इत्यधिकारः। (कारके इति अधिकारः।) "'kārake' is a heading."
  2. ग्रामादागच्छतीत्यत्र ग्रामोऽपादानम्। (ग्रामात् आगच्छति इति अत्र ग्रामः अपादानम्।) "In
     'grāmād āgacchati' the village is the apādāna."
  3. उपाध्यायाय गां ददातीत्यत्रोपाध्यायः सम्प्रदानम्। (उपाध्यायाय गाम् ददाति इति अत्र उपाध्यायः
     सम्प्रदानम्।) "In 'he gives the teacher a cow' the teacher is the sampradāna."
  4. परशुना वृक्षं छिनत्ति, कटे चास्ते। (परशुना वृक्षम् छिनत्ति, कटे च आस्ते।) "He cuts the
     tree with an axe and sits on a mat." (छिनत्ति, आस्ते glossed)
  5. वृत्तिः सूत्रस्यार्थं कथयति। (वृत्तिः सूत्रस्य अर्थम् कथयति।) "The vṛtti tells the sūtra's
     meaning." (वृत्तिः is c06.l02's headword: a labelled preview, glossed)
- **New headwords (4; 617 → 621):** गौः gauḥ f./m. (stem गो) "cow; ox" (rule 14; the Kāśikā's गाम्; Whitney §361
  for the cells, ◐) · उपाध्यायः upādhyāyaḥ m. a "teacher" (the Kāśikā's 1.4.32 example; MW) ·
  परशुः paraśuḥ m. u "axe" (the Kāśikā's 1.4.42 example) · कटः kaṭaḥ m. a "mat" (the Kāśikā's
  1.4.45 and 1.4.49 examples).
- **Previewed:** वृत्तिः (c06.l02). **Deferred:** the remaining kāraka sūtras of 1.4.23–55
  (Teacher Notes, the §4.0.6 list).
- **Payoff:**
  - The roles map of v3.c02.l05 and the kāraka lesson of c05.l04 read as Pāṇini wrote them.
  - The Kāśikā's own examples turn out to be sentences the learner has said: ग्रामादागच्छति
    and ग्रामं गच्छति since Volume 3, स्थाली पचति since c05.l04.
- **Main risk:** the long Kāśikā lines. Fix: each is pre-taught in the case code, and only
  the definition clause and the example are assessed.
- **§17 (grammarians, 3):** the Kāśikā, its two authors and its date ("c. 7th c. CE",
  [REF:kashika]), described as "a running commentary on the whole Aṣṭādhyāyī, and the one
  this course reads" (no superlative; Q4).
- **S0 → next:** +1 day: the six definitions matched to examples; +1 week (c06.l03): map one
  definition's vṛtti to its sūtra, move by move.

#### v4.c06.l02 — विधिः · "Reading an Operation, and a Derivation in the Tradition's Words"

- **lesson_type:** reading. **review_of:** v4.c06.l01, v4.c02.l03 (8.4.1–2; anuvṛtti),
  v4.c03.l02 (7.3.84), v4.c03.l03 (the Kāśikā's कुरुतः कुर्वन्ति on 1.2.4), v4.c03.l04 (बभूव).
- **The one grammar point:** an operation rule (vidhi) is read with the same five moves, and
  the vṛtti names what is replaced, by what and where (the case code of c01.l03 in the
  commentator's words: स्थाने, आदेशो भवति, परतः). A prakriyā in the Laghusiddhāntakaumudī is
  the same machine run in the order of the derivation, not of the Aṣṭādhyāyī.
- **The texts (verified):**

  (a) **8.4.1 रषाभ्यां नो णः समानपदे.** Kāśikā: रेफषकाराभ्यामुत्तरस्य नकारस्य णकारादेशो
  भवति, समानपदस्थौ चेन्निमित्तनिमित्तिनौ भवतः। आस्तीर्णम्। विशीर्णम्। अवगूर्णम्। षकारात् —
  कुष्णाति। पुष्णाति। मुष्णाति। … समानपदे इति किम्? अग्निर्नयति।
  - Moves 1–5 marked.
  - The counter-example अग्निर्नयति: र and न are in two words.
  - The learner's own रामेण passes the test; the Volume 3 "no-trigger" column fails it.

  (b) **8.4.2 अट्कुप्वाङ्नुम्व्यवायेऽपि.** Kāśikā: अट् कु पु आङ् नुम् इत्येतैर्व्यवायेऽपि
  रेफषकाराभ्यामुत्तरस्य नकारस्य णकारादेशो भवति। अड्व्यवाये तावत् — करणम्। हरणम्। किरिणा।
  गिरिणा। कुरुणा। गुरुणा। कवर्गव्यवाये — अर्केण। मूर्खेण। गर्गेण। …
  - The carried words, which c02.l03 printed in brackets from the data file, are here written
    out by the commentator.
  - गुरुणा is owned (the u-stem instrumental of v3.c02.l03), मूर्खेण is c04.l01's headword,
    and करणम् is owned (Volume 3's kāraka name). हरणम् "taking away" is हरति's ल्युट् noun:
    display, because the c03.l03 card shows ल्युट् only as display (○), not as a taught formation.
  - Glossed (the Kāśikā's other examples in (a)–(c); never counted, rule 21; MW): आस्तीर्णम्
    "strewn", विशीर्णम् "scattered, shattered", अवगूर्णम् "threatened", कुष्णाति "tears",
    पुष्णाति "nourishes", मुष्णाति "steals"; किरिणा "by a hog", गिरिणा "by a mountain", कुरुणा "by
    Kuru", अर्केण "by the sun", गर्गेण "by Garga" (a sage's name, display); चेता "gatherer" (√चि),
    स्तोता "praiser" (√स्तु).

  (c) **7.3.84 सार्वधातुकार्धधातुकयोः.** Kāśikā: सार्वधातुके आर्धधातुके च प्रत्यये परत
  इगन्तस्याङ्गस्य गुणो भवति। तरति। नयति। भवति। आर्धधातुके — कर्ता। चेता। स्तोता।
  - The words **इगन्तस्य** ("ending in ik") and **गुणः** are not in the sūtra: the vṛtti
    supplies them from 1.1.3 इको गुणवृद्धी (a paribhāṣā) and from 7.3.82 मिदेर्गुणः, printed with its number (the anuvṛtti of
    गुणः; a D tool of this lesson).
  - The examples: तरति and नयति, which the learner derived in c03.l02; कर्ता, made in c04.l02;
    and भवति, named and not yet derived step by step (§1.5).

  (d) **The LSK on बभूव (VLk 393–401; `varlghku.htm`):**
  - The text read: परोक्षे लिट् (3.2.115) … परस्मैपदानां णलतुसुस्थलथुसणल्वमाः (3.4.82) … भू अ इति स्थिते — भुवो वुग्लुङ्लिटोः (6.4.88) …
    लिटि धातोरनभ्यासस्य (6.1.8) … भूव् भूव् अ इति स्थिते — पूर्वोऽभ्यासः (6.1.4) … हलादिः शेषः
    (7.4.60) … इति वलोपः। ह्रस्वः (7.4.59)। भवतेरः (7.4.73)। अभ्यासे चर्च (8.4.54) … बभूव।
    बभूवतुः। बभूवुः।
  - The new tools: वुक् (an augment: k-marked, so placed at the end, 1.1.46, owned); पूर्वो
    ऽभ्यासः; भवतेरः. And why there is no guṇa or vṛddhi in बभूव: 1.2.6 (K since c03.l04).
  - The learner writes the derivation as a table (§1.4.2) and compares it with the LSK's
    order. Point of honesty: the LSK adds वुक् *before* doubling. The order matters, and the
    tradition argues for it (Teacher Notes).

  (e) **Review: 1.2.4 सार्वधातुकमपित्** (the c03.l03 promise). Kāśikā: सार्वधातुकं यदपित्
  तन्ङिद्वद्भवति। कुरुतः। कुर्वन्ति। चिनुतः। चिन्वन्ति। … अपित् इति किम्? करोति। करोषि। करोमि।
  - The vṛtti supplies the carried word ङित् (from 1.2.1; Teacher Notes) as ङिद्वत्, and its
    counter-example is the learner's own करोति. चिनुतः, चिन्वन्ति (of चिनोति "gathers", class 5;
    glossed, not a headword) are checked against शृणुतः, शृण्वन्ति of c03.l03.
- **Sūtras (tiers).** **Q:** none new. **R:** 8.4.1 (Q since c02.l03), 8.4.2 (D since
  c02.l03), 7.3.84 (B since c03.l02); in the LSK passage 3.2.115 (Q), 3.4.82, 6.1.8, 7.4.60,
  7.4.59, 8.4.54 (D/K since c03.l04); 1.2.4 (Q since c03.l03). **D:** 7.3.82 मिदेर्गुणः, printed with its number and text: the source of
  गुणः's anuvṛtti; 6.4.88 भुवो वुग्लुङ्लिटोः; 6.1.4 पूर्वोऽभ्यासः; 7.4.73 भवतेरः; and 1.1.46 (since c02.l02). **K:** 1.2.6 (since c03.l04: why बभूव has no guṇa or vṛddhi). Tools added: 4.
- **The derivations of the day:** बभूव (with the LSK). The learner also checks two owned
  derivations against the vṛtti (रामेण against 8.4.1–2; नयति against 7.3.84). That is the
  vṛtti's own use.
- **Model sentences:**
  1. उदाहरणं तरति नयति भवतीति। (उदाहरणम् तरति नयति भवति इति।) "The examples are tarati,
     nayati, bhavati."
  2. समानपदे इति किम्? अग्निर्नयति। (समानपदे इति किम्? अग्निः नयति।) "Why 'in the same
     word'? agnir nayati."
  3. अनुवृत्तिं विना सूत्रस्यार्थो न ज्ञायते। (अनुवृत्तिम् विना सूत्रस्य अर्थः न ज्ञायते।)
     "Without the anuvṛtti a sūtra's meaning is not known."
  4. गुरुणेत्यत्रोकारो रेफस्य नकारस्य च मध्ये। (गुरुणा इति अत्र उकारः रेफस्य नकारस्य च मध्ये।) "In
     guruṇā the u is between the r and the n."
  5. बभूवेति रूपे वुगागमः। (बभूव इति रूपे वुक्-आगमः।) "In the form babhūva there is the
     augment vuk."
  6. प्रकरणं क्रमेण पठ्यते। (प्रकरणम् क्रमेण पठ्यते।) "A prakaraṇa is read in order."
- **New headwords (3; 621 → 624):** वृत्तिः vṛttiḥ f. i "commentary; conduct; livelihood"
  (the Kāśikāvṛtti) · उदाहरणम् udāharaṇam n. a "example" · प्रकरणम् prakaraṇam n. a "section,
  topic; chapter (of a treatise)" (model sentence 6; the LSK read by prakaraṇa, §17).
- **Previewed:** the meta-rule in 8.4.1's position at the end of the grammar (asiddha,
  c06.l03).
- **Payoff:**
  - IR-016 closes in the tradition's own words.
  - The examples Volume 4 chose (नयति, तरति, गुरुणा, मूर्खेण, कर्ता) turn out to be the Kāśikā's.
  - बभूव, one of the first perfects of c03.l04, derived as a beginner in the tradition has
    derived it since the 17th century (HISTORY, hedged, [REF:laghukaumudi]).
- **Main risk:** the commentary read as a second set of rules. Fix: every vṛtti line is
  mapped back to a word of the sūtra (a two-column worksheet).
- **§17 (grammarians, 4):** Bhaṭṭoji Dīkṣita's Siddhāntakaumudī and Varadarāja's
  Laghusiddhāntakaumudī (17th c., [REF:siddhantakaumudi], [REF:laghukaumudi]): the
  re-ordering of Pāṇini's rules by topic, which is why the LSK can be read as a prakriyā in
  order.
- **S0 → next:** +1 day: map 8.4.2's vṛtti to its sūtra; +1 week (c06.l04): read 7.3.84
  aloud with its vṛtti.

#### v4.c06.l03 — परिभाषा · "When Rules Meet: Three Meta-Rules"

- **lesson_type:** reading. **review_of:** v4.c06.l02, v4.c02.l01 (राजभिः), v4.c02.l03
  (7.3.103; रामेषु), v4.c04.l02 (आगत्य; the 1.1.56 preview), v3.c01.l01 (केन, the asker),
  v3.c04.l01 (त इच्छन्ति, the hiatus rule of Volume 3).
- **The one grammar point:** three meta-rules decide what happens when rules meet.
  - **1.4.2 विप्रतिषेधे परं कार्यम्:** when two rules of equal strength apply at once, the
    later one wins.
  - **1.1.56 स्थानिवदादेशोऽनल्विधौ:** a substitute behaves like what it replaced, except in
    rules about single sounds.
  - **8.2.1 पूर्वत्रासिद्धम्:** from here to the end of the grammar, each rule is treated as
    not having applied, as far as the rules before it are concerned: "सिद्धकार्यं न करोति"
    (Kāśikā), it does not count as done. It is not "applying last"; it is a rule's result
    being invisible to the earlier rules. The 1.x book has it the wrong way round ("What comes
    earlier [in the sūtra order] is treated as not-yet-applied", p. 116): the line is quoted
    and corrected in the open (§4.0.4).
- **The derivations (each meta-rule decides owned forms):**

  (a) **1.4.2 — राम + भ्यस् → रामेभ्यः, but राम + भ्याम् → रामाभ्याम्**

| Step | रामेभ्यः | रामाभ्याम् | Sūtra |
|---|---|---|---|
| 1 | भ् is in यञ्: lengthen the अ before a sup | the same | 7.3.102 सुपि च (with अतो दीर्घो यञि carried; the Kāśikā says so: "ato dīrgho yañi ity anuvartate") |
| 2 | भ् is also in झल्, and भ्यस् is plural: अ → ए | भ्याम् is dual: does not apply | 7.3.103 बहुवचने झल्येत् |
| 3 | both apply → the later wins | only 7.3.102 | 1.4.2 विप्रतिषेधे परं कार्यम् |
| 4 | **रामेभ्यः** (Kāśikā: वृक्षेभ्यः) | **रामाभ्याम्** (Kāśikā: वृक्षाभ्याम्) | — |

  The conflict is in रामेभ्यः, not in रामेषु: स् is not in यञ्, so 7.3.102 never reaches
  -सु, and रामेषु is 7.3.103's alone (the Kāśikā's वृक्षेषु). Kāśikā on 1.4.2:
  तुल्यबलविरोधो विप्रतिषेधः। … तस्मिन्विप्रतिषेधे परं कार्यं भवति। (and its limit:
  utsarga/apavāda, nitya/anitya, antaraṅga/bahiraṅga are not of equal strength; Teacher
  Notes, named only.)

  (b) **1.1.56 — किम् + टा → केन** (the asker owned since v3.c01.l01), **and अस्तेर्भूः**
  - किम् → क before a case ending (7.2.103 किमः कः). The substitute क counts as the aṅga it
    replaced (1.1.56), so the aṅga rules of a-stems apply: टा → इन (7.1.12), क + इन → **केन** (6.1.87 आद्गुणः, owned).
    Kāśikā on 1.1.56: अङ्गादेशोऽङ्गवद्भवति — केन। काभ्याम्। कैः।
  - The Kāśikā's first example (adopted from reader-first): धात्वादेशो धातुवद्भवति — अस्तेर्भूः
    (2.4.52), ब्रुवो वचिः (2.4.53) … भविता। भवितुम्। भवितव्यम्। वक्ता। वक्तुम्। वक्तव्यम्। So
    the learner's भविष्यति "will be" for अस्ति (c03.l05), and the वक्तुम् and वक्ता of ब्रवीति
    (c04.l02), are forms of a substitute root that behaves as a root.
  - The third, already met in c04.l02: कृदादेशः कृद्वद्भवति — प्रकृत्य। प्रहृत्य। क्त्वो ल्यबादेशे
    कृते ह्रस्वस्य पिति कृति तुक् (6.1.71) इति तुग्भवति। So आगत्य's तुक् is licensed.

  (c) **8.2.1 with 8.2.2 — राजन् + भिस् → राजभिः, not *राजैः**
  - 8.2.7 drops the न: राज + भिस्.
  - राज now ends in अ, so would 7.1.9 अतो भिस ऐस् (c01.l03) give *राजैः? No: 8.2.7 stands
    after 8.2.1, so its result is "not there" for 7.1.9.
  - Kāśikā on 8.2.2: सुब्विधौ तावत् राजभिः, तक्षभिः इत्यत्र नलोपस्यासिद्धत्वात् अतो भिस ऐस्
    (7.1.9) इति न भवति। राजभ्याम्, … राजसु इति सुपि च (7.3.102) इति, बहुवचने झल्येत् (7.3.103)
    इति दीर्घत्वमेत्वं च न भवति।
  - The same line explains the learner's राजभ्याम् and राजसु (c05.l03).

  (d) **8.2.1 again — ते + इच्छन्ति → त इच्छन्ति, never *तेच्छन्ति** (adopted from
  system-first)
  - ते + इच्छन्ति → तय् + इच्छन्ति (6.1.78, owned) → त इच्छन्ति (8.3.19 लोपः शाकल्यस्य drops the
    य्).
  - Now अ + इ stand side by side, and 6.1.87 आद्गुणः would make *तेच्छन्ति. But 8.3.19 is in
    the last three quarters: for 6.1.87 the य् is still there (8.2.1), and the hiatus stays.
    In Pāṇini's account, this is why the Volume 3 rule "ए before a vowel other than अ → अ +
    hiatus" holds, and why the owned कुरुत इति keeps its gap (c03.l01). FACT: classical texts
    keep the hiatus (Whitney §133).
  - The Kāśikā on 8.2.1 gives the same case with व्/य्: अस्मा उद्धर, द्वा अत्र, द्वा आनय, असा आदित्यः …
    "व्यलोपस्यासिद्धत्वात् आद्गुणः … अकः सवर्णे दीर्घः इति च न भवति".
  - Honesty line (FACT and TRADITION): 8.3.18 व्योर्लघुप्रयत्नतरः शाकटायनस्य records a
    lightly articulated य्/व् as Śākaṭāyana's view, and 8.3.19 लोपः शाकल्यस्य their deletion as
    Śākalya's; classical texts write the hiatus (Whitney §133). The 1.x book's "specific
    exception" to इको यणचि (p. 115) is quoted and corrected: 8.3.18 is about a word-final
    य्/व्, not an exception to 6.1.77 (§4.0.4).
- **Sūtras (tiers).** **Q:** 1.4.2 विप्रतिषेधे परं कार्यम्; 1.1.56 स्थानिवदादेशोऽनल्विधौ; 8.2.1
  पूर्वत्रासिद्धम्. **D:** 8.2.2 नलोपः सुप्स्वरसंज्ञातुग्विधिषु कृति; 7.3.102 सुपि च; 7.2.103
  किमः कः; 8.3.18 व्योर्लघुप्रयत्नतरः शाकटायनस्य; 8.3.19 लोपः शाकल्यस्य; 2.4.52 अस्तेर्भूः; 2.4.53
  ब्रुवो वचिः; and the owned 7.3.103, 7.1.9, 7.1.12, 8.2.7, 6.1.71, 6.1.78, 6.1.87.
  Tools added: 10.
- **Model sentences:**
  1. विरोधे परं सूत्रं बलवत्। (विरोधे परम् सूत्रम् बलवत्।)
     "In a conflict, the later sūtra is the stronger."
  2. रामेभ्य इत्यत्रैत्वं दीर्घत्वं च प्राप्नुतः। (रामेभ्यः इति अत्र एत्वम् दीर्घत्वम् च
     प्राप्नुतः।) "In rāmebhyaḥ both the e-rule and the lengthening apply."
  3. आदेशः स्थानिवद्भवति। (आदेशः स्थानिवत् भवति।) "A substitute is like what it replaces."
  4. नलोपोऽसिद्धः, तस्माद्राजैरिति न भवति। (नलोपः असिद्धः, तस्मात् "राजैः" इति न भवति।) "The
     न-lopa counts as not done; so *rājaiḥ does not arise."
  5. "त इच्छन्ति" इत्यत्र पुनः सन्धिर्न भवति। ("त इच्छन्ति" इति अत्र पुनः सन्धिः न भवति।) "In
     ta icchanti there is no further join."
  6. केनेति रूपं कथं भवति? (केन इति रूपम् कथम् भवति?) "How does the form kena come
     about?"
- **New headwords (3; 624 → 627):** परिभाषा paribhāṣā f. ā "meta-rule; definition" (Apte) ·
  विरोधः virodhaḥ m. a "conflict, opposition" (Kāśikā तुल्यबलविरोधः) · असिद्धः asiddhaḥ adj.
  -द्धा -द्धम् "not accomplished; (gramm.) treated as not having taken effect" (8.2.1's word;
  adopted from system-first's headword list; MW).
- **Payoff:**
  - Four forms the learner has owned since Volume 3 or Chapter 2 are decided by the 1.x book's three meta-rules:
    रामेभ्यः (v3.c02.l01), केन (v3.c01.l01), राजभिः (c02.l01) and त इच्छन्ति (v3.c04.l01).
  - The 1.x pp.115–117 cards are restored, each with a form instead of a slogan.
- **Main risk:**
  - "The later rule always wins" generalised. Fix: the Kāśikā's own limit (equal strength
    only) is printed and one counter-case is shown as display (Teacher Notes).
  - Asiddha as mysticism, or as "applies last". It is a bookkeeping device: a result the
    earlier rules cannot see. The course says so and shows two forms (राजभिः, त इच्छन्ति).
- **S0 → next:** +1 day: decide 4 forms by the right meta-rule; +1 week (v5.c01.l01, by
  §4.0.5: the last teaching lesson books the next l01): the three Kāśikā lines.

#### v4.c06.l04 — चतुर्थखण्डपरीक्षा · "The Volume 4 Exam"

- **lesson_type:** review. **review_of:** v4.c06.l01–l03, v4.c05.l05, v4.c04.l05,
  v4.c03.l06, v4.c02.l04, v4.c01.l04.
- **Shape:** two sittings (above). Ledger stays 627.
- **Spiral:**
  - every chapter's spiral form re-derived in task C's warm-up: नास्ति, रामेण, नयति, कृतम्,
    पठ्यते;
  - the four thread verses of Volume 3, with the Volume 4 overlay (what each form now
    derives from).
- **Payoff:**
  - The volume's promise, kept: भू → भवति by the learner.
  - The word the learner met in v1.c04.l01 as "is, becomes" is now 26 sūtras of Pāṇini's
    grammar, in the 19 rows of §4.6.1, each one taught at the moment another form needed it.
- **Main risk:**
  - Task C's anxiety. The derivation's 26 sūtras have each been used in another form
    (§1.5, the भवति thread). The rubric gives credit sūtra by sūtra, and the toolbox card
    removes recall.
  - Task E (the unseen passages) is weighted equally with C, so that the volume is not
    passed on derivation alone.
- **S0 → next:** +1 day: v5.c01.l01's Station 0 (the derivation once more, timed); +1 week
  (v5.c01.l02): task E's passages re-read.

##### 4.6.1 The answer key to task C: भू → भवति

| # | String | What happens | Sūtra | Taught |
|---|---|---|---|---|
| 1 | भू | the Dhātupāṭha's first root (भू सत्तायाम्) is a dhātu | 1.3.1 भूवादयो धातवः | c03.l01 |
| 2 | (context) | affixes come after a dhātu | 3.1.1 प्रत्ययः; 3.1.2 परश्च; 3.1.91 धातोः | c02.l01; c03.l01 (3.1.91, B) |
| 3 | भू + लट् | present time | 3.2.123 वर्तमाने लट् | c03.l01 |
| 4 | भू + ल् | अ and ट् are markers, dropped | 1.3.2; 1.3.3; 1.3.9 | c02.l01; c01.l01 |
| 5 | (the ल् names the agent) | bhū is intransitive: ल् in kartari (or bhāve) | 3.4.69 लः कर्मणि च भावे चाकर्मकेभ्यः | c05.l01 |
| 6 | भू + [one of 18] | ल् is replaced by a tiṅ | 3.4.77 लस्य; 3.4.78 तिप्तस्झि… | c03.l01 |
| 7 | (P) | bhū has no Ā marker → parasmaipada; the P set is the first nine | 1.3.78 शेषात् कर्तरि परस्मैपदम्; 1.4.99 लः परस्मैपदम् (and 1.4.100 तङानावात्मनेपदम्, which takes the last nine out) | c03.l01 |
| 8 | (3rd person) | the doer is neither "you" nor "I" | 1.4.101 तिङस्त्रीणि त्रीणि…; 1.4.108 शेषे प्रथमः | c03.l01 |
| 9 | भू + तिप् | one doer: singular | 1.4.102 तान्येकवचन…; 1.4.22 द्व्येकयोर्द्विवचनैकवचने | c03.l01 |
| 10 | भू + ति | प् is a marker, dropped | 1.3.3 हलन्त्यम्; 1.3.9 तस्य लोपः | c01.l01 |
| 11 | (ति is sārvadhātuka) | a tiṅ is sārvadhātuka | 3.4.113 तिङ्शित्सार्वधातुकम् | c03.l02 |
| 12 | भू + शप् + ति | the class-1 sign before a sārvadhātuka in kartari | 3.1.68 कर्तरि शप् | c03.l02 |
| 13 | भू + अ + ति | श् and प् are markers, dropped | 1.3.8 लशक्वतद्धिते; 1.3.3; 1.3.9 | c03.l02 |
| 14 | (भू is aṅga) | the base before the affix is aṅga; aṅga rules apply | 1.4.13 यस्मात् प्रत्ययविधि…; 6.4.1 अङ्गस्य | c02.l01; c02.l03 |
| 15 | (guṇa not blocked) | शप् and तिप् are p-marked: not ṅit, so 1.1.5 does not block | 1.2.4 सार्वधातुकमपित् (does not apply); 1.1.5 (does not apply) | c03.l03 |
| 16 | भो + अ + ति | ik-final aṅga before a sārvadhātuka: guṇa | 7.3.84 सार्वधातुकार्धधातुकयोः | c03.l02 |
| 17 | (which vowel?) | guṇa replaces ik; it is अ ए ओ; for ऊ the nearest is ओ; it replaces the final sound | 1.1.3 इको गुणवृद्धी; 1.1.2 अदेङ् गुणः; 1.1.50 स्थानेऽन्तरतमः; 1.1.52 अलोऽन्त्यस्य | c02.l02; c01.l01 (1.1.50, D; read in c01.l03); c03.l02 |
| 18 | भव् + अ + ति | ओ before a vowel → अव् | 6.1.78 एचोऽयवायावः (with अचि carried, 6.1.77; 1.3.10) | c01.l03 |
| 19 | **भवति** | a tiṅ-final is a pada | 1.4.14 सुप्तिङन्तं पदम् | v3.c01.l05 |

The learner's table may merge or split rows (the 26 sūtras are what is counted: 1.3.1,
3.1.1, 3.1.2, 3.1.91, 3.2.123, 1.3.2, 1.3.3, 1.3.9, 3.4.69, 3.4.77, 3.4.78, 1.3.78, 1.4.99,
1.4.101, 1.4.108, 1.4.102, 1.4.22, 3.4.113, 3.1.68, 1.3.8, 1.4.13, 6.4.1, 7.3.84, 1.1.3,
1.1.2, 6.1.78). 1.1.50, 1.1.52, 1.3.10, 1.4.100, 1.2.4, 1.1.5 and 1.4.14 are credit beyond the 26.

---

## 5. Reading texts and their form inventories

Every passage below was re-found by line in the local GRETIL e-text named, and is printed
here as the e-text gives it. The joined Devanagari follows the Volume 3 §1.4 convention.
Loci are given in the form REFERENCES allows: Hitopadeśa by book and verse ([REF:hitopadesha]);
Pañcatantra by tantra and story, with Jha's numbers as "Jha n.n" for the research note
only ([REF:panchatantra]); Mahābhārata by the critical edition's book.chapter.verse
([REF:mahabharata]). The gloss ratio counts word tokens of the pause form, names excluded.
**T** taught (lesson) · **C** chunk · **L** recognised under a card or by an owned
upasarga/formation · **G** glossed.

### 5.1 N1 — v4.c03.l04 (the perfect): Hitopadeśa, Introduction; and Hit 3, story 8

**Locus (a):** Hitopadeśa, Introduction (kathāmukha), the opening prose after Hit 0.9
(`hitop_u.htm`, line 131). **Locus (b):** Hit 3 (Vigraha), story 8 (Vīravara), prose after
Hit 3.101 (lines 2946, 2956), with an ellipsis between.

> (a) अस्ति भागीरथीतीरे पाटलिपुत्रनामधेयं नगरम्। तत्र सर्वस्वामिगुणोपेतः सुदर्शनो नाम
> नरपतिरासीत्। स भूपतिरेकदा केनापि पाठ्यमानं श्लोकद्वयं शुश्राव।
> (b) अथैकदा कृष्णचतुर्दश्यां रात्रौ स राजा सकरुणक्रन्दनध्वनिं शुश्राव। तच्छ्रुत्वा राजा
> ब्रूते — कः कोऽत्र द्वारि तिष्ठति? … ततो राजापि खड्गमादाय तदनुसरणक्रमेण नगराद्बहिर्निर्जगाम।

(The e-text prints *tat śrutvā* unjoined; the course prints तच्छ्रुत्वा and records the join in
Teacher Notes, per §1.4 of the Volume 3 plan; found by the diff script of §4.6.)

Pause: (a) अस्ति भागीरथी-तीरे पाटलिपुत्र-नामधेयम् नगरम्। तत्र सर्व-स्वामि-गुण-उपेतः सुदर्शनः
नाम नरपतिः आसीत्। सः भूपतिः एकदा केन अपि पाठ्यमानम् श्लोक-द्वयम् शुश्राव। (b) अथ एकदा
कृष्ण-चतुर्दश्याम् रात्रौ सः राजा स-करुण-क्रन्दन-ध्वनिम् शुश्राव। तत् श्रुत्वा राजा ब्रूते — कः
कः अत्र द्वारि तिष्ठति? … ततः राजा अपि खड्गम् आदाय तत्-अनुसरण-क्रमेण नगरात् बहिः निर्जगाम।

"(a) On the bank of the Bhāgīrathī there is a city named Pāṭaliputra. There lived a king
named Sudarśana, endowed with all the virtues of a ruler. One day that lord of the earth
heard a pair of verses being recited by someone. (b) Then one night, on the fourteenth of
the dark fortnight, the king heard a sound of piteous weeping. Hearing it, the king says:
'Who, who is there at the door?' … Then the king too took his sword and, following the
sound, went out of the city."

| Form | Status |
|---|---|
| अस्ति · तत्र · नाम · आसीत् · सः · एकदा · केन अपि · अथ · रात्रौ · राजा · कः · अत्र · तिष्ठति · ततः · अपि · नगरात् · बहिः | T (V1–V3; राजा c02.l01) |
| भागीरथीतीरे | T (तीरम्, v3.c01.l02) + name |
| नगरम् | T (V2) |
| नरपतिः | T (नर, V1 + पतिः, c03.l04; tatpuruṣa) |
| श्लोकद्वयम् · खड्गम् | T (c03.l04: श्लोकः + द्वयम्, tatpuruṣa; खड्गः) |
| **शुश्राव** ×2 · **निर्जगाम** | T (c03.l04: perfect of शृणोति, of निर्गच्छति) |
| ब्रूते | L (the Ā cell of ब्रवीति; c03.l03 ◐) |
| श्रुत्वा · आदाय | L (R5 card; taught in c04.l02) |
| **Glossed (8):** द्वारि "at the door" (loc. of the consonant stem द्वार् f., MW dvār; not a cell of the headword द्वारम् n., whose locative is द्वारे) · पाटलिपुत्रनामधेयम् "named Pāṭaliputra" · सर्वस्वामिगुणोपेतः "endowed with all a ruler's virtues" · भूपतिः "lord of the earth" · पाठ्यमानम् "being recited" (a causative passive participle, ◐) · कृष्णचतुर्दश्याम् "on the 14th night of the dark half" · सकरुणक्रन्दनध्वनिम् "a sound of piteous weeping" · तदनुसरणक्रमेण "following it" | G |
| Names | सुदर्शनः (the Bhāgīrathī and Pāṭaliputra inside compounds) |

**Gloss ratio:** 8 of 43, about 1 in 5.4 (counted from the pause form, names excluded).

### 5.2 N2 — v4.c03.l05 (the future): Pañcatantra 4, frame story

**Locus:** Pañcatantra 4 (Labdhapraṇāśa), frame story: the prose block after T5's block
(Jha 4.5), and the wife's reply after the verse Jha 4.6 (`vispancu.htm`, lines 5228 and 5235;
panc_plain lines 5227 and 5234).

> अथ तयाभिहितम् — यः सर्वदैवामृतप्रायाणीदृशानि फलानि भक्षयति, तस्य हृदयममृतमयं भविष्यति।
> तद्यदि भार्यया ते प्रयोजनं, ततस्तस्य हृदयं मह्यं प्रयच्छ। … तन्नूनं सा वानरी भविष्यति,
> यतस्तस्या अनुरागतः सकलमपि दिनं तत्र गमयसि।

Pause: अथ तया अभिहितम् — यः सर्वदा एव अमृत-प्रायाणि ईदृशानि फलानि भक्षयति, तस्य हृदयम्
अमृत-मयम् भविष्यति। तत् यदि भार्यया ते प्रयोजनम्, ततः तस्य हृदयम् मह्यम् प्रयच्छ। … तत् नूनम्
सा वानरी भविष्यति, यतः तस्याः अनुरागतः सकलम् अपि दिनम् तत्र गमयसि। "Then she said: 'He
who always eats such nectar-like fruits must have a heart made of nectar. So if you have
any use for a wife, give me his heart.' … 'Then surely she must be a she-monkey, since out
of love for her you spend the whole day there.'"

| Form | Status |
|---|---|
| अथ · तया · यः · सर्वदा (built) · एव · फलानि · भक्षयति · तस्य · तत् · ते · ततः · मह्यम् · प्रयच्छ · सा · यतः · तस्याः · अपि · दिनम् · तत्र | T (V3) |
| **हृदयम्** ×2 · **भार्यया** · **प्रयोजनम्** · **यदि** · **नूनम्** | T (c03.l05) |
| **भविष्यति** ×2 | T (c03.l05; the future of supposition, "must be": Whitney §948) |
| वानरी | L (the feminine of वानरः, -ई) |
| **Glossed (7):** अभिहितम् "(it was) said" · अमृतप्रायाणि "nectar-like" · ईदृशानि "such" · अमृतमयम् "made of nectar" (taddhita; taught c04.l03) · अनुरागतः "out of love" · सकलम् "whole" · गमयसि "you spend (time)" (causative; c05.l02) | G |

**Gloss ratio:** 7 of 37, about 1 in 5.3.

### 5.3 N3a, N3b — v4.c04.l01–l02 and the Chapter 4 exam: Hitopadeśa 1, story 1 (the old tiger and the traveller)

**N3a locus:** Hit 1, story 1, prose after Hit 1.5 (`hitop_u.htm`, line 315), the first two
sentences.

> सोऽब्रवीत् — अहमेकदा दक्षिणारण्ये चरन्नपश्यम् — एको वृद्धो व्याघ्रः स्नातः कुशहस्तः
> सरस्तीरे ब्रूते — भो भोः पान्थाः! इदं सुवर्णकङ्कणं गृह्यताम्। ततो लोभाकृष्टेन केनचित्
> पान्थेनालोचितम् — भाग्येनैतत्सम्भवति।

(The e-text prints पान्थेन आलोचितम् and *bhāgyena etat* unjoined; the course prints both
joins, पान्थेनालोचितम् and भाग्येनैतत्, and records the differences in Teacher Notes, per §1.4 of
the Volume 3 plan. It also corrects the e-text's *bho bho panthāḥ* to भो भोः पान्थाः, §4.6.)

Pause: सः अब्रवीत् — अहम् एकदा दक्षिण-अरण्ये चरन् अपश्यम् — एकः वृद्धः व्याघ्रः स्नातः
कुश-हस्तः सरः-तीरे ब्रूते — भोः भोः पान्थाः! इदम् सुवर्ण-कङ्कणम् गृह्यताम्। ततः लोभ-आकृष्टेन
केनचित् पान्थेन आलोचितम् — भाग्येन एतत् सम्भवति। "He said: 'Once, wandering in the southern
forest, I saw an old tiger, bathed, kuśa-grass in hand, on the shore of a lake, saying: "O
travellers! Take this gold bracelet." Then a traveller, drawn by greed, thought: "This
comes about by luck."'"

| Form | Status |
|---|---|
| सः · अब्रवीत् (C, V3) · अहम् · एकदा · अपश्यम् · एकः · इदम् · ततः · केनचित् · एतत् · भोः | T |
| **वृद्धः · व्याघ्रः · पान्थाः · पान्थेन · सरः-** · **सुवर्णकङ्कणम्** | T (c04.l01) |
| **स्नातः** | G in c04.l01 ("bathed": its verb स्नाति is c04.l02's headword); T from c04.l02 (-त of स्नाति) |
| **ब्रूते** | L (as N1) |
| लोभ- | T (c04.l02, the second sentence) |
| सम्भवति | L (सम् + भवति, the upasarga card) |
| चरन् | T (चरति c03.l02; -अत् c04.l01) |
| आलोचितम् · भाग्येन | T (c04.l02, c04.l01 headwords) |
| **Glossed:** first sentence (4) दक्षिणारण्ये "in the southern forest" · स्नातः "bathed" (c04.l01 only; स्नाति is c04.l02's headword) · कुशहस्तः "kuśa-grass in hand" · गृह्यताम् "let it be taken" (passive, c05.l01); second sentence (1) लोभाकृष्टेन "drawn by greed" (लोभः c04.l02; आकृष्ट G) | G |

**Gloss ratio:** sentence 1, 4 of 20 (1 in 5); sentence 2, 1 of 8. Together 5 of 28, 1 in 5.6
(the base design's 7 of 28, 1 in 4, failed the one-in-five ceiling; fixed by चरति, भाग्यम्,
आलोचयति, headworded for their frequency and for this text, rule 22).

**N3b — the Chapter 4 exam, unseen.** Hit 1, story 1, the prose after Hit 1.16 (line
365), to the traveller's thought.

> तदत्र सरसि स्नात्वा सुवर्णकङ्कणमिदं गृहाण। ततो यावदसौ तद्वचःप्रतीतो लोभात्सरः स्नातुं
> प्रविष्टः, तावन्महापङ्के निमग्नः पलायितुमक्षमः। तं पङ्के पतितं दृष्ट्वा व्याघ्रोऽवदत् —
> अहह महापङ्के पतितोऽसि। अतस्त्वामहमुत्थापयामि। इत्युक्त्वा शनैः शनैरुपगम्य तेन व्याघ्रेण
> धृतः स पान्थोऽचिन्तयत्।

(The e-text has no comma after अहह; the course follows the e-text and adds none.)

Pause: तत् अत्र सरसि स्नात्वा सुवर्ण-कङ्कणम् इदम् गृहाण। ततः यावत् असौ तत्-वचः-प्रतीतः लोभात्
सरः स्नातुम् प्रविष्टः, तावत् महा-पङ्के निमग्नः पलायितुम् अक्षमः। तम् पङ्के पतितम् दृष्ट्वा व्याघ्रः
अवदत् — अहह महा-पङ्के पतितः असि। अतः त्वाम् अहम् उत्थापयामि। इति उक्त्वा शनैः शनैः उपगम्य
तेन व्याघ्रेण धृतः सः पान्थः अचिन्तयत्। "So bathe in this lake and take this gold bracelet.
Then, as soon as he, trusting his word, had out of greed entered the lake to bathe, he sank
in the deep mud and could not flee. Seeing him fallen in the mud, the tiger said: 'Alas, you
have fallen into deep mud. So I will pull you out.' Having said this, he slowly came up, and
the traveller, seized by that tiger, thought …"

| Form | Status |
|---|---|
| तत् · अत्र · इदम् · ततः · लोभात् (c04.l02) · तम् · अवदत् · असि · अतः · त्वाम् · अहम् · इति · शनैः शनैः · तेन · सः · अचिन्तयत् | T |
| सरः · सुवर्णकङ्कणम् · महापङ्के ×2 · पङ्के · पान्थः · व्याघ्रः · व्याघ्रेण | T (c04.l01–l02) |
| स्नात्वा · स्नातुम् · दृष्ट्वा · उक्त्वा · उपगम्य | T (c04.l02) |
| प्रविष्टः · पतितम् · पतितः | T (c04.l01: -त of प्रविशति, पतति) |
| गृहाण | T (a listed loṭ form of गृह्णाति, c03.l03; its -आन is 3.1.83 हलः श्नः शानज्झौ, Teacher Notes) |
| यावत् … तावत् | T (c04.l03: the pair ✓, part of the taddhita point) |
| **Glossed (9):** सरसि "in the lake" (loc. of सरः; the s-stem cells are ◐ until c05.l03) · असौ "that one" (अदस्, c05.l03 card) · तद्वचःप्रतीतः "trusting his word" · निमग्नः "sunk" · पलायितुम् "to flee" · अक्षमः "unable" · अहह "alas" · उत्थापयामि "I will pull you out" (causative; c05.l02) · धृतः "seized" | G |

**Gloss ratio:** 9 of 45, 1 in 5 (counted from the pause form; सरसि is glossed because the s-stem cells are ◐ until c05.l03). **Measured both ways (rule 22):** eleven of its tokens are Chapter 4 headwords taught in c04.l01–l02 for N3a or for their Hitopadeśa frequency (सुवर्णकङ्कणम्, लोभात्, सरः, महापङ्के ×2, पङ्के, व्याघ्रः, व्याघ्रेण, पान्थः, स्नात्वा, स्नातुम्); had they not been headworded, N3b would read 20 of 45, about 1 in 2.3. N3b continues the story of N3a, so much of its vocabulary is the prepared text's by design; it does not set any exit figure.

### 5.4 N4, N5 — v4.c05.l01 and v4.c05.l04: Pañcatantra 4, frame story (the journey)

**Locus:** Pañcatantra 4, frame story, the prose after Jha 4.13 (`vispancu.htm`; panc_plain
lines 5268–5272).

> **N4:** सोऽपि तच्छ्रुत्वा सानन्दमाह — भद्र! यद्येवं तत्किं विलम्ब्यते। त्वर्यताम्। …
> भ्रातः! शनैः शनैर्गम्यताम्। जलकल्लोलैः प्लाव्यते मे शरीरम्।
>
> **N5:** तथानुष्ठितेऽगाधे जलधौ गच्छन्तं मकरमालोक्य भयत्रस्तमना वानरः प्रोवाच — …

(N4's second sentence follows N5's speech verb in the text; the lesson prints N5's clause as
its frame in c05.l04. The e-text prints *gacchantaṃ marakam*; the course corrects it to
मकरम्, §4.6.)

Pause, N4: सः अपि तत् श्रुत्वा स-आनन्दम् आह — भद्र! यदि एवम् तत् किम् विलम्ब्यते। त्वर्यताम्। …
भ्रातः! शनैः शनैः गम्यताम्। जल-कल्लोलैः प्लाव्यते मे शरीरम्। "He too, hearing that, said
joyfully: 'Friend! If so, why delay? Hurry!' … 'Brother! Go slowly, slowly. My body is
being flooded by the waves.'"

Pause, N5: तथा अनुष्ठिते अगाधे जलधौ गच्छन्तम् मकरम् आलोक्य भय-त्रस्त-मनाः वानरः प्रोवाच — …
"When that was done, the monkey, seeing the crocodile going into the fathomless ocean, said
in terror: …"

| Form | Status |
|---|---|
| सः · अपि · तत् · आह (C) · भद्र · यदि · एवम् · किम् · भ्रातः · शनैः शनैः · मे · वानरः · मकरम् · तथा | T |
| श्रुत्वा | T (c04.l02) |
| त्वर्यताम् · गम्यताम् | T (c05.l01: the impersonal passive imperative; त्वरते headword) |
| शरीरम् · जलधौ · आलोक्य | T (c05.l01) |
| गच्छन्तम् | T (c05.l03, T11: N5 is read in c05.l04) |
| प्रोवाच | T (प्र + उवाच, c03.l04) |
| **Glossed (N4: 4):** सानन्दम् "joyfully" · विलम्ब्यते "is there delay" (impersonal of वि + लम्ब्) · जलकल्लोलैः "by the waves" · प्लाव्यते "is being flooded" (causative passive) | G |
| अनुष्ठिते | T (loc. abs. of अनुष्ठित, the -त of अनुतिष्ठति, c05.l01 headword) |
| **Glossed (N5: 2):** अगाधे "fathomless" · भयत्रस्तमनाः "terrified" (भयम् c03.l01; त्रस्त G) | G |

**Gloss ratio** (counted by script from the pause forms): N4, 4 of 21 (about 1 in 5.25; the
earlier "23" was a miscount). N5, 2 of 10, read with the MBh line below (0 of 4): 2 of 14,
1 in 7 (the base design's 3 of 14 failed the one-in-five ceiling).

**The epic line in N5 (c05.l04):** MBh 3.50.11a, critical edition, re-verified at synthesis
in the GRETIL e-text (`mbh_03_u.htm`: "03,050.011a atha tāṃ vayasi prāpte dāsīnāṃ
samalaṃkṛtam"; 011c "śataṃ sakhīnāṃ ca tathā paryupāste śacīm iva"): अथ तां वयसि प्राप्ते
"then, (her) youth having come, … her". The absolute is वयसि प्राप्ते, whose noun is वयः, as in
Whitney §303c's kāle śubhe prāpte "a propitious time having arrived"; तां is not its doer but
the object of 011c's पर्युपास्ते, "a hundred slave-girls and friends attended her", which the
gloss line names. It is printed as one verse quarter with its locus; the rest of the śloka is not
printed. A second local copy of the
Mahābhārata, a JSON conversion, is corrupt (e.g. दयूत for द्यूत) and is never quoted.

### 5.5 N6 — v4.c05.l02 (the causative): Hitopadeśa 3, story 8 (Vīravara at the palace door)

**Locus:** Hit 3, story 8, prose after Hit 3.101 (`hitop_u.htm`, line 2930), from वीरवरो नाम
to क्रियताम्.

> वीरवरो नाम राजपुत्रः कुतश्चिद्देशादागत्य राजद्वारमुपगम्य प्रतीहारमुवाच — अहं
> तावद्वर्तनार्थी राजपुत्रः। मां राजदर्शनं कारय। ततस्तेनासौ राजदर्शनं कारितो ब्रूते — देव!
> यदि मया सेवकेन प्रयोजनमस्ति, तदास्मद्वर्तनं क्रियताम्।

(The e-text prints *raja-darśanaṃ* once with short a; corrected to राज° and listed.)

Pause: वीरवरः नाम राज-पुत्रः कुतश्चित् देशात् आगत्य राज-द्वारम् उपगम्य प्रतीहारम् उवाच — अहम्
तावत् वर्तन-अर्थी राज-पुत्रः। माम् राज-दर्शनम् कारय। ततः तेन असौ राज-दर्शनम् कारितः ब्रूते —
देव! यदि मया सेवकेन प्रयोजनम् अस्ति, तदा अस्मत्-वर्तनम् क्रियताम्। "A prince named Vīravara
came from some country, went up to the palace door and said to the doorkeeper: 'I am a
prince seeking a salary. Have me see the king.' Then, made by him to see the king, he says:
'Lord, if you have any use for me as a servant, then let my salary be fixed.'"

| Form | Status |
|---|---|
| नाम · कुतश्चित् · देशात् · उवाच · अहम् · तावत् · माम् · ततः · तेन · ब्रूते · देव · यदि · मया · सेवकेन · प्रयोजनम् · अस्ति · तदा | T (L for ब्रूते) |
| राजपुत्रः ×2 · राजद्वारम् | T (राजन् + पुत्रः / द्वारम्; c04.l04's राज-) |
| आगत्य · उपगम्य | T (c04.l02) |
| **कारय** | T (c05.l02: causative of करोति; the causee माम् in the accusative, 1.4.53) |
| कारितः | L (the causative's -त, previewed in c05.l02 ◐) |
| क्रियताम् | T (c05.l01) |
| राजदर्शनम् ×2 | L (दर्शनम्, the kṛt noun of दृश्, beside दर्शयति) |
| अस्मद्वर्तनम् | L (अस्मद् as a compound member + वर्तनम्, c03.l05) |
| **Glossed (3):** प्रतीहारम् "the doorkeeper" · वर्तनार्थी "seeking a salary" · असौ "he" (अदस्, c05.l03 card, after this lesson) | G |
| Names | वीरवरः |

**Gloss ratio:** 3 of 31, about 1 in 10 (counted from the pause form, the name excluded).

### 5.6 N7 — the Chapter 5 exam, unseen: Pañcatantra 4, frame story (the monkey's trick)

**Locus:** Pañcatantra 4, frame story, prose after Jha 4.13 (panc_plain line 5276).

> प्रत्युत्पन्नमतिर्वानर आह — भद्र! यद्येवं तत्किं त्वया मम तत्रैव न व्याहृतम्? येन
> स्वहृदयं जम्बूकोटरे सदैव मया सुगुप्तं कृतम्। तद्भ्रातृपत्न्या अर्पयामि। त्वयाहं
> शून्यहृदयोऽत्र कस्मादानीतः?

Pause: प्रत्युत्पन्न-मतिः वानरः आह — भद्र! यदि एवम् तत् किम् त्वया मम तत्र एव न व्याहृतम्?
येन स्व-हृदयम् जम्बू-कोटरे सदा एव मया सु-गुप्तम् कृतम्। तत् भ्रातृ-पत्न्यै अर्पयामि। त्वया
अहम् शून्य-हृदयः अत्र कस्मात् आनीतः? "The quick-witted monkey said: 'My friend! If that is
so, why did you not tell me back there? For I always keep my heart well hidden in a hollow
of the rose-apple tree. So I will hand it over to my brother's wife. Why have you brought
me here with an empty heart?'"

| Form | Status |
|---|---|
| वानरः · आह · भद्र · यदि · एवम् · तत् · किम् · त्वया · मम · तत्र · एव · न · येन · स्व- · सदा · मया · अहम् · अत्र · कस्मात् | T |
| हृदयम् (in स्वहृदयम्) · जम्बू- · कृतम् | T (c03.l05; v3.c06.l03; c04.l01) |
| भ्रातृपत्न्यै | T (भ्राता + पत्नी, dative f.; the seam पत्न्यै + अर्पयामि → पत्न्या अर्पयामि by 6.1.78 + the य् dropped before a vowel (8.3.19, read in c06.l03), named on the gloss line) |
| अर्पयामि | G "I hand over" (the causative of ऋ; not headworded, rule 22) |
| आनीतः | T (आ + नीत, c04.l01) |
| **Glossed (5):** प्रत्युत्पन्नमतिः "quick-witted" · व्याहृतम् "(was) said" · जम्बूकोटरे "in a hollow of the rose-apple tree" (कोटरम् G) · सुगुप्तम् "well hidden" · शून्यहृदयः "with an empty heart" | G |

**Gloss ratio:** 6 of 31, about 1 in 5.2 (with अर्पयामि; counted by script from the pause
form, where the earlier "30" was a miscount; the base design headworded अर्पयति for this
passage, which rule 22 forbids).

### 5.7 N8 — the Chapter 3 exam, unseen: Hitopadeśa 3, story 8 (Vīravara and the king)

**Locus:** Hit 3, story 8, prose after Hit 3.101 (lines 2932–2940).

> शूद्रक उवाच — किं ते वर्तनम्? वीरवरो ब्रूते — प्रत्यहं सुवर्णपञ्चशतानि देहि। राजाह — का
> ते सामग्री? वीरवरो ब्रूते — द्वौ बाहू। तृतीयश्च खड्गः। राजाह — नैतच्छक्यम्।

Pause: शूद्रकः उवाच — किम् ते वर्तनम्? वीरवरः ब्रूते — प्रति-अहम् सुवर्ण-पञ्च-शतानि देहि।
राजा आह — का ते सामग्री? वीरवरः ब्रूते — द्वौ बाहू। तृतीयः च खड्गः। राजा आह — न एतत्
शक्यम्। "Śūdraka said: 'What is your salary?' Vīravara says: 'Give me five hundred gold
pieces a day.' The king said: 'What is your equipment?' Vīravara says: 'Two arms, and a
sword the third.' The king said: 'That is not possible.'"

| Form | Status |
|---|---|
| उवाच · किम् · ते · देहि · राजा · आह · का · द्वौ · बाहू · च · खड्गः · न · एतत् | T (देहि R4, closed in c03.l03) |
| ब्रूते ×2 | L |
| तृतीयः | L (the case name तृतीया; the ordinal comes in c05.l04's §15) |
| वर्तनम् | T (c03.l05, the Vīravara thread's word) |
| **Glossed (4):** प्रत्यहम् "every day" · सुवर्णपञ्चशतानि "five hundred gold pieces" (सुवर्णम् is taught in c04.l01) · सामग्री "equipment" · शक्यम् "possible" (gerundive; c05.l01) | G |
| Names | शूद्रकः, वीरवरः ×2 |

**Gloss ratio:** 4 of 24, 1 in 6 (counted by script from the pause form, names excluded; the
earlier "23" was a miscount; the base design's 5 glosses failed the one-in-five ceiling;
वर्तनम् is now taught in c03.l05). The questions ask for gist and the lakāra of
उवाच, देहि and आह, not full translation; the आह item is put "According to Pāṇini…" (c03.l04's
ruling) and its key is "laṭ, according to Pāṇini (3.4.84)". ब्रूते, coded L (the Ā cell of ब्रवीति, c03.l03 ◐),
is named in the margin and never scored.

### 5.8 X-a and X-b — the Volume 4 exam, unseen: the end of the Vīravara thread (Hit 3, story 8) and the deer, the jackal and the field (Hit 1)

Task E reads two unseen passages, 95 words in all, counted by script from the pause forms
(re-cut at synthesis: the base design's X, the passage now called X-a, was alone 32 words
by this count (the base counted 30), too short for exit can-do 1, and six of its words had been headworded
with the Vīravara thread; rule 22).

**X-a. Locus:** Hit 3, story 8, the prose after Hit 3.103 (`hitop_u.htm`, the block that
begins atha prabhāte), to the king's question.

> अथ प्रभाते वीरवरो द्वारस्थः पुनर्भूपालेन पृष्टः सन्नाह — देव! सा रुदती मामवलोक्यादृश्याभवत्।
> न काप्यन्या वार्ता विद्यते। तद्वचनमाकर्ण्य सन्तुष्टो राजा साश्चर्यं चिन्तयामास — कथमयं
> श्लाघ्यो महासत्त्वः?

Pause: अथ प्रभाते वीरवरः द्वार-स्थः पुनः भू-पालेन पृष्टः सन् आह — देव! सा रुदती माम्
अवलोक्य अदृश्या अभवत्। न का अपि अन्या वार्ता विद्यते। तत् वचनम् आकर्ण्य सन्तुष्टः राजा
स-आश्चर्यम् चिन्तयामास — कथम् अयम् श्लाघ्यः महा-सत्त्वः? "Then at dawn Vīravara, standing at
the door, was asked again by the king, and said: 'Lord, that weeping woman looked at me and
vanished. There is no other news.' Hearing these words the king, pleased, thought in
amazement: 'How praiseworthy, how great-souled this man is!'"

| Form | Status |
|---|---|
| अथ · पुनः · आह · देव · सा · माम् · अभवत् · न · का अपि · अन्या · तत् · वचनम् · राजा · कथम् · अयम् | T |
| प्रभाते | T (V2) |
| वार्ता | T (c04.l04; a thread headword, see below) |
| द्वारस्थः | T (द्वारम् + -स्थ, an upapada like जलज, c04.l04) |
| पृष्टः | T (-त of पृच्छति, c04.l01) |
| सन् | T (the present participle of अस्, c04.l01 formation; c05.l03 declension; c05.l04 सत्) |
| रुदती | T (f. present participle of रोदिति, c05.l04; the feminine in -ई, c05.l03) |
| अवलोक्य | L (-य of अव + लोक्, beside आलोकयति, c05.l01) |
| अदृश्या | L (अ + दृश्य, the -य gerundive of दृश्, c05.l01 card) |
| विद्यते · आकर्ण्य · साश्चर्यम् | T (c05.l01; c04.l02; c05.l04) |
| सन्तुष्टः | L (सम् + तुष्ट, -त of तुष्यति, c05.l02) |
| चिन्तयामास | L (periphrastic perfect, c03.l04 ◐) |
| **Glossed (3):** भूपालेन "by the king" · श्लाघ्यः "praiseworthy" · महासत्त्वः "great-souled" | G |
| Names | वीरवरः |

**Gloss ratio:** 3 of 32, about 1 in 10.7 (counted from the pause form, the name excluded;
the earlier "30" was a miscount). **Measured both ways (rule 22):** five of its words are
headwords taught with the Vīravara thread (वार्ता, विद्यते, तुष्यति, रोदिति, आश्चर्यम्); had
they not been, X-a would read 8 of 32, 1 in 4. X-a therefore does not set
the exit figure; X-b does.

**X-b. Locus:** Hit 1 (Mitralābha), the story of the deer, the jackal and the crow, the prose
after Hit 1.72 (`hitop_u.htm` line 673, the whole block; adopted from system-first's R4, its
locus re-verified at synthesis). No sentence of it is used in any lesson; the verse 1.72 just
before it is not read in Volume 4.

> काकेनोक्तम् — एवमस्तु। अथ प्रातः सर्वे यथाभिमतदेशं गताः। एकदा निभृतं शृगालो ब्रूते — सखे
> मृग! एतस्मिन्नेव वनैकदेशे सस्यपूर्णं क्षेत्रमस्ति। तदहं त्वां तत्र नीत्वा दर्शयामि। तथा कृते
> सति मृगः प्रत्यहं तत्र गत्वा सस्यं खादति। ततो दिनकतिपयेन क्षेत्रपतिना तद्दृष्ट्वा पाशास्तत्र
> योजिताः। अनन्तरं पुनरागतो मृगस्तत्र चरन्पाशैर्बद्धोऽचिन्तयत् — को मामितः कालपाशादिव
> व्याधपाशात्त्रातुं मित्रादन्यः समर्थः?

(The e-text prints kākena uktam and mṛgaḥ tatra unjoined; the course prints the joins and
records the two differences in Teacher Notes, per §1.4 of the Volume 3 plan.)

Pause: काकेन उक्तम् — एवम् अस्तु। अथ प्रातः सर्वे यथा-अभिमत-देशम् गताः। एकदा निभृतम् शृगालः
ब्रूते — सखे मृग! एतस्मिन् एव वन-एक-देशे सस्य-पूर्णम् क्षेत्रम् अस्ति। तत् अहम् त्वाम् तत्र
नीत्वा दर्शयामि। तथा कृते सति मृगः प्रत्यहम् तत्र गत्वा सस्यम् खादति। ततः दिन-कतिपयेन
क्षेत्र-पतिना तत् दृष्ट्वा पाशाः तत्र योजिताः। अनन्तरम् पुनः आगतः मृगः तत्र चरन् पाशैः बद्धः
अचिन्तयत् — कः माम् इतः काल-पाशात् इव व्याध-पाशात् त्रातुम् मित्रात् अन्यः समर्थः? "The crow
said: 'So be it.' Then in the morning they all went to the places they liked. One day the
jackal says in secret: 'Friend deer, in one part of this very forest there is a field full of
corn. I will take you there and show you.' When that was done, the deer goes there daily and
eats the corn. Then, after a few days, the field's owner saw it and set snares there. Then the
deer, come again and grazing there, was caught in the snares and thought: 'Who but a friend
can save me from the hunter's snare, as from the noose of Death?'"

| Form | Status |
|---|---|
| काकेन · एवम् · अस्तु · अथ · प्रातः · सर्वे · एकदा · सखे · मृग · एतस्मिन् · एव · क्षेत्रम् · अस्ति · तत् · अहम् · त्वाम् · तत्र ×4 · मृगः ×2 · खादति · ततः · पाशाः · पाशैः · बद्धः · पुनः · अचिन्तयत् · कः · माम् · इतः · इव · मित्रात् · अन्यः | T (V1–V3) |
| उक्तम् | T (impersonal -त + instr. काकेन, c04.l01, c05.l01) |
| गताः · कृते · आगतः | T (-त, c04.l01) |
| तथा कृते सति | T (the locative absolute, c05.l04) |
| नीत्वा · गत्वा · दृष्ट्वा | T (c04.l02) |
| दर्शयामि | T (c05.l02 headword) |
| चरन् | T (चरति c03.l02; -अत् c04.l01) |
| ब्रूते | L (the Ā cell of ब्रवीति, c03.l03 ◐) |
| वनैकदेशे · क्षेत्रपतिना · कालपाशात् · व्याधपाशात् | T (built compounds of owned words; पतिः c03.l04) |
| प्रत्यहम् | L (an avyayībhāva like the owned प्रतिदिनम्, c04.l04) |
| **Glossed (10):** यथाभिमतदेशम् "to the places they liked" · निभृतम् "secretly" · शृगालः "jackal" (not headworded: rule 22) · सस्यपूर्णम् "full of corn" · सस्यम् "corn" · दिनकतिपयेन "after a few days" · योजिताः "were set" (causative -त of युनक्ति, ◐) · अनन्तरम् "then" · त्रातुम् "to rescue" · समर्थः "able" | G |

**Gloss ratio:** 10 of 63, about 1 in 6.3. **Together:** 13 of 95, about 1 in 7.3. Exit
can-do 1 is set by X-b, the passage chosen with no regard to the ledger: **no more than one
word in six**. (The base design's "one in seven" rested on X alone; the pedagogue's target of
one in eight to ten would need about fifteen more frequency-chosen headwords: Q10.)

**Retake forms.** X-a: the block before it (rājā ca sāṣṭāṅga-pātaṃ praṇamyovāca … antaḥ-puraṃ
praviṣṭaḥ, after Hit 3.103). X-b: the next block of the same story (atrāntare jambukas
tatrāgatya …, line 675; it contains utkṛtyamānasya and ullāsitaḥ). The c06 fact base measures
both; if either exceeds one gloss in five words, the retake is the same passage after two
weeks (Volume 3 decision 8, applied again).

### 5.9 The sūtras and commentary lines Chapter 6 reads (and the three cold reads of the exams)

| Lesson | Sūtra (data file text) | Commentary read | Source line in the e-text |
|---|---|---|---|
| c02.l04 (E) | 7.1.13 ङेर्यः (after the owned 7.1.12 टाङसिङसामिनात्स्याः) | none (case code only; the carried word is chosen from three offered and is not printed here: it is the task's answer) | — |
| c03.l06 (A) | 3.2.111 अनद्यतने लङ् | none (case code only; the bracket line prints both data-file fields, §1.4.3: carried कृत् 3.1.93 (*preview*); headings 3.1.1, 3.1.2, 3.1.91, and भूते 3.2.84 given by name for the task; 3.1.3 under "further headings") | — |
| c06.l01 | 1.4.23, 1.4.24, 1.4.32, 1.4.42, 1.4.45, 1.4.49, 1.4.54 | Kāśikā: definition clause + examples (§4.6, c06.l01 table); the "इति किम्" tests on 1.4.42 (गङ्गायां घोषः) and 1.4.49 (माषेष्वश्वं बध्नाति) | JKv_1,4.23 … 1,4.54 |
| c06.l02 | 8.4.1 रषाभ्यां नो णः समानपदे | Kāśikā: the vṛtti, three examples with र, three with ष, the counter-example अग्निर्नयति | `jvkasipu.htm` 82803 ff. |
| c06.l02 | 8.4.2 अट्कुप्वाङ्नुम्व्यवायेऽपि | Kāśikā: the vṛtti; करणम् … गुरुणा; अर्केण, मूर्खेण, गर्गेण | after 8.4.1 |
| c06.l02 | 7.3.84 सार्वधातुकार्धधातुकयोः | Kāśikā: the vṛtti; तरति नयति भवति; कर्ता चेता स्तोता | JKv_7,3.84 |
| c06.l02 | 1.2.4 सार्वधातुकमपित् | Kāśikā: the vṛtti; कुरुतः कुर्वन्ति चिनुतः चिन्वन्ति; the अपित् test करोति करोषि करोमि | JKv_1,2.4 |
| c06.l02 | 3.2.115, 3.4.82, 6.4.88, 6.1.8, 6.1.4, 7.4.60, 7.4.59, 7.4.73, 8.4.54 | LSK VLk 393–401, the बभूव prakriyā (VLk 394, 3.4.82, printed between the first two "…") | `varlghku.htm`, after VLk 392 |
| c06.l03 | 1.4.2 विप्रतिषेधे परं कार्यम् | Kāśikā: lines 1–3 (तुल्यबलविरोधो विप्रतिषेधः … परं कार्यं भवति) and the limit line | JKv_1,4.2 |
| c06.l03 | 7.3.102 सुपि च · 7.3.103 बहुवचने झल्येत् | Kāśikā: "ato dīrgho yañi ity anuvartate"; वृक्षाय; वृक्षेभ्यः, वृक्षेषु | JKv_7,3.102–103 |
| c06.l03 | 1.1.56 स्थानिवदादेशोऽनल्विधौ | Kāśikā: धात्वादेशो धातुवद्भवति — अस्तेर्भूः, ब्रुवो वचिः … भविता, वक्ता; अङ्गादेशोऽङ्गवद्भवति — केन काभ्याम् कैः; कृदादेशः कृद्वद्भवति — प्रकृत्य प्रहृत्य; … तुक् | the running text before 1.1.57 (lines 1422–1450) |
| c06.l03 | 8.2.1 पूर्वत्रासिद्धम् · 8.2.2 नलोपः सुप्स्वरसंज्ञातुग्विधिषु कृति | Kāśikā on 8.2.1: lines 1–5 (the domain; सिद्धकार्यं न करोति) and the व्/य्-lopa line (अस्मा उद्धर, द्वा अत्र, द्वा आनय, असा आदित्यः); on 8.2.2: the राजभिः line and the राजभ्याम्/राजसु line | JKv_8,2.1–2 |
| c06.l04 (B) | 6.1.97 अतो गुणे | Kāśikā: अपदान्तात् इति वर्तते। अकारादपदान्ताद्गुणे परतः पूर्वपरयोः स्थाने पररूपमेकादेशो भवति। पचन्ति। यजन्ति। | JKv_6,1.97 |
| c06.l04 (B) | 3.1.133 ण्वुल्तृचौ | Kāśikā: धातोः इति वर्तते। सर्वधातुभ्यो ण्वुल्तृचौ प्रत्ययौ भवतः। कारकः। कर्ता। (the e-text continues हारकः …; not printed: it is the task's answer) | JKv_3,1.133 |

---

## 6. Left deliberately to Volume 5

Every row is a Volume 5 home that its plan must redeem, as §4.0.1 redeems the Volume 3 plan's
§6. **Scope of v5.c03 (after the critique, G19).** The ROADMAP gives v5.c03 महाकाव्यम्
उपनिषदश्च five lessons and gives Volume 5 no chapter for accent or Vedic grammar, and none for
reading the Mahābhāṣya or the Paribhāṣenduśekhara. So v5.c03 is given only what five
epic-and-Upaniṣad lessons can hold: the Nala text, BG 2.47 and Bṛhad. 1.3.28 (the ROADMAP's
own rows), the perfect forms that epic narrative is full of (met in reading), and accent
with the padapāṭha as one TRADITION card on an Upaniṣad line. The production of the rare
lakāras goes to reading only. A ROADMAP note PR records this scope (§0 item 6; Q18); rows
with no ROADMAP chapter are marked "not planned unless the ROADMAP adds a strand".

| Topic | Volume 4 status | Volume 5 home (ROADMAP chapters) |
|---|---|---|
| Accent (svara) as a system; Vedic forms (leṭ, Vedic infinitives, the subjunctive); the Ṛgveda padapāṭha | one card (इन्द्रशत्रु, c04.l04); one line (leṭ, c03.l05) | v5.c03: one TRADITION card (accent and the padapāṭha, read on an Upaniṣad line), by the ROADMAP note PR; accent and Vedic grammar as a system: not planned unless the ROADMAP adds a strand |
| Metre (anuṣṭubh pathyā/vipulā, IR-028; gāyatrī count, IR-029) and figures (yamaka, IR-027) | verses read for grammar only | v5.c04 (छन्दोऽलङ्कारौ) |
| Production of the aorist, benedictive, conditional and periphrastic future; मा + aorist beyond मा भैषीः | ◐ card | reading only (recognised in v5.c02 and v5.c03 texts); production not planned |
| 1st and 2nd persons of the perfect; the Ā perfect; the periphrastic perfect | ◐ | v5.c03, met in the epic reading (the Nala text), not a lesson of their own |
| Desiderative, intensive, denominative in production | ◐ card | v5.c01–c03 readings |
| The voice forms beyond the laṭ/loṭ passive and the present-system causative: the laṅ passive (अदृश्यत); the causative's -त participle, absolutive and passive (कारित, स्थापित, दर्शयित्वा, कार्यते, प्लाव्यते); the passive and causative aorists (अश्रावि, अजीजनत्) belong to the aorist row above | ◐ (c05.l01, c05.l02) | v5 readings (gloss lines shrink) |
| The -अनीय and -य gerundives (करणीयम्, कार्यम्; the causative's स्थाप्य) | ◐ card (c05.l01; c05.l02) | v5 readings (gloss lines shrink) |
| The numeral derivatives beyond the ordinals (-धा, -शः: Whitney §489) | not taught (named as deferred, c05.l03) | v5 readings |
| The ◐ Δ declensions (root nouns beyond the listed cells, ū-stems, सखि, पति, neuter i/u, the feminine of i/u/ṛ adjectives, नप्तृ, नृ, neuter ṛ, the -वांस् and -ईयस् stems, अदस्) | parse-only | v5 readings (gloss lines shrink) |
| Anvaya as a commentarial method in depth | the procedure (V3) | v5.c01 |
| The composition formula (pp.130–131) | — | v5.c05 |
| BG 2.47 word by word, Bṛhad. 1.3.28 | — | v5.c03 |
| The Paribhāṣenduśekhara and the Mahābhāṣya as texts to read | named (HISTORY) | not planned unless the ROADMAP adds a strand (v5.c05's capstone composes, recites, derives and translates; it reads no śāstra text) |
| The class-3 present beyond ददाति's listed cells; the athematic Ā cells beyond the listed (ब्रूते …) | ◐ (c03.l03) | v5 readings (parse when met) |
| The Pañcatantra 4 frame beyond the trick; the full Vīravara story | the volume's passages | v5.c02 (पञ्चतन्त्रम्) |
| Pañcatantra 1, the lion Bhāsuraka and the hare (reader-first's Text H, `vispancu.htm` line 1383 ff., measured by that design at 7 of 72 against a 650-word ledger) | not read (its gloss load against this plan's ledger is about 1 in 5) | v5.c02, as its opening text (the judges' suggestion) |
| The Nala opening as a running text (measured by reader-first at about 1 in 4) | one pāda only (MBh 3.50.11a, c05.l04) | v5.c03 |
| The genitive absolute in production | ◐ (c05.l04) | v5 readings |
| The perfect participle class (-वांस्, -आन) | ◐ (विद्वान् a headword nominative) | v5 readings (gloss lines shrink), not a v5.c03 lesson |
| The future participle (-स्यत् / -स्यमान: करिष्यन्, करिष्यमाणः) and the -अम् absolutive | ◐ (future participle: the c04.l01 card; -अम् absolutive: c04.l02 Teacher Notes) | v5 readings (gloss lines shrink) |
| Further taddhitas (the apatya system, -ईयस्/-इष्ठ), the gender-forming suffixes beyond -आ/-ई, samāsāntas, and avyayībhāva in production | cards (c04.l03–l04); deferral note (c04.l03); avyayībhāva ◐ (c04.l04) | v5 readings |
| The other paribhāṣās (antaraṅga, nitya, …) and the Mahābhāṣya's arguments | named in Teacher Notes (c06.l03) | not planned unless the ROADMAP adds a strand |
| Reading the frequency target of one gloss in eight to ten words | one in six at exit (§2.2) | the Volume 5 entry figure (Q10) |

## 7. Decisions taken at synthesis

### 7.1 Every error the judges found in the base design, and its fix

Each finding was re-verified before anything was changed: the sūtra in the data file, the
commentary line in the e-text, the form or statement in Whitney, the locus in the GRETIL file.

#### 7.1.1 The errors

| # | Judge(s) | The base design said | Re-verified against | Verdict and fix (where) |
|---|---|---|---|---|
| E1 | paniniya; house-editor (with a different reading) | "अण् in 1.1.69 is formed with the first ण्; in other rules with the second" (c01.l02) | Kāśikā on लण्: "इण्ग्रहणानि सर्वाणि परेण णकारेण। अण्ग्रहणानि तु पूर्वेण, 'अणुदित्सवर्णस्य चाप्रत्ययः' इत्येतदेवैकं परेण"; on अइउण्: "तस्य ग्रहणं भवत्येकेन उरण् रपरः"; LSK under 1.1.69: "अत्रैवाण् परेण णकारेण" | **Backwards; fixed.** अण् takes the first ण् everywhere but 1.1.69, which takes the second; इण् always the second (c01.l02; exam task B; Teacher Notes). The house-editor's "the first ṇ is used only in 1.1.51" over-reads the Kāśikā's "एकेन" (one pratyāhāra, अण्, with 1.1.51 as its example; 8.4.57 अणोऽप्रगृह्यस्यानुनासिकः also takes it): his half "1.1.69 uses the second" is right and is printed |
| E2 | paniniya | नमस् + सुँ → नमस्, "the ending deleted, 6.1.68" (§1.5) | Kāśikā on 2.4.82: अव्ययादुत्तरस्य आपः सुपश्च लुग्भवति; LSK VLk 373 = 2.4.82; 1.1.37 (owned) | **Wrong rule; fixed.** नमस् is an avyaya; its सुँ is deleted by 2.4.82 अव्ययादाप्सुपः (§1.5; the new derivation (c) of c02.l01, D) |
| E3 | paniniya | the helping अ "is for pronunciation (the Kāśikā under 1.1.71 and the LSK, VLk 1–4)" (c01.l01) | Kāśikā on लण्: "हकारादिष्वकार उच्चारणार्थः, न अनुबन्धः"; LSK VLk 1 says "उपदेश आद्योच्चारणम्" and under 3.2.123 "उच्चारणसामर्थ्याल्लस्य नेत्वम्", neither about this अ | **Wrong locus; fixed** (c01.l01, with the Kāśikā line) |
| E4 | paniniya | the card's "8 occurrences in the whole Hitopadeśa (Whitney §826)" beside the plan's own DCS count of 9 | Whitney §826 ("eight in the Hitopadeśa"); the DCS re-count (agamat 3, prādāt 1, aśrāvi 1, bhaiṣīḥ 3, kṛthāḥ 1) | **Both figures right, scope unstated; fixed:** each printed with what it counts (principle 5; §1.3.1; c03 inventory; c03.l05 card) |
| E5 | paniniya; pedagogue; house-editor | Chapter 1 exam task D: "सत्यमेव is not a vowel join, so the five are … गच्छामः" | 7.3.101 (owned) lengthens inside the verb form; no word boundary | **Fixed:** the fifth join is विद्यालयः (derived in c01.l02); गच्छामः is case-coded in task C; the drafting residue is removed |
| E6 | paniniya | "the narrative past of the epics … (Whitney §§821–822)" (c03 inventory, c03.l04) | Whitney §821a (no evidence of the "not witnessed" use), §821b (later language: "equivalent with the imperfect … on the whole less common than the imperfect"); §822 is about the Brāhmaṇas | **Mis-cited; fixed:** §821a–b quoted as the FACT hedge; the DCS counts carry the frequency claim (principle 5; c03 inventory; c03.l04) |
| E7 | house-editor | c05.l02 model sentence 4: व्याघ्रः पान्थाय कङ्कणं दर्शयति (causee in the dative) | 1.4.52 (बुद्धि-, a verb of seeing); Kāśikā on 1.4.53: "आत्मनेपदे इति किम्? दर्शयति चैत्रं मैत्रमपरः" | **Wrong case; fixed:** व्याघ्रः पान्थं कङ्कणं दर्शयति, with the Kāśikā line in Teacher Notes (c05.l02) |
| E8 | house-editor | N3a "7 of 28, 1 in 4"; N8 "5 of 23, about 1 in 4.6": heavier than Volume 3's exit (1 in 5) | re-measured by hand against the ledger | **Fixed by headwords** (rule 22): N3a 5 of 28 (1 in 5.6; स्नातः glossed in c04.l01, its verb being c04.l02's headword); N8 4 of 24 (1 in 6; recounted by script after the critique). Found at synthesis: N5 (3 of 14, 1 in 4.7) also failed; now 2 of 14 (1 in 7) |
| E9 | house-editor | Q4 "'The oldest complete running commentary' on the Kāśikā" | the claim is about the Kāśikā itself, and has no source in REFERENCES | **Fixed:** the §17 line of c06.l01 prints "a running commentary on the whole Aṣṭādhyāyī, and the one this course reads"; no superlative (Q4 closed) |
| E10 | house-editor | MBh 3.50.11a taken from the local `mbh` JSON | GRETIL `mbh_03_u.htm`: "03,050.011a atha tāṃ vayasi prāpte …" | **Pāda right, source wrong; fixed:** re-verified in GRETIL; the JSON is never quoted (§5.4) |
| E11 | pedagogue | kāraka theory under-delivered as a card in the absolutes lesson | the Volume 3 §6 row (kāraka theory → v4.c05) | **Fixed:** c05.l04 is the kāraka lesson (§7.2, D-S1) |
| E12 | pedagogue | c04.l01 teaches four participles with eight extra rules in 45 minutes | the lesson block | **Fixed by trimming** (c04.l01: -त forms as vocabulary facts, six D, the rest on cards, -अत्/-मान nominatives in one move) |
| E13 | pedagogue | the volume exam's unseen passage is 30 words | exit can-do 1 (120–200 words) | **Fixed:** X-a + X-b, 95 words (§5.8; recounted by script after the critique, G23); the can-do reads "60–150 words" |
| E14 | pedagogue | exit can-do 14 asks for "90 new Q" by gist: an unbudgeted load | §4.0.3 | **Fixed:** the sūtra budget (§1.4.1): 25 new Q and 25 new B by gist; by number only the 28 + 26 |

#### 7.1.2 Errors found at synthesis (not in the judges' lists)

| # | The base design said | Fix |
|---|---|---|
| S1 | c05.l05 spiral: "सुखिनः now a bha cell of the -इन् stem, 1.4.18" | the nom. pl. is a sarvanāmasthāna ending (1.1.43): सुखिनः is a strong cell (fixed) |
| S2 | अर्पयति headworded "(Panc 4 अर्पयामि, the c05.l05 passage)": chosen for an exam's unseen text | dropped (rule 22); replaced by व्यापादयति and मृत्युः; N7 re-measured at 6 of 31 (recounted after the critique) |
| S3 | X's retake "the next block of the same story (rājā ca sāṣṭāṅga-pātaṃ …)" | that block comes *before* X in the e-text; the retake forms are restated (§5.8) |
| S4 | the Vīravara headwords justified as "the volume exam" | re-justified by frequency or thread; X-a measured both ways; the exit figure set by X-b (§5.8) |
| S5 | Whitney's model of guṇa not stated beside Pāṇini's | added (c02.l02: §235a "a prefixed a-element"); principle 5 now lists four FACT/TRADITION pairs |
| S6 | "1.1.69" etc. sorted into kinds by the data file's tags (system-first) would mislead | the tags shown once in c06.l01 as the file's labels, with the 1.1.69 caution (§1.4.3) |
| S7 | c05 n+2 Station 0 bookings broken by the lesson swap | re-linked (c05.l01 → l03, c05.l02 → l04, c05.l03 → l05, c05.l04 → c06.l01) |
| S8 | प्रभातम् headworded in c04.l04 | **a double count**: owned since v2.c01.l03 (`ledger-all.tsv`); dropped, replaced by युद्धम् (found by the arithmetic script of §3) |

#### 7.1.3 The problems the judges listed for the base design, and what was done

| Problem (judge) | Resolution |
|---|---|
| The two-ṇ fix must reach Teacher Notes and exam task B (paniniya) | done (c01.l02, c01 exam B) |
| "Unaided" with a 60-sūtra card, against the ROADMAP's "done by the learner" (paniniya) | the task is renamed "from the toolbox card"; the card is defended as testing choice and order (V4-D13); a card with texts but no numbers was offered as the alternative and declined (§7.3 Q9) |
| Ledger 96 thin; Chapter 6 adds 6 (paniniya, house-editor) | 119 (exit 627); Chapter 6 adds 10 (§3) |
| X's headwords inflate the "unseen" ratio (paniniya) | X-a measured both ways; X-b, chosen without regard to the ledger, sets the exit figure (§5.8) |
| c05.l04 (consonant stems, now c05.l03) heavy (paniniya, pedagogue) | a minute plan in the block; ◐ cards read once, never drilled; seven headwords kept (cap 8). After the critique (G17): the numeral card's second half (5–19, the ordinals, the case names as ordinals) moved to c05.l04's Station 0 and §15, so that c05.l03 carries one productive point |
| -अत् declined only in Chapter 5 while used from c04.l01 (paniniya, pedagogue, house-editor) | the split is the Volume 3 §6 rows' own (formation v4.c04, declension v4.c05); the absolute now follows the full table (c05.l03 → c05.l04) |
| Hot spots c03.l01, c03.l04, c02.l03 (pedagogue) | c03.l04 trimmed (Q 1, D 7, K 10); c03.l01's eleven B are one drilled chain (Q13); c02.l03 kept (V4-D4), "tools added: 10" printed |
| Derivation tables with no fixed format (pedagogue) | §1.4.2 |
| No audit of the Volume 3 Teacher-Notes sūtras (house-editor) | §4.0.6 |
| The 1.x laṅ and ātmanepada errata not caught (house-editor) | added (c03 intro, c03.l01, c03.l06; §4.0.4) |
| 226 sūtras in learner text (house-editor) | kept as printed tools, but tiered: only 50 new by gist, 53 by number (§1.4.1) |

### 7.2 The grafts (taken, adapted, declined) and the other decisions, with reasons

#### 7.2.1 Grafts from reader-first

| Idea (as the judges named it) | Decision | Where, and why |
|---|---|---|
| The DCS frequency tables as the evidence base | **take** | §1.3.1, with the past-tense rows re-counted; they decide every ✓/◐ line of the plan |
| The "Kāśikā kit" | **take** | c06 inventory; the formulas taught as chunks, never counted (rule 21) |
| The grammarians' stock-example headwords (कटः, स्थाली, दात्रम्, लुनाति, परशुः, उपाध्यायः, ओदनः, दोग्धि) | **adapt** | four headworded (उपाध्यायः, परशुः, कटः in c06.l01; स्थाली in c05.l04); the rest glossed, so that the ledger does not fill with Kāśikā words (the house-editor's caution) |
| Chapter 6 by sūtra kind (saṃjñā → vidhi → paribhāṣā) | **take** | c06.l01–l03 re-cut; the base's texts kept, regrouped (D-S2) |
| The data file's `an`/`ad` fields as scaffolding, then withdrawn | **take** | §1.4.3 (c02.l03 to c05.l05 printed; withdrawn in Chapter 6) |
| The Māheśvara sūtra 11 e-text error and the other corrections | **take** | c01.l01; the §4.6 spelling list |
| 1.2.6 for बभूव | **take** | c03.l04 (K) and c06.l02 |
| 1.1.56 shown through अस्तेर्भूः / ब्रुवो वचिः | **take** | c06.l03 (b), linked to भविष्यति and वक्ता |
| 3.1.133 ण्वुल्तृचौ as an unseen exam sūtra | **take** | c06.l04 task B; for that reason 3.1.133 is not quoted in c04.l02 or c03.l03 |
| The kṛt evidence table (markers choose the grade) | **adapt** | placed on c03.l03's anubandha card, where the markers are collected (display), not in c02.l02 |
| The ṇatva sort with कृष्णेन and वाक्षु | **take** | c02.l03 |
| The Fillmore note (both keys exist) | **take** | c05.l04; Q6 closed |
| Text H (Pañcatantra 1, the lion and the hare) as the exam text or a serial | **decline** for Volume 4 | its gloss load against this ledger is about 15 of 72 (1 in 4.8: व्यापादयन्, वधः, समयः, क्लेशः … are reader-first's headwords, not this plan's); the Panc 4 serial is kept (house-editor); Text H goes to v5.c02 (§6) |
| Text F (Hit 4, the mouse made a tiger) as a Chapter 4 reading | **decline** (offered) | measured against another ledger; not added to Volume 4; the c04 fact base may measure it and record the figure for Volume 5 (§7.3 Q16) |
| Present participles moved to c03.l05 (D-V4-3) and the other three home moves | **decline** | the Volume 3 §6 homes are binding (house-editor); c04.l01 was relieved by trimming instead |
| The numeral card ◐ | **decline** | D11 and the preservation map home the numeral system as taught (✓ listed cells, c05.l03 and, after the critique, c05.l04's §15) |
| A dedicated kāraka lesson | **adapt** | c05.l04, with the absolute as its contrast case (D-S1) |
| Aorist, conditional, benedictive ◐ with मा-chunks | **take as in the base** | only मा भैषीः ✓ (3 DCS tokens); मा कृथाः ◐ (1 token); मा शुचः declined (not in the Hitopadeśa; its aṅ is optional by 3.1.57 इरितो वा, paniniya's note on system-first) |
| reader-first's own errors (6.4.56 for आलोच्य; the पाण्डव string; class 10 "p-marked"; रामेण "आ म ए"; त्याजकः under 7.2.115; the tiṅ machinery deferred to c06) | **not imported** | आलोच्य is given with 6.4.51 (Teacher Notes, c04.l02); the l-affix chain stays in c03.l01 |

#### 7.2.2 Grafts from system-first

| Idea | Decision | Where, and why |
|---|---|---|
| The fixed derivation format (§1.6) | **take** | §1.4.2, as the house format |
| Padaccheda with case labels under every quoted sūtra | **take** | §1.4.3, from c01.l03 on |
| The data-file counts (3,983 records; book sizes; tags) | **take, with a caution** | principle 6; c06 inventory; the tags shown as the file's, not the tradition's (paniniya's 1.1.69 note) |
| The Whitney-checked ten-lakāra synopsis; the 1.x laṅ errata; 3.2.111 read cold | **adapt** | the √भू table (c03.l06) carries the corrected laṅ label; 3.2.111 is read cold in the Chapter 3 exam (task A), not the volume exam, whose task B holds 6.1.97 and 3.1.133 |
| The ātmanepada erratum ("benefits oneself") | **take** | c03.l01; §4.0.4 |
| "~42 pratyāhāras" only with a counting method | **take** | principle 4; c01.l01; §4.0.4 |
| The kit / non-kit kṛt contrast (कृतः / कर्ता) | **adapt** | c04.l02: -त्वा (k) against -तुम् and the agent -तृ (no k); this also delivers the Volume 3 §6 "agent -तृ as a process" in v4.c04, which the base had left on a card (D-S3) |
| त इच्छन्ति as the second example of 8.2.1 | **take** | c06.l03 (d), with the Kāśikā's own व्/य्-lopa line on 8.2.1 |
| The case names as ordinals | **take** | c05.l04's §15 (moved from the c05.l03 numeral card after the critique, G17), with Whitney §487h |
| The register-sort exam task | **take** | c06.l04 task G |
| The audit of the Volume 3 Teacher-Notes sūtras "for v4" | **take** | §4.0.6 |
| The unseen Hit 1 deer-and-jackal passage (R4) | **take** | X-b of the volume exam (§5.8), re-measured against this ledger at 10 of 63 |
| upapada vs kāraka vibhakti; स्थाली पचति; the T16 map | **adapt** | c05.l04, the map as a card (not a memorised table: the memory budget stays at five) |
| The Kāśikā's own 2.3.37 example | **take** | c05.l04 Teacher Notes: गोषु दुह्यमानासु गतः, दुग्धास्वागतः |
| The Viṣṇuśarman serial; R1–R3 at the chapter exams | **decline** | the Panc 4 serial and the Vīravara thread are kept (house-editor); the base already reads an authentic text at the c03–c06 exams; the c01–c02 exams test the sound system and the machinery |
| Eight memorised tables; the productive aorist; the four-lakāra lesson; kāraka + causative in one lesson | **decline** | the DCS evidence (aorist 0.2%, conditional 0) and the one-point rule (all three judges) |
| "The motto's जयते has a sūtra" (1.3.19) | **decline** | 1.3.19 gives Ā only after वि / परा; the Volume 3 honesty line stands (§4.0.6) |
| The judges' corrections to system-first (रामेषु is not the 1.4.2 case; 7.2.118 for k-marked taddhitas; Whitney's guṇa/vṛddhi glosses) | **applied where the idea is used** | c06.l03 (a) (रामेभ्यः, not रामेषु); c04.l03 (7.2.118, Teacher Notes); c02.l02 (§235a's glosses) |

#### 7.2.3 Other decisions taken at synthesis

| # | Decision | Reason |
|---|---|---|
| D-S1 | **Chapter 5 re-cut:** passive (l01) → causative (l02) → consonant stems (l03) → the kāraka lesson with the absolute (l04). | Kāraka theory becomes a lesson (pedagogue); the absolute is built on the full -अत् table (all three judges); the five §6 rows of v4.c05 keep their chapter. The kāraka lesson's one production point is the locative absolute, with the kāraka map as its card (restated after the critique, G18; Q14 decided). |
| D-S2 | **Chapter 6 re-cut by sūtra kind:** saṃjñā (l01: the kāraka prakaraṇa), vidhi (l02: 8.4.1–2, 7.3.84, the LSK बभूव), paribhāṣā (l03). | reader-first's progression; the kāraka sūtras are read the lesson after c05.l04 taught them. |
| D-S3 | **The agent noun -तृ as a process in c04.l02**, with ✓ nominatives. | The Volume 3 §6 row; the kit / non-kit contrast; 3.1.133 kept unseen for c06.l04. |
| D-S4 | **The sūtra budget:** 25 new Q, 25 new B by gist; R for Chapter 6 reading. | The pedagogue's and house-editor's cap (about 40–50 by gist) and exit can-do 14. |
| D-S5 | **Ledger 119 (508 → 627)** with rules 22–23. | The house-editor's 115–125; paniniya's 604–650; every text at one in five or better. |
| D-S6 | **Exit reading figure one in six**, set by X-b. | Honest measurement (§5.8); the higher target is Volume 5's (Q10). |
| D-S7 | **The volume exam's sitting 2 = E (25 min) + F (15) + G (5).** | Two unseen passages and the register sort in one sitting. |

#### 7.2.4 The base design's own decisions (V4-D1 … V4-D14), as kept or amended

| # | Decision | Reason |
|---|---|---|
| V4-D1 | **Spine: derivation first.** Each lesson is built round the derivation of an owned form, and each tool enters when that derivation needs it. | The brief's organising principle; IR-041. |
| V4-D2 | **The भवति derivation is never done whole before c06.l04.** Each of its steps is taught on another form (नयति, स्मरति, जयति, भावयति …). | The final task is then a transfer task, not a recital, and every step has been met. |
| V4-D3 | **guṇa/vṛddhi defined in c02.l02**, not in Chapter 1, though 1.1.1–2 use Chapter 1's tapara. | The Volume 3 §6 row puts them in v4.c02 with IR-021, and c02.l02 is where the substitute/augment contrast needs them. |
| V4-D4 | **ṇatva and ṣatva are the material of the anuvṛtti lesson** (c02.l03). | 8.4.2 is unreadable without anuvṛtti from 8.4.1, and 8.3.59 without the 8.3.55/57 headings: the rule and the meta-device need each other. |
| V4-D5 | **Pada (P/Ā/ubhaya) in c03.l01, with the ending; voice (prayoga) in c05.l01.** | The pada is a property of the root's marker, the voice a property of the l-affix's meaning (3.4.69); keeping them apart prevents the 1.x conflation. |
| V4-D6 | **Three card exceptions with listed ✓ cells:** the gerundive (-तव्य, c05.l01), the numeral card (c05.l03, its second half in c05.l04's §15), the chunk मा भैषीः (c03.l05). After the critique (G18), principle 3 also names c05.l04's kāraka map as the one large card with no production target. | The DCS gerundive count (256 in the Hitopadeśa); D11's numerals "v4.c05"; मा भैषीः's frequency (3 of the 9 aorist tokens in the Hitopadeśa). |
| V4-D7 | **The other four lakāras are one recognition card** (c03.l05), not lessons. | Whitney §826 and the DCS counts: about 9 aorists, 3 precatives and no conditional in the whole Hitopadeśa. |
| V4-D8 | **Amended at synthesis (D-S1), and again after the critique (G18):** c05.l04's one production point is the locative absolute, the case no kāraka gives; the kāraka theory is its card, the kāraka map, taught in full but assessed only as "According to Pāṇini…" and never produced (principle 3); the definitions are read with the Kāśikā in c06.l01. Base text: "Absolutes in c05.l03 with the kāraka definitions as its card." | The absolute is the case use that is *not* a kāraka; the contrast teaches the definitions. Kāraka theory is spread over the derivations that need it (c05.l01 kartṛ/karman; c05.l02 hetu, the double accusative). |
| V4-D9 | **Numerals as a Δ card on the consonant-stem lesson. Amended after the critique (G17):** the card is split. c05.l03 keeps द्वि–चतुर् and the tens, 100 and 1000; 5–19, the ordinals and the case names as ordinals move to c05.l04's Station 0 and §15, a Δ drill on c05.l03's tables with no new sūtra. | पञ्चन्–दशन् are n-stems, षष् and चतुर् consonant stems: the system lesson is their home; but one lesson cannot also carry the whole numeral system as a second productive point (the critique), and the Volume 3 §6 row needs only v4.c05. |
| V4-D10 | **The §17 serial retells Pañcatantra 4 to the brink of the trick**; the trick is the Chapter 5 unseen passage. | The Volume 3 serial method (D3), and the c05#11 lesson of the Volume 3 review (a serial text cannot be "unseen"). |
| V4-D11 | **The Vīravara story (Hit 3, story 8) is the volume's Hitopadeśa thread**, read in c03.l04, c03.l06 and c05.l02, with its unread report as half (X-a) of the volume exam's reading; amended: the other half (X-b) is a story the course never reads (§5.8). | It is dense in perfects, causatives and passives, and the exam passage measures about 1 in 10. |
| V4-D12 | **Amended (D-S4): five tiers (Q/B/D/K/R)** in place of Volume 3's single list, with a budget. | A derivation-first volume prints a sūtra at every step; only Q and B are to be recognised (exit can-do 14). |
| V4-D13 | **Toolbox card allowed in task C** (kept; the task is named "from the toolbox card"). | The volume teaches choosing and ordering rules; recall of numbers is not a B2 skill. The ROADMAP's "done by the learner" is met: nothing but the card is open (Q9 offers a texts-only card). |
| V4-D14 | **Amended (D-S5): ledger 119 new (508 → 627).** Base: 96 (508 → 604). | Grammar-heavy chapters, a cap of 8, the reading texts' needs, and rules 16–21 (roots, kṛt and taddhita products and technical labels never count unless lexicalised). |

---

### 7.3 Decisions on the open questions (the deputy's, confirmed by the editor on 2026-11-10)

Decided by these rules, in this order: correctness first; the ROADMAP's chapters and lesson
counts stand; one grammar point per lesson and at most 8 headwords; material moves to a
later lesson or to Volume 5 rather than overloading a lesson; the ledger chain stays as it
is where it can. Each decision is applied in the plan as written; the editor confirmed all
nineteen on 2026-11-10 (the note that closes this section).

1. **Q1 — The Dhātupāṭha's accents.** The pada table of c03.l01 states the it-vowels'
   accents (पठ udātta, रुच anudātta, पच svarita) as TRADITION, and the local LSK does not
   print accents. **Decision:** c03.l01 prints "the Dhātupāṭha records … (accent not shown)"
   and the LSK's grouping; the accent names print only if the c03 fact base cites an
   accented Dhātupāṭha under a REFERENCES key (the `dhatupatha` key names no edition).
   *Reason:* correctness; no claim prints without its source.
2. **Q2 — The Nandikeśvarakāśikā.** **Decision:** no new key now. c01.l01's callout uses the
   1.x wording ("a legend tells …"), labelled legend, with no verse quoted, until a citable
   edition is found. *Reason:* sanskritdocuments.org is not a citable edition.
3. **Q3 — HISTORY keys for the grammarians' line.** **Decision:** `cardona1997` is enough for
   Pāṇini's predecessors and his date, with the hedge; no second key unless a fact base
   finds a claim it does not cover. *Reason:* the lines are few and hedged.
4. **Q4 — closed at synthesis** (E9): c06.l01 prints "a running commentary on the whole
   Aṣṭādhyāyī, and the one this course reads".
5. **Q5 — The Indraśatru story's Brāhmaṇa locus.** **Decision:** only the Mahābhāṣya verse
   prints (verified locally); the Tvaṣṭṛ story does not print in Volume 4. *Reason:* the
   accent card is one card, accent is Volume 5's, and the locus is unverified here.
6. **Q6 — closed at synthesis:** the Fillmore note prints in c05.l04; both keys exist.
7. **Q7 — The sanādi count (IR-025).** **Decision:** no number prints. The card says "the
   affixes from सन् onward, among them …", names the ones the course uses, and corrects the
   1.x "10 types" (which listed nine) by quoting it as the error it is. *Reason:* a count
   depends on whether affixes or sūtras are counted, and principle 6 forbids a figure
   without one method.
8. **Q8 — IMPROVEMENT_REPORT summary rows.** **Decision:** approve one PR aligning the
   report's summary with §4.0.1 for **four** rows: IR-016 (v4.c02.l03 and v4.c06.l02),
   IR-026 (v4.c04), IR-022 (v4.c03.l03) and IR-023 (v4.c05.l01) (G42).
9. **Q9 — Task C's card.** **Decision:** (a), as planned: the number-ordered card of 60
   sūtras (the 26 and 34 distractors), with the scoring corrected (G26: each of the 26
   sūtras placed, 1 point; order 4; 30, pass at 21). *Reason:* the volume teaches choosing
   and ordering; the 26 numbers are asked by heart in task D and at Station 0.
10. **Q10 — The ledger and the exit reading figure.** **Decision:** keep 119 (exit 627) and
    exit can-do 1 at one in six (X-b). The one-in-eight-to-ten target is the Volume 5 entry
    figure. *Reason:* the chain stays as it is, and fifteen more headwords would push nine
    lessons to the cap.
11. **Q11 — The perfect's Ā 3rd person.** **Decision:** ◐ as planned; met in reading in
    v5.c03 (§6). *Reason:* c03.l04 is already a trimmed hot spot.
12. **Q12 — Text labels N1–N8, X-a, X-b.** **Decision:** adopt as house style for Volume 5.
13. **Q13 — c03.l01's load (15 tools).** **Decision:** accept. The eleven B steps are one
    drilled chain, and moving the person/number rules would leave the day's derivation
    unfinished.
14. **Q14 — The kāraka lesson's second half.** **Decision:** decline the move of the locative
    absolute to c04.l02, which would change the Volume 3 §6 home (v4.c05) and overload
    c04.l02. Instead c05.l04 is restated (G18): its one production point is the locative
    absolute, and the kāraka map is its card, with no production target, named in
    principle 3 (V4-D8 amended).
15. **Q15 — The Vīravara thread headwords.** **Decision:** keep all five; X-a is reported
    both ways (now 3 of 32, and 8 of 32 without them), and X-b sets the exit figure.
16. **Q16 — Optional extra readings (Text F).** **Decision:** not added to Volume 4. The c04
    fact base may measure it and record the figure for Volume 5. *Reason:* no lesson has room
    for it.
17. **Q17 — An authentic reading in the Chapter 1 and 2 exams.** **Decision:** no. Those
    exams test the sound system and the machinery inside 45 minutes; the c01.l04 spiral's
    Volume 3 joined line (सर्वे भवन्तु सुखिनः…) is the only text either exam reads.
18. **Q18 (new, from G19) — The scope of v5.c03.** **Decision:** raise a ROADMAP note PR.
    v5.c03 (five lessons) holds the Nala text, BG 2.47, Bṛhad. 1.3.28, the perfect forms met
    in that reading, and one TRADITION card for accent and the padapāṭha. The production of
    the rare lakāras is by reading only. The Mahābhāṣya, Paribhāṣenduśekhara and
    other-paribhāṣā rows are "not planned unless the ROADMAP adds a strand" (§6).
19. **Q19 (new, from G17) — The numeral card's split.** **Decision:** c05.l03 keeps
    द्वि–चतुर् and the tens, 100 and 1000 (its two headwords stay, the chain is unchanged);
    5–19, the ordinals and the case names as ordinals move to c05.l04's Station 0 and §15, a
    Δ drill with no new sūtra (V4-D9 amended). *Reason:* c05.l03 carries one productive point;
    D11 needs only "v4.c05"; c06.l01, which adds no tools, would take the numerals out of
    Chapter 5.

**The editor's confirmation (2026-11-10).** The editor read the nineteen decisions, the
repair report (46 of 46 critique gaps applied) and the check that followed it (17 new
problems, all fixed in this text), and confirms all nineteen as decided. Three are carried
out in the repository by the commit that adds this plan: the IMPROVEMENT_REPORT summary rows
for IR-016, IR-022, IR-023 and IR-026 are aligned with §4.0.1 (Q8); a ROADMAP note fixes the
scope of v5.c03 and marks the Mahābhāṣya and Paribhāṣenduśekhara strand "not planned" (Q18);
and the ledger rules 16–23 of §3 are merged into STYLE_GUIDE §8. A decision recorded in this
section is not re-opened unless it is factually wrong — wrong Sanskrit, a wrong sūtra, a wrong
statement about a source — or the plan's own text contradicts it; a chapter fact base that
finds such a case records the correction in its §7, and it is carried into §7.6.

### 7.4 The critique and its fixes

The critique's 46 gaps, each with the fix made and the places changed. Where its fix was
applied otherwise, the row says so and the deviation is recorded.

| Gap | Severity | The gap | The fix made | Places changed |
|---|---|---|---|---|
| G1 | major | neuter dual printed गच्छती | n. गच्छत्, गच्छन्ती, गच्छन्ति (Whitney §§447–449); a Teacher-Notes line: thematic stems keep the nasal (7.1.81 after शप्/श्यन्; 7.1.80 optional after श), athematic stems have none (अदती, रुदती) | c05.l03 T11 note |
| G2 | major | शतृ's markers credited to 1.3.3 | "1.3.2 (the ऋ), 1.3.8 (the श्), 1.3.9"; the other marker lists checked (शानच्, तृच् and क्त्वा are right as printed); the णल् step also lacked 1.3.9, added | c05.l04 सति table step 1; c03.l04 जगाम step 1 |
| G3 | major | 1.1.40 cited for -तुम् | 1.1.40 for -त्वा and 1.1.39 कृन्मेजन्तः (D) for -तुम्; §4.0.3 regenerated (with G28, G32, G38: 237 sūtras, D 122, K 51); c04.l02 tools added 8 → 9 | c04.l02 grammar point and tier line; c04 inventory; §4.0.3 |
| G4 | major | "guṇa" for गन्तुम्/गन्ता; *गन्त्वा as guṇa | the k-marker's three jobs: blocks guṇa (कृत्वा/कर्तुम्, श्रुत्वा/श्रोतुम्), licenses nasal loss (6.4.37: गत्वा/गन्तुम्), licenses samprasāraṇa (6.1.15: उक्त्वा/वक्तुम्); दृष्ट्वा/द्रष्टुम् added with 6.1.58 (Teacher Notes); risk 2 is "the nasal kept (*गन्त्वा)" | c04.l02 grammar point, table header, minimal pairs, tier line, main risk; §4.0 glance; §2.2 can-do 9 |
| G5 | major | णल्/थल् called pit, the rest "ṅit-like" | they count as pit as substitutes of तिप्, सिप्, मिप् (1.1.56, previewed); the rest are kit by 1.2.5 (K) | c03.l04 grammar point |
| G6 | major | *जगाम starred for "I went" | star removed: जगाम/जगम (7.1.91, Teacher Notes) is a correct 1sg, ◐ here; "I went" is अगच्छम् | c03.l04 main risk |
| G7 | major | loṭ strong cells: only 3sg | strong in the 3sg and all 1st persons (शृणवानि, शृणवाव, शृणवाम; आट् pit, 3.4.92), weak elsewhere, 2sg हि apit (3.4.87); both Teacher Notes | c03.l03 laṅ/loṭ bullet; §4.0.6 row 3.4.87 … |
| G8 | major | द्वारि taken as a cell of द्वारम् | द्वारम् n. kept; द्वारि glossed in N1 as loc. of द्वार् f. (MW dvār; Apte dvār f.); headword evidence now राजद्वारम् (N6); N1 8 of 43, 1 in 5.4 | c03.l04 headword note and reading line; §5.1 |
| G9 | major | गृहाण marked T with no rule | added to c03.l03's loṭ line as a listed form (3.1.83 with 6.4.105, Teacher Notes); N3b 9 of 45 (सरसि glossed, the s-stem cells being ◐ until c05.l03) | c03.l03; §5.3 N3b table |
| G10 | major | 8.4.2's anuvṛtti field misquoted; 8.3.59's सः omitted | under 8.4.2: "carried (data file): रषाभ्याम् (8.4.1)" plus a separate "carried (course): नः णः समानपदे"; under 8.3.59: सः (8.3.56), नुम्विसर्जनीयशर्व्यवाये · अपि (8.3.58), beside the two headings | c02.l03 derivation (a) step 4, derivation (b) step 2, the bracket-line paragraph |
| G11 | major | §5.9 prints task B's answer | §5.9 stops at कर्ता with "(the e-text continues हारकः …; not printed: it is the task's answer)" | §5.9 |
| G12 | major | "ten lakāras" ≠ the tradition's ten; leṭ "eleventh" | TRADITION as the LSK gives it (line 1293: leṭ the fifth, liṅ once) against the classical table's ten rows (liṅ split); "eleventh" dropped; can-do 2 "all the classical tense-moods" | c03.l05 leṭ line; c03.l06 assembly and table; Chapter 3 goals and exam A; c03.l06 payoff; §2.2 can-do 2; §4.0 glance; §4.0.1; §4.0.2 |
| G13 | major | same-doer locative absolute in the serial | "मकरे समुद्रमध्यं गते वानरोऽचिन्तयत्" and "तस्मिन्समुद्रमध्ये गच्छति वानरस्तूष्णीमभवत्", with pause forms; §1.5 "मकरे समुद्रं गच्छति" | c05.l04 §17; §1.5 serial table |
| G14 | major | accent sūtras labelled FACT | 6.1.223 and 6.2.1 labelled TRADITION ("according to Pāṇini"); FACT from Whitney §1267 and §1295, re-read, with his hedges | c04.l04 (e) |
| G15 | major | derivation tasks lack "According to Pāṇini" | §1.4.2 rule: every derivation item is headed "Derive, according to Pāṇini, …"; repeated in every exam shape | §1.4.2; c01 exam D; c02 exam D–E; c02.l04 spiral; c03 exam C; c03.l06 spiral; c04 exam C; c04.l05 spiral; c05.l03 S0; c05.l05 spiral; c06 exam B, C; §2.2 can-do 10 |
| G16 | major | task G prints a banned claim | the item is a quoted, sourced 1.x error: "5,000-year-old grammar — the most scientific linguistic system ever created" (1.x p. 69, re-found with pdftotext); principle 6 amended | c06 exam task G; §1.1 principle 6 |
| G17 | major | c05.l03 overloaded (two productive points) | numeral card split: c05.l03 keeps द्वि–चतुर्, the tens, 100, 1000; 5–19, the ordinals and the case names as ordinals go to c05.l04's Station 0 and §15 (no new sūtra); model 6 replaced; minute plan redone; V4-D9 amended (Q19) | c05.l03; c05.l04; §1.1 principle 3; §1.2; §1.3.2; §4.0 glance; §4.0.1; §4.0.2; §5.7 तृतीयः; §7.1.3; §7.2.1; §7.2.2; §7.2.4 V4-D6, V4-D9 |
| G18 | major | c05.l04 carries two points | its one production point is the locative absolute; the kāraka map is its card, with no production target, named in principle 3; Q14's move declined; V4-D8 and D-S1 amended | c05.l04 grammar point; §1.1 principle 3; §4.0 glance (and §4.0.3's point column); §7.2.3; §7.2.4; §7.3 Q14 |
| G19 | major | v5.c03 overloaded; no ROADMAP home for the Mahābhāṣya/PBŚ strand | ROADMAP note PR (§0, Q18); v5.c03 keeps Nala, BG 2.47, Bṛhad. 1.3.28, perfect forms in reading, one accent/padapāṭha TRADITION card; rare lakāras by reading only; the strand rows "not planned unless the ROADMAP adds a strand" | §6 intro and six rows; §4.0.6 row 8.1.18; §0 item 6; §7.3 Q18 |
| G20 | major | chapter toolbox figures wrong; principle 8 conflates two counts | figures by script, with G3 and G32 added: 12 · 43 · 89 · 131 · 160 · 174; principle 8 splits the cumulative toolbox from the 60-sūtra task C card | §1.1 principle 8; c01.l04; c02.l04; c04.l05; c05.l05 |
| G21 | major | "96 kept" contradicts two dropped | recounted (`research/evidence/vol4-plan/work/basehw.py`): 94 kept; 25 added (3 replacements, 3 Kāśikā words, 19 by frequency or need); 94 + 25 = 119; at review राज्यम् (used by no text) gave way to द्वयम् (N1's श्लोकद्वयम्), and उच्चारणम् (used in no sentence) to सवर्णः (c01.l02's सवर्णौ): 92 kept, 27 added, 92 + 27 = 119 | §3 ledger prose |
| G22 | major | rule 17 lists unheadworded वेदयति, अर्पयति | moved to a "would count if headworded" clause | §3 rule 17 |
| G23 | minor | X-a, N7, N8 miscounted; five passages lack pause forms | pause forms printed for N3b, N4, N5, N6, N8; recounted by script (`research/evidence/vol4-plan/work/gcount.py`): X-a 32, N7 31, N8 24, and N4 21 (also miscounted); exam 95 words, 13 glossed, 1 in 7.3 | §2.2 can-do 1; c05 exam E; c05.l01 reading; c05.l05 payoff; c06 exam E; §5.3, §5.4, §5.5, §5.6, §5.7, §5.8; §7.1.1 E8, E13; §7.1.2 S2 |
| G24 | minor | DCS perfect share includes the aorists | aorists subtracted (`research/evidence/vol4-plan/work/dcspast.py`): perfect 17.4% (VP 2,471), 5.0% (Hit 259); row 13 named a sub-count of row 4; method printed | §1.3.1 table 1.3a and note; c03 inventory (two places); c03.l04 grammar point |
| G25 | minor | data-file tag total and "85 two tags" | "the kinds sum to 3,995: 12 records carry two different kinds; 85 carry more than one tag entry (78 two, 7 three)", by script | c06 inventory |
| G26 | minor | task C scoring "each step", 26 steps | "each of the 26 sūtras correctly placed 1 point; order 4: 30, pass at 21"; the key's 19 rows noted | c06 exam, task C note; §7.3 Q9 |
| G27 | minor | "two unseen exam sūtras" lists three, omits 7.1.13 | "the four unseen exam sūtras (7.1.13; 3.2.111; 6.1.97 and 3.1.133)" | §4.0.3 Totals |
| G28 | minor | about 20 Teacher-Notes numbers printed in learner text, outside the count; 3.4.104 on no card | the critique's first option, made a rule: the convention of §1.4.3 (a number marked Teacher Notes prints only in Teacher Notes; learner text says "Teacher Notes"), with the full list in §4.0.3 Totals; 3.4.104 made Teacher Notes in the c03 inventory | §1.4.3; §4.0.3 Totals; Chapter 3 inventory |
| G29 | minor | tier/locus contradictions (3.1.91, 1.1.50, 3.4.72, principle 9) | §4.6.1 row 2 "3.1.91, B"; row 17 "1.1.50 first in c01.l01 (D)"; 3.4.72 K in the c04 inventory and c04.l01's use line; principle 9 "printed as B, with padaccheda, at first use" | §4.6.1; Chapter 4 inventory; c04.l01; §1.1 principle 9 |
| G30 | minor | a HISTORY line with no key, really TRADITION | relabelled TRADITION ("according to Pāṇini, 1.4.23 ff.; the case follows by 2.3.1") with [REF:kashika] | c06.l01 |
| G31 | minor | asiddha stated as bare cause; the fourteen sūtras as "Pāṇini's design" | "In Pāṇini's account, this is why …; FACT: classical texts keep the hiatus (Whitney §133)"; "in the order the grammar uses (their authorship: HISTORY, [REF:cardona1997])" | c06.l03 (d); c01.l01 grammar point |
| G32 | minor | 8.3.18–19 misstated; 8.3.18 not in §4.0.3 | "8.3.18 records a light य्/व् (Śākaṭāyana), 8.3.19 their deletion (Śākalya)"; 8.3.18 added as D; c06.l03 tools added 9 → 10 | c06.l03 honesty line and tier line; §4.0.3 |
| G33 | minor | VLk order misreported | "VLk 1–4; VLk 10–11 (1.1.9, 1.1.69); VLk 15–17 (6.1.77, 1.1.66, 1.1.50)", checked in `varlghku.htm` | §1.5 grammarians' line |
| G34 | minor | leṭ line placed "under 3.4.69" | "the LSK's opening of the tiṅanta section, before VLk 375" (line 1293) | c03.l05 |
| G35 | minor | "rare in prose (Whitney §949)" | §949 quoted ("but faintly traceable in later use") and a DCS count with its method (Hit 0, VP 38 periphrastic futures) | c03.l05 card, लुट् row |
| G36 | minor | ṇ after ṛ not covered in c02.l03 | the line "ऋ/ॠ also trigger (the vārttika ऋवर्णाच्चेति वक्तव्यम्, which the Kāśikā cites on 8.4.1; Teacher Notes): पितॄणाम्"; c03.l03 refers back | c02.l03 (a) and its IR-016 line; c03.l03 step 2; §4.0.4 IR-016 |
| G37 | minor | शृणोषि needs Chapter 3's tools | "from the given stem शृणो- (as करोषि in c02.l03): derive the ṣ only" | Chapter 2 exam D; c02.l04 payoff |
| G38 | minor | c03.l03 verbs listed as owned in c03.l02; जानाति trap needs 7.3.79 | ब्रवीति, हन्ति, एति labelled "(c03.l03)"; 7.3.79 ज्ञाजनोर्जा added to the substitute-stem card (K) | c03.l02 class table, card, tier line; Chapter 3 exam B; §4.0.3 |
| G39 | minor | "one sūtra makes four of them" | "Two sūtras make all six: 7.3.77 three, 7.3.78 three (and सीदति)" | c03.l02 payoff |
| G40 | minor | हृदयम्, सरसि, राज्ञे used before they are taught | हृदयम् glossed in c03.l01's serial (the critique's second option; the chain is unchanged); सरसि → जले; राज्ञे → नृपाय; the vigraha's राज्ञः derived on the spot as c02.l01's राज्ञा | c03.l01 §17; c04.l02 model 3; c04.l04 model 4 and derivation (a) |
| G41 | minor | विलम्बते listed as recycled | dropped from the column | §1.5 serial table |
| G42 | minor | IR-022 and IR-023 locus differences unrecorded | both added to §4.0.1 (four differences) and to the Q8 PR | §4.0.1; §0 item 6; §7.3 Q8 |
| G43 | minor | PR named rules 16–21 | "rules 16–23" | §0 item 6 |
| G44 | minor | spelling list misses e-text typos | a diff script (`research/evidence/vol4-plan/work/etdiff.py`, 60 passages) confirmed the critique's eight, found *marakam* (N5) and the unrecorded join *tat śrutvā* (N1); all added, with the method; the fact base re-runs it | c06 spelling rule; §5.1 N1, §5.3 N3a, §5.4 N5 notes |
| G45 | minor | task B's 6.1.97 carries only अपदान्तात् | "अपदान्तात् 6.1.96, पररूपम् 6.1.94, अचि 6.1.77 (the data file carries all three; the Kāśikā names the first)" | c06 exam task B |
| G46 | minor | -मान "✓ all cells" vs "nominative only" | "-मान ✓ all cells (an a-stem, drilled through T1–T3); -अत् drilled in its ✓ nominatives (and loc. sg.)" | c04.l01 load-trimmed note |

### 7.5 The plan review of 2026-11-10 and its post-check

After the repair, its check and the editor's confirmation, the plan was read line by line by
fourteen independent reviewers. Two read each chapter block: a Pāṇinian checker (**P**), who
re-derived every form, looked up every sūtra's number and text in the Aṣṭādhyāyī data file,
walked every derivation step by step and re-found every Kāśikā and Laghukaumudī line and every
authentic passage in its e-text; and a course editor (**E**), who walked the lessons in order
for words, forms and sūtras used before they are taught, and checked every headword against
the ledger and the dictionaries, every joined line against the printing rule and every figure
against its table. Two read the volume frame: **A** the tables and the arithmetic of §3 and
§4.0, **B** the principles, the exit profile and §5–§7. Each finding was then challenged by a
skeptic told to refute it. **215 findings were confirmed (10 blockers, 72 major, 133 minor)
and 14 rejected.**

The confirmed fixes are exact replacements. They were applied most severe first: 317 as
written, 11 found already made by an earlier fix, and 47 that met a passage an earlier fix had
changed. Those collisions were merged, cluster by cluster (41 clusters), by a deputy, and each
merge was re-checked by a second reader: 29 edits; one cluster was set aside by the editor
because another had settled the same finding.

A post-check then looked only for what the edits had broken or left half-done, through four
lenses — the tables and the arithmetic; the restatements of every changed point, in two
halves; the form and the Sanskrit of every added or changed line — and each of its findings
was challenged in turn: **33 confirmed (14 major, 19 minor; several are the same collision
seen through two lenses) and 5 rejected.** All confirmed fixes are applied in this text, two
of them merged by the editor where two lenses had each repaired part of one line.

The arithmetic was re-run by script after the last edit. The headword total and the chapter
exits are unchanged (119 new, none owned before, none counted twice; 508 → 627; exits 521 ·
537 · 565 · 591 · 617 · 627). The review swapped one headword (c01.l02: सवर्णः for उच्चारणम्)
and moved one inside Chapter 6 (प्रकरणम् from c06.l01 to c06.l02: 4 · 3 · 3 for 5 · 2 · 3). The
sūtra count rose from 237 to 238: D 121 · K 51 · B 26 · Q 25 · R 11, and 4 owned Volume 3
sūtras re-read (before the review: D 122 · K 51 · B 26 · Q 25 · R 10, and 3).

| Unit | Lens | Confirmed |
|---|---|---|
| Chapter 1 | E — the course editor | 14 |
| Chapter 1 | P — the Pāṇinian checker | 17 |
| Chapter 2 | E — the course editor | 17 |
| Chapter 2 | P — the Pāṇinian checker | 8 |
| Chapter 3 | E — the course editor | 21 |
| Chapter 3 | P — the Pāṇinian checker | 15 |
| Chapter 4 | E — the course editor | 20 |
| Chapter 4 | P — the Pāṇinian checker | 14 |
| Chapter 5 | E — the course editor | 20 |
| Chapter 5 | P — the Pāṇinian checker | 20 |
| Chapter 6 | E — the course editor | 15 |
| Chapter 6 | P — the Pāṇinian checker | 9 |
| Volume frame | A — tables and arithmetic | 13 |
| Volume frame | B — principles, exit profile, decisions | 12 |

**The confirmed findings** (the fixes are in the text above):

| Id | Severity | Where | The finding, in one line |
|---|---|---|---|
| c01:E#0 | major | v4.c01.l02, model sentence 3 | The model sentence uses द्वयोः पदयोः. These are oblique dual cells: the numeral द्वि's gen./loc. dual, which is c05.l03's Δ card, and the a-stem gen./loc. dual -योः, which is ◐ at entry. They are not labelled. |
| c01:E#1 | major | v4.c01.l02, model sentence 1 and the New headwords line | सवर्णौ is used as a noun in a Sanskrit model sentence, and the block excuses it as 'a term, rule 20'. |
| c01:E#2 | major | v4.c01.l03, the grammar point, the case-code table, model sentence 3 and Main risk; exam task C | The case code tells the learner that the genitive means 'in place of' and the ablative 'after'. |
| c01:E#3 | major | Chapter 1 exam shape, task C; c01.l03 case-code table, row 6.1.101 | Task C asks the learner to say 'what is replaced, by what and where' for 6.1.87 आद्गुणः. |
| c01:E#5 | minor | §1.2 table, row 'ādeśa / āgama / lopa' | §1.2 says ādeśa is first allowed in taught text in c02.l02. |
| c01:E#6 | minor | v4.c01.l03 (no derive-it-yourself item); v4.c01.l02 'six present cells' | Principle 7 says 'From c01.l03 on, every lesson has a "derive it yourself" item'. |
| c01:E#7 | minor | v4.c01.l04, Spiral | The spiral line सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥ has no vowel seam: no word ends in a vowel before a vowel. |
| c01:E#8 | minor | §3 Budgets, the 'tools added' line | §3 defines 'tools added' as 'the Q and D sūtras the lesson first uses'. |
| c01:E#9 | minor | v4.c01.l01 Payoff | 'quoted in Volume 3 as four mysterious syllables'. इको यणचि has five syllables (i-ko-ya-ṇa-ci). |
| c01:E#10 | minor | §4.1 Errors corrected; §4.0.4 row 'new (synthesis) ~42 pratyāhāras' | The 1.x error is quoted with no page, unlike every other 1.x row. |
| c01:E#11 | minor | v4.c01.l02, Sūtras line (the LSK numbering note) | 'The LSK numbers 1.1.9 as "1.1.8"' attributes to Varadarāja what is a concordance tag of the GRETIL e-text. |
| c01:E#12 | minor | v4.c01.l01 §17 | (a) 'The LSK opens with the same tools as this lesson (VLk 1–4)' overstates the match: VLk 2 is 1.1.60 अदर्शनं लोपः, which is c02.l02's. |
| c01:E#13 | minor | §4.0.3 Totals | Several owned Volume 3 sūtras are printed in Chapter 1 learner text outside any tier line, so §4.0.3 misplaces or omits them. 6.1.109 and 8.2.39 are in c01.l01's pratyāhāra table and absent from §4.0.3. 8.4.40 is in the c01.l02 … |
| c01:E#15 | minor | §4.0 glance row v4.c01.l02 | The English title differs: the glance row has 'One Letter for Its Family', the block heading 'One Letter for Its Whole Family'. |
| c01:P#0 | blocker | v4.c01.l03 case-code table (row 6.1.101); c01.l02 derivation (a) step 3; Chapter 1 exam task C | The case-code table files अकः of 6.1.101 under 'Genitive: in place of'. |
| c01:P#1 | blocker | v4.c01.l03 model sentence 4 | The joined line 'यण् आदेशः।' is printed with a space after a consonant-final word that stands before a vowel. |
| c01:P#2 | major | v4.c01.l02 tier line note; §1.5 grammarians' line | c01.l02 says 'The LSK numbers 1.1.9 as "1.1.8"'. |
| c01:P#3 | major | §4.1 Grammar inventory (Kāśikā on the fourteen sūtras) | The locator 'jvkasipu.htm lines 135–260' stops in the comment on sūtra 12 (कपय्). |
| c01:P#4 | major | §4.0.6 row '7.1.25 · 1.1.34' (home c01.l03) | 7.1.25 अद्ड् डतरादिभ्यः पञ्चभ्यः is placed in c01.l03 for 'पूर्वः, उत्तरः as pronominals'. |
| c01:P#5 | major | v4.c01.l04 Spiral | The spiral asks the learner to mark 'every vowel seam' in सर्वे भवन्तु सुखिनः… and name the sūtra. |
| c01:P#6 | minor | v4.c01.l01 pratyāhāra table, row चय् | The table's column is 'Where the learner already met it', but चय् stands in no sūtra of the Aṣṭādhyāyī. It is used only in a vārttika (चयो द्वितीयाः शरि पौष्करसादेः, which the LSK gives under 8.3.28). |
| c01:P#7 | minor | v4.c01.l01 Sūtras line (1.1.71) | The English line '[names the sounds between]' drops the 'and itself' of the rule (स्वस्य च). |
| c01:P#8 | minor | v4.c01.l02 savarṇa table, row चु, टु | The row gives टु as an udit, with 8.4.40 स्तोः श्चुना श्चुः as its example rule. 8.4.40 contains तु (in स्तोः) and चु, not टु. टु belongs to 8.4.41 ष्टुना ष्टुः, which is a Teacher-Notes sūtra. |
| c01:P#9 | minor | v4.c01.l01 Payoff | इको यणचि is called 'four mysterious syllables'. |
| c01:P#10 | minor | v4.c01.l02 grammar point | 'A short vowel stands for its whole family' leaves out the rule's own limit, अप्रत्ययः. |
| c01:P#11 | minor | v4.c01.l01 TRADITION callout | The callout says it keeps the 1.x wording, then says the sounds came from the drum 'at the end of his dance'. |
| c01:P#12 | minor | v4.c01.l01 model sentence 5; v4.c01.l02 model sentence 1 | इ उ ऋ ऌ इति and अ आ च are left unjoined in joined text with no note. |
| c01:P#13 | minor | v4.c01.l01 model sentence 2 (also the exam E sample) | The gloss 'A sūtra's last sound is a marker' states as a general truth something that holds only for the fourteen Māheśvara sūtras. 1.3.3 applies to the final consonant of an upadeśa, and the Aṣṭādhyāyī's own sūtras (इको यणचि) do … |
| c01:P#14 | minor | v4.c01.l01 §17 | 'The LSK opens with the same tools as this lesson (VLk 1–4)' overstates. |
| c01:P#15 | minor | v4.c01.l03 New headwords (उत्तरः) | पूर्वः is labelled 'pron. adj.' with 1.1.34, but उत्तरः is labelled plain 'adj.'. 1.1.34 names उत्तर among the same pronominals (§4.0.6 gives both as pronominals in c01.l03). |
| c01:P#17 | minor | v4.c01.l03 model sentence 6 | विधिः is glossed 'injunction'. §1.4.4 fixes one English equivalent for each term, and for विधिः it is 'operation (rule)'. |
| c02:E#0 | major | v4.c02.l01 Forms taught (a) and Grammar inventory; c02.l04 exam A; c03.l01 (the eighteen endings); §4.0.3 Totals … | The chapter teaches marker removal with only 1.3.2, 1.3.3 and 1.3.9. |
| c02:E#1 | major | v4.c02.l01 (block and Grammar inventory) against §4.0.1 row 1 | §4.0.1 promises '*sup* as a pratyāhāra: c02.l01', and §4.1 says Chapter 1 carries 'sup and tiṅ as pratyāhāras'. |
| c02:E#2 | major | v4.c02.l01 table (b), instr. pl. row; c02.l04 exam task D | राजन् + भिस् → राज + भिस् → राजभिः is derived as if nothing more could happen. |
| c02:E#3 | major | v4.c02.l01 derivation (c), the line after the table | 'Before ते the same स् is kept (8.3.34 …)' contradicts itself. 8.3.34 विसर्जनीयस्य सः replaces a visarga with स्, so in Pāṇini's account the स् is not kept: it goes स् → रुँ (8.2.66) → ः (8.3.15, before the khar sound त) → स् … |
| c02:E#4 | major | §1.4.3 bullet 2; v4.c02.l03 derivations (a) step 1 and step 4, (b) steps 1–2, and the paragraph after (b) | §1.4.3 and c02.l03 promise that the bracket line reproduces the data file's an and ad fields 'exactly as the file gives it'. |
| c02:E#5 | major | v4.c02.l01 (after table b); §4.2 '1.x assets carried'; §4.0.4 | The chapter carries the 1.x rājan card (pp.97–99) but does not quote or correct its two errors. |
| c02:E#6 | major | v4.c02.l02 (IR-021 paragraph); §4.0.4 | §4.2 says the p.89 'lopa/āgama/ādeśa examples' are 're-derived', but c02.l02 re-derives only the āgama (अट्) and the inserted व. |
| c02:E#7 | major | v4.c02.l01 Previewed; v4.c02.l02 Previewed; §4.0.3 Totals | Three items this chapter owes are missing from its lesson blocks, which the fact bases will copy. |
| c02:E#8 | minor | v4.c02.l04 Spiral | Q17, confirmed by the editor, says 'the spiral's Volume 3 joined line stays their only text' for the Chapter 1 and 2 exams. |
| c02:E#10 | minor | §3 Budgets | §3 defines 'tools added' as 'the Q and D sūtras the lesson first uses', while §1.4.1 says 'the new Q, B and D of the day'. |
| c02:E#11 | minor | v4.c02.l01 derivation (c) heading; Payoff | नमः has been owned since v1.c03.l04 (ledger; v1.c05.l02 says 'नमः has been readable since v1.c03.l04'); v1.c05.l02 is where नमस्ते is split. |
| c02:E#12 | minor | v4.c02.l01 table (b) nom. sg. row; v4.c02.l03 वाक्षु line | 6.4.8, 6.1.68 and 8.2.30 are printed by number before the lessons that give them a tier (c05.l03, c04.l01). |
| c02:E#13 | minor | v4.c02.l02 model sentence 5; v4.c02.l01 model sentence 2 | पक्षिणः (-इन् nom. pl.) is an R1 recognition cell; Volume 3 labelled it '(पक्षिणः: R1, labelled)'. |
| c02:E#14 | minor | v4.c02.l02 Deferred | c02.l02 defers '6.1.197's accent rule (IR-022, second half; Volume 5)'. |
| c02:E#15 | minor | §4.0.6 row '8.4.1–2, 8.4.37' | The row's tier cell 'Q (8.4.1), D; then R' reads as if 8.4.37 were also read with the vṛtti in c06.l02. |
| c02:E#18 | minor | §1.2 row 'ādeśa / āgama / lopa' | §1.2 gives c02.l02 as the first lesson where ādeśa may appear in taught text. |
| c02:E#19 | minor | v4.c02.l01 §17 | §1.5 assigns to Chapter 2's grammarians' line 'Kātyāyana and Patañjali; the Mahābhāṣya's statement of why grammar is studied (Paspaśāhnika)'. |
| c02:P#0 | blocker | v4.c02.l01 (c) नमस् → नमः, the line under the table; §1.5 नमस्ते thread | The plan says that before ते "the same स् is kept" by 8.3.34. 8.3.34 विसर्जनीयस्य सः does not keep anything: it replaces a visarga with स्. |
| c02:P#2 | major | v4.c02.l01 Main risk (the strong / pada / bha sort) | The sort says the strong box triggers 'none'. |
| c02:P#3 | major | v4.c02.l01 (b), the राजभिः row; Deferred line; the c02.l04 exam D item 'राजभिः in full' | After 8.2.7 the base is राज-, which ends in अ. |
| c02:P#4 | major | v4.c02.l02 model sentence 5 | पक्षिणः (nom. pl. of the -इन् stem पक्षिन्) is an R1 recognition cell; -इन् declension becomes ✓ only in c05.l03. |
| c02:P#5 | minor | v4.c02.l03 model sentence 4 | 'रथेन देवेन च समाने रूपे' has two problems. |
| c02:P#6 | minor | v4.c02.l03 (b) ṣatva table, step 2 bracket under 8.3.59 | The bracket labels its headings '(data file)' and calls them 'two adhikāras'. |
| c02:P#7 | minor | v4.c02.l02 (b) अगच्छत्, step 1 | 3.4.78 replaces ल् with तिप्, not with ति. |
| c02:P#8 | minor | v4.c02.l01 (a) राम + सुँ → रामः, step 4 | 8.2.66 needs the स् to be pada-final. The lesson has just taught that before सुँ, a strong ending, the base is not pada (1.4.17 excludes the sarvanāmasthāna). The table never says that the whole रामस् is a pada by 1.4.14, so a … |
| c03:E#0 | blocker | v4.c03.l03, the strong/weak table (row शृणोति) and the derivation शृणोति / शृण्वन्ति, step 4; §4.0.3 Totals … | The plan says the व् of शृण्वन्ति comes from 6.1.77 इको यणचि. |
| c03:E#1 | major | v4.c03.l04, "TRADITION and FACT side by side on आह", third bullet | The plan prints as FACT that "the Hitopadeśa uses आह as a past". |
| c03:E#2 | major | v4.c03.l04, "Forms taught (T10; Whitney §§798–800)" | The plan cites Whitney §§798–799 for the classical perfect endings. |
| c03:E#3 | major | §5.1 N1 table (श्लोकद्वयम् coded T (c03.l04)); v4.c03.l04 headwords (राज्यम्) | श्लोकद्वयम् is coded T, but no lesson teaches द्वयम्. |
| c03:E#5 | major | Chapter 3 exam shape, task A | Task A asks the learner to fill the 3rd-person cells of all ten rows, "the four ◐ from the card". |
| c03:E#6 | major | §1.2 row "Athematic strong/weak stems"; §2.2 exit ✓ list; v4.c03.l03 Deferred; §6 | §1.2 makes "all laṭ/laṅ/loṭ cells" of the owned athematic verbs productive (✓). c03.l03 itself defers the class-3 cells beyond ददाति's listed ones and the athematic Ā cells to ◐. N1 and N8 code ब्रूते L for that reason. |
| c03:E#8 | minor | v4.c03.l03, laṅ/loṭ bullet (2sg शृणु); §4.0.3 Totals | The plan explains the weak stem of शृणु (हि is apit, 3.4.87) but not why हि disappears. |
| c03:E#9 | minor | v4.c03.l01, c03.l02, c03.l03 versus §4.0.6 | §4.0.6 places these Volume 3 Teacher-Notes sūtras in c03 lessons, but the lesson blocks never name them: 1.3.17 (c03.l01, न्यविशत), 7.2.80 (c03.l01, भवेत् mapped onto the 18), 1.3.19 (c03.l02, beside सत्यं जयति), and 3.4.89 … |
| c03:E#10 | minor | v4.c03.l02 model sentence 1 | The technical noun विकरणः is used in a Sanskrit model sentence. |
| c03:E#11 | minor | v4.c03.l01 tier line | "Tools added: 15, the most of any lesson" is untrue as stated: c04.l03 also adds 15. |
| c03:E#12 | minor | §3 Budgets | §3 defines "tools added" as "the Q and D sūtras the lesson first uses". |
| c03:E#13 | minor | v4.c03.l01, the eighteen endings | "(7.1.3 झोऽन्तः; D, Teacher Notes)" contradicts itself. |
| c03:E#14 | minor | Chapter 3 exam shape, task A (3.2.111 read cold) | The task prints "[भूते, carried from 3.2.84]". |
| c03:E#15 | minor | v4.c03.l01 tier line; §4.0.3 row 3.2.123 | The parenthesis "(the heading over 3.2.123)" makes the script count 3.2.123 twice. |
| c03:E#16 | minor | §5.2 N2 locus; §5.7 N8 locus | The line numbers are wrong. N2 is at vispancu.htm lines 5228 and 5235 (panc_plain 5227 and 5234), not "panc_plain lines 5226, 5230". N8 runs over hitop_u.htm lines 2932–2940, not 2931–2935. |
| c03:E#17 | minor | v4.c03.l03 anubandha card; v4.c03.l04 payoff | The card is headed "every marker met so far", but its last three rows are markers the learner has not met yet: ṇ/ñ (c03.l04, c04.l03, c05.l02), k (c04.l01) and ḍ (c03.l05, c04.l04). c03.l04 then says the card "gains its vṛddhi … |
| c03:E#18 | minor | v4.c03.l04 (वच् → उवाच); §4.0 glance row | उवाच is listed as a spine derivation and is "read as a two-column derivation". |
| c03:E#19 | minor | v4.c03.l05 Deferred | The block defers "मा + aorist productive (Volume 5, epic reading)". |
| c03:E#20 | minor | §5.7 N8, the question line | "every verb's lakāra" includes आह ×2. The plan says its lakāra is disputed: a laṭ substitute for Pāṇini (3.4.84), a perfect for Whitney. c03.l04 rules that only "According to Pāṇini…" items are assessed. The question must be … |
| c03:E#21 | minor | v4.c03.l06 Assembly (§15) | Every other chapter exam assembles the cumulative toolbox card (12, 43, 131, 160 tools). c03.l06 omits it, although principle 8 fixes 89 after Chapter 3. |
| c03:E#22 | minor | Chapter 3 grammar inventory, Dhātupāṭha entries | The entries are said to be "cited as the LSK prints them", but डुपचँष् and गमॢँ carry a candrabindu that the LSK e-text does not print. |
| c03:P#0 | blocker | v4.c03.l03, strong/weak table row शृणोति and the derivation 'शृणोति and शृण्वन्ति', step 4 | The plan derives शृण्वन्ति by 6.1.77 इको यणचि. |
| c03:P#1 | blocker | v4.c03.l04, 'The learner derives दा → ददौ' | The steps are given in the wrong order: doubling, then 7.4.59, then 7.1.34. |
| c03:P#2 | blocker | v4.c03.l03, §17 serial line (ep. 3) | The course writes joined text with full external sandhi, but this serial line prints वानरी अस्ति unjoined. ī + a gives वानर्यस्ति (6.1.77). |
| c03:P#3 | blocker | v4.c03.l01 model sentence 1; v4.c03.l02 model sentence 5 | In the joined line a cited root before इति is left unjoined (पठ इति, स्था इति), although the same sentences join पठतीति and तिष्ठतीत्यत्र. a + i → e and ā + i → e fuse into one akṣara, so the joined forms are पठेति and स्थेति. |
| c03:P#4 | major | v4.c03.l02 class table (row 5); v4.c03.l03 table row शृणोति and derivation step 1 | शृणोति is taught as a class-5 (svādi) verb, and its class sign is credited to 3.1.73 स्वादिभ्यः श्नुः. |
| c03:P#5 | major | v4.c03.l04, 'TRADITION and FACT side by side on आह', third bullet; §5.7 exam questions | The plan says 'the Hitopadeśa uses आह as a past (112 tokens tagged past in the DCS)'. |
| c03:P#6 | major | §5.7 N8 locus | The line numbers are wrong. The N8 dialogue stands at hitop_u.htm lines 2932–2940, not 2931–2935. Lines 2931 and 2933 are blank, and the passage runs to 'rājāha-naitac chakyam' at line 2940. |
| c03:P#7 | major | §5.2 N2 locus | The panc_plain line numbers 5226 and 5230 are wrong. |
| c03:P#8 | major | v4.c03.l03 Forms taught, after the table | 'Whitney §§612–678 (classes 2, 3, 5, 7, 8, 9)' covers only the root class and the reduplicating class. |
| c03:P#9 | major | v4.c03.l04 Forms taught (T10) | The citation 'Whitney §§798–800' does not fit the table. |
| c03:P#10 | minor | v4.c03.l03 Main risk | The example '*भवतः → *भोतः' stars the correct form भवतः. |
| c03:P#11 | minor | v4.c03.l02 substitute-stem card, row गम् | The plan prints '6.1.73 छे च तुक्' as if it were the sūtra's text. |
| c03:P#12 | minor | v4.c03.l05, 'Vedic leṭ' TRADITION line | The LSK quotation inserts a space that the e-text does not have. |
| c03:P#13 | minor | v4.c03.l06 assembly header, Whitney list | §931 only introduces the two futures. The stem भविष्य first appears in §932. |
| c03:P#14 | minor | v4.c03.l03 strong/weak table, row एति | The 'Rule' cell for यन्ति is '—', but the weak form needs 6.4.81 इणो यण्. |
| c04:E#0 | major | v4.c04.l01 Reading line; §5.3 N3a table (स्नातः row, Glossed row, Gloss ratio); §7.1.1 E8 | N3a's first sentence is c04.l01's reading, but its स्नातः is the -त of स्नाति, which is a headword of c04.l02. |
| c04:E#1 | major | v4.c04.l04 model sentence 6 | स्वस्य भावः स्वभावः uses भावः as a free noun. |
| c04:E#2 | major | §4.4 Exam shape, task A | Task A asks for the -अत् nominative and the -मान form of each of 10 owned verbs. |
| c04:E#3 | major | v4.c04.l05 Payoff | The exam block says N3b is read at 1 gloss in 5.6. |
| c04:E#4 | major | §5.3 N3b Gloss ratio; v4.c04.l02 headword पङ्कः | Rule 22 says that when a word chosen for a lesson or a prepared text also stands in an exam's unseen passage, §5 reports the gloss ratio both ways. |
| c04:E#5 | major | §1.1 principle 3; §1.2 taddhita row; v4.c04.l03 table | Principle 3 and V4-D6 say a card has no production target and list exactly three exceptions (the gerundive, the numerals, मा भैषीः). c04.l03's table marks its card rows -तर/-तम ✓ and यावत्/तावत् "✓ (the pair)", both with K-tier … |
| c04:E#6 | major | §4.0.1 row 'कृत् and तद्धित derivation'; v4.c04.l03 table | The Volume 3 §6 row sends "-क" to v4.c04. |
| c04:E#7 | major | v4.c04.l01, the learner's derivation of उक्त | The learner is told to derive वच् + त → उच् + त "by 6.1.15". |
| c04:E#8 | minor | v4.c04.l04 (d); v4.c04.l03 headword व्याकरणम् | §4.0.6 puts 6.3.25 (मातापितरौ) and 2.1.57 (karmadhāraya) in c04.l04's Teacher Notes, but the c04.l04 block mentions neither. |
| c04:E#9 | minor | v4.c04.l02 derivation आगत्य, step 1 | 7.1.37 applies only "समासे", so its condition is the gati compound made by 2.2.18 कुगतिप्रादयः. |
| c04:E#10 | minor | §4.4 Exam shape, task C | No task of the chapter exam tests c04.l04 (compounds as derivations), although compounds are one of the chapter's goals and c04.l04's +1-day Station 0 item ("6 compounds derived") is run by c04.l05. |
| c04:E#11 | minor | v4.c04.l05 Spiral | "R2 closed" contradicts §1.3.2, which redeems R2 in two steps: formation in c04.l01, and the passive construction (3.4.70) in v4.c05.l01. |
| c04:E#12 | minor | §1.2 past participle row; §4.4 Grammar inventory | §1.2 and the chapter inventory name "-त / -न" as taught, but c04.l01 teaches no -न participle and prints none of the -न sūtras (8.2.42 ff.). |
| c04:E#13 | minor | §6 | Several deferrals made in Chapter 4 have no §6 row: the future participle (◐ on c04.l01's card; §2.2 lists it ◐ at exit), the -अम् absolutive (c04.l02), the feminine-forming suffixes beyond -आ/-ई (c04.l03, "Volume 5 reading") and … |
| c04:E#14 | minor | v4.c04.l02 headword आकर्णयति | "आकर्ण्य is among the commonest narrative absolutives" is a claim of scale with no number, method or source (principle 6). |
| c04:E#15 | minor | v4.c04.l04 | Every other teaching lesson of the chapter states its ✓ production subset; c04.l04 does not. |
| c04:E#16 | minor | §5.3 N3b table | यावत् … तावत् is coded L, but c04.l03's card makes the pair ✓ ("✓ (the pair)"), so it should be T. |
| c04:E#17 | minor | §4.0 glance row v4.c04.l01 | The glance lists गच्छ- → गच्छत् as a spine derivation, but the block says गच्छत् "is shown, not derived" (its rule, 6.1.97, is kept unseen for c06.l04). |
| c04:E#18 | minor | v4.c04.l01 Sūtras (tiers) | The tier line calls 6.1.15 "owned". It was only K in c03.l04, so it was not a tool before this lesson. It is a D tool from c04.l01 on, and that is why c04.l01's "Tools added: 7" counts it (six new D + 6.1.15; sutras.py TA2 = 7). … |
| c04:E#19 | minor | v4.c04.l01 Payoff | The payoff says बद्धः is "now made". But बन्ध् + त → बद्ध needs the loss of a penultimate nasal (6.4.24 अनिदितां हल उपधायाः क्ङिति). The lesson's tools do not cover this: 6.4.37 deletes a final nasal and does not cover बन्ध्. |
| c04:P#0 | blocker | v4.c04.l04, Forms taught (c), कपोतराजः | The intermediate string is wrong. The printed chain is कपोत + राजन् → + टच् → कपोतराज + अ → (ṭi-lopa) → कपोतराजः. That shows the न् already gone before the rule that removes it, and the ṭi-lopa then has nothing left to delete. … |
| c04:P#1 | major | v4.c04.l04, derivation (b) जलज, step 1 | 6.4.143 टेः stands under the heading भस्य, and जन् before the kṛt affix ड is not bha. |
| c04:P#2 | major | v4.c04.l01, Payoff | The payoff says the participles are made 'by the same k-marker that blocks guṇa in शृणुतः'. शृणुतः has no k-marker. |
| c04:P#3 | major | v4.c04.l01, derivation कृत / गत, step 2 | The learner owns 7.2.35 (iṭ before a val-initial ārdhadhātuka) and uses it the same day for पठित. त is val-initial, so the learner's own tools give *करित and *गमित. |
| c04:P#4 | major | v4.c04.l01, the learner's derivation of उक्त | 'वच् + त → उच् + त by 6.1.15' merges two steps. 6.1.15 gives samprasāraṇa only: व → उ (by the definition 1.1.45), giving उ + अ + च्. |
| c04:P#5 | major | §5.3 N3b, Devanagari text and pause form | The note says 'The e-text has no comma after अहह; the course follows the e-text and adds none', but both the joined text and the pause form print 'अहह, महापङ्के'. |
| c04:P#6 | major | v4.c04.l05, Payoff | 'read with 1 gloss in 5.6' contradicts §5.3 and the chapter's exam shape, which both give N3b as 9 glossed of 45, 1 in 5. |
| c04:P#7 | minor | v4.c04.l01, Sūtras (tiers) | 6.1.15 is labelled 'owned', but §4.0.3 records it as K in c03.l04 (a card only) and D first in c04.l01, and c04.l02 says '6.1.15 (D since c04.l01)'. |
| c04:P#8 | minor | v4.c04.l03, The one grammar point | 'a final -अ or -इ of the base drops before it (6.4.148)' overgeneralises. 6.4.148 is in the भस्य section, so the vowel drops only where the base is bha, that is before a vowel- or य्-initial taddhita. |
| c04:P#9 | minor | v4.c04.l02, The one grammar point (infinitive) | The only infinitive sūtra cited is 3.3.10 (purpose with a verb of action). |
| c04:P#10 | minor | v4.c04.l02, headword आकर्णयति | 'आकर्ण्य is among the commonest narrative absolutives' is a scale claim with no number, method or source. |
| c04:P#11 | minor | v4.c04.l02, headword पश्चात् | The headword gives पश्चात् as '+ abl.' only. |
| c04:P#12 | minor | §5.3 N3b locus | The plan gives 'lines 364–366', but the whole N3b passage is on line 364 of hitop_u.htm. |
| c04:P#13 | minor | §5.3 N3b form-status table | The token व्याघ्रेण (तेन व्याघ्रेण धृतः) is counted in the 45 tokens but has no row in the status table. |
| c05:E#0 | major | c05.l01 forms (IR-023 line); §4.0.4 IR-023 row | The 1.x non-forms are quoted as पयैथे, पयेयाथे. |
| c05:E#1 | major | c05.l04 Reading (N5's epic line); §5.4 'The epic line in N5' | MBh 3.50.11a अथ तां वयसि प्राप्ते is translated 'then, when she had reached youth'. |
| c05:E#2 | major | c05.l03 Δ cards (मनस् line) | The मनस् Δ card lists वयः as a word declined like it ('= यशः, तेजः, वयः, सरः'). वयः is not owned and is headworded only in the next lesson, c05.l04 (611 → 617). |
| c05:E#3 | major | c05.l03 model sentence 3 | विद्वान्सर्वत्र पूज्यते uses the passive of पूजयति. |
| c05:E#4 | major | c05.l03 numeral card, row 'tens, 100, 1000' | The -इ tens (विंशतिः, षष्टिः …) are said to decline 'like मतिः … (owned tables)', and the cells are listed ✓, so exam task C could set them. |
| c05:E#5 | major | §5.5 N6 inventory | कारितः is coded T (c05.l02). But c05.l02 makes the causative's -त ◐ ('the causative's -त and -य: कारित, स्थापित, दर्शयित्वा, स्थाप्य ◐'), so its code should be L. The gloss ratio (3 of 31) does not change. |
| c05:E#6 | major | c05.l02 S0 → next; c05.l04 Station 0 / minute plan | c05.l02 books '+1 week (c05.l04): derive भावयति'. c05.l04's own Station 0 paragraph says it runs only c05.l03's +1-day item, and its minute plan gives Station 0 plus the new numeral Δ drill 8 minutes, with nothing for a six-step … |
| c05:E#7 | major | §6 (deferrals made in c05.l01–l03) | Several deferrals made in the unit have no §6 row, and §6 is the contract Volume 5 must redeem: the laṅ passive (अदृश्यत) and the passive aorist (अश्रावि) (c05.l01); the causative's -त, absolutive and passive (कारित, स्थाप्य … |
| c05:E#8 | major | §4.5 Grammar inventory (absolutes); c05.l03 Δ cards (विद्वस्) | Two Whitney sections are wrong. The absolutes are cited as Whitney §§303–304, but §304 is the 'pregnant' locative of goal; the absolutes are §303b–c (locative) and §300b (genitive). विद्वस् is cited as §462, which is the Vedic … |
| c05:E#9 | minor | §4.5 exam shape, task D | 'join 5 sentence pairs with a locative absolute, one where the doers differ' can be read as 'only one pair has two doers'. |
| c05:E#10 | minor | §1.3.2 T11 row | §1.3.2 says the मनस् Δ card teaches 'n. pl. -आंसि'. |
| c05:E#11 | minor | c05.l03 T11 stem column | The lesson's three stems are 'strong · pada · bha', but the accusative row labels the bha cell गच्छतः 'weak'. |
| c05:E#12 | minor | c05.l01 §17 | 'then the original in R4': R4 is Volume 3's athematic card. |
| c05:E#13 | minor | §5.4 N4/N5 inventory | गच्छन्तम् is coded 'T (c05.l03 cell; at c05.l04, L under T11's preview)'. |
| c05:E#14 | minor | c05.l02 भावयति derivation, step 1 | 1.3.7 चुटू is a Teacher-Notes sūtra (§4.0.3 Totals). |
| c05:E#15 | minor | §4.5 Volume 3 §6 rows carried / 1.x assets | The chapter intro still sends numeral declension and the 1.x numeral paradigms to 'l03' only. |
| c05:E#16 | minor | c05.l03 Δ cards (◐) | The Volume 3 §6 row that §4.0.1 homes here lists 'the feminine of i/u/ṛ adjectives; नप्तृ, नृ and neuter ṛ-stems', and so does the chapter intro. |
| c05:E#17 | minor | c05.l03 model sentence 4 | तस्य यशस्तेजश्च महत् has two neuter subjects joined by च with a singular predicate adjective. |
| c05:E#18 | minor | §4.0 glance row v4.c05.l03 | The glance title 'Consonant Stems as a System' differs from the block title 'Consonant Stems as One System'. |
| c05:E#19 | minor | c05.l04 numeral card, second half, row पञ्चन्–दशन् | The card presents पञ्च … पञ्चसु as 'the pada cells of the राजन् Δ'. |
| c05:P#0 | blocker | v4.c05.l03, the derivation गच्छत् + सुँ → गच्छन् / भवत् + सुँ → भवान्, steps 2–3 | The भवान् column adds नुम् (7.1.70) first and then lengthens with 6.4.14 (भवन्त् → भवान्त्). |
| c05:P#1 | major | v4.c05.l03, model sentence 4 | तस्य यशस्तेजश्च महत् has two coordinated subjects (यशः and तेजः, joined by च) but a singular predicate महत्. |
| c05:P#2 | major | v4.c05.l04 Reading (N5, MBh line) and §5.4 'The epic line in N5' | अथ तां वयसि प्राप्ते is glossed "then, when she had reached youth". |
| c05:P#3 | major | §4.5 Grammar inventory: 'the absolutes (2.3.37–38; Whitney §§303–304)' | Whitney §304 covers the 'pregnant' locative of goal, not the absolute. |
| c05:P#4 | major | v4.c05.l03, Δ cards (◐) line | Two Whitney locators are wrong. विद्वस् is cited to §462, but the vidvāṃs paradigm is in §461 (§462 covers Vedic irregularities). मधु/वारि are cited to §341, but वारि is a neuter i-stem whose model is in §339 (§341 gives only the … |
| c05:P#5 | major | v4.c05.l01, the gerundive card and the शक्यम् headword | The card cites 3.1.97 अचो यत् as the -य gerundive rule, but its two -य examples are formed by other rules. 3.1.97 gives यत् only after a vowel-final root (देयम्). कार्यम् takes ṇyat with vṛddhi (3.1.124 ऋहलोर्ण्यत्), and शक्यम् … |
| c05:P#6 | major | v4.c05.l04: the kāraka map's last row, the absolute list (b) and model sentence 1 | उदित (उद् + इ, "risen") is used without a label in the map's example सूर्ये उदिते, in the list of locatives (b) and in model sentence 1. |
| c05:P#7 | minor | v4.c05.l03, model sentence 3 | विद्वान्सर्वत्र पूज्यते is called "a course sentence", but it is authentic: the fourth quarter of a Pañcatantra verse. |
| c05:P#8 | minor | v4.c05.l02, derivation भू → भावयति, step 1 | 1.3.7 चुटू is printed with its number and text as a tool. |
| c05:P#9 | minor | v4.c05.l01, derivation पठति vs पठ्यते, step 2 | The step shows ल् becoming तिप् / त but cites only the pada rules and 3.4.79. 3.4.78, the rule that replaces ल्, is missing: an unlabelled jump against §1.4.2. |
| c05:P#10 | minor | v4.c05.l01, owned verbs' passives | The parentheses read as if 7.4.25 makes दृश्यते (it makes only श्रूयते) and as if 6.4.66 makes गम्यते and नीयते (it makes only दीयते). |
| c05:P#11 | minor | v4.c05.l01, Forms taught: '✓ laṭ and loṭ (गम्यताम्, क्रियताम्, त्वर्यताम्: the impersonal imperative …)' | क्रियताम् is listed as impersonal. In narrative it is a karmaṇi passive with its object in the nominative, as in the chapter's own N6 (अस्मद्वर्तनं क्रियताम्). |
| c05:P#12 | minor | v4.c05.l01, 'the impersonal मया गम्यते … bhāve' | 3.4.69 allows bhāve only for akarmaka verbs, but गम् has an object (ग्रामं गच्छति; in c05.l02, 1.4.52 lists motion verbs separately from the intransitives). |
| c05:P#13 | minor | v4.c05.l03, after the गच्छन्/भवान् derivation | The same lesson re-derives राजा with 8.2.7, but nothing says why 8.2.7 does not then drop the final न् of गच्छन् and भवान् once 8.2.23 has removed the त्. |
| c05:P#14 | minor | v4.c05.l03, Δ card राजन् | '= आत्मन्, जन्मन्' presents the neuter जन्मन् as declined like masculine राजन्. |
| c05:P#15 | minor | v4.c05.l02, Sūtras (tiers) note on the causee of दृश् | The ātmanepada option for दृश् is a vārttika (upasaṅkhyāna) that the Kāśikā quotes on 1.4.53, not the Kāśikā's own ruling. |
| c05:P#16 | minor | v4.c05.l03 headword विद्वान्; v4.c05.l01 headword विद्यते | In a volume on Pāṇini's system, two headwords carry only the Western analysis. विद्वान् is called a 'perfect participle'; for Pāṇini it is वसु replacing the शतृ of विद् (7.1.36). विद्यते 'exists' is called a lexicalised passive … |
| c05:P#17 | minor | v4.c05.l05 Main risk; §5.6 N7 status table | 8.3.19 is cited by number in c05.l05 and §5.6, but §4.0.3 gives its first appearance in learner text as c06.l03 (D). |
| c05:P#18 | minor | v4.c05.l04, numeral card second half, row पञ्चन्–दशन् | The card ties 7.1.55 only to षष् (and to चतुर् in c05.l03). |
| c05:P#19 | minor | v4.c05.l04, model sentence 5 | स्थाली पचतीत्यपि शक्यम् leaves out the infinitive. |
| c06:E#0 | major | c06.l02 (d) the LSK passage and its tier line; §4.0.3 row 3.4.82 and Totals; §5.9 row c06.l02 | §5.9 says the LSK passage read in c06.l02 includes 3.4.82 (VLk 394), but the lesson's printed text jumps over it with an ellipsis, and the tier line leaves it out. |
| c06:E#1 | major | c06.l02 tier line and (c) 7.3.84 | 7.3.82 is counted as a D tool (it is one of 'Tools added: 4' and appears in §4.0.3 as D). |
| c06:E#2 | major | c06.l02 texts (a)–(c) | c06.l01 lists a gloss for every unowned Kāśikā example. c06.l02 lists none, so thirteen unowned example words stand in the learner text with no gloss or display label. |
| c06:E#3 | major | c06.l03 grammar point (8.2.1); §4.0.4 | The 1.x meta-rule pages that c06.l03 restores (pp.115–117) gloss 8.2.1 the wrong way round. |
| c06:E#4 | major | §4.6 Volume 4 exam, task E | Task E asks the learner to 'parse every verb form' in X-a and X-b. |
| c06:E#5 | major | §4.6 Volume 4 exam, task D vs 'What from the toolbox card means' | The plan says the 26 B numbers are 'asked for by heart only in task D's short items'. |
| c06:E#6 | major | c06.l01, c06.l02 headword lines; §3 table and c06 chain; §4.0 glance rows | c06.l02 adds 2 headwords. §3's budget is '3–8 ledger-new per teaching lesson', and c06 lessons are treated as teaching lessons (each has a toolbox, and tools added count up to 174 at c06.l03). Every other teaching lesson has at … |
| c06:E#7 | major | c06.l03 S0 → next | §4.0.5 says each chapter's last teaching lesson books its +1-week item for the next l01, and every other chapter does this (c01.l03 → c02.l01 … c05.l04 → c06.l01). c06.l03 instead books its +1 week to c06.l04, which also receives … |
| c06:E#8 | minor | c06.l01 tier line; §4.0.3 row 1.4.54 | c06.l01 reads 1.4.54 with the Kāśikā (R), but the §4.0.3 row gives its Later column as '—', while the parallel 1.4.49 row lists 'c06.l01 (R)'. |
| c06:E#9 | minor | c06.l02 (d) and tier line; §4.0.3 rows 1.1.46, 1.2.6 | c06.l02 prints 1.1.46 and 1.2.6 in learner text, but neither is on its tier line or in §4.0.3's Later column. 1.1.46 is also called 'owned', but it is not among the 28 Volume 3 sūtras; it has been D since c02.l02. |
| c06:E#10 | minor | c06.l01 model 5; c06.l02 model 4; c06.l03 model 1 | Three model sentences use cells that are ◐, not ✓. Two use the gen./loc. dual of a- and other vowel stems (सूत्रयोः, रेफनकारयोः); oblique noun duals have been ◐ since Volume 3 (D13), and only द्वि's own cells and the … |
| c06:E#11 | minor | c06.l01 'The derivation of the day' and tier line; §4.0.3 rows 7.1.12, 2.3.28, 6.1.101 | Principle 7 requires every lesson from c01.l03 on to have a 'derive it yourself' item. c06.l01 has none: its only task is labelling kārakas. |
| c06:E#12 | minor | §4.6 spelling rule for commentary text | The plan says the correction list is etdiff.py's 'whole output apart from ellipses and the course's own joins'. |
| c06:E#13 | minor | §4.6 task C card; c06.l04 payoff and main risk | §1.1 principle 8 and the editor's Q9 fix the card at exactly 60 sūtras (the 26 plus 34 distractors), but §4.6 says 'about 60' and 'about 34'. |
| c06:E#15 | minor | §4.0.3 Totals; §4.6 task B | Task B prints three more sūtra numbers in learner text: 6.1.94 and 6.1.96 as the sources of carried words, and 7.1.1 युवोरनाकौ as a gloss. |
| c06:P#0 | major | v4.c06.l02 texts and tier line; c03.l03 payoff ("The Kāśikā's own examples (कुरुतः कुर्वन्ति; चिनुतः चिन्वन्ति) are … | Two places say c06.l02 reads the Kāśikā on 1.2.4: the c03.l03 payoff, and c06.l02's own review_of ("v4.c03.l03 (the Kāśikā's कुरुतः कुर्वन्ति on 1.2.4)"). |
| c06:P#1 | minor | v4.c06.l02 tier line; §4.0.3 row 1.2.6; §5.9 c06.l02 LSK row | c06.l02 prints 1.2.6 to the learner ("why there is no guṇa or vṛddhi in बभूव: 1.2.6 (K since c03.l04)"), but its tier line leaves it out and §4.0.3 gives it no later lesson. |
| c06:P#2 | minor | v4.c06.l03 derivation (b), किम् + टा → केन | The derivation goes straight from टा → इन (7.1.12) to केन. |
| c06:P#3 | minor | §4.6 'Spelling rule for commentary text' | The list of corrected e-text typos says it is etdiff's whole output, but it leaves out the two typos in the 6.1.97 line printed in exam B (apadantāt, sthane). |
| c06:P#4 | minor | v4.c06.l03 (d), the Kāśikā on 8.2.1 | The Kāśikā's examples are printed as 'असा आदित्यः, द्वा अत्र …', the reverse of the e-text's order, as though that were the text. |
| c06:P#5 | minor | v4.c06.l01 payoff | '(ग्रामादागच्छति, ग्रामं गच्छति, स्थाली पचति) … sentences the learner has said since Volume 3' is wrong for स्थाली पचति: स्थाली is a c05.l04 headword, and the pair is taught there. |
| c06:P#6 | minor | v4.c06.l03 payoff | 'Four forms owned for a volume or more' is wrong for राजभिः, which is derived first in v4.c02.l01, the same volume. |
| c06:P#7 | minor | §4.6.1 row 7 and the credit line | Row 7 says 'the P set is the first nine' and cites 1.4.99 लः परस्मैपदम् alone. 1.4.99 names all eighteen tiṅ parasmaipada. |
| c06:P#9 | minor | v4.c06.l01 table, row 1.4.45 | The Kāśikā example कटे आस्ते is printed unjoined, as the e-text has it. |
| volume:A#0 | major | §3, last paragraph (Flagged homographs); v4.c03.l02 substitute-stem note; v4.c03.l05 Main risk | §3 says स्वपिति's -इ- and 'the इट् augment' are two different things, and asks both lessons to name them as a pair of homographs in §12. |
| volume:A#1 | major | §4.0.1, the row 'कृत् and तद्धित derivation' | The row says c04.l03 teaches '-क as -इक/ठक्'. |
| volume:A#2 | minor | §3, the paragraph after the rules table (Upgrade rows) | §3 assigns upgrade rows to अर्थः and कालः 'wherever they first stand in sentence dress'. |
| volume:A#4 | minor | §4.0.1 (consonant-stem row) and v4.c05.l03, the ◐ Δ cards | §4.0.1 quotes the Volume 3 §6 row with नप्तृ in it and says c05.l03 covers 'the rest' as ◐ Δ cards. |
| volume:A#5 | minor | v4.c04.l03, the card rows | Shipped v1.c02.l06 promises that 'the suffix story' behind ततः / अतः / इतः is Volume 4's, and its notes book 'the -तः adverb family in Volume 4'. |
| volume:A#6 | minor | v4.c02.l02, after derivation (a) | The binding Volume 3 plan (v3.c04.l04: 'guṇa in गुरवे — rules v4.c02') and the shipped v3.c04 chapter page ('guṇa in गुरवे … named and left for Volume 4') both send the guṇa of गुरवे to v4.c02. |
| volume:A#7 | minor | §4.0 glance table, rows v4.c01.l02 and v4.c05.l03 | Two titles in the glance table differ from their lesson blocks: 'One Letter for Its Family' against 'One Letter for Its Whole Family', and 'Consonant Stems as a System' against 'Consonant Stems as One System'. |
| volume:A#8 | minor | §4.0 glance table, row v4.c06.l01 (spine column) | The glance row gives the spine as "रामेण's kārakas named". रामेण does not occur in the c06.l01 block, and one form names one kāraka, not several. |
| volume:A#9 | minor | v4.c04.l05, Payoff | The c04 exam block gives N3b's gloss ratio as '1 gloss in 5.6'. |
| volume:A#10 | minor | v4.c06.l04, Payoff and Main risk | The block calls task C '26 steps'. The answer key §4.6.1 has 19 rows and counts 26 sūtras; G26 already corrected the scoring to 'the 26 sūtras', but these two lines still say steps. |
| volume:A#11 | minor | §4.0.5, The derivation spiral | §4.0.5 says every exam re-derives a form from each earlier chapter and reads a passage from an earlier volume. |
| volume:A#12 | minor | §4.0.3, row 3.2.123, and the v4.c03.l01 tier line | The generated row lists 3.2.123's 'Later' use as 'c03.l01 (B)', the same lesson as its first use. |
| volume:A#13 | minor | §5.9, heading and table | §5.9 promises 'the two cold reads of the exams' but the exams make three: c02.l04's 7.1.13, c03.l06's 3.2.111 and c06.l04's pair. |
| volume:B#0 | major | v4.c03.l05 block, Deferred line (vs §6 row 3, §1.3.2, §7.3 Q18) | c03.l05 defers "मा + aorist productive (Volume 5, epic reading)". |
| volume:B#1 | major | §1.1 principle 2 | The principle says the p-marker of the endings (1.2.4 with 1.1.5) "also explains … कृतम्". |
| volume:B#2 | minor | §1.2, row 'Kāraka theory' | In the "Productive (✓) from" column the kāraka map is entered as "c05.l04 (the whole map…)". |
| volume:B#3 | minor | §1.2, row 'Terms prakṛti, pratyaya, it …' | The row says "it" is first allowed in c02.l01. c01.l01 already teaches इत् "marker": its grammar point says "a marker (इत्)", it has B 1.3.3 हलन्त्यम् and 1.3.9 तस्य लोपः, and model sentence 2 is "सूत्रस्यान्त्यो वर्ण इत्". |
| volume:B#4 | minor | §1.1 principle 12 (third bullet) | "Accent appears only in c04.l04's इन्द्रशत्रु card" is not true of the blocks. c03.l01 quotes 1.3.12 अनुदात्तङित आत्मनेपदम् and 1.3.72 स्वरितञितः … as Q. |
| volume:B#5 | minor | §1.5, the भवति thread table | The table says "Each step of the भवति derivation is taught at its moment", but it has no row for four of the 26 B sūtras: 1.3.1, 3.1.1, 3.1.2 and 3.1.91 (§4.6.1 rows 1–2). |
| volume:B#7 | minor | §1.5 grammarians' line (c01); c01.l01 §17 | c01's §17 prints the number and text of 8.3.19 लोपः शाकल्यस्य, but c01.l01's tier line does not list it, and its first tiered use is D in c06.l03. |
| volume:B#8 | minor | §6, two rows | Several lesson blocks defer items to Volume 5, or leave them ◐, that have no §6 row. c04.l03 defers "the gender-forming suffixes beyond -आ/-ई (Volume 5 reading)". c05.l03 defers "the numeral derivatives beyond the ordinals (-धा … |
| volume:B#9 | minor | §1.3.2, 'Recognition only, through Volume 5' list | The list leaves out two items that §2.2's ◐ ledger and the blocks mark ◐: the future participle (करिष्यन्, the c04.l01 card) and the -अनीय and -य gerundives (the c05.l01 card). |
| volume:B#10 | minor | §1.3.2 Δ cards, the numerals bullet | "5–19 as n-stems on the राजन् Δ" is not accurate. षष् (6) is a ṣ-stem (षट्, षड्भिः, षण्णाम्), and the n-numerals have gen. -आनाम् (पञ्चानाम्; 7.1.55), where राजन् has राज्ञाम्. |
| volume:B#11 | minor | §1.1 principle 5; §1.3.1 paragraph after table 1.3a | (a) Principle 5 says "the DCS tags nine aorist tokens". |
| volume:B#12 | minor | §0 item 6 | The list of keys "this plan cites" leaves out keys the plan relies on by name: whitney1889 (Whitney § citations throughout), dhatupatha (§7.3 Q1), apte1890 and monierwilliams1899 (the headword checks). |

**Rejected on challenge** (the plan stands as it was):

| Id | Where | The finding, in one line |
|---|---|---|
| c01:E#4 | v4.c01.l01 Station 0; v4.c01.l02 (no Station 0 line); §4.0.5 first bullet | The entry chain does not match what the Volume 3 plan books. |
| c01:E#14 | §4.1 Grammar inventory (pratyāhāras used) and v4.c01.l01 table | The chapter inventory lists चर्, खर्, अट्, शर् and झश् among 'those used', but no lesson table places them. झश् appears only in l01's Main-risk drill, yet exam task B has the trap 'चय् vs झश्'. यञ्, अण् and इण् come in c01.l02 … |
| c01:P#16 | v4.c01.l01 headword table (आदिः, 'Why now') | 'Hit दानधर्मादिकम्, इत्यादि' reads as if इत्यादि were attested in the Hitopadeśa. |
| c02:E#9 | v4.c02.l03 model sentence 3 | Under rule 20 a term counts only when 'headworded as a noun the learner uses in Sanskrit sentences'. अनुवृत्तिः is counted in c02.l03, but none of the lesson's six model sentences uses it. |
| c02:E#16 | v4.c02.l03 IR-016 line; §4.0.4 IR-016 row | The 1.x error is put in quotation marks as 'in रामेण the इ triggers ण', which is a paraphrase. |
| c02:E#17 | c02.l04 exam task E | '7.1.13 ङेर्यः after 7.1.12. Say which word is carried' suggests the word comes from 7.1.12. But 7.1.12's own words (टाङसिङसामिनात्स्याः) do not continue: the data file gives 7.1.13's an as अतः from 7.1.9. The item is answerable … |
| c02:P#1 | v4.c02.l01 (b), the राज्ञा row (6.4.134) | The English line for 6.4.134 ("the अ of a bha-stem in -अन् is dropped") is too broad. |
| c03:E#4 | §5.7 N8 (the Chapter 3 exam passage): तृतीयः coded L; gloss ratio 4 of 24 | तृतीयः is coded L "(the case name तृतीया; the ordinal comes in c05.l04's §15)". |
| c03:E#7 | v4.c03.l03 derivation, step 1 | Step 1 cites "3.1.73; 3.1.74", as if श्रु were a svādi root under 3.1.73. |
| c06:E#14 | c06.l02 payoff | The line labels itself 'HISTORY, hedged', but 'since the 17th century' carries no hedge. |
| c06:P#8 | v4.c06.l03 model sentence 5 | In the joined line, the quoted 'त इच्छन्ति' is left unjoined before इत्यत्र. |
| volume:A#3 | §3, rule 19 | Rule 19 gives एकता as an example of a transparent taddhita that 'adds 0'. |
| volume:A#14 | v4.c05.l01, New headwords (विद्यते) | The block files विद्यते under 'rule 17's logic' as a lexicalised passive of विद् 'find'. |
| volume:B#6 | §1.4.2 sample derivation, step 0 | The sample derivation, marked "Example (c02.l03)", cites 4.1.2 in its sūtra column. 4.1.2 has no tier anywhere in the plan and is missing from §4.0.3. c02.l03's own table has "—" at step 0. |

**The post-check** (what the mechanical edits broke or left half-done):

| Id | Severity | Where | The finding, in one line |
|---|---|---|---|
| post:form#0 | major | v4.c02.l01 table (b), instr. pl. row; the Deferred line; task D of the c02.l04 exam | Two fixes for this row (c02:P#3 and c02:E#2) were both applied. |
| post:form#1 | major | v4.c02.l03 (b) ṣatva table, step 2, the bracket line under 8.3.59 | The fixes for c02:P#6 and c02:E#4 collided here. |
| post:form#2 | major | §3 headword-ledger prose (base design kept, dropped, added); §8 G21 row | The prose says that of the base design's 96 headwords, 93 were kept, 3 dropped and 26 added. |
| post:form#3 | major | §4.0.5 'The derivation spiral' bullet | The rewritten bullet says 'Every exam but c02.l04 also reads a Volume 3 thread verse'. |
| post:form#4 | major | §5.3 N3b form-status table | Two findings (c04:P#13 and c04:E#16) each added the missing token व्याघ्रेण, one to the first T row and one to the 'T (c04.l01–l02)' row. |
| post:form#5 | minor | §6 deferral table | Two findings (c05:E#7 and volume:B#8) each added the numeral derivatives -धा and -शः. |
| post:form#6 | minor | §4.0.4 IR table, the new row on 8.2.1 and 8.3.18 | The correction says 8.3.18 'concerns a word-final य्/व् after अ/आ (भो, भगो, अघो)'. |
| post:form#7 | minor | v4.c01.l04 exam, task C | The new note says 6.1.87 is left out because it 'has no genitive'. |
| post:form#8 | minor | §4.0.3 Totals paragraph: the list of Chapter 1 numbers printed outside the tier lines | The paragraph lists every owned or pointer sūtra number that Chapter 1 prints outside the tier lines. |
| post:restate-1#0 | major | v4.c02.l01 table (b), row instr. pl.; v4.c02.l01 Previewed/Deferred line; Chapter 2 exam task D | Two findings, c02:P#3 and c02:E#2, were both applied to the राजभिः row. |
| post:restate-1#1 | major | v4.c02.l03 (b) ṣatva table, step 2 bracket under 8.3.59 | c02:P#6's replacement prints 8.2.1 पूर्वत्रासिद्धम् and 8.2.108 तयोर्य्वावचि संहितायाम् by number and text in c02.l03 learner text. |
| post:restate-1#2 | major | §4.0.5, The derivation spiral, against v4.c02.l04 Spiral and §7.3 Q17 | volume:A#11 rewrote §4.0.5 to say that 'Every exam but c02.l04' reads a Volume 3 thread verse. c02:E#8 then gave c02.l04's spiral exactly that re-read: सर्वे भवन्तु सुखिनः… with the ण of भद्राणि and the ः of निरामयाः. |
| post:restate-1#3 | major | §4.1 Chapter 1 exam shape, task C | c01:E#3 removed 6.1.87 from task C's list and added a parenthesis saying it is not case-coded. c01:P#0's parenthesis, written for the old list that still had 6.1.87, was appended after it. |
| post:restate-1#5 | minor | v4.c01.l03 Previewed line | c01:E#3's Previewed line says '6.1.84 एकः पूर्वपरयोः … in the 6.1.101 row'. c01:P#0, which replaced that row, put only a labelled bracket there, and its trap line says the number is c02.l02's. |
| post:restate-1#6 | minor | §4.3 Chapter 3 exam shape, task A (3.2.111 read cold) | c03:E#14 changed the bracket to a single heading. |
| post:restate-1#7 | minor | §4.0.3 Totals (the list of non-tier numbers in Chapter 1, and the Teacher-Notes list) | Three parts of the Totals paragraph fell out of step with the review's edits. |
| post:restate-1#9 | minor | v4.c02.l01 §17 (Paspaśā statement); §4.6 spelling list | c02:E#19's new §17 says the e-text typo 'proyojanam' is 'corrected and listed in Teacher Notes (§1.4)'. |
| post:restate-2#0 | major | §5.3 N3b form-status table (rows 1 and 2) | Two applied fixes collided. c04:P#13 added व्याघ्रेण to the first T row, and c04:E#16 added the same token to the 'T (c04.l01–l02)' row. |
| post:restate-2#1 | major | §4.4 Exam shape, task A (c04:E#2's replacement) | Task A still sets '10 owned verbs', but the fix limits the present participle to 'only verbs whose present participle that table shows'. c04.l01's table has eight verbs and shows a present participle for seven of them (वच् has … |
| post:restate-2#2 | major | v4.c04.l04 derivation (b) जलज, step 1 (c04:P#1's replacement) | The new text tells the learner that 6.4.143 'stands under the heading भस्य (the bracket line)'. |
| post:restate-2#3 | minor | §4.6 Spelling rule for commentary text, and its Method line | The c04–c06 fixes added Kāśikā lines to learner text: on 6.4.143 in c04.l04, on 6.4.14 in c05.l03, and on 1.2.4 in c06.l02 (e). c04.l04 says the e-text's 'sāmarthyat' is corrected in Teacher Notes. |
| post:restate-2#6 | minor | v4.c04.l01 Payoff; v4.c05.l01 gerundive card; v4.c05.l03 Δ cards (◐) | Some replacements print a sūtra number in learner text with no tier in that lesson's tier line, which §1.4.1 forbids (the point c06:P#1 and c04:E#8 enforced). c04:P#2 added '(1.2.4)' to c04.l01's payoff; 1.2.4 is not on c04.l01's … |
| post:restate-2#8 | minor | v4.c05.l03, The one grammar point | c05:P#0 reversed the derivation so that 6.4.14 lengthens the penultimate अ first and नुम् is added after it (the Kāśikā's 'अत्र कृते दीर्घे नुमागमः कर्तव्यः'). |
| post:restate-2#9 | minor | §1.3.2 table, row T11 | c05:E#11 relabelled T11's stem column as 'strong · pada · bha', the lesson's three names; the glance row uses the same names. |
| post:restate-2#10 | minor | §4.5 Goals; v4.c05.l03 Payoff | c05:E#4 limited the numerals to their listed cells, since the f. i-stem cells of विंशतिः etc. stay ◐. It changed can-do 8 and the exit ledger to 'all cases (listed cells)'. |
| post:restate-2#11 | minor | v4.c04.l03 table, the new plain -क card row (c04:E#6) | The new row explains the missing vṛddhi only by 'no ñ or ṇ marker'. |
| post:restate-2#12 | minor | §4.4 'Volume 3 §6 rows carried' | c04:E#5 reclassified यावत्/तावत् as ✓, part of c04.l03's taddhita point, and not a card. |
| post:restate-2#13 | minor | §4.4 Exam shape, task C (c04:E#10's replacement) | The task now says 'one from each derivation lesson' but lists only l02, l03 and l04. c04.l01 is also a derivation lesson (कृ → कृत, गम् → गत), so the wording contradicts its own list. |
| post:restate-2#14 | minor | §4.6 Grammar inventory, vidhi (l02) | c06:P#0 added review text (e), 1.2.4 with its Kāśikā line, to c06.l02, and added the §5.9 row and the §4.0.3 Later entry. |
| post:restate-2#15 | minor | §6, the numeral-derivatives row and the merged 'Further taddhitas' row | Two fixes each added the same deferral. c05:E#7 added a row 'The numeral derivatives beyond the ordinals (-धा, -शः: Whitney §489)'. |
| post:tables#0 | major | §3, the paragraph after the lesson chain ("Of the base design's 96 …"), and §7.4 row G21 | The account of the base design's headwords was not updated when the review swapped c01.l02's उच्चारणम् for सवर्णः (finding c01:E#1). |
| post:tables#1 | major | §4.0.5, The derivation spiral, against the v4.c02.l04 block's Spiral line | Two applied fixes collided without being merged. volume:A#11 rewrote §4.0.5 to say "Every exam but c02.l04 also reads a Volume 3 thread verse". c02:E#8 then added that same reading to c02.l04's Spiral: सर्वे भवन्तु सुखिनः… … |
| post:tables#2 | minor | §4.6 Chapter 6, Grammar inventory (exact), the vidhi (l02) item | The review added a reading of 1.2.4 सार्वधातुकमपित् with its Kāśikā line to c06.l02: text (e), the R tier, and a §5.9 row. |

Rejected on challenge: post:restate-1#4 (v4.c01.l03, the grammar point (genitive/ablative bullet) and Main …); post:restate-1#8 (v4.c01.l02 tier-line note (LSK e-text labels), against §4.6 spelling …); post:restate-2#4 (v4.c06.l02 (d), 'The new tools' line); post:restate-2#5 (§4.0.3 Totals, the list of Teacher-Notes sūtras); post:restate-2#7 (§1.3.2 Δ cards (numerals); v4.c05.l03 S0 → next).

### 7.6 Corrections made by the chapter fact bases

A chapter fact base is checked against the sources before its lessons are drafted, and it
corrects this plan where the plan is wrong; each fact base lists its deviations in its §7.
The plan's text above is left as it was reviewed, except where a row of this table says that
the text itself was amended. The corrections that matter to chapters still to come are
recorded in this table, and a later fact base follows the table, not the lines it corrects.

| From | The plan says | Correction (where it matters next) |
|---|---|---|
| v3.c06 fact base (2026-11-10, verification) | §4.0.5 and the v4.c01.l01 block gave v4.c01.l01 only "v3.c06.l05's +1-week booking"; the v4.c01.l02 block named no Station 0 | Amended in the text: v4.c01.l01 runs v3.c06.l05's +1-day item and v3.c06.l04's +1-week item; v4.c01.l02 runs v4.c01.l01's +1-day item and v3.c06.l05's +1-week item, as the v3.c06 fact base words them (its Station 0 row: S0-bh, S0-bg, S0-bi). Matters to the v4.c01 fact base. |
| v4.c01 fact base (2026-11-10, verified) | §4.0.5: the entry pattern of each chapter | Confirmed against v3.c06.l04 §20 and v3.c06.l05 §20. Every later chapter's entry follows the pattern: c02.l01 runs c01.l04's +1-day item and c01.l03's +1-week item; c02.l02 runs c01.l04's +1-week item. |
| v4.c01 fact base | §4.6, the spelling list of the e-texts | Add the Kāśikā and Laghusiddhāntakaumudī corrections of the c01 fact base's deviation 9 (Kāśikā lines 142, 147, 252, 289, 488, 495, 1335, 1356, 1676, 1684, 1740, 1744, 1759, 3464, 3469, 3612; LSK lines 124, 162, 553; Kāśikā line 1740, *grahanam* → *grahaṇaṃ*, was listed at the review in c01.l02's Teacher Notes). A commentary line is copied character by character and every correction is listed; none is made silently. |
| v4.c01 fact base | §4.0.4, the 1.x rows of Chapter 1 | A fourth 1.x line on p. 96 ("CONTEXT … LAST occurrence") is wrong; it is corrected in Teacher Notes of c01.l01–l02 only (editor's decision 5). |
| v4.c01 fact base | §1.1 principle 4 and §4.0.4 on the "~42 pratyāhāras": "the c01 fact base counts the pratyāhāras of the sūtra text" | The count printed is the Kāśikā's own: 41 named marker by marker and confirmed by its closing verse; it notes ञम् apart, and under लण् that the र of 1.1.51 names र and ल. The 1.x "~42" is quoted beside it as a count given without its method; it is not called an error. c06 and later chapters cite the count so, never as an independent figure. |
| v4.c01 fact base | §1.4.2 example and the lesson blocks' three-column derivation tables | Every derivation is printed in four columns (Step · String · Sūtra · What happens); a block's three-column table is read with "What happens" supplied. |
| v4.c01 fact base | the tapara examples | The Kāśikā's own example under 1.1.70 is 7.1.9 (वृक्षैः against खट्वाभिः): c01.l02 names it and c06.l01–l02 may read it. The आत् of 6.1.87 आद्गुणः is NOT a tapara letter: it is the ablative of अ ("after an a-vowel") and covers अ and आ by 1.1.69, which is the Kāśikā's first example under 1.1.69. The tapara आत् is that of 1.1.1 वृद्धिरादैच् (c02.l02). |
| v4.c01 fact base | c01.l03: देव + भिस् → देवैः keeps the final स् of भिस् and ऐस् | By 1.3.4 न विभक्तौ तुस्माः the final dental, स् or म् of a case or verb ending is not a marker. c01.l03 prints one labelled preview line and keeps the sūtra in Teacher Notes; c02.l01 is its home, as the plan has it. |
| v4.c01 fact base | the seam स इत् (सः before a vowel) | It is not 6.1.132, which drops the ending of सः and एषः only before a consonant; before a vowel other than अ, सः follows the ordinary rule for -अः before a vowel, as Volume 3 Chapter 4 taught it. |
| v4.c01 fact base | the thread verse's दुःखभाग्भवेत् | 8.2.30 चोः कुः gives ग् for the ज् of -भाज्; the pause form -भाक् comes from 8.4.56 वाऽवसाने and is optional. Chapter 5's consonant stems follow this. |
| v4.c01 fact base | the exam shapes of §4: "pass: every task at its pass mark" | As in every Volume 3 chapter frame, the pass is every task at its pass mark and the §19 quiz, taken after the sitting, at 7/10. Each later chapter exam says so. |
| v4.c01 fact base | the lesson blocks give no class plan and no self-study minutes | Self-study minutes of Chapter 1: 45 · 40 · 45 · 40. A fact base times each class slot from the exercises it places there before it fixes the plan (the c01 verification found three class plans that could not hold their exercises); a conversation that does not fit is a homework item. |
| v4.c01 review (Pass D, 2026-11-10) | §4.1, the pratyāhāras "used" (अट्, खर्, चर्, शर् among them) | Lessons 1–2 open fifteen readings for the learner: अच्, अक्, इक्, एङ्, एच्, अण् (two ways), इण्, यण्, यञ्, हल्, झल्, झश्, जश्, चय्. No lesson of Chapter 1 opens अट्, खर्, चर् or शर् in learner text: they stand in Teacher Notes (the Kāśikā's list), and of the four the learner has met only [खरि], the carried word of 8.3.34, glossed "before a voiceless consonant" (c01.l03 §18–§20; c01.l04 §3). The Chapter 1 exam and its retake test none of them. A later lesson that needs one of the four (खर् of 8.3.15 and 8.4.55; चर् of 8.4.54; शर् of 7.4.61 and of 8.3.58, whose words 8.3.59 carries in c02.l03; अट् of 8.4.2) opens it from the sūtras before using it. |
| v4.c01 review (Pass D) | course-written joined text with a pratyāhāra name | A name that ends in ण् after a short vowel (the pratyāhāras अण्, इण्, यण्; the sūtras अइउण् and लण् too) is not put before इति or any vowel: by 8.3.32 the ण् would double, a seam Volume 3 taught for न् only. Such a name stands alone before a daṇḍa (अइउण्। तस्यान्त्यो वर्णो णकारः। — c01.l01 §16, turn 2) or in a compound (इण्प्रत्याहारे; the Kāśikā's यणादेशः). Sūtras and commentary lines are printed as their sources have them (इको यणचि; the LSK's अणिति). Later chapters follow this until 8.3.32 is taught for ण्. |
| v4.c01 review (Pass D) | the two readings of अण् | Printed "as every rule but 1.1.69 reads it" (the Kāśikā's claim), never "as most rules read it"; the +1-week item v4.c01.l04 books for v4.c02.l02 uses these words. |
| v4.c01 review (Pass C, 2026-11-10) | the c01.l01 block ("their authorship and transmission: HISTORY, [REF:cardona1997], the callout below"; the HISTORY line keyed [REF:cardona1997]); §1.5 ("his predecessors named in the sūtras"); §7.3 Q3 | Two statements could not be confirmed under the evidence rule (Cardona 1997 was not opened, and no search result quotes it for them) and are not printed: that the authorship and transmission of the fourteen sūtras are matters of scholarly discussion, and that the teachers Pāṇini names were grammarians before him or of his time. c01.l01's §4 HISTORY callout ends at "for the sake of the pratyāhāras" and is keyed [REF:maheshvarasutras]; [REF:kashika]. The lesson's §17 says that in his own rules Pāṇini names other teachers of grammar, among them Āpiśali, Śākaṭāyana and Śākalya, with no claim of their date. In Chapter 1, [REF:cardona1997] stands on the date sentence alone ("around the 4th century BCE on the usual scholarly estimate; estimates vary"). A later chapter that wants either statement applies the evidence rule to it anew. |
| v4.c02 fact base | §4.2 l02 block (IR-021 bullet) and §4.0.4 row "new (review)": the 1.x lopa example "रामस् + अपि → रामोऽपि" | The page (p. 89, image) reads "रामस् + अहम् → रामोऽहम्". c06.l04 task G, if it quotes this card, quotes अहम्. |
| v4.c02 fact base | §4.2 l03 block: 8.4.37's bracket "[carried (data file): रषाभ्याम्, 8.4.1; न, 8.4.34]" | The न of 8.4.34 is the negative particle "not" (data file pc indeclinable; Kāśikā *ṇakārādeśo na bhavati*); the bracket glosses it "not" and adds a course line "नः णः, 8.4.1". c06.l02, which reads 8.4.1–2, keeps the distinction if it reads 8.4.37. |
| v4.c02 fact base | the bracket regime (§1.4.3) for a heading's own row | 6.4.1's `an` carries दीर्घः and सम्प्रसारणस्य, and its `ad` lists itself; 8.3.55 and 8.3.57 list themselves in `ad`. Printed with "(the file carries them; this heading does not use them)" and "(the heading begins here)". Later chapters print headings the same way (1.4.1, 3.1.91, 3.4.77 when taught). |
| v4.c02 fact base | 1.4.17 "[REF:kashika]" | The GRETIL Kāśikā has no comment under 1.4.17; its sense is the Kāśikā's restatement under 1.4.18 and the LSK's VLk 164. c05.l03 (the consonant stems) cites them so. |
| v4.c02 fact base | the data file's `an` of 3.4.100 | It lacks परस्मैपदेषु, which the Kāśikā carries (*parasmaipadeṣu ity eva*). c03.l01, which derives the 18 endings, notes it where 3.4.100 is used. |
| v4.c02 fact base | §4.6 spelling list | Add: Kāśikā 1305 *ṣasṭhī*, 1601 *anuccāranam*, 1602 *śabdairyo*, 304 *prasaṅga. nivṛttaye*, 344 *sa iko*, 344 *viditavyaḥ*, 3450 *pratijña-anunāsikyāḥ*, 3487 *prāptāyamitsañjñāyāṃ*, *vibhāktau*, *makaraṇāṃ*, 5618 *garahaṇam*, 5674 *savādiśv*, 5676 *bhasñjñaṃ*, 5678 *vātsayaḥ*, 25492 *letaḥ*, 25460 *sambhandhinaḥ*, 53096 *avarnāt*, 53122 *brahamaiḍakā*, 53560 *paratoṭakaḥ*, *pūrvarupam*, 67478 *dhīrghatvaṃ*, 74127 *vkṛkṣebhyaḥ*, 81484 *ṣuṣVāpa*, 82805 *uttarasy*, 82833 *rephaṣākārabhyām*, 82835 *haraṇam kiriṇā*; LSK 399 *padāntasāya*; Mahābhāṣya 145 *proyojanam* (already listed). Probable, edition not opened: Kāśikā 3495 *upacattām*, 25494 *upacāva, upacāma*. |
| v4.c02 fact base | Whitney §235a | The local Whitney e-text prints the section number as "255" (between §234 and §236); cite §235. |
| v4.c02 fact base | the exam shapes of §4 (D-tier sūtras in exam tasks) | An exam task that asks for D-tier sūtras prints the chapter's toolbox card (number order, text, English line) in the booklet; Q and B are recognised by gist without it. |
| v4.c02 fact base | the Totals paragraph of §4.0.3 (Teacher-Notes sūtras) | Chapter 2 adds these Teacher-Notes sūtras, each found in the data file, with no change to any count: 7.1.23, 2.4.58, 3.4.97, 3.4.98, 8.3.56, 8.4.41, 6.1.103, 7.1.54, 6.4.3, 1.1.52, 1.1.61, 1.4.1, 5.4.151, 6.1.102. From c02.l03 on, a bracket line may print such a number as the source of a carried word, as §1.4.3 prescribes. |
| v4.c02 fact base | the exam shapes of §4 (a derivation that the chapter's rules cannot finish) | No derivation is printed or keyed as ending on a form that is not a word. Where the last step belongs to a later lesson, the task prints that step as the table's last line, marked with its lesson, and the learner writes the steps before it (c02's task E: राम + ङे, with 7.3.102 printed, gives रामाय). |
| v4.c02 fact base | the Hindi parallels on ṇatva and ṣatva | Only words whose ण or ष the chapter's own rules make are used as examples (कारण, हरण, मरण: 8.4.1–2; भविष्य: 8.3.59). रामायण (8.4.3) and प्रमाण (8.4.29) are made by other rules and are not examples; विषय is not 8.3.59. Later chapters check a tatsama example against the rule before using it. |
| v4.c03 fact base | §4.3 l04 production table: जग्मतुः, जग्मुः and ददतुः, ददुः with no rule for the weak stem | 6.4.98 गमहनजनखनघसां लोपः क्ङित्यनङि (Kāśikā: *jagmatuḥ, jagmuḥ*) and 6.4.64 आतो लोप इटि च (*papatuḥ, papuḥ*), Teacher Notes. c04.l01's गत, c04.l02's गत्वा use other rules (6.4.37); c05.l03 meets 6.4.98 again in घ्न- if it prints हन्'s participle. |
| v4.c03 fact base | §4.3 l02 substitute-stem card: यच्छ only from यम् (7.3.77) | 7.3.78 also gives यच्छ for दाण् "give" (Kāśikā under 7.3.78). Any later derivation of प्रयच्छति "gives" may name either; the course names यम् and keeps दाण् in Teacher Notes. |
| v4.c03 fact base | §1.4.3 bracket regime: headings | The data file puts 3.1.22–3.1.90 (शप् and the class signs, स्य/तास्, च्लि) under the first धातोः (3.1.22), the kṛt and lakāra rules under 3.1.91. 3.1.22 is not taught: replaced by "(further headings: Teacher Notes)" with a course line "धातोः 'after a root'". भूते (3.2.84) and भविष्यति (3.3.3) print by name where a lakāra rule's sense needs them. c04 (kṛt rules under 3.1.91, 3.2.84) and c05.l02 (3.1.26 णिच् under 3.1.22) print them the same way. |
| v4.c03 fact base | §4.3 l01 model sentence 2 (स्वस्मै) | The pronominal cells of स्व are Teacher Notes (v3.c05 fact base row 0.11); replaced by स्वार्थम्. Later chapters do not use स्वस्मै, स्वस्मिन् as ✓. |
| v4.c03 fact base | the data file's `an` of 1.1.5 | It carries न from 1.1.4: the negative particle (pc indeclinable), as 8.4.37's न (§7.6 row "v4.c02 fact base"). c06.l02, which reads 1.2.4 with the Kāśikā, glosses it "not". |
| v4.c03 fact base | §5.1 N1 inventory: रात्रौ coded T | रात्रौ is the loc. sg. of an f. i-stem: ◐ at Volume 3 exit; coded L (not glossed; the ratio unchanged). |
| v4.c03 fact base | §4.6 spelling list | Add: Kāśikā 3657 *parsmaipadaṃ*, 3658 *dhatavo*, 3659 *anudattedbhyaḥ*, 3575 *pratyayasy*, 3576 *lakaraḥ*, 1922 *sārvadhatukam*, 1965–1967 *saṃyogarthaṃ*, 1940 *bidhidatuḥ*, 4905 *prapte*, 4915 *phalmihāsti*, 5010 *prasmaipada*, 5015 *aste*, 7382 *tap*, *jha*, 7385 *prasmaipadeṣu*, 7397 *grahanam*, 7398 *parasmaipadas-añjñāyāṃ*, 7402 *ānahḥ*, 7417 *parasmaipradeṣu*, 7419 *madyamaḥ*, 7422 *madhyāmaḥ*, 7531 *samanādhikaraṇe*, 5760 *dvivacnaṃ*, 15128 *pratyayao*, 15221–15222 *śṝṇvanti*, 15563 *veditavayḥ*, *yadita*, 18945 *ghūtānadyatana*, *vartamanād*, *dhātḥ*, 18947 *pratyakṣābhimanaḥ*, 18859 *būte*, 19074 *vartamanād*, 23600 *apraptasya*, 23602 *aśīrviśiṣṭe*, 25109 *uccārana*, 25142 *iṭaṣṭakāraḥ*, 25205 *sañjñākānāṃ*, 25242 *pañcānāma adibhūtānāṃ*, 25576 (25577) *prayayasya*, 25740 *prayayāḥ*, 51541 *ṅīti*, 67045 *jaranataḥ*, 67655 *ekādeśaḥ ,*, 70655 *parasmaipadesu*, 70935 *hanisyati*, 71041 *rvapiti*, 73614 *pa*, *tiṣtha*, 73618 *tiṣthati*, 73619 *manā*, 73643 *jña*, 73770 *pugantasya vlepayati*. LSK 1293 *ḷṭ*, *ḷṅ* printed लृट्, लृङ्. |
| v4.c03 fact base | Whitney §944 | The local e-text prints "मविता" for भविता (the transliteration `bhavitā́` is right); cite the transliteration. |
| v4.c03 fact base | the Totals paragraph of §4.0.3 (Teacher-Notes sūtras) | Chapter 3 adds these Teacher-Notes sūtras, each found in the data file, with no change to any count: 1.3.5, 1.4.105, 1.4.107, 1.1.64, 3.4.80, 7.2.81, 6.1.97, 6.1.65, 6.1.71, 6.4.77, 6.4.37, 6.4.98, 7.3.54, 6.4.112, 1.1.47, 8.2.30, 8.4.55, 6.1.108, 3.1.4, 1.2.1, 1.1.4, 1.1.59, 6.4.64, 7.4.73, 6.4.88, 6.1.4, 6.1.1, 3.4.115, 7.2.10, 6.1.58, 8.2.36, 8.2.41, 1.3.28, 1.3.76, 6.4.107, 6.4.108, 7.2.37, 8.3.24, 8.4.58. |

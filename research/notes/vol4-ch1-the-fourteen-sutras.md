# Research notes — Volume 4, Chapter 1 (माहेश्वराणि सूत्राणि — The Fourteen Sūtras)

Fact base gathered **before** drafting v4.c01, the first chapter of Volume 4 (पाणिनीयम् · The
Pāṇinian System). Its binding contract is the volume plan (`research/notes/vol4-plan.md`): §4.1
with its four lesson blocks; §1.1 (derivation first; the altitude rule; the five tiers); §1.2 (what
becomes allowed); §1.3.2 (T9); §1.4 (the tiers and the budget, the fixed derivation format, how a
quoted sūtra is printed, technical terms); §1.5 (the grammarians' line for c01; the भवति thread's
first step); §2.1 (entry); §3 (ledger rules 16–23; the figures 5 · 4 · 4 · 0, exit 521; "tools
added"); §4.0 (glance rows), §4.0.1 (the Volume 3 §6 row on the Māheśvara sūtras), §4.0.2 (the
preservation-map rows), §4.0.3 (the c01 rows and the Totals paragraph), §4.0.4 (IR-017, IR-018,
IR-036, the "~42 pratyāhāras" row), §4.0.5 (Station 0 and the spiral), §4.0.6 (7.1.9; 1.1.34 ·
7.1.25), §6, §7.3 (Q2, Q3, Q17), §7.5 (the 31 confirmed Chapter 1 findings and the three rejected
ones, all already applied in the plan text, none re-introduced here) and §7.6 (no earlier Volume 4
fact base exists). Where the plan is wrong or incomplete, this note corrects it and lists the
correction in §7 for the plan's §7.6.

The chapter teaches four things, one per teaching lesson and the exam: the fourteen sūtras and the
pratyāhāra (l01, with इति + अवदत् → इत्यवदत् derived through 6.1.77); savarṇa and tapara, "how long a
letter in a rule reaches" (l02, with विद्यालयः and गच्छामि / गच्छथ); the case code of a sūtra —
genitive "in place of", locative "before", ablative "after", nominative "the result" (l03, with
भो + अति → भवति and देव + भिस् → देवैः, the first step of the भवति thread); and the Chapter 1 exam
(l04, one closed-book 45-minute sitting, Station 0 before it and outside it), in which the owned
vowel joins of v3.c04.l01 are re-derived "according to Pāṇini".

**Sources checked locally (read-only), 2026-11-10.** The Aṣṭādhyāyī data file
(`corp/ashd/sutraani/data.txt`, 3,983 entries): every sūtra number, text, padaccheda (`pc`), kind
(`type`), anuvṛtti (`an`) and adhikāra (`ad`) printed below was looked up by script
(`scratchpad/v4c01/sl.py`, the same lookup as the plan's `work/lk.py`). The Kāśikā
(`jvkasipu.htm`): its comment on the fourteen sūtras, lines 135–292 (before its comment on 1.1.1 at
line 298), and on every sūtra the chapter prints (lines below). The Laghusiddhāntakaumudī
(`varlghku.htm`): VLk 1–17 (lines 114–165), VLk 22–23, 26–27, 33, 42, 71, 142, 392. Whitney 1889 by
chapter (§§20–21, 32–37, 126–131, 329, 733, 735 opened for this note). Apte 1890 and
Monier-Williams 1899 for all 13 headwords. The entry ledger (`scratchpad/ledger-entry-v4.tsv`, 946
rows: every vocabulary row owned before this chapter; 508 readable words) and the plan's
`work/owned.py` for ledger status. The 1.x book (`Sanskritam-Curriculum.pdf`, md5
d7830d75…9615): pp. 69–71 and 95–96, by `pdftotext -layout` and, where the text layer garbles
Devanagari, from rendered page images (pp. 70, 71, 95, 96). The previous chapter: **of the v3.c06
lessons only l01–l04 are on disk** (S0-bg matches `lesson-04-three-verses.md` §20 verbatim; there is no `lesson-05`), so the Station 0
bookings that arrive in this chapter (S0-bg, S0-bh, S0-bi) are quoted verbatim from the Chapter 6
fact base (`research/notes/vol3-ch6-connected-reading.md`, row 0.30 and its l04/l05 §20 blocks; its
header calls it a first draft under verification): the drafters of l01–l02 re-diff them against
v3.c06.l04 §20 and v3.c06.l05 §20 when those files exist. (Corrected at review: v3.c06.l05 is now on
disk; S0-bh and S0-bi match its §20 verbatim, and S0-bg matches v3.c06.l04 §20, both as they stand
after the Chapter 6 review.) v3.c04.l01 (`lesson-01-when-vowels-meet.md`)
was read for every owned vowel join and its Volume 3 wording.

**The plan's scripts, re-run 2026-11-10** (from the repository root, `SANSKRITAM_LOCAL` = this
session's scratch folder): `work/hw.py` — c01.l01 5 (508 → 513), l02 4 (513 → 517), l03 4 (517 →
521), l04 no headword line; total 119, exit 627. `work/chk_ledger.py` — no duplicates; one flag
outside this chapter ("OWNED? v4.c03.l05 मा भैषीः V1-2:v3.c03.l04", the owned मा of the chunk,
already known to the plan: rule 8, the chunk counts once); chain exit 627. `synth-work/sutras.py` —
missing in data file: none; 238 sūtras, D 121 · K 51 · B 26 · Q 25 · R 11 · owned 4; tools added
c01.l01 4, l02 3, l03 5. **This note changes no headword, tier or count**, so the arithmetic stands
as the plan has it. (The script also prints "patch v4.c06.l04 Tools added: 15 -> 0" as the patch it
would make with `--write`; it was not run with `--write`, and `git status` shows the plan unchanged.)

**Labels used in this note.** Station 0 items: S0-bg, S0-bh, S0-bi (arriving from Volume 3, the
Chapter 6 fact base's labels) and **S0-ca … S0-ch** (booked in this chapter). Commentary lines:
**K1–K18** (Kāśikā), **L1–L14** (Laghusiddhāntakaumudī), table 0.E. Learner-facing pages never
print these labels or any row number of this note.

---

## 0. Chapter-wide facts and policies

| # | Claim | Register | Source | Notes |
|---|---|---|---|---|
| 0.1 | **Status marks, one wording everywhere** (unchanged from Volume 3): **✓ productive** — "you produce it: exercises, quiz and exam may ask for it"; **◐ recognition** — "you read it when you meet it; nothing asks you to produce it, and nothing scores it"; **○ display** — "shown once, with its address; not yours yet". No objective, exercise, quiz item, homework task, Station 0 key or exam task demands or scores a ◐ item. **Sūtra tiers** (plan §1.4.1), said once in l01 §15 and printed beside every sūtra: **Q** quoted (padaccheda, word-by-word gloss; recognised by gist); **B** one of the 26 sūtras of the भवति derivation (padaccheda; recognised by number and gist at the volume's exit); **D** the authority for one derivation step (number, text, one English line; never recalled by number); **K** on a card; **R** read with the vṛtti in Chapter 6. Chapter 1 uses Q, B and D only (no K, no R). | policy | plan §1.1 principle 9, §1.4.1; STYLE_GUIDE §8 | — |
| 0.2 | **Printing (binding; STYLE_GUIDE §3.1; Volume 3 Chapter 4 fact base rows 0.2–0.3 and its tables 0.A–0.C; vol3-plan §7.6, the v3.c04 rows).** Every course-written line — §6, §13, §16, exercise and quiz sentences, exam sentences — is printed **joined, with its pause form beneath**: line 1 the joined line with its IAST in parentheses directly after it; line 2 the pause form with its IAST; line 3 English and Hindi. IAST of a joined line: a space at every word boundary; words written together only where two vowels fused (*nāsti*, *gacchāmīty atra* → write *gacchāmīty atra*: the ई is one fused vowel, the य् stays with its word); the avagraha as an apostrophe after a space (*uttaro 'c*). **Stops:** no sandhi across a daṇḍa, "?", "!", a comma, the dash of a speech frame or the closing quotation mark before इति; the word before a stop stands in its pause form. **A sūtra is printed as the data file has it** (joined: इको यणचि, एचोऽयवायावः, अतो भिस ऐस्), never re-joined or split, and in a pause-form line a quoted sūtra stays as printed (it is a quotation). **A derivation shows its seams** (देव + ऐस्) and its last line is the joined word, in bold. **A parenthesis directly after a Devanagari word holds that word's IAST and nothing else**; in objectives, tables, callouts and keys a note goes in square brackets or after a dash. **Quoted sounds and quoted sound-lists are left unjoined** (अ आ च सवर्णौ; इगिति इ उ ऋ ऌ इति …): joined, अ आ would merge into one आ and इ उ ऋ ऌ into ड्वृल् — the very joins being named. The Kāśikā does the same: *a i u ityanena* (K1, line 140), *ṛ ḷ ity etau* (line 147). Said once in l01 §15, as a convention in plain text (not a FACT callout). | policy | STYLE_GUIDE §3.1; vol3-plan §7.6; verification log, v3.c04 decisions | Every seam of every course-written line below was derived from the Chapter 4 maps; the seams used are listed in row 0.20. |
| 0.3 | **What is allowed in this chapter's taught text.** Everything Volume 3 made ✓ (plan §2.1): the a-, ā-, ī-stems; i/u-stems m. (f. nom./acc./instr.); ṛ-stems (listed cells); the dual nom./acc.; the personal pronouns (listed cells), तद् and its family, अयम् (listed cells); numerals 1–10 nom./acc.; thematic laṭ P and Ā, laṅ P, loṭ P (sg./pl. all persons + 3du), vidhiliṅ P 3rd person; अस् and कृ in their listed cells; every ✓ seam of the three Chapter 4 maps; compounds of the four ✓ kinds; the speech frame; the story-opening formula. **Plus, from l01:** the fourteen sūtras; pratyāhāra names as labels (they never count: rule 20); the word इत् "marker" as a label, with its cases as a label inflects (इतः "of a marker", इता "with a marker"); the sound names in -कार (अकारः, मकारः: GLOSSARY "-कार", v1.c02.l01) as labels; derivation tables (read; written by the learner from l03). **From l02:** the savarṇa and tapara readings; the yañ test on the present endings. **From l03:** the case code, the padaccheda with case names, the bracket for a carried word ([अचि, carried from 6.1.77]) as a labelled preview of anuvṛtti (c02.l03), the bracket [पूर्वपरयोः] "in place of both" as a labelled preview (c02.l02). **Not allowed anywhere in the chapter:** any oblique dual (द्वयोः, पदयोः: c05.l03; the -योः cell is ◐ at entry); the ordinals (c05.l04: पञ्चमे सूत्रे is avoided; "the fifth sūtra" is said in English, or "हयवरडिति सूत्रे"); the word लोपः as a taught word (c02.l02; in l01 it is a labelled preview inside इतो लोपः and the sūtra तस्य लोपः); guṇa and vṛddhi as definitions (1.1.1–2 are c02.l02's: the vowels ए ओ / ऐ औ are named by their Volume 3 names, गुणः, वृद्धिः, as sandhi names only); any untaught form even as a wrong option. | policy | plan §1.2, §2.1, §4.1; vol3-plan §7.6 | Walk check done for every course-written line in §§1–4 below (§6 re-runs it). |
| 0.4 | **T9 — the fourteen sūtras (memorised table; l01).** Table 0.A. Each sūtra's sounds and marker checked against [REF:maheshvarasutras 1–14] and against the Kāśikā's comment on each (K1–K14, lines 139–270): every comment names the sounds listed and the marker that closes the line ("… *ity etān varṇān upadiśya pūrvāṃś cānte ṭakāram itaṃ karoti pratyāhārārtham*"). **The e-text's slips in sūtra 11's comment, corrected:** line 249 prints the sūtra as *kha pha dha ḍha tha ca ṭa ta v* and line 250 repeats *kha pha dha ḍha tha*; the course prints छ ठ (*kha pha cha ṭha tha*), as the plan's spelling list records (§4.6). **Also corrected (not in the plan's list):** line 252 *dhakareṇa* → *chakāreṇa* — the comment names the pratyāhāra छव् of 8.3.7 नश्छव्यप्रशान् (data file 83007), whose first sound is छ; the same slip as line 249. Teacher Notes list both. | FACT (the text of the sūtras as transmitted); TRADITION (the Kāśikā's comment) | [REF:maheshvarasutras 1–14]; [REF:kashika] (on the fourteen sūtras) | Data file 83007 नश्छव्यप्रशान् ✓. The Kāśikā's comment on the fourteen stands before its comment on 1.1.1 (line 298 *vṛddhir ād-aic*). |
| 0.5 | **The fourteen sūtras are transmitted with the Aṣṭādhyāyī, not inside its eight books** (HISTORY / FACT about the texts). The sūtrapāṭha the course checks against numbers its sūtras by book, quarter and rule (1.1.1 … 8.4.68) and none of its 3,983 entries is one of the fourteen (count of the data file's entries; c06.l01 prints the count, this chapter does not); the Kāśikā comments on the fourteen first, as its introduction (lines 135–292: *atha kim-artho varṇānām upadeśaḥ? pratyāhāra-arthaḥ*, "Why are the sounds taught? For the sake of the pratyāhāras", line 137). **Learner wording (l01 §4 HISTORY callout, fixed):** "The fourteen sūtras are handed down with Pāṇini's Aṣṭādhyāyī, at its head, but they are not among its numbered rules: the Aṣṭādhyāyī's own rules start at 1.1.1. The Kāśikā, a commentary on the whole Aṣṭādhyāyī (c. 7th c. CE), explains them first, 'for the sake of the pratyāhāras' [REF:maheshvarasutras]; [REF:kashika]." | HISTORY | [REF:maheshvarasutras]; [REF:kashika] | Pass C (2026-11-10): the authorship sentence and its [REF:cardona1997] are dropped (open item 2). No search result quotes Cardona 1997 on the authorship of the fourteen sūtras; the only Cardona statement found, from his 1969 study, says it omits the question. Lesson 4 §4 reprints the shortened callout. |
| 0.6 | **Pāṇini's date and the teachers he names (l01 §17; plan §7.3 Q3).** Learner wording: "Pāṇini's Aṣṭādhyāyī is placed around the 4th century BCE on the usual scholarly estimate; estimates vary [REF:cardona1997]. In his own rules Pāṇini names other teachers of grammar — among them Āpiśali, Śākaṭāyana and Śākalya (the rules that name them: Teacher Notes)." (Pass C, 2026-11-10: "whom scholars take to be grammarians before him or of his time" dropped because no search result quotes Cardona 1997 for it; the date sentence keeps [REF:cardona1997].) **Verified in the data file (Teacher Notes):** Āpiśali — 6.1.92 वा सुप्यापिशलेः; Śākaṭāyana — 3.4.111 लङः शाकटायनस्यैव, 8.3.18 व्योर्लघुप्रयत्नतरः शाकटायनस्य, 8.4.50 त्रिप्रभृतिषु शाकटायनस्य; Śākalya — 1.1.16 सम्बुद्धौ शाकल्यस्येतावनार्षे, 6.1.127 इकोऽसवर्णे शाकल्यस्य ह्रस्वश्च, 8.3.19 लोपः शाकल्यस्य, 8.4.51 सर्वत्र शाकल्यस्य. (8.3.19 is the plan's named Teacher-Notes sūtra here; c06.l03 reads it as D.) No count of named teachers prints (it depends on what is counted). | HISTORY (date); FACT (the names stand in the rules; no claim of the teachers' date) | [REF:cardona1997]; [REF:ashtadhyayi 6.1.92]; [REF:ashtadhyayi 3.4.111]; [REF:ashtadhyayi 8.3.19] | The wording matches the shipped Volume 1 lines ("around the 4th century BCE — estimates vary", v1.c01.l01, l03; verification log row "Pāṇini c. 4th c. BCE, estimates vary | [REF:cardona1997] | ✅"). Pass C confirms "predecessors" in Cardona or prints "other teachers" with no claim of date. |
| 0.7 | **The legend (l01 §4; IR-036; plan §7.3 Q2).** TRADITION, labelled legend, **never assessed**, no verse quoted, no REFERENCES key for the Nandikeśvarakāśikā. **The 1.x wording, re-found (p. 69, text layer):** "Legend: When Shiva danced his cosmic dance, his डमरु (damaru drum) sounded 14 times, producing these sutras. Panini built his entire grammar on them." **Learner wording (fixed):** "**[TRADITION · परम्परा]** Legend. A legend tells that when Śiva danced, his drum sounded fourteen times and gave these sūtras. The 1.x book printed this under the label 'Legend', and so does this course: it is a story the tradition tells, not an account of where the list came from, and nothing in this course asks you to repeat it." Not printed: "at the end of his dance" (review c01:P#11), "cosmic", "Panini built his entire grammar on them", any verse, any ascription to Nandikeśvara. | TRADITION (legend) | the 1.x book p. 69 (as the source of the course's label) | Volume 1 (v1.c01.l02 §4) already tells the legend with "a verse ascribed to Nandikeśvara" and "at the close of his cosmic dance": left as it is (§8 (b); open item 4). |
| 0.8 | **The pratyāhāra (l01; 1.1.71).** A pratyāhāra is a sound of the list followed by a marker; it names that sound, every sound after it up to the marker, and not the markers in between. **The Kāśikā on 1.1.71** (K15, line 1759): *ādir antyena itsañjñakena saha gṛhyamāṇas tanmadhyapatitānāṃ varṇānāṃ grāhako bhavati, svasya ca rūpasya* — "an initial [sound], taken together with a final marker, names the sounds that fall between them, and itself", with the examples *aṇ, ak, ac, hal, sup, tiṅ* (lines 1760–1765; e-text *madyapatitānāṃ* → *madhyapatitānāṃ*). **Learner English line of 1.1.71 (fixed; review c01:P#7):** "The first [sound], together with a final marker, names [the sounds between] and itself." **The markers inside a pratyāhāra are not among the sounds it names:** the Kāśikā's verse at line 176 (*pratyāhāre 'nubandhānāṃ katham ajgrahaṇeṣu na …*) — Teacher Notes only. *sup* and *tiṅ* are pratyāhāras too (the Kāśikā's own examples), met in c02.l01 and c03.l01: a one-line preview, no expansion. | TRADITION | [REF:ashtadhyayi 1.1.71]; [REF:kashika 1.1.71] | Data file 11071 आदिरन्त्येन सहेता; pc आदिः (1) · अन्त्येन (3) · सह (avyaya) · इता (3); an स्वम् रूपम् (1.1.68). |
| 0.9 | **How many pratyāhāras: a count with its method (plan §1.1 principle 4; §4.0.4 "new (synthesis)").** **Method:** the Kāśikā, commenting on each of the fourteen sūtras, names every pratyāhāra that Pāṇini's rules form with that sūtra's marker and gives for each the rule that uses it ("*tasya grahaṇaṃ bhavati tribhiḥ — akaḥ savarṇe dīrghaḥ ity akāreṇa …*"); its closing verse (lines 289–290) gives the number for each marker: *ekasmān ṅañaṇavaṭā dvābhyāṃ ṣas tribhya eva kaṇamāḥ syuḥ / jñeyau cayau caturbhyo raḥ pañcabhyaḥ śalau ṣaḍbhyaḥ* (e-text *ṅañaṇAvaṭā* → *ṅañaṇavaṭā*; *dvābhāṃ ṣastribhya* → *dvābhyāṃ ṣas tribhya*). Counted here from the comment itself, sūtra by sūtra (table 0.B): **41** (1 + 3 + 1 + 4 + 1 + 3 + 3 + 1 + 2 + 6 + 1 + 4 + 5 + 6), which is also the verse's total (five markers with one each, ष् with two, three markers with three, two with four, र् with five, two with six). Every one of the 41 rules the comment cites was found in the data file with that pratyāhāra in it (table 0.B). The comment adds that ञम् "is also seen" (*ñamantāḍ ḍaḥ iti ñakāreṇāpi grahaṇam asya dṛśyate*, line 227) in a rule that is not among the data file's sūtras (grep: no hit). **Learner wording (l01 §4 TRADITION callout, fixed):** "How many pratyāhāras do Pāṇini's rules use? The Kāśikā answers sūtra by sūtra: for each marker it names the pratyāhāras made with it and a rule that uses each, and it sums them up in a verse. By its count there are 41. It notes one more, ञम्, used in a rule that is not among the Aṣṭādhyāyī's numbered sūtras, and, under लण्, that the र of 1.1.51 names both र and ल. So the answer depends on what is counted: 41 by its list, more if these are added. The 1.x book wrote: 'Panini built ~42 pratyāhāras from the 14 Maheshvara Sutras' (p. 95). This course gives no count without saying how it was made. [REF:kashika]" | TRADITION (the Kāśikā's count); FACT (what the 1.x book printed) | [REF:kashika] (on the fourteen sūtras); the 1.x book p. 95 | The 1.x line re-found with `pdftotext -f 95 -l 95 -layout` (line 42 of the page text): "Panini built ~42 pratyāhāras from the 14 Maheshvara Sutras." The same page's heading says "the 30+ pratyāhāras Panini actually uses" — not quoted (one quotation suffices). Not printed: "hundreds of letters", "genius", "used 1000s of times in 4000 sutras" (pp. 70–71). The plan's "a count prints only with the c01 fact base's counting method" is met by this method (§7, deviation 6). |
| 0.10 | **The marker (इत्) and its deletion (l01; 1.3.3, 1.3.9).** 1.3.3 हलन्त्यम्: "[In a teaching,] the final consonant [is a marker]" — data file an: उपदेशे, इत् (carried from 1.3.2). The Kāśikā (K16, lines 3464–3473): *upadeśe iti vartate / ante bhavam antyam / dhātvādeḥ samudāyasya yad antyam hal, tad itsañjñaṃ bhavati / aiuṇ – ṇakāraḥ / ṛḷk – kakāraḥ / eoṅ – ṅakāraḥ / aiauc – cakāraḥ / upadeśe ity eva / agnicit / somasut* — the Kāśikā's own first examples of 1.3.3 are the markers of the fourteen sūtras, and its counter-examples (*agnicit, somasut*) show that the final consonant of an ordinary word is **not** a marker: only a final consonant **in a teaching** (उपदेशः: the fourteen sūtras, the root list, the affixes as first taught; L1 *upadeśa ādyoccāraṇam* "upadeśa is the first utterance") is. **This is why model sentence 2's gloss says "the last sound of each of the fourteen sūtras", not "of a sūtra"** (review c01:P#13): 1.3.3 marks the final consonant of an item as first taught (a sound list, a root, an affix, an augment, a substitute), not the last sound of a rule's wording; and इको यणचि ends in a vowel, while 1.3.3 speaks only of a consonant (हल्). 1.3.9 तस्य लोपः: "Of that [marker], deletion: it is dropped" — Kāśikā (K17, line 3596) *tasya itsañjñakasya lopo bhavati*. | TRADITION | [REF:ashtadhyayi 1.3.3]; [REF:kashika 1.3.3]; [REF:ashtadhyayi 1.3.9]; [REF:kashika 1.3.9]; [REF:laghukaumudi on 1.3.3] | Data file 13003 हलन्त्यम् (pc हल् (1) · अन्त्यम् (1); an उपदेशे, इत् ← 13002); 13009 तस्य लोपः (pc तस्य (6) · लोपः (1)). The bracket "[in a teaching … is a marker]" is printed in l01 as a plain English bracket with "(carried from the rule before; how words are carried: c02.l03)" — **no number** for 1.3.2, which is c02.l01's B (plan §4.0.3; it is not a tool of l01). |
| 0.11 | **The helping अ (l01).** The consonants of sūtras 5–14 are taught with an अ "for pronunciation": the Kāśikā on लण् (K1, line 219): *hakārādiṣv akāra uccāraṇārthaḥ, na anubandhaḥ* "the a in ha etc. is for pronunciation, not a marker". So हयवरट् lists ह् य् व् र् and its marker is ट्; the अ after each consonant is no sound of the list. Printed in l01 as a TRADITION callout with its Devanagari (table 0.E, K1). The same comment (line 220) adds that the ल of लण् is taught nasalised (*lakāre tv anunāsikaḥ pratijñāyate*) so that र in 1.1.51 can name र and ल: Teacher Notes only. | TRADITION | [REF:kashika] (on लण्) | — |
| 0.12 | **The phonetic grid behind the order (l01 §5, §9–§11; FACT).** The fourteen sūtras list the vowels first (1–4), then the semivowels with ह (5–6), the nasals (7), the voiced aspirated stops (8–9), the voiced unaspirated stops (10), the voiceless stops (11–12: aspirated ख फ छ ठ थ and unaspirated च ट त in 11; unaspirated क प in 12), the sibilants (13) and ह again (14). Whitney's terms, opened: five mute series (§§32–33); "In each series there are two surd members, two sonant, and one nasal" (§34); "the members are by the Hindu grammarians called respectively *first, second, third, fourth*, and *last* or *fifth*" (§34a); "The first and third members of each series are the ordinary corresponding surd and sonant mutes" (§35); "The second and fourth of each series are aspirates" (§37). So **चय् = च ट त क प, the first members of the five series: voiceless and unaspirated** (IR-018); **झश् = झ भ घ ढ ध ज ब ग ड द, the voiced stops, aspirated and unaspirated**; **जश् = ज ब ग ड द, the voiced unaspirated stops only**. IPA values from STYLE_GUIDE §2 only (voiced aspirates are breathy-voiced /◌ʱ/; च-row affricates /t͡ɕ …/). | FACT | [REF:whitney1889 §32]; [REF:whitney1889 §33]; [REF:whitney1889 §34]; [REF:whitney1889 §35]; [REF:whitney1889 §37]; STYLE_GUIDE §2 | The plan's "the voiced aspirates, then the voiced plain stops, then the voiceless stops" (§4.1, l01 grammar point) is kept with sūtra 11's mix stated. |
| 0.13 | **The 1.x errors corrected in the open in l01 (plan §4.0.4), each re-found and quoted with its page.** **(a) IR-018, p. 96** (rendered page image; the text layer drops the Devanagari of some lines): "• चय् (cay) = voiceless aspirated" · "• झश् (jhaś) = voiced unaspirated stops (ज ब ग ड द)" · "• जश् (jaś) = also voiced unaspirated". Corrected: चय् = च ट त क प, voiceless **unaspirated**; झश् names ten voiced stops, aspirated and unaspirated; जश् names the five unaspirated ones; they are not the same set. **(b) IR-018, p. 70** (rendered page image), the memory aid: "Sutras 1-4: VOWELS (अच्) / Sutra 5-6: SEMI-VOWELS (य् व् र् ल्) / Sutra 7: NASALS (ञ म ङ ण न) / Sutras 8-11: STOPS (झ भ घ ढ ध ज ब ग ड द ख फ छ ठ थ च ट त क प) / Sutras 13-14: SIBILANTS + ह (श ष स ह)" — sūtra 12, कपय्, has no line (its क प are put under "8-11"), and the ह of sūtra 5 is missing from "5-6". Rebuilt with all fourteen (row 0.12; l01 §15). **(c) IR-017, p. 71** (rendered page image): "This lets Panini write rules like "इको यणचि" (1.1.45) = "इक् becomes यण् before अच्"". Corrected: इको यणचि is 6.1.77; 1.1.45 is इग्यणः सम्प्रसारणम् (data file 11045) — a different rule, which names the reverse change (an इक् in place of a यण्) samprasāraṇa. **(d)** "~42 pratyāhāras" (p. 95): row 0.9. | FACT (what the 1.x book printed; what the data file says) | the 1.x book pp. 70, 71, 95, 96; [REF:ashtadhyayi 6.1.77]; [REF:ashtadhyayi 1.1.45] | 1.1.45's gloss in learner text is only "a different rule (its text: इग्यणः सम्प्रसारणम्)"; what samprasāraṇa does is c04.l02's (6.1.15 there) — no more is said here. The 1.x p. 71 यण् line reads "य व र ल" in the page image (the text layer drops ल): **not an error**, not quoted. |
| 0.14 | **6.1.77 re-read (l01 payoff; owned since v3.c04.l01).** "इको यणचि, quoted in Volume 3 as five syllables the learner could not yet read (i-ko-ya-ṇa-ci), now reads: 'ik before ac: yaṇ'" (review c01:E#9: five syllables). Its Volume 3 learner wording (v3.c04.l01 §15 Step 4, verbatim): "According to Pāṇini's sūtra 6.1.77 इको यणचि (iko yaṇ aci): 'इ, उ, ऋ become य्, व्, र् before a vowel'." The Kāśikā (K18, line 52887): *aci parataḥ iko yaṇādeśo bhavati / dadhyatra / madhvatra / kartrartham / lākṛtiḥ* — four examples, one for each इक् sound (इ → य्, उ → व्, ऋ → र्, ऌ → ल्). | TRADITION | [REF:ashtadhyayi 6.1.77]; [REF:kashika 6.1.77] | Data file 61077 इको यणचि; pc इकः (6) · यण् (1) · अचि (7); ad संहितायाम् (6.1.72). |
| 0.15 | **Savarṇa (l02; 1.1.9, 1.1.69, 1.1.10 Teacher Notes).** **1.1.9** तुल्यास्यप्रयत्नं सवर्णम् "sounds with the same place in the mouth and the same effort are savarṇa" — the Kāśikā (K5, lines 493–496): *tulya-śabdaḥ sadṛśa-paryāyaḥ / āsye bhavam āsyaṃ tālv-ādi-sthānam / prayatanaṃ prayatnaḥ spṛṣṭatādir varṇaguṇaḥ / tulya āsye prayatno yasya varṇasya yena varṇena saha sa samānajātīyaṃ prati savarṇasañjño bhavati*; line 499: four inner efforts count for savarṇa (*spṛṣṭatā, īṣatspṛṣṭatā, saṃvṛtatā, vivṛtatā*). E-text corrections: line 488 *prayarnaṃ* → *prayatnaṃ*; line 495 *spaṛṣṭata-ādir* → *spṛṣṭatādir*. **The places (LSK under 1.1.9, L5, line 140):** *akuhavisarjanīyānāṃ kaṇṭhaḥ / icuyaśānāṃ tālu / ṛṭuraṣāṇāṃ mūrdhā / ḷtulasānāṃ dantāḥ / upūpadhmānīyānām oṣṭhau / ñamaṅaṇanānāṃ nāsikā ca* — throat for अ, the क-row, ह and the visarga; palate for इ, the च-row, य, श; the roof (mūrdhā) for ऋ, the ट-row, र, ष; the teeth for ऌ, the त-row, ल, स; the lips for उ, the प-row (and the upadhmānīya); the nasals also use the nose. Whitney §20a: "The Paninean scheme (commentary to Pāṇini's grammar i. 1. 9) classes a as guttural, but apparently only to give that series as well as the rest a vowel" — printed beside the LSK line in l02 §5 as FACT about the scheme. **1.1.10** नाज्झलौ (Teacher Notes): a vowel and a consonant are never savarṇa, though इ and श share the palate (Kāśikā line 530: *ivarṇaśakārau — dadhi śītam*, no lengthening). **1.1.69** अणुदित् सवर्णस्य चाप्रत्ययः: row 0.16. | TRADITION; FACT (Whitney on the scheme) | [REF:ashtadhyayi 1.1.9]; [REF:kashika 1.1.9]; [REF:laghukaumudi on 1.1.9]; [REF:whitney1889 §20]; [REF:ashtadhyayi 1.1.10] | Data file 11009 तुल्यास्यप्रयत्नं सवर्णम् (type सवर्णसंज्ञा); 11010 नाज्झलौ. The LSK e-text labels VLk 10 "P_1,1.8" (line 139): an e-text tag slip, the rule is 1.1.9 — Teacher Notes, with VLk 9 "P_1,2.8" (= 1.1.8) and VLk 12 "P_1,1.109" (= 1.4.109), the plan's §4.6 list (review c01:E#11, P#2: not the LSK's own numbering). |
| 0.16 | **1.1.69 and the two ण् (l02).** 1.1.69 अणुदित् सवर्णस्य चाप्रत्ययः: "an aṇ sound, or a sound marked with उ, stands for its savarṇas as well as itself — unless it is something the rule introduces". The Kāśikā (K6, lines 1734–1741): *pareṇa ṇakāreṇa pratyāhāragrahaṇam / aṇ gṛhyamāṇa udic ca savarṇānāṃ grāhako bhavati, svasya ca rūpasya, pratyayaṃ varjayitvā / … udit khalv api / cuṭū, laśakvataddhite: cavargaṭavargayoḥ kavargasya ca grahaṇaṃ bhavati / apratyayaḥ iti kim? sanāśaṃsabhikṣa uḥ, a sāmpratike, dīrgho na bhavati*. The LSK (L6, line 143): *pratīyate vidhīyata iti pratyayaḥ / avidhīyamāno 'ṇudicca savarṇasya saṃjñā syāt / atraivāṇ pareṇa ṇakāreṇa / ku cu ṭu tu pu ete uditaḥ / … anunāsikānanunāsikabhedena yavalā dvidhā; tenānanunāsikāste dvayordvayossaṃjñā*. **The limit (अप्रत्ययः; review c01:P#10):** the यण् that 6.1.77 puts in (the substitute) covers no family: it is the plain य व र ल (the LSK reading: *pratyaya* = anything the rule introduces; the Kāśikā's examples are affixes). **The two ण् (l02):** the Kāśikā on लण् (K2, lines 215–216): *iṇgrahaṇāni sarvāṇi pareṇa ṇakāreṇa / aṇgrahaṇāni tu pūrveṇa, aṇuditsavarṇasya cāpratyayaḥ ity etad evaikaṃ pareṇa* — "every इण् is formed with the later ण्; every अण् with the earlier, except this one rule, 1.1.69, which takes the later". The earlier अण् is used, says the Kāśikā on अइउण् (line 141), in 1.1.51 उरण् रपरः (e-text *ekenauran rapraḥ* → *ekena uraṇ raparaḥ*, the plan's spelling list). So: **अण् = अ इ उ in every rule but 1.1.69, where it is अ इ उ ऋ ऌ ए ओ ऐ औ ह य व र ल; इण् is always इ उ ऋ ऌ ए ओ ऐ औ ह य व र ल** (as in 8.3.57 इण्कोः, c02.l03, which is why ए and ओ, and ह य व र ल, are in its set). **Printed in l02 as the rule and the one exception, attributed ("According to the Kāśikā, …"); the commentary lines themselves are Teacher Notes until c06.** | TRADITION | [REF:ashtadhyayi 1.1.69]; [REF:kashika 1.1.69]; [REF:kashika] (on लण्, अइउण्); [REF:laghukaumudi on 1.1.69] | Data file 11069 अणुदित् सवर्णस्य चाप्रत्ययः; pc अण्-उदित् (1) · सवर्णस्य (6) · च · अ-प्रत्ययः (1); an स्वम् रूपम् (1.1.68). 3.2.168 सनाशंसभिक्ष उः and 4.3.9 अ साम्प्रतिके (data file ✓): Teacher Notes only. **The ऌ–ऋ vārttika** (LSK under 1.1.9, line 140: *ṛḷvarṇayormithaḥ sāvarṇyaṃ vācyam*): Teacher Notes — "ऋ and ऌ count as savarṇa by a vārttika". |
| 0.17 | **Tapara (l02; 1.1.70).** 1.1.70 तपरस्तत्कालस्य: "a vowel followed by त् stands only for [savarṇas] of its own length [and itself]". The Kāśikā (K7, lines 1743–1757): *taḥ paro yasmāt so 'yaṃ taparaḥ, tād api paraḥ taparaḥ / taparo varṇas tatkālasya, ātmanā tulyakālasya guṇāntarayuktasya savarṇasya grāhako bhavati, svasya ca rūpasya / … kim udāharaṇam? ato bhisa ais — vṛkṣaiḥ, plakṣaiḥ / … tatkālasya iti kim? khaṭvābhiḥ, mālābhiḥ* (e-text *tapro* → *taparo*, line 1744). **The Kāśikā's own example of tapara is 7.1.9 अतो भिस ऐस्:** after a stem in short अ (वृक्षैः), not after आ (खट्वाभिः). The same is true of 7.3.101's अतः (the Kāśikā on 7.3.101: *ataḥ iti kim? cinuvaḥ, cinumaḥ*). The second reading (*tād api paraḥ*, "a vowel after त्") is Teacher Notes only. **Tapara letters the learner owns:** अत् (7.1.9, 7.3.101; 1.1.2, c02.l02), आत् (1.1.1 वृद्धिरादैच्, c02.l02; **not** the आत् of 6.1.87 आद्गुणः, which is the ablative of अ — data file pc आत् (5) — and covers अ आ by 1.1.69: the Kāśikā's first example under 1.1.69, line 1736), ईत् ऊत् एत् (1.1.11, owned: "a dual ending in ई, ऊ or ए"). | TRADITION | [REF:ashtadhyayi 1.1.70]; [REF:kashika 1.1.70]; [REF:kashika 7.1.9]; [REF:kashika 7.3.101] | Data file 11070 तपरस्तत्कालस्य; an स्वम् रूपम् (1.1.68), सवर्णस्य (1.1.69). |
| 0.18 | **The case code (l03; 1.1.49, 1.1.66, 1.1.67; with 1.1.50 and 1.3.10).** **1.1.49** षष्ठी स्थानेयोगा "a genitive [in the rules, whose link is not otherwise fixed] means 'in place of'" — Kāśikā (K8, lines 1333–1337): *iha śāstre yā ṣaṣṭhī aniyatayogā śrūyate, sā sthāneyogaiva bhavati, nānyayogā … sthānaśabdaś ca prasaṅgavācī* (e-text *sthāne-yogā-iva* = *sthāneyogā eva*; the split mark sits after the joined *-ai-*: read *eva*, Teacher Notes) — "a genitive in this grammar whose link is not otherwise fixed means 'in place of'"; its example *asteḥ sthāne bhūḥ* (line 1339) previews 2.4.52 (c06.l03): Teacher Notes. **1.1.66** तस्मिन्निति निर्दिष्टे पूर्वस्य "when [a context] is named in the locative ('tasmin'), [the operation is] on what immediately precedes it" — Kāśikā (K9, lines 1676–1681): *tasmin iti saptamyarthanirdeśe pūrvasyaiva kāryaṃ bhavati, nottarasya / iko yaṇ aci — dadhyudakam, madhvidam, pacatyodanam / nirdiṣṭagrahaṇam ānantaryārtham / agnicid atra iti vyavahitasya mā bhūt*; LSK (L13, line 162): *saptamīnirdeśena vidhīyamānaṃ kāryaṃ varṇāntareṇāvyavahitasya pūrvasya bodhyam* (e-text *avyavahatisya* → *avyavahitasya*). **1.1.67** तस्मादित्युत्तरस्य "when [a context] is named in the ablative ('tasmāt'), [the operation is] on what immediately follows" — Kāśikā (K10, lines 1682–1686): *nirdiṣṭagrahaṇam anuvartate / tasmāt iti pañcamyarthanirdeśa uttarasyaiva kāryaṃ bhavati, na pūrvasya*; LSK (L14, line 332): *pañcamīnirdeśena kriyamāṇaṃ kāryaṃ varṇāntareṇāvyavahitasya parasya jñeyam*. **The nominative is the result** (the substitute, आदेशः): no single sūtra says so; it is what the rule's other words leave (learner text: "the nominative names the result"; Kāśikā glosses read the nominative as the *ādeśa*: on 6.1.77 *yaṇādeśo bhavati*). **1.1.50** स्थानेऽन्तरतमः (D, l01 step 4, l03): Kāśikā (K11, line 1356) *sthāne prāpyamāṇānām antaratama ādeśo bhavati sadṛśatamaḥ* (e-text *antaratam ādeśo*), with its first example 6.1.101 *daṇḍāgram*: "of two अ, the long vowel of the throat, आ" (line 1361); LSK (L4, line 165) *prasaṅge sati sadṛśatama ādeśaḥ syāt*. **1.3.10** यथासंख्यमनुदेशः समानाम् (D, l03): Kāśikā (K12, lines 3608–3612) *saṅkhyāśabdena kramo lakṣyate / … samānāṃ samasaṅkhyānām … uddeśinām anudeśināṃ ca yathākramam uddeśibhir anudeśinaḥ sambadhyante*; LSK (L8, line 182) *samasaṃbandhī vidhir yathāsaṃkhyaṃ syāt / haraye / viṣṇave / nāyakaḥ / pāvakaḥ* — the LSK's examples are exactly 6.1.78's four pairs (हरये, विष्णवे, नायकः, पावकः). | TRADITION | [REF:ashtadhyayi 1.1.49]; [REF:kashika 1.1.49]; [REF:ashtadhyayi 1.1.66]; [REF:kashika 1.1.66]; [REF:laghukaumudi on 1.1.66]; [REF:ashtadhyayi 1.1.67]; [REF:kashika 1.1.67]; [REF:laghukaumudi on 1.1.67]; [REF:ashtadhyayi 1.1.50]; [REF:kashika 1.1.50]; [REF:ashtadhyayi 1.3.10]; [REF:kashika 1.3.10]; [REF:laghukaumudi on 1.3.10] | Data file: 11049 षष्ठी स्थानेयोगा (pc षष्ठी (1) · स्थाने-योगा (1); type P); 11066 तस्मिन्निति निर्दिष्टे पूर्वस्य (pc तस्मिन् (7) · इति · निर्दिष्टे (7) · पूर्वस्य (6)); 11067 तस्मादित्युत्तरस्य (pc तस्मात् (5) · इति · उत्तरस्य (6); an निर्दिष्टे ← 11066); 11050 स्थानेऽन्तरतमः (pc स्थाने (7) · अन्तरतमः (1)); 13010 यथासंख्यमनुदेशः समानाम् (pc यथासंख्यम् · अनुदेशः (1) · समानाम् (6, pl.)). The Kāśikā lines on 1.1.49, 1.1.66, 1.1.67 have no PS label in the e-text (they stand inside the comment, lines 1333, 1675, 1682): cited as [REF:kashika 1.1.49] etc. all the same. |
| 0.19 | **One form, two cases (l03; review c01:P#0, E#2, E#3).** Masculine sound-names in -अः (इकः, एचः, अकः, अतः, भिसः) and the u-name स्तोः have **one form for the genitive and the ablative singular**; the form does not decide the case, the rule's sense does, and the padaccheda printed under each sūtra names it (data file pc field). **The test the learner applies:** "what can the result stand in place of?" — in 7.1.9 the result ऐस् is an ending, so it stands in place of the ending: **भिसः is genitive, अतः ablative** ("after short a"); in 7.3.101 the result दीर्घः is a vowel, so it stands in place of the short a: **अतः is genitive** ("in place of short a"). Data file pc: 7.1.9 अतः (5) · भिस (6) · ऐस् (1); 7.3.101 अतः (6) · दीर्घः (1) · यञि (7); 6.1.101 अकः (5) · सवर्णे (7) · दीर्घः (1); 6.1.87 आत् (5) · गुणः (1); 6.1.77 इकः (6); 6.1.78 एचः (6) · अय्-अव्-आय्-आवः (1, pl.). The vṛtti's readings agree: Kāśikā on 7.1.9 *akārāntād aṅgād uttarasya bhisaḥ ais ity ayam ādeśo bhavati* (K13, line 67159; ablative *akārāntāt*); on 7.3.101 *akārāntasya aṅgasya dīrgho bhavati yañādau sārvadhātuke parataḥ* (K14, line 74087; genitive *akārāntasya*); LSK on 7.3.101 *ato 'ṅgasya dīrgho yañādau sārvadhātuke* (L11, line 1346); LSK on 6.1.87 *avarṇād aci pare pūrvaparayor eko guṇa ādeśaḥ syāt* (L9, line 194; ablative *avarṇāt*). **6.1.101's अकः** is ablative in the data file's pc; the Kāśikā (line 53426, *akaḥ savarṇe aci parataḥ pūrvaparayoḥ sthāne dīrgha ekādeśo bhavati*) and the LSK (L10, line 239) repeat *akaḥ* unmarked and put the replaced item in the heading's genitive *pūrvaparayoḥ*: so in 6.1.101 (and 6.1.87, 6.1.88) **what is replaced is both sounds, by the heading 6.1.84 एकः पूर्वपरयोः**, printed in l03 as the bracket [पूर्वपरयोः: in place of both, the earlier and the later; carried from a heading, c02.l02] with no number (its number is c02.l02's: plan §4.0.3 Totals). The Kāśikā on 6.1.84 gives the reason (line 53038): *nobhe saptamīpañcamyau yugapat prakalpike bhavataḥ* "a locative and an ablative cannot both fix the place at once" — Teacher Notes only. **8.4.40's instrumental** श्चुना "in contact with" (Kāśikā line 83652: *śakāracavargābhyāṃ sannipāte*) is the case-code exception, printed on the table as such; why the instrumental (and that the pairing is respective only for the replaced and the result, line 83653 *stoḥ ścunā iti yathāsaṅkhyam atra neṣyate*) is Teacher Notes, the vṛtti Chapter 6. | TRADITION | the data file (pc); [REF:kashika 7.1.9]; [REF:kashika 7.3.101]; [REF:kashika 6.1.101]; [REF:kashika 6.1.84]; [REF:kashika 8.4.40]; [REF:laghukaumudi on 7.3.101]; [REF:laghukaumudi on 6.1.87] | The plan's exam-task-C note is followed: 6.1.87 is not case-coded in task C (derived in task D); 6.1.101's "what is replaced" is the bracket. |
| 0.20 | **Every seam used in this chapter's course-written lines** (all ✓ in the Chapter 4 maps; the map row as in the Volume 3 Chapter 4 fact base, tables 0.A–0.C): vowel — savarṇa-dīrgha (सूत्रस्यान्त्यः, गच्छामीति, अचीति, पञ्चाक्षराणि, अत्रापि, नास्ति, यञीति); guṇa (गच्छथेति); yaṇ (इत्यत्र, इत्यर्थः, कत्यक्षराणि); अयादि at a word end (स्थान इति, स्थान ऐस्: -ए → -अ + gap); पूर्वरूप (सूत्रेऽपि); visarga — -अः + voiced consonant → ओ (अन्त्यो वर्णः, इतो लोपः, चत्वारो वर्णाः, मकारो यञ्, एको दीर्घः, दीर्घो नास्ति, पूर्वो वर्णः, इको यणादेशः); -अः + अ → ओऽ (उत्तरोऽच्, णकारोऽपि, इकोऽर्थः, हकारोऽस्ति, दीर्घोऽतः); -अः + other vowel → अ + gap (वर्ण इत्, इक इति, अत इति, विद्यालय इति, अत एको, क आदिः, अत उत्तरस्य, आलय इति); -इः + vowel → र् (आदिरइउण्); visarga before क/स and at a pause → ः (विधिः कः, भिसः स्थान, इकः स्थाने); सः before a vowel other than अ → स (स इत्; the -अः + other-vowel row, not 6.1.132, which acts only before a consonant); visarga + च → श्च (आलयश्च); consonant — a final stop before a vowel or voiced sound voiced (अजिति, इगिति, हयवरडिति, अदिति, इत्यवददिति); final म् before a consonant → ं (स्वराणां प्रत्याहारः, व्यञ्जनानां प्रत्याहारः, स्थानं तुल्यम्), before a vowel written together (सूत्राणामादिः, किमाकारौ); a consonant-final word before any sound written together (हलिति, ऐसिति, यञ्। stays at a stop). No ◐ seam is used. | FACT | the Volume 3 Chapter 4 fact base, tables 0.A–0.C; [REF:whitney1889 §126]; [REF:whitney1889 §127]; [REF:whitney1889 §129]; [REF:whitney1889 §131]; [REF:whitney1889 §175]; [REF:whitney1889 §159] | Re-walked line by line for every text in §§1–4 (§6). |
| 0.21 | **The derivation format (plan §1.4.2; fixed for the volume).** A numbered table, four columns: **Step · String · Sūtra · What happens**. The String shows seams (भो + अति); the Sūtra column gives number, text and tier — (Q), (B), (D), (owned) for a Volume 3 sūtra re-read, (preview: c0x.l0y) for a later lesson's step; the gloss is three to six words. The last line is the joined word in bold. No step is skipped without a label; no derivation exceeds ten lines. **Every derivation item, in lessons and in the exam, is headed "Derive, according to Pāṇini, …"** (it is Pāṇini's analysis: TRADITION; STYLE_GUIDE §4 rule 4). The learner writes the first three columns; the gloss is optional before Chapter 6. **From l03 on every lesson has a "derive it yourself" item** with its key in the same table form (plan principle 7). The plan's Chapter 1 tables, printed with three columns ("Step · String · Tool"), are set out below in the four-column format with the same steps (§7, deviation 2). | policy; TRADITION (the content) | plan §1.4.2, §1.1 principle 7 | — |
| 0.22 | **Commentary lines in learner text: only two.** l01 prints K1 (the helping अ, TRADITION callout, Devanagari + IAST + pause form + translation). l02 prints the LSK place list (L5, in §5 or §17, TRADITION callout). Every other commentary line in this note is Teacher Notes until Chapter 6 (plan §1.1 principle 9: "Until Chapter 6, Q-sūtras are read through the case code taught in c01.l03 and nothing more"). The **attributions** ("According to the Kāśikā, …") that state what a sūtra does in learner text follow the Kāśikā's gloss under that sūtra (rows 0.8, 0.10, 0.15–0.19) and cite [REF:kashika N.N.N] there. Commentary text is printed in Devanagari from the GRETIL IAST with the e-text's evident typos corrected, each listed in Teacher Notes (plan §1.4.3; table 0.E column "corrections"). Source line for every commentary quotation: "text of the GRETIL e-text" and nothing more (no printed edition could be opened). | policy | plan §1.4.3, §4.6 spelling rule; verification log (evidence rule) | — |
| 0.23 | **Registers in this chapter.** What the language does is **FACT** with Whitney (the vowel joins: §§126, 127, 129, 131; the stretch of the stem's अ before म and व: §733 item 9 "the stem-final a becomes ā before m and v of 1st personal endings"; the instrumental plural -ऐः: §329d "The instr. ends later always in āis"; भव = bho + a: §735a "stem भव bháva (bho+a: 131)"; the sound grid: §§32–37; the dimmed short a: §21). What Pāṇini's rules say is **TRADITION**, always attributed ("According to Pāṇini, …", "According to the Kāśikā, …") and assessed only in that frame; every derivation is TRADITION. Dates are **HISTORY** with [REF:cardona1997] and the hedge. The drum is **TRADITION, labelled legend, never assessed**. No SYMBOL content. | policy | STYLE_GUIDE §4; plan §1.1 principle 5 | Whitney §§733, 735, 329 opened for this note: the quoted words are his. |
| 0.24 | **The short a is "dimmed" in speech and open in the grammar (l01 §9–§11; Teacher Notes and one learner line).** Whitney §21: "The short a is not pronounced in India with the full openness of ā … but usually as the 'neutral vowel' … This peculiarity appears very early, being acknowledged by Pāṇini and by two of the Prātiśākhyas …, which call the utterance saṁvṛta, covered up, dimmed." The Kāśikā on अइउण् (lines 142–145): *hrasvam avarṇaṃ prayoge saṃvṛtam / dīrghaplutayos tu vivṛtatvam / teṣāṃ sāvarṇyaprasiddhyartham akāra iha śāstre vivṛtaḥ pratijñāyate / tasya prayogārtham a a iti śāstrānte pratyāpattiḥ kariṣyate* — "in use short a is closed; long and three-mora a are open; so that they count as savarṇa, a is taken as open in this grammar, and at the grammar's end (8.4.68 अ अ) it is restored for use". Learner line (l01 §10, one sentence, FACT): "अ is /ɐ/, the closed short a of STYLE_GUIDE §2 [REF:whitney1889 §21]." The rest (and why it matters for savarṇa) is Teacher Notes, cross-referenced to v1.c01.l03 §4, which already printed 8.4.68 as TRADITION. | FACT; TRADITION | [REF:whitney1889 §21]; [REF:kashika] (on अइउण्) | 8.4.68 अ अ (data file ✓) is already in learner text since v1.c01.l03: no new tool, no count. |
| 0.25 | **Hindi parallels (exact contrasts; each lesson uses only its own rows; [REF:kachru2006] bare for Hindi facts; [REF:guru1952] bare for Hindi school grammar, TRADITION).** **(a) l01 — two orders of one inventory.** The order the learner learned in Volume 1, the order of Devanagari dictionaries and of the Hindi वर्णमाला (अ आ इ ई … क ख ग घ ङ …), groups the stops by place (कवर्ग, चवर्ग …) — the order of v1.c03.l01's grid. The fourteen sūtras regroup the same sounds by the grammar's needs (all voiced aspirates together, all voiceless stops together). Contrast stated as FACT about the two lists; no claim about Hindi grammar. **(b) l02 — दीर्घ संधि and सवर्ण.** Hindi school grammar names the join of two like vowels दीर्घ संधि and describes it as the meeting of two **सवर्ण** vowels (TRADITION, [REF:guru1952] bare): the Sanskrit word the learner now owns is the word of the Hindi school rule. *Status:* search-confirmed lead only (school and exam-preparation pages describing दीर्घ संधि as सवर्ण स्वरों का मेल, 2026-11-10; pages not opened); **Pass C confirms the wording in Guru 1952 or prints it without the key as "Hindi school grammar books describe …"** — the precedent of the Chapter 6 fact base row 0.17. The Hindi names दीर्घ, गुण, वृद्धि, यण्, अयादि are already printed in v3.c04.l01 with the same register. **(c) l03 — the case code against Hindi postpositions.** Hindi says "in place of X" with the genitive postposition and a noun: **X के स्थान पर** (इक् के स्थान पर यण्); Sanskrit says it with the genitive alone (इकः … यण्), and the genitive's job in a rule is fixed by 1.1.49. Likewise "before a vowel" is Hindi **स्वर से पहले** (or, in Hindi-medium Sanskrit teaching, स्वर परे होने पर), Sanskrit the bare locative अचि; "after short a" Hindi **ह्रस्व अ के बाद**, Sanskrit the bare ablative अतः. The contrast: one case ending against a postposition plus one more word (स्थान, पहले, बाद). FACT about Hindi [REF:kachru2006]. **Not printed:** any claim that Hindi grammar "descends from" Pāṇini; any count. | FACT (Hindi); TRADITION (Hindi school grammar) | [REF:kachru2006]; [REF:guru1952] | In Hindi text grammar terms take the spelling of the GLOSSARY's Hindi column (सन्धि, where schoolbooks print संधि — corrected at review, with the chapter frame: GLOSSARY row सवर्णदीर्घः gives "दीर्घ (सवर्णदीर्घ) सन्धि", row पदच्छेदः "पदच्छेद"; the case names षष्ठी, सप्तमी, पञ्चमी, प्रथमा are used in Hindi as विभक्ति names). |
| 0.26 | **Ledger (STYLE_GUIDE §8 rules 1–23; plan §3):** 508 → 513 (l01: सूत्रम्, प्रत्याहारः, आदिः, अन्त्यः, अक्षरम्) → 517 (l02: दीर्घः, ह्रस्वः, प्रयत्नः, सवर्णः) → 521 (l03: आदेशः, पूर्वः, उत्तरः, विधिः) → 521 (l04: 0). **13 ledger-new**, each grep-checked against the entry ledger (`ledger-entry-v4.tsv`) and `work/owned.py`: none owned (row-by-row output in §1–§3). **Not counted** (rule 20–21): the fourteen sūtras, every pratyāhāra name, इत्, the -कार sound names, the case names षष्ठी, सप्तमी, पञ्चमी, प्रथमा (display in Volume 3; rule 23), every sūtra-internal form (इकः, अचि, अतः, भिसः), every commentary form (उच्चारणार्थः, अनुबन्धः), लोपः (labelled preview; c02.l02 counts it), यणादेशः (a transparent compound of a label and the l03 headword: rule 10). `vocabulary_count`: l01 5, l02 4, l03 4, l04 0. **Tools added** (§14, plan §3): l01 4 (Q 1.1.71; B 1.3.3, 1.3.9; D 1.1.50), l02 3 (Q 1.1.69; D 1.1.9, 1.1.70), l03 5 (Q 1.1.49, 1.1.66, 1.1.67; D 1.3.10, 7.1.9), l04 0; cumulative toolbox at the chapter's end **12**. **Cells drilled** (§14): l01 0, l02 7 (the seven ✓ present cells of पठति predicted from 7.3.101), l03 2 (देवैः, रामैः: the instr. pl. derived; owned cells, re-drilled), l04 0. | policy | STYLE_GUIDE §8; plan §3 | The plan's §3 table and chain are unchanged. |
| 0.27 | **Pedagogy anchors** (verification log, "Decisions recorded"): retrieval before re-reading [REF:roediger2006] (one statement only); spaced review [REF:cepeda2006] (Station 0); chunks first, analysed later [REF:nation2013] — this chapter is the "later" for 6.1.77 and the owned joins. No "strongest", "fastest", "most". | policy | verification log 2026-11-10 | — |
| 0.28 | **No scale or perfection claims (STYLE_GUIDE §7; EDITORIAL_GUIDELINES §3; plan §1.1 principle 6).** Not printed in this chapter: "5,000-year-old grammar — the most scientific linguistic system ever created" (1.x p. 69; it is c06.l04 task G's quoted error), "Panini's genius", "hundreds of letters", "2-letter codes … used 1000s of times in 4000 sutras" (1.x pp. 70–71), "maximum efficiency", "perfect order", "the whole alphabet in fourteen lines" as praise. The only counts printed: the Kāśikā's 41 (row 0.9, with its method); five syllables in इको यणचि (counted on the page). | policy | STYLE_GUIDE §7; EDITORIAL_GUIDELINES §3 | — |
| 0.29 | **§9–§11 become "the sounds inside the rules" (plan §1.1 principle 12).** l01: the fourteen sūtras recited, each consonant with its helping अ and the marker sounded at the end (*ha ya va raṭ*), the vowels as written (*a i u ṇ*); the tradition's recitation practice is TRADITION ("Traditional recitation …"), no claim of antiquity. IPA of every listed sound and marker (table 0.A). l02: length — short vs long by duration (STYLE_GUIDE §2.3: dīrgha ≈ 2× hrasva), the minimal pairs गच्छामि / गच्छसि' -मि vs the stem's short अ in गच्छथ; savarṇa by feeling the place (the LSK's places, row 0.15). l03: reading a sūtra aloud, joined as printed, then word by word (इको यणचि /ikoː jɐɳɐt͡ɕi/, pause form इकः यण् अचि /ikɐh jɐɳ ɐt͡ɕi/), so that each case ending is heard: the -अः of इकः, the -इ of अचि. Anusvāra IPA by STYLE_GUIDE §2: स्वराणां प्रत्याहारः /sʋɐɾɑːɳɑːm pɾɐt̪jɑːɦɑːɾɐh/ (before the stop प the anusvāra is the labial nasal [m]). | FACT; TRADITION (recitation) | STYLE_GUIDE §2; [REF:kashika] (helping अ) | Drafters: before a stop the anusvāra is the stop's nasal ([m] before प, [n̪] before त); before a sibilant, ह or a semivowel a nasalised vowel. |
| 0.30 | **Station 0 — canonical wording** (each printed verbatim in the booking lesson's §20 and in the running lesson's §3, **without** the S0 labels, as "- +1 day: …" / "- +1 week: …"). Table 0.D gives every item, its source, the lesson that books it and the lesson that runs it, and table 0.D-keys the keys (✓ items only). **Chain:** l01 §3 runs S0-bh (+1 day, booked by v3.c06.l05) and S0-bg (+1 week, booked by v3.c06.l04); l02 §3 runs S0-ca (l01's +1 day) and S0-bi (+1 week, booked by v3.c06.l05); l03 §3 runs S0-cc (l02's +1 day) and S0-cb (l01's +1 week); l04 §3 (before the sitting, outside its 45 minutes) runs S0-ce (l03's +1 day) and S0-cd (l02's +1 week); l03 books S0-cf (+1 week) for v4.c02.l01; l04 books S0-cg (+1 day) for v4.c02.l01 and S0-ch (+1 week) for v4.c02.l02 (plan §4.0.5). **Exam guard:** no item of S0-ce or S0-cd is an item of tasks A–E. **This is the chain the plan now states** (§4.0.5 and the l01/l02 blocks, amended from the v3.c06 fact base: plan §7.6, first row): v3.c06.l05 books its +1-week item for v4.c01.l02 ("v4.c01.l02's Station 0 runs exactly this") and its +1-day item for v4.c01.l01, and v3.c06.l04 books its +1-week item for v4.c01.l01 — the pattern §4.0.5 itself states ("each chapter's l01 runs the previous exam's +1-day item and the previous chapter's last teaching lesson's +1-week item; its l02 runs the previous exam's +1-week item"); the review's challenge to the plan line (c01:E#4) was rejected without changing what Volume 3 books, so the bookings as worded decide (§7, deviation 1). | policy | plan §4.0.5; the Chapter 6 fact base row 0.30; [REF:cepeda2006] | S0-bg diffed against `lesson-04-three-verses.md` §20 on 2026-11-10: identical. `lesson-05` is not on disk yet: its drafter re-diffs S0-bh and S0-bi against v3.c06.l05 §20 when it exists (open item 1). Corrected at review: it is now on disk, and S0-bh and S0-bi match its §20 verbatim. |
| 0.31 | **GLOSSARY terms this chapter adds or updates** (grammar terms, not ledger words; Hindi binding on the lessons): §7, item 7. | policy | GLOSSARY.md | — |

### 0.A T9 — the fourteen sūtras (l01; memorised)

Checked against [REF:maheshvarasutras 1–14] and the Kāśikā's comment on each (line of the sūtra's
heading in `jvkasipu.htm`). "Sounds" are the sounds the line lists; the marker is not one of them;
consonants are recited with a helping अ (row 0.11). IPA from STYLE_GUIDE §2.

| # | Sūtra | IAST | Sounds listed | IPA of the sounds | Marker | Kāśikā line |
|---|---|---|---|---|---|---|
| 1 | अइउण् | a i u ṇ | अ इ उ | /ɐ i u/ | ण् /ɳ/ | 139 |
| 2 | ऋऌक् | ṛ ḷ k | ऋ ऌ | /r̩ l̩/ | क् /k/ | 146 |
| 3 | एओङ् | e o ṅ | ए ओ | /eː oː/ | ङ् /ŋ/ | 161 |
| 4 | ऐऔच् | ai au c | ऐ औ | /ɐi̯ ɐu̯/ | च् /t͡ɕ/ | 169 |
| 5 | हयवरट् | ha ya va ra ṭ | ह य व र | /ɦ j ʋ ɾ/ | ट् /ʈ/ | 187 |
| 6 | लण् | la ṇ | ल | /l/ | ण् /ɳ/ | 209 |
| 7 | ञमङणनम् | ña ma ṅa ṇa na m | ञ म ङ ण न | /ɲ m ŋ ɳ n̪/ | म् /m/ | 221 |
| 8 | झभञ् | jha bha ñ | झ भ | /d͡ʑʱ bʱ/ | ञ् /ɲ/ | 230 |
| 9 | घढधष् | gha ḍha dha ṣ | घ ढ ध | /gʱ ɖʱ d̪ʱ/ | ष् /ʂ/ | 234 |
| 10 | जबगडदश् | ja ba ga ḍa da ś | ज ब ग ड द | /d͡ʑ b g ɖ d̪/ | श् /ɕ/ | 242 |
| 11 | खफछठथचटतव् | kha pha cha ṭha tha ca ṭa ta v | ख फ छ ठ थ च ट त | /kʰ pʰ t͡ɕʰ ʈʰ t̪ʰ t͡ɕ ʈ t̪/ | व् /ʋ/ | 249 (e-text *dha ḍha*: corrected, row 0.4) |
| 12 | कपय् | ka pa y | क प | /k p/ | य् /j/ | 254 |
| 13 | शषसर् | śa ṣa sa r | श ष स | /ɕ ʂ s/ | र् /ɾ/ | 261 |
| 14 | हल् | ha l | ह | /ɦ/ | ल् /l/ | 269 |

**Two facts the learner must take from the table (l01; both needed in l02):** ह is listed twice
(sūtras 5 and 14); ण् closes two sūtras (1 and 6). **The rebuilt memory aid (IR-018; l01 §15):**
1–4 the vowels · 5–6 the semivowels, with ह first · 7 the nasals · 8–9 the voiced aspirated stops ·
10 the voiced unaspirated stops · 11 the voiceless aspirated stops, then च ट त · 12 क प · 13 the
sibilants · 14 ह again. Recited (§9): *a i u ṇ · ṛ ḷ k · e o ṅ · ai au c · ha ya va raṭ · laṇ ·
ña ma ṅa ṇa nam · jha bhañ · gha ḍha dhaṣ · ja ba ga ḍa daś · kha pha cha ṭha tha ca ṭa tav · ka
pay · śa ṣa sar · hal*.

### 0.B The pratyāhāras of Pāṇini's rules, as the Kāśikā lists them (the count of row 0.9; the l04 pratyāhāra index draws on it)

Each row: the marker's sūtra, the pratyāhāras the Kāśikā names for it, the rule it cites for each
(number and text checked in the data file; every one contains that pratyāhāra). **Bold** = in
the plan's inventory for this chapter (अच्, हल्, इक्, यण्, अक्, एच्, एङ्, यञ्, झल्, जश्, चय्, चर्, खर्,
इण्, अण् (two), अट्, शर्, झश्). The full table is Teacher Notes (l04). Corrected at review: the
learner sees the total and the fifteen readings lessons 1–2 open (अच्, हल्, इक्, यण्, अक्, एच्,
एङ्, यञ्, झल्, जश्, झश्, चय्, इण् and अण् two ways); अट्, खर्, चर् and शर् stay in Teacher Notes
(deviation 14).

| Marker (sūtra) | Kāśikā lines | Pratyāhāra — cited rule | n |
|---|---|---|---|
| ण् (1) | 140–141 | **अण्** (first ण्) — 1.1.51 उरण् रपरः | 1 |
| क् (2) | 147–151 | **अक्** — 6.1.101 अकः सवर्णे दीर्घः · **इक्** — 1.1.3 इको गुणवृद्धी · उक् — 4.1.6 उगितश्च | 3 |
| ङ् (3) | 162–164 | **एङ्** — 6.1.94 एङि पररूपम् | 1 |
| च् (4) | 170–175 | **अच्** — 1.1.57 अचः परस्मिन् पूर्वविधौ · इच् — 6.3.68 इच एकाचोऽम्प्रत्ययवच्च · **एच्** — 6.1.78 एचोऽयवायावः · ऐच् — 1.1.1 वृद्धिरादैच् | 4 |
| ट् (5) | 188–190 | **अट्** — 8.4.63 शश्छोऽटि | 1 |
| ण् (6) | 210–214 | **अण्** (second ण्) — 1.1.69 अणुदित् सवर्णस्य चाप्रत्ययः · **इण्** — 8.3.57 इण्कोः · **यण्** — 6.1.77 इको यणचि | 3 |
| म् (7) | 222–227 | अम् — 8.3.6 पुमः खय्यम्परे · यम् — 8.4.64 हलो यमां यमि लोपः · ङम् — 8.3.32 ङमो ह्रस्वादचि ङमुण्नित्यम् (ञम् "also seen", line 227: not counted) | 3 |
| ञ् (8) | 231–233 | **यञ्** — 7.3.101 अतो दीर्घो यञि | 1 |
| ष् (9) | 235–237 | झष्, भष् — 8.2.37 एकाचो बशो भष् झषन्तस्य स्ध्वोः | 2 |
| श् (10) | 243–248 | अश् — 8.3.17 भोभगोअघोअपूर्वस्य योऽशि · हश् — 6.1.114 हशि च · वश् — 7.2.8 नेड् वशि कृति · **झश्**, **जश्** — 8.4.53 झलां जश् झशि · बश् — 8.2.37 | 6 |
| व् (11) | 250–252 | छव् — 8.3.7 नश्छव्यप्रशान् (e-text *dhakareṇa*: corrected) | 1 |
| य् (12) | 255–260 | यय् — 8.4.58 अनुस्वारस्य ययि परसवर्णः · मय् — 8.3.33 मय उञो वो वा · झय् — 8.4.62 झयो होऽन्यतरस्याम् · खय् — 8.3.6 | 4 |
| र् (13) | 262–268 | यर् — 8.4.45 यरोऽनुनासिकेऽनुनासिको वा · झर् — 8.4.65 झरो झरि सवर्णे · **खर्** — 8.4.55 खरि च · **चर्** — 8.4.54 अभ्यासे चर्च · **शर्** — 7.4.61 शर्पूर्वाः खयः | 5 |
| ल् (14) | 270–277 | अल् — 1.1.65 अलोऽन्त्यात् पूर्व उपधा · **हल्** — 1.1.7 हलोऽनन्तराः संयोगः · वल् — 6.1.66 लोपो व्योर्वलि · रल् — 1.2.26 रलो व्युपधाद्धलादेः संश्च · **झल्** — 8.2.26 झलो झलि · शल् — 3.1.45 शल इगुपधादनिटः क्सः | 6 |
| | | **Total** | **41** |

**चय्** is not in the list: it stands in no sūtra, only in a vārttika (चयो द्वितीयाः शरि
पौष्करसादेः, which the LSK gives under 8.3.28: Teacher Notes; plan §4.1 and review c01:P#6). It is
taught for IR-018. The rules cited in this table are **Teacher Notes only** (except 6.1.77, 6.1.78,
6.1.101, 7.3.101, owned, and 1.1.69, l02's Q): in learner text a pratyāhāra is expanded from the
sūtras, not tied to a rule number (plan §1.4.3; the altitude rule).

**Expansions of the chapter's pratyāhāras (the key for every expansion item; the l04 index):**

| Pratyāhāra | From … to marker | Sounds (long vowels by 1.1.69 where the item asks for "as a rule reads it") |
|---|---|---|
| अच् | अ … ऐऔच् | अ इ उ ऋ ऌ ए ओ ऐ औ (all vowels) |
| अक् | अ … ऋऌक् | अ इ उ ऋ ऌ |
| इक् | इ … ऋऌक् | इ उ ऋ ऌ |
| एङ् | ए … एओङ् | ए ओ |
| एच् | ए … ऐऔच् | ए ओ ऐ औ |
| अण् (first ण्; every rule but 1.1.69) | अ … अइउण् | अ इ उ |
| अण् (second ण्; 1.1.69 only) | अ … लण् | अ इ उ ऋ ऌ ए ओ ऐ औ ह य व र ल |
| इण् (always the second ण्) | इ … लण् | इ उ ऋ ऌ ए ओ ऐ औ ह य व र ल |
| अट् | अ … हयवरट् | अ इ उ ऋ ऌ ए ओ ऐ औ ह य व र |
| यण् | य … लण् | य व र ल |
| यञ् | य … झभञ् | य व र ल ञ म ङ ण न झ भ |
| हल् | ह (sūtra 5) … हल् | all consonants: ह य व र ल ञ म ङ ण न झ भ घ ढ ध ज ब ग ड द ख फ छ ठ थ च ट त क प श ष स (ह once) |
| झल् | झ … हल् | झ भ घ ढ ध ज ब ग ड द ख फ छ ठ थ च ट त क प श ष स ह (all stops but the nasals, the sibilants, ह) |
| झश् | झ … जबगडदश् | झ भ घ ढ ध ज ब ग ड द (the voiced stops) |
| जश् | ज … जबगडदश् | ज ब ग ड द (voiced, unaspirated) |
| चय् | च … कपय् | च ट त क प (voiceless, unaspirated) |
| खर् | ख … शषसर् | ख फ छ ठ थ च ट त क प श ष स (voiceless stops and sibilants) |
| चर् | च … शषसर् | च ट त क प श ष स |
| शर् | श … शषसर् | श ष स |

### 0.C The case-code table (l03; the plan's table with the review's corrections; data-file pc)

| Rule (data file) | Genitive: in place of | Nominative: the result | Locative: before | Ablative: after |
|---|---|---|---|---|
| 6.1.77 इको यणचि | इकः (इ उ ऋ ऌ, short or long) | यण् (य व र ल) | अचि (a vowel) | — |
| 6.1.78 एचोऽयवायावः | एचः (ए ओ ऐ औ) | अय् अव् आय् आव् (in order: 1.3.10) | [अचि, carried from 6.1.77] | — |
| 6.1.101 अकः सवर्णे दीर्घः | [पूर्वपरयोः: both sounds, the earlier and the later; carried from a heading, c02.l02] | दीर्घः (one long vowel) | सवर्णे [अचि] (a savarṇa vowel) | अकः (after an अक् sound) |
| 7.1.9 अतो भिस ऐस् | भिसः (the ending भिस्) | ऐस् | — | अतः (after short अ, tapara) |
| 7.3.101 अतो दीर्घो यञि | अतः (short अ; here the genitive: the same form as 7.1.9's ablative) | दीर्घः (the long vowel: आ) | यञि (a yañ sound) | — |
| 8.4.40 स्तोः श्चुना श्चुः | स्तोः (स् and the त-row) | श्चुः (श् and the च-row) | — · **instrumental** श्चुना: "in contact with" श् or the च-row (the case-code exception) | — |

Under the table, the two traps (plan): (1) the -अः form is genitive and ablative alike; the
padaccheda decides (row 0.19); (2) in 6.1.101 (and 6.1.87, 6.1.88) the replaced item is no word of
the sūtra but the bracket [पूर्वपरयोः]. Brackets in this chapter: **[अचि, carried from 6.1.77]**
(6.1.78, 6.1.101, 6.1.87) and **[आत्, carried from 6.1.87]** (6.1.88) — the data file's `an` field;
labelled "carried from the rule before; how words are carried: c02.l03". The data file also carries
headings (`ad`: संहितायाम् 6.1.72; अङ्गस्य 6.4.1 over 7.1.9 and 7.3.101; सार्वधातुके carried into
7.3.101 from 7.3.87): **not printed in Chapter 1** — the headings line is c02.l03's scaffolding
(plan §1.4.3). 7.3.101's "before a yañ sound" means "before an ending that begins with a yañ
sound" (Kāśikā *yañādau sārvadhātuke*): said in English, no number for the reason (1.1.72's
vārttika on *al*-words: Teacher Notes).

### 0.D Station 0 items (canonical wording; ✓ items only)

| Label | Booked by (§20) | Run by (§3) | Wording (verbatim; printed without the label) |
|---|---|---|---|
| S0-bh | v3.c06.l05 | v4.c01.l01 | "+1 day: the exam text again — the Pañcatantra passage of the Volume 3 exam (task C) read aloud joined at natural pace, then its five glossed words said with their meanings; v4.c01.l01's Station 0 runs exactly this." |
| S0-bg | v3.c06.l04 | v4.c01.l01 | "+1 week: the Volume 3 entry check — say and write सः, सा and तत् down the seven cases of the singular; the 3rd person singular of गच्छति in लट्, लङ्, लोट् and विधिलिङ्; join सः अपि and तत् च; and give the अन्वयः of one verse you read in v3.c06.l04; v4.c01.l01's Station 0 runs exactly this." |
| S0-bi | v3.c06.l05 | v4.c01.l02 | "+1 week: one story told in Volume 3 Sanskrit — any Volume 3 story told aloud in the imperfect, eight sentences, with one line of speech closed by इति and one relative sentence; v4.c01.l02's Station 0 runs exactly this." |
| S0-ca | v4.c01.l01 | v4.c01.l02 | "+1 day: the fourteen aloud — the fourteen sūtras recited from अइउण् to हल्, then अच्, हल्, इक् and यण् each expanded aloud from the sūtras, sound by sound; v4.c01.l02's Station 0 runs exactly this." |
| S0-cb | v4.c01.l01 | v4.c01.l03 | "+1 week: the pratyāhāra traps — write out the sounds of चय्, झश् and जश्, say which of them are aspirated, and name the two sūtras in which ह stands; v4.c01.l03's Station 0 runs exactly this." |
| S0-cc | v4.c01.l02 | v4.c01.l03 | "+1 day: the yañ sort — for the eight endings -मि, -मः, -सि, -थ, -ति, -तः, -महे and -ध्वे say whether the first sound is in यञ्, then join each to its stem (गच्छ- for the first six, लभ- for the last two), lengthening the stem's अ only before a yañ sound; v4.c01.l03's Station 0 runs exactly this." |
| S0-cd | v4.c01.l02 | v4.c01.l04 | "+1 week: the savarṇa table — write from memory what each of अ, इ, उ, ऋ, अत्, आत् [in वृद्धिरादैच्], चु and तु covers when it is written in a rule, and the rule that says so (1.1.69 or 1.1.70); v4.c01.l04's Station 0 runs exactly this." |
| S0-ce | v4.c01.l03 | v4.c01.l04 | "+1 day: five owned sūtras case-coded — for 6.1.87 आद्गुणः [अचि], 6.1.109 एङः पदान्तादति [पूर्वः], 8.3.23 मोऽनुस्वारः [हलि], 8.3.34 विसर्जनीयस्य सः [खरि] and 6.1.88 वृद्धिरेचि [आत्], name the case of each word and say what it does in the rule: in place of, the result, before or after (the word in brackets is carried, and its case counts too); v4.c01.l04's Station 0 runs exactly this." |
| S0-cf | v4.c01.l03 | v4.c02.l01 | "+1 week: the case code again — circle what is replaced and arrow the context in 6.1.77 इको यणचि, 6.1.78 एचोऽयवायावः, 7.1.9 अतो भिस ऐस् and 7.3.101 अतो दीर्घो यञि, then derive, according to Pāṇini, देव + भिस् → देवैः in table form; v4.c02.l01's Station 0 runs exactly this." |
| S0-cg | v4.c01.l04 | v4.c02.l01 | "+1 day: the fourteen written — the fourteen sūtras written from memory, every marker circled; v4.c02.l01's Station 0 runs exactly this." |
| S0-ch | v4.c01.l04 | v4.c02.l02 | "+1 week: the pratyāhāra traps again — expand अण् twice (as every rule but 1.1.69 reads it, and as 1.1.69 reads it), इण्, हल्, चय्, झश् and जश्, sound by sound; v4.c02.l02's Station 0 runs exactly this." |

**Keys (0.D-keys; the running lesson prints them in `<details>`; ✓ items only):**
- **S0-bh** (l01): the text and the five glosses of task C of v3.c06.l05 (Chapter 6 fact base §5,
  T5: the Pañcatantra, Book 4, frame story); check: no pause at any seam; the five glossed words
  with the meanings the exam's margin gave.
- **S0-bg** (l01): सः तम् तेन तस्मै तस्मात् तस्य तस्मिन् · सा ताम् तया तस्यै तस्याः तस्याः
  तस्याम् · तत् तत् तेन तस्मै तस्मात् तस्य तस्मिन् · गच्छति अगच्छत् गच्छतु गच्छेत् · सोऽपि,
  तच्च · the अन्वयः of V1, V2 or V3 of v3.c06.l04 (Chapter 6 fact base §4).
- **S0-bi** (l02): any eight correct sentences in the imperfect with one इति line and one
  relative pair (Chapter 6 fact base table 0.A).
- **S0-ca** (l02): table 0.A in order; अच् = अ इ उ ऋ ऌ ए ओ ऐ औ · हल् = all consonants, from the
  ह of हयवरट् · इक् = इ उ ऋ ऌ · यण् = य व र ल.
- **S0-cb** (l03): चय् = च ट त क प · झश् = झ भ घ ढ ध ज ब ग ड द · जश् = ज ब ग ड द; aspirated:
  झ भ घ ढ ध only (all in झश्); none in चय् or जश् · ह stands in हयवरट् (5) and हल् (14).
- **S0-cc** (l03): -मि यञ् → गच्छामि · -मः यञ् → गच्छामः · -सि not → गच्छसि · -थ not → गच्छथ ·
  -ति not → गच्छति · -तः not → गच्छतः · -महे यञ् → लभामहे · -ध्वे not → लभध्वे.
- **S0-cd** (l04): अ → अ आ (and the three-mora आ३) · इ → इ ई · उ → उ ऊ · ऋ → ऋ ॠ (ऌ too, by the
  tradition's vārttika: accepted, not required) · all four by 1.1.69 · अत् → short अ only · आत् [in वृद्धिरादैच्] →
  आ only · both by 1.1.70 (the आत् of 6.1.87 is not tapara: it is the ablative of अ, l03) · चु → च छ ज झ ञ · तु → त थ द ध न · both by 1.1.69 (udit).
- **S0-ce** (l04): 6.1.87 — आत् (पञ्चमी: after अ/आ) · गुणः (प्रथमा: the result, one guṇa vowel)
  · [अचि] (सप्तमी: before a vowel) · [replaced: both sounds — accept "the two vowels"]. 6.1.109 —
  एङः (पञ्चमी: after ए/ओ) · पदान्तात् (पञ्चमी: [which stands] at a word's end) · अति (सप्तमी: before
  short अ) · [पूर्वः] (प्रथमा: the result, the earlier sound's form) · [replaced: both sounds — accept "the two vowels"]; पदान्तात् goes with एङः ("after an ए/ओ that ends a word"). 8.3.23 — मः (षष्ठी: in
  place of म्) · अनुस्वारः (प्रथमा: the result) · [हलि] (सप्तमी: before a consonant). 8.3.34 —
  विसर्जनीयस्य (षष्ठी: in place of the visarga) · सः (प्रथमा: the result, स्) · [खरि] (सप्तमी:
  before a voiceless consonant). 6.1.88 — वृद्धिः (प्रथमा: the result, one vṛddhi vowel) · एचि (सप्तमी: before ए ओ ऐ औ)
  · [आत्] (पञ्चमी: after अ/आ) · [replaced: both sounds — accept "the two vowels"]. Score the case and the job of each
  word; the brackets' cases count.
- **S0-cf** (c02.l01): the four rules as table 0.C rows 1, 2, 4, 5; देवैः as the l03 derivation
  (b).
- **S0-cg** (c02.l01): table 0.A.
- **S0-ch** (c02.l02): table 0.B expansions (अण् ×2, इण्, हल्, चय्, झश्, जश्).

### 0.E Commentary lines (Kāśikā K1–K18, Laghusiddhāntakaumudī L1–L14)

"Learner" = printed in learner text (Devanagari, IAST, pause form, translation); "TN" = Teacher
Notes (IAST and translation; Devanagari optional). Text of the GRETIL e-text; line numbers of
`jvkasipu.htm` / `varlghku.htm`. Corrections: the e-text's evident typos, each listed in Teacher
Notes where the line prints.

| Label | Under | Line(s) | Text (e-text, character by character; hyphens are the e-text's) | Corrections | Where | Course translation |
|---|---|---|---|---|---|---|
| K1 | लण् | 219 | *hakāra-ādiṣv-akāra uccāraṇa-arthaḥ, na anubandhaḥ* | — | **Learner** (l01 §4 or §15): हकारादिष्वकार उच्चारणार्थः, न अनुबन्धः। (*hakārādiṣv akāra uccāraṇārthaḥ, na anubandhaḥ*) — pause: हकारादिषु अकारः उच्चारणार्थः, न अनुबन्धः। (*hakārādiṣu akāraḥ uccāraṇārthaḥ, na anubandhaḥ*) | "In ह and the rest, the अ is for pronunciation; it is not a marker." |
| K2 | लण् | 215–216 | *iṇ-grahaṇāni sarvāṇi pareṇa ṇakāreṇa / aṇ-grahaṇāni tu pūrveṇa, aṇ-udit-savarṇasya ca-apratyayaḥ (*1,1.69) ity etad-eva-ikaṃ pareṇa* | *eva-ikaṃ* = *evaikaṃ* (the e-text's split of a join) | TN (l02); Devanagari: इण्ग्रहणानि सर्वाणि परेण णकारेण। अण्ग्रहणानि तु पूर्वेण, अणुदित्सवर्णस्य चाप्रत्ययः इत्येतदेवैकं परेण। | "Every इण् is taken with the later ण्; every अण् with the earlier — only this one, 1.1.69, with the later." |
| K3 | अइउण् | 140–141 | *a i u ityanena krameṇa varṇān-upadiśyānte ṇakāramitaṃ karoti pratyāhārārtham / tasya grahaṇaṃ bhavaty ekenauran rapraḥ (*1,1.51) ityakāreṇa* | *ekenauran rapraḥ* → *ekena uraṇ raparaḥ* (plan §4.6) | TN (l01, l02) | "Having taught the sounds in this order, a i u, he puts ṇ at the end as a marker, for the pratyāhāras. It is taken in one: in उरण् रपरः, with अ." |
| K4 | ऋऌक् | 147 | *ṛ ḷ ity etau varṇāv updiśya …* | *updiśya* → *upadiśya* | TN (l01: the quoted-sounds convention, row 0.2) | "Having taught these two sounds, ṛ ḷ, …" |
| K5 | 1.1.9 | 488, 493–496, 499 | *tulya-āsya-prayarnaṃ savarṇam* (heading) … *tulya āsye prayatno yasya varṇasya yena varṇena saha sa samānajātīyaṃ prati savarṇasañjño bhavati* | *prayarnaṃ* → *prayatnaṃ*; l. 495 *spaṛṣṭata-ādir* → *spṛṣṭatādir* | TN (l02) | "A sound whose place in the mouth and effort are the same as another's is called savarṇa with it." |
| K6 | 1.1.69 | 1734–1741 | row 0.16 | l. 1740 *grahanam* → *grahaṇaṃ* | TN (l02) | row 0.16 |
| K7 | 1.1.70 | 1743–1757 | row 0.17 | l. 1744 *tapro* → *taparo*; *guṇa-antara-yuktasya* read *guṇāntarayuktasya* (the e-text's split of a join) | TN (l02) | row 0.17 |
| K8 | 1.1.49 | 1333–1339 | row 0.18 | *sthāne-yogā-iva* read *sthāneyogaiva* | TN (l03) | "A genitive in this grammar whose link is not otherwise fixed means 'in place of'." |
| K9 | 1.1.66 | 1676–1681 | *tasmin iti saptamy-artha-nirdeśe pūrvasya-iva kāryaṃ bhavati, na-uttarasya / iko yaṇ-aci (*6,1.77)--dadhyudakam / madhvidam / pacatyodanam* | *pūrvasya-iva* read *pūrvasyaiva* | TN (l03) | "When the context is named in the sense of the locative, the operation is on what precedes it only, not on what follows: इको यणचि — दध्युदकम्, मध्विदम्, पचत्योदनम्." |
| K10 | 1.1.67 | 1682–1686 | *tasmāt iti pañcamy-artha-nirdeśa uttarasya-iva kāryaṃ bhavati, na pūrvasya* | *uttarasya-iva* read *uttarasyaiva* | TN (l03) | "When named in the sense of the ablative, the operation is on what follows only, not on what precedes." |
| K11 | 1.1.50 | 1356–1361 | *sthāne prāpyamāṇānām antaratam ādeśo bhavati sadṛśatamaḥ … sthānataḥ - akaḥ savarṇe dīrghaḥ (*6,1.101) / daṇḍāgram … dvayor akārayoḥ kaṇṭhya eva dīrgha a-akāro bhavati* | *antaratam ādeśo* → *antaratama ādeśo*; l. 1356 *antaratam ādeśo* → *antaratama ādeśo*; *dīrgha a-akāro* = *dīrgha ākāro* | TN (l01, l03; exam key) | "Of the substitutes that could come in a place, the most similar one comes. … By place: in दण्डाग्रम्, for two अ the long vowel of the throat, आ." |
| K12 | 1.3.10 | 3608–3612 | row 0.18 | — | TN (l03) | "Items equal in number are paired in order." |
| K13 | 7.1.9 | 67159–67169 | *akārāntād aṅgād uttarasya bhisaḥ ais ity ayam ādeśo bhavati / vṛkṣaiḥ / plakṣaiḥ … ataḥ iti kim? agnibhiḥ … taparakaraṇaṃ kim? khaṭvābhiḥ* | — | TN (l03; l02 for tapara) | "After a stem ending in short a, ais is the substitute for bhis: वृक्षैः. Why 'short a'? अग्निभिः. Why the t? खट्वाभिः." |
| K14 | 7.3.101 | 74087–74093 | *akārāntasya aṅgasya dīrgho bhavati yañādau sārvadhātuke parataḥ / pacāmi, pacāvaḥ, pacāmaḥ … ataḥ iti kim? cinuvaḥ … yañi iti kim? pacataḥ / pacathaḥ* | — | TN (l02, l03) | "The short a of a stem is lengthened before a sārvadhātuka ending that begins with a yañ sound: पचामि, पचामः. Why 'yañ'? पचतः." |
| K15 | 1.1.71 | 1758–1765 | row 0.8 | *madyapatitānāṃ* → *madhyapatitānāṃ* | TN (l01) | row 0.8 |
| K16 | 1.3.3 | 3464–3473 | row 0.10 | l. 3464 *vartte* → *vartate*; l. 3469 *ṅakaraḥ* → *ṅakāraḥ* | TN (l01) | row 0.10 |
| K17 | 1.3.9 | 3596 | *tasya itsañjñakasya lopo bhavati* | — | TN (l01) | "Of that which is called a marker, there is deletion." |
| K18 | 6.1.77 | 52887–52891 | row 0.14 | — | TN (l01, l03) | "Before a vowel, the yaṇ substitute comes in place of an ik: दध्यत्र, मध्वत्र, कर्त्रर्थम्, लाकृतिः." |
| L1 | 1.3.3 (VLk 1) | 114–115 | *upadeśe 'ntyaṃ halitsyāt / upadeśa ādyoccāraṇam* | — | TN (l01 §17) | "In a teaching, the final consonant is a marker. 'Teaching' is the first utterance." |
| L2 | 1.3.9 (VLk 3) | 120–121 | *tasyeto lopaḥ syāt / ṇādayo 'ṇādyarthāḥ* | — | TN (l01) | "That marker is dropped. ṇ and the rest are there for aṇ and the rest." |
| L3 | 1.1.71 (VLk 4) | 123–124 | *antyenetā sahati ādirmadhyagānāṃ svasya ca saṃjñā syāt yathāṇiti a i u varṇānāṃ saṃjñā / evamac hal alityādayaḥ* | *sahati* → *sahita* | TN (l01 §17) | "The first, together with the final marker, names those in between and itself: aṇ names a i u; so ac, hal, al and the rest." |
| L4 | 1.1.50 (VLk 17) | 164–165 | *prasaṅge sati sadṛśatama ādeśaḥ syāt* | — | TN (l01, l03) | "Where a substitute is due, the most similar one comes." |
| L5 | 1.1.9 (VLk 10) | 139–140 | *akuhavisarjanīyānāṃ kaṇṭhaḥ / icuyaśānāṃ tālu / ṛṭuraṣāṇāṃ mūrdhā / ḷtulasānāṃ dantāḥ / upūpadhmānīyānām oṣṭhau / ñamaṅaṇanānāṃ nāsikā ca* (and the e-text label "P_1,1.8") | label "P_1,1.8" = 1.1.9 (plan §4.6) | **Learner** (l02 §5 TRADITION callout): अकुहविसर्जनीयानां कण्ठः। इचुयशानां तालु। ऋटुरषाणां मूर्धा। ऌतुलसानां दन्ताः। उपूपध्मानीयानामोष्ठौ। ञमङणनानां नासिका च। — pause: the same words with their pause forms (उपूपध्मानीयानाम् ओष्ठौ; the compounds are one word each) | "The throat for अ, the क-row, ह and the visarga; the palate for इ, the च-row, य and श; the roof for ऋ, the ट-row, र and ष; the teeth for ऌ, the त-row, ल and स; the lips for उ, the प-row and the upadhmānīya; the nasals [ञ म ङ ण न] use the nose as well." (Printed with the note: "the upadhmānīya is a breath-sound before प and फ that this course does not teach".) |
| L6 | 1.1.69 (VLk 11) | 142–143 | row 0.16 | — | TN (l02) | row 0.16 |
| L7 | 6.1.78 (VLk 22) | 179–180 | *ecaḥ kramāday av āy āv ete syuraci* | read *kramād ay … syur aci* | TN (l03) | "In place of ए ओ ऐ औ, in order, अय् अव् आय् आव् before a vowel." |
| L8 | 1.3.10 (VLk 23) | 182–183 | *samasaṃbandhī vidhiryathāsaṃkhyaṃ syāt / haraye / viṣṇave / nāyakaḥ / pāvakaḥ* | read *vidhir yathāsaṃkhyaṃ* | TN (l03) | "An operation linking equal sets goes in order: हरये, विष्णवे, नायकः, पावकः." |
| L9 | 6.1.87 (VLk 27) | 194–195 | *avarṇādaci pare pūrvaparayoreko guṇa ādeśaḥ syāt / upendraḥ / gaṅgodakam* | read *avarṇād aci … pūrvaparayor eko* | TN (l03; exam key) | "After an a-vowel, before a vowel, one guṇa substitute for both: उपेन्द्रः, गङ्गोदकम्." |
| L10 | 6.1.101 (VLk 42) | 239–240 | *akaḥ savarṇe 'ci pare pūrvaparayordīrgha ekādeśaḥ syāt / daityāraḥ / śrīśiḥ / viṣṇūdayaḥ / hotṝkāraḥ* | the examples read *daityāriḥ* (daitya + ariḥ), *śrīśaḥ* (śrī + īśaḥ): the e-text's vowels are exchanged; the TN quotation stops at *syāt* and prints no example (open item 3) | TN (l02) | "After an ak, before a savarṇa vowel, one long vowel for both." |
| L11 | 7.3.101 (VLk 392) | 1346–1347 | *ato 'ṅgasya dīrgho yañādau sārvadhātuke / bhavāmi / bhavāvaḥ / bhavāmaḥ / … yūyaṃ bhavatha* | — | TN (l02) | "The short a of a stem is long before a sārvadhātuka ending beginning with yañ: भवामि …; you (pl.) भवथ." |
| L12 | 7.1.9 (VLk 142) | 552–553 | *anekālśitsarvasya / rāmairḥ* | *rāmairḥ* → *rāmaiḥ* | TN (l03: why ऐस् replaces the whole ending, 1.1.55) | "[By 1.1.55] a substitute of more than one sound replaces the whole: रामैः." |
| L13 | 1.1.66 (VLk 16) | 161–162 | row 0.18 | *avyavahatisya* → *avyavahitasya* | TN (l03) | "An operation prescribed by a locative applies to what immediately precedes, with no other sound between." |
| L14 | 1.1.67 (VLk 71) | 332–333 | row 0.18 | — | TN (l03) | "An operation made by an ablative applies to what immediately follows." |

Additional Kāśikā lines read for this note (TN only, no label): on 6.1.78 (52906 *ecaḥ sthāne aci
parataḥ ay av āy āv ity ete ādeśāḥ yathāsaṅkhyaṃ bhavanti / cayanam / lavanam / cāyakaḥ /
lāvakaḥ*); on 6.1.84 (53033–53039); on 6.1.101 (53426–53433); on 8.4.40 (83652–83657); the closing
verse of the pratyāhāra comment (289–290, row 0.9); the comment on हल् (278–288: why ह is taught
twice — *kittvavikalpakṣa-iḍvidhayo yathā syuḥ*, "so that [certain] operations [needing ह in हल्]
apply", and *aḍgrahaṇeṣu ca aśgrahaṇeṣu ca hakārasya grahaṇaṃ yathā syāt* for the first ह): Teacher
Notes of l01 may give the gist "the Kāśikā explains that each ह is needed by different rules" with
no further claim.

---

## 1. L1 — अइउण्: The Fourteen Sūtras (grammar)

**Front matter.** id `v4.c01.l01` · file `lesson-01-the-fourteen-sutras.md` · title sa अइउण् ·
sa_iast *aiuṇ* · en "The Fourteen Sūtras" · hi "चौदह सूत्र" · lesson_type grammar · cefr B1 ·
duration_minutes 45 · self_study_minutes **45** (§21) · prerequisites [v3.c06.l05] · review_of
[v3.c06.l05, v3.c06.l04, v3.c04.l01, v1.c04.l04, v1.c03.l01] (the plan's list plus v3.c06.l04,
whose +1-week booking S0-bg this lesson runs: §7, deviation 1) · vocabulary_count **5** · tags
[grammar, panini, maheshvara-sutras, pratyahara, it-marker, derivation, recitation, 1x-errata,
spaced-review] · media (planned): image `v4c01l01-fourteen-on-the-grid.svg` (the fourteen lines
written into the Volume 1 varga grid, markers in a second colour); diagram
`v4c01l01-pratyahara-span.svg` (an arrow from a sound to a marker, अच् and इक् drawn); audio
`v4c01l01-fourteen-recited.mp3`, `v4c01l01-conversation.mp3`; worksheet
`v4c01l01-grid-and-traps.pdf`; quizzes `v4c01l01-quiz.md`, `v4c01l01-quiz-key.md`.

**Objectives (front matter `objectives`, en + hi; each tested in §18/§19):**
1. en "Recite and write the fourteen sūtras in order, and mark the marker that closes each." ·
   hi "चौदह सूत्र क्रम से बोलें और लिखें, और हर सूत्र को बन्द करने वाला इत्-वर्ण पहचानें।"
2. en "Expand a pratyāhāra from the fourteen sūtras, sound by sound — अच्, हल्, इक्, यण्, एच्,
   एङ्, अक्, झल्, जश्, चय्, झश् — and tell चय् from झश् and जश्." · hi "चौदह सूत्रों से किसी
   प्रत्याहार को वर्ण-दर-वर्ण खोलें — अच्, हल्, इक्, यण्, एच्, एङ्, अक्, झल्, जश्, चय्, झश् — और
   चय् को झश् व जश् से अलग पहचानें।"
3. en "Read इको यणचि through its pratyāhāras, and say, according to Pāṇini, which sound replaces
   which in इति + अवदत् → इत्यवदत्, and why it is य्." · hi "इको यणचि को उसके प्रत्याहारों से
   पढ़ें, और पाणिनि के अनुसार बताएँ कि इति + अवदत् → इत्यवदत् में कौन-सा वर्ण किसके स्थान पर
   आता है, और वह य् ही क्यों है।"
4. en "Say and write six Sanskrit sentences about the sound system with the day's words, joined,
   with the pause form beneath." · hi "आज के शब्दों से वर्ण-व्यवस्था के बारे में छह संस्कृत वाक्य
   बोलें और लिखें — जुड़े रूप में, नीचे विराम-रूप के साथ।"

**The opening (§1 Hook; the owned form and the puzzle).** Since v3.c04.l01 the learner has said
इत्यवदत् and has been told that 6.1.77 इको यणचि states it — five syllables, *i-ko-ya-ṇa-ci*, that
nobody has yet taught them to read. The hook prints the sūtra and the owned word side by side and
asks: "Which of these five syllables says 'i', which says 'y', which says 'before a vowel'?" — and
promises that by the end of the lesson the learner reads it: "ik before ac: yaṇ". (The word इक् is
not a word of Sanskrit; it is a name made from a list. Today's list is fourteen lines long.)

**The one grammar point.** The fourteen sūtras list the sounds of Sanskrit in the order the
grammar uses (how they are handed down: HISTORY, §4 callout; the authorship sentence was dropped
at Pass C, row 0.5). Each line is closed by a
consonant that is not one of its sounds, a marker (इत्). A pratyāhāra — a sound plus a marker —
names every sound from that sound up to the marker, and itself (1.1.71).

**Forms taught.** T9 (table 0.A: the fourteen, their sounds, markers, IPA; the two facts — ह
twice, ण् twice; the rebuilt memory aid). **The pratyāhāras of the day** (the plan's table, with
the review's correction of the चय् row; each expanded by the learner on the grid):

| Pratyāhāra | From … to marker | Sounds | Where the learner already met it |
|---|---|---|---|
| अच् | अ … ऐऔच् | all vowels: अ इ उ ऋ ऌ ए ओ ऐ औ | 6.1.77 इको यणचि (the अच् of अचि) |
| हल् | ह (sūtra 5) … हल् | all consonants | the name हलन्त, "consonant-final" (v1.c05.l01) |
| इक् | इ … ऋऌक् | इ उ ऋ ऌ | 6.1.77 |
| यण् | य … लण् | य व र ल | 6.1.77 |
| एच् | ए … ऐऔच् | ए ओ ऐ औ | 6.1.78 एचोऽयवायावः |
| एङ् | ए … एओङ् | ए ओ | 6.1.109 एङः पदान्तादति |
| अक् | अ … ऋऌक् | अ इ उ ऋ ऌ | 6.1.101 अकः सवर्णे दीर्घः |
| झल् | झ … हल् | all stops except the nasals, + श ष स ह | 8.2.39 झलां जशोऽन्ते |
| जश् | ज … जबगडदश् | ज ब ग ड द | 8.2.39 (षट् → षड्) |
| चय् | च … कपय् | च ट त क प | in no sūtra; it is used only in a vārttika (Teacher Notes). Taught here because the 1.x book glossed it "voiceless aspirated": it is voiceless **unaspirated** |

The drill row beside the table (main risk; IR-018): **झश्** = झ … जबगडदश् = झ भ घ ढ ध ज ब ग ड द
(all the voiced stops) — not जश्. Owned sūtra numbers in this table (6.1.78, 6.1.109, 6.1.101,
8.2.39) are reminders, not tools (plan §4.0.3 Totals). The "halanta" cell: GLOSSARY हलन्त
"consonant-final; a common name for the virāma" (v1.c05.l01) — the हल् of हलन्त is this
pratyāhāra. The cell reads "the name हलन्त (v1.c05.l01)".

**Sūtras by tier (tools added: 4).**

- **Q — 1.1.71 आदिरन्त्येन सहेता** (*ādir antyena sahetā*). Padaccheda with word glosses (case
  names from l03 on, plan §1.4.3): आदिः "the first [sound]" · अन्त्येन "with the final" · सह
  "together" · इता "with a marker". English line: "The first [sound], together with a final
  marker, names [the sounds between] and itself." [REF:ashtadhyayi 1.1.71]; [REF:kashika 1.1.71]
  (row 0.8). Assessed by gist: "According to Pāṇini (1.1.71), a sound followed by a marker names
  …".
- **B — 1.3.3 हलन्त्यम्** (*hal antyam*). Padaccheda: हल् "a consonant" · अन्त्यम् "final".
  English line: "[In a teaching,] the final consonant [is a marker]." The bracket: "the words in
  square brackets are carried from the rule before (how words are carried: c02.l03)". Note under
  it (row 0.10): "A teaching here means a list as first taught — like the fourteen sūtras. The
  last consonant of an ordinary word (अवदत्) is no marker." [REF:ashtadhyayi 1.3.3];
  [REF:kashika 1.3.3].
- **B — 1.3.9 तस्य लोपः** (*tasya lopaḥ*). Padaccheda: तस्य "of it [the marker]" · लोपः
  "deletion". English line: "That [marker] is dropped." (लोपः as a word: c02.l02; here it is read
  inside the sūtra.) [REF:ashtadhyayi 1.3.9]; [REF:kashika 1.3.9].
- **Re-read (owned) — 6.1.77 इको यणचि**, now read: इकः "of an ik" · यण् "a yaṇ" · अचि "before an
  ac" → "ik before ac: yaṇ" (the case names come in l03).
- **D — 1.1.50 स्थानेऽन्तरतमः** (*sthāne 'ntaratamaḥ*), in step 4 of the derivation, labelled
  "preview: read in l03". English line: "In place of a sound, the most similar substitute."
  [REF:ashtadhyayi 1.1.50]; [REF:kashika 1.1.50].

**Teacher-Notes sūtras (number and text in Teacher Notes only; learner text says "Teacher
Notes"):** 1.3.2 उपदेशेऽजनुनासिक इत् (the source of the carried words of 1.3.3; c02.l01's B);
8.3.19 लोपः शाकल्यस्य (the Śākalya rule, §17; c06.l03's D); 6.1.92, 3.4.111, 8.3.18, 8.4.50,
1.1.16, 6.1.127, 8.4.51 (the other rules naming Āpiśali, Śākaṭāyana, Śākalya; row 0.6); 8.3.7, the
vārttika चयो द्वितीयाः शरि पौष्करसादेः (under 8.3.28 in the LSK; re-found: `varlghku.htm` line 375, under VLk 85 = 8.3.28 ङ्णोः कुक्टुक् शरि: *cayo dvitīyāḥ śari pauṣkarasāder iti vācyam*); 8.4.68 अ अ (row 0.24; already printed in v1.c01.l03).

**The derivation (the day's spine): इति + अवदत् → इत्यवदत्** (owned since v3.c04.l01). Heading in
the lesson: "Derive, according to Pāṇini, इति + अवदत् → इत्यवदत्" (done with the teacher).

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | इति + अवदत् | — | two words in contact (joined text) |
| 1 | इति + अवदत् | 1.1.71 आदिरन्त्येन सहेता (Q) | the final इ is an इक् sound: अ**इ**उण् ऋऌ**क्** → इ उ ऋ ऌ |
| 2 | इति + अवदत् | 1.1.71 (Q) | the next sound अ is an अच् sound: **अ**इउण् … ऐऔ**च्** |
| 3 | इत् + (य्/व्/र्/ल्) + अवदत् | 6.1.77 इको यणचि (owned) | an इक् before an अच् is replaced by a यण् sound |
| 4 | इत्य् + अवदत् | 1.1.50 स्थानेऽन्तरतमः (D, preview: l03) | the यण् most like इ: य् (both made at the palate) |
| 5 | **इत्यवदत्** | — | joined |

Step 4's "both made at the palate" is the LSK's place list (row 0.15: *icuyaśānāṃ tālu*), said in
l01 in English only ("इ and य् are both palatal; Volume 1 filed इ with the palatal row
(v1.c03.l02) and made य at the ई position
(v1.c04.l01)"). **Run by the learner, with the teacher (not yet "derive it yourself", which starts in
l03):** इति + आह → इत्याह (v3.c04.l01, Whitney §129's own example); अपि + अस्ति → अप्यस्ति; सु +
आगतम् → स्वागतम् (उ → व्: "the यण् most like उ: व्, both made with the lips" — the LSK files व्
under "teeth and lips", *vakārasya dantoṣṭham*, line 140: Teacher Notes; learner line "व् is the
यण् nearest to उ: both use the lips"). Keys: as the table, with इ → य् (आ an अच्), इ → य् (अ an
अच्), उ → व् (आ an अच्).

**Model sentences (joined; pause form; IAST; gloss).** The plan's six, with the review's fixes.
1. सूत्राणामादिरइउण्। (*sūtrāṇām ādir aiuṇ.*) — pause: सूत्राणाम् आदिः अइउण्। (*sūtrāṇām ādiḥ
   aiuṇ.*) — "The first of the sūtras is अइउण्." — सूत्रों में पहला अइउण् है।
2. सूत्रस्यान्त्यो वर्ण इत्। (*sūtrasyāntyo varṇa it.*) — pause: सूत्रस्य अन्त्यः वर्णः इत्।
   (*sūtrasya antyaḥ varṇaḥ it.*) — "The last sound of each of the fourteen sūtras is a marker." —
   चौदह सूत्रों में से हर सूत्र का अन्तिम वर्ण इत् है। Note printed under it: "सूत्रम् here is one
   of the fourteen; in इको यणचि the last sound is no marker (1.3.3 speaks of a final consonant, and इको यणचि ends in a vowel)."
3. अजिति स्वराणां प्रत्याहारः। (*aj iti svarāṇāṃ pratyāhāraḥ.*) — pause: अच् इति स्वराणाम्
   प्रत्याहारः। (*ac iti svarāṇām pratyāhāraḥ.*) — "अच् is the abbreviation for the vowels." —
   अच् स्वरों का प्रत्याहार है।
4. हलिति व्यञ्जनानां प्रत्याहारः। (*hal iti vyañjanānāṃ pratyāhāraḥ.*) — pause: हल् इति
   व्यञ्जनानाम् प्रत्याहारः। (*hal iti vyañjanānām pratyāhāraḥ.*) — "हल् is the abbreviation for
   the consonants." — हल् व्यञ्जनों का प्रत्याहार है।
5. इगिति इ उ ऋ ऌ इति चत्वारो वर्णाः। (*ig iti i u ṛ ḷ iti catvāro varṇāḥ.*) — pause: इक् इति इ
   उ ऋ ऌ इति चत्वारः वर्णाः। (*ik iti i u ṛ ḷ iti catvāraḥ varṇāḥ.*) — "इक् means the four sounds
   i u ṛ ḷ." — इक् का अर्थ है चार वर्ण: इ उ ऋ ऌ। Note: "The quoted sounds stay unjoined: joined,
   they would change into other sounds. The Kāśikā writes them so too."
6. इतो लोपः। (*ito lopaḥ.*) — pause: इतः लोपः। (*itaḥ lopaḥ.*) — "A marker disappears." — इत्
   का लोप होता है। Note: "लोपः is Chapter 2's word; here it is read from 1.3.9's तस्य लोपः."

(IAST of a joined line, row 0.2: words are written together only where two vowels fused —
*sūtrasyāntyo* (a + a) is one IAST word; *aj iti*, *hal iti*, *ig iti* stay apart: the stop is only
voiced.)

**Headwords (5; 508 → 513).** Each verified; ledger status by grep of `ledger-entry-v4.tsv` and
`work/owned.py` ("-" = not owned).

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status | dictionary |
|---|---|---|---|---|---|---|---|
| सूत्रम् | sūtram | /suːt̪ɾɐm/ | rule (in a grammar); thread | सूत्र | n. a-stem | ledger-new (owned.py: -) | Apte s.v. सूत्रं: "A thread …", 7 "A short rule or precept, an aphorism"; MW s.v. sūtra n. "a thread …" |
| प्रत्याहारः | pratyāhāraḥ | /pɾɐt̪jɑːɦɑːɾɐh/ | abbreviation (in grammar: a sound and a marker naming a stretch of sounds); lit. "drawing together" | प्रत्याहार | m. a-stem | ledger-new (-) | Apte s.v. प्रत्याहारः 5 "(In gram.) The comprehension of several letters or affixes into one …"; MW s.v. pratyāhāra "a group of letters &c. so combined (as ac or hal in the ŚivaSūtras)" |
| आदिः | ādiḥ | /ɑːd̪ih/ | beginning; (at a compound's end) "and so on" | आदि, आरम्भ | m. i-stem | ledger-new (-) | Apte s.v. आदि: "--diH 1 Beginning, commencement"; MW s.v. ādi m. "beginning, commencement" |
| अन्त्यः | antyaḥ | /ɐn̪t̪jɐh/ | last, final | अन्तिम | adj. -न्त्या -न्त्यम् | ledger-new (-) | Apte s.v. अंत्य "Last, final (as a letter, word &c.)"; MW s.v. antya "last in place, in time, or in order" |
| अक्षरम् | akṣaram | /ɐkʂɐɾɐm/ | syllable; written letter | अक्षर | n. a-stem | ledger-new (-) | MW s.v. akṣara n. "a syllable"; Apte s.v. अक्षर (n. senses: Pass C confirms "syllable"; the opened Apte lines show the adjective "imperishable" first) |

Not counted (rule 20): the fourteen sūtras, every pratyāhāra name, इत्, the -कार names (णकारः,
हकारः). The plan's "Why now" column: सूत्रम् — the chapter's name; प्रत्याहारः — the day's tool;
आदिः — 1.1.71 आदिः (the Hitopadeśa uses -आदि at compounds' ends, e.g. *dāna-dharmādikam*: Teacher
Notes only; not "इत्यादि", review c01:P#16); अन्त्यः — 1.1.71, 1.3.3; अक्षरम् — the recitation,
§9, and the §16 question "how many syllables in इको यणचि?" (it is used in §16 turns 9–10 and in
§18 Ex 6: rule 20's "a word the learner uses in Sanskrit sentences" — अक्षरम् is an ordinary noun,
not a term, but the same test is met). **§14 line:** "Ledger 508 → 513 (5 ledger-new). Cells
drilled: 0. Tools added: 4 (1.1.71 Q; 1.3.3 B; 1.3.9 B; 1.1.50 D)."

**§3 Station 0 (verbatim; the two arriving items, then the review prompts).**
- +1 day: the exam text again — the Pañcatantra passage of the Volume 3 exam (task C) read aloud
  joined at natural pace, then its five glossed words said with their meanings; v4.c01.l01's
  Station 0 runs exactly this.
- +1 week: the Volume 3 entry check — say and write सः, सा and तत् down the seven cases of the
  singular; the 3rd person singular of गच्छति in लट्, लङ्, लोट् and विधिलिङ्; join सः अपि and तत्
  च; and give the अन्वयः of one verse you read in v3.c06.l04; v4.c01.l01's Station 0 runs exactly
  this.
Keys 0.D (S0-bh, S0-bg). **Review prompts reaching the other review_of lessons** (§3 must reach
every one): (v3.c04.l01) "Split इत्यवदत्, नास्ति, सदैव and त आगच्छन्ति and name each join" — keys:
इति अवदत् यण् · न अस्ति सवर्णदीर्घः · सदा एव वृद्धिः · ते आगच्छन्ति अयादि; (v1.c04.l04) "Say the
varṇamālā from अ to ह"; (v1.c03.l01) "Say the five rows of the stops, row by row, and name each
row's place" — keys from those lessons (कण्ठ्य, तालव्य, मूर्धन्य, दन्त्य, ओष्ठ्य).

**§4 Historical Context — the callouts (wording fixed).**
1. **[HISTORY · इतिहासः]** row 0.5's learner wording.
2. **[TRADITION · परम्परा]** row 0.7's legend wording (labelled "Legend"; never assessed).
3. **[TRADITION · परम्परा]** row 0.9's count wording (the Kāśikā's 41; the 1.x "~42" quoted with
   its page).
4. **The 1.x errors, corrected in the open** (plain text, not a callout, as Volume 3 did): row
   0.13 (a)–(c), each quoted with its page: चय् "voiceless aspirated" → unaspirated; झश् and जश्
   not the same; the memory aid without sūtra 12; इको यणचि is 6.1.77, not 1.1.45 (1.1.45 is
   इग्यणः सम्प्रसारणम्, a different rule).

**§5 Scientific Explanation (FACT).** The grid behind the order (row 0.12, Whitney §§32–37): five
places × five manners for the stops; the fourteen sūtras regroup the grid by manner (all voiced
aspirates in 8–9, the voiced unaspirated in 10, the voiceless in 11–12) because the grammar's rules
speak of manner groups (voicing in 8.2.39: "a झल् becomes a जश्"). One line of modern phonetics:
voicing = vocal folds vibrating; aspiration = a puff of breath after the release (STYLE_GUIDE §2:
voiced aspirates are breathy-voiced). Short अ /ɐ/ "dimmed" (row 0.24, Whitney §21) — one line.

**§6 Sanskrit Explanation (joined, pause beneath; only owned words, headwords, labels).** Use model
sentences 1, 2, 3, 6 and: अच् हल् च द्वौ प्रत्याहारौ। (*ac hal ca dvau pratyāhārau.*) — pause: अच्
हल् च द्वौ प्रत्याहारौ। — "अच् and हल् are two pratyāhāras." — अच् और हल् दो प्रत्याहार हैं।
(Joined line: अच् + हल् — "अज्झल्" would be the full join; **keep the names unjoined as quoted
names**, row 0.2; च द्वौ ✓ nom. dual m.)

**§7 Hindi Explanation.** Written natively; the Hindi parallel row 0.25 (a): the Hindi वर्णमाला
order and the sūtras' order. Hindi terms: इत् (चिह्न-वर्ण), प्रत्याहार, सूत्र, स्वर, व्यञ्जन,
वर्ग, घोष/अघोष, अल्पप्राण/महाप्राण (the Hindi school terms for unaspirated/aspirated — GLOSSARY
check; if absent, the drafter glosses them once).

**§8 English Explanation (the recipe, plan principle 1).** (1) the owned form इत्यवदत् and the
sūtra 6.1.77 that "states" it; (2) the question: what are इक्, यण्, अच्?; (3) the tools: the
fourteen sūtras, the marker (1.3.3, 1.3.9), the pratyāhāra (1.1.71); (4) the derivation, with the
teacher; (5) the learner runs it on इत्याह, अप्यस्ति, स्वागतम्; (6) production: §18 Ex 6, §16.
Then the 1.x corrections (§4 item 4) and the payoff (6.1.77 reads "ik before ac: yaṇ").

**§9–§11 (the sounds inside the rules).** Recitation (table 0.A, the recited line; TRADITION:
"Traditional recitation sounds each consonant with its helping अ and ends each line on its marker
— the Kāśikā says the अ is 'for pronunciation'"); the markers sounded but not counted; IPA of every
sound and marker (table 0.A); the voiced/voiceless and aspirated/unaspirated contrasts felt at the
throat (hand on the throat for ज vs च; a paper strip before the lips for प vs फ); the two हs; the
anusvāra of स्वराणां प्रत्याहारः [m] before प. The five syllables of इको यणचि counted aloud.

**§12 Common mistakes (six rows).**

| # | Mistake | Fix |
|---|---|---|
| 1 | Counting the marker among the sounds: अच् "includes च्" | the marker closes the stretch; it is never one of the sounds named (1.1.71 names "the sounds between, and itself") |
| 2 | चय् read as "voiceless aspirated" (the 1.x gloss) | चय् = च ट त क प: the first member of each row — voiceless, unaspirated |
| 3 | झश् taken for जश् | झश् starts at झ (sūtra 8): ten voiced stops; जश् starts at ज (sūtra 10): five |
| 4 | हल् started from the ह of sūtra 14 ("हल् = ह") | a pratyāhāra starts at the first sound named; हल् is formed with the ह of हयवरट्, so it covers every consonant |
| 5 | Reciting the sūtras as a chant with no grid: unable to say where क or श stands | write each line into the Volume 1 grid before reciting; say the row and the manner of each consonant line |
| 6 | Hindi-speaker schwa deletion in the recitation: *hayavarṭ* for *ha ya va raṭ* (or dropping the helping अ altogether) | every consonant of sūtras 5–14 is sounded with its अ; only the marker is bare |

**§13 Examples.** The model sentences; the derivation and the three learner runs; the 1.x lines
against the corrections, side by side.

**§15 Grammar.** T9 with the two facts; the rebuilt memory aid; the pratyāhāra table and the
drill row; the three sūtras by tier (Q, B, B) and the re-read of 6.1.77; the derivation table; the
tier key (row 0.1, said once); the printing convention for quoted sounds (row 0.2, plain text);
**the toolbox card** (plan principle 8) — "Toolbox after l01 (4): 1.1.71 (names a stretch) · 1.3.3
(final consonant of a teaching = marker) · 1.3.9 (the marker drops) · 1.1.50 (the most similar
substitute; preview) — forms derived: इत्यवदत्, इत्याह, अप्यस्ति, स्वागतम्". Paradigm ledger line:
"✓ the fourteen sūtras and the day's pratyāhāras; ○ 1.1.50 (read in l03); ○ लोपः as a word
(c02.l02); ○ the markers on affixes (सुँ c02.l01; शप् c03.l02)".

**Previewed (labelled):** 1.1.50 (c01.l03); how many pratyāhāras (row 0.9); लोपः as a word
(c02.l02); the markers on affixes (सुँ c02.l01; शप् c03.l02); *sup* and *tiṅ* as pratyāhāras
(c02.l01, c03.l01). **Deferred:** the two-ण् question and savarṇa (c01.l02); the case code
(c01.l03).

**§16 Conversation (12 turns; a teacher and a student; joined, pause beneath, IAST, gloss).**
1. छात्रः — गुरो, सूत्राणामादिः कः? (*guro, sūtrāṇām ādiḥ kaḥ?*) — pause: गुरो, सूत्राणाम् आदिः
   कः? — "Teacher, which is the first of the sūtras?"
2. गुरुः — अइउण्। तस्यान्त्यो वर्णो णकारः। (*aiuṇ. tasyāntyo varṇo ṇakāraḥ.*) — pause: अइउण्।
   तस्य अन्त्यः वर्णः णकारः। — "अइउण्. Its last sound is ṇ."
3. छात्रः — णकारोऽपि वर्णः? (*ṇakāro 'pi varṇaḥ?*) — pause: णकारः अपि वर्णः? — "Is ṇ also one
   of the sounds [of the list]?"
4. गुरुः — न। स इत्। इतो लोपः। (*na. sa it. ito lopaḥ.*) — pause: न। सः इत्। इतः लोपः। — "No.
   It is a marker. A marker disappears."
5. छात्रः — अजिति कति वर्णाः? (*aj iti kati varṇāḥ?*) — pause: अच् इति कति वर्णाः? — "How many
   sounds does अच् name?"
6. गुरुः — नव स्वराः। अ इ उ ऋ ऌ ए ओ ऐ औ। (*nava svarāḥ. a i u ṛ ḷ e o ai au.*) — pause: the
   same — "Nine vowels: a i u ṛ ḷ e o ai au."
7. छात्रः — हलिति प्रत्याहारे क आदिः? (*hal iti pratyāhāre ka ādiḥ?*) — pause: हल् इति
   प्रत्याहारे कः आदिः? — "In the pratyāhāra हल्, which is the first sound?"
8. गुरुः — हयवरडिति सूत्रस्य हकारः। हलिति सूत्रेऽपि हकारोऽस्ति। (*hayavaraḍ iti sūtrasya
   hakāraḥ. hal iti sūtre 'pi hakāro 'sti.*) — pause: हयवरट् इति सूत्रस्य हकारः। हल् इति सूत्रे
   अपि हकारः अस्ति। — "The ह of the sūtra हयवरट्. In the sūtra हल् there is a ह too."
9. छात्रः — इको यणचीत्यत्र कत्यक्षराणि? (*iko yaṇ acīty atra katy akṣarāṇi?*) — pause: इको यणचि
   इति अत्र कति अक्षराणि? — "How many syllables are there in इको यणचि?"
10. गुरुः — पञ्चाक्षराणि। इ, को, य, ण, चि। (*pañcākṣarāṇi. i, ko, ya, ṇa, ci.*) — pause: पञ्च
    अक्षराणि। इ, को, य, ण, चि। — "Five syllables: i, ko, ya, ṇa, ci."
11. छात्रः — इकोऽर्थः कः? (*iko 'rthaḥ kaḥ?*) — pause: इकः अर्थः कः? — "What does इक् mean?"
12. गुरुः — इ उ ऋ ऌ इति चत्वारो वर्णाः। (*i u ṛ ḷ iti catvāro varṇāḥ.*) — pause: इ उ ऋ ऌ इति
    चत्वारः वर्णाः। — "The four sounds i u ṛ ḷ."
Seams: savarṇa-dīrgha (तस्यान्त्यः, यणचीति, पञ्चाक्षराणि), yaṇ (इत्यत्र, कत्यक्षराणि), -अः → ओ
(अन्त्यो वर्णः, वर्णो णकारः, इतो लोपः, चत्वारो वर्णाः), -अः + अ → ओऽ (णकारोऽपि, हकारोऽस्ति,
इकोऽर्थः), -अः + vowel → अ (क आदिः), सः + vowel (स इत्), ए + अ → एऽ (सूत्रेऽपि), stop voiced
(अजिति, हयवरडिति), consonant-final written together (हलिति). In turn 9 the quoted sūtra is
printed as the data file has it and joined to इति (यणचि + इति → यणचीति), as every quoted form is
joined to the इति after it — l01 §15 (corrected at review: Volume 3 joins no quoted sūtra to
इति). The pause line keeps the quoted sūtra as printed. Vocabulary: all owned
(छात्रः, गुरुः/गुरो, कः, सूत्रम्, वर्णः, अपि, न, सः, कति, नव, स्वरः, अत्र, पञ्च, अर्थः,
चत्वारः, अस्ति) or today's headwords, labels (णकारः, हकारः, इत्, the pratyāhāras), and the
labelled preview लोपः.

**§17 Story — the grammarians' line, 1 (plan §1.5).** Three callouts, worded once:
1. **[HISTORY · इतिहासः]** row 0.6's wording (Pāṇini c. 4th c. BCE on the usual estimate; the
   teachers named in his rules: Āpiśali, Śākaṭāyana, Śākalya — the rules: Teacher Notes).
   [REF:cardona1997]
2. **[TRADITION · परम्परा]** "The Laghusiddhāntakaumudī, the beginner's grammar of the tradition
   (17th c. [REF:laghukaumudi]), opens with three of today's tools: its first rule is 1.3.3
   हलन्त्यम्, its third 1.3.9 तस्य लोपः, its fourth 1.1.71 आदिरन्त्येन सहेता. Its second, the
   definition of the word लोपः, is Chapter 2's. [REF:laghukaumudi on 1.3.3];
   [REF:laghukaumudi on 1.1.71]" (`varlghku.htm` lines 114–124; review c01:E#12, P#14: "three of
   today's tools", not "the same tools").
3. **[TRADITION · परम्परा]** the legend is told in §4, not here (one telling per lesson).

**§18 Exercises (keys; every item placed: class or homework).**
- **Ex 1 (obj 1; production, written; class 6 min)** — Write the fourteen sūtras into the blank
  grid sheet in order, then circle every marker. 14 items (one per sūtra). Key: table 0.A.
- **Ex 2 (obj 1; homework 2 min)** — Supply the marker: (1) ऋऌ_ (2) हयवर_ (3) ञमङणन_ (4)
  खफछठथचटत_ (5) शषस_ (6) झभ_ → क्, ट्, म्, व्, र्, ञ्.
- **Ex 3 (obj 2; (1)–(5) class 3 min; (6)–(10) homework 3 min)** — Expand from the sūtras: (1) अच् (2) हल् (3) इक् (4) यण् (5) एच्
  (6) एङ् (7) अक् (8) झल् (9) जश् (10) चय्. Key: table 0.B expansions.
- **Ex 4 (obj 2; the traps; homework 5 min)** — (1) Expand झश्. (2) Which of झश् and जश् contains
  भ? (3) Is चय् aspirated? (4) In which two sūtras does ह stand? (5) Which of ल, ह, न is in यण्?
  (6) Is ऐ in एङ्? Keys: (1) झ भ घ ढ ध ज ब ग ड द (2) झश् (3) no — च ट त क प, unaspirated (4)
  हयवरट् and हल् (5) ल (6) no — एङ् = ए ओ; ऐ is in एच्.
- **Ex 5 (obj 3; class 5 min; "Derive, according to Pāṇini, …", with the teacher)** — (1)–(3)
  complete the tables for इति + आह → इत्याह, अपि + अस्ति → अप्यस्ति, सु + आगतम् → स्वागतम्; (4)–(6)
  for नद्यस्ति, बह्वन्नम्, उपर्यागच्छति (owned, v3.c04.l01) say which sound replaced which and why
  it is that यण्. Keys: (1)–(3) the derivation's steps, with य्, य्, व्; (4) ई → य् (palatal) (5)
  उ → व् (lips) (6) इ → य् (palatal). (नदी's ई: an इक् "short or long" — the long one is covered
  by l02's rule; for today say "ई is the long इ: the same place" — accepted.)
- **Ex 6 (obj 4; production, written then said; homework 8 min)** — Write in Sanskrit, joined,
  with the pause form beneath, then say each aloud: (1) "हल् is the abbreviation for the
  consonants." (2) "इक् means four sounds." (3) "ṇ is a marker." (corrected at review: लोपः is a labelled preview and is not asked for in production) (4) "अइउण्. Its last sound is ṇ."
  [two sentences, as §16 turn 2 says it; corrected at review] (5) "अच् is the abbreviation for the vowels." (6) "How many syllables are there in
  इको यणचि? Five." Keys: (1) हलिति व्यञ्जनानां प्रत्याहारः। (2) इगिति चत्वारो वर्णाः। [pause: इक्
  इति चत्वारः वर्णाः।] (3) णकार इत्। [pause: णकारः इत्।] (4) अइउण्। तस्यान्त्यो वर्णो णकारः। [pause: अइउण्। तस्य
  अन्त्यः वर्णः णकारः।] [no ण्-final name before इति: 8.3.32 would double it, untaught] (5) अजिति स्वराणां प्रत्याहारः। (6) इको यणचीत्यत्र कत्यक्षराणि?
  पञ्चाक्षराणि। Accept any correct Sanskrit with correct joins (e.g. (4) अइउणः अन्त्यो वर्णो
  णकारः is **not** accepted: अइउण् here names a sūtra, and a sūtra is cited, not declined — a
  pratyāhāra name is declined as a label: इकः, §16; अइउणिति is not written either: 8.3.32 would
  double the ण् before इति).
- **Ex 7 (obj 1; spoken; homework 3 min, recorded)** — Recite the fourteen at a steady pace,
  helping अ sounded, markers bare; listen back against `v4c01l01-fourteen-recited.mp3`.

**§19 Quiz (10; homework; key in `<details>`; register per item).**
1. Which sound closes एओङ्? (a) ए (b) ओ (c) ङ् (d) च् — c. FACT (the text of the sūtras)
2. According to Pāṇini (1.1.71), a sound followed by a marker names: (a) only that sound (b) that
   sound and the marker (c) that sound and every sound after it up to the marker (d) every sound
   of the fourteen sūtras — c. TRADITION
3. यण् names: (a) य व र (b) य व र ल (c) य व र ल ञ म (d) all consonants — b. FACT about the
   sūtras (TRADITION object)
4. चय् names च ट त क प. These are: (a) voiceless aspirated (b) voiceless unaspirated (c) voiced
   unaspirated (d) voiced aspirated — b. FACT (Whitney §§34–35, 37)
5. Which pratyāhāra contains भ? (a) जश् (b) चय् (c) झश् (d) यण् — c. FACT
6. ह stands in: (a) sūtra 5 only (b) sūtra 14 only (c) sūtras 5 and 14 (d) sūtras 13 and 14 — c.
   FACT
7. इको यणचि is numbered: (a) 1.1.45 (b) 6.1.77 (c) 8.2.39 (d) 1.1.71 — b. TRADITION (number) —
   the 1.x error (a) as distractor
8. According to Pāṇini, in इति + अवदत् the इ is replaced by य् and not व् because: (a) य् is the
   यण् most like इ (b) व् is not a यण् sound (c) य comes first in यण् (d) अ is a palatal vowel — a.
   TRADITION (1.1.50)
9. According to the Kāśikā, the अ in हयवरट् is: (a) a marker (b) one of the sounds listed (c)
   there for pronunciation (d) a vowel of अच् — c. TRADITION
10. Which pratyāhāra contains ऐ? (a) एङ् (b) एच् (c) इक् (d) अक् — b. FACT
(No item on the legend. Distractors from §12 rows 1–4 and the 1.x errors.)

**§20 Revision and bookings (verbatim).**
- +1 day: the fourteen aloud — the fourteen sūtras recited from अइउण् to हल्, then अच्, हल्, इक्
  and यण् each expanded aloud from the sūtras, sound by sound; v4.c01.l02's Station 0 runs exactly
  this.
- +1 week: the pratyāhāra traps — write out the sounds of चय्, झश् and जश्, say which of them are
  aspirated, and name the two sūtras in which ह stands; v4.c01.l03's Station 0 runs exactly this.

**Class timing (45).** 0–6 Station 0 (§3: S0-bh, S0-bg) · 6–8 review prompts (§3) · 8–10 Hook ·
10–17 the fourteen on the grid, the two facts, recitation (§8 Steps 1–3, the list; §9) · 17–22 the
marker and the name: 1.3.3, 1.3.9, 1.1.71, अच् इक् यण् opened, 6.1.77 read (§8 Step 3; §15) · 22–28
Ex 1 · 28–31 Ex 3 (1)–(5) · 31–40 the derivation with the teacher (4), then Ex 5 (5) · 40–45 the
1.x corrections (§4 item 4) and the payoff. Homework: Ex 2, Ex 3 (6)–(10), Ex 4, Ex 6, Ex 7, §16
and the quiz. (§16 is not read in class: editor's decision 9; Ex 2 moved to homework at Pass B so
that the marker and the pratyāhāra have class time, before Ex 1 asks for the markers circled.)

**§21 Homework (45 = front matter).** (0) Ex 2 (2) and Ex 3 (6)–(10) (3) · (1) Ex 4 (5) · (2) Ex 6, written and said (8) · (3) Ex 7,
recorded (3) · (4) the §19 quiz (8) and its key (3) · (5) §16 aloud in both roles, joined (5) ·
(6) re-copy T9 from memory once more, check against 0.A (5) · (7) real-world task (3): show a
Hindi speaker at home the fourteen lines and ask them to find अ इ उ and the four nasals they
know; tell them in one Hindi line what a marker is.

**Teacher Notes (must include).** The tier key; the Teacher-Notes sūtras listed above with their
numbers; the commentary lines K1–K4, K15–K18, L1–L3 with IAST and translation (table 0.E) and the
e-text corrections they carry (sūtra 11 *dha ḍha* → *cha ṭha* and *dhakareṇa* → *chakāreṇa*;
*ekenauran rapraḥ* → *ekena uraṇ raparaḥ*; *updiśya* → *upadiśya*; *madyapatitānāṃ* →
*madhyapatitānāṃ*; *vartte* → *vartate*; *ṅakaraḥ* → *ṅakāraḥ*; LSK *sahati* → *sahita*); the Kāśikā's table of 41
(table 0.B) for the teacher's own reference; the reason the course does not repeat the 1.x "the
paribhāṣā आदिरन्त्येन सहेता tells you to read with the LAST occurrence" (p. 96) — it is wrong (the
Kāśikā's rule: every अण् but one takes the first ण्), and l02 teaches the rule; the saṃvṛta note
(row 0.24); the ह-twice gist (table 0.E note); the halanta cell note; that Volume 1's legend text
(v1.c01.l02) is not repeated here.

**Payoff (plan).** 6.1.77, quoted in Volume 3 as five syllables the learner could not read, now
reads "ik before ac: yaṇ"; the 1.x book's mis-number of it (1.1.45) is shown and corrected.
**Main risk (plan).** The sūtras learned as a chant with no grid — fixed by Ex 1 (grid first) and
the IR-018 traps (Ex 4).

---

## 2. L2 — सवर्णम्: One Letter for Its Whole Family (grammar)

**Front matter.** id `v4.c01.l02` · file `lesson-02-one-letter-for-its-family.md` · title sa
सवर्णम् · sa_iast *savarṇam* · en "One Letter for Its Whole Family" (the block heading; the
plan's glance row "for Its Family" is the review's E#15 — the block title stands) · hi "एक वर्ण,
पूरा परिवार" · lesson_type grammar · cefr B1 · duration 45 · self_study_minutes **40** ·
prerequisites [v4.c01.l01] · review_of [v4.c01.l01, v3.c06.l05, v3.c04.l01, v3.c03.l01,
v1.c02.l01, v1.c02.l02, v1.c02.l03] (the plan's list, with v3.c06.l05 for S0-bi and the plan's
"v1.c02.l01–l03" written out) · vocabulary_count **4** · tags [grammar, panini, savarna, tapara,
pratyahara, vowel-length, derivation, present-tense, spaced-review] · media (planned): image
`v4c01l02-sound-families.svg` (the LSK's five places as a mouth diagram, each place with its
family); diagram `v4c01l02-two-n-markers.svg` (the two ण्, with अण् ×2 and इण् drawn); audio
`v4c01l02-length-pairs.mp3`, `v4c01l02-conversation.mp3`; worksheet `v4c01l02-family-or-length.pdf`;
quizzes `v4c01l02-quiz.md`, `v4c01l02-quiz-key.md`.

**Objectives.**
1. en "Say which sounds a letter written in a rule stands for — a short vowel for its whole family,
   a letter marked with उ (चु, तु) for its row, a vowel followed by त् for its own length only —
   and give the reason according to Pāṇini." · hi "बताएँ कि सूत्र में लिखा वर्ण किन वर्णों के लिए
   आता है — ह्रस्व स्वर अपने पूरे सवर्ण-परिवार के लिए, उ-चिह्न वाला वर्ण (चु, तु) अपने पूरे वर्ग के
   लिए, त् के साथ लिखा स्वर केवल अपनी ही मात्रा के लिए — और पाणिनि के अनुसार कारण दें।"
2. en "Expand अण् as every rule but 1.1.69 reads it and as 1.1.69 reads it, and इण् and यञ्." · hi "अण् को
   1.1.69 के सिवा हर सूत्र के अनुसार और 1.1.69 के अनुसार खोलें, और इण् व यञ् को भी।"
3. en "Derive, according to Pāṇini, विद्या + आलयः → विद्यालयः, and say why गच्छामि has a long आ
   and गच्छथ does not; predict the long vowel in the present of owned verbs." · hi "पाणिनि के
   अनुसार विद्या + आलयः → विद्यालयः की व्युत्पत्ति करें, और बताएँ कि गच्छामि में दीर्घ आ क्यों है और
   गच्छथ में क्यों नहीं; परिचित क्रियाओं के वर्तमान रूपों में दीर्घ स्वर का अनुमान लगाएँ।"
4. en "Say and write six sentences about vowel length and savarṇa with the day's words." · hi
   "आज के शब्दों से स्वर की मात्रा और सवर्ण के बारे में छह वाक्य बोलें और लिखें।"

**The opening (§1).** Two owned lines, side by side: v3.c04.l01's नास्ति (two short अ → one long
आ) and विद्यालयः (आ + आ → आ). 6.1.101 अकः सवर्णे दीर्घः has an अक् in it — अ इ उ ऋ ऌ, all short. So
how can it join two *long* आ? And Volume 2's "stretch" (गच्छामि, but गच्छसि; Volume 3's 7.3.101
अतो दीर्घो यञि): why not गच्छाथ? One letter in a rule can stand for a whole family — or for itself
alone.

**The one grammar point (plan, with the review's fixes).** In a rule, a short vowel (and a letter
marked with उ) stands for its whole family, its savarṇas: sounds made at the same place with the
same effort (1.1.9, 1.1.69). The limit is in 1.1.69's last word, अप्रत्ययः: a letter that the rule
itself puts in does not cover its family — so the यण् that 6.1.77 puts in is the plain य व र ल
only, never their nasalised forms (Teacher Notes: row 0.16). A letter followed by त् (tapara)
stands for its own length only (1.1.70).

**Forms taught (the plan's table; row चु, तु per review c01:P#8).**

| Written in a rule | Covers | Why | Example rule |
|---|---|---|---|
| अ (in अक्, अण्) | अ आ (and the three-mora आ३) | 1.1.69 | 6.1.101 अकः सवर्णे दीर्घः |
| इ, उ, ऋ | इ ई · उ ऊ · ऋ ॠ (+ ऌ with ऋ, by the tradition's vārttika: Teacher Notes) | 1.1.69 | 6.1.77 इको यणचि |
| अत् (tapara) | short अ only | 1.1.70 | 7.3.101 अतो दीर्घो यञि; 7.1.9 अतो भिस ऐस् (the Kāśikā's own example of tapara: वृक्षैः, but खट्वाभिः — l03 reads 7.1.9); 1.1.2 अदेङ् गुणः (c02.l02) |
| आत् (tapara) | आ only | 1.1.70 | 1.1.1 वृद्धिरादैच् (c02.l02) |
| चु, तु (udit) | the whole च-row, the whole त-row | 1.1.69 | 8.4.40 स्तोः श्चुना श्चुः (owned) |

(7.1.9 in the अत् row is printed as a pointer, labelled "(l03)" — not a tool here; plan §4.0.3
lists 7.1.9 first in l03.) The three-mora आ३ (pluta) is named only; it is never drilled (1.2.27,
which names ह्रस्व, दीर्घ, प्लुत: Teacher Notes). **The owned tapara letters of 1.1.11**
(ईत् ऊत् एत् "a dual ending in ई, ऊ or ए") are added to Ex 1 as two items: ईत् covers ई only.

**The two-ण् question (TRADITION, attributed to the Kāśikā; row 0.16).** अण् is formed with the
first ण् (अ इ उ) in every rule but one: in 1.1.69 it runs to the second (अ … ल), so that 1.1.69
reaches ऋ ऌ ए ओ ऐ औ and the semivowels too. इण् is always formed with the second (8.3.57 इण्कोः: इ …
ल — which is why ए and ओ trigger ṣatva in c02.l03; 8.3.57 is a pointer). The Kāśikā on अइउण्
names 1.1.51 उरण् रपरः as its example of the first (a pointer). The learner is told the rule and
the one exception; the lines themselves are Teacher Notes until Chapter 6. **The pratyāhāras of
the day:** अण् (×2), इण्, यञ् = य व र ल ञ म ङ ण न झ भ (table 0.B).

**Sūtras by tier (tools added: 3).**
- **Q — 1.1.69 अणुदित् सवर्णस्य चाप्रत्ययः** (*aṇudit savarṇasya cāpratyayaḥ*). Padaccheda with
  word glosses: अणुदित् "an aṇ sound, or one marked with उ" · सवर्णस्य "[names] its savarṇa" · च
  "too" · अप्रत्ययः "when not something [the rule] introduces". English line: "An aṇ sound or a
  sound marked with उ stands for its savarṇas as well as itself — unless it is something the rule
  introduces." [REF:ashtadhyayi 1.1.69]; [REF:kashika 1.1.69]. (Note: here अण् is अ … ल.)
- **D — 1.1.9 तुल्यास्यप्रयत्नं सवर्णम्** (*tulyāsyaprayatnaṃ savarṇam*). English line: "Sounds
  made at the same place in the mouth with the same effort are savarṇa." [REF:ashtadhyayi 1.1.9];
  [REF:kashika 1.1.9].
- **D — 1.1.70 तपरस्तत्कालस्य** (*taparas tatkālasya*). English line: "A vowel followed by त्
  stands only for [the savarṇas] of its own length." [REF:ashtadhyayi 1.1.70];
  [REF:kashika 1.1.70].
- **Re-read (owned):** 6.1.101 अकः सवर्णे दीर्घः; 7.3.101 अतो दीर्घो यञि. **Pointers (numbers
  printed, not tools; plan §4.0.3 Totals):** 8.4.40, 1.1.11, 1.1.1, 1.1.2, 1.1.51, 8.3.57.
- **Teacher Notes:** 1.1.10 नाज्झलौ (a vowel and a consonant are never savarṇa: इ and श share the
  palate); 1.2.27 ऊकालोऽज्झ्रस्वदीर्घप्लुतः (the three lengths; the LSK's VLk 5); the LSK e-text
  labels (VLk 9 "1,2.8" = 1.1.8; VLk 10 "1,1.8" = 1.1.9; VLk 12 "1,1.109" = 1.4.109: e-text tags,
  not the LSK's numbering); 3.2.168, 4.3.9 (the Kāśikā's अप्रत्ययः examples); 8.4.41 ष्टुना ष्टुः
  (where टु stands; not in 8.4.40).

**The derivations.**

(a) **Derive, according to Pāṇini, विद्या + आलयः → विद्यालयः** (owned since V1; seam taught in
v3.c04.l01)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | विद्या + आलयः | — | the compound's two members meet |
| 1 | विद्या + आलयः | 1.1.69 अणुदित् सवर्णस्य चाप्रत्ययः (Q) | the left आ counts as an अक् sound: the अ of अक् stands for its savarṇa आ |
| 2 | विद्या + आलयः | 1.1.9 तुल्यास्यप्रयत्नं सवर्णम् (D) | आ and आ are savarṇa: same place, same effort |
| 3 | विद्य् + आ + लयः | 6.1.101 अकः सवर्णे दीर्घः (owned) | after an अक्, before a savarṇa vowel: one long vowel for both |
| 4 | **विद्यालयः** | — | joined |

(Which long vowel — आ, the long vowel of the same place — is 1.1.50's choice, the Kāśikā's own
first example of 1.1.50 (*daṇḍāgram*, row 0.18); it is not printed in l02, whose tier line does not
list 1.1.50; l03 reads it and the exam key accepts it.)

(b) **Derive, according to Pāṇini, गच्छ + मि → गच्छामि, and गच्छ + थ → गच्छथ** (owned since
V2/V3) — two tables, one per form (§7, deviation 2).

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | गच्छ + मि | — | stem + the 1st-person ending |
| 1 | गच्छ + मि | 1.1.70 तपरस्तत्कालस्य (D) | the stem ends in short अ: अत् (short अ only) fits |
| 2 | गच्छ + मि | 1.1.71 आदिरन्त्येन सहेता (Q, l01) | म is in यञ् (य व र ल ञ म ङ ण न झ भ) |
| 3 | गच्छा + मि | 7.3.101 अतो दीर्घो यञि (owned) | short अ → long before a yañ-initial ending |
| 4 | **गच्छामि** | — | joined (and गच्छामः; ◐ गच्छावः) |

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | गच्छ + थ | — | stem + the 2nd-person plural ending |
| 1 | गच्छ + थ | 1.1.70 (D) | short अ: अत् fits |
| 2 | गच्छ + थ | 1.1.71 (Q, l01) | थ is not in यञ् |
| 3 | गच्छ + थ | 7.3.101 (owned) | does not apply: no change |
| 4 | **गच्छथ** | — | joined (and गच्छति, गच्छतः, गच्छसि) |

FACT beside it: Whitney §733 (item 9): "the stem-final a becomes ā before m and v of 1st personal
endings" [REF:whitney1889 §733]; the Kāśikā's own pair under 7.3.101: *pacāmi, pacāvaḥ, pacāmaḥ* —
*yañi iti kim? pacataḥ, pacathaḥ* (Teacher Notes; Volume 3 already quoted it, v3.c03.l01). **The
learner predicts the seven ✓ present cells of पठति from the rule before checking them**: पठति
पठतः पठन्ति · पठसि पठथ · पठामि पठामः (long only in पठामि, पठामः; पठन्ति has its own rule, not
taught: "the अ of the stem and the अ of -अन्ति become one अ — a rule of c03"; the 1st-person dual
पठावः is ◐, printed, not produced).

**Model sentences.** The plan's five (review fixes applied).
1. अ आ च सवर्णौ। (*a ā ca savarṇau.*) — pause: the same — "अ and आ are savarṇa (of one family)."
   — अ और आ सवर्ण हैं। Note: "The quoted sounds अ आ stay unjoined: joined, they would merge into
   one आ, the very join this lesson explains." (सवर्णः is today's headword, an adjective used of
   two sounds; the dual is owned.)
2. इकारो दीर्घो न, ह्रस्वः। (*ikāro dīrgho na, hrasvaḥ.*) — pause: इकारः दीर्घः न, ह्रस्वः।
   (*ikāraḥ dīrghaḥ na, hrasvaḥ.*) — "इ is not long but short." — इ दीर्घ नहीं, ह्रस्व है।
3. विद्या आलय इति द्वे पदे, एको दीर्घः। (*vidyā ālaya iti dve pade, eko dīrghaḥ.*) — pause: विद्या
   आलयः इति द्वे पदे, एकः दीर्घः। (*vidyā ālayaḥ iti dve pade, ekaḥ dīrghaḥ.*) — "In 'vidyā
   ālayaḥ': two words, one long vowel for both." — 'विद्या आलयः' में दो पद हैं, (पर) दीर्घ स्वर एक
   है। Note: "द्वे पदे is the owned dual nom./acc.; the quoted words विद्या आलयः stay unjoined, as
   a quoted phrase; पदे stands before a comma, and a dual in -ए would not join anyway (1.1.11)."
4. गच्छामीत्यत्र मकारो यञ्। (*gacchāmīty atra makāro yañ.*) — pause: गच्छामि इति अत्र मकारः यञ्।
   — "In gacchāmi, the m is a yañ sound." — गच्छामि में मकार यञ् है।
5. गच्छथेत्यत्र दीर्घो नास्ति। (*gacchathety atra dīrgho nāsti.*) — pause: गच्छथ इति अत्र दीर्घः
   न अस्ति। — "In gacchatha there is no long vowel." — गच्छथ में दीर्घ स्वर नहीं है।

**Headwords (4; 513 → 517).**

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status | dictionary |
|---|---|---|---|---|---|---|---|
| दीर्घः | dīrghaḥ | /d̪iːɾgʱɐh/ | long | दीर्घ, लम्बा | adj. -र्घा -र्घम् | ledger-new (-) | MW s.v. dīrgha "long (in space and time)"; Apte s.v. दीर्घ (Pass C: the sense line) |
| ह्रस्वः | hrasvaḥ | /ɦɾɐsʋɐh/ | short | ह्रस्व, छोटा | adj. -स्वा -स्वम् | ledger-new (-) | MW s.v. hrasva "short, small …"; Apte s.v. ह्रस्व |
| प्रयत्नः | prayatnaḥ | /pɾɐjɐt̪n̪ɐh/ | effort; (in grammar) the effort of articulation | प्रयत्न | m. a-stem | ledger-new (-) | Apte s.v. प्रयत्नः 5 "(In gram.) Effort in uttering, effort of the mouth in the production of articulate [sounds]"; MW s.v. prayatna "(in gram.) effort in uttering, mode of articulation" |
| सवर्णः | savarṇaḥ | /sɐʋɐɾɳɐh/ | of the same class of sounds, homogeneous | सवर्ण | adj. -र्णा -र्णम् | ledger-new (-) | MW s.v. savarṇa "belonging to the same class of sounds, homogeneous with"; Apte s.v. सवर्ण 5 "Belonging to the same class of [sounds]" |

(The plan's "Why now": दीर्घः — 6.1.101 दीर्घः, Panc 4 दीर्घतर° (Teacher Notes; MW cites
*dīrghatara* Pañc. iv, 13/14); ह्रस्वः — 1.2.27; 7.4.59 in c03.l04; प्रयत्नः — 1.1.9; सवर्णः —
1.1.9 सवर्णम्, 1.1.69 सवर्णस्य, the lesson's title.) **§14 line:** "Ledger 513 → 517 (4
ledger-new). Cells drilled: 7 (the ✓ present cells of पठति, predicted from 7.3.101). Tools added:
3 (1.1.69 Q; 1.1.9 D; 1.1.70 D)."

**§3 Station 0 (verbatim) and review prompts.**
- +1 day: the fourteen aloud — the fourteen sūtras recited from अइउण् to हल्, then अच्, हल्, इक्
  and यण् each expanded aloud from the sūtras, sound by sound; v4.c01.l02's Station 0 runs exactly
  this.
- +1 week: one story told in Volume 3 Sanskrit — any Volume 3 story told aloud in the imperfect,
  eight sentences, with one line of speech closed by इति and one relative sentence; v4.c01.l02's
  Station 0 runs exactly this.
Keys 0.D (S0-ca, S0-bi). Review prompts: (v3.c04.l01) "Split नास्ति, विद्यालयः, हिमालयः and name
the join" — सवर्णदीर्घः ×3; (v3.c03.l01) "Say गच्छति in all seven ✓ cells; where is the आ long?";
(v1.c02.l01–l03) "Say the pairs इ ई, उ ऊ, ऋ ॠ with their lengths, short then long" (STYLE_GUIDE §2.3).

**§4 Historical Context.** **[TRADITION · परम्परा]** "According to the Kāśikā, every अण् in
Pāṇini's rules is formed with the first ण् — except in one rule, 1.1.69, where it runs to the
second; every इण् is formed with the second. [REF:kashika] (on लण्)" (row 0.16). One plain line:
"The 1.x book said that Pāṇini 'uses CONTEXT to disambiguate' the two ण् (p. 96); the commentary
gives a rule, not a guess." — **optional** (§7, deviation 7: the plan does not list this 1.x line;
the drafter prints it only if the editor approves; otherwise Teacher Notes).

**§5 Scientific Explanation (FACT + one TRADITION callout).** Place and manner as the basis of
"same family": the LSK's place list (L5, the TRADITION callout with Devanagari, pause form,
translation, table 0.E) and Whitney §20a beside it (FACT: "The Paninean scheme … classes a as
guttural, but apparently only to give that series as well as the rest a vowel"
[REF:whitney1889 §20]). Length as duration (STYLE_GUIDE §2.3).

**§6 Sanskrit Explanation.** Model sentences 1, 2, 4, 5, and: स्थानं तुल्यम्, प्रयत्नोऽपि तुल्यः।
(*sthānaṃ tulyam, prayatno 'pi tulyaḥ.*) — pause: स्थानम् तुल्यम्, प्रयत्नः अपि तुल्यः। — "The place
is the same, and the effort is the same too." — स्थान भी समान है, प्रयत्न भी।

**§7 Hindi Explanation.** Natively written; the Hindi parallel row 0.25 (b) (दीर्घ संधि and सवर्ण;
Pass C condition). Hindi terms: सवर्ण, ह्रस्व, दीर्घ, प्लुत (named only), मात्रा, स्थान, प्रयत्न,
तपर (त्-परक: say once "जिसके बाद त् लिखा हो").

**§8 English Explanation.** The recipe: (1) नास्ति / विद्यालयः and गच्छामि / गच्छथ; (2) the
question: can अ mean आ?; (3) the tools: 1.1.69 (with 1.1.9), 1.1.70; (4) derivations (a), (b);
(5) the learner runs (a) on नास्ति, हिमालयः, तथापि, इतीव, गङ्गापि and (b) on पठति's cells; (6) production.
The two-ण् question last, with its use: c02.l03's इण्.

**§9–§11.** Length pairs (अ/आ, इ/ई, उ/ऊ, ऋ/ॠ) by duration; the "same place" felt: say इ then य
then च then श, feel the palate (savarṇa needs the same effort as well: इ and श are not savarṇa —
Teacher Notes 1.1.10); the yañ test by ear: गच्छामि /gɐt͡ɕt͡ɕʰɑːmi/ vs गच्छथ /gɐt͡ɕt͡ɕʰɐt̪ʰɐ/.

**§12 Common mistakes.**

| # | Mistake | Fix |
|---|---|---|
| 1 | Reading every letter in a rule as covering its long partner: अत् "covers आ" | a vowel followed by त् stands for its own length only (1.1.70): अत् = short अ |
| 2 | Thinking the यण् that 6.1.77 puts in covers nasal य̃ व̃ ल̃ too | a letter the rule introduces covers no family (1.1.69's अप्रत्ययः) |
| 3 | अण् always read with the second ण् | the first ण् (अ इ उ) everywhere but in 1.1.69 |
| 4 | इण् read as इ उ only | इण् always runs to the second ण्: इ … ल |
| 5 | Lengthening before every ending: \*गच्छाथ, \*गच्छासि | only before a yañ sound: म, व (7.3.101) |
| 6 | Taking इ and श (or अ and ह) as savarṇa because they share a place | savarṇa needs the same place **and** the same effort; a vowel and a consonant never are (Teacher Notes) |

**§13 Examples.** Derivations (a), (b); the learner runs; the table of what each letter covers.

**§15 Grammar.** The table; 1.1.69, 1.1.9, 1.1.70 by tier; the two-ण् rule; the derivations; the
toolbox card: "Toolbox after l02 (7): l01's four + 1.1.69 (a short vowel or an udit covers its
family) · 1.1.9 (savarṇa: same place, same effort) · 1.1.70 (tapara: own length only) — forms
derived: विद्यालयः, नास्ति, हिमालयः, गच्छामि, गच्छथ, पठामि …". Paradigm ledger: "✓ the savarṇa and
tapara readings; ✓ the seven present cells predicted by 7.3.101 (owned cells); ◐ the 1st-person
dual गच्छावः (unchanged from Volume 3); ○ 1.1.50 (l03); ○ 1.1.1–2 (c02.l02); ○ 8.3.57 (c02.l03)".

**Previewed:** 1.1.1–2's आत् and अत् (c02.l02); 8.3.57 इण्कोः (c02.l03); 7.1.9's अत् (l03).
**Deferred:** savarṇa between vowels and consonants excluded (1.1.10, Teacher Notes).

**§16 Conversation (12 turns; a teacher and a student, छात्रा).**
1. गुरुः — विद्यालय इत्यत्र कति पदानि? (*vidyālaya ity atra kati padāni?*) — pause: विद्यालयः इति
   अत्र कति पदानि? — "How many words are there in vidyālayaḥ?"
2. छात्रा — द्वे पदे, विद्या आलयश्च। (*dve pade, vidyā ālayaś ca.*) — pause: द्वे पदे, विद्या
   आलयः च। — "Two words, vidyā and ālayaḥ."
3. गुरुः — किमाकारौ सवर्णौ? (*kim ākārau savarṇau?*) — pause: किम् आकारौ सवर्णौ? — "Are the
   two ā savarṇa?"
4. छात्रा — आम्। स्थानं तुल्यम्, प्रयत्नोऽपि तुल्यः। (*ām. sthānaṃ tulyam, prayatno 'pi
   tulyaḥ.*) — pause: आम्। स्थानम् तुल्यम्, प्रयत्नः अपि तुल्यः। — "Yes. The place is the same;
   the effort is the same too."
5. गुरुः — अत एको दीर्घः, विद्यालयः। (*ata eko dīrghaḥ, vidyālayaḥ.*) — pause: अतः एकः दीर्घः,
   विद्यालयः। — "So: one long vowel, vidyālayaḥ."
6. छात्रा — गच्छामीत्यत्र दीर्घः कुतः? (*gacchāmīty atra dīrghaḥ kutaḥ?*) — pause: गच्छामि इति
   अत्र दीर्घः कुतः? — "Where does the long vowel in gacchāmi come from?"
7. गुरुः — मकारो यञ्। अतो दीर्घो यञीति सूत्रम्। (*makāro yañ. ato dīrgho yañīti sūtram.*) —
   pause: मकारः यञ्। अतो दीर्घो यञि इति सूत्रम्। — "म is a yañ sound. The rule is अतो दीर्घो
   यञि."
8. छात्रा — गच्छथेत्यत्र दीर्घो नास्ति। किमर्थम्? (*gacchathety atra dīrgho nāsti. kimartham?*)
   — pause: गच्छथ इति अत्र दीर्घः न अस्ति। किमर्थम्? — "In gacchatha there is no long vowel.
   Why?"
9. गुरुः — थकारो न यञ्। (*thakāro na yañ.*) — pause: थकारः न यञ्। — "थ is not a yañ sound."
10. छात्रा — अदित्यत्र तकारः किमर्थम्? (*ad ity atra takāraḥ kimartham?*) — pause: अत् इति अत्र
    तकारः किमर्थम्? — "In 'at', what is the t for?"
11. गुरुः — अकार एव, नाकारः। (*akāra eva, nākāraḥ.*) — pause: अकारः एव, न आकारः। — "Short a
    only, not ā."
12. छात्रा — गच्छामीत्यत्र दीर्घः, गच्छसीत्यत्र ह्रस्वः। (*gacchāmīty atra dīrghaḥ, gacchasīty
    atra hrasvaḥ.*) — pause: गच्छामि इति अत्र दीर्घः, गच्छसि इति अत्र ह्रस्वः। — "In gacchāmi a
    long vowel, in gacchasi a short one."
Seams as row 0.20 (आलयश्च: visarga + च; किमाकारौ: म् before a vowel; स्थानं तुल्यम्: म् → ं before
त; अत एको: -अः + ए; अदित्यत्र: त् voiced before इ; नाकारः: न + आ). Words: all owned (गुरुः,
छात्रा — the feminine of छात्रः, an ā-stem ✓; कति, पदम्, द्वे, आम्, स्थानम्, तुल्यः, अपि, अतः,
एकः, कुतः, किम्, किमर्थम्, एव, न, अस्ति, सूत्रम्) or headwords and labels. (No mixed-gender dual
agreement is used: "स्थानं प्रयत्नश्च तुल्यौ" would need the neuter dual by 1.2.69 — avoided.)

**§17 Story — the grammarians' line, 2.** **[TRADITION · परम्परा]** "The tradition's own map of
the mouth: the Laghusiddhāntakaumudī, under the definition of savarṇa (1.1.9), lists the places —
the throat, the palate, the roof, the teeth, the lips, and the nose for the nasals — and the sounds
made at each (L5)." (If §5 already prints L5, §17 prints the plain-text bridge: "Pāṇini defines
savarṇa in one rule; the commentators supply the map of places that the rule leaves to its
readers [REF:laghukaumudi on 1.1.9]" — one callout per lesson for L5.)

**§18 Exercises.**
- **Ex 1 (obj 1; class 5 min; the tapara drill, plan main risk)** — Sort into "family" or "this
  length only", and name the rule (1.1.69 or 1.1.70): (1) अ (in अक्) (2) इ (in इक्) (3) उ (in
  इक्) (4) ऋ (5) चु (6) तु (7) अत् (in 7.3.101) (8) आत् (in 1.1.1 वृद्धिरादैच्, c02.l02) (9) ईत् (in 1.1.11) (10) ऊत्
  (in 1.1.11). Keys: 1–6 family (1.1.69); 7–10 own length only (1.1.70).
- **Ex 2 (obj 1; class 4 min)** — Savarṇa or not? Say why. (1) अ आ (2) इ ई (3) इ ए (4) उ ऊ (5) ऋ
  ॠ (6) अ ए (7) त थ (8) इ श. Keys: (1) yes (2) yes (3) no — different place (4) yes (5) yes (6) no
  — ए is not the same place as अ (the LSK: ए uses throat and palate) (7) yes — same place (teeth),
  same inner effort (full contact); this is why तु names the whole row (8) no — a vowel and a
  consonant (Teacher Notes' rule; accept "different effort").
- **Ex 3 (obj 2; class 4 min)** — Expand: (1) अण् as every rule but 1.1.69 reads it (2) अण् in 1.1.69 (3) इण्
  (4) यञ् (5) अक् (6) यण्. Keys: table 0.B.
- **Ex 4 (obj 3; class 6 min; "Derive, according to Pāṇini, …", with the teacher)** — in the
  table form of derivation (a): (1) विद्या + आलयः (2) न + अस्ति (3) हिम + आलयः (4) तथा + अपि (5)
  इति + इव (6) गङ्गा + अपि (all owned, v3.c04.l01). Keys: each: step 1 — the left vowel counts as
  an अक् (1.1.69); step 2 — savarṇa (1.1.9); step 3 — one long vowel (6.1.101); result नास्ति,
  हिमालयः, तथापि, इतीव (इ + इ → ई), गङ्गापि.
- **Ex 5 (obj 3; homework 5 min)** — Join, lengthening the stem's अ only where 7.3.101 allows, and
  mark yañ / not yañ: (1) पठ + मि (2) पठ + मः (3) पठ + सि (4) पठ + थ (5) पठ + ति (6) पठ + तः (7)
  वद + मः (8) लभ + महे. Keys: पठामि (yañ) · पठामः (yañ) · पठसि · पठथ · पठति · पठतः · वदामः
  (yañ) · लभामहे (yañ).
- **Ex 6 (obj 4; production; homework 8 min, written then said)** — In Sanskrit, joined, pause
  beneath: (1) "आ is long." (2) "उ is short." (3) "इ and ई are savarṇa." (4) "In वदामः the m is a
  yañ sound." (5) "The place is the same and the effort is the same too." (6) "In पठथ there is no
  long vowel." Keys: (1) आकारो दीर्घः। (2) उकारो ह्रस्वः। (3) इ ई च सवर्णौ। (4) वदाम इत्यत्र मकारो
  यञ्। [pause: वदामः इति अत्र मकारः यञ्।] (5) स्थानं तुल्यम्, प्रयत्नोऽपि तुल्यः। (6)
  पठथेत्यत्र दीर्घो नास्ति। Accept any correct Sanskrit with correct joins.

**§19 Quiz (10; homework; key in `<details>`).**
1. According to Pāṇini (1.1.69), the अ written in अक् stands for: (a) अ only (b) अ and आ (c) अ आ
   ए (d) every vowel — b. TRADITION
2. अत् in 7.3.101 stands for: (a) अ only (b) अ and आ (c) आ only (d) every a-vowel — a. TRADITION
   (1.1.70)
3. Two sounds are savarṇa, according to Pāṇini (1.1.9), when they share: (a) the place only (b)
   the place and the effort (c) the length (d) the marker — b. TRADITION
4. According to the Kāśikā, in every rule but 1.1.69 अण् names: (a) अ इ उ (b) अ … ल (c) all vowels (d) इ उ — a. TRADITION (the Kāśikā)
5. इण् names: (a) इ उ (b) इ उ ऋ ऌ (c) इ … ल (d) इ … च् — c. TRADITION
6. Why is there no long vowel in गच्छथ? (a) थ is not a yañ sound (b) the stem ends in आ (c) the
   ending is plural (d) 6.1.101 blocks it — a. TRADITION (7.3.101)
7. Which form has the lengthened stem vowel? (a) पठसि (b) पठामः (c) पठतः (d) पठथ — b. FACT
   (Whitney §733)
8. चु in a rule names: (a) च only (b) च छ ज झ ञ (c) च and श (d) every palatal sound — b.
   TRADITION (1.1.69, udit)
9. According to Pāṇini (1.1.69), the य् that 6.1.77 puts in: (a) covers its nasal form too (b)
   covers no family — it is something the rule introduces (c) covers इ (d) covers all semivowels — b.
   TRADITION
10. यञ् contains: (a) म (b) थ (c) स (d) अ — a. FACT about the sūtras
(Distractors from §12; no untaught form.)

**§20 bookings (verbatim).**
- +1 day: the yañ sort — for the eight endings -मि, -मः, -सि, -थ, -ति, -तः, -महे and -ध्वे say
  whether the first sound is in यञ्, then join each to its stem (गच्छ- for the first six, लभ- for
  the last two), lengthening the stem's अ only before a yañ sound; v4.c01.l03's Station 0 runs
  exactly this.
- +1 week: the savarṇa table — write from memory what each of अ, इ, उ, ऋ, अत्, आत् [in वृद्धिरादैच्], चु and तु covers
  when it is written in a rule, and the rule that says so (1.1.69 or 1.1.70); v4.c01.l04's Station
  0 runs exactly this.

**Class timing (45).** 0–6 Station 0 · 6–9 review prompts · 9–11 Hook · 11–19 savarṇa: 1.1.9, the
place map (§5), Ex 2 · 19–26 1.1.69, derivation (a), Ex 4 (1)–(3) · 26–33 1.1.70 (2), Ex 1 (5) ·
33–39 derivation (b), the पठति prediction · 39–45 the two ण् (2) and Ex 3 (4). Homework:
Ex 4 (4)–(6), Ex 5, Ex 6, §16 and the quiz. (§16 is not read in class: editor's decision 9.)

**§21 Homework (40).** Ex 4 (4)–(6) (5) · Ex 5 (5) · Ex 6 written and said (8) · the quiz (8) and
key (3) · §16 aloud, both roles (4) · re-draw the savarṇa table from memory and check (4) ·
real-world task (3): in a Hindi book or sign, find one word with a long आ joined from two vowels
(e.g. विद्यालय, हिमालय) and say which two.

**Teacher Notes.** K2, K3, K5–K7, K14, L5, L6, L10, L11 (table 0.E) with their corrections
(*prayarnaṃ*, *spaṛṣṭata-ādir*, *grahanam*, *tapro*, *guṇa-antara-yuktasya*, *eva-ikaṃ*, *ekenauran rapraḥ*); 1.1.10 with *dadhi
śītam*; the ऌ–ऋ vārttika; 1.2.27; the LSK e-text labels; the pluta named only; why the course does
not print 1.1.50 here; the mixed-gender dual avoided in §16 (1.2.69, a note for the teacher only);
the 1.x p. 96 "CONTEXT" line (deviation 7).

**Payoff (plan).** Volume 2's "stretch" and Volume 3's 7.3.101 meet: the learner says why गच्छथ has
no long आ — the first time a cell is predicted from a rule. **Main risk:** every letter read as
covering its long partner — the tapara drill (Ex 1).

---

## 3. L3 — इको यणचि: How a Rule Speaks (grammar)

**Front matter.** id `v4.c01.l03` · file `lesson-03-how-a-rule-speaks.md` · title sa इको यणचि ·
sa_iast *iko yaṇ aci* · en "How a Rule Speaks" · hi "सूत्र कैसे बोलता है" · lesson_type grammar ·
cefr B1 · duration 45 · self_study_minutes **45** · prerequisites [v4.c01.l02] · review_of
[v4.c01.l02, v4.c01.l01, v3.c04.l01, v3.c04.l02, v3.c01.l05] · vocabulary_count **4** · tags
[grammar, panini, case-code, padaccheda, anuvrtti-preview, derivation, bhavati-thread, spaced-review]
· media (planned): image `v4c01l03-a-rule-speaks.svg` (इको यणचि with an arrow: इकः "in place of",
अचि "before", and a box for यण् "result"); audio `v4c01l03-sutras-read.mp3`,
`v4c01l03-conversation.mp3`; worksheet `v4c01l03-circle-and-arrow.pdf`; quizzes `v4c01l03-quiz.md`,
`v4c01l03-quiz-key.md`.

**Objectives.**
1. en "Name the case of each word of a quoted sūtra and say its job: genitive — in place of;
   locative — before; ablative — after; nominative — the result." · hi "किसी सूत्र के हर पद की
   विभक्ति बताएँ और उसका काम: षष्ठी — के स्थान पर; सप्तमी — से पहले; पञ्चमी — के बाद; प्रथमा —
   परिणाम।"
2. en "Read, according to Pāṇini, the six sūtras of the case-code table: what is replaced, by what,
   and where — and tell the genitive अतः of 7.3.101 from the ablative अतः of 7.1.9." · hi "पाणिनि
   के अनुसार तालिका के छह सूत्र पढ़ें: किसके स्थान पर, क्या, और कहाँ — और 7.3.101 के षष्ठी अतः को
   7.1.9 के पञ्चमी अतः से अलग पहचानें।"
3. en "Derive, according to Pāṇini, in table form, भो + अति → भवति and देव + भिस् → देवैः, and by
   yourself ने + अति → नयति and राम + भिस् → रामैः." · hi "पाणिनि के अनुसार, तालिका में, भो + अति →
   भवति और देव + भिस् → देवैः की व्युत्पत्ति करें, और स्वयं ने + अति → नयति और राम + भिस् → रामैः
   की।"
4. en "Say and write six sentences about a rule's cases with the day's words." · hi "आज के
   शब्दों से सूत्र की विभक्तियों के बारे में छह वाक्य बोलें और लिखें।"

**The opening (§1).** One of the learner's first verbs, भवति (v1.c04.l01; the very first was चलति, v1.c03.l02), was shown in Volume 3 as भो +
अति (v3.c04.l04: "named, taught in Volume 4"). 6.1.78 एचोऽयवायावः says ए ओ ऐ औ become अय् अव् आय्
आव्. But where does it say "before a vowel"? And which of the four does ओ become? Today the rule
answers in its own grammar — in cases.

**The one grammar point (plan, as reviewed).** A sūtra speaks in cases. The **genitive** names
what is replaced: "in place of X" (1.1.49). The **locative** names what follows: the operation
applies before it (1.1.66). The **ablative** names what precedes: the operation applies after it
(1.1.67). The **nominative** names the result. In these words the genitive and the ablative
singular have one form (इकः, एचः, अकः, अतः, भिसः; स्तोः too): the form does not decide the case,
the rule's sense does, and the padaccheda printed under each sūtra names it (row 0.19). In 7.1.9
the result ऐस् is an ending, so it stands in place of the ending: भिसः is the genitive and अतः the
ablative ("after short a"). In 7.3.101 the result दीर्घः is a vowel, so it stands in place of the
short a: अतः is the genitive. When there are as many replaced items as results, they pair off in
order (1.3.10). Where one item could take several results, the most similar one wins (1.1.50). **From
this lesson on, every quoted sūtra is printed with its padaccheda and each word's case** (plan
§1.4.3).

**Forms taught.** Table 0.C (the case-code table) with its two traps and its brackets.

**Sūtras by tier (tools added: 5).**
- **Q — 1.1.49 षष्ठी स्थानेयोगा** (*ṣaṣṭhī sthāneyogā*). Padaccheda: षष्ठी (प्रथमा) "the
  genitive" · स्थानेयोगा (प्रथमा) "[has] the link 'in place of'". English: "A genitive [in the
  rules, whose link is not otherwise fixed] means 'in place of'." [REF:ashtadhyayi 1.1.49]; [REF:kashika 1.1.49].
- **Q — 1.1.66 तस्मिन्निति निर्दिष्टे पूर्वस्य** (*tasminn iti nirdiṣṭe pūrvasya*). Padaccheda:
  तस्मिन् (सप्तमी) "'in that'" · इति "so" · निर्दिष्टे (सप्तमी) "when named" · पूर्वस्य (षष्ठी) "of
  the preceding". English: "When [a context] is named in the locative, [the operation is] on what
  immediately precedes it." [REF:ashtadhyayi 1.1.66]; [REF:kashika 1.1.66].
- **Q — 1.1.67 तस्मादित्युत्तरस्य** (*tasmād ity uttarasya*). Padaccheda: तस्मात् (पञ्चमी) "'from
  that'" · इति "so" · उत्तरस्य (षष्ठी) "of the following"; [निर्दिष्टे, carried from 1.1.66].
  English: "When [a context] is named in the ablative, [the operation is] on what immediately
  follows it." [REF:ashtadhyayi 1.1.67]; [REF:kashika 1.1.67].
  (In these three definitions the case names are grammatical labels only: the case code itself
  applies to rules that do something.)
- **D — 1.1.50 स्थानेऽन्तरतमः** (already a tool from l01; not re-counted): "In place of [a sound],
  the most similar substitute."
- **D — 1.3.10 यथासंख्यमनुदेशः समानाम्** (*yathāsaṃkhyam anudeśaḥ samānām*). English: "Where the
  replaced items and the results are equal in number, they pair off in order."
  [REF:ashtadhyayi 1.3.10]; [REF:kashika 1.3.10].
- **D — 7.1.9 अतो भिस ऐस्** (*ato bhisa ais*; first met here — in Volume 3 it was in Teacher Notes
  only): अतः (पञ्चमी: after) · भिसः (षष्ठी: in place of) · ऐस् (प्रथमा: the result). English:
  "After [a stem in] short अ, ऐस् replaces the ending भिस्." [REF:ashtadhyayi 7.1.9];
  [REF:kashika 7.1.9].
- **Re-read (owned; B):** 6.1.78 एचोऽयवायावः — एचः (षष्ठी: in place of ए ओ ऐ औ) · अयवायावः
  (प्रथमा: the results अय् अव् आय् आव्) · [अचि (सप्तमी: before a vowel), carried from 6.1.77]. (Its
  B status: one of the 26 of the भवति derivation; owned from Volume 3.) Owned numbers on the table
  and in the lesson: 6.1.77, 6.1.101, 7.3.101, 8.4.40, 6.1.88 (derivation (b) step 2), 6.1.87 (the
  trap line). Preview/display steps: 8.2.66 + 8.3.15 (derivation (b) step 3, "c02.l01"); the
  heading [पूर्वपरयोः] without its number (c02.l02); 8.3.32 (the यणादेशः note, model sentence 4).
- **Teacher Notes:** 6.1.84 एकः पूर्वपरयोः (the heading; its number is c02.l02's); 1.1.55
  अनेकाल्शित्सर्वस्य (why ऐस् replaces all of भिस्; L12); 1.3.4 न विभक्तौ तुस्माः (why the final स् of भिस् and ऐस् is not a marker; c02.l01's line); 1.1.34 पूर्वपरावरदक्षिणोत्तरापराधराणि
  व्यवस्थायामसंज्ञायाम् (पूर्वः, उत्तरः pronominal "in the sense of relative position"); 7.1.25
  अद्ड् डतरादिभ्यः पञ्चभ्यः as the contrast (the neuter -अत् is for the five डतरादि only: कतरत्,
  कतमत्, इतरत्, अन्यतरत्, अन्यत्; so the neuter of पूर्व and उत्तर is पूर्वम्, उत्तरम्; review
  c01:P#4); 1.1.72 and its vārttika on al-words (7.3.101's "before an ending beginning with"); the
  heading अङ्गस्य and the carried सार्वधातुके (row 0.C note).

**The derivations.**

(a) **Derive, according to Pāṇini, भो + अति → भवति** (the last step of भवति, as Volume 3 gave it;
IR-021; now read as a rule; the first step of the भवति thread, plan §1.5)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | भो + अति | — | (how ओ arose: guṇa, c02.l02, before शप्, c03.l02; how अति arose: c03) |
| 1 | भो + अति | 6.1.78 एचोऽयवायावः [अचि, carried from 6.1.77] (B, owned) | ओ is an एच् sound, and a vowel follows: it is replaced |
| 2 | भव् + अति | 1.3.10 यथासंख्यमनुदेशः समानाम् (D) | ए ओ ऐ औ → अय् अव् आय् आव् in order: ओ is second → अव् |
| 3 | **भवति** | — | joined |

FACT beside it: Whitney §735a "root भू bhū be; stem भव bháva (bho+a: 131)"
[REF:whitney1889 §735]; [REF:whitney1889 §131]. The IR-021 line (one line, plain text): "The 1.x
book wrote that in भू + ति → भवति 'गुण inserts व' (p. 89); the व comes from ओ by 6.1.78 — guṇa
itself is a substitute, Chapter 2." (Pass C re-finds the p. 89 wording — §6.)

(b) **Derive, according to Pāṇini, देव + भिस् → देवैः** (owned since v3.c02.l01; the -ऐः exception
of the recurring-endings card)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | देव + भिस् | — | stem + the instr. pl. ending, as the tradition names it |
| 1 | देव + ऐस् | 7.1.9 अतो भिस ऐस् (D) | after short अ (अतः, ablative), भिस् (भिसः, genitive) is replaced by ऐस् (nominative) |
| 2 | देवैस् | 6.1.88 वृद्धिरेचि [आत्, carried from 6.1.87] (owned) | अ + ऐ → ऐ |
| 3 | **देवैः** | 8.2.66 + 8.3.15 (preview: c02.l01) | final स् → visarga |

FACT beside it: Whitney §329d "The instr. ends later always in āis" [REF:whitney1889 §329]. **Why
ऐस् replaces all of भिस्, not only its last sound:** Teacher Notes (1.1.55; LSK under 7.1.9:
*anekālśitsarvasya / rāmaiḥ*). **Why the स् of भिस् and ऐस् is not dropped as a marker** (l01 taught that the final consonant of a teaching is one, and an ending as first taught is a teaching): in a case or verb ending, a final dental, स् or म् is not a marker, by 1.3.4 न विभक्तौ तुस्माः (data file 13004; an उपदेशे, इत्, हल्, अन्त्यम् ← 1.3.2–1.3.3). Printed in learner text as one labelled line under the table: "An ending such as भिस् keeps its final स्: which final sounds of an ending are not markers is Chapter 2's (preview)." The sūtra text goes in Teacher Notes only (plan: 1.3.4 is Teacher Notes in c02.l01 too).

**Derive it yourself (principle 7; key in the same table form).**
- **ने + अति → नयति**: 0 ने + अति · 1 ने + अति — 6.1.78 [अचि] — ए is an एच् sound, a vowel follows
  · 2 नय् + अति — 1.3.10 — ए is first → अय् · 3 **नयति**. (How ए arose: guṇa, c02.l02, before शप्, c03.l02.)
- **राम + भिस् → रामैः**: 0 राम + भिस् · 1 राम + ऐस् — 7.1.9 · 2 रामैस् — 6.1.88 [आत्] · 3
  **रामैः** — 8.2.66 + 8.3.15 (preview).

**Model sentences** (the plan's six; the review's fixes; gloss 3 names 7.1.9 — §7, deviation 3).
1. इक इत्यत्र षष्ठी, स्थान इत्यर्थः। (*ika ity atra ṣaṣṭhī, sthāna ity arthaḥ.*) — pause: इकः इति
   अत्र षष्ठी, स्थाने इति अर्थः। (*ikaḥ iti atra ṣaṣṭhī, sthāne iti arthaḥ.*) — "In 'ikaḥ' there is
   a genitive, meaning 'in place of'." — 'इकः' में षष्ठी है, अर्थ है 'के स्थान पर'।
2. अचीति सप्तमी, पूर्वस्य कार्यम्। (*acīti saptamī, pūrvasya kāryam.*) — pause: अचि इति सप्तमी,
   पूर्वस्य कार्यम्। — "'aci' is a locative: the operation is on what comes before." — 'अचि'
   सप्तमी है: कार्य पहले वाले पर होता है।
3. अत इति पञ्चमी, उत्तरस्य कार्यम्। (*ata iti pañcamī, uttarasya kāryam.*) — pause: अतः इति
   पञ्चमी, उत्तरस्य कार्यम्। — "'ataḥ' [in 7.1.9] is an ablative: the operation is on what comes
   after." — (7.1.9 में) 'अतः' पञ्चमी है: कार्य बाद वाले पर होता है।
4. इको यणादेशः। (*iko yaṇādeśaḥ.*) — pause: इकः यणादेशः। — "In place of an ik, the yaṇ
   substitute." — इक् के स्थान पर यण् आदेश। Note (review c01:P#1): "यणादेशः is the Kāśikā's own
   compound, on 6.1.77: *iko yaṇādeśo bhavati* (in fact *aci parataḥ iko yaṇādeśo bhavati*, line
   52887). Two free words यण् आदेशः could not stand apart in joined text: a consonant-final word is
   written together with the next vowel, and 8.3.32 would double the ण् (यण्णादेशः) — so the course
   uses the compound." (The compound is one word in the pause form.)
5. पूर्वो वर्ण इक्, उत्तरोऽच्। (*pūrvo varṇa ik, uttaro 'c.*) — pause: पूर्वः वर्णः इक्, उत्तरः
   अच्। — "The earlier sound is an ik, the later an ac." — पहला वर्ण इक् है, बाद वाला अच्।
6. सूत्रस्य विधिः कः? (*sūtrasya vidhiḥ kaḥ?*) — pause: the same — "What is the sūtra's
   operation?" — सूत्र की विधि क्या है? (review c01:P#17: विधिः = "operation (rule)", plan §1.4.4.)

**Headwords (4; 517 → 521).**

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status | dictionary |
|---|---|---|---|---|---|---|---|
| आदेशः | ādeśaḥ | /ɑːd̪eːɕɐh/ | substitute (in grammar); command | आदेश | m. a-stem | ledger-new (-) | Apte s.v. आदेशः 1 "An order, command", 5 "(Gram.) A substitute"; MW s.v. ādeśa (advice, instruction, precept …) |
| पूर्वः | pūrvaḥ | /puːɾʋɐh/ | preceding, earlier; eastern | पूर्व, पहला | pron. adj. -र्वा -र्वम् | ledger-new (-) | MW s.v. pūrva "… declined like a pron. when implying relative position"; "eastern" |
| उत्तरः | uttaraḥ | /ut̪t̪ɐɾɐh/ | following, later; northern; n. उत्तरम् "answer" | उत्तर, बाद वाला | pron. adj. -रा -रम् | ledger-new (-) | MW s.v. uttara "later, following …", "northern", n. "answer, reply"; Apte s.v. उत्तर "--रं An answer, reply" |
| विधिः | vidhiḥ | /ʋid̪ʱih/ | operation (rule); method; fate | विधि | m. i-stem | ledger-new (-) | MW s.v. vidhi (2) "a rule, formula, injunction …", "a grammatical rule", "fate, destiny" |

(कार्यम् is owned (v2.c06.l03). पूर्वः's and उत्तरः's pronominal cells (पूर्वस्मिन्, पूर्वे) are
display only: no pronominal cell is used in this chapter; the cells used — पूर्वः, पूर्वस्य,
उत्तरः, उत्तरस्य — are the same in the a-stem and the pronominal declension.) **§14 line:** "Ledger
517 → 521 (4 ledger-new). Cells drilled: 2 (देवैः, रामैः, derived). Tools added: 5 (1.1.49,
1.1.66, 1.1.67 Q; 1.3.10, 7.1.9 D)."

**§3 Station 0 (verbatim) and review prompts.**
- +1 day: the yañ sort — for the eight endings -मि, -मः, -सि, -थ, -ति, -तः, -महे and -ध्वे say
  whether the first sound is in यञ्, then join each to its stem (गच्छ- for the first six, लभ- for
  the last two), lengthening the stem's अ only before a yañ sound; v4.c01.l03's Station 0 runs
  exactly this.
- +1 week: the pratyāhāra traps — write out the sounds of चय्, झश् and जश्, say which of them are
  aspirated, and name the two sūtras in which ह stands; v4.c01.l03's Station 0 runs exactly this.
Keys 0.D (S0-cc, S0-cb). Review prompts: (v3.c04.l01) "Name the sūtra for इत्यवदत्, सदैव, नेति,
त आगच्छन्ति" — 6.1.77, 6.1.88, 6.1.87, 6.1.78; (v3.c04.l02) "Join नमः + ते and say the sūtra" —
नमस्ते, 8.3.34; (v3.c01.l05) "Name the seven cases in the tradition's order" — प्रथमा … सप्तमी.

**§4 Historical Context.** **[TRADITION · परम्परा]** The commentators read the rules through
this code. The Kāśikā glosses इको यणचि as *aci parataḥ iko yaṇādeśo bhavati* 'when a vowel follows,
the yaṇ substitute comes in place of an ik' — the locative turned into 'when … follows', the
genitive kept, the nominative called the substitute. [REF:kashika 6.1.77] (Devanagari: अचि परतः
इको यणादेशो भवति। — pause: अचि परतः इकः यणादेशः भवति। Line 52887; it is a commentary line read in
learner text — the third of the chapter, beside K1 and L5: §7, deviation 8.)

**§5 Scientific Explanation (FACT).** Case marking and word order: Sanskrit marks a word's role by
its ending, so a rule can be three words in any order; the genitive/ablative syncretism of the
singular in most stems (FACT: "The ablative has a special ending … only in a-stems, masc. and neut. … Everywhere else, the ablative is identical with the genitive" [REF:whitney1889 §307]: -अस्य vs -आत् in a-stems, one form for both in the i-, u- and consonant stems the sound-names use). One line: why the commentators
needed 1.1.49: a genitive in ordinary Sanskrit has many senses ("own, near, part of …"); the Kāśikā
says so (*bahavo hi ṣaṣṭhyarthāḥ*, line 1351: Teacher Notes).

**§6 Sanskrit Explanation.** Model sentences 1–3, 5 and 6 (विधिः), and दीर्घ आदेशः। (*dīrgha ādeśaḥ.*) — pause: दीर्घः आदेशः। — "The long vowel is the substitute." — दीर्घ स्वर आदेश है। (आदेशः as a free word, rule 20; seam -अः + vowel → अ + gap, row 0.20); plus: अतो दीर्घो यञीत्यत्र अत इति षष्ठी।
(*ato dīrgho yañīty atra ata iti ṣaṣṭhī.*) — pause: अतो दीर्घो यञि इति अत्र अतः इति षष्ठी। — "In अतो
दीर्घो यञि, 'ataḥ' is a genitive." — अतो दीर्घो यञि में 'अतः' षष्ठी है।

**§7 Hindi Explanation.** Natively written; the Hindi parallel row 0.25 (c) (के स्थान पर, से
पहले / परे होने पर, के बाद). Hindi terms: षष्ठी, सप्तमी, पञ्चमी, प्रथमा (विभक्ति); आदेश; स्थानी
not used; विधि; पदच्छेद.

**§8 English Explanation.** The recipe: (1) भवति and देवैः; (2) the question: how does a rule say
"in place of", "before", "after"?; (3) the tools: 1.1.49, 1.1.66, 1.1.67, and 1.3.10, 1.1.50;
(4) derivations (a) and (b); (5) the learner derives नयति, रामैः (Ex 5); (6) production (Ex 6,
§16). The trap box (the अतः pair; the bracket [पूर्वपरयोः]); the first bracket [अचि] explained as
"carried from the rule before" (c02.l03 teaches carrying).

**§9–§11.** Reading a sūtra aloud joined, then in pause form, hearing each case ending (row 0.29);
the six rules of the table read aloud; अचि vs अति (the यणचि of the sūtra, the अति of भवति) — the
locative ending -इ heard.

**§12 Common mistakes.**

| # | Mistake | Fix |
|---|---|---|
| 1 | Reading a sūtra's locative as "in" (वने "in the forest") | in a rule the locative of a sound means "before it": अचि "before a vowel" |
| 2 | Taking every -अः word for a genitive: अतः in 7.1.9 "in place of a" | ask what the result can stand in place of: ऐस् is an ending, so it replaces भिस्; अतः is ablative, "after a" |
| 3 | Taking every -अः word for an ablative: अतः in 7.3.101 "after a" | दीर्घः is a vowel, so it replaces the short a: अतः is genitive |
| 4 | Looking in 6.1.101 for a genitive word | the replaced item is both sounds, by the heading [पूर्वपरयोः]; अकः is ablative |
| 5 | Pairing 6.1.78's results by sound, not by order (ओ → अय्) | 1.3.10: ओ is second of ए ओ ऐ औ, so अव् |
| 6 | Writing यण् आदेशः as two free words in joined text | a consonant-final word joins the next vowel; the compound यणादेशः is the course's form |

**§13 Examples.** Table 0.C; derivations (a), (b); the learner's two; the six rules case-coded
aloud.

**§15 Grammar.** The case code (four lines); 1.1.49, 1.1.66, 1.1.67 (Q, with padaccheda and case
names); 1.3.10, 7.1.9 (D); 1.1.50 re-read; table 0.C with the two traps; the bracket convention;
the derivations and the derive-it-yourself; the toolbox card: "Toolbox after l03 (12): l01–l02's
seven + 1.1.49 (genitive = in place of) · 1.1.66 (locative = before) · 1.1.67 (ablative = after) ·
1.3.10 (in order) · 7.1.9 (भिस् → ऐस् after short a) — forms derived: भवति, नयति, देवैः, रामैः, and
every Chapter 1 form". Paradigm ledger: "✓ the case code on any quoted rule of this chapter; ✓ the
instr. pl. -ऐः derived (owned cells); ✓ 1.1.50, the most similar substitute, as the authority for a derivation step, by its gist (read today; ○ since l01); ○ 8.2.66 + 8.3.15 (c02.l01); ○ the heading [पूर्वपरयोः]
(c02.l02); ○ anuvṛtti (c02.l03)".

**Previewed / Deferred (plan).** Previewed: anuvṛtti, the bracket [अचि] (c02.l03); 8.2.66 + 8.3.15
(c02.l01); the heading [पूर्वपरयोः], one substitute for both vowels, in the 6.1.101 row (its sūtra
and number are c02.l02's). Deferred: the instrumental of association in 8.4.40, read as a case-code
exception (Teacher Notes; Chapter 6 for the vṛtti).

**§16 Conversation (12 turns; a student and the teacher).**
1. छात्रः — गुरो, इको यणचीति सूत्रे कति पदानि? (*guro, iko yaṇ acīti sūtre kati padāni?*) — pause:
   गुरो, इको यणचि इति सूत्रे कति पदानि? — "Teacher, how many words are there in the sūtra इको
   यणचि?"
2. गुरुः — त्रीणि पदानि। इकः, यण्, अचि। (*trīṇi padāni. ikaḥ, yaṇ, aci.*) — pause: the same —
   "Three words: ikaḥ, yaṇ, aci."
3. छात्रः — इक इति षष्ठी वा पञ्चमी वा? (*ika iti ṣaṣṭhī vā pañcamī vā?*) — pause: इकः इति षष्ठी
   वा पञ्चमी वा? — "Is 'ikaḥ' a genitive or an ablative?"
4. गुरुः — षष्ठी। इकः स्थाने यण्। (*ṣaṣṭhī. ikaḥ sthāne yaṇ.*) — pause: the same — "A genitive:
   in place of an ik, a yaṇ."
5. छात्रः — अचीति? (*acīti?*) — pause: अचि इति? — "And 'aci'?"
6. गुरुः — सप्तमी, पूर्वस्य कार्यम्। (*saptamī, pūrvasya kāryam.*) — pause: the same — "A
   locative: the operation is on what comes before."
7. छात्रः — इत्यवददित्यत्र कस्य स्थाने यकारः? (*ity avadad ity atra kasya sthāne yakāraḥ?*) —
   pause: इत्यवदत् इति अत्र कस्य स्थाने यकारः? — "In इत्यवदत्, in place of what is the y?"
8. गुरुः — इकारस्य स्थाने। (*ikārasya sthāne.*) — pause: the same — "In place of i."
9. छात्रः — अतो भिस ऐसित्यत्र अत इति षष्ठी? (*ato bhisa ais ity atra ata iti ṣaṣṭhī?*) — pause:
   अतो भिस ऐस् इति अत्र अतः इति षष्ठी? — "In अतो भिस ऐस्, is 'ataḥ' a genitive?"
10. गुरुः — न, पञ्चमी। अत उत्तरस्य भिसः स्थान ऐस्। (*na, pañcamī. ata uttarasya bhisaḥ sthāna
    ais.*) — pause: न, पञ्चमी। अतः उत्तरस्य भिसः स्थाने ऐस्। — "No, an ablative. In place of the
    भिस् that follows short a, ऐस्."
11. छात्रः — अतो दीर्घो यञीत्यत्रापि पञ्चमी? (*ato dīrgho yañīty atrāpi pañcamī?*) — pause: अतो
    दीर्घो यञि इति अत्र अपि पञ्चमी? — "In अतो दीर्घो यञि too, an ablative?"
12. गुरुः — न, तत्र षष्ठी। दीर्घोऽतः स्थाने। (*na, tatra ṣaṣṭhī. dīrgho 'taḥ sthāne.*) — pause: न,
    तत्र षष्ठी। दीर्घः अतः स्थाने। — "No, there it is a genitive: the long vowel [comes] in place of
    short a."
Seams per row 0.20 (ऐसिति: स् + इ, written together; इत्यवददिति: त् → द् before इ; स्थान ऐस्: -ए → -अ + gap; भिसः स्थान,
इकः स्थाने: ः before स). Words owned (गुरुः, छात्रः, कति, पदम्, त्रीणि, वा, स्थानम्, कः/कस्य, न,
तत्र, अपि, कार्यम्) or headwords (पूर्वः, उत्तरः), case names (display, rule 23), labels.

**§17 Story — the grammarians' line, 3 (plain text, no new callout).** The case code is not a
modern invention: the commentators' glosses turn a rule into a sentence with "in place of",
"when … follows" (the §4 callout). One line: "Chapter 6 reads such glosses with you." (No serial in
Chapters 1–2: plan §1.5.)

**§18 Exercises.**
- **Ex 1 (obj 1; class 4 min; two columns)** — Case in a sentence vs case in a rule: (1) वने "in
  the forest" — अचि (2) ग्रामात् "from the village" — अकः in 6.1.101 (3) रामस्य "Rāma's" — इकः (4)
  सूर्ये "in the sun" — यञि (5) गृहात् "from home" — आत् in 6.1.87 (6) नृपस्य "the king's" — एचः.
  Key (the rule column): (1) before a vowel (2) after an ak (3) in place of an ik (4) before a
  yañ sound (5) after अ/आ (6) in place of ए ओ ऐ औ. (Every sentence-column word is owned: वनम्,
  ग्रामः, रामः, सूर्यः, गृहम्, नृपः.)
- **Ex 2 (obj 2; class 6 min)** — Circle what is replaced, box the result, arrow the context, in
  the six rules of table 0.C. Key: table 0.C.
- **Ex 3 (obj 1; homework 6 min)** — Name each word's case and job (the bracketed word is carried):
  (1) 6.1.87 आद्गुणः [अचि] (2) 6.1.88 वृद्धिरेचि [आत्] (3) 6.1.109 एङः पदान्तादति [पूर्वः] (4)
  8.3.23 मोऽनुस्वारः [हलि] (5) 8.3.34 विसर्जनीयस्य सः [खरि]. Keys: as S0-ce
  (0.D-keys), plus (2) वृद्धिः (प्रथमा: result) · एचि (सप्तमी: before ए ओ ऐ औ) · [आत्] (पञ्चमी:
  after अ/आ) · replaced: both sounds. (S0-ce at l04 re-runs five of these: spaced retrieval of a
  taught item, not a new one.)
- **Ex 4 (obj 2; class 4 min; the अतः pair and its kin)** — Genitive or ablative, and why? (1) अतः
  in 7.1.9 (2) अतः in 7.3.101 (3) इकः in 6.1.77 (4) अकः in 6.1.101 (5) एचः in 6.1.78 (6) आत् in
  6.1.87. Keys: (1) abl. — ऐस् replaces the ending, so अतः is "after" (2) gen. — the long vowel
  replaces the short a (3) gen. — य व र ल replace इ उ ऋ ऌ (4) abl. — both sounds are replaced
  (bracket) (5) gen. — अय् … replace ए … (6) abl. — here आत् is the ablative of अ (data file pc 5), "after अ/आ" (1.1.69 covers आ); the tapara आत् of 1.1.1 (l02) is a different word.
- **Ex 5 (obj 3; derive it yourself; homework 10 min)** — "Derive, according to Pāṇini, …", table
  form: (1) ने + अति → नयति (2) राम + भिस् → रामैः (3) पर + उपकारः → परोपकारः (4) अग्ने + ए →
  अग्नये (how ए arose in अग्ने: c02.l02) (5) गुरो + ए → गुरवे (how ओ arose: c02.l02) (6) गण +
  ईशः → गणेशः (owned, v3.c04.l01). Keys: (1), (2) as above; (3) अ and उ not savarṇa (1.1.9), so not 6.1.101; 6.1.87 आद्गुणः [अचि]: after अ (आत्), before a vowel, one guṇa vowel for both [पूर्वपरयोः]; which? ओ, the guṇa vowel most like अ + उ (1.1.50): **परोपकारः**; (4) 6.1.78
  [अचि], 1.3.10 ए first → अय्: अग्नय् + ए → **अग्नये**; (5) ओ second → अव्: **गुरवे**; (6) अ and ई not savarṇa (1.1.9), so not 6.1.101; 6.1.87 [अचि]; ए, the guṇa vowel most like अ + ई (1.1.50):
  **गणेशः**. (All owned forms: अग्नये, गुरवे v3.c02.l03; परोपकारः v2.c06.l03; गणेशः v3.c04.l01, rule 10. Not नेति: it is a retake task D item.)
- **Ex 6 (obj 4; production; homework 8 min, written then said)** — In Sanskrit, joined, pause
  beneath: (1) "In 'ikaḥ' there is a genitive." (2) "'aci' is a locative." (3) "The earlier sound
  is an ik." (4) "The later sound is an ac." (5) "What is the operation of the sūtra अतो भिस ऐस्?"
  (6) "In place of an ik, the yaṇ substitute." Keys: (1) इक इत्यत्र षष्ठी। (2) अचीति सप्तमी। (3)
  पूर्वो वर्ण इक्। (4) उत्तरो वर्णोऽच्। [pause: उत्तरः वर्णः अच्।] (5) अतो भिस ऐसिति सूत्रस्य
  विधिः कः? (6) इको यणादेशः।
- **Ex 7 (obj 2; spoken; homework 3 min, recorded)** — Read the six table rules aloud, joined, then word by word
  with each case named.

**§19 Quiz (10; homework).**
1. According to Pāṇini (1.1.49), a genitive in a rule means: (a) "after" (b) "before" (c) "in place
   of" (d) "the result" — c. TRADITION
2. In इको यणचि, अचि means: (a) in a vowel (b) before a vowel (c) after a vowel (d) in place of a
   vowel — b. TRADITION (1.1.66)
3. In 7.1.9 अतो भिस ऐस्, अतः is: (a) genitive: in place of short a (b) ablative: after short a (c)
   locative: before short a (d) nominative: the result — b. TRADITION
4. In 7.3.101 अतो दीर्घो यञि, अतः is: (a) genitive (b) ablative (c) locative (d) nominative — a.
   TRADITION
5. According to Pāṇini, in 6.1.101 अकः सवर्णे दीर्घः what is replaced? (a) the अक् only (b) the
   following savarṇa vowel only (c) both sounds, by a heading (d) nothing — c. TRADITION
6. According to Pāṇini (6.1.78 with 1.3.10), ओ before a vowel becomes: (a) अय् (b) अव् (c) आय् (d)
   आव् — b. TRADITION
7. Derive, according to Pāṇini: which step comes first in देव + भिस् → देवैः? (a) अ + ऐ → ऐ (b) भिस्
   → ऐस् (c) स् → visarga (d) अ → आ — b. TRADITION
8. In the padaccheda of a quoted sūtra, the nominative names: (a) what is replaced (b) the result
   (c) what follows (d) what precedes — b. TRADITION
9. The course's form for "the yaṇ substitute" in joined text is: (a) यण् आदेशः (b) यणादेशः (c)
   यणदेशः (d) यणेदेशः — b. FACT about the course's text (the joining rule); (a) is §12 row 6; (c)
   and (d) are error forms built from taught material (a lost long vowel; a guṇa vowel where none
   arises). (यण्णादेशः is not offered: two free words would give it by 8.3.32, so it is not an
   error form.)
10. Which statement is FACT, not TRADITION? (a) "6.1.78 makes भवति from भो + अति." (b) "The stem
    of भवति is भव, bho + a (Whitney)." (c) "According to Pāṇini, अचि means 'before a vowel'." (d)
    "1.3.10 pairs in order." — b. FACT (register item)

**§20 bookings (verbatim).**
- +1 day: five owned sūtras case-coded — for 6.1.87 आद्गुणः [अचि], 6.1.109 एङः पदान्तादति [पूर्वः],
  8.3.23 मोऽनुस्वारः [हलि], 8.3.34 विसर्जनीयस्य सः [खरि] and 6.1.88 वृद्धिरेचि [आत्], name the case of
  each word and say what it does in the rule: in place of, the result, before or after (the word in
  brackets is carried, and its case counts too); v4.c01.l04's Station 0 runs exactly this.
- +1 week: the case code again — circle what is replaced and arrow the context in 6.1.77 इको यणचि,
  6.1.78 एचोऽयवायावः, 7.1.9 अतो भिस ऐस् and 7.3.101 अतो दीर्घो यञि, then derive, according to
  Pāṇini, देव + भिस् → देवैः in table form; v4.c02.l01's Station 0 runs exactly this.

**Class timing (45).** 0–6 Station 0 · 6–9 review prompts · 9–11 Hook · 11–19 the code: 1.1.49,
1.1.66, 1.1.67; Ex 1 · 19–33 table 0.C (2); Ex 2 (6); the trap box (2); Ex 4 (4) · 33–41
derivations (a), (b) with the teacher; the derive-it-yourself (1), (2) started in pairs · 41–45
model sentences 1–6 read. Homework: Ex 3, Ex 5 (finish), Ex 6, Ex 7, §16 and the quiz. (§16 is not
read in class, and Ex 7 replaces the reading of the table at home: editor's decision 9.)

**§21 Homework (45).** Ex 3 (6) · Ex 5 (10) · Ex 6 written and said (8) · the quiz (8) and key (3)
· §16 aloud (4) · Ex 7, the six rules of the table read aloud, joined and then word by word, recorded (3) · real-world task (3):
explain to a Hindi speaker, in Hindi, what इक् के स्थान पर यण् means, with इति + अवदत्.

**Teacher Notes.** K8–K14, K18, L4, L7–L9, L12–L14 (table 0.E) with corrections (*-iva* read *eva*;
*avyavahatisya*; *rāmairḥ*); 6.1.84 and the Kāśikā's reason for the heading; 1.1.55; 1.1.34 and
7.1.25 (review c01:P#4 wording: 7.1.25 is the contrast, not a pronominal rule for पूर्व); the
headings and carried words the data file adds and the course does not print yet; the Kāśikā's
*bahavo hi ṣaṣṭhyarthāḥ*; the 1.x p. 89 line (Pass C); why the derive-it-yourself items give the
starting strings अग्ने, गुरो, ने without deriving them.

**Payoff (plan).** The learner reads, unaided, the structure of every vowel sūtra Volume 3 quoted;
देवैः, the -ऐः exception listed without a reason in Volume 3, now has its rule; the last step of
भवति is read as the tradition writes it — the first step of the भवति thread. **Main risk:** the
locative read as "in", every -अः word taken for one case — the two-column drill (Ex 1), the
circle-and-arrow (Ex 2), the अतः pair (Ex 4).

---

## 4. L4 — प्रथमपरीक्षा: The Chapter 1 Exam (review)

**Front matter.** id `v4.c01.l04` · file `lesson-04-chapter-one-exam.md` · title sa प्रथमपरीक्षा ·
sa_iast *prathamaparīkṣā* · en "Chapter 1 Exam" · hi "पहले अध्याय की परीक्षा" · lesson_type review
· cefr B1 · duration_minutes **45** (`# the sitting alone; Station 0 (§3, about 8 min) runs before
it and outside its 45`) · self_study_minutes **40** (15 before the sitting: the §15 assembly page
from memory (8), T9 recited (3), §16 aloud (4); 25 after: the §19 quiz (8), task E said aloud and
recorded (2), the §17 thread verse (3), the check against the task keys (6), one remediation item
for the lowest-scoring task (3), the real-world task (3)) ·
prerequisites [v4.c01.l03] · review_of [v4.c01.l01, v4.c01.l02, v4.c01.l03, v3.c04.l01,
v3.c06.l05] · vocabulary_count **0** · tags [review, assessment, chapter-exam, maheshvara-sutras,
pratyahara, savarna, case-code, derivation, thread-verse, spaced-review] · media (planned): image
`v4c01l04-chapter-page.svg`; worksheet `v4c01l04-exam-booklet.pdf`; quizzes
`v4c01l04-chapter-quiz.md`, `v4c01l04-chapter-quiz-key.md`.

**Objectives.**
1. en "Write the fourteen sūtras from memory with every marker, and expand ten pratyāhāras,
   including the traps." · hi "चौदह सूत्र हर इत् सहित स्मृति से लिखें, और दस प्रत्याहार — कठिन
   उदाहरणों सहित — खोलें।"
2. en "Read six sūtras by their case code: what is replaced, by what, and where." · hi "छह सूत्रों
   को उनकी विभक्तियों से पढ़ें: किसके स्थान पर, क्या, और कहाँ।"
3. en "Derive, according to Pāṇini, five owned vowel joins in table form, each step with its
   sūtra." · hi "पाणिनि के अनुसार पाँच परिचित स्वर-सन्धियों की व्युत्पत्ति तालिका में करें, हर चरण
   अपने सूत्र सहित।"
4. en "Write and say six Sanskrit sentences about the sound system." · hi "वर्ण-व्यवस्था के बारे
   में छह संस्कृत वाक्य लिखें और बोलें।"

**§3 Station 0 (verbatim; about 8 minutes, before the sitting, outside it).**
- +1 day: five owned sūtras case-coded — for 6.1.87 आद्गुणः [अचि], 6.1.109 एङः पदान्तादति [पूर्वः],
  8.3.23 मोऽनुस्वारः [हलि], 8.3.34 विसर्जनीयस्य सः [खरि] and 6.1.88 वृद्धिरेचि [आत्], name the case of
  each word and say what it does in the rule: in place of, the result, before or after (the word in
  brackets is carried, and its case counts too); v4.c01.l04's Station 0 runs exactly this.
- +1 week: the savarṇa table — write from memory what each of अ, इ, उ, ऋ, अत्, आत् [in वृद्धिरादैच्], चु and तु covers
  when it is written in a rule, and the rule that says so (1.1.69 or 1.1.70); v4.c01.l04's Station
  0 runs exactly this.
Keys 0.D (S0-ce, S0-cd). **Exam guard:** none of these items is an item of tasks A–E (task C's six
rules are 6.1.77, 6.1.78, 6.1.101, 7.1.9, 7.3.101, 8.4.40; task D derives, it does not case-code
6.1.87; task B expands pratyāhāras, it does not ask what a letter covers). The review_of lessons
are reached: l01–l03 by the tasks and S0; v3.c04.l01 by task D (its joins) and the spiral;
v3.c06.l05 by §20's closing line and the spiral (the thread verse of Volume 3's overlay).

**§4 Historical Context.** No new claim. The §15 assembly restates (plain text, no assessment) the
HISTORY callout of l01 (row 0.5) and the Kāśikā's count (row 0.9). The legend is not restated and
never assessed.

**§15 Assembly (unscored; plan).** T9 with every marker; the pratyāhāra index (table 0.B's
expansions, the chapter's pratyāhāras only, each expanded; the total 41 with its method in one
line); the savarṇa/tapara table (l02); the case-code table (table 0.C); the toolbox card, **12
tools** (4 + 3 + 5): 1.1.71, 1.3.3, 1.3.9, 1.1.50, 1.1.69, 1.1.9, 1.1.70, 1.1.49, 1.1.66, 1.1.67,
1.3.10, 7.1.9. The seven Volume 3 vowel sūtras re-printed with their parts labelled (6.1.101, 6.1.87,
6.1.88, 6.1.77, 6.1.78, 6.1.109 and 1.1.11): each word's case, as in table 0.C.

**§16 Conversation (8 turns; two students before the exam; none of the exam's items).**
1. छात्रः — सूत्राणि स्मरसि? (*sūtrāṇi smarasi?*) — pause: the same — "Do you remember the
   sūtras?"
2. छात्रा — आम्। आदिरइउण्, अन्त्यं हल्। (*ām. ādir aiuṇ, antyaṃ hal.*) — pause: आम्। आदिः अइउण्,
   अन्त्यम् हल्। — "Yes. The first is aiuṇ, the last hal." (अन्त्यम् agrees with an implied
   सूत्रम्.)
3. छात्रः — इण्प्रत्याहारे लकारोऽस्ति? (*iṇpratyāhāre lakāro 'sti?*) — pause: इण्प्रत्याहारे
   लकारः अस्ति? [a compound of the label and l01's headword: इण् + इति would double the ण् by 8.3.32, untaught] — "Is there an l in the pratyāhāra iṇ?"
4. छात्रा — आम्, अस्ति। (*ām, asti.*) — pause: the same — "Yes, there is."
5. छात्रः — अचीति सप्तमी, किम्? (*acīti saptamī, kim?*) — pause: अचि इति सप्तमी, किम्? —
   "'aci' is a locative, isn't it?"
6. छात्रा — आम्। पूर्वस्य कार्यम्। (*ām. pūrvasya kāryam.*) — pause: the same — "Yes: the
   operation is on what comes before."
7. छात्रः — अहं चिन्तयामि, अत इति कदा पञ्चमी? (*ahaṃ cintayāmi, ata iti kadā pañcamī?*) — pause:
   अहम् चिन्तयामि, अतः इति कदा पञ्चमी? — "I am wondering: when is 'ataḥ' an ablative?"
8. छात्रा — यदा तस्मादुत्तरस्य कार्यम्। (*yadā tasmād uttarasya kāryam.*) — pause: यदा तस्मात्
   उत्तरस्य कार्यम्। — "When the operation is on what follows it."
Words owned: छात्रः/छात्रा, स्मरति (v3.c03.l01), आम्, किम्, अहम्, चिन्तयति, कदा, यदा (v3.c05),
तस्मात् (तद्'s ablative ✓), सूत्रम्, आदिः, अन्त्यः, उत्तरः, पूर्वः, कार्यम्, अस्ति; labels इण्,
लकारः; case names. Seams: आदिरइउण् (-इः + vowel → र्), अन्त्यं हल् (म् → ं before ह), लकारोऽस्ति,
अहं चिन्तयामि, अत इति, तस्मादुत्तरस्य (त् voiced before उ, written together). None of the exam's
items: no expansion is asked, no rule of task C is coded, no task D join appears. (Not used, and
why: चतुर्दश "fourteen" is untaught — numerals beyond 10 are c05.l04; हलन्त्यम् is 1.3.3, not the
last of the fourteen.)

**§17 The thread verse (the spiral; unscored, after the sitting; plan §4.0.5, §7.3 Q17: the only
text either Chapter 1 or 2 exam reads).** Printed joined, pause form beneath, source label
unchanged from v1.c06.l04 ("traditional maṅgala verse; its original source is unrecorded"):
> सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥
> (*sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ. sarve bhadrāṇi paśyantu mā kaścid duḥkhabhāg
> bhavet.*)
> सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चित् दुःखभाक् भवेत्॥
The task (plan, review c01:E#7, P#5): (1) say whether the line has a vowel join between words — **no**:
no word ends in a vowel before a vowel; (2) mark its two changed seams, कश्चित् + दुःखभाक् →
कश्चिद्दुःखभाक् and दुःखभाक् + भवेत् → दुःखभाग्भवेत्, and name the owned sūtra for both: 8.2.39
झलां जशोऽन्ते (Volume 3; read from the pause forms: a झल् at a word's end → a जश्: त् → द्, क् →
ग्); (3) inside कश्चित्, the visarga seam कः + चित्: 8.3.34 विसर्जनीयस्य सः (कः → कस्, before the
voiceless च) and then 8.4.40 स्तोः श्चुना श्चुः (स् → श् in contact with च): कश्चित्. Not asked:
the unchanged visarga of सुखिनः सर्वे; निस् → निर् in निरामयाः (8.2.66, c02.l01); the final of the base
-भाज् → -भाग् (8.2.30, c04.l01). Key printed after the sitting. Named in one line: "What Volume 4 has
added to the line today: the names of its sounds (झल्, जश्) and the case code of its rules."

**§18 The exam (one 45-minute sitting; closed book; the booklet prints every task; no toolbox card;
2 minutes of instructions are inside the 45 — so the tasks are A 6, B 7, C 10, D 12, E 8 = 43 + 2).**

**Task A — the fourteen (6 min; 14 points; pass 11).** "Write the fourteen sūtras from memory, in
order, and circle every marker." One point per sūtra with all its sounds and its marker right and
circled. Key: table 0.A. Remediation: l01 §15 and Ex 1; re-copy T9 three times on the grid.

**Task B — ten pratyāhāras (7 min; 10 points; pass 7).** "Expand each pratyāhāra from the sūtras,
sound by sound." (1) अच् (2) हल् (3) इक् (4) यण् (5) एङ् (6) अण्, as every rule but 1.1.69 reads it (7) अण्, as
1.1.69 reads it (8) इण् (9) चय् (10) झश्. Traps: 6/7 against 8 (the two ण्), 2 (हल् from the ह of
sūtra 5), 9 against 10. Key: table 0.B expansions; (2) all consonants listed, ह once; partial
lists score 0 (a pratyāhāra is all or nothing); for (6) अ इ उ; (7) and (8) through ल. Remediation:
l01 Ex 3–4, l02 Ex 3.

**Task C — six rules by their case code (10 min; 18 points; pass 12).** "For each sūtra say what
is replaced, by what, and where (before or after what)." Each sūtra printed with its padaccheda
(**without** the case labels — the learner supplies them) and with its carried word in brackets
where table 0.C has one. (1) 6.1.77 इको यणचि (2) 6.1.78 एचोऽयवायावः [अचि] (3) 6.1.101 अकः सवर्णे
दीर्घः [अचि] [पूर्वपरयोः] (4) 7.1.9 अतो भिस ऐस् (5) 7.3.101 अतो दीर्घो यञि (6) 8.4.40 स्तोः
श्चुना श्चुः. 3 points each: replaced · result · where. Key (table 0.C): (1) इक् (इ उ ऋ ऌ) · यण् (य
व र ल) · before a vowel (अचि, locative) (2) ए ओ ऐ औ (एचः, genitive) · अय् अव् आय् आव्, in order ·
before a vowel ([अचि]) (3) both sounds ([पूर्वपरयोः]) · one long vowel (दीर्घः) · after an अक्
sound (अकः, ablative), before a savarṇa vowel (सवर्णे) — the "where" point needs both (4) the
ending भिस् (भिसः, genitive) · ऐस् · after short अ (अतः, ablative) (5) short अ (अतः, genitive) ·
a long vowel, आ · before a yañ sound (यञि) — accept "before an ending beginning with a yañ sound"
(6) स् and the त-row (स्तोः) · श् and the च-row (श्चुः) · in contact with श् or the च-row (श्चुना,
instrumental) — accept "next to / with"; "before" alone scores 0 (the instrumental, not a
locative). (6.1.87 is not on this task: it is derived in task D.) Remediation: l03 Ex 2, Ex 4.

**Task D — five owned joins derived (12 min; 20 points; pass 14).** "Derive, according to Pāṇini,
each join in table form (step · string · sūtra): (1) न + अस्ति → नास्ति (2) इति + अवदत् → इत्यवदत्
(3) तत्र + एव → तत्रैव (4) सूर्य + उदयः → सूर्योदयः (5) विद्या + आलयः → विद्यालयः." 4 points each:
(i) the pratyāhāra or savarṇa check that makes the rule apply, with its sūtra; (ii) the operation's
sūtra; (iii) which substitute and why (1.1.50 or 1.3.10 or "one long vowel of the same place"); (iv)
the joined form. A rule of tier D (1.1.9, 1.1.50, 1.3.10) may be named by its gist in words in
place of its number (tier D: never recalled by number). Keys:
- (1) 0 न + अस्ति · 1 अ is an अक् sound; the अ of अक् covers अ आ — 1.1.71, 1.1.69 · 2 अ and अ are
  savarṇa — 1.1.9 · 3 one long vowel for both: आ (the long vowel of the same place: 1.1.50,
  accepted, not required) — 6.1.101 · 4 **नास्ति**.
- (2) the l01 table: इ in इक्, अ in अच् (1.1.71) · 6.1.77 · य्, the यण् most like इ (1.1.50) ·
  **इत्यवदत्**.
- (3) 0 तत्र + एव · 1 ए is an एच् sound (1.1.71) · 2 after अ (आत्, carried), before an एच्: one
  vṛddhi vowel for both — 6.1.88 वृद्धिरेचि [आत्] · 3 which? ऐ, the one most like अ + ए (1.1.50) ·
  4 **तत्रैव**. (The definition of vṛddhi, 1.1.1, is Chapter 2's: not required; "vṛddhi: ऐ औ" as
  Volume 3 named it is enough.)
- (4) 0 सूर्य + उदयः · 1 अ and उ are not savarṇa (1.1.9), so 6.1.101 does not apply; अ is no इक्, so
  6.1.77 does not apply — accept either check · 2 after अ (आत्), before a vowel ([अचि]): one guṇa
  vowel for both — 6.1.87 आद्गुणः · 3 ओ, the guṇa vowel most like अ + उ (1.1.50) · 4 **सूर्योदयः**.
- (5) the l02 table (a): **विद्यालयः**.
Remediation: l01 derivation, l02 Ex 4, l03 Ex 5; v3.c04.l01 §15 Steps 1–4 for the joins themselves.

**Task E — production (8 min; 12 points; pass 8).** "Write six Sanskrit sentences about the sound
system with this chapter's words (सूत्रम्, प्रत्याहारः, आदिः, अन्त्यः, अक्षरम्, दीर्घः, ह्रस्वः,
प्रयत्नः, सवर्णः, आदेशः, पूर्वः, उत्तरः, विधिः), joined, with the pause form beneath; then say them
aloud (recorded after the sitting)." 2 points each: correct Sanskrit (1), correct joins with the
pause form (1). Sample answers (the plan's e.g. सूत्रस्यान्त्यो वर्ण इत्। and): हलिति व्यञ्जनानां
प्रत्याहारः। · अकारो ह्रस्वः, आकारो दीर्घः। · इकारेकारौ सवर्णौ। (इकार-ईकारौ: a dvandva of labels ✓;
pause इकारेकारौ — a compound is one word; accept इ ई च सवर्णौ) · इको यणादेशः। · पूर्वो वर्ण इक्,
उत्तरोऽच्। · इको यणचीत्यत्र पञ्चाक्षराणि। Accept any correct sentence; a sentence copied from the
booklet's printed rules scores 0. Remediation: l01 Ex 6, l02 Ex 6, l03 Ex 6.

**Total 74; pass: every task at its pass mark, and the §19 quiz (after the sitting) at 7/10** (the rubric weights C and D — 38 of 74 — over A,
14: plan main risk). **Retake:** after one week, the same specification with the alternative item
sets in Teacher Notes (task B: एच्, अक्, झल्, यञ्, जश्, हल्, अण् as every rule but 1.1.69 reads it, अण् as 1.1.69 reads it, इण्, झश् — the same three traps: the two ण् (7/8 against 9), ह from sūtra 5 (हल्), झश् against जश्; corrected at review: अट् and खर् are not opened in learner text, so झल् and हल् replace them; task C: the same six rules — the
code is the skill; task D: इत्याह, अप्यस्ति, नेति, सदैव, हिमालयः — owned, v3.c04.l01).

**§19 Quiz (10; after the sitting; key in `<details>`; register per item; distractors from the §12
rows of l01–l03; no ◐ cell, no untaught form).**
1. The marker of कपय् is: (a) क् (b) प् (c) य् (d) र् — c. FACT
2. Which pratyāhāra names exactly ए ओ? (a) एच् (b) एङ् (c) इक् (d) अक् — b. FACT
3. According to the Kāśikā, how many pratyāhāras do Pāṇini's rules use? (a) about 42, by the 1.x
   book's figure (b) 41, by its own tally (c) 14 (d) 30 — b. TRADITION (attributed)
4. According to Pāṇini (1.1.70), the tapara आत् of वृद्धिरादैच् stands for: (a) आ only (b) अ आ (c) all vowels (d) आ and ऐ — a.
   TRADITION
5. In 8.4.40, श्चुना is: (a) genitive (b) locative (c) instrumental: "in contact with" (d) ablative
   — c. TRADITION
6. According to Pāṇini, which rule pairs ए ओ ऐ औ with अय् अव् आय् आव् in order? (a) 1.1.50 (b) 1.3.10
   (c) 1.1.69 (d) 1.1.71 — b. TRADITION
7. The fourteen sūtras, according to the HISTORY line of l01, are: (a) numbered rules of the
   Aṣṭādhyāyī's first book (b) handed down with the Aṣṭādhyāyī, at its head, but not among its
   numbered rules (c) a Volume 4 invention (d) part of the Kāśikā — b. HISTORY (taught in a cited
   callout of l01; restated in §15)
8. The 1.x book glossed चय् as "voiceless aspirated". Correct: (a) voiced aspirated (b) voiceless
   unaspirated (c) sibilants (d) nasals — b. FACT
9. In 7.3.101, अतः is genitive because: (a) the result दीर्घः is a vowel, so it replaces the short a
   (b) it ends in -अः (c) 7.1.9's अतः is genitive (d) every अतः is genitive — a. TRADITION
10. The Volume 4 ledger after Chapter 1 is: (a) 508 (b) 513 (c) 521 (d) 517 — c. FACT about the
    course.

**§20 Revision and bookings (verbatim).**
- +1 day: the fourteen written — the fourteen sūtras written from memory, every marker circled;
  v4.c02.l01's Station 0 runs exactly this.
- +1 week: the pratyāhāra traps again — expand अण् twice (as every rule but 1.1.69 reads it, and as
  1.1.69 reads it), इण्, हल्, चय्, झश् and जश्, sound by sound; v4.c02.l02's Station 0 runs exactly this.

**§21 Homework (40 = 15 before + 25 after).** As the front matter. Real-world task (after, 3 min):
show someone the line नास्ति and tell them, in Hindi, the rule that made it — in Pāṇini's words and
in yours.

**§12 Common mistakes (six rows).**

| # | Mistake | Fix |
|---|---|---|
| 1 | In task A, a marker counted as a sound, or a marker left uncircled | the marker closes each line; circle it (l01 §12 row 1) |
| 2 | In task B, अण् read with the second ण् everywhere | only 1.1.69 does that (l02) |
| 3 | In task C, "before" for 8.4.40's श्चुना | it is the instrumental: "in contact with" (l03 table) |
| 4 | In task C, a genitive looked for in 6.1.101 | the bracket [पूर्वपरयोः]: both sounds |
| 5 | In task D, the join written without the check that makes the rule apply | step 1 is always the pratyāhāra or savarṇa check |
| 6 | In task E, joining across a comma or leaving a consonant-final word apart before a vowel | the stops; consonant-final words written together (row 0.2) |

**Teacher Notes.** The rubric and pass marks; the retake sets; table 0.B in full; the full key to
the §17 spiral; that the spiral and the quiz are outside the 45 minutes; the remediation addresses
above; the chapter's e-text corrections (table 0.E), listed once more for the editor.

**Payoff (plan).** Volume 3's sandhi chapter, re-read as Pāṇini's rules. **Main risk:** memorised
numbers with no grasp of the code — the rubric weights C and D over A.

---

## 5. (this chapter has no fifth lesson)

---

## 6. Pass C checklist

Every claim a citation reviewer must re-check before the lessons ship.

- **Sūtras (data file, by script):** every number and text printed in §§1–4 against
  `corp/ashd/sutraani/data.txt` — the chapter's tools 1.1.71, 1.3.3, 1.3.9, 1.1.50, 1.1.69, 1.1.9,
  1.1.70, 1.1.49, 1.1.66, 1.1.67, 1.3.10, 7.1.9; the owned re-reads and pointers 6.1.77, 6.1.78,
  6.1.101, 7.3.101, 8.4.40, 6.1.87, 6.1.88, 6.1.109, 8.3.23, 8.3.34, 3.4.86, 8.2.39, 1.1.11, 1.1.1,
  1.1.2, 1.1.51, 8.3.57, 8.2.66, 8.3.15, 8.2.30, 8.3.32, 1.1.45; the Teacher-Notes sūtras 1.3.2,
  1.1.10, 1.2.27, 1.1.55, 1.1.34, 7.1.25, 6.1.84, 1.1.72, 8.4.41, 8.4.68, 8.3.19, 6.1.92, 3.4.111,
  8.3.18, 8.4.50, 1.1.16, 6.1.127, 8.4.51, 3.2.168, 4.3.9, 8.3.7 and the 41 rules of table 0.B. The
  padaccheda case labels printed under 1.1.49, 1.1.66, 1.1.67, 7.1.9, 6.1.78 and in table 0.C
  against the `pc` field (row 0.19). The brackets [अचि], [आत्], [पूर्वः], [हलि], [खरि], [लोटः],
  [निर्दिष्टे] against the `an` field. Re-run `synth-work/sutras.py` after any change: c01.l01 4,
  l02 3, l03 5.
- **The fourteen sūtras:** table 0.A against [REF:maheshvarasutras] and the Kāśikā lines 139–270;
  sūtra 11's e-text slips (lines 249–250, 252).
- **Commentary lines (table 0.E):** every K and L line re-found character by character in
  `jvkasipu.htm` / `varlghku.htm` at the lines given; every correction listed in the Teacher Notes
  of the lesson that prints it; the plan's §4.6 spelling list to gain the new entries (§7,
  deviation 9). The three learner-text commentary lines (K1, L5, the Kāśikā on 6.1.77) with their
  Devanagari, pause forms and translations. Source line: "text of the GRETIL e-text"; no printed
  edition was opened.
- **The count of 41 (row 0.9, table 0.B):** re-add the per-sūtra counts from the Kāśikā lines;
  confirm the verse (lines 289–290) and the ñam line (227); confirm that ञमन्ताड्डः is in no data-file
  sūtra (grep: 0).
- **The 1.x quotations:** p. 69 (the legend), p. 70 (the memory aid), p. 71 (1.1.45), p. 95 ("~42"),
  p. 96 (चय्, झश्, जश्; the "CONTEXT … LAST occurrence" line), p. 89 (IR-021: "भू + ति → भवति (where
  गुण inserts व)" — the English words re-found by `pdftotext`; **confirm the Devanagari from the page
  image** before l03 prints it). Every quotation verbatim, with its page.
- **Whitney:** §20a, §21, §§32–35, §37, §126, §127, §129, §131, §329d, §733 (item 9), §735a — each
  opened for this note; the quoted words are his. Any further § a drafter adds (e.g. for the
  genitive/ablative syncretism in l03 §5) is cited only after it has been opened and says what it is
  cited for.
- **HISTORY:** Pāṇini's date ("around the 4th century BCE on the usual scholarly estimate;
  estimates vary") and "teachers … whom scholars take to be grammarians before him or of his time"
  against Cardona 1997 (or the evidence rule: search results quoting the book's own page; else the
  second clause drops to "other teachers of grammar" with no date claim); the authorship sentence
  of row 0.5 likewise. The Kāśikā's "c. 7th c. CE" and the LSK's "17th c." are the REFERENCES
  entries' dates.
- **Headwords:** the 13 against Apte (anusvāra spellings: अंत्य; the sense lines of दीर्घ, ह्रस्व,
  अक्षर n. "syllable") and MW (`<k1>` lookups recorded in §§1–3); ledger status re-run
  (`work/owned.py`; `ledger-entry-v4.tsv`).
- **Hindi:** the दीर्घ संधि / सवर्ण wording in Guru 1952 (row 0.25 (b)) or the fallback wording
  without the key; के स्थान पर, से पहले, के बाद (Kachru, bare); the Hindi terms against GLOSSARY.
- **IPA:** every headword and every sound of table 0.A against STYLE_GUIDE §2.
- **Walk check (taught-before):** every course-written line of §§1–4 re-walked for forms not yet
  taught (no oblique dual, no ordinal, no numeral above 10, no guṇa/vṛddhi definition, no लोपः as a
  taught word before c02.l02, no pronominal cell of पूर्व/उत्तर, no mixed-gender dual agreement);
  every seam against the Chapter 4 maps (row 0.20).
- **Station 0:** S0-bg, S0-bh, S0-bi re-diffed against v3.c06.l04 §20 and v3.c06.l05 §20 once those
  files exist; S0-ca … S0-ch printed verbatim in both lessons.

## 7. Open items for review

1. **Station 0 into Volume 4.** v3.c06.l05 is not on disk (l04 is, and S0-bg matches its §20) —
   corrected at review: it is now on disk, and S0-bh and S0-bi match its §20 verbatim; S0-bg, S0-bh, S0-bi are quoted
   from the Chapter 6 fact base (a first draft under verification). If Chapter 6 changes their
   wording, both this chapter's l01/l02 §3 and the c06 lessons' §20 follow the c06 lessons. The
   plan's §4.0.5 and l01/l02 blocks already state this chain (plan §7.6, first row).
2. **The authorship sentence of l01's HISTORY callout** (row 0.5) rests on Cardona 1997, not
   opened; if Pass C cannot confirm it under the evidence rule, the callout ends at "for the sake
   of the pratyāhāras" and keeps [REF:maheshvarasutras]; [REF:kashika].
3. **LSK e-text examples under 6.1.101** (*daityāraḥ*, *śrīśiḥ* for *daityāriḥ*, *śrīśaḥ*): not
   printed. Recommendation: add them to the §4.6 spelling list only if a later chapter prints them.
4. **Volume 1's legend text** (v1.c01.l02 §4: "preserved in a verse ascribed to Nandikeśvara …
   at the close of his cosmic dance … honoring the inventory's perfection") goes beyond what Volume 4
   prints (plan §7.3 Q2: no verse, no ascription without a citable edition; "perfection" is a claim
   STYLE_GUIDE §7 does not allow without a measure). It was not made false by this chapter, so it is
   not in §8's fixes. Recommendation: the editor decides whether a course-wide erratum aligns it
   with Q2 (e.g. "In a traditional telling, Śiva … sounded his drum fourteen times …", dropping the
   ascription and "perfection").
5. **The 1.x p. 96 "CONTEXT … LAST occurrence" line** (l02 §4, deviation 7): print in learner text
   or keep in Teacher Notes? Recommendation: Teacher Notes only (the plan lists three 1.x errors for
   this chapter; a fourth adds load without a lesson's need).
6. **The exam's minutes** (deviation 4): A 6, B 7, C 10, D 12, E 8 + 2 minutes of instructions, as
   the Volume 3 exams did; the plan's B 8 and E 9 assumed no instruction time.
7. **GLOSSARY terms this chapter adds or updates** (grammar terms, not ledger words; the Hindi
   column binding on the lessons from the first draft):
   - **माहेश्वराणि सूत्राणि** · *māheśvarāṇi sūtrāṇi* · "the fourteen sūtras (अइउण् … हल्),
     handed down at the head of the Aṣṭādhyāyī; the grammar's list of sounds" · माहेश्वर सूत्र ·
     v4.c01.l01
   - **इत्** · *it* · "a marker: a sound in a teaching that is not part of the form and is dropped
     (1.3.3, 1.3.9)" · इत् (चिह्न-वर्ण) · v4.c01.l01
   - **प्रत्याहारः** · *pratyāhāraḥ* · "a sound + a marker naming every sound from it up to the
     marker (1.1.71): अच्, हल्" · प्रत्याहार · v4.c01.l01
   - **उपदेशः** · *upadeśaḥ* · "a teaching: a list as first taught (the fourteen sūtras, the roots,
     the affixes), whose final consonant is a marker" · उपदेश · v4.c01.l01
   - **सवर्णम् / सवर्णः** · *savarṇa* · "of one family: the same place and the same effort (1.1.9);
     a short vowel in a rule covers its savarṇas (1.1.69)" · सवर्ण · v4.c01.l02
   - **तपरः** · *taparaḥ* · "a vowel written with त् after it: it stands for its own length only
     (1.1.70)" · तपर · v4.c01.l02
   - **उदित्** · *udit* · "a letter marked with उ (कु चु टु तु पु): it stands for its whole row
     (1.1.69)" · उदित् · v4.c01.l02
   - **स्थाने (षष्ठी)** · the case code — **षष्ठी** in a rule "in place of" (1.1.49); **सप्तमी**
     "before" (1.1.66); **पञ्चमी** "after" (1.1.67); **प्रथमा** "the result" · षष्ठी — के स्थान
     पर; सप्तमी — से पहले; पञ्चमी — के बाद; प्रथमा — परिणाम (आदेश) · v4.c01.l03
   - **आदेशः** (update or new) · *ādeśaḥ* · "substitute: what a rule puts in place of a sound or an
     affix" · आदेश · v4.c01.l03 (the ledger also counts the word: VLk-style double row, as v3.c04
     decision 3)
   - **यथासंख्यम्** · *yathāsaṃkhyam* · "in order: equal sets pair off one by one (1.3.10)" ·
     यथासंख्य · v4.c01.l03
   - **अन्तरतमः** · *antaratamaḥ* · "the most similar substitute (1.1.50)" · अन्तरतम · v4.c01.l01/l03
   - **updates:** **यण्** (+ "as a pratyāhāra: य व र ल, v4.c01.l01"); **पदच्छेदः** (+ "Volume 4:
     the word-by-word division printed under a sūtra, with each word's case, from v4.c01.l03");
     **ह्रस्व / दीर्घ** (+ "in a rule: दीर्घः the long vowel as a result, 6.1.101, 7.3.101");
     **हलन्त** (+ "the हल् is the pratyāhāra of all consonants, v4.c01.l01").
8. **REFERENCES:** no new key. `maheshvarasutras`, `kashika`, `laghukaumudi`, `ashtadhyayi`,
   `cardona1997`, `whitney1889`, `apte1890`, `monierwilliams1899`, `kachru2006`, `guru1952`,
   `cepeda2006`, `roediger2006`, `nation2013` exist (checked in REFERENCES.md). The
   `maheshvarasutras` entry ("prefixed to the Aṣṭādhyāyī tradition") agrees with row 0.5.

**Editor's decisions (2026-11-10, after the fact-base verification):**

1. **Station 0 into Volume 4 (item 1).** The chain stands as the plan's amended §4.0.5 states it.
   The wording of the three arriving items follows v3.c06.l04 §20 and v3.c06.l05 §20 as those
   lessons ship; Pass D of both chapters re-diffs them.
2. **The authorship sentence (item 2).** Pass C decides under the evidence rule (a hedged statement
   of scholarship may rest on search results that quote the source's own page, attributed and
   marked "search-confirmed; page not opened"). If it cannot be confirmed, the callout ends at
   "for the sake of the pratyāhāras" and keeps [REF:maheshvarasutras] and [REF:kashika].
3. **The LSK examples under 6.1.101 (item 3).** Not printed; they join the spelling list only if a
   later chapter prints them.
4. **Volume 1's legend text (item 4).** Reworded course-wide, applied with this fact base as an
   erratum to `curriculum/volume-1/chapter-01/lesson-02-the-sound-map.md` §4: "The Aṣṭādhyāyī is
   handed down with fourteen little sound-lists at its head — the varṇa inventory arranged so that
   a rule can name a whole span of sounds with a two-letter abbreviation." and, in the TRADITION
   callout, "In a traditional telling, Śiva danced and sounded his two-headed drum (ḍamaru)
   fourteen times — and from those fourteen beats Pāṇini received the fourteen sound-lists that
   stand at the head of his grammar. The tradition tells this as a story of inspiration." No
   verse, no ascription to Nandikeśvara, no "cosmic", no "maximum … efficiency", no "perfection"
   (plan §7.3 Q2; STYLE_GUIDE §7). Volume 1's register-sort cards on the legend are unchanged.
5. **The fourth 1.x line, p. 96 (item 5).** Teacher Notes only (lessons 1–2).
6. **The exam's minutes (item 6).** A 6, B 7, C 10, D 12, E 8, with 2 minutes of instructions
   inside the 45: accepted.
7. **GLOSSARY (item 7).** The rows and updates are proposed as exact fixes by Pass D and added
   when the chapter is reviewed.
8. **REFERENCES (item 8).** No new key.
9. **Class timing (found at verification).** The class plans of lessons 1–3 could not hold the
   exercises placed in them. Lesson 1: Ex 3 items (6)–(10) go to homework; the derivation with the
   teacher has four minutes before Ex 5. Lesson 2: 1.1.70 and the two ण् each have two minutes
   before their exercise. Lesson 3: Ex 7 goes to homework, where it replaces the reading of the
   table. In all three, §16 is not read in class (it was already a homework item). Self-study
   minutes are 45 · 40 · 45 · 40 (Pass B moved l01's Ex 2 to homework). Pass B re-times every slot again from the lessons as drafted.

### Deviations from the plan (with reasons) — for the plan's §7.6

1. **Station 0 entry** (row 0.30): l01 runs S0-bh (v3.c06.l05's +1 day) and S0-bg (v3.c06.l04's +1
   week); l02 runs S0-bi (v3.c06.l05's +1 week). The plan's §4.0.5 and l01/l02 blocks now say the same (amended
   from the v3.c06 fact base, plan §7.6 first row): the chain is no longer a deviation. review_of gains v3.c06.l04 (l01) and v3.c06.l05 (l02), so that §3 reaches
   every lesson it runs.
2. **Derivation tables** in the four-column format of §1.4.2 (Step · String · Sūtra · What happens)
   instead of the block's three columns; l02 (b)'s two-form table split into two tables. Same steps,
   same sūtras, same tiers.
3. **l03 model sentence 3's gloss** names 7.1.9: "'ataḥ' [in 7.1.9] is an ablative". Reason: the
   plan's own trap line — अतः is genitive in 7.3.101 — makes the bare gloss false of 7.3.101.
4. **Exam timing** A 6, B 7, C 10, D 12, E 8 + 2 minutes of instructions (plan: B 8, E 9, no
   instruction time); pass marks and points set (A 11/14, B 7/10, C 12/18, D 14/20, E 8/12; the
   plan gives none); the spiral placed after the sitting, unscored, in §17 (the five tasks fill the
   45 minutes; Q17: the thread verse is the only text the exam reads).
5. **Self-study minutes** 45 · 40 · 45 · 40 (the plan gives none; 40 · 40 · 44 · 40 before the class plans were re-timed: editor's decision 9).
6. **The pratyāhāra count's method** (row 0.9): the Kāśikā's own per-marker list and closing verse,
   each of the 41 cited rules found in the data file — not an independent scan of the sūtra text.
   Reason: an independent scan would have to recognise every inflected pratyāhāra in 3,983 sūtras
   (इकः, अचि, यञि …) and would still need the Kāśikā to decide the two ण्; the Kāśikā's list is a
   source with a stated method. The learner-facing count is attributed: "By its count there are 41."
7. **A fourth 1.x line found** (p. 96: "Panini uses CONTEXT to disambiguate. The paribhāṣā
   'आदिरन्त्येन सहेता' tells you to read with the LAST occurrence of the marker that produces a
   meaningful group"): wrong on both counts (1.1.71 says nothing of which ण्; the Kāśikā's rule is
   the first ण् for every अण् but one). Recorded for §4.0.4; Teacher Notes of l01–l02; learner text
   only if the editor approves (open item 5: Teacher Notes only, editor's decision 5).
8. **A third commentary line in learner text** (l03 §4: the Kāśikā on 6.1.77, *aci parataḥ iko
   yaṇādeśo bhavati*), beside the plan's K1 (l01) and the LSK place list (l02, L5). Reason: it shows
   the case code at work in the tradition's own words and is the source of the compound यणादेशः,
   which the plan's model sentence 4 attributes to the Kāśikā. Its words are not assessed.
9. **E-text corrections not on the plan's §4.6 list** (to be added there): Kāśikā *dhakareṇa* →
   *chakāreṇa* (line 252, the same slip as sūtra 11's *dha*); *updiśya* → *upadiśya* (147);
   *ṅakaraḥ* → *ṅakāraḥ* (3469); *vartte* → *vartate* (3464); *antaratam* → *antaratama* (1356); *madyapatitānāṃ* → *madhyapatitānāṃ* (1759); *prayarnaṃ* →
   *prayatnaṃ* (488); *spaṛṣṭata-* → *spṛṣṭatā-* (495); *tapro* → *taparo* (1744); the split marks
   *sthāne-yogā-iva*, *pūrvasya-iva*, *uttarasya-iva* read as *eva* (1335, 1676, 1684); the verse's
   *ṅañaṇAvaṭā* → *ṅañaṇavaṭā* and *dvābhāṃ* → *dvābhyāṃ* (289); *antaratam ādeśo* → *antaratama ādeśo* (1356); LSK *sahati* → *sahita* (VLk 4, line 124), *avyavahatisya*
   → *avyavahitasya* (VLk 16, line 162), *rāmairḥ* → *rāmaiḥ* (VLk 142, line 553); and, printed silently above and now listed: Kāśikā *antaratam ādeśo* → *antaratama ādeśo* (1356, K11), *vartte* → *vartate* (3464, K16), *grahanam* → *grahaṇaṃ* (1740, K6), *avarṇa prayoge* → *avarṇaṃ prayoge* (142, row 0.24), the verse's *dvābhāṃ* → *dvābhyāṃ* (289), and on 1.3.10 *samasaṅkhyānaṃ* → *samasaṅkhyānām*, *yathā-kramamauddeśibhir* → *yathākramam uddeśibhir* (3612, row 0.18, where the omitted *samaparipahitānām* is marked "…"). (The plan's
   *ekenauran rapraḥ* and sūtra 11's *kha pha dha ḍha tha* are already listed.)
10. **The l01 grammar point's sūtra 11 description** made exact: "the voiceless stops (11–12:
    aspirated ख फ छ ठ थ and unaspirated च ट त in 11; क प in 12)" — the plan's "then the voiceless
    stops" is kept, with the mix stated (row 0.12).
11. **Two owned tapara items added to l02's sort** (ईत्, ऊत् of 1.1.11) and **7.1.9 named in the
    अत् row as a pointer** (the Kāśikā's own tapara example). No tool added; 1.1.11 is owned and
    7.1.9 is l03's D.
12. **S0-cc avoids the ◐ dual endings** (-वः, -थः): its eight endings are -मि -मः -सि -थ -ति -तः
    -महे -ध्वे, all ✓ cells (Station 0 keys score ✓ items only).
13. **The plan's l01 §17 "LSK opens with … (VLk 1, 3, 4)"** is printed as "three of today's tools"
    (as the review's c01:E#12 / P#14 fix already says); no change, recorded for completeness.
14. **The pratyāhāras opened for the learner** (corrected at review): fifteen readings — अच्, हल्,
    इक्, यण्, अक्, एच्, एङ्, यञ्, झल्, जश्, झश्, चय्, इण् and अण् two ways. The plan's inventory also
    names अट्, खर्, चर्, शर्; no lesson opens them in learner text, so they stay in Teacher Notes
    (the Kāśikā's list), and the exam's task B and its retake set use none of them.
15. **Quiz options re-ordered in all four lessons** (after the review, before the post-fix check):
    the quiz listings of §§1–4 above keep the order in which the items were drafted; in the lessons
    the options of some items stand in another order, so that the correct answers are spread over
    the letters — each letter is the key two to four times in ten questions and no three questions
    in a row have the same key (l01: 1c 2c 3b 4d 5a 6c 7b 8a 9d 10b · l02: 1b 2a 3d 4a 5c 6c 7b 8d
    9b 10a · l03: 1c 2d 3b 4a 5c 6b 7a 8d 9b 10c · l04: 1c 2d 3b 4a 5c 6b 7d 8b 9a 10c). The texts
    of the stems, the options and the explanations are unchanged; the lesson is the binding copy
    of the order. The rule is course-wide from this chapter on (STYLE_GUIDE).

**Corrections for the plan's §7.6 table (what later chapters need) — entered in the plan on 2026-11-10 as below:**

| From | The plan says | Correction (where it matters next) |
|---|---|---|
| v4.c01 fact base (2026-11-10, verified) | §4.0.5: the entry pattern of each chapter | Confirmed against v3.c06.l04 §20 and v3.c06.l05 §20. Every later chapter's entry follows the pattern: c02.l01 runs c01.l04's +1-day item and c01.l03's +1-week item; c02.l02 runs c01.l04's +1-week item. |
| v4.c01 fact base | §4.6, the spelling list of the e-texts | Add the Kāśikā and Laghusiddhāntakaumudī corrections of the c01 fact base's deviation 9 (Kāśikā lines 147, 252, 289, 488, 495, 1335, 1356, 1676, 1684, 1744, 1759, 3464, 3469; LSK lines 124, 162, 553). A commentary line is copied character by character and every correction is listed; none is made silently. |
| v4.c01 fact base | §4.0.4, the 1.x rows of Chapter 1 | A fourth 1.x line on p. 96 ("CONTEXT … LAST occurrence") is wrong; it is corrected in Teacher Notes of c01.l01–l02 only (editor's decision 5). |
| v4.c01 fact base | §1.1 principle 4 and §4.0.4 on the "~42 pratyāhāras": "the c01 fact base counts the pratyāhāras of the sūtra text" | The count printed is the Kāśikā's own: 41 named marker by marker and confirmed by its closing verse; it notes ञम् apart, and under लण् that the र of 1.1.51 names र and ल. The 1.x "~42" is quoted beside it as a count given without its method; it is not called an error. c06 and later chapters cite the count so, never as an independent figure. |
| v4.c01 fact base | §1.4.2 example and the lesson blocks' three-column derivation tables | Every derivation is printed in four columns (Step · String · Sūtra · What happens); a block's three-column table is read with "What happens" supplied. |
| v4.c01 fact base | the tapara examples | The Kāśikā's own example under 1.1.70 is 7.1.9 (वृक्षैः against खट्वाभिः): c01.l02 names it and c06.l01–l02 may read it. The आत् of 6.1.87 आद्गुणः is NOT a tapara letter: it is the ablative of अ ("after an a-vowel") and covers अ and आ by 1.1.69, which is the Kāśikā's first example under 1.1.69. The tapara आत् is that of 1.1.1 वृद्धिरादैच् (c02.l02). |
| v4.c01 fact base | c01.l03: देव + भिस् → देवैः keeps the final स् of भिस् and ऐस् | By 1.3.4 न विभक्तौ तुस्माः the final dental, स् or म् of a case or verb ending is not a marker. c01.l03 prints one labelled preview line and keeps the sūtra in Teacher Notes; c02.l01 is its home, as the plan has it. |
| v4.c01 fact base | the seam स इत् (सः before a vowel) | It is not 6.1.132, which drops the ending of सः and एषः only before a consonant; before a vowel other than अ, सः follows the ordinary rule for -अः before a vowel, as Volume 3 Chapter 4 taught it. |
| v4.c01 fact base | the thread verse's दुःखभाग्भवेत् | 8.2.30 चोः कुः gives ग् for the ज् of -भाज्; the pause form -भाक् comes from 8.4.56 वाऽवसाने and is optional. Chapter 5's consonant stems follow this. |
| v4.c01 fact base | the exam shapes of §4: "pass: every task at its pass mark" | As in every Volume 3 chapter frame, the pass is every task at its pass mark and the §19 quiz, taken after the sitting, at 7/10. Each later chapter exam says so. |
| v4.c01 fact base | the lesson blocks give no class plan and no self-study minutes | Self-study minutes of Chapter 1: 45 · 40 · 45 · 40. A fact base times each class slot from the exercises it places there before it fixes the plan (the c01 verification found three class plans that could not hold their exercises); a conversation that does not fit is a homework item. |

---

## 8. Errata to shipped files

### (a) Lines now false, with exact mechanical fixes

Searched 2026-11-10: every file of curriculum/volume-1, volume-2 and volume-3 (chapters 1–5; the
c06 lessons are not on disk) for "Volume 4", "v4.c01", "v4)", "for v4", "Māheśvara", "maheshvara",
"fourteen", "pratyāhāra", "प्रत्याहार", "sound-list", "Śiva", "drum", "1.1.45", "6.1.77", "7.1.9",
"1.1.34", "7.1.25", "-ऐः", "yañ", "the name of the sound set"; and the plan's §4.0.6 rows for
c01. One line is now contradicted by what this chapter prints:

| File | Quote (verbatim, unique in the file) | Replacement |
|---|---|---|
| curriculum/volume-1/chapter-01/lesson-02-the-sound-map.md (§4, l. 407) | `The Aṣṭādhyāyī opens with fourteen little sound-lists — the varṇa inventory arranged for` | `The Aṣṭādhyāyī is handed down with fourteen little sound-lists at its head — the varṇa inventory arranged for` |

Reason: v4.c01.l01's HISTORY callout (row 0.5) says the fourteen sūtras are handed down with the
Aṣṭādhyāyī, at its head, but are not among its numbered rules (the data file's 3,983 entries; the
Kāśikā's introduction). "Opens with" makes them the grammar's first rules. (The same line continues
"maximum rule-writing efficiency", a scale word STYLE_GUIDE §7 does not allow; it is not false
because of this chapter; the editor's decision 4 rewords it in the same erratum.) Applied on 2026-11-10 together with the editor's decision 4, which rewords the rest of the
sentence and the TRADITION callout beneath it (the text is in §7).

### (b) Promises and pointers this chapter redeems — checked, unchanged (still true)

| File | Line (as it stands) | Why it stays true |
|---|---|---|
| volume-1/chapter-02/lesson-01-i-and-ii.md (§4, l. 118–119; §27, l. 811) | "How Pāṇini *uses* the ordering — naming whole spans of sounds with two-letter abbreviations — gets its full treatment in Volume 4." · "the pratyāhāra system (§4) in Volume 4" | v4.c01.l01 |
| volume-1/chapter-02/lesson-02-u-and-uu.md (§4, l. 110–112) | "the final ण् is a marker letter, a filing device explained in Volume 4" | v4.c01.l01 (1.3.3) |
| volume-1/chapter-02/lesson-03-the-vowel-r.md (§4, l. 104–107; §27, l. 855) | "the fourteen sound-lists that open the Pāṇinian tradition" · "sūtras (§4) get their full treatment in v4.c01" | "open the tradition" (not "the Aṣṭādhyāyī") stays true; v4.c01 |
| volume-1/chapter-02/lesson-04-e-and-ai.md (§4, l. 115–118) | "The Māheśvara sūtras, the sound-catalogue prefixed to Pāṇini's grammar, seat them apart" | prefixed: true |
| volume-1/chapter-02/lesson-05-o-and-au.md (§4, l. 103–107; §27, l. 761) | "the fourteen sound-list sūtras prefixed to Pāṇini's grammar" · "Māheśvara-sūtra system in v4.c01" | true |
| volume-1/chapter-01/lesson-02-the-sound-map.md (§4 TRADITION callout, l. 411–416) | the legend, "a verse ascribed to Nandikeśvara" | attributed TRADITION, not made false by this chapter; reworded by the editor's decision 4 (no verse, no ascription, no "cosmic", no "perfection"), applied with this fact base |
| volume-1/chapter-01/lesson-05-review-and-assessment.md (task D, card 4); volume-1/chapter-02/lesson-07-review-and-assessment.md (task D, card 2) | the legend as a card in a register sort | Volume 1's sort assesses the register of the claim, not the legend's content; Volume 4 assesses nothing of it. Unchanged |
| volume-3/chapter-01/lesson-05-cases-exam.md (§22, l. 1122–1124, l. 1269) | "*sup* is a pratyāhāra … The pratyāhāra mechanism is v4.c01's; do not teach it now" · "v4.c01 (pratyāhāras)" | v4.c01.l01 teaches the mechanism; *sup* itself is expanded in c02.l01 (plan) — the line names the mechanism only |
| volume-3/chapter-03/lesson-01-we-go.md (§15, l. 668–669; §22, l. 1122; §27, l. 1292) | "Read it as a label: अतः 'of a short a', दीर्घः 'long', यञि 'before the yañ sounds'. The name of the set of sounds is not analysed here; Volume 4 reads such names." · "(v4.c01)" · "v4.c01 (the sound-set names)" | v4.c01.l02 reads यञ्; "of a short a" is the genitive reading l03 confirms |
| volume-3/chapter-04/lesson-01-when-vowels-meet.md (§15 Step 4) | "**Corrected in the open:** इको यणचि is 6.1.77 — the 1.x book cited 1.1.45." | v4.c01.l01 repeats it with 1.1.45's own text |
| volume-3/chapter-04/lesson-01-when-vowels-meet.md (§15 Steps 1–6) | the TRADITION lines of 6.1.101, 6.1.87, 6.1.88, 6.1.77, 6.1.78, 6.1.109 | consistent with table 0.C and the l04 keys; their wording is the "Volume 3 wording" the exam re-derives |
| volume-3/chapter-04/lesson-04-unjoining.md (l. 678–702, 1023) | "Inside a word — named here, taught in Volume 4" · "भवति = भो + अति (Volume 4)" | v4.c01.l03 (the last step), c02.l02 (the ओ) |
| volume-3/chapter-02/lesson-05-roles-map-exam.md (§22, l. 1202) | "The recurring-endings exception -ऐः: 7.1.9 अतो भिस ऐस्." | Teacher Notes there; v4.c01.l03 brings 7.1.9 into learner text (D) |
| volume-3/chapter-05/lesson-02-this-that-which.md (§22, l. 1259–1262) | 1.1.34 and 7.1.25 in Teacher Notes | v4.c01.l03 keeps both in Teacher Notes (plan §4.0.6), with the review's contrast wording |
| volume-2/chapter-04 (the ष of करोषि "waits for Volume 4") | unchanged | c02.l03's, not this chapter's |

### (c) What `curriculum/volume-4/volume.md` and the plan's §7.6 must say when the chapter ships

- **volume.md, Chapter 1 delivered:** four lessons — the fourteen sūtras and the pratyāhāra
  (1.1.71; the marker, 1.3.3 and 1.3.9); savarṇa and tapara (1.1.69, 1.1.9, 1.1.70); the case code
  (1.1.49, 1.1.66, 1.1.67, with 1.3.10, 1.1.50 and 7.1.9); the Chapter 1 exam (one 45-minute
  sitting, Station 0 outside it) in which the owned vowel joins are re-derived according to
  Pāṇini. T9 memorised. The toolbox after Chapter 1: **12** tools. The ledger: **521** (13
  ledger-new: 508 → 513 → 517 → 521 → 521). The 1.x errors corrected in the open: IR-017 (6.1.77,
  not 1.1.45), IR-018 (चय्, झश्/जश्, the memory aid), and the "~42 pratyāhāras", a count
  printed without its method (quoted beside the Kāśikā's own count, 41 by its list, with ञम् and the र of 1.1.51 noted apart, printed with its method). The legend kept as TRADITION, labelled,
  never assessed (IR-036). The first step of the भवति thread taken (भो + अति → भवति, 6.1.78 with
  1.3.10).
- **volume.md, the Station 0 sentence:** "Station 0 enters Volume 4 as Volume 3 booked it:
  v4.c01.l01 runs the Volume 3 exam's +1-day item and v3.c06.l04's +1-week item; v4.c01.l02 runs
  the exam's +1-week item."
- **The plan's §7.6:** the six rows of the table above (Station 0 entry; the spelling list; the
  fourth 1.x line; the count's method; the four-column derivation tables; the Kāśikā's tapara
  example), with "From: v4.c01".

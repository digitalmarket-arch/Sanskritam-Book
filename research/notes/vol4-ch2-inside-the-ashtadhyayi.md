# Research notes — Volume 4, Chapter 2 (अष्टाध्यायीप्रवेशः — Inside the Aṣṭādhyāyī)

Fact base gathered **before** drafting v4.c02, the second chapter of Volume 4 (पाणिनीयम् · The
Pāṇinian System). Its binding contract is the volume plan (`research/notes/vol4-plan.md`): §4.2
with its four lesson blocks; §1.1 (derivation first; the altitude rule; the five tiers); §1.2 (the
rows "Terms prakṛti, pratyaya, it, aṅga, pada, bha, prātipadika", "ādeśa / āgama / lopa",
"anuvṛtti, adhikāra", "राजन् and the consonant stems"); §1.3 (no memorised table in this chapter;
the राजन् Δ of T11 is c05.l03's); §1.4 (the tiers and the budget; the fixed derivation format; the
bracket line of §1.4.3, which this chapter switches on in l03; Teacher-Notes sūtras; the fixed
English terms of §1.4.4); §1.5 (the grammarians' line for c02; the भवति thread's rows for
c02.l01–l03; the नमस्ते thread, concluded); §2 (entry; exit can-dos 3, 10, 13, 14); §3 (ledger rules
16–23; the figures 6 · 5 · 5 · 0, exit 537; "tools added" 13 · 8 · 10); §4.0 (glance rows),
§4.0.1 (the rows on the architecture, *sup*, the rājan example and internal sandhi), §4.0.2 (the
rājan row, pp. 97–99), §4.0.3 (the c02 rows and the Totals paragraph), §4.0.4 (IR-016, IR-021, the
two "new (review)" rows on p. 89 and p. 98), §4.0.5 (Station 0; the derivation spiral for c02.l04),
§4.0.6 (6.4.71 · 6.4.72, 8.3.15, 6.1.113–114, 8.4.1–2 with 8.4.37, 8.3.59), §5 (no text: Q17), §6,
§7.3 (Q3, Q8, Q17), §7.5 (the 25 confirmed Chapter 2 findings and the four rejected ones, all
already applied in the plan text, none re-introduced here) and §7.6 (the eleven rows "v4.c01 fact
base", followed below). Where the plan is wrong or incomplete, this note corrects it and lists the
correction in §7 for the plan's §7.6.

The chapter teaches four things, one per lesson. **l01** — a word is a base (प्रकृतिः) plus an
affix (प्रत्ययः) placed after it, its markers dropped; the base is aṅga before any affix, and before
case endings it is also pada or bha (राम + सुँ → रामः; नमस् → नमः; राजन् → राजभिः, राज्ञा; the 1.x
rājan card corrected in the open). **l02** — a rule replaces (आदेशः), adds (आगमः) or deletes (लोपः);
guṇa and vṛddhi are names of substitutes (1.1.1–3); सूर्योदयः and अगच्छत् derived; IR-021 and the
rest of the 1.x p. 89 card corrected in the open. **l03** — words carried down (अनुवृत्तिः) and
headings (अधिकारः), on the material of ṇatva (रामेण) and ṣatva (रामेषु, करोषि); from this lesson the
data file's anuvṛtti and adhikāra fields are printed in the bracket line; IR-016 corrected in the
open. **l04** — the Chapter 2 exam, one closed-book sitting of 45 minutes (Station 0 before it and
outside it).

**Sources checked locally (read-only), 2026-11-10.** The Aṣṭādhyāyī data file
(`corp/ashd/sutraani/data.txt`): every sūtra number, text, padaccheda (`pc`), kind (`type`),
anuvṛtti (`an`) and adhikāra (`ad`) printed below was looked up by script
(`scratchpad/v4c02/sl.py`, the c01 lookup unchanged); 72 numbers in all. The Kāśikā (`jvkasipu.htm`):
the comment under every sūtra this chapter prints (line numbers in table 0.E). The
Laghusiddhāntakaumudī (`varlghku.htm`): VLk 93, 133–150, 163–165, 180, 235, 248–249, 268, 373 (lines
398–622, 666, 843, 882–886, 947, 1283). The Mahābhāṣya (`pmbhassu.htm`): its header (line 40,
"BOLD for Kātyāyana's Vārttikas"), Paspaśāhnika 3 (lines 144–147), the "bhagavān kātyaḥ" line
24006. Whitney 1889 by chapter: §§180–181, 189–191 (`07_…EUPHONIC_COMBINATION.md`, lines
1349–1560), §235 (the same file, line 2384 ff.; the e-text prints the section number as "255", between
§234 and §236 — it is §235), §§420–424 (`09_…NOUNS_AND_ADJECTIVES.md`, lines 4271–4490). Apte 1890
and Monier-Williams 1899 for all 16 headwords and the upgrade गुणः. The Hitopadeśa (`hitop_u.htm`) for
every attestation printed in a headword row. The entry ledger
(`scratchpad/ledger-entry-v4c02.tsv`, 959 rows; 521 readable words, the v4.c01 exit as planned) and
the plan's `work/owned.py` for ledger status. The 1.x book (`Sanskritam-Curriculum.pdf`): pp. 73–74,
89, 97–99 by `pdftotext -layout`, and, because the text layer garbles Devanagari (it prints
"िू + भत → िवभत" for भू + ति → भवति), **from rendered page images** (pp. 73, 89, 98, at 110 and 250
dpi): every 1.x quotation below is read from the image.

**The previous chapter is not on disk as lessons.** `curriculum/volume-4/chapter-01/` now holds
`chapter.md` and lessons 01–04. The three Station 0 bookings that arrive in this chapter (S0-cf,
S0-cg, S0-ch) are quoted verbatim from the c01 fact base (`research/notes/vol4-ch1-the-fourteen-sutras.md`,
table 0.D and its keys, verified 2026-11-10) and were re-diffed against the lessons on 2026-11-10:
S0-cf matches `lesson-03-how-a-rule-speaks.md` §20 (l. 1014) verbatim; S0-cg and S0-ch match
`lesson-04-chapter-one-exam.md` §20 (l. 1073–1074) verbatim. If those §20s change, l01–l02 §3 follow them.

**The plan's scripts, re-run 2026-11-10** (from the repository root, `SANSKRITAM_LOCAL` = this
session's scratch folder): `work/hw.py` — v4.c02.l01 6 (521 → 527: राजा प्रत्ययः प्रकृतिः आत्मा
स्वामी भृत्यः), l02 5 (527 → 532: लोपः आगमः वृद्धिः हानिः कोपः), l03 5 (532 → 537: अनुवृत्तिः
अधिकारः समानः निमित्तम् कारणम्), l04 no headword line; total 119, exit 627. `work/chk_ledger.py` —
dups none; one flag outside this chapter (`OWNED? v4.c03.l05 मा भैषीः`, the owned मा of the chunk,
known to the plan); chain exit 627. `synth-work/sutras.py` — missing in data file: none; 238 sūtras,
D 121 · K 51 · B 26 · Q 25 · R 11 · owned 4; tools added v4.c02.l01 13, l02 8, l03 10 (43 after the
chapter). **This note changes no headword, tier or count**, so the arithmetic stands as the plan has
it; `git status` shows the plan unchanged.

**Labels used in this note.** Station 0 items: S0-cf, S0-cg, S0-ch (arriving from Chapter 1, the c01
fact base's labels) and **S0-da … S0-dh** (booked in this chapter). Commentary lines: **K1–K40**
(Kāśikā), **L1–L9** (Laghusiddhāntakaumudī), **M1–M3** (Mahābhāṣya), table 0.E. Derivations: **D-a …
D-q**, table 0.F. Learner-facing pages never print these labels or any row number of this note.

---

## 0. Chapter-wide facts and policies

| # | Claim | Register | Source | Notes |
|---|---|---|---|---|
| 0.1 | **Status marks and tiers** — unchanged from Chapter 1 (c01 fact base row 0.1): ✓ productive · ◐ recognition (never demanded, never scored) · ○ display. Tiers Q, B, D, K (this chapter has K for the first time: 1.2.45, 1.1.43 in l01; 1.1.51 in l02), no R. A **K** sūtra is printed on a reference card (number, text, one English line) and is never assessed; a **D** sūtra is printed with number, text and one English line beside the derivation step it licenses, never recalled by number. | policy | plan §1.1 principle 9, §1.4.1 | — |
| 0.2 | **Printing** — unchanged from Chapter 1 (row 0.2 there; STYLE_GUIDE §3.1): every course-written line joined, with its pause form beneath, IAST, English (and Hindi where the section is not Hindi). Stops: daṇḍa, "?", "!", comma, the speech-frame dash, the closing quotation mark before इति. A sūtra is printed as the data file has it, and stays so in a pause-form line. A derivation shows its seams (राम + सुँ) and ends on the joined word in bold. A compound is one word in the pause form, members hyphenated (राम-शब्दे). **A parenthesis directly after a Devanagari word holds that word's IAST and nothing else**; a note in objectives, tables, callouts and keys goes in square brackets or after a dash. | policy | STYLE_GUIDE §3.1; plan §1.1 principle 11; task brief | — |
| 0.3 | **What is allowed in this chapter's taught text.** Everything of Chapter 1's row 0.3 (all Volume 3 ✓; pratyāhāra names, इत् and the -कार sound names as labels; the case code; derivation tables written by the learner). **Plus, from l01:** the terms प्रकृतिः, प्रत्ययः (headwords), अङ्गम्, पदम् (owned v3.c04.l04 as "word"; now also the name), भम्, प्रातिपदिकम् (K), सर्वनामस्थानम् (K) as labels; affix names with their markers as labels (सुँ, भिस्, टा, अम्, सुप्; inflected as labels: सुः, सुरिति); **three राजन् cells derived** (राजभिः, राज्ञा, and राजा as a headword nominative) and usable in sentences; every other राजन् cell ○ display (Whitney §424 table, c05.l03). आत्मा and स्वामी: nominative only (rule 14); आत्मानम्, स्वामिना etc. are ○. **From l02:** आदेशः (owned c01.l03), आगमः, लोपः, गुणः, वृद्धिः as terms; the laṅ forms of owned verbs as derived forms. **From l03:** the bracket line (row 0.18); the terms अनुवृत्तिः, अधिकारः, णत्वम्, षत्वम् (the last two glossed labels, never counted: rule 20 counts a term only when headworded); रेफः "the letter r" display; the passive-looking अनुवर्तन्ते / अनुवर्तते display ○ (a middle present of अनु + वृत्; not a headword). **Not allowed anywhere in the chapter:** any other consonant-stem cell as ✓ (स्वामिना, आत्मनः, पक्षिणः are ○ or R1 ◐, labelled); the f. i-stem cells beyond nom./acc./instr. (प्रकृतेः in l01 model sentence 2 is ◐, labelled as the plan has it; वृद्धेः, हान्याः etc. never). | policy | plan §1.2, §2.1, §3 rule 14 | Volume 3 entry ledger: f. i/u-stems ✓ only in nom./acc./instr. |
| 0.4 | **The word anatomy (l01; the chapter's first card).** A form = प्रकृतिः "base" + प्रत्ययः "affix", the affix placed after the base (3.1.1–2), its markers (इत्) dropped (1.3.2, 1.3.3, 1.3.9). The base a case ending is added to is a प्रातिपदिकम् "nominal base" (1.2.45, K: "a meaningful form that is not a root and not an affix"). Before **any** affix the base is called अङ्गम् (1.4.13). TRADITION, attributed ("According to Pāṇini, …"). FACT beside it: Whitney names the same parts "root", "stem" and "ending" without the tradition's names (§§420–424 use "stem" and "case-ending"). | TRADITION; FACT | [REF:ashtadhyayi 3.1.1]; [REF:kashika 3.1.1]; [REF:kashika 3.1.2]; [REF:kashika 1.4.13]; [REF:kashika 1.2.45]; [REF:whitney1889 §421] | K1–K5. Fixed English (plan §1.4.4): base · affix · marker · aṅga (the base before an affix). |
| 0.5 | **The markers of the sup affixes (l01; plan block, review c02:E#0).** (i) The **nasal vowel** of an affix as first taught is a marker: 1.3.2 उपदेशेऽजनुनासिक इत् (B). So the उँ of सुँ, and of रुँ (8.2.66), is a marker, dropped by 1.3.9 (owned B from c01.l01). **The nasality is not visible in the plain text of 4.1.2**: the tradition declares it — the Kāśikā under 1.3.2: *pratijñānunāsikyāḥ pāṇinīyāḥ* "the Pāṇinīyas [know] the nasality by declaration" (K3, e-text *pratijña-anunāsikyāḥ*); the data file's padaccheda of 4.1.2 prints सुँ and ङसिँ. One learner line (l01 §15): "The उ of सुँ is nasal (उँ): the tradition says so; the printed rule does not show it." (ii) **The other endings' markers, in one line** (the plan's line, verbatim in substance; its sūtras): the initial ज् of जस् and ट् of टा are markers (1.3.7 चुटू, Teacher Notes); the initial श् of शस् and ङ् of ङे, ङसिँ, ङस्, ङि are markers (1.3.8 लशक्वतद्धिते, *preview*, c03.l02); the **final** स् of भिस्, भ्यस्, जस्, ङस्, ओस् and the म् of अम्, भ्याम्, आम् are **not** markers: in a case or verb ending a final dental, स् or म् is kept (1.3.4 न विभक्तौ तुस्माः, Teacher Notes; the Kāśikā's own examples, K4: *vṛkṣāt* (the त् of आत्), *brāhmaṇāḥ* (the स् of जस्), *pacataḥ*, *apacatam*). So अम् keeps its म्, भिस् stays भिस्, and सुप् loses only its प् (1.3.3, owned). | TRADITION | [REF:kashika 1.3.2]; [REF:kashika 1.3.4]; data file 13002, 13004, 13007, 13008, 41002 | 1.3.4, 1.3.7 are Teacher-Notes sūtras (no tool, no count); 1.3.8 prints by number only as a labelled preview (plan §4.0.3 Totals counts it nowhere; its first tier is c03.l02). |
| 0.6 | ***sup* is a pratyāhāra (l01; the Volume 3 §6 row, plan §4.0.1).** From सुँ, the first ending of 4.1.2, to the final marker प् of सुप्, the last, it names all twenty-one case endings (1.1.71, owned Q from c01.l01). The Kāśikā lists *sup* among its own examples of 1.1.71 (c01 fact base row 0.8, K15). 4.1.2 is shown as the owned picture of v3.c01.l05 §15, as a display line with no tier (plan §4.0.3 Totals: "4.1.2 in c02.l01"). Volume 3's line "do not say 'from its last syllable'" (v3.c01.l05 §22) holds: the प् is a marker, not a syllable. 2.4.82's सुपः and l03's "plural sup" (7.3.103's बहुवचने with the carried सुपि) use it. | TRADITION | [REF:ashtadhyayi 1.1.71]; [REF:ashtadhyayi 4.1.2]; [REF:kashika 1.1.71] | 21 = 7 cases × 3 numbers: count of the endings in the data file's padaccheda of 4.1.2 (21 items, सुँ … सुप्). |
| 0.7 | **aṅga, pada, bha (l01).** 1.4.13: the base, from where the affix is enjoined, is aṅga before that affix (K5: *yasmāt pratyayo vidhīyate dhātor vā prātipadikād vā tad-ādi śabda-rūpaṃ pratyaye parato 'ṅgasañjñaṃ bhavati*). 1.4.17 स्वादिष्वसर्वनामस्थाने (Q): before the endings from सुँ on that are not sarvanāmasthāna, [the base is] pada. 1.4.18 यचि भम् (Q): before such an ending that begins with य or a vowel, [the base is] bha, an exception to 1.4.17 (K7: *pūrveṇa padasañjñāyāṃ prāptāyāṃ tad-apavādo bhasañjñā vidhīyate*). **The e-text has no comment under 1.4.17** (lines 5661–5666 hold only the heading): its English line follows the Kāśikā's restatement under 1.4.18 (K7, line 5674: *svādiṣv asarvanāmasthāne iti vartate*) and the LSK under 1.4.17 (L5, line 619: *kappratyayāvadhiṣu svādiṣv asarvanāmasthāneṣu pūrvaṃ padaṃ syāt*). **The LSK's *kappratyayāvadhiṣu*** ("the affixes from su up to kap", 5.4.151): 1.4.17 also covers the taddhita affixes up to kap — Teacher Notes only (the learner meets case endings only; the Kāśikā's examples of 8.2.7 *rājatā, rājataraḥ* show it, c04.l03). **sarvanāmasthāna** (1.1.43 सुडनपुंसकस्य, K): the first five endings, सुँ औ जस् अम् औट् (सुट्, a pratyāhāra of 4.1.2 from सु to the ट् of औट्), except after a neuter; the Kāśikā's examples are राजन्'s own cells: *rājā, rājānau, rājānaḥ / rājānam, rājānau / suṭ iti kim? rājñaḥ paśya* (K6). These five are the "strong" endings; their effect (6.4.8, the lengthened अ) is display until c05.l03. **The vocative** (sambuddhi, 2.3.49) is outside this lesson: not sorted. | TRADITION | [REF:ashtadhyayi 1.4.13]; [REF:ashtadhyayi 1.4.17]; [REF:ashtadhyayi 1.4.18]; [REF:ashtadhyayi 1.1.43]; [REF:kashika 1.4.18]; [REF:kashika 1.1.43]; [REF:laghukaumudi on 1.4.17] | Data file: 1.4.17 an पदम् (1.4.14); 1.4.18 an स्वादिषु, असर्वनामस्थाने (1.4.17); both ad आकडारात् एका संज्ञा (1.4.1: Teacher Notes). |
| 0.8 | **The राजन् paradigm (Whitney §424; FACT), cell by cell, with the name of the base before each ending (TRADITION).** Table 0.A. Three cells are derived in l01 (राजभिः, राज्ञा; राजा as display steps); the full table is ○ display (✓ in c05.l03). Whitney §421: "In the strong cases of the masculine, the vowel of the ending is prolonged to आ ā; in the weakest cases it is in general struck out altogether; in the middle cases, or before a case-ending beginning with a consonant, the final न् n is dropped. The न् n is also lost in the nom. sing. …" §421b: "In the loc. sing., also, the a may be either rejected or retained." Whitney's "strong / weakest / middle" = the tradition's strong / bha / pada (the same three sets of endings for a masculine; FACT beside TRADITION, both printed). Whitney prints the final -स् of endings (राजभिस्, राज्ञस्); the course prints the visarga (राजभिः, राज्ञः), as Volume 3 did. | FACT; TRADITION | [REF:whitney1889 §421]; [REF:whitney1889 §424]; [REF:ashtadhyayi 1.4.17]; [REF:ashtadhyayi 1.4.18] | Every cell of table 0.A re-read in the local Whitney (lines 4303–4490). |
| 0.9 | **The three operations (l02).** A rule **replaces** (आदेशः, "substitute"; what it replaces is named in the genitive, 1.1.49, owned Q from c01.l03), **adds** (आगमः, "augment"; where it goes is shown by its own marker: ṭ-marked at the beginning, k-marked at the end of the item named in the genitive, 1.1.46 — K8: *ādiḥ ṭit bhavati, antaḥ kit bhavati ṣaṣṭhīnirdiṣṭasya*) or **deletes** (लोपः, "deletion", 1.1.60 अदर्शनं लोपः: "disappearance is called lopa" — K9: *prasaktasya adarśanaṃ lopasañjñaṃ bhavati*, "the non-appearance of what would have appeared"). One-for-two: 6.1.84 एकः पूर्वपरयोः (D), a heading (K10: *adhikāro 'yam … pūrvasya parasya dvayor api sthāne ekādeśo bhavati*). The m-marked augment (नुम्) goes after the last vowel (1.1.47, *preview*, c05.l03). Lopa has kinds named by affix (luk, ślu, lup: 1.1.61): Teacher Notes only. | TRADITION | [REF:ashtadhyayi 1.1.46]; [REF:ashtadhyayi 1.1.60]; [REF:ashtadhyayi 6.1.84]; [REF:kashika 1.1.46]; [REF:kashika 1.1.60]; [REF:kashika 6.1.84] | Fixed English: substitute · augment · deletion (plan §1.4.4). |
| 0.10 | **guṇa and vṛddhi defined (l02).** 1.1.1 वृद्धिरादैच् (Q): आ, ऐ, औ are called vṛddhi. 1.1.2 अदेङ् गुणः (B): अ, ए, ओ are called guṇa. 1.1.3 इको गुणवृद्धी (B): where guṇa or vṛddhi is enjoined **by its name** (without naming what it replaces), it replaces an इक् vowel (K13, line 342: *vṛddhiguṇau svasañjñayā śiṣyamāṇau ikaḥ eva sthāne veditavyau*; the Kāśikā's own example is 7.3.84 and *nayati*). With 1.1.50 (owned D, c01) the nearest grade is chosen; with 1.1.51 उरण् रपरः (K) the substitute of ऋ/ॠ comes with र् (अर्, आर्). Table 0.B. **The tapara letters:** अत् in 1.1.2 (short अ only), आत् in 1.1.1 (long आ only), by 1.1.70 (owned from c01.l02). **Nuance (Teacher Notes):** the Kāśikā under 1.1.1 says the त् of 1.1.1 is there for ऐच् (*taparakaraṇam aijartham*, "tād api paraḥ taparaḥ", K11): read by 1.1.70's second reading, it keeps ऐ औ to their own length (against three- or four-mora vowels in *khaṭvaiḍakā*); under 1.1.2 it says the त् serves all three (*taparakaraṇaṃ tv iha sarvārtham*, K12). The learner line stays "आत्: long आ only (tapara)". **FACT beside TRADITION** (plan §1.1 principle 5): Whitney §235a: "A guṇa-vowel (guṇa *secondary quality*) differs from the corresponding simple vowel by a prefixed a-element which is combined with the other according to the usual rules; a vṛddhi-vowel (vṛddhi *growth, increment*), by the further prefixion of a to the guṇa-vowel." Both accounts give ओ from ऊ; neither inserts a व. | TRADITION; FACT | [REF:ashtadhyayi 1.1.1]; [REF:ashtadhyayi 1.1.2]; [REF:ashtadhyayi 1.1.3]; [REF:kashika 1.1.1]; [REF:kashika 1.1.2]; [REF:kashika 1.1.3]; [REF:whitney1889 §235] | Whitney quoted verbatim from the local e-text (line 2388 ff.), whose section number reads "255" (an OCR slip between §234 and §236). Data file 1.1.3: an वृद्धिः, गुणः; type P (paribhāṣā) — not printed (c06.l01 shows the file's kinds). |
| 0.11 | **anuvṛtti (l03).** A sūtra is often incomplete on its own; words of earlier sūtras continue into it (अनुवृत्तिः "carrying down"). MW s.v. anu-vṛtti: "(in Pāṇini's Gr.) continued course or influence of a preceding rule on what follows". The Kāśikā marks it with *iti vartate* / *ity anuvartate* / *ity eva* (K7 under 1.4.18, K19 under 8.3.15, K28 under 6.1.87, K33 under 8.3.59: *mūrdhanyaḥ iti vartate, sa iti ca*). Until Chapter 6 the course prints the carried words; the learner applies the completed rule and does not find the words (plan §4.2 l03 Main risk). | TRADITION | [REF:monierwilliams1899 s.v. anuvṛtti]; [REF:kashika 8.3.59] | — |
| 0.12 | **adhikāra (l03).** A heading stands over a stretch of rules. **6.4.1 अङ्गस्य** (B): from here to the end of Book 7, every rule is about [something belonging to] the aṅga (K22: *adhikāro 'yam āsaptamādhyāyaparisamāpteḥ / yad ita ūrdhvam anukramiṣyāmaḥ aṅgasya ity evaṃ tad veditavyam*). **8.3.55 अपदान्तस्य मूर्धन्यः** (D): from here to the end of the pāda (8.3), [in place of स् that is] not at the end of a word, a retroflex (K30: *apadāntasya iti, mūrdhanyaḥ iti caitad adhikṛtam veditavyam āpādaparisamāpteḥ*). **8.3.57 इण्कोः** (D): after an इण् sound or the k-row (K31: *iṇaḥ kavargāc ca*). Also headings the learner already uses: 3.1.1 प्रत्ययः, 3.1.2 परश्च (l01, B: both adhikāras by the Kāśikā, K1, K2) and 6.1.84 एकः पूर्वपरयोः (l02, D). **Data-file note:** 6.4.1's `an` field lists दीर्घः (6.3.111) and सम्प्रसारणस्य (6.3.139) and its `ad` field lists 6.4.1 itself; the bracket line under 6.4.1 (B, quoted in l03) prints both as rule (ii) of row 0.18 says, "(the file carries them; this heading does not use them)", and the heading as "(the heading begins here)" — §3, the bracket lines. | TRADITION | [REF:ashtadhyayi 6.4.1]; [REF:kashika 6.4.1]; [REF:kashika 8.3.55]; [REF:kashika 8.3.57] | — |
| 0.13 | **ṇatva (l03; IR-016).** 8.4.1 रषाभ्यां नो णः समानपदे (Q): after र् or ष्, न् becomes ण् when both stand in one word (K34: *rephaṣakārābhyām uttarasya nakārasya ṇakārādeśo bhavati, samānapadasthau cen nimittanimittinau bhavataḥ*; e-text *uttarasy* → *uttarasya*). **समानपदे is a locative of place ("within the same word"), not the case code's "before"**: the Kāśikā's *samānapadasthau* "both standing in the same word"; a §12 mistake row. **The ṛ-vārttika** (K35, line 82815): *ṛvarṇāc ca+iti vaktavyam* — after ऋ/ॠ too (*tisṛṇām, catasṛṇām, mātṝṇām, pitṝṇām*): Teacher Notes, one learner line ("the Kāśikā adds ऋ"). 8.4.2 अट्कुप्वाङ्नुम्व्यवायेऽपि (D): even when अट् sounds (the vowels and ह य व र, c01.l01), the k-row, the p-row, the preverb आङ् or num stand between (K36: *aṭ ku pu āṅ num ity etair vyavāye 'pi …*; examples *karaṇam, kiriṇā, giriṇā, kuruṇā, guruṇā · arkeṇa, mūrkheṇa, gargeṇa · darpeṇa, repheṇa, garbheṇa*). 8.4.37 पदान्तस्य (D): [न्] at the end of a word does **not** [become ण्] (K37: *padāntasya nakārasya ṇakārādeśo na bhavati / vṛkṣān / plakṣān / arīn / girīn*). **The न carried into 8.4.37 from 8.4.34 is the negative particle "not"** (data file pc of 8.4.34: न$S$0$0$, an indeclinable; the Kāśikā's *na bhavati*), not the sound न्: the bracket line glosses it so (§7, correction 2). FACT beside it: Whitney §189: "The dental nasal न् n, when immediately followed by a vowel or by न् n or म् m or य् y or व् v, is turned into the lingual ण् ṇ if preceded in the same word by … ष् ṣ, र् r, or ऋ ṛ or ॠ ṝ … unless … there intervene … a palatal (except य् y), a lingual, or a dental." Whitney's "immediately followed by a vowel …" is why the final न् of रामान् stays (FACT); 8.4.37 is the tradition's statement of the same (TRADITION). | TRADITION; FACT | [REF:ashtadhyayi 8.4.1]; [REF:ashtadhyayi 8.4.2]; [REF:ashtadhyayi 8.4.37]; [REF:kashika 8.4.1]; [REF:kashika 8.4.2]; [REF:kashika 8.4.37]; [REF:whitney1889 §189]; [REF:whitney1889 §190] | 8.4.1 and 8.4.2 are R in c06.l02, 8.4.37 is not (plan §4.0.6, review c02:E#15). |
| 0.14 | **ṣatva (l03; IR-016).** 8.3.59 आदेशप्रत्यययोः (D), under the headings 8.3.55 and 8.3.57 and with सः carried from 8.3.56: [in place of स्] that is a substitute or belongs to an affix, after an इण् sound or the k-row, not at the end of a word — a retroflex (K33: *ādeśo yaḥ sakāraḥ, pratyayasya ca yaḥ sakāraḥ iṇkor uttaraḥ tasya mūrdhanyo bhavati ādeśaḥ*; examples *siṣeva, suṣvāpa · agniṣu, vāyuṣu, kartṛṣu, hartṛṣu*). The retroflex nearest to स् is ष् (1.1.50, owned). **इण्** = इ उ ऋ ऌ ए ओ ऐ औ ह य व र ल (c01.l01: from इ of अइउण् to the ण् of लण्), so every vowel but अ/आ triggers, and so do ह य व र ल; the k-row is **कु** (उदित्, c01.l02). FACT beside it: Whitney §180: "The dental sibilant स् s is changed to the lingual ष् ṣ, if immediately preceded by any vowel save अ a and आ ā, or by क् k or र् r—unless the स् s be final, or followed by र् r"; §180b: "The general Hindu grammar prescribes the same change after a l also; but the Prātiśākhyas give no such rule, and … Actual cases of the combination do not occur in the older language, nor have any been pointed out in the later." (Teacher Notes: the ल of इण्.) | TRADITION; FACT | [REF:ashtadhyayi 8.3.59]; [REF:ashtadhyayi 8.3.55]; [REF:ashtadhyayi 8.3.57]; [REF:kashika 8.3.59]; [REF:kashika 8.3.57]; [REF:whitney1889 §180] | The Kāśikā under 8.3.57 has *vākṣu* among its examples (K31, line 81530), the plan's वाक्षु. |
| 0.15 | **The 1.x errors corrected in the open in this chapter (plan §4.0.4), each re-found on a rendered page image and quoted verbatim.** **(a) IR-016, p. 73** (l03): the info card "Ṣatva (षत्व) & Ṇatva (णत्व) — RETROFLEXION": "When certain sounds (इ ई उ ऊ ऋ ए ऐ ओ औ ह य व र ल क ग) appear BEFORE a dental स or न, the dental retroflexes" · "• रामेण (रामेन intended) — the इ (in pre-form) triggers ण" · "Rule (8.4.2): "अट्कुप्वाङ्नुम्व्यवायेऽपि" — even with intervening अट् (vowels), क्/प्/ङ् class, अङ्, नुम् — the cerebralization still happens." Corrected: one trigger list is given for two rules with different triggers (ṇ: र, ष, and ऋ/ॠ by the vārttika — no other vowel; ṣ: the इण् sounds and कु); in रामेण the र triggers, not an इ (the इ of the pre-form राम + इन is no trigger of ṇ at all — it triggers only ṣ — and by the time 8.4.1 acts it is inside the ए of रामेन, अ + इ by 6.1.87); अट् is the vowels **and ह य व र**; कु, पु are the k-row and p-row, not "क्/प्/ङ् class"; "अङ्" is आङ्, the preverb आ. (Teacher Notes, not learner text: the same card's "हरेस् + सुत = हरेष्षुत" and "ब्रह्मन् + अस्ति → ब्रह्माणि" are garbled — ब्रह्माणि is a nominative plural of the neuter ब्रह्मन्, not a sandhi with अस्ति; and p. 74's matching pair "Trigger sounds → इ/उ/ऋ/र/क-class".) The plan's paraphrase "in रामेण the इ triggers ण" (review c02:E#16, rejected) is replaced in learner text by the verbatim line. **(b) IR-021, p. 89** (l02): "Example: भू + ति → भवति (where गुण inserts व)". Corrected: guṇa is a substitute (ऊ → ओ) and inserts nothing; the व comes from a second substitute, ओ → अव् (6.1.78); nothing in भवति is an āgama. The card's next line, "Example: अ-ग-छ-त् (अट् augment अ added at start of past tense)", is right and kept. **(c) the same card's lopa example, p. 89 — the plan misquotes it** (§7, correction 1): the image reads "Example: रामस् + अहम् → रामोऽहम् / The original "स" went through visarga → ओ; / for the next word, अ underwent lopa (replaced by avagraha ऽ)." — **अहम्**, not the plan's "अपि". Corrected: in Pāṇini's terms nothing is dropped: -अः before अ gives ओ (owned, v3.c04.l02), and ओ + अ → ओ is one substitute for both (6.1.109 एङः पदान्तादति, owned, under 6.1.84); the ऽ is a printing sign (v3.c04.l01). Teacher Notes: रुँ → उ by 6.1.113, अ + उ → ओ by 6.1.87; before a voiced consonant 6.1.114 (रामो गच्छति). **(d) the same card's ṭ-marker example, p. 89:** "• -ट् marker → at start (e.g., नुम् augment as न-म्)". Corrected: नुम् is m-marked and goes after the last vowel (1.1.47, preview, c05.l03); अट् is the ṭ-marked augment. (Teacher Notes only: the card's "इ + अ → य् + अ = या" should end "= य".) **(e) the rājan card, p. 98** (l01): "→ "Before vowel-initial endings or those starting in sibilant + vowel, the stem is bha"" · "In "weak" cases (3rd-7th cases) before vowel endings, stems collapse:" · "Case 1 sg: राजा (pada — n drops)" · "Case 2 sg: राजानम् (aṅga — n stays)". Corrected: यचि = before an ending that begins with य or a vowel (the य of यचि is the semivowel), the strong endings excepted (carried from 1.4.17); the acc. pl. राज्ञः (शस्, a 2nd-case ending) is bha too, which the card's "3rd-7th cases" leaves out (राजभिः is already excluded by its "before vowel endings"), and 6.4.134 drops only the अ (राज्न् + आ → राज्ञा); before सुँ and अम् the base is strong (1.1.43), not pada and not "merely aṅga" (every base is aṅga before an affix, 1.4.13); the न् of राजा drops because, once सुँ is dropped, the whole word is a pada (1.4.14 with 1.1.62, Teacher Notes) and 8.2.7 applies. (Teacher Notes only: the same card's "Example: रामा (stem) + सु (nom.sg.) → रामस् (aṅga state)" has the stem wrong — राम, not रामा.) | the errors: documented 1.x errors; the corrections: TRADITION / FACT | `Sanskritam-Curriculum.pdf` pp. 73, 89, 98 (page images) | Quotation marks = verbatim from the image. The plan's §4.0.4 rows and the l02 block are corrected for (c) (§7). |
| 0.16 | **The नमस्ते thread, concluded (l01; plan §1.5; review c02:P#0, E#3).** नमस् is an avyaya (1.1.37, owned); the sup after it is deleted (2.4.82 अव्ययादाप्सुपः, D: K38 *avyayād uttarasya āpaḥ supaś ca lug bhavati*; L9, VLk 373); the word is still a pada because a deleted affix still counts (1.1.62 प्रत्ययलोपे प्रत्ययलक्षणम्, Teacher Notes; 1.4.14, owned); then स् → रुँ (8.2.66) → visarga (8.3.15). Before ते the visarga also arises (8.3.15 works before a khar such as त्) and is then replaced by स् (8.3.34 विसर्जनीयस्य सः, owned): so the स् of नमस्ते is a **substitute for the visarga**, not the stem's स् left untouched. FACT: Volume 1 shipped नमः as "pause form of the noun … नमस् (namas)" (v1.c03.l04 §14): consistent. | TRADITION | [REF:ashtadhyayi 2.4.82]; [REF:kashika 2.4.82]; [REF:laghukaumudi on 2.4.82]; [REF:ashtadhyayi 8.3.34] | — |
| 0.17 | **The grammarians' line, 2 (l01 §17; plan §1.5, §7.3 Q3).** **HISTORY, hedged:** Patañjali's Mahābhāṣya, "c. 2nd c. BCE" on the usual estimate [REF:mahabhashya] (the key's own date). **What the opened text shows (FACT about the text):** the Mahābhāṣya discusses short statements on Pāṇini's rules called vārttikas; the edition this course reads (Kielhorn, revised Abhyankar; GRETIL) prints them in bold (M1, the e-text header: "BOLD for Kātyāyana's Vārttikas"), and the Mahābhāṣya itself names their author "the venerable Kātya" (M3, line 24006, a bold line: *… provāca bhagavān kātyaḥ*). **Learner wording (fixed):** "Pāṇini's rules have been commented on for over two thousand years. Kātyāyana wrote short notes on them, the vārttikas; Patañjali's Great Commentary, the Mahābhāṣya (c. 2nd century BCE on the usual estimate), discusses Pāṇini's rules and Kātyāyana's notes together [REF:mahabhashya]; [REF:cardona1997]." — **"over two thousand years" is cut** unless Pass C keeps it as an inference from the key's date (c. 2nd c. BCE → 2026 CE: about 2,150 years): recommended **cut** (no scale phrase; STYLE_GUIDE §7), and the callout opens "Pāṇini's rules have long been commented on." No date is printed for Kātyāyana. **TRADITION (display ○, not a headword, not a tool):** the Paspaśāhnika's question and answer (M2, lines 144–145): किं पुनः शब्दानुशासनस्य प्रयोजनानि is Teacher Notes; the printed line is **रक्षोहागमलघ्वसन्देहाः प्रयोजनम्।** (*rakṣohāgamalaghvasandehāḥ prayojanam.*) — pause form: रक्षा-ऊह-आगम-लघु-असन्देहाः प्रयोजनम्। — "The purposes [of grammar] are preservation (of the Veda), adaptation (ūha, of mantras to the rite), scripture (āgama), economy (laghu) and freedom from doubt (asandeha)." Source line: "Mahābhāṣya, Paspaśāhnika (Kielhorn I, p. 1, l. 14 – p. 2, l. 2); text of the GRETIL e-text". **E-text correction (listed in Teacher Notes and in the plan's §4.6 list):** *proyojanam* → *prayojanam*. The line is not bold in the e-text: it is Patañjali's own statement, not a vārttika (as the plan says). The compound's first member is रक्षा (Pas 3 {3/17}: *rakṣārtham vedānām adhyeyam vyākaraṇam*), so the pause form is रक्षा-ऊह-…; रक्षा + ऊह → रक्षोह (guṇa, 6.1.87) and लघु + असन्देह → लघ्वसन्देह (yaṇ, 6.1.77): two of the three owned joins the learner can name (the third: ऊह + आगम → ऊहागम, 6.1.101). Assessed only as "According to Patañjali, …". | HISTORY; TRADITION | [REF:mahabhashya] (Paspaśāhnika); [REF:cardona1997] | Line verified at `pmbhassu.htm` 145 (Pas_3 {2/17}). |
| 0.18 | **The bracket line (from l03; plan §1.4.3; reviews c02:E#4, P#6, post:form#1, post:restate-1#1).** Under every sūtra printed from c02.l03 on, one bracket line reproduces the data file's `an` field as **"carried (data file): word, source"** and its `ad` field as **"headings (data file): heading, number"**, with two exceptions, each said on the line: (i) a heading not taught by that lesson, or not taught at all in the volume, is replaced by **"(further headings: Teacher Notes)"** — in this chapter: पूर्वत्रासिद्धम् (8.2.1, until c06.l03), संहितायाम् (8.2.108 and 6.1.72), पदस्य (8.1.16), असिद्धवदत्राभात् (6.4.22), भस्य (6.4.129), आद्युदात्तश्च (3.1.3), धातोः (3.1.91), लस्य (3.4.77), आकडारात् एका संज्ञा (1.4.1); (ii) a carried word the rule does not use is printed with "(the file carries it; this rule does not use it)" (7.3.103's दीर्घः). **Headings printable in c02.l03** (taught by then): अङ्गस्य (6.4.1, B, l03), अपदान्तस्य मूर्धन्यः (8.3.55), इण्कोः (8.3.57), प्रत्ययः (3.1.1, B, l01), परश्च (3.1.2, B, l01), एकः पूर्वपरयोः (6.1.84, D, l02). **A course line beside the file's** where the reading needs more than the file records: "carried (course): …" (8.4.2: नः णः समानपदे). The exact lines for every sūtra of l03 are in §3. **Before l03** (l01, l02) the c01 bracket style stands: "[word, carried from N.N.N]". | policy | plan §1.4.3; data file | — |
| 0.19 | **Teacher-Notes sūtras of this chapter** (number and text in Teacher Notes; learner text prints "Teacher Notes" and no number — except that from l03 on a bracket line prints a source number as the data file gives it, plan §1.4.3, e.g. 7.1.23, 3.4.97, 3.4.98, 8.3.56; no tool, no count): 1.3.4 न विभक्तौ तुस्माः, 1.3.7 चुटू (l01); 1.1.62 प्रत्ययलोपे प्रत्ययलक्षणम् (l01, l03); 6.4.136 विभाषा ङिश्योः (l01: राज्ञि/राजनि); 7.1.23 स्वमोर्नपुंसकात् (l01: the source of 7.1.24's carried words before the bracket regime); 7.3.111 घेर्ङिति (l02: the guṇa of गुरवे); 6.4.72 आडजादीनाम्, 6.1.90 आटश्च (l02: ऐच्छत्); 6.1.113 अतो रोरप्लुतादप्लुते, 6.1.114 हशि च (l02: रामोऽहम्, रामो गच्छति); 3.4.97 इतश्च लोपः परस्मैपदेषु (l02: the source of 3.4.100's लोपः and परस्मैपदेषु); 8.4.41 ष्टुना ष्टुः (l03: the ण of कृष्ण); 6.1.103 तस्माच्छसो नः पुंसि (l03: the न् of रामान्); 7.1.54 ह्रस्वनद्यापो नुट्, 6.4.3 नामि (l03: the न of -आनाम्). **Printed by number only as labelled previews** (no tier, no count; plan §1.4.2, §4.0.3 Totals): 1.3.8 (c03.l02), 3.4.78 (c03.l01), 1.1.47 (c05.l03), 6.4.8 and 6.1.68 (c05.l03), 8.2.1 (c06.l03), 7.3.102 (c06.l03), 8.2.30 (c04.l01), 7.3.84 (c03.l02), 4.1.2 (owned picture). Every number above was found in the data file. | policy | plan §1.4.3, §4.0.3 Totals | 7.3.84's number prints in l02 only in the ladder line "(7.3.84, c03.l02)". |
| 0.20 | **Seams used in this chapter's course-written lines** (all ✓ in the Volume 3 Chapter 4 maps): vowel — savarṇa-dīrgha (तीत्यत्र), guṇa (राजेति, रामेणेति, रथेनेति, अत्रेकारस्य), vṛddhi (चैकार्थौ, चादेशौ), yaṇ (इत्यत्र, इत्यधिकारः, पदान्यनुवर्तन्ते, अप्येवम्), अयादि at a word end (प्रत्यय उकारः, स्थान ओकारः); visarga — -अः + voiced → ओ (परो भवति, सेवको गच्छति, रेफो णत्वस्य, सकारो मूर्धन्यो भवति, गुणो वृद्धिः), -अः + अ → ओऽ (अतोऽपि, यतोऽस्य), -अः + other vowel → अ + gap (राम इति, अकार आगमः, गुण आगमः, नकार इति, ओकार इण्-, आकार इण्-), -इः/-उः + vowel or voiced → र् (सुरिति, वृद्धिर्हानिः, राजभिरित्यत्र, वृद्धिरपि), visarga + च/त → श्/स् (नृपश्च, आगमश्च, हानिश्च, सकारश्च, यतस्तस्य), visarga kept before क/प/स and at stops; सः before a consonant → स (स कुत्र: 6.1.132 owned); consonant — म् → ं before a consonant (किं कृतम्, किं भवति, णत्वं भवति, कारणं रेफः, निमित्तं किम्), न् doubled after a short vowel before a vowel (राजन्निति), त् + vowel → द् (अगच्छदिति), त् + प written together (पूर्वसूत्रात्पदानि, तत्पूर्व-). **No seam in this chapter's lines is ◐ or named-only** (the ट ठ row seam यतष्टकारः was avoided by word order). | policy | Volume 3 Chapter 4 fact base, tables 0.A–0.C | Each line below lists its seams where one is not obvious. |
| 0.21 | **Commentary lines in learner text.** The plan prints one: the Paspaśāhnika line (l01 §17, row 0.17). This note adds one more (§7, deviation 4): l02 §17, the Paspaśāhnika's next sentence but one, which names the chapter's three operations — **लोपागमवर्णविकारज्ञो हि सम्यग्वेदान्परिपालयिष्यति।** (*lopāgamavarṇavikārajño hi samyag vedān paripālayiṣyati.*) — pause form: लोप-आगम-वर्ण-विकार-ज्ञः हि सम्यक् वेदान् परिपालयिष्यति। — "For one who knows deletion, augment and the change of sounds will guard the Vedas properly." (M2, `pmbhassu.htm` line 147, Pas_3 {4/17}; e-text in pausa: *lopāgamavarṇavikārajñaḥ hi samyak vedān paripālayiṣyati*; joined by the course: -ज्ञः हि → -ज्ञो हि, सम्यक् वेदान् → सम्यग्वेदान्, वेदान् परि- written together). TRADITION, display ○ (future causative परिपालयिष्यति glossed, not taught), assessed only as "According to Patañjali". Every other commentary line is Teacher Notes until Chapter 6 (plan §1.1 principle 9). Every English line that says what a sūtra does follows the Kāśikā under it (table 0.E) and cites [REF:kashika N.N.N]. Source line for every commentary quotation: "text of the GRETIL e-text". | policy; TRADITION | plan §1.4.3; [REF:mahabhashya] (Paspaśāhnika) | — |
| 0.22 | **Registers in this chapter.** FACT with Whitney: the राजन् cells (§§421, 424), the ṇ and ṣ laws (§§180, 189–190), guṇa as "a prefixed a-element" (§235a), the dative of u-stems, गुरवे (§336d, opened: "The dat. masc. and fem. gunates the final of the stem before the ending e, making aye and ave"). TRADITION, attributed: every derivation and every sūtra's action ("According to Pāṇini, …", "According to the Kāśikā, …"). HISTORY with keys and hedges: Patañjali (row 0.17). No SYMBOL content. | policy | STYLE_GUIDE §4 | — |
| 0.23 | **Hindi parallels (exact contrasts; each lesson uses only its own row; [REF:kachru2006] bare for Hindi facts; [REF:guru1952] bare for Hindi school grammar, TRADITION).** **(a) l02 — गुण and वृद्धि: a sandhi's name in the Hindi school book, a set of vowels in Pāṇini.** Hindi school grammar sorts स्वर-सन्धि under five names, दीर्घ, गुण, वृद्धि, यण्, अयादि (verified for Volume 3: v3.c04.l01 §4 TRADITION callout, Volume 3 Chapter 4 fact base row 0.21 (b) [REF:guru1952]); in Pāṇini गुणः and वृद्धिः are not the names of joins but of three vowels each (1.1.1–2), and the join is named by the rule that puts them in (6.1.87, 6.1.88). The same contrast holds for the Hindi words गुण "quality" and वृद्धि "growth", which keep their everyday senses beside the term. **(b) l03 — the ण and ष of tatsama words.** Hindi takes many Sanskrit words whole, in their Sanskrit shapes (verified for Volume 3: the Chapter 4 fact base row 0.21 (a), [REF:kachru2006]); so the ण of कारण, हरण and मरण (र, then only vowels, then न, in one word: 8.4.1–2) and the ष of भविष्य (the स् of the affix स्य after इ: 8.3.59) come into Hindi with the word, already made — the rule that made them is Sanskrit's, not a rule Hindi applies to its own suffixes. Not रामायण or प्रमाण as examples: their र and न are not in one word (राम-अयन, a name: 8.4.3 पूर्वपदात् संज्ञायामगः; प्र-मान, after a preverb: 8.4.29 कृत्यचः — Teacher Notes only). **No claim is printed that Hindi itself has or lacks ṇatva** (not verifiable here). **(c) l01 — no Hindi parallel printed.** The candidate (Hindi राजा, a tatsama noun in the Sanskrit nominative, not taking the oblique -ए: *राजे ने) could not be confirmed under the evidence rule (one standard search found only the general -ā → -e rule, no source for the exception); §7, open item 3. | FACT; TRADITION | [REF:guru1952]; [REF:kachru2006] | The l02 and l03 rows rest on Volume 3 rows already verified; Pass C re-checks only their wording here. |
| 0.24 | **Ledger (STYLE_GUIDE §8 rules 1–23; plan §3):** 521 → 527 (l01: राजा, प्रत्ययः, प्रकृतिः, आत्मा, स्वामी, भृत्यः) → 532 (l02: लोपः, आगमः, वृद्धिः, हानिः, कोपः; upgrade गुणः) → 537 (l03: अनुवृत्तिः, अधिकारः, समानः, निमित्तम्, कारणम्) → 537 (l04: 0). **16 ledger-new**, each grep-checked against the entry ledger and `work/owned.py`: none owned (output: "544 128 <word> -" for all 16, and for गुणः the stem row v1.c03.l03 गुण "quality, strand"). `vocabulary_count`: l01 6, l02 6 (5 + the upgrade गुणः), l03 5, l04 0. **Not counted** (rules 20–21): अङ्गम्, भम्, पदम् as names (पदम् owned v3.c04.l04), प्रातिपदिकम्, सर्वनामस्थानम्, णत्वम्, षत्वम्, रेफः, every affix name (सुँ, भिस्, टा, अट्, तिप्), every sūtra-internal form (यचि, रषाभ्याम्, इण्कोः), the -कार names, every commentary form (प्रयोजनम्: owned in c03.l05), the derived cells राजभिः, राज्ञा (paradigm forms of राजा, rule 7), अनुवर्तन्ते (display), रक्षोहागम… (display). **Tools added** (§14; plan §3): l01 13 (Q 1.4.17, 1.4.18; B 3.1.1, 3.1.2, 1.3.2, 1.4.13; D 8.2.66, 8.3.15, 7.1.24, 6.1.107, 8.2.7, 6.4.134, 2.4.82; 8.4.40 owned, not counted; K 1.2.45, 1.1.43 are not tools); l02 8 (Q 1.1.1; B 1.1.2, 1.1.3; D 1.1.46, 1.1.60, 6.1.84, 3.4.100, 6.4.71; 6.1.87, 6.1.88 owned; K 1.1.51 not a tool); l03 10 (Q 8.4.1; B 6.4.1; D 8.3.59, 8.4.2, 7.1.12, 7.3.103, 8.3.55, 8.3.57, 8.4.37, 3.4.99). Toolbox after the chapter: **43** (12 + 31). | policy | STYLE_GUIDE §8; plan §3; scripts (header) | — |
| 0.25 | **Pedagogy anchors** (verification log, "Decisions recorded"): retrieval before re-reading [REF:roediger2006] (one statement only); spaced review [REF:cepeda2006] (Station 0); chunks first, analysed later [REF:nation2013] — this chapter is the "later" for रामः, नमः, रामेण, रामेषु, करोषि, अगच्छत्. The decision "The ष of करोषि and शृणोषि 'comes with the whole word; the reason waits' — no lesson ties it to the root कृ" is redeemed in l03 **without** tying the ष to कृ: the ष belongs to the ending सि after the stem's ओ (8.3.59), the same in शृणोषि. | policy | verification log 2026-11-10 | — |
| 0.26 | **No scale or perfection claims (STYLE_GUIDE §7; EDITORIAL_GUIDELINES §3).** Not printed: the 1.x p. 89 "ELEGANT POINT: These three cover EVERY morphological change in Sanskrit. Panini's entire grammar = (lopa \| āgama \| ādeśa) applied recursively …", "Panini got there 2,500 years early", "every transformation in those 4,000 sutras"; p. 98 "This is fundamental — without these labels, you can't tell when sandhi applies", "This is the key to advanced parsing"; p. 74 "Articulation harmony … ✓ CORRECT". The lesson says that **many** of the rules it reads replace, add or delete, never "all". Counts printed: 21 case endings (row 0.6, counted); the five strong endings (1.1.43). | policy | STYLE_GUIDE §7; EDITORIAL_GUIDELINES §3 | The "ELEGANT POINT" line may be quoted only as a 1.x error in c06.l04 task G (plan principle 6), not here. |
| 0.27 | **§9–§11 "the sounds inside the rules" (plan §1.1 principle 12).** l01: the derivation of रामः read aloud with the markers named and not pronounced ("सुँ — the उँ is a marker; what you hear is स्, and at the pause, ः /h/"); राज्ञा /ɾɑːd͡ʑɲɑː/ — ज्ञ is ज् + ञ् (STYLE_GUIDE §2: /d͡ʑɲ/; the modern [gj] is a regional habit, noted as a variant, never the target); राजभिः /ɾɑːd͡ʑɐbʱih/. l02: guṇa and vṛddhi heard as length and quality, ए /eː/ and ओ /oː/ pure monophthongs, ऐ /ɐi̯/, औ /ɐu̯/ (STYLE_GUIDE §2.1); अगच्छत् /ɐgɐt͡ɕt͡ɕʰɐt̪/ with the augment अ heard as the first syllable. l03: the tongue's curl — रामेण /ɾɑːmeːɳɐ/ against देवेन /d̪eːʋeːn̪ɐ/; रामेषु /ɾɑːmeːʂu/ against बालिकासु /bɑːlikɑːsu/; the sūtra read joined, then word by word, each case ending heard. | FACT; TRADITION (recitation) | STYLE_GUIDE §2 | — |
| 0.28 | **Station 0 — canonical wording** (each printed verbatim in the booking lesson's §20 and in the running lesson's §3, without the labels, as "- +1 day: …" / "- +1 week: …"). Table 0.D. **Chain:** l01 §3 runs S0-cg (c01.l04's +1 day) and S0-cf (c01.l03's +1 week); l02 §3 runs S0-da (l01's +1 day) and S0-ch (c01.l04's +1 week); l03 §3 runs S0-dc (l02's +1 day) and S0-db (l01's +1 week); l04 §3 (before the sitting, outside its 45 minutes) runs S0-de (l03's +1 day) and S0-dd (l02's +1 week); l03 books S0-df (+1 week) for v4.c03.l01; l04 books S0-dg (+1 day) for v4.c03.l01 and S0-dh (+1 week) for v4.c03.l02 (plan §4.0.5; plan §7.6 row "v4.c01 fact base", entry pattern). **Exam guard:** no item of S0-de or S0-dd is an item of tasks A–E (checked: S0-de's seven forms, S0-dd's ladder and 6.1.78 appear in no task; task C avoids 6.1.78; 8.4.1–2 recur as steps of D (पुत्रेण) and D′ (नरेण), and task C (1) अ + इ → ए asks only the kind of operation). | policy | plan §4.0.5; c01 fact base table 0.D | — |
| 0.29 | **GLOSSARY terms this chapter adds or updates:** §7, item 7. | policy | GLOSSARY.md | — |

### 0.A The राजन् paradigm (Whitney §424, cell by cell) and the name of the base before each ending (TRADITION; ○ display in l01, ✓ in c05.l03)

Whitney prints final -स्; the course prints -ः. "Ending" is the ending of 4.1.2 with its marker
(row 0.5). "Name" by 1.1.43 (strong, K), 1.4.17 (pada) and 1.4.18 (bha). Derived in l01: the bold
cells.

| Case | Number | Whitney §424 | Course print | IAST | Ending (4.1.2) | Name of राजन् before it | What the name sets off |
|---|---|---|---|---|---|---|---|
| N | sg | राजा | **राजा** | rājā | सुँ | strong | display (c05.l03): 6.4.8 lengthens; 6.1.68 drops स्; 8.2.7 drops न् |
| A | sg | राजानम् | राजानम् | rājānam | अम् | strong | 6.4.8 (c05.l03) |
| I | sg | राज्ञा | **राज्ञा** | rājñā | टा | bha | 6.4.134 (then 8.4.40) |
| D | sg | राज्ञे | राज्ञे | rājñe | ङे | bha | 6.4.134 |
| Ab | sg | राज्ञस् | राज्ञः | rājñaḥ | ङसिँ | bha | 6.4.134 |
| G | sg | राज्ञस् | राज्ञः | rājñaḥ | ङस् | bha | 6.4.134 |
| L | sg | राज्ञि, राजनि | राज्ञि, राजनि | rājñi, rājani | ङि | bha | 6.4.134 optional before ङि (6.4.136, Teacher Notes) |
| V | sg | राजन् | राजन् | rājan | सुँ (sambuddhi) | — (not sorted) | — |
| N A V | du | राजानौ | राजानौ | rājānau | औ, औट् | strong | 6.4.8 |
| I D Ab | du | राजभ्याम् | राजभ्याम् | rājabhyām | भ्याम् | pada | 8.2.7 |
| G L | du | राज्ञोस् | राज्ञोः | rājñoḥ | ओस् | bha | 6.4.134 |
| N | pl | राजानस् | राजानः | rājānaḥ | जस् | strong | 6.4.8 |
| A | pl | राज्ञस् | राज्ञः | rājñaḥ | शस् | bha | 6.4.134 |
| I | pl | राजभिस् | **राजभिः** | rājabhiḥ | भिस् | pada | 8.2.7 |
| D Ab | pl | राजभ्यस् | राजभ्यः | rājabhyaḥ | भ्यस् | pada | 8.2.7 |
| G | pl | राज्ञाम् | राज्ञाम् | rājñām | आम् | bha | 6.4.134 |
| L | pl | राजसु | राजसु | rājasu | सुप् | pada | 8.2.7 |

Checks: every bha ending begins with a vowel after its marker drops (टा → आ, ङे → ए, ङसिँ → अस्, ङस्
→ अस्, ङि → इ, ओस्, शस् → अस्, आम्): none begins with य among the case endings (the य of यचि matters
for taddhitas, e.g. the Kāśikā's *gārgyaḥ*, K7: Teacher Notes). Every pada ending begins with a
consonant (भ्याम्, भिस्, भ्यस्, सुप् → सु). The five strong endings are 1.1.43's सुट्. राजसु keeps स
(no ṣ: अ before it; l03). राजभिः, not *राजैः: 7.1.9 (owned D) does not apply after 8.2.7 — 8.2.1,
*preview*, c06.l03 (plan §4.2 l01 block). The Kāśikā under 8.2.7 lists *rājā, rājabhyām, rājabhiḥ*
(K23) and under 6.4.134 *rājñaḥ paśya, rājñā, rājñe* (K24): its own examples of this lesson's two
rules.

### 0.B guṇa and vṛddhi (l02; 1.1.1–3 with 1.1.50, 1.1.51)

| Vowel replaced (इक्, 1.1.3) | guṇa (1.1.2: अ ए ओ) | vṛddhi (1.1.1: आ ऐ औ) | Why this one (1.1.50: the nearest) | Owned example |
|---|---|---|---|---|
| इ, ई | ए | ऐ | ए and ऐ share the palate with इ | नयति (ने-, c01.l03; c03.l02) |
| उ, ऊ | ओ | औ | ओ and औ share the lips with उ | भवति (भो-), गुरवे (गुरो-) |
| ऋ, ॠ | अर् | आर् | अ/आ, with र् by 1.1.51 (K) | — (स्मरति, c03.l02: see note) |
| ऌ | अल् | आल् | with ल् (1.1.51, the र of उरण् रपरः names र and ल: Teacher Notes) | — (no owned word) |

Note on the ऋ row's example: no owned form shows ऋ → अर् transparently before c03.l02 (स्मरति, c03.l02;
कर्ता owned v3.c02.l04, its अर् from guṇa of कृ before तृच्, c04.l02). The row is printed **without** an
owned example in l02; स्मरति is named as "c03.l02" in one line. The अ row: अ is its own guṇa, आ its own
vṛddhi (Whitney §235a, "अ a is its own guṇa"; FACT): one line.

### 0.C The operations table (l02; the c02.l04 assembly; S0-dh)

| Operation | Sanskrit | What it does | How a rule shows it | Sūtra | Owned example |
|---|---|---|---|---|---|
| substitute | आदेशः | puts one item in place of another | the replaced item in the genitive (1.1.49); the substitute in the nominative | (1.1.49, owned) | सूर्य + उदयः → सूर्योदयः (6.1.87: guṇa ओ for अ + उ); ल् → तिप् |
| augment | आगमः | adds a sound to an item | its own marker: ट् → at the beginning, क् → at the end (1.1.46); म् → after the last vowel (1.1.47, preview) | 1.1.46 | अट् in अगच्छत् (6.4.71) |
| deletion | लोपः | makes an item disappear | the word लोपः (or luk) in the rule | 1.1.60 | the इ of ति in अगच्छत् (3.4.100); every marker (1.3.9) |

### 0.D Station 0 items (canonical wording; ✓ items only)

| Label | Booked by (§20) | Run by (§3) | Wording (verbatim; printed without the label) |
|---|---|---|---|
| S0-cf | v4.c01.l03 | v4.c02.l01 | "+1 week: the case code again — circle what is replaced and arrow the context in 6.1.77 इको यणचि, 6.1.78 एचोऽयवायावः, 7.1.9 अतो भिस ऐस् and 7.3.101 अतो दीर्घो यञि, then derive, according to Pāṇini, देव + भिस् → देवैः in table form; v4.c02.l01's Station 0 runs exactly this." |
| S0-cg | v4.c01.l04 | v4.c02.l01 | "+1 day: the fourteen written — the fourteen sūtras written from memory, every marker circled; v4.c02.l01's Station 0 runs exactly this." |
| S0-ch | v4.c01.l04 | v4.c02.l02 | "+1 week: the pratyāhāra traps again — expand अण् twice (as every rule but 1.1.69 reads it, and as 1.1.69 reads it), इण्, हल्, चय्, झश् and जश्, sound by sound; v4.c02.l02's Station 0 runs exactly this." |
| S0-da | v4.c02.l01 | v4.c02.l02 | "+1 day: two words taken apart — derive, according to Pāṇini, in table form, राम + सुँ → रामः and फल + सुँ → फलम्, naming at each step the marker dropped or the sūtra that acts; v4.c02.l02's Station 0 runs exactly this." |
| S0-db | v4.c02.l01 | v4.c02.l03 | "+1 week: one base, three names — sort the twelve endings सुँ, औ, जस्, अम्, भ्याम्, भिस्, भ्यस्, सुप्, शस्, टा, ङे and ङि into strong, pada and bha for the base राजन्, and name the rule each box sets off (strong: the lengthened अ, c05.l03; pada: 8.2.7; bha: 6.4.134); v4.c02.l03's Station 0 runs exactly this." |
| S0-dc | v4.c02.l02 | v4.c02.l03 | "+1 day: eight operations labelled — say whether each is a substitute (आदेशः), an augment (आगमः) or a deletion (लोपः), and name its sūtra: (1) अ + उ → ओ in सूर्योदयः (2) अ + ए → ऐ in तत्रैव (3) the अ at the front of अगच्छत् (4) the इ of ति in अगच्छत् (5) सुँ → अम् in फलम् (6) the ट् of अट् in अगच्छत् (7) the उँ of सुँ in रामः (8) ओ → अव् in भवति; v4.c02.l03's Station 0 runs exactly this." |
| S0-dd | v4.c02.l02 | v4.c02.l04 | "+1 week: the guṇa/vṛddhi ladder — for इ, ई, उ, ऊ, ऋ and ऌ write the guṇa and the vṛddhi substitute, say the rule that defines each grade (1.1.2, 1.1.1) and the rule that says which vowels they replace (1.1.3), then write भू → भो → भव् as two substitutions, naming the second (6.1.78); v4.c02.l04's Station 0 runs exactly this." |
| S0-de | v4.c02.l03 | v4.c02.l04 | "+1 day: the ṇ/no-ṇ sort — for देवेन, रथेन, रामान्, कृष्णेन, गुरुणा, मित्रेण and पितॄणाम् say whether the न became ण and why, naming the trigger, what stands between it and the nasal, and the sūtra (8.4.1, 8.4.2 or 8.4.37); v4.c02.l04's Station 0 runs exactly this." |
| S0-df | v4.c02.l03 | v4.c03.l01 | "+1 week: derive रामेषु — derive, according to Pāṇini, राम + सुप् → रामेषु in table form, with the carried words and headings of 7.3.103 and 8.3.59 in brackets as the bracket line gives them; v4.c03.l01's Station 0 runs exactly this." |
| S0-dg | v4.c02.l04 | v4.c03.l01 | "+1 day: derive रामेण — derive, according to Pāṇini, राम + टा → रामेण in table form, each step with its sūtra, and say which words 7.1.12 and 8.4.2 carry and from where; v4.c03.l01's Station 0 runs exactly this." |
| S0-dh | v4.c02.l04 | v4.c03.l02 | "+1 week: the operations table — from memory, write the three operations with their Sanskrit names (आदेशः, आगमः, लोपः), what shows each in a rule (the genitive, 1.1.49; the augment's marker, 1.1.46; the word लोपः, 1.1.60) and one owned example of each; v4.c03.l02's Station 0 runs exactly this." |

**Keys (0.D-keys; the running lesson prints them in `<details>`; ✓ items only):**
- **S0-cf** (l01): c01 fact base table 0.C rows 1, 2, 4, 5 — 6.1.77: circle इकः, arrow to अचि
  (before); 6.1.78: circle एचः, arrow to [अचि]; 7.1.9: circle भिस (भिसः, genitive), arrow from अतः
  (after short अ, ablative); 7.3.101: circle अतः (genitive, short अ), arrow to यञि (before); देवैः as
  c01.l03's derivation (b): 0 देव + भिस् · 1 देव + ऐस् — 7.1.9 · 2 देवैस् — 6.1.88 [आत्] · 3 **देवैः**
  — 8.2.66 + 8.3.15 (preview then; today D in l01).
- **S0-cg** (l01): T9 (c01 fact base table 0.A), every marker circled: ण् क् ङ् च् ट् ण् म् ञ् ष् श्
  व् य् र् ल्.
- **S0-ch** (l02): अण् (every rule but 1.1.69) = अ इ उ · अण् (1.1.69) = अ इ उ ऋ ऌ ए ओ ऐ औ ह य व र ल · इण् = इ उ
  ऋ ऌ ए ओ ऐ औ ह य व र ल · हल् = every consonant, from the ह of हयवरट् to the ह of हल् (ह once) · चय्
  = च ट त क प · झश् = झ भ घ ढ ध ज ब ग ड द · जश् = ज ब ग ड द. All or nothing per item.
- **S0-da** (l02): D-a and D-b (table 0.F).
- **S0-db** (l03): strong — सुँ औ जस् अम् (6.4.8, the lengthened अ, display until c05.l03) · pada —
  भ्याम् भिस् भ्यस् सुप् (8.2.7: the न् dropped) · bha — शस् टा ङे ङि (6.4.134: the अ of -अन्
  dropped; before ङि optional, accept "राज्ञि or राजनि"). One point per ending; the rule named per box.
- **S0-dc** (l03): (1) substitute — 6.1.87 (under 6.1.84) (2) substitute — 6.1.88 (3) augment —
  6.4.71, placed by 1.1.46 (4) deletion — 3.4.100 (5) substitute — 7.1.24 (6) deletion — 1.3.9 (after
  1.3.3) (7) deletion — 1.3.9 (after 1.3.2) (8) substitute — 6.1.78.
- **S0-dd** (l04): table 0.B (इ, ई → ए, ऐ · उ, ऊ → ओ, औ · ऋ → अर्, आर् · ऌ → अल्, आल्); 1.1.2
  guṇa, 1.1.1 vṛddhi, 1.1.3 इको गुणवृद्धी; भू → भो (guṇa, a substitute for ऊ) → भव् (6.1.78 एचोऽयवायावः,
  a substitute for ओ before a vowel). Accept "अर्" without naming 1.1.51.
- **S0-de** (l04): देवेन — no ण: no र, ष or ऋ in the word · रथेन — no ण: र is there but थ (a dental)
  stands between, and 8.4.2 does not allow it · रामान् — no ण: the न् ends the word (8.4.37) ·
  कृष्णेन — no second ण: the trigger ष is there but ण stands between, and ण is none of 8.4.2's
  interveners · गुरुणा — ण: र, then उ (an अट् sound) between: 8.4.1 with 8.4.2 · मित्रेण — ण: र, then ए
  (अट्): 8.4.1 with 8.4.2 · पितॄणाम् — ण: the trigger is ॠ (the Kāśikā's addition to 8.4.1), nothing
  between. Accept "the र-sound ॠ".
- **S0-df** (c03.l01): D-k (table 0.F), its bracket lines as §3 prints them.
- **S0-dg** (c03.l01): D-j; 7.1.12 carries अतः from 7.1.9; 8.4.2 carries रषाभ्याम् (data file) and नः
  णः समानपदे (course) from 8.4.1.
- **S0-dh** (c03.l02): table 0.C.

### 0.E Commentary lines (Kāśikā K1–K40, Laghusiddhāntakaumudī L1–L10, Mahābhāṣya M1–M3)

All from the GRETIL e-texts, copied character by character; every correction is listed in the last
column and goes to Teacher Notes and to the plan's §4.6 spelling list; nothing is dropped without an
ellipsis. Line numbers are lines of the local file. **In learner text only M2 (l01 §17, one sentence)
and M2's {4/17} (l02 §17) print in Devanagari; every other line is Teacher Notes, and its sense is
used for the sūtra's English line (row 0.21).**

| Label | Sūtra / place | Line(s) | Text (e-text, IAST) | Corrections |
|---|---|---|---|---|
| K1 | 3.1.1 | 13765–13766 | *adhikāro 'yam / pratyaya-śabdaḥ sañjñātvena adhikriyate /* | — (13767, not printed, has *pañcamādyāya*, *yānita*, *anukramiṣyamaḥ*: → *pañcamādhyāya*, *yān ita*, *anukramiṣyāmaḥ*, Teacher Notes only if quoted) |
| K2 | 3.1.2 | 13782–13784 | *ayam apy adhikāro yoge yoge upatiṣṭhate, paribhāṣā vā / paraś ca sa bhavati dhātor vā prātipadikād vā yaḥ pratyaya-sañjñaḥ / kartavyam /* | — |
| K3 | 1.3.2 | 3446–3450 | *upadiśyate 'nena ity upadeśaḥ śāstravākyāni, sūtrapāṭhaḥ, khilapāṭhaś ca / tatra yo 'c anunāsikaḥ sa itsañjño bhavati / edha / spardha / pratijña-anunāsikyāḥ pāṇinīyāḥ /* | *pratijña-anunāsikyāḥ* → *pratijñānunāsikyāḥ* (3450) |
| K4 | 1.3.4 | 3487–3495 | *pūrveṇa prāptāyamitsañjñāyāṃ vibhāktau vartamānānāṃ tavarga-sakāra-makaraṇāṃ pratiṣedha ucyate / tavargaḥ, ṭā-ṅasi-ṅasām ina-āt-syāḥ (\*7,1.12) - vṛkṣāt, plakṣāt / sakāraḥ, jas - brāhmaṇāḥ / … tas - pacataḥ / thas - pacathaḥ / makāraḥ - upacattām, apacatam /* | *prāptāyamitsañjñāyāṃ* → *prāptāyām itsañjñāyāṃ*; *vibhāktau* → *vibhaktau*; *makaraṇāṃ* → *makārāṇāṃ*; *upacattām* → *apacatām* (Pass C: the plain sense; editions not opened); "…" stands for lines 3490–3492 (a page marker [#52]) |
| K5 | 1.4.13 | 5584 | *yasmāt pratyayo vidhīyate dhātor vā prātipadikād vā tad-ādi śabda-rūpaṃ pratyaye parato 'ṅgasañjñaṃ bhavati /* | — |
| K6 | 1.1.43 | 1255–1260 | *suṭ iti pañca vacanāni sarvanāma-sthāna-sañjñāni bhavanti napuṃsakād anyatra / … rājā, rājānau, rājānaḥ / rājānam, rājānau / suṭ iti kim ? rājñaḥ paśya /* | "…" = lines 1256–1257 (on the neuter) |
| K7 | 1.4.18 | 5674–5678 | *savādiśv asarvanāmasthāne iti vartate / pūrveṇa padasañjñāyāṃ prāptāyāṃ tad-apavādo bhasañjñā vidhīyate / yakārādāv ajādau ca svādau sarvanāmasthāna-varjite pratyaye parataḥ pūrvaṃ bhasñjñaṃ bhavati / yakāra-ādau - gārgyaḥ / vātsayaḥ /* | *savādiśv* → *svādiṣv* (5674); *bhasñjñaṃ* → *bhasañjñaṃ* (5676); *vātsayaḥ* → *vātsyaḥ* (5678) |
| K8 | 1.1.46 | 1305–1307 | *ādyantau ṭa-kitau (\*1,1.46) ādiḥ ṭit bhavati, antaḥ kit bhavati ṣasṭhī-nirdiṣṭasya / lavitā / muṇḍo bhīṣayate /* | *ṣasṭhī* → *ṣaṣṭhī* |
| K9 | 1.1.60 | 1600–1604 | *adarśanaṃ lopaḥ (\*1,1.60) / adarśanam, aśravaṇam, anuccāranam, anupalabdhiḥ, abhāvo, varṇavināśaḥ ity anartha-antaram / etaiḥ śabdairyo 'rtho 'bhidhīyate, tasya lopaḥ iti iyaṃ sañjñā bhavati / arthasya-iyaṃ sañjñā, na śabdasya / prasaktasya adarśanaṃ lopa-sañjñaṃ bhavati /* | *anuccāranam* → *anuccāraṇam*; *śabdairyo* → *śabdair yo* |
| K10 | 6.1.84 | 53033–53034 | *adhikāro 'yam / khyatyāt parasya (\*6,1.112) iti prāg etasmāt sūtrāt iti uttaraṃ yad vakṣyāmas tatra pūrvasya parasya dvayor api sthāne ekādeśo bhavati ity etad veditavyam /* | — |
| K11 | 1.1.1 | 303–304 | *vṛddhi-śabdaḥ sañjñātvena vidhīyate, pratyekam ād-aicāṃ varṇānāṃ sāmānyena tad-bhāvitānām, atad-bhāvitānāṃ ca / taparakaraṇam aij-artham tād-api paraḥ taparaḥ iti, khaṭvaiḍakādiṣu trimātra-caturmātra-prasaṅga. nivṛttaye /* | *prasaṅga. nivṛttaye* → *prasaṅganivṛttaye* |
| K12 | 1.1.2 | 322–323 | *guṇa-śabdaḥ sañjñātvena vidhīyate, pratyekam, ad-eṅāṃ varṇānāṃ sāmānyena tad-bhāvitānām, atad-bhāvitānāṃ ca / taparakaraṇaṃ tv iha sarvārtham /* | — |
| K13 | 1.1.3 | 340–346, 356–357 | *paribhāṣā iyaṃ sthāni-niyama-arthā / aniyama-prasaṅge niyamo vidhīyate / vṛddhi-guṇau svasañjñayā śiṣyamāṇau ikaḥ eva sthāne veditavyau / vakṣyati -- sārvadhātuka-ardhadhātukayoḥ (\*7,3.84) aṅgasya guṇa iti / sa iko eva sthāne viditavyaḥ / nayati / bhavati / … guṇa-vṛddhī svasañjñayā vidhīyete, tatra ikaḥ iti etad-upasthitaṃ draṣṭavyam / kiṃ kṛtaṃ bhavati ? dvitīyayā ṣaṣṭhī prādurbhāvyate /* | *sa iko eva* → *sa ika eva*; *viditavyaḥ* → *veditavyaḥ*; "…" = 347–355 (vṛddhi examples) |
| K14 | 1.2.45 | 2791–2796 | *abhidheya-vacano 'rtha-śabdaḥ / arthavac-chabda-rūpaṃ prātipadika-sañjñaṃ bhavati dhātu-pratyayau varjayitvā / ḍitthaḥ / kapitthaḥ / kuṇḍam / pīṭham /* | — |
| K15 | 8.2.66 | 79523–79525 | *sakārāntasya padasya sajuṣ ity etasya ca ruḥ bhavati / sakārāntasya - agnir atra / vāyuratra /* | — |
| K16 | 7.1.24 | 67474–67478 | *akārāntān napuṃsakād uttarayoḥ svamoḥ am ity ayam ādeśo bhavati / kuṇḍaṃ tiṣṭhati / kuṇḍaṃ paśya / pīṭham / makāraḥ kasmān na kriyate ? dhīrghatvaṃ prāpnoti //* | *dhīrghatvaṃ* → *dīrghatvaṃ* |
| K17 | 6.1.107 | 53559–53564 | *akaḥ ity eva / ami paratoṭakaḥ pūrvaparayoḥ sthāne pūrvarupam ekādeśo bhavati / vṛkṣam / plakṣam / agnim / vāyum /* | *paratoṭakaḥ* → *parato 'kaḥ*; *pūrvarupam* → *pūrvarūpam* |
| K18 | 1.4.14 | 5618–5619 | *sup tiṅ iti pratyāhāra-garahaṇam / subantaṃ tiṅantaṃ ca śabda-rūpaṃ padasañjñaṃ bhavati /* | *garahaṇam* → *grahaṇam* |
| K19 | 8.3.15 | 80636–80642 | *raḥ iti vartate / rephāntasya padasya khari parato 'vasāne ca visarjanīyādeśo bhavati / vṛkṣaśchādayati / plakṣaśchādayati / vṛkṣastarati / plakṣastarati / avasāne - vṛkṣaḥ /* | — |
| K20 | 3.4.99 | 25492–25495 | *letaḥ iti nivṛttam / ṅito lakārasya ya uttamaḥ, tasya nityaṃ sakārasya lopo bhavati / upacāva, upacāma / nitya-grahaṇaṃ vikalpa-nivṛtty-artham //* | *letaḥ* → *leṭaḥ*; *upacāva, upacāma* → *apacāva, apacāma* (the laṅ forms the rule makes; Pass C: editions not opened) |
| K21 | 3.4.100 | 25506–25510 | *ṅitaḥ ity eva / ṅillakārasambandhina ikārasya nityaṃ lopo bhavati / apacat / apākṣīt / parasmaipadeṣu ity eva, apacāvahi, apacāmahi //* | — |
| K22 | 6.4.1 | 63158–63164 | *adhikāro 'yam āsaptamādhyāyaparisamāpteḥ / yad ita ūrdhvam anukramiṣyāmaḥ aṅgasya ity evaṃ tad veditavyam / vakṣyati - halaḥ (\*6,4.2) - hūtaḥ / jīnaḥ / saṃvītaḥ / aṅgasya iti kim ? nirutam / durutam /* | — |
| K23 | 8.2.7 | 78166–78176 | *padasya iti vartate / prātipadikasya padasya yo 'ntyo nakāraḥ tasya lopo bhavati / rājā / rājabhyām / rājabhiḥ / rājatā / rājataraḥ / rājatamaḥ / prātipadikagrahaṇaṃ kim ? ahannahim / antagrahaṇaṃ kim ? rājānau / rājānaḥ /* | — |
| K24 | 6.4.134 | 66041–66044 | *an ity evam antasya bhasya akāralopo bhavati / rājñaḥ paśya / rājñā / rājñe /* | — |
| K25 | 6.4.71 | 64692–64698 | *luṅ laṅ lṛṅ ity eteṣu parato 'ṅgasya aḍāgamo bhavati, udāttaś ca sa bhavati / luṅ - akārṣīt / ahārṣīt / laṅ - akarot / aharat / lṛṅ - akariṣyat / ahariṣyat //* | — |
| K26 | 7.1.12 | 67216–67219, 67226–67227 | *akārāntād aṅgād uttareṣām ṭāṅasiṅasām ina āt sya ity ete ādeśāḥ bhavanti yathāsaṅkhyam / ṭā ity etasya inādeśo bhavati / vṛkṣeṇa / plakṣeṇa / … ataḥ iti kim ? sakhyā / patyā /* | "…" = 67220–67225 (ṅasi, ṅas) |
| K27 | 7.1.13 | 67242–67247 | *ṅeḥ iti caturthyekavacanasya grahaṇam / akārāntād aṅgād uttarasya ṅe ity etasya yaḥ ity ayam ādeśo bhavati / vṛkṣāya / plakṣāya / ataḥ iti kim ? sakhye / patye /* | — (exam task E key; Teacher Notes of l04) |
| K28 | 6.1.87 | 53095–53097 | *aci ity anuvartate / avarnāt paro yo 'c ca pūrvo yo 'varṇaḥ tayoḥ pūrvaparayoḥ avarṇācoḥ sthāne eko guṇa ādeśo bhavati / tavedam /* | *avarnāt* → *avarṇāt*; *yo 'c ca* → *yo 'c, aci ca* (sense; Pass C) |
| K29 | 6.1.88 | 53119–53122 | *āt iti vartate / avarṇāt paro ya ec, eci ca pūrvo yaḥ avarṇaḥ, tayoḥ pūrvaparayoḥ avarṇaicoḥ sthāne vṛddhir ekādeśo bhavati / ādguṇasya apavādaḥ / brahamaiḍakā /* | *brahamaiḍakā* → *brahmaiḍakā* |
| K30 | 8.3.55 | 81480–81485 | *padādhikāro nivṛttaḥ / apadāntasya iti, mūrdhanyaḥ iti caitad adhikṛtam veditavyam āpādaparisamāpteḥ / vakṣyati - ādeśapratyayayoḥ (\*8,3.59) / siṣeva / ṣuṣVāpa / agniṣu /* | *ṣuṣVāpa* → *suṣvāpa* |
| K31 | 8.3.57 | 81519–81530 | *iṇkoḥ ity etad adhikṛtaṃ veditavyam / ita uttaraṃ yad vakṣyāmaḥ, iṇaḥ kavargāc ca ity evaṃ tad veditavyam / vakṣyati - ādeśapratyayayoḥ (\*8,3.59) / siṣeva / suṣvāpa / agniṣu / vāyuṣu / kartṛṣu / hartṛṣu / gīrṣu / dhūrṣu / vākṣu /* | — |
| K32 | 7.3.103 | 74126–74135 | *bahuvacane jhalādau supi parato 'kārāntasya aṅgasya ekārādeśo bhavati / vkṛkṣebhyaḥ / plakṣebhyaḥ / vṛkṣeṣu / plakṣeṣu / bahuvacane iti kim ? vṛkṣābhyām / plakṣābhyām / jhali iti kim ? vṛkṣāṇām / supi ity eva, yajadhvam / pacadhvam //* | *vkṛkṣebhyaḥ* → *vṛkṣebhyaḥ* |
| K33 | 8.3.59 | 81569–81577 | *mūrdhanyaḥ iti vartate, sa iti ca / ādeśapratyayayoḥ iti ṣaṣṭhī bhedena sambadhyate / ādeśo yaḥ sakāraḥ, pratyayasya ca yaḥ sakāraḥ iṇkor uttaraḥ tasya mūrdhanyo bhavati ādeśaḥ / ādeśasya tāvat - siṣeva / suṣvāpa / pratyayasya - agniṣu / vāyuṣu / kartṛṣu / hartṛṣu /* | — |
| K34 | 8.4.1 | 82805–82814 | *rephaṣakārābhyām uttarasy nakārasya ṇakārādeśo bhavati, samānapadasthau cen nimittanimittinau bhavataḥ / āstīrṇam / viśīrṇam / avagūrṇam / ṣakārāt - kuṣṇāti / puṣṇāti / muṣṇāti / ṣagrahaṇam uttarārtham, ṣṭutvena+eva hi siddham etat / samānapade iti kim ? agnirnayati / vāyurnayati /* | *uttarasy* → *uttarasya* |
| K35 | 8.4.1 (vārttika) | 82815–82819 | *ṛvarṇāc ca+iti vaktavyam / tisṛṇām / catasṛṇām / mātṝṇām / pitṝṇām /* | — |
| K36 | 8.4.2 | 82833–82845 | *aṭ ku pu āṅ num ity etair vyavāye 'pi rephaṣākārabhyām uttarasya nakārasya ṇakārādeśo bhavati / aḍvyavāye tāvat - karaṇam / haraṇam kiriṇā / giriṇā / kuruṇā / guruṇā / kavargavyavāye - arkeṇa / mūrkheṇa / gargeṇa / argheṇa / pavargavyavāye - darpeṇa / repheṇa / garbheṇa /* | *rephaṣākārabhyām* → *rephaṣakārābhyām*; *haraṇam kiriṇā* → *haraṇam / kiriṇā* (a missing separator) |
| K37 | 8.4.37 | 83577–83581 | *padāntasya nakārasya ṇakārādeśo na bhavati / vṛkṣān / plakṣān / arīn / girīn //* | — |
| K38 | 2.4.82 | 13686–13690 | *avyayād uttarasya āpaḥ supaś ca lug bhavati / tatra śālāyām / yatra śālāyām / supaḥ khalv api kṛtvā / hṛtvā //* | — |
| K39 | 1.1.51 | 1381–1383 | *uraṇ raparaḥ (\*1,1.51) / uḥ sthāne aṇ prasajyamāna eva raparo veditavyaḥ / kartā /* | — |
| K40 | 3.4.97 | 25459–25460 | *leṭaḥ ity eva / leṭ-sambhandhinaḥ ikārasya parasmaipada-viṣayasya lopo bhavati /* | *sambhandhinaḥ* → *sambandhinaḥ* (Teacher Notes only: 3.4.97 itself is about leṭ; its words लोपः and परस्मैपदेषु continue into 3.4.100) |
| L1 | VLk 93 = 8.3.15 | 399 | *khari avasāne ca padāntasāya rephasya visargaḥ /* | *padāntasāya* → *padāntasya* |
| L2 | VLk 133 = 1.4.13 | 526 | *yaḥ pratyayo yasmāt kriyate tadādiśabdasvarūpaṃ tasminnaṅgaṃ syāt //* | — |
| L3 | VLk 135 = 6.1.107 | 532 | *ako 'myaci pūrvarūpamekādeśaḥ / rāmam / rāmau //* | — |
| L4 | VLk 138–140 = 8.4.2, 8.4.37, 7.1.12 | 541, 544, 547 | *aṭ kavargaḥ pavargaḥ āṅ num etairvyastairyathāsaṃbhavaṃ militaiśca vyavadhāne 'pi raṣābhyāṃ parasya nasya ṇaḥ samānapade / iti prāpte // … nasya ṇo na / rāmān // … adantāṭṭādīnāminādayaḥ syuḥ / ṇatvam / rāmeṇa //* | — |
| L5 | VLk 164 = 1.4.17 | 619 | *kappratyayāvadhiṣu svādiṣvasarvanāmasthāneṣu pūrvaṃ padaṃ syāt //* | — |
| L6 | VLk 165 = 1.4.18 | 622 | *yādiṣvajādiṣu ca kappratyayāvadhiṣu svādiṣvasarvanāmasthāneṣu pūrvaṃ bhasaṃjñaṃ syāt //* | — |
| L7 | VLk 150 = 8.3.59 | 577 | *iṇkubhyāṃ parasyāpadāntasyādeśasya pratyayāvayavasya yaḥ sastasya mūrdhanyādeśaḥ / īṣadvivṛtasya sasya tādṛśa eva ṣaḥ / rāmeṣu / evaṃ kṛṣṇādayo 'pyadantāḥ //* | — |
| L8 | VLk 180, 248 = 8.2.7, 6.4.134 | 667, 883 | *prātipadikasaṃjñakaṃ yatpadaṃ tadantasya nasya lopaḥ / sakhā // … aṅgāvayavo 'sarvanāmasthānayajādisvādiparo yo 'n tasyākārasya lopaḥ / dadhnā / dadhne …* | — |
| L9 | VLk 373 = 2.4.82 | 1284 | *avyayādvihitasyāpaḥ supaśca luk / tatra śālāyām //* | — |
| L10 | VLk 163 = 1.1.43 | 616 | *svādipañcavacanāni sarvanāmasthānasaṃjñāni syuraklībasya //* | — |
| M1 | Mahābhāṣya, e-text header | 40 | "BOLD for Kātyāyana's Vārttikas" | (an editorial statement of the e-text, quoted as such) |
| M2 | Paspaśāhnika 3 {1/17}–{4/17} | 144–147 | *kāni punaḥ śabdānuśāsanasya prayojanāni . / rakṣohāgamalaghvasandehāḥ proyojanam . / rakṣārtham vedānām adhyeyam vyākaraṇam . / lopāgamavarṇavikārajñaḥ hi samyak vedān paripālayiṣyati .* | *proyojanam* → *prayojanam* (145). The e-text is in pausa (segmented): the course prints the joined Devanagari of rows 0.17, 0.21 and lists the joins. |
| M3 | on 3.2.3, {86/91} (bold: a vārttika) | 24006 | *yaḥ anādiṣṭāt acaḥ pūrvaḥ tatkārye sthānivattvam hi provāca bhagavān kātyaḥ .* | — (Teacher Notes only: the name of the vārttikakāra in the text) |

### 0.F The derivations (fixed format, plan §1.4.2 and the c01 four-column correction; every step re-derived)

Tier marks: (Q), (B), (D), (K), (owned) for a Volume 3 / Chapter 1 tool already owned, (preview:
lesson) for a later lesson's step. "Teacher Notes" in the Sūtra column = the number is in Teacher
Notes only. Before l03 a carried word is printed c01-style "[word, carried from N.N.N]"; from l03 the
bracket lines of row 0.18 (written out in §3).

**D-a — Derive, according to Pāṇini, राम + सुँ → रामः** (l01; with the teacher)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | राम + सुँ | 3.1.1 प्रत्ययः · 3.1.2 परश्च (B) | the affix सुँ (the first ending of the sup list) comes after the base राम |
| 1 | राम + सुँ | 1.3.2 उपदेशेऽजनुनासिक इत् (B) | the nasal उँ of सुँ is a marker |
| 2 | राम + स् | 1.3.9 तस्य लोपः (B, owned c01) | the marker is dropped |
| 3 | राम + स् | 1.4.13 यस्मात् प्रत्ययविधिस्तदादि प्रत्ययेऽङ्गम् (B) | राम is aṅga before स् (a name: nothing changes) |
| 4 | राम + रुँ | 8.2.66 ससजुषो रुः (D) | रामस् ends in a sup: a pada (1.4.14, owned); its final स् → रुँ |
| 5 | राम + र् | 1.3.2 · 1.3.9 (B) | the उँ of रुँ is a marker, dropped |
| 6 | **रामः** | 8.3.15 खरवसानयोर्विसर्जनीयः (D) | at a pause the final र् → visarga |

Line under the table (plan; review c02:P#8): "Before सुँ, a strong ending, the base राम is not called
pada (1.4.17 leaves the strong endings out); the whole word रामस् is a pada because it ends in a sup
(1.4.14)." FACT beside it: Whitney §327a "The nom. masc. has the normal ending s" [REF:whitney1889
§327]; the visarga is its pause form (v1.c02.l06).

**D-b — Derive, according to Pāṇini, फल + सुँ → फलम्** (l01; derive it yourself; key)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | फल + सुँ | 3.1.1 · 3.1.2 (B) | फल, a neuter stem in short अ; the ending सुँ |
| 1 | फल + अम् | 7.1.24 अतोऽम् (D) [स्वमोः, नपुंसकात्: carried from an earlier rule, Teacher Notes] | after a neuter stem in short अ, सुँ (and अम्) → अम् |
| 2 | फलम् | 6.1.107 अमि पूर्वः (D) [अचि, अकः, carried from 6.1.77 and 6.1.101] | अ + the अ of अम् → one vowel, the first |
| 3 | **फलम्** | — | the म् of अम् stays: a final म् of an ending is no marker (Teacher Notes) |

Teacher Notes: 7.1.23 स्वमोर्नपुंसकात् is the source of स्वमोः and नपुंसकात्; the Kāśikā asks why the
substitute is not just म् (K16: *dīrghatvaṃ prāpnoti*, "lengthening would then apply" — 6.1.102);
L3. Whitney §327b: "The acc. (masc. and neut.) adds m (not am); and this form has the office also of
nom. neuter" (FACT; the two accounts differ in form and agree in result).

**D-c — Derive, according to Pāṇini, राजन् + भिस् → राजभिः** (l01; with the teacher; exam task D)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | राजन् + भिस् | 3.1.1 · 3.1.2 (B) | the instr. pl. ending; its final स् is kept (no marker) |
| 1 | राजन् + भिस् | 1.4.17 स्वादिष्वसर्वनामस्थाने (Q) [पदम्, carried from 1.4.14] | भिस् begins with a consonant and is not strong: राजन् is pada |
| 2 | राज + भिस् | 8.2.7 नलोपः प्रातिपदिकान्तस्य (D) | the न् at the end of a nominal base that is a pada is dropped |
| 3 | राजभि + रुँ | 8.2.66 ससजुषो रुः (D) | राजभिस् ends in a sup: a pada; final स् → रुँ |
| 4 | राजभि + र् | 1.3.2 · 1.3.9 (B) | the marker उँ dropped |
| 5 | **राजभिः** | 8.3.15 खरवसानयोर्विसर्जनीयः (D) | at a pause: visarga |

Line under the table (plan, review c02:P#3, E#2, post:form#0): "After step 2 the base राज ends in अ,
yet 7.1.9 अतो भिस ऐस् does not make *राजैः: why is 8.2.1 (preview, c06.l03)." FACT: Whitney §421
("in the middle cases, or before a case-ending beginning with a consonant, the final n is dropped"),
§424 I. pl. राजभिस् [REF:whitney1889 §424]. The Kāśikā's own examples under 8.2.7: *rājā, rājabhyām,
rājabhiḥ* (K23).

**D-d — Derive, according to Pāṇini, राजन् + टा → राज्ञा** (l01; with the teacher)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | राजन् + टा | 3.1.1 · 3.1.2 (B) | the instr. sg. ending |
| 1 | राजन् + आ | (Teacher Notes) · 1.3.9 (B) | the ट् of टा is a marker (the ending-marker line), dropped |
| 2 | राजन् + आ | 1.4.18 यचि भम् (Q) [स्वादिषु, असर्वनामस्थाने, carried from 1.4.17] | आ is a vowel and टा is not strong: राजन् is bha |
| 3 | राज्न् + आ | 6.4.134 अल्लोपोऽनः (D) | of a bha base ending in अन्, the अ of अन् is dropped |
| 4 | **राज्ञा** | 8.4.40 स्तोः श्चुना श्चुः (D, owned) | न् → ञ् in contact with ज्: ज् + ञ् is written ज्ञ |

English line of 6.4.134 (the Kāśikā's words, K24, and the LSK's, L8, which restricts it to an अन्
that is part of the aṅga before a non-strong y-/vowel-initial ending; review c02:P#1, rejected,
noted): "Of a bha base ending in अन्, the अ [of the अन्] is dropped." FACT: Whitney §421 ("in the
weakest cases it is in general struck out altogether"), §424 I. sg. राज्ञा.

**D-e — Derive, according to Pāṇini, नमस् + सुँ → नमः, and नमः + ते → नमस्ते** (l01; with the teacher)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | नमस् + सुँ | 1.1.37 स्वरादिनिपातमव्ययम् (owned) | नमस् is an avyaya; it still takes the ending |
| 1 | नमस् | 2.4.82 अव्ययादाप्सुपः (D) [लुक्, carried from an earlier rule: Teacher Notes] | after an avyaya, the sup is deleted (luk) |
| 2 | नमस् | (Teacher Notes) · 1.4.14 (owned) | the deleted ending still counts: नमस् is a pada |
| 3 | नम + रुँ | 8.2.66 ससजुषो रुः (D) | pada-final स् → रुँ |
| 4 | नम + र् | 1.3.2 · 1.3.9 (B) | the marker उँ dropped |
| 5 | **नमः** | 8.3.15 खरवसानयोर्विसर्जनीयः (D) | at a pause → visarga |
| 6 | नमः + ते (from step 4: नमर् + ते) | 8.3.15 (D) | before त्, a khar sound, the र् is also a visarga |
| 7 | **नमस्ते** | 8.3.34 विसर्जनीयस्य सः (owned) | the visarga → स् before a khar sound |

Line under it: "So the स् of नमस्ते is a substitute for the visarga, not the stem's स् left untouched."
Teacher Notes: 1.1.62 प्रत्ययलोपे प्रत्ययलक्षणम्; 2.4.58 is the source of लुक् (data file an:
लुक् 2.4.58); L9 (the LSK reads 2.4.82 as VLk 373).

**D-f — राजन् + सुँ → राजा** (l01; display ○, read with the teacher, never asked)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | राजन् + सुँ | — | the nom. sg. ending |
| 1 | राजन् + स् | 1.3.2 · 1.3.9 (B) | marker उँ dropped |
| 2 | राजन् + स् | 1.1.43 सुडनपुंसकस्य (K) | सुँ is one of the five strong endings: no pada, no bha |
| 3 | राजान् + स् | 6.4.8 (preview, c05.l03) | before a strong ending the अ before न् is lengthened |
| 4 | राजान् | 6.1.68 (preview, c05.l03) | the lone स् after a consonant is dropped |
| 5 | राजान् | (Teacher Notes) · 1.4.14 (owned) | the dropped ending still counts: a pada |
| 6 | **राजा** | 8.2.7 नलोपः प्रातिपदिकान्तस्य (D) | the pada-final न् is dropped |

**D-g — Derive, according to Pāṇini, सूर्य + उदयः → सूर्योदयः** (l02; with the teacher)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | सूर्य + उदयः | — | two members of a compound meet (owned since v3.c04.l01) |
| 1 | सूर्य + उदयः | 6.1.84 एकः पूर्वपरयोः (D) | one substitute will stand for both vowels |
| 2 | सूर्य् + ओ + दयः | 6.1.87 आद्गुणः [अचि, carried from 6.1.77] (owned) · 1.1.2 अदेङ् गुणः (B) | after अ, before a vowel: a guṇa vowel, one of अ ए ओ |
| 3 | सूर्योदयः | 1.1.50 स्थानेऽन्तरतमः (D, owned c01) | of अ ए ओ, ओ is the nearest to उ |
| 4 | **सूर्योदयः** | — | joined |

Line under it: "1.1.3 is not needed here: it gives 'in place of an इक्' to a rule that names guṇa or
vṛddhi and has no genitive (the Kāśikā: a genitive is made to appear, K13); under 6.1.84 the replaced
items are already named — both vowels."

**D-h — Derive, according to Pāṇini, तत्र + एव → तत्रैव** (l02; derive it yourself; key)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | तत्र + एव | 6.1.84 (D) | one substitute for both vowels |
| 1 | तत्र् + ऐ + व | 6.1.88 वृद्धिरेचि [आत्, carried from 6.1.87] (owned) · 1.1.1 वृद्धिरादैच् (Q) | after अ, before ए: a vṛddhi vowel, one of आ ऐ औ |
| 2 | तत्रैव | 1.1.50 (D) | of आ ऐ औ, ऐ is the nearest to ए |
| 3 | **तत्रैव** | — | joined |

**D-i — Derive, according to Pāṇini, गच्छ- + लङ् → अगच्छत्** (l02; with the teacher)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | गच्छ + ल् | (c03.l02) the stem गच्छ- given; (c03.l01) लङ् for the past | laṅ, its markers ङ् and अ removed |
| 1 | गच्छ + तिप् | 3.4.78 (preview, c03.l01) | **substitute**: ल् → तिप् (3sg P) |
| 2 | गच्छ + ति | 1.3.3 हलन्त्यम् · 1.3.9 (B, owned c01) | the प् of तिप् is a marker, dropped (deletion) |
| 3 | गच्छ + त् | 3.4.100 इतश्च (D) [ङितः, carried from 3.4.99; and, from an earlier rule (Teacher Notes), लोपः "deletion" in the P endings] | **deletion**: the इ of a P ending of a ṅ-marked l-affix |
| 4 | अट् + गच्छ + त् | 6.4.71 लुङ्लङ्लृङ्क्ष्वडुदात्तः (D) · 1.1.46 आद्यन्तौ टकितौ (D) | **augment** अट् before laṅ; its ट् puts it at the beginning |
| 5 | अ + गच्छ + त् | 1.3.3 · 1.3.9 (B) | the ट् of अट् is a marker, dropped |
| 6 | **अगच्छत्** | — | joined |

Plan's step 1 says "ल् → तिप् (3sg P), its प् a marker" (review c02:P#7: 3.4.78 gives तिप्, not ति):
split here into steps 1–2. The order augment-after-ending follows the plan; the LSK adds the augment
on laṅ in the same position (Teacher Notes; no line printed). The accent word उदात्तः in 6.4.71 is
glossed "[which is] accented — accent is Volume 5's" (plan principle 12). FACT beside it: Whitney
calls the augment "the augment a" (the imperfect, §585 — **not opened**: cite only [REF:whitney1889]
bare if a FACT line is wanted; recommended none).

**D-j — Derive, according to Pāṇini, राम + टा → रामेण** (l03; with the teacher). Bracket lines in §3.

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | राम + टा | — | the instr. sg. ending |
| 1 | राम + इन | 7.1.12 टाङसिङसामिनात्स्याः (D) | after an a-stem aṅga, टा → इन |
| 2 | रामेन | 6.1.87 आद्गुणः (owned) | अ + इ → ए |
| 3 | रामेन (र … न) | 8.4.1 रषाभ्यां नो णः समानपदे (Q) | र stands earlier in the same word: न → ण … |
| 4 | रामेण | 8.4.2 अट्कुप्वाङ्नुम्व्यवायेऽपि (D) | … although आ, म्, ए stand between: आ, ए are अट्, म् is in the p-row |
| 5 | **रामेण** | — | — |

**D-k — Derive, according to Pāṇini, राम + सुप् → रामेषु** (l03; with the teacher)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | राम + सु | 1.3.3 · 1.3.9 (B) | सुप्, the loc. pl. ending; its प् is a marker |
| 1 | रामे + सु | 7.3.103 बहुवचने झल्येत् (D) | before a plural sup beginning with a jhal sound, the अ of the aṅga → ए |
| 2 | रामे + षु | 8.3.59 आदेशप्रत्यययोः (D), under 8.3.55 and 8.3.57 | स् of an affix, after ए (an इण् sound), not word-final → retroflex: ष् (nearest, 1.1.50) |
| 3 | **रामेषु** | — | — |

**D-l — Derive, according to Pāṇini, करो- + सि → करोषि** (l03; with the teacher) — the stem करो- given
(c03.l03); the ending सि from सिप् (its प् a marker; 3.4.78, preview c03.l01).

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | करो + सि | (c03.l03) the stem; (c03.l01) सिप् → सि | stem + the 2sg ending |
| 1 | करो + षि | 8.3.59 आदेशप्रत्यययोः (D), under 8.3.55 and 8.3.57 | स् of an affix after ओ (an इण् sound), not word-final → ष् |
| 2 | **करोषि** | — | — |

**D-m — Derive, according to Pāṇini, गच्छ- + लङ् (1pl) → अगच्छाम** (l03; the D step of 3.4.99, read in
§15 and used in Ex 3 (6))

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | गच्छ + मस् | (c03.l02) stem; 3.4.78 (preview, c03.l01) | ल् → मस् (1pl P) |
| 1 | गच्छ + म | 3.4.99 नित्यं ङितः (D) | after a ṅ-marked l-affix the स् of a 1st-person ending is always dropped |
| 2 | गच्छा + म | 7.3.101 अतो दीर्घो यञि (owned) | the stem's अ is lengthened before म (yañ) |
| 3 | अ + गच्छाम | 6.4.71 · 1.1.46 (D; l02) | the augment अट् at the beginning (its ट् dropped) |
| 4 | **अगच्छाम** | — | — |

FACT: अगच्छाम is the owned laṅ 1pl (Volume 3, laṅ P ✓).

**D-n — गुरु + ङे → गुरवे** (l02; derive it yourself, steps given as the l02 Ex 3 key; the guṇa rule in
Teacher Notes)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | गुरु + ए | (preview, c03.l02) · 1.3.9 (B) | the dat. sg. ending ङे; its ङ् is a marker |
| 1 | गुरो + ए | (Teacher Notes) · 1.1.2 अदेङ् गुणः (B) · 1.1.50 (D) | a rule puts guṇa in place of the stem's final उ; of अ ए ओ, ओ is nearest |
| 2 | गुरव् + ए | 6.1.78 एचोऽयवायावः [अचि] (owned) | ओ before a vowel → अव् |
| 3 | **गुरवे** | — | — |

FACT: Whitney §336d (row 0.22). Teacher Notes: 7.3.111 घेर्ङिति (data file an: गुणः 7.3.108).

**D-o — ऐच्छत्** (l02; read, not derived by the learner; its two rules Teacher Notes)

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | इच्छ + त् | D-i steps 1–3 | as अगच्छत् |
| 1 | आ + इच्छ + त् | (Teacher Notes) · 1.1.46 (D) | before a vowel-initial stem the augment is आट्, not अट्; ट् → at the beginning |
| 2 | ऐच्छत् | (Teacher Notes) · 1.1.1 (Q) | आ + इ → ऐ: vṛddhi, a substitute |
| 3 | **ऐच्छत्** | — | — |

Exam keys D-p … D-u: §4.

---

## 1. L1 — अङ्गं पदं भम्: One Base, Three Names (grammar)

**Front matter.** id `v4.c02.l01` · file `lesson-01-one-base-three-names.md` · title sa अङ्गं पदं भम् ·
sa_iast *aṅgaṃ padaṃ bham* · en "One Base, Three Names" · hi "एक प्रकृति, तीन नाम" · lesson_type
grammar · cefr B1 · duration 45 · self_study_minutes **45** · prerequisites [v4.c01.l04] · review_of
[v4.c01.l04, v4.c01.l03, v3.c01.l05, v3.c01.l04, v1.c05.l02] · vocabulary_count **6** · tags [grammar,
panini, prakrti-pratyaya, it-markers, anga-pada-bha, rajan, namaste-thread, sup-pratyahara,
derivation, mahabhashya, spaced-review] · media (planned): image `v4c02l01-one-base-three-names.svg`
(राजन् in the middle; three arrows: strong → राजानम्, pada → राजभिः, bha → राज्ञा, each arrow labelled
with its rule); audio `v4c02l01-derivations-read.mp3`, `v4c02l01-conversation.mp3`; worksheet
`v4c02l01-three-boxes.pdf`; quizzes `v4c02l01-quiz.md`, `v4c02l01-quiz-key.md`.

**Objectives.**
1. en "Take six owned forms apart into base, affix and marker (प्रकृतिः · प्रत्ययः · इत्), naming the
   markers as today's ending-marker line gives them." · hi "छह परिचित रूपों को प्रकृति, प्रत्यय और इत्
   में अलग करें, और इत् आज की अन्त्य-चिह्न पंक्ति के अनुसार बताएँ।"
2. en "Name the base राजन् strong, pada or bha before twelve endings, and say which rule each name
   sets off." · hi "बारह प्रत्ययों से पहले राजन् को सर्वनामस्थान (सबल), पद या भ बताएँ, और कहें कि हर
   नाम कौन-सा नियम चलाता है।"
3. en "Derive, according to Pāṇini, in table form, रामः, राजभिः, राज्ञा and नमः (with नमस्ते), and
   by yourself फलम्, वनम्, देवः and नृपः." · hi "पाणिनि के अनुसार, तालिका में, रामः, राजभिः,
   राज्ञा और नमः (नमस्ते सहित) की व्युत्पत्ति करें, और स्वयं फलम्, वनम्, देवः और नृपः की।"
4. en "Say and write six sentences with राजा, प्रकृतिः, प्रत्ययः, आत्मा, स्वामी and भृत्यः, joined,
   with the pause form beneath." · hi "राजा, प्रकृतिः, प्रत्ययः, आत्मा, स्वामी और भृत्यः से छह वाक्य
   सन्धि सहित बोलें और लिखें, नीचे विराम-रूप के साथ।"

**The opening (§1).** The learner has written रामः since Volume 1 and has known since v1.c02.l06
that its ः is "a breath at the end". Question: where in रामः is the ending, and why does the ending
सुँ that Volume 3 showed in the sup picture (4.1.2) come out as ः? Second puzzle: Volume 3 gave the
learner नृपः "so that 'king' is usable before राजन्" (v3.c01.l04): today राजा arrives, and with it
three different-looking forms of one base — राजा, राजभिः, राज्ञा.

**The one grammar point (plan).**
- A word is a base (प्रकृतिः) plus an affix (प्रत्ययः) placed after it (3.1.1–2), with the affix's
  markers removed. The base is called **aṅga** before any affix (1.4.13).
- Before case endings it has two further names. It is **pada** before the consonant-initial
  endings other than the five strong ones (1.4.17). It is **bha** before the vowel- or y-initial
  ones other than the five strong ones (1.4.18).
- What a rule does to a base depends on the name it bears.

**Forms taught.** D-a (रामः), D-c (राजभिः), D-d (राज्ञा), D-e (नमः, नमस्ते) with the teacher; D-b
(फलम्) and its kin by the learner; D-f (राजा) ○ display; table 0.A ○ display with its bold cells
derived; the ending-marker line (row 0.5); *sup* as a pratyāhāra (row 0.6); the sort (S0-db's twelve
endings, the main-risk fix).

**Sūtras by tier (tools added: 13).**
- **Q — 1.4.17 स्वादिष्वसर्वनामस्थाने** (*svādiṣv asarvanāmasthāne*). Padaccheda: स्वादिषु (सप्तमी,
  plural: "before the endings beginning with सुँ") · असर्वनामस्थाने (सप्तमी: "before one that is not
  a sarvanāmasthāna") · [पदम्, carried from 1.4.14] (प्रथमा: the name given). English: "Before the
  endings from सुँ on, except the strong ones, [the base is called] pada." [REF:kashika 1.4.18] (the
  e-text has no comment under 1.4.17; the sense is the Kāśikā's restatement under 1.4.18, K7, and the
  LSK's, L5 [REF:laghukaumudi on 1.4.17]).
- **Q — 1.4.18 यचि भम्** (*yaci bham*). Padaccheda: यचि (सप्तमी: "before [an ending that begins
  with] य or a vowel": य + अच्) · भम् (प्रथमा: the name bha) · [स्वादिषु, असर्वनामस्थाने, carried from
  1.4.17]. English: "Before [such an ending] beginning with य or a vowel, [the base is called] bha."
  [REF:kashika 1.4.18] (K7: *yakārādāv ajādau ca svādau sarvanāmasthānavarjite pratyaye parataḥ
  pūrvaṃ bhasañjñaṃ bhavati*; it is an exception to 1.4.17, *tadapavādaḥ*).
- **B — 3.1.1 प्रत्ययः** (*pratyayaḥ*). Padaccheda: प्रत्ययः (प्रथमा: the name). English: "[What is
  taught from here on is called] an affix." A heading over Books 3–5 [REF:kashika 3.1.1] (K1).
- **B — 3.1.2 परश्च** (*paraś ca*). Padaccheda: परः (प्रथमा: "following, after") · च ("and").
  English: "And it comes after [the root or nominal base]." [REF:kashika 3.1.2] (K2).
- **B — 1.3.2 उपदेशेऽजनुनासिक इत्** (*upadeśe 'j anunāsika it*). Padaccheda: उपदेशे (सप्तमी: "in a
  teaching" — a locative of place, not "before") · अच् (प्रथमा: "a vowel") · अनुनासिकः (प्रथमा:
  "nasal") · इत् (प्रथमा: the name, marker). English: "In a teaching, a nasal vowel is a marker."
  [REF:kashika 1.3.2] (K3; the nasality is the tradition's declaration, row 0.5).
- **B — 1.4.13 यस्मात् प्रत्ययविधिस्तदादि प्रत्ययेऽङ्गम्** (*yasmāt pratyayavidhis tadādi pratyaye
  'ṅgam*). Padaccheda: यस्मात् (पञ्चमी: "from which" — the item after which the affix is enjoined) ·
  प्रत्ययविधिः (प्रथमा: "an affix is enjoined") · तदादि (प्रथमा: "beginning with that") · प्रत्यये
  (सप्तमी: "before the affix") · अङ्गम् (प्रथमा: the name). English: "That after which an affix is
  enjoined, [and what begins with it], is called aṅga before that affix." [REF:kashika 1.4.13] (K5).
- **D — 8.2.66 ससजुषो रुः** — "The स् at the end of a pada [and that of सजुष्] becomes रुँ."
  [REF:kashika 8.2.66] (K15).
- **D — 8.3.15 खरवसानयोर्विसर्जनीयः** — "[A pada-final र्] becomes visarga before a khar sound or at
  a pause." [REF:kashika 8.3.15] (K19: *raḥ iti vartate*).
- **D — 7.1.24 अतोऽम्** — "After a neuter stem in short अ, सुँ and अम् are replaced by अम्."
  [REF:kashika 7.1.24] (K16).
- **D — 6.1.107 अमि पूर्वः** — "Before अम्, [an अक् vowel and the अ of अम्] become one vowel: the
  first." [REF:kashika 6.1.107] (K17).
- **D — 8.2.7 नलोपः प्रातिपदिकान्तस्य** — "The न् at the end of a nominal base that is a pada is
  dropped." [REF:kashika 8.2.7] (K23).
- **D — 6.4.134 अल्लोपोऽनः** — "Of a bha base ending in अन्, the अ [of the अन्] is dropped."
  [REF:kashika 6.4.134] (K24).
- **D — 2.4.82 अव्ययादाप्सुपः** — "After an indeclinable (avyaya), the case ending [and the
  feminine आप्] is deleted (luk)." [REF:kashika 2.4.82] (K38).
- **D (owned) — 8.4.40 स्तोः श्चुना श्चुः** — as Volume 3 and c01 word it ("स् and the त-row become
  श् and the च-row in contact with श् or the च-row"); not counted.
- **K (card) — 1.2.45 अर्थवदधातुरप्रत्ययः प्रातिपदिकम्** — "A meaningful form that is not a root
  and not an affix is called prātipadika (a nominal base)." [REF:kashika 1.2.45] (K14). **1.1.43
  सुडनपुंसकस्य** — "The five endings सुँ, औ, जस्, अम्, औट् are called sarvanāmasthāna (the strong
  endings), except after a neuter." [REF:kashika 1.1.43] (K6, whose examples are राजन्'s strong
  cells).
- **Re-read (owned):** 1.4.14 सुप्तिङन्तं पदम् (v3.c01.l05), 1.3.9 तस्य लोपः, 1.3.3 हलन्त्यम्, 1.1.71
  (*sup*), 1.1.37, 8.3.34.
- **Labelled previews (number printed with its lesson; no tier):** 1.3.8 (c03.l02), 6.4.8 and 6.1.68
  (c05.l03), 8.2.1 (c06.l03), 4.1.2 (the owned picture).
- **Teacher Notes (number only there):** 1.3.4, 1.3.7, 1.1.62, 6.4.136, 7.1.23, 2.4.58, 1.4.1 (the
  heading आकडारादेका संज्ञा), 5.4.151 (the LSK's *kap*).

**The derivations.** D-a, D-c, D-d, D-e with the teacher, in that order; D-f read as display; D-b is
the derive-it-yourself model (table 0.F). The sort (Ex 3) between D-d and D-e.

**The 1.x card corrected in the open (row 0.15 (e); learner text, §8 and §12).** Printed as one boxed
paragraph, plain text (no callout): "The 1.x book printed the rājan card with four errors (p. 98). It
glossed 1.4.18 'Before vowel-initial endings or those starting in sibilant + vowel, the stem is bha':
the य of यचि is the semivowel य, not a sibilant. It said that 'In "weak" cases (3rd-7th cases) before
vowel endings, stems collapse': the second-case plural राज्ञः (शस्; a display form) is bha too, though it is no 3rd–7th case; and the
bha rule drops only the अ (राज्न् + आ). It printed 'Case 1 sg: राजा (pada — n drops)' and 'Case 2
sg: राजानम् (aṅga — n stays)': before सुँ and अम् the base is strong (sarvanāmasthāna), neither pada
nor 'just aṅga' — every base is aṅga before an affix. The न् of राजा drops for another reason: once
the ending is gone, the whole word is a pada (1.4.14; the reason a deleted ending still counts:
Teacher Notes), and 8.2.7 drops the न्."

**Model sentences** (the plan's six; checked word by word; seams per row 0.20).
1. रामशब्दे राम इति प्रकृतिः, सुरिति प्रत्ययः। (*rāmaśabde rāma iti prakṛtiḥ, sur iti
   pratyayaḥ.*) — pause: राम-शब्दे रामः इति प्रकृतिः, सुः इति प्रत्ययः। (*rāma-śabde rāmaḥ iti
   prakṛtiḥ, suḥ iti pratyayaḥ.*) — "In the word rāmaḥ, rāma is the base and su the affix." — राम
   शब्द में राम प्रकृति है, सु प्रत्यय। (रामः, सुः: in the pause form the base and the affix are named as words, each with a case ending, as labels; the base itself is राम, without ending. In §16 राजन् is named bare instead: राजन्निति.)
2. प्रत्ययः प्रकृतेः परो भवति। (*pratyayaḥ prakṛteḥ paro bhavati.*) — pause: प्रत्ययः प्रकृतेः परः
   भवति। — "The affix comes after the base." — प्रत्यय प्रकृति के बाद आता है। (3.1.2 in a sentence;
   प्रकृतेः is ◐: the ablative of an f. i-stem, Volume 3's मतिः Δ card; read, not drilled.)
3. राजा नृपश्चैकार्थौ। (*rājā nṛpaś caikārthau.*) — pause: राजा नृपः च एक-अर्थौ। — "राजा and नृपः
   have one meaning." — राजा और नृप एकार्थक हैं। (एकार्थौ, m. du. of the bahuvrīhi "having one
   meaning", ✓: the dual nominative.)
4. राज्ञा सह सेवको गच्छति। (*rājñā saha sevako gacchati.*) — pause: राज्ञा सह सेवकः गच्छति। — "The
   servant goes with the king." — सेवक राजा के साथ जाता है। (राज्ञा: derived today, D-d.)
5. राजभिः किं कृतम्? (*rājabhiḥ kiṃ kṛtam?*) — pause: राजभिः किम् कृतम्? — "What was done by the
   kings?" — राजाओं ने क्या किया? (the R2 frame, owned; राजभिः: derived today, D-c.)
6. स्वामी भृत्येन सह गच्छति। (*svāmī bhṛtyena saha gacchati.*) — pause: the same — "The master goes
   with his servant." — स्वामी सेवक के साथ जाता है। (स्वामी, like राजा, counted by its nominative;
   its other cells come in c05.l03.)

**A seventh line for आत्मा** (the plan's headword, used in no model sentence; added to §6 and Ex 4,
§7, deviation 5): आत्मा नरस्य मित्रम्। (*ātmā narasya mitram.*) — pause: the same — "One's self is a
man's friend." — आत्मा मनुष्य का मित्र है। (No sandhi at its seams: -आ + न, -स्य + म.)

**Headwords (6; 521 → 527).**

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status | dictionary; why now |
|---|---|---|---|---|---|---|---|
| राजा | rājā | /ɾɑːd͡ʑɑː/ | king | राजा | m. n-stem (राजन्); counted by its nominative (rule 14) | ledger-new (`owned.py`: -) | MW s.v. rājan "a king, sovereign, prince, chief"; Apte s.v. राजन् "A king, ruler, prince"; the lesson's example; DCS Hitopadeśa 227 tokens (`hitlem.txt`) |
| प्रत्ययः | pratyayaḥ | /pɾɐt̪jɐjɐh/ | affix; trust, conviction | प्रत्यय; विश्वास | m. a-stem | ledger-new (-) | MW s.v. pratyaya "belief, firm conviction, trust …", "an affix or suffix to roots … Pāṇ."; Apte s.v. प्रत्ययः 1 "Conviction", 8 "A termination, an affix or suffix"; the term (rule 20: used in model sentences 1, 2) |
| प्रकृतिः | prakṛtiḥ | /pɾɐkr̩t̪ih/ | base (of a word); nature | प्रकृति; स्वभाव | f. i-stem (✓ nom./acc./instr.) | ledger-new (-) | MW s.v. prakṛti "nature, character …", "(in gram.) the crude or elementary form of a word, base, root"; Apte s.v. प्रकृतिः 1 "The natural condition … nature", 7 "(In gram.) The radical or …"; Hit 1.17 *yathā prakṛtyā madhuraṃ gavāṃ payaḥ* (`hitop_u.htm` line 370) |
| आत्मा | ātmā | /ɑːt̪mɑː/ | self; soul | आत्मा, स्वयं | m. n-stem (आत्मन्); nominative only (rule 14) | ledger-new (-) | MW s.v. ātman "the breath", "the soul …", "the individual soul, self"; Apte s.v. आत्मन्; Hit *ātmanaḥ putrāṇām* (line 139); DCS 73 tokens |
| स्वामी | svāmī | /sʋɑːmiː/ | master, lord; owner | स्वामी, मालिक | m. in-stem (स्वामिन्); nominative only (rule 14) | ledger-new (-) | MW s.v. svāmin "an owner, proprietor, master, lord"; Apte s.v. स्वामिन्; Hit 1.188 *sa svāmī yujyate bhuvi* (line 1249); DCS 68 tokens (rule 22) |
| भृत्यः | bhṛtyaḥ | /bʱr̩t̪jɐh/ | servant, dependant | सेवक, नौकर | m. a-stem | ledger-new (-) | MW s.v. bhṛtya m. "a dependent, servant (also the s˚ of a king, a minister)"; Apte s.v. भृत्य (--त्यः); Hit *kiṃ-bhṛtyaḥ* (line 1500); DCS 22 tokens; a kṛt noun of भृ, lexicalised (rule 18) |

**§14 line:** "Ledger 521 → 527 (6 ledger-new). Cells drilled: 3 (रामः, राजभिः, राज्ञा, derived; the
other राजन् cells ○). Tools added: 13 (1.4.17, 1.4.18 Q; 3.1.1, 3.1.2, 1.3.2, 1.4.13 B; 8.2.66,
8.3.15, 7.1.24, 6.1.107, 8.2.7, 6.4.134, 2.4.82 D)." (Plan note kept: "the heaviest count of Chapter
2: six of them are the one-line steps of रामः and नमः.")

**§3 Station 0 (verbatim; diffed against v4.c01.l03 §20 and v4.c01.l04 §20: identical) and review
prompts.**
- +1 day: the fourteen written — the fourteen sūtras written from memory, every marker circled;
  v4.c02.l01's Station 0 runs exactly this.
- +1 week: the case code again — circle what is replaced and arrow the context in 6.1.77 इको यणचि,
  6.1.78 एचोऽयवायावः, 7.1.9 अतो भिस ऐस् and 7.3.101 अतो दीर्घो यञि, then derive, according to
  Pāṇini, देव + भिस् → देवैः in table form; v4.c02.l01's Station 0 runs exactly this.
Keys: S0-cg, S0-cf (0.D-keys). Review prompts (each reaches a review_of lesson): (v3.c01.l05) "Say
1.4.14 and what it calls a पदम्" — सुप्तिङन्तं पदम्: a form that ends in a sup or a tiṅ ending;
(v3.c01.l04) "Give नृपः in the instrumental and the genitive singular" — नृपेण, नृपस्य; (v1.c05.l02)
"Split नमस्ते and say what each part means" — नमः "homage" + ते "to you".

**§4 Historical Context.** **[TRADITION · परम्परा]** "In Pāṇini's grammar an affix is taught by a
heading: from 3.1.1 प्रत्ययः on, what the rules introduce is an affix, and by 3.1.2 परश्च it comes
after the root or base it is added to. The Kāśikā, a commentary on the whole Aṣṭādhyāyī (c. 7th
century CE), calls both rules headings. [REF:kashika 3.1.1]; [REF:kashika 3.1.2]" No 1.x card is a
callout; the corrected card is plain text (above).

**§5 Scientific Explanation (FACT).** Whitney's description of the same stems: "The stem has a
triple form. In the strong cases of the masculine, the vowel of the ending is prolonged to आ ā; in the
weakest cases it is in general struck out altogether; in the middle cases, or before a case-ending
beginning with a consonant, the final न् n is dropped. The न् n is also lost in the nom. sing. …"
[REF:whitney1889 §421]. Whitney's three sets of cases and Pāṇini's three names (strong / bha / pada)
pick out the same endings for a masculine; the two accounts name them differently (FACT beside
TRADITION, plan principle 5). Typology line (no claim beyond it): a language may build its forms by
adding affixes to a base; Sanskrit's case endings are affixes added after the base, and the base
itself changes shape before some of them (Whitney's "triple form").

**§6 Sanskrit Explanation.** Model sentences 1–3, the आत्मा line, and:
प्रत्ययात्पूर्वं प्रकृतिः। (*pratyayāt pūrvaṃ prakṛtiḥ.*) — pause: प्रत्ययात् पूर्वम् प्रकृतिः। —
"Before the affix: the base." — प्रत्यय से पहले प्रकृति। (पूर्वम् owned c01.l03 as पूर्वः; adverbial
neuter ✓ by rule 7 as a cell of the owned adjective; प्रत्ययात्पूर्वं: त् + प written together, म् →
ं before प्.)

**§7 Hindi Explanation.** Natively written (not a translation of §8): प्रकृति और प्रत्यय; इत् (चिह्न-
वर्ण); अङ्ग, पद, भ; राजन् के तीन रूप। Hindi terms as GLOSSARY spells them (प्रकृति, प्रत्यय, अङ्ग,
पद, भ, सर्वनामस्थान, प्रातिपदिक). No Hindi parallel callout (row 0.23 (c)).

**§8 English Explanation.** The recipe (plan §1.1): (1) रामः and राजा / राजभिः / राज्ञा; (2) where
is the ending, and why does one base look three ways? (3) the tools: base + affix + marker; aṅga,
pada, bha; (4) D-a, D-c, D-d, D-e with the teacher; (5) the learner's D-b and its kin; (6) sentences
with राजा, राज्ञा, राजभिः. Includes the ending-marker line (row 0.5, the plan's wording), the *sup*
line (row 0.6), the 1.x card (above), the line "what a rule does to a base depends on the name it
bears", and why रामः's base is not pada (D-a's line).

**§9–§11.** Row 0.27: read D-a aloud with the markers named and not pronounced; राज्ञा /ɾɑːd͡ʑɲɑː/
(ज् + ञ्; [gj] a regional habit, a variant, not the target); राजभिः /ɾɑːd͡ʑɐbʱih/; राजा /ɾɑːd͡ʑɑː/;
the sūtras joined, then word by word: स्वादिष्वसर्वनामस्थाने /sʋɑːd̪iʂʋɐsɐɾʋɐn̪ɑːmɐst̪ʰɑːn̪eː/, यचि
भम् /jɐt͡ɕi bʱɐm/.

**§12 Common mistakes.**

| # | Mistake | Fix |
|---|---|---|
| 1 | Taking aṅga, pada and bha for three different stems to memorise | one base, three names; the name decides which rule acts (the sort, Ex 3) |
| 2 | "Before सुँ the base is pada" (the 1.x card) | सुँ is one of the five strong endings (1.1.43); 1.4.17 leaves them out; the whole word रामस् is a pada by 1.4.14 |
| 3 | Reading the य of यचि as a sibilant, or "before य" only | यच् = य + अच्: before an ending that begins with य or a vowel |
| 4 | Dropping the final स् of भिस् or the म् of अम् as markers | a final dental, स् or म् of an ending is kept (Teacher Notes); only the प् of सुप् goes, and the initial ट् ज् श् ङ् of टा जस् शस् ङे … |
| 5 | Writing *राजैः by 7.1.9 after राज + भिस् | after 8.2.7, 7.1.9 does not apply: why is 8.2.1 (c06.l03); the form is राजभिः (Whitney §424) |
| 6 | Saying the स् of नमस्ते is the stem's स् kept | नमः + ते: the visarga arises (8.3.15) and 8.3.34 replaces it with स्; the स् is a substitute |

**§13 Examples.** D-a, D-c, D-d, D-e; table 0.A (○); the sort's key; the six model sentences; the
आत्मा line; the strong cells from the Kāśikā under 1.1.43 named in English only (राजा, राजानौ,
राजानः, राजानम्).

**§15 Grammar.** The anatomy card (row 0.4); the ending-marker line (row 0.5); *sup* (row 0.6); the
three names (row 0.7) with the K card (1.2.45, 1.1.43); the sort table (S0-db key) with each box's
rule; D-f (राजा) as display; table 0.A (○). **Toolbox (cumulative 25 = 12 + 13):** Chapter 1's 12
(1.1.71, 1.3.3, 1.3.9, 1.1.50, 1.1.69, 1.1.9, 1.1.70, 1.1.49, 1.1.66, 1.1.67, 1.3.10, 7.1.9) and
today's 13, each with the forms it derives (रामः: 3.1.1, 3.1.2, 1.3.2, 1.4.13, 8.2.66, 8.3.15;
फलम्: 7.1.24, 6.1.107; राजभिः: 1.4.17, 8.2.7; राज्ञा: 1.4.18, 6.4.134; नमः: 2.4.82). Paradigm
ledger: ✓ the derived cells राजभिः, राज्ञा (and राजा as a headword); ◐ प्रकृतेः; ○ the rest of
table 0.A.

**Previewed / Deferred (plan).** Previewed: the sarvanāmasthāna and the strong cells (c05.l03); why
7.1.9 does not apply to राज + भिस् (8.2.1, c06.l03); the visarga's other outcomes (owned,
v3.c04.l02); 1.3.8 (c03.l02). Deferred: the n-stem and consonant-stem system (c05.l03); why राज- in
राजपुरुषः (c04.l04).

**§16 Conversation (10 turns; a student, छात्रा, and the teacher, गुरुः; homework).**
1. छात्रा — गुरो, राम इत्यत्र कः प्रत्ययः? (*guro, rāma ity atra kaḥ pratyayaḥ?*) — pause: गुरो,
   रामः इति अत्र कः प्रत्ययः? — "Teacher, in rāmaḥ, what is the affix?"
2. गुरुः — सुः प्रत्ययः, राम इति प्रकृतिः। (*suḥ pratyayaḥ, rāma iti prakṛtiḥ.*) — pause: सुः
   प्रत्ययः, रामः इति प्रकृतिः। — "The affix is su; rāma is the base."
3. छात्रा — सुरिति प्रत्यय उकारः कुत्र? (*sur iti pratyaya ukāraḥ kutra?*) — pause: सुः इति प्रत्यये
   उकारः कुत्र? — "Where is the u in the affix su?"
4. गुरुः — स इत्। (*sa it.*) — pause: सः इत्। — "It is a marker."
5. छात्रा — राजेति शब्दे प्रकृतिः किम्? (*rājeti śabde prakṛtiḥ kim?*) — pause: राजा इति शब्दे
   प्रकृतिः किम्? — "In the word rājā, what is the base?"
6. गुरुः — राजन्निति प्रकृतिः। राजभिरित्यत्र सा पदम्। (*rājann iti prakṛtiḥ. rājabhir ity atra sā
   padam.*) — pause: राजन् इति प्रकृतिः। राजभिः इति अत्र सा पदम्। — "The base is rājan. In rājabhiḥ it
   is pada."
7. छात्रा — राज्ञेत्यत्र किम्? (*rājñety atra kim?*) — pause: राज्ञा इति अत्र किम्? — "And in rājñā?"
8. गुरुः — तत्र भम्, अकारो नास्ति। (*tatra bham, akāro nāsti.*) — pause: तत्र भम्, अकारः न अस्ति।
   — "There it is bha; the a is not there."
9. छात्रा — नृपो राजा चैकार्थौ? (*nṛpo rājā caikārthau?*) — pause: नृपः राजा च एक-अर्थौ? — "Do
   nṛpaḥ and rājā have one meaning?"
10. गुरुः — आम्, एकार्थौ। (*ām, ekārthau.*) — pause: आम्, एक-अर्थौ। — "Yes, one meaning."
Words owned: गुरुः (vocative गुरो ✓), कः, कुत्र, किम्, तत्र, सा, अस्ति, न, आम्, शब्दः, नृपः, पदम्;
labels सुः, इत्, भम्, उकारः, अकारः. Seams: राम इत्यत्र (-अः + इ → अ + gap; इ + अ → य), प्रत्यय उकारः
(-ए + vowel → अ + gap), सुरिति, राजेति (आ + इ → ए), राजन्निति (न् doubled after a short vowel),
राजभिरित्यत्र, राज्ञेत्यत्र, अकारो नास्ति (-अः + न → ओ; न + अ → ना), नृपो राजा, चैकार्थौ (अ + ए → ऐ).
None of the exam's items.

**§17 Story — the grammarians' line, 2 (plan §1.5).** The HISTORY callout of row 0.17 (learner
wording fixed there, opening "Pāṇini's rules have long been commented on."), then the TRADITION
display of the Paspaśāhnika line (row 0.17: Devanagari, IAST, pause form, translation, source line;
the e-text's *proyojanam* corrected and listed in Teacher Notes). One closing line: "Three of the four
seams are joins you own: रक्षा + ऊह → रक्षोह (guṇa), ऊह + आगम → ऊहागम (a long vowel), लघु + असन्देह → लघ्वसन्देह (yaṇ)." Not a
headword, not a tool; प्रयोजनम् becomes owned in c03.l05. Assessed only as "According to Patañjali, …"
(quiz 10).

**§18 Exercises.**
- **Ex 1 (obj 1; class 4 min)** — "Take each form apart: base · affix (as the sup list has it) ·
  marker(s), if any." (1) देवः (2) फलम् (3) रामैः (4) नृपेण (5) बालकान् (6) देवानाम्. Key: (1) देव ·
  सुँ · उँ (2) फल · सुँ (→ अम्) · उँ, or, read as the accusative, फल · अम् · none (both score), or, read as accusative, फल · अम् · none (3) राम · भिस् · none (the स् is kept) (4) नृप · टा · ट् (5)
  बालक · शस् · श् (6) देव · आम् · none (the म् is kept). Score the base, the affix and the marker
  list; accept "ट् marker (Teacher Notes)" for (4) and "1.3.8, preview" for (5).
- **Ex 2 (obj 3; derive it yourself; homework 10 min)** — "Derive, according to Pāṇini, in table
  form": (1) फल + सुँ → फलम् (2) वन + सुँ → वनम् (3) देव + सुँ → देवः (4) नृप + सुँ → नृपः; and
  "Write the missing step, with its sūtra": (5) राजभिः — given steps 0, 1, 3, 4, 5 of D-c (6) राज्ञा —
  given steps 0, 1, 2, 4 of D-d. Key: (1) D-b; (2) D-b with वन; (3), (4) D-a with देव, नृप; (5) step
  2: राज + भिस् — 8.2.7 — the pada-final न् dropped; (6) step 3: राज्न् + आ — 6.4.134 — the अ of अन्
  dropped. A key accepts the marker steps merged into one line ("1.3.2 + 1.3.9").
- **Ex 3 (obj 2; class 6 min; the sort, the main-risk fix)** — "Put each ending of राजन् into its box
  — strong, pada, bha — and write under each box the rule it sets off": सुँ, औ, जस्, अम्, भ्याम्,
  भिस्, भ्यस्, सुप्, शस्, टा, ङे, ङि. Key: S0-db's key. One point per ending; the three rules named.
  (The forms themselves are not asked: table 0.A is ○.)
- **Ex 4 (obj 4; production; homework 8 min, written then said)** — "In Sanskrit, joined, with the
  pause form beneath": (1) "In the word devaḥ, deva is the base and su the affix." (2) "The king goes
  with the servant." (3) "One's self is a man's friend." (4) "What was done by the king?" (5) "The
  servant goes with the kings." (6) "In nṛpaḥ, su is the affix." Key: (1) देवशब्दे देव इति
  प्रकृतिः, सुरिति प्रत्ययः। — pause: देव-शब्दे देवः इति प्रकृतिः, सुः इति प्रत्ययः। (2) राजा भृत्येन
  सह गच्छति। — pause: the same. (3) आत्मा नरस्य मित्रम्। — pause: the same. (4) राज्ञा किं कृतम्? —
  pause: राज्ञा किम् कृतम्? (5) राजभिः सह भृत्यो गच्छति। — pause: राजभिः सह भृत्यः गच्छति। (6) नृप
  इत्यत्र सुः प्रत्ययः। — pause: नृपः इति अत्र सुः प्रत्ययः। Accept any correct word order with
  correct seams; accept सेवकः for "servant" in (2) and (5).
- **Ex 5 (obj 3; homework 4 min, written)** — "Derive, according to Pāṇini, नमः + ते → नमस्ते (steps
  5–7 of the नमः table), and say in one English sentence what the स् of नमस्ते is." Key: D-e steps
  5–7; "a substitute for the visarga (8.3.34), not the stem's स्".
- **Ex 6 (§9–§11; spoken; homework 2 min, recorded)** — "Read the table राम + सुँ → रामः aloud, naming
  each marker without pronouncing it in the result." Key: row 0.27.

**§19 Quiz (10; homework; key in `<details>`).**
1. According to Pāṇini (3.1.2), an affix stands: (a) before the base (b) after the base (c) inside
   the base (d) in place of the base — b. TRADITION
2. According to Pāṇini (1.3.2), in सुँ the marker is: (a) स् (b) उँ (c) both (d) neither — b.
   TRADITION
3. In the ending भिस्, the marker is: (a) भ् (b) स् (c) इ (d) there is none — d. TRADITION (the
   ending-marker line)
4. According to Pāṇini, before भिस् the base राजन् is called: (a) strong (b) pada (c) bha (d)
   prātipadika only — b. TRADITION (1.4.17)
5. According to Pāṇini, before टा the base राजन् is called: (a) strong (b) pada (c) bha (d) none —
   c. TRADITION (1.4.18)
6. In 1.4.18 यचि भम्, यचि means: (a) before an ending that begins with य or a vowel (b) before an
   ending that begins with a sibilant and a vowel (c) after य (d) in place of य — a. TRADITION
   (distractor b is the 1.x gloss)
7. The instrumental plural of राजन् is: (a) राजैः (b) राजभिः (c) राज्ञभिः (d) राजानभिः — b. FACT
   [REF:whitney1889 §424]
8. The instrumental singular of राजन् is: (a) राजना (b) राजेन (c) राज्ञा (d) राजा — c. FACT
   [REF:whitney1889 §424]
9. According to Pāṇini, the स् of नमस्ते is: (a) the स् of the stem नमस्, kept (b) a substitute for
   the visarga (8.3.34) (c) an augment (d) part of ते — b. TRADITION
10. According to Patañjali, one purpose of studying grammar is: (a) asandeha, freedom from doubt (b)
   speed in reading (c) learning to write Devanagari (d) dating the Veda — a. TRADITION (the
   Paspaśāhnika line, §17)

**§20 bookings (verbatim).**
- +1 day: two words taken apart — derive, according to Pāṇini, in table form, राम + सुँ → रामः and
  फल + सुँ → फलम्, naming at each step the marker dropped or the sūtra that acts; v4.c02.l02's Station
  0 runs exactly this.
- +1 week: one base, three names — sort the twelve endings सुँ, औ, जस्, अम्, भ्याम्, भिस्, भ्यस्,
  सुप्, शस्, टा, ङे and ङि into strong, pada and bha for the base राजन्, and name the rule each box
  sets off (strong: the lengthened अ, c05.l03; pada: 8.2.7; bha: 6.4.134); v4.c02.l03's Station 0
  runs exactly this.

**Class timing (45; every slot timed from what it holds).** 0–7 Station 0 (S0-cg 3, S0-cf 4) · 7–9
review prompts (three) · 9–11 Hook (रामः; राजा, राजभिः, राज्ञा) · 11–17 base, affix, marker: 3.1.1,
3.1.2, 1.3.2, 1.4.13 and the ending-marker line (2); D-a with the teacher (4) · 17–21 Ex 1 (4) · 21–25
1.4.17, 1.4.18 with padaccheda (3); the 1.x card read (1) · 25–32 D-c and D-d with the teacher (3 +
3); table 0.A shown as ○ (1) · 32–38 Ex 3, the sort (6) · 38–42 D-e, नमः and नमस्ते (4) · 42–45 model
sentences 1–6 read aloud, joined then pause form (3). Homework: Ex 2, Ex 4, Ex 5, Ex 6, §15 card with
D-f, §16, §17, the quiz.

**§21 Homework (45).** Ex 2 (10) · Ex 4 written and said (8) · Ex 5 (4) · Ex 6 recorded (2) · §15
card and D-f read (2) · §16 aloud (4) · §17 read (3) · the quiz (7) and key (2) · real-world task
(3): explain to a Hindi speaker, in Hindi, why नमस्ते has स् and नमः has ः. = 45.

**Teacher Notes.** K1–K7, K14–K17, K23, K24, K38, L2, L5, L6, L8–L10, M1–M3 (table 0.E) with their
corrections (*pratijñānunāsikyāḥ*, *svādiṣv*, *bhasañjñaṃ*, *vātsyaḥ*, *dīrghatvaṃ*, *parato 'kaḥ*,
*pūrvarūpam*, *grahaṇam*, *prayojanam*); 1.3.4 न विभक्तौ तुस्माः and 1.3.7 चुटू (the ending-marker
line); 1.1.62 प्रत्ययलोपे प्रत्ययलक्षणम् (राजा, नमः); 6.4.136 विभाषा ङिश्योः (राज्ञि / राजनि); 7.1.23
स्वमोर्नपुंसकात् (D-b's carried words); 2.4.58 (the source of लुक् in 2.4.82); 1.4.1 (the heading of
1.4.13–18); 5.4.151 and the LSK's *kappratyayāvadhiṣu* (1.4.17 also covers taddhitas up to kap: the
Kāśikā's *rājatā, rājataraḥ*, c04.l03); the Kāśikā's य-initial examples of 1.4.18 (*gārgyaḥ,
vātsyaḥ*: taddhitas); the tradition's declared nasality of सुँ (K3); the 1.x p. 98 slip "रामा (stem)";
the Paspaśāhnika question {1/17}; why D-b's substitute is अम्, not म् (K16); why the derive-it-
yourself items start from the stems फल, वन, देव, नृप without deriving them (1.2.45, K card).

**Payoff (plan).** रामः and the visarga learned in v1.c02.l06: the ः is what is left of an ending. नमः
is the same story (the नमस्ते thread). नृपः, which Volume 3 gave "so that king is usable before
राजन्", meets राजा. राज्ञा's ज्ञ, a conjunct from Volume 1, is a sandhi the learner owns (8.4.40).
**Main risk (plan):** aṅga/pada/bha taken as three stems to memorise — fixed by the sort (Ex 3); the
forms themselves are not learned yet.

---

## 2. L2 — आदेशः आगमः लोपः: Replace, Add, Delete (grammar)

**Front matter.** id `v4.c02.l02` · file `lesson-02-replace-add-delete.md` · title sa आदेशः आगमः लोपः ·
sa_iast *ādeśaḥ āgamaḥ lopaḥ* · en "Replace, Add, Delete" · hi "आदेश, आगम, लोप" · lesson_type
grammar · cefr B1 · duration 45 · self_study_minutes **40** · prerequisites [v4.c02.l01] · review_of
[v4.c02.l01, v4.c01.l04, v4.c01.l03, v3.c03.l03, v3.c04.l01] · vocabulary_count **6** (5 ledger-new
+ the upgrade गुणः) · tags [grammar, panini, adesha, agama, lopa, guna, vrddhi, augment, imperfect,
ir-021, derivation, bhavati-thread, mahabhashya, spaced-review] · media (planned): image
`v4c02l02-replace-add-delete.svg` (three panels: a slot with one block swapped — आदेशः; a block
slid in at the front, its ट्-tag pointing left — आगमः; a block fading out — लोपः; under them अगच्छत्
built from the three); audio `v4c02l02-ladder.mp3` (इ ए ऐ · उ ओ औ · ऋ अर् आर्), `v4c02l02-
conversation.mp3`; worksheet `v4c02l02-operations-sort.pdf`; quizzes `v4c02l02-quiz.md`,
`v4c02l02-quiz-key.md`. (review_of gains v4.c01.l04 because §3 runs its +1-week booking.)

**Objectives.**
1. en "Sort six operations into substitute, augment and deletion, and say what shows each in a
   rule (the replaced item, the augment's marker, the word लोपः)." · hi "छह कार्यों को आदेश, आगम और लोप
   में बाँटें, और बताएँ कि सूत्र में हर एक को क्या दिखाता है (बदला जाने वाला अंश, आगम का इत्, लोप शब्द)।"
2. en "Give the guṇa and the vṛddhi substitute of six vowels (इ ई उ ऊ ऋ ऌ) and say, according to
   Pāṇini, which rules define the two grades and which vowels they replace." · hi "छह स्वरों (इ ई उ ऊ
   ऋ ऌ) के गुण और वृद्धि आदेश बताएँ, और पाणिनि के अनुसार कहें कि कौन-से सूत्र दोनों को परिभाषित
   करते हैं और वे किन स्वरों के स्थान पर आते हैं।"
3. en "Derive, according to Pāṇini, in table form, सूर्योदयः and अगच्छत्, and by yourself six
   forms: तत्रैव, सदैव, गुरवे, अपठत्, अलिखत् and भू → भो → भव्." · hi "पाणिनि के अनुसार, तालिका में,
   सूर्योदयः और अगच्छत् की व्युत्पत्ति करें, और स्वयं छह की: तत्रैव, सदैव, गुरवे, अपठत्, अलिखत् और
   भू → भो → भव्।"
4. en "Say and write six sentences with लोपः, आगमः, वृद्धिः, हानिः and कोपः, joined, with the pause
   form beneath." · hi "लोपः, आगमः, वृद्धिः, हानिः और कोपः से छह वाक्य सन्धि सहित बोलें और लिखें, नीचे
   विराम-रूप के साथ।"

**The opening (§1).** अगच्छत्, owned since v3.c03.l03, against गच्छति: an अ at the front, an इ gone
at the back, and an ending the learner was told is "ति" in the present. Three different things
happened: one was added, one was taken away, one was put in place of another. And the 1.x book's
claim, quoted: in भू + ति → भवति "गुण inserts व" — does it?

**The one grammar point (plan).** A rule does one of three things: it **replaces** (आदेशः, named
by the genitive); it **adds** (आगमः; where it adds is shown by the augment's own marker: a ṭ-marked
augment goes at the beginning of its host, a k-marked one at the end, 1.1.46); it **deletes**
(लोपः, 1.1.60). guṇa (अ ए ओ) and vṛddhi (आ ऐ औ) are names for substitutes (1.1.1–2), applied to
इ उ ऋ ऌ (1.1.3).

**Forms taught.** Table 0.B (the grades; the ladder); table 0.C (the operations); D-g (सूर्योदयः)
and D-i (अगच्छत्) with the teacher; D-h (तत्रैव), D-n (गुरवे), the ladder भू → भो → भव्, अपठत्,
अलिखत् by the learner; D-o (ऐच्छत्) read.

**Sūtras by tier (tools added: 8).**
- **Q — 1.1.1 वृद्धिरादैच्** (*vṛddhir ādaic*). Padaccheda: वृद्धिः (प्रथमा: the name) · आत्-ऐच्
  (प्रथमा: what is named — आत्, long आ written with त्, tapara, so long आ only (c01.l02); ऐच्, the
  pratyāhāra ऐ औ). English: "आ, ऐ and औ are called vṛddhi." [REF:kashika 1.1.1] (K11; the Kāśikā's
  note on the त् for ऐच्: Teacher Notes). In a definition the two nominatives are "the name" and "what
  it names" (§12 row 5).
- **B — 1.1.2 अदेङ् गुणः** (*adeṅ guṇaḥ*). Padaccheda: अत्-एङ् (प्रथमा: what is named — short अ,
  tapara, and एङ्, the pratyāhāra ए ओ) · गुणः (प्रथमा: the name). English: "अ, ए and ओ are called
  guṇa." [REF:kashika 1.1.2] (K12).
- **B — 1.1.3 इको गुणवृद्धी** (*iko guṇavṛddhī*). Padaccheda: इकः (षष्ठी: "in place of an इक् vowel":
  इ उ ऋ ऌ, short or long) · गुणवृद्धी (प्रथमा, dual: "guṇa and vṛddhi"). English: "Guṇa and vṛddhi,
  when a rule names them without saying what they replace, replace an इक् vowel." [REF:kashika 1.1.3]
  (K13; its own examples *nayati, bhavati*).
- **D — 1.1.46 आद्यन्तौ टकितौ** — "An augment marked with ट् goes at the beginning, one marked with
  क् at the end [of the item it is added to]." [REF:kashika 1.1.46] (K8).
- **D — 1.1.60 अदर्शनं लोपः** — "Disappearance [of what would have appeared] is called lopa."
  [REF:kashika 1.1.60] (K9).
- **D — 6.1.84 एकः पूर्वपरयोः** — "[From here on:] one [substitute] in place of the earlier and the
  later." A heading. [REF:kashika 6.1.84] (K10). (Previewed in c01.l03; number first printed here.)
- **D — 3.4.100 इतश्च** — "And [the] इ [of a P ending of a ṅ-marked l-affix is dropped]." Bracket
  (c01 style, before the regime of l03): [ङितः, carried from 3.4.99 — the second carried word the
  course shows, after c01's अचि; and, from an earlier rule (Teacher Notes), लोपः "deletion" in the P
  endings]. [REF:kashika 3.4.100] (K21: *ṅitaḥ ity eva … parasmaipadeṣu ity eva*; its own first
  example *apacat*).
- **D — 6.4.71 लुङ्लङ्लृङ्क्ष्वडुदात्तः** — "Before luṅ, laṅ and lṛṅ, [the aṅga gets the augment]
  अट्, [which is] accented (accent: Volume 5)." [REF:kashika 6.4.71] (K25; its laṅ examples *akarot,
  aharat*).
- **D (owned) — 6.1.87 आद्गुणः**, **6.1.88 वृद्धिरेचि** — as Volume 3 and c01 word them; not counted.
- **K (card) — 1.1.51 उरण् रपरः** — "Where an अण् vowel replaces ऋ, it comes with र् [अर्, आर्]."
  [REF:kashika 1.1.51] (K39: *uḥ sthāne aṇ prasajyamāna eva raparo veditavyaḥ / kartā*). D in c03.l02.
- **Re-read (owned):** 1.1.49 (the genitive "in place of"), 1.1.50, 6.1.78, 1.3.3, 1.3.9.
- **Labelled previews:** 3.4.78 (c03.l01), 1.1.47 (the m-marked नुम्, c05.l03), 7.3.84 (c03.l02, in
  the ladder line only), the ṅ marker of laṅ (collected on the anubandha card, c03.l03).
- **Teacher Notes:** 3.4.97 (source of लोपः and परस्मैपदेषु in 3.4.100), 6.4.72 आडजादीनाम् and 6.1.90
  आटश्च (ऐच्छत्), 7.3.111 घेर्ङिति (the guṇa of गुरवे), 6.1.113 अतो रोरप्लुतादप्लुते and 6.1.114 हशि
  च (रामोऽहम्, रामो गच्छति), 1.1.61 (luk, ślu, lup as kinds of deletion), 1.1.52 (the final sound
  replaced). The ऌ row of 1.1.51 (the र of उरण् रपरः names र and ल: c01 fact base row 0.9).

**The derivations.** D-g, D-i with the teacher; D-o read; D-h, D-n and the ladder as the derive-it-
yourself keys (table 0.F). **The ladder** (the main-risk fix; plan): इ → ए, never इ + अ; then भू →
भो → भव् as two substitutions: (1) भू → भो: guṇa in place of ऊ (1.1.3, 1.1.2; the rule that orders
this guṇa: 7.3.84, c03.l02); (2) भो + अति → भव् + अति: 6.1.78 एचोऽयवायावः (owned), ओ → अव् before a
vowel.

**गुरवे (plan; review volume:A#6).** The guṇa that v3.c04.l04 named in गुरवे and left for Volume 4 is
the same substitute: गुरु + ए → गुरो + ए → गुरवे (6.1.78; the rule that orders this guṇa: Teacher
Notes). FACT: Whitney §336d (row 0.22).

**IR-021 and the rest of the p. 89 card, corrected in the open** (row 0.15 (b)–(d); plain text in §8,
the quotations verbatim from the page image): "The 1.x book printed 'Example: भू + ति → भवति (where
गुण inserts व)' as an example of insertion (p. 89). guṇa is a substitute: ऊ → ओ; it inserts
nothing. The व comes from a second substitute, ओ → अव् (6.1.78, which you met in Chapter 1).
Nothing in भवति is an augment. The book's next example, the अट् augment of अगच्छत्, is a true
augment, and this lesson keeps it. The same card gave as its example of deletion 'रामस् + अहम् →
रामोऽहम्' and said that 'for the next word, अ underwent lopa (replaced by avagraha ऽ)'. In Pāṇini's
terms nothing is dropped there: -अः before अ gives ओ (Volume 3), and then ओ + अ → ओ is one substitute
for both (6.1.109 एङः पदान्तादति, under 6.1.84). The ऽ is a printing sign that shows where the अ
stood, not an operation. And its example of a ट्-marked augment, 'नुम् augment', is wrong: नुम् is
marked with म्, so it goes after the last vowel (1.1.47, preview, c05.l03); अट् is the ट्-marked
augment." **FACT beside TRADITION** (plan principle 5; §5): Whitney §235a, quoted as row 0.10 gives
it, with "guṇa *secondary quality*" and "vṛddhi *growth, increment*" (plan §1.4.4: quoted once, here);
"Both accounts give ओ from ऊ; neither inserts a व."

**Model sentences** (the plan's six; checked).
1. गुणो वृद्धिश्चादेशौ, आगमौ न। (*guṇo vṛddhiś cādeśau, āgamau na.*) — pause: गुणः वृद्धिः च आदेशौ,
   आगमौ न। — "guṇa and vṛddhi are substitutes, not augments." — गुण और वृद्धि आदेश हैं, आगम नहीं।
2. अगच्छदित्यत्राकार आगमः। (*agacchad ity atrākāra āgamaḥ.*) — pause: अगच्छत् इति अत्र अकारः आगमः।
   — "In agacchat the a is an augment." — अगच्छत् में अकार आगम है।
3. इकारस्य लोपः। (*ikārasya lopaḥ.*) — pause: the same — "The i is dropped." — इकार का लोप।
4. धनस्य वृद्धिर्हानिश्च। (*dhanasya vṛddhir hāniś ca.*) — pause: धनस्य वृद्धिः हानिः च। — "The
   growth and loss of wealth." — धन की वृद्धि और हानि। (ordinary senses of the new headwords)
5. सूर्योदये पक्षिणः कूजन्ति। (*sūryodaye pakṣiṇaḥ kūjanti.*) — pause: सूर्य-उदये पक्षिणः कूजन्ति।
   — "At sunrise the birds sing." — सूर्योदय पर पक्षी चहचहाते हैं। (कूजति, V1; पक्षिणः: R1, labelled,
   its cells c05.l03; सूर्योदये is one word, a compound, in both forms — the pause form shows its
   member seam hyphenated, STYLE_GUIDE §3.1.)
6. कोपस्य हानिः सुखस्य वृद्धिः। (*kopasya hāniḥ sukhasya vṛddhiḥ.*) — pause: the same — "Less
   anger, more happiness." (lit. "the loss of anger, the growth of happiness") — क्रोध की हानि, सुख की
   वृद्धि।

**Headwords (5; 527 → 532) and one upgrade.**

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status | dictionary; why now |
|---|---|---|---|---|---|---|---|
| लोपः | lopaḥ | /loːpɐh/ | deletion, dropping (in grammar); disappearance | लोप | m. a-stem | ledger-new (-) | MW s.v. lopa "(in gram.) dropping, elision"; Apte s.v. लोपः 7 "Elision, dropping, (in gram.); अदर्शनं लोपः P. I. 1. 60"; the term (rule 20; model sentence 3) |
| आगमः | āgamaḥ | /ɑːgɐmɐh/ | augment (in grammar); arrival; (tradition) authoritative text | आगम | m. a-stem | ledger-new (-) | MW s.v. āgama "arrival, coming", "a traditional doctrine …", "a grammatical augment … Pāṇ. Comm."; Apte s.v. आगमः 1 "Coming, arrival" |
| वृद्धिः | vṛddhiḥ | /ʋr̩d̪d̪ʱih/ | growth, increase; (gram.) vṛddhi | वृद्धि, बढ़ोतरी | f. i-stem (✓ nom./acc./instr.) | ledger-new (-) | MW s.v. 2. vṛddhi "growth, increase …", "the second modification or increase of vowels … Pāṇ."; Apte s.v. वृद्धिः 1 "Growth, increase"; Hit *artha-vṛddhiḥ karaṇīyā* (`hitop_u.htm` line 1346) |
| हानिः | hāniḥ | /ɦɑːn̪ih/ | loss, decrease | हानि, घाटा | f. i-stem (✓ nom./acc./instr.) | ledger-new (-) | MW s.v. hāni "decrease, diminution", "damage, loss"; Apte s.v. हानिः 2 "Loss, failure" (the antonym the learner needs for वृद्धिः) |
| कोपः | kopaḥ | /koːpɐh/ | anger | क्रोध, कोप | m. a-stem | ledger-new (-) | MW s.v. kopa "passion, wrath, anger, rage … sa-kopam 'angrily', Pañcat.; Hit."; Apte s.v. कोपः 1 "Anger, wrath"; Hit *siṃhaḥ sakopam āha* (line 2048); DCS 22 tokens (rule 22) |
| गुणः | guṇaḥ | /guɳɐh/ | quality; (gram.) guṇa | गुण | m. a-stem | **upgrade** (V1 गुण "quality, strand", v1.c03.l03): `vocabulary_count` only | MW s.v. guṇa "a single thread or strand …"; the term defined today (1.1.2) |

**§14 line:** "Ledger 527 → 532 (5 ledger-new; गुणः an upgrade row). Cells drilled: 3 (अगच्छत्,
अपठत्, अलिखत् as derived laṅ forms; the laṅ table is owned since Volume 3). Tools added: 8 (1.1.1 Q;
1.1.2, 1.1.3 B; 1.1.46, 1.1.60, 6.1.84, 3.4.100, 6.4.71 D)."

**§3 Station 0 (verbatim) and review prompts.**
- +1 day: two words taken apart — derive, according to Pāṇini, in table form, राम + सुँ → रामः and
  फल + सुँ → फलम्, naming at each step the marker dropped or the sūtra that acts; v4.c02.l02's Station
  0 runs exactly this.
- +1 week: the pratyāhāra traps again — expand अण् twice (as every rule but 1.1.69 reads it, and as
  1.1.69 reads it), इण्, हल्, चय्, झश् and जश्, sound by sound; v4.c02.l02's Station 0 runs exactly this.
(The second line is v4.c01.l04 §20's +1-week booking, diffed: identical.) Keys: S0-da, S0-ch.
Review prompts: (v3.c03.l03) "Give the imperfect 3sg of गच्छति, पठति and इच्छति" — अगच्छत्, अपठत्,
ऐच्छत्; (v3.c04.l01) "Join सूर्य + उदयः and तत्र + एव, and name each join" — सूर्योदयः, गुणः;
तत्रैव, वृद्धिः; (v4.c01.l03) "Case-code 6.1.87 आद्गुणः [अचि]" — आत् (पञ्चमी: after अ/आ) · गुणः
(प्रथमा: the result) · [अचि] (सप्तमी: before a vowel).

**§4 Historical Context.** **[TRADITION · परम्परा]** "Pāṇini's grammar gives names to sets of
vowels: by 1.1.1 आ ऐ औ are vṛddhi, and by 1.1.2 अ ए ओ are guṇa. Volume 3 met गुणः and वृद्धिः as the
names of two vowel joins; in the Aṣṭādhyāyī they name the vowels a rule puts in. [REF:ashtadhyayi
1.1.1]; [REF:kashika 1.1.1]" Then the Hindi parallel (row 0.23 (a)) as a second TRADITION callout:
"Hindi school grammar sorts the vowel joins under five names — दीर्घ, गुण, वृद्धि, यण्, अयादि. In
Pāṇini गुण and वृद्धि are not names of joins but of three vowels each; the join is named by the rule
that puts them in (6.1.87, 6.1.88). [REF:guru1952]"

**§5 Scientific Explanation (FACT).** Whitney §235a (row 0.10), and "in all gunating processes अ a
remains unchanged—or, as it is sometimes expressed, अ a is its own guṇa; आ ā, of course, remains
unchanged for both guṇa and vṛddhi" [REF:whitney1889 §235]. The two accounts side by side (FACT and
TRADITION): Whitney adds an a-element; Pāṇini replaces a vowel by one of a named set. Both yield
ए ओ / ऐ औ / अर् आर्.

**§6 Sanskrit Explanation.** Model sentences 1–3 and: उकारस्य स्थान ओकारो गुणः। (*ukārasya sthāna
okāro guṇaḥ.*) — pause: उकारस्य स्थाने ओकारः गुणः। — "In place of u, o is the guṇa." — उकार के स्थान
पर ओकार गुण है। (स्थाने + ओ- → स्थान ओ-: -ए + vowel → अ + gap; ओकारः + गुणः → ओकारो गुणः.)

**§7 Hindi Explanation.** Natively written; आदेश, आगम, लोप; गुण और वृद्धि आदेश के नाम; the Hindi
row 0.23 (a) explained in Hindi (school book: गुण सन्धि; Pāṇini: गुण = अ ए ओ).

**§8 English Explanation.** The recipe: (1) अगच्छत्, भवति, सूर्योदयः; (2) what happened in each?
(3) the three operations and the two grades; (4) D-g, D-i; (5) the learner's तत्रैव, गुरवे, अपठत्,
अलिखत्, the ladder; (6) sentences. Includes table 0.C, table 0.B with the 1.1.51 card, the IR-021 box,
the ऐच्छत् reading (Volume 3 left "the one difference" for this chapter: the augment is आट् before a
vowel, and आ + इ → ऐ is vṛddhi; rules: Teacher Notes).

**§9–§11.** Row 0.27: the ladder said aloud (इ — ए — ऐ; उ — ओ — औ; ऋ — अर् — आर्), ए and ओ long and
pure, ऐ /ɐi̯/ and औ /ɐu̯/ with the अ /ɐ/ onset; अगच्छत् /ɐgɐt͡ɕt͡ɕʰɐt̪/: the augment heard as the first
syllable; वृद्धिः /ʋr̩d̪d̪ʱih/, the ऋ syllabic (not "ri").

**§12 Common mistakes.**

| # | Mistake | Fix |
|---|---|---|
| 1 | "guṇa = add an अ" (the main risk) | guṇa is a substitute: इ → ए, never इ + अ; the substitution ladder (Ex 1) |
| 2 | "In भवति guṇa inserts व" (the 1.x card) | two substitutes: ऊ → ओ (guṇa), ओ → अव् (6.1.78); nothing is inserted |
| 3 | Calling the ऽ of रामोऽहम् a deletion | ओ + अ → ओ is one substitute for both (6.1.109); ऽ is a printing sign |
| 4 | Placing every augment at the front | the augment's marker decides: ट् → beginning, क् → end (1.1.46), म् → after the last vowel (1.1.47, preview) |
| 5 | Reading 1.1.1's two nominatives as "result" | in a definition the nominatives are the name (वृद्धिः) and what it names (आत्-ऐच्) |
| 6 | Giving ऋ's guṇa as अ or रि | ऋ → अर् (with र् by 1.1.51, the card) |

**§13 Examples.** Table 0.C; table 0.B; D-g, D-i; D-o read; the six model sentences; owned forms
labelled by operation: रामः (deletion of the marker; substitute रुँ for स्), फलम् (substitute अम्),
राजभिः (deletion of न्), सूर्योदयः (substitute), अगच्छत् (all three).

**§15 Grammar.** The three operations (table 0.C) with 1.1.46, 1.1.60 and the genitive; the two
grades (table 0.B) with 1.1.1 (Q, padaccheda), 1.1.2, 1.1.3 (B, padaccheda), the K card 1.1.51; the
ladder; D-g, D-i. **Toolbox (cumulative 33 = 25 + 8)**, each with its forms (सूर्योदयः: 6.1.84, with
6.1.87, 1.1.2, 1.1.50; अगच्छत्: 3.4.100, 6.4.71, 1.1.46; तत्रैव: 1.1.1 with 6.1.88; लोप as a name:
1.1.60). Paradigm ledger: ✓ the laṅ forms derived (owned cells); ○ ऐच्छत्'s rules.

**Previewed / Deferred (plan).** Previewed: 3.4.78 (c03.l01); 1.1.47 (the m-marked नुम्, c05.l03);
the ṅ marker of laṅ (collected on the anubandha card, c03.l03). Deferred: the anuvṛtti of ङितः (named
c02.l03); 6.1.197's accent rule (IR-022, second half: corrected in the Teacher Notes of c03.l03;
accent itself is Volume 5's).

**§16 Conversation (10 turns; a student, छात्रः, and the teacher, गुरुः; homework).**
1. छात्रः — गुरो, अगच्छदित्यत्र कति कार्याणि? (*guro, agacchad ity atra kati kāryāṇi?*) — pause:
   गुरो, अगच्छत् इति अत्र कति कार्याणि? — "Teacher, how many operations are there in agacchat?"
2. गुरुः — त्रीणि। आदेशः, लोपः, आगमश्च। (*trīṇi. ādeśaḥ, lopaḥ, āgamaś ca.*) — pause: त्रीणि।
   आदेशः, लोपः, आगमः च। — "Three: a substitute, a deletion and an augment."
3. छात्रः — अकार आगमः। स कुत्र भवति? (*akāra āgamaḥ. sa kutra bhavati?*) — pause: अकारः आगमः। सः
   कुत्र भवति? — "The a is an augment. Where does it go?"
4. गुरुः — आदौ, यतस्तस्य टकार इत्। (*ādau, yatas tasya ṭakāra it.*) — pause: आदौ, यतः तस्य टकारः
   इत्। — "At the beginning, because its ṭ is a marker."
5. छात्रः — तीत्यत्रेकारस्य किं भवति? (*tīty atrekārasya kiṃ bhavati?*) — pause: ति इति अत्र
   इकारस्य किम् भवति? — "In ti, what happens to the i?"
6. गुरुः — इकारस्य लोपः। (*ikārasya lopaḥ.*) — pause: the same — "The i is dropped."
7. छात्रः — गुण आगमः किम्? (*guṇa āgamaḥ kim?*) — pause: गुणः आगमः किम्? — "Is guṇa an augment?"
8. गुरुः — न। गुण आदेशः। उकारस्य स्थान ओकारः। (*na. guṇa ādeśaḥ. ukārasya sthāna okāraḥ.*) —
   pause: न। गुणः आदेशः। उकारस्य स्थाने ओकारः। — "No. guṇa is a substitute: o in place of u."
9. छात्रः — वृद्धिरप्येवम्? (*vṛddhir apy evam?*) — pause: वृद्धिः अपि एवम्? — "And vṛddhi too?"
10. गुरुः — आम्, वृद्धिरप्यादेशः। (*ām, vṛddhir apy ādeśaḥ.*) — pause: आम्, वृद्धिः अपि आदेशः। —
   "Yes, vṛddhi too is a substitute."
Words owned: गुरुः, कति, कार्यम् (pl. ✓), त्रीणि (numerals 1–10 nom. ✓), सः, कुत्र, भवति, आदिः (loc.
आदौ ✓, m. i-stem), यतः, तस्य, किम्, न, स्थान (v1.c05.l02), अपि, एवम्, आम्; labels इत्, -कार names.
Seams: अगच्छदित्यत्र (त् + vowel → द्), आगमश्च, अकार आगमः, स कुत्र (सः before a consonant, 6.1.132
owned), यतस्तस्य (8.3.34), टकार इत्, तीत्यत्रेकारस्य (इ + इ → ई; इ + अ → य; अ + इ → ए), किं भवति, गुण
आगमः, स्थान ओकारः, वृद्धिरप्येवम्, वृद्धिरप्यादेशः. None of the exam's items.

**§17 Story — the grammarians' line, 2 continued (§7, deviation 4).** One TRADITION display, the
Paspaśāhnika's sentence that names this lesson's operations (row 0.21): लोपागमवर्णविकारज्ञो हि
सम्यग्वेदान्परिपालयिष्यति। (*lopāgamavarṇavikārajño hi samyag vedān paripālayiṣyati.*) — pause:
लोप-आगम-वर्ण-विकार-ज्ञः हि सम्यक् वेदान् परिपालयिष्यति। — "For one who knows deletion, augment and
the change of sounds will guard the Vedas properly." Source line: "Mahābhāṣya, Paspaśāhnika (Kielhorn
I, p. 1, l. 14 – p. 2, l. 2); text of the GRETIL e-text". Gloss line: परिपालयिष्यति "will guard"
(a future causative: ○, glossed); वर्णविकारः "change of sounds". Framed: "According to Patañjali, …"
— the purposes line of l01 continues; its word लोप and आगम are today's headwords.

**§18 Exercises.**
- **Ex 1 (obj 2; class 4 min; the ladder)** — "Write the guṇa and the vṛddhi substitute of each
  vowel": (1) इ (2) ई (3) उ (4) ऊ (5) ऋ (6) ऌ. Key: table 0.B: (1)–(2) ए, ऐ (3)–(4) ओ, औ (5) अर्,
  आर् (6) अल्, आल्. Score the pair; accept अर् without the 1.1.51 note.
- **Ex 2 (obj 1; class 5 min)** — "Substitute, augment or deletion? And what shows it in the rule?"
  (1) the उँ of सुँ disappears in रामः (2) अ + उ → ओ in सूर्योदयः (3) the अ at the front of अपठत् (4)
  the इ of ति disappears in अपठत् (5) ओ → अव् in भवति (6) the न् of राजन् disappears in राजभिः. Key:
  (1) deletion — the word लोपः (1.3.9) (2) substitute — one vowel in place of both (6.1.87 under
  6.1.84) (3) augment — its marker ट् puts it at the beginning (6.4.71, 1.1.46) (4) deletion —
  3.4.100 [लोपः carried] (5) substitute — the genitive एचः "in place of ए ओ ऐ औ" (6.1.78) (6)
  deletion — the word लोपः in 8.2.7. One point for the kind, one for what shows it.
- **Ex 3 (obj 3; derive it yourself; homework 12 min)** — "Derive, according to Pāṇini, in table
  form": (1) तत्र + एव → तत्रैव (2) सदा + एव → सदैव (3) गुरु + ङे → गुरवे (the step that makes
  गुरो-: write "guṇa, a substitute (its rule: Teacher Notes)") (4) पठ- + लङ् → अपठत् (5) लिख- + लङ् →
  अलिखत् (6) "Write भू → भो → भव् as two substitutions, naming each." Key: (1) D-h (2) D-h with सदा:
  0 सदा + एव · 6.1.84 · 1 सद् + ऐ + व — 6.1.88 [आत्] · 1.1.1 · 2 — 1.1.50 · 3 **सदैव** (3) D-n (4),
  (5) D-i with पठ-, लिख- (the stems given) (6) the ladder (above). Accept the merged marker steps.
- **Ex 4 (obj 4; production; homework 8 min, written then said)** — "In Sanskrit, joined, with the
  pause form beneath": (1) "guṇa is a substitute." (2) "In apaṭhat the a is an augment." (3) "The
  growth of wealth and the loss of anger." (4) "In ti the i is dropped." (5) "vṛddhi too is a
  substitute, not an augment." (6) "Loss comes through anger." Key: (1) गुण आदेशः। — pause: गुणः
  आदेशः। (2) अपठदित्यत्राकार आगमः। — pause: अपठत् इति अत्र अकारः आगमः। (3) धनस्य वृद्धिः कोपस्य
  हानिश्च। — pause: धनस्य वृद्धिः कोपस्य हानिः च। (4) तीत्यत्रेकारस्य लोपः। — pause: ति इति अत्र
  इकारस्य लोपः। (5) वृद्धिरप्यादेशो नागमः। — pause: वृद्धिः अपि आदेशः न आगमः। (6) कोपेन हानिर्भवति।
  — pause: कोपेन हानिः भवति। Accept any correct order with correct seams.
- **Ex 5 (§9–§11; spoken; homework 2 min, recorded)** — "Say the ladder aloud, then read the table of
  अगच्छत्, naming the markers ङ्, प् and ट् without pronouncing them in the result." Key: row 0.27.

**§19 Quiz (10; homework; key in `<details>`).**
1. According to Pāṇini (1.1.1), vṛddhi is the name of: (a) अ ए ओ (b) आ ऐ औ (c) इ उ ऋ ऌ (d) all
   long vowels — b. TRADITION
2. According to Pāṇini (1.1.2), guṇa is: (a) अ ए ओ (b) आ ऐ औ (c) adding अ to a vowel (d) ए and ओ
   only — a. TRADITION (c is the main risk)
3. According to Pāṇini, the guṇa of ऋ is: (a) ऋ (b) अर् (c) आर् (d) रि — b. TRADITION (1.1.2 with the
   1.1.51 card)
4. According to Pāṇini, the vṛddhi of उ is: (a) ओ (b) ऊ (c) औ (d) अव् — c. TRADITION
5. According to Pāṇini (1.1.46), an augment marked with ट्: (a) replaces its host (b) goes at the
   beginning (c) goes at the end (d) goes after the last vowel — b. TRADITION
6. In अगच्छत्, the अ at the front is, according to Pāṇini: (a) a substitute (b) an augment (c) a
   marker (d) part of the root — b. TRADITION
7. In अगच्छत्, the इ of ति: (a) is replaced by अ (b) is dropped (3.4.100) (c) is an augment (d)
   becomes त् — b. TRADITION
8. According to Pāṇini, in भवति: (a) guṇa inserts व (b) ऊ → ओ is one substitute and ओ → अव् a second
   (c) व is an augment (d) the root is unchanged — b. TRADITION (a is the 1.x card)
9. Whitney describes a guṇa vowel as: (a) a vowel put in by rule (b) the simple vowel with a prefixed
   a-element (c) a lengthened vowel (d) a vowel with व inserted — b. FACT [REF:whitney1889 §235]
10. According to Patañjali, one who knows deletion, augment and the change of sounds will: (a) guard
   the Vedas properly (b) write the script faster (c) need no teacher (d) avoid all sandhi — a.
   TRADITION (§17)

**§20 bookings (verbatim).**
- +1 day: eight operations labelled — say whether each is a substitute (आदेशः), an augment (आगमः) or
  a deletion (लोपः), and name its sūtra: (1) अ + उ → ओ in सूर्योदयः (2) अ + ए → ऐ in तत्रैव (3) the अ
  at the front of अगच्छत् (4) the इ of ति in अगच्छत् (5) सुँ → अम् in फलम् (6) the ट् of अट् in
  अगच्छत् (7) the उँ of सुँ in रामः (8) ओ → अव् in भवति; v4.c02.l03's Station 0 runs exactly this.
- +1 week: the guṇa/vṛddhi ladder — for इ, ई, उ, ऊ, ऋ and ऌ write the guṇa and the vṛddhi
  substitute, say the rule that defines each grade (1.1.2, 1.1.1) and the rule that says which vowels
  they replace (1.1.3), then write भू → भो → भव् as two substitutions, naming the second (6.1.78);
  v4.c02.l04's Station 0 runs exactly this.

**Class timing (45).** 0–7 Station 0 (S0-da 4, S0-ch 3) · 7–9 review prompts (three) · 9–11 Hook
(अगच्छत् against गच्छति; the 1.x line on भवति) · 11–15 the three operations: 1.1.60, 1.1.46, the
genitive; table 0.C · 15–19 1.1.1 (Q), 1.1.2, 1.1.3 (B) with padaccheda; table 0.B and the 1.1.51
card · 19–23 Ex 1 (4) · 23–27 D-g with the teacher (4) · 27–33 D-i with the teacher (5); D-o read (1) ·
33–38 Ex 2 (5) · 38–42 the IR-021 box and the Whitney line (4) · 42–45 model sentences 1–6 read (3).
Homework: Ex 3, Ex 4, Ex 5, §16, §17, the quiz.

**§21 Homework (40).** Ex 3 (12) · Ex 4 written and said (8) · Ex 5 recorded (2) · §16 aloud (4) ·
§17 read (2) · the quiz (7) and key (2) · real-world task (3): show a Hindi speaker the Hindi school
name गुण सन्धि beside Pāṇini's गुण (अ ए ओ), with सूर्योदय. = 40.

**Teacher Notes.** K8–K13, K21, K25, K28, K29, K39, K40, M2 ({4/17}) (table 0.E) with their
corrections (*ṣaṣṭhī*, *anuccāraṇam*, *śabdair yo*, *prasaṅganivṛttaye*, *sa ika eva*, *veditavyaḥ*,
*avarṇāt*, *brahmaiḍakā*, *sambandhinaḥ*); 3.4.97 इतश्च लोपः परस्मैपदेषु (the source of लोपः and of
"in the P endings" in 3.4.100: the Kāśikā's *parasmaipadeṣu ity eva*, which the data file's `an` does
not list — §7, correction 4); 6.4.72 आडजादीनाम् and 6.1.90 आटश्च (ऐच्छत्); 7.3.111 घेर्ङिति and 1.1.52
(गुरवे); 6.1.113–114 (रामोऽहम्, रामो गच्छति); 1.1.61 (luk, ślu, lup); the Kāśikā's note on the त् of
1.1.1 (K11) against 1.1.2 (K12); the K13 point that 1.1.3 supplies a missing genitive; the p. 89
slip "इ + अ → य् + अ = या" (should be य); the plan's misquotation "रामस् + अपि" (the page reads
अहम्); the 1.x "ELEGANT POINT" line not printed (row 0.26).

**Payoff (plan).** अगच्छत्, owned since Volume 3, is now three operations; the Volume 3 sandhi names
गुणः and वृद्धिः are Pāṇini's own definitions; IR-021 is closed. **Main risk (plan):** "guṇa = add a" —
fixed by the substitution ladder (Ex 1; Ex 3 (6)).

---

## 3. L3 — अनुवृत्तिः: Words Carried Down (grammar)

**Front matter.** id `v4.c02.l03` · file `lesson-03-words-carried-down.md` · title sa अनुवृत्तिः ·
sa_iast *anuvṛttiḥ* · en "Words Carried Down" · hi "अनुवृत्ति: ऊपर से आए पद" · lesson_type grammar ·
cefr B1 · duration 45 · self_study_minutes **45** · prerequisites [v4.c02.l02] · review_of
[v4.c02.l02, v4.c02.l01, v3.c01.l03, v3.c02.l01, v3.c04.l04, v2.c04.l02, v2.c04.l03] ·
vocabulary_count **5** · tags [grammar, panini, anuvrtti, adhikara, natva, satva, ir-016, bracket-line,
derivation, karoshi, laghukaumudi, spaced-review] · media (planned): image
`v4c02l03-words-carried-down.svg` (8.4.1 at the top of a staircase; 8.4.2 and 8.4.37 on the steps
below, each with the words रषाभ्याम् · नः णः समानपदे flowing down to it; a second stair from 8.3.55
अपदान्तस्य मूर्धन्यः through 8.3.57 to 8.3.59); audio `v4c02l03-curl.mp3` (रामेण / देवेन / रथेन;
रामेषु / बालिकासु), `v4c02l03-conversation.mp3`; worksheet `v4c02l03-n-or-n.pdf`; quizzes
`v4c02l03-quiz.md`, `v4c02l03-quiz-key.md`. (review_of names the two v2.c04 lessons that hold शृणोषि
(l02) and करोषि (l03); the plan's "v2.c04".)

**Objectives.**
1. en "Say for six owned forms whether the न became ण, and why: the trigger, what stands between,
   the end of the word." · hi "छह परिचित रूपों में बताएँ कि न ण बना या नहीं, और क्यों: निमित्त, बीच में
   क्या है, पद का अन्त।"
2. en "Say for six owned forms whether the स became ष, and why: an इण् sound or the k-row before it,
   a स् of an affix." · hi "छह परिचित रूपों में बताएँ कि स ष बना या नहीं, और क्यों: पहले इण् वर्ण या
   कवर्ग, प्रत्यय का स्।"
3. en "Read six sūtras with their bracket line and say each completed rule in English, with the words
   it carries and the heading it stands under." · hi "छह सूत्र उनकी कोष्ठक-पंक्ति के साथ पढ़ें और हर
   पूरा नियम अंग्रेज़ी में कहें — अनुवृत्त पद और अधिकार सहित।"
4. en "Derive, according to Pāṇini, in table form, रामेण, रामेषु and करोषि, and by yourself six
   forms: देवेन, मित्रेण, गुरुषु, नदीषु, फलेषु and अगच्छाम." · hi "पाणिनि के अनुसार, तालिका में,
   रामेण, रामेषु और करोषि की व्युत्पत्ति करें, और स्वयं छह की: देवेन, मित्रेण, गुरुषु, नदीषु, फलेषु और
   अगच्छाम।"
5. en "Say and write six sentences with अनुवृत्तिः, अधिकारः, समानः, निमित्तम् and कारणम्, joined,
   with the pause form beneath." · hi "अनुवृत्तिः, अधिकारः, समानः, निमित्तम् और कारणम् से छह वाक्य
   सन्धि सहित बोलें और लिखें, नीचे विराम-रूप के साथ।"

**The opening (§1).** देवेन, रामेण, रामान् — three owned forms, two ns and one ṇ; Volume 3 called the
ṇ of रामेण "an observed spelling; the rule behind it waits for Volume 4" (v3.c01.l04). And the ष of
करोषि, which Volume 2 said "comes with the whole word; the reason waits for Volume 4". Today both
reasons, and a new way of reading: a sūtra that does not say everything it means.

**The one grammar point (plan).** A sūtra is often incomplete on its own: words of earlier sūtras
continue into it (अनुवृत्तिः, "carrying down"). Some sūtras are headings (अधिकारः) that stand over a
long stretch: 6.4.1 अङ्गस्य stands over every rule to the end of Book 7; 8.3.55 अपदान्तस्य मूर्धन्यः
over the ṣatva rules. The material: the two internal sandhi rules, ṇatva and ṣatva.

**Forms taught.** D-j (रामेण), D-k (रामेषु), D-l (करोषि) with the teacher; the three-column sort
re-run as rule checks (देवेन, रथेन, रामान्, कृष्णेन, पितॄणाम्/मातॄणाम्); the ṣ contrasts बालिकासु and
वाक्षु (display); D-m (अगच्छाम) for 3.4.99; the bracket line (row 0.18).

**The bracket lines (data file, 2026-11-10; plan §1.4.3; printed under each sūtra exactly so).**
- **8.4.1** — carried (data file): — · (further headings: Teacher Notes)
- **6.4.1** — carried (data file): दीर्घः, 6.3.111; सम्प्रसारणस्य, 6.3.139 (the file carries them; this
  heading does not use them) · headings (data file): अङ्गस्य, 6.4.1 (the heading begins here)
- **7.1.12** — carried (data file): अतः, 7.1.9 · headings (data file): अङ्गस्य, 6.4.1
- **8.4.2** — carried (data file): रषाभ्याम्, 8.4.1 · carried (course): नः णः समानपदे, 8.4.1 ·
  (further headings: Teacher Notes)
- **8.4.37** — carried (data file): रषाभ्याम्, 8.4.1; न "not", 8.4.34 · carried (course): नः णः,
  8.4.1 · (further headings: Teacher Notes)
- **7.3.103** — carried (data file): अतः, 7.3.101; सुपि, 7.3.102 (preview, c06.l03); दीर्घः, 7.3.101
  (the file carries it; this rule does not use it) · headings (data file): अङ्गस्य, 6.4.1
- **8.3.55** — carried (data file): — · headings (data file): अपदान्तस्य मूर्धन्यः, 8.3.55 (the
  heading begins here) · (further headings: Teacher Notes)
- **8.3.57** — carried (data file): सः, 8.3.56 · headings (data file): अपदान्तस्य मूर्धन्यः, 8.3.55;
  इण्कोः, 8.3.57 (the heading begins here) · (further headings: Teacher Notes)
- **8.3.59** — carried (data file): सः, 8.3.56 ("in place of स्"); नुम्विसर्जनीयशर्व्यवाये · अपि,
  8.3.58 ("even when num, a visarga or a śar sound stands between") · headings (data file):
  अपदान्तस्य मूर्धन्यः, 8.3.55; इण्कोः, 8.3.57 · (further headings: Teacher Notes)
- **3.4.99** — carried (data file): लोपः, 3.4.97; सः, 3.4.98; उत्तमस्य, 3.4.98 · headings (data
  file): प्रत्ययः, 3.1.1; परश्च, 3.1.2 · (further headings: Teacher Notes)
- **3.4.100** (re-read from l02, now with the file's line) — carried (data file): लोपः, 3.4.97;
  नित्यम्, 3.4.99; ङितः, 3.4.99 · headings (data file): प्रत्ययः, 3.1.1; परश्च, 3.1.2 · (further
  headings: Teacher Notes)
- **7.1.24** (re-read from l01, Ex 5) — carried (data file): स्वमोः, 7.1.23; नपुंसकात्, 7.1.23 ·
  headings (data file): अङ्गस्य, 6.4.1

Replaced by "(further headings: Teacher Notes)" in these lines (row 0.18): पूर्वत्रासिद्धम् 8.2.1 and
संहितायाम् 8.2.108 (8.4.1, 8.4.2, 8.4.37, 8.3.55, 8.3.57, 8.3.59); आद्युदात्तश्च 3.1.3, धातोः
3.1.91, लस्य 3.4.77 (3.4.99, 3.4.100). Notes: 8.4.37's न from 8.4.34 is the negative "not" (data
file pc of 8.4.34: an indeclinable; the Kāśikā: *ṇakārādeśo na bhavati*): printed with the gloss
"not" so that it is not read as the sound न् (§7, correction 2). The course line under 8.4.37 is an
addition of this note (§7, deviation 6): without it the learner cannot say what is "not" done. The
8.3.56 that is the source of सः is printed by number only (its text सहेः साडः सः: Teacher Notes; its
सः is the genitive "of स्", data file pc).

**Sūtras by tier (tools added: 10).**
- **Q — 8.4.1 रषाभ्यां नो णः समानपदे** (*raṣābhyāṃ no ṇaḥ samānapade*). Padaccheda: रषाभ्याम् (पञ्चमी,
  dual: "after र् or ष्") · नः (षष्ठी: "in place of न्") · णः (प्रथमा: the result, ण्) · समानपदे
  (सप्तमी: "within one and the same word" — a locative of place, not "before"; the Kāśikā's
  *samānapadasthau*, "both standing in the same word"). English: "After र् or ष्, ण् replaces न् when
  both are in one word." [REF:kashika 8.4.1] (K34); one learner line: "The Kāśikā adds ऋ to र and ष:
  पितॄणाम्, मातॄणाम्" (K35; the vārttika's text: Teacher Notes).
- **B — 6.4.1 अङ्गस्य** (*aṅgasya*). Padaccheda: अङ्गस्य (षष्ठी: "in place of [something of] the
  aṅga"). English: "[From here to the end of Book 7, every rule is about] the aṅga." A heading.
  [REF:kashika 6.4.1] (K22).
- **D — 8.4.2 अट्कुप्वाङ्नुम्व्यवायेऽपि** — "Even when अट् sounds, the k-row, the p-row, the preverb
  आङ् or num stand between [the र्/ष् and the न्]." [REF:kashika 8.4.2] (K36).
- **D — 8.4.37 पदान्तस्य** — "[न्] at the end of a word does not [become ण्]." [REF:kashika 8.4.37]
  (K37).
- **D — 7.1.12 टाङसिङसामिनात्स्याः** — "After an aṅga in short अ, टा, ङसिँ and ङस् are replaced by इन,
  आत् and स्य, in order." [REF:kashika 7.1.12] (K26).
- **D — 7.3.103 बहुवचने झल्येत्** — "Before a plural sup beginning with a jhal sound, the short अ of
  the aṅga becomes ए." [REF:kashika 7.3.103] (K32).
- **D — 8.3.55 अपदान्तस्य मूर्धन्यः** — "[From here to the end of this quarter: in place of स्] not at
  the end of a word, a retroflex." A heading. [REF:kashika 8.3.55] (K30).
- **D — 8.3.57 इण्कोः** — "[From here on:] after an इण् sound or the k-row." A heading.
  [REF:kashika 8.3.57] (K31).
- **D — 8.3.59 आदेशप्रत्यययोः** — "[स्] which is a substitute, or belongs to an affix, [becomes a
  retroflex, ष्]." [REF:kashika 8.3.59] (K33).
- **D — 3.4.99 नित्यं ङितः** — "After a ṅ-marked l-affix, the स् of a 1st-person ending is always
  dropped." [REF:kashika 3.4.99] (K20); the source of the ङितः that l02 carried into 3.4.100.
- **Re-read:** 6.1.87 (owned), 7.3.101 (owned), 1.1.50 (D), 3.4.100 and 7.1.24 with their file lines,
  6.4.71 and 1.1.46 (D-m).
- **Labelled previews:** 7.3.102 (c06.l03), 8.2.1 (c06.l03: why 8.4.1 sees forms made earlier),
  8.2.30 (c04.l01: वाच् → वाक्), the Kāśikā line of 8.4.1 (c06.l02).
- **Teacher Notes:** the ṛ-vārttika (K35); 8.4.41 ष्टुना ष्टुः (the ण of कृष्ण: K34 *ṣṭutvena eva hi
  siddham*); 6.1.103 (the न् of रामान्); 7.1.54 and 6.4.3 (the न and the long vowel of -आनाम्); 8.3.56
  सहेः साडः सः; 3.4.97, 3.4.98; the ल of इण् (Whitney §180b).

**The derivations.** D-j, D-k, D-l with the teacher; D-m read in §15 (3.4.99's step); the sort.
**The Volume 3 three-column sort re-run as rule checks** (plan; learner text):
- देवेन: no trigger, so 8.4.1 does not apply;
- रथेन: थ (a dental) intervenes; it is not in अट्, the k-row, the p-row, आङ् or num, so 8.4.2 does
  not allow it;
- रामान्: word-final न्, which 8.4.37 exempts;
- कृष्णेन: the trigger ष is there, but ण stands between it and the न, and ण is none of the interveners
  8.4.2 allows, so no second ण;
- पितॄणाम्, मातॄणाम् (owned, the Volume 3 recurring-endings card): ऋ/ॠ also trigger, by the
  vārttika the Kāśikā cites under 8.4.1 (Teacher Notes). c03.l03's शृणु refers back to this line.
**ṣ contrasts (plan):** बालिकासु keeps स, because आ is not in इण्; वाक्षु (वाच् + सु → वाक् + सु by
8.2.30, display, c04.l01): the trigger is the क्, the कु of 8.3.57 इण्कोः (the Kāśikā's own example
under 8.3.57, K31). FACT beside them: Whitney §§180, 189 (rows 0.13, 0.14).

**IR-016 corrected (row 0.15 (a); plain text in §8, quoted from the page image).** "The 1.x book
(p. 73) gave one list for both rules — 'When certain sounds (इ ई उ ऊ ऋ ए ऐ ओ औ ह य व र ल क ग)
appear BEFORE a dental स or न, the dental retroflexes' — and wrote '• रामेण (रामेन intended) — the इ
(in pre-form) triggers ण'. The two rules have different triggers: for ṇ, र and ष (8.4.1), and ऋ by
the Kāśikā's addition — no other vowel; for ṣ, the इण् sounds and the k-row (8.3.57). In रामेण the र
triggers. The इ of the pre-form राम + इन triggers nothing here: no vowel but ऋ is a trigger for ṇ, and that इ has already joined the अ as ए (अ + इ, 6.1.87). The book's gloss of 8.4.2, 'even
with intervening अट् (vowels), क्/प्/ङ् class, अङ्, नुम्', is read correctly now: अट् is the vowels and
ह य व र; कु and पु are the k-row and the p-row; and the word is आङ्, the preverb आ."

**Model sentences** (the plan's six; checked; plan review c02:P#5 fixes kept).
1. रामेणेत्यत्र रेफो णत्वस्य निमित्तम्। (*rāmeṇety atra repho ṇatvasya nimittam.*) — pause: रामेण
   इति अत्र रेफः णत्वस्य निमित्तम्। — "In रामेण the r is the cause of the ṇ." — रामेण में रेफ णत्व का
   निमित्त है। (रेफः "the letter r" display; णत्वम्, a term, glossed.)
2. अङ्गस्येत्यधिकारः। (*aṅgasyety adhikāraḥ.*) — pause: अङ्गस्य इति अधिकारः। — "'aṅgasya' is a
   heading." — 'अङ्गस्य' अधिकार है।
3. पूर्वसूत्रात्पदान्यनुवर्तन्ते। (*pūrvasūtrāt padāny anuvartante.*) — pause: पूर्व-सूत्रात् पदानि
   अनुवर्तन्ते। — "Words continue from the previous sūtra." — पूर्व सूत्र से पद अनुवृत्त होते हैं।
   (अनुवर्तन्ते display ○, beside the headword अनुवृत्तिः.)
4. रथेनेति देवेनेति च समानः प्रत्ययः। (*ratheneti deveneti ca samānaḥ pratyayaḥ.*) — pause: रथेन
   इति देवेन इति च समानः प्रत्ययः। — "In रथेन and देवेन the affix is the same." — रथेन और देवेन में
   प्रत्यय समान है।
5. शृणोषि करोषि च — सकारो मूर्धन्यो भवति। (*śṛṇoṣi karoṣi ca — sakāro mūrdhanyo bhavati.*) — pause:
   शृणोषि करोषि च — सकारः मूर्धन्यः भवति। — "In śṛṇoṣi and karoṣi the s becomes retroflex." — शृणोषि
   और करोषि में सकार मूर्धन्य होता है। (मूर्धन्य owned V1; the dash is a stop.)
6. णत्वस्य कारणं रेफः। (*ṇatvasya kāraṇaṃ rephaḥ.*) — pause: णत्वस्य कारणम् रेफः। — "The cause of the
   ṇ is the r." — णत्व का कारण रेफ है।

**The अनुवृत्तिः line** (review c02:E#9, rejected by the plan but cheap to meet: the headword is used
in a Sanskrit sentence; §6 and Ex 4): अत्र न इति पदस्यानुवृत्तिः। (*atra na iti padasyānuvṛttiḥ.*) —
pause: अत्र नः इति पदस्य अनुवृत्तिः। — "Here the word naḥ is carried down." — यहाँ 'नः' पद की अनुवृत्ति
है।

**Headwords (5; 532 → 537).**

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status | dictionary; why now |
|---|---|---|---|---|---|---|---|
| अनुवृत्तिः | anuvṛttiḥ | /ɐn̪uʋr̩t̪t̪ih/ | continuation, carrying down (of a word into later rules) | अनुवृत्ति | f. i-stem (✓ nom./acc./instr.) | ledger-new (-) | MW s.v. anu-vṛtti "(in Pāṇini's Gr.) continued course or influence of a preceding rule on what follows"; Apte s.v. अनुवृत्तिः 2 "… following, continuance in"; the term (rule 20; the अनुवृत्तिः line) |
| अधिकारः | adhikāraḥ | /ɐd̪ʱikɑːɾɐh/ | heading (in a grammar); authority, right | अधिकार | m. a-stem | ledger-new (-) | MW s.v. adhi-kāra "authority", "(in Gr.) government, a governing-rule (the influence of which over any number of succeeding rules is called anu-vṛtti)"; Apte s.v. अधिकारः 1 "Superintendence …" |
| समानः | samānaḥ | /sɐmɑːn̪ɐh/ | same, equal | समान | adj. -ना -नम् | ledger-new (-) | MW s.v. samāna "same, identical, uniform, one", "alike, similar, equal"; Apte s.v. समान "Same, equal, like"; 8.4.1 समानपदे |
| निमित्तम् | nimittam | /n̪imit̪t̪ɐm/ | cause, occasion; sign | निमित्त, कारण | n. a-stem | ledger-new (-) | MW s.v. nimitta "cause, motive, ground, reason", "sign, omen"; Apte s.v. निमित्तं 1 "A cause, motive, ground, reason"; Kāśikā *nimittanimittinau* (K34); Hit 1.158 *nimittaṃ kiñcid āsādya* (`hitop_u.htm` line 1094) — the plan's "Hit तन्निमित्तः" is not in the e-text (§7, correction 6) |
| कारणम् | kāraṇam | /kɑːɾɐɳɐm/ | cause, reason | कारण | n. a-stem | ledger-new (-) | MW s.v. kāraṇa "cause, reason, the cause of anything"; Apte s.v. कारणं 1 "A cause, reason"; Hit 1.27 *lobhaḥ pāpasya kāraṇam* (line 418); DCS 21 tokens (rule 22); its own ण is a ṇatva (र, then अ, then न: 8.4.1–2) — a bonus example |

**§14 line:** "Ledger 532 → 537 (5 ledger-new). Cells drilled: 4 (रामेण, रामेषु, करोषि, अगच्छाम,
derived; all owned cells). Tools added: 10 (8.4.1 Q; 6.4.1 B; 8.3.59, 8.4.2, 7.1.12, 7.3.103, 8.3.55,
8.3.57, 8.4.37, 3.4.99 D)."

**§3 Station 0 (verbatim) and review prompts.**
- +1 day: eight operations labelled — say whether each is a substitute (आदेशः), an augment (आगमः) or
  a deletion (लोपः), and name its sūtra: (1) अ + उ → ओ in सूर्योदयः (2) अ + ए → ऐ in तत्रैव (3) the अ
  at the front of अगच्छत् (4) the इ of ति in अगच्छत् (5) सुँ → अम् in फलम् (6) the ट् of अट् in
  अगच्छत् (7) the उँ of सुँ in रामः (8) ओ → अव् in भवति; v4.c02.l03's Station 0 runs exactly this.
- +1 week: one base, three names — sort the twelve endings सुँ, औ, जस्, अम्, भ्याम्, भिस्, भ्यस्,
  सुप्, शस्, टा, ङे and ङि into strong, pada and bha for the base राजन्, and name the rule each box
  sets off (strong: the lengthened अ, c05.l03; pada: 8.2.7; bha: 6.4.134); v4.c02.l03's Station 0
  runs exactly this.
Keys: S0-dc, S0-db. Review prompts: (v3.c01.l03) "Instrumental singular of देवः, रामः, रथः" — देवेन,
रामेण, रथेन; (v3.c02.l01) "Locative plural of रामः and बालिका" — रामेषु, बालिकासु; (v3.c04.l04) "Which
changes inside a word did Volume 3 name and leave for Volume 4?" — the ṇ of रामेण, the ṣ of रामेषु and
करोषि, the guṇa inside गुरवे, भवति = भो + अति; (v2.c04.l02, v2.c04.l03) "Say 'you hear' and 'you do'"
— शृणोषि, करोषि.

**§4 Historical Context.** **[TRADITION · परम्परा]** "The Kāśikā marks a word that continues from an
earlier rule with phrases such as *iti vartate*, 'is still in force'. Under 8.3.59 it writes
*mūrdhanyaḥ iti vartate, sa iti ca*: 'mūrdhanyaḥ continues, and saḥ'. In Chapter 6 you will find such
words yourself; until then the course prints them in the bracket line. [REF:kashika 8.3.59]" (The
IAST only, no Devanagari line: it is a phrase quoted inside an English sentence; plan §1.1 principle 9
keeps whole commentary lines for Chapter 6.)

**§5 Scientific Explanation (FACT).** Whitney §189 (the ṇ law, with its blockers) and §180 (the ṣ
law), quoted as rows 0.13–0.14 give them [REF:whitney1889 §189]; [REF:whitney1889 §180]; §189a's
articulatory account summarised in one sentence without quotation marks ("the tongue tip, once curled
back for a retroflex sound, stays there for the next nasal unless a sound that moves the front of the
tongue comes between", as Volume 3 put it). FACT and TRADITION side by side: Whitney states the law
as a tendency of the tongue; Pāṇini states it as two rules with carried words. Whitney also says the
ṇ change happens "when [the न्] is immediately followed by a vowel or by न् n or म् m or य् y or व् v",
which is why a word-final न् stays (रामान्): the tradition's 8.4.37.

**§6 Sanskrit Explanation.** Model sentences 1–3 and the अनुवृत्तिः line.

**§7 Hindi Explanation.** Natively written: अनुवृत्ति, अधिकार, णत्व, षत्व; the Hindi row 0.23 (b)
in Hindi (कारण, हरण, मरण, भविष्य — ण/ष शब्द के साथ आए); Hindi terms as GLOSSARY spells them.

**§8 English Explanation.** The recipe: (1) देवेन / रामेण / रामान्, करोषि; (2) why ण here and न
there? (3) anuvṛtti and adhikāra; the bracket line; (4) D-j, D-k, D-l; (5) the learner's six; (6)
sentences. Includes the sort as rule checks, the ṣ contrasts, the IR-016 box, the bracket lines, and
the paragraph "From this lesson on, the bracket line under a quoted sūtra prints the data file's
anuvṛtti and adhikāra fields as the file gives them, with the two exceptions: headings not yet
taught, and a carried word the rule does not use, such as 7.3.103's दीर्घः. Under 8.4.2 the file
carries one word, रषाभ्याम्; the rest of what continues is printed on a separate course line, so that
you see which words the file records and which the reading supplies (the Kāśikā writes all of them
out, Chapter 6)." The ष of करोषि is **not** tied to the root कृ (verification-log decision): it is the
स् of the ending after the stem's ओ; शृणोषि is the same.

**§9–§11.** Row 0.27: रामेण /ɾɑːmeːɳɐ/ against देवेन /d̪eːʋeːn̪ɐ/ and रथेन /ɾɐt̪ʰeːn̪ɐ/ (feel the
tongue leave the curl at थ); रामेषु /ɾɑːmeːʂu/ against बालिकासु /bɑːlikɑːsu/; करोषि /kɐɾoːʂi/; 8.4.1
read joined /ɾɐʂɑːbʱjɑːn̪ n̪oː ɳɐh sɐmɑːn̪ɐpɐd̪eː/ (the anusvāra of रषाभ्यां before न् is the dental
nasal, STYLE_GUIDE §2.1), then word by word.

**§12 Common mistakes.**

| # | Mistake | Fix |
|---|---|---|
| 1 | "In रामेण the इ triggers ण" (the 1.x card) | र triggers (8.4.1); the इ of राम + इन is no trigger for ṇ (among the vowels only ऋ is), and by then it is inside the ए (6.1.87) |
| 2 | One trigger list for ṇ and ṣ | ṇ: र, ष (and ऋ, the Kāśikā's addition); ṣ: the इण् sounds and the k-row |
| 3 | Reading समानपदे as "before the same word" | a locative of place: "within one word" (the Kāśikā: both stand in the same word) |
| 4 | Writing *रामाण् | a word-final न् stays: 8.4.37 |
| 5 | Reading the न carried into 8.4.37 as the sound न् | it is "not" (from 8.4.34): "[न्] at a word's end does not [become ण्]" |
| 6 | Tying the ष of करोषि to the root कृ | the स् of the ending सि after ओ (an इण् sound): 8.3.59; शृणोषि the same |

**§13 Examples.** D-j, D-k, D-l; the sort; the ṣ contrasts; the six model sentences; the bracket
lines of 8.4.2 and 8.3.59 shown full size; कारणम् and निमित्तम् as words with their own ṇ / no-ṇ
(कारणम्: र … ण; निमित्तम्: no trigger, no ṇ).

**§15 Grammar.** anuvṛtti and adhikāra (rows 0.11–0.12); 8.4.1 (Q, padaccheda), 6.4.1 (B,
padaccheda); the bracket lines; ṇatva (8.4.1, 8.4.2, 8.4.37) and ṣatva (8.3.55, 8.3.57, 8.3.59) as two
staircases; D-j, D-k, D-l; D-m with 3.4.99 ("the source of the ङितः you carried in l02"). **Toolbox
(cumulative 43 = 33 + 10)**, each with its forms (रामेण: 7.1.12, 8.4.1, 8.4.2; रामान्: 8.4.37;
रामेषु: 7.3.103, 8.3.59 under 8.3.55, 8.3.57; करोषि: 8.3.59; अगच्छाम: 3.4.99; the heading 6.4.1 over
7.1.12, 7.3.103, 7.1.24, 6.4.71, 6.4.134). Paradigm ledger: ✓ the derived owned cells; ○ वाक्षु.

**Previewed / Deferred (plan).** Previewed: the Kāśikā line of 8.4.1 (c06.l02). Deferred: asiddha
(8.2.1) and why 8.4.1 sees forms made earlier (c06.l03).

**§16 Conversation (12 turns; a student, छात्रा, and the teacher, गुरुः; homework).**
1. छात्रा — गुरो, रामेणेत्यत्र णकारस्य निमित्तं किम्? (*guro, rāmeṇety atra ṇakārasya nimittaṃ
   kim?*) — pause: गुरो, रामेण इति अत्र णकारस्य निमित्तम् किम्? — "Teacher, in rāmeṇa, what is the cause
   of the ṇ?"
2. गुरुः — रेफः। रषाभ्यां नो णः समानपदे। (*rephaḥ. raṣābhyāṃ no ṇaḥ samānapade.*) — pause: रेफः।
   रषाभ्यां नो णः समानपदे। (the sūtra stays as printed) — "The r. 'After r or ṣ, ṇ for n in one word.'"
3. छात्रा — मकारोऽपि तत्रास्ति। (*makāro 'pi tatrāsti.*) — pause: मकारः अपि तत्र अस्ति। — "But the m
   is there too."
4. गुरुः — मकारः पवर्गे, तेन णत्वं भवत्येव। (*makāraḥ pavarge, tena ṇatvaṃ bhavaty eva.*) — pause:
   मकारः प-वर्गे, तेन णत्वम् भवति एव। — "The m is in the p-row; so the ṇ comes all the same."
5. छात्रा — अट्कुप्वाङ्नुम्व्यवायेऽपीति सूत्रे नकार इति पदं नास्ति। (*aṭkupvāṅnumvyavāye 'pīti sūtre
   nakāra iti padaṃ nāsti.*) — pause: अट्कुप्वाङ्नुम्व्यवायेऽपि इति सूत्रे नकारः इति पदम् न अस्ति। —
   "In the sūtra 8.4.2 there is no word for n."
6. गुरुः — तत्पूर्वसूत्रादनुवर्तते। एषानुवृत्तिः। (*tat pūrvasūtrād anuvartate. eṣānuvṛttiḥ.*) —
   pause: तत् पूर्व-सूत्रात् अनुवर्तते। एषा अनुवृत्तिः। — "It continues from the previous sūtra. This
   is anuvṛtti."
7. छात्रा — रामानित्यत्र णकारः किं नास्ति? (*rāmān ity atra ṇakāraḥ kiṃ nāsti?*) — pause: रामान् इति
   अत्र णकारः किम् न अस्ति? — "In rāmān, why is there no ṇ?"
8. गुरुः — नकारः पदान्तेऽस्ति, पदान्तस्येति सूत्रम्। (*nakāraḥ padānte 'sti, padāntasyeti sūtram.*)
   — pause: नकारः पद-अन्ते अस्ति, पदान्तस्य इति सूत्रम्। — "The n is at the end of the word: the sūtra
   is 'padāntasya'."
9. छात्रा — करोषीत्यत्र षकारस्य कारणं किम्? (*karoṣīty atra ṣakārasya kāraṇaṃ kim?*) — pause: करोषि
   इति अत्र षकारस्य कारणम् किम्? — "In karoṣi, what is the reason for the ṣ?"
10. गुरुः — ओकार इण्प्रत्याहारे, सकारश्च प्रत्ययस्य। (*okāra iṇpratyāhāre, sakāraś ca
    pratyayasya.*) — pause: ओकारः इण्-प्रत्याहारे, सकारः च प्रत्ययस्य। — "The o is in iṇ, and the s
    belongs to the affix."
11. छात्रा — बालिकास्वित्यत्र तु न? (*bālikāsv ity atra tu na?*) — pause: बालिकासु इति अत्र तु न? —
    "But not in bālikāsu?"
12. गुरुः — न। आकार इण्प्रत्याहारे नास्ति। (*na. ākāra iṇpratyāhāre nāsti.*) — pause: न। आकारः
    इण्-प्रत्याहारे न अस्ति। — "No: ā is not in iṇ."
Words owned: गुरुः, किम्, अपि, तत्र, अस्ति, न, तेन (तद् ✓), भवति, एव, पूर्वः (c01), सूत्रम्, पदम्,
तु, प्रत्याहारः (c01), प्रत्ययः, today's निमित्तम्, कारणम्, अनुवृत्तिः; एषा (एषः ✓, its f.); labels
रेफः, णत्वम्, पवर्गः, -कार names; display अनुवर्तते. Seams: रामेणेत्यत्र, निमित्तं किम्, मकारोऽपि,
तत्रास्ति, भवत्येव, व्यवायेऽपीति, नकार इति, पदं नास्ति, तत्पूर्वसूत्रादनुवर्तते, एषानुवृत्तिः,
रामानित्यत्र (no doubling after a long vowel), किं नास्ति, पदान्तेऽस्ति, पदान्तस्येति, करोषीत्यत्र,
कारणं किम्, ओकार इण्-, सकारश्च, बालिकास्वित्यत्र, आकार इण्-. None of the exam's items.

**§17 Story — the grammarians' line, 2 concluded (plain text, TRADITION and HISTORY; no new
callout beyond one keyed line).** "In Varadarāja's Laghusiddhāntakaumudī (c. 17th century
[REF:laghukaumudi]), a beginner's grammar of the tradition, these rules come where you have met them
too: in the declension of राम. It reads 8.4.2 and 8.4.37 at रामान्, then 7.1.12 for रामेण — and its
comment ends 'ṇatvam', 'the ṇ-rule', 'rāmeṇa'; it reads 8.3.59 for रामेषु [REF:laghukaumudi on
7.1.12]; [REF:laghukaumudi on 8.3.59]." (L4, L7; the two Sanskrit words are quoted in IAST only.)
Chapter 6 opens the same book.

**§18 Exercises.**
- **Ex 1 (obj 1; class 6 min)** — "ण or न? Say why: the trigger, what stands between, the end of the
  word." (1) गुरुणा (2) देवेन (3) रथेन (4) पुत्राणाम् (5) रामान् (6) कृष्णेन. Key: (1) ण — र, then उ
  (अट्): 8.4.1 with 8.4.2 (2) न — no र, ष or ऋ (3) न — थ, a dental, stands between: not allowed by
  8.4.2 (4) ण — र, then आ (अट्): 8.4.1 with 8.4.2 (5) न — word-final: 8.4.37 (6) न — ण stands between
  the ष and the न: not allowed by 8.4.2. One point each for the answer and the reason.
- **Ex 2 (obj 2; class 4 min)** — "ष or स? Say why." (1) नदीषु (2) बालिकासु (3) गुरुषु (4) फलेषु
  (5) छात्रासु (6) शृणोषि. Key: (1) ष — ई (इण्) before the स् of the affix (2) स — आ is not in इण्
  (3) ष — उ (इण्) (4) ष — ए (इण्; the ए from 7.3.103) (5) स — आ (6) ष — ओ (इण्) before the स् of the
  ending.
- **Ex 3 (obj 4; derive it yourself; homework 12 min)** — "Derive, according to Pāṇini, in table
  form, with the bracket lines": (1) देव + टा → देवेन (2) मित्र + टा → मित्रेण (3) गुरु + सुप् →
  गुरुषु (4) नदी + सुप् → नदीषु (5) फल + सुप् → फलेषु (6) गच्छ- + लङ् (1pl) → अगच्छाम. Key: (1) D-j
  steps 0–2 with देव, then "3 — 8.4.1 does not apply: no र or ष" · **देवेन** (2) D-j with मित्र
  (between र and न: only ए) (3) 0 गुरु + सु — 1.3.3, 1.3.9 · 1 गुरु + षु — 8.3.59 (उ is इण्; 7.3.103
  does not apply: the aṅga does not end in अ) · **गुरुषु** (4) as (3) with ई (5) D-k with फल (6) D-m.
- **Ex 4 (obj 5; production; homework 8 min, written then said)** — "In Sanskrit, joined, with the
  pause form beneath": (1) "In mitreṇa the r is the cause of the ṇ." (2) "'apadāntasya mūrdhanyaḥ'
  is a heading." (3) "Here the word naḥ is carried down." (4) "In devena and rāmeṇa the affix is the
  same." (5) "In nadīṣu the s becomes retroflex." (6) "The cause of the ṣ is the e." Key: (1)
  मित्रेणेत्यत्र रेफो णत्वस्य निमित्तम्। — pause: मित्रेण इति अत्र रेफः णत्वस्य निमित्तम्। (2) अपदान्तस्य
  मूर्धन्य इत्यधिकारः। — pause: the sūtra as printed, then इति अधिकारः। (3) अत्र न इति पदस्यानुवृत्तिः। —
  pause: अत्र नः इति पदस्य अनुवृत्तिः। (4) देवेनेति रामेणेति च समानः प्रत्ययः। — pause: देवेन इति
  रामेण इति च समानः प्रत्ययः। (5) नदीष्वित्यत्र सकारो मूर्धन्यो भवति। — pause: नदीषु इति अत्र सकारः
  मूर्धन्यः भवति। (6) षत्वस्य कारणमेकारः। — pause: षत्वस्य कारणम् एकारः। Accept निमित्तम् for कारणम्
  and the reverse; accept any correct order with correct seams.
- **Ex 5 (obj 3; homework 6 min)** — "Say each rule in full in English, with the words in its bracket
  line, and name the heading it stands under": (1) 7.1.12 (2) 8.4.2 (3) 8.4.37 (4) 7.3.103 (5) 8.3.59
  (6) 7.1.24. Key: (1) "After an aṅga in short अ (अतः, 7.1.9), टा, ङसिँ and ङस् are replaced by इन,
  आत्, स्य" — under अङ्गस्य (2) "After र् or ष् (8.4.1), ण् replaces न् in one word (8.4.1), even when
  अट्, the k-row, the p-row, आङ् or num stand between" — further headings: Teacher Notes (3) "After र्
  or ष् (8.4.1), न् at the end of a word does not (8.4.34) become ण्" — further headings: Teacher Notes
  (4) "Before a plural sup (7.3.102) beginning with a jhal sound, the short अ (7.3.101) of the aṅga
  becomes ए" — under अङ्गस्य; दीर्घः carried but not used (5) "In place of स् (8.3.56) that is a
  substitute or belongs to an affix, after an इण् sound or the k-row (8.3.57), not at a word's end
  (8.3.55), a retroflex (8.3.55) comes — even across num, visarga or a śar sound (8.3.58)" — under
  8.3.55 and 8.3.57 (6) "After a neuter (7.1.23) aṅga in short अ, सुँ and अम् (7.1.23) are replaced
  by अम्" — under अङ्गस्य. Score the completed rule; the source numbers need not be said.
- **Ex 6 (§9–§11; spoken; homework 2 min, recorded)** — "Read 8.4.1 joined, then word by word; then
  say रामेण, देवेन, रथेन and रामेषु, बालिकासु." Key: row 0.27 and §9–§11 above.

**§19 Quiz (10; homework; key in `<details>`).**
1. According to Pāṇini (8.4.1), in रामेण the ण is caused by: (a) the इ (b) the र (c) the ए (d) the म
   — b. TRADITION (a is the 1.x card)
2. In 8.4.1, समानपदे means: (a) before the same word (b) within one and the same word (c) after a word
   (d) in place of a word — b. TRADITION
3. According to Pāṇini, रथेन keeps न because: (a) it has no र (b) थ stands between, and 8.4.2 does
   not allow it (c) the न is word-final (d) its ending is different — b. TRADITION
4. According to Pāṇini, the final न् of रामान् stays because of: (a) 8.4.2 (b) 7.1.12 (c) 8.4.37 (d)
   8.3.59 — c. TRADITION
5. According to Pāṇini, 6.4.1 अङ्गस्य is: (a) an operation (b) a heading over the rules to the end
   of Book 7 (c) the definition of aṅga (d) a marker — b. TRADITION
6. Anuvṛtti is: (a) a word carried down from an earlier sūtra (b) a heading (c) a substitute (d) a
   marker — a. TRADITION
7. According to Whitney, the dental s becomes ṣ when it is immediately preceded by: (a) any vowel
   except a and ā, or k or r (b) any vowel (c) r only (d) i only — a. FACT [REF:whitney1889 §180]
8. According to Pāṇini, बालिकासु keeps स because: (a) आ is not an इण् sound (b) the स् is not part of
   an affix (c) the word is feminine (d) the स् is word-final — a. TRADITION
9. According to Pāṇini, the ष of करोषि comes from: (a) the root कृ (b) the ओ before the स् of the
   ending (8.3.59) (c) the र of the stem (d) a marker — b. TRADITION
10. According to Whitney, which consonant standing between r and n stops the change to ṇ? (a) a
   dental (b) a labial (c) a guttural (d) y — a. FACT [REF:whitney1889 §189]

**§20 bookings (verbatim).**
- +1 day: the ṇ/no-ṇ sort — for देवेन, रथेन, रामान्, कृष्णेन, गुरुणा, मित्रेण and पितॄणाम् say
  whether the न became ण and why, naming the trigger, what stands between it and the nasal, and the
  sūtra (8.4.1, 8.4.2 or 8.4.37); v4.c02.l04's Station 0 runs exactly this.
- +1 week: derive रामेषु — derive, according to Pāṇini, राम + सुप् → रामेषु in table form, with the
  carried words and headings of 7.3.103 and 8.3.59 in brackets as the bracket line gives them;
  v4.c03.l01's Station 0 runs exactly this.

**Class timing (45).** 0–7 Station 0 (S0-dc 4, S0-db 3) · 7–9 review prompts (four, one line each) ·
9–11 Hook (देवेन / रामेण / रामान्; करोषि) · 11–16 anuvṛtti: 8.4.1 (Q) with padaccheda and its bracket
line; 8.4.2 below it with its two bracket lines (5) · 16–21 D-j with the teacher (5) · 21–27 the
sort as rule checks (2); Ex 1 (4) · 27–30 adhikāra: 6.4.1 (B), 8.3.55, 8.3.57 with their bracket lines
(3) · 30–36 D-k and D-l with the teacher (5); the ṣ contrasts (1) · 36–40 Ex 2 (4) · 40–42 the IR-016
box (2) · 42–45 model sentences 1–6 read (3). Homework: Ex 3, Ex 4, Ex 5, Ex 6, §15 with D-m, §16,
§17, the quiz.

**§21 Homework (45).** Ex 3 (12) · Ex 4 written and said (8) · Ex 5 (6) · Ex 6 recorded (2) · §15
with D-m read (2) · §16 aloud (4) · §17 read (1) · the quiz (6) and key (2) · real-world task (2):
find three Hindi words with ण after र in the same word, with only vowels, ह य व र, the k-row or the p-row between (कारण, हरण, मरण …), and say in Hindi which Sanskrit rule
made their ण (8.4.1–2; the key rejects रामायण and प्रमाण, whose ण other rules make: Teacher Notes). = 45.

**Teacher Notes.** K20–K22, K26, K30–K37, L4, L7 (table 0.E) with their corrections (*uttarasya*,
*rephaṣakārābhyām*, *haraṇam / kiriṇā*, *suṣvāpa*, *vṛkṣebhyaḥ*, *leṭaḥ*); the ṛ-vārttika (K35) and
the Kāśikā's two justifications (*raśrutisāmānyanirdeśāt vā siddham*, line 82820: Pass C may print
its sense only); 8.4.41 and the ण of कृष्ण (K34 *ṣṭutvena eva hi siddham*); 8.3.56 सहेः साडः सः (the
source of सः, a genitive); 8.3.58 (the carried interveners: हवींषि-type forms, not taught); 3.4.97,
3.4.98; 6.1.103 (रामान्); 7.1.54, 6.4.3 (-आनाम्); 6.4.1's file-carried दीर्घः and सम्प्रसारणस्य; the
ल of इण् (Whitney §180b); the headings replaced by "(further headings: Teacher Notes)" with their
numbers (8.2.1, 8.2.108, 3.1.3, 3.1.91, 3.4.77); the 1.x p. 73 slips not printed in learner text
(हरेष्षुत; ब्रह्मन् + अस्ति → ब्रह्माणि) and p. 74's "Articulation harmony … ✓ CORRECT" item; the
verification-log decision on करोषि.

**Payoff (plan).** These all now have rules: the ṇ of रामेण (v3.c01.l03: "rule in v4.c02"); the ṣ of
रामेषु (v3.c02.l01); the ṣ of करोषि and शृणोषि, a Volume 2 pointer kept "Volume 4" for two volumes.
**Main risk (plan):** anuvṛtti as guesswork — the course gives every carried word in the bracket line
until Chapter 6; the learner applies the completed rule (Ex 5), and does not find the words.

---

## 4. L4 — द्वितीयपरीक्षा: The Chapter 2 Exam (review)

**Front matter.** id `v4.c02.l04` · file `lesson-04-chapter-two-exam.md` · title sa द्वितीयपरीक्षा ·
sa_iast *dvitīyaparīkṣā* · en "Chapter 2 Exam" · hi "दूसरे अध्याय की परीक्षा" · lesson_type review ·
cefr B1 · duration_minutes **45** (`# the sitting alone; Station 0 (§3, about 8 min) runs before it and
outside its 45`) · self_study_minutes **40** (15 before the sitting: the §15 assembly page from memory
(8), the toolbox card read once (3), §16 aloud (4); 25 after: the §19 quiz (7), the check against the
keys (6), the §17 spiral (4), the remediation exercise of any task below its pass mark (5), the
real-world task (3)) · prerequisites [v4.c02.l03] · review_of [v4.c02.l01, v4.c02.l02, v4.c02.l03,
v4.c01.l04] · vocabulary_count **0** · tags [review, assessment, chapter-exam, prakrti-pratyaya,
anga-pada-bha, adesha-agama-lopa, guna-vrddhi, anuvrtti, natva, satva, derivation, thread-verse,
spaced-review] · media (planned): image `v4c02l04-chapter-page.svg`; worksheet
`v4c02l04-exam-booklet.pdf`; quizzes `v4c02l04-quiz.md`, `v4c02l04-quiz-key.md`. Ledger stays 537.

**Objectives.**
1. en "Label base, affix and markers in eight owned forms." · hi "आठ परिचित रूपों में प्रकृति,
   प्रत्यय और इत् पहचानें।"
2. en "Name the base राजन् strong, pada or bha before six endings, with the reason." · hi "छह
   प्रत्ययों से पहले राजन् का नाम (सर्वनामस्थान, पद, भ) कारण सहित बताएँ।"
3. en "Say for six operations which kind each is and what in its rule shows it." · hi "छह कार्यों में
   बताएँ कि हर एक किस प्रकार का है और सूत्र में उसे क्या दिखाता है।"
4. en "Derive, according to Pāṇini, four owned forms in table form, each step with its sūtra, and
   read an unseen rule with a carried word." · hi "पाणिनि के अनुसार चार परिचित रूपों की व्युत्पत्ति
   तालिका में करें, हर चरण सूत्र सहित, और अनुवृत्ति वाला एक अनदेखा सूत्र पढ़ें।"
(Objective 4 is tested by tasks D and E; each objective's count equals its task's items.)

**§3 Station 0 (verbatim; before the sitting, outside its 45 minutes).**
- +1 day: the ṇ/no-ṇ sort — for देवेन, रथेन, रामान्, कृष्णेन, गुरुणा, मित्रेण and पितॄणाम् say
  whether the न became ण and why, naming the trigger, what stands between it and the nasal, and the
  sūtra (8.4.1, 8.4.2 or 8.4.37); v4.c02.l04's Station 0 runs exactly this.
- +1 week: the guṇa/vṛddhi ladder — for इ, ई, उ, ऊ, ऋ and ऌ write the guṇa and the vṛddhi
  substitute, say the rule that defines each grade (1.1.2, 1.1.1) and the rule that says which vowels
  they replace (1.1.3), then write भू → भो → भव् as two substitutions, naming the second (6.1.78);
  v4.c02.l04's Station 0 runs exactly this.
Keys: S0-de, S0-dd. One review prompt reaches v4.c01.l04: "Write the fourteen sūtras' markers in
order" — ण् क् ङ् च् ट् ण् म् ञ् ष् श् व् य् र् ल्. **Exam guard:** no form of S0-de and no item of S0-dd is an item of tasks A–E (checked item by item below); 8.4.1–2 recur as steps of task D's पुत्रेण, and task C (1) अ + इ → ए asks only the kind of operation, not the ladder.

**§4 Historical Context.** One line, no callout: "This exam reads the machinery, not a text: the
chapter's only text is the thread verse, re-read after the sitting (§17)." (plan §7.3 Q17.)

**§5–§11.** Brief, as in Chapter 1's exam: §5 the FACT lines the chapter used (Whitney §§180, 189,
235a, 421, 424), one sentence each; §6 the model sentences of l01–l03 that are not exam items (l01 1,
3, 6; l02 1, 4, 6; l03 2, 3, 6) read aloud; §7 Hindi: how the exam works and its pass rule, natively
written; §8 English: the assembly (§15) and the pass rule; §9–§11: the sitting's spoken part is none;
the readings of §6 joined then pause form.

**§12 Common mistakes (the chapter's, as exam traps).**

| # | Mistake | Fix |
|---|---|---|
| 1 | Dropping the final स् of भिस् or the म् of आम् as markers | a final dental, स् or म् of an ending is kept (l01's line) |
| 2 | Calling the base pada before सुँ, अम्, औ, जस्, औट् | they are the five strong endings (1.1.43) |
| 3 | "guṇa inserts व" / "guṇa = add a" | guṇa is a substitute; व comes from 6.1.78 |
| 4 | Giving 8.4.1 without 8.4.2 when a sound stands between | name 8.4.2 and say which interveners (अट्, k-row, p-row) |
| 5 | Deriving *राजैः | after 8.2.7, 7.1.9 does not apply (why: c06.l03) |
| 6 | In an unseen rule, taking the carried word from the rule just before | the bracket line names the source: a word may come from further up (7.1.13's अतः is 7.1.9's) |

**§13 Examples (the same types of item as the exam; none of the exam's own; checked against tasks
A–E and the alternative sets).** A-type: नृपः → नृप · सुँ · उँ; देवेभ्यः → देव · भ्यस् · none. B-type:
राजन् before ङे → bha (vowel-initial after the marker). C-type: the augment of अगच्छत् → augment, its
ट् puts it first. D-type: "Derive, according to Pāṇini, राम + टा → रामेण" (D-j) and "राम + सुप् →
रामेषु" (D-k) as worked models. E-type: 7.1.12 read with its bracket line (अतः from 7.1.9).

**§14.** "Ledger 537 → 537 (0 ledger-new). Cells drilled: 0 new. Tools added: 0 (toolbox 43)."

**§15 Assembly (plan).** (1) the anatomy of a word (prakṛti · pratyaya · it; the ending-marker line;
*sup*); (2) the strong/pada/bha box for राजन् with its three rules (S0-db key); (3) the operations
table (table 0.C); (4) the guṇa/vṛddhi ladder (table 0.B); (5) **the toolbox card, 43 tools**
(Chapter 1's 12 + Chapter 2's 31: 13 + 8 + 10), in sūtra-number order, each with its text and one
English line — **this card is printed in the exam booklet and is open during tasks C, D and E**:
D-tier sūtras are "never [assessed] by number; only as 'which rule did this?' with the card open"
(plan §1.4.1); tasks A and B need no card (§7, deviation 7).

**§16 Conversation (8 turns; revision before the sitting; homework).**
1. छात्रः — गुरो, अङ्गं पदं भमिति त्रयः शब्दाः? (*guro, aṅgaṃ padaṃ bham iti trayaḥ śabdāḥ?*) —
   pause: गुरो, अङ्गम् पदम् भम् इति त्रयः शब्दाः? — "Teacher, aṅga, pada, bha — three words?"
2. गुरुः — आम्। प्रत्यय एव कारणम्। (*ām. pratyaya eva kāraṇam.*) — pause: आम्। प्रत्ययः एव कारणम्।
   — "Yes. The affix is the reason."
3. छात्रः — आदेश आगमो लोपश्चेति त्रीणि कार्याणि। (*ādeśa āgamo lopaś ceti trīṇi kāryāṇi.*) — pause:
   आदेशः आगमः लोपः च इति त्रीणि कार्याणि। — "Substitute, augment and deletion: three operations."
4. गुरुः — आम्। गुणो वृद्धिश्चादेशौ। (*ām. guṇo vṛddhiś cādeśau.*) — pause: आम्। गुणः वृद्धिः च
   आदेशौ। — "Yes. guṇa and vṛddhi are substitutes."
5. छात्रः — अनुवृत्तिः कुतः? (*anuvṛttiḥ kutaḥ?*) — pause: the same — "Where does anuvṛtti come
   from?"
6. गुरुः — पूर्वसूत्रात्। (*pūrvasūtrāt.*) — pause: पूर्व-सूत्रात्। — "From an earlier sūtra."
7. छात्रः — णत्वस्य निमित्तं रेफः षकारश्च। (*ṇatvasya nimittaṃ rephaḥ ṣakāraś ca.*) — pause: णत्वस्य
   निमित्तम् रेफः षकारः च। — "The cause of the ṇ is r and ṣ."
8. गुरुः — आम्। षत्वस्य त्विण्प्रत्याहारः कवर्गश्च। (*ām. ṣatvasya tv iṇpratyāhāraḥ kavargaś
   ca.*) — pause: आम्। षत्वस्य तु इण्-प्रत्याहारः क-वर्गः च। — "Yes. But for the ṣ, the iṇ sounds and the
   k-row."
Words owned: गुरुः, त्रयः, त्रीणि (numerals ✓), शब्दः, आम्, एव, कार्यम्, कुतः, पूर्वः, सूत्रम्, तु,
प्रत्याहारः; the chapter's headwords; labels. Seams: अङ्गं पदं भमिति, प्रत्यय एव, आदेश आगमो
लोपश्चेति, गुणो वृद्धिश्चादेशौ, निमित्तं रेफः, षकारश्च, त्विण्- (उ + इ → yaṇ), कवर्गश्च. None of the
exam's items.

**§17 The spiral (unscored; after the sitting; plan §4.0.5).**
(a) **The Chapter 1 item, नास्ति, derived according to Pāṇini** (c01 task D):

| Step | String | Sūtra | What happens |
|---|---|---|---|
| 0 | न + अस्ति | 6.1.84 एकः पूर्वपरयोः (D, l02) | one substitute for both vowels (the heading Chapter 2 adds) |
| 1 | न + अस्ति | 1.1.71 · 1.1.69 (Q); 1.1.9 (D) | अ is an अक् sound, and अ and अ are savarṇa (the check of the Chapter 1 key) |
| 2 | न् + आ + स्ति | 6.1.101 अकः सवर्णे दीर्घः [अचि] (owned) | one long vowel for both |
| 3 | **नास्ति** | — | joined |

(b) **The thread verse re-read** (plan §7.3 Q17: the only text the Chapter 1 and 2 exams read; source
label unchanged from v1.c06.l04, "traditional maṅgala verse; its original source is unrecorded"):
> सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥
> (*sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ | sarve bhadrāṇi paśyantu mā kaścid duḥkhabhāg
> bhavet ||*)
> सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चित् दुःखभाक् भवेत्॥
The learner names what Chapter 2 has added: (1) **the ण of भद्राणि** — र before it, आ between: 8.4.1
with 8.4.2 (no word-end: the न is followed by इ); (2) **the ः of निरामयाः before the daṇḍa** — the
nom. pl. ending जस् keeps its स् (its ज् is a marker), and at the pause स् → रुँ → ः (8.2.66, 8.3.15),
as in रामः. Key printed after the sitting. Not asked: the joins inside निरामयाः (6.1.102, Teacher
Notes), the ः of सुखिनः (the same two rules; the -इन् stem is c05.l03's). One line: "What Chapter 2
has added to the line: the reason for its ण and for the ः at its pause."

**§18 The exam (one 45-minute sitting; closed book except the toolbox card for C–E; the booklet
prints every task; 2 minutes of instructions inside the 45 — so the tasks are A 7, B 6, C 8, D 14,
E 8 = 43 + 2; plan: A 8, B 6, C 8, D 15, E 8 with no instruction time, §7 deviation 8).**

**Task A — the anatomy of eight forms (7 min; 16 points; pass 12).** "Write each form's base, its
affix as the sup list has it, and its marker(s), if any." (1) सेवकः (2) गृहम् (3) बालकैः (4) बालकेन
(5) राज्ञा (6) पुत्रान् (7) गुरवे (8) नृपाणाम्. Key: (1) सेवक · सुँ · उँ (2) गृह · सुँ (→ अम्) · उँ, or, read as the accusative, गृह · अम् · none (both score), or, read as accusative, गृह · अम् · none (both full marks)
(3) बालक · भिस् · none (स् kept) (4) बालक · टा · ट् (5) राजन् · टा · ट् (6) पुत्र · शस् · श् (7)
गुरु · ङे · ङ् (8) नृप · आम् · none (म् kept). Scoring: 1 for the base, 1 for the affix with its
markers right (a marker named where there is none, or missed, loses that point). Remediation: l01 §15
(the ending-marker line) and Ex 1.

**Task B — one base, three names (6 min; 12 points; pass 8).** "Before each ending, is the base राजन्
strong, pada or bha? Give the reason." (1) औट् (2) भ्याम् (3) ङसिँ (4) जस् (5) सुप् (6) ओस्. Key: (1)
strong — one of the five sarvanāmasthāna endings (2) pada — begins with a consonant, not strong
(1.4.17) (3) bha — after its markers ङ् and इँ, अस् begins with a vowel; not strong (1.4.18) (4) strong (5)
pada — सु, consonant-initial (6) bha — vowel-initial. 1 for the name, 1 for the reason. Remediation:
l01 Ex 3 and the S0-db key.

**Task C — six operations (8 min; 12 points; pass 8).** "For each operation say whether it is a
substitute, an augment or a deletion, and what in its rule shows it (the replaced item in the
genitive; the augment's marker; the word लोपः or luk). The toolbox card is open." (1) अ + इ → ए in
नेति (न + इति) (2) the अ at the front of अवदत् (3) the ending after नमस्, gone (4) टा → इन in नृपेण
(5) the इ of ति, gone in अवदत् (6) सुँ → अम् in मित्रम्. Key: (1) substitute — one vowel in place of
both (6.1.87, under the heading 6.1.84 पूर्वपरयोः, a genitive) (2) augment — अट्, its ट् puts it at
the beginning (6.4.71, 1.1.46) (3) deletion — the word luk, carried into 2.4.82 from an earlier rule (its bracket in l01) (4) substitute — टा in the
genitive (टाङसिङसाम्) in 7.1.12 (5) deletion — 3.4.100 (लोपः carried) (6) substitute — सुँ and अम्
named in the genitive (स्वमोः, carried into 7.1.24). 1 for the kind, 1 for what shows it; the sūtra
number is not required. Remediation: l02 table 0.C, Ex 2. (Guard: no 6.1.78, no S0-de form; item (1) asks only the kind of operation, not the ladder.)

**Task D — "Derive, according to Pāṇini, …" (14 min; 20 points; pass 14).** "Derive each form in table
form, each step with its sūtra (the toolbox card is open)." (1) पुत्र + टा → पुत्रेण (2) बालक + सुप् →
बालकेषु (3) राजन् + भिस् → राजभिः (for राजभिः the derivation ends with 8.2.7 and then the visarga steps
8.2.66 and 8.3.15, as in रामः; why 7.1.9 does not then apply is not asked) (4) शृणो- + सि → शृणोषि
(the stem is given; derive the ṣ only).
- **D-p key, पुत्रेण (6 points):** 0 पुत्र + टा · 1 पुत्र + इन — 7.1.12 [अतः] (2: form and sūtra) ·
  2 पुत्रेन — 6.1.87 (1) · 3 पुत्रेण — 8.4.1, with 8.4.2 for the ए between र and न (2: 8.4.1 named;
  the intervener said or 8.4.2 named) · result **पुत्रेण** (1).
- **D-q key, बालकेषु (5 points):** 0 बालक + सु — its प् a marker (1) · 1 बालके + सु — 7.3.103 (2) · 2
  बालकेषु — 8.3.59, the स् of an affix after ए (इण्) (2).
- **D-r key, राजभिः (6 points):** 1 pada by 1.4.17 (1) · 2 राज + भिस् — 8.2.7 (2) · 3 राजभि + रुँ —
  8.2.66 (1) · 4–5 राजभिः — the marker dropped and 8.3.15 (1) · result **राजभिः** (1).
- **D-s key, शृणोषि (3 points):** 1 शृणो + षि — 8.3.59, ओ is इण् and the स् belongs to the ending (2:
  sūtra 1, reason 1) · result **शृणोषि** (1).
Accept merged marker lines; a step out of order loses its point. Remediation: l01 D-c and Ex 2 (5);
l03 D-j, D-k, D-l and Ex 3.

**Task E — an unseen rule pair (8 min; 8 points; pass 5).** The booklet prints: "**7.1.13 ङेर्यः** —
padaccheda: ङेः (षष्ठी: in place of ङे, the dat. sg. ending) · यः (प्रथमा: the result, य) — headings
(data file): अङ्गस्य, 6.4.1 — carried (data file): ______ . It stands after 7.1.12
टाङसिङसामिनात्स्याः, whose bracket line is: carried (data file): अतः, 7.1.9 · headings (data file):
अङ्गस्य, 6.4.1." (1) "Which word is carried into 7.1.13? (a) अतः, from 7.1.9 (b) भिस, from 7.1.9 (c)
इन, from 7.1.12." (2) "Derive, according to Pāṇini, रामाय from राम + ङे. The last step belongs to a later lesson and
is printed for you; write the steps before it." The booklet prints the table's last line: "3 · **रामाय** ·
7.3.102 सुपि च [preview: c06.l03] · the stem's अ is lengthened before the ending". (No non-word is
printed as a result: the string राम + य is a stage, shown with its seam.) Key: (1) (a) — 2
points (the data file's `an` of 7.1.13: अतः, 7.1.9; it has run through 7.1.12 too). (2) D-t: 0 राम +
ङे · 1 राम + ए — ङ् is a marker (the ending-marker line; 1.3.8, preview) (2) · 2 राम + य — 7.1.13 [अतः]:
after an a-stem, ङे → य (2) · the stage राम + य written with its seam, not as a word, and the printed
step 3 copied beneath it, **रामाय** (2). Pass 5. Remediation: l03 Ex 5 and the bracket
lines. (The Kāśikā's reading, K27: *akārāntād aṅgād uttarasya ṅe ity etasya yaḥ ity ayam ādeśo
bhavati / vṛkṣāya*: Teacher Notes; the derivation is the same kind as l03's D-j step 1.)

**Pass rule.** Every task at its pass mark (A 12/16, B 8/12, C 8/12, D 14/20, E 5/8; 68 points), and
the §19 quiz, taken after the sitting, at 7/10 (plan §7.6, row "v4.c01 fact base", exam shapes). The
rubric weights the derivations and the rule-reading (D and E, 28 of 68) over labelling (A, 16). A task
below its mark: its remediation exercise, then a retake of that task after one week with the
alternative set below.

**Alternative item sets (retake; written out in full; none is an S0-de or S0-dd item).**
- **A′ (16; pass 12):** (1) नरः (2) वनम् (3) देवैः (4) सेवकेन (5) राजभिः (6) बालकान् (7) अग्नये (8)
  देवानाम्. Key: (1) नर · सुँ · उँ (2) वन · सुँ (→ अम्) · उँ, or, read as the accusative, वन · अम् · none (both score), or, read as accusative, वन · अम् · none (3) देव · भिस् · none (4) सेवक · टा · ट्
  (5) राजन् · भिस् · none (6) बालक · शस् · श् (7) अग्नि · ङे · ङ् (8) देव · आम् · none.
- **B′ (12; pass 8):** (1) सुँ (2) भ्यस् (3) टा (4) अम् (5) भिस् (6) आम्. Key: (1) strong (2) pada
  (3) bha (after ट्, आ) (4) strong (5) pada (6) bha; reasons as task B.
- **C′ (12; pass 8):** (1) अ + ए → ऐ in तत्रैव (2) the अ at the front of अपठत् (3) the इ of ति, gone
  in अलिखत् (4) ङसिँ → आत् in रामात् (5) the न् of राजन्, gone in राजभिः (6) the ending after नमस्,
  gone. Key: (1) substitute — one vowel for both (6.1.88 under 6.1.84) (2) augment — ट् → at the
  beginning (6.4.71, 1.1.46) (3) deletion — 3.4.100 (4) substitute — ङसिँ in the genitive (7.1.12)
  (5) deletion — the word लोपः in 8.2.7 (6) deletion — luk, carried into 2.4.82.
- **D′ (20; pass 14):** (1) नर + टा → नरेण (6; as D-p: र, then ए, then न) (2) देव + सुप् → देवेषु (5; as D-q) (3)
  राजन् + टा → राज्ञा (6: 1.4.18 bha (1); the ट् a marker (1); राज्न् + आ — 6.4.134 (2); राज्ञा —
  8.4.40 (1); result (1)) (4) करो- + सि → करोषि (3; as D-s).
- **E′ (8; pass 5):** the same booklet text of 7.1.13 with the options reordered — (a) इन, from
  7.1.12 (b) अतः, from 7.1.9 (c) टा, from 7.1.12 — and "Derive, according to Pāṇini, देवाय from
  देव + ङे; the last step is printed for you" (the printed last line: "3 · **देवाय** · 7.3.102 सुपि च
  [preview: c06.l03]"). Key: (b); D-t with देव, ending on the stage देव + य and the printed step.

**§19 Quiz (10; after the sitting; key in `<details>`; none is an exam item).**
1. According to Pāṇini (1.4.13), a base before any affix is called: (a) pada (b) bha (c) aṅga (d)
   prātipadika — c. TRADITION
2. According to Pāṇini, which ending is strong (sarvanāmasthāna) for a masculine? (a) भिस् (b) औ (c)
   टा (d) आम् — b. TRADITION (1.1.43)
3. In Whitney's account, the stem राजन् has: (a) one form (b) two forms (c) a triple form (d) four forms — c. FACT
   [REF:whitney1889 §421]
4. According to Pāṇini (1.1.60), लोपः is: (a) disappearance (b) a substitute (c) a heading (d) an
   augment — a. TRADITION
5. According to Pāṇini, the guṇa of इ is: (a) ऐ (b) ए (c) ई (d) अय् — b. TRADITION
6. According to Pāṇini (1.1.46), an augment marked with क् goes: (a) at the beginning (b) at the end
   (c) after the last vowel (d) in place of its host — b. TRADITION
7. According to Pāṇini, 8.3.55 अपदान्तस्य मूर्धन्यः is: (a) a heading (b) a marker (c) a substitute
   (d) a definition — a. TRADITION
8. According to Pāṇini, पुत्राणाम् has ण because: (a) र stands before it with only आ between (b) the
   ending is plural (c) the न ends the word (d) of the उ — a. TRADITION
9. According to Pāṇini, नदीषु has ष because: (a) ई is an इण् sound and the स् belongs to the ending
   (b) the word is feminine (c) of the द (d) of 8.4.1 — a. TRADITION
10. According to Patañjali, the purposes of grammar include: (a) laghu, economy (b) metre (c)
   astronomy (d) poetry — a. TRADITION (l01 §17)

**§20 bookings (verbatim).**
- +1 day: derive रामेण — derive, according to Pāṇini, राम + टा → रामेण in table form, each step with
  its sūtra, and say which words 7.1.12 and 8.4.2 carry and from where; v4.c03.l01's Station 0 runs
  exactly this.
- +1 week: the operations table — from memory, write the three operations with their Sanskrit names
  (आदेशः, आगमः, लोपः), what shows each in a rule (the genitive, 1.1.49; the augment's marker, 1.1.46;
  the word लोपः, 1.1.60) and one owned example of each; v4.c03.l02's Station 0 runs exactly this.

**Class timing.** Station 0 before the sitting (about 8 min: S0-de 4, S0-dd 4), outside the 45. The
sitting: 0–2 instructions · 2–9 A · 9–15 B · 15–23 C · 23–37 D · 37–45 E. §17 and §19 after the
sitting, at home.

**§21 Homework (40).** Before the sitting (15): the §15 assembly page from memory (8), the toolbox
card read once (3), §16 aloud (4). After (25): the §19 quiz (7), the check against the keys (6), the
§17 spiral (4), the remediation exercise of any task below its pass mark (5), the real-world task (3):
explain to a Hindi speaker, in Hindi, with रामेण and करोषि, the two rules that make ण and ष. = 40.

**Teacher Notes.** The alternative sets; K26, K27 (7.1.13), K32; 7.3.102 सुपि च and 1.1.56 (why
राम + य → रामाय: c06.l03); 1.3.8 (the ङ् of ङे); 1.3.7 and 6.1.102 (the thread verse's निरामयाः: जस्'s ज्,
the long आ); the plan's exam minutes (A 8, D 15) and why two minutes of instructions are taken (as
c01's exam, editor's decision 6 there); the toolbox card's 43 rows (number order); the remediation
addresses.

**Payoff (plan).** The learner derives three owned forms they could not explain before the chapter:
रामेण (here पुत्रेण, the same derivation), राजभिः and the ṣ of शृणोषि. **Main risk (plan):** task E (an
unseen anuvṛtti) — scaffolded: the carried word is chosen from three offered.

---

## 5. (this chapter has no fifth lesson)

---

## 6. Pass C checklist

Every claim a citation reviewer must re-check, with where it was checked here.

1. **Every sūtra number and text** printed in l01–l04 (tier lines, previews, Teacher Notes, the
   bracket lines): re-run `scratchpad/v4c02/sl.py` on the 72 numbers of rows 0.19 and §1–§4; every
   bracket line of §3 against the data file's `an`/`ad` fields, character by character (the two
   exception labels of row 0.18 applied, nothing else changed).
2. **Every padaccheda case label** (1.4.17, 1.4.18, 3.1.1, 3.1.2, 1.3.2, 1.4.13, 1.1.1, 1.1.2,
   1.1.3, 8.4.1, 6.4.1, 7.1.13 in task E) against the data file's `pc` field (case digit, number).
   Special checks: समानपदे and उपदेशे are locatives of place (not "before"); यस्मात् in 1.4.13 is
   "from which"; 8.4.34's न is the indeclinable (pc type 0).
3. **Every English line of a sūtra** against the Kāśikā line under it (table 0.E); 1.4.17 against
   K7 and L5 (no comment under 1.4.17 in the e-text: confirm at lines 5661–5666).
4. **Every commentary quotation** (table 0.E) re-found by line and copied character by character;
   every correction in the last column listed in Teacher Notes and added to the plan's §4.6 list;
   the two interpretive corrections (K4 *upacattām*, K20 *upacāva, upacāma*) checked against a
   printed Kāśikā if one can be opened — else those words are not printed anywhere (they are
   Teacher Notes only now).
5. **The Paspaśāhnika lines** (M2, `pmbhassu.htm` 144–147): text, the not-bold status of {2/17} and
   {4/17} (Patañjali's own words), the Kielhorn locator "KA_I,1.14-2.2", the joins the course makes
   (row 0.21), the single correction *proyojanam*; the compound's first member रक्षा (from {3/17}).
6. **The HISTORY callout of l01 §17** (row 0.17): "c. 2nd c. BCE" is the `mahabhashya` key's own
   date; Kātyāyana's role rests on the e-text header (M1) and the Mahābhāṣya's own "bhagavān kātyaḥ"
   (M3); [REF:cardona1997] is cited as the course's general key for the tradition (plan §7.3 Q3) and
   was **not opened** — under the evidence rule the callout prints only what M1–M3 and the key's
   date support; "over two thousand years" is cut (open item 2).
7. **Whitney sections** (each opened here; confirm the quoted words): §180 and §180b (ṣ), §189 and
   §190 (ṇ), §235a (guṇa, vṛddhi; the e-text prints "255"), §327a–b (a-stem nom./acc.), §336d (the
   u-stem dative), §421 and §421b, §424 (every राजन् cell of table 0.A, Whitney's -स् finals noted).
8. **The 1.x quotations** (row 0.15): pp. 73, 89, 98 re-read **on the page image** (not the text
   layer); in particular "रामस् + अहम् → रामोऽहम्" (not the plan's अपि), "the इ (in pre-form) triggers
   ण", the trigger list "इ ई उ ऊ ऋ ए ऐ ओ औ ह य व र ल क ग", "अङ्", "Case 1 sg: राजा (pada — n drops)",
   "Case 2 sg: राजानम् (aṅga — n stays)", "In "weak" cases (3rd-7th cases) before vowel endings,
   stems collapse:".
9. **Every headword** (16 + the upgrade गुणः) against Apte and MW (the senses quoted in the headword
   tables), and every Hitopadeśa locus: line 370 (Hit 1.17, प्रकृत्या), 139 (आत्मनः), 1249 (Hit
   1.188, स्वामी), 1500 (भृत्यः), 1346 (artha-vṛddhiḥ), 2048 (sakopam), 1094 (Hit 1.158, nimittaṃ),
   418 (Hit 1.27, kāraṇam); the DCS counts from `hitlem.txt` (rājan 227, ātman 73, svāmin 68, kopa
   22, bhṛtya 22, kāraṇa 21).
10. **Ledger status** of every headword (`work/owned.py`: "-" for all 16; गुण owned v1.c03.l03) and
    of every word in every course-written line (the "Words owned" lines of §16 and the model
    sentences); प्रकृतेः ◐ and पक्षिणः R1 labelled; every राजन् cell other than राजभिः, राज्ञा, राजा
    used nowhere as ✓.
11. **Every joined line** against its pause form and the seam list of row 0.20 (Pass A
    re-transliterates the IAST).
12. **The Hindi rows** (row 0.23): (a) and (b) rest on the Volume 3 Chapter 4 fact base rows 0.21
    (a)–(b) and v3.c04.l01 §4; re-check only their wording; (c) not printed.
13. **The Station 0 wording**: S0-cf, S0-cg, S0-ch against v4.c01.l03 §20 and v4.c01.l04 §20
    (diffed 2026-11-10: identical); every booking of this chapter used
    verbatim in its two lessons (table 0.D).
14. **The exam guard**: no S0-de or S0-dd form or item in tasks A–E or the alternative sets (8.4.1–2 recur as steps of D (पुत्रेण) and D′ (नरेण); इ → ए appears in task C (1) only as a kind of operation)
    (checked: §4); every exam key item needs only what l01–l03 teach (task E's 1.3.8 is the ending-
    marker line of l01; 7.1.13 is read, not taught, and is not counted, plan §4.0.3 Totals).
15. **The counts**: tools added 13 · 8 · 10 (43 after the chapter); ledger 521 → 527 → 532 → 537 →
    537; `vocabulary_count` 6 · 6 · 5 · 0; self-study 45 · 40 · 45 · 40, each §21 adding up; each
    class plan's slots adding to 45 with every exercise placed.

## 7. Open items for review

1. **Station 0 into Chapter 2.** S0-cf, S0-cg and S0-ch are quoted from the c01 fact base (table 0.D,
   verified 2026-11-10) and match v4.c01.l03 §20 and v4.c01.l04 §20 verbatim (re-diffed 2026-11-10). If the c01 lessons change the
   wording, this chapter's l01/l02 §3 follow the lessons.
2. **The grammarians' callout (l01 §17).** Its date rests on the `mahabhashya` key; its account of
   Kātyāyana on the e-text (M1, M3). Recommendation: print it as row 0.17 words it, without "over two
   thousand years", and without any date for Kātyāyana; Pass C may add a hedged sentence from
   Cardona only under the evidence rule ("search-confirmed; page not opened").
3. **Hindi parallel for l01.** None printed (row 0.23 (c)). If Pass C can confirm from Kachru 2006
   (or another opened source) that Hindi राजा keeps one form in the oblique singular (राजा ने), the
   contrast "Hindi keeps the Sanskrit nominative राजा as its stem; Sanskrit has three stems behind
   राजा" may be added as FACT [REF:kachru2006].
4. **Interpretive e-text corrections** K4 (*upacattām*) and K20 (*upacāva, upacāma*): not printed in
   learner text; recommendation: list them in the §4.6 spelling list as "probable; edition not
   opened".
5. **No Whitney line for the augment** of अगच्छत्: the relevant section was not opened; none prints
   (D-i).
6. **The Totals paragraph of plan §4.0.3** lists Teacher-Notes sūtras; this note adds (no count
   changes): 7.1.23, 2.4.58, 3.4.97, 3.4.98, 8.3.56, 8.4.41, 6.1.103, 7.1.54, 6.4.3, 1.1.52, 1.1.61,
   1.4.1, 5.4.151, 6.1.102 — every one found in the data file (2.4.58 ण्यक्षत्रियार्षञितो यूनि लुगणिञोः
   is the rule that first names लुक् in this stretch; 1.1.52 अलोऽन्त्यस्य; 1.1.61 प्रत्ययस्य
   लुक्श्लुलुपः; 5.4.151 उरःप्रभृतिभ्यः कप्).
7. **GLOSSARY terms this chapter adds or updates** (grammar terms; the Hindi column binding on the
   lessons):
   - **प्रकृतिः** · *prakṛtiḥ* · "base: the root or nominal base an affix is added to (3.1.1–2)" ·
     प्रकृति · v4.c02.l01
   - **प्रत्ययः** · *pratyayaḥ* · "affix: what a rule adds after a base (3.1.1–2)" · प्रत्यय ·
     v4.c02.l01
   - **अङ्गम्** · *aṅgam* · "aṅga: the base before an affix (1.4.13)" · अङ्ग · v4.c02.l01
   - **पदम्** (update) · + "in a rule: the name of a base before a consonant-initial, not strong
     ending (1.4.17); and of a whole word ending in sup or tiṅ (1.4.14)" · पद · v4.c02.l01
   - **भम्** · *bham* · "bha: the name of a base before a य- or vowel-initial, not strong ending
     (1.4.18)" · भ · v4.c02.l01
   - **सर्वनामस्थानम्** · *sarvanāmasthānam* · "the five strong endings सुँ औ जस् अम् औट्, except
     after a neuter (1.1.43)" · सर्वनामस्थान · v4.c02.l01
   - **प्रातिपदिकम्** · *prātipadikam* · "a nominal base: a meaningful form, not a root, not an affix
     (1.2.45)" · प्रातिपदिक · v4.c02.l01
   - **सुप्** (update) · + "a pratyāhāra of 4.1.2: from सुँ to the marker प्, the 21 case endings"
     · सुप् · v4.c02.l01
   - **आगमः** · *āgamaḥ* · "augment: a sound a rule adds; its marker places it (1.1.46)" · आगम ·
     v4.c02.l02
   - **लोपः** · *lopaḥ* · "deletion: disappearance of what would have appeared (1.1.60)" · लोप ·
     v4.c02.l02
   - **आदेशः** (update) · + "one of the three operations, beside आगमः and लोपः" · आदेश · v4.c02.l02
   - **गुणः / वृद्धिः** (update) · + "in Pāṇini: the names of the vowels अ ए ओ (1.1.2) and आ ऐ औ
     (1.1.1), put in place of इ उ ऋ ऌ (1.1.3) — not the names of joins" · गुण, वृद्धि · v4.c02.l02
   - **अनुवृत्तिः** · *anuvṛttiḥ* · "carrying down: a word of an earlier sūtra continuing into a later
     one" · अनुवृत्ति · v4.c02.l03
   - **अधिकारः** · *adhikāraḥ* · "heading: a sūtra that stands over a stretch of rules (6.4.1 अङ्गस्य)"
     · अधिकार · v4.c02.l03
   - **णत्वम् / षत्वम्** · *ṇatvam / ṣatvam* · "the rules that make ण for न (8.4.1–2) and ष for स
     (8.3.59)" · णत्व, षत्व · v4.c02.l03
8. **REFERENCES:** no new key. Keys used, all present in REFERENCES.md: `ashtadhyayi`, `kashika`,
   `laghukaumudi`, `mahabhashya`, `cardona1997`, `whitney1889`, `apte1890`, `monierwilliams1899`,
   `kachru2006`, `guru1952`, `cepeda2006`, `roediger2006`, `nation2013`.

**Editor's decisions (2026-11-10, after the fact-base verification):**

1. **Station 0 into Chapter 2 (item 1).** The chain stands. The three arriving items follow
   v4.c01.l03 §20 and v4.c01.l04 §20 as those lessons ship (Chapter 1 is under review); Pass D of
   both chapters re-diffs them.
2. **The grammarians' callout (item 2).** Printed as row 0.17 words it: no "over two thousand
   years", no date for Kātyāyana. Pass C may add one hedged sentence of scholarship only under the
   evidence rule ("search-confirmed; page not opened").
3. **A Hindi parallel for lesson 1 (item 3).** None prints unless Pass C confirms it from a source
   that was opened or quoted by search.
4. **The interpretive e-text corrections (item 4).** Not printed in learner text; listed in the
   plan's §7.6 as probable, edition not opened.
5. **Whitney on the augment (item 5).** Whitney's grammar is on disk: Pass C opens his section on
   the augment and, if it says so, the derivation of अगच्छत् gains a FACT line with its locator;
   otherwise none prints.
6. **Teacher-Notes sūtras (item 6).** Recorded as a row of the plan's §7.6; no count changes.
7. **GLOSSARY (item 7).** The rows and updates are proposed as exact fixes by Pass D and added when
   the chapter is reviewed.
8. **REFERENCES (item 8).** No new key.
9. **The exam's task E (found at verification).** No non-word is printed as a result. The task
   asks for रामाय from राम + ङे; the table's last line, 7.3.102, is printed for the learner and
   marked with its lesson (c06.l03); the learner writes the steps before it and ends on the stage
   राम + य, shown with its seam. The retake does the same with देवाय. The chapter frame says so.
10. **The second Mahābhāṣya line (lesson 2 §17)** and **the toolbox card open in the exam for
    tasks C–E**: accepted. The line is display only, attributed "According to Patañjali", and
    compared with the e-text letter for letter at Pass A.
11. **The corrections for the plan's §7.6:** the eight rows the note proposed and three from the
    verification (the Teacher-Notes sūtras; no derivation ending on a non-word; the Hindi examples
    of ṇatva and ṣatva) are entered in the plan.

### Deviations from the plan (with reasons) — for the plan's §7.6

1. **Station 0 entry quoted from the c01 fact base** and diffed against the c01 lessons' §20 (identical); the
   chain is the plan's (§4.0.5; §7.6 row "v4.c01 fact base", entry pattern).
2. **Derivation tables in four columns** (the c01 correction, plan §7.6), and two splits: D-a shows
   the रुँ marker as its own step; D-i splits "ल् → तिप् … ति" into the substitute (3.4.78, preview)
   and the marker's deletion (review c02:P#7's point made visible). Same sūtras, same tiers.
3. **The 1.x p. 89 lopa example is रामस् + अहम् → रामोऽहम्**, not "रामस् + अपि → रामोऽपि" as the plan's
   l02 block and §4.0.4 row "new (review)" quote it (page image read at 250 dpi). The correction's
   substance is unchanged; the learner text quotes the page.
4. **A second commentary line in learner text**: l02 §17, the Paspaśāhnika's {4/17} (row 0.21),
   beside the plan's {2/17} in l01 §17. Reason: it is Patañjali's own sentence naming lopa, āgama and
   the change of sounds, the lesson's three operations; display ○, not assessed beyond "According to
   Patañjali" (quiz l02/10).
5. **Two added lines for headwords** that no plan sentence used: आत्मा नरस्य मित्रम्। (l01 §6, Ex 4)
   and अत्र न इति पदस्यानुवृत्तिः। (l03 §6, Ex 4; review c02:E#9, rejected by the plan, met at no
   cost). No headword or count changes.
6. **8.4.37's bracket line** adds a course line "carried (course): नः णः, 8.4.1" and glosses the
   file's न from 8.4.34 as "not" (it is the negative particle; data file pc; Kāśikā *na bhavati*).
   The plan's line printed only the file's words, which a learner would read as the sound न्.
7. **The toolbox card is open for exam tasks C–E** (the plan's exam shape says nothing about it). D-
   tier sūtras are never asked by number without the card (plan §1.4.1); tasks A and B need none.
8. **Exam minutes and marks**: A 7, B 6, C 8, D 14, E 8 + 2 minutes of instructions (plan: A 8, D
   15, no instruction time), as the c01 exam did (its editor's decision 6); points and pass marks
   set (A 12/16, B 8/12, C 8/12, D 14/20, E 5/8; the plan gives none); the spiral (§17) after the
   sitting, unscored, in the homework.
9. **review_of**: l02 adds v4.c01.l04 (its §3 runs that lesson's +1-week booking); l03 names
   v2.c04.l02 and v2.c04.l03 for the plan's "v2.c04".
10. **Self-study minutes** 45 · 40 · 45 · 40 (the plan gives none); every class slot timed from the
    exercises placed in it; §16 is homework in every lesson.
11. **निमित्तम्'s Hitopadeśa locus**: the plan's "Hit तन्निमित्तः" is not in `hitop_u.htm`; Hit 1.158
    *nimittaṃ kiñcid āsādya* (line 1094) is cited instead. The plan's "Hit अर्थवृद्धिः" is the e-text's
    *artha-vṛddhiḥ* (line 1346).
12. **1.4.17's English line** follows the Kāśikā under 1.4.18 and the LSK under 1.4.17: the GRETIL
    Kāśikā has no comment under 1.4.17.
13. **3.4.100 in l02** carries, besides the plan's ङितः, the deletion and "in the P endings" from an
    earlier rule (3.4.97, Teacher Notes): the Kāśikā's *parasmaipadeṣu ity eva* (K21); without
    लोपः the rule does not say what happens to the इ. The data file's `an` lists लोपः but not
    परस्मैपदेषु: the l03 bracket line prints the file as it is.
14. **The IR-016 box quotes the 1.x line verbatim** ("the इ (in pre-form) triggers ण"), replacing the
    plan's paraphrase "in रामेण the इ triggers ण" (review c02:E#16, rejected by the plan; met at no
    cost under the course's rule that a quotation in quotation marks is verbatim).
15. **The ऋ row of the ladder** has no owned example in l02 (none is transparent before c03.l02);
    स्मरति is named as c03.l02's.

**Corrections for the plan's §7.6 table (what later chapters need) — entered in the plan on 2026-11-10 as below:**

| From | The plan says | Correction (where it matters next) |
|---|---|---|
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
---

## 8. Errata to shipped files

### (a) Lines now false, with exact mechanical fixes

Searched 2026-11-10: every file of `curriculum/volume-1`, `volume-2` and `volume-3` for "Volume 4",
"v4.c02", "v4)", "for v4", "ṇatva", "ṇ rule", "ṣ of", "करोषि", "शृणोषि", "guṇa", "vṛddhi", "augment",
"राजन्", "rājan", "aṅga", "sup", "नमः", "8.4.1", "8.4.2", "8.4.37", "8.3.59", "1.4.14"; and the plan's
§4.0.6 rows for c02. **No line is made false by this chapter.** Every promise names v4.c02 (or
"Volume 4") as the place of the rule, and the rule this chapter teaches agrees with what each line
already says. No fix is proposed.

### (b) Promises and pointers this chapter redeems — checked, unchanged (still true)

| File | Line (as it stands) | Why it stays true |
|---|---|---|
| volume-1/chapter-03/lesson-03-ta-varga-retroflex.md (§8, l. 234–236; §27, l. 831) | "Volume 4 tells the famous story of *why* so many words contain ण — a rule (called ṇatva) that turns n into ṇ under retroflex influence." · "Volume 4 (ṇatva — the ण-rule previewed in §8)" | v4.c02.l03 teaches 8.4.1–2; Whitney §189b: "the great majority of occurrences of ṇ in the language are a result of it" |
| volume-1/chapter-03/lesson-04-ta-varga-dental.md (§14, l. 418) | मनः "pause form of the noun मनस् (manas), as नमः is of नमस् (namas) — its seam in Volume 3 (v3.c04.l02), its full declension in Volume 4 (v4.c05)" | v4.c02.l01 derives नमः from नमस्; the s-stem declension is c05.l03 |
| volume-2/chapter-04/lesson-03-what-are-you-doing.md (l. 364, 654, 683) and lesson-05-the-verb-exam.md (l. 135, 534) | "the reason waits for Volume 4" (the ष of करोषि, शृणोषि) | v4.c02.l03 gives it (8.3.59), without tying it to कृ (verification-log decision) |
| volume-3/chapter-01/lesson-03-with-what-for-whom.md (§8, l. 190–196; §15, l. 756) | the ṇ of रामेण "an observed spelling; the rule itself is Volume 4's"; the blockers "च-row, ट-row, त-row, and श, स, ल" | consistent with 8.4.2 (those are not interveners it allows) |
| volume-3/chapter-01/lesson-04-whose-and-o.md (l. 101, 596, 642, 1046) | "the rule behind it waits for Volume 4"; नृपः "usable before राजन्'s consonant declension (v4.c05)"; "राजन् itself is a consonant stem (v4.c05)" | c02.l01 meets राजा as a nominative headword and derives two cells; the declension stays c05.l03 |
| volume-3/chapter-01/lesson-05-cases-exam.md (§15, l. 607–624; §22, l. 1121–1124) | 1.4.14 quoted; the sup picture; "*sup* is a pratyāhāra … The pratyāhāra mechanism is v4.c01's; do not teach it now" | c02.l01 expands *sup* (1.1.71), as the line implies |
| volume-3/chapter-02/lesson-01-many.md (l. 196–204, 767, 1056–1063) | the ṇ of रामाणाम्, the ṣ of रामेषु as observed spellings, "○ rule (v4.c02)"; Teacher Notes naming 8.4.1–2, 8.4.37, 8.3.59 | c02.l03 |
| volume-3/chapter-02/lesson-03-fire-and-teacher.md (l. 660–667, 1090–1096) | "The rule behind the columns is named in Chapter 4 and taught in Volume 4"; "kept for v4.c02" | c02.l03; ऋषिणा, हरिणा agree with 8.4.1–2 |
| volume-3/chapter-02/lesson-05-roles-map-exam.md (l. 640–646) | the ṇ cells and blockers; "taught in Volume 4" | c02.l03 |
| volume-3/chapter-03/lesson-01-we-go.md (l. 711, 1147) | "The ष of करोषि is an observed spelling whose reason waits for Volume 4. Do not tie it …" | c02.l03 gives 8.3.59 and keeps the root out |
| volume-3/chapter-04/lesson-04-unjoining.md (l. 678–712, 1023) | "Inside a word — named here, taught in Volume 4 (v4.c02)": the ṇ (with its blockers), the ṣ ("after a vowel other than अ/आ, or after क् or र्"), the guṇa inside गुरवे, भवति = भो + अति | all four taught in c01.l03 (भो + अति) and c02.l02–l03; the ṣ line is Whitney's FACT statement (§180) and stays true beside Pāṇini's इण् (which adds ह य व ल) |
| volume-3/chapter-04/chapter.md (l. 34); lesson-01-when-vowels-meet.md (l. 897); lesson-02 (l. 934); lesson-05-sandhi-exam.md (l. 734, 761) | "named and left for Volume 4" / "○ (… Volume 4)" / "taught v4.c02" | c02 |
| volume-3/chapter-04/lesson-01-when-vowels-meet.md (§4, l. 154–158) | Hindi school grammar's five स्वर-सन्धि names | c02.l02 contrasts it with Pāṇini's definitions (row 0.23 (a)); the line stays true |
| volume-1/chapter-02/lesson-04-e-and-ai.md (l. 425, 780, 855); lesson-05-o-and-au.md (l. 357, 759) | "the full vṛddhi machinery is Volume 4's story" (taddhita vṛddhi: तैल, लौकिक) | c02.l02 defines vṛddhi; the taddhita vṛddhi is c04.l03's — still Volume 4 |

### (c) What `curriculum/volume-4/volume.md` and the plan's §7.6 must say when the chapter ships

- **volume.md, the Chapter 2 row** is already right ("base and affix; aṅga, pada and bha (the rājan
  example); substitute, augment and deletion, with guṇa and vṛddhi as substitutes; words carried
  down and headings, on ṇatva and ṣatva | 537"). When the chapter ships, the "planned figure" note
  for 537 is lifted, and a "Chapter 2 delivered" paragraph is added: four lessons — base, affix and
  marker (3.1.1–2, 1.3.2; the ending-marker line; *sup* as a pratyāhāra) and the three names of the
  base, aṅga, pada and bha (1.4.13, 1.4.17, 1.4.18), with रामः, नमः, राजभिः and राज्ञा derived and the
  1.x rājan card corrected; substitute, augment and deletion (1.1.46, 1.1.60, 6.1.84) with guṇa and
  vṛddhi defined (1.1.1–3), सूर्योदयः and अगच्छत् derived, IR-021 and the rest of the p. 89 card
  corrected; anuvṛtti and adhikāra (6.4.1, 8.3.55, 8.3.57) on ṇatva and ṣatva (8.4.1–2, 8.4.37,
  8.3.59), the bracket line switched on, IR-016 corrected; the Chapter 2 exam (one 45-minute sitting,
  Station 0 outside it). The toolbox after Chapter 2: **43** tools. The ledger: **537** (16
  ledger-new: 521 → 527 → 532 → 537 → 537). The grammarians' line: Kātyāyana and Patañjali, with the
  Mahābhāṣya's statement of grammar's purposes.
- **The plan's §7.6:** the eight rows of the table above, with "From: v4.c02 fact base".

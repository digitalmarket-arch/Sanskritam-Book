# Research notes — Volume 3, Chapter 5 (सर्वनाम-अव्यय-समासाः — Pronouns, Indeclinables, Compounds)

Fact base gathered **before** drafting v3.c05, the fifth chapter of Volume 3. Its binding
contract is the volume plan (`vol3-plan.md`, §4.5 with §1.2, §1.3 (T8, its Δ cards, R6, the
upasarga card), §1.4 = STYLE_GUIDE §3.1, §1.5 episode 5 and the c05 column of the thread-verse
overlay, §3 rules 6–15 and the figures 4 · 8 · 8 · 8 · 0 with the upgrade row शक्तिः, §4.0.1
row 6, §4.0.3, §4.0.4 (six sūtras for c05), §4.0.5, §6, D8, D15, D25, G3, G6, G8, G11, the c05
rows of §7.5 and §7.6). This note copies that contract, re-derives every pronoun cell and every
vigraha against Whitney and the sūtras named, writes out every Sanskrit text the five lessons
use — joined, with its pause form beneath — and fixes the places where the plan is wrong,
silent, or in conflict with shipped lessons (each listed in §7 with its reason). The chapter
opens the pronouns the learner has carried since Volume 1 (मम, तव, मह्यम्, सः, कः) into two
tables and their Δ cards: the personal pronouns with their short forms (l01, a conversation
lesson: the guest and भवान्); the pronominal declension of तद् and its family, with इदम् as its
irregular member (l02); the words that never change — the correlative grid, the particles,
the relative–correlative sentence and the upasarga card (l03); compounds and their विग्रहः in
four kinds (l04); and the chapter exam (l05). From l01 on the learner's own compositions are
written joined, with their pause form.

Sources checked locally (read-only), 2026-11-10: Whitney 1889 by chapter — Chapter V §343
(सखि), §§450, 452–453, 456 (-मत्/-वत्, महत्, भवत्); Chapter VII §§490–491 (with b, c), 494–502,
504, 507–513, 516, 522–525; Chapter XV §1077 (the prefixes); Chapter XVI §§1096–1099, 1101,
1103, 1118, 1121–1122, 1130, 1133; Chapter XVIII §§1246–1247, 1249–1250, 1252–1254, 1263–1264,
1269–1270, 1279, 1293, 1312–1313; the Aṣṭādhyāyī data file (every sūtra number below looked up
there); the Kāśikā (GRETIL `jvkasixu.htm`) on 1.1.27, 1.1.37, 1.4.58, 1.4.59, 2.2.24, 2.2.29,
8.1.22, 8.1.23, 8.1.24; the GRETIL Hitopadeśa (`hitop_u.htm`, lines 300–548 and 660–667) for
every statement about the doves and the mouse; Apte 1890 and Monier-Williams 1899 for every
headword; `ledger-all.tsv` (872 rows: Volumes 1–2, v3.c01–c03) plus the 21 Chapter 4
headwords (chapter frame, `curriculum/volume-3/chapter-04/chapter.md`) for ledger status; the
Chapter 4 fact base (`vol3-ch4-sandhi-in-use.md`: row 0.2 layout, row 0.3 stops, tables
0.A–0.C rules, row 0.24 Station 0, §17 episode 4) and the Chapter 4 lessons on disk
(`lesson-01` … `lesson-04`; **`lesson-05-sandhi-exam.md` is not on disk**, so the two bookings
it makes are quoted from row 0.24 of the Chapter 4 fact base; the l04 booking was diffed
against `lesson-04-unjoining.md` §20: identical). Entering ledger: **460** (v3.c04 exit as
planned, STYLE_GUIDE §8). Exit: **488**. The four teaching lessons will be drafted in parallel
by writers who cannot see each other's files: each lesson section below is complete on its own,
and the Station 0 bookings (row 0.30) are worded once here and used verbatim by the booking and
the running lesson.

---

## 0. Chapter-wide facts and policies

| # | Claim | Register | Source | Notes |
|---|---|---|---|---|
| 0.1 | **Status marks, one wording everywhere** (STYLE_GUIDE §8; plan §0 item 5). Every table in this chapter carries, cell by cell or row by row: **✓ productive** — "you produce it: exercises, quiz and exam may ask for it"; **◐ recognition** — "you read it when you meet it; nothing asks you to produce it, and nothing scores it"; **○ display** — "shown once, with its address; not yours yet". The lessons print exactly these three phrases in the legend under every table (en; hi: ✓ "उत्पादक — आप इसे स्वयं बनाते हैं; अभ्यास, प्रश्नोत्तरी और परीक्षा इसे माँग सकती हैं" · ◐ "पहचान — मिलने पर पढ़ते हैं; कोई इसे बनाने को नहीं कहता, और इस पर अंक नहीं" · ○ "प्रदर्शन — एक बार दिखाया गया, पता सहित; अभी आपका नहीं"). **No objective, exercise, quiz item, homework task, Station 0 key or exam task demands or scores a ◐ cell** (verification log, c03 decisions); a ◐ cell may stand in a reading text with a gloss, and a key may *accept* it where it is also correct. | policy | STYLE_GUIDE §8; plan §0, §1.3, D15; verification-log "Decisions recorded" (c02, c03) | The §15 of each lesson ends with its paradigm ledger in these marks; l05 audits it (§5). |
| 0.2 | **Printing (binding; Chapter 4 row 0.2 (c), (d), (e) taken over unchanged).** Every course-written text — model sentences, the §16 conversation, the §17 serial, exercise texts, quiz items that quote a sentence, exam texts — is printed **joined, with its pause form beneath**: line 1 the joined line, its IAST in parentheses directly after it; line 2 the pause form (पदपाठः), its IAST in parentheses directly after it; line 3 the English gloss and the Hindi. **Paradigm tables, single cited forms, vigrahas laid out as tables, and the word lists stay in pause form.** IAST of a joined line: a space at every word boundary, the avagraha as an apostrophe after a space (*so 'smān*), words written together only where two vowels have fused (*sahāham*, *tatraiva*). **A compound is one word in the pause form** (चित्रग्रीवः, never चित्र ग्रीवः); in the vigraha tables its members are separated by a hyphen in a column of their own (चित्र-ग्रीवः · *citra-grīvaḥ*), never directly before a parenthesis (the validator reads only the run after a hyphen). Learner writing: from l01 on, compositions are written joined with their pause form beneath (plan §1.2, D10); keys accept a correct join with the alternatives Chapter 4 allows (the anusvāra or the class nasal before a stop: किञ्चित् / किंचित्; अहं गच्छामि / अहङ्गच्छामि). | policy | STYLE_GUIDE §3.1; Chapter 4 fact base row 0.2; plan §1.4, D10 | Tried in Chapter 4 on the validator; nothing new is needed. |
| 0.3 | **Joins allowed in this chapter: exactly Chapter 4's rules** (its tables 0.A–0.C), and its stops: no sandhi across a daṇḍa, ?, !, a comma, the dash of a speech frame, or the closing quotation mark before इति; the word before a stop stands in its pause form; हे never joined to a following vowel. **Every seam in §§1–5 was re-derived against those tables (each seam is listed in §6's walk).** Seams Chapter 4 marks ◐ (read, never required) are **avoided** in this chapter's texts, with two printed exceptions, each labelled where it stands: कश्चिन्नृपः (त् before a nasal → न्; l02 model 3, the plan's own sentence; कश्चिद्नृपः is also correct, Whitney §161) and the oblique indefinites of the l02 display (कस्मिंश्चित्, न् + च). The न् + त seam (आगच्छंस्तदा) is **not** taught in Chapter 4, so a relative clause ending in -न् is closed by a comma before its correlative (यदा कपोतास्तत्रागच्छन्, तदा …): the comma is a stop (row 0.3 of Chapter 4). | policy; FACT | Chapter 4 fact base rows 0.3, 0.4–0.12, tables 0.A–0.C; [REF:whitney1889 §161]; [REF:whitney1889 §208] | Re-worded where a seam would need an untaught rule (§7, deviation 6). |
| 0.4 | **T8, first half — अस्मद् and युष्मद्** (table 0.A). The personal pronouns have no gender; they are "made up of fragments coming from various roots" (Whitney §491). The short forms (मा, त्वा; नौ, वाम्; नः, वः; मे, ते) exist only for the accusative, dative and genitive; they are **accentless, and hence never stand at the beginning of a sentence, or where emphasis is laid** (Whitney §491b). **Production (D15):** all singular cells ✓; plural nominative, accusative, instrumental and genitive ✓ (वयम् अस्मान् अस्माभिः अस्माकम्; यूयम् युष्मान् युष्माभिः युष्माकम्); the short forms मे ते नः वः ✓ (never first; not directly with च, वा, एव — row 0.6); the duals ◐ (with नौ, वाम्); plural dative, ablative, locative ◐ (अस्मभ्यम्, अस्मत्, अस्मासु …); the short accusatives मा, त्वा ◐. **The free-facts exception lives here:** dative plural ≠ ablative plural (अस्मभ्यम् vs अस्मत्; युष्मभ्यम् vs युष्मत्), unlike every noun and third-person pronoun (रामेभ्यः, तेभ्यः). | FACT | [REF:whitney1889 §491]; [REF:whitney1889 §494] | Every cell re-derived against Whitney §491a (the "later language" table); the plan's table (§4.5, c05.l01) matches cell for cell, including the dual short forms नौ / वाम् for acc., dat. and gen. only (Whitney: "and A. D. G. नौ … वाम्"). |
| 0.5 | **Sūtra quoted to the learner in l01 (one; TRADITION; plan §4.0.4): 8.1.22 तेमयावेकवचनस्य** (*temayāv ekavacanasya*) — learner wording, fixed: "In the singular, ते and मे stand for the 'to you / of you' and 'to me / of me' of त्वम् and अहम्." The Kāśikā glosses it: for युष्मद् and अस्मद् in the singular, standing in the genitive or dative, ते and मे are the substitutes, with the examples *grāmas te svam* "the village is yours", *grāmo me dīyate* "a village is given to me". This is the **नमस्ते thread, step 3**: the learner writes the three-line proof — (1) नमः takes the dative (2.3.16, quoted in v3.c01.l03); (2) ते is the short dative of त्वम्, = तुभ्यम् (8.1.22); (3) ः before त becomes स् (8.3.34, quoted in v3.c04.l02) — so नमः + ते → नमस्ते. | TRADITION; FACT (the proof) | [REF:ashtadhyayi 8.1.22]; [REF:kashika 8.1.22]; [REF:ashtadhyayi 2.3.16]; [REF:ashtadhyayi 8.3.34] | Data file: 81022 तेमयावेकवचनस्य ✓. Kāśikā (`jvkasixu.htm` l. 77016 ff.) read: *yuṣmadasmadoḥ ekavacanāntayoḥ ṣaṣṭhīcaturthīsthayoḥ yathāsaṅkhyaṃ te me ity etau ādeśau bhavataḥ*. **Teacher Notes only:** 8.1.20 युष्मदस्मदोः षष्ठीचतुर्थीद्वितीयास्थयोर्वान्नावौ (वाम्, नौ), 8.1.21 बहुवचनस्य वस्नसौ (वः, नः), 8.1.23 त्वामौ द्वितीयायाः (त्वा, मा), 8.1.18 अनुदात्तं सर्वमपादादौ, 8.1.24 न चवाहाहैवयुक्ते — all ✓ in the data file. |
| 0.6 | **Where a short form may not stand** (learner text, l01 §8 and §12; FACT, with the tradition's extra rules named once): (a) never first in a sentence, and never where the word carries emphasis (Whitney §491b): *मे फलं रोचते is wrong, फलं मे रोचते is right; for "to ME (not to him)" the full form मह्यम् stands; (b) the grammarians add that they do not open a verse-quarter (8.1.18, Teacher Notes) and are not used when च, वा, ह, अह or एव is attached to the pronoun itself (8.1.24, Teacher Notes; the Kāśikā: *grāmas tava ca svam*, not *te ca*). (b) is never tested; (a) is ✓. The Hitopadeśa's *dantāś ca me komalāḥ* (the च belongs to दन्ताः, not to the pronoun) is correct and is printed in l01 §13. | FACT; TRADITION | [REF:whitney1889 §491]; [REF:ashtadhyayi 8.1.18]; [REF:ashtadhyayi 8.1.24]; [REF:kashika 8.1.24]; [REF:hitopadesha mitralābha] (prose after verse 41) | **Correction to the plan** (its own review c05#2 confirmed it): the verse-quarter rule is 8.1.18's, not Whitney §491b's. Locus of *dantāś ca me komalāḥ*: `hitop_u.htm` l. 492. |
| 0.7 | **भवत् m. "Your Honour" and भवती f.** (table 0.B). A stem in -वत्, declined like the -मत्/-वत् adjectives (Whitney §§452–453), "frequently used in respectful address as substitute for the pronoun of the second person (but construed, of course, with a verb in the third person)" (Whitney §456). **Listed cells ✓:** भवान् · भवन्तम् · भवता · भवते · भवतः (abl. = gen.) · भवति (loc.!) · voc. भवन्; du. भवन्तौ (nom./acc.); pl. भवन्तः (nom.) · भवद्भिः · भवताम् · भवत्सु. **◐:** acc. pl. भवतः (same spelling as the abl./gen. sg.), dat./abl. pl. भवद्भ्यः, the oblique duals भवद्भ्याम्, भवतोः. **भवती** is declined like नदी (the ī-stem Δ of c02.l02, ✓ there): ✓ भवती, भवतीम्, भवत्या, भवत्यै, भवत्याः, pl. भवत्यः; its vocative भवति ◐ (three words share the spelling भवति: "is", "in Your Honour", "O lady!" — the §12 warning). Plural भवन्तः "Your Honours" redeems v3.c03.l04's preview. **Whitney's account of the origin** (Teacher Notes only, hedged): "Its origin has been variously explained; but it is doubtless a contraction of *bhágavant*"; and the owned भोः is "the contracted form *bhos* of its old-style vocative *bhavas*" (§456). | FACT; HISTORY (Whitney's view, Teacher Notes) | [REF:whitney1889 §452]; [REF:whitney1889 §453]; [REF:whitney1889 §456]; [REF:whitney1889 §364] | §452: the -मत्/-वत् stems differ from -अन्त् participles "only by lengthening अ in the nom. sing. masc."; the voc. in -अन्; the feminine from the weak stem (-वती). Strong cells (भवन्तम्, भवन्तौ, भवन्तः) vs weak (भवता, भवद्भिः …) re-derived from §453's भगवन्त् table. |
| 0.8 | **R6 — the -वत् / -मत् / -अत् nominatives (recognition card; no production target).** The nominative singular masculine of these stems ends in -वान् / -मान् (long आ), the vocative in -वन् / -मन्, the feminine in -वती / -मती, the neuter in -वत् / -मत्. Card words: भवान् (✓ by its own listed cells, row 0.7), श्रीमान् (owned v1.c05.l01; voc. श्रीमन्, owned v2.c01.l04), धीमान् (c04.l03 headword), पुण्यवान् ("meritorious"; display, the mouse's *puṇyavān asmi*, Hit, read in c06.l02), भगवन् (voc. of भगवान्, display, owned v2.c01.l04 as a calling shape); and महान् "great", an -अत् stem that lengthens its अ in the strong cells (महान्, महान्तम्; Whitney §450b) — display, c06.l03. The card redeems v2.c01.l04's "the calling shapes श्रीमन्, भगवन् … with the case machinery in Volume 3". Other cells: v4.c05. | FACT | [REF:whitney1889 §450]; [REF:whitney1889 §452]; [REF:whitney1889 §453] | Plan §1.3 R6, §4.0.3 last row, §6. पुण्यवान्: `hitop_u.htm` l. 474. |
| 0.9 | **सखा "friend"** (Whitney §343a), an irregular i-stem, learned as whole words: sg. सखा · सखायम् · सख्या · सख्ये · सख्युः (abl. = gen.) · सख्यौ (loc.) · voc. सखे; du. सखायौ · सखिभ्याम् · सख्योः; pl. सखायः · सखीन् · सखिभिः · सखिभ्यः · सखीनाम् · सखिषु. **Production:** सखा and सखे ✓; every other cell ◐. In compounds सख्- is often replaced by सख- (5.4.91; Whitney §343b "unless (1315 b) *sakha* be substituted"): display at most, v4.c04. The feminine सखी is declined like देवी (§343c): not taught. The Hitopadeśa's Citragrīva calls the mouse *sakhe* (l. 472, 479, 481). | FACT | [REF:whitney1889 §343]; [REF:apte1890 s.v. सखि]; [REF:monierwilliams1899 s.v. sakhi] | Whitney: "for the five strong cases a peculiarly strengthened base (vriddhied), namely *sákhāy* … the abl.-gen. sing. adds *us*; and the loc. sing. adds *āu*: the rest is like *agní*". The dual and plural cells beyond Whitney's printed ones follow "the rest is like *agní*": सखिभ्याम्, सखिभिः, सखिभ्यः, सखीनाम्, सखिषु (as अग्निभ्याम् …). |
| 0.10 | **T8, second half — तद् in three genders** (table 0.C; all cells ✓). "The simplest demonstrative … may be taken as model of … the general pronominal declension" (Whitney §495). Its marks against रामः / बालिका (Whitney §496): neuter nom./acc. sg. in -त् (तत्); -स्मै -स्मात् -स्मिन् in m./n. dat., abl., loc. sg.; -स्यै -स्याः -स्याम् in the f.; m. nom. pl. ते (not *ताः); gen. pl. -षाम् / -साम् (तेषाम्, तासाम्), not -नाम्. **The 1.x error corrected in the open (IR-025):** not "स् → त् in the oblique cases": the स- forms are only सः and सा; every other cell is from त- — two stems in one paradigm (Whitney §495a: "in the nom. sing. masc. and fem. it has *sás* … and *sā*, instead of *tás* and *tā́*"). The सः seam (स before a consonant) is c04.l02's (6.1.132, Whitney §176a). | FACT | [REF:whitney1889 §495]; [REF:whitney1889 §496]; [REF:whitney1889 §176] | Table re-derived cell by cell against §495's printed paradigm: identical to the plan's (§4.5 c05.l02). |
| 0.11 | **The Δ cards on तद् (l02).** (a) **एतद्** "this (here)" = ए- + the तद् cells, nom. एषः एषा एतत् (owned v2.c02.l02, v1.c06.l02) — "It prefixes *e* to the simple root … and so on through the whole inflection" (Whitney §499b); the ṣ of एषः, एतेषाम्, एतेषु is the s → ṣ law (named c04.l04). All cells ✓. The short एनम्, एनेन … (Whitney §500): Teacher Notes only. (b) **यद्** "who, which" (relative): "inflected with entire regularity according to the usual pronominal declension" (Whitney §509): यः या यत्; यम् याम् यत् … All cells ✓ in l02 **as table cells**; in sentences from l03 (G6). (c) **किम्** "who? what?": the whole declension from क- except n. nom./acc. sg. किम् (Whitney §504) — the m./n. cells owned from v3.c01; **f. का काम् कया कस्यै कस्याः कस्याम्; pl. काः काभिः काभ्यः कासाम् कासु** (◐ in c02.l02, now ✓). (d) **सर्व** "all": pronominal except n. nom./acc. sg. सर्वम् (Whitney §524) — m. pl. **सर्वे** (not *सर्वाः, which is the feminine plural), सर्वस्मै, सर्वस्मात्, सर्वस्मिन्, सर्वेषाम्; n. pl. सर्वाणि; f. सर्वा … सर्वस्यै, सर्वासाम्. (e) **अन्य** "other": "declined like *ta* throughout" (Whitney §523), so n. **अन्यत्** (7.1.25, Teacher Notes). (f) **एक** "one": like सर्व (Whitney §524): एकस्मै, एकस्मात्, एकस्मिन्; f. एकस्यै, एकस्याः, एकस्याम्; n. एकम्. Singular only in this course (its plural एके "some" ○, v4). **पर** "other, another; further" (D25) is taught as a plain a-adjective परः परा परम्; Apte: "Declined optionally like a pronoun"; Whitney §525c lists *pára* among words that take pronominal forms "usually, or in some of their significations, or optionally"; 1.1.34 (Teacher Notes). **स्व** "own" (l02 headword) likewise: plain a-adjective स्वः स्वा स्वम् in drills, its optional pronominal forms (1.1.35 स्वमज्ञातिधनाख्यायाम्; Whitney §525c) Teacher Notes only. | FACT; TRADITION (1.1.34–35, 7.1.25, Teacher Notes) | [REF:whitney1889 §499]; [REF:whitney1889 §500]; [REF:whitney1889 §504]; [REF:whitney1889 §509]; [REF:whitney1889 §523]; [REF:whitney1889 §524]; [REF:whitney1889 §525]; [REF:apte1890 s.v. पर]; [REF:ashtadhyayi 7.1.25]; [REF:ashtadhyayi 1.1.34]; [REF:ashtadhyayi 1.1.35] | §509's table is not printed in the e-text extract (blank lines), but its sentence "with entire regularity according to the usual pronominal declension" carries the claim. सर्वेण: र … व … ए … न, no blocker → ण (c04.l04's named law). Data file: 71025 अद्ड् डतरादिभ्यः पञ्चभ्यः, 11034, 11035 ✓. |
| 0.12 | **इदम् "this"** (Whitney §501; table 0.D). "So irregularly made up that [it has] to be given in full" — "pieced together from a number of defective stems" (§502a): अय-/इय-/इद-, इम-, अन-, अ- (with -स्मै -स्य -स्मिन्), ए-/आ- (plural obliques). **Key cells ✓:** the nominatives and accusatives in all three numbers and genders (अयम् इयम् इदम्; इमम् इमाम् इदम्; इमौ इमे; इमे इमाः इमानि; इमान् इमाः इमानि), and अनेन, अस्य, अस्याः, अस्मिन्. **Every other cell ◐** (plan c05#3: the plan's §1.3 marked the key cells ◐ by mistake; c05.l02 and §2.2 make them ✓ — this note follows c05.l02). | FACT | [REF:whitney1889 §501]; [REF:whitney1889 §502] | Every cell re-derived against §501a's table: identical to the plan's. The neuter shares the m. obliques (अनेन, अस्मै …). अदस् "yon" (असौ, §501) is **not taught** in Volume 3 (Teacher Notes, one line; open item 3). |
| 0.13 | **Sūtra quoted to the learner in l02 (one; TRADITION): 1.1.27 सर्वादीनि सर्वनामानि** (*sarvādīni sarvanāmāni*) — learner wording: "The words of the list that begins with सर्व are called सर्वनाम ('pronoun')." The Kāśikā's examples are exactly the forms the lesson drills: *sarvaḥ, sarvau, sarve; sarvasmai; sarvasmāt; sarveṣām*. The term सर्वनाम is a class named after its first member — "the all-word class" — which is why सर्व declines like सः. | TRADITION | [REF:ashtadhyayi 1.1.27]; [REF:kashika 1.1.27] | Data file 11027 ✓; Kāśikā `jvkasixu.htm` l. 874 ff. The Kāśikā's notes on 1.1.28–1.1.31 (no pronominal endings in a dvandva or bahuvrīhi of these words) are not printed (v4.c04). No count of the gaṇa is printed (the gaṇa's length varies by source). |
| 0.14 | **The indefinites (l02).** कः / का / किम् + चित् or अपि → "some-, any-": कश्चित् (कः + चित्, ः + च → श्च, c04.l02), काचित्, किञ्चित् (or किंचित्; म् before च, c04.l03); कोऽपि (c04.l02), कापि (**the feminine का + अपि**, not कः + अपि), किमपि; with न: "no one, nothing" (न कोऽपि, v2.c06.l02). Whitney §507: the interrogative "is by various added particles converted to an indefinite meaning: thus, by *ca, caná, cid, ápi*", with *ná kó 'pi* "not any one". **✓:** the nominatives (कश्चित्, काचित्, किञ्चित्; कोऽपि, कापि, किमपि) and the headwords कश्चित्, कदाचित्. **◐ display:** केनचित्, कस्मिंश्चित्, कस्याश्चित् (the seams are c04's; न् + च is ◐ there). -चन forms (कश्चन): Teacher Notes only. **Ledger (rule 15):** only कश्चित् and कदाचित् count. | FACT | [REF:whitney1889 §507]; [REF:whitney1889 §1103] | Plan c05#7 (कापि ← का) confirmed and applied. कदाचित्: Whitney §1103b cites *kadācid divase* (R.) "on a certain day". |
| 0.15 | **The correlative grid (l03; Whitney §§1097–1103).** Adverbs made "by the addition of adverb-making suffixes especially to pronominal roots or stems" (§1097): -तः ablative sense (§1098: अतः, इतः, ततः, यतः, कुतः), -त्र locative sense (§1099: अत्र, तत्र, यत्र, कुत्र, सर्वत्र, अन्यत्र), -था manner (§1101: तथा, यथा, कथम्, इत्थम्; अथ "doubtless belongs with them"), -दा time (§1103: तदा, यदा, कदा, सदा, सर्वदा, एकदा; इदानीम् with -दानीम्). Table 0.E; ✓ every cell (most owned). Rows with चित्/अपि: कुत्रचित्, कुत्रापि, कुतश्चित्, कदाचित्, कदापि, कथञ्चित्/कथंचित् ✓ as built forms (only कदाचित् counts). | FACT | [REF:whitney1889 §1097]; [REF:whitney1889 §1098]; [REF:whitney1889 §1099]; [REF:whitney1889 §1101]; [REF:whitney1889 §1103] | **Locator correction** to v3.c01's "§1098 the -तः adverbs" (fine) and the plan's grid (no locator): the four rows are §1098, §1099, §1101, §1103. क्व (the l03 headword) is listed by Whitney among the derivatives of कु- (§505: *kútas, kútra, kúha, kvà*). |
| 0.16 | **The relative–correlative sentence (l03; G6).** The relative clause (यः …, यत्र …, यदा …, यथा …) comes first and its correlative (सः, तत्र, तदा, तथा) after: Whitney §512a — "a very decided preference for putting the relative clause before that to which it relates … The other arrangement, though frequent enough, is notably less usual"; among his examples one from the Hitopadeśa (*sarvasya locanaṃ śāstraṃ yasya nāsty andha eva saḥ*). The relative and its correlative agree in gender and number with the noun they point to; each takes **its own case** from its own clause (यं पश्यसि स मम सखा "the one you see is my friend": यम् acc. in its clause, सः nom. in the main one). **Production ✓:** यः/या/यत् … सः/सा/तत् in any case of the ✓ table; यत्र … तत्र; यदा … तदा; यथा … तथा. यावत् … तावत्: v4.c04 (§6). | FACT | [REF:whitney1889 §512]; [REF:whitney1889 §1132] | §1132: "The relative derivative adverbs … may properly be regarded as conjunctions". |
| 0.17 | **Particles (l03; Whitney §§1122, 1133).** च "and" and वा "or": "toneless, and never having the first place in a sentence or clause" (§1133); हि "for, indeed" (Apte: "Never used at the beginning of a sentence"; Whitney §1133c: "Of illative value is *hí* for"); तु "but" (§1133b; never first: c04.l02's headword); एव "only, just, indeed" (asseverative, §1122a); इव "like, as if" (§1122); न, मा (§1122c: "*ná*, signifying simple negation; *mā́*, signifying prohibition"); अपि "also, even" (Whitney §1077a: "of very limited use as prefix in the later language, having become a conjunction"); इति "thus" (closing quotation). **Learner rule (✓):** च, वा, हि, तु never stand first; they follow the first word of their clause or the word they join. | FACT | [REF:whitney1889 §1122]; [REF:whitney1889 §1133]; [REF:whitney1889 §1077]; [REF:apte1890 s.v. हि] | All owned but हि (l03 headword). |
| 0.18 | **Words placed with the genitive (l03): उपरि (owned), समीपे (c01.l04), अधः (new)** — "with *upari* above (common later)", "with … *adhas*" (Whitney §1130). तरोः अधः "under the tree", वृक्षस्य उपरि, गृहस्य समीपे. ✓. अधः ends in -अः: joined like any -अः word (अधोऽपृच्छत्, अधः शशकः). | FACT | [REF:whitney1889 §1130]; [REF:apte1890 s.v. अधस्] | Apte s.v. अधस्, अधः ind.; MW *adhas*. |
| 0.19 | **Sūtras quoted to the learner in l03 (two; TRADITION):** **1.1.37 स्वरादिनिपातमव्ययम्** (*svarādinipātam avyayam*) — learner wording: "The words of the list that begins with स्वर्, and the particles (निपाताः), are called अव्यय — 'unchanging'." (The Kāśikā's list includes prātar, uccais, śanais, hyas, śvas, bahis, adhas, svayam — six of them owned.) **1.4.59 उपसर्गाः क्रियायोगे** (*upasargāḥ kriyāyoge*) — "When they are joined to a verb, प्र and the rest are called उपसर्ग." (1.4.58 प्रादयः, which defines "प्र and the rest" as nipātas, and gives the list, is Teacher Notes.) | TRADITION | [REF:ashtadhyayi 1.1.37]; [REF:kashika 1.1.37]; [REF:ashtadhyayi 1.4.59]; [REF:kashika 1.4.59]; [REF:ashtadhyayi 1.4.58] | Data file 11037, 14059, 14058 ✓. Kāśikā l. 1123 ff., 6584 ff., 6621 ff. 1.4.57 चादयोऽसत्त्वे (the particles च … as nipātas) and 1.4.60 गतिश्च: Teacher Notes. |
| 0.20 | **The upasarga card (reference; IR-025; no production target).** The tradition's list (1.4.58 प्रादयः, as the Kāśikā gives it) has **22** members: प्र परा अप सम् अनु अव निस् निर् दुस् दुर् वि आ(ङ्) नि अधि अपि अति सु उत् अभि प्रति परि उप — निस्/निर् and दुस्/दुर् are counted as two each. The 1.x book printed अति and उप twice, left out नि and अपि, and still said "22" (IR-025). Whitney's list of the prefixes "which have value as such throughout the whole history of the language" (§1077) has 19 (with अन्तर्, without सु and दुस्, which he treats as inseparable prefixes, §1121) — the card says "22 in the tradition's list; Western grammars count differently" and prints both. Owned prefixed words (one per line on the card): आगच्छति (आ), अवगच्छति (अव), निर्गच्छति (निर्), प्रविशति, प्रयच्छति (प्र), उपविशति (उप), निवसति (नि), संस्कृतम् (सम्), परिवारः (परि), अनुगृहीतः (अनु, v2.c01.l04 chunk), सुप्रभातम् (सु), उपकारः (in परोपकारः). Display: उत्तिष्ठति, प्रतिवसति (c06.l03), सम्भाषते (c06.l02). The meanings are Whitney §1077's "leading ones", with his caution: "In combinations of root and prefix they undergo much modification". | TRADITION (the list); FACT (the meanings) | [REF:ashtadhyayi 1.4.58]; [REF:kashika 1.4.58]; [REF:whitney1889 §1077]; [REF:whitney1889 §1121] | Kāśikā e-text (l. 6587 ff.) has two typos, corrected here and in Teacher Notes: *rus* for दुस्, *up* for उप (and *ut abhi* run together). No other count is printed. |
| 0.21 | **Compounds (l04).** "The frequent combination of declinable stems with one another to form compounds which then are treated as if simple, in respect to accent, inflection, and construction, is a conspicuous feature of the language" (Whitney §1246). **Four rules (learner text):** (1) every member but the last stands **in stem form** (मातृभाषा, not *माताभाषा — v1.c02.l03's promise; a stem with strong and weak forms enters in its weak form, Whitney §1249b–c); (2) **only the last member is inflected**; (3) **sandhi applies at the inner seam** as between words (Whitney §1249a: "according to the general rules for external combination") — पर-उपकारः → परोपकारः (c04.l01), मनस्-रथः → मनोरथः (c04.l02); (4) the compound is understood through its **विग्रहः**, the phrase with case endings it compresses. **The four kinds** (table 0.F): द्वन्द्वः, तत्पुरुषः (with its subtypes named: the case-tatpuruṣa, कर्मधारयः, द्विगुः; उपपद as a note), बहुव्रीहिः, अव्ययीभावः. **Production ✓:** the vigraha of dvandva, case-tatpuruṣa, karmadhāraya and bahuvrīhi, and coining transparent compounds of those kinds from owned words; **◐:** dvigu, upapada, avyayībhāva (recognised and named; never required). The names are examples of themselves: तत्पुरुषः "his man" (Whitney §1263a), बहुव्रीहिः "(having) much rice" (§1293c), द्विगुः "(worth) two cows" (§1312a), अव्ययीभावः "conversion to an indeclinable" (§1313a); कर्मधारयः is "of obscure application" (§1263a) — the lesson says so and gives no etymology. | FACT; TRADITION (the names) | [REF:whitney1889 §1246]; [REF:whitney1889 §1247]; [REF:whitney1889 §1249]; [REF:whitney1889 §1263]; [REF:whitney1889 §1293]; [REF:whitney1889 §1312]; [REF:whitney1889 §1313] | Whitney's own classes (copulative, determinative = dependent + descriptive, possessive, §1247) are printed beside the tradition's names in l04 §5. |
| 0.22 | **Sūtras quoted to the learner in l04 (two; TRADITION):** **2.2.29 चार्थे द्वन्द्वः** (*cārthe dvandvaḥ*) — "Words in the sense of 'and' (च) make a द्वन्द्व." **2.2.24 अनेकमन्यपदार्थे** (*anekam anyapadārthe*) — "Two or more words that point to something else make a बहुव्रीहि" (2.2.23 शेषो बहुव्रीहिः supplies the name; Teacher Notes). The Kāśikā on 2.2.24: *prāptam udakaṃ yaṃ grāmaṃ prāptodako grāmaḥ* "a village that water has reached". **Teacher Notes only:** 2.1.22 तत्पुरुषः; 2.2.8 षष्ठी; 2.1.57 विशेषणं विशेष्येण बहुलम् (karmadhāraya); 2.1.52 संख्यापूर्वो द्विगुः; 2.1.6 अव्ययं विभक्तिसमीप… and 2.1.7 यथासादृश्ये (avyayībhāva, यथाशक्ति); 2.2.19 उपपदमतिङ् (upapada); 2.2.18 कुगतिप्रादयः (prādi); 2.2.6 नञ् (अ-हिंसा); 6.3.25 आनङ् ऋतो द्वन्द्वे (माता-पितरौ); 5.4.91 राजाहस्सखिभ्यष्टच् (-राज, -सख at a compound's end: v4.c04). | TRADITION | [REF:ashtadhyayi 2.2.29]; [REF:kashika 2.2.29]; [REF:ashtadhyayi 2.2.24]; [REF:kashika 2.2.24] | All numbers ✓ in the data file (22029, 22024, 22023, 21022, 22008, 21057, 21052, 21006, 21007, 22019, 22018, 22006, 63025, 54091). |
| 0.23 | **Deferred, with addresses (each said once, where met):** compound accent and the इन्द्रशत्रु contrast (IR-026; tatpuruṣa "slayer of Indra" vs bahuvrīhi "whose slayer is Indra") → **v4.c04** (plan §6, G8; the IMPROVEMENT_REPORT's "v4.c02" is superseded); prādi, gati and upapada as kinds of their own, samāsānta (5.4.91), the finer tatpuruṣa subtypes (नञ्, एकदेशि …) → v4.c04; roots (v4.c03) and suffixes (v4.c04) — "of v2.c06.l04's four word-building parts, the prefix (l03) and the compound (l04) are now taught"; यावत् … तावत्, the -वत्/-मात्र adverbs, gati prefixes → v4.c04; the s-stem declension (मनसः in मनोरथः's vigraha is display) and the consonant stems beyond R6 → v4.c05; the absolutive (R5) → c06.l01; X नाम Y and the present + स्म → c06.l03; अदस् → not in Volume 3 (open item 3). | policy | plan §4.5, §6, §4.0.3; IMPROVEMENT_REPORT IR-026 | — |
| 0.24 | **Policy: what is allowed in Chapter 5's taught text, lesson by lesson** (everything Chapter 4 row 0.18 allowed — the present P and Ā, imperfect, imperative, optative 3rd person, T1–T5 ✓ cells, the dual card, R1–R4 labelled, every seam of tables 0.A–0.C — plus): **l01** — the ✓ cells of अस्मद्/युष्मद् (row 0.4) and of भवत्/भवती (0.7); सखा, सखे; स्वयम्; R6 nominatives as labelled recognition; learner compositions joined. **l02** — + तद् all cells; the Δ cards एतद्, किम् (f. included), सर्व, अन्य, एक (sg.) ✓; यद् ✓ in table drills only (no relative sentence yet); इदम् key cells ✓; the indefinite nominatives (0.14); पर, स्व, निज as a-adjectives. **l03** — + the relative–correlative sentence (0.16); the grid (0.15); particles (0.17) incl. हि; अधः + gen.; the upasarga card read. **l04** — + compounds as a system: dvandva, case-tatpuruṣa, karmadhāraya, bahuvrīhi ✓ (coined and resolved); dvigu, upapada, avyayībhāva ◐ (read, named). **l05** — no new forms. **Not allowed anywhere in Chapter 5:** any ◐ cell as a required output; अदस्; the absolutive (R5, c06.l01); the present + स्म (c06.l03); X नाम Y as a built formula (c06.l03; the owned frame मम नाम … / तस्य नाम … stays usable, v1.c06.l02); the future (Hit's *chetsyati* is not printed); participles beyond the owned predicate adjectives (बद्धः, मुक्तः …) and R2; यावत् … तावत्; -तर/-तम; compounds whose vigraha needs a member that is not owned, unless the member is glossed as display (उपकारः, मनसः, ख); -राज/-सख at a compound's end (5.4.91). **Before the lesson that teaches it:** no pronoun cell, Δ cell, grid word, particle, relative sentence or compound analysis stands in l01–l04 texts unless it is owned (Volumes 1–2, v3.c01–c04) or carries one honest label. | policy | plan §1.2, §4.5; Chapter 4 row 0.18 | Walk check done for every text in §§1–5 (§6 re-runs it). Owned whole compounds (विद्यालयः, हिमालयः, परोपकारः, सुप्रभातम्, शुभरात्रिः, मध्याह्नः, रविवासरः, सप्ताहः, दूरदर्शनम्, वर्णमाला, महाभारतम्, गोपाल, जलज, खग, मनोरथैः in the verse) stay usable everywhere in the form owned; their analysis is l04's. The names चित्रग्रीवः and हिरण्यकः are gloss-line items in l01–l03 (rule 12) and चित्रग्रीवः is resolved in l04. |
| 0.25 | **Hindi parallels (taught as exact contrasts; each lesson uses only its own rows; table 0.H).** | FACT (Hindi); TRADITION (Hindi school grammar) | [REF:kachru2006] (cited bare); [REF:guru1952] (cited bare) | Each row is a contrast the learner can check in their own Hindi; none claims that Hindi "comes from" a Sanskrit form. |
| 0.26 | **Ledger (STYLE_GUIDE §8 rules 1–15; plan §3):** 460 → 464 (l01: 4) → 472 (l02: 8) → 480 (l03: 8) → 488 (l04: 8) → 488 (l05: 0). 28 ledger-new, each grep-checked against the 872-row `ledger-all.tsv` and the 21 Chapter 4 headwords: none present (exact-form check). **Upgrade row:** शक्तिः (l04; v1.c05.l02 शक्ति → शक्तिः in अल्पशक्तिः's vigraha), drilled, not counted. Cells of owned lemmas never count (rule 7): every pronoun cell, भवती and भवन्तः (cells of भवान्), काचित्/किञ्चित्/कोऽपि (rule 15). Proper names (चित्रग्रीवः, हिरण्यकः) are gloss-line items (rule 12). Compounds: only नीलकण्ठः and पादपः count (lexicalised, rule 10); every other compound in the chapter is transparent and built from owned members. **Grammar terms are GLOSSARY items, not ledger words** (§7 item 6). | policy | STYLE_GUIDE §8; plan §3 | `vocabulary_count`: l01 4, l02 8, l03 8, l04 9 (8 + the upgrade), l05 0. |
| 0.27 | **Pedagogy anchors** (the error sweep's binding decisions): retrieval before re-reading [REF:roediger2006] (only: retrieval practice beats re-reading for long-term retention); spaced review across days [REF:cepeda2006]; chunks first, analysed later [REF:nation2013] (only: teaching formulaic chunks whole and analysing them later — this chapter is that "later" for मम, तव, मह्यम्, नमस्ते, कश्चित्, विद्यालयः). No "strongest" or "fastest" claims. | policy | verification-log "Decisions recorded" (2026-11-10) | — |
| 0.28 | **No frequency or scale words without a count and a source.** The chapter says no form is "common", "frequent" or "usual" in its own voice. Where a preference is stated, it is Whitney's own words, quoted and cited: the relative clause first, "a very decided preference … The other arrangement, though frequent enough, is notably less usual" (§512a); the prefixes' frequency order "as estimated by the number of roots with which they are found used in RV. and AV." (§1077a) — **not printed** (it concerns the Veda). The plan's "the prefix in अवगच्छति is one of 22" is a count from the cited list, not a scale claim. | policy | STYLE_GUIDE §7; plan §7.6 | — |
| 0.29 | **§9–§11: connected speech** (every lesson). Continuing Chapter 4's rule — a seam is spoken without a pause; a space in joined print is a word boundary, not a breath — this chapter adds one fact: **the short forms are unaccented and lean on the word before them** (Whitney §491b "accentless"): फलं मे रोचते is said as two stress groups, *phalaṃ-me rocate*; नमस्ते is one word. No accent marks are printed (Vedic accent v5.c03); the lessons speak only of "leaning", not of pitch. §10 IPA: the headwords of each lesson (row in each §), anusvāra by STYLE_GUIDE §2 (homorganic nasal before a stop; nasalized vowel before sibilants and ह). | FACT; policy | [REF:whitney1889 §491]; STYLE_GUIDE §2 | — |
| 0.30 | **Station 0 bookings — canonical wording** (each printed verbatim in the booking lesson's §20 and in the running lesson's §3, **without** the S0 labels, as "- +1 day: …"). **Arriving from Chapter 4** (quoted from the Chapter 4 fact base row 0.24; S0-am also diffed against `curriculum/volume-3/chapter-04/lesson-04-unjoining.md` §20, 2026-11-10: identical; `lesson-05-sandhi-exam.md` is not on disk — **Pass C diffs S0-an and S0-ao against it when it is**): **S0-am** (v3.c04.l04 §20, run by l01): "+1 week: one serial episode split — the thirteen joined lines of the whole tale so far (v3.c04.l04 §17) read aloud joined, then three lines of your choice written in pause form, each seam named with the lesson that taught it; v3.c05.l01's Station 0 runs exactly this." **S0-an** (v3.c04.l05 §20, run by l01): "+1 day: five joins, five splits — join सः अपि, नमः ते, गुरुः अत्र, तत् च and जलम् अस्ति; split तस्मिन्नेव, सदैव, पुनर्मिलामः, कोऽपि and सत्यं वद; each with its rule's name; v3.c05.l01's Station 0 runs exactly this." **S0-ao** (v3.c04.l05 §20, run by l02): "+1 week: the crow story at speed — the Volume 2 crow story read aloud joined, as task C of the sandhi exam printed it, once slowly and once at natural pace, the second reading timed and under one minute; v3.c05.l02's Station 0 runs exactly this." **Booked in Chapter 5:** **S0-ap** (l01 → l02): "+1 day: the I-and-you cells — अहम् and त्वम् said and written down the seven cases of the singular, then the plural nominative, accusative, instrumental and genitive (वयम् अस्मान् अस्माभिः अस्माकम्; यूयम् युष्मान् युष्माभिः युष्माकम्), then मे, ते, नः and वः each in a short sentence of your own where it does not stand first; v3.c05.l02's Station 0 runs exactly this." **S0-aq** (l01 → l03): "+1 week: the नमस्ते proof from memory — नमः + ते → नमस्ते written as three lines (नमः takes the dative, 2.3.16; ते is the short form of तुभ्यम्, 8.1.22; ः before त becomes स्, 8.3.34), then the same three lines for नमो वः; v3.c05.l03's Station 0 runs exactly this." **S0-ar** (l02 → l03): "+1 day: तद् in three genders, singular — सः, सा and तत् said and written down the seven cases, then एषः, एषा and एतत् in the nominative and the accusative; v3.c05.l03's Station 0 runs exactly this." **S0-as** (l02 → l04): "+1 week: the यद्, किम् and सर्व cells — यः, या, यत् and कः, का, किम् down the seven cases of the singular, then सर्वः, सर्वा, सर्वम् in the nominative singular and plural, and सर्वस्मै, सर्वस्मिन्, सर्वेषाम्; v3.c05.l04's Station 0 runs exactly this." **S0-at** (l03 → l04): "+1 day: the grid from memory — the rows place, from where, time and manner across the columns क-, इ-/अ-, त-, य- and सर्व-, written as a table, then two words of it used in a sentence each; v3.c05.l04's Station 0 runs exactly this." **S0-au** (l03 → l05): "+1 week: relative pairs — six sentences of your own about the doves and the mouse, one each with यः … सः, या … सा, यत् … तत्, यत्र … तत्र, यदा … तदा and यथा … तथा, written joined with the pause form beneath; v3.c05.l05's Station 0 runs exactly this." **S0-av** (l04 → l05): "+1 day: ten vigrahas — परोपकारः, हिमालयः, समुद्रतीरम्, सभामध्ये, अमृततुल्यम्, सिंहमूषकौ, गुरुशिष्यौ, चित्रवनम्, पाशबद्धाः and जलपात्रम्, each resolved into its phrase with the case of every member named; v3.c05.l05's Station 0 runs exactly this." **S0-aw** (l04 → v3.c06.l01): "+1 week: name the kind — वर्णमाला, शुभरात्रिः, नीलकमलम्, मातापितरौ, सिंहमूषकौ, नीलकण्ठः, अल्पशक्तिः, चित्रग्रीवः, परोपकारः and रविवासरः, each named द्वन्द्वः, तत्पुरुषः, कर्मधारयः or बहुव्रीहिः, with its vigraha said aloud; v3.c06.l01's Station 0 runs exactly this." **S0-ax** (l05 → v3.c06.l01): "+1 day: the crow story read joined — the Volume 2 crow story read aloud joined, as task C of the sandhi exam printed it, once at natural pace, recorded; v3.c06.l01's Station 0 runs exactly this." **S0-ay** (l05 → v3.c06.l02): "+1 week: the serial in two minutes — the five episodes of the doves and the mouse (Chapters 1–5) retold aloud in your own Sanskrit, in the imperfect, in two minutes, timed; v3.c06.l02's Station 0 runs exactly this." **Standing** (l05 §20, from v2.c06.l05 via every Volume 3 l05, verbatim): "Monthly until Volume 3 ends: one story told aloud, one saying recited with its source, the nine askers once." | policy | plan §4.0.5 and the c05 blocks' "S0 → next" lines; [REF:cepeda2006] | **Chain:** l01 §3 runs S0-an and S0-am; l02 §3 runs S0-ap and S0-ao; l03 §3 runs S0-ar and S0-aq; l04 §3 runs S0-at and S0-as; l05 §3 runs S0-av and S0-au; v3.c06.l01 runs S0-ax and S0-aw; v3.c06.l02 runs S0-ay. **Keys:** table 0.G (✓ cells only). **Exam guard** (Chapter 3 decision 4): no item of S0-au or S0-av is an item of the exam's tasks A–E (§5); task C's ten compounds and S0-av's ten are disjoint. |
| 0.31 | **GLOSSARY terms this chapter adds or updates** (grammar terms, not ledger words): §7 item 6 (the full list, with the Hindi form the lessons must use). | policy | GLOSSARY.md; Chapter 3 decision 3; Chapter 4 decision 4 | — |
| 0.32 | **1.x assets carried (plan §4.0.2; ROADMAP preservation map).** (a) the tad/idam paradigms (pp. 111–113): re-derived (tables 0.C, 0.D), with IR-025's suppletion correction in the open; (b) the 22 upasargas (p. 114): the corrected list (row 0.20); (c) the four samāsa types (pp. 37–43 per the plan; Pass C confirms the pages): taught as four kinds with the tatpuruṣa subtypes; the इन्द्रशत्रु example → v4.c04. Pass C opens those pages in `Sanskritam-Curriculum.pdf` and lists each 1.x line the chapter corrects. | policy | plan §4.0.2; analysis/IMPROVEMENT_REPORT.md IR-025, IR-026 | — |
| 0.33 | **The serial, episode 5** (plan §1.5) — **"the same flight, told again with names".** The serial reached the freeing of the doves in v3.c03.l04 (episode 3; re-read joined in Chapter 4). Episode 5 goes back to the moment after the hunter turned away and tells it again with what the earlier telling left out: the king's name (चित्रग्रीवः) and the mouse's (हिरण्यकः), the king's words in the sky ("my friend … would protect us"; "the one who cuts snares is my friend"), the flight to the burrow, the mouse's silence and coming out, his words *aham alpa-śaktiḥ, dantāś ca me komalāḥ*. Four parts, one per teaching lesson, each in that lesson's grammar (§§1–4); the exam's task D is a new course-written passage on the same episode (§5). Label on every page: "our retelling, after Hitopadeśa 1 (Mitralābha)". Departures (Teacher Notes, every lesson): table 0.I. | policy; HISTORY (what the text says, by line) | [REF:hitopadesha mitralābha]; GRETIL `hitop_u.htm` | Every statement in table 0.I was re-found by line in the e-text. |

### 0.A अस्मद् and युष्मद् (Whitney §491a; short forms in brackets) — l01

| विभक्तिः | अहम् sg. | du. | pl. | त्वम् sg. | du. | pl. |
|---|---|---|---|---|---|---|
| प्रथमा | अहम् aham ✓ | आवाम् āvām ◐ | वयम् vayam ✓ | त्वम् tvam ✓ | युवाम् yuvām ◐ | यूयम् yūyam ✓ |
| द्वितीया | माम् mām ✓ (मा mā ◐) | आवाम् ◐ (नौ nau ◐) | अस्मान् asmān ✓ (नः naḥ ✓) | त्वाम् tvām ✓ (त्वा tvā ◐) | युवाम् ◐ (वाम् vām ◐) | युष्मान् yuṣmān ✓ (वः vaḥ ✓) |
| तृतीया | मया mayā ✓ | आवाभ्याम् āvābhyām ◐ | अस्माभिः asmābhiḥ ✓ | त्वया tvayā ✓ | युवाभ्याम् yuvābhyām ◐ | युष्माभिः yuṣmābhiḥ ✓ |
| चतुर्थी | मह्यम् mahyam ✓ (मे me ✓) | आवाभ्याम् ◐ (नौ ◐) | अस्मभ्यम् asmabhyam ◐ (नः ✓) | तुभ्यम् tubhyam ✓ (ते te ✓) | युवाभ्याम् ◐ (वाम् ◐) | युष्मभ्यम् yuṣmabhyam ◐ (वः ✓) |
| पञ्चमी | मत् mat ✓ | आवाभ्याम् ◐ | अस्मत् asmat ◐ | त्वत् tvat ✓ | युवाभ्याम् ◐ | युष्मत् yuṣmat ◐ |
| षष्ठी | मम mama ✓ (मे ✓) | आवयोः āvayoḥ ◐ (नौ ◐) | अस्माकम् asmākam ✓ (नः ✓) | तव tava ✓ (ते ✓) | युवयोः yuvayoḥ ◐ (वाम् ◐) | युष्माकम् yuṣmākam ✓ (वः ✓) |
| सप्तमी | मयि mayi ✓ | आवयोः ◐ | अस्मासु asmāsu ◐ | त्वयि tvayi ✓ | युवयोः ◐ | युष्मासु yuṣmāsu ◐ |

Owned before the chapter (evidence, each grep-checked, `ledger-all.tsv` and the lesson files):
अहम् (v1.c01.l03), त्वम् (v1.c06.l02), मम (v1.c01.l04), तव (v1.c06.l02), मह्यम् and तुभ्यम्
(v2.c05.l03), माम् (the chunk माम् मुञ्च, v2.c06.l02; a cell from v3.c01.l01), त्वाम् (v3.c01.l01),
मया, त्वया (v3.c01.l03), आवाम् वयम् युवाम् यूयम् (labelled nominatives, v3.c03.l01), ते in नमस्ते
(v1.c01.l01; "the short form of तुभ्यम्", previewed v3.c01.l03) and in भद्रम् ते (v2.c01.l01).
New cells in l01: मत्, त्वत्, मयि, त्वयि, अस्मान्, युष्मान्, अस्माभिः, युष्माभिः, अस्माकम्, युष्माकम्,
the four ✓ short forms, and the ◐ cells. **Cells drilled in l01: 26** (14 singular + 8 plural ✓ +
4 short forms; भवत्'s listed cells are counted with it: + 14 → **40**, §1).

### 0.B भवत् (Whitney §§452–453, 456) and भवती (like नदी) — l01

| विभक्तिः | m. sg. | du. | pl. | f. sg. (like नदी) | f. pl. |
|---|---|---|---|---|---|
| प्रथमा | भवान् bhavān ✓ | भवन्तौ bhavantau ✓ | भवन्तः bhavantaḥ ✓ | भवती bhavatī ✓ | भवत्यः bhavatyaḥ ✓ |
| द्वितीया | भवन्तम् bhavantam ✓ | भवन्तौ ✓ | भवतः bhavataḥ ◐ | भवतीम् bhavatīm ✓ | भवतीः bhavatīḥ ◐ |
| तृतीया | भवता bhavatā ✓ | भवद्भ्याम् bhavadbhyām ◐ | भवद्भिः bhavadbhiḥ ✓ | भवत्या bhavatyā ✓ | भवतीभिः ◐ |
| चतुर्थी | भवते bhavate ✓ | भवद्भ्याम् ◐ | भवद्भ्यः bhavadbhyaḥ ◐ | भवत्यै bhavatyai ✓ | भवतीभ्यः ◐ |
| पञ्चमी | भवतः bhavataḥ ✓ | भवद्भ्याम् ◐ | भवद्भ्यः ◐ | भवत्याः bhavatyāḥ ◐ | भवतीभ्यः ◐ |
| षष्ठी | भवतः ✓ | भवतोः bhavatoḥ ◐ | भवताम् bhavatām ✓ | भवत्याः ✓ | भवतीनाम् bhavatīnām ◐ |
| सप्तमी | भवति bhavati ✓ | भवतोः ◐ | भवत्सु bhavatsu ✓ | भवत्याम् bhavatyām ◐ | भवतीषु ◐ |
| सम्बोधनम् | भवन् bhavan ✓ | भवन्तौ | भवन्तः | भवति bhavati ◐ | भवत्यः |

The verb with भवान् / भवती / भवन्तः is **3rd person**: भवान् आगच्छति, भवन्तः आगच्छन्ति (v2.c05.l02;
v3.c03.l04 आगच्छतु भवान्). (The f. ◐ cells are ✓ in नदी's own table, c02.l02; they are ◐ here only
because l01 does not drill them for भवती.)

### 0.C तद् (Whitney §495) — l02 (all ✓)

| विभक्तिः | सः m. sg. · du. · pl. | तत् n. sg. · du. · pl. | सा f. sg. · du. · pl. |
|---|---|---|---|
| प्रथमा | सः saḥ · तौ tau · ते te | तत् tat · ते te · तानि tāni | सा sā · ते te · ताः tāḥ |
| द्वितीया | तम् tam · तौ · तान् tān | तत् · ते · तानि | ताम् tām · ते · ताः |
| तृतीया | तेन tena · ताभ्याम् tābhyām · तैः taiḥ | (as m.) | तया tayā · ताभ्याम् · ताभिः tābhiḥ |
| चतुर्थी | तस्मै tasmai · ताभ्याम् · तेभ्यः tebhyaḥ | (as m.) | तस्यै tasyai · ताभ्याम् · ताभ्यः tābhyaḥ |
| पञ्चमी | तस्मात् tasmāt · ताभ्याम् · तेभ्यः | (as m.) | तस्याः tasyāḥ · ताभ्याम् · ताभ्यः |
| षष्ठी | तस्य tasya · तयोः tayoḥ · तेषाम् teṣām | (as m.) | तस्याः · तयोः · तासाम् tāsām |
| सप्तमी | तस्मिन् tasmin · तयोः · तेषु teṣu | (as m.) | तस्याम् tasyām · तयोः · तासु tāsu |

Owned before l02 (evidence): सः (v1.c06.l03), तत् (v1.c05.l01), तस्य (v1.c06.l03), तम् … तस्मिन्
(v3.c01.l01–l04), ते/तान्/तैः/तेभ्यः/तेषाम्/तेषु/तानि (v3.c02.l01), सा … ताः, तस्याः, तासाम् (v3.c02.l02),
the duals तौ ते ताभ्याम् तयोः (v3.c02.l04 dual card). New in l02: no cell of तद् is new — l02 **assembles**
T8's second half from owned cells; the new cells are the Δ cards' and इदम्'s. (The only ✓ dual cells
remain nom./acc., D13; the oblique duals ताभ्याम्, तयोः stay ◐ as on the dual card.)

**Δ cards (l02):** एतद् = ए + every cell (एषः एतम् एतेन … ; एषा एताम् …; एतत्, pl. एतानि) ✓ ·
यद् (यः यम् येन यस्मै यस्मात् यस्य यस्मिन्; ये यान् यैः येभ्यः येषाम् येषु; या याम् यया यस्यै यस्याः
यस्याम्; याः याभिः याभ्यः यासाम् यासु; यत्, pl. यानि) ✓ (tables only in l02) · किम् (कः कम् … ;
का काम् कया कस्यै कस्याः कस्याम्; काः काभिः काभ्यः कासाम् कासु; किम्, pl. कानि) ✓ · सर्व (as तद् but
n. sg. सर्वम्; सर्वे, सर्वाणि, सर्वेषाम्, सर्वेण) ✓ · अन्य (as तद्, n. अन्यत्) ✓ · एक (sg. only, as सर्व:
एकः एकम् एकेन एकस्मै एकस्मात् एकस्य एकस्मिन्; एका … एकस्यै एकस्याः एकस्याम्; n. एकम्) ✓.
**Cells drilled in l02: 34** (एतद् 6 new nom./acc. ✓ beyond the owned three, यद् 21 sg. cells and the
three nominative plurals, किम् f. 6 sg. + 5 pl. new, सर्व 6 marked cells, अन्यत्, एकस्मै/एकस्मिन्/एकस्यै,
इदम् key cells 22 — the §14 line prints the count the drafter's tables actually drill; the floor is
"cells drilled: 34", the l05 audit uses that figure).

### 0.D इदम् (Whitney §501) — l02 (key cells ✓, the rest ◐)

| विभक्तिः | m. sg. · du. · pl. | n. sg. · du. · pl. | f. sg. · du. · pl. |
|---|---|---|---|
| प्रथमा | अयम् ayam ✓ · इमौ imau ✓ · इमे ime ✓ | इदम् idam ✓ · इमे ✓ · इमानि imāni ✓ | इयम् iyam ✓ · इमे ✓ · इमाः imāḥ ✓ |
| द्वितीया | इमम् imam ✓ · इमौ ✓ · इमान् imān ✓ | इदम् ✓ · इमे ✓ · इमानि ✓ | इमाम् imām ✓ · इमे ✓ · इमाः ✓ |
| तृतीया | अनेन anena ✓ · आभ्याम् ābhyām ◐ · एभिः ebhiḥ ◐ | (as m.) | अनया anayā ◐ · आभ्याम् ◐ · आभिः ābhiḥ ◐ |
| चतुर्थी | अस्मै asmai ◐ · आभ्याम् ◐ · एभ्यः ebhyaḥ ◐ | (as m.) | अस्यै asyai ◐ · आभ्याम् ◐ · आभ्यः ābhyaḥ ◐ |
| पञ्चमी | अस्मात् asmāt ◐ · आभ्याम् ◐ · एभ्यः ◐ | (as m.) | अस्याः asyāḥ ◐ · आभ्याम् ◐ · आभ्यः ◐ |
| षष्ठी | अस्य asya ✓ · अनयोः anayoḥ ◐ · एषाम् eṣām ◐ | (as m.) | अस्याः ✓ · अनयोः ◐ · आसाम् āsām ◐ |
| सप्तमी | अस्मिन् asmin ✓ · अनयोः ◐ · एषु eṣu ◐ | (as m.) | अस्याम् asyām ◐ · अनयोः ◐ · आसु āsu ◐ |

(अस्याः ✓ as the genitive; the same spelling as the ablative is read, not asked. अस्मिन् was a
labelled display in v3.c04.l03, *asminn eva kāle*.)

### 0.E The correlative grid (Whitney §§1098–1103) — l03 (owned in **bold**)

| | क- "which?" | इ-/अ- "this" | त- "that" | य- "which (rel.)" | सर्व- "all" |
|---|---|---|---|---|---|
| place (-त्र) | **कुत्र** · क्व | **अत्र** | **तत्र** | **यत्र** | सर्वत्र |
| from (-तः) | **कुतः** | **इतः** · **अतः** ("hence") | **ततः** | **यतः** ("because") | सर्वतः |
| time (-दा) | **कदा** | **इदानीम्** | तदा | यदा | सर्वदा (and, beside the grid: **एकदा**, **सदा**) |
| manner (-था, -थम्) | **कथम्** | इत्थम् · एवम् | तथा | यथा | सर्वथा |
| + चित् / अपि | कुत्रचित्, कुत्रापि · कुतश्चित्, कुतोऽपि · कदाचित्, कदापि · कथञ्चित् | — | — | — | — |

Evidence (grep, `ledger-all.tsv`): कुत्र v2.c02.l04 · अत्र, तत्र, यत्र v1.c05.l03 (and l05) ·
कुतः, इतः, अतः, ततः v1.c02.l06 · यतः, कदा, इदानीम् v2.c05.l01 · कथम् v2.c01.l02 · एकदा
v2.c06.l02 · सदा v3.c03.l04. New headwords: क्व, तदा, यदा, तथा, यथा, एवम् (and the particle हि,
the word अधः). Built and never counted (rule 15): सर्वत्र, सर्वतः, सर्वदा, सर्वथा, इत्थम्, the
चित्/अपि row except कदाचित्. **Cells drilled in l03: 0** (indeclinables have no cells; §14 says
"cells drilled: 0 — indeclinables never change" and counts the grid words: 25).

### 0.F The four kinds of compound (Whitney §§1247, 1252–1253, 1263–1264, 1269–1270, 1279, 1293, 1312–1313; 2.2.29, 2.2.24) — l04

| Kind (status) | Definition (one line) | Compound (pause form) · members | विग्रहः (cases named) |
|---|---|---|---|
| द्वन्द्वः "pair" ✓ (2.2.29) | X and Y; the whole is dual (two) or plural (more) and takes the gender of the last member (Whitney §1253a) | सिंहमूषकौ · सिंह-मूषकौ | सिंहः च मूषकः च (nom. + nom.) |
| | | मातापितरौ · माता-पितरौ | माता च पिता च (माता- not मातृ-: 6.3.25, Teacher Notes; Whitney §1254a) |
| | | गुरुशिष्यौ · गुरु-शिष्यौ | गुरुः च शिष्यः च |
| | | सुखदुःखे · सुख-दुःखे | सुखम् च दुःखम् च (n. du.) |
| तत्पुरुषः "his man" — (a) **case-tatpuruṣa** ✓ | the first member stands in a case relation to the second; the whole names the second | विद्यालयः · विद्या-आलयः | विद्यायाः आलयः (gen.) |
| | | हिमालयः · हिम-आलयः | हिमस्य आलयः (gen.) |
| | | परोपकारः · पर-उपकारः | परस्य उपकारः (gen.; उपकारः "help" glossed, display) |
| | | मनोरथः · मनस्-रथः | मनसः रथः (gen.; मनसः display, the s-stem v4.c05) |
| | | मातृभाषा · मातृ-भाषा | मातुः भाषा (gen.) |
| | | रविवासरः · रवि-वासरः | रवेः वासरः (gen.) |
| | | वर्णमाला · वर्ण-माला | वर्णानाम् माला (gen. pl.) |
| | | कमलमुकुलम् · कमल-मुकुलम् | कमलस्य मुकुलम् (gen.) |
| | | जलपात्रम् · जल-पात्रम् | जलस्य पात्रम् (gen.) |
| | | समुद्रतीरम् · समुद्र-तीरम् | समुद्रस्य तीरम् (gen.) |
| | | सभामध्ये · सभा-मध्ये | सभायाः मध्ये (gen.; the compound in the loc.) |
| | | अमृततुल्यम् · अमृत-तुल्यम् | अमृतेन तुल्यम् (instr.; or अमृतस्य तुल्यम्, gen.: तुल्य takes both) |
| | | पाशबद्धाः · पाश-बद्धाः | पाशैः बद्धाः (instr.; Hit *pāśa-baddhān*) |
| — (b) **कर्मधारयः** ✓ (2.1.57, Teacher Notes) | adjective + noun, one referent: the first describes the second | नीलकमलम् · नील-कमलम् | नीलम् कमलम् (both nom.) |
| | | चित्रवनम् · चित्र-वनम् | चित्रम् वनम् |
| | | प्रियमित्रम् · प्रिय-मित्रम् | प्रियम् मित्रम् |
| | | शुभरात्रिः · शुभ-रात्रिः | शुभा रात्रिः |
| — (c) **द्विगुः** ◐ (2.1.52, Teacher Notes) | a numeral first | सप्ताहः · सप्त-अहः | सप्तानाम् अह्नाम् समाहारः (display; "seven days") |
| | | पञ्चतन्त्रम् · पञ्च-तन्त्रम् | "the five books" (display) |
| — (d) **उपपद** (note) ◐ (2.2.19, Teacher Notes) | the second member a verb-noun made from a root | जलजम् · जल-जम् | जले जायते ("is born in water"; जायते display) |
| | | खगः · ख-गः | खे गच्छति (ख "sky", glossed, display) |
| | | पादपः · पाद-पः | पादैः पिबति ("drinks by the feet") |
| बहुव्रीहिः "(having) much rice" ✓ (2.2.24) | the compound describes **someone or something else**, named outside it | नीलकण्ठः · नील-कण्ठः | नीलः कण्ठः यस्य सः (Śiva; the peacock) |
| | | चित्रग्रीवः · चित्र-ग्रीवः | चित्रा ग्रीवा यस्य सः (the Hitopadeśa's dove-king) |
| | | अल्पशक्तिः · अल्प-शक्तिः | अल्पा शक्तिः यस्य सः (Hit *aham alpa-śaktiḥ*) |
| | | उदारचरितः · उदार-चरितः | उदारम् चरितम् यस्य सः (Hit 1.71 *udāra-caritānām*) |
| अव्ययीभावः ◐ (2.1.6–7, Teacher Notes) | an indeclinable first; the whole is indeclinable | यथाशक्ति · यथा-शक्ति | "as far as one's strength goes" (Hit *yathā-śakti*) |
| | | प्रतिदिनम् · प्रति-दिनम् | "every day" |

**Labels, not kinds:** सुप्रभातम् (owned) is a **prādi** compound, सु "well" + प्रभातम् (2.2.18,
Teacher Notes) — not a karmadhāraya (plan E2). अहिंसा (owned) has the negative अ- first (2.2.6
नञ्, Teacher Notes): "a tatpuruṣa whose first member is the negative". The महा- of महाभारतम्,
महर्षिः is a special compound form of महत्, not its stem (rule 1 is not misapplied). जगदीशः
(जगत्-ईशः) and सज्जनः (सत्-जनः), read whole in v3.c04.l03, are a tatpuruṣa and a karmadhāraya
(जगतः, सत् display). **The context test** (main risk): "does the compound name the thing itself
(tatpuruṣa, karmadhāraya), or someone who has it (bahuvrīhi)?" — नीलकमलम् is a lotus;
नीलकण्ठः is not a throat. The real ambiguity (इन्द्रशत्रुः) is v4.c04's. **Cells drilled in l04: 0
new** (compounds are built from owned stems; §14 prints "cells drilled: 0 — today's work is
vigraha: 24 compounds resolved").

### 0.G Station 0 keys (the running lesson prints these in `<details>`; ✓ cells only)

- **S0-am** (l01): the v3.c04.l04 §17 split key (Chapter 4 fact base §4; the thirteen lines with
  their seams).
- **S0-an** (l01): सोऽपि (सः before अ → सोऽ, c04.l02) · नमस्ते (ः before त → स्, 8.3.34) · गुरुरत्र (-उः
  before a vowel → र्) · तच्च (त् + च → च्च, 8.4.40) · जलमस्ति (म् before a vowel, written together, c04.l03);
  तस्मिन् एव (न् doubled after a short vowel) · सदा एव (वृद्धिः) · पुनः मिलामः (the r-final keeps र्) ·
  कः अपि (-अः before अ → ओऽ) · सत्यम् वद (म् before a consonant → ं, 8.3.23).
- **S0-ao** (l02): the v3.c04.l05 task C text (eleven lines; Chapter 4 fact base §5).
- **S0-ap** (l02): अहम् माम् मया मह्यम् मत् मम मयि; त्वम् त्वाम् त्वया तुभ्यम् त्वत् तव त्वयि; वयम्
  अस्मान् अस्माभिः अस्माकम्; यूयम् युष्मान् युष्माभिः युष्माकम्; four sentences, any wording, each
  with the short form after at least one word (model: फलं मे रोचते · नमस्ते · गुरुर्नः पश्यति · नमो वः).
  Wrong: a short form first (*मे फलं रोचते), or with च on the pronoun itself (*ते च).
- **S0-aq** (l03): (1) नमः + dative — 2.3.16 (रामाय नमः); (2) ते = तुभ्यम्, the short form — 8.1.22;
  (3) नमः + ते → नमस्ते, ः before त → स् — 8.3.34. For नमो वः: (1) as above; (2) वः = युष्मभ्यम्, the
  plural short form (8.1.21, Teacher Notes — the learner says "the plural short form"); (3) -अः before a
  voiced consonant → ओ (c04.l02).
- **S0-ar** (l03): table 0.C, singular columns; एषः एतम्, एषा एताम्, एतत् एतत्.
- **S0-as** (l04): यः यम् येन यस्मै यस्मात् यस्य यस्मिन्; या याम् यया यस्यै यस्याः यस्याः यस्याम्;
  यत् यत् येन यस्मै यस्मात् यस्य यस्मिन्; कः कम् केन कस्मै कस्मात् कस्य कस्मिन्; का काम् कया कस्यै
  कस्याः कस्याः कस्याम्; किम् किम् (rest as कः); सर्वः सर्वे · सर्वा सर्वाः · सर्वम् सर्वाणि; सर्वस्मै,
  सर्वस्मिन्, सर्वेषाम्.
- **S0-at** (l04): table 0.E rows 1–4 (any order of columns; क्व or कुत्र both right).
- **S0-au** (l05): any six correct sentences; check: the relative first; correlative of the same
  gender and number; each pronoun in the case of its own clause; joined by Chapter 4's rules, with
  the comma before the correlative where the relative clause ends in -न् (row 0.3).
- **S0-av** (l05): परस्य उपकारः (gen.; उपकारः glossed) · हिमस्य आलयः (gen.) · समुद्रस्य तीरम्
  (gen.) · सभायाः मध्ये (gen.) · अमृतेन तुल्यम् (instr.) or अमृतस्य तुल्यम् (gen.) · सिंहः च मूषकः च ·
  गुरुः च शिष्यः च · चित्रम् वनम् (karmadhāraya; both nom.) · पाशैः बद्धाः (instr.; पाशेन बद्धाः also
  right) · जलस्य पात्रम् (gen.).
- **S0-aw** (c06.l01): वर्णमाला तत्पुरुषः (वर्णानाम् माला) · शुभरात्रिः कर्मधारयः (शुभा रात्रिः) ·
  नीलकमलम् कर्मधारयः · मातापितरौ द्वन्द्वः · सिंहमूषकौ द्वन्द्वः · नीलकण्ठः बहुव्रीहिः · अल्पशक्तिः
  बहुव्रीहिः · चित्रग्रीवः बहुव्रीहिः · परोपकारः तत्पुरुषः · रविवासरः तत्पुरुषः. (A learner who says
  "karmadhāraya is a kind of tatpuruṣa" for शुभरात्रिः, नीलकमलम् is right.)
- **S0-ax, S0-ay** (c06): the c06 fact base writes their keys (the crow text; the serial's episodes).

### 0.H Hindi parallels at a glance (row 0.25; each lesson uses only its own rows)

| | Lesson | Hindi | Sanskrit | The exact contrast |
|---|---|---|---|---|
| a | l01 | मैं · हम | अहम् · वयम् (आवाम्) | Hindi has two numbers, Sanskrit three; Hindi हम is the plural, and in much speech also stands for "I" — Sanskrit वयम् is only plural, and "we two" is आवाम्. |
| b | l01 | तू · तुम · आप | त्वम् · यूयम् · भवान्/भवती | Hindi grades respect in three steps and agrees तुम and आप with plural verb forms even for one person (तुम जाते हो, आप जाते हैं); Sanskrit त्वम् is singular at any level of respect, यूयम् is only plural, and भवान् is a third-person word that takes the 3rd-person singular (भवान् गच्छति) — so "आप जाते हैं" is भवान् गच्छति, not *भवान् गच्छथ. |
| c | l01 | मुझे · मुझको · मुझसे · मेरा/मेरी/मेरे | माम् / मह्यम् (मे) · मया / मत् · मम (मे) | Hindi मुझे covers both "me" (object) and "to me" (मुझे दो); Sanskrit keeps them apart: माम् पश्यति, मह्यम् ददाति. Hindi मेरा changes with the thing owned (मेरा घर, मेरी किताब); Sanskrit मम never changes (मम गृहम्, मम पुस्तकम्, मम माता). The liking sentence: मुझे फल अच्छा लगता है = फलं मे रोचते — the liker is a को-form (मुझे) in Hindi and a dative in Sanskrit; only the verb's agreement with the liked thing is shared (Chapter 3 decision). |
| d | l01 | आपको नमस्ते / नमस्कार | नमस्ते = नमः ते | Hindi uses नमस्ते as one fixed greeting, even to a group or with आप; in Sanskrit its ते is "to you" (one person, singular short form), and to a group one says नमो वः. |
| e | l02 | यह · वह · ये · वे | अयम्/इयम्/इदम्, एषः · सः/सा/तत् · इमे, एते · ते, ताः | Hindi has one form for all genders (यह लड़का, यह लड़की, यह घर); Sanskrit marks gender (अयम् बालकः, इयम् बालिका, इदम् गृहम्). Both use "that" as the plain "he/she" (वह आया · सः आगच्छत्). |
| f | l02 | कोई · कुछ · कभी | कश्चित्/काचित् · किञ्चित् · कदाचित् | Hindi कोई and कुछ do not change for gender; Sanskrit builds the indefinite from the gendered asker: कश्चित् m., काचित् f., किञ्चित् n. |
| g | l03 | जो … वह · जब … तब · जहाँ … वहाँ · जैसा/जैसे … वैसा/वैसे | यः … सः · यदा … तदा · यत्र … तत्र · यथा … तथा | **Built exactly like the Sanskrit sentence**: the relative clause first, the correlative after (जो पढ़ता है वह जानता है = यः पठति स जानाति; जब गुरु आते हैं तब छात्र बैठते हैं = यदा गुरुरागच्छति तदा छात्रा उपविशन्ति). The differences: Hindi जो does not show gender (जो लड़का / जो लड़की), Sanskrit यः / या / यत् does; Hindi changes जो to जिस/जिन before a postposition (जिसको, जिनका), Sanskrit puts यद् itself in the case (यम्, येन, यस्य). |
| h | l03 | प्र-, अ-, अनु-, उप-, सु- … in तत्सम words (प्रयोग, उपकार, अनुवाद, सुपुत्र) | the 22 upasargas | Hindi keeps the prefixes inside borrowed words, where they no longer join a Hindi verb; in Sanskrit they join verbs (आ + गच्छति). |
| i | l04 | राजपुत्र, देशभक्ति, नीलकमल, त्रिभुवन, पीताम्बर, प्रतिदिन, यथाशक्ति, माता-पिता | the four kinds | Sorted (Hindi school grammar's own sorting, TRADITION): **तत्पुरुष** राजपुत्र (राजा का पुत्र), देशभक्ति (देश की भक्ति); **कर्मधारय** नीलकमल (नीला कमल); **द्विगु** त्रिभुवन (तीन भुवनों का समाहार); **बहुव्रीहि** पीताम्बर (पीला है अम्बर जिसका — कृष्ण; read as "yellow cloth" it is a कर्मधारय — Hindi grammars use it to show the double reading); **अव्ययीभाव** प्रतिदिन, यथाशक्ति; **द्वन्द्व** माता-पिता (माता और पिता). Hindi prints a dvandva with a hyphen (माता-पिता) and does not inflect it as a dual; Sanskrit writes मातापितरौ as one word, in the dual. In Sanskrit the first member is a stem: Hindi राजपुत्र has राज- because Sanskrit राजन् enters a compound as राज- (Whitney §1249c) — the Sanskrit members राजन्, भक्ति, भुवन, पीत, अम्बर are **not** taught; these are Hindi words. |
| j | l04 | समास के भेद | द्वन्द्वः, तत्पुरुषः, कर्मधारयः, द्विगुः, बहुव्रीहिः, अव्ययीभावः | Hindi school grammar commonly lists **six** kinds of समास — अव्ययीभाव, तत्पुरुष, कर्मधारय, द्विगु, द्वन्द्व, बहुव्रीहि — counting कर्मधारय and द्विगु as kinds of their own; the Sanskrit tradition counts four, with कर्मधारय and द्विगु as kinds of तत्पुरुष. TRADITION, [REF:guru1952] bare — **Pass C confirms Guru's own grouping before the key prints** (open item 1). |

### 0.I The serial, episode 5 — what the Hitopadeśa says, and our departures (Teacher Notes, every lesson)

| # | The text (GRETIL `hitop_u.htm`, by line) | Our retelling |
|---|---|---|
| 1 | The dove-king is named at his first appearance: *citragrīva-nāmā kapota-rājaḥ* (l. 307, prose after verse 4) | the serial named no one in episodes 1–4; episode 5 gives both names |
| 2 | After the hunter turns back, the doves ask *svāmin! kim idānīṃ kartum ucitam?* (l. 468, prose after verse 37); Citragrīva answers with a verse (1.38, not used) and *tan me mitraṃ hiraṇyako nāma mūṣika-rājo gaṇḍakī-tīre citra-vane nivasati* (l. 472) | the doves ask in the sky "हे नृप! इदानीं वयं किं कुर्मः?"; Hiraṇyaka is "a mouse", not king of the mice; he lives "near a tree on the river bank" — the serial's one river — not in Citravana on the Gaṇḍakī |
| 3 | *so 'smākaṃ pāśāṃś chetsyati* "he will cut our snares" (l. 472; a future) | सोऽस्मान्रक्षेत् "he would protect us" (optative, c03.l04) and, in l03, our relative sentence यो मूषकः पाशान्कृन्तति स मम सखा |
| 4 | The burrow has a hundred doors (*śata-dvāraṃ vivaram*, l. 472) | omitted |
| 5 | Hiraṇyaka, afraid, stays silent (*tūṣṇīṃ sthitaḥ*); Citragrīva: *sakhe hiraṇyaka! katham asmān na sambhāṣase?* (l. 472) | मूषको न किमप्यवदत् · "हे हिरण्यक! अहं चित्रग्रीवः, तव सखा। किमर्थं न वदसि?" — a close paraphrase in owned words |
| 6 | He recognises the voice, comes out, and says *puṇyavān asmi priya-suhṛn me citragrīvaḥ samāyātaḥ* (l. 474) | he comes out (बहिरागच्छत्) and says "स्वागतम्, प्रियमित्र!" (ours) |
| 7 | He sees the doves *pāśa-baddhān* (l. 479, prose after verse 39) | पाशबद्धाः (the text's compound) |
| 8 | *aham alpa-śaktiḥ | dantāś ca me komalāḥ* (l. 492, prose after verse 41) | "अहमल्पशक्तिः, दन्ताश्च मे कोमलाः।" — the text's words, joined at the comma by our stop rule |
| 9 | Citragrīva: *tathāpi yathā-śakti bandhanam eteṣāṃ khaṇḍaya* (l. 494) | "यथाशक्ति पाशान्कृन्त।" |
| 10 | *evam uktvā tena sarveṣāṃ kapotānāṃ bandhanāni chinnāni* (l. 531, prose after verse 49; R5 + R2) | ततो हिरण्यकः सर्वेषां कपोतानां पाशानकृन्तत् (active imperfect) |
| 11 | — | the closing dvandva चित्रग्रीवहिरण्यकौ प्रियमित्रे अभवताम् is ours |
| 12 | (order) | episode 5 tells again a moment the serial already passed (v3.c03.l03 lines 7–13, v3.c03.l04): "the same day, told again with names" |

The earlier chapters' departures stand as listed in their Teacher Notes (the free dove's warning,
the hunter's wife, the young dove's parents — plan §7.6, v3.c02 row; the king's recalled warning and
the grains on the bank — v3.c03 row); c06.l02's Teacher Notes list them all.

---

## 1. L1 — अहम् त्वम् भवान्: I, You, Your Honour (conversation)

**Front matter.** id `v3.c05.l01` · file `lesson-01-i-you-your-honour.md` · title sa अहम् त्वम्
भवान् · sa_iast *aham tvam bhavān* · en "I, You, Your Honour" · hi "मैं, तुम, आप — पुरुषवाचक
सर्वनाम" · lesson_type: conversation · cefr A2 · duration_minutes 45 · self_study_minutes **35**
(§21) · prerequisites [v3.c04.l05] · review_of [v3.c04.l05, v3.c04.l04, v3.c01.l01, v3.c01.l03,
v3.c01.l04, v3.c03.l01, v3.c03.l04, v2.c05.l02, v2.c05.l03, v2.c01.l01, v2.c01.l04, v1.c06.l02,
v1.c01.l01] · vocabulary_count **4** · tags [conversation, pronouns, personal-pronouns, enclitics,
politeness, bhavan, namaste-thread, joined-text, spaced-review] · media (planned): images
`v3c05l01-i-and-you-table.svg`, `v3c05l01-namaste-proof-card.svg`, `v3c05l01-r6-card.svg`; audio
`v3c05l01-conversation.mp3`, `v3c05l01-leaning-words.mp3`, `v3c05l01-story.mp3`; worksheets
`v3c05l01-pronoun-cells.pdf`.

(§3 must reach every review_of lesson: S0-an and S0-am reach v3.c04.l05/l04; the prompts below
reach the rest.)

**Objectives** (front matter and §2):
1. en "Produce every singular cell of अहम् and त्वम्, and the plural nominative, accusative,
   instrumental and genitive, in sentences about yourself and a partner." · hi "अहम् और त्वम् के
   एकवचन के सभी रूप, और बहुवचन के प्रथमा, द्वितीया, तृतीया तथा षष्ठी रूप, अपने और साथी के बारे में
   वाक्यों में बनाएँ।"
2. en "Use the short forms मे, ते, नः and वः correctly — never first in a sentence — and prove
   नमस्ते = नमः + ते in three lines." · hi "लघु रूप मे, ते, नः और वः ठीक प्रयोग करें — वाक्य के आरम्भ में
   कभी नहीं — और तीन पंक्तियों में सिद्ध करें कि नमस्ते = नमः + ते।"
3. en "Hold a polite conversation with a guest using भवान् and भवती with the 3rd-person verb, and
   the listed cells of भवत् (भवन्तम्, भवता, भवते, भवतः, भवन्तः, भवताम्)." · hi "अतिथि से भवान् और
   भवती के साथ प्रथम पुरुष की क्रिया का प्रयोग करते हुए विनम्र बातचीत करें, भवत् के सूचीबद्ध रूपों सहित।"
4. en "Write a six-line dialogue joined, with its pause form beneath." · hi "छह पंक्तियों का संवाद जोड़कर
   लिखें, नीचे उसका विराम-रूप दें।"

**The one grammar point:** the personal pronouns and their short (enclitic) forms — T8, first half
(table 0.A); भवत् shown beside them, a 3rd-person word with listed cells (table 0.B). Cards with no
production target: R6 (row 0.8); सखा as whole words (row 0.9).

**Conversation-lesson shape** (as v3.c01.l04 and v3.c03.l04): §1 hook on the guest at the door;
§8 the six steps (below); §13 the model sentences; §15 tables; §16 the conversation as the lesson's
centre, with a role-play drill; §17 the serial. Six steps for §8:
1. **Scene:** Arjuna visits Sītā's family; the father greets him (§16 turns 1–4).
2. **The question:** how do you say "us", "you all", "with us", "our" — and why is it नमस्ते and not
   *नमः तुभ्यम् in every greeting?
3. **The evidence — owned forms that already answer it** (each grep-checked, table 0.A note): मम
   (v1.c01.l04), तव (v1.c06.l02), मह्यम्/तुभ्यम् (v2.c05.l03: क्षीरम् मह्यम् रोचते), माम् (v2.c06.l02 माम्
   मुञ्च; v3.c01.l01), त्वाम् (v3.c01.l01), मया/त्वया (v3.c01.l03), वयम् … यूयम् (v3.c03.l01), नमस्ते's ते
   (v1.c01.l01; v3.c01.l03 preview; v3.c04.l02 seam), भद्रम् ते (v2.c01.l01), भवान् with the 3rd person
   (v1.c05.l01; v2.c05.l02 भवान् पुनः वदतु; v3.c03.l04 आगच्छतु भवान्; plural भवन्तः previewed there),
   श्रीमन्/भगवन् (v2.c01.l04), धीमान् (v3.c04.l03), सखे in Hit (named, v3.c03.l03 Teacher Notes).
4. **The pattern named:** two tables with no gender; four short forms that lean on the word before
   them; one polite word that is grammatically "Your Honour" and so takes the 3rd person.
5. **The table assembled by the learner:** the learner fills table 0.A from the owned cells (14
   pre-filled by the learner from memory, then the new ones dictated and checked).
6. **Production:** the §16 role-play; Ex 4–6.

**Forms taught:** tables 0.A and 0.B; R6 card; सखा card; 8.1.22 (row 0.5); the enclitic rule
(row 0.6). **Cells drilled: 40** (§14 line).

**Headwords (4; ledger 460 → 464):**

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status | Check |
|---|---|---|---|---|---|---|---|
| स्वयम् | svayam | /sʋɐjɐm/ | oneself, by oneself (any person) | स्वयं, ख़ुद | indeclinable | ledger-new | Apte s.v. स्वयम् "ind. Oneself, in one's own person (used reflexively…)"; Whitney §513a "isolated and uninflected … *self, own self* … along with words of all persons and numbers"; rule 6 ("its only form") |
| सखा | sakhā | /sɐkʰɑː/ | friend (male) | मित्र, सखा | m., irregular i-stem (सखि) | ledger-new (rule 14) | Apte s.v. सखि; MW *sakhi*; Whitney §343a; Hit *sakhe* l. 472 |
| स्नेहः | snehaḥ | /sn̪eːɦɐh/ | affection, love, fondness | स्नेह, प्रेम | m. a-stem | ledger-new | Apte s.v. स्नेहः "Affection"; MW *sneha* |
| विश्वासः | viśvāsaḥ | /ʋiɕʋɑːsɐh/ | trust, confidence (in: loc.) | विश्वास, भरोसा | m. a-stem | ledger-new | Apte s.v. विश्वासः "Trust, confidence, faith"; MW *vi-śvāsa* "confidence, trust … in (loc. gen. instr. …)" |

(IPA: स्न /sn̪/ — the dental n̪ after s; STYLE_GUIDE §2. The ledger line: "Ledger 460 → 464 (4
ledger-new). Cells drilled: 40.")

**Model sentences (§13; joined, pause form beneath, English — Hindi):**
1. फलं मे रोचते। (phalaṃ me rocate.) / फलम् मे रोचते। (phalam me rocate.) "I like the fruit." —
   मुझे फल अच्छा लगता है। (मे for मह्यम्; never first)
2. नमस्ते। (namaste.) / नमः ते। (namaḥ te.) "Homage to you." — आपको नमस्कार। (the नमस्ते thread,
   step 3: the three-line proof, row 0.5)
3. भवान्कुत आगच्छति? भवती कुत्र गच्छति? (bhavān kuta āgacchati? bhavatī kutra gacchati?) /
   भवान् कुतः आगच्छति? भवती कुत्र गच्छति? (bhavān kutaḥ āgacchati? bhavatī kutra gacchati?)
   "Where do you come from, sir? Where are you going, madam?" — आप कहाँ से आ रहे हैं? आप कहाँ जा
   रही हैं?
4. अस्माकं गुरुर्भवतां ग्रामे निवसति। (asmākaṃ gurur bhavatāṃ grāme nivasati.) / अस्माकम् गुरुः
   भवताम् ग्रामे निवसति। (asmākam guruḥ bhavatām grāme nivasati.) "Our teacher lives in your
   (pl., polite) village." — हमारे गुरु आपके गाँव में रहते हैं।
5. सखे! त्वया सहाहमप्यागच्छामि। (sakhe! tvayā sahāham apy āgacchāmi.) / सखे! त्वया सह अहम्
   अपि आगच्छामि। (sakhe! tvayā saha aham api āgacchāmi.) "Friend! I am coming with you too." —
   मित्र! मैं भी तुम्हारे साथ आ रहा हूँ।
6. स्वयं पठ। (svayaṃ paṭha.) / स्वयम् पठ। (svayam paṭha.) "Read by yourself." — स्वयं पढ़ो।

Further §13 lines (same layout): मम त्वयि विश्वासोऽस्ति। (mama tvayi viśvāso 'sti.) / मम त्वयि
विश्वासः अस्ति। "I trust you." — मुझे तुम पर विश्वास है। · नमो वः। (namo vaḥ.) / नमः वः। "Homage to
you all." — आप सबको नमस्कार। · **Hitopadeśa (prose after verse 41; the mouse):** दन्ताश्च मे कोमलाः।
(dantāś ca me komalāḥ.) / दन्ताः च मे कोमलाः। "And my teeth are soft." — और मेरे दाँत कोमल हैं।
[REF:hitopadesha mitralābha] (the च belongs to दन्ताः; row 0.6).

**§16 Conversation — "A guest at the door"** (12 turns; joined line + IAST, pause form + IAST,
English — Hindi; 🔊 `v3c05l01-conversation.mp3`, read in this order, turns 1–12):
1. अर्जुनः — नमो वः! (namo vaḥ!) / नमः वः! (namaḥ vaḥ!) "Greetings to you all!" — आप सबको नमस्ते!
2. पिता — नमस्ते! आगच्छतु भवान्। (namaste! āgacchatu bhavān.) / नमः ते! आगच्छतु भवान्। (namaḥ
   te! āgacchatu bhavān.) "Hello! Please come in." — नमस्ते! आइए।
3. अर्जुनः — अहमर्जुनः, सीताया मित्रम्। (aham arjunaḥ, sītāyā mitram.) / अहम् अर्जुनः, सीतायाः
   मित्रम्। (aham arjunaḥ, sītāyāḥ mitram.) "I am Arjuna, Sītā's friend." — मैं अर्जुन हूँ, सीता का मित्र।
4. माता — स्वागतम्! भवान्कुत आगच्छति? (svāgatam! bhavān kuta āgacchati?) / स्वागतम्! भवान्
   कुतः आगच्छति? (svāgatam! bhavān kutaḥ āgacchati?) "Welcome! Where do you come from?" — स्वागत
   है! आप कहाँ से आ रहे हैं?
5. अर्जुनः — विद्यालयादागच्छामि। भवत्याः पुत्री कुत्र? (vidyālayād āgacchāmi. bhavatyāḥ putrī
   kutra?) / विद्यालयात् आगच्छामि। भवत्याः पुत्री कुत्र? (vidyālayāt āgacchāmi. bhavatyāḥ putrī
   kutra?) "I'm coming from school. Where is your daughter, madam?" — मैं विद्यालय से आ रहा हूँ।
   आपकी बेटी कहाँ है?
6. माता — सीता गृहेऽस्ति। सीते! अर्जुन आगच्छति। (sītā gṛhe 'sti. sīte! arjuna āgacchati.) / सीता
   गृहे अस्ति। सीते! अर्जुनः आगच्छति। (sītā gṛhe asti. sīte! arjunaḥ āgacchati.) "Sītā is at home.
   Sītā! Arjuna is coming." — सीता घर पर है। सीता! अर्जुन आ रहा है।
7. सीता — अर्जुन, भद्रं ते! अत्रोपविश। (arjuna, bhadraṃ te! atropaviśa.) / अर्जुन, भद्रम् ते! अत्र
   उपविश। (arjuna, bhadram te! atra upaviśa.) "Arjuna, good to see you! Sit here." — अर्जुन, तुम्हारा
   भला हो! यहाँ बैठो।
8. अर्जुनः — धन्यवादः। एतत्फलं तुभ्यम्। (dhanyavādaḥ. etat phalaṃ tubhyam.) / धन्यवादः। एतत्
   फलम् तुभ्यम्। (dhanyavādaḥ. etat phalam tubhyam.) "Thank you. This fruit is for you." —
   धन्यवाद। यह फल तुम्हारे लिए है।
9. सीता — फलं मे रोचते! मातः, पश्य! (phalaṃ me rocate! mātaḥ, paśya!) / फलम् मे रोचते! मातः,
   पश्य! (phalam me rocate! mātaḥ, paśya!) "I like fruit! Mother, look!" — मुझे फल अच्छा लगता है!
   माँ, देखो!
10. पिता — अर्जुन, अद्यास्माभिः सह खाद। (arjuna, adyāsmābhiḥ saha khāda.) / अर्जुन, अद्य
    अस्माभिः सह खाद। (arjuna, adya asmābhiḥ saha khāda.) "Arjuna, eat with us today." — अर्जुन,
    आज हमारे साथ खाओ।
11. अर्जुनः — भवतां स्नेहो मे प्रियः। (bhavatāṃ sneho me priyaḥ.) / भवताम् स्नेहः मे प्रियः।
    (bhavatām snehaḥ me priyaḥ.) "Your kindness is dear to me." — आप लोगों का स्नेह मुझे प्रिय है।
12. पिता — अस्माकं गृहं तव गृहम्। (asmākaṃ gṛhaṃ tava gṛham.) / अस्माकम् गृहम् तव गृहम्।
    (asmākam gṛham tava gṛham.) "Our home is your home." — हमारा घर तुम्हारा घर है।

Notes for the drafter: the parents use भवान् (polite, 3sg) to the guest at first (turns 2, 4), then
the father, as the elder, turns to अर्जुन with the 2nd person (turn 10, खाद) and तव (turn 12): a
real shift the §8 can name. Sītā, his friend, uses त्वम्-forms (ते, तुभ्यम् is his to her). मे in
turns 9 and 11 is never first. Turn 1 नमो वः is to the family (plural short form). No ◐ cell is
used. **Role-play drill (§16):** the same scene with a woman guest (भवती + 3sg: "भवती कुत आगच्छति?
… भवत्याः …") and with two guests (भवन्तौ — ✓ nom.; verb 3du: भवन्तौ कुत आगच्छतः?).

**§17 Story — serial episode 5, part 1: "Names in the sky"** — label "our retelling, after
Hitopadeśa 1 (Mitralābha)"; 🔊 `v3c05l01-story.mp3`. Eight lines, each: joined + IAST; pause form +
IAST; English — Hindi. Name gloss (once, §17 head): चित्रग्रीवः, the dove-king's name (lesson 4
opens it); हिरण्यकः, the mouse's name, "golden one" (हिरण्य "gold" + the suffix -क: a derivative,
not a compound).
1. कपोता जालेन सहाकाशमगच्छन्। (kapotā jālena sahākāśam agacchan.) / कपोताः जालेन सह आकाशम्
   अगच्छन्। (kapotāḥ jālena saha ākāśam agacchan.) "The doves went up into the sky with the net." —
   कबूतर जाल के साथ आकाश में गए।
2. आकाशे कपोता नृपमपृच्छन् — "हे नृप! इदानीं वयं किं कुर्मः?" (ākāśe kapotā nṛpam apṛcchan — "he
   nṛpa! idānīṃ vayaṃ kiṃ kurmaḥ?") / आकाशे कपोताः नृपम् अपृच्छन् — "हे नृप! इदानीम् वयम् किम्
   कुर्मः?" (ākāśe kapotāḥ nṛpam apṛcchan — "he nṛpa! idānīm vayam kim kurmaḥ?") "In the sky the
   doves asked the king: 'King! What do we do now?'" — आकाश में कबूतरों ने राजा से पूछा — "हे राजा!
   अब हम क्या करें?"
3. नृपस्य नाम चित्रग्रीवः। (nṛpasya nāma citragrīvaḥ.) / नृपस्य नाम चित्रग्रीवः। (the same) "The
   king's name was Citragrīva." — राजा का नाम चित्रग्रीव था।
4. चित्रग्रीव उवाच — "मम सखा मूषकोऽस्ति। सोऽस्मान्रक्षेत्।" (citragrīva uvāca — "mama sakhā
   mūṣako 'sti. so 'smān rakṣet.") / चित्रग्रीवः उवाच — "मम सखा मूषकः अस्ति। सः अस्मान् रक्षेत्।"
   (citragrīvaḥ uvāca — "mama sakhā mūṣakaḥ asti. saḥ asmān rakṣet.") "Citragrīva said: 'My friend
   is a mouse. He would protect us.'" — चित्रग्रीव ने कहा — "मेरा मित्र एक चूहा है। वह हमारी रक्षा
   करेगा।"
5. चित्रग्रीवः पुनरवदत् — "तस्य नाम हिरण्यकः। स मे सखा, अहं च तस्य सखा।" (citragrīvaḥ punar
   avadat — "tasya nāma hiraṇyakaḥ. sa me sakhā, ahaṃ ca tasya sakhā.") / चित्रग्रीवः पुनः अवदत् —
   "तस्य नाम हिरण्यकः। सः मे सखा, अहम् च तस्य सखा।" "Citragrīva said again: 'His name is Hiraṇyaka.
   He is my friend, and I am his.'" — चित्रग्रीव ने फिर कहा — "उसका नाम हिरण्यक है। वह मेरा मित्र है,
   और मैं उसका मित्र हूँ।"
6. एकः कपोतोऽपृच्छत् — "भवतः सखा कुत्र निवसति?" (ekaḥ kapoto 'pṛcchat — "bhavataḥ sakhā kutra
   nivasati?") / एकः कपोतः अपृच्छत् — "भवतः सखा कुत्र निवसति?" "One dove asked: 'Where does your
   friend live, sir?'" — एक कबूतर ने पूछा — "आपका मित्र कहाँ रहता है?"
7. नृपोऽवदत् — "स विवरे निवसति। तत्र गच्छामः। मया सहागच्छत!" (nṛpo 'vadat — "sa vivare
   nivasati. tatra gacchāmaḥ. mayā sahāgacchata!") / नृपः अवदत् — "सः विवरे निवसति। तत्र गच्छामः।
   मया सह आगच्छत!" "The king said: 'He lives in a burrow. Let us go there. Come with me!'" — राजा ने
   कहा — "वह बिल में रहता है। वहाँ चलें। मेरे साथ आओ!"
8. कपोतास्तस्य वचनमशृण्वन्। (kapotās tasya vacanam aśṛṇvan.) / कपोताः तस्य वचनम् अशृण्वन्।
   (kapotāḥ tasya vacanam aśṛṇvan.) "The doves listened to his words." — कबूतरों ने उसकी बात सुनी।
   (अशृण्वन्: R4, labelled as in v3.c03.l04 — "they heard"; this time they listen.)

Seams (Teacher Notes key): l.1 कपोताः + ज → आ; सह + आ → सवर्णदीर्घः; आकाशम् + अ → म written
together. l.2 कपोताः + न → आ; नृपम् + अ; इदानीम् + व → ं; वयम् + क → ं; किम् + क → ं (or the class
nasal ङ्). l.4 -अः + उ → अ (gap); मूषकः + अ → ओऽ; सः + अ → सोऽ; अस्मान् + र → written together. l.5
चित्रग्रीवः + प → ः stays; पुनः + अ → र्; सः + म → स; अहम् + च → ं. l.6 एकः + क → ः; कपोतः + अ → ओऽ.
l.7 नृपः + अ → ओऽ; सः + व → स; सह + आ → सहा. l.8 ः + त → स्त; वचनम् + अ. No join across the dash
or the quotation marks. पृच्छति (v3.c01.l01), कुर्मः (कृ ✓, v3.c03.l01), रक्षेत् (optative 3sg,
v3.c03.l04), उवाच (chunk), नाम frame (v1.c06.l02).

**§3 Station 0 (runs S0-an and S0-am, verbatim, row 0.30).** About 8 minutes. Item 1 (S0-an, +1 day
from v3.c04.l05): five joins, five splits; key 0.G. Item 2 (S0-am, +1 week from v3.c04.l04): the
thirteen joined lines; key 0.G. **Prompts** (one line each; review_of): (1) v1.c06.l02 — मम नाम …;
तव नाम किम्? (2) v2.c05.l03 — "I like milk": क्षीरम् मह्यम् रोचते; (3) v3.c01.l01/l03 — "He sees me;
I go with you": सः माम् पश्यति; अहम् त्वया सह गच्छामि; (4) v3.c03.l01 — "we go, you all go": वयम्
गच्छामः, यूयम् गच्छथ; (5) v2.c05.l02 / v3.c03.l04 — ask a guest to come in: आगच्छतु भवान्;
(6) v2.c01.l01 / v2.c01.l04 — say भद्रम् ते and श्रीमन्; v3.c01.l04 — call a friend: हे मित्र!

**§4 TRADITION callout** (8.1.22, row 0.5): "In Pāṇini's grammar the short forms are substitutes
(आदेशाः): 8.1.22 तेमयावेकवचनस्य says that in the singular ते and मे replace the dative and genitive
of त्वम् and अहम्. The Kāśikā's examples: ग्रामस्ते स्वम् 'the village is yours', ग्रामो मे दीयते 'a
village is given to me'. Neighbouring rules give वाम्, नौ (dual), वः, नः (plural) and त्वा, मा
(accusative singular)." [REF:ashtadhyayi 8.1.22] [REF:kashika 8.1.22]. (The two Kāśikā examples are
printed joined as quoted, glossed; दीयते R3.)

**§5 (Scientific Explanation):** short unaccented forms that cannot stand first and lean on the
preceding word are what linguists call *clitics* (FACT, general definition, no claim about Sanskrit
beyond Whitney §491b); English "I'm, you're" and Hindi have no exact equivalent of मे/ते — Hindi
मुझे is a full word that can start a sentence (मुझे फल चाहिए). Suppletion in "I/me", English and
Sanskrit alike (अहम् / माम् / मया — different roots, Whitney §491 "fragments coming from various
roots").

**§6 (Sanskrit Explanation), graded:** अहम्, त्वम् — एतयोः लिङ्गं नास्ति। मे, ते, नः, वः — एतानि
लघूनि रूपाणि; तानि वाक्यस्यादौ न तिष्ठन्ति। भवान् प्रथमपुरुषेण सह वदति। (each line joined, pause form
beneath; लिङ्गम्, रूपम्, आदिः: लिङ्गम् is a GLOSSARY term; रूपाणि and आदौ are glossed in the line.)
— the drafter keeps §6 to five lines and glosses every word not owned.

**§7 Hindi:** the parallels a–d (table 0.H), with grammar terms in their Hindi spellings (पुरुषवाचक
सर्वनाम, एकवचन, बहुवचन, लघु रूप).

**§9–§11:** the leaning words (row 0.29): फलं मे | रोचते; नमो वः said as one group; the
three-way भवति (is / in you / O lady) — the §9 minimal set with context sentences. IPA row:
/sʋɐjɐm/ /sɐkʰɑː/ /sn̪eːɦɐh/ /ʋiɕʋɑːsɐh/ /ɐsmɑːkɐm/ /jusmɑːkɐm/ → **ष**: /juʂmɑːkɐm/ ·
/bʱɐʋɑːn̪/ /bʱɐʋɐn̪t̪ɐh/ /mɐhjɐm/ /t̪ubʱjɐm/.

**§12 Common mistakes (six rows):** (1) a short form first: *मे फलं रोचते → फलं मे रोचते (English and
Hindi speakers both start with "me/मुझे"); (2) भवान् with the 2nd person: *भवान् गच्छसि → भवान्
गच्छति (Hindi आप + plural verb pulls the other way, table 0.H b); (3) मम made to agree like मेरा/मेरी:
*ममा माता → मम माता (the genitive never changes); (4) one Hindi मुझे for two Sanskrit cells: *माम्
पुस्तकं ददाति → मह्यम् (or मे) पुस्तकं ददाति; (5) भवति "in you" read as "is" (or the reverse) — read
the sentence for its verb; (6) dative and ablative plural treated as one, as in nouns: *अस्मभ्यम्
आगच्छति "comes from us" → अस्मत् (◐: the learner is told, not drilled; the row teaches the free-facts
exception) — **row 6 is a §12 warning only; no exercise asks for अस्मत्**.

**Exercises (§18; with keys; placement):**
- *Ex 1 (obj. 1; class, 5 min — oral):* complete with the right cell of अहम् or त्वम्, six items: गुरुः
  ___ पश्यति ("me") · ___ सह गच्छामि ("with you") · फलम् ___ रोचते ("to me", full form) · ___ गृहम् ("our")
  · गुरुः ___ पश्यति ("you all") · ___ विना ("without us"). **Key:** माम् (मा ◐ also correct, not
  required) · त्वया · मह्यम् · अस्माकम् (नः also correct: अस्माकं गृहम्; *नः गृहम् first is wrong — the
  key accepts गृहं नः) · युष्मान् (वः also correct after गुरुः) · अस्माभिः.
- *Ex 2 (obj. 2; class, 4 min):* full form → short form where allowed, six items; one where it is not
  allowed: (a) गुरुः मम पिता (→ गुरुर्मे पिता) (b) पुस्तकम् तुभ्यम् ददामि (→ पुस्तकं ते ददामि) (c) फलम्
  अस्माकम् रोचते? — **trick**: रोचते takes the dative: अस्मभ्यम् (◐) — **not used** (◐); replace (c) by
  "गृहम् अस्माकम्" (→ गृहं नः) (d) मह्यम् फलम् रोचते (→ no: मह्यम् first; reorder: फलं मे रोचते) (e) तव
  च मम च गृहम् (→ no short form: च is attached to the pronoun, row 0.6 b — **the key accepts either
  "no" or the full forms kept**; the item tests only rule (a)? — **drafter: drop (e); use (e) "युष्माकम्
  गुरुः आगच्छति" → गुरुर्वः आगच्छति, reordered**) (f) नमः तुभ्यम् (→ नमस्ते). **Key** as given; each
  accepts the joined or the pause form of the answer.
- *Ex 3 (obj. 2; homework, 5 min — production):* write the three-line proof for नमस्ते, then the same
  for नमो वः (key: S0-aq's key, 0.G).
- *Ex 4 (obj. 3; class, 8 min — speaking, pairs):* the §16 role-play, then the woman-guest and
  two-guest versions; six required lines each (ask where from, ask for the daughter/son, offer a seat,
  thank, offer food, say goodbye with नमस्ते / नमो वः). **Rubric:** 1 per line with the right person of
  the verb with भवान्/भवती/भवन्तौ, ½ if the verb is right and one pronoun cell wrong.
- *Ex 5 (obj. 3; class, 4 min):* six blanks with a cell of भवत्/भवती: ___ नाम किम्? ("your", to a man)
  → भवतः · ___ सह गच्छामि ("with you, sir") → भवता · फलम् ___ ("for you, madam") → भवत्यै · ___
  आगच्छन्तु ("you, sirs") → भवन्तः · ___ ग्रामः ("your, sirs") → भवताम् · ___ पश्यामि ("you, sir",
  acc.) → भवन्तम्. **Key** as given (भवतः also accepts तव? **No** — the prompt says polite).
- *Ex 6 (obj. 4; homework, 10 min — writing):* a six-line dialogue "meeting a friend's parent",
  joined with the pause form beneath, using at least one short form, भवान् or भवती, and one plural
  cell of अहम्. **Key:** a model answer (the §16 turns 2, 4, 7, 9, 10, 12) and a checklist (joins by
  Chapter 4's rules; verb person; short form not first).
- *Ex 7 (obj. 1; homework, 5 min — listening):* 🔊 `v3c05l01-leaning-words.mp3`, six sentences in this
  order: फलं मे रोचते · नमो वः · गुरुर्नः पश्यति · स मां पश्यति · भवान्कुत आगच्छति · अस्माकं गृहम्; write
  each, then mark the short form and the word it leans on. **Key:** the same six with मे/फलं, वः/नमो,
  नः/गुरुर्, (none: मां is full), (none), (none).

**Quiz (§19; 10 items; key in `<details>`; register):**
1. "To me" in फलम् ___ रोचते — (a) माम् (b) मया (c) मे (d) मम — **c** (मह्यम् also right, not an option)
   · FACT.
2. Which sentence is wrong? (a) गुरुर्मे पिता (b) मे गुरुः पिता (c) मम गुरुः पिता (d) गुरुः मम पिता —
   **b** · FACT.
3. भवान् ___ — (a) गच्छसि (b) गच्छति (c) गच्छथ (d) गच्छामि — **b** · FACT.
4. "Our village": (a) अस्माकम् ग्रामः (b) अस्माभिः ग्रामः (c) अस्मान् ग्रामः (d) वयम् ग्रामः — **a** · FACT.
5. "With you all": (a) युष्माभिः सह (b) युष्मान् सह (c) युष्माकम् सह (d) यूयम् सह — **a** · FACT.
6. नमस्ते: its ते is (a) the nominative "they" (b) the short dative "to you" (c) the plural "you all"
   (d) a verb ending — **b** · FACT.
7. According to Pāṇini (8.1.22), ते and मे stand for (a) the singular dative and genitive (b) the
   nominative (c) the plural (d) the vocative — **a** · TRADITION ("According to …").
8. "Your (madam's) daughter": (a) भवत्याः पुत्री (b) भवतः पुत्री (c) भवती पुत्री (d) भवताम् पुत्री — **a**
   (भवतः is "sir's"; भवताम् "your honours'") · FACT.
9. "Friend!" (calling): (a) सखा (b) सखे (c) सखायम् (d) सख्युः — **b** · FACT. (सखायम्, सख्युः are ◐
   cells shown as **wrong options** — they are taught as displays in this lesson (row 0.9), so they
   are not untaught forms; they are never required.)
10. In भवान्कुत आगच्छति, भवान् and कुत are written together because (a) भवान् ends in a consonant
    (b) they are a compound (c) कुतः lost its visarga (d) both are pronouns — **a** · FACT (STYLE_GUIDE
    §3.1 / c04).

**§20 Bookings:** S0-ap (+1 day, run by l02) and S0-aq (+1 week, run by l03), verbatim (row 0.30).
Revision box: tables 0.A (✓ cells) and 0.B (listed cells); the short-form rule; 8.1.22; the R6 card;
सखा, सखे; ledger 464, cells drilled 40.

**§21 Homework (35 minutes = self_study_minutes):** Ex 3 (5) · Ex 6 (10) · Ex 7 (5) · fill the blank
table 0.A from memory and check it (8) · read §17 aloud joined, once slowly, once at natural pace,
recorded (4) · real-world task: greet a family member in Sanskrit with नमो वः or नमस्ते and explain
the ते to them in Hindi (3).

**§22 Class timing (45 min):** Station 0 and prompts (8) → §1 hook + §8 steps 1–4 (8) → step 5: the
learner fills table 0.A (5) → Ex 1 (5) → Ex 2 (4) → §16 read and the role-play, Ex 4 (8) → Ex 5 (4)
→ quiz §19 (3, the remaining items in homework? **No** — the quiz is done in class in 3 minutes as a
quick-fire oral check; self-scoring after class is part of Ex 7's time) — **the drafter checks the
sum: 8 + 8 + 5 + 5 + 4 + 8 + 4 + 3 = 45**. §17 is read in homework. Teacher Notes also print: the
serial departures (table 0.I rows 1–5); the Kāśikā line; 8.1.18, 8.1.20–21, 8.1.23–24; Whitney's
view of भवत् (row 0.7); the vocative भवति (◐) with *bhavati bhikṣāṃ dehi* **not** printed (no locus
checked).

**Payoff (plan):** मम, तव, मह्यम्, तुभ्यम्, माम् take their places in two tables; भद्रम् ते and
नमस्ते's ते are short datives; भवान् takes the 3sg because it is grammatically "Your Honour"; the
नमस्ते thread closes. **Main risk:** short forms used first; भवति "in you" vs "is" (§12, quiz 2).

---

## 2. L2 — सः अयम् यः: This, That, Which (grammar)

**Front matter.** id `v3.c05.l02` · file `lesson-02-this-that-which.md` · title sa सः अयम् यः ·
sa_iast *saḥ ayam yaḥ* · en "This, That, Which" · hi "वह, यह, जो — सर्वनाम की रूपावली" ·
lesson_type: grammar · cefr A2 · duration_minutes 45 · self_study_minutes **40** · prerequisites
[v3.c05.l01] · review_of [v3.c05.l01, v3.c04.l05, v3.c01.l05, v3.c02.l01, v3.c02.l02, v3.c02.l04,
v2.c02.l02, v2.c06.l01, v1.c06.l04, v1.c05.l04] · vocabulary_count **8** · tags [grammar,
pronouns, pronominal-declension, tad, idam, delta-cards, indefinites, sarvanama, suppletion,
joined-text, spaced-review] · media (planned): images `v3c05l02-tad-table.svg`,
`v3c05l02-delta-cards.svg`, `v3c05l02-idam-stems.svg`; audio `v3c05l02-model-sentences.mp3`,
`v3c05l02-conversation.mp3`, `v3c05l02-story.mp3`; worksheets `v3c05l02-pronoun-family.pdf`.

**Objectives:**
1. en "Produce every cell of सः, सा, तत् and of एषः, एषा, एतत् on demand." · hi "सः, सा, तत् और
   एषः, एषा, एतत् का हर रूप माँगने पर बनाएँ।"
2. en "Decline यद्, किम् (feminine included), सर्व, अन्य and एक from the तद् table, naming the cells
   where each differs (सर्वम्, अन्यत्, सर्वे)." · hi "यद्, किम् (स्त्रीलिंग सहित), सर्व, अन्य और एक को तद्
   की तालिका से बनाएँ, और बताएँ कि कहाँ भिन्न हैं (सर्वम्, अन्यत्, सर्वे)।"
3. en "Use अयम्, इयम्, इदम् and their key cells (the nominatives and accusatives, अनेन, अस्य, अस्याः,
   अस्मिन्) in sentences." · hi "अयम्, इयम्, इदम् और उनके मुख्य रूपों का वाक्यों में प्रयोग करें।"
4. en "Begin a story with कश्चित् … आसीत् and build the indefinites कश्चित्, काचित्, किञ्चित्, कोऽपि,
   कापि, किमपि." · hi "कथा का आरम्भ कश्चित् … आसीत् से करें और अनिश्चयवाचक रूप बनाएँ।"

**The one grammar point:** the pronominal declension — the ending set shared by तद्, एतद्, यद्,
किम्, सर्व, अन्य, एक (1.1.27), with इदम् as its irregular member. The relative sentence is l03's (G6).

**Six steps (§8):**
1. **Scene:** a classroom with a photograph of a family (§16).
2. **The question:** "this one", "that one", "all", "another", "someone" — and why सर्वे भवन्तु सुखिनः
   says सर्वे, not *सर्वाः like रामाः?
3. **Evidence (owned, grep-checked):** सः तस्य (v1.c06.l03), तत् (v1.c05.l01), एतत् (v1.c06.l02),
   एषः/एषा (v2.c02.l02), कः/किम् (v1.c02.l06, v1.c05.l01) and their cells कम् केन कस्मै कस्मात् कस्य
   कस्मिन् (v3.c01.l01–l04), सः/तम्/तेन/तस्मै/तस्मात्/तस्य/तस्मिन् (v3.c01), the plural ते तान् तैः तेभ्यः
   तेषाम् तेषु (v3.c02.l01), सा/ताः/तस्याः (v3.c02.l02), का (v1.c06.l02 त्वम् का?), सर्वम् (v2.c01.l02
   सर्वं कुशलम्), सर्वे (v1.c06.l04 the benediction; glossed v3.c03.l04), सर्व (v1.c05.l04), एक (v1.c02.l04),
   कश्चित् (display v2.c06.l01; inside the benediction, v1.c06.l04), तस्मिन् (v3.c01.l02; serial
   तस्मिन्वृक्षे), अस्मिन् (display v3.c04.l03).
4. **Pattern named:** one ending set, -स्मै -स्मात् -स्मिन्, -स्यै -स्याः -स्याम्, -त् in the neuter,
   -े in the m. nom. pl., -षाम्/-साम्; two stems in सः/त- (IR-025); सर्वनाम = "the सर्व-words" (1.1.27).
5. **Table assembled:** the learner builds table 0.C from owned cells (no new cell), then each Δ card.
6. **Production:** Ex 2–6, §16.

**Forms taught:** tables 0.C, 0.D; the Δ cards (row 0.11); the indefinites (row 0.14); 1.1.27 (row
0.13); IR-025 line (row 0.10). **Cells drilled: 34** (row 0.C note).

**Headwords (8; ledger 464 → 472):**

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status | Check |
|---|---|---|---|---|---|---|---|
| अयम् | ayam | /ɐjɐm/ | this (m.; f. इयम्, n. इदम्) | यह | pron. (इदम्) | ledger-new (rule 6: m. nom. sg.) | MW *idam* (*ayam, iyam, idam*); Whitney §501; Apte: under इदम् (Pass C locates the entry) |
| यः | yaḥ | /jɐh/ | who, which (relative; f. या, n. यत्) | जो | rel. pron. (यद्) | ledger-new | Apte s.v. यद् "(Nom. sing. m. यः, f. या, n. यत्-द्) The relative pronoun"; Whitney §§508–509 |
| अन्यः | anyaḥ | /ɐn̪jɐh/ | other, another (n. अन्यत्) | अन्य, दूसरा | pron. adj. -न्या -न्यत् | ledger-new | Apte s.v. अन्य "[अन्यः, ˚न्यस्मै …; n. अन्यत्] Another"; Whitney §523 |
| परः | paraḥ | /pɐɾɐh/ | other, another; stranger; further | पराया, दूसरा | adj. -रा -रम् (D25) | ledger-new | Apte s.v. पर "(Declined optionally like a pronoun …)"; Hit 1.71 *paro vā* |
| कश्चित् | kaścit | /kɐɕt͡ɕit̪/ | someone, a certain (one) | कोई | indef. (f. काचित्, n. किञ्चित्) | ledger-new (rule 15) | Whitney §507; MW under *ka* (no own headword: plan G19) |
| कदाचित् | kadācit | /kɐd̪ɑːt͡ɕit̪/ | once, at some time; sometimes | कभी, एक बार | indeclinable | ledger-new (rule 15) | Whitney §1103b *kadācid divase*; MW under *kadā* |
| स्वः | svaḥ | /sʋɐh/ | own, one's own | अपना | adj. -स्वा -स्वम् | ledger-new | Apte s.v. स्व "One's own, belonging to oneself"; Whitney §516e; §12 warning: स्वः "we two are" (अस्, c03.l01) is another word |
| निजः | nijaḥ | /n̪id͡ʑɐh/ | own, one's own; native, innate | निज, अपना | adj. -जा -जम् | ledger-new | Apte s.v. निज "Innate, indigenous, native … own"; MW *ni-ja* "of one's own party"; Hit 1.71 *ayaṃ nijaḥ* |

**Model sentences (§13; joined, pause form, English — Hindi):**
1. अयं मम भ्राता। इयं मम भगिनी। इदं मम गृहम्। (ayaṃ mama bhrātā. iyaṃ mama bhaginī. idaṃ mama
   gṛham.) / अयम् मम भ्राता। इयम् मम भगिनी। इदम् मम गृहम्। "This is my brother. This is my sister.
   This is my house." — यह मेरा भाई है। यह मेरी बहन है। यह मेरा घर है।
2. सर्वे छात्रा अत्र सन्ति। (sarve chātrā atra santi.) / सर्वे छात्राः अत्र सन्ति। "All the students
   are here." — सब छात्र यहाँ हैं।
3. कश्चिन्नृप आसीत्। (kaścin nṛpa āsīt.) / कश्चित् नृपः आसीत्। (kaścit nṛpaḥ āsīt.) "There was a
   certain king." — कोई एक राजा था। (त् before न → न्, c04's ◐ seam, read; कश्चिद्नृपः also correct —
   label printed; the opener v2.c06.l01 promised)
4. तस्मिन्वन एकः सिंह आसीत्। (tasmin vana ekaḥ siṃha āsīt.) / तस्मिन् वने एकः सिंहः आसीत्। (tasmin
   vane ekaḥ siṃhaḥ āsīt.) "In that forest there was a lion." — उस वन में एक सिंह था।
5. एष मम ग्रामः, स त्वन्यो ग्रामः। (eṣa mama grāmaḥ, sa tv anyo grāmaḥ.) / एषः मम ग्रामः, सः तु
   अन्यः ग्रामः। (eṣaḥ mama grāmaḥ, saḥ tu anyaḥ grāmaḥ.) "This is my village; that one is another
   village." — यह मेरा गाँव है, वह तो दूसरा गाँव है।
6. कपोताः स्वं वृक्षमगच्छन्। (kapotāḥ svaṃ vṛkṣam agacchan.) / कपोताः स्वम् वृक्षम् अगच्छन्।
   (kapotāḥ svam vṛkṣam agacchan.) "The doves went to their own tree." — कबूतर अपने पेड़ पर गए।

Further §13 (same layout): कदाचित्सिंहो मूषकमपश्यत्। (kadācit siṃho mūṣakam apaśyat.) /
कदाचित् सिंहः मूषकम् अपश्यत्। "Once a lion saw a mouse." — एक बार एक सिंह ने चूहे को देखा। ·
सर्वस्मै फलं ददाति। (sarvasmai phalaṃ dadāti.) / सर्वस्मै फलम् ददाति। "He gives fruit to everyone." ·
अनेन सह गच्छ। (anena saha gaccha.) / the same in pause form "Go with this one." · अस्य नाम किम्?
अस्याः नाम किम्? (asya nāma kim? asyāḥ nāma kim?) "What is his name? What is her name?" · न
कोऽपि लघुः। (owned, v2.c06.l02).

**§16 Conversation — "Who is this?"** (12 turns; joined + IAST; pause + IAST; English — Hindi;
🔊 `v3c05l02-conversation.mp3`, turns 1–12 in order):
1. गुरुः — अयं कः? (ayaṃ kaḥ?) / अयम् कः? "Who is this?" — यह कौन है?
2. सीता — अयं मम भ्राता। तस्य नाम रामः। (ayaṃ mama bhrātā. tasya nāma rāmaḥ.) / अयम् मम
   भ्राता। तस्य नाम रामः। "This is my brother. His name is Rāma." — यह मेरा भाई है। उसका नाम राम है।
3. गुरुः — इयं का? (iyaṃ kā?) / इयम् का? "And who is this?" — यह कौन है?
4. अर्जुनः — इयं सीताया भगिनी। (iyaṃ sītāyā bhaginī.) / इयम् सीतायाः भगिनी। "This is Sītā's
   sister." — यह सीता की बहन है।
5. गुरुः — इदं पुस्तकं कस्य? (idaṃ pustakaṃ kasya?) / इदम् पुस्तकम् कस्य? "Whose is this book?" —
   यह किताब किसकी है?
6. सीता — मम पुस्तकं तत्। (mama pustakaṃ tat.) / मम पुस्तकम् तत्। "That is my book." — वह मेरी
   किताब है।
7. गुरुः — अन्यत्पुस्तकं कुत्र? (anyat pustakaṃ kutra?) / अन्यत् पुस्तकम् कुत्र? "Where is the other
   book?" — दूसरी किताब कहाँ है?
8. अर्जुनः — अन्यत्पुस्तकं मम गृहेऽस्ति। (anyat pustakaṃ mama gṛhe 'sti.) / अन्यत् पुस्तकम् मम गृहे
   अस्ति। "The other book is at my house." — दूसरी किताब मेरे घर पर है।
9. गुरुः — सर्वे छात्राः स्वानि पुस्तकानि पठन्तु। (sarve chātrāḥ svāni pustakāni paṭhantu.) / the
   same in pause form. "Let all the students read their own books." — सब छात्र अपनी-अपनी किताबें
   पढ़ें।
10. सीता — वयं किं पठामः? (vayaṃ kiṃ paṭhāmaḥ?) / वयम् किम् पठामः? "What are we reading?" — हम
    क्या पढ़ें?
11. गुरुः — सिंहस्य मूषकस्य च कथाम्। (siṃhasya mūṣakasya ca kathām.) / the same. "The story of
    the lion and the mouse." — सिंह और चूहे की कथा।
12. अर्जुनः — सा कथा मे प्रिया! (sā kathā me priyā!) / सा कथा मे प्रिया! "That story is dear to me!" —
    वह कथा मुझे प्रिय है!

(Turn 6 avoids तन्मम: त् + nasal is ◐ in c04. Turn 9: स्वानि, स्व as a plain adjective (row 0.11).
कथा owned v1.c03.l04; मूषकस्य … च: two genitives with one च.)

**§17 Story — serial episode 5, part 2: "Who is this mouse?"** — label as l01; 🔊
`v3c05l02-story.mp3`. Nine lines (joined + IAST; pause + IAST; English — Hindi):
1. आकाशे सर्वे कपोता नृपेण सहागच्छन्। (ākāśe sarve kapotā nṛpeṇa sahāgacchan.) / आकाशे सर्वे
   कपोताः नृपेण सह अगच्छन्। (ākāśe sarve kapotāḥ nṛpeṇa saha agacchan.) "In the sky all the doves
   went along with the king." — आकाश में सब कबूतर राजा के साथ चले।
2. एकः कपोतोऽपृच्छत् — "एको मूषकोऽस्मान्कथं रक्षेत्?" (ekaḥ kapoto 'pṛcchat — "eko mūṣako 'smān
   kathaṃ rakṣet?") / एकः कपोतः अपृच्छत् — "एकः मूषकः अस्मान् कथम् रक्षेत्?" "One dove asked: 'How
   could one mouse protect us?'" — एक कबूतर ने पूछा — "एक चूहा हमारी रक्षा कैसे करेगा?"
3. चित्रग्रीव उवाच — "तस्य मूषकस्य बुद्धिरेव बलम्।" (citragrīva uvāca — "tasya mūṣakasya buddhir
   eva balam.") / चित्रग्रीवः उवाच — "तस्य मूषकस्य बुद्धिः एव बलम्।" "Citragrīva said: 'That
   mouse's strength is his wits.'" — चित्रग्रीव ने कहा — "उस चूहे की बुद्धि ही उसका बल है।"
4. "एते पाशास्तस्मै लघवः।" (ete pāśās tasmai laghavaḥ.) / "एते पाशाः तस्मै लघवः।" "'These snares
   are light work for him.'" — "ये फंदे उसके लिए हल्के हैं।"
5. अन्यः कपोतोऽपृच्छत् — "तस्य विवरं कस्मिन्देशे?" (anyaḥ kapoto 'pṛcchat — "tasya vivaraṃ
   kasmin deśe?") / अन्यः कपोतः अपृच्छत् — "तस्य विवरम् कस्मिन् देशे?" "Another dove asked: 'In which
   place is his burrow?'" — दूसरे कबूतर ने पूछा — "उसका बिल किस जगह है?"
6. नृपोऽवदत् — "नद्यास्तीरे। तत्रैको वृक्षोऽस्ति, तस्य समीपे तस्य विवरम्।" (nṛpo 'vadat — "nadyās
   tīre. tatraiko vṛkṣo 'sti, tasya samīpe tasya vivaram.") / नृपः अवदत् — "नद्याः तीरे। तत्र एकः
   वृक्षः अस्ति, तस्य समीपे तस्य विवरम्।" "The king said: 'On the river bank. There is a tree there;
   near it is his burrow.'" — राजा ने कहा — "नदी के किनारे। वहाँ एक पेड़ है, उसके पास उसका बिल है।"
7. एकः कपोतोऽवदत् — "स परः, अस्माकं निजो न।" (ekaḥ kapoto 'vadat — "sa paraḥ, asmākaṃ nijo
   na.") / एकः कपोतः अवदत् — "सः परः, अस्माकम् निजः न।" "One dove said: 'He is an outsider, not one
   of our own.'" — एक कबूतर बोला — "वह पराया है, हमारा अपना नहीं।"
8. चित्रग्रीवोऽवदत् — "मित्रं परो न भवति।" (citragrīvo 'vadat — "mitraṃ paro na bhavati.") /
   चित्रग्रीवः अवदत् — "मित्रम् परः न भवति।" "Citragrīva said: 'A friend is no outsider.'" —
   चित्रग्रीव ने कहा — "मित्र पराया नहीं होता।"
9. ततः सर्वे कपोतास्तस्य वचनमशृण्वन्। (tataḥ sarve kapotās tasya vacanam aśṛṇvan.) / ततः सर्वे
   कपोताः तस्य वचनम् अशृण्वन्। "Then all the doves listened to his words." — तब सब कबूतरों ने उसकी
   बात सुनी।

Craft note (Teacher Notes): lines 7–8 prepare Hit 1.71 (*ayaṃ nijaḥ paro veti gaṇanā
laghucetasām*, c06.l04) without quoting it; line 3 recalls the crow story's moral (बुद्धिरेव बलम्).
Seams: l.1 कपोताः + न → आ; सह + अ → सहा; l.2 एकः + म → ओ; मूषकः + अ → ओऽ; अस्मान् + क → together;
कथम् + र → ं; l.3 बुद्धिः + ए → र्; l.4 पाशाः + त → स्त; l.5 विवरम् + क → ं; कस्मिन् + द → together; l.6
नद्याः + त → स्त; तत्र + ए → ऐ; एकः + व → ओ; वृक्षः + अ → ओऽ; अस्ति before the comma; l.7 सः + प →
स; परः before the comma; अस्माकम् + न → ं; निजः + न → ओ; l.8 मित्रम् + प → ं; परः + न → ओ; l.9 ततः +
स → ः; कपोताः + त → स्त. Departures: table 0.I rows 2–3 (the place of the burrow).

**§3 Station 0 (runs S0-ap and S0-ao, verbatim).** About 8 minutes; keys 0.G. **Prompts:** (1)
v3.c01.l05 — the singular pronoun column of कः and सः; (2) v3.c02.l01 — "those (m.) boys": ते बालकाः,
तान् बालकान्; (3) v3.c02.l02 — "that girl, her book": सा बालिका, तस्याः पुस्तकम्; (4) v3.c02.l04 — the
two doves: तौ कपोतौ; (5) v2.c02.l02 — this man, this woman: एषः, एषा; (6) v1.c06.l04 — recite सर्वे
भवन्तु सुखिनः …; v1.c05.l04 — सर्व "all".

**§4 TRADITION callout** (1.1.27, row 0.13): "Pāṇini's word for 'pronoun' is सर्वनाम, 'the
सर्व-name': 1.1.27 सर्वादीनि सर्वनामानि — 'सर्व and the words listed after it are called सर्वनाम'.
The Kāśikā illustrates it with सर्वः सर्वौ सर्वे, सर्वस्मै, सर्वस्मात्, सर्वेषाम् — the very cells in which
सर्व leaves the pattern of रामः." [REF:ashtadhyayi 1.1.27] [REF:kashika 1.1.27].

**§5:** suppletion as a general fact of languages (English *go/went*, *I/me*; Sanskrit सः/त-, अयम्/इम-/
अन-; Whitney §495a, §502a); pronouns as a closed class.

**§6, §7:** as l01 (Hindi parallels e, f; Hindi school grammar's names निश्चयवाचक (यह, वह),
अनिश्चयवाचक (कोई, कुछ), सम्बन्धवाचक (जो), प्रश्नवाचक (कौन, क्या), निजवाचक (आप, ख़ुद), पुरुषवाचक —
TRADITION, [REF:guru1952] bare, one sentence, **Pass C confirms the six names in Guru** (open item 1)).

**§9–§11:** the stress-light pronoun before its noun (तस्मिन्वने); the ṣ of एषः, एतेषाम्, तेषाम्, इमेषाम्?
— **no: the form is एषाम्** (इदम्, ◐); keep तेषाम्, एतेषाम्; the s of तासाम्, तासु (after आ: no ṣ). IPA:
/ɐjɐm/ /ijɐm/ /id̪ɐm/ /jɐh/ /ɐn̪jɐh/ /pɐɾɐh/ /kɐɕt͡ɕit̪/ /kɐd̪ɑːt͡ɕit̪/ /sʋɐh/ /n̪id͡ʑɐh/ /t̪ɐsmɐi̯/ /t̪ɐsjɐi̯/.

**§12 (six rows):** (1) *सर्वाः for the m. pl. (the a-noun pattern रामाः) → सर्वे (सर्वाः is right for
the feminine: सर्वाः बालिकाः); (2) *सर्वत् → सर्वम् (only अन्य has -त्: अन्यत्); (3) "स् → त् in the
obliques" (1.x, IR-025) → two stems, स- only in सः/सा; (4) *कोऽपि for "some woman" → कापि (का + अपि);
(5) अयम् with a feminine noun (*अयम् बालिका) → इयम् बालिका (Hindi यह has no gender, table 0.H e);
(6) स्वः "own" vs स्वः "we two are" (c03.l01): read the sentence — स्वं गृहम् vs आवाम् स्वः.

**Exercises (§18):**
- *Ex 1 (obj. 1; class, 5 min):* the table 0.C from memory, then six cells on demand: सा, dat. → तस्यै
  · तत्, instr. → तेन · सः, gen. pl. → तेषाम् · सा, gen. pl. → तासाम् · एषा, acc. → एताम् · एतत्, nom. pl. →
  एतानि. **Key** as given.
- *Ex 2 (obj. 2; class, 6 min):* Δ cells, six: सर्व m. nom. pl. → सर्वे · सर्व n. nom. sg. → सर्वम् · अन्य n.
  nom. sg. → अन्यत् · किम् f. instr. → कया · एक m. loc. → एकस्मिन् · यद् f. gen. sg. → यस्याः. **Key** as given.
- *Ex 3 (obj. 2; homework, 6 min):* replace the noun phrase with the right form of सर्व or अन्य, six
  sentences (joined, pause form beneath): सर्वे बालकाः पठन्ति — "all girls" → सर्वा बालिकाः · "to all
  (m. sg.)" … **The drafter writes six; key accepts the joined or the pause form.**
- *Ex 4 (obj. 3; class, 6 min — speaking):* point and say, six objects/people in the room: अयम्/इयम्/
  इदम् + noun; then "with this (m.)" अनेन सह, "of this (f.)" अस्याः, "in this (m.)" अस्मिन्. **Key:** gender
  of each noun decides; ✓ cells only.
- *Ex 5 (obj. 4; class, 4 min):* build the indefinite, six: कः + चित् → कश्चित् · का + चित् → काचित् ·
  किम् + चित् → किञ्चित् (किंचित्) · कः + अपि → कोऽपि · का + अपि → कापि · किम् + अपि → किमपि. **Key.**
- *Ex 6 (obj. 4; homework, 8 min — writing):* a six-line story opening "कश्चित् … आसीत्।" with
  कदाचित्, अयम् or सः, and one Δ cell, joined with pause form. **Key:** model + checklist.
- *Ex 7 (obj. 1, 3; homework, 4 min — listening):* 🔊 `v3c05l02-model-sentences.mp3`, models 1–6 in
  order; write each joined, then its pause form. **Key:** §13.

**Quiz (10; FACT unless marked):** 1. m. nom. pl. of सर्व: (a) सर्वाः (b) सर्वे (c) सर्वाणि (d) सर्वम् — **b**.
2. n. nom. sg. of अन्य: (a) अन्यम् (b) अन्यत् (c) अन्यः (d) अन्या — **b**. 3. The dative singular of सः:
(a) तस्मै (b) ताय (c) तस्यै (d) तेन — **a**. 4. "This girl": (a) अयम् बालिका (b) इयम् बालिका (c) इदम्
बालिका (d) एषः बालिका — **b**. 5. "With this (m.)": (a) अनेन (b) इमेन (c) अस्मै (d) अयेन — **a** (इमेन, अयेन:
error forms built from taught material — permitted wrong options). 6. Which is the 1.x error? (a) सः
and तम् come from two stems (b) "स् becomes त् in the oblique cases" (c) सा is feminine (d) तस्य is the
genitive — **b**. 7. "Some woman": (a) कोऽपि (b) कापि (c) किमपि (d) कश्चित् — **b**. 8. According to
Pāṇini (1.1.27), सर्वनाम names (a) every noun (b) सर्व and the words listed after it (c) only सः (d)
the verbs — **b** · TRADITION. 9. Gen. pl. f. of तद्: (a) तानाम् (b) तासाम् (c) तेषाम् (d) ताषाम् — **b**.
10. In कपोताः स्वं वृक्षमगच्छन्, स्वम् means (a) "we two are" (b) "own" (c) "heaven" (d) "self" — **b**
(स्वर्, "heaven", is not taught: **drafter replaces (c) by "their (pl. gen.)"**).

**§20 Bookings:** S0-ar (+1 day, l03), S0-as (+1 week, l04), verbatim. Ledger 472; cells drilled 34.

**§21 (40 min):** Ex 3 (6) · Ex 6 (8) · Ex 7 (4) · write table 0.C and the five Δ cards from memory, check
(10) · §17 read aloud joined, recorded (5) · read §15's इदम् table, mark the ◐ cells in pencil (4) ·
real-world: find यह/वह in a Hindi paragraph and give the Sanskrit with the right gender (3).

**§22 timing (45):** Station 0 + prompts (8) → §8 steps 1–4 (7) → step 5: table 0.C built (5) → Ex 1 (5)
→ Δ cards (§15) + Ex 2 (6) → इदम् key cells + Ex 4 (6) → Ex 5 (4) → §16 read in pairs (2) → quiz (2,
quick-fire) = 45. **Teacher Notes:** एनम्/एनेन (Whitney §500); 7.1.25; 1.1.34–35 (पर, स्व; Whitney
§525c, Apte s.v. पर); अदस् not taught; Kāśikā on 1.1.27; serial departures.

**Payoff (plan):** सर्वे भवन्तु सुखिनः — why सर्वे; एषः/एषा are एतद्; तस्य, तस्मिन्, कस्य stop being
exceptions; कश्चित् opens stories; the सः seam (6.1.132) belongs to a real paradigm. **Main risk:**
इदम्'s stems — production stops at the key cells.

---

## 3. L3 — अव्ययानि: The Words That Never Change (vocabulary)

**Front matter.** id `v3.c05.l03` · file `lesson-03-words-that-never-change.md` · title sa
अव्ययानि · sa_iast *avyayāni* · en "The Words That Never Change" · hi "अव्यय — जो शब्द कभी नहीं
बदलते" · lesson_type: vocabulary · cefr A2 · duration_minutes 45 · self_study_minutes **40** ·
prerequisites [v3.c05.l02] · review_of [v3.c05.l02, v3.c05.l01, v1.c02.l06, v1.c05.l03, v1.c05.l05,
v2.c05.l01, v2.c05.l02, v2.c01.l02, v2.c06.l02, v3.c03.l04, v3.c04.l01, v3.c04.l02] ·
vocabulary_count **8** · tags [vocabulary, indeclinables, avyaya, correlatives, relative-clause,
particles, upasarga, joined-text, spaced-review] · media (planned): images
`v3c05l03-correlative-grid.svg`, `v3c05l03-upasarga-card.svg`; audio `v3c05l03-grid-chant.mp3`,
`v3c05l03-conversation.mp3`, `v3c05l03-story.mp3`; worksheets `v3c05l03-relative-pairs.pdf`.

**Objectives:**
1. en "Fill the correlative grid (place, from where, time, manner across क-, इ-/अ-, त-, य-, सर्व-) from
   memory and use any word of it in a sentence." · hi "सहसम्बन्धी तालिका स्मृति से भरें और उसके किसी भी
   शब्द को वाक्य में प्रयोग करें।"
2. en "Join two sentences into one with यः … सः, यत्र … तत्र, यदा … तदा or यथा … तथा, the relative
   clause first." · hi "दो वाक्यों को यः … सः, यत्र … तत्र, यदा … तदा या यथा … तथा से एक वाक्य बनाएँ,
   सम्बन्धवाचक उपवाक्य पहले।"
3. en "Place the particles च, वा, हि, तु, एव, इव, अपि correctly (never च, वा, हि, तु first) and say
   'under the tree' with अधः + genitive." · hi "निपातों को ठीक स्थान पर रखें और अधः + षष्ठी से 'पेड़ के
   नीचे' कहें।"
4. en "Read the upasarga card: name the prefix in six owned verbs and say what अव्ययम् and उपसर्गः
   mean (1.1.37, 1.4.59)." · hi "उपसर्ग-पत्र पढ़ें: छह परिचित क्रियाओं में उपसर्ग पहचानें, और अव्यय तथा
   उपसर्ग का अर्थ बताएँ।"

(Objective 4 is recognition of the card's **owned** prefixed words only; the card itself has no
production target — D8. Naming the prefix in an owned word is a FACT about an owned word.)

**The one grammar point:** indeclinables (1.1.37): the correlative grid built on the pronoun stems,
and the relative–correlative sentence it serves (rows 0.15–0.16). One card rides with it: the
upasarga card (row 0.20; 1.4.59).

**Vocabulary-lesson shape** (as v2.c05.l01 and v3.c03.l04's chunk tables): §14 is the lesson's
centre — the eight headwords, then the grid table (0.E) with every owned word marked by its ledger
lesson; §8 groups by job (where · from where · when · how · some-/any- · particles · placed words);
§13 models; §15 the relative sentence and the cards; §16 a conversation that recycles the grid.

**Headwords (8; ledger 472 → 480):**

| देवनागरी | IAST | IPA | English | हिन्दी | class | status | Check |
|---|---|---|---|---|---|---|---|
| यदा | yadā | /jɐd̪ɑː/ | when (relative) | जब | ind. | ledger-new | Apte s.v. यदा "When, at the time when"; Whitney §1103b |
| तदा | tadā | /t̪ɐd̪ɑː/ | then, at that time | तब | ind. | ledger-new | Apte s.v. तदा "Then … (corr. of यदा)" |
| यथा | yathā | /jɐt̪ʰɑː/ | as; in which way | जैसे | ind. | ledger-new | Apte s.v. यथा; Whitney §1101a |
| तथा | tathā | /t̪ɐt̪ʰɑː/ | so, thus, in that way | वैसे, वैसा | ind. (and तथास्तु, तथापि) | ledger-new | Apte s.v. तथा "So, thus, in that manner"; display since v2.c05.l02, c04.l01 |
| एवम् | evam | /eːʋɐm/ | thus, so, in this way | ऐसे, इस प्रकार | ind. | ledger-new | MW *evam* "ind. … thus, in this way"; Apte: sub-entry (Pass C); Hit *maivam* (A6) |
| क्व | kva | /kʋɐ/ | where? | कहाँ | ind. | ledger-new | Apte s.v. क्व "Whither, where"; Whitney §505 |
| हि | hi | /ɦi/ | for, because; indeed | क्योंकि, ही | particle | ledger-new | Apte s.v. हि "(Never used at the beginning of a sentence)"; Whitney §1133c; उद्यमेन हि (v2.c06.l03) |
| अधः | adhaḥ | /ɐd̪ʱɐh/ | below, under (+ gen.) | नीचे | ind. | ledger-new | Apte s.v. अधस्, अधः ind.; Whitney §1130 |

**Model sentences (§13; joined, pause, English — Hindi):**
1. यः पठति स जानाति। (yaḥ paṭhati sa jānāti.) / यः पठति सः जानाति। "Whoever studies, knows." — जो
   पढ़ता है, वह जानता है।
2. यत्र वृक्षास्तत्र कपोताः। (yatra vṛkṣās tatra kapotāḥ.) / यत्र वृक्षाः तत्र कपोताः। "Where there are
   trees, there are doves." — जहाँ पेड़ हैं, वहाँ कबूतर हैं। (course sentence)
3. यदा गुरुरागच्छति तदा छात्रा उपविशन्ति। (yadā gurur āgacchati tadā chātrā upaviśanti.) / यदा
   गुरुः आगच्छति तदा छात्राः उपविशन्ति। "When the teacher comes, the students sit down." — जब गुरु
   आते हैं, तब छात्र बैठ जाते हैं।
4. यथा गुरुस्तथा शिष्यः। (yathā gurus tathā śiṣyaḥ.) / यथा गुरुः तथा शिष्यः। "As the teacher, so the
   student." — जैसा गुरु, वैसा शिष्य। (course sentence)
5. "क्व गच्छसि?" इति स तरोरधोऽपृच्छत्। ("kva gacchasi?" iti sa taror adho 'pṛcchat.) / "क्व
   गच्छसि?" इति सः तरोः अधः अपृच्छत्। "'Where are you going?' he asked, under the tree." — "कहाँ जा
   रहे हो?" उसने पेड़ के नीचे पूछा।
6. यो मूषकः पाशान्कृन्तति स मम सखा। (yo mūṣakaḥ pāśān kṛntati sa mama sakhā.) / यः मूषकः पाशान्
   कृन्तति सः मम सखा। "The mouse who cuts snares is my friend." — जो चूहा फंदे काटता है, वह मेरा
   मित्र है। (the serial's line, plan §1.5)

Further §13: यं पश्यसि स मम सखा। (yaṃ paśyasi sa mama sakhā.) / यम् पश्यसि सः मम सखा। "The one you
see is my friend." (each pronoun in its own clause's case, row 0.16) · या बालिका पठति सा मम भगिनी।
· यत्फलं रोचते तत्खाद। (yat phalaṃ rocate tat khāda.) / यत् फलम् रोचते तत् खाद। "Eat the fruit you
like." · मैवं वद। (maivaṃ vada.) / मा एवम् वद। "Don't speak so." · **Hitopadeśa 1.40 (display, the
grid in an authentic verse; Citragrīva speaks it):** यस्माच्च येन च यथा च यदा च यच्च यावच्च यत्र च
शुभाशुभमात्मकर्म। तस्माच्च तेन च तथा च तदा च तच्च तावच्च तत्र च विधातृवशादुपैति॥ — glossed: "From
whatever, by whatever, however, whenever, whatever, however much and wherever one's own good or bad
deed [is done] — from that, by that, so, then, that, so much and there it comes back, by the power of
fate." [REF:hitopadesha mitralābha 40]. Labels: यावत्/तावत् (v4.c04), शुभाशुभम्, आत्मकर्म, विधातृवशात्,
उपैति glossed; the verse is read, not drilled. (Text from `hitop_u.htm` l. 483–486; printed with the
e-text's word division, its *yāvac ca*, and with the joins as the e-text prints them — editions vary.)

**§15 cards:** table 0.E (grid); the relative sentence (row 0.16) with its two rules (relative first;
each pronoun in the case of its own clause; agreement with the noun pointed to); the particle rule
(row 0.17); the genitive-placed words (row 0.18); the upasarga card (row 0.20, read: 22 in a box, the
owned verbs beside it); 1.1.37 and 1.4.59 (row 0.19). **Cells drilled: 0** (the line says the grid
words drilled: 25).

**§16 Conversation — "Where and when?"** (10 turns; layout as l01; 🔊 `v3c05l03-conversation.mp3`,
turns 1–10):
1. अर्जुनः — सीते, क्व गच्छसि? (sīte, kva gacchasi?) / सीते, क्व गच्छसि? "Sītā, where are you going?"
   — सीता, कहाँ जा रही हो?
2. सीता — आपणं गच्छामि। यदा माता वदति तदाहं गच्छामि। (āpaṇaṃ gacchāmi. yadā mātā vadati tadāhaṃ
   gacchāmi.) / आपणम् गच्छामि। यदा माता वदति तदा अहम् गच्छामि। "To the market. When Mother says
   so, I go." — बाज़ार जा रही हूँ। जब माँ कहती हैं, तब मैं जाती हूँ।
3. अर्जुनः — अहमपि तत्रैव गच्छामि। (aham api tatraiva gacchāmi.) / अहम् अपि तत्र एव गच्छामि। "I'm
   going there too." — मैं भी वहीं जा रहा हूँ।
4. सीता — किमर्थम्? (kimartham?) / किमर्थम्? "Why?" — क्यों?
5. अर्जुनः — यत्र मधुराणि फलानि तत्र वयं बालकाः! (yatra madhurāṇi phalāni tatra vayaṃ bālakāḥ!) /
   यत्र मधुराणि फलानि तत्र वयम् बालकाः! "Where there are sweet fruits, there are we boys!" — जहाँ मीठे
   फल, वहाँ हम लड़के!
6. सीता — मैवं वद! (maivaṃ vada!) / मा एवम् वद! "Don't talk like that!" — ऐसा मत कहो!
7. अर्जुनः — यथा त्वं वदसि तथा करोमि। (yathā tvaṃ vadasi tathā karomi.) / यथा त्वम् वदसि तथा
   करोमि। "I'll do as you say." — जैसा तुम कहती हो, वैसा करूँगा।
8. सीता — आपणः कुत्रास्ति? (āpaṇaḥ kutrāsti?) / आपणः कुत्र अस्ति? "Where is the market?" — बाज़ार कहाँ
   है?
9. अर्जुनः — नद्यास्तीरे, विशालस्य वृक्षस्याधः। (nadyās tīre, viśālasya vṛkṣasyādhaḥ.) / नद्याः तीरे,
   विशालस्य वृक्षस्य अधः। "On the river bank, under the big tree." — नदी के किनारे, बड़े पेड़ के नीचे।
10. सीता — शीघ्रमागच्छ! त्वं हि सदा मन्दं गच्छसि। (śīghram āgaccha! tvaṃ hi sadā mandaṃ gacchasi.)
    / शीघ्रम् आगच्छ! त्वम् हि सदा मन्दम् गच्छसि। "Come quickly! For you always walk slowly." — जल्दी
    आओ! तुम तो हमेशा धीरे चलते हो।

(Owned: आपणः v2.c05.l04, मधुरः v3.c02.l02, बालकः, विशालः v3.c02.l02, मन्दम् v2.c05.l02, शीघ्रम् and सदा
v3.c03.l04. Turn 7 "करोमि" for "I'll do": the present for a near future, as Hindi करूँगा glosses it;
the future itself is v4.c03. Turn 10 हि not first.)

**§17 Story — serial episode 5, part 3: "Where the burrow was"** — label as l01; 🔊
`v3c05l03-story.mp3`. Eight lines:
1. यत्र मूषकस्य विवरं तत्र कपोता अगच्छन्। (yatra mūṣakasya vivaraṃ tatra kapotā agacchan.) / यत्र
   मूषकस्य विवरम् तत्र कपोताः अगच्छन्। "Where the mouse's burrow was, there the doves went." — जहाँ
   चूहे का बिल था, वहाँ कबूतर गए। (plan §4.5)
2. यदा कपोतास्तत्रागच्छन्, तदा मूषको विवरं प्राविशत्। (yadā kapotās tatrāgacchan, tadā mūṣako
   vivaraṃ prāviśat.) / यदा कपोताः तत्र आगच्छन्, तदा मूषकः विवरम् प्राविशत्। "When the doves came
   there, the mouse went into his burrow." — जब कबूतर वहाँ आए, तब चूहा बिल में घुस गया।
3. चित्रग्रीव उवाच — "यो मूषकः पाशान्कृन्तति स मम सखा।" (citragrīva uvāca — "yo mūṣakaḥ pāśān
   kṛntati sa mama sakhā.") / चित्रग्रीवः उवाच — "यः मूषकः पाशान् कृन्तति सः मम सखा।" "Citragrīva
   said: 'The mouse who cuts snares is my friend.'" — चित्रग्रीव ने कहा — "जो चूहा फंदे काटता है, वह
   मेरा मित्र है।"
4. "यथा वयं तस्य मित्राणि, तथा सोऽस्माकं मित्रम्।" (yathā vayaṃ tasya mitrāṇi, tathā so 'smākaṃ
   mitram.) / "यथा वयम् तस्य मित्राणि, तथा सः अस्माकम् मित्रम्।" "'As we are his friends, so he is
   our friend.'" — "जैसे हम उसके मित्र हैं, वैसे वह हमारा मित्र है।"
5. ततश्चित्रग्रीवो विवरस्य समीपमगच्छत्, अवदच्च — "सखे! क्वासि?" (tataś citragrīvo vivarasya
   samīpam agacchat, avadac ca — "sakhe! kvāsi?") / ततः चित्रग्रीवः विवरस्य समीपम् अगच्छत्, अवदत् च —
   "सखे! क्व असि?" "Then Citragrīva went up to the burrow and said: 'Friend! Where are you?'" — तब
   चित्रग्रीव बिल के पास गया, और बोला — "मित्र! कहाँ हो?"
6. मूषको न किमप्यवदत्। (mūṣako na kim apy avadat.) / मूषकः न किम् अपि अवदत्। "The mouse said
   nothing at all." — चूहा कुछ भी नहीं बोला।
7. चित्रग्रीवः पुनरवदत् — "हे हिरण्यक! अहं चित्रग्रीवः, तव सखा। किमर्थं न वदसि?" (citragrīvaḥ
   punar avadat — "he hiraṇyaka! ahaṃ citragrīvaḥ, tava sakhā. kimarthaṃ na vadasi?") / चित्रग्रीवः
   पुनः अवदत् — "हे हिरण्यक! अहम् चित्रग्रीवः, तव सखा। किमर्थम् न वदसि?" "Citragrīva said again:
   'Hiraṇyaka! I am Citragrīva, your friend. Why don't you speak?'" — चित्रग्रीव ने फिर कहा — "हे
   हिरण्यक! मैं चित्रग्रीव हूँ, तुम्हारा मित्र। क्यों नहीं बोलते?"
8. यदा हिरण्यकस्तद्वचनमशृणोत्, तदा स विवराद्बहिरागच्छत्। (yadā hiraṇyakas tad vacanam
   aśṛṇot, tadā sa vivarād bahir āgacchat.) / यदा हिरण्यकः तत् वचनम् अशृणोत्, तदा सः विवरात् बहिः
   आगच्छत्। "When Hiraṇyaka heard those words, he came out of the burrow." — जब हिरण्यक ने वे शब्द
   सुने, तब वह बिल से बाहर आया। (अशृणोत्: R4, labelled — "heard")

Seams: l.2 the comma closes the relative clause (आगच्छन् before a comma, row 0.3; the न् + त join
आगच्छंस्तदा is not taught); l.5 ततः + च → श्च; अगच्छत् before the comma; अवदत् + च → च्च (8.4.40); क्व +
अ → क्वा; l.6 किम् + अ; अपि + अ → यण्; l.8 हिरण्यकः + त → स्त; तत् + व → द् (8.2.39); विवरात् + ब → द्;
बहिः + आ → र्. Departures: table 0.I rows 3, 5. Note for the drafter: line 2 restates v3.c03.l03 line
10 (मूषकस्तानपश्यत्, विवरं च प्राविशत्) with a relative; lines 5–8 tell, with names, what v3.c03.l03
line 11 told without them.

**§3 Station 0 (runs S0-ar and S0-aq).** About 8 minutes; keys 0.G. **Prompts:** (1) v1.c02.l06 — ततः,
अतः, इतः, कुतः in one sentence each; (2) v1.c05.l03 — अत्र, तत्र, यत्र; (3) v2.c05.l01 — कदा? इदानीम्;
यतः "because"; (4) v2.c05.l02 — the prefix in अवगच्छति; (5) v2.c01.l02 — कथम् अस्ति भवान्? (6) v3.c04.l01–
l02 — join तथा अस्तु, मा एवम् (display words, now headwords).

**§4 TRADITION callout** (1.1.37, 1.4.59): "Pāṇini calls a word that never changes अव्ययम्: 1.1.37
स्वरादिनिपातमव्ययम् — the words listed from स्वर् on, and the particles (निपाताः), are 'unchanging'. The
Kāśikā's list includes six words you own: प्रातर्, उच्चैस्, शनैस्, ह्यस्, श्वस्, बहिस् — and अधस् and
स्वयम्. Of प्र and the rest, 1.4.59 उपसर्गाः क्रियायोगे says: when they join a verb, they are उपसर्गाः."
[REF:ashtadhyayi 1.1.37] [REF:kashika 1.1.37] [REF:ashtadhyayi 1.4.59]. (The Kāśikā's stem forms in -स्/-र्
are printed as it gives them, with the owned pause forms beside them: प्रातः, उच्चैः, शनैः, ह्यः, श्वः, बहिः,
अधः.)

**§5:** closed-class function words; correlative systems in Hindi (table 0.H g) and the English
*wh-/th-* pairs (where/there, when/then — FACT, observable); no claim of common origin beyond
"Sanskrit, English and Hindi are Indo-European languages; the *t-/k-* pairing in pronoun adverbs is
inherited" — **cut**: no REF for an etymological claim; keep the observable pairing only.

**§7 Hindi:** row g (built exactly like), row h (the prefixes in तत्सम words).

**§9–§11:** the grid chant (🔊 `v3c05l03-grid-chant.mp3`: कुत्र अत्र तत्र यत्र सर्वत्र; कुतः इतः ततः यतः
सर्वतः; कदा इदानीम् तदा यदा सर्वदा; कथम् इत्थम् तथा यथा सर्वथा — in pause form, in that order); हि, च, वा, तु
lean on the word before them (no pause before them). IPA as the table.

**§12 (six rows):** (1) च/हि/तु first: *हि त्वं … → त्वं हि …; (2) the correlative in the relative's case:
*यं पश्यसि तं मम सखा → स मम सखा; (3) the main clause first with a dangling correlative (*स जानाति यः
पठति is **not** wrong — Whitney §512a: "the other arrangement … frequent enough") → the course
teaches the relative-first order; the key **accepts** the other order — so this row is about
*omitting* the correlative where Sanskrit needs it, as Hindi sometimes does (*यः पठति जानाति — Hindi
"जो पढ़ता है जानता है"): in this course's drills keep सः; (4) अधः with the locative or accusative (*वृक्षे
अधः) → genitive वृक्षस्य अधः (Hindi "पेड़ के नीचे" = genitive-like के); (5) क्व vs कुत्र: both "where?"
— no mistake, a choice (the row says so); replace with: तदा for "then (next)" in a story vs ततः: ततः "after
that", तदा "at that time" (as correlative of यदा); (6) एव/अपि confused: "too" is अपि, "only/very" is एव
(अहमपि vs अहमेव).

**Exercises (§18):**
- *Ex 1 (obj. 1; class, 5 min):* the grid from memory (table 0.E rows 1–4), then six blanks: "___ गच्छसि?"
  (where) → कुत्र / क्व · "___ आगच्छसि?" (from where) → कुतः · "___ आगच्छति" (now) → इदानीम् · "___ वदसि?"
  (how) → कथम् · "___ अहं गच्छामि" (then, correl.) → तदा · "___ वद" (so/thus) → एवम् / तथा. **Key** as given
  (each accepts both where two are listed).
- *Ex 2 (obj. 2; class, 8 min):* join six pairs (pause-form pairs given, the learner writes joined):
  (a) बालकः पठति। सः जानाति। → यो बालकः पठति स जानाति। (b) सिंहः तत्र अस्ति। तत्र मूषकः न गच्छति। →
  यत्र सिंहस्तत्र मूषको न गच्छति। (c) गुरुः वदति। तदा छात्राः शृण्वन्ति (R4 — **replace**: तदा छात्राः लिखन्ति) →
  यदा गुरुर्वदति तदा छात्रा लिखन्ति। (d) माता वदति। तथा अहम् करोमि। → यथा माता वदति तथाहं करोमि।
  (e) बालिका गृहे अस्ति। सा मम भगिनी। → या बालिका गृहेऽस्ति सा मम भगिनी। (f) फलम् मधुरम् अस्ति। तत्
  अहम् खादामि। → यत्फलं मधुरमस्ति तदहं खादामि। **Key** as given; the pause form of the answer earns ½.
- *Ex 3 (obj. 2; homework, 8 min — writing):* six relative sentences about the serial (any of the four
  pairs), joined with pause form. **Key:** model (§17 lines 1–4, 8) + checklist (row 0.16 rules).
- *Ex 4 (obj. 3; class, 4 min):* put the particle in its place, six: (च) सीता अर्जुनः गच्छतः → सीतार्जुनश्च …
  — **drafter: write six with one correct slot each, e.g.** "अहम् ___ गच्छामि (also)" → अहमपि · "त्वम्
  ___ सदा मन्दं गच्छसि (for)" → त्वं हि … · "रामः ___ सीता ___ (and … and)" → रामश्च सीता च · "फलम् ___
  जलम् ___ (or)" → फलं वा जलं वा · "सः ___ जानाति (only he)" → स एव · "वृक्षस्य ___ (under)" →
  वृक्षस्याधः. **Key** as given.
- *Ex 5 (obj. 4; class, 3 min — reading the card):* name the prefix in six owned words: आगच्छति (आ) ·
  अवगच्छति (अव) · निर्गच्छति (निर्) · प्रविशति (प्र) · उपविशति (उप) · निवसति (नि). Then answer: "What is an
  अव्ययम्?" ("a word that never changes", 1.1.37) — "An उपसर्गः?" ("प्र and the rest when joined to a
  verb", 1.4.59). **Key** as given. (Recognition of owned words; no other prefix is asked.)
- *Ex 6 (obj. 1, 3; homework, 5 min — listening):* 🔊 the §16 conversation; answer in Sanskrit, in
  this order: सीता क्व गच्छति? (आपणम्) · कदा सा गच्छति? (यदा माता वदति) · अर्जुनः कुत्र गच्छति? (तत्रैव, आपणम्)
  · आपणः कुत्रास्ति? (नद्यास्तीरे, वृक्षस्याधः) · सीता किं वदति? (शीघ्रमागच्छ) · अर्जुनः कथं गच्छति? (मन्दम्).
  **Key** as given.

**Quiz (10):** 1. Correlative of यदा: (a) तत्र (b) तदा (c) ततः (d) तथा — **b**. 2. "Under the tree": (a)
वृक्षस्य अधः (b) वृक्षे अधः (c) वृक्षम् अधः (d) वृक्षेण अधः — **a**. 3. Which may not stand first? (a)
यदा (b) हि (c) कुत्र (d) यत्र — **b**. 4. यं पश्यसि ___ मम सखा: (a) तम् (b) सः (c) यः (d) तस्य — **b**. 5. सर्वत्र
means (a) always (b) everywhere (c) in every way (d) from everywhere — **b**. 6. In "क्व गच्छसि?" इति स
…, why is there no join between गच्छसि and इति? (a) the closing quotation mark is a stop (b) इ never joins
(c) गच्छसि is a verb (d) a typo — **a**. 7. According to Pāṇini (1.1.37), अव्ययम् names (a) the words
from स्वर् on, and the particles (b) the pronouns (c) the verbs (d) the compounds — **a** · TRADITION.
8. How many upasargas does the tradition's list count? (a) 10 (b) 19 (c) 22 (d) 28 — **c** · TRADITION
(19: Whitney's count, shown on the card: **a real number**, so option (b) is a *documented alternative
count*, not a wrong form — **drafter replaces (b) by 12**). 9. The prefix in अवगच्छति: (a) अ (b) अव (c)
अवग (d) गच्छ — **b**. 10. "As the teacher, so the student": (a) यथा गुरुस्तथा शिष्यः (b) यदा गुरुस्तदा शिष्यः
(c) यत्र गुरुस्तत्र शिष्यः (d) यो गुरुः स शिष्यः — **a** (b–d are well-formed sentences with other
meanings: they are wrong *answers*, not unattested constructions — acceptable; the item tests meaning).

**§20 Bookings:** S0-at (+1 day, l04), S0-au (+1 week, l05), verbatim. Ledger 480.

**§21 (40 min):** Ex 3 (8) · Ex 6 (5) · the grid from memory, checked (8) · §17 aloud joined, recorded (5)
· read the upasarga card and Hit 1.40 with its gloss (6) · copy six relative sentences from §13 in both
forms (5) · real-world: write three Hindi जो … वह / जब … तब sentences and their Sanskrit (3).

**§22 timing (45):** Station 0 + prompts (8) → §14 headwords + grid (8) → Ex 1 (5) → §15 the relative
sentence (5) → Ex 2 (8) → Ex 4 (4) → the upasarga card + Ex 5 (3) → §16 read in pairs (2) → quiz (2) = 45.
**Teacher Notes:** 1.4.57–58, 1.4.60; the Kāśikā typos (row 0.20); Whitney §1077 vs the 22; Hit 1.40
(locus, speaker); serial departures; यावत् … तावत् → v4.c04.

**Payoff (plan):** ततः, अतः, इतः, कुतः, अत्र, तत्र, यत्र, कदा, इदानीम्, यतः were one system; the prefix in
अवगच्छति is one of 22; कदाचित् is क- + -दा + चित्. **Main risk:** overload — production stops at the
grid, the particles and the relative sentence; the card is read.

---

## 4. L4 — समासाः: Compounds (grammar)

**Front matter.** id `v3.c05.l04` · file `lesson-04-compounds.md` · title sa समासाः · sa_iast
*samāsāḥ* · en "Compounds" · hi "समास — दो शब्द, एक शब्द" · lesson_type: grammar · cefr A2 ·
duration_minutes 45 · self_study_minutes **40** · prerequisites [v3.c05.l03] · review_of [v3.c05.l03,
v3.c05.l02, v3.c04.l01, v3.c04.l02, v3.c02.l04, v1.c02.l03, v1.c03.l01, v1.c03.l02, v1.c06.l01,
v2.c01.l03, v2.c03.l03, v2.c03.l04, v2.c06.l03, v2.c06.l04] · vocabulary_count **9** (8 + upgrade
शक्तिः) · tags [grammar, compounds, samasa, vigraha, dvandva, tatpurusha, karmadharaya,
bahuvrihi, word-building, joined-text, spaced-review] · media (planned): images
`v3c05l04-four-kinds.svg`, `v3c05l04-vigraha-strip.svg`; audio `v3c05l04-model-sentences.mp3`,
`v3c05l04-conversation.mp3`, `v3c05l04-story.mp3`; worksheets `v3c05l04-vigraha.pdf`.

**Objectives:**
1. en "Resolve a dvandva, a case-tatpuruṣa, a karmadhāraya or a bahuvrīhi into its vigraha with the
   case of every member." · hi "द्वन्द्व, तत्पुरुष, कर्मधारय या बहुव्रीहि समास का विग्रह हर पद की विभक्ति
   सहित करें।"
2. en "Name the kind of a compound, using the context test (the thing itself, or someone who has it)." ·
   hi "प्रसंग-परीक्षा से समास का प्रकार बताएँ (वस्तु स्वयं, या कोई जिसके पास वह है)।"
3. en "Coin a transparent compound of each of the four kinds from owned words, with the first member in
   stem form and the inner seam joined." · hi "चारों प्रकार का एक-एक पारदर्शी समास अपने शब्दों से बनाएँ —
   पहला पद मूल रूप में, भीतरी सन्धि सहित।"
4. en "Recognise a dvigu, an upapada and an avyayībhāva when you meet one (सप्ताहः, जलजम्, यथाशक्ति)." ·
   hi "द्विगु, उपपद और अव्ययीभाव को पहचानें।"

(Objective 4 is recognition: no item asks for their vigraha; an item may ask "which kind?" with a ◐
kind as the answer? **No** — row 0.1: ◐ is never scored. Objective 4 is therefore tested only in the
§19 key's *unscored* reading item and in Ex 6, marked "read, not scored". **Drafter: phrase objective
4 as "read … (not scored)"** — or drop it; the note keeps it, unscored, because the plan names the three
kinds.)

**The one grammar point:** a compound joins stems into one word and is understood by its विग्रहः;
four kinds (rows 0.21–0.22; table 0.F).

**Six steps (§8):**
1. **Scene:** the serial's names — why is the dove-king called चित्रग्रीवः?
2. **The question:** what does a word made of two words mean, and how do you know which kind it is?
3. **Evidence (owned compounds, grep-checked):** विद्यालयः (v1.c06.l01), हिमालयः (v1.c04.l03),
   परोपकारः (v2.c06.l03; inner seam c04.l01), मनोरथैः (v2.c06.l03 verse; seam c04.l02), दूरदर्शनम्
   (v2.c06.l04), रविवासरः (v2.c03.l04), सप्ताहः (v2.c03.l03), सुप्रभातम्, शुभरात्रिः, मध्याह्नः (v2.c01.l03),
   वर्णमाला (v1.c01.l02), महाभारतम् (v1.c06.l01), गोपाल (v1.c03.l05), जलज (v1.c03.l02), खग (v1.c03.l01),
   मातृभाषा (v1.c02.l03 line), कमल + मुकुल (v1.c01.l04, v1.c02.l02: two owned words — "कमल-मुकुलम् echoes
   कमल-माला", v1.c02.l02 §27), अहिंसा (v2.c06.l03), निरामयाः (v1.c06.l04), मातापितरौ (promised v3.c02.l04).
4. **Pattern named:** stem first, ending last, seam inside, vigraha outside; four kinds and their names.
5. **Table assembled:** the learner sorts the evidence into table 0.F's four rows.
6. **Production:** Ex 3–5, §16.

**Forms taught:** table 0.F; the four rules (row 0.21); 2.2.29, 2.2.24 (row 0.22); prādi, नञ्, महा-
labels. **Cells drilled: 0** (line: "24 compounds resolved").

**Headwords (8; ledger 480 → 488) + upgrade:**

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status | Check |
|---|---|---|---|---|---|---|---|
| कण्ठः | kaṇṭhaḥ | /kɐɳʈʰɐh/ | throat, neck | कण्ठ, गला | m. a-stem | ledger-new (कण्ठ्य v1.c01.l02 is another word) | Apte s.v. कंठः "Throat"; MW *kaṇṭha* "the throat, the neck" |
| नीलकण्ठः | nīlakaṇṭhaḥ | /n̪iːlɐkɐɳʈʰɐh/ | Śiva; the peacock ("blue-throated") | नीलकण्ठ (शिव; मोर) | m. (lexicalised bahuvrīhi) | ledger-new (rule 10) | MW *nīla-kaṇṭha* "m. a peacock … N. of Śiva (as having a black throat …), R.; Hit." |
| ग्रीवा | grīvā | /gɾiːʋɑː/ | neck | गर्दन, ग्रीवा | f. ā-stem | ledger-new | Apte s.v. ग्रीवा "The neck" |
| चित्रः | citraḥ | /t͡ɕit̪ɾɐh/ | bright; many-coloured | चमकीला, रंग-बिरंगा | adj. -त्रा -त्रम् | ledger-new | Apte s.v. चित्र "Bright, clear …"; MW *citra* |
| पादपः | pādapaḥ | /pɑːd̪ɐpɐh/ | tree ("drinking by the feet") | पेड़, पादप | m. (lexicalised upapada) | ledger-new (rule 10) | MW *pāda-pa* "'drinking at foot or root', a tree, plant"; Apte: sub-entry (Pass C) |
| तुल्यः | tulyaḥ | /t̪uljɐh/ | equal, like (+ instr. or gen.) | तुल्य, समान | adj. -ल्या -ल्यम् | ledger-new | Apte s.v. तुल्य "Of the same kind … equal" |
| उदारः | udāraḥ | /ud̪ɑːɾɐh/ | noble; generous | उदार | adj. -रा -रम् | ledger-new | Apte s.v. उदार "Generous, liberal … Noble, exalted"; Hit 1.71 |
| चरितम् | caritam | /t͡ɕɐɾit̪ɐm/ | conduct, deeds | चरित्र, आचरण | n. a-stem | ledger-new | Apte s.v. चरित (n. "Behaviour, conduct" — Pass C confirms the n. sense line); Hit 1.71 |
| शक्तिः | śaktiḥ | /ɕɐkt̪ih/ | power, strength | शक्ति | f. i-stem | **upgrade** (शक्ति v1.c05.l02) | — |

(Ledger line: "Ledger 480 → 488 (8 ledger-new; upgrade शक्तिः drilled, not counted)." The IPA of नील
/n̪iːlɐ/: dental n̪.)

**Model sentences (§13):**
1. मातापितरौ गृहे स्तः। (mātāpitarau gṛhe staḥ.) / मातापितरौ गृहे स्तः। (the same) "Mother and father
   are at home." — माता-पिता घर पर हैं।
2. कपोतानां नृपश्चित्रग्रीवः। (kapotānāṃ nṛpaś citragrīvaḥ.) / कपोतानाम् नृपः चित्रग्रीवः।
   (kapotānām nṛpaḥ citragrīvaḥ.) "The king of the doves is Citragrīva." — कबूतरों का राजा चित्रग्रीव है।
   (replaces the plan's चित्रग्रीवो नाम कपोतराजः: §7, deviation 4)
3. नीलकण्ठो वने नृत्यति। (nīlakaṇṭho vane nṛtyati.) / नीलकण्ठः वने नृत्यति। "The peacock dances in the
   forest." — मोर वन में नाचता है।
4. पादपस्याधः शशकस्तिष्ठति। (pādapasyādhaḥ śaśakas tiṣṭhati.) / पादपस्य अधः शशकः तिष्ठति। "The hare
   stays under the tree." — खरगोश पेड़ के नीचे रहता है।
5. अहमल्पशक्तिः। (aham alpaśaktiḥ.) / अहम् अल्पशक्तिः। "I am of little strength." — मैं अल्प-शक्ति हूँ।
   (the mouse, Hit, prose after verse 41: *aham alpa-śaktiḥ*)
6. सिंहमूषकौ मित्रे अभवताम्। (siṃhamūṣakau mitre abhavatām.) / the same. "The lion and the mouse
   became friends." — सिंह और चूहा मित्र बन गए। (मित्रे: a dual in -ए, which never joins — c04.l01)

Further §13: पाशबद्धाः कपोताः (Hit *pāśa-baddhān*) · अमृततुल्यं जलम् · उदारचरितो नृपः · यथाशक्ति
पठ (◐, read) · the thread verse: मनोरथैः = मनसः रथैः (मनसः display).

**§16 Conversation — "Two words, one word"** (10 turns; 🔊 `v3c05l04-conversation.mp3`, turns 1–10):
1. गुरुः — छात्राः, अद्य समासाः! (chātrāḥ, adya samāsāḥ!) / the same. "Students, today: compounds!" —
   छात्रो, आज समास!
2. सीता — समासः कः? (samāsaḥ kaḥ?) / the same. "What is a compound?" — समास क्या है?
3. गुरुः — द्वे पदे एकं पदं भवतः। (dve pade ekaṃ padaṃ bhavataḥ.) / द्वे पदे एकम् पदम् भवतः। "Two
   words become one word." — दो पद एक पद बन जाते हैं।
4. अर्जुनः — यथा विद्यालयः? (yathā vidyālayaḥ?) / the same. "Like विद्यालयः?" — जैसे विद्यालय?
5. गुरुः — आम्। विद्याया आलयो विद्यालयः। (ām. vidyāyā ālayo vidyālayaḥ.) / आम्। विद्यायाः आलयः
   विद्यालयः। "Yes. The abode of learning is the vidyālaya." — हाँ। विद्या का आलय विद्यालय है।
6. सीता — नीलकण्ठः कः? (nīlakaṇṭhaḥ kaḥ?) / the same. "Who is Nīlakaṇṭha?" — नीलकण्ठ कौन है?
7. गुरुः — नीलः कण्ठो यस्य स नीलकण्ठः। (nīlaḥ kaṇṭho yasya sa nīlakaṇṭhaḥ.) / नीलः कण्ठः यस्य सः
   नीलकण्ठः। "He whose throat is blue is Nīlakaṇṭha." — जिसका कण्ठ नीला है, वह नीलकण्ठ है।
8. अर्जुनः — अहं चित्रग्रीवः, मम ग्रीवा चित्रा! (ahaṃ citragrīvaḥ, mama grīvā citrā!) / अहम्
   चित्रग्रीवः, मम ग्रीवा चित्रा! "I'm Citragrīva — my neck is bright!" — मैं चित्रग्रीव हूँ, मेरी गर्दन
   रंगीन है!
9. सीता — त्वं न कपोतः! त्वमल्पबुद्धिः! (tvaṃ na kapotaḥ! tvam alpabuddhiḥ!) / त्वम् न कपोतः! त्वम्
   अल्पबुद्धिः! "You're no dove! You're a little-wit!" — तुम कबूतर नहीं हो! तुम अल्पबुद्धि हो!
10. गुरुः — सम्यक्! अल्पबुद्धिर्बहुव्रीहिः। (samyak! alpabuddhir bahuvrīhiḥ.) / सम्यक्! अल्पबुद्धिः
    बहुव्रीहिः। "Right! अल्पबुद्धिः is a bahuvrīhi." — ठीक! अल्पबुद्धि बहुव्रीहि है।

(पदम् c04.l04 headword; द्वे पदे dual pragṛhya; यस्य … सः l03; अल्पबुद्धिः coined from owned अल्पम्,
बुद्धिः — the lesson's production in action. Turn 7 is the vigraha frame said as a sentence.)

**§17 Story — serial episode 5, part 4: "Names that are compounds"** — label as l01; 🔊
`v3c05l04-story.mp3`. Nine lines:
1. चित्रग्रीवः कपोतैः सह हिरण्यकस्य विवरमगच्छत्। (citragrīvaḥ kapotaiḥ saha hiraṇyakasya vivaram
   agacchat.) / चित्रग्रीवः कपोतैः सह हिरण्यकस्य विवरम् अगच्छत्। "Citragrīva went with the doves to
   Hiraṇyaka's burrow." — चित्रग्रीव कबूतरों के साथ हिरण्यक के बिल पर गया। (plan §4.5)
2. तस्य ग्रीवा चित्रा, अतः स चित्रग्रीवः। (tasya grīvā citrā, ataḥ sa citragrīvaḥ.) / तस्य ग्रीवा चित्रा,
   अतः सः चित्रग्रीवः। "His neck was bright: so he is Citragrīva." — उसकी गर्दन रंगीन थी, इसलिए वह
   चित्रग्रीव है।
3. हिरण्यकोऽवदत् — "स्वागतम्, प्रियमित्र!" (hiraṇyako 'vadat — "svāgatam, priyamitra!") / हिरण्यकः
   अवदत् — "स्वागतम्, प्रियमित्र!" "Hiraṇyaka said: 'Welcome, dear friend!'" — हिरण्यक ने कहा —
   "स्वागत है, प्रिय मित्र!"
4. चित्रग्रीव उवाच — "सखे, पश्य! वयं पाशबद्धाः।" (citragrīva uvāca — "sakhe, paśya! vayaṃ
   pāśabaddhāḥ.") / चित्रग्रीवः उवाच — "सखे, पश्य! वयम् पाशबद्धाः।" "Citragrīva said: 'Friend, look!
   We are bound in snares.'" — चित्रग्रीव ने कहा — "मित्र, देखो! हम फंदों में बँधे हैं।"
5. हिरण्यकोऽवदत् — "अहमल्पशक्तिः, दन्ताश्च मे कोमलाः।" (hiraṇyako 'vadat — "aham alpaśaktiḥ,
   dantāś ca me komalāḥ.") / हिरण्यकः अवदत् — "अहम् अल्पशक्तिः, दन्ताः च मे कोमलाः।" "Hiraṇyaka said:
   'I have little strength, and my teeth are soft.'" — हिरण्यक ने कहा — "मैं अल्प-शक्ति हूँ, और मेरे दाँत
   कोमल हैं।"
6. चित्रग्रीवोऽवदत् — "यथाशक्ति पाशान्कृन्त।" (citragrīvo 'vadat — "yathāśakti pāśān kṛnta.") /
   चित्रग्रीवः अवदत् — "यथाशक्ति पाशान् कृन्त।" "Citragrīva said: 'Cut the snares as far as your
   strength goes.'" — चित्रग्रीव ने कहा — "यथाशक्ति फंदे काटो।" (यथाशक्ति ◐, glossed)
7. ततो हिरण्यकः सर्वेषां कपोतानां पाशानकृन्तत्। (tato hiraṇyakaḥ sarveṣāṃ kapotānāṃ pāśān
   akṛntat.) / ततः हिरण्यकः सर्वेषाम् कपोतानाम् पाशान् अकृन्तत्। "Then Hiraṇyaka cut the snares of
   all the doves." — तब हिरण्यक ने सब कबूतरों के फंदे काट दिए।
8. कपोता मुक्ता अभवन्। (kapotā muktā abhavan.) / कपोताः मुक्ताः अभवन्। "The doves were free." —
   कबूतर मुक्त हो गए।
9. चित्रग्रीवहिरण्यकौ प्रियमित्रे अभवताम्। (citragrīvahiraṇyakau priyamitre abhavatām.) / the same.
   "Citragrīva and Hiraṇyaka became dear friends." — चित्रग्रीव और हिरण्यक प्रिय मित्र बन गए।

§17 task (Ex 6): find every compound in the episode, name its kind and give its vigraha:
चित्रग्रीवः (bahuvrīhi), प्रियमित्र (karmadhāraya, voc.), पाशबद्धाः (case-tatpuruṣa, instr.), अल्पशक्तिः
(bahuvrīhi), यथाशक्ति (avyayībhāva ◐ — read, not scored), चित्रग्रीवहिरण्यकौ (dvandva), प्रियमित्रे
(karmadhāraya, n. du.). Seams: l.3 हिरण्यकः + अ → ओऽ; l.4 सखे before the comma; वयम् + प → ं; l.5 अहम् +
अ; दन्ताः + च → श्च; l.6 पाशान् + क; l.7 ततः + ह → ओ; सर्वेषाम् + क → ं; पाशान् + अ (no doubling after
आ); l.8 -आः + vowel → आ; l.9 pragṛhya. Departures: table 0.I rows 6–11.

**§3 Station 0 (runs S0-at and S0-as).** About 8 minutes; keys 0.G. **Prompts:** (1) v3.c04.l01 — join
पर-उपकारः; (2) v3.c04.l02 — join मनस्-रथः; (3) v3.c02.l04 — "parents": पितरौ (and 1.2.70 by number);
(4) v1.c03.l02 — what does जलज mean, and what is ज? (5) v2.c03.l04 — रविवासरः: whose day? (6) v2.c06.l04 —
दूरदर्शनम्: which two parts? (v1.c02.l03 — मातृ in the dictionary, माता in the sentence.)

**§4 TRADITION callout** (2.2.29, 2.2.24, the names): "Pāṇini defines the dvandva in three words —
2.2.29 चार्थे द्वन्द्वः, 'in the sense of च, a dvandva' — and the bahuvrīhi in two: 2.2.24 अनेकमन्यपदार्थे,
'two or more words, pointing to something else'. The names are examples of themselves: तत्पुरुषः 'his
man', बहुव्रीहिः '(one who has) much rice', द्विगुः '(worth) two cows', अव्ययीभावः 'becoming an
indeclinable'." [REF:ashtadhyayi 2.2.29] [REF:ashtadhyayi 2.2.24] [REF:whitney1889 §1263]
[REF:whitney1889 §1293] [REF:whitney1889 §1312] [REF:whitney1889 §1313]. Second callout (TRADITION,
Hindi school grammar, row 0.H j) [REF:guru1952] — prints only after Pass C (open item 1).

**§5:** Whitney's three classes (copulative, determinative = dependent + descriptive, possessive;
§1247) against the tradition's names; English and German compounds (*blackbird* vs *black bird*,
*Fernseher*) — the last member is the head in both languages and in Sanskrit's determinatives (§1247d).
Accent and the इन्द्रशत्रु contrast: one line, "v4.c04".

**§7 Hindi:** rows i and j; Hindi spellings समास, विग्रह, द्वन्द्व, तत्पुरुष, कर्मधारय, द्विगु, बहुव्रीहि,
अव्ययीभाव (school print द्वंद्व; the course writes the GLOSSARY spelling).

**§9–§11:** a compound is said as one word: one breath, no pause at the inner seam (विद्यालयः,
मातापितरौ, नीलकण्ठः); the Hindi habit of a pause in "माता-पिता" is not carried over. IPA as the table.

**§12 (six rows):** (1) the first member inflected: *माताभाषा, *नीलःकमलम् → मातृभाषा, नीलकमलम् (rule 1;
the dvandva माता- is the one listed exception, 6.3.25); (2) the dvandva in the singular: *सिंहमूषकः for
two → सिंहमूषकौ; (3) bahuvrīhi read as tatpuruṣa: नीलकण्ठः "a blue throat" → "one whose throat is blue";
(4) the inner seam left open: *पर-उपकारः in print → परोपकारः; (5) the vigraha without cases: *विद्या आलयः
→ विद्यायाः आलयः; (6) a bahuvrīhi in the wrong gender: the compound takes the gender of the person
described (अल्पशक्तिः for a man, अल्पशक्तिः … for a woman? — **the f. of an i-final bahuvrīhi keeps -इः
(Whitney §1293 ff.; no new form)** — the row says only: "the compound agrees with the one it describes:
नीलकण्ठः m. for Śiva; उदारचरिता for a woman" (an a-final bahuvrīhi takes -आ, as चित्रा). **Pass C
confirms उदारचरिता** (Whitney §1294 ff., open item 4).

**Exercises (§18):**
- *Ex 1 (obj. 1; class, 6 min):* six vigrahas: गुरुशिष्यौ → गुरुः च शिष्यः च · हिमालयः → हिमस्य आलयः ·
  जलपात्रम् → जलस्य पात्रम् · चित्रवनम् → चित्रम् वनम् · अल्पशक्तिः → अल्पा शक्तिः यस्य सः · नीलकण्ठः → नीलः
  कण्ठः यस्य सः. **Key** as given (cases named). **Exam guard:** these six items are not in task C or
  S0-av? — **हिमालयः, गुरुशिष्यौ, जलपात्रम्, चित्रवनम् are S0-av items** (S0 rehearses the lesson's own
  items — allowed; the guard is S0 vs exam). Fine.
- *Ex 2 (obj. 2; class, 5 min):* name the kind, six: सुखदुःखे (dvandva) · मातृभाषा (tatpuruṣa) · प्रियमित्रम्
  (karmadhāraya) · उदारचरितः (bahuvrīhi) · समुद्रतीरम् (tatpuruṣa) · शुभरात्रिः (karmadhāraya). **Key**
  (karmadhāraya also accepted as "tatpuruṣa").
- *Ex 3 (obj. 3; class, 6 min — production):* coin from the vigraha, joined: कमलस्य मुकुलम् → कमलमुकुलम्
  · सीता च रामः च → सीतारामौ · प्रियः सखा → **(सखा → -सख 5.4.91: avoid)** — use प्रियम् मित्रम् → प्रियमित्रम्
  · सिंहस्य मुखम् → सिंहमुखम् · शुभम् दिनम् → शुभदिनम् · अल्पम् बलम् यस्य सः → अल्पबलः. **Key** as given;
  each accepts the hyphenated pause form with ½.
- *Ex 4 (obj. 1, 2; homework, 8 min):* the twelve owned compounds of §8 step 3 (the evidence list
  minus the ◐ kinds and the display-member ones): kind + vigraha. **Key:** table 0.F.
- *Ex 5 (obj. 3; homework, 8 min — writing):* four sentences about your family or the serial, each with
  a compound you coin (one of each kind), joined with pause form. **Key:** checklist.
- *Ex 6 (obj. 1, 2; homework, 4 min — reading):* the §17 task above (◐ item read, not scored).
- *Ex 7 (obj. 1; class, 2 min — listening):* 🔊 models 1–6 in order; write each compound you hear. **Key:**
  मातापितरौ, चित्रग्रीवः, नीलकण्ठः, पादपस्य (पादपः), अल्पशक्तिः, सिंहमूषकौ.

**Quiz (10):** 1. विद्यालयः: (a) विद्यायाः आलयः (b) विद्या च आलयः च (c) विद्या आलयः यस्य सः (d) विद्यया
आलयः — **a**. 2. Kind of नीलकण्ठः (Śiva): (a) dvandva (b) karmadhāraya (c) bahuvrīhi (d) dvigu — **c**.
3. "Mother and father": (a) मातापितरौ (b) मातृपिता (c) मातापिता (d) मातापितरः — **a**. 4. In a compound,
which member takes the ending? (a) the first (b) the last (c) both (d) neither — **b**. 5. नीलकमलम्:
(a) नीलम् कमलम् (b) नीलस्य कमलम् (c) नीलः कमलम् यस्य सः (d) नीलम् च कमलम् च — **a**. 6. पर + उपकारः →
(a) परउपकारः (b) परोपकारः (c) परूपकारः (d) पारोपकारः — **b**. 7. According to Pāṇini (2.2.29), a dvandva
is made "in the sense of" (a) च (b) वा (c) एव (d) इव — **a** · TRADITION. 8. मातृभाषा shows that (a) the
first member stands in stem form (b) the first member is in the nominative (c) the compound is a
dvandva (d) भाषा is masculine — **a**. 9. चित्रग्रीवः "the dove-king" is a bahuvrīhi because (a) it
names someone who has a bright neck (b) it names a neck (c) it is a pair (d) it begins with a numeral —
**a**. 10. सुप्रभातम् is (a) a karmadhāraya (b) a prādi compound, सु + प्रभातम् (c) a dvandva (d) a
bahuvrīhi — **b** (karmadhāraya is the 1.x error, plan E2: an error from taught material, permitted).

**§20 Bookings:** S0-av (+1 day, l05), S0-aw (+1 week, v3.c06.l01), verbatim. Ledger 488.

**§21 (40 min):** Ex 4 (8) · Ex 5 (8) · Ex 6 (4) · table 0.F from memory, checked (8) · §17 aloud joined,
recorded (5) · read the labels (prādi, नञ्, महा-) and the deferral line (4) · real-world: sort the eight
Hindi तत्सम compounds of row 0.H i, then check against the key (3).

**§22 timing (45):** Station 0 + prompts (8) → §8 steps 1–4 (7) → step 5 sort (5) → Ex 1 (6) → the context
test + Ex 2 (5) → Ex 3 (6) → §16 in pairs (3) → Ex 7 (2) → quiz (3) = 45. **Teacher Notes:** 2.1.22, 2.2.8,
2.1.57, 2.1.52, 2.1.6–7, 2.2.19, 2.2.18, 2.2.6, 6.3.25, 5.4.91, 2.2.23; Whitney's classes; IR-026 →
v4.c04; जगदीशः, सज्जनः (v3.c04.l03 pointer); serial departures; the Hindi six-kind sorting.

**Payoff (plan, corrected):** the compounds of Volumes 1–2 resolved by the learner (most of them ledger
rows; मनोरथः and मातृभाषा from owned lines — not "the ledger's compounds", c05#12); कमलमुकुलम् =
कमलस्य मुकुलम्; पादः "foot" is inside पादपः "tree". Of v2.c06.l04's four word-building parts, the
prefix (l03) and the compound are now taught; roots (v4.c03) and suffixes (v4.c04) wait — one line.

---

## 5. L5 — परीक्षा: Chapter 5 Exam (review)

**Front matter.** id `v3.c05.l05` · file `lesson-05-chapter-exam.md` · title sa परीक्षा · sa_iast
*parīkṣā* · en "Chapter 5 Exam" · hi "परीक्षा — अध्याय 5 की परीक्षा" · lesson_type: review · cefr A2 ·
duration_minutes 45 (the sitting alone; **Station 0, about 8 minutes, runs before it and outside its
45; the room time is about 53 minutes**) · self_study_minutes **45** (**15 before the sitting**: §3
prompts reviewed (3), the §15 assembly page read (8), §16 read aloud (4); **30 after it**: the §19 quiz
(8), check against the keys (8), task D re-read aloud joined and recorded (5), the remediation exercise of
any task below its pass mark (6), the real-world task (3); §21) · prerequisites [v3.c05.l04] ·
review_of [v3.c05.l01, v3.c05.l02, v3.c05.l03, v3.c05.l04, v3.c04.l05, v3.c03.l05, v3.c02.l05,
v2.c06.l01] · vocabulary_count **0** · tags [review, assessment, pronouns, relative-clauses,
compounds, vigraha, reading, composition, thread-verses, spaced-review] · media (planned): images
`v3c05l05-chapter-page.svg`; audio `v3c05l05-task-d-passage.mp3` (played only after the sitting);
worksheets `v3c05l05-exam-booklet.pdf`; quizzes `v3c05l05-chapter-quiz.md`,
`v3c05l05-chapter-quiz-key.md`.

**Objectives:**
1. en "Replace nouns with the right pronoun cells in a paragraph, and join pairs of sentences with a
   relative and its correlative." · hi "अनुच्छेद में संज्ञाओं की जगह सही सर्वनाम-रूप रखें, और वाक्य-युग्मों को
   सम्बन्धवाचक और उसके सहसम्बन्धी से जोड़ें।"
2. en "Name the kind of ten compounds and give each vigraha with its cases." · hi "दस समासों का प्रकार
   बताएँ और हर एक का विग्रह विभक्तियों सहित दें।"
3. en "Read a new joined passage about the doves and the mouse at sight and answer ten questions." ·
   hi "कबूतरों और चूहे पर एक नया जुड़ा अनुच्छेद देखते ही पढ़ें और दस प्रश्नों के उत्तर दें।"
4. en "Write a dialogue with a guest using भवान् or भवती, two relative sentences and two compounds of
   your own, joined, with its pause form." · hi "अतिथि से संवाद लिखें — भवान् या भवती, दो सम्बन्धवाचक
   वाक्य और अपने बनाए दो समास — जोड़कर, विराम-रूप सहित।"

**Assembly (§15, unscored):** (1) T8 on one page: tables 0.A (✓ cells), 0.C, the Δ cards, 0.D's key
cells, 0.B's listed cells; (2) the grid (0.E) and the relative-sentence rules; (3) the four kinds (0.F);
(4) **paradigm ledger audit (end of Chapter 5):** T1–T7 and the cards as at v3.c04.l05; **T8 ✓ in the
listed cells** (personal pronouns: sg. all, pl. nom./acc./instr./gen., मे ते नः वः; तद् all; एतद्, यद्,
किम्, सर्व, अन्य, एक ✓; इदम् key cells ✓); ◐: the pronoun duals and the other plural cells of अस्मद्/युष्मद्,
इदम् beyond its key cells, भवत् beyond its listed cells, सखा beyond सखा/सखे; **R6 ◐** (R5 comes in
c06.l01); the four compound kinds ✓, dvigu/upapada/avyayībhāva ◐; (5) **promises kept** (plan §4.0.3
rows: मम/तव/मह्यम् in their tables — l01; नमस्ते's ते — l01; भवान्'s forms and भवन्तः — l01; कश्चित् —
l02; prefixes as a system — l03; मातृभाषा — l04; जलज, खग — l04; the calling shapes श्रीमन्, भगवन् — l01
R6); tracker row 6 closed: "Compounds (मनोरथः, परोपकारः, दूरदर्शनम्, रविवासरः) — redeemed v3.c05.l04".
Ledger stays **488**; cells drilled: 0 new (74 reviewed: 40 + 34).

**§17 — the thread verses, c05 column of the overlay** (plan §1.5; the c01–c04 columns stand; each verse
printed joined with its pause form beneath, its locus as the earlier overlays give it): उद्यमेन हि
सिध्यन्ति कार्याणि न मनोरथैः। न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥ — हि "for" (l03, a particle that never
stands first); मनोरथैः = मनसः रथैः, a tatpuruṣa (मनसः display; l04). अहिंसा परमो धर्मः — अ-हिंसा, the negative
अ- before हिंसा (a tatpuruṣa with the negative first; 2.2.6, Teacher Notes; हिंसा glossed "harming").
सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥ — सर्वे, the
pronominal m. pl. (l02); कश्चित् "anyone" (l02; with मा "may no one …"); निरामयाः, a bahuvrīhi:
निर्गतः आमयः येभ्यः ते "from whom illness has gone" (आमयः "illness", glossed; G). सत्यमेव जयते — no c05
item.

**§3 Station 0 (runs S0-av and S0-au, verbatim).** About 8 minutes, before the sitting and outside its 45.
Keys 0.G. **Stations (1 minute, the volume spiral; plan §4.0.5):** one prompt each from l01–l04 (मे in a
sentence; the dat. sg. of सा; the correlative of यत्र; the vigraha of मातृभाषा? — **no: मातृभाषा is a task C
item; use "join पर-उपकारः"**), and the spiral's three items sit inside the tasks (a case question in A, a
verb form in D's questions, a join in E's checklist).

**§16 Conversation** (two students before the exam; 8 turns; joined, pause beneath; uses **none of the
exam's items**):
1. अर्जुनः — सीते, सर्वं पठितवती? — participle: **not allowed**. → सीते, सर्वमपठः? (sīte, sarvam
   apaṭhaḥ?) / सीते, सर्वम् अपठः? "Sītā, did you study everything?" — सीता, सब पढ़ लिया?
2. सीता — आम्। यदा माता सुप्ता — R2/participle: **no** → यदा गृहे शान्तिः — शान्तिः not owned. → आम्। ह्यो
   रात्रौ सर्वमपठम्। (ām. hyo rātrau sarvam apaṭham.) / आम्। ह्यः रात्रौ सर्वम् अपठम्। "Yes. I studied
   it all last night." — हाँ। कल रात सब पढ़ा।
3. अर्जुनः — अहं तु समासान्न जानामि। (ahaṃ tu samāsān na jānāmi.) / अहम् तु समासान् न जानामि। "But I
   don't know compounds." — पर मुझे समास नहीं आते।
4. सीता — मैवं वद! यः पठति स जानाति। (maivaṃ vada! yaḥ paṭhati sa jānāti.) / मा एवम् वद! यः पठति सः
   जानाति। "Don't say so! Whoever studies, knows." — ऐसा मत कहो! जो पढ़ता है, वह जानता है।
5. अर्जुनः — त्वं हि मम प्रियमित्रम्। (tvaṃ hi mama priyamitram.) / त्वम् हि मम प्रियमित्रम्। "You
   really are my dear friend." — तुम सच में मेरी प्रिय मित्र हो।
6. सीता — गुरुरागच्छति। (gurur āgacchati.) / गुरुः आगच्छति। "The teacher is coming." — गुरु आ रहे हैं।
7. गुरुः — नमो वः! उपविशत। (namo vaḥ! upaviśata.) / नमः वः! उपविशत। "Hello, all of you! Sit down." —
   आप सबको नमस्ते! बैठो।
8. अर्जुनः सीता च — नमस्ते, गुरो! (namaste, guro!) / नमः ते, गुरो! "Hello, teacher!" — नमस्ते, गुरुजी!

(Turn 3 समासान् + न → written together, न unchanged; turn 2 ह्यः + र → ओ, रात्रौ c02.l03; the exam's task B
and E items are not used — "यः पठति स जानाति" is l03 model 1, **not** a task B item.)

**§18 — the exam (one 45-minute sitting; 2 minutes of instructions, then five tasks in this order; the
booklet prints each text joined with its pause form beneath, except task D, printed joined only — it
tests reading the joined form; the pause form is in the key, seen after the sitting).**

*Task A — pronoun substitution* (8 min; 8 items + 1 spiral question). Replace the underlined noun with
the right cell of a pronoun (or, where the speaker is meant, of अहम्/त्वम्); write the cell in pause form.
1. अर्जुनो विद्यालयं गच्छति। / अर्जुनः विद्यालयम् गच्छति। (अर्जुनः → he)
2. गुरुरर्जुनं पश्यति। / गुरुः अर्जुनम् पश्यति। (अर्जुनम् → him)
3. सीतार्जुनेन सह पठति। / सीता अर्जुनेन सह पठति। (अर्जुनेन → with him) — *and (spiral): which case is
   अर्जुनेन, and why after सह?*
4. गुरुः सीतायै पुस्तकं ददाति। / गुरुः सीतायै पुस्तकम् ददाति। (सीतायै → to her)
5. सीताया माता गृहेऽस्ति। / सीतायाः माता गृहे अस्ति। (सीतायाः → her)
6. पुस्तकानि छात्राणां हस्तेषु सन्ति। / पुस्तकानि छात्राणाम् हस्तेषु सन्ति। (छात्राणाम् → their)
7. "सीता चाहं च पठामः" इत्यर्जुनो वदति। / "सीता च अहम् च पठामः" इति अर्जुनः वदति। (सीता च अहम् च →
   one word: "we")
8. गुरुश्छात्रान्वदति — "हे छात्राः! अहं छात्रान्पश्यामि।" / गुरुः छात्रान् वदति — "हे छात्राः! अहम्
   छात्रान् पश्यामि।" (the second छात्रान्, said to them → "you all")
**Key:** 1. सः 2. तम् 3. तेन — *तृतीया; सह takes the instrumental (2.3.19, c01.l03)* 4. तस्यै 5. तस्याः 6. तेषाम्
7. वयम् 8. युष्मान् (or वः: अहं वः पश्यामि; **not** first). Scoring 1 each, the spiral 1 (case ½, reason
½): **9 marks, pass 6.** No ◐ cell is asked (dual avoided: item 7 has सीता and अहम् — two persons; the
plural वयम् is the course's answer? — **Correction:** two persons are a dual, आवाम् (◐). **Item 7 is
replaced:** "सीता अर्जुनः अहम् च पठामः" (three persons) → वयम्; joined line: "सीतार्जुनोऽहं च पठामः"
इत्यर्जुनो वदति — **wait, Arjuna cannot list himself**; final item 7: "सीता गीता अहं च पठामः" इति रामो
वदति। / "सीता गीता अहम् च पठामः" इति रामः वदति। (सीता गीता अहम् च → "we") → **वयम्**. गीता is owned
(v1.c05.l01 as a name; Pass C greps).)

*Task B — relative clauses* (7 min; 6 pairs; write one joined sentence with यः/या/यत्/यत्र/यदा and the
correlative):
1. बालकः पुस्तकं पठति। सः विद्यालयेऽस्ति। / बालकः पुस्तकम् पठति। सः विद्यालये अस्ति।
2. बालिका गृहेऽस्ति। तां माता पश्यति। / बालिका गृहे अस्ति। ताम् माता पश्यति।
3. वृक्षो विशालोऽस्ति। तस्मिन्कपोता निवसन्ति। / वृक्षः विशालः अस्ति। तस्मिन् कपोताः निवसन्ति।
4. तत्र नद्यस्ति। तत्र व्याधस्तिष्ठति। / तत्र नदी अस्ति। तत्र व्याधः तिष्ठति।
5. गुरुर्वदति। तदा छात्रा लिखन्ति। / गुरुः वदति। तदा छात्राः लिखन्ति।
6. सिंहः स्वपिति। तदा मूषको धावति। / सिंहः स्वपिति। तदा मूषकः धावति।
**Key:** 1. यो बालकः पुस्तकं पठति स विद्यालयेऽस्ति। 2. या बालिका गृहेऽस्ति तां माता पश्यति। 3. यो वृक्षो
विशालोऽस्ति तस्मिन्कपोता निवसन्ति। 4. यत्र नद्यस्ति तत्र व्याधस्तिष्ठति। 5. यदा गुरुर्वदति तदा छात्रा
लिखन्ति। 6. यदा सिंहः स्वपिति तदा मूषको धावति। The other order (main clause first) is accepted (Whitney
§512a). Scoring 2 each: 1 the relative + correlative in the right forms, 1 the joined writing; **12 marks,
pass 8.**

*Task C — compounds* (9 min; 10 items: name the kind, give the vigraha with cases):
1. विद्यालयः 2. मातृभाषा 3. रविवासरः 4. मातापितरौ 5. सुखदुःखे 6. नीलकमलम् 7. प्रियमित्रम् 8. नीलकण्ठः
9. अल्पशक्तिः 10. उदारचरितः.
**Key:** 1. तत्पुरुषः · विद्यायाः आलयः (gen.; विद्यायै आलयः, dat., also accepted) 2. तत्पुरुषः · मातुः भाषा
(gen.) 3. तत्पुरुषः · रवेः वासरः (gen.) 4. द्वन्द्वः · माता च पिता च 5. द्वन्द्वः · सुखम् च दुःखम् च 6. कर्मधारयः ·
नीलम् कमलम् 7. कर्मधारयः · प्रियम् मित्रम् 8. बहुव्रीहिः · नीलः कण्ठः यस्य सः 9. बहुव्रीहिः · अल्पा शक्तिः यस्य सः
10. बहुव्रीहिः · उदारम् चरितम् यस्य सः. ("Tatpuruṣa" accepted for 6–7 with ½ for the kind.) Scoring 1 each
(½ kind, ½ vigraha with its cases): **10 marks, pass 7.** Disjoint from S0-av's items (row 0.30 guard).

*Task D — course-written passage at sight* (10 min; ten sentences, joined; new wording, not the
lessons' lines; ten questions). Text (booklet: joined only; the lesson file prints each line's pause form
beneath; 🔊 `v3c05l05-task-d-passage.mp3` after the sitting):
1. पुरा नद्यास्तीरे कपोतानामेको नृप आसीत्। (purā nadyās tīre kapotānām eko nṛpa āsīt.) / पुरा नद्याः
   तीरे कपोतानाम् एकः नृपः आसीत्। "Long ago on a river bank there was a king of the doves."
2. तस्य ग्रीवा चित्रासीत्, अतस्तस्य नाम चित्रग्रीवः। (tasya grīvā citrāsīt, atas tasya nāma
   citragrīvaḥ.) / तस्य ग्रीवा चित्रा आसीत्, अतः तस्य नाम चित्रग्रीवः। "His neck was bright, so his name
   was Citragrīva."
3. एकदा सर्वे कपोता व्याधस्य जालेऽपतन्। (ekadā sarve kapotā vyādhasya jāle 'patan.) / एकदा सर्वे
   कपोताः व्याधस्य जाले अपतन्। "One day all the doves fell into a hunter's net."
4. जालं च तैः सहाकाशमगच्छत्। (jālaṃ ca taiḥ sahākāśam agacchat.) / जालम् च तैः सह आकाशम्
   अगच्छत्। "And the net went into the sky with them."
5. चित्रग्रीवोऽवदत् — "मम सखा हिरण्यकोऽस्ति। यत्र स निवसति तत्र गच्छामः।" (citragrīvo 'vadat —
   "mama sakhā hiraṇyako 'sti. yatra sa nivasati tatra gacchāmaḥ.") / चित्रग्रीवः अवदत् — "मम सखा
   हिरण्यकः अस्ति। यत्र सः निवसति तत्र गच्छामः।" "Citragrīva said: 'My friend is Hiraṇyaka. Let us go
   where he lives.'"
6. हिरण्यको मूषकः, तस्य विवरं नद्याः समीपे। (hiraṇyako mūṣakaḥ, tasya vivaraṃ nadyāḥ samīpe.) /
   हिरण्यकः मूषकः, तस्य विवरम् नद्याः समीपे। "Hiraṇyaka was a mouse; his burrow was near the river."
7. यदा ते विवरस्य समीपमागच्छन्, तदा हिरण्यको विवर एवातिष्ठत्। (yadā te vivarasya samīpam
   āgacchan, tadā hiraṇyako vivara evātiṣṭhat.) / यदा ते विवरस्य समीपम् आगच्छन्, तदा हिरण्यकः विवरे एव
   अतिष्ठत्। "When they came near the burrow, Hiraṇyaka stayed right inside it."
8. चित्रग्रीव उवाच — "सखे हिरण्यक! अहं चित्रग्रीवः। बहिरागच्छ!" (citragrīva uvāca — "sakhe
   hiraṇyaka! ahaṃ citragrīvaḥ. bahir āgaccha!") / चित्रग्रीवः उवाच — "सखे हिरण्यक! अहम् चित्रग्रीवः।
   बहिः आगच्छ!" "Citragrīva said: 'Friend Hiraṇyaka! I am Citragrīva. Come out!'"
9. हिरण्यको बहिरागच्छत्। स पाशबद्धान्कपोतानपश्यत्। (hiraṇyako bahir āgacchat. sa pāśabaddhān
   kapotān apaśyat.) / हिरण्यकः बहिः आगच्छत्। सः पाशबद्धान् कपोतान् अपश्यत्। "Hiraṇyaka came out. He
   saw the doves bound in the snares."
10. ततो दन्तैः स सर्वान्पाशानकृन्तत्, कपोताश्च मुक्ता अभवन्। (tato dantaiḥ sa sarvān pāśān
    akṛntat, kapotāś ca muktā abhavan.) / ततः दन्तैः सः सर्वान् पाशान् अकृन्तत्, कपोताः च मुक्ताः अभवन्।
    "Then with his teeth he cut all the snares, and the doves were free."
**Questions** (answers in Sanskrit, one word or a phrase): 1. कपोतानां नृपस्य नाम किम्? 2. किमर्थं तस्य
नाम चित्रग्रीवः? 3. के जालेऽपतन्? 4. जालं कुत्रागच्छत्? 5. हिरण्यकः कः? 6. हिरण्यकस्य विवरं कुत्र? 7. यदा
कपोता आगच्छन्, तदा हिरण्यकः कुत्रातिष्ठत्? 8. हिरण्यकः केन पाशानकृन्तत्? 9. (compound) पाशबद्धान् — which
kind, and its vigraha? 10. (pronoun and spiral) In line 10, to whom does स refer, and which lakāra is
अकृन्तत्? **Key:** 1. चित्रग्रीवः 2. तस्य ग्रीवा चित्रा (आसीत्) 3. सर्वे कपोताः 4. आकाशम् 5. मूषकः (चित्रग्रीवस्य
सखा) 6. नद्याः समीपे 7. विवरे (एव) 8. दन्तैः 9. तत्पुरुषः · पाशैः बद्धान् (instr.) 10. हिरण्यकः · लङ् (the
imperfect), 3sg. Scoring 1 each (Q9, Q10 ½ + ½); **10 marks, pass 7.** Seams of the passage (key, after
the sitting): l.1 नद्याः + त → स्त; कपोतानाम् + ए; एकः + न → ओ; नृपः + आ → अ (gap). l.2 चित्रा + आ → आ
(सवर्णदीर्घः); अतः + त → स्त. l.3 कपोताः + व → आ; जाले + अ → एऽ. l.4 जालम् + च → ं; सह + आ; आकाशम् +
अ. l.5 चित्रग्रीवः + अ → ओऽ; हिरण्यकः + अ → ओऽ; सः + न → स. l.6 हिरण्यकः + म → ओ; मूषकः before the
comma; विवरम् + न → ं; नद्याः + स → ः. l.7 समीपम् + आ; the comma; हिरण्यकः + व → ओ; विवरे + ए → अ (gap,
अयादि); एव + अ → आ. l.8 सखे हिरण्यक (no change); अहम् + च → ं; बहिः + आ → र्. l.9 हिरण्यकः + ब → ओ; बहिः
+ आ; सः + प → स; पाशबद्धान् + क; कपोतान् + अ. l.10 ततः + द → ओ; दन्तैः + स → ः; सः + स → स; सर्वान् +
प; पाशान् + अ; the comma; कपोताः + च → श्च; मुक्ताः + अ → आ.

*Task E — production* (9 min). A dialogue of at least six lines between you and a guest (a man or a
woman), written joined with its pause form beneath, with: भवान् or भवती with the 3rd-person verb (at
least twice); two relative sentences (any of the four pairs); two compounds you coin (any of the four ✓
kinds); and one short form (मे, ते, नः or वः) not first. **Rubric (12 marks, pass 8):** person of the verb
with भवान्/भवती 2; the two relatives 2 × 1; the two compounds 2 × 1 (½ form, ½ correct kind for the
meaning); the short form 1; joined writing correct by Chapter 4's rules (checklist: four seams checked by
the marker — the spiral's join) 3; the pause form beneath 2.

**Pass:** every task at its pass mark and the §19 quiz at 7/10. Total 53 marks. **Remediation (each task
below its mark):** A → l01 Ex 1, l02 Ex 1 and tables 0.A/0.C from memory; B → l03 Ex 2–3; C → l04 Ex 1–2 and
4; D → re-read l01–l04 §17 aloud joined, then retell task D in five lines; E → l01 Ex 4 and l04 Ex 3, then a
new dialogue to the teacher.

**Timing:** 2 (instructions) + A 8 + B 7 + C 9 + D 10 + E 9 = **45** (§7, deviation 9: the plan's 8 + 8 + 10
+ 10 + 9 = 45 left no instructions).

**§19 quiz (10; homework after the sitting):** one item each on: the short-form rule; भवान् + 3sg; the dat.
sg. of सा; the m. nom. pl. of सर्व; इयम् with a feminine noun; the correlative of यदा; the particle that never
stands first (हि); 1.1.27 (TRADITION, "According to Pāṇini"); the kind of चित्रग्रीवः; मातृभाषा's stem form —
**the drafter writes them with keys, distractors from §12 of l01–l04, no ◐ cell and no untaught form**.

**§20 Bookings:** S0-ax (+1 day, v3.c06.l01), S0-ay (+1 week, v3.c06.l02), the standing monthly item —
verbatim (row 0.30). **§21 (45 = 15 before + 30 after):** as in the front matter.

**§4 HISTORY callout** (restated from l01–l04, cited, for the honesty overlay): "The doves and the mouse
come from the frame story of the first book of the Hitopadeśa, attributed to Nārāyaṇa and dated by
scholars to roughly the 9th–12th centuries CE; our five episodes are a retelling, not the text."
[REF:hitopadesha]. (Dating as REFERENCES gives it; hedged.)

---

## 6. Pass C checklist

- **Pronoun cells:** re-derive every cell of tables 0.A–0.D and the Δ cards against Whitney §491a, §495,
  §499b, §501, §504, §509, §523, §524 (re-opened 2026-11-10, each says what it is cited for); भवत् against
  §453 (भगवन्त्) and §456; सखा against §343a (the cells "like *agní*" derived, row 0.9).
- **Whitney sections re-opened for this note** and found to say what they are cited for: §343 (a, b, c),
  §364 (by reference only: **Pass C opens it** — the devī model for भवती), §450 (b), §452 (a, b), §453,
  §456, §490, §491 (a, b, c), §494, §495 (a), §496, §497, §499 (b), §500, §501 (a), §502 (a), §504, §505,
  §507, §508, §509, §512 (a), §513 (a), §516 (e), §522, §523, §524, §525 (c), §1077 (a, b), §1096–§1099,
  §1101, §1103 (b), §1118, §1121 (by reference: **Pass C opens it** for सु, दुस् as inseparable), §1122,
  §1130, §1133, §1246, §1247, §1249, §1250 (by reference: **open**), §1252, §1253, §1254 (a), §1263 (a),
  §1264, §1269, §1270, §1279, §1293 (c), §1294 ff. (**open**: the feminine of a bahuvrīhi, open item 4),
  §1312, §1313. **Locator corrections to the plan:** "§§495–496, 509, 523–524" for the declension stands
  (with §499b for एतद्, §504 for किम्, §501 for इदम्); the plan's "§§1246 ff." is made specific (row 0.21);
  "§491b" for the verse-quarter rule is wrong (8.1.18; plan c05#2); "§343" holds for सखा; "§§452–456"
  holds for भवत्, with the R6 cells at §450, §452–453.
- **Sūtras in learner text (6; plan §4.0.4 count unchanged):** 8.1.22 (l01); 1.1.27 (l02); 1.1.37, 1.4.59
  (l03); 2.2.29, 2.2.24 (l04) — number, text and the learner wording against the data file and the Kāśikā
  (done; rows 0.5, 0.13, 0.19, 0.22). 2.3.16 and 8.3.34 are re-quoted in the नमस्ते proof as already-quoted
  sūtras (c01.l03, c04.l02): **not counted again**. Teacher Notes sūtras listed in rows 0.5, 0.11, 0.19, 0.22.
- **Headwords (28 + upgrade):** each against Apte and MW (the "Check" columns); the four marked "Apte:
  sub-entry (Pass C)" (अयम्, एवम्, पादपः, चरितम्'s n. sense) located in Apte; ledger status re-grepped in
  the shipped `ledger-all.tsv` and the Chapter 4 §14 rows (when Chapter 4 ships).
- **Hitopadeśa:** every line of table 0.I against `hitop_u.htm` by line (done; re-check at Pass C against the
  printed edition REFERENCES names, or say "text of the GRETIL e-text"); Hit 1.40 (l. 483–486) as printed in
  l03 §13; Hit 1.71 words (l. 666–667: *ayaṃ nijaḥ paro veti … udāra-caritānāṃ*).
- **Joined forms:** every seam of every text in §§1–5 against Chapter 4's tables 0.A–0.C and its stops
  (each seam is listed under its text); the two ◐ seams printed (कश्चिन्नृपः; the oblique indefinites) are
  labelled; every space against STYLE_GUIDE §3.1.
- **Walk check (no form before its lesson):** l01 texts use no तद्/इदम् Δ cell beyond the owned, no सर्वे, no
  relative sentence, no compound analysis; l02 texts no relative sentence (यः only in tables), no grid word
  beyond the owned, no अधः; l03 texts no compound analysis (names whole); l04 texts nothing beyond. Words
  used and their lessons: पृच्छति (v3.c01.l01), कथयति (v3.c01.l03), धावति (v3.c03.l01), स्वपिति, गृह्णाति
  (v2.c06.l02), जानाति (v2.c04.l01), दन्तः (v2.c06.l04), कोमलः (v3.c02.l01), लघुः (v2.c06.l02), बलम्
  (v2.c06.l01), मन्दम् (v2.c05.l02), आपणः (v2.c05.l04), मधुरः, विशालः (v3.c02.l02), कथा (v1.c03.l04), हिम
  (v1.c04.l03), पात्र (v1.c05.l03), दुःखम् (v3.c03.l04), देशः (v3.c01.l02), बहिः (v3.c04.l02), सम्यक्, पदम्
  (v3.c04.l03–l04), गीता (task A item 7 — **Pass C greps; if not owned, replace by रमा or another owned
  name**). **Re-run after drafting.**
- **Hindi:** rows 0.H a–j against Kachru (bare) and, for j and the सर्वनाम names, against Guru (open item 1);
  the Hindi of every gloss at Pass B; Hindi grammar terms in Hindi spellings.
- **IPA:** every headword's IPA against STYLE_GUIDE §2 (ष /ʂ/ in युष्माकम्; श /ɕ/; anusvāra rule).
- **No ◐ demanded:** every objective, exercise item, quiz item, Station 0 key and exam task in §§1–5 checked
  against tables 0.A–0.F (done once in this note; re-run on the drafts).

---

## 7. Open items for review

1. **Guru 1952 on समास and सर्वनाम** (rows 0.H j; l02 §7). The note could not open Guru's book; a web
   search found Hindi school pages teaching six kinds of समास and others teaching four with कर्मधारय and
   द्विगु under तत्पुरुष. Recommendation: print "Hindi school grammar commonly lists six kinds …" with
   [REF:guru1952] only if Pass C finds the six in Guru; otherwise print it as a FACT about Hindi school
   textbooks **without** a key and **without** a number ("Hindi school grammars often name कर्मधारय and
   द्विगु as kinds of their own"), and likewise the six सर्वनाम names.
2. **कश्चिन्नृपः** (l02 model 3): the plan's sentence uses the ◐ seam त् + nasal. Kept with its label
   (कश्चिद्नृपः also correct). Alternative if the editor prefers no ◐ seam in a model: कश्चिद्व्याध आसीत्
   ("there was a certain hunter"; त् + व → द्व, ✓).
3. **अदस्** (असौ "yon"): the plan is silent. Recommendation: one Teacher Notes line in l02 ("a fourth
   demonstrative, असौ 'yonder', Whitney §501, is not taught in Volume 3"), and a §6 row in the plan for its
   Volume 4 address (v4.c05) at the chapter's ship.
4. **The feminine of a bahuvrīhi** (l04 §12 row 6: उदारचरिता): Whitney §1294 ff. not opened. Pass C opens
   it; if not confirmed, row 6 says only "the compound agrees with the one it describes" with नीलकण्ठः.
5. **Objective 4 of l04** (dvigu, upapada, avyayībhāva) is recognition only and is never scored (row 0.1).
   Recommendation: keep it, worded "read and name … (not scored)", because the plan names the three kinds;
   or drop it and leave the three kinds to §15 alone.
6. **GLOSSARY terms this chapter adds or updates** (grammar terms, not ledger words), with the Hindi
   form the lessons must use: **सर्वनाम** sarvanāma "pronoun — and Pāṇini's class of words beginning
   with सर्व (1.1.27): v3.c05.l01–l02" — सर्वनाम · **निपात** nipāta "particle (च, वा, एव, हि …; 1.4.57)" —
   निपात · **विग्रह** vigraha "the phrase with case endings that a compound compresses" — विग्रह (समास-विग्रह)
   · **द्वन्द्व** dvandva "the 'and'-compound: सिंहमूषकौ (2.2.29)" — द्वन्द्व (school print द्वंद्व) ·
   **तत्पुरुष** tatpuruṣa "the dependent compound: विद्यालयः = विद्यायाः आलयः" — तत्पुरुष · **कर्मधारय**
   karmadhāraya "adjective + noun, one referent: नीलकमलम् (a kind of tatpuruṣa)" — कर्मधारय · **द्विगु**
   dvigu "numeral first: सप्ताहः (a kind of tatpuruṣa)" — द्विगु · **बहुव्रीहि** bahuvrīhi "a compound that
   describes someone else: नीलकण्ठः (2.2.24)" — बहुव्रीहि · **अव्ययीभाव** avyayībhāva "an indeclinable
   first; the whole indeclinable: यथाशक्ति" — अव्ययीभाव · **उपपद** upapada (label) "a verb-noun as the
   second member: जलजम्, खगः, पादपः (kinds: v4.c04)" — उपपद · **प्रादि** prādi (label) "प्र and the rest
   first: सुप्रभातम् (v4.c04)" — प्रादि. **Updates:** **अव्यय** (+ "1.1.37; the correlative grid and the
   particles: v3.c05.l03") · **उपसर्ग** (+ "22 in the tradition's list, 1.4.58–59: v3.c05.l03") · **समास**
   (+ "system and four kinds: v3.c05.l04"). **Not added:** "enclitic" has no Sanskrit term in the course
   (the lessons say "short form", Hindi लघु रूप); the Hindi names पुरुषवाचक, निश्चयवाचक … are Hindi
   grammar's, printed in l02 §7 only (open item 1). Ledger words that are also terms: none this chapter
   (समासाः in l04 §16 is the GLOSSARY term used in a Sanskrit line, as सन्धिः was in c04 — but समास is
   **not** a ledger headword; the line glosses it).
7. **Exam room time** about 53 minutes with Station 0, as c01–c04. Recommendation: accept.
8. **Task D printed joined only** in the booklet (as c04's task C): accept.
9. **The Kāśikā e-text typos** (row 0.20: *rus*, *up*): recorded here; the lesson prints the corrected list.

### Deviations from the plan (with reasons)

1. **Whitney locators** (§6): §491b holds for "never first / not where emphasis falls"; the verse-quarter
   rule is 8.1.18 (plan c05#2, applied); §§1246 ff. specified per claim; §499b (एतद्), §504 (किम्), §507
   (indefinites), §512a (relative first), §§1098–1103 (the grid), §1130 (genitive-placed words), §1077
   (prefixes), §525c (पर, स्व) added. No cited section fails to say what it is cited for.
2. **Upasarga list** checked against the Kāśikā's prādi list (22, निस्/निर् and दुस्/दुर् counted apart) and
   Whitney §1077 (19); both printed on the card, with the 1.x error named. The plan's list stands.
3. **l01 model 3 and §16**: भवान्कुत आगच्छति, written together (a consonant-final word joins: STYLE_GUIDE
   §3.1); the plan printed "भवान् कुत". Model 4 uses निवसति (owned) for the plan's वसति: the plan's
   review c05#0 was rejected on challenge (अवसत् is shown as the core of निवसति in v3.c03.l03), but the
   simple वसति is not a ledger row, and the owned verb costs nothing.
4. **l04 model 2**: कपोतानां नृपश्चित्रग्रीवः replaces चित्रग्रीवो नाम कपोतराजः — the X नाम Y formula is
   c06.l03's (plan c05#1, major) and -राज at a compound's end needs 5.4.91 (v4.c04). The plan's §1.5 and
   l04 block keep the name's bahuvrīhi; only the frame changes.
5. **l03 model 2**: यत्र वृक्षास्तत्र कपोताः for the plan's …पक्षिणः — पक्षिणः is an R1 recognition form; a
   model the learner imitates should hold ✓ forms only.
6. **Joins**: the न् + त seam (not taught in c04) is avoided by a comma before the correlative (l03 §17 l.2,
   task D l.7); तत् + nasal (◐) avoided in l02 §16 (मम पुस्तकं तत्); stop + nasal and न् + च kept only in
   the plan's labelled कश्चिन्नृपः and the oblique indefinite display.
7. **Serial, episode 5** made concrete as four parts and a new exam passage, every line checked against the
   e-text (table 0.I): the episode retells a moment the serial already passed, because episode 3 (as built)
   already freed the doves — the plan's §1.5 line "the doves fly to the mouse's burrow" is kept as the
   retold flight (l01–l03), and the mouse's own words from the text (*aham alpa-śaktiḥ, dantāś ca me
   komalāḥ*) are added (l04).
8. **The relative sentence is l03's** (G6) and **यः** stays l02's headword, drilled in tables only there;
   §§1–2 contain no relative sentence.
9. **Exam timing**: 2 minutes of instructions inside the 45 (as c04): B 7 and C 9 instead of the plan's 8 and
   10. Task A item 7 avoids a dual (three persons → वयम्).
10. **Station 0 items made concrete** (row 0.30): the plan's short "S0 → next" lines kept in substance;
    S0-av's ten vigrahas chosen disjoint from task C (exam guard), and with no display member (मनोरथः, with
    the display मनसः, is replaced by हिमालयः).
11. **कापि** derived from का + अपि (plan c05#7); **सर्वाः** not starred, only marked as the feminine
    (c05#6); इदम्'s key cells ✓ (c05#3).
12. **Upgrade rows**: only शक्तिः (plan §3). The vigrahas also put owned stems in sentence dress (नीलः,
    प्रियम्, चित्रम्); they are not added as upgrade rows (the plan assigns none; `vocabulary_count` would
    change) — for the editor if wanted.
13. **review_of corrections:** l01 adds v3.c01.l01, l03, l04, v3.c03.l01, l04, v2.c05.l03, v2.c01.l01, l04,
    v1.c01.l01 (the cells and promises its §3 reaches); l02 adds v3.c04.l05 (S0-ao), v3.c02.l01, l02, l04,
    v1.c05.l04; l03 adds v3.c05.l01 (S0-aq), v1.c05.l05, v2.c01.l02, v2.c06.l02, v3.c03.l04, v3.c04.l01–l02
    (and c05#13's locator: अत्र, तत्र, यत्र are v1.c05.l03 and l05); l04 adds v3.c05.l02 (S0-as), v3.c04.l02,
    v1.c02.l03, v1.c03.l01, v1.c06.l01, v2.c01.l03, v2.c03.l03; l05 adds v3.c03.l05, v3.c02.l05, v2.c06.l01.
14. **Self-study minutes** set: 35 · 40 · 40 · 40 · 45 (the plan gives none), each §21 adding up.
15. **R6**: पुण्यवान् and भगवन् as card displays (Hit l. 474; v2.c01.l04), so the card redeems the v2.c01.l04
    promise in full.

---

## 8. Errata to shipped files

Searched (2026-11-10): every line in curriculum/volume-1, curriculum/volume-2 and
curriculum/volume-3/chapter-01–04 that sends pronouns, indeclinables, prefixes or compounds to a volume
or a lesson — grep for "v3.c05", "Volume 3" near "compound", "prefix", "pronoun", "machinery", and for each
item of plan §4.0.3's c05 rows: मम / तव / मह्यम्, नमस्ते's ते, भवान् / भवन्तः, कश्चित्, prefixes as a system,
मातृभाषा, जलज, खग, कमल-मुकुलम्, सखा / सखे, श्रीमन् / भगवन्, the tad paradigm.

**Two lines are now false** (the plan re-addressed roots and suffixes to Volume 4, §4.0.3 penultimate row
and §6; this chapter teaches only prefixes and compounds):

| File | Quote (verbatim, unique in the file) | Replacement |
|---|---|---|
| curriculum/volume-2/chapter-06/lesson-04-word-journeys.md (§15 FACT callout, lines 651–652) | `The machinery itself is Volume 3's\n> business; today you only read the joins.` (the line break and the callout's `> ` as in the file) | `Prefixes and compounds are Volume 3's\n> business (v3.c05.l03–l04); roots and suffixes are Volume 4's; today you only read the joins.` |
| curriculum/volume-2/chapter-06/lesson-04-word-journeys.md (§27, line 1129) | `Volume 3 (word-building machinery, deferred in §15).` | `Volume 3 (prefixes and compounds, v3.c05.l03–l04) and Volume 4 (roots v4.c03, suffixes v4.c04), deferred in §15.` |

(Pass C confirms each quote is unique in the file before the fix is applied.)

**Checked, unchanged (still true):**

| File | Line (as it stands) | Why it stays true |
|---|---|---|
| volume-1/chapter-01/lesson-04-aa-length-matters.md (§27) | "compounds (§17 line 6 preview) treated in Volume 3 (v3.c05)." | l04 |
| volume-1/chapter-02/lesson-02-u-and-uu.md (§27) | "Volume 3, v3.c05 (compounds — कमल-मुकुलम् echoes कमल-माला)" | l04 resolves कमलमुकुलम् |
| volume-1/chapter-02/lesson-03-the-vowel-r.md (§8, §27) | "(mātṛbhāṣā) 'mother tongue'. How stems put on their endings is a Volume 3 story" | मातृ/माता v3.c02.l04; मातृभाषा's stem form l04 |
| volume-1/chapter-03/lesson-02-ca-varga.md (§8, §27) | "machinery is Volume 3's story; today, one flower." · "Volume 3 (compound machinery behind जलज …)" | l04 (upapada label: जले जायते) |
| volume-1/chapter-03/lesson-01-*.md (§27) | "Volume 3 (खग-type compounds; कति खगाः / एकः खगः" | खग l04 (upapada label); कति खगाः v3.c02.l01 |
| volume-1/chapter-06/lesson-02-first-dialogue.md (§8) | "The full polite family, feminine forms included, is Volume 3's business" | भवती, भवन्तः l01 |
| volume-2/chapter-01/lesson-04-*.md | the calling shapes श्रीमन्, भगवन् "with the case machinery in Volume 3" | l01 R6 card (श्रीमन्; भगवन् display) |
| volume-2/chapter-05/lesson-02-keeping-the-conversation-alive.md (§8, §15) | "Prefixes as a system: Volume 3/4." · "why prefixes earn their own treatment in Volume 3/4" | l03 (the card); gati and the prefix meanings in depth v4.c04 |
| volume-2/chapter-05/lesson-03-wanting-and-liking.md (§8) | "तुभ्यम् is the familiar partner, matching त्वम्" | l01 table |
| volume-2/chapter-06/lesson-04-word-journeys.md (§8, line 604) | "a grammatical tradition that described that machinery in unusual detail, which Volume 3 begins to open" | "begins" — l03–l04 open two of the four parts |
| volume-2/chapter-06/lesson-05-volume-two-exam.md (§15) | "v3.c05, Pronouns, Indeclinables, Compounds" | this chapter |
| volume-3/chapter-01/lesson-01-who-and-what.md (§8, §15) | "the pronoun table is c05.l02" · "Suppletion line: सः and तम् are two stems, not a sound change (c05.l02)" | l02 (row 0.10) |
| volume-3/chapter-01/lesson-03-with-what-for-whom.md (§8, §15) | "ते 'to you, a short form of तुभ्यम्' (v3.c05.l01)" · "The pronoun table as a whole is v3.c05.l02's." · "the short form v3.c05.l01" | l01 (ते); "the pronoun table" there is the कः/सः table, l02 |
| volume-3/chapter-01/lesson-05-cases-exam.md (§15) | "Their ablative and locative cells are v3.c05.l01's." · "the pronoun table is v3.c05.l02's." | l01 (मत्, मयि …); l02 |
| volume-3/chapter-02/lesson-02-she-and-agreement.md (§14, §15) | "कया कस्यै कस्याः कस्याम्, काः … कासु (recognition, v3.c05.l02)" · "Its card is v3.c05.l02's." | l02 makes them ✓ (the किम् Δ card) |
| volume-3/chapter-02/lesson-03-fire-and-teacher.md (§15) | "irregular (सखा whole in v3.c05.l01; the rest v4.c05)" | l01 (row 0.9) |
| volume-3/chapter-02/lesson-04-parents-and-the-dual.md (§15, §27) | "first member माता- by 6.3.25 आनङ् ऋतो द्वन्द्वे … is v3.c05.l04's" · "v3.c05.l01 (भवान्), v3.c05.l04 (मातापितरौ)" | l04 (Teacher Notes 6.3.25); l01 |
| volume-3/chapter-02/lesson-05-roles-map-exam.md (§15) | "as display only (○, v3.c05.l01)" (अस्मभ्यम् vs अस्मत्) | l01 states the exception (◐) |
| volume-3/chapter-03/lesson-01-we-go.md (§7, §15) | "सर्वनामों की पूरी तालिका v3.c05.l01 में है" · "the full table is v3.c05.l01" · "teaches in v3.c05.l02" (स्वः) | l01; l02 §12 |
| volume-3/chapter-03/lesson-03-there-was.md (§15, §22) | "certain', previewed in §15 Step 9 (v3.c05.l02); the names चित्रग्रीवः and हिरण्यकः, gloss-line items" · "is v3.c05.l02's" (कश्चित्) · "twenty-two upasargas as a card are v3.c05.l03's" · "with मित्र for सखे, because सखा is v3.c05.l01's" | l02; the names glossed (rule 12); l03; l01 |
| volume-3/chapter-03/lesson-04-requests-and-advice.md (§15) | "the plural भवन्तः (v3.c05.l01)" · "सर्वे glossed until v3.c05.l02" | l01; l02 |
| volume-3/chapter-03/lesson-05-verb-exam.md (§15) | "the oblique cells of भवान् are v3.c05.l01's" | l01 |
| volume-3/chapter-04/lesson-01-when-vowels-meet.md (§8) | "तथास्तु and तथापि, headword in v3.c05.l03; महा- 'great', inside महर्षिः, v3.c05.l04's" | तथा l03 headword; the महा- note l04 (table 0.F labels) |
| volume-3/chapter-04/lesson-02-the-visarga-at-the-seam.md (§8) | "Step 3 is v3.c05.l01" · "मनस्, नमस् — are later: v3.c05.l04 and v4.c05" | l01 (step 3); मनसः in l04's vigraha (display), the declension v4.c05 |
| volume-3/chapter-04/lesson-03-when-consonants-meet.md (§8, §27) | "its recognition card in v3.c05.l01" (धीमान्) · "अस्मिन् 'in this' … its table is v3.c05.l02's" · "v3.c05.l04 (compounds: जगदीशः, सज्जनः read whole)" | R6 l01; अस्मिन् ✓ key cell l02; l04 labels जगदीशः, सज्जनः (table 0.F) |
| volume-3/chapter-04/lesson-04-unjoining.md (§8, §17, §27) | "its headword is v3.c05.l02" (कश्चित्) · "compound analysis is v3.c05.l04" | l02; l04 |

No other line in the searched files makes a claim about pronouns, indeclinables, prefixes or compounds that
the chapter now contradicts. The volume frames send these topics to Volume 3: true.

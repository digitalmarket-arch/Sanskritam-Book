# Research notes — Volume 3, Chapter 4 (सन्धिः — Sandhi in Use)

Fact base gathered **before** drafting v3.c04, the fourth chapter of Volume 3. Its binding
contract is the volume plan (`vol3-plan.md`, §4.4 with §1.2, §1.3, §1.4 = STYLE_GUIDE §3.1,
§1.5 episode 4, the c04 overlay column and the नमस्ते thread, §3 rules 6–15 and the figures
6 · 6 · 4 · 5 · 0 with the upgrade row सूर्यः, §4.0.1 row 5, §4.0.3, §4.0.4, §4.0.5, §5.1 Text
A1, D9, D10, D15, decision 4, the c04 rows of §7.4–§7.5 and §7.6); this note copies that
contract, re-derives every joined form against Whitney and the sūtra named, writes out every
Sanskrit text the five lessons use, and fixes the places where the plan is wrong, silent or
in conflict with shipped lessons (each listed in §7 with its reason). The chapter takes the
learner from reading every word in its pause form to reading and writing joined Sanskrit:
vowels meeting (l01); the visarga at the seam (l02); consonants meeting (l03); the reverse
procedure, पदच्छेदः, with the tradition's names संहिता and पदपाठः, from which lesson on every
taught text is printed joined over its pause form (l04); and the chapter exam (l05). In every
lesson **splitting comes before joining**: the learner first takes joined print apart, then
joins (plan D9).

Sources checked locally (read-only): Whitney 1889 by chapter (Chapter I §16 the avagraha;
Chapter III §§125–138 vowel combination, §§139–150 permitted finals, §§157–163 surd and sonant
assimilation, nasal, l and h, §§164–179 s and r, §§180–181 s → ṣ, §§189–191 n → ṇ, §§199–210
dentals, palatals and n, §213 final m); the Aṣṭādhyāyī data file (every sūtra number below was
looked up there, 2026-11-10); the Kāśikā (GRETIL `jvkasixu.htm`) on 6.1.101, 6.1.87, 6.1.88,
6.1.77, 6.1.78, 6.1.109, 1.1.11, 8.3.34, 6.1.132, 8.3.23, 8.2.39, 8.4.40, 1.4.109, 1.4.110;
the Nirukta (GRETIL `niruktau.htm`, after Sarup) at 6.28; the GRETIL Hitopadeśa (`hitop_u.htm`)
for Hit 0.6 and the prose after Hit 1.4; the GRETIL Pañcatantra (`vispancu.htm`, l. 5213) for
*mahān jambū-pādapaḥ*; Apte 1890 and Monier-Williams 1899 for every headword and for
*padapāṭha* and *Śākalya*; `scripts/translit.py` and `scripts/validate.py` (the IAST layout of
row 0.2 was tried on a sample block, 2026-11-10); the Volumes 1–2 + v3.c01 + v3.c02 ledger
(`ledger-all.tsv`, 832 rows) plus the 28 Chapter 3 headwords (Chapter 3 fact base row 0.28)
for ledger status; the §17 of the ten teaching lessons of v3.c01–c03 as they stand on disk
for the serial; v2.c06.l01 §17 for the crow story. Entering ledger: **439** (v3.c03 exit as
planned, STYLE_GUIDE §8). Exit: **460**. The four teaching lessons will be drafted in parallel
by writers who cannot see each other's files: each lesson section below is complete on its
own, and the Station 0 bookings (row 0.24) are worded once here and used verbatim by both the
booking and the running lesson.

---

## 0. Chapter-wide facts and policies

| # | Claim | Register | Source | Notes |
|---|---|---|---|---|
| 0.1 | **What sandhi is.** When words are said one after another without a pause, the end of one word and the start of the next adjust to each other: सन्धिः "joining". **External** sandhi (between words, and at the seam inside a compound, which behaves like a word boundary) is this chapter's subject; **internal** sandhi (inside a word, between stem and ending) is only observed and named, in l04 (row 0.14), its rules v4.c02. Pāṇini's joining rules apply "in saṃhitā" — the heading 6.1.72 संहितायाम् governs the vowel rules — and saṃhitā is defined in 1.4.109 (l04). The pause form (विराम-रूप) is each word as it stands before a pause (1.4.110 विरामोऽवसानम्, l04). | FACT; TRADITION (the names) | [REF:whitney1889 §125]; [REF:whitney1889 §152]; [REF:ashtadhyayi 6.1.72] | Whitney §125: "The concurrence of two vowels, or of vowel and diphthong, without intervening consonant, is forbidden by the euphony of the later or classical language"; §152 opens external combination. 6.1.72 **Teacher Notes only**. Learner wording (l01 §8): "Sanskrit joins words that are said together. The joining is called सन्धिः. Until now every Sanskrit line in this course was printed in pause form, each word as it sounds before a pause; this chapter shows the joins one kind at a time." |
| 0.2 | **Printing and IAST layout — decided once, for every lesson of the chapter** (STYLE_GUIDE §3.1 = plan §1.4, and the validator's rule that a parenthesis directly after a Devanagari word or run holds exactly that run's IAST). **(a) Word examples (l01–l03)** stand in tables with four columns and no parentheses: पदपाठः (pause) · IAST · संहिता (joined) · IAST. **(b) Running lines in l01–l03** (model sentences, §16, §17) are printed **joined so far** — joined only at seams already taught, the rest of the line in pause form — each Devanagari line followed on the next line by its own IAST in parentheses ending in the line's punctuation, then the English gloss and the Hindi; the pause form stands in a split key below the text (`<details>`), never between a Devanagari line and its IAST. **(c) From l04 on every taught text is printed joined, with its pause form beneath:** line 1 the joined line, its IAST in parentheses directly after it; line 2 the pause form (पदपाठः), its IAST in parentheses directly after it; line 3 the English gloss and the Hindi. So the IAST of each line stands with that line, and the order on the page is the one STYLE_GUIDE §3.1 sets — joined, pause form beneath, then IAST and gloss. **(d) IAST of a joined line** separates the words as Whitney §126a does, except that where vowels fuse the course writes the words together instead of using his apostrophe: a space at every word boundary, including inside a written block (जलमिच्छति → *jalam icchati*, उपर्यागच्छति → *upary āgacchati*, बुद्धिरेव → *buddhir eva*, कोऽपि → *ko 'pi*: the avagraha as an apostrophe after a space); where two vowels have fused into one, the romanized words are written together (नास्ति *nāsti*, सदैव *sadaiva*, सिंहस्योपरि *siṃhasyopari*, तथास्तु *tathāstu*). **(e) A compound is one word in the pause form;** where a line shows its inner seam, its members are hyphenated in both scripts (सूर्य-उदये · *sūrya-udaye* → सूर्योदये · *sūryodaye*). A hyphenated form never stands directly before a parenthesis (the validator reads only the run after the hyphen): in tables it has its own IAST column; in a running line the parenthesis comes at the line's end and contains the line's punctuation. | policy | STYLE_GUIDE §3.1; plan §1.4, D10; [REF:whitney1889 §126]; `scripts/validate.py` (rule 5) | **Tried on a sample block (2026-11-10):** `स पिपासितोऽस्ति। (sa pipāsito 'sti)` and `सः पिपासितः अस्ति। (saḥ pipāsitaḥ asti)` each on its own line pass; `नास्ति (nāsti)`, `तद्धितम् (taddhitam)`, `तद्हितम् (tadhitam)` pass; a single joined word with spaced IAST (`जलमुपर्यागच्छति (jalam upary āgacchati)`, `कोऽपि (ko 'pi)`) is skipped by the checker, not failed, and is the conventional romanization; **failed:** `सूर्य-उदये (sūrya-udaye)` (the regex sees only उदये) and an IAST of the joined line placed directly after the pause line. Hence (a)–(e). The shipped v2.c06.l02 prints *na ko'pi laghuḥ* (no space before the apostrophe): not changed; the chapter writes *ko 'pi* as the plan's §5.1 does. |
| 0.3 | **Where sandhi does not apply** (STYLE_GUIDE §3.1, made precise for the chapter): no sandhi across a daṇḍa (। ॥), across "?" or "!", across the dash of a speech frame (उवाच — "…"), or across the closing quotation mark before इति ("…गच्छामः" इति); beyond इति it resumes ("…" इत्येकः कपोतः वदति). **A comma is treated as a pause**: no sandhi across a comma, and a word before a comma keeps its pause shape (अहं तव मित्रम्, कपोतानां नृपः). The interjection हे is never joined to a following vowel (हे अर्जुन stays apart; Whitney §138f lists *he* among the uncombinable interjections); no drill puts हे before a vowel. | policy; FACT (हे) | STYLE_GUIDE §3.1; [REF:whitney1889 §138] | **The comma line is an extension** of STYLE_GUIDE §3.1, which is silent on commas; it follows what the plan's own c06 texts do (B2 line 3 सिंहः क्रुद्धोऽभवत्, मूषकं चागृह्णात् — no join across the comma) and keeps every key unambiguous (§7, deviation 7; open item 2). |
| 0.4 | **Vowel sandhi (l01) — the seven rules** (table 0.A). Scope of every rule: the left word, in its pause form, **ends in a vowel**; the right word **begins with a vowel**; nothing (daṇḍa, dash, quote, comma) stands between. A left word ending in ः, म् or another consonant is never a vowel seam (its seams are l02's and l03's). Order of checks: (1) a dual in -ई -ऊ -ए? → no join (प्रगृह्यम्); (2) like vowels → one long (सवर्णदीर्घः); (3) अ/आ + other vowel → गुणः or वृद्धिः; (4) इ/उ/ऋ + unlike vowel → यण्; (5) ए/ओ + अ → पूर्वरूपम्; (6) ए/ऐ/ओ/औ + other vowel → अयादि. **The hiatus left by अयादि at word end** (त आगच्छन्ति) is not joined further (Whitney §133c: such second joins are "rare and of sporadic character"). | FACT | [REF:whitney1889 §126]; [REF:whitney1889 §127]; [REF:whitney1889 §129]; [REF:whitney1889 §131]; [REF:whitney1889 §132]; [REF:whitney1889 §133]; [REF:whitney1889 §134]; [REF:whitney1889 §135]; [REF:whitney1889 §138] | Every section re-opened in the local text and found to say what it is cited for (row 0.A notes). **Locator corrections** to the plan's "Whitney §§126–138" (which holds): guṇa and vṛddhi are both §127 (there is no separate vṛddhi section); §128 and §130 are accent notes (not cited); §131 is the diphthong → semivowel rule with internal examples only (*naya* = ne-a, *bhava* = bho-a); §132–133 the external drop of य्; §134a the rare final ओ (and the -अः before a vowel), §134b the retained आव्; §135 the elision of अ after ए/ओ; §136 (printed "13." in the e-text) and §137 exceptions; §138 pragṛhya. |
| 0.5 | **Sūtras quoted to the learner in l01 (seven; TRADITION; plan §4.0.4)** — learner wording, fixed here, each printed once where its seam has just been observed: **6.1.101 अकः सवर्णे दीर्घः** (*akaḥ savarṇe dīrghaḥ*) "a simple vowel and the same vowel after it become one long vowel" · **6.1.87 आद्गुणः** (*ād guṇaḥ*) "after अ or आ, the two vowels become one guṇa vowel (ए, ओ, अर्)" · **6.1.88 वृद्धिरेचि** (*vṛddhir eci*) "before ए, ऐ, ओ, औ, they become one vṛddhi vowel (ऐ, औ)" · **6.1.77 इको यणचि** (*iko yaṇ aci*) "इ, उ, ऋ become य्, व्, र् before a vowel" · **6.1.78 एचोऽयवायावः** (*eco 'yavāyāvaḥ*) "ए, ओ, ऐ, औ before a vowel become अय्, अव्, आय्, आव्" · **6.1.109 एङः पदान्तादति** (*eṅaḥ padāntād ati*) "after a word-final ए or ओ, a short अ merges into it" · **1.1.11 ईदूदेद्द्विवचनं प्रगृह्यम्** (*īdūded dvivacanaṃ pragṛhyam*) "a dual ending in ई, ऊ or ए is pragṛhya, 'held apart'". | TRADITION | [REF:ashtadhyayi 6.1.101]; [REF:ashtadhyayi 6.1.87]; [REF:ashtadhyayi 6.1.88]; [REF:ashtadhyayi 6.1.77]; [REF:ashtadhyayi 6.1.78]; [REF:ashtadhyayi 6.1.109]; [REF:ashtadhyayi 1.1.11]; [REF:kashika 6.1.101] … [REF:kashika 1.1.11] | Data file (2026-11-10): 61101 अकः सवर्णे दीर्घः · 61087 आद्गुणः · 61088 वृद्धिरेचि · 61077 इको यणचि · 61078 एचोऽयवायावः · 61109 एङः पदान्तादति · 11011 ईदूदेद्द्विवचनं प्रगृह्यम्. Kāśikā (GRETIL): 6.1.101 *akaḥ savarṇe aci parataḥ pūrvaparayoḥ sthāne dīrgha ekādeśo bhavati / daṇḍāgram / dadhīndraḥ / madhūdake*; 6.1.87 *avarṇāt paro yo 'c … eko guṇa ādeśo bhavati / tavedam / khaṭvendraḥ*; 6.1.88 *… vṛddhir ekādeśo bhavati / ādguṇasya apavādaḥ / khaṭvaiḍakā*; 6.1.77 *aci parataḥ iko yaṇādeśo bhavati / dadhyatra / madhvatra / kartrartham*; 6.1.78 *ecaḥ sthāne aci parataḥ ay av āy āv ity ete ādeśāḥ yathāsaṅkhyam … cayanam / lavanam*; 6.1.109 *eṅ yaḥ padāntaḥ tasmād ati parataḥ … pūrvarūpam ekādeśo … agne 'tra / vāyo 'tra / ayavādeśayor ayam apavādaḥ*; 1.1.11 *… dvivacanaṃ … pragṛhya-sañjñaṃ bhavati / agnī iti / vāyū iti / māle iti / pacete iti*. **IR-017 in the open:** इको यणचि is 6.1.77 (the 1.x book cited 1.1.45). **Teacher Notes only:** 6.1.72 संहितायाम्; 6.1.125 प्लुतप्रगृह्या अचि नित्यम् (the pragṛhya stays unjoined); 8.3.19 लोपः शाकल्यस्य (the य्/व् of अय्/आय् dropped at word end, leaving the hiatus); 1.1.14 निपात एकाजनाङ्, 1.1.15 ओत् (other pragṛhya particles). The names सवर्णदीर्घः, गुणः, वृद्धिः, यण्, अयादि, पूर्वरूपम्, प्रगृह्यम् are taught as names (GLOSSARY, row 0.25). |
| 0.6 | **Vowel sandhi — what the learner meets that the seven rules do not drill** (each said once where met; none in a drill or a key): (a) **u + u** has no owned sentence example: one display, सु-उक्तम् → सूक्तम् (Whitney §126's own example; उक्तम् is display, R2). (b) **ṛ-final words** (पितृ, मातृ as stems) occur only inside compounds the learner does not build yet, so यण् with र् has no owned example and none is printed; the one yaṇ-र् example is the Kāśikā's *kartrartham* (कर्तृ + अर्थम्), in Teacher Notes. (c) **A word-final ओ that is not from -अः** (the u-stem vocative गुरो, c02.l03) "sometimes retain[s] the v and sometimes lose[s] it" (Whitney §134a): never put before a vowel in course text, not drilled. (d) **Inside a word** (internal) the same vowel grades appear — the guṇa of गुरवे (c02.l03), the vṛddhi augment of ऐच्छत् (c03.l03), the अय् of नयनम् (ने + अनम्, c02.l04) — observed in l01 in one line each; named in l04; rules v4.c02. (e) **Prefix + verb seams** (आगच्छत्, अवागच्छत्, प्राविशत्, उपाविशत्, न्यवसत्, प्रायच्छत्, c03.l03–l04) are the same rules inside one word; l01 names them (सवर्णदीर्घः; यण् in न्यवसत्). निरगच्छत् (निस् + अगच्छत्) is a visarga seam, -इः → र् before a vowel: l02. (f) **Vedic and optional exceptions** (Whitney §§135c–d, 137, 138d, 138g) are deferred: Vedic v5.c03, optional v4. | FACT | [REF:whitney1889 §126]; [REF:whitney1889 §134]; [REF:whitney1889 §136]; [REF:whitney1889 §137] | The c02.l04 lesson promises "its inner seam is shown in c04.l01" for नयनम्: kept (one line, labelled as inside a word). The plan's l01 table printed भो + अति → भवति there as well; the task brief and the plan's own inventory place internal sandhi among the items "observed and named only": भवति = भो + अति (IR-021) moves to l04, where all four inner-word items are named together (§7, deviation 3). |
| 0.7 | **Visarga sandhi (l02)** (table 0.B). **The fact behind the table:** a word-final visarga stands for a final स् (or, in a few words, र्); at a seam it takes the shape the following sound asks for, and **what decides is the vowel before it and the sound after it**: (1) before a voiceless consonant the visarga keeps its voiceless value — ः before क ख प फ and at a pause, श् before च छ, ष् before ट ठ, स् before त थ, and ः (or the doubled sibilant) before श ष स; (2) before a voiced sound (a vowel or a voiced consonant) **-अः** becomes ओ before a voiced consonant and before अ (whose अ then drops: ओऽ), and अ before any other vowel, the gap left; **-आः** becomes आ before any voiced sound, the gap left; **any other vowel + ः** (-इः -उः -एः -ऐः -ओः) and the **r-finals after अ/आ** (पुनः, प्रातः, अन्तः) become र्; (3) र् + र is never allowed: the first र् drops and a short vowel before it lengthens. | FACT | [REF:whitney1889 §145]; [REF:whitney1889 §169]; [REF:whitney1889 §170]; [REF:whitney1889 §172]; [REF:whitney1889 §174]; [REF:whitney1889 §175]; [REF:whitney1889 §176]; [REF:whitney1889 §177]; [REF:whitney1889 §178]; [REF:whitney1889 §179] | Re-opened: §170 (a pause → visarga; b. retained before त थ; c. → श् / ष् before च छ / ट ठ; d. before क ख प फ "in practice … the conversion is to visarga"); §172 before sibilants "either assimilated … or … visarga", and "the conversion to visarga is the prevalent practice" (Whitney's words: the course prints ः and accepts the doubled sibilant); §174 "Before a sonant … स् s is changed to the sonant र् r — unless … preceded by अ a or आ ā"; §175a "Final अस् as, before any sonant consonant and before short अ a, is changed to ओ o — and the अ a after it is lost"; §175c before other vowels "becoming simple अ a; and the hiatus … remains"; §176a सः, एषः; §177 -आस् "before any sonant … becoming simple आ ā; and a hiatus thus occasioned remains"; §178 "Final र् r, in general, shows the same form which स् s would show", b. "original final r preceded by a or ā maintains itself unchanged before a sonant: thus, punar eti"; §179 *punā ramate*. The plan's "Whitney §§170–179" holds; **§169a** (the r-final particles *antár, prātár, púnar*) and §169b (after vowels other than अ/आ, s and r give "precisely the same result") are added. |
| 0.8 | **Visarga — the special words and the cases outside the drills.** (a) **सः, एषः** (6.1.132; Whitney §176a): before **any consonant**, voiced or voiceless, the ः drops (स गच्छति, स करोति, एष बालकः); before अ they follow -अः (सोऽपि); before another vowel likewise (स एकम्); at a pause or a daṇḍa they keep ः (सः।). Not when the word is सकः or in a compound with अ- "not" (the sūtra's अकोः अनञ्समासे; Teacher Notes, no example drilled). (b) **भोः** (Whitney §174b: it "loses its s before vowels and sonant consonants"): भोः + voiced consonant → भो (भो राम), production ✓; before a vowel भो, display; Pāṇini needs 8.3.17 भोभगोअघोअपूर्वस्य योऽशि with 8.3.22 हलि सर्वेषाम् (before consonants) and 8.3.19 लोपः शाकल्यस्य (before vowels): Teacher Notes. (c) **The r-finals**: पुनः, प्रातः (l02 headword), अन्तः (l02 headword) end in र् at heart (Whitney §169a): र् stays before every voiced sound, after अ too (पुनरपि, पुनर्मिलामः, प्रातरेव, अन्तरागच्छ); before voiceless sounds and at a pause they look like s-finals (पुनः पुनः, पुनस्तत्र, पुनश्च). **बहिः** is *bahis*, an s-final (MW, Apte s.v. बहिस्): after इ, s and r give the same result (§169b), so its seams are the -इः column's (बहिर्गच्छति, बहिस्तिष्ठति). (d) **Inside compounds** the visarga follows the same table (मनस्-रथः → मनोरथः, Whitney §175a's *manobhava*), with one exception the learner owns: **नमस्कारः** (v1) keeps स् before क — "the final sibilant … of a stem before a derivative of √kṛ … is wont to be preserved … namaskāra" (Whitney §171b; 8.3.40 नमस्पुरसोर्गत्योः, Teacher Notes). (e) **ट ठ** row: ः → ष् (Whitney §170c) — named once, no owned word begins with ट or ठ in a seam, not drilled. (f) **A sibilant followed by a voiceless stop** (स्त, स्थ, श्च …): the visarga "may be dropped altogether" (Whitney §173a) — not drilled, keys accept ः. | FACT; TRADITION (the sūtras) | [REF:whitney1889 §176]; [REF:whitney1889 §174]; [REF:whitney1889 §169]; [REF:whitney1889 §171]; [REF:whitney1889 §173]; [REF:ashtadhyayi 6.1.132]; [REF:monierwilliams1899 s.v. bahis]; [REF:apte1890 s.v. बहिस्] | Data file: 83017 भोभगोअघोअपूर्वस्य योऽशि · 83019 लोपः शाकल्यस्य · 83022 हलि सर्वेषाम् · 83040 नमस्पुरसोर्गत्योः (all Teacher Notes). The plan review's c04#0 correction (बहिः is bahis) is followed. **Pāṇini's derivation of the visarga** (Teacher Notes only): 8.2.66 ससजुषो रुः (word-final स् → रु), 8.3.15 खरवसानयोर्विसर्जनीयः (→ visarga before a voiceless sound or a pause), 6.1.113 अतो रोरप्लुतादप्लुते and 6.1.114 हशि च (the अ + रु → ओ), 8.3.14 रो रि with 6.3.111 ढ्रलोपे पूर्वस्य दीर्घोऽणः (र् + र, the lengthening), 8.3.35 शर्परे विसर्जनीयः, 8.3.36 वा शरि (ः or the sibilant before श ष स). |
| 0.9 | **Sūtras quoted to the learner in l02 (two; TRADITION):** **8.3.34 विसर्जनीयस्य सः** (*visarjanīyasya saḥ*) "the visarga is replaced by स्" — learner wording: "Pāṇini's sūtra 8.3.34 विसर्जनीयस्य सः says: the visarga is replaced by स् before a voiceless consonant. Before त and थ you hear that स् plainly: नमः + ते → नमस्ते. (Before च it then becomes श्, by the rule of lesson 3; before क and प, and before श ष स, other sūtras let the visarga stand — Teacher Notes.)" · **6.1.132 एतत्तदोः सुलोपोऽकोरनञ्समासे हलि** (*etattadoḥ sulopo 'kor anañsamāse hali*) — learner wording: "6.1.132 says: the nominative ending of एतद् and तद् — the ः of एषः and सः — is dropped before a consonant. So स गच्छति, एष बालकः; but before a vowel they behave like any -अः: सोऽपि, स एकम्." | TRADITION | [REF:ashtadhyayi 8.3.34]; [REF:kashika 8.3.34]; [REF:ashtadhyayi 6.1.132]; [REF:kashika 6.1.132] | Data file: 83034 विसर्जनीयस्य सः · 61132 एतत्तदोः सुलोपोऽकोरनञ्समासे हलि. Kāśikā on 8.3.34: *khari ity anuvartate / visarjanīyasya sakāraḥ ādeśaḥ bhavati khari parataḥ / vṛkṣaśchādayati … vṛkṣasṭhakāraḥ* — so the sūtra's scope is "before a voiceless consonant" (khar), and the learner line says so; the plan's "the visarga is an s at heart" is reworded (§7, deviation 5): Pāṇini's visarga is itself the pause shape of the final s (8.3.15, Teacher Notes); 8.3.34 gives the s back. Kāśikā on 6.1.132: *… tasya saṃhitāyāṃ viṣaye hali parato lopo bhavati / eṣa dadāti / sa dadāti*. **नमस्ते thread, step 2** (plan §1.5): l02 §8 states it; step 1 (2.3.16, नमः + dative) was v3.c01.l03; step 3 (ते = the enclitic dative, 8.1.22) is v3.c05.l01 — said in one line, not taught. |
| 0.10 | **Consonant sandhi at word edges (l03)** (table 0.C). Scope: the left word, in its pause form, **ends in म् or in a stop or न्** (the permitted finals the learner owns: -म्, -त्, -क्, -ट्, -न्; Whitney §§139–150); the right word begins with a vowel or a consonant. The governing facts: (1) a final म् before a consonant is written as anusvāra, before a vowel it stays and the words are written together; (2) a final stop takes on the **voicing** of a following voiced sound (vowel or voiced consonant), and before a nasal usually becomes the nasal of its row; (3) a final त् takes on the **place** of a following palatal (च्च, च्छ, ज्ज) and of ल (ल्ल); with श it gives च्छ; with ह it gives द्ध; (4) a final न् after a short vowel doubles before a vowel; before च छ / ट ठ / त थ it becomes ं with the matching sibilant (ंश्च, ंष्ट, ंस्त); (5) a word that ends in a consonant is written together with the next word (STYLE_GUIDE §3.1), whether or not its sound changes (वृक्षात्पतति, तान्पश्यति). | FACT | [REF:whitney1889 §139]; [REF:whitney1889 §159]; [REF:whitney1889 §161]; [REF:whitney1889 §162]; [REF:whitney1889 §163]; [REF:whitney1889 §202]; [REF:whitney1889 §203]; [REF:whitney1889 §208]; [REF:whitney1889 §210]; [REF:whitney1889 §213] | Re-opened: §159 "the collision of surd and sonant sounds is avoided … by assimilating the final to the following initial" (*ṣáḍ aśītáyaḥ, dig-gaja*); §161 before a nasal "a final mute may be simply made sonant, or … changed to the nasal of its own class … In practice, the conversion into a nasal is almost invariably made in the manuscripts"; §162 "Before l, a final t is … fully assimilated, becoming l: thus, *tál labhate*"; §163 before ह "the ह् h may either remain unchanged or be converted into the sonant aspirate … *tad dhí*. In practice, the latter method is almost invariably followed"; §202a त् + palatal (*etac chattram, vidyuj jāyate, saccarita*), §202b-c न् + ज → ञ्ज ("more often neglected … in the manuscripts"); §203 त् + श → च्छ, "in practice almost always"; §208 न् + च/ट/त (*devāṅś ca*); §210 doubling "after a short vowel … before any initial vowel"; §213 final म्: "unchanged only before a vowel or labial mute", "before a mute of any other class … a nasal of that class", "before r, a sibilant, or h … anusvāra", and (i) "the assimilated m is generally represented in texts by the anusvāra-sign". **Locator correction (plan review c04#6, confirmed):** the l03 heading's "§§159, 161–163, 202–210, 213" holds; the plan's grammar inventory cites §163 for त् + ह and §§208, 210 — all confirmed. |
| 0.11 | **Consonant sandhi — exceptions and cases not drilled.** (a) The anusvāra before a stop **may** be written as the class nasal (किं करोति / किङ्करोति; सर्वं कुशलम् / सर्वङ्कुशलम्): both correct, both accepted in every key; before य र ल व श ष स ह only ं is written (Whitney §213d–f: the nasal semivowel of the grammarians is not printed). (b) A final stop before a nasal: the nasal (तन्मे) is printed, the voiced stop (तद्मे) is also correct and accepted (§161). (c) त् + ह: द्ध printed, द्ह accepted (§163); त् + श: च्छ printed, च्श accepted (§203a: "Some authorities regard the conversion of ś to ch … as … only optional"). (d) न् + ज: ञ्ज printed, न्ज accepted (§202c). (e) **Not covered, never drilled**, said once if met: न् + ल (the nasalised ल्ल, Whitney §206); न् + श (ञ्श / ञ्छ, §203); न् + स (an inserted त्, §207); ट् + स (§199e); a short vowel + छ, which doubles it as च्छ (after a short vowel obligatory, inside a word or between words; after a word-final long vowel optional: 6.1.73 छे च, 6.1.75 दीर्घात् with 6.1.76 पदान्ताद्वा, Teacher Notes; Whitney §227a) — met once, in the title पदच्छेदः = पद-छेदः (l04, display); final श्, ष्, ह्, ज् (root nouns: दिश् → दिक्, -भाज् → -भाक्; 8.2.62 क्विन्प्रत्ययस्य कुः for दिश्, 8.2.30 चोः कुः for -भाज्, Teacher Notes), whose pause forms the learner owns whole. (f) A final ङ् doubled after a short vowel (§210) has no owned word: not shown. | FACT | [REF:whitney1889 §213]; [REF:whitney1889 §161]; [REF:whitney1889 §163]; [REF:whitney1889 §203]; [REF:whitney1889 §202]; [REF:whitney1889 §206]; [REF:whitney1889 §207] | Data file: 84058 अनुस्वारस्य ययि परसवर्णः · 84059 वा पदान्तस्य (the optional class nasal at a word end) · 84045 यरोऽनुनासिकेऽनुनासिको वा (stop → nasal before a nasal, optional) · 84060 तोर्लि · 84062 झयो होऽन्यतरस्याम् · 84063 शश्छोऽटि · 83032 ङमो ह्रस्वादचि ङमुण्नित्यम् (the doubled न्) · 83007 नश्छव्यप्रशान् (न् + च/ट/त) · 84055 खरि च · 84056 वाऽवसाने · 61073 छे च · 82030 चोः कुः: **Teacher Notes only**. |
| 0.12 | **Sūtras quoted to the learner in l03 (three; TRADITION):** **8.3.23 मोऽनुस्वारः** (*mo 'nusvāraḥ*) — "a word-final म् becomes anusvāra before a consonant": सत्यम् वद → सत्यं वद; before a vowel it stays (सत्यमेव). · **8.2.39 झलां जशोऽन्ते** (*jhalāṃ jaśo 'nte*) — learner wording: "at the end of a word, a stop is replaced by the plain voiced stop of its row (ग्, ज्, ड्, द्, ब्). So षट् is षड् in Pāṇini's grammar, and stays so before a vowel or a voiced consonant: षट् + अत्र → षडत्र. Before a voiceless sound it becomes voiceless again, and at a pause it may (the course prints the voiceless pause form) — षट्, षट् पठति (Teacher Notes give the sūtras)." · **8.4.40 स्तोः श्चुना श्चुः** (*stoḥ ścunā ścuḥ*) — "स् and the त-row, meeting श् or the च-row, become श् and the च-row": जगत् च → जगच्च; and the visarga's श्च of l02 (रामश्च) is the same sūtra at work on the स् of 8.3.34. | TRADITION | [REF:ashtadhyayi 8.3.23]; [REF:kashika 8.3.23]; [REF:ashtadhyayi 8.2.39]; [REF:kashika 8.2.39]; [REF:ashtadhyayi 8.4.40]; [REF:kashika 8.4.40] | Data file: 83023 मोऽनुस्वारः · 82039 झलां जशोऽन्ते · 84040 स्तोः श्चुना श्चुः. Kāśikā: 8.3.23 *makārasya padāntasya anusvāraḥ ādeśo bhavati hali parataḥ / kuṇḍaṃ hasati / vanaṃ hasati*; 8.2.39 *jhalāṃ jaśaḥ ādeśā bhavanti padasyānte vartamānānām / vāgatra / śvaliḍatra / agnicidatra / triṣṭubatra* (its first example is वाक् + अत्र, a word the learner owns: l03 §4); 8.4.40 *sakāratavargayoḥ śakāracavargābhyāṃ sannipāte śakāracavargāv ādeśau bhavataḥ*. **8.2.39 states more than voicing before a voiced sound** (it voices every word-final jhal; 8.4.55 खरि च and 8.4.56 वाऽवसाने un-voice it before a voiceless sound and optionally at a pause): the learner line says this in its last sentence, so that no learner concludes that the pause form षट् is wrong. |
| 0.13 | **The reverse procedure — पदच्छेदः (l04).** A fixed order of checks the learner can run on any joined line (learner text, l04 §8 and §15): **(1) Stops first.** Mark every daṇḍa, "?", "!", dash, quotation mark and comma: no seam crosses them. **(2) The spaces.** A space in joined print follows a vowel, an anusvāra or a visarga (STYLE_GUIDE §3.1): undo the word before it — ं → -म्; a final -ओ before a voiced consonant → -अः (परमो → परमः); a final -अ before a vowel → -अः or -ए; स or एष before a consonant → सः, एषः (6.1.132); a final -आ before a voiced sound → -आः (or -ऐ before a vowel); a final -ए/-ऐ/-ओ/-औ standing → itself; a final ः stays. **(3) The signs inside a written block.** Look in this order: ऽ (restore अ: ओऽ ← -अः or -ओ; एऽ ← -ए); र्, श्, स् before a consonant at a likely word boundary (a visarga or an r-final); a consonant + vowel (a consonant-final word: -म्, -त्/-द्, -क्/-ग्, -न्/-न्न); the conjunct seams (च्च च्छ ज्ज ल्ल द्ध न्न न्म ण्म ंश्च ंस्त); then the vowel fusions (आ ई ऊ ए ओ ऐ औ, and य्/व्/र् + vowel). **(4) Candidates.** At each seam write every pause-form pair that could have produced it (table 0.D). **(5) Choose.** Keep only pairs whose halves are both real words (your ledger or the dictionary) and fit the sentence (case, agreement, the verb's person and number). **(6) Check.** Write the pause form, read it aloud, and re-join it: the result must be the line you started from. | FACT; policy (the order) | [REF:whitney1889 §126]; STYLE_GUIDE §3.1; plan c04.l04 block | The plan's "scan left to right; at each fused sound list every pause-form pair …; choose the one that gives real words in a grammatical sentence" is kept as steps (3)–(5); steps (1), (2), (6) are added so that the method is complete for the course's printing convention. **Splitting can be ambiguous** (learner text, FACT): two owned examples — (i) मूषक आगच्छति: -अ before a vowel can be -अः or -ए, so मूषकः (nominative) or मूषके (locative); the sense chooses मूषकः (the 3sg verb fits either; with मूषके "at/onto the mouse" the sentence would name no one who comes) (Text A2's line; c06.l01); (ii) छात्रा गच्छन्ति: -आ before a voiced consonant can be the -आः of छात्राः (m. pl.) or a word in -आ, छात्रा (f. sg., owned c02.l02); the plural verb chooses छात्राः — while छात्रा गच्छति is the girl student alone. The quiz rewards the candidate list, not only the answer (plan main risk). |
| 0.14 | **Internal sandhi observed and named (l04 only; rules v4.c02, D18).** One line each, labelled "inside a word — named here, taught in Volume 4": (a) **ṇ** — after र, ऋ or ष in the same word a following न becomes ण if nothing blocks it and the न is not word-final (रामान्, c02.l01, keeps न्: 8.4.37 पदान्तस्य, Teacher Notes) (vowels, ह, य, व, र and the क- and प-rows do not block; the other stops, the sibilants श स and ल do): रामेण (c01.l03) but देवेन (no trigger), रथेन (थ blocks), पितॄणाम्, हरीणाम्, ऋषीणाम् (c02.l03–l04); (b) **ṣ** — a स् of an ending becomes ष् after a vowel other than अ/आ, or after क् or र्: रामेषु, नदीषु, गुरुषु beside बालिकासु (c02.l01–l03); करोषि (c03.l01) is the same law; (c) **guṇa inside गुरवे** — गुरु + ए: the उ takes its guṇa grade ओ, and ओ + ए gives अव् + ए by l01's अयादि: गुरवे (c02.l03; likewise अग्नये); (d) **भवति = भो + अति** (IR-021 in the open, FACT): the course's first verb is भो + अति by अयादि; the ओ is the guṇa *substitute* of the root's ऊ (भू), not an "insertion" (Volume 4: v4.c02). The 1.x book's account is corrected in one line. | FACT | [REF:whitney1889 §189]; [REF:whitney1889 §191]; [REF:whitney1889 §180]; [REF:whitney1889 §131]; [REF:whitney1889 §235] | The ṇ triggers and blockers follow plan §7.6 (v3.c02 row: "The triggers are र, ऋ and ष with nothing blocking, on the i-side too: हरीणाम्, ऋषीणाम्") and 8.4.1–2 (Teacher Notes: 84001 रषाभ्यां नो णः समानपदे, 84002 अट्कुप्वाङ्नुम्व्यवायेऽपि); ṣ: 8.3.59 आदेशप्रत्यययोः (Teacher Notes). The s → ṣ law is **named, not taught**, so v2.c04's line that the reason for the ष of करोषि / शृणोषि "waits for Volume 4" stays true (plan §4.0.3; the error-sweep decision). Whitney §131b gives *bhava* (bho-a) as the internal example of the diphthong → semivowel rule. §235 (guṇa and vṛddhi as grades) — **Pass C opens §235 before the locator prints**; if it does not say this, cut it. |
| 0.15 | **Sūtras quoted to the learner in l04 (two; TRADITION):** **1.4.109 परः सन्निकर्षः संहिता** (*paraḥ sannikarṣaḥ saṃhitā*) — "the closest contact (of sounds) is called saṃhitā": joined text, sounds said with no gap between them; **1.4.110 विरामोऽवसानम्** (*virāmo 'vasānam*) — "stopping is called avasāna, the pause": the place where a word stands in its pause form. | TRADITION | [REF:ashtadhyayi 1.4.109]; [REF:kashika 1.4.109]; [REF:ashtadhyayi 1.4.110]; [REF:kashika 1.4.110] | Data file: 14109 परः सन्निकर्षः संहिता · 14110 विरामोऽवसानम्. Kāśikā: 1.4.109 *para-śabdo 'tiśaye vartate / saṃnikarṣaḥ pratyāsattiḥ / paro yaḥ sannikarṣaḥ, varṇānām ardhamātrākālavyavadhānaṃ, sa saṃhitāsañjño bhavati / dadhyatra / madhvatra* ("closest contact: sounds separated by no more than the time of half a mātrā") — Teacher Notes may give the half-mātrā gloss attributed to the Kāśikā; 1.4.110 *viratiḥ virāmaḥ … so 'vasāna-sañjño bhavati*. **The ledger words** संहिता and अवसानम् (l04 headwords) carry their ordinary senses (Apte s.v. संहिता "Combination, union, conjunction … A collection"; s.v. अवसान "Stopping. Conclusion, termination"); the technical senses are GLOSSARY terms (row 0.25). |
| 0.16 | **saṃhitā and padapāṭha (l04 §4, TRADITION).** The Vedic hymns are handed down in more than one recitation: the **saṃhitā** text, joined, and the **padapāṭha** "word-recitation", which gives "each word of a Vedic text separately in its original form … without regard to the rules of Saṃdhi" (MW s.v. padapāṭha). The tradition holds Śākalya to be the arranger of the Ṛgveda's padapāṭha (MW s.v. Śākalya: "who is held to be the arranger of the Pada text of the Ṛg-veda"). The course's pause form is the same idea, applied to its own sentences. **An early dispute about word division:** the Nirukta (6.28) reports that Śākalya divided a Vedic word वायः as वा यः, and objects that the verb would then have had another accent and the sense would be incomplete — a split the tradition itself argued over. | TRADITION | [REF:monierwilliams1899 s.v. padapāṭha]; [REF:monierwilliams1899 s.v. śākalya]; [REF:nirukta 6.28] (key added 2026-11-10, §7 editor's decision 1) | MW local: *pada-pāṭha* "the Pada method of recitation or writing (a method of arranging each word of a Vedic text separately in its original form … without regard to the rules of Saṃdhi"; *Śākalya* "N. of an ancient grammarian and teacher, Prāt.; Nir.; Pāṇ. &c. (who is held to be the arranger of the Pada text of the Ṛg-veda)". GRETIL `niruktau.htm` (based on Sarup's edition) 6.28: *veti ca ya iti ca cakāra śākalyaḥ / udāttaṃ tv evam ākhyātam abhaviṣyad asusamāptaś cārthaḥ*, after quoting *vane na vāyo nyadhāyi cākan* (RV 10.29.1 — confirmed by the editor in the GRETIL Ṛgveda, `rv_10_u.htm`: *vane na vā yo nyadhāyi cākañ…*, printed there with Śākalya's division; learner text may cite [REF:rigveda 10.29.1]). No date is given in learner text (no HISTORY claim). Decision 4's "padapāṭha source key" is met by MW (existing key) for the definition and by the new `nirukta` key for the dispute. **The Vedic padapāṭha in detail is v5.c03** (plan §6): one TRADITION line here. |
| 0.17 | **Production marks (D15, extended; the paradigm ledger at l05: "the three sandhi maps ✓ in the listed rows").** **Vowel map (l01):** सवर्णदीर्घः with अ/आ and इ/ई ✓ (उ + उ display); गुणः ✓ (ए, ओ, अर्); वृद्धिः ✓ (ऐ, औ); यण् with इ/ई and उ ✓ (ऋ display); अयादि at word end: -ए → अ + gap, -ऐ → आ + gap, -औ → -आव् ✓ (-ओ not from -अः: not drilled); पूर्वरूपम् with -ए ✓; प्रगृह्यम् ✓ (recognised and left unjoined). **Visarga map (l02):** the -अः column ✓ (ट ठ named only); the -आः column ✓ (**deviation**: the plan has ◐); the other-vowel column ✓ for -इः -उः and, by the same rule, -एः -ऐः -ओः (the plan names -इः/-उः; l02's own headwords उच्चैः, शनैः are -ऐः words); the r-finals पुनः, प्रातः, अन्तः ✓ and बहिः ✓ (by the -इः column); सः/एषः ✓; भोः + voiced consonant ✓; the र + र row ◐. **Consonant map (l03):** म् → ं, and म् + vowel ✓; voicing of a final stop before a voiced sound ✓; त् + च/छ/ज ✓; न् doubled after a short vowel, and not after a long one ✓; writing a consonant-final word together with the next ✓; nasal assimilation (stop + nasal), त् + ल, त् + श, त् + ह, न् + ज, न् + च/ट/त ◐. **Reverse map (l04):** every ✓ row of the three maps, run backwards ✓; the ◐ rows recognised. | policy | plan D15; c04.l01–l03 blocks; c04.l05 block | ◐ = recognised and split when met; never required in a join, never a wrong option. A key that asks for a ✓ join accepts every correct variant (row 0.11 a–d). **The -आः promotion** (§7, deviation 6): the -आः rule is one line (आ before every voiced sound; the -अः shapes before voiceless sounds), its plurals are everywhere in the serial and in the c06 texts, and from v3.c05.l01 the learner's compositions are joined (plan §1.2); a ◐ here would leave every plural subject unwritable. |
| 0.18 | **Policy: what is allowed in Chapter 4's taught text, lesson by lesson** (everything Chapter 3 row 0.24 allowed — the present P and Ā, the imperfect, the imperative, the optative's 3rd person, all nouns of T1–T5 in their ✓ cells, the dual card, the R-cards R1–R4 labelled — plus): **l01** — vowel seams joined (the seven rules); the hyphenated compound seam (सूर्य-उदये → सूर्योदये); every other seam in pause form; running texts labelled "joined so far". **l02** — + visarga seams (table 0.B) and सः/एषः, भोः; still no consonant seam (म्, त्, क्, न् stay in pause form, and a consonant-final word is not yet written together). **l03** — + consonant seams; from here a running text can be joined at every seam (still labelled "joined so far", now complete). **l04** — every taught text printed joined, the pause form beneath (row 0.2c); internal sandhi named (0.14). **l05** — no new forms. **Not allowed anywhere in Chapter 4:** the ◐ joins as required outputs; the full pronoun tables and the enclitics (मे, ते as words of their own: c05.l01 — नमस्ते's ते is said to be "to you", the short form, full story c05.l01); कश्चित्, अयम्, अन्य (c05.l02) except inside the owned benediction and as the labelled display कस्मिंश्चित् … (not printed: table 0.C uses only owned words); compounds as a system (c05.l04) — a compound is read whole, its inner seam shown hyphenated; the R5 absolutive (c06.l01); the present + स्म (c06.l03); the future; participles beyond the owned predicate adjectives and R2. Display words, each labelled once where it stands: तथा (in तथास्तु, तथापि; headword c05.l03), एवम् (in मैवम्; c05.l03), महा- (in महर्षिः; c05.l04), चर (not used: §7, deviation 9), भाक् (in दुःखभाक्, "having a share in"), उक्तम् (in सूक्तम्, R2), and the l04 "editions vary" phrases (row 0.20). | policy | plan §1.2, §4.4; Chapter 3 fact base row 0.24 | Walk check done for every text in §§1–5 below (§6 re-runs it). Each lesson may use earlier lessons' forms; nothing reaches forward. The owned joined chunks (नमस्ते, स्वागतम्, नमस्कारः, विद्यालयः, हिमालयः, परोपकारः, सुप्रभातम्, शुभरात्रिः, मध्याह्नः, धन्यवादः …) stay usable in every lesson in the form owned. |
| 0.19 | **Deferred, with addresses** (each said once, where met): internal sandhi as rules — ṇatva, ṣatva, guṇa and vṛddhi as substitutes (v4.c02, D18); the enclitic ते and the pronoun tables (c05.l01, the नमस्ते thread's step 3); कश्चित् and the indefinites (c05.l02: "the seams are c04's"); compounds and vigraha (c05.l04: परोपकारः's seam from l01, मनोरथः's from l02); the s-stem declension (मनस्, नमस्: v4.c05; one line in l02, which keeps v1.c03.l04 honest — §8); the absolutive (c06.l01); reading authentic joined prose (c06.l01–l04); the Vedic padapāṭha in detail, Vedic exceptions (v5.c03); optional exceptions of the grammarians (v4); metre (v5.c04). | policy | plan §4.4, §6, §4.0.3 | — |
| 0.20 | **"Editions vary" (l04; STYLE_GUIDE §3.1, last bullet).** Printed texts differ in how fully they join and divide words. Three owned or labelled examples: (a) Volume 1 printed the benediction's last quarter with spaces, मा कश्चिद् दुःखभाग् भवेत् (v1.c06.l04 line 224); by the course's convention (consonant-final words written together) it is मा कश्चिद्दुःखभाग्भवेत् — the same sandhi, a different division; (b) the GRETIL Hitopadeśa prints Hit 0.6 as *pātratvāt dhanam āpnoti dhanād dharmaṃ tataḥ sukham* — the e-text leaves पात्रत्वात् धनम् unjoined (full sandhi: पात्रत्वाद्धनम्) and in the same line joins धनाद्धर्मम्; (c) the GRETIL Pañcatantra prints *mahān jambū-pādapaḥ* (Book 4, frame story, the opening prose), where full sandhi gives महाञ्जम्बू° (न् + ज → ञ्ज, row 0.11d). The words of (b) and (c) are display, glossed (पात्रत्वात् "from worthiness", धनम् "wealth", महान् "great", जम्बूपादपः "rose-apple tree"); they return in c06.l03–l04. | FACT (what the e-texts print); policy | [REF:hitopadesha prastāvikā 6]; [REF:panchatantra] (Book 4, frame story); plan §1.4 | GRETIL `hitop_u.htm` l. 118 (*pātratvāt dhanam āpnoti dhanād dharmaṃ tataḥ sukham // Hit_0.6 //*) and `vispancu.htm` l. 5213 (*asti kasmiṃścit samudropakaṇṭhe mahān jambū-pādapaḥ sadā-phalaḥ*) re-found 2026-11-10. Learner loci: "Hitopadeśa, introductory verses, 6"; "Pañcatantra 4, frame story, the opening prose" (G2). No claim about any printed edition. |
| 0.21 | **Hindi parallels (taught as exact contrasts; each lesson uses only its own rows; table 0.E).** | FACT; TRADITION | [REF:kachru2006] (cited bare); [REF:guru1952] (cited bare); [REF:masica1991 ch.6] | See table 0.E. No claim that Hindi speakers make any error more than others; no frequency claim. |
| 0.22 | **Ledger (STYLE_GUIDE §8 rules 1–15; plan §3):** 439 → 445 (l01: 6) → 451 (l02: 6) → 455 (l03: 4) → 460 (l04: 5) → 460 (l05: 0). 21 ledger-new, each grep-checked against the 832-row `ledger-all.tsv` (Volumes 1–2, v3.c01, v3.c02) and the 28 Chapter 3 headwords: none present (exact-form check on every headword; IAST check on the stems: *ālaya, udaya, īśa, iva, eva, vā, prātar, bahis, antar, uccais, śanais, tu, dik/diś, samyak, nātha, dhīmat, pada, vākya, sandhi, avasāna, saṃhitā* — no row; the only near hits are अन्त "end" (v1.c05.l02, the homograph flagged in §3) and the compounds विद्यालयः, हिमालय, शनिवासरः, which contain l01–l02 headwords and do not count them, rule 10). **Upgrade row** (vocabulary_count only): सूर्य → सूर्यः (l01; v1.c05.l04). **vocabulary_count:** l01 **7** · l02 **6** · l03 **4** · l04 **5** · l05 **0**. **Sandhi spellings never count** (rule 11): नास्ति, तथास्तु, कोऽपि, जगच्च … add 0; नमस्ते stays counted. **Cells drilled** (§14 line; for this chapter, the ✓ cells of the lesson's sandhi map, row 0.17): l01 **14** (सवर्णदीर्घः ā, ī · गुणः e, o, ar · वृद्धिः ai, au · यण् y, v · अयादि at word end a+gap, ā+gap, āv · पूर्वरूपम् e' · प्रगृह्यम् 1) · l02 **26** (-अः column 7 · -आः column 5 · other-vowel column 6 · r-finals 6 · सः/एषः 2) · l03 **10** (म् → ं, म् + vowel · voiced final क्, ट्, त् · त् + च/छ, त् + ज · न्न after a short vowel, न् after a long vowel · written together) · l04 **0 new** (the three maps run backwards) · l05 **0 new (50 reviewed)**. | policy | STYLE_GUIDE §8; plan §3 | The grammar terms (सवर्णदीर्घः, गुणः …) are GLOSSARY items, not ledger words (row 0.25). सन्धिः, संहिता, अवसानम्, पदम्, वाक्यम् are the plan's l04 headwords: they count as **words with their ordinary senses** ("joining, union; treaty" · "union; a collection" · "stopping, end" · "step; word" · "speech, sentence", Apte), usable in sentences; their technical senses are GLOSSARY rows. That double status is recorded as an open item (§7 item 3); the plan's figures stand. |
| 0.23 | **Pedagogy anchors** (the error sweep's binding decisions): retrieval before re-reading [REF:roediger2006] (only: retrieval practice beats re-reading for long-term retention); spaced review at +1 day and +1 week [REF:cepeda2006]; chunks learned whole and analysed later [REF:nation2013] (never "fastest"). | policy | research/verification-log.md, "Error sweep … Decisions recorded" | The chapter is the clearest case of the third: नास्ति, नमस्ते, कोऽपि, जगच्च, पुनर्मिलामः were carried whole for one or two volumes and are now opened (row 0.F). |
| 0.24 | **Station 0 bookings — canonical wording** (each printed verbatim in the booking lesson's §20 and in the running lesson's §3, **without** the S0 labels, as "- +1 day: …"). **Arriving from Chapter 3** (quoted from the Chapter 3 fact base row 0.30 **and** diffed against the lesson files on disk, 2026-11-10: `lesson-04-requests-and-advice.md` §20 and `lesson-05-verb-exam.md` §20 — identical; this note uses the lesson files' text): **S0-ac** (v3.c03.l04 §20, run by l01): "+1 week: the request role-play — a guest at a teacher's door, played with a partner in both roles: three requests with भवान् and the 3rd person (आगच्छतु भवान्), two with the 2nd person (उपविश!), one prohibition with मा; v3.c04.l01's Station 0 runs exactly this." **S0-ad** (v3.c03.l05 §20, run by l01): "+1 day: five verbs in the four lakāras — गच्छति, लभते, अस्ति, करोति and वदति, each said and written in the 3rd person singular of लट्, लङ्, लोट् and विधिलिङ् — गच्छति · अगच्छत् · गच्छतु · गच्छेत्; v3.c04.l01's Station 0 runs exactly this." **S0-ae** (v3.c03.l05 §20, run by l02): "+1 week: the tense switch, reversed — the crow story as you told it in the imperfect in the exam (task B) told back in the present, line by line (एकः काकः आसीत् → एकः काकः अस्ति); v3.c04.l02's Station 0 runs exactly this." **Booked in Chapter 4:** **S0-af** (l01 → l02): "+1 day: ten vowel seams split — नास्ति, विद्यालयः, सूर्योदयः, सदैव, इत्यवदत्, स्वागतम्, तेऽपि, त आगच्छन्ति, पितरावपि and द्वे बालिके अत्र, each written back in pause form and given its rule's name; v3.c04.l02's Station 0 runs exactly this." **S0-ag** (l01 → l03): "+1 week: ten vowel seams joined — न अवगच्छामि, तत्र आगच्छत्, गण-ईशः, पर-उपकारः, तत्र एव, अपि अस्ति, इति एकः, वने अस्ति, उभौ अपि and द्वे फले अपि, each joined and its rule named aloud, the one that never joins left as it is; v3.c04.l03's Station 0 runs exactly this." **S0-ah** (l02 → l03): "+1 day: the visarga wheel, -अः column — रामः said and written before करोति, च, तत्र, शृणोति, वदति, अपि, आगच्छति and रक्षति, and before a pause, then सः before गच्छति and before अपि; v3.c04.l03's Station 0 runs exactly this." **S0-ai** (l02 → l04): "+1 week: the visarga wheel, -इः/-उः column — गुरुः said and written before करोति, च, तत्र, शृणोति, वदति, अपि and आगच्छति, and before a pause, then पुनः before अपि, मिलामः and तत्र; v3.c04.l04's Station 0 runs exactly this." **S0-aj** (l03 → l04): "+1 day: the vowel/consonant sort — twelve pause-form pairs (सत्यम् वद, सत्यम् एव, जलम् अस्ति, किम् करोति, अहम् अपि, सर्वम् कुशलम्, जगत् च, तत् अपि, षट् अत्र, ग्रामात् गच्छति, तस्मिन् एव, अगच्छन् अपि) sorted by what the second word begins with, a vowel or a consonant, then each joined; v3.c04.l04's Station 0 runs exactly this." **S0-ak** (l03 → l05): "+1 week: the six owned consonant seams — परिवारः जगत् च, षट्-आदि-, सर्वम् कुशलम्, सत्यम् एव, कश्चित् दुःखभाक् and दुःखभाक् भवेत्, each joined from its pause form, said aloud, and given its rule; v3.c04.l05's Station 0 runs exactly this." **S0-al** (l04 → l05): "+1 day: the benediction split from memory — सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥ recited joined, then written from memory in its pause form, with the two seams of the last quarter named; v3.c04.l05's Station 0 runs exactly this." **S0-am** (l04 → v3.c05.l01): "+1 week: one serial episode split — the thirteen joined lines of the whole tale so far (v3.c04.l04 §17) read aloud joined, then three lines of your choice written in pause form, each seam named with the lesson that taught it; v3.c05.l01's Station 0 runs exactly this." **S0-an** (l05 → v3.c05.l01): "+1 day: five joins, five splits — join सः अपि, नमः ते, गुरुः अत्र, तत् च and जलम् अस्ति; split तस्मिन्नेव, सदैव, पुनर्मिलामः, कोऽपि and सत्यं वद; each with its rule's name; v3.c05.l01's Station 0 runs exactly this." **S0-ao** (l05 → v3.c05.l02): "+1 week: the crow story at speed — the Volume 2 crow story read aloud joined, as task C of the sandhi exam printed it, once slowly and once at natural pace, the second reading timed and under one minute; v3.c05.l02's Station 0 runs exactly this." **Standing** (l05 §20, from v2.c06.l05 via the l05 of v3.c01–c03, verbatim): "Monthly until Volume 3 ends: one story told aloud, one saying recited with its source, the nine askers once." | policy | plan §4.0.5, the lesson blocks' "S0 → next" lines; [REF:cepeda2006] | **Chain:** l01 §3 runs S0-ad and S0-ac; l02 §3 runs S0-af and S0-ae; l03 §3 runs S0-ah and S0-ag; l04 §3 runs S0-aj and S0-ai; l05 §3 runs S0-al and S0-ak; v3.c05.l01 runs S0-an and S0-am; v3.c05.l02 runs S0-ao. **Keys** (each running lesson prints its key in a `<details>` block): row 0.G. **Exam guard** (Chapter 3 decision 4): no S0 item rehearses an exam task's own items — the exam's tasks A–E (§5) use none of the items of S0-ak and S0-al, and task C's text is not S0-al's. The plan's l04 +1-day "split the benediction from memory" is kept; its +1-week "split one serial episode" is made concrete as the l04 §17 text. |
| 0.25 | **GLOSSARY terms this chapter adds or updates** (grammar terms, not ledger words), with the Hindi form the lessons must use: see §7 item 4 (the full list). | policy | GLOSSARY.md; Chapter 3 decision 3 | — |
| 0.26 | **No frequency or scale words without a count and a source.** The chapter says no sandhi is "common" or "frequent". Where a preference is stated, it is Whitney's own words, quoted and cited: the visarga before sibilants "is the prevalent practice" (§172a); the nasal before a nasal "is almost invariably made in the manuscripts" (§161a); द्ध for त् + ह "almost invariably followed" (§163a); च्छ for त् + श "in practice almost always" (§203); ञ्ज for न् + ज "more often neglected … in the manuscripts" (§202c); the avagraha "occasionally used in the manuscripts … In printed texts, especially European, it is ordinarily applied" to mark the elided अ (§16a). The plan's "Taught by 'what precedes' columns, -अः first (most frequent)" is **not printed** as a claim: l02 teaches -अः first because it has the most shapes and the most owned examples (§7, deviation 8). | policy | STYLE_GUIDE §7; plan §7.6 | No count was made in the e-texts; none is needed, since no learner line claims one. |
| 0.27 | **§9–§11: connected speech** (every lesson). The rule: **a seam is spoken without a pause; a space in joined print is a word boundary, not a breath.** The joined line is read in one breath-group up to a daṇḍa (or a comma), with every seam sounded as written: नास्ति /n̪ɑːst̪i/ (one long आ, not two), सदैव /sɐd̪ɐi̯ʋɐ/, इत्यवदत् /it̪jɐʋɐd̪ɐt̪/, तेऽपि /t̪eːpi/ (the avagraha has no sound), त आगच्छन्ति /t̪ɐ ɑːgɐt͡ɕt͡ɕʰɐn̪t̪i/ (a hiatus: the two vowels heard one after the other, no glide); नमस्ते /n̪ɐmɐst̪eː/, कोऽपि /koːpi/, पुनर्मिलामः /pun̪ɐɾmilɑːmɐh/, गुरू रक्षति /guɾuː ɾɐkʂɐt̪i/; सत्यं वद /sɐt̪jɐ̃ ʋɐd̪ɐ/ (anusvāra before व: a nasalised vowel), किं करोति /kiŋ kɐɾoːt̪i/ (before क the anusvāra is [ŋ], STYLE_GUIDE §2.1), जगच्च /d͡ʑɐgɐt͡ɕt͡ɕɐ/, षडत्र /ʂɐɖɐt̪ɾɐ/, तस्मिन्नेव /t̪ɐsmin̪n̪eːʋɐ/. Dictation in both forms from l01 (pause → joined) and l04 (joined → pause). | FACT; policy | STYLE_GUIDE §2; plan §1.1 item 12, §4.4 | IPA values only from STYLE_GUIDE §2 (anusvāra: homorganic nasal before a stop, nasalised vowel before semivowels, sibilants and ह). The schwa-deletion habit is a Hindi-speaker mistake at seams in every lesson's §12 (सदैव said *sadaiv*; the final अ of इत्यवदत्'s -व- kept). |
| 0.28 | **1.x assets carried (plan §4.0.2; ROADMAP preservation map).** (a) The 1.x vowel-sandhi worked examples (pp.37–43): Pass C opens those pages in `Sanskritam-Curriculum.pdf`, re-derives each example against table 0.A, carries every correct example built from owned words into l01 §13 or §18 (others as labelled display), and lists each wrong one in l01 Teacher Notes with its correction; the IR-017 line (इको यणचि is 6.1.77, not 1.1.45) prints in l01 (row 0.5). (b) The 1.x visarga-sandhi pages (pp.71–73): the same procedure against table 0.B, into l02. (c) IR-017's second item: the 1.x book's "8.2.39: झलां जश् झशि" (p.96) is 8.4.53's text; l03 Teacher Notes says so in one line beside row 0.12's 8.2.39 झलां जशोऽन्ते. (d) The ROADMAP preservation-map rows for these assets are updated in the chapter's ship PR to name v3.c04.l01 and v3.c04.l02. | policy | plan §4.0.2, §4.4; ROADMAP.md (1.x preservation map); analysis/IMPROVEMENT_REPORT.md IR-017 | No 1.x example prints until Pass C has re-derived it. |

### 0.A Vowel sandhi (l01) — the seven rules, each with its scope and owned examples (Whitney §§126–138)

| Rule (sūtra) | Scope: left word ends in … · right word begins with … | Result | Owned examples (pause → joined) | Does NOT cover |
|---|---|---|---|---|
| सवर्णदीर्घः (6.1.101 अकः सवर्णे दीर्घः) | अ/आ · अ/आ; इ/ई · इ/ई; (उ/ऊ · उ/ऊ) | one long vowel: आ, ई, (ऊ) | न अस्ति → नास्ति (v2.c01.l04) · न अवगच्छामि → नावगच्छामि (v2.c05.l02, display there) · विद्या-आलयः → विद्यालयः (v1.c06.l01) · हिम-आलयः → हिमालयः (v1.c04.l03) · तथा अस्तु → तथास्तु (v2.c05.l02; तथा "so", display, headword c05.l03) · तथा अपि → तथापि (तथापि "even so", display) · तत्र आगच्छत् → तत्रागच्छत् · अत्र अन्नम् → अत्रान्नम् · कुत्र आसीत् → कुत्रासीत् · सह आकाशम् → सहाकाशम् · गङ्गा अपि → गङ्गापि · इति इव → इतीव (इव, l01) | उ + उ in a sentence (display: सु-उक्तम् → सूक्तम्, Whitney §126) |
| गुणः (6.1.87 आद्गुणः) | अ/आ · इ/ई; उ/ऊ; ऋ | ए; ओ; अर् | न इति → नेति · वा इति → वेति (वा, l01) · गण-ईशः → गणेशः (गण v1; ईशः l01) · सूर्य-उदयः → सूर्योदयः · चन्द्र-उदयः → चन्द्रोदयः · पर-उपकारः → परोपकारः (v2.c06.l03) · सिंहस्य उपरि → सिंहस्योपरि (v2.c06.l02 line 2, pause form there) · नृपस्य उभौ → नृपस्योभौ · च उपाविशन् → चोपाविशन् · तत्र ऋषिः → तत्रर्षिः · महा-ऋषिः → महर्षिः (display: the महा- stem, c05.l04) | — |
| वृद्धिः (6.1.88 वृद्धिरेचि) | अ/आ · ए/ऐ; ओ/औ | ऐ; औ | सदा एव → सदैव (सदा c03.l04; एव l01) · तत्र एव → तत्रैव · अत्र एव → अत्रैव · न एव → नैव · तत्र एकः → तत्रैकः · एकदा एकः → एकदैकः · मम ओष्ठौ → ममौष्ठौ (ओष्ठः c02.l04) · मा एवम् → मैवम् (display: A6, c06.l02; एवम् c05.l03) · वसुधा एव → वसुधैव (display: c06.l04) | — |
| यण् (6.1.77 इको यणचि) | इ/ई · a vowel not like it; उ/ऊ · ditto; ऋ · ditto | य्, व्, र् + the vowel | इति अवदत् → इत्यवदत् · इति आह → इत्याह (Whitney §129's own example) · इति एकः → इत्येकः · सु-आगतम् → स्वागतम् (v1.c05.l02) · उपरि आगच्छति → उपर्यागच्छति (v2.c06.l01 line 8) · अपि आह → अप्याह · अपि अस्ति → अप्यस्ति · अपि एकः → अप्येकः · नदी अस्ति → नद्यस्ति (the singular नदी: not a dual) · सुखी अभवत् → सुख्यभवत् · बहु अन्नम् → बह्वन्नम् · मधु अस्ति → मध्वस्ति · inside the verb: नि-अवसत् → न्यवसत् (c03.l03) | ऋ + vowel (display only: the Kāśikā's *kartrartham*, Teacher Notes) |
| अयादि (6.1.78 एचोऽयवायावः) | ए/ऐ/ओ/औ · a vowel (for -ए/-ओ + अ see पूर्वरूपम्) | अय्/आय्/अव्/आव्; **at word end** the य् of अय्, आय् drops and the gap stays: -ए → -अ + gap, -ऐ → -आ + gap (Whitney §133); -औ → -आव् (kept, §134b) | ते आगच्छन्ति → त आगच्छन्ति · ते इच्छन्ति → त इच्छन्ति · वने आसीत् → वन आसीत् · गृहे एव → गृह एव · तीरे एकः → तीर एकः · वृक्षे एकः → वृक्ष एकः · हिमालये आसम् → हिमालय आसम् · बालिकायै अपि → बालिकाया अपि (c02.l02) · तस्मै अन्नम् → तस्मा अन्नम् (तस्मै, c01.l03 cell) · पितरौ अपि → पितरावपि (c02.l04) · उभौ अपि → उभावपि · द्वौ एव → द्वावेव · बालकौ आगच्छतः → बालकावागच्छतः; inside a word (observed, named in l04): ने-अनम् → नयनम् (c02.l04's promise) | a word-final ओ not from -अः (the vocative गुरो: varies, Whitney §134a; not drilled); internal सन्धि as rules (v4.c02) |
| पूर्वरूपम् (6.1.109 एङः पदान्तादति) | ए/ओ at word end · short अ | ए/ओ + ऽ (the अ disappears; ऽ marks where it was) | ते अपि → तेऽपि · वने अस्ति → वनेऽस्ति · घटे अल्पम् → घटेऽल्पम् (v2.c06.l01 line 5) · गृहे अहम् → गृहेऽहम् · समीपे अस्ति → समीपेऽस्ति · विद्यालये अद्य → विद्यालयेऽद्य · हिमालये अपि → हिमालयेऽपि | the ओऽ of -अः + अ (कोऽपि) is l02's (the -अः column) |
| प्रगृह्यम् (1.1.11 ईदूदेद्द्विवचनं प्रगृह्यम्) | a **dual** ending in -ई, -ऊ, -ए · any vowel | **no join**: both words stand, a space between | द्वे बालिके अत्र · द्वे फले अपि · अग्नी अत्र (two fires; the dual card, c02.l04) · गुरू अपि (two teachers) · नयने इव — beside the joins that look alike: the vocative singular बालिके "O girl" printed with no "!" after it (बालिके अत्र आगच्छ; row 0.3) and फले अपि as a locative singular ("in the fruit too") join: बालिकेऽत्र, फलेऽपि | the dual in -औ is **not** pragṛhya: कपोतौ अपि → कपोतावपि (अयादि); interjections (हे) are left unjoined too (Whitney §138f; row 0.3) |

Notes for the drafter. (1) The splitting heuristic (FACT, l01 §8): a joined आ may hide अ+अ, अ+आ, आ+अ or आ+आ; a joined ए may hide अ+इ, अ+ई, आ+इ, आ+ई — or simply a word in -ए; a joined ओ may hide अ/आ + उ/ऊ, or (l02) a -अः; meaning decides, and the ledger or the dictionary confirms. (2) The first two columns are the decision path: the learner looks at the end of the left word first, then at the start of the right word. (3) Every example in this table uses only owned words, l01 headwords, or a labelled display.

### 0.B Visarga sandhi (l02) — the visarga map (Whitney §§169–179; 6.1.132; 8.3.34)

Columns: the vowel **before** the visarga. Rows: the sound **after** it. Every cell is a ✓ cell unless marked.

| Before … | -अः | -आः | other vowel + ः (-इः -उः -एः -ऐः -ओः) | r-finals after अ/आ (पुनः, प्रातः, अन्तः) |
|---|---|---|---|---|
| क ख प फ, or a pause | ः stays — रामः करोति · व्याधः क्रुद्धः · पुनः पुनः | ः — छात्राः पठन्ति | ः — गुरुः पठति | ः — प्रातः पठति (Whitney §178a *prātaḥ karoti*) |
| च छ | श् — रामश्च · कालश्च (v2.c03.l03) · ईकारश्च (v1.c02.l01) · नृपश्चिन्तयति | -आश्च — दन्ताश्च (दन्तः v2.c06) | -इश्च — हरिश्च · गुरुश्च | -श्च — पुनश्च |
| ट ठ | ष् — named once, not drilled (Whitney §170c) | -आष्- | -इष्- | -ष्- |
| त थ | स् — नमस्ते · कस्त्वम् · मूषकस्तस्य · व्याधस्तत्र | -आस्त- — कपोतास्तत्र · नद्यास्तीरे | -इस्त- — हरिस्तत्र · बहिस्तिष्ठति | -स्त- — पुनस्तत्र · अन्तस्तिष्ठति |
| श ष स | ः printed, the doubled sibilant also correct — रामः सीता / रामस्सीता · सिंहः स्वपिति · शनैः शनैः / शनैश्शनैः | ः — छात्राः सन्ति | ः — गुरुः शृणोति | ः — पुनः सः |
| a voiced consonant (ग घ ज झ ड ढ द ध ब भ ङ ञ ण न म य र ल व ह) | ओ — परमो धर्मः (v2.c06.l03) · सिंहो हसति · क्रुद्धो भवति · परिवारो जगच्च · पाठो नमस्ते | आ — छात्रा गच्छन्ति · कपोता हसन्ति · बद्धा भवन्ति | र् — गुरुर्वदति · बुद्धिर्बलात् · उच्चैर्वदति · शत्रोर्जाले · बहिर्गच्छति | र् — पुनर्मिलामः (v2.c01.l04) · पुनर्वदतु (v2.c05.l02) · प्रातर्गच्छति |
| अ | ओऽ — कोऽपि (v2.c06.l02) · सोऽपि · अनुगृहीतोऽस्मि (v2.c01.l04) · सोऽहम् (v1.c05.l05) · एको व्याधोऽस्ति | आ + gap — देवा अत्र · छात्रा अपि | र् — हरिरत्र · गुरुरपि | र् — पुनरपि (v2.c06.l02) · प्रातरपि |
| another vowel (आ इ ई उ ऊ ए ऐ ओ औ) | अ + gap — राम आगच्छति · मूषक आगच्छति · नृप उवाच · इकार ईकारश्च | आ + gap — छात्रा आगच्छन्ति · बद्धा अभवन् | र् — बुद्धिरेव (v2.c06.l01's moral) · शनैरागच्छामि | र् — प्रातरेव · पुनरागच्छति · अन्तरागच्छ |
| र | ओ (र is a voiced consonant) — रामो रक्षति | आ — देवा रक्षन्ति | ◐ the र् drops, a short vowel lengthens — गुरुः रक्षति → गुरू रक्षति · हरिः रक्षति → हरी रक्षति (Whitney §179) | ◐ the same — पुनः रक्षति → पुना रक्षति (Whitney §179 *punā ramate*) |

**Special words (✓):** सः, एषः before any consonant → स, एष (स गच्छति · स करोति · एष बालकः; 6.1.132); before अ → सोऽ- (सोऽपि); before another vowel → स (स एकम्; the -अः rule, not 6.1.132: plan G12). भोः + voiced consonant → भो (भो राम: v2.c01.l01's promise); भो + vowel display. **Inside a compound:** मनस्-रथः → मनोरथः (the -अस् of the stem before र: ओ; v1.c03.l04, v2.c06.l03); नमस्कारः keeps स् (Whitney §171b; Teacher Notes 8.3.40).

### 0.C Consonant sandhi at word edges (l03) — the consonant map (Whitney §§159, 161–163, 202–210, 213; 8.3.23, 8.2.39, 8.4.40)

| # | Rule | Mark | Owned examples (pause → joined) | Key accepts also |
|---|---|---|---|---|
| 1 | final म् before a consonant → ं (8.3.23 मोऽनुस्वारः) | ✓ | सत्यम् वद → सत्यं वद · सर्वम् कुशलम् → सर्वं कुशलम् (v2.c01.l02) · किम् करोति → किं करोति · अहम् गच्छामि → अहं गच्छामि · जलम् पिबति → जलं पिबति · एकम् घटम् पश्यति → एकं घटं पश्यति · वयम् जालेन → वयं जालेन | before a stop, the class nasal: किङ्करोति · सर्वङ्कुशलम् · अहङ्गच्छामि · जलम्पिबति · घटम्पश्यति (8.4.59, Teacher Notes) |
| 2 | final म् before a vowel stays, and the words are written together | ✓ | सत्यम् एव → सत्यमेव (v1.c06.l04) · जलम् अस्ति → जलमस्ति · अहम् अपि → अहमपि · किम् एतत् → किमेतत् · जलम् इच्छति → जलमिच्छति · आकाशम् अगच्छन् → आकाशमगच्छन् | — |
| 3 | final क् ट् त् (प्) before a voiced sound — a vowel or a voiced consonant — → ग् ड् द् (ब्) (8.2.39 झलां जशोऽन्ते) | ✓ | षट् अत्र → षडत्र · षट्-आदि- → षडादि- (v2.c03.l02's title षडादिदशान्ताः) · षट् आम्राणि → षडाम्राणि · वाक् अस्ति → वागस्ति · सम्यक् अवगच्छामि → सम्यगवगच्छामि (l03) · दिक् अपि → दिगपि (l03) · जगत्-ईशः → जगदीशः · तत् अपि → तदपि · तत् एव → तदेव · ग्रामात् गच्छति → ग्रामाद्गच्छति · ग्रामात् वनम् → ग्रामाद्वनम् · कश्चित् दुःखभाक् → कश्चिद्दुःखभाक् · दुःखभाक् भवेत् → दुःखभाग्भवेत् (v1.c06.l04) · आसीत् एकः → आसीदेकः | final प् has no owned word: shown in the table head only |
| 4 | final stop before a nasal (न म) → the nasal of its row | ◐ | तत् मम → तन्मम · तत् न → तन्न · जगत्-नाथः → जगन्नाथः (नाथः l03) · षट्-मुखः → षण्मुखः · वाक् मम → वाङ्मम · विवरात् निरगच्छत् → विवरान्निरगच्छत् | the voiced stop: तद्मम, तद्न, विवराद्निरगच्छत् (Whitney §161) |
| 5 | त् + च छ → च्च च्छ; त् + ज (झ) → ज्ज (8.4.40 स्तोः श्चुना श्चुः) | ✓ | जगत् च → जगच्च (v2.c02.l04) · तत् च → तच्च · अगच्छत् च → अगच्छच्च · अवदत् च → अवदच्च · सत्-जनः → सज्जनः · तत् जलम् → तज्जलम् · तत् जानामि → तज्जानामि | — |
| 5a | न् + ज → ञ्ज (8.4.40; Whitney §202b) | ◐ | तण्डुलान् जालम् → तण्डुलाञ्जालम् | न्ज (Whitney §202c) |
| 6 | त् + ल → ल्ल (Whitney §162) | ◐ | तत् लभते → तल्लभते (Whitney's own example) | — |
| 7 | त् + श → च्छ (Whitney §203) | ◐ | बलात् श्रेष्ठा → बलाच्छ्रेष्ठा (the 1.x moral; c06.l01) | च्श: बलाच्श्रेष्ठा |
| 8 | त् + ह → द्ध (Whitney §163) | ◐ | तत् हितम् → तद्धितम् (Whitney's *taddhita*; हित v1) | द्ह: तद्हितम् |
| 9 | final न् after a **short** vowel, before a vowel → न्न (Whitney §210) | ✓ | तस्मिन् एव → तस्मिन्नेव · अगच्छन् अपि → अगच्छन्नपि · अपतन् अत्र → अपतन्नत्र · अस्मिन् एव काले → अस्मिन्नेव काले (Hit 1, prose after 1.4; अस्मिन् "in this" glossed: c05.l02) | — |
| 9a | final न् after a **long** vowel, before a vowel → no doubling, written together | ✓ | तान् अपश्यत् → तानपश्यत् · तण्डुलान् अपश्यन् → तण्डुलानपश्यन् · भवान् अपि → भवानपि · धीमान् अपि → धीमानपि (l03) | — |
| 10 | न् + च छ / ट ठ / त थ → ंश्च ंश्छ / ंष्ट ंष्ठ / ंस्त ंस्थ (Whitney §208) | ◐ | तान् च → तांश्च · वृक्षान् च → वृक्षांश्च · कपोतान् च → कपोतांश्च · भवान् च → भवांश्च · अगच्छन् तत्र → अगच्छंस्तत्र · पाशान् तु → पाशांस्तु | — |
| 11 | no change in sound: final stop before a voiceless consonant; न् before other consonants — but **written together** (STYLE_GUIDE §3.1) | ✓ | वृक्षात् पतति → वृक्षात्पतति · तत् पश्य → तत्पश्य · सम्यक् पठसि → सम्यक्पठसि · तान् पश्यति → तान्पश्यति · तस्मिन् वृक्षे → तस्मिन्वृक्षे · धीमान् बालकः → धीमान्बालकः | — |

The plan's c04#5 items (untaught words in the table) are avoided: every example is owned, an l03 headword, or labelled (अस्मिन्; दुःखभाक्'s भाक्). The plan's कस्मिन् चित् → कस्मिंश्चित् (a preview of the c05.l02 indefinite) is **not printed** (row 0.18: कश्चित् is c05.l02's; c05.l02 says "the seams are c04's" and shows it there): §7, deviation 9.

### 0.D The reverse table (l04) — what a joined shape may hide

| Joined shape | May hide (pause form) | Lesson |
|---|---|---|
| आ inside a block | अ+अ · अ+आ · आ+अ · आ+आ (नास्ति, तत्रागच्छत्, गङ्गापि, कुत्रासीत्) | l01 |
| ई / ऊ | इ/ई + इ/ई; उ/ऊ + उ/ऊ (इतीव) | l01 |
| ए inside a block | अ/आ + इ/ई (नेति, गणेशः) — or a word in -ए before a consonant (वने पतति) | l01 |
| ओ inside a block | अ/आ + उ/ऊ (सूर्योदयः, सिंहस्योपरि) | l01 |
| ओ at a word end before a voiced consonant | -अः (परमो धर्मः ← परमः) — or a word in -ओ, "an unusual final" (गुरो; Whitney §134a) | l02 |
| ओऽ | -अः + अ (कोऽपि ← कः अपि) — or -ओ + अ | l02, l01 |
| एऽ | -ए + अ (तेऽपि ← ते अपि) | l01 |
| ऐ / औ inside a block | अ/आ + ए/ऐ (सदैव); अ/आ + ओ/औ (ममौष्ठौ) | l01 |
| य्/व्/र् + a vowel at a seam | इ/ई, उ/ऊ, ऋ + an unlike vowel (इत्यवदत्, बह्वन्नम्) | l01 |
| -आव् + vowel | -औ (पितरावपि ← पितरौ अपि) | l01 |
| -अ, a space, a vowel | -अः (राम आगच्छति ← रामः) or -ए (वन आसीत् ← वने) | l02, l01 |
| स / एष, a space, a consonant | सः / एषः (स गच्छति ← सः गच्छति; 6.1.132) | l02 |
| -आ, a space, a voiced sound | -आः (छात्रा गच्छन्ति ← छात्राः) — or a word in -आ (छात्रा f. sg.), or -ऐ before a vowel (तस्मा अन्नम् ← तस्मै) | l02, l01 |
| र् + a voiced sound | -इः -उः -एः -ऐः -ओः (गुरुर्वदति); an r-final (पुनर्मिलामः); or a real र् of the word | l02 |
| -ई / -ऊ before र (a lengthened vowel) | -इः / -उः + र (गुरू रक्षति ← गुरुः रक्षति) ◐ | l02 |
| श्च · स्त · ष्ट at a seam | -ः + च / त / ट (रामश्च, नमस्ते) — or, with ं before it, -न् + च / त (तांश्च: see below) | l02 |
| ं + a consonant | -म् (सत्यं वद) | l03 |
| म् + a vowel inside a block | -म् + vowel (सत्यमेव) | l03 |
| ग् ड् द् ब् + a voiced sound | क् ट् त् प् (षडत्र, ग्रामाद्गच्छति, दुःखभाग्भवेत्) | l03 |
| च्च · च्छ · ज्ज | त् + च · त् + छ or श · त् + ज (जगच्च, बलाच्छ्रेष्ठा, तज्जलम्) | l03 |
| ल्ल · द्ध | त् + ल · त् + ह | l03 |
| न्न + a vowel | न् (after a short vowel) + vowel (तस्मिन्नेव) — or त् + न, a stop before a nasal (तन्न ← तत् न, ◐) | l03 |
| न्म · ण्म · ङ्म at a seam | त् / ट् / क् + म (तन्मम, षण्मुखः, वाङ्मम) | l03 |
| ंश्च · ंस्त | -न् + च · -न् + त (तांश्च, अगच्छंस्तत्र) | l03 |
| ञ्ज at a seam | -न् + ज (तण्डुलाञ्जालम्) | l03 |

### 0.E Hindi parallels at a glance (row 0.21; each lesson uses only its own rows)

| # | Lesson | The contrast, stated exactly | Register · source |
|---|---|---|---|
| a | l01 (and l05 task E) | Hindi writes its words apart and applies no sandhi between independent words in writing (वह घर जाता है); the joined shapes a Hindi speaker uses every day are **tatsama words and compounds taken whole from Sanskrit**: विद्यालय (विद्या + आलय), हिमालय, सूर्योदय (सूर्य + उदय), महोत्सव (महा + उत्सव), परोपकार, सदैव (सदा + एव), इत्यादि (इति + आदि), स्वागत (सु + आगत), नमस्ते (नमः + ते). A Hindi speaker already says Sanskrit sandhis, the nine above among them — inside words. | FACT · [REF:kachru2006] (cited bare; Pass C locates the sandhi/tatsama discussion or rewords) |
| b | l01–l03 | Hindi school grammar sorts these joins under three heads: **स्वर सन्धि**, **व्यंजन सन्धि**, **विसर्ग सन्धि**; and the स्वर सन्धि under five names — **दीर्घ**, **गुण**, **वृद्धि**, **यण्**, **अयादि** — the same five the Pāṇinian tradition uses (सवर्णदीर्घः; गुणः; वृद्धिः; यण्; अयादि); the tradition's पूर्वरूपम् and प्रगृह्यम् are names Hindi school grammar does not need for Hindi words (attributed: "Hindi school grammar teaches …"). | TRADITION · [REF:guru1952] (cited bare) |
| c | l03 | **The anusvāra spelling.** Modern Hindi print may write the anusvāra dot where classical Sanskrit print writes the class nasal before a stop (संगीत / सङ्गीत, गंगा / गङ्गा, पंच / पञ्च — v1.c06.l01); before स the dot is the classical spelling in both (संस्कृत). At a Sanskrit **word end** the same choice is the optional rule of l03: किं करोति or किङ्करोति, both correct. The course's Hindi follows GLOSSARY spellings (व्यञ्जन, सन्धि); a Hindi schoolbook prints व्यंजन संधि — the same words, the dot spelling. | FACT · [REF:masica1991 ch.6] (as v1.c06.l01); [REF:kachru2006] |
| d | l02 | Hindi keeps the visarga only in tatsama words (प्रातः, अतः, दुःख, नमः) and has no visarga seams between Hindi words; its tatsama compounds keep the Sanskrit shapes: मनोरथ (मनः + रथ), नमस्कार, पुनर्जन्म (पुनः + जन्म: the r-final before a voiced sound), निराशा (निः + आशा). | FACT · [REF:kachru2006]; TRADITION (that school books list them as विसर्ग सन्धि) · [REF:guru1952] |
| e | l01–l05 (§9, §12) | Hindi drops the final and many medial short a's (schwa deletion: Hindi सदैव said [sɐd̪ɛːʋ]); the joined Sanskrit word keeps every अ (सदैव /sɐd̪ɐi̯ʋɐ/, इत्यवदत् /it̪jɐʋɐd̪ɐt̪/). | FACT · STYLE_GUIDE §1.1; [REF:ohala1994] (only if Pass C finds the schwa-deletion statement there; else STYLE_GUIDE §1.1 alone, which is a course rule, not a source) |

No row claims that a Hindi form "comes from" or "descends from" a Sanskrit one (no cognacy or borrowing claim is made beyond "taken whole from Sanskrit", the standard meaning of tatsama, which Pass C checks in Kachru).

### 0.F Promises kept — the owned joined shapes, found by grep (plan §4.0.3; tracker row 5)

| Owned joined shape | Where printed (lesson id · the line, verbatim) | What that lesson promised | Redeemed in |
|---|---|---|---|
| नास्ति | v2.c01.l04 · "बोलचाल में न + अस्ति जुड़कर नास्ति बन जाता है — वही "नास्तिक" वाला नास्ति! जुड़ने का यह नियम तीसरे खण्ड का विषय है" · and §15 "language fuses न + अस्ति into नास्ति (vowel sandhi — Volume 3)" | vowel sandhi, Volume 3 | l01 (सवर्णदीर्घः) |
| नावगच्छामि · तथास्तु | v2.c05.l02 · "नावगच्छामि in connected text — display only, the नास्ति story again, sandhi for Volume 3." · "you have heard अस्तु joined to तथा "so, thus" — a seam for Volume 3, display only today." | the seams, Volume 3 | l01 (सवर्णदीर्घः ×2) |
| स्वागतम् | v1.c05.l02 · §14 row "स्वागतम् … स्व + ा; final म् from lesson 1" (a conjunct lesson; no sandhi promise made) | — (owned joined word) | l01 (यण्: सु + आगतम्) |
| विद्यालयः · हिमालयः | v1.c06.l01 (विद्यालयः, §14) · v1.c04.l03 (हिमालय) | — (owned compounds) | l01 (inner seam, hyphenated; compounds c05.l04) |
| परोपकारः | v2.c06.l03 (§14 headword) | compound machinery v3.c05 (plan tracker row 6) | l01 (inner seam: गुणः); c05.l04 (vigraha) |
| सिंहस्योपरि | v2.c06.l02 §17 line 2 (pause: सिंहस्य उपरि) · plan §5.1 Text A2 | — | l01 (गुणः) |
| the diphthongs as a+i, a+u | v1.c02.l04 · "in Volume 3, when words start colliding and fusing (sandhi), you will watch *a* meet *i* and become ए in live text" · v1.c02.l05 · "ऐ and औ to ā+i and ā+u, which is why they drive the sandhi patterns you will meet in Volume 3" | guṇa and vṛddhi in live text | l01 |
| the strengthening गुणः (अग्नये, गुरवे) | v3.c02.l03 · "strengthening, गुणः (guṇaḥ); the course takes it up in v3.c04.l01." · "The strengthened -ए, -ओ and the -औ return between words as guṇa and vṛddhi (v3.c04.l01)." | the name guṇa, between words | l01 (named); l04 (inside गुरवे) |
| नयनम्'s inner seam | v3.c02.l04 · §14 "its inner seam is shown in c04.l01, not here" | the seam shown in c04.l01 | l01 (one line, inside a word) |
| the prefix seams आगच्छत्, न्यवसत् … | v3.c03.l03 · "meetings at the gate (आ, अवा-, य्) are shown as facts; their names are v3.c04.l01's" | the names | l01 (Ex 2) |
| avagraha | v1.c05.l05 · "you will *use* it when sandhi arrives in Volume 3 — exactly the schedule v1.c04.l03 promised" · "सः + अहम् fuse in connected writing to **सोऽहम्**" | use in Volume 3 | l01 (तेऽपि); l02 (कोऽपि, सोऽहम्) |
| नमस्ते (नमः + ते) | v1.c01.l01 (§14, the first word) · v1.c05.l02 · "नमः + ते, "homage to you"; the seam-change is sandhi, Volume 3 (§13)." | the seam, Volume 3 | l02 (8.3.34; the thread's step 2) |
| कोऽपि · पुनरपि | v2.c06.l02 · "न कः अपि लघुः। — न कोऽपि लघुः।" and the FACT box "कः + अपि → कोऽपि … पुनः, whose -अः stands for -अर्, keeps र् instead: पुनः + अपि → पुनरपि" | the join, previewed | l02 |
| परमो धर्मः | v2.c06.l03 · objective "explain the one join परमः + धर्मः → परमो धर्मः (a final -अः becomes -ओ before a voiced consonant)" | (explained there; system now) | l02 |
| पुनर्मिलामः · अनुगृहीतोऽस्मि | v2.c01.l04 · "previews:** नास्ति, पुनर्मिलामः, अनुगृहीतोऽस्मि — seams noticed, system in Volume 3." | system, Volume 3 | l02 |
| पुनर्वदतु | v2.c05.l02 · "the visarga turned to र, as in v2.c01.l04's पुनर्मिलामः. Display only; sandhi is Volume 3." | — | l02 |
| ईकारश्च | v1.c02.l01 · "The seam in ईकारश्च — where *ḥ* and *ca* fuse into *ś ca* — is a joining rule (sandhi), treated properly in Volume 3." | Volume 3 | l02 (ः + च → श्च) |
| कालश्च | v2.c03.l03 · "the chapter-title seam form **कालश्च**" | — | l02 |
| भो राम | v2.c01.l01 · "connected texts print भो राम, the visarga yielding before a voiced sound (sandhi, Volume 3)" · v3.c01.l04 "भो राम (भोः + राम) is c04.l02." | c04.l02 | l02 |
| repha and visarga | v1.c05.l04 §27 · "Volume 3 (sandhi; repha alternations with visarga)." | Volume 3 | l02 (the -इः/-उः and r-final columns) |
| मनः / नमः as pause forms of मनस्, नमस् | v1.c03.l04 · "pause form of the noun मनस् (manas), as नमः is of नमस् (namas) — full noun story in Volume 3" | **the s-stem declension: re-addressed to v4.c05** (plan §4.0.3) | l02 (मनोरथः; one line) and §8 erratum |
| जगच्च | v2.c02.l04 · "rules (sandhi) are Volume 3's subject; the pause form जगत् च is today's reading" (and the chapter title परिवारः जगच्च) | Volume 3 | l03 (8.4.40) |
| षड् | v2.c03.l02 · "The title षडादिदशान्ताः … shows षट् wearing a company dress, षड्, before a voiced neighbor — joining rules are Volume 3's business" | Volume 3 | l03 (8.2.39) |
| सर्वं कुशलम् | v2.c01.l02 · "In joined classical writing you will meet **सर्वं कुशलम्** — the म् of सर्वम् dressing as anusvāra before the following क. That machinery is Volume 3's" | Volume 3 | l03 (8.3.23) |
| सत्यमेव · कश्चिद् · दुःखभाग् | v1.c06.l04 · "**सत्यमेव जयते** — because म् + ए fuse in connected writing"; "दुःखभाग् — whose pause forms are कश्चित् and दुःखभाक् (the द्/ग् you see are sandhi" | Volume 3 | l03; the thread overlay (l05) |
| *aham → ahaṃ* | v1.c01.l01 · "before a consonant a final m is written ṃ: *aham* → *ahaṃ* … That joining is sandhi, taught in Volume 3" | Volume 3 | l03 |
| nasal assimilation | v1.c06.l01 §27 · "Volume 3 (sandhi: nasal assimilation *between* words)" | Volume 3 | l03 (rows 1 and 4: the optional class nasal; stop + nasal) |
| the s → ṣ law | v1.c04.l02; v2.c04 ("waits for Volume 4") | named in V3, taught v4.c02 | l04 (named only) |
| the ṇ cells | v3.c02.l03 · "The rule behind the columns is named in Chapter 4 and taught in Volume 4." · v3.c02.l05 (the same) | named c04 | l04 |

Each "where printed" line was re-found by grep on 2026-11-10 (§6 lists the commands' targets). v2.c06.l01 (the crow story) promises nothing about sandhi; it is the text of l05's task C.

### 0.G Station 0 keys (the running lesson prints these in `<details>`)

- **S0-ac** (l01): any role-play with three भवान् + 3sg requests, two 2sg imperatives and one मा + imperative passes. Model: आगच्छतु भवान्। · उपविशतु भवान्। · जलम् पिबतु भवान्। · उपविश! · पश्य! · मा गच्छ!
- **S0-ad** (l01): गच्छति · अगच्छत् · गच्छतु · गच्छेत् | लभते · अलभत · लभताम् · लभेत | अस्ति · आसीत् · अस्तु · स्यात् | करोति · अकरोत् · करोतु · कुर्यात् | वदति · अवदत् · वदतु · वदेत्.
- **S0-ae** (l02): the learner's own exam task B text, each line back in the present (आसीत् → अस्ति, ऐच्छत् → इच्छति, अपश्यत् → पश्यति, अक्षिपत् → क्षिपति, आगच्छत् → आगच्छति, अपिबत् → पिबति, अभवत् → भवति); the v2.c06.l01 §17 text is the key for the content.
- **S0-af** (l02): न अस्ति (सवर्णदीर्घः) · विद्या-आलयः (सवर्णदीर्घः) · सूर्य-उदयः (गुणः) · सदा एव (वृद्धिः) · इति अवदत् (यण्) · सु-आगतम् (यण्) · ते अपि (पूर्वरूपम्) · ते आगच्छन्ति (अयादि: -ए before a vowel other than अ) · पितरौ अपि (अयादि: -औ → -आव्) · द्वे बालिके अत्र (प्रगृह्यम्: a dual, never joined).
- **S0-ag** (l03): नावगच्छामि (सवर्णदीर्घः) · तत्रागच्छत् (सवर्णदीर्घः) · गणेशः (गुणः) · परोपकारः (गुणः) · तत्रैव (वृद्धिः) · अप्यस्ति (यण्) · इत्येकः (यण्) · वनेऽस्ति (पूर्वरूपम्) · उभावपि (अयादि) · द्वे फले अपि (प्रगृह्यम्: no join).
- **S0-ah** (l03): रामः करोति · रामश्च · रामस्तत्र · रामः शृणोति (or रामश्शृणोति) · रामो वदति · रामोऽपि · राम आगच्छति · रामो रक्षति · रामः। — स गच्छति · सोऽपि.
- **S0-ai** (l04): गुरुः करोति · गुरुश्च · गुरुस्तत्र · गुरुः शृणोति (or गुरुश्शृणोति) · गुरुर्वदति · गुरुरपि · गुरुरागच्छति · गुरुः। — पुनरपि · पुनर्मिलामः · पुनस्तत्र.
- **S0-aj** (l04): consonant: सत्यं वद · किं करोति (or किङ्करोति) · सर्वं कुशलम् (or सर्वङ्कुशलम्) · जगच्च · ग्रामाद्गच्छति; vowel: सत्यमेव · जलमस्ति · अहमपि · तदपि · षडत्र · तस्मिन्नेव · अगच्छन्नपि.
- **S0-ak** (l05): परिवारो जगच्च (त् + च: 8.4.40; the -अः → ओ is l02's) · षडादि- (8.2.39) · सर्वं कुशलम् (8.3.23; सर्वङ्कुशलम् also correct) · सत्यमेव (म् before a vowel stays and joins) · कश्चिद्दुःखभाक् (8.2.39: the final stop voiced before a voiced sound) · दुःखभाग्भवेत् (the same).
- **S0-al** (l05): सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चित् दुःखभाक् भवेत्॥ — the seams कश्चित् + दुःखभाक् (त् → द् before a voiced sound) and दुःखभाक् + भवेत् (क् → ग्); सुखिनः सर्वे: ः before स stays (no other seam in the verse).
- **S0-am** (v3.c05.l01): the l04 §17 split key.
- **S0-an** (v3.c05.l01): सोऽपि · नमस्ते · गुरुरत्र · तच्च · जलमस्ति; तस्मिन् एव · सदा एव · पुनः मिलामः · कः अपि · सत्यम् वद.
- **S0-ao** (v3.c05.l02): l05 task C's text (§5).

---

## 1. L1 — स्वरसन्धिः: When Vowels Meet (grammar)

**Front matter.** id `v3.c04.l01` · file `lesson-01-when-vowels-meet.md` · title sa स्वरसन्धिः ·
sa_iast *svarasandhiḥ* · en "When Vowels Meet" · hi "स्वर-सन्धि — जब स्वर मिलते हैं" ·
lesson_type: grammar · cefr A2 · duration_minutes 45 · self_study_minutes 35 · prerequisites
[v3.c03.l05] · review_of [v3.c03.l05, v3.c03.l04, v2.c01.l04, v2.c05.l02, v1.c05.l02,
v1.c06.l01, v1.c04.l03, v2.c06.l03, v2.c06.l02, v1.c02.l04, v1.c02.l05, v1.c05.l05, v3.c02.l03,
v3.c02.l04, v3.c03.l03] · vocabulary_count **7** · tags [grammar, sandhi, vowel-sandhi,
splitting, joining, sutra, pragrhya, avagraha, joined-so-far, hindi-bridge, serial,
spaced-review] · media (planned): images `v3c04l01-vowel-map.svg`, `v3c04l01-split-and-join.svg`;
audio `v3c04l01-seams-drill.mp3`, `v3c04l01-story.mp3`; worksheets `v3c04l01-vowel-seams.pdf`.

**Objectives.**
1. en "Split owned joined words and lines back into their pause form — नास्ति, विद्यालयः,
   स्वागतम्, सदैव, इत्यवदत्, तेऽपि, त आगच्छन्ति, पितरावपि — and name the rule at each seam
   (सवर्णदीर्घः, गुणः, वृद्धिः, यण्, अयादि, पूर्वरूपम्)." · hi "अपने जाने-पहचाने जुड़े शब्दों और
   पंक्तियों — नास्ति, विद्यालयः, स्वागतम्, सदैव, इत्यवदत्, तेऽपि, त आगच्छन्ति, पितरावपि — को फिर
   विराम-रूप में अलग करें और हर जोड़ का नियम बताएँ (सवर्णदीर्घ, गुण, वृद्धि, यण्, अयादि, पूर्वरूप)।"
2. en "Join pause-form pairs whose first word ends in a vowel and whose second begins with one,
   by the six rules, with spaces and the avagraha where they belong — and leave a dual in -ई,
   -ऊ, -ए unjoined (द्वे बालिके अत्र)." · hi "ऐसे विराम-रूप शब्द-युग्मों को, जिनमें पहला शब्द स्वर
   पर ख़त्म हो और दूसरा स्वर से शुरू हो, छह नियमों से जोड़ें — रिक्त स्थान और अवग्रह सही जगह
   रखें — और -ई, -ऊ, -ए वाले द्विवचन को न जोड़ें (द्वे बालिके अत्र)।"
3. en "State, according to Pāṇini, which of the seven sūtras (6.1.101, 6.1.87, 6.1.88, 6.1.77,
   6.1.78, 6.1.109, 1.1.11) describes a given seam, and give the Hindi school names of the five
   vowel joins (दीर्घ, गुण, वृद्धि, यण्, अयादि)." · hi "पाणिनि के अनुसार बताएँ कि सात सूत्रों (6.1.101,
   6.1.87, 6.1.88, 6.1.77, 6.1.78, 6.1.109, 1.1.11) में से कौन-सा सूत्र किसी जोड़ का वर्णन करता
   है, और हिन्दी व्याकरण में पाँच स्वर-सन्धियों के नाम बताएँ (दीर्घ, गुण, वृद्धि, यण्, अयादि)।"
4. en "Read a line joined at its vowel seams aloud with no pause at any seam, and write such a
   line from dictation, first in pause form, then joined." · hi "स्वर-जोड़ों पर जुड़ी पंक्ति को बिना
   किसी जोड़ पर रुके ज़ोर से पढ़ें, और ऐसी पंक्ति को श्रुतलेख में पहले विराम-रूप में, फिर जोड़कर
   लिखें।"

**The one grammar point.** What happens when a word-final vowel meets a word-initial vowel —
read first by splitting, then produced by joining (table 0.A). The same rules hold at the inner
seam of a compound and at the seam of a prefix and its verb.

**Forms taught** (Whitney §§126–138; table 0.A, row 0.4–0.6). **Cells drilled: 14** (row 0.22).
**Paradigm ledger (§15 end):** T1–T7 and the cards as before; the vowel map: the ✓ cells of
row 0.17; उ + उ, ऋ + vowel, word-final ओ not from -अः ○ (display); inner-word sandhi ○ (l04).

**Headwords** (all ledger-new except the upgrade; verified in Apte and MW; none in
`ledger-all.tsv`):

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status |
|---|---|---|---|---|---|---|
| आलयः | ālayaḥ | /ɑːlɐjɐh/ | dwelling, abode, house | आलय, निवास | m. a-stem | ledger-new — Apte s.v. आलयः "An abode, a house, a dwelling"; rule 10: the member of the owned विद्यालयः, हिमालयः counts now, as its own headword (plan §3) |
| उदयः | udayaḥ | /ud̪ɐjɐh/ | rising (of the sun, of a star) | उदय | m. a-stem | ledger-new — MW s.v. udaya "going up, rising"; Apte s.v. उदयः (the noun sense "Rise, rising (of the sun &c.)" is its sub-entry; Pass C quotes it); in सूर्योदयः, चन्द्रोदयः |
| ईशः | īśaḥ | /iːɕɐh/ | lord, master | ईश, स्वामी | m. a-stem | ledger-new — Apte s.v. ईश "master or lord of"; MW s.v. īśa "owner, lord, master"; in गणेशः, जगदीशः (l03) |
| इव | iva | /iʋɐ/ | like, as if | जैसे, की तरह | indeclinable (enclitic: never first) | ledger-new — Apte s.v. इव "Like, as (showing upamā or comparison)"; इतीव is the l01 example |
| एव | eva | /eːʋɐ/ | only, just, indeed (stressing the word before it) | ही | indeclinable (enclitic) | ledger-new — a display word through Volume 2 and v3.c01–c03 (c03.l02 §14: "until v3.c04.l01 makes it a headword"); MW s.v. eva "just, exactly, very, same, only, even, alone"; owned joined lines keep fusing it: सत्यमेव (l03), बुद्धिरेव (l02), सदैव, तत्रैव (today) |
| वा | vā | /ʋɑː/ | or | या, अथवा | indeclinable (enclitic: after the word it joins) | ledger-new — Apte s.v. वा "As an alternative conjunction it means 'or'; but its position is different in Sanskrit"; वेति (Hit 1.71, display) |
| सूर्यः | sūryaḥ | /suːɾjɐh/ | sun | सूर्य | m. a-stem | **upgrade** (v1.c05.l04 सूर्य; plan §3); in सूर्योदयः |

**Ledger line:** "6 ledger-new · 1 upgrade (सूर्यः) · ledger 439 → 445 · cells drilled: 14."
§14 note: नास्ति, तथास्तु, सदैव and every joined shape add 0 (rule 11); सूर्योदयः, गणेशः are
transparent compounds of owned members (rule 10): 0.

**Six-step material.**

1. *Scene:* a guest at the door, the morning sun, the school. नमस्ते! स्वागतम्! अद्य सूर्य-उदये
   अहम् विद्यालयम् गच्छामि। (namaste! svāgatam! adya sūrya-udaye aham vidyālayam gacchāmi.)
   "Hello! Welcome! Today at sunrise I go to school." — printed in pause form first; then the
   same line as people print it: नमस्ते! स्वागतम्! अद्य सूर्योदये अहम् विद्यालयम् गच्छामि।
2. *The question:* **what are the words in this line?** Where does सूर्योदये end and begin?
   Why is it not सूर्य उदये?
3. *Owned joined shapes that already answer it* (evidence table; each grep-checked, row 0.F):

| owned joined shape | where owned | its pause form | what it shows |
|---|---|---|---|
| नास्ति | v2.c01.l04 (§7, §15) | न अस्ति | अ + अ → आ |
| नावगच्छामि · तथास्तु | v2.c05.l02 (display) | न अवगच्छामि · तथा अस्तु | the same, twice |
| विद्यालयः · हिमालयः | v1.c06.l01 · v1.c04.l03 | विद्या-आलयः · हिम-आलयः | आ + आ, अ + आ → आ |
| परोपकारः | v2.c06.l03 | पर-उपकारः | अ + उ → ओ |
| स्वागतम् | v1.c05.l02 | सु-आगतम् | उ + आ → वा |
| आगच्छत् · प्राविशत् · न्यवसत् | v3.c03.l03 ("their names are v3.c04.l01's") | आ-अगच्छत् · प्र-अविशत् · नि-अवसत् | inside the verb: अ + अ → आ; इ + अ → य |
| अग्नये · गुरवे | v3.c02.l03 ("the course takes it up in v3.c04.l01") | अग्नि + ए · गुरु + ए | the strengthened ए, ओ before an ending: guṇa |
| "you will watch *a* meet *i* and become ए in live text" | v1.c02.l04 | — | the promise |

4. *The pattern named:* सन्धिः "joining"; स्वरसन्धिः "vowel joining"; the six joins by their
   tradition names (सवर्णदीर्घः, गुणः, वृद्धिः, यण्, अयादि, पूर्वरूपम्) and the one that never
   joins, प्रगृह्यम्. The Hindi school names (0.E b) beside them.
5. *The learner assembles the vowel map* (table 0.A) row by row from the evidence: नास्ति and
   विद्यालयः give the like-vowel row; परोपकारः and the Volume 1 promise give guṇa; सदैव (from
   the scene's extension: सदा एव) gives vṛddhi; स्वागतम् and न्यवसत् give yaṇ; तेऽपि (the
   avagraha of v1.c05.l05) gives पूर्वरूपम्; त आगच्छन्ति and पितरावपि give अयादि at word end;
   द्वे बालिके अत्र gives प्रगृह्यम्. Checked against §15.
6. *Production — splitting first, then joining:* Ex 1 (split), then Ex 3 (join); then the
   joined-so-far serial (§17) read aloud.

**The splitting heuristic (FACT, §8):** a joined आ may hide अ+अ, अ+आ, आ+अ or आ+आ; a joined ए
may hide अ+इ, अ+ई, आ+इ, आ+ई — or a word in -ए; meaning decides, and the dictionary or the
ledger confirms (0.A notes).

**Sūtras (learner text, TRADITION; row 0.5, wording fixed there):** 6.1.101 at the like-vowel
row; 6.1.87 at guṇa; 6.1.88 at vṛddhi; 6.1.77 at yaṇ (**IR-017 in the open:** "इको यणचि is
6.1.77 — the 1.x book cited 1.1.45"); 6.1.78 at अयादि; 6.1.109 at पूर्वरूपम्; 1.1.11 at
प्रगृह्यम्. Each is printed once, as `[REF:ashtadhyayi 6.1.101]` etc., directly after the seam
it describes has been observed.

**Inside words (one line each, labelled "inside a word — named in v3.c04.l04, rules Volume
4"):** guṇa and vṛddhi are vowel grades, the same ones c02.l03 showed inside अग्नये, गुरवे
and c03.l03 inside ऐच्छत्; and नयनम् "eye" (c02.l04) is ने + अनम्, the full अय् of 6.1.78
before a vowel (row 0.6 d).

**Model sentences (§13; pause → joined; each with IAST, English, Hindi):**
1. अत्र जलम् न अस्ति। (atra jalam na asti.) → अत्र जलम् नास्ति। (atra jalam nāsti.) "There is no water here." — यहाँ पानी नहीं है। (the म् seam waits for l03)
2. सूर्य-उदये बालकाः विद्यालयम् गच्छन्ति। → सूर्योदये बालकाः विद्यालयम् गच्छन्ति। (sūryodaye bālakāḥ vidyālayam gacchanti.) "At sunrise the boys go to school." — सूर्योदय पर लड़के विद्यालय जाते हैं। (सूर्योदये is one compound word; its members are hyphenated in the pause form, row 0.2e; compounds c05.l04)
3. मूषकः सिंहस्य उपरि चलति। (mūṣakaḥ siṃhasya upari calati.) → मूषकः सिंहस्योपरि चलति। (mūṣakaḥ siṃhasyopari calati.) "The mouse walks over the lion." — चूहा शेर के ऊपर चलता है। (the V2 lion story's line 2)
4. सदा एव सत्यम् वदेत्। (sadā eva satyam vadet.) → सदैव सत्यम् वदेत्। (sadaiva satyam vadet.) "One should always speak the truth." — सदा ही सच बोलना चाहिए।
5. सु-आगतम्! → स्वागतम्! (svāgatam!) "Welcome!" (literally "well come") — स्वागत है!
6. ते अपि आगच्छन्ति। (te api āgacchanti.) → तेऽप्यागच्छन्ति। (te 'py āgacchanti.) "They come too." — वे भी आते हैं। (two seams in one block: पूर्वरूपम्, then यण्)
7. द्वे बालिके अत्र स्तः। (dve bālike atra staḥ.) — no join. "The two girls are here." — दो लड़कियाँ यहाँ हैं। (1.1.11: बालिके is a dual)

The plan's five models are 1–5 (verified); 6 and 7 are added so that §13 shows पूर्वरूपम्,
a double seam and प्रगृह्यम्.

**§16 Conversation** (Arjuna, back from the Himālaya, at Sītā's door; 10 turns; printed **joined so far** — vowel seams
joined, every other seam in pause form; label: "joined so far: only the vowel seams of today
are joined"; the seams are listed after the dialogue with their rules):

1. सीता — नमस्ते, अर्जुन! स्वागतम्! (namaste, arjuna! svāgatam!) "Hello, Arjuna! Welcome!" (to the returning traveller; both joined words owned)
2. अर्जुनः — नमस्ते, सीते! अहम् अद्य हिमालयात् आगच्छामि। (namaste, sīte! aham adya himālayāt āgacchāmi.) "Hello, Sītā! I am coming back from the Himālaya today."
3. सीता — हिमालयेऽपि विद्यालयः अस्ति? (himālaye 'pi vidyālayaḥ asti?) "Is there a school in the Himālaya too?"
4. अर्जुनः — आम्। तत्रैकः विद्यालयः अस्ति। (ām. tatraikaḥ vidyālayaḥ asti.) "Yes. There is a school there."
5. सीता — सूर्योदये तत्र किम् भवति? (sūryodaye tatra kim bhavati?) "What happens there at sunrise?"
6. अर्जुनः — सूर्योदये हिमम् अग्निः इव शोभते! (sūryodaye himam agniḥ iva śobhate!) "At sunrise the snow shines like fire!"
7. सीता — गङ्गापि हिमालयात् आगच्छति। सा नद्यत्राप्यस्ति? (gaṅgāpi himālayāt āgacchati. sā nady atrāpy asti?) "The Gaṅgā too comes from the Himālaya. Is that river here as well?"
8. अर्जुनः — नेति वदामि। गङ्गात्र नास्ति। (neti vadāmi. gaṅgātra nāsti.) "I say no. The Gaṅgā is not here."
9. सीता — तथास्तु। सदैव सत्यम् वद! (tathāstu. sadaiva satyam vada!) "So be it. Always speak the truth!"
10. अर्जुनः — विद्यालयः अत्रास्ति। आगच्छ, गच्छामः! (vidyālayaḥ atrāsti. āgaccha, gacchāmaḥ!) "The school is here. Come on, let's go!"

Seams (the key below the dialogue): 3 हिमालये अपि → हिमालयेऽपि (पूर्वरूपम्) · 4 तत्र एकः →
तत्रैकः (वृद्धिः) · 5 सूर्य-उदये → सूर्योदये (गुणः, inner seam) · 7 गङ्गा अपि → गङ्गापि
(सवर्णदीर्घः); नदी अत्र → नद्यत्र (यण्: नदी is singular, not a dual); अत्र अपि → अत्रापि
(सवर्णदीर्घः); अपि अस्ति → अप्यस्ति (यण्) · 8 न इति → नेति (गुणः); गङ्गा अत्र → गङ्गात्र, न
अस्ति → नास्ति (सवर्णदीर्घः) · 9 तथा अस्तु → तथास्तु (तथा "so", display; headword c05.l03); सदा
एव → सदैव (वृद्धिः) · 10 अत्र अस्ति → अत्रास्ति. Not joined today (said in one line): अर्जुन!
and सीते! (vocative + "!" stops the seam), अहम् अद्य (the म् seam, l03), विद्यालयः अस्ति (the
visarga seam, l02), हिमालयात् आगच्छामि (the त् seam, l03), अग्निः इव (l02). Line 6 is FACT-
free description; line 7 states that the Gaṅgā rises in the Himālaya (a geographic fact, no
citation needed in a dialogue line). The 1pl गच्छामः "let's go" uses the present for a
proposal, as Volume 2's मिलामः (c03.l01 turn 9 precedent).

**§17 Story — serial episode 4, part 1: "The tale so far, joined at its vowels"** — label:
"our retelling, after Hitopadeśa 1 (Mitralābha) — the lines of episodes 1–3, joined so far:
only today's vowel seams are joined". Bridge (one English line): "Every line below is one you
have read, in pause form, in Chapters 1–3. Today it is printed the way a book would print its
vowels. Split each seam and name its rule; the key gives the lines as you first read them." Ten
lines (each Devanagari, IAST, English, Hindi; the English and Hindi of each line are the source
lesson's own):

1. तीर एकः वृक्षः अस्ति। (tīra ekaḥ vṛkṣaḥ asti.) "On the bank there is a tree." — किनारे पर एक पेड़ है।
2. मूषकस्य विवरम् वृक्षस्य समीपेऽस्ति। (mūṣakasya vivaram vṛkṣasya samīpe 'sti.) "The mouse's hole is near the tree." — चूहे का बिल पेड़ के पास है।
3. व्याधः वदति — हे कपोत! अत्रान्नम् अस्ति। (vyādhaḥ vadati — he kapota! atrānnam asti.) "The hunter says: 'Dove! Here is food.'" — शिकारी कहता है — कबूतर! यहाँ अन्न है।
4. नृपस्योभौ पादौ बद्धौ। (nṛpasyobhau pādau baddhau.) "Both the king's feet are bound." — राजा के दोनों पैर बँधे हैं।
5. मम पितरावपि जाले स्तः! (mama pitarāv api jāle staḥ!) "My parents too are in the net!" — मेरे माता-पिता भी जाल में हैं!
6. "अत्रान्नम् दृश्यते, जालम् न दृश्यते" इत्येकः कपोतः वदति। ("atrānnam dṛśyate, jālam na dṛśyate" ity ekaḥ kapotaḥ vadati.) "'Here food is seen; the net is not seen,' says one dove." — "यहाँ अन्न दिखता है, जाल नहीं दिखता," एक कबूतर कहता है।
7. एकदैकः व्याधः तत्रागच्छत्। (ekadaikaḥ vyādhaḥ tatrāgacchat.) "One day a hunter came there." — एक दिन एक शिकारी वहाँ आया।
8. कपोताः जालेन सहाकाशम् अगच्छन्। व्याधः अधावत्, जालम् च नालभत। (kapotāḥ jālena sahākāśam agacchan. vyādhaḥ adhāvat, jālam ca nālabhata.) "The doves went up into the sky with the net. The hunter ran, and did not get the net." — कबूतर जाल के साथ आकाश में गए। शिकारी दौड़ा, पर उसे जाल नहीं मिला।
9. कपोताः मूषकस्य विवरम् आगच्छन्, तत्र चोपाविशन्। (kapotāḥ mūṣakasya vivaram āgacchan, tatra copāviśan.) "The doves came to the mouse's hole and sat down there." — कबूतर चूहे के बिल पर आए और वहाँ बैठ गए।
10. ततः सः नृपस्य पाशम् अप्यकृन्तत्। (tataḥ saḥ nṛpasya pāśam apy akṛntat.) "Then he cut the king's snare too." — फिर उसने राजा का फंदा भी काटा।

**Split key** (`<details>`; source line, pause form as printed on disk, seam, rule):
1. v3.c01.l02 line 1 — तीरे एकः वृक्षः अस्ति। — तीरे + एकः → तीर एकः · अयादि (-ए before a vowel other than अ: अ + gap)
2. v3.c01.l04 line 2 — मूषकस्य विवरम् वृक्षस्य समीपे अस्ति। — समीपे + अस्ति → समीपेऽस्ति · पूर्वरूपम्
3. v3.c01.l04 line 5 — व्याधः वदति — हे कपोत! अत्र अन्नम् अस्ति। — अत्र + अन्नम् → अत्रान्नम् · सवर्णदीर्घः
4. v3.c02.l04 line 4 — नृपस्य उभौ पादौ बद्धौ। — नृपस्य + उभौ → नृपस्योभौ · गुणः
5. v3.c02.l04 line 6 — मम पितरौ अपि जाले स्तः! — पितरौ + अपि → पितरावपि · अयादि (-औ → -आव्)
6. v3.c03.l02 line 2 — "अत्र अन्नम् दृश्यते, जालम् न दृश्यते" इति एकः कपोतः वदति। — अत्र + अन्नम् → अत्रान्नम् · सवर्णदीर्घः; इति + एकः → इत्येकः · यण् (no seam at the closing quotation mark; beyond इति the join resumes)
7. v3.c03.l03 line 3 — एकदा एकः व्याधः तत्र आगच्छत्। — एकदा + एकः → एकदैकः · वृद्धिः; तत्र + आगच्छत् → तत्रागच्छत् · सवर्णदीर्घः
8. v3.c03.l03 line 8 — कपोताः जालेन सह आकाशम् अगच्छन्। व्याधः अधावत्, जालम् च न अलभत। — सह + आकाशम् → सहाकाशम् · सवर्णदीर्घः; न + अलभत → नालभत · सवर्णदीर्घः
9. v3.c03.l03 line 9 — कपोताः मूषकस्य विवरम् आगच्छन्, तत्र च उपाविशन्। — च + उपाविशन् → चोपाविशन् · गुणः
10. v3.c03.l04 line 8 (second sentence) — ततः सः नृपस्य पाशम् अपि अकृन्तत्। — अपि + अकृन्तत् → अप्यकृन्तत् · यण्

Every Devanagari pause line above was copied from the §17 of the source lesson as it stands on
disk (2026-11-10). Craft notes for the drafter: lines 1, 5 and 10 are the three shapes that
look least like "joining" (a gap, -आव्, a य्); lines 3 and 6 show that one seam (अत्रान्नम्)
recurs; line 6 shows the quotation-mark rule; lines 7–9 come from the past-tense retelling,
which l04 re-reads whole. **Teacher Notes (departures):** the lines keep every departure from
the Hitopadeśa that their lessons state (the mouse's hole beside the tree, c01; the free dove's
warning and the parents in the net, c02; the warning set on the bank and the king's rule in the optative,
c03; Chapter 3 fact base row 0.26); episode 4 adds none, since it re-reads lines already
printed.

**§3 Station 0 (runs S0-ad and S0-ac, verbatim, row 0.24).** About 8 minutes. Item 1 (S0-ad,
+1 day from v3.c03.l05): five verbs in the four lakāras; key row 0.G. Item 2 (S0-ac, +1 week
from v3.c03.l04): the request role-play; key row 0.G. **Prompts** (review_of): (1) v2.c01.l04 —
what does नास्ति say, word by word? (2) v1.c05.l05 — what does ऽ mark in सोऽहम्? (3) v3.c02.l03
— what happens to the last vowel of गुरु in गुरवे?

**§20 Bookings:** S0-af (+1 day, run by l02) and S0-ag (+1 week, run by l03), verbatim (row
0.24). Revision box: the vowel map (0.A) in its decision order (row 0.4); the seven sūtras by
number and gist; the splitting heuristic; the Hindi names (0.E b); ledger 445, cells drilled 14.

**§9–§11 (connected speech; row 0.27):** the seam is spoken without a pause. Pairs (pause →
joined), said both ways: न अस्ति /n̪ɐ ɐst̪i/ → नास्ति /n̪ɑːst̪i/ · सदा एव /sɐd̪ɑː eːʋɐ/ → सदैव
/sɐd̪ɐi̯ʋɐ/ · इति अवदत् /it̪i ɐʋɐd̪ɐt̪/ → इत्यवदत् /it̪jɐʋɐd̪ɐt̪/ · ते अपि /t̪eː ɐpi/ → तेऽपि
/t̪eːpi/ · ते आगच्छन्ति → त आगच्छन्ति /t̪ɐ ɑːgɐt͡ɕt͡ɕʰɐn̪t̪i/ (a hiatus: two vowels, no glide,
no stop between them) · पितरौ अपि → पितरावपि /pit̪ɐɾɑːʋɐpi/ · द्वे बालिके अत्र
/d̪ʋeː bɑːlikeː ɐt̪ɾɐ/ (no change). The avagraha has no sound (v1.c05.l05). The ए and ओ that
result from guṇa are long pure vowels (STYLE_GUIDE §2.1: /eː/, /oː/), not "ay", "ow"; ऐ, औ are
/ɐi̯/, /ɐu̯/. Dictation (pause form first, then joined): न अस्ति · सदा एव · इति अवदत् · ते अपि ·
सूर्य-उदये · तत्र एकः कपोतः अस्ति। §11: the tongue glides from इ into the य् of इत्यवदत् with no
break; mirror check: no jaw "reset" between the two words.

**§12 Common mistakes:** (1) Joining a dual: *द्वे बालिकेऽत्र — fix: a dual in -ई, -ऊ, -ए is
pragṛhya (1.1.11): द्वे बालिके अत्र; a vocative singular बालिके with no "!" after it (बालिके अत्र आगच्छ → बालिकेऽत्रागच्छ) or a locative singular would join. (2)
Closing the gap: *तागच्छन्ति for त आगच्छन्ति — fix: at a word end ए becomes अ and the gap
stays (Whitney §133); the gap is not joined again. (3) The wrong grade before ए/ऐ, ओ/औ: *सदेव
for सदैव, *ममोष्ठौ for ममौष्ठौ — fix: अ/आ + ए → ऐ, + ओ → औ (6.1.88, vṛddhi), not guṇa. (4)
Joining across a stop: *उवाचाहम् for उवाच — "अहम् …", *…दृश्यतेइति — fix: no sandhi across a
daṇḍa, "?", "!", a dash, a comma or the closing quotation mark before इति (row 0.3). (5)
Over-splitting every ए: *विद्यालय + इ for विद्यालये, *वन + इ for वने — fix: a word in -ए (a
locative, a dual, ते) is a whole word; split only where the halves are real words (the
heuristic). (6) Hindi-speaker schwa deletion in the joined word: सदैव said as *sadaiv*,
इत्यवदत् as *ityavdat* — fix: every अ is sounded (STYLE_GUIDE §1.1; row 0.E e). Teacher Notes
(not a row): the -औ dual is not pragṛhya (*पितरौ अपि left apart → पितरावपि).

**§18 Exercises (keys; every exercise placed):**

- *Ex 1 (obj. 1; in class): split and name* (10). नास्ति · हिमालयः · नेति · गणेशः ·
  सिंहस्योपरि · तत्रैकः · इत्याह · स्वागतम् · वनेऽस्ति · गृह एव — **Key:** न अस्ति (सवर्णदीर्घः)
  · हिम-आलयः (सवर्णदीर्घः) · न इति (गुणः) · गण-ईशः (गुणः) · सिंहस्य उपरि (गुणः) · तत्र एकः
  (वृद्धिः) · इति आह (यण्) · सु-आगतम् (यण्) · वने अस्ति (पूर्वरूपम्) · गृहे एव (अयादि: -ए before a
  vowel other than अ). A split with the right halves and no rule name earns half the mark.
- *Ex 2 (obj. 1; homework): the gate, named* (6). Name the rule at the prefix seam: आगच्छत्
  (आ + अगच्छत्) · अवागच्छत् (अव + अगच्छत्) · प्राविशत् (प्र + अविशत्) · उपाविशत् (उप + अविशत्) ·
  प्रायच्छत् (प्र + अयच्छत्) · न्यवसत् (नि + अवसत्) — **Key:** सवर्णदीर्घः ×5; यण् (न्यवसत्).
- *Ex 3 (obj. 2; in class): join* (12). न अवगच्छामि · तथा अस्तु · सदा एव · मम ओष्ठौ · इति
  अवदत् · अपि एकः · नदी अस्ति · ते अपि · ते इच्छन्ति · बालिकायै अपि · पितरौ अपि · द्वे बालिके
  अत्र — **Key:** नावगच्छामि · तथास्तु · सदैव · ममौष्ठौ · इत्यवदत् · अप्येकः · नद्यस्ति · तेऽपि · त
  इच्छन्ति · बालिकाया अपि · पितरावपि · द्वे बालिके अत्र (no join: a dual). A missing space in
  त इच्छन्ति or बालिकाया अपि costs half the mark.
- *Ex 4 (obj. 2; homework): join or not?* (8). a. बालिके अत्र आगच्छ। (the vocative "O girl", printed without "!", row 0.3)
  vs b. द्वे बालिके अत्र स्तः। c. फले अपि (in the fruit too) vs d. द्वे फले अपि (two fruits too)
  e. नदी अत्र vs f. अग्नी अत्र (two fires) g. कपोतौ अपि vs h. गुरू अपि (two teachers) — **Key:** a. बालिकेऽत्रागच्छ
  (पूर्वरूपम्, then सवर्णदीर्घः) · b. no join · c. फलेऽपि · d. no join · e. नद्यत्र · f. no join · g.
  कपोतावपि (the -औ dual is not pragṛhya) · h. no join.
- *Ex 5 (obj. 3; homework): the sūtra and the Hindi name* (8). For each joined form give the
  sūtra number and, where there is one, the Hindi school name: नास्ति · परोपकारः · सदैव ·
  इत्यवदत् · पितरावपि · तेऽपि · द्वे फले अपि · त आगच्छन्ति — **Key:** 6.1.101, दीर्घ · 6.1.87,
  गुण · 6.1.88, वृद्धि · 6.1.77, यण् · 6.1.78, अयादि · 6.1.109 (पूर्वरूप; Hindi school grammar
  has no separate name — accept "none" or "not in Hindi school grammar") · 1.1.11 (प्रगृह्य;
  the same) · 6.1.78, अयादि.
- *Ex 6 (obj. 4; homework, recorded — production):* read §17 lines 1–10 aloud, joined, once
  slowly and once at natural pace; record the second reading; listen back and tick every seam
  read with no pause (rubric: 13 seams, 1 each; the avagraha silent; the gap of line 1 (तीर एकः)
  heard as two vowels).
- *Ex 7 (obj. 2, 4; homework — production):* six sentences of your own about this morning, in
  pause form, with at least six vowel seams among them; then write each joined. Model: अहम्
  अद्य तत्र एव अगच्छम्। → अहम् अद्य तत्रैव अगच्छम्। (the म् seam stays — it is
  l03's). Key: any correct join of the learner's own seams; the teacher checks
  that no consonant or visarga seam was joined.
- *Dictation (obj. 4; in class, §9):* the six items of §9, pause form first, then joined; the
  key is §9's list.

**§19 Quiz (10; register in brackets):**
1. न अस्ति joined: (a) नास्ति (b) नअस्ति (c) नेस्ति (d) न्यस्ति — **a** · FACT.
2. सूर्य-उदयः joined: (a) सूर्यादयः (b) सूर्योदयः (c) सूर्यौदयः (d) सूर्युदयः — **b** · FACT.
3. सदा एव joined: (a) सदेव (b) सदाएव (c) सदैव (d) सदौव — **c** · FACT.
4. इति अवदत् joined: (a) इतावदत् (b) इत्यवदत् (c) इतेवदत् (d) इतीवदत् — **b** · FACT.
5. ते आगच्छन्ति joined: (a) तागच्छन्ति (b) त आगच्छन्ति (c) तेऽगच्छन्ति (d) तेआगच्छन्ति — **b** · FACT (the grammarians' optional तयागच्छन्ति is never offered as an option: 8.3.19, Teacher Notes).
6. Which stays unjoined? (a) ते अपि (b) द्वे बालिके अत्र (c) पितरौ अपि (d) न अस्ति — **b** · FACT.
7. वनेऽस्ति split: (a) वन अस्ति (b) वने अस्ति (c) वनम् अस्ति (d) वनात् अस्ति — **b** · FACT.
8. According to Pāṇini, which sūtra describes इ + अ → य in इत्यवदत्? (a) 6.1.101 अकः सवर्णे दीर्घः (b) 6.1.87 आद्गुणः (c) 6.1.77 इको यणचि (d) 1.1.11 ईदूदेद्द्विवचनं प्रगृह्यम् — **c** · TRADITION ("According to Pāṇini…").
9. In Hindi school grammar, विद्यालय (विद्या + आलय) is an example of: (a) गुण सन्धि (b) दीर्घ सन्धि (c) यण् सन्धि (d) अयादि सन्धि — **b** · TRADITION ("In Hindi school grammar…").
10. पितरावपि split: (a) पितरः अपि (b) पितरौ अपि (c) पितरम् अपि (d) पित्रा अपि — **b** · FACT.
(Distractors are real confusions from §12; every option is a mis-join of owned words or an owned
cell: पितरः, पितरम्, पित्रा are ✓ cells of c02.l04; वनम्, वनात् of c01.)

**§4 (TRADITION):** Pāṇini places the vowel rules in the sixth book of the Aṣṭādhyāyī under
the heading संहितायाम् "in joined text" (6.1.72, quoted only as a heading, no sūtra count) —
**Teacher Notes alternative:** if the drafter prefers not to name 6.1.72 in learner text, §4
says "under a heading that means 'in joined text'" without a number (the learner-text count
stays seven for l01). And Hindi school grammar names the same five vowel joins (0.E b)
[REF:guru1952]. One HISTORY line on the avagraha (Whitney §16a): manuscripts use the sign
"occasionally", printed texts, "especially European", use it to mark the elided अ — so print
practice, not the language, decides where you see ऽ [REF:whitney1889 §16]. **§5 (FACT):** two
vowels side by side across a word boundary are avoided in the classical language; it fuses
them, turns the first into a semivowel, or leaves a regular gap [REF:whitney1889 §125]; Hindi
writes words apart and keeps such joins only inside tatsama words (0.E a, [REF:kachru2006]).
**§21 (about 35 minutes):** Ex 2 (5) · Ex 4 (5) · Ex 5 (4) · Ex 6 recorded (8) · Ex 7 (10) ·
real-world task (3): find three Hindi words in a newspaper headline or a sign that are Sanskrit
vowel joins (विद्यालय, सूर्योदय, स्वागत, परोपकार, सदैव …), split each and name its join.
**Payoff (§1/§8):** नास्ति (v2.c01.l04), तथास्तु and नावगच्छामि (v2.c05.l02), स्वागतम्
(v1.c05.l02), विद्यालयः and हिमालयः (Volume 1), परोपकारः (v2.c06.l03), सिंहस्योपरि — owned
words turn out to be sandhi; the Volume 1 promise of *a* meeting *i* in live text, and c02.l03's
promise of the name guṇa, are kept.

**Teacher Notes points:** 6.1.72 संहितायाम्; 6.1.125 प्लुतप्रगृह्या अचि नित्यम्; 8.3.19 लोपः
शाकल्यस्य (the dropped य्; Whitney §133a: "the latter grammarians allow the y … to be either
retained or dropped; but the uniform practice of the manuscripts … is to omit the semivowel");
1.1.14 निपात एकाजनाङ् and 1.1.15 ओत् (other uncombinable particles; हे is not drilled before a
vowel, row 0.3); the Kāśikā's examples (*daṇḍāgram, dadhīndraḥ, tavedam, khaṭvaiḍakā, dadhyatra,
cayanam, agne 'tra, agnī iti*); u + u and ṛ + vowel displays (row 0.6). **Timing (45 min):**
Station 0, two items (8) → the scene and the question (3) → the evidence table from the class's
memory (6) → the pattern named, the Hindi names (4) → the vowel map assembled in pairs, checked
against §15 (6) → the seven sūtras read once each at their rows (4) → production: Ex 1 split (4),
Ex 3 join (4) → §9 pairs and dictation (3) → §17 read joined so far, the bookings, homework (3).

---

## 2. L2 — नमस्ते: The Visarga at the Seam (grammar)

**Front matter.** id `v3.c04.l02` · file `lesson-02-the-visarga-at-the-seam.md` · title sa
नमस्ते · sa_iast *namaste* · en "The Visarga at the Seam" · hi "नमस्ते — जोड़ पर विसर्ग" ·
lesson_type: grammar · cefr A2 · duration_minutes 45 · self_study_minutes 40 · prerequisites
[v3.c04.l01] · review_of [v3.c04.l01, v3.c03.l05, v1.c01.l01, v1.c05.l02, v2.c06.l02,
v2.c06.l03, v2.c01.l01, v2.c01.l04, v1.c02.l01, v2.c03.l03, v1.c05.l04, v1.c05.l05, v1.c03.l04,
v2.c05.l02, v3.c01.l03, v3.c01.l04] · vocabulary_count **6** · tags [grammar, sandhi,
visarga-sandhi, namaste-thread, splitting, joining, sutra, r-finals, sa-esa, joined-so-far,
symbol-note, hindi-bridge, serial, spaced-review] · media (planned): images
`v3c04l02-visarga-wheel.svg` (the "visarga wheel" asset, plan main risk), `v3c04l02-namaste-seam.svg`;
audio `v3c04l02-seams-drill.mp3`, `v3c04l02-story.mp3`; worksheets `v3c04l02-visarga-map.pdf`.

**Objectives.**
1. en "Split the owned joined shapes नमस्ते, कोऽपि, परमो धर्मः, पुनर्मिलामः, अनुगृहीतोऽस्मि,
   ईकारश्च, कालश्च, भो राम, गुरुर्वदति and स गच्छति into their pause forms, and say which column
   (the vowel before the visarga) and which row (the sound after it) of the visarga map gives
   each." · hi "अपने जाने-पहचाने जुड़े रूपों — नमस्ते, कोऽपि, परमो धर्मः, पुनर्मिलामः,
   अनुगृहीतोऽस्मि, ईकारश्च, कालश्च, भो राम, गुरुर्वदति, स गच्छति — को विराम-रूप में अलग करें, और
   बताएँ कि विसर्ग-मानचित्र का कौन-सा स्तम्भ (विसर्ग से पहले का स्वर) और कौन-सी पंक्ति (उसके बाद की
   ध्वनि) हर रूप देती है।"
2. en "Join a word ending in ः to the word after it by the map — -अः, -आः, any other vowel + ः,
   the r-finals पुनः, प्रातः, अन्तः, and the special words सः, एषः, भोः." · hi "ः पर ख़त्म होने वाले
   शब्द को अगले शब्द से मानचित्र के अनुसार जोड़ें — -अः, -आः, कोई और स्वर + ः, र्-अन्त वाले पुनः,
   प्रातः, अन्तः, और विशेष शब्द सः, एषः, भोः।"
3. en "Explain, according to Pāṇini, नमस्ते as नमः + ते (8.3.34 विसर्जनीयस्य सः) and स गच्छति (6.1.132),
   and say why मनोरथः and नमस्कारः look as they do." · hi "पाणिनि के अनुसार समझाएँ कि नमस्ते नमः +
   ते है (8.3.34 विसर्जनीयस्य सः) और स गच्छति क्यों (6.1.132), और बताएँ कि मनोरथः और नमस्कारः ऐसे
   क्यों दिखते हैं।"
4. en "Read aloud, with no pause at the seams, a line joined at its vowel and visarga seams, and
   write one from dictation in both forms." · hi "स्वर और विसर्ग के जोड़ों पर जुड़ी पंक्ति बिना जोड़ों
   पर रुके ज़ोर से पढ़ें, और श्रुतलेख में उसे दोनों रूपों में लिखें।"

**The one grammar point.** A word-final visarga is a final स् (or, in पुनः, प्रातः, अन्तः, a
final र्) at a pause; at a seam its shape depends on the vowel before it and the sound after it
(row 0.7; table 0.B). Taught by columns, **-अः first** (it has the most shapes and the most owned
examples; no frequency claim, row 0.26).

**Forms taught** (Whitney §§169–179; table 0.B; rows 0.7–0.9). **Cells drilled: 26** (row
0.22). **Paradigm ledger (§15 end):** the vowel map as in l01; the visarga map: ✓ as row 0.17
(the -अः, -आः, other-vowel and r-final columns, सः/एषः, भोः + voiced consonant); the र + र row
◐; the ट ठ row ○ (named).

**Headwords** (all ledger-new; none in `ledger-all.tsv`):

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status |
|---|---|---|---|---|---|---|
| प्रातः | prātaḥ | /pɾɑːt̪ɐh/ | in the morning, early | प्रातः, सुबह | indeclinable; r-final (*prātar*) | ledger-new — Apte s.v. प्रातर् "At day-break, at dawn, early, in the morning"; seams प्रातरेव, प्रातर्गच्छति, प्रातः पठति |
| बहिः | bahiḥ | /bɐɦih/ | outside, out | बाहर | indeclinable; s-final (*bahis*) | ledger-new — Apte s.v. बहिस् "Out of, outside (with abl.)"; MW s.v. bahis; after इ its seams match the r-finals' (Whitney §169b): बहिर्गच्छति, बहिस्तिष्ठति |
| अन्तः | antaḥ | /ɐn̪t̪ɐh/ | inside, within | अन्दर, भीतर | indeclinable; r-final (*antar*) | ledger-new — MW s.v. antar "within, between, amongst, in the middle or interior"; Apte: Pass C quotes the entry; **§12 homograph:** not अन्तः "end", the nominative of the owned अन्त (v1.c05.l02) |
| उच्चैः | uccaiḥ | /ut͡ɕt͡ɕɐi̯h/ | loudly; high, aloft | ऊँचे स्वर में, ज़ोर से; ऊँचा | indeclinable; s-final after ऐ | ledger-new — Apte s.v. उच्चैः "Aloft, high, on high, above, upwards" (Pass C quotes the "loudly" sense from the same entry or from MW s.v. uccais); उच्चैर्वदति |
| शनैः | śanaiḥ | /ɕɐn̪ɐi̯h/ | slowly, gently; gradually | धीरे, धीरे-धीरे | indeclinable; s-final after ऐ | ledger-new — Apte s.v. शनैस् "Slowly, gently, quietly. Gradually, by degrees, little by little"; शनैः शनैः; the link to शनिवासरः (owned) is offered only as "probably related" (Apte s.v. शनैस् records शनैश्चरः "slow-goer", MW s.v. śani calls शनि "prob. 'slow-moving'", Apte s.v. शनिः derives it from √शो), never assessed (plan c04#3) |
| तु | tu | /t̪u/ | but, however; (stressing) as for | किन्तु, पर, तो | indeclinable (enclitic: second in its clause) | ledger-new — MW s.v. tu (the particle, "but, on the other hand"); the classic -ः + त seam: रामस्तु, छात्रास्तु |

**Ledger line:** "6 ledger-new · 0 upgrades · ledger 445 → 451 · cells drilled: 26." §14 note:
कोऽपि, नमस्ते, पुनर्मिलामः … add 0 (rule 11; नमस्ते stays counted from v1.c01.l01).

**Six-step material.**

1. *Scene:* the class at the teacher's door, early. छात्राः वदन्ति — "नमः ते, गुरो!" (pause
   form) — and the teacher's answer as everyone says it: "नमस्ते!"
2. *The question:* **what are the words in नमस्ते — and where did the ः of नमः go?**
3. *Owned joined shapes that already answer it* (evidence table; each grep-checked, row 0.F):

| owned joined shape | where owned | its pause form | what it shows |
|---|---|---|---|
| नमस्ते | v1.c01.l01; v1.c05.l02 ("नमः + ते … the seam-change is sandhi, Volume 3") | नमः ते | ः → स् before त |
| ईकारश्च · कालश्च | v1.c02.l01 (title); v2.c03.l03 (chapter title) | ईकारः च · कालः च | ः → श् before च |
| परमो धर्मः | v2.c06.l03 | परमः धर्मः | -अः → ओ before a voiced consonant |
| कोऽपि · अनुगृहीतोऽस्मि · सोऽहम् | v2.c06.l02 · v2.c01.l04 · v1.c05.l05 | कः अपि · अनुगृहीतः अस्मि · सः अहम् | -अः + अ → ओऽ |
| पुनर्मिलामः · पुनर्वदतु · पुनरपि | v2.c01.l04 · v2.c05.l02 · v2.c06.l02 | पुनः मिलामः … | the r-final keeps र् |
| भो राम | v2.c01.l01 | भोः राम | भोः before a voiced sound |
| मनः, नमः "pause forms of मनस्, नमस्" | v1.c03.l04 | — | the visarga stands for स् |

4. *The pattern named:* विसर्गसन्धिः; the map's two questions — **what vowel precedes? what
   follows?** — and the third, **is it सः/एषः?**
5. *The learner assembles the visarga map* (table 0.B), the -अः column first (from नमस्ते,
   ईकारश्च, परमो धर्मः, कोऽपि), then -आः (छात्रा गच्छन्ति, built by analogy and checked), then the
   other vowels (गुरुर्वदति, बुद्धिरेव — v2.c06.l01's moral), then the r-finals (पुनर्मिलामः,
   पुनरपि), then the special words. Checked against §15.
6. *Production — splitting first, then joining:* Ex 1 (split), then Ex 3 (join).

**Sūtras (learner text, TRADITION; row 0.9, wording fixed there):** 8.3.34 at the त row of the
-अः column (नमस्ते); 6.1.132 at the special words. The **नमस्ते thread, step 2** (FACT, l02 §8):
"नमः 'homage' + ते 'to you': before त the visarga is स्, so नमः ते is said and written नमस्ते.
Step 1 was v3.c01.l03 (नमः takes the dative: गुरवे नमः); step 3 is v3.c05.l01 (ते is the short
form of तुभ्यम्)."

**Honesty note (SYMBOL, never assessed; one callout in §4 or §8):** "'The divine in me bows to
the divine in you' is a modern interpretation of नमस्ते. The words say नमः 'homage, a bow' + ते
'to you'. The interpretation may be meaningful to people who use it; it is not the grammar."

**One line for v1.c03.l04 (FACT):** "मनः is the pause form of मनस्, as नमः is of नमस्: the
seam मनस् + रथः gives मनोरथः, 'the mind's chariot, a wish' (v2.c06.l03). The declension of such
s-stems is Volume 4's (v4.c05)."

**Model sentences (§13; pause → joined; IAST, English, Hindi):**
1. नमः ते। (namaḥ te.) → नमस्ते। (namaste.) "Homage to you." — आपको नमस्कार। (the thread's step 2)
2. कः त्वम्? (kaḥ tvam?) → कस्त्वम्? (kas tvam?) "Who are you?" — तुम कौन हो? (in the Hitopadeśa's first book the mouse Hiraṇyaka asks the crow this from inside his hole — prose after Hit 1.53; printed in learner text only with that locus, or with none)
3. न कः अपि लघुः। (na kaḥ api laghuḥ.) → न कोऽपि लघुः। (na ko 'pi laghuḥ.) "No one is small." — कोई भी छोटा नहीं। (v2.c06.l02's moral)
4. अहिंसा परमः धर्मः। (ahiṃsā paramaḥ dharmaḥ.) → अहिंसा परमो धर्मः। (ahiṃsā paramo dharmaḥ.) "Non-harming is the highest dharma." — अहिंसा परम धर्म है।
5. पुनः मिलामः। (punaḥ milāmaḥ.) → पुनर्मिलामः। (punar milāmaḥ.) "We meet again." — फिर मिलेंगे।
6. रामः च सीता च। (rāmaḥ ca sītā ca.) → रामश्च सीता च। (rāmaś ca sītā ca.) "Rāma and Sītā." — राम और सीता।
7. सः गच्छति, सः अपि हसति। (saḥ gacchati, saḥ api hasati.) → स गच्छति, सोऽपि हसति। (sa gacchati, so 'pi hasati.) "He goes; he laughs too." — वह जाता है, वह भी हँसता है। (6.1.132 beside -अः + अ)

The plan's six are 1–6 (verified; model 2's locus confirmed and located, §7 deviation 10); 7 adds the सः
seam.

**§16 Conversation** (the teacher and the class at the door; 11 turns; printed **joined so
far** — vowel and visarga seams joined, the म्, त्, क्, न् seams in pause form; label as l01):

1. छात्राः — नमस्ते, गुरो! (namaste, guro!) "Hello, teacher!" (the vocative of गुरुः, c02.l03)
2. गुरुः — नमस्ते! यूयम् प्रातरेवागच्छथ! (namaste! yūyam prātar evāgacchatha!) "Hello! You have come early!"
3. रामः — आम्, गुरो। वयम् सदा प्रातर्विद्यालयम् आगच्छामः। (ām, guro. vayam sadā prātar vidyālayam āgacchāmaḥ.) "Yes, teacher. We always come to school early."
4. गुरुः — भद्रम्! कोऽद्य बहिस्तिष्ठति? (bhadram! ko 'dya bahis tiṣṭhati?) "Good! Who is standing outside today?"
5. सीता — अर्जुनो बहिस्तिष्ठति। स उच्चैर्वदति। (arjuno bahis tiṣṭhati. sa uccair vadati.) "Arjuna is standing outside. He is talking loudly."
6. गुरुः — हे अर्जुन! अन्तरागच्छ। (he arjuna! antar āgaccha.) "Arjuna! Come in."
7. अर्जुनः — क्षमस्व, गुरो! अहम् शनैः शनैरागच्छामि। (kṣamasva, guro! aham śanaiḥ śanair āgacchāmi.) "Forgive me, teacher! I am coming, slowly, slowly."
8. गुरुः — शनैर्न! शीघ्रम् आगच्छ। अद्य पाठो नमस्ते। (śanair na! śīghram āgaccha. adya pāṭho namaste.) "Not slowly! Come quickly. Today's lesson is नमस्ते."
9. रामः — नमस्ते कः शब्दः, गुरो? (namaste kaḥ śabdaḥ, guro?) "What word is नमस्ते, teacher?"
10. गुरुः — नमश्च ते च — नमस्ते! (namaś ca te ca — namaste!) "नमः and ते — नमस्ते!"
11. छात्राः — धन्यवादः, गुरो! पुनर्मिलामः! (dhanyavādaḥ, guro! punar milāmaḥ!) "Thank you, teacher! We meet again!"

Seams (key below the dialogue): 2 प्रातः एव → प्रातरेव (r-final + vowel); एव आगच्छथ → एवागच्छथ
(सवर्णदीर्घः, l01) · 3 प्रातः विद्यालयम् → प्रातर्विद्यालयम् (r-final + voiced) · 4 कः अद्य →
कोऽद्य (-अः + अ); बहिः तिष्ठति → बहिस्तिष्ठति (s-final + त) · 5 अर्जुनः बहिः → अर्जुनो बहिः (-अः +
voiced); सः उच्चैः → स उच्चैः (-अः rule before a vowel other than अ); उच्चैः वदति → उच्चैर्वदति (-ऐः
+ voiced) · 6 अन्तः आगच्छ → अन्तरागच्छ (r-final + vowel); हे अर्जुन stays apart (row 0.3) · 7
शनैः शनैः (ः before श: stays; शनैश्शनैः also correct); शनैः आगच्छामि → शनैरागच्छामि · 8 शनैः न →
शनैर्न; पाठः नमस्ते → पाठो नमस्ते · 9 कः शब्दः (ः before श stays) · 10 नमः च → नमश्च · 11
पुनः मिलामः → पुनर्मिलामः. Not joined today: वयम् सदा, अहम् शनैः, शीघ्रम् आगच्छ (the म् seams, l03).
Turn 10 is the thread's step 2 in a teacher's mouth. (गुरुः's question "who is standing outside"
uses कः + 3sg, owned c01.)

**§17 Story — serial episode 4, part 2: "The tale so far, joined at its vowels and its
visargas"** — label: "our retelling, after Hitopadeśa 1 (Mitralābha) — the lines of episodes
1–3, joined so far: the vowel seams of lesson 1 and the visarga seams of today". Ten lines (the
English and Hindi are the source lesson's own):

1. एको व्याधोऽस्ति। (eko vyādho 'sti.) "There is a hunter." — एक शिकारी है।
2. प्रभाते व्याधः पुनस्तीरम् आगच्छति। (prabhāte vyādhaḥ punas tīram āgacchati.) "At dawn the hunter comes to the bank again." (the source's English: v3.c02.l01 line 1)
3. तीर एको वृक्षोऽस्ति। (tīra eko vṛkṣo 'sti.) "On the bank there is a tree." — किनारे पर एक पेड़ है।
4. मूषको विवरे निवसति। (mūṣako vivare nivasati.) "The mouse lives in a hole." — चूहा बिल में रहता है।
5. कपोतोऽन्नाय वृक्षात् पतति। (kapoto 'nnāya vṛkṣāt patati.) "The dove flies down from the tree for the food." — कबूतर अन्न के लिए पेड़ से नीचे उतरता है।
6. व्याधः क्रुद्धो भवति। (vyādhaḥ kruddho bhavati.) "The hunter becomes angry." — शिकारी क्रुद्ध हो जाता है।
7. कपोता हसन्ति। ते वदन्ति — व्याधः साधुः! सोऽतिथिभ्यस्तण्डुलान् ददाति। (kapotā hasanti. te vadanti — vyādhaḥ sādhuḥ! so 'tithibhyas taṇḍulān dadāti.) "The doves laugh. They say: 'The hunter is good! He gives grains to guests.'"
8. ते शत्रोर्जाले सन्ति। (te śatror jāle santi.) "They are in the enemy's net."
9. तीरे व्याधो धावति। स हसति। (tīre vyādho dhāvati. sa hasati.) "On the bank the hunter runs. He laughs." — किनारे पर शिकारी दौड़ता है। वह हँसता है।
10. ते जाले बद्धा अभवन्। अथ नृप उवाच — "वयम् जालेन सहाकाशम् गच्छामः।" (te jāle baddhā abhavan. atha nṛpa uvāca — "vayam jālena sahākāśam gacchāmaḥ.") "They were caught in the net. Then the king said: 'We go up into the sky, net and all.'"

**Split key** (`<details>`; source line as on disk; seam; rule and lesson):
1. v3.c01.l01 line 1 — एकः व्याधः अस्ति। — एकः व्याधः → एको व्याधः (-अः + voiced, l02); व्याधः अस्ति → व्याधोऽस्ति (-अः + अ, l02)
2. v3.c02.l01 line 1 — प्रभाते व्याधः पुनः तीरम् आगच्छति। — व्याधः पुनः (ः before प stays); पुनः तीरम् → पुनस्तीरम् (r-final before त: स्, 8.3.34, l02)
3. v3.c01.l02 line 1 — तीरे एकः वृक्षः अस्ति। — तीरे एकः → तीर एकः (अयादि, l01); एकः वृक्षः → एको वृक्षः (l02); वृक्षः अस्ति → वृक्षोऽस्ति (l02)
4. v3.c01.l02 line 3 — मूषकः विवरे निवसति। — मूषकः विवरे → मूषको विवरे (l02)
5. v3.c01.l03 line 7 — कपोतः अन्नाय वृक्षात् पतति। — कपोतः अन्नाय → कपोतोऽन्नाय (l02); वृक्षात् पतति stays apart today (l03)
6. v3.c01.l04 line 10 — व्याधः क्रुद्धः भवति। — व्याधः क्रुद्धः (ः before क stays); क्रुद्धः भवति → क्रुद्धो भवति (l02)
7. v3.c02.l03 line 6 — कपोताः हसन्ति। ते वदन्ति — व्याधः साधुः! सः अतिथिभ्यः तण्डुलान् ददाति। — कपोताः हसन्ति → कपोता हसन्ति (-आः + voiced, l02); व्याधः साधुः (ः before स stays); सः अतिथिभ्यः → सोऽतिथिभ्यः (l02); अतिथिभ्यः तण्डुलान् → अतिथिभ्यस्तण्डुलान् (ः before त → स्, l02); तण्डुलान् ददाति stays apart (the न् seam, l03)
8. v3.c02.l03 line 9 — ते शत्रोः जाले सन्ति। — शत्रोः जाले → शत्रोर्जाले (-ओः + voiced, l02)
9. v3.c03.l01 line 6 — तीरे व्याधः धावति। सः हसति। — व्याधः धावति → व्याधो धावति (l02); सः हसति → स हसति (6.1.132, l02)
10. v3.c03.l03 lines 6–7 — ते जाले बद्धाः अभवन्। अथ नृपः उवाच — "वयम् जालेन सह आकाशम् गच्छामः।" — बद्धाः अभवन् → बद्धा अभवन् (-आः + vowel, l02); नृपः उवाच → नृप उवाच (-अः + vowel other than अ, l02); सह आकाशम् → सहाकाशम् (l01); वयम् जालेन, आकाशम् गच्छामः stay (l03)

Every pause line was copied from its source §17 on disk. Craft notes: lines 1, 3, 4 come from
episode 1, so the learner meets the old lines in a new dress; line 2 has the r-final पुनः before
त; line 9 sets सः before a consonant (6.1.132) beside व्याधो (-अः before a voiced consonant);
line 10 has the two -अः/-आः gaps and an l01 seam. **Teacher Notes (departures):** as l01 (none
added).

**§3 Station 0 (runs S0-af and S0-ae, verbatim, row 0.24).** About 8 minutes. Item 1 (S0-af,
+1 day from l01): ten vowel seams split; key row 0.G. Item 2 (S0-ae, +1 week from v3.c03.l05):
the tense switch, reversed; key row 0.G. **Prompts:** (1) v1.c05.l02 — what are the two words
in नमस्ते? (2) v2.c06.l02 — say the moral both ways (न कः अपि लघुः / न कोऽपि लघुः); (3) v2.c01.l04
— say goodbye the joined way.

**§20 Bookings:** S0-ah (+1 day, run by l03) and S0-ai (+1 week, run by l04), verbatim (row
0.24). Revision box: the visarga map (0.B) with its three questions; सः/एषः; भोः; the r-finals
and बहिः; नमस्कारः's exception; the two sūtras; the नमस्ते thread so far (steps 1–2); the Hindi
row (0.E d); ledger 451, cells drilled 26.

**§9–§11 (connected speech):** नमः ते /n̪ɐmɐh t̪eː/ → नमस्ते /n̪ɐmɐst̪eː/ · कः अपि → कोऽपि
/koːpi/ · परमः धर्मः → परमो धर्मः /pɐɾɐmoː d̪ʱɐɾmɐh/ · पुनः मिलामः → पुनर्मिलामः
/pun̪ɐɾmilɑːmɐh/ · रामः आगच्छति → राम आगच्छति /ɾɑːmɐ ɑːgɐt͡ɕt͡ɕʰɐt̪i/ (the gap) · छात्राः
गच्छन्ति → छात्रा गच्छन्ति /t͡ɕʰɑːt̪ɾɑː gɐt͡ɕt͡ɕʰɐn̪t̪i/ · गुरुः वदति → गुरुर्वदति
/guɾuɾʋɐd̪ɐt̪i/. The visarga /h/ is said in pause form and at a pause before क, प, श, स; it is
not said where the seam has changed it. The ओ of परमो is the long pure /oː/. Dictation (pause
form first, then joined): नमः ते · कः अपि · रामः च · गुरुः वदति · सः गच्छति · पुनः अपि · छात्राः
अत्र. §11: the tongue moves straight from स् to त in नमस्ते (both dental, /st̪/); the र् of
पुनर्मिलामः is a single tap /ɾ/.

**§12 Common mistakes:** (1) The visarga left before त: *नमःते, *कःत्वम् — fix: before त, थ
the visarga is स् (8.3.34): नमस्ते, कस्त्वम्. (2) Closing the gap after -अः, -आः: *रामागच्छति
for राम आगच्छति, *छात्रागच्छन्ति for छात्रा आगच्छन्ति — fix: the visarga goes and the gap stays
(Whitney §175c, §177). (3) सः treated like other -अः words: *सो गच्छति, *सः गच्छति in joined text
— fix: 6.1.132: स गच्छति; before अ, सोऽपि. (4) An r-final treated as -अः: *पुनो मिलामः,
*पुनोऽपि, *प्रातो गच्छति — fix: पुनः, प्रातः, अन्तः end in र् at heart: पुनर्मिलामः, पुनरपि,
प्रातर्गच्छति. (5) The homograph: अन्तः "inside" (antar) read as अन्तः "end" (the nominative of
अन्त) — fix: the sentence decides: अन्तरागच्छ "come in"; अन्तः "the end" joins as an -अः word
(अन्तो भवति). (6) A Hindi-speaker habit: नमस्ते heard as one Hindi word with no seam in it, and
*नमः + कार joined as *नमःकार — fix: नमः + ते by today's rule; नमस्कार keeps स् (the exception,
Whitney §171b). Teacher Notes (not a row): गुरुः + रक्षति → गुरू रक्षति, never *गुरुर्रक्षति (◐).

**§18 Exercises (keys; every exercise placed):**

- *Ex 1 (obj. 1; in class): split and place on the map* (10). नमस्ते · कोऽपि · परमो धर्मः ·
  पुनर्मिलामः · अनुगृहीतोऽस्मि · ईकारश्च · भो राम · गुरुर्वदति · स गच्छति · बहिस्तिष्ठति —
  **Key:** नमः ते (-अः · त) · कः अपि (-अः · अ) · परमः धर्मः (-अः · voiced consonant) · पुनः
  मिलामः (r-final · voiced) · अनुगृहीतः अस्मि (-अः · अ) · ईकारः च (-अः · च) · भोः राम (भोः ·
  voiced) · गुरुः वदति (other vowel · voiced) · सः गच्छति (सः · consonant, 6.1.132) · बहिः तिष्ठति
  (other vowel, an s-final · त).
- *Ex 2 (obj. 1, 2; homework): finish the titles* (6). Volume 1 and 2 printed some titles half
  joined; join every visarga seam: इकारः ईकारश्च (v1.c02.l01) · परिवारः जगच्च (v2.c02's title:
  only the visarga seam today) · सिंहः हसति · छात्राः गच्छन्ति · हरिः अत्र · मूषकः आगच्छति —
  **Key:** इकार ईकारश्च · परिवारो जगच्च · सिंहो हसति · छात्रा गच्छन्ति · हरिरत्र · मूषक आगच्छति.
- *Ex 3 (obj. 2; in class): join* (12). नमः ते · कः त्वम् · रामः च · व्याधः तत्र · सिंहः वदति ·
  कः अपि · रामः आगच्छति · कपोताः अत्र · गुरुः अपि · प्रातः एव · अन्तः आगच्छ · शनैः शनैः —
  **Key:** नमस्ते · कस्त्वम् · रामश्च · व्याधस्तत्र · सिंहो वदति · कोऽपि · राम आगच्छति · कपोता
  अत्र · गुरुरपि · प्रातरेव · अन्तरागच्छ · शनैः शनैः (शनैश्शनैः also correct).
- *Ex 4 (obj. 2; homework): the special words* (6). सः गच्छति · सः अपि · सः एकम् पश्यति · एषः
  बालकः · सः करोति · भोः राम — **Key:** स गच्छति · सोऽपि · स एकम् पश्यति (the म् seam stays
  today) · एष बालकः · स करोति · भो राम.
- *Ex 5 (obj. 3; homework): explain in one line each* (6). नमस्ते · स गच्छति · मनोरथः ·
  नमस्कारः · पुनरपि · बहिर्गच्छति — **Key** (any wording with the fact): नमः + ते, ः → स् before
  त (8.3.34) · सः + गच्छति, the ः of सः drops before a consonant (6.1.132) · मनस्-रथः, -अस् → ओ
  before र (a voiced consonant) · नमस् + कारः, स् kept before -कार (the exception) · पुनः is
  punar: र् kept before a vowel · बहिः is bahis: after इ the visarga → र् before a voiced sound.
- *Ex 6 (obj. 4; homework, recorded — production):* read §17 aloud joined, once slowly, once at
  natural pace; record the second; tick every seam read without a pause (rubric 1 point per
  line, 10).
- *Ex 7 (obj. 2, 4; homework — production):* write six sentences of your own about your morning,
  in pause form, with at least six visarga seams (use प्रातः, बहिः, अन्तः, उच्चैः, शनैः, तु at
  least once each), then join their vowel and visarga seams. Key: any correct join; the teacher
  checks that no म्/त्/न् seam was joined.
- *Dictation (obj. 4; in class, §9):* the seven items of §9; key: §9.

**§19 Quiz (10):**
1. नमः ते joined: (a) नमःते (b) नमस्ते (c) नमोते (d) नमश्ते — **b** · FACT.
2. रामः च joined: (a) रामस्च (b) रामश्च (c) रामो च (d) रामःच — **b** · FACT.
3. कः अपि joined: (a) कोऽपि (b) कापि (c) कः अपि (d) कस्अपि — **a** · FACT.
4. छात्राः गच्छन्ति joined: (a) छात्रो गच्छन्ति (b) छात्रा गच्छन्ति (c) छात्राः गच्छन्ति (d) छात्रार्गच्छन्ति — **b** · FACT.
5. गुरुः वदति joined: (a) गुरो वदति (b) गुरु वदति (c) गुरुर्वदति (d) गुरुस्वदति — **c** · FACT.
6. पुनः अपि joined: (a) पुनोऽपि (b) पुनरपि (c) पुन अपि (d) पुनापि — **b** · FACT.
7. सः गच्छति joined: (a) सो गच्छति (b) स गच्छति (c) सः गच्छति (d) सर्गच्छति — **b** · FACT.
8. रामः आगच्छति joined: (a) रामागच्छति (b) रामो आगच्छति (c) राम आगच्छति (d) रामर् आगच्छति — **c** · FACT.
9. According to Pāṇini (8.3.34 विसर्जनीयस्य सः), before a voiceless consonant the visarga is replaced by: (a) र् (b) स् (c) ओ (d) nothing — **b** · TRADITION ("According to Pāṇini…").
10. In अन्तरागच्छ, अन्तः means: (a) "the end" (b) "inside" (c) "again" (d) "outside" — **b** · FACT (the homograph).
(Every distractor is a real mis-join of §12 or a misread owned word: the -अः treated as
-इः (रामर्), the gap closed (रामागच्छति), ओ put before a vowel other than अ (रामो आगच्छति).)

**§4:** SYMBOL callout (above, never assessed); TRADITION: "In Pāṇini's grammar the visarga is
not part of a word's underlying form: a final स् or र् is replaced by the visarga at a pause or before
a voiceless sound (Teacher Notes give the sūtras), and 8.3.34 gives the स् back before a
voiceless consonant" [REF:ashtadhyayi 8.3.34]. **§5 (FACT):** the visarga is a voiceless /h/,
the pause shape of final s and r [REF:whitney1889 §145] [REF:whitney1889 §170]; before voiced
sounds it is voiced as र् or absorbed (ओ, आ) [REF:whitney1889 §174]; Hindi has no visarga seams
between its own words (0.E d, [REF:kachru2006]). **§21 (about 40 minutes):** Ex 2 (5) · Ex 4 (5)
· Ex 5 (6) · Ex 6 recorded (8) · Ex 7 (10) · the visarga map drawn from memory and checked
against §15 (3) · real-world task (3): say नमस्ते to someone and tell them, in one line of Hindi,
its two words and why the स् is there (नमः + ते: त से पहले विसर्ग स् बन जाता है). **Payoff
(§1/§8):** नमस्ते, the course's first word, "noticed, taught there" in v1.c05.l02, is नमः + ते
by one rule; every visarga seam previewed in Volumes 1–2 (कोऽपि, परमो धर्मः, पुनर्मिलामः,
अनुगृहीतोऽस्मि, ईकारश्च, कालश्च, भो राम, पुनर्वदतु) is now produced, not just noticed.

**Teacher Notes points:** the derivation sūtras (row 0.8: 8.2.66, 8.3.15, 6.1.113–114, 8.3.14,
6.3.111, 8.3.35–37, 8.3.17, 8.3.19, 8.3.22, 8.3.40, 8.4.41 ष्टुना ष्टुः for the ट row); Whitney
§173a (ः may drop before a sibilant + voiceless stop; keys accept ः); the भोः + vowel display;
the ट ठ row; the homograph अन्तः; मा-free: no prohibition drill here. **Timing (45 min):** Station
0, two items (8) → the scene and the question (3) → the evidence table (5) → the map's three
questions named (4) → the map assembled, -अः column first, then -आः, other vowels, r-finals,
special words (8) → 8.3.34 and 6.1.132 read at their cells (3) → production: Ex 1 split (4), Ex 3
join (5) → §9 pairs and dictation (3) → §17 read joined so far, the bookings, homework (2).

---

## 3. L3 — जगच्च: When Consonants Meet (grammar)

**Front matter.** id `v3.c04.l03` · file `lesson-03-when-consonants-meet.md` · title sa जगच्च ·
sa_iast *jagacca* · en "When Consonants Meet" · hi "जगच्च — जब व्यञ्जन मिलते हैं" · lesson_type:
grammar · cefr A2 · duration_minutes 45 · self_study_minutes 35 · prerequisites [v3.c04.l02] ·
review_of [v3.c04.l02, v3.c04.l01, v2.c02.l04, v2.c03.l02, v2.c01.l02, v1.c06.l04, v1.c06.l01,
v1.c01.l01, v1.c05.l01, v2.c06.l01] · vocabulary_count **4** · tags [grammar, sandhi,
consonant-sandhi, anusvara, voicing, palatal-assimilation, sutra, splitting, joining,
joined-so-far, hindi-bridge, serial, spaced-review] · media (planned): images
`v3c04l03-consonant-map.svg`, `v3c04l03-vowel-or-consonant-sort.svg`; audio
`v3c04l03-seams-drill.mp3`, `v3c04l03-story.mp3`; worksheets `v3c04l03-consonant-seams.pdf`.

**Objectives.**
1. en "Split the owned joined shapes जगच्च, षडादि-, सर्वं कुशलम्, सत्यमेव, कश्चिद्दुःखभाग्भवेत्,
   जलमस्ति and तस्मिन्नेव into their pause forms and name what changed at each seam (anusvāra,
   voicing, place, doubling)." · hi "अपने जाने-पहचाने जुड़े रूपों — जगच्च, षडादि-, सर्वं कुशलम्,
   सत्यमेव, कश्चिद्दुःखभाग्भवेत्, जलमस्ति, तस्मिन्नेव — को विराम-रूप में अलग करें और बताएँ कि हर जोड़
   पर क्या बदला (अनुस्वार, घोषत्व, स्थान, द्वित्व)।"
2. en "Join a word ending in म्, क्, ट्, त् or न् to the next word: म् → ं before a consonant and
   joined before a vowel; a final stop voiced before a voiced sound; त् + च/छ/ज; न् doubled after
   a short vowel; a consonant-final word written together with the next." · hi "म्, क्, ट्, त् या
   न् पर ख़त्म होने वाले शब्द को अगले शब्द से जोड़ें: व्यञ्जन से पहले म् → ं और स्वर से पहले जुड़कर;
   घोष ध्वनि से पहले अन्तिम स्पर्श घोष; त् + च/छ/ज; ह्रस्व स्वर के बाद न् का द्वित्व; व्यञ्जनान्त शब्द
   अगले शब्द से मिलाकर लिखा जाए।"
3. en "State, according to Pāṇini, what 8.3.23 मोऽनुस्वारः, 8.2.39 झलां जशोऽन्ते and 8.4.40 स्तोः
   श्चुना श्चुः say, and state the anusvāra contrast with Hindi exactly (संगीत / सङ्गीत; किं करोति
   or किङ्करोति)." · hi "पाणिनि के अनुसार बताएँ कि 8.3.23 मोऽनुस्वारः, 8.2.39 झलां जशोऽन्ते और 8.4.40
   स्तोः श्चुना श्चुः क्या कहते हैं, और हिन्दी से अनुस्वार का अन्तर ठीक-ठीक बताएँ (संगीत / सङ्गीत;
   किं करोति या किङ्करोति)।"
4. en "Read aloud a line joined at every seam taught so far, and write one from dictation in both
   forms." · hi "अब तक सिखाए हर जोड़ पर जुड़ी पंक्ति ज़ोर से पढ़ें, और श्रुतलेख में उसे दोनों रूपों में
   लिखें।"

**The one grammar point.** A word-final consonant takes on the voicing, and sometimes the place,
of what follows; a final म् becomes the anusvāra before a consonant (row 0.10; table 0.C).

**Forms taught** (Whitney §§159, 161–163, 202–210, 213; table 0.C; rows 0.10–0.12). **Cells
drilled: 10** (row 0.22). **Paradigm ledger (§15 end):** the vowel and visarga maps as before;
the consonant map ✓ as row 0.17 (rows 1–3, 5, 9, 9a, 11 of table 0.C); rows 4, 5a, 6, 7, 8, 10 ◐;
the cases of row 0.11e ○.

**Headwords** (all ledger-new; none in `ledger-all.tsv`):

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status |
|---|---|---|---|---|---|---|
| दिक् | dik | /d̪ik/ | direction, quarter (of the sky) | दिशा | f.; stem दिश् (diś) | ledger-new — Apte s.v. दिश् f. "(Nom. sing. दिक्-ग्) A direction, cardinal point, point of the compass, quarter of the sky"; rule 14: counted by its nominative; its faces दिक्, दिग्- (दिगपि); the consonant-stem declension is v4.c05; only the nominative is used |
| सम्यक् | samyak | /sɐmjɐk/ | properly, rightly, well | ठीक से, भली-भाँति | indeclinable (adverb) | ledger-new — MW s.v. samyañc / samyak "correctly, truly, properly, well"; Apte: Pass C quotes s.v. सम्यच् / सम्यक्; final क्: सम्यगवगच्छामि, सम्यक्पठसि |
| नाथः | nāthaḥ | /n̪ɑːt̪ʰɐh/ | protector, lord | स्वामी, रक्षक, नाथ | m. a-stem | ledger-new — Apte s.v. नाथः "A lord, master, protector, leader"; जगन्नाथः (◐ seam) |
| धीमान् | dhīmān | /d̪ʱiːmɑːn̪/ | wise, intelligent | बुद्धिमान् | adj., nominative (stem धीमत्) | ledger-new — Apte s.v. धीमत् "Wise, intelligent, learned"; rule 14: counted by its m. nominative, used in the nominative only (its R6 card is c05.l01; plan review c04#12: an adjective, not "m."); final न् after a long vowel: धीमानपि, धीमान्बालकः |

**Ledger line:** "4 ledger-new · 0 upgrades · ledger 451 → 455 · cells drilled: 10." §14 note:
जगच्च, सत्यमेव, जगन्नाथः … add 0 (rules 10, 11).

**Six-step material.**

1. *Scene:* the chapter titles of Volume 2 on the board — परिवारः जगच्च, षडादिदशान्ताः — and the
   greeting सर्वं कुशलम्.
2. *The question:* **what are the words in जगच्च — and why is the त् of जगत् a च्?**
3. *Owned joined shapes that already answer it* (evidence table; each grep-checked, row 0.F):

| owned joined shape | where owned | its pause form | what it shows |
|---|---|---|---|
| जगच्च | v2.c02.l04 (and the chapter title परिवारः जगच्च) | जगत् च | त् + च → च्च |
| षडादि- (in षडादिदशान्ताः) | v2.c03.l02 (title) | षट्-आदि- | ट् → ड् before a vowel |
| सर्वं कुशलम् | v2.c01.l02 | सर्वम् कुशलम् | म् → ं before क |
| सत्यमेव | v1.c06.l04 | सत्यम् एव | म् + vowel: joined, unchanged |
| कश्चिद्दुःखभाग्भवेत् | v1.c06.l04 ("the द्/ग् you see are sandhi") | कश्चित् दुःखभाक् भवेत् | त् → द्, क् → ग् before voiced sounds |
| *aham → ahaṃ* | v1.c01.l01 | अहम् | "before a consonant a final m is written ṃ" |
| गङ्गा, पञ्च | v1.c06.l01 | — | the nasal takes the place of the next stop (inside a word): the same habit across a word boundary |
| रामश्च | v3.c04.l02 | रामः च | ः → स् → श् before च: the same assimilation |

4. *The pattern named:* व्यञ्जनसन्धिः; three questions — **does the left word end in म्, in a
   stop, or in न्? does the right word begin with a vowel or a consonant? voiced or voiceless? of
   which row?**
5. *The learner assembles the consonant map* (table 0.C): म् first (सर्वं कुशलम्, सत्यमेव), then
   voicing (षडादि-, कश्चिद्), then place (जगच्च, with रामश्च of l02 beside it), then न्
   (तस्मिन्नेव from the Hitopadeśa line, glossed), then the ◐ rows read once. Checked against §15.
6. *Production — splitting first, then joining:* the vowel/consonant sort (Ex 4) guards against
   double application (*सत्यंएव); Ex 1 (split), then Ex 3 (join).

**Sūtras (learner text, TRADITION; row 0.12, wording fixed there):** 8.3.23 at row 1; 8.2.39 at
row 3 (with its last sentence: the pause form षट् is not wrong); 8.4.40 at row 5, with the line
that रामश्च (l02) is the same sūtra acting on 8.3.34's स्.

**Model sentences (§13; pause → joined; IAST, English, Hindi):**
1. सत्यम् वद। सत्यम् एव वद। (satyam vada. satyam eva vada.) → सत्यं वद। सत्यमेव वद। (satyaṃ vada. satyam eva vada.) "Speak the truth. Speak only the truth." — सच बोलो। सच ही बोलो।
2. जलम् उपरि आगच्छति। (jalam upari āgacchati.) → जलमुपर्यागच्छति। (jalam upary āgacchati.) "The water comes up." — पानी ऊपर आता है। (the V2 crow's line 8)
3. परिवारः जगत् च। (parivāraḥ jagat ca.) → परिवारो जगच्च। (parivāro jagac ca.) "Family and world." — परिवार और संसार। (v2.c02's chapter title, joined: an l02 seam and an l03 seam)
4. सत्यम् एव जयते। (satyam eva jayate.) → सत्यमेव जयते। (satyam eva jayate.) "Truth alone prevails." — सत्य की ही जय होती है। (Muṇḍaka 3.1.6; owned)
5. षट् अत्र आम्राणि सन्ति। (ṣaṭ atra āmrāṇi santi.) → षडत्राम्राणि सन्ति। (ṣaḍ atrāmrāṇi santi.) "There are six mangoes here." — यहाँ छह आम हैं।
6. तस्मिन् एव वने सिंहः स्वपिति। (tasmin eva vane siṃhaḥ svapiti.) → तस्मिन्नेव वने सिंहः स्वपिति। (tasminn eva vane siṃhaḥ svapiti.) "In that very forest the lion sleeps." — उसी वन में शेर सोता है।
7. बुद्धिः बलात् श्रेष्ठा। (buddhiḥ balāt śreṣṭhā.) → बुद्धिर्बलाच्छ्रेष्ठा। (buddhir balāc chreṣṭhā.) "Intelligence is better than strength." — बुद्धि बल से श्रेष्ठ है। (the 1.x moral; त् + श is ◐: read, not required)

The plan's five are 1 (rewritten), 2, 3, 4, 7; **धर्मम् चर is dropped** from model 1 (चर is not
owned, and सत्यं वद धर्मं चर is an unlocated quotation of the Taittirīya Upaniṣad, 1.11: a
quotation needs its locus; §7, deviation 9); 5 and 6 add voicing before a vowel and the doubled
न्.

**§16 Conversation** (a student asks the teacher the way to the village; 10 turns; every seam
now joined — still labelled "joined so far", now at every seam taught; the pause form in the
key):

1. छात्रः — गुरो, ग्रामस्य मार्गः कः? (guro, grāmasya mārgaḥ kaḥ?) "Teacher, which is the way to the village?"
2. गुरुः — एषा दिक्। तत्पश्य! (eṣā dik. tat paśya!) "This direction. Look at that!"
3. छात्रः — सम्यगवगच्छामि। (samyag avagacchāmi.) "I understand properly."
4. गुरुः — तत्रैको वृक्षोऽस्ति। तं वृक्षं गच्छ। (tatraiko vṛkṣo 'sti. taṃ vṛkṣaṃ gaccha.) "There is a tree there. Go to that tree."
5. छात्रः — ततः किम्? (tataḥ kim?) "And then?"
6. गुरुः — ततो ग्रामं पश्यसि। तत्र तव मित्रं निवसति। (tato grāmaṃ paśyasi. tatra tava mitraṃ nivasati.) "Then you see the village. Your friend lives there."
7. छात्रः — मम मित्रं धीमान्बालकः। सत्यमेव! (mama mitraṃ dhīmān bālakaḥ. satyam eva!) "My friend is a wise boy. Truly!"
8. गुरुः — तज्जानामि। स सदा सत्यं वदति। (taj jānāmi. sa sadā satyaṃ vadati.) "I know that. He always speaks the truth."
9. छात्रः — तच्च सम्यक्! अहमपि सत्यं वदामि। (tac ca samyak! aham api satyaṃ vadāmi.) "And that is right! I too speak the truth."
10. गुरुः — भद्रम्। गच्छ, पुनर्मिलामः। (bhadram. gaccha, punar milāmaḥ.) "Good. Go — we meet again."

Key (pause form, seam, rule): 2 तत् पश्य → तत्पश्य (no change, written together) · 3 सम्यक्
अवगच्छामि → सम्यगवगच्छामि (8.2.39) · 4 तत्र एकः → तत्रैकः (l01); एकः वृक्षः → एको वृक्षः, वृक्षः
अस्ति → वृक्षोऽस्ति (l02); तम् वृक्षम् गच्छ → तं वृक्षं गच्छ (8.3.23) · 5 ततः किम् (ः before क
stays) · 6 ततः ग्रामम् → ततो ग्रामम् (l02); ग्रामम् पश्यसि → ग्रामं पश्यसि (or ग्रामम्पश्यसि);
मित्रम् निवसति → मित्रं निवसति · 7 मित्रम् धीमान् → मित्रं धीमान्; धीमान् बालकः → धीमान्बालकः
(न् unchanged before ब, written together); सत्यम् एव → सत्यमेव · 8 तत् जानामि → तज्जानामि (8.4.40);
सः सदा → स सदा (6.1.132); सत्यम् वदति → सत्यं वदति · 9 तत् च → तच्च (8.4.40); अहम् अपि → अहमपि;
सत्यम् वदामि → सत्यं वदामि · 10 पुनः मिलामः → पुनर्मिलामः (l02). Turn 1 keeps गुरो, apart before
the comma (row 0.3). The ◐ rows are not in the dialogue.

**§17 Story — serial episode 4, part 3: "The tale so far, joined at every seam"** — label: "our
retelling, after Hitopadeśa 1 (Mitralābha) — the lines of episodes 1–3, joined so far: today
every seam is joined". Ten lines (English and Hindi as in the source lessons):

1. स जालं नयति। व्याधो मार्गं त्यजति। स वनं गच्छति। (sa jālaṃ nayati. vyādho mārgaṃ tyajati. sa vanaṃ gacchati.) "He carries a net. The hunter leaves the road. He goes into the forest."
2. प्रभाते व्याधो ग्रामाद्वनमागच्छति। (prabhāte vyādho grāmād vanam āgacchati.) "At dawn the hunter comes from the village to the forest."
3. व्याधो हस्तेनान्नं तीरे क्षिपति। (vyādho hastenānnaṃ tīre kṣipati.) "With his hand the hunter throws food on the bank."
4. स कपोतेन विना ग्रामं गच्छति। (sa kapotena vinā grāmaṃ gacchati.) "He goes to the village without the dove."
5. तीरे तण्डुलाः सन्ति, जालमप्यस्ति। (tīre taṇḍulāḥ santi, jālam apy asti.) "On the bank there are grains, and there is a net too."
6. तस्मिन्वृक्षे कपोता निवसन्ति। (tasmin vṛkṣe kapotā nivasanti.) "In that tree the doves live."
7. नृपश्चिन्तयति। स एकं मित्रं स्मरति — मूषकम्। (nṛpaś cintayati. sa ekaṃ mitraṃ smarati — mūṣakam.) "The king thinks. He remembers a friend — the mouse."
8. तस्मिन्वृक्षे बहवः कपोता न्यवसन्। (tasmin vṛkṣe bahavaḥ kapotā nyavasan.) "In that tree lived many doves."
9. ततो मूषको विवरान्निरगच्छत्। स जालं कपोतांश्चापश्यत्, आह च — "हे मित्र! किमेतत्?" (tato mūṣako vivarān niragacchat. sa jālaṃ kapotāṃś cāpaśyat, āha ca — "he mitra! kim etat?") "Then the mouse came out of the hole. He saw the net and the doves, and said: 'Friend! What is this?'"
10. मूषकः कपोतेभ्योऽन्नं प्रायच्छत्, अवदच्च — "हे कपोताः! अन्नं भक्षयत, सुखं जीवत!" (mūṣakaḥ kapotebhyo 'nnaṃ prāyacchat, avadac ca — "he kapotāḥ! annaṃ bhakṣayata, sukhaṃ jīvata!") "The mouse offered the doves food, and said: 'Doves! Eat the food, live happily!'"

**Split key** (`<details>`; source line as on disk; seams; rule and lesson):
1. v3.c01.l01 lines 2–4 — सः जालम् नयति। व्याधः मार्गम् त्यजति। सः वनम् गच्छति। — सः जालम् → स जालम् (6.1.132, l02); जालम् नयति → जालं नयति (8.3.23, l03); व्याधः मार्गम् → व्याधो मार्गम् (l02); मार्गम् त्यजति → मार्गं त्यजति; सः वनम् → स वनम्; वनम् गच्छति → वनं गच्छति (l03)
2. v3.c01.l02 line 4 — प्रभाते व्याधः ग्रामात् वनम् आगच्छति। — व्याधः ग्रामात् → व्याधो ग्रामात् (l02); ग्रामात् वनम् → ग्रामाद्वनम् (8.2.39, l03); वनम् आगच्छति → वनमागच्छति (l03)
3. v3.c01.l03 line 1 — व्याधः हस्तेन अन्नम् तीरे क्षिपति। — व्याधः हस्तेन → व्याधो हस्तेन (ह is voiced, l02); हस्तेन अन्नम् → हस्तेनान्नम् (l01); अन्नम् तीरे → अन्नं तीरे (l03)
4. v3.c01.l04 line 11 — सः कपोतेन विना ग्रामम् गच्छति। — सः कपोतेन → स कपोतेन (6.1.132); ग्रामम् गच्छति → ग्रामं गच्छति
5. v3.c02.l03 line 4 — तीरे तण्डुलाः सन्ति, जालम् अपि अस्ति। — तण्डुलाः सन्ति (ः before स stays, l02); जालम् अपि → जालमपि (l03); अपि अस्ति → अप्यस्ति (l01)
6. v3.c02.l02 line 3 — तस्मिन् वृक्षे कपोताः निवसन्ति। — तस्मिन् वृक्षे → तस्मिन्वृक्षे (न् unchanged, written together, l03); कपोताः निवसन्ति → कपोता निवसन्ति (l02)
7. v3.c03.l01 line 8 — नृपः चिन्तयति। सः एकम् मित्रम् स्मरति — मूषकम्। — नृपः चिन्तयति → नृपश्चिन्तयति (l02); सः एकम् → स एकम् (-अः before a vowel other than अ, l02); एकम् मित्रम् → एकं मित्रम्; मित्रम् स्मरति → मित्रं स्मरति (l03)
8. v3.c03.l03 line 2 — तस्मिन् वृक्षे बहवः कपोताः न्यवसन्। — तस्मिन्वृक्षे (l03); बहवः कपोताः (ः before क stays); कपोताः न्यवसन् → कपोता न्यवसन् (l02)
9. v3.c03.l03 lines 12–13 — ततः मूषकः विवरात् निरगच्छत्। सः जालम् कपोतान् च अपश्यत्, आह च — "हे मित्र! किम् एतत्?" — ततः मूषकः → ततो मूषकः, मूषकः विवरात् → मूषको विवरात् (l02); विवरात् निरगच्छत् → विवरान्निरगच्छत् (stop + nasal, ◐; विवराद्निरगच्छत् also correct); सः जालम् → स जालम्; जालम् कपोतान् → जालं कपोतान्; कपोतान् च → कपोतांश्च (◐); च अपश्यत् → चापश्यत् (l01); किम् एतत् → किमेतत् (l03)
10. v3.c03.l04 line 9 — मूषकः कपोतेभ्यः अन्नम् प्रायच्छत्, अवदत् च — "हे कपोताः! अन्नम् भक्षयत, सुखम् जीवत!" — मूषकः कपोतेभ्यः (ः before क stays); कपोतेभ्यः अन्नम् → कपोतेभ्योऽन्नम् (l02); अन्नम् प्रायच्छत् → अन्नं प्रायच्छत् (l03); अवदत् च → अवदच्च (8.4.40, l03); अन्नम् भक्षयत → अन्नं भक्षयत; सुखम् जीवत → सुखं जीवत (l03)

Craft notes: lines 1–4 are episode 1, now fully joined: the learner sees how much of the
"look" of joined Sanskrit is the anusvāra and the -ओ; line 9 carries two ◐ seams, read, not
required (the key says so); the speech frames (lines 7, 9, 10) show that no join crosses the dash.
**Teacher Notes (departures):** as l01.

**§3 Station 0 (runs S0-ah and S0-ag, verbatim, row 0.24).** About 8 minutes. Item 1 (S0-ah, +1
day from l02): the -अः column; key row 0.G. Item 2 (S0-ag, +1 week from l01): ten vowel seams
joined; key row 0.G. **Prompts:** (1) v2.c02.l04 — say the chapter title in pause form; (2)
v2.c01.l02 — "all is well" in pause form and as joined print shows it; (3) v1.c06.l04 — the
pause forms of कश्चिद् and दुःखभाग्.

**§20 Bookings:** S0-aj (+1 day, run by l04) and S0-ak (+1 week, run by l05), verbatim (row
0.24). Revision box: the consonant map (0.C) with its three questions; the three sūtras; the
optional class nasal; the ◐ rows read; the Hindi row (0.E c); ledger 455, cells drilled 10.

**§9–§11 (connected speech):** सत्यम् वद /sɐt̪jɐm ʋɐd̪ɐ/ → सत्यं वद /sɐt̪jɐ̃ ʋɐd̪ɐ/ · किम् करोति →
किं करोति /kiŋ kɐɾoːt̪i/ (= किङ्करोति) · जलम् अस्ति → जलमस्ति /d͡ʑɐlɐmɐst̪i/ · जगत् च → जगच्च
/d͡ʑɐgɐt͡ɕt͡ɕɐ/ · षट् अत्र → षडत्र /ʂɐɖɐt̪ɾɐ/ · ग्रामात् गच्छति → ग्रामाद्गच्छति
/gɾɑːmɑːd̪gɐt͡ɕt͡ɕʰɐt̪i/ · तस्मिन् एव → तस्मिन्नेव /t̪ɐsmin̪n̪eːʋɐ/ · तत् मम → तन्मम /t̪ɐn̪mɐmɐ/
(◐). The anusvāra is said as the nasal of the next stop's row before a stop, as a nasalised
vowel before व, श, स, ह (STYLE_GUIDE §2.1). The doubled न्न is held, as in Hindi अन्न. Dictation
(pause form first, then joined): सत्यम् वद · जलम् अस्ति · जगत् च · षट् अत्र · तस्मिन् एव · अहम्
अपि गच्छामि. §11: in जगच्च the tongue moves from the teeth (त्) to the palate before च — and so
the त् is never heard: say च्च as one long च-closure.

**§12 Common mistakes:** (1) Double application: *सत्यंएव, *जलंअस्ति — fix: the anusvāra is
only for a consonant after it (8.3.23); before a vowel the म् stays and joins: सत्यमेव, जलमस्ति
(the vowel/consonant sort, Ex 4). (2) Voicing missed or wrong: *षटत्र, *तत्अपि, or voicing
before a voiceless sound *ग्रामाद्पतति — fix: voiced before a voiced sound only (षडत्र, तदपि;
ग्रामात्पतति). (3) *जगत्च written for जगच्च — fix: त् + च → च्च (8.4.40). (4) Doubling after
a long vowel: *तान्नपश्यत् — fix: न् doubles only after a short vowel (तस्मिन्नेव), not after a
long one (तानपश्यत्). (5) Writing a consonant-final word apart in joined text: *वृक्षात् पतति as
joined print — fix: STYLE_GUIDE §3.1: a word that ends in a consonant is written together with
the next (वृक्षात्पतति); the space is for words ending in a vowel, ं or ः. (6) The Hindi
spelling habit reversed: a learner "corrects" किङ्करोति to किं करोति as the only right shape,
or prints the dot inside a word where Sanskrit print uses the class nasal (*संगीतम् marked
wrong, or *पंच required) — fix: at a word end both are correct (8.4.59, optional); inside a word
the course writes the class nasal (सङ्गीतम्, पञ्च), and the dot is the convenience spelling
(v1.c06.l01).

**§18 Exercises (keys; every exercise placed):**

- *Ex 1 (obj. 1; in class): split and name the change* (10). सत्यं वद · जलमस्ति · जगच्च · तदपि ·
  षडत्र · ग्रामाद्गच्छति · तस्मिन्नेव · तानपश्यत् · सर्वं कुशलम् · अहमपि — **Key:** सत्यम् वद
  (anusvāra) · जलम् अस्ति (म् + vowel) · जगत् च (place) · तत् अपि (voicing) · षट् अत्र (voicing) ·
  ग्रामात् गच्छति (voicing) · तस्मिन् एव (doubling) · तान् अपश्यत् (no doubling after आ; written
  together) · सर्वम् कुशलम् (anusvāra) · अहम् अपि (म् + vowel).
- *Ex 2 (obj. 1; homework): read the ◐ rows* (6). Split only: तन्मम · जगन्नाथः · तल्लभते ·
  बलाच्छ्रेष्ठा · तद्धितम् · तांश्च — **Key:** तत् मम · जगत्-नाथः · तत् लभते · बलात् श्रेष्ठा · तत्
  हितम् · तान् च.
- *Ex 3 (obj. 2; in class): join* (12). किम् करोति · अहम् गच्छामि · किम् एतत् · जलम् इच्छति · वाक्
  अस्ति · सम्यक् अवगच्छामि · दिक् अपि · आसीत् एकः · अगच्छत् च · तत् जलम् · अगच्छन् अपि · भवान्
  अपि — **Key:** किं करोति (किङ्करोति) · अहं गच्छामि (अहङ्गच्छामि) · किमेतत् · जलमिच्छति ·
  वागस्ति · सम्यगवगच्छामि · दिगपि · आसीदेकः · अगच्छच्च · तज्जलम् · अगच्छन्नपि · भवानपि.
- *Ex 4 (obj. 2; homework): vowel or consonant?* (8). Sort by the second word's first sound,
  then join: सत्यम् एव · सत्यम् वद · जलम् पिबति · जलम् अपि · एकम् घटम् · एकम् आम्रम् · वनम्
  गच्छति · वनम् आगच्छति — **Key:** V सत्यमेव · C सत्यं वद · C जलं पिबति (जलम्पिबति) · V जलमपि ·
  C एकं घटम् (एकङ्घटम्) · V एकमाम्रम् · C वनं गच्छति (वनङ्गच्छति) · V वनमागच्छति.
- *Ex 5 (obj. 3; homework): the sūtra and the spelling* (8). a–d: which sūtra (8.3.23, 8.2.39,
  8.4.40) describes सत्यं वद · षडत्र · जगच्च · वागस्ति; e–h: write in the course's (classical)
  spelling: संगीत · गंगा · पंच — and say why संस्कृत keeps its dot — **Key:** 8.3.23 · 8.2.39 ·
  8.4.40 · 8.2.39; सङ्गीत · गङ्गा · पञ्च; before स (a sibilant) the anusvāra *is* the classical
  spelling (v1.c06.l01).
- *Ex 6 (obj. 4; homework, recorded — production):* read §17 aloud joined, once slowly, once at
  natural pace; record the second; tick each line read with no pause at its seams (10).
- *Ex 7 (obj. 2, 4; homework — production):* "my family in the morning" — six sentences of your
  own, in pause form, then joined at every ✓ seam (vowel, visarga, consonant); at least two म्
  seams before a vowel and two before a consonant. Key: any correct join; the teacher checks the
  anusvāra/म् choice and the spaces.
- *Dictation (obj. 4; in class, §9):* the six items of §9; key §9.

**§19 Quiz (10):**
1. सत्यम् वद joined: (a) सत्यमवद (b) सत्यं वद (c) सत्यंवद (d) सत्य वद — **b** · FACT.
2. सत्यम् एव joined: (a) सत्यं एव (b) सत्यमेव (c) सत्यंएव (d) सत्यैव — **b** · FACT.
3. जगत् च joined: (a) जगद्च (b) जगच्च (c) जगत्च (d) जगश्च — **b** · FACT.
4. षट् अत्र joined: (a) षटत्र (b) षडत्र (c) षट् अत्र (d) षड् अत्र — **b** · FACT.
5. तस्मिन् एव joined: (a) तस्मिनेव (b) तस्मिन्नेव (c) तस्मिंएव (d) तस्मिन् एव — **b** · FACT.
6. तान् अपश्यत् joined: (a) तान्नपश्यत् (b) तानपश्यत् (c) तांपश्यत् (d) तान् अपश्यत् — **b** · FACT.
7. ग्रामाद्गच्छति split: (a) ग्रामात् गच्छति (b) ग्रामाद् गच्छति (c) ग्रामः गच्छति (d) ग्रामे गच्छति — **a** · FACT (the pause form keeps त्).
8. किं करोति may also be written: (a) किम करोति (b) किङ्करोति (c) किन्करोति (d) किःकरोति — **b** · FACT.
9. According to Pāṇini (8.4.40 स्तोः श्चुना श्चुः), a त् before च becomes: (a) द् (b) च् (c) न् (d) स् — **b** · TRADITION ("According to Pāṇini…").
10. In Hindi print संगीत, the dot stands for: (a) a nasal vowel only (b) the class nasal ङ् before ग (c) a visarga (d) nothing — **b** · FACT (v1.c06.l01; row 0.E c).

**§4 (TRADITION):** the Kāśikā illustrates 8.2.39 with वागत्र — वाक् + अत्र, "speech here",
a word the learner owns (v1.c05.l01) [REF:kashika 8.2.39]; Hindi school grammar names these
joins व्यंजन सन्धि (0.E b) [REF:guru1952]. **§5 (FACT):** "the collision of surd and sonant
sounds is avoided … by assimilating the final to the following initial, or by regressive
assimilation" [REF:whitney1889 §159]: in the ✓ rows the end of a word adapts to the start of the next; in
two ◐ rows the second sound changes too (त् + श → च्छ, त् + ह → द्ध). Hindi's anusvāra spelling (0.E c) [REF:masica1991 ch.6].
**§21 (about 35 minutes):** Ex 2 (4) · Ex 4 (5) · Ex 5 (5) · Ex 6 recorded (8) · Ex 7 (10) ·
real-world task (3): find a Hindi word printed with the anusvāra dot before a stop (संगीत, हिंदी,
गंगा, पंजाब …) and write it in the classical spelling; then say, in one Hindi line, that both are
read alike. **Payoff (§1/§8):** जगच्च (v2.c02), षड् (v2.c03), सर्वं कुशलम् (v2.c01), सत्यमेव,
कश्चिद्, दुःखभाग् (v1.c06.l04) — all owned, all explained; the homorganic nasal of गङ्गा and पञ्च
(v1.c06.l01) is the same habit across a word boundary.

**Teacher Notes points:** row 0.11 sūtras (8.4.58–59, 8.4.45, 8.4.60, 8.4.62, 8.4.63, 8.3.32,
8.3.7, 8.4.55, 8.4.56, 6.1.73, 8.2.30); the not-covered list (row 0.11 e); Whitney §213d–f (the
nasal semivowel not printed); the c05.l02 preview कस्मिंश्चित् is **not** shown here (row 0.18).
**Timing (45 min):** Station 0, two items (8) → the scene and the question (3) → the evidence
table (5) → the three questions named (3) → the map assembled: म्, voicing, place, न् (8) → the
three sūtras at their rows (3) → the vowel/consonant sort aloud (2) → production: Ex 1 split (4),
Ex 3 join (4) → §9 pairs and dictation (3) → §17 read, the bookings, homework (2).

---

## 4. L4 — पदच्छेदः: Un-joining — Saṃhitā and Pada (reading)

**Front matter.** id `v3.c04.l04` · file `lesson-04-unjoining.md` · title sa पदच्छेदः · sa_iast
*padacchedaḥ* · en "Un-joining: Saṃhitā and Pada" · hi "पदच्छेद — संहिता से पद तक" · lesson_type:
reading · cefr A2 · duration_minutes 45 · self_study_minutes 40 · prerequisites [v3.c04.l03] ·
review_of [v3.c04.l03, v3.c04.l02, v3.c04.l01, v2.c06.l03, v1.c06.l04, v2.c06.l01, v3.c01.l03,
v3.c02.l01, v3.c02.l03, v3.c03.l01] · vocabulary_count **5** · tags [reading, sandhi,
padaccheda, padapatha, samhita, sutra, tradition, editions-vary, internal-sandhi-named,
joined-text, serial, spaced-review] · media (planned): images `v3c04l04-samhita-over-pada.svg`,
`v3c04l04-reverse-table.svg`; audio `v3c04l04-benediction-joined.mp3`, `v3c04l04-story.mp3`;
worksheets `v3c04l04-padaccheda-method.pdf`. **The title's own seam** (display, one line): पद-छेदः
→ पदच्छेदः — a short vowel before छ doubles it as च्छ (row 0.11e; Teacher Notes 6.1.73 छे च).

**Objectives.**
1. en "Take any joined line built from the seams of lessons 1–3 into its pause form by the
   six-step method (row 0.13), writing every candidate split at an ambiguous seam before choosing
   (मूषक आगच्छति: मूषकः or मूषके?)." · hi "पाठ 1–3 के जोड़ों से बनी किसी भी जुड़ी पंक्ति को छह चरणों
   की विधि से विराम-रूप में लाएँ, और जहाँ जोड़ अस्पष्ट हो वहाँ चुनने से पहले हर सम्भव विभाजन लिखें
   (मूषक आगच्छति: मूषकः या मूषके?)।"
2. en "Read aloud the owned joined lines — अहिंसा परमो धर्मः, सत्यमेव जयते, न कोऽपि लघुः, the
   benediction and the serial so far — and give each one's pause form (पदपाठः)." · hi "अपनी जानी-
   पहचानी जुड़ी पंक्तियाँ — अहिंसा परमो धर्मः, सत्यमेव जयते, न कोऽपि लघुः, मंगल-श्लोक और अब तक की
   कथा — ज़ोर से पढ़ें और हर एक का विराम-रूप (पदपाठ) दें।"
3. en "Say, according to Pāṇini (1.4.109 परः सन्निकर्षः संहिता, 1.4.110 विरामोऽवसानम्) and to the
   Vedic tradition, what संहिता, अवसानम् and पदपाठः are, and show with one example that printed
   texts vary in how they divide words." · hi "पाणिनि (1.4.109 परः सन्निकर्षः संहिता, 1.4.110
   विरामोऽवसानम्) और वैदिक परम्परा के अनुसार बताएँ कि संहिता, अवसान और पदपाठ क्या हैं, और एक उदाहरण
   से दिखाएँ कि छपे ग्रन्थ शब्दों को अलग-अलग ढंग से बाँटते हैं।"
4. en "Name, without applying, the four changes inside words you have seen: the ण of रामेण, the
   ष of रामेषु and करोषि, the guṇa inside गुरवे, and भवति = भो + अति." · hi "शब्दों के भीतर देखे
   चार बदलावों के नाम बताएँ (लागू करना नहीं): रामेण का ण, रामेषु और करोषि का ष, गुरवे के भीतर गुण,
   और भवति = भो + अति।"

**The one grammar point.** The reverse procedure, from joined text back to words (row 0.13;
table 0.D). From this lesson on, every taught text in Volume 3 is printed joined with its pause
form beneath (row 0.2c).

**Content.** (1) The method (row 0.13, learner text in full). (2) The reverse table (0.D). (3)
**Splitting can be ambiguous** (FACT): the two owned examples of row 0.13 (मूषक आगच्छति; छात्रा
गच्छन्ति / छात्रा गच्छति), and one inference the learner can make: in joined text an unjoined
फले अपि can only be the dual, since a locative फले would have joined (फलेऽपि). (4) TRADITION
(row 0.16): saṃhitā and padapāṭha; Śākalya; the Nirukta's report of a disputed split. (5) The
sūtras 1.4.109, 1.4.110 (row 0.15). (6) The printing convention (STYLE_GUIDE §3.1) taught as a
reading aid: a space follows a vowel, ं or ः; a word that ends in a consonant is written into the
next; with "editions vary" (row 0.20). (7) Internal sandhi named and parked (row 0.14; IR-021 in
the open). **Cells drilled: 0 new** (the three maps run backwards; row 0.22). **Paradigm ledger
(§15 end):** the three maps ✓ as row 0.17, run in both directions; inner-word sandhi ○ (named;
v4.c02).

**Headwords** (all ledger-new; none in `ledger-all.tsv`):

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status |
|---|---|---|---|---|---|---|
| पदम् | padam | /pɐd̪ɐm/ | word (an inflected word); step, foot | पद, शब्द; कदम | n. a-stem | ledger-new — Apte s.v. पदम् (sense 1 "A foot", later senses "a step", "a word" — Pass C quotes the "word" sense; MW s.v. pada "a word or an inflected word or the stem of a noun in the middle cases and before some Taddhitas"); the course's sense: "a word as it stands in a sentence" (1.4.14 सुप्तिङन्तं पदम्, c01.l05) |
| वाक्यम् | vākyam | /ʋɑːkjɐm/ | sentence; speech, words | वाक्य | n. a-stem | ledger-new — Apte s.v. वाक्यम् "Speech, words, a sentence, saying" |
| सन्धिः | sandhiḥ | /sɐn̪d̪ʱih/ | joining, union; (in grammar) sandhi | सन्धि, जोड़ | m. i-stem | ledger-new — Apte s.v. संधिः "Union, junction, combination, connection"; MW s.v. saṃdhi; the technical sense is the GLOSSARY row सन्धि (row 0.25); declined like अग्निः (c02.l03) |
| अवसानम् | avasānam | /ɐʋɐsɑːn̪ɐm/ | stopping, end; (in grammar) the pause | अन्त, विराम | n. a-stem | ledger-new — Apte s.v. अवसानम् "Stopping. Conclusion, termination"; 1.4.110 |
| संहिता | saṃhitā | /sɐ̃ɦit̪ɑː/ | union, joining; joined text; a collection (of hymns) | संहिता | f. ā-stem | ledger-new — Apte s.v. संहिता "Combination, union, conjunction. A collection, compilation"; 1.4.109; the anusvāra before ह: a nasalised vowel (STYLE_GUIDE §2.1) |

**Ledger line:** "5 ledger-new · 0 upgrades · ledger 455 → 460 · cells drilled: 0 new (the three
maps run backwards)." §14 note: these five are ordinary words with ordinary senses, usable in
sentences (वाक्यम् पठ; एकम् पदम्); their grammar senses are GLOSSARY terms (§7 item 3).

**The procedure, step by step (§8 and §15).** Row 0.13, printed in full; a worked example on the
benediction's last quarter, मा कश्चिद्दुःखभाग्भवेत्: (1) no stop inside; (2) one space, after मा
(a vowel): मा is a word; (3) the block कश्चिद्दुःखभाग्भवेत् has two conjunct seams, द्दु and ग्भ;
(4) द् + द could be त् + द (voicing) or द् + द; ग् + भ could be क् + भ or ग् + भ; (5) the words
the learner knows are कश्चित् (a display word of the owned benediction since v1.c06.l04; headword c05.l02) and दुःखम् (c03.l04)
with भाक् "having a share" (gloss), भवेत् (c03.l04): कश्चित् दुःखभाक् भवेत्; (6) re-join: the line
comes back. Then the same on सर्वे भद्राणि पश्यन्तु (no seams: every word ends in a vowel before a
consonant — the learner checks that nothing changed).

**Practice texts (all owned; each printed joined, pause form beneath, IAST, gloss):**

1. अहिंसा परमो धर्मः। (ahiṃsā paramo dharmaḥ.)
   अहिंसा परमः धर्मः। (ahiṃsā paramaḥ dharmaḥ.)
   "Non-harming is the highest dharma." — अहिंसा परम धर्म है। (v2.c06.l03)
2. सत्यमेव जयते। (satyam eva jayate.)
   सत्यम् एव जयते। (satyam eva jayate.)
   "Truth alone prevails." — सत्य की ही जय होती है। (Muṇḍaka 3.1.6; v1.c06.l04)
3. न कोऽपि लघुः। (na ko 'pi laghuḥ.)
   न कः अपि लघुः। (na kaḥ api laghuḥ.)
   "No one is small." — कोई भी छोटा नहीं। (v2.c06.l02)
4. सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥ (sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ. sarve bhadrāṇi paśyantu mā kaścid duḥkhabhāg bhavet.)
   सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चित् दुःखभाक् भवेत्॥ (sarve bhavantu sukhinaḥ sarve santu nirāmayāḥ. sarve bhadrāṇi paśyantu mā kaścit duḥkhabhāk bhavet.)
   "May all be happy, may all be free from illness; may all see what is good; may no one have a share in sorrow." (the benediction as v1.c06.l04 gives it; its locus line as printed there) — the Hindi as v1.c06.l04 prints it.
5. उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः। न हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥ — "no seams": every word ends in a vowel before a consonant, or stands before a daṇḍa (Hit prastāvikā 36; v2.c06.l03); the learner proves it by the method; only the compound मनोरथैः has an inner seam (मनस्-रथैः, l02).

**Model sentences (§13; joined → pause; joined line + IAST, pause line + IAST, gloss):**
1. स जलं पिबति। (sa jalaṃ pibati.) — सः जलम् पिबति। (saḥ jalam pibati.) "He drinks the water." — वह पानी पीता है।
2. घटेऽल्पं जलमस्ति। (ghaṭe 'lpaṃ jalam asti.) — घटे अल्पम् जलम् अस्ति। (ghaṭe alpam jalam asti.) "There is a little water in the pot." — घड़े में थोड़ा पानी है।
3. कपोता जाले पतन्ति। (kapotā jāle patanti.) — कपोताः जाले पतन्ति। (kapotāḥ jāle patanti.) "The doves fly down onto the net." — कबूतर जाल पर उतरते हैं।
4. मूषकस्तस्योपरि धावति। (mūṣakas tasyopari dhāvati.) — मूषकः तस्य उपरि धावति। (mūṣakaḥ tasya upari dhāvati.) "The mouse runs over him." — चूहा उसके ऊपर दौड़ता है।
5. मूषक आगच्छति। (mūṣaka āgacchati.) — मूषकः आगच्छति। (mūṣakaḥ āgacchati.) "The mouse comes." — चूहा आता है। (the ambiguity: मूषकः or मूषके? the sense decides: with मूषके no one is named who comes)
6. छात्रा गच्छन्ति। (chātrā gacchanti.) — छात्राः गच्छन्ति। (chātrāḥ gacchanti.) "The students go." — छात्र जाते हैं। · beside it छात्रा गच्छति। (chātrā gacchati.) — छात्रा गच्छति। "The (girl) student goes." — छात्रा जाती है।

The plan's four are 1–4 (verified: every seam taught); 5–6 are the ambiguity examples.

**§16 Conversation** (Sītā and Rāma read a joined line on the classroom board; 11 turns; each
turn printed joined, its pause form beneath, then IAST and gloss as row 0.2c):

1. सीता — अत्र किमस्ति? (atra kim asti?) — अत्र किम् अस्ति? (atra kim asti?) "What is here?"
2. रामः — एकं वाक्यम्। "न कोऽपि लघुः" इति। (ekaṃ vākyam. "na ko 'pi laghuḥ" iti.) — एकम् वाक्यम्। "न कः अपि लघुः" इति। (ekam vākyam. "na kaḥ api laghuḥ" iti.) "A sentence: 'No one is small.'"
3. सीता — कति पदानि? (kati padāni?) — कति पदानि? "How many words?"
4. रामः — चत्वारि — न, कः, अपि, लघुः। (catvāri — na, kaḥ, api, laghuḥ.) — the same (no seams) "Four — न, कः, अपि, लघुः."
5. सीता — कोऽपि — सन्धिः कुत्र? (ko 'pi — sandhiḥ kutra?) — कः अपि — सन्धिः कुत्र? (kaḥ api — sandhiḥ kutra?) "कोऽपि — where is the join?"
6. रामः — कः अपि। ऽ — अत्राकार आसीत्। (kaḥ api. ' — atrākāra āsīt.) — कः अपि। ऽ — अत्र अकारः आसीत्। (kaḥ api. ' — atra akāraḥ āsīt.) "कः अपि. ऽ — here there was an अ."
7. सीता — सत्यम्! अहमप्यवगच्छामि। (satyam! aham apy avagacchāmi.) — सत्यम्! अहम् अपि अवगच्छामि। (satyam! aham api avagacchāmi.) "True! I understand too."
8. रामः — इदानीं त्वं पठ — "सत्यमेव जयते"। (idānīṃ tvaṃ paṭha — "satyam eva jayate".) — इदानीम् त्वम् पठ — "सत्यम् एव जयते"। (idānīm tvam paṭha — "satyam eva jayate".) "Now you read: 'Truth alone prevails.'"
9. सीता — सत्यमेव जयते — त्रीणि पदानि! (satyam eva jayate — trīṇi padāni!) — सत्यम् एव जयते — त्रीणि पदानि! "Truth alone prevails — three words!"
10. रामः — भद्रम्! त्वं सम्यक्पठसि। (bhadram! tvaṃ samyak paṭhasi.) — भद्रम्! त्वम् सम्यक् पठसि। (bhadram! tvam samyak paṭhasi.) "Good! You read properly."
11. सीता — धन्यवादः, राम। पुनर्मिलामः! (dhanyavādaḥ, rāma. punar milāmaḥ!) — धन्यवादः, राम। पुनः मिलामः! (dhanyavādaḥ, rāma. punaḥ milāmaḥ!) "Thank you, Rāma. We meet again!"

(अकारः "the sound अ": the -कार naming of v1.c02.l01, इकारः ईकारश्च; चत्वारि n. of चतुर्, c02.l01;
त्रीणि n. of त्रि, c02.l01. Turn 4's commas keep the four words apart, row 0.3.)

**§17 Story — serial episode 4, part 4: "The whole tale so far, joined"** — label: "our
retelling, after Hitopadeśa 1 (Mitralābha) — the past-tense retelling of v3.c03.l03, printed
joined, its pause form beneath". The text is v3.c03.l03 §17, copied from disk; each line: the
joined line + IAST, the pause form + IAST, the source lesson's English and Hindi.

1. पुरा नद्यास्तीर एको विशालो वृक्ष आसीत्। (purā nadyās tīra eko viśālo vṛkṣa āsīt.)
   पुरा नद्याः तीरे एकः विशालः वृक्षः आसीत्। (purā nadyāḥ tīre ekaḥ viśālaḥ vṛkṣaḥ āsīt.)
   "Long ago on a river's bank there was a great tree." — बहुत पहले एक नदी के किनारे एक विशाल पेड़ था।
2. तस्मिन्वृक्षे बहवः कपोता न्यवसन्। (tasmin vṛkṣe bahavaḥ kapotā nyavasan.)
   तस्मिन् वृक्षे बहवः कपोताः न्यवसन्। (tasmin vṛkṣe bahavaḥ kapotāḥ nyavasan.)
   "In that tree lived many doves." — उस पेड़ पर बहुत-से कबूतर रहते थे।
3. एकदैको व्याधस्तत्रागच्छत्। (ekadaiko vyādhas tatrāgacchat.)
   एकदा एकः व्याधः तत्र आगच्छत्। (ekadā ekaḥ vyādhaḥ tatra āgacchat.)
   "One day a hunter came there." — एक दिन एक शिकारी वहाँ आया।
4. स तण्डुलाञ्जालं चाक्षिपत्। (sa taṇḍulāñ jālaṃ cākṣipat.)
   सः तण्डुलान् जालम् च अक्षिपत्। (saḥ taṇḍulān jālam ca akṣipat.)
   "He threw down grains and a net." — उसने चावल और जाल फेंके।
5. कपोतास्तण्डुलानपश्यन्, जाले चापतन्। (kapotās taṇḍulān apaśyan, jāle cāpatan.)
   कपोताः तण्डुलान् अपश्यन्, जाले च अपतन्। (kapotāḥ taṇḍulān apaśyan, jāle ca apatan.)
   "The doves saw the grains, and they flew down onto the net." — कबूतरों ने चावल देखे, और वे जाल पर उतर आए।
6. ते जाले बद्धा अभवन्। (te jāle baddhā abhavan.)
   ते जाले बद्धाः अभवन्। (te jāle baddhāḥ abhavan.)
   "They were caught in the net." — वे जाल में फँस गए।
7. अथ नृप उवाच — "वयं जालेन सहाकाशं गच्छामः।" (atha nṛpa uvāca — "vayaṃ jālena sahākāśaṃ gacchāmaḥ.")
   अथ नृपः उवाच — "वयम् जालेन सह आकाशम् गच्छामः।" (atha nṛpaḥ uvāca — "vayam jālena saha ākāśam gacchāmaḥ.")
   "Then the king said: 'We go up into the sky, net and all.'" — तब राजा ने कहा — "हम जाल के साथ आकाश में जाते हैं।"
8. कपोता जालेन सहाकाशमगच्छन्। व्याधोऽधावत्, जालं च नालभत। (kapotā jālena sahākāśam agacchan. vyādho 'dhāvat, jālaṃ ca nālabhata.)
   कपोताः जालेन सह आकाशम् अगच्छन्। व्याधः अधावत्, जालम् च न अलभत। (kapotāḥ jālena saha ākāśam agacchan. vyādhaḥ adhāvat, jālam ca na alabhata.)
   "The doves went up into the sky with the net. The hunter ran, and did not get the net." — कबूतर जाल के साथ आकाश में गए। शिकारी दौड़ा, पर उसे जाल नहीं मिला।
9. कपोता मूषकस्य विवरमागच्छन्, तत्र चोपाविशन्। (kapotā mūṣakasya vivaram āgacchan, tatra copāviśan.)
   कपोताः मूषकस्य विवरम् आगच्छन्, तत्र च उपाविशन्। (kapotāḥ mūṣakasya vivaram āgacchan, tatra ca upāviśan.)
   "The doves came to the mouse's hole and sat down there." — कबूतर चूहे के बिल पर आए और वहाँ बैठ गए।
10. मूषकस्तानपश्यत्, विवरं च प्राविशत्। (mūṣakas tān apaśyat, vivaraṃ ca prāviśat.)
    मूषकः तान् अपश्यत्, विवरम् च प्राविशत्। (mūṣakaḥ tān apaśyat, vivaram ca prāviśat.)
    "The mouse saw them, and went into his hole." — चूहे ने उन्हें देखा, और बिल में घुस गया।
11. नृपोऽब्रवीत् — "हे मूषक! अहं तव मित्रम्, कपोतानां नृपः।" (nṛpo 'bravīt — "he mūṣaka! ahaṃ tava mitram, kapotānāṃ nṛpaḥ.")
    नृपः अब्रवीत् — "हे मूषक! अहम् तव मित्रम्, कपोतानाम् नृपः।" (nṛpaḥ abravīt — "he mūṣaka! aham tava mitram, kapotānām nṛpaḥ.")
    "The king said: 'Mouse! I am your friend, the king of the doves.'" — राजा बोला — "हे चूहे! मैं तुम्हारा मित्र हूँ, कबूतरों का राजा।"
12. ततो मूषको विवरान्निरगच्छत्। (tato mūṣako vivarān niragacchat.)
    ततः मूषकः विवरात् निरगच्छत्। (tataḥ mūṣakaḥ vivarāt niragacchat.)
    "Then the mouse came out of the hole." — तब चूहा बिल से बाहर निकला।
13. स जालं कपोतांश्चापश्यत्, आह च — "हे मित्र! किमेतत्?" (sa jālaṃ kapotāṃś cāpaśyat, āha ca — "he mitra! kim etat?")
    सः जालम् कपोतान् च अपश्यत्, आह च — "हे मित्र! किम् एतत्?" (saḥ jālam kapotān ca apaśyat, āha ca — "he mitra! kim etat?")
    "He saw the net and the doves, and said: 'Friend! What is this?'" — उसने जाल और कबूतरों को देखा, और कहा — "हे मित्र! यह क्या है?"

Seams marked ◐ (read, never required): line 4 तण्डुलाञ्जालम् (न् + ज); line 12 विवरान्निरगच्छत्
(stop + nasal); line 13 कपोतांश्च (न् + च). Line 11 keeps मित्रम्, before the comma (row 0.3). The
§17 task (Ex 6): read it aloud joined; for any three lines, cover the pause form, write it, then
uncover and check; name each seam's lesson. **Teacher Notes (departures):** as v3.c03.l03 states
them (Chapter 3 fact base row 0.26); none added.

**"Editions vary" (§15 or §8; row 0.20):** the three examples, the GRETIL lines labelled "printed
as the e-text prints it", every Chapter 6 word glossed.

**Internal sandhi named and parked (§15; row 0.14):** four lines, each labelled "inside a word —
named here, taught in Volume 4 (v4.c02)"; IR-021 in the open: "भवति, the course's first verb,
is भो + अति by l01's अयादि; the ओ is a guṇa substitute of the root's ऊ — not an 'insertion', as
the 1.x book said."

**§3 Station 0 (runs S0-aj and S0-ai, verbatim, row 0.24).** About 8 minutes. Item 1 (S0-aj, +1
day from l03): the vowel/consonant sort; key row 0.G. Item 2 (S0-ai, +1 week from l02): the -इः/
-उः column; key row 0.G. **Prompts:** (1) v1.c06.l04 — recite the benediction, then say which of
its words are joined; (2) v2.c06.l03 — the three sayings: which has a seam? (3) v3.c02.l01 — why
रामेषु but बालिकासु? (answer today: the ṣ law, named).

**§20 Bookings:** S0-al (+1 day, run by l05) and S0-am (+1 week, run by v3.c05.l01), verbatim
(row 0.24). Revision box: the six steps; the reverse table (0.D); the two ambiguity examples;
संहिता, अवसानम्, पदपाठः with the two sūtras; "editions vary"; the four inner changes named;
ledger 460 (Chapter 4's exit), cells drilled 0 new.

**§9–§11 (connected speech; row 0.27):** the benediction read joined, in two breath-groups (one
per half-line), with no break at मा कश्चिद्दुःखभाग्भवेत् /mɑː kɐɕt͡ɕid̪d̪uhkʰɐbʱɑːgbʱɐʋeːt̪/; then the
same in pause form, each word separate. The two readings take different times: the learner times
both. A space in joined print is a word boundary, not a breath (स पिबति has a space and no pause).
Dictation **joined → pause** (new direction): स जलं पिबति · कपोता जाले पतन्ति · तस्मिन्वृक्षे
कपोताः सन्ति · मूषकस्तस्योपरि धावति — written as heard (joined), then in pause form. §11: the द्/ग्
voiced closures inside the block (द्दु, ग्भ) are held, not released into a vowel.

**§12 Common mistakes:** (1) Guessing a split without the candidate list: *मूषके आगच्छति chosen
for मूषक आगच्छति — fix: write मूषकः / मूषके, then let the sense decide (step 5: the 3sg verb fits both; only मूषकः names who comes). (2) Taking a
plural for a singular: छात्रा गच्छन्ति read as "the girl student goes" — fix: -आ before a voiced
sound can be -आः; the plural verb decides. (3) Restoring the wrong vowel after ऽ: *को अपि →
"को" as a word — fix: ओऽ ← -अः + अ (कः अपि); write the ः back. (4) Splitting inside a word:
*रामे + ण, *गुर + अवे — fix: the inner changes are named, not split; a pause form is a whole word
(step 5: both halves must be real words). (5) Treating every space as a pause: reading स जलं पिबति
as three breaths — fix: a space is a boundary, not a breath (row 0.27). (6) Hindi-speaker habit:
reading the joined block as if Hindi had split it (Hindi prints words apart), and dropping the
final अ of the block's last word (पिबति → *pibat) — fix: one breath-group, every अ sounded.

**§18 Exercises (keys; every exercise placed):**

- *Ex 1 (obj. 1; in class): the method on eight lines* (8). a. सोऽपि जलमिच्छति। b. गुरुर्वदति,
  छात्रास्तु पठन्ति। c. बालिका अत्र सन्ति। d. वृक्ष एकः कपोतस्तिष्ठति। e. तदेव सत्यम्। f. अहं
  तत्रैवागच्छम्। g. नृपश्चिन्तयति। h. जगदीशः सर्वं पश्यति। — **Key:** a. सः अपि जलम् इच्छति। b.
  गुरुः वदति, छात्राः तु पठन्ति। c. बालिकाः अत्र सन्ति। (a singular बालिका + अत्र would have fused:
  बालिकात्र; the plural verb agrees) d. वृक्षे एकः कपोतः तिष्ठति। (candidates वृक्षः / वृक्षे; "a tree
  a dove stands" makes no sentence: वृक्षे) e. तत् एव सत्यम्। f. अहम् तत्र एव आगच्छम्। g. नृपः
  चिन्तयति। h. जगत्-ईशः सर्वम् पश्यति। Scoring: 1 per line; the candidate list for c and d earns the
  mark even if the choice is wrong (plan main risk: reward the list).
- *Ex 2 (obj. 1; homework): candidates only* (6). For each joined shape list every pause-form
  pair that could give it, then choose: तत्रागच्छत् · नेति · परमो · राम आगच्छति · पितरावपि ·
  गुरुर्वदति — **Key:** तत्र + आगच्छत् (also तत्र + अगच्छत्, तत्रा + …: choose by the ledger: आगच्छत्
  "came", or अगच्छत् "went" — both real: the sentence decides; accept either with a reason) · न + इति
  (न + ईति: not a word) · परमः (before a voiced consonant) · रामः / रामे + आगच्छति (the verb's doer:
  रामः) · पितरौ + अपि · गुरुः + वदति.
- *Ex 3 (obj. 2; in class): the owned lines* (5). Read the practice texts 1–5 aloud joined, then
  give each pause form from memory; for text 5, show that it has no seam — **Key:** the practice
  texts above.
- *Ex 4 (obj. 3; homework): the tradition and the editions* (6). a. What does 1.4.109 call
  saṃhitā? b. What does 1.4.110 call avasāna? c. What is a padapāṭha? d. Whom does the tradition
  hold to be the arranger of the Ṛgveda's padapāṭha? e. Volume 1 printed मा कश्चिद् दुःखभाग् भवेत्:
  is that wrong? f. The Hitopadeśa e-text prints पात्रत्वात् धनम्: which shape would full sandhi give?
  (a) पात्रत्वाद्धनम् (b) पात्रत्वान्धनम् — **Key:** a. the closest contact of sounds (joined text)
  b. stopping, the pause c. the word-by-word recitation of a Vedic text, each word in its own form,
  without sandhi d. Śākalya (according to the tradition) e. no — the same sandhi, a different word
  division; editions vary f. (a). (a–d are TRADITION items, asked "according to …".)
- *Ex 5 (obj. 4; homework): name the inner change* (6). रामेण / देवेन · रामेषु / बालिकासु ·
  करोषि · गुरवे · भवति · हरीणाम् — **Key:** ṇ after र (and none in देवेन: no trigger) · ṣ after ए
  (none after आ) · ṣ after ओ (the same law) · guṇa of उ, then अयादि (गुरो + ए) · भो + अति (अयादि; the
  ओ a guṇa substitute) · ṇ after र, with ई between (a vowel does not block).
- *Ex 6 (obj. 2; homework, recorded — production):* §17 read aloud joined at natural pace,
  recorded; then three lines of your choice written in pause form from the joined line alone, each
  seam named with its lesson (the key is §17's pause lines).
- *Ex 7 (obj. 1–2; homework — production): your own join of the crow story.* Copy the Volume 2
  crow story (v2.c06.l01 §17, ten lines and the moral, in pause form) and join every seam by the
  rules of lessons 1–3. Keep your text: it is the "own product" of the sandhi exam's task C, whose
  printed text is its key (compare after the sitting, l05 §21).
- *Dictation (obj. 2; in class, §9):* joined → pause, four lines; key §9.

**§19 Quiz (10):**
1. कोऽपि split: (a) को अपि (b) कः अपि (c) कः पि (d) क अपि — **b** · FACT.
2. मूषक आगच्छति: which pause forms could give मूषक? (a) मूषकः only (b) मूषकः or मूषके (c) मूषकम् (d) मूषकात् — **b** · FACT.
3. छात्रा गच्छन्ति split: (a) छात्रा गच्छन्ति (b) छात्राः गच्छन्ति (c) छात्रे गच्छन्ति (d) छात्रः गच्छन्ति — **b** · FACT.
4. In joined text, an unjoined फले अपि is: (a) a locative singular (b) a dual (c) a mistake (d) a vocative — **b** · FACT.
5. स तण्डुलाञ्जालं चाक्षिपत् — the first word in pause form: (a) स (b) सः (c) सा (d) से — **b** · FACT.
6. According to Pāṇini (1.4.109), संहिता is: (a) a pause (b) the closest contact of sounds (c) a word (d) a sentence — **b** · TRADITION.
7. According to Pāṇini (1.4.110), the pause is called: (a) संहिता (b) अवसानम् (c) सन्धिः (d) पदम् — **b** · TRADITION.
8. According to the Vedic tradition, a padapāṭha gives a text: (a) joined (b) word by word, each word in its own form (c) in prose order (d) with a translation — **b** · TRADITION.
9. The ण of रामेण is: (a) a sandhi between words (b) a change inside the word, named here, taught in Volume 4 (c) a spelling mistake (d) the anusvāra — **b** · FACT.
10. भवति is: (a) भव + ति, nothing joined (b) भो + अति, by अयादि (c) भू + इति (d) भ + अवति — **b** · FACT (IR-021).

**§4 (TRADITION; row 0.16):** saṃhitā and padapāṭha [REF:monierwilliams1899 s.v. padapāṭha];
Śākalya "held to be the arranger" of the Ṛgveda's padapāṭha [REF:monierwilliams1899 s.v.
śākalya]; the Nirukta's disputed split वायः → वा यः [REF:nirukta 6.28]; no date. The course's
pause form is "the same idea, applied to the course's own sentences". **§5 (FACT):** a reader of
joined text has to undo a process that loses information: one joined shape can come from more than
one pair (table 0.D); grammar and the word list remove the ambiguity, which is why a sentence, not
a single word, is the unit of splitting [REF:whitney1889 §126] (Whitney's own apostrophe convention
in transliteration exists because "the same result" can come from "two different initials"). **§21
(about 40 minutes):** Ex 2 (5) · Ex 4 (5) · Ex 5 (5) · Ex 6 recorded (8) · Ex 7 the crow join (12) ·
real-world task (5): find a printed Sanskrit line — on a sign, a certificate, a book cover —
copy it, and split it by the method
(the learner labels any word that is not owned "not mine yet"; no source claim is required for a
line the learner copies). **Payoff (§1/§8):** every joined line of Volumes 1–2 (the mottos, the
sayings, the benediction) can now be taken apart by the learner alone; the course's pause form is
the tradition's padapāṭha idea.

**Teacher Notes points:** the Kāśikā's half-mātrā gloss of 1.4.109 (row 0.15); 6.1.73 छे च (the
title's च्छ); the Nirukta passage (row 0.16) and the Pass C check of its Ṛgveda locus; the ṇ and ṣ
sūtras (8.4.1–2, 8.3.59; row 0.14); Whitney §16a on the avagraha in manuscripts and print; the
exam's task C text is not read in class (row 0.24 exam guard). **Timing (45 min):** Station 0,
two items (8) → hook: the benediction on the board, joined (3) → the six steps, worked on its last
quarter (6) → the reverse table and the two ambiguity examples (6) → TRADITION: saṃhitā and
padapāṭha, the two sūtras (4) → practice texts 1–5 in pairs (Ex 3, 6) → §17 read joined, three
lines covered and split (5) → the four inner changes named (3) → "editions vary" (2) → the
bookings, homework (2).

---

## 5. L5 — सन्धिपरीक्षा: The Sandhi Exam (review)

**Front matter.** id `v3.c04.l05` · file `lesson-05-sandhi-exam.md` · title sa सन्धिपरीक्षा ·
sa_iast *sandhiparīkṣā* · en "The Sandhi Exam" · hi "सन्धि-परीक्षा — अध्याय 4 की परीक्षा" ·
lesson_type: review · cefr A2 · duration_minutes 45 (the sitting alone; Station 0, about 8
minutes, runs before it and outside its 45, so the room time is about 53 minutes) ·
self_study_minutes **40** (15 before the sitting, 25 after it; §21) · prerequisites [v3.c04.l04] ·
review_of [v3.c04.l01, v3.c04.l02, v3.c04.l03, v3.c04.l04, v3.c03.l05, v3.c02.l05, v2.c06.l01] ·
vocabulary_count **0** · tags [review, assessment, sandhi, splitting, joining, reading-aloud,
dictation, explanation, thread-verses, spaced-review] · media (planned): images
`v3c04l05-three-maps-page.svg`; audio `v3c04l05-dictation.mp3`, `v3c04l05-crow-joined.mp3` (played
only after the sitting); worksheets `v3c04l05-exam-booklet.pdf`; quizzes
`v3c04l05-chapter-quiz.md`, `v3c04l05-chapter-quiz-key.md`.

**Objectives.**
1. en "Split sixteen joined phrases, naming the rule at each seam, and join sixteen pause-form
   pairs of mixed types, against the clock." · hi "सोलह जुड़े पद-समूहों को अलग करें और हर जोड़ का
   नियम बताएँ, और मिले-जुले प्रकार के सोलह विराम-रूप युग्मों को समय के भीतर जोड़ें।"
2. en "Read the Volume 2 crow story aloud, joined, at natural pace, with no pause at any seam." ·
   hi "दूसरे खण्ड की कौए की कथा जुड़े रूप में, स्वाभाविक गति से, किसी जोड़ पर रुके बिना ज़ोर से पढ़ें।"
3. en "Write five sentences from dictation, joined, then give their pause form." · hi "श्रुतलेख में
   पाँच वाक्य जुड़े रूप में लिखें, फिर उनका विराम-रूप दें।"
4. en "Explain in three lines each why नमस्ते, विद्यालयः, परोपकारः and न कोऽपि लघुः look as they do,
   and name, having assembled them on one page (§15, unscored), the three sandhi maps and the
   tradition's names संहिता and पदपाठः." · hi "तीन-तीन पंक्तियों में समझाएँ कि नमस्ते, विद्यालयः,
   परोपकारः और न कोऽपि लघुः ऐसे क्यों दिखते हैं, और तीनों सन्धि-मानचित्रों तथा परम्परा के नाम संहिता और
   पदपाठ बताएँ — उन्हें एक पृष्ठ पर जोड़ लेने के बाद (§15, बिना अंक)।"

**Assembly (§15, unscored):** (1) the three maps on one page (tables 0.A, 0.B, 0.C), with the
reverse table (0.D) on its back; (2) the six steps of पदच्छेदः; (3) the honest lines: the comma
policy and the stops (row 0.3), "editions vary" (row 0.20), the optional variants (row 0.11);
(4) **paradigm ledger audit (end of Chapter 4):** T1–T7 and the cards as at v3.c03.l05; the three
sandhi maps ✓ in the listed rows (row 0.17), ◐ rows recognised; internal sandhi ○ (named); (5)
**the promises kept in this chapter** (table 0.F, one line each, with the lesson that redeemed it);
tracker row 5 closed: "Sandhi as a system (नास्ति, जगच्च, कोऽपि, परमो धर्मः) — redeemed v3.c04".
Ledger stays **460**; cells drilled: 0 new (50 reviewed: 14 + 26 + 10).

**§17 — the thread verses, c04 column of the overlay** (plan §1.5; the c01–c03 columns stand):
अहिंसा परमो धर्मः — परमो = परमः before a voiced consonant (l02). सत्यमेव जयते — सत्यम् + एव (l03).
सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥ — कश्चिद्
= कश्चित् before a voiced sound, दुःखभाग् = दुःखभाक् before भ (l03); कश्चित् itself is c05.l02's
headword, निरामयाः c05's bahuvrīhi. उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः। न हि सुप्तस्य सिंहस्य
प्रविशन्ति मुखे मृगाः॥ — "no seams" (l04 practice text 5); मनोरथैः = मनस्-रथैः (l02). Each verse
printed joined with its pause form beneath (row 0.2c), its locus as the earlier overlays give it.

**§16 Conversation** (two students check each other's homework before the exam — joined, pause
form beneath; 8 turns; a model for reading aloud with no pause at the seams, and **none of the
exam's items**):

1. अर्जुनः — सीते, त्वमपि सन्धिं पठसि? (sīte, tvam api sandhiṃ paṭhasi?) — सीते, त्वम् अपि सन्धिम् पठसि? "Sītā, are you studying sandhi too?"
2. सीता — आम्। अहं प्रातः पठामि। (ām. ahaṃ prātaḥ paṭhāmi.) — आम्। अहम् प्रातः पठामि। "Yes. I study in the morning."
3. अर्जुनः — अहं शनैः शनैः पठामि, त्वं तु शीघ्रम्! (ahaṃ śanaiḥ śanaiḥ paṭhāmi, tvaṃ tu śīghram!) — अहम् शनैः शनैः पठामि, त्वम् तु शीघ्रम्! "I study slowly, slowly — but you, quickly!"
4. सीता — शीघ्रं न। सम्यगेव पठामि। (śīghraṃ na. samyag eva paṭhāmi.) — शीघ्रम् न। सम्यक् एव पठामि। "Not quickly. Just properly."
5. अर्जुनः — तत्सत्यम्। गुरुरप्यत्रैवागच्छति। (tat satyam. gurur apy atraivāgacchati.) — तत् सत्यम्। गुरुः अपि अत्र एव आगच्छति। "That is true. And here comes the teacher, right here."
6. सीता — नमस्ते, गुरो! (namaste, guro!) — the same. "Hello, teacher!"
7. गुरुः — नमस्ते! आगच्छत, उपविशत। अद्य सन्धिः! (namaste! āgacchata, upaviśata. adya sandhiḥ!) — the same (no seam: the commas and the daṇḍa stop them). "Hello! Come in, sit down. Today: sandhi!"
8. अर्जुनः सीता च — तथास्तु! (tathāstu!) — तथा अस्तु! "So be it!"

(Turn 2 keeps प्रातः before प (the r-final before a voiceless stop): प्रातरेव is task B item 16 and task D line 4, so §16 avoids it. Turn 5 is one block with four seams, l01 and l02; the drafter may set it as the §9 model. सन्धिम्
is the accusative of सन्धिः, an i-stem, c02.l03. उपविशत, आगच्छत: 2pl imperatives, c03.l04.)

**§3 Station 0 (runs S0-al and S0-ak, verbatim, row 0.24).** About 8 minutes, before the sitting
and outside its 45. Item 1 (S0-al, +1 day from l04): the benediction split from memory; key row
0.G. Item 2 (S0-ak, +1 week from l03): the six owned consonant seams; key row 0.G. **Stations
(1 minute, the volume spiral; plan §4.0.5):** one prompt each from l01–l04 (name the rule of
सदैव; of पुनर्मिलामः; of जगच्च; give the pause form of तीर एकः), and the spiral's two items sit
inside task A (a case question, a verb form).

**§18 — the exam (one 45-minute sitting; 2 minutes of instructions, then the five tasks; the
booklet prints the tasks in this order). Nothing in tasks A–E repeats an item of S0-ak or S0-al,
and §13 prints none of these items.**

*Task A — split, with the rule's name* (16 items + 2 spiral questions; 10 min). Write the pause
form and name the rule (the vowel rules by name; the visarga and consonant seams by the change, or
by the sūtra where there is one).
1. हिमालयः 2. तत्रासीत् 3. नेति 4. चोपाविशन् 5. एकदैकः 6. अप्याह 7. वन आसीत् 8. घटेऽल्पम्
9. कस्त्वम् 10. क्रुद्धो भवति 11. बुद्धिरेव 12. स गच्छति 13. छात्रा गच्छन्ति 14. ग्रामाद्गच्छति —
*and: which case is ग्रामात्?* 15. अगच्छन्नपि — *and: which lakāra, person and number is
अगच्छन्?* 16. किं करोति.
**Key:** 1. हिम-आलयः · सवर्णदीर्घः 2. तत्र आसीत् · सवर्णदीर्घः 3. न इति · गुणः 4. च उपाविशन् · गुणः
5. एकदा एकः · वृद्धिः 6. अपि आह · यण् 7. वने आसीत् · अयादि (-ए before a vowel other than अ) 8.
घटे अल्पम् · पूर्वरूपम् 9. कः त्वम् · ः → स् before त (8.3.34) 10. क्रुद्धः भवति · -अः → ओ before a
voiced consonant 11. बुद्धिः एव · -इः → र् before a vowel 12. सः गच्छति · the ः of सः drops before
a consonant (6.1.132) 13. छात्राः गच्छन्ति · -आः → आ before a voiced sound 14. ग्रामात् गच्छति ·
final त् voiced before a voiced sound (8.2.39) — *पञ्चमी (ablative), "from the village"* 15.
अगच्छन् अपि · न् doubled after a short vowel — *लङ्, प्रथमः पुरुषः, बहुवचनम् ("they went")* 16.
किम् करोति · म् → ं before a consonant (8.3.23). Scoring: ½ for the pause form, ½ for the rule; 1
each for the two spiral questions: **18 marks, pass 12.** Item 7 accepts वनम्? **No** — वनम्
आसीत् would be joined वनमासीत्; only वने earns the mark (a candidate list with वने chosen earns it).

*Task B — join sixteen seams of mixed types* (8 min). 1. सदा अपि 2. तव उपरि 3. मम ओष्ठौ 4. नदी अस्ति
5. बालकौ आगच्छतः 6. गृहे अपि 7. द्वे फले अत्र 8. रामः च 9. सिंहः हसति 10. मूषकः आगच्छति 11. हरिः
अत्र 12. एषः बालकः 13. अहम् गच्छामि 14. वाक् अस्ति 15. तत् जलम् 16. प्रातः एव.
**Key:** 1. सदापि 2. तवोपरि 3. ममौष्ठौ 4. नद्यस्ति 5. बालकावागच्छतः 6. गृहेऽपि 7. द्वे फले अत्र (no
join) 8. रामश्च 9. सिंहो हसति 10. मूषक आगच्छति 11. हरिरत्र 12. एष बालकः 13. अहं गच्छामि
(अहङ्गच्छामि also correct) 14. वागस्ति 15. तज्जलम् 16. प्रातरेव. Scoring: 1 each; a correct join
with a wrong space (*मूषकआगच्छति, *एषबालकः; the closed gap *मूषकागच्छति is a wrong join and earns 0) earns ½. **16 marks, pass 11.**

*Task C — read aloud the Volume 2 crow story, joined* (7 min: 2 minutes' silent reading, then the
reading, recorded). The text is v2.c06.l01 §17 (ten lines and the moral, copied from disk) joined
at every seam by the rules of l01–l03 — the learner joined it in l04 Ex 7 ("first seen here as the
learner's own product"); the booklet prints the joined lines only (the lesson file prints each with
its pause form beneath, row 0.2c):

1. एकः काकोऽस्ति। (ekaḥ kāko 'sti.) — एकः काकः अस्ति।
2. स पिपासितोऽस्ति। (sa pipāsito 'sti.) — सः पिपासितः अस्ति।
3. स जलमिच्छति। (sa jalam icchati.) — सः जलम् इच्छति।
4. स एकं घटं पश्यति। (sa ekaṃ ghaṭaṃ paśyati.) — सः एकम् घटम् पश्यति।
5. घटेऽल्पं जलमस्ति। (ghaṭe 'lpaṃ jalam asti.) — घटे अल्पम् जलम् अस्ति।
6. स एकं पाषाणं घटे क्षिपति। (sa ekaṃ pāṣāṇaṃ ghaṭe kṣipati.) — सः एकम् पाषाणम् घटे क्षिपति।
7. स पुनः पुनः क्षिपति। (sa punaḥ punaḥ kṣipati.) — सः पुनः पुनः क्षिपति।
8. जलमुपर्यागच्छति। (jalam upary āgacchati.) — जलम् उपरि आगच्छति।
9. स जलं पिबति। (sa jalaṃ pibati.) — सः जलम् पिबति।
10. स सुखी भवति। (sa sukhī bhavati.) — सः सुखी भवति।
11. बुद्धिरेव बलम्। (buddhir eva balam.) — बुद्धिः एव बलम्।

**Checked line by line against the plan's §5.1 Text A1 (2026-11-10): identical in every word and
every seam.** Differences, all of layout: (1) v2.c06.l01 prints the moral as a separate bold block
("**The moral:**"), the plan runs it on as the last sentence; the exam prints it as line 11, as
the plan does; (2) the plan prints the whole story as one paragraph; the exam prints one line per
sentence; (3) the shipped V2 IAST of the moral is *buddhiḥ eva balam* (pause form) — the exam's
IAST is of the joined line. Seams, by lesson (plan §5.1, confirmed): -अः + अ → ओऽ (काकोऽस्ति,
पिपासितोऽस्ति; l02); सः before a consonant → स (6.1.132; l02); सः before ए → स (the -अः rule before a
vowel other than अ; l02); -म् + vowel joined, -म् + consonant → ं (l03); -ए + अ → एऽ (घटेऽल्पम्; l01);
इ + आ → या (उपर्यागच्छति; l01); -इः + vowel → -इर् (बुद्धिरेव; l02); -अः before क and प stays (एकः
काकः, पुनः पुनः; l02); पुनः is an r-final, before प it is ः (l02). **Untaught: none.** **Rubric
(10):** accuracy of the joined shapes as read (4: −1 per misread seam); no pause at any seam (3: −1
per pause); natural pace and every अ sounded (3). **Pass 6.**

*Task D — dictation, joined, then the pause form* (8 min). Five sentences, **played in this order,
1 → 5**, each twice at natural pace and once slowly; the learner writes each joined as heard, then,
when all five are written, its pause form beneath.
1. गुरुर्वदति, छात्रास्तु पठन्ति। — गुरुः वदति, छात्राः तु पठन्ति। "The teacher speaks, but the students read."
2. सोऽप्यत्रागच्छत्। — सः अपि अत्र आगच्छत्। "He too came here."
3. तत्रैव मूषकोऽपि निवसति। — तत्र एव मूषकः अपि निवसति। "The mouse too lives right there."
4. प्रातरेव बालका विद्यालयं गच्छन्ति। — प्रातः एव बालकाः विद्यालयम् गच्छन्ति। "The boys go to school early in the morning."
5. तस्मिन्वने सिंहः स्वपिति। — तस्मिन् वने सिंहः स्वपिति। "In that forest the lion sleeps."
**Key:** as above; विद्यालयङ्गच्छन्ति accepted in 4. Scoring: per sentence 1 for the joined line (all
seams right), 1 for the pause form: **10 marks, pass 6.**

*Task E — explain in three lines each* (10 min). नमस्ते · विद्यालयः · परोपकारः · न कोऽपि लघुः.
**Key** (one mark per line; any wording that states the fact):
- नमस्ते: (1) नमः + ते. (2) नमः "homage" with the dative ते "to you" (the short form of तुभ्यम्,
  taught in v3.c05.l01). (3) Before त the visarga becomes स् (8.3.34).
- विद्यालयः: (1) विद्या + आलयः. (2) "the abode of learning", one compound word (compounds:
  v3.c05.l04). (3) आ + आ → one long आ (सवर्णदीर्घः, 6.1.101).
- परोपकारः: (1) पर + उपकारः. (2) "help to others" (उपकारः "help", glossed). (3) अ + उ → ओ (गुणः,
  6.1.87).
- न कोऽपि लघुः: (1) न कः अपि लघुः. (2) "no one at all is small". (3) -अः before अ becomes ओ and the
  अ is lost; ऽ marks the place (the -अः column, lesson 2).
**12 marks, pass 8.** (Line (2) of नमस्ते is FACT; the SYMBOL reading is never asked for or marked.)

**Pass:** every task at its pass mark, and the §19 quiz at 7/10 (taken after the sitting). A
learner below the mark in one task re-takes that task after its remediation; below in two or more,
the chapter is repeated from the lowest lesson. **Remediation pointers:** A/B vowel items → l01 §15
and Ex 1, 3; visarga items → l02 §15 and Ex 1, 3; consonant items → l03 §15 and Ex 1, 3; the spiral
questions → v3.c01.l05 (cases), v3.c03.l05 (the 3sg/3pl wheel); C → l04 §9 and Ex 6; D → l04's six
steps and §9 dictation; E → l01 §8, l02 §8, l04 §8.

**§19 Quiz (10; after the sitting, closed book):**
1. सिंहस्योपरि split: (a) सिंहस्य उपरि (b) सिंहः उपरि (c) सिंहस्य ऊपरि (d) सिंहे उपरि — **a** · FACT.
2. तेऽपि split: (a) ते अपि (b) तः अपि (c) तेः पि (d) त अपि — **a** · FACT.
3. Which pair is joined wrongly? (a) सदा एव → सदैव (b) द्वे बालिके अत्र → द्वे बालिकेऽत्र (c) न अस्ति → नास्ति (d) इति अवदत् → इत्यवदत् — **b** · FACT.
4. गुरुः अपि joined: (a) गुरोऽपि (b) गुरुरपि (c) गुरु अपि (d) गुरुस्अपि — **b** · FACT.
5. सः अपि joined: (a) स अपि (b) सोऽपि (c) सापि (d) सरपि — **b** · FACT.
6. जलम् अस्ति joined: (a) जलं अस्ति (b) जलमस्ति (c) जलंस्ति (d) जलामस्ति — **b** · FACT.
7. तत् च joined: (a) तद्च (b) तच्च (c) तत्च (d) तश्च — **b** · FACT.
8. In joined print, a space stands after: (a) any word (b) a word ending in a vowel, ं or ः (c) a word ending in a consonant (d) only before a daṇḍa — **b** · FACT (STYLE_GUIDE §3.1, taught l04).
9. According to the Vedic tradition, a पदपाठः gives: (a) the joined text (b) each word in its own form (c) the meaning (d) the metre — **b** · TRADITION.
10. According to Pāṇini, which sūtra says that the ः of सः drops before a consonant? (a) 8.3.34 (b) 6.1.132 (c) 8.3.23 (d) 6.1.101 — **b** · TRADITION.

**§9–§11:** task C's reading rule (row 0.27); the dictation's order (1 → 5) stated in the booklet;
after the sitting the learner hears `v3c04l05-crow-joined.mp3` and compares (§21).

**§12 Common mistakes (the chapter's six):** (1) Joining a pragṛhya dual (द्वे फले अत्र → *द्वे
फलेऽत्र) — l01. (2) Closing the gap after -ए/-अः/-आः (*तागच्छन्ति, *रामागच्छति) — l01, l02. (3) सः
treated as an ordinary -अः (*सो गच्छति) — l02. (4) An r-final treated as -अः (*पुनो मिलामः) — l02.
(5) Double application of the anusvāra (*सत्यंएव) — l03. (6) Guessing a split without the
candidate list (मूषक → *मूषके in मूषक आगच्छति) — l04. Each row names its fix and its lesson.

**§4 (TRADITION and FACT):** the chapter's honest lines in one place — the course's joined print
follows one convention (STYLE_GUIDE §3.1) and printed texts vary (row 0.20); the tradition's own
recitation keeps both a joined and a word-by-word text (row 0.16, [REF:monierwilliams1899 s.v.
padapāṭha]); Hindi school grammar's names (0.E b, [REF:guru1952]). **§5 (FACT):** the three maps
are one process seen three ways — the end of a word adapts to the start of the next
[REF:whitney1889 §159]; the reverse procedure needs the grammar to choose (l04 §5). **§21 (about 40
minutes; 15 before the sitting, 25 after it):** *Before:* (1) the three maps drawn from memory and
checked against §15 (8, unscored); (2) l04's six steps read once and tried on the thread verses of
§17 (4); (3) §16 read aloud in both roles (3). *After:* (4) the §19 quiz, then its key; 7/10 or more
completes the exam (8); (5) the sitting checked against the task keys, task by task: for every lost
mark, write the lesson and section the key points to (8); (6) your l04 Ex 7 crow join compared with
task C's printed text, and `v3c04l05-crow-joined.mp3` heard once; if task C scored below full,
record it again and tick the rubric after you listen back (6); (7) real world (3): read नमस्ते,
विद्यालय and परोपकार to someone at home and tell them, in one Hindi line each, the two words inside.
Tomorrow, before anything else: the +1-day item of §20 (S0-an), which runs as Station 0 of
v3.c05.l01.

**§20 Bookings:** S0-an (+1 day, v3.c05.l01), S0-ao (+1 week, v3.c05.l02), and the standing
monthly line, verbatim (row 0.24). Revision box: the three maps and the reverse table; the six
steps; the fourteen sūtras of the chapter by number and gist (row 0.5, 0.9, 0.12, 0.15); the
promises kept; ledger 460 (Chapter 4's exit); cells drilled 0 new (50 reviewed).

**Teacher Notes points:** the exam guard (row 0.24); room time about 53 minutes; the booklet prints
task C joined only; the listening order of task D; the ◐ joins never asked; a learner who writes a
correct optional variant (row 0.11 a–d) earns the full mark; the volume spiral items (A14, A15).
**Timing (the sitting, 45 min):** instructions (2) → A (10) → B (8) → C (7) → D (8) → E (10).

---

## 6. Pass C checklist

- **Joined forms:** re-derive every joined shape in tables 0.A–0.C, the model sentences, the §16
  dialogues, the four §17 serial texts, the exam's tasks A–D and the Station 0 keys against the
  rule and the Whitney section named (§§126–138; §§169–179; §§159, 161–163, 202–210, 213); confirm
  every space of every joined line against STYLE_GUIDE §3.1 (written together after a consonant or
  where the seam fuses; a space after a vowel, ं or ः) and the stops of row 0.3.
- **Whitney sections re-opened for this note (2026-11-10)** and found to say what they are cited
  for: §16, §125, §126 (with a), §127, §129, §131, §132, §133 (with a, c), §134 (a, b), §135, §137,
  §138, §139, §145, §152, §158, §159, §161 (with a), §162, §163 (with a), §169 (a, b), §170, §171
  (b), §172 (with a), §173 (a), §174 (with b), §175 (a, c), §176 (a), §177, §178 (a, b), §179, §199,
  §202, §203 (with a), §206, §207, §208, §210, §213. **Cited but not re-opened:** §180 (s → ṣ),
  §189 and §191 (n → ṇ), §235 (the vowel grades): Pass C opens each before its locator prints; a
  locator that cannot be confirmed is cut, not guessed (plan §7.6).
- **Sūtras in learner text (14):** 6.1.101, 6.1.87, 6.1.88, 6.1.77, 6.1.78, 6.1.109, 1.1.11 (l01);
  8.3.34, 6.1.132 (l02); 8.3.23, 8.2.39, 8.4.40 (l03); 1.4.109, 1.4.110 (l04) — text checked in the
  data file and the Kāśikā (rows 0.5, 0.9, 0.12, 0.15); each learner wording fixed once in its row.
  **No other sūtra number in learner text** (6.1.72 only as an unnumbered heading, l01 §4). Teacher
  Notes numbers, all looked up in the data file 2026-11-10: 6.1.72, 6.1.73, 6.1.76, 6.1.113, 6.1.114,
  6.1.125, 6.3.111, 1.1.14, 1.1.15, 8.2.30, 8.2.66, 8.3.7, 8.3.14, 8.3.15, 8.3.17, 8.3.19, 8.3.22,
  8.3.32, 8.3.35, 8.3.36, 8.3.40, 8.3.59, 8.4.1, 8.4.2, 8.4.41, 8.4.45, 8.4.55, 8.4.56, 8.4.58, 8.4.59,
  8.4.60, 8.4.62, 8.4.63 (6.1.76 पदान्ताद्वा and 8.3.37 कुप्वोः ≍क≍पौ च are cited from memory in row
  0.11e and the l02 Teacher Notes: Pass C looks both up; cut either if the data file disagrees).
- **Headwords:** the 21 against Apte and MW (s.vv. in the tables); Apte entries not yet quoted:
  उदयः (the noun sense), अन्तः (*antar*), सम्यक्, तु (the particle), पदम् (the "word" sense) — quote
  each or cite MW alone; the upgrade सूर्यः; the homograph अन्तः / अन्त.
- **Ledger:** 439 → 445 → 451 → 455 → 460 → 460; vocabulary_count 7 · 6 · 4 · 5 · 0; re-grep each
  ledger-new against `ledger-all.tsv` and the v3.c03 §14s as shipped.
- **Station 0 (row 0.24):** S0-ac, S0-ad, S0-ae re-diffed against v3.c03.l04 §20 and v3.c03.l05 §20
  (done: identical); each new booking copied verbatim into both lessons; the keys of 0.G.
- **Serial (§17 of l01–l04):** every pause line re-diffed against the source §17 on disk (the source
  line numbers are in each split key); the c03.l03 retelling (l04) complete in 13 lines; the
  departures stated only as the source lessons state them.
- **Crow story (task C):** re-diffed against v2.c06.l01 §17 and the plan's §5.1 Text A1 (done:
  identical; differences of layout listed in §5).
- **Evidence tables and table 0.F:** re-find every "where printed" line by grep in the lesson named.
- **Hindi (0.E):** each row against Kachru 2006 (cited bare) and Guru 1952 (cited bare) — locate or
  reword; the schwa-deletion row's source (ohala1994 or none); the Hindi spellings of the GLOSSARY
  terms (§7 item 4) at Pass B.
- **TRADITION (row 0.16):** MW s.v. *padapāṭha* and *Śākalya* (quoted from the local file); the
  Nirukta 6.28 passage against Sarup's edition if one can be opened (else "text of the GRETIL
  e-text"); the Ṛgveda locus of *vane na vāyo* (RV 10.29.1?) before any locus prints; the new
  `nirukta` key's bibliographic data.
- **"Editions vary" (row 0.20):** `hitop_u.htm` l. 118 and `vispancu.htm` l. 5213 (done); v1.c06.l04
  line 224 (done).
- **Registers:** TRADITION items assessed only as "According to Pāṇini / the tradition / Hindi
  school grammar …"; the SYMBOL note on नमस्ते in l02 never assessed (l05 task E asks only the FACT);
  no HISTORY claim with a date anywhere in the chapter (the avagraha line of l01 §4 carries Whitney
  §16 and no date).
- **Walk the lessons in order:** no visarga seam joined before l02, no consonant seam before l03
  (including the writing-together of consonant-final words); no ◐ join required anywhere; no word
  outside the ledger, the Chapter 3 headwords, the lesson's own headwords and the labelled displays
  of row 0.18; no pronoun table cell beyond the owned (no मे/ते as words, no अस्मान्), no कश्चित् as a
  word outside the benediction, no compound analysed beyond the hyphenated inner seam.

All claims re-audited by Pass C; verdicts to ../verification-log.md.

## 7. Open items for review

1. **New REFERENCES key `nirukta`** (needed by l04 §4, row 0.16). Proposed entry: "<a
   id="nirukta"></a>**nirukta** — Yāska, *Nirukta*. Cited by adhyāya.khaṇḍa (e.g. 6.28). Ed.
   Lakshman Sarup, *The Nighaṇṭu and the Nirukta: The Oldest Indian Treatise on Etymology,
   Philology, and Semantics*, critically edited (text), Lahore: University of the Panjab, 1927;
   repr. Delhi: Motilal Banarsidass. E-text: GRETIL `niruktau.htm` ("based on the edition by
   Lakshman Sarup", input by Munoe Tokunaga)." The publisher and year are given from the e-text's
   header and general knowledge; Pass C confirms them before the key is added (decision 4). If the
   key is not added, the Nirukta sentence of row 0.16 does not print and l04 §4 keeps the MW lines
   alone.
2. **The comma policy** (row 0.3): no sandhi across a comma, and a word before a comma in its pause
   shape. STYLE_GUIDE §3.1 is silent; the plan's own c06 texts follow this practice. Recommendation:
   add one line to STYLE_GUIDE §3.1 ("a comma is treated as a pause") in the chapter's ship PR.
3. **Ledger words that are also grammar terms.** सन्धिः, संहिता, अवसानम्, पदम्, वाक्यम् are the
   plan's l04 headwords (ledger 455 → 460) and also GLOSSARY terms. The note keeps both: the ledger
   row counts the word with its ordinary sense (Apte), usable in sentences; the GLOSSARY row carries
   the technical sense and the Hindi term. If the editor holds that grammar terms never count, l04
   needs five other headwords (the plan's figures would change) — not recommended.
4. **GLOSSARY terms this chapter adds or updates** (grammar terms, not ledger words; Chapter 3
   decision 3), with the Hindi form the lessons must use: **स्वरसन्धिः** svarasandhiḥ "vowel sandhi"
   — स्वर-सन्धि · **विसर्गसन्धिः** visargasandhiḥ "visarga sandhi" — विसर्ग-सन्धि · **व्यञ्जनसन्धिः**
   vyañjanasandhiḥ "consonant sandhi" — व्यञ्जन-सन्धि (school books print व्यंजन संधि; the course
   writes the GLOSSARY spelling) · **सवर्णदीर्घः** savarṇadīrghaḥ "like vowels → one long" — दीर्घ
   (सवर्णदीर्घ) सन्धि · **गुणः** guṇaḥ "the guṇa grade (ए, ओ, अर्)" — गुण · **वृद्धिः** vṛddhiḥ "the vṛddhi
   grade (ऐ, औ, आर्)" — वृद्धि · **यण्** yaṇ "इ/उ/ऋ → य्/व्/र् before a vowel" — यण् · **अयादि** ayādi
   "ए/ऐ/ओ/औ → अय्/आय्/अव्/आव्" — अयादि · **पूर्वरूपम्** pūrvarūpam "the अ merged into a final ए/ओ
   (ऽ)" — पूर्वरूप · **प्रगृह्यम्** pragṛhyam "a vowel that never joins (dual -ई -ऊ -ए)" — प्रगृह्य ·
   **संहिता** saṃhitā "joined text (1.4.109); a collection of Vedic hymns" — संहिता · **पदपाठः**
   padapāṭhaḥ "the word-by-word (pause-form) text" — पदपाठ · **पदच्छेदः** padacchedaḥ "splitting a
   joined text into words" — पदच्छेद · **अवसानम्** avasānam "the pause (1.4.110)" — अवसान (विराम) ·
   **अन्तःसन्धिः** / **बाह्यसन्धिः**: **not added** (the course says "inside a word" / "between words";
   no Sanskrit term is printed). **Updates:** **सन्धि** (system: v3.c04; "joining — the regular
   sound-changes where words meet (system: v3.c04.l01–l04)") · **अवग्रह** (+ "used: v3.c04.l01–l02,
   तेऽपि, कोऽपि") · **अनुस्वार** (+ "for a word-final म् before a consonant, 8.3.23: v3.c04.l03; the
   class nasal optional before a stop") · **विसर्ग** (+ "the pause shape of a final स्/र्; its seams:
   v3.c04.l02") · **विराम-रूप** (+ "= the tradition's पदपाठ idea, v3.c04.l04; printed beneath joined
   text from v3.c04.l04").
5. **Whitney sections not re-opened** (§6, second bullet): §180, §189, §191, §235 — Pass C.
6. **The Ṛgveda locus of the Nirukta example** (row 0.16) — Pass C; learner text says only "a
   Ṛgveda verse" until confirmed.
7. **Kachru and Guru locators** (0.E) — cited bare, as REFERENCES requires until checked.
8. **Exam room time** about 53 minutes with Station 0 (as c01–c03); the front matter states 45 (the
   sitting). The booklet prints task C's text joined only, though the convention prints the pause
   form beneath every taught text: the exam tests reading the joined form. Recommendation: accept.
9. **हे before a vowel** (row 0.3): Pāṇini's pragṛhya rules (1.1.11–1.1.19) do not name हे; Whitney
   §138f lists *he* among the uncombinable interjections. The course leaves हे unjoined and drills
   nothing with हे before a vowel.
10. **The -आः and other-vowel columns promoted to ✓** (row 0.17, deviation 6) — for the editor's
    confirmation.

**Editor's decisions (2026-11-10, after the fact-base verification):**

1. **`nirukta` (item 1): the key is added to REFERENCES.md.** The editor re-read the passage in the
   GRETIL e-text (`niruktau.htm`, "Based on the edition by Lakshman Sarup", 6.28: *veti ca ya iti ca
   cakāra śākalyaḥ / udāttaṃ tv evam ākhyātam abhaviṣyad asusamāptaś cārthaḥ*). The entry names
   Sarup's edition (first published 1920–1927; repr. Delhi: Motilal Banarsidass, 1967) and says
   that the course quotes the e-text and did not open the printed text. The Nirukta sentence of
   row 0.16 prints.
2. **The comma (item 2): approved.** STYLE_GUIDE §3.1 now lists the question mark, the exclamation
   mark and the comma among the stops, and says that the word before a stop stands in its pause
   form (same commit as this decision).
3. **Ledger words that are also grammar terms (item 3): both rows stand.** The ledger counts the
   word in its ordinary sense; the GLOSSARY row carries the technical sense and the Hindi term.
4. **GLOSSARY (item 4): approved as listed.** The rows are added when the chapter ships; the Hindi
   forms given in item 4 bind the lessons from the first draft.
5. **Whitney §180, §189, §191, §235 (item 5):** none of them is cited in a lesson unless Pass C
   opens the section and it says what it is cited for.
6. **The Ṛgveda locus (item 6) is RV 10.29.1**, confirmed in the GRETIL Ṛgveda (`rv_10_u.htm`,
   *vane na vā yo nyadhāyi cākañ…*). Learner text may cite [REF:rigveda 10.29.1].
7. **Hindi parallels (item 7):** `kachru2006` and `guru1952` stay bare. The schwa-deletion row cites
   `ohala1994` only if Pass C finds the statement there; otherwise it prints as a FACT about Hindi
   pronunciation with no key.
8. **The exam (item 8): accepted.** One 45-minute sitting, Station 0 outside it. The booklet prints
   task C's text joined only; the pause form stands in the key, which the learner sees after the
   sitting.
9. **हे (item 9): accepted** — left unjoined, and no drill puts हे before a vowel.
10. **The ✓ promotion of the -आः column and of the other-vowel column (item 10; deviation 6):
    confirmed.** The endings the learner already owns end in these vowels (बालकाः, रामैः, हरेः,
    गुरोः), so joined text cannot be read or written from l04 on without them. The र् + र row stays ◐.
    To be recorded in the plan's §7.6 when the chapter ships.
11. **The erratum of §8 (v1.c03.l04 §14, the मनः row): approved and applied** in the same commit.

### Deviations from the plan (with reasons)

1. **Whitney locators.** Every section the plan cites for this chapter was re-opened and says what
   it is cited for: §§126–138 (vowels; with guṇa and vṛddhi both in §127, and §§128, 130 accent
   notes that the chapter does not cite), §133, §134, §§170–179 (visarga), §159, §§161–163, §§202–210,
   §213 (consonants), §163 (त् + ह), §208, §210. **Added:** §16 (avagraha), §125, §131–132, §135,
   §138f (हे), §139, §145, §152, §169a–b (the r-final particles; s and r alike after other vowels),
   §171b (नमस्कार), §172a and §173a (sibilants), §174b (भोस्), §199, §202b–c, §203a, §206–207.
2. **IAST and printing layout** (row 0.2): decided once, tried on the validator; the IAST of a joined
   line stands after the joined line and the pause form's after the pause form (the validator would
   fail any other order); hyphenated pause forms never stand before a parenthesis.
3. **भवति = भो + अति moves from l01 to l04** (row 0.6 d, 0.14): the task brief and the plan's own
   inventory place all internal sandhi among the items observed and named; l04 names all four inner
   changes together. नयनम् (ने + अनम्) stays in l01 as one display line, because v3.c02.l04 promises
   "its inner seam is shown in c04.l01".
4. **Two rows added to the vowel table** (table 0.A): the word-final -औ → -आव् (Whitney §134b),
   which the learner's a-stem duals need at once (पितरावपि, कपोतावपि), and the contrast of the -औ
   dual (joins) with the -ई/-ऊ/-ए dual (pragṛhya). The plan's अयादि row named only ए and ऐ at word end.
5. **8.3.34's learner wording** says "before a voiceless consonant" (the Kāśikā: *khari parataḥ*);
   the plan's "the visarga is an s at heart" is kept only as the fact that Pāṇini's visarga is the
   pause shape of a final स् (8.3.15, Teacher Notes).
6. **Production marks** (row 0.17): the -आः column of the visarga map ✓ (plan: ◐) and the
   other-vowel column ✓ for -एः -ऐः -ओः as well as -इः -उः (plan: -इः/-उः) — one rule each; l02's own
   headwords उच्चैः, शनैः are -ऐः words; c05.l01 expects joined compositions, which need joined plural
   subjects. The र + र row stays ◐.
7. **The comma treated as a pause** (row 0.3; open item 2).
8. **No frequency claim** (row 0.26): the plan's "-अः first (most frequent)" is reworded; the order is
   kept for its shapes and its owned examples.
9. **Untaught or unlocated words dropped:** धर्मं चर (l03 model 1: चर is not owned; the line is an
   unlocated quotation of Taittirīya 1.11); कस्मिंश्चित् (l03 table: the c05.l02 indefinite; c05.l02
   shows the seam); the plan's दिक् देशात् (replaced by दिगपि, with an owned verb in §16).
10. **Model 2 of l02:** the plan's "(Hitopadeśa 1's mouse asks it)" is confirmed and given its locus: in the
    GRETIL e-text the mouse Hiraṇyaka asks the crow *kas tvam?* from inside his hole (*hiraṇyako 'pi
    vivarābhyantarād āha — kas tvam?*, `hitop_u.htm` l. 553, prose after Hit 1.53); the deer asks the
    jackal the same (l. 572, prose after Hit 1.55), and so does the vulture (l. 596). The model keeps
    the sentence and gives the mouse's locus.
11. **Serial, episode 4** (plan §1.5): the plan's "the whole serial so far, re-read joined" is made
    concrete as four selections — ten lines joined at the vowel seams (l01), ten at the vowel and
    visarga seams (l02), ten at every seam (l03), and the whole 13-line past-tense retelling of
    v3.c03.l03 joined over its pause form (l04) — every line copied from its source §17 on disk, with
    a split key naming each seam's lesson. The plan's l01 example "कपोताः अपि तत्रागच्छन्" (not a line
    of the serial on disk) is replaced by real serial lines.
12. **Station 0 items made concrete** (row 0.24): the plan's short "S0 → next" lines are kept in
    substance and given fixed items and keys; the l04 +1-week "split one serial episode" names the
    l04 §17 text. The exam guard is applied (no S0 item in tasks A–E).
13. **Exam design** (§5): scoring, pass marks, remediation and the dictation order are set here
    (the plan gives tasks and times); task C's text is the learner's own l04 join, checked against
    the printed text after the sitting; the volume spiral sits inside task A (A14 case, A15 verb).
14. **review_of corrections:** l01 adds v3.c03.l04 (S0-ac), v3.c02.l04 (नयनम्), v3.c03.l03 (the
    prefix seams), v1.c06.l01, v1.c04.l03, v2.c06.l02–l03, v2.c05.l02; l02 adds v3.c03.l05 (S0-ae),
    v2.c03.l03 (कालश्च), v1.c05.l04, v1.c05.l05, v1.c03.l04, v2.c05.l02, v3.c01.l03–l04; l03 adds
    v3.c04.l01 (S0-ag), v1.c01.l01, v1.c05.l01 (वाक्), v2.c06.l01; l04 adds v3.c04.l02 (S0-ai),
    v2.c06.l01, v3.c01.l03, v3.c02.l01, v3.c02.l03, v3.c03.l01 (the inner-word items); l05 adds
    v3.c02.l05 and v2.c06.l01.
15. **Self-study minutes** set: 35 · 40 · 35 · 40 · 40 (the plan gives none), each §21 adding up.

---

## 8. Errata to shipped files

Searched (2026-11-10): every line in curriculum/volume-1, curriculum/volume-2 and
curriculum/volume-3/chapter-01–03 that sends a joined shape or sandhi to a volume or chapter, or
states a sandhi fact — grep for "sandhi", "सन्धि", "seam", "join", "Volume 3", "v3.c04", "c04.l0",
"Chapter 4" near those words, and for each item of the plan's "promises kept" list (table 0.F):
नास्ति, तथास्तु, स्वागतम्, नमस्ते / नमः + ते, कोऽपि, परमो धर्मः, पुनर्मिलामः, पुनरपि,
अनुगृहीतोऽस्मि, ईकारश्च, कालश्च, भो राम, जगच्च, षड्, सर्वं कुशलम्, सत्यमेव, the avagraha, nasal
assimilation, repha and visarga, मनः/मनस्.

**One line is now false** (the plan re-addressed the s-stem declension to v4.c05, §4.0.3 and §6):

| File | Quote (verbatim, unique in the file) | Replacement |
|---|---|---|
| curriculum/volume-1/chapter-03/lesson-04-ta-varga-dental.md (§14, row मनः) | `pause form of the noun मनस् (manas), as नमः is of नमस् (namas) — full noun story in Volume 3` | `pause form of the noun मनस् (manas), as नमः is of नमस् (namas) — its seam in Volume 3 (v3.c04.l02), its full declension in Volume 4 (v4.c05)` |

**Checked, unchanged (still true):**

| File | Line (as it stands) | Why it stays true |
|---|---|---|
| volume-1/chapter-03/lesson-04-ta-varga-dental.md (§27) | "Volume 3 (the sandhi behind नमः/नमस्, noun endings, the *manas* stem)" | the seam (c04.l02), the stem in मनोरथः (c04.l02) and मनसः (c05.l04) are Volume 3's; the line does not promise the declension |
| volume-1/chapter-01/lesson-01-what-sanskrit-is.md (§8) | "before a consonant a final m is written ṃ: *aham* → *ahaṃ* … That joining is sandhi, taught in Volume 3" | c04.l03 (8.3.23) |
| volume-1/chapter-02/lesson-01-i-and-ii.md (§6) | "The seam in ईकारश्च — where *ḥ* and *ca* fuse into *ś ca* — is a joining rule (sandhi), treated properly in Volume 3." | c04.l02. (The title इकारः ईकारश्च joins only that seam; c04.l02 Ex 2 completes it: इकार ईकारश्च. Not an error: a title may print a partial join; no fix.) |
| volume-1/chapter-02/lesson-04-e-and-ai.md (§8) | "in Volume 3, when words start colliding and fusing (sandhi), you will watch *a* meet *i* and become ए in live text" | c04.l01 (गुणः) |
| volume-1/chapter-02/lesson-05-o-and-au.md (§4) | "ऐ and औ to ā+i and ā+u, which is why they drive the sandhi patterns you will meet in Volume 3" | c04.l01 (वृद्धिः, अयादि) |
| volume-1/chapter-04/lesson-01-antahstha.md (§8, §15) | "vowel-twin machinery is one of sandhi's main engines. Full treatment in Volume 3" | c04.l01 (यण्) |
| volume-1/chapter-05/lesson-02-conjunct-mechanism.md (§19 key) | "नमः + ते, "homage to you"; the seam-change is sandhi, Volume 3 (§13)." | c04.l02 |
| volume-1/chapter-05/lesson-04-r-forms.md (§27) | "Volume 3 (sandhi; repha alternations with visarga)." | c04.l02 |
| volume-1/chapter-05/lesson-05-signs-and-exam.md (§8, §19) | "you will *use* it when sandhi arrives in Volume 3" · "It marks an अ elided in joined (sandhi) writing — सोऽहम् = सः + अहम्" | c04.l01–l02; the fact is right (Whitney §16, §175a) |
| volume-1/chapter-06/lesson-01-long-words.md (§27) | "Volume 3 (sandhi: nasal assimilation *between* words)" | c04.l03 (rows 1 and 4) |
| volume-1/chapter-06/lesson-04-shloka-and-volume-exam.md (§8, §19) | "**सत्यमेव जयते** — because म् + ए fuse in connected writing" · "दुःखभाग् — whose pause forms are कश्चित् and दुःखभाक् (the द्/ग् you see are sandhi" · "मा कश्चिद् दुःखभाग् भवेत्॥" | c04.l03; the spaced print is a word-division choice ("editions vary", row 0.20), not an error |
| volume-2/chapter-01/lesson-01-greeting-kit.md (§12, §15) | "connected text prints भो before a vowel or a voiced sound" · "connected texts print भो राम, the visarga yielding before a voiced sound (sandhi, Volume 3)" | Whitney §174b; c04.l02 |
| volume-2/chapter-01/lesson-02-how-are-you.md (§15) | "In joined classical writing you will meet **सर्वं कुशलम्** — the म् of सर्वम् dressing as anusvāra before the following क. That machinery is Volume 3's" | c04.l03 |
| volume-2/chapter-01/lesson-04-courtesy-and-farewell.md (§7, §15, §20) | "जुड़ने का यह नियम तीसरे खण्ड का विषय है" · "previews:** नास्ति, पुनर्मिलामः, अनुगृहीतोऽस्मि — seams noticed, system in Volume 3." | c04.l01–l02 |
| volume-2/chapter-01/lesson-05-courtesy-exam.md (§13, §19) | "नास्ति previews vowel sandhi, Volume 3's subject." | c04.l01 |
| volume-2/chapter-02/lesson-04-where-things-are.md (§15, §27) | "rules (sandhi) are Volume 3's subject; the pause form जगत् च is today's reading" | c04.l03 |
| volume-2/chapter-02/lesson-05-family-world-exam.md (§19 key) | "the जगत्+च join (जगच्च) is a sandhi preview, Volume 3's" | c04.l03 |
| volume-2/chapter-03/lesson-02-six-to-ten.md (§8, §14) | "षट् wearing a company dress, षड्, before a voiced neighbor — joining rules are Volume 3's business" | c04.l03 (8.2.39; the neighbour आ is a vowel, voiced) |
| volume-2/chapter-03/lesson-03-time-words.md (§8) | "the chapter-title seam form **कालश्च**" | c04.l02 |
| volume-2/chapter-05/lesson-02-keeping-the-conversation-alive.md (§8, §9, §14) | "नावगच्छामि in connected text — display only, the नास्ति story again, sandhi for Volume 3." · "पुनर्वदतु … the visarga turned to र … Display only; sandhi is Volume 3." · "तथास्तु … a seam for Volume 3" | c04.l01–l02 |
| volume-2/chapter-06/lesson-02-the-lion-and-the-mouse.md (§15 FACT) | "Before a word beginning with अ, a final -अः becomes -ओ, and the अ of the next word drops out; the avagraha ऽ marks where it was: कः + अपि → कोऽपि. … पुनः, whose -अः stands for -अर्, keeps र् instead: पुनः + अपि → पुनरपि." | true (Whitney §175a, §178b); its locators §175, §135, §16, §178 and 6.1.113, 6.1.109 hold |
| volume-2/chapter-06/lesson-03-three-sayings.md (objective 3) | "explain the one join परमः + धर्मः → परमो धर्मः (a final -अः becomes -ओ before a voiced consonant)" | Whitney §175a; c04.l02 |
| volume-2/chapter-04 (the ष of करोषि, शृणोषि) | "the ष comes with the whole word … the reason waits for Volume 4" | c04.l04 only names the law; the rule is v4.c02 (plan §4.0.3) |
| volume-3/chapter-01/lesson-03-with-what-for-whom.md (§8, §15) | "How ः + त becomes स्त is v3.c04.l02" | c04.l02 |
| volume-3/chapter-01/lesson-04-whose-and-o.md (§8) | "भो राम (भोः + राम) is c04.l02." | c04.l02 |
| volume-3/chapter-02/lesson-03-fire-and-teacher.md (§6, §8, §15, §27) | "strengthening, गुणः (guṇaḥ); the course takes it up in v3.c04.l01." · "The strengthened -ए, -ओ and the -औ return between words as guṇa and vṛddhi (v3.c04.l01)." · "The rule behind the columns is named in Chapter 4 and taught in Volume 4." · "v3.c04.l04 (the ṣ named)" | c04.l01 (guṇa named; between words), c04.l04 (ṇ, ṣ named) |
| volume-3/chapter-02/lesson-04-parents-and-the-dual.md (§14, §27) | "its inner seam is shown in c04.l01, not here" · "v3.c04.l01 (the seam of नयनम्)" | kept: c04.l01 shows it in one line (deviation 3) |
| volume-3/chapter-02/lesson-05-roles-map-exam.md (§8) | "the rule is named in Chapter 4 and taught in Volume 4" (the ṇ cells) | c04.l04 |
| volume-3/chapter-03/lesson-03-there-was.md (§8, §15) | "meetings at the gate (आ, अवा-, य्) are shown as facts; their names are v3.c04.l01's" | c04.l01 Ex 2 |
| volume-3/chapter-03/lesson-02-the-second-family.md (§14) | "display word as before (v2.c06.l01), until v3.c04.l01 makes it a headword" (एव) | c04.l01 headword एव |
| volume-3/chapter-03/chapter.md | "l05 books the +1-day item for v3.c04.l01 and the +1-week item for v3.c04.l02, and l04 books the +1-week item for v3.c04.l01" | row 0.24 chain |

No other line in the searched files makes a sandhi claim that the chapter now contradicts. The
volume frames (volume-1/volume.md, volume-2/volume.md) and the chapter frames that mention sandhi
send it to Volume 3: true.

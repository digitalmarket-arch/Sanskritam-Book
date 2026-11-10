# Research notes — Volume 3, Chapter 1 (सुबन्तप्रवेशः — Nouns & Cases I)

Fact base gathered **before** drafting v3.c01, the first chapter of Volume 3. Its binding
contract is the volume plan (`vol3-plan.md`, §4.1 with §1.2, §1.3 T1, §1.5, §3, §4.0.1–§4.0.5
and §7.3 decision 11); this note copies that contract, verifies it cell by cell, writes out
every Sanskrit text the five lessons use, and fixes the few places where the plan was wrong
or silent (each listed in §7 with its reason). The chapter takes the masculine and neuter
a-stem through the eight cells of the singular, two cases per teaching lesson, each case
arriving as the answer to a question word; the exam assembles the column. Sources checked
locally (read-only): Whitney 1889 by chapter (§§266–305 case uses, §§326–330 the a-stem,
§§491, 495, 504 the pronoun cells, §189 the ṇ rule, §1098 the -तः adverbs, §§1127–1130 and
§1135 the prepositional words and interjections); the Aṣṭādhyāyī data file (every sūtra
number below was looked up there); the GRETIL Kāśikā (`jvkasipu.htm`) and Laghukaumudī
(`varlghku.htm`) for the tradition's own examples; the GRETIL Hitopadeśa (`hitop_u.htm`) for
the serial's source frame; Apte 1890 and Monier-Williams 1899 for every headword; the
Volumes 1–2 ledger compiled from every §14 table (`ledger-all.tsv`, 764 rows) for ledger
status. Entering ledger: **360** (Volume 2 exit, STYLE_GUIDE §8). Exit: **387**. Every
Sanskrit line in this chapter is printed in **pause form** (विराम-रूप): joined text begins in
Chapter 4 (plan §1.2). The four teaching lessons will be drafted in parallel by writers who
cannot see each other's files: each lesson section below is complete on its own, and the
Station 0 bookings (0.30) are worded once here and used verbatim by both the booking and the
running lesson.

---

## 0. Chapter-wide facts and policies

| # | Claim | Register | Source | Notes |
|---|---|---|---|---|
| 0.1 | Sanskrit has eight case forms in the singular of a noun, the vocative included. The tradition names the first seven by their order: प्रथमा (prathamā) "first" = nominative, द्वितीया (dvitīyā) = accusative, तृतीया (tṛtīyā) = instrumental, चतुर्थी (caturthī) = dative, पञ्चमी (pañcamī) = ablative, षष्ठी (ṣaṣṭhī) = genitive, सप्तमी (saptamī) = locative; the vocative is सम्बोधनम् (sambodhanam) "calling". The vocative is not a separate case in the native system: it is a use of the nominative (2.3.47 सम्बोधने च), and Whitney gives it at the end of the series, in the singular only, where alone its form differs from the nominative. | FACT (forms); TRADITION (names, the vocative's status) | [REF:whitney1889 §266]; [REF:ashtadhyayi 2.3.47] | The names are feminine ordinals agreeing with an understood विभक्तिः; they are taught as names (whole words), never inflected in Chapter 1. Whitney §266a: "The vocative is not considered and named by the native grammarians as a case like the rest." |
| 0.2 | The a-stem masculine and neuter singular (table T1, below 0.A): nom. -ः / n. -म्; acc. -म्; instr. -एन (-एण by 0.6); dat. -आय; abl. -आत्; gen. -स्य; loc. -े; voc. the bare stem. The neuter differs from the masculine only in the nominative (and vocative is the same bare stem): its nominative and accusative are one form (फलम्). | FACT | [REF:whitney1889 §327]; [REF:whitney1889 §330] | Whitney's own model words are काम, देव (m.) and आस्य (n.); his paradigm of देव was checked cell by cell against T1. The ablative ending is -त् or -द् (Whitney §327e); the course prints -आत् at pause, as Whitney's table does. The Laghukaumudī also gives रामाद् at pause (8.4.56 वाऽवसाने, Teacher Notes only). |
| 0.3 | Decision 11 (plan §7.3): **रामः is the memorised model**, but the instrumental singular is **taught as -एन on देवः** (देवेन); रामेण is the same ending after र्. Every printing of T1 shows देवेन beside रामेण, and the ṇ cell is marked (here and in every lesson: **bold ण** plus a ṇ flag in the table's last column). | policy | plan §7.3 decision 11; §1.3 T1 | Lessons l01 and l02 print T1's rows without the instrumental; the row arrives in l03. |
| 0.4 | The interrogative कः (m.) / किम् (n.) declines like सः/तत् except in the neuter nominative–accusative, which is किम् (from कि-); m. and n. share every oblique cell: कम्, केन, कस्मै, कस्मात्, कस्य, कस्मिन्. | FACT | [REF:whitney1889 §504]; [REF:whitney1889 §495] | Whitney §504: "the rest of the declension is precisely like that of त ta". कः and किम् are owned (v1.c02.l06, v1.c05.l01); every cell taught here belongs to them (ledger rule 7): 0 new. |
| 0.5 | सः (m.) / तत् (n.), singular: सः · तत्; तम् · तत्; तेन; तस्मै; तस्मात्; तस्य; तस्मिन्. The masculine differs from रामः in three cells (-स्मै, -स्मात्, -स्मिन्; the pronominal declension), and the neuter तत् stands where फलम् has -म्. Noticed in l05, parked for c05.l02. The nominative सः is not "स् → त्": the pronoun uses two stems (स- in the masc. and fem. nom. sg., त- elsewhere), a suppletion (IR-025's correction). | FACT | [REF:whitney1889 §495] | सः, तत्, तस्य are owned (v1.c06.l03, v1.c05.l01, v1.c06.l03). The suppletion line is a l01 §15 one-liner, not drilled. |
| 0.6 | **The ṇ reflex (observed spelling; the rule is v4.c02's):** the न of -एन is written ण when र्, ऋ or ष् stands earlier in the same word and nothing between them but vowels, ह य व र, the क-row or the प-row. A consonant of the च-row, the ट-row (ण included) or the त-row, or श, स, ल, between them blocks it (Whitney's "palatal, except y": य, though palatal, does not block). A word-final न is never affected (रामान् c02.l01, beside रामाणाम्). Three columns, never two (0.C). | FACT | [REF:whitney1889 §189]; [REF:ashtadhyayi 8.4.1]; [REF:ashtadhyayi 8.4.2]; [REF:ashtadhyayi 8.4.37] | The sūtras are Teacher Notes only (plan §4.0.4). Whitney §189 states the blockers as "a palatal (except y), a lingual, or a dental"; 8.4.2's list of permitted interveners (अट्, the क- and प-rows, आङ्, नुम्) is the same rule from the other side. The Laghukaumudī names it at रामेण: "ṇatvam / rāmeṇa" (VLk 140, under 7.1.12). |
| 0.7 | Corpus check (method stated; no wider claim): a word-boundary count over the local GRETIL mirror, re-run for this note on 2026-11-10: पुरुषेण 632 vs पुरुषेन 8; पर्वतेन 37 vs पर्वतेण 0; पाषाणेन 15 vs पाषाणेण 0; रथेन 783 vs रथेण 0; रामेण 1083 vs रामेन 1; अर्जुनेन 191 vs अर्जुनेण 0. | FACT (count) | GRETIL e-texts, local mirror (no REFERENCES key; Teacher Notes only, with the method line) | Matches the plan's figures exactly. Never printed in learner text as "always" or "never"; Teacher Notes may print the counts with "in the e-texts of the GRETIL archive searched". |
| 0.8 | The personal pronoun cells taught (singular; Whitney's "later language" forms): अहम् · माम् · मया · मह्यम् · मम; त्वम् · त्वाम् · त्वया · तुभ्यम् · तव. The ablative and locative cells (मत्, त्वत्; मयि, त्वयि) and the enclitics (मा, त्वा, मे, ते) are **not** taught in Chapter 1: c05.l01. ते in नमः ते is previewed once in l03 (0.25). | FACT | [REF:whitney1889 §491] | Owned before the chapter: अहम्, त्वम्, मम, तव, मह्यम्, तुभ्यम् (ledger rows); माम् (the v2.c06.l02 chunk माम् मुञ्च, glossed whole, not a ledger row). New cells, all 0 ledger (rule 7): त्वाम् (l01), मया, त्वया (l03). |
| 0.9 | **Case uses taught (exactly these):** nominative — the doer (and a predicate word: एषः व्याधः); accusative — the done-to and the goal of motion (विद्यालयम् गच्छति), and both objects of a two-accusative verb (नयति "leads X to Y"; पृच्छति "asks X about Y"); locative — place in/on/at, the place reached by a falling or thrown thing (कूपे पतति, घटे क्षिपति) and the point of time (सोमवासरे, प्रभाते); ablative — "from" (separation, starting point); instrumental — means ("with, by") and company with सह, absence with विना; dative — the recipient (ददाति, कथयति), the one pleased with रोचते, the one honoured with नमः and the one blessed with स्वस्ति, and purpose (one labelled line); genitive — a noun's relation to a noun ("of, -'s"), and the complement of उपरि and समीपे; vocative — calling. | FACT | [REF:whitney1889 §§267, 269–270, 277]; [REF:whitney1889 §§278–280, 284]; [REF:whitney1889 §§285–287]; [REF:whitney1889 §§289–291]; [REF:whitney1889 §§294, 299a]; [REF:whitney1889 §§301–302] | Not taught and not used: the instrumental agent of a passive (R2, c02.l05), the ablative of cause or comparison, the genitive with verbs, the locative or genitive absolute (v4.c05), the accusative of time. |
| 0.10 | A verb of motion takes its goal in the accusative (ग्रामम् गच्छति). Pāṇini also allows the dative for the goal of a verb of physical motion (2.3.12 गत्यर्थकर्मणि द्वितीयाचतुर्थ्यौ चेष्टायामनध्वनि: ग्रामम् / ग्रामाय गच्छति, not with अध्वन् "road"). The course teaches only the accusative. | FACT (acc.); TRADITION (the option) | [REF:whitney1889 §269]; [REF:ashtadhyayi 2.3.12] | 2.3.12 is Teacher Notes only (plan §4.0.4). Learner text never stars ग्रामाय गच्छति as wrong. |
| 0.11 | Two-accusative verbs: verbs of asking and of leading or carrying take two accusatives (Whitney §277: "with verbs of appealing, asking … with verbs of bringing, sending …"; Apte s.v. नी: "one of the roots that govern two accusatives"). The tradition's examples, from the Laghukaumudī under 1.4.51 अकथितं च: माणवकं पन्थानं पृच्छति "he asks the boy the way" and ग्राममजां नयति "he leads the goat to the village". | FACT; TRADITION (the examples) | [REF:whitney1889 §277]; [REF:apte1890 s.v. नी]; [REF:laghukaumudi on 1.4.51]; [REF:kashika 1.4.51] | **Correction to the plan:** the plan's "अजां ग्रामं नयति" is Apte's wording (s.v. नी, attributed to "Sk"), not that of the two grammatical texts checked. The Laghukaumudī (GRETIL VLk 895) reads *grāmam ajāṃ nayati harati karṣati vahati vā*; the Kāśikā on 1.4.51 gives the प्रच्छ example *māṇavakaṃ panthānaṃ pṛcchati* and does not list नी in its kārikā. Teacher Notes print ग्रामम् अजाम् नयति (Laghukaumudī), pause form, with अजा "she-goat" glossed. |
| 0.12 | **The kāraka names** (role names, Pāṇinian terms): कर्ता (kartā) the doer, कर्म (karma) the done-to (and the goal), करणम् (karaṇam) the means, सम्प्रदानम् (sampradānam) the recipient, अपादानम् (apādānam) the fixed point of departure, अधिकरणम् (adhikaraṇam) the location. Pāṇini defines them in 1.4.24–1.4.55 (1.4.24 ध्रुवमपायेऽपादानम्, 1.4.32 कर्मणा यमभिप्रैति स सम्प्रदानम्, 1.4.42 साधकतमं करणम्, 1.4.45 आधारोऽधिकरणम्, 1.4.49 कर्तुरीप्सिततमं कर्म, 1.4.54 स्वतन्त्रः कर्ता) and assigns the cases to them in 2.3 (2.3.2 कर्मणि द्वितीया, 2.3.13 चतुर्थी सम्प्रदाने, 2.3.18 कर्तृकरणयोस्तृतीया, 2.3.28 अपादाने पञ्चमी, 2.3.36 सप्तम्यधिकरणे च). | TRADITION | [REF:ashtadhyayi 1.4.24]; [REF:ashtadhyayi 1.4.32]; [REF:ashtadhyayi 1.4.42]; [REF:ashtadhyayi 1.4.45]; [REF:ashtadhyayi 1.4.49]; [REF:ashtadhyayi 1.4.54]; [REF:ashtadhyayi 2.3.2]; [REF:cardona1997] | Learner text gives the six names as names for jobs ("In Pāṇini's grammar the doer's job is called कर्ता"), one per lesson pair; the sūtras are Teacher Notes only (plan §1.1 item 5, D16). Do not write "Pāṇini defines each of the six kārakas in one sūtra" (the c02#1 finding: the definitions run over many sūtras). कर्ता and कर्म are GLOSSARY terms since v1.c06.l03 ("subject", "object"): l01 sharpens them to "doer" and "done-to" (GLOSSARY update, §7). |
| 0.13 | **The genitive and the vocative are not kārakas.** The genitive covers what remains, a relation of noun to noun (2.3.50 षष्ठी शेषे); the vocative is the nominative used in calling (2.3.47 सम्बोधने च). The plan pairs them in l04 because neither hangs on the verb; Pāṇini does not pair them (volume#9 finding). The genitive's job is named सम्बन्धः (sambandhaḥ) "relation", the usual name in grammar teaching, not a Pāṇinian technical term. | TRADITION | [REF:ashtadhyayi 2.3.50]; [REF:ashtadhyayi 2.3.47]; [REF:whitney1889 §294a] | Learner wording: "According to Pāṇini, the genitive and the vocative are not kārakas: neither names a part in the action." Never "the last pairing is Pāṇini's own". सम्बन्धः: honest label "the name grammar books use for the genitive's job". |
| 0.14 | **Case ≠ role, the first sightings** (the map is c02.l05's): (a) the neuter shows the doer and the done-to in one form (पुस्तकम् अस्ति · पुस्तकम् पठति); (b) the dative with नमः and स्वस्ति is required by the word नमः, not by a part in an action (2.3.16, an upapada case; Teacher Notes); (c) the genitive and the vocative are not kārakas (0.13). The dative with रोचते is **not** an example: Pāṇini makes the one pleased a सम्प्रदानम् (1.4.33 रुच्यर्थानां प्रीयमाणः), so case and role agree there (the c02#2 finding). | FACT (a); TRADITION (b, c, and the रोचते line) | [REF:ashtadhyayi 2.3.16]; [REF:ashtadhyayi 1.4.33] | Each lesson states only its own sighting, in one line. |
| 0.15 | **Sūtras quoted in learner text (three, plan §4.0.4):** 2.3.16 नमःस्वस्तिस्वाहास्वधालम्वषड्योगाच्च (l03) "with नमः, स्वस्ति, स्वाहा, स्वधा, अलम् and वषट्, the dative"; 2.3.19 सहयुक्तेऽप्रधाने (l03) "the instrumental for the lesser partner joined by सह"; 1.4.14 सुप्तिङन्तं पदम् (l05) "a word is what ends in a sup or a tiṅ ending". Named, not quoted, not counted: 4.1.2 (the *sup* list, shown once as a picture in l05). | TRADITION | [REF:ashtadhyayi 2.3.16]; [REF:ashtadhyayi 2.3.19]; [REF:ashtadhyayi 1.4.14]; [REF:ashtadhyayi 4.1.2] | All four texts verified in the data file (4.1.2: स्वौजसमौट्छष्टाभ्याम्भिस्ङेभ्याम्भ्यस्ङसिभ्याम्भ्यस्ङसोसाङ्ङ्योस्सुप्). The Kāśikā's examples: on 2.3.16 *namo devebhyaḥ, svasti prajābhyaḥ*; on 2.3.19 *putreṇa sahāgataḥ pitā* "the father came with the son" — the son, the lesser partner, in the instrumental. |
| 0.16 | *sup* is a pratyāhāra: it runs from the first ending सु to the final marker प् of 4.1.2, and so names the 21 nominal endings; *tiṅ* names the 18 verb endings likewise (3.4.78). Hence सुबन्तम् "ending in a sup" (this chapter's name, सुबन्तप्रवेशः) and तिङन्तम् (Chapter 3's). | TRADITION | [REF:ashtadhyayi 4.1.2]; [REF:ashtadhyayi 1.4.14] | Teacher Notes only for the pratyāhāra mechanism (plan E16; §6 sends pratyāhāras to v4.c01). Learner text: "*sup* is the tradition's name for the whole set of noun endings." Do not write "from its last syllable". |
| 0.17 | **The traditional order of presentation.** The Laghusiddhāntakaumudī lists the 21 *sup* endings in seven triplets (*su au jas* iti prathamā, *am auṭ śas* iti dvitīyā …) and works its first noun, राम, through them case by case — रामः, रामौ, रामाः, हे राम …, रामेण, रामाय, रामात्/रामाद्, रामस्य, रामे — so the case-by-case table with राम is the tradition's own teaching order. | TRADITION | [REF:laghukaumudi on 4.1.2] (the ending list and the राम walk-through that follows it; GRETIL e-text nos. 118–150) | The plan's "the शब्दरूप recitation of school practice, रामः रामौ रामाः …" has no source the course can cite; **print only the Laghukaumudī line** (open item 7.4). Chapter 1 chants only the singular column. The LK derives the vocative at VLk 134 (6.1.69 एङ्ह्रस्वात् सम्बुद्धेः: *he rāma*) and gives *he rāma* as the example of 2.3.47 (VLk 892). |
| 0.18 | The vocative of an a-stem is the bare stem: राम, देव, फल. It is usually preceded by a calling particle: हे (he) "O!" or भोः (bhoḥ) "O!, hey". हे is an interjection (a "voice-gesture"); भोः is an old vocative (of भवत्) turned interjection. | FACT | [REF:whitney1889 §327h]; [REF:whitney1889 §1135a]; [REF:whitney1889 §1135c]; [REF:apte1890 s.v. हे]; [REF:monierwilliams1899 s.v. he] | Apte s.v. हे: "A vocative particle (oh!, ho!)", with the Gītā's हे कृष्ण हे यादव हे सखेति (BG 11.41) — a usable display line only with [REF:bhagavadgita 11.41]. भोः is owned (v2.c01.l01). Pause form throughout: भोः राम (joined भो राम is c04.l02). |
| 0.19 | In speech the vocative stem keeps its final अ: हे राम /ɦeː ɾɑːmɐ/, never "he Rām" (STYLE_GUIDE §1.1, no schwa deletion). | FACT | STYLE_GUIDE §1.1, §2.1 | §9–§11 of l04. |
| 0.20 | उपरि "above, over" takes the genitive (सिंहस्य उपरि); so does समीपे "near" (वृक्षस्य समीपे), the locative of the noun समीपम्. | FACT | [REF:whitney1889 §299a]; [REF:whitney1889 §1130]; [REF:apte1890 s.v. समीप] | Whitney §1130 lists *upari* "above (common later)" among words taking the genitive; §299a: "like upári above" usually with the genitive. Apte s.v. समीप: "-पं Proximity, vicinity". |
| 0.21 | सह "with" takes the instrumental (Whitney §1127: "saha (most frequent)"); विना "without" takes the accusative, the instrumental or the ablative (Apte s.v. विना: "with acc., instr. or abl."; 2.3.32 पृथग्विनानानाभिस्तृतीयाऽन्यतरस्याम् makes the instrumental an option). The course drills विना + instrumental, so that "with" and "without" share one frame, and names the other two in Teacher Notes. | FACT | [REF:whitney1889 §1127]; [REF:whitney1889 §284]; [REF:apte1890 s.v. विना]; [REF:ashtadhyayi 2.3.32] | Never star जलम् विना or जलात् विना. The plain instrumental can itself express company (Whitney §279), but the course always adds सह for company. |
| 0.22 | कथयति "tells" takes the person told in the dative (Apte s.v. कथ्: "usually with dat. of person"); ददाति "gives" takes the recipient in the dative (Whitney §286a). रोचते takes the one pleased in the dative (Whitney §286d: *yad yad rocate viprebhyaḥ*). नमः takes the one honoured in the dative (§286e; 2.3.16). | FACT | [REF:apte1890 s.v. कथ्]; [REF:whitney1889 §286]; [REF:ashtadhyayi 2.3.16] | — |
| 0.23 | The dative of purpose ("for food": अन्नाय) is ordinary Sanskrit (Whitney §287: "the dative of end or purpose, which is extremely common"); in Chapter 1 it appears in one serial line and in the owned verse परोपकारः पुण्याय पापाय परपीडनम् (v2.c06.l03), with one label. | FACT | [REF:whitney1889 §287] | Labelled, not drilled; no production target. |
| 0.24 | कृपया (v2.c01.l04 "please") is the instrumental of कृपा "compassion" ("with compassion"); उद्यमेन (v2.c06.l03) is the instrumental of उद्यमः "by effort". Whitney §280 gives *kṛpayā* "through pity" as an instrumental of occasion or reason. | FACT | [REF:whitney1889 §280] | कृपा is an ā-stem: its declension is c02.l02. One labelled line in l03. |
| 0.25 | **नमस्ते thread, step 1 (l03):** नमः takes the dative (2.3.16). ते in नमस्ते is a short form of the dative तुभ्यम् "to you", so नमः ते is "homage to you"; the seam ः + त → स्त is c04.l02 (8.3.34) and the enclitic ते is c05.l01 (8.1.22). | FACT; TRADITION (the sūtra) | [REF:whitney1889 §491a]; [REF:ashtadhyayi 2.3.16] | Whitney §491a lists ते beside तुभ्यम् (dat.) and beside तव (gen.); l03 says only "a short form of तुभ्यम्". No SYMBOL content (the "divine in me" reading) anywhere in Chapter 1. |
| 0.26 | **Hindi parallels (taught as exact contrasts):** (a) Hindi को marks a definite or animate direct object (राम को देखता है) **and** the recipient (राम को फल देता है); Sanskrit separates them: रामम् (acc.) vs रामाय (dat.). An indefinite inanimate object in Hindi has no को (फल खाता है), and Sanskrit marks every masculine singular object with -म्. (b) The goal of जाना is usually bare (स्कूल जाता है), like Sanskrit's accusative goal with no preposition. (c) Hindi से marks the instrument (छड़ी से) **and** the point of departure (पेड़ से); Sanskrit separates them: दण्डेन vs वृक्षात्. (d) Company is के साथ (दोस्त के साथ), matching सह + instrumental (मित्रेण सह). (e) Hindi में and पर are two postpositions; the Sanskrit locative is one form for both (वने "वन में", वृक्षे "पेड़ पर"). (f) Days take को in Hindi (सोमवार को); Sanskrit puts the day in the locative (सोमवासरे). (g) Hindi का/के/की agree with the possessed noun (राम का घर, राम की माँ, राम के पिता); Sanskrit -स्य never changes for the possessed (रामस्य गृहम्, रामस्य माता, रामस्य पिता). (h) "To have" in Hindi uses के पास or the genitive (मेरे पास पुस्तक है; राम के दो भाई हैं); Sanskrit uses the genitive with अस्ति (मम पुस्तकम् अस्ति). (i) हे राम exists in Hindi too; the Sanskrit vocative of an a-stem is the same bare stem. (j) Hindi ने marks the doer only in perfective clauses, and mainly with transitive verbs (राम ने फल खाया); a Sanskrit doer is in the nominative, with nothing added. | FACT | [REF:kachru2006] (key added 2026-11-10; cited bare) | Pass C locates each point in Kachru's chapters on the noun phrase and the simple sentence before drafting prints a locator; until then cite bare. The plan's Main-risk line that se covers company is corrected (company is के साथ; plan c01#1). Do not claim that Hindi speakers "over-use" any form (plan c01#2). |
| 0.27 | **Hindi school grammar's eight कारक.** Hindi school grammar teaches eight "kārakas" with their postpositions: कर्ता (ने), कर्म (को), करण (से, के द्वारा), सम्प्रदान (को, के लिए), अपादान (से), सम्बन्ध (का, के, की), अधिकरण (में, पर), सम्बोधन (हे, अरे). The names are the Sanskrit names; the system is not Pāṇini's: Hindi school grammar counts सम्बन्ध and सम्बोधन as कारक, Pāṇini does not (0.13). | TRADITION (Hindi school grammar) | [REF:guru1952] (key added 2026-11-10; cited bare) | A strong hook for Hindi-medium learners, but **prints only if `guru1952` (or another verified Hindi-grammar key) is added**; otherwise the line moves to Teacher Notes as "most Hindi school grammars", unprinted in learner text (open item 7.2). |
| 0.28 | **Policy: what is allowed in Chapter 1's taught text.** Allowed: every singular cell of a-stem m./n. nouns **from its own lesson on** (nom./acc. l01; + loc./abl. l02; + instr./dat. l03; + gen./voc. l04); the pronoun cells listed in 0.4, 0.5, 0.8 from their lessons; the present singular of owned verbs in all three persons; the owned imperative chunks (पश्य, मुञ्च, वदतु, ददातु, अस्तु, क्षमस्व) and मिलामः; owned whole-word forms of other stems as **nominatives only** (माता, पिता, गुरुः, बुद्धिः, बालिका, सीता, अग्निः, नदी, भ्राता, लघुः, सुखी), with one labelled exception: the owned नाम, an n-stem whose nominative and accusative are one form (like फलम्), used as the second accusative of पृच्छति in l01 (model sentence 6, Ex 2g, quiz 10) with the one-line label "नाम: one form for both jobs, like फलम्; its stem is c06.l03's note"; the owned chunks घटे, वने, जाले, सिंहस्य, माम्, मह्यम्, तुभ्यम्, मम, तव, तस्य before their lessons, as owned words; V2's calling chunks (भोः राम!, आचार्य!) before l04; direct speech after वदति / कथयति with a dash (the v2.c06.l02 frame: मूषकः वदति — …). **Not allowed:** any plural or dual (verb or noun), any inflected form of a non-a-stem (no गुरोः, मातरम्, बालिकाम्), agreement of an adjective with an inflected noun (एकम् घटम् appears only inside the quoted V2 story), the vocative of any non-a-stem (no मातः, गुरो), joined text, quotation closed by इति, any tense but the present. | policy | plan §1.2; task brief | The owned predicate adjectives क्रुद्धः, बद्धः, मुक्तः, पिपासितः stay in the nominative with a masculine singular doer, as in Volume 2. एकः X अस्ति (owned frame) is allowed; "एकम् X-म्" is not produced before c02.l01. |
| 0.29 | **Deferred, with addresses:** the plural (c02.l01); agreement (c02.l01–l02); feminine and other stems and their vocatives (बालिके, कमले c02.l02; गुरो, गुरवे c02.l03; मातः, पितः c02.l04); the dual (c02.l04); the full pronoun tables, मत् त्वत् मयि त्वयि and the enclitics (c05.l01–l02); the -तः family as a system (c05.l03); the ṇ and ṣ rules (v4.c02); kāraka theory (v4.c05); the passive's instrumental agent (R2 c02.l05; v4.c05); the locative and genitive absolutes (v4.c05); joined भो राम (c04.l02); the ablative/genitive singular identity of most other stems (c02.l03, one line in l02). | policy | plan §4.1, §6 | Each deferral is said once, in the lesson that meets it. |
| 0.30 | **Station 0 bookings — canonical wording** (each line is printed verbatim in the booking lesson's §20 and in the running lesson's §3): **S0-a** (v2.c06.l05 §20, run by l01): "+1 week: one story retold cold and one role-card conversation — v3.c01.l01's Station 0 runs exactly this." **S0-b** (l01 → l02): "+1 day: ten कः/कम् question–answer pairs — five कः? and five कम्? questions on l01's model sentences and story, each answered in one word in the matching case (कः मृगम् पश्यति? — व्याधः।); v3.c01.l02's Station 0 runs exactly this." **S0-c** (l01 → l03): "+1 week: the word-order shuffle — six sentences of l01 read aloud with their words shuffled (मृगम् व्याधः पश्यति।), the doer and the done-to of each named from the endings alone; v3.c01.l03's Station 0 runs exactly this." **S0-d** (l02 → l03): "+1 day: five from–to sentences (PLACE-आत् PLACE-म् गच्छति), said and written from five picture prompts (छात्रः गृहात् विद्यालयम् गच्छति।); v3.c01.l03's Station 0 runs exactly this." **S0-e** (l02 → l04): "+1 week: the three-way locative picture drill — six pictures, two each of 'in', 'on' and 'into', each answered in one sentence with a locative (मृगः वने अस्ति। कपोतः वृक्षे अस्ति। मूषकः कूपे पतति।); v3.c01.l04's Station 0 runs exactly this." **S0-f** (l03 → l04): "+1 day: the ṇ sort — twenty owned nouns put into the three columns (trigger → -एण · no trigger → -एन · trigger blocked → -एन), each instrumental written out; v3.c01.l04's Station 0 runs exactly this." **S0-g** (l03 → l05): "+1 week: the three-way picture drill — nine pictures, three each of 'with the stick', 'with a friend' and 'from the tree', each answered in one Sanskrit phrase (दण्डेन · मित्रेण सह · वृक्षात्) with its Hindi (छड़ी से · दोस्त के साथ · पेड़ से); v3.c01.l05's Station 0 runs exactly this." **S0-h** (l04 → l05): "+1 day: ten whose-questions — ten कस्य …? questions on l04's conversation and story, each answered with one genitive (कस्य विवरम्? — मूषकस्य।); v3.c01.l05's Station 0 runs exactly this." **S0-i** (l04 → v3.c02.l01): "+1 week: the हे + name role-play — three exchanges with a partner, each opened with हे and a name or title in the vocative (हे राम! · हे नृप! · हे मित्र!) and closed with a question; v3.c02.l01's Station 0 runs exactly this." **S0-j** (l05 → v3.c02.l01): "+1 day: the singular column chanted and written — the eight cells of रामः and of फलम् (देवेन beside रामेण) chanted top to bottom once, then written from memory and checked against l05 §15; v3.c02.l01's Station 0 runs exactly this." **S0-k** (l05 → v3.c02.l02): "+1 week: task C's grid, reshuffled — the twelve noun-and-asker prompts of the chapter exam in a new order, answered aloud and in writing against the clock; v3.c02.l02's Station 0 runs exactly this." **Standing** (l05 §20, from v2.c06.l05): "Monthly until Volume 3 ends: one story told aloud, one saying recited with its source, the nine askers once." | policy | plan §4.0.5, the lesson blocks' "S0 → next" lines; [REF:cepeda2006] | Chain (plan §4.0.5): l01 §3 runs S0-a; l02 §3 runs S0-b; l03 §3 runs S0-d and S0-c; l04 §3 runs S0-f and S0-e; l05 §3 runs S0-h and S0-g; c02.l01 runs S0-j and S0-i; c02.l02 runs S0-k. The S0-a line is quoted verbatim from v2.c06.l05 §20 (checked 2026-11-10). |
| 0.31 | **The serial (§17), episode 1** — "our retelling, after Hitopadeśa 1 (Mitralābha)", printed on every page; never presented as the text. Four parts (l01–l04), each in its lesson's grammar, singular only: the hunter and the net (l01); the tree on the bank, the dove in it, the mouse in its hole (l02); the food on the net, the dove flies down (l03); the mouse's warning and the hunter's empty walk home (l04). The dove is **not** caught in Chapter 1: c02's episode (the flock lands; the king of the doves; two feet in the net) begins from a free dove. | policy | plan §1.5; D3; [REF:hitopadesha mitralābha] (frame story) | Source check (GRETIL `hitop_u.htm`, Mitralābha frame): the tree is a śālmalī on the bank of the Godāvarī (*godāvarī-tīre viśālaḥ śālmalī-taruḥ*), where birds from many lands roost at night (*nānā-dig-deśād āgatya rātrau pakṣiṇo nivasanti*); the hunter scatters rice grains and spreads the net (*tena vyādhena taṇḍula-kaṇān vikīrya jālaṃ vistīrṇam*); the mouse Hiraṇyaka lives far away, on the bank of the Gaṇḍakī, and the doves fly to his burrow carrying the net. **Our retelling departs from the text:** it puts the mouse's hole beside the tree and gives the mouse a warning the original does not have. Teacher Notes of l02 and l04 say so in one line each, so that c06.l02 can show the difference. No names (चित्रग्रीवः, हिरण्यकः, गोदावरी) in Chapter 1 (rule 12). |
| 0.32 | **The thread-verse overlay (c01 column, l05):** in Hitopadeśa prastāvikā 36 (owned since v2.c06.l03), उद्यमेन is an instrumental ("by effort", means), सिंहस्य a genitive ("of the lion"), मुखे a locative ("in(to) the mouth": the place reached, like कूपे पतति); in सत्यमेव जयते (owned since v1.c06.l04, Muṇḍaka 3.1.6), सत्यम् is the neuter nominative, the doer. The plural and participle forms of the verse (कार्याणि, मनोरथैः, मृगाः, सुप्तस्य, सिध्यन्ति, प्रविशन्ति) stay glossed whole: c02–c03. | FACT; HISTORY (the loci) | [REF:hitopadesha prastāvikā 36]; [REF:mundaka 3.1.6] | सुप्तस्य is a genitive too, but a participle (R2 territory): l05 may say "सुप्तस्य agrees with सिंहस्य; why it looks like a noun is Chapter 2's". |
| 0.33 | **Ledger (STYLE_GUIDE §8 rules 1–15; plan §3):** 360 → 367 (l01: 7) → 374 (l02: 7) → 381 (l03: 7) → 387 (l04: 6) → 387 (l05: 0). 27 ledger-new, all checked against the 764-row Volumes 1–2 ledger: no double count. Upgrade rows (vocabulary_count only): ग्रामः (l01), हस्तः, पुत्रः, मित्रम् (l03), अर्थः (l04). vocabulary_count: l01 8 · l02 7 · l03 10 · l04 7 · l05 0. Every case form, every cell of कः, सः, अहम्, त्वम् adds 0 (rule 7). The vibhakti and kāraka names are grammar terms (GLOSSARY rows), not ledger words, like the upasargas (rule 9) — see open item 7.3. | policy | STYLE_GUIDE §8; plan §3 | Owned nouns used in sentence dress without an upgrade row (रामः, देवः, फलम्, वनम्, जलम्, गृहम्, वृक्षः, बालकः …) are review words: no §14 row unless the plan lists one. Drafters add no upgrade rows beyond the five listed. |
| 0.34 | Pedagogy anchors: retrieval before re-reading [REF:roediger2006] (the only claim it supports: retrieval practice beats re-reading for long-term retention, never "the strongest"); spaced review at +1 day and +1 week [REF:cepeda2006]; chunks learned whole and analysed later [REF:nation2013] (never "learned fastest"). These are the error sweep's binding decisions. | policy | research/verification-log.md, "Error sweep … Decisions recorded" | Chapter 1 runs the chunk-then-analyse sequence throughout: every case lesson opens with forms the learner already owns. |
| 0.35 | 1.x asset carried: the rāma singular column (1.x PDF pp. 37–43), verified correct; Chapter 1 restores it with the ṇ cell marked and देवेन beside रामेण (plan §4.0.2). | policy | ROADMAP preservation map; plan §4.0.2 | The 8×3 table returns in c02.l05 §15. |
| 0.36 | **§4, §5 and §21 per lesson (so no drafter invents a HISTORY claim).** §4: l01 — the case names प्रथमा … सप्तमी are ordinals founded on the order the Indian grammarians gave the cases (Whitney §266a), and according to Pāṇini the six roles are kārakas (TRADITION, 0.12); l02–l04 — the serial's source, the frame story of Hitopadeśa 1 (Mitralābha), and how our retelling departs from it (0.31), dated only as REFERENCES dates the text (c. 9th–12th c. CE); l05 — the Laghukaumudī's case-by-case order (0.17; 17th c., as in REFERENCES) and the thread-verse loci (0.32). §5 (FACT): l01 — a neuter has one form for the doer and the done-to (0.14a); l02 — the 'pregnant' locative, 'into' as 'in' (Whitney §301c); l03 — what the tongue does in रामेण (the curl after र् carries over to the nasal unless a tongue-front consonant intervenes; Whitney §189a), as observed spelling only, the rule being v4.c02's (0.6); l04 — the vocative as the bare stem (Whitney §327h); l05 — none beyond §15. Beyond these and 0.32's loci, Chapter 1 prints no HISTORY claim. §21 (v2.c06 pattern, about 35 minutes): finish the §18 exercises not done in class, plus one recorded production task from §18; the §20 bookings themselves run in the next lessons' Station 0. | policy | [REF:whitney1889 §266]; [REF:whitney1889 §189]; [REF:whitney1889 §301]; [REF:whitney1889 §327]; [REF:hitopadesha mitralābha]; [REF:laghukaumudi 118] | Each drafter prints only its own lesson's line. |

### 0.A Table T1 — the a-stem singular (Whitney §330, checked cell by cell)

| विभक्तिः | m. रामः | m. देवः | n. फलम् | ending | ṇ? |
|---|---|---|---|---|---|
| प्रथमा nom. | रामः rāmaḥ | देवः devaḥ | फलम् phalam | -ः (m.) · -म् (n.) | — |
| द्वितीया acc. | रामम् rāmam | देवम् devam | फलम् phalam | -म् | — |
| तृतीया instr. | रामे**ण** rāme**ṇ**a | देवेन devena | फलेन phalena | -एन / -एण | **ṇ after र्** |
| चतुर्थी dat. | रामाय rāmāya | देवाय devāya | फलाय phalāya | -आय | — |
| पञ्चमी abl. | रामात् rāmāt | देवात् devāt | फलात् phalāt | -आत् | — |
| षष्ठी gen. | रामस्य rāmasya | देवस्य devasya | फलस्य phalasya | -स्य | — |
| सप्तमी loc. | रामे rāme | देवे deve | फले phale | -े | — |
| सम्बोधनम् voc. | राम rāma (हे राम he rāma) | देव deva (हे देव he deva) | फल phala (हे फल he phala) | bare stem | — |

Whitney's देव column (§330): देवस् (= देवः at pause), देवम्, देवेन, देवाय, देवात्, देवस्य,
देवे, देव — identical. His neuter आस्य: आस्यम्, आस्यम्, आस्येन, आस्याय, आस्यात्, आस्यस्य,
आस्ये, आस्य — the neuter pattern of फलम्. IPA (STYLE_GUIDE §2): रामः /ɾɑːmɐh/ · रामम्
/ɾɑːmɐm/ · रामेण /ɾɑːmeːɳɐ/ · देवेन /d̪eːʋeːn̪ɐ/ · रामाय /ɾɑːmɑːjɐ/ · रामात् /ɾɑːmɑːt̪/ ·
रामस्य /ɾɑːmɐsjɐ/ · रामे /ɾɑːmeː/ · राम /ɾɑːmɐ/ · फलम् /pʰɐlɐm/ · फलेन /pʰɐleːn̪ɐ/ · फलाय
/pʰɐlɑːjɐ/ · फलात् /pʰɐlɑːt̪/ · फलस्य /pʰɐlɐsjɐ/ · फले /pʰɐleː/.

### 0.B The asker and the answer word, singular (Whitney §§504, 495, 491)

| विभक्तिः | asker m. | asker n. | answer m. | answer n. | I | you |
|---|---|---|---|---|---|---|
| प्रथमा | कः kaḥ | किम् kim | सः saḥ | तत् tat | अहम् aham | त्वम् tvam |
| द्वितीया | कम् kam | किम् kim | तम् tam | तत् tat | माम् mām | त्वाम् tvām |
| तृतीया | केन kena | (as m.) | तेन tena | (as m.) | मया mayā | त्वया tvayā |
| चतुर्थी | कस्मै kasmai | (as m.) | तस्मै tasmai | (as m.) | मह्यम् mahyam | तुभ्यम् tubhyam |
| पञ्चमी | कस्मात् kasmāt · कुतः kutaḥ | (as m.) | तस्मात् tasmāt | (as m.) | (मत्: c05.l01) | (त्वत्: c05.l01) |
| षष्ठी | कस्य kasya | (as m.) | तस्य tasya | (as m.) | मम mama | तव tava |
| सप्तमी | कस्मिन् kasmin · कुत्र kutra | (as m.) | तस्मिन् tasmin | (as m.) | (मयि: c05.l01) | (त्वयि: c05.l01) |

कुतः and कुत्र are adverbs, not cells: कुतः "from where" (the -तः family, Whitney §1098a; MW
s.v. kutas: "for the abl. case of ka"), कुत्र "where? whereto?" (MW s.v. kutra; Apte s.v.
कुत्र: "where, in which place"). With गच्छति, कुत्र asks "where to?" and is answered in the
accusative (कुत्र गच्छसि? — विद्यालयम्।). IPA: कः /kɐh/ · कम् /kɐm/ · केन /keːn̪ɐ/ · कस्मै
/kɐsmɐi̯/ · कस्मात् /kɐsmɑːt̪/ · कस्य /kɐsjɐ/ · कस्मिन् /kɐsmin̪/ · तेन /t̪eːn̪ɐ/ · तस्मै
/t̪ɐsmɐi̯/ · तस्मात् /t̪ɐsmɑːt̪/ · तस्मिन् /t̪ɐsmin̪/ · माम् /mɑːm/ · त्वाम् /t̪ʋɑːm/ · मया
/mɐjɑː/ · त्वया /t̪ʋɐjɑː/.

### 0.C The ṇ sort — three columns (Whitney §189; 8.4.1–2, 8.4.37 in Teacher Notes)

Every word below is owned by the time it is sorted (lesson id of first ownership given).

| trigger, not blocked → -एण | no trigger → -एन | trigger, blocked → -एन |
|---|---|---|
| रामेण rāmeṇa (v1.c04.l01) · पुत्रेण putreṇa (v1.c05.l03) · मित्रेण mitreṇa (v1.c05.l03) · वृक्षेण vṛkṣeṇa (v2.c02.l03) · मृगेण mṛgeṇa (v3.c01.l01) · मूषकेण mūṣakeṇa (v2.c06.l02) · गृहेण gṛheṇa (v1.c04.l03) · ग्रामेण grāmeṇa (v1.c05.l04) · छात्रेण chātreṇa (v1.c06.l02) · शिष्येण śiṣyeṇa (v1.c01.l01) · मार्गेण mārgeṇa (v3.c01.l01) · तीरेण tīreṇa (v3.c01.l02) · विवरेण vivareṇa (v3.c01.l02) · पुष्पेण puṣpeṇa (v2.c02.l03) · क्षीरेण kṣīreṇa (v2.c04.l03) · नृपेण nṛpeṇa (v3.c01.l04) | देवेन devena (v1.c04.l01) · हस्तेन hastena (v1.c05.l02) · जालेन jālena (v2.c06.l02) · दण्डेन daṇḍena (v3.c01.l03) · कपोतेन kapotena (v3.c01.l01) · शशकेन śaśakena (v3.c01.l03) · व्याधेन vyādhena (v3.c01.l01) · बालकेन bālakena (v1.c03.l05) · सिंहेन siṃhena (v2.c06.l02) · काकेन kākena (v2.c06.l01) · घटेन ghaṭena (v1.c03.l03) · अन्नेन annena (v2.c04.l03) · पुस्तकेन pustakena (v1.c06.l03) · फलेन phalena (v1.c03.l05) · सेवकेन sevakena (v3.c01.l04) | रथेन rathena (थ; v3.c01.l03) · पर्वतेन parvatena (त; v1.c05.l04) · अर्जुनेन arjunena (ज; v2.c04.l04) · पाषाणेन pāṣāṇena (ण; v2.c06.l01) · वचनेन vacanena (no trigger: व is not र; keep out of the sort) |

Each derivation re-checked: in मृगेण the ग (क-row) does not block; in शिष्येण the य does not
block; in ग्रामेण the आ and the म (प-row) do not block; in पुष्पेण the प does not block; in
वृक्षेण the क्ष is क + ष, and ष is itself a trigger; in क्षीरेण both ष and र trigger. In
हस्तेन and पुस्तकेन the स is dental स, not ष: no trigger. In दण्डेन the ण of the stem is not a
trigger (only र, ऋ, ष are). In अर्जुनेन the ज blocks; in पाषाणेन the ट-row ण blocks; in
पर्वतेन the त blocks (the व before it would not). **वचनेन is removed from the "blocked"
column**: it has no trigger at all (no र, ऋ or ष) and belongs in the middle column; it is
listed here only to warn drafters. **The l03 sort (S0-f and l03 Ex 2) uses exactly these 20
words, 8 · 8 · 4:** रामेण, पुत्रेण, मित्रेण, वृक्षेण, मृगेण, मूषकेण, गृहेण, ग्रामेण · देवेन,
हस्तेन, जालेन, दण्डेन, कपोतेन, शशकेन, व्याधेन, सिंहेन · रथेन, पर्वतेन, अर्जुनेन, पाषाणेन. The
learner is given the 20 stems (राम, पुत्र …) in a shuffled list, not the instrumentals.

### 0.D Hindi parallels at a glance (0.26; the l01–l04 sections use only their own rows)

| Sanskrit | job | Hindi | the contrast |
|---|---|---|---|
| व्याधः मृगम् पश्यति | done-to | शिकारी हिरन **को** देखता है | Hindi को for a definite/animate object; Sanskrit -म् for every masculine singular object |
| अहम् फलम् खादामि | done-to | मैं फल खाता हूँ | no को in Hindi; -म् in Sanskrit (neuter: the nominative too) |
| छात्रः विद्यालयम् गच्छति | goal | छात्र स्कूल जाता है | both bare: no postposition, no preposition |
| वने · वृक्षे | place | वन **में** · पेड़ **पर** | one Sanskrit ending, two Hindi postpositions |
| सोमवासरे | time | सोमवार **को** | Hindi को; Sanskrit locative |
| वृक्षात् | from | पेड़ **से** | se = the ablative here … |
| दण्डेन | with (means) | छड़ी **से** | … and the instrumental here: one Hindi word, two Sanskrit cases |
| मित्रेण सह | with (company) | दोस्त **के साथ** | के साथ = सह + instrumental |
| रामाय फलम् ददाति | to (recipient) | राम **को** फल देता है | Hindi को again; Sanskrit dative, not accusative |
| रामाय नमः | homage to | राम को नमस्कार | Hindi को; Sanskrit dative (2.3.16) |
| मह्यम् रोचते | the one pleased | मुझे अच्छा लगता है / मुझे पसंद है | मुझे = मुझको; Sanskrit dative (v2.c05.l03's bridge) |
| रामस्य गृहम् · रामस्य माता | of | राम **का** घर · राम **की** माँ | Hindi का/की/के agree with the possessed; -स्य never changes |
| मम पुस्तकम् अस्ति | possession | मेरे पास पुस्तक है | genitive + अस्ति, never *अहम् पुस्तकम् अस्ति |
| हे राम! | calling | हे राम! | the same bare name |

---

## 1. L1 — कः किम् — कर्ता कर्म च: Who and What (grammar)

**Front matter.** id `v3.c01.l01` · file `curriculum/volume-3/chapter-01/lesson-01-who-and-what.md`
· title sa कः किम् — कर्ता कर्म च · sa_iast *kaḥ kim — kartā karma ca* · en "Who and What:
the Doer and the Done-to" · hi "कौन और क्या — कर्ता और कर्म" · lesson_type: grammar · cefr A2 ·
duration_minutes 45 · self_study_minutes 35 · prerequisites [v2.c06.l05] · review_of
[v2.c06.l05, v2.c06.l01, v2.c06.l02, v2.c04.l04, v1.c06.l03] · vocabulary_count 8 (7
ledger-new + 1 upgrade) · tags [grammar, cases, nominative, accusative, kāraka, question-words,
word-order, pronouns, hindi-bridge, serial, spaced-review] · media (planned): images
`v3c01l01-who-sees-whom.svg`, `v3c01l01-two-jobs.svg`; audio `v3c01l01-endings-drill.mp3`,
`v3c01l01-story.mp3`; worksheets `v3c01l01-shuffle-cards.pdf`.

**Objectives (front matter `objectives`, en + hi).**
1. en "From owned pairs — विद्यालयः/विद्यालयम्, मूषकः/मूषकम्, अहम्/माम् — state the pattern:
   the doer (कर्ता) stands in the nominative (प्रथमा, -ः), the done-to and the goal (कर्म) in
   the accusative (द्वितीया, -म्); and name both in any sentence from the endings alone,
   whatever the word order." · hi "अपने ही जोड़ों — विद्यालयः/विद्यालयम्, मूषकः/मूषकम्,
   अहम्/माम् — से नियम बताएँ: कर्ता प्रथमा में (-ः), कर्म और गन्तव्य द्वितीया में (-म्); और किसी भी
   वाक्य में, शब्द-क्रम कुछ भी हो, केवल अन्त देखकर दोनों को पहचानें।"
2. en "Produce the nominative and accusative singular of any masculine or neuter a-stem
   noun, including the goal of motion (ग्रामम् गच्छति) and the two objects of नयति and
   पृच्छति, knowing that a neuter shows one form for both jobs (फलम्)." · hi "किसी भी अकारान्त
   पुल्लिंग या नपुंसकलिंग संज्ञा के प्रथमा और द्वितीया एकवचन रूप बनाएँ — गन्तव्य (ग्रामम् गच्छति) और
   नयति, पृच्छति के दोनों कर्म भी — यह जानते हुए कि नपुंसक संज्ञा दोनों कामों के लिए एक ही रूप
   दिखाती है (फलम्)।"
3. en "Ask with कः, कम् and किम् and answer in one word in the matching case; replace nouns
   with सः/तम्/तत् and use माम् and त्वाम्." · hi "कः, कम् और किम् से प्रश्न पूछें और मेल खाती
   विभक्ति के एक शब्द में उत्तर दें; संज्ञाओं की जगह सः/तम्/तत् रखें, और माम्, त्वाम् का प्रयोग
   करें।"
4. en "State the Hindi contrast exactly: Hindi को marks a definite object and also a
   recipient, an indefinite thing has no को, and the goal of जाना is bare; Sanskrit marks
   every masculine singular object with -म्." · hi "हिन्दी से अन्तर ठीक-ठीक बताएँ: हिन्दी का को निश्चित
   कर्म और पाने वाले दोनों पर लगता है, अनिश्चित वस्तु पर को नहीं लगता, और जाना का गन्तव्य बिना
   परसर्ग आता है; संस्कृत एकवचन के हर पुल्लिंग कर्म पर -म् लगाती है।"

**The one grammar point.** The accusative (द्वितीया) marks the done-to (कर्म) and the goal
of motion; the nominative (प्रथमा) marks the doer (कर्ता). A neuter has one form for both.

**Forms taught** (Whitney §330; pronoun cells §§491, 495, 504): T1 rows प्रथमा and
द्वितीया (0.A) for रामः, देवः, फलम्; asker and answer rows of 0.B for प्रथमा, द्वितीया; माम्
(owned chunk, now a cell), त्वाम् (new cell). Cells drilled: **14** (2 cases × रामः, फलम्, कः,
किम्, सः, तत् = 12, + माम्, त्वाम्). Paradigm ledger at the end of §15: T1 — प्रथमा, द्वितीया ✓;
the other six rows ○ (named, with their lessons); कः/किम्, सः/तत्: nom./acc. ✓; अहम्/त्वम्:
acc. ✓.

**Headwords** (§14; Apte and MW checked; ledger status by grep of the 764-row ledger):

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status |
|---|---|---|---|---|---|---|
| मृगः | mṛgaḥ | /mr̩gɐh/ | deer; wild animal | हिरन, मृग; वन-पशु | m. a-stem | ledger-new — Apte s.v. मृगः "a quadruped, an animal in general"; MW s.v. mṛga "a forest animal … (esp.) a deer" |
| व्याधः | vyādhaḥ | /ʋjɑːd̪ʱɐh/ | hunter | बहेलिया, शिकारी | m. a-stem | ledger-new — Apte s.v. व्याधः "a hunter, fowler"; MW s.v. vyādha |
| कपोतः | kapotaḥ | /kɐpoːt̪ɐh/ | dove, pigeon | कबूतर | m. a-stem | ledger-new — Apte s.v. कपोतः "a dove, pigeon"; MW s.v. kapota |
| मार्गः | mārgaḥ | /mɑːɾgɐh/ | path, road, way | मार्ग, रास्ता | m. a-stem | ledger-new — Apte s.v. मार्गः "a way, road, path"; MW s.v. mārga |
| नयति | nayati | /n̪ɐjɐt̪i/ | leads, carries (takes two accusatives) | ले जाता है | verb, thematic | ledger-new — Apte s.v. नी "one of the roots that govern two accusatives" |
| पृच्छति | pṛcchati | /pr̩t͡ɕt͡ɕʰɐt̪i/ | asks (takes two accusatives) | पूछता है | verb, thematic | ledger-new — Apte s.v. प्रच्छ् "pṛcchati … to ask, question"; Whitney §277 |
| त्यजति | tyajati | /t̪jɐd͡ʑɐt̪i/ | leaves, abandons | छोड़ता है, त्यागता है | verb, thematic | ledger-new — Apte s.v. त्यज् "to leave (in all senses), abandon, quit" |
| ग्रामः | grāmaḥ | /gɾɑːmɐh/ | village | गाँव | m. a-stem | **upgrade** (ग्राम, v1.c05.l04) |

Review rows in sentence dress (no §14 row, or a review row if drafted): रामः, देवः, फलम्,
छात्रः, विद्यालयः, शिष्यः, गुरुः, मूषकः, सिंहः, जालम्, वृक्षः, पुस्तकम्, जलम्, वनम्; verbs पश्यति,
गच्छति, पठति, खादति, पिबति, गृह्णाति, मुञ्चति. §12/§13 note: त्यजति "leaves, abandons" vs the
owned मुञ्चति "lets go, releases" — a hunter leaves (त्यजति) the road; a lion lets go
(मुञ्चति) of a mouse. **Ledger line (§14 opening):** "7 ledger-new · 1 upgrade · ledger 360 →
367 · cells drilled: 14."

**Six-step material (§8 / §15).**

1. *Scene in sentences* (the hook picture: a hunter, a deer, a dove, a road):
   व्याधः मृगम् पश्यति। (vyādhaḥ mṛgam paśyati.) "The hunter sees the deer." · मृगः व्याधम् न
   पश्यति। (mṛgaḥ vyādham na paśyati.) "The deer does not see the hunter." · मृगम् व्याधः
   पश्यति। (mṛgam vyādhaḥ paśyati.) "The hunter sees the deer." — the same scene in a new
   order, and the same meaning.
2. *The question:* who does it, and to whom? English answers with word order; Sanskrit
   answers with the ending. Asker pair: कः? "who?" (owned v1.c02.l06) and कम्? "whom?".
3. *Owned forms that already answer it* (the evidence table):

| owned sentence | where owned | doer (-ः) | done-to / goal (-म्) |
|---|---|---|---|
| विद्यालयः (the name) · सः विद्यालयम् चलति। | v1.c06.l01 · v1.c06.l03 passage line 4 | सः | विद्यालयम् (goal) |
| अर्जुनः विद्यालयम् गच्छति। सः गृहम् गच्छति। | v2.c04.l04 | अर्जुनः, सः | विद्यालयम्, गृहम् (goals) |
| एकः मूषकः सिंहस्य उपरि चलति। … सः मूषकम् गृह्णाति। | v2.c06.l02 lines 2, 4 | मूषकः, सः | मूषकम् |
| सः एकम् घटम् पश्यति। · सः एकम् पाषाणम् घटे क्षिपति। | v2.c06.l01 lines 4, 6 (घटः, पाषाणः are its headwords) | सः | घटम्, पाषाणम् |
| मूषकः वदति — माम् मुञ्च! अहम् अपि तव मित्रम्। | v2.c06.l02 line 5 | अहम् | माम् |
| सः पुस्तकम् पठति। · एतत् पुस्तकम्। | v1.c06.l03 (passage line 5; §6) | सः | पुस्तकम् — and the same form when the book is named (एतत् पुस्तकम्) |
| फलम् खादति। · फलम् मह्यम् रोचते। | v2.c04.l01 · v2.c05.l03 | — · फलम् (the thing that pleases is the doer) | फलम् (done-to) |
| जलम् पिबति। · जलम् उपरि आगच्छति। | v2.c04.l01 · v2.c06.l01 line 8 | जलम् (comes up) | जलम् (drunk) |

   Masculine pairs show two shapes (मूषकः/मूषकम्, विद्यालयः/विद्यालयम्, घटः/घटम्, अहम्/माम्);
   the neuter rows show one shape doing both jobs.
4. *The pattern named:* the doer's case is प्रथमा (the "first" case), the done-to's द्वितीया
   ("second"). Their jobs: कर्ता and कर्म (0.12). The goal of motion is a कर्म too: विद्यालयम्
   गच्छति. Masculine: -ः → -म्. Neuter: -म् for both. The verb's -ति stays the same whoever
   the doer is in the 3rd person (v2.c04 pattern).
5. *The learner assembles the table* (two rows of 0.A and 0.B), filling रामः/रामम्,
   देवः/देवम्, फलम्/फलम्, कः/कम्, किम्/किम्, सः/तम्, तत्/तत्, अहम्/माम्, त्वम्/त्वाम् from the
   evidence. Preview label (one line, ○): "सः/तम् and कः/कम् share the endings of रामः/रामम्;
   the rest of the pronoun table is c05.l02." Suppletion line: "सः and तम् are two stems, not
   a sound change (c05.l02)."
6. *Production:* the shuffle drill, the asker drill, the picture description (exercises 1–8).

**Model sentences (§13, pause form; plan's six, verified):**
1. व्याधः मृगम् पश्यति। (vyādhaḥ mṛgam paśyati.) "The hunter sees the deer." — शिकारी हिरन को देखता है।
2. कः मृगम् पश्यति? — व्याधः। (kaḥ mṛgam paśyati? — vyādhaḥ.) "Who sees the deer? — The hunter." — हिरन को कौन देखता है? — शिकारी।
3. व्याधः कम् पश्यति? — मृगम्। (vyādhaḥ kam paśyati? — mṛgam.) "Whom does the hunter see? — The deer." — शिकारी किसे देखता है? — हिरन को।
4. छात्रः विद्यालयम् गच्छति। (chātraḥ vidyālayam gacchati.) "The student goes to school." — छात्र स्कूल जाता है।
5. व्याधः मृगम् ग्रामम् नयति। (vyādhaḥ mṛgam grāmam nayati.) "The hunter leads the deer to the village." — शिकारी हिरन को गाँव ले जाता है। (two accusatives; Teacher Notes: the Laghukaumudī's ग्रामम् अजाम् नयति, 0.11)
6. गुरुः शिष्यम् नाम पृच्छति। (guruḥ śiṣyam nāma pṛcchati.) "The teacher asks the student his name." — गुरु शिष्य से उसका नाम पूछते हैं। (Hindi uses से for the person asked: a third use of से, noted in Teacher Notes only.)

   Extra §13 lines (all owned or today's words): किम् पठसि? — पुस्तकम्। (kim paṭhasi? —
   pustakam.) "What are you reading? — A book." · कः त्वाम् पश्यति? — गुरुः माम् पश्यति। (kaḥ
   tvām paśyati? — guruḥ mām paśyati.) "Who sees you? — The teacher sees me." · सः तम्
   पश्यति। (saḥ tam paśyati.) "He sees him." · कपोतः मार्गम् त्यजति। (kapotaḥ mārgam tyajati.)
   "The dove leaves the road." · पुस्तकम् अस्ति। छात्रः तत् पठति। (pustakam asti. chātraḥ tat
   paṭhati.) "There is a book. The student reads it."

**§16 Conversation** (two friends, a picture book; 12 turns; pause form):

1. रामः — पश्य! एषः कः? (paśya! eṣaḥ kaḥ?) "Look! Who is this?"
2. अर्जुनः — एषः व्याधः। (eṣaḥ vyādhaḥ.) "This is a hunter."
3. रामः — व्याधः किम् नयति? (vyādhaḥ kim nayati?) "What is the hunter carrying?"
4. अर्जुनः — जालम्। (jālam.) "A net."
5. रामः — सः कम् पश्यति? (saḥ kam paśyati?) "Whom does he see?"
6. अर्जुनः — मृगम्। व्याधः मृगम् पश्यति। (mṛgam. vyādhaḥ mṛgam paśyati.) "The deer. The hunter sees the deer."
7. रामः — मृगः व्याधम् पश्यति? (mṛgaḥ vyādham paśyati?) "Does the deer see the hunter?"
8. अर्जुनः — न। मृगः कपोतम् पश्यति। (na. mṛgaḥ kapotam paśyati.) "No. The deer sees a dove."
9. रामः — त्वम् किम् पश्यसि? (tvam kim paśyasi?) "What do you see?"
10. अर्जुनः — अहम् मार्गम् पश्यामि। व्याधः मार्गम् त्यजति। सः वनम् गच्छति। (aham mārgam paśyāmi. vyādhaḥ mārgam tyajati. saḥ vanam gacchati.) "I see the road. The hunter leaves the road. He goes into the forest."
11. रामः — त्वम् माम् पश्यसि? (tvam mām paśyasi?) "Do you see me?"
12. अर्जुनः — आम्। अहम् त्वाम् पश्यामि! (ām. aham tvām paśyāmi!) "Yes. I see you!"

(एषः, पश्य, आम्, वनम् owned: v2.c02.l02, v1.c05.l05, v1.c05.l01, v1.c04.l01.)

**§17 Story — serial episode 1, part 1: व्याधः "The Hunter"** — label: "our retelling, after
Hitopadeśa 1 (Mitralābha)".

1. एकः व्याधः अस्ति। (ekaḥ vyādhaḥ asti.) "There is a hunter."
2. सः जालम् नयति। (saḥ jālam nayati.) "He carries a net."
3. व्याधः मार्गम् त्यजति। (vyādhaḥ mārgam tyajati.) "The hunter leaves the road."
4. सः वनम् गच्छति। (saḥ vanam gacchati.) "He goes into the forest."
5. व्याधः वृक्षम् पश्यति। (vyādhaḥ vṛkṣam paśyati.) "The hunter sees a tree."
6. सः कपोतम् अपि पश्यति। (saḥ kapotam api paśyati.) "He sees a dove too."
7. कपोतः व्याधम् न पश्यति। (kapotaḥ vyādham na paśyati.) "The dove does not see the hunter."
8. व्याधः हसति। (vyādhaḥ hasati.) "The hunter laughs."
9. कः व्याधम् पश्यति? (kaḥ vyādham paśyati?) "Who sees the hunter?"
10. मूषकः! मूषकः व्याधम् पश्यति। (mūṣakaḥ! mūṣakaḥ vyādham paśyati.) "The mouse! The mouse sees the hunter."
11. सः जालम् अपि पश्यति। (saḥ jālam api paśyati.) "He sees the net too."

Every noun is nominative or accusative; the plan's three lines (व्याधः वनम् गच्छति। सः जालम्
नयति। कपोतः व्याधम् न पश्यति।) are lines 4, 2 and 7 (line 4 with सः for व्याधः).

**§3 Station 0 (runs S0-a, verbatim):** "+1 week: one story retold cold and one role-card
conversation — v3.c01.l01's Station 0 runs exactly this." — the learner retells the thirsty
crow or the lion and the mouse in six or more pause-form sentences with no page, and runs
one v2.c05 role card in five moves. Then the bridge: "Underline every word in your retelling
that ends in -म्. Who is doing, and what is done-to?" **Prompts (3–5):** (1) v1.c06.l03 —
why does विद्यालयः become विद्यालयम् in the passage? (that lesson's own answer: a word's ending
shifts with its role); (2) v2.c06.l02 — say line 4 and line 7 of the lion story (सः मूषकम्
गृह्णाति। सः मूषकम् मुञ्चति।); (3) v2.c04.l04 — say Arjuna's first two moves of the day
(अर्जुनः विद्यालयम् गच्छति। सः पुस्तकम् पठति।); (4) v2.c06.l01 — the thirsty crow's line 4
(सः एकम् घटम् पश्यति।). Keys: as given.

**§20 Bookings (verbatim):** S0-b (+1 day, run by l02) and S0-c (+1 week, run by l03), 0.30.

**§9–§11 (connected speech):** the endings heard clearly. The final visarga /h/ of the
doer against the closed lips of -म् /m/: रामः /ɾɑːmɐh/ · रामम् /ɾɑːmɐm/; व्याधः · व्याधम्;
कः · कम्; सः · तम्. Minimal-pair listening (eight pairs), then the dictation pairs; mouth
position: for -म् the lips close and stay closed; for ः an unvoiced breath after a full
/ɐ/ (the recitation echo-vowel [ɾɑːmɐhɐ] is TRADITION, STYLE_GUIDE §2.1). The neuter फलम्
sounds the same in both jobs: the ear cannot decide, the sentence decides. Rhythm: a
pause-form sentence is said word by word, each final sound complete (no seam yet).

**§12 Common mistakes (rows):** (1) English word-order reflex: reading मृगम् व्याधः पश्यति as
"the deer sees the hunter" — fix: find the -ः first. (2) The goal without -म्: *अहम्
विद्यालयः गच्छामि — fix: the goal is a कर्म, -म्. (3) A neuter doer given -ः: *फलः अस्ति,
*पुस्तकः अस्ति — fix: a neuter's doer form is -म्. (4) The Hindi मुझे trap: *गुरुः मह्यम्
पश्यति for "गुरु मुझे देखते हैं" — fix: मुझे there is the object, माम्; मह्यम् is "to me" of
giving and liking (v2.c05.l03; l03). (5) A pronoun object left in the doer's form: *व्याधः सः
पश्यति "the hunter sees him" — fix: तम्. (6) Schwa deletion: "vyādh", "rām" for व्याधः,
रामम् — fix: every final sound full (STYLE_GUIDE §1.1).

**§18 Exercises (≥ 6 items per objective; keys):**

- *Ex 1 (obj. 1, recognition → production of the labels): name the doer and the done-to.*
  a. मृगम् व्याधः पश्यति। b. कपोतम् मूषकः पश्यति। c. गुरुः शिष्यम् पृच्छति। d. शिष्यम् गुरुः
  पृच्छति। e. पुस्तकम् छात्रः पठति। f. जलम् काकः पिबति। g. सिंहः मूषकम् मुञ्चति। h. मार्गम्
  त्यजति व्याधः। — Key: doer व्याधः, मूषकः, गुरुः, गुरुः, छात्रः, काकः, सिंहः, व्याधः; done-to
  मृगम्, कपोतम्, शिष्यम्, शिष्यम्, पुस्तकम्, जलम्, मूषकम्, मार्गम्.
- *Ex 2 (obj. 2): put the bracketed word in the right form.* a. व्याधः ___ (मृग) पश्यति। b.
  ___ (कपोत) वृक्षम् पश्यति। c. छात्रः ___ (ग्राम) गच्छति। d. काकः ___ (जल) इच्छति। e. ___
  (जल) उपरि आगच्छति। f. व्याधः मृगम् ___ (ग्राम) नयति। g. गुरुः ___ (शिष्य) नाम पृच्छति। h.
  ___ (कपोत) मार्गम् त्यजति। — Key: मृगम्, कपोतः, ग्रामम्, जलम्, जलम्, ग्रामम्, शिष्यम्, कपोतः.
- *Ex 3 (obj. 3): ask the question that the bold word answers, then answer in one word.*
  a. **व्याधः** मृगम् पश्यति। b. व्याधः **मृगम्** पश्यति। c. छात्रः **पुस्तकम्** पठति। d.
  **सिंहः** मूषकम् गृह्णाति। e. सिंहः **मूषकम्** गृह्णाति। f. मूषकः **जालम्** कृन्तति। g.
  अर्जुनः **विद्यालयम्** गच्छति। — Key: a. कः मृगम् पश्यति? — व्याधः। b. व्याधः कम् पश्यति? —
  मृगम्। c. छात्रः किम् पठति? — पुस्तकम्। d. कः मूषकम् गृह्णाति? — सिंहः। e. सिंहः कम्
  गृह्णाति? — मूषकम्। f. मूषकः किम् कृन्तति? — जालम्। g. अर्जुनः कुत्र गच्छति? — विद्यालयम्।
  (कुत्र "whereto" with गच्छति, 0.B.)
- *Ex 4 (obj. 3): replace the nouns with सः/तम्/तत्.* a. व्याधः मृगम् पश्यति। b. छात्रः
  पुस्तकम् पठति। c. कपोतः व्याधम् न पश्यति। d. सिंहः मूषकम् मुञ्चति। e. मूषकः जालम् कृन्तति।
  f. काकः घटम् पश्यति। — Key: सः तम् पश्यति। · सः तत् पठति। · सः तम् न पश्यति। · सः तम्
  मुञ्चति। · सः तत् कृन्तति। · सः तम् पश्यति।
- *Ex 5 (obj. 2, 4): which -म् is the doer?* a. पुस्तकम् अस्ति। b. जलम् उपरि आगच्छति। c.
  फलम् मह्यम् रोचते। d. काकः जलम् पिबति। e. बालकः फलम् खादति। f. मूषकः जालम् कृन्तति। —
  Key: doer in a, b, c; done-to in d, e, f.
- *Ex 6 (obj. 4, production): Hindi → Sanskrit.* a. शिकारी हिरन को देखता है। b. छात्र
  स्कूल जाता है। c. मैं फल खाता हूँ। d. गुरु मुझे देखते हैं। e. वह तुम्हें देखता है। f.
  कबूतर रास्ता छोड़ता है। — Key: व्याधः मृगम् पश्यति। · छात्रः विद्यालयम् गच्छति। · अहम् फलम्
  खादामि। · गुरुः माम् पश्यति। · सः त्वाम् पश्यति। · कपोतः मार्गम् त्यजति। Then the contrast
  line for each: को in a, d, e and none in b, c, f; -म् in all six.
- *Ex 7 (obj. 1, 2; speaking, recorded): the picture.* Six sentences about the hook
  picture, each with a doer and a done-to; then a partner asks three कः/कम्/किम् questions.
  Rubric: six sentences; every masculine object in -म्; questions answered in one word.
- *Ex 8 (obj. 1; production): the shuffle.* Take §13's sentences 1, 4, 5, 6: say each in
  two other orders; the partner names doer and done-to. Key: meaning unchanged in every
  order.

**§19 Quiz (10; key in `<details>`; register per item):**
1. In मृगम् व्याधः पश्यति, who sees? (a) the deer (b) the hunter (c) both (d) it cannot be
   told — **b** · FACT.
2. The accusative of कपोतः is: (a) कपोतः (b) कपोतम् (c) कपोत (d) कपोताम् — **b** · FACT.
3. Which is wrong? (a) फलम् अस्ति (b) फलः अस्ति (c) बालकः फलम् खादति (d) फलम् मह्यम् रोचते —
   **b** · FACT.
4. Why is पुस्तकम् the same in पुस्तकम् अस्ति and छात्रः पुस्तकम् पठति? (a) it is neuter: the
   nominative and accusative are one form (b) अस्ति takes an object (c) it is a mistake (d)
   books are never doers — **a** · FACT.
5. व्याधः कम् पश्यति? (मृगः) — the one-word answer: (a) मृगः (b) मृगम् (c) मृग (d) व्याधः —
   **b** · FACT.
6. "He goes to the village": (a) सः ग्रामः गच्छति (b) सः ग्रामम् गच्छति (c) तम् ग्रामम्
   गच्छति (d) सः ग्राम गच्छति — **b** · FACT.
7. "Whom do you see?": (a) त्वम् कः पश्यसि? (b) त्वम् कम् पश्यसि? (c) त्वाम् कम् पश्यसि? (d)
   त्वम् कम् पश्यति? — **b** · FACT.
8. According to Pāṇini's grammar, the doer's job is called: (a) कर्म (b) कर्ता (c) करणम् (d)
   प्रथमा — **b** · TRADITION ("According to Pāṇini…").
9. In "गुरु मुझे देखते हैं", मुझे is in Sanskrit: (a) मह्यम् (b) माम् (c) मम (d) अहम् — **b** ·
   FACT.
10. "The teacher asks the student his name": (a) गुरुः शिष्यम् नाम पृच्छति (b) गुरुः शिष्यः
    नाम पृच्छति (c) गुरुम् शिष्यः नाम पृच्छति (d) गुरुः शिष्यम् नामः पृच्छति — **a** · FACT.

**Teacher Notes points:** 2.3.2 कर्मणि द्वितीया, 1.4.49, 1.4.54 (role sūtras, not
printed in learner text); 1.4.51 with the Laghukaumudī's ग्रामम् अजाम् नयति and माणवकं पन्थानं
पृच्छति (0.11); 2.3.12 the dative of the goal as an option (0.10); the suppletion of सः/त-;
the evidence table can be built live from the class's Station 0 retellings.

---

## 2. L2 — कुत्र कुतः — अधिकरणम् अपादानम् च: Where and From Where (grammar)

**Front matter.** id `v3.c01.l02` · file `lesson-02-where-and-from-where.md` · title sa
कुत्र कुतः — अधिकरणम् अपादानम् च · sa_iast *kutra kutaḥ — adhikaraṇam apādānam ca* · en "Where
and From Where" · hi "कहाँ और कहाँ से — अधिकरण और अपादान" · grammar · A2 · 45 / 35 ·
prerequisites [v3.c01.l01] · review_of [v3.c01.l01, v2.c02.l04, v1.c02.l06, v2.c03.l03] ·
vocabulary_count 7 (7 ledger-new + 0 upgrade) · tags [grammar, cases, locative, ablative,
kāraka, place, time, question-words, hindi-bridge, serial, spaced-review] · media (planned):
images `v3c01l02-in-on-into.svg`, `v3c01l02-from-to-strip.svg`; audio
`v3c01l02-triplets.mp3`, `v3c01l02-story.mp3`.

**Objectives.**
1. en "From owned whole words — वने, घटे, जाले, मुखे, and कुतः beside ततः, इतः, अतः — state
   the pattern: the locative (सप्तमी, -े) answers कुत्र? 'in, on, at, into' and the time
   question, the ablative (पञ्चमी, -आत्) answers कुतः? 'from'; produce both for any
   masculine or neuter a-stem." · hi "अपने पूरे-शब्द रूपों — वने, घटे, जाले, मुखे, और ततः, इतः,
   अतः के साथ कुतः — से नियम बताएँ: सप्तमी (-े) कुत्र? 'में, पर, पास, के अन्दर' और समय के
   प्रश्न का उत्तर है, पञ्चमी (-आत्) कुतः? 'से (अलग होकर)' का; किसी भी अकारान्त पुल्लिंग या
   नपुंसक संज्ञा के दोनों रूप बनाएँ।"
2. en "Say where something is, where it falls or is thrown (कूपे पतति, घटे क्षिपति), when
   something happens (सोमवासरे, प्रभाते), and from where to where (गृहात् विद्यालयम्
   गच्छति)." · hi "बताएँ कि कोई चीज़ कहाँ है, कहाँ गिरती या फेंकी जाती है (कूपे पतति, घटे
   क्षिपति), कुछ कब होता है (सोमवासरे, प्रभाते), और कहाँ से कहाँ तक (गृहात् विद्यालयम्
   गच्छति)।"
3. en "Ask with कुत्र/कस्मिन् and कुतः/कस्मात् and answer in one word, or with तस्मिन् and
   तस्मात्." · hi "कुत्र/कस्मिन् और कुतः/कस्मात् से पूछें और एक शब्द में, या तस्मिन् और
   तस्मात् से, उत्तर दें।"
4. en "State the Hindi contrasts exactly: one Sanskrit locative for Hindi में and पर; Hindi
   सोमवार को beside Sanskrit सोमवासरे; Hindi से for 'from' as the ablative." · hi "हिन्दी से
   अन्तर ठीक-ठीक बताएँ: हिन्दी के में और पर दोनों के लिए संस्कृत की एक सप्तमी; हिन्दी सोमवार को
   और संस्कृत सोमवासरे; 'से (अलग होकर)' के लिए हिन्दी से = पञ्चमी।"

**The one grammar point.** The place cases: the locative (सप्तमी) answers कुत्र? "in, at,
on, into" (अधिकरणम्) and also "when?" for times; the ablative (पञ्चमी) answers कुतः? "from"
(अपादानम्).

**Forms taught:** T1 rows पञ्चमी, सप्तमी (0.A) for रामः, देवः, फलम्; 0.B rows पञ्चमी,
सप्तमी (कस्मात्, कस्मिन्, तस्मात्, तस्मिन्), with कुतः, कुत्र as the owned adverbs. Cells
drilled: **8** (2 cases × रामः, फलम्, asker, answer). Paradigm ledger: T1 — प्रथमा,
द्वितीया, पञ्चमी, सप्तमी ✓; तृतीया, चतुर्थी, षष्ठी, सम्बोधनम् ○; कः, सः: nom., acc., abl., loc. ✓.

**Headwords:**

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status |
|---|---|---|---|---|---|---|
| तीरम् | tīram | /t̪iːɾɐm/ | bank, shore | तट, किनारा | n. a-stem | ledger-new — Apte s.v. तीरं "a shore, bank"; MW s.v. tīra (2) n. "a shore, bank" |
| देशः | deśaḥ | /d̪eːɕɐh/ | country, place, region | देश, स्थान | m. a-stem | ledger-new — Apte s.v. देशः "a place or spot in general"; MW s.v. deśa |
| कूपः | kūpaḥ | /kuːpɐh/ | well | कुआँ | m. a-stem | ledger-new — Apte s.v. कूपः "a well" |
| विवरम् | vivaram | /ʋiʋɐɾɐm/ | hole, burrow, hollow | बिल, छेद | n. a-stem | ledger-new — Apte s.v. विवरं "a fissure, hole, cavity, hollow"; MW s.v. vi-vara (m. n.) |
| पतति | patati | /pɐt̪ɐt̪i/ | falls; flies down, alights | गिरता है; नीचे उतरता है | verb, thematic | ledger-new — Apte s.v. पत् "to fall, fall down, come down, descend, … alight" |
| तिष्ठति | tiṣṭhati | /t̪iʂʈʰɐt̪i/ | stands, stays | खड़ा होता है, ठहरता है | verb, thematic (stem तिष्ठ-; why, v4.c03) | ledger-new — Apte s.v. स्था "tiṣṭhati" |
| निवसति | nivasati | /n̪iʋɐsɐt̪i/ | dwells, lives (+ loc.) | रहता है, निवास करता है | prefixed verb (rule 9) | ledger-new — Apte s.v. निवस्; MW s.v. ni-√vas "to dwell or live or be in (loc.)" |

Note for §14: तीरम् beside the owned synonyms कूल (v1.c02.l02 "bank, shore") and तट (v1.c03.l03
"shore, bank"): three words, one meaning; तीरम् is the Hitopadeśa's (गोदावरीतीरे, 0.31).
देशः is the Hitopadeśa's नानादिग्देशात् "from many lands" (display only in Teacher Notes).
वसामि (v1.c05.l01) is owned, so वसति is pattern-built; निवसति is its own lemma (rule 9).
**Ledger line:** "7 ledger-new · 0 upgrades · ledger 367 → 374 · cells drilled: 8."

**Six-step material.**
1. *Scene:* मृगः वने अस्ति। (mṛgaḥ vane asti.) "The deer is in the forest." · फलम् वृक्षात्
   पतति। (phalam vṛkṣāt patati.) "The fruit falls from the tree." · मूषकः विवरे निवसति।
   (mūṣakaḥ vivare nivasati.) "The mouse lives in a hole."
2. *Questions:* कुत्र? "where?" (owned v2.c02.l04) and कुतः? "from where?" (owned
   v1.c02.l06).
3. *Evidence table:*

| owned form | where owned | what it answers |
|---|---|---|
| एकः सिंहः वने स्वपिति। | v2.c06.l02 line 1 | कुत्र? — वने "in the forest" |
| घटे अल्पम् जलम् अस्ति। | v2.c06.l01 line 5 | कुत्र? — घटे "in the pot" |
| सः एकम् पाषाणम् घटे क्षिपति। | v2.c06.l01 line 6 | कुत्र? — घटे "into the pot" (the place reached) |
| एकदा सिंहः जाले बद्धः भवति। | v2.c06.l02 line 8 | कुत्र? — जाले "in the net" |
| … प्रविशन्ति मुखे मृगाः॥ | v2.c06.l03 (Hit 0.36) | कुत्र? — मुखे "into the mouth" |
| कुतः · ततः · इतः · अतः | v1.c02.l06 | the "from"-words: "from where", "from there, then", "from here", "from this, hence" |
| the "itch" (गृहे, आकाशे) | v2.c02.l04 §15 (named as display) | the locative promised |

   The -े words share one shape; the -तः words share another. The new ending -आत् is what
   a noun does for "from" (कुतः? — ग्रामात्).
4. *The pattern named:* सप्तमी (-े), job अधिकरणम् "the place where"; पञ्चमी (-आत्), job
   अपादानम् "the fixed point something moves away from". Time is a place in time:
   सोमवासरे, प्रभाते. The place reached by falling or throwing is also -े (कूपे पतति, घटे
   क्षिपति); the goal of गच्छति stays -म् (l01).
5. *Table:* the learner fills रामात्/रामे, देवात्/देवे, फलात्/फले, कस्मात्/कस्मिन्,
   तस्मात्/तस्मिन् and writes कुतः, कुत्र beside the asker cells. Preview (○, one line each):
   "कुतः belongs to a family of -तः words (ततः, इतः, अतः): c05.l03." · "For most other stems
   the ablative and genitive singular share one form: c02.l03." · Deferred: the locative
   absolute (v4.c05).
6. *Production:* from–to sentences, the picture triplets, Hindi contrasts (exercises).

**Model sentences (§13; plan's six, verified):**
1. कुत्र मृगः अस्ति? — वने। (kutra mṛgaḥ asti? — vane.) "Where is the deer? — In the forest." — हिरन कहाँ है? — वन में।
2. फलम् वृक्षात् पतति। (phalam vṛkṣāt patati.) "The fruit falls from the tree." — फल पेड़ से गिरता है।
3. बालकः कुतः आगच्छति? — ग्रामात्। (bālakaḥ kutaḥ āgacchati? — grāmāt.) "Where is the boy coming from? — From the village." — लड़का कहाँ से आता है? — गाँव से।
4. छात्रः गृहात् विद्यालयम् गच्छति। (chātraḥ gṛhāt vidyālayam gacchati.) "The student goes from home to school." — छात्र घर से स्कूल जाता है।
5. मूषकः कूपे पतति। (mūṣakaḥ kūpe patati.) "The mouse falls into the well." — चूहा कुएँ में गिरता है। (the locative of the place reached, 0.9)
6. अर्जुनः सोमवासरे विद्यालयम् गच्छति। (arjunaḥ somavāsare vidyālayam gacchati.) "Arjuna goes to school on Monday." — अर्जुन सोमवार को स्कूल जाता है।

   Extra §13 lines: कपोतः वृक्षे अस्ति। (kapotaḥ vṛkṣe asti.) "The dove is on the tree." —
   कबूतर पेड़ पर है। · प्रभाते व्याधः ग्रामात् आगच्छति। (prabhāte vyādhaḥ grāmāt āgacchati.)
   "At dawn the hunter comes from the village." · कस्मिन् कपोतः निवसति? — वृक्षे। (kasmin
   kapotaḥ nivasati? — vṛkṣe.) "In what does the dove live? — In a tree." · वृक्षः तीरे
   अस्ति। तस्मिन् कपोतः निवसति। (vṛkṣaḥ tīre asti. tasmin kapotaḥ nivasati.) "A tree is on the
   bank. In it lives a dove." · कूपः ग्रामे अस्ति। तस्मात् जलम् आगच्छति। (kūpaḥ grāme asti.
   tasmāt jalam āgacchati.) "A well is in the village. From it comes water." · अहम् गृहे
   तिष्ठामि। (aham gṛhe tiṣṭhāmi.) "I stay at home." — मैं घर पर रहता हूँ। · कपोतः देशात् देशम् गच्छति। (kapotaḥ deśāt deśam gacchati.) "The dove goes from place to place." — कबूतर एक स्थान से दूसरे स्थान जाता है।

**§16 Conversation** (father and Arjuna; 12 turns):

1. पिता — त्वम् कुतः आगच्छसि? (tvam kutaḥ āgacchasi?) "Where are you coming from?"
2. अर्जुनः — अहम् विद्यालयात् आगच्छामि। (aham vidyālayāt āgacchāmi.) "I'm coming from school."
3. पिता — तव मित्रम् कुत्र अस्ति? (tava mitram kutra asti?) "Where is your friend?"
4. अर्जुनः — मम मित्रम् आपणे अस्ति। (mama mitram āpaṇe asti.) "My friend is at the shop."
5. पिता — मित्रम् आपणात् कदा आगच्छति? (mitram āpaṇāt kadā āgacchati?) "When does your friend come back from the shop?"
6. अर्जुनः — सायम्। सायम् मित्रम् गृहम् आगच्छति। (sāyam. sāyam mitram gṛham āgacchati.) "In the evening. In the evening my friend comes home."
7. पिता — श्वः त्वम् विद्यालयम् गच्छसि? (śvaḥ tvam vidyālayam gacchasi?) "Are you going to school tomorrow?"
8. अर्जुनः — न। श्वः रविवासरः। रविवासरे अहम् गृहे तिष्ठामि। (na. śvaḥ ravivāsaraḥ. ravivāsare aham gṛhe tiṣṭhāmi.) "No. Tomorrow is Sunday. On Sunday I stay at home."
9. पिता — सोमवासरे किम्? (somavāsare kim?) "And on Monday?"
10. अर्जुनः — सोमवासरे अहम् प्रभाते विद्यालयम् गच्छामि। (somavāsare aham prabhāte vidyālayam gacchāmi.) "On Monday I go to school in the morning."
11. पिता — अहम् अपि सोमवासरे नगरम् गच्छामि। (aham api somavāsare nagaram gacchāmi.) "I'm going to the city on Monday too."
12. अर्जुनः — अस्तु। अहम् नगरात् पुस्तकम् इच्छामि! (astu. aham nagarāt pustakam icchāmi!) "All right. I'd like a book from the city!"

(मित्रम् is neuter: it is not referred to with सः; the dialogue repeats the noun. आपणः,
कदा, सायम्, श्वः, रविवासरः, नगरम्, इच्छति, अस्तु owned: v2.c05.l04, v2.c05.l01, v2.c01.l03,
v2.c03.l03, v2.c03.l04, v2.c02.l03, v2.c05.l03, v2.c05.l02.)

**§17 Story — episode 1, part 2: तीरे वृक्षः "The Tree on the Bank"** (label as above):

1. तीरे एकः वृक्षः अस्ति। (tīre ekaḥ vṛkṣaḥ asti.) "On the bank there is a tree."
2. वृक्षे कपोतः निवसति। (vṛkṣe kapotaḥ nivasati.) "In the tree lives the dove."
3. मूषकः विवरे निवसति। (mūṣakaḥ vivare nivasati.) "The mouse lives in a hole."
4. प्रभाते व्याधः ग्रामात् वनम् आगच्छति। (prabhāte vyādhaḥ grāmāt vanam āgacchati.) "At dawn the hunter comes from the village to the forest."
5. सः मार्गात् तीरम् गच्छति। (saḥ mārgāt tīram gacchati.) "He goes from the road to the bank."
6. व्याधः तीरे तिष्ठति। (vyādhaḥ tīre tiṣṭhati.) "The hunter stands on the bank."
7. कपोतः वृक्षात् व्याधम् पश्यति। (kapotaḥ vṛkṣāt vyādham paśyati.) "From the tree the dove sees the hunter."
8. मूषकः अपि विवरात् व्याधम् पश्यति। (mūṣakaḥ api vivarāt vyādham paśyati.) "The mouse too sees the hunter from its hole."
9. व्याधः जालम् तीरे क्षिपति। (vyādhaḥ jālam tīre kṣipati.) "The hunter throws the net on the bank."
10. कुत्र जालम् अस्ति? — तीरे। (kutra jālam asti? — tīre.) "Where is the net? — On the bank."
11. कपोतः वृक्षे तिष्ठति। (kapotaḥ vṛkṣe tiṣṭhati.) "The dove stays in the tree."

The plan's four lines are 1, 2, 3 and 4 (4 with प्रभाते added). Line 7 is the ablative of
the point seen from (Whitney §291: *vāyur antarikṣād abhāṣata* "the wind spoke from the
sky"). Teacher Notes line: "In the Hitopadeśa the tree is a śālmalī on the Godāvarī and the
mouse lives far off on the Gaṇḍakī; our retelling brings the hole to the tree" (0.31).

**§3 Station 0 (runs S0-b, verbatim, 0.30).** **Prompts:** (1) v3.c01.l01 — the accusative
of कपोतः and of फलम्; why are फलम् and फलम् the same? (2) v2.c02.l04 — कुत्र? in a question
about your home (मम गृहम् कुत्र अस्ति? style answer अत्र / तत्र); (3) v1.c02.l06 — read ततः,
इतः, अतः, कुतः and gloss each; (4) v2.c03.l03 — say "today", "tomorrow", "yesterday"
(अद्य, श्वः, ह्यः) and a fronted time sentence (अद्य प्रभातम्।). Keys as given.

**§20 Bookings:** S0-d (+1 day, run by l03) and S0-e (+1 week, run by l04), verbatim.

**§9–§11:** the dictation triplets रामः · रामम् · रामे (/ɾɑːmɐh/ · /ɾɑːmɐm/ · /ɾɑːmeː/) and
व्याधः · व्याधम् · व्याधे; the long pure /eː/ of the locative (never "ay"), and the locative
-े against the -ते of the owned रोचते and the ते of नमस्ते (the plan's corrected Main-risk
line, G10): रामे ends in /meː/ with no त. The ablative's final त् /t̪/: tongue on the teeth,
held, no added vowel (रामात् not "rāmātā"). कस्मिन् /kɐsmin̪/ and तस्मिन् with a dental final
nasal; कस्मात् and कस्मै not confused (l03 adds कस्मै).

**§12 Common mistakes:** (1) the locative for "from": *ग्रामे आगच्छति for "comes from the
village" — fix: ग्रामात्. (2) the locative for the goal of गच्छति: *विद्यालये गच्छति — fix:
with गच्छति the goal is -म्; with पतति, क्षिपति, निवसति, तिष्ठति the place is -े. (3) the Hindi
को transfer for days: *सोमवासरम् गच्छति — fix: सोमवासरे. (4) choosing between
में and पर: a learner hunting two Sanskrit forms for वन में / पेड़ पर — fix: one locative. (5)
the -े of रामे heard or written as -ते (रामते) — fix: the triplets. (6) final त् dropped or
given a vowel: *रामा, *रामाता — fix: §10.

**§18 Exercises (keys):**
- *Ex 1 (obj. 1): give the ablative and the locative.* वृक्षः · ग्रामः · वनम् · गृहम् ·
  कूपः · तीरम् · देशः · विवरम् — Key: वृक्षात्, वृक्षे · ग्रामात्, ग्रामे · वनात्, वने ·
  गृहात्, गृहे · कूपात्, कूपे · तीरात्, तीरे · देशात्, देशे · विवरात्, विवरे.
- *Ex 2 (obj. 2): fill the right case.* a. फलम् ___ (वृक्ष, from) पतति। b. मूषकः ___
  (विवर) निवसति। c. मूषकः ___ (कूप, into) पतति। d. बालकः ___ (ग्राम, from) आगच्छति। e.
  अर्जुनः ___ (सोमवासर) विद्यालयम् गच्छति। f. ___ (प्रभात) व्याधः आगच्छति। g. छात्रः
  गृहात् ___ (विद्यालय, to) गच्छति। h. काकः पाषाणम् ___ (घट) क्षिपति। — Key: वृक्षात्, विवरे,
  कूपे, ग्रामात्, सोमवासरे, प्रभाते, विद्यालयम् (acc.: the goal), घटे.
- *Ex 3 (obj. 3): ask and answer.* For each, ask with कुत्र or कुतः and answer in one word:
  a. मृगः वने अस्ति। b. बालकः ग्रामात् आगच्छति। c. कपोतः वृक्षे निवसति। d. जलम् कूपात्
  आगच्छति। e. व्याधः तीरे तिष्ठति। f. फलम् वृक्षात् पतति। — Key: कुत्र मृगः अस्ति? — वने। ·
  बालकः कुतः आगच्छति? — ग्रामात्। · कपोतः कुत्र निवसति? — वृक्षे। · जलम् कुतः आगच्छति? —
  कूपात्। · व्याधः कुत्र तिष्ठति? — तीरे। · फलम् कुतः पतति? — वृक्षात्।
- *Ex 4 (obj. 3): continue with तस्मिन् or तस्मात्.* a. वृक्षः तीरे अस्ति। ___ कपोतः
  निवसति। b. कूपः ग्रामे अस्ति। ___ जलम् आगच्छति। c. विवरम् अस्ति। ___ मूषकः निवसति। d.
  वनम् अस्ति। ___ मृगः आगच्छति। e. गृहम् अस्ति। ___ अहम् तिष्ठामि। f. वृक्षः अस्ति। ___
  फलम् पतति। — Key: तस्मिन्, तस्मात्, तस्मिन्, तस्मात्, तस्मिन्, तस्मात्.
- *Ex 5 (obj. 2, production): from–to.* Write five sentences X-ः PLACE-आत् PLACE-म्
  गच्छति from five picture prompts (house → school; village → city; forest → village; road →
  bank; shop → house). Key: छात्रः गृहात् विद्यालयम् गच्छति। · पिता ग्रामात् नगरम् गच्छति। ·
  मृगः वनात् ग्रामम् गच्छति। · व्याधः मार्गात् तीरम् गच्छति। · बालकः आपणात् गृहम् गच्छति।
- *Ex 6 (obj. 4): Hindi → Sanskrit, then name the Hindi postposition.* a. कबूतर पेड़ पर है।
  b. हिरन वन में है। c. चूहा कुएँ में गिरता है। d. लड़का गाँव से आता है। e. अर्जुन सोमवार
  को स्कूल जाता है। f. मैं घर पर रहता हूँ। — Key: कपोतः वृक्षे अस्ति। (पर) · मृगः वने अस्ति।
  (में) · मूषकः कूपे पतति। (में) · बालकः ग्रामात् आगच्छति। (से) · अर्जुनः सोमवासरे विद्यालयम्
  गच्छति। (को) · अहम् गृहे तिष्ठामि। (पर) — पर, में, को all → -े; से → -आत्.
- *Ex 7 (obj. 1–2, speaking): the in/on/into triplets.* Six pictures; one sentence each.
- *Ex 8 (obj. 1, dictation):* रामः · रामम् · रामे; कपोतः · कपोतम् · कपोते; and four
  sentences from §13.

**§19 Quiz:**
1. The locative of वनम्: (a) वनम् (b) वने (c) वनात् (d) वनः — **b** · FACT.
2. The ablative of ग्रामः: (a) ग्रामे (b) ग्रामम् (c) ग्रामात् (d) ग्रामः — **c** · FACT.
3. "The fruit falls from the tree": (a) फलम् वृक्षे पतति (b) फलम् वृक्षात् पतति (c) फलम्
   वृक्षम् पतति (d) फलः वृक्षात् पतति — **b** · FACT.
4. "On Monday": (a) सोमवासरम् (b) सोमवासरः (c) सोमवासरे (d) सोमवासरात् — **c** · FACT.
5. बालकः कुतः आगच्छति? The answer is in the: (a) locative (b) ablative (c) accusative (d)
   nominative — **b** · FACT.
6. "The mouse falls into the well": (a) मूषकः कूपे पतति (b) मूषकः कूपम् पतति (c) मूषकः
   कूपात् पतति (d) मूषकम् कूपे पतति — **a** · FACT.
7. Hindi में and पर correspond in Sanskrit to: (a) two cases (b) one case, the locative
   (c) the ablative (d) the accusative — **b** · FACT.
8. वृक्षः तीरे अस्ति। ___ कपोतः निवसति। (a) तस्मात् (b) तस्मिन् (c) तम् (d) सः — **b** · FACT.
9. According to Pāṇini's grammar, the job of the place where something happens is called:
   (a) अपादानम् (b) अधिकरणम् (c) करणम् (d) कर्म — **b** · TRADITION.
10. Which owned word is itself a "from"-word? (a) कुत्र (b) अत्र (c) ततः (d) तत्र — **c** ·
    FACT.

**Teacher Notes points:** 1.4.24, 1.4.45, 2.3.28, 2.3.36 (Teacher Notes only); Whitney
§301c on the "pregnant" locative ("into or on to instead of in or on"); the -तः adverbs
(Whitney §1098a; 5.3.7 पञ्चम्यास्तसिल् — c05.l03, not printed now); the serial's departure
from the Hitopadeśa (0.31).

---

## 3. L3 — केन कस्मै — करणम् सम्प्रदानम् च: With What, For Whom (grammar)

**Front matter.** id `v3.c01.l03` · file `lesson-03-with-what-for-whom.md` · title sa केन
कस्मै — करणम् सम्प्रदानम् च · sa_iast *kena kasmai — karaṇam sampradānam ca* · en "With What,
For Whom" · hi "किससे और किसके लिए — करण और सम्प्रदान" · grammar · A2 · 45 / 40 ·
prerequisites [v3.c01.l02] · review_of [v3.c01.l02, v3.c01.l01, v2.c05.l03, v2.c01.l01,
v2.c05.l04] · vocabulary_count 10 (7 ledger-new + 3 upgrades) · tags [grammar, cases,
instrumental, dative, kāraka, natva, sutra, namaste-thread, hindi-bridge, serial,
spaced-review] · media (planned): images `v3c01l03-three-way-drill.svg`,
`v3c01l03-n-sort-board.svg`; audio `v3c01l03-ramena-devena.mp3`, `v3c01l03-story.mp3`;
worksheets `v3c01l03-n-sort.pdf`.

**Objectives.**
1. en "From owned forms — मह्यम्, तुभ्यम्, कृपया, उद्यमेन, पुण्याय, गुरवे नमः — state the
   pattern: the instrumental (तृतीया, -एन) answers केन? 'with what, by what, with whom',
   the dative (चतुर्थी, -आय) answers कस्मै? 'to whom, for whom'; produce both for any
   masculine or neuter a-stem." · hi "अपने रूपों — मह्यम्, तुभ्यम्, कृपया, उद्यमेन, पुण्याय, गुरवे
   नमः — से नियम बताएँ: तृतीया (-एन) केन? 'किससे, किसके द्वारा, किसके साथ' का उत्तर है, चतुर्थी
   (-आय) कस्मै? 'किसको, किसके लिए' का; किसी भी अकारान्त पुल्लिंग या नपुंसक संज्ञा के दोनों रूप
   बनाएँ।"
2. en "Spell the instrumental right: -एन as in देवेन, -एण after र्, ऋ or ष् when nothing
   blocks it (रामेण), and -एन again when a blocker stands between (रथेन) — sorting owned
   words into the three columns." · hi "तृतीया की वर्तनी ठीक लिखें: देवेन जैसा -एन; र्, ऋ या
   ष् के बाद, बीच में कोई रोकने वाला वर्ण न हो तो -एण (रामेण); और बीच में रोकने वाला वर्ण हो तो
   फिर -एन (रथेन) — अपने शब्दों को तीन स्तम्भों में छाँटकर।"
3. en "Use the giving frame: means and company (जालेन, मित्रेण सह, रथेन विना), the receiver
   of ददाति and कथयति, the one honoured with नमः and blessed with स्वस्ति, and the one pleased
   with रोचते — with केन, कस्मै, तेन, तस्मै, मया, त्वया, मह्यम्, तुभ्यम्." · hi "देने का
   ढाँचा प्रयोग करें: साधन और साथ (जालेन, मित्रेण सह, रथेन विना), ददाति और कथयति का पाने वाला,
   नमः से सम्मानित और स्वस्ति से आशीर्वाद पाने वाला, और रोचते में जिसे अच्छा लगे — केन, कस्मै,
   तेन, तस्मै, मया, त्वया, मह्यम्, तुभ्यम् के साथ।"
4. en "State the Hindi contrasts exactly: Hindi से for the instrument and for 'from' (two
   Sanskrit cases), के साथ for company (सह + instrumental), and को for the object and the
   receiver (रामम् vs रामाय)." · hi "हिन्दी से अन्तर ठीक-ठीक बताएँ: साधन और 'से (अलग होकर)'
   दोनों के लिए हिन्दी से (संस्कृत में दो विभक्तियाँ), साथ के लिए के साथ (सह + तृतीया), और कर्म तथा
   पाने वाले दोनों के लिए को (रामम् और रामाय)।"

**The one grammar point.** The giving frame: the instrumental (तृतीया) answers केन? "with
what, by whom" (करणम्, and company with सह); the dative (चतुर्थी) answers कस्मै? "to whom,
for whom, for what" (सम्प्रदानम्).

**Forms taught:** T1 rows तृतीया, चतुर्थी (0.A) with **देवेन taught first** and रामेण beside
it (decision 11); 0.B rows तृतीया, चतुर्थी (केन, कस्मै, तेन, तस्मै, मया, त्वया, मह्यम्,
तुभ्यम्). The ṇ reflex in three columns (0.C). Cells drilled: **12** (2 cases × m., n.,
asker, answer, I, you). Paradigm ledger: T1 — all rows but षष्ठी, सम्बोधनम् ✓ (those two ○);
the ṇ rule: observed spelling ✓, the rule itself ○ (v4.c02).

**Headwords:**

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status |
|---|---|---|---|---|---|---|
| ददाति | dadāti | /d̪ɐd̪ɑːt̪i/ | gives | देता है | verb (the lemma of the counted chunk ददातु; rule 8) | ledger-new — Apte s.v. दा (3 U., "dadāti") "to give" |
| कथयति | kathayati | /kɐt̪ʰɐjɐt̪i/ | tells, relates (person told in the dative) | कहता है, बताता है | verb, -अय- thematic | ledger-new — Apte s.v. कथ् "to tell, relate … (usually with dat. of person)" |
| सह | saha | /sɐɦɐ/ | with, together with (+ instr.) | साथ, के साथ | indeclinable | ledger-new — Apte s.v. सह (ind.); Whitney §1127 |
| विना | vinā | /ʋin̪ɑː/ | without (+ instr.; also acc., abl.) | बिना, के बिना | indeclinable | ledger-new — Apte s.v. विना "without, except (with acc., instr. or abl.)" |
| दण्डः | daṇḍaḥ | /d̪ɐɳɖɐh/ | stick, staff | डंडा, लाठी | m. a-stem (Apte: m., also n.) | ledger-new — Apte s.v. दण्डः "a stick, staff, rod" |
| रथः | rathaḥ | /ɾɐt̪ʰɐh/ | chariot | रथ | m. a-stem | ledger-new — Apte s.v. रथः "a carriage, chariot, car" |
| शशकः | śaśakaḥ | /ɕɐɕɐkɐh/ | hare | खरगोश | m. a-stem | ledger-new — Apte s.v. शशकः "a hare, rabbit"; MW s.v. śaśaka |
| हस्तः | hastaḥ | /ɦɐst̪ɐh/ | hand | हाथ | m. a-stem | **upgrade** (हस्त, v1.c05.l02) |
| पुत्रः | putraḥ | /put̪ɾɐh/ | son | पुत्र, बेटा | m. a-stem | **upgrade** (पुत्र, v1.c05.l03) |
| मित्रम् | mitram | /mit̪ɾɐm/ | friend | मित्र, दोस्त | n. a-stem | **upgrade** (मित्र, v1.c05.l03) |

§14 notes: मित्रम् is **neuter** (its instrumental is मित्रेण, its nominative मित्रम्, as in
v2.c06.l02's अहम् अपि तव मित्रम्); a friend who is a man is still मित्रम्. Do not tie रथः to the owned verse word मनोरथैः: Monier-Williams takes that -रथ chiefly as a second रथ "joy" from √ram, listing "the heart compared to a car" only as a secondary sense [REF:monierwilliams1899 s.v. mano-ratha]; the compound itself is c05.l04. शशकः is the hare of c06.l04's verse. **Ledger
line:** "7 ledger-new · 3 upgrades · ledger 374 → 381 · cells drilled: 12."

**Six-step material.**
1. *Scene:* व्याधः जालेन मृगम् गृह्णाति। "The hunter catches the deer with a net." · माता
   बालकाय फलम् ददाति। "Mother gives the boy a fruit." · अर्जुनः मित्रेण सह गच्छति। "Arjuna
   goes with a friend."
2. *Questions:* केन? "with what? with whom?" and कस्मै? "to whom? for whom?" (cells of the
   owned कः).
3. *Evidence table:*

| owned form | where owned | what it is |
|---|---|---|
| फलम् मह्यम् रोचते। · किम् तुभ्यम् रोचते? | v2.c05.l03 | the one pleased: "to me", "to you" |
| गुरवे नमः (display) · नमः (the bow) | v2.c01.l01 | the one honoured: "to the teacher" |
| नमस्ते = नमः + ते | v1.c05.l02 §13 | "homage to you" (ते a short form of तुभ्यम्) |
| परोपकारः पुण्याय पापाय परपीडनम् | v2.c06.l03 | "for merit", "for sin": purpose |
| कृपया | v2.c01.l04 | "with compassion" → "please" (ā-stem: c02.l02) |
| उद्यमेन हि सिध्यन्ति … | v2.c06.l03 (Hit 0.36) | "by effort": means |

   The -आय words and मह्यम्/तुभ्यम् answer "to/for whom"; the -एन word answers "by what".
4. *The pattern named:* तृतीया (-एन), job करणम् "the means" (and company with सह); चतुर्थी
   (-आय), job सम्प्रदानम् "the receiver". The ending is **-एन, as in देवेन**; after र् it is
   written -एण: रामेण (decision 11). The three columns (0.C). Sūtras quoted (one line each):
   **2.3.16** नमःस्वस्तिस्वाहास्वधालम्वषड्योगाच्च "with नमः, स्वस्ति … the dative" — रामाय नमः,
   स्वस्ति तुभ्यम्; **2.3.19** सहयुक्तेऽप्रधाने "with सह, the instrumental for the lesser
   partner" — पिता पुत्रेण सह गच्छति (after the Kāśikā's *putreṇa sahāgataḥ pitā*). Labels
   (one line each): ते "to you" is a short form of तुभ्यम्, so नमः ते is "homage to you" (the
   seam c04.l02; ते c05.l01) — **नमस्ते thread, step 1**; कृपया is the instrumental of कृपा
   "with compassion" (ā-stems c02.l02); उद्यमेन "by effort" is an instrumental; अन्नाय "for
   food" (serial) is the dative of purpose. Deferred: the instrumental of the doer in a
   passive (R2 c02.l05; v4.c05). Case ≠ role, sighting (b) (0.14): the dative with नमः is
   asked for by the word नमः itself.
5. *Table:* the learner fills देवेन/रामेण/फलेन, देवाय/रामाय/फलाय, केन/कस्मै, तेन/तस्मै,
   मया/त्वया, मह्यम्/तुभ्यम्, and marks the ण cell.
6. *Production:* the three-way drill, the ṇ sort, giving dialogues.

**Model sentences (§13; plan's six, verified):**
1. व्याधः जालेन मृगम् गृह्णाति। (vyādhaḥ jālena mṛgam gṛhṇāti.) "The hunter catches the deer with a net." — शिकारी जाल से हिरन पकड़ता है।
2. केन सह गच्छसि? — मित्रेण सह। (kena saha gacchasi? — mitreṇa saha.) "Who are you going with? — With a friend." — किसके साथ जाते हो? — दोस्त के साथ।
3. माता बालकाय फलम् ददाति। (mātā bālakāya phalam dadāti.) "Mother gives the boy a fruit." — माँ लड़के को फल देती है।
4. अर्जुनः रथेन ग्रामम् गच्छति। (arjunaḥ rathena grāmam gacchati.) "Arjuna goes to the village by chariot." — अर्जुन रथ से गाँव जाता है।
5. रामाय नमः। (rāmāya namaḥ.) "Homage to Rāma." — राम को नमस्कार।
6. अर्जुनाय क्षीरम् रोचते। (arjunāya kṣīram rocate.) "Arjuna likes milk." — अर्जुन को दूध अच्छा लगता है। (the to-form v2.c05.l03 promised)

   Extra §13 lines: स्वस्ति तुभ्यम्। (svasti tubhyam.) "Blessings to you." · पिता पुत्रेण सह
   गच्छति। (pitā putreṇa saha gacchati.) "The father goes with his son." · अहम् हस्तेन
   लिखामि। (aham hastena likhāmi.) "I write with my hand." · सः मया सह गच्छति। (saḥ mayā saha
   gacchati.) "He goes with me." · शशकः जलेन विना न तिष्ठति। (śaśakaḥ jalena vinā na tiṣṭhati.)
   "A hare does not stay without water." · गुरुः शिष्याय कथयति। (guruḥ śiṣyāya kathayati.)
   "The teacher tells the student." (Not *गुरुः शिष्याय कथाम् कथयति: कथाम् is an ā-stem
   accusative, c02.l02.) · कस्मै फलम् ददासि? — तस्मै। (kasmai phalam dadāsi? — tasmai.) "To whom do you
   give the fruit? — To him."

**§16 Conversation** (Arjuna and his mother; 12 turns):

1. अर्जुनः — त्वम् कस्मै फलम् ददासि? (tvam kasmai phalam dadāsi?) "Who are you giving the fruit to?"
2. माता — रामाय। रामः तव मित्रम्। (rāmāya. rāmaḥ tava mitram.) "To Rāma. Rāma is your friend."
3. अर्जुनः — रामाय किम् रोचते? (rāmāya kim rocate?) "What does Rāma like?"
4. माता — रामाय क्षीरम् रोचते। फलम् अपि रोचते। (rāmāya kṣīram rocate. phalam api rocate.) "Rāma likes milk. He likes fruit too."
5. अर्जुनः — मह्यम् अपि फलम् रोचते! (mahyam api phalam rocate!) "I like fruit too!"
6. माता — अहम् तुभ्यम् अपि फलम् ददामि। (aham tubhyam api phalam dadāmi.) "I'll give you a fruit too."
7. अर्जुनः — धन्यवादः। अहम् रामेण सह विद्यालयम् गच्छामि। (dhanyavādaḥ. aham rāmeṇa saha vidyālayam gacchāmi.) "Thank you. I'm going to school with Rāma."
8. माता — केन गच्छसि? रथेन? (kena gacchasi? rathena?) "How are you going? By chariot?"
9. अर्जुनः — न! अहम् रथेन विना गच्छामि। (na! aham rathena vinā gacchāmi.) "No! I go without a chariot."
10. माता — रामः केन सह गच्छति? (rāmaḥ kena saha gacchati?) "Who does Rāma go with?"
11. अर्जुनः — सः मया सह गच्छति। (saḥ mayā saha gacchati.) "He goes with me."
12. माता — शुभम्। स्वस्ति तुभ्यम्! (śubham. svasti tubhyam!) "Good. Blessings on you!"

(ददासि, ददामि are built by the v2.c04 pattern from today's ददाति; धन्यवादः, शुभम्, स्वस्ति
owned.)

**§17 Story — episode 1, part 3: अन्नम् "The Food"** (label as above):

1. व्याधः हस्तेन अन्नम् तीरे क्षिपति। (vyādhaḥ hastena annam tīre kṣipati.) "With his hand the hunter throws food on the bank."
2. अन्नम् जाले पतति। (annam jāle patati.) "The food falls onto the net."
3. व्याधः दण्डम् हस्तेन गृह्णाति। (vyādhaḥ daṇḍam hastena gṛhṇāti.) "The hunter takes his stick in his hand."
4. सः मार्गे तिष्ठति। (saḥ mārge tiṣṭhati.) "He waits on the road."
5. कपोतः वृक्षात् अन्नम् पश्यति। (kapotaḥ vṛkṣāt annam paśyati.) "From the tree the dove sees the food."
6. अन्नम् कपोताय रोचते। (annam kapotāya rocate.) "The dove likes the food."
7. कपोतः अन्नाय वृक्षात् पतति। (kapotaḥ annāya vṛkṣāt patati.) "The dove flies down from the tree for the food." (अन्नाय: the dative of purpose, labelled)
8. मूषकः विवरात् कपोतम् पश्यति। (mūṣakaḥ vivarāt kapotam paśyati.) "From its hole the mouse sees the dove."
9. सः जालम् अपि पश्यति। (saḥ jālam api paśyati.) "He sees the net too."
10. मूषकः किम् करोति? (mūṣakaḥ kim karoti?) "What does the mouse do?"

The plan's two lines are 1 (with तीरे added) and 7. Line 10 is the cliff-hanger l04
answers.

**§3 Station 0 (runs S0-d and S0-c, verbatim).** **Prompts:** (1) v3.c01.l02 — the locative
and ablative of वृक्षः; "the mouse falls into the well"; (2) v3.c01.l01 — "Whom does the
hunter see?" in Sanskrit; (3) v2.c05.l03 — "I like milk", "what do you like?" (क्षीरम् मह्यम्
रोचते। किम् तुभ्यम् रोचते?); (4) v2.c01.l01 — the bow word and the teacher-display (नमः;
गुरवे नमः); (5) v2.c05.l04 — the polite request for a fruit (भवान् फलम् ददातु।).

**§20 Bookings:** S0-f (+1 day, run by l04) and S0-g (+1 week, run by l05), verbatim.

**§9–§11:** रामेण vs देवेन: the retroflex /ɳ/ (tongue tip curled back to the roof, as in
the owned गुण, कण) against the dental /n̪/ (tongue on the teeth): /ɾɑːmeːɳɐ/ · /d̪eːʋeːn̪ɐ/;
listening pairs रामेण/देवेन, पुत्रेण/हस्तेन, मृगेण/कपोतेन, रथेन (no curl, though र comes
first). Hindi speakers know /ɳ/ from careful tatsama speech (गुण, प्राण), though many say it as [n] in everyday Hindi; everyone does the mirror
check. -आय /ɑːjɐ/: three syllables' worth of sound, never "-āy". कस्मै /kɐsmɐi̯/ (diphthong
onset /ɐ/) against कस्मात्. मया /mɐjɑː/, त्वया /t̪ʋɐjɑː/: the व of त्वया a labiodental
approximant.

**§12 Common mistakes:** (1) the wrong ṇ column: *रामेन, *देवेण, *रथेण, *अर्जुनेण — fix: the
three columns. (2) the Hindi से collision: *वृक्षेण पतति "falls from the tree", *दण्डात्
"with the stick" — fix: "from" -आत्, "with (means)" -एन. (3) the Hindi को transfer for the
receiver: *रामम् फलम् ददाति — fix: रामाय. (4) the Hindi को transfer with नमः: *रामम् नमः —
fix: रामाय नमः (2.3.16). (5) the liker in the accusative from Hindi मुझे: *माम् रोचते — fix:
मह्यम् रोचते. (6) सह with the wrong case: *मित्रम् सह — fix: मित्रेण सह.

**§18 Exercises (keys):**
- *Ex 1 (obj. 1): instrumental and dative.* देवः · हस्तः · जालम् · बालकः · कपोतः · फलम् ·
  व्याधः · सिंहः — Key: देवेन देवाय · हस्तेन हस्ताय · जालेन जालाय · बालकेन बालकाय · कपोतेन
  कपोताय · फलेन फलाय · व्याधेन व्याधाय · सिंहेन सिंहाय.
- *Ex 2 (obj. 2): the ṇ sort — the 20 words of 0.C (8 · 8 · 4)*, each written in the
  instrumental in its column. Key: 0.C.
- *Ex 3 (obj. 2): -एन or -एण?* पुत्र · मित्र · हस्त · मृग · रथ · पर्वत · शशक · मूषक ·
  गृह · अर्जुन — Key: पुत्रेण, मित्रेण, हस्तेन, मृगेण, रथेन, पर्वतेन, शशकेन, मूषकेण, गृहेण,
  अर्जुनेन.
- *Ex 4 (obj. 3): fill the right case.* a. व्याधः ___ (जाल) मृगम् गृह्णाति। b. अर्जुनः ___
  (मित्र) सह गच्छति। c. माता ___ (बालक) फलम् ददाति। d. ___ (राम) नमः। e. ___ (अर्जुन)
  क्षीरम् रोचते। f. गुरुः ___ (शिष्य) कथयति। g. शशकः ___ (जल) विना न तिष्ठति। h. अहम् ___
  (हस्त) लिखामि। i. स्वस्ति ___ (पुत्र)। — Key: जालेन, मित्रेण, बालकाय, रामाय, अर्जुनाय, शिष्याय, जलेन, हस्तेन, पुत्राय.
- *Ex 5 (obj. 3): ask with केन or कस्मै, answer with तेन or तस्मै / one word.* a. व्याधः
  जालेन मृगम् गृह्णाति। b. माता बालकाय फलम् ददाति। c. अर्जुनः रथेन गच्छति। d. पिता पुत्रेण सह
  गच्छति। e. गुरुः शिष्याय कथयति। f. सः मया सह गच्छति। — Key: व्याधः केन मृगम् गृह्णाति? —
  जालेन (तेन)। · माता कस्मै फलम् ददाति? — बालकाय (तस्मै)। · अर्जुनः केन गच्छति? — रथेन। · पिता
  केन सह गच्छति? — पुत्रेण। · गुरुः कस्मै कथयति? — शिष्याय। · सः केन सह गच्छति? — मया।
- *Ex 6 (obj. 4): the three-way drill with the Hindi row.* Nine pictures: with the stick
  (दण्डेन — छड़ी से), with a friend (मित्रेण सह — दोस्त के साथ), from the tree (वृक्षात् — पेड़
  से), three of each, mixed. Key: as given; the learner writes "से twice, के साथ once".
- *Ex 7 (obj. 4): Hindi → Sanskrit.* a. माँ लड़के को फल देती है। b. शिकारी हिरन को देखता है।
  c. राम को नमस्कार। d. मुझे दूध अच्छा लगता है। e. मैं हाथ से लिखता हूँ। f. फल पेड़ से गिरता
  है। — Key: माता बालकाय फलम् ददाति। (को → dat.) · व्याधः मृगम् पश्यति। (को → acc.) · रामाय नमः।
  · क्षीरम् मह्यम् रोचते। · अहम् हस्तेन लिखामि। (से → instr.) · फलम् वृक्षात् पतति। (से → abl.)
- *Ex 8 (production, speaking):* a giving dialogue of six turns with a partner (कस्मै …
  ददासि? — …-आय। · केन सह …? — …-एन सह।), recorded.

**§19 Quiz:**
1. The instrumental of देवः: (a) देवेण (b) देवेन (c) देवात् (d) देवाय — **b** · FACT.
2. The instrumental of पुत्रः: (a) पुत्रेन (b) पुत्रेण (c) पुत्राय (d) पुत्रात् — **b** · FACT.
3. Why is रथेन written with न? (a) a dental (थ) stands between र and न (b) रथ has no र (c)
   it is neuter (d) it is a mistake — **a** · FACT.
4. "Mother gives the boy a fruit": (a) माता बालकम् फलम् ददाति (b) माता बालकाय फलम् ददाति (c)
   माता बालकेन फलम् ददाति (d) माता बालकात् फलम् ददाति — **b** · FACT.
5. "With a friend": (a) मित्रम् सह (b) मित्रात् सह (c) मित्रेण सह (d) मित्राय सह — **c** · FACT.
6. Hindi से in "छड़ी से" and "पेड़ से" corresponds to: (a) one Sanskrit case (b) the
   instrumental and the ablative (c) the dative (d) the locative — **b** · FACT.
7. According to Pāṇini (2.3.16), the word नमः is used with: (a) the accusative (b) the dative
   (c) the genitive (d) the instrumental — **b** · TRADITION ("According to Pāṇini…").
8. In नमस्ते, ते is a short form of: (a) तव only (b) तुभ्यम् "to you" (c) त्वम् (d) तत् —
   **b** · FACT (as taught: "a short form of तुभ्यम्").
9. केन सह गच्छसि? — the answer "with me": (a) माम् सह (b) मह्यम् सह (c) मया सह (d) मम सह —
   **c** · FACT.
10. "Arjuna likes milk": (a) अर्जुनः क्षीरम् रोचते (b) अर्जुनम् क्षीरम् रोचते (c) अर्जुनाय क्षीरम्
    रोचते (d) अर्जुनस्य क्षीरम् रोचते — **c** · FACT.

**Teacher Notes points:** 8.4.1, 8.4.2, 8.4.37 (ṇatva; not printed in learner text) with
the corpus count of 0.7 and its method line; 1.4.32, 1.4.42, 2.3.13, 2.3.18 (role and case
sūtras); 1.4.33 रुच्यर्थानां प्रीयमाणः (मह्यम् रोचते: the one pleased is a सम्प्रदानम्); 2.3.32
(विना with three cases); the Kāśikā's examples on 2.3.16 and 2.3.19 (0.15); Whitney §279 (the
bare instrumental of company, not taught).

---

## 4. L4 — कस्य हे — सम्बन्धः सम्बोधनम् च: Whose? and O …! (conversation)

**Front matter.** id `v3.c01.l04` · file `lesson-04-whose-and-o.md` · title sa कस्य हे —
सम्बन्धः सम्बोधनम् च · sa_iast *kasya he — sambandhaḥ sambodhanam ca* · en "Whose? and O …!"
· hi "किसका? और हे …! — सम्बन्ध और सम्बोधन" · lesson_type: conversation · A2 · 45 / 35 ·
prerequisites [v3.c01.l03] · review_of [v3.c01.l03, v3.c01.l02, v3.c01.l01, v1.c06.l02,
v2.c06.l02, v2.c01.l01] (v3.c01.l02 added: §3 runs its +1-week item; §7 deviation 3) ·
vocabulary_count 7 (6 ledger-new + 1 upgrade) · tags [conversation, cases, genitive,
vocative, possession, address, role-play, hindi-bridge, serial, spaced-review] · media
(planned): images `v3c01l04-court-scene.svg`, `v3c01l04-whose-cards.svg`; audio
`v3c01l04-court-dialogue.mp3`, `v3c01l04-calling.mp3`, `v3c01l04-story.mp3`.

**Objectives.**
1. en "From owned forms — मम, तव, तस्य, मम नाम, सिंहस्य उपरि, भोः राम!, आचार्य! — state the
   pattern: the genitive (षष्ठी, -स्य) links a noun to a noun, 'of, -'s', and the vocative
   (सम्बोधनम्) is the bare stem, usually after हे; produce both for any masculine or neuter
   a-stem." · hi "अपने रूपों — मम, तव, तस्य, मम नाम, सिंहस्य उपरि, भोः राम!, आचार्य! — से नियम
   बताएँ: षष्ठी (-स्य) संज्ञा को संज्ञा से जोड़ती है, 'का, के, की', और सम्बोधन केवल मूल शब्द है,
   प्रायः हे के बाद; किसी भी अकारान्त पुल्लिंग या नपुंसक संज्ञा के दोनों रूप बनाएँ।"
2. en "Ask and answer whose-questions (कस्य पुस्तकम्? — छात्रस्य।) and say what someone has
   with the genitive and अस्ति (मम पुस्तकम् अस्ति), placing things near and over with समीपे
   and उपरि." · hi "किसका-प्रश्न पूछें और उत्तर दें (कस्य पुस्तकम्? — छात्रस्य।), और षष्ठी तथा
   अस्ति से बताएँ कि किसके पास क्या है (मम पुस्तकम् अस्ति), समीपे और उपरि से चीज़ों को पास और
   ऊपर रखते हुए।"
3. en "Hold a ten-turn conversation that calls people with हे + the vocative (हे राम!, हे
   नृप!, हे मित्र!), never *हे रामः!, and asks and answers with every case of the chapter." ·
   hi "दस बारी का संवाद करें जिसमें लोगों को हे + सम्बोधन से पुकारें (हे राम!, हे नृप!, हे
   मित्र!), *हे रामः! कभी नहीं, और अध्याय की हर विभक्ति से पूछें और उत्तर दें।"
4. en "State, according to Pāṇini, that the genitive and the vocative are not kārakas, and
   the Hindi contrast: का/के/की change with the thing possessed, Sanskrit -स्य never does." ·
   hi "पाणिनि के अनुसार बताएँ कि षष्ठी और सम्बोधन कारक नहीं हैं, और हिन्दी से अन्तर: का/के/की
   अधिकृत वस्तु के अनुसार बदलते हैं, संस्कृत का -स्य कभी नहीं बदलता।"

**The one grammar point.** The two cases that do not hang on the verb: the genitive (षष्ठी)
links a noun to a noun, "of, -'s" (सम्बन्धः, not a kāraka); the vocative (सम्बोधनम्) links
the speaker to the one addressed.

**Forms taught:** T1 rows षष्ठी, सम्बोधनम् (0.A); 0.B row षष्ठी (कस्य, तस्य, मम, तव). T1 is
now complete. Cells drilled: **8** (gen.: m., n., asker, answer, I, you; voc.: m., n.).
Paradigm ledger: T1 — all eight rows ✓ (singular; the column is assembled in l05); कः, सः:
the seven listed cells ✓; अहम्, त्वम्: acc., instr., dat., gen. ✓ (abl., loc. ○ c05.l01).

**Headwords:**

| देवनागरी | IAST | IPA | English | हिन्दी | gender / class | status |
|---|---|---|---|---|---|---|
| हे | he | /ɦeː/ | O! (calling particle) | हे | indeclinable | ledger-new — Apte s.v. हे "a vocative particle (oh!, ho!)"; MW s.v. he; Whitney §1135a |
| नृपः | nṛpaḥ | /n̪r̩pɐh/ | king | राजा | m. a-stem (a lexicalised compound, "protector of men", rule 10) | ledger-new — Apte s.v. नृप (under नृ); MW s.v. nṛ-pa "protector of men, prince, king" |
| सेवकः | sevakaḥ | /seːʋɐkɐh/ | servant | सेवक, नौकर | m. a-stem | ledger-new — Apte s.v. सेवक "-कः a servant, dependant" |
| वचनम् | vacanam | /ʋɐt͡ɕɐn̪ɐm/ | word, speech, saying | वचन, बात | n. a-stem | ledger-new — Apte s.v. वचनं "speech, an utterance, words (spoken)" |
| शब्दः | śabdaḥ | /ɕɐbd̪ɐh/ | word; sound | शब्द; ध्वनि | m. a-stem | ledger-new — Apte s.v. शब्दः "sound … a word"; MW s.v. śabda |
| समीपम् | samīpam | /sɐmiːpɐm/ | nearness; समीपे "near" (+ gen.) | समीपता; समीपे = के पास | n. a-stem | ledger-new — Apte s.v. समीप "-पं proximity, vicinity"; Whitney §1130 (the locative of a noun takes the genitive) |
| अर्थः | arthaḥ | /ɐɾt̪ʰɐh/ | meaning; purpose | अर्थ, मतलब | m. a-stem | **upgrade** (अर्थ, v1.c01.l03, v1.c05.l04) |

§14 notes: नृपः gives the course an a-stem "king" before राजन्'s consonant declension (the
system v4.c05; its aṅga/pada/bha analysis v4.c02); its instrumental is नृपेण (ṇ: ऋ, then प,
which does not block). The owned दास (v1.c04.l02) "servant" is a synonym of सेवकः. वचनम् is
also the tradition's word for grammatical number: एकवचनम् "singular" (GLOSSARY, v2.c04.l01)
— one line, display. शब्दरूपाणि "word-forms" (the name of declension tables) is a transparent
compound of owned members, display only (rule 10). **Ledger line:** "6 ledger-new · 1 upgrade ·
ledger 381 → 387 · cells drilled: 8."

**Six-step material** (in a conversation lesson the six steps are compressed into §8 and
§15; the conversation is the heart):
1. *Scene:* the court conversation (§16) heard first.
2. *Questions:* कस्य? "whose?" (a cell of कः) and the act of calling.
3. *Evidence table:*

| owned form | where owned | what it is |
|---|---|---|
| मम नाम … · तव नाम किम्? | v1.c06.l02 | "the name of me", "the name of you": genitives |
| तस्य नाम … | v1.c06.l03 | "his" = the genitive of सः |
| एकः मूषकः सिंहस्य उपरि चलति। | v2.c06.l02 line 2 | "over the lion": उपरि + genitive |
| अहम् अपि तव मित्रम्। | v2.c06.l02 line 5 | "your friend" |
| न हि सुप्तस्य सिंहस्य … | v2.c06.l03 (Hit 0.36) | "of the sleeping lion" |
| भोः राम! · नमस्ते, आचार्य! | v2.c01.l01 | calling: the bare name, the bare title |
| कमले, मातः (promised) | v1.c02.l04 | the calling forms of other stems: c02 |

4. *The pattern named:* षष्ठी (-स्य), its job सम्बन्धः "relation" — according to Pāṇini
   not a kāraka, because it names no part in the action (2.3.50 षष्ठी शेषे, Teacher Notes);
   सम्बोधनम्: the bare stem, which is why हे राम sounds like the dictionary form — according to
   Pāṇini a use of the nominative (2.3.47, Teacher Notes). Possession: मम पुस्तकम् अस्ति "of
   me a book is" (Sanskrit has no verb "to have" in these frames).
5. *Table:* रामस्य, देवस्य, फलस्य; हे राम, हे देव, हे फल; कस्य, तस्य, मम, तव. Preview (○):
   "The vocatives of other stems (बालिके, मातः) arrive with them in c02; joined भो राम (भोः +
   राम) is c04.l02." Deferred: the genitive with participles and the genitive/locative
   absolute (v4.c05).
6. *Production:* the whose-game, the role-play, the calling drill.

**Model sentences (§13; plan's five, verified):**
1. कस्य पुस्तकम्? — छात्रस्य। (kasya pustakam? — chātrasya.) "Whose book? — The student's." — किसकी पुस्तक? — छात्र की।
2. मूषकः सिंहस्य उपरि चलति। (mūṣakaḥ siṃhasya upari calati.) "The mouse walks over the lion." — चूहा शेर के ऊपर चलता है। (उपरि takes the genitive)
3. नृपस्य सेवकः वदति — हे नृप! वृक्षस्य समीपे सिंहः अस्ति। (nṛpasya sevakaḥ vadati — he nṛpa! vṛkṣasya samīpe siṃhaḥ asti.) "The king's servant says: 'O king! There is a lion near the tree.'" — राजा का सेवक कहता है — हे राजन्! पेड़ के पास शेर है।
4. हे राम! कुत्र गच्छसि? (he rāma! kutra gacchasi?) "Rāma! Where are you going?" — हे राम! कहाँ जा रहे हो?
5. शब्दस्य अर्थः कः? (śabdasya arthaḥ kaḥ?) "What is the meaning of the word?" — शब्द का अर्थ क्या है?

   Extra §13 lines: मम पुस्तकम् अस्ति। (mama pustakam asti.) "I have a book." — मेरे पास
   पुस्तक है। · रामस्य गृहम् · रामस्य माता · रामस्य पिता (rāmasya gṛham · rāmasya mātā ·
   rāmasya pitā) "Rāma's house · Rāma's mother · Rāma's father" — राम का घर · राम की माँ · राम
   के पिता (the agreement contrast; माता, पिता owned nominatives). · मूषकस्य विवरम् वृक्षस्य
   समीपे अस्ति। (mūṣakasya vivaram vṛkṣasya samīpe asti.) "The mouse's hole is near the tree."
   · हे मित्र! तव नाम किम्? (he mitra! tava nāma kim?) "Friend! What is your name?" · सेवकः नृपस्य वचनम् शृणोति। (sevakaḥ nṛpasya vacanam śṛṇoti.) "The servant hears the king's word." (शृणोति owned, v2.c04.l01)

**§16 Conversation** (the king and his servant; 12 turns; pause form):

1. सेवकः — हे नृप! नमः। (he nṛpa! namaḥ.) "O king! My greetings."
2. नृपः — हे सेवक! किम् अस्ति? (he sevaka! kim asti?) "Servant! What is it?"
3. सेवकः — वृक्षस्य समीपे सिंहः अस्ति। (vṛkṣasya samīpe siṃhaḥ asti.) "There is a lion near the tree."
4. नृपः — वृक्षः कुत्र अस्ति? (vṛkṣaḥ kutra asti?) "Where is the tree?"
5. सेवकः — ग्रामस्य समीपे, हे नृप। (grāmasya samīpe, he nṛpa.) "Near the village, my king."
6. नृपः — सिंहः किम् करोति? (siṃhaḥ kim karoti?) "What is the lion doing?"
7. सेवकः — सः स्वपिति। सिंहस्य उपरि मूषकः चलति! (saḥ svapiti. siṃhasya upari mūṣakaḥ calati!) "He is asleep. A mouse is walking over the lion!"
8. नृपः — मूषकस्य नाम किम्? (mūṣakasya nāma kim?) "What is the mouse's name?"
9. सेवकः — मूषकस्य नाम अहम् न जानामि। (mūṣakasya nāma aham na jānāmi.) "I don't know the mouse's name."
10. नृपः — (हसति।) मम रथः कुत्र अस्ति? ((hasati.) mama rathaḥ kutra asti?) "(laughs) Where is my chariot?"
11. सेवकः — रथः गृहस्य समीपे अस्ति। (rathaḥ gṛhasya samīpe asti.) "The chariot is near the house."
12. नृपः — अस्तु। अहम् रथेन गृहात् वनम् गच्छामि। हे सेवक! त्वम् अपि आगच्छसि? (astu. aham rathena gṛhāt vanam gacchāmi. he sevaka! tvam api āgacchasi?) "Very well. I am going from the house to the forest by chariot. Servant! Are you coming too?"

Conventions: the servant never uses तव to the king (the polite भवान् forms are c05.l01);
"वृक्षः कुत्र अस्ति?" replaces "कस्य वृक्षस्य?", which would need interrogative agreement (c02).
Hindi gloss of हे नृप: "हे राजन्" or "महाराज" (Hindi itself uses the Sanskrit vocative राजन्).
**Pair-drill for §18 (the whose-game):** each learner puts one owned object on the table;
A: कस्य पुस्तकम्? B: मम पुस्तकम्। / तव पुस्तकम्। / रामस्य पुस्तकम्। (also घटः, दण्डः, फलम्,
पुष्पम्).

**§17 Story — episode 1, part 4: मित्रम् "The Friend"** (label as above):

1. कपोतस्य मित्रम् मूषकः। (kapotasya mitram mūṣakaḥ.) "The dove's friend is the mouse."
2. मूषकस्य विवरम् वृक्षस्य समीपे अस्ति। (mūṣakasya vivaram vṛkṣasya samīpe asti.) "The mouse's hole is near the tree."
3. कपोतः अन्नस्य समीपे अस्ति। (kapotaḥ annasya samīpe asti.) "The dove is near the food."
4. व्याधः मार्गे तिष्ठति। (vyādhaḥ mārge tiṣṭhati.) "The hunter waits on the road."
5. व्याधः वदति — हे कपोत! अत्र अन्नम् अस्ति। (vyādhaḥ vadati — he kapota! atra annam asti.) "The hunter says: 'Dove! Here is food.'"
6. मूषकः विवरात् वदति — हे मित्र! अन्नस्य समीपे व्याधस्य जालम् अस्ति! (mūṣakaḥ vivarāt vadati — he mitra! annasya samīpe vyādhasya jālam asti!) "From its hole the mouse says: 'Friend! The hunter's net is by the food!'"
7. कपोतः जालम् पश्यति। (kapotaḥ jālam paśyati.) "The dove sees the net."
8. सः अन्नम् त्यजति। (saḥ annam tyajati.) "He leaves the food."
9. कपोतः वृक्षम् गच्छति। सः वृक्षे तिष्ठति। (kapotaḥ vṛkṣam gacchati. saḥ vṛkṣe tiṣṭhati.) "The dove goes to the tree. He stays in the tree."
10. व्याधः क्रुद्धः भवति। (vyādhaḥ kruddhaḥ bhavati.) "The hunter becomes angry."
11. सः कपोतेन विना ग्रामम् गच्छति। (saḥ kapotena vinā grāmam gacchati.) "He goes to the village without the dove."
12. कपोतः वदति — हे मित्र! धन्यवादः। (kapotaḥ vadati — he mitra! dhanyavādaḥ.) "The dove says: 'Friend! Thank you.'"

The plan's three lines are 1, 2 and 5. Line 1 is a verbless predication with a neuter
predicate noun (मित्रम्) for a masculine subject, as in v2.c06.l02's अहम् अपि तव मित्रम्.
Teacher Notes line: the warning is ours; in the Hitopadeśa the doves are caught and the
mouse frees them later (c02's episode and c06.l02) (0.31).

**§3 Station 0 (runs S0-f and S0-e, verbatim).** **Prompts:** (1) v3.c01.l03 — "with the
stick", "with a friend", "from the tree"; (2) v3.c01.l01 — "Whom do you see?" and the answer
"you"; (3) v1.c06.l02 — मम नाम … · तव नाम किम्?; (4) v2.c06.l02 — the lion story's line 2
(एकः मूषकः सिंहस्य उपरि चलति।); (5) v2.c01.l01 — the two calling chunks (भोः राम! · नमस्ते,
आचार्य!).

**§20 Bookings:** S0-h (+1 day, run by l05) and S0-i (+1 week, run by v3.c02.l01), verbatim.

**§9–§11:** -स्य /sjɐ/ as one cluster: रामस्य /ɾɑːmɐsjɐ/, never "rāmasiya" (the स्य weld of
v1.c05); the vocative's full final /ɐ/: हे राम /ɦeː ɾɑːmɐ/, not "he Rām" (0.19); the
calling intonation: a rise on the name, a pause, then the question (हे राम! — कुत्र गच्छसि?);
हे /ɦeː/ with a voiced /ɦ/ and a long pure /eː/; pair-drill हे राम / भोः राम (pause form, the
visarga sounded). Dictation: the full column so far in one line (रामः रामम् रामेण रामाय रामात्
रामस्य रामे हे राम).

**§12 Common mistakes:** (1) the genitive as "to have": *अहम् पुस्तकम् अस्ति — fix: मम
पुस्तकम् अस्ति (अस्ति agrees with पुस्तकम्, the thing that is). (2) the nominative in
address: *हे रामः!, *भोः रामः! — fix: the bare stem. (3) Hindi agreement carried over:
*रामस्या माता, *रामस्ये पिता (from राम की, राम के) — fix: -स्य never changes. (4) schwa
deletion in the vocative: "he Rām" — fix: §9. (5) समीपे or उपरि with the wrong case: *वृक्षम्
समीपे, *सिंहम् उपरि — fix: genitive. (6) the pronoun genitive confused with the doer: *सः
पुस्तकम् for "his book" — fix: तस्य पुस्तकम्.

**§18 Exercises (keys):**
- *Ex 1 (obj. 1): genitive and vocative.* कपोतः · नृपः · सेवकः · मित्रम् · पुत्रः · शशकः ·
  व्याधः · देवः — Key: कपोतस्य, हे कपोत · नृपस्य, हे नृप · सेवकस्य, हे सेवक · मित्रस्य, हे
  मित्र · पुत्रस्य, हे पुत्र · शशकस्य, हे शशक · व्याधस्य, हे व्याध · देवस्य, हे देव.
- *Ex 2 (obj. 2): whose?* a. कस्य पुस्तकम्? (छात्रः) b. कस्य विवरम्? (मूषकः) c. कस्य रथः?
  (नृपः) d. कस्य जालम्? (व्याधः) e. कस्य सेवकः? (नृपः) f. कस्य मित्रम्? (कपोतः) — Key:
  छात्रस्य, मूषकस्य, नृपस्य, व्याधस्य, नृपस्य, कपोतस्य.
- *Ex 3 (obj. 2): say what each has.* a. I — a book. b. you — a friend. c. he — a
  chariot. d. Rāma — a stick. e. the king — a servant. f. the student — a book. — Key: मम
  पुस्तकम् अस्ति। · तव मित्रम् अस्ति। · तस्य रथः अस्ति। · रामस्य दण्डः अस्ति। · नृपस्य सेवकः
  अस्ति। · छात्रस्य पुस्तकम् अस्ति।
- *Ex 4 (obj. 2): near and over.* a. the hole — near the tree. b. the mouse — over the
  lion. c. the chariot — near the house. d. the dove — near the food. e. the well — near
  the village. f. the hunter — near the well. — Key: विवरम् वृक्षस्य समीपे अस्ति। · मूषकः
  सिंहस्य उपरि अस्ति (or चलति)। · रथः गृहस्य समीपे अस्ति। · कपोतः अन्नस्य समीपे अस्ति। · कूपः
  ग्रामस्य समीपे अस्ति। · व्याधः कूपस्य समीपे अस्ति।
- *Ex 5 (obj. 3, production, recorded): the court role-play* — §16 in both roles; then a
  new ten-turn version with a new animal and a new place. Rubric: ten turns; at least three
  vocatives with हे; every case at least once across the ten turns (nom., acc., instr., dat., abl., gen., loc.).
- *Ex 6 (obj. 3): correct the calls.* a. *हे रामः! b. *भोः अर्जुनः! c. *हे नृपः! d. *हे
  मित्रम्! e. *हे सेवकम्! f. *हे देवः! — Key: हे राम! · भोः अर्जुन! · हे नृप! · हे मित्र!
  · हे सेवक! · हे देव!
- *Ex 7 (obj. 4): Hindi → Sanskrit, and say what changed in the Hindi.* a. राम का घर b. राम
  की माँ c. राम के पिता d. मेरे पास पुस्तक है। e. शब्द का अर्थ f. हे राम! — Key: रामस्य गृहम्
  · रामस्य माता · रामस्य पिता · मम पुस्तकम् अस्ति। · शब्दस्य अर्थः · हे राम! — the Hindi
  का/की/के changed with the possessed; -स्य did not.
- *Ex 8 (obj. 4): sort the cases.* Which of the eight cases are kārakas according to Pāṇini?
  Key: the six roles are kārakas; the genitive's job (सम्बन्धः) and the vocative
  (सम्बोधनम्) are not.

**§19 Quiz:**
1. The genitive of नृपः: (a) नृपस्य (b) नृपेण (c) नृपात् (d) नृपे — **a** · FACT.
2. The vocative of रामः: (a) रामः (b) राम (c) रामम् (d) रामे — **b** · FACT.
3. "I have a book": (a) अहम् पुस्तकम् अस्ति (b) मम पुस्तकम् अस्ति (c) माम् पुस्तकम् अस्ति (d)
   मया पुस्तकम् अस्ति — **b** · FACT.
4. "Near the tree": (a) वृक्षम् समीपे (b) वृक्षे समीपे (c) वृक्षस्य समीपे (d) वृक्षात् समीपे —
   **c** · FACT.
5. Which call is right? (a) हे रामः! (b) भोः रामः! (c) हे राम! (d) हे रामम्! — **c** · FACT.
6. "Rāma's mother" and "Rāma's house": (a) रामस्य माता · रामस्य गृहम् (b) रामस्या माता · रामस्य
   गृहम् (c) रामस्य माता · रामस्ये गृहम् (d) रामः माता · रामः गृहम् — **a** · FACT.
7. According to Pāṇini, which two cases are not kārakas? (a) nominative and accusative
   (b) genitive and vocative (c) instrumental and dative (d) ablative and locative — **b** ·
   TRADITION.
8. तस्य "his" is the genitive of: (a) सः (b) त्वम् (c) अहम् (d) कः — **a** · FACT.
9. उपरि "over" takes: (a) the accusative (b) the genitive (c) the locative (d) the dative —
   **b** · FACT.
10. कस्य विवरम्? (मूषकः) — (a) मूषकः (b) मूषकम् (c) मूषकस्य (d) मूषके — **c** · FACT.

**Teacher Notes points:** 2.3.50 षष्ठी शेषे; 2.3.47 सम्बोधने च, 2.3.48 सामन्त्रितम्, 2.3.49
एकवचनं संबुद्धिः (the vocative singular is "sambuddhi"), 6.1.69 एङ्ह्रस्वात् सम्बुद्धेः (why the
-ः drops: Teacher Notes only, v4); the Laghukaumudī's *he rāma* under 2.3.47 (VLk 892); the
neuter vocative (हे फल, हे मित्र) is grammatical and rare outside address to things or to a
friend called मित्र; Hindi's own vocative राजन्; the serial's departure (0.31).

---

## 5. L5 — विभक्तयः: The Eight Cases — Chapter 1 Exam (review)

**Front matter.** id `v3.c01.l05` · file `lesson-05-cases-exam.md` · title sa विभक्तयः ·
sa_iast *vibhaktayaḥ* · en "The Eight Cases — Chapter 1 Exam" · hi "विभक्तियाँ — आठ
विभक्तियाँ, अध्याय 1 की परीक्षा" · lesson_type: review · A2 · duration_minutes 45 ·
self_study_minutes 45 · prerequisites [v3.c01.l04] · review_of [v3.c01.l01, v3.c01.l02,
v3.c01.l03, v3.c01.l04, v2.c06.l05] · vocabulary_count 0 · tags [review, assessment,
cases, singular-column, listening, dictation, production-grid, case-detective, scene,
thread-verses, spaced-review] · media (planned): audio `v3c01l05-listening-scene.mp3`,
`v3c01l05-dictation-set.mp3`; images `v3c01l05-scene-picture.svg`,
`v3c01l05-t1-wall-chart.svg`; worksheets `v3c01l05-exam-booklet.pdf`; quizzes
`v3c01l05-chapter-quiz.md`, `v3c01l05-chapter-quiz-key.md`. **Title label:** विभक्तयः is the
nominative plural of the i-stem feminine विभक्तिः, read whole as a title (i-stems c02.l03;
the plural c02.l01) — one line in §1 or §6.

**Objectives.**
1. en "Hear a ten-sentence scene and answer ten case questions in one word each; take
   dictation of eight inflected words and two sentences." · hi "दस वाक्यों का एक दृश्य सुनें और
   दस विभक्ति-प्रश्नों का उत्तर एक-एक शब्द में दें; आठ विभक्ति-युक्त शब्दों और दो वाक्यों का
   श्रुतलेख लिखें।"
2. en "Produce, from a noun and a question word, the right singular form of any taught
   a-stem noun, twelve times against the clock, with the ṇ spelling right." · hi "संज्ञा और
   प्रश्नवाचक शब्द से किसी भी पढ़ी हुई अकारान्त संज्ञा का सही एकवचन रूप बनाएँ, समय के भीतर बारह
   बार, ण की वर्तनी ठीक रखते हुए।"
3. en "Name the case and the job of every a-stem noun in both Volume 2 stories, with the
   eight case names and the role names, having assembled (§15, unscored) the singular column (T1) with its asker
   and answer columns." · hi "दूसरे खण्ड की दोनों कथाओं की हर अकारान्त संज्ञा की विभक्ति और
   उसका काम बताएँ — आठ विभक्ति-नामों और कारक-नामों के साथ — — एकवचन का पूरा स्तम्भ (T1) उसके
   प्रश्न-शब्द और उत्तर-शब्द स्तम्भों के साथ (§15 में, बिना अंक) जोड़ लेने के बाद।"
4. en "Describe a picture in six recorded sentences that use every case at least once,
   understood first and correct second." · hi "एक चित्र का वर्णन छह रिकॉर्ड किए वाक्यों में करें
   जिनमें हर विभक्ति कम-से-कम एक बार आए — पहले समझ में आने वाले, फिर शुद्ध।"

**Assembly (§15):** the table of plan §4.1 (l05 block), with **देवेन beside रामेण** and the ṇ
cell marked:

| विभक्तिः | रामः | फलम् | कः | सः | job |
|---|---|---|---|---|---|
| प्रथमा | रामः | फलम् | कः · किम् | सः · तत् | कर्ता doer |
| द्वितीया | रामम् | फलम् | कम् · किम् | तम् · तत् | कर्म done-to; goal |
| तृतीया | रामे**ण** · देवेन | फलेन | केन | तेन | करणम् means (also: company with सह — case, not that role) |
| चतुर्थी | रामाय | फलाय | कस्मै | तस्मै | सम्प्रदानम् receiver (also: "for" a purpose, and with नमः — case, not that role) |
| पञ्चमी | रामात् | फलात् | कस्मात् · कुतः | तस्मात् | अपादानम् "from" |
| षष्ठी | रामस्य | फलस्य | कस्य | तस्य | सम्बन्धः "of" (not a kāraka) |
| सप्तमी | रामे | फले | कस्मिन् · कुत्र | तस्मिन् | अधिकरणम् "in, on, at"; time |
| सम्बोधनम् | हे राम | हे फल | — | — | calling (not a kāraka) |

Noticed and parked (one line): the masculine pronoun differs from रामः in three cells
(-स्मै -स्मात् -स्मिन्), and neuter तत् stands where फलम् has -म्: c05.l02. **Sūtra quoted:**
1.4.14 सुप्तिङन्तं पदम् "a word (पदम्) is what ends in a *sup* or a *tiṅ* ending" — why the
chapters are called सुबन्त- and तिङन्त-. The *sup* list (4.1.2) shown once as a picture, not
read (0.16). TRADITION line (0.17): the Laghukaumudī's order (रामः … case by case). The
cells from the whole chapter in the I/you column (माम् त्वाम्, मया त्वया, मह्यम् तुभ्यम्, मम तव)
printed beside. Paradigm ledger audit: T1 ✓; कः/किम्, सः/तत् seven listed cells ✓; अहम्/त्वम्
four listed cells ✓, abl./loc. ○ (c05.l01); the ṇ rule ○ (v4.c02). Ledger stays 387; cells
drilled: 42 (reviewed; 0 new).

**Thread overlay (c01):** 0.32 — उद्यमेन (instr.), सिंहस्य (gen.), मुखे (loc.); सत्यम्
(nom. n.).

**§3 Station 0 (runs S0-h and S0-g, verbatim).** **Prompts (one per lesson):** l01 — the
accusative and nominative of मृगः; l02 — "from the village to the city"; l03 — the
instrumental of नृपः and of रथः, with the reason; l04 — "the dove's friend". Keys: मृगः
मृगम् · ग्रामात् नगरम् गच्छति · नृपेण (ऋ, प does not block), रथेन (थ blocks) · कपोतस्य मित्रम्.

**§16 — the listening scene (task A text; pause form; read twice at natural pace):**

1. सोमवासरे अर्जुनः ग्रामात् नगरम् गच्छति। (somavāsare arjunaḥ grāmāt nagaram gacchati.) "On Monday Arjuna goes from the village to the city."
2. सः रथेन गच्छति। (saḥ rathena gacchati.) "He goes by chariot."
3. सः नृपस्य सेवकेन सह गच्छति। (saḥ nṛpasya sevakena saha gacchati.) "He goes with the king's servant."
4. नगरे एकः आपणः अस्ति। (nagare ekaḥ āpaṇaḥ asti.) "In the city there is a shop."
5. आपणे अर्जुनः पुस्तकम् पश्यति। (āpaṇe arjunaḥ pustakam paśyati.) "In the shop Arjuna sees a book."
6. सः सेवकाय कथयति — हे मित्र! पुस्तकम् मह्यम् रोचते। (saḥ sevakāya kathayati — he mitra! pustakam mahyam rocate.) "He tells the servant: 'Friend! I like the book.'"
7. अर्जुनः सेवकम् पुस्तकस्य मूल्यम् पृच्छति। (arjunaḥ sevakam pustakasya mūlyam pṛcchati.) "Arjuna asks the servant the price of the book."
8. सेवकः अर्जुनाय पुस्तकम् ददाति। (sevakaḥ arjunāya pustakam dadāti.) "The servant gives Arjuna the book."
9. सायम् अर्जुनः नगरात् गृहम् आगच्छति। (sāyam arjunaḥ nagarāt gṛham āgacchati.) "In the evening Arjuna comes home from the city."
10. सः गृहे पुस्तकम् पठति। (saḥ gṛhe pustakam paṭhati.) "At home he reads the book."

Questions (each read twice; one-word answers; key): 1. अर्जुनः कदा नगरम् गच्छति? — सोमवासरे।
2. अर्जुनः कुतः गच्छति? — ग्रामात्। 3. सः केन गच्छति? — रथेन। 4. सः केन सह गच्छति? —
सेवकेन। 5. सेवकः कस्य सेवकः? — नृपस्य। 6. आपणः कुत्र अस्ति? — नगरे। 7. किम् अर्जुनाय
रोचते? — पुस्तकम्। 8. सेवकः कस्मै पुस्तकम् ददाति? — अर्जुनाय। 9. अर्जुनः कम् मूल्यम् पृच्छति?
— सेवकम्। 10. अर्जुनः कुत्र पुस्तकम् पठति? — गृहे। (Q1 tests the locative of time; the
answer word may also be given in English or Hindi for Q7 only if the learner cannot recall
the noun: listening is tested, not production.)

**§17 — the case detective (task D) and the thread overlay.** Both Volume 2 stories reprinted
unchanged (D21; v2.c06.l01 §17, v2.c06.l02 §17). Scored tokens (25), case · job:

*The Thirsty Crow* (10): L1 काकः nom. · कर्ता (of अस्ति) · L3 जलम् acc. · कर्म · L4 घटम्
acc. · कर्म · L5 घटे loc. · अधिकरणम्; जलम् nom. · कर्ता (of अस्ति) · L6 पाषाणम् acc. · कर्म;
घटे loc. · अधिकरणम् (place reached) · L8 जलम् nom. · कर्ता (of आगच्छति) · L9 जलम् acc. · कर्म ·
moral बलम् nom. · predicate (no kāraka; the "is" sentence names it).
*The Lion and the Mouse* (15): L1 सिंहः nom. · कर्ता; वने loc. · अधिकरणम् · L2 मूषकः nom. ·
कर्ता; सिंहस्य gen. · सम्बन्धः (with उपरि) · L3 सिंहः nom. · कर्ता (of भवति) · L4 मूषकम्
acc. · कर्म · L5 मूषकः nom. · कर्ता (of वदति); मित्रम् nom. · predicate · L6 सिंहः nom. ·
कर्ता · L7 मूषकम् acc. · कर्म · L8 सिंहः nom. · कर्ता (of भवति); जाले loc. · अधिकरणम् · L9
मूषकः nom. · कर्ता · L10 जालम् acc. · कर्म · L11 सिंहः nom. · कर्ता.
*Displayed with their case given, not scored:* बुद्धिः (nom., doer of the "is" sentence;
i-stem, c02.l03 — the plan's display); **लघुः** (nom., predicate; u-stem adjective, c02.l03 —
added to the display, §7 deviation 2); सुखी, पिपासितः, क्रुद्धः, बद्धः, मुक्तः (predicate
adjectives, nom.; सुखी an -इन् stem, R1 c02.l03); the pronouns सः, अहम्, माम्, तव, कः (bonus:
one point each for case only, not counted in the 25); एकः, एकम्, अल्पम् (adjectives:
agreement is c02.l01). **Role labels for predicates:** a nominative after अस्ति/भवति that
names what the doer is or becomes is marked "predicate" (no kāraka) — scored as correct if
the learner writes "nom." and "predicate" or "says what X is".

**§18 — the five tasks (one 45-minute sitting):**

| Task | Content | Time | Marks | Pass (partial) | Full |
|---|---|---|---|---|---|
| A श्रवणम् (listening) | the scene above, twice; ten questions, twice each | 8 min | 10 | 7/10 | 9/10 |
| B श्रुतलेखनम् (dictation) | eight words: व्याधम् · कपोतेन · रामेण · मृगाय · ग्रामात् · विवरे · नृपस्य · हे सेवक; two sentences: अर्जुनः मित्रेण सह तीरम् गच्छति। · मूषकस्य विवरम् वृक्षस्य समीपे अस्ति। | 7 min | 10 (8 + 1 + 1) | 6/8 words and both sentences with at most one slip each | 8/8 and both intact |
| C production grid | twelve prompts (below) | 8 min | 12 | 9/12 | 11/12 |
| D case detective | the 25 tokens above | 12 min | 25 (1 per token: case and job both right; ½ for one) | 18/25 | 23/25 |
| E scene description | six sentences about the scene picture (a hunter, a tree on a bank, a dove, a mouse, a well, a village), recorded; every case at least once across the six | 10 min | 15 (communication 6 · endings 6 · coverage 3) | 9/15 with communication ≥ 4 | 13/15 |

**Task C prompts and key:** 1. जालम् + केन? → जालेन · 2. वृक्षः + कस्मात्? → वृक्षात् · 3.
नृपः + कस्मै? → नृपाय · 4. मित्रम् + केन सह? → मित्रेण सह · 5. ग्रामः + कुत्र? → ग्रामे · 6.
कपोतः + कम्? → कपोतम् · 7. सेवकः + कस्य? → सेवकस्य · 8. पुत्रः + हे …! → हे पुत्र · 9. तीरम् +
कस्मिन्? → तीरे · 10. शशकः + केन? → शशकेन · 11. मार्गः + केन? → मार्गेण · 12. वचनम् + किम्?
(the doer) → वचनम्. (Every case and the vocative are present; two ṇ decisions, 10 and 11.)

**Task E rubric:** communication (6): a listener can draw the picture from the six
sentences — 6 all clear · 4 mostly clear · 2 fragments; endings (6): −1 per wrong ending
(ṇ errors count ½); coverage (3): all seven cases and a vocative across the six sentences ·
2 if one missing · 1 if two or three missing. Model answer (one of many; six sentences, all
seven cases and the vocative): 1. प्रभाते व्याधः ग्रामात् वनम् आगच्छति। (prabhāte vyādhaḥ
grāmāt vanam āgacchati.) 2. सः हस्तेन जालम् नयति। (saḥ hastena jālam nayati.) 3. वृक्षस्य
समीपे एकः कूपः अस्ति। (vṛkṣasya samīpe ekaḥ kūpaḥ asti.) 4. वृक्षे कपोतः निवसति। (vṛkṣe
kapotaḥ nivasati.) 5. अन्नम् कपोताय रोचते। (annam kapotāya rocate.) 6. मूषकः वदति — हे मित्र!
तत्र जालम् अस्ति। (mūṣakaḥ vadati — he mitra! tatra jālam asti.) Do not offer *व्याधः कपोताय अन्नम् क्षिपति* as a model: क्षिपति with a dative
"throws at" is classical (Whitney §286f) but untaught; accept it from a learner without
penalty.

**Pass and remediation (§22):** Pass = every task at partial or better and the §19 quiz at
7/10 or more → Chapter 1 complete; the gate to v3.c02 opens. A task below partial re-runs
the next day after its remediation: A → l02 §9–§11 and l03 §9–§11 (the endings heard) · B →
the dictation pairs and triplets of l01 §9–§11, l02 §18 Ex 8 and l04 §9–§11 (l03 has no dictation set) · C → the lesson of each missed case (nom./acc. l01;
loc./abl. l02; instr./dat. and ṇ l03; gen./voc. l04) · D → l05 §15 and l01 §8's evidence
table · E → l04 §16 role-play, then the l01–l04 picture drills. §3's Station 0 (S0-h, S0-g and the four prompts, about 8 minutes) runs before the sitting and outside it; the five tasks fill the 45 minutes, and the §19 quiz is taken in the self-study session, after the sitting.

**§19 Quiz (10):**
1. Which case does Pāṇini's tradition call षष्ठी? (a) locative (b) genitive (c) ablative (d)
   dative — **b** · TRADITION ("In the tradition's names…").
2. According to Pāṇini (1.4.14), a पदम् "word" is what ends in: (a) a *sup* or a *tiṅ*
   ending (b) a vowel (c) a visarga (d) a case ending only — **a** · TRADITION.
3. The instrumental of मार्गः: (a) मार्गेन (b) मार्गेण (c) मार्गात् (d) मार्गाय — **b** · FACT.
4. "From the tree" and "with the stick" — Hindi uses से for both; Sanskrit uses: (a) one case
   (b) वृक्षात् and दण्डेन (c) वृक्षेण and दण्डात् (d) वृक्षे and दण्डे — **b** · FACT.
5. Which two cells of फलम् are the same form? (a) nom. and acc. (b) instr. and dat. (c) abl.
   and gen. (d) loc. and voc. — **a** · FACT.
6. "The teacher asks the student his name" has: (a) one accusative (b) two accusatives (c) a
   dative (d) an instrumental — **b** · FACT.
7. "Homage to the teacher" with an a-stem title: (a) आचार्यम् नमः (b) आचार्याय नमः (c)
   आचार्यस्य नमः (d) आचार्येण नमः — **b** · FACT.
8. In उद्यमेन हि सिध्यन्ति…, उद्यमेन is: (a) dative (b) instrumental (c) locative (d) nominative
   — **b** · FACT.
9. According to Pāṇini, the vocative is: (a) a separate kāraka (b) the nominative used in
   calling (c) the genitive (d) the accusative — **b** · TRADITION.
10. "Rāma! Where are you going?": (a) हे रामः! कुत्र गच्छसि? (b) हे राम! कुत्र गच्छसि? (c) हे
    रामम्! कुत्र गच्छसि? (d) हे राम! कुत्र गच्छति? — **b** · FACT.

**§20 Bookings:** S0-j (+1 day, run by v3.c02.l01), S0-k (+1 week, run by v3.c02.l02) and the
standing monthly line, verbatim (0.30).

**Payoff (§1/§8):** both Volume 2 stories, parsed noun by noun without a gloss; tracker row 1
redeemed for the a-stem singular (plan §4.0.1); the promises of §4.0.3 kept in this chapter,
listed by lesson in §15: रामः's ः (l01); विद्यालयः/विद्यालयम् (l01); locatives under pressure,
गृहे, सोमवासरे (l02); अर्जुनाय रोचते, गुरवे नमः as a pattern (l03); मम/तव, भोः राम as a
vocative (l04).

---

## 6. Pass C checklist

- **Paradigm cells (0.A, 0.B):** re-derive each cell of T1 against Whitney §330 (देव, आस्य)
  and §327; each pronoun cell against §§491a, 495, 504. Confirm the pause-form -आत् (not
  -आद्) is printed throughout.
- **ṇ columns (0.C):** re-derive every word in all three columns against Whitney §189 and
  8.4.1–2; confirm वचनेन is not printed as a "blocked" example; re-run the GRETIL count (0.7)
  before printing it in Teacher Notes, with the method line.
- **Sūtras:** 2.3.16, 2.3.19, 1.4.14 (learner text) and every Teacher-Notes number (0.10–0.17;
  1.4.24, 1.4.32, 1.4.33, 1.4.42, 1.4.45, 1.4.49, 1.4.51, 1.4.54, 2.3.2, 2.3.12, 2.3.13,
  2.3.18, 2.3.28, 2.3.32, 2.3.36, 2.3.47, 2.3.48, 2.3.49, 2.3.50, 4.1.2, 6.1.69, 8.4.1, 8.4.2,
  8.4.37, 8.4.56) against the Aṣṭādhyāyī data file — all looked up 2026-11-10; re-check the
  text strings as printed.
- **Tradition examples:** the Laghukaumudī wording ग्राममजां नयति (VLk 895) and the Kāśikā's
  माणवकं पन्थानं पृच्छति, नमो देवेभ्यः, स्वस्ति प्रजाभ्यः, पुत्रेण सहागतः पिता — verify the
  printed IAST/Devanagari against the e-texts; decide how `laghukaumudi` is located (GRETIL
  running number vs sūtra; §7.4).
- **Headwords:** each of the 27 against Apte and MW (s.vv. in the tables); the gender of
  दण्डः (m., Apte also n.), विवरम् (n.; MW m. n.), समीपम् (n. of an adjective), मित्रम् (n.).
- **Ledger:** 360 → 367 → 374 → 381 → 387 → 387; vocabulary_count 8 · 7 · 10 · 7 · 0; no
  ledger-new word in the 764-row ledger (grep re-run per word); the vibhakti and kāraka names
  not counted (§7.3).
- **Hindi parallels (0.26–0.27):** each against Kachru 2006 (to be located) and, for 0.27, a
  Hindi school grammar; at Pass B, the Hindi of every gloss and objective.
- **Registers:** kāraka names, 2.3.47/2.3.50, the Laghukaumudī order — TRADITION, attributed
  ("According to Pāṇini…", "In the Laghukaumudī…"); no SYMBOL content anywhere (no "divine in
  me" for नमस्ते); quizzes assess FACT or "According to X" TRADITION only.
- **Hitopadeśa frame (0.31):** the GRETIL lines quoted (godāvarī-tīre … śālmalī-taruḥ;
  taṇḍula-kaṇān vikīrya jālaṃ vistīrṇam; the Gaṇḍakī burrow) re-found; the "our retelling"
  label on every §17; the departures stated in Teacher Notes.
- **Thread overlay (0.32):** loci [REF:hitopadesha prastāvikā 36], [REF:mundaka 3.1.6].
- **Station 0 (0.30):** S0-a re-diffed against v2.c06.l05 §20 after any change to that file;
  each booking string copied verbatim into both lessons.
- **Evidence tables and quoted lines:** re-find, verbatim, every 'where owned' line of the l01–l04 evidence tables and every quoted V1–V2 line (§3 prompts, task D tokens) in the cited lesson and section; re-read every Whitney usage locus the note cites (0.9–0.24 and the lesson specs) and the BG 11.41 display line (0.18) before any is printed.
- **Walk the lessons in order:** no form before its lesson (in particular: no instrumental or
  dative in l01–l02 texts; no genitive or vocative in l01–l03 texts beyond the owned chunks
  मम, तव, तस्य, सिंहस्य, भोः राम!, आचार्य!); no plural, dual, agreement or joined text anywhere.

All claims re-audited by Pass C; verdicts to ../verification-log.md.

## 7. Open items for review

**Editor's decisions (2026-11-10)** on the items the researcher left open:

1. **REFERENCES keys.** `kachru2006` (Y. Kachru, *Hindi*, John Benjamins 2006) and `guru1952`
   (K. Guru, *Hindī vyākaraṇ*, 2nd rev. ed., Nāgarīpracāriṇī Sabhā 1952) are added to
   REFERENCES.md with this chapter. Both are cited **bare**: no page or chapter locator is
   printed until the book has been opened for that point. Pass C must confirm on the web
   that each printed Hindi statement is what these grammars say (0.26, 0.27), and reword
   or cut whatever it cannot confirm.
2. **0.27 (Hindi school grammar's eight कारक) prints**, as TRADITION attributed to Hindi
   school grammar [REF:guru1952], in l04 (where the genitive and vocative are named as the
   two cases that are not kārakas for Pāṇini) and in l05's assembly. It is assessed only in
   the form "According to Pāṇini …" / "According to Hindi school grammar …".
3. **Vibhakti and kāraka names are grammar terms, not ledger words.** प्रथमा … सप्तमी,
   सम्बोधनम्, करणम्, सम्प्रदानम्, अपादानम्, अधिकरणम्, सम्बन्धः go to GLOSSARY when the chapter
   ships (as the Volume 2 grammar terms did); the plan's ledger figures stand.
4. **`laghukaumudi` is cited by the Pāṇinian sūtra under which the passage stands**
   (`[REF:laghukaumudi on 4.1.2]`, `on 1.4.51`, `on 2.3.47`), like `kashika` and
   `siddhantakaumudi`; the REFERENCES entry says so. The GRETIL e-text's running numbers
   stay in this note only.
5. **The śabdarūpa recitation line does not print.** Only the Laghukaumudī's order (0.17).
6. **GLOSSARY:** when the chapter ships, कर्ता and कर्म are re-glossed as role names ("the
   doer", "the done-to"; Pāṇini's kārakas), keeping "subject / object" as the Volume 1
   approximation.
7. **Serial departures (0.31)** stand as labelled. The c02 fact base starts episode 2 from a
   free dove; c06.l02's Teacher Notes list both departures from the Hitopadeśa.

### Deviations from the plan (with reasons)

1. **0.11:** the plan's Teacher-Notes example "अजां ग्रामं नयति" (Apte s.v. नी, after "Sk") is replaced by the
   Laghukaumudī's wording ग्राममजां नयति (pause form ग्रामम् अजाम् नयति); the Kāśikā's
   kārikā on 1.4.51 does not include नी.
2. **l05 task D:** लघुः (u-stem adjective, the lion story's moral) is displayed with its case
   given and not scored, like the plan's बुद्धिः; the plan names only बुद्धिः. Likewise the
   predicate adjectives (सुखी an -इन् stem) and the pronouns are not in the 25 scored tokens.
3. **l04 review_of** gains v3.c01.l02, because l04's Station 0 runs l02's +1-week item and
   Pass D checks that §3 spirals `review_of` lessons.
4. **l05 TRADITION line:** "the शब्दरूप recitation of school practice" is replaced by the
   Laghukaumudī's presentation order (0.17), the only citable form of the claim.
5. **Serial texts:** the plan's lines are kept and extended; l02's line "व्याधः ग्रामात् वनम्
   आगच्छति" gains प्रभाते (the locative of time the lesson teaches); l03's "व्याधः हस्तेन
   अन्नम् क्षिपति" gains तीरे. The episode ends with the dove free (0.31), which the plan
   leaves open.
6. **Exam scoring and pass marks** are set here (the plan gives tasks and times only),
   following the v2.c06.l05 convention: every task at partial or better and the quiz 7/10.

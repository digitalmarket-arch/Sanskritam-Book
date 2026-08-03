# Verification log

Claim-level audit trail: every checkable claim in shipped lessons, its source, the verdict,
and where it is used. Appended per chapter; review passes (EDITORIAL_GUIDELINES §4) add their
findings here. Never delete rows — supersede them.

Verdicts: ✅ verified · ⚠️ softened/reworded · ❌ rejected (not used) · ⏳ pending Pass C

## Chapter v1.c01 — initial research (2026-07-20)

| Claim | Source | Verdict | Used in |
|---|---|---|---|
| Ṛgveda c. 1500–1200 BCE (consensus) | [REF:jamison2014 p.5] | ✅ | l01 §4 |
| Pāṇini c. 4th c. BCE, estimates vary | [REF:cardona1997] | ✅ (range phrasing) | l01 §4 |
| saṃskṛta = "refined" (सम् + √कृ) | [REF:monierwilliams1899 s.v.] | ✅ | l01 §8 |
| Sanskrit in Eighth Schedule (22 languages) | Constitution of India | ✅ | l01 §5 |
| 2011 census: 24,821 mother-tongue reports | Census of India 2011 | ✅ (phrased softly) | l01 §4 |
| yoga/karma/avatar/guru/mantra are loans; jungle via Hindi; sugar via śarkarā chain | OED etymologies | ✅ | l01 §13 |
| mother/mātṛ etc. are cognates not loans | [REF:mallory2006] | ✅ | l01 §13, l04 §13 |
| BG 10.33 akṣarāṇām akāro 'smi | [REF:bhagavadgita 10.33] | ✅ locus verified | l03 §17 (SYMBOL) |
| Varṇamālā ordering is articulatory | [REF:whitney1889 §19–75] | ✅ | l02 §5 |
| Śikṣā v.13: eight sthānas | [REF:paniniyashiksha 13] | ✅ (TRADITION) | l02 §4 |
| Śikṣā v.3: 63/64 varṇas | [REF:paniniyashiksha 3] | ✅ (TRADITION) | l02 §4 |
| Vowel inventory = 13; अं/अः ayogavāha | [REF:whitney1889 §70–73] | ✅ | l02 §8 |
| Retroflexes cross-linguistic | [REF:masica1991] | ✅ | l02 §5 |
| Devanagari = abugida; inherent अ; mātrā; virāma | [REF:masica1991 ch.6] | ✅ | l02/l03/l04 §15 |
| Brāhmī → Gupta → Nāgarī → Devanagari | [REF:masica1991 ch.6] | ✅ | l02 §4 |
| अ = /ɐ/ (saṃvṛta), course value | STYLE_GUIDE §2.1; [REF:ohala1994] | ✅ (documented decision) | l03 §10 |
| Aṣṭādhyāyī ends अ अ (8.4.68), saṃvṛta doctrine | [REF:ashtadhyayi 8.4.68]; [REF:cardona1997] | ✅ | l03 §4 (TRADITION) |
| a most frequent vowel | [REF:whitney1889 §22] | ⏳ exact § to confirm in Pass C | l03 §5 |
| Hindi final-schwa deletion (source of "dharm") | [REF:ohala1994] | ✅ | l03 §12 |
| आ = /ɑː/; dīrgha = 2 mātrās | [REF:whitney1889 §22]; Śikṣā doctrine | ✅ | l04 §10 |
| कल/काल and तल/ताल attested minimal pairs | [REF:apte1890 s.v.] | ✅ | l04 §13 |
| L4 word list all attested (मम माता लता माला कला कमल तल काल ताल अमल कमला मत) | [REF:apte1890], [REF:monierwilliams1899] | ✅ | l04 §14 |
| mātā ~ mother ~ māter ~ mētēr < PIE *méh₂tēr | [REF:mallory2006] | ✅ | l04 §13 |
| Retrieval practice effect | [REF:roediger2006] | ✅ | all §3/§19 design |
| Spacing effect | [REF:cepeda2006] | ✅ | all §20/§21 design |

## Review-pass findings

### v1.c01 — passes A–D (2026-07-20)

| Pass | Finding | Resolution |
|---|---|---|
| A | `scripts/validate.py` transliteration diff over all 5 lessons: after tightening the pair heuristics (multi-word Devanagari capture; gloss/option-marker exclusion), 0 mismatches. IPA cross-checked cell-by-cell against STYLE_GUIDE §2 — all conform. | validator green |
| A | l02 grid described retroflex as "tongue tip curled behind the teeth" — articulatorily wrong (that region is dental/alveolar). | reworded: "curled back toward the roof of the mouth" |
| A | ʑ (of /d͡ʑ/) missing from the validator's IPA inventory — validator bug, not content. | added to IPA_CHARS |
| B | Hindi sections (§7) of l01–l05 read standalone: native register, agreement correct, terminology matches GLOSSARY. No changes. | pass |
| C | l01 present-day-usage claim cited no reference (flagged by drafting agent). | added REFERENCES key `census2011`; inline [REF:census2011] |
| C | Whitney frequency locus (research-notes open question): exact §22 not verifiable offline. | citations softened to §§19–22 range in l03/l04 + notes; claim stays qualitative |
| C | GLOSSARY listed अयोगवाह first-taught as v1.c02; l02 introduces it. | corrected to v1.c01.l02 |
| C | l03 quoted the banned romanization "Amrit" as a counter-example (denylist hit). | reworded to describe the schwa-dropped form without printing it |
| C | Register audit: SYMBOL content confined to l03 §17 (BG 10.33); Śiva-drum legend TRADITION-labeled (l02 §17); no banned claims in any lesson; quizzes assess FACT only (l05 task D handles registers as content, key included). | pass |
| D | 27-section contract, id↔path, prereq graph, answer-key separation, vocabulary headers: validator green on all 5 lessons. Objectives→exercise/quiz mapping stated explicitly in each lesson's §2 and spot-verified in l03/l05. Production exercises ≥2 in every lesson. | pass |

Status change: v1.c01 lessons 01–05 `draft` → `reviewed` (passes logged above).

## Chapter v1.c02 — research verdicts (2026-07-21)

| Claim | Source | Verdict | Used in |
|---|---|---|---|
| इति/ईति attested minimal pair ("thus"/"calamity") | [REF:apte1890 s.v. ईति] | ✅ | l01 §13 |
| कुल/कूल attested pair ("family"/"bank") | [REF:apte1890] | ✅ | l02 §13 |
| ऋ classical /r̩/; [ɾɪ]/[ɾu] regional reflexes | [REF:whitney1889 §24] | ✅ (respectful-variant framing) | l03 §5, §7 |
| अमृत ~ Greek ámbrotos/ambrosía, PIE *mer- | [REF:mallory2006], [REF:burrow2001] | ✅ | l03 §13 |
| ए ओ always long, pure; ऐ औ diphthongs; sandhyakṣara class | [REF:whitney1889 §§27–29] | ✅ | l04/l05 |
| Modern Hindi ऐ=[ɛː], औ=[ɔː] vs Sanskrit diphthongs | [REF:ohala1994] | ✅ | l04 §7, l05 §7 |
| ॐ = [oːm] phonetically; single ligature U+0950 | [REF:whitney1889 §28] | ✅ FACT layer | l05 §17 |
| a-u-m analysis = Māṇḍūkya framework | [REF:monierwilliams1899 s.v. ओम्]; Māṇḍūkya trad. | ✅ TRADITION layer, attributed | l05 §17 |
| Anusvāra homorganic before stops; visarga /h/ | [REF:whitney1889 §§67–73] | ✅ | l06 §5 |
| अंक/अङ्क orthographic equivalence | [REF:whitney1889 §73] | ✅ (convention framing) | l06 §8 |
| All 42 cumulative words attested | [REF:apte1890], [REF:monierwilliams1899] | ✅ | l07 §14 |

## Review-pass findings — v1.c02 (2026-07-21)

| Pass | Finding | Resolution |
|---|---|---|
| A | Validator over all 7 lessons: 4 pair-capture false positives from syllable-breakdown displays (l01 §15 area, l03 §7/§13, l04 §2, l06 §8 grid) reworded; one Hindi-sentence capture (l03 §7) reworded; final run 0 errors 0 warnings. IPA spot-checked against contract incl. new values /r̩ ɐi̯ ɐu̯ ŋ h/. | green |
| B | Hindi §7 sections read standalone (l03 excerpt verified in depth: ऋ regional-variant framing respectful and accurate; l07 written natively). Terminology matches GLOSSARY; अनुस्वार/विसर्ग/सन्ध्यक्षर added to GLOSSARY with first-taught ids. | pass |
| C | ॐ three-layer treatment verified (FACT cited Whitney §28; TRADITION attributed to Māṇḍūkya with honest dating; SYMBOL never assessed — 0 SYMBOL blocks in any §19). Register audits present in all seven §27s. No banned claims (trap cards quote them only as documented errors, per policy). | pass |
| D | 27-section contract validator-enforced; objectives→assessment mapping present in every §2; ≥2 production exercises per lesson; answer keys separated; cumulative word table cross-checked against the six lessons' §14 tables (exact match). | pass |

Status change: v1.c02 lessons 01–07 `draft` → `reviewed`.

## Chapter v1.c03 — research verdicts (2026-07-30)

| Claim | Source | Verdict | Used in |
|---|---|---|---|
| Manner row (voiceless/asp/voiced/breathy/nasal) uniform across vargas | [REF:whitney1889 §§39–50], [REF:ladefoged2015] | ✅ | l01 §5, all |
| English initial voiceless stops aspirated ("sky" vs "kite") | [REF:ladefoged2015] | ✅ | l01 §5 |
| ज़/फ़/ड़ are Hindi–Perso-Arabic/NIA developments, absent in Sanskrit | [REF:masica1991], [REF:ohala1994] | ✅ | l02/l05/l03 §7,§12 |
| Palatal stop [c] (Pāṇinian description) vs pan-Indic affricate | [REF:cardona1997]; STYLE_GUIDE decision | ✅ HISTORY note | l02 §4 |
| ङ ञ ठ ड ढ ण frequency honesty (initial rarity, internal frequency) | [REF:apte1890] survey | ✅ | l01–l03 §8 |
| खग = ख "sky" + ग bound "going" | [REF:apte1890 s.v. खग] | ✅ FACT | l01 §13 |
| मधु ~ mead ~ méthu (PIE) | [REF:mallory2006] | ✅ | l04 §13 |
| पथ ~ path (PIE kin) | [REF:mallory2006] | ✅ | l05 §13 |
| Pause-form convention for V1 sentences (sandhi deferred to V3) | Whitney (pada-pāṭha style); course decision documented | ✅ FACT-framed | l05 §8, l02 §13 |
| All ch3 words attested (55 across l01–l05 lists) | [REF:apte1890], [REF:monierwilliams1899] | ✅ | l06 §14 cumulative |

## Review-pass findings — v1.c03 (2026-07-30)

| Pass | Finding | Resolution |
|---|---|---|
| A | Validator: 2 pair-capture false positives in l05 (manner-label and drill-label parentheses) reworded; final run 0 errors 0 warnings across all six. IPA spot-checked (affricates, retroflexes, dentals, breathy series per contract). | green |
| B | Hindi §7s spot-read (l05 nuqta discipline framing verified respectful and accurate); objective-table Hindi natural. | pass |
| C | Register audit: SYMBOL absent from all quizzes; HISTORY items cited (palatal-stop note, retroflex typology); pause-form convention framed as FACT with honest deferral; no banned claims (nuqta trap cards quote errors as documented errors). | pass |
| D | 27-section contract green; objectives→assessment maps present; ≥2 production exercises each; l06 cumulative table sourced from research-note lists. | pass |

Status change: v1.c03 lessons 01–06 `draft` → `reviewed`.

## Chapter v1.c04 — research verdicts (2026-07-30)

| Claim | Source | Verdict | Used in |
|---|---|---|---|
| antaḥstha vowel-kinship (य~इ र~ऋ ल~ऌ व~उ) | [REF:whitney1889 §§51–58] | ✅ | l01 §4 |
| व = /ʋ/ labiodental approximant | STYLE_GUIDE; [REF:ladefoged2015] | ✅ | l01 §5 |
| श /ɕ/ palatal vs ष /ʂ/ retroflex; Hindi merges them in speech | STYLE_GUIDE; [REF:ohala1994] | ✅ | l02 §5, §7 |
| शत/दश ~ centum/decem (shared PIE descent) | [REF:mallory2006] | ✅ (correct anti-IR-033 framing) | l02 §13 |
| ह /ɦ/ voiced glottal fricative; ūṣman class traditional | [REF:whitney1889 §65] | ✅ FACT+TRADITION split | l03 §4 |
| हिमालय = हिम + आलय; "Himalaya" an English LOAN | [REF:apte1890]; OED | ✅ loan-vs-cognate contrast used | l03 §13 |
| गृह → Hindi घर descent | [REF:masica1991] | ✅ | l03 §8 |
| Inventory completion counts (13+2+33) | [REF:whitney1889 §§19–75] | ✅ | l03 §8, l04 |
| All ch4 words attested (~43 across l01–l03) | [REF:apte1890], [REF:monierwilliams1899] | ✅ | l04 §14 |
| Name-words (राम शिव सीता हरि) register policy: lexical FACT + one TRADITION line | STYLE_GUIDE §4 | ✅ audited | l01–l03 |

## Review-pass findings — v1.c04 (2026-07-30)

| Pass | Finding | Resolution |
|---|---|---|
| A | Validator first run: 0 errors, 0 warnings across all four lessons (the pair-capture conventions have stabilized). IPA spot-checked (/j ɾ l ʋ ɕ ʂ s ɦ/ per contract). | green |
| B | Hindi §7 foci verified (श/ष merger station, व/ब, ह-dropping — respectful framing maintained). | pass |
| C | Register audit: SYMBOL absent from all quizzes; name-word policy applied (lexical senses FACT, devotional significance single TRADITION lines); ह classification handled as FACT+TRADITION pair; loan-vs-cognate distinction correct in both directions (हिमालय loan; शत/दश cognates). | pass |
| D | 27-section contract green; objectives→assessment maps present; ≥2 production exercises per lesson; l04 task keys complete incl. the full ordered varṇamālā. | pass |

Status change: v1.c04 lessons 01–04 `draft` → `reviewed`.

## Chapter v1.c05 — research verdicts (2026-07-31)

| Claim | Source | Verdict | Used in |
|---|---|---|---|
| Virāma silences inherent vowel; word-final bare consonants written with it; हलन्त naming | [REF:whitney1889 §9]; [REF:masica1991 ch.6]; [REF:apte1890 s.v. हल्] | ✅ | l01 §4–5, §15 |
| अहम् ~ Latin *ego* ~ English *I* (PIE first-person pronoun, cognates not loans) | [REF:mallory2006] | ✅ | l01 §13 |
| जगत् connected with √गम् "go" ("the moving one") | [REF:apte1890 s.v. जगत्] | ✅ (presented as dictionary connection, one line) | l01 §13 |
| अहम् वदामि → अहं वदामि in connected speech (म्→ं sandhi habit) — honest deferral to V3 | [REF:whitney1889 §§213–214 range not verified offline — claim kept § -free as course convention note] | ✅ framing | l01 §6, §19 Q8 |
| Akṣara as script unit; conjunct = reduced non-final + full final carrying vowel | [REF:masica1991 ch.6] | ✅ | l02 §4–5, §15 |
| Brāhmī family attested from Aśokan inscriptions (3rd c. BCE); clusters fused from earliest records | [REF:masica1991 ch.6] | ✅ | l02 §4 HISTORY |
| Unicode: conjunct = C + ् + C (क्ष = क ् ष) | Unicode Standard, Devanagari block (inline attribution; no REF key by design) | ✅ | l02 §5, l03 §5, l04 §15 |
| Frequency honesty: few dozen conjuncts cover most classical text (number-free phrasing) | [REF:masica1991 ch.6]; [REF:apte1890] survey framing | ✅ | l02 §5, l03 §15 |
| नमस्ते = नमः + ते; ḥ→s seam = sandhi (deferred) | [REF:apte1890 s.v. नमस्] | ✅ | l02 §13 |
| सत्य built on सत् + -य | [REF:apte1890 s.v. सत्य] | ✅ one-line morphology | l02 §13 |
| Three conjunct formation patterns (horizontal / vertical stack / irregular fused) | [REF:masica1991 ch.6] | ✅ | l02 §15, l03 §5 |
| क्ष त्र ज्ञ श्र द्ध द्व द्य (+ ह्य ह्म) as learned units; components as stated | [REF:masica1991 ch.6] | ✅ | l03 §5, §15 |
| Chart convention (क्ष त्र ज्ञ appended to varṇamālā) ≠ inventory arithmetic | [REF:masica1991 ch.6] | ✅ | l03 §4 |
| ज्ञ classical /d͡ʑɲ/ per components; [gj]/[dn̪j] regional habits (ऋ-precedent framing) | [REF:whitney1889] (bare — precise § not locatable offline; FACT register, substance standard) | ✅ | l03 §5, §9–10 |
| √ज्ञा ~ know ~ gnōsis (\*ǵneh₃-); द्वि/त्रि ~ two/three; √विद् ~ wit/vidēre (\*weid-) | [REF:mallory2006] | ✅ sibling framing kept | l03 §13 |
| क्षेत्र → Hindi खेत descent | [REF:masica1991] | ✅ | l03 §13 |
| मित्र neuter; Vedic Mitra deity note | [REF:apte1890 s.v. मित्र]; Ṛgveda (TRADITION, named) | ✅ | l03 §13 |
| रेफ as the tradition's proper name for r | [REF:apte1890 s.v. रेफ] | ✅ | l04 §4 |
| Repha superscript from Nāgarī manuscript tradition (modest, undated phrasing) | [REF:masica1991 ch.6] | ✅ | l04 §4 HISTORY |
| Positional r-variants spell one /ɾ/; repha placed rightmost incl. mātrā-post; ट्र caret; रु रू units | [REF:masica1991 ch.6] | ✅ | l04 §5, §8, §15 |
| dharma/karma/mantra genuine English loans; शर्करा → sugar chain | [REF:apte1890]; OED; loan table v1.c01.l01 (verified: शर्करा row present) | ✅ | l04 §13 |
| चक्र ~ wheel ~ kúklos < \*kʷekʷlos | [REF:mallory2006] | ✅ | l04 §13 |
| BU 1.4.14 identifies dharma with truth | [REF:brhadaranyaka 1.4.14] | ✅ TRADITION, locus carried | l04 §17 |
| Avagraha marks elided अ (सोऽहम् = सः + अहम्); candrabindu = nasalized vowel; daṇḍa/double daṇḍa; digits ०–९ | [REF:whitney1889 §16]; [REF:masica1991 ch.6] | ✅ | l05 §8 |
| International digits descend from Indian numerals via Arabic transmission | [REF:ifrah2000] (entry added to REFERENCES.md) | ✅ HISTORY | l05 §8 |
| सोऽहम् as Vedānta/yoga formula | TRADITION register, attributed, texts deferred to V5 | ✅ never assessed | l05 §8 |
| Cumulative arithmetic 157 + 57 = 214 (l01 10 · l02 14 · l03 16+पश्य · l04 17) | in-course ledger (canonical: v1.c04.l04 §14) | ✅ harmonized across l01/l04/l05/chapter.md | l05 §14 |

## Review-pass findings — v1.c05 (2026-07-31)

| Pass | Finding | Resolution |
|---|---|---|
| A | Validator: 0 errors, 0 warnings across all five lessons on first full run (one missing REF anchor — ifrah2000 — added to REFERENCES.md). IPA spot-checked cell-by-cell against STYLE_GUIDE §2 (/st̪/ clusters, /d͡ʑɲ/, geminate /d̪d̪ʱ/, [ɾ] in all three r-guises, nasalized [ɑ̃ː] for ँ). | green |
| B | Hindi §7 foci verified per lesson (l01 हलन्त vs Hindi schwa-deletion contrast; l02 स्कूल/हिन्दी recognition-to-analysis ladder; l03 ग्यान-habit respect framing; l04 शर्मा/वर्मा familiarity; l05 दण्ड/चन्द्रबिन्दु/अंक Hindi assets + अवग्रह warning). Gender/agreement clean. | pass |
| C | Register audit: SYMBOL absent from all quizzes; HISTORY items all cited (Brāhmī, manuscript repha, digits ancestry); TRADITION items attributed and never assessed (हलन्त Pāṇinian term, śānti-pāṭha, Vedic Mitra, BU 1.4.14, सोऽहम्); nuance reject-cards (ज्ञ "must", क्ष "single letter", स् त "changes sound") keyed to wording, respect framing intact. l04 §27's शर्करा flag resolved: the word needs only the repha (श-र्क-रा) — no stacking — readable as claimed. l03 §27's पश्य flag resolved: l02 makes no पश्य claim; l03's retirement stands. | pass |
| D | 27-section contract green; objectives→assessment maps verified (l01's pre-wired §2 map honored exactly by §§14–27 as completed); ≥2 production exercises per lesson; script-law numbering reconciled repo-wide (grid principle un-numbered in c03.l06/c04.l04; series now 1–4 + 5 virāma + 6 conjunct); l05 task keys complete incl. both exam directions and the ceremony components. Drafting note: all five lessons drafted by parallel agents; l01 §§14–27 and all of l05 completed in the main loop after agent session limits; sibling cross-references (ceremony promise, 60-second bar, 12-item exam, Station 0) reconciled by hand. | pass |

Status change: v1.c05 lessons 01–05 `draft` → `reviewed`.

## Chapter v1.c06 — research verdicts (2026-07-31)

| Claim | Source | Verdict | Used in |
|---|---|---|---|
| Homorganic nasal rule; ङ्ग ङ्क ङ्घ ञ्च as vertical stacks; गंगा convenience spelling; anusvāra before sibilant = classical (संस्कृतम्) | [REF:masica1991 ch.6]; recaps v1.c02.l06 | ✅ | l01 §5, §8, §15 |
| पञ्चम as traditional name for a varga's fifth member | [REF:apte1890 s.v. पञ्चम] | ✅ | l01 §4 |
| नागरी → देवनागरी naming history "debated", no single story endorsed | [REF:masica1991 ch.6] | ✅ hedged HISTORY | l01 §4 |
| संस्कृत = sam + kṛta with inserted s | [REF:monierwilliams1899 s.v. saṃskṛta] | ✅ | l01 §13 |
| पञ्च ~ pénte ~ five (\*pénkʷe, cognates) | [REF:mallory2006] | ✅ | l01 §13 |
| नमस्कार = नमः + कार; विद्यालय = विद्या + आलय (standard modern usage, honestly framed) | [REF:apte1890] | ✅ | l01 §13 |
| संवाद = सम् + वाद (√वद्) | [REF:apte1890 s.v. संवाद] | ✅ | l02 §4 |
| Ṛgveda dialogue hymns (two-speaker, no narrator) | [REF:jamison2014 p.5] | ✅ | l02 §4 HISTORY |
| BG calls itself धर्म्यं संवादम् | [REF:bhagavadgita 18.70] — locus verified (अध्येष्यते च य इमं धर्म्यं संवादम् आवयोः) | ✅ TRADITION | l02 §4 |
| Formulaic-chunk pedagogy for मम नाम frame | [REF:nation2013] | ✅ | l02 §5 |
| नामन् ~ nōmen ~ name (cognates) | [REF:monierwilliams1899 s.v. नामन्]; standard PIE set | ✅ | l02 §13 |
| छात्र connected to छत्र "umbrella" | [REF:monierwilliams1899 s.v. छात्र] | ✅ | l02 §13 |
| छात्रा as modern feminine — mentioned, not taught; बालिका classical default | research note §2 Pass C decision | ✅ implemented | l02 §12, §16 |
| √पठ् family (पठति, पठनम्, पाठ → Hindi पाठ; पढ़ना descent) | [REF:monierwilliams1899 s.v. पठ्]; [REF:masica1991] | ✅ | l03 §4, §7 |
| अर्जुन "bright, white, silvery"; name attested from the epics | [REF:monierwilliams1899 s.v. अर्जुन] | ✅ neutral framing, epic bearer deferred | l03 §4 HISTORY |
| गच्छति unattested in any §14 table → passage uses चलति | agent grep, verified | ✅ swap correct | l03 §17 |
| सः half-review via सोऽहम् (v1.c05.l05); सा taught as chunk | in-course ledger | ✅ | l03 §8, §14 |
| विद्या ददाति विनयम् — Hitopadeśa prastāvikā (section-level citation, no verse number claimed) | [REF:hitopadesha] | ✅ | l04 §8 |
| सत्यम् एव जयते = Muṇḍaka 3.1.6; national motto 1950 | [REF:mundaka 3.1.6]; [REF:stateemblem1950] | ✅ HISTORY | l04 §8 |
| सर्वे भवन्तु सुखिनः — no principal Upaniṣad contains it; "traditional, source unrecorded" | negative claim in checkable form | ✅ TRADITION with honesty note | l04 §8, §13 |
| Śloka = 4 pādas × 8 syllables — taught self-verifyingly (learner counts); no meter REF cited (macdonald locator dropped per research note 0.4 fallback) | the verse itself | ✅ | l04 §8, §13 |
| Pausa forms कश्चित्, दुःखभाक् (verse कश्चिद्, दुःखभाग् = sandhi) | course-observable precedent (वाक् v1.c05.l01); no § invented | ✅ | l04 §8, §10 |
| Cumulative arithmetic 214 + 12 + 7 + 4 = 237 | in-course ledger (canonical at l04 §27) | ✅ harmonized (l03 line corrected 232/236 → 233/237) | all four |

## Review-pass findings — v1.c06 (2026-07-31)

| Pass | Finding | Resolution |
|---|---|---|
| A | Validator: 0 errors, 0 warnings on l01–l03 first run; l04 (main-loop authored) had one section-heading mismatch (§7) and one wrapped IPA span — both fixed, full-curriculum run green (31 lessons). IPA spot-checked against STYLE_GUIDE §2 incl. /ŋ ɲ/ stacks, [t͡ɕʰ] in छात्रः, /ʈʰ/ in पठति, the verse transcriptions. | green |
| B | Hindi §7 foci verified per lesson (l01 गंगा/पाँच/panch honesty; l02 तुम-आप ↔ त्वम्-भवान् mapping, नाम two-beat discipline; l03 पढ़ना ← पठति descent, endings honesty; l04 the three texts with source labels + the motto's everyday familiarity). | pass |
| C | Register audit: SYMBOL ×1 total (l01 §17 Gaṅgā — never assessed); HISTORY items all cited (devanāgarī naming hedged, Ṛgveda dialogue hymns, Arjuna name, Muṇḍaka+motto); TRADITION attributed (BG 18.70, the maṅgala verse with unrecorded-source honesty as the register-teaching finale). Fabrication check on cross-references: l01's पञ्च "glimpse" callback VERIFIED against v1.c03.l02 (line 257 says exactly that); l01's spelling-twins attribution corrected Chapter 3 → Chapter 2 (v1.c02.l06) in §3 and §23; Hook adjusted to acknowledge ङ's display cameos (अङ्क in c02.l06, ङ्क preview in c03.l01). l02's Maya quote diffed verbatim against v1.c01.l01 §16. अपि ear-word claim verified (v1.c02.l05 line 166). | pass |
| D | 27-section contract green; objective→assessment maps present in all four; ≥2 production exercises each; ledger chain consistent (226 → 233 → 237); the c04/c05 "consolidated list in v1.c06" promise resolved as the generated word-appendix asset (l04 §23/§27), not an inline table. **Editorial reconciliation executed:** v1.c01.l01 §16's false forward-promise ("Sanskrit self-introductions come in Chapter 2") corrected at source to "later in this volume"; l02 §17's verbatim quote and closing note updated to match; l02 §27 flag marked resolved. Drafting note: l01–l03 agent-drafted (all landed complete despite agent session limits); l04 main-loop authored. | pass |

Status change: v1.c06 lessons 01–04 `draft` → `reviewed`. **Volume 1 review complete.**

## Chapter v2.c01 — research verdicts (2026-08-02)

| Claim | Source | Verdict | Used in |
|---|---|---|---|
| स्वस्ति classical/Vedic attestation (= सु + अस्ति); farewell-blessing use | [REF:monierwilliams1899 s.v. svasti] | ✅ HISTORY/FACT | l01 §4, l04 §13 |
| अञ्जलिः classical word; the gesture = cultural practice (TRADITION, never assessed) | [REF:monierwilliams1899 s.v. añjali] | ✅ registers split correctly | l01 §13, l05 task D |
| भोः classical address particle; भद्रम् ते epic courtesy chunk | [REF:apte1890] | ✅ | l01 |
| गुरवे नमः dative pattern — display only, case system deferred | policy (notes §6) | ✅ implemented; §12 warns against generalizing | l01 §15, §12 |
| kuśala-inquiry as classical etiquette; अपि-initial polite question | [REF:apte1890 s.v. कुशल / s.v. अपि] | ✅ | l02 §4–5, §8 |
| कुशल ← कुश grass etymology — framed as traditional story recorded in dictionaries | [REF:monierwilliams1899 s.v. कुशल] | ✅ TRADITION register, exemplary | l02 §4 |
| कुशली gendered; कुशलिनी display; neuter कुशलम् as the universal answer | [REF:apte1890]; छात्रा precedent | ✅ | l02 §8, §15 |
| suprabhāta word classical (devotional genre), greeting-use modern — both-things-true | [REF:monierwilliams1899 s.v. suprabhāta] | ✅ label showcase | l03 §8, §13 |
| शुभरात्रिः modern calque; शुभप्रभातम् 1.x variant recognized | usage label policy | ✅ | l03 |
| दिन ~ Lith. diena ~ OCS dĭnĭ cognate set; English *day* explicitly NOT cognate | [REF:mallory2006] | ✅ the day-trap avoided in print | l03 §13 |
| मध्याह्नः = मध्य + अह्न; ह्न via components | [REF:apte1890 s.v. मध्याह्न] | ✅ | l03 §8 |
| धन्यवादः attested compound; everyday-thanks use = modern convention; अनुगृहीतोऽस्मि classical display | [REF:monierwilliams1899 s.v. dhanyavāda] | ✅ THE label showcase | l04 §4, §8 |
| कृपया modern please-convention; कृपा classical noun | usage label policy; [REF:apte1890] | ✅ | l04 §8 |
| क्षमस्व classical imperative chunk (whole-word, पश्य precedent) | [REF:apte1890 s.v. क्षम्] | ✅ no paradigm claims | l04 §8 |
| न precedes what it negates; नास्ति = न + अस्ति (नास्तिक/आस्तिक X-ray) | [REF:apte1890 s.v. न / s.v. नास्तिक] | ✅ Whitney § not cited (notes 0.10 flag resolved: cite bare/none) | l04 §13, §15 |
| श्रीमान् classical honorific; पुनः classical adverb; पुनः मिलामः modern formula w/ पुनर्- sandhi preview | [REF:monierwilliams1899]; usage label | ✅ | l04 §8 |
| svastika etymological note kept to one line with modern-history firewall | [REF:monierwilliams1899 s.v. svasti] | ✅ | l04 §13 |
| Cumulative chain 237 → 240 → 243 → 251 → 260 (23 ledger-new; 26 headwords) | in-course ledger | ✅ reconciled (parallel-draft approximations corrected) | all |

## Review-pass findings — v2.c01 (2026-08-02)

| Pass | Finding | Resolution |
|---|---|---|
| A | Validator: l01–l03, l05 clean on landing; l04 (main-loop authored) had one transliteration-pair false positive (निषेध note) — reworded; full run green (36 lessons). IPA spot-checked (/d̪ʱ/ onsets, [kr̩] in कृपया, /ɲd͡ʑ/ in अञ्जलिः, visarga finals). | green |
| B | Hindi §7 foci verified (l01 अंजलि familiarity; l02 "कैसे हो" mapping; l03 सुबह-शाम cycle; l04 धन्यवाद/कृपया labels — the "लेबल ही सीख है" framing; honorific register natural). | pass |
| C | Register audit: the volume's new classical/modern label axis applied per word and consistently across lessons (l04 §15 keystone table = l05 task D source, rows diffed); TRADITION items attributed (añjali practice, kuśa etymology-story, suprabhātam genre, visarga echo); HISTORY cited (svasti Vedic, kuśala-inquiry); SYMBOL ×0; no modern formula presented as classical anywhere (grep-audited for "classical" claims). V1-exam +1-week interval delivered in l01 Station 0 with the three-artifact ceremony as promised by v1.c06.l04. | pass |
| D | 27-section contract green; objective maps present ×5; ≥2 production exercises each; ledger reconciled to canonical chain (l02 ≈249→243, l03 ≈250/258→243/251, l05 ≈270→260, chapter.md updated); l05's parallel-draft integrator flag replaced with the reconciled figures; l04's asset path normalized to volume-2. Drafting note: l01–l03, l05 agent-drafted (landed complete despite session limits); l04 main-loop authored. | pass |

Status change: v2.c01 lessons 01–05 `draft` → `reviewed`.

## Chapter v2.c02 — research verdicts (2026-08-03)

| Claim | Source | Verdict | Used in |
|---|---|---|---|
| Kinship cognate shelf मातृ/पितृ/भ्रातृ/दुहितृ/स्वसृ ~ māter/pater/frāter/thygátēr/soror ~ mother/father/brother/daughter/sister — shared PIE descent, direction-honest | [REF:mallory2006]; [REF:burrow2001] | ✅ THE flagship; f/p correspondence note correct | l02 §5, §13 |
| Jones 1786 "sprung from some common source" address | [REF:mallory2006] | ✅ quote verbatim (Third Anniversary Discourse) | l02 §5 HISTORY |
| Kinship terms attested from Ṛgveda | [REF:jamison2014 p.5]; [REF:burrow2001] | ✅ | l02 §4 |
| वसुधैव कुटुम्बकम् — Hitopadeśa Mitralābha 71 (common editions) + Mahopaniṣad parallel | [REF:hitopadesha mitralābha 71] | ✅ hedged locus, TRADITION register | l02 §4 |
| भगिनी everyday / स्वसा cognate-carrier; Hindi बहन < भगिनी; दुहिता beside पुत्री | [REF:apte1890]; [REF:monierwilliams1899]; [REF:masica1991] | ✅ division-of-labor honesty | l01 |
| एषः/एषा chunks; तस्याः display | [REF:apte1890 s.v. एतद्] | ✅ no paradigm claims | l02 |
| World set s.vv. incl. पृथिवी/पृथ्वी variant; नगर-in-देवनागरी callback | [REF:apte1890]; [REF:monierwilliams1899] | ✅ | l03 |
| Ṛgveda's first word अग्निम् (RV 1.1.1) HISTORY framing | [REF:rigveda 1.1.1]; [REF:jamison2014] | ✅ | l03 §4 |
| पञ्चतत्त्व split: five words FACT / five-element grouping TRADITION (Sāṅkhya-Vaiśeṣika lineages, attributed) | dictionaries + standard doctrine framing | ✅ the register showcase; never quizzed as physics | l03 §5, §15 |
| अग्निः ledger homecoming (ear-word v1.c01 → headword here) ~ Lat. ignis | [REF:mallory2006] | ✅ | l03 §13 |
| च enclitic placement; और→च correction; जगच्च seam preview | [REF:apte1890 s.v. च] | ✅ the 1.x fix delivered | l04 |
| कुत्र completes location kit | [REF:apte1890 s.v. कुत्र] | ✅ | l04 |
| Ledger chain 260 → 267 → 270 → 280 → 282 (22 ledger-new + 1 upgrade) | in-course; chain prescribed in specs and held by agents | ✅ no reconciliation needed (a first) | all |

## Review-pass findings — v2.c02 (2026-08-03)

| Pass | Finding | Resolution |
|---|---|---|
| A | Validator: all five lessons 0 errors 0 warnings (l01–l04 on landing; l05 main-loop authored, clean first run). IPA spot-checks pass (/eːʂ/ pair, /r̩/ onsets, /ɦ/ in दुहिता). | green |
| B | Hindi §7 foci verified (यह-vs-trio in l02/l05; बहन/भाई kinship familiarity; पञ्चतत्त्व discussion register; दिशा/तीर framing in l05). | pass |
| C | Callout audit: HISTORY items cited (Ṛgveda kinship attestation, Jones 1786 verbatim, RV 1.1.1); TRADITION attributed (वसुधैव कुटुम्बकम् with hedged locus + Mahopaniṣad note; पञ्चतत्त्व doctrine; visarga echo); no derivation arrow anywhere between cognate columns; the और correction framed kindly. l05's nine D-cards diffed against their source lessons — no card overreaches. | pass |
| D | 27-section contract green ×5; objective maps present; ledger chain held by design across parallel drafts (specs now prescribe the chain — process improvement locked in); enclitic wording in l05 §16 (भगिनी अहम् च अत्र) consistent with l04 §15's rule. Drafting note: l01–l04 agent-drafted, l05 main-loop authored (the recurring pattern). | pass |

Status change: v2.c02 lessons 01–05 `draft` → `reviewed`.

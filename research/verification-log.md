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

## Chapter v2.c03 — research verdicts (2026-08-04)

| Claim | Source | Verdict | Used in |
|---|---|---|---|
| Number stems 1–10 + neuter counting chant as recitation practice; inflection deferred (v4.c05) | [REF:apte1890]; [REF:whitney1889 §§475–489] | ✅ Whitney range verified: §475 cardinals, §§482–485 inflection, §§487–488 ordinals, §489 derivatives — the numerals chapter; lessons keep § citations out and cite bare | l01, l02 |
| Numeral cognate shelf द्वि~duo~two · त्रि~trēs~three · चतुर्~quattuor~four · पञ्च~Gk. pénte~five · षट्~sex~six · सप्त~septem~seven · अष्ट~octō~eight · नव~novem~nine · दश~decem~ten — parallel PIE descendants, no arrows | [REF:mallory2006]; [REF:burrow2001] | ✅ flagship shelf; एक honestly cognate-less in everyday English | l01 §13, l02 §13 |
| THE October fix: month names are Latin counting its own March-first calendar (octō/novem/decem → months 8–10); अष्ट~octō siblings, neither derives from the other | [REF:mallory2006]; [REF:oed] | ✅ 1.x pp.30–31 quotes diffed against the PDF extraction this review: p.30 "Many English words come from these! Tri-angle, Oct-agon, Nov-ember, Dec-ember"; p.31 "दश (10) → December, Decimal" — both now quoted verbatim in l02 (§13, §23) | l02 §13/§23, l05 task D |
| नव homophony: "nine" (stem नवन्) vs "new" (नव) — two words, cognates *nine* and *new* | [REF:monierwilliams1899 s.vv.] | ✅ v1.c04.l01 ledger row honestly split | l02 |
| कति classical interrogative; bare-number answers | [REF:apte1890 s.v. कति] | ✅ no agreement teaching anywhere | l02 |
| Time words classical s.vv.; सप्ताहः = सप्त + अह; मासः upgrade uncounted | [REF:apte1890]; [REF:monierwilliams1899] | ✅; present-day-usage clause re-anchored to [REF:census2011] per the v2.c01 precedent | l03 |
| होरा — loan INTO Sanskrit from Greek hṓra with Hellenistic astronomy (jyotiṣa attestation, no date claimed); English *hour* goes back to the same Greek word via Latin and French — borrowing, not shared descent | [REF:monierwilliams1899 s.v. होरा]; [REF:burrow2001]; [REF:oed s.v. hour] | ✅ the direction showcase reversed; "descend" wording corrected to "go back to" in l03 §13 + l05 card 4 (descend stays reserved for cognacy) | l03 §13, l05 task D |
| Seven-planet week entered Indian usage early centuries CE with Hellenistic astronomy; वासर day-names later classical/medieval; Hindi -वार < -वासर; English day-names carry the same scheme | [REF:monierwilliams1899 s.v. वासर]; [REF:burrow2001]; [REF:masica1991]; [REF:oed s.vv. Sunday, Monday, Saturday] | ✅ hedged dating held chapter-wide (grep-audited — no precise date anywhere); "five thousand-odd years apart" removed from l02 | l04 |
| Compound fronts: रवि and गुरु prior headwords (v1.c04.l01); सोम never a prior headword | repo ledger sweep | ✅ fact base's three-of-seven corrected to two-of-seven throughout l04 | l04 |
| त्रि ledger status: cognate-mentioned only (v1.c01.l01, v1.c05.l03 §13), never a §14 headword | repo ledger sweep | ✅ counted new at l01; fact base §0.1/§1 corrected | l01 |
| Ledger chain 282 → 285 → 290 → 297 → 305 (23 ledger-new; मासः upgrade and कालश्च display uncounted) | prescribed in drafting specs | ✅ held by design across all five parallel drafts; l05's provisional arithmetic firmed at review | all |
| Task D final card set: nine cards incl. the both-directions card "dharma went Sanskrit→English; होरा went Greek→Sanskrit" (card 8, replacing the redundant दश~decem card) per chapter.md's Assessment promise; fact base §5's six-card sketch superseded — recorded here, notes left frozen | fact base §5; chapter.md | ✅ | l05 §18 |
| Arrow-naming convention: cards name an arrow by its ORIGIN — dharma = arrow east, होरा = arrow west ("name the arrow by where it comes from"); geographic travel prose reconciled with explicit clauses | v2.c02.l05 precedent | ✅ stated at first use in l03 §13 and l05 §8; l03 §22–§25 and l05 §24 aligned; l05 §13's label-free travel prose left as compatible | l03, l05 |

## Review-pass findings — v2.c03 (2026-08-04)

| Pass | Finding | Resolution |
|---|---|---|
| A | Adversarially verified review (4 dimensions, 3-skeptic refuter panels; 56 findings confirmed, 7 refuted). Blocker: §17 model line त्वम् एकम् "You are one!" predicated neuter एकम् of masculine त्वम् — rewritten to the counting-only line (माया हसति — एकम्!). Also: plural gloss on singular पुस्तकम् line fixed; voice-over IPA drift [kɑːlɐhɐ]→[kɑːlɐh] (×2); "other nine words"→ten; register-audit total ×7→×8; चतुर् "first bare-consonant headword" claim narrowed to bare र्; l05 §7 Hindi direction wording unified to the origin formulation (पूर्व से/पश्चिम से). Validator green ×5 after fixes. | green |
| B | Policy: bare vocative अर्जुन → nominative address per v2.c01.l04 rule (l01 §16 ×2); सन्ति display pointer corrected ("verbs begin next chapter, and they begin singular" — v2.c04 is singular-only); l03's inline exercise answers moved into §19 <details> with authored keys; STYLE_GUIDE §4 rule 4 extended with the cited-HISTORY carve-out (mirrored in EDITORIAL_GUIDELINES + review checklist) covering l04 Q1/ex-4 and l05 Q9; title seams opened read-only — एकादिपञ्चान्ताः glossed (l01 §8), कालश्च previewed (l03 §7 Hindi + §15 English, display-only ledger row beside षड्/जगच्च). | pass |
| C | Citations: oed key added to REFERENCES.md anchoring the hour chain, the month etymologies and the English day-name parallel; 1.x quotes restored verbatim after a PDF-extraction diff (the "(10)" survives the validator — its IAST check skips digit parentheses); Whitney §§475–489 verified as the numerals chapter, lessons cite bare; modern-spoken-usage clause re-anchored [REF:census2011]; chapter.md's non-verbatim quote converted to a paraphrase without quotation marks; l02 §23's asset chip now renders the verbatim caption. | pass |
| D | Coherence: Station 0 chain reconciled end-to-end (l01 §20 books l02's +1-day chant+cards; l03 §20 books the होरा retell l04 §3 runs; dictation re-takes routed to homework rows); l05 firmed from provisional ≈ arithmetic to the confirmed chain (282→285→290→297→305, §1/§14/§20/§24/§25/§27); task E runs on the learner's l04-§21 grid with the printed cards as stand-ins (§18/§7/§23/§27); card 8 swapped to the promised both-directions card, tallies unchanged (6 FACT + 3 reject); l04's three remaining three-of-seven spots corrected (§20/§24/§25); calendar-card header spec aligned to full वासर forms; Q8 key citation widened to (l04 §8, §13). Drafting note: all five lessons agent-drafted (a first — the exam included); fixes applied by per-file agents off the verified findings. | pass |

Status change: v2.c03 lessons 01–05 `draft` → `reviewed`.

## Chapter v2.c04 — research verdicts (2026-08-06)

| Claim | Source | Verdict | Used in |
|---|---|---|---|
| laṭ (present) parasmaipada singular endings -मि/-सि/-ति mark person inside the verb; the -आमि lengthening stated as observed shape only | [REF:whitney1889] (cited bare); [REF:goldman2019] | ✅ singular only; dual/plural, other tenses and ātmanepada deferred with one forward line | l02 §15 |
| Ten-verb bank forms (गच्छति खादति पिबति पश्यति शृणोति लिखति जानाति + पठति वदति हसति; करोति; अस्मि/असि/अस्ति) and their 1sg/2sg forms | [REF:apte1890]; [REF:monierwilliams1899] s.vv. | ✅ every form re-checked; शृणोति/जानाति/करोति taught whole ("builds its stem differently"), no class numbers or root talk | l01–l05 |
| Cognates: जानाति ~ *know* ~ *gnōsis*; पिबति ~ Latin *bibit*; गच्छति and English *go* NOT related (गच्छति < PIE *gʷem-, kin of *come*/*venio*); लिखति no clean English cognate | [REF:mallory2006] | ✅ direction-honest; the go-card keyed to l01 §13's non-relation FACT (was "no claim anywhere" — corrected) | l01 §13, l05 task D |
| In-course history: the first readable -ति verb is चलति (v1.c03.l02); वदति arrived v1.c04.l01; 1sg readable from वदामि (v1.c05.l01), with अहं संस्कृतं पठामि heard/chanted since v1.c01.l01 | repo grep | ✅ the fact base's "वदति since v1.c03" was wrong and had propagated to chapter.md, l03 §3, l05 hook and l05 card 9 (keyed FACT) — all corrected; card 4 reworded to "reading 1sg forms" | chapter.md, l03, l05, notes |
| Pāṇinian person names (prathama = he, madhyama = you, uttama = I) | TRADITION, attributed to the Pāṇinian tradition | ✅ never assessed | l02 |
| Classical Sanskrit closes quotations with इति | [REF:whitney1889] | ✅ one framing line in l04 so the dash is not taken for Sanskrit punctuation | l04 §15 |
| Ledger chain 305 → 312 → 313 → 316 → 316 (11 ledger-new) | prescribed in drafting specs | ✅ held across all five lessons; l05's provisional notes firmed at review | all |

## Review-pass findings — v2.c04 (2026-08-06)

| Pass | Finding | Resolution |
|---|---|---|
| A | Adversarially verified review (4 dimensions; batch verifiers with a 3-lens majority for blocker/major): 70 confirmed (6 blocker, 34 major, 30 minor), 2 rejected, 1 unverified-minor resolved in the main loop. Blockers: false course history keyed as FACT (l05 card 9; l03 §3 key; chapter.md; fact base); l01's exercise-1 key mismatched to the cards actually dealt. Majors: an uncited 5,000-year figure in l01 §13/§26 (banned claim — removed); the false "ष is कृ's own habit" rationale (शृणोषि carries it too) — re-worded across l03/l04 and the fact base; l05's invented शृ- card (√शृ is a different verb) and virāma-root verb cards realigned to l02's a-final fronts; an untaught future form (गमिष्यामि) removed from an l05 frame; l01 dialogue speaker mix-up; an unsupported Apte idiom citation (अन्नम् करोति) withdrawn. Validator green ×5. | green |
| B | Policy: singular-only held; stem honesty without class numbers or roots; l02 instantiates the grammar-lesson contract (§15 heart, ≥2 production exercises both directions); keys only in §19; l02 now acknowledges v1.c06.l03's earlier person-tail preview. | pass |
| C | Citations: Whitney cited bare throughout; mallory2006 cognate sets confirmed; idiom claim without support withdrawn; no banned claims remain (5,000-year figure removed). | pass |
| D | Coherence: Station 0 chain c03.l05 → l01 → l02 → l03 → l04 → l05 verified item-for-item; l05's pre-sibling pointers audited against the real files and corrected; l04 §21 मम दिनम् homework matches l05 task E; chapter.md table and can-dos match the files. Drafting note: l05 drafted first by agent; l01/l03 landed before a usage-limit stop, l02/l04 completed on resume. | pass |

Status change: v2.c04 lessons 01–05 `draft` → `reviewed`.

## Deep research audit — all shipped content (2026-10-22 → 2026-10-24)

Scope: Volume 1 (31 lessons), Volume 2 Chapters 1–3 (15 lessons), their chapter frames and
research notes, REFERENCES, GLOSSARY, STYLE_GUIDE, EDITORIAL_GUIDELINES, README, ROADMAP,
CHANGELOG and the review checklist. (v2.c04 was reviewed separately, above, and joined only
the ledger reconciliation.)

Method: one expert auditor per lesson (Sanskrit forms and sentences, IAST, IPA against
STYLE_GUIDE §2, facts and dates, cognates and loan directions, citations and locators,
register discipline, every quiz and exercise key re-solved, Hindi, internal consistency,
course-history claims verified by grep), with web search for anything uncertain; nine
chapter-coherence auditors (Station 0 bookings, ledger chain, cross-lesson pointers, exam
alignment, fact base vs lessons); five course-wide sweeps (ledger, cross-references,
references/docs, banned claims and registers, phonetic consistency). Every finding was
re-checked by an evidence verifier; blocker and major findings additionally by an
independent domain expert and a fix skeptic, surviving only on a majority. Fixes were then
applied one agent per file and re-validated.

| Measure | Count |
|---|---|
| Findings confirmed | 1,264 (77 blocker · 510 major · 677 minor) |
| Findings rejected on verification | 109 |
| Fixes applied | 1,068 across 78 files |
| Duplicates resolved by another applied fix | 118 |
| Already fixed upstream when reached | 78 |
| Refused at fix time (false premise shown) | 1 |

Representative blockers and majors (all fixed): model-sentence grammar (सर्वे वदति →
सर्वे वदन्ति; a nominative कमला used as a vocative → कमले); नमस्ते taught as four beats
(→ three, na-ma-ste); the Ṛgveda's oral-only transmission understated ("roughly a
thousand years" → "well over a thousand years"); Sanskrit called Hindi's "direct" ancestor
(→ the ancestor through the Prakrits); visarga-less भो marked as an error although it is the
regular sandhi form in connected text; वार misdescribed as a "worn-down" वासर (वार is
Sanskrit's own day-word; सोमवार is itself Sanskrit); नव "nine" (numeral नवन्) conflated
with नव "new"; the य→[dʒ] habit blamed on English instead of Eastern Indo-Aryan readers and
the Hindi जुग/जोगी pattern; रु not taught as an irregular unit before learners write गुरु;
uncited "five thousand years" figures (banned) removed; a Hindi idiom that meant the opposite
of the English (गर्म सुर → गर्मजोशी भरे सुर); wrong answer keys re-solved; false
"taught at / readable since" course-history claims corrected; broken cross-lesson pointers
repaired; REFERENCES bibliographic details and roadmap/changelog dates corrected against the
sources and the git history.

**Ledger correction — supersedes the chains logged above for v2.c01–v2.c04.** Eight Volume 2
rows had been counted ledger-new although the words were already in the ledger: पिता, नदी,
एक, कति (identical Volume 1 headwords → review rows) and दिनम्, शुभम्, मेघः, कालः (sentence
dress or neuter of Volume 1 headwords → upgrade rows). Corrected exits: v2.c01 258 (was 260),
v2.c02 277 (was 282), v2.c03 297 (was 305), v2.c04 308 (was 316); per-lesson chains in
STYLE_GUIDE §8 terms are 237 → 240 → 243 → 249 → 258 · 258 → 264 → 267 → 275 → 277 ·
277 → 279 → 283 → 289 → 297 · 297 → 304 → 305 → 308 → 308. The counting rule is now written
down (STYLE_GUIDE §8). Volume 1's totals stand as published; its मति/मतिः pair predates the
upgrade rule and is documented there.

Decisions recorded: नव "nine" in v2.c03.l02 stays ledger-new (a distinct word, honestly
split from नव "new"); verb forms continue to count separately (Volume 1 practice), so
पश्यति and असि remain ledger-new in v2.c04.

Status: all 51 lessons validate with 0 errors and 0 warnings; JSON exports regenerated (51).

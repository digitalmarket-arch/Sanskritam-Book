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
| पथ ~ path (PIE kin) — superseded at audit: English *path* is not a regular cognate; पथ's kin are Lat. *pōns*, Gk *póntos* (note added at the 2026-11-10 sweep) | [REF:mallory2006], [REF:oed s.v. path] | ❌ corrected | l05 §13 |
| Pause-form convention for V1 sentences (sandhi deferred to V3) | Whitney (pada-pāṭha style); course decision documented | ✅ FACT-framed | l05 §8, l02 §13 |
| All ch3 words attested (60 entries across l01–l05 lists: 59 words + the ञ letter-entry; count corrected at the 2026-11-10 sweep) | [REF:apte1890], [REF:monierwilliams1899] | ✅ | l06 §14 cumulative |

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
| Virāma silences inherent vowel; word-final bare consonants written with it; हलन्त naming | [REF:whitney1889 §11]; [REF:masica1991 ch.6]; [REF:apte1890 s.v. विराम]; [REF:monierwilliams1899 s.v. हलन्त] | ✅ | l01 §4–5, §15 |
| अहम् ~ Latin *ego* ~ English *I* (PIE first-person pronoun, cognates not loans) | [REF:mallory2006] | ✅ | l01 §13 |
| जगत् connected with √गम् "go" ("the moving one") | [REF:monierwilliams1899 s.v. जगत्] | ✅ (presented as dictionary connection, one line) | l01 §13 |
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
| ज्ञ classical /d͡ʑɲ/ per components; [gj]/[dn̪j] regional habits (ऋ-precedent framing) | [REF:whitney1889 §§13, 201] (composition only, located at the 2026-11-10 sweep; no Whitney § covers the regional variants, which stay uncited) | ✅ | l03 §5, §9–10 |
| √ज्ञा ~ know ~ gnōsis (\*ǵneh₃-); द्वि/त्रि ~ two/three; √विद् ~ wit/vidēre (\*weid-) | [REF:mallory2006] | ✅ sibling framing kept | l03 §13 |
| क्षेत्र → Hindi खेत descent | [REF:masica1991] | ✅ | l03 §13 |
| मित्र neuter; Vedic Mitra deity note | [REF:apte1890 s.v. मित्र]; Ṛgveda (TRADITION, named) | ✅ | l03 §13 |
| रेफ as the tradition's proper name for r | [REF:apte1890 s.v. रेफ] | ✅ | l04 §4 |
| Repha superscript from Nāgarī manuscript tradition (modest, undated phrasing) | [REF:masica1991 ch.6] | ✅ | l04 §4 HISTORY |
| Positional r-variants spell one /ɾ/; repha placed rightmost incl. mātrā-post; ट्र caret; रु रू units | [REF:masica1991 ch.6] | ✅ | l04 §5, §8, §15 |
| dharma/karma/mantra genuine English loans; शर्करा → sugar chain | [REF:apte1890]; OED; loan table v1.c01.l01 (verified: शर्करा row present) | ✅ | l04 §13 |
| चक्र ~ wheel ~ kúklos < \*kʷekʷlos | [REF:mallory2006] | ✅ | l04 §13 |
| BU 1.4.14 identifies dharma with truth | [REF:brhadaranyaka 1.4.14] | ✅ TRADITION, locus carried | l04 §17 |
| Avagraha marks elided अ (सोऽहम् = सः + अहम्); candrabindu = nasalized vowel; daṇḍa/double daṇḍa; digits ०–९ | [REF:whitney1889 §§16–17, 73]; [REF:masica1991 ch.6] | ✅ | l05 §8 |
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
| वसुधैव कुटुम्बकम् — Hitopadeśa Mitralābha 71 + Pañcatantra Book 5 (the Mahopaniṣad clause withdrawn 2026-11-10: no edition opened, no key) | [REF:hitopadesha mitralābha 71]; [REF:panchatantra tantra 5] | ✅ hedged locus, TRADITION register; re-hedged at the v2.c06 review from "common editions" to the GRETIL numbering (the Nirṇaya Sāgara edition Apte cites has 70) | l02 §4 |
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
| C | Callout audit: HISTORY items cited (Ṛgveda kinship attestation, Jones 1786 verbatim, RV 1.1.1); TRADITION attributed (वसुधैव कुटुम्बकम् with hedged locus + Pañcatantra Book 5 locus (the Mahopaniṣad note withdrawn 2026-11-10); पञ्चतत्त्व doctrine; visarga echo); no derivation arrow anywhere between cognate columns; the और correction framed kindly. l05's nine D-cards diffed against their source lessons — no card overreaches. | pass |
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

## Review-pass findings — v2.c03 (2026-10-20)

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

## Review-pass findings — v2.c04 (2026-10-22)

| Pass | Finding | Resolution |
|---|---|---|
| A | Adversarially verified review (4 dimensions; batch verifiers with a 3-lens majority for blocker/major): 70 confirmed (6 blocker, 34 major, 30 minor), 2 rejected, 1 unverified-minor resolved in the main loop. Blockers: false course history keyed as FACT (l05 card 9; l03 §3 key; chapter.md; fact base); l01's exercise-1 key mismatched to the cards actually dealt. Majors: an uncited 5,000-year figure in l01 §13/§26 (banned claim — removed); the false "ष is कृ's own habit" rationale (शृणोषि carries it too) — re-worded across l03/l04 and the fact base; l05's invented शृ- card (√शृ is a different verb) and virāma-root verb cards realigned to l02's a-final fronts; an untaught future form (गमिष्यामि) removed from an l05 frame; l01 dialogue speaker mix-up; an unsupported Apte idiom citation (अन्नम् करोति) withdrawn. Validator green ×5. | green |
| B | Policy: singular-only held; stem honesty without class numbers or roots; l02 instantiates the grammar-lesson contract (§15 heart, ≥2 production exercises both directions); keys only in §19; l02 now acknowledges v1.c06.l03's earlier person-tail preview. | pass |
| C | Citations: Whitney cited bare throughout; mallory2006 cognate sets confirmed; idiom claim without support withdrawn; no banned claims remain (5,000-year figure removed). | pass |
| D | Coherence: Station 0 chain c03.l05 → l01 → l02 → l03 → l04 → l05 verified item-for-item; l05's pre-sibling pointers audited against the real files and corrected; l04 §21 मम दिनम् homework matches l05 task E; chapter.md table and can-dos match the files. Drafting note: l05 drafted first by agent; l01/l03 landed before a usage-limit stop, l02/l04 completed on resume. | pass |

Status change: v2.c04 lessons 01–05 `draft` → `reviewed`.

## Chapter v2.c05 — research verdicts (2026-10-27)

| Claim | Source | Verdict | Used in |
|---|---|---|---|
| कदा and किमर्थम् complete the question kit — nine askers; किमर्थम् taught whole ("for what purpose") | [REF:apte1890] s.vv. | ✅ | l01 |
| *kʷ- stem: कः ~ *quis* ~ *who* and किम् ~ *quid* ~ *what* are the only three-language word pairs; कदा/कुत्र/कथम् share the stem without word-for-word matches | [REF:mallory2006] | ✅ reconciled at review with v2.c03.l02's कति ~ *quot* [REF:burrow2001], a two-language pair (l01/l05 had said "only two pairs") | l01 §12/§13/§19, l05 §4/§12/§19 |
| Hindi question words carry the same inherited k- stem | [REF:masica1991] | ✅ stem-level only | l01 |
| Present + a time word states a settled near future (श्वः आगच्छामि); ह्यः + present gives no past | [REF:whitney1889 §§777–778] | ✅ narrowed at review: the present has narrative and स्म past uses (named for later), so "cannot state a past" became "cannot make a past with ह्यः" | l01 §8/§12/§15/§22 |
| अवगच्छति classical; अहम् न अवगच्छामि a modern-common classroom phrase | [REF:monierwilliams1899] s.v. ava-gam | ✅ usage label kept | l02 |
| वदतु / ददातु / अस्तु as 3sg imperatives with भवान्; a bare ददातु to the person addressed | [REF:apte1890]; [REF:whitney1889] | ✅ the pronoun-free request labelled "modern spoken convention" at review; the fuller usage keeps भवान् / भवती | l02, l04 §7/§8, l05 §15 |
| भवान् is masculine ("you, sir"); भवती is the feminine, display only | v1.c05.l01 §14 | ✅ l03's "sir/madam" corrected; l05 counts भवान् to a woman as a slip | l03 §14, l05 §13/§22 |
| मह्यम् रोचते "it pleases me": the liked thing is the Sanskrit subject, the liker dative; Hindi मुझे … पसंद है has a dative (experiencer) subject and the liked thing runs the verb's agreement | [REF:apte1890 s.vv. इच्छा, रुचि]; [REF:masica1991] | ✅ l05 had called the Hindi liked thing the subject — aligned with l03 at review | l03, l05 §5/§7/card 9 |
| इच्छति ~ English *ask* (PIE *h₂eys-) | — | ✂ not taught (unverified; fact base 0.8) | — |
| रूप्यकम् is modern Sanskrit for the currency (MW *rūpya* "silver"); English *rupee* is a loan from this family | [REF:monierwilliams1899] s.v. rūpya; [REF:oed] s.v. rupee | ✅ display only, modern label | l04 |
| Ledger chain 308 → 313 → 317 → 321 → 328 → 328 (20 ledger-new) | STYLE_GUIDE §8 | ✅ held across all five lessons | all |

## Review-pass findings — v2.c05 (2026-10-27)

| Pass | Finding | Resolution |
|---|---|---|
| A | Adversarially verified review (4 dimensions; evidence verifier, domain expert and fix skeptic): 31 findings, 27 confirmed (10 major, 17 minor), 4 rejected — each rejected item's substance was covered by a confirmed sibling finding. Majors: l01's overclaim that the present "cannot state a past" (§8/§12/§15/§22; Whitney §§777–778); l03's भवान् "sir/madam"; l04's unlabelled pronoun-free ददातु (§7/§8) and its restatement in l05 §15; l05's Hindi-subject claim tested as FACT (card 9, §5, §7); the *kʷ- "only two pairs" line contradicting v2.c03.l02. Validator green ×5. | green |
| B | Policy: no descriptive adjectives (बहु / अल्पम् / पर्याप्तम् only as fixed answers); no vocatives or plurals; भवती display-only; l04's story line given a fixed quantity word with न; विशेषण glossed in place and added to GLOSSARY. | pass |
| C | Citations: Whitney located (§§777–778) where the new grammar claim rests; masica1991 added beside apte1890 for the Hindi word-family line; l02's repair-rule citation scoped. | pass |
| D | Coherence: Station 0 chain c04.l05 → l01 → … → l05 verified; l05's pointers, role cards and keys audited against the final sibling files; the fact base's भोजनम् object corrected (only the stem has a §14 row). A post-fix verification re-read every changed file against the pre-fix commit: one stale l04 §27 glossary line found and fixed. | pass |

Status change: v2.c05 chapter frame and lessons 01–05 `draft` → `reviewed`.

## Chapter v2.c06 — research verdicts (2026-10-25 → 2026-11-01)

Drafted against the fact base in research/notes/vol2-ch6-stories-word-journeys.md, then
re-verified claim by claim in a deep research pass (2026-11-01): six topic researchers
(crow, lion, Mahābhārata verse, Hitopadeśa and subhāṣita, etymology, forms) checked 159
claims on the web and in the primary texts; every flagged claim was challenged by an
independent skeptic and adjudicated in the main loop. 86 held as written; of 73 flagged,
67 were corrected (219 edits) and 6 kept when the skeptic showed the wording held. The full
record is research/evidence/vol2-ch6-deep-research.json.

| Claim | Source | Verdict | Used in |
|---|---|---|---|
| The Thirsty Crow is an Aesopic fable (Perry 390); no version is known in the Pañcatantra, the Hitopadeśa or the Jātakas; "a Pañcatantra story" is a modern label | [REF:perry1952 no. 390] | ✅ hedged: absence of attestation, not origin — never "it does not come from India" | l01 §4, l05 §4, task D card 5 |
| Its earliest known versions are Greek and Latin of the 1st century CE — a Greek epigram (Anth. Pal. 9.272) and Pliny's report of a raven at a tomb urn (NH 10.125); Avianus (Fabulae 27, c. 400 CE) tells it later as a fable | [REF:rackham1940 10.125]; [REF:perry1952 no. 390] | ✅ corrected at deep research (Avianus had been given as the earliest) | l01 §4 |
| Today it is retold in a state-board Sanskrit reader (UP Class 5, lesson काकस्य उद्यमः) | [REF:piyusham5] | ✅ cited by lesson title; no popularity superlative | l01 §4 |
| The Lion and the Mouse is Aesopic (Perry 150) and also told in an Egyptian Demotic narrative of the 2nd century CE | [REF:perry1952 no. 150]; [REF:lichtheim1980 pp. 156–159] | ✅ | l02 §4, l05 §4 |
| Two Indian cousins: Pūrṇabhadra's Pañcatantra, Book 2 (mice gnaw the ropes tying a herd of elephants) and the Hitopadeśa's Mitralābha frame (a mouse gnaws a net to free birds) | [REF:ryder1925 Book II]; [REF:hitopadesha mitralābha] | ✅ ropes, not nets, in the Pañcatantra; no claim about which came first; the exam accepts either cousin (review) | l02 §4, l05 §3/§4/§19 |
| The 1.x lion text needs five changes: four word choices (स्वपिति, चलति, the future plea, कृन्तति) and one plot gap | 1.x PDF p. 65 | ✅ count reconciled at review (had been "four") | l02 §4/§8 |
| अहिंसा परमो धर्मः stands at Mahābhārata (critical edition) 1.11.12, 3.198.69, 13.116.1, 13.116.25 and 13.117.37, and three more times only in star and appendix passages (2.38.31*374; 13 App. I no. 15, lines 1026 and 1203) | [REF:mahabharata] (BORI e-text, GRETIL) | ✅ appendix lines added at review | l03 §8 |
| "… धर्महिंसा तथैव च" is not in the critical edition at any of those loci — a modern misquotation | [REF:mahabharata] | ✅ stated narrowly (not attested in the edition) | l03 §8/§22, l05 card 6 |
| उद्यमेन हि सिध्यन्ति… is Hitopadeśa prastāvikā 36 (the GRETIL and Nirṇaya Sāgara numberings agree there); it also circulates in the Pañcatantra (textus simplicior, Book 2, with the last line विशन्ति वदने मृगाः) | [REF:hitopadesha prastāvikā 36]; [REF:apte1890 s.v. सिध्] | ✅ the lessons cite only the Hitopadeśa locus and give no Pañcatantra verse number | l03 §8/§22, l05 rung 6 |
| परोपकारः पुण्याय पापाय परपीडनम् is quoted as Vyāsa's teaching in the eighteen Purāṇas; the first line is not traced to any Purāṇa; the second line is spoken by the cat as judge in Pañcatantra Book 3; Sternbach no. 3587 | [REF:sternbach1974 3587]; [REF:panchatantra tantra 3, the cat as judge]; [REF:apte1890 s.v. पर] | ✅ TRADITION framing; story named at review | l03 §8, l04 §3, l05 §4/Q8 |
| वसुधैव कुटुम्बकम् is Hitopadeśa Mitralābha 71 in the GRETIL numbering (70 in the Nirṇaya Sāgara edition Apte cites) | [REF:hitopadesha mitralābha 71] | ✅ re-hedged at review here and in v2.c02.l02 (was "in common editions") | l03 §3, v2.c02.l02 §4 |
| The 1.x "English from Sanskrit" list sorts into four kinds: 15 cognates, 12 Latin/Greek-route words, 1 loan (yoga), 1 false pair (juggle) | [REF:mallory2006]; [REF:oed] s.vv. | ✅ the sorting claim scoped to that list at review | l04 §8/§13 |
| *yoga* is an English loan from योग "yoking, union", not from युग; first recorded in 1785 (Wilkins's Bhagavad Gītā) | [REF:oed] s.v. yoga | ✅ corrected at deep research (had been "around 1820") | l04 §13 |
| *video* is from Latin *vidēre* "to see", cognate with √विद् "know"; *ignite* from Latin *ignīre*; *serpent* through Old French from *serpēns* | [REF:oed]; [REF:mallory2006] | ✅ corrected at deep research (*videō* "I see" → *vidēre*) | l04 §13, l05 card 7 |
| Grimm's Law, with its exception: *t* after *s* or *k* stays *t* (*stand*, *night*) | [REF:mallory2006] | ✅ exception added at deep research | l04 §5 |
| Hindi दाँत, पाँव, साँप are the tadbhava forms of दन्त, पाद, सर्प | Turner's CDIAL via Wiktionary (dossier WJ-42); [REF:masica1991] for the term | ✅ kept as written at review | l04 §7/§22 |
| दूरदर्शनम् is an older compound ("far-seeing; foresight") used in a new sense, "television"; विमानम् a classical word (वि + √मा) in a new sense; संगणकः modern, not called a calque | [REF:monierwilliams1899]; [REF:apte1890] | ✅ corrected at deep research; exercise 6 offers the key's label (review) | l04 §13/§18 |
| A describing word agrees with its noun in gender, number and case (the endings match only within one declension) | [REF:whitney1889] | ✅ l03 §15 corrected at review (had said it "wears the ending of the noun") | l03 §15 |
| Anusvāra before *s* or *h* transcribed as a nasalized vowel throughout, as in Volume 1 | STYLE_GUIDE §2 | ✅ unified at deep research | all |
| Ledger chain 328 → 335 → 346 → 352 → 360 → 360 (32 ledger-new); Volume 2 adds 123; exit 360 | STYLE_GUIDE §8 | ✅ held across all five lessons | all |

## Review-pass findings — v2.c06 (2026-11-01)

| Pass | Finding | Resolution |
|---|---|---|
| A | Adversarially verified review, run after the deep research and informed by its dossier (four dimensions, two parallel workflows; evidence verifier on every finding, domain expert and fix skeptic on blockers and majors): 67 findings, 65 confirmed (1 blocker, 29 major, 35 minor), 2 rejected; merged to 34 distinct issues and 83 fixes, applied mechanically. Accuracy (19): the exam marked the Hitopadeśa cousin wrong; rung 5's "under 40 s" was faster than l01's own timed bar; Station 0 ran a different deck from the one l04 booked; exam pointers in l02/l03 put the lion story on the reading ladder; volume.md still printed the plan (~450 words, 10–16 per lesson, third person only). | green |
| B | Policy (18 confirmed; "for centuries" refuted as an unquantified, true phrase): the l03 §15 blocker (agreement, not "the same ending"); crow retelling beats aligned with l01 §8; conversation moves in Chapter 5's order; superlatives cut from l03 §1, l02 §4, l05 §5 and §7; l04's "any English–Sanskrit pair" and reel claim scoped. | pass |
| C | Citations (12): the Mahābhārata appendix lines; the Pañcatantra story named (the cat as judge); verse 71 in the GRETIL numbering; the वि gloss sourced to Apte and Monier-Williams; roediger2006 cited only for what it shows; the l04 tadbhava flag closed with the record of what was checked; STYLE_GUIDE §8 exits gain 360. | pass |
| D | Coherence (16 confirmed; Volume 3 "is being written next" refuted as house convention): stale drafting notes in every §27 firmed against the files; the fact base's change count; l04 Station 0 quotes l03's booking verbatim; pointer repairs in l05 (§3, §12). | pass |

Post-fix verification: one verifier per changed file (11 files, including volume.md, the
fact base, REFERENCES, STYLE_GUIDE and v2.c02.l02) re-read the applied fixes against the
pre-review commit, re-solved the keys and checked every restatement; each claimed defect
faced a skeptic. Six files were clean; five minor defects survived and were fixed (the l05
§27 list of checked pointers; l04 §7's Hindi restatement of the "every pair" claim; stale
§27 flags in l03 and l04; the fact base's task D clause).

Status change: v2.c06 chapter frame, lessons 01–05 and the Volume 2 frame `draft` →
`reviewed`. **Volume 2 complete.**

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

## Error sweep — all shipped content (2026-11-10)

Scope: everything shipped through 0.12.0 — the 61 lessons of Volumes 1–2, the twelve chapter
frames and two volume frames, the research notes, REFERENCES, GLOSSARY, STYLE_GUIDE,
EDITORIAL_GUIDELINES, README, ROADMAP, CHANGELOG and the website and automation documents.

Method. The October audit (above) read 46 lessons line by line but ran no check of its own
fixes afterwards; v2.c04 and v2.c05 had only their review passes. So this sweep ran:

- full lesson audits of the ten lessons of v2.c04 and v2.c05;
- a chapter-coherence audit of each of the eleven chapters v1.c01–v2.c05 (Station 0
  bookings against the previous lesson's §20, the ledger chain, cross-lesson pointers, exam
  alignment, fact base against lessons, and — above all — earlier corrections applied in one
  place while the old statement survived in a restatement). v2.c06 was reviewed on
  2026-11-01 and joined only the course-wide audits;
- twelve course-wide audits: the word ledger; cross-references; project documents; claims,
  registers, dates and scale; phonetic consistency; facts repeated across lessons; pedagogy
  citations against what the cited studies show; glossary accuracy and coverage; and four
  offline citation audits — every dictionary citation in Volume 1 and v2.c01–c03 read
  against the text of Apte 1890 and Monier-Williams 1899, and every grammar citation
  against Whitney's *Sanskrit Grammar* and the Aṣṭādhyāyī sūtra text.

Every finding was re-checked by an evidence verifier; blocker and major findings also by a
domain expert and a fix skeptic, and they survived only on a majority. Fixes were exact
replacements applied mechanically; where two findings rewrote the same passage, the first
fix was applied and the second was left for the verification pass to judge.

| Measure | Count |
|---|---|
| Findings confirmed | 264 (6 blocker · 114 major · 144 minor) |
| Findings rejected on verification | 39 |
| Fixes applied | 431 across 83 files |
| Fixes already present when reached | 35 |
| Fixes superseded by an overlapping fix (each checked at verification) | 147 |
| Phonetic-contract violations found (IPA, anusvāra policy) | 0 |

Blockers (six findings, four distinct problems, all fixed): v2.c04.l05 still taught in seven places and two answer keys that the
ष of करोषि is "कृ's own habit" (withdrawn on 2026-08-06, because शृणोषि has the same ष);
v2.c04.l04 quiz item 9 keyed "a word's ending shifts with its role" for five -म् words, four
of them neuters that keep -म् as subject; v1.c02.l05 derived all of ए ऐ ओ औ from a+i / a+u
(ऐ and औ are from ā+i / ā+u, Whitney §§27–29); v2.c06.l03 kept "wears the noun's ending"
in five places after its §15 had been corrected to agreement in gender, number and case.

Representative majors (all fixed): dictionary wording printed as quotation that the
dictionaries do not carry (कुशलम् ते as Apte's idiom; a gloss of धन्यवादः attributed to
Monier-Williams; परिवारः "family"; शुभम् अस्तु as a closing formula); citations to Apte
headwords that do not exist (हल् in the grammatical sense, सप्ताह); wrong Whitney sections
(virāma is §11, the vowel signs §10; candrabindu, vowel length and the diphthongs re-located);
a HISTORY callout that had Whitney warning that English t and d are not dental (he describes
the Sanskrit dentals); promises of the gender system, the plural and the feminine polite
forms "later in Volume 2" (they are Volume 3's); false statements about the course's own
history ("the course's first self-authored connected production"; "the learner owns only
पठामि and वदामि"); Station 0 items that did not run what the previous lesson had booked;
learning-science superlatives their citations do not support; unsourced rankings ("the most
famous name in Sanskrit", "the most famous syllable on Earth").

Decisions recorded (binding on later lessons):

- [REF:roediger2006] supports one statement: retrieval practice beats re-reading for
  long-term retention. It is never "the strongest" method.
- [REF:nation2013] supports teaching formulaic chunks whole and analysing them later. It
  does not show that chunks are "learned fastest".
- The Hindi for "pause form" is विराम-रूप (not ठहराव-रूप). The head term for "cognate" is
  सजातीय; सजात and सगोत्र are recorded variants. Both are in GLOSSARY.
- The gender system, the plural and the feminine polite forms belong to Volume 3; no
  Volume 1 or Volume 2 lesson promises them earlier.
- v2.c01 drills 25 headwords (4 · 4 · 8 · 9): नमः in l01 is a review row. The ledger chain
  237 → 240 → 243 → 249 → 258 is unchanged.
- The ष of करोषि and शृणोषि "comes with the whole word; the reason waits" — no lesson ties
  it to the root कृ.
- A dictionary is cited for what its entry says. Glosses in quotation marks are the
  dictionary's own words; an idiom or formula is cited to a dictionary only if the entry
  prints it.

Post-fix verification. The 83 changed files were re-read in 23 groups against the commit
before the sweep: every confirmed finding (343 finding-by-group checks), each changed hunk
in its whole section, and each superseded fix to see whether its problem was resolved all
the same. Each claimed defect was then challenged by a skeptic. 31 defects were claimed; 3
were refuted; the remaining 28 reduced to 23 distinct defects, all fixed. Two were more than
cosmetic: two findings had each appended an item 5 to v1.c03.l06's Station 0 (merged into
one), and v2.c01.l05's chain still counted five headwords for l01 beside the corrected
total of 25. The rest: a stale label ("कृ's ष") beside its corrected explanation, restatements
the fixes had missed (a video caption, a card text, a Pass C flag, three rows of this log),
one over-broad rewording ("everyday verbs are irregular"), a duplicated GLOSSARY row
(आत्मनेपद) and line-wrapping left by the replacements. Six lines that began with "+ " and
so rendered as stray list items — all older than the sweep — were re-wrapped.

Not done in this sweep: the 46 lessons audited in October were not read line by line a
second time; they were covered by the chapter-coherence and course-wide audits above.

Status: all 61 lessons validate with 0 errors and 0 warnings; JSON exports regenerated (61).

## Volume 3 — the volume plan (2026-11-10)

`research/notes/vol3-plan.md` binds the six chapter fact bases of Volume 3. Three independent
syllabus designs (function-first, paradigm-economy, reading-backward) were judged by a
Sanskritist, a pedagogue and a house editor, who all ranked function-first first; the
synthesis took the other two's Chapter 6 texts, form inventories, memory budget and
recognition cards and fixed the 29 errors the judges had found. A completeness critique
found 24 gaps (8 major); the editor decided 14 open questions; and seven independent
reviewers then re-derived the repaired plan block by block, each finding challenged by a
skeptic: 68 confirmed (21 major, 47 minor), 12 rejected. The plan's §7 records all of it.
Corrections with consequences for every later chapter: the middle imperative is built on
the present's endings, not the imperfect's (3.4.90–93); अब्रवीत् is an imperfect, not a
perfect; बहिः ends in s, not r; class-4 middles in -यते (मन्यते, जायते) are not passives;
नमस्ते stays a counted word; the Pañcatantra is cited by tantra and story in learner text.

## Chapter v3.c01 — research verdicts (2026-11-10)

Fact base: research/notes/vol3-ch1-cases-singular.md, written from the plan's §4.1 and
checked before drafting by three lenses (forms, facts, contract) and an evidence verifier:
40 findings confirmed (16 major, 24 minor), 8 rejected.

| Claim | Source checked | Verdict | Lands in |
|---|---|---|---|
| The a-stem singular, masculine and neuter (रामः, देवः, फलम्): -ः/-म्, -म्, -एन, -आय, -आत्, -स्य, -े, the bare stem; the neuter's nominative and accusative are one form | [REF:whitney1889 §327]; [REF:whitney1889 §330], cell by cell | ✅ | all; assembled in l05 §15 |
| The singular cells of कः/किम्, सः/तत्, अहम्, त्वम् that each lesson uses | [REF:whitney1889 §504]; [REF:whitney1889 §495]; [REF:whitney1889 §491] | ✅ | l01–l04 |
| -एन is written -एण when र्, ऋ or ष् stands earlier in the word and nothing between but vowels, ह य व र, the क-row or the प-row; the च-row and श, the ट-row, the त-row, स and ल block it; य does not; a word-final न is never affected | [REF:whitney1889 §189]; [REF:ashtadhyayi 8.4.1]; [REF:ashtadhyayi 8.4.2]; [REF:ashtadhyayi 8.4.37]; counts over the local GRETIL mirror | ✅ taught as an observed spelling in three columns; "the च-row (but not य)" corrected at review (य is not in the च-row); the rule is v4.c02's | l03 |
| रामः is the memorised model; the instrumental is taught as -एन on देवः and रामेण shown as the same ending after र् | plan §7.3, decision 11 | ✅ editor's decision | l03, l05 |
| Case uses taught: accusative of the done-to and of the goal; two accusatives with नयति and पृच्छति; locative of place, of the place reached, and of time; ablative "from"; instrumental of means, and of company with सह; dative of the recipient, with नमः, स्वस्ति and रोचते, and of purpose; genitive of possession, with उपरि and समीपे | [REF:whitney1889 §§267–305]; [REF:apte1890 s.v. नी, कथ्, विना, समीप, क्षिप्] | ✅ ("the locative keeps to place while गच्छति keeps its accusative goal" softened at review: Whitney §304a allows the locative of the goal) | l01–l04 |
| सह takes the instrumental; its position is free | [REF:whitney1889 §1127]; [REF:ashtadhyayi 2.3.19]; counts over the local GRETIL mirror (both orders frequent) | ✅ corrected at review: "सह comes after its partner" is the course's practice order, not a rule | l03 |
| The six kāraka names; the genitive and the vocative are not kārakas | [REF:ashtadhyayi 1.4.24] … [REF:ashtadhyayi 1.4.55]; [REF:ashtadhyayi 2.3.50]; [REF:ashtadhyayi 2.3.47] | ✅ TRADITION, assessed only as "According to Pāṇini"; the sūtras stay in Teacher Notes | l01–l05 |
| Sūtras quoted to the learner: 2.3.16, 2.3.19 (l03); 1.4.14 (l05); 4.1.2 shown once as a picture | the local Aṣṭādhyāyī text | ✅ numbers and texts match | l03, l05 |
| The Laghukaumudī lists the endings in seven triplets and works राम through them case by case; its two-accusative example is ग्राममजां नयति | [REF:laghukaumudi on 4.1.2]; [REF:laghukaumudi on 1.4.51] (GRETIL e-text) | ✅ cited by the sūtra under which the passage stands; the plan's अजां ग्रामं नयति is Apte's wording s.v. नी | l01, l05 Teacher Notes |
| Hindi parallels: को for the definite object and the recipient; से for instrument and source; के साथ for company; में and पर against one locative; को with days; का/के/की agreeing with the thing possessed; के पास; ने in perfective clauses, mainly with transitive verbs; हे | [REF:kachru2006], cited bare; web check at Pass C | ✅ with corrections: company is के साथ, not से; पूछना takes से, not को; ने "mainly with transitive verbs" | l01–l04 |
| Hindi school grammar teaches eight कारक, counting सम्बन्ध and सम्बोधन | [REF:guru1952], cited bare | ✅ printed as attributed TRADITION; assessed only as "According to …" | l04, l05 |
| The serial's source: the frame story of Hitopadeśa 1 (a tree on a river bank where birds roost; a hunter scatters grain and spreads a net) | [REF:hitopadesha mitralābha] (GRETIL e-text, re-found by line) | ✅ corrected at review: two callouts had put the net under the tree; the retelling's departures (one dove first, the mouse's hole beside the tree, the mouse's warning) are stated | l01–l04 §4, §17 |
| Ledger 360 → 367 → 374 → 381 → 387 → 387 (27 ledger-new; upgrade rows ग्रामः, हस्तः, पुत्रः, मित्रम्, अर्थः); the case and role names are glossary terms | STYLE_GUIDE §8 rules 1–15; the Volumes 1–2 vocabulary list | ✅ no double count | all |

## Review-pass findings — v3.c01 (2026-11-10)

| Pass | Finding | Resolution |
|---|---|---|
| A | One accuracy reviewer per lesson (forms re-derived; every exercise, quiz item and Station 0 prompt re-solved; every "owned since" claim and citation checked), each finding through an evidence check, majors also through a domain expert and a fix skeptic: 37 confirmed, 1 rejected. Majors: l01's Station 0 key left अहम् out of the -म् words; l02's model pair used कम् अपि (the indefinite) as a कम्? question; l02's drill said the locative's -े never follows त (प्रभाते); l02's Teacher Note overstated Whitney on the goal of motion; l03 stated the position of सह as a rule; l04 blamed *अहम् पुस्तकम् अस्ति on Hindi word order; l04's possession frame cited the wrong Whitney section; l04's Hindi defined विभक्ति as a kāraka-form; l05's quiz item 6 had two defensible answers. | fixed; pass |
| B | Policy (9 confirmed): the exam needs about 55 minutes in the room, not 45 — now stated; l03 named a different pair of departures from the Hitopadeśa than l02 and l04; गुरवे in an evidence table without its honest line (a u-stem dative); the unlabelled plural पदानि; contradictory forward addresses; audio lines that did not match their drills; a missing paradigm-ledger row. | fixed; pass |
| C | Citations (3 confirmed): the Hitopadeśa callouts (the net is not under the tree); Hindi ने; the kāraka range 1.4.24–1.4.55 in every lesson. | fixed; pass |
| D | Coherence (9 confirmed, 4 rejected): the ṇ blockers stated correctly in four places and in Hindi; GLOSSARY gains the case and role names; the chapter frame says what task D scores; stale drafting notes; a tracker row quoted non-verbatim; homework minutes. | fixed; pass |

Post-fix verification: one verifier per changed file (eight files: the five lessons, the
chapter frame, the fact base and GLOSSARY) re-read the applied fixes against the pre-review
commits, re-solved the keys and checked every restatement; each claimed defect faced a
skeptic. Six files were clean; three minor defects survived and were fixed (two findings
had each added five minutes to l05's homework, so its items summed to 50 against a stated
45; the fact base kept task E's old model sentence; the chapter frame said "25 a-stem
nouns" where l05 scores 25 noun tokens).

Status change: v3.c01 chapter frame and lessons 01–05 `draft` → `reviewed`. The Volume 3
frame stays `draft` until the volume is complete.

## Chapter v3.c02 — research verdicts (2026-11-10)

Fact base: research/notes/vol3-ch2-plural-stems-dual.md, written from the plan's §4.2 and
checked before drafting by three lenses (forms, facts, contract) and an evidence verifier:
39 findings confirmed (3 blocker, 8 major, 28 minor), 1 rejected.

| Claim | Source checked | Verdict | Lands in |
|---|---|---|---|
| Sanskrit has three numbers; the plural begins at three | [REF:whitney1889 §264]; [REF:whitney1889 §265]; [REF:ashtadhyayi 1.4.21]; [REF:ashtadhyayi 1.4.22] | ✅ the plan's §265 for "three numbers" corrected to §264 (§265 is the dual's use); the two sūtras stay in Teacher Notes | l01, l04 |
| T2, the a-stem plural, masculine and neuter (रामाः, फलानि), cell by cell; देवानाम् is the model for the genitive plural and रामाणाम् the same ending after र् | [REF:whitney1889 §329]; [REF:whitney1889 §330]; plan §7.3, decision 11 | ✅ | l01; assembled in l05 §15 |
| The ṇ of रामाणाम्, गुरुणा, गुरूणाम्, हरीणाम्, पितॄणाम्, त्रीणि and the ṣ of रामेषु, अग्निषु, गुरुषु against बालिकासु | [REF:whitney1889 §180]; [REF:whitney1889 §189] | ✅ observed spellings (rules: v4.c02); corrected at review: the triggers are र, ऋ and ष, so हरीणाम् and ऋषीणाम् take ṇ; the ṣ of -एषु depends only on the vowel before it | l01–l05 |
| The verb's 3rd-person plural -अन्ति and सन्ति beside a plural doer | [REF:whitney1889 §§541–553]; plan §1.2 | ✅ a labelled partner here, taught fully in v3.c03.l01; the plan's locator for the a-class present corrected (§§733 ff.) | l01 |
| Agreement: an adjective takes the gender, number and case of its noun; a-adjectives make the feminine in -आ | [REF:whitney1889 §332]; [REF:whitney1889 §368] | ✅ "three stems" reworded at review (two stems, three sets of endings) | l01, l02 |
| Numerals 1–10 in the nominative and accusative by gender: एकः/एका/एकम्; द्वौ/द्वे; त्रयः, त्रीन्, त्रीणि, तिस्रः; चत्वारः, चतुरः, चत्वारि, चतस्रः; 5–10 unchanged | [REF:whitney1889 §482]; [REF:whitney1889 §483] | ✅ the 1.x book's "ततस्रः" corrected in the open to तिस्रः (IR-025); the numerals' oblique cells are printed nowhere in the chapter (v4.c05) — removed from the dual card at review | l01, l02, l04 |
| T3, the ā-stem feminine (बालिका) with सा/ताः; the नदी delta card; the feminine asker as a display | [REF:whitney1889 §363]; [REF:whitney1889 §364]; [REF:whitney1889 §495]; [REF:whitney1889 §504] | ✅ | l02 |
| T4, i- and u-stems (अग्निः, गुरुः): the stem vowel strengthens in the dative, ablative-genitive and vocative singular and the nominative plural; the locative singular is -औ; the feminine delta cells (मत्या, मतीः, धेन्वा, धेनूः; the optional feminine set) | [REF:whitney1889 §§336–339]; [REF:whitney1889 §341] | ✅ | l03 |
| साधु as an adjective has two feminines, साधुः and साध्वी | [REF:apte1890 s.v. साधु] | ✅ corrected at review (the row gave -ध्वी only) | l03 |
| R1: पक्षी, an -इन् stem, recognised in seven cells | [REF:whitney1889 §440]; [REF:apte1890 s.v. पक्षिन्] | ✅ recognition only | l03 |
| The ablative of comparison with श्रेष्ठः | [REF:whitney1889 §292]; [REF:monierwilliams1899 s.v. śreṣṭha] ("abl. or gen."); [REF:apte1890 s.v. श्रेष्ठ] | ✅ the genitive is accepted in keys and never offered as a wrong option | l03 |
| T5, ṛ-stems (पिता, माता; दाता, स्वसा): strong stem -अर्- / -आर्-, the nominative singular in -आ, the genitive singular in -उः | [REF:whitney1889 §§369–373] | ✅ | l04 |
| The dual: three forms for every noun and pronoun; द्वौ/द्वे; उभौ/उभे | [REF:whitney1889 §328]; [REF:whitney1889 §337]; [REF:whitney1889 §364]; [REF:whitney1889 §373]; [REF:apte1890 s.v. उभ] | ✅ a card (nominative-accusative productive, the rest recognised); Whitney gives no paradigm for उभ (his §525c is उभय); corrected at review: the feminine dual बालिके coincides with the vocative singular, not with a locative | l04, l05 |
| Sūtra 1.2.70 पिता मात्रा: पितरौ may stand for mother and father (एकशेष) | [REF:ashtadhyayi 1.2.70]; [REF:ashtadhyayi 1.2.64]; the Kāśikā on 1.2.70 | ✅ TRADITION; the chapter's one sūtra quoted to the learner | l04 |
| नम् takes the accusative or the dative; नमः takes the dative | [REF:apte1890 s.v. नम्]; [REF:ashtadhyayi 2.3.16] | ✅ corrected before drafting: मात्रे नमामि is never marked wrong | l04, l05 |
| R2: a transitive verb's -त participle with its doer in the instrumental (मया कृतम्) | [REF:whitney1889 §952]; [REF:whitney1889 §282]; [REF:ashtadhyayi 2.3.18]; [REF:ashtadhyayi 3.4.70]; [REF:ashtadhyayi 3.4.72] | ✅ corrected twice: before drafting (the card holds for transitive verbs only) and at review (गत is from a verb of motion, whose goal is still a कर्म; क्रुद्धः, पिपासितः, सुप्त from verbs with no object) | l05 |
| The roles map: six kārakas with their usual cases; places where case and job part company (the neuter's one form, नमः + dative, सह + instrumental, the R2 doer); with रोचते the one pleased is a सम्प्रदानम् for Pāṇini | [REF:ashtadhyayi 1.4.24] … [REF:ashtadhyayi 1.4.55]; [REF:ashtadhyayi 1.4.33]; [REF:ashtadhyayi 2.3.1]; [REF:cardona1997] | ✅ TRADITION, assessed only as "According to Pāṇini"; the ranges 1.4.24–1.4.55 and 2.3.1 ff. named by number, 2.3.16 and 2.3.19 recalled from v3.c01.l03, every other number in Teacher Notes | l05 |
| Fillmore proposed "deep cases" in 1968; Kiparsky and Staal (1969) describe Pāṇini's grammar as working through levels, with the kārakas between meaning and the case endings | [REF:fillmore1968]; [REF:kiparskystaal1969] — bibliographic data confirmed on the web (Fillmore pp. 1–88 in most indexes; *Foundations of Language* 5.1, pp. 83–117; the 1988 reprint is Staal's own statement); the description of levels follows standard summaries, the article itself unopened | ✅ HISTORY, both keys cited bare; a parallel only, no claim of influence either way | l05 |
| Hindi parallels: the oblique plural (लड़कों; गुरुओं); adjectives in -ā/-ī/-e against three genders; दो with a plural against the dual; the plural of respect; tatsama nominatives (माता, पिता, दाता) | [REF:kachru2006], cited bare; web check at Pass C | ✅ with corrections: Hindi गुरु does change in the oblique plural; Kachru is cited for Hindi facts only (the Sanskrit nominatives rest on Whitney §373) | l01–l04 |
| The serial's source: Hitopadeśa 1, the frame (a silk-cotton tree on the bank of the Godāvarī where birds roost at night; the hunter's grains and net; the king of the doves warns and is overruled; all are bound) | [REF:hitopadesha mitralābha] (GRETIL e-text, re-found by line) | ✅ "our retelling" on every page; departures listed in l05's Teacher Notes (the hunter's wife, the free dove's warning, the young dove's parents and the king caught last are ours; the river, bank and tree are the text's) — the list corrected at review | l01–l05 §4, §17, §22 |
| The thread verse उद्यमेन हि सिध्यन्ति … (Hitopadeśa, prastāvikā 36) and the count of उक्तं च | [REF:hitopadesha prastāvikā 36]; whole-word counts over the local e-texts: 329 in the Pañcatantra's, 7 in the Hitopadeśa's | ✅ counts given by one method (corrected at review: 8 was a bare-string count) | l05 |
| Ledger 387 → 392 → 399 → 406 → 411 → 411 (24 ledger-new; upgrade rows लोकः, कणः, नेत्रम्, कोमलः); the grammar terms are glossary items; कर्ता is a ledger word from l04 | STYLE_GUIDE §8 rules 1–15; the learner's word list | ✅ no double count | all |
| Volume 2 said numeral gender waits for Volume 4 (v2.c03 lessons 1, 2, 3, 5) | plan D11 and decision 7 | ✅ erratum applied: gender in counting is v3.c02's, the full numeral system v4.c05's (24 lines, two related-lessons notes found at verification, and the ROADMAP's preservation-map row) | v2.c03; ROADMAP |

## Review-pass findings — v3.c02 (2026-11-10)

| Pass | Finding | Resolution |
|---|---|---|
| A | One accuracy reviewer per lesson, each finding through an evidence check, majors also through a domain expert and a fix skeptic: 36 confirmed, 8 rejected (7 of them already fixed by another pass). Blocker: l04 said the feminine dual बालिके looks like a locative singular (it coincides with the vocative singular). Majors: untaught forms used as wrong quiz options (तिस्रः in l01, the i-stem instrumental in l02); l02's and l03's reel lines claimed more than the lessons teach; l03 said Hindi गुरु never changes; l03's rule for the genitive plural would have produced *हरीनाम्; l03 gave the crow story's moral to "the crow and the lion"; l04's listening pair had no locative in its "locative" phrase; l04's key rejected correct answers; l04's dual card printed the numeral's oblique cells; l05 filed गत under verbs with no object; l05's exam-day check applied the ṇ rule to the ṣ of -एषु. | fixed; pass |
| B | Policy and load (10 confirmed, 3 rejected; 5 of the 10 were Pass D's findings again): untaught बह्वी as a quiz option; ते and के labelled a preview in l01 although productive there; exercises of l01 and l04 placed in neither class nor homework; ददातु without भवान्; listening-pair tasks in l02 and l03 with no stated order and no key. | fixed; pass |
| C | Citations (6 confirmed, 1 rejected): l05's record of the serial's departures called the river "ours"; [REF:kachru2006] attached to a statement about the course's Sanskrit; the Sanskrit nominatives of the ṛ-stems cited to a Hindi grammar; the two उक्तं च counts made by different methods; the grains placed at the tree; साधु given one feminine. | fixed; pass |
| D | Coherence (9 confirmed, 1 rejected): the exam's dual card printed the numeral's oblique cells again; its examples printed five of the eight task C sentences; its preparation sat outside both time figures (self-study is now 65 minutes: 20 before the sitting, 45 after); l04's review section missed three of its review_of lessons; the task C key did not say that an extra marked sentence costs nothing; l03's homework did not add up; a Vedic form as a quiz option; "recipient" beside "receiver". | fixed; pass |

After the passes the editor normalised the gender terms in Hindi text (पुल्लिंग, स्त्रीलिंग,
नपुंसकलिंग, लिंग; 28 lines) and added the chapter's terms to GLOSSARY.

Post-fix verification: one verifier per changed file (twelve files: the five lessons, the
fact base, GLOSSARY, the four v2.c03 lessons of the erratum and ROADMAP) re-read the applied
fixes against the pre-review commits, re-solved the keys and checked every restatement; each
claimed defect faced a skeptic (one refuted). GLOSSARY, ROADMAP and two of the v2.c03
lessons were clean. Nineteen minor defects survived and were fixed: a drill that implied
वे is longer in देवेभ्यः than in देवेषु; "mostly" restored where a key cites Monier-Williams
on मित्र; l03's R1 homework named the wrong column of its card, and its genitive-plural rule
had lost "with nothing blocking"; l04's written exercise 2 was assigned to neither class
nor homework; "recipient" in one quiz option of l05, and a Teacher Note that printed a
frame it said the course does not print; two related-lessons notes in v2.c03 that still
filed the numeral machinery under Volume 4 alone; and nine places where the fact base had
not followed a correction made in a lesson.

Status change: v3.c02 chapter frame and lessons 01–05 `draft` → `reviewed`. The Volume 3
frame stays `draft` until the volume is complete.

Decisions recorded with this chapter: an untaught form may not stand even as a wrong option
of a quiz or exercise item; everything a lesson asks of the learner outside class time is
counted in `self_study_minutes`, and §21 adds up to it; in Hindi text the gender terms take
their Hindi spellings; a chapter fact base corrects the plan where research finds it wrong,
and corrections that later chapters need are listed in the plan's §7.6.

## Chapter v3.c03 — research verdicts (2026-11-10)

Fact base: research/notes/vol3-ch3-present-system-verb.md, written from the plan's §4.3 and
checked before drafting by three lenses (forms, facts, contract) and an evidence verifier:
38 findings confirmed (16 major, 22 minor), 4 rejected.

| Claim | Source checked | Verdict | Lands in |
|---|---|---|---|
| A finite verb has nine cells, three persons by three numbers; the tradition counts the persons from the far end (प्रथमः "he", मध्यमः "you", उत्तमः "I") | [REF:whitney1889 §536]; [REF:whitney1889 §541]; [REF:laghukaumudi on 1.4.101] | ✅ TRADITION for the names; corrected at review: the names stand in the Laghukaumudī under 1.4.101, not under 7.3.101, which gives only the recital; Hindi school grammar's उत्तम · मध्यम · अन्य assigned correctly | l01, l05 |
| The present of the a-class in the first family (गच्छामि … गच्छन्ति), with the -आ- before म and व | [REF:whitney1889 §733]; [REF:whitney1889 §735]; [REF:whitney1889 §553] | ✅ every cell re-derived; the plan's locator narrowed (§735 is the a-class example) | l01 |
| Sūtra 7.3.101 अतो दीर्घो यञि | [REF:ashtadhyayi 7.3.101]; [REF:kashika 7.3.101]; [REF:laghukaumudi on 7.3.101] | ✅ number, text and scope; the Kāśikā's counter-examples used for the cells that do not lengthen | l01 |
| अस् and कृ in the four lakāras | [REF:whitney1889 §636]; [REF:whitney1889 §714]; [REF:whitney1889 §566] for कृ's optative | ✅ learned whole, with listed production cells | l01, l03, l04 |
| R4: the athematic verbs' other cells as whole words (शृण्वन्ति, जानन्ति, गृह्णन्ति, स्वपन्ति, ददति; अशृणोत् …; शृणु, जानीहि, गृहाण, देहि) | [REF:whitney1889 §631]; [REF:whitney1889 §632]; [REF:whitney1889 §646]; [REF:whitney1889 §711]; [REF:whitney1889 §722] | ✅ recognition only; अस्वपत् and अस्वपीत् both correct (§631) | l01, l03, l04 |
| The second family (आत्मनेपदम्): लभे … लभन्ते; the dictionary gives each verb's family (Apte: P., A., U.) | [REF:whitney1889 §735]; [REF:whitney1889 §529]; [REF:whitney1889 §530]; [REF:laghukaumudi on 1.4.99]; [REF:laghukaumudi on 1.4.100] | ✅ corrected at review: some verbs take both families, and with some the family changes with a prefix — the course teaches each verb in one | l02 |
| R3: the passive in -यते recognised (उच्यते, दृश्यते, श्रूयते); मन्यते and जायते are class-4 middles | [REF:whitney1889 §768]; [REF:whitney1889 §769]; [REF:whitney1889 §761]; [REF:panchatantra] (Book 4, frame story) | ✅ recognition only; corrected at review: in a passive the done-to stands in the nominative and the doer stays the कर्ता | l02 |
| जयते in सत्यमेव जयते is a middle; the dictionary form is जयति | [REF:mundaka 3.1.6]; [REF:apte1890 s.v. जि] | ✅ no frequency word ("usually") without a count — cut before drafting | l02 |
| The imperfect (लङ्): augment + present stem + secondary endings; the augment stands after a prefix; ऐच्छत् | [REF:whitney1889 §742]; [REF:whitney1889 §585]; [REF:whitney1889 §1087]; [REF:whitney1889 §553] | ✅ | l03 |
| According to Pāṇini, लङ् is the past not of today; पुरा with the imperfect | [REF:ashtadhyayi 3.2.111]; [REF:ashtadhyayi 3.2.122]; [REF:kashika 3.2.122]; [REF:whitney1889 §779] | ✅ TRADITION, framed; homework that asked for "today" in the imperfect corrected before drafting; ह्यः अगच्छम् labelled the course's example at review | l03 |
| The chunks अब्रवीत् (imperfect of ब्रू), उवाच (perfect) and आह | [REF:whitney1889 §632]; [REF:whitney1889 §800]; [REF:whitney1889 §801]; [REF:whitney1889 §821] | ✅ corrected at review: they are taught in the 3rd singular only — the lesson had said they exist in it only | l03 |
| The imperative (लोट्): in the first family five cells are the imperfect's without the augment, and -ति, -न्ति give -तु, -न्तु; in the second family -स्व, -ताम् stand on the present's endings | [REF:whitney1889 §739]; [REF:ashtadhyayi 3.4.85]; [REF:ashtadhyayi 3.4.86]; [REF:kashika 3.4.85] | ✅ corrected before drafting: 3.4.85 does not give the imperative all the imperfect's endings | l04 |
| The optative (विधिलिङ्): the stem's -अ becomes -ए; "should, may, would" | [REF:whitney1889 §738]; [REF:whitney1889 §566]; [REF:whitney1889 §573] | ✅ a card, productive in the 3rd person | l04 |
| Prohibition: मा with the imperative; न with the optative | [REF:whitney1889 §579]; [REF:whitney1889 §580]; [REF:apte1890 s.v. मा] | ✅ Whitney's wording kept ("an ordinary form of prohibition"); the older construction with the augmentless aorist is Volume 4's; मा with the optative is attested and is not offered as a wrong option | l04 |
| भवान् takes the 3rd person | [REF:whitney1889 §456] | ✅ corrected at review (the lesson cited §572, which does not say it) | l04 |
| Hit 1.15 मा प्रयच्छ ईश्वरे धनम् is quoted by the old tiger of the Mitralābha's first story; चरतु भवान् is advice the tiger reports | [REF:hitopadesha mitralābha 15]; the local e-text by line; [REF:whitney1889 §579] | ✅ HISTORY; corrected before drafting (the request was put in the tiger's own mouth) and at review (Whitney quotes one quarter of the verse; "famous" cut) | l04 |
| The ten lakāras; four are the present system's, and the other six are लिट्, लुट्, लृट्, लेट्, लुङ्, लृङ् | [REF:laghukaumudi on 3.4.69] | ✅ corrected before drafting: the benedictive is a use of लिङ्, not one of the six | l05 |
| Hindi parallels: two numbers against three; तू / तुम / आप against the 2nd person and भवान्; ने with the perfective of a transitive verb (सामान्य भूत) against the Sanskrit imperfect; चाहिए against the optative; मत / न against मा; मुझे … अच्छे लगते हैं | [REF:kachru2006], cited bare; [REF:masica1991]; web check at Pass A and C | ✅ with corrections: मैंने फल खाया is सामान्य भूत, not पूर्ण भूत; in the Hindi liking sentence the liker stands in a को-form and the verb agrees with the liked thing (the course's wording since v2.c05) | l01–l04 |
| The serial's source: Hitopadeśa 1 (the king of the doves speaks; the mouse cuts the snares) | [REF:hitopadesha mitralābha] (GRETIL e-text, re-found by line) | ✅ "our retelling"; departures stated in Teacher Notes (the warning is recalled as the free dove's) | l01–l04 §17, §22 |
| Ledger 411 → 418 → 424 → 432 → 439 → 439 (28 ledger-new; upgrade row ऋषिः); the grammar terms are glossary items | STYLE_GUIDE §8 rules 1–15; the learner's word list | ✅ no double count | all |

## Review-pass findings — v3.c03 (2026-11-10)

| Pass | Finding | Resolution |
|---|---|---|
| A | One accuracy reviewer per lesson, each finding through an evidence check, majors also through a domain expert and a fix skeptic: 61 confirmed, 2 rejected. Blocker: l02 said that in Hindi मुझे फल अच्छे लगते हैं the liked thing is the subject — in a FACT callout, the Hindi, a note and a quiz key. Majors: two friends saying वयम् in the lesson that teaches the dual for two; the Hindi names of the persons given to the wrong persons; exercise prompts with two readings (ते, बालिके); "the family is a property of the word" for every verb the course owns; "the done-to becomes the कर्ता"; पूर्ण भूत for मैंने फल खाया; the chunks said to exist in the 3rd singular only; l03's quiz placed nowhere; two quiz items in l04 with a second defensible answer; "every Volume 1 story opened with पश्य"; भवान् cited to the wrong Whitney section; the second family's present filed under listed cells; "the 2nd person has only two forms"; a wrong note on syllable weight; in l05 a table row pairing five words with four lessons and a model answer that did not follow its examiner's card. | fixed; pass |
| B | Policy and load (6 confirmed, 4 rejected; 4 of the 6 repeated Pass A or D): the time before the exam sitting re-stated from the item count (self-study 48 minutes: 18 before the sitting, 30 after); a pointer in l02 to a lesson of the next chapter. | fixed; pass |
| C | Citations (6 confirmed, 1 rejected): the persons' and families' names cited to the wrong Laghukaumudī passage; "a famous instance" and "in any traditional classroom"; Whitney quotes a quarter of the verse; ह्यः अगच्छम् framed as the tradition's example; the e-text joins every pronoun of the recital. | fixed; pass |
| D | Coherence (6 confirmed, 1 rejected): l01's review section missed two of its review_of lessons; three Station 0 keys counted recognition cells; GLOSSARY lacked every term the chapter adds; two Hindi names for the virāma sign; a remediation address given two ways; a key that accepted only मा गच्छ for Hindi मत जाओ. | fixed; pass |

Post-fix verification: one verifier per changed file (seven files: the five lessons, the
fact base and GLOSSARY) re-read the applied fixes against the pre-review commits, re-solved
the keys and checked every restatement; each claimed defect faced a skeptic (none refuted).
Sixteen minor defects survived and were fixed. In the lessons: English notes left in a
parenthesis after a Devanagari word in one step of l01; a sentence that gave ददाति two
sources; a related-lessons line not updated for l01's two new review prompts; a
verification flag in l02 that still named the old source for the liking frame; l03's
revision box, which still called the chunks "3rd sg. only", and its new Hindi line; and
उभयपदी, which GLOSSARY listed as a Teacher Notes term of l02 although l02 never printed it
(now named once there). In the fact base: nine places that had not followed a correction
made in a lesson.

Status change: v3.c03 chapter frame and lessons 01–05 `draft` → `reviewed`. The Volume 3
frame stays `draft` until the volume is complete.

Decisions recorded with this chapter: a wrong option of a quiz or exercise item may be an
error form built from taught material, but not an untaught form and not a construction the
language attests; a prompt with two readings is changed so that one remains, and a key is
widened only where the language itself allows two answers; recognition cells are never
scored, in Station 0 keys as elsewhere; the Laghukaumudī is cited under the sūtra where
the cited words stand, and a recital is not cited for the names it illustrates.

## Chapter v3.c04 — research verdicts (2026-11-10)

Fact base: research/notes/vol3-ch4-sandhi-in-use.md, written from the plan's §4.4 and checked
before drafting by three checkers (forms, facts, contract), every finding challenged: 40
findings confirmed (17 major, 23 minor), 8 of them duplicates between checkers, so 32
distinct (13 major, 19 minor); 2 rejected. The editor's eleven decisions are in its §7.

| Claim | Source checked | Verdict | Lands in |
|---|---|---|---|
| What sandhi is: words said together without a pause adjust at the seam; between words and at a compound's inner seam it is this chapter's, inside a word it is only named; Pāṇini's vowel rules stand under the heading 6.1.72 संहितायाम् | [REF:whitney1889 §125]; [REF:whitney1889 §152]; [REF:ashtadhyayi 6.1.72] | ✅ 6.1.72 in Teacher Notes only; corrected at review: 1.1.11 is a definition in the first book and does not stand under the heading संहितायाम् | l01, l04 |
| The printing and IAST layout: each Devanagari line with its own IAST; word examples in four-column tables in l01–l03; from l04 the joined line, then the pause form beneath, then the gloss; a hyphenated compound form never directly before a parenthesis | STYLE_GUIDE §3.1; plan §1.4; [REF:whitney1889 §126]; `scripts/validate.py` (tried on a sample block) | ✅ policy, decided once for the chapter; at review, split keys and other notes after a Devanagari word moved into square brackets or after a dash | all |
| The stops: no sandhi across a daṇḍa, "?", "!", a speech-frame dash, the closing quotation mark before इति, or a comma; the word before a stop in its pause form; हे never joined to a following vowel | STYLE_GUIDE §3.1; [REF:whitney1889 §138] | ✅ the comma, "?" and "!" approved by the editor and added to STYLE_GUIDE §3.1 (decision 2); हे left unjoined (decision 9) | all |
| The seven vowel rules, their scope and the order of checks; अयादि at a word end leaves a gap that is not joined further | [REF:whitney1889 §126]; [REF:whitney1889 §127]; [REF:whitney1889 §131]; [REF:whitney1889 §132]; [REF:whitney1889 §133]; [REF:whitney1889 §134]; [REF:whitney1889 §135]; [REF:whitney1889 §138] | ✅ every section re-opened; guṇa and vṛddhi are both §127; two rows added to the plan's map (-औ → -आव्, §134b; the -औ dual joins, the -ई/-ऊ/-ए dual does not) | l01 |
| The seven sūtras of l01: 6.1.101, 6.1.87, 6.1.88, 6.1.77, 6.1.78, 6.1.109, 1.1.11 | [REF:ashtadhyayi 6.1.101] … [REF:ashtadhyayi 1.1.11]; [REF:kashika 6.1.101] … [REF:kashika 1.1.11] | ✅ numbers and texts in the data file, examples in the Kāśikā; IR-017 in the open: इको यणचि is 6.1.77 (the 1.x book cited 1.1.45); 1.1.11 corrected at review (above) | l01 |
| The visarga map: what decides is the vowel before the visarga and the sound after it; the -अः, -आः and other-vowel columns; र + र | [REF:whitney1889 §145]; [REF:whitney1889 §169]; [REF:whitney1889 §170]; [REF:whitney1889 §172]; [REF:whitney1889 §174]; [REF:whitney1889 §175]; [REF:whitney1889 §176]; [REF:whitney1889 §177]; [REF:whitney1889 §178]; [REF:whitney1889 §179] | ✅ the -आः column and the other-vowel column productive (decision 10), the र + र row recognition only; corrected at review: the voice-over said -अः becomes -ओ before every voiced sound; the exam's map now agrees with l02's (पुनः is an r-final); keys accept the visarga or the doubled sibilant | l02, l05 |
| The special words and the r-finals: सः and एषः drop ः before a consonant (6.1.132); भोः before a voiced sound; पुनः, प्रातः, अन्तः keep र्; बहिः is *bahis*; नमस्कारः keeps स् | [REF:whitney1889 §169]; [REF:whitney1889 §171]; [REF:whitney1889 §174]; [REF:whitney1889 §176]; [REF:ashtadhyayi 6.1.132]; [REF:monierwilliams1899 s.v. bahis]; [REF:apte1890 s.v. बहिस्] | ✅ corrected at review: the two words अन्तः, "inside" and the nominative of अन्त, told apart in full | l02 |
| Sūtra 8.3.34 विसर्जनीयस्य सः, the नमस्ते thread's step 2 | [REF:ashtadhyayi 8.3.34]; [REF:kashika 8.3.34] | ✅ the learner wording says "before a voiceless consonant" (the Kāśikā: *khari parataḥ*), not the plan's "an s at heart"; corrected at review: 8.3.35 described as what it prescribes (Teacher Notes) | l02 |
| The consonant map: म् → anusvāra before a consonant; a final stop voiced before a voiced sound; त् + च, छ, ज; the doubled न्; a consonant-final word written together with the next; the optional class nasal | [REF:whitney1889 §139]; [REF:whitney1889 §159]; [REF:whitney1889 §161]; [REF:whitney1889 §162]; [REF:whitney1889 §163]; [REF:whitney1889 §202]; [REF:whitney1889 §203]; [REF:whitney1889 §208]; [REF:whitney1889 §210]; [REF:whitney1889 §213] | ✅ keys accept the anusvāra or the class nasal and the voiced or the voiceless pause form; corrected at review: the Hindi voicing rule wrongly listed ज, ल, ह for त् | l03 |
| The three sūtras of l03: 8.3.23, 8.2.39, 8.4.40 | [REF:ashtadhyayi 8.3.23]; [REF:ashtadhyayi 8.2.39]; [REF:ashtadhyayi 8.4.40]; the Kāśikā on each | ✅ the learner line on 8.2.39 says that the pause form षट् is not wrong; the 1.x book's "8.2.39: झलां जश् झशि" is the text of 8.4.53 (Teacher Notes, IR-017) | l03 |
| पदच्छेदः: six steps for splitting a joined line, the reverse table, and ambiguity (मूषक आगच्छति; छात्रा गच्छन्ति) | STYLE_GUIDE §3.1; [REF:whitney1889 §126]; plan c04.l04 block | ✅ the course's method; corrected at review: it is not a FACT cited to Whitney; step 2 keeps the word in -आ, in the same words in l04, l05 and the fact base | l04, l05 |
| The changes inside a word named, not taught: the ṇ of रामेण, the ṣ of रामेषु and करोषि, the guṇa inside गुरवे, भवति = भो + अति | [REF:whitney1889 §131]; [REF:whitney1889 §180]; [REF:whitney1889 §189] | ✅ named in l04, the rules v4.c02; भवति moved from l01 to l04; §235 is not cited (decision 5) | l04 |
| The two sūtras of l04: 1.4.109 परः सन्निकर्षः संहिता, 1.4.110 विरामोऽवसानम् | [REF:ashtadhyayi 1.4.109]; [REF:ashtadhyayi 1.4.110]; [REF:kashika 1.4.109]; [REF:kashika 1.4.110] | ✅ the ledger words संहिता and अवसानम् carry their ordinary senses, the technical senses are GLOSSARY rows (decision 3) | l04 |
| The saṃhitā and padapāṭha recitations; Śākalya as the arranger of the Ṛgveda's padapāṭha; the Nirukta (6.28) disputes his division of a word in Ṛgveda 10.29.1 | [REF:monierwilliams1899 s.v. padapāṭha]; [REF:monierwilliams1899 s.v. śākalya]; [REF:nirukta 6.28]; [REF:rigveda 10.29.1] | ✅ TRADITION, one line, no date; the passage and the verse read in the local GRETIL e-texts; the `nirukta` entry's bibliographic data search-confirmed, page not opened (decisions 1 and 6) | l04 |
| "Editions vary": Volume 1's spaced मा कश्चिद् दुःखभाग् भवेत्; Hit 0.6 and the Pañcatantra's *mahān jambū-pādapaḥ* as the e-texts print them | [REF:hitopadesha prastāvikā 6]; [REF:panchatantra] (Book 4, frame story, the opening prose); v1.c06.l04 | ✅ re-found by line in the e-texts, 2026-11-10; no claim about any printed edition | l04 |
| Hindi parallels: Hindi school grammar's स्वर, व्यंजन and विसर्ग सन्धि and its five vowel names; the tatsama words; the anusvāra dot of Hindi print; schwa deletion at a seam | [REF:kachru2006], [REF:guru1952], cited bare; [REF:masica1991 ch.6] | ✅ attributed to Hindi school grammar; corrected at review: Hindi's visarga is not said to stand only in tatsama words; the schwa example corrected (Pass C) | l01–l05 |
| No sandhi called common or frequent; where a preference is stated it is Whitney's words | STYLE_GUIDE §7; [REF:whitney1889 §16]; Whitney §§161, 163, 172, 202, 203 | ✅ the plan's "most frequent" not printed; corrected at review: a Whitney quotation in the exam made verbatim | all |
| The headwords against Apte and Monier-Williams | [REF:apte1890]; [REF:monierwilliams1899] | ✅ corrected at review: the sense cited for एव is MW's emphatic one; the MW quotation for पद corrected in l04 and the fact base; Apte and MW quotations made exact (Pass C) | l01–l04 |
| The 1.x book's sandhi examples (pp. 41–42 vowels; pp. 71–73 visarga) | the 1.x PDF, re-derived against the fact base's tables 0.A and 0.B | ✅ at Pass C: the correct ones built from owned words carried (देवालयः, सूर्योदयः in l01 §13; रामोऽहम्, रामो गच्छति, रामश्च, रामः करोति in l02 §13); the wrong ones, among them a memory card that defines वृद्धि as आ + इ/उ, listed with their corrections in each lesson's §22 | l01, l02 |
| The exam: one closed-book 45-minute sitting with Station 0 outside it; task C's text printed joined only | plan §4.4; [REF:cepeda2006] for the bookings | ✅ decision 8; corrected at review: the sitting said to be closed-book; quiz options that were correct joins under another analysis, or only a different word division, replaced by error forms | l05 |
| Station 0 bookings, worded once: three arriving from Chapter 3, ten booked in Chapter 4 | the Chapter 3 lesson files (v3.c03.l04 §20, v3.c03.l05 §20); [REF:cepeda2006] | ✅ diffed against the files on disk; one booking line reworded in v3.c03.l05 §20, v3.c04.l01 §3 and the fact base together | l01–l05 |
| Ledger 439 → 445 → 451 → 455 → 460 → 460 (21 ledger-new; upgrade row सूर्यः; vocabulary_count 7 · 6 · 4 · 5 · 0; cells drilled 14 · 26 · 10 · 0 new · 0 new) | STYLE_GUIDE §8 rules 1–15; `ledger-all.tsv` (832 rows) and the 28 Chapter 3 headwords | ✅ no double count; sandhi spellings add 0 | all |

## Review-pass findings — v3.c04 (2026-11-10)

| Pass | Finding | Resolution |
|---|---|---|
| A | Accuracy, lesson by lesson, every finding verified by skeptics: 72 confirmed (18 major, 54 minor), 1 rejected. Lesson 1: 16 (2 major, 14 minor) — 1.1.11 is a definition in the first book and does not stand under the heading संहितायाम्; the Monier-Williams sense cited for एव is the emphatic one; the prefix seams, the serial's departures and several pointers corrected; objectives recast without notes in a parenthesis after Devanagari. Lesson 2: 14 (3 major, 11 minor), 1 rejected — the voice-over said that -अः becomes -ओ before every voiced sound; the two words अन्तः told apart in full; Hindi's visarga no longer said to stand only in tatsama words. Lesson 3: 14 (4 major, 10 minor) — the Hindi voicing rule listed ज, ल, ह for त्; keys accept the voiced pause form; a quiz option that was only a different word division replaced by an error form; split keys in square brackets. Lesson 4: 15 (4 major, 11 minor) — the Monier-Williams quotation for पद corrected here and in the fact base; the dictation key accepts the class nasal; the printing convention stated as plain text, not as a FACT callout; no fact-base row number in the objectives; step 2 of the method keeps the word in -आ. Lesson 5: 13 (5 major, 8 minor) — a Whitney quotation made verbatim; a quiz option that was a correct join of another word replaced by an error form; the rule on spaces in joined print stated exactly; the six steps are the course's method, not a FACT cited to Whitney; the sitting said to be closed-book. | fixed; pass |
| B | Policy and load (10 confirmed: 6 major, 4 minor; 1 rejected): lesson 2 could not be taught in 45 minutes as written — its dictation moved to homework (self-study 40 → 44 minutes); lesson 3's listening drill moved the same way (35 → 38); the dictation items of lessons 1–2 no longer printed under the instruction to write them from hearing; a homework task no longer asks for a recognition-only join; Hindi objectives recast without notes in a parenthesis. | fixed; pass |
| C | Citations (8 confirmed: 4 major, 4 minor; 3 rejected, because another pass had already made the same fix): the 1.x book's vowel and visarga examples re-derived — the correct ones built from owned words carried into lessons 1 and 2, the wrong ones listed in the Teacher Notes with their corrections; 8.3.35 described as what it prescribes; the schwa example corrected; Apte and Monier-Williams quotations made exact; the `nirukta` entry names the imprint of the text volume (search-confirmed; page not opened). | fixed; pass |
| D | Coherence (9 confirmed: 6 major, 3 minor; 2 rejected, because another pass had already made the same fix): the exam's visarga map agrees with lesson 2's (पुनः is an r-final); step 2 of the method agrees across lessons 4 and 5 and the fact base; every lesson's §3 reaches the lessons its review_of lists; the claim that the joined crow story is first seen in the exam withdrawn; GLOSSARY gains fourteen terms (स्वरसन्धिः, सवर्णदीर्घः, गुणः, वृद्धिः, यण्, अयादि, पूर्वरूपम्, प्रगृह्यम्, विसर्गसन्धिः, व्यञ्जनसन्धिः, संहिता, पदपाठः, पदच्छेदः, अवसानम्) and five updated rows (सन्धि, अवग्रह, अनुस्वार, विसर्ग, विराम-रूप); the plan's §7.6 records that the -आः column is productive; outside the findings, the fact base's self-study figures were aligned with the lessons in the same commit. | fixed; pass |

Totals: 99 confirmed findings (34 major, 65 minor), one of them found by two passes, so 98
distinct (33 major, 65 minor); 7 rejected, five of them because another pass had already
made the same fix; 242 fixes applied and 1 found already applied. No blocker. Keys now
accept every correct answer: the anusvāra or the class nasal, the visarga or the doubled
sibilant, the voiced or the voiceless pause form.

Post-fix verification: twelve files (lessons 1–5, chapter.md, the fact base, GLOSSARY.md,
REFERENCES.md, research/notes/vol3-plan.md, the shipped v3.c03.l05, and one line of the
Chapter 3 fact base) were re-read against the diff from their first drafts in three runs,
each claimed defect challenged (none refuted). Twenty-five minor leftovers survived and were
fixed: 4 in the first run (the rule on spaces in joined print stated the same way in three
more places of the exam; one row of the plan's §7.6 brought into line with lesson 2's maps;
GLOSSARY and REFERENCES verified with no change), 9 in the second (a step heading in lesson 1
that disagreed with the line under it; two Pass C flags the review had already settled,
closed; the serial's departures placed in the right chapters in lessons 2 and 3; the fact
base's Hindi row and timing line, and the Chapter 3 fact base's booking line, brought into
line with the lessons), and 12 in the third (notes in a parenthesis after Devanagari recast in
lesson 3; a false sentence about a word-final स् corrected in lesson 4; the fact base's
scene, its wording of 8.2.39, its reverse table and two dictionary rows brought into line
with the lessons; the chapter frame verified with no change). The editor aligned three more
sentences of lesson 2 on the -आः column with its maps: आ before every voiced sound, with a
gap before a vowel.

Status change: v3.c04 chapter frame and lessons 01–05 `draft` → `reviewed`. The Volume 3
frame stays `draft` until Chapter 6 ships.

Decisions recorded with this chapter: split keys and other notes after a Devanagari word go
in square brackets or after a dash, since a parenthesis there holds IAST only; no fact-base
row number stands in learner-facing text; a course convention is plain text, not a FACT
callout; a wrong option is at fault only if it could be a correct answer to the item as
asked; a dictation's items are not printed where the learner writes them from hearing; a
class slot must be able to hold what is put in it, and what cannot fit goes to homework; §3
reaches every lesson that review_of lists; a quotation in quotation marks is verbatim from a
source that was opened.

The editor's eleven decisions on the fact base (its §7), 2026-11-10: (1) the REFERENCES key
`nirukta` is added, after the editor re-read Nirukta 6.28 in the GRETIL e-text, and the
TRADITION line on it prints; (2) the comma, "?" and "!" are stops, and the word before a
stop stands in its pause form (STYLE_GUIDE §3.1); (3) the five l04 headwords that are also
grammar terms keep both rows — the ledger counts the word in its ordinary sense, GLOSSARY
carries the technical sense and the Hindi term; (4) the GLOSSARY terms are approved as
listed, their Hindi forms binding on the lessons from the first draft; (5) Whitney §180,
§189, §191 and §235 are cited in a lesson only if Pass C opens the section and it says what
it is cited for; (6) the Ṛgveda locus is 10.29.1, confirmed in the GRETIL Ṛgveda; (7)
`kachru2006` and `guru1952` stay bare, and the schwa-deletion row cites `ohala1994` only if
Pass C finds the statement there; (8) the exam is one 45-minute sitting with Station 0
outside it, and its booklet prints task C's text joined only, the pause form standing in
the key; (9) हे is left unjoined and no drill puts it before a vowel; (10) the -आः column
and the other-vowel column of the visarga map are productive, the र + र row recognition
only, recorded in the plan's §7.6; (11) the erratum to v1.c03.l04 §14 is approved and
applied.

The evidence rule for web sources, adopted 2026-11-10, because this session's network
policy lets no page be opened on archive.org, HathiTrust, WorldCat, Encyclopaedia Iranica
and similar hosts, while web search works: a reading, a quotation, a verse number or a locus
prints only from a text the project opened itself; bibliographic data may rest on search
results that quote a title page, a library catalogue or the publisher's own page, and is
marked "search-confirmed; page not opened"; a hedged statement of scholarship may rest on
search results that quote the source's own page, is attributed in the text, and is marked
the same way; anything else does not print. Under this rule the `nirukta` entry's
bibliographic data (Sarup's edition, first published 1920–1927; the Sanskrit text Lahore:
University of the Panjab, 1927; repr. Delhi: Motilal Banarsidass, 1967) is search-confirmed,
page not opened, while the passage itself (Nirukta 6.28) and the Ṛgveda verse (10.29.1) were
read in the local GRETIL e-texts.

## Chapter v3.c05 — research verdicts (2026-11-10)

Fact base: research/notes/vol3-ch5-pronouns-indeclinables-compounds.md, written from the plan's
§4.5 and checked before drafting by three checkers (forms, facts, contract), every finding
challenged: 52 findings confirmed (3 blockers, 19 major, 30 minor), 3 rejected; 79 fixes
applied, 7 found already made, 16 duplicates between checkers. Among the blockers: a key that
printed a form neither joined nor in pause form, and a row that starred the good Sanskrit यदा …
ततः as a mistake. The editor's eleven decisions are in its §7.

| Claim | Source checked | Verdict | Lands in |
|---|---|---|---|
| The status marks, one wording everywhere (✓ productive, ◐ recognition, ○ display); no objective, exercise, quiz item, homework task, Station 0 key or exam task demands or scores a ◐ cell | STYLE_GUIDE §8; plan §0, §1.3, D15 | ✅ policy; corrected at review: a recognition-only cell (अस्मै) stood as a wrong quiz option in l02, and the recognition-only kind द्विगु as a wrong option in l04; a Station 0 key named a recognition-only cell; homework asked for recognition-only duals and a recognition-only kind; one wording for the third mark throughout | all |
| The printing: every course-written text joined, with its pause form beneath; tables, cited forms and vigraha tables in pause form; a compound one word in the pause form; the learner's compositions joined from l01 | STYLE_GUIDE §3.1; the Chapter 4 fact base, row 0.2; plan §1.4, D10 | ✅ taken over from Chapter 4 unchanged; corrected at review: quiz options of two or more words printed joined, one unjoined seam joined, every Devanagari line of the exam given its own IAST; 21 notes in a parenthesis directly after a Devanagari word moved into square brackets by the editor's sweep | all |
| The joins allowed: Chapter 4's rules and stops; the seams Chapter 4 marks ◐ avoided — a relative clause ending in -न् closed by a comma before its correlative; कश्चिन्नृपः only as one labelled recognition line | the Chapter 4 fact base, rows 0.3–0.12 and tables 0.A–0.C; [REF:whitney1889 §161]; [REF:whitney1889 §208] | ✅ every seam re-derived; the model sentence is कश्चिद्व्याध आसीत्, by decision 2; corrected at review: l03 said Chapter 4 has no row for न् + त, which it has, as recognition | all |
| अस्मद् and युष्मद्: every singular cell and the plural nominative, accusative, instrumental and genitive ✓, the duals and the other plural cells ◐; the short forms are accentless and never stand first or where emphasis is laid; dative plural ≠ ablative plural | [REF:whitney1889 §491]; [REF:whitney1889 §494]; [REF:ashtadhyayi 8.1.18]; [REF:ashtadhyayi 8.1.24]; [REF:kashika 8.1.24] | ✅ every cell re-derived against §491a; the plan's locator for the verse-quarter rule corrected (8.1.18, not Whitney §491b; Teacher Notes only, never tested) | l01 |
| Sūtra 8.1.22 तेमयावेकवचनस्य and the नमस्ते thread, step 3: the three-line proof (2.3.16; 8.1.22; 8.3.34) | [REF:ashtadhyayi 8.1.22]; [REF:kashika 8.1.22]; [REF:ashtadhyayi 2.3.16]; [REF:ashtadhyayi 8.3.34] | ✅ text in the data file, gloss and examples in the Kāśikā; 2.3.16 and 8.3.34 re-quoted, not counted again; corrected at review: the hook said the learner had never been told what the ते of नमस्ते is (v1.c05.l02 and v3.c01.l03 say it) | l01 |
| भवत् "Your Honour" in its listed cells, with भवती and भवन्तः and the third-person verb; the R6 card (-वान्, -मान्, महान्); सखा and सखे | [REF:whitney1889 §343]; [REF:whitney1889 §450]; [REF:whitney1889 §452]; [REF:whitney1889 §453]; [REF:whitney1889 §456] | ✅ cells re-derived against §453's भगवन्त् table; Whitney's view of the origin of भवत् in Teacher Notes only; corrected at review: the सखा callout restores Whitney's clause on सख्या and सख्ये; objective 3 listed six of the twenty productive cells of भवत् and भवती | l01 |
| तद् in three genders as the model of the pronominal declension; सः and सा from one stem, every other cell from त-; IR-025, the 1.x "स् → त्" withdrawn | [REF:whitney1889 §495]; [REF:whitney1889 §496]; [REF:whitney1889 §176] | ✅ identical to the plan's table cell for cell; the oblique duals ◐, as on the v3.c02.l04 dual card | l02 |
| The Δ cards: एतद्, यद्, किम् with its feminine, सर्व, अन्य, एक; पर and स्व as plain a-adjectives | [REF:whitney1889 §499]; [REF:whitney1889 §500]; [REF:whitney1889 §504]; [REF:whitney1889 §509]; [REF:whitney1889 §523]; [REF:whitney1889 §524]; [REF:whitney1889 §525]; [REF:apte1890 s.v. पर]; [REF:ashtadhyayi 7.1.25]; [REF:ashtadhyayi 1.1.34]; [REF:ashtadhyayi 1.1.35] | ✅ the oblique duals of each card ◐, as l02 prints them (the fact base aligned at Pass D); corrected at review: the ष of एतेषाम् explained from the right form; the Δ cards carry the model table's marks | l02 |
| इदम्: four stems (Whitney §502a); its key cells ✓, the rest ◐; अदस् not taught in Volume 3 | [REF:whitney1889 §501]; [REF:whitney1889 §502] | ✅ the plan's ◐ for the key cells corrected (c05#3); अदस् one Teacher-Notes line (decision 3); corrected at review: Whitney §502 on the stems of इदम् no longer narrowed | l02 |
| Sūtra 1.1.27 सर्वादीनि सर्वनामानि | [REF:ashtadhyayi 1.1.27]; [REF:kashika 1.1.27] | ✅ corrected at review: the Kāśikā's examples printed in full, as the fact base gives them | l02 |
| The indefinites: कः, का, किम् + चित् or अपि; कापि from का + अपि; only कश्चित् and कदाचित् counted | [REF:whitney1889 §507]; [REF:whitney1889 §1103] | ✅ plan c05#7 applied; the oblique indefinites display only; corrected at review: the quotation from Whitney §507 made exact | l02 |
| The correlative grid: -तः, -त्र, -था, -दा | [REF:whitney1889 §1097]; [REF:whitney1889 §1098]; [REF:whitney1889 §1099]; [REF:whitney1889 §1101]; [REF:whitney1889 §1103]; [REF:whitney1889 §505] | ✅ the four rows located (§1098, §1099, §1101, §1103); corrected at review: a key accepts इत्थम् beside एवम् and तथा | l03 |
| The relative–correlative sentence: the relative clause first, Whitney's "very decided preference"; each pronoun in its own clause's case | [REF:whitney1889 §512]; [REF:whitney1889 §1132] | ✅ keys expect तदा after यदा and accept ततः, by decision 10; keys accept the main clause first | l03, l05 |
| The particles: च, वा, हि, तु never first; एव and इव | [REF:whitney1889 §1102]; [REF:whitney1889 §1122]; [REF:whitney1889 §1133]; [REF:whitney1889 §1077]; [REF:apte1890 s.v. हि] | ✅ corrected at review: "तु never stands first" no longer rests on citations that do not say it; Whitney §1102 cited beside §1122 for the place of एव and इव, at Pass C, second round | l03 |
| The words placed with the genitive: अधः, उपरि, समीपे | [REF:whitney1889 §1130]; [REF:apte1890 s.v. अधस्] | ✅ | l03 |
| Sūtras 1.1.37 स्वरादिनिपातमव्ययम् and 1.4.59 उपसर्गाः क्रियायोगे; 1.4.58 in Teacher Notes | [REF:ashtadhyayi 1.1.37]; [REF:kashika 1.1.37]; [REF:ashtadhyayi 1.4.59]; [REF:kashika 1.4.59]; [REF:ashtadhyayi 1.4.58] | ✅ corrected at review: the callout words both as the naming rules they are, as the Kāśikā reads them, and is printed once; an e-text typo in a Kāśikā gloss corrected | l03 |
| The upasarga card: twenty-two in the tradition's list, nineteen in Whitney's | [REF:ashtadhyayi 1.4.58]; [REF:kashika 1.4.58]; [REF:whitney1889 §1077]; [REF:whitney1889 §1121] | ✅ the Kāśikā e-text's typos (*rus*, *up*) corrected on the card; corrected at review: the 1.x list's errors (अति and उप twice; नि and अपि missing) listed in l03 §22 | l03 |
| Compounds: the four rules, the four kinds produced (द्वन्द्वः, तत्पुरुषः, कर्मधारयः, बहुव्रीहिः), द्विगुः, उपपद and अव्ययीभावः recognised; the names that are examples of themselves | [REF:whitney1889 §1246]; [REF:whitney1889 §1247]; [REF:whitney1889 §1249]; [REF:whitney1889 §1263]; [REF:whitney1889 §1293]; [REF:whitney1889 §1312]; [REF:whitney1889 §1313] | ✅ lesson 4's objective 4 dropped (decision 5); the feminine of a bahuvrīhi withheld until Whitney §1294 ff. is opened (decision 4); corrected at review: the seam of हिमालयः is अ + आ; the vigraha of सज्जनः is सन् जनः; the claim that the learner had met सिंहमूषकौ and नीलकण्ठः before withdrawn; an accented citation form removed | l04 |
| Sūtras 2.2.29 चार्थे द्वन्द्वः and 2.2.24 अनेकमन्यपदार्थे | [REF:ashtadhyayi 2.2.29]; [REF:kashika 2.2.29]; [REF:ashtadhyayi 2.2.24]; [REF:kashika 2.2.24] | ✅ numbers and texts in the data file; the Kāśikā's example on 2.2.24 | l04 |
| A genitive tatpuruṣa is not resolved with a dative: विद्यालयः, जलपात्रम् | [REF:kashika 2.1.36] | ✅ found at review: l04 and the exam's keys accepted a dative vigraha (in the exam a blocker); the Kāśikā on 2.1.36 keeps the dative compound for a product and its material (यूपदारु) and refuses it for रन्धनाय स्थाली | l04, l05 |
| A compound that can be read two ways (अल्पशक्तिः, नीलकण्ठः, शुभरात्रिः, प्रियमित्रम्) | l04 §8 (the context test); l04 §22 | ✅ the context decides: every prompt in l04 §18 and §19 and in the exam gives the compound's use, and where no context is given a key accepts either analysis (settled at review) | l04, l05 |
| Hindi parallels; the six kinds of समास and the six names of सर्वनाम in the Hindi school textbooks | [REF:kachru2006], cited bare; current Hindi school material (web) | ✅ decision 1, outcome at Pass C: confirmed for the school textbooks only, Guru's own page not opened, so both lines are credited to the textbooks with no key and [REF:guru1952] is not cited in this chapter (the six kinds at the first round, the six names at the second); corrected at review: Hindi यह / वह no longer said to serve three genders | l01–l05 |
| The serial, episode 5: the flight told again with names, in four parts and a new exam page | [REF:hitopadesha mitralābha]; GRETIL `hitop_u.htm`, by line (table 0.I) | ✅ every statement re-found by line; departures in Teacher Notes; corrected at review: the parts across l03 and l04 agree; three lines of the exam's passage that restated lesson lines reworded | l01–l05 |
| Hitopadeśa 1.40 in l03 §13: display, read in homework only | `hitop_u.htm` l. 483–486 | ✅ never drilled, asked or scored | l03 |
| The 1.x pages this chapter replaces: pronouns (pp. 111–114), avyaya and the upasargas (pp. 114–115), compounds (pp. 42–43, 82–84) | the 1.x PDF | ✅ at Pass C, first round: opened, the errors listed with their corrections in the Teacher Notes of l02–l04 (रामसीतौ for रामसीते; an avyayībhāva glossed as a noun; "सर्वनाम-स्थानीय"; अति and उप doubled; 1.1.37 glossed from स्व for स्वर्); at the second round the 1.x lesson "6 Samāsa Types" (pp. 83–84) added to l04's list, with 1.2.42 and 2.1.23 | l02–l04 |
| No form called common or frequent in the course's own voice | STYLE_GUIDE §7; [REF:whitney1889 §512] | ✅ the 1.x claims of scale ("among the most common words") not repeated | all |
| The exam: one closed-book 45-minute sitting of five tasks; task D printed joined only; Station 0 before it | plan §4.5; [REF:cepeda2006] for the bookings | ✅ task A is eight separate sentences (deviation 9); corrected at review: Station 0 re-timed to about 15 minutes and the room time stated as about 60; task D's second question asks what only the passage tells; the Hindi explanation no longer prints the key of a task item | l05 |
| Station 0 bookings, worded once: three arriving from Chapter 4, ten booked in Chapter 5 | the Chapter 4 lesson files (v3.c04.l04 §20, v3.c04.l05 §20); [REF:cepeda2006] | ✅ diffed against the files on disk: identical; corrected at review: a Station 0 prompt and a booked item of the exam gave each other away | l01–l05 |
| The headwords against Apte and Monier-Williams | [REF:apte1890]; [REF:monierwilliams1899] | ✅ corrected at review: quotations from Apte made exact; at Pass C, Apte found to have the headword इदम् | l01–l04 |
| Ledger 460 → 464 → 472 → 480 → 488 → 488 (28 ledger-new; upgrade row शक्तिः; vocabulary_count 4 · 8 · 8 · 9 · 0; cells drilled 46 · 73 · 0 · 0 · 0 new, 119 reviewed in the exam) | STYLE_GUIDE §8 rules 1–15; `ledger-all.tsv` (872 rows) and the 21 Chapter 4 headwords | ✅ no double count; pronoun cells, built indefinites and transparent compounds add 0; only नीलकण्ठः and पादपः among the compounds count | all |

## Review-pass findings — v3.c05 (2026-11-10)

| Pass | Finding | Resolution |
|---|---|---|
| A | Accuracy, lesson by lesson, every finding verified by skeptics: 58 confirmed (3 blockers, 25 major, 30 minor), none rejected. Lesson 1: 10 (3 major, 7 minor) — the hook said the learner had never been told what the ते of नमस्ते is (v1.c05.l02 and v3.c01.l03 say it) and dated मया and त्वया to Volumes 1–2; the सखा callout dropped Whitney's clause on सख्या and सख्ये; objective 3 recast without a parenthesis of forms after a Devanagari word; quiz options of two words printed joined; one unjoined seam joined; the contingency in the load note removed. Lesson 2: 12 (2 blockers, 6 major, 4 minor) — a recognition-only cell (अस्मै) stood as a wrong quiz option, and Hindi यह / वह were said to serve three genders; the ष of एतेषाम् was explained from the wrong form; रामाः was dated to Volume 2; the Kāśikā's examples under 1.1.27 were cut short; Whitney §502 on the stems of इदम् was narrowed; homework asked for recognition-only duals; quotations from Whitney §507 and Apte made exact. Lesson 3: 14 (5 major, 9 minor) — the callout on 1.1.37 and 1.4.59 now words both as the naming rules they are, as the Kāśikā reads them, and is printed once; the lesson said Chapter 4 has no row for न् + त; the quiz moved from a 2-minute class slot to homework (self-study 40 → 45 minutes); a key accepts इत्थम् beside एवम् and तथा; "तु never stands first" no longer rests on citations that do not say it. Lesson 4: 12 (8 major, 4 minor) — the seam of हिमालयः is अ + आ; the claim that the learner had met सिंहमूषकौ and नीलकण्ठः before withdrawn; the vigraha of सज्जनः is सन् जनः, both members in one case and gender; a dative vigraha was accepted for a compound the tradition does not resolve so; a recognition-only kind stood as a wrong quiz option; an accented citation form removed; a key accepts स्वागतम्. Lesson 5: 10 (1 blocker, 3 major, 6 minor) — two keys accepted a dative vigraha for a genitive tatpuruṣa, which lesson 4 calls wrong (the Kāśikā on 2.1.36 keeps the dative compound for a product and its material); three lines of the unseen passage restated lines of lessons 3 and 4 and were reworded; a Station 0 prompt and a booked item gave each other away; the Hindi explanation printed the key of a task item; every Devanagari line given its own IAST. | fixed; pass |
| B | Policy and load (10 confirmed: 8 major, 2 minor; none rejected): lesson 2 could not be taught in 45 minutes as written — exercise 1, the conversation and the quiz moved to homework (self-study 40 → 52 minutes); lesson 4's quiz moved to homework so that Station 0 can hold its second item (40 → 45); the exam's Station 0 re-timed and the room time stated as it is (about 60 minutes); a Station 0 key named a recognition-only cell; a homework task asked for a recognition-only kind; objective 3 of lesson 1 listed six of the twenty productive cells of भवत् and भवती; task D's second question could be answered from memory and now asks what only the passage tells; notes after Devanagari words moved out of parentheses. | fixed; pass |
| C, first round | Citations (3 confirmed: 2 major, 1 minor; 1 rejected): the 1.x pages this chapter replaces (pp. 42–43, 82, 111–115) were opened and their errors are listed with corrections in the Teacher Notes of lessons 2–4 — रामसीतौ for रामसीते, an avyayībhāva glossed as a noun, "सर्वनाम-स्थानीय", a doubled अति and उप in the list of twenty-two prefixes, 1.1.37 glossed from स्व for स्वर्; the six kinds of समास are confirmed for the Hindi school textbooks but not for Guru's grammar, so the line is credited to the textbooks and its key withdrawn; Apte has the headword इदम्. | fixed; pass |
| D | Coherence (14 confirmed: 7 major, 7 minor; none rejected): the chapter frame and the exam describe task A as the eight separate sentences it prints; lesson 1 carries the serial illustration the frame books for it; the fact base's Δ-card lines state the recognition-only duals as lesson 2 prints them; GLOSSARY gains eleven terms (सर्वनाम, निपात, विग्रह, द्वन्द्व, तत्पुरुष, कर्मधारय, द्विगु, बहुव्रीहि, अव्ययीभाव, उपपद, प्रादि) and three updated rows (अव्यय, उपसर्ग, समास); the plan's §7.6 gains the Chapter 5 corrections that Chapter 6 and Volume 4 must follow; the serial's parts across lessons 3 and 4 agree; one wording for the third status mark throughout. | fixed; pass |
| C, second round | Citations again, because the first round returned only three findings and no record of what it had opened; this time the reviewer returned a coverage record (19 lines: every focus point, what was opened, what was found). 3 confirmed (2 major, 1 minor), none rejected; 6 fixes: lesson 2 §7 credits the six सर्वनाम names to the Hindi school textbooks with no key, as lesson 4 does for the six kinds of समास, since Guru's own page was not opened, and its §22 and §27 follow; the 1.x lesson "6 Samāsa Types" (pp. 83–84) added to lesson 4's §22, with 1.2.42 and 2.1.23; Whitney §1102 cited beside §1122 in lesson 3 §15 for the place of एव and इव; an editor's note in the fact base (§7, decision 1) records the outcome. | fixed; pass |

Totals: the four passes confirmed 85 findings (3 blockers, 42 major, 40 minor) and rejected 1;
254 fixes applied, 3 found already made, 11 duplicates between passes (the editor merged two of
them by hand in the exam's task D key and its note). With the second citation round: 88
confirmed findings (3 blockers, 44 major, 41 minor), 1 rejected; 260 fixes applied, 3 found
already made, 11 duplicates between passes. [REF:guru1952] is not cited in this chapter.

Post-fix verification: nine files (lessons 1–5, chapter.md, the fact base, GLOSSARY.md and
research/notes/vol3-plan.md) were re-read in three runs against the commits before the review
fixes — 16267eb for lessons 1–4, the fact base and chapter.md; 73e815c for lesson 5, GLOSSARY.md
and the plan — with every claimed leftover challenged (none refuted). Twenty-one leftovers
survived and were fixed (1 major, 20 minor): 3 in the first run (the exam and the plan rows had
none; the Teacher Notes of lessons 1, 2 and 4 still called the GLOSSARY terms "candidate
additions" or promised them "when the chapter ships"), 8 in the second (lessons 3 and 4: the
major one, a new Teacher Note that said the 1.x book's four kinds are the lesson's, though the
1.x list has the avyayībhāva and no karmadhāraya; quiz item 9 still offered the
recognition-only kind द्विगु as a wrong option; notes and pointers still in parentheses after
Devanagari words in lesson 3; the chapter frame had none), and 10 in the third (lessons 1 and 2
and the fact base: a fix that had put its own note in a parenthesis after a Devanagari word; a
1.x line in quotation marks that was not verbatim; two places that still described work moved
to homework as class work; the fact base's 1.1.27 examples, its audit of the Δ cards and the
key of the exam passage's second question aligned with the lessons). An editor's sweep by
script then moved 21 notes that stood in parentheses directly after a Devanagari word into
square brackets (18 after the second run, 3 more after the third). The second citation round's
fixes were checked in a fourth run (four files, against 55d6670): 5 minor leftovers fixed
(lesson 4 §22 names the pages of its item 6 and the tradition's four kinds in its item 7; the
fact base's row 0.17 cites Whitney §1102e for the place of एव and इव, its row 0.25 records that
Guru's key is not cited, and its lists of the Whitney sections opened gain §1102), 1 duplicate
between two verifiers, none refuted. Post-fix verification in all: 26 leftovers fixed (1 major,
25 minor), none refuted.

Status change: v3.c05 chapter frame and lessons 01–05 `draft` → `reviewed`. At release the
frame's Assessment was aligned with lesson 5 §18 (task D, ten joined lines; task E, at least six
lines and one short form not first), and its goals line now names the six kinds of समास of the
Hindi school textbooks beside the tradition's four, as lesson 4 §4 does. The Volume 3
frame stays `draft` until Chapter 6 ships.

Decisions recorded with this chapter: a recognition-only cell or kind is never a wrong option;
the Δ cards carry the model table's marks; quiz options of two or more words are printed
joined, and all the options of one item alike; a compound that can be analysed two ways has
one answer only in its context, and a key accepts either analysis where no context is given;
no contingency clause stands in a timing plan; a statement about what an earlier lesson taught
is checked by grep; an exam's unseen passage repeats no line of the lessons, and each of its
questions is answerable from the passage alone; a reviewer returns a record of what was opened
and checked.

The editor's eleven decisions on the fact base (its §7), 2026-11-10: (1) the Hindi school
grammar's six kinds of समास and its six names of सर्वनाम print as attributed TRADITION with
[REF:guru1952] bare, if Pass C confirms each on the web — outcome at Pass C, in two rounds: the
web confirmed both in current school material only and Guru's own page was not opened, so both
lines are credited to the Hindi school textbooks with no key and [REF:guru1952] is not cited in
this chapter; (2) the model sentence of lesson 2 is कश्चिद्व्याध आसीत्, with ✓ seams only, and
कश्चिन्नृपः stands beneath it as one labelled recognition line; (3) अदस् is not taught: one
Teacher-Notes line in lesson 2 says that असौ "that one yonder" is not taught in Volume 3 and is
glossed where met, and its home is recorded in the plan's §7.6 (Volume 4 leaves it
recognition-only; Volume 5 meets it in reading); (4) the feminine of a bahuvrīhi prints only if
Pass C opens the Whitney section and it says so, otherwise lesson 4's §12 drops it; (5) lesson
4's objective 4 is dropped, because an objective is something the lesson can score, and
objective 3 ends with the labels द्विगु, उपपद and अव्ययीभाव recognised when met and never scored;
(6) the Chapter 4 exam's bookings: closed, S0-an and S0-ao identical to that lesson's §20; (7)
each Apte sub-entry is quoted at Pass C, or the row cites Monier-Williams alone; (8) Whitney
§364, §1121 and §1250 are cited in a lesson only if Pass C opens the section and it says what
it is cited for; (9) no upgrade row beyond the plan's शक्तिः, and vocabulary_count stays as the
plan gives it; (10) यदा … ततः is good Sanskrit: keys expect तदा and accept ततः, and no quiz
option offers ततः as wrong; (11) the errata of the fact base's §8 (two lines of v2.c06.l04)
are approved and applied.

## Volume 4 plan — how it was made and checked (2026-11-10)

`research/notes/vol4-plan.md` binds the six chapter fact bases of Volume 4 — पाणिनीयम् · The
Pāṇinian System (B1 → B2): 28 lessons in six chapters (4 · 4 · 6 · 5 · 5 · 4), 119
ledger-new headwords (508 → 627; planned exits 521 · 537 · 565 · 591 · 617 · 627), and 238
distinct Aṣṭādhyāyī sūtras in learner text. The plan's §7 records every stage below; the
scripts it names are kept in `research/evidence/vol4-plan/`.

| Stage | What it checked, and against which sources | Result | Recorded in the plan |
|---|---|---|---|
| Three candidate designs (derivation-first, reader-first, system-first), three judges (a Pāṇinian, a pedagogue, a house editor) | each design's sūtras, forms, derivations, load and texts | derivation-first ranked first (rank points 9, mean score 56.3 of 70), reader-first second (5; 52.0), system-first third (4; 49.3) | opening; §7.1, §7.2 |
| Synthesis on the derivation-first spine, with grafts from the other two | every error a judge found re-verified before it was changed: the sūtra in the local Aṣṭādhyāyī data file (`corp/ashd/sutraani/data.txt`, 3,983 entries), the commentary line in the GRETIL Kāśikā (`jvkasipu.htm`) and Laghusiddhāntakaumudī (`varlghku.htm`) e-texts, the form or statement in Whitney 1889, the passage by line in the GRETIL Hitopadeśa (`hitop_u.htm`), Pañcatantra (`vispancu.htm`) and Mahābhārata (`mbh_03_u.htm`) e-texts; headwords against the compiled ledger of Volumes 1–3 and Monier-Williams, Apte spot-checked; tense, form and lemma frequencies counted from the DCS corpus (Hitopadeśa, Viṣṇupurāṇa) | every judge's error fixed or kept with a reason; 8 more errors found at synthesis, among them one double-counted headword (प्रभातम्, owned since v2.c01.l03) | §7.1, §7.2 |
| Completeness critique | what the synthesis left wrong or unhomed; where a source decides a gap, its row cites it (Whitney sections, the data file, the Laghusiddhāntakaumudī e-text, the 1.x PDF, the ROADMAP's Volume 5 chapters, the IMPROVEMENT_REPORT's loci) | 46 gaps, each fixed | §7.4 |
| Check of the repair | the repaired text against the 46 fixes | 17 new problems, all fixed | §7.3 (the editor's confirmation) |
| The 19 open questions | decided by a deputy in a fixed order (correctness; the ROADMAP's chapters and lesson counts; one point per lesson and at most 8 headwords; later lesson or Volume 5 rather than overload; the ledger chain) | all 19 confirmed by the editor on 2026-11-10 | §7.3 |
| Line-by-line review by fourteen readers: for each chapter block a Pāṇinian checker (every form re-derived, every sūtra's number and text looked up in the data file, every derivation walked, every Kāśikā and Laghusiddhāntakaumudī line and every passage re-found in its e-text) and a course editor (order of teaching, headwords against the ledger and the dictionaries, joined lines against the printing rule, figures against their tables); for the volume frame one reader for the tables and arithmetic of §3 and §4.0, one for the principles, the exit profile and §5–§7; every finding challenged by a skeptic | the same sources | 215 confirmed (10 blockers, 72 major, 133 minor), 14 rejected; applied most severe first: 317 fixes as written, 11 already made by an earlier fix, 47 collisions merged in 41 clusters by a deputy and re-checked by a second reader (29 edits) | §7.5 |
| Post-check through four lenses (tables and arithmetic; restatements of every changed point, in two halves; the form and the Sanskrit of every added or changed line), each finding challenged | the edited text against itself and the sources above | 33 confirmed (14 major, 19 minor), 5 rejected; all applied | §7.5 |

The ten blockers of the review (the plan's §7.5 table): the अकः of 6.1.101 was filed as a
genitive in the case-code table (it is an ablative, "after an ak"); 8.3.34 was said to "keep"
the स् of नमस्ते, where it replaces a visarga with स्; शृण्वन्ति was derived by 6.1.77 (found by two
readers; its व् comes by 6.4.87); the steps of दा → ददौ stood in the wrong order; joined lines
were left unjoined (a space after a consonant-final word before a vowel in यण् आदेशः;
वानरी अस्ति for वानर्यस्ति; a cited root before इति); the intermediate string of कपोतराजः was
wrong; and the steps of भवान् stood in the wrong order (6.4.14 lengthens before नुम् is added).

Final arithmetic, re-run by script after the last edit: 119 new headwords, none owned
before, none counted twice; 508 → 627, chapter exits 521 · 537 · 565 · 591 · 617 · 627,
unchanged by the review, which swapped one headword (v4.c01.l02: सवर्णः for उच्चारणम्) and
moved one inside Chapter 6 (प्रकरणम्, c06.l01 → c06.l02). Sūtras in learner text: 238
(237 before the review), by tier B 26 · Q 25 · R 11 · D 121 · K 51, and 4 owned Volume 3
sūtras re-read; the fourteen Māheśvara sūtras are counted apart. Memory load at exit: 25 new
Q + 25 new B by gist (plan §4.0.3 Totals, §1.4.1).

Rules carried forward to the Volume 4 fact bases: a chapter fact base is checked against the
sources before its lessons are drafted and corrects the plan where the plan is wrong —
wrong Sanskrit, a wrong sūtra, a wrong statement about a source, or a contradiction in the
plan's own text — recording each correction in its own §7 and in the plan's §7.6, which a
later fact base follows instead of the lines it corrects; the plan's reviewed text is left
as it is. Every Kāśikā and Laghusiddhāntakaumudī line is checked against the e-text and,
where one can be opened, a printed edition; where the session's network policy lets no
printed edition or catalogue page be opened, the evidence rule recorded above under the
v3.c04 review applies to the Volume 4 fact bases as well, and the source line says "text of
the GRETIL e-text". No REFERENCES key is added for the Nandikeśvarakāśikā until a citable
edition is found (plan §7.3, Q2).

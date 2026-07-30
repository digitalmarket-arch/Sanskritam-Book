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

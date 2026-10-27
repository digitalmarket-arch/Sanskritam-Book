# Sanskritam 2.0 — Roadmap

Five volumes · 29 chapters · ~144 lessons. Levels are **CEFR-informed** functional labels
(Sanskrit has no official CEFR mapping; descriptors follow [REF:cefr2020] can-do style).

Status legend: ⬜ planned · 🟨 research · 🟦 drafting · 🟧 in review · ✅ reviewed · 📗 published

---

## Volume 1 — वर्णमाला · Sounds & Script (pre-A1 → A1)

Phonetics-first: every sound with IPA and articulation, script reading AND writing from day
one, mātrās taught with their vowels (never deferred), virāma and conjuncts covered in full —
closing the largest gap of the 1.x curriculum.

| Ch | Title | Lessons | Status |
|---|---|---|---|
| 1 | प्रवेशः — Entering Sanskrit Sound | 5 | ✅ reviewed |
| 2 | स्वराः — The Vowels | 7 | ✅ reviewed |
| 3 | स्पर्शाः — The Stop Consonants | 6 | ✅ reviewed |
| 4 | अन्तःस्थाः ऊष्माणश्च — Semivowels & Sibilants | 4 | ✅ reviewed |
| 5 | संयोगः — Virāma & Conjuncts | 5 | ✅ reviewed |
| 6 | पठनम् — Reading Bootcamp | 4 | ✅ reviewed |

**Volume 1 is content-complete: 31 lessons, all reviewed.** Remaining for 📗 published:
asset production (all media currently `planned:`) and the volume PDF build (gated on
assets; see `build/README.md`).

Chapter 2 covers all vowels incl. ॠ ऌ (completeness), ऐ/औ as diphthongs, and अं/अः correctly
classified as ayogavāha. Chapter 3 gives **all five members of every varga** equal treatment.
Chapter 6 ends with the learner reading real connected words and a first (sandhi-light) śloka.

## Volume 2 — शब्दाः वाक्यानि च · Words & Sentences (A1 → A2)

| Ch | Title | Lessons | Status |
|---|---|---|---|
| 1 | अभिवादनम् — Greetings & Courtesy | 5 | ✅ reviewed |
| 2 | परिवारः जगच्च — Family & the World | 5 | ✅ reviewed |
| 3 | संख्याः कालश्च — Numbers & Time | 5 | ✅ reviewed |
| 4 | क्रियाः — First Verbs | 5 | ✅ reviewed |
| 5 | संवादः — Daily Conversation | 5 | ✅ reviewed |
| 6 | कथाः शब्दयात्राश्च — Stories & Word Journeys | 5 | 🟦 drafting |

Carries the verified 1.x vocabulary sets (purged of Hindi loans), the 10-verb bank, the graded
readers (Thirsty Crow; Lion & Mouse) with sandhi-resolved text, the first subhāṣitas, and the
Indo-European cognates unit — reframed as *shared descent*, not "English from Sanskrit".

## Volume 3 — व्याकरणम् · Core Grammar (A2 → B1)

| Ch | Title | Lessons | Status |
|---|---|---|---|
| 1 | सुबन्तप्रवेशः — Nouns & Cases I | 5 | ⬜ |
| 2 | सुबन्तविस्तारः — Nouns & Cases II | 5 | ⬜ |
| 3 | तिङन्तप्रवेशः — The Present-System Verb | 5 | ⬜ |
| 4 | सन्धिः — Sandhi in Use | 5 | ⬜ |
| 5 | सर्वनाम-अव्यय-समासाः — Pronouns, Indeclinables, Compounds | 5 | ⬜ |
| 6 | सम्पूर्णपठनम् — Connected Reading | 5 | ⬜ |

Sequencing fix vs 1.x: sandhi is taught **before** connected reading, and conjugation gets
real practice chapters before any lakāra survey. Kāraka is introduced functionally here;
its Pāṇinian theory waits for Volume 4.

## Volume 4 — पाणिनीयम् · The Pāṇinian System (B1 → B2)

| Ch | Title | Lessons | Status |
|---|---|---|---|
| 1 | माहेश्वराणि सूत्राणि — The Fourteen Sūtras | 4 | ⬜ |
| 2 | अष्टाध्यायीप्रवेशः — Inside the Aṣṭādhyāyī | 4 | ⬜ |
| 3 | धातुः तिङ्विस्तारश्च — Roots & the Full Verb | 6 | ⬜ |
| 4 | कृत्-तद्धित-समासाः — Derivation & Compounds | 5 | ⬜ |
| 5 | प्रयोगाः विभक्तिविस्तारश्च — Voices & Case in Depth | 5 | ⬜ |
| 6 | सूत्रपाठः — Reading Real Sūtras | 4 | ⬜ |

Rebuilds 1.x Chapter 11 on its verified skeleton (38/40 sūtra citations were correct) with the
known errors fixed (इको यणचि = 6.1.77; ṇatva per 8.4.1–2; liṭ = parokṣe; कृ ubhayapadī;
anubandha per क्ङिति च 1.1.5) and with production exercises throughout. Ends with the
bhū → bhavati derivation done by the learner.

## Volume 5 — साहित्यम् · Literature & Mastery (B2 → C1)

| Ch | Title | Lessons | Status |
|---|---|---|---|
| 1 | सुभाषितसङ्ग्रहः — The Subhāṣita Canon | 5 | ⬜ |
| 2 | पञ्चतन्त्रम् — Panchatantra | 5 | ⬜ |
| 3 | महाकाव्यम् उपनिषदश्च — Epics & Upaniṣads | 5 | ⬜ |
| 4 | छन्दोऽलङ्कारौ — Meter & Figures | 5 | ⬜ |
| 5 | रचना समापनं च — Composition & Capstone | 5 | ⬜ |

Ends in an integrative capstone (compose, recite, derive, translate) — replacing the 1.x
"victory lap".

---

## Production pipeline (per chapter)

```
research notes → lessons drafted → peer review A–D → assets & illustrations
   → validator green → REFERENCES/GLOSSARY/ROADMAP/CHANGELOG updated → reviewed
```

The book PDF is built per volume only when every chapter is ✅ (see `build/README.md`).

## Current status

- **2026-07-20** — Project bootstrapped: governance docs, improvement report vs the 1.x PDF.
- **2026-07-20** — **v1.c01 प्रवेशः complete and reviewed**: 5 lessons in the full 27-section
  format, peer-review passes A–D logged, validator green, JSON exports current.
- **2026-07-30** — **v1.c02 स्वराः complete and reviewed**: 7 lessons — the full 13-vowel
  inventory with every mātrā taught same-day, the honest /r̩/ lesson, the ॐ
  fact/tradition/symbol showcase, ayogavāha, and a 54-word cumulative assessment. Validator
  green on all 12 lessons; exports current.
- **2026-07-30** — **v1.c03 स्पर्शाः complete and reviewed**: 6 lessons — all 25 stops with
  every varga member treated equally (IR-042 closed), the reusable manner row with physical
  checks, the first readable verb and sentences (pause-form convention), grid-mastery
  assessment. 18 lessons total, validator green, exports current.
- **2026-07-30** — **v1.c04 अन्तःस्थाः ऊष्माणश्च complete and reviewed**: 4 lessons — the
  last 8 consonants, the ś/ṣ flagship contrast (IR-012 closed in-curriculum), the complete
  varṇamālā with the Alphabet Exam, 157 cumulative readable words incl. राम, भाषा,
  हिमालय. 22 lessons total, validator green, exports current.
- **2026-07-31** — **v1.c05 संयोगः complete and reviewed**: 5 lessons — the virāma (Law 5)
  with the first-person milestone अहम् वदामि, the conjunct mechanism (नमस्ते readable and
  writable — the Chapter 1 tracker closes), the irregular ligatures क्ष त्र ज्ञ (the last 🔊
  glue words retire), both r-forms (धर्म कर्म अर्थ come home), and the signs/digits lesson
  with the two-way Conjunct Exam and the संस्कृतम् ceremony. IR-007 closed in-curriculum.
  214 cumulative readable words; 27 lessons total, validator green, exports current.
  Research notes + chapter frame for v1.c06 (पठनम् — reading bootcamp, the volume's final
  chapter) already prepared. Asset production for Chapters 1–5 `planned:` media can run in
  parallel.
- **2026-08-02** — **v1.c06 पठनम् complete and reviewed — VOLUME 1 CONTENT-COMPLETE**:
  4 lessons — the long words with the ङ/ञ homorganic payoff (गङ्गा, पञ्च; the course's
  own name at reading speed), the first true dialogue (self-introduction frames; the
  Chapter 1 Maya arc closed), the first connected passage (अर्जुनः पठति — ending on the
  learner's own अहम् अपि संस्कृतम् पठामि), and the śloka lesson with three texts in three
  registers (Hitopadeśa pāda, Muṇḍaka 3.1.6 + the national motto, the honestly-labeled
  maṅgala benediction) plus the five-task Volume Exam. 237 cumulative readable words;
  31 lessons total, validator green, exports current.
- **2026-08-02** — **v2.c01 अभिवादनम् complete and reviewed — Volume 2 opens**: the
  volume frame (classical-vs-modern-spoken label axis) + 5 lessons — the greeting kit
  with the V1-exam interval and three-artifact ceremony, the classical wellness
  exchange, the day cycle with the both-things-true सुप्रभातम् card, the धन्यवादः
  label showcase with न-negation and the farewell pair, and the Courtesy Exam sorting
  by the keystone label table. 21 ledger-new words (258 cumulative); 36 lessons total,
  validator green, exports current.
- **2026-08-03** — **v2.c02 परिवारः जगच्च complete and reviewed**: the kinship-cognate
  flagship (Jones 1786; the no-arrow wall chart; दुहिता ~ daughter), the pointing trio,
  the world set with the पञ्चतत्त्व words/doctrine split and अग्निः's ledger homecoming
  (RV 1.1.1), च with the 1.x और correction, कुत्र, and the family-tree/scene exam with
  the direction cards. 19 ledger-new (277 cumulative); 41 lessons total, validator
  green. c03 (numbers & time) and c04 (first verbs) fact bases already pushed.
- **2026-10-20** — **v2.c03 संख्याः कालश्च complete and reviewed**: the stems एक–दश with
  the counting chant (inflection honestly deferred), THE October/November/December
  correction delivered as content with the 1.x captions quoted verbatim and corrected
  kindly, the नव nine/new split, होरा as the Greek→Sanskrit loan that completes the
  direction toolkit (arrows named by origin), the week with its honest early-centuries-CE
  history, and the numbers-time exam with the calendar task on the learner's own grid.
  Review ran as an adversarially verified workflow (56 findings confirmed and fixed; one
  grammar blocker caught in model content). 20 ledger-new (297 cumulative); 46 lessons
  total, validator green, exports current. Next: v2.c04 क्रियाः (first verbs).
- **2026-10-22** — **v2.c04 क्रियाः complete and reviewed**: 5 lessons — the 10-verb bank
  completed, the present-singular person pattern -मि/-सि/-ति named in the course's first
  grammar lesson (with असि), the doing-dialogue किम् करोषि?, the day-of-verbs passage at
  three speeds, and the verb exam with production conjugation and the learner's own
  self-narration. Review passes A–D ran as a verified workflow (70 findings fixed).
  11 ledger-new (308 cumulative); 51 lessons total, validator green, exports current
  (0.10.0). **The Volume 2 Chapters 1–4 arc is complete.** Next: v2.c05 संवादः.
- **2026-10-24** — **Deep research audit of all shipped content** (Volume 1, Volume 2
  Chapters 1–3, frames, research notes, governance docs): 1,264 verified findings, 1,068
  fixes applied, 109 claims rejected on verification. The Volume 2 ledger was corrected
  for eight double counts (exits now 258 · 277 · 297 · 308) and the counting rule written
  into STYLE_GUIDE §8. Details in research/verification-log.md and CHANGELOG 0.10.0.
- **2026-10-27** — **Website target live**: `scripts/build_site.py` renders every reviewed
  lesson into a static site (course map, 27-section lesson pages with register callouts,
  linked citations and cross-references, teacher view for §22–§27, word list, sources
  with per-lesson citation counts, glossary, search). Drafts are never published.
  `.github/workflows/pages.yml` builds it on every push and deploys to GitHub Pages from
  `main` once Pages is switched to the GitHub Actions source.

## Content preservation map (from the 1.x curriculum)

Verified-correct 1.x material and where it lands in 2.0:

| 1.x asset (PDF page) | 2.0 destination |
|---|---|
| Articulatory grid, varga system (pp.15–26) | v1 backbone (c01.l02, c03, c04) |
| ॐ = a-u-m decomposition (p.8, 21) | v1.c02 (o/au lesson), TRADITION register |
| Thematic vocab sets (pp.27–36) | v2.c01–c03 |
| 10-verb bank (p.40) | v2.c04 |
| rāma/गच्छ paradigms, vowel sandhi, samāsa (pp.37–43) | v3.c01, c03, c04, c05 |
| Graded readers (pp.64–66) | v2.c06 (sandhi-resolved), v3.c06 (original) |
| IE cognates 19/20 (pp.61–62) | v2.c06 |
| Subhāṣita set + three śānti (pp.47–51) | v2.c06 (first three), v5.c01 |
| Visarga sandhi (pp.71–73) | v3.c04 |
| 10 lakāras + forms (pp.74–75) | v4.c03 |
| Kāraka lesson + Fillmore note (pp.87–89) | v3.c02 (functional), v4.c05 (theory) |
| √भू 6-lakāra table (pp.127–128) | v4.c03 |
| tad/idam/numeral paradigms (pp.111–113, 125–127) | v3.c05, v4.c05 |
| rājan aṅga/pada/bha example (pp.97–99) | v4.c02 |
| Gerund/infinitive lesson (pp.106–108) | v4.c04 |
| Meta-rules 8.2.1/1.1.56/1.4.2 (pp.115–117) | v4.c06 |
| "Read a Real Sūtra" (pp.130–134) | v4.c06 (expanded to a chapter) |
| Composition formula (pp.130–131) | v5.c05 |
| BG 2.47 word-by-word (p.66), Bṛhad. 1.3.28 (p.67) | v5.c03 |

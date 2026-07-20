# Sanskritam 2.0 — Style Guide

This document is the **contract** for every lesson, asset, and export in this project.
Lessons may not deviate from it. When a lesson needs something this guide doesn't cover,
extend the guide first (PR touching `STYLE_GUIDE.md`), then write the lesson.

---

## 1. Scripts and languages

Every Sanskrit item appears in up to four layers, always in this order:

> **देवनागरी (IAST) "English gloss" — हिन्दी gloss**
>
> Example: **माता** (mātā) "mother" — माँ

1. **Devanagari** — Unicode, NFC-normalized (validator-enforced). Never italicized.
2. **IAST** — the only romanization used anywhere in this project. Italicized in running prose
   (*mātā*), plain inside tables and word lists.
3. **English gloss** — in double quotes.
4. **Hindi gloss** — plain Devanagari, no quotes.

The Hindi layer is omitted when the section is already written in Hindi; the English layer is
omitted when the section is already written in English and the gloss is obvious from context.

### 1.1 IAST rules (non-negotiable)

- **No schwa deletion, ever.** Sanskrit final and medial *a* is pronounced and written:
  *dharma* (never "dharm"), *amṛta* (never "Amrit"), *artha* (never "Arth").
- Long vowels: ā ī ū (never doubled letters "aa/ee/oo").
- Vocalic consonants: ṛ ṝ ḷ ḹ (never "ri" — ऋषि is *ṛṣi*, not "rishi", except in the
  loanword-note register when discussing English usage).
- Retroflexes: ṭ ṭh ḍ ḍh ṇ ṣ. Palatals: c ch j jh ñ ś. Velars: k kh g gh ṅ.
- Anusvāra = **ṃ** (saṃskṛtam); visarga = ḥ (rāmaḥ). We use IAST's ṃ, not ISO-15919's ṁ.
- No capital letters inside transliterated words except sentence-initial position and proper
  nouns in English prose (Pāṇini, Kālidāsa).
- The 1.x romanizations ("uh", "Gyan", "sha" for both श and ष) are banned; the validator
  carries a denylist.

### 1.2 Hindi register

- Standard modern Hindi (मानक हिन्दी / खड़ी बोली), warm teaching tone — a good schoolteacher,
  not a textbook committee.
- Sanskrit grammatical terminology (संज्ञा, क्रिया, विभक्ति, स्वर, व्यञ्जन) is used and glossed in
  plain Hindi at first occurrence in each lesson.
- No Hinglish, no romanized Hindi, no artificial hyper-Sanskritized Hindi.
- Hindi technical terms must match the entries in `GLOSSARY.md`.

---

## 2. Pronunciation: the IPA contract

IPA appears in `/slashes/` for phonemes and `[brackets]` for phonetic detail. The values below
are the **only** values lessons may print. Regional variants are discussed *as variants*, never
substituted as targets.

### 2.1 Vowels (स्वराः)

| Deva | IAST | IPA | Notes |
|---|---|---|---|
| अ | a | **/ɐ/** | Near-open central. NOT English "cup"-final schwa; the traditional saṃvṛta short *a*. |
| आ | ā | /ɑː/ | Open back, long. |
| इ | i | /i/ | |
| ई | ī | /iː/ | |
| उ | u | /u/ | |
| ऊ | ū | /uː/ | |
| ऋ | ṛ | **/r̩/** | Syllabic r. Modern [ɾɪ] ("ri") is a regional habit, noted but not the target. |
| ॠ | ṝ | /r̩ː/ | Rare; taught for completeness. |
| ऌ | ḷ | /l̩/ | Occurs in √कॢप् forms; taught for completeness. |
| ए | e | **/eː/** | ALWAYS long, pure monophthong — never English "hey" [eɪ]. |
| ऐ | ai | /ɐi̯/ | Diphthong; onset matches अ = /ɐ/. |
| ओ | o | **/oː/** | ALWAYS long, pure monophthong — never English "go" [oʊ]. |
| औ | au | /ɐu̯/ | Diphthong. |

**Ayogavāha** (dependent sounds — categorically NOT vowels, NOT consonants):

| Deva | IAST | IPA | Notes |
|---|---|---|---|
| अं | ṃ | homorganic nasal / nasalization | Before a stop: nasal at that stop's place ([ŋ] in अंक, [n̪] in अंत). Elsewhere: [◌̃] or [m]. Transcribe contextually. |
| अः | ḥ | /h/ (voiceless) | Recitation echo-vowel (रामः → [rɑːmɐhɐ]) is a TRADITION-register practice, noted as such. |

### 2.2 Consonants (व्यञ्जनानि)

Stops by varga — rows: voiceless, voiceless aspirated, voiced, voiced breathy, nasal.
"Aspirated" voiced stops are **breathy-voiced** /◌ʱ/.

| Varga | Place | IPA row |
|---|---|---|
| क-वर्ग | velar (कण्ठ्य) | /k kʰ g gʱ ŋ/ |
| च-वर्ग | palatal (तालव्य) | **/t͡ɕ t͡ɕʰ d͡ʑ d͡ʑʱ ɲ/** — affricates, matching pan-Indic pronunciation and our audio. (Pāṇinian phonetics describes a palatal stop [c]; this is noted once, in v1.c02, as HISTORY.) |
| ट-वर्ग | retroflex (मूर्धन्य) | /ʈ ʈʰ ɖ ɖʱ ɳ/ — also found in Swedish and Norwegian; NOT "unique to Indian languages". |
| त-वर्ग | dental (दन्त्य) | /t̪ t̪ʰ d̪ d̪ʱ n̪/ — tongue on the teeth, explicitly contrasted with English alveolar t/d. |
| प-वर्ग | labial (ओष्ठ्य) | /p pʰ b bʱ m/ |

Semivowels (अन्तःस्थाः): य /j/ · र **/ɾ/** (alveolar tap; trill [r] acceptable in recitation) ·
ल /l/ · व **/ʋ/** (labiodental approximant — between English v and w).

Sibilants + h (ऊष्माणः): श **/ɕ/** · ष /ʂ/ · स /s/ · ह **/ɦ/** (voiced glottal fricative —
ऊष्मन् by tradition, but **not a sibilant**).

श vs ष in romanization: ś vs ṣ — never both "sha".

### 2.3 Rules for lessons

- Every new sound lesson prints: IPA, articulator description, one English anchor **with its
  imprecision stated** ("closest English sound is X, but differs in Y"), one Hindi anchor.
- Never present an English diphthong as the value of ए or ओ.
- Length (mātrā) is described as duration: dīrgha ≈ 2× hrasva, and demonstrated with minimal
  pairs where they exist.

---

## 3. Devanagari typography

- Unicode NFC normalization mandatory (`scripts/validate.py` enforces).
- No ZWJ/ZWNJ except when deliberately displaying an un-ligated form (e.g. teaching क्‌ + ष vs क्ष).
- Fonts: Noto Serif Devanagari (print body), Noto Sans Devanagari (web/headings). See `build/fonts.md`.
- Punctuation: daṇḍa । and double daṇḍa ॥ inside Sanskrit text and verses; Western punctuation
  in English/Hindi prose.
- Digits: Latin digits in prose and numbering; Devanagari digits ०–९ appear as *content* when taught.
- Never retype long Devanagari passages from memory — copy from the verified vocabulary tables
  or GLOSSARY, then adjust. (Defense against silent mātrā typos.)

---

## 4. The four-register policy (fact / history / tradition / symbolism)

The core epistemic rule of Sanskritam 2.0: **grammatical facts, historical evidence, traditional
interpretations, and symbolic associations are separated visibly and machine-readably.**

Format — labeled blockquote callouts, exact syntax:

```markdown
> **[FACT · तथ्यम्]** अ /ɐ/ is a near-open central vowel articulated with the tongue at rest.
> [REF:whitney1889 §19]

> **[HISTORY · इतिहासः]** The oldest Sanskrit text, the Ṛgveda, was composed c. 1500–1200 BCE
> on the scholarly consensus dating. [REF:jamison2014 p.5]

> **[TRADITION · परम्परा]** The Pāṇinīya Śikṣā organizes sounds by articulation point — "from
> the chest to the head" — a classification modern phonetics confirms.

> **[SYMBOL · प्रतीकम्]** In the Bhagavad Gītā (10.33) Kṛṣṇa says "of syllables I am the a"
> (akṣarāṇām akāro 'smi) — a statement of अ's primacy in the tradition, not a phonological claim.
```

Rules:

1. Deity associations, cosmic meanings, sacredness, energy claims → **SYMBOL only**. They may
   be beautiful; they are never facts about phonology or grammar.
2. Every **HISTORY** block carries at least one `[REF:key §loc]` citation resolving to
   `REFERENCES.md`. Dates use ranges and "scholarly consensus/estimate" phrasing.
3. **TRADITION** blocks name their source tradition or text ("In the Pāṇinīya Śikṣā…",
   "Traditional recitation practice…").
4. **Quizzes and exercises assess FACT content only** — or TRADITION content when the question
   itself is framed "According to X…". SYMBOL content is never assessed.
5. Banned claims (may not appear even inside callouts except as *documented errors of 1.x*):
   see `EDITORIAL_GUIDELINES.md` §Banned claims.

---

## 5. Quizzes and answer keys

- Section 19 (Quiz) contains **questions only**. The key sits at the end of the section inside:

  ```markdown
  <details><summary>उत्तराणि · Answer Key</summary>

  1. …
  </details>
  ```

- Inline answer marking ("✓ CORRECT" next to an option) is banned — validator-enforced.
  (The 1.x book printed the answer inside every question, making self-testing impossible.)
- Every question tests something taught in this lesson or in a `review_of` lesson.
- Distractors must be plausible errors (real confusions from §12 Common Mistakes), not filler.
- Exercises (section 18) include **production tasks** in every lesson: writing, speaking,
  dictation, or translation — never recognition-only.

---

## 6. Markdown structure

- Lessons: YAML front matter (schema: `json/frontmatter.schema.json`) + exactly the 27 canonical
  H2 sections, in order, exact headings:

  `## 1. Hook` `## 2. Learning Objective` `## 3. Previous Lesson Review` `## 4. Historical Context`
  `## 5. Scientific Explanation` `## 6. Sanskrit Explanation` `## 7. Hindi Explanation`
  `## 8. English Explanation` `## 9. Pronunciation` `## 10. IPA` `## 11. Mouth Position`
  `## 12. Common Mistakes` `## 13. Examples` `## 14. Vocabulary` `## 15. Grammar`
  `## 16. Conversation` `## 17. Story` `## 18. Exercises` `## 19. Quiz` `## 20. Revision`
  `## 21. Homework` `## 22. Teacher Notes` `## 23. AI Image Prompt` `## 24. AI Video Prompt`
  `## 25. Voice-over Script` `## 26. Reel Script` `## 27. Metadata`

- Bilingual subtitles go in the first body line of a section, never in the heading (anchors must
  stay ASCII-stable for the exporter).
- H3 subheadings are free-form within a section.
- Vocabulary (section 14) is a table with fixed columns:
  `| देवनागरी | IAST | IPA | English | हिन्दी | Notes |`
- File names: `lesson-NN-<en-kebab-slug>.md`; ids `v1.c01.l03` ↔ path (validator-enforced).
- Asset names: `assets/<type>/volume-N/v1c01l03-<slug>.<ext>`.
- Citations: `[REF:key §loc]` e.g. `[REF:whitney1889 §19]`, `[REF:apte1890 s.v. मातृ]` —
  `key` must exist as an anchor in `REFERENCES.md`.

---

## 7. Voice and tone

- English: clear, direct, curious; second person; no mystification ("Sanskrit is hard/magical"),
  no marketing superlatives ("most scientific language ever").
- Claims of scale carry numbers with sources or don't appear.
- Enthusiasm comes from *showing* the system working, not from adjectives.
- Sanskrit is treated as a language people learn and use — with an extraordinary intellectual
  tradition documented in its proper registers.

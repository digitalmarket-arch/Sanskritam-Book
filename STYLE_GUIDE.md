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
| अ | a | **/ɐ/** | Near-open central. NOT a reduced schwa; closest English anchor is the vowel of "cup" (imprecision stated per §2.3); the traditional saṃvṛta short *a*. |
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
| च-वर्ग | palatal (तालव्य) | **/t͡ɕ t͡ɕʰ d͡ʑ d͡ʑʱ ɲ/** — affricates, matching pan-Indic pronunciation and our audio. (Pāṇinian phonetics describes a palatal stop [c]; this is noted once, in v1.c03.l02, as HISTORY.) |
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
- Fonts: Noto Serif Devanagari (print body), Noto Sans Devanagari (web/headings). See
  `build/fonts.md`.
- Punctuation: daṇḍa । and double daṇḍa ॥ inside Sanskrit text and verses; Western punctuation
  in English/Hindi prose.
- Digits: Latin digits in prose and numbering; Devanagari digits ०–९ appear as *content*
  when taught.
- Never retype long Devanagari passages from memory — copy from the verified vocabulary tables
  or GLOSSARY, then adjust. (Defense against silent mātrā typos.)

### 3.1 Pause form and joined text

Sanskrit can be printed word by word, each word in the shape it has before a pause (the
pause form, Hindi विराम-रूप), or joined, with sandhi applied where words meet. The course
uses both, in a fixed order.

- **Through v3.c04.l03 all course-written Sanskrit is in pause form.** Joined shapes appear
  only as whole words the learner already owns (नमस्ते), inside quoted verses and sayings,
  and as labelled displays. v3.c04.l01–l03 show seams one kind at a time.
- **From v3.c04.l04 on, course-written text is printed joined**, with full external sandhi.
  Words are written together wherever the seam fuses into one akṣara or a conjunct, or the
  first word ends in a consonant (जलमस्ति, तन्मे, जगच्च, गुरुर्वदति). Words are separated by
  a space where the first word, after sandhi, ends in a vowel, anusvāra or visarga (स
  पिपासितोऽस्ति, सत्यं वद, परमो धर्मः, मूषक आगच्छति).
- **No sandhi across** a daṇḍa, a question mark or an exclamation mark, a comma, the dash
  of a speech frame (उवाच — "…"), or the closing quotation mark before इति
  ("…करिष्यामि" इति); beyond इति sandhi resumes ("…लघुरसि" इत्यवदत्). The word before any
  of these stops stands in its pause form (अहं तव मित्रम्, कपोतानां नृपः).
- **Below every joined line** from v3.c04.l04 on: the pause form (पदपाठः), then IAST and
  the gloss.
- **A compound is one word in the pause form.** Where a line shows a compound's inner seam
  (v3.c04.l01–l03), its members are printed hyphenated, never as free words: सूर्य-उदये →
  सूर्योदये.
- **Authentic text** keeps the word division of the e-text that REFERENCES names. Evident
  typos of the e-text are corrected, and each correction is listed in Teacher Notes, with
  every departure from full sandhi noted beside it (महान् जम्बूपादपः for महाञ्जम्बू°).
  Editions vary in how they divide words; a lesson says so where it matters.

---

## 4. The four-register policy (fact / history / tradition / symbolism)

The core epistemic rule of Sanskritam 2.0: **grammatical facts, historical evidence, traditional
interpretations, and symbolic associations are separated visibly and machine-readably.**

Format — labeled blockquote callouts, exact syntax:

```markdown
> **[FACT · तथ्यम्]** अ /ɐ/ is a near-open central vowel articulated with the tongue at rest.
> [REF:whitney1889 §21]

> **[HISTORY · इतिहासः]** The oldest Sanskrit text, the Ṛgveda, was composed c. 1500–1200 BCE
> on the scholarly consensus dating. [REF:jamison2014 p.5]

> **[TRADITION · परम्परा]** The Pāṇinīya Śikṣā organizes speech sounds by their place of
> articulation (sthāna); its verse 13 lists eight such places — chest, throat, head,
> tongue-root, teeth, nose, lips, and palate. [REF:paniniyashiksha 13]

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
   itself is framed "According to X…", or HISTORY content when the claim is taught in a cited
   HISTORY callout in the same lesson and the item preserves its hedged dating. SYMBOL content
   is never assessed.
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

---

## 8. The word ledger

The course keeps a cumulative count of **readable words** — the "ledger" stated in every
vocabulary lesson's §14 (entry → exit) and in each chapter's can-do list. One counting rule,
applied everywhere:

1. **Ledger-new row:** a word the learner can read for the first time as a headword. It
   increments the ledger by one.
2. **Review row:** a word identical to an earlier §14 headword. It is drilled again but never
   re-enters the ledger.
3. **Upgrade row:** a noun or adjective already in the ledger that returns in sentence dress
   (-ः / -म्) or in its neuter form (दिन → दिनम्, शुभ → शुभम्, मास → मासः). It is drilled
   but never increments the ledger.
4. **Verbs:** from v2.c04 on, a verb enters the ledger once, as its 3sg citation form
   (गच्छति). Forms the learner builds with the taught -मि/-सि/-ति pattern (गच्छामि,
   गच्छसि) never re-enter. A form taught as a whole-word chunk does count as its own
   readable word: an imperative such as पश्य or वदतु, or a stem-building form such as
   असि. Volume 1, which predates the pattern, counted वदति and वदामि separately.
5. **Display-only items** (seam previews, variant spellings, glossed plural titles) never
   count.

Front-matter `vocabulary_count` = the number of §14 headword rows the lesson **drills**:
ledger-new rows plus upgrade rows (Volume 1's audio-only ear-words included). Review rows
and display-only items are excluded; the ledger-new figure is stated in §14's opening line.

**From Volume 3 on the ledger counts lemmas.** Rules 6–15 extend rules 1–5 without changing
them. The guiding test: a word counts once, when the learner first owns its lemma as a
headword; nothing a taught pattern builds ever counts again.

6. **Nominal lemma.** A noun counts once, as its nominative singular with gender (मृगः m.,
   तीरम् n., सभा f.); an adjective once, in the masculine nominative singular with its
   three-gender citation (मधुरः -रा -रम्); a pronoun once, as its masculine nominative
   singular (अयम्, यः) or its only form (स्वयम्); a dual-only word as its masculine
   nominative dual (उभौ).
7. **Paradigm forms never count**, regular or suppletive. Every cell of a taught table
   belongs to its lemma: इयम्, इमम्, अनेन to अयम्; मया, अस्माकम् to अहम्; पितरौ to पिता; कम्,
   केन, कस्मै to the owned कः; त्रयः, तिस्रः to the owned numeral. Cells counted in Volumes
   1–2 (मम, तव, मह्यम्, तुभ्यम्, तस्य, एतत्) stay counted: the ledger never decreases.
8. **Verb lemma** (rule 4, unchanged). One entry per verb, as its 3sg present (गच्छति; a
   middle verb as its 3sg middle, लभते). Every cell of every taught lakāra belongs to the
   lemma (अगच्छत्, गच्छतु, गच्छेत्, गच्छन्ति). A form taught whole because its system or its
   stem formation is taught later counts once as its own word: the perfects उवाच and आह,
   and the imperfect अब्रवीत् of class-2 ब्रू. Chunks counted earlier (वदतु, ददातु, अस्तु,
   मुञ्च, पश्य, क्षमस्व, मिलामः) stay counted and are not re-counted when they gain a table.
   A lemma first headworded after its chunk counts once (ददाति beside ददातु). Verbs have
   no upgrade rows.
9. **Prefixed verbs** count as their own lemma when headworded (आगच्छति, निवसति,
   प्रविशति). The upasargas themselves are grammar items, not ledger words. A prefixed
   form met only in a read text is not ledgered.
10. **Compounds** count only when headworded because they are lexicalised (नीलकण्ठः,
    पादपः), never when transparent and built from owned members. A member first met
    inside a compound counts when it first stands as its own headword (आलयः from
    विद्यालयः).
11. **Sandhi spellings never count** (नास्ति, कोऽपि). A word first seen joined counts when
    it is first a pause-form headword. नमस्ते, counted in v1.c01.l01 before its seam was
    taught, stays counted.
12. **Proper names** count only when headworded for the learner's own sentences (the
    Volume 2 precedent अर्जुनः). Names met only in a read text are gloss-line items
    (rule 5).
13. **Recognition-only forms are display** (rule 5) unless headworded: absolutives,
    participles, passives in -यते, and perfect or future forms other than the chunk
    headwords.
14. **Stems outside the taught classes** count once when headworded by their nominative
    (दिक्, धीमान्, सुहृत्, पक्षी, सखा); their other cells never count.
15. **Lexicalised indefinites and pairs.** The indefinites in -चित् and the pair इतस्ततः
    count once when headworded (कश्चित्, कदाचित्, इतस्ततः). Every other -चित् or -अपि form
    and every unheadworded cell of the correlative grid (कोऽपि, किञ्चित्, सर्वत्र, सर्वदा)
    is pattern-built and never counts.

In Volume 3 each grammar lesson's §14 adds one line, "cells drilled: n", and its §15 ends
with the lesson's **paradigm ledger**: ✓ productive (the learner produces every cell),
◐ recognition (parse when met; produce only the listed cells), ○ labelled preview or
display.

**From Volume 4 on the ledger also covers derivation.** Rules 16–23 extend rules 1–15
without changing them, and the guiding test is unchanged: a word counts once, when the
learner first owns its lemma as a headword; nothing a taught pattern builds ever counts
again. Volume 4's taught patterns include whole derivational processes, so rules 16–21 say
what they build, and rules 22–23 say how headwords are chosen and how ordinals count.

16. **Roots are grammar items, not words.** A root (धातुः: √भू, √गम्, डुकृञ्) as cited in a
    derivation or a Dhātupāṭha entry never counts; the verb counts once, as its 3sg present
    (rule 8). A root met only inside a sūtra's example (तुद्, नुद्, लू) is display. √भू adds
    0; भवति has counted since v1.c04.l01.
17. **Every form a taught formation builds from an owned verb belongs to that verb:**
    perfect, future, aorist, benedictive and conditional cells; passive and causative
    cells; the causative stem's whole present system (गमयति, पाठयति, कारयति add 0).
    **Exception:** a causative whose meaning is not "cause to X" is headworded as its own
    lemma and counts once. Headworded in Volume 4: दर्शयति "shows", बोधयति "teaches,
    informs", स्थापयति "places" (MW and Apte give them their own senses), आकर्णयति
    "listens", a denominative (Whitney §1053 ff.) of the owned कर्णः, and व्यापादयति "kills"
    (वि + आ + पद् "cause to perish": MW gives it its own sense). वेदयति "informs" and अर्पयति
    "hands over" would count under the same clause if headworded; neither is.
18. **Kṛt products of owned verbs are pattern-built** and never count: participles,
    absolutives, infinitives, gerundives, and agent nouns in -तृ when used as verb-forms
    (पठितः, गत्वा, कर्तुम्, कर्तव्यम् add 0). A kṛt noun or adjective with a lexicalised sense
    counts once when headworded (प्रसन्नः "gracious"). Already-counted kṛt words (कृत, गत,
    मृत, मुक्त, कर्ता, दाता, नयनम्, ज्ञानम् …) stay counted: the ledger never decreases.
19. **Taddhita products are pattern-built when transparent** (base owned, suffix taught):
    एकता, धनवान्, बलवत्तरः, पुत्रवत् add 0. A lexicalised taddhita counts once when
    headworded (rule 10's logic). Owned taddhitas (लौकिक, ममता, एकता, सुखी, पक्षी, श्रीमान्,
    धीमान्) stay counted; लौकिक, re-derived in v4.c04.l03, adds 0.
20. **Technical vocabulary.** A grammatical term counts once when headworded as a noun the
    learner uses in Sanskrit sentences (§6 Sanskrit Explanation): सूत्रम्, प्रत्ययः, धातुः,
    आदेशः, लोपः. Labels never count: pratyāhāras (अच्, हल्), affix names with their markers
    (शप्, तिप्, क्त, ल्यप्), lakāra names (लट्, लिट्) and saṃjñā letters (टि, घु); most were
    already display names in Volume 3 (लट्, लङ्). प्रत्याहारः counts; अच् never does.
21. **Sūtra-internal and commentary forms never count** (अचि, इकः, भिसः, वेति,
    ग्रामादागच्छति as an example). A word first met in a sūtra or the Kāśikā counts when it is
    first headworded (गौः in v4.c06.l01, from upādhyāyāya gāṃ dadāti).
22. **How a headword is chosen.** A word is headworded because the lesson's derivation or
    reading needs it, or because it ranks among the commonest lemmas of the DCS Hitopadeśa
    not yet owned (`research/evidence/vol4-plan/synth-work/hitlem.txt`; e.g. स्वामिन् 68,
    भय 43, आलोचय् 25, स्त्री 24, कोप 22, भृत्य 22, दैव 21, कारण 21, उत्था 21, मूर्ख 20). It is
    **never** chosen because it occurs in an exam's unseen passage; where a word chosen for
    a lesson or a prepared text also occurs there, the gloss ratio is reported both ways.
    शृगालः, with 20 tokens, is not headworded, because the Volume 4 exam's passage X-b uses
    it: it stays glossed.
23. **Ordinals add 0.** The ordinals प्रथमः … दशमः are taddhita products of owned cardinals
    (5.2.48 ff.; the irregular प्रथम, द्वितीय, तृतीय, तुरीय are given as listed forms) and
    are pattern-built (rule 19); the case names प्रथमा … सप्तमी, display in Volume 3, are
    their feminines and add 0 too (प्रथमः, पञ्चमः add 0). A lexicalised kṛt adjective in -य
    or -त counts once when headworded (rule 18): शक्यम् "possible", वृद्धः "old".

Rules 4, 8 and 13 are read with rule 17. The chunk मा भैषीः, an aorist taught whole because
the aorist is ◐, counts once, as उवाच did in Volume 3; its system is never productive in
Volume 4, so it is never re-counted. Upgrade rows continue (`vocabulary_count` only): गणः
in v4.c03.l02 (V1 गण) and गुणः in v4.c02.l02 (V1 गुण). In Volume 4 each teaching lesson's
§14 adds a third line beside "cells drilled: n": **"tools added: n"** — the new Q, B and D
sūtras the lesson first uses (a sūtra owned from Volume 3 is not counted).

Volume 1's published counts stand as printed. They predate rule 3: v1.c02.l06 counts मतिः
beside l01's मति as its "dictionary coat". Canonical chapter exits: Volume 1 — 12 · 54 · 114
· 157 · 214 · 237; Volume 2 — 258 · 277 · 297 · 308 · 328 · 360 (the first four corrected at
the 2026-10 deep audit, which removed eight double counts); Volume 3, as planned in
`research/notes/vol3-plan.md` §3 — 387 · 411 · 439 · 460 · 488 · 508 (387, 411, 439, 460 and 488 reached, at
the reviews of v3.c01, v3.c02, v3.c03, v3.c04 and v3.c05; 508 is a planned figure until its
chapter ships); Volume 4, as planned in `research/notes/vol4-plan.md` §3 — 521 · 537 · 565 ·
591 · 617 · 627 (119 new headwords, 508 → 627; planned figures until their chapters ship).

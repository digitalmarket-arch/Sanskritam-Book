# Sanskritam 2.0 — Editorial Guidelines

How lessons get written, reviewed, and accepted. The formatting contract lives in
`STYLE_GUIDE.md`; this document covers content and process.

---

## 1. The 27-section contract

Every lesson contains all 27 sections, in order (headings in STYLE_GUIDE §6). A section is
never deleted; content **adapts** to the lesson type. Soft budgets keep lessons at 400–700
lines total.

| # | Section | Purpose | Budget |
|---|---|---|---|
| 1 | Hook | 3–6 lines that make the learner *want* the next 40 minutes. A surprising fact, a puzzle, a promise — never "In this lesson we will…". | short |
| 2 | Learning Objective | 3–5 measurable can-do statements (en + hi), copied from front matter `objectives`. Each one is actually tested in §18/§19. | short |
| 3 | Previous Lesson Review | Retrieval practice on `review_of` lessons: 3–5 quick recall prompts *before* new content (testing effect). Lesson 1 of the course explains how reviews will work instead. | short |
| 4 | Historical Context | Where today's topic sits in the tradition. HISTORY register rules apply: ranges, citations. | medium |
| 5 | Scientific Explanation | The modern-linguistics account (articulatory phonetics, typology, SLA rationale). FACT register. | medium |
| 6 | Sanskrit Explanation | The topic explained *in Sanskrit itself* — graded to the learner's level; in Volume 1 this is a single simple line plus its gloss, growing through the volumes. Traditional terminology (संज्ञा) introduced here. | short–medium |
| 7 | Hindi Explanation | Full teaching explanation in Hindi. Not a translation of §8 — written natively. | medium |
| 8 | English Explanation | Full teaching explanation in English. The workhorse section. | long |
| 9 | Pronunciation | Practical guidance: anchors (with stated imprecision), drills, recitation notes. | medium |
| 10 | IPA | The formal values from the STYLE_GUIDE table, with narrow-transcription notes where useful. | short |
| 11 | Mouth Position | Articulator placement, what to feel, mirror checks; references the diagram asset. | short–medium |
| 12 | Common Mistakes | Real, specific errors — by English speakers AND by Hindi speakers (schwa deletion, ऋ="ri" …), each with a fix. Feeds quiz distractors. | medium |
| 13 | Examples | Worked examples of the lesson content in real words/sentences, all four layers (Deva/IAST/gloss/hi). | medium |
| 14 | Vocabulary | The fixed-column table (STYLE_GUIDE §6). Only words readable with graphemes taught so far, or marked 🔊 audio-only. | medium |
| 15 | Grammar | The grammatical point of the lesson (in Volume 1 often a *script* rule, labeled as such). Pāṇinian sūtras cited only when they earn their place. | medium |
| 16 | Conversation | A micro-dialogue usable at current level, with audio asset reference. | short |
| 17 | Story | Narrative element: cultural story (register-labeled), micro-fiction using lesson vocabulary, or the continuing course storyline. | medium |
| 18 | Exercises | 4–8 exercises, **at least two productive** (write, say, record, dictate, translate). Recognition-only lessons are rejected in review. | long |
| 19 | Quiz | 5–10 scored questions, FACT-register content only, key separated in `<details>`. | medium |
| 20 | Revision | One-screen summary box: what to remember, spaced-repetition pointers (what to review in 1 day / 1 week). | short |
| 21 | Homework | Concrete take-home with time estimate; includes one real-world task (find the letter on a sign, teach it to someone). | short |
| 22 | Teacher Notes | Classroom delivery: timing plan, board work, group activities, differentiation, what students find hard. | medium |
| 23 | AI Image Prompt | Production-ready prompts for this lesson's `planned:` images. Format per `automation/prompts/image-gen.md`. | short |
| 24 | AI Video Prompt | Scene list + prompts for the lesson video. | short |
| 25 | Voice-over Script | Timed narration (mm:ss), Sanskrit terms with IPA cues. | medium |
| 26 | Reel Script | 30–60 s short-form: hook line / demo / payoff / CTA. | short |
| 27 | Metadata | Machine-notes: asset manifest recap, related lessons, export flags. | short |

### Instantiation by lesson type

`lesson_type` in front matter selects the guidance profile. The two poles:

- **orientation** (e.g. v1.c01.l01): §9–§11 cover the course's own key terms (संस्कृतम्, नमस्ते);
  §15 previews what "grammar" will mean; §3 explains the review system.
- **sound** (e.g. v1.c01.l03): §5 = articulatory phonetics of the target sound; §15 = the
  relevant script rule; §14 = words using only taught graphemes.

Other types (vocabulary, grammar, conversation, reading, review, capstone) interpolate
naturally; when in doubt, ask "what would a great teacher put here for *this* lesson?" —
never leave a section as boilerplate.

### The spiral principle

Concepts get a **shallow, honest preview** when first useful and a **deep treatment** at their
proper place — and the lesson says which is happening ("full treatment in Chapter 3").
Example: helper consonants क म त ल appear in Chapter 1 as glyph+sound only, so vowels and
mātrās can be practiced in real words; the varga system treats them fully in Chapter 3.
Every deep treatment lists its earlier previews in `review_of`.

---

## 2. Sourcing rules

1. Every HISTORY claim cites a `REFERENCES.md` entry. No citation → soften to TRADITION with
   attribution, or delete.
2. Grammatical claims must be checkable against a standard reference (Whitney, Macdonell,
   Aṣṭādhyāyī + Siddhānta-Kaumudī for Pāṇinian content). Sūtra numbers are verified against
   the Aṣṭādhyāyī text itself, never from memory.
3. Verse quotations carry text + locus (BG 10.33; Bṛhadāraṇyaka 1.3.28). No locus → no quote.
4. Etymological claims distinguish **cognate** (shared PIE ancestor) from **borrowing**
   (loanword) explicitly. "English X comes from Sanskrit Y" is only valid for actual loans
   (yoga, karma, avatar…).
5. All verification work is logged in `research/verification-log.md`
   (claim → source → verdict → where used).

## 3. Banned claims

These appeared in Sanskritam 1.x or circulate widely; they may appear **only** as documented
errors (e.g. in the improvement report), never as course content:

- "Sanskrit / Pāṇini's grammar is 5,000 years old" (Ṛgveda ≈ 1500–1200 BCE; Pāṇini ≈ 4th c. BCE)
- "Sanskrit is the mother of all languages" (it is a sibling within Indo-European, ancestor of
  the modern Indo-Aryan languages)
- The Einstein quote praising Pāṇinian grammar (apocryphal — no reliable source)
- "October/November/December come from aṣṭa/nava/daśa" (Latin cognates, not derivations)
- "Chomsky's 1957 generative grammar was inspired by Pāṇini" (retrospective acknowledgment ≠
  inspiration; state the parallel carefully if at all)
- "Retroflex sounds are unique to Indian languages"
- "NASA declared Sanskrit the best language for computers" (urban legend)
- Deity/element identifications of letters stated as properties of the sounds
- Unsourced percentages ("90% of literature is anuṣṭubh")

## 4. Review workflow

Lesson lifecycle: `draft → in_review → reviewed → published`.

Four passes gate `in_review → reviewed`; findings and resolutions are logged in
`research/verification-log.md`.

- **Pass A — Script & phonetics.** Mechanically re-transliterate every Devanagari token
  (`scripts/translit.py`) and diff against the printed IAST. Check every IPA string
  cell-by-cell against STYLE_GUIDE §2. Verify stroke-order text matches the glyph.
- **Pass B — Hindi.** Read all Hindi content standalone (without the English). Check gender,
  agreement, natural register, terminology consistency with GLOSSARY.
- **Pass C — Factual.** Trace every HISTORY claim to its reference; locate every quoted verse;
  audit registers (no symbolic content outside SYMBOL; nothing from §3 above); check quiz
  questions assess FACT only.
- **Pass D — Contract.** `scripts/validate.py` clean; every objective actually assessed;
  §3/§20 genuinely spiral `review_of` lessons; production exercises present; budgets respected.

Passes are **adversarial by construction**: the reviewer re-derives (recomputes the
transliteration, re-reads the source) rather than confirming what's written.

## 5. Quality bar

A lesson ships when a competent teacher could deliver it tomorrow with zero additional prep,
a self-learner could complete it alone, a video producer could shoot it from §23–26 alone,
and a developer could render it from its JSON alone. If any of the four would need to ask a
question, the lesson isn't done.

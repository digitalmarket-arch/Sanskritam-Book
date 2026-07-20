# Peer-review checklist (passes A–D)

Consumes: a whole lesson file. Executes EDITORIAL_GUIDELINES §4. Log every finding in
`research/verification-log.md` (§Review-pass findings) with resolution.

## Pass A — Script & phonetics

- [ ] Run `python3 scripts/translit.py` mentally/actually over EVERY Devanagari token; diff
      against the printed IAST (the validator automates the parenthesized pairs; check the
      rest by hand — tables, headings, dialogue lines)
- [ ] Every IPA string checked cell-by-cell against STYLE_GUIDE §2 (no invented values)
- [ ] Stroke-order descriptions match the actual glyph
- [ ] Vowel length marked everywhere in IAST (ā ī ū ṛ)
- [ ] No Hindi-style romanization anywhere

## Pass B — Hindi

- [ ] Read all Hindi content WITHOUT the English alongside — does it stand alone?
- [ ] Gender/number agreement correct throughout
- [ ] Register: warm standard Hindi, no calque stiffness, no Hinglish
- [ ] Technical terms match GLOSSARY.md exactly
- [ ] §7 is a native explanation, not a translation of §8

## Pass C — Factual

- [ ] Every HISTORY callout has a [REF:] that resolves and actually supports the claim
- [ ] Every quoted verse located (text + chapter.verse checked)
- [ ] No banned claims (EDITORIAL_GUIDELINES §3)
- [ ] Register audit: nothing symbolic outside SYMBOL; TRADITION attributed; FACT checkable
- [ ] Quiz assesses FACT only (or explicitly framed TRADITION)
- [ ] All new claims added to research/verification-log.md

## Pass D — Contract

- [ ] `python3 scripts/validate.py <file>` clean
- [ ] All 27 sections present, exact headings, right order
- [ ] Every front-matter objective is actually exercised (§18) AND assessed (§19)
- [ ] §3 and §20 genuinely spiral the `review_of` lessons (specific prompts, not vague)
- [ ] ≥2 production exercises in §18
- [ ] Answer key separated; distractors trace to §12 mistakes
- [ ] Length within budget (400–700 lines); no boilerplate filler sections

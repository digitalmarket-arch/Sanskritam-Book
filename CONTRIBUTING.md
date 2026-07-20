# Contributing to Sanskritam 2.0

## Ground rules

1. **Markdown is the source of truth.** Never edit exported JSON, generated PDFs, or rendered
   outputs — fix the lesson and regenerate.
2. **The style guide is binding.** Read `STYLE_GUIDE.md` (especially the IPA table and the
   four-register policy) and `EDITORIAL_GUIDELINES.md` before writing a word.
3. **No uncited history, no unverified sūtra numbers, no banned claims**
   (EDITORIAL_GUIDELINES §3).
4. **Every lesson ships complete**: all 27 sections, production exercises included, answer key
   separated, front matter schema-valid.

## Workflow for a new chapter

1. Write `research/notes/<volume>-<chapter>-<topic>.md` first — verified facts with sources.
2. Draft lessons from `templates/lesson-template.md` (or `scripts/new_lesson.py`).
3. Run `python3 scripts/validate.py curriculum/...` until green.
4. Run the four review passes (EDITORIAL_GUIDELINES §4); log findings in
   `research/verification-log.md`.
5. Set lesson `status: reviewed`, then update REFERENCES, GLOSSARY, ROADMAP, CHANGELOG in the
   same PR (the post-chapter loop).

## Commit conventions

`<area>: <imperative summary>` where area ∈ scaffold, docs, analysis, research, content,
review, machine, chore. One chapter (or one governance concern) per PR.

## Review expectations

Reviews are adversarial in the friendly sense: reviewers re-derive rather than approve on
plausibility — re-transliterate the Devanagari, re-check IPA cells, re-locate the verses.
"Looks right" is not a review.

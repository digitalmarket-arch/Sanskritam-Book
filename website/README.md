# Website target

Content model for the Sanskritam 2.0 website. The website does not hold content of its own:
it renders the JSON exported from the curriculum (`json/volume-N/<id>.json` + `json/index.json`).

## Mapping

| Website surface | Source |
|---|---|
| Course catalog / progress map | `json/index.json` (lesson graph, prerequisites, status) |
| Lesson page | `sections[]` 1–20 of the lesson JSON (Hook … Revision) |
| Teacher view toggle | section 22 (Teacher Notes) |
| Interactive quiz | `quiz.questions[]`, keys checked server-side from `quiz.answer_key[]` |
| Pronunciation widget | front matter `media.audio` + section 9–11 content |
| Culture sidebars | `registers[]` entries of type `TRADITION` / `SYMBOL`, rendered in visually distinct callouts |

## Rules

- The site must preserve the four-register distinction visually (FACT / HISTORY / TRADITION / SYMBOL).
- Answer keys are never shipped in the page payload for graded quizzes.
- Devanagari rendering: Noto Sans Devanagari, `lang="sa"` markup for correct shaping.

Site implementation (framework, hosting) is intentionally out of scope until Volume 1 content is mature.

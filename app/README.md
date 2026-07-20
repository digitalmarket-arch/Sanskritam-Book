# Mobile app target

Content model for the Sanskritam 2.0 mobile app. Like the website, the app consumes the JSON
exports (`json/`) — the Markdown curriculum remains the single source of truth.

## Screen mapping

| App screen | Source |
|---|---|
| Lesson flow (card sequence) | `sections[]` in order; section 1 (Hook) is the entry card |
| Drill screens | section 18 (Exercises) — each exercise block becomes one interactive screen |
| Quiz | `quiz.questions[]`; `quiz.answer_key[]` stays server-side / hidden until submission |
| Spaced-repetition deck | section 14 vocabulary entries (deva, iast, ipa, en, hi) |
| Audio drills | front matter `media.audio` |
| Streak / progress | `json/index.json` prerequisite graph |

## Lessons learned from Sanskritam 1.x (see analysis/IMPROVEMENT_REPORT.md)

The 1.x app export shipped multiple-choice options as corrupted placeholder strings and printed
the correct answer inline. The 2.0 contract prevents both: exercises are structured data
validated by `scripts/validate.py`, and answer keys are separated at the schema level.

App implementation is out of scope until Volume 1 content is mature.

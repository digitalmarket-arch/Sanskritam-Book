# Assets

Media referenced by curriculum lessons. Every asset filename begins with the id of the lesson
that owns it (`v1c01l03-<slug>.<ext>`), so provenance is always one `grep` away.

| Directory | Contents | Formats |
|---|---|---|
| `images/` | Photographs, letter cards, illustrations | `.png`, `.jpg`, `.svg` |
| `audio/` | Pronunciation recordings, drills, dictation tracks | `.mp3`, `.wav` |
| `diagrams/` | Mouth-position cutaways, grids, charts (source-editable) | `.svg` preferred |
| `worksheets/` | Printable practice sheets (writing grids, tracing) | `.pdf`, source `.md` |
| `quizzes/` | Standalone quiz sheets and separate answer keys | `.md`, `.pdf` |

Each directory is subdivided by volume (`volume-1/` …).

Lessons reference assets in YAML front matter under `media:`. An asset that is specified but not
yet produced carries the `planned:` prefix in the lesson front matter; the validator checks that
every non-`planned:` path exists. AI-generation prompts for planned assets live in the lesson
itself (sections 23–24) and in `automation/prompts/`.

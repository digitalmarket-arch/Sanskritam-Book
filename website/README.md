# Website target

The Sanskritam 2.0 website. It holds no content of its own: `scripts/build_site.py` renders
the curriculum Markdown (the same source the JSON export reads) into a static site, and
`website/assets/` holds its stylesheet and script.

```sh
pip install -r scripts/requirements.txt
python3 scripts/build_site.py              # → _site/  (open _site/index.html)
python3 scripts/build_site.py --include-drafts --out /tmp/preview   # local preview only
```

## Publishing rule

Only files whose front matter says `status: reviewed` are published. A chapter appears once
its `chapter.md` is reviewed and it has reviewed lessons; until then the course map lists it
as "in preparation". `--include-drafts` exists for local previews and flags every draft page.

## Hosting

`.github/workflows/pages.yml` builds the site on every push and deploys it to GitHub Pages
from `main` (or from any branch via a manual run). One-time setup by a repository admin:
**Settings → Pages → Build and deployment → Source: GitHub Actions**. The public address is
then `https://digitalmarket-arch.github.io/Sanskritam-Book/`.

`--artifact` writes the home page without its `<html>`/`<head>`/`<body>` skeleton, for hosts
that wrap the page themselves.

## Mapping

| Website surface | Source |
|---|---|
| Course map (home, volume and chapter pages) | `curriculum/**/volume.md`, `chapter.md`, lesson front matter |
| Lesson page | §1–§21 of the lesson (Hook … Homework) |
| Teacher view toggle | §22 Teacher Notes and the production kit §23–§27, collapsed by default |
| Self-check quiz | §19 with its key collapsed in `<details>`, exactly as in the book |
| Register callouts | `> **[FACT · तथ्यम्]**` … blockquotes, rendered as labelled FACT / HISTORY / TRADITION / SYMBOL panels |
| Citations | `[REF:key §locus]` → link to the entry on the Sources page, which lists every lesson citing it |
| Cross-references | lesson ids (`v2.c03.l05 §19`) and in-lesson `§N` become links |
| Word list | every §14 vocabulary headword, first occurrence wins |
| Home page sound grid | the preview table in v1.c01.l02; register examples from STYLE_GUIDE §4 |

## Rules

- The site must preserve the four-register distinction visually (FACT / HISTORY / TRADITION / SYMBOL).
- The static site is the self-study surface: quizzes are ungraded self-checks, so their keys
  ship collapsed, as in the printed book. Graded quizzes (app) never ship keys in the page
  payload; they are checked server-side from `quiz.answer_key[]`.
- Devanagari rendering: every Devanagari run is wrapped in `lang="sa"` (or `lang="hi"` in
  §7 and Hindi table columns) and set in Noto Sans Devanagari; display titles use Tiro
  Devanagari Sanskrit. Fonts load from Google Fonts with system fallbacks.
- Planned media (`planned:` paths) render as "in production" labels, never as broken players.

# Sanskritam — Complete Interactive Curriculum (book)

The web book and PDF companion to the **SanskritamApp** mobile app
([digitalmarket-arch/SanskritamApp](https://github.com/digitalmarket-arch/SanskritamApp)):
all 17 chapters of the course, the labs (Varṇamālā, Pāṇini engine, Chandas
scanner, paradigm tables) and `Sanskritam-Curriculum.pdf`.

## Where the content comes from

The app is the source of truth. Its course text and lab data were
fact-checked there, and this book is **generated from it** — nothing in the
chapters is edited by hand here.

| What | Where it lives in the book | Made by |
|---|---|---|
| The app's data, copied verbatim | `src/data/app/` | `npm run sync:app` |
| The app's tests for the lab data | `tests/app-*.test.cjs` | `npm run sync:app` |
| Chapters 1–17 in the book's format | built at runtime by `src/data/fromApp.ts` | — |
| `Sanskritam-Curriculum.pdf` (+ `public/` copy) and the page map `src/data/pdfLayout.ts` | repository root | `npm run pdf` |

So to fix a mistake in the course: fix it in the app, then

```bash
npm run sync:app -- --app ../SanskritamApp
```

```bash
npm run pdf
```

```bash
npm run lint && npm test
```

`npm run sync:app` reads the app checkout given by `--app` (default
`../SanskritamApp`). Add `--ref <branch>` to copy from a branch that is not
merged yet, or `--check` to only report whether the book is out of date.

## Run locally

Prerequisite: Node.js.

```bash
npm install
```

```bash
npm run dev
```

## Tests

`npm test` checks that every lesson, answer and line of the app's text is in
the book, that the corrected facts stay corrected, that the lab data is the
app's, and that the PDF was regenerated after the last text change.

## Fonts in the PDF

The PDF is typeset with the open-licence Noto fonts (installed as dev
dependencies): Noto Sans Devanagari for Devanagari, Noto Sans for English and
IAST, and Noto Sans Math / Symbols for arrows and the prosody marks ⏑ ─.

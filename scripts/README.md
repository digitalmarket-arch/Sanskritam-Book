# Scripts

Python ≥ 3.10. Dependencies: `pip install -r requirements.txt` (PyYAML, jsonschema, and
markdown-it-py for the website build).

| Script | Purpose |
|---|---|
| `validate.py` | Lint every lesson: front-matter schema, 27-section contract, id↔path agreement, Devanagari↔IAST consistency (mechanical re-transliteration diff), IPA charset, NFC normalization, romanization denylist, answer-key separation, register rules, media paths. Exit non-zero on error; `--warn-only` for drafts. |
| `export_json.py` | Export reviewed lessons to `json/` for website/app/automation. `--check` verifies exports are current (CI mode); `--include-drafts` also exports lessons that are still in draft. |
| `translit.py` | Deterministic Devanagari → IAST transliterator used by the validator; importable and runnable (`python3 translit.py <text>`). |
| `quizcheck.py` | Check a lesson's quiz (section 19): the correct answers are spread over the option letters (STYLE_GUIDE §5), and — against a base revision, `--base REV` — a re-ordering changed only the order of the options (the same option texts, the same keyed text, the same stems, the letters in the key's explanations moved with their options). `--survey` prints one line per lesson. |
| `new_lesson.py` | Instantiate `templates/lesson-template.md` with a fresh id and front matter. |
| `build_site.py` | Build the static website into `_site/` from reviewed lessons only (see `website/README.md`). `--include-drafts` for local previews; `--artifact` writes the home page as a body fragment. |

Run everything from the repo root:

```sh
python3 scripts/validate.py curriculum/volume-1/chapter-01/
python3 scripts/export_json.py
```

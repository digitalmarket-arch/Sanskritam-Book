# Scripts

Python ≥ 3.10. Dependencies: `pip install -r requirements.txt` (PyYAML + jsonschema only).

| Script | Purpose |
|---|---|
| `validate.py` | Lint every lesson: front-matter schema, 27-section contract, id↔path agreement, Devanagari↔IAST consistency (mechanical re-transliteration diff), IPA charset, NFC normalization, romanization denylist, answer-key separation, register rules, media paths. Exit non-zero on error; `--warn-only` for drafts. |
| `export_json.py` | Export lessons to `json/` for website/app/automation. `--check` verifies exports are current (CI mode). |
| `translit.py` | Deterministic Devanagari → IAST transliterator used by the validator; importable and runnable (`python3 translit.py <text>`). |
| `new_lesson.py` | Instantiate `templates/lesson-template.md` with a fresh id and front matter. |

Run everything from the repo root:

```sh
python3 scripts/validate.py curriculum/volume-1/chapter-01/
python3 scripts/export_json.py
```

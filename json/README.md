# JSON export layer

Machine-readable form of the curriculum, generated — never hand-edited — by
`scripts/export_json.py`.

| File | Contents |
|---|---|
| `frontmatter.schema.json` | JSON Schema (2020-12) for lesson YAML front matter |
| `lesson.schema.json` | JSON Schema for exported lesson objects |
| `volume-N/<id>.json` | One exported lesson: front matter + `sections[]` (all 27) + parsed `vocabulary[]` + `quiz{questions, answer_key}` + `registers[]` |
| `index.json` | Catalog: every lesson id, title, status, prerequisite graph |

Consumers: website, mobile app, AI automation (`automation/prompts/` templates pull
sections 23–26), and any future integrations.

Regenerate with:

```sh
python3 scripts/export_json.py            # writes json/volume-N/*.json + index.json
python3 scripts/export_json.py --check    # CI dry-run: verify exports are current
```

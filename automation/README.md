# Automation

AI-assisted production and continuous validation.

## prompts/

Prompt templates for generating lesson media from the JSON exports. Each template documents the
exact inputs it consumes (lesson JSON fields) and the required output spec:

| Template | Consumes | Produces |
|---|---|---|
| `image-gen.md` | section 23 (AI Image Prompt) + STYLE_GUIDE visual rules | letter cards, mouth diagrams, illustrations |
| `video-gen.md` | section 24 (AI Video Prompt) | lesson animations, scene lists |
| `voiceover.md` | section 25 (Voice-over Script) + IPA table | narration audio |
| `review-checklist.md` | whole lesson | the four peer-review passes (A script/phonetics, B Hindi, C factual, D contract) |

Generated media lands in `assets/` under the owning lesson's id prefix and replaces the
`planned:` entry in the lesson front matter.

## ci/

`validate.yml` — GitHub Actions workflow running `scripts/validate.py` and
`scripts/export_json.py --check` on every push/PR. Stored here per the repository layout;
copy (or symlink) to `.github/workflows/` to activate CI.

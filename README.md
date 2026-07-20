# संस्कृतम् २.० · Sanskritam 2.0

A research-based, multi-target Sanskrit education system — built in the open, Markdown-first.

**One source of truth** (this repository's Markdown lessons) drives **seven delivery targets**:
classroom teaching, self-study, YouTube, AI-automated production, website, mobile app, and a
professionally typeset printed book.

## What makes it different

- **Academically accurate.** Grammar checked against Pāṇini's Aṣṭādhyāyī and standard modern
  references (Whitney, Macdonell, Cardona); every historical claim cited; every verse located.
  See [REFERENCES.md](REFERENCES.md).
- **Four registers, never confused.** Grammatical **fact**, historical **evidence**,
  traditional **interpretation**, and symbolic **association** are visually and
  machine-readably separated in every lesson. Culture is honored *as culture* — never graded
  as grammar. See [STYLE_GUIDE.md](STYLE_GUIDE.md) §4.
- **Phonetics-first, script-complete.** Every sound taught with IPA and articulation; every
  vowel sign (mātrā) taught with its vowel; virāma and conjunct consonants covered in full —
  learners can actually read what the course shows them.
- **Real pedagogy.** Measurable objectives, spaced review, retrieval practice, production
  exercises (writing, speaking, dictation) in every lesson, separated answer keys, teacher
  notes. Grounded in language-acquisition research (see REFERENCES §pedagogy).
- **Automation-ready.** Every lesson carries its own AI image/video prompts, voice-over
  script, and reel script; `scripts/export_json.py` emits validated JSON for the app, website,
  and production pipelines.

## Repository map

| Path | Contents |
|---|---|
| `curriculum/` | The lessons — 5 volumes, Markdown + YAML front matter (the source of truth) |
| `templates/` | Canonical lesson/chapter/volume skeletons (27-section format) |
| `STYLE_GUIDE.md` | Binding contract: IAST, IPA table, typography, four-register policy |
| `EDITORIAL_GUIDELINES.md` | The 27 sections, sourcing rules, banned claims, review workflow |
| `ROADMAP.md` | Full volume/chapter map with status tracker |
| `REFERENCES.md` | Anchored source list (`[REF:key]` targets) |
| `GLOSSARY.md` | Project-wide term glossary (sa/IAST/en/hi) |
| `analysis/` | Audit of the predecessor curriculum + improvement report |
| `research/` | Per-chapter research notes and the claim-verification log |
| `assets/` | Images, audio, diagrams, worksheets, quizzes (per volume) |
| `json/` | Machine-readable lesson exports + schemas |
| `scripts/` | Validator, JSON exporter, transliterator |
| `automation/` | AI production prompt templates, CI config |
| `website/` `app/` `videos/` | Delivery-target content models |
| `build/` | Print pipeline — **gated** until content maturity |
| `Sanskritam-Curriculum.pdf` | The 1.x predecessor (reference artifact; see analysis/) |

## The five volumes

1. **वर्णमाला — Sounds & Script** · every sound, every letter, reading and writing (pre-A1→A1)
2. **शब्दाः वाक्यानि च — Words & Sentences** · core vocabulary, first conversations (A1→A2)
3. **व्याकरणम् — Core Grammar** · cases, verbs, sandhi, compounds — functionally (A2→B1)
4. **पाणिनीयम् — The Pāṇinian System** · the grammar behind the grammar (B1→B2)
5. **साहित्यम् — Literature & Mastery** · subhāṣita to Kālidāsa, meter, composition (B2→C1)

Full map: [ROADMAP.md](ROADMAP.md).

## Workflow

```
1.x PDF → Analysis → Research Notes → Markdown Chapters → Peer Review
        → Illustrations → Build Script → Professional PDF
```

Content is produced chapter-by-chapter; each chapter ships production-ready (reviewed,
validated, sourced) before the next begins. The printed book is generated *last*, from
matured Markdown — never written directly.

## Working on the project

```sh
pip install -r scripts/requirements.txt
python3 scripts/validate.py curriculum/          # lint everything
python3 scripts/export_json.py                   # regenerate machine layer
```

Start with [CONTRIBUTING.md](CONTRIBUTING.md), then the style guide and editorial guidelines.

## Status

Bootstrapped 2026-07-20. Volume 1 Chapter 1 (प्रवेशः — Entering Sanskrit Sound) is the first
production chapter. See [CHANGELOG.md](CHANGELOG.md).

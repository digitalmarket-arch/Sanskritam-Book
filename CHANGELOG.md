# Changelog

All notable changes to the Sanskritam 2.0 curriculum. Format follows
[Keep a Changelog](https://keepachangelog.com/); versions are project-wide milestones
(individual lessons also carry their own semver in front matter).

## [0.2.0] — 2026-07-21

Volume 1 Chapter 2 — स्वराः (The Vowels) complete and reviewed.

### Added
- v1.c02 research notes (per-vowel fact base, attested word inventories) and chapter frame.
- Seven lessons: इ/ई (left-hook mātrā rule), उ/ऊ, ऋ (classical /r̩/ with respectful
  regional-variant framing — fixes IR-009 in the curriculum itself), ए/ऐ (pure vs glide —
  fixes IR-010), ओ/औ + ॐ (four-register showcase), anusvāra/visarga (ayogavāha delivered —
  fixes IR-008), and the full-system review with a 42-word cumulative assessment.
- GLOSSARY: अनुस्वार, विसर्ग, सन्ध्यक्षर entries.

### Changed
- JSON exports regenerated for all 12 lessons; verification log extended with v1.c02
  research verdicts and review-pass findings.

## [0.1.0] — 2026-07-20

First production milestone: project bootstrap + Volume 1 Chapter 1 reviewed.

### Added
- Project bootstrap: repository scaffold, governance documents (README, STYLE_GUIDE,
  EDITORIAL_GUIDELINES, REFERENCES, ROADMAP, GLOSSARY, CONTRIBUTING), lesson/chapter/volume
  templates.
- `analysis/`: full audit of the 1.x curriculum PDF and the improvement report.
- `research/`: Volume 1 Chapter 1 phonetics research notes; claim-verification log.
- Volume 1 Chapter 1 — प्रवेशः (5 lessons, 27-section format).
- Machine layer: front-matter + lesson JSON Schemas, validator, JSON exporter,
  transliterator, automation prompt templates, CI stub.

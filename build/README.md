# Build pipeline — GATED

**No book PDF is built yet — deliberately.** The project workflow is:

```
PDF (uploaded 1.x) → Analysis → Research Notes → Markdown Chapters
      → Peer Review → Illustrations → Build Script → Professional PDF
```

Markdown is the single source of truth; the professional PDF is the *last* step, produced only
when a volume's content has reached `status: reviewed` and its illustrations exist. Building
early would freeze typography decisions before the content stabilizes and would tempt edits in
the output instead of the source — exactly the failure mode of the 1.x Word-export book (see
`analysis/IMPROVEMENT_REPORT.md` §3).

## Planned pipeline (documented now, activated later)

- `build.sh` — orchestrates: validate → export → pandoc per chapter → assemble volume.
- Engine: pandoc + XeLaTeX (required for correct Devanagari shaping).
- Fonts (see `fonts.md`): Noto Serif Devanagari (Sanskrit), Noto Serif (Latin/IAST — full
  diacritic coverage), Noto Sans Devanagari for headings.
- `pandoc/` — templates, Lua filters (four-register callouts → colored boxes; answer keys →
  chapter-end appendix), metadata.

## Gate criteria (per volume)

1. All lessons `status: reviewed` or better
2. `scripts/validate.py` green
3. Illustrations exist (no `planned:` media in print-critical sections)
4. Peer-review passes A–D logged in `research/verification-log.md`

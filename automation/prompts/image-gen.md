# Image generation prompt template

Consumes: lesson JSON → `sections[23]` (AI Image Prompt) + front matter `media.images`.

## Contract

Every generated image must satisfy:

- **Devanagari accuracy is non-negotiable.** Any letterform shown must be verified against a
  reference font rendering (Noto Serif Devanagari) before acceptance — generative models
  routinely hallucinate stroke details. For letter cards and stroke-order plates, prefer
  SVG composed from font outlines + drawn stroke arrows over pure generation.
- Style family: warm paper texture, deep ink tones, one accent color per volume
  (Volume 1: saffron #E08A00); consistent across all lessons of a volume.
- No deities or religious iconography in FACT-register illustrations (letter cards, mouth
  diagrams, grids). Cultural/SYMBOL sidebar art is allowed where the lesson's §23 requests it
  explicitly.
- Every image gets alt text (provided in the lesson's §23 prompt block).

## Output naming

`assets/images/volume-N/<idprefix>-<slug>.<ext>` exactly as listed in the lesson front
matter's `planned:` entry (drop the `planned:` prefix on delivery, update the front matter).

## Checklist per delivery

- [ ] Devanagari verified glyph-by-glyph against Noto reference
- [ ] IAST diacritics correct in any caption
- [ ] Volume accent color used
- [ ] Alt text shipped
- [ ] Front matter updated (`planned:` removed)

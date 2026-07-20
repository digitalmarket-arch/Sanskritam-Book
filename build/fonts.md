# Font requirements for the print build

| Role | Font | Why |
|---|---|---|
| Sanskrit body (Devanagari) | Noto Serif Devanagari | Complete conjunct coverage, mature shaping, open license |
| Latin body incl. IAST | Noto Serif | Full combining-diacritic coverage (ā ī ū ṛ ṝ ḷ ṃ ḥ ś ṣ ñ ṅ ṇ ṭ ḍ) |
| Headings | Noto Sans Devanagari + Noto Sans | Consistent family pairing |
| IPA strings | Noto Serif (fallback: Charis SIL) | Full IPA block incl. /t͡ɕ ʱ r̩ ɐ ʋ ɕ ʂ ɦ/ |

Rules:

- Never mix Devanagari fonts within a volume — metrics differ and mātrā alignment shifts.
- XeLaTeX `fontspec` with `Script=Devanagari` is mandatory; pdfLaTeX cannot shape Devanagari.
- Test page must include: क्ष त्र ज्ञ श्र द्ध र्क कं कः कृ कॄ and the full IAST diacritic set.
- The 1.x book was set in a Word pipeline whose font encoding produced machine-illegible text
  (copy-paste and search returned garbage). Acceptance test for 2.0 PDFs: text extracted with
  `pdftotext` must round-trip Devanagari correctly.

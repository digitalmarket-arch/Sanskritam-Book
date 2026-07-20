# Video production target

Production plan for YouTube lessons and short-form reels derived from the curriculum.

## Sources per video

Every lesson carries its own production kit in four sections:

| Section | Use |
|---|---|
| 24. AI Video Prompt | Scene-by-scene prompts for AI video generation |
| 25. Voice-over Script | Timed narration script (Sanskrit terms with IPA cues for the narrator) |
| 26. Reel Script | 30–60 s short-form script (hook / demo / payoff) |
| 23. AI Image Prompt | Thumbnail and still-frame prompts |

The JSON export (`json/volume-N/<id>.json`) exposes these as `sections[]` 23–26 so a production
pipeline can pull them programmatically.

## Conventions

- One long-form video per lesson; one reel per lesson minimum.
- On-screen Sanskrit is always Devanagari + IAST subtitle line.
- Pronunciation segments must match the audio assets and the STYLE_GUIDE IPA table — the
  voice-over script is not allowed to improvise approximations like "ri" for ऋ.

Directory stays empty until content production begins (scripts live inside lessons, not here).

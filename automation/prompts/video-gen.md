# Video generation prompt template

Consumes: lesson JSON → `sections[24]` (AI Video Prompt) + `sections[25]` (Voice-over Script).

## Contract

- Scene list comes verbatim from the lesson's §24; do not invent scenes.
- On-screen Sanskrit: Devanagari with an IAST subtitle line, both proofread against the
  lesson text (copy, never retype).
- Pronunciation segments must play the lesson's model audio (front matter `media.audio`) or
  a narrator following §25's IPA cues — never an improvised approximation.
- Register discipline carries into video: symbolic/cultural material is visually framed as
  such (sidebar/parchment treatment), matching the four-register callout design.
- Length targets: lesson videos 8–15 min; section animations 20–60 s.

## Output naming

`assets/` is for lesson-embedded media; finished videos live outside the repo (publish
pipeline) but their scene lists/scripts stay in the lesson (source of truth).

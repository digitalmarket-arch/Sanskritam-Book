# Voice-over production template

Consumes: lesson JSON → `sections[25]` (Voice-over Script) + STYLE_GUIDE §2 (IPA contract).

## Contract

- The script's timing marks (mm:ss) are targets ±10%.
- Every Sanskrit term in the script carries an IPA cue in [brackets]; the narrator (human or
  TTS) follows the cue, not habit. Specifically:
  - Full final vowels: dharma [d̪ʱɐrmɐ], never "dharm"
  - ऋ as [r̩]: saṃskṛtam [sɐ̃skr̩t̪ɐm]
  - ए ओ as pure long [eː oː]: namaste ends [t̪eː], not "-tay"
  - Dental t/d [t̪ d̪] distinct from English alveolar
- Two-voice convention: English/Hindi narration voice + a separate Sanskrit model voice
  (consistent across the whole course).
- Deliver as `assets/audio/volume-N/<idprefix>-<slug>.mp3`, 44.1 kHz, -16 LUFS.

## QA

Spot-check 3 random Sanskrit tokens per file against the IPA cues before acceptance; any
schwa-deletion or diphthongized e/o fails the file.

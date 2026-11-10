# Volume 4 plan — the scripts and lists it cites

This folder holds the small scripts and lists that `research/notes/vol4-plan.md` cites as its
method, as they were run on 2026-11-10, made runnable from the repository root. The plan cited
them by the paths of the working folder in which it was made (`v4/work/…`, `v4/synth-work/…`,
`v4/tools/…`); the plan now cites them here, under the same sub-folders. What each script
computes is unchanged: only the way it finds its files was changed (see "Paths"), and each
script was run both ways on 2026-11-10 with identical output (see "Figures").

The Volume 4 chapter fact bases re-run these scripts: `work/hw.py`, `work/chk_ledger.py` and
`synth-work/sutras.py` after every change to the plan's headword or sūtra lines, and
`work/etdiff.py` on every commentary or narrative line the c06 fact base adds (plan §5,
c06 spelling rule).

## Paths

- **The plan** is read from the repository: `research/notes/vol4-plan.md` (and, for
  `work/owned.py`, `research/notes/vol3-plan.md`).
- **Every other input** is a local copy kept outside the repository, in the folder named by
  the environment variable `SANSKRITAM_LOCAL`. A script stops with a message naming the
  variable when it is not set, and naming the expected path when a file is missing.
- **Output files** go under `SANSKRITAM_OUT/<sub-folder>/` (default
  `$SANSKRITAM_LOCAL/vol4-plan-out/`); a script refuses an output folder inside the repository.
  The one exception is `synth-work/sutras.py --write`, which rewrites the "Tools added"
  figures in `research/notes/vol4-plan.md` (see "Limits").
- `_local.py` holds these rules; every script imports it.

```sh
export SANSKRITAM_LOCAL=/path/to/local-copies     # the folder laid out as below
export SANSKRITAM_OUT=/path/outside/the/repo      # optional
python3 -I research/evidence/vol4-plan/work/hw.py
python3 -I research/evidence/vol4-plan/work/chk_ledger.py
python3 -I research/evidence/vol4-plan/synth-work/sutras.py
```

## Local sources (not part of the repository)

| Path under `SANSKRITAM_LOCAL` | What it is and where it comes from | Read by |
|---|---|---|
| `corp/ashd/sutraani/data.txt` | The Aṣṭādhyāyī data file (3,983 entries; JSON, key `data`): sūtra text, type, anuvṛtti, adhikāra. A clone of the `data` repository of ashtadhyayi.com (commit 5744762 of 2026-09-13 in this session). The plan's header names it; the course cites the sūtras as `ashtadhyayi` (REFERENCES.md). | `synth-work/sutras.py`, `work/lk.py` |
| `corp/dcs/dcs/data/conllu/files/Hitopadeśa/`, `…/Viṣṇupurāṇa/` | The DCS morphological corpus (Digital Corpus of Sanskrit, O. Hellwig), CoNLL-U files; a clone of the corpus repository (commit 8aeed5a of 2026-08-24 in this session). The plan's header and §1.3.1 name it "the DCS". | `tools/dcs*.py`, `work/dcspast.py`, `synth-work/hitlem.py` |
| `corp/gretil/gretil.sub.uni-goettingen.de/gretil/1_sanskr/…` | A local mirror of GRETIL e-texts: `6_sastra/1_gram/jvkasipu.htm` (Kāśikā, `kashika`), `6_sastra/1_gram/varlghku.htm` (Laghusiddhāntakaumudī, `laghukaumudi`), `6_sastra/1_gram/pmbhassu.htm` (Mahābhāṣya, `mahabhashya`), `5_poetry/4_narr/hitop_u.htm` (Hitopadeśa, `hitopadesha`), `5_poetry/4_narr/vispancu.htm` (Pañcatantra, Jha ed., `panchatantra`). Keys as in REFERENCES.md. | `work/etdiff.py` |
| `ledger-all.tsv` | The learner's word list: one row per headword of the §14 tables of the lessons v1.c01–v3.c04 (lesson, Devanagari, IAST, gloss, note; 898 rows on 2026-11-10). It is compiled from the repository's lesson files. | `work/owned.py` (and so `work/chk_ledger.py`) |
| `v4/design-derivation-first.md` | The derivation-first candidate design, the base of the plan (§7). The three candidate designs (`design-derivation-first.md`, `design-reader-first.md`, `design-system-first.md`) are working files of the plan, not committed. | `work/basehw.py` |

Where the session's network policy does not let a printed edition or a catalogue page be
opened, the evidence rule recorded in `research/verification-log.md` (the v3.c04 review
section) applies to what these sources are used to support.

## Files

| File | What it computes | Cited in the plan | Run (from the repository root) | Reads · writes |
|---|---|---|---|---|
| `work/hw.py` | New headwords per lesson block against each block's figure, the chain from 508, the exit | the editor's check after every change (same computation as `synth-work/hw.py`, §3) | `python3 -I research/evidence/vol4-plan/work/hw.py` | plan · writes `work/hw.json` |
| `work/chk_ledger.py` | No headword twice; none owned before Volume 4; the §3 table, the glance table and the blocks agree; the chain | the editor's check (header "Headwords"; §7.1.2 S8) | `python3 -I research/evidence/vol4-plan/work/chk_ledger.py` (after `work/hw.py`) | `work/hw.json`, plan, `ledger-all.tsv`, Volume 3 plan |
| `work/owned.py` | Whether a word is owned in Volumes 1–2, v3.c01–c04 (`ledger-all.tsv`) or the Volume 3 plan's headword lines | imported by `chk_ledger.py` | `python3 -I research/evidence/vol4-plan/work/owned.py सवर्णः` | `ledger-all.tsv`, Volume 3 plan |
| `synth-work/hw.py` | As `work/hw.py` | §3 ("All 119 headwords were checked by script") | `python3 -I research/evidence/vol4-plan/synth-work/hw.py` | plan · writes `synth-work/hw.json` |
| `synth-work/sutras.py` | The table and totals of §4.0.3 from the lesson blocks' tier lines, every number and text looked up in the data file; "Tools added" per lesson | header ("The sūtras"); §4.0.3 | `python3 -I research/evidence/vol4-plan/synth-work/sutras.py` | plan, `corp/ashd/sutraani/data.txt` · writes `synth-work/sutable.md`, `synth-work/sut_stats.json` |
| `synth-work/hitlem.txt` | List: the 400 commonest lemmas of the DCS Hitopadeśa tagged NOUN, VERB, ADV, ADJ or PRON, as "count lemma UPOS" | §3 rule 22 | — | — |
| `synth-work/hitlem.py` | Rebuilds `hitlem.txt` to stdout (written 2026-11-10; the script of synthesis was not kept; this one reproduces the list line for line) | (helper for rule 22) | `python3 -I research/evidence/vol4-plan/synth-work/hitlem.py` | DCS Hitopadeśa |
| `work/basehw.py` | The base design's headwords against the plan's: kept, dropped, added | §3 (the 92 + 27 paragraph); §7.4 G21 | `python3 -I research/evidence/vol4-plan/work/basehw.py` | plan, `v4/design-derivation-first.md` |
| `work/gcount.py` | Words per pause form of the §5 passages, names counted apart | §7.4 G23 | `python3 -I research/evidence/vol4-plan/work/gcount.py` | plan, `work/newpause.txt` |
| `work/newpause.txt` | List: the pause forms written at the critique (N3b, N4, N5, N5mbh, N6, N8), one per line, label TAB text | read by `gcount.py` | — | — |
| `work/dcspast.py` | DCS Hitopadeśa and Viṣṇupurāṇa: verb tokens; `Tense=Past` by mood and verb form | §1.3.1 (note to table 1.3a); §7.4 G24 | `python3 -I research/evidence/vol4-plan/work/dcspast.py` | DCS |
| `work/etdiff.py` | Aligns every passage of `passages.tsv` with its GRETIL e-text locus and prints each difference | §5 / c06 spelling rule (Method); §7.4 G44 | `python3 -I research/evidence/vol4-plan/work/etdiff.py [passages.tsv]` | `passages.tsv` (default: the one beside it), `tools/i2d.py`, GRETIL |
| `work/passages.tsv` | List: 60 passages (label TAB e-text key TAB Devanagari) as checked at the critique | §5 / c06 spelling rule (Method) | — | — |
| `work/mkpass.py` | Builds a passage list from the plan's §5 blockquotes, the c06.l01 table and the Kāśikā/LSK lines typed in the script (helper; made `passages.tsv`) | (helper for G44) | `python3 -I research/evidence/vol4-plan/work/mkpass.py` | plan · writes `work/passages.tsv` |
| `work/lk.py` | Looks up sūtras in the data file: text, type, anuvṛtti, adhikāra | header ("a lookup script") | `python3 -I research/evidence/vol4-plan/work/lk.py 1.1.1 3.1.68` | `corp/ashd/sutraani/data.txt` |
| `tools/dcsfreq.py` | Verb categories (share of all `VERB` tokens) with their commonest lemmas; UPOS counts | §1.3.1 (table 1.3a) | `python3 -I research/evidence/vol4-plan/tools/dcsfreq.py Hitopadeśa` | DCS |
| `tools/dcs2.py` | Past finite forms by `Formation`; absolutive endings; passive forms; compound members | §1.3.1 | `… /tools/dcs2.py Hitopadeśa` | DCS |
| `tools/dcs3.py` | Declined nominals by stem class; `-ay` lemmas; present-system and kta lemmas | §1.3.1 | `… /tools/dcs3.py Hitopadeśa` | DCS |
| `tools/dcs4.py` | Active present and imperfect tokens by present class (the class table is in the script) | §1.3.1 | `… /tools/dcs4.py Hitopadeśa` | DCS |
| `tools/i2d.py` | IAST to Devanagari, stdin to stdout | §5 / c06 spelling rule (Method) | `echo bhavati \| python3 -I research/evidence/vol4-plan/tools/i2d.py` | — |

The `tools/dcs*.py` scripts take one or more DCS text names (folders under
`corp/dcs/dcs/data/conllu/files/`) or folder paths; with none they print their usage.

## Figures printed on 2026-11-10

Each command below was run on 2026-11-10 twice — the original in the working folder of the
plan, and the copy here with `SANSKRITAM_LOCAL` set — and printed the same output, byte for
byte; the output files (`hw.json`, `sutable.md`, `sut_stats.json`, `passages.tsv`) were also
identical.

- `work/hw.py`: `exit 627`; 27 blocks with their figures as expected (c01.l01 5, 508 → 513 …),
  and `v4.c06.l04 -- no headword line` (the exam lesson has no headwords).
- `work/chk_ledger.py`: `total 119` · `dups []` · `OWNED? v4.c03.l05 मा भैषीः V1-2:v3.c03.l04`
  · `chain exit 627 rows 6`. The one `OWNED?` line is the chunk मा भैषीः, whose first word मा
  is owned; the plan counts the chunk as one headword (rule 8).
- `synth-work/hw.py`: as `work/hw.py`.
- `synth-work/sutras.py`: `missing in data file: []` · `238 Counter({'D': 121, 'K': 51, 'B': 26,
  'Q': 25, 'R': 11, 'owned': 4}) newQ 25 … newB 25`, then two dictionaries of "Tools added" per lesson: the first counts a sūtra only where its first tier line is Q, B or D; the second, `TA2`, counts it at its first Q, B or D line and gives the plan's printed figures (the two differ for c03.l02, c04.l01, c05.l02 and c05.l03),
  and `patch v4.c06.l04 Tools added: 15 -> 0`, a false match (see "Limits").
- `work/owned.py सवर्णः प्रभातम् सुहृत्`: `सवर्णः -` · `प्रभातम् V1-2:v2.c01.l03` · `सुहृत् V3`;
  on stderr `509 128` (the sizes of the two lists it builds: Devanagari words of `ledger-all.tsv`, and words of the Volume 3 plan's headword lines).
- `synth-work/hitlem.py`: the 400 lines of `hitlem.txt`, identical.
- `work/basehw.py`: `base 96 current 119`; not in current: उच्चारणम्, राज्यम्, प्रभातम्, अर्पयति;
  `added 27`.
- `work/gcount.py`: N1 43 · N2 37 · N3a 28 and 45 · N6 31 · N7 31 · N8 24 · X-a 32 and 63 ·
  N3b 45 · N4 21 · N5 10 · N5mbh 4 (words, names apart; one line per pause form, from the plan's
  §5 and then from `newpause.txt`).
- `work/dcspast.py`: Hitopadeśa `verbs 5217`, `Tense=Past` `Ind` 264, `Jus` 4, `Prec` 3, participle
  4 (total 275); Viṣṇupurāṇa `verbs 14163`, `Ind` 2643, `Jus` 13, participle 4 (total 2660);
  `aor-tag 0` for both (the aorists carry `Tense=Past` with a `Formation` tag, which the plan
  subtracts: §1.3.1).
- `work/etdiff.py`: 60 lines, one per passage; 30 `identical`, none `NOT FOUND`; the rest list
  their differences (the plan's §5 / c06 spelling list is drawn from them).
- `work/mkpass.py`: `61` (see "Limits").
- `work/lk.py 1.1.1 8.4.68`: `1.1.1 वृद्धिरादैच्` …; `8.4.68 अ अ` ….
- `tools/dcsfreq.py`: Hitopadeśa `tokens 25045 verbs 5217` (kta `Part` 1610, 30.9%; `Conv` 687,
  13.2%); Viṣṇupurāṇa `tokens 87627 verbs 14163`.
- `tools/dcs2.py`: Hitopadeśa `tok 25045 verbs 5217 cpd-members 3158`; Viṣṇupurāṇa `tok 87627
  verbs 14163 cpd-members 14524`.
- `tools/dcs3.py`: `declined nominals` Hitopadeśa 8792, Viṣṇupurāṇa 34403.
- `tools/dcs4.py`: active present and imperfect tokens, Hitopadeśa 1700, Viṣṇupurāṇa 3173.
- `tools/i2d.py` on `bhavati / rāmaḥ`: `भवति । रामः`.

## Limits

- `synth-work/sutras.py` recounts "Tools added" per lesson and prints a `patch` line wherever
  the first "Tools added: N" in a lesson's stretch of the plan differs from its count. On
  2026-11-10 it prints one: `v4.c06.l04 Tools added: 15 -> 0`. The c06.l04 block has no
  "Tools added" line; its stretch runs to the end of the plan, and the first match there is a
  quotation in the review table of §7.5 (finding c03:E#11, "Tools added: 15, the most of any
  lesson"). Run with `--write`, the script would change that quotation to 0. Do not use
  `--write` on the plan as it stands; correct the plan's figures by hand from the printed
  counts instead.
- `work/passages.tsv` is the list as checked at the critique (60 passages). Run on the final
  plan, `work/mkpass.py` gives 61 rows, which differ from the file in a few lines (a comma in
  N3a and the rows from line 53 on), and neither holds the Kāśikā lines added at the plan
  review: the plan says they were checked by hand and that the c06 fact base adds them.
- `synth-work/hitlem.py` depends on the order in which the file system lists the five
  Hitopadeśa files, as the script of synthesis did (it fixes the UPOS label of a lemma with
  more than one, and the order of lemmas with equal counts); on another copy of the corpus the
  list may differ in those two respects.
- `work/owned.py` and `work/chk_ledger.py` read `ledger-all.tsv` as it stands; the list grows
  as Volume 3 ships, and Volume 3 Chapters 5–6 headwords are covered only through the
  Volume 3 plan's headword lines.

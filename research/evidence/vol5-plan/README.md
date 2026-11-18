# Evidence for the Volume 5 plan (draft)

The scripts and lists that `research/notes/vol5-plan.md` cites as `work/…`, kept as they were used
when the plan was designed, critiqued, repaired and checked (2026-11-10 → 2026-11-18):

- `work/scan5.py`, `work/v5tools.py`, `work/metres.py`, `work/vipcount.py` — scansion by Kedāra's
  weight rule, metre identification and the vipulā counts;
- `work/measure.py`, `work/texts.py`, `work/texts_state.py`, `work/render.py`, `work/rep/` — the
  reading texts, each token's status, the gloss ratios and the rendering of the pause forms;
- `work/aptecheck.py`, `work/mwcheck.py`, `work/cover5.py` — which Apte headword a word not owned
  leads to; coverage checks;
- `work/ledger5.py`, `work/ledgercheck.py`, `owned5.py`, `owned-at-entry.tsv` — the headword ledger
  and the words owned at the volume's entry;
- `work/mbhcount.py`, `work/ramcount.py`, `work/corpusmeasure.py`, `work/megh.py`,
  `work/samasya.py`, `work/splice_scan.py`, `work/wtexts.py` — corpus counts and helpers.

They read the local corpora of the working session (GRETIL e-texts, the Aṣṭādhyāyī data file, the
dictionaries) by absolute paths. Making them runnable from the repository root, and checking that each
gives the output the plan prints, is part of the plan's review.

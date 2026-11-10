"""Rebuilds hitlem.txt (plan §3 rule 22): the 400 commonest lemmas of the DCS Hitopadeśa
that are tagged NOUN, VERB, ADV, ADJ or PRON, as "count lemma UPOS", to stdout.

The script that made hitlem.txt at synthesis was not kept. This one was written on 2026-11-10
to the same method and reproduces the list line for line: tokens are counted by lemma (column 3
of the CoNLL-U rows, multi-word ranges left out); each lemma is labelled with the UPOS of the
last token of it read; files are read in the order the file system lists them (glob, unsorted),
as at synthesis, since that order fixes the label of a lemma with more than one UPOS and the order
of lemmas with equal counts.

Run (from the repository root): python3 -I research/evidence/vol4-plan/synth-work/hitlem.py > hitlem.out
"""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import local  # paths: see ../README.md
import glob, collections

base = local('corp', 'dcs', 'dcs', 'data', 'conllu', 'files', 'Hitopadeśa')
count = collections.Counter(); upos = {}
for f in glob.glob(os.path.join(base, '*.conllu')):
    for line in open(f, encoding='utf8'):
        x = line.rstrip('\n').split('\t')
        if len(x) < 6 or '-' in x[0] or line.startswith('#'): continue
        count[x[2]] += 1; upos[x[2]] = x[3]
KEEP = {'NOUN', 'VERB', 'ADV', 'ADJ', 'PRON'}
rows = [f'{n} {lem} {upos[lem]}' for lem, n in count.most_common() if upos[lem] in KEEP][:400]
print('\n'.join(rows))

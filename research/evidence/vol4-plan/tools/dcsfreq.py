"""Verb categories of the DCS CoNLL-U files (share of all VERB tokens, with the commonest lemmas): table 1.3a.
Usage (from the repository root): python3 -I research/evidence/vol4-plan/tools/dcsfreq.py TEXT [TEXT ...]
TEXT is a DCS text folder name under $SANSKRITAM_LOCAL/corp/dcs/dcs/data/conllu/files/ (e.g. Hitopadeśa, Viṣṇupurāṇa)
or a path to a folder of .conllu files. Plan §1.3.1."""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import local  # paths: see ../README.md
def dcs_dirs(args):
    if not args: sys.exit(__doc__)
    return [a if os.path.isdir(a) else local('corp', 'dcs', 'dcs', 'data', 'conllu', 'files', a) for a in args]
import sys,glob,collections,os
paths=[]
for d in dcs_dirs(sys.argv[1:]):
    paths+=glob.glob(os.path.join(d,'*.conllu'))
feat=collections.Counter(); verbcat=collections.Counter(); keys=collections.Counter()
tok=0; verbs=0; upos=collections.Counter()
lem_by=collections.defaultdict(collections.Counter)
for p in paths:
    for line in open(p,encoding='utf8'):
        if not line.strip() or line.startswith('#'): continue
        c=line.rstrip('\n').split('\t')
        if '-' in c[0]: continue
        tok+=1; upos[c[3]]+=1
        f=c[5]
        d=dict(x.split('=') for x in f.split('|') if '=' in x)
        for k in d: keys[k+'='+d[k]]+=1
        if c[3]=='VERB':
            verbs+=1
            vf=d.get('VerbForm','Fin')
            if vf=='Fin': cat='Fin:'+d.get('Tense','?')+'/'+d.get('Mood','?')
            else: cat=vf+(':'+d.get('Tense','') if 'Tense' in d else '')
            verbcat[cat]+=1
            lem_by[cat][c[2]]+=1
print('tokens',tok,'verbs',verbs)
print(upos.most_common())
for k,v in verbcat.most_common(): print(f'{k}\t{v}\t{100*v/verbs:.1f}%\t', ', '.join(f'{a}:{b}' for a,b in lem_by[k].most_common(8)))
print([k for k in keys if not k.startswith(('Case','Gender','Number','Person'))][:80])

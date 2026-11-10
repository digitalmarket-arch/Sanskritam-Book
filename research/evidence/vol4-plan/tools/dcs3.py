"""Declined nominals by stem class, -ay lemmas, present-system and kta lemmas.
Usage (from the repository root): python3 -I research/evidence/vol4-plan/tools/dcs3.py TEXT [TEXT ...]
TEXT is a DCS text folder name under $SANSKRITAM_LOCAL/corp/dcs/dcs/data/conllu/files/ (e.g. Hitopadeśa, Viṣṇupurāṇa)
or a path to a folder of .conllu files. Plan §1.3.1."""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import local  # paths: see ../README.md
def dcs_dirs(args):
    if not args: sys.exit(__doc__)
    return [a if os.path.isdir(a) else local('corp', 'dcs', 'dcs', 'data', 'conllu', 'files', a) for a in args]
import sys,glob,collections,os,re
paths=[]
for d in dcs_dirs(sys.argv[1:]):
    paths+=glob.glob(os.path.join(d,'*.conllu'))
stem=collections.Counter(); stemex=collections.defaultdict(collections.Counter)
presl=collections.Counter(); ay=0; fin=0; nom=0; partl=collections.Counter(); caus=collections.Counter()
def cls(l):
    for suf,n in [('mat','-mat/-vat'),('vat','-mat/-vat'),('in','-in'),('an','-an'),('as','-as'),('is','-is/-us'),('us','-is/-us'),('at','-at'),('tṛ','-ṛ'),('ṛ','-ṛ'),('a','-a'),('ā','-ā'),('ī','-ī'),('i','-i'),('u','-u'),('ū','-ū'),('o','-o/-au'),('ai','-ai')]:
        if l.endswith(suf): return n
    return 'cons(other)'
for p in paths:
    for line in open(p,encoding='utf8'):
        if not line.strip() or line.startswith('#'): continue
        c=line.rstrip('\n').split('\t')
        if '-' in c[0]: continue
        d=dict(x.split('=') for x in c[5].split('|') if '=' in x)
        if c[3] in ('NOUN','ADJ') and d.get('Case') and d.get('Case')!='Cpd':
            nom+=1; k=cls(c[2]); stem[k]+=1; stemex[k][c[2]]+=1
        if c[3]=='VERB' and d.get('VerbForm','Fin')=='Fin':
            fin+=1
            if d.get('Tense') in ('Pres','Impf'): presl[c[2]]+=1
            if c[2].endswith('ay'): caus[c[2]]+=1
        if c[3]=='VERB' and d.get('VerbForm')=='Part' and 'Tense' not in d: partl[c[2]]+=1
print('declined nominals',nom)
for k,v in stem.most_common(): print(f'{k}\t{v}\t{100*v/nom:.1f}%', stemex[k].most_common(10))
print('finite',fin,'-ay lemmas finite',sum(caus.values()), caus.most_common(25))
print('present-system lemmas', presl.most_common(70))
print('kta lemmas',partl.most_common(40))

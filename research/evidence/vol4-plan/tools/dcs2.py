"""Past finite forms by Formation, absolutive endings, passive forms, compound members.
Usage (from the repository root): python3 -I research/evidence/vol4-plan/tools/dcs2.py TEXT [TEXT ...]
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
c2=collections.Counter(); ex=collections.defaultdict(collections.Counter)
conv=collections.Counter(); verbs=0; passv=collections.Counter(); cpd=0;tok=0
for p in paths:
    for line in open(p,encoding='utf8'):
        if not line.strip() or line.startswith('#'): continue
        c=line.rstrip('\n').split('\t')
        if '-' in c[0]: continue
        tok+=1
        d=dict(x.split('=') for x in c[5].split('|') if '=' in x)
        if d.get('Case')=='Cpd': cpd+=1
        if c[3]!='VERB': continue
        verbs+=1
        m=dict(x.split('=',1) for x in c[9].split('|') if '=' in x)
        form=m.get('Unsandhied',c[1])
        if d.get('VerbForm','Fin')=='Fin' and d.get('Tense') in ('Past','Aor'):
            k=d.get('Tense')+'/'+d.get('Formation','-')+'/'+d.get('Mood','')
            c2[k]+=1; ex[k][form]+=1
        if d.get('VerbForm')=='Conv':
            conv['tvā' if form.endswith(('tvā','itvā')) else ('ya' if form.endswith('ya') else ('tya' if form.endswith('tya') else 'other:'+form))]+=1
        if d.get('Voice')=='Pass':
            passv[(d.get('VerbForm','Fin'),d.get('Tense',''),d.get('Mood',''))]+=1
print('tok',tok,'verbs',verbs,'cpd-members',cpd)
for k,v in c2.most_common(): print(k,v,ex[k].most_common(10))
print(conv.most_common(12))
print(passv.most_common(10))

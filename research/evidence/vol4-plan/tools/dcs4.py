"""Active present and imperfect tokens by present class (the class table is in the script).
Usage (from the repository root): python3 -I research/evidence/vol4-plan/tools/dcs4.py TEXT [TEXT ...]
TEXT is a DCS text folder name under $SANSKRITAM_LOCAL/corp/dcs/dcs/data/conllu/files/ (e.g. Hitopadeśa, Viṣṇupurāṇa)
or a path to a folder of .conllu files. Plan §1.3.1."""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import local  # paths: see ../README.md
def dcs_dirs(args):
    if not args: sys.exit(__doc__)
    return [a if os.path.isdir(a) else local('corp', 'dcs', 'dcs', 'data', 'conllu', 'files', a) for a in args]
import sys,glob,collections,os
cl={'brū':2,'as':2,'kṛ':8,'bhū':1,'kathay':10,'śru':5,'vad':1,'paś':1,'dṛś':1,'gam':1,'sthā':1,'yā':2,'cintay':10,'iṣ':6,'jīv':1,'jñā':9,'nivas':1,'vas':1,'prativas':1,'dā':3,'pracch':6,'vid':2,'vac':2,'ās':2,'labh':1,'han':2,'tyaj':1,'i':2,'upe':2,'khād':1,'man':4,'āyā':2,'grah':9,'vṛt':1,'nivṛt':1,'pravṛt':1,'rakṣ':1,'darśay':10,'śak':5,'vidhā':3,'sambhū':1,'mṛ':6,'nī':1,'jan':4,'yuj':7,'janay':10,'bhakṣay':10,'ācar':1,'śubh':1,'car':1,'sev':1,'muc':6,'anusaṃdhā':3,'aś':5,'yudh':4,'vinaś':4,'naś':4,'vah':1,'pat':1,'arh':1,'upadiś':6,'vraj':1,'ājñāpay':10,'ram':1,'bhid':7,'anuṣṭhā':1,'chid':7,'āp':5,'prāp':5,'sad':1,'pā':1,'sidh':4,'āgam':1,'kṛt':6,'svap':2,'vṛdh':1,'jāgṛ':2,'bhuj':7,'stu':2,'śī':2,'ji':1,'smṛ':1,'tuṣ':4,'kup':4,'krudh':4,'dhāv':1,'patay':10,'pāl':10,'cur':10,'gaṇay':10,'pūjay':10,'avalokay':10,'ālocay':10,'tṛ':1,'kṣip':6,'viś':6,'praviś':6,'upaviś':6,'likh':6,'mil':6,'sṛj':6,'diś':6,'tud':6,'bhī':3,'hu':3,'bhṛ':3,'hā':3,'dhā':3,'sthāpay':10,'lī':4}
paths=[]
for d in dcs_dirs(sys.argv[1:]): paths+=glob.glob(os.path.join(d,'*.conllu'))
c=collections.Counter(); un=collections.Counter(); tot=0
for p in paths:
    for line in open(p,encoding='utf8'):
        if not line.strip() or line.startswith('#'): continue
        x=line.rstrip('\n').split('\t')
        if '-' in x[0] or x[3]!='VERB': continue
        d=dict(y.split('=') for y in x[5].split('|') if '=' in y)
        if d.get('VerbForm','Fin')=='Fin' and d.get('Tense') in ('Pres','Impf') and d.get('Voice')!='Pass':
            tot+=1; k=cl.get(x[2])
            if k is None and x[2].endswith('ay'): k='10/caus'
            if k is None: un[x[2]]+=1; k='?'
            c[k]+=1
print(tot); 
for k,v in sorted(c.items(),key=lambda a:-a[1]): print(k,v,f'{100*v/tot:.1f}%')
print(un.most_common(30))

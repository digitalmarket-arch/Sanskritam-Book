"""DCS Hitopadeśa and Viṣṇupurāṇa: verb tokens, Tense=Past by mood and verb form (plan §1.3.1, G24).
Run: python3 -I research/evidence/vol4-plan/work/dcspast.py"""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import PLAN, VOL3_PLAN, local, repo_file, out  # paths: see ../README.md
import glob,collections,sys
base=local('corp','dcs','dcs','data','conllu','files')+'/'
for t in ['Hitopadeśa','Viṣṇupurāṇa']:
  verbs=0; past=collections.Counter(); aor=collections.Counter(); ex=collections.Counter()
  for f in glob.glob(base+t+'/*.conllu'):
    for l in open(f,encoding='utf8'):
      c=l.rstrip('\n').split('\t')
      if len(c)<6 or not c[0].isdigit(): continue
      if c[3]!='VERB': continue
      verbs+=1
      fe=dict(kv.split('=',1) for kv in c[5].split('|') if '=' in kv)
      if fe.get('Tense')=='Past':
        past[fe.get('Mood','-')]+=1
        mi=c[9] if len(c)>9 else ''
        ex[(fe.get('Mood','-'),fe.get('VerbForm','-'))]+=1
      if 'Aor' in c[5] or fe.get('Tense')=='Aor': aor[c[5]]+=1
  print(t,'verbs',verbs,'past by mood',dict(past),'tot',sum(past.values()))
  print(' past by mood/verbform',dict(ex))
  print(' aor-tag',sum(aor.values()))

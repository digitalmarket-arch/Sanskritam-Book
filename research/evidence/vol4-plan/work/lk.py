"""Look up sūtras in the Aṣṭādhyāyī data file: text, type, anuvṛtti, adhikāra.
Run: python3 -I research/evidence/vol4-plan/work/lk.py 1.1.1 3.1.68"""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import PLAN, VOL3_PLAN, local, repo_file, out  # paths: see ../README.md
import json,sys
D=json.load(open(local('corp','ashd','sutraani','data.txt'),encoding='utf8'))['data']
M={f"{x['a']}.{x['p']}.{x['n']}":x for x in D}
for n in sys.argv[1:]:
  x=M.get(n)
  if not x: print(n,'MISSING'); continue
  print(n, x['s'], '| type', x['type'], '| an', x['an'], '| ad', x['ad'])

"""Words per pause form of the §5 passages (names counted apart), from the plan and newpause.txt beside this script (plan §7.4 G23).
Run: python3 -I research/evidence/vol4-plan/work/gcount.py"""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import PLAN, VOL3_PLAN, local, repo_file, out  # paths: see ../README.md
import re,sys
t=open(repo_file(PLAN),encoding='utf8').read()
NAMES={'सुदर्शनः','वीरवरः','शूद्रकः'}
def toks(s):
    s=re.sub(r'\([^)]*\)','',s)
    out=[]
    for w in s.split():
        w=w.strip('।॥?!,;:"“”\'‘’—–…()[]')
        if re.search(r'[ऀ-ॿ]',w): out.append(w)
    return out
P={}
# pause forms already in the plan (§5)
for m in re.finditer(r'### 5\.\d (\S+?)[ ,].*?\n(.*?)(?=\n### |\n## )',t,flags=re.S):
    sec=m.group(1); body=m.group(2)
    for pm in re.finditer(r'\nPause: (.*?)(?="|\n\n)',body,flags=re.S):
        txt=re.sub(r'\s+',' ',pm.group(1))
        parts=re.split(r'\((?:a|b)\) ',txt)
        P.setdefault(sec,[]).append(txt)
for l in open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'newpause.txt'),encoding='utf8'):
    k,v=l.rstrip('\n').split('\t'); P.setdefault(k,[]).append(v)
for k,vs in P.items():
    for v in vs:
        tk=toks(v); n=len([w for w in tk if w not in NAMES])
        print(k, n, 'names', len(tk)-n)

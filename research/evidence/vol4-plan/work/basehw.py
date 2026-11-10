"""Headwords of the base design (derivation-first) against the plan: kept, dropped, added.
Run: python3 -I research/evidence/vol4-plan/work/basehw.py"""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import PLAN, VOL3_PLAN, local, repo_file, out  # paths: see ../README.md
import re,json
def extract(path):
    t=open(path,encoding='utf8').read(); out=[]
    for m in re.finditer(r'- \*\*New headwords \((\d+); (\d+) → (\d+)\):\*\*(.*?)(?=\n- \*\*|\n  Not counted|\n#### |\Z)',t,flags=re.S):
        body=m.group(4)
        rows=[l for l in body.split('\n') if l.startswith('| ') and not l.startswith('| देवनागरी') and not l.startswith('|---')]
        bullets=re.findall(r'(?m)^  - ([ऀ-ॿ][^ ]*(?: [ऀ-ॿ][^ ]*)?) ',body)
        if rows: w=[r.split('|')[1].strip() for r in rows]
        elif bullets: w=bullets
        else:
            flat=re.sub(r'\s+',' ',body)
            w=re.findall(r'(?:^ ?|· )([ऀ-ॿ]+(?: [ऀ-ॿ]+)?) [a-zA-Zāīūṛṝḷṃḥśṣṇṭḍñṅ]+',flat)
        out+=w
    return out
b=extract(local('v4','design-derivation-first.md')); c=extract(repo_file(PLAN))
print('base',len(b),'current',len(c))
print('base not in current:',[w for w in b if w not in c])
added=[w for w in c if w not in b]; print('added',len(added),added)

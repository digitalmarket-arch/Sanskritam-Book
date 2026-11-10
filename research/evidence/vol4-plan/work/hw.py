"""Headwords per lesson block against each block's figure, the chain from 508 and the exit.
Writes hw.json under $SANSKRITAM_OUT/work/ (read by chk_ledger.py). Run: python3 -I research/evidence/vol4-plan/work/hw.py"""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import PLAN, VOL3_PLAN, local, repo_file, out  # paths: see ../README.md
import re,sys
t=open(repo_file(PLAN),encoding='utf8').read()
plan={'c01':[5,4,4],'c02':[6,5,5],'c03':[5,6,4,6,7],'c04':[8,7,6,5],'c05':[7,6,7,6],'c06':[4,3,3]}
chain=508; exp={}
for c in ['c01','c02','c03','c04','c05','c06']:
    for i,n in enumerate(plan[c]):
        exp[f'v4.{c}.l0{i+1}']=(n,chain,chain+n); chain+=n
print('exit',chain)
blocks=re.split(r'\n(?=#### v4\.c0\d\.l0\d)',t)
res={}
for b in blocks[1:]:
    lid=re.match(r'#### (v4\.c0\d\.l0\d)',b).group(1)
    m=re.search(r'- \*\*New headwords \((\d+); (\d+) → (\d+)\):\*\*(.*?)(?=\n- \*\*|\n  Not counted|\Z)',b,flags=re.S)
    if not m:
        print(lid,'-- no headword line'); continue
    body=m.group(4)
    rows=[l for l in body.split('\n') if l.startswith('| ') and not l.startswith('| देवनागरी') and not l.startswith('|---')]
    bullets=re.findall(r'(?m)^  - ([ऀ-ॿ][^ ]*(?: [ऀ-ॿ][^ ]*)?) ',body)
    if rows: words=[r.split('|')[1].strip() for r in rows]
    elif bullets: words=bullets
    else:
        # inline: split on ' · ' at entries starting with Devanagari then IAST
        flat=re.sub(r'\s+',' ',body)
        words=re.findall(r'(?:^ ?|· )([\u0900-\u097F]+(?: [\u0900-\u097F]+)?) [a-zA-Zāīūṛṝḷṃḥśṣṇṭḍñṅ]+',flat)
    res[lid]=words
    e=exp.get(lid)
    flag='' if e and (len(words),int(m.group(2)),int(m.group(3)))==(e[0],e[1],e[2]) and int(m.group(1))==e[0] else ' <<'
    print(lid,m.group(1),m.group(2),m.group(3),'listed',len(words),'expect',e,flag, '|', ' '.join(words))
import json; json.dump(res,open(out('work','hw.json'),'w',encoding='utf8'),ensure_ascii=False)

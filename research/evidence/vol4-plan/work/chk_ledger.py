"""No headword twice; none owned before Volume 4 (owned.py: ledger-all.tsv + Volume 3 plan); the §3 table, glance and block figures agree.
Reads hw.json written by work/hw.py (run that first). Run: python3 -I research/evidence/vol4-plan/work/chk_ledger.py"""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import PLAN, VOL3_PLAN, local, repo_file, out  # paths: see ../README.md
def local_hw():
    p = out('work', 'hw.json')
    if not os.path.exists(p): sys.exit('error: %s not found; run work/hw.py first.' % p)
    return p
import json,re,sys,collections
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
import owned
H=json.load(open(local_hw(),encoding='utf8'))
t=open(repo_file(PLAN),encoding='utf8').read()
allw=[w for l in H for w in H[l]]; print('total',len(allw))
c=collections.Counter(allw); print('dups',[w for w,n in c.items() if n>1])
for l,ws in H.items():
    for w in ws:
        for part in w.split():
            r=owned.check(part)
            if r!='-': print('OWNED?',l,w,r)
# §3 table and glance figures
glance={m.group(1):int(m.group(2)) for m in re.finditer(r'\| (v4\.c0\d\.l0\d) \|[^\n]*\| (\d+) \|\n',t)}
tab={}
for m in re.finditer(r'\| (c0\d) [^|]+\| (\d+) \| ([\d—| ]+)\| \*\*(\d+)\*\* \|',t):
    pass
rows=re.findall(r'\| (c0\d) [^|\n]+\| (\d+) \| (\d+|—) \| (\d+|—) \| (\d+|—) \| (\d+|—) \| (\d+|—) \| (\d+|—) \| (\d+) \| \*\*(\d+)\*\* \|',t)
chain=508
for r in rows:
    ch=r[0]; ent=int(r[1]); ls=[int(x) for x in r[2:8] if x!='—']; new=int(r[8]); ex=int(r[9])
    assert ent==chain,(ch,ent,chain); assert sum(ls)==new and ent+new==ex,(ch,)
    for i,n in enumerate(ls):
        lid=f'v4.{ch}.l0{i+1}'
        g=glance.get(lid); blk=len(H.get(lid,[]))
        if (g,blk)!=(n,n): print('MISMATCH',lid,'§3',n,'glance',g,'block',blk)
    chain=ex
print('chain exit',chain, 'rows',len(rows))

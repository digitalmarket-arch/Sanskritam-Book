"""Is a word owned before Volume 4? Reads ledger-all.tsv (Volumes 1-2 and v3.c01-c04 lessons) and the Volume 3 plan's headword lines.
Imported by chk_ledger.py; also: python3 -I research/evidence/vol4-plan/work/owned.py WORD ..."""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import PLAN, VOL3_PLAN, local, repo_file, out  # paths: see ../README.md
import re,sys
tsv=[l.split('\t') for l in open(local('ledger-all.tsv'),encoding='utf8') if l.strip()]
own={}
for r in tsv:
    for w in re.findall(r'[ऀ-ॿ]+',r[1]): own.setdefault(w,r[0])
plan=open(repo_file(VOL3_PLAN),encoding='utf8').read()
# v3 headword blocks: lines in "New headwords" sections until blank-line-after-table
blocks=re.findall(r'\*\*New headwords[^\n]*\n((?:[^\n]*\n){0,16})',plan)
v3=set()
for b in re.findall(r'New headwords.*?(?=\n- \*\*|\n#### |\n### )',plan,flags=re.S):
    for row in b.split('\n'):
        m=re.match(r'\|\s*([ऀ-ॿ][^|]*)\|',row)
        if m:
            for w in re.findall(r'[ऀ-ॿ]+',m.group(1)): v3.add(w)
    for m in re.finditer(r'(?:^|· |: |\(\d+[^)]*\):\*\* )([ऀ-ॿ][ऀ-ॿ ]*?) [a-zāīūṛḷṃḥśṣṇṭḍñṅ]',b,flags=re.M):
        for w in m.group(1).split(): v3.add(w)
def check(w):
    return ('V1-2:'+own[w]) if w in own else ('V3' if w in v3 else '-')
if __name__=='__main__':
    for w in sys.argv[1:]: print(w, check(w))
    print(len(own),len(v3),file=sys.stderr)

def norm(w):
    out={w}
    for suf in ['ः','म्','ा','ी','ि','ु']:
        if w.endswith(suf): out.add(w[:-len(suf)])
    return out
ALL=set(own)|v3
def check2(w):
    for c in norm(w):
        for x in ALL:
            if c==x or (len(c)>2 and x.rstrip('ःम्')==c.rstrip('ःम्')): return 'own('+x+')'
    return '-'

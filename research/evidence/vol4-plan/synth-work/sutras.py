"""The table and totals of plan §4.0.3 from the lesson blocks' tier lines, every number and text looked up in the Aṣṭādhyāyī data file.
Writes sutable.md and sut_stats.json under $SANSKRITAM_OUT/synth-work/. Only with --write does it patch the 'Tools added' figures in research/notes/vol4-plan.md.
Run: python3 -I research/evidence/vol4-plan/synth-work/sutras.py"""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import PLAN, VOL3_PLAN, local, repo_file, out  # paths: see ../README.md
import re,json,collections,sys
D=json.load(open(local('corp','ashd','sutraani','data.txt'),encoding='utf8'))['data']
M={f"{x['a']}.{x['p']}.{x['n']}":x['s'] for x in D}
t=open(repo_file(PLAN),encoding='utf8').read()
OWNED="2.3.16 2.3.19 1.4.14 1.2.70 7.3.101 3.4.85 3.4.86 6.1.101 6.1.87 6.1.88 6.1.77 6.1.78 6.1.109 1.1.11 8.3.34 6.1.132 8.3.23 8.2.39 8.4.40 1.4.109 1.4.110 8.1.22 1.1.27 1.1.37 1.4.59 2.2.29 2.2.24 3.2.118".split()
assert len(OWNED)==28
BSET="1.3.1 3.1.1 3.1.2 3.1.91 3.2.123 1.3.2 1.3.3 1.3.9 3.4.69 3.4.77 3.4.78 1.3.78 1.4.99 1.4.101 1.4.108 1.4.102 1.4.22 3.4.113 3.1.68 1.3.8 1.4.13 6.4.1 7.3.84 1.1.3 1.1.2 6.1.78".split()
assert len(BSET)==26
glance={}
for l in t.split('\n'):
    m=re.match(r'\| (v4\.c0\d\.l0\d) \| ([^|]+) \| [^|]+ \| ([^|]+) \|',l)
    if m: glance[m.group(1)]=m.group(3).strip()
blocks=re.split(r'\n(?=#### v4\.c0\d\.l0\d)',t)
uses=collections.defaultdict(list)  # sutra -> [(lesson,tier)]
order=[]
for b in blocks[1:]:
    lid=re.match(r'#### (v4\.c0\d\.l0\d)',b).group(1)
    m=re.search(r'\*\*Sūtras \(tiers[^\n]*(?:\n  [^\n]*)*',b)
    if not m: continue
    s=re.sub(r'\s+',' ',m.group(0))
    s=s.split('Tools added')[0]
    s=s.replace('The sūtra that gives तृच् (3.1.133) is not quoted','')
    segs=re.split(r'\*\*(Q|B|D|K|R|Re-read(?: \(owned\))?)(?::\*\*|\*\* \([^)]*\):)',s)
    # segs: [pre, tag, text, tag, text...]
    for i in range(1,len(segs),2):
        tag=segs[i]; txt=segs[i+1]
        if tag=='Q' and txt.strip().startswith('none'): continue
        tier={'Re-read':'re','Re-read (owned)':'re'}.get(tag,tag)
        for n in re.findall(r'(?<![\d.])(\d\.\d\.\d{1,3})(?![\d.])',txt):
            uses[n].append((lid,tier))
            if n not in order: order.append(n)
bad=[n for n in order if n not in M]
print('missing in data file:',bad)
rank={'B':5,'Q':4,'R':3,'D':2,'K':1,'re':0}
rows=[];cnt=collections.Counter();newQ=[];newB=[]
for n in order:
    u=uses[n]; first=u[0]
    tiers=[x[1] for x in u]
    if n in BSET: hi='B'
    else: hi=max(tiers,key=lambda x:rank[x])
    if hi=='re': hi='owned'
    own=n in OWNED
    cnt[hi]+=1
    if hi=='Q' and not own: newQ.append(n)
    if hi=='B' and not own: newB.append(n)
    later=', '.join(f"{l[3:]} ({tr})" for l,tr in u[1:]) or '—'
    rows.append(f"| {n} | {M[n]} | {first[0][3:]} ({first[1]}) | {later} | {hi}{' (owned V3)' if own else ''} | {glance.get(first[0],'')} |")
print(len(order),cnt,'newQ',len(newQ),newQ,'newB',len(newB))
# tools added per lesson: first use with tier in Q,B,D
ta=collections.Counter()
for n in order:
    l,tr=uses[n][0]
    if n in OWNED: continue
    if tr in ('Q','B','D'): ta[l]+=1
print(dict(ta))
hdr="| Sūtra | Text (data file) | First in learner text (tier) | Later | Tier for the budget | The lesson's point |\n|---|---|---|---|---|---|"
open(out('synth-work','sutable.md'),'w',encoding='utf8').write(hdr+'\n'+'\n'.join(rows)+'\n')
json.dump({'n':len(order),'cnt':cnt,'newQ':newQ,'newB':newB,'ta':ta},open(out('synth-work','sut_stats.json'),'w'),default=list)
ta2=collections.Counter()
for n in order:
    if n in OWNED: continue
    for l,tr in uses[n]:
        if tr in ('Q','B','D'): ta2[l]+=1; break
print('TA2',dict(ta2))
# patch Tools added numbers
t2=t; out=[]
parts=re.split(r'(\n(?=#### v4\.c0\d\.l0\d))',t2)
for seg in parts:
    m=re.match(r'#### (v4\.c0\d\.l0\d)',seg)
    if m:
        lid=m.group(1); n=ta2.get(lid,0)
        seg2=re.sub(r'Tools added: (\d+)',lambda mm: f'Tools added: {n}',seg,count=1)
        if seg2!=seg: print('patch',lid,re.search(r'Tools added: \d+',seg).group(0),'->',n)
        seg=seg2
    out.append(seg)
if '--write' in sys.argv: open(PLAN,'w',encoding='utf8').write(''.join(out))

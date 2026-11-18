# Arithmetic checks after the repair: §5 ratio lines vs measure.py and vs the listed inventory;
# lesson-block figures vs measure.py; every scansion run's syllable count vs its metre; pāda-final ×.
import re,sys,os
W='/tmp/claude-0/-home-user-Sanskritam-Book/d8d45eb6-e9e3-564b-9957-8f7e02af29c7/scratchpad/v5/work'
sys.path.insert(0,W); os.chdir(W)
from measure import measure, toks
from texts_state import T
P=os.path.join(W,'..','vol5-plan.md'); t=open(P,encoding='utf8').read(); L=t.split('\n')
probs=[]
M={k:measure(k,v) for k,v in T.items()}
# 1. §5 ratio lines and inventories
s5=t[t.index('## 5. The reading texts in full'):t.index('## 6. Beyond the course')]
for m in re.finditer(r'\n\*\*([A-Z]\d[a-z0-9]*)\*\*[^\n]*\n(.*?)(?=\n\*\*[A-Z]\d|\n### |\Z)',s5,re.S):
    k,body=m.group(1),m.group(2)
    r=re.search(r'\*\*Gloss ratio:\*\* (\d+) of (\d+)',body)
    if not r: continue
    g,n=int(r.group(1)),int(r.group(2)); n0,g0,gp0,_,_=M[k]
    if (g,n)!=(g0,n0): probs.append(f'§5 {k}: printed {g} of {n}, measure {g0} of {n0}')
    w=re.search(r'without [^)]*?(?:\([^)]*\))?[^0-9]*?(\d+) of (\d+)',body[r.start():])
    # inventory: count listed G items with multiplicity
    inv=0
    for line in body.split('\n'):
        if line.startswith(('Glossed (G):','Glossed in the margin (G):','Not owned —','In the **lemma glossary**')):
            seg=line.split(':',1)[1]
            seg=re.sub(r'\[[^\]]*\]','',seg)
            parts=re.split(r'\*\*[^*]+\*\*[^:]*:',seg)
            for p in parts:
                for it in p.split('; '):
                    it=it.strip().rstrip('.')
                    if not it or it.startswith('none'): continue
                    if not re.match(r'[ऀ-ॿ]',it): continue
                    mm=re.search(r'×(\d)',it); inv+= int(mm.group(1)) if mm else 1
    if inv!=g: probs.append(f'§5 {k}: inventory lists {inv}, ratio says {g}')
# 2. lesson-block figures
def blk(lid):
    m=re.search(r'\n#### '+re.escape(lid)+r'(.*?)(?=\n#### |\n### |\Z)',t,re.S); return re.sub(r'\s+',' ',m.group(1)) if m else ''
def f(k,which=1):
    n,g,gp,_,_=M[k]; return f'{(g,gp)[which-1]} of {n}'
def agg(ks,which=1):
    n=sum(M[k][0] for k in ks); g=sum(M[k][which] for k in ks); return f'{g} of {n}'
EXP={'v5.c01.l01':[agg(['S1a','S1b']),agg(['S1a','S1b'],2)],'v5.c01.l02':[f('S2a'),f('S2b'),agg(['S2a','S2b','S2c'])],
 'v5.c01.l03':[f('S3a'),f('S3b'),f('S3c'),agg(['S3a','S3b','S3c'])],'v5.c01.l04':[f('S4a'),f('S4b')],
 'v5.c01.l05':[agg(['X1a','X1b']),agg(['X1a','X1b'],2)],'v5.c02.l01':[f('P1'),f('P1',2)],'v5.c02.l02':[f('P2'),f('P2',2)],
 'v5.c02.l03':[f('P3'),f('P3',2)],'v5.c02.l04':[f('P4'),f('P4',2)],'v5.c02.l05':[f('X2'),f('X2',2)],
 'v5.c03.l01':[f('E1'),f('E1',2)],'v5.c03.l02':[f('E2'),f('E2',2)],'v5.c03.l03':[f('G1'),f('G1',2)],
 'v5.c03.l04':[f('U1'),f('U1',2)],'v5.c03.l05':[f('X3'),f('X3',2)],'v5.c04.l03':[f('M1')],
 'v5.c04.l05':[agg(['X4a','X4b']),agg(['X4a','X4b'],2)],'v5.c05.l05':[f('X5'),f('X5',2),f('X6'),f('X6',2)]}
for lid,ex in EXP.items():
    b=blk(lid)
    for e in ex:
        if e not in b and e.replace(' of ',' of ') not in b: probs.append(f'{lid}: expected figure "{e}" not found')
# 3. scansion runs
LEN={'pathyā':8,'na-vipulā':8,'bha-vipulā':8,'ra-vipulā':8,'ta-vipulā':8,'ma-type':8,'indravajrā':11,'upendravajrā':11,
     'vasantatilakā':14,'mālinī':15,'mandākrāntā':17,'śārdūlavikrīḍita':19,'drutavilambita':12}
runs=0; short=[]
for i,l in enumerate(L):
    for m in re.finditer(r'((?:[⏑−×] ){2,}[⏑−×])(?=([^⏑−×]{0,30}))',l):
        seq=m.group(1).split(' '); after=m.group(2); runs+=1
        lab=re.match(r'\s*\(?([a-zāīūṛśṣḍṭñṅ\-]+)',after)
        lab=lab.group(1) if lab else ''
        n=len(seq)
        if lab in LEN:
            if n!=LEN[lab]: probs.append(f'line {i+1}: {lab} run of {n}: {" ".join(seq)}')
            if seq[-1]!='×' and i>270: probs.append(f'line {i+1}: pāda-final not ×: {" ".join(seq)} {lab}')
        elif n not in (8,11,12,14,15,17,19): short.append((i+1,n," ".join(seq),after[:20]))
        elif seq[-1]!='×' and n in (8,11,12,14,15,17,19) and i>270 and 'Scansion' in l:
            probs.append(f'line {i+1}: unlabelled full pāda not ending ×: {" ".join(seq)}')
print('scansion runs',runs)
print('PROBLEMS', probs if probs else 'none')
print('short or partial runs (patterns, cadences) for review:')
for s in short: print('  ',s)

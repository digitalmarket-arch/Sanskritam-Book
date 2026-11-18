# Arithmetic of the ledger: headwords listed in each lesson block vs the block's own figure,
# the §3 table and the §4.0 table; the chain from 627; duplicates; ownership at entry.
import re,sys,subprocess
P=sys.argv[1]; txt=open(P,encoding='utf8').read()
blocks=re.split(r'\n#### (v5\.c0\d\.l0\d)',txt)
heads={}; chainmsg=[]
for i in range(1,len(blocks),2):
    lid=blocks[i]; body=blocks[i+1]
    m=re.search(r'\*\*New headwords \((\d+); (\d+) → (\d+)\):\*\*(.*?)(?=\n- \*\*|\n\n)',body,re.S)
    if not m: heads[lid]=(0,[],None,None); continue
    n,a,b,items=int(m.group(1)),int(m.group(2)),int(m.group(3)),m.group(4)
    words=[]
    for it in re.split(r'\s·\s',items.replace('\n',' ')):
        it=it.strip()
        w=re.match(r'([ऀ-ॿ]+)\s+([^\s]+)',it)
        if w: words.append((w.group(1),w.group(2)))
    heads[lid]=(n,words,a,b)
tot=0; prev=627; allw={}; probs=[]
for lid,(n,words,a,b) in heads.items():
    if a is not None:
        if len(words)!=n: probs.append(f'{lid}: figure {n}, listed {len(words)}')
        if a!=prev: probs.append(f'{lid}: starts {a}, chain at {prev}')
        if b!=a+n: probs.append(f'{lid}: {a}+{n}!={b}')
        prev=b; tot+=n
    for d,ia in words:
        if d in allw: probs.append(f'duplicate {d} in {lid} and {allw[d]}')
        allw[d]=lid
print('total new',tot,'exit',prev)
# §4.0 table figures
for lid,(n,words,a,b) in heads.items():
    m=re.search(r'\| '+re.escape(lid)+r' \|[^\n]*\| (\d+) \|\n',txt)
    if m and int(m.group(1))!=n: probs.append(f'§4.0 {lid}: {m.group(1)} vs {n}')
# §3 table
for c in range(1,6):
    m=re.search(r'\| c0%d [^|]*\| (\d+) \| (\d+) \| (\d+) \| (\d+) \| (\d+) \| (\d+) \| (\d+) \| \*\*(\d+)\*\* \|'%c,txt)
    if not m: probs.append(f'§3 row c0{c} not found'); continue
    vals=[int(x) for x in m.groups()]
    for l in range(1,6):
        lid=f'v5.c0{c}.l0{l}'; n=heads.get(lid,(0,))[0]
        if vals[l]!=n: probs.append(f'§3 {lid}: {vals[l]} vs {n}')
# owned at entry
out=subprocess.run(['python3','../owned5.py']+list(allw),capture_output=True,text=True).stdout
for line in out.splitlines():
    w,st=line.split(' ',1)
    if st.strip()!='-': probs.append(f'owned already: {line}')
print('headwords',len(allw)); print('PROBLEMS',probs if probs else 'none')

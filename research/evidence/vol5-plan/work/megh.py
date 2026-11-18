import re
from v5tools import pattern
MK='GGGGLLLLLGGLGGLGG'  # ma bha na ta ta ga ga
lines=open('txt/kmeghdpu.txt',encoding='utf8').read().split('\n')
verses={}
for l in lines:
    m=re.search(r'//\s*KMgD_(\d+)',l)
    if '/' in l and ('KMgD' in l or l.strip().endswith('/')):
        pass
txt='\n'.join(lines)
for m in re.finditer(r'([^\n]+)/\s*\n([^\n]+)//\s*KMgD_(\d+)\s*//',txt):
    a,b,n=m.group(1),m.group(2),int(m.group(3))
    verses[n]=(a,b)
print('verses',len(verses),min(verses),max(verses))
bad=[]
for n,(a,b) in sorted(verses.items()):
    # each half has two padas of 17; split by syllable count
    for half in (a,b):
        p=pattern(half)
        if len(p)!=34: bad.append((n,len(p),half[:60])); continue
        for q in (p[:17],p[17:]):
            if q[:-1]!=MK[:-1]: bad.append((n,q,half[:50]))
print('nonconforming',len(bad)); print(bad[:12])

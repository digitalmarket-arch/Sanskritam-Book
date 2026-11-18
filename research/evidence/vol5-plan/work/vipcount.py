import re,sys,collections
V=['ai','au','ā','ī','ū','ṝ','a','i','u','ṛ','ḷ','e','o']
LONG={'ā','ī','ū','ṝ','e','o','ai','au'}
CONS2=['kh','gh','ch','jh','ṭh','ḍh','th','dh','ph','bh']
def toks(s):
    s=s.lower().replace("'",'').replace('-','')
    out=[];i=0
    while i<len(s):
        c=s[i]
        if c==' ': i+=1; continue
        two=s[i:i+2]
        if two in ('ai','au'): out.append(('V',two));i+=2;continue
        if c in V: out.append(('V',c));i+=1;continue
        if two in CONS2: out.append(('C',two));i+=2;continue
        if c in 'ṃḥ': out.append(('M',c));i+=1;continue
        if c.isalpha() or c in 'ñṅṇṭḍśṣ': out.append(('C',c))
        i+=1
    return out
def scan(line):
    t=toks(line); w=[]
    vi=[k for k,x in enumerate(t) if x[0]=='V']
    for n,k in enumerate(vi):
        nxt=vi[n+1] if n+1<len(vi) else len(t)
        mid=t[k+1:nxt]
        heavy=t[k][1] in LONG or any(x[0]=='M' for x in mid) or sum(1 for x in mid if x[0]=='C')>=2
        w.append('-' if heavy else 'u')
    return w
f=sys.argv[1]; pat=re.compile(sys.argv[2])
odd=collections.Counter();even=collections.Counter();n=0;other=0
for line in open(f,encoding='utf8'):
    m=re.match(r'^(\S+)\t(.*?)<BR>',line)
    if not m or not pat.match(m.group(1)) or '*' in m.group(1): continue
    w=scan(m.group(2))
    if len(w)!=16: other+=1; continue
    n+=1; odd[''.join(w[4:7])]+=1; even[''.join(w[12:15])]+=1
print(n,other); print(odd.most_common()); print(even.most_common(4))

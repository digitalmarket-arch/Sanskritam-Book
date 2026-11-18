import re,sys,os,collections
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from v5tools import i2d,load_owned,to_iast
from texts_state import T
own=load_owned()
ownI={}
for d,l in own.items():
    ownI.setdefault(to_iast(d),l)
def toks(p):
    p=p.replace('…',' ').replace('—',' ').replace('||',' ').replace('|',' ').replace('!',' ').replace('?',' ').replace('(',' ').replace(')',' ').replace(',',' ')
    return [w for w in p.split() if w]
ENDS=['ānām','āṇām','ebhyaḥ','ābhyām','asya','ena','eṇa','āya','āt','āni','āṇi','aiḥ','eṣu','ayoḥ','ām','ān','āḥ','aḥ','am','au','e','ā','ī','iḥ','im','eḥ','ayaḥ','ūn','uḥ','um','oḥ','ave','vā','ya','tum','ati','anti','ate','ante','asi','āmi','ataḥ','antaḥ']
def guess(w):
    first=w.split('-')[0]
    cands=[w,first]
    for e in ENDS:
        for x in (w,first):
            if x.endswith(e): cands += [x[:-len(e)]+s for s in ('a','aḥ','am','ā','i','iḥ','u','uḥ','ati','ī')]
    for c in cands:
        if c in ownI: return f'{c}<{ownI[c]}>'
    return None
def measure(k,v,verbose=False):
    ts=toks(v['pause']); N=set(v.get('N',[])); G=set(v['G']); L=set(v.get('L',{})); pre=set(v.get('pre',[]))
    n=sum(1 for t in ts if t not in N)
    g=sum(1 for t in ts if t in G)
    gp=g+sum(1 for t in ts if t in pre and t not in G)
    unk=[t for t in ts if t not in N and t not in G and t not in L and t not in pre and not guess(t)]
    return n,g,gp,unk,len(ts)
if __name__=='__main__':
    for k,v in T.items():
        n,g,gp,unk,tot=measure(k,v)
        r=f"1 in {n/g:.1f}" if g else 'none'
        rp=f"1 in {n/gp:.1f}" if gp else 'none'
        print(f"{k:5s} words {n:3d} (names {tot-n}) glossed {g:2d} = {r:10s} | without lesson headwords {gp:2d} = {rp}")
        if '-v' in sys.argv: print('   check:',' '.join(sorted(set(unk))))

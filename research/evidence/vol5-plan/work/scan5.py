# Regenerate every scansion line of plan §5 from the e-text line in texts_state.T.
# Splits a text into verses at '||', each verse into halves at '|', drops the '…' marker,
# scans each half (v5tools.pattern: Kedāra's weight rule, KedV 1.9), checks the syllable count
# against the metre and names the anuṣṭubh odd-pāda type by syllables 5–7.
import sys,re
sys.path.insert(0,'.')
from texts_state import T
from v5tools import pattern
from metres import ident
VIP={'LGG':'pathyā','LLL':'na-vipulā','GLL':'bha-vipulā','GLG':'ra-vipulā','GGL':'ta-vipulā','GGG':'ma-type (− − −; not in Kedāra'"'"'s list)','LLG':'⏑ ⏑ − (irregular)','LGL':'⏑ − ⏑'}
LOCI={'E1':['3.50.1','3.50.5','3.50.6','3.50.7','3.50.8','3.50.9','3.50.10'],
      'E2':['3.50.17','3.50.18','3.50.19','3.50.21','3.50.22','3.50.23','3.50.25','3.50.26','3.50.30','3.50.31'],
      'G1':['2.47','2.48'],'X3':['3.51.5','3.51.6','3.51.7','3.51.9']}
def sym(p):   # one pāda: its last syllable is printed × (वा पादान्ते, §1.4.4; critique G47)
    m=['−' if c=='G' else '⏑' for c in p]
    if m: m[-1]='×'
    return ' '.join(m)
def verses(et):
    return [v.replace('…','').strip() for v in et.split('||') if v.replace('…','').strip()]
def scan_text(k):
    out=[]; bad=[]
    vs=verses(T[k]['et']); loci=LOCI.get(k,[None]*len(vs))
    assert len(loci)==len(vs),(k,len(vs))
    for loc,v in zip(loci,vs):
        halves=[h.strip() for h in v.split('|') if h.strip()]
        parts=[]
        for h in halves:
            p=pattern(h)
            if len(p)==16:
                a,b=p[:8],p[8:]
                if b[4:7]!='LGL': bad.append((k,loc,'even',b))
                parts.append(f"{sym(a)} {VIP.get(a[4:7],'?')} / {sym(b)}")
            elif len(p) in (22,28):
                m=len(p)//2; a,b=p[:m],p[m:]
                ia,ib='/'.join(ident(a)) or '?', '/'.join(ident(b)) or '?'
                if '?' in (ia,ib): bad.append((k,loc,'metre',p))
                parts.append(f"{sym(a)} {ia} / {sym(b)} {ib}")
            else:
                bad.append((k,loc,'count',len(p))); parts.append(f"{sym(p)} ({len(p)} syllables)")
        lab=(loc+' ') if loc else ''
        out.append(lab+' · '.join(parts))
    return out,bad
if __name__=='__main__':
    allbad=[]
    for k in sys.argv[1:]:
        o,b=scan_text(k); allbad+=b
        print(k,'||'.join(o))
    print('PROBLEMS',allbad)

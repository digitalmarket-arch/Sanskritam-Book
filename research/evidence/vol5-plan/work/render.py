import re,sys
sys.path.insert(0,'.')
from v5tools import i2d,pattern,scan
from metres import ident
from measure import toks,measure
exec(open('texts_state.py',encoding='utf8').read())
CONS=set('kgṅcjñṭḍṇtdnpbmyrlvśṣsh')
def joined(et):
    PUN={'|':'।','||':'॥'}
    items=[]
    for part in et.replace('-','').split():
        if part in ('|','||','—','…','!','?',','): items.append(('P',PUN.get(part,part))); continue
        if items and items[-1][0]=='W' and (part.startswith("'") or items[-1][1][-1] in CONS):
            items[-1]=('W',items[-1][1]+part); continue
        items.append(('W',part))
    s=' '.join(i2d(x) if t=='W' else x for t,x in items)
    for p in ('।','॥','!','?',','): s=s.replace(' '+p,p)
    return s
def pdev(p):
    o=[]
    for w in p.split():
        if w in ('|','||'): o.append({'|':'।','||':'॥'}[w]); continue
        if w in ('—','…','!','?','(',')'): o.append(w); continue
        o.append('-'.join(i2d(x) for x in w.split('-')))
    s=' '.join(o)
    return s.replace(' ।','।').replace(' ॥','॥').replace(' !','!').replace(' ?','?')
def padas(et):
    halves=[h.strip() for h in re.split(r'\|\|?',et) if h.strip() and '…' not in h]
    return halves
def render(k):
    v=T[k]; n,g,gp,unk,tot=measure(k,v)
    if k.endswith('2') and k.startswith('S3'):
        return f"**{k}** (variant witness) — {v['src']} · `{v['file']}` {v['lines']}\n\n> "+joined(v['et'])+"\n>\n> *"+v['et']+"*\n"
    L=[]
    L.append(f"**{k}** — {v['src']} · `{v['file']}` {v['lines']}")
    L.append('')
    L.append('> '+joined(v['et']))
    L.append('>')
    L.append('> *'+v['et']+'*')
    L.append('')
    L.append('Pause form (ours): '+pdev(v['pause']))
    if v.get('anv') and not v['anv'].startswith('('):
        L.append('')
        L.append('Anvaya (ours): '+pdev(v['anv']))
    if v.get('tr') and not v['tr'].startswith('('):
        L.append('')
        L.append('Translation (ours): "'+v['tr']+'"')
    L.append('')
    gl='; '.join(f"{pdev(t)} {x}" for t,x in v['G'].items() if x)
    ll='; '.join(f"{pdev(t)} ({x.split(';')[0].split('(')[0].strip()[:48]})" for t,x in v.get('L',{}).items() if x)
    L.append(f"Glossed (G): {gl if gl else 'none'}.")
    if ll: L.append(f"Recognised (L): {ll}.")
    if v.get('N'): L.append('Names: '+', '.join(pdev(x) for x in v['N'])+'.')
    r=f"1 in {n/g:.1f}" if g else 'none'; rp=f"1 in {n/gp:.1f}" if gp else 'none'
    L.append(f"**Gloss ratio:** {g} of {n} words ({r}), names excluded; without the lesson's own headwords {gp} of {n} ({rp}).")
    return '\n'.join(L)
def scanblock(k,split=True):
    v=T[k]; out=[]
    for h in padas(v['et']):
        h=h.replace('—','').strip()
        p=pattern(h)
        if len(p)==16: segs=[p[:8],p[8:]]
        elif len(p) in (22,24,28,30,34,38,42): m=len(p)//2; segs=[p[:m],p[m:]]
        else: segs=[p]
        out.append(f"{h} → "+' | '.join(f"{s} ({len(s)}{', '+'/'.join(ident(s)) if ident(s) else ''})" for s in segs))
    return out
if __name__=='__main__':
    for k in sys.argv[1:]:
        print(render(k)); print()
        if '-s' in sys.argv: pass

#!/usr/bin/env python3
"""render5.py [--apply]: regenerate the §5 status lines (glossed / look up / recognised / names / ratio) from
texts_state.py (repaired) and aptecheck.py, and the text lines of the texts whose e-text excerpt changed at the
repair (P1, P3, X2, U1). Without --apply it writes the new blocks to rep/render5.out for review."""
import sys, os, re
W='/tmp/claude-0/-home-user-Sanskritam-Book/d8d45eb6-e9e3-564b-9957-8f7e02af29c7/scratchpad/v5/work'
sys.path.insert(0, W); os.chdir(W)
from v5tools import i2d
from measure import measure, toks
import aptecheck as A
T = A.T
PLAN = os.path.join(W, '..', 'vol5-plan.md')
from render import joined, pdev
SLP = [('E','ai'),('O','au'),('K','kh'),('G','gh'),('C','ch'),('J','jh'),('W','ṭh'),('Q','ḍh'),('T','th'),('D','dh'),('P','ph'),
       ('B','bh'),('A','ā'),('I','ī'),('U','ū'),('f','ṛ'),('F','ṝ'),('x','ḷ'),('N','ṅ'),('Y','ñ'),('w','ṭ'),('q','ḍ'),('R','ṇ'),
       ('S','ś'),('z','ṣ'),('M','ṃ'),('H','ḥ')]
def iast(s):
    return ''.join(dict(SLP).get(c, c) for c in s)
SPLIT_FROM = ['P2','P3','P4','E1','E2','G1','U1','M1']        # prepared texts from c02.l02 on (G73)
UNSEEN = {'X1a','X1b','X2','X3','X4a','X4b','X5','X6'}
LEMMA = {   # lemma-glossary entries (dictionary form) for X3 and X4, the course's (G57)
 'na-svasthām':'स्वस्थ','prati':'प्रति','samīkṣya':'समीक्षते','svayaṃvaram':'स्वयंवरः','pārthivāḥ':'पार्थिवः',
 'bhīma-śāsanāt':'शासनम्','nyavedayata':'निवेदयति','nara-īśvara':'ईश्वरः',
 'adhītam':'अधीते','hā':'हा','sāhitya-saṅgīta-kalā-vihīnaḥ':'साहित्यम्, सङ्गीतम्','sākṣāt':'साक्षात्',
 'puccha-viṣāṇa-hīnaḥ':'पुच्छः, विषाणम्','bhāga-dheyam':'भागधेयम्','jīvamānaḥ':'जीवमान (of जीवति)'}
PRE_NOTE = {  # rule 24: the Volume 5 headwords an unseen text contains
 'X1a':'वंशः, c01.l03, in वंशविशुद्धः, here in a new sense, glossed',
 'X2':'भूयः, c02.l02; बिलम्, c02.l04, in बिले, बिलद्वारम्',
 'X3':'सखी, c03.l02, in सखीगणः, दमयन्तीसखीगणात्; सुतः, c02.l04, in its f. सुताम् ×2; यौवनम्, c01.l01, in प्राप्तयौवनाम्',
 'X4b':'पशुः, c01.l03: पशुः, पशूनाम्',
 'X5':'आहारः, in आहारदाने; चिरम्, in चिरात्; अधुना; अनन्तरम्, in तदनन्तरम्',
 'X6':'जीवितम्, c02.l03: जीविते, जीवितम्'}
def occ(k):
    c = {}
    for t in toks(T[k]['pause']): c[t] = c.get(t, 0) + 1
    return c
def r(n, g): return f"1 in {n/g:.1f}" if g else 'none'
def gitem(t, gl): return f"{pdev(t)} {gl}" if gl else pdev(t)
def status(k):
    v = T[k]; n, g, gp, unk, tot = measure(k, v); oc = occ(k)
    pre = set(v.get('pre') or [])
    G = [(t, x) for t, x in v['G'].items() if oc.get(t)]
    Gs = [(t, x) for t, x in G if x]                     # tokens with an empty gloss are covered by a ×2 note
    Lx = [(t, x) for t, x in (v.get('L') or {}).items() if x and oc.get(t) and (k in UNSEEN or t not in pre)]
    out = []; after = None
    if k in SPLIT_FROM or k in ('X2', 'X5', 'X6'):
        rows = dict(A.check(k)); look = [(t, x) for t, x in Gs if rows.get(t)]; gl = [(t, x) for t, x in Gs if not rows.get(t)]
        after = sum(oc[t] for t, _ in G if not rows.get(t))
        def li(t, x): return gitem(t, x) + ' [Apte: ' + ', '.join(iast(h) for h in rows[t]) + ']'
        if k == 'X2':
            five = ['ucchedam', 'sva-jātīyaḥ', 'sarpa-vāṇī', 'sandhānam', 'martya-loke']
            ex = [(t, x) for t, x in Gs if t in five]; mg = [(t, x) for t, x in Gs if t not in five]
            reach = [pdev(t) for t, _ in mg if rows.get(t)]
            out.append("Not owned — **looked up in the exam's Apte extract** (five, with five decoys; `work/aptecheck.py`): "
                       + '; '.join(li(t, x) for t, x in ex) + '. **Glossed in the margin** (eight; the procedure would reach '
                       + f"{len(reach)} of them as well, " + ', '.join(reach) + '): ' + '; '.join(gitem(t, x) for t, x in mg) + '.')
        elif k in ('X5', 'X6'):
            out.append("Not owned — **looked up in the capstone's Apte extract** (with the course glossary of Volumes 1–5; "
                       "no marginal glosses; Apte headword in square brackets, `work/aptecheck.py`): "
                       + '; '.join(li(t, x) for t, x in look) + '. **Course glosses:** '
                       + ('; '.join(gitem(t, x) for t, x in gl) if gl else 'none (the procedure reaches every word not owned)') + '.')
        else:
            out.append("Not owned — **look up** (the c02.l02 procedure reaches them; Apte headword in square brackets, "
                       "`work/aptecheck.py`): " + ('; '.join(li(t, x) for t, x in look) if look else 'none')
                       + '. **Glossed** (the procedure does not reach them): '
                       + ('; '.join(gitem(t, x) for t, x in gl) if gl else 'none') + '.')
    elif k in ('X3', 'X4a', 'X4b'):
        rows = dict(A.check(k))
        out.append("In the **lemma glossary** (G; dictionary form in square brackets; no marginal glosses): "
                   + '; '.join(gitem(t, x) + ' [' + LEMMA[t] + ']' for t, x in Gs) + '.')
        nr = [pdev(t) for t, _ in Gs if not rows.get(t)]
        out.append((f"The c02.l02 procedure would reach {len(Gs)-len(nr)} of these {len(Gs)} in Apte (not: {', '.join(nr)})" if nr
                    else f"The c02.l02 procedure would reach all {len(Gs)} in Apte") + ' (`work/aptecheck.py`).')
    elif k in ('X1a', 'X1b'):
        out.append('Glossed in the margin (G): ' + '; '.join(gitem(t, x) for t, x in Gs) + '.')
    else:
        out.append('Glossed (G): ' + ('; '.join(gitem(t, x) for t, x in Gs) if Gs else 'none') + '.')
    if Lx: out.append('Recognised (L): ' + ' · '.join(f"{pdev(t)} — {x}" for t, x in Lx) + '.')
    if v.get('N'): out.append('Names: ' + ', '.join(pdev(x) for x in v['N']) + '.')
    if k in UNSEEN:
        s = f"**Gloss ratio:** {g} of {n} words not owned at the ledger of that point ({r(n,g)}), names excluded; "
        if pre: s += f"without the Volume 5 headwords it contains ({PRE_NOTE[k]}) {gp} of {n} ({r(n,gp)})"
        else: s += "no Volume 5 headword occurs in it"
    else:
        s = (f"**Gloss ratio:** {g} of {n} words ({r(n,g)}), names excluded; without the lesson's own headwords "
             f"{gp} of {n} ({r(n,gp)})")
    if after is not None: s += f"; course help after Apte {after} of {n}" + (f" ({r(n,after)})" if after else '')
    out.append(s + '.')
    return out
HEADS = ('Glossed (G):', 'Glossed in the margin (G):', 'Not owned —', 'Recognised (L):', 'Names:', '**Gloss ratio:**',
         'In the **lemma glossary**', 'The c02.l02 procedure would reach')
def splice(lines, k, new, text_lines=None, header=None):
    st = [i for i, l in enumerate(lines) if l.startswith(f"**{k}**")]
    assert len(st) == 1, (k, st)
    i0 = st[0]; i1 = i0 + 1
    while i1 < len(lines) and not (lines[i1].startswith('**') and re.match(r'\*\*[A-Z]\d', lines[i1])) and not lines[i1].startswith('### '):
        i1 += 1
    idx = [i for i in range(i0, i1) if lines[i].startswith(HEADS)]
    assert idx and idx == list(range(idx[0], idx[-1] + 1)), (k, idx)
    lines[idx[0]:idx[-1] + 1] = new
    if header: lines[i0] = header
    if text_lines:
        q = [i for i in range(i0, i1) if lines[i].startswith('> ')]
        assert len(q) == 2, (k, q)
        lines[q[0]] = '> ' + text_lines[0]; lines[q[1]] = '> *' + text_lines[1] + '*'
    return lines
ORDER = ['S2c','S3b','S4a','S4b','X1a','X1b','P1','P2','P3','P4','X2','E1','E2','G1','U1','X3','M1','X4a','X4b','X5','X6']
TEXTCH = {'P1','P3','X2','U1'}
if __name__ == '__main__':
    lines = open(PLAN, encoding='utf8').read().split('\n')
    rep = []
    for k in ORDER:
        v = T[k]; new = status(k)
        hdr = f"**{k}** — {v['src']} · `{v['file']}` {v['lines']}"
        tl = (joined(v['et']), v['et']) if k in TEXTCH else None
        rep.append(hdr); rep += new; rep.append('')
        if '--apply' in sys.argv:
            cur = [l for l in lines if l.startswith(f"**{k}**")][0]
            lines = splice(lines, k, new, tl, hdr if k in TEXTCH | {'P4', 'X5'} else None)
            if k not in TEXTCH | {'P4', 'X5'} and cur != hdr: print('HEADER DIFF', k, '\n  plan:', cur, '\n  state:', hdr)
    open(os.path.join(W, 'rep', 'render5.out'), 'w', encoding='utf8').write('\n'.join(rep))
    if '--apply' in sys.argv:
        open(PLAN, 'w', encoding='utf8').write('\n'.join(lines)); print('applied')
    else: print('written rep/render5.out')

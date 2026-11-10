"""Diff every commentary/narrative passage printed in the plan against its GRETIL e-text.
Usage (from the repository root): python3 -I research/evidence/vol4-plan/work/etdiff.py [passages.tsv]
Reads passages.tsv (label<TAB>file-key<TAB>devanagari; default: the copy beside this script),
transliterates the e-texts under $SANSKRITAM_LOCAL/corp/gretil/ with ../tools/i2d.py (plan §5 / c06 spelling rule, G44)."""
import os, re, sys, difflib
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import local  # paths: see ../README.md
HERE = os.path.dirname(os.path.abspath(__file__))
I2D = os.path.join(HERE, '..', 'tools', 'i2d.py')
src = open(I2D, encoding='utf8').read().split('\nfo')[0]  # conv() only
ns = {}; exec(src, ns); conv = ns['conv']
G = ('corp', 'gretil', 'gretil.sub.uni-goettingen.de', 'gretil', '1_sanskr')
FILES = {'kas': G + ('6_sastra', '1_gram', 'jvkasipu.htm'), 'lsk': G + ('6_sastra', '1_gram', 'varlghku.htm'),
         'hit': G + ('5_poetry', '4_narr', 'hitop_u.htm'), 'panc': G + ('5_poetry', '4_narr', 'vispancu.htm'),
         'mbh': G + ('6_sastra', '1_gram', 'pmbhassu.htm')}
VOW = {'अ': '', 'आ': 'ा', 'इ': 'ि', 'ई': 'ी', 'उ': 'ु', 'ऊ': 'ू', 'ऋ': 'ृ', 'ॠ': 'ॄ', 'ए': 'े', 'ऐ': 'ै', 'ओ': 'ो', 'औ': 'ौ'}
def norm(s):
    s = re.sub(r'[^ऀ-ॿ]', '', s)          # drop spaces, latin, punctuation
    s = re.sub(r'[।॥०-९ऽ]', '', s)
    s = re.sub(r'[ङञणनम]्(?=[क-ह])', 'M', s).replace('ं', 'M')
    s = re.sub(r'्([अआइईउऊऋॠएऐओऔ])', lambda m: VOW[m.group(1)], s)  # C् + V -> C+matra (joins)
    return s
cache = {}
def etext(key):
    if key in cache: return cache[key]
    lines = open(local(*FILES[key]), encoding='utf8', errors='replace').read().split('\n')
    buf = []; owner = []
    for i, l in enumerate(lines, 1):
        l = re.sub(r'<[^>]+>', ' ', l); l = re.sub(r'\(\*[^)]*\)', ' ', l)
        d = norm(conv(l))
        buf.append(d); owner += [i] * len(d)
    cache[key] = (''.join(buf), owner); return cache[key]
def locate(E, P):
    for w in (14, 10, 8):
        for off in range(0, max(1, len(P) - w), 3):
            j = E.find(P[off:off + w])
            if j >= 0: return j - off
    return None
out = []
for row in open(sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, 'passages.tsv'), encoding='utf8'):
    if not row.strip() or row.startswith('#'): continue
    label, key, txt = row.rstrip('\n').split('\t')
    E, owner = etext(key); P = norm(txt)
    st = locate(E, P)
    if st is None: out.append(f'{label}: NOT FOUND'); continue
    a = max(0, st - 40); W = E[a:st + len(P) + 80]
    sm = difflib.SequenceMatcher(None, W, P, autojunk=False)
    mb = [m for m in sm.get_matching_blocks() if m.size]
    lo, hi = mb[0].a, mb[-1].a + mb[-1].size
    sm = difflib.SequenceMatcher(None, W[lo:hi], P, autojunk=False)
    diffs = [(op, W[lo + i1:lo + i2], P[j1:j2]) for op, i1, i2, j1, j2 in sm.get_opcodes() if op != 'equal']
    line = owner[min(len(owner) - 1, a + lo)]
    out.append(f'{label} [{key} line {line}]: ' + ('identical' if not diffs else
               '; '.join(f'e-text «{e}» / plan «{p}»' for _, e, p in diffs)))
print('\n'.join(out))

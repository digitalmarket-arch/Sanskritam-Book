# owned lemma set in DCS convention, built by looking up each owned word's surface form in the DCS
import re,sys,collections
sys.path.insert(0,'/home/user/Sanskritam-Book/scripts')
from translit import to_iast
from dcsread import sentences,words,DCS
import glob,os
S='/tmp/claude-0/-home-user-Sanskritam-Book/d8d45eb6-e9e3-564b-9957-8f7e02af29c7/scratchpad/v5/'
def owned_forms(extra=()):
    forms=set()
    for l in open(S+'owned-at-entry.tsv',encoding='utf8'):
        r=l.rstrip('\n').split('\t')
        for w in re.findall(r'[ऀ-ॿ]+',r[1]): forms.add(to_iast(w))
    for w in extra: forms.add(to_iast(w))
    return forms
def surf2lem():
    m=collections.defaultdict(collections.Counter)
    for t in ['Hitopadeśa','Narasiṃhapurāṇa','Kūrmapurāṇa','Liṅgapurāṇa','Matsyapurāṇa','Bhāgavatapurāṇa','Agnipurāṇa','Garuḍapurāṇa']:
        for s in sentences(t):
            for w in words(s):
                lem,pos,feats,un=w[-1]
                m[un][lem]+=1
    return m
def stems(f):
    c={f}
    for e,r in (('ḥ',''),('m',''),('ā','ā'),('ī','ī')):
        if f.endswith(e): c.add(f[:len(f)-len(e)]+r)
    if f.endswith('aḥ') or f.endswith('am'): c.add(f[:-2]+'a')
    if f.endswith('iḥ'): c.add(f[:-2]+'i')
    if f.endswith('uḥ'): c.add(f[:-2]+'u')
    if f.endswith('ā'): c.add(f[:-1]+'an'); c.add(f[:-1]+'ṛ')
    if f.endswith('ī'): c.add(f[:-1]+'in')
    if f.endswith('ān'): c.add(f[:-2]+'at'); c.add(f[:-1]+'t')
    if f.endswith('ḥ'): c.add(f[:-1]+'s'); c.add(f[:-1]+'r'); c.add(f[:-1])
    if f.endswith('t'): c.add(f[:-1]+'d')
    if f.endswith('k'): c.add(f[:-1]+'c'); c.add(f[:-1]+'j')
    return c
def build(extra=()):
    forms=owned_forms(extra); m=surf2lem(); lem=set()
    for f in forms:
        if f in m: lem.add(m[f].most_common(1)[0][0])
        for s in stems(f): lem.add(s)
    return lem

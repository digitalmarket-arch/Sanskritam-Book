#!/usr/bin/env python3
"""owned5.py WORD ... — is a word owned at the entry to Volume 5 (Volumes 1–4)? Prints the lesson that owns it, or '-'.
The list is v5/owned-at-entry.tsv: lesson id, Devanagari, IAST, gloss (Volumes 1–3 from the lessons' §14 tables through v3.c04;
v3.c05–c06 and Volume 4 from the volume plans' headword lines, without IAST or gloss)."""
import re,sys,os
P=os.path.join(os.path.dirname(os.path.abspath(__file__)),'owned-at-entry.tsv')
own={}
for l in open(P,encoding='utf8'):
    r=l.rstrip('\n').split('\t')
    if len(r)<2: continue
    for w in re.findall(r'[ऀ-ॿ]+',r[1]): own.setdefault(w,r[0])
def stem(w):
    for suf in ('ः','म्'):
        if w.endswith(suf): return w[:-len(suf)]
    return w
stems={}
for w,l in own.items(): stems.setdefault(stem(w),(w,l))
def check(w):
    if w in own: return own[w]
    s=stem(w)
    if s in stems: return f'{stems[s][1]} (as {stems[s][0]})'
    return '-'
if __name__=='__main__':
    for w in sys.argv[1:]: print(w, check(w))

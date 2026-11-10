"""IAST to Devanagari, line by line from stdin (read by work/etdiff.py, which takes conv() only).
Run: echo 'bhavati' | python3 -I research/evidence/vol4-plan/tools/i2d.py"""
import sys,re
V={'a':'अ','ā':'आ','i':'इ','ī':'ई','u':'उ','ū':'ऊ','ṛ':'ऋ','ṝ':'ॠ','ḷ':'ऌ','e':'ए','ai':'ऐ','o':'ओ','au':'औ'}
M={'a':'','ā':'ा','i':'ि','ī':'ी','u':'ु','ū':'ू','ṛ':'ृ','ṝ':'ॄ','ḷ':'ॢ','e':'े','ai':'ै','o':'ो','au':'ौ'}
C={'kh':'ख','gh':'घ','ch':'छ','jh':'झ','ṭh':'ठ','ḍh':'ढ','th':'थ','dh':'ध','ph':'फ','bh':'भ','k':'क','g':'ग','ṅ':'ङ','c':'च','j':'ज','ñ':'ञ','ṭ':'ट','ḍ':'ड','ṇ':'ण','t':'त','d':'द','n':'न','p':'प','b':'ब','m':'म','y':'य','r':'र','l':'ल','v':'व','ś':'श','ṣ':'ष','s':'स','h':'ह'}
def conv(t):
    out=[];i=0;prevc=False
    while i<len(t):
        ch=t[i]
        two=t[i:i+2]
        if two in C and len(two)==2: tok=two
        elif ch in C: tok=ch
        else: tok=None
        if tok:
            if prevc: out.append('्')
            out.append(C[tok]); i+=len(tok); prevc=True; continue
        v=None
        if t[i:i+2] in ('ai','au'): v=t[i:i+2]
        elif ch in V: v=ch
        if v:
            out.append(M[v] if prevc else V[v]); i+=len(v); prevc=False; continue
        if prevc: out.append('्'); prevc=False
        if ch=='ṃ': out.append('ं')
        elif ch=='ḥ': out.append('ः')
        elif ch=="'": out.append('ऽ')
        elif ch=='/': out.append('।')
        elif ch=='-': pass
        else: out.append(ch)
        i+=1
    if prevc: out.append('्')
    return ''.join(out)
for line in sys.stdin:
    print(conv(line.rstrip('\n')))

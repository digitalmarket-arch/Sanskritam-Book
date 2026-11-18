import re,sys,os,unicodedata
sys.path.insert(0,'/home/user/Sanskritam-Book/scripts')
from translit import to_iast
HERE=os.path.dirname(os.path.abspath(__file__))
# ---- IAST -> Devanagari (copied logic of research/evidence/vol4-plan/tools/i2d.py)
V={'a':'अ','ā':'आ','i':'इ','ī':'ई','u':'उ','ū':'ऊ','ṛ':'ऋ','ṝ':'ॠ','ḷ':'ऌ','e':'ए','ai':'ऐ','o':'ओ','au':'औ'}
M={'a':'','ā':'ा','i':'ि','ī':'ी','u':'ु','ū':'ू','ṛ':'ृ','ṝ':'ॄ','ḷ':'ॢ','e':'े','ai':'ै','o':'ो','au':'ौ'}
C={'kh':'ख','gh':'घ','ch':'छ','jh':'झ','ṭh':'ठ','ḍh':'ढ','th':'थ','dh':'ध','ph':'फ','bh':'भ','k':'क','g':'ग','ṅ':'ङ','c':'च','j':'ज','ñ':'ञ','ṭ':'ट','ḍ':'ड','ṇ':'ण','t':'त','d':'द','n':'न','p':'प','b':'ब','m':'म','y':'य','r':'र','l':'ल','v':'व','ś':'श','ṣ':'ष','s':'स','h':'ह'}
def i2d(t):
    out=[];i=0;prevc=False
    while i<len(t):
        ch=t[i]; two=t[i:i+2]
        tok=two if (two in C and len(two)==2) else (ch if ch in C else None)
        if tok:
            if prevc: out.append('्')
            out.append(C[tok]); i+=len(tok); prevc=True; continue
        v=t[i:i+2] if t[i:i+2] in ('ai','au') else (ch if ch in V else None)
        if v:
            out.append(M[v] if prevc else V[v]); i+=len(v); prevc=False; continue
        if prevc: out.append('्'); prevc=False
        out.append({'ṃ':'ं','ḥ':'ः',"'":'ऽ','|':'।','-':''}.get(ch,ch)); i+=1
    if prevc: out.append('्')
    return ''.join(out)
# ---- scansion
LONGV=['ai','au','ā','ī','ū','ṝ','e','o']
SHORTV=['a','i','u','ṛ','ḷ']
CONS=['kh','gh','ch','jh','ṭh','ḍh','th','dh','ph','bh','k','g','ṅ','c','j','ñ','ṭ','ḍ','ṇ','t','d','n','p','b','m','y','r','l','v','ś','ṣ','s','h']
def segs(line):
    s=unicodedata.normalize('NFC',line.lower()); out=[]; i=0
    while i<len(s):
        for grp,kind in ((['ai','au'],'V'),(['kh','gh','ch','jh','ṭh','ḍh','th','dh','ph','bh'],'C')):
            if s[i:i+2] in grp: out.append((kind,s[i:i+2])); i+=2; break
        else:
            ch=s[i]
            if ch in LONGV or ch in SHORTV: out.append(('V',ch))
            elif ch in CONS: out.append(('C',ch))
            elif ch in 'ṃḥ': out.append(('X',ch))
            i+=1
    return out
def scan(line):
    """returns list of (syllable_text, 'L'/'G') for a pāda/half-verse; final syllable weight as is (anceps marked by caller)"""
    sg=segs(line); res=[]; idx=[k for k,(t,_) in enumerate(sg) if t=='V']
    for n,k in enumerate(idx):
        v=sg[k][1]; j=k+1; xs=[]; cons=0
        while j<len(sg) and sg[j][0]!='V':
            if sg[j][0]=='X': xs.append(sg[j][1])
            else: cons+=1
            j+=1
        last = (n==len(idx)-1)
        heavy = v in LONGV or bool(xs) or (cons>=2) or (last and cons>=1)
        # syllable text: onset consonants before vowel
        st=k
        while st>0 and sg[st-1][0]=='C' and (n==0 or st-1>idx[n-1]+ (1 if True else 0)):
            st-=1
        res.append((v,'G' if heavy else 'L'))
    return res
def pattern(line): return ''.join(w for _,w in scan(line))
def count(line): return len(scan(line))
# ---- owned list
def load_owned():
    own={}
    for l in open(os.path.join(HERE,'..','owned-at-entry.tsv'),encoding='utf8'):
        r=l.rstrip('\n').split('\t')
        if len(r)<2: continue
        for w in re.findall(r'[ऀ-ॿ]+',r[1]): own.setdefault(w,r[0])
    return own
if __name__=='__main__':
    for a in sys.argv[1:]: print(a, pattern(a), count(a))

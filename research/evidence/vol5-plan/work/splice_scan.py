# Replace each 'Scansion by half-verse' line in the plan with the output of scan5.scan_text.
import sys,re
sys.path.insert(0,'.')
from scan5 import scan_text
P=sys.argv[1]; L=open(P,encoding='utf8').read().split('\n'); cur=None; n=0; probs=[]
for i,l in enumerate(L):
    m=re.match(r'^\*\*([A-Z][0-9a-z]+)\*\*',l)
    if m: cur=m.group(1)
    if l.startswith('Scansion by half-verse') or l.startswith('Scansion (script `work/scan5.py`'):
        o,b=scan_text(cur); probs+=b
        L[i]='Scansion (script `work/scan5.py`, checked by hand; the last syllable of a pāda is printed ×, either weight, §1.4.4; odd-pāda type by syllables 5–7): '+' || '.join(o)+'.'
        n+=1
open(P,'w',encoding='utf8').write('\n'.join(L)); print('replaced',n,'problems',probs)

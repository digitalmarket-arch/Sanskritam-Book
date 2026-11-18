# Find anuṣṭubh verses of the Hitopadeśa e-text, not cited in the Volume 3, 4 or 5 plans, whose
# fourth pāda is made only of forms the learner owns (owned-at-entry forms, simple endings).
import re,sys
sys.path.insert(0,'.')
from v5tools import pattern
from measure import guess
F=sys.argv[1]; L=open(F,encoding='utf8').read().split('\n')
cited=set()
for p in ['/home/user/Sanskritam-Book/research/notes/vol3-plan.md','/home/user/Sanskritam-Book/research/notes/vol4-plan.md','../vol5-plan.md']:
    cited|=set(re.findall(r'Hit (\d\.\d+)',open(p,encoding='utf8').read()))
for i,l in enumerate(L):
    m=re.search(r'//\s*Hit_(\d)\.(\d+)\s*//',l)
    if not m: continue
    num=f'{m.group(1)}.{m.group(2)}'
    if num in cited: continue
    a=re.sub(r'<[^>]*>','',L[i-1]).strip(' |'); b=re.sub(r'<[^>]*>|//.*','',l).strip(' |')
    if len(pattern(a))!=16 or len(pattern(b))!=16: continue
    words=b.split()
    # 4th pāda: last words making 8 syllables
    acc=[];n=0
    for w in reversed(words):
        acc.insert(0,w); n=len(pattern(' '.join(acc)))
        if n>=8: break
    if n!=8: continue
    if all(guess(w.replace("'",'')) for w in acc):
        print(num,i,'|',a,'|',b,'| 4th:',' '.join(acc))

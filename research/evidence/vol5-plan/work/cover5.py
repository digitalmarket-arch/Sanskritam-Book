# DCS Hitopadeśa, prose-like sentences: share of words with a lemma not owned, at entry and at exit
# (entry lemma set own_entry.pkl + this plan's 124 headwords, IAST stems).
import pickle,sys,re,collections
sys.path.insert(0,'.')
import corpusmeasure as cm
from dcsread import sentences
sys.argv=['x']; exec(open('ledgercheck.py').read().split("print('total new'")[0].replace("P=sys.argv[1]","P='../vol5-plan.md'"))
own=pickle.load(open('own_entry.pkl','rb'))
def stem(ia):
    ia=ia.strip(',;')
    for e,r in (('aḥ','a'),('am','a'),('ā','ā'),('iḥ','i'),('uḥ','u'),('ī','ī'),('ḥ','s')):
        if ia.endswith(e): return {ia[:-len(e)]+r, ia}
    return {ia}
add=set()
for lid,(n,words,a,b) in heads.items():
    for d,ia in words:
        add|=stem(ia)
        if ia.endswith('ati') or ia.endswith('ate') or ia.endswith('iti'): add.add(ia)  # verbs: DCS lemma is the root; reported as a lower bound
S=list(sentences('Hitopadeśa'))
prose=[s for s in S if len(s['text'].split())>12]
n,g,_=cm.measure_sents(prose,own); n2,g2,_=cm.measure_sents(prose,own|add)
print(f'entry: {n} words, not owned {g} (1 in {n/g:.2f}); exit: not owned {g2} (1 in {n2/g2:.2f})')

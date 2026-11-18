import pickle,sys,re,collections,statistics
sys.path.insert(0,'.')
from dcsread import sentences,words
UPA=['pratyā','samā','samud','samut','abhyud','upā','pary','pari','prati','anu','abhi','adhi','ava','apa','api','ati','sam','pra','parā','nir','niḥ','nis','dur','vi','ni','ud','ut','upa','ā']
SUF=['tā','tva','vat','mat','in','ka']
def known(lem,own):
    if lem in own: return True
    for s in SUF:
        if lem.endswith(s) and lem[:-len(s)] in own: return True
        if lem.endswith(s) and lem[:-len(s)]+'a' in own: return True
    x=lem
    for _ in range(3):
        for u in sorted(UPA,key=len,reverse=True):
            if x.startswith(u) and len(x)>len(u)+1:
                x=x[len(u):]
                if x in own: return True
                break
        else: break
    if lem.startswith('a') and lem[1:] in own: return True
    if lem.startswith('an') and lem[2:] in own: return True
    return False
def measure_sents(sents,own,names=set()):
    n=g=0; glist=collections.Counter()
    for s in sents:
        ws=words(s)
        for i,w in enumerate(ws):
            lems=[x[0] for x in w]
            if all(l in names for l in lems): continue
            if w[-1][1] in ('PUNCT','NUM'): continue
            n+=1
            bad=[l for l in lems if l not in names and not known(l,own)]
            if bad: g+=1; glist.update(bad)
    return n,g,glist
def names_of(sents):
    nm=set()
    for s in sents:
        ws=words(s)
        for i,w in enumerate(ws[:-1]):
            if ws[i+1][-1][0] in ('nāman','nāmadheya','abhidhāna') or (ws[i+1][0][0] in ('nāman',)):
                for x in w: nm.add(x[0])
    return nm
if __name__=='__main__':
    own=pickle.load(open(sys.argv[1],'rb'))
    S=list(sentences('Hitopadeśa'))
    nm=names_of(S)|{'damanaka','karaṭaka','hiraṇyaka','citragrīva','laghupatanaka','piṅgalaka','saṃjīvaka','vīravara','śūdraka','citravarṇa','hiraṇyagarbha','meghavarṇa','cakravāka','sudarśana','viṣṇuśarman','manthara','pāṭaliputra','bhāgīrathī','godāvarī','gaṇḍakī','kṣudrabuddhi','jaradgava','dīrghakarṇa','karpūrapaṭaka','vārāṇasī','śaktidhara','sarvamaṅgalā','lakṣmī_','śiva','viṣṇu','indra','brahman'}
    nm.discard('lakṣmī')
    by=collections.defaultdict(list)
    for s in S: by[s['chap']].append(s)
    tot_n=tot_g=0; allg=collections.Counter()
    for c,ss in by.items():
        prose=[s for s in ss if len(s['text'].split())>12]   # long sentences ~ prose
        n,g,gl=measure_sents(prose,own,nm); tot_n+=n; tot_g+=g; allg.update(gl)
        print(f"{c[:30]:30s} words {n:6d} glossed {g:5d} = 1 in {n/max(g,1):.2f}")
    print(f"ALL prose-like sentences: {tot_n} words, {tot_g} glossed: 1 in {tot_n/max(tot_g,1):.2f}")
    print('top unowned:',allg.most_common(60))

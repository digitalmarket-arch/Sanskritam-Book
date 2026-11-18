import re
from v5tools import pattern
# gana expansion
GA={'m':'GGG','y':'LGG','r':'GLG','s':'LLG','t':'GGL','j':'LGL','bh':'GLL','n':'LLL','g':'G','l':'L'}
def exp(seq): return ''.join(GA[x] for x in seq.split())
MET={
 'indravajrā':exp('t t j g g'),'upendravajrā':exp('j t j g g'),
 'vaṃśastha':exp('j t j r'),'indravaṃśā':exp('t t j r'),'drutavilambita':exp('n bh bh r'),
 'vasantatilakā':exp('t bh j j g g'),'mālinī':exp('n n m y y'),'śikhariṇī':exp('y m n s bh l g'),
 'mandākrāntā':exp('m bh n t t g g'),'śārdūlavikrīḍita':exp('m s j s t t g'),'sragdharā':exp('m r bh n y y y'),
 'rathoddhatā':exp('r n r l g'),'pṛthvī':exp('j s j s y l g'),'hariṇī':exp('n s m r s l g'),'svāgatā':exp('r n bh g g'),
}
def ident(p):
    out=[]
    for k,v in MET.items():
        if len(p)==len(v) and p[:-1]==v[:-1]: out.append(k)
    return out
if __name__=='__main__':
    for k,v in MET.items(): print(k,len(v),v)

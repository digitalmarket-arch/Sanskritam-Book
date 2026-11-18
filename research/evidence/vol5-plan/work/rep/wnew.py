# Devanagari (joined, from the e-text IAST) and scansion (pāda-final ×) for the §5.6 entries added at the repair.
import sys; sys.path.insert(0,'/tmp/claude-0/-home-user-Sanskritam-Book/d8d45eb6-e9e3-564b-9957-8f7e02af29c7/scratchpad/v5/work')
import os; os.chdir('/tmp/claude-0/-home-user-Sanskritam-Book/d8d45eb6-e9e3-564b-9957-8f7e02af29c7/scratchpad/v5/work')
from render import joined
from v5tools import pattern
from metres import ident
from scan5 import sym, VIP
W={  # key: (IAST as the e-text has it, kind)  kind: anu = anuṣṭubh by half-verse; tri = 11/12-syllable pādas; m17 = 17-syllable pādas; prose
'W12':("udyamenaiva kāryāṇi sidhyanti na manorathaiḥ | nahi suptasya siṃhasya viśanti vadane mṛgāḥ ||",'anu'),
'W13':("mātā śatruḥ pitā vairī bālā yena na pāṭhitāḥ | sabhāmadhye na śobhante haṃsamadhye bakāyathā ||",'anu'),
'R1':("brahmārpaṇaṃ brahmahavir brahmāgnau brahmaṇā hutam | brahmaiva tena gantavyaṃ brahmakarmasamādhinā ||",'anu'),
'R2':("auṃ | saha nāv avatu | saha nau bhunaktu | saha vīryaṃ karavāvahai | tejasvi nāv adhītam astu | mā vidviṣāvahai | auṃ śāntiḥ śāntiḥ śāntiḥ |",'prose'),
'W14':("śāntiḥ śāntiḥ śāntir iti trir vacanaṃ sarvadoṣopaśamanārtham ity om iti ||",'prose'),
'W15':("vidvattvaṃ ca nṛpatvaṃ ca naiva tulyaṃ kadācana | sva-deśe pūjyate rājā vidvān sarvatra pūjyate ||",'anu'),
'W16':("bubhukṣitaḥ kiṃ na karoti pāpaṃ kṣīṇā janā niṣkaruṇā bhavanti | ākhyāhi bhadre priya-darśanasya na gaṅgadattaḥ punar eti kūpam ||",'tri'),
'W17':("mā ca karma-phalayor hetu-bhūḥ |",'prose'),
'W18':("asty uttarasyāṃ diśi devatātmā himālayo nāma nagādhirājaḥ | pūrvāparau toyanidhī vigāhya sthitaḥ pṛthivyā iva mānadaṇḍaḥ ||",'tri'),
'W19':("kaś cit kāntāvirahaguruṇā svādhikārapramattaḥ śāpenāstaṅgamitamahimā varṣabhogyeṇa bhartuḥ | yakṣaś cakre janakatanayāsnānapuṇyodakeṣu snigdhacchāyātaruṣu vasatiṃ rāmagiryāśrameṣu ||",'m17'),
'W20':("mandākrāntā jaladhiṣaḍagaiḥ mbhau natau tādgurū cet ||",'m17'),
'W21':("vāgarthāv iva saṃpṛktau vāgarthapratipattaye | jagataḥ pitarau vande pārvatīparameśvarau ||",'anu'),
'W22a':("varṇāvṛttir anuprāsaḥ pādeṣu ca padeṣu ca | pūrvānubhavasaṃskārabodhinī yady adūratā ||",'anu'),
'W22b':("candre śaranniśottaṃse kundastabakavibhrame | indranīlanibhaṃ lakṣma saṃdadhāty alinaḥ śriyam ||",'anu'),
'W22c':("cāru cāndramasaṃ bhīru bimbaṃ paśyaitad ambare | manmano manmathākrāntaṃ nirdayaṃ hantum udyataṃ ||",'anu'),
'W22d':("ity anuprāsam icchanti nātidūrāntaraśrutim |",'anu'),
'W23':("upamā kālidāsasya bhāraverarthagauravam | daṇḍinaḥ padalālityaṃ māghe santi trayo guṇāḥ ||",'anu'),
'W24':("evaṃ cātra mayūravyaṃsakāditvād rūpakasamāsa eva |",'prose'),
}
def halves(t): return [h.strip() for h in t.replace('||','|').split('|') if h.strip()]
def scan(k):
    t,kind=W[k]; out=[]; bad=[]
    if kind=='prose': return '',[]
    for h in halves(t):
        p=pattern(h)
        if kind=='anu':
            if len(p)==16:
                a,b=p[:8],p[8:]
                if b[4:7]!='LGL': bad.append((k,'even',b))
                out.append(f"{sym(a)} {VIP.get(a[4:7],'?')} / {sym(b)}")
            elif len(p)==8: out.append(f"{sym(p)} {VIP.get(p[4:7],'?')}")
            else: bad.append((k,'count',len(p))); out.append(f"{sym(p)} ({len(p)})")
        else:
            n={'tri':11,'m17':17}[kind]
            if len(p)%n: bad.append((k,'count',len(p)))
            segs=[p[i:i+n] for i in range(0,len(p),n)]
            out.append(' / '.join(f"{sym(s)} {'/'.join(ident(s)) or '?'}" for s in segs))
    return ' · '.join(out),bad
if __name__=='__main__':
    allbad=[]
    for k,(t,kind) in W.items():
        s,b=scan(k); allbad+=b
        print(k,'DEV:',joined(t)); print('   SCAN:',s)
    print('PROBLEMS',allbad)

# Joined Devanagari and scansion for the W displays of plan §5.6 (from the e-text IAST lines).
import sys; sys.path.insert(0,'.')
from render import joined
from v5tools import pattern
from metres import ident
W={
'W1':"triṣv apy adhyāhāraḥ kartavyaḥ |",
'W2':"karmaṇy evādhikāro na jñāna-niṣṭhāyāṃ te tava | tatra ca karma kurvataḥ mā phaleṣu adhikāro 'stu … | yadā karma-phale tṛṣṇā te syāt tadā karma-phala-prāpter hetuḥ syāḥ , evaṃ mā karma-phala-hetuḥ bhūḥ | yadā hi karma-phala-tṛṣṇā-prayuktaḥ karmaṇi pravartate tadā karma-phalasyaiva janmano hetur bhavet |",
'W3':"dvā suparṇā sayujā sakhāyā samānaṃ vṛkṣaṃ pariṣasvajāte | tayor anyaḥ pippalaṃ svādv atty anaśnann anyo abhicākaśīti ||",
'W4':"tasyaivaṃ bruvataś cintā babhūva hṛdi vīkṣataḥ | śokārtenāsya śakuneḥ kim idaṃ vyāhṛtaṃ mayā || cintayan sa mahāprājñaś cakāra matimān matim | śiṣyaṃ caivābravīd vākyam idaṃ sa munipuṃgavaḥ || pādabaddho 'kṣarasamas tantrīlayasamanvitaḥ | śokārtasya pravṛtto me śloko bhavatu nānyathā ||",
'W5':"yasya na savidhe dayitā davadahanas tuhinadīdhitis tasya | yasya ca savidhe dayitā davadahanas tuhinadīdhitis tasya ||",
'W6':"kṣīyante khalu bhūṣaṇāni satataṃ vāg-bhūṣaṇaṃ bhūṣaṇam ||",
'W7':"janapade na gadaḥ padam ādadhāv abhibhavaḥ kuta eva sapatnajaḥ | kṣitir abhūt phalavaty ajanandane śamarate 'maratejasi pārthive ||",
'W8':"adhigata-paramārthān paṇḍitān māvamaṃsthās tṛṇam iva laghu lakṣmīr naiva tān saṃruṇaddhi | abhinava-mada-lekhā-śyāma-gaṇḍa-sthalānāṃ na bhavati bisatantur vāraṇaṃ vāraṇānām ||",
'W9':"caturtha ekākinaḥ parimitapariṣado vā pūrvāhnabhāgavihitasya kāvyasya parīkṣā | rasāveśataḥ kāvyaṃ viracayato na ca vivektrī dṛṣṭis tasmād anuparīkṣeta |",
'W10':"sukham āpatitaṃ sevyaṃ duḥkham āpatitaṃ tathā | cakravat parivartante duḥkhāni ca sukhāni ca ||",
'W11':"mṛga-tṛṣṇā-samaṃ vīkṣya saṃsāraṃ kṣaṇa-bhaṅguram | sajjanaiḥ saṅgataṃ kuryād dharmāya ca sukhāya ca ||",
}
def sym(p): return ' '.join('−' if c=='G' else '⏑' for c in p)
VIP={'LGG':'pathyā','LLL':'na-vipulā','GLL':'bha-vipulā','GLG':'ra-vipulā','GGL':'ta-vipulā','GGG':'ma-type'}
for k,v in W.items():
    print(k,'DEV',joined(v))
    if k in ('W4','W10','W11'):
        for half in [h for h in v.replace('||','|').split('|') if h.strip()]:
            p=pattern(half); print('   ',len(p),sym(p[:8]),VIP.get(p[4:7],'?'),'/',sym(p[8:]))
    if k in ('W6','W7','W8'):
        for half in [h for h in v.replace('||','|').split('|') if h.strip()]:
            p=pattern(half)
            for seg in ([p] if len(p)==19 else [p[:len(p)//2],p[len(p)//2:]]):
                print('   ',len(seg),sym(seg),ident(seg))

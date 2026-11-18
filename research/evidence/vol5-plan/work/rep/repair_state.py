# Repair of token statuses and texts (critique gaps G4, G6, G14, G15, G24, G53, G72, G74; deputy's additions recorded in §7.4).
# Reads texts_state.synth.py (the synthesis state), writes texts_state.py.
import sys,copy
sys.path.insert(0,'/tmp/claude-0/-home-user-Sanskritam-Book/d8d45eb6-e9e3-564b-9957-8f7e02af29c7/scratchpad/v5/work')
ns={}; exec(open('/tmp/claude-0/-home-user-Sanskritam-Book/d8d45eb6-e9e3-564b-9957-8f7e02af29c7/scratchpad/v5/work/texts_state.synth.py',encoding='utf8').read(),ns)
T=copy.deepcopy(ns['T'])
def G(k,t,gl):   # code t glossed
    T[k]['G'][t]=gl; T[k].get('L',{}).pop(t,None)
    if t in (T[k].get('pre') or []): T[k]['pre'].remove(t)
def L(k,t,gl):   # code t recognised (owned lemma / taught formation / card)
    T[k]['G'].pop(t,None); T[k].setdefault('L',{})[t]=gl
    if t in (T[k].get('pre') or []): T[k]['pre'].remove(t)
def P(k,t,gl=None):   # this lesson's headword (known with, unknown without)
    T[k]['G'].pop(t,None)
    if gl: T[k].setdefault('L',{})[t]=gl
    T[k].setdefault('pre',[]); 
    if t not in T[k]['pre']: T[k]['pre'].append(t)
def unpre(k,*ts):
    for t in ts:
        if t in (T[k].get('pre') or []): T[k]['pre'].remove(t)
# ---- G4: lemma not owned, coded T/L -> G
G('S2c','dravyam','"a thing, substance" (dravyam: not owned, no Volume 5 headword)')
G('X1a','pūjyate','"is honoured" (passive of pūjayati, not owned; Volume 4 glossed it)')
G('P1','ānandya','"having gladdened" (causative of ā + nand, -ya: the c02.l01 card\'s formation on a verb not owned)')
G('P2','āsāditavān','"reached" (-tavat of ā-sādayati, not owned)')
G('P2','viśvāsa-ghātaka','"betrayer of trust" (voc.; ghātaka not owned)')
G('P3','anukampanīyaḥ','"to be pitied" (-anīya gerundive, this lesson\'s formation, of anu-kampate, not owned)')
G('P3','sampūjya','"having worshipped" (sam + pūjayati, -ya; pūjayati not owned)')
G('P3','ciccheda','"cut off" (perfect 3sg of chinatti, not owned)')
G('P3','mat-vidhāḥ','"such as I" (mad- + vidha "kind"; vidha not owned)')
G('P3','sa-dāra-putraḥ','"with wife and son" (dārāḥ "wife" not owned)')
G('P4','tat-vināśāya','"for its destruction" (vināśaḥ not owned)')
G('P4','matsya-māṃsa-khaṇḍāni','"pieces of fish-meat" (khaṇḍa "piece" not owned)')
G('P4','vināśayati','"destroys" (causative of vi + naś; naśyati not owned)')
G('X2','vedmi','"I know" (1sg of vetti, not owned)')
G('E1','rāja-indra','"best of kings" (voc. formula; indra not owned)')
G('E2','upacakrame','"set about" (Ā perfect 3sg of upa + kramate, not owned; the form is the V5-D3 card\'s)')
G('E2','nyavedayat','"reported" (impf. of ni + vedayati, not owned)')
G('X3','nyavedayata','"reported" (impf. Ā of ni + vedayati, not owned)')
G('X3','nara-īśvara','"lord of men" (voc.; īśvara not owned)')
G('M1','prārabhyate','"is begun" (impersonal passive of pra + ā + rabhate, not owned; ārambhaḥ is a noun)')
G('M1','prārabhya','"having begun" (-ya)')
G('M1','prārabdham','"what has been begun" (-ta)')
G('X4a','hā','"alas" (×2; interjection)')
G('X5','tat-gṛha-dravyāṇi','"the goods of his house" (dravyam not owned)')
G('X5','gṛha-rakṣām','"guard of the house" (rakṣā f. not owned; rakṣati is)')
# deputy's additions of the same kind (G4): E1 prajā-kāmaḥ (kāmaḥ is c03.l02's headword, after E1)
G('E1','prajā-kāmaḥ','"desiring offspring" (×2; bahuvrīhi; kāmaḥ is headworded only in c03.l02)')
# ---- G6: headwords coded G -> this lesson's headword ('pre')
P('E2','giram','gīḥ (this lesson\'s headword), acc.')
P('E2','mānuṣīm','mānuṣaḥ (this lesson\'s headword), f. acc.')
P('E2','mānuṣāḥ','mānuṣaḥ (this lesson\'s headword)')
P('G1','saṅgaḥ','saṅgaḥ (this lesson\'s headword)')
P('G1','saṅgam','saṅgaḥ (this lesson\'s headword), acc.')
P('U1','vai','vai (this lesson\'s headword)')
P('S4a','tapaḥ','tapaḥ (this lesson\'s headword; s-stem tapas)')
# owned words coded G -> L
L('P2','nikṛntati','ni + kṛntati (owned v2.c06.l02) "cuts down"')
L('X3','abhijagmuḥ','perfect 3pl of abhi + gacchati (owned; the perfect taught V4)')
L('X4a','sīdasi','2sg of sīdati (owned v4.c03.l02) "you sink"')
# deputy's additions of the same kind (G6)
L('X2','ehi','ā + ihi, ipv. 2sg of eti (owned v4.c03.l03) "come!" (×3)')
L('E1','udārān','udāraḥ "noble" (owned v3.c05), acc. pl.')
L('E2','samutpatya','sam + ut + patati (owned), -ya "flying up"')
L('E2','samupādhāvat','impf. of sam + upa + ā + dhāvati (owned) "ran up to"')
L('E2','tvaramāṇā','-māna of tvarate (owned v4.c05.l01) "hurrying"')
L('P4','prakṣipa','pra + kṣipati (owned v2.c06.l01), ipv. "throw"')
L('M1','pratihanyamānāḥ','prati + passive -māna of hanti (owned; passive -māna taught c02.l03 §15) "being beaten back"')
P('M1','vighna-vihatāḥ','vighnaḥ (this lesson\'s headword) + vi-hata (-ta of hanti, owned) "struck by obstacles"')
# owned-at-entry or earlier-lesson words wrongly in 'pre'
unpre('S4b','khala-sat-janānām'); unpre('P1','kūpa-madhye','kūpa-madhyāt'); unpre('P2','vihasya')
L('P2','vihasya','vi + hasati (owned), -ya')
unpre('E2','pakṣiṇam','vācam','priyam','haṃsān','haṃsam','haṃsāḥ','haṃsena','sadṛśaḥ','hṛṣṭā','kanyām')
unpre('G1','yogaḥ','yoga-sthaḥ','adhikāraḥ'); unpre('U1','mṛtyoḥ','mṛtyuḥ'); unpre('M1','madhyāḥ')
unpre('S3b','hīnāḥ'); unpre('S3b2','hīnāḥ')   # hīnaḥ is c01.l02's headword, S3b is c01.l03's text
# this lesson's headword inside a token not in 'pre'
P('P1','ātma-pratibimbam'); P('P3','upahārī-karoṣi'); P('E2','āste')
# ---- G72 / G74: unseen texts reported both ways: 'pre' = the Volume 5 headwords they contain
T['X1a']['pre']=['vaṃśa-viśuddhaḥ']; T['X1a']['L']['vaṃśa-viśuddhaḥ']='vaṃśaḥ (c01.l03, "family line") in a new sense, "bamboo" (rule 27, adds 0; glossed) + vi-śuddha "pure"'
T['X3']['pre']=['sakhī-gaṇaḥ','damayantī-sakhī-gaṇāt','sutām','prāpta-yauvanām']
T['X4b']['pre']=['paśuḥ','paśūnām']
T['X5']['pre']=['āhāra-dāne','cirāt','adhunā','tat-anantaram']
T['X6']['pre']=['jīvite','jīvitam']
T['X2']['pre']=['bhūyaḥ','bile','bila-dvāram']   # bhūyaḥ (c02.l02), bilam (c02.l04)
# aśvinoḥ: the Aśvins, a name
T['E2']['G'].pop('aśvinoḥ',None); T['E2']['N'].append('aśvinoḥ')
# ---- text changes
# G24: P1 gets its frame (Panc 1.237 introduced by uktaṃ ca, katham etat, sa āha)
T['P1']['lines']='1371 (end); 1373–1374; 1376; 1378; 1383; 1453 (part); 1455'
T['P1']['et']="… uktaṃ ca — yasya buddhir balaṃ tasya nirbuddhes tu kuto balam | vane siṃho madonmattaḥ śaśakena nipātitaḥ || karaṭaka āha — katham etat ? sa āha — "+T['P1']['et']
T['P1']['pause']="… uktam ca — yasya buddhiḥ balam tasya nirbuddheḥ tu kutaḥ balam | vane siṃhaḥ mada-unmattaḥ śaśakena nipātitaḥ || karaṭakaḥ āha — katham etat ? saḥ āha — "+T['P1']['pause']
T['P1']['N'].append('karaṭakaḥ')
G('P1','mada-unmattaḥ','"mad with pride" (madaḥ owned; unmatta not owned)')
L('P1','nirbuddheḥ','nir + buddhiḥ (bahuvrīhi) "of one without intelligence"')
L('P1','nipātitaḥ','ni + causative -ta of patati (this lesson\'s card) "brought down"')
L('P1','uktam','-ta of vakti')
# G14: P3 prints rājā ca sāṣṭāṅga-pātaṃ praṇamyovāca in full; lines corrected
T['P3']['lines']='2958; 2962; 2969 (part); 2972–2973; 2976 (part)'
T['P3']['et']=T['P3']['et'].replace("rājā ca … uvāca —","rājā ca sāṣṭāṅga-pātaṃ praṇamyovāca —")
T['P3']['pause']=T['P3']['pause'].replace("rājā ca … uvāca —","rājā ca sa-aṣṭa-aṅga-pātam praṇamya uvāca —")
G('P3','sa-aṣṭa-aṅga-pātam','"with a full prostration (of the eight limbs)" (pātaḥ "fall" not owned)')
G('P3','praṇamya','"having bowed" (pra + nam, -ya; namati not owned)')
# G53: X2 opens with the first sentence of 5323
T['X2']['lines']='5323 (first sentence); 5328; 5336; 5338'
T['X2']['et']="kasmiṃścit kūpe gaṅgadatto nāma maṇḍūka-rājaḥ prativasati sma | … "+T['X2']['et']
T['X2']['pause']="kasmiṃścit kūpe gaṅgadattaḥ nāma maṇḍūka-rājaḥ prativasati sma | … "+T['X2']['pause']
T['X2']['N'].append('gaṅgadattaḥ')
G('X2','maṇḍūka-rājaḥ','"frog-king" (maṇḍūkaḥ "frog" not owned)')
# G15: U1 prints 394–400; the pause form keeps the e-text's vā (396)
T['U1']['lines']='394–400'
T['U1']['et']=T['U1']['et']+" mṛtyor māmṛtaṃ gamayeti | nātra tirohitam ivāsti |"
T['U1']['pause']=T['U1']['pause'].replace('mṛtyuḥ vai asat','mṛtyuḥ vā asat',1)+" mṛtyoḥ mā amṛtam gamaya iti | na atra tirohitam iva asti |"
G('U1','tirohitam','"hidden" (tiras + hita)')
L('U1','vā','vā (owned "or") in a new sense, "indeed" (MW: "= eva, laying stress on the preceding word"; rule 27, adds 0; glossed)')
T['U1']['tr']=T['U1']['tr']+" 'From death lead me to the deathless': here nothing is hidden, as it were."
# G16: S3c2 printed as the e-text has it (signs of its header kept in 'et_print')
T['S3c2']['et_print']="yathā hy ekena cakreṇa rathasya na gatir (bhavet / evam puruṣa.kāreṇa vinā daivam na (sidhyati //"
# G25: P4 is the story abridged; 2482 is 1.439cd
T['P4']['src']='Pañcatantra 1, story 21 (the herons, the snake and the mongoose), abridged, with the second half of its verse 1.439'
T['P4']['lines']='2482 (1.439cd); 2490 (first three sentences); 2492; 2498; 2500 (first sentence)'
# G5: X5's cut is bridged in English; 1497 is printed to mandādaraḥ
T['X5']['lines']='1495; 1497 (to mandādaraḥ); 1513 (first sentence); 1499–1511 in an English bridge'
# G49: dhanuḥ is masculine here
G('X1a','dhanuḥ','"bow" (masculine here, agreeing with -viśuddhaḥ and nirguṇaḥ: MW dhanu m., citing Hit.; the common stem is neuter dhanus)')
# G75, G50: anvayas
T['S3a']['anv']='parivartini saṃsāre mṛtaḥ kaḥ vā na jāyate | saḥ jātaḥ yena jātena vaṃśaḥ samunnatim yāti ||'
T['P1']['src']='Pañcatantra 1, story 8 (Bhāsuraka), with its frame: the thesis verse, the opening and the end'
T['P1']['lines']="1371 (end); 1373–1374; 1376; 1378; 1383 (to tṛptir bhavati); 1453 (from tataḥ so 'pi); 1455"
T['S4b']['anv']='khala-sat-janānām [khalānām sat-janānām ca] maitrī dinasya pūrva-ardha-para-ardha-bhinnā [pūrva-ardha-para-ardhābhyām bhinnā] chāyā iva ārambha-gurvī [ārambhe gurvī] krameṇa kṣayiṇī purā laghvī paścāt vṛddhimatī ca (bhavati) ||'
L('P3','adṛśyā',"a- + dṛśya, the -ya gerundive of dṛś, kyap by 3.1.110 (this lesson's point)")
open('/tmp/claude-0/-home-user-Sanskritam-Book/d8d45eb6-e9e3-564b-9957-8f7e02af29c7/scratchpad/v5/work/texts_state.py','w',encoding='utf8').write('T='+repr(T)+'\n')
print('written')

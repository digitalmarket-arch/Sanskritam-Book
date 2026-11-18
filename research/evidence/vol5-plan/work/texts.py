# The Volume 5 canon: e-text IAST (speech dashes normalised to " — "), pause form (IAST, compound members hyphenated),
# glossed tokens (pause-form IAST -> gloss), names, and the lesson headwords that occur in the text.
# Ratios are computed by measure.py.  "pre" = tokens that are the lesson's own new headwords (for the both-ways figure).
T={}
def add(k,**kw): T[k]=kw

# ---------------- Chapter 1 ----------------
add('S1a',src='Hit 0.10',file='hitop_u.htm',lines='133-134',
 et="aneka-saṃśayocchedi parokṣārthasya darśakam | sarvasya locanaṃ śāstraṃ yasya nāsty andha eva saḥ ||",
 pause="aneka-saṃśaya-ucchedi parokṣa-arthasya darśakam | sarvasya locanam śāstram yasya na asti andhaḥ eva saḥ ||",
 anv="śāstram aneka-saṃśaya-ucchedi parokṣa-arthasya darśakam sarvasya locanam (asti) | yasya (tat) na asti saḥ andhaḥ eva ||",
 tr="Learning cuts away many a doubt, shows what lies beyond sight, and is the eye of all: whoever lacks it is simply blind.",
 G={'aneka-saṃśaya-ucchedi':'"cutting off many doubts" (ucchedin, an agent in -in of ud + √chid: G; saṃśayaḥ is the lesson\'s headword)'},
 L={'darśakam':'the agent in -aka of दृश्, as कारकः (v4.c06.l04 task B)'},
 pre=['parokṣa-arthasya','locanam','andhaḥ'])
add('S1b',src='Hit 0.11',file='hitop_u.htm',lines='136-137',
 et="yauvanaṃ dhana-sampattiḥ prabhutvam avivekitā | ekaikam apy anarthāya kim u yatra catuṣṭayam ||",
 pause="yauvanam dhana-sampattiḥ prabhutvam avivekitā | eka-ekam api anarthāya kim u yatra catuṣṭayam ||",
 anv="yauvanam dhana-sampattiḥ prabhutvam avivekitā (ca) — eka-ekam api anarthāya (bhavati) | yatra catuṣṭayam (tatra) kim u ||",
 tr="Youth, wealth in plenty, power, want of judgement: each one alone makes for ruin — what then where all four come together?",
 G={'dhana-sampattiḥ':'"abundance of wealth" (sampattiḥ f. "success, plenty")','anarthāya':'"for harm, ruin" (an-arthaḥ "what is not good", lexicalised)','catuṣṭayam':'"set of four" (taddhita -taya on catur, not taught)'},
 L={'prabhutvam':'prabhuḥ (headword) + -tva (v4.c04.l03)','avivekitā':'a- + vivekin (vivekaḥ headword + -in) + -tā (v4.c04.l03)','eka-ekam':'"each single one" (eka + eka)','kim':'kim u: the lesson\'s chunk किमु'},
 pre=['yauvanam','prabhutvam','avivekitā','u'])

add('S2a',src='Hit 0.12',file='hitop_u.htm',lines='141-142',
 et="ko 'rthaḥ putreṇa jātena yo na vidvān na dhārmikaḥ | kāṇena cakṣuṣā kiṃ vā cakṣuḥ pīḍaiva kevalam ||",
 pause="kaḥ arthaḥ putreṇa jātena yaḥ na vidvān na dhārmikaḥ | kāṇena cakṣuṣā kim vā cakṣuḥ pīḍā eva kevalam ||",
 anv="yaḥ (putraḥ) na vidvān na dhārmikaḥ (tena) jātena putreṇa kaḥ arthaḥ | kāṇena cakṣuṣā vā kim (arthaḥ) | (tat) cakṣuḥ kevalam pīḍā eva ||",
 tr="What use is a son, once he is born, who is neither learned nor righteous? What use is a blind eye? Such an eye is nothing but pain.",
 G={'kāṇena':'"blind (in one eye)"'},
 L={'jātena':'-ta of jāyate (v4.c04.l01)','cakṣuṣā':'instr. of cakṣus (headword; s-stem cells, v4.c05.l03)'},
 pre=['dhārmikaḥ','cakṣuṣā','cakṣuḥ','pīḍā','kevalam'])
add('S2b',src='Hit 0.37',file='hitop_u.htm',lines='237-238',
 et="mātā śatruḥ pitā vairī yena bālo na pāṭhitaḥ | na śobhate sabhā-madhye haṃsa-madhye bako yathā ||",
 pause="mātā śatruḥ pitā vairī yena bālaḥ na pāṭhitaḥ | na śobhate sabhā-madhye haṃsa-madhye bakaḥ yathā ||",
 anv="yena (mātrā pitrā vā) bālaḥ na pāṭhitaḥ (sā) mātā śatruḥ (saḥ) pitā vairī | (saḥ bālaḥ) sabhā-madhye na śobhate yathā haṃsa-madhye bakaḥ (na śobhate) ||",
 tr="A mother is an enemy and a father a foe by whom a child was not taught: he does not shine in an assembly, as a heron does not shine among swans.",
 G={},
 L={'pāṭhitaḥ':'-ta of the causative pāṭhayati (v4.c05.l02; the causative -ta, v5.c02.l01 card)','vairī':'vairam (headword) + -in (v4.c04.l03)'},
 pre=['vairī','haṃsa-madhye','bakaḥ'])
add('S2c',src='Hit 0.45',file='hitop_u.htm',lines='271-272',
 et="yathodaya-girer dravyaṃ sannikarṣeṇa dīpyate | tathā sat-sannidhānena hīna-varṇo 'pi dīpyate ||",
 pause="yathā udaya-gireḥ dravyam sannikarṣeṇa dīpyate | tathā sat-sannidhānena hīna-varṇaḥ api dīpyate ||",
 anv="yathā udaya-gireḥ sannikarṣeṇa dravyam dīpyate tathā sat-sannidhānena hīna-varṇaḥ api dīpyate ||",
 tr="As a thing shines from being near the Mountain of Sunrise, so even a man of low standing shines from being near the good.",
 G={'sannikarṣeṇa':'"by nearness"','sat-sannidhānena':'"by the presence of the good" (sannidhānam "nearness")','dīpyate':'"shines, blazes" (×2; Ā class 4)'},
 L={'udaya-gireḥ':'udayaḥ (v3.c04.l01) + giriḥ (headword): "of the sunrise mountain"','hīna-varṇaḥ':'hīnaḥ (headword) + varṇaḥ (V1)'},
 pre=['udaya-gireḥ','dravyam','hīna-varṇaḥ'])

add('S3a',src='Hit 0.15',file='hitop_u.htm',lines='153-154',
 et="sa jāto yena jātena yāti vaṃśaḥ samunnatim | parivartini saṃsāre mṛtaḥ ko vā na jāyate ||",
 pause="saḥ jātaḥ yena jātena yāti vaṃśaḥ samunnatim | parivartini saṃsāre mṛtaḥ kaḥ vā na jāyate ||",
 anv="parivartini saṃsāre mṛtaḥ kaḥ vā na jāyate | (kintu) saḥ (eva) jātaḥ yena jātena vaṃśaḥ samunnatim yāti ||",
 tr="He alone is truly born by whose birth his family rises high: in the turning round of the world, who that has died is not born again?",
 G={'samunnatim':'"to eminence" (sam-unnatiḥ)','parivartini':'"turning, revolving" (loc. of the -in adjective parivartin)'},
 L={},
 pre=['vaṃśaḥ','saṃsāre'])
add('S3a2',src='Bhartṛhari, Nītiśataka 1.32 (GRETIL numbering)',file='bharst_u.htm',lines='236-239',
 et="parivartini saṃsāre mṛtaḥ ko vā na jāyate | sa jāto yena jātena yāti vaṃśaḥ samunnatim ||",
 pause="parivartini saṃsāre mṛtaḥ kaḥ vā na jāyate | saḥ jātaḥ yena jātena yāti vaṃśaḥ samunnatim ||",
 anv="(as S3a)",tr="(the same verse, its halves in the other order)",G={'samunnatim':'','parivartini':''},L={},pre=['vaṃśaḥ','saṃsāre'])
add('S3b',src='Hit 0.25',file='hitop_u.htm',lines='191-192',
 et="āhāra-nidrā-bhaya-maithunāni sāmānyam etat paśubhir narāṇām | jñānaṃ narāṇām adhiko viśeṣo jñānena hīnāḥ paśubhiḥ samānāḥ ||",
 pause="āhāra-nidrā-bhaya-maithunāni sāmānyam etat paśubhiḥ narāṇām | jñānam narāṇām adhikaḥ viśeṣaḥ jñānena hīnāḥ paśubhiḥ samānāḥ ||",
 anv="āhāra-nidrā-bhaya-maithunāni — etat narāṇām paśubhiḥ sāmānyam (asti) | jñānam narāṇām adhikaḥ viśeṣaḥ | jñānena hīnāḥ (narāḥ) paśubhiḥ samānāḥ ||",
 tr="Food, sleep, fear and mating: this people have in common with animals. Knowledge is what people have over and above; without knowledge they are the equals of animals.",
 G={'āhāra-nidrā-bhaya-maithunāni':'"food, sleep, fear and mating" (dvandva; āhāraḥ is the lesson\'s headword, maithunam glossed)'},
 L={},
 pre=['sāmānyam','paśubhiḥ','adhikaḥ','viśeṣaḥ','hīnāḥ'])
add('S3b2',src='Narasiṃha Purāṇa 15.13',file='3_purana/narsippu.htm',lines='1602-1603',
 et="āhāranidrābhayamaithunāni samānam etat paśubhir narāṇām | jñānaṃ narāṇām adhikaṃ hi loke jñānena hīnāḥ paśubhiḥ samānāḥ ||",
 pause="āhāra-nidrā-bhaya-maithunāni samānam etat paśubhiḥ narāṇām | jñānam narāṇām adhikam hi loke jñānena hīnāḥ paśubhiḥ samānāḥ ||",
 anv="(variant of S3b)",tr="… Knowledge is what is more in people, in this world …",G={'āhāra-nidrā-bhaya-maithunāni':''},L={},pre=[])
add('S3c',src='Hit 0.30',file='hitop_u.htm',lines='211-212',
 et="yathā hy ekena cakreṇa na rathasya gatir bhavet | tathā puruṣakāreṇa vinā daivaṃ na siddhyati ||",
 pause="yathā hi ekena cakreṇa na rathasya gatiḥ bhavet | tathā puruṣa-kāreṇa vinā daivam na siddhyati ||",
 anv="yathā hi ekena cakreṇa rathasya gatiḥ na bhavet tathā puruṣa-kāreṇa vinā daivam na siddhyati ||",
 tr="Just as a chariot cannot move on one wheel, so fate does not come to fulfilment without human effort.",
 G={'siddhyati':'"succeeds" — the e-text\'s spelling; the verb is sidhyati (the owned sidhyanti of Hit 0.36), as Yājñavalkya 1.351 prints it'},
 L={'puruṣa-kāreṇa':'puruṣaḥ (V1) + kāraḥ "doing" (kṛt noun of करोति): "human effort"'},
 pre=[])
add('S3c2',src='Yājñavalkyasmṛti 1.351',file='6_sastra/4_dharma/smrti/yajn1_u.htm',lines='1553-1555',
 et="yathā hy ekena cakreṇa rathasya na gatir bhavet | evaṃ puruṣakāreṇa vinā daivaṃ na sidhyati ||",
 pause="yathā hi ekena cakreṇa rathasya na gatiḥ bhavet | evam puruṣa-kāreṇa vinā daivam na sidhyati ||",
 anv="(variant of S3c)",tr="(the same, with evam for tathā and sidhyati)",G={},L={},pre=[])

add('S4a',src='Bhartṛhari, Nītiśataka 1.13',file='bharst_u.htm',lines='160-163',
 et="yeṣāṃ na vidyā na tapo na dānaṃ jñānaṃ na śīlaṃ na guṇo na dharmaḥ | te martya-loke bhuvi bhāra-bhūtā manuṣya-rūpeṇa mṛgāś caranti ||",
 pause="yeṣām na vidyā na tapaḥ na dānam jñānam na śīlam na guṇaḥ na dharmaḥ | te martya-loke bhuvi bhāra-bhūtāḥ manuṣya-rūpeṇa mṛgāḥ caranti ||",
 anv="yeṣām vidyā na tapaḥ na dānam na jñānam na śīlam na guṇaḥ na dharmaḥ na (asti) te martya-loke bhuvi bhāra-bhūtāḥ (santaḥ) manuṣya-rūpeṇa mṛgāḥ caranti ||",
 tr="Those who have neither learning nor austerity nor generosity, neither knowledge nor good conduct, neither virtue nor dharma, are a burden on the earth in the world of mortals: beasts that walk about in human shape.",
 G={'tapaḥ':'"austerity" (s-stem tapas)','martya-loke':'"in the world of mortals"'},
 L={'bhāra-bhūtāḥ':'bhāraḥ (headword) + bhūta (-ta of bhavati): "become a burden"'},
 pre=['śīlam','bhuvi','bhāra-bhūtāḥ','manuṣya-rūpeṇa'])
add('S4b',src='Bhartṛhari, Nītiśataka 1.60',file='bharst_u.htm',lines='348-351',
 et="ārambha-gurvī kṣayiṇī krameṇa laghvī purā vṛddhimatī ca paścāt | dinasya pūrvārdha-parārdha-bhinnā chāyeva maitrī khala-saj-janānām ||",
 pause="ārambha-gurvī kṣayiṇī krameṇa laghvī purā vṛddhimatī ca paścāt | dinasya pūrva-ardha-para-ardha-bhinnā chāyā iva maitrī khala-sat-janānām ||",
 anv="khalānām maitrī dinasya pūrva-ardha-chāyā iva ārambha-gurvī krameṇa kṣayiṇī (bhavati) | sat-janānām (maitrī) para-ardha-chāyā iva purā laghvī paścāt ca vṛddhimatī (bhavati) ||",
 tr="Like the shadow of the first and of the second half of the day is the friendship of the wicked and of the good: the one heavy at the start and shrinking by degrees, the other slight at first and growing afterwards.",
 G={'kṣayiṇī':'"waning" (f. of the -in adjective kṣayin)','pūrva-ardha-para-ardha-bhinnā':'"divided into the forenoon and the afternoon"'},
 L={'ārambha-gurvī':'ārambhaḥ (headword) + gurvī, f. of guru "heavy" (the owned guruḥ, adjective sense; f. -ī of u-adjectives, c01.l04 §15)','laghvī':'f. of the owned laghu (as gurvī)','vṛddhimatī':'vṛddhiḥ (V4) + -mat (v4.c04.l03), f. -ī','khala-sat-janānām':'khalaḥ (headword) + sat-janaḥ (dvandva)'},
 pre=['ārambha-gurvī','chāyā','maitrī','khala-sat-janānām','purā'])

add('X1a',src='Hit 0.41',file='hitop_u.htm',lines='253-254',
 et="hīyate hi matis tāta hīnaiḥ saha samāgamāt | samaiś ca samatām eti viśiṣṭaiś ca viśiṣṭatām ||",
 pause="hīyate hi matiḥ tāta hīnaiḥ saha samāgamāt | samaiḥ ca samatām eti viśiṣṭaiḥ ca viśiṣṭatām ||",
 anv="tāta hīnaiḥ saha samāgamāt matiḥ hīyate hi | samaiḥ ca (saha samāgamāt) samatām eti | viśiṣṭaiḥ ca (saha samāgamāt) viśiṣṭatām (eti) ||",
 tr="For the mind, my dear, sinks from keeping company with the low; with equals it comes to equality, with the eminent to eminence.",
 G={'hīyate':'"is diminished" (passive of jahāti)','viśiṣṭaiḥ':'"the eminent"','viśiṣṭatām':'"eminence"','tāta':'"dear (son)" (voc.)'},L={},pre=[])
add('X1b',src='Bhartṛhari, Nītiśataka 1.41',file='bharst_u.htm',lines='272-275',
 et="yasyāsti vittaṃ sa naraḥ kulīnaḥ sa paṇḍitaḥ sa śrutavān guṇajñaḥ | sa eva vaktā sa ca darśanīyaḥ sarve guṇāḥ kāñcanam āśrayanti ||",
 pause="yasya asti vittam saḥ naraḥ kulīnaḥ saḥ paṇḍitaḥ saḥ śrutavān guṇa-jñaḥ | saḥ eva vaktā saḥ ca darśanīyaḥ sarve guṇāḥ kāñcanam āśrayanti ||",
 anv="yasya vittam asti saḥ naraḥ kulīnaḥ saḥ paṇḍitaḥ saḥ śrutavān guṇa-jñaḥ saḥ eva vaktā saḥ ca darśanīyaḥ (bhavati) | sarve guṇāḥ kāñcanam āśrayanti ||",
 tr="Whoever has money is a man of good family; he is a pandit, learned and a judge of merit; he alone is an orator, and he is handsome: all virtues take refuge in gold.",
 G={'kulīnaḥ':'"of good family"','kāñcanam':'"gold"','āśrayanti':'"resort to, take refuge in"'},
 L={'śrutavān':'-tavat of śṛṇoti (v4.c04.l01)','darśanīyaḥ':'-anīya gerundive of dṛś (v5.c02.l03 is later: in the c01 exam it is glossed)'},pre=[])

# ---------------- Chapter 2 ----------------
add('P1',src='Pañcatantra 1, story 8 (Bhāsuraka): the opening and the end',file='vispancu.htm',lines='1383; 1453; 1455',
 et="kasmiṃścid vane bhāsurako nāma siṃhaḥ prativasati sma | athāsau vīryātirekān nityam evānekān mṛga-śaśakādīn vyāpādayan nopararāma | athānyedyus tad-vanajāḥ sarve sāraṅga-varāha-mahiṣa-śaśakādayo militvā tam abhyupetya procuḥ — svāmin ! kim anena sakala-mṛga-vadhena nityam eva, yatas tavaikenāpi mṛgeṇa tṛptir bhavati … tataḥ so 'pi mūrkhaḥ siṃhaḥ kūpa-madhya ātma-pratibimbaṃ jala-madhya-gataṃ dṛṣṭvā siṃha-nādaṃ mumoca | tataḥ pratiśabdena kūpa-madhyād dvi-guṇataro nādaḥ samutthitaḥ | atha tena taṃ śatruṃ matvātmānaṃ tasyopari prakṣipya prāṇāḥ parityaktāḥ | śaśako 'pi hṛṣṭa-manāḥ sarva-mṛgān ānandya taiḥ saha praśasyamāno yathā-sukhaṃ tatra vane nivasati sma | ato 'haṃ bravīmi — yasya buddhir balaṃ tasya iti |",
 pause="kasmiṃścit vane bhāsurakaḥ nāma siṃhaḥ prativasati sma | atha asau vīrya-atirekāt nityam eva anekān mṛga-śaśaka-ādīn vyāpādayan na upararāma | atha anyedyuḥ tat-vana-jāḥ sarve sāraṅga-varāha-mahiṣa-śaśaka-ādayaḥ militvā tam abhyupetya procuḥ — svāmin ! kim anena sakala-mṛga-vadhena nityam eva yataḥ tava ekena api mṛgeṇa tṛptiḥ bhavati … tataḥ saḥ api mūrkhaḥ siṃhaḥ kūpa-madhye ātma-pratibimbam jala-madhya-gatam dṛṣṭvā siṃha-nādam mumoca | tataḥ pratiśabdena kūpa-madhyāt dvi-guṇataraḥ nādaḥ samutthitaḥ | atha tena tam śatrum matvā ātmānam tasya upari prakṣipya prāṇāḥ parityaktāḥ | śaśakaḥ api hṛṣṭa-manāḥ sarva-mṛgān ānandya taiḥ saha praśasyamānaḥ yathā-sukham tatra vane nivasati sma | ataḥ aham bravīmi — yasya buddhiḥ balam tasya iti |",
 G={'vīrya-atirekāt':'"from excess of strength"','sāraṅga-varāha-mahiṣa-śaśaka-ādayaḥ':'"deer, boars, buffaloes, hares and the rest"','abhyupetya':'"having approached" (abhi + upa + √i)','pratiśabdena':'"by the echo"','dvi-guṇataraḥ':'"twice as loud"','praśasyamānaḥ':'"being praised" (passive participle -yamāna, L only after this lesson)','anyedyuḥ':'"next day"'},
 L={'upararāma':'perfect of upa + ramate "stopped" (v4.c03.l04; ramate owned?)','ānandya':'-ya absolutive of the causative ā + nandayati "having gladdened" (the causative\'s kṛt forms: this lesson\'s card)','tat-vana-jāḥ':'"born in that forest" (upapada -ja, v4.c04.l04)','prakṣipya':'pra + kṣipati, -ya (v4.c04.l02)'},
 N=['bhāsurakaḥ'],pre=['tṛptiḥ','pratibimbam','kūpa-madhye','kūpa-madhyāt','nādaḥ','siṃha-nādam','hṛṣṭa-manāḥ'])
add('P2',src='Pañcatantra 4, frame story: the escape',file='vispancu.htm',lines='5293; 5295-5296; 5302',
 et="tad ākarṇya makaraḥ sānandam āha — bhadra ! yady evaṃ tad arpaya me hṛdayam | … ahaṃ tvāṃ tam eva jambū-pādapaṃ prāpayāmi | evam uktvā nivartya jambū-talam agāt | vānaro 'pi katham api jalpita-vividha-devatopacāra-pūjas tīram āsāditavān | tataś ca dīrghatara-caṅkramaṇena tam eva jambū-pādapam ārūḍhaś cintayāmāsa — aho ! labdhās tāvat prāṇāḥ | athavā sādhv idam ucyate — na viśvased aviśvaste viśvaste 'pi na viśvaset | viśvāsād bhayam utpannaṃ mūlāny api nikṛntati || … atha vihasya nirbhartsayan vānaras tam āha — dhig dhiṅ mūrkha viśvāsa-ghātaka ! kiṃ kasyacid dhṛdaya-dvayaṃ bhavati ? tad āśu gamyatāṃ jambū-vṛkṣasyādhastān na bhūyo 'pi tvayātrāgantavyam |",
 pause="tat ākarṇya makaraḥ sa-ānandam āha — bhadra ! yadi evam tat arpaya me hṛdayam | … aham tvām tam eva jambū-pādapam prāpayāmi | evam uktvā nivartya jambū-talam agāt | vānaraḥ api katham api jalpita-vividha-devatā-upacāra-pūjaḥ tīram āsāditavān | tataḥ ca dīrghatara-caṅkramaṇena tam eva jambū-pādapam ārūḍhaḥ cintayāmāsa — aho ! labdhāḥ tāvat prāṇāḥ | athavā sādhu idam ucyate — na viśvaset aviśvaste viśvaste api na viśvaset | viśvāsāt bhayam utpannam mūlāni api nikṛntati || … atha vihasya nirbhartsayan vānaraḥ tam āha — dhik dhik mūrkha viśvāsa-ghātaka ! kim kasyacit hṛdaya-dvayam bhavati ? tat āśu gamyatām jambū-vṛkṣasya adhastāt na bhūyaḥ api tvayā atra āgantavyam |",
 G={'jalpita-vividha-devatā-upacāra-pūjaḥ':'"having murmured all kinds of prayers and offerings to the gods" (a bahuvrīhi, structure shown)','dīrghatara-caṅkramaṇena':'"by a long climb"','nikṛntati':'"cuts down"','nirbhartsayan':'"scolding"','arpaya':'"hand over" (causative of ṛ; not headworded in V4)','utpannam':'"arisen"'},
 L={'agāt':'aorist 3sg of eti "went" (this lesson\'s point: parse)','cintayāmāsa':'periphrastic perfect (this lesson: ✓ 3rd persons)','āsāditavān':'-tavat of āsādayati (V4 -tavat; āsādayati glossed earlier)','prāpayāmi':'causative of prāpnoti'},
 N=[],pre=['tīram','viśvaset','aviśvaste','viśvaste','viśvāsāt','viśvāsa-ghātaka','mūlāni','vihasya'])
add('P3',src='Hitopadeśa 3, story 8 (Vīravara): the goddess and the sacrifice',file='hitop_u.htm',lines='2958; 2962; 2971-2973; 2975',
 et="striyoktam — aham etasya śūdrakasya rāja-lakṣmīḥ | cirād etasya bhuja-cchāyāyāṃ mahatā sukhena viśrāntā | idānīm anyatra gamiṣyāmi | … lakṣmīr uvāca — yadi tvam ātmanaḥ putraṃ śaktidharaṃ dvātriṃśal-lakṣaṇopetaṃ bhagavatyāḥ sarva-maṅgalāyā upahārīkaroṣi, tadāhaṃ punar atra suciraṃ nivasāmi | ity uktvādṛśyābhavat | … tatra sarvamaṅgalāṃ sampūjya vīravaro brūte — devi ! prasīda | vijayatāṃ śūdrako mahārājaḥ | gṛhyatām ayam upahāraḥ | ity uktvā putrasya śiraś ciccheda | … jāyante ca mriyante ca mad-vidhāḥ kṣudra-jantavaḥ | anena sadṛśo loke na bhūto na bhaviṣyati || … rājā ca … uvāca — devi ! kiṃ me rājyena ? jīvitena vā mama kiṃ prayojanam ? yady aham anukampanīyas tadā mamāyuḥ-śeṣeṇāpy ayaṃ sa-dāra-putro vīravaro jīvatu |",
 pause="striyā uktam — aham etasya śūdrakasya rāja-lakṣmīḥ | cirāt etasya bhuja-chāyāyām mahatā sukhena viśrāntā | idānīm anyatra gamiṣyāmi | … lakṣmīḥ uvāca — yadi tvam ātmanaḥ putram śaktidharam dvātriṃśat-lakṣaṇa-upetam bhagavatyāḥ sarva-maṅgalāyāḥ upahārī-karoṣi tadā aham punaḥ atra suciram nivasāmi | iti uktvā adṛśyā abhavat | … tatra sarvamaṅgalām sampūjya vīravaraḥ brūte — devi ! prasīda | vijayatām śūdrakaḥ mahā-rājaḥ | gṛhyatām ayam upahāraḥ | iti uktvā putrasya śiraḥ ciccheda | … jāyante ca mriyante ca mat-vidhāḥ kṣudra-jantavaḥ | anena sadṛśaḥ loke na bhūtaḥ na bhaviṣyati || … rājā ca … uvāca — devi ! kim me rājyena ? jīvitena vā mama kim prayojanam ? yadi aham anukampanīyaḥ tadā mama āyuḥ-śeṣeṇa api ayam sa-dāra-putraḥ vīravaraḥ jīvatu |",
 G={'bhuja-chāyāyām':'"in the shade of the arm" (bhujaḥ "arm")','viśrāntā':'"rested"','dvātriṃśat-lakṣaṇa-upetam':'"having the thirty-two marks"','suciram':'"for a long time"','kṣudra-jantavaḥ':'"petty creatures"','mriyante':'"die" (Ā class 6 mriyate)','āyuḥ-śeṣeṇa':'"by the rest of (my) life" (āyus "life")'},
 L={'upahārī-karoṣi':'the cvi compound "you make into an offering" (gati, v4.c04.l04 ◐; upahāraḥ headword)','adṛśyā':'a- + dṛśya, the -ya gerundive of dṛś (this lesson\'s point)','sampūjya':'sam + pūjayati, -ya absolutive','ciccheda':'perfect 3sg of chinatti (v4.c03.l04 doubling; ch → c by 8.4.54 is the card\'s)','mat-vidhāḥ':'"such as I" (mad- + vidha, as owned evaṃvidha)','sadṛśaḥ':'"like" (headword)','anukampanīyaḥ':'-anīya gerundive of anukampate (this lesson\'s point)','vijayatām':'Ā imperative of vi + jayati'},
 N=['śūdrakasya','śaktidharam','sarva-maṅgalāyāḥ','sarvamaṅgalām','vīravaraḥ','śūdrakaḥ'],pre=['rāja-lakṣmīḥ','lakṣmīḥ','upahāraḥ','śiraḥ','prasīda','sadṛśaḥ','sa-dāra-putraḥ'])
add('P4',src='Pañcatantra 1, story 21 (the herons, the snake and the mongoose), with its verse 1.439',file='vispancu.htm',lines='2481-2482; 2490; 2492; 2498; 2500',
 et="upāyaṃ cintayet prājñas tathāpāyam api cintayet | paśyato baka-mūrkhasya nakulair bhakṣitāḥ sutāḥ || … asti kasmiṃścid vanoddeśe bahu-baka-sanātho vaṭa-pādapaḥ | tasya koṭare kṛṣṇa-sarpaḥ prativasati sma | sa ca baka-bālakān ajāta-pakṣān api sadaiva bhakṣayan kālaṃ nayati | … sa āha — bhadra kiṃ karomi ? mama manda-bhāgyasya bālakāḥ koṭara-nivāsinā sarpeṇa bhakṣitāḥ | tad-duḥkha-duḥkhito 'haṃ rodimi | tat kathaya me yady asti kaścid upāyas tad-vināśāya | … āha ca — māma, yady evaṃ tan matsya-māṃsa-khaṇḍāni nakulasya bila-dvārāt sarpa-koṭaraṃ yāvat prakṣipa yathā nakulas tan-mārgeṇa gatvā taṃ duṣṭa-sarpaṃ vināśayati | atha tathānuṣṭhite matsya-māṃsānusāriṇā nakulena taṃ kṛṣṇa-sarpaṃ nihatya te 'pi tad-vṛkṣāśrayāḥ sarve bakāś ca śanaiḥ śanair bhakṣitāḥ |",
 pause="upāyam cintayet prājñaḥ tathā apāyam api cintayet | paśyataḥ baka-mūrkhasya nakulaiḥ bhakṣitāḥ sutāḥ || … asti kasmiṃścit vana-uddeśe bahu-baka-sanāthaḥ vaṭa-pādapaḥ | tasya koṭare kṛṣṇa-sarpaḥ prativasati sma | saḥ ca baka-bālakān ajāta-pakṣān api sadā eva bhakṣayan kālam nayati | … saḥ āha — bhadra kim karomi ? mama manda-bhāgyasya bālakāḥ koṭara-nivāsinā sarpeṇa bhakṣitāḥ | tat-duḥkha-duḥkhitaḥ aham rodimi | tat kathaya me yadi asti kaścit upāyaḥ tat-vināśāya | … āha ca — māma yadi evam tat matsya-māṃsa-khaṇḍāni nakulasya bila-dvārāt sarpa-koṭaram yāvat prakṣipa yathā nakulaḥ tat-mārgeṇa gatvā tam duṣṭa-sarpam vināśayati | atha tathā anuṣṭhite matsya-māṃsa-anusāriṇā nakulena tam kṛṣṇa-sarpam nihatya te api tat-vṛkṣa-āśrayāḥ sarve bakāḥ ca śanaiḥ śanaiḥ bhakṣitāḥ |",
 G={'vana-uddeśe':'"in a part of the forest" (uddeśaḥ, the V3 formula-drill gloss)','bahu-baka-sanāthaḥ':'"home to many herons" (sanātha "having as protector, provided with")','vaṭa-pādapaḥ':'"banyan tree"','koṭare':'"in the hollow"','koṭara-nivāsinā':'"living in the hollow"','sarpa-koṭaram':'"the snake\'s hollow"','māma':'"uncle" (voc., a friendly address)','matsya-māṃsa-khaṇḍāni':'"pieces of fish-flesh"','matsya-māṃsa-anusāriṇā':'"following the fish-flesh"','ajāta-pakṣān':'"not yet fledged"','tat-duḥkha-duḥkhitaḥ':'"grieved by that grief"'},
 L={'paśyataḥ':'gen. sg. of paśyat (T11): with baka-mūrkhasya, the genitive absolute (this lesson\'s point)','nihatya':'ni + hanti, -ya','vināśayati':'causative of vinaśyati "destroys"','prajñaḥ':''},
 N=[],pre=['upāyam','apāyam','prājñaḥ','nakulaiḥ','nakulasya','nakulaḥ','nakulena','sutāḥ','sarpeṇa','kṛṣṇa-sarpaḥ','duṣṭa-sarpam','kṛṣṇa-sarpam','bila-dvārāt','manda-bhāgyasya','rodimi'])
add('X2',src='Pañcatantra 4, story 1 (Gaṅgadatta and Priyadarśana)',file='vispancu.htm',lines='5328; 5336; 5338',
 et="evaṃ cintayan bile praviśantaṃ kṛṣṇasarpam apaśyat | taṃ dṛṣṭvā bhūyo 'py acintayat — yad enaṃ tatra kūpe nītvā sakala-dāyādānām ucchedaṃ karomi | … evaṃ sa vibhāvya bila-dvāraṃ gatvā tam āhūtavān — ehy ehi priya-darśana ! ehi ! tac chrutvā sarpaś cintayāmāsa — ya evaṃ mām āhvayati | svajātīyo na bhavati | yato naiṣā sarpa-vāṇī | anyena kenāpi saha mama martya-loke sandhānaṃ nāsti | tad atraiva durge sthitas tāvad vedmi ko 'yaṃ bhaviṣyati |",
 pause="evam cintayan bile praviśantam kṛṣṇa-sarpam apaśyat | tam dṛṣṭvā bhūyaḥ api acintayat — yat enam tatra kūpe nītvā sakala-dāyādānām ucchedam karomi | … evam saḥ vibhāvya bila-dvāram gatvā tam āhūtavān — ehi ehi priya-darśana ! ehi ! tat śrutvā sarpaḥ cintayāmāsa — yaḥ evam mām āhvayati | sva-jātīyaḥ na bhavati | yataḥ na eṣā sarpa-vāṇī | anyena kena api saha mama martya-loke sandhānam na asti | tat atra eva durge sthitaḥ tāvat vedmi kaḥ ayam bhaviṣyati |",
 G={'dāyādānām':'"of the kinsmen (his rivals)"','ucchedam':'"destruction"','vibhāvya':'"having considered" (causative -ya)','āhūtavān':'"called" (-tavat of āhvayati)','āhvayati':'"calls"','sva-jātīyaḥ':'"one of my own kind"','sarpa-vāṇī':'"a snake\'s voice"','sandhānam':'"alliance"','martya-loke':'"in the mortal world"','durge':'"in (my) fortress"'},
 L={'vedmi':'1sg of vetti (owned family)','bhaviṣyati':'"can it be" (future of supposition, v4.c03.l05)'},
 N=['priya-darśana'],pre=[])

# ---------------- Chapter 3 ----------------
add('E1',src='MBh 3.50.1, 5-10 (Nala; Bhīma and Damayantī)',file='mbh_03_u.htm',lines='03,050.001a-010c',
 et="āsīd rājā nalo nāma vīrasenasuto balī | upapanno guṇair iṣṭai rūpavān aśvakovidaḥ || … tathaivāsīd vidarbheṣu bhīmo bhīmaparākramaḥ | śūraḥ sarvaguṇair yuktaḥ prajākāmaḥ sa cāprajaḥ || sa prajārthe paraṃ yatnam akarot susamāhitaḥ | tam abhyagacchad brahmarṣir damano nāma bhārata || taṃ sa bhīmaḥ prajākāmas toṣayām āsa dharmavit | mahiṣyā saha rājendra satkāreṇa suvarcasam || tasmai prasanno damanaḥ sabhāryāya varaṃ dadau | kanyāratnaṃ kumārāṃś ca trīn udārān mahāyaśāḥ || damayantīṃ damaṃ dāntaṃ damanaṃ ca suvarcasam | upapannān guṇaiḥ sarvair bhīmān bhīmaparākramān || damayantī tu rūpeṇa tejasā yaśasā śriyā | saubhāgyena ca lokeṣu yaśaḥ prāpa sumadhyamā ||",
 pause="āsīt rājā nalaḥ nāma vīrasena-sutaḥ balī | upapannaḥ guṇaiḥ iṣṭaiḥ rūpavān aśva-kovidaḥ || … tathā eva āsīt vidarbheṣu bhīmaḥ bhīma-parākramaḥ | śūraḥ sarva-guṇaiḥ yuktaḥ prajā-kāmaḥ saḥ ca aprajaḥ || saḥ prajā-arthe param yatnam akarot su-samāhitaḥ | tam abhyagacchat brahma-ṛṣiḥ damanaḥ nāma bhārata || tam saḥ bhīmaḥ prajā-kāmaḥ toṣayām āsa dharma-vit | mahiṣyā saha rāja-indra satkāreṇa su-varcasam || tasmai prasannaḥ damanaḥ sa-bhāryāya varam dadau | kanyā-ratnam kumārān ca trīn udārān mahā-yaśāḥ || damayantīm damam dāntam damanam ca su-varcasam | upapannān guṇaiḥ sarvaiḥ bhīmān bhīma-parākramān || damayantī tu rūpeṇa tejasā yaśasā śriyā | saubhāgyena ca lokeṣu yaśaḥ prāpa su-madhyamā ||",
 G={'upapannaḥ':'"endowed with" (×2 with upapannān)','upapannān':'','aśva-kovidaḥ':'"expert in horses"','su-samāhitaḥ':'"fully intent"','mahiṣyā':'"with his queen" (mahiṣī)','satkāreṇa':'"with honour"','su-varcasam':'"radiant" (×2; s-stem varcas)','saubhāgyena':'"by her grace, good fortune"','su-madhyamā':'"slender-waisted"','udārān':'"noble"','bhīma-parākramaḥ':'"of terrible valour" (×2 with bhīma-parākramān)','bhīma-parākramān':''},
 L={'toṣayām':'toṣayām āsa: the periphrastic perfect of toṣayati "pleased" (this lesson\'s point)','balī':'bala + -in (v4.c04.l03)','rūpavān':'-vat (v4.c04.l03)','dharma-vit':'"knower of dharma" (upapada; -vid as in veda-vid)','sa-bhāryāya':'sa- + bhāryā (bahuvrīhi, V4)','prajā-kāmaḥ':'"desiring offspring" (×2; bahuvrīhi)','aprajaḥ':'a- + prajā: "childless"','mahā-yaśāḥ':'mahā + yaśas (s-stem bahuvrīhi, v4.c05.l03 Δ)'},
 N=['nalaḥ','vīrasena-sutaḥ','vidarbheṣu','bhīmaḥ','damanaḥ','damayantīm','damam','damanam','damayantī','bhīmān','bhārata','rāja-indra'],
 pre=['iṣṭaiḥ','śūraḥ','yatnam','kumārān','tejasā','yaśasā','yaśaḥ','kanyā-ratnam','prasannaḥ','dāntam'])
add('E2',src='MBh 3.50.17-19, 21-23, 25-26, 30-31 (Nala and the haṃsa)',file='mbh_03_u.htm',lines='03,050.017a-031c',
 et="aśaknuvan nalaḥ kāmaṃ tadā dhārayituṃ hṛdā | antaḥpurasamīpasthe vana āste rahogataḥ || sa dadarśa tadā haṃsāñ jātarūpaparicchadān | vane vicaratāṃ teṣām ekaṃ jagrāha pakṣiṇam || tato 'ntarikṣago vācaṃ vyājahāra tadā nalam | na hantavyo 'smi te rājan kariṣyāmi hi te priyam || … evam uktas tato haṃsam utsasarja mahīpatiḥ | te tu haṃsāḥ samutpatya vidarbhān agamaṃs tataḥ || vidarbhanagarīṃ gatvā damayantyās tadāntike | nipetus te garutmantaḥ sā dadarśātha tān khagān || sā tān adbhutarūpān vai dṛṣṭvā sakhigaṇāvṛtā | hṛṣṭā grahītuṃ khagamāṃs tvaramāṇopacakrame || … damayantī tu yaṃ haṃsaṃ samupādhāvad antike | sa mānuṣīṃ giraṃ kṛtvā damayantīm athābravīt || damayanti nalo nāma niṣadheṣu mahīpatiḥ | aśvinoḥ sadṛśo rūpe na samās tasya mānuṣāḥ || … evam uktā tu haṃsena damayantī viśāṃ pate | abravīt tatra taṃ haṃsaṃ tam apy evaṃ nalaṃ vada || tathety uktvāṇḍajaḥ kanyāṃ vaidarbhasya viśāṃ pate | punar āgamya niṣadhān nale sarvaṃ nyavedayat ||",
 pause="aśaknuvan nalaḥ kāmam tadā dhārayitum hṛdā | antaḥpura-samīpa-sthe vane āste rahaḥ-gataḥ || saḥ dadarśa tadā haṃsān jātarūpa-paricchadān | vane vicaratām teṣām ekam jagrāha pakṣiṇam || tataḥ antarikṣa-gaḥ vācam vyājahāra tadā nalam | na hantavyaḥ asmi te rājan kariṣyāmi hi te priyam || … evam uktaḥ tataḥ haṃsam utsasarja mahī-patiḥ | te tu haṃsāḥ samutpatya vidarbhān agaman tataḥ || vidarbha-nagarīm gatvā damayantyāḥ tadā antike | nipetuḥ te garutmantaḥ sā dadarśa atha tān khagān || sā tān adbhuta-rūpān vai dṛṣṭvā sakhī-gaṇa-āvṛtā | hṛṣṭā grahītum khagamān tvaramāṇā upacakrame || … damayantī tu yam haṃsam samupādhāvat antike | saḥ mānuṣīm giram kṛtvā damayantīm atha abravīt || damayanti nalaḥ nāma niṣadheṣu mahī-patiḥ | aśvinoḥ sadṛśaḥ rūpe na samāḥ tasya mānuṣāḥ || … evam uktā tu haṃsena damayantī viśām pate | abravīt tatra tam haṃsam tam api evam nalam vada || tathā iti uktvā aṇḍa-jaḥ kanyām vaidarbhasya viśām pate | punaḥ āgamya niṣadhān nale sarvam nyavedayat ||",
 G={'dhārayitum':'"to hold, bear" (causative infinitive)','hṛdā':'"in his heart" (instr. of hṛd)','antaḥpura-samīpa-sthe':'"near the women\'s quarters"','rahaḥ-gataḥ':'"alone, in seclusion"','jātarūpa-paricchadān':'"with golden plumage"','antarikṣa-gaḥ':'"sky-goer" (the bird)','vyājahāra':'"uttered" (perfect of vi + ā + harati)','utsasarja':'"released" (perfect of ut + sṛjati)','samutpatya':'"flying up"','garutmantaḥ':'"the winged ones"','adbhuta-rūpān':'"wonderful in form"','sakhī-gaṇa-āvṛtā':'"surrounded by her friends"','khagamān':'"the birds" (khagama = khaga)','tvaramāṇā':'"hurrying"','samupādhāvat':'"ran up to"','aśvinoḥ':'"(like) the Aśvins" (the twin gods)','aṇḍa-jaḥ':'"the egg-born (bird)"','giram':'"speech, voice" (gir f.)','mānuṣīm':'"human"','mānuṣāḥ':'"humans"','viśām':'viśāṃ pate "lord of the people" (×2; a vocative formula)'},
 L={'dadarśa':'perfect 3sg of paśyati (×2; v4.c03.l04 ✓)','jagrāha':'perfect 3sg of gṛhṇāti','nipetuḥ':'perfect 3pl of patati','upacakrame':'Ā perfect 3sg of upa + kramate "began" (this lesson\'s point)','agaman':'aorist 3pl of gacchati (c02.l02 card: parse)','hantavyaḥ':'-tavya (v4.c05.l01)','grahītum':'infinitive of gṛhṇāti','nyavedayat':'impf. of nivedayati "reported"','vaidarbhasya':'"of the Vidarbha king" (vṛddhi taddhita, v4.c04.l03)'},
 N=['nalaḥ','nalam','vidarbhān','vidarbha-nagarīm','damayantyāḥ','damayantī','damayantīm','damayanti','niṣadheṣu','niṣadhān','nale','pate'],
 pre=['kāmam','haṃsān','haṃsam','haṃsāḥ','haṃsena','sadṛśaḥ','antike','priyam','hṛṣṭā','pakṣiṇam','vācam','samāḥ','kanyām'])
add('G1',src='Bhagavadgītā 2.47-48 = MBh 6.24.47-48 (critical edition)',file='mbh_06_u.htm',lines='06,024.047a-048c',
 et="karmaṇy evādhikāras te mā phaleṣu kadā cana | mā karmaphalahetur bhūr mā te saṅgo 'stv akarmaṇi || yogasthaḥ kuru karmāṇi saṅgaṃ tyaktvā dhanaṃjaya | siddhyasiddhyoḥ samo bhūtvā samatvaṃ yoga ucyate ||",
 pause="karmaṇi eva adhikāraḥ te mā phaleṣu kadā cana | mā karma-phala-hetuḥ bhūḥ mā te saṅgaḥ astu akarmaṇi || yoga-sthaḥ kuru karmāṇi saṅgam tyaktvā dhanaṃjaya | siddhi-asiddhyoḥ samaḥ bhūtvā samatvam yogaḥ ucyate ||",
 anv="te adhikāraḥ karmaṇi eva (asti) | phaleṣu kadā cana mā (bhūt) | (tvam) karma-phala-hetuḥ mā bhūḥ | te akarmaṇi saṅgaḥ mā astu || dhanaṃjaya yoga-sthaḥ (san) saṅgam tyaktvā siddhi-asiddhyoḥ samaḥ bhūtvā karmāṇi kuru | samatvam yogaḥ ucyate ||",
 tr="Your claim is to the deed alone, never at any time to its fruits. Do not be one whose motive is the fruit of action; and let there be in you no attachment to not acting. Steadfast in discipline, do your deeds, Dhanaṃjaya, having let attachment go, the same in success and failure: sameness is called yoga.",
 G={'kadā cana':'kadā cana "ever" (with mā: "never"; the e-text prints two words)','saṅgaḥ':'"attachment" (×2 with saṅgam)','saṅgam':'','akarmaṇi':'"in non-action"'},
 L={'bhūḥ':'mā bhūḥ: augmentless aorist 2sg of bhavati after mā (this lesson\'s point)','tyaktvā':'-tvā of tyajati','siddhi-asiddhyoḥ':'siddhiḥ (headword) dvandva, loc. du.','samatvam':'samaḥ + -tva','ucyate':'passive of vakti'},
 N=['dhanaṃjaya'],pre=['adhikāraḥ','karma-phala-hetuḥ','yoga-sthaḥ','yogaḥ','siddhi-asiddhyoḥ'])
add('U1',src='Bṛhadāraṇyaka Upaniṣad 1.3.28 (the mantra and the Brāhmaṇa\'s gloss)',file='brup___u.htm',lines='394-399',
 et="asato mā sad gamaya, tamaso mā jyotir gamaya, mṛtyor māmṛtaṃ gamayeti | sa yad āhāsato mā sad gamayeti | mṛtyur vā asat sad amṛtaṃ mṛtyor māmṛtaṃ gamayāmṛtaṃ mā kurv ity evaitad āha | tamaso mā jyotir gamayeti | mṛtyur vai tamo jyotir amṛtaṃ mṛtyor māmṛtaṃ gamayāmṛtaṃ mā kurv ity evaitad āha |",
 pause="asataḥ mā sat gamaya tamasaḥ mā jyotiḥ gamaya mṛtyoḥ mā amṛtam gamaya iti | saḥ yat āha asataḥ mā sat gamaya iti | mṛtyuḥ vai asat sat amṛtam mṛtyoḥ mā amṛtam gamaya amṛtam mā kuru iti eva etat āha | tamasaḥ mā jyotiḥ gamaya iti | mṛtyuḥ vai tamaḥ jyotiḥ amṛtam mṛtyoḥ mā amṛtam gamaya amṛtam mā kuru iti eva etat āha |",
 anv="(prose)",
 tr="'From the unreal lead me to the real; from darkness lead me to light; from death lead me to the deathless.' When he says 'from the unreal lead me to the real', the unreal is death and the real is the deathless: 'from death lead me to the deathless; make me deathless' — that is what he says. 'From darkness lead me to light': darkness is death and light the deathless: 'from death lead me to the deathless; make me deathless' — that is what he says.",
 G={'vai':'(the e-text has vā once, vai once; both "truly", a Brāhmaṇa particle)'},
 L={'gamaya':'causative imperative of gacchati "make (me) go, lead" (v4.c05.l02)','mā':'the enclitic acc. of aham "me" (this lesson\'s point, 8.1.23), not prohibitive mā'},
 N=[],pre=['asataḥ','asat','tamasaḥ','tamaḥ','jyotiḥ','mṛtyoḥ','mṛtyuḥ'])
add('X3',src='MBh 3.51.1-2, 6-9 (Damayantī lovesick; the svayaṃvara)',file='mbh_03_u.htm',lines='03,051.001a-009c',
 et="damayantī tu tac chrutvā vaco haṃsasya bhārata | tadā prabhṛti nasvasthā nalaṃ prati babhūva sā || tataś cintāparā dīnā vivarṇavadanā kṛśā | babhūva damayantī tu niḥśvāsaparamā tadā || … tac chrutvā nṛpatir bhīmo damayantīsakhīgaṇāt | cintayām āsa tat kāryaṃ sumahat svāṃ sutāṃ prati || sa samīkṣya mahīpālaḥ svāṃ sutāṃ prāptayauvanām | apaśyad ātmanaḥ kāryaṃ damayantyāḥ svayaṃvaram || sa saṃnipātayām āsa mahīpālān viśāṃ pate | anubhūyatām ayaṃ vīrāḥ svayaṃvara iti prabho || śrutvā tu pārthivāḥ sarve damayantyāḥ svayaṃvaram | abhijagmus tadā bhīmaṃ rājāno bhīmaśāsanāt ||",
 pause="damayantī tu tat śrutvā vacaḥ haṃsasya bhārata | tadā prabhṛti na-svasthā nalam prati babhūva sā || tataḥ cintā-parā dīnā vivarṇa-vadanā kṛśā | babhūva damayantī tu niḥśvāsa-paramā tadā || … tat śrutvā nṛ-patiḥ bhīmaḥ damayantī-sakhī-gaṇāt | cintayām āsa tat kāryam su-mahat svām sutām prati || saḥ samīkṣya mahī-pālaḥ svām sutām prāpta-yauvanām | apaśyat ātmanaḥ kāryam damayantyāḥ svayaṃvaram || saḥ saṃnipātayām āsa mahī-pālān viśām pate | anubhūyatām ayam vīrāḥ svayaṃvaraḥ iti prabho || śrutvā tu pārthivāḥ sarve damayantyāḥ svayaṃvaram | abhijagmuḥ tadā bhīmam rājānaḥ bhīma-śāsanāt ||",
 G={'na-svasthā':'"not at ease, unwell" (the e-text prints nasvasthā)','cintā-parā':'"wholly given to brooding"','dīnā':'"dejected"','vivarṇa-vadanā':'"pale-faced"','kṛśā':'"thin"','niḥśvāsa-paramā':'"sighing constantly"','samīkṣya':'"having observed"','svayaṃvaram':'"self-choice (of a husband)" (×2 with svayaṃvaraḥ)','svayaṃvaraḥ':'','saṃnipātayām':'saṃnipātayām āsa "assembled" (periphrastic perfect of a causative)','anubhūyatām':'"let it be experienced"','pārthivāḥ':'"the kings"','abhijagmuḥ':'"went to" (perfect 3pl)','bhīma-śāsanāt':'"at Bhīma\'s command"'},
 L={'babhūva':'perfect 3sg of bhavati (×2)','cintayām':'cintayām āsa (periphrastic perfect, c03.l01 ✓)','prāpta-yauvanām':'prāpta + yauvanam (c01.l01 headword): "come of age"'},
 N=['damayantī','bhārata','nalam','bhīmaḥ','damayantyāḥ','bhīmam','pate','prabho'],pre=[])

# ---------------- Chapter 4 ----------------
add('M1',src='Bhartṛhari, Nītiśataka 1.27',file='bharst_u.htm',lines='216-219',
 et="prārabhyate na khalu vighna-bhayena nīcaiḥ prārabhya vighna-vihatā viramanti madhyāḥ | vighnaiḥ punaḥ punar api pratihanyamānāḥ prārabdham uttama-janā na parityajanti ||",
 pause="prārabhyate na khalu vighna-bhayena nīcaiḥ prārabhya vighna-vihatāḥ viramanti madhyāḥ | vighnaiḥ punaḥ punaḥ api pratihanyamānāḥ prārabdham uttama-janāḥ na parityajanti ||",
 anv="nīcaiḥ vighna-bhayena na khalu prārabhyate | madhyāḥ prārabhya vighna-vihatāḥ (santaḥ) viramanti | uttama-janāḥ vighnaiḥ punaḥ punaḥ api pratihanyamānāḥ prārabdham na parityajanti ||",
 tr="The low do not begin at all, for fear of obstacles; the middling begin, and stop when obstacles strike them; the best, though struck by obstacles again and again, do not abandon what they have begun.",
 G={'vighna-vihatāḥ':'"struck by obstacles"','pratihanyamānāḥ':'"being beaten back" (passive participle -yamāna)'},
 L={'prārabhyate':'impersonal passive of prārabhate "it is begun"','prārabhya':'-ya absolutive','prārabdham':'-ta "what has been begun"'},
 N=[],pre=['vighna-bhayena','vighnaiḥ','nīcaiḥ','madhyāḥ','viramanti','uttama-janāḥ','khalu'])
add('X4a',src='Hit 0.24',file='hitop_u.htm',lines='186-187',
 et="hā hā putraka nādhītaṃ gatāsv etāsu rātriṣu | tena tvaṃ viduṣāṃ madhye paṅke gaur iva sīdasi ||",
 pause="hā hā putraka na adhītam gatāsu etāsu rātriṣu | tena tvam viduṣām madhye paṅke gauḥ iva sīdasi ||",
 anv="hā hā putraka etāsu rātriṣu gatāsu (tvayā) na adhītam | tena tvam viduṣām madhye paṅke gauḥ iva sīdasi ||",
 tr="Alas, alas, little son, you did not study while these nights went by: so among the learned you sink like a cow in the mud.",
 G={'adhītam':'"(it was) studied" (-ta of adhīte)','sīdasi':'"you sink"'},
 L={'putraka':'putraḥ + -ka (diminutive: the V4 card\'s -ka)','gatāsu':'loc. absolute with etāsu rātriṣu','viduṣām':'gen. pl. of vidvān (-vāṃs, v5 Δ parse)'},N=[],pre=[])
add('X4b',src='Bhartṛhari, Nītiśataka 1.12',file='bharst_u.htm',lines='156-159',
 et="sāhitya-saṅgīta-kalā-vihīnaḥ sākṣāt paśuḥ puccha-viṣāṇa-hīnaḥ | tṛṇaṃ na khādann api jīvamānas tad bhāga-dheyaṃ paramaṃ paśūnām ||",
 pause="sāhitya-saṅgīta-kalā-vihīnaḥ sākṣāt paśuḥ puccha-viṣāṇa-hīnaḥ | tṛṇam na khādan api jīvamānaḥ tat bhāga-dheyam paramam paśūnām ||",
 anv="sāhitya-saṅgīta-kalā-vihīnaḥ (naraḥ) puccha-viṣāṇa-hīnaḥ sākṣāt paśuḥ (asti) | (saḥ) tṛṇam na khādan api jīvamānaḥ (bhavati) | tat paśūnām paramam bhāga-dheyam ||",
 tr="A man without literature, music and the arts is a beast plain and simple, lacking only tail and horns; that he lives without eating grass is the animals' great good fortune.",
 G={'sāhitya-saṅgīta-kalā-vihīnaḥ':'"devoid of literature, music and the arts"','sākṣāt':'"manifestly, in person"','puccha-viṣāṇa-hīnaḥ':'"without tail and horns"','bhāga-dheyam':'"lot, fortune"','jīvamānaḥ':'"living" (-māna)'},
 L={'khādan':'-at of khādati'},N=[],pre=[])

# ---------------- Chapter 5 ----------------
add('X5',src='Hitopadeśa 2, story 2 (the washerman\'s donkey and dog)',file='hitop_u.htm',lines='1495; 1497; 1513 (first sentence)',
 et="asti vārāṇasyāṃ karpūra-paṭako nāma rajakaḥ | sa rātrau gāḍha-nidrāyāṃ prasuptaḥ | tad-anantaraṃ tad-gṛha-dravyāṇi hartuṃ cauraḥ praviṣṭaḥ | tasya prāṅgaṇe gardabho baddhas tiṣṭhati | kukkuraś copaviṣṭo 'sti | atha gardabhaḥ śvānam āha — sakhe ! bhavatas tāvad ayaṃ vyāpāraḥ | tat kim iti tvam uccaiḥ śabdaṃ kṛtvā svāminaṃ na jāgarayasi | kukkuro brūte — bhadra ! mama niyogasya carcā tvayā na kartavyā | tvam eva kiṃ na jānāsi yathā tasyāharniśaṃ gṛha-rakṣāṃ karomi | yato 'yaṃ cirān nirvṛto mamopayogaṃ na jānāti | tenādhunāpi mamāhāra-dāne mandādaraḥ | … ity uktvātīva cītkāra-śabdaṃ kṛtavān |",
 pause="asti vārāṇasyām karpūra-paṭakaḥ nāma rajakaḥ | saḥ rātrau gāḍha-nidrāyām prasuptaḥ | tat-anantaram tat-gṛha-dravyāṇi hartum cauraḥ praviṣṭaḥ | tasya prāṅgaṇe gardabhaḥ baddhaḥ tiṣṭhati | kukkuraḥ ca upaviṣṭaḥ asti | atha gardabhaḥ śvānam āha — sakhe ! bhavataḥ tāvat ayam vyāpāraḥ | tat kim iti tvam uccaiḥ śabdam kṛtvā svāminam na jāgarayasi | kukkuraḥ brūte — bhadra ! mama niyogasya carcā tvayā na kartavyā | tvam eva kim na jānāsi yathā tasya ahaḥ-niśam gṛha-rakṣām karomi | yataḥ ayam cirāt nirvṛtaḥ mama upayogam na jānāti | tena adhunā api mama āhāra-dāne manda-ādaraḥ | … iti uktvā atīva cītkāra-śabdam kṛtavān |",
 G={'rajakaḥ':'"washerman"','gāḍha-nidrāyām':'"in deep sleep"','prāṅgaṇe':'"in the courtyard"','gardabhaḥ':'"donkey" (×2)','kukkuraḥ':'"dog" (×2)','śvānam':'"the dog" (acc. of śvan)','jāgarayasi':'"you wake (him)" (causative of jāgarti)','niyogasya':'"of (my) duty"','carcā':'"concern, discussion"','ahaḥ-niśam':'"day and night"','nirvṛtaḥ':'"at ease, carefree"','upayogam':'"usefulness"','manda-ādaraḥ':'"slack in care"','cītkāra-śabdam':'"a braying noise"'},
 L={'prasuptaḥ':'pra + supta (-ta of svapiti)','kartavyā':'-tavya','asau':'adas (parse)'},
 N=['vārāṇasyām','karpūra-paṭakaḥ'],pre=[])
add('X6',src='Bhartṛhari, Nītiśataka 1.23',file='bharst_u.htm',lines='200-203',
 et="jāḍyaṃ dhiyo harati siñcati vāci satyaṃ mānonnatiṃ diśati pāpam apākaroti | cetaḥ prasādayati dikṣu tanoti kīrtiṃ sat-saṅgatiḥ kathaya kiṃ na karoti puṃsām ||",
 pause="jāḍyam dhiyaḥ harati siñcati vāci satyam māna-unnatim diśati pāpam apākaroti | cetaḥ prasādayati dikṣu tanoti kīrtim sat-saṅgatiḥ kathaya kim na karoti puṃsām ||",
 anv="sat-saṅgatiḥ dhiyaḥ jāḍyam harati vāci satyam siñcati māna-unnatim diśati pāpam apākaroti cetaḥ prasādayati dikṣu kīrtim tanoti | kathaya (sā) puṃsām kim na karoti ||",
 tr="Keeping company with the good takes dullness from the mind, sprinkles truth on speech, grants high esteem, drives off wrong, makes the heart serene and spreads fame in every direction: tell me, what does it not do for people?",
 G={'jāḍyam':'"dullness"','siñcati':'"sprinkles"','māna-unnatim':'"rise in esteem"','apākaroti':'"drives away"','cetaḥ':'"the mind" (s-stem cetas)','prasādayati':'"makes clear, serene"','tanoti':'"spreads"','sat-saṅgatiḥ':'"company of the good"','puṃsām':'"for men" (gen. pl. of pumān)'},
 L={'dhiyaḥ':'gen. of dhī (root noun, parse)'},N=[],pre=[])

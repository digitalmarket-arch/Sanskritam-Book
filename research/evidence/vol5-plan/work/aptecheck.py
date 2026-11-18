#!/usr/bin/env python3
"""aptecheck.py [TEXT ...] — the c02.l02 lookup procedure, run mechanically over every word of a text that
is not owned (its status G in texts_state.py), and the Apte (1890) headwords it reaches (ap90.txt, <k1>, SLP1).

Rewritten at the repair (critique G7): the synthesis version tested a hand-picked list of spellings and left the
lists of two words empty. This version generates every candidate by the six steps and tests them all:
  (2) split a compound: every member that is not owned is looked up (last member first);
  (1) peel the ending with the owned noun tables -> the stems an ending allows (a, ā, i, ī, u, consonant);
      Apte gives vowel-stem nouns in the nominative (gfhaM, matiH, rajakaH) and consonant stems and adjectives as
      stems (rAjan, manas; nirvfta): every stem is tried bare and in its nominatives (m. -H, n. -M, f. bare);
      Apte spells a nasal before a consonant as anusvāra (AnaMdaH, maMqUkaH): every candidate is also tried so;
  (3)+(4) a verb form is reduced by the learner's step-4 analysis (VERBS below: upasargas and base, read off the
      owned tables); an -aya- stem gives its root by the owned grade table (ā/a, e->i, o->u, ar/ār->ṛ, av/āv->u/ū,
      ay/āy->i/ī); Apte lists many prefixed roots as headwords (Asad, nikft): upasarga+root is tried, then the root;
      a participle is also tried as a nominal stem (Apte lists some: ArUQa, upapanna);
  (5)-(6) the sense chosen and checked back in the sentence is the learner's, not the script's.
A token is "look up" when every member that is not owned has a hit; otherwise "glossed"."""
import sys, re, os, importlib.util
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from texts_state import T
from v5tools import i2d
A = open(os.path.join(HERE, '..', '..', 'dict', 'ap90', 'ap90.txt'), encoding='utf8').read()
K = set(re.findall(r'<k1>([^<]+)<', A))
spec = importlib.util.spec_from_file_location('o', os.path.join(HERE, '..', 'owned5.py'))
o = importlib.util.module_from_spec(spec); spec.loader.exec_module(o)

SLP = [('ai','E'),('au','O'),('kh','K'),('gh','G'),('ch','C'),('jh','J'),('ṭh','W'),('ḍh','Q'),('th','T'),('dh','D'),
       ('ph','P'),('bh','B'),('ā','A'),('ī','I'),('ū','U'),('ṛ','f'),('ṝ','F'),('ḷ','x'),('ṅ','N'),('ñ','Y'),('ṭ','w'),
       ('ḍ','q'),('ṇ','R'),('ś','S'),('ṣ','z'),('ṃ','M'),('ḥ','H')]
def slp(s):
    for a, b in SLP: s = s.replace(a, b)
    return s
def anusvara(s):          # Apte: a nasal before a consonant is written M
    return re.sub(r'[NYRnm](?=[kKgGcCjJwWqQtTdDpPbBSzsh])', 'M', s)
CONS = 'kKgGNcCjJYwWqQRtTdDnpPbBmyrlvSzsh'

# (1) endings of the owned tables -> possible stems (IAST)
END = [('ānām','a'),('ebhyaḥ','a'),('ābhyām','a'),('asya','a'),('ena','a'),('eṇa','a'),('āya','a'),('āt','a'),('āni','a'),
       ('āṇi','a'),('aiḥ','a'),('eṣu','a'),('ayoḥ','a'),('ān','a'),('āḥ','a'),('aḥ','a'),('am','a'),('au','a'),('e','a'),('a','a'),
       ('āyām','ā'),('āyāḥ','ā'),('āyai','ā'),('ayā','ā'),('ām','ā'),('ā','ā'),('āḥ','ā'),
       ('ibhiḥ','i'),('īn','i'),('ayaḥ','i'),('inā','i'),('aye','i'),('eḥ','i'),('iḥ','i'),('im','i'),('au','i'),
       ('yāḥ','ī'),('yām','ī'),('yai','ī'),('yā','ī'),('īm','ī'),('ī','ī'),
       ('unā','u'),('ave','u'),('oḥ','u'),('uḥ','u'),('um','u'),('ūn','u'),
       ('ā','C'),('am','C'),('aḥ','C'),('e','C'),('as','C'),('ḥ','C'),('ām','C'),('',' '),
       ('ām','a'),('ā','a'),('avaḥ','u'),('antaḥ','at'),('antam','at'),('antau','at'),('iṇā','in'),('inā','in'),
       ('inam','in'),('aṇi','an'),('ani','an'),('aṇā','an'),('anā','an')]
def stems(m):
    out = set()
    for e, kind in END:
        if e and not m.endswith(e): continue
        b = m[:-len(e)] if e else m
        if len(b) < 2: continue
        if kind in ('a','ā','i','ī','u'): out.add(b + kind)
        elif kind in ('at','in','an'): out.add(b + kind)
        elif kind == 'C': out.add(b)
        else: out.add(m)
    for s in list(out):            # consonant stems in -as/-is/-us written -aḥ etc., -an stems
        if s.endswith(('aḥ', 'uḥ', 'iḥ')): out.add(s[:-1] + 's')
        if s.endswith('ān'): out.add(s[:-2] + 'an')
    return out
def nominal_candidates(m):
    c = set()
    for s in stems(m):
        S = slp(s); c |= {S, S + 'H', S + 'M'}
        if S.endswith('a'): c |= {S[:-1] + 'aH', S[:-1] + 'aM', S[:-1] + 'A'}
        if S.endswith('A'): c.add(S)
    return c | {anusvara(x) for x in c}

# (3)+(4) verb forms: the learner's analysis (upasargas, base); 'aya' = an -aya- stem whose root is recovered by grade
VERBS = {
 'nirbhartsayan': (['nir'], 'bhartsaya', 'aya'), 'arpaya': ([], 'arpaya', 'aya'), 'ārūḍhaḥ': (['ā'], 'ruh', 'root'),
 'nivartya': (['ni'], 'vartaya', 'aya'), 'āsāditavān': (['ā'], 'sādaya', 'aya'), 'viśrāntā': (['vi'], 'śram', 'root'),
 'mriyante': ([], 'mṛ', 'root'), 'anukampanīyaḥ': (['anu'], 'kamp', 'root'), 'sampūjya': (['sam'], 'pūjaya', 'aya'),
 'ciccheda': ([], 'cheda', 'perfect'), 'praṇamya': (['pra'], 'nam', 'root'), 'vināśayati': (['vi'], 'nāśaya', 'aya'),
 'vibhāvya': (['vi'], 'bhāvaya', 'aya'), 'āhūtavān': (['ā'], 'hve', 'root'), 'āhvayati': (['ā'], 'hve', 'root'),
 'vedmi': ([], 'vid', 'root'), 'dhārayitum': ([], 'dhāraya', 'aya'), 'vyājahāra': (['vi', 'ā'], 'hṛ', 'root'),
 'utsasarja': (['ut'], 'sṛj', 'root'), 'upacakrame': (['upa'], 'kram', 'root'), 'nyavedayat': (['ni'], 'vedaya', 'aya'),
 'nyavedayata': (['ni'], 'vedaya', 'aya'), 'samīkṣya': (['sam'], 'īkṣ', 'root'), 'prārabhyate': (['pra', 'ā'], 'rabh', 'root'),
 'prārabhya': (['pra', 'ā'], 'rabh', 'root'), 'prārabdham': (['pra', 'ā'], 'rabh', 'root'), 'adhītam': (['adhi'], 'i', 'root'),
 'jīvamānaḥ': ([], 'jīv', 'root'), 'jāgarayasi': ([], 'jāgaraya', 'aya'), 'upapannaḥ': (['upa'], 'pad', 'root'),
 'upapannān': (['upa'], 'pad', 'root'), 'su-samāhitaḥ': (['sam', 'ā'], 'dhā', 'root'), 'nirvṛtaḥ': (['nir'], 'vṛ', 'root'),
}
UPA = {'nir': 'nir', 'ni': 'ni', 'ā': 'A', 'vi': 'vi', 'anu': 'anu', 'sam': 'sam', 'pra': 'pra', 'ut': 'ud', 'upa': 'upa',
       'adhi': 'aDi'}
def roots_from_aya(base):
    b = base[:-3]                               # strip -aya
    out = {b}
    for x, y in (('ār', 'ṛ'), ('ar', 'ṛ'), ('āv', 'ū'), ('av', 'u'), ('āy', 'ī'), ('ay', 'i')):
        if b.endswith(x): out.add(b[:-len(x)] + y)
    for x, y in (('ār', 'ṛ'), ('ar', 'ṛ'), ('ā', 'a'), ('e', 'i'), ('o', 'u')):   # the grade vowel inside the root
        i = b.rfind(x)
        if i >= 0: out.add(b[:i] + y + b[i + len(x):])
    return out
def join_upa(ups, root):                       # upasarga + root, with the vowel sandhi the learner owns
    s = ''.join(UPA[u] for u in ups) + slp(root)
    return s.replace('aA', 'A').replace('iA', 'yA').replace('AA', 'A').replace('ii', 'I').replace('Ai', 'e').replace('ai', 'e')
def verb_candidates(tok):
    ups, base, kind = VERBS[tok]
    rts = {base}
    if kind == 'aya': rts = roots_from_aya(base)
    if kind == 'perfect': rts = {base[:-1], base[:-1].replace('e', 'i')}
    c = set()
    for r in rts:
        R = slp(r); c |= {R, anusvara(R)}
        for n in range(len(ups), 0, -1): c |= {join_upa(ups[-n:], r), anusvara(join_upa(ups[-n:], r))}
    return c
PRON = {'mat', 'tat', 'asmat', 'yuṣmat', 'sva', 'svā', 'sa', 'a', 'an', 'nir', 'su'}   # compound forms of owned pronouns; owned prefixes
def owned(m, heads):
    if m in PRON: return True
    if m.endswith('a') and o.check(i2d(m[:-1] + 'ā')) != '-': return True     # an-stem in a compound: rāja- (rājā owned)
    if m.endswith(('tara', 'tama')) and len(m) > 6 and owned(m[:-4], heads): return True   # taught -tara/-tama
    for s in stems(m) | {m}:
        for f in (s, s + 'ḥ', s + 'm'):
            if o.check(i2d(f)) != '-' or f in heads: return True
    return False
# step (5): a headword whose sense does not fit the sentence is not a hit
REJECT = {'enam': {'enA'}, 'āyuḥ-śeṣeṇa': {'Ayu'}}   # Apte's Ayu is a Vedic adjective "living, going"; the noun is Ayus      # Apte's enA is a Vedic indeclinable "thus, then"; the pronoun enad is not a headword
def v5heads(k):                 # Volume 5 headwords owned when the text is read (lessons up to the text's own)
    P = os.path.join(HERE, '..', 'vol5-plan.md')
    txt = open(P, encoding='utf8').read()
    les = {'S1':'v5.c01.l01','S2':'v5.c01.l02','S3':'v5.c01.l03','S4':'v5.c01.l04','X1':'v5.c01.l05','P1':'v5.c02.l01','P2':'v5.c02.l02',
           'P3':'v5.c02.l03','P4':'v5.c02.l04','X2':'v5.c02.l05','E1':'v5.c03.l01','E2':'v5.c03.l02','G1':'v5.c03.l03','U1':'v5.c03.l04',
           'X3':'v5.c03.l05','M1':'v5.c04.l03','X4':'v5.c04.l05','X5':'v5.c05.l05','X6':'v5.c05.l05'}[k[:2]]
    heads = set()
    for lid, body in re.findall(r'\n#### (v5\.c0\d\.l0\d)(.*?)(?=\n#### |\Z)', txt, re.S):
        m = re.search(r'\*\*New headwords \(\d+; \d+ → \d+\):\*\*(.*?)(?=\n- \*\*|\n\n)', body, re.S)
        if m:
            for it in re.split(r'\s·\s', m.group(1).replace('\n', ' ')):
                w = re.match(r'\s*[ऀ-ॿ]+\s+([^\s]+)', it)
                if w: heads.add(w.group(1).strip('.,;'))
        if lid == les: break
    return heads
def check(k, heads=None):
    if heads is None: heads = v5heads(k)
    rows = []
    for tok in T[k]['G']:
        if tok in VERBS:
            c = verb_candidates(tok) - REJECT.get(tok, set()); hit = sorted(x for x in c if x in K)
            nominal = sorted(x for x in nominal_candidates(tok.replace('-', '')) if x in K)
            rows.append((tok, hit + [x for x in nominal if x not in hit]))
            continue
        mem = tok.split('-'); found = []; ok = True
        for m in reversed(mem):
            if owned(m, heads): continue
            h = sorted(x for x in nominal_candidates(m) - REJECT.get(tok, set()) if x in K)
            if h: found += h
            else: ok = False
        whole = sorted(x for x in nominal_candidates(tok.replace('-', '')) - REJECT.get(tok, set()) if x in K)
        if not ok and whole: ok, found = True, whole
        rows.append((tok, found if ok else []))
    return rows
if __name__ == '__main__':
    for k in (sys.argv[1:] or ['P2', 'X2', 'X5']):
        rows = check(k); n = len(rows); reached = [r for r in rows if r[1]]
        for tok, h in rows: print(k, tok, '->', ' '.join(h) if h else 'GLOSSED (no candidate is an Apte headword)')
        print(f'{k}: {len(reached)} of {n} not-owned words reached by the procedure')

import sys,re,subprocess
M=[('ai','E'),('au','O'),('kh','K'),('gh','G'),('ch','C'),('jh','J'),('ṭh','W'),('ḍh','Q'),('th','T'),('dh','D'),('ph','P'),('bh','B'),
   ('ā','A'),('ī','I'),('ū','U'),('ṛ','f'),('ṝ','F'),('ḷ','x'),('ṅ','N'),('ñ','Y'),('ṭ','w'),('ḍ','q'),('ṇ','R'),('ś','S'),('ṣ','z'),('ṃ','M'),('ḥ','H')]
def slp(s):
    for a,b in M: s=s.replace(a,b)
    return s
MW='/tmp/claude-0/-home-user-Sanskritam-Book/d8d45eb6-e9e3-564b-9957-8f7e02af29c7/scratchpad/dict/mw/mw.txt'
AP='/tmp/claude-0/-home-user-Sanskritam-Book/d8d45eb6-e9e3-564b-9957-8f7e02af29c7/scratchpad/dict/ap90/ap90.txt'
for w in sys.argv[1:]:
    k=slp(w)
    r=subprocess.run(['grep','-c',f'<k1>{k}<',MW],capture_output=True,text=True).stdout.strip()
    a=subprocess.run(['grep','-c',f'<k1>{k}<',AP],capture_output=True,text=True).stdout.strip()
    print(f'{w}={k}: MW {r} AP {a}')

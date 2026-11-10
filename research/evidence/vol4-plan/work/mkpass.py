"""Builds the passage list read by etdiff.py from the plan (helper; the list as run on 2026-11-10 is passages.tsv beside this script).
Writes passages.tsv under $SANSKRITAM_OUT/work/. Run: python3 -I research/evidence/vol4-plan/work/mkpass.py"""
import os, sys; sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
from _local import PLAN, repo_file, out as out_path  # paths: see ../README.md
import re
t=open(repo_file(PLAN),encoding='utf8').read()
L=t.split('\n'); out=[]
def add(lab,key,s): out.append(f'{lab}\t{key}\t{s}')
# §5 blockquotes: group consecutive '> ' lines under the nearest ### heading
sec=None; buf=[]
def flush():
    global buf
    if buf:
        txt=' '.join(buf)
        for k,part in enumerate(re.split(r'\s…\s|\s\(b\)\s|^\(a\)\s|\*\*N[45]:\*\*',txt)):
            part=part.strip()
            if re.search(r'[ऀ-ॿ]{3}',part): add(f'{sec}#{k}', 'panc' if any(x in sec for x in ('N2','N4','N7')) else 'hit', part)
    buf=[]
for l in L:
    m=re.match(r'### 5\.\d (\S+(?:, \S+)?)',l)
    if m: flush(); sec=m.group(1); continue
    if l.startswith('### 5.9'): flush(); sec=None
    if sec and l.startswith('> '): buf.append(l[2:])
    elif sec and l.startswith('**X-b') : flush()
    elif sec and not l.startswith('>') and buf: flush()
flush()
# c06.l01 table rows
for l in L:
    m=re.match(r'\| (1\.4\.\d+) [^|]+\| ([^|]*[ऀ-ॿ][^|]*)\| [^|]*\|$',l)
    if m and 'कारके इत्यधिकारो' not in m.group(2) or (m and True):
        if m: add('c06.l01 '+m.group(1),'kas',m.group(2).replace('…',' '))
# other quoted Kāśikā/LSK lines, typed from the plan's own text
extra=[('c01.l01 laṇ','kas','हकारादिष्वकार उच्चारणार्थः, न अनुबन्धः'),
('c01.l02 laṇ','kas','इण्ग्रहणानि सर्वाणि परेण णकारेण। अण्ग्रहणानि तु पूर्वेण'),
('c01.l02 LSK','lsk','अत्रैवाण् परेण णकारेण'),
('c03 3.2.111','kas','अविद्यमानाद्यतने भूतेऽर्थे वर्तमानाद्धातोर्लङ् प्रत्ययो भवति'),
('c03.l04 1.2.6','kas','भवतेः खल्वपि'),
('c05.l02 1.4.53a','kas','दर्शयते भृत्यान् राजानं'),
('c05.l02 1.4.53b','kas','आत्मनेपदे इति किम्? दर्शयति चैत्रं मैत्रमपरः'),
('c05.l04 2.3.37','kas','गोषु दुह्यमानासु गतः, दुग्धास्वागतः'),
('c05.l04 2.3.38','kas','रुदतः प्राव्राजीत्'),
('c06.l01 1.4.49 note','kas','कर्मण ईप्सिता माषाः, न कर्तुः'),
('c06.l03 1.4.2','kas','तुल्यबलविरोधो विप्रतिषेधः।'),
('c06.l03 1.4.2b','kas','तस्मिन्विप्रतिषेधे परं कार्यं भवति।'),
('c06.l03 1.1.56a','kas','अङ्गादेशोऽङ्गवद्भवति — केन। काभ्याम्। कैः।'),
('c06.l03 1.1.56b','kas','धात्वादेशो धातुवद्भवति — अस्तेर्भूः'),
('c06.l03 1.1.56c','kas','भविता। भवितुम्। भवितव्यम्। वक्ता। वक्तुम्। वक्तव्यम्।'),
('c06.l03 1.1.56d','kas','कृदादेशः कृद्वद्भवति — प्रकृत्य। प्रहृत्य। क्त्वो ल्यबादेशे कृते ह्रस्वस्य पिति कृति तुक्'),
('c06.l03 8.2.1a','kas','सिद्धकार्यं न करोति'),
('c06.l03 8.2.1b','kas','व्यलोपस्यासिद्धत्वात् आद्गुणः'),
('c06.l03 8.2.1c','kas','अकः सवर्णे दीर्घः इति च न भवति'),
('c06.l03 8.2.2a','kas','सुब्विधौ तावत् राजभिः, तक्षभिः इत्यत्र नलोपस्यासिद्धत्वात् अतो भिस ऐस्  इति न भवति। राजभ्याम्,'),
('c06.l03 8.2.2b','kas','राजसु इति सुपि च  इति, बहुवचने झल्येत्  इति दीर्घत्वमेत्वं च न भवति।'),
('5.9 6.1.97','kas','अपदान्तात् इति वर्तते। अकारादपदान्ताद्गुणे परतः पूर्वपरयोः स्थाने पररूपमेकादेशो भवति। पचन्ति। यजन्ति।'),
('5.9 3.1.133','kas','धातोः इति वर्तते। सर्वधातुभ्यो ण्वुल्तृचौ प्रत्ययौ भवतः। कारकः। कर्ता। हारकः। हर्ता।'),
('c03.l05 leṭ','lsk','एषु पञ्चमो लकारश्छन्दोमात्रगोचरः'),
('c04.l04 MBh verse','mbh','दुष्टः शब्दः स्वरतो वर्णतो वा मिथ्याप्रयुक्तो न तमर्थमाह। स वाग्वज्रो यजमानं हिनस्ति यथेन्द्रशत्रुः स्वरतोऽपराधात्'),
]
for e in extra: add(*e)
# c06.l02 (a)(b)(c) Kāśikā lines and (d) LSK
for lab,pat in [('c06.l02 8.4.1',r'Kāśikā: (रेफषकाराभ्या.*?अग्निर्नयति।)'),('c06.l02 8.4.2',r'Kāśikā: (अट् कु पु.*?गर्गेण।)'),('c06.l02 7.3.84',r'Kāśikā: (सार्वधातुके आर्धधातुके.*?स्तोता।)')]:
    m=re.search(pat,t,flags=re.S); s=re.sub(r'\s+',' ',m.group(1))
    for k,part in enumerate(s.split('…')): add(f'{lab}#{k}','kas',part)
m=re.search(r'The text read: (परोक्षे लिट्.*?बभूवुः।)',t,flags=re.S); s=re.sub(r'\s+',' ',m.group(1))
for k,part in enumerate(re.split(r'…|\(\d\.\d\.\d+\)',s)):
    if re.search(r'[ऀ-ॿ]{3}',part): add(f'c06.l02 LSK#{k}','lsk',part)
open(out_path('work','passages.tsv'),'w',encoding='utf8').write('\n'.join(out)+'\n'); print(len(out))

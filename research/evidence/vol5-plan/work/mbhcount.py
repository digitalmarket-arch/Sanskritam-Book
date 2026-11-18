# Count MBh verse numbers (book,chapter.verse) that have an 'a' half-line, in mbh_01..18_u.htm; star (*) passages and appendices excluded.
import re,glob,sys
G=sys.argv[1]; ids=set(); per={}
for f in sorted(glob.glob(G+'/2_epic/mbh/mbh_[01][0-9]_u.htm')):
    for l in open(f,encoding='utf8'):
        m=re.match(r'^(\d\d),(\d\d\d)\.(\d\d\d)a(?![\d*])',l)
        if m and m.group(3)!='000' and m.groups() not in ids: ids.add(m.groups()); per[m.group(1)]=per.get(m.group(1),0)+1
print(len(ids)); print(per)

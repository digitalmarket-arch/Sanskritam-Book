# Count Rāmāyaṇa verse numbers (book.sarga.verse) with an 'a' half-line in ram_01..07_u.htm.
import re,glob,sys
ids=set()
for f in sorted(glob.glob(sys.argv[1]+'/2_epic/ramayana/ram_0[1-7]_u.htm')):
    for l in open(f,encoding='utf8'):
        m=re.match(r'^(\d)\.(\d\d\d)\.(\d\d\d)a\s',l)
        if m: ids.add(m.groups())
print(len(ids))

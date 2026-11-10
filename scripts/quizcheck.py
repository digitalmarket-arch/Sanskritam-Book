#!/usr/bin/env python3
"""quizcheck.py [--base REV] [--relax] [--not-mcq N,M] [--survey] LESSON...

Checks the multiple-choice questions of a lesson's section 19 (the quiz).

 1. SPREAD (error): with n multiple-choice questions of k options, every option letter is the
    key at least n//k times and at most ceil(n/k)+1 times, and no three multiple-choice
    questions in a row have the same key letter. (--relax lowers the minimum by one.)
 2. AGAINST THE BASE REVISION (default HEAD), question by question (error): the options are the
    same texts, only re-ordered; the option that is keyed is the same text as before; stems are
    unchanged; the number of questions is unchanged.
 3. WARNINGS: letters named in a key entry do not follow the re-ordering; lines changed outside
    section 19.

Exit status 0 = no errors.
"""
import re, sys, subprocess, os, collections, math, json

LET = 'abcd'

def sec19(text):
    m = re.search(r'\n## 19\..*?(?=\n## 20\.)', text, re.S)
    return m.group(0) if m else None

def norm(s):
    return re.sub(r'\s+', ' ', s).strip()

def blocks(text):
    """numbered blocks 'N. ...' at line starts; first occurrence of each N while N increases"""
    out = collections.OrderedDict()
    parts = re.split(r'(?m)^(?=\s{0,3}\d{1,2}\.\s)', text)
    last = 0
    for b in parts:
        m = re.match(r'\s{0,3}(\d{1,2})\.\s', b)
        if not m:
            continue
        n = int(m.group(1))
        if n <= last:
            break
        last = n
        out[n] = b[m.end():]
    return out

def depth0_tokens(s):
    """option-letter tokens '(a)'..'(d)' that are not inside another parenthesis"""
    toks = []
    depth = 0
    i = 0
    while i < len(s):
        m = re.match(r'\(([a-d])\)', s[i:])
        if m:
            if depth == 0:
                toks.append((m.group(1), i))
            i += 3
            continue
        c = s[i]
        if c == '(':
            depth += 1
        elif c == ')':
            depth = max(0, depth - 1)
        i += 1
    return toks

def parse(text, not_mcq=()):
    sec = sec19(text)
    if sec is None:
        return None
    j = sec.find('<details')
    if j < 0:
        j = len(sec)
    qtext, ktext = sec[:j], sec[j:]
    qs = blocks(qtext)
    # key entries: cut at the first blank line
    kraw = blocks(ktext)
    ks = collections.OrderedDict()
    for n, body in kraw.items():
        ks[n] = body.split('\n\n')[0]
    items = collections.OrderedDict()
    for n, body in qs.items():
        body = body.rstrip()
        toks = [(m.group(1), m.start(), m.end()) for m in re.finditer(r'\(([a-d])\)', body)]
        letters = ''.join(t[0] for t in toks)
        regular = len(letters) >= 2 and letters == LET[:len(letters)]
        opts = collections.OrderedDict()
        stem = body
        if regular:
            stem = body[:toks[0][1]]
            for i, (l, s, e) in enumerate(toks):
                end = toks[i + 1][1] if i + 1 < len(toks) else len(body)
                opts[l] = re.sub(r'\s*[·;,]$', '', norm(body[e:end]))  # a trailing separator is not part of the option
        entry = ks.get(n, '')
        km = re.match(r'\s*\(([a-d])\)', entry)
        key = km.group(1) if km else None
        mcq = key is not None and len(letters) >= 2
        if mcq:
            d0 = ''.join(t[0] for t in depth0_tokens(entry))
            after = entry[km.end():].lstrip()
            if len(d0) >= 2 and d0 == LET[:len(d0)] and len(d0) >= len(set(letters)) and not after[:1] in '—–-':
                mcq = False  # a several-part item: (a) … ; (b) … ; (c) …
        if n in not_mcq:
            mcq = False
        items[n] = dict(n=n, stem=norm(stem), body=norm(body), regular=regular, opts=opts, key=key,
                        mcq=mcq, entry=entry, ktoks=[m.group(1) for m in re.finditer(r'\(([a-d])\)', entry)])
    return items

def spread(items, relax=False):
    seq = [(n, it['key']) for n, it in items.items() if it['mcq']]
    n = len(seq)
    errs = []
    if n == 0:
        return seq, errs, None
    ks = [len(it['opts']) for it in items.values() if it['mcq'] and it['regular']]
    k = max(ks) if ks else 4
    cnt = collections.Counter(l for _, l in seq)
    lo = n // k
    hi = math.ceil(n / k) + 1
    if relax:
        lo = max(0, lo - 1)
    if n >= k:
        for l in LET[:k]:
            if cnt.get(l, 0) < lo:
                errs.append(f'spread: ({l}) is the key {cnt.get(l,0)} time(s); the minimum is {lo} (n={n}, k={k})')
            if cnt.get(l, 0) > hi:
                errs.append(f'spread: ({l}) is the key {cnt.get(l,0)} times; the maximum is {hi} (n={n}, k={k})')
    run = 1
    for i in range(1, n):
        run = run + 1 if seq[i][1] == seq[i - 1][1] else 1
        if run == 3:
            errs.append(f'run: questions {seq[i-2][0]}, {seq[i-1][0]}, {seq[i][0]} all have the key ({seq[i][1]})')
    return seq, errs, dict(n=n, k=k, lo=lo, hi=hi, counts=dict(sorted(cnt.items())))

def compare(old, new):
    errs, warns, moved = [], [], []
    if list(old.keys()) != list(new.keys()):
        errs.append(f'question numbers changed: {list(old.keys())} -> {list(new.keys())}')
    for n, o in old.items():
        if n not in new:
            continue
        w = new[n]
        if o['stem'] != w['stem'] and o['regular'] and w['regular']:
            errs.append(f'Q{n}: the stem changed')
        if not (o['regular'] and w['regular']):
            if o['body'] != w['body']:
                errs.append(f'Q{n}: irregular options and the question text changed — leave this question as it was')
            if o['key'] != w['key']:
                errs.append(f'Q{n}: key letter changed on a question that must not move ({o["key"]} -> {w["key"]})')
            continue
        if sorted(o['opts'].values()) != sorted(w['opts'].values()):
            errs.append(f'Q{n}: the option texts are not the same set as before: {list(o["opts"].values())} -> {list(w["opts"].values())}')
            continue
        if o['mcq'] != w['mcq']:
            errs.append(f'Q{n}: was {"multiple-choice" if o["mcq"] else "not multiple-choice"} before and is not the same kind now')
            continue
        if not o['mcq']:
            if list(o['opts'].values()) != list(w['opts'].values()):
                errs.append(f'Q{n}: not a multiple-choice question (several parts) and its parts were re-ordered')
            continue
        if o['opts'][o['key']] != w['opts'].get(w['key']):
            errs.append(f'Q{n}: the keyed answer changed: before ({o["key"]}) "{o["opts"][o["key"]]}" — now ({w["key"]}) "{w["opts"].get(w["key"])}"')
            continue
        vals = list(o['opts'].values())
        if len(set(vals)) == len(vals):
            pi = {l: next(l2 for l2, t2 in w['opts'].items() if t2 == t) for l, t in o['opts'].items()}
            if any(pi[l] != l for l in pi):
                moved.append(n)
            want = [pi.get(l, l) for l in o['ktoks']]
            if want != w['ktoks']:
                warns.append(f'Q{n}: letters in the key entry: expected {" ".join(want)} after the re-ordering, found {" ".join(w["ktoks"])} — check every letter named in the explanation')
    return errs, warns, moved

def main():
    a = sys.argv[1:]
    base = 'HEAD'; relax = False; survey = False; not_mcq = set(); files = []
    i = 0
    while i < len(a):
        if a[i] == '--base': base = a[i + 1]; i += 2
        elif a[i] == '--relax': relax = True; i += 1
        elif a[i] == '--survey': survey = True; i += 1
        elif a[i] == '--not-mcq': not_mcq = set(int(x) for x in a[i + 1].split(',') if x); i += 2
        else: files.append(a[i]); i += 1
    rc = 0
    for f in files:
        text = open(f, encoding='utf-8').read()
        items = parse(text, not_mcq)
        if items is None:
            print(f'{f}: no section 19'); continue
        seq, serrs, info = spread(items, relax)
        s = ''.join(l for _, l in seq)
        if survey:
            print(f'{"OK " if not serrs else "BAD"} {f.split("curriculum/")[-1]:70s} {s:12s} {info["counts"] if info else ""}')
            if serrs: rc = 1
            continue
        print(f'== {f}')
        print('   multiple-choice questions:', ' '.join(f'{n}{l}' for n, l in seq) or '(none)')
        other = [n for n, it in items.items() if not it['mcq']]
        if other:
            print('   not multiple-choice (left alone):', other)
        irr = [n for n, it in items.items() if it['mcq'] and not it['regular']]
        if irr:
            print('   multiple-choice with irregular options (an option names another letter, or the letters are not a, b, c, d in order) — must not be re-ordered:', irr)
        if info:
            print(f'   n={info["n"]} k={info["k"]} — each letter {info["lo"]} to {info["hi"]} times; counts {info["counts"]}')
        errs = list(serrs); warns = []; moved = []
        rel = os.path.relpath(os.path.abspath(f), subprocess.run(['git', 'rev-parse', '--show-toplevel'], capture_output=True, text=True, cwd=os.path.dirname(os.path.abspath(f))).stdout.strip())
        top = subprocess.run(['git', 'rev-parse', '--show-toplevel'], capture_output=True, text=True, cwd=os.path.dirname(os.path.abspath(f))).stdout.strip()
        r = subprocess.run(['git', 'show', f'{base}:{rel}'], capture_output=True, text=True, cwd=top)
        if r.returncode == 0:
            old = parse(r.stdout, not_mcq)
            e2, warns, moved = compare(old, items)
            errs += e2
            print(f'   against {base}: re-ordered questions {moved or "none"}')
            # lines changed outside section 19
            osec, nsec = sec19(r.stdout), sec19(text)
            orest = r.stdout.replace(osec, '') if osec else r.stdout
            nrest = text.replace(nsec, '') if nsec else text
            if orest != nrest:
                ol, nl = orest.split('\n'), nrest.split('\n')
                import difflib
                ch = [l for l in difflib.unified_diff(ol, nl, lineterm='', n=0) if l[:1] in '+-' and l[:3] not in ('+++', '---')]
                warns.append(f'{len(ch)} changed line(s) outside section 19 (allowed only where a line names a quiz option letter):')
                for l in ch[:20]:
                    warns.append('      ' + l[:160])
        else:
            print(f'   (no base version at {base}: only the spread is checked)')
        for e in errs: print('   ERROR  ', e)
        for w in warns: print('   warning', w)
        print('   RESULT:', 'FAIL' if errs else 'PASS')
        if errs: rc = 1
    sys.exit(rc)

if __name__ == '__main__':
    main()

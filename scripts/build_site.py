#!/usr/bin/env python3
"""Build the Sanskritam 2.0 website from the curriculum Markdown.

The site renders the source of truth and holds no content of its own (website/README.md).
Only files whose front matter says `status: reviewed` are published, so drafts never reach
readers. Run from the repository root:

    python3 scripts/build_site.py                       # writes _site/
    python3 scripts/build_site.py --out DIR --ref BRANCH
    python3 scripts/build_site.py --artifact            # home page as a body fragment
    python3 scripts/build_site.py --include-drafts      # local preview of unreviewed files

`--ref` is the git ref that source links point at (default: main). `--artifact` writes
index.html without its <html>/<head>/<body> skeleton, for hosts that supply their own.
"""
from __future__ import annotations

import argparse
import html
import json
import posixpath
import re
import shutil
import sys
import unicodedata
from collections import Counter
from dataclasses import dataclass, field
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from validate import REPO, SECTION_NAMES, parse_sections, split_frontmatter  # noqa: E402
from export_json import parse_vocab  # noqa: E402

import yaml  # noqa: E402
from markdown_it import MarkdownIt  # noqa: E402

REPO_URL = "https://github.com/digitalmarket-arch/Sanskritam-Book"
BASE_URL = "https://digitalmarket-arch.github.io/Sanskritam-Book/"
ASSETS = REPO / "website" / "assets"
FONTS_CSS = (
    "https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700"
    "&family=Noto+Sans:ital,wght@0,400;0,500;0,600;1,400"
    "&family=Noto+Sans+Devanagari:wght@400;500;600"
    "&family=Tiro+Devanagari+Sanskrit:ital@0;1&display=swap"
)
KIT_FIRST = 22  # §22 Teacher Notes … §27 Metadata: the teacher and production kit
RESERVED_IDS = {"settings", "sidebar", "customize", "upgrade", "downloads"}

REGISTERS = {
    "FACT": ("Fact", "fact"),
    "HISTORY": ("History", "history"),
    "TRADITION": ("Tradition", "tradition"),
    "SYMBOL": ("Symbol", "symbol"),
}
REGISTER_RULES = {
    "FACT": "What the language does: sounds, letters, forms, meanings. Quizzes test these.",
    "HISTORY": "Dated evidence about the past. Always cited; dates are given as ranges.",
    "TRADITION": "What a named tradition or text teaches, always attributed. Tested only "
                 "as “according to …”.",
    "SYMBOL": "Meanings people attach to sounds and words. Presented with respect; "
              "never tested.",
}
# Short display names for [REF:key] citations; full entries live in REFERENCES.md.
REF_NAMES = {
    "ashtadhyayi": "Aṣṭādhyāyī", "mahabhashya": "Mahābhāṣya", "kashika": "Kāśikā",
    "siddhantakaumudi": "Siddhāntakaumudī", "laghukaumudi": "Laghukaumudī",
    "paniniyashiksha": "Pāṇinīya Śikṣā", "pratishakhya-rv": "Ṛgveda-Prātiśākhya",
    "maheshvarasutras": "Māheśvara-sūtras", "amarakosha": "Amarakośa",
    "dhatupatha": "Dhātupāṭha", "bhagavadgita": "Bhagavadgītā",
    "mahabharata": "Mahābhārata", "brhadaranyaka": "Bṛhadāraṇyaka Upaniṣad",
    "mundaka": "Muṇḍaka Upaniṣad", "hitopadesha": "Hitopadeśa", "rigveda": "Ṛgveda",
    "panchatantra": "Pañcatantra", "raghuvamsha": "Raghuvaṃśa",
    "apte1890": "Apte 1890", "cardona1997": "Cardona 1997", "coulson2010": "Coulson 2010",
    "goldman2019": "Goldman & Sutherland Goldman 1999", "macdonell1927": "Macdonell 1927",
    "monierwilliams1899": "Monier-Williams 1899", "oed": "OED",
    "whitney1889": "Whitney 1889", "burrow2001": "Burrow 2001",
    "census2011": "Census of India 2011", "stateemblem1950": "State Emblem 1950",
    "ifrah2000": "Ifrah 2000", "jamison2014": "Jamison & Brereton 2014",
    "mallory2006": "Mallory & Adams 2006", "masica1991": "Masica 1991",
    "ladefoged2015": "Ladefoged & Johnson 2015", "ohala1994": "Ohala 1994",
    "perry1952": "Perry 1952", "lichtheim1980": "Lichtheim 1980", "ryder1925": "Ryder 1925",
    "roediger2006": "Roediger & Karpicke 2006", "cepeda2006": "Cepeda et al. 2006",
    "nation2013": "Nation 2013", "krashen1982": "Krashen 1982", "cefr2020": "CEFR 2020",
}
TYPE_LABELS = {
    "orientation": "Orientation", "sound": "Sounds", "script": "Script",
    "vocabulary": "Vocabulary", "grammar": "Grammar", "conversation": "Conversation",
    "reading": "Reading", "review": "Review and assessment",
}
# Root documents published as pages: source -> (page, nav key, short title).
DOC_PAGES = {
    "README.md": ("about.html", None, "About the project"),
    "EDITORIAL_GUIDELINES.md": ("method.html", "method", "Editorial method"),
    "GLOSSARY.md": ("glossary.html", None, "Glossary"),
    "ROADMAP.md": ("roadmap.html", None, "Roadmap"),
    "CHANGELOG.md": ("changelog.html", None, "Changelog"),
    "REFERENCES.md": ("references.html", "sources", "Sources"),
}

DEVA = "\u0900-\u097F\uA8E0-\uA8FF\u1CD0-\u1CFF"
DV_RE = re.compile(
    rf"[{DEVA}][{DEVA}\u200c\u200d]*(?:[\s,;:!?\-–—]+[{DEVA}][{DEVA}\u200c\u200d]*)*"
)
TAG_SPLIT_RE = re.compile(r"(<[^>]*>)")
TAG_RE = re.compile(r"<(/?)([a-zA-Z][a-zA-Z0-9]*)([^>]*)>")
LANG_ATTR_RE = re.compile(r'\blang="([a-zA-Z-]+)"')
NO_TEXT_TAGS = {"code", "pre", "script", "style", "svg", "title"}
REF_RE = re.compile(r"\[REF:([a-z0-9-]+)((?:\s[^\]]*)?)\]")
XREF_RE = re.compile(
    r"(?<![\w.])(?P<id>v[1-5]\.c\d{2}(?:\.l\d{2})?)(?:['’]s)?(?!\w)(?:\s?§(?P<id_sec>\d{1,2})(?!\d))?"
    r"|(?<![\w.])l(?P<sib>\d{2})(?:['’]s)?(?!\w)(?:\s?§(?P<sib_sec>\d{1,2})(?!\d))?"
    r"|(?<![§\w])§(?P<bare>\d{1,2})(?!\d)"
)
LIST_JOIN_RE = re.compile(r"\s*(?:,|/|–|&|and|or)?\s*(?:and|or)?\s*")
PLANNED_RE = re.compile(r"<code>planned:([^<]+)</code>")
REGISTER_LABEL_RE = re.compile(r"^\*\*\[(FACT|HISTORY|TRADITION|SYMBOL)\s*·\s*([^\]]+)\]\*\*\s*")
H1_RE = re.compile(r"^# .*\n?", re.MULTILINE)
H2_SPLIT_RE = re.compile(r"^## (.+?)\s*$", re.MULTILINE)

SPEAKER = (
    '<span class="audio-mark" title="Audio in production">'
    '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">'
    '<path d="M2 6h3l4-3v10l-4-3H2z" fill="currentColor"/>'
    '<path d="M11 5.5a3.5 3.5 0 0 1 0 5M12.6 3.6a6 6 0 0 1 0 8.8" fill="none" '
    'stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg></span>'
)
TICK = (
    '<span class="tick" title="Marked complete">'
    '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">'
    '<path d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" stroke-width="2" '
    'stroke-linecap="round" stroke-linejoin="round"/></svg></span>'
)


def esc(text: object) -> str:
    return html.escape(str(text), quote=True)


def slugify(text: str) -> str:
    text = re.sub(r"[\u0300-\u036f]", "", unicodedata.normalize("NFD", text))
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def fold(text: str) -> str:
    """Search key: lower-case, Latin diacritics removed (IAST ā → a), Devanagari kept."""
    return re.sub(r"[\u0300-\u036f]", "", unicodedata.normalize("NFD", text)).lower()


def plain(md_text: str) -> str:
    return re.sub(r"[*_`]", "", md_text).strip()


def href(page: str, target: str) -> str:
    """Relative link from one site page to another (both root-relative paths)."""
    path, _, frag = target.partition("#")
    rel = posixpath.relpath(path, posixpath.dirname(page) or ".") if path else ""
    return rel + (f"#{frag}" if frag else "")


def deva(text: str, lang: str = "sa", cls: str = "dv") -> str:
    return f'<span class="{cls}" lang="{lang}">{esc(text)}</span>'


def nice_date(value: object) -> str:
    try:
        d = value if isinstance(value, date) else date.fromisoformat(str(value))
    except ValueError:
        return str(value)
    return f"{d.day} {d.strftime('%B')} {d.year}"


# --------------------------------------------------------------------------- course model

@dataclass
class Lesson:
    id: str
    vol: int
    ch: int
    num: int
    fm: dict
    body: str
    src: str
    url: str
    sections: list
    anchors: dict

    @property
    def title(self) -> dict:
        return self.fm.get("title") or {}


@dataclass
class Chapter:
    id: str
    vol: int
    ch: int
    fm: dict
    body: str
    src: str
    url: str
    live: bool = False
    lessons: list = field(default_factory=list)

    @property
    def title(self) -> dict:
        return self.fm.get("title") or {}


@dataclass
class Volume:
    n: int
    fm: dict
    body: str
    src: str
    url: str
    chapters: list = field(default_factory=list)

    @property
    def title(self) -> dict:
        return self.fm.get("title") or {}

    @property
    def live_chapters(self) -> list:
        return [c for c in self.chapters if c.live]


def read_doc(path: Path) -> tuple[dict, str]:
    fm_text, body = split_frontmatter(path.read_text(encoding="utf-8"))
    return (yaml.safe_load(fm_text) or {}) if fm_text else {}, body


def load_course(drafts: bool) -> list[Volume]:
    def ok(fm: dict) -> bool:
        return drafts or fm.get("status") == "reviewed"

    volumes = []
    for vdir in sorted((REPO / "curriculum").glob("volume-*")):
        n = int(vdir.name.split("-")[1])
        vpath = vdir / "volume.md"
        vfm, vbody = read_doc(vpath) if vpath.exists() else ({}, "")
        vol = Volume(n, vfm, vbody, vpath.relative_to(REPO).as_posix(), f"volume-{n}/index.html")
        for cdir in sorted(vdir.glob("chapter-*")):
            c = int(cdir.name.split("-")[1])
            cfm, cbody = read_doc(cdir / "chapter.md")
            chap = Chapter(cfm.get("id", f"v{n}.c{c:02d}"), n, c, cfm, cbody,
                           (cdir / "chapter.md").relative_to(REPO).as_posix(),
                           f"volume-{n}/chapter-{c:02d}/index.html")
            for path in sorted(cdir.glob("lesson-*.md")):
                fm, body = read_doc(path)
                if not ok(fm):
                    continue
                sections = parse_sections(body)
                chap.lessons.append(Lesson(
                    fm["id"], n, c, int(fm["lesson"]), fm, body,
                    path.relative_to(REPO).as_posix(),
                    f"volume-{n}/chapter-{c:02d}/{path.stem}.html",
                    sections, {i: f"{i}-{slugify(name)}" for i, name, _ in sections},
                ))
            chap.lessons.sort(key=lambda lesson: lesson.num)
            chap.live = ok(cfm) and bool(chap.lessons)
            vol.chapters.append(chap)
        volumes.append(vol)
    return volumes


def planned_volumes() -> dict[int, dict]:
    """The five-volume plan from README.md: number -> sa, en, summary, levels."""
    text = (REPO / "README.md").read_text(encoding="utf-8")
    out = {}
    for m in re.finditer(r"^(\d)\. \*\*(.+?) — (.+?)\*\* · (.+?) \((.+?)\)\s*$", text, re.M):
        out[int(m.group(1))] = {"sa": m.group(2), "en": m.group(3), "summary": m.group(4),
                                "levels": m.group(5)}
    return out


def release() -> tuple[str, str]:
    text = (REPO / "CHANGELOG.md").read_text(encoding="utf-8")
    m = re.search(r"^## \[(\d+\.\d+\.\d+)\] — (\d{4}-\d{2}-\d{2})", text, re.M)
    return (m.group(1), m.group(2)) if m else ("", "")


# --------------------------------------------------------------------------- markdown

def _register_rule(state) -> None:
    """Turn `> **[FACT · तथ्यम्]** …` blockquotes into labelled register callouts."""
    tokens = state.tokens
    for i, tok in enumerate(tokens):
        if tok.type != "blockquote_open" or i + 2 >= len(tokens):
            continue
        if tokens[i + 1].type != "paragraph_open" or tokens[i + 2].type != "inline":
            continue
        m = REGISTER_LABEL_RE.match(tokens[i + 2].content)
        if not m:
            continue
        tokens[i + 2].content = tokens[i + 2].content[m.end():]
        tok.meta = {"reg": m.group(1), "sa": m.group(2).strip()}
        for close in tokens[i + 1:]:
            if close.type == "blockquote_close" and close.level == tok.level:
                close.meta = {"reg": m.group(1)}
                break


def _table_lang_rule(state) -> None:
    """Mark cells under a हिन्दी / Hindi column header as lang="hi"."""
    tokens = state.tokens
    hindi_cols: set[int] = set()
    col = 0
    in_head = False
    for i, tok in enumerate(tokens):
        if tok.type == "table_open":
            hindi_cols = set()
        elif tok.type == "thead_open":
            in_head = True
        elif tok.type == "thead_close":
            in_head = False
        elif tok.type == "tr_open":
            col = 0
        elif tok.type in ("th_open", "td_open"):
            if in_head and i + 1 < len(tokens) and re.search(r"हिन्दी|Hindi", tokens[i + 1].content):
                hindi_cols.add(col)
            if tok.type == "td_open" and col in hindi_cols:
                tok.attrSet("lang", "hi")
            col += 1


def _blockquote_open(self, tokens, idx, options, env):
    meta = tokens[idx].meta or {}
    if meta.get("reg"):
        en, cls = REGISTERS[meta["reg"]]
        return (f'<aside class="reg reg-{cls}" aria-label="{en}">'
                f'<p class="reg-label"><span>{en}</span> '
                f'<span class="dv" lang="sa">{esc(meta.get("sa", ""))}</span></p>\n')
    return "<blockquote>\n"


def _blockquote_close(self, tokens, idx, options, env):
    return "</aside>\n" if (tokens[idx].meta or {}).get("reg") else "</blockquote>\n"


def _heading_open(self, tokens, idx, options, env):
    tok = tokens[idx]
    if not tok.attrGet("id") and isinstance(env, dict) and "ids" in env:
        text = tokens[idx + 1].content if idx + 1 < len(tokens) else ""
        tok.attrSet("id", unique_id(env, text))
    return self.renderToken(tokens, idx, options, env)


def _table_open(self, tokens, idx, options, env):
    return '<div class="table-wrap">' + self.renderToken(tokens, idx, options, env)


def _table_close(self, tokens, idx, options, env):
    return self.renderToken(tokens, idx, options, env) + "</div>\n"


def unique_id(env: dict, text: str) -> str:
    base = slugify(plain(text)) or "part"
    if env.get("prefix"):
        base = f"{env['prefix']}-{base}"
    ident, n = base, 2
    while ident in env["ids"] or ident in RESERVED_IDS:
        ident, n = f"{base}-{n}", n + 1
    env["ids"].add(ident)
    return ident


def make_markdown() -> MarkdownIt:
    md = MarkdownIt("commonmark", {"html": True}).enable(["table", "strikethrough"])
    md.core.ruler.after("block", "sk_registers", _register_rule)
    md.core.ruler.after("sk_registers", "sk_table_lang", _table_lang_rule)
    md.add_render_rule("blockquote_open", _blockquote_open)
    md.add_render_rule("blockquote_close", _blockquote_close)
    md.add_render_rule("heading_open", _heading_open)
    md.add_render_rule("table_open", _table_open)
    md.add_render_rule("table_close", _table_close)
    return md


def _planned(m: re.Match) -> str:
    path = m.group(1)
    kind = ("audio" if "/audio/" in path else "worksheet" if "/worksheets/" in path
            else "diagram" if "/diagrams/" in path else "quiz sheet" if "/quizzes/" in path
            else "illustration" if "/images/" in path else "asset")
    return f'<span class="planned" title="Planned asset: {path}">{kind} in production</span>'


@dataclass
class Ctx:
    page: str                      # root-relative output path of the page being built
    lesson: Lesson | None = None   # enables bare §N links within a lesson page
    chapter: tuple | None = None   # (volume, chapter): resolves sibling ids such as "l04 §12"
    ids: set = field(default_factory=set)


# --------------------------------------------------------------------------- site builder

class Site:
    def __init__(self, args: argparse.Namespace):
        self.args = args
        self.volumes = load_course(args.include_drafts)
        self.plan = planned_volumes()
        self.version, self.version_date = release()
        self.lessons = [lesson for v in self.volumes for c in v.chapters if c.live
                        for lesson in c.lessons]
        self.lesson_by_id = {lesson.id: lesson for lesson in self.lessons}
        self.chapters = [c for v in self.volumes for c in v.live_chapters]
        self.chapter_by_id = {c.id: c for c in self.chapters}
        self.md = make_markdown()
        self.out = Path(args.out).resolve()
        self.pages: list[str] = []
        self.index: list[dict] = []
        refs_text = (REPO / "REFERENCES.md").read_text(encoding="utf-8")
        self.ref_keys = re.findall(r'<a id="([a-z0-9-]+)"></a>', refs_text)
        self.ref_uses: dict[str, Counter] = {}
        for lesson in self.lessons:
            for key in REF_RE.findall(lesson.body):
                self.ref_uses.setdefault(key[0], Counter())[lesson.id] += 1

    # ----- rendering helpers

    def render(self, text: str, ctx: Ctx, prefix: str = "", wrap_lang: str | None = None,
               fix_links: bool = False) -> str:
        out = self.md.render(text, {"ids": ctx.ids, "prefix": prefix})
        if fix_links:
            out = self.doc_links(out, ctx.page)
        if wrap_lang:
            out = f'<div lang="{wrap_lang}">{out}</div>'
        return self.post(out, ctx)

    def render_inline(self, text: str, ctx: Ctx) -> str:
        return self.post(self.md.renderInline(text), ctx)

    def post(self, out: str, ctx: Ctx) -> str:
        out = PLANNED_RE.sub(_planned, out)
        out = re.sub(r"🔊\s*(?=<span class=\"planned\")", "", out).replace("🔊", SPEAKER)
        return self.text_pass(out, ctx)

    def cite(self, m: re.Match, ctx: Ctx, tag) -> str:
        key, loc = m.group(1), m.group(2).strip()
        name = esc(REF_NAMES.get(key, key))
        link = href(ctx.page, f"references.html#{key}")
        return f'<span class="cite">[<a href="{link}">{name}</a>{" " + tag(loc) if loc else ""}]</span>'

    def text_pass(self, out: str, ctx: Ctx) -> str:
        """Link lesson ids and § numbers, and tag Devanagari runs with lang, in text only."""
        parts = TAG_SPLIT_RE.split(out)
        result = []
        no_text = in_link = 0
        langs: list[list] = []  # [tag, lang, depth, already styled as Devanagari]
        for i, part in enumerate(parts):
            if i % 2:
                result.append(part)
                m = TAG_RE.match(part)
                if not m:
                    continue
                closing, name, attrs = m.group(1) == "/", m.group(2).lower(), m.group(3)
                if attrs.rstrip().endswith("/"):
                    continue
                if name in NO_TEXT_TAGS:
                    no_text = max(0, no_text + (-1 if closing else 1))
                elif name == "a":
                    in_link = max(0, in_link + (-1 if closing else 1))
                lm = None if closing else LANG_ATTR_RE.search(attrs)
                if lm:
                    styled = bool(re.search(r'class="[^"]*\b(?:dv|display)\b', attrs))
                    langs.append([name, lm.group(1), 1, styled])
                elif langs and langs[-1][0] == name:
                    langs[-1][2] += -1 if closing else 1
                    if langs[-1][2] == 0:
                        langs.pop()
            elif part and not no_text:
                lang, styled = (langs[-1][1], langs[-1][3]) if langs else ("sa", False)
                result.append(self.enrich(part, ctx, lang, linkable=not in_link, styled=styled))
            else:
                result.append(part)
        return "".join(result)

    def enrich(self, text: str, ctx: Ctx, lang: str, linkable: bool, styled: bool = False) -> str:
        lang = lang if lang in ("sa", "hi") else "sa"

        def tag(chunk: str) -> str:
            if styled:
                return chunk
            return DV_RE.sub(lambda m: f'<span class="dv" lang="{lang}">{m.group(0)}</span>', chunk)

        if not linkable:
            return tag(text)
        pieces, last = [], 0
        prev: tuple[Lesson | None, int] = (None, -1)  # last lesson linked, and where it ended
        for m in re.finditer(f"{REF_RE.pattern}|{XREF_RE.pattern}", text):
            if m.group(0).startswith("[REF:"):
                link, target = self.cite(REF_RE.match(m.group(0)), ctx, tag), None
            else:
                # "l02 §14, §16 and §17": a § list continues the lesson named before it.
                after_ref = prev[0] if prev[1] >= 0 and LIST_JOIN_RE.fullmatch(text[prev[1]:m.start()]) else None
                link, target = self.xref(XREF_RE.match(m.group(0)), text[:m.start()], ctx, after_ref)
            if link is None:
                continue
            pieces.append(tag(text[last:m.start()]))
            pieces.append(link)
            last = m.end()
            prev = (target, m.end()) if target is not None else (None, -1)
        pieces.append(tag(text[last:]))
        return "".join(pieces)

    def xref(self, m: re.Match, before: str, ctx: Ctx,
             after_ref: Lesson | None = None) -> tuple[str | None, Lesson | None]:
        """Link one id or § reference; returns (html, lesson it points into)."""
        ident, sec = m.group("id") or m.group("sib"), m.group("id_sec") or m.group("sib_sec")
        if m.group("sib"):
            # "l04 §12" names a lesson of the chapter being read.
            if ctx.chapter is None:
                return None, None
            ident = "v{}.c{:02d}.l{}".format(*ctx.chapter, m.group("sib"))
        if ident:
            target = None
            if ".l" in ident:
                target = self.lesson_by_id.get(ident)
                if target is None:
                    return None, None
                url = target.url
                if sec and int(sec) in target.anchors:
                    url += "#" + target.anchors[int(sec)]
            else:
                chapter = self.chapter_by_id.get(ident)
                if chapter is None:
                    return None, None
                url = chapter.url
            return f'<a class="xref" href="{href(ctx.page, url)}">{m.group(0)}</a>', target
        n = int(m.group("bare"))
        if after_ref is not None:
            anchor = after_ref.anchors.get(n)
            if anchor is None:
                return None, None
            return (f'<a class="xref" href="{href(ctx.page, after_ref.url + "#" + anchor)}">'
                    f'{m.group(0)}</a>', after_ref)
        # A bare §N points into the current lesson, unless a capitalised word before it
        # makes it someone else's paragraph (Whitney §19, STYLE_GUIDE §4).
        if ctx.lesson is None:
            return None, None
        anchor = ctx.lesson.anchors.get(n)
        word = re.search(r"([A-Za-z][A-Za-z_]*)[^A-Za-z]*$", before)
        if anchor is None or (word and word.group(1)[0].isupper()):
            return None, None
        return f'<a class="xref" href="#{anchor}">{m.group(0)}</a>', ctx.lesson

    def doc_links(self, out: str, page: str) -> str:
        """Point links between root documents at their pages; others at GitHub."""
        def fix(m: re.Match) -> str:
            target = html.unescape(m.group(1))
            if re.match(r"^(?:[a-z]+:|#)", target):
                return m.group(0)
            path, _, frag = target.partition("#")
            path = posixpath.normpath(path)
            if path in DOC_PAGES:
                new = href(page, DOC_PAGES[path][0]) + (f"#{frag}" if frag else "")
            else:
                kind = "tree" if (REPO / path).is_dir() else "blob"
                new = f"{REPO_URL}/{kind}/{self.args.ref}/{path}" + (f"#{frag}" if frag else "")
            return f'href="{esc(new)}"'
        return re.sub(r'href="([^"]*)"', fix, out)

    def split_h2(self, body: str) -> list[tuple[str, str]]:
        """[(heading, content)] for a document's ## sections; the preamble has heading ''."""
        matches = list(H2_SPLIT_RE.finditer(body))
        out = [("", body[:matches[0].start()] if matches else body)]
        for i, m in enumerate(matches):
            end = matches[i + 1].start() if i + 1 < len(matches) else len(body)
            out.append((m.group(1), body[m.start():end]))
        return out

    # ----- page shell

    def shell(self, page: str, title: str, desc: str, main: str, nav: str | None = None,
              scripts: tuple[str, ...] = ()) -> str:
        root = "../" * page.count("/")
        links = [("Course", "index.html#course", "course"), ("Words", "words.html", "words"),
                 ("Sources", "references.html", "sources"), ("Method", "method.html", "method"),
                 ("Search", "search.html", "search")]
        nav_html = ""
        for label, url, key in links:
            current = ' aria-current="page"' if key == nav else ""
            nav_html += f'<a href="{root}{url}"{current}>{label}</a>'
        version = (f"Content release {esc(self.version)} · {esc(nice_date(self.version_date))}. "
                   if self.version else "")
        head = (
            f"<title>{esc(title)}</title>\n"
            '<meta name="claude:viewport-fit-sides" content="cover">\n'
            f'<meta name="description" content="{esc(desc)}">\n'
            f'<meta property="og:title" content="{esc(title)}">\n'
            f'<meta property="og:description" content="{esc(desc)}">\n'
            '<link rel="preconnect" href="https://fonts.googleapis.com">\n'
            '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
            f'<link rel="stylesheet" href="{esc(FONTS_CSS)}">\n'
            f'<link rel="stylesheet" href="{root}assets/site.css">\n'
        )
        body = f"""<a class="skip" href="#main">Skip to content</a>
<header class="site-head">
  <div class="wrap head-row">
    <a class="brand" href="{root}index.html"><span class="display" lang="sa">संस्कृतम्</span><span class="brand-v">2.0</span></a>
    <nav class="nav" aria-label="Site">{nav_html}</nav>
  </div>
</header>
<main id="main" class="wrap">
{main}
</main>
<footer class="site-foot">
  <div class="wrap foot-row">
    <p class="foot-brand"><span class="display" lang="sa">संस्कृतम्</span> 2.0 — a research-based Sanskrit course, built in the open.</p>
    <p>{version}Only reviewed lessons are published here. Every page is generated from the course's Markdown source, where each claim carries its citation.</p>
    <nav class="foot-nav" aria-label="Project">
      <a href="{root}about.html">About</a><a href="{root}roadmap.html">Roadmap</a><a href="{root}changelog.html">Changelog</a><a href="{root}glossary.html">Glossary</a><a href="{REPO_URL}">Source on GitHub</a>
    </nav>
  </div>
</footer>
"""
        tail = "".join(f'<script src="{root}{s}" defer></script>\n' for s in scripts)
        tail += f'<script src="{root}assets/site.js" defer></script>\n'
        if page == "index.html" and self.args.artifact:
            return head + body + tail
        return ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
                '<meta name="viewport" content="width=device-width, initial-scale=1, '
                f'viewport-fit=cover">\n{head}</head>\n<body>\n{body}{tail}</body>\n</html>\n')

    def write(self, page: str, content: str) -> None:
        path = self.out / page
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        self.pages.append(page)

    # ----- shared fragments

    def lesson_title_html(self, lesson: Lesson, sa_cls: str = "sa") -> str:
        t = lesson.title
        return (f'<span class="{sa_cls} dv" lang="sa">{esc(t.get("sa", ""))}</span>'
                f'<span class="en">{esc(t.get("en", lesson.id))}</span>')

    def lesson_list(self, page: str, chapter: Chapter) -> str:
        items = "".join(
            f'<li data-lesson="{esc(lesson.id)}"><span class="n">{lesson.num}</span>'
            f'<a href="{href(page, lesson.url)}">{self.lesson_title_html(lesson)}</a>{TICK}</li>'
            for lesson in chapter.lessons)
        return f'<ol class="lessons">{items}</ol>'

    def chapter_heading(self, page: str, chapter: Chapter, level: int) -> str:
        t = chapter.title
        inner = (f'<span class="chap-n">Chapter {chapter.ch}</span>'
                 f'{deva(t.get("sa", ""))} · {esc(t.get("en", ""))}')
        if chapter.live:
            inner = f'<a href="{href(page, chapter.url)}">{inner}</a>'
        return f'<h{level} class="chap-title">{inner}</h{level}>'

    def course_map(self, page: str) -> str:
        blocks = []
        known = {v.n: v for v in self.volumes}
        for n in sorted(set(self.plan) | set(known)):
            plan = self.plan.get(n, {})
            vol = known.get(n)
            sa = (vol.title.get("sa") if vol else None) or plan.get("sa", "")
            en = (vol.title.get("en") if vol else None) or plan.get("en", "")
            title = f'{deva(sa, cls="display")} <span class="en">{esc(en)}</span>'
            if vol and vol.live_chapters:
                title = f'<a href="{href(page, vol.url)}">{title}</a>'
            chapters_html = ""
            if vol and vol.live_chapters:
                live = len(vol.live_chapters)
                lessons = sum(len(c.lessons) for c in vol.live_chapters)
                pending = len(vol.chapters) - live
                status = f"{lessons} lessons in {live} chapters"
                status += f" · {pending} more in preparation" if pending else " · complete"
                cards = []
                for chapter in vol.chapters:
                    if chapter.live:
                        cards.append(
                            f'<div class="chap">{self.chapter_heading(page, chapter, 4)}'
                            f'<p class="chap-meta">{esc(chapter.fm.get("cefr", ""))} · '
                            f'{len(chapter.lessons)} lessons</p>{self.lesson_list(page, chapter)}</div>')
                    else:
                        cards.append(
                            f'<div class="chap is-planned">{self.chapter_heading(page, chapter, 4)}'
                            '<p class="chap-meta">In preparation</p></div>')
                chapters_html = f'<div class="chapters">{"".join(cards)}</div>'
            else:
                status = "Planned"
            summary = plan.get("summary", "")
            levels = plan.get("levels", "")
            meta = " · ".join(x for x in (esc(summary), esc(levels), status) if x)
            blocks.append(
                f'<section class="vol" aria-labelledby="vol-{n}"><div class="vol-head">'
                f'<span class="vol-n">Volume {n}</span><h3 class="vol-title" id="vol-{n}">{title}</h3>'
                f'<p class="vol-meta">{meta}</p></div>{chapters_html}</section>')
        return "".join(blocks)

    # ----- pages

    def build_home(self) -> None:
        page = "index.html"
        ctx = Ctx(page)
        first = self.lessons[0]
        ids = " ".join(lesson.id for lesson in self.lessons)
        examples = self.register_examples(ctx)
        cards = "".join(
            f'<div class="register-card">{examples.get(k, "")}<p class="rule">{esc(REGISTER_RULES[k])}</p></div>'
            for k in REGISTERS)
        anatomy_groups = [("Learn", 1, 17), ("Practise", 18, 21), ("Teach and produce", 22, 27)]
        anatomy = "".join(
            f'<div><h3>{label}</h3><ol>' + "".join(
                f'<li><span class="n">{i}</span>{esc(SECTION_NAMES[i - 1])}</li>'
                for i in range(lo, hi + 1)) + "</ol></div>"
            for label, lo, hi in anatomy_groups)
        main = f"""
<section class="hero" aria-labelledby="hero-title">
  <div class="hero-text">
    <p class="eyebrow">A Sanskrit course for English and <span class="dv" lang="hi">हिन्दी</span> speakers</p>
    <h1 class="wordmark" id="hero-title"><span class="display" lang="sa">संस्कृतम्</span> <span class="wordmark-v">2.0</span></h1>
    <p class="lede">Learn Sanskrit from its sounds up: the sound map and the script first, then words, sentences and conversation. Every claim is checked against a named source, and every lesson is reviewed before it appears here.</p>
    <div class="cta">
      <a class="btn primary" href="{href(page, first.url)}">Start lesson 1</a>
      <a class="btn" href="#course">See the course map</a>
    </div>
    <p class="hero-meta">{len(self.lessons)} lessons published · {len(self.ref_keys)} sources · every lesson in 27 sections</p>
    <p class="progress-note" data-done-summary data-total="{len(self.lessons)}" data-ids="{esc(ids)}" hidden></p>
  </div>
  {self.sound_grid(ctx)}
</section>

<section class="band" aria-labelledby="registers-h">
  <div class="band-h"><h2 id="registers-h">Four kinds of statement, never mixed</h2>
  <p>Each lesson labels what kind of claim you are reading.</p></div>
  <div class="registers">{cards}</div>
</section>

<section class="band" aria-labelledby="anatomy-h">
  <div class="band-h"><h2 id="anatomy-h">Inside every lesson</h2>
  <p>The same 27 sections, always in this order, so you know where everything is.</p></div>
  <div class="anatomy">{anatomy}</div>
</section>

<section class="band" id="course" aria-labelledby="course-h">
  <div class="band-h"><h2 id="course-h">Course map</h2>
  <p>Five volumes, from the sound map to Kālidāsa. Work through them in order.</p></div>
  {self.course_map(page)}
</section>
"""
        self.write(page, self.shell(
            page, "Sanskritam 2.0",
            "A research-based Sanskrit course for English and Hindi speakers: sounds and script "
            "first, then words and sentences. Every lesson reviewed, every claim sourced.",
            main, nav="course"))

    def sound_grid(self, ctx: Ctx) -> str:
        """The 25-stop grid, read from the preview table in v1.c01.l02 (The Sound Map)."""
        lesson = self.lesson_by_id.get("v1.c01.l02")
        if lesson is None:
            return ""
        rows, manners = [], []
        for line in lesson.body.splitlines():
            if len(rows) == 5:
                break
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if len(cells) == 7 and cells[0] == "वर्ग" and not manners:
                manners = [re.sub(r"^[ऀ-ॿ\s]+", "", c) for c in cells[2:]]
            if len(cells) == 7 and cells[0].endswith("-वर्ग"):
                place = re.match(r"(\S+) \(([^)]+)\) (\w+)", cells[1])
                letters = [re.match(r"(\S+) /([^/]+)/", c) for c in cells[2:]]
                if place and all(letters):
                    rows.append((place.groups(), [x.groups() for x in letters]))
        if len(rows) != 5 or len(manners) != 5:
            return ""
        head = '<div class="vg-h" aria-hidden="true"></div>' + "".join(
            f'<div class="vg-h">{esc(m)}</div>' for m in manners)
        body = ""
        for (sa, iast, en), letters in rows:
            body += (f'<div class="vg-place">{deva(sa)}<small>{esc(iast)} · {esc(en)}</small></div>'
                     + "".join(f'<div class="vg-cell"><span class="l" lang="sa">{esc(ch)}</span>'
                               f'<span class="p">/{esc(ipa)}/</span></div>' for ch, ipa in letters))
        link = href(ctx.page, lesson.url)
        return (f'<figure class="varga"><div class="varga-grid" role="img" '
                f'aria-label="The 25 stop consonants arranged by place and manner of articulation">'
                f'{head}{body}</div><figcaption>The 25 stops of the Sanskrit sound map: five places, '
                f'from the back of the mouth to the lips, by five manners. Previewed in '
                f'<a href="{link}">The Sound Map</a>, taught one by one in Volume 1, Chapter 3.'
                f'</figcaption></figure>')

    def register_examples(self, ctx: Ctx) -> dict[str, str]:
        """The canonical example callouts from STYLE_GUIDE.md §4, rendered as in lessons."""
        text = (REPO / "STYLE_GUIDE.md").read_text(encoding="utf-8")
        m = re.search(r"## 4\..*?```markdown\n(.*?)```", text, re.S)
        out = {}
        for block in (m.group(1).split("\n\n") if m else []):
            kind = re.match(r"> \*\*\[(\w+)", block.strip())
            if kind:
                out[kind.group(1)] = self.render(block.strip(), ctx)
        return out

    def build_volume(self, vol: Volume) -> None:
        page = vol.url
        ctx = Ctx(page)
        plan = self.plan.get(vol.n, {})
        t = vol.title
        cards = []
        for chapter in vol.chapters:
            meta = (f'{esc(chapter.fm.get("cefr", ""))} · {len(chapter.lessons)} lessons'
                    if chapter.live else "In preparation")
            cards.append(f'<div class="chap{"" if chapter.live else " is-planned"}">'
                         f'{self.chapter_heading(page, chapter, 2)}<p class="chap-meta">{meta}</p>'
                         f'{self.lesson_list(page, chapter) if chapter.live else ""}</div>')
        body = ""
        if vol.fm.get("status") == "reviewed" or self.args.include_drafts:
            body = f'<div class="prose doc-body">{self.render(H1_RE.sub("", vol.body, 1), ctx)}</div>'
        main = f"""
<nav class="crumbs" aria-label="Breadcrumb"><a href="{href(page, 'index.html#course')}">Course</a></nav>
<header class="masthead">
  <p class="eyebrow">Volume {vol.n} · {esc(plan.get("levels", vol.fm.get("cefr", "")))}</p>
  <h1 class="t-sa display" lang="sa">{esc(t.get("sa", ""))}</h1>
  <p class="t-en">{esc(t.get("en", ""))}</p>
  <p class="t-sub">{esc(plan.get("summary", ""))}</p>
</header>
<div class="chapters">{"".join(cards)}</div>
{body}
"""
        self.write(page, self.shell(page, f"Volume {vol.n}: {t.get('en', '')} · Sanskritam 2.0",
                                    f"Volume {vol.n} of Sanskritam 2.0 — {t.get('en', '')}.",
                                    main, nav="course"))

    def build_chapter(self, chapter: Chapter) -> None:
        page = chapter.url
        ctx = Ctx(page, chapter=(chapter.vol, chapter.ch))
        t = chapter.title
        vol = next(v for v in self.volumes if v.n == chapter.vol)
        parts = []
        for heading, content in self.split_h2(H1_RE.sub("", chapter.body, 1)):
            rendered = self.render(content, ctx)
            if heading.lower().startswith("assets manifest"):
                rendered = (f'<details class="prod"><summary>Production notes: {esc(heading)}'
                            f'</summary>{rendered}</details>')
            parts.append(rendered)
        cards = "".join(
            f'<li data-lesson="{esc(lesson.id)}"><span class="n">{lesson.num}</span>'
            f'<a href="{href(page, lesson.url)}">{self.lesson_title_html(lesson)}'
            f'<span class="meta">{esc(TYPE_LABELS.get(lesson.fm.get("lesson_type"), ""))} · '
            f'{esc(lesson.fm.get("cefr", ""))} · {lesson.fm.get("duration_minutes", "")} min</span></a>{TICK}</li>'
            for lesson in chapter.lessons)
        idx = self.chapters.index(chapter)
        pager = self.pager(page, self.chapters[idx - 1] if idx else None,
                           self.chapters[idx + 1] if idx + 1 < len(self.chapters) else None,
                           lambda c: f"Volume {c.vol}, Chapter {c.ch}",
                           lambda c: c.title.get("en", c.id))
        main = f"""
<nav class="crumbs" aria-label="Breadcrumb"><a href="{href(page, 'index.html#course')}">Course</a><span aria-hidden="true">›</span><a href="{href(page, vol.url)}">Volume {vol.n}</a></nav>
<header class="masthead">
  <p class="eyebrow">Volume {chapter.vol} · Chapter {chapter.ch} · {esc(chapter.fm.get("cefr", ""))}</p>
  <h1 class="t-sa display" lang="sa">{esc(t.get("sa", ""))}</h1>
  <p class="t-en">{esc(t.get("en", ""))}</p>
  <p class="t-sub"><i>{esc(t.get("sa_iast", ""))}</i> · <span class="dv" lang="hi">{esc(t.get("hi", ""))}</span></p>
  <div class="lesson-tools"><a class="btn primary" href="{href(page, chapter.lessons[0].url)}">Start lesson 1</a></div>
</header>
<div class="page-split">
  <section aria-labelledby="lessons-h"><h2 class="toc-h" id="lessons-h">Lessons</h2><ol class="lesson-cards">{cards}</ol></section>
  <div class="prose doc-body">{"".join(parts)}</div>
</div>
{pager}
"""
        self.write(page, self.shell(
            page, f"Chapter {chapter.ch}: {t.get('en', '')} · Sanskritam 2.0",
            f"Volume {chapter.vol}, Chapter {chapter.ch} of Sanskritam 2.0 — {t.get('en', '')}.",
            main, nav="course"))

    def pager(self, page: str, prev, nxt, label, title) -> str:
        links = []
        if prev is not None:
            links.append(f'<a class="prev" href="{href(page, prev.url)}"><span class="dir">← Previous · '
                         f'{esc(label(prev))}</span><span class="t">{esc(title(prev))}</span></a>')
        if nxt is not None:
            links.append(f'<a class="next" href="{href(page, nxt.url)}"><span class="dir">Next · '
                         f'{esc(label(nxt))} →</span><span class="t">{esc(title(nxt))}</span></a>')
        return f'<nav class="pager" aria-label="More">{"".join(links)}</nav>' if links else ""

    def build_lesson(self, lesson: Lesson) -> None:
        page = lesson.url
        ctx = Ctx(page, lesson, (lesson.vol, lesson.ch))
        fm, t = lesson.fm, lesson.title
        chapter = self.chapter_by_id[f"v{lesson.vol}.c{lesson.ch:02d}"]
        vol = next(v for v in self.volumes if v.n == lesson.vol)
        learner, kit, toc, kit_toc = [], [], [], []
        for n, name, content in lesson.sections:
            anchor = lesson.anchors[n]
            body = self.render(content, ctx, prefix=f"s{n}", wrap_lang="hi" if n == 7 else None)
            num = f'<span class="sec-n">{n}</span>'
            item = f'<li><a href="#{anchor}">{num}{esc(name)}</a></li>'
            if n < KIT_FIRST:
                toc.append(item)
                learner.append(f'<section class="sec" id="{anchor}"><h2>{num}{esc(name)}</h2>'
                               f'<div class="prose">{body}</div></section>')
            else:
                kit_toc.append(item)
                kit.append(f'<details class="kit-sec" id="{anchor}"><summary>{num}{esc(name)}'
                           f'</summary><div class="prose">{body}</div></details>')
        toc_html = (f'<ol class="toc-list">{"".join(toc)}</ol>'
                    f'<p class="toc-h kit-only">For teachers</p>'
                    f'<ol class="toc-list kit-only">{"".join(kit_toc)}</ol>')
        facts = [("Level", fm.get("cefr")), ("Type", TYPE_LABELS.get(fm.get("lesson_type"))),
                 ("Class", f'{fm["duration_minutes"]} min' if fm.get("duration_minutes") else None),
                 ("Self-study", f'{fm["self_study_minutes"]} min' if fm.get("self_study_minutes") else None),
                 ("New words", fm.get("vocabulary_count"))]
        facts_html = "".join(f"<div><dt>{k}</dt><dd>{esc(v)}</dd></div>" for k, v in facts if v not in (None, ""))
        prereq = [p for p in fm.get("prerequisites") or [] if p in self.lesson_by_id]
        prereq_html = ""
        if prereq:
            prereq_html = ("<p class=\"review-line\">Before this lesson: " + ", ".join(
                f'<a href="{href(page, self.lesson_by_id[p].url)}">{esc(p)} · '
                f'{esc(self.lesson_by_id[p].title.get("en", ""))}</a>' for p in prereq) + "</p>")
        if fm.get("status") == "reviewed":
            reviewers = "; ".join(str(r) for r in fm.get("reviewers") or [])
            status = (f'<span class="ok">Reviewed</span> · {esc(reviewers)}'
                      f' · lesson v{esc(fm.get("version", ""))}, updated {esc(nice_date(fm.get("updated", "")))}')
        else:
            status = '<span class="draft-flag">Draft — not yet reviewed</span>'
        pos = self.lessons.index(lesson)
        prev = self.lessons[pos - 1] if pos else None
        nxt = self.lessons[pos + 1] if pos + 1 < len(self.lessons) else None
        pager = self.pager(page, prev, nxt, lambda x: f"Lesson {x.id}",
                           lambda x: f'{x.title.get("en", "")}')
        main = f"""
<nav class="crumbs" aria-label="Breadcrumb"><a href="{href(page, 'index.html#course')}">Course</a><span aria-hidden="true">›</span><a href="{href(page, vol.url)}">Volume {vol.n}</a><span aria-hidden="true">›</span><a href="{href(page, chapter.url)}">Chapter {chapter.ch} · {esc(chapter.title.get('en', ''))}</a></nav>
<header class="masthead">
  <p class="eyebrow">Lesson {lesson.num} · {esc(lesson.id)}</p>
  <h1 class="t-sa display" lang="sa">{esc(t.get("sa", ""))}</h1>
  <p class="t-en">{esc(t.get("en", ""))}</p>
  <p class="t-sub"><i>{esc(t.get("sa_iast", ""))}</i> · <span class="dv" lang="hi">{esc(t.get("hi", ""))}</span></p>
  <dl class="facts">{facts_html}</dl>
  <p class="review-line">{status}</p>
  {prereq_html}
  <div class="lesson-tools">
    <button class="btn small" type="button" data-teacher-toggle aria-pressed="false">Teacher view</button>
    <span class="hint">Shows teacher notes and the production kit (sections 22–27).</span>
  </div>
</header>
<details class="toc-mobile"><summary>Sections in this lesson</summary>{toc_html}</details>
<div class="lesson-grid">
  <nav class="toc-rail" aria-label="Lesson sections"><p class="toc-h">In this lesson</p>{toc_html}</nav>
  <article class="lesson-body" lang="en">
    {"".join(learner)}
    <div class="finish">
      <p>Finished the homework? Mark the lesson so the course map shows your progress on this device.</p>
      <button class="btn" type="button" data-done-toggle="{esc(lesson.id)}" aria-pressed="false">{TICK.replace('class="tick"', 'class="tick-btn"')}<span class="label">Mark lesson complete</span></button>
    </div>
    <section class="kit" aria-labelledby="kit-h">
      <div class="kit-head"><h2 id="kit-h">For teachers and creators</h2>
      <p>Classroom notes, then the production kit that turns this lesson into images, video, voice-over and reels.</p></div>
      {"".join(kit)}
    </section>
  </article>
</div>
{pager}
"""
        self.write(page, self.shell(
            page, f"{t.get('en', lesson.id)} · Sanskritam 2.0",
            f"Sanskritam 2.0, lesson {lesson.id}: {t.get('en', '')} ({t.get('sa_iast', '')}).",
            main, nav="course"))

    def build_words(self) -> None:
        page = "words.html"
        ctx = Ctx(page)
        seen: dict[str, dict] = {}
        order: list[str] = []
        for lesson in self.lessons:
            sec14 = next((c for i, _, c in lesson.sections if i == 14), "")
            for row in parse_vocab(sec14):
                key = plain(row["deva"])
                if not key or re.search(r"·|…|\.\.\.", key):
                    continue  # empty, or a review row that lists several words at once
                if key in seen:
                    seen[key]["uses"] += 1
                    continue
                seen[key] = {**row, "lesson": lesson, "uses": 1}
                order.append(key)
        rows = []
        for key in order:
            w = seen[key]
            lesson = w["lesson"]
            target = f'{lesson.url}#{lesson.anchors.get(14, "")}'
            ipa = f'<span class="ipa">{esc(w["ipa"])}</span>' if w["ipa"] else ""
            search_key = " ".join(plain(w[k]) for k in ("deva", "iast", "en", "hi"))
            hindi = self.post('<span lang="hi">' + self.md.renderInline(w["hi"]) + "</span>", ctx)
            rows.append(
                f'<tr data-k="{esc(fold(search_key))}"><td>{self.render_inline(w["deva"], ctx)}</td>'
                f'<td><i>{self.render_inline(w["iast"], ctx)}</i>{ipa}</td>'
                f'<td>{self.render_inline(w["en"], ctx)}</td><td>{hindi}</td>'
                f'<td class="where"><a href="{href(page, target)}">{esc(lesson.id)}</a></td></tr>')
            self.index.append({"y": "Word", "t": plain(w["deva"]),
                               "s": " · ".join(x for x in (plain(w["iast"]), plain(w["en"]),
                                                           plain(w["hi"]), lesson.id) if x),
                               "u": target})
        main = f"""
<header class="masthead">
  <p class="eyebrow">Word list · <span class="dv" lang="sa">शब्दसूची</span></p>
  <h1 class="t-en">Every headword in the published lessons</h1>
  <p class="t-sub">{len(order)} words from the §14 vocabulary tables, in the order the course teaches them. Each links to the lesson that first teaches it.</p>
</header>
<div class="tool-row">
  <label class="count" for="word-filter">Filter</label>
  <input class="field" id="word-filter" type="search" autocomplete="off" spellcheck="false" placeholder="water, जल, jala, पानी …">
  <span class="count" id="word-count" aria-live="polite">{len(order)} words</span>
</div>
<div class="table-wrap"><table class="word-table" id="word-table">
<thead><tr><th>देवनागरी</th><th>IAST · IPA</th><th>English</th><th>हिन्दी</th><th>First taught</th></tr></thead>
<tbody>{"".join(rows)}</tbody></table></div>
"""
        main = self.text_pass(main, ctx)
        self.write(page, self.shell(page, "Word list · Sanskritam 2.0",
                                    "Every vocabulary headword in the published Sanskritam 2.0 "
                                    "lessons, with IAST, IPA, English and Hindi.", main, nav="words"))

    def build_doc(self, src: str) -> None:
        page, nav, short = DOC_PAGES[src]
        ctx = Ctx(page)
        text = (REPO / src).read_text(encoding="utf-8")
        h1 = re.search(r"^# (.+)$", text, re.M)
        title = h1.group(1).strip() if h1 else short
        body = self.render(H1_RE.sub("", text, 1), ctx, fix_links=True)
        if src == "REFERENCES.md":
            body = re.sub(r'<p><a id="([a-z0-9-]+)"></a>(.*?)</p>', self.reference_entry, body, flags=re.S)
            for key in self.ref_keys:
                self.index.append({"y": "Source", "t": REF_NAMES.get(key, key), "s": key,
                                   "u": f"references.html#{key}"})
        if src == "GLOSSARY.md":
            for m in re.finditer(r"^\| ([^|]+?) \| ([^|]+?) \| ([^|]+?) \| ([^|]+?) \|", text, re.M):
                if m.group(1) in ("देवनागरी",) or set(m.group(1)) <= {"-", " "}:
                    continue
                self.index.append({"y": "Term", "t": plain(m.group(1)),
                                   "s": " · ".join(plain(m.group(i)) for i in (2, 3, 4)),
                                   "u": "glossary.html"})
        main = f"""
<header class="masthead">
  <p class="eyebrow">{esc(short)}</p>
  <h1 class="t-en">{self.render_inline(title, ctx)}</h1>
</header>
<div class="prose doc-body">{body}</div>
"""
        self.write(page, self.shell(page, f"{short} · Sanskritam 2.0",
                                    f"Sanskritam 2.0 — {short.lower()}.", main, nav=nav))

    def reference_entry(self, m: re.Match) -> str:
        key, text = m.group(1), m.group(2)
        uses = self.ref_uses.get(key, Counter())
        if uses:
            total = sum(uses.values())
            items = "".join(
                f'<li><a href="{href("references.html", self.lesson_by_id[i].url)}">{esc(i)}</a>'
                f' · {esc(self.lesson_by_id[i].title.get("en", ""))} ({n})</li>'
                for i, n in sorted(uses.items(), key=lambda kv: self.lessons.index(self.lesson_by_id[kv[0]])))
            cited = (f'<details><summary>Cited {total} {"time" if total == 1 else "times"} in '
                     f'{len(uses)} {"lesson" if len(uses) == 1 else "lessons"}</summary><ul>{items}</ul></details>')
        else:
            cited = '<p class="uses-none">Not yet cited in a published lesson.</p>'
        return f'<div class="refent" id="{key}"><p>{text}</p>{cited}</div>'

    def build_search(self) -> None:
        page = "search.html"
        for lesson in self.lessons:
            t = lesson.title
            self.index.append({"y": "Lesson", "t": t.get("en", lesson.id),
                               "s": " · ".join(str(x) for x in (t.get("sa"), t.get("sa_iast"), t.get("hi"),
                                                                lesson.id) if x),
                               "u": lesson.url})
        for chapter in self.chapters:
            t = chapter.title
            self.index.append({"y": "Chapter", "t": f"Chapter {chapter.ch}: {t.get('en', '')}",
                               "s": " · ".join(str(x) for x in (t.get("sa"), t.get("sa_iast"),
                                                                f"Volume {chapter.vol}") if x),
                               "u": chapter.url})
        payload = json.dumps(self.index, ensure_ascii=False, separators=(",", ":"))
        (self.out / "assets").mkdir(parents=True, exist_ok=True)
        (self.out / "assets" / "search-index.js").write_text(
            f"window.SK_INDEX={payload};\n", encoding="utf-8")
        main = """
<header class="masthead">
  <p class="eyebrow">Search · <span class="dv" lang="sa">अन्वेषणम्</span></p>
  <h1 class="t-en">Search the course</h1>
</header>
<div class="tool-row">
  <label class="count" for="search-q">Search</label>
  <input class="field" id="search-q" type="search" autocomplete="off" spellcheck="false" placeholder="greeting, नमस्ते, namaste, Whitney …">
</div>
<p class="count" id="search-status" aria-live="polite">Search needs JavaScript. The course map and the word list work without it.</p>
<ul class="results" id="search-results"></ul>
"""
        self.write(page, self.shell(page, "Search · Sanskritam 2.0",
                                    "Search Sanskritam 2.0 lessons, words, glossary terms and sources.",
                                    main, nav="search", scripts=("assets/search-index.js",)))

    def build_404(self) -> None:
        main = """
<header class="masthead">
  <p class="eyebrow">404</p>
  <h1 class="t-en">This page is not in the course</h1>
  <p class="t-sub">It may belong to a lesson that is still in review. <a href="index.html#course">Open the course map</a> or <a href="search.html">search</a>.</p>
</header>
"""
        self.write("404.html", self.shell("404.html", "Page not found · Sanskritam 2.0",
                                          "Page not found.", main))

    def build(self) -> None:
        if self.out.exists():
            shutil.rmtree(self.out)
        (self.out / "assets").mkdir(parents=True)
        for name in ("site.css", "site.js"):
            shutil.copy2(ASSETS / name, self.out / "assets" / name)
        self.build_home()
        for vol in self.volumes:
            if vol.live_chapters:
                self.build_volume(vol)
        for chapter in self.chapters:
            self.build_chapter(chapter)
        for lesson in self.lessons:
            self.build_lesson(lesson)
        self.build_words()
        for src in DOC_PAGES:
            self.build_doc(src)
        self.build_search()
        if not self.args.artifact:
            self.build_404()
            (self.out / ".nojekyll").write_text("", encoding="utf-8")
            base = self.args.base_url.rstrip("/") + "/"
            urls = "".join(f"<url><loc>{esc(base + p)}</loc></url>\n"
                           for p in self.pages if p != "404.html")
            (self.out / "sitemap.xml").write_text(
                '<?xml version="1.0" encoding="UTF-8"?>\n'
                f'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n{urls}</urlset>\n',
                encoding="utf-8")
            (self.out / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {base}sitemap.xml\n",
                                                 encoding="utf-8")


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    parser.add_argument("--out", default=str(REPO / "_site"), help="output directory (default: _site)")
    parser.add_argument("--ref", default="main", help="git ref for source links (default: main)")
    parser.add_argument("--base-url", default=BASE_URL, help="public URL, for sitemap.xml")
    parser.add_argument("--artifact", action="store_true",
                        help="write index.html as a body fragment for hosts that add the skeleton")
    parser.add_argument("--include-drafts", action="store_true",
                        help="also publish unreviewed files, flagged as drafts (local preview only)")
    args = parser.parse_args(argv)
    site = Site(args)
    if not site.lessons:
        print("no reviewed lessons found", file=sys.stderr)
        return 1
    site.build()
    print(f"built {len(site.pages)} pages ({len(site.lessons)} lessons, {len(site.chapters)} chapters)"
          f" into {site.out}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

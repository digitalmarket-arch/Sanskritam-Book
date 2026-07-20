#!/usr/bin/env python3
"""Sanskritam 2.0 lesson validator.

Checks every lesson file (curriculum/**/lesson-*.md) against the project contract:

  1.  YAML front matter parses and validates against json/frontmatter.schema.json
  2.  Exactly the 27 canonical H2 sections, exact names, exact order
  3.  id ↔ file path agreement (v1.c01.l03 ↔ volume-1/chapter-01/lesson-03-*)
  4.  prerequisites / review_of resolve to lesson ids that exist in the repo
  5.  Devanagari→IAST consistency: every "देवनागरी (latin)" pair whose latin part
      looks like IAST is re-transliterated with translit.py and diffed
  6.  Romanization denylist (1.x-style forms like "Amrit") and inline-answer markers
  7.  IPA charset: /.../ strings may only use the STYLE_GUIDE §2 inventory
  8.  Unicode NFC normalization
  9.  Quiz integrity: section 19 has a <details> answer key, no inline ✓ marks
  10. Register hygiene: no SYMBOL callouts inside section 19 (Quiz)
  11. media paths exist on disk unless prefixed "planned:"
  12. Vocabulary table (section 14) uses the canonical column header

Usage:
    python3 scripts/validate.py [paths...]      # default: curriculum/
    python3 scripts/validate.py --warn-only     # report but exit 0 (drafting mode)
"""
from __future__ import annotations

import json
import re
import sys
import unicodedata
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from translit import to_iast  # noqa: E402

try:
    import yaml
except ImportError:
    print("error: PyYAML missing — pip install -r scripts/requirements.txt")
    sys.exit(2)

try:
    import jsonschema
except ImportError:
    jsonschema = None  # schema check degrades to a warning

REPO = Path(__file__).resolve().parent.parent

SECTION_NAMES = [
    "Hook", "Learning Objective", "Previous Lesson Review", "Historical Context",
    "Scientific Explanation", "Sanskrit Explanation", "Hindi Explanation",
    "English Explanation", "Pronunciation", "IPA", "Mouth Position",
    "Common Mistakes", "Examples", "Vocabulary", "Grammar", "Conversation",
    "Story", "Exercises", "Quiz", "Revision", "Homework", "Teacher Notes",
    "AI Image Prompt", "AI Video Prompt", "Voice-over Script", "Reel Script",
    "Metadata",
]

# IAST-only alphabet for deciding whether a parenthesized string is a
# transliteration (checked) or an English/Hindi gloss (skipped).
# Lowercase only on purpose: uppercase marks quiz options "(H)", tags, prose.
IAST_CHARS = set("abcdefghijklmnopqrstuvyāīūṛṝḷḹṃḥśṣñṅṇṭḍ'̐- ")

# Bare signs/mātrās shown metalinguistically ("अं (ṃ)", "ा (ā)") — display
# contexts, not word transliterations; excluded from the pair check.
SIGN_TOKENS = {"अं", "अः", "ं", "ः", "ँ", "ऽ", "्",
               "ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "ॢ", "ॣ", "े", "ै", "ो", "ौ"}

# Full IPA inventory of STYLE_GUIDE §2 (plus structural marks).
IPA_CHARS = set(
    "ɐɑaeiourl̩ːkgŋʰʱɡ"
    "t̪dnɲʈɖɳcjpbmɾʋɕʑʂshɦ"
    "͡ ̯̃"
    "wəɪʊʌæɛ"  # appear in contrast/anchor notes about English sounds
    ".ˈˌ()"
)

# A /…/ span is treated as IPA only if it contains at least one distinctively
# IPA character — otherwise it is prose ("and/or", file paths, Hindi text).
IPA_SIGNATURE = set("ɐɑːɾʋɕʑʂɦʈɖɳɲŋʱ̪̩̯̃͡əɪʊʌæɛˈˌ")

DENYLIST = [
    (re.compile(r"\b(Amrit|Arth|Gyan|Dhyaan|Shlok|Kripya)\b"), "1.x-style romanization"),
    (re.compile(r"✓\s*CORRECT", re.IGNORECASE), "inline answer marker"),
]

H2_RE = re.compile(r"^## (\d+)\. (.+?)\s*$", re.MULTILINE)
DEVA_LATIN_RE = re.compile(r"([ऀ-ॿ][ऀ-ॿ‌‍]*(?:[ ][ऀ-ॿ][ऀ-ॿ‌‍]*)*)\s*\(([^()]{1,60})\)")
IPA_SLASH_RE = re.compile(r"/([^/\s][^/]{0,30})/")
REF_RE = re.compile(r"\[REF:([a-z0-9-]+)(?:\s+[^\]]+)?\]")


class Report:
    def __init__(self) -> None:
        self.errors: list[str] = []
        self.warnings: list[str] = []

    def error(self, path: Path, msg: str) -> None:
        self.errors.append(f"{path.relative_to(REPO)}: {msg}")

    def warn(self, path: Path, msg: str) -> None:
        self.warnings.append(f"{path.relative_to(REPO)}: {msg}")


def split_frontmatter(text: str) -> tuple[str | None, str]:
    if text.startswith("---\n"):
        end = text.find("\n---", 4)
        if end != -1:
            return text[4:end], text[end + 4:]
    return None, text


def parse_sections(body: str) -> list[tuple[int, str, str]]:
    """Return [(index, name, content)] for each H2 'N. Name' heading."""
    matches = list(H2_RE.finditer(body))
    out = []
    for i, m in enumerate(matches):
        start = m.end()
        end = matches[i + 1].start() if i + 1 < len(matches) else len(body)
        out.append((int(m.group(1)), m.group(2), body[start:end]))
    return out


def id_to_path_parts(lesson_id: str) -> tuple[str, str, str]:
    m = re.fullmatch(r"v(\d)\.c(\d{2})\.l(\d{2})", lesson_id)
    if not m:
        raise ValueError(lesson_id)
    return f"volume-{int(m.group(1))}", f"chapter-{m.group(2)}", f"lesson-{m.group(3)}"


def looks_like_iast(s: str) -> bool:
    t = unicodedata.normalize("NFC", s.strip())
    if not t or any(c.isdigit() for c in t):
        return False
    return all(unicodedata.normalize("NFC", c) in IAST_CHARS for c in t)


def norm_translit(s: str) -> str:
    t = unicodedata.normalize("NFC", s.lower())
    return re.sub(r"[\s'|\-–—]", "", t)


def collect_all_ids() -> set[str]:
    ids = set()
    for f in (REPO / "curriculum").rglob("lesson-*.md"):
        fm, _ = split_frontmatter(f.read_text(encoding="utf-8"))
        if fm:
            try:
                data = yaml.safe_load(fm)
                if isinstance(data, dict) and "id" in data:
                    ids.add(str(data["id"]))
            except yaml.YAMLError:
                pass
    return ids


def load_reference_keys() -> set[str]:
    refs_file = REPO / "REFERENCES.md"
    if not refs_file.exists():
        return set()
    return set(re.findall(r'<a id="([a-z0-9-]+)"></a>', refs_file.read_text(encoding="utf-8")))


def validate_lesson(path: Path, rep: Report, all_ids: set[str], ref_keys: set[str],
                    schema: dict | None) -> None:
    raw = path.read_text(encoding="utf-8")

    # 8. NFC
    if raw != unicodedata.normalize("NFC", raw):
        rep.error(path, "file is not NFC-normalized")

    fm_text, body = split_frontmatter(raw)
    if fm_text is None:
        rep.error(path, "missing YAML front matter")
        return

    # 1. front matter
    try:
        fm = yaml.safe_load(fm_text)
    except yaml.YAMLError as e:
        rep.error(path, f"front matter YAML error: {e}")
        return
    if not isinstance(fm, dict):
        rep.error(path, "front matter is not a mapping")
        return

    if schema is not None and jsonschema is not None:
        validator = jsonschema.Draft202012Validator(schema)
        for err in sorted(validator.iter_errors(json.loads(json.dumps(fm, default=str))),
                          key=lambda e: list(e.absolute_path)):
            loc = "/".join(str(p) for p in err.absolute_path) or "<root>"
            rep.error(path, f"front matter schema: {loc}: {err.message}")
    elif jsonschema is None:
        rep.warn(path, "jsonschema not installed — schema check skipped")

    # 2. sections
    sections = parse_sections(body)
    expected = list(enumerate(SECTION_NAMES, start=1))
    got = [(i, n) for i, n, _ in sections]
    if got != expected:
        for want, have in zip(expected, got):
            if want != have:
                rep.error(path, f"section mismatch: expected '## {want[0]}. {want[1]}', found '## {have[0]}. {have[1]}'")
                break
        if len(got) != len(expected):
            rep.error(path, f"expected 27 sections, found {len(got)}")

    section_by_index = {i: c for i, _, c in sections}

    # 3. id ↔ path
    lesson_id = str(fm.get("id", ""))
    try:
        vol_dir, ch_dir, lesson_prefix = id_to_path_parts(lesson_id)
        rel = path.relative_to(REPO / "curriculum")
        parts = rel.parts
        if parts[0] != vol_dir or parts[1] != ch_dir or not parts[2].startswith(lesson_prefix + "-"):
            rep.error(path, f"id {lesson_id} does not match path {rel}")
    except (ValueError, IndexError):
        rep.error(path, f"cannot check id↔path for id '{lesson_id}'")

    # consistency: numeric fields match id
    m = re.fullmatch(r"v(\d)\.c(\d{2})\.l(\d{2})", lesson_id)
    if m and (fm.get("volume") != int(m.group(1)) or fm.get("chapter") != int(m.group(2))
              or fm.get("lesson") != int(m.group(3))):
        rep.error(path, "volume/chapter/lesson fields disagree with id")

    # 4. prerequisite resolution
    for field in ("prerequisites", "review_of"):
        for ref in fm.get(field, []) or []:
            if ref not in all_ids:
                rep.error(path, f"{field} references unknown lesson id '{ref}'")

    # 5. Devanagari↔IAST diff — heuristics keep glosses/option-markers out:
    #    skip bare signs, uppercase/tagged/one-letter Latin, multi-word Latin
    #    against single-word Devanagari, and ASCII-only Latin whose first
    #    letter disagrees with the expected transliteration (a gloss, not IAST).
    for deva, latin in DEVA_LATIN_RE.findall(body):
        d, lat = deva.strip(), latin.strip()
        if d in SIGN_TOKENS or not looks_like_iast(lat):
            continue
        if " " in lat and " " not in d:
            continue
        expect_full = to_iast(d)
        if lat.isascii():
            if len(lat) < 2 or " " in lat:
                continue
            if not expect_full or lat[0] != expect_full[0]:
                continue
        expect = norm_translit(expect_full)
        actual = norm_translit(lat)
        if expect != actual:
            rep.error(path, f"transliteration mismatch: {d} → expected '{expect_full}', file has '{lat}'")

    # 6. denylist
    for rx, label in DENYLIST:
        for hit in rx.findall(body):
            rep.error(path, f"denylist ({label}): '{hit if isinstance(hit, str) else hit[0]}'")

    # 7. IPA charset — only spans that actually look like IPA (contain a
    #    distinctive IPA character); prose "and/or", paths, Hindi text pass by.
    for ipa in IPA_SLASH_RE.findall(body):
        norm = unicodedata.normalize("NFC", ipa)
        if not any(c in IPA_SIGNATURE for c in norm):
            continue
        bad = {c for c in norm if c not in IPA_CHARS}
        if bad:
            rep.warn(path, f"IPA string /{ipa}/ uses chars outside STYLE_GUIDE inventory: {sorted(bad)}")

    # 9. quiz integrity
    quiz = section_by_index.get(19, "")
    if quiz:
        if "<details>" not in quiz or "उत्तराणि" not in quiz:
            rep.error(path, "section 19 missing collapsed answer key (<details> + उत्तराणि)")
        before_key = quiz.split("<details>")[0]
        if "✓" in before_key:
            rep.error(path, "section 19 contains inline ✓ before the answer key")

    # 10. register hygiene
    if "[SYMBOL" in quiz:
        rep.error(path, "SYMBOL-register content inside section 19 (Quiz)")

    # 11. media paths
    media = fm.get("media", {}) or {}
    for kind, entries in media.items() if isinstance(media, dict) else []:
        for entry in entries or []:
            if isinstance(entry, str) and not entry.startswith("planned:"):
                if not (REPO / entry).exists():
                    rep.error(path, f"media file missing on disk: {entry}")

    # 12. vocabulary header
    vocab = section_by_index.get(14, "")
    if vocab and "|" in vocab:
        if "| देवनागरी | IAST | IPA | English | हिन्दी | Notes |" not in vocab:
            rep.error(path, "section 14 vocabulary table does not use the canonical column header")

    # REF keys resolve
    for key in REF_RE.findall(body):
        if ref_keys and key not in ref_keys:
            rep.error(path, f"[REF:{key}] does not resolve to an anchor in REFERENCES.md")


def main(argv: list[str]) -> int:
    warn_only = "--warn-only" in argv
    paths = [a for a in argv if not a.startswith("--")]
    targets: list[Path] = []
    for p in paths or ["curriculum"]:
        pth = (REPO / p) if not Path(p).is_absolute() else Path(p)
        if pth.is_dir():
            targets.extend(sorted(pth.rglob("lesson-*.md")))
        elif pth.is_file():
            targets.append(pth)
    if not targets:
        print("no lesson files found")
        return 0

    schema = None
    schema_path = REPO / "json" / "frontmatter.schema.json"
    if schema_path.exists():
        schema = json.loads(schema_path.read_text(encoding="utf-8"))

    rep = Report()
    all_ids = collect_all_ids()
    ref_keys = load_reference_keys()
    for t in targets:
        validate_lesson(t, rep, all_ids, ref_keys, schema)

    for w in rep.warnings:
        print(f"warning: {w}")
    for e in rep.errors:
        print(f"ERROR: {e}")
    print(f"\n{len(targets)} lesson(s) checked — {len(rep.errors)} error(s), {len(rep.warnings)} warning(s)")
    if rep.errors and not warn_only:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

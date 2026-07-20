#!/usr/bin/env python3
"""Export Sanskritam 2.0 lessons to JSON for the website, app, and automation.

For each curriculum/**/lesson-*.md:
  json/volume-N/<id>.json   — frontmatter + sections[] + vocabulary[] + quiz + registers[]
Also writes json/index.json — catalog with prerequisite graph.

Usage:
    python3 scripts/export_json.py            # write exports
    python3 scripts/export_json.py --check    # verify exports are current (CI mode)
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from validate import (  # noqa: E402
    REPO, SECTION_NAMES, H2_RE, split_frontmatter, parse_sections,
)

import yaml  # noqa: E402

REGISTER_RE = re.compile(
    r"^>\s*\*\*\[(FACT|HISTORY|TRADITION|SYMBOL)[^\]]*\]\*\*(.*)$", re.MULTILINE
)
REF_RE = re.compile(r"\[REF:([a-z0-9-]+(?:\s+[^\]]+)?)\]")
VOCAB_ROW_RE = re.compile(r"^\|([^|]+)\|([^|]+)\|([^|]+)\|([^|]+)\|([^|]+)\|([^|]*)\|\s*$",
                          re.MULTILINE)


def slugify(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def parse_registers(body: str, sections: list[tuple[int, str, str]]) -> list[dict]:
    out = []
    for idx, _, content in sections:
        # capture full blockquote paragraphs that begin with a register label
        lines = content.splitlines()
        i = 0
        while i < len(lines):
            m = re.match(r"^>\s*\*\*\[(FACT|HISTORY|TRADITION|SYMBOL)[^\]]*\]\*\*\s*(.*)$",
                         lines[i])
            if m:
                text = [m.group(2).strip()]
                j = i + 1
                while j < len(lines) and lines[j].startswith(">"):
                    text.append(lines[j].lstrip("> ").strip())
                    j += 1
                full = " ".join(t for t in text if t)
                out.append({
                    "type": m.group(1),
                    "section_index": idx,
                    "text": full,
                    "refs": REF_RE.findall(full),
                })
                i = j
            else:
                i += 1
    return out


def parse_vocab(section14: str) -> list[dict]:
    rows = []
    for m in VOCAB_ROW_RE.finditer(section14):
        cells = [c.strip() for c in m.groups()]
        if cells[0] in ("देवनागरी", "---", "") or set(cells[0]) <= {"-", " ", ":"}:
            continue
        rows.append({
            "deva": cells[0], "iast": cells[1], "ipa": cells[2],
            "en": cells[3], "hi": cells[4], "notes": cells[5],
        })
    return rows


def parse_quiz(section19: str) -> dict:
    if "<details>" in section19:
        questions, rest = section19.split("<details>", 1)
        key = rest.split("</details>")[0]
        key = re.sub(r"<summary>.*?</summary>", "", key, flags=re.DOTALL)
    else:
        questions, key = section19, ""
    return {
        "questions_markdown": questions.strip(),
        "answer_key_markdown": key.strip(),
    }


def export_lesson(path: Path) -> dict | None:
    raw = path.read_text(encoding="utf-8")
    fm_text, body = split_frontmatter(raw)
    if fm_text is None:
        return None
    fm = yaml.safe_load(fm_text)
    sections = parse_sections(body)
    section_by_index = {i: c for i, _, c in sections}
    return {
        "frontmatter": json.loads(json.dumps(fm, default=str)),
        "sections": [
            {"index": i, "name": n, "anchor": f"{i}-{slugify(n)}", "markdown": c.strip()}
            for i, n, c in sections
        ],
        "vocabulary": parse_vocab(section_by_index.get(14, "")),
        "quiz": parse_quiz(section_by_index.get(19, "")),
        "registers": parse_registers(body, sections),
    }


def main(argv: list[str]) -> int:
    check = "--check" in argv
    out_root = REPO / "json"
    lessons = sorted((REPO / "curriculum").rglob("lesson-*.md"))
    index = {"generated_by": "scripts/export_json.py", "lessons": []}
    drift = []

    for lesson_path in lessons:
        data = export_lesson(lesson_path)
        if data is None:
            print(f"skip (no front matter): {lesson_path}")
            continue
        fm = data["frontmatter"]
        out_path = out_root / f"volume-{fm['volume']}" / f"{fm['id']}.json"
        payload = json.dumps(data, ensure_ascii=False, indent=2) + "\n"
        if check:
            if not out_path.exists() or out_path.read_text(encoding="utf-8") != payload:
                drift.append(str(out_path.relative_to(REPO)))
        else:
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_text(payload, encoding="utf-8")
        index["lessons"].append({
            "id": fm["id"],
            "title": fm["title"],
            "status": fm["status"],
            "cefr": fm["cefr"],
            "prerequisites": fm.get("prerequisites", []),
            "review_of": fm.get("review_of", []),
            "path": str(lesson_path.relative_to(REPO)),
            "json": str(out_path.relative_to(REPO)),
        })

    index_payload = json.dumps(index, ensure_ascii=False, indent=2) + "\n"
    index_path = out_root / "index.json"
    if check:
        if not index_path.exists() or index_path.read_text(encoding="utf-8") != index_payload:
            drift.append("json/index.json")
        if drift:
            print("exports out of date:\n  " + "\n  ".join(drift))
            return 1
        print(f"{len(index['lessons'])} lesson export(s) current")
        return 0

    index_path.write_text(index_payload, encoding="utf-8")
    print(f"exported {len(index['lessons'])} lesson(s) + index.json")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))

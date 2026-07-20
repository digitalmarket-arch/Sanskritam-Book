#!/usr/bin/env python3
"""Instantiate templates/lesson-template.md for a new lesson.

Usage:
    python3 scripts/new_lesson.py v1.c02.l01 "en-kebab-slug"

Creates curriculum/volume-N/chapter-NN/lesson-NN-<slug>.md with id fields
pre-filled. Refuses to overwrite an existing file.
"""
from __future__ import annotations

import datetime
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__)
        return 2
    lesson_id, slug = sys.argv[1], sys.argv[2]
    m = re.fullmatch(r"v(\d)\.c(\d{2})\.l(\d{2})", lesson_id)
    if not m:
        print(f"bad id: {lesson_id} (want vN.cNN.lNN)")
        return 2
    if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", slug):
        print(f"bad slug: {slug} (want en-kebab-case)")
        return 2

    vol, ch, les = int(m.group(1)), m.group(2), m.group(3)
    target = REPO / "curriculum" / f"volume-{vol}" / f"chapter-{ch}" / f"lesson-{les}-{slug}.md"
    if target.exists():
        print(f"refusing to overwrite {target}")
        return 1

    template = (REPO / "templates" / "lesson-template.md").read_text(encoding="utf-8")
    today = datetime.date.today().isoformat()
    out = (template
           .replace("id: vV.cCC.lLL                # ^v[1-5]\\.c\\d{2}\\.l\\d{2}$ — must match path",
                    f"id: {lesson_id}")
           .replace("volume: 0", f"volume: {vol}")
           .replace("chapter: 0", f"chapter: {int(ch)}")
           .replace("lesson: 0", f"lesson: {int(les)}")
           .replace("created: YYYY-MM-DD", f"created: {today}")
           .replace("updated: YYYY-MM-DD", f"updated: {today}"))
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(out, encoding="utf-8")
    print(f"created {target.relative_to(REPO)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

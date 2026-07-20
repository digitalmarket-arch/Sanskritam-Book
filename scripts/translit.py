#!/usr/bin/env python3
"""Deterministic Devanagari → IAST transliterator.

Used by validate.py to re-derive IAST from Devanagari and diff against what a
lesson prints (Pass A mechanical check). Pure function of the input string —
no sandhi, no language model, no guessing.

Usage:
    python3 scripts/translit.py "संस्कृतम्"        → saṃskṛtam
    from translit import to_iast
"""
from __future__ import annotations

import sys
import unicodedata

VOWELS = {
    "अ": "a", "आ": "ā", "इ": "i", "ई": "ī", "उ": "u", "ऊ": "ū",
    "ऋ": "ṛ", "ॠ": "ṝ", "ऌ": "ḷ", "ॡ": "ḹ",
    "ए": "e", "ऐ": "ai", "ओ": "o", "औ": "au",
}

MATRAS = {
    "ा": "ā", "ि": "i", "ी": "ī", "ु": "u", "ू": "ū",
    "ृ": "ṛ", "ॄ": "ṝ", "ॢ": "ḷ", "ॣ": "ḹ",
    "े": "e", "ै": "ai", "ो": "o", "ौ": "au",
}

CONSONANTS = {
    "क": "k", "ख": "kh", "ग": "g", "घ": "gh", "ङ": "ṅ",
    "च": "c", "छ": "ch", "ज": "j", "झ": "jh", "ञ": "ñ",
    "ट": "ṭ", "ठ": "ṭh", "ड": "ḍ", "ढ": "ḍh", "ण": "ṇ",
    "त": "t", "थ": "th", "द": "d", "ध": "dh", "न": "n",
    "प": "p", "फ": "ph", "ब": "b", "भ": "bh", "म": "m",
    "य": "y", "र": "r", "ल": "l", "व": "v",
    "श": "ś", "ष": "ṣ", "स": "s", "ह": "h",
    "ळ": "ḻ",
}

SIGNS = {
    "ं": "ṃ",   # anusvāra
    "ः": "ḥ",   # visarga
    "ँ": "m̐",   # candrabindu
    "ऽ": "'",   # avagraha
}

SPECIAL = {
    "ॐ": "oṃ",
    "।": "|", "॥": "||",
    "०": "0", "१": "1", "२": "2", "३": "3", "४": "4",
    "५": "5", "६": "6", "७": "7", "८": "8", "९": "9",
}

VIRAMA = "्"


def to_iast(text: str) -> str:
    """Transliterate a Devanagari string to IAST. Non-Devanagari passes through."""
    text = unicodedata.normalize("NFC", text)
    out: list[str] = []
    pending_a = False  # an unconsumed inherent vowel after a consonant

    for ch in text:
        if ch in CONSONANTS:
            if pending_a:
                out.append("a")
            out.append(CONSONANTS[ch])
            pending_a = True
        elif ch in MATRAS:
            out.append(MATRAS[ch])
            pending_a = False
        elif ch == VIRAMA:
            pending_a = False
        elif ch in VOWELS:
            if pending_a:
                out.append("a")
                pending_a = False
            out.append(VOWELS[ch])
        elif ch in SIGNS:
            if pending_a:
                out.append("a")
                pending_a = False
            out.append(SIGNS[ch])
        elif ch in SPECIAL:
            if pending_a:
                out.append("a")
                pending_a = False
            out.append(SPECIAL[ch])
        else:
            if pending_a:
                out.append("a")
                pending_a = False
            out.append(ch)

    if pending_a:
        out.append("a")
    return "".join(out)


def is_devanagari(text: str) -> bool:
    """True if the string contains at least one Devanagari code point."""
    return any("ऀ" <= c <= "ॿ" for c in text)


if __name__ == "__main__":
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        sys.exit(1)
    for arg in args:
        print(to_iast(arg))

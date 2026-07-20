#!/usr/bin/env bash
# Sanskritam 2.0 book build — GATED (see build/README.md).
# This script is a documented stub until Volume 1 reaches `status: reviewed`.
set -euo pipefail

echo "Sanskritam 2.0 build pipeline"
echo
echo "This build is gated until content maturity (see build/README.md)."
echo "Planned steps:"
echo "  1. python3 scripts/validate.py curriculum/          # hard gate"
echo "  2. python3 scripts/export_json.py --check           # exports current"
echo "  3. pandoc --pdf-engine=xelatex ... per chapter      # templates in build/pandoc/"
echo "  4. assemble volume PDF + front/back matter"
exit 1

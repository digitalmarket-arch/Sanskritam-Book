"""Paths shared by the Volume 4 plan scripts (see README.md in this folder).

- The plan is read from the repository: research/notes/vol4-plan.md.
- Every other input (the Aṣṭādhyāyī data file, the DCS corpus, the GRETIL e-texts, the
  learner's word list, the candidate designs) is read from local copies kept outside the
  repository, in the folder named by the environment variable SANSKRITAM_LOCAL.
- A script that writes a file writes it under SANSKRITAM_OUT (default:
  $SANSKRITAM_LOCAL/vol4-plan-out), in the sub-folder of the script (work/, synth-work/),
  never into the repository.
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '..', '..', '..'))
PLAN = os.path.join(REPO, 'research', 'notes', 'vol4-plan.md')
VOL3_PLAN = os.path.join(REPO, 'research', 'notes', 'vol3-plan.md')


def _fail(msg):
    sys.stderr.write('error: ' + msg + '\n')
    sys.exit(2)


def local_root():
    root = os.environ.get('SANSKRITAM_LOCAL')
    if not root:
        _fail('SANSKRITAM_LOCAL is not set. Set it to the folder that holds the local copies '
              '(corp/ashd, corp/dcs, corp/gretil, ledger-all.tsv, v4/design-*.md); '
              'see research/evidence/vol4-plan/README.md.')
    if not os.path.isdir(root):
        _fail('SANSKRITAM_LOCAL=%s is not a folder.' % root)
    return root


def local(*parts):
    """A path under SANSKRITAM_LOCAL; stops with a message if it does not exist."""
    p = os.path.join(local_root(), *parts)
    if not os.path.exists(p):
        _fail('%s not found (expected under SANSKRITAM_LOCAL as %s); '
              'see research/evidence/vol4-plan/README.md for where it comes from.'
              % (p, os.path.join(*parts)))
    return p


def repo_file(path):
    if not os.path.exists(path):
        _fail('%s not found; run the script from a checkout of the repository.' % path)
    return path


def out_dir(sub):
    """The folder a script writes into: $SANSKRITAM_OUT/<sub> (created if needed)."""
    base = os.environ.get('SANSKRITAM_OUT') or os.path.join(local_root(), 'vol4-plan-out')
    d = os.path.join(base, sub)
    if os.path.abspath(d).startswith(REPO + os.sep):
        _fail('SANSKRITAM_OUT points inside the repository (%s); choose a folder outside it.' % d)
    os.makedirs(d, exist_ok=True)
    return d


def out(sub, name):
    return os.path.join(out_dir(sub), name)

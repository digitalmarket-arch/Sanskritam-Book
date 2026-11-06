#!/usr/bin/env node
/**
 * Copy the corrected course data from the SanskritamApp mobile app into this
 * book, so the book is regenerated from the app instead of being patched by
 * hand.
 *
 * The app (digitalmarket-arch/SanskritamApp) is the source of truth. Its
 * curriculum and Śāstra Lab data were fact-checked; this script copies those
 * files verbatim into src/data/app/, adding only a provenance header. The book
 * then builds its chapters from them (src/data/fromApp.ts) and the PDF is
 * typeset from the same data (scripts/updatePdfCurriculum.mjs).
 *
 * Usage:
 *   node scripts/syncFromApp.mjs --app ../SanskritamApp
 *   node scripts/syncFromApp.mjs --app ../SanskritamApp --ref origin/main
 *   node scripts/syncFromApp.mjs --app ../SanskritamApp --check
 *
 *   --app    path to a SanskritamApp checkout (default ../SanskritamApp,
 *            or $SANSKRITAM_APP_DIR)
 *   --ref    read the files from this git ref of the app instead of its
 *            working tree (for example a branch that is not merged yet)
 *   --check  do not write; exit 1 if the book's copies are out of date
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const BOOK_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(BOOK_ROOT, 'src/data/app');
const REPOSITORY = 'digitalmarket-arch/SanskritamApp';

/** App files copied into src/data/app/ (none of them imports anything). */
const FILES = [
  'src/data/curriculum.ts',
  'src/data/labReference.ts',
  'src/data/pratyahara.ts',
  'src/data/chandas.ts',
];

/** The app's tests for the copied lab modules, copied to tests/app-*.test.cjs and pointed at src/data/app/. */
const TEST_FILES = ['tests/chandas.test.cjs', 'tests/pratyahara.test.cjs'];

function parseArgs(argv) {
  const args = { app: process.env.SANSKRITAM_APP_DIR || path.resolve(BOOK_ROOT, '../SanskritamApp'), ref: null, check: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--app') args.app = path.resolve(argv[++i]);
    else if (arg === '--ref') args.ref = argv[++i];
    else if (arg === '--check') args.check = true;
    else throw new Error(`Unknown argument: ${arg}`);
  }
  return args;
}

const git = (appDir, ...cmd) =>
  execFileSync('git', ['-C', appDir, ...cmd], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] });

function readAppFile(appDir, ref, file) {
  try {
    if (ref) return git(appDir, 'show', `${ref}:${file}`);
    return fs.readFileSync(path.join(appDir, file), 'utf8');
  } catch {
    throw new Error(`Cannot read ${file} from ${appDir}${ref ? ` at ${ref}` : ''}`);
  }
}

function appCommit(appDir, ref) {
  try {
    return git(appDir, 'rev-parse', ref || 'HEAD').trim();
  } catch {
    return 'unknown';
  }
}

function header(file, ref, commit, what = `Copied verbatim from ${REPOSITORY}`) {
  return [
    '// ─────────────────────────────────────────────────────────────',
    '//  GENERATED FILE — do not edit by hand.',
    `//  ${what}`,
    `//  ${file} @ ${commit}${ref ? ` (${ref})` : ''}`,
    '//  Fix mistakes in the app, then re-run: node scripts/syncFromApp.mjs',
    '// ─────────────────────────────────────────────────────────────',
    '',
  ].join('\n');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(path.join(args.app, FILES[0])) && !args.ref) {
    throw new Error(`No SanskritamApp checkout at ${args.app} (pass --app <path>)`);
  }
  const commit = appCommit(args.app, args.ref);
  const outputs = new Map();
  for (const file of FILES) {
    outputs.set(path.join(OUT_DIR, path.basename(file)), header(file, args.ref, commit) + readAppFile(args.app, args.ref, file));
  }
  for (const file of TEST_FILES) {
    const text = readAppFile(args.app, args.ref, file).replace(/loadTs\('src\/data\/(\w+)\.ts'/g, "loadTs('src/data/app/$1.ts'");
    const what = `Copied from ${REPOSITORY}, with module paths pointed at src/data/app/`;
    outputs.set(path.join(BOOK_ROOT, 'tests', `app-${path.basename(file)}`), header(file, args.ref, commit, what) + text);
  }
  outputs.set(
    path.join(OUT_DIR, 'source.ts'),
    header('provenance of src/data/app/', args.ref, commit, `Written by scripts/syncFromApp.mjs from ${REPOSITORY}`) +
      `/** Where the files in this folder came from. */\nexport const APP_SOURCE = {\n  repository: '${REPOSITORY}',\n  ref: ${JSON.stringify(args.ref || 'working tree')},\n  commit: '${commit}',\n  files: ${JSON.stringify([...FILES, ...TEST_FILES])},\n} as const;\n`,
  );

  // A copy is stale when anything but its header differs. The header is the
  // block between the first two rule lines (and the blank line after it).
  const RULE = '// ─────';
  const body = (text) => {
    if (!text.startsWith(RULE)) return text;
    const end = text.indexOf(RULE, RULE.length);
    if (end < 0) return text;
    return text.slice(text.indexOf('\n', end) + 1).replace(/^\n/, '');
  };
  const stale = [...outputs].filter(([file, text]) => !fs.existsSync(file) || body(fs.readFileSync(file, 'utf8')) !== body(text));

  if (args.check) {
    if (stale.length) {
      console.error(`Out of date with the app (${commit}):\n${stale.map(([f]) => '  ' + path.relative(BOOK_ROOT, f)).join('\n')}`);
      process.exit(1);
    }
    console.log(`src/data/app/ matches ${REPOSITORY} @ ${commit}`);
    return;
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const [file, text] of outputs) fs.writeFileSync(file, text);
  console.log(`Copied ${FILES.length + TEST_FILES.length} files from ${REPOSITORY} @ ${commit}${args.ref ? ` (${args.ref})` : ''} into ${path.relative(BOOK_ROOT, OUT_DIR)}/ and tests/`);
  console.log(stale.length ? `${stale.length} file(s) changed.` : 'No content changes.');
}

try {
  main();
} catch (err) {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
}

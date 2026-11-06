/** loadTs(path relative to the repository root) — the same helper name the app's tests use. */
const path = require('node:path');
const { loadTs: load } = require('../../scripts/lib/loadTs.cjs');

const ROOT = path.resolve(__dirname, '../..');

function loadTs(relativePath) {
  return load(path.join(ROOT, relativePath));
}

module.exports = { loadTs, ROOT };

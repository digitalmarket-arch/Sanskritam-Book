/**
 * Load a TypeScript data module from Node without a bundler.
 *
 * The module (and the relative .ts modules it imports) is transpiled with the
 * project's own TypeScript compiler and run in this process, so scripts and
 * tests read exactly the data the web book shows. Only plain data modules are
 * supported: no JSX, no CSS or asset imports.
 */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const cache = new Map();

function resolveRelative(fromFile, id) {
  const base = path.resolve(path.dirname(fromFile), id);
  for (const candidate of [base, `${base}.ts`, `${base}.tsx`, path.join(base, 'index.ts')]) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  }
  throw new Error(`Cannot resolve "${id}" from ${fromFile}`);
}

function loadTs(file) {
  const filename = path.resolve(file);
  if (cache.has(filename)) return cache.get(filename).exports;
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    fileName: filename,
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
      esModuleInterop: true,
    },
  });
  const module = { exports: {} };
  cache.set(filename, module);
  const localRequire = (id) => (id.startsWith('.') ? loadTs(resolveRelative(filename, id)) : require(id));
  const wrapper = vm.runInThisContext(`(function (exports, require, module, __filename, __dirname) {${outputText}\n})`, {
    filename,
  });
  wrapper(module.exports, localRequire, module, filename, path.dirname(filename));
  return module.exports;
}

module.exports = { loadTs };

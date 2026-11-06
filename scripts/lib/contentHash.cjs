/**
 * A fingerprint of the chapter text, page numbers left out. The PDF script
 * stores it next to the page map; a test recomputes it, so a PDF that was not
 * regenerated after the text changed is caught.
 */
const crypto = require('node:crypto');

function contentHash(chapters) {
  const json = JSON.stringify(chapters, (key, value) => (key === 'pageStart' ? undefined : value));
  return crypto.createHash('sha256').update(json).digest('hex').slice(0, 16);
}

module.exports = { contentHash };

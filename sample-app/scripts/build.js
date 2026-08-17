const fs = require('node:fs');
const path = require('node:path');
const out = path.join(__dirname, '..', 'dist');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'build-info.json'), JSON.stringify({
  builtAt: new Date().toISOString(),
  app: 'banking-devops-demo'
}, null, 2));
console.log('[BUILD] Demo build validation completed.');

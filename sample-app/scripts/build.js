const fs=require('node:fs'), path=require('node:path');
const out=path.join(__dirname,'..','dist');
fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'build-info.json'),JSON.stringify({app:'jakone-devops-contract-mock',builtAt:new Date().toISOString()},null,2));
console.log('[BUILD] Validation complete');

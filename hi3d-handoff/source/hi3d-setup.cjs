// Run once in your extracted project to materialize npm's required manifest name.
const fs=require('node:fs'),path=require('node:path');
const target=path.join(__dirname,'package.json');
if(fs.existsSync(target)){console.log('package.json already exists; it was not overwritten.');}
else{fs.copyFileSync(path.join(__dirname,'hi3d-package.json'),target,fs.constants.COPYFILE_EXCL);console.log('Ready: npm install, then npm run dev.');}

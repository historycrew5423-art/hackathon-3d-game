const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),out=path.join(root,'exports','frog-dreams');const checks=[];
for(const stem of ['hi3d-风格化侦探企鹅3D模型_allparts_20261107_185745','hi3d-写实3D特工企鹅与雨伞_allparts_20261107_185832']){const same=fs.readFileSync(path.join(root,stem+'_1.glb')).equals(fs.readFileSync(path.join(root,stem+'_2.glb')));checks.push({latest:stem+'_2.glb',processedSource:stem+'_1.glb',identical:same});if(!same)process.exitCode=1;}
fs.writeFileSync(path.join(out,'reports','hi3d-source-reuse.json'),JSON.stringify(checks,null,2));console.log(JSON.stringify(checks));

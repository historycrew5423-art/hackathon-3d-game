const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
for(const name of fs.readdirSync(root).filter(n=>n.endsWith('.glb'))){
 const fd=fs.openSync(path.join(root,name),'r'),head=Buffer.alloc(20);fs.readSync(fd,head,0,20,0);const len=head.readUInt32LE(12),data=Buffer.alloc(len);fs.readSync(fd,data,0,len,20);fs.closeSync(fd);const j=JSON.parse(data.toString());
 let triangles=0;for(const m of j.meshes||[])for(const p of m.primitives){triangles+=(p.indices!=null?j.accessors[p.indices].count:j.accessors[p.attributes.POSITION].count)/3;}
 console.log(JSON.stringify({name,triangles,meshes:j.meshes?.length,skins:j.skins?.length||0,animations:j.animations?.map(a=>a.name)||[],nodes:j.nodes?.slice(0,12).map(n=>({name:n.name,scale:n.scale,rotation:n.rotation})),images:j.images?.length,extensions:j.extensionsRequired||[]}));
}

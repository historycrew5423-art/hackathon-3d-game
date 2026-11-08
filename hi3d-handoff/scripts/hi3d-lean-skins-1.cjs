const path=require('node:path'),fs=require('node:fs');const M=p=>require(path.join(process.cwd(),'.hi3d','web-tools','node_modules',p));
const {NodeIO}=M('@gltf-transform/core');const X=M('@gltf-transform/extensions');const F=M('@gltf-transform/functions');const {MeshoptEncoder,MeshoptDecoder}=M('meshoptimizer');
(async()=>{const sharp=null;await MeshoptEncoder.ready;await MeshoptDecoder.ready;const io=new NodeIO().registerExtensions(X.ALL_EXTENSIONS).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
 for(const n of ['frog-school','frog-monkey','frog-knight']){const f='exports/frog-dreams/public/assets/models/hi3d-'+n+'.glb';const doc=await io.read(f);
  const used=new Set();doc.getRoot().listMaterials().forEach(m=>{m.setNormalTexture(null);m.setMetallicRoughnessTexture(null);m.setOcclusionTexture(null);m.setEmissiveTexture(null);});
  await doc.transform(F.prune());
  doc.getRoot().listTextures().forEach((t,i)=>{const w='.hi3d/pre/'+n+'-'+i+'.webp';fs.writeFileSync('.hi3d/pre/'+n+'-'+i+'.src',t.getImage());});
  console.log(n,'tex',doc.getRoot().listTextures().length);await io.write('.hi3d/pre/'+n+'-lean.glb',doc);}
})().catch(e=>{console.error(e);process.exit(1);});
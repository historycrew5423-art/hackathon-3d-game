const path=require('node:path'),fs=require('node:fs');const M=p=>require(path.join(__dirname,'..','.hi3d','web-tools','node_modules',p));
const {NodeIO}=M('@gltf-transform/core');const {ALL_EXTENSIONS,EXTMeshoptCompression}=M('@gltf-transform/extensions');const F=M('@gltf-transform/functions');const {MeshoptEncoder,MeshoptDecoder}=M('meshoptimizer');
const dir=path.join(__dirname,'..','exports','frog-dreams','public','assets');
(async()=>{await MeshoptEncoder.ready;await MeshoptDecoder.ready;const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
 for(const n of process.argv.slice(2)){const f=path.join(dir,'models',n+'.glb');const doc=await io.read(f);
  await doc.transform(F.dedup(),F.prune(),F.reorder({encoder:MeshoptEncoder}));
  doc.createExtension(EXTMeshoptCompression).setRequired(true).setEncoderOptions({method:EXTMeshoptCompression.EncoderMethod.FILTER});
  const o=path.join(dir,'models-m',n+'.glb');await io.write(o,doc);console.log(n,fs.statSync(f).size,'->',fs.statSync(o).size);}
})().catch(e=>{console.error(e);process.exit(1);});

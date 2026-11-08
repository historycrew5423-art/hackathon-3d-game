const path=require('node:path'),fs=require('node:fs');const M=p=>require(path.join(process.cwd(),'.hi3d','web-tools','node_modules',p));
const {NodeIO}=M('@gltf-transform/core');const X=M('@gltf-transform/extensions');const F=M('@gltf-transform/functions');const {MeshoptEncoder,MeshoptDecoder}=M('meshoptimizer');
(async()=>{await MeshoptEncoder.ready;await MeshoptDecoder.ready;const io=new NodeIO().registerExtensions(X.ALL_EXTENSIONS).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
 for(const n of ['frog-school','frog-monkey','frog-knight']){const doc=await io.read('.hi3d/pre/'+n+'-lean.glb');doc.getRoot().listTextures().forEach((t,i)=>{t.setImage(fs.readFileSync('.hi3d/pre/'+n+'-'+i+'.webp'));t.setMimeType('image/webp');});
  doc.createExtension(X.EXTTextureWebP).setRequired(true);await doc.transform(F.dedup(),F.prune(),F.quantize({excludeAttributes:['skinWeight','skinIndex']}),F.reorder({encoder:MeshoptEncoder}));
  doc.createExtension(X.EXTMeshoptCompression).setRequired(true).setEncoderOptions({method:X.EXTMeshoptCompression.EncoderMethod.FILTER});
  const o='exports/frog-dreams/public/assets/models-m/hi3d-'+n+'.glb';await io.write(o,doc);console.log(n,fs.statSync(o).size);}
})().catch(e=>{console.error(e);process.exit(1);});
// Mobile optimization: textures -> WebP (resized, via Python step beforehand) + meshopt geometry compression + quantization.
// in: public/assets/models/*.glb  out: public/assets/models-m/*.glb
const path=require('node:path'),fs=require('node:fs');const M=p=>require(path.join(__dirname,'..','.hi3d','web-tools','node_modules',p));
const {NodeIO}=M('@gltf-transform/core');const {ALL_EXTENSIONS,EXTMeshoptCompression}=M('@gltf-transform/extensions');const F=M('@gltf-transform/functions');const {MeshoptEncoder,MeshoptDecoder,MeshoptSimplifier}=M('meshoptimizer');
const dir=path.join(__dirname,'..','exports','frog-dreams','public','assets');const src=path.join(dir,'models'),out=path.join(dir,'models-m'),tex=path.join(dir,'tex-m');fs.mkdirSync(out,{recursive:true});
(async()=>{await MeshoptEncoder.ready;await MeshoptDecoder.ready;await MeshoptSimplifier.ready;const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
 const used=['bigfrog','whale-game','kangaroo-game','duck-game','opossum-game','penguin-game','umbrella-game','monster-proxy','laughing-shield','journey-mountain','floor-fragments','running-windmill-proxy','runner-wheat-0','runner-wheat-1','runner-village-0','runner-village-1','runner-clouds-0','runner-clouds-1','dream-tunnel','xiyou-3b756e8d','xiyou-6317ac56','xiyou-7832406a','xiyou-9f4bf24f'];
 for(const n of used){const f=path.join(src,'hi3d-'+n+'.glb');const doc=await io.read(f);const before=fs.statSync(f).size;
  // swap embedded images with pre-made WebP versions
  doc.getRoot().listTextures().forEach((t,i)=>{const w=path.join(tex,`hi3d-${n}-${i}.webp`);if(fs.existsSync(w)){t.setImage(fs.readFileSync(w));t.setMimeType('image/webp');}});
  const skinned=doc.getRoot().listSkins().length>0;
  await doc.transform(F.dedup(),F.prune(),...(n==='bigfrog'?[]:[F.weld()]),...(skinned?[]:[F.simplify({simplifier:MeshoptSimplifier,ratio:n.includes('game')?.6:n.includes('xiyou')?1:.75,error:.0008})]),...(n==='bigfrog'?[]:[F.quantize()]),F.reorder({encoder:MeshoptEncoder}));
  if(doc.getRoot().listTextures().some(t=>t.getMimeType()==='image/webp'))doc.createExtension(M('@gltf-transform/extensions').EXTTextureWebP).setRequired(true);
  doc.createExtension(EXTMeshoptCompression).setRequired(true).setEncoderOptions({method:EXTMeshoptCompression.EncoderMethod.FILTER});
  const o=path.join(out,'hi3d-'+n+'.glb');await io.write(o,doc);console.log(n,before,'->',fs.statSync(o).size);}
})().catch(e=>{console.error(e);process.exit(1);});




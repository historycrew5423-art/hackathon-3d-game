import * as T from 'three';
import {GLTFLoader} from '../../vendor/loaders/GLTFLoader.js';
import {clone} from '../../vendor/utils/SkeletonUtils.js';
import {MeshoptDecoder} from '../../vendor/meshopt_decoder.mjs';

const urls={
 bigfrog:new URL('../../public/assets/models-m/hi3d-bigfrog.glb',import.meta.url).href,
 frogSchool:new URL('../../public/assets/models-m/hi3d-frog-school.glb',import.meta.url).href,
 frogMonkey:new URL('../../public/assets/models-m/hi3d-frog-monkey.glb',import.meta.url).href,
 frogKnight:new URL('../../public/assets/models-m/hi3d-frog-knight.glb',import.meta.url).href,
 whale:new URL('../../public/assets/models-m/hi3d-whale-game-rig.glb',import.meta.url).href,
 kangaroo:new URL('../../public/assets/models-m/hi3d-kangaroo-game-rig.glb',import.meta.url).href,
 duck:new URL('../../public/assets/models-m/hi3d-duck-game-rig.glb',import.meta.url).href,
 opossum:new URL('../../public/assets/models-m/hi3d-opossum-game-rig.glb',import.meta.url).href,
 penguin:new URL('../../public/assets/models-m/hi3d-penguin-game-rig.glb',import.meta.url).href,
 umbrella:new URL('../../public/assets/models-m/hi3d-umbrella-game-rig.glb',import.meta.url).href,
 monster:new URL('../../public/assets/models-m/hi3d-monster-proxy.glb',import.meta.url).href,
 shield:new URL('../../public/assets/models-m/hi3d-laughing-shield.glb',import.meta.url).href,
 mountain:new URL('../../public/assets/models-m/hi3d-journey-mountain.glb',import.meta.url).href,
 floor:new URL('../../public/assets/models-m/hi3d-floor-fragments.glb',import.meta.url).href,
 mill:new URL('../../public/assets/models-m/hi3d-running-windmill-proxy.glb',import.meta.url).href,
 wheat0:new URL('../../public/assets/models-m/hi3d-runner-wheat-0.glb',import.meta.url).href,
 wheat1:new URL('../../public/assets/models-m/hi3d-runner-wheat-1.glb',import.meta.url).href,
 village0:new URL('../../public/assets/models-m/hi3d-runner-village-0.glb',import.meta.url).href,
 village1:new URL('../../public/assets/models-m/hi3d-runner-village-1.glb',import.meta.url).href,
 clouds0:new URL('../../public/assets/models-m/hi3d-runner-clouds-0.glb',import.meta.url).href,
 clouds1:new URL('../../public/assets/models-m/hi3d-runner-clouds-1.glb',import.meta.url).href,
 niulai:new URL('../../public/assets/models-m/hi3d-niulai-rig.glb',import.meta.url).href,
 banana:new URL('../../public/assets/models-m/hi3d-xiyou-3b756e8d.glb',import.meta.url).href,
 bibi:new URL('../../public/assets/models-m/hi3d-xiyou-6317ac56.glb',import.meta.url).href,
 daodun:new URL('../../public/assets/models-m/hi3d-xiyou-7832406a.glb',import.meta.url).href,
 gugu:new URL('../../public/assets/models-m/hi3d-xiyou-9f4bf24f.glb',import.meta.url).href,
 tunnel:new URL('../../public/assets/models-m/hi3d-dream-tunnel.glb',import.meta.url).href
};
export const colors={mint:0x76c9a4,cream:0xfff2ce,jade:0x286b60,dark:0x243e43,gold:0xecc667,coral:0xe57d66,lilac:0xb8a4ce};
export function solid(color){return new T.MeshStandardMaterial({color,roughness:.67});}
export function box(size,p,color){let m=new T.Mesh(new T.BoxGeometry(...size),solid(color));m.position.set(...p);return m;}
export function ball(size,p,color){let m=new T.Mesh(new T.SphereGeometry(1,12,8),solid(color));m.scale.set(...size);m.position.set(...p);return m;}
function proxy(kind){
 const g=new T.Group();g.name='ROOT';g.userData.placeholder=true;g.userData.sparc3dPhysicalUnits={version:1,unit:'meter'};
 if(['frog','monster','crowd','bigfrog','penguin','umbrella','whale','kangaroo','duck','opossum'].includes(kind)){
  g.add(ball([.44,.66,.36],[0,.8,0],kind==='frog'?colors.mint:colors.lilac));
  g.add(ball([.3,.4,.10],[0,.73,-.30],colors.cream));
  for(const x of [-.22,.22]){g.add(ball([.13,.15,.12],[x,1.26,-.22],0xffffff));g.add(ball([.045,.06,.035],[x,1.27,-.32],colors.dark));}
  const mouth=new T.Object3D();mouth.name='MOUTH_SOCKET';mouth.position.set(0,.96,-.4);g.add(mouth);const fx=new T.Object3D();fx.name='FX_SOCKET';fx.position.y=.72;g.add(fx);
 } else if(kind==='mill'){
  g.add(new T.Mesh(new T.CylinderGeometry(.8,1,2.7,16),solid(colors.cream)));g.children[0].position.y=2.5;
  let roof=new T.Mesh(new T.ConeGeometry(1.4,1.15,16),solid(colors.coral));roof.position.y=4.25;g.add(roof);
  const pivot=new T.Group();pivot.name='BLADE_PIVOT';pivot.position.set(0,3.9,-1.15);g.add(pivot);
  for(let i=0;i<4;i++){let b=box([.48,2.4,.12],[Math.sin(i*Math.PI/2)*1.35,Math.cos(i*Math.PI/2)*1.35,0],colors.gold);b.rotation.z=-i*Math.PI/2;pivot.add(b);}
  for(const [id,x] of [['L',-.55],['R',.55]]){const p=new T.Group();p.name='LEG_'+id;p.position.set(x,1.25,0);p.add(box([.25,.8,.25],[0,-.4,0],colors.jade));p.add(ball([.4,.24,.6],[0,-.95,-.2],colors.jade));g.add(p);}
 } else if(kind==='floor'){
  for(let i=0;i<24;i++){const a=i*Math.PI/12,b=(i+1)*Math.PI/12,s=new T.Shape();s.moveTo(0,0);s.lineTo(Math.cos(a)*12,Math.sin(a)*12);s.absarc(0,0,12,a,b,false);s.lineTo(0,0);const m=new T.Mesh(new T.ExtrudeGeometry(s,{depth:.5,bevelEnabled:false,curveSegments:3}),solid(i%2?0x73aaa0:0x8ab8aa));m.rotation.x=Math.PI/2;m.name='FLOOR_FRAGMENT_'+String(i).padStart(2,'0');g.add(m);}
 } else if(/wheat|village|clouds/.test(kind)){
  g.add(box([12,.7,40],[0,-.35,-20],kind.startsWith('wheat')?colors.gold:kind.startsWith('village')?0xeab8cd:colors.lilac));
  for(let x of [-2,2])for(let z=-2;z>-40;z-=4)g.add(box([.08,.03,1.6],[x,.02,z],colors.cream));
 } else if(kind==='mountain'){
  for(let i=0;i<12;i++){const a=i*Math.PI/6;g.add(ball([3,4+i%3,3],[Math.cos(a)*18,2,Math.sin(a)*18],colors.jade));}
 }else if(kind==='shield'){g.add(ball([.55,.6,.12],[0,.7,0],colors.gold));}
 return g;
}
export class AssetRegistry{
 constructor(onStatus){this.models=new Map();this.errors=[];this.onStatus=onStatus;this.loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);this.mixers=[];}
 async load(){
  let done=0;const entries=Object.entries(urls);const one=async([id,url])=>{
   let timer;try{
    const tries=id==='bigfrog'||id==='frogSchool'?3:2,limit=id==='bigfrog'?40000:30000;let gltf,err;for(let k=0;k<tries&&!gltf;k++){try{gltf=await Promise.race([this.loader.loadAsync(url+(k?'?r='+k:'')),new Promise((_,reject)=>{timer=setTimeout(()=>reject(new Error('加载超时')),limit);})]);}catch(e){err=e;clearTimeout(timer);}}if(!gltf)throw err;
    gltf.scene.updateMatrixWorld(true);const palette={mint:0x76c9a4,cream:0xfff2ce,jade:0x286b60,dark:0x243e43,stone:0x73aaa0,stone2:0x8ab8aa,gold:0xecc667,coral:0xe57d66,red:0xbd4a48,wood:0x996142,sky:0xb8e3dd,lilac:0xb8a4ce,pink:0xeab8cd,blue:0x8cbad9,white:0xfff8ed,grass:0x91b79b};gltf.scene.traverse(o=>{if(o.isMesh)for(const mat of Array.isArray(o.material)?o.material:[o.material]){const key=mat.name?.replace(/^MAT_/,'').replace(/\.\d+$/,'');if(mat.name?.startsWith('MAT_')&&key in palette)mat.color.setHex(palette[key]);}});this.models.set(id,gltf);
   }catch(error){this.errors.push(id);console.warn('[资产回退]',id,error.message);this.models.set(id,{scene:proxy(id),animations:[]});}
   finally{clearTimeout(timer);this.onStatus?.(++done,entries.length,this.errors);}
  };await one(entries.find(e=>e[0]==='bigfrog'));await one(entries.find(e=>e[0]==='frogSchool'));const rest=entries.filter(e=>e[0]!=='bigfrog'&&e[0]!=='frogSchool');let cur=0;await Promise.all(Array.from({length:4},async()=>{while(cur<rest.length)await one(rest[cur++]);}));
 }
 make(id){
  const data=this.models.get(id);const group=data?clone(data.scene):proxy(id);
  group.userData.assetId=id;group.traverse(o=>{if(o.isMesh){o.castShadow=false;o.receiveShadow=true;}});
  if(data?.animations?.length){const mixer=new T.AnimationMixer(group);data.animations.forEach(a=>mixer.clipAction(a).play());this.mixers.push(mixer);}
  if(['penguin','umbrella','whale','kangaroo','duck','opossum'].includes(id)){const wrapper=new T.Group();group.rotation.y=-Math.PI/2;wrapper.add(group);wrapper.userData.assetId=id;return wrapper;}
  return group;
 }
 update(dt){for(const mixer of this.mixers)mixer.update(dt);}
}



import * as T from 'three';
import {bigFrogPose} from '../legacy/hi3d-naiwa.js';
import {Rig} from '../legacy/hi3d-minions.js';
export class Actor{
 constructor(assets,{belly=false}={}){
  this.root=new T.Group();this.vy=0;this.grounded=true;this.skins={};for(const id of ['bigfrog','frogSchool','frogMonkey','frogKnight']){const ok=id==='bigfrog'||(assets.models.has(id)&&!assets.errors.includes(id));const c=createBigFrog(assets,ok?id:'bigfrog');c.group.visible=false;this.skins[id]=c;}this.skin='';this.setSkin('bigfrog');
 }
 // 按关卡换皮：校服（教室）/原装（庄周梦蝶）/美猴王（西游）/骑士（堂吉诃德）；加载失败自动回退原装大奶蛙
 setSkin(id){if(!this.skins[id])id='bigfrog';if(this.skin===id)return;const old=this.visual;const c=this.skins[id];if(old){c.group.position.copy(old.position);c.group.rotation.copy(old.rotation);c.group.scale.copy(old.scale);old.visible=false;old.removeFromParent();old.scale.set(1,1,1);old.rotation.set(0,0,0);}this.root.add(c.group);this.skin=id;this.visual=c.group;this.rig=c.rig;this.visual.visible=true;}
 animate(t,moving,laughing){
  const laugh=!!laughing;bigFrogPose(this.rig,t,laugh?1:0);
  const v=this.visual;
  v.rotation.z=Math.sin(t*(laugh?12:9))*(laugh?.055:moving?.05:.012);
  const stretch=laugh?1+Math.sin(t*13)*.035:1;v.scale.set(1,stretch,1);
  v.position.y=moving?Math.abs(Math.sin(t*10))*.09:0;
 }
 move(dt,input,radius=10,yaw=0){const m=input.move();const cy=Math.cos(yaw),sy=Math.sin(yaw);const x=m.x*cy+m.y*sy,z=-m.x*sy+m.y*cy;this.root.position.x+=x*dt*5.5;this.root.position.z+=z*dt*5.5;const r=Math.hypot(this.root.position.x,this.root.position.z);if(r>radius){this.root.position.x*=radius/r;this.root.position.z*=radius/r;}if(Math.abs(x)+Math.abs(z)>.05)this.root.rotation.y=Math.atan2(-x,-z);return Math.hypot(x,z)>.1;}
 jump(dt,input,audio,power=6.3){if(input.take('jump')&&this.grounded){this.vy=power;this.grounded=false;audio.jump();}this.vy-=18*dt;this.root.position.y=Math.max(0,this.root.position.y+this.vy*dt);if(this.root.position.y<=0){this.vy=0;this.grounded=true;}}
 reset(x=0,z=4){this.root.position.set(x,0,z);this.root.rotation.set(0,0,0);this.vy=0;this.grounded=true;}
}
// 第三人称跟随镜头（参考交接包 game.js 的 camMode=1）：拖动画面右侧/鼠标转视角
const _cv=new T.Vector3();
export function thirdCam(camera,p,yaw,pitch,dt,r=7.5,h=3.8){_cv.set(p.x+Math.sin(yaw)*r,p.y+h+pitch*6,p.z+Math.cos(yaw)*r);camera.position.lerp(_cv,1-Math.exp(-dt*6));camera.lookAt(p.x,p.y+1.4,p.z);}
export function createBigFrog(assets,id='bigfrog'){const model=assets.make(id);model.traverse(o=>{if(o.isMesh){o.frustumCulled=false;o.material=o.material.clone();o.material.transparent=false;o.material.opacity=1;o.material.depthWrite=true;o.material.metalness=0;o.material.roughness=.72;if(o.material.map){o.material.map.colorSpace=T.SRGBColorSpace;o.material.color.setHex(0xffffff);}o.castShadow=true;o.visible=true;}});model.updateMatrixWorld(true);const b=new T.Box3().setFromObject(model),size=b.getSize(new T.Vector3()),c=b.getCenter(new T.Vector3());const s=1.65/size.y;model.scale.setScalar(s);model.position.set(-c.x*s,-b.min.y*s,-c.z*s);const spin=new T.Group();spin.rotation.y=Math.PI/2;spin.add(model);const group=new T.Group();group.add(spin);group.updateMatrixWorld(true);return {group,rig:new Rig(model,spin)};}
export function makeLabel(text,color='#fff3d2',background='#234347',width=256){const c=document.createElement('canvas');c.width=width;c.height=64;const ctx=c.getContext('2d');ctx.fillStyle=background;ctx.fillRect(0,0,width,64);ctx.font='bold 29px "Microsoft YaHei",sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=color;ctx.fillText(text,width/2,33);const map=new T.CanvasTexture(c);map.colorSpace=T.SRGBColorSpace;const sprite=new T.Sprite(new T.SpriteMaterial({map,depthWrite:false,depthTest:false}));sprite.scale.set(3.2,.8,1);sprite.renderOrder=3;return sprite;}

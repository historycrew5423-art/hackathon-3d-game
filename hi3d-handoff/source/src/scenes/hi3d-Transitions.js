import * as T from 'three';
import {box,ball,colors} from '../game/hi3d-Assets.js';
import {makeLabel,createBigFrog} from '../game/hi3d-Actor.js';
export class Classroom{
 constructor(app){this.app=app;this.root=new T.Group();const R=this.root;const add=(s,p,c,o)=>{const m=box(s,p,c);if(o)m.material=Object.assign(m.material.clone(),o);R.add(m);return m;};
  // 木地板 + 地板缝
  add([22,.2,20],[0,-.1,1],0xb88a5c);for(let x=-10.5;x<=10.5;x+=.75)add([.03,.01,20],[x,.005,1],0x8b6340);
  // 墙、踢脚线、窗户、天花灯
  add([22,7,.3],[0,3.5,-8.2],0xf1e7cf);add([22,.35,.1],[0,.18,-8],0x8b6340);add([.3,7,20],[-11,3.5,1],0xeee3c9);add([.3,7,20],[11,3.5,1],0xeee3c9);
  for(const z of [-4,1,6]){add([.12,3.2,3.2],[10.85,3.6,z],0xf7f3e8);const g=box([.06,2.9,2.9],[10.8,3.6,z],0xbfe6f4);g.material=new T.MeshBasicMaterial({color:0xcdeefb});R.add(g);add([.14,.08,3],[10.78,3.6,z],0xf7f3e8);add([.14,2.9,.08],[10.78,3.6,z],0xf7f3e8);}
  for(const x of [-5,0,5])for(const z of [-3,3]){const l=box([2.6,.08,.4],[x,6.9,z],0xffffff);l.material=new T.MeshBasicMaterial({color:0xfffbe8});R.add(l);}
  // 黑板 + 木框 + 粉笔槽 + 讲台
  add([9.6,3.5,.12],[0,3.6,-7.95],0x7a5233);add([9,3,.14],[0,3.6,-7.88],0x2f5a50);add([9.4,.12,.35],[0,2.05,-7.75],0x7a5233);
  for(let i=0;i<4;i++)add([.25,.06,.06],[-3+i*.4,2.15,-7.7],[0xffffff,0xf7c7d4,0xfff2a8,0xbfe3ff][i]);
  add([3,1.1,1.2],[-6,.55,-6],0x9a6a42);add([3.2,.08,1.4],[-6,1.14,-6],0x7a5233);
  const title=makeLabel('本节课：《庄周梦蝶》','#f3f6e6','#2f5a50',512);title.scale.set(7,.9,1);title.position.set(0,4.4,-7.7);R.add(title);
  const sub=makeLabel('“不知周之梦为蝴蝶与，蝴蝶之梦为周与”','#f3f6e6','#2f5a50',768);sub.scale.set(8,.6,1);sub.position.set(0,3.4,-7.7);R.add(sub);
  const sub2=makeLabel('奶蛙同学，请不要在梦里笑出声。','#ffe9a8','#2f5a50',768);sub2.scale.set(7,.5,1);sub2.position.set(0,2.6,-7.7);R.add(sub2);
  // 课桌椅（带四条桌腿/椅腿、桌肚、椅背）
  const leg=(x,y,z,h)=>{const c=new T.Mesh(new T.CylinderGeometry(.035,.035,h,8),new T.MeshStandardMaterial({color:0x5c6366,roughness:.4,metalness:.3}));c.position.set(x,y,z);R.add(c);};
  const deskSet=(x,z)=>{add([1.5,.07,1.0],[x,1.02,z],0xd2a46c);add([1.38,.04,.8],[x,.74,z],0xa9784a);add([1.38,.24,.04],[x,.86,z-.38],0xa9784a);for(const dx of [-.68,.68])for(const dz of [-.43,.43])leg(x+dx,.5,z+dz,1);
   const cz=z+1.45;add([.62,.05,.55],[x,.55,cz],0xc4955f);for(const dx of [-.27,.27])for(const dz of [-.23,.23])leg(x+dx,.27,cz+dz,.54);for(const dx of [-.27,.27])leg(x+dx,.95,cz+.4,.8);add([.62,.32,.04],[x,1.18,cz+.4],0xc4955f);};
  for(const z of [-3.5,1,5.5])for(const x of [-5,0,5])deskSet(x,z);
  this.deskZ=1;
  // 课本、笔袋
  add([.5,.04,.36],[.35,1.07,1.15],0xe9e2cf);add([.4,.06,.12],[-.45,1.08,1.25],0x7fb1d8);
  // ZZZ：从奶蛙头顶冒出
  this.zs=[0,1,2].map(i=>{const s=makeLabel('Z','#5b74c9','rgba(0,0,0,0)',128);s.scale.set(.5+i*.15,.5+i*.15,1);R.add(s);return s;});
 }
 enter(){this.time=0;this.root.visible=true;const p=this.app.player;p.setSkin('frogSchool');p.reset(0,this.deskZ+1.45);p.root.position.y=.57;p.root.rotation.set(-.75,0,0);}
 update(dt){this.time+=dt;const p=this.app.player;p.animate(this.time*.15,false,false);p.visual.rotation.z=Math.sin(this.time*1.6)*.03;p.visual.scale.set(1,1+Math.sin(this.time*2.2)*.025,1);
  this.zs.forEach((s,i)=>{const k=((this.time*.45+i/3)%1);s.position.set(.25+k*.9+Math.sin(k*9)*.15,2.05+k*1.6,this.deskZ+.4-k*.2);s.material.opacity=Math.sin(k*Math.PI);s.scale.setScalar(.35+k*.55);});}
 camera(camera,dt){camera.position.lerp(new T.Vector3(3.6,2.9,this.deskZ+5),1-Math.exp(-dt*3));camera.lookAt(0,1.35,this.deskZ+.6);}
}
export class DreamTransition{
 constructor(app){this.app=app;this.root=new T.Group();this.root.visible=false;this.tunnel=app.assets.make('tunnel');this.root.add(this.tunnel);this.rings=[];for(let i=0;i<10;i++){const r=new T.Mesh(new T.TorusGeometry(6+i*.15,.06,5,48),new T.MeshBasicMaterial({color:i%2?0xffb5c9:0x8ae0da}));r.rotation.x=Math.PI/2;r.position.y=-i*4;this.root.add(r);this.rings.push(r);}this.other=createBigFrog(app.assets).group;this.other.position.set(4,-8,0);this.root.add(this.other);}
 enter(){this.time=0;this.root.visible=true;this.app.player.root.position.set(0,0,0);this.app.player.root.rotation.set(0,Math.PI,0);}
 update(dt){this.time+=dt;this.app.player.root.rotation.z=Math.sin(this.time*2)*.3;this.tunnel.position.y=(this.time*8)%24;this.rings.forEach((r,i)=>{r.position.y=4-((i*4-this.time*8+80)%40);r.rotation.z=this.time*.2;});this.other.position.y=6-((this.time*7+12)%30);}
 camera(camera,dt){camera.position.lerp(new T.Vector3(0,5,12),1-Math.exp(-dt*5));camera.lookAt(0,-1,0);}
}

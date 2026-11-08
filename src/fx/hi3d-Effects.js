import * as T from 'three';

function glyphTexture(text,color){const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d');x.font='900 92px "Microsoft YaHei",sans-serif';x.textAlign='center';x.textBaseline='middle';x.lineWidth=7;x.strokeStyle='#fff5d8';x.strokeText(text,64,64);x.fillStyle=color;x.fillText(text,64,64);const texture=new T.CanvasTexture(c);texture.colorSpace=T.SRGBColorSpace;return texture;}
export class Effects{
 constructor(){
  this.root=new T.Group();this.heiTexture=glyphTexture('嘿','#d87055');this.starTexture=glyphTexture('✦','#efc45d');this.pool=[];this.cursor=0;this.rings=[];this.ringCursor=0;
  for(let i=0;i<64;i++){const s=new T.Sprite(new T.SpriteMaterial({map:i<48?this.heiTexture:this.starTexture,transparent:true,depthWrite:false}));s.visible=false;this.root.add(s);this.pool.push({s,age:5,life:1.2,v:new T.Vector3(),star:i>=48});}
  for(let i=0;i<12;i++){const m=new T.Mesh(new T.RingGeometry(.93,1,48),new T.MeshBasicMaterial({color:0xffebb6,transparent:true,opacity:0,side:T.DoubleSide,depthWrite:false,depthTest:false}));m.rotation.x=-Math.PI/2;m.visible=false;this.root.add(m);this.rings.push({m,age:3});}
  this.wind=new T.Group();this.wind.visible=false;this.root.add(this.wind);this.windAge=10;
  for(let i=0;i<7;i++){const m=new T.Mesh(new T.TorusGeometry(.45+i*.21,.07,5,32),new T.MeshBasicMaterial({color:i%2?0x8ad5cc:0xfff2cd,transparent:true,opacity:.65}));m.rotation.x=Math.PI/2;m.position.y=i*.37;this.wind.add(m);}
 }
 hei(position,direction=new T.Vector3(0,0,-1),star=false){
  let index=star?48+(this.cursor++%16):(this.cursor++%48),p=this.pool[index];p.age=0;p.life=star?.65:1.35;p.s.visible=true;p.s.position.copy(position);p.v.copy(direction).multiplyScalar(star?2:3.8);p.v.y=star?2:1.4;p.s.material.rotation=(this.cursor%5-2)*.09;p.s.material.opacity=1;p.s.scale.setScalar(.3);
 }
 wave(position){let p=this.rings[this.ringCursor++%this.rings.length];p.age=0;p.m.position.copy(position);p.m.position.y+=.06;p.m.visible=true;}
 tornado(position,strength){this.windAge=0;this.wind.position.copy(position);this.wind.visible=true;this.wind.scale.setScalar(.6+strength*.013);}
 update(dt){
  for(const p of this.pool){if(!p.s.visible)continue;p.age+=dt;if(p.age>p.life){p.s.visible=false;if(!p.star)for(let j=0;j<3;j++)this.hei(p.s.position,new T.Vector3(Math.sin(j*2),.3,Math.cos(j*2)),true);continue;}p.s.position.addScaledVector(p.v,dt);p.v.y-=dt*.8;const f=p.age/p.life;p.s.scale.setScalar(p.star?.25+.4*f:.3+1.7*Math.sin(f*Math.PI*.65));p.s.material.opacity=Math.min(1,(1-f)*3);}
  for(const p of this.rings){if(!p.m.visible)continue;p.age+=dt;p.m.scale.setScalar(.3+p.age*6);p.m.material.opacity=Math.max(0,.5-p.age*.4);if(p.age>1.25)p.m.visible=false;}
  if(this.wind.visible){this.windAge+=dt;this.wind.position.z-=dt*17;this.wind.rotation.y+=dt*8;this.wind.children.forEach((m,i)=>{m.position.x=Math.sin(this.windAge*12+i)*.12;m.material.opacity=Math.max(0,.65-this.windAge*.13);});if(this.windAge>3.4)this.wind.visible=false;}
 }
 reset(){this.pool.forEach(p=>p.s.visible=false);this.rings.forEach(p=>p.m.visible=false);this.wind.visible=false;}
}

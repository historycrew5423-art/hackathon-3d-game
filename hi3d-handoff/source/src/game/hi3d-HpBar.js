import * as T from 'three';
// 大号头顶血条：底框 + 渐变色条 + 名字/数值，值变化时才重画画布
export class HpBar{
 constructor(name,width=2.6,color='#ff4d4d'){this.name=name;this.color=color;this.c=document.createElement('canvas');this.c.width=320;this.c.height=64;this.tex=new T.CanvasTexture(this.c);this.tex.colorSpace=T.SRGBColorSpace;this.sprite=new T.Sprite(new T.SpriteMaterial({map:this.tex,transparent:true,depthTest:false,depthWrite:false,fog:false}));this.sprite.scale.set(width,width*.2,1);this.sprite.renderOrder=8;this.sprite.frustumCulled=false;this.last=-1;this.set(1);}
 set(f,label){f=Math.max(0,Math.min(1,f));const key=Math.round(f*100)+(label||'');if(key===this.last)return;this.last=key;const g=this.c.getContext('2d');g.clearRect(0,0,320,64);
  g.fillStyle='rgba(20,14,24,.85)';g.beginPath();g.roundRect(2,2,316,60,14);g.fill();g.lineWidth=4;g.strokeStyle='#fff6d8';g.stroke();
  g.fillStyle='#3a2a2a';g.beginPath();g.roundRect(10,30,300,24,8);g.fill();
  const col=f>.6?'#4ee07a':f>.3?'#ffc93c':this.color;const gr=g.createLinearGradient(0,30,0,54);gr.addColorStop(0,'#ffffff');gr.addColorStop(.25,col);gr.addColorStop(1,col);g.fillStyle=gr;if(f>0){g.beginPath();g.roundRect(10,30,Math.max(10,300*f),24,8);g.fill();}
  g.fillStyle='rgba(0,0,0,.25)';for(let x=40;x<310;x+=30)g.fillRect(10+x-10,30,2,24);
  g.font='bold 22px "Microsoft YaHei",sans-serif';g.textBaseline='middle';g.fillStyle='#fff6d8';g.textAlign='left';g.fillText(label||this.name,14,16);g.textAlign='right';g.fillText(Math.round(f*100)+'%',306,16);this.tex.needsUpdate=true;}
}
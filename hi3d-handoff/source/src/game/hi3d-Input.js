import {Input as LegacyInput} from '../legacy/hi3d-input.js';
export class Input{
 constructor(canvas){
  this.legacy=new LegacyInput();this.held=new Set();this.edges=new Set();this.orbit=0;this.pitch=0;this.drag=null;
  this.map={KeyW:'up',ArrowUp:'up',KeyS:'down',ArrowDown:'down',KeyA:'left',ArrowLeft:'left',KeyD:'right',ArrowRight:'right',Space:'jump',KeyJ:'laugh',KeyK:'tornado',KeyQ:'awkward',KeyL:'giant',Escape:'pause',KeyP:'pause'};
  window.addEventListener('keydown',e=>{const a=this.map[e.code];if(a&&!['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName)){e.preventDefault();if(!e.repeat)this.press(a);}});
  window.addEventListener('keyup',e=>{const a=this.map[e.code];if(a)this.held.delete(a);});
  window.addEventListener('blur',()=>this.clear());
  canvas.addEventListener('pointerdown',e=>{this.drag=[e.clientX,e.clientY];canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(this.drag){this.orbit-=(e.clientX-this.drag[0])*.006;this.pitch=Math.max(-.2,Math.min(.55,this.pitch+(e.clientY-this.drag[1])*.003));this.drag=[e.clientX,e.clientY];}});
  canvas.addEventListener('pointerup',()=>this.drag=null);canvas.addEventListener('pointercancel',()=>this.drag=null);
  this.joy={x:0,y:0,id:null};const joy=document.getElementById('joy');if(joy){const knob=joy.firstElementChild;const upd=e=>{const r=joy.getBoundingClientRect(),R=r.width/2;let dx=e.clientX-r.left-R,dy=e.clientY-r.top-R;const l=Math.hypot(dx,dy),max=R*.7;if(l>max){dx*=max/l;dy*=max/l;}knob.style.transform=`translate(${dx}px,${dy}px)`;const k=Math.hypot(dx,dy)/max;this.joy.x=k<.15?0:dx/max;this.joy.y=k<.15?0:dy/max;this.joyEdge(dx/max);};
   this.joyEdge=x=>{if(x>.6&&!this.joyR){this.joyR=true;this.press('right');this.held.delete('right');}else if(x<.35)this.joyR=false;if(x<-.6&&!this.joyL){this.joyL=true;this.press('left');this.held.delete('left');}else if(x>-.35)this.joyL=false;};
   joy.addEventListener('pointerdown',e=>{e.preventDefault();joy.setPointerCapture(e.pointerId);this.joy.id=e.pointerId;upd(e);});joy.addEventListener('pointermove',e=>{if(this.joy.id===e.pointerId)upd(e);});const end=()=>{this.joy={x:0,y:0,id:null};this.joyL=this.joyR=false;knob.style.transform='';};joy.addEventListener('pointerup',end);joy.addEventListener('pointercancel',end);joy.addEventListener('lostpointercapture',end);this.joyEnd=end;}
  document.querySelectorAll('[data-action]').forEach(b=>{
   b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);this.press(b.dataset.action);b.classList.add('pressed');});
   const release=()=>{this.held.delete(b.dataset.action);b.classList.remove('pressed');};b.addEventListener('pointerup',release);b.addEventListener('pointercancel',release);b.addEventListener('lostpointercapture',release);
  });
 }
 press(a){if(!this.held.has(a))this.edges.add(a);this.held.add(a);}
 down(a){return this.held.has(a);}
 take(a){const found=this.edges.has(a);this.edges.delete(a);return found;}
 move(){if(this.joy&&(this.joy.x||this.joy.y))return {x:this.joy.x,y:this.joy.y};const m=this.legacy.getMove();return {x:m.x||((this.down('right')?1:0)-(this.down('left')?1:0)),y:m.y||((this.down('down')?1:0)-(this.down('up')?1:0))};}
 clear(){this.held.clear();this.joyEnd?.();this.edges.clear();this.drag=null;this.legacy.keys.clear();this.legacy.touchMove={x:0,y:0};this.legacy.aim={x:0,y:0,active:false};this.legacy.touches.clear();Object.values(this.legacy.sticks).forEach(s=>s.style.display='none');}
}


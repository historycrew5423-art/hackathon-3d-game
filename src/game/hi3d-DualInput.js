// Action edges survive a quick tap between frames.
export class Input {
 constructor(canvas){
  this.held=new Set();this.sources=new Map();this.edges=new Set();this.orbit=0;this.pitch=0;this.drag=null;
  this.joy={x:0,y:0};this.look={x:0,y:0};this.legacy={touchMove:this.joy,aim:{active:false},keys:new Set()};this.resets=[];
  this.map={KeyW:'up',ArrowUp:'up',KeyS:'down',ArrowDown:'down',KeyA:'left',ArrowLeft:'left',KeyD:'right',ArrowRight:'right',Space:'jump',KeyJ:'laugh',KeyK:'tornado',KeyQ:'awkward',KeyL:'giant',Escape:'pause',KeyP:'pause'};
  addEventListener('keydown',e=>{const action=this.map[e.code];if(!action||/INPUT|SELECT|TEXTAREA/.test(e.target.tagName))return;e.preventDefault();if(!e.repeat)this.press(action,e.code);});
  addEventListener('keyup',e=>this.release(this.map[e.code],e.code));addEventListener('blur',()=>this.clear());
  canvas.addEventListener('contextmenu',e=>e.preventDefault());
  canvas.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;e.preventDefault();canvas.setPointerCapture(e.pointerId);if(e.button===0)this.press('laugh','mouse');if(e.button===2)this.drag={id:e.pointerId,x:e.clientX,y:e.clientY};});
  canvas.addEventListener('pointermove',e=>{if(this.drag?.id!==e.pointerId)return;this.orbit-=(e.clientX-this.drag.x)*.005;this.pitch=Math.max(-.2,Math.min(.65,this.pitch+(e.clientY-this.drag.y)*.0025));this.drag.x=e.clientX;this.drag.y=e.clientY;});
  for(const name of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(name,()=>{this.drag=null;this.release('laugh','mouse');});
  for(const [id,value] of [['joy',this.joy],['look-joy',this.look]]){
   const element=document.getElementById(id);if(!element)continue;let pointer=null;const knob=element.querySelector('i');
   const end=()=>{pointer=null;value.x=value.y=0;knob.style.transform='';if(id==='joy')this.laneSign=0;};this.resets.push(end);
   const update=e=>{const r=element.getBoundingClientRect(),radius=r.width*.34;let x=(e.clientX-r.left-r.width/2)/radius,y=(e.clientY-r.top-r.height/2)/radius;const length=Math.hypot(x,y);if(length>1){x/=length;y/=length;}value.x=length<.12?0:x;value.y=length<.12?0:y;knob.style.transform=`translate(${value.x*radius}px,${value.y*radius}px)`;if(id==='joy'){const sign=Math.abs(value.x)>.55?Math.sign(value.x):0;if(sign&&sign!==this.laneSign)this.edges.add(sign<0?'left':'right');this.laneSign=sign;}};
   element.addEventListener('pointerdown',e=>{if(pointer!==null)return;e.preventDefault();pointer=e.pointerId;element.setPointerCapture(pointer);update(e);});
   element.addEventListener('pointermove',e=>{if(pointer===e.pointerId){e.preventDefault();update(e);}});
   for(const event of ['pointerup','pointercancel','lostpointercapture'])element.addEventListener(event,e=>{if(pointer===e.pointerId)end();});
  }
  document.querySelectorAll('[data-action]').forEach(button=>{
   const action=button.dataset.action;const pointers=new Set();
   button.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();pointers.add(e.pointerId);button.setPointerCapture(e.pointerId);if(action!=='tornado')this.press(action,'button-'+e.pointerId);button.classList.add('pressed');});
   const end=e=>{pointers.delete(e.pointerId);this.release(action,'button-'+e.pointerId);if(!pointers.size)button.classList.remove('pressed');};
   for(const event of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(event,end);
   // Open the cinematic on click, after touch release. Replacing the controls on
   // pointerdown lets the same gesture click the newly exposed Skip button.
   button.addEventListener('click',e=>{if(action==='tornado'||e.detail===0){e.preventDefault();e.stopPropagation();this.press(action,'button-click');this.release(action,'button-click');}});
  });
 }
 update(dt){this.orbit-=this.look.x*dt*2.2;this.pitch=Math.max(-.2,Math.min(.65,this.pitch+this.look.y*dt*.8));}
 press(action,source='manual'){if(!action)return;const first=!this.held.has(action);if(!this.sources.has(action))this.sources.set(action,new Set());this.sources.get(action).add(source);this.held.add(action);if(!first)return;if(action==='tornado'&&this.onSkillGesture){this.onSkillGesture();return;}this.edges.add(action);}
 release(action,source='manual'){const sources=this.sources.get(action);if(!sources)return;sources.delete(source);if(!sources.size){this.sources.delete(action);this.held.delete(action);}}
 down(action){return this.held.has(action);}
 take(action){const value=this.edges.has(action);this.edges.delete(action);return value;}
 move(){let x=this.joy.x||(+this.down('right')-this.down('left')),y=this.joy.y||(+this.down('down')-this.down('up'));const n=Math.hypot(x,y);if(n>1){x/=n;y/=n;}return{x,y};}
 clear(){this.held.clear();this.sources.clear();this.edges.clear();this.drag=null;this.resets.forEach(reset=>reset());document.querySelectorAll('.pressed').forEach(button=>button.classList.remove('pressed'));}
}

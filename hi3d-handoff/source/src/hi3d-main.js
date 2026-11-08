import * as T from 'three';
import {AssetRegistry} from './game/hi3d-Assets.js';
import {Input} from './game/hi3d-Input.js';
import {Actor} from './game/hi3d-Actor.js';
import {Effects} from './fx/hi3d-Effects.js';
import {AudioDirector} from './audio/hi3d-Audio.js';
import {Pacing} from './legacy/hi3d-pacing.js';
import {makeLaughUI} from './legacy/hi3d-naiwa.js';
import {baseStats,byId} from './legacy/hi3d-skills.js';
import {ButterflyScene} from './scenes/hi3d-ButterflyScene.js';
import {JourneyScene} from './scenes/hi3d-JourneyScene.js';
import {RunnerScene} from './scenes/hi3d-RunnerScene.js';
import {Classroom,DreamTransition} from './scenes/hi3d-Transitions.js';

const $=s=>document.querySelector(s);
const DREAMS={butterfly:{n:'01',name:'庄周梦蝶',sub:'云海仙境，高雅人士正在丢梗',goal:'狂笑喷蝴蝶攻塔 · 笑声能撞碎飞来的梗',skill:'面条甩甩',bg:0xe4ecf6,fog:0xe8eef6},journey:{n:'02',name:'西游 · 白虎岭',sub:'七十二变，七十二份不正经',goal:'开放山村 · 远处刷怪 · 狂笑锁定喷嘿 · 七十二变清屏',skill:'七十二变',bg:0x1c2840,fog:0x1c2840},runner:{n:'03',name:'堂吉诃奶蛙',sub:'风车长腿了，问题不大',goal:'狂笑喷「哈哈哈」龙卷风 · 大招从天而降砸风车',skill:'捧腹天降',bg:0xd6dfce,fog:0xd6dfce}};
class Game{
 async init(){
  this.scene=new T.Scene();this.scene.background=new T.Color(0xd4dfd5);this.scene.fog=new T.Fog(0xd4dfd5,35,120);
  this.camera=new T.PerspectiveCamera(45,innerWidth/innerHeight,.1,220);this.camera.position.set(10,8,14);
  this.renderer=new T.WebGLRenderer({canvas:$('#world'),antialias:true,alpha:true,powerPreference:'high-performance'});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));this.renderer.setSize(innerWidth,innerHeight);this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=.9;
  this.scene.add(new T.HemisphereLight(0xfff7e1,0x567b8c,2.4));const sun=new T.DirectionalLight(0xffead0,3);sun.position.set(12,22,8);this.scene.add(sun);const fill=new T.DirectionalLight(0x91dbe2,1.0);fill.position.set(-12,6,-4);this.scene.add(fill);
  this.input=new Input(this.renderer.domElement);this.audio=new AudioDirector();this.pacing=new Pacing();this.fx=new Effects();this.scene.add(this.fx.root);this.assets=new AssetRegistry((n,total,errors)=>{$('#load-text').textContent=`布置梦境 ${n} / ${total}`;$('#load-bar').style.width=(n/total*100)+'%';});
  await this.assets.load();this.loadBaihuling();
  this.player=new Actor(this.assets,{belly:true});this.player.root.userData.entityId=0;this.scene.add(this.player.root);this.laughUI=makeLaughUI(document.body);this.skillStats=baseStats();
  this.worlds={school:new Classroom(this),butterfly:new ButterflyScene(this),journey:new JourneyScene(this),runner:new RunnerScene(this),tunnel:new DreamTransition(this)};
  for(const w of Object.values(this.worlds))this.scene.add(w.root);
  this.running=false;this.paused=false;this.stage='school';this.totalTime=0;this.time=0;this.score=0;this.round=0;this.energy=40;this.cold=0;this.idle=0;this.freeze=0;this.awkwardCooldown=0;this.skillCooldown=0;this.laughing=false;this.history=[];this.sayUntil=0;this.reduceShake=true;this.saveWarning=false;
  try{const save=JSON.parse(localStorage.getItem('hi3d-frog-dreams-v1')||'{}');this.best=Number.isFinite(save.best)?save.best:0;this.collection=new Set(Array.isArray(save.collection)?save.collection.filter(v=>typeof v==='string'):[]);}catch{this.best=0;this.collection=new Set();}
  this.enter('school');this.bind();this.updateCollection();this.ready=true;$('#start').disabled=false;$('#start').textContent='趴下，开始做梦  ↗';$('#load-text').textContent=this.assets.errors.length?'部分资产已启用占位回退':'梦境准备好了';$('#loading').classList.add('complete');$('#best').textContent=this.best;
  if(this.assets.errors.length){$('#asset-note').hidden=false;$('#asset-note').textContent='以下资源加载失败，已用占位体继续：'+this.assets.errors.join('、')+'。可在暂停菜单重新加载。';}
  window.__dream={snapshot:()=>this.snapshot()};if(new URLSearchParams(location.search).has('check')){window.__dream.game=this;window.__dream.advance=(seconds)=>{for(let t=0;t<seconds;t+=1/60)this.update(1/60);this.render();};window.__dream.enter=stage=>this.enter(stage);}
  this.last=performance.now();this.accumulator=0;this.frameCount=0;this.fpsAt=this.last;this.fps=0;requestAnimationFrame(t=>this.loop(t));
 }
 loadBaihuling(){const c=$('#bhl');if(!c)return;const sc=document.createElement('script');sc.src='./baihuling/hi3d-baihuling.js';sc.onload=()=>window.__baihuling.init(c);sc.onerror=()=>console.warn('白虎岭背景未加载，西游关使用纯色背景');document.head.appendChild(sc);}
 flash(sec){const el=$('#glow');el.classList.remove('on');void el.offsetWidth;el.style.animationDuration=sec+'s';el.classList.add('on');this.glowUntil=this.totalTime+sec;}
 bind(){
  $('#start').onclick=()=>{this.audio.start();this.running=true;$('#welcome').hidden=true;$('#hud').hidden=false;$('#controls').hidden=false;this.enter('school');this.say('老师：谁在下面偷笑？','奶蛙：没有，是我的灵魂。');};
  $('#pause').onclick=()=>this.togglePause();$('#resume').onclick=()=>this.togglePause(false);
  $('#restart').onclick=()=>this.restart();$('#retry-load').onclick=()=>location.reload();
  $('#volume').oninput=e=>this.audio.setVolume(Number(e.target.value));$('#shake').onchange=e=>this.reduceShake=e.target.checked;
  $('#stats-toggle').onchange=e=>$('#stats').hidden=!e.target.checked;
  $('#collection-open').onclick=()=>{this.togglePause(true);$('#collection').hidden=false;};$('#collection-close').onclick=()=>$('#collection').hidden=true;
  $('#exit-menu').onclick=()=>{this.togglePause(false);this.running=false;$('#welcome').hidden=false;$('#hud').hidden=true;$('#controls').hidden=true;this.enter('school');};
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&this.running)this.togglePause(true);});window.addEventListener('blur',()=>{if(this.running)this.togglePause(true);});
  window.addEventListener('resize',()=>{if(this.input.layout)this.input.layout();this.camera.aspect=innerWidth/innerHeight;this.camera.updateProjectionMatrix();this.renderer.setSize(innerWidth,innerHeight);});
  this.renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();this.togglePause(true);$('#asset-note').hidden=false;$('#asset-note').textContent='图形上下文中断，请用暂停菜单中的“重新加载资源”恢复。';});
 }
 restart(){this.score=0;this.round=0;this.energy=40;this.time=0;this.totalTime=0;this.history=[];this.transitioning=null;this.bellyTime=0;this.sayUntil=0;this.idle=0;this.cold=0;this.skillCooldown=0;this.awkwardCooldown=0;this.freeze=0;this.fx.reset();this.laughUI.clear();this.input.clear();this.player.animate(0,false,false);this.running=true;this.togglePause(false);this.enter('school');}
 togglePause(value=!this.paused){this.paused=value;$('#pause-menu').hidden=!value;this.input.clear();if(value)this.audio.suspend();else if(this.running)this.audio.start();}
 enter(stage){
  this.worlds[this.stage]?.leave?.();this.player.root.scale.set(1,1,1);if(this.worlds.journey.kit)this.worlds.journey.kit.visible=false;if(this.worlds.journey.trail)this.worlds.journey.trail.material.opacity=0;for(const w of Object.values(this.worlds))w.root.visible=false;
  this.stage=stage;this.time=0;this.fx.reset();const keepLaugh=this.input.down('laugh');this.input.clear();if(keepLaugh)this.input.press('laugh');this.freeze=0;this.player.root.rotation.set(0,0,0);this.worlds[stage].enter();{const gb=document.getElementById('giant-btn');if(gb)gb.hidden=stage!=='journey';}
  const bg=DREAMS[stage]?.bg|| (stage==='tunnel'?0x322e59:0xd4dfd5);if(stage==='journey'&&window.__baihuling?.ready){this.scene.background=null;}else{this.scene.background=new T.Color(bg);}this.scene.fog.color.set(DREAMS[stage]?.fog||bg);if(stage!=='butterfly'){this.scene.fog.near=35;this.scene.fog.far=stage==='journey'?400:120;}document.getElementById('bhl')?.classList.toggle('show',stage==='journey'&&!!window.__baihuling?.ready);
  this.history.push({stage,time:+this.totalTime.toFixed(2)});if(this.history.length>50)this.history.shift();
  document.body.dataset.stage=stage;
  if(DREAMS[stage]){const d=DREAMS[stage];$('#dream-number').textContent=d.n;$('#dream-name').textContent=d.name;$('#objective').textContent=d.goal;$('#skill-name').textContent=d.skill;$('#phase-hint').textContent=d.sub;document.querySelectorAll('[data-dream]').forEach(el=>el.classList.toggle('active',el.dataset.dream===stage));}
  if(stage==='journey')this.say('欢迎来到白骨精的赛博分公司。','他们的 KPI：今天绝对不能笑。');
  if(stage==='runner')this.say('堂吉诃德没有骑马。','因为马也想下班。');
  if(stage==='butterfly')this.say('庄周梦见了蝴蝶。','奶蛙梦见了不让人睡觉的高雅人士。');
 }
 say(title,sub=''){this.sayUntil=this.totalTime+3.8;$('#gag-title').textContent=title;$('#gag-sub').textContent=sub;$('#gag').classList.add('visible');this.pacing.log(this.totalTime,title);}
 unlock(name){if(!this.collection.has(name)){this.collection.add(name);this.persist();this.updateCollection();}}
 persist(){try{localStorage.setItem('hi3d-frog-dreams-v1',JSON.stringify({version:1,best:this.best,collection:[...this.collection]}));}catch{this.saveWarning=true;$('#save-state').textContent='浏览器未允许本机保存，本次游玩仍可继续。';}}
 updateCollection(){const all=['高雅，但塔没了','灵魂比本人更活泼','风车拒绝下班','全世界都在替我尴尬'];$('#collection-count').textContent=this.collection.size;$('#collection-items').replaceChildren(...all.map((s,i)=>{let e=document.createElement('article');e.className='joke-card'+(this.collection.has(s)?' unlocked':'');e.innerHTML=`<span>0${i+1}</span><strong>${this.collection.has(s)?s:'未发现的笑话'}</strong><small>${this.collection.has(s)?'已收进梦境图鉴':'在梦里找到它'}</small>`;return e;}));}
 useSkill(){if(this.skillCooldown>0||this.energy<25||!DREAMS[this.stage])return;this.energy-=25;this.skillCooldown=this.stage==='journey'?6:4.5;this.bellyTime=this.stage==='journey'?3:2.8;this.laughUI.showMeme('捧腹大笑！');this.laughUI.rain(6);this.worlds[this.stage].burst();this.audio.belly();this.pacing.quiet(this.totalTime,2.5);this.fx.wave(this.player.root.position);}
 update(dt){
  if(this.input.take('pause')){this.togglePause();return;}if(this.paused)return;
  if(!this.running){this.worlds.school.update(dt);return;}
  this.totalTime+=dt;this.time+=dt;this.skillCooldown=Math.max(0,this.skillCooldown-dt);this.awkwardCooldown=Math.max(0,this.awkwardCooldown-dt);this.freeze=Math.max(0,this.freeze-dt);this.bellyTime=Math.max(0,(this.bellyTime||0)-dt);
  this.laughing=this.input.down('laugh')||this.bellyTime>0;if(this.bellyTime<=0)this.laughUI.hideMeme();
  if(this.laughing){this.idle=0;this.energy=Math.min(100,this.energy+dt*13);if(this.totalTime>(this.nextAudio||0)){this.audio.laugh(this.stage==='journey'?Math.floor(this.totalTime*3)%6:0);this.nextAudio=this.totalTime+.25;}}
  else this.idle+=dt;this.cold=T.MathUtils.damp(this.cold,T.MathUtils.clamp((this.idle-6)/12,0,1),1,dt);
  if(this.input.take('tornado'))this.useSkill();this.giantCd=Math.max(0,(this.giantCd||0)-dt);if(this.input.take('giant')&&this.stage==='journey'&&this.giantCd<=0&&this.energy>=30&&this.worlds.journey.giant()){this.energy-=30;this.giantCd=10;}
  if(this.input.take('awkward')&&this.awkwardCooldown===0&&DREAMS[this.stage]){this.freeze=3;this.awkwardCooldown=12;this.audio.tone(180,.8,.025,'triangle',.55);this.unlock('全世界都在替我尴尬');this.say('哈哈。','……空气突然安静了三秒。');}
  if(this.transitioning){
   this.transitioning.t+=dt;const tr=this.transitioning;
   if(tr.from==='journey'){this.worlds.journey.collapse(tr.t);if(tr.t>1.2){this.transitioning=null;this.enter('tunnel');}}
   else if(tr.t>.7){this.transitioning=null;$('#sneeze').classList.remove('show');this.enter(tr.to);}
  }else{
   if(this.freeze<=0)this.worlds[this.stage].update(dt);
   if(this.stage==='school'&&this.time>=4){this.enter('butterfly');}
   else if(this.stage==='tunnel'&&this.time>=5){this.enter('runner');}
   else if(DREAMS[this.stage]&&this.time>=30){
    if(this.stage==='journey'){this.transitioning={from:'journey',t:0};this.say('地板：这班我也不上了。','所有人一起掉进下一场梦。');}
    else{const next=this.stage==='butterfly'?'journey':'butterfly';if(this.stage==='runner'){this.round++;this.best=Math.max(this.best,this.score);this.persist();$('#best').textContent=this.best;this.say(`第 ${this.round} 圈梦，带回 ${this.score} 个笑点。`,'闹钟：我响了。奶蛙：我没听见。');}this.transitioning={from:this.stage,to:next,t:0};$('#sneeze').classList.add('show');this.audio.tone(170,.35,.03,'triangle',3);}
   }
  }
  this.assets.update(dt);this.fx.update(dt);if(this.totalTime>this.sayUntil)$('#gag').classList.remove('visible');
 }
 render(){
  const world=this.worlds[this.stage];world.camera(this.camera,1/60);if(this.shakeT>0){this.shakeT-=1/60;const s=this.shakeT*.9;this.camera.position.x+=(Math.random()-.5)*s;this.camera.position.y+=(Math.random()-.5)*s;}{const gc=document.getElementById('giant-cd');if(gc)gc.textContent=(this.giantCd||0)>0?Math.ceil(this.giantCd)+'s':'L';}
  if(!this.reduceShake&&this.laughing){this.camera.position.x+=Math.sin(this.totalTime*35)*.035;}
  this.renderer.domElement.style.filter=`saturate(${1-this.cold*.72})`;
  if(this.stage==='journey'&&window.__baihuling?.ready){window.__baihuling.render(this.camera,1/60,Math.max(0,(this.glowUntil||0)-this.totalTime)>0?.6:0);}
  this.renderer.render(this.scene,this.camera);
  if(!this.ready)return;
  const left=DREAMS[this.stage]?Math.max(0,30-this.time):0;$('#timer').textContent=this.stage==='school'?'入梦':this.stage==='tunnel'?'坠梦':`${Math.ceil(left).toString().padStart(2,'0')}s`;$('#time-fill').style.width=(left/30*100)+'%';$('#score').textContent=Math.floor(this.score);$('#energy-fill').style.width=this.energy+'%';$('#energy-number').textContent=Math.floor(this.energy);$('#heat-label').textContent=this.cold>.55?'冷场了，来点笑声！':this.laughing?'笑声传染中':'按住 J，别太严肃';$('#skill-cooldown').textContent=this.skillCooldown>0?this.skillCooldown.toFixed(1)+'s':this.energy<25?'还差一点笑声':'K';$('#freeze-cooldown').textContent=this.awkwardCooldown>0?Math.ceil(this.awkwardCooldown)+'s':'Q';
  $('#detail').textContent=this.stage==='journey'?`分身 ${this.worlds.journey.cloneCount} / 72 · 已超度 ${this.worlds.journey.cleared} 只小怪`:this.stage==='butterfly'?`梦核 ${this.worlds.butterfly.health}% · 剩余高雅塔 ${this.worlds.butterfly.towers.filter(t=>!t.destroyed).length}`:this.stage==='runner'?`奶蛙血量 ${this.worlds.runner.frogHp??100} · 风车巨人牛来 血量 ${Math.round(this.worlds.runner.millHp||0)} · 追逐 ${Math.floor(this.worlds.runner.distance)}m`:'今天的课题：梦里也不许笑';
  $('#stats').textContent=`${this.fps} FPS · ${this.renderer.info.render.calls} 次绘制 · ${Math.round(this.renderer.info.render.triangles/1000)}k 三角面 · ${this.renderer.info.memory.geometries} 几何`;
 }
 loop(now){const delta=Math.min(.12,(now-this.last)/1000);this.last=now;this.accumulator+=delta;while(this.accumulator>=1/60){this.update(1/60);this.accumulator-=1/60;}this.frameCount++;if(now-this.fpsAt>1000){this.fps=Math.round(this.frameCount*1000/(now-this.fpsAt));this.frameCount=0;this.fpsAt=now;}this.render();requestAnimationFrame(t=>this.loop(t));}
 snapshot(){return {ready:this.ready,stage:this.stage,time:+this.time.toFixed(2),totalTime:+this.totalTime.toFixed(2),running:this.running,paused:this.paused,score:this.score,round:this.round,energy:this.energy,freeze:this.freeze,cold:this.cold,player:this.player.root.position.toArray(),frogCount:this.stage==='journey'?this.worlds.journey.cloneCount:1,skillT:this.worlds.journey.skillT,monstersAlive:this.worlds.journey.monsters.filter(m=>m.state!=='Hidden'&&m.state!=='Gone').length,cleared:this.worlds.journey.cleared,memes:this.worlds.butterfly.memes.filter(m=>m.active).length,memeHits:this.worlds.butterfly.memeHits,umbrellas:this.worlds.butterfly.umbrellas.filter(u=>u.active).length,noodle:this.worlds.butterfly.noodleT,giantT:this.worlds.journey.giantT,frogHp:this.worlds.runner.frogHp,activeButterflies:this.worlds.butterfly.butterflies.filter(b=>b.active).length,baihuling:!!window.__baihuling?.ready,glow:document.getElementById('glow')?.classList.contains('on'),nearCount:this.worlds.journey.near.length+1,crowdCount:this.worlds.journey.crowd[0]?.count,fragments:this.worlds.journey.fragments.length,towers:this.worlds.butterfly.towers.map(t=>t.health),runner:{distance:this.worlds.runner.distance||0,lane:this.worlds.runner.lane,hits:this.worlds.runner.hits||0,theme:this.worlds.runner.theme,state:this.worlds.runner.state},history:this.history,loaded:[...this.assets.models.keys()],errors:this.assets.errors,collection:[...this.collection],drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,fps:this.fps};}
}
const game=new Game();game.init().catch(error=>{console.error(error);$('#load-text').textContent='梦境未能打开：'+error.message;$('#fatal').hidden=false;$('#fatal-message').textContent=error.message;});




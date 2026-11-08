import {UltimateVideo} from './fx/hi3d-UltimateVideo.js';
import {installArt} from './scenes/hi3d-ArtDirection.js';
import * as T from 'three';
import {AssetRegistry} from './game/hi3d-Assets.js';
import {Input} from './game/hi3d-DualInput.js';
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
const DREAMS={butterfly:{n:'02',name:'庄周梦蝶',sub:'云海仙境，高雅人士正在丢梗',goal:'狂笑喷蝴蝶攻塔 · 笑声能撞碎飞来的梗',skill:'面条甩甩',bg:0xe4ecf6,fog:0xe8eef6},journey:{n:'01',name:'西游 · 白虎岭',sub:'七十二变，七十二份不正经',goal:'开放山村 · 远处刷怪 · 狂笑锁定喷嘿 · 七十二变清屏',skill:'七十二变',bg:0x1c2840,fog:0x1c2840},runner:{n:'03',name:'堂吉诃奶蛙',sub:'风车长腿了，问题不大',goal:'狂笑喷「哈哈哈」龙卷风 · 大招从天而降砸风车',skill:'捧腹天降',bg:0xd6dfce,fog:0xd6dfce}};
class Game{
 async init(){
  this.scene=new T.Scene();this.scene.background=new T.Color(0xd4dfd5);this.scene.fog=new T.Fog(0xd4dfd5,35,120);
  this.camera=new T.PerspectiveCamera(58,innerWidth/innerHeight,.1,220);this.camera.position.set(10,8,14);
  this.renderer=new T.WebGLRenderer({canvas:$('#world'),antialias:true,alpha:true,powerPreference:'high-performance'});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));this.renderer.setSize(innerWidth,innerHeight);this.renderer.outputColorSpace=T.SRGBColorSpace;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=.9;
  this.hemi=new T.HemisphereLight(0xffefd6,0x667d8e,1.15);this.scene.add(this.hemi);const sun=new T.DirectionalLight(0xffead0,3);sun.position.set(12,22,8);this.sun=sun;sun.castShadow=true;sun.shadow.mapSize.set(1536,1536);Object.assign(sun.shadow.camera,{left:-24,right:24,top:24,bottom:-24,near:.5,far:90});sun.shadow.bias=-.0002;sun.shadow.normalBias=.04;this.scene.add(sun);const fill=new T.DirectionalLight(0x91dbe2,1.0);fill.position.set(-12,6,-4);this.fill=fill;this.scene.add(fill);this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=T.PCFSoftShadowMap;this.renderer.shadowMap.autoUpdate=false;this.pixelRatio=Math.min(devicePixelRatio,matchMedia('(pointer:coarse)').matches?1.25:1.5);this.renderer.setPixelRatio(this.pixelRatio);
  this.input=new Input(this.renderer.domElement);this.audio=new AudioDirector();this.pacing=new Pacing();this.fx=new Effects();this.scene.add(this.fx.root);this.assets=new AssetRegistry((n,total,errors)=>{$('#load-text').textContent=`布置梦境 ${n} / ${total}`;$('#load-bar').style.width=(n/total*100)+'%';});
  const backgroundReady=this.loadBaihuling();await this.assets.load();await backgroundReady;
  this.player=new Actor(this.assets,{belly:true});this.player.root.userData.entityId=0;this.scene.add(this.player.root);this.laughUI=makeLaughUI(document.body);this.skillStats=baseStats();
  this.worlds={school:new Classroom(this),butterfly:new ButterflyScene(this),journey:new JourneyScene(this),runner:new RunnerScene(this),tunnel:new DreamTransition(this)};
  for(const w of Object.values(this.worlds))this.scene.add(w.root);this.art=await installArt(this);
  this.running=false;this.paused=false;this.stage='school';this.totalTime=0;this.time=0;this.score=0;this.round=0;this.energy=40;this.cold=0;this.idle=0;this.freeze=0;this.awkwardCooldown=0;this.skillCooldown=0;this.laughing=false;this.history=[];this.sayUntil=0;this.reduceShake=true;this.saveWarning=false;
  try{const save=JSON.parse(localStorage.getItem('hi3d-frog-dreams-v1')||'{}');this.best=Number.isFinite(save.best)?save.best:0;this.collection=new Set(Array.isArray(save.collection)?save.collection.filter(v=>typeof v==='string'):[]);}catch{this.best=0;this.collection=new Set();}
  this.skillVideo=new UltimateVideo(this);this.input.onSkillGesture=()=>{if(this.running&&!this.paused)this.useSkill();};this.enter('school');this.bind();this.updateCollection();await this.prepareScenes();await this.skillVideo.prepare();this.ready=true;this.autoDream=false;this.videoEnabled=true;this.setQuality('balanced');$('#start').disabled=false;$('#start').textContent='进入白虎岭 · 开始游戏  ↗';$('#load-text').textContent=this.assets.errors.length?'部分资产已启用占位回退':'梦境准备好了';$('#loading').classList.add('complete');$('#best').textContent=this.best;
  if(this.assets.errors.length){$('#asset-note').hidden=false;$('#asset-note').textContent='以下资源加载失败，已用占位体继续：'+this.assets.errors.join('、')+'。可在暂停菜单重新加载。';}
  window.__dream={snapshot:()=>this.snapshot()};if(new URLSearchParams(location.search).has('check')){window.__dream.game=this;window.__dream.advance=(seconds)=>{for(let t=0;t<seconds;t+=1/60)this.update(1/60);this.render();};window.__dream.enter=stage=>this.enter(stage);}
  this.last=performance.now();this.accumulator=0;this.frameCount=0;this.fpsAt=this.last;this.fps=0;requestAnimationFrame(t=>this.loop(t));
 }
 async loadBaihuling(){
  const canvas=$('#bhl');
  const script=document.createElement('script');script.src='./baihuling/hi3d-baihuling.js';
  await new Promise((resolve,reject)=>{script.onload=resolve;script.onerror=()=>reject(new Error('白虎岭脚本加载失败，请重新加载资源。'));document.head.appendChild(script);});
  const b=window.__baihuling;
  const progress=setInterval(()=>{if(!b.ready)$('#load-text').textContent='正在准备白虎岭实景 · '+Math.round(b.progress*100)+'%';},250);
  try {await b.init(canvas);if(!b.ready)throw new Error('白虎岭未能加载：'+(b.error||'请重新加载资源'));b.renderer.shadowMap.autoUpdate=false;b.renderer.shadowMap.needsUpdate=true;b.renderer.info.autoReset=false;
   if(this.stage==='journey')this.syncBackground();
  } finally {clearInterval(progress);}
 }
 syncBackground(){const show=this.stage==='journey'&&!!window.__baihuling?.ready;
  $('#bhl').classList.toggle('show',show);this.scene.background=show?null:new T.Color(DREAMS[this.stage]?.bg||0xd4dfd5);
  if(this.worlds?.journey)this.worlds.journey.floor.visible=!show;
 }
 async prepareScenes(){
  for(const stage of ['school','journey','butterfly','runner','tunnel']){
   $('#load-text').textContent='准备画面与技能 · '+(DREAMS[stage]?.name|| (stage==='school'?'云端教室':'梦境通道'));
   await new Promise(r=>requestAnimationFrame(r));this.enter(stage);
   await this.renderer.compileAsync(this.scene,this.camera);this.render();
   await new Promise(r=>requestAnimationFrame(r));
  }
  this.enter('school');this.history=[];this.input.clear();this.lastHud=0;
 }
 feedback(text){$('#combat-feedback').textContent=text;this.feedbackUntil=this.totalTime+1.1;}

 flash(sec){const el=$('#glow');el.classList.remove('on');void el.offsetWidth;el.style.animationDuration=sec+'s';el.classList.add('on');this.glowUntil=this.totalTime+sec;}
 bind(){
  $('#start').onclick=()=>{this.skillVideo.prepare();this.audio.start();this.running=true;$('#welcome').hidden=true;$('#hud').hidden=false;$('#controls').hidden=false;this.enter('journey');};
  $('#pause').onclick=()=>this.togglePause();$('#scene-open').onclick=()=>{this.togglePause(true);$('#scene-title').scrollIntoView({block:'center'});};$('#auto-dream').onchange=e=>this.autoDream=e.target.checked;$('#quality').onchange=e=>this.setQuality(e.target.value);$('#cinema-enabled').onchange=e=>this.videoEnabled=e.target.checked;$('#resume').onclick=()=>this.togglePause(false);
  $('#restart').onclick=()=>this.restart();$('#retry-load').onclick=()=>location.reload();
  $('#volume').oninput=e=>this.audio.setVolume(Number(e.target.value));$('#shake').onchange=e=>this.reduceShake=e.target.checked;
  document.querySelectorAll('[data-visit]').forEach(b=>b.onclick=()=>{this.transitioning=null;this.togglePause(false);this.running=true;$('#welcome').hidden=true;$('#hud').hidden=false;$('#controls').hidden=false;this.audio.start();this.enter(b.dataset.visit);});$('#stats-toggle').onchange=e=>$('#stats').hidden=!e.target.checked;
  $('#collection-open').onclick=()=>{this.togglePause(true);$('#collection').hidden=false;};$('#collection-close').onclick=()=>$('#collection').hidden=true;
  $('#exit-menu').onclick=()=>{this.togglePause(false);this.running=false;$('#welcome').hidden=false;$('#hud').hidden=true;$('#controls').hidden=true;this.enter('school');};
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&this.running)this.togglePause(true);});window.addEventListener('blur',()=>{if(this.running)this.togglePause(true);});
  window.addEventListener('resize',()=>{if(this.input.layout)this.input.layout();this.camera.aspect=innerWidth/innerHeight;this.camera.updateProjectionMatrix();this.renderer.setSize(innerWidth,innerHeight);if(this.quality)this.setQuality(this.quality);});
  this.renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();this.togglePause(true);$('#asset-note').hidden=false;$('#asset-note').textContent='图形上下文中断，请用暂停菜单中的“重新加载资源”恢复。';});
 }
 restart(){this.skillVideo?.cancel();this.score=0;this.round=0;this.energy=40;this.time=0;this.totalTime=0;this.history=[];this.transitioning=null;this.bellyTime=0;this.sayUntil=0;this.idle=0;this.cold=0;this.skillCooldown=0;this.awkwardCooldown=0;this.freeze=0;this.fx.reset();this.laughUI.clear();this.input.clear();this.player.animate(0,false,false);this.running=true;this.togglePause(false);this.enter('school');}
 togglePause(value=!this.paused){this.paused=value;this.last=performance.now();this.fpsAt=this.last;this.frameCount=0;this.accumulator=0;$('#pause-menu').hidden=!value;this.input.clear();if(this.skillVideo?.active){if(value){this.skillVideo.video.pause();this.skillVideo.playButton.hidden=false;this.skillVideo.status.textContent='演出已暂停，点击继续播放。';}else this.skillVideo.play();}if(value)this.audio.suspend();else if(this.running&&!this.skillVideo?.active)this.audio.start();}
 enter(stage){
  this.skillVideo?.cancel();this.worlds[this.stage]?.leave?.();this.player.root.scale.set(1,1,1);if(this.worlds.journey.kit)this.worlds.journey.kit.visible=false;if(this.worlds.journey.trail)this.worlds.journey.trail.material.opacity=0;for(const w of Object.values(this.worlds)){w.root.visible=false;w.root.removeFromParent();}
  if(this.running&&this.score>this.best){this.best=this.score;this.persist();$('#best').textContent=this.best;}this.stage=stage;document.body.classList.remove('frozen');this.time=0;this.bellyTime=0;this.laughing=false;this.laughUI?.clear();this.fx.reset();this.input.clear();this.attackUntil=0;this.freeze=0;this.player.root.rotation.set(0,0,0);this.scene.add(this.worlds[stage].root);this.worlds[stage].enter();this.syncBackground();this.transitioning=null;$('#sneeze').classList.remove('show');$('#glow').classList.remove('on');this.input.orbit=0;this.input.pitch=0;{const gb=document.getElementById('giant-btn');if(gb)gb.hidden=stage!=='journey';}
  const bg=DREAMS[stage]?.bg|| (stage==='tunnel'?0x322e59:0xd4dfd5);if(stage==='journey'&&window.__baihuling?.ready){this.scene.background=null;}else{this.scene.background=new T.Color(bg);}this.scene.fog.color.set(DREAMS[stage]?.fog||bg);if(stage!=='butterfly'){this.scene.fog.near=35;this.scene.fog.far=stage==='journey'?400:120;}document.getElementById('bhl')?.classList.toggle('show',stage==='journey'&&!!window.__baihuling?.ready);
  this.history.push({stage,time:+this.totalTime.toFixed(2)});if(this.history.length>50)this.history.shift();
  document.body.dataset.stage=stage;this.art?.enter(stage);this.giantCd=0;this.skillCooldown=0;this.awkwardCooldown=0;this.worlds[stage].camera(this.camera,10);
  if(DREAMS[stage]){const d=DREAMS[stage];$('#dream-number').textContent=d.n;$('#dream-name').textContent=d.name;$('#objective').textContent=d.goal;$('#skill-name').textContent=d.skill;$('#phase-hint').textContent=d.sub;document.querySelectorAll('[data-dream]').forEach(el=>el.classList.toggle('active',el.dataset.dream===stage));}
  if(stage==='journey')this.say('欢迎来到白骨精的赛博分公司。','他们的 KPI：今天绝对不能笑。');
  if(stage==='runner')this.say('堂吉诃德没有骑马。','因为马也想下班。');
  if(stage==='butterfly')this.say('庄周梦见了蝴蝶。','奶蛙梦见了不让人睡觉的高雅人士。');
 }
 say(title,sub=''){this.sayUntil=this.totalTime+3.8;$('#gag-title').textContent=title;$('#gag-sub').textContent=sub;$('#gag').classList.add('visible');this.pacing.log(this.totalTime,title);}
 unlock(name){if(!this.collection.has(name)){this.collection.add(name);this.persist();this.updateCollection();}}
 persist(){try{localStorage.setItem('hi3d-frog-dreams-v1',JSON.stringify({version:1,best:this.best,collection:[...this.collection]}));}catch{this.saveWarning=true;$('#save-state').textContent='浏览器未允许本机保存，本次游玩仍可继续。';}}
 updateCollection(){const all=['高雅，但塔没了','灵魂比本人更活泼','风车拒绝下班','全世界都在替我尴尬'];$('#collection-count').textContent=this.collection.size;$('#collection-items').replaceChildren(...all.map((s,i)=>{let e=document.createElement('article');e.className='joke-card'+(this.collection.has(s)?' unlocked':'');e.innerHTML=`<span>0${i+1}</span><strong>${this.collection.has(s)?s:'未发现的笑话'}</strong><small>${this.collection.has(s)?'已收进梦境图鉴':'在梦里找到它'}</small>`;return e;}));}
 useSkill(afterVideo=false){if(!DREAMS[this.stage])return;if(this.skillVideo?.active)return;if(this.skillCooldown>0){this.say('技能冷却中',this.skillCooldown.toFixed(1)+' 秒后可用');return;}if(this.energy<25){this.say('笑能不足','按住狂笑恢复笑能；大招需要 25 点。');return;}if(this.stage==='journey'&&!afterVideo&&this.videoEnabled!==false){this.skillVideo.start(()=>this.useSkill(true));return;}this.freeze=0;this.energy-=25;this.skillCooldown=this.stage==='journey'?6:4.5;this.bellyTime=this.stage==='journey'?3:2.8;this.feedback(DREAMS[this.stage].skill+' · 已释放');this.laughUI.rain(3);this.worlds[this.stage].burst();this.audio.belly();this.pacing.quiet(this.totalTime,2.5);this.fx.wave(this.player.root.position);}
 update(dt){
  if(this.input.take('pause')){this.togglePause();return;}if(this.paused||this.skillVideo?.active)return;this.input.update(dt);this.art?.update(dt);
  if(!this.running){this.worlds.school.update(dt);return;}
  this.totalTime+=dt;this.time+=dt;this.skillCooldown=Math.max(0,this.skillCooldown-dt);this.awkwardCooldown=Math.max(0,this.awkwardCooldown-dt);this.freeze=Math.max(0,this.freeze-dt);document.body.classList.toggle('frozen',this.freeze>0);this.bellyTime=Math.max(0,(this.bellyTime||0)-dt);
  if(this.input.take('laugh'))this.attackUntil=this.totalTime+.25;if(this.input.down('laugh')||this.totalTime<(this.attackUntil||0))this.freeze=0;this.laughing=this.input.down('laugh')||this.totalTime<(this.attackUntil||0)||this.bellyTime>0;if(this.bellyTime<=0)this.laughUI.hideMeme();
  if(this.laughing){this.idle=0;this.energy=Math.min(100,this.energy+dt*13);if(this.totalTime>(this.nextAudio||0)){this.audio.laugh(this.stage==='journey'?Math.floor(this.totalTime*3)%6:0);this.nextAudio=this.totalTime+.25;}}
  else this.idle+=dt;this.cold=T.MathUtils.damp(this.cold,T.MathUtils.clamp((this.idle-6)/12,0,1),1,dt);
  if(this.input.take('tornado'))this.useSkill();this.giantCd=Math.max(0,(this.giantCd||0)-dt);if(this.input.take('giant')&&this.stage==='journey'&&this.giantCd<=0&&this.energy>=30&&this.worlds.journey.giant()){this.energy-=30;this.giantCd=10;}
  if(this.input.take('awkward')&&this.awkwardCooldown===0&&DREAMS[this.stage]){this.freeze=3;this.awkwardCooldown=12;this.feedback('定身3秒 · 攻击时解除');this.fx.wave(this.player.root.position);this.audio.tone(180,.8,.025,'triangle',.55);this.unlock('全世界都在替我尴尬');this.say('哈哈。','……空气突然安静了三秒。');}
  if(this.transitioning){
   this.transitioning.t+=dt;const tr=this.transitioning;
   if(tr.from==='journey'){this.worlds.journey.collapse(tr.t);if(tr.t>1.2){this.transitioning=null;this.enter('tunnel');}}
   else if(tr.t>.7){this.transitioning=null;$('#sneeze').classList.remove('show');this.enter(tr.to);}
  }else{
   if(this.freeze<=0)this.worlds[this.stage].update(dt);else if(DREAMS[this.stage]){const moving=this.player.move(dt,this.input,this.stage==='journey'?52:13,this.input.orbit);this.player.jump(dt,this.input,this.audio);this.player.animate(this.totalTime,moving,this.laughing);}
   if(this.stage==='school'&&this.time>=7){this.enter('journey');}
   else if(this.stage==='tunnel'&&this.time>=5){this.enter('butterfly');}
   else if(DREAMS[this.stage]&&this.autoDream&&this.time>=30){
    if(this.stage==='journey'){this.transitioning={from:'journey',t:0};this.say('地板：这班我也不上了。','所有人一起掉进下一场梦。');}
    else{const next=this.stage==='butterfly'?'runner':'journey';if(this.stage==='runner'){this.round++;this.best=Math.max(this.best,this.score);this.persist();$('#best').textContent=this.best;this.say(`第 ${this.round} 圈梦，带回 ${this.score} 个笑点。`,'闹钟：我响了。奶蛙：我没听见。');}this.transitioning={from:this.stage,to:next,t:0};$('#sneeze').classList.add('show');this.audio.tone(170,.35,.03,'triangle',3);}
   }
  }
  this.assets.update(dt);this.fx.update(dt);if(this.totalTime>this.sayUntil)$('#gag').classList.remove('visible');
 }
 render(){
  const world=this.worlds[this.stage];world.camera(this.camera,this.renderDt||1/60);if(this.shakeT>0){this.shakeT-=1/60;const s=this.shakeT*.9;this.camera.position.x+=(Math.random()-.5)*s;this.camera.position.y+=(Math.random()-.5)*s;}{const gc=document.getElementById('giant-cd');if(gc)gc.textContent=(this.giantCd||0)>0?Math.ceil(this.giantCd)+'s':'L';}
  if(!this.reduceShake&&this.laughing){this.camera.position.x+=Math.sin(this.totalTime*35)*.035;}
  
  if(this.stage==='journey'&&window.__baihuling?.ready){window.__baihuling.renderer.info.reset();window.__baihuling.render(this.camera,this.renderDt||1/60,Math.max(0,(this.glowUntil||0)-this.totalTime)>0?.6:0);}
  this.art?.render();if(performance.now()-(this.shadowAt||0)>50){this.renderer.shadowMap.needsUpdate=true;this.shadowAt=performance.now();}this.renderer.render(this.scene,this.camera);
  if(!this.ready)return;if(performance.now()-(this.lastHud||0)<80)return;this.lastHud=performance.now();
  const left=DREAMS[this.stage]?Math.max(0,30-this.time):0;$('#combat-feedback').classList.toggle('visible',this.totalTime<(this.feedbackUntil||0));$('#timer').textContent=this.stage==='school'?'入梦':this.stage==='tunnel'?'坠梦':this.autoDream?`${Math.ceil(left).toString().padStart(2,'0')}s`:'自由玩';$('#time-fill').style.width=(this.autoDream?left/30*100:100)+'%';$('#score').textContent=Math.floor(this.score);$('#energy-fill').style.width=this.energy+'%';$('#energy-number').textContent=Math.floor(this.energy);$('#heat-label').textContent=this.cold>.55?'冷场了，来点笑声！':this.laughing?'普通攻击 · 连击中':'点击普攻 / J / 鼠标左键';document.querySelector('[data-action="tornado"]').classList.toggle('cooling',this.skillCooldown>0||this.energy<25);$('#skill-cooldown').textContent=this.skillCooldown>0?this.skillCooldown.toFixed(1)+'s':this.energy<25?'需25笑能':'可释放 K';$('#freeze-cooldown').textContent=this.awkwardCooldown>0?Math.ceil(this.awkwardCooldown)+'s':'Q';
  $('#detail').textContent=this.stage==='journey'?`分身 ${this.worlds.journey.cloneCount} / 72 · 已超度 ${this.worlds.journey.cleared} 只小怪`:this.stage==='butterfly'?`梦核 ${this.worlds.butterfly.health}% · 剩余高雅塔 ${this.worlds.butterfly.towers.filter(t=>!t.destroyed).length}`:this.stage==='runner'?`奶蛙血量 ${this.worlds.runner.frogHp??100} · 风车巨人牛来 血量 ${Math.round(this.worlds.runner.millHp||0)} · 追逐 ${Math.floor(this.worlds.runner.distance)}m`:'今天的课题：梦里也不许笑';
  $('#stats').textContent=`${this.fps} FPS · ${this.renderer.info.render.calls} 次绘制 · ${Math.round((this.renderer.info.render.triangles+(this.stage==='journey'?(window.__baihuling?.renderer.info.render.triangles||0):0))/1000)}k 三角面 · ${this.renderer.info.memory.geometries} 几何`;
 }
 setQuality(mode){
  this.quality=mode;const mobile=matchMedia('(pointer:coarse)').matches;
  this.pixelRatio=Math.min(devicePixelRatio,mode==='high'?1.5:mode==='smooth'?.8:mobile?1:1.15);this.renderer.setPixelRatio(this.pixelRatio);
  this.art?.setQuality?.(mode);const b=window.__baihuling;if(b?.ready){b.renderer.setPixelRatio(this.pixelRatio);b.post.setSize(innerWidth,innerHeight,this.pixelRatio);b.post.bloom.enabled=mode==='high';}
 }
 loop(now){const delta=Math.min(.08,(now-this.last)/1000);this.last=now;this.renderDt=delta;if(this.paused||this.skillVideo?.active){this.accumulator=0;if(this.input.take('pause'))this.togglePause();requestAnimationFrame(t=>this.loop(t));return;}this.accumulator+=delta;while(this.accumulator>=1/60){this.update(1/60);this.accumulator-=1/60;}this.frameCount++;if(now-this.fpsAt>1000){this.fps=Math.round(this.frameCount*1000/(now-this.fpsAt));this.frameCount=0;this.fpsAt=now;if(this.running&&!this.paused&&this.fps<40&&this.pixelRatio>.8){this.slowFrames=(this.slowFrames||0)+1;if(this.slowFrames>=3){this.pixelRatio=Math.max(.8,this.pixelRatio-.15);this.renderer.setPixelRatio(this.pixelRatio);const bg=window.__baihuling;if(bg?.ready){bg.renderer.setPixelRatio(this.pixelRatio);bg.post.setSize(innerWidth,innerHeight,this.pixelRatio);}this.slowFrames=0;}}else this.slowFrames=0;}if(!this.paused&&!this.skillVideo?.active)this.render();requestAnimationFrame(t=>this.loop(t));}
 snapshot(){return {ready:this.ready,stage:this.stage,time:+this.time.toFixed(2),totalTime:+this.totalTime.toFixed(2),running:this.running,paused:this.paused,score:this.score,round:this.round,energy:this.energy,freeze:this.freeze,cold:this.cold,player:this.player.root.position.toArray(),frogCount:this.stage==='journey'?this.worlds.journey.cloneCount:1,skillT:this.worlds.journey.skillT,monstersAlive:this.worlds.journey.monsters.filter(m=>m.state!=='Hidden'&&m.state!=='Gone').length,cleared:this.worlds.journey.cleared,memes:this.worlds.butterfly.memes.filter(m=>m.active).length,memeHits:this.worlds.butterfly.memeHits,umbrellas:this.worlds.butterfly.umbrellas.filter(u=>u.active).length,noodle:this.worlds.butterfly.noodleT,giantT:this.worlds.journey.giantT,frogHp:this.worlds.runner.frogHp,activeButterflies:this.worlds.butterfly.butterflies.filter(b=>b.active).length,baihuling:!!window.__baihuling?.ready,glow:document.getElementById('glow')?.classList.contains('on'),nearCount:this.worlds.journey.near.length+1,crowdCount:this.worlds.journey.crowd[0]?.count,fragments:this.worlds.journey.fragments.length,towers:this.worlds.butterfly.towers.map(t=>t.health),runner:{distance:this.worlds.runner.distance||0,lane:this.worlds.runner.lane,hits:this.worlds.runner.hits||0,theme:this.worlds.runner.theme,state:this.worlds.runner.state},history:this.history,loaded:[...this.assets.models.keys()],errors:this.assets.errors,collection:[...this.collection],drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,fps:this.fps};}
}
const game=new Game();game.init().catch(error=>{console.error(error);$('#load-text').textContent='梦境未能打开：'+error.message;$('#fatal').hidden=false;$('#fatal-message').textContent=error.message;});




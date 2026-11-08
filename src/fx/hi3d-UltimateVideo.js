export class UltimateVideo {
 constructor(app){
  this.app=app;this.active=false;this.root=document.createElement('section');this.root.id='ultimate-cinema';this.root.hidden=true;this.root.setAttribute('aria-label','白虎岭大招视频');
  this.root.innerHTML='<video playsinline preload="auto"></video><div class="cinema-title"><span>第一梦 · 白虎岭</span><strong>七十二变 · 原声大招</strong></div><button class="cinema-play" hidden>继续播放</button><button class="cinema-skip">跳过演出，释放技能</button><p class="cinema-status" role="status"></p>';
  document.body.append(this.root);this.video=this.root.querySelector('video');this.playButton=this.root.querySelector('.cinema-play');this.status=this.root.querySelector('.cinema-status');
  this.url=new URL('../../public/assets/video/hi3d-ultimate-sdr.mp4',import.meta.url).href;this.video.src=this.url;
  this.video.addEventListener('ended',()=>this.finish());
  this.video.addEventListener('error',()=>{this.status.textContent='视频未能播放。可以跳过演出，正常释放大招。';this.playButton.hidden=false;});
  this.video.addEventListener('waiting',()=>{if(this.active)this.status.textContent='视频缓冲中… 可随时跳过并释放大招';});
  this.video.addEventListener('playing',()=>{this.status.textContent='';this.playButton.hidden=true;});
  this.playButton.onclick=()=>this.play();this.root.querySelector('.cinema-skip').onclick=()=>this.finish();
 }
 prepare(){
  if(this.preparing)return this.preparing;
  this.preparing=fetch(this.url,{signal:AbortSignal.timeout(10000)}).then(response=>{if(!response.ok)throw Error('HTTP '+response.status);return response.blob();}).then(blob=>{this.blobUrl=URL.createObjectURL(blob);if(!this.active){this.video.src=this.blobUrl;this.video.load();}this.prepared=true;}).catch(()=>{this.prepared=false;});return this.preparing;
 }
 start(done){
  if(this.active)return;this.done=done;this.active=true;document.body.classList.add('cinema-active');this.root.hidden=false;this.status.textContent='正在播放原声大招';this.playButton.hidden=true;
  if(this.blobUrl&&this.video.src!==this.blobUrl)this.video.src=this.blobUrl;
  this.video.currentTime=0;this.video.volume=this.app.audio.volume??.5;this.video.muted=false;this.app.input.clear();this.app.audio.suspend();this.play();
  this.lastTime=0;this.stallSeconds=0;this.watchdog=setInterval(()=>{if(!this.active||this.app.paused)return;if(!this.video.paused&&this.video.currentTime<=this.lastTime+.03)this.stallSeconds++;else this.stallSeconds=0;this.lastTime=this.video.currentTime;if(this.stallSeconds>=3){this.status.textContent='播放暂时卡住，可点击继续或跳过演出释放大招。';this.playButton.hidden=false;}},1000);
 }
 play(){if(!this.active)return;if(this.app.paused){this.app.togglePause(false);return;}this.video.play().catch(()=>{this.playButton.hidden=false;this.status.textContent='点击继续，播放原始音效。';});}
 finish(){if(!this.active)return;const done=this.done;this.cancel();this.app.togglePause(false);this.app.input.clear();done?.();}
 cancel(){this.done=null;this.active=false;clearInterval(this.watchdog);this.video.pause();this.root.hidden=true;document.body.classList.remove('cinema-active');this.app.last=performance.now();this.app.accumulator=0;this.app.fpsAt=this.app.last;this.app.frameCount=0;}
}

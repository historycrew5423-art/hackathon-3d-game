import {playMeme,memeThrottle} from './hi3d-Memes.js';
import {loadLaugh,setLaughOut,playHa,playLaugh,stopLaugh} from '../legacy/hi3d-naiwa.js';
// Reuse the supplied game's documented MIT frog laughter; other sounds are synthesized.
export class AudioDirector{
 constructor(){this.ctx=null;this.volume=.25;this.active=false;this.lastLaugh=-1;}
 start(){if(!this.ctx){this.ctx=new (window.AudioContext||window.webkitAudioContext)();this.bus=this.ctx.createGain();this.bus.gain.value=this.volume;this.bus.connect(this.ctx.destination);setLaughOut(this.bus);this.loading=loadLaugh(this.ctx);}this.ctx.resume();this.active=true;}
 setVolume(v){this.volume=v;if(this.bus)this.bus.gain.setTargetAtTime(v,this.ctx.currentTime,.05);}
 suspend(){this.active=false;stopLaugh();this.ctx?.suspend();}
 tone(freq,duration=.15,gain=.05,type='sine',bend=1){
  if(!this.ctx||!this.active||this.volume===0)return;
  const t=this.ctx.currentTime,o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,t);o.frequency.exponentialRampToValueAtTime(freq*bend,t+duration);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(gain,t+.015);g.gain.exponentialRampToValueAtTime(.0001,t+duration);o.connect(g);g.connect(this.bus);o.start(t);o.stop(t+duration+.01);o.onended=()=>{o.disconnect();g.disconnect();};
 }
 laugh(group=0){if(!this.ctx||this.ctx.currentTime-this.lastLaugh<.18)return;this.lastLaugh=this.ctx.currentTime;if(!playHa(this.ctx,.24)){this.tone(210+group*48,.18,.07,'triangle',1.65);}if(group>0)this.tone(420+group*70,.12,.025,'sine',.7);}
 belly(){if(this.ctx&&this.active)playLaugh(this.ctx,2.8,'short',.25);}
 // 合成猴王式笑声：高频“嘿嘿嘿——哈”颤音 + 多声部大奶蛙复合狂笑（原创合成，不用影视原声）
 monkeyLaugh(sec=3){if(!this.ctx||!this.active||this.volume===0)return;playLaugh(this.ctx,sec,'short',.3);const t0=this.ctx.currentTime;
  for(let i=0;i<Math.floor(sec*7);i++){const t=t0+i/7+(i%3)*.012,o=this.ctx.createOscillator(),v=this.ctx.createOscillator(),vg=this.ctx.createGain(),g=this.ctx.createGain();const base=i%7===6?520:760+((i*53)%5)*60;o.type='sawtooth';o.frequency.setValueAtTime(base*1.25,t);o.frequency.exponentialRampToValueAtTime(base*.8,t+.11);v.frequency.value=38;vg.gain.value=base*.06;v.connect(vg);vg.connect(o.frequency);g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.035,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+.13);const f=this.ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=1400;f.Q.value=1.4;o.connect(f);f.connect(g);g.connect(this.bus);o.start(t);v.start(t);o.stop(t+.15);v.stop(t+.15);}
  for(let k=0;k<6;k++)setTimeout(()=>this.laugh(k),k*190);}
 // monkey-king style short "hei!" (synthesized)
 monkeyHei(){if(!this.ctx||!this.active||this.volume===0)return;const t=this.ctx.currentTime;if(t-(this.lastHei||0)<.16)return;this.lastHei=t;const o=this.ctx.createOscillator(),g=this.ctx.createGain(),f=this.ctx.createBiquadFilter();o.type='sawtooth';const b=880+Math.random()*160;o.frequency.setValueAtTime(b*1.3,t);o.frequency.exponentialRampToValueAtTime(b*.7,t+.12);f.type='bandpass';f.frequency.value=1600;f.Q.value=1.2;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.05,t+.008);g.gain.exponentialRampToValueAtTime(.0001,t+.14);o.connect(f);f.connect(g);g.connect(this.bus);o.start(t);o.stop(t+.16);}
 meme(name,gain=.6,force=false){if(!this.ctx||!this.active||this.volume===0)return;if(!force&&!memeThrottle(this.ctx))return;playMeme(this.ctx,this.bus,name,gain);}
 // 原创合成的“鸡你太美”式律动：四拍贝斯+拍手+上扬人声音色（非原曲录音）
 jiBeat(){if(!this.ctx||!this.active||this.volume===0)return;const t0=this.ctx.currentTime;if(t0-(this.lastJi||0)<2.2)return;this.lastJi=t0;const notes=[392,349,330,294,330,392];
  notes.forEach((f,i)=>{const t=t0+i*.17,o=this.ctx.createOscillator(),g=this.ctx.createGain(),fl=this.ctx.createBiquadFilter();o.type='square';o.frequency.setValueAtTime(f*1.02,t);o.frequency.exponentialRampToValueAtTime(f*(i===5?1.5:1),t+.15);fl.type='lowpass';fl.frequency.value=1800;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.045,t+.01);g.gain.exponentialRampToValueAtTime(.0001,t+.16);o.connect(fl);fl.connect(g);g.connect(this.bus);o.start(t);o.stop(t+.18);});
  for(let k=0;k<4;k++){this.toneAt(t0+k*.25,70,.18,.09,'sine',.5);this.noiseAt(t0+k*.25+.125,.06,.05);}}
 toneAt(t,freq,d,gain,type,bend){const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,t);o.frequency.exponentialRampToValueAtTime(freq*bend,t+d);g.gain.setValueAtTime(gain,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(this.bus);o.start(t);o.stop(t+d+.02);}
 noiseAt(t,d,gain){const b=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*d),this.ctx.sampleRate),c=b.getChannelData(0);for(let i=0;i<c.length;i++)c[i]=(Math.random()*2-1)*(1-i/c.length);const s=this.ctx.createBufferSource(),g=this.ctx.createGain();s.buffer=b;g.gain.value=gain;s.connect(g);g.connect(this.bus);s.start(t);}
 bubble(){this.tone(600+Math.random()*300,.12,.04,'sine',2.2);}
 jump(){this.tone(260,.20,.05,'sine',2.4);}
 wind(){this.tone(120,.8,.035,'triangle',3);}
 gong(){this.tone(150,.8,.04);this.tone(227,.5,.025);}
}




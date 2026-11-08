// 梗音效：来自 nai_缝合版_naiwa_最终版.zip，按需解码播放
const N=['banana-cry-1','banana-cry-2','daodun','daodun-2','feidudu','feidudu-echo','gugugaga-1','gugugaga-2','nl-dupu','nl-gagadilashui','nl-gajiaosai','nl-hola-gabadie','oiia-1','oiia-2','shanshenbu','tang-mama'];
const URLS={
'banana-cry-1':new URL('../../public/assets/audio/hi3d-meme-banana-cry-1.mp3',import.meta.url).href,'banana-cry-2':new URL('../../public/assets/audio/hi3d-meme-banana-cry-2.mp3',import.meta.url).href,
'daodun':new URL('../../public/assets/audio/hi3d-meme-daodun.mp3',import.meta.url).href,'daodun-2':new URL('../../public/assets/audio/hi3d-meme-daodun-2.mp3',import.meta.url).href,
'feidudu':new URL('../../public/assets/audio/hi3d-meme-feidudu.mp3',import.meta.url).href,'feidudu-echo':new URL('../../public/assets/audio/hi3d-meme-feidudu-echo.mp3',import.meta.url).href,
'gugugaga-1':new URL('../../public/assets/audio/hi3d-meme-gugugaga-1.mp3',import.meta.url).href,'gugugaga-2':new URL('../../public/assets/audio/hi3d-meme-gugugaga-2.mp3',import.meta.url).href,
'nl-dupu':new URL('../../public/assets/audio/hi3d-meme-nl-dupu.mp3',import.meta.url).href,'nl-gagadilashui':new URL('../../public/assets/audio/hi3d-meme-nl-gagadilashui.mp3',import.meta.url).href,
'nl-gajiaosai':new URL('../../public/assets/audio/hi3d-meme-nl-gajiaosai.mp3',import.meta.url).href,'nl-hola-gabadie':new URL('../../public/assets/audio/hi3d-meme-nl-hola-gabadie.mp3',import.meta.url).href,
'oiia-1':new URL('../../public/assets/audio/hi3d-meme-oiia-1.mp3',import.meta.url).href,'oiia-2':new URL('../../public/assets/audio/hi3d-meme-oiia-2.mp3',import.meta.url).href,
'tang-mama':new URL('../../public/assets/audio/hi3d-meme-tang-mama.mp3',import.meta.url).href,'shanshenbu':new URL('../../public/assets/audio/hi3d-meme-shanshenbu.mp3',import.meta.url).href};
const buf={},loading={};let last=0;
export function memeNames(){return N;}
export function playMeme(ctx,out,name,gain=.6){if(!ctx||!URLS[name])return;const go=b=>{if(!b)return;const s=ctx.createBufferSource(),g=ctx.createGain();g.gain.value=gain;s.buffer=b;s.connect(g);g.connect(out);s.start();s.onended=()=>{s.disconnect();g.disconnect();};};
 if(buf[name])return go(buf[name]);loading[name]??=fetch(URLS[name]).then(r=>r.arrayBuffer()).then(a=>ctx.decodeAudioData(a)).then(b=>buf[name]=b).catch(()=>null);loading[name].then(go);}
export function memeThrottle(ctx,gap=.9){if(!ctx||ctx.currentTime-last<gap)return false;last=ctx.currentTime;return true;}

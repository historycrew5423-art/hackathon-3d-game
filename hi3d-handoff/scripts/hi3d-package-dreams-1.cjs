const fs = require('node:fs');
const path = require('node:path');
const workspace = fs.realpathSync(path.resolve(__dirname, '..'));
const root = fs.realpathSync(path.join(workspace, 'exports/frog-dreams'));
if (!root.startsWith(workspace + path.sep)) throw new Error('Project outside workspace');
const read = p => fs.readFileSync(path.join(root,p),'utf8');
function safeWrite(p, content) {
  const dest = path.join(root,p);
  if (!fs.realpathSync(path.dirname(dest)).startsWith(workspace + path.sep)) throw new Error('Invalid parent');
  if(fs.existsSync(dest)) {
    const stat = fs.lstatSync(dest);
    if(stat.isSymbolicLink() || stat.nlink > 1) throw new Error('Linked output: '+p);
  }
  fs.writeFileSync(dest,content,'utf8');
}
const urls = [...read('src/game/hi3d-Assets.js').matchAll(/(\w+):new URL\('([^']+)'/g)];
const labels = {bigfrog:'旧游戏大奶蛙，主角及72分身',whale:'鲸鱼女仆',kangaroo:'黄色袋鼠',duck:'篮球背包鸭',opossum:'负鼠',penguin:'侦探企鹅',umbrella:'雨伞特工企鹅',monster:'西游四种怪物共用占位，待用户专用模型',mill:'可动风车原型'};
const assets = urls.map(([,id,url])=>{
  const abs = path.resolve(root,'src/game',url);
  if(!fs.realpathSync(abs).startsWith(root+path.sep)) throw new Error('External model');
  const data=fs.readFileSync(abs);
  if(data.toString('ascii',0,4)!=='glTF') throw new Error('Invalid GLB');
  const json=JSON.parse(data.toString('utf8',20,20+data.readUInt32LE(12)));
  return {id,label:labels[id]||id,file:path.relative(root,abs).split(path.sep).join('/'),bytes:data.length,placeholder:['monster','mill'].includes(id),nodes:(json.nodes||[]).map(n=>n.name).filter(Boolean),animationClips:(json.animations||[]).map(a=>a.name||'unnamed')};
});
const media=['public/assets/audio/hi3d-naiwa-baoxiao.mp3','public/assets/audio/hi3d-naiwa-pet-laugh.wav','public/assets/img/hi3d-naiwa-belly-laugh.gif'].map(file=>({file,bytes:fs.statSync(path.join(root,file)).size}));
const verification=JSON.parse(read('reports/hi3d-verification.json'));
const delivery=JSON.parse(read('reports/hi3d-delivery-check.json'));
if(verification.errors.length || delivery.errors.length || delivery.status!=='passed') throw new Error('Acceptance reports not passed');
safeWrite('hi3d-assets-manifest.json',JSON.stringify({version:2,stage:'可玩原型；西游特化小怪待替换，风车为可动原型',entry:'hi3d-index.html',units:'meter',up:'Y',forward:'-Z',frogCount:72,nearClones:12,instancedClones:60,fragments:24,roadLength:40,assets,media,sourceScenes:['classroom','butterfly','cyber','runner'].map(n=>'assets_src/snapshots/hi3d-dream-'+n+'.glb'),editableScene:'assets_src/blender/hi3d-three-dreams.blend'},null,2)+'\n');
const summary = `# 交付与验收记录\n\n当前交付为可玩的三重梦境原型，入口为 hi3d-index.html。通过 Hi3D 链接旁的“浏览器预览”运行。\n\n- 主角及分身仅使用旧游戏大奶蛙；保留捧腹大笑姿态、动图、飘字和两段笑声。\n- 三梦玩法各30秒，过场另计；庄周攻塔、赛博西游和追风车循环可玩。\n- 最新资源清单列出实际加载的 ${assets.length} 个模型和 ${media.length} 个媒体文件；未加载的小奶蛙不进入交付包。\n- Edge/WebGL2、本地HTTP、禁用缓存并阻止远程资源：${verification.checks.length}项主验收通过；重开、存档和生产构建补充${delivery.checks.length}项通过。按需技能和音频已触发加载。\n- 30秒场景使用固定时间步加速验收，键盘和触屏为真实事件；不代表多型号手机或帧率性能保证。\n- 四个场景的Blender工程已重开检查；GLB和Blender为静态场景快照，实时雨幕、粒子和动作在JS中。\n\n待后续素材：四种西游特化怪物模型；风车当前为可动原型。高雅舞蹈为原创程序动作，猴式声部为合成音，并非指定网络视频或影视原声复刻。\n\n工程包保留src、vendor许可、public资源、dist构建、Blender源文件、场景GLB、最终截图及验收记录。原始外部游戏和高模未覆盖。\n`;
safeWrite('reports/hi3d-delivery-summary.md',summary);
const exclusions = new Set(['public/assets/models/hi3d-frog-game.glb','public/assets/models/hi3d-frog-crowd.glb','public/assets/models/hi3d-frog-proxy.glb','assets_src/blender/hi3d-frog-game.blend','vendor/GLTFLoader.js','vendor/SkeletonUtils.js','vendor/BufferGeometryUtils.js']);
const reports = new Set(['hi3d-verification.json','hi3d-delivery-check.json','hi3d-blender-check.json','hi3d-source-reuse.json','hi3d-character-processing.json','hi3d-delivery-summary.md']);
function walk(dir) {
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>{
    const abs=path.join(dir,e.name);
    if(e.isSymbolicLink() || fs.realpathSync(abs)!==abs) throw new Error('Linked package input: '+abs);
    return e.isDirectory()?walk(abs):[path.relative(root,abs).split(path.sep).join('/')];
  });
}
const files=walk(root).filter(p=>!exclusions.has(p) && (!p.startsWith('reports/') || reports.has(path.basename(p)) || /^reports\/hi3d-final-[^/]+\.png$/.test(p)));
for(const required of ['hi3d-index.html','hi3d-style.css','src/hi3d-main.js','vendor/three.module.js','vendor/three.core.js','vendor/loaders/GLTFLoader.js','vendor/utils/SkeletonUtils.js','vendor/utils/BufferGeometryUtils.js','vendor/exporters/GLTFExporter.js','vendor/LICENSE',...assets.map(a=>a.file),...media.map(a=>a.file)]) if(!files.includes(required)) throw new Error('Package missing '+required);
const ledger=path.join(workspace,'.hi3d','dreams-package-list.json');
fs.writeFileSync(ledger,JSON.stringify({root:'exports/frog-dreams',target:'exports/hi3d-frog-dreams-project.zip',files},null,2));
console.log(JSON.stringify({activeModels:assets.length,media:media.length,packageFiles:files.length,uncompressedBytes:files.reduce((sum,p)=>sum+fs.statSync(path.join(root,p)).size,0),testChecks:verification.checks.length+delivery.checks.length}));

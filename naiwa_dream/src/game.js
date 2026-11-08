// 《奶蛙梦游记》：语文课讲《庄周梦蝶》，奶蛙睡着了，掉进梦里。三种梦每 30 秒换一种，越做越深：
//   庄周梦蝶（塔防：高雅企鹅想吵醒奶蛙，捧腹大笑放蝴蝶打爆高雅塔，塔倒了企鹅就跳舞）
//   → 赛博西游·三打白骨精（七十二变，分身一起喷“嘿”，护住唐僧牛来；小怪笑到灵魂出窍，最后笑到地震，掉进下一层）
//   → 堂吉诃奶蛙大战风车（跑酷：长了腿的风车巨人在前面跑，奶蛙在后面追，喷“呼”吹龙卷风）→ 回到庄周梦蝶（更深一层）……
// 底子是《罗密欧与朱丽叶·奶蛙缝合版》：喷字打怪、3D 梗小怪、捧腹大笑、肥嘟嘟、闪身步、三种视角、声音分层、梗的节奏、横竖屏。
// 每个梦的场景在 world.js，梦里的特殊玩法（塔、蝴蝶、唐僧、白骨精、分身、风车、障碍、过场）在 dreamplay.js。
// 网址参数：?auto=1 自动跳过对话、自动选第一张卡（给测试机器人用）；?god=1 不会死；?debug=1 显示帧数；
//           ?len=秒数 每个梦的长度（默认 30）；?dream=0/1/2 从哪个梦开始；?layers=数字 做几层梦就下课（默认 9）；
//           ?cam=1 / ?cam=2 第三人称 / 第一人称开局；?norevive=1 关掉捧腹大笑复活；?intro=0 跳过开场的课堂
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';
import { Input } from './input.js?v=20261108a';
import { byId, drawCards, baseStats } from './skills.js?v=20261108a';
import { PEOPLE, DREAMS, DREAM_LINES, CLASS_BOARD, SHIFT_TEXT, LINES, JOKES, RANKS, WAKE_LINES } from './dialogue.js?v=20261108a';
import { loadMinions, frameIndex, danceIndex, lungeOffset, SWING_TIME, WALK_RATE, WALK_FRAMES } from './minions.js?v=20261108a';
import { HAHA_GLYPHS, HAHA_COLORS, GLYPH_HEI, GLYPH_HU, hahaMaterial, floatText, updateFloats, loadLaugh, playHa, playHaChorus, playLaugh, stopLaugh, makeLaughUI, loadBigFrog, bigFrogPose, pick, setLaughOut, textTexture } from './naiwa.js?v=20261108a';
import { initMixer, loadClips, heroOut, sfxOut, duck, heroSay, heroBusy, holdHero, mobSay, hasClip, voice, whoosh, pop, boing, boom, tone, speak, stopSpeak } from './sfx.js?v=20261108a';
import { Pacing, PACE } from './pacing.js?v=20261108a';
import { makeWorld, canvasTex, ROAD_HALF } from './world.js?v=20261108a';
import { initMusic, playMusic, motif, duckMusic } from './music.js?v=20261108a';
import { makeDreams } from './dreamplay.js?v=20261108a';

const VERSION = 'v1.0';
const Q = new URLSearchParams(location.search);
const AUTO = Q.has('auto'), GOD = Q.has('god'), DEBUG = Q.has('debug');
const DREAM_LEN = +Q.get('len') || 30;                      // 每个梦多少秒
const START_DREAM = Math.max(0, Math.min(2, +Q.get('dream') || 0));
const WAKE_LAYERS = Math.max(1, +Q.get('layers') || 9);     // 做到第几层梦下课铃响（9 层 = 三种梦各三遍，约 5 分钟）
const MAX_E = 700, MAX_B = 1600, MAX_O = 1600;
const CAM = new THREE.Vector3(0, 11, 9.5);          // 俯视：镜头在主角上方 11 米、往镜头那侧 9.5 米（往下约 49 度）
const PITCH = Math.atan2(CAM.y, CAM.z);
let camMode = Math.min(2, Math.max(0, Math.round(+Q.get('cam') || 0))), camYaw = Math.PI, camPitch = 0;
const CAM_NAMES = ['俯视', '第三人称', '第一人称'];
const FOG_K = [1, 1.05, 0.95];   // 每种视角的雾远近（乘在每个梦自己的雾上）
const CAMP = new THREE.Vector3(0, 18, 12.5), CAMP_D = CAMP.length(), PORTRAIT_HALF_W = 6;
let portrait = false;

// ---------- 画面：横屏固定 16:9；竖屏铺满整个屏幕 ----------
const stage = document.getElementById('stage');
const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe9e1cc);
scene.fog = new THREE.Fog(0xe9e1cc, 18, 38);
const camera = new THREE.PerspectiveCamera(45, 16 / 9, 0.5, 140);
let pixelCap = 1.75;
function layout() {
  portrait = innerHeight > innerWidth;
  document.body.classList.toggle('portrait', portrait);
  const w = portrait ? innerWidth : Math.min(innerWidth, innerHeight * 16 / 9), h = portrait ? innerHeight : w * 9 / 16;
  stage.style.width = w + 'px'; stage.style.height = h + 'px';
  stage.style.setProperty('--u', (Math.min(w, h) / 100) + 'px');
  renderer.setPixelRatio(Math.min(devicePixelRatio, pixelCap));
  renderer.setSize(w, h, false);
  camera.aspect = w / h; camera.updateProjectionMatrix();
}
addEventListener('resize', layout);
layout();

// ---------- 世界（三个梦的地面、摆设、灯） ----------
const world = makeWorld(scene, PITCH);
const heroLight = new THREE.PointLight(0xffb85c, 14, 9, 1.4); scene.add(heroLight);
const glowTex = (rgb) => canvasTex(64, (g, s) => {
  const r = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  r.addColorStop(0, `rgba(${rgb},1)`); r.addColorStop(0.35, `rgba(${rgb},.45)`); r.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = r; g.fillRect(0, 0, s, s);
});
const additive = (map, opacity = 1) => new THREE.MeshBasicMaterial({ map, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending });
const pushOut = (p, r) => world.pushOut(p, r);

// ---------- 小怪 ----------
// ai：chase 追奶蛙；desk 走向课桌上睡觉的奶蛙（庄周梦蝶）；tang 去抓唐僧（赛博西游）；cross 横穿马路（堂吉诃奶蛙的羊）
// dream：在哪个梦里出现。西游那四种用的是西游特化版模型（11-08 换上，模型和动作见 minions.js 的 defs）
const TYPES = [
  { key: 'gentle', dream: 0, r: 0.42, hp: 2, speed: 2.3, dmg: 5, xp: 1, minion: 'elegantA', mh: 1.15, ai: 'desk' },
  { key: 'agent', dream: 0, r: 0.46, hp: 3, speed: 2.0, dmg: 6, xp: 2, minion: 'elegantB', mh: 1.25, ai: 'desk' },
  { key: 'daodun', dream: 1, r: 0.5, hp: 3, speed: 2.1, dmg: 7, xp: 1, minion: 'dog', mh: 1.3, ai: 'chase' },
  { key: 'gugugaga', dream: 1, r: 0.36, hp: 1, speed: 3.6, dmg: 4, xp: 1, minion: 'penguin', mh: 1.0, ai: 'chase' },
  { key: 'bibilabu', dream: 1, r: 0.42, hp: 2, speed: 2.7, dmg: 5, xp: 1, minion: 'banana', mh: 1.15, ai: 'tang' },
  { key: 'bababoyi', dream: 1, r: 0.5, hp: 4, speed: 1.9, dmg: 6, xp: 2, minion: 'oiia', mh: 1.05, ai: 'tang' },
  { key: 'sheep', dream: 2, r: 0.5, hp: 1, speed: 3.6, dmg: 4, xp: 1, minion: 'sheep', mh: 0.95, ai: 'cross' },
  { key: 'ram', dream: 2, r: 0.62, hp: 4, speed: 2.8, dmg: 6, xp: 2, minion: 'sheep', mh: 1.3, ai: 'cross', tint: [0.72, 0.68, 0.64] },
];
const T = Object.fromEntries(TYPES.map((t, i) => [t.key, i]));
// 每种小怪的梗：第一次登场时的字幕、被打倒时的字幕（和它的叫声一起出）、头顶的短字、字幕颜色
const MEME = {
  gentle: { intro: '高雅企鹅·侦探：Shhh! 请保持高雅', die: ['Oh dear!', '一点也不高雅……', '我的烟斗！'], pop: 'Oh dear', color: '#e8d7b0' },
  agent: { intro: '高雅企鹅·特工：How elegant.', die: ['Exquisite…', '伞……我的伞……', '优雅地倒下'], pop: '优雅', color: '#c9d4ff' },
  daodun: { intro: '巡山小妖·我的刀盾！', die: ['我的刀盾！！', 'What the dog doing?!', '刀……盾……'], pop: '刀盾！', color: '#ffd28a' },
  gugugaga: { intro: '天兵·咕咕嘎嘎？', die: ['咕咕嘎嘎！', '嘎——！', '咕咕……嘎'], pop: '嘎！', color: '#9fe8ff' },
  bibilabu: { intro: '香蕉精·哔哔拉布：呜哇哇（哭）', die: ['呜哇——哔哔拉布', '呜呜呜……', '哇啊啊啊'], pop: '呜哇', color: '#fff36b' },
  bababoyi: { intro: '猫八戒·巴巴博一', die: ['巴巴博一～', '博一……', '巴巴！'], pop: '博一', color: '#ffb8ec' },
  sheep: { intro: '敌军！（其实是羊）', die: ['咩——！', '咩～（飞走了）', '我是羊！'], pop: '咩！', color: '#ffffff' },
  ram: { intro: '敌军大将！（其实是公羊）', die: ['咩！！！', '大将也是羊', '咩……'], pop: '咩！', color: '#e8e0d8' },
};
function billboardGeo(w, h, centerY) { const g = new THREE.PlaneGeometry(w, h); g.translate(0, centerY ? 0 : h / 2, 0); return g; }
function flatInst(geo, mat, max) {
  const m = new THREE.InstancedMesh(geo, mat, max); m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); m.count = 0; m.frustumCulled = false; scene.add(m); return m;
}
const shadowTex = canvasTex(64, (g, s) => { const r = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); r.addColorStop(0, 'rgba(0,0,0,.6)'); r.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = r; g.fillRect(0, 0, s, s); });
const shadowMesh = flatInst(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }), MAX_E + 8);
let minionMeshes = null;
const minionsReady = loadMinions(scene, MAX_E).then((m) => { minionMeshes = m; }).catch((e) => console.warn('小怪模型加载失败', e));
const ONE3 = [1, 1, 1];
let viewYaw = Math.PI;
const panOf = (dx, dz) => Math.max(-1, Math.min(1, (-dx * Math.cos(viewYaw) + dz * Math.sin(viewYaw)) / 9));
const pace = new Pacing();
let heatNow = 0;
function swingStart(i, t, d) {
  E.swing[i] = SWING_TIME; E.scd[i] = 1.05 + Math.random() * 0.5;
  window.__swings = (window.__swings || 0) + 1;
  if (muted || !actx || d > 3 || Math.random() > 0.35 || heroBusy() || !pace.mobOk(time, t.key, false)) return;
  if (mobSay(t.key, 'attack', { pan: panOf(E.x[i] - player.x, E.z[i] - player.z), dist: d })) pace.mobPlayed(time, t.key, heatNow, t.key + ' 打人');
}
// 喷出去的字（哈、嘿、呼、各种特殊字），每种字一个实例网格
const hahaMeshes = HAHA_GLYPHS.map((g, k) => flatInst(billboardGeo(1, 1, true), hahaMaterial(k), MAX_B + 8));
// 变身大奶蛙捧腹大笑
const laughUI = makeLaughUI(stage);
let bigFrog = null;
const bigReady = loadBigFrog().then((b) => { bigFrog = b; scene.add(b.group); }).catch((e) => console.warn('大奶蛙模型加载失败', e));
// 笑点（经验）：一个个小小的“😂”光团
const orbMesh = flatInst(billboardGeo(1, 1, true), additive(glowTex('255,214,90')), MAX_O);
// 高雅塔射来的音符（♪），碰到扣血
const noteTex = textTexture('♪', { color: '#ffe9a8', stroke: '#6a3a10', px: 96, glow: 'rgba(255,190,90,.6)' });
const ebMesh = flatInst(billboardGeo(1, 1, true), new THREE.MeshBasicMaterial({ map: noteTex.tex, transparent: true, depthWrite: false }), 240);
const ringMat = additive(canvasTex(128, (g, s) => { g.strokeStyle = 'rgba(255,214,140,1)'; g.lineWidth = 7; g.shadowColor = '#ffb85c'; g.shadowBlur = 14; g.beginPath(); g.arc(s / 2, s / 2, s / 2 - 12, 0, Math.PI * 2); g.stroke(); }));
const rings = [];
function ring(x, z, r, life = 0.45, color) {
  if (rings.length > 40) { const o = rings.shift(); scene.remove(o.m); o.m.material.dispose(); }
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), ringMat.clone());
  if (color) m.material.color.set(color);
  m.position.set(x, 0.1, z); scene.add(m); rings.push({ m, r, t: 0, life });
}
// 闪身步的残影
const ghosts = [];
function makeGhosts() {
  const mat = new THREE.MeshBasicMaterial({ color: 0x7ef0ff, transparent: true, opacity: 0.45, depthWrite: false, blending: THREE.AdditiveBlending });
  const inner = hero.userData.inner; hero.userData.inner = null;
  for (let k = 0; k < 4; k++) {
    const g = cloneSkinned(hero);
    g.userData.inner = g.children[0];
    g.traverse((o) => { if (o.isMesh) { o.material = mat.clone(); o.frustumCulled = false; } });
    g.visible = false; scene.add(g); ghosts.push({ g, t: 0 });
  }
  hero.userData.inner = inner;
  for (const gh of ghosts) gh.g.visible = true;
  try { renderer.compile(scene, camera); } catch { /* 第一次画的时候再编 */ }
  for (const gh of ghosts) gh.g.visible = false;
}
function dropGhost() {
  if (!hero || !ghosts.length || camMode === 2) return;
  const gh = ghosts.reduce((a, b) => (a.t <= b.t ? a : b));
  gh.g.position.copy(hero.position); gh.g.rotation.copy(hero.rotation);
  const a = hero.userData.inner, b = gh.g.userData.inner;
  if (a && b) { b.rotation.copy(a.rotation); b.scale.copy(a.scale); b.position.copy(a.position); }
  gh.t = 0.36; gh.g.visible = true;
}
const heroGlow = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 4.2).rotateX(-Math.PI / 2), additive(glowTex('255,184,92'), 0.32));
heroGlow.position.y = 0.03; scene.add(heroGlow);

// ---------- 角色模型 ----------
const loader = new GLTFLoader();
async function loadModel(name, height) {
  const g = await loader.loadAsync(`assets/models/${name}.glb`);
  const obj = g.scene;
  obj.traverse((o) => { if (o.isMesh && !o.geometry.attributes.normal) o.geometry.computeVertexNormals(); });
  const box = new THREE.Box3().setFromObject(obj), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
  const s = height / size.y;
  obj.scale.setScalar(s); obj.position.set(-c.x * s, -box.min.y * s, -c.z * s);
  const wrap = new THREE.Group(), inner = new THREE.Group();
  inner.add(obj); wrap.add(inner); wrap.userData.inner = inner;
  return wrap;
}
let hero = null;
const models = {};   // 白骨精的三种伪装、良民、桑丘用的模型（婚纱新娘、兔子贵族、牛头人）
// 复制一个角色模型。userData.inner 是里面那层组，three.js 复制时会把 userData 转成 JSON，所以先拿掉、复制完再接上
function cloneModel(m) {
  const inner = m.userData.inner; m.userData.inner = null;
  const c = m.clone(); m.userData.inner = inner; c.userData.inner = c.children[0];
  return c;
}

// ---------- 数据 ----------
const E = { n: 0, type: new Uint8Array(MAX_E), x: new Float32Array(MAX_E), z: new Float32Array(MAX_E), hp: new Float32Array(MAX_E),
  flash: new Float32Array(MAX_E), phase: new Float32Array(MAX_E), speed: new Float32Array(MAX_E), id: new Int32Array(MAX_E),
  ocd: new Float32Array(MAX_E), atk: new Float32Array(MAX_E), swing: new Float32Array(MAX_E), scd: new Float32Array(MAX_E),
  stun: new Float32Array(MAX_E), slow: new Float32Array(MAX_E), puff: new Float32Array(MAX_E),
  dance: new Float32Array(MAX_E),   // 高雅塔倒了：跳舞的剩余时间（跳完变成蝴蝶飞走）
  lol: new Float32Array(MAX_E), lolT: new Float32Array(MAX_E),   // 传染笑：攒的“笑意”，满了开始笑；笑了多久（笑够了灵魂出窍）
  vx: new Float32Array(MAX_E) };   // 横穿马路的羊：往哪边走
const E_ARRAYS = [E.type, E.x, E.z, E.hp, E.flash, E.phase, E.speed, E.id, E.ocd, E.atk, E.swing, E.scd, E.stun, E.slow, E.puff, E.dance, E.lol, E.lolT, E.vx];
const MAX_EB = 240;
const EB = { n: 0, x: new Float32Array(MAX_EB), z: new Float32Array(MAX_EB), dx: new Float32Array(MAX_EB), dz: new Float32Array(MAX_EB), life: new Float32Array(MAX_EB), dmg: new Float32Array(MAX_EB) };
const B = { n: 0, x: new Float32Array(MAX_B), z: new Float32Array(MAX_B), dx: new Float32Array(MAX_B), dz: new Float32Array(MAX_B),
  life: new Float32Array(MAX_B), dmg: new Float32Array(MAX_B), pierce: new Int16Array(MAX_B), bounce: new Int16Array(MAX_B),
  size: new Float32Array(MAX_B), last: new Int32Array(MAX_B), glyph: new Uint8Array(MAX_B), y: new Float32Array(MAX_B),
  src: new Uint8Array(MAX_B) };   // src：0 = 奶蛙自己喷的，1 = 七十二变的分身喷的（分身喷到良民不算）
const B_ARRAYS = [B.x, B.z, B.dx, B.dz, B.life, B.dmg, B.pierce, B.bounce, B.size, B.last, B.glyph, B.y, B.src];
const O = { n: 0, x: new Float32Array(MAX_O), z: new Float32Array(MAX_O), v: new Float32Array(MAX_O), t: new Float32Array(MAX_O), y: new Float32Array(MAX_O) };
let nextId = 1;

// y、vy：跑酷时跳起来的高度和速度
const player = { x: 0, z: 0, y: 0, vy: 0, r: 0.45, hp: 100, hurtCd: 0, aimX: 0, aimZ: 1, moving: 0, kx: 0, kz: 0, mvx: 0, mvz: 1 };
const DODGE_EVERY = 6, DODGE_DIST = 2.4, DODGE_TIME = 0.2;
const dodge = { t: 0, vx: 0, vz: 0, side: 1, cd: 0, walk: 0, ghostT: 0, want: false, n: 0 };
const FAT_TIME = 10, FAT_R = 16;
const FDD_SAY = 'Nee duh dahn-zuh, jen shur, fay doo doo duh!';
let spitT = 0, fatBannerT = 0, fats = 0, fatHintSaid = false;
let volley = 0;
let combo = 0, comboT = 0, bestCombo = 0;
const seenKinds = new Set(), introQueue = [];
let introT = 0;
// 变身大奶蛙：每个梦里冷却短一点（12 秒），一个梦里能笑两三次
const LAUGH_TIME = 3.4, LAUGH_CD = 12;
const DMG_TAKEN = 0.6, REVIVE = !Q.has('norevive');
let revives = 0;
// autoLaughAt：每种梦第一次进去时，第几秒自动捧腹大笑一次（演示这个梦的笑法：蝴蝶 / 七十二变 / 龙卷风），-1 表示不自动
let laughT = 0, laughCd = 5, pulseT = 0, pulsesLeft = 0, pulseK = 0, shake = 0, laughHintAt = -1, autoLaughAt = -1;
// 跑酷（堂吉诃奶蛙）。runV：这一帧往前跑的速度（喷出去的字要带上它）
const RUN_SPEED = 8.6, LAT_SPEED = 9.5, JUMP_V = 9, GRAV = 26;   // 最高跳 1.56 米，在空中 0.7 秒（跑出 6 米）
let jumpWant = false, boostT = 0, boostCd = 0, stumbleT = 0, runV = 0;
// heroPuff：奶蛙整个鼓起来多少（打喷嚏前憋气）；kanga：肥嘟嘟的 3D 袋鼠（Hi3D 模型），kangaT 是它还要蹦多久
let heroPuff = 1, kanga = null, kangaT = 0, kangaA = 0;
const KANGA_TIME = 3.6;
let stats = baseStats(), levels = {}, level = 1, xp = 0, kills = 0, pendingLevels = 0;
let time = 0, dreamTime = 0, fireCd = 0, drumCd = 0, slowmo = 0, noteIdx = 0;
// dream：现在是哪个梦；layer：第几层梦（越深越难）；score：笑点
let dream = START_DREAM, layer = 1, score = 0, dreamScore = 0, lineIdx = 0, visits = [0, 0, 0];
let shiftT = 0, shiftKind = '', shiftNext = 0, shiftSwapped = false;
// 冷场：太久没打出笑声，世界慢慢变灰、变慢，怪越来越“尬”
let lastJoyAt = 0, awk = 0, awkSaid = -99, awkFilter = -1;
let phase = 'title';            // title → intro → fight ⇄ levelup → shift → fight …… → wake → over
const maxHp = () => 100 + stats.maxHpBonus;
const xpNeed = (L) => (L === 1 ? 2 : Math.round(3 * Math.pow(L, 1.35)));
const input = new Input();

function resetRun() {
  E.n = B.n = O.n = EB.n = 0;
  player.x = player.z = player.y = player.vy = 0; player.hp = 100; player.hurtCd = 0; player.aimX = 0; player.aimZ = 1; player.kx = player.kz = 0;
  stats = baseStats(); levels = {}; level = 1; xp = 0; kills = 0; pendingLevels = 0;
  time = dreamTime = 0; fireCd = drumCd = slowmo = 0; firstLevelSaid = false;
  dream = START_DREAM; layer = 1; score = dreamScore = 0; visits = [0, 0, 0];
  laughCd = 5; laughHintAt = autoLaughAt = -1; endLaugh();
  seenKinds.clear(); introQueue.length = 0; introT = 0;
  combo = comboT = bestCombo = 0; spitT = 0; fats = 0; fatHintSaid = false; volley = 0; corpses.length = 0;
  dodge.t = dodge.cd = dodge.walk = 0; dodge.n = 0; boostT = boostCd = stumbleT = 0;
  lastJoyAt = 0; awk = 0;
  pace.reset();
  if (D) D.reset();
}

// ---------- 小怪的生成（每个梦生成什么、多少，在 dreamplay.js 的 director 里决定） ----------
function spawnEnemy(type, ang, dist, cx = player.x, cz = player.z) {
  if (E.n >= MAX_E) return -1;
  const a = ang ?? Math.random() * Math.PI * 2, d = dist ?? (dreamTime < 8 ? 12.5 : 15) + Math.random() * 3;
  const ca = Math.cos(a), p = { x: cx + Math.sin(a) * d, z: cz + ca * d * (ca < 0 ? 1.1 : 0.75) };   // 生成在屏幕外
  pushOut(p, 0.6);
  return spawnAt(type, p.x, p.z);
}
function spawnAt(type, x, z) {
  if (E.n >= MAX_E) return -1;
  const t = TYPES[type], i = E.n++;
  E.type[i] = type; E.x[i] = x; E.z[i] = z; E.flash[i] = 0; E.phase[i] = Math.random() * 10; E.ocd[i] = 0; E.atk[i] = 1 + Math.random() * 2;
  E.swing[i] = 0; E.scd[i] = Math.random() * 0.8; E.stun[i] = E.slow[i] = E.puff[i] = E.dance[i] = E.lol[i] = E.lolT[i] = E.vx[i] = 0;
  E.hp[i] = t.hp * (1 + (layer - 1) * 0.12);
  E.speed[i] = t.speed * (0.85 + Math.random() * 0.3) * (1 + Math.min(0.3, (layer - 1) * 0.04)); E.id[i] = nextId++;
  // 每种梗怪第一次出现：等它走进画面再播它的招牌叫声 + 字幕（一种一种来）
  if (!seenKinds.has(t.key) && (phase === 'fight' || phase === 'levelup')) { seenKinds.add(t.key); introQueue.push(t.key); }
  return i;
}
const lowHp = () => player.hp < maxHp() * 0.35;

// ---------- 小怪被打倒：叫一声（同一时间只叫一只）、打字幕、按各自的梗飞走 ----------
const corpses = [];
// style：不填 = 按种类飞走；'soul' = 笑到灵魂出窍（瘫倒）；'fall' = 地面裂开掉下去；'blow' = 被喷嚏吹飞；'sky' = 被龙卷风卷上天
function addCorpse(t, x, z, ux, uz, style) {
  if (corpses.length >= 90) corpses.shift();
  corpses.push({ kind: t.minion, key: t.key, x, z, ux, uz, yaw: Math.atan2(uz, -ux), t: 0, mh: t.mh, tint: t.tint || ONE3, spin: Math.random() < 0.5 ? -1 : 1, style: style || '', vy: 0, y: 0 });
}
function minionDown(i, t, style) {
  const dx = E.x[i] - player.x, dz = E.z[i] - player.z, d = Math.hypot(dx, dz) || 1;
  addCorpse(t, E.x[i], E.z[i], dx / d, dz / d, style);
  if (muted || !actx || d > 14 || heroBusy()) return;
  const first = !pace.firstDeath.has(t.key);
  if (!pace.mobOk(time, t.key, first)) return;
  if (mobSay(t.key, 'death', { pan: panOf(dx, dz), dist: d, rate: t.key === 'ram' ? 0.8 : 1, priority: first ? 3 : 2 })) {
    pace.firstDeath.add(t.key); pace.mobPlayed(time, t.key, heatNow, t.key + (first ? ' 第一次被打倒' : ' 被打倒'));
    if (first) { const q = introQueue.indexOf(t.key); if (q >= 0) introQueue.splice(q, 1); }
    const M = MEME[t.key];
    mobCaption(pick(M.die), M.color);
    floatText(scene, M.pop, E.x[i], 2.3, E.z[i], { color: M.color, stroke: '#1a1020', h: 0.62, life: 0.9 });
  }
}
function bumpCombo() {
  combo++; comboT = 2.6; if (combo > bestCombo) bestCombo = combo;
  lastJoyAt = time;
  const el = $('#combo');
  el.querySelector('b').textContent = combo; show(el, combo >= 5);
  el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
  if (combo === 20 || combo === 50 || (combo >= 100 && combo % 100 === 0)) {
    heroCaption(combo >= 50 ? `哈哈哈哈哈 ×${combo}！` : `${combo} 连哈！`, combo >= 50 ? '#ff8ae0' : '#ffe14d');
    shake = Math.max(shake, 0.2);
    if (!muted) { tone(784, 0.05, 0.18, 'square'); setTimeout(() => tone(988, 0.05, 0.18, 'square'), 90); setTimeout(() => tone(1319, 0.06, 0.3, 'square'), 180); }
  }
}
// how：不填 = 被打倒；'quiet' = 换梦时安静地消失；'pop' = 被肥嘟嘟吹爆；'soul' = 笑到灵魂出窍；'dance' = 跳完舞变成蝴蝶；'fall' / 'blow' / 'sky' 见 addCorpse
function killEnemy(i, how) {
  const t = TYPES[E.type[i]];
  const live = phase === 'fight' || phase === 'levelup';
  if (how !== 'quiet' && how !== 'pop' && how !== 'dance') {
    if (live && (!how || how === 'soul' || how === 'sky')) minionDown(i, t, how);
    else addCorpse(t, E.x[i], E.z[i], 0, 0, how);
  }
  if (how !== 'quiet' && how !== 'fall' && how !== 'blow') {
    if (O.n < MAX_O) { const k = O.n++; O.x[k] = E.x[i]; O.z[k] = E.z[i]; O.v[k] = t.xp * (1 + (layer - 1) * 0.15); O.t[k] = Math.random() * 6; O.y[k] = 0; }
    D.onKill(i, t, how);
    score += 10 * t.xp; dreamScore += 10 * t.xp;
  }
  const j = --E.n;
  for (const a of E_ARRAYS) a[i] = a[j];
  kills++;
  if (how !== 'quiet' && how !== 'fall' && how !== 'blow' && live) bumpCombo();
}
function removeBullet(i) { const j = --B.n; for (const a of B_ARRAYS) a[i] = a[j]; }
function hurtEnemy(i, dmg, kx = 0, kz = 0, how) {
  E.hp[i] -= dmg; E.flash[i] = 0.09;
  if (kx || kz) { E.x[i] += kx; E.z[i] += kz; }
  lastJoyAt = time;
  if (E.hp[i] <= 0) { killEnemy(i, how); return true; }
  return false;
}
function hurtPlayer(dmg, cd = 0.6) {
  if (player.hurtCd > 0 || GOD || laughT > 0 || boostT > 0) return false;
  player.hp -= dmg * DMG_TAKEN; player.hurtCd = cd;
  if (player.hp <= 0) { player.hp = 0; die(); }
  return true;
}
function dropOrbs(x, z, n, v = 1, spread = 1.5) {
  for (let k = 0; k < n && O.n < MAX_O; k++) { const a = Math.random() * 6.28, d = Math.random() * spread, j = O.n++; O.x[j] = x + Math.cos(a) * d; O.z[j] = z + Math.sin(a) * d; O.v[j] = v; O.t[j] = Math.random() * 6; O.y[j] = 0; }
}

// ---------- 网格：只和附近的怪比，几百只也算得动。网格跟着主角走 ----------
const CELL = 1.2, GRID = 56, GOFF = GRID * CELL / 2;
const cellCount = new Int32Array(GRID * GRID), cellStart = new Int32Array(GRID * GRID + 1), cellItems = new Int32Array(MAX_E), cellOf = new Int32Array(MAX_E);
let gx0 = 0, gz0 = 0;
const gc = (v, o) => Math.max(0, Math.min(GRID - 1, Math.floor((v - o + GOFF) / CELL)));
function buildGrid() {
  gx0 = player.x; gz0 = player.z;
  cellCount.fill(0);
  for (let i = 0; i < E.n; i++) { const c = gc(E.x[i], gx0) + gc(E.z[i], gz0) * GRID; cellOf[i] = c; cellCount[c]++; }
  cellStart[0] = 0;
  for (let c = 0; c < GRID * GRID; c++) cellStart[c + 1] = cellStart[c] + cellCount[c];
  cellCount.fill(0);
  for (let i = 0; i < E.n; i++) { const c = cellOf[i]; cellItems[cellStart[c] + cellCount[c]++] = i; }
}
function forNear(x, z, rad, fn) {
  const n = Math.ceil(rad / CELL), cx = gc(x, gx0), cz = gc(z, gz0);
  for (let zz = Math.max(0, cz - n); zz <= Math.min(GRID - 1, cz + n); zz++)
    for (let xx = Math.max(0, cx - n); xx <= Math.min(GRID - 1, cx + n); xx++) {
      const c = xx + zz * GRID;
      for (let s = cellStart[c], e = s + cellCount[c]; s < e; s++) { const j = cellItems[s]; if (j < E.n && fn(j) === false) return; }
    }
}
function nearestEnemy(x, z, range, skipId = -1) {
  let best = -1, bd = range * range;
  for (let i = 0; i < E.n; i++) {
    if (E.id[i] === skipId || E.dance[i] > 0 || E.lolT[i] > 0) continue;
    const dx = E.x[i] - x, dz = E.z[i] - z, d2 = dx * dx + dz * dz;
    if (d2 < bd) { bd = d2; best = i; }
  }
  return best;
}

// ---------- 鼠标瞄准 ----------
const ray = new THREE.Raycaster(), groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hitV = new THREE.Vector3(), ndc = new THREE.Vector2();
function mouseAim() {
  const r = canvas.getBoundingClientRect();
  ndc.set((input.mouse.x - r.left) / r.width * 2 - 1, -((input.mouse.y - r.top) / r.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  if (!ray.ray.intersectPlane(groundPlane, hitV)) return null;
  const dx = hitV.x - player.x, dz = hitV.z - player.z, d = Math.hypot(dx, dz);
  return d > 0.3 ? { x: dx / d, z: dz / d } : null;
}

// ---------- 声音 ----------
let actx = null;
const MELODY = [0, 4, 7, 9, 7, 4, 2, 4, 0, 4, 7, 12, 9, 7, 4, 2];
function initAudio() {
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)(); actx.resume();
    initMixer(actx); setLaughOut(heroOut(), duck); clipsReady = loadClips() || clipsReady; loadLaugh(actx); initMusic(actx, sfxOut());
  } catch { actx = null; }
}
let muted = Q.has('mute'), clipsReady = Promise.resolve();
function pluck(semi, vol = 0.05, dur = 0.35, type = 'triangle') { if (!actx || muted) return; tone(392 * Math.pow(2, semi / 12), vol, dur, type); }
// 别的角色说话、梗音效（静音时不放）。返回放了多久
function say(name, opts) { return !muted && actx ? voice(name, opts) : 0; }

// ---------- 界面 ----------
const ui = document.createElement('div'); ui.id = 'ui'; stage.appendChild(ui);
ui.innerHTML = `
<div id="vignette"></div>
<div id="bars" class="hide"><div class="hpbar"><i></i></div><div class="xpbar"><i></i></div><span class="lv">1 级</span></div>
<div id="actinfo" class="hide"><div class="wheel">${DREAMS.map((d, k) => `<i data-d="${k}">${d.icon} ${d.name.split(' ')[0]}</i>`).join('')}</div><b>第 1 层梦境</b><span></span><em class="goal"></em></div>
<div id="boss" class="hide"><b></b><div class="bossbar"><i></i></div></div>
<div id="acttitle" class="hide"><small></small><b></b><p></p></div>
<div id="calm" class="hide"><b></b><div class="bossbar"><i></i></div></div>
<div id="bark" class="hide"><img alt=""><div><b></b><span></span></div></div>
<div id="cards" class="hide" data-ui><h2></h2><div class="row"></div></div>
<div id="class" class="hide" data-ui><div class="board"><p></p><p></p><p></p><p></p></div><div class="desk"><span class="zzz">Z<sup>z</sup><sub>z</sub></span><span class="bubble"></span></div><button class="skip">跳过 ›</button></div>
<div id="title" data-ui><h1>奶蛙梦游记</h1><p class="sub">语文课上睡着了：一梦三十秒，一笑一层天</p><p class="go">加载中……</p><p class="tip">庄周梦蝶（塔防）→ 赛博西游（七十二变）→ 堂吉诃奶蛙（跑酷），三种梦每 30 秒一换，越做越深<br>手机：手指拖着走，不碰也会自动喷；攒满点🦘肥嘟嘟、点「变身」捧腹大笑<br>电脑：WASD 走 · 鼠标瞄 · V 变身 · F 肥嘟嘟 · 空格 闪身步 / 跳 · B 开船 · C 换视角</p><p class="ver">${VERSION} · 基于《罗密欧与朱丽叶·奶蛙缝合版》</p></div>
<div id="wake" class="hide" data-ui><h2>下课了！</h2><div class="rank"><b></b><small>这一觉的评价</small></div><ul></ul><div class="btns"><button class="b-again">再睡一觉</button><button class="b-more">继续做梦</button></div></div>
<div id="capMob" class="cap hide"></div>
<div id="capHero" class="cap hide"></div>
<div id="combo" class="hide"><b>0</b><span>连哈</span></div>
<div id="fatBanner" class="hide"><span class="roo">🦘</span><div><b>你的胆子真是肥嘟嘟的！</b><small>${FDD_SAY}</small></div></div>
<div id="xhair" class="hide"></div>
<div id="shiftFx" class="hide"></div>
<div id="tools" class="hide"><button class="b-cam">视角 俯视</button><button class="b-pause">暂停</button><button class="b-mute">声音 开</button></div>
<div id="pause" class="hide" data-ui><h2>暂停</h2><button class="b-resume">继续</button><button class="b-restart">从头开始</button></div>
<div id="fps" class="${DEBUG ? '' : 'hide'}"></div>`;
const $ = (s) => ui.querySelector(s);
const show = (el, on = true) => el.classList.toggle('hide', !on);
const laughBtn = document.createElement('button'); laughBtn.className = 'b-laugh hide';
ui.appendChild(laughBtn);
laughBtn.addEventListener('click', (e) => { e.stopPropagation(); startLaugh(); });
const fatBtn = document.createElement('button'); fatBtn.className = 'b-fat hide';
fatBtn.innerHTML = '<span class="roo">🦘</span><b>肥嘟嘟</b><small></small>';
ui.appendChild(fatBtn);
fatBtn.addEventListener('click', (e) => { e.stopPropagation(); tryFeidudu(); });
// 跑酷用的两个按钮：跳、开船（往后喷一口往前冲）
const jumpBtn = document.createElement('button'); jumpBtn.className = 'b-jump hide'; jumpBtn.innerHTML = '跳<small>空格</small>';
ui.appendChild(jumpBtn);
jumpBtn.addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); jumpWant = true; });
const boostBtn = document.createElement('button'); boostBtn.className = 'b-boost hide'; boostBtn.innerHTML = '开船<small>B</small>';
ui.appendChild(boostBtn);
boostBtn.addEventListener('pointerdown', (e) => { e.stopPropagation(); e.preventDefault(); tryBoost(); });
ui.addEventListener('click', (e) => { const b = e.target.closest && e.target.closest('button'); if (b) b.blur(); }, true);
addEventListener('keydown', (e) => {
  if (e.code === 'KeyV' && !e.repeat) startLaugh();
  if (e.code === 'KeyF' && !e.repeat) tryFeidudu();
  if (e.code === 'KeyB' && !e.repeat) tryBoost();
  if (e.code === 'KeyC' && !e.repeat && (phase === 'fight' || phase === 'title') && dream !== 2) setCamMode((camMode + 1) % 3);
  if (e.code === 'Space' && phase === 'fight') { e.preventDefault(); if (!e.repeat) { if (dream === 2) jumpWant = true; else dodge.want = true; } }
});
let laughLabel = '';

// ---------- 短视频字幕 ----------
let capHeroT = 0, capMobT = 0;
function caption(el, text, color) {
  el.textContent = text; el.style.color = color || '';
  show(el); el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
}
function heroCaption(text, color = '#ffe14d', sec = 1.5) { caption($('#capHero'), text, color); capHeroT = sec; }
function mobCaption(text, color = '#ffffff') { caption($('#capMob'), text, color); capMobT = 1.15; }

// ---------- 视角切换 ----------
function setCamMode(m) {
  camMode = m;
  if (camMode > 0) { camYaw = Math.atan2(player.aimX, player.aimZ); camPitch = 0; }
  $('#tools .b-cam').textContent = `视角 ${CAM_NAMES[camMode]}`;
  if (camMode === 0 && document.pointerLockElement) document.exitPointerLock();
  if (phase === 'fight') {
    heroCaption(camMode === 0 ? '俯视' : camMode === 1 ? '第三人称：鼠标 / Q E 转身' : '第一人称：鼠标 / Q E 转身', '#ffffff');
    if (camMode > 0 && !('ontouchstart' in window)) canvas.requestPointerLock?.();
  }
}
$('#tools .b-cam').onclick = (e) => { e.stopPropagation(); if (dream !== 2) setCamMode((camMode + 1) % 3); };
$('#tools .b-cam').textContent = `视角 ${CAM_NAMES[camMode]}`;
let mouseHeld = false;
canvas.addEventListener('mousedown', (e) => {
  if (e.button === 0) mouseHeld = true;
  if (camMode > 0 && dream !== 2 && phase === 'fight' && !document.pointerLockElement) canvas.requestPointerLock?.();
});
addEventListener('mouseup', (e) => { if (e.button === 0) mouseHeld = false; });
addEventListener('mousemove', (e) => {
  if (document.pointerLockElement !== canvas || camMode === 0) return;
  camYaw -= e.movementX * 0.0026;
  camPitch = Math.max(-0.5, Math.min(0.55, camPitch - e.movementY * 0.002));
});

// 打斗中的喊话：屏幕上方一条，不暂停
let barkT = 0;
function bark(who, text) {
  const p = PEOPLE[who] || PEOPLE.narrator, el = $('#bark');
  el.querySelector('img').src = p.img || ''; el.querySelector('img').style.display = p.img ? '' : 'none';
  el.querySelector('b').textContent = p.name; el.querySelector('span').textContent = text;
  show(el); el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
  barkT = 2.2 + text.length * 0.06;
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// 三选一：升级时
function chooseCards(title) {
  return new Promise((resolve) => {
    const cards = drawCards(levels, level), el = $('#cards'), row = el.querySelector('.row');
    if (!cards.length) { resolve(); return; }
    el.querySelector('h2').textContent = title;
    row.innerHTML = '';
    cards.forEach((k, idx) => {
      const lv = levels[k.id] || 0;
      const b = document.createElement('button');
      b.innerHTML = `<b>${k.name}</b><em>${lv ? `${lv} 级 → ${lv + 1} 级` : '新技能'}</em><small>${k.desc[lv]}</small><q>${JOKES[k.id]}</q>`;
      b.onclick = () => { show(el, false); takeSkill(k.id); resolve(k.id); };
      row.appendChild(b);
      if (AUTO && idx === 0) setTimeout(() => b.click(), 60);
    });
    show(el);
  });
}
function takeSkill(id) {
  levels[id] = (levels[id] || 0) + 1;
  byId[id].apply(stats, levels[id]);
  if (stats.healNow) { player.hp = Math.min(maxHp(), player.hp + maxHp() * stats.healNow); stats.healNow = 0; }
  pluck(12, 0.07, 0.6, 'sine'); pluck(16, 0.05, 0.7, 'sine');
}

// ---------- 流程：开始 → 课堂（睡着）→ 梦 ⇄ 换梦 → …… → 下课铃（醒来） ----------
let firstLevelSaid = false;
async function startRun(again) {
  resetRun();
  show($('#title'), false); show($('#wake'), false);
  if (!again && !AUTO && Q.get('intro') !== '0') await classIntro();
  beginDream(START_DREAM);
}
// 开场的课堂：老师在黑板上写《庄周梦蝶》，奶蛙趴在桌上睡着了，鼻涕泡越吹越大……啵，掉进梦里
async function classIntro() {
  phase = 'intro';
  const el = $('#class'), ps = el.querySelectorAll('.board p');
  let skip = false;
  el.querySelector('.skip').onclick = (e) => { e.stopPropagation(); skip = true; };
  el.onclick = () => { skip = true; };
  ps.forEach((p) => { p.textContent = ''; });
  el.classList.remove('dozing', 'fall', 'awake'); show(el);
  ps[0].textContent = '正在上课……';
  await Promise.race([clipsReady, sleep(2500)]);   // 等配音加载好（最多等 2.5 秒），老师才开口
  ps[0].textContent = '';
  if (!skip) say('teacher.intro', { volume: 1, duckTo: 1 });
  for (let r = 0; r < CLASS_BOARD.length && !skip; r++) for (let c = 1; c <= CLASS_BOARD[r].length && !skip; c++) { ps[r].textContent = CLASS_BOARD[r].slice(0, c); await sleep(85); }
  if (!skip) { el.classList.add('dozing'); say('naiwa.zzz', { volume: 0.9, duckTo: 1 }); for (let k = 0; k < 24 && !skip; k++) await sleep(100); }
  el.classList.add('fall'); if (!muted) pop(0.5, 0.4);
  await sleep(700);
  show(el, false); el.classList.remove('dozing', 'fall');
}
function beginDream(n) {
  dream = n; visits[n]++;
  dreamTime = 0; lineIdx = 0; dreamScore = 0;
  E.n = B.n = EB.n = 0; corpses.length = 0; introQueue.length = 0;
  player.x = 0; player.z = n === 0 ? 3.2 : 0; player.y = player.vy = 0; player.kx = player.kz = 0;
  player.aimX = 0; player.aimZ = n === 2 ? -1 : 1; player.hurtCd = 1.2; heroPuff = 1;
  boostT = stumbleT = runV = 0; jumpWant = false;
  if (n === 2 && camMode > 0 && document.pointerLockElement) document.exitPointerLock();
  world.setDream(n, player.x, player.z);
  D.setup(n, layer);
  playMusic(['butterfly', 'cyber', 'quixote'][n]);
  const dd = DREAMS[n], at = $('#acttitle');
  at.querySelector('small').textContent = `第 ${layer} 层梦境 · ${dd.mode}`;
  at.querySelector('b').textContent = `${dd.icon} ${dd.name}`;
  at.querySelector('p').textContent = dd.rule;
  show(at); at.classList.remove('pop'); void at.offsetWidth; at.classList.add('pop');
  setTimeout(() => show(at, false), 3200);
  show($('#bars')); show($('#actinfo')); show($('#tools'));
  $('#actinfo b').textContent = `第 ${layer} 层梦境`;
  ui.querySelectorAll('#actinfo .wheel i').forEach((el) => el.classList.toggle('on', +el.dataset.d === n));
  spitT = Math.max(spitT, 0); combo = 0; show($('#combo'), false);
  introT = Math.max(introT, 1.4);
  camYaw = Math.PI; camPitch = 0;
  laughCd = Math.min(laughCd, 4);
  autoLaughAt = visits[n] === 1 ? 4 : -1;      // 第一次进这种梦：第 4 秒自动笑一次给玩家看
  laughHintAt = visits[n] === 1 ? 17 : -1;     // 之后提示“再笑一个”（这时候冷却正好好了）
  lastJoyAt = time; awk = 0;
  phase = 'fight';
  if (!muted && actx) { playLaugh(actx, 1.2, 'short', 0.7); holdHero(1.1); motif('stinger'); }
  laughUI.flash(); shake = Math.max(shake, 0.25);
}
// 这个梦的 30 秒到了：庄周梦蝶 → 打喷嚏；赛博西游 → 笑到地震、地面裂开掉下去；堂吉诃奶蛙 → 风车扇一口风吹回去
function endDream(reason) {
  if (phase !== 'fight' && phase !== 'levelup') return;
  endLaugh(); stopSpeak();
  awk = 0; lastJoyAt = time;   // 过场里不变灰
  const kind = dream === 0 ? 'sneeze' : dream === 1 ? 'quake' : 'gust';
  B.n = 0; EB.n = 0; show($('#boss'), false); show($('#calm'), false); show($('#bark'), false);
  D.finish(reason);   // 这个梦的收尾喊话（企鹅说几句），在过场里显示
  phase = 'shift'; shiftT = 0; shiftKind = kind; shiftNext = (dream + 1) % 3; shiftSwapped = false;
  if (document.pointerLockElement) document.exitPointerLock();
  D.shiftStart(kind);
  const st = SHIFT_TEXT[kind];
  heroCaption(st[0], '#ffffff', 1.2);
  setTimeout(() => { if (phase === 'shift') heroCaption(st[1], kind === 'quake' ? '#ff8ae0' : '#ffe14d', 1.4); }, kind === 'quake' ? 1100 : 800);
}
// 换梦的过场：喷嚏 1.8 秒（0.8 秒憋气，“阿嚏”把东西全吹飞）、地震 2.4 秒（裂开 1.1 秒，再往下掉）、大风 1.6 秒；
// 到点直接换场景（下一个梦开头有从天上掉下来的动作和标题卡）
const SHIFT_SWAP = { sneeze: 1.8, quake: 2.4, gust: 1.6 };
function stepShift(dt) {
  shiftT += dt;
  D.shiftStep(dt, shiftT, shiftKind);
  if (!shiftSwapped && shiftT >= SHIFT_SWAP[shiftKind]) {
    shiftSwapped = true;
    for (let i = E.n - 1; i >= 0; i--) killEnemy(i, 'quiet');
    corpses.length = 0; O.n = 0;
    if (layer >= WAKE_LAYERS + WAKE_EXTRA) { wake(); return; }
    layer++;
    beginDream(shiftNext);
  }
}
// 下课铃：醒来，老师点名，奶蛙用《庄子》回答；最后按“从夯到拉”给这一觉打分
async function wake() {
  phase = 'wake';
  playMusic(null); stopLaugh(); stopSpeak();
  show($('#bars'), false); show($('#actinfo'), false); show($('#tools'), false); show($('#boss'), false); show($('#calm'), false);
  D.teardown();
  if (!say('fx.bell', { volume: 0.9, duckTo: 1 })) motif('bell');
  say('fx.alarm', { volume: 0.55, duckTo: 1, delay: 0.3 });
  const el = $('#class'), ps = el.querySelectorAll('.board p');
  ps[0].textContent = '下课了！'; ps[1].textContent = ''; ps[2].textContent = ''; ps[3].textContent = '';
  el.classList.add('awake'); show(el);
  el.onclick = null; el.querySelector('.skip').onclick = (e) => { e.stopPropagation(); };
  await sleep(AUTO ? 50 : 1400);
  for (const [who, text] of WAKE_LINES) {
    bark(who, text);
    const len = say(who === 'teacher' ? 'teacher.wake' : 'naiwa.answer', { volume: 1, duckTo: 1 });
    await sleep(AUTO ? 50 : Math.max(2200, (len || 3) * 1000 + 300));
  }
  show(el, false); el.classList.remove('awake'); show($('#bark'), false);
  const total = score + bestCombo * 20 + layer * 400;
  const rank = RANKS.find(([s]) => total >= s)[1];
  const w = $('#wake');
  w.querySelector('.rank b').textContent = rank;
  w.querySelector('ul').innerHTML = [
    `做了 <b>${layer}</b> 层梦`, `笑倒 <b>${kills}</b> 只梗怪`, `最长连哈 <b>${bestCombo}</b>`, `${level} 级 · 笑点 <b>${total}</b>`,
    `捧腹大笑复活了 <b>${revives}</b> 次`,
  ].map((s) => `<li>${s}</li>`).join('');
  show(w); phase = 'over';
  w.querySelector('.b-again').onclick = () => { show(w, false); startRun(true); };
  w.querySelector('.b-more').onclick = () => { show(w, false); WAKE_EXTRA += 9; layer++; beginDream((dream + 1) % 3); };
  if (AUTO) window.__woke = true;
}
let WAKE_EXTRA = 0;
// 被打倒：立刻变身大奶蛙捧腹大笑，满血复活，周围的怪被笑声震开（?norevive=1 时直接下课）
function laughRevive() {
  revives++; heroCaption('笑着复活！哈哈哈哈！');
  player.hp = maxHp(); player.kx = player.kz = 0; player.hurtCd = Math.max(player.hurtCd, 1.5);
  startLaugh(true);
  floatText(scene, '笑着复活！', player.x, 4.4, player.z, { color: '#ffe36b', stroke: '#5a2e10', h: 1.15, life: 1.8 });
  bark('naiwa', pick(['哈哈哈！笑一笑就活过来了！', '绷不住了……复活！', '倒下？不存在的，哈哈哈哈！']));
  window.__revives = revives;
}
function die() {
  if (REVIVE && (phase === 'fight' || phase === 'levelup')) { laughRevive(); return; }
  if (phase === 'fight' || phase === 'levelup') wake();
}

// ---------- 每一帧 ----------
const tmp = { x: 0, z: 0 };
// 走路（庄周梦蝶、赛博西游）：摇杆 / WASD 的方向按镜头朝向换算；走满 6 米自动闪身步
function moveWalker(dt, mv, fighting) {
  const third = camMode > 0 && fighting;
  if (third) {
    const k = input.keys;
    camYaw += ((k.has('KeyQ') ? 1 : 0) - (k.has('KeyE') ? 1 : 0)) * 2.4 * dt;
    if (input.aim.active) camYaw -= input.aim.x * 2.6 * dt;
    else if (Math.hypot(input.touchMove.x, input.touchMove.y) > 0.2 && document.pointerLockElement !== canvas) {
      let d = Math.atan2(player.mvx, player.mvz) - camYaw; d = Math.atan2(Math.sin(d), Math.cos(d));
      if (Math.abs(d) < 2.2) camYaw += d * Math.min(1, dt * 1.6);
    }
  }
  const yawM = third ? camYaw : Math.PI, fx = Math.sin(yawM), fz = Math.cos(yawM);
  const wmx = fx * -mv.y - fz * mv.x, wmz = fz * -mv.y + fx * mv.x;
  const mvLen = Math.hypot(mv.x, mv.y);
  const sp = 6.4 * stats.speedMul * (laughT > 0 ? 0.4 : 1) * (1 - awk * 0.25);
  let vx = wmx * sp, vz = wmz * sp;
  if (dodge.t > 0) { dodge.t -= dt; vx += dodge.vx; vz += dodge.vz; dodge.ghostT -= dt; if (dodge.ghostT <= 0) { dodge.ghostT = 0.045; dropGhost(); } }
  player.x += (vx + player.kx) * dt; player.z += (vz + player.kz) * dt;
  const fade = Math.exp(-dt * 6); player.kx *= fade; player.kz *= fade;
  pushOut(player, player.r);
  if (mvLen > 0.1) { player.mvx = wmx / mvLen; player.mvz = wmz / mvLen; }
  if (fighting) {
    dodge.cd -= dt;
    if (mvLen > 0.3 && dodge.t <= 0) dodge.walk += sp * mvLen * dt;
    if ((dodge.walk >= DODGE_EVERY || dodge.want) && dodge.cd <= 0 && dodge.t <= 0 && laughT <= 0) startDodge(mvLen > 0.1);
    dodge.want = false;
  }
  player.moving = mvLen;
  player.y = Math.max(0, player.y - dt * 12);   // 从天上掉进梦里时慢慢落地
}
// 跑酷（堂吉诃奶蛙）：一直往前（-Z）跑，左右躲，空格 / 「跳」跳过障碍；开船时往前猛冲
function moveRunner(dt, mv, fighting) {
  if (D.lockPlayer()) { player.moving = 1; jumpWant = false; player.mvx = 0; player.mvz = -1; return; }   // 被风车叶子挑起来转圈：位置由 dreamplay.js 管
  const sp = (fighting ? RUN_SPEED * Math.sqrt(stats.speedMul) * (stumbleT > 0 ? 0.35 : 1) * (laughT > 0 ? 0.8 : 1) + (boostT > 0 ? 11 : 0) : 0) * (1 - awk * 0.2);
  player.z -= sp * dt; runV = sp;
  const lat = input.keys.size || Math.abs(mv.x) > 0.05 ? mv.x : (input.aim.active ? input.aim.x : 0);
  player.x = Math.max(-ROAD_HALF + 0.55, Math.min(ROAD_HALF - 0.55, player.x + lat * LAT_SPEED * dt + player.kx * dt));
  player.kx *= Math.exp(-dt * 6); player.kz = 0;
  if (fighting && (jumpWant || mv.y < -0.7) && player.y <= 0.02) {   // 空格、「跳」、W / ↑、手指往上推，都是跳
    player.vy = JUMP_V; if (!muted && actx) { whoosh(0.25); boing(0.12); }
    floatText(scene, pick(['嘿咻！', '跳！', '飞——']), player.x, 2.6, player.z, { color: '#ffffff', stroke: '#5a3a10', h: 0.55, life: 0.6 });
  }
  jumpWant = AUTO && fighting && D.obstacleAhead(player.x, player.z);   // 自动测试：前面有障碍就跳（真人玩家按空格）
  if (AUTO && fighting && boostCd <= 0 && Math.random() < dt * 0.25) tryBoost();
  player.vy -= GRAV * dt; player.y += player.vy * dt;
  if (player.y <= 0) { if (player.vy < -9) ring(player.x, player.z, 1.4, 0.35, '#e8c890'); player.y = 0; player.vy = 0; }
  if (boostT > 0) { boostT -= dt; dodge.ghostT -= dt; if (dodge.ghostT <= 0) { dodge.ghostT = 0.05; dropGhost(); } }
  if (boostCd > 0) boostCd -= dt;
  if (stumbleT > 0) stumbleT -= dt;
  player.mvx = 0; player.mvz = -1; player.moving = fighting ? 1 : 0;
}
// 开船：转身往后喷一大口“呼——”，借反作用力往前猛冲 1.6 秒（冲的时候不挨打），冷却 7 秒
function tryBoost() {
  if (phase !== 'fight' || dream !== 2 || boostCd > 0 || laughT > 0) return;
  boostT = 1.6; boostCd = 7; stumbleT = 0;
  heroCaption('开船咯！呼————', '#bfe8ff');
  say('naiwa.kaichuan', { volume: 1, duckTo: 0.4 });
  if (!muted && actx) whoosh(0.6);
  for (let k = 0; k < 6; k++) shootFrom(player.x, player.z + 0.6, (k - 2.5) * 0.12, GLYPH_HU, 0.6);   // 往后喷（+Z 是身后）
  D.onBoost();
  shake = Math.max(shake, 0.3);
}
function stumble(text) {
  if (boostT > 0 || laughT > 0) return;
  stumbleT = 0.7; shake = Math.max(shake, 0.3);
  hurtPlayer(5, 0.7);
  floatText(scene, text || pick(LINES.stumble), player.x, 2.4, player.z, { color: '#ffd28a', stroke: '#4a2a10', h: 0.7, life: 0.8 });
  if (!muted && actx) boom(0.25);
}
// 传染笑：被“嘿”喷到攒笑意，满了开始笑；笑到一半传染给 1.8 米内的怪；笑够了灵魂出窍
function addLol(i, v) {
  if (E.dance[i] > 0 || E.puff[i] > 0) return;
  E.lol[i] += v;
  if (E.lol[i] >= 1 && E.lolT[i] <= 0) { E.lolT[i] = 0.001; E.swing[i] = 0; if (Math.random() < 0.3) floatText(scene, pick(['哈哈哈', '噗哈', '绷不住了', '嘿嘿嘿']), E.x[i], 2.2, E.z[i], { color: '#ffe14d', stroke: '#4a1038', h: 0.55, life: 0.7 }); }
}
function infectAround(i) {
  const x = E.x[i], z = E.z[i], id = E.id[i];
  forNear(x, z, 1.9, (j) => { if (E.id[j] === id) return; const ex = E.x[j] - x, ez = E.z[j] - z; if (ex * ex + ez * ez < 1.9 * 1.9) addLol(j, 0.7); });
}
function step(dt) {
  time += dt;
  if (phase === 'shift') { stepShift(dt); stepFx(dt); return; }
  if (phase !== 'fight' && phase !== 'levelup') { if (phase === 'title') { player.moving = 0; } stepFx(dt); return; }
  const fighting = phase === 'fight';
  if (fighting) dreamTime += dt;
  const mv = input.getMove();
  if (dream === 2) moveRunner(dt, mv, fighting); else moveWalker(dt, mv, fighting);
  world.update(player.x, player.z);

  if (fighting) {
    const DL = DREAM_LINES[dream];
    while (lineIdx < DL.length && dreamTime >= DL[lineIdx].t) {
      const L = DL[lineIdx++];
      if (L.first && visits[dream] !== 1) continue;
      bark(L.who, L.text);
      if (L.voice) say(L.voice, { volume: 1, duckTo: 0.4 });
    }
    if (dreamTime >= DREAM_LEN) { endDream('time'); return; }
  }
  D.director(dt, fighting);
  D.step(dt, fighting);
  if (phase !== 'fight' && phase !== 'levelup') return;   // 鼻涕泡被戳破：提前换梦

  // 怪：朝目标走（奶蛙、课桌、唐僧），或者横穿马路（羊）
  const early = layer === 1 && dreamTime < 6 ? 0.4 : 1, awkK = 1 - awk * 0.4;
  for (let i = 0; i < E.n; i++) {
    const t = TYPES[E.type[i]];
    const dx = player.x - E.x[i], dz = player.z - E.z[i], d = Math.hypot(dx, dz) || 1;
    if (t.ai === 'cross') { if ((E.x[i] - player.x) * Math.sign(E.vx[i]) > 14 || E.z[i] - player.z > 9) { killEnemy(i, 'quiet'); i--; continue; } }   // 羊走到路的另一边、或者被甩到身后：不要了
    else if (d > 36) { const a = Math.random() * 6.28; E.x[i] = player.x + Math.sin(a) * 18; E.z[i] = player.z + Math.cos(a) * 14; continue; }
    const touch = player.r + t.r;
    if (E.flash[i] > 0) E.flash[i] -= dt;
    if (E.ocd[i] > 0) E.ocd[i] -= dt;
    if (E.atk[i] > 0) E.atk[i] -= dt;
    if (E.swing[i] > 0) E.swing[i] -= dt;
    if (E.scd[i] > 0) E.scd[i] -= dt;
    if (E.puff[i] > 0) { E.puff[i] -= dt; if (E.puff[i] <= 0) { popEnemy(i); i--; } continue; }
    if (E.dance[i] > 0) { E.dance[i] -= dt; if (E.dance[i] <= 0) { killEnemy(i, 'dance'); i--; } continue; }
    if (E.lolT[i] > 0) {
      const was = E.lolT[i]; E.lolT[i] += dt;
      if ((was < 0.3 && E.lolT[i] >= 0.3) || (was < 0.75 && E.lolT[i] >= 0.75)) infectAround(i);
      if (E.lolT[i] >= 1.15) { killEnemy(i, 'soul'); i--; }
      continue;
    }
    if (E.stun[i] > 0) { E.stun[i] -= dt; continue; }
    if (E.slow[i] > 0) E.slow[i] -= dt;
    const slowK = (E.slow[i] > 0 ? 0.45 : 1) * awkK;
    if (t.ai === 'cross') {
      E.x[i] += E.vx[i] * slowK * dt;
      if (fighting && d < touch + 0.15 && player.y < 0.8 && E.atk[i] <= 0) { E.atk[i] = 1; if (t.minion) swingStart(i, t, d); stumble(pick(['被羊撞了！', '咩！', '敌军太强了'])); if (phase === 'over' || phase === 'wake') return; }
      continue;
    }
    if (t.ai !== 'chase' && d > 2.4) {
      const goal = D.goalFor(t.ai);
      if (goal) {
        const gx = goal.x - E.x[i], gz = goal.z - E.z[i], gd = Math.hypot(gx, gz) || 1, reach = goal.r + t.r + 0.05;
        const st = Math.min(E.speed[i] * slowK * dt, Math.max(0, gd - reach));
        E.x[i] += gx / gd * st; E.z[i] += gz / gd * st;
        if (fighting && gd < reach + 0.25 && E.atk[i] <= 0) { E.atk[i] = 1.0; D.goalHit(t.ai, i); if (t.minion) swingStart(i, t, d); }
        continue;
      }
    }
    const st = Math.min(E.speed[i] * slowK * dt, Math.max(0, d - touch));
    E.x[i] += dx / d * st; E.z[i] += dz / d * st;
    if (t.minion && fighting && d < touch + 0.75 && E.scd[i] <= 0) swingStart(i, t, d);
    if (fighting && d < touch + 0.12 && player.y < 0.8) { hurtPlayer(t.dmg * early); if (phase === 'over' || phase === 'wake') return; }
  }
  if (phase !== 'fight' && phase !== 'levelup') return;   // 鼻涕泡刚被戳破：已经开始换梦了
  if (player.hurtCd > 0) player.hurtCd -= dt;
  for (let k = EB.n - 1; k >= 0; k--) {   // 高雅塔的音符
    EB.x[k] += EB.dx[k] * dt; EB.z[k] += EB.dz[k] * dt; EB.life[k] -= dt;
    const hx = EB.x[k] - player.x, hz = EB.z[k] - player.z;
    const hitP = fighting && hx * hx + hz * hz < 0.6 * 0.6;
    if (hitP) { hurtPlayer(EB.dmg[k]); if (phase === 'over' || phase === 'wake') return; }
    if (hitP || EB.life[k] <= 0) { EB.n--; for (const a of [EB.x, EB.z, EB.dx, EB.dz, EB.life, EB.dmg]) a[k] = a[EB.n]; }
  }
  buildGrid();
  for (let i = 0; i < E.n; i++) {
    const ri = TYPES[E.type[i]].r;
    forNear(E.x[i], E.z[i], 1.5, (j) => {
      if (j <= i) return;
      const R = ri + TYPES[E.type[j]].r;
      let ex = E.x[i] - E.x[j], ez = E.z[i] - E.z[j], q = ex * ex + ez * ez;
      if (q >= R * R) return;
      if (q < 1e-8) { ex = Math.random() - 0.5; ez = Math.random() - 0.5; q = ex * ex + ez * ez; }
      const dd = Math.sqrt(q), push = (R - dd) * 0.5 / dd;
      E.x[i] += ex * push; E.z[i] += ez * push; E.x[j] -= ex * push; E.z[j] -= ez * push;
    });
  }
  for (let i = 0; i < E.n; i++) {
    const r = TYPES[E.type[i]].r, touch = player.r + r;
    const dx = E.x[i] - player.x, dz = E.z[i] - player.z, q = dx * dx + dz * dz;
    if (dream !== 2 && q < touch * touch && q > 1e-8) { const dd = Math.sqrt(q); E.x[i] = player.x + dx / dd * touch; E.z[i] = player.z + dz / dd * touch; }
    tmp.x = E.x[i]; tmp.z = E.z[i]; pushOut(tmp, r); D.pushOut(tmp, r); E.x[i] = tmp.x; E.z[i] = tmp.z;
  }
  D.pushOut(player, player.r);
  buildGrid();
  if (!fighting) { stepFx(dt); return; }

  // 瞄准：跑酷时自动瞄前面的障碍和风车；其他时候右摇杆 > 鼠标 > 自动打最近的怪（没怪时打塔、白骨精）
  let aim = null;
  if (dream === 2) aim = D.aimTarget();
  else if (camMode > 0) aim = aimAhead();
  else if (input.aim.active) { const d = Math.hypot(input.aim.x, input.aim.y); aim = { x: input.aim.x / d, z: input.aim.y / d }; }
  else if (input.mouse.active) aim = mouseAim();
  if (!aim && camMode === 0 && dream !== 2) {
    const t = nearestEnemy(player.x, player.z, 11), sp = D.aimTarget();
    if (sp && (t < 0 || sp.pri)) aim = sp;
    else if (t >= 0) { const dx = E.x[t] - player.x, dz = E.z[t] - player.z, d = Math.hypot(dx, dz) || 1; aim = { x: dx / d, z: dz / d }; }
    else if (sp) aim = sp;
  }
  if (aim) { player.aimX = aim.x; player.aimZ = aim.z; }
  heatNow = pace.heat(layer, dreamTime, combo, D.bossOn());

  // 开火：每个梦喷的字不一样（哈 / 嘿 / 呼），隔几口喷一个特殊字
  fireCd -= dt;
  const manualAim = input.aim.active || input.mouse.active || (camMode > 0 && mouseHeld);
  const canFire = aim && laughT <= 0 && boostT <= 0 && (manualAim || !D.villagerInLine(player.x, player.z, player.aimX, player.aimZ, 14));
  if (canFire) spitT = Math.min(FAT_TIME, spitT + dt);
  if (canFire && fireCd <= 0) {
    fireCd = 1 / ((dream === 2 ? 2.8 : 3.4) * stats.rateMul);
    volley++;
    const base = dream === 1 ? GLYPH_HEI : dream === 2 ? GLYPH_HU : (Math.random() < 0.6 ? 0 : 1);
    const g = volley % (dream === 0 ? 3 : 4) === 0 ? pickWord(base) : base, G = HAHA_GLYPHS[g];
    const baseAng = Math.atan2(player.aimX, player.aimZ), spread = 0.17;
    const fan = (ang, n) => { for (let k = 0; k < n; k++) shoot(ang + (k - (n - 1) / 2) * spread, g); };
    fan(baseAng, stats.projectiles);
    const en = stats.echo >= 3 ? Math.min(3, stats.projectiles) : 1;
    if (stats.echo >= 1) fan(baseAng + Math.PI, en);
    if (stats.echo >= 2) { fan(baseAng + Math.PI / 2, en); fan(baseAng - Math.PI / 2, en); }
    D.onVolley(g, volley);
    if (!muted && actx) {
      const first = G.voice && !pace.firstWord.has(g);
      if (G.voice && !heroBusy() && hasClip(G.voice) && pace.lineOk(time, first)) {
        pace.firstWord.add(g); pace.linePlayed(time, heatNow, G.say + (first ? '（第一次）' : ''));
        heroSay(G.voice, { volume: 1, duckTo: 0.25 }); heroCaption(G.say, G.color);
      } else if (!heroBusy()) {
        if (dream === 2) { whoosh(0.12); if (volley % 3 === 0) playHa(actx, 0.3, 0.85); }
        else if (!playHa(actx, dream === 1 ? 0.36 : 0.42, dream === 1 ? 1.45 : 1)) pluck(MELODY[noteIdx++ % MELODY.length], 0.035, 0.3);
      }
    }
  }
  if (spitT >= FAT_TIME && !fatHintSaid) {
    fatHintSaid = true;
    bark('naiwa', '肥嘟嘟攒满了！点右边的🦘袋鼠（电脑按 F）！');
    if (!muted) { tone(1047, 0.05, 0.25, 'sine'); setTimeout(() => tone(1568, 0.05, 0.35, 'sine'), 110); }
  }
  if (AUTO && spitT >= FAT_TIME && laughT <= 0) feidudu();

  // 第一次见到每种梗怪：等它走进画面再播招牌叫声、配字幕
  while (introQueue.length && pace.firstDeath.has(introQueue[0])) introQueue.shift();
  if (introQueue.length) {
    introT -= dt;
    const key = introQueue[0];
    let near = false;
    for (let i = 0; i < E.n && !near; i++) if (TYPES[E.type[i]].key === key && Math.hypot(E.x[i] - player.x, E.z[i] - player.z) < 11) near = true;
    if (introT <= 0 && near && !heroBusy() && pace.mobOk(time, key, true)) { introT = 1.25; introduce(introQueue.shift()); }
  }

  // 变身大奶蛙：捧腹大笑 3.4 秒，每 0.62 秒一圈全屏笑声；第一层梦第 4 秒自动笑一次，演示给玩家看
  if (laughCd > 0) laughCd -= dt;
  if (autoLaughAt > 0 && dreamTime >= autoLaughAt) { autoLaughAt = -1; if (laughT <= 0) { laughCd = 0; startLaugh(); } }
  if (AUTO && laughCd <= 0 && laughT <= 0 && dreamTime > 2 && dreamTime < DREAM_LEN - 3) startLaugh();   // 自动测试：冷却好了就笑（像真人一样）
  if (laughHintAt > 0 && dreamTime >= laughHintAt && laughCd <= 0 && laughT <= 0) { laughHintAt = -1; bark('naiwa', `再笑一个！按 V 或右边的「变身」——这个梦里是「${DREAMS[dream].laugh}」！`); }
  if (laughT > 0) {
    laughT -= dt; pulseT -= dt;
    player.hurtCd = Math.max(player.hurtCd, 0.05);
    if (pulseT <= 0 && pulsesLeft > 0) { bellyPulse(); pulsesLeft--; pulseT = 0.62; }
    if (laughT <= 0) finishLaugh();
  }

  // 字飞行、打中怪（先问 dreamplay：塔、良民、白骨精、障碍、风车）
  for (let i = B.n - 1; i >= 0; i--) {
    B.x[i] += B.dx[i] * dt; B.z[i] += B.dz[i] * dt; B.life[i] -= dt;
    if (B.life[i] <= 0) { removeBullet(i); continue; }
    if (D.bulletHit(i)) { if (B.pierce[i] > 0) { B.pierce[i]--; B.last[i] = -2; } else { removeBullet(i); continue; } }
    const hr = 0.35 * B.size[i];
    let hit = -1;
    forNear(B.x[i], B.z[i], 1.2 + hr, (j) => {
      if (E.id[j] === B.last[i] || E.dance[j] > 0) return;
      const R = TYPES[E.type[j]].r + hr, ex = E.x[j] - B.x[i], ez = E.z[j] - B.z[i];
      if (ex * ex + ez * ez < R * R) { hit = j; return false; }
    });
    if (hit < 0) continue;
    const hid = E.id[hit], hx = E.x[hit], hz = E.z[hit];
    const v = Math.hypot(B.dx[i], B.dz[i]) || 1, kn = stats.knock * 0.12;
    const wfx = HAHA_GLYPHS[B.glyph[i]].fx;
    if (wfx === 'lol') { addLol(hit, 0.55); hurtEnemy(hit, B.dmg[i] * 0.5, B.dx[i] / v * kn, B.dz[i] / v * kn, 'soul'); }
    else hurtEnemy(hit, B.dmg[i], B.dx[i] / v * kn, B.dz[i] / v * kn, wfx === 'gust' ? 'sky' : undefined);
    if (wfx === 'stun' || wfx === 'boom' || wfx === 'splash') wordHit(wfx, hit, hid, hx, hz, B.dx[i] / v, B.dz[i] / v, B.dmg[i]);
    B.last[i] = hid;
    if (B.bounce[i] > 0) {
      B.bounce[i]--;
      const nx = nearestEnemy(hx, hz, 7, hid);
      if (nx >= 0) { const dx = E.x[nx] - hx, dz = E.z[nx] - hz, d = Math.hypot(dx, dz) || 1; B.dx[i] = dx / d * v; B.dz[i] = dz / d * v; B.x[i] = hx; B.z[i] = hz; B.life[i] = Math.max(B.life[i], 0.5); continue; }
    }
    if (B.pierce[i] > 0) { B.pierce[i]--; continue; }
    removeBullet(i);
  }

  if (stats.drum) { drumCd -= dt; if (drumCd <= 0) { drumCd = [0, 4, 3.3, 2.6][stats.drum]; shockwave([0, 4, 5, 6][stats.drum], 2); } }
  const on = [0, 2, 3, 4][stats.orbit] || 0;
  for (let k = 0; k < on; k++) {
    const a = time * (stats.orbit >= 3 ? 3.6 : 2.6) + k / on * Math.PI * 2, ox = player.x + Math.sin(a) * 2.3, oz = player.z + Math.cos(a) * 2.3;
    forNear(ox, oz, 1.4, (j) => {
      if (E.ocd[j] > 0) return;
      const R = TYPES[E.type[j]].r + 0.4, ex = E.x[j] - ox, ez = E.z[j] - oz;
      if (ex * ex + ez * ez < R * R) { E.ocd[j] = 0.4; hurtEnemy(j, stats.dmgMul, ex * 0.3, ez * 0.3); return false; }
    });
  }
  // 冷场：3.5 秒没打出笑声，画面慢慢变灰、怪变慢，蟋蟀叫；一打中就恢复
  const cold = time - lastJoyAt > 3.5 && laughT <= 0 && boostT <= 0 && dreamTime > 3 && E.n > 2;   // 场上没几只怪时不算冷场（不是玩家的错）
  awk = cold ? Math.min(1, awk + dt / 2.5) : Math.max(0, awk - dt * 2.5);
  if (awk > 0.5 && time - awkSaid > 12) {
    awkSaid = time; mobCaption(pick(LINES.awkward), '#cfcfcf');
    if (!say('fx.crickets', { volume: 0.7, duckTo: 1, bus: 'sfx' })) motif('crickets');
    for (let k = 0; k < Math.min(4, E.n); k++) { const i = Math.random() * E.n | 0; floatText(scene, '尬', E.x[i], 2.4, E.z[i], { color: '#d8d8d8', stroke: '#333', h: 0.7, life: 1.4 }); }
  }
  stepOrbs(dt, dream === 2 ? 4 : 7, lowHp() ? 2 : 1);
  stepFx(dt);
  if (pendingLevels > 0 && phase === 'fight' && dreamTime < DREAM_LEN - 1.2) openLevelUp();   // 快换梦了就先不选卡，留到下一个梦
}
function shoot(ang, g = 0) { shootFrom(player.x + Math.sin(ang) * 0.5, player.z + Math.cos(ang) * 0.5, ang, g, 1); }
// 从任意位置喷一个字（分身、开船也用它）。lifeMul：飞多远（倍数）
function shootFrom(x, z, ang, g = 0, lifeMul = 1, dmgMul = 1, src = 0) {
  if (B.n >= MAX_B) return -1;
  const i = B.n++, fx = HAHA_GLYPHS[g].fx, sp = dream === 2 ? 17 : 15;
  B.src[i] = src;
  B.x[i] = x; B.z[i] = z;
  // 跑酷：字带着奶蛙往前跑的速度（不然风车在 20 米外，字追不上）
  B.dx[i] = Math.sin(ang) * sp; B.dz[i] = Math.cos(ang) * sp - (dream === 2 && src === 0 ? runV : 0); B.life[i] = (dream === 2 ? 1.5 : 1.05) * lifeMul;
  B.dmg[i] = stats.dmgMul * dmgMul; B.pierce[i] = stats.pierce; B.bounce[i] = stats.bounce; B.size[i] = stats.size; B.last[i] = -1;
  B.glyph[i] = g; B.y[i] = (dream === 2 ? 1.0 : 1.25) + player.y * 0.6;
  if (fx !== 'none' && fx !== 'lol' && fx !== 'gust') B.size[i] *= 1.15;
  if (fx === 'bounce') B.bounce[i] += 2;
  if (fx === 'pierce') { B.pierce[i] += 4; B.size[i] *= 1.2; B.life[i] *= 1.25; }
  if (fx === 'gust') B.size[i] *= 1.25;
  return i;
}
// 特殊字：只从已经解锁的字里挑（第一层梦按 PACE.wordsAt 一个一个上新）；刚解锁的字先喷一口
const WORD_W = { 2: 0.24, 3: 0.19, 4: 0.19, 5: 0.19, 6: 0.19 };
const shownWords = new Set();
function pickWord(fallback) {
  const open = Object.keys(WORD_W).map(Number).filter((g) => pace.wordOpen(g, layer, dreamTime));
  if (!open.length) return fallback;
  const fresh = pace.isQuiet(time) ? undefined : open.find((g) => !shownWords.has(g));
  if (fresh !== undefined) { shownWords.add(fresh); return fresh; }
  let r = Math.random() * open.reduce((s, g) => s + WORD_W[g], 0);
  for (const g of open) { r -= WORD_W[g]; if (r <= 0) return g; }
  return open[open.length - 1];
}
let boomAt = 0, popAt = 0;
function wordHit(fx, hit, hid, hx, hz, ux, uz, dmg) {
  const alive = hit < E.n && E.id[hit] === hid;
  if (fx === 'stun') {
    if (alive) { E.stun[hit] = 1.5; E.swing[hit] = 0; if (Math.random() < 0.45) floatText(scene, '跌！', hx, 2.1, hz, { color: '#d3b0ff', stroke: '#2a1046', h: 0.6, life: 0.7 }); }
  } else if (fx === 'boom') {
    ring(hx, hz, 1.9, 0.4, '#ff9a52');
    if (!muted && time - boomAt > 0.12) { boomAt = time; boom(0.4); }
    if (Math.random() < 0.35) floatText(scene, '嘭！', hx, 2.2, hz, { color: '#ff9a52', stroke: '#3a1404', h: 0.7, life: 0.6 });
    for (let j = E.n - 1; j >= 0; j--) {
      if (E.id[j] === hid) continue;
      const ex = E.x[j] - hx, ez = E.z[j] - hz, q = ex * ex + ez * ez;
      if (q < 1.9 * 1.9) { const d = Math.sqrt(q) || 0.01; hurtEnemy(j, dmg * 0.9, ex / d * 0.6, ez / d * 0.6); }
    }
  } else if (fx === 'splash') {
    ring(hx, hz, 2.3, 0.45, '#6cc4ff');
    for (let j = 0; j < E.n; j++) {
      const ex = E.x[j] - hx, ez = E.z[j] - hz;
      if (ex * ex + ez * ez < 2.3 * 2.3) { E.x[j] += ux * 1.3; E.z[j] += uz * 1.3; E.slow[j] = 2.5; }
    }
  }
}
function startDodge(moving) {
  let fx = moving ? player.mvx : player.aimX, fz = moving ? player.mvz : player.aimZ;
  const l = Math.hypot(fx, fz) || 1; fx /= l; fz /= l;
  dodge.side = -dodge.side;
  const sx = -fz * dodge.side, sz = fx * dodge.side, v = DODGE_DIST / DODGE_TIME;
  dodge.vx = (sx * 0.9 + fx * 0.3) * v; dodge.vz = (sz * 0.9 + fz * 0.3) * v;
  dodge.t = DODGE_TIME; dodge.cd = 0.5; dodge.walk = 0; dodge.ghostT = 0; dodge.n++;
  player.hurtCd = Math.max(player.hurtCd, DODGE_TIME + 0.15);
  const voiced = !muted && actx && !heroBusy() && (dodge.n === 1 || pace.dodgeLineOk(time));
  if (!muted && actx) whoosh(0.35);
  if (voiced) {
    pace.dodgeLinePlayed(time);
    heroSay('hero.shanshen', { volume: 0.95, duckTo: 0.3 }); heroCaption('闪身步！', '#7ef0ff');
    floatText(scene, '闪身步！', player.x, 2.7, player.z, { color: '#7ef0ff', stroke: '#06283a', h: 0.72, life: 0.8 });
  }
  window.__dodges = dodge.n;
}
// 肥嘟嘟：袋鼠喊“你的胆子真是肥嘟嘟的！”，画面里的小怪全被吹成气球，一个接一个“啵”地爆掉
function tryFeidudu() { if (phase !== 'fight' || laughT > 0 || spitT < FAT_TIME) return false; feidudu(); return true; }
function feidudu() {
  spitT = 0; fats++; fatBannerT = 2.4;
  if (kanga) { kangaT = KANGA_TIME; kangaA = Math.atan2(player.aimX, player.aimZ) + Math.PI; kanga.visible = true; }   // 袋鼠从天上蹦下来，绕着奶蛙蹦两圈
  const el = $('#fatBanner'); show(el); el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop');
  heroCaption('你的胆子真是肥嘟嘟的！', '#ffb3e6');
  let len = 3;
  if (!muted && actx) {
    len = hasClip('hero.feidudu') ? heroSay('hero.feidudu', { volume: 1.7, duckTo: 0.12 }) : speak(FDD_SAY);
    if (hasClip('hero.feidudu.echo')) setTimeout(() => { if (!muted && phase === 'fight') heroSay('hero.feidudu.echo', { volume: 1.5, rate: 1.08, duckTo: 0.18, cut: false }); }, (len + 0.08) * 1000);
    boing(0.32);
  }
  pace.quiet(time, len + 0.9 + PACE.quietAfterFat); pace.log(time, '肥嘟嘟');
  let n = 0;
  for (let i = 0; i < E.n; i++) {
    const dx = E.x[i] - player.x, dz = E.z[i] - player.z;
    if (E.puff[i] > 0 || E.dance[i] > 0 || dx * dx + dz * dz > FAT_R * FAT_R) continue;
    E.puff[i] = 1.1 + Math.random() * 0.5; E.stun[i] = 0; E.swing[i] = 0; E.lolT[i] = 0; n++;
  }
  D.onFeidudu();
  ring(player.x, player.z, FAT_R, 0.7, '#ffb3e6'); shake = Math.max(shake, 0.25);
  floatText(scene, '肥嘟嘟！', player.x, 3.6, player.z, { color: '#ffb3e6', stroke: '#4a1038', h: 1.0, life: 1.4 });
  window.__fat = fats; window.__puffed = (window.__puffed || 0) + n;
}
function popEnemy(i) {
  const x = E.x[i], z = E.z[i];
  ring(x, z, 1.1, 0.3, '#ffd0f0');
  if (!muted && actx && time - popAt > 0.04) { popAt = time; pop(0.7 + Math.random() * 0.8, 0.28); }
  if (Math.random() < 0.3) floatText(scene, pick(['啵！', '嘟！', '肥嘟嘟']), x, 2.6, z, { color: '#ffb3e6', stroke: '#4a1038', h: 0.6, life: 0.7 });
  killEnemy(i, 'pop');
}
function introduce(key) {
  const M = MEME[key];
  let idx = -1, bd = 1e9;
  for (let i = 0; i < E.n; i++) if (TYPES[E.type[i]].key === key) { const q = (E.x[i] - player.x) ** 2 + (E.z[i] - player.z) ** 2; if (q < bd) { bd = q; idx = i; } }
  mobCaption(M.intro, M.color);
  if (idx >= 0) floatText(scene, M.intro.length > 9 ? M.pop : M.intro, E.x[idx], 2.6, E.z[idx], { color: M.color, stroke: '#1a1020', h: 0.78, life: 1.3 });
  if (!muted && actx && mobSay(key, 'attack', { pan: idx >= 0 ? panOf(E.x[idx] - player.x, E.z[idx] - player.z) : 0, dist: idx >= 0 ? Math.sqrt(bd) : 6, priority: 3 })) pace.mobPlayed(time, key, heatNow, key + ' 登场');
  else pace.log(time, key + ' 登场（没声音）');
}
function aimAhead() {
  const fx = Math.sin(camYaw), fz = Math.cos(camYaw);
  if (mouseHeld && document.pointerLockElement === canvas) return { x: fx, z: fz };
  let best = -1, bs = 1e9;
  for (let i = 0; i < E.n; i++) {
    const dx = E.x[i] - player.x, dz = E.z[i] - player.z, d = Math.hypot(dx, dz);
    if (d > 16 || d < 1e-3) continue;
    const c = (dx * fx + dz * fz) / d;
    const s = c > 0.55 ? d : d < 3.5 ? d + 30 : 1e9;
    if (s < bs) { bs = s; best = i; }
  }
  if (best < 0) { const sp = D.aimTarget(); return sp && (sp.x * fx + sp.z * fz) > 0.5 ? sp : null; }
  const dx = E.x[best] - player.x, dz = E.z[best] - player.z, d = Math.hypot(dx, dz) || 1;
  return { x: dx / d, z: dz / d };
}
// ---------- 变身大奶蛙，捧腹大笑。每个梦笑出来的东西不一样：蝴蝶 / 七十二个分身一起笑 / 龙卷风 ----------
function startLaugh(force = false) {
  if (!bigFrog || !(phase === 'fight' || (force && phase === 'levelup'))) return;
  if (!force && (laughT > 0 || laughCd > 0)) return;
  laughT = LAUGH_TIME; if (!force) laughCd = LAUGH_CD;
  pulseT = force ? 0.15 : 0.3; pulsesLeft = 5; pulseK = 0; bigFrog.pop = 0;
  bigFrog.group.position.set(player.x, player.y, player.z); bigFrog.group.visible = true;
  laughUI.showMeme(force ? '笑着复活！' : DREAMS[dream].laugh + '！'); laughUI.flash(); shake = Math.max(shake, 0.35);
  if (!muted) { playLaugh(actx, LAUGH_TIME + 0.4, force ? 'long' : 'short'); holdHero(LAUGH_TIME + 0.4); duckMusic(0.45, LAUGH_TIME); }
  pace.quiet(time, LAUGH_TIME + PACE.quietAfterLaugh); pace.log(time, force ? '笑着复活' : '捧腹大笑');
  ring(player.x, player.z, 3, 0.5);
  if (!force) floatText(scene, DREAMS[dream].laugh + '！', player.x, 3.4, player.z, { color: '#ffe36b', h: 1.1 });
  D.laughStart(force);
  window.__laughs = (window.__laughs || 0) + 1;
}
function finishLaugh() {
  const was = laughT > 0 || (bigFrog && bigFrog.group.visible);
  laughT = 0; pulsesLeft = 0;
  if (bigFrog) bigFrog.group.visible = false;
  laughUI.clear();
  if (was) { ring(player.x, player.z, 2.5, 0.4); D.laughEnd(); }
}
function endLaugh() { finishLaugh(); stopLaugh(); }
// 一圈全屏笑声：画面里的怪都挨一下并被震开；每个梦再加上自己的东西（dreamplay.js 的 laughPulse）
function bellyPulse() {
  ring(player.x, player.z, 16, 0.75);
  const dmg = (3 + layer * 0.35) * stats.dmgMul;
  for (let i = E.n - 1; i >= 0; i--) {
    const dx = E.x[i] - player.x, dz = E.z[i] - player.z, d = Math.hypot(dx, dz) || 0.001;
    if (d > 17 || E.dance[i] > 0) continue;
    if (dream === 1) { addLol(i, 1.2); continue; }   // 赛博西游：分身笑，全都笑到灵魂出窍
    hurtEnemy(i, dmg, dx / d * 1.6, dz / d * 1.6, dream === 2 ? 'sky' : undefined);
  }
  D.laughPulse(pulseK++);
  laughUI.rain(6); shake = Math.max(shake, 0.3);
  for (let k = 0; k < 4; k++) floatText(scene, pick(dream === 1 ? ['嘿', '嘿嘿', '嘿嘿嘿', 'HEI'] : dream === 2 ? ['呼', '呼——', '哈', '风！'] : ['哈', '哈哈', '哈哈哈', 'HA']), player.x + (Math.random() - 0.5) * 7, 1.6 + Math.random() * 1.5, player.z + (Math.random() - 0.5) * 4, { color: pick(HAHA_COLORS), h: 1, rise: 2.5 });
}
function shockwave(R, dmg) {
  ring(player.x, player.z, R);
  for (let i = E.n - 1; i >= 0; i--) {
    const dx = E.x[i] - player.x, dz = E.z[i] - player.z, d = Math.hypot(dx, dz);
    if (d < R) { const k = (R + 0.8 - d) / (d || 1); hurtEnemy(i, dmg, dx * k, dz * k); }
  }
  pluck(-12, 0.08, 0.4, 'sine');
}
function stepOrbs(dt, magnet, boost) {
  for (let i = O.n - 1; i >= 0; i--) {
    O.t[i] += dt;
    const dx = player.x - O.x[i], dz = player.z - O.z[i], d = Math.hypot(dx, dz);
    const pull = magnet * (1 + Math.min(1, (levels.stride || 0) * 0.15));
    if (d < 0.7 && Math.abs(O.y[i] - player.y) < 1.1) {   // 飘在半空的笑点（跑酷里障碍上面那串）要跳起来才吃得到
      xp += O.v[i] * boost; score += 5; O.n--;
      for (const a of [O.x, O.z, O.v, O.t, O.y]) a[i] = a[O.n];
      while (xp >= xpNeed(level)) { xp -= xpNeed(level); level++; pendingLevels++; }
    } else if (d < pull) { const s = (6 + 9 * (1 - d / pull) + (dream === 2 ? RUN_SPEED : 0)) * dt; O.x[i] += dx / d * s; O.z[i] += dz / d * s; }
    else if (dream === 2 && O.z[i] - player.z > 8) { O.n--; for (const a of [O.x, O.z, O.v, O.t, O.y]) a[i] = a[O.n]; }   // 跑过去没捡的笑点不要了
  }
}
function stepFx(dt) {
  for (let k = rings.length - 1; k >= 0; k--) {
    const r = rings[k]; r.t += dt;
    const f = r.t / r.life, s = r.r * 2 * (0.3 + f * 0.8);
    r.m.scale.set(s, 1, s); r.m.material.opacity = 1 - f;
    if (f >= 1) { scene.remove(r.m); r.m.material.dispose(); rings.splice(k, 1); }
  }
  if (barkT > 0) { barkT -= dt; if (barkT <= 0) show($('#bark'), false); }
}
async function openLevelUp() {
  phase = 'levelup';
  slowmo = 0.35;
  pluck(7, 0.06, 0.5, 'sine'); pluck(12, 0.05, 0.6, 'sine');
  await sleep(AUTO ? 10 : 380);
  slowmo = 0;
  if (!firstLevelSaid) { firstLevelSaid = true; bark('naiwa', '笑点攒够了！挑一个新的笑法！'); }
  while (pendingLevels > 0) {
    pendingLevels--;
    await chooseCards(`升到 ${level - pendingLevels} 级！挑一个笑法`);
    shockwave(5.5, 3);
  }
  if (phase === 'levelup') phase = 'fight';
}

// ---------- 画 ----------
function writeMatrix(arr, i, x, y, z, sx, sy, sz) {
  const o = i * 16;
  arr[o] = sx; arr[o + 1] = 0; arr[o + 2] = 0; arr[o + 3] = 0;
  arr[o + 4] = 0; arr[o + 5] = sy; arr[o + 6] = 0; arr[o + 7] = 0;
  arr[o + 8] = 0; arr[o + 9] = 0; arr[o + 10] = sz; arr[o + 11] = 0;
  arr[o + 12] = x; arr[o + 13] = y; arr[o + 14] = z; arr[o + 15] = 1;
}
const BR = new Float32Array(9);
function billRot() {
  camera.updateMatrixWorld();
  const e = camera.matrixWorld.elements;
  BR[0] = e[0]; BR[1] = e[1]; BR[2] = e[2]; BR[3] = e[4]; BR[4] = e[5]; BR[5] = e[6]; BR[6] = e[8]; BR[7] = e[9]; BR[8] = e[10];
}
function writeBill(arr, i, x, y, z, sx, sy) {
  const o = i * 16;
  arr[o] = BR[0] * sx; arr[o + 1] = BR[1] * sx; arr[o + 2] = BR[2] * sx; arr[o + 3] = 0;
  arr[o + 4] = BR[3] * sy; arr[o + 5] = BR[4] * sy; arr[o + 6] = BR[5] * sy; arr[o + 7] = 0;
  arr[o + 8] = BR[6]; arr[o + 9] = BR[7]; arr[o + 10] = BR[8]; arr[o + 11] = 0;
  arr[o + 12] = x; arr[o + 13] = y; arr[o + 14] = z; arr[o + 15] = 1;
}
const camTarget = new THREE.Vector3(), camLook = new THREE.Vector3();
let camDist = 1;
const kindMeshes = (kind) => minionMeshes[kind] || minionMeshes.penguin || minionMeshes.dog;
const cm4 = new THREE.Matrix4(), cq = new THREE.Quaternion(), ce = new THREE.Euler(0, 0, 0, 'YXZ'), cp = new THREE.Vector3(), cs = new THREE.Vector3();
// 往某种小怪的某一帧里加一只（dreamplay.js 画塔顶的企鹅、跳舞的企鹅也用它）
function addMinion(kind, fi, x, y, z, yaw, s, roll = 0, tilt = 0, col = ONE3, sy = 1, sx = 1) {
  if (!minionMeshes) return;
  const list = kindMeshes(kind), mm = list[Math.min(fi, list.length - 1)];
  if (mm.count >= mm.instanceMatrix.count) return;
  const n = mm.count++;
  cm4.compose(cp.set(x, y, z), cq.setFromEuler(ce.set(roll, yaw, tilt)), cs.set(s * sx, s * sy, s * sx));
  cm4.toArray(mm.instanceMatrix.array, n * 16);
  const c = mm.instanceColor.array; c[n * 3] = col[0]; c[n * 3 + 1] = col[1]; c[n * 3 + 2] = col[2];
}
const LOL_COL = [1.45, 1.3, 0.7];
// 3D 小怪：走路/攻击帧、面向目标、攻击时往前冲。跌倒侧躺抖、吹胀飘起、跳舞转圈、笑得前仰后合
function drawMinion(i, t) {
  let tx = player.x, tz = player.z;
  if (t.ai === 'cross') { tx = E.x[i] + E.vx[i]; tz = E.z[i]; }
  else if (t.ai !== 'chase' && Math.hypot(player.x - E.x[i], player.z - E.z[i]) > 2.4) { const g = D.goalFor(t.ai); if (g) { tx = g.x; tz = g.z; } }
  const stunned = E.stun[i] > 0, puffed = E.puff[i] > 0, dancing = E.dance[i] > 0, laughing = E.lolT[i] > 0;
  const yaw0 = Math.atan2(-(tz - E.z[i]), tx - E.x[i]);
  const sc = t.mh * (E.flash[i] > 0 ? 1.08 : 1), tint = t.tint || ONE3, f = E.flash[i] > 0 ? 2.4 : 1;
  if (dancing) {   // 高雅舞蹈：踮脚转圈，一颠一颠
    const ph = time * 1.7 + E.phase[i], hasDance = kindMeshes(t.minion).length > WALK_FRAMES * 2;
    addMinion(t.minion, hasDance ? danceIndex(ph) : 0, E.x[i], Math.abs(Math.sin(ph * Math.PI * 2)) * 0.12, E.z[i], time * 3.2 + E.phase[i], sc, Math.sin(ph * 6.28) * 0.08, 0, tint);
    return;
  }
  if (laughing) {   // 笑得前仰后合，浑身发抖，越来越黄
    const k = Math.min(1, E.lolT[i] / 1.15);
    // tilt（绕右手边那根轴）：正数往后仰、负数往前趴，来回摆就是前仰后合
    addMinion(t.minion, WALK_FRAMES + 3, E.x[i], Math.abs(Math.sin(time * 22 + E.phase[i])) * 0.12, E.z[i], yaw0, sc * (1 + k * 0.12), Math.sin(time * 40 + E.phase[i]) * 0.18, Math.sin(time * 9 + E.phase[i]) * 0.4, [LOL_COL[0] * tint[0], LOL_COL[1] * tint[1], LOL_COL[2] * tint[2] + (1 - k) * 0.3]);
    return;
  }
  if (stunned || puffed) {
    let y = 0, s = sc, roll = 0, sy = 1;
    if (puffed) { const p = Math.max(0, Math.min(1, 1 - E.puff[i] / 1.1)); s *= 1 + p * 1.4; sy = 1 - p * 0.15; y = p * p * 2.2 + Math.sin(time * 9 + E.phase[i]) * 0.06 * p; roll = Math.sin(time * 7 + E.phase[i]) * 0.25 * p; }
    else { roll = 1.25 + Math.sin(time * 30 + E.phase[i]) * 0.06; y = 0.12 * t.mh; }
    addMinion(t.minion, 1, E.x[i], y, E.z[i], yaw0, s, roll, 0, puffed ? [1.5, 0.9, 1.35] : tint, sy);
    return;
  }
  const fi = frameIndex(time * (WALK_RATE[t.minion] || 1.6) * (E.speed[i] / t.speed) * (E.slow[i] > 0 ? 0.45 : 1) * (1 - awk * 0.5) + E.phase[i], E.swing[i]);
  const lunge = E.swing[i] > 0 ? lungeOffset(t.minion, 1 - E.swing[i] / SWING_TIME) * t.mh : 0, c = Math.cos(yaw0), sn = Math.sin(yaw0);
  const col = E.slow[i] > 0 ? [tint[0] * f * 0.7, tint[1] * f * 0.95, tint[2] * f * 1.45] : awk > 0.3 ? [0.8 + 0.2 * (1 - awk), 0.8 + 0.2 * (1 - awk), 0.85] : [tint[0] * f, tint[1] * f, tint[2] * f];
  addMinion(t.minion, fi, E.x[i] + c * lunge, 0, E.z[i] - sn * lunge, yaw0, sc, awk > 0.5 ? Math.sin(time * 3 + E.phase[i]) * 0.08 * awk : 0, 0, col);
}
// 被打倒的小怪按各自的梗飞走；梦境版多几种：灵魂出窍（瘫倒）、掉下裂缝、被喷嚏吹飞、被龙卷风卷上天
function drawCorpses(dt) {
  for (let k = corpses.length - 1; k >= 0; k--) {
    const c = corpses[k]; c.t += dt;
    const life = c.style === 'fall' ? 1.8 : c.style === 'soul' ? 1.3 : c.style === 'sky' ? 1.4 : c.style === 'blow' ? 1.3 : c.kind === 'oiia' ? 1.1 : 0.85;
    if (c.t >= life || !minionMeshes) { corpses.splice(k, 1); continue; }
    const p = c.t / life, fade = p > 0.7 ? 1 - (p - 0.7) / 0.3 : 1;
    let y = Math.max(0, 5 * c.t - 7 * c.t * c.t), yaw = c.yaw, roll = 0, tilt = 0, sx = 1, sy = 1, sp = 3.4, fi = 2;
    if (c.style === 'fall') { c.vy -= 16 * dt; c.y += c.vy * dt; y = c.y; roll = c.spin * c.t * 3; tilt = c.t * 2; sp = 0.3; }
    else if (c.style === 'soul') { tilt = Math.min(1.5, c.t * 5); y = 0; sp = 0; }
    else if (c.style === 'sky') { y = c.t * c.t * 6 + c.t * 2; yaw += c.t * c.t * 30 + c.t * 10; sp = 1.5; c.ux = -Math.sin(c.t * 9) * 0.6; c.uz = -1.2; }
    else if (c.style === 'blow') { const dx = c.x - player.x, dz = c.z - player.z, d = Math.hypot(dx, dz) || 1; c.ux = dx / d; c.uz = dz / d; y = c.t * 5; roll = c.spin * c.t * 12; sp = 14; }
    else if (c.kind === 'oiia') { y = c.t * c.t * 3.6 + c.t * 0.8; yaw += c.t * c.t * 40 + c.t * 8; sy = 1 + p * 0.4; sp = 0.6; fi = WALK_FRAMES + 3; }
    else if (c.kind === 'banana' || c.kind === 'sheep') { roll = c.spin * c.t * 13; sp = 4.2; }
    else if (c.kind === 'penguin') {
      const q = Math.min(1, c.t * 9), t2 = c.t - 0.12;
      sy = 1 - q * 0.55 + (t2 > 0 ? Math.min(0.55, t2 * 4) : 0); sx = 1 + q * 0.35 - (t2 > 0 ? Math.min(0.35, t2 * 3) : 0);
      y = t2 > 0 ? Math.max(0, 6 * t2 - 9 * t2 * t2) : 0; sp = t2 > 0 ? 4 : 0; roll = t2 > 0 ? c.spin * t2 * 9 : 0;
    } else if (c.kind === 'elegantA' || c.kind === 'elegantB') { tilt = -Math.min(1.45, c.t * 4); yaw += c.t * 3; y = 0; sp = 1.2; }   // 优雅地向后倒下，还要转半圈
    else { tilt = Math.min(1.45, c.t * 7); y = 0; sp = 1.5; }
    c.x += c.ux * sp * dt; c.z += c.uz * sp * dt;
    const s = c.mh * fade;
    addMinion(c.kind, fi, c.x, y, c.z, yaw, s, roll, tilt, [c.tint[0] * 1.3, c.tint[1] * 1.3, c.tint[2] * 1.3], sy, sx);
  }
}
// 镜头：俯视跟着主角；第三人称跟在背后；第一人称在眼睛的位置；跑酷时固定在背后追着跑
function updateCamera(dt) {
  const live = phase === 'fight' || phase === 'levelup' || phase === 'paused' || phase === 'shift';
  const runner = live && dream === 2;
  const mode = runner ? 1 : live ? camMode : 0;
  const big = !!(bigFrog && bigFrog.group.visible);
  const fov = runner ? (portrait ? 70 : 55) : !portrait ? 45 : mode === 0 ? Math.min(72, Math.max(42, 2 * Math.atan(PORTRAIT_HALF_W / CAMP_D / camera.aspect) * 180 / Math.PI)) : 78;
  if (Math.abs(camera.fov - fov) > 0.01) { camera.fov += (fov - camera.fov) * Math.min(1, dt * 4); if (Math.abs(camera.fov - fov) < 0.2) camera.fov = fov; camera.updateProjectionMatrix(); }
  if (runner) {
    const pk = portrait ? 1.35 : 1, back = (7.2 + (boostT > 0 ? 1.6 : 0)) * pk;
    camTarget.set(player.x * 0.55, (4.0 + (big ? 1.2 : 0)) * pk + player.y * 0.5, player.z + back);
    camera.position.lerp(camTarget, Math.min(1, dt * 6));
    camera.position.z = Math.min(camera.position.z, player.z + back + 1.5);
    camLook.set(player.x * 0.7, 2.0 + player.y * 0.4, player.z - 9);   // 看得高一点，前面风车巨人的叶子才不会被画面切掉
    camera.lookAt(camLook);
    viewYaw = Math.PI;
  } else if (mode === 0) {
    const want = phase === 'title' || phase === 'over' ? 0.8 : laughT > 0 ? 0.78 : phase === 'shift' ? 0.85 : 1;
    camDist += (want - camDist) * Math.min(1, dt * 2.2);
    const C = portrait ? CAMP : CAM, menu = phase === 'title' || phase === 'over';
    const panX = menu && !portrait ? 5.5 : 0, panZ = menu && portrait ? -7.5 : 0;
    camTarget.set(player.x + panX + C.x * camDist, C.y * camDist + D.camDrop(), player.z + panZ + C.z * camDist);
    camera.position.lerp(camTarget, Math.min(1, dt * 7));
    camera.lookAt(camera.position.x - C.x * camDist, D.camDrop(), camera.position.z - C.z * camDist);
    viewYaw = Math.PI;
  } else {
    const fx = Math.sin(camYaw), fz = Math.cos(camYaw), rx = -fz, rz = fx;
    if (mode === 1 || big) {
      const pk = portrait ? 1.4 : 1, dist = (big ? 7.4 : 5.0) * pk, side = big ? 0 : portrait ? 0.5 : 0.95, h = (big ? 4.0 : 2.45) * pk - camPitch * 1.6;
      camTarget.set(player.x - fx * dist + rx * side, Math.max(0.8, h), player.z - fz * dist + rz * side);
      camera.position.lerp(camTarget, Math.min(1, dt * 9));
      camLook.set(player.x + fx * 4 + rx * side, (big ? 1.6 : 1.2) + camPitch * 2.6, player.z + fz * 4 + rz * side);
    } else {
      const bob = player.moving > 0.1 ? Math.abs(Math.sin(time * 11)) * 0.06 : 0;
      camTarget.set(player.x + fx * 0.15, 1.6 + bob, player.z + fz * 0.15);
      camera.position.copy(camTarget);
      camLook.set(camTarget.x + fx * Math.cos(camPitch) * 4, camTarget.y + Math.sin(camPitch) * 4, camTarget.z + fz * Math.cos(camPitch) * 4);
    }
    camera.lookAt(camLook);
    viewYaw = camYaw;
  }
  const k = runner ? 1 : FOG_K[mode] * (portrait && mode === 0 ? 1.3 : 1);
  scene.fog.near = world.fogNear * k; scene.fog.far = (runner ? world.fogFar : Math.min(world.fogFar, 40)) * k;
  if (shake > 0) {
    const sk = mode === 2 && !big ? 0.35 : 1;
    camera.position.x += (Math.random() - 0.5) * shake * 0.6 * sk; camera.position.y += (Math.random() - 0.5) * shake * 0.4 * sk;
    shake = Math.max(0, shake - dt * 1.8);
  }
  billRot();
}
function draw(dt) {
  updateCamera(dt);
  if (minionMeshes) for (const list of Object.values(minionMeshes)) for (const m of list) m.count = 0;
  const sm = shadowMesh.instanceMatrix.array;
  let sn = 0;
  for (let i = 0; i < E.n; i++) {
    const t = TYPES[E.type[i]];
    if (minionMeshes) drawMinion(i, t);
    const ss = t.r * 3;
    if (sn < MAX_E) writeMatrix(sm, sn++, E.x[i], 0.012, E.z[i], ss, 1, ss * 0.7);
  }
  drawCorpses(dt);
  D.draw(dt);
  // 一共一百多个实例网格（每种怪每一帧动作一个），这一帧没用到的藏起来，省掉空的绘制
  if (minionMeshes) for (const list of Object.values(minionMeshes)) for (const m of list) { m.visible = m.count > 0; if (m.count) { m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true; } }
  shadowMesh.count = sn; shadowMesh.instanceMatrix.needsUpdate = true;

  const hc = HAHA_GLYPHS.map(() => 0);
  const fp = camMode === 2 && dream !== 2 && (phase === 'fight' || phase === 'levelup' || phase === 'paused'), cpx = camera.position.x, cpz = camera.position.z;
  for (let i = 0; i < B.n; i++) {
    const g = B.glyph[i];
    let s = 0.95 * B.size[i];
    if (fp) s *= Math.max(0.2, Math.min(1, (Math.hypot(B.x[i] - cpx, B.z[i] - cpz) - 0.3) / 3.5));
    if (HAHA_GLYPHS[g].fx === 'gust') s *= 1 + Math.sin(time * 30 + i) * 0.12;
    writeBill(hahaMeshes[g].instanceMatrix.array, hc[g]++, B.x[i], fp ? 1.35 : B.y[i], B.z[i], s * 1.13, s);
  }
  const on = phase === 'fight' || phase === 'levelup' ? ([0, 2, 3, 4][stats.orbit] || 0) : 0;
  for (let k = 0; k < on; k++) {
    const a = time * (stats.orbit >= 3 ? 3.6 : 2.6) + k / on * Math.PI * 2;
    writeBill(hahaMeshes[0].instanceMatrix.array, hc[0]++, player.x + Math.sin(a) * 2.3, 1.15 + player.y, player.z + Math.cos(a) * 2.3, 1.0, 0.9);
  }
  hahaMeshes.forEach((m, g) => { m.count = hc[g]; m.instanceMatrix.needsUpdate = true; });
  const em = ebMesh.instanceMatrix.array;
  for (let k = 0; k < EB.n; k++) { const s = 0.85 + Math.sin(time * 14 + k) * 0.12; writeBill(em, k, EB.x[k], 1.0 + Math.sin(time * 6 + k) * 0.2, EB.z[k], s * noteTex.aspect * 0.6, s); }
  ebMesh.count = EB.n; ebMesh.instanceMatrix.needsUpdate = true;
  const fm = orbMesh.instanceMatrix.array;
  for (let i = 0; i < O.n; i++) { const s = 0.5 + Math.sin(O.t[i] * 5) * 0.1; writeBill(fm, i, O.x[i], 0.45 + O.y[i] + Math.sin(O.t[i] * 3) * 0.12, O.z[i], s, s); }
  orbMesh.count = O.n; orbMesh.instanceMatrix.needsUpdate = true;

  // 主角：用代码做的动作。走路一蹦一蹦，跑酷时一颠一颠往前冲，跳起来缩成一团
  if (hero) {
    const inner = hero.userData.inner, mv = player.moving, walking = mv > 0.1 && phase === 'fight';
    const hop = Math.abs(Math.sin(time * (dream === 2 ? 14 : 11)));
    hero.position.set(player.x, player.y + (mv > 0.1 && player.y <= 0 ? hop * 0.14 : 0), player.z);
    const want = boostT > 0 ? 0 : walking ? Math.atan2(player.mvx, player.mvz) : Math.atan2(player.aimX, player.aimZ);   // 开船：面朝后（+Z），倒着飞
    let dr = want - hero.rotation.y; dr = Math.atan2(Math.sin(dr), Math.cos(dr));
    hero.rotation.y += dr * Math.min(1, dt * (walking ? 22 : 15));
    const lean = Math.max(-0.28, Math.min(0.28, dr * 0.45));
    inner.rotation.z = (mv > 0.1 ? Math.sin(time * 11) * 0.07 : 0) - lean + (dodge.t > 0 ? -dodge.side * 0.35 : 0) + (stumbleT > 0 ? Math.sin(time * 30) * 0.3 : 0);
    inner.rotation.x = player.y > 0.05 ? -0.5 + player.vy * 0.04 : mv > 0.1 ? 0.08 + (dodge.t > 0 ? 0.15 : 0) + (dream === 2 ? 0.12 : 0) : 0;
    const breathe = 1 + Math.sin(time * 2.4) * 0.015, tuck = player.y > 0.05 ? 0.85 : 1;
    inner.scale.set((1 + (mv > 0.1 ? (1 - hop) * 0.04 : 0)) * heroPuff, (breathe - (mv > 0.1 ? (1 - hop) * 0.05 : 0)) * tuck * heroPuff, heroPuff);   // heroPuff：打喷嚏前憋气鼓起来
    const firstPerson = camMode === 2 && dream !== 2 && (phase === 'fight' || phase === 'levelup' || phase === 'paused');
    hero.visible = !firstPerson && !(player.hurtCd > 0.25 && dodge.t <= 0 && Math.floor(time * 20) % 2) && !(bigFrog && bigFrog.group.visible) && D.heroVisible();
  }
  const ghostA = camMode === 1 ? 0.22 : 0.45;
  for (const gh of ghosts) {
    if (gh.t <= 0) continue;
    gh.t -= dt; gh.g.visible = gh.t > 0;
    gh.g.traverse((o) => { if (o.isMesh) o.material.opacity = Math.max(0, gh.t / 0.36) * ghostA; });
  }
  if (laughT > 0 && phase !== 'fight' && phase !== 'levelup' && phase !== 'paused') endLaugh();
  if (bigFrog && bigFrog.group.visible) {
    const p = bigFrog.pop = Math.min(1, (bigFrog.pop || 0) + dt * 3.2), pp = p < 1 ? (0.35 + 0.65 * p) * (1 + Math.sin(p * Math.PI) * 0.3) : 1;
    bigFrog.group.position.set(player.x, player.y + Math.abs(Math.sin(time * 15)) * 0.08, player.z);
    bigFrog.group.rotation.y = Math.sin(time * 7.5) * 0.16;   // 正面朝 +Z，就是朝着镜头（俯视和跑酷的镜头都在 +Z 那边）
    bigFrog.inner.scale.setScalar(pp);
    bigFrog.inner.rotation.x = -0.08 + Math.sin(time * 15) * 0.03;
    bigFrogPose(bigFrog.rig, time, 1);
  }
  // 肥嘟嘟袋鼠：先从天上砸下来，然后绕着奶蛙一蹦一蹦转两圈（落地时压扁、起跳时拉长），最后蹦上天走掉
  if (kanga && kangaT > 0) {
    kangaT -= dt;
    const t = KANGA_TIME - kangaT, a = kangaA + t * 2.6, r = 3.2;
    const hp = (t * 2.4) % 1, hop = Math.sin(hp * Math.PI) * 1.4;
    const drop = t < 0.45 ? (1 - t / 0.45) ** 2 * 9 : 0, leave = kangaT < 0.45 ? (0.45 - kangaT) ** 2 * 60 : 0;
    kanga.position.set(player.x + Math.sin(a) * r, player.y + hop + drop + leave, player.z + Math.cos(a) * r);
    kanga.rotation.y = a + Math.PI / 2;   // 朝着蹦的方向
    const sq = hp < 0.1 || hp > 0.9 ? 0.72 : 1 + Math.sin(hp * Math.PI) * 0.12;
    kanga.userData.inner.scale.set(1 / Math.sqrt(sq), sq, 1 / Math.sqrt(sq));
    kanga.userData.inner.rotation.x = Math.sin(hp * Math.PI * 2) * 0.25;
    if (t > 0.45 && hp < (dt * 2.4) && phase === 'fight') { ring(kanga.position.x, kanga.position.z, 1.6, 0.35, '#ffe14d'); if (!muted && actx) boing(0.12); }
    if (kangaT <= 0) kanga.visible = false;
  }
  heroLight.position.set(player.x, 2.6 + player.y, player.z + 1.2);
  heroLight.intensity = dream === 1 ? 20 : dream === 0 ? 6 : 8;
  heroGlow.position.x = player.x; heroGlow.position.z = player.z;

  updateFloats(scene, dt, camera);
  // 冷场：画面变灰
  const f = Math.round(awk * 20) / 20;
  if (f !== awkFilter) { awkFilter = f; canvas.style.filter = f > 0 ? `grayscale(${f}) brightness(${1 - f * 0.15})` : ''; }
  renderer.render(scene, camera);
  drawUI(dt);
}
function drawUI(dt) {
  const inFight = phase === 'fight' || phase === 'levelup';
  show(laughBtn, inFight);
  if (inFight) {
    laughBtn.disabled = laughCd > 0 || laughT > 0 || !bigFrog;
    const lbl = laughT > 0 ? `${DREAMS[dream].laugh}<small>捧腹大笑中</small>` : laughCd > 0 ? `变身<small>${Math.ceil(laughCd)} 秒</small>` : `变身<small>${DREAMS[dream].laugh} · V</small>`;
    if (lbl !== laughLabel) { laughLabel = lbl; laughBtn.innerHTML = lbl; }
  }
  if (laughT > 0) { if (phase === 'fight') laughUI.showMeme(); else laughUI.hideMeme(); }
  const runner = inFight && dream === 2;
  show(jumpBtn, runner); show(boostBtn, runner);
  ui.classList.toggle('runner', runner);   // 跑酷时喊话挪到下面，别挡住前面的风车巨人
  if (runner) { boostBtn.disabled = boostCd > 0; const s = boostCd > 0 ? `${Math.ceil(boostCd)} 秒` : 'B'; if (boostBtn.lastChild.textContent !== s) boostBtn.lastChild.textContent = s; }
  show($('#xhair'), camMode > 0 && dream !== 2 && phase === 'fight');
  if (document.pointerLockElement && (phase !== 'fight' || dream === 2)) document.exitPointerLock();
  if (capHeroT > 0) { capHeroT -= dt; if (capHeroT <= 0) show($('#capHero'), false); }
  if (capMobT > 0) { capMobT -= dt; if (capMobT <= 0) show($('#capMob'), false); }
  if (comboT > 0) { comboT -= dt; if (comboT <= 0) { combo = 0; show($('#combo'), false); } }
  if (fatBannerT > 0) { fatBannerT -= dt; if (fatBannerT <= 0) show($('#fatBanner'), false); }
  show(fatBtn, inFight);
  if (inFight) {
    const f = Math.min(1, spitT / FAT_TIME), ready = f >= 1 && laughT <= 0 && phase === 'fight';
    fatBtn.style.setProperty('--p', f.toFixed(3));
    fatBtn.classList.toggle('ready', ready); fatBtn.disabled = !ready;
    const s = ready ? '点我！· F' : `${Math.floor(f * 100)}%`;
    if (fatBtn.lastChild.textContent !== s) fatBtn.lastChild.textContent = s;
  }
  if (inFight) {
    $('#bars .hpbar i').style.width = (player.hp / maxHp() * 100) + '%';
    $('#bars .xpbar i').style.width = (xp / xpNeed(level) * 100) + '%';
    $('#bars .lv').textContent = `${level} 级`;
    const left = Math.max(0, Math.ceil(DREAM_LEN - dreamTime));
    const sp = $('#actinfo span'), txt = `${left} 秒后换梦 · 笑点 ${score}`;
    if (sp.textContent !== txt) sp.textContent = txt;
    const gl = $('#actinfo .goal'), goal = D.objective();
    if (gl.textContent !== goal) gl.textContent = goal;
    $('#actinfo').classList.toggle('hurry', left <= 5);
    const bb = D.bossBar();
    show($('#boss'), !!bb);
    if (bb) { $('#boss b').textContent = bb.label; $('#boss i').style.width = Math.max(0, bb.f * 100) + '%'; }
    const mt = D.meter();
    show($('#calm'), !!mt);
    if (mt) { $('#calm b').textContent = mt.label; $('#calm i').style.width = Math.max(0, mt.f * 100) + '%'; $('#calm').classList.toggle('hit', !!mt.hit); }
  }
}

// ---------- 暂停、声音 ----------
let pausedFrom = null;
$('#tools .b-pause').onclick = () => { if (phase !== 'fight') return; pausedFrom = phase; phase = 'paused'; stopLaugh(); stopSpeak(); show($('#pause')); };
$('#pause .b-resume').onclick = () => { show($('#pause'), false); phase = pausedFrom || 'fight'; pausedFrom = null; };
$('#pause .b-restart').onclick = () => { show($('#pause'), false); pausedFrom = null; show($('#boss'), false); show($('#calm'), false); D.teardown(); startRun(true); };
$('#tools .b-mute').onclick = (e) => { muted = !muted; e.target.textContent = muted ? '声音 关' : '声音 开'; if (muted) { stopLaugh(); stopSpeak(); playMusic(null); } else if (phase === 'fight') playMusic(['butterfly', 'cyber', 'quixote'][dream]); };

// ---------- 开始画面 ----------
let titleReady = false;
$('#title').onclick = () => { if (!titleReady) return; titleReady = false; initAudio(); startRun(); };

// ---------- 梦里的特殊玩法（dreamplay.js）：把它要用到的东西都交给它 ----------
const G = {
  scene, camera, E, B, O, EB, player, TYPES, T, MEME, DREAM_LEN, ROAD_HALF, MAX_EB, models, AUTO,
  get time() { return time; }, get dreamTime() { return dreamTime; }, get layer() { return layer; }, get dream() { return dream; },
  // 塔、白骨精、风车巨人的血按奶蛙的等级加厚（奶蛙升级后伤害涨得比层数快，不加的话后面几层两三秒就打完了）
  get power() { return 1 + (level - 1) * 0.08; },
  get phase() { return phase; }, get muted() { return muted || !actx; }, get actx() { return actx; }, get laughT() { return laughT; },
  get hero() { return hero; }, get boostT() { return boostT; }, get portrait() { return portrait; }, get runV() { return runV; },
  setHeroPuff(v) { heroPuff = v; },
  addShake(v) { shake = Math.max(shake, v); }, spawnEnemy, spawnAt, hurtEnemy, killEnemy, hurtPlayer, stumble, dropOrbs, addLol, ring,
  floatText: (text, x, y, z, o) => floatText(scene, text, x, y, z, o), heroCaption, mobCaption, bark, say, writeBill, addMinion, shootFrom,
  playHaChorus: (n, o) => (!muted && actx ? playHaChorus(actx, n, o) : false), motif: (n, v) => (!muted ? motif(n, v) : 0), playMusic: (n) => { if (!muted) playMusic(n); },
  sfx: { whoosh: (v) => !muted && whoosh(v), pop: (a, b) => !muted && pop(a, b), boing: (v) => !muted && boing(v), boom: (v) => !muted && boom(v), tone: (...a) => !muted && tone(...a) },
  pace, endDream, nearestEnemy, floorMat: world.floor.material, addScore(v) { score += v; dreamScore += v; }, loseHalf() { const l = Math.floor(dreamScore / 2); score -= l; dreamScore -= l; return l; },
  joy() { lastJoyAt = time; }, setCombo() { bumpCombo(); }, glyphHei: GLYPH_HEI, glyphHu: GLYPH_HU, worldVisible: (on) => world.setVisible(on),
  flash() { laughUI.flash(); }, shiftFx: $('#shiftFx'), stage, cloneHero: () => (hero ? cloneModel(hero) : null), heroModel: () => hero, cloneModel,
  pushOutWorld: (p, r) => world.pushOut(p, r),
  get stats() { return stats; },
};
const D = makeDreams(G);

// ---------- 加载 ----------
// 配角模型加载失败也不要紧（那个角色不出场就是了），所以单独接住错误
const optional = (p, what) => p.catch((e) => { console.warn(what + '没加载上', e); return null; });
Promise.all([loadModel('fantasy', 1.9), optional(loadModel('wedding-dress', 1.8), '村姑'), optional(loadModel('rabbit', 1.75), '老太太'),
  optional(loader.loadAsync('assets/models/tang-niulai.glb'), '唐僧'), minionsReady, bigReady,
  optional(loadModel('kangaroo', 2.1), '袋鼠'), optional(loadModel('duck', 1.25), '小黄鸭'), optional(loadModel('possum', 1.45), '负鼠'), optional(loadModel('whale', 1.5), '鲸鱼女仆'),
  optional(loadModel('fantasy-lo', 1.9), '分身用的奶蛙')]).then(([h, bride, rabbit, tang, , , kangaroo, duck, possum, whale, heroLo]) => {
  hero = h; scene.add(hero);
  models.bride = bride; models.rabbit = rabbit; models.tang = tang && tang.scene; models.duck = duck; models.possum = possum; models.whale = whale; models.heroLo = heroLo;
  if (kangaroo) { kanga = kangaroo; kanga.visible = false; kanga.traverse((o) => { if (o.isMesh) o.frustumCulled = false; }); scene.add(kanga); }
  try { makeGhosts(); } catch (e) { console.warn('闪身步残影没做出来', e); }
  D.init();
  titleReady = true;
  $('#title .go').textContent = '点一下，睡着';
  if (AUTO) $('#title').click();
}).catch((e) => { $('#title .go').textContent = '加载失败，请刷新：' + e.message; console.error(e); });

// 给自动测试用的接口
window.__game = {
  E, B, O, player, D,
  get phase() { return phase; }, get level() { return level; }, get kills() { return kills; }, get dream() { return dream; }, get layer() { return layer; },
  get dreamTime() { return dreamTime; }, set dreamTime(v) { dreamTime = v; }, get time() { return time; }, get score() { return score; }, get awk() { return awk; },
  startLaugh, get laughT() { return laughT; }, get laughCd() { return laughCd; }, set laughCd(v) { laughCd = v; }, get revives() { return revives; },
  setCamMode, get camMode() { return camMode; }, get spitT() { return spitT; }, set spitT(v) { spitT = v; }, get fats() { return fats; },
  get combo() { return combo; }, get bestCombo() { return bestCombo; }, get corpses() { return corpses.length; }, T, tryFeidudu, tryBoost, endDream,
  get minionKinds() { return minionMeshes ? Object.keys(minionMeshes) : []; }, get gags() { return pace.events; }, get portrait() { return portrait; },
  jump() { jumpWant = true; },
};

// ---------- 主循环 ----------
world.setDream(START_DREAM, 0, 0);
let last = performance.now(), frames = 0, fpsT = last, slowSecs = 0;
function loop(now) {
  requestAnimationFrame(loop);
  let dt = Math.min(1 / 30, (now - last) / 1000); last = now;
  if (slowmo > 0) { if (phase !== 'levelup') slowmo -= dt; dt *= 0.25; }
  if (phase !== 'levelup' && phase !== 'paused' && phase !== 'intro' && phase !== 'over' && phase !== 'wake') step(dt);
  else if (phase === 'levelup' && slowmo > 0) step(dt);
  else stepFx(dt);
  draw(dt);
  frames++;
  if (now - fpsT >= 1000) {
    window.__fps = frames * 1000 / (now - fpsT); frames = 0; fpsT = now;
    if (phase === 'fight' && window.__fps < 40) { slowSecs++; if (slowSecs >= 2 && pixelCap > 1 && renderer.getPixelRatio() > 1) { pixelCap = Math.max(1, renderer.getPixelRatio() - 0.25); layout(); slowSecs = 0; } } else slowSecs = 0;
    if (DEBUG) { const info = renderer.info.render; $('#fps').textContent = `${window.__fps.toFixed(0)} 帧 · 怪 ${E.n} · 字 ${B.n} · ${(info.triangles / 1000).toFixed(0)}k 面 · ${info.calls} 次绘制 · 梦 ${dream} 层 ${layer}`; }
  }
}
requestAnimationFrame(loop);

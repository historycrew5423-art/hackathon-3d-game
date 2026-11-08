// 三个梦里各自的特殊玩法（game.js 管通用的：走路、喷字、小怪、捧腹大笑、肥嘟嘟、界面）：
//   0 庄周梦蝶（塔防）：中间一张课桌，奶蛙趴着睡觉、吹着鼻涕泡；四周几座“高雅塔”，塔顶站着高雅企鹅，
//     塔会射音符、会派企鹅去戳鼻涕泡（戳破了就被吵醒，丢一半笑点）。捧腹大笑放出一群蝴蝶去打塔，塔倒了企鹅就跳华尔兹。
//   1 赛博西游·三打白骨精（护送）：唐僧是牛来，跟在奶蛙身后，怪一靠近就喊“妈妈”；怪碰多了，他就被抓走（大师兄，师父被妖怪抓走了！）。
//     白骨精先后变成村姑、老太太、老头（看着和全息良民一模一样，偶尔闪一下骷髅），打穿她三次；喷错良民，唐僧念紧箍咒（还是“妈妈”）。
//     一进梦就七十二变：一群小奶蛙跟着一起喷“嘿”，打中的怪被传染着笑，笑到灵魂出窍。
//   2 堂吉诃奶蛙（跑酷）：长了腿的风车巨人在前面跑，奶蛙一路追，路上有干草垛、木栅栏、滚过来的酒桶、横穿马路的羊群；
//     喷“呼”吹龙卷风；追得太近会被风车叶子挑起来转一圈再甩出去（《堂吉诃德》里最有名的那一幕）。
//   换梦的过场：打喷嚏（庄周→西游）、笑到地震地面裂开掉下去（西游→堂吉诃德）、风车扇一大口风（堂吉诃德→庄周）。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Rig, WALK_FRAMES, danceIndex } from './minions.js?v=20261108a';
import { textTexture, pick } from './naiwa.js?v=20261108a';
import { LINES } from './dialogue.js?v=20261108a';
import { canvasTex, ROAD_HALF } from './world.js?v=20261108a';

const lam = (color, emissive = 0) => new THREE.MeshLambertMaterial({ color, emissive });
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function flat(scene, geo, mat, max) {
  const m = new THREE.InstancedMesh(geo, mat, max); m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); m.count = 0; m.frustumCulled = false; scene.add(m); return m;
}
function merged(list) {
  const groups = {};
  for (const [mat, geo] of list) (groups[mat.uuid] ||= { mat, geos: [] }).geos.push(geo.index ? geo.toNonIndexed() : geo);
  const g = new THREE.Group();
  for (const { mat, geos } of Object.values(groups)) g.add(new THREE.Mesh(mergeGeometries(geos), mat));
  return g;
}
const at = (geo, x, y, z, rx = 0, ry = 0, rz = 0) => { geo.rotateX(rx); geo.rotateY(ry); geo.rotateZ(rz); geo.translate(x, y, z); return geo; };
const m4 = new THREE.Matrix4(), q4 = new THREE.Quaternion(), e4 = new THREE.Euler(0, 0, 0, 'YXZ'), p4 = new THREE.Vector3(), s4 = new THREE.Vector3();
function setInst(mesh, k, x, y, z, rx, ry, rz, sx, sy = sx, sz = sx) {
  m4.compose(p4.set(x, y, z), q4.setFromEuler(e4.set(rx, ry, rz)), s4.set(sx, sy, sz)); m4.toArray(mesh.instanceMatrix.array, k * 16);
}

// 蝴蝶的一片翅膀：白底黑边带白点，实例颜色染成橙、蓝、粉、黄、紫
const wingTex = canvasTex(128, (g, S) => {
  g.translate(4, S / 2);
  g.fillStyle = '#ffffff'; g.strokeStyle = '#1c1820'; g.lineWidth = 7;
  g.beginPath(); g.moveTo(0, -4); g.bezierCurveTo(30, -70, 120, -66, 118, -18); g.bezierCurveTo(116, 4, 60, 6, 0, 0); g.fill(); g.stroke();
  g.beginPath(); g.moveTo(0, 2); g.bezierCurveTo(60, 8, 96, 30, 82, 54); g.bezierCurveTo(66, 70, 18, 40, 0, 6); g.fill(); g.stroke();
  g.fillStyle = '#1c1820'; for (const [x, y, r] of [[100, -30, 6], [86, -46, 4], [62, 40, 5]]) { g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); }
  g.strokeStyle = 'rgba(28,24,32,.5)'; g.lineWidth = 3; g.beginPath(); g.moveTo(0, 0); g.lineTo(90, -40); g.moveTo(0, 0); g.lineTo(70, 30); g.stroke();
});
const BF_COLORS = [[1, 0.62, 0.2], [0.35, 0.7, 1], [1, 0.55, 0.85], [1, 0.9, 0.3], [0.7, 0.5, 1], [0.4, 1, 0.7]];
// 灵魂：白色的小幽灵，笑得眯着眼、吐舌头（叠加混合，发光）
const soulTex = canvasTex(128, (g, S) => {
  const r = g.createRadialGradient(64, 54, 6, 64, 60, 60); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.7, 'rgba(220,240,255,.85)'); r.addColorStop(1, 'rgba(200,230,255,0)');
  g.fillStyle = r; g.beginPath(); g.moveTo(24, 70); g.bezierCurveTo(20, 10, 108, 10, 104, 70); g.lineTo(104, 112); g.lineTo(88, 98); g.lineTo(76, 116); g.lineTo(64, 98); g.lineTo(52, 116); g.lineTo(40, 98); g.lineTo(24, 112); g.closePath(); g.fill();
  g.strokeStyle = '#22224a'; g.lineWidth = 5; g.lineCap = 'round';
  g.beginPath(); g.moveTo(42, 52); g.lineTo(54, 58); g.lineTo(42, 64); g.moveTo(86, 52); g.lineTo(74, 58); g.lineTo(86, 64); g.stroke();   // > < 眼睛
  g.fillStyle = '#22224a'; g.beginPath(); g.arc(64, 76, 12, 0, Math.PI); g.fill();
  g.fillStyle = '#ff7aa8'; g.beginPath(); g.arc(64, 84, 6, 0, Math.PI); g.fill();
});
// 裂缝：从中间往外炸开的黑色裂纹，边上一圈品红色的光
const crackTex = canvasTex(1024, (g, S) => {
  g.translate(S / 2, S / 2);
  let seed = 3; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let k = 0; k < 16; k++) {
    let x = 0, y = 0, a = k / 16 * Math.PI * 2 + rnd() * 0.3;
    const pts = [[0, 0]];
    for (let j = 0; j < 14; j++) { a += (rnd() - 0.5) * 0.7; const l = 22 + rnd() * 26; x += Math.cos(a) * l; y += Math.sin(a) * l; pts.push([x, y]); }
    for (const [w, c, b] of [[18, 'rgba(255,60,200,.5)', 24], [7, '#08040e', 0]]) {
      g.lineWidth = w; g.strokeStyle = c; g.shadowColor = '#ff3cc8'; g.shadowBlur = b; g.lineJoin = 'round';
      g.beginPath(); pts.forEach(([px, py], i) => (i ? g.lineTo(px, py) : g.moveTo(px, py))); g.stroke();
    }
  }
});
// 龙卷风：一圈一圈的白色旋涡（锥形，转着往上走）
const swirlTex = canvasTex(256, (g, S) => {
  g.clearRect(0, 0, S, S);
  for (let k = 0; k < 7; k++) { g.strokeStyle = `rgba(240,248,255,${0.25 + (k % 2) * 0.35})`; g.lineWidth = 10 + (k % 3) * 6; g.beginPath(); g.moveTo(0, k * 40 + 10); g.bezierCurveTo(S * 0.3, k * 40 - 20, S * 0.7, k * 40 + 50, S, k * 40 + 10); g.stroke(); }
}, true);

export function makeDreams(G) {
  const { scene, E, B, O, EB, player, TYPES, T } = G;
  let cur = -1, layer = 1, inited = false;
  const st = {};   // 每个梦自己的计数，setup 时清零

  // ============ 庄周梦蝶 ============
  const desk = new THREE.Group(); scene.add(desk); desk.visible = false;
  {
    const wood = lam(0x9a6a3e), metal = lam(0x6a6e78), paper = lam(0xfbf6ea, 0x302a20), red = lam(0xc0392b);
    desk.add(merged([
      [wood, at(new THREE.BoxGeometry(1.7, 0.07, 0.95), 0, 0.78, 0)],
      ...[[-0.75, -0.4], [0.75, -0.4], [-0.75, 0.4], [0.75, 0.4]].map(([x, z]) => [metal, at(new THREE.CylinderGeometry(0.03, 0.03, 0.76, 6), x, 0.38, z)]),
      // 椅子推到后面（奶蛙是站着趴在桌上睡的）
      [wood, at(new THREE.BoxGeometry(0.75, 0.05, 0.6), 0, 0.46, 1.62)], [wood, at(new THREE.BoxGeometry(0.75, 0.6, 0.05), 0, 0.78, 1.93)],
      ...[[-0.33, 1.37], [0.33, 1.37], [-0.33, 1.87], [0.33, 1.87]].map(([x, z]) => [metal, at(new THREE.CylinderGeometry(0.025, 0.025, 0.46, 6), x, 0.23, z)]),
      [paper, at(new THREE.BoxGeometry(0.5, 0.02, 0.36), -0.42, 0.83, -0.12, 0, 0.3, 0.12)], [paper, at(new THREE.BoxGeometry(0.5, 0.02, 0.36), 0.04, 0.83, -0.2, 0, 0.3, -0.12)],
      [red, at(new THREE.CylinderGeometry(0.015, 0.015, 0.4, 6), 0.55, 0.83, 0.15, 0, 0, Math.PI / 2)],
    ]));
    const label = textTexture('语文', { color: '#c0392b', stroke: '#fbf6ea', px: 64 });
    const lp = new THREE.Mesh(new THREE.PlaneGeometry(0.22 * label.aspect, 0.22), new THREE.MeshBasicMaterial({ map: label.tex, transparent: true }));
    lp.rotation.x = -Math.PI / 2; lp.rotation.z = -0.3; lp.position.set(-0.3, 0.85, -0.15); desk.add(lp);
  }
  let sleeper = null;
  const bubble = new THREE.Mesh(new THREE.SphereGeometry(0.3, 18, 14), new THREE.MeshLambertMaterial({ color: 0xbfe8ff, emissive: 0x204050, transparent: true, opacity: 0.45, depthWrite: false }));
  const bubbleHi = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  bubble.add(bubbleHi); bubbleHi.position.set(-0.12, 0.14, 0.12); desk.add(bubble);
  const DESK_R = 1.25;
  // 高雅塔：石座、大理石柱、金色柱头、塔顶一个大喇叭留声机，柱子上挂着“高雅”的牌子
  const towerProto = (() => {
    const stone = lam(0xbdb6a8), marble = lam(0xf0ece4, 0x1a1a1a), gold = lam(0xd9a441, 0x3a2508), brass = lam(0xc8962c, 0x2a1a04), dark = lam(0x2a2430);
    const g = merged([
      [stone, at(new THREE.BoxGeometry(2.2, 0.5, 2.2), 0, 0.25, 0)], [stone, at(new THREE.BoxGeometry(1.8, 0.3, 1.8), 0, 0.65, 0)],
      [marble, at(new THREE.CylinderGeometry(0.7, 0.8, 3.0, 16), 0, 2.3, 0)],
      [gold, at(new THREE.BoxGeometry(1.8, 0.35, 1.8), 0, 3.95, 0)], [gold, at(new THREE.TorusGeometry(0.74, 0.06, 6, 20), 0, 0.95, 0, Math.PI / 2)],
      [marble, at(new THREE.CylinderGeometry(1.0, 1.0, 0.18, 18), 0, 4.2, 0)],
      [brass, at(new THREE.ConeGeometry(0.62, 1.2, 16, 1, true), 0.75, 4.9, 0, 0, 0, -2.2)], [dark, at(new THREE.CylinderGeometry(0.07, 0.07, 0.8, 6), 0.35, 4.55, 0, 0, 0, -0.7)],
      [dark, at(new THREE.BoxGeometry(0.5, 0.25, 0.5), -0.45, 4.42, 0.3)],
    ]);
    const sign = textTexture('高雅', { color: '#ffe9a8', stroke: '#5a3a10', px: 80 });
    const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.42 * sign.aspect, 0.42), new THREE.MeshBasicMaterial({ map: sign.tex, transparent: true, side: THREE.DoubleSide }));
    pl.position.set(0, 2.5, 0.82); g.add(pl);
    const pl2 = pl.clone(); pl2.position.set(0, 2.5, -0.82); pl2.rotation.y = Math.PI; g.add(pl2);
    return g;
  })();
  const towers = [], TOWER_S = 0.78, HPY = 6.0 * 0.78 + 0.3;   // 塔整体缩小一点（原来 5.5 米高，离镜头近的那座会挡住半个画面）；HPY 是血条的高度
  const hpBack = flat(scene, new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ color: 0x2a1a20, depthWrite: false, depthTest: false, transparent: true, opacity: 0.8 }), 8);
  const hpFill = flat(scene, new THREE.PlaneGeometry(1, 1).translate(0.5, 0, 0), new THREE.MeshBasicMaterial({ color: 0xff7ac8, depthWrite: false, depthTest: false }), 8);
  hpBack.renderOrder = 18; hpFill.renderOrder = 19;
  const dancers = [];   // 塔倒了以后，塔顶那只企鹅跳下来跳舞
  // 蝴蝶
  const MAX_BF = 320;
  const BF = { n: 0, x: new Float32Array(MAX_BF), y: new Float32Array(MAX_BF), z: new Float32Array(MAX_BF), vx: new Float32Array(MAX_BF), vy: new Float32Array(MAX_BF), vz: new Float32Array(MAX_BF), life: new Float32Array(MAX_BF), tgt: new Int32Array(MAX_BF), col: new Uint8Array(MAX_BF) };
  const BF_A = [BF.x, BF.y, BF.z, BF.vx, BF.vy, BF.vz, BF.life, BF.tgt, BF.col];
  const wingMat = new THREE.MeshBasicMaterial({ map: wingTex, transparent: true, side: THREE.DoubleSide, depthWrite: false, alphaTest: 0.1 });
  const wingR = flat(scene, new THREE.PlaneGeometry(0.5, 0.5).rotateX(-Math.PI / 2).translate(0.25, 0, 0), wingMat, MAX_BF);
  const wingL = flat(scene, new THREE.PlaneGeometry(0.5, 0.5).rotateX(-Math.PI / 2).translate(0.25, 0, 0).scale(-1, 1, 1), wingMat, MAX_BF);
  for (const w of [wingR, wingL]) w.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_BF * 3).fill(1), 3);
  // tgt：>= 1000 是第几座塔（1000 + 下标），> 0 是怪的编号，0 是随便飞
  function spawnButterfly(x, y, z, spread = 1, toTower = 0.65) {
    if (BF.n >= MAX_BF) return;
    const i = BF.n++, a = Math.random() * Math.PI * 2, s = 3 + Math.random() * 4 * spread;
    BF.x[i] = x; BF.y[i] = y; BF.z[i] = z; BF.vx[i] = Math.cos(a) * s; BF.vz[i] = Math.sin(a) * s; BF.vy[i] = 1 + Math.random() * 3;
    BF.life[i] = 5; BF.col[i] = Math.random() * BF_COLORS.length | 0;
    BF.tgt[i] = pickTarget(x, z, toTower);
  }
  function pickTarget(x, z, toTower) {
    const alive = towers.filter((t) => t.hp > 0);
    if (alive.length && Math.random() < toTower) { const t = pick(alive); return 1000 + towers.indexOf(t); }
    const j = G.nearestEnemy(x, z, 14);
    if (j >= 0) return E.id[j];
    return alive.length ? 1000 + towers.indexOf(pick(alive)) : 0;
  }
  const idIndex = new Map();

  // ============ 赛博西游 ============
  const tang = { group: new THREE.Group(), inner: new THREE.Group(), rig: null, x: 0, z: 2, y: 0, fear: 100, mode: 'follow', mamaCd: 0, scaredT: 0, kidT: 0, hitT: 0, calmT: 0, face: 0, walk: 0, saidKid: false };
  tang.group.add(tang.inner); tang.group.visible = false; scene.add(tang.group);
  const holoMat = new THREE.MeshBasicMaterial({ color: 0x58f0ff, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false });
  const holoPink = new THREE.MeshBasicMaterial({ color: 0x9fe8ff, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false });
  const boneMat = new THREE.MeshLambertMaterial({ color: 0xf4f0e6, emissive: 0x605850 });
  const setMat = (g, mat) => g.traverse((o) => { if (o.isMesh) { if (!o.userData.mat0) o.userData.mat0 = o.material; o.material = mat || o.userData.mat0; } });
  const villagers = [];
  const bone = { g: null, sprite: null, active: false, stage: 0, x: 0, z: 0, hp: 1, max: 1, glitch: 0, revealT: -1, lured: false, flash: 0, next: 5, said: false };
  let boneDown = 0, headbandT = 0, headbandCd = 0;
  const clones = { mesh: null, n: 0, want: 0, list: [], burstT: 0, fireAcc: 0, chorusT: 0 };
  const MAX_SOUL = 90, souls = [];
  const soulMesh = flat(scene, new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: soulTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }), MAX_SOUL);
  soulMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(MAX_SOUL * 3).fill(1), 3);
  const crack = new THREE.Mesh(new THREE.PlaneGeometry(26, 26).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: crackTex, transparent: true, depthWrite: false }));
  crack.renderOrder = 2; crack.visible = false; scene.add(crack);
  const chunks = [];
  let camDrop = 0, dropV = 0;

  // ============ 堂吉诃奶蛙 ============
  const mill = { group: new THREE.Group(), body: new THREE.Group(), blades: new THREE.Group(), legs: [], x: 0, z: -26, hp: 1, max: 1, down: false, downT: 0, catchT: -1, catchCd: 0, throwT: 2.5, flash: 0, said: 0 };
  {
    const white = lam(0xf3ede0, 0x1a1810), roof = lam(0x8a3a24), wood = lam(0x7a5230), dark = lam(0x2a2420), eye = lam(0xffffff, 0x404040), sail = lam(0xe8dcc0, 0x201a10);
    mill.body.add(merged([
      [white, at(new THREE.CylinderGeometry(1.4, 1.9, 5.4, 16), 0, 2.7, 0)], [roof, at(new THREE.ConeGeometry(1.8, 1.8, 16), 0, 6.3, 0)],
      [wood, at(new THREE.BoxGeometry(0.7, 1.2, 0.1), 0, 0.7, 1.86)], [dark, at(new THREE.BoxGeometry(0.4, 0.5, 0.1), -0.7, 3.2, 1.62)],
      [eye, at(new THREE.SphereGeometry(0.34, 12, 10), -0.48, 4.3, 1.45)], [eye, at(new THREE.SphereGeometry(0.34, 12, 10), 0.48, 4.3, 1.45)],
      [dark, at(new THREE.SphereGeometry(0.15, 8, 6), -0.42, 4.25, 1.74)], [dark, at(new THREE.SphereGeometry(0.15, 8, 6), 0.42, 4.25, 1.74)],
      [dark, at(new THREE.BoxGeometry(0.6, 0.1, 0.1), -0.48, 4.78, 1.5, 0, 0, -0.35)], [dark, at(new THREE.BoxGeometry(0.6, 0.1, 0.1), 0.48, 4.78, 1.5, 0, 0, 0.35)],
      [dark, at(new THREE.TorusGeometry(0.3, 0.06, 6, 12, Math.PI), 0, 3.6, 1.6, 0, 0, 0)],   // 嘴（往下撇）
      [wood, at(new THREE.CylinderGeometry(0.12, 0.12, 0.8, 8), 0, 5.2, 1.8, Math.PI / 2)],
    ]));
    const blade = (a) => [[wood, at(new THREE.BoxGeometry(0.16, 4.2, 0.1), 0, 2.1, 0, 0, 0, 0)], [sail, at(new THREE.BoxGeometry(0.9, 3.4, 0.05), 0.5, 2.4, 0.04, 0, 0, 0)]].map(([m, g]) => [m, g.rotateZ(a)]);
    mill.blades.add(merged([0, 1, 2, 3].flatMap((k) => blade(k * Math.PI / 2))));
    mill.blades.position.set(0, 5.2, 2.25); mill.body.add(mill.blades);
    for (const s of [-1, 1]) {
      const leg = merged([[wood, at(new THREE.CylinderGeometry(0.28, 0.24, 1.7, 8), 0, -0.85, 0)], [dark, at(new THREE.BoxGeometry(0.6, 0.3, 0.9), 0, -1.75, 0.2)]]);
      leg.position.set(s * 0.8, 1.8, 0); mill.group.add(leg); mill.legs.push(leg);
    }
    mill.body.position.y = 1.7; mill.group.add(mill.body); mill.group.visible = false; scene.add(mill.group);
  }
  const OB_MAX = 40, obstacles = [];
  const obMesh = {
    hay: flat(scene, new THREE.CylinderGeometry(0.66, 0.7, 1.5, 12).rotateZ(Math.PI / 2), lam(0xe0b85a, 0x2a1a04), OB_MAX),
    barrel: flat(scene, new THREE.CylinderGeometry(0.55, 0.55, 1.1, 12).rotateZ(Math.PI / 2), lam(0x7a4a26), OB_MAX),
    fence: flat(scene, mergeGeometries([new THREE.BoxGeometry(1, 0.14, 0.12).translate(0, 0.75, 0), new THREE.BoxGeometry(1, 0.14, 0.12).translate(0, 0.35, 0), new THREE.BoxGeometry(0.14, 1.0, 0.14).translate(-0.45, 0.5, 0), new THREE.BoxGeometry(0.14, 1.0, 0.14).translate(0.45, 0.5, 0)]), lam(0x8a6038), OB_MAX),
  };
  const tornados = [];
  const tornadoMat = new THREE.MeshBasicMaterial({ map: swirlTex, transparent: true, opacity: 0.75, depthWrite: false, side: THREE.DoubleSide });
  const tornadoPool = [];
  for (let k = 0; k < 6; k++) { const m = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 0.4, 7, 20, 1, true).translate(0, 3.5, 0), tornadoMat.clone()); m.visible = false; scene.add(m); tornadoPool.push(m); }
  // 桑丘：小黄鸭（中分头、背着篮球），在路边陪着跑，时不时把篮球砸向前面的障碍
  let sancho = null, sanchoT = 4, ballT = 6;
  const ball = { m: new THREE.Mesh(new THREE.SphereGeometry(0.24, 14, 10), lam(0xe0762a, 0x3a1404)), t: -1, x0: 0, y0: 0, z0: 0, tgt: null };
  ball.m.visible = false; scene.add(ball.m);
  // 沙僧：鲸鱼女仆（蓝色大肥鱼），跟在唐僧旁边；庄周梦蝶里她客串《逍遥游》的鲲，变大飞过天上
  let sha = null, kun = null;
  const kunState = { t: -1, x: 0, z: 0, dir: 1, hit: false };
  const kunShadow = new THREE.Mesh(new THREE.CircleGeometry(1, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0x1a2030, transparent: true, opacity: 0.25, depthWrite: false }));
  kunShadow.visible = false; kunShadow.renderOrder = 1; scene.add(kunShadow);
  const tags = {};   // 头顶的名牌：唐僧（牛来）、沙僧、鲲
  const props = new THREE.Group();   // 堂吉诃奶蛙的装备：长矛、理发师的铜盆（当头盔）
  {
    const gold = lam(0xe0b040, 0x3a2a08), wood = lam(0x7a5230), steel = lam(0xc8ccd8, 0x202428);
    props.add(merged([
      [wood, at(new THREE.CylinderGeometry(0.04, 0.05, 2.6, 6), 0.42, 1.05, 0.9, Math.PI / 2)], [steel, at(new THREE.ConeGeometry(0.1, 0.5, 8), 0.42, 1.05, 2.4, Math.PI / 2)],
      [gold, at(new THREE.SphereGeometry(0.42, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), 0, 1.78, 0, 0, 0, 0.1)], [gold, at(new THREE.TorusGeometry(0.45, 0.04, 6, 20), 0, 1.79, 0, Math.PI / 2)],
    ]));
    props.visible = false;
  }
  let gust = null;   // 过场：风车扇的大风（一堆白色的风线）

  // ---------- 小工具 ----------
  const say = (...a) => G.say(...a);
  const ft = (...a) => G.floatText(...a);
  function towerCount() { return Math.min(5, 3 + Math.floor((layer - 1) / 3)); }
  function hideAll() {
    desk.visible = false; tang.group.visible = false; mill.group.visible = false; crack.visible = false; props.visible = false;
    for (const t of towers) scene.remove(t.g);
    towers.length = 0; dancers.length = 0; BF.n = 0; souls.length = 0; obstacles.length = 0;
    for (const v of villagers) { scene.remove(v.g); scene.remove(v.sp); }
    villagers.length = 0;
    if (bone.g) { scene.remove(bone.g); bone.g = null; } if (bone.sprite) { scene.remove(bone.sprite); bone.sprite = null; }
    bone.active = false;
    if (clones.mesh) clones.mesh.count = 0;
    clones.list.length = 0;
    for (const c of chunks) scene.remove(c.m);
    chunks.length = 0;
    for (const m of tornadoPool) m.visible = false;
    tornados.length = 0;
    if (sancho) sancho.visible = false;
    if (sha) sha.visible = false;
    if (kun) kun.visible = false;
    kunState.t = -1; kunShadow.visible = false; ball.t = -1; ball.m.visible = false;
    for (const s of Object.values(tags)) s.visible = false;
    if (gust) { scene.remove(gust.mesh); gust = null; }
    G.worldVisible(true); camDrop = 0; dropV = 0;
    if (G.hero && props.parent) props.parent.remove(props);
    G.shiftFx.className = 'hide';
  }
  function holoClone(src, mat) {
    const g = G.cloneModel(src);
    g.traverse((o) => { if (o.isMesh) { o.material = mat; o.frustumCulled = false; } });
    return g;
  }
  function nameSprite(text, color = '#9fe8ff') {
    const t = textTexture(text, { color, stroke: '#0a0618', px: 64 });
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t.tex, transparent: true, depthWrite: false, depthTest: false }));
    s.scale.set(0.42 * t.aspect, 0.42, 1); s.renderOrder = 15; return s;
  }

  // ---------- 唐僧（牛来）：Tripo 的 41 根骨骼，代码摆姿势。模型原本面朝 -X，转成面朝 +Z（和别的角色一样） ----------
  function initTang() {
    const src = G.models.tang;
    if (!src) return;
    src.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(src), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3()), s = 1.55 / size.y;
    src.scale.setScalar(s); src.position.set(-c.x * s, -box.min.y * s, -c.z * s);
    src.traverse((o) => { if (o.isMesh) { o.frustumCulled = false; const m = o.material; if (m) { m.metalness = 0; m.roughness = 0.8; } } });
    const turn = new THREE.Group(), face = new THREE.Group();
    turn.rotation.y = -Math.PI / 2;   // 角色坐标（+X 朝前）转成游戏里的 +Z 朝前
    face.rotation.y = Math.PI;        // 模型本身面朝 -X，转半圈变成 +X
    face.add(src); turn.add(face); tang.inner.add(turn);
    tang.rig = new Rig(src, turn);
  }
  // mode：walk 走路、pray 双手合十、scared 吓得举手乱挥、carried 被抬着四脚乱蹬
  function tangPose(mode, t, k = 1) {
    const r = tang.rig; if (!r) return;
    r.begin();
    const s = Math.sin(t * 9), c = Math.sin(t * 9 + 1.4);
    if (mode === 'scared' || mode === 'carried') {
      const f = Math.sin(t * 26), g = Math.sin(t * 26 + 2);
      r.turn('L_Upperarm', 'z', 2.4 + f * 0.35).turn('R_Upperarm', 'z', 2.4 + g * 0.35).turn('L_Forearm', 'z', 0.4 + g * 0.3).turn('R_Forearm', 'z', 0.4 + f * 0.3);
      r.turn('L_Upperarm', 'x', -0.3).turn('R_Upperarm', 'x', 0.3);
      r.turn('Head', 'y', Math.sin(t * 15) * 0.35).turn('Head', 'z', 0.25).turn('Spine01', 'z', -0.15);
      if (mode === 'carried') r.turn('L_Thigh', 'z', Math.sin(t * 20) * 0.7).turn('R_Thigh', 'z', -Math.sin(t * 20) * 0.7);
      else r.turn('L_Thigh', 'z', s * 0.6 * k).turn('R_Thigh', 'z', -s * 0.6 * k).turn('L_Calf', 'z', -Math.max(0, -s) * 0.8).turn('R_Calf', 'z', -Math.max(0, s) * 0.8);
      return;
    }
    if (mode === 'walk') {
      r.turn('L_Thigh', 'z', s * 0.45 * k).turn('R_Thigh', 'z', -s * 0.45 * k).turn('L_Calf', 'z', -Math.max(0, -s) * 0.6 * k).turn('R_Calf', 'z', -Math.max(0, s) * 0.6 * k);
      r.turn('Spine01', 'x', c * 0.05);
    }
    // 双手合十（走路时也合着）
    r.turn('L_Upperarm', 'z', 0.75).turn('R_Upperarm', 'z', 0.75).turn('L_Upperarm', 'x', -0.45).turn('R_Upperarm', 'x', 0.45);
    r.turn('L_Forearm', 'z', 1.35).turn('R_Forearm', 'z', 1.35);
    r.turn('Head', 'z', mode === 'pray' ? Math.sin(t * 1.6) * 0.06 - 0.08 : 0);
  }
  function mama(long, text) {
    if (!tang.rig || !tang.group.visible) return;
    say(long ? 'tang.mamaLong' : 'tang.mama', { volume: 1.15, rate: long ? 1 : 0.92 + Math.random() * 0.22, duckTo: 0.3 });
    const txt = text || (long ? '妈——妈——妈妈！' : pick(LINES.mama));
    ft(txt, tang.x, 2.3, tang.z, { color: '#ffb3e6', stroke: '#4a1038', h: long ? 0.8 : 0.66, life: 0.9 });
    G.mobCaption(`唐僧（牛来）：${txt}`, '#ffb3e6');
    tang.mamaCd = long ? 3.2 : 2.0 + Math.random() * 1.4;
    window.__mamas = (window.__mamas || 0) + 1;
  }
  // 紧箍咒：唐僧双手合十念“妈妈妈妈”，奶蛙抱头，画面被勒紧
  function headband(reason) {
    if (headbandCd > 0) return;
    headbandCd = 3.5; headbandT = 1.6;
    say('tang.mamaLong', { volume: 1.1, rate: 1.25, duckTo: 0.25 });
    if (reason === 'wrong') say('fx.bruh', { volume: 0.8, duckTo: 1, bus: 'sfx', delay: 0.05 });
    G.heroCaption(LINES.headband, '#ffd84d', 1.8);
    G.hurtPlayer(reason === 'wrong' ? 8 : 3, 0.3);
    G.shiftFx.className = 'squeeze'; void G.shiftFx.offsetWidth;
    ft('头好痛！', player.x, 2.6, player.z, { color: '#ffd84d', stroke: '#4a2a10', h: 0.7, life: 1.0 });
    G.addShake(0.35);
  }
  let kidnaps = 0;
  function startKidnap() {
    tang.mode = 'kidnap'; tang.kidT = 0; tang.fear = 0; kidnaps++; st.kidOnce = true;
    mama(true);
    // 沙僧（鲸鱼女仆）跑过来报信。第二次以后有时候报的是二师兄（可是这里根本没有二师兄）
    const second = kidnaps > 1 && Math.random() < 0.4;
    say(second ? 'whale.erxiong' : 'whale.zhuazou', { volume: 1.1, duckTo: 0.3, delay: 0.9 });
    G.bark('sha', second ? '二师兄……也被抓走了。（这里没有二师兄）' : LINES.kidnap);
    window.__kidnaps = (window.__kidnaps || 0) + 1;
  }
  function rescue(self) {
    tang.mode = 'follow'; tang.fear = 70; tang.y = 0;
    if (!self) { say('wukong.laizhe', { volume: 1, duckTo: 0.4 }); G.heroCaption(LINES.rescue, '#ffe14d'); G.addScore(150); }
    else { mama(false); G.mobCaption('唐僧自己跑回来了：妈妈！', '#ffb3e6'); }
  }
  // 白骨精：三次变身（村姑 → 老太太 → 老头），每次打穿一次
  // 第三次变的老公公是“背手负鼠”：背着手、慢悠悠地视察
  const BONE = [
    { model: 'bride', name: '送斋饭的村姑？', h: 1.8 }, { model: 'rabbit', name: '找女儿的老太太？', h: 1.75 }, { model: 'possum', name: '背着手视察的老公公？', h: 1.45, voice: 'possum.hmm' },
  ];
  function boneAppear() {
    const b = BONE[bone.stage], src = G.models[b.model];
    if (!src) { bone.stage++; return; }
    const a = Math.random() * Math.PI * 2;
    bone.x = tang.x + Math.sin(a) * 10; bone.z = tang.z + Math.cos(a) * 8;
    bone.max = bone.hp = (9 + layer * 2.2) * G.power; bone.active = true; bone.revealT = -1; bone.lured = false; bone.glitch = Math.random();
    bone.g = holoClone(src, holoPink); scene.add(bone.g);
    bone.sprite = nameSprite(b.name, '#ffd0ea'); scene.add(bone.sprite);
    G.mobCaption(pick(LINES.boneIn), '#ffd0ea');
    if (b.voice) { say(b.voice, { volume: 1, duckTo: 0.4 }); G.mobCaption('老公公：嗯……不错，不错。年轻人，要背着手走路。', '#ffd0ea'); }
  }
  function boneHit(dmg) {
    if (!bone.active || bone.revealT >= 0) return;
    bone.hp -= dmg; bone.flash = 0.1; G.joy();
    if (bone.hp > 0) return;
    // 打穿了：现出白骨原形
    bone.revealT = 0; boneDown++;
    setMat(bone.g, boneMat);
    say('fx.vineboom', { volume: 0.9, duckTo: 0.5, bus: 'sfx' });
    say(pick(['wukong.yaojing', 'wukong.bang']), { volume: 1, duckTo: 0.35, delay: 0.25 });
    G.heroCaption(pick(LINES.boneReveal), '#ffffff', 1.6);
    ft('白骨精！', bone.x, 2.8, bone.z, { color: '#ffffff', stroke: '#3a0a18', h: 1.1, life: 1.4 });
    G.dropOrbs(bone.x, bone.z, 12, 2, 2); G.addScore(300); G.addShake(0.4);
    if (bone.sprite) { scene.remove(bone.sprite); bone.sprite = null; }
    // 唐僧不信，又念紧箍咒（原著也是这样）
    setTimeout(() => { if (cur === 1 && G.phase === 'fight') { headband('scold'); say('wukong.shifu', { volume: 1, duckTo: 0.4, delay: 1.0 }); } }, 900);
    if (boneDown >= 3 && !bone.said) { bone.said = true; setTimeout(() => { if (cur === 1) G.bark('wukong', '三打白骨精，打完收工！'); }, 2600); }
  }
  // 七十二变：一群小奶蛙。平时跟着 18 只，变身时 72 只全出来
  function initClones() {
    const h = G.models.heroLo || G.heroModel(); if (!h) return;   // 分身用减面的奶蛙（1500 面），72 只同屏才扛得住
    h.updateMatrixWorld(true);
    let mesh = null; h.traverse((o) => { if (o.isMesh && !mesh) mesh = o; });
    if (!mesh) return;
    const inv = new THREE.Matrix4().copy(h.matrixWorld).invert(), rel = new THREE.Matrix4().multiplyMatrices(inv, mesh.matrixWorld);
    const geo = mesh.geometry.clone().applyMatrix4(rel);
    clones.mesh = new THREE.InstancedMesh(geo, mesh.material, 72);
    clones.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); clones.mesh.count = 0; clones.mesh.frustumCulled = false;
    clones.mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(72 * 3).fill(1), 3);
    scene.add(clones.mesh);
  }
  function seventyTwo(big) {
    clones.burstT = big ? 4 : 3.2;
    for (let k = clones.list.length; k < 72; k++) {
      const ring = k < 12 ? 0 : k < 36 ? 1 : 2, nIn = [12, 24, 36][ring], idx = k - [0, 12, 36][ring];
      clones.list.push({ a: idx / nIn * Math.PI * 2 + ring * 0.3, r: [2.2, 3.6, 5.0][ring], x: player.x, z: player.z, y: 0, ph: Math.random() * 6, hue: Math.random() });
    }
    for (const c of clones.list) { c.x = player.x + (Math.random() - 0.5); c.z = player.z + (Math.random() - 0.5); c.y = 1.5 + Math.random(); }
    say('wukong.monkey', { volume: 0.7, duckTo: 0.6, bus: 'sfx' });
    tang.mamaCd = 0; setTimeout(() => { if (cur === 1) mama(false, '妈妈！好多猴子！'); }, 700);   // 唐僧被七十二个奶蛙吓到了
    G.playHaChorus(14, { spread: 1.0, volume: 0.2, rateMin: 1.3, rateMax: 2.1 });
    for (let k = 0; k < 6; k++) ft(pick(['嘿！', '嘿嘿', '嘿嘿嘿', '七十二变！']), player.x + (Math.random() - 0.5) * 8, 1.6 + Math.random(), player.z + (Math.random() - 0.5) * 6, { color: pick(['#ffe14d', '#ff8ae0', '#7ef0ff']), h: 0.8, rise: 2 });
  }

  // ---------- 堂吉诃奶蛙 ----------
  function addObstacle(kind, x, z, vz = 0) {
    if (obstacles.length >= OB_MAX * 2) return;
    // r：前后多厚，hw：左右多宽，h：多高（跳起来的高度超过它就没事；最高能跳约 1.4 米）
    const def = { hay: { r: 0.75, h: 1.2, hw: 0.75 }, barrel: { r: 0.6, h: 1.0, hw: 0.55 }, fence: { r: 0.3, h: 0.95, hw: 2.2 } }[kind];
    // hp：要喷几口“呼”才吹得飞（干草垛 3 口、栅栏 2 口、酒桶 1 口），所以光喷不够，还得跳、得躲
    obstacles.push({ kind, x, z, vz, ...def, hp: { hay: 3, fence: 2, barrel: 1 }[kind] * (1 + (layer - 1) * 0.08), wob: 0, fly: -1, spin: 0, y: 0, roll: Math.random() * 6 });
  }
  function knock(o, by) {   // 障碍被龙卷风卷上天
    if (o.fly >= 0) return;
    o.fly = 0; o.spin = (Math.random() < 0.5 ? -1 : 1) * (6 + Math.random() * 6);
    G.addScore(15); G.joy();
    if (by === 'gust' && Math.random() < 0.4) ft(pick(['呼——', '飞咯', '卷走！']), o.x, 1.8, o.z, { color: '#eaf6ff', stroke: '#24405a', h: 0.6, life: 0.7 });
    G.dropOrbs(o.x, o.z, 2, 1, 0.8);
  }
  function millDamage(v, text) {
    if (mill.down) return;
    mill.hp -= v; mill.flash = 0.12; G.joy();
    if (text && G.time - mill.said > 0.7) { mill.said = G.time; ft(text, mill.x, 6.5, mill.z, { color: '#ffe14d', stroke: '#5a2a08', h: 1.0, life: 0.9 }); }
    if (mill.hp <= 0) {
      mill.down = true; mill.downT = 0; mill.hp = 0;
      say('fx.vineboom', { volume: 1, duckTo: 0.5, bus: 'sfx' }); say('quixote.victoria', { volume: 1, duckTo: 0.35, delay: 0.4 }); say('fx.ole', { volume: 0.8, duckTo: 1, bus: 'sfx', delay: 1.2 });
      G.heroCaption(LINES.millDown, '#ffe14d', 2); G.addScore(600); G.addShake(0.6);
      G.dropOrbs(mill.x, mill.z + 3, 24, 2, 4);
      window.__millDown = (window.__millDown || 0) + 1;
    }
  }
  function spawnRow() {
    const z = player.z - 36, lanes = [-3, 0, 3], r = Math.random();
    if (r < 0.34) addObstacle('hay', pick(lanes), z);
    else if (r < 0.6) { const gap = pick(lanes); for (const x of lanes) if (x !== gap) addObstacle('fence', x, z); }
    else if (r < 0.8) { addObstacle('hay', -3, z); addObstacle('hay', 3, z - 3); }
    else addObstacle('fence', pick(lanes), z);
    // 一串笑点（有时候在障碍上面，要跳起来才吃得到）
    const lx = pick(lanes);
    for (let k = 0; k < 6 && O.n < O.x.length; k++) { const j = O.n++; O.x[j] = lx; O.z[j] = z + 6 + k * 1.6; O.v[j] = 1; O.t[j] = Math.random() * 6; O.y[j] = Math.max(0, 1.6 - Math.abs(k - 2.5) * 0.5) * (Math.random() < 0.4 ? 1 : 0); }
  }
  function spawnHerd() {
    const side = Math.random() < 0.5 ? -1 : 1, n = 4 + Math.floor(Math.random() * 3) + Math.min(4, layer >> 1), z = player.z - 22 - Math.random() * 6;
    for (let k = 0; k < n; k++) {
      const big = Math.random() < 0.15 && G.pace.kindOpen('ram', layer, G.dreamTime);
      const i = G.spawnAt(big ? T.ram : T.sheep, side * (9 + k * 1.3 + Math.random()), z + (Math.random() - 0.5) * 3);
      if (i >= 0) E.vx[i] = -side * (3.4 + Math.random() * 1.2);
    }
  }

  // ---------- 对外 ----------
  const D = {
    init() {
      if (inited) return; inited = true; initTang(); initClones();
      const S = G.models.duck || G.models.rabbit;
      sancho = S ? G.cloneModel(S) : null; if (sancho) { sancho.visible = false; scene.add(sancho); }
      if (G.models.whale) {
        sha = G.cloneModel(G.models.whale); sha.visible = false; scene.add(sha);
        kun = G.cloneModel(G.models.whale); kun.visible = false; kun.scale.setScalar(3.2); kun.traverse((o) => { if (o.isMesh) o.frustumCulled = false; }); scene.add(kun);
      }
      tags.tang = nameSprite('唐僧（牛来）', '#ffe9a8'); tags.sha = nameSprite('沙僧（蓝色大肥鱼）', '#bfe0ff'); tags.kun = nameSprite('鲲（北冥有鱼）', '#bfe0ff');
      tags.sancho = nameSprite('桑丘（小黄鸭）', '#ffe9a8'); tags.sleeper = nameSprite('睡着的奶蛙（真身）Zzz', '#dfe6ff');
      for (const s of Object.values(tags)) { s.visible = false; scene.add(s); }
      tags.kun.scale.multiplyScalar(1.6);
    },
    reset() { boneDown = 0; hideAll(); cur = -1; },
    teardown() { hideAll(); cur = -1; },
    // 进一个梦：摆好这个梦的东西
    setup(n, lyr) {
      hideAll(); cur = n; layer = lyr;
      for (const k of Object.keys(st)) delete st[k];
      st.spawnAcc = 0; st.t = 0; st.waves = 0;
      if (n === 0) {
        desk.visible = true; desk.position.set(0, 0, 0);
        if (!sleeper) { sleeper = G.cloneHero(); if (sleeper) { scene.add(sleeper); } }
        // 课桌上睡觉的奶蛙（就是做梦的那个“真身”）：站在桌子后面，往前趴，脑袋枕在桌上
        if (sleeper) { sleeper.visible = true; sleeper.position.set(0, 0, 1.08); sleeper.rotation.set(0, Math.PI, 0); sleeper.userData.inner.rotation.set(0.78, 0, 0); }
        tags.sleeper.visible = true; tags.sleeper.position.set(0, 2.5, 0.4);
        st.sleep = 100; st.hitT = 0; st.zzz = 0; st.calm = 0; st.lowSaid = false; st.allDown = false;
        const n2 = towerCount(), a0 = Math.random() * Math.PI * 2;
        for (let k = 0; k < n2; k++) {
          const a = a0 + k / n2 * Math.PI * 2, g = towerProto.clone(), x = Math.sin(a) * 10.5, z = Math.cos(a) * 9;
          g.position.set(x, 0, z); g.scale.setScalar(TOWER_S); scene.add(g);
          const max = 72 * (1 + (layer - 1) * 0.15) * G.power;   // 一次捧腹大笑大约打掉三分之一，一个梦里笑两三次加上喷字，大约在 20~28 秒推完
          towers.push({ g, x, z, hp: max, max, fallT: -1, spawnT: 1.5 + k * 0.7, fireT: 2 + Math.random() * 2, kind: k % 2 ? 'elegantB' : 'elegantA', flash: 0, yaw: 0, fire: 0 });
        }
        player.y = 6;   // 从天上掉进梦里
        st.kunAt = lyr === 1 ? 12 : 8 + Math.random() * 8;   // 鲲什么时候飞过来
      } else if (n === 1) {
        tang.group.visible = !!tang.rig; tang.x = player.x - 1.2; tang.z = player.z + 2.2; tang.y = 0; tang.fear = 100; tang.mode = 'follow'; tang.mamaCd = 2.5; tang.scaredT = 0; tang.saidKid = false;
        bone.stage = 0; bone.next = 4.5; bone.active = false; boneDown = 0; bone.said = false; headbandT = 0; headbandCd = 0;
        if (sha) { sha.visible = true; sha.position.set(tang.x + 1.4, 0, tang.z + 0.6); tags.sha.visible = true; }
        tags.tang.visible = !!tang.rig;
        for (let k = 0; k < 2; k++) {
          const src = G.models[pick(['bride', 'rabbit', 'possum'])]; if (!src) continue;
          const g = holoClone(src, holoMat); scene.add(g);
          const a = Math.random() * 6.28;
          villagers.push({ g, x: player.x + Math.sin(a) * 8, z: player.z + Math.cos(a) * 7, tx: 0, tz: 0, retarget: 0, gone: 0, sp: nameSprite('良民 ✓', '#7dff7a') });
          scene.add(villagers[villagers.length - 1].sp);
        }
        st.chant = false; clones.list.length = 0; clones.burstT = 0;
        st.said72 = false;
      } else {
        mill.group.visible = true; mill.down = false; mill.downT = 0; mill.max = mill.hp = 70 * (1 + (layer - 1) * 0.15) * G.power; mill.count = 0;
        mill.x = 0; mill.z = player.z - 16; mill.catchT = -1; mill.catchCd = 4; mill.throwT = 2.5; mill.trip = 0; mill.tripCd = 6; mill.group.rotation.set(0, 0, 0);
        st.rowT = 1.2; st.herdT = 4; st.saidGig = false; ballT = 6;
        if (sancho) { sancho.visible = true; sancho.position.set(-ROAD_HALF - 1.5, 0, player.z + 1); tags.sancho.visible = true; }
        const h = G.hero; if (h) { h.userData.inner.add(props); props.visible = true; }
        player.y = 9; player.vy = 0;   // 从上一层梦掉下来，摔在土路上
      }
    },
    finish(reason) {
      if (cur === 0) {
        const down = towers.filter((t) => t.hp <= 0).length;
        G.bark('penguin', reason === 'woke' ? '哼，终于安静了。' : down === towers.length ? 'Exquisite! 全都倒了，那就一起跳舞吧。' : `高雅塔倒了 ${down} 座……下次再来。`);
      } else if (cur === 2) {
        if (!mill.down) G.heroCaption(LINES.millAway, '#ffffff', 1.4);
      }
    },
    goalFor(ai) {
      if (ai === 'desk' && cur === 0) return { x: 0, z: 0, r: DESK_R };
      if (ai === 'tang' && cur === 1 && tang.rig) return { x: tang.x, z: tang.z, r: 0.45 };
      return null;
    },
    goalHit(ai, i) {
      if (ai === 'desk') {   // 企鹅戳鼻涕泡
        st.sleep -= 4.2 * (layer > 3 ? 1.2 : 1); st.hitT = 0.3; st.calm = 0;
        if (Math.random() < 0.35) ft(pick(['嘘——', '醒醒', 'Be elegant!', '不许睡！']), E.x[i], 2.2, E.z[i], { color: '#e8d7b0', stroke: '#2a1a10', h: 0.55, life: 0.8 });
        if (st.sleep < 35 && !st.lowSaid) { st.lowSaid = true; G.bark('naiwa', LINES.bubbleLow); }
        if (st.sleep <= 0) {
          st.sleep = 0;
          G.sfx.pop(0.6, 0.5); say('fx.alarm', { volume: 0.5, duckTo: 1, bus: 'sfx' });
          const lost = G.loseHalf();
          G.heroCaption(LINES.bubblePop, '#ffffff', 2); ft(`-${lost} 笑点`, player.x, 3, player.z, { color: '#ff8a8a', h: 0.9, life: 1.4 });
          G.endDream('woke');
        }
      } else if (ai === 'tang' && tang.mode === 'follow') {
        tang.fear -= 6 * 0.6; tang.hitT = 0.3;
        if (tang.mamaCd <= 0) mama(false);
        if (tang.fear <= 0) startKidnap();
      }
    },
    pushOut(p, r) {
      if (cur === 0) {
        const d = Math.hypot(p.x, p.z), rr = DESK_R + r; if (d < rr) { const k = rr / (d || 1e-3); p.x *= k; p.z *= k; }
        for (const t of towers) {
          if (t.hp <= 0) continue;
          const dx = p.x - t.x, dz = p.z - t.z, rr2 = 1.0 + r, d2 = dx * dx + dz * dz;
          if (d2 < rr2 * rr2) { const dd = Math.sqrt(d2) || 1e-3; p.x = t.x + dx / dd * rr2; p.z = t.z + dz / dd * rr2; }
        }
      }
    },
    // 字打中特殊目标：返回 true 表示这个字用掉了
    bulletHit(i) {
      const x = B.x[i], z = B.z[i];
      if (cur === 0) {
        for (const t of towers) if (t.hp > 0 && (x - t.x) ** 2 + (z - t.z) ** 2 < 1.15 * 1.15) { towerDamage(t, B.dmg[i]); return true; }
      } else if (cur === 1) {
        if (bone.active && bone.revealT < 0 && (x - bone.x) ** 2 + (z - bone.z) ** 2 < 0.7 * 0.7) { boneHit(B.dmg[i]); return true; }
        // 喷错良民：只算奶蛙自己喷的字（分身喷的不算，不然七十二个分身一通乱喷，紧箍咒念个没完）
        if (B.src[i] === 0) for (const v of villagers) if (v.gone <= 0 && (x - v.x) ** 2 + (z - v.z) ** 2 < 0.45 * 0.45) {
          v.gone = 4; ft(pick(LINES.wrongHit), v.x, 2.4, v.z, { color: '#7dff7a', stroke: '#0a2a10', h: 0.7, life: 1.1 });
          G.mobCaption('喷错良民了！唐僧要念紧箍咒了……', '#7dff7a'); headband('wrong');
          window.__wrong = (window.__wrong || 0) + 1;
          return true;
        }
      } else if (cur === 2) {
        for (const o of obstacles) if (o.fly < 0 && Math.abs(x - o.x) < o.hw + 0.35 && Math.abs(z - o.z) < o.r + 0.35 && B.y[i] < o.h + 0.8) {
          o.hp -= B.dmg[i]; o.wob = 0.25;
          if (o.hp <= 0) knock(o, 'gust');
          return true;
        }
        if (!mill.down && Math.abs(x - mill.x) < 2.2 && Math.abs(z - mill.z) < 2.2) { millDamage(B.dmg[i] * 0.9, Math.random() < 0.25 ? pick(LINES.millHit) : null); return true; }
      }
      return false;
    },
    // 自动瞄准的特殊目标。pri：比旁边的小怪更要紧
    aimTarget() {
      if (cur === 0) {
        let best = null, bd = 13;
        for (const t of towers) if (t.hp > 0) { const d = Math.hypot(t.x - player.x, t.z - player.z); if (d < bd) { bd = d; best = t; } }
        if (!best) return null;
        return { x: (best.x - player.x) / bd, z: (best.z - player.z) / bd, pri: bd < 5 };
      }
      if (cur === 1) {
        if (!bone.active || bone.revealT >= 0) return null;
        const d = Math.hypot(bone.x - player.x, bone.z - player.z);
        return d < 12 ? { x: (bone.x - player.x) / d, z: (bone.z - player.z) / d, pri: d < 9 } : null;
      }
      if (cur === 2) {   // 先打挡在自己这条道上、9 米以内的障碍，再打风车，再打羊，最后打远一点的障碍
        let tx = null, tz = 0, bd = 1e9;
        for (const o of obstacles) { if (o.fly >= 0) continue; const dz = player.z - o.z; if (dz < 1 || dz > 9 || Math.abs(o.x - player.x) > o.hw + 0.8) continue; if (dz < bd) { bd = dz; tx = o.x; tz = o.z; } }
        if (tx === null && !mill.down && player.z - mill.z < 26) { tx = mill.x; tz = mill.z; }
        if (tx === null) for (let i = 0; i < E.n; i++) { const dz = player.z - E.z[i]; if (dz < 1 || dz > 18) continue; const d = dz + Math.abs(E.x[i] - player.x); if (d < bd) { bd = d; tx = E.x[i]; tz = E.z[i]; } }
        if (tx === null) for (const o of obstacles) { if (o.fly >= 0) continue; const dz = player.z - o.z; if (dz < 1 || dz > 20) continue; const d = dz + Math.abs(o.x - player.x) * 2; if (d < bd) { bd = d; tx = o.x; tz = o.z; } }
        if (tx === null) return { x: 0, z: -1 };
        const dx = tx - player.x, dz = tz - player.z, d = Math.hypot(dx, dz) || 1;
        return { x: dx / d, z: dz / d };
      }
      return null;
    },
    bossOn() { return (cur === 0 && towers.some((t) => t.hp > 0)) || (cur === 1 && bone.active) || (cur === 2 && !mill.down); },
    onKill(i, t, how) {
      if (cur === 0 && how === 'dance') { for (let k = 0; k < 3; k++) spawnButterfly(E.x[i], 1.2, E.z[i], 0.6, 0.8); }
      if (how === 'soul' && souls.length < MAX_SOUL) {
        const tint = t.tint || [1, 1, 1];
        souls.push({ x: E.x[i], y: 0.9, z: E.z[i], t: 0, col: tint, ph: Math.random() * 6 });
        if (Math.random() < 0.12) ft(pick(['灵魂出窍～', '呜～', '笑没了', '魂飞了']), E.x[i], 2.4, E.z[i], { color: '#dff4ff', stroke: '#22224a', h: 0.55, life: 0.9 });
      }
    },
    onVolley(g, v) { if (cur === 0 && v % 3 === 0) spawnButterfly(player.x, 1.3, player.z, 0.5, 0.75); },
    onFeidudu() { if (cur === 2) for (const o of obstacles) knock(o, 'fat'); },
    onBoost() { if (cur === 2) for (let k = 0; k < 8; k++) ft('呼', player.x + (Math.random() - 0.5) * 2, 1 + Math.random(), player.z + 1 + Math.random() * 2, { color: '#eaf6ff', stroke: '#24405a', h: 0.7, rise: 0.5, life: 0.6 }); },
    laughStart(force) {
      if (cur === 1) { seventyTwo(true); say('wukong.laugh', { volume: 1, duckTo: 0.5, delay: 0.3 }); }
      if (cur === 2) say('quixote.dulcinea', { volume: 1, duckTo: 0.4 });
      if (cur === 0 && !force) say('penguin.exquisite', { volume: 0.7, duckTo: 0.6, delay: 2.2 });
    },
    laughPulse(k) {
      if (cur === 0) {   // 蝴蝶笑：每一圈放 12 只蝴蝶，大部分飞去打塔；离得近的塔直接挨一下
        for (let j = 0; j < 12; j++) spawnButterfly(player.x, 1.6, player.z, 1.4, 0.7);
        for (const t of towers) if (t.hp > 0 && Math.hypot(t.x - player.x, t.z - player.z) < 16) towerDamage(t, (1.5 + layer * 0.15) * G.stats.dmgMul);
      } else if (cur === 1) {
        G.playHaChorus(10, { spread: 0.5, volume: 0.18, rateMin: 1.35, rateMax: 2.2 });
        if (bone.active) boneHit(4);
      } else if (cur === 2) {   // 龙卷笑：一股大龙卷风往前卷
        tornados.push({ x: player.x, z: player.z - 2, t: 0, life: 2.4, r: 3.2 + k * 0.2, big: true, hit: false });
        G.sfx.whoosh(0.6);
      }
    },
    laughEnd() {},
    lockPlayer() { return cur === 2 && mill.catchT >= 0; },
    // 自动瞄准时，射线上 maxD 米内挡着良民就先别喷（手动瞄准的不管，喷错了就是喷错了）
    villagerInLine(x, z, dx, dz, maxD) {
      if (cur !== 1) return false;
      for (const v of villagers) {
        if (v.gone > 0) continue;
        const vx = v.x - x, vz = v.z - z, t = vx * dx + vz * dz;
        if (t < 0 || t > maxD) continue;
        const px = vx - dx * t, pz = vz - dz * t;
        if (px * px + pz * pz < 0.8 * 0.8) return true;
      }
      return false;
    },
    // 自动测试用：前面 0.8~2.6 米、自己这条道上有没有还没被吹飞的障碍
    obstacleAhead(x, z) { if (cur !== 2) return false; for (const o of obstacles) { const dz = z - o.z; if (o.fly < 0 && dz > 0.8 && dz < 2.6 && Math.abs(o.x - x) < o.hw + 0.4) return true; } return false; },
    heroVisible() { return true; },
    camDrop() { return camDrop; },
    objective() {
      if (cur === 0) { const down = towers.filter((t) => t.hp <= 0).length; return `打爆高雅塔 ${down}/${towers.length} · 别让企鹅戳破鼻涕泡`; }
      if (cur === 1) return tang.mode === 'kidnap' ? '师父被抓走了！快追上去打跑妖怪！' : `护住唐僧（牛来）· 三打白骨精 ${boneDown}/3`;
      if (cur === 2) return mill.down ? '风车巨人倒了！一路捡笑点' : `追上风车巨人 · 还差 ${Math.max(0, Math.round(player.z - mill.z))} 米`;
      return '';
    },
    bossBar() {
      if (cur === 0) { let hp = 0, max = 0; for (const t of towers) { hp += Math.max(0, t.hp); max += t.max; } return max ? { label: `高雅塔（还剩 ${towers.filter((t) => t.hp > 0).length} 座）`, f: hp / max } : null; }
      if (cur === 1 && bone.active && bone.revealT < 0) return { label: `${BONE[bone.stage] ? BONE[bone.stage].name : ''}（白骨精 ${boneDown + 1}/3）`, f: bone.hp / bone.max };
      if (cur === 2 && !mill.down) return { label: '风车巨人（堂吉诃奶蛙眼里的）', f: mill.hp / mill.max };
      return null;
    },
    meter() {
      if (cur === 0) return { label: '奶蛙的鼻涕泡（被戳破就醒了）', f: st.sleep / 100, hit: st.hitT > 0 };
      if (cur === 1 && tang.rig) return { label: tang.mode === 'kidnap' ? '师父被抓走了！' : '师父的胆量', f: tang.fear / 100, hit: tang.hitT > 0 };
      return null;
    },
  };

  function towerDamage(t, v) {
    if (t.hp <= 0) return;
    t.hp -= v; t.flash = 0.1; G.joy();
    if (t.hp > 0) return;
    // 塔倒了：塔顶的企鹅跳下来跳华尔兹，周围的企鹅也停下来一起跳
    t.fallT = 0; G.addShake(0.45); G.addScore(200);
    G.sfx.boom(0.5); say('fx.vineboom', { volume: 0.7, duckTo: 0.6, bus: 'sfx' });
    say(pick(['penguin.dance', 'penguin.exquisite', 'penguin.youya']), { volume: 1, duckTo: 0.35, delay: 0.5 });
    G.heroCaption(pick(LINES.towerDown), '#ffe9a8', 1.6);
    ft('嘭！', t.x, 4.5, t.z, { color: '#ffe9a8', stroke: '#5a3a10', h: 1.2, life: 1.0 });
    G.ring(t.x, t.z, 4, 0.6, '#ffe9a8');
    dancers.push({ kind: t.kind, x: t.x + 1.6, z: t.z + 1.2, t: 0, life: 6.5, ph: Math.random() });
    let n = 0;
    for (let i = 0; i < E.n; i++) if (E.dance[i] <= 0 && TYPES[E.type[i]].ai === 'desk' && Math.hypot(E.x[i] - t.x, E.z[i] - t.z) < 9) { E.dance[i] = 4 + Math.random() * 2; E.swing[i] = 0; n++; }
    for (let k = 0; k < 10; k++) spawnButterfly(t.x, 3, t.z, 1.2, 0.85);
    G.dropOrbs(t.x, t.z, 8, 1.5, 2.5);
    st.danceT = 7; G.playMusic('waltz');
    setTimeout(() => say('fx.applause', { volume: 0.55, duckTo: 1, bus: 'sfx' }), 4800);
    if (n > 2) G.mobCaption(`${n + 1} 只高雅企鹅跳起了华尔兹`, '#ffe9a8');
    if (towers.every((tt) => tt.hp <= 0) && !st.allDown) {
      st.allDown = true;
      setTimeout(() => { if (cur === 0) { G.bark('penguin', '全塔高雅！Ladies and gentlemen……一起跳！'); for (let i = 0; i < E.n; i++) if (TYPES[E.type[i]].ai === 'desk') E.dance[i] = 5 + Math.random() * 2; } }, 1200);
    }
    window.__towersDown = (window.__towersDown || 0) + 1;
  }

  // ---------- 每一帧：生成 ----------
  D.director = function (dt, fighting) {
    if (!fighting) return;
    const dt2 = G.dreamTime;
    if (cur === 0) {
      for (const t of towers) {
        if (t.hp <= 0) continue;
        t.spawnT -= dt;
        if (t.spawnT <= 0 && E.n < 26 + layer * 4) {
          t.spawnT = Math.max(1.6, 3.4 - layer * 0.15) * (0.8 + Math.random() * 0.4);
          const key = Math.random() < 0.4 && G.pace.kindOpen('agent', layer, dt2) ? 'agent' : 'gentle';
          const a = Math.atan2(-t.x, -t.z);
          G.spawnAt(T[key], t.x + Math.sin(a) * 1.6 + (Math.random() - 0.5), t.z + Math.cos(a) * 1.6 + (Math.random() - 0.5));
        }
        t.fireT -= dt;
        const d = Math.hypot(player.x - t.x, player.z - t.z);
        if (t.fireT <= 0 && d < 15 && EB.n < G.MAX_EB) {
          t.fireT = Math.max(1.6, 3.0 - layer * 0.1) * (0.8 + Math.random() * 0.4); t.fire = 0.5;
          const k = EB.n++, dx = player.x - t.x, dz = player.z - t.z;
          EB.x[k] = t.x; EB.z[k] = t.z; EB.dx[k] = dx / d * 6.5; EB.dz[k] = dz / d * 6.5; EB.life[k] = 3; EB.dmg[k] = 5;
          G.motif('elise', 0.9);
        }
      }
      // 外面也有零散的企鹅走过来；塔全倒了以后来得更多（没有塔替它们出气了），免得后半段冷场
      const allDown = !towers.some((t) => t.hp > 0);
      st.spawnAcc += dt * (allDown ? 2.2 + layer * 0.2 : 0.8 + layer * 0.12);
      while (st.spawnAcc >= 1) { st.spawnAcc -= 1; if (E.n < 20 + layer * 3) G.spawnEnemy(Math.random() < 0.3 && G.pace.kindOpen('agent', layer, dt2) ? T.agent : T.gentle); }
    } else if (cur === 1) {
      const target = (16 + dt2 * 0.9 + layer * 2.5) * (G.player.hp < 35 ? 0.75 : 1);
      st.spawnAcc += dt * (5 + layer * 0.4);
      const open = ['daodun', 'gugugaga', 'bibilabu', 'bababoyi'].filter((k) => G.pace.kindOpen(k, layer, dt2));
      while (st.spawnAcc >= 1) { st.spawnAcc -= 1; if (E.n < target) G.spawnEnemy(T[pick(open)]); }
      if (dt2 > 3 + st.waves * 7 && G.pace.kindOpen('gugugaga', layer, dt2)) {   // 咕咕嘎嘎一群一群冲过来
        st.waves++;
        const a = Math.random() * Math.PI * 2;
        for (let k = 0; k < 5 + st.waves * 2; k++) G.spawnEnemy(T.gugugaga, a + (Math.random() - 0.5) * 0.5, 15 + Math.random() * 3);
      }
      if (!bone.active && bone.stage < 3 && dt2 >= bone.next) boneAppear();
      // 每次进这个梦都要看到一次“师父被妖怪抓走了”：第 12 秒还没被抓过，就从地底下钻出两只巴巴博一，把唐僧抬走
      if (!st.kidOnce && dt2 >= 12 && tang.mode === 'follow' && tang.rig) {
        st.kidOnce = true;
        for (const s of [-1, 1]) G.spawnAt(T.bababoyi, tang.x + s * 0.8, tang.z + 0.4);
        ft('钻出来了！', tang.x, 2.6, tang.z, { color: '#ffb8ec', stroke: '#3a0a28', h: 0.7, life: 1.0 });
        startKidnap();
      }
    } else if (cur === 2) {
      if (!mill.down) {
        st.rowT -= dt;
        if (st.rowT <= 0) { st.rowT = Math.max(0.75, 1.25 - layer * 0.04) * (0.8 + Math.random() * 0.4); spawnRow(); }
        st.herdT -= dt;
        if (st.herdT <= 0) { st.herdT = Math.max(2.4, 4.2 - layer * 0.15) * (0.8 + Math.random() * 0.5); spawnHerd(); }
      } else {   // 风车倒了：笑点下雨
        st.rowT -= dt;
        if (st.rowT <= 0) { st.rowT = 0.5; for (let k = 0; k < 4 && O.n < O.x.length; k++) { const j = O.n++; O.x[j] = (Math.random() - 0.5) * 8; O.z[j] = player.z - 14 - Math.random() * 10; O.v[j] = 1; O.t[j] = Math.random() * 6; O.y[j] = 0; } }
      }
    }
  };

  // ---------- 每一帧：更新 ----------
  D.step = function (dt, fighting) {
    const time = G.time;
    st.t = (st.t || 0) + dt;
    if (cur === 0) {
      if (st.hitT > 0) st.hitT -= dt;
      st.calm = (st.calm || 0) + dt;
      if (st.calm > 2 && st.sleep < 100) st.sleep = Math.min(100, st.sleep + dt * 1.5);
      st.zzz -= dt;
      if (st.zzz <= 0) { st.zzz = 1.4; ft(pick(['Z', 'z', 'Zz', 'Zzz']), 0.3 + Math.random() * 0.3, 1.7, 0.4, { color: '#7a8ab0', stroke: '#ffffff', h: 0.45, rise: 0.9, life: 1.6 }); }
      for (const t of towers) {
        if (t.flash > 0) t.flash -= dt;
        if (t.fire > 0) t.fire -= dt;
        t.yaw = Math.atan2(-(player.z - t.z), player.x - t.x);
        if (t.fallT >= 0) t.fallT += dt;
      }
      if (st.danceT > 0) { st.danceT -= dt; G.joy(); if (st.danceT <= 0) G.playMusic('butterfly'); }   // 看企鹅跳舞也算在笑，不冷场
      if (fighting && st.kunAt > 0 && G.dreamTime >= st.kunAt) { st.kunAt = -1; startKun(); }
      stepKun(dt, time);
      for (let k = dancers.length - 1; k >= 0; k--) { const d = dancers[k]; d.t += dt; if (d.t >= d.life) { for (let j = 0; j < 4; j++) spawnButterfly(d.x, 1.2, d.z, 0.8, 0.9); dancers.splice(k, 1); } }
      stepButterflies(dt);
    } else if (cur === 1) {
      stepTang(dt, fighting, time);
      stepSha(dt, time);
      stepVillagers(dt, time);
      stepBone(dt, time);
      stepClones(dt, fighting, time);
      if (headbandT > 0) { headbandT -= dt; if (headbandT <= 0 && G.shiftFx.className === 'squeeze') G.shiftFx.className = 'hide'; }
      if (headbandCd > 0) headbandCd -= dt;
      if (fighting && !st.said72 && G.dreamTime > 0.6) { st.said72 = true; seventyTwo(false); say('naiwa.72', { volume: 1, duckTo: 0.3 }); G.heroCaption('七十二变！', '#ffe14d', 1.6); }
    } else if (cur === 2) {
      stepMill(dt, fighting, time);
      stepObstacles(dt, fighting);
      if (sancho && sancho.visible) {   // 小黄鸭桑丘：在路左边一摇一摆地跑，背着篮球
        sancho.position.x += (-ROAD_HALF - sancho.position.x) * Math.min(1, dt * 3);   // 路的左边沿上（镜头里看得见）
        sancho.position.z = player.z - 2.5 + Math.sin(time * 0.7) * 0.6;
        const w = Math.sin(time * 14);
        sancho.userData.inner.position.y = Math.abs(w) * 0.16;
        sancho.userData.inner.rotation.z = w * 0.16;
        sancho.userData.inner.rotation.x = 0.12;
        sancho.rotation.y = Math.PI;
        tags.sancho.position.set(sancho.position.x, 1.75, sancho.position.z);
        sanchoT -= dt;
        if (fighting && sanchoT <= 0) { sanchoT = 9 + Math.random() * 5; if (!st.saidGig) { st.saidGig = true; say('quixote.gigantes', { volume: 1, duckTo: 0.4 }); } else say('sancho.molinos', { volume: 0.9, rate: 1.12, duckTo: 0.45 }); }
        // 投篮：把背上的篮球砸向前面最近的障碍（砸飞它），砸完球自己弹回来
        ballT -= dt;
        if (fighting && ballT <= 0 && ball.t < 0) {
          let best = null, bd = 1e9;
          for (const o of obstacles) { const dz = player.z - o.z; if (o.fly < 0 && dz > 4 && dz < 22 && dz < bd) { bd = dz; best = o; } }
          if (best) {
            ballT = 6 + Math.random() * 4; ball.t = 0; ball.tgt = best; ball.x0 = sancho.position.x; ball.y0 = 1.0; ball.z0 = sancho.position.z;
            ball.m.visible = true; G.mobCaption(pick(['桑丘：老爷，看我运球过人！', '桑丘：中分、背带、篮球！', '桑丘：投篮！']), '#ffe9a8');
            G.sfx.boing(0.18);
          } else ballT = 1;
        }
      }
      if (ball.t >= 0) {
        ball.t += dt;
        const k = Math.min(1, ball.t / 0.75), o = ball.tgt;
        ball.m.position.set(ball.x0 + (o.x - ball.x0) * k, ball.y0 + Math.sin(k * Math.PI) * 4 + (o.h * 0.6 - ball.y0) * k, ball.z0 + (o.z - ball.z0) * k);
        ball.m.rotation.x -= dt * 14;
        if (k >= 1) { if (o.fly < 0) { knock(o, 'ball'); ft('砰！', o.x, 1.8, o.z, { color: '#ffb35c', stroke: '#4a1a04', h: 0.7, life: 0.7 }); } ball.t = -1; ball.m.visible = false; }
      }
    }
    stepSouls(dt);
  };

  function stepButterflies(dt) {
    if (!BF.n) return;
    idIndex.clear(); for (let i = 0; i < E.n; i++) idIndex.set(E.id[i], i);
    const time = G.time;
    for (let i = BF.n - 1; i >= 0; i--) {
      BF.life[i] -= dt;
      let tx = null, ty = 1, tz = 0;
      const tg = BF.tgt[i];
      if (tg >= 1000) { const t = towers[tg - 1000]; if (t && t.hp > 0) { tx = t.x; ty = 2.5; tz = t.z; } }
      else if (tg > 0) { const j = idIndex.get(tg); if (j !== undefined && E.dance[j] <= 0) { tx = E.x[j]; ty = 0.9; tz = E.z[j]; } }
      if (tx === null && BF.life[i] > 0.8 && tg !== 0) { BF.tgt[i] = pickTarget(BF.x[i], BF.z[i], 0.7); }
      const w = Math.sin(time * 7 + i) * 2.5;
      if (tx !== null) {
        const dx = tx - BF.x[i], dy = ty - BF.y[i], dz = tz - BF.z[i], d = Math.hypot(dx, dy, dz) || 1, sp = 9.5;
        const k = Math.min(1, dt * 3.2);
        BF.vx[i] += (dx / d * sp - BF.vx[i]) * k + (-dz / d) * w * dt * 3; BF.vy[i] += (dy / d * sp - BF.vy[i]) * k; BF.vz[i] += (dz / d * sp - BF.vz[i]) * k + (dx / d) * w * dt * 3;
        if (d < 0.75) {
          if (tg >= 1000) towerDamage(towers[tg - 1000], 1.0 * G.stats.dmgMul);
          else { const j = idIndex.get(tg); if (j !== undefined) G.hurtEnemy(j, 1.2 * G.stats.dmgMul, 0, 0); }
          if (Math.random() < 0.15) ft('✿', BF.x[i], BF.y[i] + 0.3, BF.z[i], { color: '#ffd0ea', stroke: '#6a2a4a', h: 0.45, life: 0.5 });
          BF.life[i] = 0;
          idIndex.clear(); for (let q = 0; q < E.n; q++) idIndex.set(E.id[q], q);
        }
      } else { BF.vy[i] += (2.2 - BF.y[i]) * dt * 2; BF.vx[i] *= 0.99; BF.vz[i] *= 0.99; }   // 没目标：在 2 米高的地方绕着飞
      // 最高飞到 4.2 米（再高就贴到俯视镜头上了）
      BF.x[i] += BF.vx[i] * dt; BF.y[i] = Math.min(4.2, Math.max(0.3, BF.y[i] + BF.vy[i] * dt)); BF.z[i] += BF.vz[i] * dt;
      if (BF.life[i] <= 0) { const j = --BF.n; for (const a of BF_A) a[i] = a[j]; }
    }
  }
  function stepTang(dt, fighting, time) {
    if (!tang.rig) return;
    if (tang.mamaCd > 0) tang.mamaCd -= dt;
    if (tang.hitT > 0) tang.hitT -= dt;
    let nearD = 1e9;
    for (let i = 0; i < E.n; i++) { if (E.lolT[i] > 0 || E.dance[i] > 0) continue; const d = (E.x[i] - tang.x) ** 2 + (E.z[i] - tang.z) ** 2; if (d < nearD) nearD = d; }
    nearD = Math.sqrt(nearD);
    let tx, tz, sp;
    if (tang.mode === 'kidnap') {   // 被妖怪抬着往远处跑
      tang.kidT += dt;
      const ax = tang.x - player.x, az = tang.z - player.z, ad = Math.hypot(ax, az) || 1;
      tx = tang.x + ax / ad * 3; tz = tang.z + az / ad * 3; sp = nearD < 2.5 ? 2.6 : 0.8;
      tang.y = nearD < 2.5 ? 1.0 + Math.abs(Math.sin(time * 10)) * 0.25 : Math.max(0, tang.y - dt * 3);
      if (tang.mamaCd <= 0) mama(Math.random() < 0.4);
      if (Math.hypot(player.x - tang.x, player.z - tang.z) < 1.7 || (nearD > 3 && tang.kidT > 1.5)) rescue(false);
      else if (tang.kidT > 9) { tang.x = player.x + 1.5; tang.z = player.z + 1.5; rescue(true); }
    } else {
      // 跟在奶蛙身后 2 米（瞄准方向的反面），别挡着喷字
      tx = player.x - player.aimX * 2.1; tz = player.z - player.aimZ * 2.1;
      sp = nearD < 3 ? 6 : 4.2;
      if (fighting && nearD < 5.5) { tang.scaredT = 1.0; if (tang.mamaCd <= 0) mama(false); }   // 妖怪一靠近（5.5 米）就喊妈妈
      if (tang.fear < 100 && nearD > 4) tang.fear = Math.min(100, tang.fear + dt * 3);
    }
    if (tang.scaredT > 0) tang.scaredT -= dt;
    const dx = tx - tang.x, dz = tz - tang.z, d = Math.hypot(dx, dz);
    let moving = 0;
    if (d > 0.35) { const s = Math.min(d, sp * dt); tang.x += dx / d * s; tang.z += dz / d * s; moving = 1; tang.face = Math.atan2(dx, dz); }
    else tang.face = Math.atan2(player.x - tang.x, player.z - tang.z);
    const p = { x: tang.x, z: tang.z }; G.pushOutWorld && G.pushOutWorld(p, 0.4); tang.x = p.x; tang.z = p.z;
    tang.walk += dt * (moving ? 1 : 0);
    tang.group.position.set(tang.x, tang.y, tang.z);
    let dr = tang.face - tang.group.rotation.y; dr = Math.atan2(Math.sin(dr), Math.cos(dr)); tang.group.rotation.y += dr * Math.min(1, dt * 10);
    const scared = tang.scaredT > 0 || tang.mode === 'kidnap';
    tang.inner.position.y = scared ? Math.abs(Math.sin(time * 16)) * 0.18 : moving ? Math.abs(Math.sin(time * 9)) * 0.06 : 0;
    tang.inner.rotation.z = scared ? Math.sin(time * 30) * 0.06 : 0;
    tangPose(tang.mode === 'kidnap' && tang.y > 0.3 ? 'carried' : scared ? 'scared' : moving ? 'walk' : 'pray', time, moving ? 1 : 0.3);
    tags.tang.position.set(tang.x, tang.y + 1.95, tang.z);
  }
  // 沙僧（鲸鱼女仆）：站在唐僧旁边，小碎步跟着走；师父被抓走时跑到奶蛙身边报信
  function stepSha(dt, time) {
    if (!sha || !sha.visible) return;
    const kid = tang.mode === 'kidnap';
    const tx = kid ? player.x - 1.3 : tang.x + 1.3, tz = kid ? player.z + 1.0 : tang.z + 0.5;
    const dx = tx - sha.position.x, dz = tz - sha.position.z, d = Math.hypot(dx, dz);
    if (d > 0.2) { const s = Math.min(d, (kid ? 7 : 4.5) * dt); sha.position.x += dx / d * s; sha.position.z += dz / d * s; sha.rotation.y = Math.atan2(dx, dz); }
    else sha.rotation.y = Math.atan2(player.x - sha.position.x, player.z - sha.position.z);
    const moving = d > 0.2, inner = sha.userData.inner;
    inner.position.y = moving ? Math.abs(Math.sin(time * 16)) * 0.1 : Math.sin(time * 2) * 0.02;
    inner.rotation.z = moving ? Math.sin(time * 16) * 0.08 : 0;
    inner.rotation.x = kid ? 0.25 : 0;
    tags.sha.position.set(sha.position.x, 1.95, sha.position.z);
  }
  // 鲲：《逍遥游》“北冥有鱼，其名为鲲”。老师在现实里念课文，梦里就飞过一条巨大的鲸鱼女仆；飞到正中间时把所有高雅塔“炖”一下
  function startKun() {
    if (!kun) return;
    kunState.t = 0; kunState.dir = Math.random() < 0.5 ? 1 : -1; kunState.hit = false;
    kunState.x = player.x - kunState.dir * 24; kunState.z = player.z + 0.5;
    kun.visible = true; kunShadow.visible = true; tags.kun.visible = true;
    say('teacher.kun', { volume: 1.1, duckTo: 0.35 });
    G.bark('teacher', '（现实里）北冥有鱼，其名为鲲。鲲之大……一锅炖不下。');
    window.__kun = (window.__kun || 0) + 1;
  }
  function stepKun(dt, time) {
    if (kunState.t < 0 || !kun) return;
    kunState.t += dt;
    kunState.x += kunState.dir * 8 * dt;
    kunState.z += (player.z + 0.5 - kunState.z) * Math.min(1, dt);
    // 像游行的大气球：脸朝镜头（+Z），身子往飞的方向歪，一上一下地飘，裙子底下离地 1.5 米
    const y = 1.5 + Math.sin(kunState.t * 2.2) * 0.6;
    kun.position.set(kunState.x, y, kunState.z);
    kun.rotation.y = Math.sin(kunState.t * 1.3) * 0.25;
    kun.userData.inner.rotation.z = -kunState.dir * 0.22 + Math.sin(kunState.t * 2.2) * 0.08;
    kun.userData.inner.rotation.x = Math.sin(kunState.t * 4.4) * 0.05;
    kunShadow.position.set(kunState.x, 0.03, kunState.z); kunShadow.scale.setScalar(2.6 - Math.sin(kunState.t * 2.2) * 0.3);
    tags.kun.position.set(kunState.x, y + 0.3, kunState.z);   // 名牌放在裙子下面（头顶太高，俯视镜头里看不到）
    if (!kunState.hit && Math.abs(kunState.x - player.x) < 1) {
      kunState.hit = true;
      G.heroCaption('鲲之大，一锅炖不下！', '#bfe0ff', 1.8); G.addShake(0.3);
      for (const t of towers) if (t.hp > 0) { towerDamage(t, t.max * 0.22); ft('炖！', t.x, 5.2, t.z, { color: '#ffffff', stroke: '#24405a', h: 1.0, life: 1.2 }); ft('咕嘟咕嘟', t.x, 4.4, t.z, { color: '#bfe0ff', stroke: '#24405a', h: 0.6, life: 1.2 }); }
      for (let i = 0; i < E.n; i++) if (TYPES[E.type[i]].ai === 'desk' && E.dance[i] <= 0) { E.stun[i] = 1.4; if (Math.random() < 0.3) ft(pick(['Oh my…', '好大一条鱼', '仰望']), E.x[i], 2.2, E.z[i], { color: '#e8d7b0', stroke: '#2a1a10', h: 0.5, life: 0.9 }); }
      for (let k = 0; k < 14; k++) spawnButterfly(kunState.x, 3, kunState.z, 1.6, 0.6);
    }
    if (Math.abs(kunState.x - player.x) > 26 && kunState.t > 2) { kunState.t = -1; kun.visible = false; kunShadow.visible = false; tags.kun.visible = false; }
  }
  function stepVillagers(dt, time) {
    for (const v of villagers) {
      if (v.gone > 0) {
        v.gone -= dt; v.g.visible = v.gone < 0.6 ? Math.floor(time * 20) % 2 === 0 : v.gone > 3.6 ? Math.floor(time * 30) % 2 === 0 : false; v.sp.visible = false;
        if (v.gone <= 0.6 && v.gone + dt > 0.6) { const a = Math.random() * 6.28; v.x = player.x + Math.sin(a) * 9; v.z = player.z + Math.cos(a) * 7; }
        continue;
      }
      v.g.visible = true; v.sp.visible = true;
      v.retarget -= dt;
      if (v.retarget <= 0 || Math.hypot(v.x - player.x, v.z - player.z) > 16) { v.retarget = 3 + Math.random() * 3; const a = Math.random() * 6.28, r = 6 + Math.random() * 5; v.tx = player.x + Math.sin(a) * r; v.tz = player.z + Math.cos(a) * r; }
      const dx = v.tx - v.x, dz = v.tz - v.z, d = Math.hypot(dx, dz);
      if (d > 0.3) { v.x += dx / d * 1.2 * dt; v.z += dz / d * 1.2 * dt; v.g.rotation.y = Math.atan2(dx, dz); }
      v.g.position.set(v.x, Math.abs(Math.sin(time * 6)) * 0.04, v.z);
      v.sp.position.set(v.x, 2.35, v.z);
    }
  }
  function stepBone(dt, time) {
    if (!bone.active || !bone.g) return;
    const b = BONE[bone.stage];
    if (bone.flash > 0) bone.flash -= dt;
    if (bone.revealT >= 0) {   // 现出原形：骨头架子抖两下，塌下去
      bone.revealT += dt;
      const k = Math.min(1, bone.revealT / 1.2);
      bone.g.position.set(bone.x + Math.sin(time * 40) * 0.05 * (1 - k), 0, bone.z);
      bone.g.userData.inner.scale.set(1 + k * 0.3, Math.max(0.05, 1 - k * k), 1 + k * 0.3);
      if (bone.revealT > 1.6) { scene.remove(bone.g); bone.g = null; bone.active = false; bone.stage++; bone.next = G.dreamTime + 2.5; }
      return;
    }
    // 走向唐僧；碰到了就把唐僧骗走（胆量哗哗地掉）
    const dx = tang.x - bone.x, dz = tang.z - bone.z, d = Math.hypot(dx, dz) || 1;
    if (d > 1.3) { bone.x += dx / d * 1.7 * dt; bone.z += dz / d * 1.7 * dt; }
    else if (tang.mode === 'follow') { tang.fear -= dt * 14; tang.hitT = 0.2; if (!bone.lured) { bone.lured = true; G.mobCaption('唐僧：女施主……（被骗走了）', '#ffd0ea'); tang.mamaCd = 0; mama(false, '妈妈！有女施主！'); } if (tang.fear <= 0) startKidnap(); }
    bone.g.position.set(bone.x, 0, bone.z);
    bone.g.rotation.y = Math.atan2(dx, dz);
    if (b && b.model === 'possum') {   // 背手负鼠：挺着肚子，左摇右晃，一步一顿，像领导视察
      const w = Math.sin(time * 3.2);
      bone.g.userData.inner.rotation.z = w * 0.1; bone.g.userData.inner.rotation.x = -0.12;
      bone.g.userData.inner.position.y = Math.abs(w) * 0.05;
    }
    // 火眼金睛：每 1.3 秒闪一下骷髅
    bone.glitch += dt;
    const g = (bone.glitch % 1.3) < 0.14;
    setMat(bone.g, g || bone.flash > 0 ? boneMat : holoPink);
    if (g && (bone.glitch % 1.3) < dt * 1.5 && Math.random() < 0.6) ft('💀', bone.x, 2.2, bone.z, { color: '#ffffff', h: 0.6, life: 0.4, rise: 0.4 });
    if (bone.sprite) bone.sprite.position.set(bone.x, (b ? b.h : 1.8) + 0.5, bone.z);
  }
  function stepClones(dt, fighting, time) {
    if (!clones.mesh || !clones.list.length) return;
    if (clones.burstT > 0) clones.burstT -= dt;
    const want = clones.burstT > 0 || G.laughT > 0 ? 72 : 18;
    clones.want = Math.min(clones.list.length, want);
    const rot = time * 0.6;
    for (let k = 0; k < clones.list.length; k++) {
      const c = clones.list[k];
      const a = c.a + rot * (k % 2 ? 1 : -1) * 0.5, r = c.r * (k < clones.want ? 1 : 0.3);
      const tx = player.x + Math.sin(a) * r, tz = player.z + Math.cos(a) * r;
      c.x += (tx - c.x) * Math.min(1, dt * 5); c.z += (tz - c.z) * Math.min(1, dt * 5);
      c.y = Math.max(0, c.y - dt * 4);
    }
    if (!fighting) return;
    // 分身们自动喷“嘿”：平时每秒约 6 口，七十二个全出来时每秒约 20 口
    clones.fireAcc += dt * clones.want * 0.32;
    while (clones.fireAcc >= 1) {
      clones.fireAcc -= 1;
      const c = clones.list[Math.random() * clones.want | 0]; if (!c) break;
      const j = G.nearestEnemy(c.x, c.z, 10);
      if (j < 0) continue;
      const ang = Math.atan2(E.x[j] - c.x, E.z[j] - c.z);
      G.shootFrom(c.x, c.z, ang, G.glyphHei, 0.75, 0.6, 1);
    }
    clones.chorusT -= dt;
    if (clones.chorusT <= 0) { clones.chorusT = clones.want > 20 ? 0.8 : 2.4; G.playHaChorus(clones.want > 20 ? 8 : 3, { spread: 0.6, volume: 0.12, rateMin: 1.5, rateMax: 2.3 }); }
  }
  function stepSouls(dt) {
    for (let k = souls.length - 1; k >= 0; k--) { const s = souls[k]; s.t += dt; s.y += dt * 1.5; if (s.t > 2.2) souls.splice(k, 1); }
  }
  function stepMill(dt, fighting, time) {
    if (mill.flash > 0) mill.flash -= dt;
    if (mill.catchCd > 0) mill.catchCd -= dt;
    if (mill.down) {
      mill.downT += dt;
      mill.group.rotation.x = -Math.min(Math.PI / 2 * 0.95, mill.downT * mill.downT * 2.2);
      mill.blades.rotation.z += dt * Math.max(0, 3 - mill.downT * 2);
      // 倒下 3.5 秒后：堂吉诃奶蛙又在前面看见一个巨人（在他眼里到处都是巨人），血更厚
      if (mill.downT > 3.5 && fighting && G.dreamTime < G.DREAM_LEN - 4) {
        mill.count = (mill.count || 0) + 1;
        mill.down = false; mill.downT = 0; mill.max = mill.hp = mill.max * 1.25; mill.z = player.z - 30; mill.trip = 0; mill.tripCd = 6; mill.catchCd = 3;
        mill.group.rotation.set(0, 0, 0);
        G.bark('quixote', pick(['看！前面又有一个巨人！', '巨人还有同伙！冲啊！', '这个巨人更大！为了杜尔西内娅！']));
        say('quixote.gigantes', { volume: 1, duckTo: 0.4 });
        G.heroCaption(`第 ${mill.count + 1} 个风车巨人！`, '#ffe14d', 1.6);
      }
      return;
    }
    // 风车巨人往前跑，和奶蛙保持 11~15 米（“呼”刚好打得到，越打越累、离得越近）；最快 12.5 米/秒，所以“开船”冲得上去。
    // 每隔七到十秒被自己的叶子绊一跤，一下子慢下来——这时候追得太近，就会被叶子挑起来（堂吉诃德最有名的那一幕）
    const f = mill.hp / mill.max;
    mill.tripCd -= dt;
    if (fighting && mill.tripCd <= 0 && mill.catchT < 0) {
      mill.tripCd = 7 + Math.random() * 3; mill.trip = 1.7;
      ft(pick(['绊了一跤！', '被自己的叶子绊倒了！', '风车：哎哟！']), mill.x, 7.5, mill.z, { color: '#ffffff', stroke: '#5a2a08', h: 1.0, life: 1.2 });
      say('fx.bruh', { volume: 0.7, duckTo: 1, bus: 'sfx' });
    }
    if (mill.trip > 0) mill.trip -= dt;
    const want = mill.trip > 0 || mill.catchT >= 0 ? 3 : 13 + 4 * f;
    mill.z += clamp((player.z - want - mill.z) * 1.6, -12.5, -2.5) * dt;
    mill.x += (Math.sin(time * 0.45) * 1.8 - mill.x) * Math.min(1, dt * 2);
    const gap = player.z - mill.z;
    mill.blades.rotation.z += dt * (2.2 + (1 - f) * 2);
    const tripK = mill.trip > 0 ? 1 : 0, run = Math.sin(time * 9) * (1 - tripK * 0.8);
    mill.legs[0].rotation.x = run * 0.6; mill.legs[1].rotation.x = -run * 0.6;
    mill.body.position.y = 1.7 + Math.abs(run) * 0.25; mill.body.rotation.z = Math.sin(time * 4.5) * 0.06 + tripK * Math.sin(time * 20) * 0.08;
    mill.group.rotation.x += ((tripK ? -0.28 : 0) - mill.group.rotation.x) * Math.min(1, dt * 6);   // 绊倒：往前栽
    mill.group.position.set(mill.x, 0, mill.z);
    // 扔酒桶
    mill.throwT -= dt;
    if (fighting && mill.throwT <= 0 && gap < 30) { mill.throwT = Math.max(1.6, 2.8 - layer * 0.1) * (0.8 + Math.random() * 0.4); addObstacle('barrel', mill.x + (Math.random() - 0.5) * 4, mill.z + 2.5, 6.5); }
    // 追得太近：被风车叶子挑起来转一圈，再甩出去（顺便长矛刺中一下）
    if (fighting && mill.catchT < 0 && mill.catchCd <= 0 && gap < 5.5) {
      if (G.boostT > 0 || Math.random() < 0.35) {   // 开船撞上去，或者运气好：长矛刺中，风车被撞出去
        mill.catchCd = 2.5; mill.trip = 0; millDamage(mill.max * 0.08, '长矛刺中了！'); G.addShake(0.4); G.sfx.boom(0.4);
        G.heroCaption('为了杜尔西内娅！刺中了！', '#ffe14d', 1.4);
      } else {
        mill.catchT = 0; G.heroCaption(LINES.millCatch, '#ffffff', 1.6); say('sancho.molinos', { volume: 1, rate: 1.12, duckTo: 0.4, delay: 0.3 });
        millDamage(mill.max * 0.1, '长矛刺中了！'); G.sfx.boing(0.3);
        window.__millCatch = (window.__millCatch || 0) + 1;
      }
    }
    if (mill.catchT >= 0) {
      mill.catchT += dt;
      const a = mill.blades.rotation.z + Math.PI / 2, hubY = 1.7 + 5.2, R = 3.4;
      if (mill.catchT < 1.5) { player.x = mill.x + Math.cos(a) * R; player.y = Math.max(0, hubY + Math.sin(a) * R - 1); player.z = mill.z + 2.6; }
      else {   // 甩出去：往后飞 12 米摔在地上
        player.z += dt * 14; player.y = Math.max(0, player.y - dt * 9);
        if (mill.catchT > 2.3 || (player.y <= 0 && mill.catchT > 1.8)) { mill.catchT = -1; mill.catchCd = 6; player.vy = 0; G.ring(player.x, player.z, 1.6, 0.4, '#e8c890'); G.addShake(0.4); }
      }
    }
  }
  function stepObstacles(dt, fighting) {
    for (let k = obstacles.length - 1; k >= 0; k--) {
      const o = obstacles[k];
      if (o.fly >= 0) { o.fly += dt; o.y += dt * (4 + o.fly * 10); o.roll += o.spin * dt; if (o.fly > 1.6) obstacles.splice(k, 1); continue; }
      if (o.vz) { o.z += o.vz * dt; o.roll -= o.vz * dt / 0.55; }
      if (o.z - player.z > 7) { obstacles.splice(k, 1); continue; }
      if (fighting && Math.abs(o.z - player.z) < o.r + 0.3 && Math.abs(o.x - player.x) < o.hw + 0.35 && player.y < o.h - 0.15 && mill.catchT < 0) {
        if (G.boostT > 0 || G.laughT > 0) knock(o, 'boost');
        else { G.stumble(o.kind === 'barrel' ? '被酒桶撞了！' : o.kind === 'fence' ? '撞栅栏了！' : pick(LINES.stumble)); knock(o, 'hit'); }
      }
    }
    for (let k = tornados.length - 1; k >= 0; k--) {
      const t = tornados[k]; t.t += dt; t.z -= dt * (G.runV + 8); t.x += (player.x - t.x) * dt;   // 比奶蛙快 8 米/秒，往前卷
      for (const o of obstacles) if (o.fly < 0 && Math.abs(o.z - t.z) < t.r && Math.abs(o.x - t.x) < t.r + 1) knock(o, 'gust');
      for (let i = E.n - 1; i >= 0; i--) if (Math.abs(E.z[i] - t.z) < t.r && Math.abs(E.x[i] - t.x) < t.r + 1) G.hurtEnemy(i, 99, 0, 0, 'sky');
      if (!t.hit && !mill.down && Math.abs(mill.z - t.z) < 3) { t.hit = true; millDamage(mill.max * 0.07, '被龙卷风卷到了！'); }
      if (t.t >= t.life) tornados.splice(k, 1);
    }
  }

  // ---------- 画 ----------
  D.draw = function (dt) {
    const time = G.time;
    if (cur === 0) {
      // 鼻涕泡：跟着呼吸一鼓一鼓，睡意越少越小；被戳的时候抖
      const s = (0.35 + 0.65 * st.sleep / 100) * (1 + Math.sin(time * 1.7) * 0.22) * (st.hitT > 0 ? 0.85 + Math.sin(time * 60) * 0.1 : 1);
      bubble.position.set(0.05, 0.98, -0.3 - s * 0.45); bubble.scale.setScalar(s * 1.5);
      bubble.visible = st.sleep > 0;
      if (sleeper) sleeper.userData.inner.position.y = Math.sin(time * 1.7) * 0.015;
      let bi = 0;
      for (const t of towers) {
        if (t.fallT < 0) {
          t.g.position.set(t.x + (t.flash > 0 ? (Math.random() - 0.5) * 0.12 : 0), 0, t.z); t.g.rotation.set(0, 0, 0); t.g.scale.setScalar(TOWER_S);
          // 塔顶的高雅企鹅：开火时往前一探（攻击帧），平时左右摇
          const fi = t.fire > 0 ? WALK_FRAMES + Math.min(7, Math.floor((1 - t.fire / 0.5) * 8)) : 0;
          G.addMinion(t.kind, fi, t.x, 4.3 * TOWER_S, t.z, t.yaw, 1.0, Math.sin(time * 2 + t.x) * 0.05, 0, t.flash > 0 ? [2, 2, 2] : [1, 1, 1]);
          if (bi < 8) {
            G.writeBill(hpBack.instanceMatrix.array, bi, t.x, HPY, t.z, 2.1, 0.22);
            const f = Math.max(0, t.hp / t.max);
            G.writeBill(hpFill.instanceMatrix.array, bi, t.x, HPY, t.z, 2.0 * f, 0.16);
            bi++;
          }
        } else {   // 倒塌：往一边倒，陷下去，最后不见
          const k = Math.min(1, t.fallT / 1.1);
          t.g.rotation.set(k * 1.3, 0, k * 0.5); t.g.position.set(t.x, -k * k * 2.5, t.z);
          if (t.fallT > 1.6) t.g.visible = false;
        }
      }
      // 血条要正对镜头：hpFill 的平面是从左边往右长的，所以先算出镜头右手方向，把起点挪到左端
      hpBack.count = bi; hpFill.count = bi;
      if (bi) {
        const e = G.camera.matrixWorld.elements, rx = e[0], ry = e[1], rz = e[2];
        let j = 0;
        for (const t of towers) if (t.fallT < 0 && j < bi) { const a = hpFill.instanceMatrix.array, o = j * 16; a[o + 12] = t.x - rx * 1.0; a[o + 13] = HPY - ry * 1.0; a[o + 14] = t.z - rz * 1.0; j++; }
      }
      hpBack.instanceMatrix.needsUpdate = true; hpFill.instanceMatrix.needsUpdate = true;
      for (const d of dancers) {
        const ph = d.t * 1.7 + d.ph, fin = d.t > d.life - 0.8;
        if (fin) G.addMinion(d.kind, 0, d.x, 0, d.z, Math.atan2(-(player.z - d.z), player.x - d.x), 1.15, 0, Math.min(0.9, (d.t - d.life + 0.8) * 2.5));   // 谢幕：鞠躬
        else G.addMinion(d.kind, danceIndex(ph), d.x, Math.abs(Math.sin(ph * Math.PI * 2)) * 0.15, d.z, d.t * 3.4, 1.15, Math.sin(ph * 6.28) * 0.1);
      }
    } else { hpBack.count = 0; hpFill.count = 0; }
    // 蝴蝶
    for (let i = 0; i < BF.n; i++) {
      const yaw = Math.atan2(BF.vx[i], BF.vz[i]), flap = Math.sin(time * 22 + i * 1.7) * 0.9, c = BF_COLORS[BF.col[i]];
      setInst(wingR, i, BF.x[i], BF.y[i], BF.z[i], 0, yaw, flap, 0.85); setInst(wingL, i, BF.x[i], BF.y[i], BF.z[i], 0, yaw, -flap, 0.85);
      for (const w of [wingR, wingL]) { const a = w.instanceColor.array; a[i * 3] = c[0]; a[i * 3 + 1] = c[1]; a[i * 3 + 2] = c[2]; }
    }
    for (const w of [wingR, wingL]) { w.count = BF.n; w.instanceMatrix.needsUpdate = true; w.instanceColor.needsUpdate = true; }
    // 分身
    if (clones.mesh) {
      let n = 0;
      if (cur === 1) for (let k = 0; k < clones.list.length; k++) {
        const c = clones.list[k], on = k < clones.want;
        if (!on && Math.hypot(c.x - player.x, c.z - player.z) < 0.8) continue;
        const hop = Math.abs(Math.sin(time * 12 + c.ph)) * 0.18, s = 0.5 * (on ? 1 : 0.6);
        const yaw = Math.atan2(player.aimX, player.aimZ) + Math.sin(time * 3 + c.ph) * 0.4;
        setInst(clones.mesh, n, c.x, c.y + hop, c.z, Math.sin(time * 18 + c.ph) * 0.12 - 0.15, yaw, Math.sin(time * 14 + c.ph) * 0.15, s);
        const a = clones.mesh.instanceColor.array, h = c.hue; a[n * 3] = 1 + h * 0.15; a[n * 3 + 1] = 1; a[n * 3 + 2] = 0.9 + (1 - h) * 0.2;
        n++;
      }
      clones.mesh.count = n; clones.mesh.instanceMatrix.needsUpdate = true; clones.mesh.instanceColor.needsUpdate = true;
    }
    // 灵魂出窍
    for (let k = 0; k < souls.length; k++) {
      const s = souls[k], f = Math.min(1, s.t / 0.3) * (s.t > 1.6 ? Math.max(0, 1 - (s.t - 1.6) / 0.6) : 1), sz = 0.7 + s.t * 0.25;
      G.writeBill(soulMesh.instanceMatrix.array, k, s.x + Math.sin(s.t * 4 + s.ph) * 0.3, s.y, s.z, sz, sz);
      const a = soulMesh.instanceColor.array; a[k * 3] = f * (0.7 + 0.3 * s.col[0]); a[k * 3 + 1] = f * (0.75 + 0.25 * s.col[1]); a[k * 3 + 2] = f;
    }
    soulMesh.count = souls.length; soulMesh.instanceMatrix.needsUpdate = true; soulMesh.instanceColor.needsUpdate = true;
    // 白骨精、良民的名牌朝向由 Sprite 自己处理；风车的颜色
    if (cur === 2) {
      const c = { hay: 0, barrel: 0, fence: 0 };
      for (const o of obstacles) {
        const m = obMesh[o.kind], k = c[o.kind]++;
        if (k >= OB_MAX) continue;
        if (o.wob > 0) o.wob -= dt;
        const wb = o.wob > 0 ? Math.sin(time * 50) * 0.08 : 0;   // 挨了一口“呼”：抖一下
        if (o.kind === 'hay') setInst(m, k, o.x + wb, 0.68 + o.y, o.z, o.fly >= 0 ? o.roll : 0, o.fly >= 0 ? o.roll * 0.7 : 0, wb, 1);
        else if (o.kind === 'barrel') setInst(m, k, o.x, 0.55 + o.y, o.z, o.roll, 0, 0, 1);
        else setInst(m, k, o.x, o.y, o.z, o.fly >= 0 ? o.roll : 0, 0, o.fly >= 0 ? o.roll * 0.5 : 0, 4.4, 1, 1);
      }
      for (const [k, m] of Object.entries(obMesh)) { m.count = Math.min(OB_MAX, c[k]); m.instanceMatrix.needsUpdate = true; }
      mill.body.traverse((o) => { if (o.isMesh && o.material.emissive) o.material.emissive.setHex(mill.flash > 0 ? 0x664422 : o.material.userData.e0 ?? (o.material.userData.e0 = o.material.emissive.getHex())); });
      let ti = 0;
      for (const t of tornados) {
        const m = tornadoPool[ti++]; if (!m) break;
        const k = Math.min(1, t.t / 0.3) * (t.t > t.life - 0.4 ? (t.life - t.t) / 0.4 : 1);
        m.visible = true; m.position.set(t.x, 0, t.z); m.rotation.y = -time * 9; m.scale.set(k * 1.2, 0.6 + k * 0.5, k * 1.2);
        m.material.opacity = 0.7 * k; m.material.map.offset.y = -time * 1.4;
      }
      for (; ti < tornadoPool.length; ti++) tornadoPool[ti].visible = false;
    } else for (const m of Object.values(obMesh)) m.count = 0;
    // 换梦的过场
    if (gust) {
      gust.t += dt;
      gust.mesh.position.set(player.x, 1.5, player.z - 2 + gust.t * 10);
      gust.mesh.material.opacity = Math.min(0.8, gust.t * 2);
      gust.mesh.material.map.offset.x = -gust.t * 3;
    }
    for (const c of chunks) { c.m.position.y = c.y; c.m.rotation.set(c.rx, 0, c.rz); }
  };

  // ---------- 换梦的过场 ----------
  D.shiftStart = function (kind) {
    st.shift = kind;
    if (kind === 'sneeze') {   // 打喷嚏：先憋 0.8 秒，“阿——嚏！”，所有怪和塔被吹飞（录音里 0.09 秒是“嚏”，所以延后 0.72 秒放）
      say('fx.sneeze', { volume: 1.3, duckTo: 0.2, delay: 0.72 });
      G.sfx.tone(330, 0.04, 0.7, 'sine');   // 吸气“啊——”
      for (const t of towers) if (t.hp > 0) t.hp = 0.0001;
      st.sneezed = false;
    } else if (kind === 'quake') {   // 笑到地震：分身全出来一起笑，地面从中间裂开，然后碎成一块块掉下去
      seventyTwo(true);
      say('wukong.laugh', { volume: 1, duckTo: 0.4 }); G.playHaChorus(18, { spread: 1.4, volume: 0.2, rateMin: 1.2, rateMax: 2.2 });
      for (let i = 0; i < E.n; i++) { E.lolT[i] = 0.01; }
      crack.visible = true; crack.position.set(player.x, 0.05, player.z); crack.scale.setScalar(0.05);
      st.fell = false;
    } else if (kind === 'gust') {   // 风车扇一大口风：白色的风线扑过来，奶蛙被吹上天
      say('fx.vineboom', { volume: 0.6, duckTo: 0.6, bus: 'sfx' }); G.sfx.whoosh(0.8);
      const m = new THREE.Mesh(new THREE.PlaneGeometry(26, 8), new THREE.MeshBasicMaterial({ map: swirlTex, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }));
      m.rotation.y = 0; scene.add(m); gust = { mesh: m, t: 0 };
      player.vy = 0;
    }
  };
  D.shiftStep = function (dt, t, kind) {
    if (kind === 'sneeze') {
      if (t < 0.8) { G.setHeroPuff(1 + t * 0.5 + Math.sin(t * 40) * 0.02); G.addShake(0.05); }
      else if (!st.sneezed) {
        st.sneezed = true; G.flash(); G.addShake(1.0);
        G.setHeroPuff(0.85);
        for (let i = E.n - 1; i >= 0; i--) G.killEnemy(i, 'blow');
        for (const tw of towers) if (tw.fallT < 0) tw.fallT = 0;
        for (let i = 0; i < BF.n; i++) { const dx = BF.x[i] - player.x, dz = BF.z[i] - player.z, d = Math.hypot(dx, dz) || 1; BF.vx[i] = dx / d * 18; BF.vz[i] = dz / d * 18; BF.vy[i] = 6; BF.tgt[i] = 0; }
        for (let k = 0; k < 20; k++) spawnButterfly(player.x, 1.5, player.z, 3, 0);
        G.shiftFx.className = 'flashW'; void G.shiftFx.offsetWidth;
        if (sleeper) sleeper.userData.inner.rotation.x = 0.2;   // 课桌上的奶蛙也被自己的喷嚏吓醒了一下
        bubble.visible = false;
      }
      stepButterflies(dt);
    } else if (kind === 'quake') {
      stepSouls(dt);
      if (!st.fell) stepClones(dt, false, G.time);
      else { st.cloneFall += dt; for (const c of clones.list) { c.x += c.fx * dt; c.z += c.fz * dt; c.y = -st.cloneFall * st.cloneFall * 8; } }
      if (t < 1.1) { crack.scale.setScalar(0.05 + t / 1.1); G.addShake(0.15 + t * 0.5); }
      else if (!st.fell) {
        st.fell = true; crack.visible = false; G.worldVisible(false); G.flash();
        for (let i = E.n - 1; i >= 0; i--) G.killEnemy(i, 'fall');
        // 地面碎成一块块往下掉（离奶蛙近的先掉）
        const mat = new THREE.MeshLambertMaterial({ map: G.floorMat.map, color: 0xdddddd });
        for (let k = 0; k < 44; k++) {
          const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 15, s = 2.2 + Math.random() * 1.8;
          const m = new THREE.Mesh(new THREE.BoxGeometry(s, 0.5, s * (0.7 + Math.random() * 0.5)), mat);
          m.position.set(player.x + Math.cos(a) * r, -0.25, player.z + Math.sin(a) * r); m.rotation.y = Math.random() * 3; scene.add(m);
          chunks.push({ m, y: -0.25, vy: 0, delay: r / 15 * 0.5, rx: 0, rz: 0, sx: (Math.random() - 0.5) * 3, sz: (Math.random() - 0.5) * 3 });
        }
        G.shiftFx.className = 'falling'; void G.shiftFx.offsetWidth;
        for (const c of clones.list) { const a = Math.random() * 6.28; c.fx = Math.cos(a) * 3; c.fz = Math.sin(a) * 3; }   // 分身们也跟着往下掉
        st.cloneFall = 0; dropV = 0;
      } else {
        for (const c of chunks) { c.delay -= dt; if (c.delay > 0) continue; c.vy -= 20 * dt; c.y += c.vy * dt; c.rx += c.sx * dt; c.rz += c.sz * dt; }
        dropV -= 16 * dt; camDrop += dropV * dt * 0.6; player.y = Math.max(-30, player.y + dropV * dt * 0.5);
      }
    } else if (kind === 'gust') {
      player.vy += dt * 14; player.y += player.vy * dt; player.z += dt * 6;
      G.addShake(0.2);
      if (t > 0.9 && !st.gflash) { st.gflash = true; G.flash(); G.shiftFx.className = 'flashW'; void G.shiftFx.offsetWidth; }
    }
  };

  return D;
}

// 三个梦境的场景：地面贴图、地块里的摆设、灯光和雾的配色。地图没有边界：地面和摆设按 40 米一块无缝重复，玩家走到哪铺到哪。
//   0 庄周梦蝶：宣纸地面、水墨晕染，莲花池、太湖石、竹子、石灯笼，雾是米白色的（像画里的留白）
//   1 赛博西游：黑色柏油路、霓虹网格，霓虹宝塔、全息招牌（花果山网吧、盘丝洞 KTV、白骨精医美……）、自动售货机
//   2 堂吉诃奶蛙：拉曼查的麦田，中间一条土路（跑酷的路），路边是风车、干草垛、橄榄树
// 这里只管“画出来”和“挡路”，玩法在 dreamplay.js 和 game.js。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const TILE = 40;
export const ROAD_HALF = 5;   // 跑酷那条路的半宽（米）

export function canvasTex(size, draw, repeat) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; }
  return t;
}
const seeded = (seed) => () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const FONT = '"Microsoft YaHei","PingFang SC","Noto Sans CJK SC","Heiti SC",sans-serif';
// 画在“四方连续”贴图上：同一个图形在 3×3 的位置各画一次，接缝处也连得上
function wrap9(S, fn) { for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) fn(ox, oy); }

// ---------- 地面 ----------
// 宣纸：米黄底、纸纹、淡淡的水墨晕染，几笔竹叶，角上一个红色的“梦”字印章
function paperFloor() {
  return canvasTex(1024, (g, S) => {
    const rnd = seeded(5);
    g.fillStyle = '#efe7d3'; g.fillRect(0, 0, S, S);
    for (let k = 0; k < 9000; k++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '255,255,250' : '170,150,120'},${0.05 + rnd() * 0.06})`; g.fillRect(rnd() * S, rnd() * S, 1 + rnd() * 5, 1); }
    for (let k = 0; k < 16; k++) {
      const x = rnd() * S, y = rnd() * S, r = 60 + rnd() * 170, a = 0.03 + rnd() * 0.06;
      wrap9(S, (ox, oy) => { const gr = g.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, r); gr.addColorStop(0, `rgba(40,44,48,${a})`); gr.addColorStop(1, 'rgba(40,44,48,0)'); g.fillStyle = gr; g.fillRect(x + ox - r, y + oy - r, r * 2, r * 2); });
    }
    // 竹叶：一笔一笔的淡墨（太浓了从上面看像一道道影子）
    for (let k = 0; k < 22; k++) {
      const x = rnd() * S, y = rnd() * S, ang = rnd() * Math.PI * 2, len = 22 + rnd() * 34, a = 0.05 + rnd() * 0.07;
      wrap9(S, (ox, oy) => {
        g.save(); g.translate(x + ox, y + oy); g.rotate(ang); g.fillStyle = `rgba(30,34,30,${a})`;
        g.beginPath(); g.moveTo(0, 0); g.quadraticCurveTo(len * 0.5, -len * 0.16, len, 0); g.quadraticCurveTo(len * 0.5, len * 0.12, 0, 0); g.fill(); g.restore();
      });
    }
    g.save(); g.translate(S * 0.78, S * 0.2); g.rotate(-0.08);
    g.fillStyle = 'rgba(190,40,36,.55)'; g.fillRect(-34, -34, 68, 68);
    g.fillStyle = 'rgba(239,231,211,.9)'; g.font = `900 46px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('梦', 0, 3); g.restore();
  }, true);
}
// 赛博街道：黑色柏油、青色和品红的霓虹网格、积水的反光，地上喷着大字
function cyberFloor() {
  return canvasTex(1024, (g, S) => {
    const rnd = seeded(13);
    g.fillStyle = '#0d0b16'; g.fillRect(0, 0, S, S);
    for (let k = 0; k < 6000; k++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '60,50,90' : '0,0,0'},${rnd() * 0.25})`; g.fillRect(rnd() * S, rnd() * S, 2, 2); }
    for (let k = 0; k < 10; k++) {   // 积水：一滩滩紫色、青色的倒影
      const x = rnd() * S, y = rnd() * S, r = 40 + rnd() * 90, c = rnd() < 0.5 ? '120,60,255' : '40,220,255';
      wrap9(S, (ox, oy) => { const gr = g.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, r); gr.addColorStop(0, `rgba(${c},.22)`); gr.addColorStop(1, `rgba(${c},0)`); g.fillStyle = gr; g.fillRect(x + ox - r, y + oy - r, r * 2, r * 2); });
    }
    const cell = S / 20;
    g.shadowBlur = 10;
    g.strokeStyle = 'rgba(70,235,255,.35)'; g.shadowColor = '#3ef0ff'; g.lineWidth = 2;
    for (let i = 0; i <= 20; i++) { g.beginPath(); g.moveTo(i * cell, 0); g.lineTo(i * cell, S); g.stroke(); g.beginPath(); g.moveTo(0, i * cell); g.lineTo(S, i * cell); g.stroke(); }
    g.strokeStyle = 'rgba(255,60,200,.55)'; g.shadowColor = '#ff3cc8'; g.lineWidth = 4;
    for (const i of [0, 10, 20]) { g.beginPath(); g.moveTo(i * cell, 0); g.lineTo(i * cell, S); g.stroke(); g.beginPath(); g.moveTo(0, i * cell); g.lineTo(S, i * cell); g.stroke(); }
    g.shadowBlur = 0;
    g.font = `900 64px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillStyle = 'rgba(255,220,80,.32)'; g.fillText('西天 → 十万八千里', S * 0.5, S * 0.3);
    g.fillStyle = 'rgba(80,240,255,.28)'; g.fillText('禁止七十二变', S * 0.25, S * 0.72);
    g.fillStyle = 'rgba(255,80,200,.28)'; g.fillText('妖怪请走左边', S * 0.75, S * 0.86);
  }, true);
}
// 拉曼查：金色麦田，正中间一条土路（沿 Z 方向，宽 10 米，贴图里占 1/4），路上有车辙
function manchaFloor() {
  return canvasTex(1024, (g, S) => {
    const rnd = seeded(29);
    g.fillStyle = '#d6ad55'; g.fillRect(0, 0, S, S);
    for (let k = 0; k < 16000; k++) { const v = rnd(); g.fillStyle = v < 0.4 ? 'rgba(240,205,110,.55)' : v < 0.8 ? 'rgba(160,115,40,.4)' : 'rgba(120,140,60,.35)'; const x = rnd() * S, y = rnd() * S; g.fillRect(x, y, 2, 6); if (y > S - 6) g.fillRect(x, y - S, 2, 6); }
    const x0 = S * 0.375, w = S * 0.25;
    g.fillStyle = '#b48958'; g.fillRect(x0, 0, w, S);
    for (let k = 0; k < 5000; k++) { g.fillStyle = `rgba(${rnd() < 0.5 ? '90,62,36' : '220,190,150'},${rnd() * 0.35})`; g.fillRect(x0 + rnd() * w, rnd() * S, 2 + rnd() * 3, 2 + rnd() * 3); }
    g.fillStyle = 'rgba(80,55,30,.35)';
    for (const f of [0.3, 0.7]) g.fillRect(x0 + w * f - 7, 0, 14, S);   // 车辙
    g.fillStyle = 'rgba(110,130,50,.6)';
    for (let y = 0; y < S; y += 6) { g.fillRect(x0 - 6 + rnd() * 6, y, 6, 6); g.fillRect(x0 + w - rnd() * 6, y, 6, 6); }   // 路边的草
  }, true);
}

// ---------- 材质 ----------
const lam = (color, emissive = 0) => new THREE.MeshLambertMaterial({ color, emissive });
const neon = (color) => new THREE.MeshBasicMaterial({ color });
function glowTex(rgb) {
  return canvasTex(64, (g, s) => { const r = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2); r.addColorStop(0, `rgba(${rgb},1)`); r.addColorStop(0.35, `rgba(${rgb},.45)`); r.addColorStop(1, `rgba(${rgb},0)`); g.fillStyle = r; g.fillRect(0, 0, s, s); });
}
const additive = (map, opacity = 1) => new THREE.MeshBasicMaterial({ map, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending });
// 全息招牌：一张贴图里画好所有招牌，每块招牌取其中一格
const SIGNS = ['花果山网吧', '盘丝洞KTV', '白骨精医美', '高老庄相亲角', '火焰山充电站', '女儿国免签', '天庭外卖', '蟠桃会员店', '金箍棒五金', '通天河游泳馆'];
const signTex = canvasTex(1024, (g, S) => {
  const rows = SIGNS.length, h = S / rows;
  SIGNS.forEach((t, i) => {
    const c = ['#3ef0ff', '#ff3cc8', '#ffe14d', '#7dff7a', '#ff8a3c'][i % 5];
    g.fillStyle = 'rgba(10,6,24,.85)'; g.fillRect(0, i * h, S, h);
    g.strokeStyle = c; g.lineWidth = 6; g.shadowColor = c; g.shadowBlur = 16; g.strokeRect(8, i * h + 8, S - 16, h - 16);
    g.fillStyle = c; g.font = `900 ${h * 0.6}px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(t, S / 2, i * h + h / 2 + 2);
    g.shadowBlur = 0;
  });
});
const MAT = {
  // 庄周梦蝶
  ink: lam(0x3a3e3c), inkLight: lam(0x7d837c), stone: lam(0xb7b2a6), water: lam(0x9fb6b4, 0x1a2a2a), leaf: lam(0x5f8a5a), lotus: lam(0xf2a7b8, 0x3a1a20), bamboo: lam(0x4f7a46), paperLamp: lam(0xf4ead2, 0x4a3a20),
  // 赛博西游
  tower: lam(0x1b1530), neonC: neon(0x3ef0ff), neonM: neon(0xff3cc8), neonY: neon(0xffd84d), lanternR: neon(0xff3a3a), metal: lam(0x3a3650), vend: lam(0x26304a, 0x0a1430),
  sign: new THREE.MeshBasicMaterial({ map: signTex, side: THREE.DoubleSide, transparent: true, opacity: 0.92, depthWrite: false }),
  // 堂吉诃奶蛙
  whitewash: lam(0xf1ebde, 0x1a1810), roof: lam(0x8a4a2c), wood: lam(0x6a4a2c), hay: lam(0xe0b85a, 0x2a1a04), olive: lam(0x6f7d45), trunk: lam(0x5a4a38), wall: lam(0xb9a68a),
  glowC: additive(glowTex('80,240,255'), 0.5), glowM: additive(glowTex('255,70,200'), 0.45), glowW: additive(glowTex('255,214,140'), 0.55),
};

// 每个梦境：地块里的摆设（会挡路的写在这里，r 是挡路的半径）
const OBS = {
  0: [
    { kind: 'pond', x: -15, z: -14, r: 2.6 }, { kind: 'pond', x: 15, z: 14, r: 2.6 },
    { kind: 'rock', x: 15, z: -15, r: 1.2 }, { kind: 'rock', x: -15, z: 15, r: 1.2 },
    { kind: 'bamboo', x: -17, z: 2, r: 1.0 }, { kind: 'bamboo', x: 17, z: -2, r: 1.0 },
    { kind: 'lantern', x: 6, z: -17, r: 0.5 }, { kind: 'lantern', x: -6, z: 17, r: 0.5 },
  ],
  1: [
    { kind: 'pagoda', x: -16, z: -16, r: 2.2 }, { kind: 'pagoda', x: 16, z: 16, r: 2.2 },
    { kind: 'sign', x: 0, z: -17, r: 0.6, s: 0 }, { kind: 'sign', x: 17, z: 0, r: 0.6, s: 3 }, { kind: 'sign', x: -17, z: 0, r: 0.6, s: 6 }, { kind: 'sign', x: 0, z: 17, r: 0.6, s: 8 },
    { kind: 'vend', x: 16, z: -16, r: 1.0 }, { kind: 'vend', x: -16, z: 16, r: 1.0 },
  ],
  // 跑酷：路（|x| < 5）上不放会挡路的东西，路上的障碍是 dreamplay.js 动态生成的
  2: [
    { kind: 'mill', x: -13, z: -12, r: 2.2 }, { kind: 'mill', x: 14, z: 9, r: 2.2 },
    { kind: 'hay', x: 9, z: -4, r: 1.2 }, { kind: 'hay', x: -9, z: 15, r: 1.2 },
    { kind: 'olive', x: -10, z: 2, r: 1.0 }, { kind: 'olive', x: 11, z: -17, r: 1.0 },
    { kind: 'wall', x: -16, z: 16, r: 0 }, { kind: 'wall', x: 16, z: -6, r: 0 },
  ],
};
export const MILL_SPOTS = OBS[2].filter((o) => o.kind === 'mill');

function buildTile(n, PITCH) {
  const parts = Object.fromEntries(Object.keys(MAT).map((k) => [k, []]));
  const put = (k, geo, x, y, z, rx = 0, ry = 0, rz = 0, s = 1) => {
    geo.rotateX(rx); geo.rotateY(ry); geo.rotateZ(rz); if (s !== 1) geo.scale(s, s, s); geo.translate(x, y, z);
    parts[k].push(geo.index ? geo.toNonIndexed() : geo);
  };
  const glow = (k, x, y, z, s) => { const gl = new THREE.PlaneGeometry(s, s); gl.rotateX(-PITCH); put(k, gl, x, y, z); };
  const rnd = seeded(101 + n);
  for (const o of OBS[n]) {
    const { x, z } = o;
    if (o.kind === 'pond') {
      put('stone', new THREE.CylinderGeometry(2.7, 2.8, 0.25, 20), x, 0.12, z);
      put('water', new THREE.CylinderGeometry(2.45, 2.45, 0.05, 20), x, 0.26, z);
      for (let k = 0; k < 6; k++) { const a = rnd() * 6.28, d = rnd() * 1.8; put('leaf', new THREE.CircleGeometry(0.42 + rnd() * 0.2, 12, 0.3, 5.9), x + Math.cos(a) * d, 0.3, z + Math.sin(a) * d, -Math.PI / 2, rnd() * 6); }
      for (let k = 0; k < 3; k++) { const a = rnd() * 6.28, d = 0.6 + rnd() * 1.4; put('lotus', new THREE.ConeGeometry(0.22, 0.3, 7, 1, true), x + Math.cos(a) * d, 0.42, z + Math.sin(a) * d, Math.PI); put('lotus', new THREE.SphereGeometry(0.16, 8, 6), x + Math.cos(a) * d, 0.42, z + Math.sin(a) * d); }
    } else if (o.kind === 'rock') {   // 太湖石：几块歪歪扭扭的石头叠起来
      for (let k = 0; k < 4; k++) put(k % 2 ? 'stone' : 'inkLight', new THREE.IcosahedronGeometry(0.7 - k * 0.1, 0).scale(1, 1.3, 0.8), x + (rnd() - 0.5) * 0.6, 0.5 + k * 0.62, z + (rnd() - 0.5) * 0.6, rnd(), rnd() * 6, rnd());
    } else if (o.kind === 'bamboo') {
      for (let k = 0; k < 7; k++) {
        const bx = x + (rnd() - 0.5) * 1.6, bz = z + (rnd() - 0.5) * 1.6, h = 3.4 + rnd() * 2.2;
        put('bamboo', new THREE.CylinderGeometry(0.07, 0.09, h, 6), bx, h / 2, bz, (rnd() - 0.5) * 0.12, 0, (rnd() - 0.5) * 0.12);
        for (let j = 0; j < 4; j++) put('leaf', new THREE.ConeGeometry(0.12, 0.7, 4).scale(1, 1, 0.2), bx + (rnd() - 0.5) * 0.6, h * (0.55 + j * 0.12), bz + (rnd() - 0.5) * 0.6, rnd() * 2, rnd() * 6, 1.2);
      }
    } else if (o.kind === 'lantern') {   // 石灯笼，里面亮着暖光
      put('stone', new THREE.CylinderGeometry(0.35, 0.45, 0.3, 6), x, 0.15, z);
      put('stone', new THREE.CylinderGeometry(0.12, 0.16, 0.9, 6), x, 0.75, z);
      put('paperLamp', new THREE.BoxGeometry(0.45, 0.4, 0.45), x, 1.38, z);
      put('stone', new THREE.ConeGeometry(0.5, 0.35, 6), x, 1.76, z);
      glow('glowW', x, 1.38, z, 1.6);
    } else if (o.kind === 'pagoda') {   // 霓虹宝塔：一层层往上收，每层边上一圈霓虹灯管
      for (let k = 0; k < 6; k++) {
        const w = 3.6 - k * 0.45, y = 0.6 + k * 1.3;
        put('tower', new THREE.BoxGeometry(w, 1.0, w), x, y, z);
        put(k % 2 ? 'neonM' : 'neonC', new THREE.BoxGeometry(w + 0.5, 0.08, w + 0.5), x, y + 0.55, z);
        put('lanternR', new THREE.SphereGeometry(0.16, 6, 5), x + w / 2 + 0.2, y + 0.25, z + w / 2 + 0.2);
      }
      put('neonY', new THREE.ConeGeometry(0.3, 1.6, 6), x, 8.9, z);
      glow('glowM', x, 4, z, 9);
    } else if (o.kind === 'sign') {   // 全息招牌：一根灯杆，上面一块发光的牌子
      put('metal', new THREE.CylinderGeometry(0.08, 0.1, 3.6, 6), x, 1.8, z);
      const row = SIGNS.length - 1 - (o.s % SIGNS.length);   // 贴图里第 s 块招牌（贴图的 v 从下往上数）
      const plane = () => { const pl = new THREE.PlaneGeometry(3.4, 0.68), uv = pl.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setY(i, (row + uv.getY(i)) / SIGNS.length); return pl; };
      put('sign', plane(), x, 3.7, z, -PITCH * 0.6);    // 朝着俯视镜头
      put('sign', plane(), x, 3.0, z, 0, Math.PI / 2);   // 侧面再挂一块，第三人称也看得到
      glow('glowC', x, 3.6, z, 4.5);
    } else if (o.kind === 'vend') {   // 自动售货机（卖蟠桃）
      put('vend', new THREE.BoxGeometry(1.2, 2.0, 0.9), x, 1.0, z);
      put('neonC', new THREE.BoxGeometry(1.0, 1.2, 0.05), x, 1.2, z + 0.46);
      for (let k = 0; k < 6; k++) put('lotus', new THREE.SphereGeometry(0.1, 6, 5), x - 0.3 + (k % 3) * 0.3, 0.9 + (k / 3 | 0) * 0.4, z + 0.48);
      glow('glowC', x, 1.2, z + 0.6, 2.6);
    } else if (o.kind === 'mill') {   // 远处的风车（不会动的那种；会跑的那个在 dreamplay.js）
      put('whitewash', new THREE.CylinderGeometry(1.5, 2.0, 6.5, 14), x, 3.25, z);
      put('roof', new THREE.ConeGeometry(1.9, 1.9, 14), x, 7.4, z);
      put('wood', new THREE.BoxGeometry(0.5, 1.2, 0.08), x, 1.0, z + 1.95);
      for (let k = 0; k < 4; k++) put('wood', new THREE.BoxGeometry(0.5, 4.6, 0.08), x, 6.6, z + 2.0, 0, 0, k * Math.PI / 2 + 0.4, 1);
    } else if (o.kind === 'hay') {
      put('hay', new THREE.CylinderGeometry(1.1, 1.2, 1.3, 12).rotateZ(Math.PI / 2), x, 1.1, z, 0, rnd() * 3);
      put('hay', new THREE.CylinderGeometry(0.9, 1.0, 1.1, 12).rotateZ(Math.PI / 2), x + 0.6, 0.9, z + 1.6, 0, rnd() * 3);
    } else if (o.kind === 'olive') {
      put('trunk', new THREE.CylinderGeometry(0.16, 0.26, 1.6, 6), x, 0.8, z, 0.1, 0, 0.1);
      for (let k = 0; k < 4; k++) put('olive', new THREE.IcosahedronGeometry(0.9, 0), x + (rnd() - 0.5) * 1.2, 1.9 + rnd() * 0.5, z + (rnd() - 0.5) * 1.2);
    } else if (o.kind === 'wall') {   // 一截矮石墙
      for (let k = 0; k < 7; k++) put('wall', new THREE.BoxGeometry(1.0, 0.55, 0.6), x - 3 + k, 0.28 + (k % 2) * 0.02, z, 0, (rnd() - 0.5) * 0.2);
    }
  }
  // 庄周梦蝶：地上散着几只纸蝴蝶（不会动），和几块小石子
  if (n === 0) for (let k = 0; k < 10; k++) put(k % 2 ? 'lotus' : 'inkLight', new THREE.CircleGeometry(0.16, 3), (rnd() - 0.5) * 34, 0.02, (rnd() - 0.5) * 34, -Math.PI / 2, rnd() * 6);
  if (n === 1) for (let k = 0; k < 8; k++) { const x = (rnd() - 0.5) * 34, z = (rnd() - 0.5) * 34; if (Math.hypot(x, z) > 6) put('lanternR', new THREE.SphereGeometry(0.22, 8, 6).scale(1, 1.3, 1), x, 2.6 + rnd(), z); }
  const g = new THREE.Group();
  for (const [k, list] of Object.entries(parts)) if (list.length) g.add(new THREE.Mesh(mergeGeometries(list), MAT[k]));
  return g;
}

// 每个梦境的天色、雾、灯
const LOOKS = {
  0: { bg: 0xe9e1cc, fog: [18, 38], hemi: [0xffffff, 0xb9ae96, 1.35], sun: [0xfff2dc, 1.1, [-6, 12, -4]] },
  1: { bg: 0x0b0618, fog: [16, 34], hemi: [0x8a60d8, 0x10081e, 1.0], sun: [0x50e8ff, 0.8, [8, 12, -6]] },
  2: { bg: 0xf0b56a, fog: [26, 78], hemi: [0xfff0d0, 0x8a6a3a, 1.25], sun: [0xffc880, 1.7, [-10, 9, -14]] },
};

export function makeWorld(scene, PITCH) {
  const hemi = new THREE.HemisphereLight(0xffffff, 0x888888, 1.2); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 1); scene.add(sun);
  const floorTex = { 0: paperFloor(), 1: cyberFloor(), 2: manchaFloor() };
  for (const t of Object.values(floorTex)) t.repeat.set(3, 3);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(TILE * 3, TILE * 3), new THREE.MeshLambertMaterial({ map: floorTex[0] }));
  floor.rotation.x = -Math.PI / 2; scene.add(floor);
  const protos = {};
  let tiles = [], cur = -1, tileIX = 1e9, tileIZ = 1e9, obs = OBS[0], fogFar = 33;
  const world = {
    floor, hemi, sun, get dream() { return cur; }, get fogNear() { return LOOKS[cur].fog[0]; }, get fogFar() { return fogFar; },
    setDream(n, px = 0, pz = 0) {
      if (cur !== n) {
        for (const t of tiles) scene.remove(t);
        if (!protos[n]) protos[n] = buildTile(n, PITCH);
        tiles = []; for (let i = 0; i < 9; i++) { const t = protos[n].clone(); scene.add(t); tiles.push(t); }
        floor.material.map = floorTex[n]; floor.material.needsUpdate = true;
        cur = n; obs = OBS[n];
      }
      const L = LOOKS[n];
      scene.background.setHex(L.bg); scene.fog.color.setHex(L.bg); fogFar = L.fog[1];
      hemi.color.setHex(L.hemi[0]); hemi.groundColor.setHex(L.hemi[1]); hemi.intensity = L.hemi[2];
      sun.color.setHex(L.sun[0]); sun.intensity = L.sun[1]; sun.position.set(...L.sun[2]);
      tileIX = 1e9; world.update(px, pz);
    },
    update(px, pz) {
      const ix = Math.round(px / TILE), iz = Math.round(pz / TILE);
      if (ix === tileIX && iz === tileIZ) return;
      tileIX = ix; tileIZ = iz;
      let k = 0;
      for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) tiles[k++].position.set((ix + dx) * TILE, 0, (iz + dz) * TILE);
      floor.position.set(ix * TILE, 0, iz * TILE);
    },
    setVisible(on) { floor.visible = on; for (const t of tiles) t.visible = on; },
    // 把圆推出摆设。摆设离地块边至少 3 米，所以只查自己所在的那一块
    pushOut(p, r) {
      const ox = Math.round(p.x / TILE) * TILE, oz = Math.round(p.z / TILE) * TILE;
      for (const o of obs) {
        if (!o.r) continue;
        const dx = p.x - (ox + o.x), dz = p.z - (oz + o.z), rr = o.r + r, d2 = dx * dx + dz * dz;
        if (d2 < rr * rr) { const d = Math.sqrt(d2) || 1e-3; p.x = ox + o.x + dx / d * rr; p.z = oz + o.z + dz / d * rr; }
      }
    },
  };
  return world;
}

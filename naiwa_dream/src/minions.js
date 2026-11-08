// 3D 小怪：企鹅（咕咕嘎嘎，冲上来肘击）、刀盾狗（我的刀盾，举刀砍）、香蕉猫（哭着用香蕉头槌）、圆滚滚的 OIIA 猫（原地转圈撞人）
// 做法：加载模型 → 用代码摆出 8 帧走路 + 8 帧攻击 → 每帧烘焙成一份静态网格 → 每帧一个 InstancedMesh。
// 几百只怪同屏也只多 64 次绘制，手机扛得住；不需要在运行时做骨骼蒙皮。
//   企鹅和刀盾狗带 Tripo 骨骼：转骨骼摆姿势；
//   两只猫没有骨骼（Tripo 直接生成的静态模型）：按身体部位直接挪顶点（腿前后摆、身体左右摇、香蕉弯腰、整只猫转圈）。
// 音效不在这里，见 src/sfx.js。
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const WALK_FRAMES = 8, ATK_FRAMES = 8, DANCE_FRAMES = 8, SWING_TIME = 0.55;
export const WALK_RATE = { dog: 1.5, penguin: 1.9, banana: 1.7, oiia: 2.2, elegantA: 1.6, elegantB: 1.5, sheep: 2.6 };   // 每秒走几个循环
// 跳舞帧（只有高雅企鹅有）：排在走路、攻击帧后面，第 16~23 帧
export const danceIndex = (phase) => WALK_FRAMES + ATK_FRAMES + Math.min(DANCE_FRAMES - 1, Math.floor((phase - Math.floor(phase)) * DANCE_FRAMES));

// 角色坐标系：X 朝正前方、Y 朝上、Z 朝右手边。turn 的角度相对骨骼的静止姿势，并跟着父骨骼走。
const AXES = { x: new THREE.Vector3(1, 0, 0), y: new THREE.Vector3(0, 1, 0), z: new THREE.Vector3(0, 0, 1) };
const tq = new THREE.Quaternion(), td = new THREE.Quaternion();
export class Rig {
  constructor(modelRoot, frame) {
    this.bones = {};
    frame.updateMatrixWorld(true);
    const inv = frame.getWorldQuaternion(new THREE.Quaternion()).invert();
    modelRoot.traverse(o => {
      if (!o.isBone) return;
      const w0 = inv.clone().multiply(o.getWorldQuaternion(new THREE.Quaternion()));
      this.bones[o.userData.name || o.name] = { o, q0: o.quaternion.clone(), w0, w0i: w0.clone().invert() };
    });
  }
  begin() { for (const b of Object.values(this.bones)) b.o.quaternion.copy(b.q0); return this; }
  turn(name, axis, angle) {
    const b = this.bones[name];
    if (!b || !angle) return this;
    tq.setFromAxisAngle(AXES[axis], angle);
    td.copy(b.w0i).multiply(tq).multiply(b.w0);
    b.o.quaternion.multiply(td);
    return this;
  }
}

const smooth = t => t * t * (3 - 2 * t);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ramp = (a, b, v) => smooth(clamp((v - a) / (b - a), 0, 1));   // v 从 a 到 b 时，0 平滑变到 1
// 关键帧插值：keys = [[时间, 值], ...]
function key(keys, t) {
  for (let i = 1; i < keys.length; i++) if (t <= keys[i][0]) {
    const [t0, v0] = keys[i - 1], [t1, v1] = keys[i];
    return v0 + (v1 - v0) * smooth((t - t0) / (t1 - t0 || 1));
  }
  return keys[keys.length - 1][1];
}

// 刀盾狗：右手握刀、左手持盾。攻击：举刀过头 → 前倾劈下 → 收回
function dogPose(rig, kind, k) {
  rig.begin();
  if (kind === 'walk') {
    const s = Math.sin(k * Math.PI * 2);
    rig.turn('Spine01', 'z', -0.05).turn('Spine01', 'x', s * 0.06);
    rig.turn('L_Thigh', 'z', s * 0.45).turn('R_Thigh', 'z', -s * 0.45);
    rig.turn('L_Calf', 'z', -Math.max(0, -s) * 0.6).turn('R_Calf', 'z', -Math.max(0, s) * 0.6);
    rig.turn('R_Upperarm', 'z', 0.1 + s * 0.12).turn('L_Upperarm', 'z', 0.15 - s * 0.1);
    return;
  }
  const up = key([[0, 0], [0.32, 2.2], [0.5, 0.2], [0.7, 0.2], [1, 0]], k);       // 右臂：把刀举到脑后，再往前劈
  const fore = key([[0, 0], [0.32, 0.5], [0.5, -1.3], [0.7, -1.1], [1, 0]], k);   // 劈下时前臂伸直，刀尖朝前下
  const lean = key([[0, 0], [0.32, 0.15], [0.5, -0.42], [0.7, -0.35], [1, 0]], k); // 身体：后仰蓄力 → 前倾
  const twist = key([[0, 0], [0.32, 0.25], [0.5, -0.3], [1, 0]], k);
  rig.turn('Spine01', 'z', lean).turn('Spine01', 'y', twist).turn('Head', 'z', -lean * 0.4);
  rig.turn('R_Upperarm', 'z', up).turn('R_Forearm', 'z', fore);
  rig.turn('L_Upperarm', 'z', 0.5).turn('L_Forearm', 'z', 0.4);          // 盾挡在前面
  rig.turn('L_Thigh', 'z', key([[0, 0], [0.45, 0.35], [1, 0]], k)).turn('R_Thigh', 'z', key([[0, 0], [0.45, -0.25], [1, 0]], k));
}

// 企鹅：走路左右摇摆、小翅膀张开。攻击：扭身蓄力抬肘 → 转身肘击 → 收回
function penguinPose(rig, kind, k) {
  rig.begin();
  if (kind === 'walk') {
    const s = Math.sin(k * Math.PI * 2);
    rig.turn('Spine01', 'x', s * 0.18).turn('Head', 'x', -s * 0.08);
    rig.turn('L_Thigh', 'z', s * 0.25).turn('R_Thigh', 'z', -s * 0.25);
    rig.turn('L_Upperarm', 'x', 0.35 + s * 0.15).turn('R_Upperarm', 'x', -0.35 + s * 0.15);
    return;
  }
  const twist = key([[0, 0], [0.35, 0.8], [0.52, -0.85], [0.7, -0.7], [1, 0]], k);
  const lean = key([[0, 0], [0.35, 0.08], [0.52, -0.32], [0.7, -0.28], [1, 0]], k);
  const raise = key([[0, 0], [0.35, 1.2], [0.52, 1.4], [0.7, 1.3], [1, 0]], k);     // 右臂抬到胸前高度
  const out = key([[0, 0], [0.35, -0.8], [0.52, 0.3], [0.7, 0.25], [1, 0]], k);      // 先往外张，肘击时收到身前
  const bend = key([[0, 0], [0.3, 1.9], [0.6, 2.1], [1, 0]], k);                     // 前臂折起，让手肘冲在最前面
  rig.turn('Spine01', 'y', twist).turn('Spine01', 'z', lean).turn('Head', 'y', -twist * 0.5);
  rig.turn('R_Upperarm', 'z', raise).turn('R_Upperarm', 'x', out).turn('R_Forearm', 'z', bend);
  rig.turn('L_Upperarm', 'x', 0.4).turn('L_Upperarm', 'z', -0.3);
}

// ---------- 没有骨骼的两只猫：直接挪顶点。p = [x, y, z]，身高按 1 算，脚底 y = 0，面朝 +X，+Z 是右手边 ----------
// 绕前后轴（X）左右摇：脚底不动，头顶往一边歪
function roll(p, a) { const y = p[1], z = p[2], c = Math.cos(a), s = Math.sin(a); p[1] = y * c - z * s; p[2] = y * s + z * c; }
// 香蕉猫：香蕉身子、底下一对短猫腿、两侧一对小爪子。走路：腿前后摆、身子左右摇、香蕉尖晃；攻击：往后仰 → 香蕉头槌往前砸
function bananaDeform(kind, k, p) {
  const HIP = 0.16;
  if (kind === 'walk') {
    const a = k * Math.PI * 2, s = Math.sin(a);
    const side = clamp(p[2] / 0.05, -1, 1);
    if (p[1] < HIP) {                       // 腿：右腿往前时左腿往后，往前的那条腿抬起来
      const w = ramp(HIP, HIP - 0.06, p[1]), ph = s * side;
      p[0] += (HIP - p[1]) * ph * 0.65 * w;
      p[1] += Math.max(0, ph) * 0.035 * w;
    }
    const arm = ramp(0.11, 0.17, Math.abs(p[2])) * ramp(0.15, 0.2, p[1]) * ramp(0.42, 0.36, p[1]);
    p[0] -= s * side * 0.05 * arm;           // 小爪子跟腿反着摆
    p[1] += Math.abs(Math.cos(a)) * 0.018 * ramp(0.1, 0.2, p[1]);   // 一颠一颠
    const top = Math.max(0, p[1] - 0.45);
    p[2] += top * top * 0.55 * Math.sin(a - 0.9);                    // 香蕉尖晚半拍晃，像果冻
    roll(p, s * 0.06);
    return;
  }
  const lean = key([[0, 0], [0.3, -0.38], [0.5, 0.9], [0.7, 0.75], [1, 0]], k);
  const PIV = 0.18;
  if (p[1] > PIV) {                          // 腰往上整段弯：越往上弯得越多，像香蕉
    const w = ramp(PIV, PIV + 0.14, p[1]), ang = lean * w, ry = p[1] - PIV, c = Math.cos(ang), s = Math.sin(ang);
    const x = p[0];
    p[0] = x * c + ry * s; p[1] = PIV - x * s + ry * c;
  }
  const squash = key([[0, 0], [0.45, 0], [0.52, 1], [0.7, 0.6], [1, 0]], k);   // 砸中的那一下压扁
  p[1] *= 1 - squash * 0.08; p[0] *= 1 + squash * 0.06; p[2] *= 1 + squash * 0.08;
}
// 圆滚滚的猫（长得像猫头鹰）：走路像企鹅一样左右摇、两只脚轮流抬；攻击：拉长身子原地转一整圈撞人（OIIA OIIA）
function oiiaDeform(kind, k, p) {
  const a = k * Math.PI * 2;
  if (kind === 'walk') {
    const s = Math.sin(a), side = clamp(p[2] / 0.06, -1, 1);
    if (p[1] < 0.09) { const w = ramp(0.09, 0.02, p[1]), ph = s * side; p[1] += Math.max(0, ph) * 0.05 * w; p[0] += ph * 0.035 * w; }
    const b = Math.abs(Math.cos(a));
    p[1] *= 1 + (b - 0.5) * 0.06; p[0] *= 1 - (b - 0.5) * 0.03; p[2] *= 1 - (b - 0.5) * 0.03;
    roll(p, s * 0.11);
    return;
  }
  const st = Math.sin(k * Math.PI);             // 转到半圈时拉得最长、跳得最高
  p[1] *= 1 + st * 0.22; p[0] *= 1 - st * 0.08; p[2] *= 1 - st * 0.08;
  const c = Math.cos(a), sn = Math.sin(a), x = p[0], z = p[2];
  p[0] = x * c + z * sn; p[2] = -x * sn + z * c;
  p[1] += st * 0.12;
}

// 高雅企鹅（Hi3D 模型，没有骨骼）：身高按 1 算，面朝 +X，+Z 是右手边，翅膀在身体两侧（|z| 大的地方）
//   走路：像真企鹅一样左右摇、两只脚轮流抬，身子挺得笔直（高雅）
//   攻击：上身往前一探“嘘——”，像在叫人安静
//   跳舞：芭蕾——左右摆胯、上身扭、翅膀轮流抬起来、踮脚一颠一颠（原地转圈在 game.js 里按整只转）
function elegantDeform(kind, k, p) {
  const a = k * Math.PI * 2, s = Math.sin(a), side = clamp(p[2] / 0.06, -1, 1);
  if (kind === 'walk') {
    if (p[1] < 0.07) { const w = ramp(0.07, 0.01, p[1]), ph = s * side; p[1] += Math.max(0, ph) * 0.04 * w; p[0] += ph * 0.03 * w; }
    roll(p, s * 0.1);
    return;
  }
  if (kind === 'attack') {
    const lean = key([[0, 0], [0.3, -0.12], [0.5, 0.45], [0.75, 0.4], [1, 0]], k), PIV = 0.3;
    if (p[1] > PIV) {
      const w = ramp(PIV, PIV + 0.3, p[1]), ang = lean * w, ry = p[1] - PIV, c = Math.cos(ang), sn = Math.sin(ang), x = p[0];
      p[0] = x * c + ry * sn; p[1] = PIV - x * sn + ry * c;
    }
    return;
  }
  // 跳舞
  const wing = ramp(0.16, 0.25, Math.abs(p[2])) * ramp(0.22, 0.36, p[1]) * ramp(0.72, 0.6, p[1]);
  if (wing > 0) {   // 翅膀：绕肩膀（y≈0.6）往外往上抬，左右轮流。sg 是哪一边，往下垂的翅膀转 θ 后朝外
    const sg = Math.sign(p[2]), th = (0.5 + 0.5 * Math.sin(a + (sg > 0 ? 0 : Math.PI))) * 1.1 * wing, sy = 0.6, sz = sg * 0.17;
    const dy = p[1] - sy, dz = p[2] - sz, c = Math.cos(th), sn = Math.sin(th);
    p[2] = sz + dz * c - sg * dy * sn; p[1] = sy + sg * dz * sn + dy * c;
  }
  const tw = Math.sin(a) * 0.35 * ramp(0.15, 0.85, p[1]);   // 上身扭
  { const x = p[0], z = p[2], c = Math.cos(tw), sn = Math.sin(tw); p[0] = x * c + z * sn; p[2] = -x * sn + z * c; }
  p[2] += Math.sin(a) * 0.04 * ramp(0.05, 0.35, p[1]) * ramp(0.7, 0.35, p[1]);   // 摆胯
  p[1] *= 1 + Math.max(0, Math.sin(a * 2)) * 0.07;   // 踮脚，一拍颠一下
  roll(p, Math.sin(a) * 0.12);
}

// 羊（堂吉诃德把羊群当成敌军）：程序生成，不用模型。一团团白羊毛 + 黑脸 + 四条黑腿，走路时腿前后摆
// 返回和 bake 一样的 { frames, mat }，坐标：身高 1、脚底 y=0、面朝 +X
function makeSheep() {
  const WHITE = [0.96, 0.95, 0.9], DARK = [0.16, 0.14, 0.15], PINK = [0.95, 0.62, 0.66];
  const part = (geo, col, x, y, z, sx = 1, sy = 1, sz = 1) => {
    geo.scale(sx, sy, sz); geo.translate(x, y, z);
    const g = geo.index ? geo.toNonIndexed() : geo, n = g.attributes.position.count, c = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { const j = 0.94 + Math.random() * 0.08; c[i * 3] = col[0] * j; c[i * 3 + 1] = col[1] * j; c[i * 3 + 2] = col[2] * j; }
    g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.deleteAttribute('uv');
    return g;
  };
  const frames = [];
  const fluff = [[0, 0.55, 0, 0.3], [0.2, 0.58, 0.12, 0.22], [0.2, 0.58, -0.12, 0.22], [-0.2, 0.56, 0.12, 0.22], [-0.2, 0.56, -0.12, 0.22], [0.02, 0.74, 0, 0.22], [-0.28, 0.6, 0, 0.18], [0.3, 0.66, 0, 0.18]];
  for (const [kind, n] of [['walk', WALK_FRAMES], ['attack', ATK_FRAMES]]) for (let f = 0; f < n; f++) {
    const k = f / n, parts = [];
    const butt = kind === 'attack' ? key([[0, 0], [0.35, -0.12], [0.55, 0.22], [1, 0]], k) : 0;   // 攻击：低头往前顶
    const bob = kind === 'walk' ? Math.abs(Math.cos(k * Math.PI * 2)) * 0.03 : 0;
    for (const [x, y, z, r] of fluff) parts.push(part(new THREE.IcosahedronGeometry(r, 1), WHITE, x, y + bob, z));
    parts.push(part(new THREE.SphereGeometry(0.14, 10, 8), DARK, 0.43 + butt, 0.66 - butt * 0.8 + bob, 0, 1.25, 1, 0.9));   // 脸
    for (const z of [-0.1, 0.1]) parts.push(part(new THREE.SphereGeometry(0.06, 6, 4), DARK, 0.4 + butt, 0.76 - butt * 0.8 + bob, z * 1.6, 0.6, 0.4, 1.4));   // 耳朵
    for (const z of [-0.055, 0.055]) parts.push(part(new THREE.SphereGeometry(0.028, 6, 4), [1, 1, 1], 0.56 + butt, 0.7 - butt * 0.8 + bob, z));   // 眼白
    parts.push(part(new THREE.SphereGeometry(0.03, 6, 4), PINK, 0.6 + butt, 0.6 - butt * 0.8 + bob, 0, 1, 0.6, 1.4));   // 鼻子
    for (const [lx, lz, ph] of [[0.18, 0.11, 0], [0.18, -0.11, Math.PI], [-0.18, 0.11, Math.PI], [-0.18, -0.11, 0]]) {
      const sw = kind === 'walk' ? Math.sin(k * Math.PI * 2 + ph) * 0.09 : 0;
      parts.push(part(new THREE.CylinderGeometry(0.035, 0.03, 0.36, 6), DARK, lx + sw, 0.18 + bob, lz));
    }
    const g = mergeGeometries(parts);
    g.computeVertexNormals(); g.computeBoundingSphere();
    frames.push(g);
  }
  return { frames, mat: new THREE.MeshLambertMaterial({ vertexColors: true }) };
}

// 攻击时身体往前冲一点（给 draw 用）：0~1 的攻击进度 → 前冲距离（米）
export function lungeOffset(kind, k) {
  if (kind === 'penguin') return key([[0, 0], [0.35, -0.1], [0.52, 0.6], [0.7, 0.5], [1, 0]], k);
  if (kind === 'banana') return key([[0, 0], [0.3, -0.1], [0.5, 0.5], [0.7, 0.4], [1, 0]], k);
  if (kind === 'oiia') return key([[0, 0], [0.5, 0.45], [1, 0]], k);
  return key([[0, 0], [0.32, -0.06], [0.5, 0.3], [0.7, 0.25], [1, 0]], k);
}

function finishMaterial(src) {
  const mat = src.clone();
  if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace;
  mat.side = THREE.FrontSide; mat.transparent = false; mat.metalness = 0; mat.roughness = Math.max(0.6, mat.roughness ?? 0.9);
  return mat;
}
function frameGeometry(pos, base) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', base.attributes.uv);
  if (base.index) g.setIndex(base.index);
  g.computeVertexNormals();
  g.computeBoundingSphere();
  return g;
}

// 带骨骼的模型：转骨骼 → 读出蒙皮后的顶点
async function bake(url, height, poseFn) {
  const gltf = await new GLTFLoader().loadAsync(url);
  const root = gltf.scene;
  root.updateMatrixWorld(true);   // 先更新骨骼矩阵，蒙皮网格的包围盒才算得对
  const box = new THREE.Box3().setFromObject(root), size = box.getSize(new THREE.Vector3()), c = box.getCenter(new THREE.Vector3());
  const s = height / size.y;
  root.scale.setScalar(s); root.position.set(-c.x * s, -box.min.y * s, -c.z * s);
  const holder = new THREE.Group(); holder.add(root);
  let skinned = null;
  root.traverse(o => { if (o.isSkinnedMesh && !skinned) skinned = o; });
  if (!skinned) throw new Error('模型里没有骨骼蒙皮：' + url);
  const rig = new Rig(root, holder);
  const base = skinned.geometry, count = base.attributes.position.count, v = new THREE.Vector3();
  const frames = [];
  for (const [kind, n] of [['walk', WALK_FRAMES], ['attack', ATK_FRAMES]]) {
    for (let f = 0; f < n; f++) {
      poseFn(rig, kind, f / n);
      holder.updateMatrixWorld(true);
      skinned.skeleton.update();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        skinned.getVertexPosition(i, v).applyMatrix4(skinned.matrixWorld);
        pos[i * 3] = v.x; pos[i * 3 + 1] = v.y; pos[i * 3 + 2] = v.z;
      }
      frames.push(frameGeometry(pos, base));
    }
  }
  return { frames, mat: finishMaterial(skinned.material) };
}

// 没有骨骼的模型：先把模型摆正（脚底 y=0、身高 1），每帧把顶点挪一挪，再按身高放大
// opts.faceZ：模型原本面朝 +Z（Hi3D 导出的就是），先转 90 度变成面朝 +X；opts.dance：多烘 8 帧跳舞
async function bakeStatic(url, height, deform, opts = {}) {
  const gltf = await new GLTFLoader().loadAsync(url);
  gltf.scene.updateMatrixWorld(true);
  let mesh = null;
  gltf.scene.traverse(o => { if (o.isMesh && !mesh) mesh = o; });
  if (!mesh) throw new Error('模型里没有网格：' + url);
  const base = mesh.geometry.clone().applyMatrix4(mesh.matrixWorld);
  if (opts.faceZ) base.rotateY(Math.PI / 2);   // (x, z) → (z, -x)：原来的 +Z（正面）转到 +X
  base.computeBoundingBox();
  const bb = base.boundingBox, size = bb.getSize(new THREE.Vector3()), c = bb.getCenter(new THREE.Vector3());
  const pa = base.attributes.position, count = pa.count, inv = 1 / size.y;   // 位置可能是交错存储的，要用 getX/getY/getZ 读
  const P0 = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    P0[i * 3] = (pa.getX(i) - c.x) * inv; P0[i * 3 + 1] = (pa.getY(i) - bb.min.y) * inv; P0[i * 3 + 2] = (pa.getZ(i) - c.z) * inv;
  }
  const frames = [], p = [0, 0, 0];
  const sets = [['walk', WALK_FRAMES], ['attack', ATK_FRAMES]];
  if (opts.dance) sets.push(['dance', DANCE_FRAMES]);
  for (const [kind, n] of sets) {
    for (let f = 0; f < n; f++) {
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        p[0] = P0[i * 3]; p[1] = P0[i * 3 + 1]; p[2] = P0[i * 3 + 2];
        deform(kind, f / n, p);
        pos[i * 3] = p[0] * height; pos[i * 3 + 1] = p[1] * height; pos[i * 3 + 2] = p[2] * height;
      }
      frames.push(frameGeometry(pos, base));
    }
  }
  return { frames, mat: finishMaterial(mesh.material) };
}

// 生成所有小怪的实例网格；maxPerFrame 是每一帧最多多少只。某个模型加载失败时跳过它（game.js 会拿企鹅顶上）
export async function loadMinions(scene, maxPerFrame, base = '') {
  // 西游记那一关的特化版模型做好以后，在这里加一行（比如 xyDog: [bake, 'assets/models/xy-dog.glb', 1.0, dogPose]），
  // 再到 game.js 的 TYPES 里把对应小怪的 minion 改成新名字就行
  const defs = {
    dog: [bake, base + 'assets/models/minion-b.glb', 1.0, dogPose],
    penguin: [bake, base + 'assets/models/minion-a.glb', 1.0, penguinPose],
    banana: [bakeStatic, base + 'assets/models/minion-c.glb', 1.0, bananaDeform],
    oiia: [bakeStatic, base + 'assets/models/minion-d.glb', 1.0, oiiaDeform],
    elegantA: [bakeStatic, base + 'assets/models/elegant-a.glb', 1.0, elegantDeform, { faceZ: true, dance: true }],
    elegantB: [bakeStatic, base + 'assets/models/elegant-b.glb', 1.0, elegantDeform, { faceZ: true, dance: true }],
    sheep: [makeSheep],
  };
  const out = {};
  await Promise.all(Object.entries(defs).map(async ([kind, [fn, url, h, pose, opts]]) => {
    try {
      const { frames, mat } = await fn(url, h, pose, opts);
      out[kind] = frames.map(g => {
        const m = new THREE.InstancedMesh(g, mat, maxPerFrame);
        m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(maxPerFrame * 3).fill(1), 3);
        m.count = 0; m.frustumCulled = false; scene.add(m);
        return m;
      });
    } catch (e) { console.warn('小怪模型加载失败', kind, e); }
  }));
  if (!out.penguin && !out.dog) throw new Error('小怪模型都没加载上');
  return out;
}

// 帧号：攻击中按攻击进度取 8~15 帧，否则按走路相位取 0~7 帧
export function frameIndex(walkPhase, swingLeft) {
  if (swingLeft > 0) return WALK_FRAMES + Math.min(ATK_FRAMES - 1, Math.floor((1 - swingLeft / SWING_TIME) * ATK_FRAMES));
  const p = walkPhase - Math.floor(walkPhase);
  return Math.min(WALK_FRAMES - 1, Math.floor(p * WALK_FRAMES));
}

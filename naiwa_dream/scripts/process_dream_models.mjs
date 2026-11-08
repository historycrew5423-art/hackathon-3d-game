// 《奶蛙梦游记》的模型处理：
//   1. 牛来.glb（唐僧，Tripo 41 根骨骼，190 万面）→ 减到约 1.2 万面、贴图 1024 JPG，保留骨骼 → assets/models/tang-niulai.glb
//   2. 两只高雅企鹅（Hi3D 导出，各约 500 万面，没有骨骼、没有法线）→ 先试普通减面（保留原贴图 UV）；
//      减不下去（UV 接缝太碎）就退回 bake_cats 的做法：绕一圈拍成圆柱贴图再减面
//      → assets/models/elegant-a.glb（侦探企鹅）、elegant-b.glb（特工企鹅与雨伞）
// 用法：node process_dream_models.mjs [tang|elegant-a|elegant-b ...]   不写参数就全做。日志写进 process_dream_models.log
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { NodeIO } from '@gltf-transform/core';
import { weld, simplify, prune, dedup, textureCompress } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import sharp from 'sharp';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, '..');
const outDir = path.join(root, 'naiwa_dream', 'naiwa', 'assets', 'models');
const JOBS = {
  tang: { src: '牛来.glb', out: 'tang-niulai.glb', tris: 12000, skinned: true },
  'elegant-a': { src: 'Hi3D_风格化侦探企鹅3D模型_allparts_20261107_185745.glb', out: 'elegant-a.glb', tris: 9000 },
  'elegant-b': { src: 'Hi3D_写实3D特工企鹅与雨伞_allparts_20261107_185832.glb', out: 'elegant-b.glb', tris: 9000 },
  // 11-07 晚上用户又给的 4 个：肥嘟嘟袋鼠、桑丘（小黄鸭背篮球）、背手负鼠（白骨精变的老公公）、鲸鱼女仆（沙僧 / 鲲）
  kangaroo: { src: 'Hi3D_风格化3D黄色袋鼠角色_allparts_20261107_200337.glb', out: 'kangaroo.glb', tris: 9000 },
  duck: { src: 'Hi3D_风格化3D小黄鸭 带篮球背包_allparts_20261107_195002.glb', out: 'duck.glb', tris: 9000 },
  possum: { src: 'Hi3D_写实3D负鼠角色_allparts_20261107_195001.glb', out: 'possum.glb', tris: 9000 },
  whale: { src: 'Hi3D_Q版3D鲸鱼女仆动漫角色_allparts_20261107_194948.glb', out: 'whale.glb', tris: 10000 },
  // 七十二变的分身：主角模型再减到 1500 面（72 只同屏）
  // 主角模型的贴图展开很碎，普通减面卡在 6600 面，所以改用 sloppy（只看位置、不管接缝）。分身才一米高，接缝处贴图拉一点看不出来
  herolo: { src: 'naiwa_dream/naiwa/assets/models/fantasy.glb', out: 'fantasy-lo.glb', tris: 1500, sloppy: true },
};
const want = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(JOBS);
const log = [];
const flush = () => fs.writeFileSync(path.join(here, 'process_dream_models.log'), log.join('\n') + '\n');
await MeshoptSimplifier.ready;
const io = new NodeIO();
const triCount = (doc) => doc.getRoot().listMeshes().reduce((s, m) => s + m.listPrimitives().reduce((a, p) => a + (p.getIndices() ? p.getIndices().getCount() : p.getAttribute('POSITION').getCount()) / 3, 0), 0);

for (const name of want) {
  const job = JOBS[name]; if (!job) { log.push(`没有这个任务：${name}`); continue; }
  const t0 = Date.now();
  try {
    const doc = await io.read(path.join(root, job.src));
    const before = triCount(doc);
    log.push(`${name}: 读入 ${job.src}，${Math.round(before)} 三角面（${((Date.now() - t0) / 1000).toFixed(1)} 秒）`); flush();
    // 只留颜色贴图：法线、金属度粗糙度贴图在这么小的屏幕上看不出来，还占地方
    for (const m of doc.getRoot().listMaterials()) {
      m.setNormalTexture(null); m.setMetallicRoughnessTexture(null); m.setOcclusionTexture(null);
      m.setMetallicFactor(0); m.setRoughnessFactor(0.85);
    }
    if (job.sloppy) {
      await doc.transform(weld());
      for (const mesh of doc.getRoot().listMeshes()) for (const prim of mesh.listPrimitives()) {
        const pos = prim.getAttribute('POSITION').getArray(), idx = new Uint32Array(prim.getIndices().getArray());
        const [out, err] = MeshoptSimplifier.simplifySloppy(idx, pos, 3, null, Math.floor(job.tris * 3), 0.05);
        prim.getIndices().setArray(new Uint32Array(out));
        log.push(`  sloppy 减面：${idx.length / 3} → ${out.length / 3}，误差 ${err.toFixed(4)}`);
      }
      await doc.transform(textureCompress({ encoder: sharp, targetFormat: 'jpeg', resize: [512, 512], quality: 82 }), dedup(), prune());
    } else await doc.transform(
      weld(),
      simplify({ simplifier: MeshoptSimplifier, ratio: job.tris / before, error: job.skinned ? 0.004 : 0.01 }),
      textureCompress({ encoder: sharp, targetFormat: 'jpeg', resize: [1024, 1024], quality: 86 }),
      dedup(),
      prune(),
    );
    const after = triCount(doc);
    log.push(`  减面后 ${Math.round(after)} 三角面（${((Date.now() - t0) / 1000).toFixed(1)} 秒）`); flush();
    const out = path.join(outDir, job.out);
    await io.write(out, doc);
    log.push(`  输出 ${job.out}：${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
    if (after > job.tris * 2.2) log.push(`  !! 减面没减下去（目标 ${job.tris}），要换圆柱贴图的做法`);
  } catch (e) { log.push(`fail ${name} ${e.stack}`); }
  flush();
}
log.push('DONE'); flush();

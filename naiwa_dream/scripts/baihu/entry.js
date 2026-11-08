// 【草稿：还没接进游戏，现在也打包不了】进度见 ../../交接说明.md 第五节。还差这些：
//   1. scripts/build_baihu.mjs：用 esbuild 打包（three 和 three/addons/* 设为 external，带白虎岭 tools/build.mjs 里的 inline-worker 插件），输出 src/baihu/baihu.js；
//   2. 给白虎岭源码打补丁：core/params.js 加 setAssetBase()；gen/terrain.js 导出 ARENA，并把金圈周围整平；render/atmosphere.js 的雾改成双模式；
//   3. 下面的 syncCam 不能照抄游戏镜头的投影：游戏镜头的远平面只有 140 米，白骨岭在 1 公里外。要按同样的 fov、aspect 重算，near 0.3、far 30000；
//      游戏画完白虎岭以后，先 renderer.clearDepth()，再把自己场景的 background 设成 null，然后画角色。
// 《奶蛙梦游记》用的白虎岭场景入口（打包时当作在白虎岭工程的 src/ 目录里，所以下面的 ./xxx 指的是白虎岭的源码）。
// 和白虎岭自己的 main.js 做的事一样（载贴图、生成地形、岩体、建筑、植被、水、雾、金圈），区别：
//   · 不建渲染器、不接管画布、不开主循环，场景交给游戏的渲染器去画（游戏每帧先画白虎岭，再在上面画角色）；
//   · 不做后期（泛光、调色），直接用渲染器的 ACES 色调映射；
//   · 金圈周围整平成一块平台（见 build_baihu.mjs 里给 gen/terrain.js 打的补丁），游戏的地面 y = 0 对应平台高度。
// 打包：node scripts/build_baihu.mjs → src/baihu/baihu.js
import * as THREE from 'three';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import { SunLight } from 'three/addons/lights/SunLight.js';
import { makeSceneFog } from './render/atmosphere.js';
import { asset, setAssetBase } from './core/params.js';
import { createSky } from './render/sky.js';
import { prepTex } from './render/materials.js';
import { createPool } from './gen/pool.js';
import { buildTerrain } from './world/terrain.js';
import { loadRocks } from './world/rocks.js';
import { buildArchitecture } from './world/buildings.js';
import { buildVegetation } from './world/vegetation.js';
import { buildWater } from './world/water.js';
import { buildMist } from './world/mist.js';
import { buildStory } from './world/story.js';
import { LIGHT_DIR, SUN_COLOR, SUN_DIR } from './config.js';
import { CAM_REF, SKULL_O } from './gen/layout.js';
import { ARENA } from './gen/terrain.js';

// 画质档：low 是白虎岭给手机用的那一档；mid 比它多一倍的草、更细的地形和阴影（岩体都用小的那份，省 4 MB 下载）
const TIERS = {
  low: { shadow: 1024, shadowFar: 1000, terrainStep: 3, mapStep: 2, rock: 'low', terrainShadow: false, treeStep: 14, grassStep: 2.0 },
  mid: { shadow: 2048, shadowFar: 1000, terrainStep: 2, mapStep: 1.5, rock: 'low', terrainShadow: false, treeStep: 11, grassStep: 1.35 },
};
const TEX = ['cliff_diff', 'cliff_nor', 'bone_diff', 'bone_nor', 'grass_diff', 'grass_nor', 'forest_diff', 'forest_nor', 'trail_diff', 'trail_nor', 'sky',
  'roof_diff', 'roof_nor', 'stonewall_diff', 'stonewall_nor', 'planks_diff', 'redwood_diff', 'plaster_diff',
  'twig', 'leaves', 'grassblade', 'fern', 'bark_diff', 'bark_nor'];
const ATLAS = ['twig', 'leaves', 'grassblade', 'fern'];
const tick = () => new Promise((r) => setTimeout(r, 0));   // 每做完一大步让出主线程，游戏的画面别卡死

export const INFO = { arena: ARENA, camRef: CAM_REF, skull: SKULL_O };

export async function buildBaihu({ renderer, quality = 'low', assetBase = 'assets/baihu/', onProgress = () => {} }) {
  const t0 = performance.now();
  setAssetBase(assetBase);
  const Q = { ...(TIERS[quality] || TIERS.low), tier: quality };
  const scene = new THREE.Scene();
  scene.name = 'baihu';
  scene.fog = makeSceneFog();
  const time = { value: 0 };
  const sun = new SunLight(SUN_COLOR, 3.1);
  sun.position.copy(LIGHT_DIR);
  sun.castShadow = true;
  sun.shadow.mapSize.set(Q.shadow, Q.shadow);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = Q.shadowFar;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.8;
  sun.shadow.radius = 2;
  scene.add(sun);

  // 贴图
  const pool = createPool();
  const manager = new THREE.LoadingManager();
  manager.onProgress = (url, done, total) => onProgress(0.5 * done / total);
  const tl = new THREE.TextureLoader(manager);
  const hdrP = new HDRLoader(manager).setDataType(THREE.FloatType).loadAsync(asset('sky_hdr.hdr'));
  const list = await Promise.all(TEX.map((n) => tl.loadAsync(asset(n + '.webp'))));
  const T = {};
  TEX.forEach((n, i) => { T[n] = list[i]; prepTex(T[n], !n.endsWith('_nor'), !ATLAS.includes(n)); });
  T.sky_hdr = await hdrP;
  await tick();
  const sky = createSky(T.sky, T.sky_hdr);
  scene.add(sky.mesh);
  scene.environment = sky.buildEnv(renderer);
  scene.environmentIntensity = 0.55;
  onProgress(0.55);
  await tick();

  // 地形和岩体（地形的高度在后台线程里算）
  const [terrain, rocks] = await Promise.all([buildTerrain(pool, Q, T, time), loadRocks(Q, T)]);
  scene.add(terrain.mesh); scene.add(rocks.group);
  pool.dispose();
  onProgress(0.75);
  await tick();
  const arch = buildArchitecture({ T, heightAt: terrain.heightAt });
  scene.add(arch.group);
  await tick();
  const veg = buildVegetation({ T, terrain, placed: arch.placed, time, Q });
  scene.add(veg.group);
  onProgress(0.9);
  await tick();
  const water = buildWater({ time, heightAt: terrain.heightAt });
  scene.add(water.group);
  const mist = buildMist({ time, fallsBase: water.fallsBase });
  scene.add(mist.mesh);
  const story = buildStory({ heightAt: terrain.heightAt });
  scene.add(story.group);

  // 画白虎岭用的镜头：和游戏的镜头一样的投影、一样的朝向，位置平移到平台上（游戏坐标原点 = 金圈中心）
  const cam = new THREE.PerspectiveCamera(52, 1, 0.3, 30000);
  const anchor = new THREE.Vector3(ARENA.x, ARENA.y, ARENA.z);
  function syncCam(viewCam) {
    viewCam.updateMatrixWorld();
    cam.position.copy(viewCam.position).add(anchor);
    cam.quaternion.copy(viewCam.quaternion);
    cam.fov = viewCam.fov; cam.aspect = viewCam.aspect; cam.near = viewCam.near; cam.far = viewCam.far; cam.zoom = viewCam.zoom;
    cam.projectionMatrix.copy(viewCam.projectionMatrix); cam.projectionMatrixInverse.copy(viewCam.projectionMatrixInverse);
    cam.updateMatrixWorld();
  }
  // 白虎岭要 ACES 色调映射和阴影；游戏自己的角色不做色调映射。画完恢复渲染器原来的设置
  function withLook(renderer, fn) {
    const tm = renderer.toneMapping, te = renderer.toneMappingExposure, se = renderer.shadowMap.enabled;
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.9; renderer.shadowMap.enabled = true;
    try { return fn(); } finally { renderer.toneMapping = tm; renderer.toneMappingExposure = te; renderer.shadowMap.enabled = se; }
  }
  let tris = 0;
  scene.traverse((o) => { if (o.isMesh && o.geometry && o.geometry.index) tris += o.geometry.index.count / 3 * (o.isInstancedMesh ? o.count : 1); });
  const ms = performance.now() - t0;
  console.log(`[baihu] ready in ${(ms / 1000).toFixed(1)}s, ${(tris / 1e6).toFixed(2)}M tris, tier ${quality}`);
  onProgress(1);

  return {
    scene, sun, textures: T, arena: ARENA, anchor, camRef: CAM_REF, skull: SKULL_O,
    sunDir: SUN_DIR.clone(), sunColor: SUN_COLOR.clone(), heightAt: terrain.heightAt, stats: { ms, tris, tier: quality },
    update(dt) { time.value += dt; story.update(time.value); },
    setShadowFar(f) { sun.shadow.camera.far = f; },
    render(renderer, viewCam) { syncCam(viewCam); withLook(renderer, () => renderer.render(scene, cam)); },
    // 提前编好着色器（程序的缓存键里有色调映射，所以要在 ACES 下编）
    compile(renderer, viewCam) {
      syncCam(viewCam);
      const p = withLook(renderer, () => (renderer.compileAsync ? renderer.compileAsync(scene, cam) : (renderer.compile(scene, cam), Promise.resolve())));
      return Promise.resolve(p);
    },
  };
}

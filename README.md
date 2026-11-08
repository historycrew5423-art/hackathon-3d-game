# 三打白骨精 · 白虎岭（three.js 实时场景）

照着参考图做的可自由漫游的 3D 场景：正前方的山体上雕着一个巨大的兽头骷髅（白骨岭），嘴里往外涌妖雾；
左边是挂着楼阁的石灰岩峭壁，左中是梯田和城门楼，中间是山村、水塘和山路，右边是峡谷、石拱桥、崖上的寺庙和瀑布。
路边有悟空画的金圈，沿山路有三堆白骨（白骨精三次被打死后留下的）。

所有岩体都是真实的三维网格（有悬挑、洞穴、獠牙），可以飞进骷髅嘴里看。

## 游戏模式（默认）

打开页面先选角色，在白虎岭山村一带开打（玩法按 `design/game-plan-v0.2` 分支的 docs/DESIGN.md：割草 + 升级三选一 + Lv5 形态 + 自动技能 + 大招）。加 `?mode=view` 回到原来的看风景模式。

| 角色 | 主攻击 | 自带技能 | 大招（Q） |
| --- | --- | --- | --- |
| 孙悟空 | 金箍棒横扫 + 热梗弹 | 分身毫毛（召唤分身）、画地为牢（金圈） | 七十二变·巨大化（冲击波） |
| 白骨女术士 | 远程法球 | 小发雷霆（落雷）、哈字护盾 | 大发雷霆·全屏雷暴 |
| 牛魔 | 耙子近战重击、击退 | 退！退！退！、芭比Q了（击杀爆炸） | 蛮牛冲撞·震地 |
| 法王 | "典"字慢速爆炸弹 | 尬笑光环、滚木 | 典·天降正义（陨石雨） |

操作：WASD 移动，鼠标瞄准 + 按住左键射击（F 切换自动射击），空格冲刺（短暂无敌），Q 大招（击杀攒笑点，第一次只要一半），Esc 暂停。
升级三选一：技能升级/新技能、多发、屁股也在笑、左右开弓、穿透、数值卡；Lv5 选形态（哈哈哈机关枪 / 6666 回旋镖 / 摸鱼大师）。
敌人：白骨小妖、妖雾鬼火、尸魔，75 秒起每分钟一只精英（掉宝箱），200 秒白骨精 Boss。

性能：游戏模式用单独的 `game` 画质档（分辨率 1.0、无 MSAA、低模岩体、稀疏植被），镜头远裁剪 420 米（俯视镜头看不到远景）；怪物全部 InstancedMesh，碰撞用空间哈希。
在 Apple M5 + Chrome 实测 1280×720：四个角色正常游玩 55–60fps，400 只怪同屏约 60fps，放大招约 57fps。

角色模型在 `assets/chars/`（Hi3D 生成，减面到约 4 万面，自动绑骨，带 idle/walk/attack 动画）。

## 运行

```bash
npm install
node serve.mjs          # 打开 http://localhost:8765
```

网址参数：`?q=high | mid | low`（画质），`?debug`（左上角显示帧率和位置）。

## 操作

| 操作 | 作用 |
| --- | --- |
| 按住鼠标拖动 | 转视角 |
| W A S D / 方向键 | 移动 |
| Q / E | 下降 / 上升 |
| Shift | 加速 |
| 滚轮 | 前后推 |
| 数字键 1~9 或右上角按钮 | 飞到预设视角（远眺、白骨岭、骷髅洞口、崖上楼阁、梯田、城门楼、山村、石拱桥、鸟瞰） |

## 做法

| 部分 | 做法 | 文件 |
| --- | --- | --- |
| 岩体 | SDF（椭球、胶囊、石柱的平滑并/差 + 石灰岩溶沟和层理的噪声位移）→ 稀疏分块 Surface Nets → meshoptimizer 简化。离线烘焙成 `assets/rocks_high.bin` / `rocks_low.bin`，网页只解码（约 0.1 秒） | `src/gen/rocks.js`、`src/gen/mesher.js`、`tools/bake_rocks.mjs` |
| 骷髅 | 颅顶、吻部、颧骨、眉骨、鼻梁 + 挖出的眼窝、鼻孔和通向山腹的嘴；上下獠牙；骨头部分在顶点里标记，着色时换成象牙白的骨质，洞里发黑 | `src/gen/rocks.js` |
| 地形 | 高度函数（梯田台阶、山路压平、峡谷河道、村子平整）在后台线程里算；核心区 1 米一格的高度图和地表遮罩做成贴图 | `src/gen/terrain.js`、`src/world/terrain.js` |
| 建筑 | 程序生成：庑殿 / 攒尖 / 悬山屋顶（举折、起翘、垂脊、鸱吻）、斗拱带、隔扇门窗、城台、石拱桥、塔、民居 | `src/world/archkit.js`、`src/world/buildings.js` |
| 植被 | Poly Haven 的松枝、叶片照片拼成叶团贴图；黄山松、阔叶树、灌木、开粉花的树、草丛、白色野花、崖上垂下的藤蔓；崖顶的树用 SDF 从上往下打点 | `src/world/vegetation.js` |
| 水 | 峡谷河、水塘、瀑布、水田倒影 | `src/world/water.js`、`src/render/materials.js` |
| 雾 | 骷髅嘴里的妖雾、山脚的山岚、峡谷水汽（公告板 + 噪声）；全场景双层高度雾（空气透视） | `src/world/mist.js`、`src/render/atmosphere.js` |
| 故事 | 金圈（梵文光圈 + 光柱）、三堆白骨、刻着“白虎岭”的石碑 | `src/world/story.js`、`src/world/textures.js` |
| 后期 | 坏像素清零 → 泛光 → 调色 → ACES → 暗角颗粒 | `src/render/post.js` |

## 改完怎么重新生成

```bash
npm run bake     # 改了 src/gen/rocks.js（岩体形状）以后：重新烘焙岩体网格（20 核约 20 秒）
npm run build    # 打包 src/ → app.js（改了任何 src 文件都要跑）
npm run dev      # 不压缩、带 sourcemap 的版本
node tools/shot.mjs --views=ref,skull,village --tag=test    # 用本机 Edge（真显卡）截图到 shots/
```

## 素材（全部 CC0，来自 Poly Haven）

| 用途 | 素材 |
| --- | --- |
| 石灰岩崖面 | marble_cliff_04 |
| 骨质 | marble_rock_01 |
| 草地、林下、山路 | leafy_grass、forrest_ground_01、rocky_trail |
| 屋瓦、石墙、木板、红漆、墙面 | grey_roof_tiles、japanese_stone_wall、weathered_brown_planks、red_plaster_weathered |
| 树皮、松枝、叶片、草、蕨 | pine_bark、fir_tree_01（枝条贴图）、island_tree_02（叶片）、grass_medium_01、fern_02 |
| 天空 | kloofendal_48d_partly_cloudy_puresky |

`node tools/fetch_assets.mjs` 会重新下载并转成 WebP。门窗、斗拱彩画、城门门钉、石碑字、金圈、花、藤蔓是 canvas 画的。

## 已知限制

- 只在这台电脑（RTX 5080 Laptop）的无头 Edge 里截图验证过，真实浏览器里的帧率没有测。high 档每帧约 1500 万个三角形，卡的话用 `?q=mid` 或 `?q=low`。
- 没有人物（唐僧师徒、白骨精）。
- 树和草是面片拼的，贴近看能看出是平面。
- 瀑布在开场镜头里被雾挡住，没有单独检查过近看的效果。

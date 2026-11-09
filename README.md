# 三打白骨精 · 白虎岭（three.js 实时场景）

> **新增九个网页作品：[打开 3D 游乐场](https://historycrew5423-art.github.io/hackathon-3d-game/arcade/)** · 无需安装，点开即可体验。部署目录及维护说明见 [`arcade/`](arcade/README.md)，原作者与来源见 [`arcade/CREDITS.md`](arcade/CREDITS.md)。

> **《奶蛙梦游记》游戏本体在 [`naiwa_dream/`](naiwa_dream/)**：怎么运行、操作说明、完成进度和下一步，见 [`naiwa_dream/交接说明.md`](naiwa_dream/交接说明.md)。下面是“三打白骨精 · 白虎岭”场景的说明（第二个西游场景，还没接进游戏）。

照着参考图做的可自由漫游的 3D 场景：正前方的山体上雕着一个巨大的兽头骷髅（白骨岭），嘴里往外涌妖雾；
左边是挂着楼阁的石灰岩峭壁，左中是梯田和城门楼，中间是山村、水塘和山路，右边是峡谷、石拱桥、崖上的寺庙和瀑布。
路边有悟空画的金圈，沿山路有三堆白骨（白骨精三次被打死后留下的）。

所有岩体都是真实的三维网格（有悬挑、洞穴、獠牙），可以飞进骷髅嘴里看。

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

## 打包版：`hi3d-frog-dreams-web/`

《奶蛙 · 课间梦游指南》的可直接运行的构建产物（来自 `hi3d-frog-dreams-web.zip`），
纯静态、零依赖，双击打不开是因为浏览器拦模块加载，需要起个静态服务器：

```bash
cd hi3d-frog-dreams-web
python -m http.server 8800     # 打开 http://127.0.0.1:8800/hi3d-index.html
```

- 入口 `hi3d-index.html`，`assets/` 是打包后的 JS/CSS/GLB/音效（含 7 个带骨骼的 rig 模型）
- `baihuling/` 是白虎岭模块，素材分高清 `assets/` 与移动端 `assets-m/` 两套
- 这是构建快照，源码请改 `naiwa_dream/` 后重新 build，不要直接改这里的 hash 文件名

## 美术升级交接包：`hi3d-handoff/`

来源 `E:/我们的新游戏/时代感VS低质灌水的公司`（无扩展名 ZIP，112MB / 386 文件 / 解压 118.8MB），
原样解压保留内部结构，供接手做"美术风格大提升"的人或 AI 使用：

- **先读** [`hi3d-handoff/hi3d-HANDOFF-frog-dreams.md`](hi3d-handoff/hi3d-HANDOFF-frog-dreams.md)
  —— 三重梦境全部设定、硬约束、三个关卡实现细节、模型清单、构建与验收命令、8 轮用户反馈史
- `hi3d-handoff/source/` —— 可改的源码（vite 配置、src/scenes、public/assets/models-m、vendor 单文件 three）
- `hi3d-handoff/dist/` —— 该版本的构建产物，入口 `dist/hi3d-index.html`（与根目录 `hi3d-frog-dreams-web/` 同一版）
- `hi3d-handoff/scripts/` —— 模型减面/绑骨/压缩/打包与 Playwright 自动验收脚本
- `hi3d-handoff/reports/` —— 验收日志、构建 JSON、截图证据
- `hi3d-handoff/reference/` —— 用户给的美术参考图与场景提示词

改完源码的流程：`cd hi3d-handoff/source` → `node <vite>/bin/vite.js build --config hi3d-vite.config.mjs`
→ 把 `baihuling/` 的 JS 与素材拷进 `dist/baihuling/` → 用 `hi3d-frog-dreams-web/` 覆盖成新版。

## 重制版：`naiwa-remake/`（2026-11-08）

《奶蛙梦游》的可玩重制版，底子是 `hi3d-frog-dreams-web/`（11-08 01:03 那版），自带可改源码与打包脚本，
是**第一个带完整美术重做的版本**：

```bash
cd naiwa-remake
node serve.mjs        # 或双击 Play-Windows.bat，打开 http://127.0.0.1:8765/
```

- 玩法：`index.html`（= `hi3d-index.html`），加载 `assets/naiwa-remake.js`
- 改场景：`src/remake.js`；原游戏代码（已格式化，改动处搜 `__RM`）：`src/app.js`
- 改完 `node src/build.mjs` 重新生成 `assets/naiwa-remake.js` 并刷新 `index.html` 的版本号
- `src/three_part.js` 是打包里的 three.js r180，`src/remake_alias.js` 是压缩名对照，一般不用动
- 详细改动清单与已知限制见 [`naiwa-remake/重制说明.md`](naiwa-remake/重制说明.md)

重做内容：教室（窗棂投影、25 套课桌、窗帘与光柱）、庄周梦蝶仙城（白玉平台 / 石桥 / 宫殿 / 喀斯特石峰 / 金蝶翼）、
堂吉诃奶蛙风车路（麦田 / 石墙 / 帆布风车 / 浮空岛）、白虎岭主角换成绑骨孙悟空（`assets/wukong-rig.glb`），
并修掉奶蛙发白、大招放不出、卡顿、手机双摇杆等问题。画质可加 `?q=low` / `?q=high`，电脑试双摇杆加 `?sticks=1`。

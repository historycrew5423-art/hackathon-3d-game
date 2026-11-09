# 九个世界 · 3D 游乐场

大厅：https://historycrew5423-art.github.io/hackathon-3d-game/arcade/

所有作品放在 `games/<slug>/` 下。将整个 `arcade/` 目录作为静态文件发布即可，访问者无需安装 Node、Python 或 Godot。

现有仓库根目录与原 `gh-pages` 内容保留。目录使用原页面的相对资源路径；机械星球、拳击的构建基路径固定为 `/hackathon-3d-game/arcade/games/<slug>/`。

## 构建适配

- 机械星球：Svelte adapter-static，`GAME_BASE=/hackathon-3d-game/arcade/games/mechanical-planet npm run build`，静态字体也使用该前缀。
- Infinite Future：`npm ci && npm run build`，原 Vite 配置使用相对路径。
- 光墙探索：原 HTML/JS 入口，Three.js r160 放入 `vendor/three`，所有 GLTFLoader 配置 MeshoptDecoder；模型不减面，压缩网格传输并将贴图限制在 2048 像素。`index.html` 将查询参数带到 `exploration.html`。
- 3D 舱策：Vite `--base=./`。`adaptations/cargoplan/` 保留浏览器任务适配代码；使用原 optimizer、validateRequest 和 validateSolution，在 Worker 中计算、取消及超时。原 `App.tsx` 的 `request()` 委托给 `browserRequest()`，去掉本地 HTTP API 依赖。
- 出土文物馆：Vite `base: './'`；运行时的 exhibits、hall、models 和 photos 路径改成相对于页面的地址。
- 拳击：Vite 基路径与 `adaptations/boxing-vite.config.ts` 一致；源模块中的 models、audio、mediapipe 和 ui 根路径在构建时统一重定位。原资源哈希及 TypeScript 构建检查保留。
- 故事造物社：采用作者 `tools/build_web.py` 的独立 Web 项目流程，Godot 4.7.2 单线程 Compatibility 导出；分块压缩加载器来自作者 `tools/web_v014/index.html`，保留作者页面中的文件选择适配。
- 信任的价格：先取得 public/assets 下 Git LFS 的真实模型，再执行 `npm run build -- --base=./`。村庄进行 Meshopt 传输压缩，保留完整场景。
- Pixel Desk Lab：Godot 4.7.2 单线程 WebGL 2 导出，包含运行时读取的 JSON/WAV。使用随包 Fusion Pixel 中文字体，音频及镜面画像通过 ResourceLoader 读取以兼容导出资源。桌面道具保留节点/材质名称，以 glTF Transform 做 10% 目标比例、0.001 误差容限的简化，贴图上限 1024；导出所有运行资源并排除验证及工具目录，确保动态 preload 的脚本完整。PCK/WASM gzip 后按块发布，由加载器在浏览器解压。不需要 SharedArrayBuffer 或特殊跨源隔离响应头。相关脚本与导出预设保留在 `adaptations/pixel/`。

Godot 模板必须与引擎版本匹配。单线程发布不启用 Service Worker，避免子目录缓存覆盖其他作品。

`games/` 为可部署产物；修改游戏逻辑请从 CREDITS.md 中的原作者源码开始，再应用这里记录的适配。不要手工改压缩后的 JavaScript。

## 本地预览

在父目录创建 `hackathon-3d-game` 文件夹或同名软链接，里面放本仓库内容，再在父目录启动静态 HTTP 服务。打开 `/hackathon-3d-game/arcade/`。直接双击文件无法可靠加载 WebGL 模型和 WASM。

## 更新发布

更新 `main` 中的 `arcade/` 后，将整个目录复制到当前 `gh-pages` 分支同名目录，保留该分支的其他文件，提交并推送。仓库当前 Pages 来源为 `gh-pages` 根目录。

验证记录见 QA.md。来源与许可见 CREDITS.md。

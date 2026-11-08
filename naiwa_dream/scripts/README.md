# 素材处理脚本（参考用）

这几个脚本是在开发机（Windows，`E:\游戏\.build\`）上处理素材时用的，**游戏运行不需要它们**，放在这里只是留个记录、方便以后重做素材。脚本里的路径是按开发机的文件夹写的，换机器要先改路径。

## 梦境版（11-07）
| 脚本 | 做什么 | 依赖 |
|---|---|---|
| `process_dream_models.mjs` | 牛来（唐僧，保留骨骼）、两只高雅企鹅、袋鼠、小黄鸭、负鼠、鲸鱼女仆减面到 9000~12000 面、贴图压到 1024 JPG；主角模型 sloppy 减面成 1419 面给七十二变的分身用 → `assets/models/*.glb`。用法：`node process_dream_models.mjs [任务名...]` | Node 20+，`@gltf-transform/core`、`@gltf-transform/functions`、`meshoptimizer`、`sharp` |
| `gen_dream_voices.py` | 用 edge-tts 合成老师、奶蛙、高雅企鹅、孙悟空、沙僧、堂吉诃德、桑丘、背手负鼠、羊的配音 → `dl/dream/tts/*.mp3`。用法：`python gen_dream_voices.py [名字...]` | Python 3，`pip install edge-tts`，要联网 |
| `grab_instants.mjs` | 从 myinstants 的页面或搜索结果里找 mp3 并下载 → `dl/dream/` | Node 20+，要联网 |
| `prep_dream_audio.mjs`、`prep_new_tts.mjs` | 把下载的梗音效和合成的配音转成单声道 mp3、裁掉开头静音、限制长度 → `assets/audio/` | ffmpeg、ffprobe |

## 缝合版（10-31）
| 脚本 | 做什么 | 依赖 |
|---|---|---|
| `process_minions.mjs` | 把企鹅、刀盾狗两个 Tripo 模型（各约 85 MB）减面到约 1.1 万面、贴图压到 1024 JPG，保留骨骼 → `assets/models/minion-a.glb`、`minion-b.glb` | 同上 |
| `bake_cats.mjs` | 香蕉猫、OIIA 猫（没有骨骼、贴图展开很碎）：先把高模绕一圈“拍”成圆柱贴图，再减面到 8000 / 6500 面 → `assets/models/minion-c.glb`、`minion-d.glb` | 同上 |
| `gen_feidudu.py` | 用微软 Edge 朗读服务合成老外口音的“你的胆子真是肥嘟嘟的” → `assets/audio/feidudu.mp3`、`feidudu-echo.mp3` | Python 3，`pip install edge-tts`，要联网 |

装依赖：`npm i @gltf-transform/core @gltf-transform/functions meshoptimizer sharp`。

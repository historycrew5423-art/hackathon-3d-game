# naiwa-sfx 音效资源包

从 `nai_缝合版_naiwa_最终版.zip` 的 `naiwa/assets/audio/` 原样拆出，未转码、未裁剪、未改名。
共 **17 个音效**，合计约 **1.1 MB / 67 秒**，清单见 `manifest.json`。

| 文件 | 格式 | 时长 | 采样率 / 声道 | 大小 |
|---|---|---|---|---|
| banana-cry-1.mp3 | MP3 | 5.72s | 44.1kHz / 2 | 90 KB |
| banana-cry-2.mp3 | MP3 | 5.72s | 44.1kHz / 2 | 135 KB |
| daodun.mp3 | MP3 | 1.38s | 44.1kHz / 2 | 22 KB |
| daodun-2.mp3 | MP3 | 1.33s | 44.1kHz / 2 | 21 KB |
| feidudu.mp3 | MP3 | 1.92s | 24kHz / 1 | 19 KB |
| feidudu-echo.mp3 | MP3 | 1.12s | 24kHz / 1 | 11 KB |
| gugugaga-1.mp3 | MP3 | 1.25s | 44.1kHz / 2 | 20 KB |
| gugugaga-2.mp3 | MP3 | 1.44s | 48kHz / 2 | 56 KB |
| naiwa-baoxiao.mp3 | MP3 | 14.23s | 48kHz / 2 | 223 KB |
| naiwa-pet-laugh.wav | WAV | 1.80s | 22.05kHz / 1 | 78 KB |
| nl-dupu.mp3 | MP3 | 1.25s | 22.05kHz / 2 | 10 KB |
| nl-gagadilashui.mp3 | MP3 | 1.36s | 22.05kHz / 2 | 12 KB |
| nl-gajiaosai.mp3 | MP3 | 1.18s | 22.05kHz / 2 | 10 KB |
| nl-hola-gabadie.mp3 | MP3 | 1.85s | 48kHz / 2 | 27 KB |
| oiia-1.mp3 | MP3 | 5.72s | 44.1kHz / 2 | 90 KB |
| oiia-2.mp3 | MP3 | 5.93s | 48kHz / 2 | 93 KB |
| shanshenbu.mp3 | MP3 | 14.03s | 44.1kHz / 2 | 220 KB |

## 用法

three.js 里直接按需加载，不做预解码，避免首屏卡顿：

```js
const listener = new THREE.AudioListener();
camera.add(listener);

const sfx = new THREE.Audio(listener);
const loader = new THREE.AudioLoader();
loader.load('/assets/audio/naiwa-baoxiao.mp3', (buf) => {
  sfx.setBuffer(buf);
  sfx.setLoop(false);
  sfx.play();
});
```

高频、短促的音效（`daodun`、`gugugaga`、`nl-*`）建议改用 `THREE.PositionalAudio` 并挂在发声物件上，
或者用 `AudioBufferSourceNode` 每次新建实例，避免同一个 `THREE.Audio` 重复 `play()` 被截断。

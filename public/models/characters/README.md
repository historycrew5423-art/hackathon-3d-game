# 已绑骨角色模型

由 Hi3D 生成的高模减面到约 4 万面（贴图 2048），经自动绑骨后补了 3 段循环动作，供 Three.js 使用。

| 文件 | 角色 | 骨数 | 动作 |
| --- | --- | --- | --- |
| ox.glb | 写实牛角色（持耙） | 29 | idle / walk / attack |
| untitled.glb | 袍服持杖角色 | 24 | idle / walk / attack |

- 单位：米，身高约 1m，+Y 朝上；30fps。
- 主要骨已命名：spine、chest、head、upperarm.L/R、forearm.L/R、thigh.L/R、shin.L/R，其余为 bone_N。
- 手持道具与身体是同一网格，未单独做挂点。
- 孙悟空、女术士处理中，稍后补充。

```ts
const gltf = await new GLTFLoader().loadAsync('models/characters/ox.glb');
const mixer = new THREE.AnimationMixer(gltf.scene);
mixer.clipAction(THREE.AnimationClip.findByName(gltf.animations, 'walk')).play();
// 每帧 mixer.update(dt)
```

// ===== 奶蛙梦游 · 重制版 =====
// 插在 three 打包代码和游戏代码之间，直接用打包里的 three 类（T 由 remake_alias.js 生成）。
// 内容：三个场景按参考图重做、灯光修正（奶蛙发白）、技能特效修复、卡顿优化、双摇杆和手柄、西游关换绑骨孙悟空。
T.Vector2 = ie;
T.Vector3 = R;
T.Matrix4 = We;
const RM = (() => {
  const Q = new URLSearchParams(location.search);
  // 手机档：触屏设备、小屏，或网址 ?q=low；?q=high 强制高画质
  const TOUCH = matchMedia("(pointer: coarse)").matches;
  const LOW = Q.get("q") === "low" || ((TOUCH || Math.min(screen.width, screen.height) < 520) && Q.get("q") !== "high");
  // 手机用 512 的贴图（assets-m），电脑用 1024；白虎岭也跟着这个目录走
  const TEXDIR = LOW ? "./baihuling/assets-m/" : "./baihuling/";
  window.__bhlTexDir = LOW ? "assets-m/" : "";
  const loader = new T.TextureLoader();
  const baseTex = {};
  const shared = { time: { value: 0 } };
  const updaters = { school: [], butterfly: [], runner: [], journey: [] };
  const v3 = (x = 0, y = 0, z = 0) => new T.Vector3(x, y, z);
  let app;
  function tex(name, rx = 1, ry = rx, srgb = true) {
    let b = baseTex[name];
    if (!b) {
      // 下载完马上传到显卡，进关时不再因为第一次用贴图卡一下
      b = baseTex[name] = loader.load(TEXDIR + name + ".webp", (t) => app && app.renderer.initTexture(t));
      b.wrapS = b.wrapT = 1000;
      b.anisotropy = LOW ? 2 : 8;
      if (srgb) b.colorSpace = "srgb";
    }
    const t = b.clone();
    t.repeat.set(rx, ry);
    return t;
  }
  // 法线贴图：手机上不用（省一次采样和一堆计算）
  const nrm = (name, rx = 1, ry = rx) => (LOW ? null : tex(name, rx, ry, false));
  function ctex(w, h, draw, rx = 1, ry = 1) {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    draw(c.getContext("2d"), w, h);
    const t = new T.CanvasTexture(c);
    t.colorSpace = "srgb";
    t.wrapS = t.wrapT = 1000;
    t.repeat.set(rx, ry);
    t.anisotropy = LOW ? 4 : 8;
    return t;
  }
  const rng = (seed) => {
    let s = seed >>> 0 || 1;
    return () => (s = (s * 16807) % 2147483647) / 2147483647;
  };
  function hash3(x, y, z) {
    let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263) ^ Math.imul(z | 0, 1440662683);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  }
  function vnoise(x, y, z) {
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), xf = x - xi, yf = y - yi, zf = z - zi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
    let r = 0;
    for (let k = 0; k < 8; k++) {
      const dx = k & 1, dy = (k >> 1) & 1, dz = (k >> 2) & 1;
      r += hash3(xi + dx, yi + dy, zi + dz) * (dx ? u : 1 - u) * (dy ? v : 1 - v) * (dz ? w : 1 - w);
    }
    return r * 2 - 1;
  }
  const fbm = (x, y, z, o = 4) => {
    let a = 0.5, f = 1, s = 0;
    for (let i = 0; i < o; i++) (s += a * vnoise(x * f, y * f, z * f)), (f *= 2.03), (a *= 0.5);
    return s;
  };
  const std = (o) => new T.MeshStandardMaterial(o);
  const box = (w, h, d) => new T.BoxGeometry(w, h, d);
  function mesh(geo, mat, x, y, z, parent, o = {}) {
    const m = new T.Mesh(geo, mat);
    m.position.set(x || 0, y || 0, z || 0);
    if (o.rx) m.rotation.x = o.rx;
    if (o.ry) m.rotation.y = o.ry;
    if (o.rz) m.rotation.z = o.rz;
    if (o.s) Array.isArray(o.s) ? m.scale.set(...o.s) : m.scale.setScalar(o.s);
    m.castShadow = !!o.cast;
    m.receiveShadow = o.recv !== false;
    if (parent) parent.add(m);
    return m;
  }
  // 沿位置方向位移：多面体、车床体的接缝处位置相同，位移也相同，不会裂开
  function displace(geo, amp, freq, seed = 0, radial = true) {
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      const d = fbm(x * freq + seed, y * freq + seed * 0.7, z * freq - seed, 4) * amp;
      const l = radial ? Math.hypot(x, z) || 1 : Math.hypot(x, y, z) || 1;
      if (radial) p.setXYZ(i, x + (x / l) * d, y + d * 0.2, z + (z / l) * d);
      else p.setXYZ(i, x + (x / l) * d, y + (y / l) * d, z + (z / l) * d);
    }
    geo.computeVertexNormals();
    return geo;
  }
  function concatGeos(geos) {
    let n = 0;
    for (const g of geos) n += g.attributes.position.count;
    const pos = new Float32Array(n * 3), nor = new Float32Array(n * 3), uv = new Float32Array(n * 2);
    const col = geos.some((g) => g.attributes.color) ? new Float32Array(n * 3).fill(1) : null;
    let o = 0;
    for (const g of geos) {
      const c = g.attributes.position.count;
      pos.set(g.attributes.position.array.subarray(0, c * 3), o * 3);
      if (g.attributes.normal) nor.set(g.attributes.normal.array.subarray(0, c * 3), o * 3);
      if (g.attributes.uv) uv.set(g.attributes.uv.array.subarray(0, c * 2), o * 2);
      if (col && g.attributes.color) col.set(g.attributes.color.array.subarray(0, c * 3), o * 3);
      o += c;
    }
    const out = new T.BufferGeometry();
    out.setAttribute("position", new T.BufferAttribute(pos, 3));
    out.setAttribute("normal", new T.BufferAttribute(nor, 3));
    out.setAttribute("uv", new T.BufferAttribute(uv, 2));
    if (col) out.setAttribute("color", new T.BufferAttribute(col, 3));
    out.computeBoundingSphere();
    return out;
  }
  // 一次绘制画完一批朝向镜头的面片（云、雾），代替几十个 Sprite
  function billboards(map, items, tiles = 1, opacity = 1) {
    const geo = new T.PlaneGeometry(1, 1);
    const at = new Float32Array(items.length * 2);
    items.forEach((it, i) => ((at[i * 2] = it[5] || 0), (at[i * 2 + 1] = it[6] ?? 1)));
    geo.setAttribute("aTile", new T.InstancedBufferAttribute(at, 2));
    const m = new T.ShaderMaterial({
      transparent: true, depthWrite: false, fog: false,
      uniforms: { map: { value: map }, op: { value: opacity } },
      vertexShader: `attribute vec2 aTile;varying vec2 vU;varying float vA;
        void main(){vec4 c=modelViewMatrix*instanceMatrix*vec4(0.,0.,0.,1.);
        c.xy+=position.xy*vec2(length(instanceMatrix[0].xyz),length(instanceMatrix[1].xyz));
        vU=vec2((uv.x+aTile.x)/${tiles.toFixed(1)},uv.y);vA=aTile.y;gl_Position=projectionMatrix*c;}`,
      fragmentShader: `uniform sampler2D map;uniform float op;varying vec2 vU;varying float vA;
        void main(){vec4 t=texture2D(map,vU);gl_FragColor=vec4(t.rgb,t.a*vA*op);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`,
    });
    const im = new T.InstancedMesh(geo, m, items.length), d = new T.Object3D();
    items.forEach(([x, y, z, w, h], i) => {
      d.position.set(x, y, z);
      d.scale.set(w, h, 1);
      d.updateMatrix();
      im.setMatrixAt(i, d.matrix);
    });
    im.frustumCulled = false;
    return im;
  }
  // 组里不动的网格按材质合并，绘制次数从几百降到十几
  function mergeStatic(group) {
    group.updateMatrixWorld(true);
    const inv = new T.Matrix4().copy(group.matrixWorld).invert(), buckets = new Map(), remove = [];
    group.traverse((o) => {
      if (!o.isMesh || o.isInstancedMesh || o.userData.keep) return;
      for (let p = o.parent; p && p !== group; p = p.parent) if (p.userData.keep) return;
      const key = o.material.uuid + (o.castShadow ? "c" : "");
      if (!buckets.has(key)) buckets.set(key, { mat: o.material, cast: o.castShadow, geos: [] });
      const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      g.applyMatrix4(new T.Matrix4().multiplyMatrices(inv, o.matrixWorld));
      buckets.get(key).geos.push(g);
      remove.push(o);
    });
    for (const o of remove) o.parent.remove(o);
    for (const b of buckets.values()) {
      const m = new T.Mesh(concatGeos(b.geos), b.mat);
      m.castShadow = b.cast;
      m.receiveShadow = true;
      group.add(m);
    }
    return group;
  }
  // 四角起翘、屋面下凹的庑殿顶
  function hipRoof(w, d, h, flare = 0.45, rings = 7, per = 8) {
    const pos = [], uv = [], idx = [], n = per * 4;
    for (let r = 0; r <= rings; r++) {
      const t = r / rings, s = r === rings ? 0.02 : 1 - Math.pow(t, 0.7) * 0.9, y = h * (0.35 * t + 0.65 * t * t);
      for (let k = 0; k < n; k++) {
        const side = Math.floor(k / per), f = (k % per) / per;
        const px = side === 0 ? -1 + 2 * f : side === 1 ? 1 : side === 2 ? 1 - 2 * f : -1;
        const pz = side === 0 ? -1 : side === 1 ? -1 + 2 * f : side === 2 ? 1 : 1 - 2 * f;
        const corner = Math.pow(Math.abs(px * pz), 4);
        pos.push(px * (w / 2) * s, y + flare * h * corner * Math.pow(1 - t, 1.5), pz * (d / 2) * s);
        uv.push((k / n) * 6, t * 2.5);
      }
    }
    for (let r = 0; r < rings; r++)
      for (let k = 0; k < n; k++) {
        const a = r * n + k, b = r * n + ((k + 1) % n);
        idx.push(a, b, a + n, b, b + n, a + n);
      }
    const g = new T.BufferGeometry();
    g.setAttribute("position", new T.BufferAttribute(new Float32Array(pos), 3));
    g.setAttribute("uv", new T.BufferAttribute(new Float32Array(uv), 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }
  function skyDome({ top, mid, hor, sun, sunDir, sunPow = 1 }) {
    const m = new T.ShaderMaterial({
      side: 1, depthWrite: false, fog: false,
      uniforms: {
        top: { value: new T.Color(top) }, mid: { value: new T.Color(mid) }, hor: { value: new T.Color(hor) },
        sunC: { value: new T.Color(sun) }, sunDir: { value: sunDir.clone().normalize() }, sunPow: { value: sunPow },
      },
      vertexShader: "varying vec3 vP;void main(){vP=normalize(position);vec4 p=projectionMatrix*modelViewMatrix*vec4(position,1.);gl_Position=p;gl_Position.z=p.w*0.9999;}",
      fragmentShader: `uniform vec3 top,mid,hor,sunC,sunDir;uniform float sunPow;varying vec3 vP;
        void main(){float h=vP.y;vec3 c=mix(hor,mid,smoothstep(-0.02,0.22,h));c=mix(c,top,smoothstep(0.22,0.95,h));
        float s=max(dot(vP,sunDir),0.);c+=sunC*(pow(s,6.)*0.28+pow(s,48.)*0.7+pow(s,900.)*5.)*sunPow;
        if(h<0.)c=mix(c,hor*0.9,clamp(-h*5.,0.,1.));gl_FragColor=vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`,
    });
    const s = new T.Mesh(new T.SphereGeometry(800, 48, 24), m);
    s.renderOrder = -10;
    s.frustumCulled = false;
    return s;
  }
  function cloudTex(seed) {
    return ctex(256, 160, (g, w) => {
      const r = rng(seed);
      for (let i = 0; i < 46; i++) {
        const x = 30 + r() * (w - 60), y = 50 + r() * 70 - Math.max(0, 1 - Math.abs(x - w / 2) / (w / 2)) * 30, rad = 14 + r() * 32;
        const gr = g.createRadialGradient(x, y - rad * 0.3, 0, x, y, rad);
        gr.addColorStop(0, "rgba(255,248,236,1)");
        gr.addColorStop(0.55, "rgba(250,244,236,.75)");
        gr.addColorStop(0.85, "rgba(190,200,222,.35)");
        gr.addColorStop(1, "rgba(200,210,230,0)");
        g.fillStyle = gr;
        g.beginPath();
        g.arc(x, y, rad, 0, 7);
        g.fill();
      }
    });
  }
  const softDot = () =>
    ctex(64, 64, (g) => {
      const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      gr.addColorStop(0, "rgba(255,255,255,1)");
      gr.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = gr;
      g.fillRect(0, 0, 64, 64);
    });
  function sparkles(count, b, color, size, parent) {
    const r = rng(count * 7 + 3), p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = b[0] + r() * (b[3] - b[0]);
      p[i * 3 + 1] = b[1] + r() * (b[4] - b[1]);
      p[i * 3 + 2] = b[2] + r() * (b[5] - b[2]);
    }
    const g = new T.BufferGeometry();
    g.setAttribute("position", new T.BufferAttribute(p, 3));
    const pts = new T.Points(g, new T.PointsMaterial({ color, size, map: softDot(), transparent: true, depthWrite: false, blending: 2 }));
    pts.frustumCulled = false;
    parent.add(pts);
    return pts;
  }
  function addSprite(parent, map, x, y, z, sx, sy, op = 1, fog = false) {
    const s = new T.Sprite(new T.SpriteMaterial({ map, transparent: true, depthWrite: false, opacity: op, fog }));
    s.position.set(x, y, z);
    s.scale.set(sx, sy, 1);
    parent.add(s);
    return s;
  }
  // 实例化植被随风摆：顶点按 uv.y 加权
  function windSway(mat, amp = 0.12) {
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = shared.time;
      sh.vertexShader = "uniform float uTime;\n" + sh.vertexShader.replace("#include <begin_vertex>",
        `#include <begin_vertex>
        vec4 wp0 = modelMatrix * instanceMatrix * vec4(position,1.);
        float sw = sin(uTime*1.8 + wp0.x*0.35 + wp0.z*0.22) + sin(uTime*3.1 + wp0.z*0.6)*0.35;
        transformed.x += sw * ${amp.toFixed(3)} * uv.y * uv.y; transformed.z += sw * ${(amp * 0.5).toFixed(3)} * uv.y * uv.y;`);
    };
    mat.customProgramCacheKey = () => "sway" + amp;
    return mat;
  }
  function scatter(geo, mat, list, parent, cast = false) {
    const im = new T.InstancedMesh(geo, mat, list.length), d = new T.Object3D();
    list.forEach(([x, y, z, s, ry = 0, sy = s], i) => {
      d.position.set(x, y, z);
      d.rotation.set(0, ry, 0);
      d.scale.set(s, sy, s);
      d.updateMatrix();
      im.setMatrixAt(i, d.matrix);
    });
    im.castShadow = cast;
    im.receiveShadow = true;
    parent.add(im);
    return im;
  }
  // ---------- 1. 教室：夕阳、窗外云海、木地板、窗棂投下的光斑、黑板上的蝴蝶 ----------
  function buildSchool(world) {
    const root = world.root;
    root.children.forEach((c) => (c.visible = false));
    (world.zs || []).forEach((z) => (z.visible = true));
    const g = new T.Group();
    root.add(g);
    const X = 11, H = 6.8, ZF = -8.2, ZB = 11, wins = [-4.6, 0.9, 6.4], ww = 4.2, wy0 = 1.25, wy1 = 5.95;
    const floorM = std({ map: tex("planks_diff", 7, 6), normalMap: nrm("planks_nor", 7, 6, false), roughness: 0.38, color: 0xe3a46b });
    mesh(new T.PlaneGeometry(2 * X, ZB - ZF), floorM, 0, 0, (ZB + ZF) / 2, g, { rx: -Math.PI / 2 });
    const wallM = std({ map: tex("plaster_diff", 4, 1.6), color: 0xf3dcb4, roughness: 0.95 });
    const woodM = std({ map: tex("planks_diff", 3, 0.6), color: 0x8a4e2a, roughness: 0.55 });
    const frameM = std({ map: tex("redwood_diff", 1, 2), color: 0x7a4422, roughness: 0.5 });
    const ironM = std({ color: 0x23201d, roughness: 0.45, metalness: 0.6 });
    const walls = new T.Group();
    g.add(walls);
    mesh(box(2 * X + 1, 0.25, ZB - ZF + 1), std({ map: tex("plaster_diff", 3, 3), color: 0xd9c3a0, roughness: 1 }), 0, H + 0.12, (ZB + ZF) / 2, walls, { cast: true });
    for (const z of [-3.2, 3.8]) mesh(box(2 * X, 0.35, 0.5), wallM, 0, H - 0.17, z, walls, { cast: true });
    mesh(box(2 * X, H, 0.3), wallM, 0, H / 2, ZF - 0.15, walls, { cast: true });
    mesh(box(2 * X, H, 0.3), wallM, 0, H / 2, ZB + 0.15, walls, { cast: true });
    for (const side of [-1, 1]) {
      const x = side * (X + 0.15);
      mesh(box(0.3, wy0, ZB - ZF), wallM, x, wy0 / 2, (ZB + ZF) / 2, walls, { cast: true });
      mesh(box(0.3, H - wy1, ZB - ZF), wallM, x, (H + wy1) / 2, (ZB + ZF) / 2, walls, { cast: true });
      let z = ZF;
      for (const wc of [...wins, ZB + ww / 2]) {
        const z1 = wc - ww / 2;
        if (z1 > z + 0.01) mesh(box(0.3, wy1 - wy0, z1 - z), wallM, x, (wy0 + wy1) / 2, (z + z1) / 2, walls, { cast: true });
        z = wc + ww / 2;
      }
      for (const wc of wins) {
        const fx = x - side * 0.05;
        for (const y of [wy0, wy1]) mesh(box(0.16, 0.14, ww), frameM, fx, y, wc, walls, { cast: true });
        mesh(box(0.14, 0.09, ww), frameM, fx, 4.3, wc, walls, { cast: true });
        for (let k = 0; k <= 4; k++) mesh(box(0.14, wy1 - wy0, k % 4 ? 0.07 : 0.14), frameM, fx, (wy0 + wy1) / 2, wc - ww / 2 + (k * ww) / 4, walls, { cast: true });
        mesh(box(0.42, 0.06, ww + 0.3), woodM, x - side * 0.2, wy0 - 0.03, wc, walls, { cast: true });
      }
      mesh(box(0.06, 1.1, ZB - ZF), woodM, side * (X - 0.03), 0.55, (ZB + ZF) / 2, walls);
    }
    mesh(box(2 * X, 1.1, 0.06), woodM, 0, 0.55, ZB - 0.03, walls);
    mesh(box(2 * X, 1.0, 0.06), woodM, 0, 0.5, ZF + 0.03, walls);
    mesh(box(10.2, 3.9, 0.12), frameM, 0, 3.55, ZF + 0.05, walls, { cast: true });
    mesh(box(9.8, 0.08, 0.22), frameM, 0, 1.72, ZF + 0.2, walls, { cast: true });
    mesh(box(2.2, 1.15, 0.95), std({ map: tex("planks_diff", 1.2, 0.8), color: 0x5a3018, roughness: 0.6 }), 0, 0.58, ZF + 1.9, walls, { cast: true });
    mesh(box(2.4, 0.07, 1.1), frameM, 0, 1.19, ZF + 1.9, walls, { cast: true });
    mesh(box(5.4, 0.25, 2.2), woodM, 0, 0.12, ZF + 1.4, walls, { cast: true });
    mergeStatic(walls);
    world.__school = { g, X, H, ZF, ZB, wins, ww, wy0, wy1, woodM, frameM, ironM };
    buildSchool2(world);
  }
  function buildSchool2(world) {
    const { g, X, ZF, wins, ww, wy0, wy1, ironM } = world.__school;
    // 黑板：粉笔字和蝴蝶画在贴图上
    const boardTex = ctex(1024, 384, (c, w, h) => {
      const gr = c.createLinearGradient(0, 0, w, h);
      gr.addColorStop(0, "#22392f");
      gr.addColorStop(1, "#18291f");
      c.fillStyle = gr;
      c.fillRect(0, 0, w, h);
      const r = rng(9);
      for (let i = 0; i < 1400; i++) (c.fillStyle = `rgba(230,240,230,${r() * 0.05})`), c.fillRect(r() * w, r() * h, 2 + r() * 40, 1 + r() * 3);
      c.fillStyle = "rgba(240,245,235,.9)";
      c.font = 'bold 54px "KaiTi","STKaiti","Microsoft YaHei",serif';
      c.fillText("《庄周梦蝶》", 70, 92);
      c.font = '34px "KaiTi","STKaiti","Microsoft YaHei",serif';
      c.fillStyle = "rgba(240,245,235,.78)";
      c.fillText("昔者庄周梦为胡蝶，栩栩然胡蝶也。", 70, 160);
      c.fillText("不知周之梦为胡蝶与，胡蝶之梦为周与？", 70, 212);
      c.fillStyle = "rgba(255,230,160,.85)";
      c.fillText("奶蛙同学，请不要在梦里笑出声。", 70, 300);
      for (const [x, y, s, a] of [[760, 120, 1.1, -0.3], [860, 220, 0.8, 0.25], [690, 250, 0.7, -0.1]]) {
        c.save();
        c.translate(x, y);
        c.rotate(a);
        c.strokeStyle = "rgba(250,250,245,.9)";
        c.fillStyle = "rgba(250,250,245,.55)";
        c.lineWidth = 2.5;
        for (const sx of [-1, 1]) {
          c.beginPath();
          c.moveTo(0, 0);
          c.bezierCurveTo(sx * 40 * s, -60 * s, sx * 80 * s, -30 * s, sx * 30 * s, 6 * s);
          c.bezierCurveTo(sx * 60 * s, 30 * s, sx * 30 * s, 50 * s, 0, 8 * s);
          c.fill();
          c.stroke();
        }
        c.restore();
      }
    });
    mesh(new T.PlaneGeometry(9.8, 3.55), std({ map: boardTex, roughness: 0.85 }), 0, 3.55, ZF + 0.125, g);
    // 课桌椅：原来 3×3 的位置都在，再补满成 5×5
    const deskTop = std({ map: tex("planks_diff", 1, 0.7), color: 0xc8743c, roughness: 0.45 });
    const seatM = std({ map: tex("planks_diff", 0.6, 0.5), color: 0xa85e30, roughness: 0.5 });
    const desks = new T.Group();
    g.add(desks);
    const tube = new T.CylinderGeometry(0.025, 0.025, 1, 6);
    for (const z of [-5.2, -2.3, 1, 4.1, 7.2])
      for (const x of [-7.6, -3.8, 0, 3.8, 7.6]) {
        mesh(box(1.5, 0.06, 0.95), deskTop, x, 1.02, z, desks, { cast: true });
        mesh(box(1.38, 0.03, 0.75), ironM, x, 0.74, z, desks);
        for (const dx of [-0.68, 0.68]) for (const dz of [-0.4, 0.4]) mesh(tube, ironM, x + dx, 0.5, z + dz, desks, { cast: true });
        const cz = z + 1.25;
        mesh(box(0.6, 0.05, 0.52), seatM, x, 0.55, cz, desks, { cast: true });
        mesh(box(0.6, 0.34, 0.04), seatM, x, 1.12, cz + 0.27, desks, { cast: true });
        for (const dx of [-0.26, 0.26]) {
          for (const dz of [-0.22, 0.22]) mesh(tube, ironM, x + dx, 0.27, cz + dz, desks, { s: [1, 0.54, 1] });
          mesh(tube, ironM, x + dx, 0.85, cz + 0.27, desks, { s: [1, 0.62, 1] });
        }
      }
    mergeStatic(desks);
    world.__school.boardTex = boardTex;
    buildSchool3(world);
  }
  function buildSchool3(world) {
    const { g, X, ZF, wins, ww, wy0, wy1 } = world.__school;
    // 窗外：云海和天空
    const outside = ctex(1024, 512, (c, w, h) => {
      const gr = c.createLinearGradient(0, 0, 0, h);
      for (const [p, col] of [[0, "#3d74c4"], [0.45, "#8cb6e4"], [0.62, "#f6d7a8"], [0.7, "#fff2dc"], [1, "#f3e6d6"]]) gr.addColorStop(p, col);
      c.fillStyle = gr;
      c.fillRect(0, 0, w, h);
      c.fillStyle = "rgba(70,80,110,.5)";
      c.beginPath();
      c.moveTo(0, h * 0.64);
      c.quadraticCurveTo(w * 0.12, h * 0.55, w * 0.3, h * 0.64);
      c.lineTo(0, h * 0.66);
      c.fill();
      const r = rng(5);
      for (let i = 0; i < 240; i++) {
        const x = r() * w, y = h * (0.62 + r() * 0.38), rad = 10 + r() * 40, g2 = c.createRadialGradient(x, y - rad * 0.4, 0, x, y, rad);
        g2.addColorStop(0, "rgba(255,250,240,.95)");
        g2.addColorStop(0.7, "rgba(235,232,236,.6)");
        g2.addColorStop(1, "rgba(220,225,235,0)");
        c.fillStyle = g2;
        c.beginPath();
        c.arc(x, y, rad, 0, 7);
        c.fill();
      }
      for (let i = 0; i < 26; i++) {
        const x = r() * w, y = h * (0.12 + r() * 0.35), rad = 20 + r() * 45, g2 = c.createRadialGradient(x, y - rad * 0.3, 0, x, y, rad);
        g2.addColorStop(0, "rgba(255,255,255,.9)");
        g2.addColorStop(1, "rgba(255,255,255,0)");
        c.fillStyle = g2;
        c.beginPath();
        c.ellipse(x, y, rad * 1.8, rad * 0.7, 0, 0, 7);
        c.fill();
      }
    });
    for (const side of [-1, 1]) mesh(new T.PlaneGeometry(90, 45), new T.MeshBasicMaterial({ map: outside, fog: false }), side * 34, 6, 1, g, { ry: -side * Math.PI / 2, recv: false });
    // 阳光光柱：从左窗洞斜射到地板（叠加混合，随距离变淡）
    const sunDir = v3(-1, 0.42, 0.22).normalize();
    world.__sunDir = sunDir;
    const shaftM = new T.ShaderMaterial({
      transparent: true, depthWrite: false, blending: 2, side: 2, fog: false,
      uniforms: { col: { value: new T.Color(0xffc483) }, op: { value: 0.1 } },
      vertexShader: "attribute float fade;varying float vF;varying vec2 vU;void main(){vF=fade;vU=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      fragmentShader: "uniform vec3 col;uniform float op;varying float vF;varying vec2 vU;void main(){float e=smoothstep(0.,.3,vU.x)*smoothstep(1.,.7,vU.x);gl_FragColor=vec4(col*op*(1.-vF)*e,1.);}",
    });
    const dir = sunDir.clone().multiplyScalar(-11.5), pos = [], fade = [], uv = [];
    const quad = (p0, p1, p2, p3) => {
      for (const [p, f, u] of [[p0, 0, 0], [p1, 0, 1], [p2, 1, 1], [p0, 0, 0], [p2, 1, 1], [p3, 1, 0]]) pos.push(p.x, p.y, p.z), fade.push(f), uv.push(u, f);
    };
    for (const wc of wins)
      for (let k = 0; k < 4; k++) {
        const za = wc - ww / 2 + (k * ww) / 4 + 0.1, zb = za + ww / 4 - 0.2;
        const a = [v3(-X, wy1 - 0.1, za), v3(-X, wy1 - 0.1, zb), v3(-X, wy0 + 0.1, zb), v3(-X, wy0 + 0.1, za)], b = a.map((p) => p.clone().add(dir));
        quad(a[0], a[1], b[1], b[0]);
        quad(a[3], a[2], b[2], b[3]);
        quad(a[0], a[3], b[3], b[0]);
      }
    const sg = new T.BufferGeometry();
    sg.setAttribute("position", new T.BufferAttribute(new Float32Array(pos), 3));
    sg.setAttribute("fade", new T.BufferAttribute(new Float32Array(fade), 1));
    sg.setAttribute("uv", new T.BufferAttribute(new Float32Array(uv), 2));
    const shafts = new T.Mesh(sg, shaftM);
    shafts.renderOrder = 5;
    g.add(shafts);
    buildSchool4(world);
  }
  function buildSchool4(world) {
    const { g, X, ZF, wins, ww, wy0, wy1 } = world.__school;
    // 窗帘（右侧，被风吹起）
    const curtainM = std({ color: 0xf6efe2, roughness: 0.9, side: 2, transparent: true, opacity: 0.92 });
    const curtains = [];
    for (const wc of wins)
      for (const dz of [-1, 1]) {
        const geo = new T.PlaneGeometry(1.1, wy1 - wy0 + 0.4, 6, 14);
        const c = mesh(geo, curtainM, X - 0.35, (wy0 + wy1) / 2 + 0.1, wc + dz * (ww / 2 - 0.45), g, { ry: -Math.PI / 2, cast: true });
        c.userData.base = Float32Array.from(geo.attributes.position.array);
        c.userData.ph = wc + dz;
        curtains.push(c);
      }
    const dust = sparkles(LOW ? 260 : 700, [-9, 0.3, -7, 4, 5.5, 9], 0xffd9a0, 0.05, g);
    const bTex = ctex(128, 128, (c) => {
      c.translate(64, 70);
      c.fillStyle = "rgba(255,255,250,.95)";
      for (const sx of [-1, 1]) {
        c.beginPath();
        c.moveTo(0, 0);
        c.bezierCurveTo(sx * 30, -52, sx * 62, -26, sx * 26, 4);
        c.bezierCurveTo(sx * 50, 26, sx * 24, 44, 0, 6);
        c.fill();
      }
    });
    const flies = [];
    for (let i = 0; i < 5; i++) flies.push(addSprite(g, bTex, -1.5 + i * 0.9, 3.8, ZF + 0.9 + i * 0.25, 0.55, 0.55, 0.95, true));
    const pageM = std({ color: 0xf4ecd8, roughness: 0.9, side: 2 });
    const pages = [0, 1, 2].map((i) => mesh(new T.PlaneGeometry(0.42, 0.3), pageM, -1 + i, 2.6, ZF + 2.4, g, { cast: true }));
    updaters.school.push((dt, t) => {
      for (const c of curtains) {
        const p = c.geometry.attributes.position, b = c.userData.base;
        for (let i = 0; i < p.count; i++) {
          const y = b[i * 3 + 1], hy = Math.max(0, 0.5 - y / 5.2);
          p.setZ(i, b[i * 3 + 2] + (Math.sin(t * 1.6 + c.userData.ph + y * 1.3) * 0.18 + Math.sin(t * 0.7 + c.userData.ph) * 0.3) * hy * 1.6);
        }
        p.needsUpdate = true;
        c.geometry.computeVertexNormals();
      }
      dust.position.y = Math.sin(t * 0.3) * 0.12;
      dust.rotation.y = Math.sin(t * 0.05) * 0.05;
      flies.forEach((s, i) => {
        s.scale.x = 0.55 * (0.35 + Math.abs(Math.sin(t * 9 + i * 1.7)) * 0.65);
        s.position.x = -1.5 + i * 0.9 + Math.sin(t * 0.6 + i) * 0.6;
        s.position.y = 3.6 + (i % 2) * 0.7 + Math.sin(t * 1.1 + i) * 0.35;
      });
      pages.forEach((p, i) => {
        p.position.set(Math.sin(t * 0.4 + i * 2.1) * 2.2, 2.4 + Math.sin(t * 0.9 + i) * 0.6, ZF + 2.6 + Math.cos(t * 0.3 + i) * 0.8);
        p.rotation.set(Math.sin(t + i) * 0.8, t * 0.5 + i, Math.cos(t * 0.7 + i) * 0.6);
      });
    });
  }
  // ---------- 2. 庄周梦蝶·仙城：湖心白玉台、中轴长桥、两岸宫殿、喀斯特石峰、天上一对巨大蝶翼 ----------
  function buildButterfly(world) {
    const root = world.root, deskIdx = root.children.indexOf(world.desk);
    root.children.forEach((c, i) => i < deskIdx && (c.visible = false));
    (world.clouds || []).forEach((c) => (c.s.visible = false));
    (world.mist || []).forEach((m) => (m.visible = false));
    const g = new T.Group();
    root.add(g);
    const sunDir = v3(0.78, 0.36, -0.52).normalize();
    world.__sunDir = sunDir;
    g.add(skyDome({ top: 0x2f63b8, mid: 0x86b4e6, hor: 0xf3dcb8, sun: 0xffd08a, sunDir, sunPow: 1.2 }));
    const water = new T.Mesh(new T.CircleGeometry(700, 96), new T.ShaderMaterial({
      fog: false,
      uniforms: { time: shared.time, deep: { value: new T.Color(0x2b5058) }, skyC: { value: new T.Color(0xd5e2ea) }, sunC: { value: new T.Color(0xffd9a0) }, sunDir: { value: sunDir }, haze: { value: new T.Color(0xf0dcc0) } },
      vertexShader: "varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",
      fragmentShader: `uniform float time;uniform vec3 deep,skyC,sunC,sunDir,haze;varying vec3 vW;
        float h(vec2 p){return sin(p.x*1.3+time*1.1)*.5+sin(p.y*1.7-time*.9)*.5+sin((p.x+p.y)*2.9+time*1.7)*.25+sin((p.x-p.y*1.3)*5.3-time*2.3)*.12;}
        void main(){vec2 p=vW.xz*.45;float e=.05;vec3 n=normalize(vec3(-(h(p+vec2(e,0.))-h(p-vec2(e,0.)))*.06,1.,-(h(p+vec2(0.,e))-h(p-vec2(0.,e)))*.06));
        vec3 v=normalize(cameraPosition-vW);float fr=pow(1.-max(dot(n,v),0.),4.)*.8+.12;vec3 r=reflect(-v,n);
        vec3 c=mix(deep,skyC,fr)+sunC*pow(max(dot(r,sunDir),0.),220.)*4.;
        c=mix(c,haze,smoothstep(60.,520.,length(vW.xz-cameraPosition.xz)));gl_FragColor=vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`,
    }));
    water.rotation.x = -Math.PI / 2;
    water.position.y = -0.55;
    water.renderOrder = -5;
    g.add(water);
    const marble = std({ map: tex("plaster_diff", 3, 3), color: 0xf4efe6, roughness: 0.42 });
    const stone = std({ map: tex("stonewall_diff", 6, 1), normalMap: nrm("stonewall_nor", 6, 1, false), color: 0xe9e2d6, roughness: 0.85 });
    const plazaTex = ctex(1024, 1024, (c, w) => {
      c.fillStyle = "#efe9dd";
      c.fillRect(0, 0, w, w);
      c.strokeStyle = "rgba(160,150,135,.35)";
      c.lineWidth = 2;
      for (let i = 0; i <= 16; i++) c.beginPath(), c.moveTo((i * w) / 16, 0), c.lineTo((i * w) / 16, w), c.moveTo(0, (i * w) / 16), c.lineTo(w, (i * w) / 16), c.stroke();
      c.translate(w / 2, w / 2);
      c.strokeStyle = "rgba(190,150,80,.55)";
      for (const [r, lw] of [[480, 5], [450, 2], [300, 3], [170, 2], [60, 3]]) (c.lineWidth = lw), c.beginPath(), c.arc(0, 0, r, 0, 7), c.stroke();
      for (let i = 0; i < 16; i++) c.rotate(Math.PI / 8), c.beginPath(), c.moveTo(0, 175), c.quadraticCurveTo(40, 240, 0, 295), c.quadraticCurveTo(-40, 240, 0, 175), c.stroke();
    });
    mesh(new T.CircleGeometry(15.4, 96), std({ map: plazaTex, roughness: 0.32 }), 0, 0.01, 0, g, { rx: -Math.PI / 2 });
    mesh(new T.CylinderGeometry(15.5, 16.2, 0.9, 72, 1, true), stone, 0, -0.45, 0, g);
    mesh(new T.CylinderGeometry(17.2, 17.6, 0.35, 72), marble, 0, -0.52, 0, g);
    // 栏杆：前后两个桥口留空
    const posts = [], gap = 0.19;
    for (let i = 0; i < 64; i++) {
      const a = (i / 64) * Math.PI * 2;
      if (Math.abs(Math.sin(a)) < Math.sin(gap)) continue;
      posts.push([Math.sin(a) * 15.6, 0.47, Math.cos(a) * 15.6, 1, a]);
    }
    scatter(box(0.22, 0.95, 0.22), marble, posts, g, true);
    for (const y of [0.88, 0.42])
      for (const a0 of [Math.PI / 2 + gap, (3 * Math.PI) / 2 + gap])
        mesh(new T.TorusGeometry(15.6, 0.07, 6, 80, Math.PI - 2 * gap).rotateX(Math.PI / 2).rotateY(-a0), marble, 0, y, 0, g, { cast: true });
    world.__bf = { g, marble, stone, sunDir };
    buildButterfly2(world);
  }
  function buildButterfly2(world) {
    const { g, marble, stone } = world.__bf;
    const bridge = new T.Group();
    g.add(bridge);
    const deckM = std({ map: tex("plaster_diff", 1, 14), color: 0xf2ece2, roughness: 0.4 });
    const lampM = std({ color: 0xfff1cf, emissive: 0xffc46a, emissiveIntensity: 1.6, roughness: 0.6 });
    const roofM = std({ map: tex("roof_diff", 3, 2), normalMap: nrm("roof_nor", 3, 2, false), color: 0x5ea88c, roughness: 0.45, side: 2 });
    for (const [z0, z1] of [[-15.5, -150], [15.5, 70]]) {
      const len = Math.abs(z1 - z0), zm = (z0 + z1) / 2, dz = Math.sign(z1 - z0);
      mesh(box(5.2, 0.5, len), deckM, 0, -0.25, zm, bridge);
      mesh(box(6.0, 0.25, len), stone, 0, -0.62, zm, bridge);
      for (const sx of [-1, 1]) mesh(box(0.18, 0.12, len), marble, sx * 2.55, 0.85, zm, bridge, { cast: true }), mesh(box(0.14, 0.1, len), marble, sx * 2.55, 0.35, zm, bridge);
      for (let s = 2; s < len; s += 2.4) for (const sx of [-1, 1]) mesh(box(0.2, 0.9, 0.2), marble, sx * 2.55, 0.45, z0 + dz * s, bridge, { cast: true });
      for (let s = 6; s < len; s += 13)
        for (const sx of [-1, 1]) {
          const x = sx * 3.4, z = z0 + dz * s;
          mesh(box(0.55, 0.3, 0.55), marble, x, 0.15, z, bridge, { cast: true });
          mesh(new T.CylinderGeometry(0.11, 0.14, 1.0, 8), marble, x, 0.8, z, bridge, { cast: true });
          mesh(box(0.5, 0.42, 0.5), lampM, x, 1.5, z, bridge);
          mesh(new T.ConeGeometry(0.52, 0.42, 4), roofM, x, 1.92, z, bridge, { ry: Math.PI / 4, cast: true });
        }
    }
    mergeStatic(bridge);
    // 两岸的白玉宫殿：石基 + 多层殿身 + 起翘绿瓦顶
    const wallW = std({ map: tex("stonewall_diff", 2, 2), normalMap: nrm("stonewall_nor", 2, 2, false), color: 0xf1ebe0, roughness: 0.8 });
    const pillarM = std({ color: 0xa8402c, roughness: 0.5 });
    const winM = std({ map: ctex(128, 128, (c, w) => {
      c.fillStyle = "#3a2618";
      c.fillRect(0, 0, w, w);
      c.strokeStyle = "#c79a56";
      c.lineWidth = 4;
      for (let i = 8; i < w; i += 20) c.beginPath(), c.moveTo(i, 0), c.lineTo(i, w), c.moveTo(0, i), c.lineTo(w, i), c.stroke();
    }), roughness: 0.7, emissive: 0x4a2a0a, emissiveIntensity: 0.5 });
    const rockM = std({ map: tex("cliff_diff", 2, 2), normalMap: nrm("cliff_nor", 2, 2, false), color: 0xfbf8f2, roughness: 0.9, flatShading: true });
    const city = new T.Group();
    g.add(city);
    const hall = (x, y, z, w, d, floors, ry, sc = 1) => {
      const h = new T.Group();
      h.position.set(x, y, z);
      h.rotation.y = ry;
      h.scale.setScalar(sc);
      city.add(h);
      let yy = 0;
      for (let f = 0; f < floors; f++) {
        const fw = w * (1 - f * 0.2), fd = d * (1 - f * 0.2), fh = 3.2;
        mesh(box(fw * 1.08, 0.45, fd * 1.08), wallW, 0, yy + 0.22, 0, h, { cast: true });
        mesh(box(fw * 0.84, fh, fd * 0.84), wallW, 0, yy + 0.45 + fh / 2, 0, h, { cast: true });
        for (let k = 0; k < 5; k++) mesh(box(fw * 0.11, fh * 0.62, 0.06), winM, -fw * 0.32 + (k * fw * 0.64) / 4, yy + 0.45 + fh * 0.48, fd * 0.42 + 0.02, h);
        for (const px of [-0.46, -0.15, 0.15, 0.46]) mesh(new T.CylinderGeometry(0.16, 0.18, fh, 8), pillarM, px * fw, yy + 0.45 + fh / 2, fd * 0.47, h, { cast: true });
        yy += 0.45 + fh;
        mesh(hipRoof(fw * 1.32, fd * 1.32, 1.6 + f * 0.2), roofM, 0, yy, 0, h, { cast: true });
        yy += 0.9;
      }
    };
    world.__bf.hall = hall;
    world.__bf.rockM = rockM;
    world.__bf.roofM = roofM;
    world.__bf.city = city;
    buildButterfly3(world);
  }
  function buildButterfly3(world) {
    const { g, hall, rockM, city, marble } = world.__bf;
    const r = rng(77);
    // 两岸：岩基上叠宫殿，近处大、远处小
    for (const side of [-1, 1])
      for (let i = 0; i < 7; i++) {
        const z = 18 - i * 26, x = side * (30 + i * 4 + r() * 6), base = 4 + r() * 6;
        const rock = new T.Mesh(displace(new T.IcosahedronGeometry(1, 3), 0.35, 1.6, i * 3 + side, false), rockM);
        rock.scale.set(16 + r() * 8, base + 4, 14 + r() * 6);
        rock.position.set(x, -2, z);
        rock.castShadow = rock.receiveShadow = true;
        city.add(rock);
        hall(x - side * 2, base + 1, z, 12 + r() * 6, 9 + r() * 4, 2 + (i % 2), side * -0.25, 1);
        if (i % 2 === 0) hall(x + side * 7, base + 3, z - 8, 6, 6, 3, side * 0.4, 0.8);
      }
    // 中轴尽头的主殿和三座高塔（参考图正中）
    hall(0, 0, -165, 26, 16, 3, 0, 1.2);
    for (const x of [-7, 0, 7]) {
      mesh(new T.CylinderGeometry(1.6, 2.2, 70, 12), marble, x, 35, -190, city, { cast: true });
      mesh(new T.CylinderGeometry(2.4, 2.4, 1.2, 12), marble, x, 70, -190, city);
    }
    mergeStatic(city);
    // 岸边白石、黄山松
    const boulders = [];
    for (let i = 0; i < (LOW ? 40 : 90); i++) {
      const a = r() * Math.PI * 2, rr = 19 + r() * 16;
      const x = Math.sin(a) * rr, z = Math.cos(a) * rr;
      if (Math.abs(x) < 4.5) continue;
      boulders.push([x, -0.6, z, 0.8 + r() * 2.2, r() * 6, 0.6 + r() * 1.4]);
    }
    scatter(displace(new T.IcosahedronGeometry(1, 2), 0.3, 1.8, 5, false), world.__bf.rockM, boulders, g, true);
    const pineGeo = (() => {
      const parts = [new T.CylinderGeometry(0.18, 0.32, 4, 6).translate(0, 2, 0)];
      for (let k = 0; k < 4; k++) parts.push(new T.SphereGeometry(1, 7, 4).scale(2.4 - k * 0.4, 0.42, 2.0 - k * 0.3).translate((k % 2 ? 0.6 : -0.5), 2.6 + k * 0.75, 0));
      return concatGeos(parts.map((p) => p.toNonIndexed()));
    })();
    const pines = [];
    for (let i = 0; i < (LOW ? 30 : 70); i++) {
      const a = r() * Math.PI * 2, rr = 20 + r() * 30;
      const x = Math.sin(a) * rr, z = Math.cos(a) * rr - 10;
      if (Math.abs(x) < 6) continue;
      pines.push([x, -0.4 + r() * 3, z, 0.7 + r() * 0.8, r() * 6]);
    }
    scatter(pineGeo, std({ color: 0x5a8a52, roughness: 0.85, flatShading: true }), pines, g, true);
    // 荷叶和荷花
    const pads = [], flowers = [];
    for (let i = 0; i < (LOW ? 120 : 260); i++) {
      const a = r() * Math.PI * 2, rr = 17.5 + r() * 22, x = Math.sin(a) * rr, z = Math.cos(a) * rr;
      if (Math.abs(x) < 3.4) continue;
      pads.push([x, -0.5, z, 0.4 + r() * 0.7, r() * 6]);
      if (r() < 0.18) flowers.push([x + 0.2, -0.35, z, 0.25 + r() * 0.15, r() * 6]);
    }
    scatter(new T.CircleGeometry(1, 14, 0.4, Math.PI * 2 - 0.4).rotateX(-Math.PI / 2), std({ color: 0x4f8a45, roughness: 0.6, side: 2 }), pads, g);
    scatter(new T.ConeGeometry(0.6, 0.9, 6, 1, true).translate(0, 0.45, 0), std({ color: 0xf2a6c0, emissive: 0x401020, roughness: 0.6, side: 2 }), flowers, g);
    buildButterfly4(world);
  }
  function buildButterfly4(world) {
    const { g, marble, roofM } = world.__bf;
    // 喀斯特石峰：车床体 + 竖向溶沟 + 噪声；朝上的面长绿植
    const peakM = std({ map: tex("cliff_diff", 3, 6), normalMap: nrm("cliff_nor", 3, 6, false), vertexColors: true, roughness: 0.95 });
    for (const [x, z, h, rad, seed] of [[-70, -250, 190, 34, 1], [60, -230, 170, 30, 2], [-150, -330, 230, 42, 3], [150, -350, 210, 40, 4], [-20, -420, 260, 50, 5], [230, -200, 150, 30, 6], [-230, -190, 160, 32, 7]]) {
      const pts = [];
      for (let k = 0; k <= 16; k++) {
        const t = k / 16;
        pts.push(new T.Vector2(rad * (1 - 0.45 * t) * (t > 0.85 ? Math.sqrt(Math.max(0, (1 - t) / 0.15)) : 1) + 0.01, t * h));
      }
      const geo = new T.LatheGeometry(pts, 40);
      const p = geo.attributes.position, col = new Float32Array(p.count * 3);
      for (let i = 0; i < p.count; i++) {
        const px = p.getX(i), py = p.getY(i), pz = p.getZ(i), a = Math.atan2(pz, px);
        const d = fbm(px * 0.03 + seed, py * 0.02, pz * 0.03, 4) * rad * 0.35 + Math.sin(a * 11 + py * 0.05) * rad * 0.05;
        const l = Math.hypot(px, pz) || 1;
        p.setXYZ(i, px + (px / l) * d, py, pz + (pz / l) * d);
      }
      geo.computeVertexNormals();
      const n = geo.attributes.normal;
      for (let i = 0; i < p.count; i++) {
        const up = Math.max(0, n.getY(i)), gr = Math.min(1, up * 2.2 + Math.max(0, fbm(p.getX(i) * 0.08, p.getY(i) * 0.08, seed, 2)) * 0.8);
        col.set([0.78 - gr * 0.5, 0.78 - gr * 0.28, 0.74 - gr * 0.5], i * 3);
      }
      geo.setAttribute("color", new T.BufferAttribute(col, 3));
      mesh(geo, peakM, x, -10, z, g);
    }
    // 山间云雾
    const mistTex = ctex(256, 128, (c, w, h) => {
      const gr = c.createRadialGradient(w / 2, h / 2, 4, w / 2, h / 2, w / 2);
      gr.addColorStop(0, "rgba(255,250,242,.9)");
      gr.addColorStop(1, "rgba(255,250,242,0)");
      c.fillStyle = gr;
      c.fillRect(0, 0, w, h);
    });
    const r = rng(31);
    for (let i = 0; i < 26; i++) addSprite(g, mistTex, (r() - 0.5) * 420, 20 + r() * 70, -150 - r() * 280, 120 + r() * 120, 40 + r() * 30, 0.7);
    for (let i = 0; i < 10; i++) addSprite(g, mistTex, (r() - 0.5) * 120, 1 + r() * 3, -40 - r() * 120, 40 + r() * 30, 8, 0.45);
    // 一对巨大的半透明金色蝶翼（庄周梦蝶）
    const wingM = new T.ShaderMaterial({
      transparent: true, depthWrite: false, blending: 2, side: 2, fog: false,
      uniforms: { time: shared.time },
      vertexShader: "varying vec2 vU;void main(){vU=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      fragmentShader: `uniform float time;varying vec2 vU;void main(){vec2 p=vU;float a=atan(p.y,p.x),r=length(p);
        float edge=0.62+0.38*sin(a*2.)*0.9+0.08*sin(a*9.);float m=smoothstep(edge,edge-0.04,r)*smoothstep(0.,0.06,p.x)*smoothstep(0.,0.06,p.y);
        float vein=smoothstep(0.035,0.,abs(fract(a*7.)-0.5)*r*0.9)+smoothstep(0.02,0.,abs(fract(r*9.)-0.5)*0.06);
        float rim=smoothstep(edge-0.12,edge-0.01,r);vec3 c=mix(vec3(1.,.82,.45),vec3(1.,.95,.8),r);
        float flick=0.85+0.15*sin(time*1.3+r*6.);gl_FragColor=vec4(c*m*(0.1+vein*0.55+rim*0.6)*flick,1.);}`,
    });
    const wings = [];
    for (const side of [-1, 1]) {
      const geo = new T.PlaneGeometry(1, 1).translate(0.5, 0.5, 0);
      const w = new T.Mesh(geo, wingM);
      w.scale.set(side * 190, 150, 1);
      const pivot = new T.Group();
      pivot.position.set(side * 10, 12, -120);
      pivot.add(w);
      g.add(pivot);
      wings.push(pivot);
    }
    const gold = sparkles(LOW ? 500 : 1400, [-60, 0.5, -90, 60, 40, 30], 0xffd27a, 0.22, g);
    for (const t of world.towers || []) t.root.traverse((o) => o.isMesh && (o.castShadow = true));
    updaters.butterfly.push((dt, t) => {
      wings.forEach((w, i) => (w.rotation.y = (i ? -1 : 1) * (0.25 + Math.sin(t * 0.6) * 0.12)));
      gold.position.y = Math.sin(t * 0.25) * 1.5;
      gold.rotation.y = t * 0.01;
    });
  }
  // ---------- 3. 堂吉诃奶蛙·风车路：麦田土路、石墙酒桶、白风车、云海、浮空岛和瀑布 ----------
  function buildRunner(world) {
    const root = world.root;
    world.arch && root.remove(world.arch);
    const g = new T.Group();
    root.add(g);
    const sunDir = v3(-0.72, 0.42, 0.3).normalize();
    world.__sunDir = sunDir;
    g.add(skyDome({ top: 0x2c6cc8, mid: 0x7fb4e8, hor: 0xf7dcb0, sun: 0xffcf8a, sunDir, sunPow: 0.9 }));
    // 云海：不断朝镜头流动（和跑动速度一致）
    const sea = new T.Mesh(new T.PlaneGeometry(2400, 2400, 1, 1), new T.ShaderMaterial({
      fog: false, transparent: false,
      uniforms: { time: shared.time, scroll: { value: 0 }, sunDir: { value: sunDir } },
      vertexShader: "varying vec3 vW;void main(){vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",
      fragmentShader: `uniform float time,scroll;uniform vec3 sunDir;varying vec3 vW;
        float hs(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float n2(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hs(i),hs(i+vec2(1,0)),f.x),mix(hs(i+vec2(0,1)),hs(i+vec2(1,1)),f.x),f.y);}
        float fb(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=a*n2(p);p*=2.03;a*=.5;}return s;}
        void main(){vec2 p=vec2(vW.x,vW.z-scroll)*0.012+vec2(time*0.004,0.);float d=fb(p),d2=fb(p+vec2(0.03,0.02));
        float lit=clamp((d-d2)*6.+0.6,0.,1.);vec3 c=mix(vec3(.72,.76,.86),vec3(1.,.97,.9),smoothstep(.3,.75,d));c=mix(c*0.9,c*1.08+vec3(.08,.05,0.),lit);
        float far=smoothstep(200.,1100.,length(vW.xz-cameraPosition.xz));c=mix(c,vec3(.98,.9,.78),far*0.8);gl_FragColor=vec4(c,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`,
    }));
    sea.rotation.x = -Math.PI / 2;
    sea.position.set(0, -28, -500);
    sea.renderOrder = -6;
    g.add(sea);
    const r = rng(12);
    const ctx = [0, 1, 2, 3].map((i) => cloudTex(40 + i));
    for (let i = 0; i < 18; i++) {
      const s = 160 + r() * 260;
      addSprite(g, ctx[i % 4], (r() - 0.5) * 1400, 20 + r() * 120, -420 - r() * 500, s, s * (0.55 + r() * 0.35), 1);
    }
    addSprite(g, ctx[1], 160, 70, -520, 380, 300, 1);
    // 浮空岛（左前方）：倒锥形岩体 + 梯田 + 瀑布 + 小风车
    const island = new T.Group();
    island.position.set(-170, 0, -330);
    g.add(island);
    const rockM = std({ map: tex("cliff_diff", 3, 3), normalMap: nrm("cliff_nor", 3, 3, false), color: 0xcdb898, roughness: 0.95 });
    const isl = mesh(displace(new T.ConeGeometry(60, 90, 48, 12, false).rotateX(Math.PI).translate(0, -45, 0), 9, 0.03, 3), rockM, 0, 0, 0, island);
    isl.scale.set(1.3, 1, 1);
    const fieldCols = [0xd8a24c, 0x9cae5a, 0xe2b860, 0x88a050];
    for (let k = 0; k < 5; k++) mesh(new T.CylinderGeometry(74 - k * 11, 76 - k * 11, 3, 40), std({ color: fieldCols[k % 4], roughness: 1 }), 0, 1.5 + k * 3, 0, island, { s: [1.3, 1, 1] });
    const fallM = new T.ShaderMaterial({
      transparent: true, depthWrite: false, fog: false, uniforms: { time: shared.time },
      vertexShader: "varying vec2 vU;void main(){vU=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      fragmentShader: "uniform float time;varying vec2 vU;float hs(float x){return fract(sin(x*91.7)*437.5);}void main(){float s=hs(floor(vU.x*40.));float l=fract(vU.y*3.+time*(0.8+s)+s);float a=(0.5+0.5*l)*smoothstep(0.,.2,vU.x)*smoothstep(1.,.8,vU.x)*smoothstep(0.,.3,vU.y);gl_FragColor=vec4(vec3(0.95,0.97,1.)*a,a*0.85);}",
    });
    for (const [x, z] of [[40, 60], [62, 30]]) mesh(new T.PlaneGeometry(8, 110), fallM, x, -52, z, island, { ry: -0.6 });
    world.__run = { g, sea, island, rockM };
    buildRunner2(world);
  }
  function windmill(parent, x, z, s, mats, sails) {
    const w = new T.Group();
    w.position.set(x, 0, z);
    w.scale.setScalar(s);
    parent.add(w);
    const prof = [];
    for (let k = 0; k <= 6; k++) prof.push(new T.Vector2(2.3 - k * 0.09, k * 1.25));
    mesh(new T.LatheGeometry(prof, 20), mats.plaster, 0, 0, 0, w, { cast: true });
    mesh(new T.ConeGeometry(2.25, 2.6, 20), mats.roofR, 0, 8.8, 0, w, { cast: true });
    mesh(box(0.9, 1.6, 0.3), mats.dark, 0, 0.8, 2.25, w);
    mesh(box(0.5, 0.6, 0.2), mats.dark, 0.6, 4.6, 2.05, w);
    const hub = new T.Group();
    hub.position.set(0, 7.6, 2.3);
    hub.userData.keep = true;
    w.add(hub);
    for (let k = 0; k < 4; k++) {
      const arm = new T.Group();
      arm.rotation.z = (k * Math.PI) / 2;
      hub.add(arm);
      mesh(box(0.22, 7.2, 0.18), mats.wood, 0, 3.6, 0, arm, { cast: true });
      mesh(new T.PlaneGeometry(1.6, 6), mats.sail, 0.95, 4, 0.05, arm, { cast: true });
    }
    mergeStatic(hub);
    sails.push(hub);
    return w;
  }
  function chunkTemplate(type, mats, seed) {
    const c = new T.Group(), r = rng(seed), sails = [];
    mesh(new T.PlaneGeometry(12, 40), mats.road, 0, 0.01, -20, c, { rx: -Math.PI / 2 });
    for (const sx of [-1, 1]) {
      mesh(new T.PlaneGeometry(1.8, 40), mats.verge, sx * 6.9, 0.02, -20, c, { rx: -Math.PI / 2 });
      const open = type === 2 && sx < 0;
      if (!open) mesh(new T.PlaneGeometry(60, 40), mats.field, sx * 37.8, 0, -20, c, { rx: -Math.PI / 2 });
      for (let z = -1 - r() * 3; z > -39; z -= 7 + r() * 5) {
        const len = 3 + r() * 4;
        mesh(box(0.7, 0.75 + r() * 0.3, len), mats.wall, sx * 8.2, 0.38, z - len / 2, c, { cast: true });
      }
    }
    if (type === 2) {
      const cliff = mesh(displace(new T.BoxGeometry(14, 60, 40, 4, 12, 8), 2.0, 0.12, seed, false), mats.cliff, -15, -31, -20, c);
      cliff.receiveShadow = true;
    }
    for (let k = 0; k < 3; k++) {
      const sx = r() < 0.5 ? -1 : 1;
      if (type === 2 && sx < 0) continue;
      const bx = sx * (9.2 + r() * 1.5), bz = -4 - r() * 32;
      for (let j = 0; j < 3; j++) mesh(new T.CylinderGeometry(0.42, 0.42, 1, 12), mats.barrel, bx + j * 0.8 * sx, 0.5, bz + (j % 2) * 0.7, c, { cast: true });
    }
    for (let k = 0; k < 2; k++) {
      const sx = (k ? 1 : -1) * (type === 2 ? 1 : 1);
      if (type === 2 && sx < 0) continue;
      const tx = sx * (12 + r() * 10), tz = -8 - r() * 26;
      mesh(new T.CylinderGeometry(0.25, 0.45, 2.6, 7), mats.bark, tx, 1.3, tz, c, { cast: true, rz: (r() - 0.5) * 0.3 });
      mesh(displace(new T.IcosahedronGeometry(2, 2), 0.6, 0.6, seed + k, false), mats.olive, tx, 3.4, tz, c, { cast: true, s: [1.2, 0.75, 1.2] });
    }
    if (type === 1) for (let k = 0; k < 3; k++) {
      const sx = k % 2 ? 1 : -1, hx = sx * (13 + r() * 9), hz = -6 - k * 11 - r() * 4, hw = 4 + r() * 2;
      mesh(box(hw, 3, 4.5), mats.plaster, hx, 1.5, hz, c, { cast: true });
      mesh(hipRoof(hw + 0.8, 5.3, 1.5, 0.08), mats.roofR, hx, 3, hz, c, { cast: true });
      mesh(box(0.8, 1.6, 0.1), mats.dark, hx, 0.8, hz + 2.26 * (sx > 0 ? 1 : 1), c);
    }
    if (type !== 1 || r() < 0.5) {
      const sx = type === 2 ? 1 : seed % 2 ? 1 : -1;
      windmill(c, sx * (17 + r() * 8), -12 - r() * 18, 0.85 + r() * 0.35, mats, sails);
    }
    mergeStatic(c);
    return c;
  }
  function buildRunner2(world) {
    const mats = {
      road: std({ map: tex("trail_diff", 3, 10), normalMap: nrm("trail_nor", 3, 10, false), color: 0xd9a46a, roughness: 0.95 }),
      verge: std({ map: tex("grass_diff", 1, 20), color: 0xb7a35a, roughness: 1 }),
      field: std({ map: tex("grass_diff", 12, 8), color: 0xd8b25a, roughness: 1 }),
      wall: std({ map: tex("stonewall_diff", 2, 0.5), normalMap: nrm("stonewall_nor", 2, 0.5, false), color: 0xd9cdb6, roughness: 0.9 }),
      cliff: std({ map: tex("cliff_diff", 2, 6), normalMap: nrm("cliff_nor", 2, 6, false), color: 0xc9b493, roughness: 0.95 }),
      barrel: std({ map: tex("planks_diff", 1, 1), color: 0x8a5a32, roughness: 0.7 }),
      bark: std({ map: tex("bark_diff", 1, 1), color: 0x6a5a4a, roughness: 0.95 }),
      olive: std({ color: 0x6f8048, roughness: 0.9, flatShading: true }),
      plaster: std({ map: tex("plaster_diff", 2, 2), color: 0xf6f1e8, roughness: 0.9 }),
      roofR: std({ map: tex("roof_diff", 3, 2), color: 0xb8643c, roughness: 0.7, side: 2 }),
      dark: std({ color: 0x3a2a20, roughness: 0.8 }),
      wood: std({ map: tex("planks_diff", 0.3, 2), color: 0x7a5232, roughness: 0.8 }),
      sail: std({ map: ctex(128, 512, (c, w, h) => {
        c.clearRect(0, 0, w, h);
        c.strokeStyle = "#6b4a2c";
        c.lineWidth = 6;
        c.strokeRect(4, 4, w - 8, h - 8);
        c.lineWidth = 3;
        for (let y = 0; y < h; y += 42) c.beginPath(), c.moveTo(0, y), c.lineTo(w, y), c.stroke();
        for (let x = 0; x < w; x += 42) c.beginPath(), c.moveTo(x, 0), c.lineTo(x, h), c.stroke();
        c.fillStyle = "rgba(240,226,196,.55)";
        c.fillRect(8, 8, w - 16, h - 16);
      }), transparent: true, alphaTest: 0.2, side: 2, roughness: 0.8 }),
    };
    // 麦穗：三片交叉的面片，贴图画出麦秆和金色麦穗
    const wheatTex = ctex(128, 128, (c, w, h) => {
      c.clearRect(0, 0, w, h);
      const r = rng(3);
      for (let i = 0; i < 26; i++) {
        const x = 6 + r() * (w - 12), top = 10 + r() * 30, lean = (r() - 0.5) * 14;
        c.strokeStyle = `rgb(${200 + r() * 40},${160 + r() * 30},${70 + r() * 30})`;
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(x, h);
        c.quadraticCurveTo(x + lean * 0.3, h * 0.6, x + lean, top + 14);
        c.stroke();
        c.fillStyle = `rgb(${226 + r() * 29},${180 + r() * 40},${80 + r() * 40})`;
        c.beginPath();
        c.ellipse(x + lean, top + 6, 3.2, 10, lean * 0.02, 0, 7);
        c.fill();
      }
    });
    const wheatGeo = concatGeos([0, 1, 2].map((k) => new T.PlaneGeometry(1.6, 1.25).translate(0, 0.62, 0).rotateY((k * Math.PI) / 3).toNonIndexed()));
    const wheatM = windSway(std({ map: wheatTex, alphaTest: 0.45, side: 2, roughness: 0.85, color: 0xffffff }), 0.16);
    const templates = [0, 1, 2].map((type) => [0, 1].map((v) => {
      const t = chunkTemplate(type, mats, 100 + type * 10 + v);
      const r = rng(500 + type * 10 + v), list = [];
      const n = LOW ? 420 : 900;
      for (let i = 0; i < n; i++) {
        const sx = r() < 0.5 ? -1 : 1;
        if (type === 2 && sx < 0) continue;
        const x = sx * (9.4 + Math.pow(r(), 1.3) * 26), z = -r() * 40;
        if (type === 1 && Math.abs(x) > 11 && Math.abs(x) < 25 && r() < 0.6) continue;
        list.push([x, 0, z, 0.8 + r() * 0.5, r() * 6, 0.85 + r() * 0.45]);
      }
      scatter(wheatGeo, wheatM, list, t);
      return t;
    }));
    // 换掉原来的低模地块
    const allSails = [];
    world.pool.forEach((p, i) => {
      const tpl = templates[p.type][i % 2], c = tpl.clone();
      c.traverse((o) => o.userData.keep && allSails.push(o));
      c.visible = false;
      p.mesh.parent && p.mesh.parent.remove(p.mesh);
      world.chunkRoot.add(c);
      p.mesh = c;
    });
    world.__run.mats = mats;
    world.__run.sails = allSails;
    buildRunner3(world);
  }
  function buildRunner3(world) {
    const { mats, sails, sea } = world.__run;
    // 障碍物：干草卷、酒桶、木栅栏换成真实材质
    const hayM = std({ map: ctex(256, 256, (c, w, h) => {
      c.fillStyle = "#d9b25c";
      c.fillRect(0, 0, w, h);
      const r = rng(8);
      for (let i = 0; i < 900; i++) (c.strokeStyle = `rgba(${150 + r() * 90},${110 + r() * 70},${40 + r() * 40},.8)`), c.beginPath(), c.moveTo(r() * w, r() * h), c.lineTo(r() * w, r() * h), c.stroke();
    }), roughness: 1 });
    void hayM;
    for (const ob of world.obstacles || []) ob.root.traverse((o) => o.isMesh && (o.castShadow = true));
    // 风车巨人的叶片换成带格子的帆布
    if (world.blades) world.blades.traverse((o) => o.isMesh && (o.material = o.geometry.parameters && o.geometry.parameters.width > 0.5 ? mats.sail : mats.wood));
    updaters.runner.push((dt, t) => {
      for (const s of sails) s.rotation.z += dt * 0.9;
      sea.material.uniforms.scroll.value = world.distance || 0;
    });
  }

  // ---------- 灯光：修“奶蛙发白”（原来总亮度约 6 倍，ACES 一压就成白色） ----------
  const LIGHT = {
    school: { hemi: [0xffe0bc, 0x6a4022, 1.1], sun: [0xffb870, 4.6], fill: [0xffc890, 0.7], fog: [0xe9c9a0, 30, 90], exp: 1.0, bg: 0xe9c9a0 },
    butterfly: { hemi: [0xcfe2ff, 0x6b5a40, 0.75], sun: [0xffd6a0, 2.8], fill: [0x9ab8ff, 0.3], fog: [0xf0dcc0, 70, 520], exp: 0.95, bg: 0xf0dcc0 },
    journey: { hemi: [0xfff2e0, 0x55463a, 0.7], sun: [0xffe6c8, 1.9], fill: [0x9ab8ff, 0.35], exp: 1.0 },
    runner: { hemi: [0xbcd6ff, 0x9a7a4a, 0.75], sun: [0xffcf90, 2.9], fill: [0x9ab8ff, 0.25], fog: [0xf2dcb8, 60, 480], exp: 0.95, bg: 0xf2dcb8 },
    tunnel: { hemi: [0xffffff, 0x404060, 0.9], sun: [0xffffff, 1.6], fill: [0x9ab8ff, 0.4], exp: 1.0 },
  };
  let app, hemi, sun, fill, dpr, dprMax, fpsT = 0, fpsN = 0, lastSay = -9;
  function findLights(a) {
    a.scene.children.forEach((o) => {
      if (o.isHemisphereLight) hemi = o;
      else if (o.isDirectionalLight) sun ? (fill = fill || o) : (sun = o);
    });
  }
  // ---------- 双摇杆（触屏）：左摇杆走，右摇杆转视角，推到底就狂笑 ----------
  function sticks(a) {
    const css = document.createElement("style");
    css.textContent = `.rm-stick{position:fixed;bottom:calc(18px + env(safe-area-inset-bottom));width:150px;height:150px;border-radius:50%;
      background:radial-gradient(circle,rgba(255,255,255,.18),rgba(255,255,255,.06));border:2px solid rgba(255,255,255,.45);z-index:30;touch-action:none}
      .rm-stick i{position:absolute;left:50%;top:50%;width:62px;height:62px;margin:-31px;border-radius:50%;background:rgba(255,236,170,.85);box-shadow:0 2px 10px #0006}
      .rm-stick b{position:absolute;left:0;right:0;top:-26px;text-align:center;font:700 13px "Microsoft YaHei",sans-serif;color:#fff;text-shadow:0 1px 3px #000}
      #rm-l{left:calc(18px + env(safe-area-inset-left))}#rm-r{right:calc(18px + env(safe-area-inset-right))}
      body.rm-touch #joy,body.rm-touch .move-pad{display:none!important}
      body.rm-touch .skill-pad{bottom:190px!important;right:12px!important;transform:scale(.86);transform-origin:right bottom}`;
    document.head.appendChild(css);
    document.body.classList.add("rm-touch");
    const ctr = document.getElementById("controls") || document.body;
    const make = (id, label) => {
      const el = document.createElement("div");
      el.id = id;
      el.className = "rm-stick";
      el.dataset.ui = "1";
      el.innerHTML = `<b>${label}</b><i></i>`;
      ctr.appendChild(el);
      return el;
    };
    const L = make("rm-l", "移动"), Rr = make("rm-r", "视角 · 推到底狂笑");
    const st = { l: { x: 0, y: 0, id: null }, r: { x: 0, y: 0, id: null } };
    const bind = (el, k) => {
      const knob = el.querySelector("i");
      const upd = (e) => {
        const b = el.getBoundingClientRect(), rad = b.width / 2;
        let x = (e.clientX - b.left - rad) / (rad * 0.75), y = (e.clientY - b.top - rad) / (rad * 0.75);
        const m = Math.hypot(x, y);
        if (m > 1) (x /= m), (y /= m);
        st[k].x = x;
        st[k].y = y;
        knob.style.transform = `translate(${x * rad * 0.75}px,${y * rad * 0.75}px)`;
      };
      el.addEventListener("pointerdown", (e) => (e.preventDefault(), el.setPointerCapture(e.pointerId), (st[k].id = e.pointerId), upd(e)));
      el.addEventListener("pointermove", (e) => st[k].id === e.pointerId && upd(e));
      const end = () => ((st[k] = { x: 0, y: 0, id: null }), (knob.style.transform = ""));
      el.addEventListener("pointerup", end);
      el.addEventListener("pointercancel", end);
      el.addEventListener("lostpointercapture", end);
    };
    bind(L, "l");
    bind(Rr, "r");
    return st;
  }
  let stickState = null, padLaugh = false, stickLaugh = false;
  function applyInput(a, dt) {
    const inp = a.input;
    let mx = 0, my = 0, ox = 0, oy = 0, laugh = false;
    if (stickState) {
      (mx = stickState.l.x), (my = stickState.l.y), (ox = stickState.r.x), (oy = stickState.r.y);
      laugh = Math.hypot(ox, oy) > 0.8;
    }
    const gp = navigator.getGamepads ? [...navigator.getGamepads()].find((p) => p && p.connected) : null;
    if (gp) {
      const dz = (v) => (Math.abs(v) < 0.18 ? 0 : v);
      if (dz(gp.axes[0]) || dz(gp.axes[1])) (mx = dz(gp.axes[0])), (my = dz(gp.axes[1]));
      if (dz(gp.axes[2]) || dz(gp.axes[3])) (ox = dz(gp.axes[2])), (oy = dz(gp.axes[3]));
      const btn = (i) => gp.buttons[i] && gp.buttons[i].pressed;
      laugh = laugh || btn(7) || btn(2) || btn(5);
      const edge = (i, act) => {
        const k = "__gp" + i;
        if (btn(i) && !applyInput[k]) inp.press(act), setTimeout(() => inp.held.delete(act), 60);
        applyInput[k] = btn(i);
      };
      edge(0, "jump");
      edge(1, "tornado");
      edge(3, "giant");
      edge(4, "awkward");
      edge(9, "pause");
    }
    if (mx || my) {
      inp.joy = inp.joy || { x: 0, y: 0, id: null };
      inp.joy.x = mx;
      inp.joy.y = my;
      inp.joyEdge && inp.joyEdge(mx);
      applyInput.moved = true;
    } else if (applyInput.moved) (applyInput.moved = false), inp.joy && ((inp.joy.x = 0), (inp.joy.y = 0));
    if (ox || oy) (inp.orbit -= ox * dt * 2.6), (inp.pitch = Math.max(-0.2, Math.min(0.55, inp.pitch + oy * dt * 1.2)));
    if (laugh && !stickLaugh) inp.press("laugh");
    if (!laugh && stickLaugh) inp.held.delete("laugh");
    stickLaugh = laugh;
  }
  // ---------- 西游关：换成绑了骨骼的孙悟空（idle / walk / attack 三段动作） ----------
  let wk = null;
  function loadWukong(a) {
    a.assets.loader.loadAsync("./assets/wukong-rig.glb").then((gl) => {
      const model = gl.scene;
      model.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.frustumCulled = false;
          const m = o.material;
          if (m && m.metalness !== undefined) (m.metalness = Math.min(m.metalness, 0.15)), (m.roughness = Math.max(m.roughness, 0.55));
        }
      });
      model.updateMatrixWorld(true);
      const bb = new T.Box3().setFromObject(model), size = bb.getSize(v3()), c = bb.getCenter(v3()), s = 1.85 / size.y;
      model.scale.setScalar(s);
      model.position.set(-c.x * s, -bb.min.y * s, -c.z * s);
      const turn = new T.Group();
      turn.rotation.y = Math.PI;
      turn.add(model);
      const group = new T.Group();
      group.add(turn);
      group.visible = false;
      a.player.root.add(group);
      const mixer = new T.AnimationMixer(model), acts = {};
      for (const clip of gl.animations) acts[clip.name.toLowerCase()] = mixer.clipAction(clip);
      const dummy = { bones: {}, begin() { return this; }, turn() { return this; } };
      a.player.skins.wukong = { group, rig: dummy };
      wk = { mixer, acts, cur: null, last: v3() };
      play("idle");
      console.log("[重制版] 孙悟空已加载", Object.keys(acts));
      if (a.stage === "journey") useWukong(a);
    }).catch((e) => console.warn("[重制版] 孙悟空模型没加载上，西游关继续用奶蛙", e));
  }
  function play(name) {
    if (!wk || wk.cur === name) return;
    const next = wk.acts[name] || wk.acts[Object.keys(wk.acts)[0]];
    if (!next) return;
    next.reset().setEffectiveWeight(1).fadeIn(0.18).play();
    if (wk.cur && wk.acts[wk.cur]) wk.acts[wk.cur].fadeOut(0.18);
    wk.cur = name;
  }
  function useWukong(a) {
    if (!a.player.skins.wukong) return;
    a.player.setSkin("wukong");
    const j = a.worlds.journey;
    if (j && j.kit) j.kit.visible = false;
  }
  function wukongTick(a, dt) {
    if (!wk || a.player.skin !== "wukong") return;
    const p = a.player.root.position, moved = p.distanceTo(wk.last) / Math.max(dt, 1e-4);
    wk.last.copy(p);
    play(a.laughing || (a.worlds.journey && a.worlds.journey.swingT < 0.4) ? "attack" : moved > 0.6 ? "walk" : "idle");
    wk.mixer.update(dt);
  }
  // ---------- 安装：建场景、开阴影、预编译着色器 ----------
  function install(a) {
    app = a;
    findLights(a);
    const r = a.renderer;
    r.shadowMap.enabled = true;
    r.shadowMap.type = 1;
    sun.castShadow = true;
    sun.shadow.mapSize.set(LOW ? 1024 : 2048, LOW ? 1024 : 2048);
    Object.assign(sun.shadow.camera, { left: -24, right: 24, top: 24, bottom: -24, near: 1, far: 120 });
    sun.shadow.camera.updateProjectionMatrix();
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.03;
    a.scene.add(sun.target);
    a.camera.far = 1200;
    a.camera.near = 0.15;
    a.camera.updateProjectionMatrix();
    dprMax = Math.min(devicePixelRatio, LOW ? 1.25 : 1.75);
    dpr = dprMax;
    r.setPixelRatio(dpr);
    const W = a.worlds;
    for (const [name, fn] of [["school", buildSchool], ["butterfly", buildButterfly], ["runner", buildRunner]]) {
      try {
        fn(W[name]);
      } catch (e) {
        console.error("[重制版] 场景重建失败：" + name, e);
      }
    }
    for (const sk of Object.values(a.player.skins || {})) sk.group.traverse((o) => o.isMesh && (o.castShadow = true));
    if (TOUCH || Q.has("sticks")) stickState = sticks(a);
    loadWukong(a);
    // 预编译：把所有场景临时设为可见，编译一遍着色器，进关时不再卡一下
    try {
      const hidden = [];
      a.scene.traverse((o) => !o.visible && (hidden.push(o), (o.visible = true)));
      r.compile(a.scene, a.camera);
      hidden.forEach((o) => (o.visible = false));
    } catch (e) {
      console.warn("[重制版] 预编译跳过", e);
    }
    window.__remake = { LOW, TOUCH, get dpr() { return dpr; } };
  }
  function onEnter(a, stage) {
    const L = LIGHT[stage] || LIGHT.tunnel;
    hemi.color.setHex(L.hemi[0]);
    hemi.groundColor.setHex(L.hemi[1]);
    hemi.intensity = L.hemi[2];
    sun.color.setHex(L.sun[0]);
    sun.intensity = L.sun[1];
    if (fill) fill.color.setHex(L.fill[0]), (fill.intensity = L.fill[1]);
    a.renderer.toneMappingExposure = L.exp;
    if (L.fog) a.scene.fog.color.setHex(L.fog[0]), (a.scene.fog.near = L.fog[1]), (a.scene.fog.far = L.fog[2]);
    if (L.bg && a.scene.background && a.scene.background.isColor) a.scene.background.setHex(L.bg);
    const w = a.worlds[stage];
    a.__sunDir = (w && w.__sunDir) || v3(0.5, 0.9, 0.4).normalize();
    // 进关时把发光清零（修：西游大招没放完就换梦，奶蛙一直发白光）
    for (const sk of Object.values(a.player.skins || {}))
      sk.group.traverse((o) => o.isMesh && o.material && o.material.emissive && (o.material.emissive.setRGB(0, 0, 0), (o.material.emissiveIntensity = 0)));
    if (stage === "journey") useWukong(a);
  }
  function update(a, dt) {
    shared.time.value += dt;
    const t = shared.time.value;
    applyInput(a, dt);
    // 阴影相机跟着玩家走
    const p = a.player.root.position, d = a.__sunDir || v3(0.5, 0.9, 0.4);
    sun.target.position.set(p.x, 0, p.z - (a.stage === "runner" ? 8 : 0));
    sun.position.copy(sun.target.position).addScaledVector(d, 50);
    // 被动回一点笑点能量，大招不会因为没按住 J 就一直放不出来
    if (a.running && !a.laughing) a.energy = Math.min(100, a.energy + dt * 3);
    for (const fn of updaters[a.stage] || []) fn(dt, t);
    if (a.stage === "journey") wukongTick(a, dt);
  }
  // 自适应分辨率：连续 2 秒低于 45 帧就降，高于 58 帧就慢慢升回去
  // 进关后前 4 秒不计（着色器、贴图上传会卡一下），连续两次低于 45 帧才降
  let lowRuns = 0;
  function frame(a, ms) {
    if (a.time < 4) return void (fpsN = fpsT = 0);
    fpsN++;
    fpsT += ms;
    if (fpsT < 2000) return;
    const fps = (fpsN * 1000) / fpsT;
    fpsN = fpsT = 0;
    const old = dpr;
    lowRuns = fps < 45 ? lowRuns + 1 : 0;
    if (lowRuns >= 2) (dpr = Math.max(LOW ? 0.6 : 0.8, dpr - 0.15)), (lowRuns = 0);
    else if (fps > 57) dpr = Math.min(dprMax, dpr + 0.1);
    if (Math.abs(old - dpr) > 0.01) a.renderer.setPixelRatio(dpr);
  }
  function skillHint(a) {
    if (a.totalTime - lastSay < 3) return;
    lastSay = a.totalTime;
    a.say(a.skillCooldown > 0 ? "大招冷却中：" + a.skillCooldown.toFixed(1) + " 秒" : "笑点能量不够（要 25）", "按住 J / 右摇杆推到底狂笑，能量涨得快");
  }
  return { install, onEnter, update, frame, skillHint };
})();

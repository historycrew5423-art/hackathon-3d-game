// 合成的背景音乐（WebAudio 现场合成，不用任何录音）。每个梦境一首循环的小曲：
//   庄周梦蝶：五声音阶的古筝式拨弦 + 长音铺底（自己编的）
//   赛博西游：四四拍底鼓、反拍镲、锯齿波贝斯，加五声音阶的方波旋律和锣（自己编的）
//   堂吉诃奶蛙：弗拉门戈常用的安达卢西亚终止（Am–G–F–E）扫弦 + 响板（和弦进行本身没有版权，旋律自己编的）
//   高雅企鹅跳舞：施特劳斯《蓝色多瑙河》开头的主题（1866 年，公有领域）
//   高雅塔开火：贝多芬《致爱丽丝》开头一句，八音盒音色（公有领域）
// 用法：initMusic(actx, 输出节点) → playMusic('butterfly') / playMusic(null) 停；motif('elise') 放一小句；duckMusic(深度, 秒)
let actx = null, bus = null, duckG = null, noise = null, timer = 0;
let cur = null, nextT = 0, stepN = 0, wantName = null, vol = 0.2;
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);
const N = { C: 0, 'C#': 1, D: 2, 'D#': 3, E: 4, F: 5, 'F#': 6, G: 7, 'G#': 8, A: 9, 'A#': 10, B: 11 };
// 'A4' → MIDI 编号
const nm = (s) => { const m = s.match(/^([A-G]#?)(-?\d)$/); return m ? N[m[1]] + (+m[2] + 1) * 12 : 0; };

export function initMusic(ctx, dest) {
  if (!ctx || bus) return;
  actx = ctx;
  duckG = actx.createGain(); duckG.gain.value = 1; duckG.connect(dest || actx.destination);
  bus = actx.createGain(); bus.gain.value = 0; bus.connect(duckG);
  noise = actx.createBuffer(1, actx.sampleRate, actx.sampleRate);
  const d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  timer = setInterval(tick, 40);
}
export function setMusicVolume(v) { vol = v; if (bus && cur) bus.gain.setTargetAtTime(v, actx.currentTime, 0.2); }
// 主角说长句、捧腹大笑时把音乐压低一点
export function duckMusic(depth = 0.45, sec = 1) {
  if (!duckG) return;
  const g = duckG.gain, t = actx.currentTime;
  g.cancelScheduledValues(t); g.setValueAtTime(g.value, t);
  g.linearRampToValueAtTime(depth, t + 0.08); g.setValueAtTime(depth, t + sec); g.linearRampToValueAtTime(1, t + sec + 0.6);
}
// 换曲：先淡出 0.35 秒再换，免得两首叠在一起
export function playMusic(name) {
  if (!actx) return;
  wantName = name;
  if (cur && cur.name === name) return;
  const t = actx.currentTime;
  bus.gain.cancelScheduledValues(t); bus.gain.setValueAtTime(bus.gain.value, t); bus.gain.linearRampToValueAtTime(0, t + 0.35);
  setTimeout(() => {
    if (wantName !== name) return;
    cur = name ? { name, ...TRACKS[name] } : null; stepN = 0; nextT = actx.currentTime + 0.05;
    if (cur) { bus.gain.cancelScheduledValues(actx.currentTime); bus.gain.setValueAtTime(0, actx.currentTime); bus.gain.linearRampToValueAtTime(vol * (cur.gain || 1), actx.currentTime + 0.6); }
  }, 380);
}
export const musicName = () => (cur ? cur.name : null);
function tick() {
  if (!cur || !actx) return;
  const sp = 60 / cur.bpm / cur.sub;
  if (nextT < actx.currentTime - 0.5) nextT = actx.currentTime + 0.05;   // 标签页切到后台回来：别一下补放一大堆
  while (nextT < actx.currentTime + 0.22) { cur.play(stepN % cur.len, nextT, sp, stepN); nextT += sp; stepN++; }
}

// ---------- 乐器 ----------
function env(g, t, a, peak, d) { g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); }
function pluck(t, midi, dur, v, type = 'triangle', cut = 3200, bend = 0) {
  const o = actx.createOscillator(), g = actx.createGain(), f = actx.createBiquadFilter();
  o.type = type; o.frequency.setValueAtTime(mtof(midi + bend), t); if (bend) o.frequency.exponentialRampToValueAtTime(mtof(midi), t + 0.06);
  f.type = 'lowpass'; f.frequency.setValueAtTime(cut, t); f.frequency.exponentialRampToValueAtTime(Math.max(200, cut * 0.25), t + dur);
  env(g, t, 0.005, v, dur);
  o.connect(f).connect(g).connect(bus); o.start(t); o.stop(t + dur + 0.05);
}
function pad(t, midi, dur, v) {
  const o = actx.createOscillator(), g = actx.createGain();
  o.type = 'sine'; o.frequency.value = mtof(midi);
  g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v, t + dur * 0.3); g.gain.linearRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(bus); o.start(t); o.stop(t + dur + 0.05);
}
function kick(t, v = 0.5) {
  const o = actx.createOscillator(), g = actx.createGain();
  o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.16);
  env(g, t, 0.003, v, 0.22); o.connect(g).connect(bus); o.start(t); o.stop(t + 0.3);
}
function hiss(t, v, dur, type, freq, q = 1) {
  const s = actx.createBufferSource(), f = actx.createBiquadFilter(), g = actx.createGain();
  s.buffer = noise; f.type = type; f.frequency.value = freq; f.Q.value = q;
  env(g, t, 0.002, v, dur); s.connect(f).connect(g).connect(bus); s.start(t, Math.random() * 0.5, dur + 0.05);
}
function gong(t, v = 0.12) {
  for (const [fr, k] of [[98, 1], [147.5, 0.6], [233, 0.35]]) {
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = 'sine'; o.frequency.value = fr; env(g, t, 0.01, v * k, 1.8); o.connect(g).connect(bus); o.start(t); o.stop(t + 2);
  }
  hiss(t, v * 0.5, 0.4, 'bandpass', 900, 0.8);
}
function musicBox(t, midi, v = 0.09) {
  for (const [mul, k] of [[1, 1], [2.01, 0.35], [4.2, 0.12]]) {
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = 'sine'; o.frequency.value = mtof(midi) * mul; env(g, t, 0.003, v * k, 0.55 / mul + 0.15); o.connect(g).connect(bus); o.start(t); o.stop(t + 0.9);
  }
}

// ---------- 曲子 ----------
// 庄周梦蝶：D 宫五声音阶，16 分音符一格，4 小节一循环。'.' 是空拍
const BF_MEL = ('A4 . B4 . D5 . . . B4 A4 . F#4 . E4 . . ' + 'D4 . E4 . F#4 . A4 . B4 . A4 . F#4 . . . ' +
  'A4 . D5 . E5 . D5 B4 . A4 . B4 . . . . ' + 'A4 . F#4 . E4 . D4 . . . E4 . D4 . . .').trim().split(/\s+/);
const BF_PAD = [['D3', 'A3'], ['D3', 'A3'], ['B2', 'F#3'], ['G2', 'D3']];
// 赛博西游：A 小调五声音阶
const CY_BASS = ['A1', 'A2', 'E2', 'A2', 'G1', 'G2', 'D2', 'G2', 'F1', 'F2', 'C2', 'F2', 'G1', 'G2', 'D2', 'G2'];
const CY_LEAD = ('A4 . C5 D5 . E5 . G5 . E5 D5 . C5 . A4 . ' + 'G4 . A4 . C5 . D5 . E5 . . D5 C5 . . . ').trim().split(/\s+/);
// 堂吉诃奶蛙：3/4 拍，一拍两格；Am G F E 各一小节
const QX_CH = [['A2', 'E3', 'A3', 'C4'], ['G2', 'D3', 'G3', 'B3'], ['F2', 'C3', 'F3', 'A3'], ['E2', 'B2', 'E3', 'G#3']];
const QX_MEL = ('E5 . F5 E5 D5 C5 ' + 'D5 . C5 B4 A4 . ' + 'C5 B4 A4 G4 F4 . ' + 'G#4 . F4 . E4 . ').trim().split(/\s+/);
// 蓝色多瑙河（D 大调，3/4，一拍一格）：每小节 3 格。(x y) 是第 2、3 拍上的两个跳音
const BD_MEL = ('D4 D4 F#4 A4 A4 . . A5 A5 . F#5 F#5 ' + 'D4 D4 F#4 A4 A4 . . A5 A5 . G5 G5 ' +
  'C#4 C#4 E4 B4 B4 . . B5 B5 . G5 G5 ' + 'C#4 C#4 E4 B4 B4 . . B5 B5 . F#5 F#5 ' +
  'D4 D4 F#4 A4 D5 . . D6 D6 . A5 A5 ' + 'D4 D4 F#4 A4 D5 . . D6 D6 . B5 B5 ').trim().split(/\s+/);
// 和声：前 8 小节 D、中间 8 小节 A7（旋律里的 C# E B）、最后 8 小节回到 D
const BD_BASS = [...Array(8).fill('D3'), ...Array(8).fill('A2'), ...Array(8).fill('D3')];
const BD_CHORD = { D3: ['F#3', 'A3'], A2: ['E3', 'G3'] };

const TRACKS = {
  butterfly: { bpm: 84, sub: 4, len: 64, gain: 1, play(s, t, sp) {
    const n = BF_MEL[s]; if (n && n !== '.') pluck(t, nm(n), 0.9, 0.11, 'triangle', 2600, 0.6);
    if (s % 16 === 0) for (const p of BF_PAD[s / 16 | 0]) pad(t, nm(p), sp * 16, 0.028);
    if (s % 8 === 4) hiss(t, 0.02, 0.05, 'bandpass', 1800, 4);   // 木鱼一样的“嗒”
  } },
  // 贝斯：四个和弦（A G F G），每个和弦占 16 格，一格一个音，按 CY_BASS 里这个和弦的 4 个音轮流弹
  cyber: { bpm: 128, sub: 4, len: 64, gain: 0.9, play(s, t) {
    if (s % 4 === 0) kick(t, 0.42);
    if (s % 4 === 2) hiss(t, 0.05, 0.04, 'highpass', 7000);
    if (s % 8 === 4) hiss(t, 0.08, 0.1, 'bandpass', 1900, 0.7);
    pluck(t, nm(CY_BASS[(s / 16 | 0) * 4 + (s % 4)]), 0.18, 0.09, 'sawtooth', 900);
    const l = CY_LEAD[s % 32]; if (l && l !== '.' && s >= 32) pluck(t, nm(l), 0.22, 0.05, 'square', 2400);
    if (s % 64 === 0) gong(t, 0.1);
  } },
  quixote: { bpm: 112, sub: 2, len: 24, gain: 1, play(s, t) {
    const bar = s / 6 | 0, b = s % 6;
    if (b === 0 || b === 3 || b === 4) QX_CH[bar].forEach((n, k) => pluck(t + k * 0.012, nm(n), 0.5, 0.05, 'sawtooth', 2200));   // 扫弦
    if (b === 0 || b === 2 || b === 3 || b === 5) hiss(t, b === 0 ? 0.09 : 0.05, 0.025, 'highpass', 3500, 2);   // 响板
    const m = QX_MEL[s]; if (m && m !== '.') pluck(t, nm(m), 0.35, 0.08, 'triangle', 3000);
  } },
  waltz: { bpm: 168, sub: 1, len: 72, gain: 1.15, play(s, t) {
    const bar = s / 3 | 0, b = s % 3, root = BD_BASS[bar % 24];
    if (b === 0) pluck(t, nm(root), 0.5, 0.09, 'triangle', 1400);
    else for (const c of BD_CHORD[root]) pluck(t, nm(c), 0.22, 0.04, 'triangle', 2200);
    const m = BD_MEL[s]; if (m && m !== '.') pluck(t, nm(m), b === 0 ? 0.6 : 0.3, 0.1, 'sine', 4000);
  } },
};
// 一小句（不循环）：高雅塔开火时的《致爱丽丝》、下课铃（录音没加载上时用）
const ELISE = ['E5', 'D#5', 'E5', 'D#5', 'E5', 'B4', 'D5', 'C5', 'A4'];
let motifAt = -9;
export function motif(name, v = 1) {
  if (!actx || !bus) return;
  const t = actx.currentTime + 0.02;
  if (name === 'elise') {
    if (t - motifAt < 2.4) return; motifAt = t;
    ELISE.forEach((n, k) => musicBoxOut(t + k * 0.16, nm(n), 0.08 * v));
  } else if (name === 'bell') {
    for (let k = 0; k < 14; k++) for (const f of [1320, 1980]) { const o = actx.createOscillator(), g = actx.createGain(); o.type = 'square'; o.frequency.value = f; env(g, t + k * 0.09, 0.002, 0.03 * v, 0.08); o.connect(g).connect(duckG); o.start(t + k * 0.09); o.stop(t + k * 0.09 + 0.12); }
  } else if (name === 'crickets') {
    for (let k = 0; k < 6; k++) { const o = actx.createOscillator(), g = actx.createGain(); o.type = 'sine'; o.frequency.value = 4200 + Math.random() * 300; const tt = t + k * 0.07 + (k > 2 ? 0.35 : 0); env(g, tt, 0.003, 0.025 * v, 0.05); o.connect(g).connect(duckG); o.start(tt); o.stop(tt + 0.08); }
  } else if (name === 'stinger') {   // 换梦境时“噔噔”一下
    for (const [k, m] of [[0, 'D5'], [1, 'A5']]) pluckOut(t + k * 0.11, nm(m), 0.5, 0.09);
  }
}
// 一小句不受背景音乐音量影响（背景音乐淡出时也听得见），所以直接接到压低节点上
function musicBoxOut(t, midi, v) {
  for (const [mul, k] of [[1, 1], [2.01, 0.35], [4.2, 0.12]]) {
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = 'sine'; o.frequency.value = mtof(midi) * mul; env(g, t, 0.003, v * k, 0.55 / mul + 0.15); o.connect(g).connect(duckG); o.start(t); o.stop(t + 0.9);
  }
}
function pluckOut(t, midi, dur, v) {
  const o = actx.createOscillator(), g = actx.createGain();
  o.type = 'triangle'; o.frequency.value = mtof(midi); env(g, t, 0.004, v, dur); o.connect(g).connect(duckG); o.start(t); o.stop(t + dur + 0.05);
}
export { musicBox };

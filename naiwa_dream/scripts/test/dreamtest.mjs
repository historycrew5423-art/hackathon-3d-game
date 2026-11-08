// 自动试玩《奶蛙梦游记》：无头 Edge 打开游戏（?auto=1 自动开始、自动选卡、自动笑），记录每个梦的状态、报错，按时间截图。
// 用法：node dreamtest.mjs [额外网址参数] [截图前缀]   例：node dreamtest.mjs "len=14&layers=4" run1
// 环境变量：W、H 窗口大小（默认 1280×720），MAXT 最多跑几秒（默认 900）
import puppeteer from 'puppeteer-core';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, '..', '..');
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.glb': 'model/gltf-binary', '.png': 'image/png', '.jpg': 'image/jpeg', '.gif': 'image/gif', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.webp': 'image/webp', '.ico': 'image/x-icon' };
const server = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]), file = path.resolve(path.join(ROOT, p));
  if (p === '/favicon.ico') { res.writeHead(204); res.end(); return; }
  if (!file.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (err, data) => { if (err) { res.writeHead(404); res.end(); return; } res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' }); res.end(data); });
});
const PORT = 8799 + Math.floor(Math.random() * 100);
await new Promise((r) => server.listen(PORT, '127.0.0.1', r));
const extra = process.argv[2] || 'len=14&layers=4', tag = process.argv[3] || 'run';
const W = +(process.env.W || 1280), H = +(process.env.H || 720);
fs.mkdirSync(path.join(here, 'shots'), { recursive: true });
const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: 'new',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox', '--autoplay-policy=no-user-gesture-required'], defaultViewport: { width: W, height: H },
});
const log = [], t0 = Date.now();
const page = await browser.newPage();
page.on('pageerror', (e) => log.push(`[${((Date.now() - t0) / 1000).toFixed(1)}s] PAGEERROR ${e.message}\n${(e.stack || '').split('\n').slice(0, 4).join('\n')}`));
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warn') log.push(`[${((Date.now() - t0) / 1000).toFixed(1)}s] ${m.type()} ${m.text()}`); });
page.on('requestfailed', (r) => log.push(`REQFAIL ${r.url()}`));
page.on('response', (r) => { if (r.status() >= 400) log.push(`HTTP ${r.status()} ${r.url()}`); });
await page.goto(`http://127.0.0.1:${PORT}/index.html?auto=1&god=1&${extra}`, { waitUntil: 'domcontentloaded' });
const flush = () => fs.writeFileSync(path.join(here, `dreamtest-${tag}.log`), log.join('\n') + '\n');
try { await page.waitForFunction(() => window.__game && window.__game.phase === 'fight', { timeout: 180000 }); } catch { log.push('等不到开始'); }
log.push(`开始 ${((Date.now() - t0) / 1000).toFixed(1)}s`); flush();
const shotAt = new Set(), shotTimes = (process.env.SHOTS || '3,8,14,22').split(',').map(Number);
const maxReal = +(process.env.MAXT || 900) * 1000;
let lastKey = '';
while (Date.now() - t0 < maxReal) {
  const s = await page.evaluate(() => { const g = window.__game; return g && { phase: g.phase, dream: g.dream, layer: g.layer, dt: +g.dreamTime.toFixed(1), n: g.E.n, kills: g.kills, score: g.score, fps: +(window.__fps || 0).toFixed(0), lv: g.level, woke: !!window.__woke, towers: window.__towersDown || 0, mamas: window.__mamas || 0, wrong: window.__wrong || 0, mill: window.__millDown || 0, catch: window.__millCatch || 0, laughs: window.__laughs || 0, kid: window.__kidnaps || 0, kun: window.__kun || 0, fat: window.__fat || 0, awk: +g.awk.toFixed(2), obj: document.querySelector('#actinfo .goal')?.textContent }; }).catch(() => null);
  if (!s) break;
  const key = `${s.layer}-${s.dream}`;
  if (key !== lastKey) { lastKey = key; log.push(`--- 进入第 ${s.layer} 层 梦 ${s.dream}`); }
  log.push(JSON.stringify(s)); flush();
  for (const at of shotTimes) {
    const k = `${s.layer}-${s.dream}-${at}`;
    if (s.phase === 'fight' && s.dt >= at && !shotAt.has(k) && s.layer <= 3) { shotAt.add(k); await page.screenshot({ path: path.join(here, 'shots', `${tag}-L${s.layer}-d${s.dream}-t${at}.png`) }); }
  }
  if (s.phase === 'shift' && !shotAt.has('shift' + key)) { shotAt.add('shift' + key); await new Promise((r) => setTimeout(r, 500)); await page.screenshot({ path: path.join(here, 'shots', `${tag}-shift-L${s.layer}-d${s.dream}.png`) }); }
  if (s.woke || s.phase === 'over') { await new Promise((r) => setTimeout(r, 1500)); await page.screenshot({ path: path.join(here, 'shots', `${tag}-wake.png`) }); log.push('醒来了'); break; }
  await new Promise((r) => setTimeout(r, 1200));
}
flush();
await browser.close(); server.close();
log.push('DONE'); flush();

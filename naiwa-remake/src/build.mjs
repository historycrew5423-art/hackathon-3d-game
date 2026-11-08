// 重制版打包：three 部分（原样）+ 类名对照 + 重制代码 + 游戏代码 → assets/naiwa-remake.js
// 用法：node src/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(dir, '..');
const read = (f) => fs.readFileSync(path.join(dir, f), 'utf8');
const ren = (s) => s.replace(/\bconst T = \{/, 'const __T3 = {').replace(/\bT\./g, '__T3.').replace(/\bconst RM =/, 'const __RM =');
const out = [read('three_part.js'), ren(read('remake_alias.js')), ren(read('remake.js')), read('app.js')].join('\n;\n');
fs.writeFileSync(path.join(root, 'assets', 'naiwa-remake.js'), out, 'utf8');
fs.writeFileSync(path.join(process.env.TEMP || dir, 'naiwa_check.mjs'), out, 'utf8');
const v = Date.now().toString(36);
for (const page of ['hi3d-index.html']) {
  let html = fs.readFileSync(path.join(root, page), 'utf8');
  html = html.replace(/src="\.\/assets\/[^"]+\.js(\?v=[^"]*)?"/, `src="./assets/naiwa-remake.js?v=${v}"`);
  html = html.replace('<title>奶蛙 · 课间梦游指南</title>', '<title>奶蛙 · 课间梦游指南（重制版）</title>');
  fs.writeFileSync(path.join(root, page), html, 'utf8');
  fs.writeFileSync(path.join(root, 'index.html'), html, 'utf8');
}
console.log('built', (out.length / 1024).toFixed(0) + ' KB', 'v=' + v);

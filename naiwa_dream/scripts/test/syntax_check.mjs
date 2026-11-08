// 语法检查：把游戏的每个模块复制成 .mjs，用 node --check 解析一遍（只查语法，不运行）
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, '..', '..', 'src');
const tmp = path.join(here, 'syntax_tmp'); fs.mkdirSync(tmp, { recursive: true });
const out = [];
for (const f of fs.readdirSync(src).filter((f) => f.endsWith('.js'))) {
  const t = path.join(tmp, f.replace(/\.js$/, '.mjs'));
  fs.copyFileSync(path.join(src, f), t);
  try { execFileSync(process.execPath, ['--check', t], { stdio: 'pipe' }); out.push(`ok   ${f}`); }
  catch (e) { out.push(`FAIL ${f}\n${(e.stderr || '').toString().split('\n').slice(0, 8).join('\n')}`); }
}
fs.writeFileSync(path.join(here, 'syntax.log'), out.join('\n') + '\nDONE\n');

// 抓 myinstants 的梗音效：给 instant 页面或搜索页的网址，从网页里找 /media/sounds/*.mp3，下载到 dl/dream/
// 用法：node grab_instants.mjs 网址1 网址2 ...   结果写进 grab_instants.log（页面标题、mp3 地址、文件大小）
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(here, 'dl', 'dream');
fs.mkdirSync(outDir, { recursive: true });
const UA = { 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36', 'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8' };
const log = [];
for (const url of process.argv.slice(2)) {
  try {
    const res = await fetch(url, { headers: UA });
    const html = await res.text();
    const title = (html.match(/<title>([^<]*)<\/title>/i) || [])[1] || '';
    log.push(`== ${url} -> ${res.status} ${title.trim()}`);
    const found = [...new Set([...html.matchAll(/\/media\/sounds\/[^'"\s)]+?\.mp3/g)].map((m) => m[0]))];
    // 搜索页：同时列出结果里的 instant 页面
    const pages = [...new Set([...html.matchAll(/href="(\/[a-z]{2}\/instant\/[^"]+)"/g)].map((m) => m[1]))].slice(0, 25);
    if (pages.length) log.push('  pages: ' + pages.join(' '));
    for (const f of found.slice(0, url.includes('/search') ? 12 : 3)) {
      const name = decodeURIComponent(path.basename(f));
      const dest = path.join(outDir, name);
      if (!fs.existsSync(dest)) {
        const r = await fetch('https://www.myinstants.com' + f, { headers: UA });
        if (!r.ok) { log.push(`  ${f} -> ${r.status}`); continue; }
        fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
      }
      log.push(`  ${f}  ${(fs.statSync(dest).size / 1024).toFixed(0)} KB -> dl/dream/${name}`);
    }
  } catch (e) { log.push(`!! ${url} ${e.message}`); }
}
fs.writeFileSync(path.join(here, 'grab_instants.log'), log.join('\n') + '\nDONE\n');

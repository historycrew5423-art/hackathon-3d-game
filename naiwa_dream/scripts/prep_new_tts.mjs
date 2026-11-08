// 把新合成的配音转成单声道 mp3、裁掉开头静音，放进 assets/audio（tts-*.mp3）。用法：node prep_new_tts.mjs 名字1 名字2 ...
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(here, '..', 'naiwa_dream', 'naiwa', 'assets', 'audio');
const log = [];
for (const name of process.argv.slice(2)) {
  const src = path.join(here, 'dl', 'dream', 'tts', name + '.mp3'), out = path.join(OUT, 'tts-' + name + '.mp3');
  if (!fs.existsSync(src)) { log.push('缺 ' + src); continue; }
  execFileSync('ffmpeg', ['-y', '-hide_banner', '-loglevel', 'error', '-i', src, '-af', 'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.02', '-ac', '1', '-ar', '44100', '-b:a', '96k', out]);
  const d = +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', out]).toString().trim();
  log.push(`${name}\t${d.toFixed(2)}s\t${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
}
fs.writeFileSync(path.join(here, 'prep_new_tts.log'), log.join('\n') + '\nDONE\n');

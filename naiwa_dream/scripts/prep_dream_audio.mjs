// 把梦境版要用的声音整理进 assets/audio：转成单声道 mp3、裁掉开头结尾的静音、限制长度，再量一下时长
// 用法：node prep_dream_audio.mjs   日志 prep_dream_audio.log
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(here, '..');
const OUT = path.join(ROOT, 'naiwa_dream', 'naiwa', 'assets', 'audio');
const DL = path.join(here, 'dl', 'dream');
// [来源, 输出文件名, 最长几秒, 是否裁掉开头静音]
const JOBS = [
  [path.join(ROOT, '勇者奶蛙_threejs版', 'audio', 'cow-mama.wav'), 'tang-mama.mp3', 7, false],
  [path.join(DL, 'monkeys-sound-no-copyright.mp3'), 'wukong-monkey.mp3', 4, true],
  [path.join(DL, 'baba-boy-meme.mp3'), 'bababoyi.mp3', 3, true],
  [path.join(DL, 'meme-sneeze.mp3'), 'sneeze.mp3', 3, true],
  [path.join(DL, 'long-build-up-and-sneeze-1.mp3'), 'sneeze-long.mp3', 6, true],
  [path.join(DL, 'vine-boom.mp3'), 'vine-boom.mp3', 2.5, true],
  [path.join(DL, 'aplausos_3.mp3'), 'applause.mp3', 4, true],
  [path.join(DL, 'awkward-silence-crickets-chirping-meme.mp3'), 'crickets.mp3', 4, true],
  [path.join(DL, 'school-bell-ringing-sound-effect.mp3'), 'bell.mp3', 5, true],
  [path.join(DL, 'short-alarm-clock.mp3'), 'alarm.mp3', 4, true],
  [path.join(DL, 'ole.mp3'), 'ole.mp3', 3, true],
  [path.join(DL, 'bruh-sound-effect_WstdzdM.mp3'), 'bruh.mp3', 2, true],
];
for (const f of fs.readdirSync(path.join(DL, 'tts'))) JOBS.push([path.join(DL, 'tts', f), 'tts-' + f, 8, true]);
const log = [];
const dur = (file) => { try { return +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file]).toString().trim(); } catch { return -1; } };
for (const [src, name, maxLen, trim] of JOBS) {
  const out = path.join(OUT, name);
  try {
    if (!fs.existsSync(src)) { log.push(`缺 ${src}`); continue; }
    const af = [trim ? 'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.02' : null, `atrim=0:${maxLen}`, 'afade=t=out:st=' + Math.max(0, maxLen - 0.08) + ':d=0.08'].filter(Boolean).join(',');
    execFileSync('ffmpeg', ['-y', '-hide_banner', '-loglevel', 'error', '-i', src, '-af', af, '-ac', '1', '-ar', '44100', '-b:a', '96k', out]);
    log.push(`${name}\t${dur(src).toFixed(2)}s -> ${dur(out).toFixed(2)}s\t${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
  } catch (e) { log.push(`fail ${name} ${e.message}`); }
}
fs.writeFileSync(path.join(here, 'prep_dream_audio.log'), log.join('\n') + '\nDONE\n');

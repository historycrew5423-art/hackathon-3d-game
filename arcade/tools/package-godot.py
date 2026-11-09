"""Package a single-thread Godot Web export for ordinary static hosting."""
import argparse
import gzip
import hashlib
import html
import json
import re
import shutil
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('source', type=Path)
parser.add_argument('destination', type=Path)
parser.add_argument('--title', required=True)
parser.add_argument('--description', required=True)
args = parser.parse_args()
source, dest = args.source.resolve(), args.destination.resolve()
dest.mkdir(parents=True, exist_ok=True)
original = (source / 'index.html').read_text()
match = re.search(r'const GODOT_CONFIG\s*=\s*(.*);', original)
if not match:
    raise SystemExit('Missing Godot Web configuration')
config = json.loads(match[1])
payload = {}
for name in ('index.pck', 'index.wasm'):
    path = source / name
    data = gzip.compress(path.read_bytes(), compresslevel=6, mtime=0)
    digest = hashlib.sha256(data).hexdigest()[:12]
    parts = []
    for i, offset in enumerate(range(0, len(data), 20 * 1024 * 1024)):
        filename = f'{name}.{digest}.{i:03d}.bin'
        (dest / filename).write_bytes(data[offset:offset + 20 * 1024 * 1024])
        parts.append(filename)
    payload[name] = dict(parts=parts, compressedBytes=len(data), rawBytes=path.stat().st_size)
    print(name, path.stat().st_size, '->', len(data), flush=True)
keep = {name for spec in payload.values() for name in spec['parts']}
for stale in list(dest.glob('index.pck.*.bin')) + list(dest.glob('index.wasm.*.bin')):
    if stale.name not in keep:
        stale.unlink()
for path in source.iterdir():
    if path.is_file() and path.suffix not in ('.html', '.pck', '.wasm'):
        shutil.copy2(path, dest / path.name)
template = Path(__file__).with_name('godot-loader.html').read_text()
template = template.replace('__TITLE__', html.escape(args.title)).replace('__DESCRIPTION__', html.escape(args.description))
template = template.replace('__CONFIG__', json.dumps(config)).replace('__PAYLOAD__', json.dumps(payload))
template = template.replace('__SIZE__', str(round(sum(x['compressedBytes'] for x in payload.values()) / 1000000)))
(dest / 'index.html').write_text(template)
(dest / 'payload.json').write_text(json.dumps(payload, indent=2))
print('Static output:', dest, flush=True)

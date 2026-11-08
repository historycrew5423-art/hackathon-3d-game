import json,struct,glob,os,io
from PIL import Image
for f in sorted(glob.glob('exports/frog-dreams/public/assets/models/*.glb'))+sorted(glob.glob('exports/frog-dreams/public/assets/**/*.glb',recursive=True))[:0]:
    b=open(f,'rb').read();l=struct.unpack('<I',b[12:16])[0];j=json.loads(b[20:20+l]);bin0=20+l+8
    imgs=[]
    for im in j.get('images',[]):
        bv=j['bufferViews'][im['bufferView']];d=b[bin0+bv.get('byteOffset',0):bin0+bv.get('byteOffset',0)+bv['byteLength']]
        try:s=Image.open(io.BytesIO(d)).size
        except Exception as e:s=str(e)
        imgs.append((im.get('mimeType'),s,len(d)))
    tri=sum(j['accessors'][p['indices']]['count']//3 for m in j['meshes'] for p in m['primitives'] if 'indices' in p)
    print(os.path.basename(f),os.path.getsize(f),'tris',tri,imgs,j.get('extensionsUsed'))

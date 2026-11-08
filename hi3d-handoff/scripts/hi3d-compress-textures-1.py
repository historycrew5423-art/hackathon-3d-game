import json,struct,glob,os,io
from PIL import Image
src='exports/frog-dreams/public/assets/models';out='exports/frog-dreams/public/assets/tex-m';os.makedirs(out,exist_ok=True)
for f in glob.glob(src+'/*.glb'):
    n=os.path.basename(f)[5:-4];b=open(f,'rb').read();l=struct.unpack('<I',b[12:16])[0];j=json.loads(b[20:20+l]);b0=20+l+8
    for i,t in enumerate(j.get('textures',[])):
        im=j['images'][t['source']];bv=j['bufferViews'][im['bufferView']];o=b0+bv.get('byteOffset',0);img=Image.open(io.BytesIO(b[o:o+bv['byteLength']]))
        alpha=img.mode in('RGBA','LA','P') and img.convert('RGBA').getextrema()[3][0]<250
        img=img.convert('RGBA' if alpha else 'RGB');size=1024
        if img.width>size:img=img.resize((size,size),Image.LANCZOS)
        p=f'{out}/hi3d-{n}-{i}.webp';img.save(p,'WEBP',quality=82,method=6);print(p,os.path.getsize(p))
src2='exports/frog-dreams/baihuling/assets';out2=src2+'-m';os.makedirs(out2,exist_ok=True)
for f in glob.glob(src2+'/*.webp'):
    img=Image.open(f);s=1024 if not os.path.basename(f).startswith(('sky','twig','grassblade')) else 1024
    if max(img.size)>s:img.thumbnail((s,s),Image.LANCZOS)
    img.save(f'{out2}/{os.path.basename(f)}','WEBP',quality=78,method=6)
print('bhl',sum(os.path.getsize(x) for x in glob.glob(out2+'/*')))

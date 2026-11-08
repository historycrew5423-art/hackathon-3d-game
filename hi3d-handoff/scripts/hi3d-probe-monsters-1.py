import json,struct,glob,os
for f in sorted(glob.glob('hi3d-tripo_convert_*_1.glb')):
    b=open(f,'rb').read();l=struct.unpack('<I',b[12:16])[0];j=json.loads(b[20:20+l])
    tri=sum(j['accessors'][p['indices']]['count']//3 for m in j['meshes'] for p in m['primitives'] if 'indices' in p)
    mn=[1e9]*3;mx=[-1e9]*3
    for m in j['meshes']:
        for p in m['primitives']:
            a=j['accessors'][p['attributes']['POSITION']];mn=[min(x,y) for x,y in zip(mn,a['min'])];mx=[max(x,y) for x,y in zip(mx,a['max'])]
    print(f[19:27],os.path.getsize(f)//1024,'KB tris',tri,'skins',len(j.get('skins',[])),'anims',len(j.get('animations',[])),'imgs',len(j.get('images',[])),'size',[round(b-a,2) for a,b in zip(mn,mx)])

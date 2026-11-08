import bpy,os,math,mathutils
from mathutils import Vector
jobs=[('.hi3d/pre/'+n+'.glb',n) for n in ('frog-school','frog-monkey','frog-knight')]
out='exports/frog-dreams/public/assets/models'
BONES=[('Pelvis',None,(0,0,.22),(0,0,.391)),('Chest','Pelvis',(0,0,.4),(0,0,.62)),('Head','Chest',(0,0,.62),(0,0,.84)),
 ('UpperArm.L','Chest',(0,.2,.7),(0,.29,.585)),('Forearm.L','UpperArm.L',(0,.29,.585),(0,.29,.439)),
 ('UpperArm.R','Chest',(0,-.2,.7),(0,-.29,.585)),('Forearm.R','UpperArm.R',(0,-.29,.585),(0,-.29,.439)),
 ('Leg.L','Pelvis',(0,.16,.28),(0,.16,.11)),('Foot.L','Leg.L',(0,.16,.11),(-.102,.16,-.026)),
 ('Leg.R','Pelvis',(0,-.16,.28),(0,-.16,.11)),('Foot.R','Leg.R',(0,-.16,.11),(-.102,-.16,-.026))]
def segd(p,a,b):
    ab=b-a;t=max(0,min(1,(p-a).dot(ab)/max(ab.length_squared,1e-9)));return (p-(a+ab*t)).length
for f,name in jobs:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=os.path.abspath(f))
    ms=[o for o in bpy.context.scene.objects if o.type=='MESH']
    bpy.ops.object.select_all(action='DESELECT')
    for o in ms:o.select_set(True)
    bpy.context.view_layer.objects.active=ms[0]
    if len(ms)>1:bpy.ops.object.join()
    me=bpy.context.view_layer.objects.active;me.parent=None
    bpy.ops.object.transform_apply(location=True,rotation=True,scale=True)
    tris=sum(len(p.vertices)-2 for p in me.data.polygons)
    m=me.modifiers.new('d','DECIMATE');m.ratio=min(1,42000/tris);bpy.ops.object.modifier_apply(modifier='d')
    # 正面 -Y -> -X，与大奶蛙一致；脚底落地，高度 0.978
    me.rotation_euler=(0,0,-math.pi/2);bpy.ops.object.transform_apply(rotation=True)
    vs=me.data.vertices;zmin=min(v.co.z for v in vs);zmax=max(v.co.z for v in vs);s=.978/(zmax-zmin)
    cx=(min(v.co.x for v in vs)+max(v.co.x for v in vs))/2;cy=(min(v.co.y for v in vs)+max(v.co.y for v in vs))/2
    for v in vs:v.co=Vector(((v.co.x-cx)*s,(v.co.y-cy)*s,(v.co.z-zmin)*s))
    W=max(abs(v.co.y) for v in vs);ky=W/.35
    arm=bpy.data.armatures.new('BigFrog_Rig');ao=bpy.data.objects.new('BigFrog_Rig',arm);bpy.context.scene.collection.objects.link(ao)
    bpy.context.view_layer.objects.active=ao;bpy.ops.object.mode_set(mode='EDIT')
    segs={}
    for n,p,h,t in BONES:
        b=arm.edit_bones.new(n);b.head=(h[0],h[1]*ky,h[2]);b.tail=(t[0],t[1]*ky,t[2])
        if p:b.parent=arm.edit_bones[p]
        segs[n]=(Vector(b.head),Vector(b.tail))
    bpy.ops.object.mode_set(mode='OBJECT')
    me.name='BigFrog_SkinnedMesh';G={n:me.vertex_groups.new(name=n) for n,_,_,_ in BONES}
    for v in vs:
        p=v.co;side='L' if p.y>=0 else 'R';ws=[]
        for n,(a,b) in segs.items():
            if n[-2:] in('.L','.R') and n[-1]!=side:continue
            d=segd(p,a,b)+.01;ws.append((1/d**4,n))
        ws.sort(reverse=True);ws=ws[:3];tot=sum(w for w,_ in ws)
        for w,n in ws:
            if w/tot>.02:G[n].add([v.index],w/tot,'REPLACE')
    me.parent=ao;md=me.modifiers.new('Armature','ARMATURE');md.object=ao
    # 只保留基础色贴图，1024
    for mat in me.data.materials:
        nt=mat.node_tree;bsdf=next((n for n in nt.nodes if n.type=='BSDF_PRINCIPLED'),None)
        if bsdf:
            for k in('Normal','Metallic','Roughness'):
                for l in list(bsdf.inputs[k].links):nt.links.remove(l)
            bsdf.inputs['Metallic'].default_value=0;bsdf.inputs['Roughness'].default_value=.7
    for img in bpy.data.images:
        if img.size[0]>1024:img.scale(1024,1024)
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.export_scene.gltf(filepath=os.path.abspath(f'{out}/hi3d-{name}.glb'),export_format='GLB',export_image_format='JPEG',export_jpeg_quality=85,export_skins=True,export_animations=False,export_yup=True,export_extras=True)
    print('RIGGED',name,len(vs),round(W,3))
import bpy,os,mathutils
names=['whale-game','duck-game','opossum-game','penguin-game','umbrella-game','kangaroo-game']
src='exports/frog-dreams/public/assets/models'
def ss(a,b,x):
    t=max(0,min(1,(x-a)/(b-a)));return t*t*(3-2*t)
for n in names:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=os.path.abspath(f'{src}/hi3d-{n}.glb'))
    meshes=[o for o in bpy.context.scene.objects if o.type=='MESH']
    bpy.ops.object.select_all(action='DESELECT')
    for o in meshes:o.select_set(True)
    bpy.context.view_layer.objects.active=meshes[0]
    if len(meshes)>1:bpy.ops.object.join()
    me=bpy.context.view_layer.objects.active
    bpy.ops.object.transform_apply(location=True,rotation=True,scale=True)
    me.parent=None
    vs=me.data.vertices;H=max(v.co.z for v in vs);W=max(abs(v.co.y) for v in vs)
    arm=bpy.data.armatures.new('Rig');ao=bpy.data.objects.new('Rig',arm);bpy.context.scene.collection.objects.link(ao)
    bpy.context.view_layer.objects.active=ao;bpy.ops.object.mode_set(mode='EDIT')
    def B(name,h,t,par=None):
        b=arm.edit_bones.new(name);b.head=h;b.tail=t
        if par:b.parent=arm.edit_bones[par]
    B('Hips',(0,0,.28*H),(0,0,.42*H));B('Spine',(0,0,.42*H),(0,0,.62*H),'Hips');B('Head',(0,0,.62*H),(0,0,.95*H),'Spine')
    for s,sn in((1,'L'),(-1,'R')):
        B('Arm.'+sn,(0,s*.45*W,.58*H),(0,s*.95*W,.42*H),'Spine');B('Leg.'+sn,(0,s*.3*W,.28*H),(0,s*.3*W,.02*H),'Hips')
    bpy.ops.object.mode_set(mode='OBJECT')
    G={k:me.vertex_groups.new(name=k) for k in ['Hips','Spine','Head','Arm.L','Arm.R','Leg.L','Leg.R']}
    for v in vs:
        z=v.co.z/H;y=v.co.y/max(W,1e-6)
        head=ss(.55,.68,z);leg=1-ss(.16,.3,z);lat=ss(.42,.7,abs(y))*ss(.25,.38,z)*(1-ss(.62,.72,z))
        armw=lat*(1-head);legw=leg*(1-armw);rest=max(0,1-head-armw-legw)
        hips=rest*(1-ss(.3,.45,z));spine=rest-hips
        side='L' if y>=0 else 'R'
        for k,w in(('Head',head),('Arm.'+side,armw),('Leg.'+side,legw*ss(-.15,.15,abs(y)*(1 if True else 0))+0),('Hips',hips+legw*(1-ss(-.15,.15,abs(y)))),('Spine',spine)):
            if w>1e-3:G[k].add([v.index],w,'REPLACE')
    me.parent=ao;mod=me.modifiers.new('Armature','ARMATURE');mod.object=ao
    for img in bpy.data.images:
        if img.size[0]>1024:img.scale(1024,1024)
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.export_scene.gltf(filepath=os.path.abspath(f'{src}/hi3d-{n}-rig.glb'),export_format='GLB',export_image_format='JPEG',export_jpeg_quality=85,export_skins=True,export_animations=False,export_yup=True)
    print('RIGGED',n,len(vs))

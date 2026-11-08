import bpy,sys,os,math
names=['whale-game','duck-game','opossum-game','penguin-game','umbrella-game','kangaroo-game']
src='exports/frog-dreams/public/assets/models'
os.makedirs('exports/frog-dreams/reports',exist_ok=True)
for n in names:
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=os.path.abspath(f'{src}/hi3d-{n}.glb'))
    import mathutils
    pts=[o.matrix_world@mathutils.Vector(c) for o in bpy.context.scene.objects if o.type=='MESH' for c in o.bound_box]
    mn=mathutils.Vector([min(p[i] for p in pts) for i in range(3)]);mx=mathutils.Vector([max(p[i] for p in pts) for i in range(3)])
    print('BBOX',n,tuple(round(v,3) for v in mn),tuple(round(v,3) for v in mx))
    c=(mn+mx)/2;d=max(mx-mn)*2.2
    sc=bpy.context.scene;cam=bpy.data.objects.new('c',bpy.data.cameras.new('c'));sc.collection.objects.link(cam)
    cam.location=(c.x,c.y-d,c.z);cam.rotation_euler=(math.radians(90),0,0);sc.camera=cam
    l=bpy.data.objects.new('l',bpy.data.lights.new('l','SUN'));l.data.energy=4;l.rotation_euler=(1.0,0,0);sc.collection.objects.link(l)
    w=bpy.data.worlds.new('w');w.color=(.7,.7,.7);sc.world=w
    sc.render.engine='BLENDER_EEVEE_NEXT' if 'BLENDER_EEVEE_NEXT' in [e.identifier for e in bpy.types.RenderSettings.bl_rna.properties['engine'].enum_items] else 'BLENDER_EEVEE'
    sc.render.resolution_x=sc.render.resolution_y=256;sc.render.filepath=os.path.abspath(f'exports/frog-dreams/reports/hi3d-face-{n}.png');bpy.ops.render.render(write_still=True)

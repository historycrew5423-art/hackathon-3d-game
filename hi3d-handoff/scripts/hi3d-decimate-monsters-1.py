import bpy,sys,glob,os,math
out='exports/frog-dreams/public/assets/models';prev='exports/frog-dreams/reports'
for f in sorted(glob.glob('hi3d-tripo_convert_*_1.glb')):
    key=os.path.basename(f)[19:27]
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=os.path.abspath(f))
    meshes=[o for o in bpy.context.scene.objects if o.type=='MESH']
    for o in meshes:
        tris=sum(len(p.vertices)-2 for p in o.data.polygons)
        m=o.modifiers.new('d','DECIMATE');m.ratio=min(1,14000/max(1,tris))
        bpy.context.view_layer.objects.active=o;bpy.ops.object.modifier_apply(modifier='d')
    for img in bpy.data.images:
        if img.size[0]>1024:img.scale(1024,1024)
        img.pack()
    bpy.ops.export_scene.gltf(filepath=os.path.abspath(f'{out}/hi3d-xiyou-{key}.glb'),export_format='GLB',export_image_format='JPEG',export_jpeg_quality=85)
    # preview
    sc=bpy.context.scene;cam=bpy.data.objects.new('c',bpy.data.cameras.new('c'));sc.collection.objects.link(cam);cam.location=(0,-2.4,.6);cam.rotation_euler=(math.radians(85),0,0)
    sc.camera=cam;l=bpy.data.objects.new('l',bpy.data.lights.new('l','SUN'));l.data.energy=3;l.rotation_euler=(.8,0,.4);sc.collection.objects.link(l)
    w=bpy.data.worlds.new('w');w.color=(.8,.8,.8);sc.world=w;sc.render.engine='BLENDER_EEVEE_NEXT' if 'BLENDER_EEVEE_NEXT' in [e.identifier for e in bpy.types.RenderSettings.bl_rna.properties['engine'].enum_items] else 'BLENDER_EEVEE'
    sc.render.resolution_x=sc.render.resolution_y=320;sc.render.filepath=os.path.abspath(f'{prev}/hi3d-xiyou-{key}.png');bpy.ops.render.render(write_still=True)
    print('done',key)

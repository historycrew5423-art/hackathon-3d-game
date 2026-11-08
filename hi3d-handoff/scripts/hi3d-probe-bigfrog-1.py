import bpy,os
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=os.path.abspath('exports/frog-dreams/public/assets/models/hi3d-bigfrog.glb'))
for o in bpy.context.scene.objects:
    print('OBJ',o.name,o.type,tuple(round(x,3) for x in o.location),tuple(round(x,3) for x in o.rotation_euler),tuple(round(x,3) for x in o.scale),o.parent.name if o.parent else None)
    if o.type=='ARMATURE':
        for b in o.data.bones:print('BONE',b.name,b.parent.name if b.parent else None,tuple(round(x,3) for x in b.head_local),tuple(round(x,3) for x in b.tail_local))
    if o.type=='MESH':
        import mathutils;ws=[o.matrix_world@mathutils.Vector(c) for c in o.bound_box];print('BB',[round(min(v[i] for v in ws),3) for i in range(3)],[round(max(v[i] for v in ws),3) for i in range(3)],len(o.data.polygons),[g.name for g in o.vertex_groups])
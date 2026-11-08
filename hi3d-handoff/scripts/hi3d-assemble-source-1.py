import bpy,json,time
from pathlib import Path
from mathutils import Vector
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'exports'/'frog-dreams';START=time.time()
bpy.ops.wm.read_factory_settings(use_empty=True)
initial=bpy.context.scene
rows=[]
for order,name in enumerate(['classroom','butterfly','cyber','runner'],1):
    scene=bpy.data.scenes.new('%02d_%s'%(order,name));bpy.context.window.scene=scene
    scene.unit_settings.system='METRIC';scene.unit_settings.scale_length=1
    source=OUT/'assets_src'/'snapshots'/('hi3d-dream-'+name+'.glb')
    bpy.ops.import_scene.gltf(filepath=str(source))
    scene['sourceSnapshot']=str(source.relative_to(OUT)).replace('\\','/')
    scene['gameplaySource']='src/hi3d-main.js'
    scene['note']='Editable static snapshot. Real-time animation and gameplay are in the bundled JavaScript sources.'
    meshes=[o for o in scene.objects if o.type=='MESH']
    assert len(meshes)>0
    rows.append({'scene':scene.name,'meshObjects':len(meshes),'polygons':sum(len(o.data.polygons) for o in meshes),'source':scene['sourceSnapshot']})
    world=bpy.data.worlds.new('World_'+name);world.use_nodes=True;world.node_tree.nodes['Background'].inputs['Color'].default_value=(.19,.25,.28,1) if name=='cyber' else (.65,.75,.69,1);world.node_tree.nodes['Background'].inputs['Strength'].default_value=.6;scene.world=world
    bpy.ops.object.light_add(type='AREA',location=(6,-9,20));bpy.context.object.name='PREVIEW_KEY';bpy.context.object.data.energy=1500;bpy.context.object.data.size=15
    bpy.ops.object.camera_add(location=(0,-26,21));cam=bpy.context.object;cam.name='PREVIEW_CAMERA';cam.rotation_euler=(Vector((0,2,0))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.lens=35;scene.camera=cam
    scene.render.engine='CYCLES';scene.cycles.samples=32;scene.render.resolution_x=1600;scene.render.resolution_y=1000;scene.render.resolution_percentage=100
bpy.context.window.scene=bpy.data.scenes.get('02_butterfly')
if initial.users==0:bpy.data.scenes.remove(initial)
bpy.ops.file.pack_all()
target=OUT/'assets_src'/'blender'/'hi3d-three-dreams.blend'
bpy.ops.wm.save_as_mainfile(filepath=str(target))
bpy.ops.wm.open_mainfile(filepath=str(target))
assert all(bpy.data.scenes.get(row['scene']) for row in rows)
(OUT/'reports'/'hi3d-blender-check.json').write_text(json.dumps({'status':'passed','reopened':True,'elapsedSeconds':round(time.time()-START,2),'scenes':rows},indent=2),encoding='utf-8')
print('BLENDER_SOURCE_READY',target.name,flush=True)

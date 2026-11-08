import bpy,sys,math,json,time
from pathlib import Path
from mathutils import Vector,Matrix
ROOT=Path(__file__).resolve().parents[1];OUT=ROOT/'exports'/'frog-dreams';MODELS=OUT/'public'/'assets'/'models';REPORT=OUT/'reports';start=time.time();records=[]
jobs=[('frog','hi3d-奶蛙_1.glb',18000,1.5),('penguin','hi3d-风格化侦探企鹅3D模型_allparts_20261107_185745_1.glb',24000,2.1),('umbrella','hi3d-写实3D特工企鹅与雨伞_allparts_20261107_185832_1.glb',24000,2.3)]
if '--new-cast' in sys.argv:
    jobs=[('whale','hi3d-Q版3D鲸鱼女仆动漫角色_allparts_20261107_194948_1.glb',16000,1.8),('kangaroo','hi3d-风格化3D黄色袋鼠角色_allparts_20261107_200337_1.glb',18000,2.2),('duck','hi3d-风格化3D小黄鸭 带篮球背包_allparts_20261107_195002_1.glb',14000,1.6),('opossum','hi3d-写实3D负鼠角色_allparts_20261107_195001_1.glb',14000,1.3)]
    recordPath=REPORT/'hi3d-character-processing.json'
    if recordPath.exists():records=json.loads(recordPath.read_text(encoding='utf-8'))
def render(name):
    scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=12;scene.render.resolution_x=480;scene.render.resolution_y=480;scene.render.resolution_percentage=100
    if not scene.world:scene.world=bpy.data.worlds.new('World')
    scene.world.color=(.6,.6,.6);scene.view_settings.view_transform='Standard'
    bpy.ops.object.camera_add(location=(3.2,5,2.6));cam=bpy.context.object;cam.rotation_euler=(Vector((0,0,1))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=3.3;scene.camera=cam
    for p,power,size in [((3,4,6),650,5),((-3,0,4),400,4)]:
        bpy.ops.object.light_add(type='AREA',location=p);bpy.context.object.data.energy=power;bpy.context.object.data.shape='DISK';bpy.context.object.data.size=size;bpy.context.object.rotation_euler=(Vector((0,0,1))-bpy.context.object.location).to_track_quat('-Z','Y').to_euler()
    scene.render.film_transparent=False;scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.7,.8,.78,1);scene.world.node_tree.nodes['Background'].inputs[1].default_value=.6
    scene.render.filepath=str(REPORT/('hi3d-'+name+'-preview.png'));bpy.ops.render.render(write_still=True)
def export(name,objects):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objects:o.select_set(True)
    bpy.ops.export_scene.gltf(filepath=str(MODELS/('hi3d-'+name+'.glb')),export_format='GLB',use_selection=True,export_extras=True,export_animations=False,export_image_format='JPEG',export_jpeg_quality=88)
for key,filename,target,height in jobs:
    saved=OUT/'assets_src'/'blender'/('hi3d-'+key+'-game.blend')
    if saved.exists():
        bpy.ops.wm.open_mainfile(filepath=str(saved));render(key);print('CHARACTER_REUSED',key,flush=True);continue
    t=time.time();bpy.ops.wm.read_factory_settings(use_empty=True);bpy.context.scene.unit_settings.system='METRIC'
    bpy.ops.import_scene.gltf(filepath=str(ROOT/filename));meshes=[o for o in bpy.context.scene.objects if o.type=='MESH'];triBefore=sum(len(o.data.polygons) for o in meshes)
    # Bake transforms; retain texture coordinates and source surface colors.
    for o in meshes:
        o.data.transform(o.matrix_world);o.parent=None;o.matrix_world=Matrix.Identity(4)
    bounds=[v for o in meshes for v in [Vector(v) for v in o.bound_box]];lo=Vector(tuple(min(v[i] for v in bounds) for i in range(3)));hi=Vector(tuple(max(v[i] for v in bounds) for i in range(3)));center=(lo+hi)/2;s=height/(hi.z-lo.z)
    orient=Matrix.Rotation(math.pi/2,4,'Z')
    for o in meshes:
        transform=orient @ Matrix.Scale(s,4) @ Matrix.Translation(Vector((-center.x,-center.y,-lo.z)))
        o.data.transform(transform)
        bpy.context.view_layer.objects.active=o
        if len(o.data.polygons)>target:
            m=o.modifiers.new('GAME_LOD','DECIMATE');m.ratio=max(.001,target*len(o.data.polygons)/triBefore/len(o.data.polygons));m.use_collapse_triangulate=True;bpy.ops.object.modifier_apply(modifier=m.name)
        o.name='CHARACTER_SURFACE'
    for image in bpy.data.images:
        if image.size[0]>1024 or image.size[1]>1024:image.scale(1024,1024)
        if image.size[0]:image.pack()
    for o in list(bpy.context.scene.objects):
        if o not in meshes:bpy.data.objects.remove(o,do_unlink=True)
    root=bpy.data.objects.new('ROOT',None);bpy.context.collection.objects.link(root);root['sparc3dPhysicalUnits']={'version':1,'unit':'meter'};root['sourceFile']=filename
    for o in meshes:o.parent=root
    for name,p in [('MOUTH_SOCKET',(0,.18,height*.73)),('FX_SOCKET',(0,0,height*.5))]:
        e=bpy.data.objects.new(name,None);bpy.context.collection.objects.link(e);e.parent=root;e.location=p
    objs=list(bpy.context.scene.objects);export(key+'-game',objs)
    if key=='frog':
        # The distant crowd is derived from the same approved character.
        backups=[o.data.copy() for o in meshes]
        for o in meshes:
            bpy.context.view_layer.objects.active=o;m=o.modifiers.new('CROWD_LOD','DECIMATE');m.ratio=.1;m.use_collapse_triangulate=True;bpy.ops.object.modifier_apply(modifier=m.name)
        export('frog-crowd',objs)
        for o,data in zip(meshes,backups):o.data=data
    bpy.ops.file.pack_all();bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'assets_src'/'blender'/('hi3d-'+key+'-game.blend')))
    render(key)
    records.append({'id':key,'source':filename,'trianglesBefore':triBefore,'polygonsAfter':sum(len(o.data.polygons) for o in meshes),'elapsedSeconds':round(time.time()-t,2),'height':height})
    (REPORT/'hi3d-character-processing.json').write_text(json.dumps(records,ensure_ascii=False,indent=2),encoding='utf-8');print('CHARACTER_DONE',key,flush=True)
print('CHARACTERS_COMPLETE',round(time.time()-start,2),flush=True)

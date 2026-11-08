import bpy, math, json, sys, time
from pathlib import Path
from mathutils import Vector

START=time.time()
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'exports'/'frog-dreams'
MODELS=OUT/'public'/'assets'/'models'
SRC=OUT/'assets_src'/'blender'
MODELS.mkdir(parents=True,exist_ok=True)
SRC.mkdir(parents=True,exist_ok=True)
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
bpy.context.scene.unit_settings.system='METRIC'
bpy.context.scene.unit_settings.scale_length=1
MAT={}
COLORS={'mint':'76c9a4','cream':'fff2ce','jade':'286b60','dark':'243e43','stone':'73aaa0','stone2':'8ab8aa','gold':'ecc667','coral':'e57d66','red':'bd4a48','wood':'996142','sky':'b8e3dd','lilac':'b8a4ce','pink':'eab8cd','blue':'8cbad9','white':'fff8ed','grass':'91b79b'}
def mat(key):
    if key in MAT:return MAT[key]
    h=COLORS.get(key,key); c=tuple(int(h[i:i+2],16)/255 for i in (0,2,4))
    m=bpy.data.materials.new('MAT_'+key); m.diffuse_color=(*c,1); m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF'); p.inputs['Base Color'].default_value=(*c,1); p.inputs['Roughness'].default_value=.65
    MAT[key]=m;return m
def pos(p):return (p[0],-p[2],p[1])
current=None
def empty(name,p=(0,0,0),parent=None):
    o=bpy.data.objects.new(name,None); current.objects.link(o); o.location=pos(p)
    if parent:o.parent=parent
    return o
def finish(o,name,color,parent=None):
    o.name=name
    for c in list(o.users_collection):c.objects.unlink(o)
    current.objects.link(o)
    if color:o.data.materials.append(mat(color))
    if parent:o.parent=parent
    return o
def box(name,p,d,color,bevel=.07,parent=None):
    bpy.ops.mesh.primitive_cube_add(size=1,location=pos(p));o=bpy.context.object;o.dimensions=(d[0],d[2],d[1])
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    if bevel:
        mod=o.modifiers.new('Soft toy edges','BEVEL');mod.width=bevel;mod.segments=2
        bpy.context.view_layer.objects.active=o;bpy.ops.object.modifier_apply(modifier=mod.name)
    return finish(o,name,color,parent)
def ball(name,p,d,color,parent=None):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=12,ring_count=8,radius=1,location=pos(p));o=bpy.context.object;o.scale=(d[0],d[2],d[1])
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    for poly in o.data.polygons:poly.use_smooth=True
    return finish(o,name,color,parent)
def cylinder(name,p,r,h,color,r2=None,vertices=24,parent=None):
    bpy.ops.mesh.primitive_cone_add(vertices=vertices,radius1=r,radius2=r if r2 is None else r2,depth=h,location=pos(p))
    return finish(bpy.context.object,name,color,parent)
def mesh(name,verts,faces,color):
    m=bpy.data.meshes.new(name);m.from_pydata([pos(v) for v in verts],[],faces);m.update();o=bpy.data.objects.new(name,m);current.objects.link(o);o.data.materials.append(mat(color));return o
def begin(name):
    global current
    current=bpy.data.collections.new(name);bpy.context.scene.collection.children.link(current)
    return empty('ROOT')
def export(name,root,join=False):
    objs=list(current.objects)
    if join:
        groups={}
        for o in objs:
            if o.type=='MESH' and not o.parent and not o.name.startswith(('FLOOR_FRAGMENT','COLLIDER')):groups.setdefault(o.data.materials[0].name,[]).append(o)
        for key,group in groups.items():
            bpy.ops.object.select_all(action='DESELECT')
            for o in group:o.select_set(True)
            bpy.context.view_layer.objects.active=group[0];bpy.ops.object.join();group[0].name='ENV_'+key
    for o in current.objects:
        if o!=root and o.parent is None:o.parent=root
    root['sparc3dPhysicalUnits']={'version':1,'unit':'meter'}
    root['assetStage']='prototype';root['upAxis']='Y';root['forwardAxis']='-Z'
    bpy.ops.object.select_all(action='DESELECT')
    for o in current.objects:o.select_set(True)
    bpy.context.view_layer.objects.active=root
    path=MODELS/('hi3d-'+name+'.glb')
    bpy.ops.export_scene.gltf(filepath=str(path),export_format='GLB',export_extras=True,use_selection=True,export_yup=True,export_animations=False)
    current.hide_render=True
    return {'id':name,'file':str(path.relative_to(OUT)).replace('\\','/'),'nodes':[o.name for o in current.objects],'bytes':path.stat().st_size}
records=[]

# A neutral, explicitly labelled stand-in. No supplied character likeness is invented.
r=begin('character_proxy')
ball('PROXY_CAPSULE',(0,.8,0),(.44,.66,.36),'mint')
ball('PROXY_BELLY',(0,.74,-.29),(.30,.42,.10),'cream')
for x in [-.22,.22]:
    ball('PROXY_EYE',(x,1.26,-.22),(.13,.15,.12),'white')
    ball('PROXY_PUPIL',(x,1.27,-.32),(.045,.06,.035),'dark')
    ball('PROXY_FOOT',(x,.10,-.05),(.20,.10,.26),'mint')
empty('MOUTH_SOCKET',(0,.96,-.37),r);empty('FX_SOCKET',(0,.72,0),r)
records.append(export('frog-proxy',r))
r=begin('monster_proxy')
box('PROXY_BODY',(0,.7,0),(.9,1.2,.7),'lilac',.22)
for x in [-.22,.22]:ball('PROXY_EYE',(x,.95,-.36),(.09,.12,.04),'white')
empty('MOUTH_SOCKET',(0,.65,-.4),r);empty('FX_SOCKET',(0,.7,0),r)
records.append(export('monster-proxy',r))
r=begin('shield_proxy');s=cylinder('SHIELD',(0,.7,0),.55,.12,'gold',vertices=16);s.rotation_euler.x=math.pi/2
records.append(export('laughing-shield',r))

# 24 independently pivoted slabs; fully support the radius-12 platform.
r=begin('floor_fragments')
for i in range(24):
    a=2*math.pi*i/24;b=2*math.pi*(i+1)/24
    poly=[(0,0)]+[(12*math.cos(a+(b-a)*j/3),12*math.sin(a+(b-a)*j/3)) for j in range(4)]
    v=[(x,y,z) for y in [-.5,0] for x,z in poly];n=len(poly)
    faces=[tuple(range(n-1,-1,-1)),tuple(range(n,2*n))]+[(j,(j+1)%n,(j+1)%n+n,j+n) for j in range(n)]
    o=mesh('FLOOR_FRAGMENT_%02d'%i,v,faces,'stone' if i%2 else 'stone2')
    bpy.ops.object.select_all(action='DESELECT');o.select_set(True);bpy.context.view_layer.objects.active=o;bpy.ops.object.origin_set(type='ORIGIN_GEOMETRY',center='BOUNDS')
    o['collider']={'shape':'convex_prism','enabledUntil':'collapse'};o['fragmentIndex']=i
records.append(export('floor-fragments',r))

r=begin('journey_mountain')
for k in range(20):
    a=2*math.pi*k/20;x=18*math.sin(a);z=18*math.cos(a)
    if z>9 and abs(x)<10:continue
    h=5+(k%5)*1.1
    ball('LAUGHING_ROCK',(x,h*.32,z),(3,h*.65,3),'jade' if k%2 else 'mint')
    if k%3==0:
        for q in [-.65,.65]:box('STONE_EYE',(x+q,h*.60,z-2.7),(.55,.22,.2),'dark',.08)
        box('STONE_MOUTH',(x,h*.43,z-2.9),(1.2,.18,.2),'cream',.07)
for x in [-10,10]:
    for z in [-8,0,7]:
        cylinder('PILLAR',(x,1.7,z),.65,3.4,'stone',r2=.50)
        ball('PILLAR_CAP',(x,3.45,z),(.9,.4,.9),'gold')
        box('LANTERN_BEAM',(x,3.8,z),(2.5,.13,.16),'wood')
        for dx in [-.9,.9]:
            cylinder('LANTERN_STRING',(x+dx,3.38,z),.02,.8,'gold',vertices=8)
            ball('LANTERN',(x+dx,2.92,z),(.32,.42,.32),'red')
            cylinder('LANTERN_TASSEL',(x+dx,2.4,z),.025,.3,'gold',vertices=8)
# Small crooked theatre / monkey-ear temple, with an open stage front.
for x in [-4,4]:cylinder('TEMPLE_POST',(x,2.4,-13),.30,4.8,'red')
box('TEMPLE_BEAM',(0,4.75,-13),(9.4,.5,2.7),'wood')
for y,w in [(5.15,10),(5.55,8.5),(5.9,7.2)]:box('TEMPLE_ROOF',(0,y,-13),(w,.35,4),'jade',.15)
for x in [-4.6,4.6]:ball('TEMPLE_EAR',(x,5.4,-13),(1,1,.5),'gold')
for x in [-1.4,1.4]:ball('TEMPLE_EYE',(x,5.55,-10.9),(.28,.20,.12),'gold')
for x in [-6,6]:
    for j in range(3):box('STAIR',(x,-.2+j*.15,10+j*.5),(3,.3,1),'stone')
for x in [-7,7]:
    cylinder('FLAGPOLE',(x,2.4,-7),.07,4.8,'wood',vertices=8)
    box('FLAG',(x+.6,3.8,-7),(1.2,1.1,.04),'coral')
box('GONG_FRAME',(-7,1.8,2),(2.5,.15,.2),'wood')
for x in [-8,-6]:box('GONG_POST',(x,.9,2),(.15,1.8,.15),'wood')
o=cylinder('GONG',(-7,1,2),.70,.12,'gold');o.rotation_euler.x=math.pi/2
spawn=[]
for i in range(72):
    if i<12:
        p=((i%4-1.5)*1.8,0,3+(i//4)*1.8)
    elif i<36:
        j=i-12;p=((-1 if j<12 else 1)*(5.5+(j%3)*1.5),0,-5+(j%12//3)*2.2)
    else:
        j=i-36;p=((j%9-4)*1.75,0,-8.5+(j//9)*1.7)
    e=empty('FROG_SPAWN_%02d'%i,p);e['entityId']=i;spawn.append(p)
for i in range(4):empty('MONSTER_SPAWN_%02d'%i,(-4.5+i*3,0,-1.4))
records.append(export('journey-mountain',r,True))

# Animated windmill placeholder, with real separable pivots.
r=begin('windmill_proxy');r['placeholder']=True
cylinder('MILL_BODY',(0,2.5,0),1,2.7,'cream',r2=.8)
cylinder('MILL_ROOF',(0,4.25,0),1.4,1.15,'coral',r2=.12)
for x in [-.38,.38]:
    ball('MILL_EYE',(x,3,-.89),(.20,.26,.1),'white')
    ball('MILL_PUPIL',(x,3,-.98),(.07,.1,.03),'dark')
    b=box('WORRIED_BROW',(x,3.38,-.95),(.45,.1,.1),'dark');b.rotation_euler.y=x*.7
empty('FACE_SOCKET',(0,3,-1.02),r)
p=empty('BLADE_PIVOT',(0,3.9,-1.15),r)
for i in range(4):
    ang=i*math.pi/2
    o=box('BLADE_%d'%i,(math.sin(ang)*1.35,math.cos(ang)*1.35,0),(.48,2.4,.12),'wood',.06,p)
    o.rotation_euler.y=-ang
    for j in range(3):
        dist=.7+j*.5
        o=box('BLADE_CROSS',(math.sin(ang)*dist,math.cos(ang)*dist,-.07),(.68,.08,.1),'gold',.02,p);o.rotation_euler.y=-ang
ball('BLADE_HUB',(0,0,-.12),(.3,.3,.2),'gold',p)
for side,x in [('L',-.55),('R',.55)]:
    leg=empty('LEG_'+side,(x,1.25,0),r)
    cylinder('SHIN_'+side,(0,-.40,0),.16,.8,'wood',vertices=12,parent=leg)
    ball('SHOE_'+side,(0,-.95,-.2),(.40,.24,.6),'jade',leg)
records.append(export('running-windmill-proxy',r))

def cloud(x,y,z,scale=1):
    for dx,dy,rr in [(-.9,0,1),(.7,0,1.1),(0,.4,1.3)]:ball('CLOUD',(x+dx*scale,y+dy*scale,z),(rr*scale,.60*rr*scale,.75*rr*scale),'white')
def house(x,y,z,inverted=False):
    group=empty('HANGING_HOUSE' if inverted else 'HOUSE',(x,y,z))
    box('HOUSE_WALL',(0,1.1,0),(2.6,2.2,2.5),'pink' if x>0 else 'cream',.12,group)
    roof=cylinder('BISCUIT_ROOF',(0,2.8,0),2.2,1.4,'coral',r2=0,vertices=4,parent=group);roof.rotation_euler.z=math.pi/4
    for dx in [-.6,.6]:box('WINDOW',(dx,1.3,-1.28),(.5,.65,.05),'jade',.07,group)
    if inverted:group.rotation_euler.x=math.pi
for theme in ['wheat','village','clouds']:
    for variant in range(2):
        r=begin('runner_'+theme+'_'+str(variant));r['length']=40;r['roadWidth']=12
        road='gold' if theme=='wheat' else 'pink' if theme=='village' else 'lilac'
        box('ROAD',(0,-.35,-20),(12,.7,40),road,.0)
        # Separate, explicitly described collision surface.
        e=empty('COLLIDER_ROAD',(0,-.35,-20));e['collider']={'shape':'box','halfExtents':[6,.35,20]}
        for x in [-2,2]:
            for z in range(-2,-40,-4):box('LANE_DASH',(x,.014,z),(.075,.025,1.65),'white',.0)
        for side in [-1,1]:
            for j in range(8):
                z=-2-j*5;x=side*(8+(j%3)*1.7)
                if theme=='wheat':
                    box('FIELD',(side*10,-.4,z),(8,.7,5),'gold',.0)
                    for q in range(6):
                        xx=x+(q%3)*.7;zz=z+(q//3)*.9
                        cylinder('WHEAT',(xx,.6,zz),.045,1.2,'wood',vertices=5)
                        ball('WHEAT_EAR',(xx,1.2,zz),(.16,.38,.13),'cream')
                    if j%3==0:box('CHEESE_HAY',(x,.7,z),(1.7,1.4,1.5),'cream',.2)
                elif theme=='village':
                    box('VERGE',(side*8,-.4,z),(4,.7,5),'grass',.0)
                    if j%2==0:house(side*9,9+variant,z,True)
                    else:
                        cylinder('LAMP_POST',(side*6.8,1.7,z),.07,3.4,'wood',vertices=8)
                        ball('LAMP',(side*6.8,3.4,z),(.4,.35,.4),'gold')
                        ball('BREAD_ROCK',(x,.6,z),(1,.5,.6),'cream')
                else:
                    cloud(x,-.3,z,1.6)
                    if j%2==0:
                        cylinder('FLOATING_ISLAND',(x,-.8,z),1.8,2,'pink',r2=2.2,vertices=12)
                        cylinder('ISLAND_TOP',(x,.2,z),2.2,.18,'mint',vertices=12)
                    for zz in [z,z-2.5]:box('WOOD_PLANK',(0,-.01,zz),(11.9,.04,.12),'cream',.0)
            for z in [-7,-27]:cloud(side*18,9+variant,z,2)
        if theme=='clouds':
            for ci,c in enumerate(['coral','gold','mint','blue']):
                for j in range(12):
                    a=math.pi*j/11;x=math.cos(a)*(10+ci*.25);y=math.sin(a)*(10+ci*.25)+1
                    ball('RAINBOW',(x,y,-30),(.65,.65,.22),c)
        empty('ENTRY',(0,0,0));empty('EXIT',(0,0,-40))
        records.append(export('runner-'+theme+'-'+str(variant),r,True))

r=begin('dream_tunnel')
for i in range(16):
    a=i*2.399;x=math.sin(a)*7;z=math.cos(a)*7;y=-i*1.8
    if i%3==0:
        for dx in [-.8,.8]:box('BROKEN_WINDOW',(x+dx,y,z),(.14,2,.14),'gold')
        for dy in [-1,1]:box('BROKEN_WINDOW',(x,y+dy,z),(1.7,.14,.14),'gold')
    elif i%3==1:
        o=cylinder('CLOCK',(x,y,z),1,.15,'cream');o.rotation_euler.x=math.pi/2
        box('CLOCK_HAND',(x+.25,y,z-.12),(.6,.10,.08),'dark')
    else:box('FALLING_SHIELD',(x,y,z),(1.3,1.5,.2),'lilac',.2)
records.append(export('dream-tunnel',r,True))

for c in bpy.data.collections:c.hide_render=False
bpy.ops.object.select_all(action='DESELECT')
bpy.ops.wm.save_as_mainfile(filepath=str(SRC/'hi3d-dream-worlds.blend'))
(OUT/'hi3d-assets-manifest.json').write_text(json.dumps({'stage':'playable prototype, not final character art','units':'meter','up':'Y','forward':'-Z','frogCount':72,'nearClones':12,'instancedClones':60,'fragments':24,'roadLength':40,'assets':records},ensure_ascii=False,indent=2),encoding='utf-8')
(OUT/'hi3d-anchors.json').write_text(json.dumps({'frogSpawns':spawn,'floorFragments':24,'runner':{'ENTRY':[0,0,0],'EXIT':[0,0,-40]},'sockets':['ROOT','MOUTH_SOCKET','FX_SOCKET','BLADE_PIVOT','LEG_L','LEG_R','FACE_SOCKET']},indent=2),encoding='utf-8')
(OUT/'reports'/'hi3d-asset-build.json').write_text(json.dumps({'status':'completed','elapsedSeconds':round(time.time()-START,2),'assets':len(records),'blender':bpy.app.version_string},indent=2),encoding='utf-8')
print('ASSETS_COMPLETE',len(records),round(time.time()-START,2))

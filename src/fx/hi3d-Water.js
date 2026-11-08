import * as T from 'three';
// A shared, bounded planar reflection pass. No extra scene, duplicated world or remote shader.
export class PondReflection {
 constructor(app,waters){
  this.app=app;this.waters=waters;this.enabled=false;this.last=-1;
  this.target=new T.WebGLRenderTarget(512,512,{type:T.HalfFloatType,depthBuffer:true});
  this.camera=new T.PerspectiveCamera();this.matrix=new T.Matrix4();this.bias=new T.Matrix4().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);this.clock={value:0};
  const m=waters[0].material;m.roughness=.22;m.metalness=.15;
  m.onBeforeCompile=s=>{s.uniforms.pondMirror={value:this.target.texture};s.uniforms.pondMatrix={value:this.matrix};s.uniforms.pondTime=this.clock;s.uniforms.pondEnabled={value:this.enabled?1:0};this.enabledUniform=s.uniforms.pondEnabled;
   s.vertexShader='uniform mat4 pondMatrix; varying vec4 pondCoord;\n'+s.vertexShader;
   s.vertexShader=s.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\npondCoord=pondMatrix*modelMatrix*vec4(transformed,1.);');
   s.fragmentShader='uniform sampler2D pondMirror; uniform float pondTime; uniform float pondEnabled; varying vec4 pondCoord;\n'+s.fragmentShader;
   s.fragmentShader=s.fragmentShader.replace('#include <normal_fragment_maps>','#include <normal_fragment_maps>\nnormal=normalize(normal+vec3(sin(vViewPosition.x*5.+pondTime)*.08,cos(vViewPosition.z*6.-pondTime)*.08,0.));');
   s.fragmentShader=s.fragmentShader.replace('#include <opaque_fragment>',`vec2 puv=pondCoord.xy/max(pondCoord.w,.001);puv+=vec2(sin(puv.y*90.+pondTime),cos(puv.x*110.+pondTime*.7))*.002;vec3 reflection=texture2D(pondMirror,clamp(puv,vec2(.001),vec2(.999))).rgb;float fresnel=.35+.5*pow(clamp(1.-dot(normal,normalize(vViewPosition)),0.,1.),3.);outgoingLight=mix(outgoingLight,reflection*vec3(.75,.9,.86),fresnel*pondEnabled);\n#include <opaque_fragment>`);
  };m.customProgramCacheKey=()=> 'pond-planar-2';
 }
 setEnabled(enabled){this.enabled=enabled;if(this.enabledUniform)this.enabledUniform.value=enabled?1:0;}
 render(){const a=this.app;if(!this.enabled||a.stage!=='butterfly')return;const now=performance.now();this.clock.value=now*.001;if(now-this.last<90)return;this.last=now;
  const c=a.camera,mirror=this.camera;mirror.copy(c);mirror.position.y=.04-c.position.y;const look=c.getWorldDirection(new T.Vector3()).add(c.position);look.y=.04-look.y;mirror.up.set(0,-1,0);mirror.lookAt(look);mirror.updateMatrixWorld();this.matrix.copy(this.bias).multiply(mirror.projectionMatrix).multiply(mirror.matrixWorldInverse);
  const r=a.renderer,old=r.getRenderTarget(),auto=r.shadowMap.autoUpdate,tone=r.toneMapping,planes=r.clippingPlanes;
  this.waters.forEach(w=>w.visible=false);r.shadowMap.autoUpdate=false;r.toneMapping=T.NoToneMapping;r.clippingPlanes=[new T.Plane(new T.Vector3(0,1,0),-.025)];
  try{r.setRenderTarget(this.target);r.clear();r.render(a.scene,mirror);}finally{r.setRenderTarget(old);r.shadowMap.autoUpdate=auto;r.toneMapping=tone;r.clippingPlanes=planes;this.waters.forEach(w=>w.visible=true);}
 }
}

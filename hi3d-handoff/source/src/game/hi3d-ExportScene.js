import * as T from 'three';
import {GLTFExporter} from '../../vendor/exporters/GLTFExporter.js';
// Export a static, fully baked snapshot. Gameplay shaders/sprites remain in code.
export async function exportSnapshot(sources,name){
 const output=new T.Group();output.name=name;output.userData.sparc3dPhysicalUnits={version:1,unit:'meter'};output.userData.kind='static gameplay snapshot';
 for(const source of sources){source.updateMatrixWorld(true);source.traverseVisible(o=>{
  if(!o.isMesh||o.isSprite||(Array.isArray(o.material)?o.material:[o.material]).some(m=>m.isShaderMaterial))return;
  let geometry=o.geometry;
  if(o.isSkinnedMesh){o.skeleton.update();geometry=geometry.clone();const p=new T.Vector3(),pa=geometry.attributes.position;for(let i=0;i<pa.count;i++){o.getVertexPosition(i,p);pa.setXYZ(i,p.x,p.y,p.z);}geometry.deleteAttribute('skinIndex');geometry.deleteAttribute('skinWeight');geometry.computeVertexNormals();}
  if(o.isInstancedMesh){for(let i=0;i<o.count;i++){const matrix=new T.Matrix4();o.getMatrixAt(i,matrix);matrix.premultiply(o.matrixWorld);const m=new T.Mesh(geometry,o.material);m.name='FROG_'+String(i+12).padStart(2,'0');m.applyMatrix4(matrix);output.add(m);}}
  else{const m=new T.Mesh(geometry,o.material);m.name=o.name||'WORLD_SURFACE';m.applyMatrix4(o.matrixWorld);output.add(m);}
 });}
 return await new GLTFExporter().parseAsync(output,{binary:true,onlyVisible:true,maxTextureSize:1024});
}

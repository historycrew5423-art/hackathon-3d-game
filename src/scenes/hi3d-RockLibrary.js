import * as T from 'three';
import {MeshoptDecoder} from '../../vendor/meshopt_decoder.mjs';
// Reuse the detailed rock volumes supplied with the original Baihuling scene.
export async function loadRockLibrary(){
 const response=await fetch(new URL('../../baihuling/assets/rocks_low.bin',import.meta.url));if(!response.ok)throw Error('山石资源加载失败：'+response.status);
 const bytes=new Uint8Array(await response.arrayBuffer());if(new TextDecoder().decode(bytes.slice(0,4))!=='RKS1')throw Error('山石资源格式不匹配');
 const headerLength=new DataView(bytes.buffer).getUint32(4,true),header=JSON.parse(new TextDecoder().decode(bytes.subarray(8,8+headerLength))),offset=8+headerLength;
 await MeshoptDecoder.ready;const result=[];
 for(const entry of header.volumes.filter(v=>['mid','right'].includes(v.name))){
  const data=new Uint8Array(entry.verts*16),idx=new Uint32Array(entry.tris*3);MeshoptDecoder.decodeVertexBuffer(data,entry.verts,16,bytes.subarray(offset+entry.offset,offset+entry.offset+entry.vLen));MeshoptDecoder.decodeIndexBuffer(new Uint8Array(idx.buffer),idx.length,4,bytes.subarray(offset+entry.offset+entry.vLen,offset+entry.offset+entry.vLen+entry.iLen));
  const quant=new Uint16Array(data.buffer),signed=new Int8Array(data.buffer),pos=new Float32Array(entry.verts*3),normal=new Float32Array(entry.verts*3);for(let i=0;i<entry.verts;i++)for(let c=0;c<3;c++){pos[i*3+c]=entry.bmin[c]+quant[i*8+c]*entry.step;normal[i*3+c]=signed[i*16+8+c]/127;}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.BufferAttribute(pos,3));g.setAttribute('normal',new T.BufferAttribute(normal,3));g.setIndex(new T.BufferAttribute(idx,1));g.computeBoundingBox();const box=g.boundingBox,center=box.getCenter(new T.Vector3()),size=box.getSize(new T.Vector3());g.translate(-center.x,-center.y,-center.z);g.scale(2/size.x,1/size.y,2/size.z);const uv=new Float32Array(entry.verts*2);for(let i=0;i<entry.verts;i++){uv[i*2]=Math.atan2(g.attributes.position.getZ(i),g.attributes.position.getX(i))/(Math.PI*2)+.5;uv[i*2+1]=g.attributes.position.getY(i)+.5;}g.setAttribute('uv',new T.BufferAttribute(uv,2));result.push(g);
 }return result;
}

import * as THREE from 'three';
import { CAM_REF, SKULL_O, GATE, BRIDGE, VILLAGE, TERRACE } from './gen/layout.js';

// ---------------------------------------------------------------------------
// 光照和预设视角。布局（坐标）在 gen/layout.js。
// ---------------------------------------------------------------------------

// 方位角：从正北（-Z）顺时针量到东（+X）；仰角：离地平线的角度
export function dirFromAzEl( azDeg, elDeg ) {

	const a = THREE.MathUtils.degToRad( azDeg ), e = THREE.MathUtils.degToRad( elDeg );
	return new THREE.Vector3( Math.sin( a ) * Math.cos( e ), Math.sin( e ), - Math.cos( a ) * Math.cos( e ) ).normalize();

}

// 上午的太阳在东南偏东、身后右侧：白骨岭的正面和右侧受光，骷髅的眼窝、鼻孔、獠牙下有清楚的阴影；
// 左边峭壁朝东的崖面被照亮，右边近处的高崖是背光的（和参考图一致）
export const SUN_AZ = 122, SUN_EL = 33;
export const SUN_DIR = dirFromAzEl( SUN_AZ, SUN_EL );
export const LIGHT_DIR = SUN_DIR.clone();
export const SUN_COLOR = new THREE.Color( 1.0, 0.87, 0.7 );

const v3 = ( a ) => new THREE.Vector3( ...a );

// 预设视角：pos / look / fov（竖直视角）。ground: true 表示 pos.y 是离地高度
export const VIEWS = {
	ref: { pos: [ CAM_REF.pos[ 0 ], 2.0, CAM_REF.pos[ 2 ] ], ground: true, look: CAM_REF.look, fov: CAM_REF.fov },
	skull: { pos: [ 30, 210, - 520 ], look: [ SKULL_O[ 0 ], SKULL_O[ 1 ] - 10, SKULL_O[ 2 ] ], fov: 48 },
	mouth: { pos: [ 60, 250, - 860 ], look: [ 0, 260, - 1080 ], fov: 55 },
	left: { pos: [ - 40, 70, - 90 ], look: [ - 210, 120, - 280 ], fov: 55 },
	terrace: { pos: [ - 10, 30, - 70 ], look: [ TERRACE.x, 8, TERRACE.z - 40 ], fov: 55 },
	gate: { pos: [ - 30, 30, - 230 ], look: [ GATE.x, GATE.y + 10, GATE.z ], fov: 50 },
	village: { pos: [ 0, 14, - 105 ], look: [ VILLAGE.x, 3, VILLAGE.z ], fov: 55 },
	bridge: { pos: [ 20, 18, - 500 ], look: [ BRIDGE.x, BRIDGE.y - 8, BRIDGE.z ], fov: 55 },
	temple: { pos: [ 80, 34, - 190 ], look: [ 142, 14, - 252 ], fov: 55 },
	ledge: { pos: [ - 95, 135, - 300 ], look: [ - 200, 116, - 262 ], fov: 55 },
	ring: { pos: [ - 6, 9, - 30 ], look: [ 20, 1, - 75 ], fov: 55 },
	aerial: { pos: [ 420, 520, 380 ], look: [ - 40, 60, - 560 ], fov: 50 },
	back: { pos: [ 60, 30, - 760 ], look: [ 0, 60, 40 ], fov: 60 }
};

export function viewSpec( name, groundAt ) {

	const v = VIEWS[ name ];
	if ( ! v ) return null;
	const pos = v3( v.pos );
	if ( v.ground ) pos.y += groundAt( pos.x, pos.z );
	return { pos, look: v3( v.look ), fov: v.fov };

}

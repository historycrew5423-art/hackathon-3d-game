import * as THREE from 'three';
import { SUN_DIR, SUN_COLOR } from '../config.js';

// ---------------------------------------------------------------------------
// 空气透视：替换 three 的雾代码块，所有内置材质共用。
// 两层按高度指数衰减的雾：一层是整个天空的薄霾（标高 900 米，远山发蓝），
// 一层贴着谷底（标高约 55 米，白骨岭脚下、峡谷里雾蒙蒙的）。两层都按解析式积分，没有步进。
// 朝太阳方向的空气发暖光；蓝光的衰减比红光大一点，所以越远越偏蓝。
//
// 参数借用 three 自带的雾 uniform 传进去（three 每帧会自动把 scene.fog 的值写给所有材质）：
//   fog.color.r = 薄霾密度 × 1000，fog.color.g = 谷底雾密度 × 1000，fog.color.b = 霾的亮度，fog.near = 谷底雾标高
// 自己写的 ShaderMaterial 直接用 uniform uAtmos（见 atmosUniforms）。
// ---------------------------------------------------------------------------

const f = ( v ) => v.toFixed( 5 );
export const ATMOS_BODY = /* glsl */ `
	const vec3 SUN_DIR = vec3( ${ f( SUN_DIR.x ) }, ${ f( SUN_DIR.y ) }, ${ f( SUN_DIR.z ) } );
	const vec3 SUN_COLOR = vec3( ${ f( SUN_COLOR.r ) }, ${ f( SUN_COLOR.g ) }, ${ f( SUN_COLOR.b ) } );
	const vec3 HAZE = vec3( 0.56, 0.68, 0.88 );
	const vec3 HAZE_SUN = vec3( 1.25, 1.0, 0.78 );
	const vec3 MIST = vec3( 0.86, 0.9, 0.96 );
	const vec3 EXTINCT = vec3( 0.74, 0.92, 1.25 );
	float layerDepth( float roY, float rdY, float dist, float base, float H ) {
		float k = rdY / H;
		float integ = abs( k * dist ) < 1e-4 ? dist : ( 1.0 - exp( - k * dist ) ) / k;
		return exp( - clamp( ( roY - base ) / H, - 20.0, 60.0 ) ) * max( integ, 0.0 );
	}
	void atmosTerms( vec3 wp, out vec3 T, out vec3 inCol ) {
		vec3 ro = cameraPosition;
		vec3 rd = wp - ro;
		float dist = length( rd );
		rd /= max( dist, 1e-4 );
		float hz = ATM.x * layerDepth( ro.y, rd.y, dist, 0.0, 900.0 );
		float ms = ATM.y * layerDepth( ro.y, rd.y, dist, - 10.0, ATM.w );
		T = exp( - ( hz * EXTINCT + ms * vec3( 0.95, 0.98, 1.02 ) ) );
		float s = clamp( dot( rd, SUN_DIR ), 0.0, 1.0 );
		vec3 hazeCol = mix( HAZE, HAZE_SUN, pow( s, 5.0 ) * 0.55 + pow( s, 40.0 ) * 0.45 );
		vec3 mistCol = MIST * ( 0.92 + 0.35 * pow( s, 4.0 ) );
		float wm = ms / max( hz + ms, 1e-5 );
		inCol = mix( hazeCol, mistCol, wm ) * ATM.z;
	}
	vec3 atmosApply( vec3 col, vec3 wp ) {
		vec3 T, inCol;
		atmosTerms( wp, T, inCol );
		return col * T + inCol * ( 1.0 - T );
	}
	vec3 atmosTrans( vec3 wp ) {
		vec3 T, inCol;
		atmosTerms( wp, T, inCol );
		return T;
	}
`;

// 自己的 ShaderMaterial 用：声明 uniform uAtmos 并引入函数
export const ATMOS = /* glsl */ `
	uniform vec4 uAtmos;
	#define ATM uAtmos
	${ ATMOS_BODY }
`;

export const ATMOS_DEFAULT = { haze: 0.00024, mist: 0.0009, bright: 1.0, mistH: 45 };
export const atmosUniforms = { uAtmos: { value: new THREE.Vector4( ATMOS_DEFAULT.haze, ATMOS_DEFAULT.mist, ATMOS_DEFAULT.bright, ATMOS_DEFAULT.mistH ) } };

export function makeSceneFog() {

	const a = atmosUniforms.uAtmos.value;
	const fog = new THREE.Fog( new THREE.Color( a.x * 1000, a.y * 1000, a.z ), a.w, 1e9 );
	return fog;

}

// 改参数：同时更新内置材质（scene.fog）和自定义材质（uAtmos）
export function setAtmos( scene, { haze, mist, bright, mistH } ) {

	const a = atmosUniforms.uAtmos.value;
	if ( haze !== undefined ) a.x = haze;
	if ( mist !== undefined ) a.y = mist;
	if ( bright !== undefined ) a.z = bright;
	if ( mistH !== undefined ) a.w = mistH;
	if ( scene.fog ) {

		scene.fog.color.setRGB( a.x * 1000, a.y * 1000, a.z );
		scene.fog.near = a.w;

	}

}

THREE.ShaderChunk.fog_pars_vertex = /* glsl */ `
	#ifdef USE_FOG
		varying vec3 vFogWorldPos;
	#endif
`;
THREE.ShaderChunk.fog_vertex = /* glsl */ `
	#ifdef USE_FOG
		vFogWorldPos = cameraPosition + transpose( mat3( viewMatrix ) ) * mvPosition.xyz;
	#endif
`;
THREE.ShaderChunk.fog_pars_fragment = /* glsl */ `
	#ifdef USE_FOG
		uniform vec3 fogColor;
		uniform float fogNear;
		uniform float fogFar;
		varying vec3 vFogWorldPos;
		#define ATM vec4( fogColor.x * 0.001, fogColor.y * 0.001, fogColor.z, fogNear )
		${ ATMOS_BODY }
	#endif
`;
THREE.ShaderChunk.fog_fragment = /* glsl */ `
	#ifdef USE_FOG
		gl_FragColor.rgb = atmosApply( gl_FragColor.rgb, vFogWorldPos );
	#endif
`;

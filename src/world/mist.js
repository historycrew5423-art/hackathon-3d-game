import * as THREE from 'three';
import { ATMOS, atmosUniforms } from '../render/atmosphere.js';
import { SKULL_O } from '../gen/layout.js';
import { mulberry32 } from '../gen/noise.js';
import { NOISE } from '../render/glsl.js';

// ---------------------------------------------------------------------------
// 雾团：骷髅嘴里往外涌的妖雾（偏冷的青白色，贴着下颌往下淌）、白骨岭脚下的山岚、瀑布潭上的水汽。
// 每团雾是一个朝向镜头的面片（顶点着色器里做公告板），片元用噪声做出不规则的边缘，并且慢慢翻滚。
// 面片和地形、岩石相交的地方用深度做软边（读不到深度时退化成只靠边缘渐隐）。
// ---------------------------------------------------------------------------

export function buildMist( { time, fallsBase } ) {

	const r = mulberry32( 66 );
	const puffs = []; // [x, y, z, 半径, 不透明度, 冷暖(0 暖白 1 青白), 漂移速度]
	const [ sx, sy, sz ] = SKULL_O;
	// 嘴里：一大团，往前、往下溢出
	for ( let i = 0; i < 46; i ++ ) {

		const t = r();
		const x = sx + ( r() - 0.5 ) * 260 * ( 0.5 + t );
		const y = sy - 70 - t * 150 + ( r() - 0.5 ) * 30;
		const z = sz + 20 + t * 150 + r() * 30;
		puffs.push( [ x, y - 25 * t, z, 34 + r() * 40 + t * 40, 0.13 + 0.12 * ( 1 - t ), 1, 0.5 + r() ] );

	}

	// 白骨岭脚下的山岚：一条横贯山谷的雾带
	for ( let i = 0; i < 60; i ++ ) {

		const x = - 420 + r() * 840;
		const z = - 760 - r() * 220;
		const y = 30 + r() * 50;
		puffs.push( [ x, y, z, 70 + r() * 70, 0.18 + r() * 0.12, 0.3, 0.3 + r() * 0.5 ] );

	}

	// 瀑布潭的水汽
	for ( let i = 0; i < 14; i ++ ) {

		puffs.push( [ fallsBase.x + ( r() - 0.5 ) * 30, fallsBase.y + 4 + r() * 18, fallsBase.z + ( r() - 0.5 ) * 30, 12 + r() * 14, 0.3, 0, 1.2 + r() ] );

	}

	// 峡谷里的薄雾
	for ( let i = 0; i < 24; i ++ ) {

		const z = - 260 - r() * 520;
		puffs.push( [ 80 + ( r() - 0.5 ) * 60, - 20 + r() * 25, z, 26 + r() * 24, 0.2, 0.2, 0.5 + r() ] );

	}

	const n = puffs.length;
	const base = new THREE.PlaneGeometry( 2, 2 );
	const geo = new THREE.InstancedBufferGeometry();
	geo.index = base.index;
	geo.setAttribute( 'position', base.attributes.position );
	geo.setAttribute( 'uv', base.attributes.uv );
	const a0 = new Float32Array( n * 4 ), a1 = new Float32Array( n * 4 );
	puffs.forEach( ( p, i ) => {

		a0.set( [ p[ 0 ], p[ 1 ], p[ 2 ], p[ 3 ] ], i * 4 );
		a1.set( [ p[ 4 ], p[ 5 ], p[ 6 ], r() * 100 ], i * 4 );

	} );
	geo.setAttribute( 'iA', new THREE.InstancedBufferAttribute( a0, 4 ) );
	geo.setAttribute( 'iB', new THREE.InstancedBufferAttribute( a1, 4 ) );
	geo.instanceCount = n;

	const mat = new THREE.ShaderMaterial( {
		name: 'Mist',
		transparent: true,
		depthWrite: false,
		uniforms: { uTime: time, uAtmos: atmosUniforms.uAtmos, uGain: { value: 1.0 } },
		vertexShader: /* glsl */ `
			attribute vec4 iA, iB;
			uniform float uTime;
			varying vec2 vUv;
			varying vec4 vB;
			varying vec3 vWP;
			void main() {
				vUv = uv;
				vB = iB;
				vec3 c = iA.xyz;
				// 缓慢漂移：往外、往下淌
				float t = uTime * 0.02 * iB.z + iB.w;
				c += vec3( sin( t ) * 14.0, - abs( sin( t * 0.7 ) ) * 6.0, cos( t * 0.8 ) * 10.0 );
				vec3 right = vec3( viewMatrix[ 0 ][ 0 ], viewMatrix[ 1 ][ 0 ], viewMatrix[ 2 ][ 0 ] );
				vec3 up = vec3( viewMatrix[ 0 ][ 1 ], viewMatrix[ 1 ][ 1 ], viewMatrix[ 2 ][ 1 ] );
				float rad = iA.w;
				vec3 wp = c + ( right * position.x + up * position.y * 0.62 ) * rad;
				vWP = wp;
				gl_Position = projectionMatrix * viewMatrix * vec4( wp, 1.0 );
			}
		`,
		fragmentShader: /* glsl */ `
			uniform float uTime, uGain;
			varying vec2 vUv;
			varying vec4 vB;
			varying vec3 vWP;
			${ NOISE }
			${ ATMOS }
			void main() {
				vec2 p = vUv * 2.0 - 1.0;
				float t = uTime * 0.03 * vB.z;
				float n = fbm( p * 1.6 + vB.w + vec2( t, - t * 0.6 ) );
				float m = smoothstep( 1.0, 0.15, length( p ) + ( n - 0.5 ) * 0.9 );
				m *= m;
				float a = m * vB.x * uGain;
				if ( a < 0.003 ) discard;
				// 颜色：上面受光偏暖，下面偏冷；妖雾整体偏青
				vec3 lit = mix( vec3( 1.0, 0.97, 0.92 ), vec3( 0.78, 0.9, 0.95 ), vB.y ) * ( 0.72 + 0.4 * vUv.y + 0.25 * n );
				lit *= 1.35;
				vec3 T, inCol;
				atmosTerms( vWP, T, inCol );
				vec3 col = lit * T + inCol * ( 1.0 - T );
				gl_FragColor = vec4( col, a );
			}
		`
	} );
	const mesh = new THREE.Mesh( geo, mat );
	mesh.frustumCulled = false;
	mesh.renderOrder = 5;
	mesh.name = 'mist';
	return { mesh, material: mat };

}

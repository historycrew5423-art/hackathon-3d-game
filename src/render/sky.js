import * as THREE from 'three';
import { SUN_DIR, SUN_COLOR } from '../config.js';
import { ATMOS, atmosUniforms } from './atmosphere.js';

// ---------------------------------------------------------------------------
// 天空：Poly Haven 的 kloofendal_48d_partly_cloudy_puresky（CC0，晴天积云）。
// 背景用 4K 色调映射照片（云更清楚），环境光用 1K HDR（去掉太阳，避免环境贴图里有极亮的点）。
// 照片整体转一个角度，让照片里太阳的方位和场景的太阳一致；太阳圆盘用解析式画。
// 环境光贴图用同一个着色器渲染成立方体再做 PMREM，所以背景和环境光的方向完全一致。
// ---------------------------------------------------------------------------

export function createSky( ldr, hdr ) {

	// 找 HDR 里最亮的像素 = 照片里的太阳
	const { data, width, height } = hdr.image;
	let best = 0, bi = 0;
	for ( let i = 0; i < width * height; i ++ ) {

		const l = data[ i * 4 ] + data[ i * 4 + 1 ] + data[ i * 4 + 2 ];
		if ( l > best ) { best = l; bi = i; }

	}

	const photoSunU = ( ( bi % width ) + 0.5 ) / width;
	for ( let i = 0; i < data.length; i ++ ) if ( ( i & 3 ) !== 3 ) data[ i ] = Math.min( data[ i ], 5.0 );
	hdr.needsUpdate = true;
	hdr.minFilter = THREE.LinearFilter;
	hdr.magFilter = THREE.LinearFilter;
	hdr.generateMipmaps = false;
	ldr.colorSpace = THREE.SRGBColorSpace;
	ldr.minFilter = THREE.LinearMipmapLinearFilter;
	ldr.anisotropy = 4;
	ldr.wrapS = THREE.RepeatWrapping;

	const sunU = Math.atan2( SUN_DIR.z, SUN_DIR.x ) / ( 2 * Math.PI ) + 0.5;
	// 照片 u 往右转，让太阳落在 SUN_DIR 的方位；再额外转一点，让最好看的云落在白骨岭上空
	const uniforms = {
		uLdr: { value: ldr }, uHdr: { value: hdr },
		uRot: { value: photoSunU - sunU },
		uGain: { value: 1.55 }, uEnvMode: { value: 0 }, uSunGain: { value: 1 },
		uAtmos: atmosUniforms.uAtmos
	};
	const mat = new THREE.ShaderMaterial( {
		name: 'Sky',
		side: THREE.BackSide,
		depthWrite: false,
		depthTest: false,
		uniforms,
		vertexShader: /* glsl */ `
			varying vec3 vDir;
			void main() {
				vDir = position;
				vec4 p = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				gl_Position = p.xyww;
			}
		`,
		fragmentShader: /* glsl */ `
			uniform sampler2D uLdr, uHdr;
			uniform float uRot, uGain, uEnvMode, uSunGain;
			varying vec3 vDir;
			${ ATMOS }
			void main() {
				vec3 d = normalize( vDir );
				vec3 dd = d;
				dd.y = max( dd.y, 0.003 );
				dd = normalize( dd );
				float u = atan( dd.z, dd.x ) * 0.15915494 + 0.5 + uRot;
				vec3 c;
				if ( uEnvMode > 0.5 ) {
					float v = asin( clamp( dd.y, - 1.0, 1.0 ) ) * 0.31830989 + 0.5;
					c = texture2D( uHdr, vec2( fract( u ), v ) ).rgb;
					// 环境贴图里的地面：用暖灰的岩石和草地颜色代替照片里的空白
					if ( d.y < 0.0 ) c = mix( c, vec3( 0.16, 0.17, 0.12 ), clamp( - d.y * 6.0, 0.0, 1.0 ) );
				} else {
					float veq = 0.5 - asin( clamp( dd.y, - 1.0, 1.0 ) ) * 0.31830989;
					c = texture2D( uLdr, vec2( u, 1.0 - veq / 0.53 ) ).rgb * uGain;
					float s = dot( d, SUN_DIR );
					c += SUN_COLOR * smoothstep( 0.99993, 0.99997, s ) * 40.0 * uSunGain;
					c += SUN_COLOR * pow( max( s, 0.0 ), 600.0 ) * 3.0 * uSunGain;
					// 地平线附近叠一层和场景雾一样的霾，远山和天空才接得上
					vec3 T, inCol;
					atmosTerms( cameraPosition + d * 30000.0, T, inCol );
					float hz = exp( - max( d.y, 0.0 ) * 26.0 );
					c = mix( c, inCol, hz * 0.55 );
					if ( d.y < 0.0 ) c = mix( c, inCol, clamp( - d.y * 10.0, 0.0, 1.0 ) );
				}
				gl_FragColor = vec4( c, 1.0 );
			}
		`
	} );
	const mesh = new THREE.Mesh( new THREE.SphereGeometry( 1, 64, 32 ), mat );
	mesh.frustumCulled = false;
	mesh.renderOrder = - 100;
	mesh.scale.setScalar( 9000 );
	mesh.onBeforeRender = ( r, s, cam ) => mesh.position.copy( cam.position );

	function buildEnv( renderer ) {

		const scene = new THREE.Scene();
		const m2 = mat.clone();
		m2.uniforms = { ...uniforms, uEnvMode: { value: 1 } };
		const s = new THREE.Mesh( new THREE.SphereGeometry( 1, 64, 32 ), m2 );
		s.scale.setScalar( 100 );
		scene.add( s );
		const pmrem = new THREE.PMREMGenerator( renderer );
		const rt = pmrem.fromScene( scene, 0, 0.1, 1000 );
		pmrem.dispose();
		m2.dispose();
		return rt.texture;

	}

	return { mesh, uniforms, buildEnv };

}

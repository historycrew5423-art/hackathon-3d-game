import * as THREE from 'three';
import { NOISE, TRIPLANAR } from './glsl.js';
import { TERRACE } from '../gen/layout.js';

// ---------------------------------------------------------------------------
// 岩石和地形材质。都是 MeshStandardMaterial + onBeforeCompile 注入，保留 three 自带的光照、阴影和雾。
// 每种材质要有不同的 customProgramCacheKey（否则 three 会复用同一个着色器）。
// ---------------------------------------------------------------------------

export function prepTex( t, srgb = true, repeat = true, aniso = 8 ) {

	if ( srgb ) t.colorSpace = THREE.SRGBColorSpace;
	if ( repeat ) t.wrapS = t.wrapT = THREE.RepeatWrapping;
	t.anisotropy = aniso;
	return t;

}

const WORLD_VARYINGS_VS = /* glsl */ `
	varying vec3 vWPos;
	varying vec3 vWNor;
`;
const WORLD_VARYINGS_SET = /* glsl */ `
	{
		vec4 wp4 = vec4( transformed, 1.0 );
		#ifdef USE_INSTANCING
			wp4 = instanceMatrix * wp4;
		#endif
		vWPos = ( modelMatrix * wp4 ).xyz;
		vec3 on = objectNormal;
		#ifdef USE_INSTANCING
			on = mat3( instanceMatrix ) * on;
		#endif
		vWNor = normalize( mat3( modelMatrix ) * on );
	}
`;

// 岩石共用的颜色处理（地形的陡坡也用，岩石和地面才能接上）
const ROCK_COLOR = /* glsl */ `
	vec3 limestone( sampler2D tc, vec3 p, vec3 w ) {
		vec3 c1 = triSample( tc, p, w, 1.0 / 9.0 ).rgb;
		vec3 c2 = triSample( tc, p * 0.21 + 37.0, w, 1.0 / 9.0 ).rgb;
		vec3 c = c1 * mix( vec3( 1.0 ), c2 / max( dot( c2, vec3( 0.3333 ) ), 0.05 ), 0.45 );
		float l = dot( c, vec3( 0.299, 0.587, 0.114 ) );
		c = mix( vec3( l ), c, 0.4 ) * vec3( 1.0, 0.985, 0.955 );
		float mv = vnoise3( p / 75.0 ) * 0.65 + vnoise3( p / 21.0 ) * 0.35;
		c *= mix( vec3( 0.84, 0.88, 0.92 ), vec3( 1.1, 1.03, 0.92 ), mv );
		return c;
	}
`;

// ---------------------------------------------------------------------------
// 岩石：灰白的石灰岩（竖向水渍、朝上的面长苔藓）和白骨（骷髅部分，aux.g）。
// aux.r = SDF 算的遮蔽，aux.b = 洞穴深处（嘴、眼窝里发黑）。
// ---------------------------------------------------------------------------
export function rockMaterial( T, opts = {} ) {

	const m = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0.86, metalness: 0, envMapIntensity: opts.env ?? 1.0 } );
	m.onBeforeCompile = ( shader ) => {

		Object.assign( shader.uniforms, {
			tCliff: { value: T.cliff_diff }, tCliffN: { value: T.cliff_nor },
			tBone: { value: T.bone_diff }, tBoneN: { value: T.bone_nor },
			tGrass: { value: T.grass_diff }
		} );
		shader.vertexShader = shader.vertexShader
			.replace( '#include <common>', `#include <common>
				attribute vec4 aux;
				varying vec4 vAux;
				${ WORLD_VARYINGS_VS }` )
			.replace( '#include <fog_vertex>', `#include <fog_vertex>
				${ WORLD_VARYINGS_SET }
				vAux = aux;` );
		shader.fragmentShader = shader.fragmentShader
			.replace( '#include <common>', `#include <common>
				uniform sampler2D tCliff, tCliffN, tBone, tBoneN, tGrass;
				varying vec4 vAux;
				${ WORLD_VARYINGS_VS }
				${ NOISE }
				${ TRIPLANAR }
				${ ROCK_COLOR }
				float gMoss = 0.0, gBone = 0.0;` )
			.replace( '#include <color_fragment>', `#include <color_fragment>
			{
				vec3 n = normalize( vWNor );
				vec3 w = triW( n );
				vec3 p = vWPos;
				// 白骨和山体的交界不规则：用噪声把边缘打散
				float bone = smoothstep( 0.2, 0.8, vAux.g + ( vnoise3( p / 16.0 ) - 0.5 ) * 0.55 * ( 1.0 - vAux.g * vAux.g ) );
				float cav = vAux.b;
				float cover = vAux.a;
				vec3 cliff = limestone( tCliff, p, w );
				// 竖向的黑色水渍（石灰岩峭壁的特征）
				float streak = smoothstep( 0.5, 0.8, vnoise( vec2( ( p.x + p.z ) * 0.3, p.y * 0.011 ) ) * 0.7 + vnoise( vec2( ( p.x - p.z ) * 0.9, p.y * 0.04 ) ) * 0.3 );
				cliff *= 1.0 - streak * 0.45 * ( 1.0 - smoothstep( 0.2, 0.6, n.y ) );
				// 白骨：象牙白，裂缝里有一点灰
				vec3 b1 = triSample( tBone, p, w, 1.0 / 7.0 ).rgb;
				vec3 b2 = triSample( tBone, p * 0.23 + 11.0, w, 1.0 / 7.0 ).rgb;
				float lb = dot( b1 * mix( vec3( 1.0 ), b2 / max( dot( b2, vec3( 0.333 ) ), 0.05 ), 0.35 ), vec3( 0.299, 0.587, 0.114 ) );
				vec3 boneC = vec3( 0.25 + lb * 0.75 ) * vec3( 1.08, 1.04, 0.95 ) * 1.18;
				boneC *= 0.88 + 0.12 * vnoise3( p / 13.0 );
				// 雨水冲出的浅灰道子（不画裂纹线：噪声等值线画出来像地图上的等高线）
				boneC *= 1.0 - streak * 0.16;
				vec3 col = mix( cliff, boneC, bone );
				// 苔藓和草：朝上的面多，骨头上很少
				float up = smoothstep( 0.48, 0.86, n.y + ( vnoise( p.xz * 0.11 ) - 0.5 ) * 0.45 );
				float mossN = smoothstep( 0.3, 0.62, fbm3( p.xz * 0.045 + p.y * 0.01 ) );
				float moss = up * mix( 0.5, 1.0, mossN ) * ( 1.0 - bone * 0.92 );
				// 崖面上零星的苔藓斑
				moss = max( moss, smoothstep( 0.62, 0.8, vnoise3( p / 6.0 ) ) * 0.55 * ( 1.0 - bone ) * smoothstep( - 0.2, 0.3, n.y ) );
				vec3 g = texture2D( tGrass, p.xz / 4.2 ).rgb * vec3( 0.72, 0.86, 0.56 );
				col = mix( col, g, moss );
				// 植被覆盖（远处的石峰几乎全是绿的）：深绿的灌丛斑块
				float veg = smoothstep( 0.42, 0.62, vnoise3( p / 15.0 ) * 0.7 + vnoise3( p / 4.0 ) * 0.3 + n.y * 0.35 + cover * 0.55 - 0.25 ) * smoothstep( 0.0, 0.1, cover ) * ( 1.0 - bone );
				vec3 vegC = vec3( 0.07, 0.1, 0.045 ) * ( 0.7 + 0.6 * vnoise3( p / 3.0 ) );
				col = mix( col, vegC, veg * min( 1.0, cover * 2.2 ) );
				moss = max( moss, veg * min( 1.0, cover * 2.2 ) );
				// 洞穴深处
				col *= mix( 1.0, 0.035, cav );
				diffuseColor.rgb = col;
				gMoss = moss; gBone = bone;
			}` )
			.replace( '#include <roughnessmap_fragment>', `
				float roughnessFactor = mix( mix( 0.9, 0.58, gBone ), 0.96, gMoss );` )
			.replace( '#include <normal_fragment_maps>', `
			{
				vec3 n = normalize( vWNor );
				vec3 w = triW( n );
				vec3 nc = triNormal( tCliffN, vWPos, n, w, 1.0 / 9.0, 1.15 );
				vec3 nb = triNormal( tBoneN, vWPos, n, w, 1.0 / 7.0, 0.65 );
				vec3 nw = normalize( mix( nc, nb, gBone ) );
				nw = normalize( mix( nw, n, gMoss * 0.55 ) );
				normal = normalize( ( viewMatrix * vec4( nw, 0.0 ) ).xyz );
			}` )
			.replace( '#include <aomap_fragment>', `
			{
				float ao = vAux.r;
				ao = ao * ao;
				reflectedLight.indirectDiffuse *= ao;
				reflectedLight.indirectSpecular *= ao;
				reflectedLight.directDiffuse *= mix( 1.0, ao, 0.3 );
				reflectedLight.directSpecular *= ao;
			}` );

	};

	m.customProgramCacheKey = () => 'rock-v1';
	return m;

}

// ---------------------------------------------------------------------------
// 地形：草地、林下（落叶松针）、山路（碎石）、陡坡露岩、梯田（水田和稻田）、水边的湿泥、远山的森林色。
// 地表遮罩和细法线来自核心区的贴图（1 米一个像素），核心区外用程序噪声。
// ---------------------------------------------------------------------------
export function terrainMaterial( T, maps, opts = {} ) {

	const m = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness: 0.92, metalness: 0, envMapIntensity: 0.9 } );
	m.onBeforeCompile = ( shader ) => {

		Object.assign( shader.uniforms, {
			tGrass: { value: T.grass_diff }, tGrassN: { value: T.grass_nor },
			tForest: { value: T.forest_diff }, tForestN: { value: T.forest_nor },
			tTrail: { value: T.trail_diff }, tTrailN: { value: T.trail_nor },
			tCliff: { value: T.cliff_diff }, tCliffN: { value: T.cliff_nor },
			tMask: { value: maps.mask }, tNorm: { value: maps.normal },
			uMapRect: { value: new THREE.Vector4( maps.x0, maps.z0, 1 / maps.w, 1 / maps.d ) },
			uTime: opts.time || { value: 0 }
		} );
		shader.vertexShader = shader.vertexShader
			.replace( '#include <common>', `#include <common>
				${ WORLD_VARYINGS_VS }` )
			.replace( '#include <fog_vertex>', `#include <fog_vertex>
				${ WORLD_VARYINGS_SET }` );
		shader.fragmentShader = shader.fragmentShader
			.replace( '#include <common>', `#include <common>
				uniform sampler2D tGrass, tGrassN, tForest, tForestN, tTrail, tTrailN, tCliff, tCliffN, tMask, tNorm;
				uniform vec4 uMapRect;
				uniform float uTime;
				${ WORLD_VARYINGS_VS }
				${ NOISE }
				${ TRIPLANAR }
				${ ROCK_COLOR }
				vec3 gN; float gRough = 0.92; float gWet = 0.0; float gPaddy = 0.0; float gRockW = 0.0; vec4 gM;` )
			.replace( '#include <color_fragment>', `#include <color_fragment>
			{
				vec3 p = vWPos;
				vec2 muv = ( p.xz - uMapRect.xy ) * uMapRect.zw;
				float inMap = step( 0.0, muv.x ) * step( muv.x, 1.0 ) * step( 0.0, muv.y ) * step( muv.y, 1.0 );
				// 贴图边缘 40 米内淡出到程序噪声
				vec2 ed = min( muv, 1.0 - muv ) / uMapRect.zw;
				float mapW = inMap * smoothstep( 0.0, 40.0, min( ed.x, ed.y ) );
				vec4 M = texture2D( tMask, muv ) * mapW;
				vec3 n = normalize( vWNor );
				if ( mapW > 0.0 ) {
					vec4 nt = texture2D( tNorm, muv );
					vec3 nm = normalize( vec3( nt.r * 2.0 - 1.0, nt.b, nt.g * 2.0 - 1.0 ) );
					n = normalize( mix( n, nm, mapW ) );
				}
				float slope = 1.0 - n.y;
				float dist = length( p - cameraPosition );
				// 草地：细节 + 大尺度色斑（有的地方偏黄绿，有的地方偏深绿）
				vec3 gr = texture2D( tGrass, p.xz / 3.6 ).rgb;
				vec3 grM = texture2D( tGrass, p.xz / 37.0 + 0.37 ).rgb;
				gr *= mix( vec3( 1.0 ), grM / max( dot( grM, vec3( 0.333 ) ), 0.05 ), 0.5 );
				float pv = fbm3( p.xz * 0.011 );
				// 参考图的草地是饱和的嫩绿，暖色的阳光照上去容易发黄，所以底色要偏青一点
				float lg = dot( gr, vec3( 0.3, 0.59, 0.11 ) );
				gr = mix( vec3( lg ), gr, 1.2 ) * mix( vec3( 0.34, 0.68, 0.2 ), vec3( 0.5, 0.8, 0.22 ), pv );
				// 林下
				vec3 fo = texture2D( tForest, p.xz / 4.0 ).rgb * vec3( 0.7, 0.72, 0.6 );
				// 山路
				vec3 tr = texture2D( tTrail, p.xz / 3.2 ).rgb * vec3( 1.02, 0.98, 0.9 );
				// 陡坡露岩
				vec3 w = triW( n );
				vec3 rk = limestone( tCliff, p, w );
				float rockW = smoothstep( 0.3, 0.52, slope + ( vnoise( p.xz * 0.07 ) - 0.5 ) * 0.22 );
				// 核心区外：程序生成的森林和岩石
				float farForest = smoothstep( 0.3, 0.46, fbm3( p.xz / 210.0 ) + ( 1.0 - n.y ) * 0.3 ) * ( 1.0 - mapW );
				float forest = max( M.a, farForest );
				vec3 canopy = vec3( 0.075, 0.11, 0.05 ) * ( 0.6 + 0.8 * vnoise( p.xz / 9.0 ) ) * ( 0.8 + 0.4 * vnoise( p.xz / 70.0 ) );
				vec3 col = gr;
				// 林下地面：近处是落叶松针，远处（树冠盖住）是深绿
				vec3 forestCol = mix( fo, canopy, smoothstep( 120.0, 600.0, dist ) * 0.85 + farForest * 0.15 );
				col = mix( col, forestCol, forest * 0.9 );
				// 梯田：平的田面是水田或稻田
				float paddy = 0.0;
				if ( M.b > 0.3 ) {
					float flat0 = smoothstep( 0.993, 0.999, n.y );
					float idx = floor( p.y / ${ TERRACE.step.toFixed( 4 ) } + 0.02 );
					float r = hash12( vec2( idx * 1.37, floor( ( p.x + p.z * 0.3 ) / 70.0 ) ) );
					float flooded = step( 0.58, r );
					vec3 rice = mix( vec3( 0.12, 0.3, 0.05 ), vec3( 0.24, 0.46, 0.08 ), vnoise( p.xz * 0.15 ) ) * ( 0.9 + 0.2 * vnoise( p.xz * 2.1 ) );
					// 秧苗成行：近处能看到一排排
					float rows = smoothstep( 0.3, 0.7, sin( ( p.x * 0.8 + p.z * 0.6 ) * 9.0 ) * 0.5 + 0.5 ) * smoothstep( 60.0, 15.0, dist );
					vec3 water = vec3( 0.03, 0.045, 0.04 );
					vec3 pc = mix( rice * mix( 1.0, 0.75, rows ), mix( water, rice * 0.7, rows * 0.4 + 0.1 ), flooded );
					paddy = flat0 * smoothstep( 0.3, 0.6, M.b );
					col = mix( col, pc, paddy );
					gPaddy = paddy * flooded;
					// 田埂和陡坎：长草的土坎
					col = mix( col, gr * vec3( 0.8, 0.85, 0.7 ), ( 1.0 - flat0 ) * smoothstep( 0.3, 0.6, M.b ) * 0.5 );
				}
				col = mix( col, tr, M.r );
				col = mix( col, rk, rockW * ( 1.0 - M.r ) * ( 1.0 - paddy ) );
				// 水边湿泥
				float wet = smoothstep( 0.05, 0.6, M.g ) * ( 1.0 - paddy );
				col = mix( col, col * vec3( 0.42, 0.4, 0.36 ), wet );
				diffuseColor.rgb = col;
				gN = n; gWet = wet; gRockW = rockW; gM = M;
				gRough = mix( mix( 0.93, 0.88, rockW ), 0.45, wet * 0.6 );
				gRough = mix( gRough, 0.05, gPaddy );
			}` )
			.replace( '#include <roughnessmap_fragment>', `
				float roughnessFactor = gRough;` )
			.replace( '#include <normal_fragment_maps>', `
			{
				vec3 n = gN;
				vec3 p = vWPos;
				// 细节法线：草、路、岩石按权重混合；水田的田面不加（保持镜面）
				vec3 ng = texture2D( tGrassN, p.xz / 3.6 ).xyz * 2.0 - 1.0;
				vec3 nt = texture2D( tTrailN, p.xz / 3.2 ).xyz * 2.0 - 1.0;
				vec3 nf = texture2D( tForestN, p.xz / 4.0 ).xyz * 2.0 - 1.0;
				vec3 nd = mix( mix( ng, nf, gM.a * 0.9 ), nt, gM.r );
				vec3 nw = normalize( vec3( n.x + nd.x * 0.9 * n.y, n.y, n.z + nd.y * 0.9 * n.y ) );
				vec3 w = triW( n );
				vec3 nr = triNormal( tCliffN, p, n, w, 1.0 / 9.0, 1.1 );
				nw = normalize( mix( nw, nr, gRockW ) );
				nw = normalize( mix( nw, n, gPaddy ) );
				// 水田：细小的波纹
				if ( gPaddy > 0.01 ) {
					vec2 q = p.xz * 0.9 + uTime * vec2( 0.3, 0.2 );
					vec3 rip = vec3( vnoise( q ) - 0.5, 0.0, vnoise( q + 7.3 ) - 0.5 ) * 0.06;
					nw = normalize( mix( nw, vec3( 0.0, 1.0, 0.0 ) + rip, gPaddy ) );
				}
				normal = normalize( ( viewMatrix * vec4( nw, 0.0 ) ).xyz );
			}` );

	};

	m.customProgramCacheKey = () => 'terrain-v1';
	return m;

}

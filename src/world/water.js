import * as THREE from 'three';
import { riverL } from '../gen/terrain.js';
import { RIVER_BED, RIVER_HALF, POND, FALLS } from '../gen/layout.js';
import { smoothstep } from '../gen/noise.js';
import { NOISE } from '../render/glsl.js';

// ---------------------------------------------------------------------------
// 水：峡谷里的河（沿河道的一条带子，水面略低于两岸）、村口的水塘、东北角崖上的瀑布。
// 水面用 MeshStandardMaterial（反射环境贴图、接收阴影、走空气透视），法线在着色器里按流向滚动。
// 瀑布是贴着崖面的一条带子，片元里用竖向拉长、往下流动的噪声画水丝，底部有白沫。
// ---------------------------------------------------------------------------

function waterMaterial( time, opts = {} ) {

	const m = new THREE.MeshStandardMaterial( { color: opts.color ?? 0x0e2b2a, roughness: 0.06, metalness: 0, envMapIntensity: 1.25 } );
	m.onBeforeCompile = ( shader ) => {

		shader.uniforms.uTime = time;
		shader.vertexShader = shader.vertexShader
			.replace( '#include <common>', '#include <common>\nattribute vec2 flow;\nvarying vec2 vFlow;\nvarying vec3 vWP;' )
			.replace( '#include <fog_vertex>', '#include <fog_vertex>\nvFlow = flow;\nvWP = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;' );
		shader.fragmentShader = shader.fragmentShader
			.replace( '#include <common>', `#include <common>
				uniform float uTime;
				varying vec2 vFlow;
				varying vec3 vWP;
				${ NOISE }
				float gFoam = 0.0;` )
			.replace( '#include <color_fragment>', `#include <color_fragment>
			{
				// 白沫：沿流向拉长的条纹，岸边（vFlow.y 接近 ±1）更多
				vec2 q = vec2( vFlow.x * 0.08 - uTime * 0.9, vFlow.y * 3.0 );
				float f = vnoise( q * vec2( 1.0, 2.0 ) ) * 0.6 + vnoise( q * vec2( 3.1, 6.0 ) + 3.7 ) * 0.4;
				float edge = smoothstep( 0.55, 1.0, abs( vFlow.y ) );
				gFoam = smoothstep( 0.62, 0.85, f + edge * 0.35 ) * ${ ( opts.foam ?? 0.6 ).toFixed( 2 ) };
				diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.75, 0.8, 0.78 ), gFoam );
			}` )
			.replace( '#include <roughnessmap_fragment>', `float roughnessFactor = mix( ${ ( opts.rough ?? 0.05 ).toFixed( 3 ) }, 0.7, gFoam );` )
			.replace( '#include <normal_fragment_maps>', `
			{
				vec2 p = vWP.xz;
				float t = uTime;
				float e = 0.35;
				#define WH( v ) ( vnoise( v * 0.45 + vec2( t * 0.35, t * 0.22 ) ) + 0.5 * vnoise( v * 1.3 - vec2( t * 0.5, - t * 0.4 ) ) + 0.25 * vnoise( v * 3.7 + t * 0.9 ) )
				float h0 = WH( p ), hx = WH( p + vec2( e, 0.0 ) ), hz = WH( p + vec2( 0.0, e ) );
				vec3 nw = normalize( vec3( - ( hx - h0 ) / e * ${ ( opts.wave ?? 0.35 ).toFixed( 3 ) }, 1.0, - ( hz - h0 ) / e * ${ ( opts.wave ?? 0.35 ).toFixed( 3 ) } ) );
				normal = normalize( ( viewMatrix * vec4( nw, 0.0 ) ).xyz );
			}` );

	};

	m.customProgramCacheKey = () => 'water' + ( opts.foam ?? 0.6 ) + '_' + ( opts.wave ?? 0.35 );
	return m;

}

export function buildWater( { time, heightAt } ) {

	const group = new THREE.Group();
	group.name = 'water';

	// 河：沿河道中线每 3 米一节，横向 6 格
	const pts = [], flows = [], idx = [];
	const L = riverL.length;
	const NX = 6;
	let rows = 0;
	for ( let s = 0; s <= L; s += 3 ) {

		const p = riverL.at( s );
		const t = s / L;
		const bed = RIVER_BED[ 0 ] + ( RIVER_BED[ 1 ] - RIVER_BED[ 0 ] ) * t;
		const level = bed + 2.4;
		const half = RIVER_HALF + 14 * smoothstep( 0.08, 0.0, t ) + 5;
		for ( let i = 0; i <= NX; i ++ ) {

			const u = - 1 + 2 * i / NX;
			const x = p.x - p.tz * u * half, z = p.z + p.tx * u * half;
			pts.push( x, level, z );
			flows.push( s, u );

		}

		rows ++;

	}

	for ( let j = 0; j < rows - 1; j ++ ) for ( let i = 0; i < NX; i ++ ) {

		const a = j * ( NX + 1 ) + i, b = a + 1, c = a + NX + 1, d = c + 1;
		idx.push( a, c, b, b, c, d );

	}

	const geo = new THREE.BufferGeometry();
	geo.setAttribute( 'position', new THREE.Float32BufferAttribute( pts, 3 ) );
	geo.setAttribute( 'flow', new THREE.Float32BufferAttribute( flows, 2 ) );
	geo.setIndex( idx );
	geo.computeVertexNormals();
	// 绕序不确定，法线统一朝上
	const nor = geo.attributes.normal;
	for ( let i = 0; i < nor.count; i ++ ) nor.setXYZ( i, 0, 1, 0 );
	const river = new THREE.Mesh( geo, waterMaterial( time ) );
	river.material.side = THREE.DoubleSide;
	river.receiveShadow = true;
	river.name = 'river';
	group.add( river );

	// 水塘
	const pg = new THREE.CircleGeometry( POND.r + 1.5, 48 );
	pg.rotateX( - Math.PI / 2 );
	const fl = new Float32Array( pg.attributes.position.count * 2 );
	for ( let i = 0; i < pg.attributes.position.count; i ++ ) { fl[ i * 2 ] = pg.attributes.position.getX( i ) * 3; fl[ i * 2 + 1 ] = 0; }
	pg.setAttribute( 'flow', new THREE.BufferAttribute( fl, 2 ) );
	const pond = new THREE.Mesh( pg, waterMaterial( time, { color: 0x112a24, foam: 0.0, wave: 0.06, rough: 0.16 } ) );
	pond.position.set( POND.x, POND.level - 0.2, POND.z );
	pond.receiveShadow = true;
	pond.name = 'pond';
	group.add( pond );

	// 瀑布：从深潭东北边的崖顶贴着崖面落下来。沿“崖顶 → 潭心”方向采样地形，带子离崖面 1 米
	const start = riverL.at( 0 );
	const dir = new THREE.Vector2( FALLS.x - start.x, FALLS.z - start.z ).normalize();
	const fallPts = [];
	let top = null;
	for ( let d = 0; d <= 70; d += 1 ) {

		const x = start.x + dir.x * d, z = start.z + dir.y * d;
		const y = heightAt( x, z );
		fallPts.push( [ x, y, z ] );
		if ( top === null && y > RIVER_BED[ 0 ] + 50 ) top = d;

	}

	const crest = Math.min( 70, ( top ?? 60 ) + 4 );
	const W = 9, segs = 40;
	const fp = [], fu = [], fi = [];
	for ( let k = 0; k <= segs; k ++ ) {

		const d = crest * ( 1 - k / segs );
		const x = start.x + dir.x * d, z = start.z + dir.y * d;
		let y = heightAt( x, z );
		if ( k === segs ) y = RIVER_BED[ 0 ] + 2.4;
		const out = 1.2 + 2.5 * ( k / segs );
		const ox = x - dir.x * out, oz = z - dir.y * out;
		for ( const sg of [ - 1, 1 ] ) {

			fp.push( ox - dir.y * sg * W / 2 * ( 1 + k / segs * 0.6 ), y + 0.4, oz + dir.x * sg * W / 2 * ( 1 + k / segs * 0.6 ) );
			fu.push( sg * 0.5 + 0.5, k / segs );

		}

	}

	for ( let k = 0; k < segs; k ++ ) {

		const a = k * 2;
		fi.push( a, a + 1, a + 2, a + 1, a + 3, a + 2 );

	}

	const fg = new THREE.BufferGeometry();
	fg.setAttribute( 'position', new THREE.Float32BufferAttribute( fp, 3 ) );
	fg.setAttribute( 'fuv', new THREE.Float32BufferAttribute( fu, 2 ) );
	fg.setIndex( fi );
	fg.computeVertexNormals();
	const fallMat = new THREE.MeshStandardMaterial( { color: 0xe8eef0, roughness: 0.4, transparent: true, depthWrite: false, side: THREE.DoubleSide, emissive: 0x23282a } );
	fallMat.onBeforeCompile = ( shader ) => {

		shader.uniforms.uTime = time;
		shader.vertexShader = shader.vertexShader
			.replace( '#include <common>', '#include <common>\nattribute vec2 fuv;\nvarying vec2 vFuv;' )
			.replace( '#include <begin_vertex>', '#include <begin_vertex>\nvFuv = fuv;' );
		shader.fragmentShader = shader.fragmentShader
			.replace( '#include <common>', `#include <common>\nuniform float uTime;\nvarying vec2 vFuv;\n${ NOISE }` )
			.replace( '#include <color_fragment>', `#include <color_fragment>
			{
				vec2 uv = vFuv;
				float strands = vnoise( vec2( uv.x * 26.0, uv.y * 3.0 - uTime * 1.6 ) ) * 0.6 + vnoise( vec2( uv.x * 61.0, uv.y * 7.0 - uTime * 2.7 ) ) * 0.4;
				float edge = smoothstep( 0.0, 0.18, uv.x ) * smoothstep( 1.0, 0.82, uv.x );
				float a = smoothstep( 0.3, 0.75, strands ) * edge;
				a = max( a, smoothstep( 0.82, 1.0, uv.y ) * 0.85 * edge );
				diffuseColor.a = a * 0.9;
			}` );

	};

	fallMat.customProgramCacheKey = () => 'falls';
	const falls = new THREE.Mesh( fg, fallMat );
	falls.name = 'falls';
	falls.renderOrder = 2;
	group.add( falls );

	void flows;
	console.log( `[scene] water: river ${ rows } rows, falls crest ${ crest.toFixed( 0 ) } m from pool` );
	return { group, fallsBase: new THREE.Vector3( start.x, RIVER_BED[ 0 ] + 3, start.z ) };

}

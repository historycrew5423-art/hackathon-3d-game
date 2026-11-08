import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import RECTS from './atlas_rects.json';
import { mulberry32 } from '../gen/noise.js';
import { VOLUMES } from '../gen/rocks.js';
import { CAM_REF } from '../gen/layout.js';
import { vineTexture, blossomTexture } from './textures.js';

// ---------------------------------------------------------------------------
// 植被：黄山松（层层平展的松针团）、阔叶树、灌木、开粉花的灌木、草丛、白色小野花、崖上垂下的藤蔓。
// 叶片全部来自 Poly Haven 的照片贴图：松针用 fir_tree_01 的枝条，阔叶用 island_tree_02 的叶片，
// 先在 canvas 上拼成“一团”的贴图，再贴到交叉的面片上。树干是程序生成的弯曲圆管。
// 每种树做几个变体，用 InstancedMesh 摆放（一种变体一次绘制）。
// 面片的法线朝树冠外侧（而不是面片自身的朝向），树冠才有整体的明暗，不会一片一片地闪。
// ---------------------------------------------------------------------------

const px = ( img, r ) => [ r.u0 * img.width, r.v0 * img.height, ( r.u1 - r.u0 ) * img.width, ( r.v1 - r.v0 ) * img.height ];

function canvasTex( c ) {

	const t = new THREE.CanvasTexture( c );
	t.colorSpace = THREE.SRGBColorSpace;
	t.anisotropy = 8;
	return t;

}

// 松针团：十几根松枝从中间往四周平铺（从下往上看是一团，侧面看是扁的一层）
function pinePadTexture( img ) {

	const S = 512;
	const c = document.createElement( 'canvas' );
	c.width = c.height = S;
	const g = c.getContext( '2d' );
	const r = mulberry32( 5 );
	const sprigs = [ 1, 2, 3, 4, 6 ].map( ( i ) => RECTS.twig[ i ] );
	for ( let k = 0; k < 34; k ++ ) {

		const R = sprigs[ Math.floor( r() * sprigs.length ) ];
		const [ sx, sy, sw, sh ] = px( img, R );
		const a = r() * Math.PI * 2, d = r() * S * 0.22;
		const size = S * ( 0.32 + r() * 0.2 );
		g.save();
		g.translate( S / 2 + Math.cos( a ) * d, S / 2 + Math.sin( a ) * d * 0.8 );
		g.rotate( a + Math.PI / 2 + ( r() - 0.5 ) * 0.8 );
		g.filter = `brightness(${ 0.55 + r() * 0.6 }) saturate(1.1)`;
		g.drawImage( img, sx, sy, sw, sh, - size / 2, - size * 0.9, size, size * sh / sw );
		g.restore();

	}

	return canvasTex( c );

}

// 阔叶团：几十片叶子从中心往外长，外圈的叶子大一些、亮一些
function leafClusterTexture( img, hueShift = 0 ) {

	const S = 512;
	const c = document.createElement( 'canvas' );
	c.width = c.height = S;
	const g = c.getContext( '2d' );
	const r = mulberry32( 11 + hueShift );
	for ( let k = 0; k < 120; k ++ ) {

		const R = RECTS.leaves[ Math.floor( r() * RECTS.leaves.length ) ];
		const [ sx, sy, sw, sh ] = px( img, R );
		const a = r() * Math.PI * 2, d = Math.sqrt( r() ) * S * 0.36;
		const size = S * ( 0.07 + r() * 0.05 ) * ( 0.7 + d / S );
		g.save();
		g.translate( S / 2 + Math.cos( a ) * d, S / 2 + Math.sin( a ) * d );
		g.rotate( a + Math.PI / 2 + ( r() - 0.5 ) * 1.2 );
		g.filter = `brightness(${ 0.45 + ( d / S ) * 1.1 + r() * 0.25 }) hue-rotate(${ hueShift + ( r() - 0.5 ) * 16 }deg)`;
		g.drawImage( img, sx, sy, sw, sh, - size * 0.35, - size, size * 0.7, size * 0.7 * sh / sw );
		g.restore();

	}

	return canvasTex( c );

}

// 白色小野花（参考图前景）：细茎 + 五瓣小白花，几朵一簇
function whiteFlowerTexture() {

	const W = 256, H = 256;
	const c = document.createElement( 'canvas' );
	c.width = W; c.height = H;
	const g = c.getContext( '2d' );
	const r = mulberry32( 23 );
	for ( let k = 0; k < 9; k ++ ) {

		const bx = W * ( 0.15 + r() * 0.7 ), top = H * ( 0.08 + r() * 0.45 );
		g.strokeStyle = `rgba(${ 70 + r() * 30 },${ 110 + r() * 30 },50,1)`;
		g.lineWidth = 2;
		g.beginPath(); g.moveTo( W / 2 + ( r() - 0.5 ) * 20, H ); g.quadraticCurveTo( bx + ( r() - 0.5 ) * 30, ( H + top ) / 2, bx, top ); g.stroke();
		const rr = 9 + r() * 7;
		for ( let p = 0; p < 5; p ++ ) {

			const a = p / 5 * Math.PI * 2 + r();
			const l = 88 + r() * 10;
			g.fillStyle = `hsl(${ 50 + r() * 20 },${ 20 + r() * 20 }%,${ l }%)`;
			g.beginPath();
			g.ellipse( bx + Math.cos( a ) * rr * 0.55, top + Math.sin( a ) * rr * 0.5, rr * 0.55, rr * 0.33, a, 0, Math.PI * 2 );
			g.fill();

		}

		g.fillStyle = '#e8c640';
		g.beginPath(); g.arc( bx, top, rr * 0.2, 0, Math.PI * 2 ); g.fill();

	}

	return canvasTex( c );

}

// ---------------------------------------------------------------------------
// 几何体工具：面片（四边形）列表 → BufferGeometry。每个面片：中心、右向量、上向量、法线、UV 矩形、颜色
// ---------------------------------------------------------------------------
function cardsGeometry( cards ) {

	const n = cards.length;
	const pos = new Float32Array( n * 12 ), nor = new Float32Array( n * 12 ), uv = new Float32Array( n * 8 ), col = new Float32Array( n * 12 );
	const idx = new Uint32Array( n * 6 );
	cards.forEach( ( c, i ) => {

		const { o, r, u, nrm, rect = [ 0, 0, 1, 1 ], shade = 1, bottom = false } = c;
		// bottom: 面片的下沿在 o（草、花）；否则 o 是中心
		const corners = bottom ? [ [ - 1, 0 ], [ 1, 0 ], [ 1, 1 ], [ - 1, 1 ] ] : [ [ - 1, - 1 ], [ 1, - 1 ], [ 1, 1 ], [ - 1, 1 ] ];
		const uvs = [ [ rect[ 0 ], rect[ 1 ] ], [ rect[ 2 ], rect[ 1 ] ], [ rect[ 2 ], rect[ 3 ] ], [ rect[ 0 ], rect[ 3 ] ] ];
		corners.forEach( ( [ a, b ], k ) => {

			const o3 = ( i * 4 + k ) * 3;
			pos[ o3 ] = o[ 0 ] + r[ 0 ] * a + u[ 0 ] * b; pos[ o3 + 1 ] = o[ 1 ] + r[ 1 ] * a + u[ 1 ] * b; pos[ o3 + 2 ] = o[ 2 ] + r[ 2 ] * a + u[ 2 ] * b;
			const nn = typeof nrm === 'function' ? nrm( pos[ o3 ], pos[ o3 + 1 ], pos[ o3 + 2 ] ) : nrm;
			nor[ o3 ] = nn[ 0 ]; nor[ o3 + 1 ] = nn[ 1 ]; nor[ o3 + 2 ] = nn[ 2 ];
			const s = typeof shade === 'function' ? shade( b ) : shade;
			col[ o3 ] = s; col[ o3 + 1 ] = s; col[ o3 + 2 ] = s;
			uv[ ( i * 4 + k ) * 2 ] = uvs[ k ][ 0 ]; uv[ ( i * 4 + k ) * 2 + 1 ] = uvs[ k ][ 1 ];

		} );
		idx.set( [ i * 4, i * 4 + 1, i * 4 + 2, i * 4, i * 4 + 2, i * 4 + 3 ], i * 6 );

	} );
	const g = new THREE.BufferGeometry();
	g.setAttribute( 'position', new THREE.BufferAttribute( pos, 3 ) );
	g.setAttribute( 'normal', new THREE.BufferAttribute( nor, 3 ) );
	g.setAttribute( 'uv', new THREE.BufferAttribute( uv, 2 ) );
	g.setAttribute( 'color', new THREE.BufferAttribute( col, 3 ) );
	g.setIndex( new THREE.BufferAttribute( idx, 1 ) );
	return g;

}

const norm = ( v ) => {

	const l = Math.hypot( v[ 0 ], v[ 1 ], v[ 2 ] ) || 1;
	return [ v[ 0 ] / l, v[ 1 ] / l, v[ 2 ] / l ];

};

// 弯曲的圆管（树干、树枝）：沿折线，半径从 r0 收到 r1
function limb( pts, r0, r1, sides = 6 ) {

	const curve = new THREE.CatmullRomCurve3( pts.map( ( p ) => new THREE.Vector3( ...p ) ) );
	const seg = Math.max( 2, pts.length );
	const g = new THREE.TubeGeometry( curve, seg, 1, sides, false );
	// 按位置收细：TubeGeometry 的半径是常数，这里按沿线参数缩放到中心线
	const pos = g.attributes.position;
	const frames = curve.computeFrenetFrames( seg, false );
	for ( let i = 0; i <= seg; i ++ ) {

		const t = i / seg;
		const c = curve.getPointAt( t );
		const rad = r0 + ( r1 - r0 ) * t;
		for ( let j = 0; j <= sides; j ++ ) {

			const k = i * ( sides + 1 ) + j;
			const x = pos.getX( k ) - c.x, y = pos.getY( k ) - c.y, z = pos.getZ( k ) - c.z;
			pos.setXYZ( k, c.x + x * rad, c.y + y * rad, c.z + z * rad );

		}

	}

	void frames;
	g.computeVertexNormals();
	// 树皮 UV：u 绕一圈 = 周长（米），v = 沿线长度（米）
	const uv = g.attributes.uv;
	const L = curve.getLength();
	for ( let k = 0; k < uv.count; k ++ ) uv.setXY( k, uv.getY( k ) * Math.PI * 2 * r0, uv.getX( k ) * L );
	return g;

}

// ---------------------------------------------------------------------------
// 树的变体
// ---------------------------------------------------------------------------

// 黄山松：主干有点弯，上半部伸出几根近乎水平的枝，枝头是一层层平展的松针团
function pineVariant( seed, H ) {

	const r = mulberry32( seed );
	const trunkPts = [];
	let x = 0, z = 0;
	const lean = ( r() - 0.5 ) * 0.25, leanA = r() * Math.PI * 2;
	for ( let i = 0; i <= 5; i ++ ) {

		const t = i / 5;
		x += Math.cos( leanA ) * lean * H / 5 + ( r() - 0.5 ) * 0.5;
		z += Math.sin( leanA ) * lean * H / 5 + ( r() - 0.5 ) * 0.5;
		trunkPts.push( [ x, t * H, z ] );

	}

	const wood = [ limb( trunkPts, H * 0.028, H * 0.008, 6 ) ];
	const cards = [];
	const crownC = [ x * 0.6, H * 0.78, z * 0.6 ];
	const outN = ( px, py, pz ) => norm( [ px - crownC[ 0 ], ( py - crownC[ 1 ] ) * 1.4 + 2.5, pz - crownC[ 2 ] ] );
	const layers = 4 + Math.floor( r() * 3 );
	for ( let l = 0; l < layers; l ++ ) {

		const t = 0.5 + 0.5 * l / ( layers - 1 );
		const tp = trunkPts[ Math.min( 5, Math.round( t * 5 ) ) ];
		const branches = l === layers - 1 ? 1 : 2 + Math.floor( r() * 2 );
		for ( let b = 0; b < branches; b ++ ) {

			const a = r() * Math.PI * 2;
			const len = ( l === layers - 1 ? 0.6 : 1 ) * H * ( 0.22 + r() * 0.16 ) * ( 1.15 - t * 0.5 );
			const ex = tp[ 0 ] + Math.cos( a ) * len, ez = tp[ 2 ] + Math.sin( a ) * len, ey = tp[ 1 ] + ( r() - 0.3 ) * H * 0.06;
			if ( l < layers - 1 ) wood.push( limb( [ tp, [ ( tp[ 0 ] + ex ) / 2, tp[ 1 ] + H * 0.03, ( tp[ 2 ] + ez ) / 2 ], [ ex, ey, ez ] ], H * 0.011, H * 0.004, 4 ) );
			// 枝头的松针团：两三片大致水平的面片叠在一起 + 一片斜的
			const pad = H * ( 0.17 + r() * 0.08 ) * ( l === layers - 1 ? 1.25 : 1 );
			for ( let k = 0; k < 3; k ++ ) {

				const rot = r() * Math.PI;
				const tilt = ( r() - 0.5 ) * 0.5;
				const rx = [ Math.cos( rot ) * pad, tilt * pad, Math.sin( rot ) * pad ];
				const uz = [ - Math.sin( rot ) * pad * 0.85, ( r() - 0.5 ) * 0.4 * pad, Math.cos( rot ) * pad * 0.85 ];
				cards.push( { o: [ ex + ( r() - 0.5 ) * pad * 0.4, ey + k * pad * 0.12, ez + ( r() - 0.5 ) * pad * 0.4 ], r: rx, u: uz, nrm: outN, shade: 0.75 + 0.25 * t + ( k === 2 ? 0.1 : 0 ) } );

			}

			const rot = r() * Math.PI;
			cards.push( { o: [ ex, ey + pad * 0.1, ez ], r: [ Math.cos( rot ) * pad, 0, Math.sin( rot ) * pad ], u: [ 0, pad * 0.55, 0 ], nrm: outN, shade: 0.8 } );

		}

	}

	return { wood: mergeGeometries( wood.map( ( g ) => g.toNonIndexed() ) ), leaves: cardsGeometry( cards ) };

}

// 阔叶树：短干，三四根分枝，圆冠
function broadleafVariant( seed, H ) {

	const r = mulberry32( seed );
	const top = [ ( r() - 0.5 ) * 1.2, H * 0.42, ( r() - 0.5 ) * 1.2 ];
	const wood = [ limb( [ [ 0, 0, 0 ], [ top[ 0 ] * 0.5, H * 0.2, top[ 2 ] * 0.5 ], top ], H * 0.035, H * 0.018, 7 ) ];
	const crownC = [ top[ 0 ], H * 0.68, top[ 2 ] ];
	const CR = H * 0.36;
	for ( let b = 0; b < 4; b ++ ) {

		const a = b / 4 * Math.PI * 2 + r();
		wood.push( limb( [ top, [ top[ 0 ] + Math.cos( a ) * CR * 0.5, H * 0.62, top[ 2 ] + Math.sin( a ) * CR * 0.5 ], [ top[ 0 ] + Math.cos( a ) * CR * 0.8, H * 0.8, top[ 2 ] + Math.sin( a ) * CR * 0.8 ] ], H * 0.016, H * 0.005, 5 ) );

	}

	const cards = [];
	const outN = ( px, py, pz ) => norm( [ px - crownC[ 0 ], ( py - crownC[ 1 ] ) + CR * 0.5, pz - crownC[ 2 ] ] );
	const n = 26;
	for ( let k = 0; k < n; k ++ ) {

		// 球面上均匀撒点（斐波那契），下半球压扁
		const yk = 1 - 2 * ( k + 0.5 ) / n;
		const rr = Math.sqrt( 1 - yk * yk ), th = k * 2.39996;
		const p = [ crownC[ 0 ] + Math.cos( th ) * rr * CR, crownC[ 1 ] + yk * CR * ( yk < 0 ? 0.6 : 0.85 ), crownC[ 2 ] + Math.sin( th ) * rr * CR ];
		const s = CR * ( 0.55 + r() * 0.25 );
		const rot = r() * Math.PI;
		const ax = [ Math.cos( rot ) * s, ( r() - 0.5 ) * s * 0.6, Math.sin( rot ) * s ];
		const up = [ - Math.sin( rot ) * s * ( r() - 0.5 ), s * 0.9, Math.cos( rot ) * s * ( r() - 0.5 ) ];
		cards.push( { o: p, r: ax, u: up, nrm: outN, shade: 0.62 + 0.38 * ( yk * 0.5 + 0.5 ) } );

	}

	return { wood: mergeGeometries( wood.map( ( g ) => g.toNonIndexed() ) ), leaves: cardsGeometry( cards ) };

}

// 灌木：一团交叉的面片，底部贴地
function bushVariant( seed, S ) {

	const r = mulberry32( seed );
	const cards = [];
	const c = [ 0, S * 0.45, 0 ];
	const outN = ( px, py, pz ) => norm( [ px - c[ 0 ], py - c[ 1 ] + S * 0.4, pz - c[ 2 ] ] );
	for ( let k = 0; k < 9; k ++ ) {

		const a = k / 9 * Math.PI * 2 + r() * 0.5;
		const d = S * 0.32 * r();
		const s = S * ( 0.45 + r() * 0.2 );
		cards.push( { o: [ Math.cos( a ) * d, S * ( 0.38 + r() * 0.25 ), Math.sin( a ) * d ], r: [ Math.cos( a + 1.57 ) * s, 0, Math.sin( a + 1.57 ) * s ], u: [ Math.cos( a ) * s * 0.3, s * 0.85, Math.sin( a ) * s * 0.3 ], nrm: outN, shade: 0.7 + r() * 0.3 } );

	}

	return { leaves: cardsGeometry( cards ) };

}

// 草丛 / 花丛：两三片交叉的竖直面片，下沿贴地
function tuftVariant( rect, W, H, n = 3, seed = 1 ) {

	const r = mulberry32( seed );
	const cards = [];
	for ( let k = 0; k < n; k ++ ) {

		const a = k / n * Math.PI + r() * 0.3;
		cards.push( { o: [ 0, 0, 0 ], r: [ Math.cos( a ) * W / 2, 0, Math.sin( a ) * W / 2 ], u: [ ( r() - 0.5 ) * 0.2 * H, H, ( r() - 0.5 ) * 0.2 * H ], nrm: [ 0, 1, 0 ], rect, bottom: true, shade: ( b ) => 0.72 + 0.28 * b } );

	}

	return cardsGeometry( cards );

}

// ---------------------------------------------------------------------------
// 材质
// ---------------------------------------------------------------------------
function foliageMaterial( map, time, opts = {} ) {

	const m = new THREE.MeshStandardMaterial( {
		map, alphaTest: opts.alphaTest ?? 0.42, side: THREE.DoubleSide, roughness: 0.82, metalness: 0,
		vertexColors: true, color: opts.color ?? 0xffffff, envMapIntensity: opts.env ?? 0.75
	} );
	const sway = opts.sway ?? 1;
	m.onBeforeCompile = ( shader ) => {

		shader.uniforms.uTime = time;
		shader.vertexShader = shader.vertexShader
			.replace( '#include <common>', '#include <common>\nuniform float uTime;' )
			.replace( '#include <begin_vertex>', `#include <begin_vertex>
			{
				#ifdef USE_INSTANCING
					vec3 ip = instanceMatrix[ 3 ].xyz;
				#else
					vec3 ip = vec3( 0.0 );
				#endif
				float ph = ip.x * 0.07 + ip.z * 0.11;
				float h = max( position.y, 0.0 );
				float w = sin( uTime * 1.7 + ph + position.x * 0.4 ) * 0.6 + sin( uTime * 3.1 + ph * 1.7 ) * 0.25;
				transformed.x += w * 0.012 * h * ${ sway.toFixed( 3 ) };
				transformed.z += cos( uTime * 1.3 + ph ) * 0.008 * h * ${ sway.toFixed( 3 ) };
			}` );
		// 双面：背面不翻转法线（法线是按树冠算的，翻过来会一面亮一面黑）
		shader.fragmentShader = shader.fragmentShader.replace( '#include <normal_fragment_begin>', `#include <normal_fragment_begin>
			normal = normalize( vNormal );` );

	};

	m.customProgramCacheKey = () => 'foliage' + sway;
	return m;

}

// ---------------------------------------------------------------------------
// 撒点
// ---------------------------------------------------------------------------
function traceDown( sdf, x, z, y0, y1 ) {

	let y = y0;
	for ( let i = 0; i < 90 && y > y1; i ++ ) {

		const d = sdf( x, y, z );
		if ( d < 0.4 ) return y;
		y -= Math.max( 0.5, d * 0.55 );

	}

	return null;

}

function gradient( sdf, x, y, z, e = 0.8 ) {

	const gx = sdf( x + e, y, z ) - sdf( x - e, y, z );
	const gy = sdf( x, y + e, z ) - sdf( x, y - e, z );
	const gz = sdf( x, y, z + e ) - sdf( x, y, z - e );
	return norm( [ gx, gy, gz ] );

}

export function buildVegetation( { T, terrain, placed, time, Q } ) {

	const t0 = performance.now();
	const group = new THREE.Group();
	group.name = 'vegetation';
	const r = mulberry32( 1234 );
	const H = terrain.heightAt;
	const blocked = ( x, z, pad = 0 ) => placed.some( ( p ) => Math.hypot( p[ 0 ] - x, p[ 1 ] - z ) < p[ 2 ] + pad );
	const slopeAt = ( x, z ) => {

		const e = 1.5;
		return Math.hypot( H( x + e, z ) - H( x - e, z ), H( x, z + e ) - H( x, z - e ) ) / ( 2 * e );

	};

	// 贴图
	const pinePad = pinePadTexture( T.twig.image );
	const leafA = leafClusterTexture( T.leaves.image, 0 );
	const leafB = leafClusterTexture( T.leaves.image, - 25 );
	const blossom = blossomTexture();
	const flowers = whiteFlowerTexture();
	const barkMat = new THREE.MeshStandardMaterial( { map: T.bark_diff, normalMap: T.bark_nor, color: 0x9a8a7a, roughness: 0.95 } );
	T.bark_diff.repeat.set( 1 / 1.2, 1 / 2.5 );
	T.bark_nor.repeat.copy( T.bark_diff.repeat );
	const pineMat = foliageMaterial( pinePad, time, { color: 0xb8c4a4 } );
	const leafMatA = foliageMaterial( leafA, time, { color: 0xc6d4a0 } );
	const leafMatB = foliageMaterial( leafB, time, { color: 0xb0c088 } );
	const blossomMat = foliageMaterial( blossom, time, { alphaTest: 0.5 } );
	const grassMat = foliageMaterial( T.grassblade, time, { color: 0xc8e090, alphaTest: 0.38, sway: 2.2, env: 0.7 } );
	const flowerMat = foliageMaterial( flowers, time, { alphaTest: 0.4, sway: 2.0 } );
	const fernMat = foliageMaterial( T.fern, time, { alphaTest: 0.4, color: 0xa0b080, sway: 1.2 } );

	const pines = [ 101, 102, 103, 104 ].map( ( s, i ) => pineVariant( s, 11 + i * 2.5 ) );
	const broads = [ 201, 202, 203 ].map( ( s, i ) => broadleafVariant( s, 9 + i * 2.2 ) );
	const bushes = [ 301, 302 ].map( ( s, i ) => bushVariant( s, 2.2 + i * 0.8 ) );

	// 实例收集
	const inst = new Map();
	const addInst = ( key, geo, mat, m, color, shadow = true ) => {

		if ( ! inst.has( key ) ) inst.set( key, { geo, mat, list: [], shadow } );
		inst.get( key ).list.push( [ m.clone(), color ] );

	};

	const M = new THREE.Matrix4(), Qn = new THREE.Quaternion(), S3 = new THREE.Vector3(), P = new THREE.Vector3(), UP = new THREE.Vector3( 0, 1, 0 );
	const tint = new THREE.Color();
	const tree = ( kind, x, y, z, s, rotY ) => {

		Qn.setFromAxisAngle( UP, rotY );
		M.compose( P.set( x, y, z ), Qn, S3.set( s, s * ( 0.9 + r() * 0.2 ), s ) );
		tint.setHSL( 0.27 + ( r() - 0.5 ) * 0.06, 0.32 + r() * 0.2, 0.4 + r() * 0.12 ).multiplyScalar( 2.2 );
		if ( kind === 'pine' ) {

			const v = Math.floor( r() * pines.length );
			addInst( 'pw' + v, pines[ v ].wood, barkMat, M, null );
			addInst( 'pl' + v, pines[ v ].leaves, pineMat, M, tint.clone() );

		} else if ( kind === 'broad' ) {

			const v = Math.floor( r() * broads.length );
			const mat = r() < 0.5 ? leafMatA : leafMatB;
			addInst( 'bw' + v, broads[ v ].wood, barkMat, M, null );
			addInst( 'bl' + v + mat.uuid, broads[ v ].leaves, mat, M, tint.clone() );

		} else if ( kind === 'blossom' ) {

			const v = Math.floor( r() * broads.length );
			addInst( 'bw' + v, broads[ v ].wood, barkMat, M, null );
			addInst( 'bb' + v, broads[ v ].leaves, blossomMat, M, new THREE.Color( 1, 1, 1 ) );

		} else {

			const v = Math.floor( r() * bushes.length );
			addInst( 'sh' + v + ( kind === 'pinkbush' ? 'p' : '' ), bushes[ v ].leaves, kind === 'pinkbush' ? blossomMat : ( r() < 0.5 ? leafMatA : leafMatB ), M, kind === 'pinkbush' ? new THREE.Color( 1, 1, 1 ) : tint.clone() );

		}

	};

	// 1) 地面上的树：核心区按抖动网格撒，森林遮罩决定密度
	const step = Q.treeStep;
	const map = terrain.maps;
	let nTrees = 0;
	for ( let gz = map.z0 + 10; gz < map.z0 + map.d - 10; gz += step ) for ( let gx = map.x0 + 10; gx < map.x0 + map.w - 10; gx += step ) {

		const x = gx + ( r() - 0.5 ) * step * 0.9, z = gz + ( r() - 0.5 ) * step * 0.9;
		const forest = terrain.maskAt( x, z, 3 ), path = terrain.maskAt( x, z, 0 ), water = terrain.maskAt( x, z, 1 ), terr = terrain.maskAt( x, z, 2 );
		const sl = slopeAt( x, z );
		// 森林里密，草地上零星有几棵
		let p = forest * 0.85 + 0.03;
		if ( terr > 0.3 ) p *= 0.05;
		if ( path > 0.05 || water > 0.05 || sl > 1.3 ) continue;
		if ( r() > p ) continue;
		// 开场镜头前方的扇形区域里不种高树（参考图前景是草坡和野花，视线要一直通到白骨岭）
		const dcx = x - CAM_REF.pos[ 0 ], dcz = z - CAM_REF.pos[ 2 ];
		const dcam = Math.hypot( dcx, dcz );
		const inWedge = dcz < 0 && Math.abs( dcx ) < - dcz * 0.95 + 25 && dcam < 260;
		if ( dcam < 30 ) continue;
		if ( blocked( x, z, 3 ) ) continue;
		const y = H( x, z ) - 0.3;
		if ( inWedge ) {

			if ( r() < 0.25 ) tree( 'bush', x, y, z, 0.7 + r() * 0.6, r() * 6.28 );
			continue;

		}

		const kind = r() < 0.6 ? 'pine' : ( r() < 0.75 ? 'broad' : 'bush' );
		tree( kind, x, y, z, 0.8 + r() * 0.6, r() * 6.28 );
		nTrees ++;
		// 林子边缘配灌木
		if ( r() < 0.5 ) {

			const a = r() * 6.28, d = 3 + r() * 4;
			const bx = x + Math.cos( a ) * d, bz = z + Math.sin( a ) * d;
			if ( terrain.maskAt( bx, bz, 0 ) < 0.05 && ! blocked( bx, bz, 1 ) ) tree( 'bush', bx, H( bx, bz ) - 0.2, bz, 0.8 + r() * 0.8, r() * 6.28 );

		}

	}

	// 2) 崖顶、石柱顶上的松树：从上往下打到岩体 SDF 上，朝上的面才种
	let nCliff = 0;
	const cliffSpots = [
		[ 'left', - 700, - 200, - 950, 110, 22 ], [ 'mid', - 300, 10, - 810, - 480, 16 ], [ 'skull', - 460, 460, - 1400, - 1000, 30 ],
		[ 'right', 40, 190, - 180, 30, 9 ], [ 'gorge', 100, 180, - 290, - 215, 8 ]
	];
	for ( const [ name, x0, x1, z0, z1, st ] of cliffSpots ) {

		const V = VOLUMES[ name ];
		for ( let z = z0; z < z1; z += st ) for ( let x = x0; x < x1; x += st ) {

			const px = x + ( r() - 0.5 ) * st, pz = z + ( r() - 0.5 ) * st;
			const y = traceDown( V.sdf, px, pz, V.bounds[ 4 ] + 5, V.bounds[ 1 ] + 20 );
			if ( y === null ) continue;
			if ( y < H( px, pz ) + 3 ) continue; // 打到的是地面附近，不是崖顶
			const n = gradient( V.sdf, px, y, pz );
			if ( n[ 1 ] < 0.55 ) continue;
			if ( blocked( px, pz, 4 ) ) continue;
			const kind = r() < 0.72 ? 'pine' : 'bush';
			tree( kind, px, y - 0.5, pz, ( name === 'skull' ? 1.3 : 1.0 ) * ( 0.8 + r() * 0.6 ), r() * 6.28 );
			nCliff ++;
			// 崖顶的林子成片：旁边再补一两棵
			for ( let k = 0; k < 2; k ++ ) {

				if ( r() < 0.4 ) continue;
				const qx = px + ( r() - 0.5 ) * st, qz = pz + ( r() - 0.5 ) * st;
				const qy = traceDown( V.sdf, qx, qz, y + 30, y - 30 );
				if ( qy !== null && gradient( V.sdf, qx, qy, qz )[ 1 ] > 0.55 && ! blocked( qx, qz, 4 ) ) tree( r() < 0.6 ? 'pine' : 'bush', qx, qy - 0.5, qz, 0.7 + r() * 0.6, r() * 6.28 );

			}

		}

	}

	// 3) 村子里开粉花的树和灌木（参考图村口那几丛粉色）
	for ( const [ x, z, kind ] of [ [ 42, - 136, 'blossom' ], [ 6, - 168, 'blossom' ], [ 50, - 182, 'pinkbush' ], [ 30, - 128, 'pinkbush' ], [ 58, - 150, 'pinkbush' ], [ - 6, - 132, 'pinkbush' ], [ 20, - 196, 'blossom' ] ] ) {

		if ( blocked( x, z, 1 ) ) continue;
		tree( kind, x, H( x, z ) - 0.2, z, kind === 'blossom' ? 0.75 : 1.2, r() * 6.28 );

	}

	// 4) 草丛和白花：机位附近最密，往远处逐渐稀疏；山路、水、水田、林子里不长
	const grassRects = [ 2, 3, 4, 5, 16 ].map( ( i ) => RECTS.grassblade[ i ] );
	const tufts = grassRects.map( ( R, i ) => tuftVariant( [ R.u0, 1 - R.v1, R.u1, 1 - R.v0 ], 1.3 * ( R.u1 - R.u0 ) / ( R.v1 - R.v0 ) * 0.9, 1.0, 2, 40 + i ) );
	const flowerTuft = tuftVariant( [ 0, 0, 1, 1 ], 0.7, 0.55, 2, 77 );
	const fernRects = [ 0, 1, 2, 3, 4 ].map( ( i ) => RECTS.fern[ i ] );
	const ferns = fernRects.map( ( R, i ) => {

		// 蕨类：几片叶子从中心往外斜着长
		const cards = [];
		const rr = mulberry32( 90 + i );
		for ( let k = 0; k < 5; k ++ ) {

			const a = k / 5 * Math.PI * 2 + rr();
			const L = 1.1 + rr() * 0.4, w = L * ( R.u1 - R.u0 ) / ( R.v1 - R.v0 );
			cards.push( { o: [ 0, 0, 0 ], r: [ Math.cos( a + 1.57 ) * w / 2, 0, Math.sin( a + 1.57 ) * w / 2 ], u: [ Math.cos( a ) * L * 0.75, L * 0.65, Math.sin( a ) * L * 0.75 ], nrm: [ 0, 1, 0 ], rect: [ R.u0, 1 - R.v1, R.u1, 1 - R.v0 ], bottom: true, shade: ( b ) => 0.5 + 0.5 * b } );

		}

		return cardsGeometry( cards );

	} );
	const cx = CAM_REF.pos[ 0 ], cz = CAM_REF.pos[ 2 ];
	let nGrass = 0, nFlower = 0;
	const gStep = Q.grassStep;
	for ( let gz = cz - 360; gz < cz + 60; gz += gStep ) for ( let gx = cx - 220; gx < cx + 220; gx += gStep ) {

		const x = gx + ( r() - 0.5 ) * gStep * 1.6, z = gz + ( r() - 0.5 ) * gStep * 1.6;
		const d = Math.hypot( x - cx, ( z - cz ) * 0.8 );
		const dens = d < 60 ? 1 : Math.max( 0.03, ( 60 / d ) ** 2 );
		if ( r() > dens ) continue;
		const path = terrain.maskAt( x, z, 0 ), water = terrain.maskAt( x, z, 1 ), terr = terrain.maskAt( x, z, 2 ), forest = terrain.maskAt( x, z, 3 );
		if ( path > 0.15 || water > 0.05 || slopeAt( x, z ) > 1.0 ) continue;
		const y = H( x, z );
		if ( terr > 0.25 ) continue;
		Qn.setFromAxisAngle( UP, r() * 6.28 );
		const s = ( 0.4 + r() * 0.5 ) * ( d < 25 ? 0.9 : 1.1 );
		M.compose( P.set( x, y - 0.05, z ), Qn, S3.set( s, s * ( 0.8 + r() * 0.5 ), s ) );
		if ( forest > 0.5 && r() < 0.35 ) {

			const v = Math.floor( r() * ferns.length );
			addInst( 'fern' + v, ferns[ v ], fernMat, M, new THREE.Color().setHSL( 0.22, 0.3, 0.5 ).multiplyScalar( 1.6 ), false );
			continue;

		}

		// 白花：参考图前景里一片一片的
		const flowerPatch = Math.sin( x * 0.21 ) * Math.cos( z * 0.17 ) + Math.sin( x * 0.07 + z * 0.05 ) > 0.55;
		if ( flowerPatch && d < 140 && r() < 0.6 ) {

			addInst( 'flower', flowerTuft, flowerMat, M, new THREE.Color( 1, 1, 1 ), false );
			nFlower ++;

		} else {

			const v = Math.floor( r() * tufts.length );
			tint.setHSL( 0.24 + ( r() - 0.5 ) * 0.05, 0.45 + r() * 0.2, 0.5 + r() * 0.12 ).multiplyScalar( 2.7 );
			addInst( 'grass' + v, tufts[ v ], grassMat, M, tint.clone(), false );
			nGrass ++;

		}

	}

	// 5) 崖上垂下的藤蔓：从山谷一侧水平打到崖面上，竖直的崖面才挂
	const vineMat = foliageMaterial( vineTexture( T.leaves.image ), time, { alphaTest: 0.4, sway: 0.6, color: 0xb4c49a } );
	const vines = [];
	const vineAt = ( name, x0, dir, y, z ) => {

		const V = VOLUMES[ name ];
		let x = x0;
		for ( let i = 0; i < 80; i ++ ) {

			const d = V.sdf( x, y, z );
			if ( d < 0.4 ) {

				const n = gradient( V.sdf, x, y, z, 1.0 );
				if ( Math.abs( n[ 1 ] ) > 0.35 ) return;
				const w = 5 + r() * 6, h = 14 + r() * 22;
				const ox = x + n[ 0 ] * 0.6, oz = z + n[ 2 ] * 0.6;
				const right = norm( [ - n[ 2 ], 0, n[ 0 ] ] );
				vines.push( { o: [ ox, y - h / 2, oz ], r: [ right[ 0 ] * w / 2, 0, right[ 2 ] * w / 2 ], u: [ n[ 0 ] * 0.8, h / 2, n[ 2 ] * 0.8 ], nrm: [ n[ 0 ] * 0.6, 0.8, n[ 2 ] * 0.6 ], rect: [ 0, 0, 1, 1 ], shade: ( b ) => 0.55 + 0.45 * ( b * 0.5 + 0.5 ) } );
				return;

			}

			x += dir * Math.max( 0.4, d * 0.6 );

		}

	};

	for ( let z = - 640; z < 80; z += 9 ) {

		const y = 70 + r() * 170;
		if ( r() < 0.55 ) vineAt( 'left', - 90, - 1, y, z + ( r() - 0.5 ) * 6 );

	}

	for ( let z = - 150; z < 20; z += 7 ) {

		const y = 40 + r() * 140;
		if ( r() < 0.6 ) vineAt( 'right', 10, 1, y, z );

	}

	for ( let z = - 780; z < - 480; z += 12 ) {

		const y = 50 + r() * 200;
		if ( r() < 0.5 ) vineAt( 'mid', 40, - 1, y, z );

	}

	if ( vines.length ) {

		const vm = new THREE.Mesh( cardsGeometry( vines ), vineMat );
		vm.name = 'vines';
		vm.castShadow = true;
		vm.receiveShadow = true;
		group.add( vm );

	}

	// 生成 InstancedMesh
	let drawn = 0;
	for ( const [ key, { geo, mat, list, shadow } ] of inst ) {

		const im = new THREE.InstancedMesh( geo, mat, list.length );
		list.forEach( ( [ m, c ], i ) => {

			im.setMatrixAt( i, m );
			if ( c ) im.setColorAt( i, c );

		} );
		im.instanceMatrix.needsUpdate = true;
		if ( im.instanceColor ) im.instanceColor.needsUpdate = true;
		im.computeBoundingSphere();
		im.castShadow = shadow && mat !== barkMat; // 树干不投影（被树冠的影子盖住了，省一半阴影绘制）
		im.receiveShadow = true;
		im.name = 'veg-' + key;
		group.add( im );
		drawn += list.length;

	}

	console.log( `[scene] vegetation ${ nTrees } trees, ${ nCliff }+ cliff trees, ${ nGrass } grass, ${ nFlower } flowers, ${ vines.length } vines, ${ inst.size } batches, ${ ( performance.now() - t0 ).toFixed( 0 ) } ms` );
	return { group };

}

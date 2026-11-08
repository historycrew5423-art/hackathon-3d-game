import * as THREE from 'three';
import { terrainMaterial } from '../render/materials.js';
import { height as H } from '../gen/terrain.js';

// ---------------------------------------------------------------------------
// 地形网格：一张不等距的网格。核心区（机位到白骨岭脚下）等距、最密，往外每格放大 4%，一直铺到 7 公里外。
// 高度由生成线程算；法线按网格中心差分。
// 核心区另外按 1 米一格算一张高度图和地表遮罩（山路 / 水 / 梯田 / 森林），做成贴图给着色器：
// 片元法线用高度图算，所以梯田的陡坎、路边这些细节比网格本身清楚。
// ---------------------------------------------------------------------------

function axis( a, b, s, ext, g ) {

	const core = [];
	for ( let x = a; x <= b + 1e-6; x += s ) core.push( x );
	const left = [], right = [];
	let step = s, x = a;
	while ( x > - ext ) { step *= g; x -= step; left.push( x ); }
	step = s; x = core[ core.length - 1 ];
	while ( x < ext ) { step *= g; x += step; right.push( x ); }
	return Float32Array.from( [ ...left.reverse(), ...core, ...right ] );

}

export const MAP = { x0: - 480, z0: - 1100, w: 1024, d: 1280 };

export async function buildTerrain( pool, Q, T, time ) {

	const t0 = performance.now();
	const xs = axis( - 340, 380, Q.terrainStep, 7200, 1.04 );
	const zs = axis( - 1000, 150, Q.terrainStep, 7200, 1.04 );
	const nx = xs.length, nz = zs.length;
	const heights = new Float32Array( nx * nz );

	// 高度：按行分给生成线程
	const rowsPer = Math.ceil( nz / ( pool.size * 3 ) );
	const jobs = [];
	for ( let j0 = 0; j0 < nz; j0 += rowsPer ) {

		const j1 = Math.min( nz, j0 + rowsPer );
		jobs.push( pool.run( { type: 'heights', xs, zs, j0, j1 } ).then( ( r ) => heights.set( r.h, r.j0 * nx ) ) );

	}

	// 核心区的高度图和遮罩
	const md = Q.mapStep;
	const mnx = Math.round( MAP.w / md ), mnz = Math.round( MAP.d / md );
	const mapH = new Float32Array( mnx * mnz );
	const mapM = new Uint8Array( mnx * mnz * 4 );
	const mRows = Math.ceil( mnz / ( pool.size * 3 ) );
	for ( let j0 = 0; j0 < mnz; j0 += mRows ) {

		const j1 = Math.min( mnz, j0 + mRows );
		jobs.push( pool.run( { type: 'maps', x0: MAP.x0, z0: MAP.z0, dx: md, nx: mnx, j0, j1 } ).then( ( r ) => {

			mapH.set( r.h, r.j0 * mnx );
			mapM.set( r.m, r.j0 * mnx * 4 );

		} ) );

	}

	await Promise.all( jobs );
	const tH = performance.now();

	// 网格
	const pos = new Float32Array( nx * nz * 3 );
	const nor = new Int8Array( nx * nz * 3 );
	for ( let j = 0; j < nz; j ++ ) for ( let i = 0; i < nx; i ++ ) {

		const o = j * nx + i;
		pos[ o * 3 ] = xs[ i ]; pos[ o * 3 + 1 ] = heights[ o ]; pos[ o * 3 + 2 ] = zs[ j ];
		const i0 = Math.max( 0, i - 1 ), i1 = Math.min( nx - 1, i + 1 ), j0 = Math.max( 0, j - 1 ), j1 = Math.min( nz - 1, j + 1 );
		const gx = ( heights[ j * nx + i1 ] - heights[ j * nx + i0 ] ) / ( xs[ i1 ] - xs[ i0 ] );
		const gz = ( heights[ j1 * nx + i ] - heights[ j0 * nx + i ] ) / ( zs[ j1 ] - zs[ j0 ] );
		const l = Math.hypot( gx, 1, gz );
		nor[ o * 3 ] = Math.round( - gx / l * 127 ); nor[ o * 3 + 1 ] = Math.round( 1 / l * 127 ); nor[ o * 3 + 2 ] = Math.round( - gz / l * 127 );

	}

	const index = new Uint32Array( ( nx - 1 ) * ( nz - 1 ) * 6 );
	let k = 0;
	for ( let j = 0; j < nz - 1; j ++ ) for ( let i = 0; i < nx - 1; i ++ ) {

		const a = j * nx + i, b = a + 1, c = a + nx, d = c + 1;
		// 沿高度变化小的对角线切分，坡面更平顺
		if ( Math.abs( heights[ a ] - heights[ d ] ) < Math.abs( heights[ b ] - heights[ c ] ) ) {

			index[ k ++ ] = a; index[ k ++ ] = c; index[ k ++ ] = d; index[ k ++ ] = a; index[ k ++ ] = d; index[ k ++ ] = b;

		} else {

			index[ k ++ ] = a; index[ k ++ ] = c; index[ k ++ ] = b; index[ k ++ ] = b; index[ k ++ ] = c; index[ k ++ ] = d;

		}

	}

	const geo = new THREE.BufferGeometry();
	geo.setAttribute( 'position', new THREE.BufferAttribute( pos, 3 ) );
	geo.setAttribute( 'normal', new THREE.BufferAttribute( nor, 3, true ) );
	geo.setIndex( new THREE.BufferAttribute( index, 1 ) );
	geo.computeBoundingSphere();

	// 高度图 → 法线贴图（RGBA8：r = x、g = z、b = y）
	const normal = new Uint8Array( mnx * mnz * 4 );
	for ( let j = 0; j < mnz; j ++ ) for ( let i = 0; i < mnx; i ++ ) {

		const o = j * mnx + i;
		const hL = mapH[ j * mnx + Math.max( 0, i - 1 ) ], hR = mapH[ j * mnx + Math.min( mnx - 1, i + 1 ) ];
		const hD = mapH[ Math.max( 0, j - 1 ) * mnx + i ], hU = mapH[ Math.min( mnz - 1, j + 1 ) * mnx + i ];
		const gx = ( hR - hL ) / ( 2 * md ), gz = ( hU - hD ) / ( 2 * md );
		const l = Math.hypot( gx, 1, gz );
		normal[ o * 4 ] = Math.round( ( - gx / l * 0.5 + 0.5 ) * 255 );
		normal[ o * 4 + 1 ] = Math.round( ( - gz / l * 0.5 + 0.5 ) * 255 );
		normal[ o * 4 + 2 ] = Math.round( ( 1 / l ) * 255 );
		normal[ o * 4 + 3 ] = 255;

	}

	const mk = ( data, fmt, type ) => {

		const t = new THREE.DataTexture( data, mnx, mnz, fmt, type );
		t.magFilter = THREE.LinearFilter;
		t.minFilter = THREE.LinearMipmapLinearFilter;
		t.generateMipmaps = true;
		t.anisotropy = 8;
		t.needsUpdate = true;
		return t;

	};

	const maskTex = mk( mapM, THREE.RGBAFormat, THREE.UnsignedByteType );
	const normTex = mk( normal, THREE.RGBAFormat, THREE.UnsignedByteType );
	const heightTex = new THREE.DataTexture( mapH, mnx, mnz, THREE.RedFormat, THREE.FloatType );
	heightTex.magFilter = heightTex.minFilter = THREE.NearestFilter;
	heightTex.needsUpdate = true;

	const maps = { mask: maskTex, normal: normTex, height: heightTex, x0: MAP.x0, z0: MAP.z0, w: MAP.w, d: MAP.d, nx: mnx, nz: mnz, step: md, heights: mapH, masks: mapM };
	const mat = terrainMaterial( T, maps, { time } );
	const mesh = new THREE.Mesh( geo, mat );
	mesh.name = 'terrain';
	mesh.receiveShadow = true;
	mesh.castShadow = Q.terrainShadow;
	mesh.frustumCulled = false;

	// 查询：核心区用高度图双线性插值，外面直接算函数
	function heightAt( x, z ) {

		const u = ( x - MAP.x0 ) / md, v = ( z - MAP.z0 ) / md;
		if ( u >= 0 && v >= 0 && u < mnx - 1 && v < mnz - 1 ) {

			const i = Math.floor( u ), j = Math.floor( v ), fu = u - i, fv = v - j, o = j * mnx + i;
			return ( mapH[ o ] * ( 1 - fu ) + mapH[ o + 1 ] * fu ) * ( 1 - fv ) + ( mapH[ o + mnx ] * ( 1 - fu ) + mapH[ o + mnx + 1 ] * fu ) * fv;

		}

		return H( x, z );

	}

	function maskAt( x, z, ch ) {

		const i = Math.round( ( x - MAP.x0 ) / md ), j = Math.round( ( z - MAP.z0 ) / md );
		if ( i < 0 || j < 0 || i >= mnx || j >= mnz ) return 0;
		return mapM[ ( j * mnx + i ) * 4 + ch ] / 255;

	}

	console.log( `[scene] terrain ${ nx }x${ nz } (${ ( nx * nz / 1e6 ).toFixed( 2 ) }M verts), heights+maps ${ ( tH - t0 ).toFixed( 0 ) } ms, total ${ ( performance.now() - t0 ).toFixed( 0 ) } ms` );
	return { mesh, maps, heightAt, maskAt, material: mat };

}

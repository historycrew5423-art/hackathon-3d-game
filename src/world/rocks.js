import * as THREE from 'three';
import { MeshoptDecoder } from 'meshoptimizer/decoder';
import { rockMaterial } from '../render/materials.js';
import { asset } from '../core/params.js';

// ---------------------------------------------------------------------------
// 岩体网格：读取离线烘焙好的 assets/rocks_<q>.bin（tools/bake_rocks.mjs 生成，格式见那里的说明）。
// 解码后把量化的位置还原成浮点数，法线和 aux（遮蔽、白骨、洞穴、植被）直接用 8 位数据。
// ---------------------------------------------------------------------------

export async function loadRocks( Q, T, onProgress ) {

	const t0 = performance.now();
	const file = Q.rock === 'low' ? 'rocks_low.bin' : 'rocks_high.bin';
	const res = await fetch( asset( file ) );
	if ( ! res.ok ) throw new Error( `${ file }: HTTP ${ res.status }` );
	const total = + res.headers.get( 'content-length' ) || 0;
	let buf;
	if ( res.body && total && onProgress ) {

		const reader = res.body.getReader();
		const chunks = [];
		let got = 0;
		for ( ;; ) {

			const { done, value } = await reader.read();
			if ( done ) break;
			chunks.push( value );
			got += value.length;
			onProgress( got / total );

		}

		buf = new Uint8Array( got );
		let o = 0;
		for ( const c of chunks ) { buf.set( c, o ); o += c.length; }

	} else buf = new Uint8Array( await res.arrayBuffer() );

	const tDl = performance.now();
	await MeshoptDecoder.ready;
	const magic = String.fromCharCode( buf[ 0 ], buf[ 1 ], buf[ 2 ], buf[ 3 ] );
	if ( magic !== 'RKS1' ) throw new Error( file + ': bad magic' );
	const headLen = new DataView( buf.buffer ).getUint32( 4, true );
	const head = JSON.parse( new TextDecoder().decode( buf.subarray( 8, 8 + headLen ) ) );
	const base = 8 + headLen;

	const mat = rockMaterial( T );
	const group = new THREE.Group();
	group.name = 'rocks';
	const meshes = {};
	let tris = 0;
	for ( const v of head.volumes ) {

		const vsrc = buf.subarray( base + v.offset, base + v.offset + v.vLen );
		const isrc = buf.subarray( base + v.offset + v.vLen, base + v.offset + v.vLen + v.iLen );
		const vb = new Uint8Array( v.verts * 16 );
		MeshoptDecoder.decodeVertexBuffer( vb, v.verts, 16, vsrc );
		const index = new Uint32Array( v.tris * 3 );
		MeshoptDecoder.decodeIndexBuffer( new Uint8Array( index.buffer ), index.length, 4, isrc );
		const u16 = new Uint16Array( vb.buffer );
		const i8 = new Int8Array( vb.buffer );
		const pos = new Float32Array( v.verts * 3 ), nor = new Int8Array( v.verts * 3 ), aux = new Uint8Array( v.verts * 4 );
		const [ bx, by, bz ] = v.bmin, s = v.step;
		for ( let i = 0; i < v.verts; i ++ ) {

			pos[ i * 3 ] = bx + u16[ i * 8 ] * s; pos[ i * 3 + 1 ] = by + u16[ i * 8 + 1 ] * s; pos[ i * 3 + 2 ] = bz + u16[ i * 8 + 2 ] * s;
			nor[ i * 3 ] = i8[ i * 16 + 8 ]; nor[ i * 3 + 1 ] = i8[ i * 16 + 9 ]; nor[ i * 3 + 2 ] = i8[ i * 16 + 10 ];
			aux[ i * 4 ] = vb[ i * 16 + 12 ]; aux[ i * 4 + 1 ] = vb[ i * 16 + 13 ]; aux[ i * 4 + 2 ] = vb[ i * 16 + 14 ]; aux[ i * 4 + 3 ] = vb[ i * 16 + 15 ];

		}

		const geo = new THREE.BufferGeometry();
		geo.setAttribute( 'position', new THREE.BufferAttribute( pos, 3 ) );
		geo.setAttribute( 'normal', new THREE.BufferAttribute( nor, 3, true ) );
		geo.setAttribute( 'aux', new THREE.BufferAttribute( aux, 4, true ) );
		geo.setIndex( new THREE.BufferAttribute( index, 1 ) );
		geo.computeBoundingSphere();
		geo.computeBoundingBox();
		const mesh = new THREE.Mesh( geo, mat );
		mesh.name = 'rock-' + v.name;
		mesh.castShadow = v.name !== 'far';
		mesh.receiveShadow = true;
		group.add( mesh );
		meshes[ v.name ] = mesh;
		tris += v.tris;

	}

	console.log( `[scene] rocks ${ file } ${ ( buf.length / 1048576 ).toFixed( 1 ) } MB: download ${ ( tDl - t0 ).toFixed( 0 ) } ms, decode ${ ( performance.now() - tDl ).toFixed( 0 ) } ms, ${ ( tris / 1000 ).toFixed( 0 ) }k tris` );
	return { group, meshes, material: mat };

}

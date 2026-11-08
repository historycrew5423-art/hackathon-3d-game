// ---------------------------------------------------------------------------
// 离线烘焙岩体网格：node tools/bake_rocks.mjs [--q=high,low] [--only=skull,left]
// 每个岩体按 X 切片交给所有 CPU 核心，网格用 meshoptimizer 压缩后写进 assets/rocks_<q>.bin。
// 网页加载时只需要下载和解码（几百毫秒），不用在玩家的电脑上现算几十秒。
// 每个岩体的结果另存一份到 .cache/，--only 只重算指定的岩体，其余直接用缓存。
//
// 文件格式：'RKS1' | u32 头部长度 | 头部 JSON | 补齐到 4 字节 | 各岩体的压缩数据
// 顶点 16 字节：u16×3 位置（按包围盒量化，三个轴同一个步长）+ u16 空 | i8×4 法线 | u8×4 aux
// ---------------------------------------------------------------------------
import { Worker } from 'node:worker_threads';
import os from 'node:os';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { MeshoptEncoder } from 'meshoptimizer/encoder';
import { VOLUMES } from '../src/gen/rocks.js';
import { slabs } from '../src/gen/mesher.js';

const ROOT = path.resolve( path.dirname( fileURLToPath( import.meta.url ) ), '..' );
const arg = ( k, d ) => {

	const a = process.argv.find( ( s ) => s.startsWith( `--${ k }=` ) );
	return a ? a.slice( k.length + 3 ) : d;

};

const QUALITIES = arg( 'q', 'high,low' ).split( ',' );
const ONLY = arg( 'only', '' ) ? arg( 'only', '' ).split( ',' ) : null;
const SIMPLIFY = { high: 0.3, mid: 0.32, low: 0.36 };
const CACHE = path.join( ROOT, '.cache', 'rocks' );
fs.mkdirSync( CACHE, { recursive: true } );
await MeshoptEncoder.ready;

const N = Math.max( 2, os.cpus().length - 1 );
const workers = [];
const pending = new Map();
let nextId = 0;
for ( let i = 0; i < N; i ++ ) {

	const w = new Worker( new URL( './bake_worker.mjs', import.meta.url ) );
	w.busy = 0;
	w.on( 'message', ( m ) => {

		const p = pending.get( m.id );
		pending.delete( m.id );
		w.busy --;
		m.error ? p.reject( new Error( m.error ) ) : p.resolve( m.r );

	} );
	workers.push( w );

}

function run( task ) {

	return new Promise( ( resolve, reject ) => {

		const id = ++ nextId;
		pending.set( id, { resolve, reject } );
		let w = workers[ 0 ];
		for ( const x of workers ) if ( x.busy < w.busy ) w = x;
		w.busy ++;
		w.postMessage( { id, ...task } );

	} );

}

async function bakeVolume( name, q ) {

	const V = VOLUMES[ name ];
	const cell = V.cell[ q ];
	const vol = { ...V, cell };
	// 切得比线程数多，忙闲更均匀（骷髅、峭壁这种大块的切得更细）
	const parts = slabs( vol, N * 4 );
	const t0 = performance.now();
	const res = await Promise.all( parts.map( ( [ ix0, ix1 ] ) => run( { name, quality: q, ix0, ix1, simplify: cell * SIMPLIFY[ q ] } ) ) );
	let nv = 0, ni = 0, before = 0, cpu = 0;
	for ( const r of res ) { nv += r.pos.length / 3; ni += r.index.length; before += r.before; cpu += r.ms; }
	const pos = new Float32Array( nv * 3 ), nor = new Int8Array( nv * 3 ), aux = new Uint8Array( nv * 4 ), index = new Uint32Array( ni );
	let ov = 0, oi = 0;
	for ( const r of res ) {

		pos.set( r.pos, ov * 3 ); nor.set( r.nor, ov * 3 ); aux.set( r.aux, ov * 4 );
		for ( let i = 0; i < r.index.length; i ++ ) index[ oi + i ] = r.index[ i ] + ov;
		ov += r.pos.length / 3; oi += r.index.length;

	}

	// 顶点缓存 / 取址顺序优化（同时让压缩率更高）
	const [ remap, unique ] = MeshoptEncoder.reorderMesh( index, true, false );
	let bmin = [ Infinity, Infinity, Infinity ], bmax = [ - Infinity, - Infinity, - Infinity ];
	for ( let i = 0; i < nv; i ++ ) for ( let k = 0; k < 3; k ++ ) {

		bmin[ k ] = Math.min( bmin[ k ], pos[ i * 3 + k ] );
		bmax[ k ] = Math.max( bmax[ k ], pos[ i * 3 + k ] );

	}

	const ext = Math.max( bmax[ 0 ] - bmin[ 0 ], bmax[ 1 ] - bmin[ 1 ], bmax[ 2 ] - bmin[ 2 ], 1e-3 );
	const step = ext / 65535;
	const vb = new Uint8Array( unique * 16 );
	const dv = new DataView( vb.buffer );
	for ( let i = 0; i < nv; i ++ ) {

		const n = remap[ i ];
		if ( n === 0xffffffff ) continue;
		const o = n * 16;
		for ( let k = 0; k < 3; k ++ ) dv.setUint16( o + k * 2, Math.round( ( pos[ i * 3 + k ] - bmin[ k ] ) / step ), true );
		dv.setInt8( o + 8, nor[ i * 3 ] ); dv.setInt8( o + 9, nor[ i * 3 + 1 ] ); dv.setInt8( o + 10, nor[ i * 3 + 2 ] );
		vb[ o + 12 ] = aux[ i * 4 ]; vb[ o + 13 ] = aux[ i * 4 + 1 ]; vb[ o + 14 ] = aux[ i * 4 + 2 ]; vb[ o + 15 ] = aux[ i * 4 + 3 ];

	}

	const venc = MeshoptEncoder.encodeVertexBuffer( vb, unique, 16 );
	const ienc = MeshoptEncoder.encodeIndexBuffer( new Uint8Array( index.buffer ), index.length, 4 );
	const meta = { name, cell, verts: unique, tris: index.length / 3, bmin, step, vLen: venc.length, iLen: ienc.length };
	const blob = Buffer.concat( [ Buffer.from( venc ), Buffer.from( ienc ) ] );
	fs.writeFileSync( path.join( CACHE, `${ q }_${ name }.bin` ), blob );
	fs.writeFileSync( path.join( CACHE, `${ q }_${ name }.json` ), JSON.stringify( meta ) );
	console.log( `${ q } ${ name.padEnd( 8 ) } cell ${ cell }m: ${ ( before / 1000 ).toFixed( 0 ) }k → ${ ( meta.tris / 1000 ).toFixed( 0 ) }k tris, ${ unique } verts, ${ ( blob.length / 1024 ).toFixed( 0 ) } KB, ${ ( ( performance.now() - t0 ) / 1000 ).toFixed( 1 ) }s (cpu ${ ( cpu / 1000 ).toFixed( 1 ) }s)` );

}

const t0 = performance.now();
for ( const q of QUALITIES ) {

	for ( const name of Object.keys( VOLUMES ) ) {

		const cached = fs.existsSync( path.join( CACHE, `${ q }_${ name }.json` ) );
		if ( ONLY ? ONLY.includes( name ) : true ) {

			if ( ! ONLY && cached && process.argv.includes( '--keep' ) ) continue;
			await bakeVolume( name, q );

		} else if ( ! cached ) await bakeVolume( name, q );

	}

	// 拼成一个文件
	const metas = [], blobs = [];
	let off = 0;
	for ( const name of Object.keys( VOLUMES ) ) {

		const meta = JSON.parse( fs.readFileSync( path.join( CACHE, `${ q }_${ name }.json` ), 'utf8' ) );
		const blob = fs.readFileSync( path.join( CACHE, `${ q }_${ name }.bin` ) );
		meta.offset = off;
		off += blob.length;
		const pad = ( 4 - ( off % 4 ) ) % 4;
		metas.push( meta );
		blobs.push( blob, Buffer.alloc( pad ) );
		off += pad;

	}

	const head = Buffer.from( JSON.stringify( { version: 1, volumes: metas } ) );
	const headPad = ( 4 - ( ( 8 + head.length ) % 4 ) ) % 4;
	const pre = Buffer.alloc( 8 );
	pre.write( 'RKS1', 0, 'ascii' );
	pre.writeUInt32LE( head.length + headPad, 4 );
	const out = Buffer.concat( [ pre, head, Buffer.alloc( headPad, 0x20 ), ...blobs ] );
	fs.writeFileSync( path.join( ROOT, 'assets', `rocks_${ q }.bin` ), out );
	console.log( `→ assets/rocks_${ q }.bin ${ ( out.length / 1024 / 1024 ).toFixed( 2 ) } MB, ${ metas.reduce( ( s, m ) => s + m.tris, 0 ) / 1000 | 0 }k tris` );

}

console.log( `done in ${ ( ( performance.now() - t0 ) / 1000 ).toFixed( 1 ) }s` );
await Promise.all( workers.map( ( w ) => w.terminate() ) );

// 用 meshoptimizer 简化岩体网格：Surface Nets 出来的网格到处一样密，平缓的地方可以合并掉很多三角形。
// 片和片的交界、网格的开口边都锁住不动（LockBorder），所以分片简化后拼起来仍然没有裂缝。
import { MeshoptSimplifier } from 'meshoptimizer/simplifier';

export const simplifierReady = MeshoptSimplifier.ready;

export function simplifyMesh( r, error ) {

	const { pos, nor, aux } = r;
	const n = pos.length / 3;
	if ( r.index.length < 300 ) return r;
	const [ idx ] = MeshoptSimplifier.simplify( r.index, pos, 3, 0, error, [ 'LockBorder', 'ErrorAbsolute' ] );
	// 压缩：只留用到的顶点
	const remap = new Int32Array( n ).fill( - 1 );
	let nv = 0;
	for ( let i = 0; i < idx.length; i ++ ) if ( remap[ idx[ i ] ] < 0 ) remap[ idx[ i ] ] = nv ++;
	const p2 = new Float32Array( nv * 3 ), n2 = new Int8Array( nv * 3 ), a2 = new Uint8Array( nv * 4 );
	for ( let o = 0; o < n; o ++ ) {

		const k = remap[ o ];
		if ( k < 0 ) continue;
		p2[ k * 3 ] = pos[ o * 3 ]; p2[ k * 3 + 1 ] = pos[ o * 3 + 1 ]; p2[ k * 3 + 2 ] = pos[ o * 3 + 2 ];
		n2[ k * 3 ] = nor[ o * 3 ]; n2[ k * 3 + 1 ] = nor[ o * 3 + 1 ]; n2[ k * 3 + 2 ] = nor[ o * 3 + 2 ];
		a2[ k * 4 ] = aux[ o * 4 ]; a2[ k * 4 + 1 ] = aux[ o * 4 + 1 ]; a2[ k * 4 + 2 ] = aux[ o * 4 + 2 ]; a2[ k * 4 + 3 ] = aux[ o * 4 + 3 ];

	}

	const i2 = new Uint32Array( idx.length );
	for ( let i = 0; i < idx.length; i ++ ) i2[ i ] = remap[ idx[ i ] ];
	return { ...r, pos: p2, nor: n2, aux: a2, index: i2, trisBefore: r.index.length / 3 };

}

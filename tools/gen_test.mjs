// 在 Node 里单线程跑一遍岩体网格生成，看耗时和三角形数：node tools/gen_test.mjs [quality] [names]
import { VOLUMES } from '../src/gen/rocks.js';
import { meshSDF } from '../src/gen/mesher.js';
import { height } from '../src/gen/terrain.js';
import { simplifyMesh, simplifierReady } from '../src/gen/simplify.js';
await simplifierReady;

const q = process.argv[ 2 ] || 'low';
const names = ( process.argv[ 3 ] || Object.keys( VOLUMES ).join( ',' ) ).split( ',' );
let t = performance.now();
let acc = 0;
for ( let i = 0; i < 200000; i ++ ) acc += height( - 300 + ( i % 600 ), - 1000 + ( i / 200 ) );
console.log( `terrain: 200k samples ${ ( performance.now() - t ).toFixed( 0 ) } ms (${ acc.toFixed( 0 ) })` );
console.log( 'H(0,40)=', height( 0, 40 ).toFixed( 2 ), ' H(-74,-300)=', height( - 74, - 300 ).toFixed( 2 ), ' H(28,-158)=', height( 28, - 158 ).toFixed( 2 ), ' H(76,-560)=', height( 76, - 560 ).toFixed( 2 ) );
for ( const n of names ) {

	const V = VOLUMES[ n ];
	const vol = { ...V, cell: V.cell[ q ] };
	t = performance.now();
	const nx = Math.ceil( ( V.bounds[ 3 ] - V.bounds[ 0 ] ) / vol.cell );
	const r = meshSDF( vol, 0, nx );
	const t1 = performance.now();
	const s = simplifyMesh( r, vol.cell * 0.3 );
	console.log( `${ n } [${ q } ${ vol.cell }m]: mesh ${ ( t1 - t ).toFixed( 0 ) } ms, simplify ${ ( performance.now() - t1 ).toFixed( 0 ) } ms, tris ${ r.index.length / 3 } -> ${ s.index.length / 3 }, blocks ${ r.blocks }, samples ${ ( r.samples / 1e6 ).toFixed( 2 ) }M` );

}

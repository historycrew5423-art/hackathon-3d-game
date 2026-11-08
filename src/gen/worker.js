// 生成线程：算地形高度、地表遮罩、岩体网格。由 pool.js 创建（代码在打包时内联成字符串）。
import { height, masks } from './terrain.js';
import { VOLUMES } from './rocks.js';
import { meshSDF } from './mesher.js';
import { simplifyMesh, simplifierReady } from './simplify.js';

const m4 = [ 0, 0, 0, 0 ];

self.onmessage = async ( e ) => {

	const { id, task } = e.data;
	try {

		const t0 = performance.now();
		let result, transfer = [];
		if ( task.type === 'heights' ) {

			const { xs, zs, j0, j1 } = task;
			const nx = xs.length;
			const out = new Float32Array( ( j1 - j0 ) * nx );
			for ( let j = j0; j < j1; j ++ ) {

				const z = zs[ j ], o = ( j - j0 ) * nx;
				for ( let i = 0; i < nx; i ++ ) out[ o + i ] = height( xs[ i ], z );

			}

			result = { h: out, j0, j1 };
			transfer = [ out.buffer ];

		} else if ( task.type === 'maps' ) {

			const { x0, z0, dx, nx, j0, j1 } = task;
			const hh = new Float32Array( ( j1 - j0 ) * nx );
			const mm = new Uint8Array( ( j1 - j0 ) * nx * 4 );
			for ( let j = j0; j < j1; j ++ ) {

				const z = z0 + j * dx;
				for ( let i = 0; i < nx; i ++ ) {

					const x = x0 + i * dx, o = ( j - j0 ) * nx + i;
					hh[ o ] = height( x, z );
					masks( x, z, m4 );
					mm[ o * 4 ] = Math.round( m4[ 0 ] * 255 );
					mm[ o * 4 + 1 ] = Math.round( m4[ 1 ] * 255 );
					mm[ o * 4 + 2 ] = Math.round( m4[ 2 ] * 255 );
					mm[ o * 4 + 3 ] = Math.round( m4[ 3 ] * 255 );

				}

			}

			result = { h: hh, m: mm, j0, j1 };
			transfer = [ hh.buffer, mm.buffer ];

		} else if ( task.type === 'sdf' ) {

			const V = VOLUMES[ task.name ];
			const vol = { ...V, cell: V.cell[ task.quality ] || V.cell.high };
			let r = meshSDF( vol, task.ix0, task.ix1 );
			if ( task.simplify > 0 ) {

				await simplifierReady;
				r = simplifyMesh( r, task.simplify );

			}

			result = r;
			transfer = [ r.pos.buffer, r.nor.buffer, r.aux.buffer, r.index.buffer ];

		}

		result.ms = performance.now() - t0;
		self.postMessage( { id, result }, transfer );

	} catch ( err ) {

		self.postMessage( { id, error: err.message + '\n' + err.stack } );

	}

};

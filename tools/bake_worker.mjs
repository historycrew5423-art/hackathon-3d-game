// 烘焙线程：算一个岩体的一片（SDF → Surface Nets → 简化）
import { parentPort } from 'node:worker_threads';
import { VOLUMES } from '../src/gen/rocks.js';
import { meshSDF } from '../src/gen/mesher.js';
import { simplifyMesh, simplifierReady } from '../src/gen/simplify.js';

parentPort.on( 'message', async ( { id, name, quality, ix0, ix1, simplify } ) => {

	try {

		const t0 = performance.now();
		const V = VOLUMES[ name ];
		const vol = { ...V, cell: V.cell[ quality ] };
		let r = meshSDF( vol, ix0, ix1 );
		const before = r.index.length / 3;
		if ( simplify > 0 ) {

			await simplifierReady;
			r = simplifyMesh( r, simplify );

		}

		parentPort.postMessage( { id, r: { pos: r.pos, nor: r.nor, aux: r.aux, index: r.index, before, samples: r.samples, ms: performance.now() - t0 } }, [ r.pos.buffer, r.nor.buffer, r.aux.buffer, r.index.buffer ] );

	} catch ( e ) {

		parentPort.postMessage( { id, error: e.stack } );

	}

} );

// 生成线程池：线程代码在打包时内联成字符串（见 tools/build.mjs），这里用 Blob 创建。
// 任务交给当前排队最少的线程。
import WORKER_CODE from 'inline-worker:./worker.js';

export function createPool( n = Math.max( 2, Math.min( 12, ( navigator.hardwareConcurrency || 4 ) - 1 ) ) ) {

	const url = URL.createObjectURL( new Blob( [ WORKER_CODE ], { type: 'text/javascript' } ) );
	const workers = [];
	const pending = new Map();
	let nextId = 0;
	for ( let i = 0; i < n; i ++ ) {

		const w = new Worker( url );
		w.busy = 0;
		w.onmessage = ( e ) => {

			const { id, result, error } = e.data;
			const p = pending.get( id );
			pending.delete( id );
			w.busy --;
			if ( error ) p.reject( new Error( error ) );
			else p.resolve( result );

		};
		w.onerror = ( e ) => console.error( '[scene] worker error', e.message );
		workers.push( w );

	}

	return {
		size: n,
		run( task, transfer = [] ) {

			return new Promise( ( resolve, reject ) => {

				const id = ++ nextId;
				pending.set( id, { resolve, reject } );
				let w = workers[ 0 ];
				for ( const x of workers ) if ( x.busy < w.busy ) w = x;
				w.busy ++;
				w.postMessage( { id, task }, transfer );

			} );

		},
		dispose() {

			workers.forEach( ( w ) => w.terminate() );
			URL.revokeObjectURL( url );

		}
	};

}

// 打包：src/main.js → app.js（IIFE，普通 <script src> 引入，静态托管和 htmlpreview 都能直接用）。
// 生成线程（src/gen/worker.js）单独打包成字符串，内联进主包，运行时用 Blob 创建 Worker，
// 这样只需要一个 app.js，不用担心 htmlpreview 下 Worker 文件的跨域问题。
// 用法：node tools/build.mjs [--dev]
import * as esbuild from 'esbuild';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve( path.dirname( fileURLToPath( import.meta.url ) ), '..' );
const dev = process.argv.includes( '--dev' );

const inlineWorker = {
	name: 'inline-worker',
	setup( build ) {

		build.onResolve( { filter: /^inline-worker:/ }, ( args ) => ( {
			path: path.resolve( args.resolveDir, args.path.slice( 'inline-worker:'.length ) ),
			namespace: 'inline-worker'
		} ) );
		build.onLoad( { filter: /.*/, namespace: 'inline-worker' }, async ( args ) => {

			const r = await esbuild.build( {
				entryPoints: [ args.path ], bundle: true, write: false, format: 'iife',
				minify: ! dev, target: 'es2022', metafile: true, logLevel: 'silent'
			} );
			return {
				contents: `export default ${ JSON.stringify( r.outputFiles[ 0 ].text ) };`,
				loader: 'js',
				watchFiles: Object.keys( r.metafile.inputs ).map( ( f ) => path.resolve( ROOT, f ) )
			};

		} );

	}
};

const t0 = Date.now();
const res = await esbuild.build( {
	absWorkingDir: ROOT,
	entryPoints: [ 'src/main.js' ],
	bundle: true,
	format: 'iife',
	minify: ! dev,
	sourcemap: dev ? 'inline' : false,
	target: 'es2022',
	outfile: 'app.js',
	plugins: [ inlineWorker ],
	logLevel: 'warning',
	metafile: true
} );
const bytes = Object.values( res.metafile.outputs ).reduce( ( s, o ) => s + o.bytes, 0 );
console.log( `app.js ${ ( bytes / 1024 ).toFixed( 0 ) } KB, ${ Date.now() - t0 } ms${ dev ? ' (dev)' : '' }` );

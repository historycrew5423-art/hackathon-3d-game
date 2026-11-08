// 截图验证：用本机的 Edge（无头、真显卡）打开页面，按预设视角渲染固定帧并截图。
// 用法：node tools/shot.mjs --views=ref,left --q=high --w=1280 --h=720 --tag=r1 [--t=12] [--extra=a=1&b=2]
// 视角名见 src/config.js 的 VIEWS；也可以写 JSON：--views='[{"pos":[0,50,40],"look":[0,60,-900],"fov":50}]'
// 结果：shots/<tag>-<视角>.jpg，日志 shots/<tag>.log（控制台报错、显卡、生成耗时）
import puppeteer from 'puppeteer-core';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve( path.dirname( fileURLToPath( import.meta.url ) ), '..' );
const arg = ( k, d ) => {

	const a = process.argv.find( ( s ) => s.startsWith( `--${ k }=` ) );
	return a ? a.slice( k.length + 3 ) : d;

};

const W = + arg( 'w', 1280 ), H = + arg( 'h', 720 );
const tag = arg( 't' + 'ag', 'shot' );
const q = arg( 'q', 'high' );
const t = arg( 't', '' );
const extra = arg( 'extra', '' );
let views = arg( 'views', 'ref' );
views = views.trim().startsWith( '[' ) ? JSON.parse( views ) : views.split( ',' );
const OUT = path.join( ROOT, 'shots' );
fs.mkdirSync( OUT, { recursive: true } );

const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.hdr': 'application/octet-stream', '.glb': 'model/gltf-binary' };
const server = http.createServer( ( req, res ) => {

	let p = decodeURIComponent( req.url.split( '?' )[ 0 ] );
	if ( p.endsWith( '/' ) ) p += 'index.html';
	const file = path.resolve( path.join( ROOT, p ) );
	if ( ! file.startsWith( ROOT ) ) { res.writeHead( 403 ); res.end(); return; }
	fs.readFile( file, ( err, data ) => {

		if ( err ) { res.writeHead( 404 ); res.end(); return; }
		res.writeHead( 200, { 'Content-Type': MIME[ path.extname( file ).toLowerCase() ] || 'application/octet-stream' } );
		res.end( data );

	} );

} );
await new Promise( ( r ) => server.listen( 0, '127.0.0.1', r ) );
const port = server.address().port;

const log = [];
const t0 = Date.now();
const browser = await puppeteer.launch( {
	executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
	headless: 'new',
	args: [ '--use-angle=d3d11', '--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--force_high_performance_gpu', '--no-sandbox', '--disable-background-timer-throttling', '--disable-renderer-backgrounding' ],
	defaultViewport: { width: W, height: H, deviceScaleFactor: 1 },
	protocolTimeout: 600000
} );

try {

	const page = await browser.newPage();
	page.on( 'pageerror', ( e ) => log.push( `pageerror ${ e.message }` ) );
	page.on( 'console', ( m ) => {

		const ty = m.type();
		if ( ty === 'error' || ty === 'warn' || m.text().startsWith( '[scene]' ) ) log.push( `${ ty } ${ m.text() }` );

	} );
	const url = `http://127.0.0.1:${ port }/index.html?shot&q=${ q }${ extra ? '&' + extra : '' }`;
	await page.goto( url, { waitUntil: 'domcontentloaded' } );
	await page.waitForFunction( () => window.__scene && ( window.__scene.ready || window.__scene.error ), { timeout: 300000, polling: 250 } );
	const info = await page.evaluate( () => window.__scene.info() );
	log.push( 'info ' + JSON.stringify( info ) );
	for ( const v of views ) {

		const name = typeof v === 'string' ? v : ( v.name || 'custom' );
		const spec = typeof v === 'string' ? { view: v } : v;
		if ( t !== '' ) spec.t = + t;
		await page.evaluate( ( s ) => window.__scene.shot( s ), spec );
		await page.waitForFunction( () => window.__scene.shotDone, { timeout: 300000, polling: 100 } );
		const file = path.join( OUT, `${ tag }-${ name }.jpg` );
		await page.screenshot( { path: file, type: 'jpeg', quality: 88 } );
		const st = await page.evaluate( () => window.__scene.info() );
		log.push( `shot ${ name } ${ JSON.stringify( st.render ) }` );

	}

} catch ( e ) {

	log.push( 'ERROR ' + e.message );

}

await browser.close();
server.close();
log.push( `total ${ ( ( Date.now() - t0 ) / 1000 ).toFixed( 1 ) }s` );
fs.writeFileSync( path.join( OUT, `${ tag }.log` ), log.join( '\n' ) + '\n' );
console.log( log.join( '\n' ) );

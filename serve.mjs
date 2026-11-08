// 本地预览：node serve.mjs，然后打开 http://localhost:8765
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname( fileURLToPath( import.meta.url ) );
const PORT = + ( process.env.PORT || 8765 );
const MIME = {
	'.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
	'.webp': 'image/webp', '.jpg': 'image/jpeg', '.png': 'image/png', '.hdr': 'application/octet-stream',
	'.glb': 'model/gltf-binary', '.bin': 'application/octet-stream', '.css': 'text/css'
};

http.createServer( ( req, res ) => {

	let p = decodeURIComponent( req.url.split( '?' )[ 0 ] );
	if ( p.endsWith( '/' ) ) p += 'index.html';
	const file = path.resolve( path.join( ROOT, p ) );
	if ( ! file.startsWith( ROOT ) ) { res.writeHead( 403 ); res.end(); return; }
	fs.readFile( file, ( err, data ) => {

		if ( err ) { res.writeHead( 404 ); res.end( 'not found' ); return; }
		res.writeHead( 200, { 'Content-Type': MIME[ path.extname( file ).toLowerCase() ] || 'application/octet-stream', 'Cache-Control': 'no-cache' } );
		res.end( data );

	} );

} ).listen( PORT, () => console.log( `http://localhost:${ PORT }` ) );

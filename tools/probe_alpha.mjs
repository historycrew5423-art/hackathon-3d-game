// 看 Poly Haven 的 alpha 贴图存在哪个通道
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve( path.dirname( fileURLToPath( import.meta.url ) ), '..' );
const dir = path.join( ROOT, '.cache' );
const out = [];
for ( const f of fs.readdirSync( dir ).filter( ( f ) => /alpha/i.test( f ) ) ) {

	const img = sharp( path.join( dir, f ) );
	const m = await img.metadata();
	const st = await img.stats();
	out.push( `${ f } ch=${ m.channels } hasAlpha=${ m.hasAlpha } means=${ st.channels.map( ( c ) => c.mean.toFixed( 1 ) ).join( ',' ) }` );

}

fs.writeFileSync( path.join( ROOT, 'shots', 'probe_alpha.txt' ), out.join( '\n' ) );

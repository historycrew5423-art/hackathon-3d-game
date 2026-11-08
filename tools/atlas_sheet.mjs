// 把带透明的叶片 / 花 / 草贴图铺在灰底上拼成一张图，方便看清图集布局：node tools/atlas_sheet.mjs
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve( path.dirname( fileURLToPath( import.meta.url ) ), '..' );
const names = ( process.argv[ 2 ] || 'twig,leaves,flower,grassblade,fern' ).split( ',' );
const S = + ( process.argv[ 3 ] || 400 );
const comps = [];
let i = 0;
for ( const n of names ) {

	const img = await sharp( path.join( ROOT, 'assets', n + '.webp' ) ).resize( S, S, { fit: 'fill' } ).png().toBuffer();
	comps.push( { input: img, left: i * S, top: 0 } );
	// 10% 网格线，方便读坐标
	const grid = `<svg width="${ S }" height="${ S }">${ Array.from( { length: 9 }, ( _, k ) => `<line x1="${ ( k + 1 ) * S / 10 }" y1="0" x2="${ ( k + 1 ) * S / 10 }" y2="${ S }" stroke="#f00" stroke-opacity="0.35"/><line y1="${ ( k + 1 ) * S / 10 }" x1="0" y2="${ ( k + 1 ) * S / 10 }" x2="${ S }" stroke="#f00" stroke-opacity="0.35"/>` ).join( '' ) }<text x="4" y="14" font-size="13" fill="#ff0" font-family="Arial">${ n }</text></svg>`;
	comps.push( { input: Buffer.from( grid ), left: i * S, top: 0 } );
	i ++;

}

const outName = process.argv[ 4 ] || 'atlas.jpg';
await sharp( { create: { width: S * names.length, height: S, channels: 3, background: '#7a7a7a' } } ).composite( comps ).jpeg( { quality: 85 } ).toFile( path.join( ROOT, 'shots', outName ) );
const stats = [];
for ( const n of names ) {

	const st = await sharp( path.join( ROOT, 'assets', n + '.webp' ) ).stats();
	stats.push( `${ n }: channels=${ st.channels.length } alphaMean=${ st.channels[ 3 ] ? st.channels[ 3 ].mean.toFixed( 1 ) : 'none' }` );

}

console.log( stats.join( '\n' ) );

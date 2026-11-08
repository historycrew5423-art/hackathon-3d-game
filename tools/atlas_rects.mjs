// 找出带透明的贴图集里每个独立图块（松针枝、叶片、草丛……）的包围盒，写进 src/world/atlas_rects.json。
// 做法：alpha 缩到 256×256，阈值化，四邻域连通块标记，面积太小的丢掉。坐标归一化到 0~1（v 向下，和图片一致）。
// 用法：node tools/atlas_rects.mjs
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve( path.dirname( fileURLToPath( import.meta.url ) ), '..' );
const NAMES = [ 'twig', 'leaves', 'grassblade', 'fern', 'flower' ];
const S = 256;
const out = {};
const svgParts = [];
for ( const [ k, name ] of NAMES.entries() ) {

	const { data } = await sharp( path.join( ROOT, 'assets', name + '.webp' ) ).ensureAlpha().extractChannel( 3 ).resize( S, S, { kernel: 'linear' } ).raw().toBuffer( { resolveWithObject: true } );
	const lab = new Int32Array( S * S ).fill( - 1 );
	const rects = [];
	for ( let i = 0; i < S * S; i ++ ) {

		if ( lab[ i ] >= 0 || data[ i ] < 100 ) continue;
		// 洪水填充
		const id = rects.length;
		let x0 = S, y0 = S, x1 = - 1, y1 = - 1, n = 0;
		const stack = [ i ];
		lab[ i ] = id;
		while ( stack.length ) {

			const p = stack.pop();
			const x = p % S, y = ( p / S ) | 0;
			n ++;
			if ( x < x0 ) x0 = x; if ( x > x1 ) x1 = x; if ( y < y0 ) y0 = y; if ( y > y1 ) y1 = y;
			for ( const q of [ p - 1, p + 1, p - S, p + S ] ) {

				if ( q < 0 || q >= S * S ) continue;
				if ( Math.abs( ( q % S ) - x ) > 1 ) continue;
				if ( lab[ q ] >= 0 || data[ q ] < 100 ) continue;
				lab[ q ] = id;
				stack.push( q );

			}

		}

		rects.push( { x0, y0, x1, y1, n } );

	}

	const keep = rects.filter( ( r ) => r.n > 60 ).map( ( r ) => ( {
		u0: + ( Math.max( 0, r.x0 - 1 ) / S ).toFixed( 4 ), v0: + ( Math.max( 0, r.y0 - 1 ) / S ).toFixed( 4 ),
		u1: + ( Math.min( S, r.x1 + 2 ) / S ).toFixed( 4 ), v1: + ( Math.min( S, r.y1 + 2 ) / S ).toFixed( 4 ),
		fill: + ( r.n / ( ( r.x1 - r.x0 + 1 ) * ( r.y1 - r.y0 + 1 ) ) ).toFixed( 2 ), px: r.n
	} ) ).sort( ( a, b ) => b.px - a.px );
	out[ name ] = keep;
	const ox = k * 300;
	svgParts.push( ...keep.map( ( r, i ) => `<rect x="${ ox + r.u0 * 300 }" y="${ r.v0 * 300 }" width="${ ( r.u1 - r.u0 ) * 300 }" height="${ ( r.v1 - r.v0 ) * 300 }" fill="none" stroke="#ff0" stroke-width="1"/><text x="${ ox + r.u0 * 300 + 2 }" y="${ r.v0 * 300 + 10 }" font-size="10" fill="#0ff" font-family="Arial">${ i }</text>` ) );

}

fs.writeFileSync( path.join( ROOT, 'src', 'world', 'atlas_rects.json' ), JSON.stringify( out, null, 1 ) );
// 检查图：每张贴图 300×300，叠上找到的框和编号
const comps = [];
for ( const [ k, name ] of NAMES.entries() ) comps.push( { input: await sharp( path.join( ROOT, 'assets', name + '.webp' ) ).resize( 300, 300, { fit: 'fill' } ).png().toBuffer(), left: k * 300, top: 0 } );
comps.push( { input: Buffer.from( `<svg width="${ NAMES.length * 300 }" height="300">${ svgParts.join( '' ) }</svg>` ), left: 0, top: 0 } );
await sharp( { create: { width: NAMES.length * 300, height: 300, channels: 3, background: '#555' } } ).composite( comps ).jpeg( { quality: 88 } ).toFile( path.join( ROOT, 'shots', 'atlas_rects.jpg' ) );
console.log( Object.entries( out ).map( ( [ k, v ] ) => `${ k }: ${ v.length }` ).join( ', ' ) );

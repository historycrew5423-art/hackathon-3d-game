import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = path.resolve( path.dirname( fileURLToPath( import.meta.url ) ), '..' );
const f = path.join( ROOT, '.cache', 'island_tree_02_leaves_alpha_2k.png' );
const { data, info } = await sharp( f ).extractChannel( 0 ).raw().toBuffer( { resolveWithObject: true } );
console.log( 'len', data.length, info );
let mn = 1e9, mx = - 1;
for ( let i = 0; i < data.length; i += 997 ) { mn = Math.min( mn, data[ i ] ); mx = Math.max( mx, data[ i ] ); }
console.log( 'min', mn, 'max', mx );
const out = path.join( ROOT, 'assets', 'leaves.webp' );
const st = await sharp( out ).metadata();
console.log( 'leaves.webp', st.channels, st.hasAlpha );

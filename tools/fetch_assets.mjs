// 从 Poly Haven（全部 CC0）下载场景用到的贴图和天空，转成 WebP 存到 assets/。
// 用法：node tools/fetch_assets.mjs        （已存在的文件跳过）
// 叶片、花、草这类带透明的贴图：把漫反射和 alpha 合成一张 RGBA WebP。
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve( path.dirname( fileURLToPath( import.meta.url ) ), '..' );
const OUT = path.join( ROOT, 'assets' );
const CACHE = path.join( ROOT, '.cache' );
fs.mkdirSync( OUT, { recursive: true } );
fs.mkdirSync( CACHE, { recursive: true } );

// [ 输出名, 素材编号, 贴图键, 分辨率, 处理方式 ]
// 处理方式：color（sRGB 颜色）、data（法线 / ARM 等线性数据）、rgba:<alpha 键>（颜色 + 透明合成）
const LIST = [
	[ 'cliff_diff', 'marble_cliff_04', 'Diffuse', '2k', 'color' ],
	[ 'cliff_nor', 'marble_cliff_04', 'nor_gl', '2k', 'data' ],
	[ 'cliff_arm', 'marble_cliff_04', 'arm', '1k', 'data' ],
	[ 'bone_diff', 'marble_rock_01', 'Diffuse', '2k', 'color' ],
	[ 'bone_nor', 'marble_rock_01', 'nor_gl', '2k', 'data' ],
	[ 'grass_diff', 'leafy_grass', 'Diffuse', '2k', 'color' ],
	[ 'grass_nor', 'leafy_grass', 'nor_gl', '1k', 'data' ],
	[ 'forest_diff', 'forrest_ground_01', 'Diffuse', '1k', 'color' ],
	[ 'forest_nor', 'forrest_ground_01', 'nor_gl', '1k', 'data' ],
	[ 'trail_diff', 'rocky_trail', 'Diffuse', '1k', 'color' ],
	[ 'trail_nor', 'rocky_trail', 'nor_gl', '1k', 'data' ],
	[ 'roof_diff', 'grey_roof_tiles', 'Diffuse', '1k', 'color' ],
	[ 'roof_nor', 'grey_roof_tiles', 'nor_gl', '1k', 'data' ],
	[ 'stonewall_diff', 'japanese_stone_wall', 'Diffuse', '1k', 'color' ],
	[ 'stonewall_nor', 'japanese_stone_wall', 'nor_gl', '1k', 'data' ],
	[ 'planks_diff', 'weathered_brown_planks', 'Diffuse', '1k', 'color' ],
	[ 'planks_nor', 'weathered_brown_planks', 'nor_gl', '1k', 'data' ],
	[ 'redwood_diff', 'red_plaster_weathered', 'Diffuse', '1k', 'color' ],
	[ 'plaster_diff', 'white_plaster_rough_01', 'Diffuse', '1k', 'color' ],
	[ 'bark_diff', 'pine_bark', 'Diffuse', '1k', 'color' ],
	[ 'bark_nor', 'pine_bark', 'nor_gl', '1k', 'data' ],
	[ 'twig', 'fir_tree_01', 'twig_diff', '2k', 'rgba:twig_alpha' ],
	[ 'leaves', 'island_tree_02', 'leaves_diff', '2k', 'rgba:leaves_alpha' ],
	[ 'flower', 'flower_heliophila', 'Diffuse', '2k', 'rgba:Alpha' ],
	[ 'grassblade', 'grass_medium_01', 'Diffuse', '2k', 'rgba:Alpha' ],
	[ 'fern', 'fern_02', 'Diffuse', '1k', 'rgba:Alpha' ],
	[ 'sky_hdr', 'kloofendal_48d_partly_cloudy_puresky', 'hdri', '1k', 'hdr' ],
	[ 'sky', 'kloofendal_48d_partly_cloudy_puresky', 'tonemapped', '', 'sky' ]
];

const filesCache = {};
async function files( id ) {

	if ( ! filesCache[ id ] ) filesCache[ id ] = await ( await fetch( `https://api.polyhaven.com/files/${ id }` ) ).json();
	return filesCache[ id ];

}

function pickUrl( j, key, res, fmt ) {

	if ( key === 'tonemapped' ) return j.tonemapped.url;
	if ( key === 'hdri' ) return j.hdri[ res ].hdr.url;
	const m = j[ key ];
	if ( ! m ) throw new Error( 'no map ' + key + ' in ' + Object.keys( j ).join( ',' ) );
	return ( m[ res ][ fmt ] || m[ res ].jpg || m[ res ].png ).url;

}

async function download( url ) {

	const name = path.join( CACHE, url.split( '/' ).pop() );
	if ( fs.existsSync( name ) ) return name;
	const r = await fetch( url );
	if ( ! r.ok ) throw new Error( r.status + ' ' + url );
	fs.writeFileSync( name, Buffer.from( await r.arrayBuffer() ) );
	return name;

}

for ( const [ out, id, key, res, mode ] of LIST ) {

	const ext = mode === 'hdr' ? '.hdr' : '.webp';
	const dst = path.join( OUT, out + ext );
	const force = process.argv.includes( '--force-rgba' ) && mode.startsWith( 'rgba:' );
	if ( fs.existsSync( dst ) && ! force ) { console.log( 'skip', out ); continue; }
	try {

		const j = await files( id );
		if ( mode === 'hdr' ) {

			fs.copyFileSync( await download( pickUrl( j, key, res ) ), dst );

		} else if ( mode === 'sky' ) {

			// 8k 色调映射 JPG → 4k WebP（只当背景用，地平线以下裁掉一半省流量）
			const src = await download( pickUrl( j, key ) );
			const meta = await sharp( src ).metadata();
			await sharp( src ).extract( { left: 0, top: 0, width: meta.width, height: Math.round( meta.height * 0.53 ) } )
				.resize( 4096 ).webp( { quality: 88 } ).toFile( dst );

		} else if ( mode.startsWith( 'rgba:' ) ) {

			const colSrc = await download( pickUrl( j, key, res, 'jpg' ) );
			const aSrc = await download( pickUrl( j, mode.slice( 5 ), res, 'png' ) );
			const meta = await sharp( colSrc ).metadata();
			// Poly Haven 的 alpha 图是 16 位 PNG：取第一个通道的原始 16 位数据，自己缩放到 8 位
			// （直接要 8 位 raw 会截断成全 255，webp 编码时就把“全不透明”的 alpha 丢掉了）
			const { data, info } = await sharp( aSrc ).resize( meta.width, meta.height ).extractChannel( 0 ).raw().toBuffer( { resolveWithObject: true } );
			const n = info.width * info.height;
			const alpha = Buffer.alloc( n );
			if ( data.length >= n * 2 ) {

				const u16 = new Uint16Array( data.buffer, data.byteOffset, n );
				for ( let k = 0; k < n; k ++ ) alpha[ k ] = u16[ k ] >> 8;

			} else data.copy( alpha, 0, 0, n );
			// 注意：不要在这里调 removeAlpha()，sharp 会把它放到管线最后执行，刚合进来的 alpha 也会被删掉
			await sharp( colSrc ).joinChannel( alpha, { raw: { width: meta.width, height: meta.height, channels: 1 } } )
				.webp( { quality: 90, alphaQuality: 100 } ).toFile( dst );

		} else {

			const src = await download( pickUrl( j, key, res, 'jpg' ) );
			await sharp( src ).webp( { quality: mode === 'data' ? 92 : 86 } ).toFile( dst );

		}

		console.log( 'ok', out, ( fs.statSync( dst ).size / 1024 ).toFixed( 0 ) + 'KB' );

	} catch ( e ) {

		console.log( 'FAIL', out, e.message );

	}

}

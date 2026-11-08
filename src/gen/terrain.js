// ---------------------------------------------------------------------------
// 地形高度函数 H(x, z) 和地表遮罩（山路、水、梯田、森林）。
// 主线程（摆放建筑和植被、漫游时贴地）和生成线程（算地形网格、高度图）共用。
// 悬崖、骷髅、石柱这些竖直或倒悬的部分不在这里，见 rocks.js（SDF 网格）。
// ---------------------------------------------------------------------------
import { simplex2, fbm2, ridged2, smoothstep, clamp, lerp } from './noise.js';
import { PATH, RIVER, RIVER_BED, RIVER_HALF, STREAM, POND, TERRACE, GATE, VILLAGE, BRIDGE, polyline, smoothPolyline } from './layout.js';

const pathL = polyline( smoothPolyline( PATH, 3 ) );
const riverL = polyline( smoothPolyline( RIVER, 6 ) );
const streamL = polyline( smoothPolyline( STREAM, 3 ) );
export { pathL, riverL, streamL };

const tmp = [ 0, 0, 0, 0 ];

// 自然地形：谷底、两侧的坡、机位所在的山包、北边升向白骨岭、山谷外的远山
export function natural( x, z ) {

	let h = 1.3 * fbm2( x / 170, z / 170, 3 ) + 0.55 * simplex2( x / 37, z / 41 );
	// 往北升到白骨岭山脚
	h += 78 * smoothstep( - 730, - 1060, z ) * ( 0.85 + 0.15 * simplex2( x / 90, 3.1 ) );
	// 西边：升向峭壁脚下的碎石坡
	const wx = x + 26 * Math.sin( z / 112 ) + 14 * simplex2( z / 61, 1.7 );
	h += 64 * smoothstep( - 148, - 285, wx ) * ( 0.8 + 0.2 * simplex2( x / 70, z / 70 ) );
	// 东边：峡谷对岸是长满松树的山坡
	const ex = x - 34 * Math.sin( z / 150 + 1.3 );
	h += 150 * smoothstep( 172, 480, ex ) * ( 0.72 + 0.28 * fbm2( x / 240, z / 240, 3 ) );
	// 机位所在的山包（参考图的前景草坡），向西延成山梁
	const kx = ( x + 8 ) / 94, kz = ( z - 58 ) / 64;
	h += 41.5 * Math.exp( - ( kx * kx + kz * kz ) );
	const rz = ( z - 82 ) / 64;
	h += 36 * Math.exp( - rz * rz ) * smoothstep( 0, - 190, x );
	h += 3 * fbm2( x / 28, z / 28, 3 ) * Math.exp( - ( kx * kx + kz * kz ) * 0.5 );
	// 山谷外的远山：离山谷越远越高，山脊用山脊噪声
	const ox = Math.max( 0, Math.abs( x - 30 ) - 420 ), oN = Math.max( 0, - z - 1220 ), oS = Math.max( 0, z - 320 );
	const out = Math.hypot( ox, oN + oS * 0.7 );
	if ( out > 0 ) {

		const fm = smoothstep( 0, 1500, out );
		h += fm * ( 150 + 640 * ridged2( x / 1300 + 7.3, z / 1300 - 2.1, 7 ) ) + fm * fm * 160;

	}

	return h;

}

// 梯田：底坡按台阶取整，台阶边是陡坎，田埂外沿有一圈小埂挡水
function terraceBase( x, z ) {

	let b = 1.7 + 0.168 * ( - x - 8 ) + 0.064 * ( - z - 150 );
	b += 5.5 * simplex2( x / 96 + 3.1, z / 96 ) + 1.4 * simplex2( x / 37, z / 33 );
	return Math.max( b, 0.9 );

}

export function terraceMask( x, z ) {

	const tx = ( x - TERRACE.x ) / TERRACE.rx, tz = ( z - TERRACE.z ) / TERRACE.rz;
	const r = Math.hypot( tx, tz ) + 0.12 * simplex2( x / 52, z / 52 );
	return smoothstep( 1.0, 0.84, r );

}

export function terraceHeight( x, z ) {

	const b = terraceBase( x, z );
	const t = b / TERRACE.step;
	const n = Math.floor( t ), f = t - n;
	let h = TERRACE.step * ( n + smoothstep( 0.86, 1.0, f ) );
	// 田埂：只在每块田的下沿，宽约半米
	h += 0.24 * smoothstep( 0.0, 0.025, f ) * ( 1 - smoothstep( 0.035, 0.075, f ) );
	return h;

}

// 西北边的山坡：梯田开在这面坡上，坡顶是城门楼，再往上接到峭壁脚下
export function hillMask( x, z ) {

	const tx = ( x + 112 ) / 168, tz = ( z + 236 ) / 186;
	return smoothstep( 1.25, 0.9, Math.hypot( tx, tz ) + 0.1 * simplex2( x / 70, z / 70 ) );

}

// 除了山路以外的地形（山路的高度要从这个函数采样后再平滑）
function preHeight( x, z ) {

	let h = natural( x, z );

	// 山坡（梯田的底坡往外延伸，一直到城门楼和峭壁脚下）
	const hm = hillMask( x, z );
	if ( hm > 0 ) h = lerp( h, Math.max( h, terraceBase( x, z ) - 0.6 ), hm );

	// 梯田
	const tm = terraceMask( x, z );
	if ( tm > 0 ) h = lerp( h, terraceHeight( x, z ), tm );

	// 城门楼的台基
	const dg = Math.hypot( x - GATE.x, z - GATE.z );
	if ( dg < GATE.r + 22 ) h = lerp( h, GATE.y, smoothstep( GATE.r + 22, GATE.r, dg ) );

	// 村子：平整
	const dv = Math.hypot( ( x - VILLAGE.x ) * 0.9, z - VILLAGE.z );
	if ( dv < VILLAGE.r + 30 ) h = lerp( h, VILLAGE.y + 0.35 * simplex2( x / 13, z / 13 ), smoothstep( VILLAGE.r + 30, VILLAGE.r - 12, dv ) );

	// 水塘
	const dp = Math.hypot( x - POND.x, z - POND.z );
	if ( dp < POND.r + 6 ) h = Math.min( h, lerp( POND.level - 1.6, h, smoothstep( POND.r - 5, POND.r + 6, dp ) ) );

	// 主河：峡谷。河床两侧是陡壁（约 68°），越往下游越深
	if ( x > riverL.minX - 90 && x < riverL.maxX + 90 && z > riverL.minZ - 90 && z < riverL.maxZ + 90 ) {

		riverL.closest( x, z, tmp );
		const d = tmp[ 0 ], s = tmp[ 1 ] / riverL.length;
		const bed = lerp( RIVER_BED[ 0 ], RIVER_BED[ 1 ], s );
		const half = RIVER_HALF + 14 * smoothstep( 0.08, 0.0, s ) + 1.5 * simplex2( tmp[ 1 ] / 30, 0.5 );
		const wall = bed + Math.max( 0, d - half ) * ( 2.5 + 0.6 * simplex2( tmp[ 1 ] / 40, d / 20 ) ) + 1.2 * simplex2( x / 9, z / 9 ) * smoothstep( half, half + 6, d );
		h = Math.min( h, wall );

	}

	// 梯田里的小溪
	if ( x > streamL.minX - 6 && x < streamL.maxX + 6 && z > streamL.minZ - 6 && z < streamL.maxZ + 6 ) {

		streamL.closest( x, z, tmp );
		const d = tmp[ 0 ];
		if ( d < 2.4 ) h -= 0.6 * ( 1 - smoothstep( 0.7, 2.2, d ) );

	}

	return h;

}

// 山路：沿线采样上面的地形再平滑，路面按这个高度压平（桥面那一段跳过）
const PATH_STEP = 2;
const pathElev = ( () => {

	const n = Math.ceil( pathL.length / PATH_STEP ) + 1;
	const raw = new Float32Array( n );
	const onBridge = new Uint8Array( n );
	for ( let i = 0; i < n; i ++ ) {

		const p = pathL.at( i * PATH_STEP );
		raw[ i ] = preHeight( p.x, p.z );
		if ( Math.abs( p.z - BRIDGE.z ) < 4 && p.x > BRIDGE.x - BRIDGE.span / 2 - 6 && p.x < BRIDGE.x + BRIDGE.span / 2 + 6 ) onBridge[ i ] = 1;

	}

	// 桥头两端的引道升到桥面高度
	for ( let i = 0; i < n; i ++ ) {

		const p = pathL.at( i * PATH_STEP );
		const db = Math.abs( p.x - BRIDGE.x ) - BRIDGE.span / 2;
		if ( Math.abs( p.z - BRIDGE.z ) < 30 && db < 18 ) raw[ i ] = lerp( raw[ i ], BRIDGE.y - 0.15, smoothstep( 18, 4, db ) );

	}

	const out = new Float32Array( n );
	const W = 4;
	for ( let i = 0; i < n; i ++ ) {

		let s = 0, c = 0;
		for ( let k = - W; k <= W; k ++ ) {

			const j = Math.max( 0, Math.min( n - 1, i + k ) );
			const w = W + 1 - Math.abs( k );
			s += raw[ j ] * w; c += w;

		}

		out[ i ] = s / c;

	}

	return { h: out, onBridge };

} )();

function pathHeightAt( s ) {

	const f = s / PATH_STEP, i = Math.floor( f ), t = f - i;
	const a = pathElev.h[ Math.min( i, pathElev.h.length - 1 ) ], b = pathElev.h[ Math.min( i + 1, pathElev.h.length - 1 ) ];
	return a + ( b - a ) * t;

}

export function height( x, z ) {

	let h = preHeight( x, z );
	if ( x > pathL.minX - 6 && x < pathL.maxX + 6 && z > pathL.minZ - 6 && z < pathL.maxZ + 6 ) {

		pathL.closest( x, z, tmp );
		const d = tmp[ 0 ];
		if ( d < 3.4 ) {

			const i = Math.round( tmp[ 1 ] / PATH_STEP );
			if ( ! pathElev.onBridge[ Math.min( i, pathElev.onBridge.length - 1 ) ] ) {

				h = lerp( h, pathHeightAt( tmp[ 1 ] ) - 0.1, smoothstep( 3.4, 1.7, d ) );

			}

		}

	}

	return h;

}

// 遮罩：out[0] 山路，out[1] 水面（河、小溪、水塘），out[2] 梯田，out[3] 森林密度
export function masks( x, z, out ) {

	out[ 0 ] = 0; out[ 1 ] = 0; out[ 2 ] = 0; out[ 3 ] = 0;
	pathL.closest( x, z, tmp );
	const i = Math.round( tmp[ 1 ] / PATH_STEP );
	if ( ! pathElev.onBridge[ Math.min( i, pathElev.onBridge.length - 1 ) ] ) out[ 0 ] = 1 - smoothstep( 1.1, 2.4, tmp[ 0 ] + 0.5 * simplex2( x / 3, z / 3 ) );
	riverL.closest( x, z, tmp );
	const dRiver = tmp[ 0 ];
	let w = 1 - smoothstep( RIVER_HALF - 1, RIVER_HALF + 2, dRiver );
	streamL.closest( x, z, tmp );
	const dStream = tmp[ 0 ];
	w = Math.max( w, 1 - smoothstep( 0.8, 1.4, dStream ) );
	const dp = Math.hypot( x - POND.x, z - POND.z );
	w = Math.max( w, 1 - smoothstep( POND.r - 2, POND.r + 0.5, dp ) );
	out[ 1 ] = w;
	out[ 2 ] = terraceMask( x, z );
	// 森林：大块噪声斑块；梯田、村子、山路、水边、机位草坡都不长
	let f = smoothstep( - 0.15, 0.35, fbm2( x / 160 + 4.2, z / 160 - 1.3, 4 ) );
	f *= 1 - out[ 2 ];
	f *= smoothstep( 6, 16, Math.hypot( ( x - VILLAGE.x ) * 0.9, z - VILLAGE.z ) - VILLAGE.r );
	f *= 1 - out[ 0 ];
	f *= smoothstep( 4, 10, dStream ) * smoothstep( RIVER_HALF + 2, RIVER_HALF + 12, dRiver );
	const kx = ( x + 8 ) / 80, kz = ( z - 50 ) / 58;
	f *= smoothstep( 0.6, 1.6, kx * kx + kz * kz );
	f *= smoothstep( GATE.r, GATE.r + 25, Math.hypot( x - GATE.x, z - GATE.z ) );
	// 白骨岭脚下和东岸山坡是密林
	f = Math.max( f, smoothstep( - 760, - 900, z ) * 0.95 );
	f = Math.max( f * 1, smoothstep( 190, 260, x ) * smoothstep( 0.0, 0.3, fbm2( x / 90, z / 90, 3 ) + 0.25 ) );
	out[ 3 ] = clamp( f, 0, 1 );
	return out;

}

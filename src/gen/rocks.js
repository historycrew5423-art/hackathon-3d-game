// ---------------------------------------------------------------------------
// 岩体（SDF）：白骨岭（山体正面的兽头骷髅）、左边的石灰岩峭壁、中间的石柱群、
// 右边近处的高崖、峡谷里的寺庙石台和桥墩、远处雾里的石峰。
// 每个岩体 = 简单形状（椭球、胶囊、圆角盒、石柱）的平滑并 / 差，再加一个只取决于位置的噪声位移
// （大块起伏 + 石灰岩的竖向溶沟 + 横向层理）。网格由 mesher.js 生成。
// attrib() 给每个顶点写材质参数：[0] 骨头（白骨部分），[1] 洞穴深处（嘴、眼窝里发黑），[2] 预留。
// ---------------------------------------------------------------------------
import { simplex2, simplex3, fbm3, smoothstep, clamp, lerp, smin, smax, mulberry32 } from './noise.js';
import { SKULL_O, BRIDGE, TEMPLE_R } from './layout.js';
import { natural, height, pathL, riverL } from './terrain.js';

// ---------- 基本形状 ----------
function ell( px, py, pz, rx, ry, rz ) {

	const ax = px / rx, ay = py / ry, az = pz / rz;
	const k0 = Math.sqrt( ax * ax + ay * ay + az * az );
	const bx = ax / rx, by = ay / ry, bz = az / rz;
	const k1 = Math.sqrt( bx * bx + by * by + bz * bz );
	return k1 < 1e-9 ? - Math.min( rx, ry, rz ) : k0 * ( k0 - 1 ) / k1;

}

// 椭球的“归一化半径”（<1 在里面），用来判断点在洞里多深
function ellR( px, py, pz, rx, ry, rz ) {

	return Math.sqrt( ( px / rx ) ** 2 + ( py / ry ) ** 2 + ( pz / rz ) ** 2 );

}

function capsule( px, py, pz, ax, ay, az, bx, by, bz, r ) {

	const pax = px - ax, pay = py - ay, paz = pz - az, bax = bx - ax, bay = by - ay, baz = bz - az;
	const h = clamp( ( pax * bax + pay * bay + paz * baz ) / ( bax * bax + bay * bay + baz * baz ), 0, 1 );
	return Math.hypot( pax - bax * h, pay - bay * h, paz - baz * h ) - r;

}

// 半径从 r1 渐变到 r2 的胶囊（獠牙）
function taper( px, py, pz, ax, ay, az, bx, by, bz, r1, r2 ) {

	const pax = px - ax, pay = py - ay, paz = pz - az, bax = bx - ax, bay = by - ay, baz = bz - az;
	const h = clamp( ( pax * bax + pay * bay + paz * baz ) / ( bax * bax + bay * bay + baz * baz ), 0, 1 );
	return ( Math.hypot( pax - bax * h, pay - bay * h, paz - baz * h ) - ( r1 + ( r2 - r1 ) * h ) ) * 0.9;

}

function roundBox( px, py, pz, bx, by, bz, r ) {

	const qx = Math.abs( px ) - bx + r, qy = Math.abs( py ) - by + r, qz = Math.abs( pz ) - bz + r;
	return Math.hypot( Math.max( qx, 0 ), Math.max( qy, 0 ), Math.max( qz, 0 ) ) + Math.min( Math.max( qx, qy, qz ), 0 ) - r;

}

// 石灰岩石柱：截面带几个凸起，往上收细，顶部不平
function tower( x, y, z, T ) {

	const dx = x - T.x, dz = z - T.z;
	const rr = Math.hypot( dx, dz );
	if ( rr > T.r0 * 1.6 + 30 ) return rr - T.r0 * 1.4;
	const t = clamp( ( y - T.y0 ) / ( T.y1 - T.y0 ), 0, 1 );
	const ca = dx / ( rr + 1e-6 ), sa = dz / ( rr + 1e-6 );
	// 用方向向量代替角度：sin(3θ)、sin(5θ) 用倍角公式算，免掉 atan2
	const s3 = 3 * sa - 4 * sa * sa * sa;
	const c2 = ca * ca - sa * sa, s2 = 2 * sa * ca;
	const s5 = s3 * c2 + ( 4 * ca * ca * ca - 3 * ca ) * s2;
	const lobes = 0.13 * ( s3 * T.c + ca * T.s ) + 0.07 * s5 + 0.11 * simplex2( ca * 1.4 + T.seed, sa * 1.4 + y / 55 );
	const r = lerp( T.r0, T.r1, Math.pow( t, T.pow || 1 ) ) * ( 1 + lobes ) + T.bulge * Math.sin( t * 3.1 );
	let d = rr - r;
	d = smax( d, y - T.y1 - 7 * simplex2( dx / 22 + T.seed, dz / 22 ), 9 );
	d = smax( d, T.y0 - 40 - y, 4 );
	return d * 0.82;

}

function mkTower( x, z, r0, r1, y0, y1, seed, extra = {} ) {

	return { x, z, r0, r1, y0, y1, seed, c: Math.cos( seed ), s: Math.sin( seed ), bulge: extra.bulge ?? 0, pow: extra.pow ?? 1 };

}

// ---------- 岩面位移 ----------
// 石灰岩：大块起伏 + 竖向溶沟（水平频率高、竖直频率低）+ 横向层理（周期函数首尾连续，避免锯齿台阶）
function karst( x, y, z, amp ) {

	let d = 12 * fbm3( x / 92, y / 118, z / 92, 3 );
	d += 3.2 * simplex3( x / 10.5, y / 72, z / 10.5 ) + 1.4 * simplex3( x / 4.2, y / 26, z / 4.2 );
	const ly = y / 16.5 + 0.7 * simplex2( x / 64, z / 64 );
	const f = ly - Math.floor( ly );
	d += 1.25 * smoothstep( 0.55, 0.85, f ) * ( 1 - smoothstep( 0.85, 1.0, f ) );
	return d * amp;

}

// =====================================================================
// 白骨岭
// =====================================================================
const [ SX, SY, SZ ] = SKULL_O;

// 上颚牙齿：沿吻部下沿的弧线排列。[角度, 根部半径, 长度]
const UPPER_TEETH = [ [ 0.12, 7.5, 18 ], [ 0.34, 7.5, 19 ], [ 0.62, 19, 64 ], [ 0.9, 10, 27 ], [ 1.12, 9, 20 ] ];
const LOWER_TEETH = [ [ 0.2, 6, 14 ], [ 0.56, 14, 44 ], [ 0.86, 8, 18 ] ];
const teeth = [];
for ( const [ th, r, len ] of UPPER_TEETH ) for ( const sg of [ - 1, 1 ] ) {

	const tx = sg * 85 * Math.sin( th ), tz = - 26 + 77 * Math.cos( th );
	teeth.push( { ax: tx, ay: 7, az: tz, bx: tx * 1.03, by: - len, bz: tz + 3 + len * 0.05, r1: r, r2: 0.9 } );

}

// 下颌：U 形的颌骨（一串胶囊）+ 朝上的牙
const JAW_Y = - 140;
const jaw = [];
for ( let i = 0; i <= 10; i ++ ) {

	const th = - 1.35 + 2.7 * i / 10;
	jaw.push( [ 104 * Math.sin( th ), JAW_Y - 8 * ( 1 - Math.cos( th ) ), - 44 + 92 * Math.cos( th ) ] );

}

for ( const [ th, r, len ] of LOWER_TEETH ) for ( const sg of [ - 1, 1 ] ) {

	const tx = sg * 100 * Math.sin( th ), tz = - 44 + 88 * Math.cos( th );
	teeth.push( { ax: tx, ay: JAW_Y + 12, az: tz, bx: tx * 0.98, by: JAW_Y + 12 + len, bz: tz - 2, r1: r, r2: 0.8 } );

}

// 骷髅的骨头部分（不含山体），局部坐标
function boneParts( lx, ly, lz ) {

	const ax = Math.abs( lx );
	let s = ell( lx, ly - 150, lz + 84, 182, 128, 122 ); // 颅顶（只突出崖面五六十米）
	let m = ell( lx, ly - 46, lz + 26, 116, 78, 106 ); // 吻部
	m = smax( m, - ( ly + 2 ), 5 ); // 吻部下沿切平 = 上颚线
	s = smin( s, m, 34 );
	s = smin( s, capsule( ax, ly, lz, 96, 80, 24, 174, 52, - 50, 24 ), 14 ); // 颧骨
	s = smin( s, capsule( ax, ly, lz, 16, 196, 46, 152, 178, - 4, 19 ), 12 ); // 眉骨
	s = smin( s, capsule( ax, ly, lz, 40, 128, 56, 104, 104, 40, 11 ), 9 ); // 眼眶下沿
	s = smin( s, capsule( lx, ly, lz, 0, 182, 44, 0, 104, 76, 14 ), 16 ); // 鼻梁
	return s;

}

function jawDist( lx, ly, lz ) {

	let d = 1e9;
	for ( let i = 0; i < jaw.length - 1; i ++ ) {

		const a = jaw[ i ], b = jaw[ i + 1 ];
		d = Math.min( d, capsule( lx, ly, lz, a[ 0 ], a[ 1 ], a[ 2 ], b[ 0 ], b[ 1 ], b[ 2 ], 21 ) );

	}

	return d;

}

function teethDist( lx, ly, lz ) {

	let d = 1e9;
	for ( let i = 0; i < teeth.length; i ++ ) {

		const t = teeth[ i ];
		const dx = lx - t.ax;
		if ( dx > 30 || dx < - 30 ) continue;
		d = Math.min( d, taper( lx, ly, lz, t.ax, t.ay, t.az, t.bx, t.by, t.bz, t.r1, t.r2 ) );

	}

	return d;

}

function skullShape( x, y, z, out ) {

	const lx = x - SX, ly = y - SY, lz = z - SZ;
	// 山体正面：两侧往后弯；上部往后仰，下部往前伸成长满树的碎石坡
	// 正面离骷髅的面很近，骷髅像是从崖面里雕出来的，而不是贴上去的
	let zf = - 22 - 0.00075 * lx * lx + 11 * simplex2( lx / 74, ly / 96 );
	if ( ly > 200 ) zf -= ( ly - 200 ) * 0.38;
	// 嘴下面：下颌底下是一整块往前突出的“下巴”，再往下是碎石坡
	zf += 70 * smoothstep( - 128, - 168, ly ) * ( 1 - smoothstep( 110, 190, Math.abs( lx ) ) );
	if ( ly < - 168 ) zf += ( - 168 - ly ) * 0.8;
	let d = ( lz - zf ) * 0.72;
	const yTop = 286 - 0.00088 * lx * lx + 40 * simplex2( lx / 170, lz / 170 ) + 18 * simplex2( lx / 60, lz / 60 );
	d = smax( d, ( ly - yTop ) * 0.7, 30 );
	d = smax( d, - ( lz + 540 ), 30 );
	// 底面不封口：埋在地形下面，封口只会白白多出一大片看不见的三角形

	let bone = 1e9, tooth = 1e9;
	// 只在骷髅附近算骨头和洞（省时间）。范围必须比所有洞的最远处再多出分块剔除半径：
	// 范围边界上 SDF 是跳变的，跳变处的块中心值很大，会被剔除，洞底就破一个窟窿（嘴的后壁在 lz = -261）
	const near = lx > - 270 && lx < 270 && ly > - 230 && ly < 330 && lz > - 345;
	if ( near ) {

		bone = boneParts( lx, ly, lz );
		d = smin( d, bone, 34 );
		const ax = Math.abs( lx );
		// 眼窝、鼻孔、嘴（嘴是通向山腹的大洞）
		d = smax( d, - ell( ax - 80, ly - 150, lz - 36, 40, 33, 72 ), 7 );
		d = smax( d, - ell( lx, ly - 94, lz - 66, 24, 31, 58 ), 6 );
		d = smax( d, - ell( lx, ly + 66, lz + 46, 154, 70, 215 ), 9 );
		// 下颌和牙齿（在挖嘴之后加，牙才不会被挖掉）
		if ( ly < - 60 && ly > - 210 && ax < 150 && lz > - 100 ) {

			const j = jawDist( lx, ly, lz );
			d = smin( d, j, 16 );
			bone = Math.min( bone, j );

		}

		if ( ly < 20 && ly > - 160 && ax < 120 && lz > - 70 && lz < 90 ) {

			tooth = teethDist( lx, ly, lz );
			d = smin( d, tooth, 3 );

		}

	}

	if ( out ) { out[ 0 ] = bone; out[ 1 ] = tooth; }
	return d;

}

const _sk = [ 0, 0 ];
function skullSDF( x, y, z ) {

	const d = skullShape( x, y, z, _sk );
	const bone = _sk[ 0 ], tooth = _sk[ 1 ];
	if ( Math.abs( d ) > 48 ) return d;
	// 骨头上位移小（光滑的白骨），山体上是石灰岩
	let bw = bone < 30 ? smoothstep( 26, 2, bone ) : 0;
	const tw = tooth < 12 ? smoothstep( 9, 0.5, tooth ) : 0;
	bw = Math.max( bw, tw );
	const rock = karst( x, y, z, 1 );
	const boneD = 1.6 * fbm3( x / 26, y / 26, z / 26, 2 ) + 0.5 * simplex3( x / 7, y / 7, z / 7 );
	return d - lerp( rock, boneD * ( 1 - tw * 0.8 ), bw );

}

function skullSDFao( x, y, z ) {

	return skullShape( x, y, z, null );

}

function skullAttrib( x, y, z, nx, ny, nz, out ) {

	skullShape( x, y, z, _sk );
	const bone = _sk[ 0 ], tooth = _sk[ 1 ];
	let bw = bone < 40 ? smoothstep( 30, 4, bone ) : 0;
	bw = Math.max( bw, tooth < 14 ? smoothstep( 12, 1, tooth ) : 0 );
	out[ 0 ] = bw;
	// 洞里多深：洞壁上的点都在挖洞的椭球表面附近（归一化半径约等于 1），所以按“比崖面往里多少”来算
	const lx = x - SX, ly = y - SY, lz = z - SZ, ax = Math.abs( lx );
	const m = ellR( lx, ly + 66, lz + 46, 154, 70, 215 );
	const deepMouth = smoothstep( 1.25, 1.02, m ) * smoothstep( 25, - 95, lz );
	const eye = smoothstep( 1.25, 1.02, ellR( ax - 80, ly - 150, lz - 36, 40, 33, 72 ) ) * smoothstep( 34, - 12, lz );
	const nose = smoothstep( 1.25, 1.02, ellR( lx, ly - 94, lz - 66, 24, 31, 58 ) ) * smoothstep( 50, 14, lz );
	out[ 1 ] = Math.max( deepMouth, eye, nose );
	out[ 2 ] = 0.15 * ( 1 - bw );

}

// =====================================================================
// 左边的峭壁（崖上挂着楼阁）
// =====================================================================
const LEFT_TOWERS = [
	mkTower( - 176, - 372, 30, 22, 20, 236, 1.3, { bulge: 4 } ),
	mkTower( - 196, - 470, 38, 26, 20, 300, 2.1 ),
	mkTower( - 150, - 214, 22, 15, 30, 182, 3.7, { bulge: 3 } ), // 左上角那座亭子的石柱
	mkTower( - 222, - 112, 34, 24, 30, 214, 4.4 ),
	mkTower( - 186, - 612, 42, 30, 20, 340, 5.9 ),
	mkTower( - 238, - 762, 50, 34, 20, 380, 6.6 ),
	mkTower( - 200, - 40, 24, 18, 36, 150, 7.2 )
];
// 崖上楼阁的平台：[x, y, z, 半宽x, 半高, 半宽z]
export const LEFT_LEDGES = [
	[ - 205, 112, - 262, 22, 3, 16 ], // 崖壁中段的寺院
	[ - 196, 64, - 166, 16, 3, 12 ], // 下面一层
	[ - 150, 182, - 214, 13, 3, 13 ] // 石柱顶上的亭子（顶部会被削平到这个高度）
];

function leftShape( x, y, z ) {

	let face = - 210 - 48 * Math.sin( ( z + 300 ) / 165 ) - 22 * simplex2( z / 92, 0.3 ) - Math.max( 0, y - 40 ) * 0.07;
	let d = ( x - face ) * 0.78;
	const top = 252 + 125 * smoothstep( - 80, - 540, z ) + 46 * simplex2( z / 210, x / 210 );
	d = smax( d, ( y - top ) * 0.72, 24 );
	d = smax( d, ( z - 112 ) * 0.8, 30 );
	d = smax( d, - ( z + 955 ), 30 );
	// 西面不封口（埋在远山里）
	for ( let i = 0; i < LEFT_TOWERS.length; i ++ ) d = smin( d, tower( x, y, z, LEFT_TOWERS[ i ] ), 16 );
	for ( let i = 0; i < LEFT_LEDGES.length; i ++ ) {

		const L = LEFT_LEDGES[ i ];
		// 平台：往崖里伸，顶面平
		const b = roundBox( x - L[ 0 ] + L[ 3 ] * 0.4, y - L[ 1 ] + L[ 4 ] + 6, z - L[ 2 ], L[ 3 ] * 1.4, L[ 4 ] + 6, L[ 5 ], 2.5 );
		d = smin( d, b, 4 );
		// 平台以上留出空间（崖面往里凹一点，像在崖上开出来的）
		const cut = roundBox( x - L[ 0 ] - 2, y - L[ 1 ] - 16, z - L[ 2 ], L[ 3 ] * 0.9, 14, L[ 5 ] * 0.92, 4 );
		d = smax( d, - cut, 5 );

	}

	return d;

}

function leftSDF( x, y, z ) {

	const d = leftShape( x, y, z );
	if ( Math.abs( d ) > 44 ) return d;
	// 平台附近位移小（地面要平）
	let flat = 0;
	for ( let i = 0; i < LEFT_LEDGES.length; i ++ ) {

		const L = LEFT_LEDGES[ i ];
		const q = Math.hypot( ( x - L[ 0 ] ) / ( L[ 3 ] + 8 ), ( y - L[ 1 ] ) / 10, ( z - L[ 2 ] ) / ( L[ 5 ] + 8 ) );
		flat = Math.max( flat, smoothstep( 1.6, 0.9, q ) );

	}

	return d - karst( x, y, z, 1 - flat * 0.9 );

}

// =====================================================================
// 中间偏左的石柱群（城门楼后面）
// =====================================================================
const MID_TOWERS = [
	mkTower( - 150, - 598, 40, 27, 0, 296, 1.1, { bulge: 5 } ),
	mkTower( - 98, - 662, 30, 21, 0, 238, 2.7 ),
	mkTower( - 212, - 696, 50, 35, 0, 338, 3.9 ),
	mkTower( - 56, - 726, 22, 15, 0, 186, 4.8, { bulge: 3 } ),
	mkTower( - 168, - 520, 26, 20, 0, 214, 5.5 ),
	mkTower( - 252, - 568, 34, 26, 0, 276, 6.3 ),
	mkTower( - 118, - 772, 34, 24, 10, 262, 7.7 ),
	mkTower( - 20, - 792, 18, 13, 10, 150, 8.9, { bulge: 2 } )
];
for ( const T of MID_TOWERS ) T.y0 = natural( T.x, T.z ) - 6;

function midSDF( x, y, z ) {

	let d = 1e9;
	for ( let i = 0; i < MID_TOWERS.length; i ++ ) d = smin( d, tower( x, y, z, MID_TOWERS[ i ] ), 12 );
	if ( Math.abs( d ) > 40 ) return d;
	return d - karst( x, y, z, 0.8 );

}

// =====================================================================
// 右边近处的高崖（参考图右缘）
// =====================================================================
const RIGHT_TOWERS = [
	mkTower( 118, - 70, 36, 26, - 44, 196, 2.4, { bulge: 5, pow: 0.7 } ),
	mkTower( 92, - 18, 16, 11, - 10, 64, 3.3 ),
	mkTower( 150, - 118, 24, 18, - 44, 128, 5.1 )
];

function rightSDF( x, y, z ) {

	let d = 1e9;
	for ( let i = 0; i < RIGHT_TOWERS.length; i ++ ) d = smin( d, tower( x, y, z, RIGHT_TOWERS[ i ] ), 14 );
	// 顶部往外挑出一块（下面挂藤蔓）
	d = smin( d, ell( x - 104, y - 160, z + 58, 34, 20, 32 ), 14 );
	if ( Math.abs( d ) > 40 ) return d;
	return d - karst( x, y, z, 0.9 );

}

// =====================================================================
// 峡谷：右边寺庙的石台、桥两头的桥墩岩
// =====================================================================
const TEMPLE_T = mkTower( TEMPLE_R.x, TEMPLE_R.z, 30, 25, - 48, TEMPLE_R.y, 1.9, { bulge: 3 } );

function gorgeShape( x, y, z ) {

	let d = tower( x, y, z, TEMPLE_T );
	// 石台顶面削平
	d = smax( d, y - TEMPLE_R.y, 2 );
	// 桥墩：两块岩石，顶面和桥面齐平
	const half = BRIDGE.span / 2;
	for ( const sg of [ - 1, 1 ] ) {

		const cx = BRIDGE.x + sg * ( half + 9 );
		let b = ell( x - cx, y + 18, z - BRIDGE.z, 20, 26, 22 );
		b = smax( b, y - BRIDGE.y + 0.6, 2 );
		d = smin( d, b, 6 );

	}

	return d;

}

function gorgeSDF( x, y, z ) {

	const d = gorgeShape( x, y, z );
	if ( Math.abs( d ) > 30 ) return d;
	const topFlat = smoothstep( TEMPLE_R.y - 8, TEMPLE_R.y - 1, y );
	return d - karst( x, y, z, 0.75 * ( 1 - topFlat * 0.85 ) );

}

// =====================================================================
// 远处雾里的石峰
// =====================================================================
const FAR_TOWERS = ( () => {

	const r = mulberry32( 77 );
	const list = [];
	let guard = 0;
	while ( list.length < 46 && guard ++ < 4000 ) {

		const x = - 2600 + r() * 5200, z = - 3100 + r() * 2900;
		// 山谷和白骨岭后面留空，主要放在两侧和远处
		if ( z > - 1350 && x < 330 ) continue;
		if ( z > - 1700 && Math.abs( x ) < 520 ) continue;
		if ( list.some( ( t ) => Math.hypot( t.x - x, t.z - z ) < 170 ) ) continue;
		const rad = 45 + r() * 75;
		const base = natural( x, z ) - 20;
		const hgt = 220 + r() * 520;
		list.push( mkTower( x, z, rad, rad * ( 0.55 + r() * 0.25 ), base, base + hgt, r() * 10, { bulge: r() * 10, pow: 0.8 + r() * 0.6 } ) );

	}

	return list;

} )();

function farSDF( x, y, z ) {

	let d = 1e9;
	for ( let i = 0; i < FAR_TOWERS.length; i ++ ) {

		const T = FAR_TOWERS[ i ];
		const dx = x - T.x, dz = z - T.z;
		const r2 = dx * dx + dz * dz, lim = T.r0 * 1.7 + 60;
		if ( r2 > lim * lim ) { d = Math.min( d, Math.sqrt( r2 ) - T.r0 * 1.5 ); continue; }
		d = smin( d, tower( x, y, z, T ), 20 );

	}

	if ( Math.abs( d ) > 50 ) return d;
	return d - karst( x * 0.62, y * 0.62, z * 0.62, 1.25 );

}

// 崖面植被覆盖度（写进 aux.a）：远处的石峰几乎被松树和灌木盖满，近处的峭壁只有零星的绿
const cover = ( v ) => ( x, y, z, nx, ny, nz, out ) => { out[ 0 ] = 0; out[ 1 ] = 0; out[ 2 ] = v; };

// =====================================================================
// 近处的石灰岩块：机位所在的草坡、山路两边、村口、河岸。椭球被几个随机平面切出棱面，底部埋进土里
// =====================================================================
export const BOULDERS = ( () => {

	const r = mulberry32( 4242 );
	const list = [];
	const add = ( x, z, s ) => {

		const gy = height( x, z );
		const rx = s * ( 0.8 + r() * 0.5 ), ry = s * ( 0.45 + r() * 0.35 ), rz = s * ( 0.7 + r() * 0.5 );
		const a = r() * Math.PI * 2;
		const planes = [];
		for ( let k = 0; k < 4; k ++ ) {

			const th = r() * Math.PI * 2, ph = ( r() - 0.3 ) * 1.2;
			planes.push( [ Math.cos( th ) * Math.cos( ph ), Math.sin( ph ), Math.sin( th ) * Math.cos( ph ), s * ( 0.45 + r() * 0.3 ) ] );

		}

		list.push( { x, y: gy - ry * 0.35, z, rx, ry, rz, c: Math.cos( a ), s: Math.sin( a ), planes, R: Math.max( rx, ry, rz ) * 1.15 } );

	};

	// 机位所在的草坡：两侧和前方偏下（不挡住看白骨岭的视线）
	const fore = [ [ - 24, 26, 2.6 ], [ - 31, 31, 1.5 ], [ 27, 21, 3.2 ], [ 33, 27, 1.7 ], [ - 14, 6, 1.9 ], [ 17, 2, 2.4 ], [ - 46, 12, 3.8 ], [ 48, 4, 3.4 ], [ 7, 22, 0.9 ], [ - 6, 28, 0.7 ], [ 12, 30, 0.6 ] ];
	for ( const [ x, z, s ] of fore ) add( x, z, s );
	// 沿山路两边
	for ( let i = 0; i < 26; i ++ ) {

		const p = pathL.at( 30 + i * 34 + r() * 18 );
		const side = r() < 0.5 ? - 1 : 1;
		const off = 3.6 + r() * 6;
		add( p.x - p.tz * side * off, p.z + p.tx * side * off, 0.7 + r() * 1.8 );

	}

	// 河岸
	for ( let i = 0; i < 22; i ++ ) {

		const p = riverL.at( 200 + i * 38 + r() * 20 );
		const side = r() < 0.5 ? - 1 : 1;
		const off = 6 + r() * 4;
		add( p.x - p.tz * side * off, p.z + p.tx * side * off, 1.2 + r() * 2.5 );

	}

	return list;

} )();

function boulderSDF( x, y, z ) {

	let d = 1e9;
	for ( let i = 0; i < BOULDERS.length; i ++ ) {

		const b = BOULDERS[ i ];
		const dx = x - b.x, dy = y - b.y, dz = z - b.z;
		const q = dx * dx + dy * dy + dz * dz;
		if ( q > ( b.R + 6 ) * ( b.R + 6 ) ) { d = Math.min( d, Math.sqrt( q ) - b.R ); continue; }
		const lx = dx * b.c + dz * b.s, lz = - dx * b.s + dz * b.c;
		let e = ell( lx, dy, lz, b.rx, b.ry, b.rz );
		for ( const P of b.planes ) e = smax( e, lx * P[ 0 ] + dy * P[ 1 ] + lz * P[ 2 ] - P[ 3 ], b.R * 0.12 );
		d = smin( d, e, 0.6 );

	}

	if ( d > 2 ) return d;
	return d - 0.22 * fbm3( x / 2.2, y / 2.2, z / 2.2, 3 ) - 0.05 * simplex3( x / 0.6, y / 0.6, z / 0.6 );

}

// =====================================================================
// 岩体列表：bounds = [x0, y0, z0, x1, y1, z1]，cell = 各画质档的格子大小（米）
// =====================================================================
export const VOLUMES = {
	// 骷髅的嘴、眼窝是用细长的椭球挖出来的，椭球距离的近似值在里面会被放大到真实距离的 3 倍左右，
	// 分块剔除要按这个倍数放宽，否则洞壁所在的块会被误判为“离表面很远”而跳过，洞底就破了
	skull: { bounds: [ - 480, - 30, - 1430, 480, 640, - 870 ], cell: { high: 1.3, mid: 2.2, low: 3.2 }, sdf: skullSDF, sdfAO: skullSDFao, attrib: skullAttrib, lipschitz: 3.4 },
	left: { bounds: [ - 730, 0, - 970, - 120, 470, 125 ], cell: { high: 2.0, mid: 2.8, low: 4 }, sdf: leftSDF, sdfAO: leftShape, attrib: cover( 0.22 ), lipschitz: 2.0 },
	mid: { bounds: [ - 320, - 20, - 820, 20, 350, - 470 ], cell: { high: 1.6, mid: 2.4, low: 3.4 }, sdf: midSDF, attrib: cover( 0.32 ), lipschitz: 2.0 },
	right: { bounds: [ 20, - 50, - 190, 200, 225, 40 ], cell: { high: 1.1, mid: 1.6, low: 2.4 }, sdf: rightSDF, attrib: cover( 0.2 ), lipschitz: 2.0 },
	gorge: { bounds: [ 30, - 52, - 600, 190, 14, - 205 ], cell: { high: 1.0, mid: 1.5, low: 2.2 }, sdf: gorgeSDF, sdfAO: gorgeShape, attrib: cover( 0.25 ), lipschitz: 2.0 },
	far: { bounds: [ - 2800, - 60, - 3300, 2800, 1000, - 220 ], cell: { high: 7, mid: 9, low: 12 }, sdf: farSDF, attrib: cover( 0.62 ), lipschitz: 2.2 },
	boulders: { bounds: [ - 130, - 50, - 1000, 260, 60, 60 ], cell: { high: 0.3, mid: 0.45, low: 0.7 }, sdf: boulderSDF, attrib: cover( 0.14 ), lipschitz: 2.0 }
};

export { FAR_TOWERS, MID_TOWERS, LEFT_TOWERS, RIGHT_TOWERS, TEMPLE_T, skullShape };

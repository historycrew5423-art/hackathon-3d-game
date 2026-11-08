// ---------------------------------------------------------------------------
// 可复现的噪声函数（主线程和生成线程共用，不依赖 three）。
// simplex2 / simplex3：Gustavson 的单纯形噪声，返回约 [-1, 1]。
// 地形、岩体、植被撒点都用这里的函数，所以每次打开生成的世界完全一样。
// ---------------------------------------------------------------------------

export function mulberry32( seed ) {

	let a = seed >>> 0;
	return function () {

		a = ( a + 0x6D2B79F5 ) | 0;
		let t = Math.imul( a ^ ( a >>> 15 ), 1 | a );
		t = ( t + Math.imul( t ^ ( t >>> 7 ), 61 | t ) ) ^ t;
		return ( ( t ^ ( t >>> 14 ) ) >>> 0 ) / 4294967296;

	};

}

const perm = new Uint8Array( 512 );
const permMod12 = new Uint8Array( 512 );
( function init() {

	const r = mulberry32( 20261107 );
	const p = new Uint8Array( 256 );
	for ( let i = 0; i < 256; i ++ ) p[ i ] = i;
	for ( let i = 255; i > 0; i -- ) {

		const j = Math.floor( r() * ( i + 1 ) );
		const t = p[ i ]; p[ i ] = p[ j ]; p[ j ] = t;

	}

	for ( let i = 0; i < 512; i ++ ) {

		perm[ i ] = p[ i & 255 ];
		permMod12[ i ] = perm[ i ] % 12;

	}

} )();

const grad3 = new Float64Array( [ 1, 1, 0, - 1, 1, 0, 1, - 1, 0, - 1, - 1, 0, 1, 0, 1, - 1, 0, 1, 1, 0, - 1, - 1, 0, - 1, 0, 1, 1, 0, - 1, 1, 0, 1, - 1, 0, - 1, - 1 ] );
const F2 = 0.5 * ( Math.sqrt( 3 ) - 1 ), G2 = ( 3 - Math.sqrt( 3 ) ) / 6;
const F3 = 1 / 3, G3 = 1 / 6;

export function simplex2( xin, yin ) {

	const s = ( xin + yin ) * F2;
	const i = Math.floor( xin + s ), j = Math.floor( yin + s );
	const t = ( i + j ) * G2;
	const x0 = xin - ( i - t ), y0 = yin - ( j - t );
	let i1, j1;
	if ( x0 > y0 ) { i1 = 1; j1 = 0; } else { i1 = 0; j1 = 1; }
	const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
	const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
	const ii = i & 255, jj = j & 255;
	let n = 0;
	let t0 = 0.5 - x0 * x0 - y0 * y0;
	if ( t0 > 0 ) {

		const g = permMod12[ ii + perm[ jj ] ] * 3;
		t0 *= t0; n += t0 * t0 * ( grad3[ g ] * x0 + grad3[ g + 1 ] * y0 );

	}

	let t1 = 0.5 - x1 * x1 - y1 * y1;
	if ( t1 > 0 ) {

		const g = permMod12[ ii + i1 + perm[ jj + j1 ] ] * 3;
		t1 *= t1; n += t1 * t1 * ( grad3[ g ] * x1 + grad3[ g + 1 ] * y1 );

	}

	let t2 = 0.5 - x2 * x2 - y2 * y2;
	if ( t2 > 0 ) {

		const g = permMod12[ ii + 1 + perm[ jj + 1 ] ] * 3;
		t2 *= t2; n += t2 * t2 * ( grad3[ g ] * x2 + grad3[ g + 1 ] * y2 );

	}

	return 70 * n;

}

export function simplex3( xin, yin, zin ) {

	const s = ( xin + yin + zin ) * F3;
	const i = Math.floor( xin + s ), j = Math.floor( yin + s ), k = Math.floor( zin + s );
	const t = ( i + j + k ) * G3;
	const x0 = xin - ( i - t ), y0 = yin - ( j - t ), z0 = zin - ( k - t );
	let i1, j1, k1, i2, j2, k2;
	if ( x0 >= y0 ) {

		if ( y0 >= z0 ) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; } else if ( x0 >= z0 ) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; } else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }

	} else {

		if ( y0 < z0 ) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; } else if ( x0 < z0 ) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; } else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }

	}

	const x1 = x0 - i1 + G3, y1 = y0 - j1 + G3, z1 = z0 - k1 + G3;
	const x2 = x0 - i2 + 2 * G3, y2 = y0 - j2 + 2 * G3, z2 = z0 - k2 + 2 * G3;
	const x3 = x0 - 1 + 3 * G3, y3 = y0 - 1 + 3 * G3, z3 = z0 - 1 + 3 * G3;
	const ii = i & 255, jj = j & 255, kk = k & 255;
	let n = 0;
	let t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
	if ( t0 > 0 ) {

		const g = permMod12[ ii + perm[ jj + perm[ kk ] ] ] * 3;
		t0 *= t0; n += t0 * t0 * ( grad3[ g ] * x0 + grad3[ g + 1 ] * y0 + grad3[ g + 2 ] * z0 );

	}

	let t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
	if ( t1 > 0 ) {

		const g = permMod12[ ii + i1 + perm[ jj + j1 + perm[ kk + k1 ] ] ] * 3;
		t1 *= t1; n += t1 * t1 * ( grad3[ g ] * x1 + grad3[ g + 1 ] * y1 + grad3[ g + 2 ] * z1 );

	}

	let t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
	if ( t2 > 0 ) {

		const g = permMod12[ ii + i2 + perm[ jj + j2 + perm[ kk + k2 ] ] ] * 3;
		t2 *= t2; n += t2 * t2 * ( grad3[ g ] * x2 + grad3[ g + 1 ] * y2 + grad3[ g + 2 ] * z2 );

	}

	let t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
	if ( t3 > 0 ) {

		const g = permMod12[ ii + 1 + perm[ jj + 1 + perm[ kk + 1 ] ] ] * 3;
		t3 *= t3; n += t3 * t3 * ( grad3[ g ] * x3 + grad3[ g + 1 ] * y3 + grad3[ g + 2 ] * z3 );

	}

	return 32 * n;

}

// 分形噪声：每层旋转一下，避免各层的网格方向叠在一起
export function fbm2( x, y, oct = 5, lac = 2.03, gain = 0.5 ) {

	let s = 0, a = 1, norm = 0;
	for ( let i = 0; i < oct; i ++ ) {

		s += a * simplex2( x, y );
		norm += a;
		const nx = x * 0.8 - y * 0.6, ny = x * 0.6 + y * 0.8;
		x = nx * lac + 13.7; y = ny * lac + 7.1;
		a *= gain;

	}

	return s / norm;

}

// 山脊噪声：1 - |n| 再平方，上一层越高下一层权重越大（山脊上细节多、谷底平缓）
export function ridged2( x, y, oct = 6, lac = 2.0, gain = 0.5 ) {

	let s = 0, a = 1, w = 1, norm = 0;
	for ( let i = 0; i < oct; i ++ ) {

		let n = 1 - Math.abs( simplex2( x, y ) );
		n *= n;
		n *= w;
		w = Math.min( 1, Math.max( 0, n * 1.6 ) );
		s += a * n;
		norm += a;
		const nx = x * 0.8 - y * 0.6, ny = x * 0.6 + y * 0.8;
		x = nx * lac + 3.1; y = ny * lac + 17.9;
		a *= gain;

	}

	return s / norm;

}

export function fbm3( x, y, z, oct = 4, lac = 2.07, gain = 0.5 ) {

	let s = 0, a = 1, norm = 0;
	for ( let i = 0; i < oct; i ++ ) {

		s += a * simplex3( x, y, z );
		norm += a;
		x = x * lac + 5.3; y = y * lac + 11.7; z = z * lac + 2.9;
		a *= gain;

	}

	return s / norm;

}

export const clamp = ( x, a, b ) => ( x < a ? a : x > b ? b : x );
export function smoothstep( a, b, x ) {

	const t = clamp( ( x - a ) / ( b - a ), 0, 1 );
	return t * t * ( 3 - 2 * t );

}

export const lerp = ( a, b, t ) => a + ( b - a ) * t;

// 多项式平滑最小 / 最大（SDF 平滑并集、平滑差集）
export function smin( a, b, k ) {

	const h = clamp( 0.5 + 0.5 * ( b - a ) / k, 0, 1 );
	return b + ( a - b ) * h - k * h * ( 1 - h );

}

export function smax( a, b, k ) {

	return - smin( - a, - b, k );

}

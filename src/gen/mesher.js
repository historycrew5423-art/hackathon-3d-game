// ---------------------------------------------------------------------------
// SDF → 三角网格（Surface Nets，稀疏分块）。
// 网格按 cell 米一格；8×8×8 格一块，块中心离表面太远就整块跳过（只算表面附近的薄壳）。
// 一个岩体按 X 方向切成几片，分给不同的生成线程：每片只输出“自己负责的边”生成的四边形，
// 顶点多算一格重叠，相邻两片在交界处的顶点位置完全相同，所以合起来没有裂缝。
// 顶点再沿 SDF 梯度投影回表面一次（棱角更准），法线用 SDF 梯度（四面体采样），
// 另外按 SDF 算环境光遮蔽（沿法线往外取几个点看离岩面多近），写进 aux 属性。
// ---------------------------------------------------------------------------

const B = 8; // 每块的格数

export function meshSDF( vol, ix0, ix1 ) {

	const { sdf, cell: h } = vol;
	const [ x0, y0, z0, x1, y1, z1 ] = vol.bounds;
	const nx = Math.ceil( ( x1 - x0 ) / h ), ny = Math.ceil( ( y1 - y0 ) / h ), nz = Math.ceil( ( z1 - z0 ) / h );
	ix0 = Math.max( 0, ix0 ); ix1 = Math.min( nx, ix1 );
	const nbx = Math.ceil( nx / B ), nby = Math.ceil( ny / B ), nbz = Math.ceil( nz / B );
	const L = vol.lipschitz || 1.7;
	const cullR = ( B * h * 0.8661 + h ) * L;

	const bi0 = Math.max( 0, Math.floor( ( ix0 - 1 ) / B ) ), bi1 = Math.min( nbx - 1, Math.floor( ( ix1 - 1 ) / B ) );
	const blocks = new Map(); // 块号 → { s: 样本, v: 顶点号 }
	const S1 = B + 1;
	const vx = [], vy = [], vz = []; // 顶点（初值：边上零点的平均）
	let samples = 0;

	for ( let bk = 0; bk < nbz; bk ++ ) for ( let bj = 0; bj < nby; bj ++ ) for ( let bi = bi0; bi <= bi1; bi ++ ) {

		const cx = x0 + ( bi * B + B / 2 ) * h, cy = y0 + ( bj * B + B / 2 ) * h, cz = z0 + ( bk * B + B / 2 ) * h;
		const dc = sdf( cx, cy, cz );
		samples ++;
		if ( Math.abs( dc ) > cullR ) continue;
		const s = new Float32Array( S1 * S1 * S1 );
		for ( let k = 0; k <= B; k ++ ) for ( let j = 0; j <= B; j ++ ) for ( let i = 0; i <= B; i ++ ) {

			s[ i + S1 * ( j + S1 * k ) ] = sdf( x0 + ( bi * B + i ) * h, y0 + ( bj * B + j ) * h, z0 + ( bk * B + k ) * h );

		}

		samples += S1 * S1 * S1;
		blocks.set( bi + nbx * ( bj + nby * bk ), { bi, bj, bk, s, v: null } );

	}

	// 顶点：每个跨过表面的格子放一个点
	const EDGES = [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ], [ 6, 7 ], [ 0, 2 ], [ 1, 3 ], [ 4, 6 ], [ 5, 7 ], [ 0, 4 ], [ 1, 5 ], [ 2, 6 ], [ 3, 7 ] ];
	const cd = new Float32Array( 8 );
	for ( const b of blocks.values() ) {

		const v = new Int32Array( B * B * B ).fill( - 1 );
		b.v = v;
		const { s } = b;
		for ( let k = 0; k < B; k ++ ) for ( let j = 0; j < B; j ++ ) for ( let i = 0; i < B; i ++ ) {

			const gi = b.bi * B + i, gj = b.bj * B + j, gk = b.bk * B + k;
			if ( gi < ix0 - 1 || gi >= ix1 || gj >= ny || gk >= nz || gi >= nx ) continue;
			let mask = 0;
			for ( let c = 0; c < 8; c ++ ) {

				const d = s[ ( i + ( c & 1 ) ) + S1 * ( ( j + ( ( c >> 1 ) & 1 ) ) + S1 * ( k + ( c >> 2 ) ) ) ];
				cd[ c ] = d;
				if ( d < 0 ) mask |= 1 << c;

			}

			if ( mask === 0 || mask === 255 ) continue;
			let px = 0, py = 0, pz = 0, cnt = 0;
			for ( let e = 0; e < 12; e ++ ) {

				const a = EDGES[ e ][ 0 ], c2 = EDGES[ e ][ 1 ];
				const da = cd[ a ], db = cd[ c2 ];
				if ( ( da < 0 ) === ( db < 0 ) ) continue;
				const t = da / ( da - db );
				px += ( a & 1 ) + ( ( c2 & 1 ) - ( a & 1 ) ) * t;
				py += ( ( a >> 1 ) & 1 ) + ( ( ( c2 >> 1 ) & 1 ) - ( ( a >> 1 ) & 1 ) ) * t;
				pz += ( a >> 2 ) + ( ( c2 >> 2 ) - ( a >> 2 ) ) * t;
				cnt ++;

			}

			v[ i + B * ( j + B * k ) ] = vx.length;
			vx.push( x0 + ( gi + px / cnt ) * h );
			vy.push( y0 + ( gj + py / cnt ) * h );
			vz.push( z0 + ( gk + pz / cnt ) * h );

		}

	}

	const vertAt = ( gi, gj, gk ) => {

		if ( gi < 0 || gj < 0 || gk < 0 ) return - 1;
		const b = blocks.get( ( ( gi / B ) | 0 ) + nbx * ( ( ( gj / B ) | 0 ) + nby * ( ( gk / B ) | 0 ) ) );
		if ( ! b ) return - 1;
		return b.v[ ( gi % B ) + B * ( ( gj % B ) + B * ( gk % B ) ) ];

	};

	// 四边形：每条跨过表面的网格边，连接共用它的四个格子
	const idx = [];
	const quad = ( a, b, c, d, flip ) => {

		if ( a < 0 || b < 0 || c < 0 || d < 0 ) return;
		if ( flip ) { const t = b; b = d; d = t; }
		// 取较短的对角线切成两个三角形
		const dac = ( vx[ a ] - vx[ c ] ) ** 2 + ( vy[ a ] - vy[ c ] ) ** 2 + ( vz[ a ] - vz[ c ] ) ** 2;
		const dbd = ( vx[ b ] - vx[ d ] ) ** 2 + ( vy[ b ] - vy[ d ] ) ** 2 + ( vz[ b ] - vz[ d ] ) ** 2;
		if ( dac < dbd ) idx.push( a, b, c, a, c, d );
		else idx.push( a, b, d, b, c, d );

	};

	for ( const b of blocks.values() ) {

		const { s } = b;
		for ( let k = 0; k < B; k ++ ) for ( let j = 0; j < B; j ++ ) for ( let i = 0; i < B; i ++ ) {

			const gi = b.bi * B + i, gj = b.bj * B + j, gk = b.bk * B + k;
			if ( gi < ix0 || gi >= ix1 || gj >= ny || gk >= nz ) continue;
			const d0 = s[ i + S1 * ( j + S1 * k ) ];
			const in0 = d0 < 0;
			// +X 边
			if ( gj > 0 && gk > 0 && ( s[ i + 1 + S1 * ( j + S1 * k ) ] < 0 ) !== in0 ) {

				quad( vertAt( gi, gj, gk ), vertAt( gi, gj - 1, gk ), vertAt( gi, gj - 1, gk - 1 ), vertAt( gi, gj, gk - 1 ), ! in0 );

			}

			// +Y 边
			if ( gi > 0 && gk > 0 && ( s[ i + S1 * ( j + 1 + S1 * k ) ] < 0 ) !== in0 ) {

				quad( vertAt( gi, gj, gk ), vertAt( gi, gj, gk - 1 ), vertAt( gi - 1, gj, gk - 1 ), vertAt( gi - 1, gj, gk ), ! in0 );

			}

			// +Z 边
			if ( gi > 0 && gj > 0 && ( s[ i + S1 * ( j + S1 * ( k + 1 ) ) ] < 0 ) !== in0 ) {

				quad( vertAt( gi, gj, gk ), vertAt( gi - 1, gj, gk ), vertAt( gi - 1, gj - 1, gk ), vertAt( gi, gj - 1, gk ), ! in0 );

			}

		}

	}

	// 只保留用到的顶点
	const remap = new Int32Array( vx.length ).fill( - 1 );
	let nv = 0;
	for ( let i = 0; i < idx.length; i ++ ) {

		const o = idx[ i ];
		if ( remap[ o ] < 0 ) remap[ o ] = nv ++;

	}

	const pos = new Float32Array( nv * 3 );
	for ( let o = 0; o < vx.length; o ++ ) {

		const n = remap[ o ];
		if ( n < 0 ) continue;
		pos[ n * 3 ] = vx[ o ]; pos[ n * 3 + 1 ] = vy[ o ]; pos[ n * 3 + 2 ] = vz[ o ];

	}

	const index = nv > 65535 ? new Uint32Array( idx.length ) : new Uint32Array( idx.length );
	for ( let i = 0; i < idx.length; i ++ ) index[ i ] = remap[ idx[ i ] ];

	// 法线、投影、遮蔽、材质参数
	const nor = new Int8Array( nv * 3 );
	const aux = new Uint8Array( nv * 4 );
	const e = h * 0.35;
	const sdfAO = vol.sdfAO || sdf;
	const AO_D = [ h * 1.2, h * 3.2, h * 8, h * 20 ];
	const AO_W = [ 0.5, 0.3, 0.2, 0.12 ];
	const attr = new Float32Array( 4 );
	for ( let n = 0; n < nv; n ++ ) {

		let x = pos[ n * 3 ], y = pos[ n * 3 + 1 ], z = pos[ n * 3 + 2 ];
		// 四面体梯度
		const a = sdf( x + e, y - e, z - e ), b2 = sdf( x - e, y - e, z + e ), c = sdf( x - e, y + e, z - e ), d = sdf( x + e, y + e, z + e );
		let gx = a - b2 - c + d, gy = - a - b2 + c + d, gz = - a + b2 - c + d;
		const gl = Math.hypot( gx, gy, gz ) || 1;
		gx /= gl; gy /= gl; gz /= gl;
		// 沿梯度投影回表面（只走一步，最多半格）
		const dv = ( a + b2 + c + d ) * 0.25;
		const step = Math.max( - h * 0.5, Math.min( h * 0.5, dv ) );
		x -= gx * step; y -= gy * step; z -= gz * step;
		pos[ n * 3 ] = x; pos[ n * 3 + 1 ] = y; pos[ n * 3 + 2 ] = z;
		nor[ n * 3 ] = Math.round( gx * 127 ); nor[ n * 3 + 1 ] = Math.round( gy * 127 ); nor[ n * 3 + 2 ] = Math.round( gz * 127 );
		// 遮蔽：沿法线往外走，SDF 值比走的距离小说明附近有岩石挡着
		let occ = 0;
		for ( let s = 0; s < 4; s ++ ) {

			const dd = AO_D[ s ];
			const v = sdfAO( x + gx * dd, y + gy * dd, z + gz * dd );
			occ += AO_W[ s ] * Math.max( 0, dd - v ) / dd;

		}

		const ao = Math.max( 0, Math.min( 1, 1 - occ ) );
		attr[ 0 ] = 0; attr[ 1 ] = 0; attr[ 2 ] = 0; attr[ 3 ] = 0;
		if ( vol.attrib ) vol.attrib( x, y, z, gx, gy, gz, attr );
		aux[ n * 4 ] = Math.round( ao * 255 );
		aux[ n * 4 + 1 ] = Math.round( Math.max( 0, Math.min( 1, attr[ 0 ] ) ) * 255 );
		aux[ n * 4 + 2 ] = Math.round( Math.max( 0, Math.min( 1, attr[ 1 ] ) ) * 255 );
		aux[ n * 4 + 3 ] = Math.round( Math.max( 0, Math.min( 1, attr[ 2 ] ) ) * 255 );

	}

	return { pos, nor, aux, index, samples, blocks: blocks.size };

}

// 一个岩体按 X 切成几片（交给不同线程），返回每片的格子范围
export function slabs( vol, parts ) {

	const nx = Math.ceil( ( vol.bounds[ 3 ] - vol.bounds[ 0 ] ) / vol.cell );
	// 每片至少 4 块宽：每片都要多算左边一整块（只为了交界那一列格子），片太窄时重复计算的比例太高
	const per = Math.max( 4 * B, Math.ceil( nx / parts / B ) * B );
	const out = [];
	for ( let i = 0; i < nx; i += per ) out.push( [ i, Math.min( nx, i + per ) ] );
	return out;

}

// ---------------------------------------------------------------------------
// 白虎岭的总体布局（单位：米，Y 向上，-Z 是北，+X 是东）。
// 参考图的机位在南边山坡的草地上（原点附近，眼高约 40 米），朝北看：
//   正前方 1 公里外是白骨岭（山体正面雕着一个巨大的兽头骷髅，嘴是黑洞，獠牙倒挂）；
//   左边是高耸的石灰岩峭壁，崖上挂着楼阁；左中是梯田和城门楼；
//   中间偏右是峡谷，石拱桥跨过去，远处有瀑布；右边是崖上的寺庙和近处的高崖。
// 地形、岩体、建筑、植被、水都从这里取坐标，改布局只改这一个文件。
// ---------------------------------------------------------------------------

// 骷髅的局部坐标原点：上颚下沿的正中（世界坐标）。骷髅面朝 +Z（朝向观众）。
export const SKULL_O = [ 0, 320, - 1080 ];

// 参考机位
export const CAM_REF = { pos: [ 0, 41.2, 40 ], look: [ 6, 120, - 1000 ], fov: 52 };

// 山路：从机位脚下往下绕到村子，沿峡谷西岸往北，过石拱桥，再往北到白骨岭脚下
export const PATH = [
	[ 2, 30 ], [ 9, 8 ], [ - 4, - 18 ], [ 12, - 44 ], [ 4, - 72 ], [ 20, - 104 ], [ 24, - 135 ],
	[ 32, - 175 ], [ 28, - 228 ], [ 38, - 300 ], [ 46, - 380 ], [ 42, - 460 ], [ 48, - 528 ],
	[ 54, - 560 ], [ 98, - 560 ], [ 108, - 598 ], [ 96, - 676 ], [ 72, - 756 ], [ 46, - 846 ]
];
// 这一段在桥面上（不压地形）
export const PATH_BRIDGE_SEG = 13;

// 主河：从瀑布下的深潭往南流，穿过峡谷、桥下、右边寺庙崖脚，最后从近处高崖背后往东流走
export const RIVER = [
	[ 172, - 836 ], [ 132, - 762 ], [ 92, - 684 ], [ 77, - 604 ], [ 76, - 560 ], [ 81, - 484 ],
	[ 96, - 404 ], [ 104, - 326 ], [ 98, - 252 ], [ 112, - 182 ], [ 162, - 118 ], [ 262, - 56 ], [ 420, - 10 ]
];
export const RIVER_BED = [ - 30, - 44 ]; // 河床高度：上游 → 下游
export const RIVER_HALF = 7.5; // 河床半宽

// 梯田里的小溪：从城门边的泉眼流下梯田，经过村口的水塘，汇入峡谷
export const STREAM = [
	[ - 74, - 286 ], [ - 63, - 252 ], [ - 53, - 216 ], [ - 41, - 186 ], [ - 23, - 162 ], [ - 4, - 150 ],
	[ 12, - 150 ], [ 40, - 160 ], [ 70, - 174 ], [ 100, - 184 ]
];

export const POND = { x: 12, z: - 150, r: 12, level: 0.35 };

// 梯田范围（椭圆）和台阶高度
export const TERRACE = { x: - 102, z: - 190, rx: 92, rz: 108, step: 1.45 };

// 城门楼、村子
export const GATE = { x: - 88, y: 25, z: - 304, r: 26 };
export const VILLAGE = { x: 28, y: 1.2, z: - 158, r: 44 };

// 石拱桥（东西向跨过峡谷）
export const BRIDGE = { x: 76, y: 2.2, z: - 560, span: 44, width: 5.2 };

// 瀑布：从东北的崖顶落进深潭
export const FALLS = { x: 186, z: - 860, top: 66, bottom: - 30 };

// 右边崖上的寺庙
export const TEMPLE_R = { x: 142, y: 8, z: - 252 };

// 折线工具：预先算好每段的长度，查询最近点和沿线距离
export function polyline( pts ) {

	const segs = [];
	let acc = 0;
	for ( let i = 0; i < pts.length - 1; i ++ ) {

		const [ ax, az ] = pts[ i ], [ bx, bz ] = pts[ i + 1 ];
		const dx = bx - ax, dz = bz - az, len = Math.hypot( dx, dz );
		segs.push( { ax, az, dx, dz, len, s0: acc } );
		acc += len;

	}

	const minX = Math.min( ...pts.map( ( p ) => p[ 0 ] ) ), maxX = Math.max( ...pts.map( ( p ) => p[ 0 ] ) );
	const minZ = Math.min( ...pts.map( ( p ) => p[ 1 ] ) ), maxZ = Math.max( ...pts.map( ( p ) => p[ 1 ] ) );
	return {
		pts, segs, length: acc, minX, maxX, minZ, maxZ,
		// 返回 [距离, 沿线长度, 所在段号, 段内参数]
		closest( x, z, out ) {

			let best = 1e18, bs = 0, bi = 0, bt = 0;
			for ( let i = 0; i < segs.length; i ++ ) {

				const s = segs[ i ];
				let t = ( ( x - s.ax ) * s.dx + ( z - s.az ) * s.dz ) / ( s.len * s.len );
				t = t < 0 ? 0 : t > 1 ? 1 : t;
				const px = s.ax + s.dx * t - x, pz = s.az + s.dz * t - z;
				const d = px * px + pz * pz;
				if ( d < best ) { best = d; bs = s.s0 + s.len * t; bi = i; bt = t; }

			}

			out[ 0 ] = Math.sqrt( best ); out[ 1 ] = bs; out[ 2 ] = bi; out[ 3 ] = bt;
			return out;

		},
		// 沿线长度 s 处的点和切线方向
		at( s ) {

			s = Math.max( 0, Math.min( acc, s ) );
			let i = 0;
			while ( i < segs.length - 1 && segs[ i ].s0 + segs[ i ].len < s ) i ++;
			const g = segs[ i ], t = ( s - g.s0 ) / g.len;
			return { x: g.ax + g.dx * t, z: g.az + g.dz * t, tx: g.dx / g.len, tz: g.dz / g.len, seg: i };

		}
	};

}

// 用 Catmull-Rom 把折线加密成平滑曲线（拐角变圆），每隔 step 米一个点
export function smoothPolyline( pts, step = 4 ) {

	const out = [];
	const P = ( i ) => pts[ Math.max( 0, Math.min( pts.length - 1, i ) ) ];
	for ( let i = 0; i < pts.length - 1; i ++ ) {

		const p0 = P( i - 1 ), p1 = P( i ), p2 = P( i + 1 ), p3 = P( i + 2 );
		const len = Math.hypot( p2[ 0 ] - p1[ 0 ], p2[ 1 ] - p1[ 1 ] );
		const n = Math.max( 1, Math.ceil( len / step ) );
		for ( let k = 0; k < n; k ++ ) {

			const t = k / n, t2 = t * t, t3 = t2 * t;
			const f = ( a, b, c, d ) => 0.5 * ( 2 * b + ( - a + c ) * t + ( 2 * a - 5 * b + 4 * c - d ) * t2 + ( - a + 3 * b - 3 * c + d ) * t3 );
			out.push( [ f( p0[ 0 ], p1[ 0 ], p2[ 0 ], p3[ 0 ] ), f( p0[ 1 ], p1[ 1 ], p2[ 1 ], p3[ 1 ] ) ] );

		}

	}

	out.push( pts[ pts.length - 1 ].slice() );
	return out;

}

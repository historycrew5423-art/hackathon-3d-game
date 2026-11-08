import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// ---------------------------------------------------------------------------
// 中式建筑的零件：台基、柱、额枋、斗拱带、隔扇墙、栏杆、屋顶（庑殿 / 攒尖 / 悬山，带起翘和举折）。
// 所有零件按材质收集到 Kit 里，最后每种材质合并成一个网格（整个场景的建筑只有几次绘制）。
// UV 都按米算（贴图不会被拉伸），每种材质在着色器里自己决定贴图的平铺尺寸。
// ---------------------------------------------------------------------------

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _e = new THREE.Euler();

export class Kit {

	constructor() {

		this.parts = {}; // 材质名 → 几何体列表
		this.stack = [ new THREE.Matrix4() ];

	}

	get M() { return this.stack[ this.stack.length - 1 ]; }

	push( x = 0, y = 0, z = 0, ry = 0, s = 1 ) {

		_m.compose( _p.set( x, y, z ), _q.setFromEuler( _e.set( 0, ry, 0 ) ), _s.set( s, s, s ) );
		this.stack.push( this.M.clone().multiply( _m ) );
		return this;

	}

	pop() { this.stack.pop(); return this; }

	add( mat, geo, local ) {

		const g = geo.index ? geo.toNonIndexed() : geo;
		if ( local ) g.applyMatrix4( local );
		g.applyMatrix4( this.M );
		for ( const k of Object.keys( g.attributes ) ) if ( k !== 'position' && k !== 'normal' && k !== 'uv' ) g.deleteAttribute( k );
		if ( ! g.attributes.uv ) g.setAttribute( 'uv', new THREE.BufferAttribute( new Float32Array( g.attributes.position.count * 2 ), 2 ) );
		( this.parts[ mat ] ??= [] ).push( g );
		return this;

	}

	// 盒子：中心在 (x, y, z)。UV：门窗（贴图正好铺满一个开间）用 0~1，斗拱带横向按米、竖向 0~1，其余按米
	box( mat, x, y, z, w, h, d, ry = 0 ) {

		const mode = FIT.has( mat ) ? 'fit' : BAND.has( mat ) ? 'band' : 'm';
		const g = boxUV( w, h, d, mode );
		_m.compose( _p.set( x, y, z ), _q.setFromEuler( _e.set( 0, ry, 0 ) ), _s.set( 1, 1, 1 ) );
		return this.add( mat, g, _m );

	}

	// 柱子：底面中心在 (x, y, z)
	column( mat, x, y, z, r, h, seg = 10, rTop = r * 0.9 ) {

		const g = new THREE.CylinderGeometry( rTop, r, h, seg, 1, true );
		fixCylUV( g, r, h );
		_m.makeTranslation( x, y + h / 2, z );
		return this.add( mat, g, _m );

	}

	build( materials ) {

		const group = new THREE.Group();
		for ( const [ name, list ] of Object.entries( this.parts ) ) {

			const geo = mergeGeometries( list, false );
			geo.computeBoundingSphere();
			const mesh = new THREE.Mesh( geo, materials[ name ] );
			mesh.name = 'arch-' + name;
			mesh.castShadow = true;
			mesh.receiveShadow = true;
			group.add( mesh );

		}

		return group;

	}

}

const FIT = new Set( [ 'lattice', 'door', 'gatedoor', 'stele' ] );
const BAND = new Set( [ 'dougong' ] );

// 盒子的 UV。mode：'m' 按米；'fit' 每个面 0~1；'band' 水平方向按米、竖直方向 0~1
export function boxUV( w, h, d, mode = 'm' ) {

	const g = new THREE.BoxGeometry( w, h, d );
	const uv = g.attributes.uv, pos = g.attributes.position, nor = g.attributes.normal;
	if ( mode === 'fit' ) return g; // BoxGeometry 自带的就是每面 0~1
	for ( let i = 0; i < uv.count; i ++ ) {

		const x = pos.getX( i ), y = pos.getY( i ), z = pos.getZ( i );
		const nx = Math.abs( nor.getX( i ) ), ny = Math.abs( nor.getY( i ) );
		if ( mode === 'band' ) {

			const along = nx > 0.5 ? z : x;
			uv.setXY( i, along, ny > 0.5 ? 0.02 : y / h + 0.5 );
			continue;

		}

		if ( nx > 0.5 ) uv.setXY( i, z, y );
		else if ( ny > 0.5 ) uv.setXY( i, x, z );
		else uv.setXY( i, x, y );

	}

	return g;

}

function fixCylUV( g, r, h ) {

	const uv = g.attributes.uv;
	for ( let i = 0; i < uv.count; i ++ ) uv.setXY( i, uv.getX( i ) * Math.PI * 2 * r, uv.getY( i ) * h );

}

// ---------------------------------------------------------------------------
// 屋顶。平面是 2A × 2B 的矩形（A ≥ B，长边沿 x），檐口离地 0，屋脊高 H。
// 四个坡面各是一张 (u, v) 网格：v = 0 在檐口，v = 1 在屋脊；坡面越往上越窄（垂脊向里收）。
// 举折：高度 = H · v^1.55（檐口平缓、靠近屋脊变陡）。
// 起翘：檐角往上翘，翘起量随“离角多近”和“离檐口多近”衰减；相邻两个坡面在垂脊上用同一个公式，所以严丝合缝。
// kind: 'hip'（庑殿，四坡）、'gable'（悬山，两坡，两头伸出山墙）、'ring'（腰檐：只做下面 vMax 的一圈）
// ---------------------------------------------------------------------------
export function roof( kit, o ) {

	const { A, B, H, lift = 0.9, kind = 'hip', vMax = 1, thick = 0.32, nu = 18, nv = 10, tile = 'roof', under = 'wood', ridge = true, gableOver = 0.8 } = o;
	const P = 1.55;
	const hipIn = kind === 'gable' ? 0 : 1;
	const liftAt = ( x, z, v ) => {

		if ( kind === 'gable' ) return lift * 0.25 * Math.pow( 1 - v, 2 ) * Math.pow( Math.abs( x ) / A, 4 );
		const dx = A - Math.abs( x ), dz = B - Math.abs( z );
		const e = Math.max( dx, dz );
		return lift * Math.exp( - e / ( 0.42 * B ) ) * Math.pow( 1 - v, 2.2 );

	};

	const yAt = ( v ) => H * Math.pow( v, P );
	const slopeLen = ( v ) => {

		// 沿坡面从檐口量起的长度（用于 V 方向的 UV）
		let s = 0;
		const n = 16;
		for ( let i = 0; i < n; i ++ ) {

			const a = v * i / n, b = v * ( i + 1 ) / n;
			s += Math.hypot( B * ( b - a ), yAt( b ) - yAt( a ) );

		}

		return s;

	};

	// face: 0 前(+z) 1 后(-z) 2 右(+x) 3 左(-x)
	const faces = kind === 'gable' ? [ 0, 1 ] : [ 0, 1, 2, 3 ];
	const top = [], bot = [], uvs = [], ubs = [];
	const sl = [];
	for ( let j = 0; j <= nv; j ++ ) sl.push( slopeLen( vMax * j / nv ) );
	const pt = ( f, u, v, out ) => {

		const shrink = hipIn * v * B;
		let x, z;
		if ( f < 2 ) {

			const half = ( kind === 'gable' ? A + gableOver : A - shrink );
			x = u * half;
			z = ( f === 0 ? 1 : - 1 ) * B * ( 1 - v );

		} else {

			const half = B - shrink;
			z = u * half;
			x = ( f === 2 ? 1 : - 1 ) * ( A - shrink );

		}

		out[ 0 ] = x; out[ 1 ] = yAt( v ) + liftAt( x, z, v ); out[ 2 ] = z;
		return out;

	};

	const a = [ 0, 0, 0 ], b = [ 0, 0, 0 ], c = [ 0, 0, 0 ], d = [ 0, 0, 0 ];
	const geoTop = [], geoBot = [], geoEdge = [];
	for ( const f of faces ) {

		const pTop = [], pBot = [], pUv = [];
		const grid = [];
		for ( let j = 0; j <= nv; j ++ ) {

			const v = vMax * j / nv;
			const row = [];
			for ( let i = 0; i <= nu; i ++ ) {

				const u = - 1 + 2 * i / nu;
				pt( f, u, v, a );
				// 沿檐口方向的长度
				const along = f < 2 ? a[ 0 ] : a[ 2 ];
				row.push( { p: a.slice(), uv: [ along, sl[ j ] ] } );

			}

			grid.push( row );

		}

		// 坡面的法线方向（朝外朝上），用来做厚度
		const outN = f === 0 ? [ 0, 0, 1 ] : f === 1 ? [ 0, 0, - 1 ] : f === 2 ? [ 1, 0, 0 ] : [ - 1, 0, 0 ];
		for ( let j = 0; j < nv; j ++ ) for ( let i = 0; i < nu; i ++ ) {

			const q00 = grid[ j ][ i ], q10 = grid[ j ][ i + 1 ], q01 = grid[ j + 1 ][ i ], q11 = grid[ j + 1 ][ i + 1 ];
			// 前面和右面的 u 方向和左手系相反，按面翻转绕序，保证法线朝外
			const flip = f === 1 || f === 2;
			const tri = ( A1, B1, C1 ) => {

				if ( flip ) { pTop.push( ...A1.p, ...C1.p, ...B1.p ); pUv.push( ...A1.uv, ...C1.uv, ...B1.uv ); } else { pTop.push( ...A1.p, ...B1.p, ...C1.p ); pUv.push( ...A1.uv, ...B1.uv, ...C1.uv ); }

			};

			tri( q00, q10, q11 );
			tri( q00, q11, q01 );

		}

		const gT = new THREE.BufferGeometry();
		gT.setAttribute( 'position', new THREE.Float32BufferAttribute( pTop, 3 ) );
		gT.setAttribute( 'uv', new THREE.Float32BufferAttribute( pUv, 2 ) );
		gT.computeVertexNormals();
		geoTop.push( gT );
		// 底面（望板 / 椽子）：往下偏移 thick，绕序反过来
		const pb = new Float32Array( pTop.length );
		for ( let k = 0; k < pTop.length; k += 9 ) {

			for ( let t = 0; t < 3; t ++ ) {

				const src = k + ( t === 0 ? 0 : t === 1 ? 6 : 3 );
				pb[ k + t * 3 ] = pTop[ src ]; pb[ k + t * 3 + 1 ] = pTop[ src + 1 ] - thick; pb[ k + t * 3 + 2 ] = pTop[ src + 2 ];

			}

		}

		const gB = new THREE.BufferGeometry();
		gB.setAttribute( 'position', new THREE.BufferAttribute( pb, 3 ) );
		const ub = new Float32Array( pb.length / 3 * 2 );
		for ( let k = 0; k < pb.length / 3; k ++ ) { ub[ k * 2 ] = pb[ k * 3 ] + pb[ k * 3 + 2 ]; ub[ k * 2 + 1 ] = pb[ k * 3 + 1 ] * 3; }
		gB.setAttribute( 'uv', new THREE.BufferAttribute( ub, 2 ) );
		gB.computeVertexNormals();
		geoBot.push( gB );
		// 檐口的封檐板（竖直的一条）
		const pe = [], ue = [];
		const row0 = grid[ 0 ];
		for ( let i = 0; i < nu; i ++ ) {

			const p0 = row0[ i ].p, p1 = row0[ i + 1 ].p;
			const A0 = [ p0[ 0 ], p0[ 1 ], p0[ 2 ] ], A1 = [ p1[ 0 ], p1[ 1 ], p1[ 2 ] ];
			const B0 = [ p0[ 0 ], p0[ 1 ] - thick, p0[ 2 ] ], B1 = [ p1[ 0 ], p1[ 1 ] - thick, p1[ 2 ] ];
			const flip = f === 1 || f === 2;
			if ( flip ) pe.push( ...A0, ...A1, ...B1, ...A0, ...B1, ...B0 ); else pe.push( ...A0, ...B1, ...A1, ...A0, ...B0, ...B1 );
			const s0 = row0[ i ].uv[ 0 ], s1 = row0[ i + 1 ].uv[ 0 ];
			if ( flip ) ue.push( s0, 1, s1, 1, s1, 0, s0, 1, s1, 0, s0, 0 ); else ue.push( s0, 1, s1, 0, s1, 1, s0, 1, s0, 0, s1, 0 );

		}

		void outN;
		const gE = new THREE.BufferGeometry();
		gE.setAttribute( 'position', new THREE.Float32BufferAttribute( pe, 3 ) );
		gE.setAttribute( 'uv', new THREE.Float32BufferAttribute( ue, 2 ) );
		gE.computeVertexNormals();
		geoEdge.push( gE );

	}

	for ( const g of geoTop ) kit.add( tile, g );
	for ( const g of geoBot ) kit.add( under, g );
	for ( const g of geoEdge ) kit.add( 'trim', g );

	// 屋脊和垂脊
	if ( ridge && vMax >= 0.999 ) {

		const R = kind === 'gable' ? A + gableOver : A - B;
		if ( R > 0.05 ) {

			kit.box( 'ridge', 0, H + 0.22, 0, 2 * R + 0.5, 0.55, 0.42 );
			kit.box( 'ridge', 0, H + 0.55, 0, 2 * R + 0.2, 0.14, 0.24 );
			// 鸱吻：屋脊两头往上卷的兽头（简化成一段弯起的圆管）
			for ( const sg of [ - 1, 1 ] ) {

				const pts = [];
				for ( let k = 0; k <= 6; k ++ ) {

					const t = k / 6;
					pts.push( new THREE.Vector3( sg * ( R + 0.1 - 0.5 * Math.sin( t * 2.6 ) * t ), H + 0.3 + 1.25 * t, 0 ) );

				}

				const tube = new THREE.TubeGeometry( new THREE.CatmullRomCurve3( pts ), 8, 0.22, 6, false );
				kit.add( 'ridge', tube );

			}

		} else if ( kind !== 'gable' ) {

			// 攒尖：宝顶
			const g = new THREE.SphereGeometry( 0.42, 10, 8 );
			_m.makeTranslation( 0, H + 0.45, 0 );
			kit.add( 'gold', g, _m );
			const g2 = new THREE.ConeGeometry( 0.2, 1.4, 8 );
			_m.makeTranslation( 0, H + 1.4, 0 );
			kit.add( 'gold', g2, _m );

		}

		if ( kind !== 'gable' ) {

			// 四条垂脊：沿两个坡面的交线
			for ( const [ sx, sz ] of [ [ 1, 1 ], [ - 1, 1 ], [ 1, - 1 ], [ - 1, - 1 ] ] ) {

				const pts = [];
				for ( let k = 0; k <= 10; k ++ ) {

					const v = k / 10;
					pt( 0, sx, v, a );
					a[ 2 ] *= sz;
					pts.push( new THREE.Vector3( a[ 0 ], a[ 1 ] + 0.14, a[ 2 ] ) );

				}

				// 翘角：最外面再往上挑一点
				const p0 = pts[ 0 ];
				pts.unshift( new THREE.Vector3( p0.x * 1.0 + sx * 0.35, p0.y + 0.45, p0.z + sz * 0.35 ) );
				const tube = new THREE.TubeGeometry( new THREE.CatmullRomCurve3( pts ), 14, 0.17, 5, false );
				kit.add( 'ridge', tube );

			}

		}

	} else if ( kind === 'ring' ) {

		// 腰檐的上沿：一圈压顶
		void b; void c; void d;

	}

}

// ---------------------------------------------------------------------------
// 一层殿身：nx × nz 开间，柱高 h。台基另算。返回柱网尺寸。
// 正面（+z）中间开间是门，其余是隔扇窗；两侧和背面是墙。
// ---------------------------------------------------------------------------
export function storey( kit, o ) {

	const { nx = 3, nz = 2, bay = 3.6, bayZ = bay, h = 4.2, colR = 0.22, wallAll = false, open = false, balcony = false } = o;
	const W = nx * bay, D = nz * bayZ;
	const x0 = - W / 2, z0 = - D / 2;
	// 柱
	for ( let i = 0; i <= nx; i ++ ) for ( let j = 0; j <= nz; j ++ ) {

		if ( i > 0 && i < nx && j > 0 && j < nz ) continue; // 里面的柱子看不见
		kit.column( 'pillar', x0 + i * bay, 0, z0 + j * bayZ, colR, h, 8 );

	}

	// 额枋（柱顶的横梁）和斗拱带
	const bh = 0.42;
	kit.box( 'beam', 0, h - bh / 2, D / 2, W + colR * 2, bh, 0.3 );
	kit.box( 'beam', 0, h - bh / 2, - D / 2, W + colR * 2, bh, 0.3 );
	kit.box( 'beam', W / 2, h - bh / 2, 0, 0.3, bh, D );
	kit.box( 'beam', - W / 2, h - bh / 2, 0, 0.3, bh, D );
	const dg = 0.62;
	kit.box( 'dougong', 0, h + dg / 2, D / 2 + 0.12, W + 0.9, dg, 0.5 );
	kit.box( 'dougong', 0, h + dg / 2, - D / 2 - 0.12, W + 0.9, dg, 0.5 );
	kit.box( 'dougong', W / 2 + 0.12, h + dg / 2, 0, 0.5, dg, D + 0.9 );
	kit.box( 'dougong', - W / 2 - 0.12, h + dg / 2, 0, 0.5, dg, D + 0.9 );
	// 天花板（从下往上看屋檐时不会看穿）
	kit.box( 'wood', 0, h + dg, 0, W + 0.6, 0.12, D + 0.6 );

	if ( ! open ) {

		// 墙：正面隔扇（门在中间），侧面和背面是下砖上窗
		const wt = 0.16, inset = 0.06;
		for ( let i = 0; i < nx; i ++ ) {

			const cx = x0 + ( i + 0.5 ) * bay;
			const mid = i === Math.floor( nx / 2 );
			kit.box( wallAll ? 'wall' : ( mid ? 'door' : 'lattice' ), cx, ( h - bh ) / 2, D / 2 - inset, bay - colR * 2, h - bh, wt );
			kit.box( wallAll ? 'wall' : 'lattice', cx, ( h - bh ) / 2, - D / 2 + inset, bay - colR * 2, h - bh, wt );

		}

		for ( let j = 0; j < nz; j ++ ) {

			const cz = z0 + ( j + 0.5 ) * bayZ;
			for ( const sx of [ - 1, 1 ] ) {

				kit.box( 'wall', sx * ( W / 2 - inset ), ( h - bh ) * 0.22, cz, wt, ( h - bh ) * 0.44, bayZ - colR * 2 );
				kit.box( 'lattice', sx * ( W / 2 - inset ), ( h - bh ) * 0.72, cz, wt, ( h - bh ) * 0.56, bayZ - colR * 2, 0 );

			}

		}

	}

	if ( balcony ) railing( kit, W + 1.6, D + 1.6, 0, 1.0 );
	return { W, D, top: h + dg };

}

// 一圈栏杆（矩形，中心在原点，底在 y0）
export function railing( kit, W, D, y0, hgt = 0.95, gapFront = 0 ) {

	const postEvery = 1.4;
	const sides = [
		[ [ - W / 2, D / 2 ], [ W / 2, D / 2 ] ], [ [ W / 2, D / 2 ], [ W / 2, - D / 2 ] ],
		[ [ W / 2, - D / 2 ], [ - W / 2, - D / 2 ] ], [ [ - W / 2, - D / 2 ], [ - W / 2, D / 2 ] ]
	];
	sides.forEach( ( [ p, q ], si ) => {

		const len = Math.hypot( q[ 0 ] - p[ 0 ], q[ 1 ] - p[ 1 ] );
		const n = Math.max( 1, Math.round( len / postEvery ) );
		const ang = Math.atan2( q[ 1 ] - p[ 1 ], q[ 0 ] - p[ 0 ] );
		for ( let k = 0; k <= n; k ++ ) {

			const t = k / n;
			const x = p[ 0 ] + ( q[ 0 ] - p[ 0 ] ) * t, z = p[ 1 ] + ( q[ 1 ] - p[ 1 ] ) * t;
			if ( si === 0 && gapFront > 0 && Math.abs( x ) < gapFront / 2 ) continue;
			kit.box( 'pillar', x, y0 + hgt / 2, z, 0.14, hgt, 0.14 );

		}

		const cx = ( p[ 0 ] + q[ 0 ] ) / 2, cz = ( p[ 1 ] + q[ 1 ] ) / 2;
		if ( si === 0 && gapFront > 0 ) {

			const seg = ( W - gapFront ) / 2;
			for ( const sg of [ - 1, 1 ] ) {

				kit.box( 'pillar', sg * ( gapFront / 2 + seg / 2 ), y0 + hgt, cz, seg, 0.1, 0.12 );
				kit.box( 'pillar', sg * ( gapFront / 2 + seg / 2 ), y0 + hgt * 0.45, cz, seg, 0.06, 0.08 );

			}

		} else {

			kit.box( 'pillar', cx, y0 + hgt, cz, len, 0.1, 0.12, - ang );
			kit.box( 'pillar', cx, y0 + hgt * 0.45, cz, len, 0.06, 0.08, - ang );

		}

	} );

}

// 台基：石头砌的台子，正面中间有台阶
export function platform( kit, W, D, h, steps = true, stairW = 3.4 ) {

	kit.box( 'stone', 0, h / 2 - 0.02, 0, W, h, D );
	kit.box( 'stone', 0, h + 0.06, 0, W + 0.3, 0.14, D + 0.3 );
	if ( steps && h > 0.25 ) {

		const n = Math.max( 2, Math.round( h / 0.18 ) );
		const run = 0.3;
		for ( let i = 0; i < n; i ++ ) {

			const sh = h * ( n - i ) / n;
			kit.box( 'stone', 0, sh / 2, D / 2 + run * ( i + 0.5 ), stairW, sh, run );

		}

	}

}

// ---------------------------------------------------------------------------
// 组合件
// ---------------------------------------------------------------------------

// 殿 / 楼阁：floors 层，每层往里收；层间有腰檐和平座栏杆；最上面是庑殿顶或攒尖顶
export function hall( kit, o ) {

	const { nx = 3, nz = 2, bay = 3.6, h = 4.4, floors = 1, base = 1.0, kind = 'hip', liftK = 1, pyramid = false, wallAll = false } = o;
	let W = nx * bay, D = nz * ( o.bayZ ?? bay );
	platform( kit, W + 2.4, D + 2.4, base, o.steps ?? true );
	let y = base + 0.13;
	let curBay = bay, curBayZ = o.bayZ ?? bay;
	for ( let f = 0; f < floors; f ++ ) {

		kit.push( 0, y, 0 );
		const s = storey( kit, { nx, nz, bay: curBay, bayZ: curBayZ, h: f === 0 ? h : h * 0.78, wallAll, balcony: f > 0 } );
		kit.pop();
		const last = f === floors - 1;
		const ey = y + s.top;
		const ov = 1.5 + curBay * 0.12; // 出檐
		const A = s.W / 2 + ov, B = s.D / 2 + ov;
		kit.push( 0, ey, 0 );
		if ( last ) {

			if ( pyramid || Math.abs( A - B ) < 0.01 ) roof( kit, { A: Math.max( A, B ), B: Math.max( A, B ), H: Math.max( A, B ) * 0.95, lift: 1.0 * liftK } );
			else roof( kit, { A: Math.max( A, B ), B: Math.min( A, B ), H: Math.min( A, B ) * 0.82, lift: 0.95 * liftK, kind } );

		} else {

			// 腰檐：只做下面 45%
			roof( kit, { A, B, H: B * 0.8, lift: 0.75 * liftK, kind: 'ring', vMax: 0.42, nv: 5 } );

		}

		kit.pop();
		y = ey + ( last ? 0 : B * 0.8 * Math.pow( 0.42, 1.55 ) + 0.1 );
		// 上一层收进去
		curBay *= 0.86; curBayZ *= 0.86;
		if ( ! last ) {

			// 平座：上一层的地板
			const nW = nx * curBay + 1.8, nD = nz * curBayZ + 1.8;
			kit.box( 'wood', 0, y - 0.1, 0, nW, 0.24, nD );

		}

	}

	return { W, D };

}

// 亭子：四根柱子 + 攒尖顶（可以两重檐）
export function pavilion( kit, o ) {

	const { size = 4.2, h = 3.6, base = 0.6, tiers = 2 } = o;
	platform( kit, size + 1.6, size + 1.6, base, false );
	const y = base + 0.13;
	kit.push( 0, y, 0 );
	const s = storey( kit, { nx: 1, nz: 1, bay: size, h, open: true } );
	railing( kit, size + 0.2, size + 0.2, 0, 0.7, 1.6 );
	kit.pop();
	let ey = y + s.top;
	const A = size / 2 + 1.5;
	if ( tiers > 1 ) {

		kit.push( 0, ey, 0 );
		roof( kit, { A, B: A, H: A * 0.8, lift: 0.9, kind: 'ring', vMax: 0.42, nv: 5 } );
		kit.pop();
		ey += A * 0.8 * Math.pow( 0.42, 1.55 );
		// 上檐的短柱和斗拱
		const ss = size * 0.72;
		kit.push( 0, ey, 0 );
		kit.box( 'beam', 0, 0.6, 0, ss, 1.2, ss );
		kit.box( 'dougong', 0, 1.45, 0, ss + 0.5, 0.5, ss + 0.5 );
		kit.pop();
		ey += 1.7;
		kit.push( 0, ey, 0 );
		roof( kit, { A: ss / 2 + 1.3, B: ss / 2 + 1.3, H: ( ss / 2 + 1.3 ) * 1.05, lift: 0.85 } );
		kit.pop();

	} else {

		kit.push( 0, ey, 0 );
		roof( kit, { A, B: A, H: A * 0.95, lift: 0.95 } );
		kit.pop();

	}

}

// 塔：多层，方形，每层收小
export function pagoda( kit, o ) {

	const { size = 6, floors = 5, h = 3.2, base = 1.2 } = o;
	platform( kit, size + 2.5, size + 2.5, base, true, 2.2 );
	let y = base + 0.13, s = size;
	for ( let f = 0; f < floors; f ++ ) {

		const fh = f === 0 ? h * 1.25 : h;
		kit.push( 0, y, 0 );
		kit.box( 'wall', 0, fh / 2, 0, s, fh, s );
		// 每面中间一个窗洞
		for ( const r of [ 0, Math.PI / 2, Math.PI, - Math.PI / 2 ] ) {

			kit.push( 0, 0, 0, r );
			kit.box( f === 0 && r === 0 ? 'door' : 'lattice', 0, fh * 0.46, s / 2 + 0.02, s * 0.34, fh * 0.55, 0.08 );
			kit.pop();

		}

		kit.box( 'dougong', 0, fh + 0.25, 0, s + 0.5, 0.5, s + 0.5 );
		kit.pop();
		const ey = y + fh + 0.5;
		const A = s / 2 + 1.2 + s * 0.05;
		kit.push( 0, ey, 0 );
		if ( f === floors - 1 ) roof( kit, { A, B: A, H: A * 1.1, lift: 0.75 } );
		else roof( kit, { A, B: A, H: A * 0.7, lift: 0.7, kind: 'ring', vMax: 0.4, nv: 4 } );
		kit.pop();
		y = ey + A * 0.7 * Math.pow( 0.4, 1.55 );
		s *= 0.86;

	}

}

// 民居：矮墙（石头勒脚 + 白墙）、木构、悬山顶
export function house( kit, o ) {

	const { w = 8, d = 5.2, h = 3.0 } = o;
	kit.box( 'stone', 0, 0.3, 0, w + 0.3, 0.6, d + 0.3 );
	kit.box( 'plaster', 0, 0.6 + h / 2, 0, w, h, d );
	// 门和窗
	kit.box( 'door', 0, 0.6 + 1.05, d / 2 + 0.02, 1.4, 2.1, 0.06 );
	kit.box( 'lattice', - w * 0.3, 0.6 + 1.6, d / 2 + 0.02, 1.2, 0.9, 0.06 );
	kit.box( 'lattice', w * 0.3, 0.6 + 1.6, d / 2 + 0.02, 1.2, 0.9, 0.06 );
	// 山墙（三角）
	const gh = d * 0.42;
	const tri = new THREE.BufferGeometry();
	const p = [];
	for ( const sx of [ - 1, 1 ] ) {

		const x = sx * w / 2;
		const A = [ x, 0, d / 2 ], Bp = [ x, 0, - d / 2 ], C = [ x, gh, 0 ];
		if ( sx > 0 ) p.push( ...A, ...Bp, ...C ); else p.push( ...A, ...C, ...Bp );

	}

	tri.setAttribute( 'position', new THREE.Float32BufferAttribute( p, 3 ) );
	tri.setAttribute( 'uv', new THREE.Float32BufferAttribute( [ 0, 0, 5, 0, 2.5, 2, 0, 0, 2.5, 2, 5, 0 ], 2 ) );
	tri.computeVertexNormals();
	_m.makeTranslation( 0, 0.6 + h, 0 );
	kit.add( 'plaster', tri, _m );
	kit.push( 0, 0.6 + h, 0 );
	roof( kit, { A: w / 2, B: d / 2 + 0.9, H: gh + 0.35, kind: 'gable', lift: 0.5, gableOver: 0.6, nu: 8, nv: 6, thick: 0.22 } );
	kit.pop();

}

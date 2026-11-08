import * as THREE from 'three';
import { Kit, hall, pavilion, pagoda, house, platform, railing } from './archkit.js';
import { latticeTexture, dougongTexture, gateDoorTexture, steleTexture } from './textures.js';
import { GATE, VILLAGE, BRIDGE, TEMPLE_R, POND, polyline, smoothPolyline, PATH } from '../gen/layout.js';
import { LEFT_LEDGES } from '../gen/rocks.js';
import { mulberry32 } from '../gen/noise.js';

// ---------------------------------------------------------------------------
// 白虎岭的建筑：峭壁上的楼阁、石柱顶的亭子、城门楼和后面的殿宇、右边崖上的寺庙、
// 山村、峡谷上的石拱桥、远处石柱脚下的塔、路边的石碑。
// 坐标见 gen/layout.js。全部建筑合并成每种材质一个网格。
// ---------------------------------------------------------------------------

function rep( t, sx, sy = sx ) {

	const c = t.clone();
	c.repeat.set( 1 / sx, 1 / sy );
	c.wrapS = c.wrapT = THREE.RepeatWrapping;
	c.needsUpdate = true;
	return c;

}

export function archMaterials( T ) {

	const std = ( o ) => new THREE.MeshStandardMaterial( { roughness: 0.85, metalness: 0, ...o } );
	const dg = dougongTexture();
	dg.repeat.set( 1 / 1.3, 1 );
	return {
		roof: std( { map: rep( T.roof_diff, 2.6 ), normalMap: rep( T.roof_nor, 2.6 ), color: 0x8d9398, roughness: 0.78, side: THREE.DoubleSide } ),
		wood: std( { map: rep( T.planks_diff, 2.2 ), color: 0x76604e, side: THREE.DoubleSide } ),
		trim: std( { map: rep( T.planks_diff, 2.2 ), color: 0x3a2a20, side: THREE.DoubleSide } ),
		ridge: std( { map: rep( T.roof_diff, 1.4 ), color: 0x52575c, roughness: 0.75 } ),
		gold: std( { color: 0xc9a050, metalness: 0.85, roughness: 0.35 } ),
		pillar: std( { map: rep( T.redwood_diff, 1.6 ), color: 0xb03a26, roughness: 0.5 } ),
		beam: std( { map: rep( T.redwood_diff, 1.6 ), color: 0x76291b, roughness: 0.6 } ),
		dougong: std( { map: dg, roughness: 0.7 } ),
		wall: std( { map: rep( T.plaster_diff, 2.5 ), color: 0xe8dcc6, roughness: 0.92 } ),
		plaster: std( { color: 0xd8d0c0, roughness: 0.92 } ),
		door: std( { map: latticeTexture( 'door' ), roughness: 0.7 } ),
		lattice: std( { map: latticeTexture( 'lattice' ), roughness: 0.75 } ),
		stone: std( { map: rep( T.stonewall_diff, 2.4 ), normalMap: rep( T.stonewall_nor, 2.4 ), color: 0xd4d0c8, roughness: 0.9 } ),
		gatedoor: std( { map: gateDoorTexture(), roughness: 0.6 } ),
		stele: std( { map: steleTexture(), roughness: 0.85 } )
	};

}

// 城台：石头砌的台子，中间一个拱门洞；上面是两层的城楼
function gateTower( kit, { W = 28, D = 14, H = 9.5, archW = 5.4, archH = 7.2 } ) {

	const r = archW / 2;
	const s = new THREE.Shape();
	s.moveTo( - W / 2, - 1.5 );
	s.lineTo( - r, - 1.5 );
	s.lineTo( - r, archH - r );
	s.absarc( 0, archH - r, r, Math.PI, 0, true );
	s.lineTo( r, - 1.5 );
	s.lineTo( W / 2, - 1.5 );
	s.lineTo( W / 2 - 0.6, H );
	s.lineTo( - W / 2 + 0.6, H );
	s.closePath();
	const g = new THREE.ExtrudeGeometry( s, { depth: D, bevelEnabled: false, curveSegments: 18 } );
	g.translate( 0, 0, - D / 2 );
	kit.add( 'stone', g );
	// 门洞上方的券脸（一圈突出的拱石）
	const ring = new THREE.Shape();
	ring.absarc( 0, archH - r, r + 0.9, Math.PI, 0, true );
	ring.lineTo( r, archH - r );
	ring.absarc( 0, archH - r, r, 0, Math.PI, false );
	ring.closePath();
	const rg = new THREE.ExtrudeGeometry( ring, { depth: 0.35, bevelEnabled: false, curveSegments: 18 } );
	for ( const sz of [ 1, - 1 ] ) {

		const m = new THREE.Matrix4().makeTranslation( 0, 0, sz > 0 ? D / 2 : - D / 2 - 0.35 );
		kit.add( 'stone', rg.clone(), m );

	}

	// 城门（在门洞中间）
	kit.box( 'gatedoor', 0, archH / 2 - 0.75, 0, archW, archH + 1.5, 0.3 );
	// 垛口
	for ( const sz of [ 1, - 1 ] ) {

		kit.box( 'stone', 0, H + 0.35, sz * ( D / 2 - 0.4 ), W - 1.2, 0.7, 0.8 );
		const n = Math.floor( ( W - 2 ) / 2.2 );
		for ( let i = 0; i <= n; i ++ ) kit.box( 'stone', - ( W - 2 ) / 2 + i * ( W - 2 ) / n, H + 1.15, sz * ( D / 2 - 0.4 ), 1.1, 0.9, 0.8 );

	}

	kit.push( 0, H, 0 );
	hall( kit, { nx: 5, nz: 2, bay: 3.7, h: 4.6, floors: 2, base: 0.4, steps: false } );
	kit.pop();

}

// 石拱桥：单孔弧券，桥面微微拱起，两边是石栏杆
function archBridge( kit, { span = 44, W = 5.2 } ) {

	const L = span + 18, half = L / 2;
	const deckTop = ( x ) => 0.7 * ( 1 - ( x / half ) ** 2 );
	const c = 16, ys = - 15, yc0 = - 1.7;
	const rise = yc0 - ys, R = ( c * c + rise * rise ) / ( 2 * rise ), yc = yc0 - R;
	const th0 = Math.asin( ( ys - yc ) / R );
	const s = new THREE.Shape();
	s.moveTo( - half, - 26 );
	s.lineTo( - c, - 26 );
	s.lineTo( - c, ys );
	const n = 28;
	for ( let i = 0; i <= n; i ++ ) {

		const th = Math.PI - th0 - ( Math.PI - 2 * th0 ) * i / n;
		s.lineTo( R * Math.cos( th ), yc + R * Math.sin( th ) );

	}

	s.lineTo( c, - 26 );
	s.lineTo( half, - 26 );
	for ( let i = 0; i <= 20; i ++ ) {

		const x = half - L * i / 20;
		s.lineTo( x, deckTop( x ) );

	}

	s.closePath();
	const g = new THREE.ExtrudeGeometry( s, { depth: W, bevelEnabled: false } );
	g.translate( 0, 0, - W / 2 );
	kit.add( 'stone', g );
	// 券脸
	const ring = new THREE.Shape();
	const pts = [];
	for ( let i = 0; i <= n; i ++ ) {

		const th = th0 + ( Math.PI - 2 * th0 ) * i / n;
		pts.push( [ Math.cos( th ), Math.sin( th ) ] );

	}

	ring.moveTo( pts[ 0 ][ 0 ] * ( R + 1.3 ), yc + pts[ 0 ][ 1 ] * ( R + 1.3 ) );
	for ( const p of pts ) ring.lineTo( p[ 0 ] * ( R + 1.3 ), yc + p[ 1 ] * ( R + 1.3 ) );
	for ( let i = pts.length - 1; i >= 0; i -- ) ring.lineTo( pts[ i ][ 0 ] * R, yc + pts[ i ][ 1 ] * R );
	ring.closePath();
	const rg = new THREE.ExtrudeGeometry( ring, { depth: 0.3, bevelEnabled: false } );
	for ( const sz of [ 1, - 1 ] ) kit.add( 'stone', rg.clone(), new THREE.Matrix4().makeTranslation( 0, 0, sz > 0 ? W / 2 : - W / 2 - 0.3 ) );
	// 栏杆：望柱 + 栏板，沿着桥面的弧度
	const posts = 18;
	for ( const sz of [ 1, - 1 ] ) {

		const z = sz * ( W / 2 - 0.22 );
		for ( let i = 0; i <= posts; i ++ ) {

			const x = - half + 2 + ( L - 4 ) * i / posts;
			kit.box( 'stone', x, deckTop( x ) + 0.65, z, 0.32, 1.3, 0.32 );
			kit.box( 'stone', x, deckTop( x ) + 1.38, z, 0.22, 0.2, 0.22 );
			if ( i < posts ) {

				const x2 = - half + 2 + ( L - 4 ) * ( i + 1 ) / posts;
				const xm = ( x + x2 ) / 2;
				const ang = Math.atan2( deckTop( x2 ) - deckTop( x ), x2 - x );
				const pg = new THREE.BoxGeometry( x2 - x - 0.3, 0.75, 0.14 );
				const m = new THREE.Matrix4().compose( new THREE.Vector3( xm, deckTop( xm ) + 0.5, z ), new THREE.Quaternion().setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), ang ), new THREE.Vector3( 1, 1, 1 ) );
				kit.add( 'stone', pg, m );

			}

		}

	}

}

// 石碑：龟趺（简化成圆角的石座）+ 碑身 + 碑首
function stele( kit ) {

	kit.box( 'stone', 0, 0.35, 0, 2.2, 0.7, 1.3 );
	kit.box( 'stone', 0, 2.2, 0, 1.6, 3.2, 0.42 );
	kit.box( 'stele', 0, 2.2, 0.215, 1.52, 3.1, 0.02 );
	const top = new THREE.CylinderGeometry( 0.82, 0.82, 0.46, 16, 1, false, - Math.PI / 2, Math.PI );
	top.rotateX( Math.PI / 2 );
	kit.add( 'stone', top, new THREE.Matrix4().makeTranslation( 0, 3.8, 0 ) );

}

export function buildArchitecture( { T, heightAt } ) {

	const kit = new Kit();
	const placed = []; // 给植被避让用：[x, z, 半径]
	const at = ( x, z, y = null ) => [ x, y ?? heightAt( x, z ), z ];
	const put = ( fn, x, y, z, ry, r, ...args ) => {

		kit.push( x, y, z, ry );
		fn( kit, ...args );
		kit.pop();
		placed.push( [ x, z, r ] );

	};

	// 峭壁中段的楼阁（面朝东，朝向山谷）
	const [ L0, L1, L2 ] = LEFT_LEDGES;
	put( hall, L0[ 0 ] + 2, L0[ 1 ], L0[ 2 ] + 1, Math.PI / 2 - 0.25, 14, { nx: 3, nz: 2, bay: 4.2, h: 4.8, floors: 3, base: 0.6 } );
	put( hall, L1[ 0 ] + 4, L1[ 1 ], L1[ 2 ], Math.PI / 2 - 0.3, 9, { nx: 3, nz: 1, bay: 3.5, bayZ: 4, h: 4.0, floors: 2, base: 0.5 } );
	// 石柱顶上的重檐亭
	put( pavilion, L2[ 0 ], L2[ 1 ], L2[ 2 ], 0.3, 7, { size: 4.6, h: 3.6, base: 0.5, tiers: 2 } );

	// 城门楼（面朝机位）和后面一路升高的殿宇
	put( gateTower, GATE.x, GATE.y - 0.2, GATE.z, 0.22, 20, {} );
	{

		const [ x, y, z ] = at( - 116, - 352 );
		put( hall, x, y, z, 0.3, 14, { nx: 5, nz: 3, bay: 3.8, h: 5.0, floors: 1, base: 1.4 } );

	}

	{

		const [ x, y, z ] = at( - 150, - 318 );
		put( pagoda, x, y, z, 0.4, 7, { size: 6.4, floors: 5, h: 3.4 } );

	}

	{

		const [ x, y, z ] = at( - 64, - 344 );
		put( hall, x, y, z, 0.1, 9, { nx: 3, nz: 2, bay: 3.4, h: 4.2, floors: 2, base: 0.9 } );

	}

	// 右边崖上的寺庙（石台顶面在 TEMPLE_R.y）
	put( hall, TEMPLE_R.x - 2, TEMPLE_R.y, TEMPLE_R.z + 2, - 0.55, 12, { nx: 3, nz: 2, bay: 3.9, h: 4.6, floors: 2, base: 0.8 } );
	put( pavilion, TEMPLE_R.x + 12, TEMPLE_R.y, TEMPLE_R.z - 12, - 0.5, 5, { size: 3.6, h: 3.2, base: 0.4, tiers: 1 } );

	// 石柱群脚下的塔和殿（中景）
	{

		const [ x, y, z ] = at( - 108, - 548 );
		put( pagoda, x, y, z, 0.2, 8, { size: 7.5, floors: 7, h: 3.6 } );

	}

	{

		const [ x, y, z ] = at( - 40, - 610 );
		put( hall, x, y, z, 0.1, 12, { nx: 5, nz: 2, bay: 4, h: 5, floors: 2, base: 1.2 } );

	}

	{

		const [ x, y, z ] = at( 236, - 470 );
		put( pagoda, x, y, z, - 0.3, 6, { size: 6, floors: 5, h: 3.2 } );

	}

	// 山村：沿着山路和水塘散落的民居
	const r = mulberry32( 808 );
	const pathL = polyline( smoothPolyline( PATH, 3 ) );
	const tmp = [ 0, 0, 0, 0 ];
	const houses = [];
	let guard = 0;
	while ( houses.length < 15 && guard ++ < 3000 ) {

		const a = r() * Math.PI * 2, d = 10 + r() * ( VILLAGE.r + 6 );
		const x = VILLAGE.x + Math.cos( a ) * d * 1.1, z = VILLAGE.z + Math.sin( a ) * d;
		pathL.closest( x, z, tmp );
		if ( tmp[ 0 ] < 7.5 ) continue;
		if ( Math.hypot( x - POND.x, z - POND.z ) < POND.r + 6 ) continue;
		if ( houses.some( ( h ) => Math.hypot( h[ 0 ] - x, h[ 1 ] - z ) < 11.5 ) ) continue;
		// 坡太陡的地方不盖
		const h0 = heightAt( x - 4, z ), h1 = heightAt( x + 4, z ), h2 = heightAt( x, z - 4 ), h3 = heightAt( x, z + 4 );
		if ( Math.max( h0, h1, h2, h3 ) - Math.min( h0, h1, h2, h3 ) > 1.6 ) continue;
		// 正门朝向山路
		const p = pathL.at( tmp[ 1 ] );
		const ry = Math.atan2( p.x - x, p.z - z );
		const y = Math.min( h0, h1, h2, h3 ) - 0.1;
		houses.push( [ x, z ] );
		put( house, x, y, z, ry, 6, { w: 7 + r() * 3, d: 4.8 + r() * 1.4, h: 2.8 + r() * 0.5 } );

	}

	// 石拱桥
	kit.push( BRIDGE.x, BRIDGE.y, BRIDGE.z, 0 );
	archBridge( kit, { span: BRIDGE.span, W: BRIDGE.width } );
	kit.pop();

	// 路边的石碑（机位右前方）
	{

		const [ x, y, z ] = at( 13, 10 );
		put( stele, x, y - 0.25, z, 0.35, 3 );

	}

	void platform; void railing;
	const materials = archMaterials( T );
	const group = kit.build( materials );
	group.name = 'architecture';
	let tris = 0;
	group.traverse( ( o ) => { if ( o.isMesh ) tris += o.geometry.attributes.position.count / 3; } );
	console.log( `[scene] architecture ${ group.children.length } meshes, ${ ( tris / 1000 ).toFixed( 0 ) }k tris, ${ houses.length } houses` );
	return { group, placed, materials };

}

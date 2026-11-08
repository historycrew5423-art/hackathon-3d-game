import * as THREE from 'three';

// ---------------------------------------------------------------------------
// 用 canvas 画的贴图：隔扇门窗、斗拱彩画、城门（门钉）、石碑刻字、金圈（咒文）、藤蔓帘、花簇。
// 门窗、彩画这些有固定图案的东西，照片素材里找不到合适的，画出来更可控。
// ---------------------------------------------------------------------------

function canvas( w, h ) {

	const c = document.createElement( 'canvas' );
	c.width = w; c.height = h;
	return [ c, c.getContext( '2d' ) ];

}

function tex( c, srgb = true, repeat = true ) {

	const t = new THREE.CanvasTexture( c );
	if ( srgb ) t.colorSpace = THREE.SRGBColorSpace;
	if ( repeat ) t.wrapS = t.wrapT = THREE.RepeatWrapping;
	t.anisotropy = 8;
	t.generateMipmaps = true;
	t.minFilter = THREE.LinearMipmapLinearFilter;
	return t;

}

// 轻微的颗粒和污渍，避免大面积的纯色
function grime( g, w, h, amount = 0.08, seed = 1 ) {

	let s = seed * 9301 + 49297;
	const rnd = () => ( s = ( s * 9301 + 49297 ) % 233280 ) / 233280;
	for ( let i = 0; i < w * h / 60; i ++ ) {

		const a = rnd() * amount;
		g.fillStyle = rnd() < 0.5 ? `rgba(0,0,0,${ a })` : `rgba(255,240,220,${ a * 0.6 })`;
		g.fillRect( rnd() * w, rnd() * h, 1 + rnd() * 3, 1 + rnd() * 3 );

	}

	// 竖向的雨水痕
	for ( let i = 0; i < w / 6; i ++ ) {

		const x = rnd() * w, len = h * ( 0.2 + rnd() * 0.6 );
		const grd = g.createLinearGradient( 0, 0, 0, len );
		grd.addColorStop( 0, `rgba(0,0,0,${ amount * 0.8 })` );
		grd.addColorStop( 1, 'rgba(0,0,0,0)' );
		g.fillStyle = grd;
		g.fillRect( x, 0, 1 + rnd() * 2, len );

	}

}

// 隔扇：一个开间里四扇。上部是方格棂条糊窗纸，下部是裙板。variant: 'lattice' | 'door'
export function latticeTexture( variant = 'lattice' ) {

	const W = 512, H = 512;
	const [ c, g ] = canvas( W, H );
	const frame = variant === 'door' ? '#5b1d14' : '#4a1a12';
	const paper = variant === 'door' ? '#2a1a12' : '#cdbf9f';
	g.fillStyle = frame;
	g.fillRect( 0, 0, W, H );
	const leaves = 4, lw = W / leaves;
	for ( let k = 0; k < leaves; k ++ ) {

		const x0 = k * lw;
		const m = 9; // 边框宽
		// 窗心（上 58%）
		const y0 = 14, y1 = H * 0.6;
		g.fillStyle = paper;
		g.fillRect( x0 + m, y0, lw - 2 * m, y1 - y0 );
		// 棂条：方格加斜向的“步步锦”
		g.strokeStyle = frame;
		g.lineWidth = 4;
		const cells = 5, cw = ( lw - 2 * m ) / cells;
		for ( let i = 1; i < cells; i ++ ) {

			g.beginPath(); g.moveTo( x0 + m + i * cw, y0 ); g.lineTo( x0 + m + i * cw, y1 ); g.stroke();

		}

		const rows = Math.round( ( y1 - y0 ) / cw );
		for ( let j = 1; j < rows; j ++ ) {

			const y = y0 + j * ( y1 - y0 ) / rows;
			g.beginPath(); g.moveTo( x0 + m, y ); g.lineTo( x0 + lw - m, y ); g.stroke();

		}

		g.lineWidth = 2.5;
		for ( let j = 0; j < rows; j += 2 ) for ( let i = 0; i < cells; i += 2 ) {

			const cx = x0 + m + ( i + 0.5 ) * cw, cy = y0 + ( j + 0.5 ) * ( y1 - y0 ) / rows;
			g.strokeRect( cx - cw * 0.25, cy - cw * 0.25, cw * 0.5, cw * 0.5 );

		}

		// 绦环板和裙板
		g.fillStyle = '#3d140d';
		g.fillRect( x0 + m, y1 + 8, lw - 2 * m, 30 );
		g.fillRect( x0 + m, y1 + 48, lw - 2 * m, H - y1 - 62 );
		g.strokeStyle = '#7a3a24';
		g.lineWidth = 3;
		g.strokeRect( x0 + m + 10, y1 + 60, lw - 2 * m - 20, H - y1 - 86 );
		// 门环
		if ( variant === 'door' && ( k === 1 || k === 2 ) ) {

			g.strokeStyle = '#c9a25a';
			g.lineWidth = 3;
			g.beginPath(); g.arc( x0 + ( k === 1 ? lw - 22 : 22 ), H * 0.52, 9, 0, Math.PI * 2 ); g.stroke();

		}

		// 扇与扇之间的缝
		g.fillStyle = 'rgba(0,0,0,0.6)';
		g.fillRect( x0, 0, 2, H );

	}

	grime( g, W, H, 0.1, variant === 'door' ? 3 : 2 );
	return tex( c, true, false );

}

// 斗拱带：一攒一攒的斗拱（青绿彩画，红色的拱眼壁）。横向按米平铺，一攒约 1.3 米
export function dougongTexture() {

	const W = 256, H = 128;
	const [ c, g ] = canvas( W, H );
	g.fillStyle = '#6e2318';
	g.fillRect( 0, 0, W, H );
	const cx = W / 2;
	const blue = '#1f4f5a', green = '#2f6a46', line = '#d8d0b8', dark = '#13252a';
	// 三层出跳的拱，下小上大
	const layers = [ [ 0.86, 0.3, 60 ], [ 0.6, 0.62, 100 ], [ 0.32, 0.92, 150 ] ];
	for ( const [ y, w, px ] of layers ) {

		const yy = H * y;
		g.fillStyle = dark;
		g.fillRect( cx - px / 2 - 2, yy - 13, px + 4, 26 );
		g.fillStyle = y > 0.5 ? green : blue;
		g.fillRect( cx - px / 2, yy - 11, px, 22 );
		g.fillStyle = line;
		g.fillRect( cx - px / 2, yy - 11, px, 2 );
		// 斗
		g.fillStyle = blue;
		for ( const sx of [ - 1, 0, 1 ] ) {

			g.fillRect( cx + sx * px / 2 - 9, yy - 20, 18, 9 );

		}

		void w;

	}

	// 坐斗
	g.fillStyle = green;
	g.fillRect( cx - 16, H - 14, 32, 14 );
	// 上下的枋
	g.fillStyle = blue;
	g.fillRect( 0, 0, W, 10 );
	g.fillStyle = line;
	g.fillRect( 0, 10, W, 2 );
	grime( g, W, H, 0.12, 5 );
	return tex( c );

}

// 城门：朱红门板 + 九路门钉
export function gateDoorTexture() {

	const W = 256, H = 512;
	const [ c, g ] = canvas( W, H );
	g.fillStyle = '#6a1a12';
	g.fillRect( 0, 0, W, H );
	g.fillStyle = '#4a120c';
	g.fillRect( W / 2 - 2, 0, 4, H );
	for ( let j = 0; j < 9; j ++ ) for ( let i = 0; i < 4; i ++ ) for ( const side of [ 0, 1 ] ) {

		const x = side * W / 2 + 18 + i * ( W / 2 - 36 ) / 3, y = 40 + j * ( H - 80 ) / 8;
		const grd = g.createRadialGradient( x - 2, y - 2, 1, x, y, 8 );
		grd.addColorStop( 0, '#f2d68c' ); grd.addColorStop( 1, '#7a5520' );
		g.fillStyle = grd;
		g.beginPath(); g.arc( x, y, 7, 0, Math.PI * 2 ); g.fill();

	}

	grime( g, W, H, 0.14, 7 );
	return tex( c, true, false );

}

// 石碑：竖排刻字。主字“白虎岭”，旁边一行小字
export function steleTexture() {

	const W = 512, H = 1024;
	const [ c, g ] = canvas( W, H );
	const grd = g.createLinearGradient( 0, 0, W, H );
	grd.addColorStop( 0, '#6d6a63' ); grd.addColorStop( 1, '#55524c' );
	g.fillStyle = grd;
	g.fillRect( 0, 0, W, H );
	grime( g, W, H, 0.2, 11 );
	// 边框
	g.strokeStyle = 'rgba(30,28,25,0.7)';
	g.lineWidth = 6;
	g.strokeRect( 26, 26, W - 52, H - 52 );
	const font = ( s, w = 700 ) => `${ w } ${ s }px "STKaiti", "KaiTi", "Kaiti SC", "楷体", "BiauKai", "Noto Serif CJK SC", "Songti SC", serif`;
	g.textAlign = 'center';
	g.textBaseline = 'middle';
	// 刻进去的字：先画一圈亮边（下右）再画暗字，像凹进去
	const carve = ( ch, x, y, size, fill ) => {

		g.font = font( size );
		g.fillStyle = 'rgba(255,250,235,0.25)';
		g.fillText( ch, x + 3, y + 3 );
		g.fillStyle = fill;
		g.fillText( ch, x, y );

	};

	[ '白', '虎', '岭' ].forEach( ( ch, i ) => carve( ch, W * 0.56, 230 + i * 270, 230, '#8f1f14' ) );
	const small = '山高必有怪岭峻却生精';
	[ ...small ].forEach( ( ch, i ) => carve( ch, W * 0.18, 140 + i * 78, 60, '#2a2724' ) );
	return tex( c, true, false );

}

// 金圈：悟空用金箍棒画的圈。一圈金光加六字真言
export function ringTexture() {

	const S = 1024;
	const [ c, g ] = canvas( S, S );
	g.clearRect( 0, 0, S, S );
	const cx = S / 2;
	const ring = ( r, w, a ) => {

		g.strokeStyle = `rgba(255,214,120,${ a })`;
		g.lineWidth = w;
		g.beginPath(); g.arc( cx, cx, r, 0, Math.PI * 2 ); g.stroke();

	};

	ring( S * 0.47, 10, 1 );
	ring( S * 0.47, 34, 0.25 );
	ring( S * 0.385, 5, 0.9 );
	g.font = `700 ${ S * 0.06 }px "STKaiti", "KaiTi", "Kaiti SC", serif`;
	g.textAlign = 'center';
	g.textBaseline = 'middle';
	g.fillStyle = 'rgba(255,226,150,1)';
	const words = '唵嘛呢叭咪吽';
	const n = 24;
	for ( let i = 0; i < n; i ++ ) {

		const a = i / n * Math.PI * 2;
		g.save();
		g.translate( cx + Math.cos( a ) * S * 0.428, cx + Math.sin( a ) * S * 0.428 );
		g.rotate( a + Math.PI / 2 );
		g.fillText( words[ i % 6 ], 0, 0 );
		g.restore();

	}

	return tex( c, true, false );

}

// 藤蔓帘：用真实的叶片照片（island_tree_02 的叶子）沿着下垂的藤条贴出来
export function vineTexture( leavesImg ) {

	const W = 512, H = 1024;
	const [ c, g ] = canvas( W, H );
	g.clearRect( 0, 0, W, H );
	let s = 77;
	const rnd = () => ( s = ( s * 16807 ) % 2147483647 ) / 2147483647;
	// 叶片在图集里的位置（上排五片、下排三片，见 shots/atlas）
	const iw = leavesImg.width, ih = leavesImg.height;
	const cells = [ [ 0.02, 0.01, 0.17, 0.42 ], [ 0.2, 0.01, 0.18, 0.4 ], [ 0.37, 0.01, 0.14, 0.36 ], [ 0.52, 0.01, 0.15, 0.36 ], [ 0.68, 0.01, 0.16, 0.42 ], [ 0.02, 0.6, 0.19, 0.4 ], [ 0.21, 0.56, 0.17, 0.44 ], [ 0.38, 0.6, 0.17, 0.4 ] ];
	const strands = 9;
	for ( let k = 0; k < strands; k ++ ) {

		let x = ( k + 0.3 + rnd() * 0.4 ) * W / strands;
		const len = H * ( 0.45 + rnd() * 0.55 );
		// 藤条
		g.strokeStyle = 'rgba(60,50,30,0.9)';
		g.lineWidth = 2;
		g.beginPath(); g.moveTo( x, 0 );
		const pts = [];
		for ( let y = 0; y < len; y += 8 ) {

			x += ( rnd() - 0.5 ) * 3;
			pts.push( [ x, y ] );
			g.lineTo( x, y );

		}

		g.stroke();
		// 叶子：越往下越稀
		for ( const [ px, py ] of pts ) {

			if ( rnd() > 0.85 - 0.4 * ( py / len ) ) continue;
			const cell = cells[ Math.floor( rnd() * cells.length ) ];
			const sz = 16 + rnd() * 20;
			g.save();
			g.translate( px, py );
			g.rotate( ( rnd() - 0.5 ) * 2.2 + Math.PI );
			const sh = 0.6 + rnd() * 0.5;
			g.filter = `brightness(${ sh })`;
			g.drawImage( leavesImg, cell[ 0 ] * iw, cell[ 1 ] * ih, cell[ 2 ] * iw, cell[ 3 ] * ih, - sz * 0.3, 0, sz * 0.6, sz * 1.3 );
			g.restore();

		}

	}

	g.filter = 'none';
	return tex( c, true, false );

}

// 花簇：粉色的杜鹃 / 山桃，一团一团五瓣小花（叶子用照片，花瓣用画的）
export function blossomTexture() {

	const S = 256;
	const [ c, g ] = canvas( S, S );
	g.clearRect( 0, 0, S, S );
	let s = 91;
	const rnd = () => ( s = ( s * 16807 ) % 2147483647 ) / 2147483647;
	for ( let i = 0; i < 26; i ++ ) {

		const x = 30 + rnd() * ( S - 60 ), y = 30 + rnd() * ( S - 60 );
		const r = 9 + rnd() * 9;
		const hue = 330 + rnd() * 25, l = 72 + rnd() * 16;
		for ( let p = 0; p < 5; p ++ ) {

			const a = p / 5 * Math.PI * 2 + rnd();
			g.fillStyle = `hsla(${ hue },70%,${ l }%,1)`;
			g.beginPath();
			g.ellipse( x + Math.cos( a ) * r * 0.55, y + Math.sin( a ) * r * 0.55, r * 0.55, r * 0.38, a, 0, Math.PI * 2 );
			g.fill();

		}

		g.fillStyle = '#f7e27a';
		g.beginPath(); g.arc( x, y, r * 0.18, 0, Math.PI * 2 ); g.fill();

	}

	return tex( c, true, false );

}

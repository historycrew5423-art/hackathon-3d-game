import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { clone as skClone } from 'three/addons/utils/SkeletonUtils.js';
import { asset } from '../core/params.js';
import { createAudio } from './audio.js';

// ---------------------------------------------------------------------------
// 白虎岭割草模式（按 docs/DESIGN.md v0.2 的核心循环）：
// 选角色 → WASD 移动、鼠标瞄准射击、空格冲刺、Q 大招 → 打怪掉经验 → 升级三选一 → 形态/技能成长 → Boss
// 怪物全部 InstancedMesh（一种怪一次绘制），碰撞是 XZ 平面圆 + 空间哈希。
// ---------------------------------------------------------------------------

export const ARENA = { x: 20, z: - 120, r: 105 };

export const HEROES = {
	wukong: {
		name: '奶娃·孙悟空', file: 'wukong.glb', icon: 'wukong.webp', hp: 160, speed: 7.8,
		desc: '自动金箍棒横扫 + 热梗弹幕',
		weapon: 'staff', skills: [ 'clone', 'ring', 'thunder', 'shield', 'push', 'bbq', 'aura', 'log' ], ult: '七十二变·巨大化'
	}
};


const MEMES = [ '哈哈哈', '绷不住了', '666', '典', '急了', '破防了', '尊嘟假嘟', '咕咕嘎嘎', '奶龙', '哦咿啊', '退退退', '芭比Q', '泰裤辣', '遥遥领先', '依托答辩' ];
const ENEMY_TAUNT = [ '急了', '就这？', '你个老六', '我真服了', '答辩', '一眼丁真' ];
const SKILL_INFO = {
	clone: { name: '分身毫毛', desc: '召唤会自动打怪的分身' },
	ring: { name: '画地为牢', desc: '脚下金圈，圈内持续伤害' },
	thunder: { name: '小发雷霆', desc: '每 3 秒随机劈 3 道小雷' },
	shield: { name: '哈字护盾', desc: '几个"哈"字绕身旋转伤害' },
	push: { name: '退！退！退！', desc: '周期性击退冲击波' },
	bbq: { name: '芭比Q了', desc: '敌人死亡时原地着火爆炸' },
	aura: { name: '尬笑光环', desc: '身边持续伤害圈' },
	log: { name: '滚木', desc: '滚木：什么也不会发生（实际：木头滚过去碾怪）' }
};

export function createSurvivor( { scene, camera, renderer, dom, heightAt, onExit } ) {

	const H = ( x, z ) => heightAt( x, z );
	const loader = new GLTFLoader();
	const keys = {};
	const mouse = new THREE.Vector2(), aimPoint = new THREE.Vector3();
	const ray = new THREE.Raycaster(), plane = new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), 0 );
	let mouseDown = false;
	const gltfCache = {};
	const audio = createAudio();
	let camMode = 1; const CAM_NAMES = [ '俯视', '斜视', '平视' ];
	let hitstop = 0;
	let camYaw = 0;
	const ui = buildUI();
	function cycleCam() { camMode = ( camMode + 1 ) % 3; toast( '视角：' + CAM_NAMES[ camMode ] ); ui.camBtn.textContent = '视角：' + CAM_NAMES[ camMode ] + ' (V)'; }
	ui.camBtn.onclick = ( e ) => { e.currentTarget.blur(); cycleCam(); };
	let S = null; // 一局的全部状态

	// ---------- 输入 ----------
	addEventListener( 'keydown', ( e ) => {

		keys[ e.code ] = true;
		if ( ! S || S.paused ) return;
		if ( e.code === 'Space' ) dash();
		if ( e.code === 'KeyQ' ) ult();
		if ( e.code === 'Escape' ) togglePause();
		if ( e.code === 'KeyV' ) cycleCam();

	} );
	addEventListener( 'keyup', ( e ) => { keys[ e.code ] = false; } );
	addEventListener( 'blur', () => { for ( const k in keys ) keys[ k ] = false; mouseDown = false; } );
	dom.addEventListener( 'pointermove', ( e ) => { if ( mouseDown && camMode === 2 ) camYaw -= e.movementX * 0.006; } );
	dom.addEventListener( 'pointermove', ( e ) => { mouse.set( e.clientX / innerWidth * 2 - 1, - e.clientY / innerHeight * 2 + 1 ); } );
	dom.addEventListener( 'pointerdown', ( e ) => { mouseDown = true; mouse.set( e.clientX / innerWidth * 2 - 1, - e.clientY / innerHeight * 2 + 1 ); } );
	addEventListener( 'pointerup', () => { mouseDown = false; } );

	// ---------- 公共几何和材质 ----------
	const shadowTex = radialTex( 'rgba(0,0,0,0.55)', 'rgba(0,0,0,0)' );
	const blobMat = new THREE.MeshBasicMaterial( { map: shadowTex, transparent: true, depthWrite: false } );
	const blobGeo = new THREE.PlaneGeometry( 1, 1 ).rotateX( - Math.PI / 2 );

	// 敌人：白骨小妖（象牙白骨架身 + 骷髅头），妖雾鬼火（紫色飘忽），尸魔（大只）
	const ENEMY_TYPES = {
		imp: { hp: 48, speed: 3.6, r: 0.55, dmg: 9, xp: 1, color: 0xe9e2cf, scale: 1, cost: 1 },
		wisp: { hp: 30, speed: 4.4, r: 0.45, dmg: 7, xp: 2, color: 0x9a7cff, scale: 0.9, cost: 1, emissive: 0x4b2a9a, shoot: 3.2 },
		brute: { hp: 320, speed: 2.6, r: 1.1, dmg: 20, xp: 6, color: 0xd8c9a8, scale: 2.0, cost: 6, charge: 5 },
		elite: { hp: 1800, speed: 3.0, r: 1.3, dmg: 28, xp: 30, color: 0xf2c14e, scale: 2.6, cost: 30, emissive: 0x5a3a00, slam: 4, charge: 6 },
		boss: { hp: 22000, speed: 2.8, r: 2.6, dmg: 35, xp: 200, color: 0xf5f0e6, scale: 5.5, cost: 0, emissive: 0x330000 }
	};
	const MAXE = 420;
	const enemyGeo = ( () => {

		const body = new THREE.CapsuleGeometry( 0.32, 0.6, 3, 8 ).translate( 0, 0.65, 0 );
		const head = new THREE.SphereGeometry( 0.34, 10, 8 ).scale( 1, 0.9, 1.1 ).translate( 0, 1.45, 0.02 );
		const eyeL = new THREE.SphereGeometry( 0.08, 6, 4 ).translate( - 0.12, 1.48, 0.3 );
		const eyeR = eyeL.clone().translate( 0.24, 0, 0 );
		return mergeGeos( [ body, head, eyeL, eyeR ] );

	} )();
	const enemyMesh = {};
	for ( const [ k, t ] of Object.entries( ENEMY_TYPES ) ) {

		const m = new THREE.InstancedMesh( enemyGeo, new THREE.MeshLambertMaterial( { color: t.color, emissive: t.emissive || 0x000000 } ), k === 'boss' ? 2 : MAXE );
		m.count = 0; m.frustumCulled = false; m.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
		m.instanceColor = new THREE.InstancedBufferAttribute( new Float32Array( m.instanceMatrix.count * 3 ).fill( 1 ), 3 );
		enemyMesh[ k ] = m;

	}
	const enemyShadow = new THREE.InstancedMesh( blobGeo, blobMat, MAXE + 2 );
	enemyShadow.frustumCulled = false; enemyShadow.count = 0;

	// 经验：笑点结晶
	const MAXG = 600;
	const gemMesh = new THREE.InstancedMesh( new THREE.OctahedronGeometry( 0.22 ), new THREE.MeshBasicMaterial( { color: 0xffe066 } ), MAXG );
	gemMesh.frustumCulled = false; gemMesh.count = 0;

	// 子弹：梗字（canvas 文字贴图的 Sprite，按文字缓存材质）
	const textMats = {};
	function textMat( s, color = '#ffd54a' ) {

		const key = s + color;
		if ( textMats[ key ] ) return textMats[ key ];
		const c = document.createElement( 'canvas' ); c.width = Math.max( 256, s.length * 70 + 40 ); c.height = 96;
		const g = c.getContext( '2d' );
		g.font = 'bold 64px "PingFang SC","Microsoft YaHei",sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
		g.lineWidth = 10; g.strokeStyle = '#3a1d00'; g.strokeText( s, c.width / 2, 50 );
		g.fillStyle = color; g.fillText( s, c.width / 2, 50 );
		textMats.aspect = c.width / 96;
		const t = new THREE.CanvasTexture( c ); t.colorSpace = THREE.SRGBColorSpace;
		return ( textMats[ key ] = new THREE.SpriteMaterial( { map: t, depthWrite: false, fog: false } ) );

	}

	const fxGroup = new THREE.Group(); fxGroup.name = 'game';
	fxGroup.add( enemyShadow, gemMesh, ...Object.values( enemyMesh ) );

	const ringGeo = new THREE.RingGeometry( 0.9, 1, 48 ).rotateX( - Math.PI / 2 );
	const discGeo = new THREE.CircleGeometry( 1, 40 ).rotateX( - Math.PI / 2 );
	const boltGeo = new THREE.CylinderGeometry( 0.12, 0.25, 30, 6 ).translate( 0, 15, 0 );
	const logGeo = new THREE.CylinderGeometry( 0.9, 0.9, 7, 10 ).rotateZ( Math.PI / 2 );
	const logMat = new THREE.MeshLambertMaterial( { color: 0x7a4f2a } );
	const orbMat = new THREE.MeshBasicMaterial( { color: 0xb18cff } );
	const orbGeo = new THREE.SphereGeometry( 0.28, 10, 8 );
	const staffGeo = new THREE.TorusGeometry( 1, 0.08, 4, 24, Math.PI * 0.9 ).rotateX( Math.PI / 2 );

	function addFx( mesh, life, update ) { fxGroup.add( mesh ); S.fx.push( { mesh, life, t: 0, update } ); }

	// 粒子池：一次绘制，火花/碎骨/金光全走这里
	const PN = 2500;
	const pPos = new Float32Array( PN * 3 ), pCol = new Float32Array( PN * 3 ), pVel = new Float32Array( PN * 3 ), pLife = new Float32Array( PN ), pMax = new Float32Array( PN ).fill( 1 ), pBase = new Float32Array( PN * 3 );
	let pHead = 0;
	const pGeo = new THREE.BufferGeometry();
	pGeo.setAttribute( 'position', new THREE.BufferAttribute( pPos, 3 ).setUsage( THREE.DynamicDrawUsage ) );
	pGeo.setAttribute( 'color', new THREE.BufferAttribute( pCol, 3 ).setUsage( THREE.DynamicDrawUsage ) );
	const sparkTex = radialTex( 'rgba(255,255,255,1)', 'rgba(255,255,255,0)' );
	const particles = new THREE.Points( pGeo, new THREE.PointsMaterial( { size: 0.7, map: sparkTex, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false } ) );
	particles.frustumCulled = false;
	const _pc = new THREE.Color();
	function burst( x, y, z, n, color, speed = 8, up = 4, life = 0.6 ) {

		_pc.set( color );
		for ( let k = 0; k < n; k ++ ) {

			const i = pHead; pHead = ( pHead + 1 ) % PN;
			const a = Math.random() * 6.283, sp = speed * ( 0.3 + Math.random() );
			pPos[ i * 3 ] = x; pPos[ i * 3 + 1 ] = y; pPos[ i * 3 + 2 ] = z;
			pVel[ i * 3 ] = Math.cos( a ) * sp; pVel[ i * 3 + 1 ] = up * ( 0.4 + Math.random() ); pVel[ i * 3 + 2 ] = Math.sin( a ) * sp;
			const v = 0.7 + Math.random() * 0.6;
			pBase[ i * 3 ] = _pc.r * v; pBase[ i * 3 + 1 ] = _pc.g * v; pBase[ i * 3 + 2 ] = _pc.b * v;
			pLife[ i ] = pMax[ i ] = life * ( 0.6 + Math.random() * 0.8 );

		}

	}
	function stepParticles( dt ) {

		for ( let i = 0; i < PN; i ++ ) {

			if ( pLife[ i ] <= 0 ) { if ( pCol[ i * 3 ] ) { pCol[ i * 3 ] = pCol[ i * 3 + 1 ] = pCol[ i * 3 + 2 ] = 0; pPos[ i * 3 + 1 ] = - 999; } continue; }
			pLife[ i ] -= dt;
			const k = Math.max( 0, pLife[ i ] / pMax[ i ] );
			pVel[ i * 3 + 1 ] -= 14 * dt;
			pVel[ i * 3 ] *= 0.97; pVel[ i * 3 + 2 ] *= 0.97;
			pPos[ i * 3 ] += pVel[ i * 3 ] * dt; pPos[ i * 3 + 1 ] += pVel[ i * 3 + 1 ] * dt; pPos[ i * 3 + 2 ] += pVel[ i * 3 + 2 ] * dt;
			pCol[ i * 3 ] = pBase[ i * 3 ] * k; pCol[ i * 3 + 1 ] = pBase[ i * 3 + 1 ] * k; pCol[ i * 3 + 2 ] = pBase[ i * 3 + 2 ] * k;

		}
		pGeo.attributes.position.needsUpdate = true; pGeo.attributes.color.needsUpdate = true;

	}

	// 预警圈：红色填充慢慢涨满，满了才结算
	function telegraph( x, z, R, time, onDone, color = 0xff2a2a ) {

		const g = new THREE.Group();
		const edge = new THREE.Mesh( ringGeo, new THREE.MeshBasicMaterial( { color, transparent: true, depthWrite: false, opacity: 0.9, fog: false } ) );
		const fill = new THREE.Mesh( discGeo, new THREE.MeshBasicMaterial( { color, transparent: true, depthWrite: false, opacity: 0.35, fog: false } ) );
		edge.scale.setScalar( R ); g.add( edge, fill );
		g.position.set( x, H( x, z ) + 0.2, z );
		addFx( g, time, ( f, k ) => {

			fill.scale.setScalar( Math.max( 0.01, R * k ) );
			edge.material.opacity = 0.5 + 0.5 * Math.sin( k * 30 );
			if ( k >= 1 && ! f.done ) { f.done = true; onDone(); }

		} );

	}
	function telegraphLine( x, z, a, len, w, time, onDone ) {

		const m = new THREE.Mesh( new THREE.PlaneGeometry( w, len ).rotateX( - Math.PI / 2 ).translate( 0, 0, len / 2 ), new THREE.MeshBasicMaterial( { color: 0xff3030, transparent: true, depthWrite: false, opacity: 0.3, fog: false } ) );
		m.position.set( x, H( x, z ) + 0.25, z ); m.rotation.y = a;
		addFx( m, time, ( f, k ) => { m.material.opacity = 0.2 + 0.4 * ( ( k * 8 ) % 1 ); if ( k >= 1 && ! f.done ) { f.done = true; m.geometry.dispose(); onDone(); } } );

	}
	function hurtPlayer( dmg, msg ) {

		if ( S.iframe > 0 || S.over ) return;
		S.hp -= dmg * ( 1 - S.stats.armor );
		S.iframe = 0.5; shake( 0.5 ); flash( '#ff2020' );
		audio.play( 'hurt' );
		burst( S.pos.x, S.pos.y + 1.2, S.pos.z, 20, 0xff3030, 6, 5 );
		floatText( msg || [ '破防了', '急了', '阿一古~', '我真服了' ][ ( Math.random() * 4 ) | 0 ], S.pos.x, S.pos.z, '#ff6b6b' );
		if ( S.hp <= 0 ) gameOver();

	}
	function flash( c ) { ui.flash.style.background = c; ui.flash.style.opacity = 0.35; setTimeout( () => ( ui.flash.style.opacity = 0 ), 60 ); }
	const eBulletGeo = new THREE.SphereGeometry( 0.35, 8, 6 );
	const eBulletMat = new THREE.MeshBasicMaterial( { color: 0xc77dff, fog: false } );
	const boneMat = new THREE.MeshBasicMaterial( { color: 0xfff4d6, fog: false } );
	function enemyShot( x, z, a, sp, dmg, mat = eBulletMat, scale = 1 ) {

		const m = new THREE.Mesh( eBulletGeo, mat ); m.scale.setScalar( scale ); fxGroup.add( m );
		S.ebullets.push( { mesh: m, x, z, vx: Math.sin( a ) * sp, vz: Math.cos( a ) * sp, life: 4, dmg, r: 0.4 * scale } );

	}

	// ---------- 角色 ----------
	async function loadHero( id ) {

		if ( ! gltfCache[ id ] ) gltfCache[ id ] = await loader.loadAsync( asset( 'chars/' + HEROES[ id ].file ) );
		const g = gltfCache[ id ];
		const root = skClone( g.scene );
		root.traverse( ( o ) => { if ( o.isMesh ) { o.castShadow = false; o.frustumCulled = false; } } );
		const holder = new THREE.Group();
		holder.add( root );
		holder.scale.setScalar( 2.6 );
		const box = new THREE.Box3().setFromObject( holder );
		root.position.y -= box.min.y / 2.6;
		const mixer = new THREE.AnimationMixer( root );
		const act = {};
		for ( const c of g.animations ) act[ c.name ] = mixer.clipAction( c );
		act.attack && ( act.attack.setLoop( THREE.LoopOnce ), act.attack.clampWhenFinished = false );
		return { holder, mixer, act, cur: null };

	}

	function play( h, name, fade = 0.15 ) {

		if ( h.cur === name || ! h.act[ name ] ) return;
		const a = h.act[ name ];
		a.reset().fadeIn( fade ).play();
		if ( h.cur && h.act[ h.cur ] ) h.act[ h.cur ].fadeOut( fade );
		h.cur = name;

	}

	// ---------- 开局 ----------
	async function start( heroId ) {

		ui.select.classList.add( 'hidden' );
		ui.loading.classList.remove( 'hidden' );
		const hero = HEROES[ heroId ];
		const h = await loadHero( heroId );
		ui.loading.classList.add( 'hidden' );
		if ( S ) teardown();
		scene.add( fxGroup );
		const p = new THREE.Vector3( ARENA.x, 0, ARENA.z + 40 );
		p.y = H( p.x, p.z );
		h.holder.position.copy( p );
		scene.add( h.holder );
		const shadow = new THREE.Mesh( blobGeo, blobMat ); shadow.scale.setScalar( 1.6 ); scene.add( shadow );
		S = {
			heroId, hero, h, shadow, pos: p, vel: new THREE.Vector3(), face: 0,
			hp: hero.hp, maxHp: hero.hp, lv: 1, xp: 0, xpNext: 4, kills: 0, time: 0, laugh: 0, laughMax: 50,
			paused: false, over: false, iframe: 0, dashCd: 0, dashT: 0, attackT: 0, ultT: 0,
			stats: { dmg: 1, rate: 1, multi: 0, pierce: 0, area: 1, speed: 1, cd: 1, back: false, sides: false, armor: 0, magnet: 3 },
			skills: {}, form: null, enemies: [], bullets: [], gems: [], fx: [], clones: [], spawnAcc: 0, nextElite: 45, nextBoss: 150, bossAlive: false,
			hash: new Map()
		};
		S.ebullets = []; S.boss = null;
		fxGroup.add( particles );
		S.skills.ring = { lv: 1, t: 0 };
		audio.startBgm(); audio.setIntense( false );
		play( h, 'idle' );
		ui.hud.classList.remove( 'hidden' );
		ui.heroName.textContent = hero.name;
		ui.heroIcon.src = asset( 'chars/' + hero.icon );
		toast( '奶娃出击！自动开打，你只管走位' ); toast( 'V 切换视角 · 空格冲刺 · Q 大招' );
		loadBossModel();
		S.events = EARLY.slice();
		setTimeout( () => S && ! S.over && levelUp( true ), 400 );
		updateHud();

	}

	function teardown() {

		scene.remove( S.h.holder, S.shadow, fxGroup );
		for ( const f of S.fx ) fxGroup.remove( f.mesh );
		for ( const b of S.bullets ) b.mesh && fxGroup.remove( b.mesh );
		for ( const c of S.clones ) scene.remove( c.h.holder );
		for ( const b of S.ebullets ) fxGroup.remove( b.mesh );
		if ( S.boss ) scene.remove( S.boss.h.holder );
		S = null;

	}

	let bossTpl = null;
	function loadBossModel() { if ( ! bossTpl ) bossTpl = loadHero( 'boss' ).catch( () => null ); }
	HEROES.boss = { file: 'sorceress.glb' };

	// ---------- 刷怪（DESIGN §8.1：预算随时间上涨，同屏有上限） ----------
	function spawn( type, at ) {

		if ( S.enemies.length >= MAXE ) return null;
		const t = ENEMY_TYPES[ type ];
		const m = S.time / 60;
		const hpMul = 1 + 0.15 * m + 0.004 * m * m;
		let x, z;
		if ( at ) { x = at.x; z = at.z; } else {

			const a = Math.random() * Math.PI * 2, d = 26 + Math.random() * 8;
			x = S.pos.x + Math.cos( a ) * d; z = S.pos.z + Math.sin( a ) * d;
			const dx = x - ARENA.x, dz = z - ARENA.z, dd = Math.hypot( dx, dz );
			if ( dd > ARENA.r ) { x = ARENA.x + dx / dd * ARENA.r; z = ARENA.z + dz / dd * ARENA.r; }

		}
		const e = { type, t, x, z, vx: 0, vz: 0, hp: t.hp * hpMul, maxHp: t.hp * hpMul, hit: 0, slow: 0, burn: 0, phase: Math.random() * 6 };
		e.cd = 1 + Math.random() * 2; e.state = 'chase';
		S.enemies.push( e );
		if ( type === 'boss' ) attachBoss( e );
		return e;

	}

	async function attachBoss( e ) {

		const tpl = await loadHero( 'boss' );
		if ( ! S || e.hp <= 0 ) return;
		tpl.holder.scale.setScalar( 7 );
		scene.add( tpl.holder ); play( tpl, 'walk' );
		S.boss = { e, h: tpl };
		e.model = true;
		ui.bossBar.classList.remove( 'hidden' );

	}

	function spawner( dt ) {

		const m = S.time / 60;
		const cap = Math.min( MAXE, 40 + 12 * m * 3 );
		S.spawnAcc += dt * ( 2 + 1.5 * m );
		while ( S.spawnAcc > 1 ) {

			S.spawnAcc -= 1;
			if ( S.enemies.length >= cap ) break;
			const r = Math.random();
			spawn( m > 2 && r < 0.12 ? 'brute' : m > 0.7 && r < 0.4 ? 'wisp' : 'imp' );

		}
		if ( S.time > S.nextElite ) { S.nextElite += 50; spawn( 'elite' ); toast( '精英尸魔出现！它会冲锋、砸地' ); audio.play( 'elite' ); }
		if ( S.time > S.nextBoss && ! S.bossAlive ) {

			S.nextBoss += 200; S.bossAlive = true;
			spawn( 'boss' ); toast( '前方高能！白骨精现出原形' ); shake( 1 ); audio.play( 'boss' ); audio.setIntense( true ); bossIntro();

		}

	}

	// ---------- 攻击 ----------
	function aimDir() {

		ray.setFromCamera( mouse, camera );
		plane.constant = - S.pos.y;
		if ( ray.ray.intersectPlane( plane, aimPoint ) ) {

			const d = new THREE.Vector2( aimPoint.x - S.pos.x, aimPoint.z - S.pos.z );
			if ( d.lengthSq() > 0.01 ) return Math.atan2( d.x, d.y );

		}
		return S.face;

	}

	const RATE = { staff: 0.42, orb: 0.32, rake: 0.8, dian: 1.1 };
	function fire( dt ) {

		S.attackT -= dt;
		if ( S.form === 'auto' ) return;
		if ( S.attackT > 0 || ! S.enemies.length ) return;
		const st = S.stats;
		let rate = RATE[ S.hero.weapon ] / st.rate;
		if ( S.form === 'gun' ) rate /= 3;
		S.attackT = rate;
		const a = nearestAngle();
		S.face = a;
		play( S.h, 'attack', 0.05 ); S.h.attackHold = 0.35;
		const dirs = [];
		const n = 1 + st.multi;
		for ( let i = 0; i < n; i ++ ) dirs.push( a + ( i - ( n - 1 ) / 2 ) * 0.16 );
		if ( st.back ) dirs.push( a + Math.PI );
		if ( st.sides ) dirs.push( a + Math.PI / 2, a - Math.PI / 2 );
		const w = S.hero.weapon;
		for ( const d of dirs ) {

			if ( w === 'staff' ) throwStaff( d );
			else { if ( w === 'rake' ) melee( d, true ); shoot( d, w ); }

		}

	}

	const staffMeshGeo = new THREE.CylinderGeometry( 0.16, 0.16, 4.2, 8 ).rotateZ( Math.PI / 2 );
	const staffCapGeo = new THREE.CylinderGeometry( 0.24, 0.24, 0.5, 8 ).rotateZ( Math.PI / 2 );
	const staffMat = new THREE.MeshBasicMaterial( { color: 0xd9201c, fog: false } );
	const goldMat = new THREE.MeshBasicMaterial( { color: 0xffc83a, fog: false } );
	const trailMat = new THREE.MeshBasicMaterial( { color: 0xffb02e, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false } );
	function throwStaff( a ) {

		const st = S.stats, sc = st.area * ( S.ultT > 0 ? 2.2 : 1 );
		const g = new THREE.Group();
		g.add( new THREE.Mesh( staffMeshGeo, staffMat ) );
		for ( const x of [ - 2.1, 2.1 ] ) { const c = new THREE.Mesh( staffCapGeo, goldMat ); c.position.x = x; g.add( c ); }
		g.scale.setScalar( sc );
		fxGroup.add( g );
		const sp = 26, range = 20 + st.pierce * 3;
		S.bullets.push( {
			mesh: g, staff: true, x: S.pos.x, z: S.pos.z, vx: Math.sin( a ) * sp, vz: Math.cos( a ) * sp, life: range / sp * 2 + 0.6, out: range / sp,
			r: 2.2 * sc, dmg: 20 * st.dmg, pierce: 999, boom: 0, boomer: true, back: false, hitSet: new Set(), tick: 0
		} );
		audio.play( 'hit', { gain: 0.3, rate: 1.6 } );
		if ( Math.random() < 0.25 ) floatText( [ '金箍棒飞出去了！', '接棒！', '回旋棒·奶龙版', '棒棒哒' ][ ( Math.random() * 4 ) | 0 ], S.pos.x, S.pos.z, '#ffc83a' );

	}

	function nearestAngle() {

		let best = null, bd = 1e9;
		for ( const e of S.enemies ) { const d = ( e.x - S.pos.x ) ** 2 + ( e.z - S.pos.z ) ** 2; if ( d < bd ) { bd = d; best = e; } }
		return best ? Math.atan2( best.x - S.pos.x, best.z - S.pos.z ) : S.face;

	}

	function melee( a, heavy ) {

		const st = S.stats;
		const R = ( heavy ? 4.2 : 4.4 ) * st.area, dmg = ( heavy ? 26 : 22 ) * st.dmg;
		for ( const e of S.enemies ) {

			const dx = e.x - S.pos.x, dz = e.z - S.pos.z, d = Math.hypot( dx, dz );
			if ( d > R + e.t.r ) continue;
			let da = Math.atan2( dx, dz ) - a; da = Math.atan2( Math.sin( da ), Math.cos( da ) );
			if ( Math.abs( da ) < 1.1 ) hurt( e, dmg, heavy ? 7 : 3, dx / d, dz / d );

		}
		const m = new THREE.Mesh( staffGeo, new THREE.MeshBasicMaterial( { color: heavy ? 0xff9a3c : 0xffd54a, transparent: true } ) );
		m.position.set( S.pos.x, S.pos.y + 1.1, S.pos.z ); m.rotation.y = a - Math.PI * 0.45 + Math.PI / 2; m.scale.setScalar( R );
		m.material.blending = THREE.AdditiveBlending; m.material.depthWrite = false;
		addFx( m, 0.25, ( f, k ) => { f.mesh.material.opacity = 1 - k; f.mesh.rotation.y += 0.18; f.mesh.scale.setScalar( R * ( 0.7 + 0.5 * k ) ); } );
		burst( S.pos.x + Math.sin( a ) * 2, S.pos.y + 1.2, S.pos.z + Math.cos( a ) * 2, 10, 0xffd54a, 10, 3, 0.35 );

	}

	function shoot( a, w ) {

		const st = S.stats;
		const meme = w === 'dian' ? '典' : S.form === 'gun' ? '哈' : MEMES[ ( Math.random() * MEMES.length ) | 0 ];
		let mesh;
		if ( w === 'orb' && ! S.form ) { mesh = new THREE.Mesh( orbGeo, orbMat ); } else {

			mesh = new THREE.Sprite( textMat( meme, w === 'dian' ? '#ff8a3c' : '#ffd54a' ) );
			const s = ( w === 'dian' ? 2.2 : 1.1 ) * st.area; mesh.scale.set( s * 2.6, s, 1 );

		}
		mesh.position.set( S.pos.x, S.pos.y + 1.2, S.pos.z );
		fxGroup.add( mesh );
		const sp = w === 'dian' ? 13 : 22;
		const base = w === 'dian' ? 34 : w === 'orb' ? 11 : 12;
		S.bullets.push( {
			mesh, x: S.pos.x, z: S.pos.z, vx: Math.sin( a ) * sp, vz: Math.cos( a ) * sp, life: 1.4, r: ( w === 'dian' ? 1.1 : 0.6 ) * st.area,
			dmg: base * st.dmg * ( S.form === 'gun' ? 0.45 : 1 ), pierce: st.pierce + ( w === 'dian' ? 0 : 0 ), boom: w === 'dian' ? 3.2 * st.area : 0,
			boomer: S.form === 'boomer', back: false, hitSet: new Set()
		} );

	}

	function bullets( dt ) {

		for ( let i = S.bullets.length - 1; i >= 0; i -- ) {

			const b = S.bullets[ i ];
			b.life -= dt;
			if ( b.staff ) {

				b.out -= dt; b.mesh.rotation.y += dt * 22;
				if ( ! b.back && b.out <= 0 ) { b.back = true; b.hitSet.clear(); }
				b.tick -= dt; if ( b.tick <= 0 ) { b.tick = 0.04; burst( b.x, H( b.x, b.z ) + 1.2, b.z, 6, 0xffb02e, 3, 1.5, 0.4 ); }

			} else if ( b.boomer && ! b.back && b.life < 0.7 ) { b.back = true; b.hitSet.clear(); }
			if ( b.back ) { const dx = S.pos.x - b.x, dz = S.pos.z - b.z, d = Math.hypot( dx, dz ) + 1e-3; b.vx = dx / d * 24; b.vz = dz / d * 24; if ( d < 1.2 ) b.life = 0; }
			b.x += b.vx * dt; b.z += b.vz * dt;
			b.mesh.position.set( b.x, H( b.x, b.z ) + 1.2, b.z );
			let dead = b.life <= 0;
			if ( ! dead ) for ( const e of near( b.x, b.z, b.r + 3 ) ) {

				if ( b.hitSet.has( e ) || e.hp <= 0 ) continue;
				if ( ( e.x - b.x ) ** 2 + ( e.z - b.z ) ** 2 > ( b.r + e.t.r ) ** 2 ) continue;
				b.hitSet.add( e );
				const sp = Math.hypot( b.vx, b.vz );
				hurt( e, b.dmg, 2, b.vx / sp, b.vz / sp );
				if ( b.boom ) { explode( b.x, b.z, b.boom, b.dmg * 0.6, 0xff8a3c ); dead = true; break; }
				if ( b.boomer ) continue;
				if ( b.pierce -- <= 0 ) { dead = true; break; }

			}
			if ( dead ) {

				if ( b.boom && b.life <= 0 ) explode( b.x, b.z, b.boom, b.dmg * 0.6, 0xff8a3c );
				fxGroup.remove( b.mesh ); S.bullets.splice( i, 1 );

			}

		}

	}

	function explode( x, z, R, dmg, color, knock = 4 ) {

		for ( const e of near( x, z, R + 2 ) ) {

			const dx = e.x - x, dz = e.z - z, d = Math.hypot( dx, dz ) + 1e-3;
			if ( d < R + e.t.r ) hurt( e, dmg, knock, dx / d, dz / d );

		}
		const m = new THREE.Mesh( discGeo, new THREE.MeshBasicMaterial( { color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending } ) );
		m.position.set( x, H( x, z ) + 0.15, z );
		addFx( m, 0.35, ( f, k ) => { f.mesh.scale.setScalar( R * ( 0.4 + 0.6 * k ) ); f.mesh.material.opacity = 0.8 * ( 1 - k ); } );
		burst( x, H( x, z ) + 0.6, z, Math.min( 40, 8 + R * 5 ), color, 4 + R * 2, 6, 0.6 );
		if ( R > 2.5 ) { audio.boom( Math.min( 1.5, R / 5 ) ); shake( Math.min( 0.6, R * 0.06 ) ); }

	}

	function hurt( e, dmg, knock, nx, nz ) {

		if ( e.hp <= 0 ) return;
		const crit = Math.random() < 0.08;
		if ( crit ) dmg *= 2;
		e.hp -= dmg; e.hit = 0.12;
		const kb = e.type === 'boss' ? 0.05 : e.type === 'elite' ? 0.3 : e.type === 'brute' ? 0.6 : 1.4;
		e.vx += nx * knock * kb; e.vz += nz * knock * kb;
		const y = H( e.x, e.z ) + 1.2 * e.t.scale;
		burst( e.x, y, e.z, crit ? 14 : 5, crit ? 0xff5a3c : 0xfff1b0, crit ? 10 : 6, 4, 0.4 );
		S.dmgBudget = ( S.dmgBudget || 0 );
		if ( crit || S.dmgBudget < 6 || e.type === 'boss' || e.type === 'elite' ) { S.dmgBudget ++; dmgText( Math.round( dmg ), e.x, e.z, crit ); }
		audio.play( crit ? 'crit' : 'hit', { gain: crit ? 1 : 0.55 } );
		if ( crit ) { floatText( [ '暴击！绷不住了', '芭比Q了', '遥遥领先' ][ ( Math.random() * 3 ) | 0 ], e.x, e.z, '#ff5252' ); hitstop = Math.max( hitstop, 0.05 ); shake( 0.2 ); }
		if ( e.hp <= 0 ) kill( e );

	}

	function kill( e ) {

		S.kills ++;
		const big = e.type !== 'imp' && e.type !== 'wisp';
		burst( e.x, H( e.x, e.z ) + 1, e.z, big ? 60 : 16, e.type === 'wisp' ? 0xb18cff : 0xfff4d6, big ? 14 : 8, 8, big ? 1 : 0.6 );
		audio.play( 'kill', { gain: 0.6 } );
		if ( big ) { hitstop = Math.max( hitstop, e.type === 'boss' ? 0.4 : 0.08 ); shake( e.type === 'boss' ? 1.5 : 0.4 ); audio.boom( 1.2 ); }
		if ( Math.random() < 0.15 || big ) floatText( ENEMY_TAUNT[ ( Math.random() * ENEMY_TAUNT.length ) | 0 ], e.x, e.z, '#ffffff' );
		S.laugh = Math.min( S.laughMax, S.laugh + ( e.type === 'boss' ? 40 : e.type === 'elite' ? 10 : 1 ) );
		const n = Math.max( 1, Math.round( e.t.xp / 5 ) );
		for ( let i = 0; i < n; i ++ ) if ( S.gems.length < MAXG ) S.gems.push( { x: e.x + ( Math.random() - 0.5 ) * n * 0.4, z: e.z + ( Math.random() - 0.5 ) * n * 0.4, v: e.t.xp / n } );
		if ( S.skills.bbq ) explode( e.x, e.z, 2.2 + S.skills.bbq.lv * 0.4, 8 * S.skills.bbq.lv * S.stats.dmg, 0xff5a1f, 2 );
		if ( e.type === 'elite' || e.type === 'boss' ) { chest(); }
		if ( e.type === 'boss' ) { S.bossAlive = false; toast( '白骨精又被打死了一次！（名场面）' ); audio.play( 'ult' ); audio.setIntense( false ); if ( S.boss ) { scene.remove( S.boss.h.holder ); S.boss = null; } ui.bossBar.classList.add( 'hidden' ); }

	}

	// ---------- 技能（自动释放，DESIGN §5.4） ----------
	function skills( dt ) {

		const st = S.stats;
		for ( const [ id, sk ] of Object.entries( S.skills ) ) {

			sk.t -= dt;
			const L = sk.lv;
			switch ( id ) {

				case 'thunder':
					if ( sk.t <= 0 ) {

						sk.t = 3 * st.cd; floatText( '小发雷霆！', S.pos.x, S.pos.z, '#9fd4ff' );
						const pool = S.enemies.filter( ( e ) => ( e.x - S.pos.x ) ** 2 + ( e.z - S.pos.z ) ** 2 < 400 );
						for ( let i = 0; i < 2 + L + st.multi && pool.length; i ++ ) {

							const e = pool[ ( Math.random() * pool.length ) | 0 ];
							bolt( e.x, e.z, 1.8 * st.area, ( 18 + 8 * L ) * st.dmg );

						}

					}
					break;
				case 'push':
					if ( sk.t <= 0 ) {

						sk.t = Math.max( 1.2, 4 - L * 0.4 ) * st.cd;
						shockRing( 6 + L * 1.2, 10 * L * st.dmg, 10, 0x9fe7ff );
						floatText( '退！退！退！', S.pos.x, S.pos.z, '#9fe7ff' );

					}
					break;
				case 'aura': {

					if ( ! sk.mesh ) { sk.mesh = new THREE.Mesh( discGeo, new THREE.MeshBasicMaterial( { color: 0xff7ad9, transparent: true, opacity: 0.18, depthWrite: false } ) ); fxGroup.add( sk.mesh ); }
					const R = ( 2.6 + L * 0.5 ) * st.area;
					sk.mesh.scale.setScalar( R ); sk.mesh.position.set( S.pos.x, S.pos.y + 0.12, S.pos.z );
					if ( sk.t <= 0 ) { sk.t = 0.4; for ( const e of near( S.pos.x, S.pos.z, R + 2 ) ) if ( ( e.x - S.pos.x ) ** 2 + ( e.z - S.pos.z ) ** 2 < ( R + e.t.r ) ** 2 ) hurt( e, ( 3 + 2 * L ) * st.dmg, 0.5, 0, 0 ); }
					break;

				}
				case 'ring': {

					if ( sk.t <= 0 ) {

						sk.t = 6 * st.cd; audio.play( 'skill', { gain: 0.6 } ); floatText( '画地为牢！', S.pos.x, S.pos.z, '#ffc23a' );
						const R = ( 4 + L ) * st.area, x = S.pos.x, z = S.pos.z;
						const m = new THREE.Mesh( ringGeo, new THREE.MeshBasicMaterial( { color: 0xffc23a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending } ) );
						m.position.set( x, H( x, z ) + 0.15, z ); m.scale.setScalar( R );
						let tick = 0;
						addFx( m, 4, ( f, k, dt ) => {

							f.mesh.material.opacity = 1 - k * 0.6; tick -= dt;
							if ( tick <= 0 ) { tick = 0.3; for ( const e of near( x, z, R + 2 ) ) if ( ( e.x - x ) ** 2 + ( e.z - z ) ** 2 < R * R ) { hurt( e, ( 4 + 3 * L ) * st.dmg, 0, 0, 0 ); e.slow = 0.4; } }

						} );

					}
					break;

				}
				case 'shield': {

					const n = 2 + L + Math.min( 2, st.multi );
					if ( ! sk.items ) sk.items = [];
					while ( sk.items.length < n ) { const s = new THREE.Sprite( textMat( '哈', '#ffe066' ) ); s.scale.set( 2.2, 0.85, 1 ); fxGroup.add( s ); sk.items.push( s ); }
					const R = 3 * st.area;
					sk.ang = ( sk.ang || 0 ) + dt * ( 2.4 + L * 0.3 );
					sk.items.forEach( ( s, i ) => {

						const a = sk.ang + i / sk.items.length * Math.PI * 2, x = S.pos.x + Math.sin( a ) * R, z = S.pos.z + Math.cos( a ) * R;
						s.position.set( x, S.pos.y + 1, z );
						for ( const e of near( x, z, 2 ) ) if ( ( e.x - x ) ** 2 + ( e.z - z ) ** 2 < ( 0.8 + e.t.r ) ** 2 && ( e.shT || 0 ) < S.time ) { e.shT = S.time + 0.35; hurt( e, ( 6 + 4 * L ) * st.dmg, 4, Math.sin( a + 1.57 ), Math.cos( a + 1.57 ) ); }

					} );
					break;

				}
				case 'log':
					if ( sk.t <= 0 ) {

						sk.t = Math.max( 3, 8 - L ) * st.cd;
						for ( let i = 0; i < Math.ceil( L / 2 ); i ++ ) rollLog( ( 8 + 6 * L ) * st.dmg );

					}
					break;
				case 'clone':
					if ( S.clones.length < Math.min( 3, L ) && ! sk.loading ) {

						sk.loading = true;
						loadHero( S.heroId ).then( ( h ) => {

							sk.loading = false; if ( ! S ) return;
							h.holder.scale.setScalar( 1.4 );
							h.holder.traverse( ( o ) => { if ( o.isMesh ) { o.material = o.material.clone(); o.material.transparent = true; o.material.opacity = 0.75; o.material.color?.multiplyScalar( 1.3 ); } } );
							scene.add( h.holder ); play( h, 'walk' );
							S.clones.push( { h, a: Math.random() * 6, t: 0 } );
							floatText( '吹一口毫毛！', S.pos.x, S.pos.z, '#ffd54a' );

						} );

					}
					break;

			}

		}

		// 分身：绕着本体转，自动敲最近的怪
		S.clones.forEach( ( c, i ) => {

			c.a += dt * 1.3; c.t -= dt;
			const x = S.pos.x + Math.sin( c.a + i * 2.1 ) * 3.5, z = S.pos.z + Math.cos( c.a + i * 2.1 ) * 3.5;
			c.h.holder.position.set( x, H( x, z ), z );
			c.h.mixer.update( dt );
			if ( c.t <= 0 ) {

				let best = null, bd = 36;
				for ( const e of near( x, z, 6 ) ) { const d = ( e.x - x ) ** 2 + ( e.z - z ) ** 2; if ( d < bd ) { bd = d; best = e; } }
				if ( best ) {

					c.t = 0.7; const a = Math.atan2( best.x - x, best.z - z ); c.h.holder.rotation.y = a;
					hurt( best, ( 8 + 5 * S.skills.clone.lv ) * S.stats.dmg, 3, Math.sin( a ), Math.cos( a ) );
					c.h.act.attack?.reset().play();

				}

			}

		} );

	}

	function bolt( x, z, R, dmg ) {

		const m = new THREE.Mesh( boltGeo, new THREE.MeshBasicMaterial( { color: 0xc9e8ff, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false } ) );
		m.position.set( x, H( x, z ), z );
		addFx( m, 0.25, ( f, k ) => { f.mesh.material.opacity = 1 - k; } );
		explode( x, z, R, dmg, 0x9fd4ff, 1 );

	}

	function shockRing( R, dmg, knock, color ) {

		const x = S.pos.x, z = S.pos.z;
		const m = new THREE.Mesh( ringGeo, new THREE.MeshBasicMaterial( { color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending } ) );
		m.position.set( x, S.pos.y + 0.3, z );
		addFx( m, 0.4, ( f, k ) => { f.mesh.scale.setScalar( 0.5 + R * k ); f.mesh.material.opacity = 1 - k; } );
		for ( const e of near( x, z, R + 2 ) ) {

			const dx = e.x - x, dz = e.z - z, d = Math.hypot( dx, dz ) + 1e-3;
			if ( d < R ) hurt( e, dmg, knock, dx / d, dz / d );

		}

	}

	function rollLog( dmg ) {

		const a = Math.random() * Math.PI * 2;
		const sx = S.pos.x - Math.sin( a ) * 25, sz = S.pos.z - Math.cos( a ) * 25;
		const m = new THREE.Mesh( logGeo, logMat );
		m.rotation.y = a;
		const hit = new Set();
		addFx( m, 2.2, ( f, k ) => {

			const x = sx + Math.sin( a ) * 50 * k, z = sz + Math.cos( a ) * 50 * k;
			f.mesh.position.set( x, H( x, z ) + 0.9, z );
			f.mesh.rotateOnAxis( new THREE.Vector3( 1, 0, 0 ), 0.25 );
			for ( const e of near( x, z, 5 ) ) {

				if ( hit.has( e ) ) continue;
				const lx = ( e.x - x ) * Math.cos( a ) - ( e.z - z ) * Math.sin( a ), lz = ( e.x - x ) * Math.sin( a ) + ( e.z - z ) * Math.cos( a );
				if ( Math.abs( lx ) < 3.5 && Math.abs( lz ) < 1.2 + e.t.r ) { hit.add( e ); hurt( e, dmg, 6, Math.sin( a ), Math.cos( a ) ); }

			}

		} );
		floatText( '滚木', sx, sz, '#c58b4a' );

	}

	// ---------- 冲刺和大招 ----------
	function dash() {

		if ( S.dashCd > 0 || S.over ) return;
		S.dashCd = 1.2; S.dashT = 0.2; S.iframe = Math.max( S.iframe, 0.25 );
		const a = S.vel.lengthSq() > 0.1 ? Math.atan2( S.vel.x, S.vel.z ) : S.face;
		S.vel.set( Math.sin( a ) * 26, 0, Math.cos( a ) * 26 );

	}

	function ult() {

		if ( S.laugh < S.laughMax * ( S.firstUlt ? 1 : 0.5 ) || S.ultT > 0 ) return;
		S.firstUlt = true; S.laugh = 0; S.ultT = 8; S.iframe = 8.5;
		S.ultTick = 0;
		const card = document.createElement( 'div' );
		card.className = 'g-ult'; card.innerHTML = `<b>${ S.hero.ult }</b>`;
		ui.root.appendChild( card ); setTimeout( () => card.remove(), 1100 );
		shake( 1.2 ); audio.play( 'ult' ); audio.boom( 2 ); hitstop = 0.25; flash( '#ffd54a' );
		burst( S.pos.x, S.pos.y + 2, S.pos.z, 300, 0xffd54a, 22, 12, 1.4 );
		S.ultTick = 0;

	}

	function ultUpdate( dt ) {

		if ( S.ultT <= 0 ) { S.h.holder.scale.setScalar( THREE.MathUtils.lerp( S.h.holder.scale.x, 2.6, 0.2 ) ); return; }
		S.ultT -= dt; S.ultTick -= dt;
		const id = S.heroId;
		const big = id === 'wukong' ? 5.5 : 2.6;
		S.h.holder.scale.setScalar( THREE.MathUtils.lerp( S.h.holder.scale.x, big, 0.15 ) );
		if ( S.ultTick > 0 ) return;
		const lvDmg = 10 + S.lv * 3;
		const capBoss = ( e, d ) => e.type === 'boss' ? Math.min( d * 3, e.maxHp * 0.03 ) : d * 3;
		if ( id === 'wukong' ) {

			S.ultTick = 0.6;
			const R = 14;
			for ( const e of near( S.pos.x, S.pos.z, R + 2 ) ) { const dx = e.x - S.pos.x, dz = e.z - S.pos.z, d = Math.hypot( dx, dz ) + 1e-3; if ( d < R ) hurt( e, capBoss( e, lvDmg * 2 ), 8, dx / d, dz / d ); }
			shockRing( R, 0, 0, 0xffd54a ); floatText( MEMES[ ( Math.random() * MEMES.length ) | 0 ] + '！', S.pos.x, S.pos.z, '#ffd54a' );
			burst( S.pos.x, S.pos.y + 1, S.pos.z, 120, 0xffb02e, 24, 6, 0.8 ); audio.boom( 1.4 ); shake( 0.7 );
			for ( let i = 0; i < 6; i ++ ) { const a = Math.random() * 6.28, d = 4 + Math.random() * 12; bolt( S.pos.x + Math.sin( a ) * d, S.pos.z + Math.cos( a ) * d, 3, capBoss( { type: '' }, lvDmg ) ); }

		} else if ( id === 'sorceress' ) {

			S.ultTick = 0.12;
			const a = Math.random() * 6.28, d = Math.random() * 18;
			const x = S.pos.x + Math.sin( a ) * d, z = S.pos.z + Math.cos( a ) * d;
			for ( const e of near( x, z, 4 ) ) if ( ( e.x - x ) ** 2 + ( e.z - z ) ** 2 < 9 ) hurt( e, capBoss( e, lvDmg * 1.5 ), 2, 0, 0 );
			bolt( x, z, 3, 0 );

		} else if ( id === 'ox' ) {

			S.ultTick = 0.8;
			shockRing( 12, 0, 0, 0xff9a3c ); shake( 0.4 );
			for ( const e of near( S.pos.x, S.pos.z, 14 ) ) { const dx = e.x - S.pos.x, dz = e.z - S.pos.z, d = Math.hypot( dx, dz ) + 1e-3; if ( d < 12 ) { hurt( e, capBoss( e, lvDmg * 2.4 ), 12, dx / d, dz / d ); e.slow = 1.5; } }

		} else {

			S.ultTick = 0.25;
			const a = Math.random() * 6.28, d = 4 + Math.random() * 16;
			const x = S.pos.x + Math.sin( a ) * d, z = S.pos.z + Math.cos( a ) * d;
			const m = new THREE.Sprite( textMat( '典', '#ff6a2a' ) ); m.scale.set( 6, 2.3, 1 );
			addFx( m, 0.5, ( f, k ) => { f.mesh.position.set( x, H( x, z ) + 18 * ( 1 - k ) + 1, z ); if ( k > 0.95 && ! f.done ) { f.done = true; for ( const e of near( x, z, 6 ) ) if ( ( e.x - x ) ** 2 + ( e.z - z ) ** 2 < 25 ) hurt( e, capBoss( e, lvDmg * 2 ), 6, 0, 0 ); explode( x, z, 5, 0, 0xff6a2a ); } } );

		}

	}

	// ---------- 升级三选一（DESIGN §5.1–5.4） ----------
	const FORMS = {
		gun: { name: '哈哈哈机关枪', desc: '射速 ×3、单发伤害 ×0.45（射击系）' },
		boomer: { name: '6666 回旋镖', desc: '子弹飞出去再飞回来，往返都造成伤害（走位系）' },
		moyu: { name: '摸鱼大师', desc: '主攻击伤害 ×0.5，技能冷却 -30%，技能槽 +1（技能流）' }
	};
	function cardPool() {

		const st = S.stats, out = [];
		if ( S.lv >= 5 && ! S.form ) return Object.entries( FORMS ).map( ( [ k, f ] ) => ( { tier: 'gold', name: f.name, desc: f.desc, apply() { S.form = k; if ( k === 'moyu' ) { st.dmg *= 0.5; st.cd *= 0.7; S.extraSlot = 1; } } } ) );
		const owned = Object.keys( S.skills );
		const maxSkills = 3 + ( S.extraSlot || 0 );
		for ( const id of Object.keys( SKILL_INFO ) ) {

			const sk = S.skills[ id ];
			if ( sk && sk.lv >= 5 ) continue;
			if ( ! sk && owned.length >= maxSkills ) continue;
			const mine = S.hero.skills.includes( id );
			if ( ! sk && ! mine && Math.random() < 0.5 ) continue;
			out.push( { tier: sk ? 'blue' : 'purple', name: `${ SKILL_INFO[ id ].name } ${ sk ? 'Lv' + ( sk.lv + 1 ) : '（新技能）' }`, desc: SKILL_INFO[ id ].desc, apply() { if ( sk ) sk.lv ++; else S.skills[ id ] = { lv: 1, t: 0 }; } } );

		}
		const mods = [
			[ '多发 +1', '扇形多一发', () => st.multi < 4, () => st.multi ++ ],
			[ '屁股也在笑', '向背后同时射一发', () => ! st.back, () => ( st.back = true ) ],
			[ '左右开弓', '两侧各射一发', () => ! st.sides, () => ( st.sides = true ) ],
			[ '穿透 +1', '子弹多穿一个怪', () => st.pierce < 3, () => st.pierce ++ ],
			[ '红温', '伤害 +20%', () => true, () => ( st.dmg *= 1.2 ) ],
			[ '急了', '攻速 +18%', () => true, () => ( st.rate *= 1.18 ) ],
			[ '肺活量', '范围 +15%', () => true, () => ( st.area *= 1.15 ) ],
			[ '加速', '移速 +10%', () => st.speed < 1.6, () => ( st.speed *= 1.1 ) ],
			[ '厚脸皮', '受到伤害 -15%', () => st.armor < 0.6, () => ( st.armor += 0.15 ) ],
			[ '冷却缩减', '技能冷却 -12%', () => st.cd > 0.5, () => ( st.cd *= 0.88 ) ],
			[ '大胃口', '最大血量 +20 并回满', () => true, () => { S.maxHp += 20; S.hp = S.maxHp; } ]
		];
		for ( const [ name, desc, ok, fn ] of mods ) if ( ok() ) out.push( { tier: 'white', name, desc, apply: fn } );
		shuffle( out );
		return out.slice( 0, 3 );

	}

	function levelUp( opening ) {

		S.paused = true;
		const cards = cardPool();
		ui.cards.innerHTML = `<h2>${ opening ? '开局白嫖一张卡！' : '' }${ S.lv >= 5 && ! S.form ? 'Lv5 选择攻击形态（不可逆）' : '升级！三选一' }</h2>`;
		const row = document.createElement( 'div' ); row.className = 'g-row';
		for ( const c of cards ) {

			const b = document.createElement( 'button' );
			b.className = 'g-card ' + c.tier; b.innerHTML = `<b>${ c.name }</b><span>${ c.desc }</span>`;
			b.onclick = () => { c.apply(); ui.cards.classList.add( 'hidden' ); S.paused = false; updateHud(); if ( S.xp >= S.xpNext ) gainXp( 0 ); };
			row.appendChild( b );

		}
		const skip = document.createElement( 'button' ); skip.className = 'g-skip'; skip.textContent = '跳过（回 20% 血）';
		skip.onclick = () => { S.hp = Math.min( S.maxHp, S.hp + S.maxHp * 0.2 ); ui.cards.classList.add( 'hidden' ); S.paused = false; };
		ui.cards.append( row, skip );
		ui.cards.classList.remove( 'hidden' );

	}

	function chest() {

		toast( '盲盒宝箱！白嫖一次升级' );
		S.xp += S.xpNext - S.xp;
		gainXp( 0 );

	}

	function gainXp( v ) {

		S.xp += v;
		if ( S.xp >= S.xpNext && ! S.paused ) {

			S.xp -= S.xpNext; S.lv ++; S.xpNext = 4 + ( S.lv - 1 ) * 4;
			floatText( 'Lv' + S.lv, S.pos.x, S.pos.z, '#7dff9a' ); audio.play( 'level' ); burst( S.pos.x, S.pos.y + 1, S.pos.z, 80, 0x7dff9a, 10, 10, 1 );
			levelUp();

		}

	}

	// ---------- 每帧 ----------
	const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3(), _c = new THREE.Color();
	const counters = {};
	let shakeT = 0;

	// 开局三分钟抽象事件表
	const EARLY = [
		[ 4, '咕咕嘎嘎！奶龙骨头兵来了', () => ring( 'imp', 14, 18 ) ],
		[ 15, '鬼火发疯：哦咿啊哦咿啊', () => ring( 'wisp', 10, 16 ), 'level' ],
		[ 25, '天降奶龙金币雨（经验）', () => { for ( let i = 0; i < 40; i ++ ) S.gems.push( { x: S.pos.x + ( Math.random() - 0.5 ) * 20, z: S.pos.z + ( Math.random() - 0.5 ) * 20, v: 1 } ); }, 'skill' ],
		[ 38, '香蕉猫哭着冲过来了！', () => { for ( let i = 0; i < 2; i ++ ) spawn( 'brute' ); }, 'elite' ],
		[ 50, '尸魔方阵：一眼丁真', () => ring( 'imp', 28, 20 ) ],
		[ 62, '退！退！退！全屏冲击波（送你的）', () => shockRing( 30, 60 * S.stats.dmg, 18, 0x9fe7ff ), 'skill' ],
		[ 75, '依托答辩从天而降', () => { for ( let i = 0; i < 6; i ++ ) { const x = S.pos.x + ( Math.random() - 0.5 ) * 24, z = S.pos.z + ( Math.random() - 0.5 ) * 24; telegraph( x, z, 3.5, 1.2, () => { explode( x, z, 3.5, 80 * S.stats.dmg, 0x8b5a2b, 8 ); if ( ( S.pos.x - x ) ** 2 + ( S.pos.z - z ) ** 2 < 12 ) hurtPlayer( 10, '踩到答辩了' ); }, 0x8b5a2b ); } } ],
		[ 90, '泰裤辣！免费再升一级', () => { S.xp = S.xpNext; gainXp( 0 ); }, 'level' ],
		[ 105, '鬼火弹幕潮：芭比Q了', () => ring( 'wisp', 20, 22 ) ],
		[ 120, '奶娃狂暴：攻速翻倍 10 秒', () => { S.stats.rate *= 2; setTimeout( () => S && ( S.stats.rate /= 2 ), 10000 ); }, 'ult' ],
		[ 135, '双精英：遥遥领先', () => { spawn( 'elite' ); spawn( 'elite' ); }, 'elite' ],
		[ 148, '白骨精：我要出来了哦～', () => shake( 0.8 ), 'boss' ]
	];
	function ring( type, n, R ) { for ( let i = 0; i < n; i ++ ) { const a = i / n * 6.283; spawn( type, { x: S.pos.x + Math.sin( a ) * R, z: S.pos.z + Math.cos( a ) * R } ); } }
	function timeline() {

		while ( S.events.length && S.time >= S.events[ 0 ][ 0 ] ) {

			const [ , msg, fn, snd ] = S.events.shift();
			memeBanner( msg ); fn(); snd && audio.play( snd );

		}

	}
	function memeBanner( msg ) {

		const d = document.createElement( 'div' ); d.className = 'g-meme'; d.textContent = msg;
		d.style.transform = `rotate(${ ( Math.random() - 0.5 ) * 12 }deg)`;
		ui.root.appendChild( d ); setTimeout( () => d.remove(), 2200 );
		flash( '#ffd54a' );

	}

	function enemySkill( e, d, nx, nz ) {

		const t = e.t, m = S.time / 60;
		if ( e.type === 'wisp' ) {

			e.cd = Math.max( 1.6, t.shoot - m * 0.2 );
			if ( d < 24 ) { const a = Math.atan2( nx, nz ); for ( const o of [ - 0.2, 0, 0.2 ] ) enemyShot( e.x, e.z, a + o, 10, 8 ); }

		} else if ( e.type === 'brute' && d < 16 ) {

			e.cd = t.charge; e.state = 'wind';
			const a = Math.atan2( nx, nz );
			floatText( '冲！', e.x, e.z, '#ff4040' );
			telegraphLine( e.x, e.z, a, 16, 2.2, 0.8, () => { if ( e.hp <= 0 ) return; e.state = 'dash'; e.dashT = 0.7; e.dx = Math.sin( a ); e.dz = Math.cos( a ); } );

		} else if ( e.type === 'elite' ) {

			if ( Math.random() < 0.5 && d < 10 ) {

				e.cd = t.slam; e.state = 'wind';
				floatText( '泰山压顶！', e.x, e.z, '#ff4040' );
				const x = e.x, z = e.z;
				telegraph( x, z, 7, 1.1, () => { if ( e.hp > 0 ) e.state = 'chase'; explode( x, z, 0.1, 0, 0xff5a1f ); burst( x, H( x, z ), z, 60, 0xffa040, 16, 6 ); shake( 0.6 ); audio.boom( 1.5 ); if ( ( S.pos.x - x ) ** 2 + ( S.pos.z - z ) ** 2 < 49 ) hurtPlayer( 30, '被砸扁了' ); } );

			} else if ( d < 22 ) {

				e.cd = t.charge; e.state = 'wind';
				const a = Math.atan2( nx, nz );
				telegraphLine( e.x, e.z, a, 22, 3, 0.9, () => { if ( e.hp <= 0 ) return; e.state = 'dash'; e.dashT = 0.8; e.dx = Math.sin( a ); e.dz = Math.cos( a ); } );

			} else e.cd = 1;

		} else if ( e.type === 'boss' ) {

			const enr = e.hp < e.maxHp * 0.5;
			e.cd = enr ? 2.4 : 3.4;
			const pick = ( Math.random() * 4 ) | 0;
			const say = ( s ) => { floatText( s, e.x, e.z, '#e0aaff' ); toast( '白骨精：' + s ); };
			if ( S.boss ) { play( S.boss.h, 'attack', 0.05 ); S.boss.h.attackHold = 0.8; }
			if ( pick === 0 ) {

				say( '白骨弹幕！' ); e.state = 'wind';
				const n = enr ? 28 : 18;
				setTimeout( () => { if ( ! S || e.hp <= 0 ) return; e.state = 'chase'; for ( let i = 0; i < n; i ++ ) enemyShot( e.x, e.z, i / n * 6.283 + S.time, 9, 12, boneMat, 1.3 ); audio.play( 'skill' ); }, 600 );

			} else if ( pick === 1 ) {

				say( '骨刺地狱！' );
				for ( let i = 0; i < ( enr ? 8 : 5 ); i ++ ) {

					const x = S.pos.x + ( Math.random() - 0.5 ) * ( i ? 14 : 0 ), z = S.pos.z + ( Math.random() - 0.5 ) * ( i ? 14 : 0 );
					telegraph( x, z, 3, 1.2 + i * 0.12, () => { burst( x, H( x, z ), z, 40, 0xfff4d6, 6, 18, 0.8 ); audio.boom( 0.8 ); if ( ( S.pos.x - x ) ** 2 + ( S.pos.z - z ) ** 2 < 9 ) hurtPlayer( 22, '被骨刺扎了' ); } );

				}

			} else if ( pick === 2 && d < 30 ) {

				say( '我闪现！' ); e.state = 'wind';
				const a = Math.atan2( nx, nz );
				telegraphLine( e.x, e.z, a, 30, 5, 1.0, () => { if ( e.hp <= 0 ) return; e.state = 'dash'; e.dashT = 0.9; e.dx = Math.sin( a ); e.dz = Math.cos( a ); burst( e.x, H( e.x, e.z ) + 2, e.z, 80, 0xc77dff, 12, 6 ); } );

			} else {

				say( '小的们，上！' );
				for ( let i = 0; i < ( enr ? 14 : 8 ); i ++ ) { const a = i / 8 * 6.28; spawn( i % 3 ? 'imp' : 'wisp', { x: e.x + Math.sin( a ) * 4, z: e.z + Math.cos( a ) * 4 } ); }

			}

		} else e.cd = 2;

	}

	function bossIntro() {

		const card = document.createElement( 'div' );
		card.className = 'g-ult boss'; card.innerHTML = '<b>白骨精 · 现出原形</b>';
		ui.root.appendChild( card ); setTimeout( () => card.remove(), 1600 );
		hitstop = 0.6; flash( '#8a2be2' );

	}

	function dmgText( n, x, z, crit ) {

		const m = new THREE.Sprite( textMat( String( n ), crit ? '#ff4040' : '#ffffff' ).clone() );
		const s = crit ? 1.4 : 0.8; m.scale.set( s * ( m.material.map.image.width / 96 ), s, 1 );
		const y0 = H( x, z ) + 2, ox = ( Math.random() - 0.5 ) * 1.2;
		addFx( m, 0.6, ( f, k ) => { f.mesh.position.set( x + ox, y0 + k * 1.8, z ); f.mesh.material.opacity = 1 - k * k; const p = k < 0.15 ? 1 + ( 0.15 - k ) * 6 : 1; f.mesh.scale.set( s * p * ( f.mesh.material.map.image.width / 96 ), s * p, 1 ); } );

	}

	function near( x, z, r ) {

		const out = [];
		const c = 4, x0 = Math.floor( ( x - r ) / c ), x1 = Math.floor( ( x + r ) / c ), z0 = Math.floor( ( z - r ) / c ), z1 = Math.floor( ( z + r ) / c );
		for ( let i = x0; i <= x1; i ++ ) for ( let j = z0; j <= z1; j ++ ) { const b = S.hash.get( i * 73856093 ^ j * 19349663 ); if ( b ) for ( const e of b ) out.push( e ); }
		return out;

	}

	function update( dt ) {

		if ( ! S ) return false;
		if ( S.paused || S.over ) { renderOnly(); return true; }
		S.dmgBudget = 0;
		stepParticles( dt );
		if ( hitstop > 0 ) { hitstop -= dt; renderOnly(); return true; }
		S.time += dt;

		// 移动
		const st = S.stats;
		const want = new THREE.Vector3( ( keys.KeyD || keys.ArrowRight ? 1 : 0 ) - ( keys.KeyA || keys.ArrowLeft ? 1 : 0 ), 0, ( keys.KeyS || keys.ArrowDown ? 1 : 0 ) - ( keys.KeyW || keys.ArrowUp ? 1 : 0 ) );
		if ( camMode === 2 && want.lengthSq() ) want.applyAxisAngle( THREE.Object3D.DEFAULT_UP, camYaw );
		if ( want.lengthSq() ) want.normalize().multiplyScalar( S.hero.speed * st.speed * ( S.ultT > 0 && S.heroId === 'ox' ? 1.6 : 1 ) );
		S.dashT -= dt; S.dashCd -= dt; S.iframe -= dt;
		if ( S.dashT <= 0 ) S.vel.lerp( want, 1 - Math.exp( - dt * 12 ) );
		S.pos.x += S.vel.x * dt; S.pos.z += S.vel.z * dt;
		const dx = S.pos.x - ARENA.x, dz = S.pos.z - ARENA.z, dd = Math.hypot( dx, dz );
		if ( dd > ARENA.r ) { S.pos.x = ARENA.x + dx / dd * ARENA.r; S.pos.z = ARENA.z + dz / dd * ARENA.r; }
		S.pos.y = H( S.pos.x, S.pos.z );
		const moving = want.lengthSq() > 0;
		if ( moving && S.attackT < 0.2 ) S.face = Math.atan2( want.x, want.z );
		const hh = S.h.holder;
		hh.position.copy( S.pos );
		let da = S.face - hh.rotation.y; da = Math.atan2( Math.sin( da ), Math.cos( da ) );
		hh.rotation.y += da * Math.min( 1, dt * 14 );
		S.h.attackHold = ( S.h.attackHold || 0 ) - dt;
		if ( S.h.attackHold <= 0 ) play( S.h, moving ? 'walk' : 'idle' );
		S.h.act.walk && ( S.h.act.walk.timeScale = 1.3 * st.speed );
		S.h.mixer.update( dt );
		S.shadow.position.set( S.pos.x, S.pos.y + 0.05, S.pos.z );
		hh.visible = S.iframe > 0 && S.ultT <= 0 && S.dashT <= 0 ? ( ( S.time * 20 ) | 0 ) % 2 === 0 : true;

		// 敌人：建哈希 → 追人 → 互相推开 → 碰撞伤害
		S.hash.clear();
		for ( const e of S.enemies ) { const k = Math.floor( e.x / 4 ) * 73856093 ^ Math.floor( e.z / 4 ) * 19349663; let b = S.hash.get( k ); if ( ! b ) S.hash.set( k, ( b = [] ) ); b.push( e ); }
		spawner( dt );
		timeline();
		fire( dt );
		skills( dt );
		bullets( dt );
		ultUpdate( dt );
		for ( let i = S.enemies.length - 1; i >= 0; i -- ) {

			const e = S.enemies[ i ];
			if ( e.hp <= 0 ) { S.enemies.splice( i, 1 ); continue; }
			let tx = S.pos.x - e.x, tz = S.pos.z - e.z;
			const d = Math.hypot( tx, tz ) + 1e-3;
			const sp = e.t.speed * ( e.slow > 0 ? 0.4 : 1 ) * ( 1 + S.time / 600 );
			e.slow -= dt; e.hit -= dt;
			let ax = tx / d * sp, az = tz / d * sp;
			if ( e.type === 'wisp' ) { e.phase += dt * 3; ax += Math.cos( e.phase ) * 2; az += Math.sin( e.phase ) * 2; if ( d < 12 ) { ax *= - 0.4; az *= - 0.4; } }
			e.cd -= dt;
			if ( e.state === 'wind' ) { ax = az = 0; }
			else if ( e.state === 'dash' ) { ax = e.dx * 22; az = e.dz * 22; e.dashT -= dt; if ( e.dashT <= 0 ) e.state = 'chase'; }
			else if ( e.cd <= 0 ) enemySkill( e, d, tx / d, tz / d );
			for ( const o of near( e.x, e.z, 2 ) ) {

				if ( o === e ) continue;
				const ox = e.x - o.x, oz = e.z - o.z, od = Math.hypot( ox, oz ), rr = e.t.r + o.t.r;
				if ( od < rr && od > 1e-4 ) { ax += ox / od * ( rr - od ) * 6; az += oz / od * ( rr - od ) * 6; }

			}
			e.vx *= Math.exp( - dt * 6 ); e.vz *= Math.exp( - dt * 6 );
			e.x += ( ax + e.vx ) * dt; e.z += ( az + e.vz ) * dt;
			if ( d < e.t.r + 0.7 && S.iframe <= 0 ) {

				hurtPlayer( e.t.dmg * ( e.state === 'dash' ? 1.4 : 0.6 ) );
				if ( S.over ) return true;

			}
			if ( d > 70 && e.type !== 'boss' && e.type !== 'elite' ) { const a = Math.random() * 6.28; e.x = S.pos.x + Math.cos( a ) * 30; e.z = S.pos.z + Math.sin( a ) * 30; }

		}

		// 敌方子弹
		for ( let i = S.ebullets.length - 1; i >= 0; i -- ) {

			const b = S.ebullets[ i ];
			b.life -= dt; b.x += b.vx * dt; b.z += b.vz * dt;
			b.mesh.position.set( b.x, H( b.x, b.z ) + 1.1, b.z );
			if ( ( b.x - S.pos.x ) ** 2 + ( b.z - S.pos.z ) ** 2 < ( b.r + 0.6 ) ** 2 ) { hurtPlayer( b.dmg ); b.life = 0; }
			if ( b.life <= 0 ) { fxGroup.remove( b.mesh ); S.ebullets.splice( i, 1 ); }

		}
		if ( S.boss ) {

			const { e, h } = S.boss;
			h.holder.position.set( e.x, H( e.x, e.z ), e.z );
			h.holder.rotation.y = Math.atan2( S.pos.x - e.x, S.pos.z - e.z );
			h.attackHold = ( h.attackHold || 0 ) - dt;
			if ( h.attackHold <= 0 ) play( h, e.state === 'wind' ? 'idle' : 'walk' );
			h.mixer.update( dt );
			h.holder.traverse( ( o ) => { if ( o.isMesh && o.material.emissive ) o.material.emissive.setScalar( e.hit > 0 ? 0.6 : 0 ); } );
			ui.bossFill.style.width = Math.max( 0, e.hp / e.maxHp * 100 ) + '%';

		}

		// 经验
		for ( let i = S.gems.length - 1; i >= 0; i -- ) {

			const g = S.gems[ i ];
			const gx = S.pos.x - g.x, gz = S.pos.z - g.z, gd = Math.hypot( gx, gz );
			if ( gd < st.magnet ) { g.x += gx / gd * 18 * dt; g.z += gz / gd * 18 * dt; }
			if ( gd < 0.8 ) { S.gems.splice( i, 1 ); gainXp( g.v ); }

		}

		// 特效
		for ( let i = S.fx.length - 1; i >= 0; i -- ) {

			const f = S.fx[ i ];
			f.t += dt;
			const k = Math.min( 1, f.t / f.life );
			f.update?.( f, k, dt );
			if ( k >= 1 ) { fxGroup.remove( f.mesh ); S.fx.splice( i, 1 ); }

		}

		renderOnly();
		updateHud();
		return true;

	}

	function renderOnly() {

		// 实例矩阵
		for ( const k in enemyMesh ) counters[ k ] = 0;
		let ns = 0;
		for ( const e of S.enemies ) {

			if ( e.model ) continue;
			const m = enemyMesh[ e.type ], i = counters[ e.type ] ++;
			if ( i >= m.instanceMatrix.count ) continue;
			const y = H( e.x, e.z ) + ( e.type === 'wisp' ? 0.6 + Math.sin( S.time * 4 + e.phase ) * 0.25 : 0 );
			const bob = 1 + Math.sin( S.time * 10 + e.phase ) * 0.06;
			_q.setFromAxisAngle( THREE.Object3D.DEFAULT_UP, Math.atan2( S.pos.x - e.x, S.pos.z - e.z ) );
			_s.set( e.t.scale, e.t.scale * bob, e.t.scale );
			m.setMatrixAt( i, _m.compose( _p.set( e.x, y, e.z ), _q, _s ) );
			m.setColorAt( i, e.hit > 0 ? _c.setRGB( 3, 3, 3 ) : _c.setRGB( 1, 1, 1 ) );
			if ( ns < enemyShadow.instanceMatrix.count ) enemyShadow.setMatrixAt( ns ++, _m.compose( _p.set( e.x, H( e.x, e.z ) + 0.04, e.z ), _q.identity(), _s.setScalar( e.t.r * 2.4 ) ) );

		}
		for ( const k in enemyMesh ) { const m = enemyMesh[ k ]; m.count = counters[ k ]; m.instanceMatrix.needsUpdate = true; if ( m.instanceColor ) m.instanceColor.needsUpdate = true; }
		enemyShadow.count = ns; enemyShadow.instanceMatrix.needsUpdate = true;
		gemMesh.count = S.gems.length;
		S.gems.forEach( ( g, i ) => gemMesh.setMatrixAt( i, _m.compose( _p.set( g.x, H( g.x, g.z ) + 0.4 + Math.sin( S.time * 3 + i ) * 0.1, g.z ), _q.setFromAxisAngle( THREE.Object3D.DEFAULT_UP, S.time * 2 + i ), _s.setScalar( 1 ) ) ) );
		gemMesh.instanceMatrix.needsUpdate = true;

		// 跟随镜头：约 55° 俯视
		const big = S.ultT > 0 ? 1.5 : 1;
		let want;
		if ( camMode === 2 ) {

			const dist = 11 * big;
			want = new THREE.Vector3( S.pos.x + Math.sin( camYaw ) * dist, S.pos.y + 4.2 * big, S.pos.z + Math.cos( camYaw ) * dist );

		} else {

			const [ dist, up, back ] = camMode === 0 ? [ 30, 0.93, 0.36 ] : [ 22, 0.6, 0.8 ];
			want = new THREE.Vector3( S.pos.x, S.pos.y + dist * big * up, S.pos.z + dist * big * back );
			camYaw = 0;

		}
		camera.position.lerp( want, 0.12 );
		const gy = H( camera.position.x, camera.position.z ) + 1.5;
		if ( camera.position.y < gy ) camera.position.y = gy;
		shakeT = Math.max( 0, shakeT - 0.016 );
		if ( shakeT > 0 ) camera.position.add( new THREE.Vector3( ( Math.random() - 0.5 ) * shakeT, ( Math.random() - 0.5 ) * shakeT, 0 ) );
		if ( camMode === 2 ) camera.lookAt( S.pos.x - Math.sin( camYaw ) * 6, S.pos.y + 2.4, S.pos.z - Math.cos( camYaw ) * 6 ); else camera.lookAt( S.pos.x, S.pos.y + 1, S.pos.z );

	}

	// ---------- HUD ----------
	function updateHud() {

		ui.hp.style.width = ( Math.max( 0, S.hp ) / S.maxHp * 100 ) + '%';
		ui.xp.style.width = ( S.xp / S.xpNext * 100 ) + '%';
		const need = S.laughMax * ( S.firstUlt ? 1 : 0.5 );
		ui.laugh.style.width = Math.min( 100, S.laugh / need * 100 ) + '%';
		ui.ultBtn.classList.toggle( 'ready', S.laugh >= need && S.ultT <= 0 );
		const t = S.time | 0;
		ui.info.textContent = `Lv${ S.lv }  ${ String( ( t / 60 ) | 0 ).padStart( 2, '0' ) }:${ String( t % 60 ).padStart( 2, '0' ) }  击杀 ${ S.kills }  同屏 ${ S.enemies.length }`;
		ui.skills.innerHTML = ( S.form ? `<i class="form">${ FORMS[ S.form ].name }</i>` : '' ) + Object.entries( S.skills ).map( ( [ k, v ] ) => `<i>${ SKILL_INFO[ k ].name } ${ v.lv }</i>` ).join( '' );

	}

	function floatText( s, x, z, color ) {

		const m = new THREE.Sprite( textMat( s, color ).clone() );
		m.scale.set( 0.9 * ( m.material.map.image.width / 96 ), 0.9, 1 );
		const y0 = H( x, z ) + 2.4;
		addFx( m, 0.8, ( f, k ) => { f.mesh.position.set( x, y0 + k * 1.5, z ); f.mesh.material.opacity = 1 - k * k; } );

	}

	function toast( s ) {

		const d = document.createElement( 'div' ); d.className = 'g-toast'; d.textContent = s;
		ui.toasts.appendChild( d ); setTimeout( () => d.remove(), 2600 );

	}

	function shake( v ) { shakeT = Math.max( shakeT, v ); }

	function togglePause() {

		S.paused = ! S.paused;
		ui.pause.classList.toggle( 'hidden', ! S.paused );

	}

	function gameOver() {

		S.over = true;
		const t = S.time | 0;
		ui.over.innerHTML = `<h2>${ S.hero.name } 笑晕了</h2><p>你胆子真是肥嘟嘟的，这都敢站着不动</p>
			<p>存活 ${ ( t / 60 ) | 0 } 分 ${ t % 60 } 秒 · 击杀 ${ S.kills } · Lv${ S.lv }${ S.form ? ' · ' + FORMS[ S.form ].name : '' }</p>
			<button class="g-btn" data-a="again">再来一局</button><button class="g-btn" data-a="pick">主菜单</button>`;
		ui.over.classList.remove( 'hidden' ); audio.stopBgm(); audio.play( 'elite' ); ui.bossBar.classList.add( 'hidden' );
		ui.over.querySelector( '[data-a=again]' ).onclick = () => { ui.over.classList.add( 'hidden' ); start( S.heroId ); };
		ui.over.querySelector( '[data-a=pick]' ).onclick = () => location.reload();

	}

	function showSelect() {

		ui.hud.classList.add( 'hidden' );
		ui.select.classList.remove( 'hidden' );

	}

	// ---------- DOM ----------
	function buildUI() {

		const css = document.createElement( 'style' );
		css.textContent = `
		.g-ui{position:fixed;inset:0;pointer-events:none;z-index:8;font-family:"PingFang SC","Microsoft YaHei",sans-serif;color:#fff}
		.g-ui .hidden{display:none!important}
		.g-panel{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(10,8,6,.62);pointer-events:auto;backdrop-filter:blur(3px)}
		.g-panel h2{font-size:30px;margin:0 0 18px;letter-spacing:4px;text-shadow:0 2px 8px #000}
		.g-row{display:flex;gap:16px;flex-wrap:wrap;justify-content:center}
		.g-hero{width:190px;background:rgba(30,24,16,.85);border:2px solid #6d5532;border-radius:10px;padding:12px;cursor:pointer;color:#fff;text-align:center;font:inherit}
		.g-hero:hover{border-color:#ffd54a;transform:translateY(-3px)}
		.g-hero img{height:150px;object-fit:contain}
		.g-hero b{display:block;font-size:20px;margin:6px 0}.g-hero span{font-size:12.5px;opacity:.8;line-height:1.5}
		.g-card{width:220px;min-height:120px;border-radius:10px;padding:14px;cursor:pointer;font:inherit;color:#fff;text-align:left;border:2px solid #999;background:rgba(40,40,40,.92)}
		.g-card b{display:block;font-size:18px;margin-bottom:8px}.g-card span{font-size:13px;opacity:.85;line-height:1.5}
		.g-card.blue{border-color:#4aa3ff}.g-card.purple{border-color:#b56bff}.g-card.gold{border-color:#ffc23a;background:rgba(70,50,10,.92)}
		.g-card:hover{transform:scale(1.04)}
		.g-skip,.g-btn{margin-top:18px;padding:8px 22px;border-radius:6px;border:1px solid #aaa;background:rgba(0,0,0,.5);color:#fff;font:inherit;cursor:pointer}
		.g-btn{margin:10px 8px 0;font-size:16px}
		.g-hud{position:absolute;left:0;right:0;top:0;padding:12px 16px}
		.g-top{display:flex;align-items:center;gap:10px}
		.g-top img{width:46px;height:46px;object-fit:contain;background:rgba(0,0,0,.4);border-radius:50%}
		.g-bars{width:300px}.g-bar{height:10px;background:rgba(0,0,0,.5);border-radius:5px;margin:3px 0;overflow:hidden}
		.g-bar i{display:block;height:100%;width:0}
		#g-hp i{background:#ff5252}#g-xp i{background:#7dff9a}
		.g-info{font-size:14px;text-shadow:0 1px 3px #000}
		.g-skills{margin-top:6px;display:flex;gap:6px;flex-wrap:wrap}.g-skills i{font-style:normal;font-size:12px;background:rgba(0,0,0,.5);padding:2px 8px;border-radius:10px}
		.g-skills i.form{background:rgba(160,110,0,.7)}
		.g-ultbox{position:absolute;right:26px;bottom:26px;text-align:center;pointer-events:auto}
		.g-ultbtn{width:84px;height:84px;border-radius:50%;border:3px solid #6d5532;background:rgba(0,0,0,.5);color:#fff;font:inherit;font-size:13px;cursor:pointer;overflow:hidden;position:relative}
		.g-ultbtn.ready{border-color:#ffd54a;animation:gpulse .5s infinite alternate}
		@keyframes gpulse{to{transform:scale(1.08) rotate(3deg);box-shadow:0 0 20px #ffd54a}}
		#g-laugh{position:absolute;left:0;bottom:0;width:100%;height:0;background:rgba(255,213,74,.45)}
		.g-help{position:absolute;left:16px;bottom:14px;font-size:12.5px;opacity:.8;text-shadow:0 1px 3px #000}
		.g-toasts{position:absolute;top:90px;left:0;right:0;display:flex;flex-direction:column;align-items:center;gap:6px}
		.g-toast{background:rgba(0,0,0,.6);padding:6px 16px;border-radius:16px;font-size:15px;animation:gfade 2.6s forwards}
		@keyframes gfade{0%{opacity:0;transform:translateY(-6px)}10%{opacity:1;transform:none}80%{opacity:1}100%{opacity:0}}
		.g-ult{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:repeating-conic-gradient(rgba(255,255,255,.12) 0 3deg,transparent 3deg 9deg);animation:gfade 1.1s forwards}
		.g-ult b{font-size:64px;color:#ffd54a;-webkit-text-stroke:3px #3a1d00;letter-spacing:10px;transform:rotate(-6deg)}
		.g-view{position:absolute;right:16px;top:14px;pointer-events:auto}.g-view .g-btn{margin:0 0 0 8px}
		.g-meme{position:absolute;top:34%;left:0;right:0;text-align:center;font-size:46px;font-weight:900;color:#fff36b;-webkit-text-stroke:2px #5a1500;text-shadow:0 0 18px #ff5a00;animation:gmeme 2.2s forwards;pointer-events:none}
		@keyframes gmeme{0%{opacity:0;scale:3}12%{opacity:1;scale:1}85%{opacity:1}100%{opacity:0;scale:.8}}
		.g-menu{background:radial-gradient(ellipse at center,rgba(60,20,10,.35),rgba(5,3,2,.85))}
		.g-title{font-size:72px;font-weight:900;color:#ffd54a;-webkit-text-stroke:3px #3a1d00;letter-spacing:12px;text-shadow:0 6px 0 #8a3b00,0 10px 30px #000;transform:rotate(-3deg);animation:gbob 1.6s ease-in-out infinite alternate;text-align:center}
		.g-title small{display:block;font-size:24px;letter-spacing:8px;color:#fff;-webkit-text-stroke:0;text-shadow:0 2px 6px #000}
		@keyframes gbob{to{transform:rotate(2deg) scale(1.04)}}
		.g-hero-img{height:180px;margin:10px 0;filter:drop-shadow(0 0 20px #ffb02e)}
		.g-btn.big{font-size:26px;padding:12px 56px;background:linear-gradient(#ffcf3a,#e07b00);color:#3a1d00;border:3px solid #fff3c0;font-weight:900;border-radius:40px;animation:gpulse .7s infinite alternate}
		.g-sub{margin-top:14px;background:rgba(0,0,0,.55);padding:12px 22px;border-radius:10px;line-height:1.9;font-size:14px}
		.g-sub label{display:flex;gap:12px;align-items:center;justify-content:space-between;min-width:260px}
		.g-note{opacity:.5;font-size:12px;margin-top:18px}
		.g-flash{position:absolute;inset:0;opacity:0;transition:opacity .25s;mix-blend-mode:screen}
		.g-boss{position:absolute;top:16px;left:50%;transform:translateX(-50%);width:520px;text-align:center;text-shadow:0 2px 4px #000}
		.g-boss .g-bar{height:16px;border:2px solid #e0aaff}.g-boss i{background:linear-gradient(90deg,#8a2be2,#ff4fd8)!important;display:block;height:100%}
		.g-ult.boss b{color:#e0aaff;-webkit-text-stroke:3px #2a0040}
		`;
		document.head.appendChild( css );
		const root = document.createElement( 'div' ); root.className = 'g-ui';
		root.innerHTML = `
		<div class="g-panel g-menu" id="g-select">
			<div class="g-title">三打白骨精<small>奶娃大闹白虎岭</small></div>
			<img class="g-hero-img" src="${ asset( 'chars/wukong.webp' ) }">
			<button class="g-btn big" id="g-go">开始游戏</button>
			<div class="g-row"><button class="g-btn" id="g-howbtn">操作说明</button><button class="g-btn" id="g-setbtn">设置</button><a class="g-btn" href="?mode=view">看风景</a></div>
			<div class="g-sub hidden" id="g-how"><p>WASD 移动 · 攻击全自动（金箍棒 + 热梗弹幕）<br>空格 冲刺无敌 · Q 七十二变大招 · V 切换 俯视/斜视/平视<br>平视下按住鼠标左键拖动转视角 · Esc 暂停<br>红色区域 = 怪物要放技能了，快躲！撑到白骨精现身并打倒她</p></div>
			<div class="g-sub hidden" id="g-set">
				<label>总音量 <input type="range" min="0" max="1" step="0.05" data-k="master"></label>
				<label>音效 <input type="range" min="0" max="1" step="0.05" data-k="sfx"></label>
				<label>BGM <input type="range" min="0" max="1" step="0.05" data-k="bgm"></label>
				<label>初始视角 <select id="g-cam"><option value="0">俯视</option><option value="1" selected>斜视</option><option value="2">平视</option></select></label>
			</div>
			<p class="g-note">音效来自队友整理的 naiwa-sfx 素材包，仅供黑客松演示</p>
		</div>
		<div class="g-panel hidden" id="g-loading"><h2>角色入场中……</h2></div>
		<div class="hidden" id="g-hud">
			<div class="g-hud"><div class="g-top"><img id="g-icon"><div class="g-bars"><b id="g-name"></b>
				<div class="g-bar" id="g-hp"><i></i></div><div class="g-bar" id="g-xp"><i></i></div></div></div>
				<div class="g-info" id="g-info"></div><div class="g-skills" id="g-skills"></div></div>
			<div class="g-ultbox"><button class="g-ultbtn" id="g-ult"><div id="g-laugh"></div><span style="position:relative">大招 Q</span></button></div>
			<div class="g-help">WASD 移动 · 自动攻击 · 空格冲刺 · Q 大招 · V 视角 · Esc 暂停</div>
			<div class="g-view"><button class="g-btn" id="g-cambtn">视角：斜视 (V)</button><a class="g-btn" href="?mode=view">看风景</a></div>
		</div>
		<div class="g-panel hidden" id="g-cards"></div>
		<div class="g-panel hidden" id="g-pause"><h2>暂停</h2><p>按 Esc 继续</p><button class="g-btn" onclick="location.reload()">回到主菜单</button></div>
		<div class="g-panel hidden" id="g-over"></div>
		<div class="g-flash" id="g-flash"></div>
		<div class="g-boss hidden" id="g-boss"><b>白骨精</b><div class="g-bar"><i id="g-bossfill"></i></div></div>
		<div class="g-toasts" id="g-toasts"></div>`;
		document.body.appendChild( root );
		const $ = ( id ) => root.querySelector( '#' + id );
		$( 'g-go' ).onclick = () => { audio.unlock(); start( 'wukong' ).catch( ( e ) => { $( 'g-loading' ).innerHTML = `<h2>加载失败</h2><p>${ e.message }</p><button class="g-btn" onclick="location.reload()">重试</button>`; } ); };
		$( 'g-howbtn' ).onclick = () => { $( 'g-how' ).classList.toggle( 'hidden' ); $( 'g-set' ).classList.add( 'hidden' ); };
		$( 'g-setbtn' ).onclick = () => { $( 'g-set' ).classList.toggle( 'hidden' ); $( 'g-how' ).classList.add( 'hidden' ); };
		root.querySelectorAll( 'input[data-k]' ).forEach( ( el ) => { el.value = audio.vol[ el.dataset.k ]; el.oninput = () => { audio.vol[ el.dataset.k ] = + el.value; audio.apply(); }; } );
		$( 'g-cam' ).onchange = ( e ) => { camMode = + e.target.value; root.querySelector( '#g-cambtn' ).textContent = '视角：' + CAM_NAMES[ camMode ] + ' (V)'; };
		const u = {
			root, select: $( 'g-select' ), loading: $( 'g-loading' ), hud: $( 'g-hud' ), cards: $( 'g-cards' ), pause: $( 'g-pause' ), over: $( 'g-over' ), toasts: $( 'g-toasts' ),
			hp: $( 'g-hp' ).firstElementChild, xp: $( 'g-xp' ).firstElementChild, laugh: $( 'g-laugh' ), ultBtn: $( 'g-ult' ), info: $( 'g-info' ), skills: $( 'g-skills' ),
			heroName: $( 'g-name' ), heroIcon: $( 'g-icon' ), flash: $( 'g-flash' ), bossBar: $( 'g-boss' ), bossFill: $( 'g-bossfill' ), camBtn: $( 'g-cambtn' )
		};
		u.ultBtn.onclick = () => S && ult();
		// 进度条：把高度当充能
		Object.defineProperty( u.laugh.style, 'width', { set( v ) { u.laugh.style.height = v; } } );
		return u;

	}

	return {
		update,
		get active() { return !! S; },
		start, showSelect,
		_stress: ( n ) => { S.laugh = S.laughMax; S.hp = S.maxHp = 1e6; for ( let i = 0; i < n; i ++ ) spawn( i % 7 ? 'imp' : 'wisp' ); },
		_cam: ( m ) => { camMode = m; },
		_boss: () => { S.time = Math.max( S.time, 150 ); S.nextBoss = 0; },
		debug: () => S && { lv: S.lv, hp: S.hp, enemies: S.enemies.length, kills: S.kills, time: S.time, skills: Object.keys( S.skills ), form: S.form }
	};

}

function radialTex( c0, c1 ) {

	const c = document.createElement( 'canvas' ); c.width = c.height = 64;
	const g = c.getContext( '2d' ), gr = g.createRadialGradient( 32, 32, 0, 32, 32, 32 );
	gr.addColorStop( 0, c0 ); gr.addColorStop( 1, c1 );
	g.fillStyle = gr; g.fillRect( 0, 0, 64, 64 );
	return new THREE.CanvasTexture( c );

}

function shuffle( a ) { for ( let i = a.length - 1; i > 0; i -- ) { const j = ( Math.random() * ( i + 1 ) ) | 0; [ a[ i ], a[ j ] ] = [ a[ j ], a[ i ] ]; } return a; }

function mergeGeos( list ) {

	let n = 0, idx = 0;
	for ( const g of list ) { n += g.attributes.position.count; idx += g.index.count; }
	const pos = new Float32Array( n * 3 ), nor = new Float32Array( n * 3 ), ind = new Uint32Array( idx );
	let o = 0, io = 0;
	for ( const g of list ) {

		pos.set( g.attributes.position.array, o * 3 ); nor.set( g.attributes.normal.array, o * 3 );
		for ( let i = 0; i < g.index.count; i ++ ) ind[ io ++ ] = g.index.array[ i ] + o;
		o += g.attributes.position.count;

	}
	const out = new THREE.BufferGeometry();
	out.setAttribute( 'position', new THREE.BufferAttribute( pos, 3 ) );
	out.setAttribute( 'normal', new THREE.BufferAttribute( nor, 3 ) );
	out.setIndex( new THREE.BufferAttribute( ind, 1 ) );
	return out;

}

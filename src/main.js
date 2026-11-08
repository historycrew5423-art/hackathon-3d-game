import * as THREE from 'three';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import { SunLight } from 'three/addons/lights/SunLight.js';
import { makeSceneFog } from './render/atmosphere.js';
import { asset, PARAMS } from './core/params.js';
import { createSky } from './render/sky.js';
import { createPost } from './render/post.js';
import { prepTex } from './render/materials.js';
import { createPool } from './gen/pool.js';
import { buildTerrain } from './world/terrain.js';
import { loadRocks } from './world/rocks.js';
import { buildArchitecture } from './world/buildings.js';
import { buildVegetation } from './world/vegetation.js';
import { buildWater } from './world/water.js';
import { buildMist } from './world/mist.js';
import { buildStory } from './world/story.js';
import { createControls } from './game/controls.js';
import { createSurvivor } from './game/survivor.js';
import { LIGHT_DIR, SUN_COLOR, VIEWS, viewSpec } from './config.js';

// ---------------------------------------------------------------------------
// 入口：画质档位、渲染器、载入素材、生成世界、主循环、调试截图开关（window.__scene）
// ---------------------------------------------------------------------------

const SHOT = PARAMS.has( 'shot' );
const coarse = matchMedia( '(pointer: coarse)' ).matches;
const TIERS = {
	high: { dpr: Math.min( devicePixelRatio, 1.5 ), msaa: 4, shadow: 4096, shadowFar: 1700, terrainStep: 1.25, mapStep: 1, rock: 'high', terrainShadow: true, treeStep: 8, grassStep: 0.9 },
	mid: { dpr: Math.min( devicePixelRatio, 1.0 ), msaa: 2, shadow: 2048, shadowFar: 1400, terrainStep: 2, mapStep: 1.5, rock: 'high', terrainShadow: false, treeStep: 10, grassStep: 1.3 },
	// 游戏模式：镜头贴近角色俯视，远景只剩轮廓，所以降分辨率、关 MSAA、阴影只覆盖角色周围、树草稀疏
	game: { dpr: Math.min( devicePixelRatio, 1.0 ), msaa: 0, shadow: 1024, shadowFar: 600, terrainStep: 3, mapStep: 2, rock: 'low', terrainShadow: false, treeStep: 14, grassStep: 2.2 },
	low: { dpr: Math.min( devicePixelRatio, 0.8 ), msaa: 0, shadow: 1024, shadowFar: 1000, terrainStep: 3, mapStep: 2, rock: 'low', terrainShadow: false, treeStep: 14, grassStep: 2.0 }
};
const GAME = PARAMS.get( 'mode' ) !== 'view' && ! PARAMS.has( 'shot' );
const tier = TIERS[ PARAMS.get( 'q' ) ] ? PARAMS.get( 'q' ) : GAME ? 'game' : ( coarse ? 'low' : 'high' );
const Q = { ...TIERS[ tier ], tier };
if ( SHOT ) Q.dpr = 1;

const canvas = document.getElementById( 'c' );
const renderer = new THREE.WebGLRenderer( { canvas, antialias: false, powerPreference: 'high-performance', stencil: false } );
renderer.setPixelRatio( Q.dpr );
renderer.setSize( innerWidth, innerHeight, false );
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.9;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
scene.fog = makeSceneFog();
const camera = new THREE.PerspectiveCamera( 52, innerWidth / innerHeight, 0.3, 30000 );
const time = { value: 0 };

const sun = new SunLight( SUN_COLOR, 3.1 );
sun.position.copy( LIGHT_DIR );
sun.castShadow = true;
sun.shadow.mapSize.set( Q.shadow, Q.shadow );
sun.shadow.camera.near = 1;
sun.shadow.camera.far = Q.shadowFar;
sun.shadow.bias = - 0.0004;
sun.shadow.normalBias = 0.8;
sun.shadow.radius = 2;
scene.add( sun );

const ui = {
	bar: document.querySelector( '#bar i' ),
	text: document.getElementById( 'loadText' ),
	loading: document.getElementById( 'loading' ),
	debug: document.getElementById( 'debug' )
};
const setProgress = ( p, msg ) => {

	ui.bar.style.width = ( p * 100 ).toFixed( 0 ) + '%';
	if ( msg ) ui.text.textContent = msg;

};

const stats = { gen: {} };

async function loadTextures() {

	const manager = new THREE.LoadingManager();
	manager.onProgress = ( url, done, total ) => setProgress( 0.05 + 0.25 * done / total );
	const tl = new THREE.TextureLoader( manager );
	const names = [ 'cliff_diff', 'cliff_nor', 'bone_diff', 'bone_nor', 'grass_diff', 'grass_nor', 'forest_diff', 'forest_nor', 'trail_diff', 'trail_nor', 'sky',
		'roof_diff', 'roof_nor', 'stonewall_diff', 'stonewall_nor', 'planks_diff', 'redwood_diff', 'plaster_diff',
		'twig', 'leaves', 'grassblade', 'fern', 'bark_diff', 'bark_nor' ];
	const hdrP = new HDRLoader( manager ).setDataType( THREE.FloatType ).loadAsync( asset( 'sky_hdr.hdr' ) );
	const list = await Promise.all( names.map( ( n ) => tl.loadAsync( asset( n + '.webp' ) ) ) );
	const T = {};
	names.forEach( ( n, i ) => {

		T[ n ] = list[ i ];
		// 叶片图集不能平铺（否则面片边缘会采到对边的叶子）
		const atlas = [ 'twig', 'leaves', 'grassblade', 'fern' ].includes( n );
		prepTex( T[ n ], ! n.endsWith( '_nor' ), ! atlas );

	} );
	T.sky_hdr = await hdrP;
	return T;

}

let world = null, post = null, controls = null;

async function main() {

	const t0 = performance.now();
	setProgress( 0.02, '正在载入贴图……' );
	const pool = createPool();
	const T = await loadTextures();
	stats.gen.textures = performance.now() - t0;

	const sky = createSky( T.sky, T.sky_hdr );
	scene.add( sky.mesh );
	scene.environment = sky.buildEnv( renderer );
	scene.environmentIntensity = 0.55;

	setProgress( 0.32, '正在堆山（地形和岩体在后台线程里生成）……' );
	const t1 = performance.now();
	const [ terrain, rocks ] = await Promise.all( [
		buildTerrain( pool, Q, T, time ),
		loadRocks( Q, T )
	] );
	stats.gen.world = performance.now() - t1;
	scene.add( terrain.mesh );
	scene.add( rocks.group );
	pool.dispose();
	setProgress( 0.8, '正在盖房子、种树……' );
	await new Promise( ( r ) => setTimeout( r, 0 ) );
	const arch = buildArchitecture( { T, heightAt: terrain.heightAt } );
	scene.add( arch.group );
	const veg = buildVegetation( { T, terrain, placed: arch.placed, time, Q } );
	scene.add( veg.group );
	const water = buildWater( { time, heightAt: terrain.heightAt } );
	scene.add( water.group );
	const mist = buildMist( { time, fallsBase: water.fallsBase } );
	scene.add( mist.mesh );
	const story = buildStory( { heightAt: terrain.heightAt } );
	scene.add( story.group );
	world = { sky, terrain, rocks, arch, veg, water, mist, story };

	post = createPost( renderer, scene, camera, Q );
	controls = createControls( camera, canvas, terrain.heightAt );
	const v = viewSpec( 'ref', terrain.heightAt );
	controls.setView( v.pos, v.look, v.fov );
	resize();
	setProgress( 0.95, '正在编译着色器……' );
	await new Promise( ( r ) => setTimeout( r, 20 ) );
	renderer.compile( scene, camera );
	stats.gen.total = performance.now() - t0;
	console.log( `[scene] ready in ${ ( stats.gen.total / 1000 ).toFixed( 1 ) }s (textures ${ ( stats.gen.textures / 1000 ).toFixed( 1 ) }s, world ${ ( stats.gen.world / 1000 ).toFixed( 1 ) }s)` );
	ui.loading.classList.add( 'hidden' );
	if ( SHOT ) ui.loading.style.display = 'none';
	setupUI();
	if ( GAME ) {

		for ( const id of [ 'views', 'hud' ] ) { const el = document.getElementById( id ); if ( el ) el.style.display = 'none'; }
		survivor = createSurvivor( { scene, camera, renderer, dom: canvas, heightAt: terrain.heightAt } );
		camera.fov = 50; camera.far = 420; camera.updateProjectionMatrix();
		world.sky.mesh.scale.setScalar( 380 ); world.sky.mesh.onBeforeRender = () => world.sky.mesh.position.copy( camera.position );

	}
	api.ready = true;
	requestAnimationFrame( loop );

}

function setupUI() {

	const box = document.getElementById( 'views' );
	if ( ! box ) return;
	box.querySelectorAll( 'button[data-view]' ).forEach( ( b ) => {

		b.addEventListener( 'click', () => goView( b.dataset.view ) );

	} );
	addEventListener( 'keydown', ( e ) => {

		if ( survivor ) return;
		const names = Object.keys( VIEWS );
		const i = parseInt( e.key, 10 );
		if ( i >= 1 && i <= names.length ) goView( names[ i - 1 ] );

	} );

}

function goView( name ) {

	const v = viewSpec( name, world.terrain.heightAt );
	if ( v ) controls.flyTo( v.pos, v.look, v.fov );

}

function resize() {

	renderer.setPixelRatio( Q.dpr );
	renderer.setSize( innerWidth, innerHeight, false );
	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	post?.setSize( innerWidth, innerHeight, Q.dpr );

}

addEventListener( 'resize', resize );

// ---------------------------------------------------------------------------
// 主循环
// ---------------------------------------------------------------------------
const timer = new THREE.Timer();
let frozen = false;
let survivor = null;
let fpsAcc = 0, fpsN = 0;
if ( PARAMS.has( 'debug' ) ) ui.debug.classList.remove( 'hidden' );

function renderFrame( dt ) {

	renderer.info.autoReset = false;
	renderer.info.reset();
	world.story.update( time.value );
	post.render( dt );

}

function loop( ts ) {

	requestAnimationFrame( loop );
	if ( frozen ) return;
	timer.update( ts );
	const dt = Math.min( timer.getDelta(), 1 / 20 );
	time.value += dt;
	if ( ! survivor || ! survivor.update( dt ) ) controls.update( dt );
	renderFrame( dt );
	fpsAcc += dt; fpsN ++;
	if ( fpsAcc > 0.5 ) {

		const fps = fpsN / fpsAcc;
		fpsAcc = 0; fpsN = 0;
		if ( ! ui.debug.classList.contains( 'hidden' ) ) {

			const i = renderer.info.render;
			const p = camera.position;
			ui.debug.textContent = `fps ${ fps.toFixed( 0 ) }  calls ${ i.calls }  tris ${ ( i.triangles / 1e6 ).toFixed( 2 ) }M  pos ${ p.x.toFixed( 0 ) },${ p.y.toFixed( 0 ) },${ p.z.toFixed( 0 ) }`;

		}

	}

}

// ---------------------------------------------------------------------------
// 调试截图：__scene.shot({ view: 'ref' | { pos, look, fov }, t })：用固定的时间和机位渲染几帧后停住
// ---------------------------------------------------------------------------
const api = window.__scene = {
	ready: false,
	error: null,
	shotDone: false,
	shot( spec ) {

		api.shotDone = false;
		frozen = true;
		setTimeout( () => {

			try {

				if ( spec.t !== undefined ) time.value = spec.t;
				let v = null;
				if ( typeof spec.view === 'string' ) v = viewSpec( spec.view, world.terrain.heightAt );
				else if ( spec.pos ) v = { pos: new THREE.Vector3( ...spec.pos ), look: new THREE.Vector3( ...spec.look ), fov: spec.fov || 55 };
				if ( v ) controls.setView( v.pos, v.look, v.fov );
				for ( let i = 0; i < ( spec.frames || 3 ); i ++ ) {

					controls.update( 0 );
					renderFrame( 0.016 );

				}

				const gl = renderer.getContext();
				gl.readPixels( 0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array( 4 ) );

			} catch ( e ) {

				console.error( '[scene] shot error', e.message, e.stack );

			}

			api.shotDone = true;

		}, 20 );

	},
	resume() { frozen = false; },
	info() {

		const gl = renderer.getContext();
		const ext = gl.getExtension( 'WEBGL_debug_renderer_info' );
		const i = renderer.info.render;
		return {
			gpu: ext ? gl.getParameter( ext.UNMASKED_RENDERER_WEBGL ) : 'unknown',
			tier, gen: Object.fromEntries( Object.entries( stats.gen ).map( ( [ k, v ] ) => [ k, + ( v / 1000 ).toFixed( 2 ) ] ) ),
			render: { calls: i.calls, tris: i.triangles }, cam: camera.position.toArray().map( ( x ) => + x.toFixed( 1 ) )
		};

	},
	get scene() { return scene; },
	get world() { return world; },
	get game() { return survivor; },
	setAtmos: null
};

main().catch( ( e ) => {

	console.error( '[scene] init failed', e.message, e.stack );
	ui.text.textContent = '出错了：' + e.message;
	api.error = e.message;

} );

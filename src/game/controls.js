import * as THREE from 'three';

// ---------------------------------------------------------------------------
// 镜头控制：按住鼠标拖动转视角，WASD 移动（Q/E 下降 / 上升，Shift 加速），滚轮前后推，
// 数字键 / 界面按钮飞到预设视角。始终保持在地面以上。触屏：单指转视角，双指捏合前后推。
// ---------------------------------------------------------------------------

export function createControls( camera, dom, groundAt ) {

	const pos = camera.position.clone();
	let yaw = 0, pitch = 0;
	const keys = {};
	let drag = null;
	let flight = null;
	let lastInput = - 1e9;
	const vel = new THREE.Vector3();
	const _f = new THREE.Vector3(), _r = new THREE.Vector3(), _t = new THREE.Vector3();

	function lookDir( y = yaw, p = pitch, out = _f ) {

		return out.set( Math.sin( y ) * Math.cos( p ), Math.sin( p ), - Math.cos( y ) * Math.cos( p ) );

	}

	function setView( p, look, fov ) {

		pos.copy( p );
		const d = _t.copy( look ).sub( p ).normalize();
		yaw = Math.atan2( d.x, - d.z );
		pitch = Math.asin( THREE.MathUtils.clamp( d.y, - 1, 1 ) );
		if ( fov ) { camera.fov = fov; camera.updateProjectionMatrix(); }
		flight = null;
		apply();

	}

	function flyTo( p, look, fov, dur = 2.8 ) {

		const d = new THREE.Vector3().copy( look ).sub( p ).normalize();
		let y1 = Math.atan2( d.x, - d.z );
		while ( y1 - yaw > Math.PI ) y1 -= Math.PI * 2;
		while ( y1 - yaw < - Math.PI ) y1 += Math.PI * 2;
		flight = { t: 0, dur, p0: pos.clone(), p1: p.clone(), y0: yaw, y1, q0: pitch, q1: Math.asin( THREE.MathUtils.clamp( d.y, - 1, 1 ) ), f0: camera.fov, f1: fov || camera.fov };

	}

	function apply() {

		camera.position.copy( pos );
		camera.lookAt( _t.copy( pos ).add( lookDir() ) );

	}

	dom.addEventListener( 'pointerdown', ( e ) => {

		drag = { x: e.clientX, y: e.clientY, id: e.pointerId };
		dom.setPointerCapture?.( e.pointerId );
		lastInput = performance.now();
		flight = null;

	} );
	dom.addEventListener( 'pointermove', ( e ) => {

		if ( ! drag || drag.id !== e.pointerId ) return;
		const k = 0.0028 * camera.fov / 55;
		yaw += ( e.clientX - drag.x ) * k;
		pitch = THREE.MathUtils.clamp( pitch - ( e.clientY - drag.y ) * k, - 1.45, 1.45 );
		drag.x = e.clientX; drag.y = e.clientY;
		lastInput = performance.now();

	} );
	const end = () => { drag = null; };
	dom.addEventListener( 'pointerup', end );
	dom.addEventListener( 'pointercancel', end );
	dom.addEventListener( 'wheel', ( e ) => {

		e.preventDefault();
		const h = Math.max( 4, pos.y - groundAt( pos.x, pos.z ) );
		pos.addScaledVector( lookDir(), - Math.sign( e.deltaY ) * Math.min( 80, 3 + h * 0.12 ) );
		lastInput = performance.now();
		flight = null;

	}, { passive: false } );
	addEventListener( 'keydown', ( e ) => { keys[ e.code ] = true; if ( e.code.startsWith( 'Key' ) || e.code.startsWith( 'Arrow' ) ) { lastInput = performance.now(); flight = null; } } );
	addEventListener( 'keyup', ( e ) => { keys[ e.code ] = false; } );
	addEventListener( 'blur', () => { for ( const k in keys ) keys[ k ] = false; } );

	// 双指捏合
	let pinch = null;
	dom.addEventListener( 'touchstart', ( e ) => {

		if ( e.touches.length === 2 ) { pinch = Math.hypot( e.touches[ 0 ].clientX - e.touches[ 1 ].clientX, e.touches[ 0 ].clientY - e.touches[ 1 ].clientY ); drag = null; }

	}, { passive: true } );
	dom.addEventListener( 'touchmove', ( e ) => {

		if ( pinch && e.touches.length === 2 ) {

			const d = Math.hypot( e.touches[ 0 ].clientX - e.touches[ 1 ].clientX, e.touches[ 0 ].clientY - e.touches[ 1 ].clientY );
			pos.addScaledVector( lookDir(), ( d - pinch ) * 0.6 );
			pinch = d;

		}

	}, { passive: true } );
	dom.addEventListener( 'touchend', () => { pinch = null; }, { passive: true } );

	function update( dt ) {

		if ( flight ) {

			flight.t += dt;
			const a = Math.min( 1, flight.t / flight.dur );
			const e = a < 0.5 ? 4 * a * a * a : 1 - Math.pow( - 2 * a + 2, 3 ) / 2;
			pos.lerpVectors( flight.p0, flight.p1, e );
			// 飞行中抬高一点，免得穿过山体
			const lift = Math.sin( a * Math.PI ) * Math.min( 160, flight.p0.distanceTo( flight.p1 ) * 0.18 );
			pos.y += lift;
			yaw = flight.y0 + ( flight.y1 - flight.y0 ) * e;
			pitch = flight.q0 + ( flight.q1 - flight.q0 ) * e;
			camera.fov = flight.f0 + ( flight.f1 - flight.f0 ) * e;
			camera.updateProjectionMatrix();
			if ( a >= 1 ) flight = null;

		} else {

			const h = Math.max( 2, pos.y - groundAt( pos.x, pos.z ) );
			const speed = ( keys.ShiftLeft || keys.ShiftRight ? 5 : 1 ) * Math.min( 260, 9 + h * 0.5 );
			lookDir( yaw, 0, _f );
			_r.set( Math.cos( yaw ), 0, Math.sin( yaw ) );
			const want = new THREE.Vector3();
			if ( keys.KeyW || keys.ArrowUp ) want.add( _f );
			if ( keys.KeyS || keys.ArrowDown ) want.sub( _f );
			if ( keys.KeyD || keys.ArrowRight ) want.add( _r );
			if ( keys.KeyA || keys.ArrowLeft ) want.sub( _r );
			if ( keys.KeyE || keys.Space ) want.y += 1;
			if ( keys.KeyQ || keys.KeyC ) want.y -= 1;
			if ( want.lengthSq() > 0 ) want.normalize().multiplyScalar( speed );
			vel.lerp( want, 1 - Math.exp( - dt * 6 ) );
			pos.addScaledVector( vel, dt );

		}

		const g = groundAt( pos.x, pos.z ) + 1.6;
		if ( pos.y < g ) pos.y = g;
		apply();

	}

	return {
		update, setView, flyTo,
		get idle() { return performance.now() - lastInput; },
		get flying() { return !! flight; },
		get yaw() { return yaw; }, get pitch() { return pitch; }
	};

}

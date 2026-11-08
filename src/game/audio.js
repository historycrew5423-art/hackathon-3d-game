import { asset } from '../core/params.js';

// 梗音效 + 程序 BGM。音效按需解码，同名音效限流，避免割草时爆音。
const SFX = {
	hit: [ 'nl-dupu.mp3', 'gugugaga-1.mp3', 'nl-gajiaosai.mp3' ],
	crit: [ 'feidudu.mp3', 'nl-gagadilashui.mp3' ],
	kill: [ 'gugugaga-2.mp3', 'feidudu-echo.mp3' ],
	hurt: [ 'daodun.mp3', 'daodun-2.mp3' ],
	skill: [ 'nl-hola-gabadie.mp3', 'naiwa-pet-laugh.wav' ],
	ult: [ 'naiwa-baoxiao.mp3' ],
	boss: [ 'shanshenbu.mp3' ],
	elite: [ 'banana-cry-1.mp3', 'banana-cry-2.mp3' ],
	level: [ 'oiia-1.mp3', 'oiia-2.mp3' ]
};
const GAP = { hit: 0.09, crit: 0.25, kill: 0.12, hurt: 0.4, skill: 0.6, level: 1, ult: 3, boss: 5, elite: 2 };
const MAXLEN = { hit: 0.45, kill: 0.6, crit: 0.9, level: 2.2, elite: 2.5 };

export function createAudio() {

	let ctx = null, master, sfxBus, bgmBus, bgmTimer = 0, step = 0;
	const buffers = {}, last = {};
	const vol = { master: 0.8, sfx: 0.9, bgm: 0.45 };

	function ensure() {

		if ( ctx ) { ctx.state === 'suspended' && ctx.resume(); return ctx; }
		ctx = new ( window.AudioContext || window.webkitAudioContext )();
		master = ctx.createGain(); master.connect( ctx.destination );
		const comp = ctx.createDynamicsCompressor(); comp.connect( master );
		sfxBus = ctx.createGain(); sfxBus.connect( comp );
		bgmBus = ctx.createGain(); bgmBus.connect( comp );
		apply();
		for ( const list of Object.values( SFX ) ) list.forEach( load );
		return ctx;

	}

	function apply() { if ( ! ctx ) return; master.gain.value = vol.master; sfxBus.gain.value = vol.sfx; bgmBus.gain.value = vol.bgm; }

	function load( f ) {

		if ( buffers[ f ] ) return buffers[ f ];
		buffers[ f ] = fetch( asset( 'audio/' + f ) ).then( ( r ) => r.arrayBuffer() ).then( ( b ) => ctx.decodeAudioData( b ) ).then( ( d ) => ( buffers[ f ] = d ) ).catch( () => null );
		return buffers[ f ];

	}

	function play( name, { rate = 1, gain = 1 } = {} ) {

		if ( ! ctx ) return;
		const now = ctx.currentTime;
		if ( last[ name ] && now - last[ name ] < ( GAP[ name ] || 0.1 ) ) return;
		last[ name ] = now;
		const list = SFX[ name ]; const buf = buffers[ list[ ( Math.random() * list.length ) | 0 ] ];
		if ( ! buf || buf.then ) return blip( name );
		const src = ctx.createBufferSource(); src.buffer = buf;
		src.playbackRate.value = rate * ( 0.92 + Math.random() * 0.16 );
		const g = ctx.createGain(); g.gain.value = gain;
		src.connect( g ).connect( sfxBus );
		const len = MAXLEN[ name ];
		src.start( now, 0, len );
		if ( len ) { g.gain.setValueAtTime( gain, now + len - 0.08 ); g.gain.linearRampToValueAtTime( 0, now + len ); }

	}

	function blip( name ) {

		const o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime;
		o.type = 'square'; o.frequency.setValueAtTime( name === 'hurt' ? 160 : 660, t ); o.frequency.exponentialRampToValueAtTime( 80, t + 0.12 );
		g.gain.setValueAtTime( 0.15, t ); g.gain.exponentialRampToValueAtTime( 0.001, t + 0.14 );
		o.connect( g ).connect( sfxBus ); o.start( t ); o.stop( t + 0.15 );

	}

	function boom( size = 1 ) {

		if ( ! ctx ) return;
		const t = ctx.currentTime, n = ctx.sampleRate * 0.4 * size, b = ctx.createBuffer( 1, n, ctx.sampleRate ), d = b.getChannelData( 0 );
		for ( let i = 0; i < n; i ++ ) d[ i ] = ( Math.random() * 2 - 1 ) * ( 1 - i / n ) ** 2;
		const s = ctx.createBufferSource(); s.buffer = b;
		const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 700;
		const g = ctx.createGain(); g.gain.value = 0.5 * size;
		s.connect( f ).connect( g ).connect( sfxBus ); s.start( t );
		const o = ctx.createOscillator(), og = ctx.createGain();
		o.frequency.setValueAtTime( 120, t ); o.frequency.exponentialRampToValueAtTime( 35, t + 0.3 );
		og.gain.setValueAtTime( 0.6 * size, t ); og.gain.exponentialRampToValueAtTime( 0.001, t + 0.35 );
		o.connect( og ).connect( sfxBus ); o.start( t ); o.stop( t + 0.4 );

	}

	// 洗脑 BGM：五声音阶 + 动次打次，boss 时加速升调
	const SCALE = [ 0, 2, 4, 7, 9, 12, 14, 16 ];
	const MEL = [ 0, 2, 4, 2, 5, 4, 2, 0, 3, 4, 5, 7, 5, 4, 2, 4 ];
	const BASS = [ 0, 0, 7, 7, 5, 5, 3, 4 ];
	let intense = 0, running = false, next = 0;
	function note( f, t, d, type, v ) {

		const o = ctx.createOscillator(), g = ctx.createGain();
		o.type = type; o.frequency.value = f;
		g.gain.setValueAtTime( 0, t ); g.gain.linearRampToValueAtTime( v, t + 0.01 ); g.gain.exponentialRampToValueAtTime( 0.001, t + d );
		o.connect( g ).connect( bgmBus ); o.start( t ); o.stop( t + d + 0.02 );

	}
	function drum( t, kick ) {

		if ( kick ) { const o = ctx.createOscillator(), g = ctx.createGain(); o.frequency.setValueAtTime( 150, t ); o.frequency.exponentialRampToValueAtTime( 40, t + 0.12 ); g.gain.setValueAtTime( 0.7, t ); g.gain.exponentialRampToValueAtTime( 0.001, t + 0.15 ); o.connect( g ).connect( bgmBus ); o.start( t ); o.stop( t + 0.16 ); return; }
		const n = ctx.sampleRate * 0.05, b = ctx.createBuffer( 1, n, ctx.sampleRate ), d = b.getChannelData( 0 );
		for ( let i = 0; i < n; i ++ ) d[ i ] = ( Math.random() * 2 - 1 ) * ( 1 - i / n );
		const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(); s.buffer = b; f.type = 'highpass'; f.frequency.value = 6000; g.gain.value = 0.25;
		s.connect( f ).connect( g ).connect( bgmBus ); s.start( t );

	}
	function sched() {

		if ( ! running ) return;
		const bpm = 132 + intense * 28, dur = 60 / bpm / 2, root = 220 * ( intense ? 1.19 : 1 );
		while ( next < ctx.currentTime + 0.25 ) {

			const i = step % 16, hz = ( s ) => root * 2 ** ( s / 12 );
			if ( i % 4 === 0 ) drum( next, true );
			if ( i % 2 === 1 ) drum( next, false );
			if ( i % 2 === 0 ) note( hz( BASS[ ( step >> 1 ) % 8 ] - 12 ), next, dur * 1.8, 'triangle', 0.32 );
			const m = MEL[ ( step + ( ( step >> 5 ) % 2 ) * 3 ) % 16 ];
			if ( ( step * 7 ) % 5 !== 0 ) note( hz( SCALE[ m % 8 ] + 12 ), next, dur * 0.9, intense ? 'sawtooth' : 'square', 0.07 );
			next += dur; step ++;

		}
		bgmTimer = setTimeout( sched, 60 );

	}

	return {
		unlock: ensure,
		play, boom,
		startBgm() { ensure(); if ( running ) return; running = true; next = ctx.currentTime + 0.1; sched(); },
		stopBgm() { running = false; clearTimeout( bgmTimer ); },
		setIntense( v ) { intense = v ? 1 : 0; },
		vol, apply
	};

}

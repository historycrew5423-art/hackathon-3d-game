import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { NOISE } from './glsl.js';

// ---------------------------------------------------------------------------
// 后期：渲染（HDR、MSAA）→ 坏像素清零 → 体积雾（mist.js 挂进来）→ 泛光 → 调色 → 色调映射 → 暗角 / 颗粒。
// 坏像素清零必须在泛光之前：一个 NaN 像素会被泛光扩散成整块黑色（雨夜城市的教训）。
// ---------------------------------------------------------------------------

const quadVS = /* glsl */ `
	varying vec2 vUv;
	void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
`;

const SanitizeShader = {
	name: 'Sanitize',
	uniforms: { tDiffuse: { value: null } },
	vertexShader: quadVS,
	fragmentShader: /* glsl */ `
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		bool bad( float x ) { return ( floatBitsToUint( x ) & 0x7f800000u ) == 0x7f800000u; }
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb;
			if ( bad( c.r ) || bad( c.g ) || bad( c.b ) ) c = vec3( 0.0 );
			gl_FragColor = vec4( clamp( c, 0.0, 200.0 ), 1.0 );
		}
	`
};

const GradeShader = {
	name: 'Grade',
	uniforms: { tDiffuse: { value: null }, uExposure: { value: 1.0 }, uContrast: { value: 1.08 }, uSat: { value: 1.1 }, uWarm: { value: 1.0 } },
	vertexShader: quadVS,
	fragmentShader: /* glsl */ `
		uniform sampler2D tDiffuse;
		uniform float uExposure, uContrast, uSat, uWarm;
		varying vec2 vUv;
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb * uExposure;
			float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
			// 暗部偏青、亮部偏暖（参考图：阴影是冷的蓝绿，受光面是金色）
			vec3 tint = mix( vec3( 0.94, 1.0, 1.05 ), vec3( 1.05, 1.0, 0.93 ), smoothstep( 0.03, 0.9, l ) );
			c *= mix( vec3( 1.0 ), tint, uWarm );
			c = mix( vec3( l ), c, uSat );
			c = exp2( ( log2( max( c, 1e-5 ) ) - log2( 0.18 ) ) * uContrast + log2( 0.18 ) );
			gl_FragColor = vec4( c, 1.0 );
		}
	`
};

const FinalShader = {
	name: 'Final',
	uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uRes: { value: new THREE.Vector2( 1, 1 ) }, uFade: { value: 1 }, uVignette: { value: 1 } },
	vertexShader: quadVS,
	fragmentShader: /* glsl */ `
		uniform sampler2D tDiffuse;
		uniform float uTime, uFade, uVignette;
		uniform vec2 uRes;
		varying vec2 vUv;
		${ NOISE }
		void main() {
			vec3 col = texture2D( tDiffuse, vUv ).rgb;
			vec2 c = vUv - 0.5;
			float aspect = uRes.x / uRes.y;
			vec2 vc = c * vec2( max( aspect, 1.0 ), max( 1.0 / aspect, 1.0 ) );
			float vig = smoothstep( 1.2, 0.35, length( vc ) );
			col *= mix( 1.0, mix( 0.78, 1.0, vig ), uVignette );
			col += ( hash12( vUv * uRes + fract( uTime * 7.13 ) * 517.0 ) - 0.5 ) * 0.012;
			gl_FragColor = vec4( col * uFade, 1.0 );
		}
	`
};

export function createPost( renderer, scene, camera, Q ) {

	const size = renderer.getDrawingBufferSize( new THREE.Vector2() );
	const depthTexture = new THREE.DepthTexture( size.x, size.y );
	depthTexture.type = THREE.FloatType;
	const target = new THREE.WebGLRenderTarget( size.x, size.y, { type: THREE.HalfFloatType, samples: Q.msaa, depthTexture } );
	const composer = new EffectComposer( renderer, target );
	const renderPass = new RenderPass( scene, camera );
	composer.addPass( renderPass );
	composer.addPass( new ShaderPass( SanitizeShader ) );
	const extra = []; // 体积雾等，main 里插入
	const bloom = new UnrealBloomPass( new THREE.Vector2( size.x / 2, size.y / 2 ), 0.14, 0.5, 3.0 );
	const grade = new ShaderPass( GradeShader );
	const output = new OutputPass();
	const final = new ShaderPass( FinalShader );
	composer.addPass( bloom );
	composer.addPass( grade );
	composer.addPass( output );
	composer.addPass( final );

	return {
		composer, bloom, grade, final, target, depthTexture,
		// 需要场景深度的效果（体积雾）放在渲染之后、清零之前：这时 readBuffer 就是刚画完的场景，带着它自己的深度贴图
		insertAfterRender( pass ) {

			composer.insertPass( pass, 1 + extra.length );
			extra.push( pass );

		},
		setSize( w, h, dpr ) {

			composer.setPixelRatio( dpr );
			composer.setSize( w, h );
			final.uniforms.uRes.value.set( w * dpr, h * dpr );
			for ( const p of extra ) p.setSize?.( w * dpr, h * dpr );

		},
		render( dt ) {

			final.uniforms.uTime.value += dt;
			composer.render( dt );

		}
	};

}

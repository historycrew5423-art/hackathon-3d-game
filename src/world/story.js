import * as THREE from 'three';
import { ringTexture } from './textures.js';
import { pathL } from '../gen/terrain.js';
import { mulberry32 } from '../gen/noise.js';

// ---------------------------------------------------------------------------
// 三打白骨精的痕迹：
// · 金圈：悟空去化斋前用金箍棒在地上画的圈，唐僧在圈里就妖魔不侵。地上一圈金光和梵文，中间升起一道淡金色的光柱。
// · 三堆白骨：白骨精先后变成村姑、老妇、老翁，三次都被悟空打死，每次只留下一堆白骨。
//   沿着山路放三处：村口、石拱桥头、白骨岭脚下（越往里越大，最后一堆旁边是一具完整的骷髅）。
// ---------------------------------------------------------------------------

function boneGeometries() {

	const r = mulberry32( 3 );
	const list = [];
	// 长骨：中间细两头粗
	const longBone = ( len ) => {

		const pts = [];
		for ( let i = 0; i <= 10; i ++ ) {

			const t = i / 10;
			const rad = 0.035 + 0.05 * Math.pow( Math.abs( t - 0.5 ) * 2, 4 );
			pts.push( new THREE.Vector2( rad, ( t - 0.5 ) * len ) );

		}

		const g = new THREE.LatheGeometry( pts, 7 );
		return g;

	};

	// 骷髅头：颅骨 + 下颌 + 两个眼窝的凹陷（用暗色的小球嵌进去）
	const skull = () => {

		const g = new THREE.SphereGeometry( 0.12, 14, 10 );
		g.scale( 1, 0.95, 1.2 );
		const jaw = new THREE.SphereGeometry( 0.08, 10, 6 );
		jaw.scale( 1.05, 0.6, 1.0 );
		jaw.translate( 0, - 0.1, 0.06 );
		return [ g, jaw ];

	};

	return { longBone, skull, r };

}

export function buildStory( { heightAt } ) {

	const group = new THREE.Group();
	group.name = 'story';
	const boneMat = new THREE.MeshStandardMaterial( { color: 0xe9e2cf, roughness: 0.55, metalness: 0 } );
	const darkMat = new THREE.MeshStandardMaterial( { color: 0x15110d, roughness: 1 } );
	const { longBone, skull, r } = boneGeometries();

	// 金圈：画在山路边一块平地上（离开场镜头约 90 米，能看到地上的金光）
	const ringAt = pathL.at( 64 );
	const rx = ringAt.x - ringAt.tz * 8, rz = ringAt.z + ringAt.tx * 8;
	const ry = heightAt( rx, rz );
	const ringMat = new THREE.MeshBasicMaterial( { map: ringTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: new THREE.Color( 4.5, 3.2, 1.4 ), fog: true } );
	const ring = new THREE.Mesh( new THREE.PlaneGeometry( 9, 9 ), ringMat );
	ring.rotation.x = - Math.PI / 2;
	ring.position.set( rx, ry + 0.12, rz );
	ring.renderOrder = 3;
	group.add( ring );
	// 光柱：上面渐隐的圆筒
	const beamMat = new THREE.ShaderMaterial( {
		transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
		uniforms: { uTime: { value: 0 } },
		vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }',
		fragmentShader: `uniform float uTime; varying vec2 vUv;
			void main(){
				float a = pow( 1.0 - vUv.y, 3.0 ) * ( 0.55 + 0.45 * sin( vUv.x * 62.83 + uTime * 0.8 ) * sin( vUv.x * 25.13 - uTime * 0.5 ) );
				gl_FragColor = vec4( vec3( 1.0, 0.78, 0.38 ) * a * 0.16, 1.0 );
			}`
	} );
	const beam = new THREE.Mesh( new THREE.CylinderGeometry( 4.2, 4.4, 12, 40, 1, true ), beamMat );
	beam.position.set( rx, ry + 6, rz );
	beam.renderOrder = 4;
	group.add( beam );
	const glow = new THREE.PointLight( 0xffc870, 60, 30, 2 );
	glow.position.set( rx, ry + 2.5, rz );
	group.add( glow );

	// 三堆白骨
	const bones = [];
	const pile = ( s, side, scale, full ) => {

		const p = pathL.at( s );
		const cx = p.x + p.tz * side * 4.2, cz = p.z - p.tx * side * 4.2;
		const cy = heightAt( cx, cz );
		const n = Math.round( 9 * scale );
		for ( let i = 0; i < n; i ++ ) {

			const g = longBone( 0.3 + r() * 0.25 );
			const m = new THREE.Matrix4().compose(
				new THREE.Vector3( cx + ( r() - 0.5 ) * 1.1 * scale, cy + 0.05 + r() * 0.08, cz + ( r() - 0.5 ) * 1.1 * scale ),
				new THREE.Quaternion().setFromEuler( new THREE.Euler( Math.PI / 2 + ( r() - 0.5 ) * 0.4, r() * 6.28, 0, 'YXZ' ) ),
				new THREE.Vector3( 1, 1, 1 )
			);
			g.applyMatrix4( m );
			bones.push( g );

		}

		for ( const g of skull() ) {

			g.applyMatrix4( new THREE.Matrix4().compose( new THREE.Vector3( cx + 0.2, cy + 0.12, cz ), new THREE.Quaternion().setFromEuler( new THREE.Euler( 0.3, r() * 6.28, 0.2 ) ), new THREE.Vector3( 1, 1, 1 ) ) );
			bones.push( g );

		}

		if ( full ) {

			// 最后一堆：一具躺着的完整骷髅（脊柱、肋骨、四肢）
			const ax = new THREE.Vector3( p.tx, 0, p.tz );
			const side3 = new THREE.Vector3( - p.tz, 0, p.tx );
			const base = new THREE.Vector3( cx + side3.x * 1.6, cy + 0.08, cz + side3.z * 1.6 );
			for ( let k = 0; k < 14; k ++ ) {

				const v = new THREE.SphereGeometry( 0.04, 6, 4 );
				v.translate( base.x + ax.x * k * 0.06, base.y, base.z + ax.z * k * 0.06 );
				bones.push( v );

			}

			for ( let k = 0; k < 6; k ++ ) for ( const sg of [ - 1, 1 ] ) {

				const rib = new THREE.TorusGeometry( 0.15, 0.012, 4, 10, Math.PI * 0.8 );
				rib.rotateY( sg > 0 ? 0 : Math.PI );
				rib.rotateX( Math.PI / 2 );
				rib.applyMatrix4( new THREE.Matrix4().makeRotationY( Math.atan2( ax.x, ax.z ) ) );
				rib.translate( base.x + ax.x * ( 0.25 + k * 0.07 ), base.y + 0.06, base.z + ax.z * ( 0.25 + k * 0.07 ) );
				bones.push( rib );

			}

			for ( const [ a, b ] of [ [ 0.86, 0.45 ], [ 0.86, - 0.45 ], [ - 0.1, 0.25 ], [ - 0.1, - 0.25 ] ] ) {

				const g = longBone( 0.75 );
				g.applyMatrix4( new THREE.Matrix4().compose(
					new THREE.Vector3( base.x + ax.x * ( a - 0.3 ) + side3.x * b * 0.5, base.y + 0.02, base.z + ax.z * ( a - 0.3 ) + side3.z * b * 0.5 ),
					new THREE.Quaternion().setFromUnitVectors( new THREE.Vector3( 0, 1, 0 ), ax.clone().addScaledVector( side3, b * 0.6 ).normalize() ),
					new THREE.Vector3( 1, 1, 1 )
				) );
				bones.push( g );

			}

			for ( const g of skull() ) {

				g.translate( base.x + ax.x * 1.0, base.y + 0.08, base.z + ax.z * 1.0 );
				bones.push( g );

			}

		}

	};

	pile( 150, 1, 1.0, false ); // 村口：村姑
	pile( 560, - 1, 1.3, false ); // 桥头：老妇
	pile( pathL.length - 30, 1, 1.6, true ); // 白骨岭脚下：老翁
	const merged = mergeAll( bones );
	const boneMesh = new THREE.Mesh( merged, boneMat );
	boneMesh.castShadow = true;
	boneMesh.receiveShadow = true;
	boneMesh.name = 'bones';
	group.add( boneMesh );
	void darkMat;

	return {
		group, ring: ring.position.clone(),
		update( t ) {

			beamMat.uniforms.uTime.value = t;
			ringMat.opacity = 0.75 + 0.25 * Math.sin( t * 1.3 );
			glow.intensity = 50 + 15 * Math.sin( t * 1.3 );
			ring.rotation.z = t * 0.05;

		}
	};

}

function mergeAll( list ) {

	let n = 0;
	const parts = list.map( ( g ) => {

		const ng = g.index ? g.toNonIndexed() : g;
		for ( const k of Object.keys( ng.attributes ) ) if ( k !== 'position' && k !== 'normal' ) ng.deleteAttribute( k );
		n += ng.attributes.position.count;
		return ng;

	} );
	const pos = new Float32Array( n * 3 ), nor = new Float32Array( n * 3 );
	let o = 0;
	for ( const g of parts ) {

		pos.set( g.attributes.position.array, o * 3 );
		nor.set( g.attributes.normal.array, o * 3 );
		o += g.attributes.position.count;

	}

	const geo = new THREE.BufferGeometry();
	geo.setAttribute( 'position', new THREE.BufferAttribute( pos, 3 ) );
	geo.setAttribute( 'normal', new THREE.BufferAttribute( nor, 3 ) );
	geo.computeBoundingSphere();
	return geo;

}

// 共用的 GLSL：哈希、值噪声、分形噪声、三向投影采样。
export const NOISE = /* glsl */ `
float hash11( float p ) { p = fract( p * 0.1031 ); p *= p + 33.33; p *= p + p; return fract( p ); }
float hash12( vec2 p ) { vec3 p3 = fract( vec3( p.xyx ) * 0.1031 ); p3 += dot( p3, p3.yzx + 33.33 ); return fract( ( p3.x + p3.y ) * p3.z ); }
float hash13( vec3 p3 ) { p3 = fract( p3 * 0.1031 ); p3 += dot( p3, p3.zyx + 31.32 ); return fract( ( p3.x + p3.y ) * p3.z ); }
vec2 hash22( vec2 p ) { vec3 p3 = fract( vec3( p.xyx ) * vec3( 0.1031, 0.1030, 0.0973 ) ); p3 += dot( p3, p3.yzx + 33.33 ); return fract( ( p3.xx + p3.yz ) * p3.zy ); }
float vnoise( vec2 p ) {
	vec2 i = floor( p ), f = fract( p );
	vec2 u = f * f * ( 3.0 - 2.0 * f );
	return mix( mix( hash12( i ), hash12( i + vec2( 1.0, 0.0 ) ), u.x ), mix( hash12( i + vec2( 0.0, 1.0 ) ), hash12( i + vec2( 1.0, 1.0 ) ), u.x ), u.y );
}
float vnoise3( vec3 p ) {
	vec3 i = floor( p ), f = fract( p );
	vec3 u = f * f * ( 3.0 - 2.0 * f );
	float a = hash13( i ), b = hash13( i + vec3( 1, 0, 0 ) ), c = hash13( i + vec3( 0, 1, 0 ) ), d = hash13( i + vec3( 1, 1, 0 ) );
	float e = hash13( i + vec3( 0, 0, 1 ) ), f1 = hash13( i + vec3( 1, 0, 1 ) ), g = hash13( i + vec3( 0, 1, 1 ) ), h = hash13( i + vec3( 1, 1, 1 ) );
	return mix( mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ), mix( mix( e, f1, u.x ), mix( g, h, u.x ), u.y ), u.z );
}
float fbm( vec2 p ) {
	float s = 0.0, a = 0.5;
	for ( int i = 0; i < 5; i ++ ) { s += a * vnoise( p ); p = mat2( 1.6, 1.2, - 1.2, 1.6 ) * p + vec2( 17.1, 9.2 ); a *= 0.5; }
	return s;
}
float fbm3( vec2 p ) {
	float s = 0.0, a = 0.5;
	for ( int i = 0; i < 3; i ++ ) { s += a * vnoise( p ); p = mat2( 1.6, 1.2, - 1.2, 1.6 ) * p + vec2( 5.3, 11.7 ); a *= 0.5; }
	return s;
}
float fbmv3( vec3 p ) {
	float s = 0.0, a = 0.5;
	for ( int i = 0; i < 4; i ++ ) { s += a * vnoise3( p ); p = p * 2.03 + vec3( 5.3, 11.7, 2.9 ); a *= 0.5; }
	return s;
}
`;

// 三向投影：按法线的权重混合三个方向的平面贴图；法线贴图用“whiteout”混合到世界空间
export const TRIPLANAR = /* glsl */ `
vec3 triW( vec3 n ) {
	vec3 w = pow( abs( n ), vec3( 4.0 ) );
	return w / ( w.x + w.y + w.z + 1e-5 );
}
vec4 triSample( sampler2D t, vec3 p, vec3 w, float s ) {
	return texture2D( t, p.zy * s ) * w.x + texture2D( t, p.xz * s ) * w.y + texture2D( t, p.xy * s ) * w.z;
}
// 返回世界空间的扰动法线
vec3 triNormal( sampler2D t, vec3 p, vec3 n, vec3 w, float s, float strength ) {
	vec3 tx = texture2D( t, p.zy * s ).xyz * 2.0 - 1.0;
	vec3 ty = texture2D( t, p.xz * s ).xyz * 2.0 - 1.0;
	vec3 tz = texture2D( t, p.xy * s ).xyz * 2.0 - 1.0;
	tx.xy *= strength; ty.xy *= strength; tz.xy *= strength;
	// whiteout 混合（Ben Golus）
	tx = vec3( tx.xy + n.zy, abs( tx.z ) * n.x );
	ty = vec3( ty.xy + n.xz, abs( ty.z ) * n.y );
	tz = vec3( tz.xy + n.xy, abs( tz.z ) * n.z );
	return normalize( tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z );
}
`;

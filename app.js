(()=>{var Tp=0,Vd=1,Rp=2;var us=1,Ip=2,hr=3,Ri=0,un=1,Gt=2,na=0,dr=1,qn=2,jd=3,Wd=4,Cp=5;var fs=100,Np=101,Pp=102,Lp=103,Dp=104,Up=200,Op=201,kp=202,Fp=203,Xd=204,qd=205,Bp=206,zp=207,Hp=208,Gp=209,Vp=210,jp=211,Wp=212,Xp=213,qp=214,$c=0,el=1,tl=2,qs=3,nl=4,il=5,al=6,sl=7,Rl=0,Kp=1,Yp=2,Ii=0,Go=1,Vo=2,jo=3,ps=4,Wo=5,Xo=6,qo=7,Cd="attached",Jp="detached",Kd=300,ms=301,ur=302,Il=303,Cl=304,vn=1e3,Dn=1001,Ks=1002,Ht=1003,Nl=1004;var gs=1005;var Tt=1006,fr=1007;var en=1008;var fn=1009,Yd=1010,Jd=1011,pr=1012,Pl=1013,bi=1014,Wt=1015,Vt=1016,Ll=1017,Dl=1018,bs=1020,Zd=35902,Qd=35899,$d=1021,eu=1022,Pn=1023,Ki=1026,ia=1027,mr=1028,Ul=1029,Ca=1030,Ol=1031;var kl=1033,Ko=33776,Yo=33777,Jo=33778,Zo=33779,Fl=35840,Bl=35841,zl=35842,Hl=35843,Gl=36196,Vl=37492,jl=37496,Wl=37488,Xl=37489,Qo=37490,ql=37491,Kl=37808,Yl=37809,Jl=37810,Zl=37811,Ql=37812,$l=37813,eh=37814,th=37815,nh=37816,ih=37817,ah=37818,sh=37819,rh=37820,oh=37821,ch=36492,lh=36494,hh=36495,dh=36283,uh=36284,$o=36285,fh=36286,ph=2200,Zp=2201,Qp=2202,Qa=2300,$a=2301,Zc=2302,Nd=2303,Ka=2400,Ya=2401,no=2402,mh=2500,$p=2501,tu=0,ec=1,gr=2,em=3200;var tc=0,tm=1,aa="",Rt="srgb",dn="srgb-linear",io="linear",Et="srgb";var Qc=7680;var nm=519,im=512,am=513,sm=514,nu=515,rm=516,om=517,iu=518,au=519,su=35044,ru=35048;var ou="300 es",Zn=2e3,ya=2001;function vb(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function yb(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Ys(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function cm(){let a=Ys("canvas");return a.style.display="block",a}var Nf={},Js=null;function ao(...a){let e="THREE."+a.shift();Js?Js("log",e,...a):console.log(e,...a)}function lm(a){let e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function tt(...a){a=lm(a);let e="THREE."+a.shift();if(Js)Js("warn",e,...a);else{let t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function at(...a){a=lm(a);let e="THREE."+a.shift();if(Js)Js("error",e,...a);else{let t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function Za(...a){let e=a.join(" ");e in Nf||(Nf[e]=!0,tt(...a))}function hm(a,e,t){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var dm={[$c]:$c,[tl]:al,[nl]:nl,[qs]:il,[el]:el,[al]:tl,[sl]:sl,[il]:qs},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pf=1234567,Qr=Math.PI/180,es=180/Math.PI;function xi(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[a&255]+bn[a>>8&255]+bn[a>>16&255]+bn[a>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function pt(a,e,t){return Math.max(e,Math.min(t,a))}function cu(a,e){return(a%e+e)%e}function _b(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Mb(a,e,t){return a!==e?(t-a)/(e-a):0}function $r(a,e,t){return(1-t)*a+t*e}function Sb(a,e,t,n){return $r(a,e,1-Math.exp(-t*n))}function wb(a,e=1){return e-Math.abs(cu(a,e*2)-e)}function Eb(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Ab(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Tb(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Rb(a,e){return a+Math.random()*(e-a)}function Ib(a){return a*(.5-Math.random())}function Cb(a){a!==void 0&&(Pf=a);let e=Pf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nb(a){return a*Qr}function Pb(a){return a*es}function Lb(a){return a>0&&Number.isInteger(a)&&2**Math.round(Math.log2(a))===a}function Db(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function lu(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Ub(a,e,t,n,i){let s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),l=s((e+n)/2),h=r((e+n)/2),u=s((e-n)/2),f=r((e-n)/2),p=s((n-e)/2),m=r((n-e)/2);switch(i){case"XYX":a.set(o*h,c*u,c*f,o*l);break;case"YZY":a.set(c*f,o*h,c*u,o*l);break;case"ZXZ":a.set(c*u,c*f,o*h,o*l);break;case"XZX":a.set(o*h,c*m,c*p,o*l);break;case"YXY":a.set(c*p,o*h,c*m,o*l);break;case"ZYZ":a.set(c*m,c*p,o*h,o*l);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gh(a){switch(a.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function hu(a,e){if(e.constructor===Float32Array)return a;let t=gh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(a/t,-1)}function du(a,e){if(e.constructor===Float32Array)return a;let t=gh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(a*t)}var Fn={DEG2RAD:Qr,RAD2DEG:es,generateUUID:xi,clamp:pt,euclideanModulo:cu,mapLinear:_b,inverseLerp:Mb,lerp:$r,damp:Sb,pingpong:wb,smoothstep:Eb,smootherstep:Ab,randInt:Tb,randFloat:Rb,randFloatSpread:Ib,seededRandom:Cb,degToRad:Nb,radToDeg:Pb,isPowerOfTwo:Lb,ceilPowerOfTwo:Db,floorPowerOfTwo:lu,setQuaternionFromProperEuler:Ub,normalize:du,denormalize:hu},de=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Nt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],f=s[r+0],p=s[r+1],m=s[r+2],b=s[r+3];if(u!==b||c!==f||l!==p||h!==m){let d=c*f+l*p+h*m+u*b;d<0&&(f=-f,p=-p,m=-m,b=-b,d=-d);let g=1-o;if(d<.9995){let v=Math.acos(d),_=Math.sin(v);g=Math.sin(g*v)/_,o=Math.sin(o*v)/_,c=c*g+f*o,l=l*g+p*o,h=h*g+m*o,u=u*g+b*o}else{c=c*g+f*o,l=l*g+p*o,h=h*g+m*o,u=u*g+b*o;let v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[r],f=s[r+1],p=s[r+2],m=s[r+3];return e[t]=o*m+h*u+c*p-l*f,e[t+1]=c*m+h*f+l*u-o*p,e[t+2]=l*m+h*p+o*f-c*u,e[t+3]=h*m-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),p=c(i/2),m=c(s/2);switch(r){case"XYZ":this._x=f*h*u+l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u+f*p*m;break;case"YZX":this._x=f*h*u+l*p*m,this._y=l*p*u+f*h*m,this._z=l*h*m-f*p*u,this._w=l*h*u-f*p*m;break;case"XZY":this._x=f*h*u-l*p*m,this._y=l*p*u-f*h*m,this._z=l*h*m+f*p*u,this._w=l*h*u+f*p*m;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(r-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(r-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-s*c,this._y=i*h+r*c+s*o-n*l,this._z=s*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),h=2*(o*t-s*i),u=2*(s*n-r*t);return this.x=t+c*l+r*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nd.copy(this).projectOnVector(e),this.sub(nd)}reflect(e){return this.sub(nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nd=new C,Lf=new Nt,ct=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l)}set(e,t,n,i,s,r,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],m=n[8],b=i[0],d=i[3],g=i[6],v=i[1],_=i[4],y=i[7],S=i[2],w=i[5],x=i[8];return s[0]=r*b+o*v+c*S,s[3]=r*d+o*_+c*w,s[6]=r*g+o*y+c*x,s[1]=l*b+h*v+u*S,s[4]=l*d+h*_+u*w,s[7]=l*g+h*y+u*x,s[2]=f*b+p*v+m*S,s[5]=f*d+p*_+m*w,s[8]=f*g+p*y+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*s*h+n*o*c+i*s*l-i*r*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*r-o*l,f=o*c-h*s,p=l*s-r*c,m=t*u+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*r)*b,e[3]=f*b,e[4]=(h*t-i*c)*b,e[5]=(i*s-o*t)*b,e[6]=p*b,e[7]=(n*c-l*t)*b,e[8]=(r*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return Za("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(id.makeScale(e,t)),this}rotate(e){return Za("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(id.makeRotation(-e)),this}translate(e,t){return Za("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(id.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},id=new ct,Df=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uf=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ob(){let a={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Et&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Et&&(i.r=Xs(i.r),i.g=Xs(i.g),i.b=Xs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===aa?io:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[dn]:{primaries:e,whitePoint:n,transfer:io,toXYZ:Df,fromXYZ:Uf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:Df,fromXYZ:Uf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),a}var ft=Ob();function qi(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Xs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var Rs,rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rs===void 0&&(Rs=Ys("canvas")),Rs.width=e.width,Rs.height=e.height;let i=Rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=qi(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(qi(t[n]/255)*255):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kb=0,Zs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(ad(i[r].image)):s.push(ad(i[r]))}else s=ad(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function ad(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?rl.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}var Fb=0,sd=new C,$t=class a extends di{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,n=Dn,i=Dn,s=Tt,r=en,o=Pn,c=fn,l=a.DEFAULT_ANISOTROPY,h=aa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=xi(),this.name="",this.source=new Zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(sd).x}get height(){return this.source.getSize(sd).y}get depth(){return this.source.getSize(sd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vn:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vn:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=Kd;$t.DEFAULT_ANISOTROPY=1;var _t=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],m=c[9],b=c[2],d=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(m-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(m+d)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(p+1)/2,S=(g+1)/2,w=(h+f)/4,x=(u+b)/4,M=(m+d)/4;return _>y&&_>S?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=w/n,s=x/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=M/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=x/s,i=M/s),this.set(n,i,s,t),this}let v=Math.sqrt((d-m)*(d-m)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(d-m)/v,this.y=(u-b)/v,this.z=(f-h)/v,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ol=class extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new $t({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Tt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Zs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},so=class extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var cl=class extends $t{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ve=class a{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,r,o,c,l,h,u,f,p,m,b,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l,h,u,f,p,m,b,d)}set(e,t,n,i,s,r,o,c,l,h,u,f,p,m,b,d){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=r,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=p,g[7]=m,g[11]=b,g[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),r=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=r*h,p=r*u,m=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+m*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=m+p*l,t[10]=r*c}else if(e.order==="YXZ"){let f=c*h,p=c*u,m=l*h,b=l*u;t[0]=f+b*o,t[4]=m*o-p,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=p*o-m,t[6]=b+f*o,t[10]=r*c}else if(e.order==="ZXY"){let f=c*h,p=c*u,m=l*h,b=l*u;t[0]=f-b*o,t[4]=-r*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=r*h,t[9]=b-f*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){let f=r*h,p=r*u,m=o*h,b=o*u;t[0]=c*h,t[4]=m*l-p,t[8]=f*l+b,t[1]=c*u,t[5]=b*l+f,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){let f=r*c,p=r*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-f*u,t[8]=m*u+p,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+m,t[10]=f-b*u}else if(e.order==="XZY"){let f=r*c,p=r*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+b,t[5]=r*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bb,e,zb)}lookAt(e,t,n){let i=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),pa.crossVectors(n,Gn),pa.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),pa.crossVectors(n,Gn)),pa.normalize(),_c.crossVectors(Gn,pa),i[0]=pa.x,i[4]=_c.x,i[8]=Gn.x,i[1]=pa.y,i[5]=_c.y,i[9]=Gn.y,i[2]=pa.z,i[6]=_c.z,i[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],m=n[2],b=n[6],d=n[10],g=n[14],v=n[3],_=n[7],y=n[11],S=n[15],w=i[0],x=i[4],M=i[8],R=i[12],A=i[1],L=i[5],D=i[9],U=i[13],N=i[2],F=i[6],W=i[10],j=i[14],H=i[3],G=i[7],q=i[11],Y=i[15];return s[0]=r*w+o*A+c*N+l*H,s[4]=r*x+o*L+c*F+l*G,s[8]=r*M+o*D+c*W+l*q,s[12]=r*R+o*U+c*j+l*Y,s[1]=h*w+u*A+f*N+p*H,s[5]=h*x+u*L+f*F+p*G,s[9]=h*M+u*D+f*W+p*q,s[13]=h*R+u*U+f*j+p*Y,s[2]=m*w+b*A+d*N+g*H,s[6]=m*x+b*L+d*F+g*G,s[10]=m*M+b*D+d*W+g*q,s[14]=m*R+b*U+d*j+g*Y,s[3]=v*w+_*A+y*N+S*H,s[7]=v*x+_*L+y*F+S*G,s[11]=v*M+_*D+y*W+S*q,s[15]=v*R+_*U+y*j+S*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],m=e[3],b=e[7],d=e[11],g=e[15],v=c*p-l*f,_=o*p-l*u,y=o*f-c*u,S=r*p-l*h,w=r*f-c*h,x=r*u-o*h;return t*(b*v-d*_+g*y)-n*(m*v-d*S+g*w)+i*(m*_-b*S+g*x)-s*(m*y-b*w+d*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(r*h-o*l)-n*(s*h-o*c)+i*(s*l-r*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],m=e[12],b=e[13],d=e[14],g=e[15],v=t*o-n*r,_=t*c-i*r,y=t*l-s*r,S=n*c-i*o,w=n*l-s*o,x=i*l-s*c,M=h*b-u*m,R=h*d-f*m,A=h*g-p*m,L=u*d-f*b,D=u*g-p*b,U=f*g-p*d,N=v*U-_*D+y*L+S*A-w*R+x*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/N;return e[0]=(o*U-c*D+l*L)*F,e[1]=(i*D-n*U-s*L)*F,e[2]=(b*x-d*w+g*S)*F,e[3]=(f*w-u*x-p*S)*F,e[4]=(c*A-r*U-l*R)*F,e[5]=(t*U-i*A+s*R)*F,e[6]=(d*y-m*x-g*_)*F,e[7]=(h*x-f*y+p*_)*F,e[8]=(r*D-o*A+l*M)*F,e[9]=(n*A-t*D-s*M)*F,e[10]=(m*w-b*y+g*v)*F,e[11]=(u*y-h*w-p*v)*F,e[12]=(o*R-r*L-c*M)*F,e[13]=(t*L-n*R+i*M)*F,e[14]=(b*_-m*S-d*v)*F,e[15]=(h*S-u*_+f*v)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,h=r+r,u=o+o,f=s*l,p=s*h,m=s*u,b=r*h,d=r*u,g=o*u,v=c*l,_=c*h,y=c*u,S=n.x,w=n.y,x=n.z;return i[0]=(1-(b+g))*S,i[1]=(p+y)*S,i[2]=(m-_)*S,i[3]=0,i[4]=(p-y)*w,i[5]=(1-(f+g))*w,i[6]=(d+v)*w,i[7]=0,i[8]=(m+_)*x,i[9]=(d-v)*x,i[10]=(1-(f+b))*x,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=Is.set(i[0],i[1],i[2]).length(),o=Is.set(i[4],i[5],i[6]).length(),c=Is.set(i[8],i[9],i[10]).length();s<0&&(r=-r),ci.copy(this);let l=1/r,h=1/o,u=1/c;return ci.elements[0]*=l,ci.elements[1]*=l,ci.elements[2]*=l,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,t.setFromRotationMatrix(ci),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,r,o=Zn,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i),m,b;if(c)m=s/(r-s),b=r*s/(r-s);else if(o===Zn)m=-(r+s)/(r-s),b=-2*r*s/(r-s);else if(o===ya)m=-r/(r-s),b=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=Zn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i),m,b;if(c)m=1/(r-s),b=r/(r-s);else if(o===Zn)m=-2/(r-s),b=-(r+s)/(r-s);else if(o===ya)m=-1/(r-s),b=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Is=new C,ci=new Ve,Bb=new C(0,0,0),zb=new C(1,1,1),pa=new C,_c=new C,Gn=new C,Of=new Ve,kf=new Nt,In=class a{constructor(e=0,t=0,n=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kf.setFromEuler(this),this.setFromQuaternion(kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";var Qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hb=0,Ff=new C,Cs=new Nt,Bi=new Ve,Mc=new C,Br=new C,Gb=new C,Vb=new Nt,Bf=new C(1,0,0),zf=new C(0,1,0),Hf=new C(0,0,1),Gf={type:"added"},jb={type:"removed"},Ns={type:"childadded",child:null},rd={type:"childremoved",child:null},It=class a extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new C,t=new In,n=new Nt,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ct}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Bf,e)}rotateY(e){return this.rotateOnAxis(zf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,t){return Ff.copy(e).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bf,e)}translateY(e){return this.translateOnAxis(zf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mc.copy(e):Mc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Br,Mc,this.up):Bi.lookAt(Mc,Br,this.up),this.quaternion.setFromRotationMatrix(Bi),i&&(Bi.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jb),rd.child=e,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,Gb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Vb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),f=r(e.skeletons),p=r(e.animations),m=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new C(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ut=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wb={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let b of e.hand.values()){let d=t.getJointPose(b,n),g=this._getHandJoint(l,b);d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=d.radius),g.visible=d!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wb)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ma={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function od(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=cu(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=od(r,s,e+1/3),this.g=od(r,s,e),this.b=od(r,s,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=um[e.toLowerCase()];return n!==void 0?this.setHex(n,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return ft.workingToColorSpace(xn.copy(this),e),Math.round(pt(xn.r*255,0,255))*65536+Math.round(pt(xn.g*255,0,255))*256+Math.round(pt(xn.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(xn.copy(this),t);let n=xn.r,i=xn.g,s=xn.b,r=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+r)/2;if(o===r)c=0,l=0;else{let u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Rt){ft.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,i=xn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ma),this.setHSL(ma.h+e,ma.s+t,ma.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ma),e.getHSL(Sc);let n=$r(ma.h,Sc.h,t),i=$r(ma.s,Sc.s,t),s=$r(ma.l,Sc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Fe;Fe.NAMES=um;var ro=class a{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ts=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},li=new C,zi=new C,cd=new C,Hi=new C,Ps=new C,Ls=new C,Vf=new C,ld=new C,hd=new C,dd=new C,ud=new _t,fd=new _t,pd=new _t,Wi=class a{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),li.subVectors(e,t),i.cross(li);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){li.subVectors(i,t),zi.subVectors(n,t),cd.subVectors(e,t);let r=li.dot(li),o=li.dot(zi),c=li.dot(cd),l=zi.dot(zi),h=zi.dot(cd),u=r*l-o*o;if(u===0)return s.set(0,0,0),null;let f=1/u,p=(l*c-o*h)*f,m=(r*h-o*c)*f;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,n,i,s,r,o,c){return this.getBarycoord(e,t,n,i,Hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Hi.x),c.addScaledVector(r,Hi.y),c.addScaledVector(o,Hi.z),c)}static getInterpolatedAttribute(e,t,n,i,s,r){return ud.setScalar(0),fd.setScalar(0),pd.setScalar(0),ud.fromBufferAttribute(e,t),fd.fromBufferAttribute(e,n),pd.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(ud,s.x),r.addScaledVector(fd,s.y),r.addScaledVector(pd,s.z),r}static isFrontFacing(e,t,n,i){return li.subVectors(n,t),zi.subVectors(e,t),li.cross(zi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),li.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return a.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,o;Ps.subVectors(i,n),Ls.subVectors(s,n),ld.subVectors(e,n);let c=Ps.dot(ld),l=Ls.dot(ld);if(c<=0&&l<=0)return t.copy(n);hd.subVectors(e,i);let h=Ps.dot(hd),u=Ls.dot(hd);if(h>=0&&u<=h)return t.copy(i);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return r=c/(c-h),t.copy(n).addScaledVector(Ps,r);dd.subVectors(e,s);let p=Ps.dot(dd),m=Ls.dot(dd);if(m>=0&&p<=m)return t.copy(s);let b=p*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Ls,o);let d=h*m-p*u;if(d<=0&&u-h>=0&&p-m>=0)return Vf.subVectors(s,i),o=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(Vf,o);let g=1/(d+b+f);return r=b*g,o=f*g,t.copy(n).addScaledVector(Ps,r).addScaledVector(Ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,hi):hi.fromBufferAttribute(s,r),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wc.copy(n.boundingBox)),wc.applyMatrix4(e.matrixWorld),this.union(wc)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Ec.subVectors(this.max,zr),Ds.subVectors(e.a,zr),Us.subVectors(e.b,zr),Os.subVectors(e.c,zr),ga.subVectors(Us,Ds),ba.subVectors(Os,Us),ja.subVectors(Ds,Os);let t=[0,-ga.z,ga.y,0,-ba.z,ba.y,0,-ja.z,ja.y,ga.z,0,-ga.x,ba.z,0,-ba.x,ja.z,0,-ja.x,-ga.y,ga.x,0,-ba.y,ba.x,0,-ja.y,ja.x,0];return!md(t,Ds,Us,Os,Ec)||(t=[1,0,0,0,1,0,0,0,1],!md(t,Ds,Us,Os,Ec))?!1:(Ac.crossVectors(ga,ba),t=[Ac.x,Ac.y,Ac.z],md(t,Ds,Us,Os,Ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Gi=[new C,new C,new C,new C,new C,new C,new C,new C],hi=new C,wc=new Cn,Ds=new C,Us=new C,Os=new C,ga=new C,ba=new C,ja=new C,zr=new C,Ec=new C,Ac=new C,Wa=new C;function md(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Wa.fromArray(a,s);let o=i.x*Math.abs(Wa.x)+i.y*Math.abs(Wa.y)+i.z*Math.abs(Wa.z),c=e.dot(Wa),l=t.dot(Wa),h=n.dot(Wa);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Xi=Xb();function Xb(){let a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let s=new Uint32Array(2048),r=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)r[c]=c<<23;r[31]=1199570944,r[32]=2147483648;for(let c=33;c<63;++c)r[c]=2147483648+(c-32<<23);r[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:o}}function qb(a){Math.abs(a)>65504&&tt("DataUtils.toHalfFloat(): Value out of range."),a=pt(a,-65504,65504),Xi.floatView[0]=a;let e=Xi.uint32View[0],t=e>>23&511;return Xi.baseTable[t]+((e&8388607)>>Xi.shiftTable[t])}function Kb(a){let e=a>>10;return Xi.uint32View[0]=Xi.mantissaTable[Xi.offsetTable[e]+(a&1023)]+Xi.exponentTable[e],Xi.floatView[0]}var _a=class{static toHalfFloat(e){return qb(e)}static fromHalfFloat(e){return Kb(e)}},Yt=new C,Tc=new de,Yb=0,ot=class extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=su,this.updateRanges=[],this.gpuType=Wt,this.version=0,this._normalizationScale=e!==void 0?gh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tc.fromBufferAttribute(this,t),Tc.applyMatrix3(e),this.setXY(t,Tc.x,Tc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):hu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):du(e,this.array)}};var oo=class extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var co=class extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Jb=new Cn,Hr=new C,gd=new C,Un=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Jb.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);let t=Hr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(gd)),this.expandByPoint(Hr.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zb=0,Jn=new Ve,bd=new It,ks=new C,Vn=new Cn,Gr=new Cn,rn=new C,rt=class a extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vb(e)?co:oo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ct().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new it(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Vn.min,Gr.min),Vn.expandByPoint(rn),rn.addVectors(Vn.max,Gr.max),Vn.expandByPoint(rn)):(Vn.expandByPoint(Gr.min),Vn.expandByPoint(Gr.max))}Vn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)rn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rn));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)rn.fromBufferAttribute(o,l),c&&(ks.fromBufferAttribute(e,l),rn.add(ks)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],c=[],l=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new C,c[R]=new C;let h=new C,u=new C,f=new C,p=new de,m=new de,b=new de,d=new C,g=new C;function v(R,A,L){l[R]=l[A]=l[L]=1,h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,L),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,A),b.fromBufferAttribute(s,L),u.sub(h),f.sub(h),m.sub(p),b.sub(p);let D=1/(m.x*b.y-b.x*m.y);isFinite(D)&&(d.copy(u).multiplyScalar(b.y).addScaledVector(f,-m.y).multiplyScalar(D),g.copy(f).multiplyScalar(m.x).addScaledVector(u,-b.x).multiplyScalar(D),o[R].add(d),o[A].add(d),o[L].add(d),c[R].add(g),c[A].add(g),c[L].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,A=_.length;R<A;++R){let L=_[R],D=L.start,U=L.count;for(let N=D,F=D+U;N<F;N+=3)v(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new C,S=new C,w=new C,x=new C;function M(R){w.fromBufferAttribute(i,R),x.copy(w);let A=o[R];y.copy(A),y.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(x,A);let D=S.dot(c[R])<0?-1:1;r.setXYZW(R,y.x,y.y,y.z,D)}for(let R=0,A=n.count;R<A;++R)l[R]&&M(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new C,s=new C,r=new C,o=new C,c=new C,l=new C,h=new C,u=new C;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),b=e.getX(f+1),d=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,b),r.fromBufferAttribute(t,d),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,d),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h),p=0,m=0;for(let b=0,d=c.length;b<d;b++){o.isInterleavedBufferAttribute?p=c[b]*o.data.stride+o.offset:p=c[b]*h;for(let g=0;g<h;g++)f[m++]=l[p++]}return new ot(f,h,u)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,h=r.length;l<h;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ns=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=su,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=jf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=jf(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function jf(a){return a.buffer._uuid===void 0&&(a.buffer._uuid=xi()),a.byteOffset===0&&a.byteLength===a.buffer.byteLength?a.buffer._uuid:a.buffer._uuid+":"+a.byteOffset+":"+a.byteLength}var Rn=new C,Ma=class a{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?gh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new a(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):hu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):du(e,this.data.array)}},xd=new C,Qb=new C,$b=new ct,jn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=xd.subVectors(n,t).cross(Qb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(xd),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$b.getNormalMatrix(e),i=this.coplanarPoint(xd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},e0=0,yn=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=dr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=qd,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qc,this.stencilZFail=Qc,this.stencilZPass=Qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let c=s[o];delete c.metadata,r.push(c)}return r}if(t){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new jn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},er=class extends yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fs,Vr=new C,Bs=new C,zs=new C,Hs=new de,jr=new de,fm=new Ve,Rc=new C,Wr=new C,Ic=new C,Wf=new de,vd=new de,Xf=new de,Sa=class extends It{constructor(e=new er){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ns(t,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new Ma(n,3,0,!1)),Fs.setAttribute("uv",new Ma(n,2,3,!1))}this.geometry=Fs,this.material=e,this.center=new de(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),fm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-zs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let r=this.center;Cc(Rc.set(-.5,-.5,0),zs,r,Bs,i,s),Cc(Wr.set(.5,-.5,0),zs,r,Bs,i,s),Cc(Ic.set(.5,.5,0),zs,r,Bs,i,s),Wf.set(0,0),vd.set(1,0),Xf.set(1,1);let o=e.ray.intersectTriangle(Rc,Wr,Ic,!1,Vr);if(o===null&&(Cc(Wr.set(-.5,.5,0),zs,r,Bs,i,s),vd.set(0,1),o=e.ray.intersectTriangle(Rc,Ic,Wr,!1,Vr),o===null))return;let c=e.ray.origin.distanceTo(Vr);c<e.near||c>e.far||t.push({distance:c,point:Vr.clone(),uv:Wi.getInterpolation(Vr,Rc,Wr,Ic,Wf,vd,Xf,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Cc(a,e,t,n,i,s){Hs.subVectors(a,t).addScalar(.5).multiply(n),i!==void 0?(jr.x=s*Hs.x-i*Hs.y,jr.y=i*Hs.x+s*Hs.y):jr.copy(Hs),a.copy(e),a.x+=jr.x,a.y+=jr.y,a.applyMatrix4(fm)}var Vi=new C,yd=new C,Nc=new C,Pc=new C,wa=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yd.copy(e).add(t).multiplyScalar(.5),Nc.copy(t).sub(e).normalize(),Pc.copy(this.origin).sub(yd);let s=e.distanceTo(t)*.5,r=-this.direction.dot(Nc),o=Pc.dot(this.direction),c=-Pc.dot(Nc),l=Pc.lengthSq(),h=Math.abs(1-r*r),u,f,p,m;if(h>0)if(u=r*c-o,f=r*o-c,m=s*h,u>=0)if(f>=-m)if(f<=m){let b=1/h;u*=b,f*=b,p=u*(u+r*f+2*o)+f*(r*u+f+2*c)+l}else f=s,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-r*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(u=Math.max(0,-(r*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+f*(f+2*c)+l);else f=r>0?-s:s,u=Math.max(0,-(r*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(yd).addScaledVector(Nc,f),p}intersectSphere(e,t){if(e.radius<0)return null;Vi.subVectors(e.center,this.origin);let n=Vi.dot(this.direction),i=Vi.dot(Vi)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,n,i,s){let r=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-r.x,f=e.y-r.y,p=e.z-r.z,m=t.x-r.x,b=t.y-r.y,d=t.z-r.z,g=n.x-r.x,v=n.y-r.y,_=n.z-r.z,y=Math.abs(c),S=Math.abs(l),w=Math.abs(h),x,M,R,A,L,D,U,N,F,W,j,H;if(y>=S&&y>=w?(R=c,D=u,F=m,H=g,c>=0?(x=l,M=h,A=f,L=p,U=b,N=d,W=v,j=_):(x=h,M=l,A=p,L=f,U=d,N=b,W=_,j=v)):S>=w?(R=l,D=f,F=b,H=v,l>=0?(x=h,M=c,A=p,L=u,U=d,N=m,W=_,j=g):(x=c,M=h,A=u,L=p,U=m,N=d,W=g,j=_)):(R=h,D=p,F=d,H=_,h>=0?(x=c,M=l,A=u,L=f,U=m,N=b,W=g,j=v):(x=l,M=c,A=f,L=u,U=b,N=m,W=v,j=g)),R===0)return null;let G=x/R,q=M/R,Y=1/R,ce=A-G*D,xe=L-q*D,Z=U-G*F,fe=N-q*F,Ie=W-G*H,ze=j-q*H,Pe=Ie*fe-ze*Z,Ye=ce*ze-xe*Ie,xt=Z*xe-fe*ce;if(i){if(Pe<0||Ye<0||xt<0)return null}else if((Pe<0||Ye<0||xt<0)&&(Pe>0||Ye>0||xt>0))return null;let Je=Pe+Ye+xt;if(Je===0)return null;let Ue=Y*(Pe*D+Ye*F+xt*H);return(Je>0?Ue<0:Ue>0)?null:this.at(Ue/Je,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class extends yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Rl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qf=new Ve,Xa=new wa,Lc=new Un,Kf=new C,Dc=new C,Uc=new C,Oc=new C,_d=new C,kc=new C,Yf=new C,Fc=new C,st=class extends It{constructor(e=new rt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){kc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(_d.fromBufferAttribute(u,e),r?kc.addScaledVector(_d,h):kc.addScaledVector(_d.sub(t),h))}t.add(kc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lc.copy(n.boundingSphere),Lc.applyMatrix4(s),Xa.copy(e.ray).recast(e.near),!(Lc.containsPoint(Xa.origin)===!1&&(Xa.intersectSphere(Lc,Kf)===null||Xa.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&(qf.copy(s).invert(),Xa.copy(e.ray).applyMatrix4(qf),!(n.boundingBox!==null&&Xa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xa)))}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,b=f.length;m<b;m++){let d=f[m],g=r[d.materialIndex],v=Math.max(d.start,p.start),_=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let y=v,S=_;y<S;y+=3){let w=o.getX(y),x=o.getX(y+1),M=o.getX(y+2);i=Bc(this,g,e,n,l,h,u,w,x,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=d.materialIndex,t.push(i))}}else{let m=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let d=m,g=b;d<g;d+=3){let v=o.getX(d),_=o.getX(d+1),y=o.getX(d+2);i=Bc(this,r,e,n,l,h,u,v,_,y),i&&(i.faceIndex=Math.floor(d/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,b=f.length;m<b;m++){let d=f[m],g=r[d.materialIndex],v=Math.max(d.start,p.start),_=Math.min(c.count,Math.min(d.start+d.count,p.start+p.count));for(let y=v,S=_;y<S;y+=3){let w=y,x=y+1,M=y+2;i=Bc(this,g,e,n,l,h,u,w,x,M),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=d.materialIndex,t.push(i))}}else{let m=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let d=m,g=b;d<g;d+=3){let v=d,_=d+1,y=d+2;i=Bc(this,r,e,n,l,h,u,v,_,y),i&&(i.faceIndex=Math.floor(d/3),t.push(i))}}}};function t0(a,e,t,n,i,s,r,o){let c;if(e.side===un?c=n.intersectTriangle(r,s,i,!0,o):c=n.intersectTriangle(i,s,r,e.side===Ri,o),c===null)return null;Fc.copy(o),Fc.applyMatrix4(a.matrixWorld);let l=t.ray.origin.distanceTo(Fc);return l<t.near||l>t.far?null:{distance:l,point:Fc.clone(),object:a}}function Bc(a,e,t,n,i,s,r,o,c,l){a.getVertexPosition(o,Dc),a.getVertexPosition(c,Uc),a.getVertexPosition(l,Oc);let h=t0(a,e,t,n,Dc,Uc,Oc,Yf);if(h){let u=new C;Wi.getBarycoord(Yf,Dc,Uc,Oc,u),i&&(h.uv=Wi.getInterpolatedAttribute(i,o,c,l,u,new de)),s&&(h.uv1=Wi.getInterpolatedAttribute(s,o,c,l,u,new de)),r&&(h.normal=Wi.getInterpolatedAttribute(r,o,c,l,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new C,materialIndex:0};Wi.getNormal(Dc,Uc,Oc,f.normal),h.face=f,h.barycoord=u}return h}var Xr=new _t,Jf=new _t,Zf=new _t,n0=new _t,Qf=new Ve,zc=new C,Md=new Un,$f=new Ve,Sd=new wa,lo=class extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Cd,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zc),this.boundingBox.expandByPoint(zc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,zc),this.boundingSphere.expandByPoint(zc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Md.copy(this.boundingSphere),Md.applyMatrix4(i),e.ray.intersectsSphere(Md)!==!1&&($f.copy(i).invert(),Sd.copy(e.ray).applyMatrix4($f),!(this.boundingBox!==null&&Sd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Cd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jp?this.bindMatrixInverse.copy(this.bindMatrix).invert():tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Jf.fromBufferAttribute(i.attributes.skinIndex,e),Zf.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Xr.copy(t),t.set(0,0,0,0)):(Xr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Xr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let r=Zf.getComponent(s);if(r!==0){let o=Jf.getComponent(s);Qf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(n0.copy(Xr).applyMatrix4(Qf),r)}}return t.isVector4&&(t.w=Xr.w),t.applyMatrix4(this.bindMatrixInverse)}},tr=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},ui=class extends $t{constructor(e=null,t=1,n=1,i,s,r,o,c,l=Ht,h=Ht,u,f){super(null,r,o,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ep=new Ve,i0=new Ve,ho=class a{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let o=e[s]?e[s].matrixWorld:i0;ep.multiplyMatrices(o,t[s]),ep.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new a(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ui(t,e,e,Pn,Wt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],r=t[s];r===void 0&&(tt("Skeleton: No bone found with UUID:",s),r=new tr),this.bones.push(r),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let r=t[i];e.bones.push(r.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},On=class extends ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new Ve,tp=new Ve,Hc=[],np=new Cn,a0=new Ve,qr=new st,Kr=new Un,fi=class extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new On(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,a0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),np.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(np)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Kr.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),e.ray.intersectsSphere(Kr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Gs),tp.multiplyMatrices(n,Gs),qr.matrixWorld=tp,qr.raycast(e,Hc);for(let r=0,o=Hc.length;r<o;r++){let c=Hc[r];c.instanceId=s,c.object=this,t.push(c)}Hc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new On(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ui(new Float32Array(i*this.count),i,this.count,mr,Wt));let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let o=this.geometry.morphTargetsRelative?1:1-r,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qa=new Un,s0=new de(.5,.5),Gc=new C,wi=class{constructor(e=new jn,t=new jn,n=new jn,i=new jn,s=new jn,r=new jn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],p=s[7],m=s[8],b=s[9],d=s[10],g=s[11],v=s[12],_=s[13],y=s[14],S=s[15];if(i[0].setComponents(l-r,p-h,g-m,S-v).normalize(),i[1].setComponents(l+r,p+h,g+m,S+v).normalize(),i[2].setComponents(l+o,p+u,g+b,S+_).normalize(),i[3].setComponents(l-o,p-u,g-b,S-_).normalize(),n)i[4].setComponents(c,f,d,y).normalize(),i[5].setComponents(l-c,p-f,g-d,S-y).normalize();else if(i[4].setComponents(l-c,p-f,g-d,S-y).normalize(),t===Zn)i[5].setComponents(l+c,p+f,g+d,S+y).normalize();else if(t===ya)i[5].setComponents(c,f,d,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qa)}intersectsSprite(e){qa.center.set(0,0,0);let t=s0.distanceTo(e.center);return qa.radius=.7071067811865476+t,qa.applyMatrix4(e.matrixWorld),this.intersectsSphere(qa)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Gc.x=i.normal.x>0?e.max.x:e.min.x,Gc.y=i.normal.y>0?e.max.y:e.min.y,Gc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ip=new Ve,ll=class a{constructor(){this.coordinateSystem=Zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];ip.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new wi),n[i].setFromProjectionMatrix(ip,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new wi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new a().copy(this)}};var nr=class extends yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},hl=new C,dl=new C,ap=new Ve,Yr=new wa,Vc=new Un,wd=new C,sp=new C,is=class extends It{constructor(e=new rt,t=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)hl.fromBufferAttribute(t,i-1),dl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hl.distanceTo(dl);e.setAttribute("lineDistance",new it(n,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vc.copy(n.boundingSphere),Vc.applyMatrix4(i),Vc.radius+=s,e.ray.intersectsSphere(Vc)===!1)return;ap.copy(i).invert(),Yr.copy(e.ray).applyMatrix4(ap);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let b=p,d=m-1;b<d;b+=l){let g=h.getX(b),v=h.getX(b+1),_=jc(this,e,Yr,c,g,v,b);_&&t.push(_)}if(this.isLineLoop){let b=h.getX(m-1),d=h.getX(p),g=jc(this,e,Yr,c,b,d,m-1);g&&t.push(g)}}else{let p=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let b=p,d=m-1;b<d;b+=l){let g=jc(this,e,Yr,c,b,b+1,b);g&&t.push(g)}if(this.isLineLoop){let b=jc(this,e,Yr,c,m-1,p,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function jc(a,e,t,n,i,s,r){let o=a.geometry.attributes.position;if(hl.fromBufferAttribute(o,i),dl.fromBufferAttribute(o,s),t.distanceSqToSegment(hl,dl,wd,sp)>n)return;wd.applyMatrix4(a.matrixWorld);let l=e.ray.origin.distanceTo(wd);if(!(l<e.near||l>e.far))return{distance:l,point:sp.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}var rp=new C,op=new C,uo=class extends is{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)rp.fromBufferAttribute(t,i),op.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rp.distanceTo(op);e.setAttribute("lineDistance",new it(n,1))}else tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fo=class extends is{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ir=class extends yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cp=new Ve,Pd=new wa,Wc=new Un,Xc=new C,po=class extends It{constructor(e=new rt,t=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wc.copy(n.boundingSphere),Wc.applyMatrix4(i),Wc.radius+=s,e.ray.intersectsSphere(Wc)===!1)return;cp.copy(i).invert(),Pd.copy(e.ray).applyMatrix4(cp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let m=f,b=p;m<b;m++){let d=l.getX(m);Xc.fromBufferAttribute(u,d),lp(Xc,d,c,i,e,t,this)}}else{let f=Math.max(0,r.start),p=Math.min(u.count,r.start+r.count);for(let m=f,b=p;m<b;m++)Xc.fromBufferAttribute(u,m),lp(Xc,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function lp(a,e,t,n,i,s,r){let o=Pd.distanceSqToPoint(a);if(o<t){let c=new C;Pd.closestPointToPoint(a,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var mo=class extends $t{constructor(e=[],t=ms,n,i,s,r,o,c,l,h){super(e,t,n,i,s,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ei=class extends $t{constructor(e,t,n,i,s,r,o,c,l){super(e,t,n,i,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var pi=class extends $t{constructor(e,t,n=bi,i,s,r,o=Ht,c=Ht,l,h=Ki,u=1){if(h!==Ki&&h!==ia)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,s,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},go=class extends pi{constructor(e,t=bi,n=ms,i,s,r=Ht,o=Ht,c,l=Ki){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,r,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},bo=class extends $t{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ai=class a extends rt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let c=[],l=[],h=[],u=[],f=0,p=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,i,r,2),m("x","z","y",1,-1,e,n,-t,i,r,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function m(b,d,g,v,_,y,S,w,x,M,R){let A=y/x,L=S/M,D=y/2,U=S/2,N=w/2,F=x+1,W=M+1,j=0,H=0,G=new C;for(let q=0;q<W;q++){let Y=q*L-U;for(let ce=0;ce<F;ce++){let xe=ce*A-D;G[b]=xe*v,G[d]=Y*_,G[g]=N,l.push(G.x,G.y,G.z),G[b]=0,G[d]=0,G[g]=w>0?1:-1,h.push(G.x,G.y,G.z),u.push(ce/x),u.push(1-q/M),j+=1}}for(let q=0;q<M;q++)for(let Y=0;Y<x;Y++){let ce=f+Y+F*q,xe=f+Y+F*(q+1),Z=f+(Y+1)+F*(q+1),fe=f+(Y+1)+F*q;c.push(ce,xe,fe),c.push(xe,Z,fe),H+=6}o.addGroup(p,H,R),p+=H,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},xo=class a extends rt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let r=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,p=2*u+f,m=n*2+s,b=i+1,d=new C,g=new C;for(let v=0;v<=m;v++){let _=0,y=0,S=0,w=0;if(v<=n){let R=v/n,A=R*Math.PI/2;y=-h-e*Math.cos(A),S=e*Math.sin(A),w=-e*Math.cos(A),_=R*u}else if(v<=n+s){let R=(v-n)/s;y=-h+R*t,S=e,w=0,_=u+R*f}else{let R=(v-n-s)/n,A=R*Math.PI/2;y=h+e*Math.sin(A),S=e*Math.cos(A),w=e*Math.sin(A),_=u+f+R*u}let x=Math.max(0,Math.min(1,_/p)),M=0;v===0?M=.5/i:v===m&&(M=-.5/i);for(let R=0;R<=i;R++){let A=R/i,L=A*Math.PI*2,D=Math.sin(L),U=Math.cos(L);g.x=-S*U,g.y=y,g.z=S*D,o.push(g.x,g.y,g.z),d.set(-S*U,w,S*D),d.normalize(),c.push(d.x,d.y,d.z),l.push(A+M,x)}if(v>0){let R=(v-1)*b;for(let A=0;A<i;A++){let L=R+A,D=R+A+1,U=v*b+A,N=v*b+A+1;r.push(L,D,U),r.push(D,N,U)}}}this.setIndex(r),this.setAttribute("position",new it(o,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},as=class a extends rt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],r=[],o=[],c=[],l=new C,h=new de;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[f]/e+1)/2,h.y=(r[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new it(r,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Wn=class a extends rt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],p=[],m=0,b=[],d=n/2,g=0;v(),r===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(p,2));function v(){let y=new C,S=new C,w=0,x=(t-e)/n;for(let M=0;M<=s;M++){let R=[],A=M/s,L=A*(t-e)+e;for(let D=0;D<=i;D++){let U=D/i,N=U*c+o,F=Math.sin(N),W=Math.cos(N);S.x=L*F,S.y=-A*n+d,S.z=L*W,u.push(S.x,S.y,S.z),y.set(F,x,W).normalize(),f.push(y.x,y.y,y.z),p.push(U,1-A),R.push(m++)}b.push(R)}for(let M=0;M<i;M++)for(let R=0;R<s;R++){let A=b[R][M],L=b[R+1][M],D=b[R+1][M+1],U=b[R][M+1];(e>0||R!==0)&&(h.push(A,L,U),w+=3),(t>0||R!==s-1)&&(h.push(L,D,U),w+=3)}l.addGroup(g,w,0),g+=w}function _(y){let S=m,w=new de,x=new C,M=0,R=y===!0?e:t,A=y===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,d*A,0),f.push(0,A,0),p.push(.5,.5),m++;let L=m;for(let D=0;D<=i;D++){let N=D/i*c+o,F=Math.cos(N),W=Math.sin(N);x.x=R*W,x.y=d*A,x.z=R*F,u.push(x.x,x.y,x.z),f.push(0,A,0),w.x=F*.5+.5,w.y=W*.5*A+.5,p.push(w.x,w.y),m++}for(let D=0;D<i;D++){let U=S+D,N=L+D;y===!0?h.push(N,N+1,U):h.push(N+1,N,U),M+=3}l.addGroup(g,M,y===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vo=class a extends Wn{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ul=class a extends rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],r=[];o(i),l(n),h(),this.setAttribute("position",new it(s,3)),this.setAttribute("normal",new it(s.slice(),3)),this.setAttribute("uv",new it(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let _=new C,y=new C,S=new C;for(let w=0;w<t.length;w+=3)p(t[w+0],_),p(t[w+1],y),p(t[w+2],S),c(_,y,S,v)}function c(v,_,y,S){let w=S+1,x=[];for(let M=0;M<=w;M++){x[M]=[];let R=v.clone().lerp(y,M/w),A=_.clone().lerp(y,M/w),L=w-M;for(let D=0;D<=L;D++)D===0&&M===w?x[M][D]=R:x[M][D]=R.clone().lerp(A,D/L)}for(let M=0;M<w;M++)for(let R=0;R<2*(w-M)-1;R++){let A=Math.floor(R/2);R%2===0?(f(x[M][A+1]),f(x[M+1][A]),f(x[M][A])):(f(x[M][A+1]),f(x[M+1][A+1]),f(x[M+1][A]))}}function l(v){let _=new C;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(v),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function h(){let v=new C;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];let y=d(v)/2/Math.PI+.5,S=g(v)/Math.PI+.5;r.push(y,1-S)}m(),u()}function u(){for(let v=0;v<r.length;v+=6){let _=r[v+0],y=r[v+2],S=r[v+4],w=Math.max(_,y,S),x=Math.min(_,y,S);w>.9&&x<.1&&(_<.2&&(r[v+0]+=1),y<.2&&(r[v+2]+=1),S<.2&&(r[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function p(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function m(){let v=new C,_=new C,y=new C,S=new C,w=new de,x=new de,M=new de;for(let R=0,A=0;R<s.length;R+=9,A+=6){v.set(s[R+0],s[R+1],s[R+2]),_.set(s[R+3],s[R+4],s[R+5]),y.set(s[R+6],s[R+7],s[R+8]),w.set(r[A+0],r[A+1]),x.set(r[A+2],r[A+3]),M.set(r[A+4],r[A+5]),S.copy(v).add(_).add(y).divideScalar(3);let L=d(S);b(w,A+0,v,L),b(x,A+2,_,L),b(M,A+4,y,L)}}function b(v,_,y,S){S<0&&v.x===1&&(r[_]=v.x-1),y.x===0&&y.z===0&&(r[_]=S/2/Math.PI+.5)}function d(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.vertices,e.indices,e.radius,e.detail)}};var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){tt("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,r;t?r=t:r=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-r,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(s-1);let h=n[i],f=n[i+1]-h,p=(r-h)/f;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let r=this.getPoint(i),o=this.getPoint(s),c=t||(r.isVector2?new de:new C);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,i=[],s=[],r=[],o=new C,c=new Ve;for(let p=0;p<=e;p++){let m=p/e;i[p]=this.getTangentAt(m,new C)}s[0]=new C,r[0]=new C;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(pt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,m))}r[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(pt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],p*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ar=class extends Xn{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new de){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fl=class extends ar{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function uu(){let a=0,e=0,t=0,n=0;function i(s,r,o,c){a=s,e=o,t=-3*s+3*r-2*o-c,n=2*s-2*r+o+c}return{initCatmullRom:function(s,r,o,c,l){i(r,o,l*(o-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,o,c,l,h,u){let f=(r-s)/l-(o-s)/(l+h)+(o-r)/h,p=(o-r)/h-(c-r)/(h+u)+(c-o)/u;f*=h,p*=h,i(r,o,f,p)},calc:function(s){let r=s*s,o=r*s;return a+e*s+t*r+n*o}}}var hp=new C,dp=new C,Ed=new uu,Ad=new uu,Td=new uu,Yi=class extends Xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){let n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e,o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(dp.subVectors(i[0],i[1]).add(i[0]),l=dp);let u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(hp.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=hp),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),p),b=Math.pow(u.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(h),p);b<1e-4&&(b=1),m<1e-4&&(m=b),d<1e-4&&(d=b),Ed.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,b,d),Ad.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,b,d),Td.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,b,d)}else this.curveType==="catmullrom"&&(Ed.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ad.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Td.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Ed.calc(c),Ad.calc(c),Td.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function up(a,e,t,n,i){let s=(n-e)*.5,r=(i-t)*.5,o=a*a,c=a*o;return(2*t-2*n+s+r)*c+(-3*t+3*n-2*s-r)*o+s*a+t}function r0(a,e){let t=1-a;return t*t*e}function o0(a,e){return 2*(1-a)*a*e}function c0(a,e){return a*a*e}function eo(a,e,t,n){return r0(a,e)+o0(a,t)+c0(a,n)}function l0(a,e){let t=1-a;return t*t*t*e}function h0(a,e){let t=1-a;return 3*t*t*a*e}function d0(a,e){return 3*(1-a)*a*a*e}function u0(a,e){return a*a*a*e}function to(a,e,t,n,i){return l0(a,e)+h0(a,t)+d0(a,n)+u0(a,i)}var yo=class extends Xn{constructor(e=new de,t=new de,n=new de,i=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new de){let n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(to(e,i.x,s.x,r.x,o.x),to(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pl=class extends Xn{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){let n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(to(e,i.x,s.x,r.x,o.x),to(e,i.y,s.y,r.y,o.y),to(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_o=class extends Xn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ml=class extends Xn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends Xn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(eo(e,i.x,s.x,r.x),eo(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},So=class extends Xn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(eo(e,i.x,s.x,r.x),eo(e,i.y,s.y,r.y),eo(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(up(o,c.x,l.x,h.x,u.x),up(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new de().fromArray(i))}return this}},gl=Object.freeze({__proto__:null,ArcCurve:fl,CatmullRomCurve3:Yi,CubicBezierCurve:yo,CubicBezierCurve3:pl,EllipseCurve:ar,LineCurve:_o,LineCurve3:ml,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:So,SplineCurve:wo}),bl=class extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let r=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new gl[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},Eo=class extends bl{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new _o(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Mo(this.currentPoint.clone(),new de(e,t),new de(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){let o=new yo(this.currentPoint.clone(),new de(e,t),new de(n,i),new de(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new wo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,r,o,c),this}absellipse(e,t,n,i,s,r,o,c){let l=new ar(e,t,n,i,s,r,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ji=class extends Eo{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Eo().fromJSON(i))}return this}};function f0(a,e,t=2){let n=e&&e.length,i=n?e[0]*t:a.length,s=pm(a,0,i,t,!0),r=[];if(!s||s.next===s.prev)return r;let o,c,l;if(n&&(s=x0(a,e,s,t)),a.length>80*t){o=a[0],c=a[1];let h=o,u=c;for(let f=t;f<i;f+=t){let p=a[f],m=a[f+1];p<o&&(o=p),m<c&&(c=m),p>h&&(h=p),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Ao(s,r,t,o,c,l,0),r}function pm(a,e,t,n,i){let s;if(i===I0(a,e,t,n)>0)for(let r=e;r<t;r+=n)s=fp(r/n|0,a[r],a[r+1],s);else for(let r=t-n;r>=e;r-=n)s=fp(r/n|0,a[r],a[r+1],s);return s&&sr(s,s.next)&&(Ro(s),s=s.next),s}function ss(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(sr(t,t.next)||zt(t.prev,t,t.next)===0)){if(Ro(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ao(a,e,t,n,i,s,r){if(!a)return;!r&&s&&S0(a,n,i,s);let o=a;for(;a.prev!==a.next;){let c=a.prev,l=a.next;if(s?m0(a,n,i,s):p0(a)){e.push(c.i,a.i,l.i),Ro(a),a=l.next,o=l.next;continue}if(a=l,a===o){r?r===1?(a=g0(ss(a),e),Ao(a,e,t,n,i,s,2)):r===2&&b0(a,e,t,n,i,s):Ao(ss(a),e,t,n,i,s,1);break}}}function p0(a){let e=a.prev,t=a,n=a.next;if(zt(e,t,n)>=0)return!1;let i=e.x,s=t.x,r=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,s,r),u=Math.min(o,c,l),f=Math.max(i,s,r),p=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=p&&Jr(i,o,s,c,r,l,m.x,m.y)&&zt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function m0(a,e,t,n){let i=a.prev,s=a,r=a.next;if(zt(i,s,r)>=0)return!1;let o=i.x,c=s.x,l=r.x,h=i.y,u=s.y,f=r.y,p=Math.min(o,c,l),m=Math.min(h,u,f),b=Math.max(o,c,l),d=Math.max(h,u,f),g=Ld(p,m,e,t,n),v=Ld(b,d,e,t,n),_=a.prevZ,y=a.nextZ;for(;_&&_.z>=g&&y&&y.z<=v;){if(_.x>=p&&_.x<=b&&_.y>=m&&_.y<=d&&_!==i&&_!==r&&Jr(o,h,c,u,l,f,_.x,_.y)&&zt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=b&&y.y>=m&&y.y<=d&&y!==i&&y!==r&&Jr(o,h,c,u,l,f,y.x,y.y)&&zt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=b&&_.y>=m&&_.y<=d&&_!==i&&_!==r&&Jr(o,h,c,u,l,f,_.x,_.y)&&zt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=b&&y.y>=m&&y.y<=d&&y!==i&&y!==r&&Jr(o,h,c,u,l,f,y.x,y.y)&&zt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function g0(a,e){let t=a;do{let n=t.prev,i=t.next.next;!sr(n,i)&&gm(n,t,t.next,i)&&To(n,i)&&To(i,n)&&(e.push(n.i,t.i,i.i),Ro(t),Ro(t.next),t=a=i),t=t.next}while(t!==a);return ss(t)}function b0(a,e,t,n,i,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&A0(r,o)){let c=bm(r,o);r=ss(r,r.next),c=ss(c,c.next),Ao(r,e,t,n,i,s,0),Ao(c,e,t,n,i,s,0);return}o=o.next}r=r.next}while(r!==a)}function x0(a,e,t,n){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s]*n,c=s<r-1?e[s+1]*n:a.length,l=pm(a,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(E0(l))}i.sort(v0);for(let s=0;s<i.length;s++)t=y0(i[s],t);return t}function v0(a,e){let t=a.x-e.x;if(t===0&&(t=a.y-e.y,t===0)){let n=(a.next.y-a.y)/(a.next.x-a.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function y0(a,e){let t=_0(a,e);if(!t)return e;let n=bm(t,a);return ss(n,n.next),ss(t,t.next)}function _0(a,e){let t=e,n=a.x,i=a.y,s=-1/0,r;if(sr(a,t))return t;do{if(sr(a,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,r=t.x<t.next.x?t:t.next,u===n))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,c=r.x,l=r.y,h=1/0;t=r;do{if(n>=t.x&&t.x>=c&&n!==t.x&&mm(i<l?n:s,i,c,l,i<l?s:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);To(t,a)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&M0(r,t)))&&(r=t,h=u)}t=t.next}while(t!==o);return r}function M0(a,e){return zt(a.prev,a,e.prev)<0&&zt(e.next,a,a.next)<0}function S0(a,e,t,n){let i=a;do i.z===0&&(i.z=Ld(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,w0(i)}function w0(a){let e,t=1;do{let n=a,i;a=null;let s=null;for(e=0;n;){e++;let r=n,o=0;for(let l=0;l<t&&(o++,r=r.nextZ,!!r);l++);let c=t;for(;o>0||c>0&&r;)o!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,o--):(i=r,r=r.nextZ,c--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;n=r}s.nextZ=null,t*=2}while(e>1);return a}function Ld(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function E0(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function mm(a,e,t,n,i,s,r,o){return(i-r)*(e-o)>=(a-r)*(s-o)&&(a-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(s-o)>=(i-r)*(n-o)}function Jr(a,e,t,n,i,s,r,o){return!(a===r&&e===o)&&mm(a,e,t,n,i,s,r,o)}function A0(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!T0(a,e)&&(To(a,e)&&To(e,a)&&R0(a,e)&&(zt(a.prev,a,e.prev)||zt(a,e.prev,e))||sr(a,e)&&zt(a.prev,a,a.next)>0&&zt(e.prev,e,e.next)>0)}function zt(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function sr(a,e){return a.x===e.x&&a.y===e.y}function gm(a,e,t,n){let i=Kc(zt(a,e,t)),s=Kc(zt(a,e,n)),r=Kc(zt(t,n,a)),o=Kc(zt(t,n,e));return!!(i!==s&&r!==o||i===0&&qc(a,t,e)||s===0&&qc(a,n,e)||r===0&&qc(t,a,n)||o===0&&qc(t,e,n))}function qc(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function Kc(a){return a>0?1:a<0?-1:0}function T0(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&gm(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function To(a,e){return zt(a.prev,a,a.next)<0?zt(a,e,a.next)>=0&&zt(a,a.prev,e)>=0:zt(a,e,a.prev)<0||zt(a,a.next,e)<0}function R0(a,e){let t=a,n=!1,i=(a.x+e.x)/2,s=(a.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function bm(a,e){let t=Dd(a.i,a.x,a.y),n=Dd(e.i,e.x,e.y),i=a.next,s=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function fp(a,e,t,n){let i=Dd(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ro(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Dd(a,e,t){return{i:a,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function I0(a,e,t,n){let i=0;for(let s=e,r=t-n;s<t;s+=n)i+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return i}var Ud=class{static triangulate(e,t,n=2){return f0(e,t,n)}},Ja=class a{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return a.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];pp(e),mp(n,e);let r=e.length;t.forEach(pp);for(let c=0;c<t.length;c++)i.push(r),r+=t[c].length,mp(n,t[c]);let o=Ud.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function pp(a){let e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function mp(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}var Ea=class a extends rt{constructor(e=new Ji([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];r(l)}this.setAttribute("position",new it(i,3)),this.setAttribute("uv",new it(s,2)),this.computeVertexNormals();function r(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:C0,_,y=!1,S,w,x,M;if(g){_=g.getSpacedPoints(h),y=!0,f=!1;let ae=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,ae),w=new C,x=new C,M=new C}f||(d=0,p=0,m=0,b=0);let R=o.extractPoints(l),A=R.shape,L=R.holes;if(!Ja.isClockWise(A)){A=A.reverse();for(let ae=0,ve=L.length;ae<ve;ae++){let ge=L[ae];Ja.isClockWise(ge)&&(L[ae]=ge.reverse())}}function U(ae){let ge=10000000000000001e-36,_e=ae[0];for(let we=1;we<=ae.length;we++){let re=we%ae.length,ue=ae[re],ye=ue.x-_e.x,Re=ue.y-_e.y,nt=ye*ye+Re*Re,O=Math.max(Math.abs(ue.x),Math.abs(ue.y),Math.abs(_e.x),Math.abs(_e.y)),Xe=ge*O*O;if(nt<=Xe){ae.splice(re,1),we--;continue}_e=ue}}U(A),L.forEach(U);let N=L.length,F=A;for(let ae=0;ae<N;ae++){let ve=L[ae];A=A.concat(ve)}function W(ae,ve,ge){return ve||at("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(ve,ge)}let j=A.length;function H(ae,ve,ge){let _e,we,re,ue=ae.x-ve.x,ye=ae.y-ve.y,Re=ge.x-ae.x,nt=ge.y-ae.y,O=ue*ue+ye*ye,Xe=ue*nt-ye*Re;if(Math.abs(Xe)>Number.EPSILON){let Ze=Math.sqrt(O),lt=Math.sqrt(Re*Re+nt*nt),me=ve.x-ye/Ze,mt=ve.y+ue/Ze,Oe=ge.x-nt/lt,Qe=ge.y+Re/lt,P=((Oe-me)*nt-(Qe-mt)*Re)/(ue*nt-ye*Re);_e=me+ue*P-ae.x,we=mt+ye*P-ae.y;let E=_e*_e+we*we;if(E<=2)return new de(_e,we);re=Math.sqrt(E/2)}else{let Ze=!1;ue>Number.EPSILON?Re>Number.EPSILON&&(Ze=!0):ue<-Number.EPSILON?Re<-Number.EPSILON&&(Ze=!0):Math.sign(ye)===Math.sign(nt)&&(Ze=!0),Ze?(_e=-ye,we=ue,re=Math.sqrt(O)):(_e=ue,we=ye,re=Math.sqrt(O/2))}return new de(_e/re,we/re)}let G=[];for(let ae=0,ve=F.length,ge=ve-1,_e=ae+1;ae<ve;ae++,ge++,_e++)ge===ve&&(ge=0),_e===ve&&(_e=0),G[ae]=H(F[ae],F[ge],F[_e]);let q=[],Y,ce=G.concat();for(let ae=0,ve=N;ae<ve;ae++){let ge=L[ae];Y=[];for(let _e=0,we=ge.length,re=we-1,ue=_e+1;_e<we;_e++,re++,ue++)re===we&&(re=0),ue===we&&(ue=0),Y[_e]=H(ge[_e],ge[re],ge[ue]);q.push(Y),ce=ce.concat(Y)}let xe;if(d===0)xe=Ja.triangulateShape(F,L);else{let ae=[],ve=[];for(let ge=0;ge<d;ge++){let _e=ge/d,we=p*Math.cos(_e*Math.PI/2),re=m*Math.sin(_e*Math.PI/2)+b;for(let ue=0,ye=F.length;ue<ye;ue++){let Re=W(F[ue],G[ue],re);Ye(Re.x,Re.y,-we),_e===0&&ae.push(Re)}for(let ue=0,ye=N;ue<ye;ue++){let Re=L[ue];Y=q[ue];let nt=[];for(let O=0,Xe=Re.length;O<Xe;O++){let Ze=W(Re[O],Y[O],re);Ye(Ze.x,Ze.y,-we),_e===0&&nt.push(Ze)}_e===0&&ve.push(nt)}}xe=Ja.triangulateShape(ae,ve)}let Z=xe.length,fe=m+b;for(let ae=0;ae<j;ae++){let ve=f?W(A[ae],ce[ae],fe):A[ae];y?(x.copy(S.normals[0]).multiplyScalar(ve.x),w.copy(S.binormals[0]).multiplyScalar(ve.y),M.copy(_[0]).add(x).add(w),Ye(M.x,M.y,M.z)):Ye(ve.x,ve.y,0)}for(let ae=1;ae<=h;ae++)for(let ve=0;ve<j;ve++){let ge=f?W(A[ve],ce[ve],fe):A[ve];y?(x.copy(S.normals[ae]).multiplyScalar(ge.x),w.copy(S.binormals[ae]).multiplyScalar(ge.y),M.copy(_[ae]).add(x).add(w),Ye(M.x,M.y,M.z)):Ye(ge.x,ge.y,u/h*ae)}for(let ae=d-1;ae>=0;ae--){let ve=ae/d,ge=p*Math.cos(ve*Math.PI/2),_e=m*Math.sin(ve*Math.PI/2)+b;for(let we=0,re=F.length;we<re;we++){let ue=W(F[we],G[we],_e);Ye(ue.x,ue.y,u+ge)}for(let we=0,re=L.length;we<re;we++){let ue=L[we];Y=q[we];for(let ye=0,Re=ue.length;ye<Re;ye++){let nt=W(ue[ye],Y[ye],_e);y?Ye(nt.x,nt.y+_[h-1].y,_[h-1].x+ge):Ye(nt.x,nt.y,u+ge)}}}Ie(),ze();function Ie(){let ae=i.length/3;if(f){let ve=0,ge=j*ve;for(let _e=0;_e<Z;_e++){let we=xe[_e];xt(we[2]+ge,we[1]+ge,we[0]+ge)}ve=h+d*2,ge=j*ve;for(let _e=0;_e<Z;_e++){let we=xe[_e];xt(we[0]+ge,we[1]+ge,we[2]+ge)}}else{for(let ve=0;ve<Z;ve++){let ge=xe[ve];xt(ge[2],ge[1],ge[0])}for(let ve=0;ve<Z;ve++){let ge=xe[ve];xt(ge[0]+j*h,ge[1]+j*h,ge[2]+j*h)}}n.addGroup(ae,i.length/3-ae,0)}function ze(){let ae=i.length/3,ve=0;Pe(F,ve),ve+=F.length;for(let ge=0,_e=L.length;ge<_e;ge++){let we=L[ge];Pe(we,ve),ve+=we.length}n.addGroup(ae,i.length/3-ae,1)}function Pe(ae,ve){let ge=ae.length;for(;--ge>=0;){let _e=ge,we=ge-1;we<0&&(we=ae.length-1);for(let re=0,ue=h+d*2;re<ue;re++){let ye=j*re,Re=j*(re+1),nt=ve+_e+ye,O=ve+we+ye,Xe=ve+we+Re,Ze=ve+_e+Re;Je(nt,O,Xe,Ze)}}}function Ye(ae,ve,ge){c.push(ae),c.push(ve),c.push(ge)}function xt(ae,ve,ge){Ue(ae),Ue(ve),Ue(ge);let _e=i.length/3,we=v.generateTopUV(n,i,_e-3,_e-2,_e-1);je(we[0]),je(we[1]),je(we[2])}function Je(ae,ve,ge,_e){Ue(ae),Ue(ve),Ue(_e),Ue(ve),Ue(ge),Ue(_e);let we=i.length/3,re=v.generateSideWallUV(n,i,we-6,we-3,we-2,we-1);je(re[0]),je(re[1]),je(re[3]),je(re[1]),je(re[2]),je(re[3])}function Ue(ae){i.push(c[ae*3+0]),i.push(c[ae*3+1]),i.push(c[ae*3+2])}function je(ae){s.push(ae.x),s.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return N0(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new gl[i.type]().fromJSON(i)),new a(n,e.options)}},C0={generateTopUV:function(a,e,t,n,i){let s=e[t*3],r=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new de(s,r),new de(o,c),new de(l,h)]},generateSideWallUV:function(a,e,t,n,i,s){let r=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],p=e[i*3+1],m=e[i*3+2],b=e[s*3],d=e[s*3+1],g=e[s*3+2];return Math.abs(o-h)<Math.abs(r-l)?[new de(r,1-c),new de(l,1-u),new de(f,1-m),new de(b,1-g)]:[new de(o,1-c),new de(h,1-u),new de(p,1-m),new de(d,1-g)]}};function N0(a,e,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){let s=a[n];t.shapes.push(s.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Io=class a extends rt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=pt(i,0,Math.PI*2);let s=[],r=[],o=[],c=[],l=[],h=1/t,u=new C,f=new de,p=new C,m=new C,b=new C,d=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:d=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=g*1,p.y=-d,p.z=g*0,b.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:b.normalize(),c.push(b.x,b.y,b.z);break;default:d=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=g*1,p.y=-d,p.z=g*0,m.copy(p),p.x+=b.x,p.y+=b.y,p.z+=b.z,p.normalize(),c.push(p.x,p.y,p.z),b.copy(m)}for(let v=0;v<=t;v++){let _=n+v*h*i,y=Math.sin(_),S=Math.cos(_);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*y,u.y=e[w].y,u.z=e[w].x*S,r.push(u.x,u.y,u.z),f.x=v/t,f.y=w/(e.length-1),o.push(f.x,f.y);let x=c[3*w+0]*y,M=c[3*w+1],R=c[3*w+0]*S;l.push(x,M,R)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,S=y,w=y+e.length,x=y+e.length+1,M=y+1;s.push(S,w,M),s.push(x,M,w)}this.setIndex(s),this.setAttribute("position",new it(r,3)),this.setAttribute("uv",new it(o,2)),this.setAttribute("normal",new it(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.points,e.segments,e.phiStart,e.phiLength)}},Co=class a extends ul{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}},mi=class a extends rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,p=[],m=[],b=[],d=[];for(let g=0;g<h;g++){let v=g*f-r;for(let _=0;_<l;_++){let y=_*u-s;m.push(y,-v,0),b.push(0,0,1),d.push(_/o),d.push(1-g/c)}}for(let g=0;g<c;g++)for(let v=0;v<o;v++){let _=v+l*g,y=v+l*(g+1),S=v+1+l*(g+1),w=v+1+l*g;p.push(_,y,w),p.push(y,S,w)}this.setIndex(p),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(b,3)),this.setAttribute("uv",new it(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},No=class a extends rt{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=e,f=(t-e)/i,p=new C,m=new de;for(let b=0;b<=i;b++){for(let d=0;d<=n;d++){let g=s+d/n*r;p.x=u*Math.cos(g),p.y=u*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=f}for(let b=0;b<i;b++){let d=b*(n+1);for(let g=0;g<n;g++){let v=g+d,_=v,y=v+n+1,S=v+n+2,w=v+1;o.push(_,y,w),o.push(y,S,w)}}this.setIndex(o),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(l,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var _n=class a extends rt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(r+o,Math.PI),l=0,h=[],u=new C,f=new C,p=[],m=[],b=[],d=[];for(let g=0;g<=n;g++){let v=[],_=g/n,y=r+_*o,S=e*Math.cos(y),w=Math.sqrt(e*e-S*S),x=0;g===0&&r===0?x=.5/t:g===n&&c===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let R=M/t,A=i+R*s;u.x=-w*Math.cos(A),u.y=S,u.z=w*Math.sin(A),m.push(u.x,u.y,u.z),f.copy(u).normalize(),b.push(f.x,f.y,f.z),d.push(R+x,1-_),v.push(l++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let _=h[g][v+1],y=h[g][v],S=h[g+1][v],w=h[g+1][v+1];(g!==0||r>0)&&p.push(_,y,w),(g!==n-1||c<Math.PI)&&p.push(y,S,w)}this.setIndex(p),this.setAttribute("position",new it(m,3)),this.setAttribute("normal",new it(b,3)),this.setAttribute("uv",new it(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rs=class a extends rt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],f=new C,p=new C,m=new C;for(let b=0;b<=n;b++){let d=r+b/n*o;for(let g=0;g<=i;g++){let v=g/i*s;p.x=(e+t*Math.cos(d))*Math.cos(v),p.y=(e+t*Math.cos(d))*Math.sin(v),p.z=t*Math.sin(d),l.push(p.x,p.y,p.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),m.subVectors(p,f).normalize(),h.push(m.x,m.y,m.z),u.push(g/i),u.push(b/n)}}for(let b=1;b<=n;b++)for(let d=1;d<=i;d++){let g=(i+1)*b+d-1,v=(i+1)*(b-1)+d-1,_=(i+1)*(b-1)+d,y=(i+1)*b+d;c.push(g,v,y),c.push(v,_,y)}this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Aa=class a extends rt{constructor(e=new So(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new C,c=new C,l=new de,h=new C,u=[],f=[],p=[],m=[];b(),this.setIndex(m),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(p,2));function b(){for(let _=0;_<t;_++)d(_);d(s===!1?t:0),v(),g()}function d(_){h=e.getPointAt(_/t,h);let y=r.normals[_],S=r.binormals[_];for(let w=0;w<=i;w++){let x=w/i*Math.PI*2,M=Math.sin(x),R=-Math.cos(x);c.x=R*y.x+M*S.x,c.y=R*y.y+M*S.y,c.z=R*y.z+M*S.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function g(){for(let _=1;_<=t;_++)for(let y=1;y<=i;y++){let S=(i+1)*(_-1)+(y-1),w=(i+1)*_+(y-1),x=(i+1)*_+y,M=(i+1)*(_-1)+y;m.push(S,w,M),m.push(w,x,M)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=i;y++)l.x=_/t,l.y=y/i,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new a(new gl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function xs(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];if(gp(i))i.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(gp(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Mn(a){let e={};for(let t=0;t<a.length;t++){let n=xs(a[t]);for(let i in n)e[i]=n[i]}return e}function gp(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function P0(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function fu(a){let e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var sa={clone:xs,merge:Mn},L0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kt=class extends yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L0,this.fragmentShader=D0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=P0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Fe().setHex(i.value);break;case"v2":this.uniforms[n].value=new de().fromArray(i.value);break;case"v3":this.uniforms[n].value=new C().fromArray(i.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ct().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ve().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rr=class extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qt=class extends yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nn=class extends qt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Za('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Za('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var or=class extends yn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Rl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xl=class extends yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=em,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vl=class extends yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function va(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Zr(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}function U0(a){function e(i,s){return a[i]-a[s]}let t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bp(a,e,t){let n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[r++]=a[o+c]}return i}function O0(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push(...r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}var Ti=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){let o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yl=class extends Ti{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ka,endingEnd:Ka}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ya:s=e,o=2*t-n;break;case no:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ya:r=e,c=2*n-t;break;case no:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),b=m*m,d=b*m,g=-f*d+2*f*b-f*m,v=(1+f)*d+(-1.5-2*f)*b+(-.5+f)*m+1,_=(-1-p)*d+(1.5+p)*b+.5*m,y=p*d-p*b;for(let S=0;S!==o;++S)s[S]=g*r[h+S]+v*r[l+S]+_*r[c+S]+y*r[u+S];return s}},Po=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)s[f]=r[l+f]*u+r[c+f]*h;return s}},_l=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Ml=class extends Ti{interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(i-t),b=1-m;for(let d=0;d!==o;++d)s[d]=r[l+d]*b+r[c+d]*m;return s}let f=o*2,p=e-1;for(let m=0;m!==o;++m){let b=r[l+m],d=r[c+m],g=p*f+m*2,v=u[g],_=u[g+1],y=e*f+m*2,S=h[y],w=h[y+1],x=F0(n,t,v,S,i);s[m]=xm(x,b,_,w,d)}return s}};function xm(a,e,t,n,i){let s=1-a;return s*s*s*e+3*s*s*a*t+3*s*a*a*n+a*a*a*i}function k0(a,e,t,n,i){let s=1-a;return 3*s*s*(t-e)+6*s*a*(n-t)+3*a*a*(i-n)}function F0(a,e,t,n,i){let s=(a-e)/(i-e);for(let r=0;r<8;r++){let o=xm(s,e,t,n,i)-a;if(Math.abs(o)<1e-10)break;let c=k0(s,e,t,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var kn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Zr(e.settings)&&(n.settings={inTangents:va(e.settings.inTangents,Array),outTangents:va(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ml(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qa:t=this.InterpolantFactoryMethodDiscrete;break;case $a:t=this.InterpolantFactoryMethodLinear;break;case Zc:t=this.InterpolantFactoryMethodSmooth;break;case Nd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return tt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return $a;case this.InterpolantFactoryMethodSmooth:return Zc;case this.InterpolantFactoryMethodBezier:return Nd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Zr(this.settings)&&(xp(this.settings.inTangents,e),xp(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Zr(this.settings)&&(vp(this.settings.inTangents,e),vp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(at("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(at("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){at("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){at("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&yb(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){at("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Zc,s=e.length-1,r=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,f=u-n,p=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[f+m]||b!==t[p+m]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];let u=o*n,f=r*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Zr(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function xp(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]+=e}function vp(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]*=e}kn.prototype.ValueTypeName="";kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=$a;var Zi=class extends kn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Qa;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends kn{constructor(e,t,n,i){super(e,t,n,i)}};Lo.prototype.ValueTypeName="color";var Qi=class extends kn{constructor(e,t,n,i){super(e,t,n,i)}};Qi.prototype.ValueTypeName="number";var Sl=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Nt.slerpFlat(s,0,r,l-o,r,l,c);return s}},$i=class extends kn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Sl(this.times,this.values,this.getValueSize(),e)}};$i.prototype.ValueTypeName="quaternion";$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends kn{constructor(e,t,n){super(e,t,n)}};ea.prototype.ValueTypeName="string";ea.prototype.ValueBufferType=Array;ea.prototype.DefaultInterpolation=Qa;ea.prototype.InterpolantFactoryMethodLinear=void 0;ea.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends kn{constructor(e,t,n,i){super(e,t,n,i)}};Ta.prototype.ValueTypeName="vector";var os=class{constructor(e="",t=-1,n=[],i=mh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=xi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(z0(n[r]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=n.length;s!==r;++s)t.push(kn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,r=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=U0(c);c=bp(c,1,h),l=bp(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new Qi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(l)}}let r=[];for(let o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function B0(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return Ta;case"color":return Lo;case"quaternion":return $i;case"bool":case"boolean":return Zi;case"string":return ea}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function z0(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=B0(a.type);if(a.times===void 0){let n=[],i=[];O0(a.keys,n,i,"value"),a.times=n,a.values=i}let t;return e.parse!==void 0?t=e.parse(a):t=new e(a.name,a.times,a.values,a.interpolation),Zr(a.settings)&&(t.settings={inTangents:va(a.settings.inTangents,Float32Array),outTangents:va(a.settings.outTangents,Float32Array)}),t}var Si={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(yp(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!yp(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function yp(a){try{let e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var cr=class{constructor(e,t,n){let i=this,s=!1,r=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},vm=new cr,gi=class{constructor(e){this.manager=e!==void 0?e:vm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},Od=class extends Error{constructor(e,t){super(e),this.response=t}},cs=class extends gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Si.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:n,onError:i});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:i});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ji[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,m=p!==0,b=0,d=new ReadableStream({start(g){v();function v(){u.read().then(({done:_,value:y})=>{if(_)g.close();else{b+=y.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:p});for(let w=0,x=h.length;w<x;w++){let M=h[w];M.onProgress&&M.onProgress(S)}g.enqueue(y),v()}},_=>{g.error(_)})}}});return new Response(d)}else throw new Od(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(m=>p.decode(m))}}}).then(l=>{Si.add(`file:${e}`,l);let h=ji[e];delete ji[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=ji[e];if(h===void 0)throw this.manager.itemError(e),l;delete ji[e];for(let u=0,f=h.length;u<f;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Vs=new WeakMap,wl=class extends gi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=Si.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let u=Vs.get(r);u===void 0&&(u=[],Vs.set(r,u)),u.push({onLoad:t,onError:i})}return r}let o=Ys("img");function c(){h(),t&&t(this);let u=Vs.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onLoad&&p.onLoad(this)}Vs.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),Si.remove(`image:${e}`);let f=Vs.get(this)||[];for(let p=0;p<f.length;p++){let m=f[p];m.onError&&m.onError(u)}Vs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Si.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Do=class extends gi{constructor(e){super(e)}load(e,t,n,i){let s=this,r=new ui,o=new cs(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let l;try{l=s.parse(c)}catch(h){i!==void 0?i(h):at(h);return}s._applyTexData(r,l),t&&t(r,l)},n,i),r}createDataTexture(e){let t=new ui;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Dn,e.wrapT=t.wrapT!==void 0?t.wrapT:Dn,e.magFilter=t.magFilter!==void 0?t.magFilter:Tt,e.minFilter=t.minFilter!==void 0?t.minFilter:Tt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=en),t.mipmapCount===1&&(e.minFilter=Tt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},ls=class extends gi{constructor(e){super(e)}load(e,t,n,i){let s=new $t,r=new wl(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Ra=class extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Rd=new Ve,_p=new C,Mp=new C,Ia=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wi,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;_p.setFromMatrixPosition(e.matrixWorld),t.position.copy(_p),Mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Rd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Rd,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===ya||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yc=new C,Jc=new Nt,Mi=new C,Uo=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yc,Jc,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,Jc,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Yc,Jc,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,Jc,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xa=new C,Sp=new de,wp=new de,Qt=class extends Uo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xa.x,xa.y).multiplyScalar(-e/xa.z),xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xa.x,xa.y).multiplyScalar(-e/xa.z)}getViewSize(e,t){return this.getViewBounds(e,Sp,wp),t.subVectors(wp,Sp)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kd=class extends Ia{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=es*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Oo=class extends Ra{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new kd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Fd=class extends Ia{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0}},hs=class extends Ra{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Qn=class extends Uo{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bd=class extends Ia{constructor(){super(new Qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ko=class extends Ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Bd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ta=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Fo=class extends rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Id=new WeakMap,Bo=class extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=Si.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{Id.has(r)===!0?(i&&i(Id.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Si.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Id.set(c,l),Si.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Si.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var js=-90,Ws=1,lr=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Qt(js,Ws,e,t);i.layers=this.layers,this.add(i);let s=new Qt(js,Ws,e,t);s.layers=this.layers,this.add(s);let r=new Qt(js,Ws,e,t);r.layers=this.layers,this.add(r);let o=new Qt(js,Ws,e,t);o.layers=this.layers,this.add(o);let c=new Qt(js,Ws,e,t);c.layers=this.layers,this.add(c);let l=new Qt(js,Ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,c]=t;for(let l of t)this.remove(l);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=b,e.setRenderTarget(n,5,i),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},El=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ds=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=H0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function H0(){this._document.hidden===!1&&this.reset()}var Al=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[s+o]=n[o];r=t}else{r+=t;let o=t/r;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){Nt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let r=this._workIndex*s;Nt.multiplyQuaternionsFlat(e,r,e,t,e,n),Nt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){let r=1-i;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){let o=t+r;e[o]=e[o]+e[n+r]*i}}},pu="\\[\\]\\.:\\/",G0=new RegExp("["+pu+"]","g"),mu="[^"+pu+"]",V0="[^"+pu.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",mu),W0=/(WCOD+)?/.source.replace("WCOD",V0),X0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mu),q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mu),K0=new RegExp("^"+j0+W0+X0+q0+"$"),Y0=["material","materials","bones","map"],zd=class{constructor(e,t,n){let i=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class a{constructor(e,t,n){this.path=t,this.parsedPath=n||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,n):new a(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(G0,"")}static parseTrackName(e){let t=K0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Y0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){at("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){at("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){at("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){at("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){at("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;at("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=zd;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,r=s.length,o=new Array(r),c={endingStart:Ka,endingEnd:Ka};for(let l=0;l!==r;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Zp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,r=s/i,o=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,r=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let r=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case $p:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulateAdditive(o);break;case mh:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(r),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,r=n===Qp;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===ph){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ya,i.endingEnd=Ya):(e?i.endingStart=this.zeroSlopeAtStart?Ya:Ka:i.endingStart=no,t?i.endingEnd=this.zeroSlopeAtEnd?Ya:Ka:i.endingEnd=no)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);let o=r.parameterPositions,c=r.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},J0=new Float32Array(1),zo=class extends di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let f=i[u],p=f.name,m=h[p];if(m!==void 0)++m.referenceCount,r[u]=m;else{if(m=r[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,p));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;m=new Al(Ct.create(n,p,b),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,p),r[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{let o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,r=this._actionsByClip,o=r[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],c.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Po(new Float32Array(2),new Float32Array(2),1,J0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,r=typeof e=="string"?os.findByName(i,e):e,o=r!==null?r.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(r!==null?n=r.blendMode:n=mh),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;let h=new Tl(this,r,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?os.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,r);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let r=s.knownActions;for(let o=0,c=r.length;o!==c;++o){let l=r[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let r in n){let o=n[r].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let r in s){let o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ep=new Ve,Ho=class{constructor(e,t,n=0,i=1/0){this.ray=new wa(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):at("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ep.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ep),this}intersectObject(e,t=!0,n=[]){return Hd(e,this,n,t),n.sort(Ap),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Hd(e[i],this,n,t);return n.sort(Ap),n}};function Ap(a,e){return a.distance-e.distance}function Hd(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=a.children;for(let r=0,o=s.length;r<o;r++)Hd(s[r],e,t,!0)}}var Gd=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};function gu(a,e,t,n){let i=Z0(n);switch(t){case $d:return a*e;case mr:return a*e/i.components*i.byteLength;case Ul:return a*e/i.components*i.byteLength;case Ca:return a*e*2/i.components*i.byteLength;case Ol:return a*e*2/i.components*i.byteLength;case eu:return a*e*3/i.components*i.byteLength;case Pn:return a*e*4/i.components*i.byteLength;case kl:return a*e*4/i.components*i.byteLength;case Ko:case Yo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Jo:case Zo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Bl:case Hl:return Math.max(a,16)*Math.max(e,8)/4;case Fl:case zl:return Math.max(a,8)*Math.max(e,8)/2;case Gl:case Vl:case Wl:case Xl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case jl:case Qo:case ql:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case eh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case th:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case nh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case ih:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case ah:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case sh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case oh:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case ch:case lh:case hh:return Math.ceil(a/4)*Math.ceil(e/4)*16;case dh:case uh:return Math.ceil(a/4)*Math.ceil(e/4)*8;case $o:case fh:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Z0(a){switch(a){case fn:case Yd:return{byteLength:1,components:1};case pr:case Jd:case Vt:return{byteLength:2,components:1};case Ll:case Dl:return{byteLength:2,components:4};case bi:case Pl:case Wt:return{byteLength:4,components:1};case Zd:case Qd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Hm(){let a=null,e=!1,t=null,n=null;function i(s,r){n=a.requestAnimationFrame(i),t(s,r)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function $0(a){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,f=a.createBuffer();a.bindBuffer(c,f),a.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=a.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=a.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=a.HALF_FLOAT:p=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=a.SHORT;else if(l instanceof Uint32Array)p=a.UNSIGNED_INT;else if(l instanceof Int32Array)p=a.INT;else if(l instanceof Int8Array)p=a.BYTE;else if(l instanceof Uint8Array)p=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(a.bindBuffer(l,o),u.length===0)a.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){let m=u[f],b=u[p];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++f,u[f]=b)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){let b=u[p];a.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:r}}var ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ux=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,px=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_x=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Sx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ix="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Xx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ev=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tv=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ov=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fv=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_v=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ov=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ey=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ny=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ry=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,py=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,by=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_y=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,My=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ay=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ty=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ny=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:ex,alphahash_pars_fragment:tx,alphamap_fragment:nx,alphamap_pars_fragment:ix,alphatest_fragment:ax,alphatest_pars_fragment:sx,aomap_fragment:rx,aomap_pars_fragment:ox,batching_pars_vertex:cx,batching_vertex:lx,begin_vertex:hx,beginnormal_vertex:dx,bsdfs:ux,iridescence_fragment:fx,bumpmap_pars_fragment:px,clipping_planes_fragment:mx,clipping_planes_pars_fragment:gx,clipping_planes_pars_vertex:bx,clipping_planes_vertex:xx,color_fragment:vx,color_pars_fragment:yx,color_pars_vertex:_x,color_vertex:Mx,common:Sx,defaultnormal_vertex:wx,displacementmap_pars_vertex:Ex,displacementmap_vertex:Ax,emissivemap_fragment:Tx,emissivemap_pars_fragment:Rx,colorspace_fragment:Ix,colorspace_pars_fragment:Cx,envmap_fragment:Nx,envmap_common_pars_fragment:Px,envmap_pars_fragment:Lx,envmap_pars_vertex:Dx,envmap_physical_pars_fragment:Wx,envmap_vertex:Ux,fog_vertex:Ox,fog_pars_vertex:kx,fog_fragment:Fx,fog_pars_fragment:Bx,gradientmap_pars_fragment:zx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Gx,lights_lambert_pars_fragment:Vx,lights_pars_begin:jx,lights_toon_fragment:Xx,lights_toon_pars_fragment:qx,lights_phong_fragment:Kx,lights_phong_pars_fragment:Yx,lights_physical_fragment:Jx,lights_physical_pars_fragment:Zx,lights_fragment_begin:Qx,lights_fragment_maps:$x,lights_fragment_end:ev,lightprobes_pars_fragment:tv,logdepthbuf_fragment:nv,logdepthbuf_pars_fragment:iv,logdepthbuf_pars_vertex:av,logdepthbuf_vertex:sv,map_fragment:rv,map_pars_fragment:ov,map_particle_fragment:cv,map_particle_pars_fragment:lv,metalnessmap_fragment:hv,metalnessmap_pars_fragment:dv,morphinstance_vertex:uv,morphcolor_vertex:fv,morphnormal_vertex:pv,morphtarget_pars_vertex:mv,morphtarget_vertex:gv,normal_fragment_begin:bv,normal_fragment_maps:xv,normal_pars_fragment:vv,normal_pars_vertex:yv,normal_vertex:_v,normalmap_pars_fragment:Mv,clearcoat_normal_fragment_begin:Sv,clearcoat_normal_fragment_maps:wv,clearcoat_pars_fragment:Ev,iridescence_pars_fragment:Av,opaque_fragment:Tv,packing:Rv,premultiplied_alpha_fragment:Iv,project_vertex:Cv,dithering_fragment:Nv,dithering_pars_fragment:Pv,roughnessmap_fragment:Lv,roughnessmap_pars_fragment:Dv,shadowmap_pars_fragment:Uv,shadowmap_pars_vertex:Ov,shadowmap_vertex:kv,shadowmask_pars_fragment:Fv,skinbase_vertex:Bv,skinning_pars_vertex:zv,skinning_vertex:Hv,skinnormal_vertex:Gv,specularmap_fragment:Vv,specularmap_pars_fragment:jv,tonemapping_fragment:Wv,tonemapping_pars_fragment:Xv,transmission_fragment:qv,transmission_pars_fragment:Kv,uv_pars_fragment:Yv,uv_pars_vertex:Jv,uv_vertex:Zv,worldpos_vertex:Qv,background_vert:$v,background_frag:ey,backgroundCube_vert:ty,backgroundCube_frag:ny,cube_vert:iy,cube_frag:ay,depth_vert:sy,depth_frag:ry,distance_vert:oy,distance_frag:cy,equirect_vert:ly,equirect_frag:hy,linedashed_vert:dy,linedashed_frag:uy,meshbasic_vert:fy,meshbasic_frag:py,meshlambert_vert:my,meshlambert_frag:gy,meshmatcap_vert:by,meshmatcap_frag:xy,meshnormal_vert:vy,meshnormal_frag:yy,meshphong_vert:_y,meshphong_frag:My,meshphysical_vert:Sy,meshphysical_frag:wy,meshtoon_vert:Ey,meshtoon_frag:Ay,points_vert:Ty,points_frag:Ry,shadow_vert:Iy,shadow_frag:Cy,sprite_vert:Ny,sprite_frag:Py},ke={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ni={basic:{uniforms:Mn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Mn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Mn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Mn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Mn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Fe(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Mn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Mn([ke.points,ke.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Mn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Mn([ke.common,ke.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Mn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Mn([ke.sprite,ke.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Mn([ke.common,ke.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Mn([ke.lights,ke.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ni.physical={uniforms:Mn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ct},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var bh={r:0,b:0,g:0},Ly=new Ve,Gm=new ct;Gm.set(-1,0,0,0,1,0,0,0,1);function Dy(a,e,t,n,i,s){let r=new Fe(0),o=i===!0?0:1,c,l,h=null,u=0,f=null;function p(v){let _=v.isScene===!0?v.background:null;if(_&&_.isTexture){let y=v.backgroundBlurriness>0;_=e.get(_,y)}return _}function m(v){let _=!1,y=p(v);y===null?d(r,o):y&&y.isColor&&(d(y,1),_=!0);let S=a.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(v,_){let y=p(_);y&&y.isCubeTexture?(l===void 0&&(l=new st(new Ai(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:xs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ly.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Gm),l.material.toneMapped=ft.getTransfer(y.colorSpace)!==Et,(h!==y||u!==y.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=a.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new st(new mi(2,2),new kt({name:"BackgroundMaterial",uniforms:xs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ft.getTransfer(y.colorSpace)!==Et,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=a.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,_){v.getRGB(bh,fu(a)),t.buffers.color.setClear(bh.r,bh.g,bh.b,_,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,_=1){r.set(v),o=_,d(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,d(r,o)},render:m,addToRenderList:b,dispose:g}}function Uy(a,e){let t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,r=!1;function o(L,D,U,N,F){let W=!1,j=u(L,N,U,D);s!==j&&(s=j,l(s.object)),W=p(L,N,U,F),W&&m(L,N,U,F),F!==null&&e.update(F,a.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,y(L,D,U,N),F!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return a.createVertexArray()}function l(L){return a.bindVertexArray(L)}function h(L){return a.deleteVertexArray(L)}function u(L,D,U,N){let F=N.wireframe===!0,W=n[D.id];W===void 0&&(W={},n[D.id]=W);let j=L.isInstancedMesh===!0?L.id:0,H=W[j];H===void 0&&(H={},W[j]=H);let G=H[U.id];G===void 0&&(G={},H[U.id]=G);let q=G[F];return q===void 0&&(q=f(c()),G[F]=q),q}function f(L){let D=[],U=[],N=[];for(let F=0;F<t;F++)D[F]=0,U[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:N,object:L,attributes:{},index:null}}function p(L,D,U,N){let F=s.attributes,W=D.attributes,j=0,H=U.getAttributes();for(let G in H)if(H[G].location>=0){let Y=F[G],ce=W[G];if(ce===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),Y===void 0||Y.attribute!==ce||ce&&Y.data!==ce.data)return!0;j++}return s.attributesNum!==j||s.index!==N}function m(L,D,U,N){let F={},W=D.attributes,j=0,H=U.getAttributes();for(let G in H)if(H[G].location>=0){let Y=W[G];Y===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor));let ce={};ce.attribute=Y,Y&&Y.data&&(ce.data=Y.data),F[G]=ce,j++}s.attributes=F,s.attributesNum=j,s.index=N}function b(){let L=s.newAttributes;for(let D=0,U=L.length;D<U;D++)L[D]=0}function d(L){g(L,0)}function g(L,D){let U=s.newAttributes,N=s.enabledAttributes,F=s.attributeDivisors;U[L]=1,N[L]===0&&(a.enableVertexAttribArray(L),N[L]=1),F[L]!==D&&(a.vertexAttribDivisor(L,D),F[L]=D)}function v(){let L=s.newAttributes,D=s.enabledAttributes;for(let U=0,N=D.length;U<N;U++)D[U]!==L[U]&&(a.disableVertexAttribArray(U),D[U]=0)}function _(L,D,U,N,F,W,j){j===!0?a.vertexAttribIPointer(L,D,U,F,W):a.vertexAttribPointer(L,D,U,N,F,W)}function y(L,D,U,N){b();let F=N.attributes,W=U.getAttributes(),j=D.defaultAttributeValues;for(let H in W){let G=W[H];if(G.location>=0){let q=F[H];if(q===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){let Y=q.normalized,ce=q.itemSize,xe=e.get(q);if(xe===void 0)continue;let Z=xe.buffer,fe=xe.type,Ie=xe.bytesPerElement,ze=fe===a.INT||fe===a.UNSIGNED_INT||q.gpuType===Pl;if(q.isInterleavedBufferAttribute){let Pe=q.data,Ye=Pe.isInterleavedBuffer===!0?Pe.stride:Pe.itemSize,xt=q.offset;if(Pe.isInstancedInterleavedBuffer||Pe.isInstancedBufferAttribute){for(let Je=0;Je<G.locationSize;Je++)g(G.location+Je,Pe.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Je=0;Je<G.locationSize;Je++)d(G.location+Je);a.bindBuffer(a.ARRAY_BUFFER,Z);for(let Je=0;Je<G.locationSize;Je++)_(G.location+Je,ce/G.locationSize,fe,Y,Ye*Ie,(xt+ce/G.locationSize*Je)*Ie,ze)}else{if(q.isInstancedBufferAttribute){for(let Pe=0;Pe<G.locationSize;Pe++)g(G.location+Pe,q.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Pe=0;Pe<G.locationSize;Pe++)d(G.location+Pe);a.bindBuffer(a.ARRAY_BUFFER,Z);for(let Pe=0;Pe<G.locationSize;Pe++)_(G.location+Pe,ce/G.locationSize,fe,Y,ce*Ie,ce/G.locationSize*Pe*Ie,ze)}}else if(j!==void 0){let Y=j[H];if(Y!==void 0)switch(Y.length){case 2:a.vertexAttrib2fv(G.location,Y);break;case 3:a.vertexAttrib3fv(G.location,Y);break;case 4:a.vertexAttrib4fv(G.location,Y);break;default:a.vertexAttrib1fv(G.location,Y)}}}}v()}function S(){R();for(let L in n){let D=n[L];for(let U in D){let N=D[U];for(let F in N){let W=N[F];for(let j in W)h(W[j].object),delete W[j];delete N[F]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let U in D){let N=D[U];for(let F in N){let W=N[F];for(let j in W)h(W[j].object),delete W[j];delete N[F]}}delete n[L.id]}function x(L){for(let D in n){let U=n[D];for(let N in U){let F=U[N];if(F[L.id]===void 0)continue;let W=F[L.id];for(let j in W)h(W[j].object),delete W[j];delete F[L.id]}}}function M(L){for(let D in n){let U=n[D],N=L.isInstancedMesh===!0?L.id:0,F=U[N];if(F!==void 0){for(let W in F){let j=F[W];for(let H in j)h(j[H].object),delete j[H];delete F[W]}delete U[N],Object.keys(U).length===0&&delete n[D]}}}function R(){A(),r=!0,s!==i&&(s=i,l(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:b,enableAttribute:d,disableUnusedAttributes:v}}function Oy(a,e,t){let n;function i(c){n=c}function s(c,l){a.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,h){h!==0&&(a.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let p=0;p<h;p++)f+=l[p];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function ky(a,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(x){return!(x!==Pn&&n.convert(x)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===Vt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==fn&&x!==Wt&&!M&&n.convert(x)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(tt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&tt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&tt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),d=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),v=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),_=a.getParameter(a.MAX_VARYING_VECTORS),y=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),S=a.getParameter(a.MAX_SAMPLES),w=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:d,maxAttributes:g,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,maxSamples:S,samples:w}}function Fy(a){let e=this,t=null,n=0,i=!1,s=!1,r=new jn,o=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let m=u.clippingPlanes,b=u.clipIntersection,d=u.clipShadows,g=a.get(u);if(!i||m===null||m.length===0||s&&!d)s?h(null):l();else{let v=s?0:n,_=v*4,y=g.clippingState||null;c.value=y,y=h(m,f,_,p);for(let S=0;S!==_;++S)y[S]=t[S];g.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,m){let b=u!==null?u.length:0,d=null;if(b!==0){if(d=c.value,m!==!0||d===null){let g=p+b*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(d===null||d.length<g)&&(d=new Float32Array(g));for(let _=0,y=p;_!==b;++_,y+=4)r.copy(u[_]).applyMatrix4(v,o),r.normal.toArray(d,y),d[y+3]=r.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,d}}var ac=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new mo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ai(5,5,5),s=new kt({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:na});s.uniforms.tEquirect.value=t;let r=new st(i,s),o=t.minFilter;return t.minFilter===en&&(t.minFilter=Tt),new lr(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}},ym=256,By=3,zy=20,Vm=256,jm=16,Hy=3,Gy=new C,Vy=new Fe,xr=class a{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lr(1,10,null),this._boxMesh=new st(new Ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:r=256,position:o=Gy}=s,c=this._renderer;this._setSize(r);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,f=c.autoClearColor,p=c.autoClearDepth,m=c.autoClearStencil,b=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,b===null&&(e.background=c.getClearColor(Vy));let d=new lr(n,i,h);return d.position.copy(o),d.update(c,e),c.autoClear=u,c.autoClearColor=f,c.autoClearDepth=p,c.autoClearStencil=m,e.background=b,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ym,lu(e))}_fromTexture(e,t){e.mapping===ms||e.mapping===ur?this._setSize(e.image.length===0?ym:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=_m(e,!1,!1),n=Math.log2(e)-By;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=_m(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let r=e.width>>t;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ms||e.mapping===ur?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Mm()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=jy(),this._integrationMaterial=Wy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/jm);for(let r=0;r<=n;r++){let o=a.lodToRoughness(r,n);if(r>n-Hy)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Vm*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Xy());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function _m(a,e,t){return new ac(a,{minFilter:en,generateMipmaps:e,type:Vt,colorSpace:dn,depthBuffer:t})}function sc(a,e,t){return new kt({name:a,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:un,blending:na,depthTest:!1,depthWrite:!1})}function jy(){return sc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Vm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Wy(){return sc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jm}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xy(){return sc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${zy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Mm(){return sc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Sm(){return sc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function qy(a){let e=new WeakMap,t=new WeakMap,n=null;function i(f,p=!1){return f==null?null:p?r(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===Il||p===Cl)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let b=new ac(m.height);return b.fromEquirectangularTexture(a,f),e.set(f,b),f.addEventListener("dispose",l),o(b.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let p=f.mapping,m=p===Il||p===Cl,b=p===ms||p===ur;if(m||b){let d=t.get(f),g=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new xr(a)),d=m?n.fromEquirectangular(f,d):n.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),d.texture;if(d!==void 0)return d.texture;{let v=f.image;return m&&v&&v.height>0||b&&v&&c(v)?(n===null&&(n=new xr(a)),d=m?n.fromEquirectangular(f):n.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),f.addEventListener("dispose",h),d.texture):null}}}return f}function o(f,p){return p===Il?f.mapping=ms:p===Cl&&(f.mapping=ur),f}function c(f){let p=0,m=6;for(let b=0;b<m;b++)f[b]!==void 0&&p++;return p===m}function l(f){let p=f.target;p.removeEventListener("dispose",l);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Ky(a){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Za("WebGLRenderer: "+n+" extension not supported."),i}}}function Yy(a,e,t,n){let i={},s=new WeakMap,r=new FinalizationRegistry(m=>delete i[m]);function o(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let d in m.attributes)e.remove(m.attributes[d]);m.removeEventListener("dispose",o),delete i[m.id],r.unregister(m);let b=s.get(m);b&&(e.remove(b),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,b){return i[b.id]!==void 0||(b.addEventListener("dispose",o),i[b.id]=new WeakRef(b),r.register(b,b.id,b),t.memory.geometries++),b}function h(m){let b=m.attributes;for(let d in b)e.update(b[d],a.ARRAY_BUFFER)}function u(m){let b=m.index,d=m.attributes.position,g=0;if(d===void 0)return;let v=b!==null?b.array.length:d.array.length/3-1,_=d.count>=65535?co:oo,y=new _(Math.ceil(v/3)*6,1),S=y.array;if(b!==null){let x=b.array;g=b.version;for(let M=0,R=0;M<v;M+=3){let A=x[M+0],L=x[M+1],D=x[M+2];S[R++]=A,S[R++]=L,S[R++]=L,S[R++]=D,S[R++]=D,S[R++]=A}}else{g=d.version;for(let x=0,M=0;x<v;x+=3){let R=x+0,A=x+1,L=x+2;S[M++]=R,S[M++]=A,S[M++]=A,S[M++]=L,S[M++]=L,S[M++]=R}}y.version=g;let w=s.get(m);w&&e.remove(w),s.set(m,y)}function f(m){let b=s.get(m);if(b){let d=m.index;d!==null&&b.version<d.version&&u(m)}else u(m);return s.get(m)}function p(){for(let m in i){let b=i[m].deref();b!==void 0&&c(b)}}return{get:l,update:h,getWireframeAttribute:f,dispose:p}}function Jy(a,e,t){let n;function i(u){n=u}let s,r;function o(u){s=u.type,r=u.bytesPerElement}function c(u,f){a.drawElements(n,f,s,u*r),t.update(f,n,1)}function l(u,f,p){p!==0&&(a.drawElementsInstanced(n,f,s,u*r,p),t.update(f,n,p))}function h(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,p);let b=0;for(let d=0;d<p;d++)b+=f[d];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Zy(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qy(a,e,t){let n=new WeakMap,i=new _t;function s(r,o,c){let l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let R=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],_=0;p===!0&&(_=1),m===!0&&(_=2),b===!0&&(_=3);let y=o.attributes.position.count*_,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*S*4*u),x=new so(w,y,S,u);x.type=Wt,x.needsUpdate=!0;let M=_*4;for(let A=0;A<u;A++){let L=d[A],D=g[A],U=v[A],N=y*S*4*A;for(let F=0;F<L.count;F++){let W=F*M;p===!0&&(i.fromBufferAttribute(L,F),w[N+W+0]=i.x,w[N+W+1]=i.y,w[N+W+2]=i.z,w[N+W+3]=0),m===!0&&(i.fromBufferAttribute(D,F),w[N+W+4]=i.x,w[N+W+5]=i.y,w[N+W+6]=i.z,w[N+W+7]=0),b===!0&&(i.fromBufferAttribute(U,F),w[N+W+8]=i.x,w[N+W+9]=i.y,w[N+W+10]=i.z,w[N+W+11]=U.itemSize===4?i.w:1)}}f={count:u,texture:x,size:new de(y,S)},n.set(o,f),o.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let p=0;for(let b=0;b<l.length;b++)p+=l[b];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(a,"morphTargetBaseInfluence",m),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:s}}function $y(a,e,t,n,i){let s=new WeakMap;function r(l){let h=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function o(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}var e_={[Go]:"LINEAR_TONE_MAPPING",[Vo]:"REINHARD_TONE_MAPPING",[jo]:"CINEON_TONE_MAPPING",[ps]:"ACES_FILMIC_TONE_MAPPING",[Xo]:"AGX_TONE_MAPPING",[qo]:"NEUTRAL_TONE_MAPPING",[Wo]:"CUSTOM_TONE_MAPPING"};function t_(a,e,t,n,i,s){let r=new Xt(e,t,{type:a,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new rt;h.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new it([0,2,0,0,2,0],2));let u=new rr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new st(h,u),p=new Qn(-1,1,1,-1,0,1),m=null,b=null,d=!1,g,v=null,_=[],y=!1;this.setSize=function(S,w){r.setSize(S,w),o!==null&&o.setSize(S,w),c!==null&&c.setSize(S,w);for(let x=0;x<_.length;x++){let M=_[x];M.setSize&&M.setSize(S,w)}},this.setEffects=function(S){_=S,y=_.length>0&&_[0].isRenderPass===!0;let w=r.width,x=r.height;_.length>0&&o===null&&(o=new Xt(w,x,{type:Vt,depthBuffer:!1,stencilBuffer:!1}),c=new Xt(w,x,{type:Vt,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&_.some(R=>R.needsDepthTexture===!0);M!==(r.depthTexture!==null)&&(M===!0&&l===null&&(l=new pi(w,x),s===!0&&(l.format=ia,l.type=bs)),r.dispose(),r.depthTexture=M?l:null,r.resolveDepthBuffer=M,r.storeMultisampledDepthBuffer=M);for(let R=0;R<_.length;R++){let A=_[R];A.setSize&&A.setSize(w,x),M&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(l)}},this.begin=function(S,w){if(d||S.toneMapping===Ii&&_.length===0)return!1;if(v=w,w!==null){let x=w.width,M=w.height;(r.width!==x||r.height!==M)&&this.setSize(x,M)}return y===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=Ii,!0},this.hasRenderPass=function(){return y},this.end=function(S,w){S.toneMapping=g,d=!0;let x=r,M=o;for(let R=0;R<_.length;R++){let A=_[R];A.enabled!==!1&&(A.render(S,M,x,w),A.needsSwap!==!1&&(x=M,M=M===o?c:o))}if(m!==S.outputColorSpace||b!==S.toneMapping){m=S.outputColorSpace,b=S.toneMapping,u.defines={},ft.getTransfer(m)===Et&&(u.defines.SRGB_TRANSFER="");let R=e_[b];R&&(u.defines[R]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,S.setRenderTarget(v),S.render(f,p),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}var Wm=new $t,Xm=new pi(1,1),qm=new go(1),Km=new so,Ym=new cl,Jm=new mo,wm=[],Em=[],Am=new Float32Array(16),Tm=new Float32Array(9),Rm=new Float32Array(4);function vr(a,e,t){let n=a[0];if(n<=0||n>0)return a;let i=e*t,s=wm[i];if(s===void 0&&(s=new Float32Array(i),wm[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function tn(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function nn(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function yh(a,e){let t=Em[e];t===void 0&&(t=new Int32Array(e),Em[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function n_(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function i_(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;a.uniform2fv(this.addr,e),nn(t,e)}}function a_(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;a.uniform3fv(this.addr,e),nn(t,e)}}function s_(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;a.uniform4fv(this.addr,e),nn(t,e)}}function r_(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Rm.set(n),a.uniformMatrix2fv(this.addr,!1,Rm),nn(t,n)}}function o_(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Tm.set(n),a.uniformMatrix3fv(this.addr,!1,Tm),nn(t,n)}}function c_(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Am.set(n),a.uniformMatrix4fv(this.addr,!1,Am),nn(t,n)}}function l_(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function h_(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;a.uniform2iv(this.addr,e),nn(t,e)}}function d_(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;a.uniform3iv(this.addr,e),nn(t,e)}}function u_(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;a.uniform4iv(this.addr,e),nn(t,e)}}function f_(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function p_(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;a.uniform2uiv(this.addr,e),nn(t,e)}}function m_(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;a.uniform3uiv(this.addr,e),nn(t,e)}}function g_(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;a.uniform4uiv(this.addr,e),nn(t,e)}}function _h(a){return a.version===0&&(a.compareFunction=au,a.needsUpdate=!0),a}function b_(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?s=_h(Xm):s=Wm,t.setTexture2D(e||s,i)}function x_(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ym,i)}function v_(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_CUBE_SHADOW?s=_h(qm):s=Jm,t.setTextureCube(e||s,i)}function y_(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Km,i)}function __(a){switch(a){case 5126:return n_;case 35664:return i_;case 35665:return a_;case 35666:return s_;case 35674:return r_;case 35675:return o_;case 35676:return c_;case 5124:case 35670:return l_;case 35667:case 35671:return h_;case 35668:case 35672:return d_;case 35669:case 35673:return u_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return x_;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return y_}}function M_(a,e){a.uniform1fv(this.addr,e)}function S_(a,e){let t=vr(e,this.size,2);a.uniform2fv(this.addr,t)}function w_(a,e){let t=vr(e,this.size,3);a.uniform3fv(this.addr,t)}function E_(a,e){let t=vr(e,this.size,4);a.uniform4fv(this.addr,t)}function A_(a,e){let t=vr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function T_(a,e){let t=vr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function R_(a,e){let t=vr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function I_(a,e){a.uniform1iv(this.addr,e)}function C_(a,e){a.uniform2iv(this.addr,e)}function N_(a,e){a.uniform3iv(this.addr,e)}function P_(a,e){a.uniform4iv(this.addr,e)}function L_(a,e){a.uniform1uiv(this.addr,e)}function D_(a,e){a.uniform2uiv(this.addr,e)}function U_(a,e){a.uniform3uiv(this.addr,e)}function O_(a,e){a.uniform4uiv(this.addr,e)}function k_(a,e,t){let n=this.cache,i=e.length,s=yh(t,i);tn(n,s)||(a.uniform1iv(this.addr,s),nn(n,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=_h(Xm):r=Wm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,s[o])}function F_(a,e,t){let n=this.cache,i=e.length,s=yh(t,i);tn(n,s)||(a.uniform1iv(this.addr,s),nn(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Ym,s[r])}function B_(a,e,t){let n=this.cache,i=e.length,s=yh(t,i);tn(n,s)||(a.uniform1iv(this.addr,s),nn(n,s));let r;this.type===a.SAMPLER_CUBE_SHADOW?r=_h(qm):r=Jm;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||r,s[o])}function z_(a,e,t){let n=this.cache,i=e.length,s=yh(t,i);tn(n,s)||(a.uniform1iv(this.addr,s),nn(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Km,s[r])}function H_(a){switch(a){case 5126:return M_;case 35664:return S_;case 35665:return w_;case 35666:return E_;case 35674:return A_;case 35675:return T_;case 35676:return R_;case 5124:case 35670:return I_;case 35667:case 35671:return C_;case 35668:case 35672:return N_;case 35669:case 35673:return P_;case 5125:return L_;case 36294:return D_;case 36295:return U_;case 36296:return O_;case 35678:case 36198:case 36298:case 36306:case 35682:return k_;case 35679:case 36299:case 36307:return F_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}var vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=__(t.type)}},yu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H_(t.type)}},_u=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},bu=/(\w+)(\])?(\[|\.)?/g;function Im(a,e){a.seq.push(e),a.map[e.id]=e}function G_(a,e,t){let n=a.name,i=n.length;for(bu.lastIndex=0;;){let s=bu.exec(n),r=bu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){Im(t,l===void 0?new vu(o,a,e):new yu(o,a,e));break}else{let u=t.map[o];u===void 0&&(u=new _u(o),Im(t,u)),t=u}}}var br=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);G_(o,c,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in t&&n.push(r)}return n}};function Cm(a,e,t){let n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}var V_=37297,j_=0;function W_(a,e){let t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}var Nm=new ct;function X_(a){ft._getMatrix(Nm,ft.workingColorSpace,a);let e=`mat3( ${Nm.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(a)){case io:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Pm(a,e,t){let n=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+W_(a.getShaderSource(e),o)}else return s}function q_(a,e){let t=X_(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var K_={[Go]:"Linear",[Vo]:"Reinhard",[jo]:"Cineon",[ps]:"ACESFilmic",[Xo]:"AgX",[qo]:"Neutral",[Wo]:"Custom"};function Y_(a,e){let t=K_[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xh=new C;function J_(){ft.getLuminanceCoefficients(xh);let a=xh.x.toFixed(4),e=xh.y.toFixed(4),t=xh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Z_(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ic).join(`
`)}function Q_(a){let e=[];for(let t in a){let n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $_(a,e){let t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=a.getActiveAttrib(e,i),r=s.name,o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function ic(a){return a!==""}function Lm(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Dm(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var eM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mu(a){return a.replace(eM,tM)}function tM(a,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Mu(t)}var nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Um(a){return a.replace(nM,iM)}function iM(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Om(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var aM={[us]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function sM(a){return aM[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var rM={[ur]:"ENVMAP_MODE_REFRACTION"};function oM(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":rM[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}var cM={[Rl]:"ENVMAP_BLENDING_MULTIPLY",[Kp]:"ENVMAP_BLENDING_MIX",[Yp]:"ENVMAP_BLENDING_ADD"};function lM(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":cM[a.combine]||"ENVMAP_BLENDING_NONE"}function hM(a,e,t,n){let i=a.getContext(),s=t.defines,r=t.vertexShader,o=t.fragmentShader,c=sM(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=oM(t),u=lM(t),f=Z_(t),p=Q_(s),m=i.createProgram(),b,d,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ic).join(`
`),b.length>0&&(b+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ic).join(`
`),d.length>0&&(d+=`
`)):(b=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ic).join(`
`),d=[Om(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?ht.tonemapping_pars_fragment:"",t.toneMapping!==Ii?Y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,q_("linearToOutputTexel",t.outputColorSpace),J_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ic).join(`
`)),r=Mu(r),r=Lm(r,t),r=Dm(r,t),o=Mu(o),o=Lm(o,t),o=Dm(o,t),r=Um(r),o=Um(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,b=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,d=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=g+b+r,_=g+d+o,y=Cm(i,i.VERTEX_SHADER,v),S=Cm(i,i.FRAGMENT_SHADER,_);i.attachShader(m,y),i.attachShader(m,S),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function w(A){if(a.debug.checkShaderErrors){let L=i.getProgramInfoLog(m)||"",D=i.getShaderInfoLog(y)||"",U=i.getShaderInfoLog(S)||"",N=L.trim(),F=D.trim(),W=U.trim(),j=!0,H=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(j=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,m,y,S);else{let G=Pm(i,y,"vertex"),q=Pm(i,S,"fragment");at("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+N+`
`+G+`
`+q)}else N!==""?tt("WebGLProgram: Program Info Log:",N):(F===""||W==="")&&(H=!1);H&&(A.diagnostics={runnable:j,programLog:N,vertexShader:{log:F,prefix:b},fragmentShader:{log:W,prefix:d}})}i.deleteShader(y),i.deleteShader(S),x=new br(i,m),M=$_(i,m)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(m,V_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=S,this}var dM=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wu(e),t.set(e,n)),n}},wu=class{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}};function uM(a){return a===Ca||a===Qo||a===$o}function fM(a,e,t,n,i,s){let r=new Qs,o=new Su,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,R,A,L,D){let U=A.fog,N=L.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||F,W),H=f[x.type],G=n.precision;x.precision!==null&&(G=n.getMaxPrecision(x.precision),G!==x.precision&&tt("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));let q=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Y=q!==void 0?q.length:0,ce=0;N.morphAttributes.position!==void 0&&(ce=1),N.morphAttributes.normal!==void 0&&(ce=2),N.morphAttributes.color!==void 0&&(ce=3);let xe,Z,fe,Ie;if(H){let B=Ni[H];xe=B.vertexShader,Z=B.fragmentShader}else{xe=x.vertexShader,Z=x.fragmentShader;let B=o.getVertexShaderStage(x),$=o.getFragmentShaderStage(x);o.update(x,B,$),fe=B.id,Ie=$.id}let ze=a.getRenderTarget(),Pe=a.state.buffers.depth.getReversed(),Ye=L.isInstancedMesh===!0,xt=L.isBatchedMesh===!0,Je=!!x.map,Ue=!!x.matcap,je=!!j,ae=je&&j.isPMREMTexture===!0,ve=!!x.aoMap,ge=!!x.lightMap,_e=!!x.bumpMap&&x.wireframe===!1,we=!!x.normalMap,re=!!x.displacementMap,ue=!!x.emissiveMap,ye=!!x.metalnessMap,Re=!!x.roughnessMap,nt=x.anisotropy>0,O=x.clearcoat>0,Xe=x.diffuseRoughness>0,Ze=x.dispersion>0,lt=x.retroreflectivity>0,me=x.iridescence>0,mt=x.sheen>0,Oe=x.transmission>0,Qe=nt&&!!x.anisotropyMap,P=O&&!!x.clearcoatMap,E=O&&!!x.clearcoatNormalMap,K=O&&!!x.clearcoatRoughnessMap,pe=Xe&&!!x.diffuseRoughnessMap,le=me&&!!x.iridescenceMap,Se=me&&!!x.iridescenceThicknessMap,Me=mt&&!!x.sheenColorMap,te=mt&&!!x.sheenRoughnessMap,he=!!x.specularMap,Ce=!!x.specularColorMap,k=!!x.specularIntensityMap,oe=Oe&&!!x.transmissionMap,ne=Oe&&!!x.thicknessMap,Ae=!!x.gradientMap,Ee=!!x.alphaMap,Ne=x.alphaTest>0,$e=!!x.alphaHash,ut=!!x.extensions,I=Ii;x.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(I=a.toneMapping);let V=ae?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,z={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:xe,fragmentShader:Z,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:Ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:xt,batchingColor:xt&&L._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&L.instanceColor!==null,instancingMorph:Ye&&L.morphTexture!==null,outputColorSpace:ze===null?a.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Je,matcap:Ue,envMap:je,envMapMode:je&&j.mapping,envMapPMREM:ae,envMapMaxLod:ae?V.length-1:null,envMapSize:ae?V[0].width:null,aoMap:ve,lightMap:ge,bumpMap:_e,normalMap:we,displacementMap:re,emissiveMap:ue,normalMapObjectSpace:we&&x.normalMapType===tm,normalMapTangentSpace:we&&x.normalMapType===tc,packedNormalMap:we&&x.normalMapType===tc&&uM(x.normalMap.format),metalnessMap:ye,roughnessMap:Re,anisotropy:nt,anisotropyMap:Qe,clearcoat:O,clearcoatMap:P,clearcoatNormalMap:E,clearcoatRoughnessMap:K,diffuseRoughness:Xe,diffuseRoughnessMap:pe,dispersion:Ze,retroreflection:lt,iridescence:me,iridescenceMap:le,iridescenceThicknessMap:Se,sheen:mt,sheenColorMap:Me,sheenRoughnessMap:te,specularMap:he,specularColorMap:Ce,specularIntensityMap:k,transmission:Oe,transmissionMap:oe,thicknessMap:ne,gradientMap:Ae,opaque:x.transparent===!1&&x.blending===dr&&x.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Ne,alphaHash:$e,combine:x.combine,mapUv:Je&&p(x.map.channel),aoMapUv:ve&&p(x.aoMap.channel),lightMapUv:ge&&p(x.lightMap.channel),bumpMapUv:_e&&p(x.bumpMap.channel),normalMapUv:we&&p(x.normalMap.channel),displacementMapUv:re&&p(x.displacementMap.channel),emissiveMapUv:ue&&p(x.emissiveMap.channel),metalnessMapUv:ye&&p(x.metalnessMap.channel),roughnessMapUv:Re&&p(x.roughnessMap.channel),anisotropyMapUv:Qe&&p(x.anisotropyMap.channel),clearcoatMapUv:P&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&p(x.diffuseRoughnessMap.channel),iridescenceMapUv:le&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:te&&p(x.sheenRoughnessMap.channel),specularMapUv:he&&p(x.specularMap.channel),specularColorMapUv:Ce&&p(x.specularColorMap.channel),specularIntensityMapUv:k&&p(x.specularIntensityMap.channel),transmissionMapUv:oe&&p(x.transmissionMap.channel),thicknessMapUv:ne&&p(x.thicknessMap.channel),alphaMapUv:Ee&&p(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(we||nt),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Je||Ee),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&we===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Pe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ce,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.filter(B=>B.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:I,decodeVideoTexture:Je&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===Et,decodeVideoTextureEmissive:ue&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===Et,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gt,flipSided:x.side===un,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ut&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&x.extensions.multiDraw===!0||xt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return z.vertexUv1s=c.has(1),z.vertexUv2s=c.has(2),z.vertexUv3s=c.has(3),c.clear(),z}function b(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)M.push(R),M.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(d(M,x),g(M,x),M.push(a.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function d(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function g(x,M){r.disableAll(),M.instancing&&r.enable(0),M.instancingColor&&r.enable(1),M.instancingMorph&&r.enable(2),M.matcap&&r.enable(3),M.envMap&&r.enable(4),M.normalMapObjectSpace&&r.enable(5),M.normalMapTangentSpace&&r.enable(6),M.clearcoat&&r.enable(7),M.iridescence&&r.enable(8),M.alphaTest&&r.enable(9),M.vertexColors&&r.enable(10),M.vertexAlphas&&r.enable(11),M.vertexUv1s&&r.enable(12),M.vertexUv2s&&r.enable(13),M.vertexUv3s&&r.enable(14),M.vertexTangents&&r.enable(15),M.anisotropy&&r.enable(16),M.alphaHash&&r.enable(17),M.batching&&r.enable(18),M.dispersion&&r.enable(19),M.retroreflection&&r.enable(24),M.diffuseRoughness&&r.enable(25),M.batchingColor&&r.enable(20),M.gradientMap&&r.enable(21),M.packedNormalMap&&r.enable(22),M.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reversedDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),M.numLightProbeGrids>0&&r.enable(22),M.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function v(x){let M=f[x.type],R;if(M){let A=Ni[M];R=sa.clone(A.uniforms)}else R=x.uniforms;return R}function _(x,M){let R=h.get(M);return R!==void 0?++R.usedTimes:(R=new hM(a,M,x,i),l.push(R),h.set(M,R)),R}function y(x){if(--x.usedTimes===0){let M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:v,acquireProgram:_,releaseProgram:y,releaseShaderCache:S,programs:l,dispose:w}}function pM(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,c){a.get(r)[o]=c}function s(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function mM(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function km(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Fm(){let a=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,m,b,d,g){let v=a[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:m,materialVariant:r(f),groupOrder:b,renderOrder:f.renderOrder,z:d,group:g},a[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=m,v.materialVariant=r(f),v.groupOrder=b,v.renderOrder=f.renderOrder,v.z=d,v.group=g),e++,v}function c(f,p,m,b,d,g,v){v.reversedDepth===!0&&(d=-d);let _=o(f,p,m,b,d,g);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(f,p,m,b,d,g){let v=o(f,p,m,b,d,g);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,p){t.length>1&&t.sort(f||mM),n.length>1&&n.sort(p||km),i.length>1&&i.sort(p||km)}function u(){for(let f=e,p=a.length;f<p;f++){let m=a[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:h}}function gM(){let a=new WeakMap;function e(n,i){let s=a.get(n),r;return s===void 0?(r=new Fm,a.set(n,[r])):i>=s.length?(r=new Fm,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function bM(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Fe};break;case"SpotLight":t={position:new C,direction:new C,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new C,halfWidth:new C,halfHeight:new C};break}return a[e.id]=t,t}}}function xM(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var vM=0;function yM(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function _M(a){let e=new bM,t=xM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);let i=new C,s=new Ve,r=new Ve;function o(l){let h=0,u=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,m=0,b=0,d=0,g=0,v=0,_=0,y=0,S=0,w=0,x=0,M=0,R=0,A=0;l.sort(yM);for(let D=0,U=l.length;D<U;D++){let N=l[D],F=N.color,W=N.intensity,j=N.distance,H=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ca?H=N.shadow.map.texture:H=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=F.r*W,u+=F.g*W,f+=F.b*W;else if(N.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],W);A++}else if(N.isSunLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let q=N.shadow,Y=t.get(N);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[m]=Y,n.sunShadowMap[m]=H;let ce=q.getViewportCount();for(let xe=0;xe<ce;xe++)n.sunShadowMatrix[b+xe]=q.getMatrix(xe),n.sunShadowCascade[b+xe]=q._cascadeData[xe];b+=ce,m++}n.sun[p]=G,p++}else if(N.isDirectionalLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let q=N.shadow,Y=t.get(N);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=N.shadow.matrix,S++}n.directional[d]=G,d++}else if(N.isSpotLight){let G=e.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(F).multiplyScalar(W),G.distance=j,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[v]=G;let q=N.shadow;if(N.map&&(n.spotLightMap[M]=N.map,M++,q.updateMatrices(N),N.castShadow&&R++),n.spotLightMatrix[v]=q.matrix,N.castShadow){let Y=t.get(N);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=H,x++}v++}else if(N.isRectAreaLight){let G=e.get(N);G.color.copy(F).multiplyScalar(W),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),n.rectArea[_]=G,_++}else if(N.isPointLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){let q=N.shadow,Y=t.get(N);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=N.shadow.matrix,w++}n.point[g]=G,g++}else if(N.isHemisphereLight){let G=e.get(N);G.skyColor.copy(N.color).multiplyScalar(W),G.groundColor.copy(N.groundColor).multiplyScalar(W),n.hemi[y]=G,y++}}_>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let L=n.hash;(L.sunLength!==p||L.directionalLength!==d||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==_||L.hemiLength!==y||L.numSunShadows!==m||L.numDirectionalShadows!==S||L.numPointShadows!==w||L.numSpotShadows!==x||L.numSpotMaps!==M||L.numLightProbes!==A)&&(n.sun.length=p,n.directional.length=d,n.spot.length=v,n.rectArea.length=_,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-R,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,L.sunLength=p,L.directionalLength=d,L.pointLength=g,L.spotLength=v,L.rectAreaLength=_,L.hemiLength=y,L.numSunShadows=m,L.numDirectionalShadows=S,L.numPointShadows=w,L.numSpotShadows=x,L.numSpotMaps=M,L.numLightProbes=A,n.version=vM++)}function c(l,h){let u=0,f=0,p=0,m=0,b=0,d=0,g=h.matrixWorldInverse;for(let v=0,_=l.length;v<_;v++){let y=l[v];if(y.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),f++}else if(y.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let S=n.rectArea[b];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),r.identity(),s.copy(y.matrixWorld),s.premultiply(g),r.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),b++}else if(y.isPointLight){let S=n.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),p++}else if(y.isHemisphereLight){let S=n.hemi[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),d++}}}return{setup:o,setupView:c,state:n}}function Bm(a){let e=new _M(a),t=[],n=[],i=[];function s(u){h.camera=u,t.length=0,n.length=0,i.length=0}function r(u){u.isLightProbeGrid?i.push(u):t.push(u)}function o(u){n.push(u)}function c(){e.setup(t),i.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function l(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function MM(a){let e=new WeakMap;function t(i,s=0){let r=e.get(i),o;return r===void 0?(o=new Bm(a),e.set(i,[o])):s>=r.length?(o=new Bm(a),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var SM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,EM=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],AM=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],zm=new Ve,nc=new C,xu=new C;function TM(a,e,t){let n=new wi,i=new de,s=new de,r=new _t,o=new xl,c=new vl,l={},h=t.maxTextureSize,u={[Ri]:un,[un]:Ri,[Gt]:Gt},f=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:SM,fragmentShader:wM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new rt;m.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new st(m,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let g=this.type;this.render=function(w,x,M){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;this.type===Ip&&(tt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=us);let R=a.getRenderTarget(),A=a.getActiveCubeFace(),L=a.getActiveMipmapLevel(),D=a.state;D.setBlending(na),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=g!==this.type;U&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(F=>F.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,F=w.length;N<F;N++){let W=w[N],j=W.shadow;if(j===void 0){tt("WebGLShadowMap:",W,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);let H=j.getFrameExtents();i.multiply(H),s.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/H.x),i.x=s.x*H.x,j.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/H.y),i.y=s.y*H.y,j.mapSize.y=s.y));let G=a.state.buffers.depth.getReversed();if(j.camera._reversedDepth=G,j.map===null||U===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===hr){if(W.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Xt(i.x,i.y,{format:Ca,type:Vt,minFilter:Tt,magFilter:Tt,generateMipmaps:!1}),j.map.texture.name=W.name+".shadowMap",j.map.depthTexture=new pi(i.x,i.y,Wt),j.map.depthTexture.name=W.name+".shadowMapDepth",j.map.depthTexture.format=Ki,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Ht,j.map.depthTexture.magFilter=Ht}else W.isPointLight?(j.map=new ac(i.x),j.map.depthTexture=new go(i.x,bi)):(j.map=new Xt(i.x,i.y),j.map.depthTexture=new pi(i.x,i.y,bi)),j.map.depthTexture.name=W.name+".shadowMap",j.map.depthTexture.format=Ki,this.type===us?(j.map.depthTexture.compareFunction=G?iu:nu,j.map.depthTexture.minFilter=Tt,j.map.depthTexture.magFilter=Tt):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Ht,j.map.depthTexture.magFilter=Ht);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==i.x||j.map.height!==i.y)&&j.map.setSize(i.x,i.y);let q=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();W.isPointLight!==!0&&j.updateMatrices(W,M);let Y=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:M.layers;for(let ce=0;ce<q;ce++){let xe=j.getCamera(ce);if(W.isPointLight){let Z=j.camera,fe=j.matrix,Ie=W.distance||Z.far;Ie!==Z.far&&(Z.far=Ie,Z.updateProjectionMatrix()),nc.setFromMatrixPosition(W.matrixWorld),Z.position.copy(nc),xu.copy(Z.position),xu.add(EM[ce]),Z.up.copy(AM[ce]),Z.lookAt(xu),Z.updateMatrixWorld(),fe.makeTranslation(-nc.x,-nc.y,-nc.z),zm.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),j._frustum.setFromProjectionMatrix(zm,Z.coordinateSystem,Z.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)a.setRenderTarget(j.map,ce),a.clear();else{ce===0&&(a.setRenderTarget(j.map),a.clear());let Z=j.getViewport(ce);r.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),D.viewport(r)}n=j.getFrustum(ce),y(x,M,xe,W,Y,this.type)}j.isPointLightShadow!==!0&&this.type===hr&&v(j,M),j.needsUpdate=!1}g=this.type,d.needsUpdate=!1,a.setRenderTarget(R,A,L)};function v(w,x){let M=e.update(b);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Xt(i.x,i.y,{format:Ca,type:Vt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(x,null,M,f,b,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(x,null,M,p,b,null)}function _(w,x,M,R){let A=null,L=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)A=L;else if(A=M.isPointLight===!0?c:o,a.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=A.uuid,U=x.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let F=N[U];F===void 0&&(F=A.clone(),N[U]=F,x.addEventListener("dispose",S)),A=F}if(A.visible=x.visible,A.wireframe=x.wireframe,R===hr?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:u[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,M.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=a.properties.get(A);D.light=M}return A}function y(w,x,M,R,A,L){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===hr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let N=e.update(w),F=w.material;if(Array.isArray(F)){let W=N.groups;for(let j=0,H=W.length;j<H;j++){let G=W[j],q=F[G.materialIndex];if(q&&q.visible){let Y=_(w,q,R,L);w.onBeforeShadow(a,w,x,M,N,Y,G),a.renderBufferDirect(M,null,N,Y,w,G),w.onAfterShadow(a,w,x,M,N,Y,G)}}}else if(F.visible){let W=_(w,F,R,L);w.onBeforeShadow(a,w,x,M,N,W,null),a.renderBufferDirect(M,null,N,W,w,null),w.onAfterShadow(a,w,x,M,N,W,null)}}let U=w.children;for(let N=0,F=U.length;N<F;N++)y(U[N],x,M,R,A,L)}function S(w){w.target.removeEventListener("dispose",S);for(let M in l){let R=l[M],A=w.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function RM(a,e){function t(){let k=!1,oe=new _t,ne=null,Ae=new _t(0,0,0,0);return{setMask:function(Ee){ne!==Ee&&!k&&(a.colorMask(Ee,Ee,Ee,Ee),ne=Ee)},setLocked:function(Ee){k=Ee},setClear:function(Ee,Ne,$e,ut,I){I===!0&&(Ee*=ut,Ne*=ut,$e*=ut),oe.set(Ee,Ne,$e,ut),Ae.equals(oe)===!1&&(a.clearColor(Ee,Ne,$e,ut),Ae.copy(oe))},reset:function(){k=!1,ne=null,Ae.set(-1,0,0,0)}}}function n(){let k=!1,oe=!1,ne=null,Ae=null,Ee=null;return{setReversed:function(Ne){if(oe!==Ne){let $e=e.get("EXT_clip_control");Ne?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),oe=Ne;let ut=Ee;Ee=null,this.setClear(ut)}},getReversed:function(){return oe},setTest:function(Ne){Ne?Pe(a.DEPTH_TEST):Ye(a.DEPTH_TEST)},setMask:function(Ne){ne!==Ne&&!k&&(a.depthMask(Ne),ne=Ne)},setFunc:function(Ne){if(oe&&(Ne=dm[Ne]),Ae!==Ne){switch(Ne){case $c:a.depthFunc(a.NEVER);break;case el:a.depthFunc(a.ALWAYS);break;case tl:a.depthFunc(a.LESS);break;case qs:a.depthFunc(a.LEQUAL);break;case nl:a.depthFunc(a.EQUAL);break;case il:a.depthFunc(a.GEQUAL);break;case al:a.depthFunc(a.GREATER);break;case sl:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ae=Ne}},setLocked:function(Ne){k=Ne},setClear:function(Ne){Ee!==Ne&&(Ee=Ne,oe&&(Ne=1-Ne),a.clearDepth(Ne))},reset:function(){k=!1,ne=null,Ae=null,Ee=null,oe=!1}}}function i(){let k=!1,oe=null,ne=null,Ae=null,Ee=null,Ne=null,$e=null,ut=null,I=null;return{setTest:function(V){k||(V?Pe(a.STENCIL_TEST):Ye(a.STENCIL_TEST))},setMask:function(V){oe!==V&&!k&&(a.stencilMask(V),oe=V)},setFunc:function(V,z,B){(ne!==V||Ae!==z||Ee!==B)&&(a.stencilFunc(V,z,B),ne=V,Ae=z,Ee=B)},setOp:function(V,z,B){(Ne!==V||$e!==z||ut!==B)&&(a.stencilOp(V,z,B),Ne=V,$e=z,ut=B)},setLocked:function(V){k=V},setClear:function(V){I!==V&&(a.clearStencil(V),I=V)},reset:function(){k=!1,oe=null,ne=null,Ae=null,Ee=null,Ne=null,$e=null,ut=null,I=null}}}let s=new t,r=new n,o=new i,c={},l=new WeakMap,h={},u={},f={},p=new WeakMap,m=[],b=null,d=!1,g=null,v=null,_=null,y=null,S=null,w=null,x=null,M=new Fe(0,0,0),R=0,A=!1,L=null,D=null,U=null,N=null,F=null,W=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,H=0,G=a.getParameter(a.VERSION);G.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=H>=1):G.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=H>=2);let q=null,Y={},ce=a.getParameter(a.SCISSOR_BOX),xe=a.getParameter(a.VIEWPORT),Z=new _t().fromArray(ce),fe=new _t().fromArray(xe);function Ie(k,oe,ne,Ae){let Ee=new Uint8Array(4),Ne=a.createTexture();a.bindTexture(k,Ne),a.texParameteri(k,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(k,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let $e=0;$e<ne;$e++)k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY?a.texImage3D(oe,0,a.RGBA,1,1,Ae,0,a.RGBA,a.UNSIGNED_BYTE,Ee):a.texImage2D(oe+$e,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ee);return Ne}let ze={};ze[a.TEXTURE_2D]=Ie(a.TEXTURE_2D,a.TEXTURE_2D,1),ze[a.TEXTURE_CUBE_MAP]=Ie(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[a.TEXTURE_2D_ARRAY]=Ie(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ze[a.TEXTURE_3D]=Ie(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Pe(a.DEPTH_TEST),r.setFunc(qs),_e(!1),we(Vd),Pe(a.CULL_FACE),ve(na);function Pe(k){h[k]!==!0&&(a.enable(k),h[k]=!0)}function Ye(k){h[k]!==!1&&(a.disable(k),h[k]=!1)}function xt(k,oe){return f[k]!==oe?(a.bindFramebuffer(k,oe),f[k]=oe,k===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=oe),k===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=oe),!0):!1}function Je(k,oe){let ne=m,Ae=!1;if(k){ne=p.get(oe),ne===void 0&&(ne=[],p.set(oe,ne));let Ee=k.textures;if(ne.length!==Ee.length||ne[0]!==a.COLOR_ATTACHMENT0){for(let Ne=0,$e=Ee.length;Ne<$e;Ne++)ne[Ne]=a.COLOR_ATTACHMENT0+Ne;ne.length=Ee.length,Ae=!0}}else ne[0]!==a.BACK&&(ne[0]=a.BACK,Ae=!0);Ae&&a.drawBuffers(ne)}function Ue(k){return b!==k?(a.useProgram(k),b=k,!0):!1}let je={[fs]:a.FUNC_ADD,[Np]:a.FUNC_SUBTRACT,[Pp]:a.FUNC_REVERSE_SUBTRACT};je[Lp]=a.MIN,je[Dp]=a.MAX;let ae={[Up]:a.ZERO,[Op]:a.ONE,[kp]:a.SRC_COLOR,[Xd]:a.SRC_ALPHA,[Vp]:a.SRC_ALPHA_SATURATE,[Hp]:a.DST_COLOR,[Bp]:a.DST_ALPHA,[Fp]:a.ONE_MINUS_SRC_COLOR,[qd]:a.ONE_MINUS_SRC_ALPHA,[Gp]:a.ONE_MINUS_DST_COLOR,[zp]:a.ONE_MINUS_DST_ALPHA,[jp]:a.CONSTANT_COLOR,[Wp]:a.ONE_MINUS_CONSTANT_COLOR,[Xp]:a.CONSTANT_ALPHA,[qp]:a.ONE_MINUS_CONSTANT_ALPHA};function ve(k,oe,ne,Ae,Ee,Ne,$e,ut,I,V){if(k===na){d===!0&&(Ye(a.BLEND),d=!1);return}if(d===!1&&(Pe(a.BLEND),d=!0),k!==Cp){if(k!==g||V!==A){if((v!==fs||S!==fs)&&(a.blendEquation(a.FUNC_ADD),v=fs,S=fs),V)switch(k){case dr:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case qn:a.blendFunc(a.ONE,a.ONE);break;case jd:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Wd:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:at("WebGLState: Invalid blending: ",k);break}else switch(k){case dr:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case qn:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case jd:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wd:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",k);break}_=null,y=null,w=null,x=null,M.set(0,0,0),R=0,g=k,A=V}return}Ee=Ee||oe,Ne=Ne||ne,$e=$e||Ae,(oe!==v||Ee!==S)&&(a.blendEquationSeparate(je[oe],je[Ee]),v=oe,S=Ee),(ne!==_||Ae!==y||Ne!==w||$e!==x)&&(a.blendFuncSeparate(ae[ne],ae[Ae],ae[Ne],ae[$e]),_=ne,y=Ae,w=Ne,x=$e),(ut.equals(M)===!1||I!==R)&&(a.blendColor(ut.r,ut.g,ut.b,I),M.copy(ut),R=I),g=k,A=!1}function ge(k,oe){k.side===Gt?Ye(a.CULL_FACE):Pe(a.CULL_FACE);let ne=k.side===un;oe&&(ne=!ne),_e(ne),k.blending===dr&&k.transparent===!1?ve(na):ve(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),r.setFunc(k.depthFunc),r.setTest(k.depthTest),r.setMask(k.depthWrite),s.setMask(k.colorWrite);let Ae=k.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ue(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Pe(a.SAMPLE_ALPHA_TO_COVERAGE):Ye(a.SAMPLE_ALPHA_TO_COVERAGE)}function _e(k){L!==k&&(k?a.frontFace(a.CW):a.frontFace(a.CCW),L=k)}function we(k){k!==Tp?(Pe(a.CULL_FACE),k!==D&&(k===Vd?a.cullFace(a.BACK):k===Rp?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ye(a.CULL_FACE),D=k}function re(k){k!==U&&(j&&a.lineWidth(k),U=k)}function ue(k,oe,ne){k?(Pe(a.POLYGON_OFFSET_FILL),(N!==oe||F!==ne)&&(N=oe,F=ne,r.getReversed()&&(oe=-oe,ne=-ne),a.polygonOffset(oe,ne))):Ye(a.POLYGON_OFFSET_FILL)}function ye(k){k?Pe(a.SCISSOR_TEST):Ye(a.SCISSOR_TEST)}function Re(k){k===void 0&&(k=a.TEXTURE0+W-1),q!==k&&(a.activeTexture(k),q=k)}function nt(k,oe,ne){ne===void 0&&(q===null?ne=a.TEXTURE0+W-1:ne=q);let Ae=Y[ne];Ae===void 0&&(Ae={type:void 0,texture:void 0},Y[ne]=Ae),(Ae.type!==k||Ae.texture!==oe)&&(q!==ne&&(a.activeTexture(ne),q=ne),a.bindTexture(k,oe||ze[k]),Ae.type=k,Ae.texture=oe)}function O(){let k=Y[q];k!==void 0&&k.type!==void 0&&(a.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Xe(){try{a.compressedTexImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function Ze(){try{a.compressedTexImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function lt(){try{a.texSubImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function me(){try{a.texSubImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function mt(){try{a.compressedTexSubImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function Oe(){try{a.compressedTexSubImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function Qe(){try{a.texStorage2D(...arguments)}catch(k){at("WebGLState:",k)}}function P(){try{a.texStorage3D(...arguments)}catch(k){at("WebGLState:",k)}}function E(){try{a.texImage2D(...arguments)}catch(k){at("WebGLState:",k)}}function K(){try{a.texImage3D(...arguments)}catch(k){at("WebGLState:",k)}}function pe(k){return u[k]!==void 0?u[k]:a.getParameter(k)}function le(k,oe){u[k]!==oe&&(a.pixelStorei(k,oe),u[k]=oe)}function Se(k){Z.equals(k)===!1&&(a.scissor(k.x,k.y,k.z,k.w),Z.copy(k))}function Me(k){fe.equals(k)===!1&&(a.viewport(k.x,k.y,k.z,k.w),fe.copy(k))}function te(k,oe){let ne=l.get(oe);ne===void 0&&(ne=new WeakMap,l.set(oe,ne));let Ae=ne.get(k);Ae===void 0&&(Ae=a.getUniformBlockIndex(oe,k.name),a.uniformBlockBinding(oe,Ae,Ae),ne.set(k,Ae))}function he(k,oe,ne){let Ee=l.get(oe).get(k);c[Ee]!==ne&&(a.bindBufferBase(a.UNIFORM_BUFFER,Ee,ne),c[Ee]=ne)}function Ce(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),h={},u={},q=null,Y={},f={},c={},p=new WeakMap,m=[],b=null,d=!1,g=null,v=null,_=null,y=null,S=null,w=null,x=null,M=new Fe(0,0,0),R=0,A=!1,L=null,D=null,U=null,N=null,F=null,Z.set(0,0,a.canvas.width,a.canvas.height),fe.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Pe,disable:Ye,bindFramebuffer:xt,drawBuffers:Je,useProgram:Ue,setBlending:ve,setMaterial:ge,setFlipSided:_e,setCullFace:we,setLineWidth:re,setPolygonOffset:ue,setScissorTest:ye,activeTexture:Re,bindTexture:nt,unbindTexture:O,compressedTexImage2D:Xe,compressedTexImage3D:Ze,texImage2D:E,texImage3D:K,pixelStorei:le,getParameter:pe,updateUBOMapping:te,uniformBlockBinding:he,texStorage2D:Qe,texStorage3D:P,texSubImage2D:lt,texSubImage3D:me,compressedTexSubImage2D:mt,compressedTexSubImage3D:Oe,scissor:Se,viewport:Me,reset:Ce}}function IM(a,e,t,n,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,h=new WeakMap,u=new Set,f,p=new WeakMap,m=new Set,b=new FinalizationRegistry(P=>m.delete(P)),d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return d?new OffscreenCanvas(P,E):Ys("canvas")}function v(P,E,K){let pe=1,le=Qe(P);if((le.width>K||le.height>K)&&(pe=K/Math.max(le.width,le.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let Se=Math.floor(pe*le.width),Me=Math.floor(pe*le.height);f===void 0&&(f=g(Se,Me));let te=E?g(Se,Me):f;return te.width=Se,te.height=Me,te.getContext("2d").drawImage(P,0,0,Se,Me),tt("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Se+"x"+Me+")."),te}else return"data"in P&&tt("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),P;return P}function _(P){return P.generateMipmaps}function y(P){a.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?a.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function w(P,E,K,pe,le,Se=!1){if(P!==null){if(a[P]!==void 0)return a[P];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Me;pe&&(Me=e.get("EXT_texture_norm16"),Me||tt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=E;if(E===a.RED&&(K===a.FLOAT&&(te=a.R32F),K===a.HALF_FLOAT&&(te=a.R16F),K===a.UNSIGNED_BYTE&&(te=a.R8),K===a.UNSIGNED_SHORT&&Me&&(te=Me.R16_EXT),K===a.SHORT&&Me&&(te=Me.R16_SNORM_EXT)),E===a.RED_INTEGER&&(K===a.UNSIGNED_BYTE&&(te=a.R8UI),K===a.UNSIGNED_SHORT&&(te=a.R16UI),K===a.UNSIGNED_INT&&(te=a.R32UI),K===a.BYTE&&(te=a.R8I),K===a.SHORT&&(te=a.R16I),K===a.INT&&(te=a.R32I)),E===a.RG&&(K===a.FLOAT&&(te=a.RG32F),K===a.HALF_FLOAT&&(te=a.RG16F),K===a.UNSIGNED_BYTE&&(te=a.RG8),K===a.UNSIGNED_SHORT&&Me&&(te=Me.RG16_EXT),K===a.SHORT&&Me&&(te=Me.RG16_SNORM_EXT)),E===a.RG_INTEGER&&(K===a.UNSIGNED_BYTE&&(te=a.RG8UI),K===a.UNSIGNED_SHORT&&(te=a.RG16UI),K===a.UNSIGNED_INT&&(te=a.RG32UI),K===a.BYTE&&(te=a.RG8I),K===a.SHORT&&(te=a.RG16I),K===a.INT&&(te=a.RG32I)),E===a.RGB_INTEGER&&(K===a.UNSIGNED_BYTE&&(te=a.RGB8UI),K===a.UNSIGNED_SHORT&&(te=a.RGB16UI),K===a.UNSIGNED_INT&&(te=a.RGB32UI),K===a.BYTE&&(te=a.RGB8I),K===a.SHORT&&(te=a.RGB16I),K===a.INT&&(te=a.RGB32I)),E===a.RGBA_INTEGER&&(K===a.UNSIGNED_BYTE&&(te=a.RGBA8UI),K===a.UNSIGNED_SHORT&&(te=a.RGBA16UI),K===a.UNSIGNED_INT&&(te=a.RGBA32UI),K===a.BYTE&&(te=a.RGBA8I),K===a.SHORT&&(te=a.RGBA16I),K===a.INT&&(te=a.RGBA32I)),E===a.RGB&&(K===a.UNSIGNED_SHORT&&Me&&(te=Me.RGB16_EXT),K===a.SHORT&&Me&&(te=Me.RGB16_SNORM_EXT),K===a.UNSIGNED_INT_5_9_9_9_REV&&(te=a.RGB9_E5),K===a.UNSIGNED_INT_10F_11F_11F_REV&&(te=a.R11F_G11F_B10F)),E===a.RGBA){let he=Se?io:ft.getTransfer(le);K===a.FLOAT&&(te=a.RGBA32F),K===a.HALF_FLOAT&&(te=a.RGBA16F),K===a.UNSIGNED_BYTE&&(te=he===Et?a.SRGB8_ALPHA8:a.RGBA8),K===a.UNSIGNED_SHORT&&Me&&(te=Me.RGBA16_EXT),K===a.SHORT&&Me&&(te=Me.RGBA16_SNORM_EXT),K===a.UNSIGNED_SHORT_4_4_4_4&&(te=a.RGBA4),K===a.UNSIGNED_SHORT_5_5_5_1&&(te=a.RGB5_A1)}return(te===a.R16F||te===a.R32F||te===a.RG16F||te===a.RG32F||te===a.RGBA16F||te===a.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(P,E){let K;return P?E===null||E===bi||E===bs?K=a.DEPTH24_STENCIL8:E===Wt?K=a.DEPTH32F_STENCIL8:E===pr&&(K=a.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===bi||E===bs?K=a.DEPTH_COMPONENT24:E===Wt?K=a.DEPTH_COMPONENT32F:E===pr&&(K=a.DEPTH_COMPONENT16),K}function M(P,E){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ht&&P.minFilter!==Tt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){let E=new WeakRef(P);n.get(P).__ref=E,m.add(E),b.register(P,E,E)}function A(P){let E=n.get(P).__ref;E!==void 0&&(m.delete(E),b.unregister(E))}function L(P){U(P.target)}function D(P){N(P.target)}function U(P){P.removeEventListener("dispose",L),A(P),W(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function N(P){P.removeEventListener("dispose",D),A(P),H(P)}function F(){for(let P of m){let E=P.deref();E!==void 0&&(E.isRenderTarget===!0?N(E):U(E))}m.clear(),u.clear()}function W(P){let E=n.get(P);if(E.__webglInit===void 0)return;let K=P.source,pe=p.get(K);if(pe){let le=pe[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&j(P),Object.keys(pe).length===0&&p.delete(K)}n.remove(P)}function j(P){let E=n.get(P);a.deleteTexture(E.__webglTexture);let K=P.source,pe=p.get(K);delete pe[E.__cacheKey],r.memory.textures--}function H(P){let E=n.get(P);E.__depthDisposeCallback&&E.__depthDisposeCallback();let K=P.depthTexture;if(K&&K.renderTarget===P&&U(K),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let Se=0;Se<E.__webglFramebuffer[le].length;Se++)a.deleteFramebuffer(E.__webglFramebuffer[le][Se]);else a.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)a.deleteFramebuffer(E.__webglFramebuffer[le]);else a.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&a.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&a.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&a.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&a.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let pe=P.textures;for(let le=0,Se=pe.length;le<Se;le++){let Me=n.get(pe[le]);Me.__webglTexture&&(a.deleteTexture(Me.__webglTexture),r.memory.textures--),n.remove(pe[le])}n.remove(P)}let G=0;function q(){G=0}function Y(){return G}function ce(P){G=P}function xe(){let P=G;return P>=i.maxTextures&&tt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),G+=1,P}function Z(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.mipmapsAutoUpdate),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function fe(P,E){let K=n.get(P);if(P.isVideoTexture&&mt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){let pe=P.image;if(pe===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(K,P,E);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,K.__webglTexture,a.TEXTURE0+E)}function Ie(P,E){let K=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){ge(K,P,E);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,K.__webglTexture,a.TEXTURE0+E)}function ze(P,E){let K=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){ge(K,P,E);return}t.bindTexture(a.TEXTURE_3D,K.__webglTexture,a.TEXTURE0+E)}function Pe(P,E){let K=n.get(P);if(P.version>0&&K.__version!==P.version){_e(K,P,E);return}t.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture,a.TEXTURE0+E)}let Ye={[vn]:a.REPEAT,[Dn]:a.CLAMP_TO_EDGE,[Ks]:a.MIRRORED_REPEAT},xt={[Ht]:a.NEAREST,[Nl]:a.NEAREST_MIPMAP_NEAREST,[gs]:a.NEAREST_MIPMAP_LINEAR,[Tt]:a.LINEAR,[fr]:a.LINEAR_MIPMAP_NEAREST,[en]:a.LINEAR_MIPMAP_LINEAR},Je={[im]:a.NEVER,[au]:a.ALWAYS,[am]:a.LESS,[nu]:a.LEQUAL,[sm]:a.EQUAL,[iu]:a.GEQUAL,[rm]:a.GREATER,[om]:a.NOTEQUAL};function Ue(P,E){if(E.type===Wt&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Tt||E.magFilter===fr||E.magFilter===gs||E.magFilter===en||E.minFilter===Tt||E.minFilter===fr||E.minFilter===gs||E.minFilter===en)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(P,a.TEXTURE_WRAP_S,Ye[E.wrapS]),a.texParameteri(P,a.TEXTURE_WRAP_T,Ye[E.wrapT]),(P===a.TEXTURE_3D||P===a.TEXTURE_2D_ARRAY)&&a.texParameteri(P,a.TEXTURE_WRAP_R,Ye[E.wrapR]),a.texParameteri(P,a.TEXTURE_MAG_FILTER,xt[E.magFilter]),a.texParameteri(P,a.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(a.texParameteri(P,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(P,a.TEXTURE_COMPARE_FUNC,Je[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ht||E.minFilter!==gs&&E.minFilter!==en||E.type===Wt&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");a.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function je(P,E){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",L),R(E));let pe=E.source,le=p.get(pe);le===void 0&&(le={},p.set(pe,le));let Se=Z(E);if(Se!==P.__cacheKey){le[Se]===void 0&&(le[Se]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,K=!0),le[Se].usedTimes++;let Me=le[P.__cacheKey];Me!==void 0&&(le[P.__cacheKey].usedTimes--,Me.usedTimes===0&&j(E)),P.__cacheKey=Se,P.__webglTexture=le[Se].texture}return K}function ae(P,E,K){return Math.floor(Math.floor(P/K)/E)}function ve(P,E,K,pe){let Se=P.updateRanges;if(Se.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,E.width,E.height,K,pe,E.data);else{Se.sort((k,oe)=>k.start-oe.start);let Me=0;for(let k=1;k<Se.length;k++){let oe=Se[Me],ne=Se[k],Ae=oe.start+oe.count,Ee=ae(ne.start,E.width,4),Ne=ae(oe.start,E.width,4);ne.start<=Ae+1&&Ee===Ne&&ae(ne.start+ne.count-1,E.width,4)===Ee?oe.count=Math.max(oe.count,ne.start+ne.count-oe.start):(++Me,Se[Me]=ne)}Se.length=Me+1;let te=t.getParameter(a.UNPACK_ROW_LENGTH),he=t.getParameter(a.UNPACK_SKIP_PIXELS),Ce=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,E.width);for(let k=0,oe=Se.length;k<oe;k++){let ne=Se[k],Ae=Math.floor(ne.start/4),Ee=Math.ceil(ne.count/4),Ne=Ae%E.width,$e=Math.floor(Ae/E.width),ut=Ee,I=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(a.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(a.TEXTURE_2D,0,Ne,$e,ut,I,K,pe,E.data)}P.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,te),t.pixelStorei(a.UNPACK_SKIP_PIXELS,he),t.pixelStorei(a.UNPACK_SKIP_ROWS,Ce)}}function ge(P,E,K){let pe=a.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=a.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=a.TEXTURE_3D);let le=je(P,E),Se=E.source;t.bindTexture(pe,P.__webglTexture,a.TEXTURE0+K);let Me=n.get(Se);if(Se.version!==Me.__version||le===!0){if(t.activeTexture(a.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let I=ft.getPrimaries(ft.workingColorSpace),V=E.colorSpace===aa?null:ft.getPrimaries(E.colorSpace),z=E.colorSpace===aa||I===V?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,z)}t.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment);let he=v(E.image,!1,i.maxTextureSize);he=Oe(E,he);let Ce=s.convert(E.format,E.colorSpace),k=s.convert(E.type),oe=w(E.internalFormat,Ce,k,E.normalized,E.colorSpace,E.isVideoTexture);Ue(pe,E);let ne,Ae=E.mipmaps,Ee=E.isVideoTexture!==!0,Ne=Me.__version===void 0||le===!0,$e=Se.dataReady,ut=M(E,he);if(E.isDepthTexture)oe=x(E.format===ia,E.type),Ne&&(Ee?t.texStorage2D(a.TEXTURE_2D,1,oe,he.width,he.height):t.texImage2D(a.TEXTURE_2D,0,oe,he.width,he.height,0,Ce,k,null));else if(E.isDataTexture)if(Ae.length>0){Ee&&Ne&&t.texStorage2D(a.TEXTURE_2D,ut,oe,Ae[0].width,Ae[0].height);for(let I=0,V=Ae.length;I<V;I++)ne=Ae[I],Ee?$e&&t.texSubImage2D(a.TEXTURE_2D,I,0,0,ne.width,ne.height,Ce,k,ne.data):t.texImage2D(a.TEXTURE_2D,I,oe,ne.width,ne.height,0,Ce,k,ne.data);E.generateMipmaps=!1}else Ee?(Ne&&t.texStorage2D(a.TEXTURE_2D,ut,oe,he.width,he.height),$e&&ve(E,he,Ce,k)):t.texImage2D(a.TEXTURE_2D,0,oe,he.width,he.height,0,Ce,k,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ee&&Ne&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ut,oe,Ae[0].width,Ae[0].height,he.depth);for(let I=0,V=Ae.length;I<V;I++)if(ne=Ae[I],E.format!==Pn)if(Ce!==null)if(Ee){if($e)if(E.layerUpdates.size>0){let z=gu(ne.width,ne.height,E.format,E.type);for(let B of E.layerUpdates){let $=ne.data.subarray(B*z/ne.data.BYTES_PER_ELEMENT,(B+1)*z/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,I,0,0,B,ne.width,ne.height,1,Ce,$)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,I,0,0,0,ne.width,ne.height,he.depth,Ce,ne.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,I,oe,ne.width,ne.height,he.depth,0,ne.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?$e&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,I,0,0,0,ne.width,ne.height,he.depth,Ce,k,ne.data):t.texImage3D(a.TEXTURE_2D_ARRAY,I,oe,ne.width,ne.height,he.depth,0,Ce,k,ne.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ee&&Ne&&t.texStorage2D(a.TEXTURE_2D,ut,oe,Ae[0].width,Ae[0].height);for(let I=0,V=Ae.length;I<V;I++)ne=Ae[I],E.format!==Pn?Ce!==null?Ee?$e&&t.compressedTexSubImage2D(a.TEXTURE_2D,I,0,0,ne.width,ne.height,Ce,ne.data):t.compressedTexImage2D(a.TEXTURE_2D,I,oe,ne.width,ne.height,0,ne.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?$e&&t.texSubImage2D(a.TEXTURE_2D,I,0,0,ne.width,ne.height,Ce,k,ne.data):t.texImage2D(a.TEXTURE_2D,I,oe,ne.width,ne.height,0,Ce,k,ne.data)}else if(E.isDataArrayTexture)if(Ee){if(Ne&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ut,oe,he.width,he.height,he.depth),$e)if(E.layerUpdates.size>0){let I=gu(he.width,he.height,E.format,E.type);for(let V of E.layerUpdates){let z=he.data.subarray(V*I/he.data.BYTES_PER_ELEMENT,(V+1)*I/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,V,he.width,he.height,1,Ce,k,z)}E.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ce,k,he.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,oe,he.width,he.height,he.depth,0,Ce,k,he.data);else if(E.isData3DTexture)Ee?(Ne&&t.texStorage3D(a.TEXTURE_3D,ut,oe,he.width,he.height,he.depth),$e&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ce,k,he.data)):t.texImage3D(a.TEXTURE_3D,0,oe,he.width,he.height,he.depth,0,Ce,k,he.data);else if(E.isFramebufferTexture){if(Ne)if(Ee)t.texStorage2D(a.TEXTURE_2D,ut,oe,he.width,he.height);else{let I=he.width,V=he.height;for(let z=0;z<ut;z++)t.texImage2D(a.TEXTURE_2D,z,oe,I,V,0,Ce,k,null),I>>=1,V>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in a){let I=a.canvas;if(I.hasAttribute("layoutsubtree")||I.setAttribute("layoutsubtree","true"),he.parentNode!==I){I.appendChild(he),u.add(E),I.onpaint=V=>{let z=V.changedElements;for(let B of u)z.includes(B.image)&&(B.needsUpdate=!0)},I.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,he);else{let z=a.RGBA,B=a.RGBA,$=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,z,B,$,he)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Ee&&Ne){let I=Qe(Ae[0]);t.texStorage2D(a.TEXTURE_2D,ut,oe,I.width,I.height)}for(let I=0,V=Ae.length;I<V;I++)ne=Ae[I],Ee?$e&&t.texSubImage2D(a.TEXTURE_2D,I,0,0,Ce,k,ne):t.texImage2D(a.TEXTURE_2D,I,oe,Ce,k,ne);E.generateMipmaps=!1}else if(Ee){if(Ne){let I=Qe(he);t.texStorage2D(a.TEXTURE_2D,ut,oe,I.width,I.height)}$e&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ce,k,he)}else t.texImage2D(a.TEXTURE_2D,0,oe,Ce,k,he);_(E)&&E.mipmapsAutoUpdate===!0&&y(pe),Me.__version=Se.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function _e(P,E,K){if(E.image.length!==6)return;let pe=je(P,E),le=E.source;t.bindTexture(a.TEXTURE_CUBE_MAP,P.__webglTexture,a.TEXTURE0+K);let Se=n.get(le);if(le.version!==Se.__version||pe===!0){t.activeTexture(a.TEXTURE0+K);let Me=ft.getPrimaries(ft.workingColorSpace),te=E.colorSpace===aa?null:ft.getPrimaries(E.colorSpace),he=E.colorSpace===aa||Me===te?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Ce=E.isCompressedTexture||E.image[0].isCompressedTexture,k=E.image[0]&&E.image[0].isDataTexture,oe=[];for(let B=0;B<6;B++)!Ce&&!k?oe[B]=v(E.image[B],!0,i.maxCubemapSize):oe[B]=k?E.image[B].image:E.image[B],oe[B]=Oe(E,oe[B]);let ne=oe[0],Ae=s.convert(E.format,E.colorSpace),Ee=s.convert(E.type),Ne=w(E.internalFormat,Ae,Ee,E.normalized,E.colorSpace),$e=E.isVideoTexture!==!0,ut=Se.__version===void 0||pe===!0,I=le.dataReady,V=M(E,ne);Ue(a.TEXTURE_CUBE_MAP,E);let z;if(E.isDepthTexture){if(Ne=x(E.format===ia,E.type),ut)if($e)t.texStorage2D(a.TEXTURE_CUBE_MAP,1,Ne,ne.width,ne.height);else for(let B=0;B<6;B++)t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Ne,ne.width,ne.height,0,Ae,Ee,null)}else if(Ce){$e&&ut&&t.texStorage2D(a.TEXTURE_CUBE_MAP,V,Ne,ne.width,ne.height);for(let B=0;B<6;B++){z=oe[B].mipmaps;for(let $=0;$<z.length;$++){let ie=z[$];E.format!==Pn?Ae!==null?$e?I&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,$,0,0,ie.width,ie.height,Ae,ie.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,$,Ne,ie.width,ie.height,0,ie.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,$,0,0,ie.width,ie.height,Ae,Ee,ie.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,$,Ne,ie.width,ie.height,0,Ae,Ee,ie.data)}}}else{if(z=E.mipmaps,$e&&ut){z.length>0&&V++;let B=Qe(oe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,V,Ne,B.width,B.height)}for(let B=0;B<6;B++)if(k){$e?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,oe[B].width,oe[B].height,Ae,Ee,oe[B].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Ne,oe[B].width,oe[B].height,0,Ae,Ee,oe[B].data);for(let $=0;$<z.length;$++){let se=z[$].image[B].image;$e?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,$+1,0,0,se.width,se.height,Ae,Ee,se.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,$+1,Ne,se.width,se.height,0,Ae,Ee,se.data)}}else{$e?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Ae,Ee,oe[B]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Ne,Ae,Ee,oe[B]);for(let $=0;$<z.length;$++){let ie=z[$];$e?I&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,$+1,0,0,Ae,Ee,ie.image[B]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+B,$+1,Ne,Ae,Ee,ie.image[B])}}}_(E)&&E.mipmapsAutoUpdate===!0&&y(a.TEXTURE_CUBE_MAP),Se.__version=le.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function we(P,E,K,pe,le,Se){let Me=s.convert(K.format,K.colorSpace),te=s.convert(K.type),he=w(K.internalFormat,Me,te,K.normalized,K.colorSpace),Ce=n.get(E),k=n.get(K);if(k.__renderTarget=E,!Ce.__hasExternalTextures){let oe=Math.max(1,E.width>>Se),ne=Math.max(1,E.height>>Se);le===a.TEXTURE_3D||le===a.TEXTURE_2D_ARRAY?t.texImage3D(le,Se,he,oe,ne,E.depth,0,Me,te,null):t.texImage2D(le,Se,he,oe,ne,0,Me,te,null)}t.bindFramebuffer(a.FRAMEBUFFER,P),me(E)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,pe,le,k.__webglTexture,0,lt(E)):(le===a.TEXTURE_2D||le>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,pe,le,k.__webglTexture,Se),t.bindFramebuffer(a.FRAMEBUFFER,null)}function re(P,E,K){if(a.bindRenderbuffer(a.RENDERBUFFER,P),E.depthBuffer){let pe=E.depthTexture,le=pe&&pe.isDepthTexture?pe.type:null,Se=x(E.stencilBuffer,le),Me=E.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;me(E)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,lt(E),Se,E.width,E.height):K?a.renderbufferStorageMultisample(a.RENDERBUFFER,lt(E),Se,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,Se,E.width,E.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Me,a.RENDERBUFFER,P)}else{let pe=E.textures;for(let le=0;le<pe.length;le++){let Se=pe[le],Me=s.convert(Se.format,Se.colorSpace),te=s.convert(Se.type),he=w(Se.internalFormat,Me,te,Se.normalized,Se.colorSpace);me(E)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,lt(E),he,E.width,E.height):K?a.renderbufferStorageMultisample(a.RENDERBUFFER,lt(E),he,E.width,E.height):a.renderbufferStorage(a.RENDERBUFFER,he,E.width,E.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ue(P,E,K){let pe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(E.depthTexture);le.__renderTarget=E;let Se=pe?E.depthTexture.image[0]:E.depthTexture.image;(!le.__webglTexture||Se.width!==E.width||Se.height!==E.height)&&(Se.width=E.width,Se.height=E.height,E.depthTexture.needsUpdate=!0),pe?Pe(E.depthTexture,0):fe(E.depthTexture,0);let Me=le.__webglTexture,te=lt(E),he=pe?a.TEXTURE_CUBE_MAP_POSITIVE_X+K:a.TEXTURE_2D,Ce=E.depthTexture.format===ia?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ki)me(E)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Ce,he,Me,0,te):a.framebufferTexture2D(a.FRAMEBUFFER,Ce,he,Me,0);else if(E.depthTexture.format===ia)me(E)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Ce,he,Me,0,te):a.framebufferTexture2D(a.FRAMEBUFFER,Ce,he,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ye(P){let E=n.get(P),K=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let pe=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){let le=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",le)};pe.addEventListener("dispose",le),E.__depthDisposeCallback=le}E.__boundDepthTexture=pe}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let pe=0;pe<6;pe++)ue(E.__webglFramebuffer[pe],P,pe);else P.texture.mipmaps.length>0?ue(E.__webglFramebuffer[0],P,0):ue(E.__webglFramebuffer,P,0);else if(K){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=a.createRenderbuffer(),re(E.__webglDepthbuffer[pe],P,!1);else{let le=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Se=E.__webglDepthbuffer[pe];a.bindRenderbuffer(a.RENDERBUFFER,Se),a.framebufferRenderbuffer(a.FRAMEBUFFER,le,a.RENDERBUFFER,Se)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=a.createRenderbuffer(),re(E.__webglDepthbuffer,P,!1);else{let le=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Se=E.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Se),a.framebufferRenderbuffer(a.FRAMEBUFFER,le,a.RENDERBUFFER,Se)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Re(P,E,K){let pe=n.get(P);E!==void 0&&we(pe.__webglFramebuffer,P,P.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),K!==void 0&&ye(P)}function nt(P){let E=P.texture,K=n.get(P),pe=n.get(E);P.addEventListener("dispose",D),R(P);let le=P.textures,Se=P.isWebGLCubeRenderTarget===!0,Me=le.length>1;if(Me||(pe.__webglTexture===void 0&&(pe.__webglTexture=a.createTexture()),pe.__version=E.version,r.memory.textures++),Se){K.__webglFramebuffer=[];for(let te=0;te<6;te++)if(E.mipmaps.length>0){K.__webglFramebuffer[te]=[];for(let he=0;he<E.mipmaps.length;he++)K.__webglFramebuffer[te][he]=a.createFramebuffer()}else K.__webglFramebuffer[te]=a.createFramebuffer()}else{if(E.mipmaps.length>0){K.__webglFramebuffer=[];for(let te=0;te<E.mipmaps.length;te++)K.__webglFramebuffer[te]=a.createFramebuffer()}else K.__webglFramebuffer=a.createFramebuffer();if(Me)for(let te=0,he=le.length;te<he;te++){let Ce=n.get(le[te]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=a.createTexture(),r.memory.textures++)}if(P.samples>0&&me(P)===!1){K.__webglMultisampledFramebuffer=a.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let te=0;te<le.length;te++){let he=le[te];K.__webglColorRenderbuffer[te]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,K.__webglColorRenderbuffer[te]);let Ce=s.convert(he.format,he.colorSpace),k=s.convert(he.type),oe=w(he.internalFormat,Ce,k,he.normalized,he.colorSpace,P.isXRRenderTarget===!0),ne=lt(P);a.renderbufferStorageMultisample(a.RENDERBUFFER,ne,oe,P.width,P.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+te,a.RENDERBUFFER,K.__webglColorRenderbuffer[te])}a.bindRenderbuffer(a.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=a.createRenderbuffer(),re(K.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Se){t.bindTexture(a.TEXTURE_CUBE_MAP,pe.__webglTexture),Ue(a.TEXTURE_CUBE_MAP,E);for(let te=0;te<6;te++)if(E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)we(K.__webglFramebuffer[te][he],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+te,he);else we(K.__webglFramebuffer[te],P,E,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);_(E)?y(a.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Me){for(let te=0,he=le.length;te<he;te++){let Ce=le[te],k=n.get(Ce),oe=a.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(oe=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(oe,k.__webglTexture),Ue(oe,Ce),we(K.__webglFramebuffer,P,Ce,a.COLOR_ATTACHMENT0+te,oe,0),_(Ce)&&y(oe)}t.unbindTexture()}else{let te=a.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(te,pe.__webglTexture),Ue(te,E),E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)we(K.__webglFramebuffer[he],P,E,a.COLOR_ATTACHMENT0,te,he);else we(K.__webglFramebuffer,P,E,a.COLOR_ATTACHMENT0,te,0);_(E)?y(te):E.mipmaps.length>0&&a.texParameteri(te,a.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&ye(P)}function O(P){let E=P.textures;for(let K=0,pe=E.length;K<pe;K++){let le=E[K];if(_(le)&&le.mipmapsAutoUpdate===!0){let Se=S(P),Me=n.get(le).__webglTexture;t.bindTexture(Se,Me),y(Se),t.unbindTexture()}}}let Xe=[];function Ze(P){if(P.samples>0){if(me(P)===!1){let E=P.textures,K=P.width,pe=P.height,le=a.COLOR_BUFFER_BIT,Se=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Me=n.get(P),te=E.length>1;if(te)for(let Ce=0;Ce<E.length;Ce++)t.bindFramebuffer(a.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Me.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(le|=a.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(le|=a.STENCIL_BUFFER_BIT)),te){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);let k=n.get(E[Ce]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,k,0)}a.blitFramebuffer(0,0,K,pe,0,0,K,pe,le,a.NEAREST),c===!0&&(Xe.length=0,Xe.push(a.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Xe.push(Se),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),te)for(let Ce=0;Ce<E.length;Ce++){t.bindFramebuffer(a.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.RENDERBUFFER,Me.__webglColorRenderbuffer[Ce]);let k=n.get(E[Ce]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Me.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ce,a.TEXTURE_2D,k,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&c){let E=P.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[E])}}}function lt(P){return Math.min(i.maxSamples,P.samples)}function me(P){let E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function mt(P){let E=r.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function Oe(P,E){let K=P.colorSpace,pe=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==dn&&K!==aa&&(ft.getTransfer(K)===Et?(pe!==Pn||le!==fn)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",K)),E}function Qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=xe,this.resetTextureUnits=q,this.getTextureUnits=Y,this.setTextureUnits=ce,this.setTexture2D=fe,this.setTexture2DArray=Ie,this.setTexture3D=ze,this.setTextureCube=Pe,this.rebindTextures=Re,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=we,this.useMultisampledRTT=me,this.dispose=F}function CM(a,e){function t(n,i=aa){let s,r=ft.getTransfer(i);if(n===fn)return a.UNSIGNED_BYTE;if(n===Ll)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return a.UNSIGNED_SHORT_5_5_5_1;if(n===Zd)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===Qd)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yd)return a.BYTE;if(n===Jd)return a.SHORT;if(n===pr)return a.UNSIGNED_SHORT;if(n===Pl)return a.INT;if(n===bi)return a.UNSIGNED_INT;if(n===Wt)return a.FLOAT;if(n===Vt)return a.HALF_FLOAT;if(n===$d)return a.ALPHA;if(n===eu)return a.RGB;if(n===Pn)return a.RGBA;if(n===Ki)return a.DEPTH_COMPONENT;if(n===ia)return a.DEPTH_STENCIL;if(n===mr)return a.RED;if(n===Ul)return a.RED_INTEGER;if(n===Ca)return a.RG;if(n===Ol)return a.RG_INTEGER;if(n===kl)return a.RGBA_INTEGER;if(n===Ko||n===Yo||n===Jo||n===Zo)if(r===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Bl||n===zl||n===Hl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gl||n===Vl||n===jl||n===Wl||n===Xl||n===Qo||n===ql)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Gl||n===Vl)return r===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===jl)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return s.COMPRESSED_R11_EAC;if(n===Xl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Qo)return s.COMPRESSED_RG11_EAC;if(n===ql)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kl||n===Yl||n===Jl||n===Zl||n===Ql||n===$l||n===eh||n===th||n===nh||n===ih||n===ah||n===sh||n===rh||n===oh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Kl)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jl)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ql)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eh)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===th)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nh)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ih)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ah)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sh)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rh)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oh)return r===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ch||n===lh||n===hh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ch)return r===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===uh||n===$o||n===fh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===dh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===uh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$o)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}var NM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new bo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new kt({vertexShader:NM,fragmentShader:PM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Au=class extends di{constructor(e,t){super();let n=this,i=null,s=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,m=null,b=typeof XRWebGLBinding<"u",d=new Eu,g={},v=t.getContextAttributes(),_=null,y=null,S=[],w=[],x=new de,M=null,R=null,A=new Qt;A.viewport=new _t;let L=new Qt;L.viewport=new _t;let D=[A,L],U=new El,N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=S[Z];return fe===void 0&&(fe=new $s,S[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=S[Z];return fe===void 0&&(fe=new $s,S[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=S[Z];return fe===void 0&&(fe=new $s,S[Z]=fe),fe.getHandSpace()};function W(Z){let fe=w.indexOf(Z.inputSource);if(fe===-1)return;let Ie=S[fe];Ie!==void 0&&(Ie.update(Z.inputSource,Z.frame,l||r),Ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function j(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",H);for(let Z=0;Z<S.length;Z++){let fe=w[Z];fe!==null&&(w[Z]=null,S[Z].disconnect(fe))}N=null,F=null,d.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(_),p=null,f=null,u=null,i=null,y=null,xe.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),R!==null){let Z=R.camera;Z.fov=R.fov,Z.zoom=R.zoom,Z.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",j),i.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,ze=null,Pe=null;v.depth&&(Pe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=v.stencil?ia:Ki,ze=v.stencil?bs:bi);let Ye={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Ye),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Xt(f.textureWidth,f.textureHeight,{format:Pn,type:fn,depthTexture:new pi(f.textureWidth,f.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Ie),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Xt(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),xe.setContext(i),xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function H(Z){for(let fe=0;fe<Z.removed.length;fe++){let Ie=Z.removed[fe],ze=w.indexOf(Ie);ze>=0&&(w[ze]=null,S[ze].disconnect(Ie))}for(let fe=0;fe<Z.added.length;fe++){let Ie=Z.added[fe],ze=w.indexOf(Ie);if(ze===-1){for(let Ye=0;Ye<S.length;Ye++)if(Ye>=w.length){w.push(Ie),ze=Ye;break}else if(w[Ye]===null){w[Ye]=Ie,ze=Ye;break}if(ze===-1)break}let Pe=S[ze];Pe&&Pe.connect(Ie)}}function G(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let fe=Z.near,Ie=Z.far;d.texture!==null&&(d.depthNear>0&&(fe=d.depthNear),d.depthFar>0&&(Ie=d.depthFar)),U.near=L.near=A.near=fe,U.far=L.far=A.far=Ie,(N!==U.near||F!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),N=U.near,F=U.far),U.layers.mask=Z.layers.mask|6,A.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;let ze=Z.parent,Pe=U.cameras;G(U,ze);for(let Ye=0;Ye<Pe.length;Ye++)G(Pe[Ye],ze);U.projectionMatrix.copy(A.projectionMatrix),U.projectionMatrixInverse.copy(A.projectionMatrixInverse),R===null&&Z.isPerspectiveCamera&&(R={camera:Z,fov:Z.fov,zoom:Z.zoom}),q(Z,U,ze)};function q(Z,fe,Ie){Ie===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(Ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=es*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(U)},this.getCameraTexture=function(Z){return g[Z]};let Y=null;function ce(Z,fe){if(h=fe.getViewerPose(l||r),m=fe,h!==null){let Ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ze=!1;Ie.length!==U.cameras.length&&(U.cameras.length=0,ze=!0);for(let Je=0;Je<Ie.length;Je++){let Ue=Ie[Je],je=null;if(p!==null)je=p.getViewport(Ue);else{let ve=u.getViewSubImage(f,Ue);je=ve.viewport,Je===0&&(e.setRenderTargetTextures(y,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(y))}let ae=D[Je];ae===void 0&&(ae=new Qt,ae.layers.enable(Je),ae.viewport=new _t,D[Je]=ae),ae.matrix.fromArray(Ue.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Ue.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(je.x,je.y,je.width,je.height),Je===0&&(U.matrix.copy(ae.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ze===!0&&U.cameras.push(ae)}let Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let Je=u.getDepthInformation(Ie[0]);Je&&Je.isValid&&Je.texture&&d.init(Je,i.renderState)}if(Pe&&Pe.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let Je=0;Je<Ie.length;Je++){let Ue=Ie[Je].camera;if(Ue){let je=g[Ue];je||(je=new bo,g[Ue]=je);let ae=u.getCameraImage(Ue);je.sourceTexture=ae}}}}for(let Ie=0;Ie<S.length;Ie++){let ze=w[Ie],Pe=S[Ie];ze!==null&&Pe!==void 0&&Pe.update(ze,fe,l||r)}Y&&Y(Z,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),m=null}let xe=new Hm;xe.setAnimationLoop(ce),this.setAnimationLoop=function(Z){Y=Z},this.dispose=function(){}}},LM=new Ve,Zm=new ct;Zm.set(-1,0,0,0,1,0,0,0,1);function DM(a,e){function t(d,g){d.matrixAutoUpdate===!0&&d.updateMatrix(),g.value.copy(d.matrix)}function n(d,g){g.color.getRGB(d.fogColor.value,fu(a)),g.isFog?(d.fogNear.value=g.near,d.fogFar.value=g.far):g.isFogExp2&&(d.fogDensity.value=g.density)}function i(d,g,v,_,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(d,g):g.isMeshLambertMaterial?(s(d,g),g.envMap&&(d.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(d,g),u(d,g)):g.isMeshPhongMaterial?(s(d,g),h(d,g),g.envMap&&(d.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(d,g),f(d,g),g.isMeshPhysicalMaterial&&p(d,g,y)):g.isMeshMatcapMaterial?(s(d,g),m(d,g)):g.isMeshDepthMaterial?s(d,g):g.isMeshDistanceMaterial?(s(d,g),b(d,g)):g.isMeshNormalMaterial?s(d,g):g.isLineBasicMaterial?(r(d,g),g.isLineDashedMaterial&&o(d,g)):g.isPointsMaterial?c(d,g,v,_):g.isSpriteMaterial?l(d,g):g.isShadowMaterial?(d.color.value.copy(g.color),d.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(d,g){d.opacity.value=g.opacity,g.color&&d.diffuse.value.copy(g.color),g.emissive&&d.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(d.map.value=g.map,t(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.bumpMap&&(d.bumpMap.value=g.bumpMap,t(g.bumpMap,d.bumpMapTransform),d.bumpScale.value=g.bumpScale,g.side===un&&(d.bumpScale.value*=-1)),g.normalMap&&(d.normalMap.value=g.normalMap,t(g.normalMap,d.normalMapTransform),d.normalScale.value.copy(g.normalScale),g.side===un&&d.normalScale.value.negate()),g.displacementMap&&(d.displacementMap.value=g.displacementMap,t(g.displacementMap,d.displacementMapTransform),d.displacementScale.value=g.displacementScale,d.displacementBias.value=g.displacementBias),g.emissiveMap&&(d.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,d.emissiveMapTransform)),g.specularMap&&(d.specularMap.value=g.specularMap,t(g.specularMap,d.specularMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest);let v=e.get(g),_=v.envMap,y=v.envMapRotation;_&&(d.envMap.value=_,d.envMapRotation.value.setFromMatrix4(LM.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Zm),d.reflectivity.value=g.reflectivity,d.ior.value=g.ior,d.refractionRatio.value=g.refractionRatio),g.lightMap&&(d.lightMap.value=g.lightMap,d.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,d.lightMapTransform)),g.aoMap&&(d.aoMap.value=g.aoMap,d.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,d.aoMapTransform))}function r(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,g.map&&(d.map.value=g.map,t(g.map,d.mapTransform))}function o(d,g){d.dashSize.value=g.dashSize,d.totalSize.value=g.dashSize+g.gapSize,d.scale.value=g.scale}function c(d,g,v,_){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.size.value=g.size*v,d.scale.value=_*.5,g.map&&(d.map.value=g.map,t(g.map,d.uvTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function l(d,g){d.diffuse.value.copy(g.color),d.opacity.value=g.opacity,d.rotation.value=g.rotation,g.map&&(d.map.value=g.map,t(g.map,d.mapTransform)),g.alphaMap&&(d.alphaMap.value=g.alphaMap,t(g.alphaMap,d.alphaMapTransform)),g.alphaTest>0&&(d.alphaTest.value=g.alphaTest)}function h(d,g){d.specular.value.copy(g.specular),d.shininess.value=Math.max(g.shininess,1e-4)}function u(d,g){g.gradientMap&&(d.gradientMap.value=g.gradientMap)}function f(d,g){d.metalness.value=g.metalness,g.metalnessMap&&(d.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,d.metalnessMapTransform)),d.roughness.value=g.roughness,g.roughnessMap&&(d.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,d.roughnessMapTransform)),g.envMap&&(d.envMapIntensity.value=g.envMapIntensity)}function p(d,g,v){d.ior.value=g.ior,g.diffuseRoughness>0&&(d.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(d.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,d.diffuseRoughnessMapTransform))),g.sheen>0&&(d.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),d.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(d.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,d.sheenColorMapTransform)),g.sheenRoughnessMap&&(d.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,d.sheenRoughnessMapTransform))),g.clearcoat>0&&(d.clearcoat.value=g.clearcoat,d.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(d.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,d.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(d.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&d.clearcoatNormalScale.value.negate())),g.dispersion>0&&(d.dispersion.value=g.dispersion),g.retroreflectivity>0&&(d.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(d.iridescence.value=g.iridescence,d.iridescenceIOR.value=g.iridescenceIOR,d.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,d.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(d.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,d.iridescenceMapTransform)),g.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),g.transmission>0&&(d.transmission.value=g.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(d.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,d.transmissionMapTransform)),d.thickness.value=g.thickness,g.thicknessMap&&(d.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=g.attenuationDistance,d.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(d.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(d.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=g.specularIntensity,d.specularColor.value.copy(g.specularColor),g.specularColorMap&&(d.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,d.specularColorMapTransform)),g.specularIntensityMap&&(d.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,d.specularIntensityMapTransform))}function m(d,g){g.matcap&&(d.matcap.value=g.matcap)}function b(d,g){let v=e.get(g).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function UM(a,e,t,n){let i={},s={};function r(v,_){let y=_.program;n.uniformBlockBinding(v,y,i[v.id])}function o(v,_){let y=i[v.id];y===void 0&&(m(v),y=c(v),i[v.id]=y,v.addEventListener("dispose",d));let S=_.program;n.updateUBOMapping(v,S);let w=e.render.frame;s[v.id]!==w&&(l(v),s[v.id]=w)}function c(v){let _=a.createBuffer(),y=v.__size,S=v.usage;return a.bindBuffer(a.UNIFORM_BUFFER,_),a.bufferData(a.UNIFORM_BUFFER,y,S),a.bindBuffer(a.UNIFORM_BUFFER,null),_}function l(v){let _=i[v.id],y=v.uniforms,S=v.__cache;a.bindBuffer(a.UNIFORM_BUFFER,_);for(let w=0,x=y.length;w<x;w++){let M=y[w];if(Array.isArray(M))for(let R=0,A=M.length;R<A;R++)h(M[R],w,R,S);else h(M,w,0,S)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function h(v,_,y,S){if(f(v,_,y,S)===!0){let w=v.__offset,x=v.value;if(Array.isArray(x)){let M=0;for(let R=0;R<x.length;R++){let A=x[R],L=b(A,!0);u(A,v.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,w,v.__data)}}function u(v,_,y){typeof v=="number"||typeof v=="boolean"?_[y]=v:v.isMatrix3?(_[y]=v.elements[0],_[y+1]=v.elements[1],_[y+2]=v.elements[2],_[y+3]=0,_[y+4]=v.elements[3],_[y+5]=v.elements[4],_[y+6]=v.elements[5],_[y+7]=0,_[y+8]=v.elements[6],_[y+9]=v.elements[7],_[y+10]=v.elements[8],_[y+11]=0):ArrayBuffer.isView(v)?_.set(v.subarray(0,_.length-y),y):v.toArray(_,y)}function f(v,_,y,S){let w=v.value,x=_+"_"+y;if(Array.isArray(w)){S[x]===void 0&&(S[x]=[]);let M=S[x],R=!1;for(let A=0;A<w.length;A++)p(w[A],M,A)===!0&&(R=!0);return R}return p(w,S,x)}function p(v,_,y){if(_[y]===void 0)return typeof v=="number"||typeof v=="boolean"?_[y]=v:ArrayBuffer.isView(v)?_[y]=v.slice():_[y]=v.clone(),!0;{let S=_[y];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return _[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function m(v){let _=v.uniforms,y=0,S=16;for(let x=0,M=_.length;x<M;x++){let R=Array.isArray(_[x])?_[x]:[_[x]];for(let A=0,L=R.length;A<L;A++){let D=R[A],U=Array.isArray(D.value)?D.value:[D.value],N=Array.isArray(_[x])||Array.isArray(D.value),F=y;for(let j=0,H=U.length;j<H;j++){let G=U[j],q=b(G,N),Y=y%S,ce=Y%q.boundary,xe=Y+ce;y+=ce,xe!==0&&S-xe<q.storage&&(y+=S-xe),j===0&&(F=y),y+=q.storage}let W=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new W((y-F)/Float32Array.BYTES_PER_ELEMENT),D.__offset=F}}let w=y%S;return w>0&&(y+=S-w),v.__size=y,v.__cache={},this}function b(v,_){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):tt("WebGLRenderer: Unsupported uniform value type.",v),_===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function d(v){let _=v.target;_.removeEventListener("dispose",d),a.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function g(){for(let v in i)a.deleteBuffer(i[v]);i={},s={}}return{bind:r,update:o,dispose:g}}var OM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function kM(){return Ci===null&&(Ci=new ui(OM,16,16,Ca,Vt),Ci.name="DFG_LUT",Ci.minFilter=Tt,Ci.magFilter=Tt,Ci.wrapS=Dn,Ci.wrapT=Dn,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var vh=class{constructor(e={}){let{canvas:t=cm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=fn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;let b=p,d=new Set([kl,Ol,Ul]),g=new Set([fn,bi,pr,bs,Ll,Dl]),v=new Uint32Array(4),_=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,w=null,x=[],M=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,D=null,U=null,N=null,F=null;this._outputColorSpace=Rt;let W=0,j=0,H=null,G=-1,q=null,Y=new _t,ce=new _t,xe=null,Z=new Fe(0),fe=0,Ie=t.width,ze=t.height,Pe=1,Ye=null,xt=null,Je=new _t(0,0,Ie,ze),Ue=new _t(0,0,Ie,ze),je=!1,ae=new wi,ve=new ll,ge=!1,_e=!1,we=new Ve,re=new C,ue=new _t,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function nt(){return H===null?Pe:1}let O=n;function Xe(T,X){return t.getContext(T,X)}let Ze,lt,me,mt,Oe,Qe,P,E,K,pe,le,Se,Me,te,he,Ce,k,oe,ne,Ae,Ee,Ne,$e;try{let T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",B,!1),O===null){let X="webgl2";if(O=Xe(X,T),O===null)throw Xe(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(T){throw t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",B,!1),at("WebGLRenderer: "+T.message),T}function ut(){Ze=new Ky(O),Ze.init(),Ee=new CM(O,Ze),lt=new ky(O,Ze,e,Ee),me=new RM(O,Ze),lt.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),U=O.createFramebuffer(),N=O.createFramebuffer(),F=O.createFramebuffer(),mt=new Zy(O),Oe=new pM,Qe=new IM(O,Ze,me,Oe,lt,Ee,mt),P=new qy(A),E=new $0(O),Ne=new Uy(O,E),K=new Yy(O,E,mt,Ne),pe=new $y(O,K,E,Ne,mt),oe=new Qy(O,lt,Qe),he=new Fy(Oe),le=new fM(A,P,Ze,lt,Ne,he),Se=new DM(A,Oe),Me=new gM,te=new MM(Ze),k=new Dy(A,P,me,pe,m,c),Ce=new TM(A,pe,lt),$e=new UM(O,mt,lt,me),ne=new Oy(O,Ze,mt),Ae=new Jy(O,Ze,mt),mt.programs=le.programs,A.capabilities=lt,A.extensions=Ze,A.properties=Oe,A.renderLists=Me,A.shadowMap=Ce,A.state=me,A.info=mt}b!==fn&&(R=new t_(b,t.width,t.height,o,i,s));let I=new Au(A,O);this.xr=I,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=Ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(T){T!==void 0&&(Pe=T,this.setSize(Ie,ze,!1))},this.getSize=function(T){return T.set(Ie,ze)},this.setSize=function(T,X,ee=!0){if(I.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=T,ze=X,t.width=Math.floor(T*Pe),t.height=Math.floor(X*Pe),ee===!0&&(t.style.width=T+"px",t.style.height=X+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(Ie*Pe,ze*Pe).floor()},this.setDrawingBufferSize=function(T,X,ee){Ie=T,ze=X,Pe=ee,t.width=Math.floor(T*ee),t.height=Math.floor(X*ee),this.setViewport(0,0,T,X)},this.setEffects=function(T){if(b===fn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let X=0;X<T.length;X++)if(T[X].isOutputPass===!0){tt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Y)},this.getViewport=function(T){return T.copy(Je)},this.setViewport=function(T,X,ee,J){T.isVector4?Je.set(T.x,T.y,T.z,T.w):Je.set(T,X,ee,J),me.viewport(Y.copy(Je).multiplyScalar(nt()).round())},this.getScissor=function(T){return T.copy(Ue)},this.setScissor=function(T,X,ee,J){T.isVector4?Ue.set(T.x,T.y,T.z,T.w):Ue.set(T,X,ee,J),me.scissor(ce.copy(Ue).multiplyScalar(nt()).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(T){me.setScissorTest(je=T)},this.setOpaqueSort=function(T){Ye=T},this.setTransparentSort=function(T){xt=T},this.getClearColor=function(T){return T.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,ee=!0){let J=0;if(T){let Q=!1;if(H!==null){let De=H.texture.format;Q=d.has(De)}if(Q){let De=H.texture.type,We=g.has(De),Le=k.getClearColor(),Be=k.getClearAlpha(),et=Le.r,dt=Le.g,vt=Le.b;We?(v[0]=et,v[1]=dt,v[2]=vt,v[3]=Be,O.clearBufferuiv(O.COLOR,0,v)):(_[0]=et,_[1]=dt,_[2]=vt,_[3]=Be,O.clearBufferiv(O.COLOR,0,_))}else J|=O.COLOR_BUFFER_BIT}X&&(J|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",B,!1),k.dispose(),Me.dispose(),te.dispose(),Qe.dispose(),Oe.dispose(),P.dispose(),pe.dispose(),K.dispose(),Ne.dispose(),$e.dispose(),le.dispose(),I.dispose(),I.removeEventListener("sessionstart",Te),I.removeEventListener("sessionend",wt),Mt.stop()};function V(T){T.preventDefault(),ao("WebGLRenderer: Context Lost."),L=!0}function z(){ao("WebGLRenderer: Context Restored."),L=!1;let T=mt.autoReset,X=Ce.enabled,ee=Ce.autoUpdate,J=Ce.needsUpdate,Q=Ce.type;ut(),mt.autoReset=T,Ce.enabled=X,Ce.autoUpdate=ee,Ce.needsUpdate=J,Ce.type=Q}function B(T){at("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $(T){let X=T.target;X.removeEventListener("dispose",$),ie(X)}function ie(T){se(T),Oe.remove(T)}function se(T){let X=Oe.get(T).programs;X!==void 0&&(X.forEach(function(ee){le.releaseProgram(ee)}),T.isShaderMaterial&&le.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,ee,J,Q,De){X===null&&(X=ye);let We=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Le=gb(T,X,ee,J,Q);me.setMaterial(J,We);let Be=ee.index,et=1;if(J.wireframe===!0){if(Be=K.getWireframeAttribute(ee),Be===void 0)return;et=2}let dt=ee.drawRange,vt=ee.attributes.position,qe=dt.start*et,yt=(dt.start+dt.count)*et;De!==null&&(qe=Math.max(qe,De.start*et),yt=Math.min(yt,(De.start+De.count)*et)),Be!==null?(qe=Math.max(qe,0),yt=Math.min(yt,Be.count)):vt!=null&&(qe=Math.max(qe,0),yt=Math.min(yt,vt.count));let Kt=yt-qe;if(Kt<0||Kt===1/0)return;Ne.setup(Q,J,Le,ee,Be);let Lt,Pt=ne;if(Be!==null&&(Lt=E.get(Be),Pt=Ae,Pt.setIndex(Lt)),Q.isMesh)J.wireframe===!0?(me.setLineWidth(J.wireframeLinewidth*nt()),Pt.setMode(O.LINES)):Pt.setMode(O.TRIANGLES);else if(Q.isLine){let mn=J.linewidth;mn===void 0&&(mn=1),me.setLineWidth(mn*nt()),Q.isLineSegments?Pt.setMode(O.LINES):Q.isLineLoop?Pt.setMode(O.LINE_LOOP):Pt.setMode(O.LINE_STRIP)}else Q.isPoints?Pt.setMode(O.POINTS):Q.isSprite&&Pt.setMode(O.TRIANGLES);if(Q.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let mn=Q._multiDrawStarts,Ke=Q._multiDrawCounts,Tn=Q._multiDrawCount,At=Be?E.get(Be).bytesPerElement:1,Ga=Oe.get(J).currentProgram.getUniforms();for(let gn=0;gn<Tn;gn++)Ga.setValue(O,"_gl_DrawID",gn),Pt.render(mn[gn]/At,Ke[gn])}else if(Q.isInstancedMesh)Pt.renderInstances(qe,Kt,Q.count);else if(ee.isInstancedBufferGeometry){let mn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ke=Math.min(ee.instanceCount,mn);Pt.renderInstances(qe,Kt,Ke)}else Pt.render(qe,Kt)};function be(T,X,ee,J){D!==null&&T.isNodeMaterial&&D.setObject(J,T),ge===!0&&he.setState(T,ee,!1),T.transparent===!0&&T.side===Gt&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,da(T,X,J),T.side=Ri,T.needsUpdate=!0,da(T,X,J),T.side=Gt):da(T,X,J)}this.compile=function(T,X,ee=null){ee===null&&(ee=T),D!==null&&D.renderStart(T,X,ee),w=te.get(ee),w.init(X),M.push(w),ee.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),T!==ee&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),w.setupLights(),D!==null&&D.updateLights(w.state.lightsArray),_e=this.localClippingEnabled,ge=he.init(this.clippingPlanes,_e),ge===!0&&he.setGlobalState(this.clippingPlanes,X),D!==null&&Ce.render(w.state.shadowsArray,ee,X);let J=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let De=Q.material;if(De)if(Array.isArray(De))for(let We=0;We<De.length;We++){let Le=De[We];be(Le,ee,X,Q),J.add(Le)}else be(De,ee,X,Q),J.add(De)}),w=M.pop(),D!==null&&D.renderEnd(),J},this.compileAsync=function(T,X,ee=null){let J=this.compile(T,X,ee);return new Promise(Q=>{function De(){if(J.forEach(function(We){let Be=Oe.get(We).currentProgram;(Be===void 0||Be.isReady())&&J.delete(We)}),J.size===0){Q(T);return}setTimeout(De,10)}Ze.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let He=null;function Ge(T){He&&He(T)}function Te(){Mt.stop()}function wt(){Mt.start()}let Mt=new Hm;Mt.setAnimationLoop(Ge),typeof self<"u"&&Mt.setContext(self),this.setAnimationLoop=function(T){He=T,I.setAnimationLoop(T),T===null?Mt.stop():Mt.start()},I.addEventListener("sessionstart",Te),I.addEventListener("sessionend",wt),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(T,X);let ee=I.enabled===!0&&I.isPresenting===!0,J=R!==null&&(H===null||ee)&&R.begin(A,H);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(I.cameraAutoUpdate===!0&&I.updateCamera(X),X=I.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,X,H),w=te.get(T,M.length),w.init(X),w.state.textureUnits=Qe.getTextureUnits(),M.push(w),we.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?ve.setFromArrayCamera(X):ae.setFromProjectionMatrix(we,Zn,X.reversedDepth),_e=this.localClippingEnabled,ge=he.init(this.clippingPlanes,_e),S=Me.get(T,x.length),S.init(),x.push(S),this.info.render.frame++,I.enabled===!0&&I.isPresenting===!0){let We=A.xr.getDepthSensingMesh();We!==null&&an(We,X,-1/0,A.sortObjects)}an(T,X,0,A.sortObjects),S.finish(),D!==null&&D.updateLights(w.state.lightsArray),A.sortObjects===!0&&S.sort(Ye,xt),Re=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1,Re&&k.addToRenderList(S,T),this.info.autoReset===!0&&this.info.reset(),ge===!0&&he.beginShadows();let Q=w.state.shadowsArray;if(Ce.render(Q,T,X),ge===!0&&he.endShadows(),(J&&R.hasRenderPass())===!1){let We=S.opaque,Le=S.transmissive;if(w.setupLights(),X.isArrayCamera){let Be=X.cameras;if(Le.length>0)for(let et=0,dt=Be.length;et<dt;et++){let vt=Be[et];As(We,Le,T,vt)}Re&&k.render(T);for(let et=0,dt=Be.length;et<dt;et++){let vt=Be[et];kr(S,T,vt,vt.viewport)}}else Le.length>0&&As(We,Le,T,X),Re&&k.render(T),kr(S,T,X)}H!==null&&j===0&&(Qe.updateMultisampleRenderTarget(H),Qe.updateRenderTargetMipmap(H)),J&&R.end(A),T.isScene===!0&&T.onAfterRender(A,T,X),Ne.resetDefaultState(),G=-1,q=null,M.pop(),M.length>0?(w=M[M.length-1],Qe.setTextureUnits(w.state.textureUnits),ge===!0&&he.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?S=x[x.length-1]:S=null,D!==null&&D.renderEnd()};function an(T,X,ee,J){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)ee=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let We=X.isArrayCamera?ve:ae;if(!T.frustumCulled||T.intersectsFrustum(We)){J&&ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);let Le=pe.update(T),Be=T.material;Be.visible&&S.push(T,Le,Be,ee,ue.z,null,X)}}else if(T.isMesh||T.isLine||T.isPoints){let We=X.isArrayCamera?ve:ae;if(!T.frustumCulled||T.intersectsFrustum(We)){let Le=pe.update(T),Be=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ue.copy(T.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ue.copy(Le.boundingSphere.center)),ue.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(Be)){let et=Le.groups;for(let dt=0,vt=et.length;dt<vt;dt++){let qe=et[dt],yt=Be[qe.materialIndex];yt&&yt.visible&&S.push(T,Le,yt,ee,ue.z,qe,X)}}else Be.visible&&S.push(T,Le,Be,ee,ue.z,null,X)}}}let De=T.children;for(let We=0,Le=De.length;We<Le;We++)an(De[We],X,ee,J)}function kr(T,X,ee,J){let{opaque:Q,transmissive:De,transparent:We}=T;w.setupLightsView(ee),ge===!0&&he.setGlobalState(A.clippingPlanes,ee),J&&me.viewport(Y.copy(J)),Q.length>0&&ha(Q,X,ee),De.length>0&&ha(De,X,ee),We.length>0&&ha(We,X,ee),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function As(T,X,ee,J){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[J.id]===void 0){let qe=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[J.id]=new Xt(1,1,{generateMipmaps:!0,type:qe?Vt:fn,minFilter:en,samples:Math.max(4,lt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let De=w.state.transmissionRenderTarget[J.id],We=J.viewport||Y;De.setSize(We.z*A.transmissionResolutionScale,We.w*A.transmissionResolutionScale);let Le=A.getRenderTarget(),Be=A.getActiveCubeFace(),et=A.getActiveMipmapLevel();A.setRenderTarget(De),A.getClearColor(Z),fe=A.getClearAlpha(),fe<1&&A.setClearColor(16777215,.5),A.clear(),Re&&k.render(ee);let dt=A.toneMapping;A.toneMapping=Ii;let vt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),w.setupLightsView(J),ge===!0&&he.setGlobalState(A.clippingPlanes,J),ha(T,ee,J),Qe.updateMultisampleRenderTarget(De),Qe.updateRenderTargetMipmap(De),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let yt=0,Kt=X.length;yt<Kt;yt++){let Lt=X[yt],{object:Pt,geometry:mn,material:Ke,group:Tn}=Lt;if(Ke.side===Gt&&Pt.layers.test(J.layers)){let At=Ke.side;Ke.side=un,Ke.needsUpdate=!0,_i(Pt,ee,J,mn,Ke,Tn),Ke.side=At,Ke.needsUpdate=!0,qe=!0}}qe===!0&&(Qe.updateMultisampleRenderTarget(De),Qe.updateRenderTargetMipmap(De))}A.setRenderTarget(Le,Be,et),A.setClearColor(Z,fe),vt!==void 0&&(J.viewport=vt),A.toneMapping=dt}function ha(T,X,ee){let J=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,De=T.length;Q<De;Q++){let We=T[Q],{object:Le,geometry:Be,group:et}=We,dt=We.material;dt.allowOverride===!0&&J!==null&&(dt=J),Le.layers.test(ee.layers)&&_i(Le,X,ee,Be,dt,et)}}function _i(T,X,ee,J,Q,De){D!==null&&Q.isNodeMaterial&&D.setObject(T,Q),T.onBeforeRender(A,X,ee,J,Q,De),T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(A,X,ee,J,T,De),Q.transparent===!0&&Q.side===Gt&&Q.forceSinglePass===!1?(Q.side=un,Q.needsUpdate=!0,A.renderBufferDirect(ee,X,J,Q,T,De),Q.side=Ri,Q.needsUpdate=!0,A.renderBufferDirect(ee,X,J,Q,T,De),Q.side=Gt):A.renderBufferDirect(ee,X,J,Q,T,De),T.onAfterRender(A,X,ee,J,Q,De)}function Fr(T){let X=0;for(let ee of T)ee.texture!==null&&X++;return X}function da(T,X,ee){X.isScene!==!0&&(X=ye);let J=Oe.get(T),Q=w.state.lights,De=w.state.shadowsArray,We=Q.state.version,Le=le.getParameters(T,Q.state,De,X,ee,w.state.lightProbeGridArray),Be=le.getProgramCacheKey(Le),et=J.programs;J.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,J.fog=X.fog;let dt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;J.envMap=P.get(T.envMap||J.environment,dt),J.envMapRotation=J.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,et===void 0&&(T.addEventListener("dispose",$),et=new Map,J.programs=et,J.programVariants=new Map);let vt=et.get(Be);if(vt!==void 0){if(J.currentProgram===vt&&J.lightsStateVersion===We)return Rf(T,Le),vt}else Le.uniforms=le.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,ee,Le),T.onBeforeCompile(Le,A),vt=le.acquireProgram(Le,Be),et.set(Be,vt),J.uniforms=Le.uniforms;let qe=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(qe.clippingPlanes=he.uniform),Rf(T,Le),J.needsLights=xb(T),J.lightsStateVersion=We,J.needsLights&&(qe.ambientLightColor.value=Q.state.ambient,qe.lightProbe.value=Q.state.probe,qe.sunLights.value=Q.state.sun,qe.sunLightShadows.value=Q.state.sunShadow,qe.directionalLights.value=Q.state.directional,qe.directionalLightShadows.value=Q.state.directionalShadow,qe.spotLights.value=Q.state.spot,qe.spotLightShadows.value=Q.state.spotShadow,qe.rectAreaLights.value=Q.state.rectArea,qe.ltc_1.value=Q.state.rectAreaLTC1,qe.ltc_2.value=Q.state.rectAreaLTC2,qe.pointLights.value=Q.state.point,qe.pointLightShadows.value=Q.state.pointShadow,qe.hemisphereLights.value=Q.state.hemi,qe.sunShadowMatrix.value=Q.state.sunShadowMatrix,qe.sunShadowCascade.value=Q.state.sunShadowCascade,qe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qe.spotLightMatrix.value=Q.state.spotLightMatrix,qe.spotLightMap.value=Q.state.spotLightMap,qe.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.numLightProbeGrids=Fr(w.state.lightProbeGridArray),J.currentProgram=vt,J.uniformsList=null,vt}function ua(T,X,ee,J,Q){let De=Oe.get(T),We=De.currentProgram.id+","+J+","+Q,Le=De.programVariants.get(We);return Le===void 0?(Le=da(T,X,ee),De.programVariants.set(We,Le)):(De.currentProgram=Le,De.uniformsList=null,De.outputColorSpace=J,De.toneMapping=Q),Le}function Ts(T){if(T.uniformsList===null){let X=T.currentProgram.getUniforms();T.uniformsList=br.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Rf(T,X){let ee=Oe.get(T);ee.outputColorSpace=X.outputColorSpace,ee.batching=X.batching,ee.batchingColor=X.batchingColor,ee.instancing=X.instancing,ee.instancingColor=X.instancingColor,ee.instancingMorph=X.instancingMorph,ee.skinning=X.skinning,ee.morphTargets=X.morphTargets,ee.morphNormals=X.morphNormals,ee.morphColors=X.morphColors,ee.morphTargetsCount=X.morphTargetsCount,ee.numClippingPlanes=X.numClippingPlanes,ee.numIntersection=X.numClipIntersection,ee.vertexAlphas=X.vertexAlphas,ee.vertexTangents=X.vertexTangents,ee.toneMapping=X.toneMapping}function gb(T,X,ee,J,Q){X.isScene!==!0&&(X=ye),Qe.resetTextureUnits();let De=X.fog,We=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?X.environment:null,Le=H===null?A.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ft.workingColorSpace,Be=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,et=P.get(J.envMap||We,Be),dt=J.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,vt=!!ee.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),qe=!!ee.morphAttributes.position,yt=!!ee.morphAttributes.normal,Kt=!!ee.morphAttributes.color,Lt=Ii;J.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Lt=A.toneMapping);let Pt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,mn=Pt!==void 0?Pt.length:0,Ke=Oe.get(J),Tn=w.state.lights;if(ge===!0&&(_e===!0||T!==q)){let Bt=T===q&&J.id===G;he.setState(J,T,Bt)}let At=!1,Ga=!1;J.version===Ke.__version?Ke.needsLights&&Ke.lightsStateVersion!==Tn.state.version||Q.isBatchedMesh&&Ke.batching===!1||!Q.isBatchedMesh&&Ke.batching===!0||Q.isBatchedMesh&&Ke.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Ke.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Ke.instancing===!1||!Q.isInstancedMesh&&Ke.instancing===!0||Q.isSkinnedMesh&&Ke.skinning===!1||!Q.isSkinnedMesh&&Ke.skinning===!0||Q.isInstancedMesh&&Ke.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ke.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ke.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ke.instancingMorph===!1&&Q.morphTexture!==null||Ke.envMap!==et||J.fog===!0&&Ke.fog!==De||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==he.numPlanes||Ke.numIntersection!==he.numIntersection)||Ke.vertexAlphas!==dt||Ke.vertexTangents!==vt||Ke.morphTargets!==qe||Ke.morphNormals!==yt||Ke.morphColors!==Kt||Ke.morphTargetsCount!==mn||Ke.numLightProbeGrids!==Fr(w.state.lightProbeGridArray)?At=!0:(Ke.outputColorSpace!==Le||Ke.toneMapping!==Lt)&&(Ga=!0):(At=!0,Ke.__version=J.version);let gn=Ke.currentProgram;(At===!0||Ga===!0)&&(gn=Ga===!0?ua(J,X,Q,Le,Lt):da(J,X,Q),D&&J.isNodeMaterial&&D.onUpdateProgram(J,gn,Ke));let yc=!1,fa=!1,Va=!1,St=gn.getUniforms(),hn=Ke.uniforms;if(me.useProgram(gn.program)&&(yc=!0,fa=!0,Va=!0),J.id!==G&&(G=J.id,fa=!0),yc||q!==T){me.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),St.setValue(O,"projectionMatrix",T.projectionMatrix),St.setValue(O,"viewMatrix",T.matrixWorldInverse);let sn=St.map.cameraPosition;sn!==void 0&&sn.setValue(O,re.setFromMatrixPosition(T.matrixWorld)),lt.logarithmicDepthBuffer&&St.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&St.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),q!==T&&(q=T,fa=!0,Va=!0)}if(Ke.needsLights&&(Tn.state.sunShadowMap.length>0&&St.setValue(O,"sunShadowMap",Tn.state.sunShadowMap,Qe),Tn.state.directionalShadowMap.length>0&&St.setValue(O,"directionalShadowMap",Tn.state.directionalShadowMap,Qe),Tn.state.spotShadowMap.length>0&&St.setValue(O,"spotShadowMap",Tn.state.spotShadowMap,Qe),Tn.state.pointShadowMap.length>0&&St.setValue(O,"pointShadowMap",Tn.state.pointShadowMap,Qe)),Q.isSkinnedMesh){St.setOptional(O,Q,"bindMatrix"),St.setOptional(O,Q,"bindMatrixInverse");let Bt=Q.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),St.setValue(O,"boneTexture",Bt.boneTexture,Qe))}Q.isBatchedMesh&&(St.setOptional(O,Q,"batchingTexture"),St.setValue(O,"batchingTexture",Q._matricesTexture,Qe),St.setOptional(O,Q,"batchingIdTexture"),St.setValue(O,"batchingIdTexture",Q._indirectTexture,Qe),St.setOptional(O,Q,"batchingColorTexture"),Q._colorsTexture!==null&&St.setValue(O,"batchingColorTexture",Q._colorsTexture,Qe));let oi=ee.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&oe.update(Q,ee,gn),(fa||Ke.receiveShadow!==Q.receiveShadow)&&(Ke.receiveShadow=Q.receiveShadow,St.setValue(O,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&X.environment!==null&&(hn.envMapIntensity.value=X.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=kM()),fa){if(St.setValue(O,"toneMappingExposure",A.toneMappingExposure),Ke.needsLights&&bb(hn,Va),De&&J.fog===!0&&Se.refreshFogUniforms(hn,De),Se.refreshMaterialUniforms(hn,J,Pe,ze,w.state.transmissionRenderTarget[T.id]),Ke.needsLights&&Ke.numLightProbeGrids>0){let Bt=y,sn=0;for(let Fi of w.state.lightProbeGridArray)Fi.texture!==null&&(Bt.textures[sn]=Fi.texture,Bt.min[sn]=Fi.boundingBox.min,Bt.max[sn]=Fi.boundingBox.max,Bt.resolution[sn]=Fi.resolution,sn++);for(let Fi in Bt)Bt[Fi].length=sn;hn.probesSH.value=Bt.textures,hn.probesMin.value=Bt.min,hn.probesMax.value=Bt.max,hn.probesResolution.value=Bt.resolution}br.upload(O,Ts(Ke),hn,Qe)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(br.upload(O,Ts(Ke),hn,Qe),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&St.setValue(O,"center",Q.center),St.setValue(O,"modelViewMatrix",Q.modelViewMatrix),St.setValue(O,"normalMatrix",Q.normalMatrix),St.setValue(O,"modelMatrix",Q.matrixWorld),J.uniformsGroups!==void 0){let Bt=J.uniformsGroups;for(let sn=0,Fi=Bt.length;sn<Fi;sn++){let Cf=Bt[sn];$e.update(Cf,gn),$e.bind(Cf,gn)}}return gn}function bb(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.sunLights.needsUpdate=X,T.sunLightShadows.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function xb(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(T,X,ee){let J=Oe.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Oe.get(T.texture).__webglTexture=X,Oe.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ee,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){let ee=Oe.get(T);ee.__webglFramebuffer=X,ee.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(T,X=0,ee=0){H=T,W=X,j=ee;let J=null,Q=!1,De=!1;if(T){let Le=Oe.get(T);if(Le.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(O.FRAMEBUFFER,Le.__webglFramebuffer),Y.copy(T.viewport),ce.copy(T.scissor),xe=T.scissorTest,me.viewport(Y),me.scissor(ce),me.setScissorTest(xe),G=-1;return}else if(Le.__webglFramebuffer===void 0)Qe.setupRenderTarget(T);else if(Le.__hasExternalTextures)Qe.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let dt=T.depthTexture;if(Le.__boundDepthTexture!==dt){if(dt!==null&&Oe.has(dt)&&(T.width!==dt.image.width||T.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(T)}}let Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(De=!0);let et=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(et[X])?J=et[X][ee]:J=et[X],Q=!0):T.samples>0&&Qe.useMultisampledRTT(T)===!1?J=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(et)?J=et[ee]:J=et,Y.copy(T.viewport),ce.copy(T.scissor),xe=T.scissorTest}else Y.copy(Je).multiplyScalar(Pe).floor(),ce.copy(Ue).multiplyScalar(Pe).floor(),xe=je;if(ee!==0&&(J=U),me.bindFramebuffer(O.FRAMEBUFFER,J)&&me.drawBuffers(T,J),me.viewport(Y),me.scissor(ce),me.setScissorTest(xe),Q){let Le=Oe.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,ee)}else if(De){let Le=X;for(let Be=0;Be<T.textures.length;Be++){let et=Oe.get(T.textures[Be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Be,et.__webglTexture,ee,Le)}}else if(T!==null&&ee!==0){let Le=Oe.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Le.__webglTexture,ee)}G=-1};function If(T){let X=Oe.get(T);return(X.__readFormat!==T.format||X.__readType!==T.type)&&(X.__readFormat=T.format,X.__readType=T.type,X.__formatReadable=lt.textureFormatReadable(T.format),X.__typeReadable=lt.textureTypeReadable(T.type)),X}this.readRenderTargetPixels=function(T,X,ee,J,Q,De,We,Le=0){if(!(T&&T.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&We!==void 0&&(Be=Be[We],Array.isArray(Be)&&(Be=Be[0])),Be){me.bindFramebuffer(O.FRAMEBUFFER,Be);try{let et=T.textures[Le],dt=et.format,vt=et.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le);let qe=If(et);if(qe.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-J&&ee>=0&&ee<=T.height-Q&&O.readPixels(X,ee,J,Q,Ee.convert(dt),Ee.convert(vt),De)}finally{let et=H!==null?Oe.get(H).__webglFramebuffer:null;me.bindFramebuffer(O.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(T,X,ee,J,Q,De,We,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&We!==void 0&&(Be=Be[We],Array.isArray(Be)&&(Be=Be[0])),Be)if(X>=0&&X<=T.width-J&&ee>=0&&ee<=T.height-Q){me.bindFramebuffer(O.FRAMEBUFFER,Be);let et=T.textures[Le],dt=et.format,vt=et.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le);let qe=If(et);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let yt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,yt),O.bufferData(O.PIXEL_PACK_BUFFER,De.byteLength,O.STREAM_READ),O.readPixels(X,ee,J,Q,Ee.convert(dt),Ee.convert(vt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Kt=H!==null?Oe.get(H).__webglFramebuffer:null;me.bindFramebuffer(O.FRAMEBUFFER,Kt);let Lt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await hm(O,Lt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,yt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,De),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(yt),O.deleteSync(Lt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,ee=0){let J=Math.pow(2,-ee),Q=Math.floor(T.image.width*J),De=Math.floor(T.image.height*J),We=X!==null?X.x:0,Le=X!==null?X.y:0;Qe.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,ee,0,0,We,Le,Q,De),me.unbindTexture()},this.copyTextureToTexture=function(T,X,ee=null,J=null,Q=0,De=0){let We,Le,Be,et,dt,vt,qe,yt,Kt,Lt=T.isCompressedTexture?T.mipmaps[De]:T.image;if(ee!==null)We=ee.max.x-ee.min.x,Le=ee.max.y-ee.min.y,Be=ee.isBox3?ee.max.z-ee.min.z:1,et=ee.min.x,dt=ee.min.y,vt=ee.isBox3?ee.min.z:0;else{let St=Math.pow(2,-Q);We=Math.floor(Lt.width*St),Le=Math.floor(Lt.height*St),T.isDataArrayTexture?Be=Lt.depth:T.isData3DTexture?Be=Math.floor(Lt.depth*St):Be=1,et=0,dt=0,vt=0}J!==null?(qe=J.x,yt=J.y,Kt=J.z):(qe=0,yt=0,Kt=0);let Pt=Ee.convert(X.format),mn=Ee.convert(X.type),Ke;X.isData3DTexture?(Qe.setTexture3D(X,0),Ke=O.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Qe.setTexture2DArray(X,0),Ke=O.TEXTURE_2D_ARRAY):(Qe.setTexture2D(X,0),Ke=O.TEXTURE_2D),me.activeTexture(O.TEXTURE0),me.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,X.flipY),me.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),me.pixelStorei(O.UNPACK_ALIGNMENT,X.unpackAlignment);let Tn=me.getParameter(O.UNPACK_ROW_LENGTH),At=me.getParameter(O.UNPACK_IMAGE_HEIGHT),Ga=me.getParameter(O.UNPACK_SKIP_PIXELS),gn=me.getParameter(O.UNPACK_SKIP_ROWS),yc=me.getParameter(O.UNPACK_SKIP_IMAGES);me.pixelStorei(O.UNPACK_ROW_LENGTH,Lt.width),me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Lt.height),me.pixelStorei(O.UNPACK_SKIP_PIXELS,et),me.pixelStorei(O.UNPACK_SKIP_ROWS,dt),me.pixelStorei(O.UNPACK_SKIP_IMAGES,vt);let fa=T.isDataArrayTexture||T.isData3DTexture,Va=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){let St=Oe.get(T),hn=Oe.get(X),oi=Oe.get(St.__renderTarget),Bt=Oe.get(hn.__renderTarget);me.bindFramebuffer(O.READ_FRAMEBUFFER,oi.__webglFramebuffer),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let sn=0;sn<Be;sn++)fa&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(T).__webglTexture,Q,vt+sn),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(X).__webglTexture,De,Kt+sn)),O.blitFramebuffer(et,dt,et+We,dt+Le,qe,yt,qe+We,yt+Le,O.DEPTH_BUFFER_BIT,O.NEAREST);me.bindFramebuffer(O.READ_FRAMEBUFFER,null),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||Oe.has(T)){let St=Oe.get(T),hn=Oe.get(X);me.bindFramebuffer(O.READ_FRAMEBUFFER,N),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,F);for(let oi=0;oi<Be;oi++)fa?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.__webglTexture,Q,vt+oi):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,St.__webglTexture,Q),Va?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,hn.__webglTexture,De,Kt+oi):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,hn.__webglTexture,De),Q!==0?O.blitFramebuffer(et,dt,et+We,dt+Le,qe,yt,qe+We,yt+Le,O.COLOR_BUFFER_BIT,O.NEAREST):Va?O.copyTexSubImage3D(Ke,De,qe,yt,Kt+oi,et,dt,We,Le):O.copyTexSubImage2D(Ke,De,qe,yt,et,dt,We,Le);me.bindFramebuffer(O.READ_FRAMEBUFFER,null),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Va?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Ke,De,qe,yt,Kt,We,Le,Be,Pt,mn,Lt.data):X.isCompressedArrayTexture?O.compressedTexSubImage3D(Ke,De,qe,yt,Kt,We,Le,Be,Pt,Lt.data):O.texSubImage3D(Ke,De,qe,yt,Kt,We,Le,Be,Pt,mn,Lt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,De,qe,yt,We,Le,Pt,mn,Lt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,De,qe,yt,Lt.width,Lt.height,Pt,Lt.data):O.texSubImage2D(O.TEXTURE_2D,De,qe,yt,We,Le,Pt,mn,Lt);me.pixelStorei(O.UNPACK_ROW_LENGTH,Tn),me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At),me.pixelStorei(O.UNPACK_SKIP_PIXELS,Ga),me.pixelStorei(O.UNPACK_SKIP_ROWS,gn),me.pixelStorei(O.UNPACK_SKIP_IMAGES,yc),De===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&O.generateMipmap(Ke),me.unbindTexture()},this.initRenderTarget=function(T){Oe.get(T).__webglFramebuffer===void 0&&Qe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Qe.setTextureCube(T,0):T.isData3DTexture?Qe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Qe.setTexture2DArray(T,0):Qe.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){W=0,j=0,H=null,me.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var Mh=class extends Do{constructor(e){super(e),this.type=Vt}parse(e){let r=function(M,R){switch(M){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(R||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(R||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(R||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(R||""))}},u=function(M,R,A){R=R||1024;let D=M.pos,U=-1,N=0,F="",W=String.fromCharCode.apply(null,new Uint16Array(M.subarray(D,D+128)));for(;0>(U=W.indexOf(`
`))&&N<R&&D<M.byteLength;)F+=W,N+=W.length,D+=128,W=String.fromCharCode.apply(null,new Uint16Array(M.subarray(D,D+128)));return-1<U?(A!==!1&&(M.pos+=N+U+1),F+W.slice(0,U)):!1},f=function(M){let R=/^#\?(\S+)/,A=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},F,W;for((M.pos>=M.byteLength||!(F=u(M)))&&r(1,"no header found"),(W=F.match(R))||r(3,"bad initial token"),N.valid|=1,N.programtype=W[1],N.string+=F+`
`;F=u(M),F!==!1;){if(N.string+=F+`
`,F.charAt(0)==="#"){N.comments+=F+`
`;continue}if((W=F.match(A))&&(N.gamma=parseFloat(W[1])),(W=F.match(L))&&(N.exposure=parseFloat(W[1])),(W=F.match(D))&&(N.valid|=2,N.format=W[1]),(W=F.match(U))&&(N.valid|=4,N.height=parseInt(W[1],10),N.width=parseInt(W[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||r(3,"missing format specifier"),N.valid&4||r(3,"missing image size specifier"),N},p=function(M,R,A){let L=R;if(L<8||L>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);L!==(M[2]<<8|M[3])&&r(3,"wrong scanline width");let D=new Uint8Array(4*R*A);D.length||r(4,"unable to allocate buffer space");let U=0,N=0,F=4*L,W=new Uint8Array(4),j=new Uint8Array(F),H=A;for(;H>0&&N<M.byteLength;){N+4>M.byteLength&&r(1),W[0]=M[N++],W[1]=M[N++],W[2]=M[N++],W[3]=M[N++],(W[0]!=2||W[1]!=2||(W[2]<<8|W[3])!=L)&&r(3,"bad rgbe scanline format");let G=0,q;for(;G<F&&N<M.byteLength;){q=M[N++];let ce=q>128;if(ce&&(q-=128),(q===0||G+q>F)&&r(3,"bad scanline data"),ce){let xe=M[N++];for(let Z=0;Z<q;Z++)j[G++]=xe}else j.set(M.subarray(N,N+q),G),G+=q,N+=q}let Y=L;for(let ce=0;ce<Y;ce++){let xe=0;D[U]=j[ce+xe],xe+=L,D[U+1]=j[ce+xe],xe+=L,D[U+2]=j[ce+xe],xe+=L,D[U+3]=j[ce+xe],U+=4}H--}return D},m=function(M,R,A,L){let D=M[R+3],U=Math.pow(2,D-128)/255;A[L+0]=M[R+0]*U,A[L+1]=M[R+1]*U,A[L+2]=M[R+2]*U,A[L+3]=1},b=function(M,R,A,L){let D=M[R+3],U=Math.pow(2,D-128)/255;A[L+0]=_a.toHalfFloat(Math.min(M[R+0]*U,65504)),A[L+1]=_a.toHalfFloat(Math.min(M[R+1]*U,65504)),A[L+2]=_a.toHalfFloat(Math.min(M[R+2]*U,65504)),A[L+3]=_a.toHalfFloat(1)},d=new Uint8Array(e);d.pos=0;let g=f(d),v=g.width,_=g.height,y=p(d.subarray(d.pos),v,_),S,w,x;switch(this.type){case Wt:x=y.length/4;let M=new Float32Array(x*4);for(let A=0;A<x;A++)m(y,A*4,M,A*4);S=M,w=Wt;break;case Vt:x=y.length/4;let R=new Uint16Array(x*4);for(let A=0;A<x;A++)b(y,A*4,R,A*4);S=R,w=Vt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:v,height:_,data:S,header:g.string,gamma:g.gamma,exposure:g.exposure,type:w,colorSpace:dn,minFilter:Tt,magFilter:Tt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var Sh=new Ve,Tu=new Ve,Ru=new C,wh=new C,$n=new C,Iu=[new C,new C,new C,new C],Cu=[new C,new C,new C,new C],yr=[new C,new C,new C,new C,new C,new C,new C,new C],ra=2,FM=.1,Eh=class extends Ia{constructor(){super(new Qn(-5,5,5,-5,.5,500)),this.isSunLightShadow=!0,this.mapSize.set(1024,1024),this._cameras=[],this._matrices=[],this._frustums=[],this._cascadeSplits=new Array(ra+1).fill(0),this._cascadeData=[],this._viewportCount=ra,this._frameExtents.set(2,1);for(let e=0;e<ra;e++)this._cameras.push(new Qn),this._matrices.push(new Ve),this._frustums.push(new wi),this._cascadeData.push(new _t);for(;this._viewports.length<ra;)this._viewports.push(new _t)}getCamera(e=0){return this._cameras[e]}getMatrix(e=0){return this._matrices[e]}getFrustum(e=0){return this._frustums[e]}updateMatrices(e,t){if(t===void 0)return;let n=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.x),i=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.y);for(let d=0;d<ra;d++)this._viewports[d].set(d+n,i,1-2*n,1-2*i);let s=this.mapSize.x*(1-2*n),r=this.mapSize.y*(1-2*i),o=Math.min(s,r),c=this.camera,l=t.near,h=Math.max(l+1e-6,Math.min(c.far,t.far)),u=this._cascadeSplits;u[0]=l;for(let d=1;d<ra;d++){let g=d/ra,v=l+(h-l)*g,_=l>0?l*Math.pow(h/l,g):v;u[d]=(v+_)*.5}u[ra]=h,Ru.setFromMatrixPosition(e.matrixWorld).negate().normalize(),wh.set(0,1,0),Math.abs(wh.dot(Ru))>.99&&wh.set(0,0,1),Sh.lookAt($n.set(0,0,0),Ru,wh),Tu.copy(Sh).transpose().multiply(t.matrixWorld);let f=t.reversedDepth?1:t.coordinateSystem===ya?0:-1,p=t.projectionMatrixInverse,m=-1/0;for(let d=0;d<4;d++){let g=d===0||d===1?1:-1,v=d===0||d===3?1:-1,_=Iu[d].set(g,v,f).applyMatrix4(p),y=Cu[d];t.isPerspectiveCamera===!0?y.copy(_).multiplyScalar(h/l):y.set(_.x,_.y,-h),_.applyMatrix4(Tu),y.applyMatrix4(Tu),m=Math.max(m,_.z,y.z)}m+=h;let b=c.near;for(let d=0;d<ra;d++){let g=d===0?u[0]:this._cascadeData[d-1].z,v=u[d+1],_=v-FM*(v-u[d]);this._cascadeData[d].set(d===0?-1e10:g,v,_,0);let y=(g-l)/(h-l),S=(v-l)/(h-l);$n.set(0,0,0);for(let A=0;A<4;A++)yr[A*2].lerpVectors(Iu[A],Cu[A],y),yr[A*2+1].lerpVectors(Iu[A],Cu[A],S),$n.add(yr[A*2]).add(yr[A*2+1]);$n.multiplyScalar(1/8);let w=0,x=1/0;for(let A=0;A<8;A++)w=Math.max(w,yr[A].distanceToSquared($n)),x=Math.min(x,yr[A].z);let M=Math.sqrt(w);if(o>1){M/=1-1/o;let A=2*M/s,L=2*M/r;$n.x=Math.round($n.x/A)*A,$n.y=Math.round($n.y/L)*L}$n.z=m+b,$n.applyMatrix4(Sh);let R=this._cameras[d];R.position.copy($n),R.quaternion.setFromRotationMatrix(Sh),R.left=-M,R.right=M,R.top=M,R.bottom=-M,R.near=b,R.far=m-x+2*b,R.coordinateSystem=c.coordinateSystem,R._reversedDepth=c.reversedDepth,R.updateProjectionMatrix(),R.updateMatrixWorld(),this._updateMatrix(R,this._matrices[d],this._frustums[d],this._viewports[d])}}};var Ah=class extends Ra{constructor(e,t){super(e,t),this.isSunLight=!0,this.type="SunLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.shadow=new Eh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t}};var Na=[0,320,-1080],Pi={pos:[0,41.2,40],look:[6,120,-1e3],fov:52},Th=[[2,30],[9,8],[-4,-18],[12,-44],[4,-72],[20,-104],[24,-135],[32,-175],[28,-228],[38,-300],[46,-380],[42,-460],[48,-528],[54,-560],[98,-560],[108,-598],[96,-676],[72,-756],[46,-846]];var Qm=[[172,-836],[132,-762],[92,-684],[77,-604],[76,-560],[81,-484],[96,-404],[104,-326],[98,-252],[112,-182],[162,-118],[262,-56],[420,-10]],Li=[-30,-44],Rh=7.5,$m=[[-74,-286],[-63,-252],[-53,-216],[-41,-186],[-23,-162],[-4,-150],[12,-150],[40,-160],[70,-174],[100,-184]],Sn={x:12,z:-150,r:12,level:.35},ei={x:-102,z:-190,rx:92,rz:108,step:1.45},Ln={x:-88,y:25,z:-304,r:26},Bn={x:28,y:1.2,z:-158,r:44},Dt={x:76,y:2.2,z:-560,span:44,width:5.2},Nu={x:186,z:-860,top:66,bottom:-30},zn={x:142,y:8,z:-252};function _r(a){let e=[],t=0;for(let o=0;o<a.length-1;o++){let[c,l]=a[o],[h,u]=a[o+1],f=h-c,p=u-l,m=Math.hypot(f,p);e.push({ax:c,az:l,dx:f,dz:p,len:m,s0:t}),t+=m}let n=Math.min(...a.map(o=>o[0])),i=Math.max(...a.map(o=>o[0])),s=Math.min(...a.map(o=>o[1])),r=Math.max(...a.map(o=>o[1]));return{pts:a,segs:e,length:t,minX:n,maxX:i,minZ:s,maxZ:r,closest(o,c,l){let h=1e18,u=0,f=0,p=0;for(let m=0;m<e.length;m++){let b=e[m],d=((o-b.ax)*b.dx+(c-b.az)*b.dz)/(b.len*b.len);d=d<0?0:d>1?1:d;let g=b.ax+b.dx*d-o,v=b.az+b.dz*d-c,_=g*g+v*v;_<h&&(h=_,u=b.s0+b.len*d,f=m,p=d)}return l[0]=Math.sqrt(h),l[1]=u,l[2]=f,l[3]=p,l},at(o){o=Math.max(0,Math.min(t,o));let c=0;for(;c<e.length-1&&e[c].s0+e[c].len<o;)c++;let l=e[c],h=(o-l.s0)/l.len;return{x:l.ax+l.dx*h,z:l.az+l.dz*h,tx:l.dx/l.len,tz:l.dz/l.len,seg:c}}}}function Mr(a,e=4){let t=[],n=i=>a[Math.max(0,Math.min(a.length-1,i))];for(let i=0;i<a.length-1;i++){let s=n(i-1),r=n(i),o=n(i+1),c=n(i+2),l=Math.hypot(o[0]-r[0],o[1]-r[1]),h=Math.max(1,Math.ceil(l/e));for(let u=0;u<h;u++){let f=u/h,p=f*f,m=p*f,b=(d,g,v,_)=>.5*(2*g+(-d+v)*f+(2*d-5*g+4*v-_)*p+(-d+3*g-3*v+_)*m);t.push([b(s[0],r[0],o[0],c[0]),b(s[1],r[1],o[1],c[1])])}}return t.push(a[a.length-1].slice()),t}function BM(a,e){let t=Fn.degToRad(a),n=Fn.degToRad(e);return new C(Math.sin(t)*Math.cos(n),Math.sin(n),-Math.cos(t)*Math.cos(n)).normalize()}var zM=122,HM=33,Pa=BM(zM,HM),tg=Pa.clone(),Sr=new Fe(1,.87,.7),eg=a=>new C(...a),Pu={ref:{pos:[Pi.pos[0],2,Pi.pos[2]],ground:!0,look:Pi.look,fov:Pi.fov},skull:{pos:[30,210,-520],look:[Na[0],Na[1]-10,Na[2]],fov:48},mouth:{pos:[60,250,-860],look:[0,260,-1080],fov:55},left:{pos:[-40,70,-90],look:[-210,120,-280],fov:55},terrace:{pos:[-10,30,-70],look:[ei.x,8,ei.z-40],fov:55},gate:{pos:[-30,30,-230],look:[Ln.x,Ln.y+10,Ln.z],fov:50},village:{pos:[0,14,-105],look:[Bn.x,3,Bn.z],fov:55},bridge:{pos:[20,18,-500],look:[Dt.x,Dt.y-8,Dt.z],fov:55},temple:{pos:[80,34,-190],look:[142,14,-252],fov:55},ledge:{pos:[-95,135,-300],look:[-200,116,-262],fov:55},ring:{pos:[-6,9,-30],look:[20,1,-75],fov:55},aerial:{pos:[420,520,380],look:[-40,60,-560],fov:50},back:{pos:[60,30,-760],look:[0,60,40],fov:60}};function Ih(a,e){let t=Pu[a];if(!t)return null;let n=eg(t.pos);return t.ground&&(n.y+=e(n.x,n.z)),{pos:n,look:eg(t.look),fov:t.fov}}var wr=a=>a.toFixed(5),ng=`
	const vec3 SUN_DIR = vec3( ${wr(Pa.x)}, ${wr(Pa.y)}, ${wr(Pa.z)} );
	const vec3 SUN_COLOR = vec3( ${wr(Sr.r)}, ${wr(Sr.g)}, ${wr(Sr.b)} );
	const vec3 HAZE = vec3( 0.56, 0.68, 0.88 );
	const vec3 HAZE_SUN = vec3( 1.25, 1.0, 0.78 );
	const vec3 MIST = vec3( 0.86, 0.9, 0.96 );
	const vec3 EXTINCT = vec3( 0.74, 0.92, 1.25 );
	float layerDepth( float roY, float rdY, float dist, float base, float H ) {
		float k = rdY / H;
		float integ = abs( k * dist ) < 1e-4 ? dist : ( 1.0 - exp( - k * dist ) ) / k;
		return exp( - clamp( ( roY - base ) / H, - 20.0, 60.0 ) ) * max( integ, 0.0 );
	}
	void atmosTerms( vec3 wp, out vec3 T, out vec3 inCol ) {
		vec3 ro = cameraPosition;
		vec3 rd = wp - ro;
		float dist = length( rd );
		rd /= max( dist, 1e-4 );
		float hz = ATM.x * layerDepth( ro.y, rd.y, dist, 0.0, 900.0 );
		float ms = ATM.y * layerDepth( ro.y, rd.y, dist, - 10.0, ATM.w );
		T = exp( - ( hz * EXTINCT + ms * vec3( 0.95, 0.98, 1.02 ) ) );
		float s = clamp( dot( rd, SUN_DIR ), 0.0, 1.0 );
		vec3 hazeCol = mix( HAZE, HAZE_SUN, pow( s, 5.0 ) * 0.55 + pow( s, 40.0 ) * 0.45 );
		vec3 mistCol = MIST * ( 0.92 + 0.35 * pow( s, 4.0 ) );
		float wm = ms / max( hz + ms, 1e-5 );
		inCol = mix( hazeCol, mistCol, wm ) * ATM.z;
	}
	vec3 atmosApply( vec3 col, vec3 wp ) {
		vec3 T, inCol;
		atmosTerms( wp, T, inCol );
		return col * T + inCol * ( 1.0 - T );
	}
	vec3 atmosTrans( vec3 wp ) {
		vec3 T, inCol;
		atmosTerms( wp, T, inCol );
		return T;
	}
`,Nh=`
	uniform vec4 uAtmos;
	#define ATM uAtmos
	${ng}
`,Ch={haze:24e-5,mist:9e-4,bright:1,mistH:45},rc={uAtmos:{value:new _t(Ch.haze,Ch.mist,Ch.bright,Ch.mistH)}};function ig(){let a=rc.uAtmos.value;return new ro(new Fe(a.x*1e3,a.y*1e3,a.z),a.w,1e9)}ht.fog_pars_vertex=`
	#ifdef USE_FOG
		varying vec3 vFogWorldPos;
	#endif
`;ht.fog_vertex=`
	#ifdef USE_FOG
		vFogWorldPos = cameraPosition + transpose( mat3( viewMatrix ) ) * mvPosition.xyz;
	#endif
`;ht.fog_pars_fragment=`
	#ifdef USE_FOG
		uniform vec3 fogColor;
		uniform float fogNear;
		uniform float fogFar;
		varying vec3 vFogWorldPos;
		#define ATM vec4( fogColor.x * 0.001, fogColor.y * 0.001, fogColor.z, fogNear )
		${ng}
	#endif
`;ht.fog_fragment=`
	#ifdef USE_FOG
		gl_FragColor.rgb = atmosApply( gl_FragColor.rgb, vFogWorldPos );
	#endif
`;function GM(){if(location.hostname==="htmlpreview.github.io"){let a=decodeURIComponent(location.search).match(/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.*\/)[^/]*$/);if(a)return`https://raw.githubusercontent.com/${a[1]}/${a[2]}/${a[3]}/${a[4]}`}return"./"}var VM=GM(),oa=a=>VM+"assets/"+a;function jM(){let a=location.search,e=a.lastIndexOf(".html?");return e>=0?a.slice(e+6):a}var vs=new URLSearchParams(jM());function ag(a,e){let{data:t,width:n,height:i}=e.image,s=0,r=0;for(let p=0;p<n*i;p++){let m=t[p*4]+t[p*4+1]+t[p*4+2];m>s&&(s=m,r=p)}let o=(r%n+.5)/n;for(let p=0;p<t.length;p++)(p&3)!==3&&(t[p]=Math.min(t[p],5));e.needsUpdate=!0,e.minFilter=Tt,e.magFilter=Tt,e.generateMipmaps=!1,a.colorSpace=Rt,a.minFilter=en,a.anisotropy=4,a.wrapS=vn;let c=Math.atan2(Pa.z,Pa.x)/(2*Math.PI)+.5,l={uLdr:{value:a},uHdr:{value:e},uRot:{value:o-c},uGain:{value:1.55},uEnvMode:{value:0},uSunGain:{value:1},uAtmos:rc.uAtmos},h=new kt({name:"Sky",side:un,depthWrite:!1,depthTest:!1,uniforms:l,vertexShader:`
			varying vec3 vDir;
			void main() {
				vDir = position;
				vec4 p = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				gl_Position = p.xyww;
			}
		`,fragmentShader:`
			uniform sampler2D uLdr, uHdr;
			uniform float uRot, uGain, uEnvMode, uSunGain;
			varying vec3 vDir;
			${Nh}
			void main() {
				vec3 d = normalize( vDir );
				vec3 dd = d;
				dd.y = max( dd.y, 0.003 );
				dd = normalize( dd );
				float u = atan( dd.z, dd.x ) * 0.15915494 + 0.5 + uRot;
				vec3 c;
				if ( uEnvMode > 0.5 ) {
					float v = asin( clamp( dd.y, - 1.0, 1.0 ) ) * 0.31830989 + 0.5;
					c = texture2D( uHdr, vec2( fract( u ), v ) ).rgb;
					// \u73AF\u5883\u8D34\u56FE\u91CC\u7684\u5730\u9762\uFF1A\u7528\u6696\u7070\u7684\u5CA9\u77F3\u548C\u8349\u5730\u989C\u8272\u4EE3\u66FF\u7167\u7247\u91CC\u7684\u7A7A\u767D
					if ( d.y < 0.0 ) c = mix( c, vec3( 0.16, 0.17, 0.12 ), clamp( - d.y * 6.0, 0.0, 1.0 ) );
				} else {
					float veq = 0.5 - asin( clamp( dd.y, - 1.0, 1.0 ) ) * 0.31830989;
					c = texture2D( uLdr, vec2( u, 1.0 - veq / 0.53 ) ).rgb * uGain;
					float s = dot( d, SUN_DIR );
					c += SUN_COLOR * smoothstep( 0.99993, 0.99997, s ) * 40.0 * uSunGain;
					c += SUN_COLOR * pow( max( s, 0.0 ), 600.0 ) * 3.0 * uSunGain;
					// \u5730\u5E73\u7EBF\u9644\u8FD1\u53E0\u4E00\u5C42\u548C\u573A\u666F\u96FE\u4E00\u6837\u7684\u973E\uFF0C\u8FDC\u5C71\u548C\u5929\u7A7A\u624D\u63A5\u5F97\u4E0A
					vec3 T, inCol;
					atmosTerms( cameraPosition + d * 30000.0, T, inCol );
					float hz = exp( - max( d.y, 0.0 ) * 26.0 );
					c = mix( c, inCol, hz * 0.55 );
					if ( d.y < 0.0 ) c = mix( c, inCol, clamp( - d.y * 10.0, 0.0, 1.0 ) );
				}
				gl_FragColor = vec4( c, 1.0 );
			}
		`}),u=new st(new _n(1,64,32),h);u.frustumCulled=!1,u.renderOrder=-100,u.scale.setScalar(9e3),u.onBeforeRender=(p,m,b)=>u.position.copy(b.position);function f(p){let m=new ts,b=h.clone();b.uniforms={...l,uEnvMode:{value:1}};let d=new st(new _n(1,64,32),b);d.scale.setScalar(100),m.add(d);let g=new xr(p),v=g.fromScene(m,0,.1,1e3);return g.dispose(),b.dispose(),v.texture}return{mesh:u,uniforms:l,buildEnv:f}}var Er={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},WM=new Qn(-1,1,1,-1,0,1),Lu=class extends rt{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},XM=new Lu,La=class{constructor(e){this._mesh=new st(XM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,WM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Da=class extends Kn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof kt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=sa.clone(e.uniforms),this.material=new kt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new La(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oc=class extends Kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Ph=class extends Kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Lh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Da(Er),this.copyPass.material.blending=na,this.timer=new ds}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}oc!==void 0&&(r instanceof oc?n=!0:r instanceof Ph&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Dh=class extends Kn{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Fe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}};var sg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Ar=class a extends Kn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(s,r,{type:Vt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Xt(s,r,{type:Vt,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Xt(s,r,{type:Vt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}let o=sg;this.highPassUniforms=sa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new de(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=sa.clone(Er.uniforms),this.blendMaterial=new kt({uniforms:this.copyUniforms,vertexShader:Er.vertexShader,fragmentShader:Er.fragmentShader,premultipliedAlpha:!0,blending:qn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Fe,this._oldClearAlpha=1,this._basic=new Ot,this._fsQuad=new La(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new de(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=a.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=a.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let i=[],s=[];for(let r=1;r<e;r+=2){let o=t[r],c=r+1<e?t[r+1]:0,l=o+c;i.push((r*o+(r+1)*c)/l),s.push(l)}return new kt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new kt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ar.BlurDirectionX=new de(1,0);Ar.BlurDirectionY=new de(0,1);var cc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Uh=class extends Kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=sa.clone(cc.uniforms),this.material=new rr({name:cc.name,uniforms:this.uniforms,vertexShader:cc.vertexShader,fragmentShader:cc.fragmentShader}),this._fsQuad=new La(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Go?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ps?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Wo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Di=`
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
`,Du=`
vec3 triW( vec3 n ) {
	vec3 w = pow( abs( n ), vec3( 4.0 ) );
	return w / ( w.x + w.y + w.z + 1e-5 );
}
vec4 triSample( sampler2D t, vec3 p, vec3 w, float s ) {
	return texture2D( t, p.zy * s ) * w.x + texture2D( t, p.xz * s ) * w.y + texture2D( t, p.xy * s ) * w.z;
}
// \u8FD4\u56DE\u4E16\u754C\u7A7A\u95F4\u7684\u6270\u52A8\u6CD5\u7EBF
vec3 triNormal( sampler2D t, vec3 p, vec3 n, vec3 w, float s, float strength ) {
	vec3 tx = texture2D( t, p.zy * s ).xyz * 2.0 - 1.0;
	vec3 ty = texture2D( t, p.xz * s ).xyz * 2.0 - 1.0;
	vec3 tz = texture2D( t, p.xy * s ).xyz * 2.0 - 1.0;
	tx.xy *= strength; ty.xy *= strength; tz.xy *= strength;
	// whiteout \u6DF7\u5408\uFF08Ben Golus\uFF09
	tx = vec3( tx.xy + n.zy, abs( tx.z ) * n.x );
	ty = vec3( ty.xy + n.xz, abs( ty.z ) * n.y );
	tz = vec3( tz.xy + n.xy, abs( tz.z ) * n.z );
	return normalize( tx.zyx * w.x + ty.xzy * w.y + tz.xyz * w.z );
}
`;var Uu=`
	varying vec2 vUv;
	void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
`,qM={name:"Sanitize",uniforms:{tDiffuse:{value:null}},vertexShader:Uu,fragmentShader:`
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		bool bad( float x ) { return ( floatBitsToUint( x ) & 0x7f800000u ) == 0x7f800000u; }
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb;
			if ( bad( c.r ) || bad( c.g ) || bad( c.b ) ) c = vec3( 0.0 );
			gl_FragColor = vec4( clamp( c, 0.0, 200.0 ), 1.0 );
		}
	`},KM={name:"Grade",uniforms:{tDiffuse:{value:null},uExposure:{value:1},uContrast:{value:1.08},uSat:{value:1.1},uWarm:{value:1}},vertexShader:Uu,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform float uExposure, uContrast, uSat, uWarm;
		varying vec2 vUv;
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb * uExposure;
			float l = dot( c, vec3( 0.2126, 0.7152, 0.0722 ) );
			// \u6697\u90E8\u504F\u9752\u3001\u4EAE\u90E8\u504F\u6696\uFF08\u53C2\u8003\u56FE\uFF1A\u9634\u5F71\u662F\u51B7\u7684\u84DD\u7EFF\uFF0C\u53D7\u5149\u9762\u662F\u91D1\u8272\uFF09
			vec3 tint = mix( vec3( 0.94, 1.0, 1.05 ), vec3( 1.05, 1.0, 0.93 ), smoothstep( 0.03, 0.9, l ) );
			c *= mix( vec3( 1.0 ), tint, uWarm );
			c = mix( vec3( l ), c, uSat );
			c = exp2( ( log2( max( c, 1e-5 ) ) - log2( 0.18 ) ) * uContrast + log2( 0.18 ) );
			gl_FragColor = vec4( c, 1.0 );
		}
	`},YM={name:"Final",uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new de(1,1)},uFade:{value:1},uVignette:{value:1}},vertexShader:Uu,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform float uTime, uFade, uVignette;
		uniform vec2 uRes;
		varying vec2 vUv;
		${Di}
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
	`};function rg(a,e,t,n){let i=a.getDrawingBufferSize(new de),s=new pi(i.x,i.y);s.type=Wt;let r=new Xt(i.x,i.y,{type:Vt,samples:n.msaa,depthTexture:s}),o=new Lh(a,r),c=new Dh(e,t);o.addPass(c),o.addPass(new Da(qM));let l=[],h=new Ar(new de(i.x/2,i.y/2),.14,.5,3),u=new Da(KM),f=new Uh,p=new Da(YM);return o.addPass(h),o.addPass(u),o.addPass(f),o.addPass(p),{composer:o,bloom:h,grade:u,final:p,target:r,depthTexture:s,insertAfterRender(m){o.insertPass(m,1+l.length),l.push(m)},setSize(m,b,d){o.setPixelRatio(d),o.setSize(m,b),p.uniforms.uRes.value.set(m*d,b*d);for(let g of l)g.setSize?.(m*d,b*d)},render(m){p.uniforms.uTime.value+=m,o.render(m)}}}function og(a,e=!0,t=!0,n=8){return e&&(a.colorSpace=Rt),t&&(a.wrapS=a.wrapT=vn),a.anisotropy=n,a}var Oh=`
	varying vec3 vWPos;
	varying vec3 vWNor;
`,cg=`
	{
		vec4 wp4 = vec4( transformed, 1.0 );
		#ifdef USE_INSTANCING
			wp4 = instanceMatrix * wp4;
		#endif
		vWPos = ( modelMatrix * wp4 ).xyz;
		vec3 on = objectNormal;
		#ifdef USE_INSTANCING
			on = mat3( instanceMatrix ) * on;
		#endif
		vWNor = normalize( mat3( modelMatrix ) * on );
	}
`,lg=`
	vec3 limestone( sampler2D tc, vec3 p, vec3 w ) {
		vec3 c1 = triSample( tc, p, w, 1.0 / 9.0 ).rgb;
		vec3 c2 = triSample( tc, p * 0.21 + 37.0, w, 1.0 / 9.0 ).rgb;
		vec3 c = c1 * mix( vec3( 1.0 ), c2 / max( dot( c2, vec3( 0.3333 ) ), 0.05 ), 0.45 );
		float l = dot( c, vec3( 0.299, 0.587, 0.114 ) );
		c = mix( vec3( l ), c, 0.4 ) * vec3( 1.0, 0.985, 0.955 );
		float mv = vnoise3( p / 75.0 ) * 0.65 + vnoise3( p / 21.0 ) * 0.35;
		c *= mix( vec3( 0.84, 0.88, 0.92 ), vec3( 1.1, 1.03, 0.92 ), mv );
		return c;
	}
`;function hg(a,e={}){let t=new qt({color:16777215,roughness:.86,metalness:0,envMapIntensity:e.env??1});return t.onBeforeCompile=n=>{Object.assign(n.uniforms,{tCliff:{value:a.cliff_diff},tCliffN:{value:a.cliff_nor},tBone:{value:a.bone_diff},tBoneN:{value:a.bone_nor},tGrass:{value:a.grass_diff}}),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
				attribute vec4 aux;
				varying vec4 vAux;
				${Oh}`).replace("#include <fog_vertex>",`#include <fog_vertex>
				${cg}
				vAux = aux;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
				uniform sampler2D tCliff, tCliffN, tBone, tBoneN, tGrass;
				varying vec4 vAux;
				${Oh}
				${Di}
				${Du}
				${lg}
				float gMoss = 0.0, gBone = 0.0;`).replace("#include <color_fragment>",`#include <color_fragment>
			{
				vec3 n = normalize( vWNor );
				vec3 w = triW( n );
				vec3 p = vWPos;
				// \u767D\u9AA8\u548C\u5C71\u4F53\u7684\u4EA4\u754C\u4E0D\u89C4\u5219\uFF1A\u7528\u566A\u58F0\u628A\u8FB9\u7F18\u6253\u6563
				float bone = smoothstep( 0.2, 0.8, vAux.g + ( vnoise3( p / 16.0 ) - 0.5 ) * 0.55 * ( 1.0 - vAux.g * vAux.g ) );
				float cav = vAux.b;
				float cover = vAux.a;
				vec3 cliff = limestone( tCliff, p, w );
				// \u7AD6\u5411\u7684\u9ED1\u8272\u6C34\u6E0D\uFF08\u77F3\u7070\u5CA9\u5CED\u58C1\u7684\u7279\u5F81\uFF09
				float streak = smoothstep( 0.5, 0.8, vnoise( vec2( ( p.x + p.z ) * 0.3, p.y * 0.011 ) ) * 0.7 + vnoise( vec2( ( p.x - p.z ) * 0.9, p.y * 0.04 ) ) * 0.3 );
				cliff *= 1.0 - streak * 0.45 * ( 1.0 - smoothstep( 0.2, 0.6, n.y ) );
				// \u767D\u9AA8\uFF1A\u8C61\u7259\u767D\uFF0C\u88C2\u7F1D\u91CC\u6709\u4E00\u70B9\u7070
				vec3 b1 = triSample( tBone, p, w, 1.0 / 7.0 ).rgb;
				vec3 b2 = triSample( tBone, p * 0.23 + 11.0, w, 1.0 / 7.0 ).rgb;
				float lb = dot( b1 * mix( vec3( 1.0 ), b2 / max( dot( b2, vec3( 0.333 ) ), 0.05 ), 0.35 ), vec3( 0.299, 0.587, 0.114 ) );
				vec3 boneC = vec3( 0.25 + lb * 0.75 ) * vec3( 1.08, 1.04, 0.95 ) * 1.18;
				boneC *= 0.88 + 0.12 * vnoise3( p / 13.0 );
				// \u96E8\u6C34\u51B2\u51FA\u7684\u6D45\u7070\u9053\u5B50\uFF08\u4E0D\u753B\u88C2\u7EB9\u7EBF\uFF1A\u566A\u58F0\u7B49\u503C\u7EBF\u753B\u51FA\u6765\u50CF\u5730\u56FE\u4E0A\u7684\u7B49\u9AD8\u7EBF\uFF09
				boneC *= 1.0 - streak * 0.16;
				vec3 col = mix( cliff, boneC, bone );
				// \u82D4\u85D3\u548C\u8349\uFF1A\u671D\u4E0A\u7684\u9762\u591A\uFF0C\u9AA8\u5934\u4E0A\u5F88\u5C11
				float up = smoothstep( 0.48, 0.86, n.y + ( vnoise( p.xz * 0.11 ) - 0.5 ) * 0.45 );
				float mossN = smoothstep( 0.3, 0.62, fbm3( p.xz * 0.045 + p.y * 0.01 ) );
				float moss = up * mix( 0.5, 1.0, mossN ) * ( 1.0 - bone * 0.92 );
				// \u5D16\u9762\u4E0A\u96F6\u661F\u7684\u82D4\u85D3\u6591
				moss = max( moss, smoothstep( 0.62, 0.8, vnoise3( p / 6.0 ) ) * 0.55 * ( 1.0 - bone ) * smoothstep( - 0.2, 0.3, n.y ) );
				vec3 g = texture2D( tGrass, p.xz / 4.2 ).rgb * vec3( 0.72, 0.86, 0.56 );
				col = mix( col, g, moss );
				// \u690D\u88AB\u8986\u76D6\uFF08\u8FDC\u5904\u7684\u77F3\u5CF0\u51E0\u4E4E\u5168\u662F\u7EFF\u7684\uFF09\uFF1A\u6DF1\u7EFF\u7684\u704C\u4E1B\u6591\u5757
				float veg = smoothstep( 0.42, 0.62, vnoise3( p / 15.0 ) * 0.7 + vnoise3( p / 4.0 ) * 0.3 + n.y * 0.35 + cover * 0.55 - 0.25 ) * smoothstep( 0.0, 0.1, cover ) * ( 1.0 - bone );
				vec3 vegC = vec3( 0.07, 0.1, 0.045 ) * ( 0.7 + 0.6 * vnoise3( p / 3.0 ) );
				col = mix( col, vegC, veg * min( 1.0, cover * 2.2 ) );
				moss = max( moss, veg * min( 1.0, cover * 2.2 ) );
				// \u6D1E\u7A74\u6DF1\u5904
				col *= mix( 1.0, 0.035, cav );
				diffuseColor.rgb = col;
				gMoss = moss; gBone = bone;
			}`).replace("#include <roughnessmap_fragment>",`
				float roughnessFactor = mix( mix( 0.9, 0.58, gBone ), 0.96, gMoss );`).replace("#include <normal_fragment_maps>",`
			{
				vec3 n = normalize( vWNor );
				vec3 w = triW( n );
				vec3 nc = triNormal( tCliffN, vWPos, n, w, 1.0 / 9.0, 1.15 );
				vec3 nb = triNormal( tBoneN, vWPos, n, w, 1.0 / 7.0, 0.65 );
				vec3 nw = normalize( mix( nc, nb, gBone ) );
				nw = normalize( mix( nw, n, gMoss * 0.55 ) );
				normal = normalize( ( viewMatrix * vec4( nw, 0.0 ) ).xyz );
			}`).replace("#include <aomap_fragment>",`
			{
				float ao = vAux.r;
				ao = ao * ao;
				reflectedLight.indirectDiffuse *= ao;
				reflectedLight.indirectSpecular *= ao;
				reflectedLight.directDiffuse *= mix( 1.0, ao, 0.3 );
				reflectedLight.directSpecular *= ao;
			}`)},t.customProgramCacheKey=()=>"rock-v1",t}function dg(a,e,t={}){let n=new qt({color:16777215,roughness:.92,metalness:0,envMapIntensity:.9});return n.onBeforeCompile=i=>{Object.assign(i.uniforms,{tGrass:{value:a.grass_diff},tGrassN:{value:a.grass_nor},tForest:{value:a.forest_diff},tForestN:{value:a.forest_nor},tTrail:{value:a.trail_diff},tTrailN:{value:a.trail_nor},tCliff:{value:a.cliff_diff},tCliffN:{value:a.cliff_nor},tMask:{value:e.mask},tNorm:{value:e.normal},uMapRect:{value:new _t(e.x0,e.z0,1/e.w,1/e.d)},uTime:t.time||{value:0}}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
				${Oh}`).replace("#include <fog_vertex>",`#include <fog_vertex>
				${cg}`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
				uniform sampler2D tGrass, tGrassN, tForest, tForestN, tTrail, tTrailN, tCliff, tCliffN, tMask, tNorm;
				uniform vec4 uMapRect;
				uniform float uTime;
				${Oh}
				${Di}
				${Du}
				${lg}
				vec3 gN; float gRough = 0.92; float gWet = 0.0; float gPaddy = 0.0; float gRockW = 0.0; vec4 gM;`).replace("#include <color_fragment>",`#include <color_fragment>
			{
				vec3 p = vWPos;
				vec2 muv = ( p.xz - uMapRect.xy ) * uMapRect.zw;
				float inMap = step( 0.0, muv.x ) * step( muv.x, 1.0 ) * step( 0.0, muv.y ) * step( muv.y, 1.0 );
				// \u8D34\u56FE\u8FB9\u7F18 40 \u7C73\u5185\u6DE1\u51FA\u5230\u7A0B\u5E8F\u566A\u58F0
				vec2 ed = min( muv, 1.0 - muv ) / uMapRect.zw;
				float mapW = inMap * smoothstep( 0.0, 40.0, min( ed.x, ed.y ) );
				vec4 M = texture2D( tMask, muv ) * mapW;
				vec3 n = normalize( vWNor );
				if ( mapW > 0.0 ) {
					vec4 nt = texture2D( tNorm, muv );
					vec3 nm = normalize( vec3( nt.r * 2.0 - 1.0, nt.b, nt.g * 2.0 - 1.0 ) );
					n = normalize( mix( n, nm, mapW ) );
				}
				float slope = 1.0 - n.y;
				float dist = length( p - cameraPosition );
				// \u8349\u5730\uFF1A\u7EC6\u8282 + \u5927\u5C3A\u5EA6\u8272\u6591\uFF08\u6709\u7684\u5730\u65B9\u504F\u9EC4\u7EFF\uFF0C\u6709\u7684\u5730\u65B9\u504F\u6DF1\u7EFF\uFF09
				vec3 gr = texture2D( tGrass, p.xz / 3.6 ).rgb;
				vec3 grM = texture2D( tGrass, p.xz / 37.0 + 0.37 ).rgb;
				gr *= mix( vec3( 1.0 ), grM / max( dot( grM, vec3( 0.333 ) ), 0.05 ), 0.5 );
				float pv = fbm3( p.xz * 0.011 );
				// \u53C2\u8003\u56FE\u7684\u8349\u5730\u662F\u9971\u548C\u7684\u5AE9\u7EFF\uFF0C\u6696\u8272\u7684\u9633\u5149\u7167\u4E0A\u53BB\u5BB9\u6613\u53D1\u9EC4\uFF0C\u6240\u4EE5\u5E95\u8272\u8981\u504F\u9752\u4E00\u70B9
				float lg = dot( gr, vec3( 0.3, 0.59, 0.11 ) );
				gr = mix( vec3( lg ), gr, 1.2 ) * mix( vec3( 0.34, 0.68, 0.2 ), vec3( 0.5, 0.8, 0.22 ), pv );
				// \u6797\u4E0B
				vec3 fo = texture2D( tForest, p.xz / 4.0 ).rgb * vec3( 0.7, 0.72, 0.6 );
				// \u5C71\u8DEF
				vec3 tr = texture2D( tTrail, p.xz / 3.2 ).rgb * vec3( 1.02, 0.98, 0.9 );
				// \u9661\u5761\u9732\u5CA9
				vec3 w = triW( n );
				vec3 rk = limestone( tCliff, p, w );
				float rockW = smoothstep( 0.3, 0.52, slope + ( vnoise( p.xz * 0.07 ) - 0.5 ) * 0.22 );
				// \u6838\u5FC3\u533A\u5916\uFF1A\u7A0B\u5E8F\u751F\u6210\u7684\u68EE\u6797\u548C\u5CA9\u77F3
				float farForest = smoothstep( 0.3, 0.46, fbm3( p.xz / 210.0 ) + ( 1.0 - n.y ) * 0.3 ) * ( 1.0 - mapW );
				float forest = max( M.a, farForest );
				vec3 canopy = vec3( 0.075, 0.11, 0.05 ) * ( 0.6 + 0.8 * vnoise( p.xz / 9.0 ) ) * ( 0.8 + 0.4 * vnoise( p.xz / 70.0 ) );
				vec3 col = gr;
				// \u6797\u4E0B\u5730\u9762\uFF1A\u8FD1\u5904\u662F\u843D\u53F6\u677E\u9488\uFF0C\u8FDC\u5904\uFF08\u6811\u51A0\u76D6\u4F4F\uFF09\u662F\u6DF1\u7EFF
				vec3 forestCol = mix( fo, canopy, smoothstep( 120.0, 600.0, dist ) * 0.85 + farForest * 0.15 );
				col = mix( col, forestCol, forest * 0.9 );
				// \u68AF\u7530\uFF1A\u5E73\u7684\u7530\u9762\u662F\u6C34\u7530\u6216\u7A3B\u7530
				float paddy = 0.0;
				if ( M.b > 0.3 ) {
					float flat0 = smoothstep( 0.993, 0.999, n.y );
					float idx = floor( p.y / ${ei.step.toFixed(4)} + 0.02 );
					float r = hash12( vec2( idx * 1.37, floor( ( p.x + p.z * 0.3 ) / 70.0 ) ) );
					float flooded = step( 0.58, r );
					vec3 rice = mix( vec3( 0.12, 0.3, 0.05 ), vec3( 0.24, 0.46, 0.08 ), vnoise( p.xz * 0.15 ) ) * ( 0.9 + 0.2 * vnoise( p.xz * 2.1 ) );
					// \u79E7\u82D7\u6210\u884C\uFF1A\u8FD1\u5904\u80FD\u770B\u5230\u4E00\u6392\u6392
					float rows = smoothstep( 0.3, 0.7, sin( ( p.x * 0.8 + p.z * 0.6 ) * 9.0 ) * 0.5 + 0.5 ) * smoothstep( 60.0, 15.0, dist );
					vec3 water = vec3( 0.03, 0.045, 0.04 );
					vec3 pc = mix( rice * mix( 1.0, 0.75, rows ), mix( water, rice * 0.7, rows * 0.4 + 0.1 ), flooded );
					paddy = flat0 * smoothstep( 0.3, 0.6, M.b );
					col = mix( col, pc, paddy );
					gPaddy = paddy * flooded;
					// \u7530\u57C2\u548C\u9661\u574E\uFF1A\u957F\u8349\u7684\u571F\u574E
					col = mix( col, gr * vec3( 0.8, 0.85, 0.7 ), ( 1.0 - flat0 ) * smoothstep( 0.3, 0.6, M.b ) * 0.5 );
				}
				col = mix( col, tr, M.r );
				col = mix( col, rk, rockW * ( 1.0 - M.r ) * ( 1.0 - paddy ) );
				// \u6C34\u8FB9\u6E7F\u6CE5
				float wet = smoothstep( 0.05, 0.6, M.g ) * ( 1.0 - paddy );
				col = mix( col, col * vec3( 0.42, 0.4, 0.36 ), wet );
				diffuseColor.rgb = col;
				gN = n; gWet = wet; gRockW = rockW; gM = M;
				gRough = mix( mix( 0.93, 0.88, rockW ), 0.45, wet * 0.6 );
				gRough = mix( gRough, 0.05, gPaddy );
			}`).replace("#include <roughnessmap_fragment>",`
				float roughnessFactor = gRough;`).replace("#include <normal_fragment_maps>",`
			{
				vec3 n = gN;
				vec3 p = vWPos;
				// \u7EC6\u8282\u6CD5\u7EBF\uFF1A\u8349\u3001\u8DEF\u3001\u5CA9\u77F3\u6309\u6743\u91CD\u6DF7\u5408\uFF1B\u6C34\u7530\u7684\u7530\u9762\u4E0D\u52A0\uFF08\u4FDD\u6301\u955C\u9762\uFF09
				vec3 ng = texture2D( tGrassN, p.xz / 3.6 ).xyz * 2.0 - 1.0;
				vec3 nt = texture2D( tTrailN, p.xz / 3.2 ).xyz * 2.0 - 1.0;
				vec3 nf = texture2D( tForestN, p.xz / 4.0 ).xyz * 2.0 - 1.0;
				vec3 nd = mix( mix( ng, nf, gM.a * 0.9 ), nt, gM.r );
				vec3 nw = normalize( vec3( n.x + nd.x * 0.9 * n.y, n.y, n.z + nd.y * 0.9 * n.y ) );
				vec3 w = triW( n );
				vec3 nr = triNormal( tCliffN, p, n, w, 1.0 / 9.0, 1.1 );
				nw = normalize( mix( nw, nr, gRockW ) );
				nw = normalize( mix( nw, n, gPaddy ) );
				// \u6C34\u7530\uFF1A\u7EC6\u5C0F\u7684\u6CE2\u7EB9
				if ( gPaddy > 0.01 ) {
					vec2 q = p.xz * 0.9 + uTime * vec2( 0.3, 0.2 );
					vec3 rip = vec3( vnoise( q ) - 0.5, 0.0, vnoise( q + 7.3 ) - 0.5 ) * 0.06;
					nw = normalize( mix( nw, vec3( 0.0, 1.0, 0.0 ) + rip, gPaddy ) );
				}
				normal = normalize( ( viewMatrix * vec4( nw, 0.0 ) ).xyz );
			}`)},n.customProgramCacheKey=()=>"terrain-v1",n}var ug='(()=>{function Xa(d){let c=d>>>0;return function(){c=c+1831565813|0;let b=Math.imul(c^c>>>15,1|c);return b=b+Math.imul(b^b>>>7,61|b)^b,((b^b>>>14)>>>0)/4294967296}}var ga=new Uint8Array(512),Na=new Uint8Array(512);(function(){let c=Xa(20261107),b=new Uint8Array(256);for(let f=0;f<256;f++)b[f]=f;for(let f=255;f>0;f--){let e=Math.floor(c()*(f+1)),a=b[f];b[f]=b[e],b[e]=a}for(let f=0;f<512;f++)ga[f]=b[f&255],Na[f]=ga[f]%12})();var Q=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),Ub=.5*(Math.sqrt(3)-1),Ja=(3-Math.sqrt(3))/6,Rb=1/3,ja=1/6;function K(d,c){let b=(d+c)*Ub,f=Math.floor(d+b),e=Math.floor(c+b),a=(f+e)*Ja,h=d-(f-a),n=c-(e-a),g,r;h>n?(g=1,r=0):(g=0,r=1);let M=h-g+Ja,i=n-r+Ja,y=h-1+2*Ja,I=n-1+2*Ja,A=f&255,w=e&255,R=0,Y=.5-h*h-n*n;if(Y>0){let t=Na[A+ga[w]]*3;Y*=Y,R+=Y*Y*(Q[t]*h+Q[t+1]*n)}let S=.5-M*M-i*i;if(S>0){let t=Na[A+g+ga[w+r]]*3;S*=S,R+=S*S*(Q[t]*M+Q[t+1]*i)}let q=.5-y*y-I*I;if(q>0){let t=Na[A+1+ga[w+1]]*3;q*=q,R+=q*q*(Q[t]*y+Q[t+1]*I)}return 70*R}function Ra(d,c,b){let f=(d+c+b)*Rb,e=Math.floor(d+f),a=Math.floor(c+f),h=Math.floor(b+f),n=(e+a+h)*ja,g=d-(e-n),r=c-(a-n),M=b-(h-n),i,y,I,A,w,R;g>=r?r>=M?(i=1,y=0,I=0,A=1,w=1,R=0):g>=M?(i=1,y=0,I=0,A=1,w=0,R=1):(i=0,y=0,I=1,A=1,w=0,R=1):r<M?(i=0,y=0,I=1,A=0,w=1,R=1):g<M?(i=0,y=1,I=0,A=0,w=1,R=1):(i=0,y=1,I=0,A=1,w=1,R=0);let Y=g-i+ja,S=r-y+ja,q=M-I+ja,t=g-A+2*ja,m=r-w+2*ja,l=M-R+2*ja,j=g-1+3*ja,k=r-1+3*ja,o=M-1+3*ja,x=e&255,O=a&255,z=h&255,N=0,u=.6-g*g-r*r-M*M;if(u>0){let E=Na[x+ga[O+ga[z]]]*3;u*=u,N+=u*u*(Q[E]*g+Q[E+1]*r+Q[E+2]*M)}let B=.6-Y*Y-S*S-q*q;if(B>0){let E=Na[x+i+ga[O+y+ga[z+I]]]*3;B*=B,N+=B*B*(Q[E]*Y+Q[E+1]*S+Q[E+2]*q)}let H=.6-t*t-m*m-l*l;if(H>0){let E=Na[x+A+ga[O+w+ga[z+R]]]*3;H*=H,N+=H*H*(Q[E]*t+Q[E+1]*m+Q[E+2]*l)}let U=.6-j*j-k*k-o*o;if(U>0){let E=Na[x+1+ga[O+1+ga[z+1]]]*3;U*=U,N+=U*U*(Q[E]*j+Q[E+1]*k+Q[E+2]*o)}return 32*N}function Ea(d,c,b=5,f=2.03,e=.5){let a=0,h=1,n=0;for(let g=0;g<b;g++){a+=h*K(d,c),n+=h;let r=d*.8-c*.6,M=d*.6+c*.8;d=r*f+13.7,c=M*f+7.1,h*=e}return a/n}function eb(d,c,b=6,f=2,e=.5){let a=0,h=1,n=1,g=0;for(let r=0;r<b;r++){let M=1-Math.abs(K(d,c));M*=M,M*=n,n=Math.min(1,Math.max(0,M*1.6)),a+=h*M,g+=h;let i=d*.8-c*.6,y=d*.6+c*.8;d=i*f+3.1,c=y*f+17.9,h*=e}return a/g}function Va(d,c,b,f=4,e=2.07,a=.5){let h=0,n=1,g=0;for(let r=0;r<f;r++)h+=n*Ra(d,c,b),g+=n,d=d*e+5.3,c=c*e+11.7,b=b*e+2.9,n*=a;return h/g}var Aa=(d,c,b)=>d<c?c:d>b?b:d;function v(d,c,b){let f=Aa((b-d)/(c-d),0,1);return f*f*(3-2*f)}var la=(d,c,b)=>d+(c-d)*b;function Z(d,c,b){let f=Aa(.5+.5*(c-d)/b,0,1);return c+(d-c)*f-b*f*(1-f)}function aa(d,c,b){return-Z(-d,-c,b)}var hb=[0,320,-1080];var fb=[[2,30],[9,8],[-4,-18],[12,-44],[4,-72],[20,-104],[24,-135],[32,-175],[28,-228],[38,-300],[46,-380],[42,-460],[48,-528],[54,-560],[98,-560],[108,-598],[96,-676],[72,-756],[46,-846]];var tb=[[172,-836],[132,-762],[92,-684],[77,-604],[76,-560],[81,-484],[96,-404],[104,-326],[98,-252],[112,-182],[162,-118],[262,-56],[420,-10]],$a=[-30,-44],va=7.5,gb=[[-74,-286],[-63,-252],[-53,-216],[-41,-186],[-23,-162],[-4,-150],[12,-150],[40,-160],[70,-174],[100,-184]],ra={x:12,z:-150,r:12,level:.35},wa={x:-102,z:-190,rx:92,rz:108,step:1.45},ma={x:-88,y:25,z:-304,r:26},Ia={x:28,y:1.2,z:-158,r:44},ea={x:76,y:2.2,z:-560,span:44,width:5.2};var xa={x:142,y:8,z:-252};function Wa(d){let c=[],b=0;for(let n=0;n<d.length-1;n++){let[g,r]=d[n],[M,i]=d[n+1],y=M-g,I=i-r,A=Math.hypot(y,I);c.push({ax:g,az:r,dx:y,dz:I,len:A,s0:b}),b+=A}let f=Math.min(...d.map(n=>n[0])),e=Math.max(...d.map(n=>n[0])),a=Math.min(...d.map(n=>n[1])),h=Math.max(...d.map(n=>n[1]));return{pts:d,segs:c,length:b,minX:f,maxX:e,minZ:a,maxZ:h,closest(n,g,r){let M=1e18,i=0,y=0,I=0;for(let A=0;A<c.length;A++){let w=c[A],R=((n-w.ax)*w.dx+(g-w.az)*w.dz)/(w.len*w.len);R=R<0?0:R>1?1:R;let Y=w.ax+w.dx*R-n,S=w.az+w.dz*R-g,q=Y*Y+S*S;q<M&&(M=q,i=w.s0+w.len*R,y=A,I=R)}return r[0]=Math.sqrt(M),r[1]=i,r[2]=y,r[3]=I,r},at(n){n=Math.max(0,Math.min(b,n));let g=0;for(;g<c.length-1&&c[g].s0+c[g].len<n;)g++;let r=c[g],M=(n-r.s0)/r.len;return{x:r.ax+r.dx*M,z:r.az+r.dz*M,tx:r.dx/r.len,tz:r.dz/r.len,seg:g}}}}function Ta(d,c=4){let b=[],f=e=>d[Math.max(0,Math.min(d.length-1,e))];for(let e=0;e<d.length-1;e++){let a=f(e-1),h=f(e),n=f(e+1),g=f(e+2),r=Math.hypot(n[0]-h[0],n[1]-h[1]),M=Math.max(1,Math.ceil(r/c));for(let i=0;i<M;i++){let y=i/M,I=y*y,A=I*y,w=(R,Y,S,q)=>.5*(2*Y+(-R+S)*y+(2*R-5*Y+4*S-q)*I+(-R+3*Y-3*S+q)*A);b.push([w(a[0],h[0],n[0],g[0]),w(a[1],h[1],n[1],g[1])])}}return b.push(d[d.length-1].slice()),b}var Ma=Wa(Ta(fb,3)),ia=Wa(Ta(tb,6)),za=Wa(Ta(gb,3));var $=[0,0,0,0];function qa(d,c){let b=1.3*Ea(d/170,c/170,3)+.55*K(d/37,c/41);b+=78*v(-730,-1060,c)*(.85+.15*K(d/90,3.1));let f=d+26*Math.sin(c/112)+14*K(c/61,1.7);b+=64*v(-148,-285,f)*(.8+.2*K(d/70,c/70));let e=d-34*Math.sin(c/150+1.3);b+=150*v(172,480,e)*(.72+.28*Ea(d/240,c/240,3));let a=(d+8)/94,h=(c-58)/64;b+=41.5*Math.exp(-(a*a+h*h));let n=(c-82)/64;b+=36*Math.exp(-n*n)*v(0,-190,d),b+=3*Ea(d/28,c/28,3)*Math.exp(-(a*a+h*h)*.5);let g=Math.max(0,Math.abs(d-30)-420),r=Math.max(0,-c-1220),M=Math.max(0,c-320),i=Math.hypot(g,r+M*.7);if(i>0){let y=v(0,1500,i);b+=y*(150+640*eb(d/1300+7.3,c/1300-2.1,7))+y*y*160}return b}function nb(d,c){let b=1.7+.168*(-d-8)+.064*(-c-150);return b+=5.5*K(d/96+3.1,c/96)+1.4*K(d/37,c/33),Math.max(b,.9)}function lb(d,c){let b=(d-wa.x)/wa.rx,f=(c-wa.z)/wa.rz,e=Math.hypot(b,f)+.12*K(d/52,c/52);return v(1,.84,e)}function Eb(d,c){let f=nb(d,c)/wa.step,e=Math.floor(f),a=f-e,h=wa.step*(e+v(.86,1,a));return h+=.24*v(0,.025,a)*(1-v(.035,.075,a)),h}function vb(d,c){let b=(d+112)/168,f=(c+236)/186;return v(1.25,.9,Math.hypot(b,f)+.1*K(d/70,c/70))}function rb(d,c){let b=qa(d,c),f=vb(d,c);f>0&&(b=la(b,Math.max(b,nb(d,c)-.6),f));let e=lb(d,c);e>0&&(b=la(b,Eb(d,c),e));let a=Math.hypot(d-ma.x,c-ma.z);a<ma.r+22&&(b=la(b,ma.y,v(ma.r+22,ma.r,a)));let h=Math.hypot((d-Ia.x)*.9,c-Ia.z);h<Ia.r+30&&(b=la(b,Ia.y+.35*K(d/13,c/13),v(Ia.r+30,Ia.r-12,h)));let n=Math.hypot(d-ra.x,c-ra.z);if(n<ra.r+6&&(b=Math.min(b,la(ra.level-1.6,b,v(ra.r-5,ra.r+6,n)))),d>ia.minX-90&&d<ia.maxX+90&&c>ia.minZ-90&&c<ia.maxZ+90){ia.closest(d,c,$);let g=$[0],r=$[1]/ia.length,M=la($a[0],$a[1],r),i=va+14*v(.08,0,r)+1.5*K($[1]/30,.5),y=M+Math.max(0,g-i)*(2.5+.6*K($[1]/40,g/20))+1.2*K(d/9,c/9)*v(i,i+6,g);b=Math.min(b,y)}if(d>za.minX-6&&d<za.maxX+6&&c>za.minZ-6&&c<za.maxZ+6){za.closest(d,c,$);let g=$[0];g<2.4&&(b-=.6*(1-v(.7,2.2,g)))}return b}var Ca=2,ua=(()=>{let d=Math.ceil(Ma.length/Ca)+1,c=new Float32Array(d),b=new Uint8Array(d);for(let a=0;a<d;a++){let h=Ma.at(a*Ca);c[a]=rb(h.x,h.z),Math.abs(h.z-ea.z)<4&&h.x>ea.x-ea.span/2-6&&h.x<ea.x+ea.span/2+6&&(b[a]=1)}for(let a=0;a<d;a++){let h=Ma.at(a*Ca),n=Math.abs(h.x-ea.x)-ea.span/2;Math.abs(h.z-ea.z)<30&&n<18&&(c[a]=la(c[a],ea.y-.15,v(18,4,n)))}let f=new Float32Array(d),e=4;for(let a=0;a<d;a++){let h=0,n=0;for(let g=-e;g<=e;g++){let r=Math.max(0,Math.min(d-1,a+g)),M=e+1-Math.abs(g);h+=c[r]*M,n+=M}f[a]=h/n}return{h:f,onBridge:b}})();function zb(d){let c=d/Ca,b=Math.floor(c),f=c-b,e=ua.h[Math.min(b,ua.h.length-1)],a=ua.h[Math.min(b+1,ua.h.length-1)];return e+(a-e)*f}function Sa(d,c){let b=rb(d,c);if(d>Ma.minX-6&&d<Ma.maxX+6&&c>Ma.minZ-6&&c<Ma.maxZ+6){Ma.closest(d,c,$);let f=$[0];if(f<3.4){let e=Math.round($[1]/Ca);ua.onBridge[Math.min(e,ua.onBridge.length-1)]||(b=la(b,zb($[1])-.1,v(3.4,1.7,f)))}}return b}function mb(d,c,b){b[0]=0,b[1]=0,b[2]=0,b[3]=0,Ma.closest(d,c,$);let f=Math.round($[1]/Ca);ua.onBridge[Math.min(f,ua.onBridge.length-1)]||(b[0]=1-v(1.1,2.4,$[0]+.5*K(d/3,c/3))),ia.closest(d,c,$);let e=$[0],a=1-v(va-1,va+2,e);za.closest(d,c,$);let h=$[0];a=Math.max(a,1-v(.8,1.4,h));let n=Math.hypot(d-ra.x,c-ra.z);a=Math.max(a,1-v(ra.r-2,ra.r+.5,n)),b[1]=a,b[2]=lb(d,c);let g=v(-.15,.35,Ea(d/160+4.2,c/160-1.3,4));g*=1-b[2],g*=v(6,16,Math.hypot((d-Ia.x)*.9,c-Ia.z)-Ia.r),g*=1-b[0],g*=v(4,10,h)*v(va+2,va+12,e);let r=(d+8)/80,M=(c-50)/58;return g*=v(.6,1.6,r*r+M*M),g*=v(ma.r,ma.r+25,Math.hypot(d-ma.x,c-ma.z)),g=Math.max(g,v(-760,-900,c)*.95),g=Math.max(g*1,v(190,260,d)*v(0,.3,Ea(d/90,c/90,3)+.25)),b[3]=Aa(g,0,1),b}function sa(d,c,b,f,e,a){let h=d/f,n=c/e,g=b/a,r=Math.sqrt(h*h+n*n+g*g),M=h/f,i=n/e,y=g/a,I=Math.sqrt(M*M+i*i+y*y);return I<1e-9?-Math.min(f,e,a):r*(r-1)/I}function _a(d,c,b,f,e,a){return Math.sqrt((d/f)**2+(c/e)**2+(b/a)**2)}function Fa(d,c,b,f,e,a,h,n,g,r){let M=d-f,i=c-e,y=b-a,I=h-f,A=n-e,w=g-a,R=Aa((M*I+i*A+y*w)/(I*I+A*A+w*w),0,1);return Math.hypot(M-I*R,i-A*R,y-w*R)-r}function Cb(d,c,b,f,e,a,h,n,g,r,M){let i=d-f,y=c-e,I=b-a,A=h-f,w=n-e,R=g-a,Y=Aa((i*A+y*w+I*R)/(A*A+w*w+R*R),0,1);return(Math.hypot(i-A*Y,y-w*Y,I-R*Y)-(r+(M-r)*Y))*.9}function Mb(d,c,b,f,e,a,h){let n=Math.abs(d)-f+h,g=Math.abs(c)-e+h,r=Math.abs(b)-a+h;return Math.hypot(Math.max(n,0),Math.max(g,0),Math.max(r,0))+Math.min(Math.max(n,g,r),0)-h}function Ya(d,c,b,f){let e=d-f.x,a=b-f.z,h=Math.hypot(e,a);if(h>f.r0*1.6+30)return h-f.r0*1.4;let n=Aa((c-f.y0)/(f.y1-f.y0),0,1),g=e/(h+1e-6),r=a/(h+1e-6),M=3*r-4*r*r*r,i=g*g-r*r,y=2*r*g,I=M*i+(4*g*g*g-3*g)*y,A=.13*(M*f.c+g*f.s)+.07*I+.11*K(g*1.4+f.seed,r*1.4+c/55),w=la(f.r0,f.r1,Math.pow(n,f.pow||1))*(1+A)+f.bulge*Math.sin(n*3.1),R=h-w;return R=aa(R,c-f.y1-7*K(e/22+f.seed,a/22),9),R=aa(R,f.y0-40-c,4),R*.82}function P(d,c,b,f,e,a,h,n={}){return{x:d,z:c,r0:b,r1:f,y0:e,y1:a,seed:h,c:Math.cos(h),s:Math.sin(h),bulge:n.bulge??0,pow:n.pow??1}}function Da(d,c,b,f){let e=12*Va(d/92,c/118,b/92,3);e+=3.2*Ra(d/10.5,c/72,b/10.5)+1.4*Ra(d/4.2,c/26,b/4.2);let a=c/16.5+.7*K(d/64,b/64),h=a-Math.floor(a);return e+=1.25*v(.55,.85,h)*(1-v(.85,1,h)),e*f}var[ib,yb,Nb]=hb,Bb=[[.12,7.5,18],[.34,7.5,19],[.62,19,64],[.9,10,27],[1.12,9,20]],Hb=[[.2,6,14],[.56,14,44],[.86,8,18]],Ga=[];for(let[d,c,b]of Bb)for(let f of[-1,1]){let e=f*85*Math.sin(d),a=-26+77*Math.cos(d);Ga.push({ax:e,ay:7,az:a,bx:e*1.03,by:-b,bz:a+3+b*.05,r1:c,r2:.9})}var ab=-140,Pa=[];for(let d=0;d<=10;d++){let c=-1.35+2.7*d/10;Pa.push([104*Math.sin(c),ab-8*(1-Math.cos(c)),-44+92*Math.cos(c)])}for(let[d,c,b]of Hb)for(let f of[-1,1]){let e=f*100*Math.sin(d),a=-44+88*Math.cos(d);Ga.push({ax:e,ay:ab+12,az:a,bx:e*.98,by:ab+12+b,bz:a-2,r1:c,r2:.8})}function Db(d,c,b){let f=Math.abs(d),e=sa(d,c-150,b+84,182,128,122),a=sa(d,c-46,b+26,116,78,106);return a=aa(a,-(c+2),5),e=Z(e,a,34),e=Z(e,Fa(f,c,b,96,80,24,174,52,-50,24),14),e=Z(e,Fa(f,c,b,16,196,46,152,178,-4,19),12),e=Z(e,Fa(f,c,b,40,128,56,104,104,40,11),9),e=Z(e,Fa(d,c,b,0,182,44,0,104,76,14),16),e}function Jb(d,c,b){let f=1e9;for(let e=0;e<Pa.length-1;e++){let a=Pa[e],h=Pa[e+1];f=Math.min(f,Fa(d,c,b,a[0],a[1],a[2],h[0],h[1],h[2],21))}return f}function Sb(d,c,b){let f=1e9;for(let e=0;e<Ga.length;e++){let a=Ga[e],h=d-a.ax;h>30||h<-30||(f=Math.min(f,Cb(d,c,b,a.ax,a.ay,a.az,a.bx,a.by,a.bz,a.r1,a.r2)))}return f}function db(d,c,b,f){let e=d-ib,a=c-yb,h=b-Nb,n=-22-75e-5*e*e+11*K(e/74,a/96);a>200&&(n-=(a-200)*.38),n+=70*v(-128,-168,a)*(1-v(110,190,Math.abs(e))),a<-168&&(n+=(-168-a)*.8);let g=(h-n)*.72,r=286-88e-5*e*e+40*K(e/170,h/170)+18*K(e/60,h/60);g=aa(g,(a-r)*.7,30),g=aa(g,-(h+540),30);let M=1e9,i=1e9;if(e>-270&&e<270&&a>-230&&a<330&&h>-345){M=Db(e,a,h),g=Z(g,M,34);let I=Math.abs(e);if(g=aa(g,-sa(I-80,a-150,h-36,40,33,72),7),g=aa(g,-sa(e,a-94,h-66,24,31,58),6),g=aa(g,-sa(e,a+66,h+46,154,70,215),9),a<-60&&a>-210&&I<150&&h>-100){let A=Jb(e,a,h);g=Z(g,A,16),M=Math.min(M,A)}a<20&&a>-160&&I<120&&h>-70&&h<90&&(i=Sb(e,a,h),g=Z(g,i,3))}return f&&(f[0]=M,f[1]=i),g}var Ha=[0,0];function Fb(d,c,b){let f=db(d,c,b,Ha),e=Ha[0],a=Ha[1];if(Math.abs(f)>48)return f;let h=e<30?v(26,2,e):0,n=a<12?v(9,.5,a):0;h=Math.max(h,n);let g=Da(d,c,b,1),r=1.6*Va(d/26,c/26,b/26,2)+.5*Ra(d/7,c/7,b/7);return f-la(g,r*(1-n*.8),h)}function Yb(d,c,b){return db(d,c,b,null)}function Lb(d,c,b,f,e,a,h){db(d,c,b,Ha);let n=Ha[0],g=Ha[1],r=n<40?v(30,4,n):0;r=Math.max(r,g<14?v(12,1,g):0),h[0]=r;let M=d-ib,i=c-yb,y=b-Nb,I=Math.abs(M),A=_a(M,i+66,y+46,154,70,215),w=v(1.25,1.02,A)*v(25,-95,y),R=v(1.25,1.02,_a(I-80,i-150,y-36,40,33,72))*v(34,-12,y),Y=v(1.25,1.02,_a(M,i-94,y-66,24,31,58))*v(50,14,y);h[1]=Math.max(w,R,Y),h[2]=.15*(1-r)}var jb=[P(-176,-372,30,22,20,236,1.3,{bulge:4}),P(-196,-470,38,26,20,300,2.1),P(-150,-214,22,15,30,182,3.7,{bulge:3}),P(-222,-112,34,24,30,214,4.4),P(-186,-612,42,30,20,340,5.9),P(-238,-762,50,34,20,380,6.6),P(-200,-40,24,18,36,150,7.2)],Qa=[[-205,112,-262,22,3,16],[-196,64,-166,16,3,12],[-150,182,-214,13,3,13]];function Ab(d,c,b){let f=-210-48*Math.sin((b+300)/165)-22*K(b/92,.3)-Math.max(0,c-40)*.07,e=(d-f)*.78,a=252+125*v(-80,-540,b)+46*K(b/210,d/210);e=aa(e,(c-a)*.72,24),e=aa(e,(b-112)*.8,30),e=aa(e,-(b+955),30);for(let h=0;h<jb.length;h++)e=Z(e,Ya(d,c,b,jb[h]),16);for(let h=0;h<Qa.length;h++){let n=Qa[h],g=Mb(d-n[0]+n[3]*.4,c-n[1]+n[4]+6,b-n[2],n[3]*1.4,n[4]+6,n[5],2.5);e=Z(e,g,4);let r=Mb(d-n[0]-2,c-n[1]-16,b-n[2],n[3]*.9,14,n[5]*.92,4);e=aa(e,-r,5)}return e}function pb(d,c,b){let f=Ab(d,c,b);if(Math.abs(f)>44)return f;let e=0;for(let a=0;a<Qa.length;a++){let h=Qa[a],n=Math.hypot((d-h[0])/(h[3]+8),(c-h[1])/10,(b-h[2])/(h[5]+8));e=Math.max(e,v(1.6,.9,n))}return f-Da(d,c,b,1-e*.9)}var bb=[P(-150,-598,40,27,0,296,1.1,{bulge:5}),P(-98,-662,30,21,0,238,2.7),P(-212,-696,50,35,0,338,3.9),P(-56,-726,22,15,0,186,4.8,{bulge:3}),P(-168,-520,26,20,0,214,5.5),P(-252,-568,34,26,0,276,6.3),P(-118,-772,34,24,10,262,7.7),P(-20,-792,18,13,10,150,8.9,{bulge:2})];for(let d of bb)d.y0=qa(d.x,d.z)-6;function Kb(d,c,b){let f=1e9;for(let e=0;e<bb.length;e++)f=Z(f,Ya(d,c,b,bb[e]),12);return Math.abs(f)>40?f:f-Da(d,c,b,.8)}var Ib=[P(118,-70,36,26,-44,196,2.4,{bulge:5,pow:.7}),P(92,-18,16,11,-10,64,3.3),P(150,-118,24,18,-44,128,5.1)];function Xb(d,c,b){let f=1e9;for(let e=0;e<Ib.length;e++)f=Z(f,Ya(d,c,b,Ib[e]),14);return f=Z(f,sa(d-104,c-160,b+58,34,20,32),14),Math.abs(f)>40?f:f-Da(d,c,b,.9)}var Vb=P(xa.x,xa.z,30,25,-48,xa.y,1.9,{bulge:3});function ub(d,c,b){let f=Ya(d,c,b,Vb);f=aa(f,c-xa.y,2);let e=ea.span/2;for(let a of[-1,1]){let h=ea.x+a*(e+9),n=sa(d-h,c+18,b-ea.z,20,26,22);n=aa(n,c-ea.y+.6,2),f=Z(f,n,6)}return f}function Wb(d,c,b){let f=ub(d,c,b);if(Math.abs(f)>30)return f;let e=v(xa.y-8,xa.y-1,c);return f-Da(d,c,b,.75*(1-e*.85))}var kb=(()=>{let d=Xa(77),c=[],b=0;for(;c.length<46&&b++<4e3;){let f=-2600+d()*5200,e=-3100+d()*2900;if(e>-1350&&f<330||e>-1700&&Math.abs(f)<520||c.some(g=>Math.hypot(g.x-f,g.z-e)<170))continue;let a=45+d()*75,h=qa(f,e)-20,n=220+d()*520;c.push(P(f,e,a,a*(.55+d()*.25),h,h+n,d()*10,{bulge:d()*10,pow:.8+d()*.6}))}return c})();function Tb(d,c,b){let f=1e9;for(let e=0;e<kb.length;e++){let a=kb[e],h=d-a.x,n=b-a.z,g=h*h+n*n,r=a.r0*1.7+60;if(g>r*r){f=Math.min(f,Math.sqrt(g)-a.r0*1.5);continue}f=Z(f,Ya(d,c,b,a),20)}return Math.abs(f)>50?f:f-Da(d*.62,c*.62,b*.62,1.25)}var Ba=d=>(c,b,f,e,a,h,n)=>{n[0]=0,n[1]=0,n[2]=d},ob=(()=>{let d=Xa(4242),c=[],b=(e,a,h)=>{let n=Sa(e,a),g=h*(.8+d()*.5),r=h*(.45+d()*.35),M=h*(.7+d()*.5),i=d()*Math.PI*2,y=[];for(let I=0;I<4;I++){let A=d()*Math.PI*2,w=(d()-.3)*1.2;y.push([Math.cos(A)*Math.cos(w),Math.sin(w),Math.sin(A)*Math.cos(w),h*(.45+d()*.3)])}c.push({x:e,y:n-r*.35,z:a,rx:g,ry:r,rz:M,c:Math.cos(i),s:Math.sin(i),planes:y,R:Math.max(g,r,M)*1.15})},f=[[-24,26,2.6],[-31,31,1.5],[27,21,3.2],[33,27,1.7],[-14,6,1.9],[17,2,2.4],[-46,12,3.8],[48,4,3.4],[7,22,.9],[-6,28,.7],[12,30,.6]];for(let[e,a,h]of f)b(e,a,h);for(let e=0;e<26;e++){let a=Ma.at(30+e*34+d()*18),h=d()<.5?-1:1,n=3.6+d()*6;b(a.x-a.tz*h*n,a.z+a.tx*h*n,.7+d()*1.8)}for(let e=0;e<22;e++){let a=ia.at(200+e*38+d()*20),h=d()<.5?-1:1,n=6+d()*4;b(a.x-a.tz*h*n,a.z+a.tx*h*n,1.2+d()*2.5)}return c})();function qb(d,c,b){let f=1e9;for(let e=0;e<ob.length;e++){let a=ob[e],h=d-a.x,n=c-a.y,g=b-a.z,r=h*h+n*n+g*g;if(r>(a.R+6)*(a.R+6)){f=Math.min(f,Math.sqrt(r)-a.R);continue}let M=h*a.c+g*a.s,i=-h*a.s+g*a.c,y=sa(M,n,i,a.rx,a.ry,a.rz);for(let I of a.planes)y=aa(y,M*I[0]+n*I[1]+i*I[2]-I[3],a.R*.12);f=Z(f,y,.6)}return f>2?f:f-.22*Va(d/2.2,c/2.2,b/2.2,3)-.05*Ra(d/.6,c/.6,b/.6)}var sb={skull:{bounds:[-480,-30,-1430,480,640,-870],cell:{high:1.3,mid:2.2,low:3.2},sdf:Fb,sdfAO:Yb,attrib:Lb,lipschitz:3.4},left:{bounds:[-730,0,-970,-120,470,125],cell:{high:2,mid:2.8,low:4},sdf:pb,sdfAO:Ab,attrib:Ba(.22),lipschitz:2},mid:{bounds:[-320,-20,-820,20,350,-470],cell:{high:1.6,mid:2.4,low:3.4},sdf:Kb,attrib:Ba(.32),lipschitz:2},right:{bounds:[20,-50,-190,200,225,40],cell:{high:1.1,mid:1.6,low:2.4},sdf:Xb,attrib:Ba(.2),lipschitz:2},gorge:{bounds:[30,-52,-600,190,14,-205],cell:{high:1,mid:1.5,low:2.2},sdf:Wb,sdfAO:ub,attrib:Ba(.25),lipschitz:2},far:{bounds:[-2800,-60,-3300,2800,1e3,-220],cell:{high:7,mid:9,low:12},sdf:Tb,attrib:Ba(.62),lipschitz:2.2},boulders:{bounds:[-130,-50,-1e3,260,60,60],cell:{high:.3,mid:.45,low:.7},sdf:qb,attrib:Ba(.14),lipschitz:2}};function Ob(d,c,b){let{sdf:f,cell:e}=d,[a,h,n,g,r,M]=d.bounds,i=Math.ceil((g-a)/e),y=Math.ceil((r-h)/e),I=Math.ceil((M-n)/e);c=Math.max(0,c),b=Math.min(i,b);let A=Math.ceil(i/8),w=Math.ceil(y/8),R=Math.ceil(I/8),Y=d.lipschitz||1.7,S=(8*e*.8661+e)*Y,q=Math.max(0,Math.floor((c-1)/8)),t=Math.min(A-1,Math.floor((b-1)/8)),m=new Map,l=9,j=[],k=[],o=[],x=0;for(let s=0;s<R;s++)for(let C=0;C<w;C++)for(let D=q;D<=t;D++){let J=a+(D*8+4)*e,V=h+(C*8+8/2)*e,F=n+(s*8+8/2)*e,L=f(J,V,F);if(x++,Math.abs(L)>S)continue;let p=new Float32Array(l*l*l);for(let da=0;da<=8;da++)for(let W=0;W<=8;W++)for(let fa=0;fa<=8;fa++)p[fa+l*(W+l*da)]=f(a+(D*8+fa)*e,h+(C*8+W)*e,n+(s*8+da)*e);x+=l*l*l,m.set(D+A*(C+w*s),{bi:D,bj:C,bk:s,s:p,v:null})}let O=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],z=new Float32Array(8);for(let s of m.values()){let C=new Int32Array(512).fill(-1);s.v=C;let{s:D}=s;for(let J=0;J<8;J++)for(let V=0;V<8;V++)for(let F=0;F<8;F++){let L=s.bi*8+F,p=s.bj*8+V,da=s.bk*8+J;if(L<c-1||L>=b||p>=y||da>=I||L>=i)continue;let W=0;for(let ca=0;ca<8;ca++){let na=D[F+(ca&1)+l*(V+(ca>>1&1)+l*(J+(ca>>2)))];z[ca]=na,na<0&&(W|=1<<ca)}if(W===0||W===255)continue;let fa=0,Ua=0,pa=0,ya=0;for(let ca=0;ca<12;ca++){let na=O[ca][0],ka=O[ca][1],oa=z[na],Ka=z[ka];if(oa<0==Ka<0)continue;let Za=oa/(oa-Ka);fa+=(na&1)+((ka&1)-(na&1))*Za,Ua+=(na>>1&1)+((ka>>1&1)-(na>>1&1))*Za,pa+=(na>>2)+((ka>>2)-(na>>2))*Za,ya++}C[F+8*(V+8*J)]=j.length,j.push(a+(L+fa/ya)*e),k.push(h+(p+Ua/ya)*e),o.push(n+(da+pa/ya)*e)}}let N=(s,C,D)=>{if(s<0||C<0||D<0)return-1;let J=m.get((s/8|0)+A*((C/8|0)+w*(D/8|0)));return J?J.v[s%8+8*(C%8+8*(D%8))]:-1},u=[],B=(s,C,D,J,V)=>{if(s<0||C<0||D<0||J<0)return;if(V){let p=C;C=J,J=p}let F=(j[s]-j[D])**2+(k[s]-k[D])**2+(o[s]-o[D])**2,L=(j[C]-j[J])**2+(k[C]-k[J])**2+(o[C]-o[J])**2;F<L?u.push(s,C,D,s,D,J):u.push(s,C,J,C,D,J)};for(let s of m.values()){let{s:C}=s;for(let D=0;D<8;D++)for(let J=0;J<8;J++)for(let V=0;V<8;V++){let F=s.bi*8+V,L=s.bj*8+J,p=s.bk*8+D;if(F<c||F>=b||L>=y||p>=I)continue;let W=C[V+l*(J+l*D)]<0;L>0&&p>0&&C[V+1+l*(J+l*D)]<0!==W&&B(N(F,L,p),N(F,L-1,p),N(F,L-1,p-1),N(F,L,p-1),!W),F>0&&p>0&&C[V+l*(J+1+l*D)]<0!==W&&B(N(F,L,p),N(F,L,p-1),N(F-1,L,p-1),N(F-1,L,p),!W),F>0&&L>0&&C[V+l*(J+l*(D+1))]<0!==W&&B(N(F,L,p),N(F-1,L,p),N(F-1,L-1,p),N(F,L-1,p),!W)}}let H=new Int32Array(j.length).fill(-1),U=0;for(let s=0;s<u.length;s++){let C=u[s];H[C]<0&&(H[C]=U++)}let E=new Float32Array(U*3);for(let s=0;s<j.length;s++){let C=H[s];C<0||(E[C*3]=j[s],E[C*3+1]=k[s],E[C*3+2]=o[s])}let T=U>65535?new Uint32Array(u.length):new Uint32Array(u.length);for(let s=0;s<u.length;s++)T[s]=H[u[s]];let G=new Int8Array(U*3),_=new Uint8Array(U*4),X=e*.35,Oa=d.sdfAO||f,ba=[e*1.2,e*3.2,e*8,e*20],ta=[.5,.3,.2,.12],ha=new Float32Array(4);for(let s=0;s<U;s++){let C=E[s*3],D=E[s*3+1],J=E[s*3+2],V=f(C+X,D-X,J-X),F=f(C-X,D-X,J+X),L=f(C-X,D+X,J-X),p=f(C+X,D+X,J+X),da=V-F-L+p,W=-V-F+L+p,fa=-V+F-L+p,Ua=Math.hypot(da,W,fa)||1;da/=Ua,W/=Ua,fa/=Ua;let pa=(V+F+L+p)*.25,ya=Math.max(-e*.5,Math.min(e*.5,pa));C-=da*ya,D-=W*ya,J-=fa*ya,E[s*3]=C,E[s*3+1]=D,E[s*3+2]=J,G[s*3]=Math.round(da*127),G[s*3+1]=Math.round(W*127),G[s*3+2]=Math.round(fa*127);let ca=0;for(let ka=0;ka<4;ka++){let oa=ba[ka],Ka=Oa(C+da*oa,D+W*oa,J+fa*oa);ca+=ta[ka]*Math.max(0,oa-Ka)/oa}let na=Math.max(0,Math.min(1,1-ca));ha[0]=0,ha[1]=0,ha[2]=0,ha[3]=0,d.attrib&&d.attrib(C,D,J,da,W,fa,ha),_[s*4]=Math.round(na*255),_[s*4+1]=Math.round(Math.max(0,Math.min(1,ha[0]))*255),_[s*4+2]=Math.round(Math.max(0,Math.min(1,ha[1]))*255),_[s*4+3]=Math.round(Math.max(0,Math.min(1,ha[2]))*255)}return{pos:E,nor:G,aux:_,index:T,samples:x,blocks:m.size}}var cb=(function(){var d="b9H79Tebbbe;veC9Geueu9Geub9Gbb9Gsuuuuuuuuuuuu99uueu9Gvuuuuub9Gruuuuuuub9Gouuuuuue999Gvuuuuueu9Gzuuuuuuuuuuu99uuuub9Gquuuuuuu99uueu9GPuuuuuuuuuuu99uueu9Gquuuuuuuu99ueu9Gruuuuuu99eu9Gwuuuuuu99ueu9Giuuue999GDuuuuuuuuueu9Gkuuuuuuuu99uub9Gluuuueu9Gluuuub9Giuuueui3EdilvorlwDiqkrxmPszdHObAAbeAlve9Weiiviebeoweuecj:Gdkr:Sdmo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95bw8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bD8A9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9O9v9W9K9HtWbqQ9TW79O9V9Wt9F79P9T9W29P9M959t29V9W9W95bkX9TW79O9V9Wt9F79P9T9W29P9M959qV919UWbmQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7bPX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2WbsP9TW79O9V9Wt9FVW9TW79Obza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbA59TW79O9V9Wt9F9NW9UWV9HtW9q9V79Pt9P9V9U9sW9T9H9WbCl79IV9RbXDwebcekdKYq:p:1dElbzOk:Q:tekYue99iuQ99eui99Due99xue9:w998Jjjjjbcj;sb9Rgs8Kjjjjbcbhzasc:Cefcbc;Kbz:xjjjb8AdnabaeSmbabaeadcdtz:wjjjb8AkdnamcdGTmbalcrfci4cbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egecdtfaHBdbasaecefBd;8ecbhlcbhednadTmbabheadhOinaHaeydbci4fcb86bbaeclfheaOcufgOmbkcbhlabheadhOinaHaeydbgAci4fgCaCRbbgCceaAcrGgAtV86bbaCcu7aA4ceGalfhlaeclfheaOcufgOmbkcualcdtalcFFFFi0Ehekaecbyd;y:L:cjbHjjjjbbhzasc:Cefasyd;8egecdtfazBdbasaecefBd;8ealcd4alfhOcehHinaHgecethHaeaO6mbkcbhXcuaecdtgOaecFFFFi0Ecbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egAcdtfaHBdbasaAcefBd;8eaHcFeaOz:xjjjbhQdnadTmbaecufhLcbhKindndnaQabaKcdtfgYydbgAc:v;t;h;Ev2aLGgOcdtfgCydbgHcuSmbceheinazaHcdtfydbaASmdaOaefhHaecefheaQaHaLGgOcdtfgCydbgHcu9hmbkkazaXcdtfaABdbaCaXBdbaXhHaXcefhXkaYaHBdbaKcefgKad9hmbkkaQcbyd;C:L:cjbH:bjjjbbasasyd;8ecufBd;8ekcbh8AcualcefgecdtaecFFFFi0Ecbyd;y:L:cjbHjjjjbbhKasc:Cefasyd;8egecdtfaKBdbasaKBdNeasaecefBd;8ecuadcitadcFFFFe0Ecbyd;y:L:cjbHjjjjbbhEasc:Cefasyd;8egecdtfaEBdbasaEBd:yeasaecefBd;8eascNefabadalcbz:cjjjbcualcdtgealcFFFFi0Eg3cbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egOcdtfaHBdbasaOcefBd;8ea3cbyd;y:L:cjbHjjjjbbhXasc:Cefasyd;8egOcdtfaXBdbasaOcefBd;8eaHaXaialavazasc:Cefz:djjjbalcbyd;y:L:cjbHjjjjbbh5asc:Cefasyd;8egOcdtfa5BdbasaOcefBd;8ea3cbyd;y:L:cjbHjjjjbbhOasc:Cefasyd;8egAcdtfaOBdbasaAcefBd;8ea3cbyd;y:L:cjbHjjjjbbhAasc:Cefasyd;8egCcdtfaABdbasaCcefBd;8eaOcFeaez:xjjjbh8EaAcFeaez:xjjjbh8FdnalTmbindnaKa8AgAcefg8AcdtfydbgCaKaAcdtgefydbgOSmbaCaO9RhYaEaOcitfhaa8Faefhha8EaefhLcbhCindndnaaaCcitfydbgQaA9hmbaLaABdbahaABdbxekdnaKaQcdtggfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheinaeydbaASmdaecwfheaOcufgOmbkka8FagfgeaAaQaeydbcuSEBdbaLaQaAaLydbcuSEBdbkaCcefgCaY9hmbkka8Aal9hmbkaHhOaXhAa8EhQa8FhCcbheindndnaeaOydbgL9hmbdnaeaAydbgL9hmbaQydbhLdnaCydbgYcu9hmbaLcu9hmba5aefcb86bbxikdnaYcuSmbaLcuSmbaeaYSmbaHaYcdtfydbaHaLcdtfydb9hmba5aefcd86bbxika5aefhadnaeaYSmbaeaLSmbaace86bbxikaacv86bbxdkdnaeaXaLcdtgYfydb9hmbdnaCydbgacuSmbaeaaSmbaQydbggcuSmbaeagSmba8FaYfydbghcuSmbahaLSmba8EaYfydbgYcuSmbaYaLSmbaHaacdtfydbgLaHaYcdtfydb9hmbaLaHagcdtfydbgYSmbaYaHahcdtfydb9hmba5aefcd86bbxika5aefcv86bbxdka5aefcv86bbxeka5aefa5aLfRbb86bbkaOclfhOaAclfhAaQclfhQaCclfhCalaecefge9hmbkdnamcaGTmbcbh8Jindndna5a8Jfg8KRbbg8Lc9:fPlbeebekdndndnaHa8Jcdtfydbgea8J9hmbcbhYcbh8MaqTmednazTmbcbh8Ma8JheinaqazaecdtgefydbfRbbce4a8MVceGh8MaXaefydbgea8J9hmbxikkcbh8Ma8JheinaqaefRbbce4a8MVceGh8MaXaecdtfydbgea8J9hmbxdkka5aefRbbhexeka8JheindnaKaecdtg8AfgeclfydbgOaeydbgeSmbaOae9RhgaEaecitfhhaHa8AfhacbhLinahaLcitfydbgQhednindnaKaecdtgCfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheaaydbhAdninaHaeydbcdtfydbaASmeaecwfheaOcufgOTmdxbkkcbhexdkaXaCfydbgeaQ9hmbkcehekaYaeVhYaLcefgLag9hmbkkaXa8Afydbgea8J9hmbka8LclciaYceGEa8MEheka8Kae86bbka8Jcefg8Jal9hmbkkdnaqTmbdndnazTmbazheaHhOalhAindnaqaeydbfRbbceGTmba5aOydbfcv86bbkaeclfheaOclfhOaAcufgAmbxdkkaqheaHhOalhAindnaeRbbceGTmba5aOydbfcv86bbkaecefheaOclfhOaAcufgAmbkkaHhealhAa5hOindna5aeydbfRbbcv9hmbaOcv86bbkaeclfheaOcefhOaAcufgAmbkkamceGTmba5healhOindndnaeRbbcufPlbeebekaecv86bbkaecefheaOcufgOmbkkcbh8Ncualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbh8Kasc:Cefasyd;8egecdtfa8KBdbasaecefBd;8eascbBd:qeas9cb83i1ea8Kaialavazasc1efz:ejjjbhydndnaDmbcbh8PcbhaxekcbhaawhecbhOindnaeIdbJbbbb9ETmbasaacdtfaOBdbaacefhakaeclfheaDaOcefgO9hmbkcuaaal2gecdtaecFFFFi0Ecbyd;y:L:cjbHjjjjbbh8Pasc:Cefasyd;8egecdtfa8PBdbasaecefBd;8ealTmbdnaambcbhaxekarcd4hgdnazTmbaacdthhcbhLa8PhYinaoazaLcdtfydbag2cdtfhQasheaYhOaahAinaOaQaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaOclfhOaAcufgAmbkaYahfhYaLcefgLal9hmbxdkkaacdthhcbhLa8PhYinaoaLag2cdtfhQasheaYhOaahAinaOaQaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaOclfhOaAcufgAmbkaYahfhYaLcefgLal9hmbkkcualc8S2gOalc;D;O;f8U0EgCcbyd;y:L:cjbHjjjjbbheasc:Cefasyd;8egAcdtfaeBdbasaAcefBd;8eaecbaOz:xjjjbhIcbh8RcbhgdnaaTmbcbh8NaCcbyd;y:L:cjbHjjjjbbhgasc:Cefasyd;8egecdtfagBdbasaecefBd;8eagcbaOz:xjjjb8Acuaaal2gecltgOaecFFFFb0Ecbyd;y:L:cjbHjjjjbbh8Rasc:Cefasyd;8egecdtfa8RBdbasaecefBd;8ea8RcbaOz:xjjjb8AamcjjjjdGTmbcualcltgealcFFFFb0Ecbyd;y:L:cjbHjjjjbbh8Nasc:Cefasyd;8egOcdtfa8NBdbasaOcefBd;8ea8Ncbaez:xjjjb8AkdnadTmbcbhQabhOina8KaOclfydbgLcx2fgeIdba8KaOydbgYcx2fgAIdbg8S:tgRa8KaOcwfydbghcx2fgCIdlaAIdlg8U:tg8VNaeIdla8U:tg8WaCIdba8S:tg8XN:tg8Ya8YNa8WaCIdwaAIdwg8Z:tg80NaeIdwa8Z:tg8Wa8VN:tg81a81Na8Wa8XNaRa80N:tg80a80NMMg8V:rhBa8Yh8Xa80h8Wa81hRdna8VJbbbb9EgATmba8YaB:vh8Xa80aB:vh8Wa81aB:vhRkaIaHaYcdtfydbgCc8S2fgeaRaB:rg8VaRNNg83aeIdbMUdbaea8Wa8Va8WNgUNg85aeIdlMUdlaea8Xa8Va8XNg86Ng87aeIdwMUdwaeaRaUNgUaeIdxMUdxaea86aRNg88aeIdzMUdzaea8Wa86Ng89aeIdCMUdCaeaRa8Va8Xa8ZNaRa8SNa8Ua8WNMM:mg8:Ng86NgRaeIdKMUdKaea8Wa86Ng8WaeId3MUd3aea8Xa86Ng8XaeIdaMUdaaea86a8:Ng86aeId8KMUd8Kaea8VaeIdyMUdyaIaHaLcdtfydbgLc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdyaIaHahcdtfydbgYc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdydna8NTmbdnaATmba8YaB:vh8Ya80aB:vh80a81aB:vh81ka8NaCcltfgeaBJbbbZNgRa80Ng8VaeIdlMUdlaeaRa8YNg8WaeIdwMUdwaeaRa81Ng8XaeIdbMUdbaeaRa8S:ma81Na8Ua80N:ta8Za8YN:tNgRaeIdxMUdxa8NaLcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxa8NaYcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxkaOcxfhOaQcifgQad6mbkkdnalTmbJq;x8J88J;n;m;m89J:v:;;w8ZamczGEamc;abGEh80cbhOaHhCazhQaIhea8KhAindnaOaCydb9hmbaOhLdnazTmbaQydbhLka80hRdnaqTmbJbbjZa80aqaLfRbbclGEhRkaecxfgLaLIdbJbbbbMUdbaeczfgLaLIdbJbbbbMUdbaecCfgLaLIdbJbbbbMUdbaeaRaecyfgLIdbg8YNgRaeIdbMUdbaeclfgYaRaYIdbMUdbaecwfgYaRaYIdbMUdbaecKfgYaYIdbaAIdbg8WaRN:tUdbaAcwfIdbh8Vaec3fgYaYIdbaRaAclfIdbg8XN:tUdbaecafgYaYIdbaRa8VN:tUdbaec8KfgYIdbh81aLa8YaRMUdbaYa81aRa8Va8VNa8Wa8WNa8Xa8XNMMNMUdbkaCclfhCaQclfhQaec8SfheaAcxfhAalaOcefgO9hmbkkdnadTmbcbh8AabhLinaba8AcdtfhYcbheindna5aLaefydbgCfRbbgOTmba5aYaec:G:G:cjbfydbcdtfydbgQfRbbcFeGgATmbdnaOclSghmbaOci6mbaAclSmbaAcd0mekdnaOcd0mba8EaCcdtfydbaQ9hmekdnaAcd0mba8FaQcdtfydbaC9hmekdndnahmbaAcl9hmekaOciSmeaAciSmekJbbbZJbbbZJbbacaAcdSEaOcdSEhUdna8KaYaec:K:G:cjbfydbcdtfydbcx2fgOIdwa8KaCcx2fgAIdwg86:tg8Sa8KaQcx2fghIdwa86:tg8Xa8XNahIdbaAIdbg8U:tg80a80NahIdlaAIdlg8Z:tg8Va8VNMMg81Na8Xa8Sa8XNaOIdba8U:tg83a80Na8VaOIdla8Z:tg85NMMg8WN:tg8Ya8YNa83a81Na80a8WN:tgRaRNa85a81Na8Va8WN:tg8Wa8WNMMgBJbbbb9ETmba8YaB:rgB:vh8Ya8WaB:vh8WaRaB:vhRkaUa81:rNgBa8Ya86NaRa8UNa8Za8WNMM:mg81Ng87a81Nh88a80a85Na8Va83N:tg81a81Na8Va8SNa8Xa85N:tg8Va8VNa8Xa83Na80a8SN:tg8Xa8XNMMg83:rh80a8Ya87Nh85a8Wa87Nh89aRa87Nh87a8WaBa8YNg8SNh8:a8SaRNhZaRaBa8WNgnNhca8Ya8SNh8Ya8WanNh8WaRaBaRNNh8Sdna83Jbbbb9ETmba81a80:vh81a8Xa80:vh8Xa8Va80:vh8VkaIaHaCcdtfydbc8S2fgOaOIdba8Sa8VaUa80:rNgRa8VNNMg80MUdbaOa8Wa8XaRa8XNg8SNMg83aOIdlMUdlaOa8Ya81aRa81Ng8WNMg8YaOIdwMUdwaOaca8Va8SNMg8SaOIdxMUdxaOaZa8Wa8VNMgUaOIdzMUdzaOa8:a8Xa8WNMg8WaOIdCMUdCaOa87a8VaRa81a86Na8Va8UNa8Za8XNMMg86:mNgRNMg8VaOIdKMUdKaOa89a8XaRNMg8XaOId3MUd3aOa85a81aRNMg81aOIdaMUdaaOa88a86aRN:tgRaOId8KMUd8KaOaBaOIdyMUdyaIaHaQcdtfydbc8S2fgOa80aOIdbMUdbaOa83aOIdlMUdlaOa8YaOIdwMUdwaOa8SaOIdxMUdxaOaUaOIdzMUdzaOa8WaOIdCMUdCaOa8VaOIdKMUdKaOa8XaOId3MUd3aOa81aOIdaMUdaaOaRaOId8KMUd8KaOaBaOIdyMUdykaeclfgecx9hmbkaLcxfhLa8Acifg8Aad6mbkkdnamcjeGTmbalTmbcbh9cindnaKa9cgecdtgOfydbghaKaecefg9ccdtfydbg8M9pmba8Kaecx2fhDaIaHaOfydbgCc8S2fh8AindnaHaEahcitfgeydbgLcdtfydbg8JaC0mbaeydlh8LcuhAaLheindnaKaecdtgYfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheindnaHaeydbcdtfydbaC9hmbaAcu9hhQaLhAaQmbaeclfydbhAkaecwfheaOcufgOmbkkaXaYfydbgeaL9hmbkaAaLSmbaAcuSmba8KaLcx2fgeIdbaDIdbg81:tgRa8Ka8Lcx2fgOIdlaDIdlg80:tg8XNaeIdla80:tg8VaOIdba81:tg8YN:tg86a8KaAcx2fgAIdba81:tg8Za8VNaAIdla80:tg83aRN:tg8SNa8VaOIdwaDIdwgB:tg8UNaeIdwaB:tg8Wa8XN:tg85a83a8WNaAIdwaB:tg87a8VN:tgUNa8Wa8YNaRa8UN:tg88a87aRNa8Za8WN:tg89NMMa86a86Na85a85Na88a88NMM:rJ:A:z9z:;Na8Sa8SNaUaUNa89a89NMM:rN9Gmbdna8Ua8Wa8WNaRaRNa8Va8VNMMg8SNa8Wa8Ua8WNa8YaRNa8Va8XNMMg86N:tg8Ua8UNa8Ya8SNaRa86N:tg8Ya8YNa8Xa8SNa8Va86N:tg86a86NMMg8XJbbbb9ETmba8Ua8X:rg8X:vh8Ua86a8X:vh86a8Ya8X:vh8Yka8S:rg8Xa8UaBNa8Ya81Na80a86NMM:mgUNg85aUNhUa8Ua85Nh88a86a85Nh89a8Ya85Nh8:a86a8Xa8UNg85NhZa85a8YNhna8Ya8Xa86NgcNhJa8Ua85Nh8Ua86acNh86a8Ya8Xa8YNNh85dna87a8SNa8Wa87a8WNa8ZaRNa8Va83NMMg8YN:tg8Wa8WNa8Za8SNaRa8YN:tgRaRNa83a8SNa8Va8YN:tg8Va8VNMMg8YJbbbb9ETmba8Wa8Y:rg8Y:vh8Wa8Va8Y:vh8VaRa8Y:vhRka8Aa8AIdba85aRa8XaRNNMg8SMUdba8Aa86a8Va8Xa8VNg8ZNMg86a8AIdlMUdla8Aa8Ua8Wa8Xa8WNg8YNMg8Ua8AIdwMUdwa8AaJaRa8ZNMg8Za8AIdxMUdxa8Aana8YaRNMg83a8AIdzMUdza8AaZa8Va8YNMg85a8AIdCMUdCa8Aa8:aRa8Xa8WaBNaRa81Na80a8VNMMg81:mNg8YNMgRa8AIdKMUdKa8Aa89a8Va8YNMg8Va8AId3MUd3a8Aa88a8Wa8YNMg8Wa8AIdaMUdaa8AaUa81a8YN:tg8Ya8AId8KMUd8Ka8Aa8Xa8XMg8Xa8AIdyMUdyaIa8Jc8S2fgea8SaeIdbMUdbaea86aeIdlMUdlaea8UaeIdwMUdwaea8ZaeIdxMUdxaea83aeIdzMUdzaea85aeIdCMUdCaeaRaeIdKMUdKaea8VaeId3MUd3aea8WaeIdaMUdaaea8YaeId8KMUd8Kaea8XaeIdyMUdykahcefgha8M9hmbkka9cal9hmbkkdnadTmbaaTmbcbhYinJbbbbh80a8KabaYcdtfgeclfydbgLcx2fgOIdwa8Kaeydbghcx2fgAIdwg8Z:tg8Va8VNaOIdbaAIdbg83:tg8Wa8WNaOIdlaAIdlg85:tg8Xa8XNMMg8Sa8Kaecwfydbg8Acx2fgeIdwa8Z:tg8YNa8Va8YNa8WaeIdba83:tg81Na8XaeIdla85:tgBNMMgRa8VN:tJbbbbJbbjZa8Sa8Ya8YNa81a81NaBaBNMMg8UNaRaRN:tg86:va86Jbbbb9BEg86Nh88a8Ua8VNaRa8YN:ta86Nh89a8SaBNaRa8XN:ta86Nh8:a8Ua8XNaRaBN:ta86NhZa8Sa81NaRa8WN:ta86Nhna8Ua8WNaRa81N:ta86Nhca8WaBNa8Xa81N:tgRaRNa8Xa8YNa8VaBN:tgRaRNa8Va81Na8Wa8YN:tgRaRNMM:rJbbbZNhRa8Pahaa2g8JcdtfhOa8Pa8Aaa2g8McdtfhAa8PaLaa2gDcdtfhCa8Z:mhJa85:mh9ea83:mhTascjdfheaahQJbbbbhBJbbbbh86Jbbbbh8SJbbbbh8UJbbbbh8ZJbbbbh83Jbbbbh85Jbbbbh87JbbbbhUinaecwfaRa89aCIdbaOIdbg8Y:tg8XNa88aAIdba8Y:tg81NMg8VNUdbaeclfaRaZa8XNa8:a81NMg8WNUdbaeaRaca8XNana81NMg8XNUdbaecxfaRaJa8VNa9ea8WNa8YaTa8XNMMMg8YNUdbaRa8Va8WNNa8ZMh8ZaRa8Va8XNNa8UMh8UaRa8Wa8XNNa8SMh8SaRa8Ya8YNNaUMhUaRa8Va8YNNa87Mh87aRa8Wa8YNNa85Mh85aRa8Xa8YNNa83Mh83aRa8Va8VNNa86Mh86aRa8Wa8WNNaBMhBaRa8Xa8XNNa80Mh80aOclfhOaCclfhCaAclfhAaeczfheaQcufgQmbkagahc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyagaLc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyaga8Ac8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdya8Ra8JcltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8RaDcltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8Ra8McltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbkaYcifgYad6mbkkcbhAdndnamcwGgSmbJbbbbh86cbh9hcbh9icbh6xekcbh9ha3cbyd;y:L:cjbHjjjjbbh6asc:Cefasyd;8egecdtfa6BdbasaecefBd;8ecua6alabadaHz:fjjjbgCcltaCcjjjjiGEcbyd;y:L:cjbHjjjjbbh9iasc:Cefasyd;8egecdtfa9iBdbasaecefBd;8ea9iaCa6a8Kalz:gjjjbJFFuuh86aCTmba9iheaChOinaeIdbgRa86a86aR9EEh86aeclfheaOcufgOmbkaCh9hkdnalTmbaKclfheaKydbhCa5hOalhQcbhAincbaeydbgLaC9RaORbbcpeGEaAfhAaOcefhOaeclfheaLhCaQcufgQmbkaAce4hAkcuadaA9Rcifg9kcx2a9kc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbh0asc:Cefasyd;8egecdtfa0BdbasaecefBd;8ecua9kcdta9kcFFFFi0Ecbyd;y:L:cjbHjjjjbbh9masc:Cefasyd;8egecdtfa9mBdbasaecefBd;8ea3cbyd;y:L:cjbHjjjjbbh9nasc:Cefasyd;8egecdtfa9nBdbasaecefBd;8ealcbyd;y:L:cjbHjjjjbbh9oasc:Cefasyd;8egecdtfa9oBdbasaecefBd;8eaxaxNayJbbjZamclGEg9pa9pN:vh87JbbbbhUdnadak9nmbdna9kci6mbamcjdGh9qaaclth9ra0cwfh9sJbbbbh85JbbbbhUinascNefabadalaHz:cjjjbabh8Acbh3cbh9tinaba9tcdtfh8McbheindnaHa8AaefydbgAcdtghfydbgCaHa8Maec:W:G:cjbfydbcdtfydbgOcdtg8JfydbgQSmba5aOfRbbgYco2a5aAfRbbgLfRb;a:G:cjbg8LaLco2aYfgDRb;a:G:cjbg9cVcFeGTmbdnaQaC9nmbaDRb;W:G:cjbcFeGmekdnaLcufcFeGce0mbaYTmba8EahfydbaO9hmekdnaLTmbaYcufcFeGce0mba8Fa8JfydbaA9hmeka0a3cx2fgCaOaAa9ccFeGgQEBdlaCaAaOaQEBdbaCaQa8LGcb9hBdwa3cefh3kaeclfgecx9hmbkdna9tcifg9tad9pmba8Acxfh8Aa3cifa9k9nmekka3TmdcbhDinaIaHa0aDcx2fghydbgLcdtgCfydbg8Jc8S2fgeIdwa8KahydlgYcx2fgOIdwg8WNaeIdzaOIdbg8XNaeIdaMgRaRMMa8WNaeIdlaOIdlg8YNaeIdCa8WNaeId3MgRaRMMa8YNaeIdba8XNaeIdxa8YNaeIdKMgRaRMMa8XNaeId8KMMM:lhRJbbbbJbbjZaeIdyg8V:va8VJbbbb9BEh8Vdndnahydwg8MmbJFFuuhBxekJbbbbJbbjZaIaHaYcdtfydbc8S2fgeIdyg81:va81Jbbbb9BEaeIdwa8KaLcx2fgOIdwg81NaeIdzaOIdbg80NaeIdaMgBaBMMa81NaeIdlaOIdlgBNaeIdCa81NaeId3Mg81a81MMaBNaeIdba80NaeIdxaBNaeIdKMg81a81MMa80NaeId8KMMM:lNhBka8VaRNh80dnaaTmbagaLc8S2fgAIdwa8WNaAIdza8XNaAIdaMgRaRMMa8WNaAIdla8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaYaa2gQcdtfhOa8RaLaa2g8AcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEh8Sdndna8MmbJbbbbhRxekagaYc8S2fgAIdwa8KaLcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8AcdtfhOa8RaQcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEhRka80a8SMh80aBaRMhBdndndna5aLfRbbc9:fPibeedkdna8Fa8Ea8EaCfydbaYSEaXaCfydbgQcdtfydbgCcu9hmbaXaYcdtfydbhCkagaQc8S2fgAIdwa8KaCcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaCaa2g8AcdtfhOa8RaQaa2g8JcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEh8Sdndna8MmbJbbbbhRxekagaCc8S2fgAIdwa8KaQcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8JcdtfhOa8Ra8AcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEhRka80a8SMh80aBaRMhBxdkaXaCfydbgCaLSmbaHaYcdtfydbh8Aindndna8EaCcdtgQfydbgecuSmbaHaecdtfydba8ASmekdna8FaQfydbgecuSmbaHaecdtfydba8ASmekaYhekagaCc8S2fgAIdwa8Kaecx2fgOIdwg8WNaAIdzaOIdbg8XNaAIdaMgRaRMMa8WNaAIdlaOIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Paeaa2cdtfhOa8RaCaa2cltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbka80aR:lgRa81aRa819DEaRa9qEMh80aXaQfydbgCaL9hmbkkdna5aYfRbbgeciSmbaecl9hmeka8MTmbaXaYcdtfydbgCaYSmbindndna8EaCcdtgQfydbgecuSmbaHaecdtfydba8JSmekdna8FaQfydbgecuSmbaHaecdtfydba8JSmekaLhekagaCc8S2fgAIdwa8Kaecx2fgOIdwg8WNaAIdzaOIdbg8XNaAIdaMgRaRMMa8WNaAIdlaOIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Paeaa2cdtfhOa8RaCaa2cltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaBaR:lgRa81aRa819DEaRa9qEMhBaXaQfydbgCaY9hmbkkahaBa80aBa809DgeEUdwahaLaYaea8Mcb9hGgeEBdlahaYaLaeEBdbaDcefgDa39hmbkascjdfcbcj;qbz:xjjjb8Aa9shea3hOinascjdfaeydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbcefBdbaecxfheaOcufgOmbkcbhecbhOinascjdfaefgAydbhCaAaOBdbaCaOfhOaeclfgecj;qb9hmbkcbhea9shOinascjdfaOydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbgAcefBdba9maAcdtfaeBdbaOcxfhOa3aecefge9hmbkadak9RgAci9Uh9udnalTmbcbhea9nhOinaOaeBdbaOclfhOalaecefge9hmbkkcbh9va9ocbalz:xjjjbh9caAcO9Uh9wa9uce4h9tcbh8Lcbh8Mdnina0a9ma8Mcdtfydbcx2fg8JIdwgRa879Emea8La9u9pmeJFFuuh8Vdna9ta39pmba0a9ma9tcdtfydbcx2fIdwJbb;aZNh8VkdnaRa8V9ETmbaRaU9ETmba8La9w0mdkdna9caHa8JydlgDcdtg9xfg8AydbgAfg9yRbba9caHa8Jydbghcdtg9zfydbgefg9ARbbVmba5ahfRbbh9BdndnaKaecdtfgOclfydbgCaOydbgOSmbaCaO9RhCa8KaAcx2fhLa8Kaecx2fhYaEaOcitfheindna9naeydbcdtfydbgOaASmba9naeclfydbcdtfydbgQaASmbaOaQSmba8KaQcx2fgQIdba8KaOcx2fgOIdbg8W:tgRaYIdlaOIdlg8X:tg80NaQIdla8X:tg8VaYIdba8W:tgBN:tg8YaRaLIdla8X:tg8SNa8VaLIdba8W:tg8UN:tg8XNa8VaYIdwaOIdwg81:tg8ZNaQIdwa81:tg8Wa80N:tg80a8VaLIdwa81:tg83Na8Wa8SN:tg8VNa8WaBNaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmikaecwfheaCcufgCmbkkdndna9Bc99fcFeGce0mba9na9zfaDBdbaXa9zfydbgeahSmeina8AydbhAdndna8EaecdtgOfydbgecuSmbaHaecdtfydbaASmekdna8FaOfydbgecuSmbaHaecdtfydbaASmekaDheka9naOfaeBdbaXaOfydbgeah9hmbxdkkdndna9BcFeGcdSmbaDhexekdna8Fa8Ea8Ea9zfydbaDSEaXa9zfydbghcdtfydbgecu9hmbaXa9xfydbheka9na9zfaDBdbka9nahcdtfaeBdbka9Ace86bba9yce86bba8JIdwgRaUaUaR9DEhUa9vcefh9vcecda9BcFeGceSEa8Lfh8Lxeka9tcefh9tka8Mcefg8Ma39hmbkka9vTmddnalTmbcbhLcbhhindna9nahcdtgefydbgAahSmbaHaAcdtfydbh8AdnahaHaefydb9hg8JmbaIa8Ac8S2fgeaIahc8S2fgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxaeaOIdzaeIdzMUdzaeaOIdCaeIdCMUdCaeaOIdKaeIdKMUdKaeaOId3aeId3MUd3aeaOIdaaeIdaMUdaaeaOId8KaeId8KMUd8KaeaOIdyaeIdyMUdya8NTmba8Na8Acltfgea8NahcltfgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxkaaTmbagaAc8S2fgeagahc8S2g8MfgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxaeaOIdzaeIdzMUdzaeaOIdCaeIdCMUdCaeaOIdKaeIdKMUdKaeaOId3aeId3MUd3aeaOIdaaeIdaMUdaaeaOId8KaeId8KMUd8KaeaOIdyaeIdyMUdya9raA2hYa8RhOaahCinaOaYfgeaOaLfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8JmbJbbbbJbbjZaIa8MfgeIdygR:vaRJbbbb9BEaeIdwa8Ka8Acx2fgOIdwgRNaeIdzaOIdbg8VNaeIdaMg8Wa8WMMaRNaeIdlaOIdlg8WNaeIdCaRNaeId3MgRaRMMa8WNaeIdba8VNaeIdxa8WNaeIdKMgRaRMMa8VNaeId8KMMM:lNgRa85a85aR9DEh85kaLa9rfhLahcefghal9hmbkcbhOa8EheindnaeydbgAcuSmbdnaOa9naAcdtgCfydbgA9hmbcuhAa8EaCfydbgCcuSmba9naCcdtfydbhAkaeaABdbkaeclfhealaOcefgO9hmbkcbhOa8FheindnaeydbgAcuSmbdnaOa9naAcdtgCfydbgA9hmbcuhAa8FaCfydbgCcuSmba9naCcdtfydbhAkaeaABdbkaeclfhealaOcefgO9hmbkka85aUaaEh85cbhOabhecbhAindnaHa9naeydbcdtfydbgLcdtfydbgCaHa9naeclfydbcdtfydbgYcdtfydbgQSmbaCaHa9naecwfydbcdtfydbg8AcdtfydbghSmbaQahSmbabaOcdtfgCaLBdbaCcwfa8ABdbaCclfaYBdbaOcifhOkaecxfheaAcifgAad6mbkdndnaSmbaOhdxekdnaOak0mbaOhdxekdna86a859FmbaOhdxekJFFuuh86cbhdabhecbhAindna9ia6aeydbgCcdtfydbcdtfIdbgRa859ETmbaeclf8Pdbh9CabadcdtfgQaCBdbaQclfa9C83dbaRa86a86aR9EEh86adcifhdkaecxfheaAcifgAaO6mbkkadak0mbxdkkascNefabadalaHz:cjjjbkdndnadak0mbadhYxekdnaSmbadhYxekdna86a879FmbadhYxekcehQina86Jbb;aZNgRa87aRa879DEh8WJbbbbhRdna9hTmba9ihea9hhOinaeIdbg8VaRa8Va8W9FEaRa8VaR9EEhRaeclfheaOcufgOmbkkJFFuuh86cbhYabhecbhOindna9ia6aeydbgAcdtfydbcdtfIdbg8Va8W9ETmbaeclf8Pdbh9CabaYcdtfgCaABdbaCclfa9C83dba8Va86a86a8V9EEh86aYcifhYkaecxfheaOcifgOad6mbkdnaQaYad9hVceGmbadhYxdkaRaUaUaR9DEhUaYak9nmecbhQaYhda86a879FmbkkdnamcjjjjdGTmba9ocbalz:xjjjbh8AdnaYTmbabheaYhOina8AaeydbgAfce86bba8AaHaAcdtfydbfce86bbaeclfheaOcufgOmbkkascNefabaYalaHz:cjjjbdndnalTmbcbhCindna8AaCfRbbTmbdna5aCfRbbPlbeebekdnaHaCcdtgLfydbgeaCSmba8KaCcx2fgOa8Kaecx2fgeydwBdwaOae8Pdb83dbxekaIaCc8S2fgQIdygnanJL:3;rUNgRMh87aQIdwgxaRMh8SaQIdlg9DaRMh8UaQIdbg9EaRMh81aQIdag9FaRa8KaCcx2fg8JIdwg88N:th8ZaQId3g9GaRa8JIdlg89N:th83aQIdKg9Ha8JIdbg8:aRN:th80JbbbbhZaQIdCg9IJbbbbMh85aQIdzg9JJbbbbMhBaQIdxg9KJbbbbMh86dndnaaTmbaChAinJbbbba87agaAc8S2fgOIdygR:vaRJbbbb9BEhRa8RaAaa2cltfheaOIdaa87Na8ZMh8ZaOId3a87Na83Mh83aOIdKa87Na80Mh80aOIdCa87Na85Mh85aOIdza87NaBMhBaOIdxa87Na86Mh86aOIdwa87Na8SMh8SaOIdla87Na8UMh8UaOIdba87Na81Mh81aahOina8ZaecwfIdbg8VaecxfIdbg8YNaRN:th8Za83aeclfIdbg8Wa8YNaRN:th83a85a8Wa8VNaRN:th85a81aeIdbg8Xa8XNaRN:th81a80a8Xa8YNaRN:th80aBa8Xa8VNaRN:thBa86a8Xa8WNaRN:th86a8Sa8Va8VNaRN:th8Sa8Ua8Wa8WNaRN:th8UaeczfheaOcufgOmbkaXaAcdtfydbgAaC9hmbka8NTmba8NaCcltfgeIdxhTaeIdwhcaeIdlhJaeIdbhRxekJbbbbhTJbbbbhcJbbbbhJJbbbbhRkaBa81:vg8Wa80Na8Z:ta85aBa86a81:vg8VN:tg8Za8Ua86a8VN:tg8Y:vg8Xa8Va80Na83:tg8UN:th83acaRa8WN:taJaRa8VN:tg86a8XN:tg85a8SaBa8WN:ta8Za8XN:tgB:vg8S:mh8Za86a8Y:vgc:mhJdnJbbbbaRaRa81:vg9eN:ta86acN:ta85a8SN:tg86:la87J:983:g81NgR9ETmba8Za83NaJa8UNa9ea80NaT:tMMa86:vhZka81:laR9ETmba8Y:laR9ETmbaB:laR9ETmba9e:maZNa8W:ma8ZaZNa83aB:vMgBNa8V:maJaZNa8X:maBNa8Ua8Y:vMMg85Na80:ma81:vMMMh87aKaLfgeclfydbgOaeydbge9RhhaEaecitfhLJbbbbhRdnaOaeSg8MmbJbbbbhRaLheahhAina8Kaeclfydbcx2fgOIdwa88:tg8Va8VNaOIdba8::tg8Va8VNaOIdla89:tg8Va8VNMMg8Va8Kaeydbcx2fgOIdwa88:tg8Wa8WNaOIdba8::tg8Wa8WNaOIdla89:tg8Wa8WNMMg8WaRaRa8W9DEgRaRa8V9DEhRaecwfheaAcufgAmbkaR:rgRaRNhRkaBa88:tg8Va8VNa87a8::tg8Va8VNa85a89:tg8Va8VNMMaR9EmbaQId8KhZdna8Mmbina8KaLclfydbcx2fgeIdba8KaLydbcx2fgOIdbg8W:tgRa89aOIdlg8X:tg80NaeIdla8X:tg8Va8:a8W:tg86N:tg8YaRa85a8X:tg8SNa8Va87a8W:tg8UN:tg8XNa8Va88aOIdwg81:tg8ZNaeIdwa81:tg8Wa80N:tg80a8VaBa81:tg83Na8Wa8SN:tg8VNa8Wa86NaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmdaLcwfhLahcufghmbkkJbbbbJbbjZan:vanJbbbb9BEgRaxaBNa9Ja87Na9FMg8Va8VMMaBNa9Da85Na9IaBNa9GMg8Va8VMMa85Na9Ea87Na9Ka85Na9HMg8Va8VMMa87NaZMMM:lNaRaxa88Na9Ja8:Na9FMg8Va8VMMa88Na9Da89Na9Ia88Na9GMg8Va8VMMa89Na9Ea8:Na9Ka89Na9HMg8Va8VMMa8:NaZMMM:lNJbb;aZNJ:983:g81M9Emba8JaBUdwa8Ja85Udla8Ja87UdbkaCcefgCal9hmbkdnaambcbhaxdkcbhQindna8AaQfRbbTmbaHaQcdtgefydbaQ9hmba5aQfhhaXaefh8Ja8KaQcx2fhAa8PaQaa2cdtfh8McbhEincuhCdnahRbbc99fcFeGce0mbaQhCa8JydbgeaQSmba8PaEcdtgOfhLa8MaOfIdbhRaQhCinaChOcuhCdnaLaeaa2cdtfIdbaR9CmbaOcuSmbaOhCagaec8S2fIdyagaOc8S2fIdy9ETmbaehCkaXaecdtfydbgeaQ9hmbkka8PaEcdtfhLa8RaEcltfhKaQheinaLaeaa2cdtfJbbbbJbbjZagaeaCaCcuSEgOc8S2fIdygR:vaRJbbbb9BEaKaOaa2cltfgOIdwaAIdwNaOIdbaAIdbNaOIdlaAIdlNMMaOIdxMNUdbaXaecdtfydbgeaQ9hmbkaEcefgEaa9hmbkkaQcefgQal9hmbxdkkaambcbhakaiavaoarawaaala8Ka8Pazasayasc1efa5a8Aaqz:hjjjbkdnamcjjjjlGTmbazmbaYTmbabhecbhLina5aeydbgAfRbbc3thQaecwfgXydbhHcjjjj94hCdna8EaAcdtgEfydbaeclfgKydbgOSmbcjjjj94cba8FaOcdtfydbaASEhCkaeaQaCVaAVBdba5aOfRbbc3thacjjjj94hCcjjjj94hQdna8EaOcdtfydbaHSmbcjjjj94cba8FaHcdtfydbaOSEhQkaKaaaQVaOVBdba5aHfRbbc3thOdna8EaHcdtfydbaASmbcjjjj94cba8FaEfydbaHSEhCkaXaOaCVaHVBdbaecxfheaLcifgLaY6mbkkdnazTmbaYTmbaYheinabazabydbcdtfydbBdbabclfhbaecufgembkkdnaPTmbaPa9paU:rNUdbkdnasyd;8egHTmbaHcdtasc:Ceffc98fheinaeydbcbyd;C:L:cjbH:bjjjbbaec98fheaHcufgHmbkkascj;sbf8KjjjjbaYk;Yieouabydlhvabydbclfcbaicdtz:xjjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfhearcufgrmbkkabydbcbBdbk:todDue99aicd4aifhrcehwinawgDcethwaDar6mbkcuaDcdtgraDcFFFFi0Ecbyd;y:L:cjbHjjjjbbhwaoaoyd9GgqcefBd9GaoaqcdtfawBdbawcFearz:xjjjbhkdnaiTmbalcd4hlaDcufhxcbhminamhDdnavTmbavamcdtfydbhDkcbadaDal2cdtfgDydlgwawcjjjj94SEgwcH4aw7c:F:b:DD2cbaDydbgwawcjjjj94SEgwcH4aw7c;D;O:B8J27cbaDydwgDaDcjjjj94SEgDcH4aD7c:3F;N8N27axGhwamcdthPdndndnavTmbakawcdtfgrydbgDcuSmeadavaPfydbal2cdtfgsIdbhzcehqinaqhrdnadavaDcdtfydbal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmlkarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbxdkkakawcdtfgrydbgDcuSmbadamal2cdtfgsIdbhzcehqinaqhrdnadaDal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmikarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbkkaramBdbamhDkabaPfaDBdbamcefgmai9hmbkkakcbyd;C:L:cjbH:bjjjbbaoaoyd9GcufBd9GdnaeTmbaiTmbcbhDaehwinawaDBdbawclfhwaiaDcefgD9hmbkcbhDaehwindnaDabydbgrSmbawaearcdtfgrydbBdbaraDBdbkabclfhbawclfhwaiaDcefgD9hmbkkk;:odvuv998Jjjjjbca9Rgocbyd1:G:cjbBdKaocb8Pdj:G:cjb83izaocbydN:G:cjbBdwaocb8Pd:m:G:cjb83ibdnadTmbaicd4hrdnabmbdnalTmbcbhwinaealawcdtfydbar2cdtfhDcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxikkarcdthwcbhDincbhiinaoczfaifgqaeaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaeawfheaDcefgDad9hmbxdkkdnalTmbcbhwinabawcx2fgiaealawcdtfydbar2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxdkkarcdthlcbhwaehDinabawcx2fgiaeawar2cdtfgqIdbUdbaiaqIdlUdlaiaqIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaDalfhDawcefgwad9hmbkkJbbbbaoIdbaoIdzgx:tgkakJbbbb9DEgkaoIdlaoIdCgm:tgPaPak9DEgkaoIdwaoIdKgP:tgsasak9DEhsdnabTmbadTmbJbbbbJbbjZas:vasJbbbb9BEhkinabakabIdbax:tNUdbabclfgoakaoIdbam:tNUdbabcwfgoakaoIdbaP:tNUdbabcxfhbadcufgdmbkkdnavTmbavaPUdwavamUdlavaxUdbkask:WlewudnaeTmbcbhvabhoinaoavBdbaoclfhoaeavcefgv9hmbkkdnaiTmbcbhrinadarcdtfhwcbhDinalawaDcdtgvyd:G:G:cjbcdtfydbcdtfydbhodnalawavfydbcdtfydbgqabaqcdtfgkydbgvSmbinakabavgqcdtfgxydbgvBdbaxhkaqav9hmbkkdnaoabaocdtfgkydbgvSmbinakabavgocdtfgxydbgvBdbaxhkaoav9hmbkkdnaqaoSmbabaqaoaqao0Ecdtfaqaoaqao6EBdbkaDcefgDci9hmbkarcifgrai6mbkkdnaembcbskcbhxindnalaxcdtgvfydbax9hmbaxhodnaxabavfgDydbgvSmbaDhqinaqabavgocdtfgkydbgvBdbakhqaoav9hmbkkaDaoBdbkaxcefgxae9hmbkcbhkabhvcbhoindndnaoalydbgq9hmbdnaoavydbgq9hmbavakBdbakcefhkxdkavabaqcdtfydbBdbxekavabaqcdtfydbBdbkalclfhlavclfhvaeaocefgo9hmbkakk;jiilud99euabcbaecltz:xjjjbhvdnalTmbadhoaihralhwinarcwfIdbhDarclfIdbhqavaoydbcltfgkarIdbakIdbMUdbakaqakIdlMUdlakaDakIdwMUdwakakIdxJbbjZMUdxaoclfhoarcxfhrawcufgwmbkkdnaeTmbavhkaehrinakcxfgoIdbhDaocbBdbakakIdbJbbbbJbbjZaD:vaDJbbbb9BEgDNUdbakclfgoaDaoIdbNUdbakcwfgoaDaoIdbNUdbakczfhkarcufgrmbkkdnalTmbinavadydbcltfgkaicwfIdbakIdw:tgDaDNaiIdbakIdb:tgDaDNaiclfIdbakIdl:tgDaDNMMgDakIdxgqaqaD9DEUdxadclfhdaicxfhialcufglmbkkdnaeTmbavcxfhkinabakIdbUdbakczfhkabclfhbaecufgembkkk:moerudnaoTmbaecd4hzdnavTmbaicd4hHavcdthOcbhAindnaPaAfRbbTmbaAhednaDTmbaDaAcdtfydbhekdnasTmbasaefRbbceGmekdnamaAfRbbcvSmbabaeaz2cdtfgiaraAcx2fgCIdbakNaxIdbMUdbaiaCIdlakNaxIdlMUdlaiaCIdwakNaxIdwMUdwkadaeaH2cdtfhXaqheawhiavhCinaXaeydbcdtgQfaiIdbalaQfIdb:vUdbaeclfheaiclfhiaCcufgCmbkkawaOfhwaAcefgAao9hmbxdkkdnasmbcbheaDhiindnaPaefRbbTmbaehCdnaDTmbaiydbhCkamaefRbbcvSmbabaCaz2cdtfgCarIdbakNaxIdbMUdbaCarclfIdbakNaxIdlMUdlaCarcwfIdbakNaxIdwMUdwkaiclfhiarcxfhraoaecefge9hmbxdkkdnaDTmbindnaPRbbTmbasaDydbgefRbbceGmbamRbbcvSmbabaeaz2cdtfgearIdbakNaxIdbMUdbaearclfIdbakNaxIdlMUdlaearcwfIdbakNaxIdwMUdwkaPcefhPaDclfhDamcefhmarcxfhraocufgombxdkkazcdthicbheindnaPaefRbbTmbasaefRbbceGmbamaefRbbcvSmbabarIdbakNaxIdbMUdbabclfarclfIdbakNaxIdlMUdbabcwfarcwfIdbakNaxIdwMUdbkarcxfhrabaifhbaoaecefge9hmbkkk8MbabaeadaialavcbcbcbcbcbaoarawaDz:bjjjbk8MbabaeadaialavaoarawaDaqakaxamaPz:bjjjbkRbababaeadaialavaoarawaDaqakaxcjjjjdVamz:bjjjbk:vgoque99due99duq998Jjjjjbc;Wb9Rgq8Kjjjjbcbhkaqcxfcbc;Kbz:xjjjb8Aaqcualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbgxBdxaqceBd2axaialavcbcbz:ejjjb8AaqcualcdtalcFFFFi0Egmcbyd;y:L:cjbHjjjjbbgiBdzaqcdBd2dndnJFF959eJbbjZawJbbjZawJbbjZ9DE:vawJ9VO:d869DEgw:lJbbb9p9DTmbaw:OhPxekcjjjj94hPkadci9Uhsarco9UhzdndnaombaPcd9imekdnalTmbaPcuf:YhwdnaoTmbcbhvaihHaxhOindndnaoavfRbbceGTmbavcjjjjlVhAxekdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHaOcxfhOalavcefgv9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkadTmbcbhkaehvcbhOinakaiavclfydbcdtfydbgHaiavcwfydbcdtfydbgA9haiavydbcdtfydbgXaH9haXaA9hGGfhkavcxfhvaOcifgOad6mbkkarci9UhQdndnaz:Z:rJbbbZMgw:lJbbb9p9DTmbaw:Ohvxekcjjjj94hvkaQ:ZhLcbhKc:bwhzdninakaQ9pmeazaP9Rcd9imeavazcufgOavaO9iEaPcefavaP9kEhYdnalTmbaYcuf:YhwdnaoTmbcbhOaihHaxhvindndnaoaOfRbbceGTmbaOcjjjjlVhAxekdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHavcxfhvalaOcefgO9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkcbhOdnadTmbaehvcbhHinaOaiavclfydbcdtfydbgAaiavcwfydbcdtfydbgX9haiavydbcdtfydbgraA9haraX9hGGfhOavcxfhvaHcifgHad6mbkkdnas:ZgCaL:taY:Ygwaz:Y:tg8ANak:ZgEaO:Zg3:tNaEaL:tawaP:Y:tg5Na3aC:tNMg8EJbbbb9BmbaCaE:ta5a8Aa3aL:tNNNa8E:vawMhwkdndnaOaQ0mbaOhkaYhPxekaOhsaYhzkdndnaKcl0mbdnawJbbbZMgw:lJbbb9p9DTmbaw:Ohvxdkcjjjj94hvxekaPazfcd9ThvkaKcefgKcs9hmbkkdndndnakmbJbbjZhwcbhOcdhvaDmexdkalcd4alfhHcehOinaOgvcethOavaH6mbkaqcuavcdtavcFFFFi0Ecbyd;y:L:cjbHjjjjbbgYBdCaqciBd2aqamcbyd;y:L:cjbHjjjjbbgzBdKaqclBd2dnalTmbaPcuf:YhwdnaoTmbcbhOaihAaxhHindndnaoaOfRbbceGTmbaOcjjjjlVhXxekdndnaHclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqthXdndnaHcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarVhXdndnaHIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarcCtVhXkaAaXBdbaAclfhAaHcxfhHalaOcefgO9hmbxdkkaxhOaihHalhAindndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcCthXdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkarcqtaXVhXdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaHaXarVBdbaOcxfhOaHclfhHaAcufgAmbkkaqcuaYavazaialz:mjjjbgXc8S2gvaXc;D;O;f8U0Ecbyd;y:L:cjbHjjjjbbgiBd3aqcvBd2aicbavz:xjjjbhOdnadTmbcbhraehiinaxaiclfydbgocx2fgvIdbaxaiydbgPcx2fgHIdbg3:tgCaxaicwfydbgYcx2fgAIdlaHIdlg8A:tgwNavIdla8A:tgEaAIdba3:tg8EN:tgLaLNaEaAIdwaHIdwg5:tg8FNavIdwa5:tgEawN:tgwawNaEa8ENaCa8FN:tgCaCNMMg8E:rhEJbbnnJbbjZazaPcdtfydbgvazaocdtfydbgASavazaYcdtfydbgoSGgHEh8Fdna8EJbbbb9ETmbaLaE:vhLaCaE:vhCawaE:vhwkaOavc8S2fgvavIdbawa8FaE:rNgEawNNg8FMUdbavaCaEaCNgaNghavIdlMUdlavaLaEaLNg8ENggavIdwMUdwavawaaNgaavIdxMUdxava8EawNg8JavIdzMUdzavaCa8ENg8EavIdCMUdCavawaEaLa5Nawa3Na8AaCNMM:mg8ANg3NgwavIdKMUdKavaCa3NgCavId3MUd3avaLa3NgLavIdaMUdaava3a8ANg3avId8KMUd8KavaEavIdyMUdydnaHmbaOaAc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdyaOaoc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdykaicxfhiarcifgrad6mbkkcbhAaqcuaXcdtgvaXcFFFFi0Egicbyd;y:L:cjbHjjjjbbgHBdaaqcoBd2aqaicbyd;y:L:cjbHjjjjbbgiBd8KaqcrBd2aHcFeavz:xjjjbhPdnalTmbazhHinJbbbbJbbjZaOaHydbgrc8S2fgvIdygw:vawJbbbb9BEavIdwaxcwfIdbgwNavIdzaxIdbgCNavIdaMgLaLMMawNavIdlaxclfIdbgLNavIdCawNavId3MgwawMMaLNavIdbaCNavIdxaLNavIdKMgwawMMaCNavId8KMMM:lNhwdndnaParcdtgvfgrydbcuSmbaiavfIdbaw9ETmekaraABdbaiavfawUdbkaHclfhHaxcxfhxalaAcefgA9hmbkkdndnaXmbJbbbbhwxekJbbbbhwinaiIdbgCawawaC9DEhwaiclfhiaXcufgXmbkaw:rhwkakcd4akfhOcehiinaigvcethiavaO6mbkcbhOaqcuavcdtgiavcFFFFi0Ecbyd;y:L:cjbHjjjjbbgHBdyaHcFeaiz:xjjjbhXdnadTmbavcufhrcbhkcbhxindnazaeaxcdtfgvydbcdtfydbgiazavclfydbcdtfydbgOSmbaiazavcwfydbcdtfydbgvSmbaOavSmbaPavcdtfydbhAdndnaPaOcdtfydbgvaPaicdtfydbgi9pmbavaA9pmbaAhlaihoavhAxekdnaAai9pmbaAav9pmbaihlavhoxekavhlaAhoaihAkabakcx2fgvaABdbavcwfaoBdbavclfalBdbdnaXaoc:3F;N8N2alc:F:b:DD27aAc;D;O:B8J27arGgOcdtfgvydbgicuSmbcehHinaHhvdnabaicx2fgiydbaA9hmbaiydlal9hmbaiydwaoSmikavcefhHaXaOavfarGgOcdtfgvydbgicu9hmbkkavakBdbakcefhkkaxcifgxad6mbkakci2hOkcwhvaDTmekaDawUdbkavcdthvaqcxfc98fhiinaiavfydbcbyd;C:L:cjbH:bjjjbbavc98fgvmbkaqc;Wbf8KjjjjbaOk:0iewuabcFeaecdtz:xjjjbhbdnalmbcbskaecufhvdndnaiTmbcbhocbhrindndndnabaiarcdtgwfydbgDcm4aD7c:v;t;h;Ev2gecs4ae7avGgqcdtfgkydbgxcuSmbceheinaiaxcdtgxfydbaDSmdaqaefhxaecefheabaxavGgqcdtfgkydbgxcu9hmbkkakarBdbaoheaocefhoxekadaxfydbhekadawfaeBdbarcefgral9hmbxdkkcbhocbhDindnabaDcm4aD7c:v;t;h;Ev2gecs4ae7avGgqcdtfgkydbgxcuSmbaxaDSmbceheinabaqaefavGgqcdtfgkydbgxcuSmeaecefheaxaD9hmbkkdndnaxcu9hmbakaDBdbaoheaocefhoxekadaxcdtfydbhekadaDcdtfaeBdbaDcefgDal9hmbkkaok:3ldrue9:8Jjjjjbc;Wb9Rgr8Kjjjjbcbhwarcxfcbc;Kbz:xjjjb8AdnabaeSmbabaeadcdtz:wjjjb8AkarcualcdtalcFFFFi0EgDcbyd;y:L:cjbHjjjjbbgqBdxarceBd2aqcbaialavcbarcxfz:djjjbcualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbhkarcxfaryd2gxcdtfakBdbaraxcefgmBd2akaialavcbcbz:ejjjb8AarcxfamcdtfaDcbyd;y:L:cjbHjjjjbbgiBdbaraxcdfgvBd2arcxfavcdtfcuaialaeadaqz:fjjjbgecltaecjjjjiGEcbyd;y:L:cjbHjjjjbbgqBdbaqaeaiakalz:gjjjbaxcifhkdnadTmbaoaoNhocbhwabhlcbheindnaqaialydbgvcdtfydbcdtfIdbao9ETmbalclf8PdbhPabawcdtfgDavBdbaDclfaP83dbawcifhwkalcxfhlaecifgead6mbkkdnakTmbaxcdtarcxffcwfhlinalydbcbyd;C:L:cjbH:bjjjbbalc98fhlakcufgkmbkkarc;Wbf8Kjjjjbawk;lOoDud99oue99vuv998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcxfcbc;Kbz:xjjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbgqBdxawceBd2aqaeadaicbcbz:ejjjb8AawcuadcdtadcFFFFi0Egkcbyd;y:L:cjbHjjjjbbgxBdzawcdBd2adcd4adfhecehiinaigmcethiamae6mbkcbhPawcuamcdtgsamcFFFFi0Ecbyd;y:L:cjbHjjjjbbgzBdCawciBd2dndnar:ZgH:rJbbbZMgO:lJbbb9p9DTmbaO:Ohixekcjjjj94hikamcufhAc:bwhCcbhXadhQcbhLinaiaCcufgeaiae9iEaPcefaiaP9kEhDdndnadTmbaDcuf:YhOaqhiaxheadhKindndnaiIdbaONJbbbZMgY:lJbbb9p9DTmbaY:Oh8Axekcjjjj94h8Aka8AcCth8AdndnaiclfIdbaONJbbbZMgY:lJbbb9p9DTmbaY:OhExekcjjjj94hEkaEcqta8AVh8AdndnaicwfIdbaONJbbbZMgY:lJbbb9p9DTmbaY:OhExekcjjjj94hEkaea8AaEVBdbaicxfhiaeclfheaKcufgKmbkazcFeasz:xjjjbh3cbh5cbh8Eindna3axa8Ecdtfydbg8Acm4a8A7c:v;t;h;Ev2gics4ai7aAGgKcdtfgEydbgecuSmbaea8ASmbcehiina3aKaifaAGgKcdtfgEydbgecuSmeaicefhiaea8A9hmbkkaEa8ABdba5aecuSfh5a8Ecefg8Ead9hmbxdkkazcFeasz:xjjjb8Acbh5kdnaQ:ZgYaH:taD:YgOaC:Y:tg8FNaX:Zgaa5:Zgh:tNaaaH:taOaP:Y:tggNahaY:tNMg8JJbbbb9BmbaYaa:taga8FahaH:tNNNa8J:vaOMhOkaPaDa5ar0geEhPaXa5aeEhXdna5arSmbaDaCaeEgCaP9Rcd9imbdndnaLcl0mbdnaOJbbbZMgO:lJbbb9p9DTmbaO:Ohixdkcjjjj94hixekaPaCfcd9Thika5aQaeEhQaLcefgLcs9hmekkdndnaXmbcihicbhDxekawakcbyd;y:L:cjbHjjjjbbg8ABdKawclBd2aPcuf:YhYdnadTmbaqhiaxheadhKindndnaiIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaEcCthEdndnaiclfIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:Oh3xekcjjjj94h3ka3cqtaEVhEdndnaicwfIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:Oh3xekcjjjj94h3kaeaEa3VBdbaicxfhiaeclfheaKcufgKmbkkawcuazama8Aaxadz:mjjjbgDc32giaDc;j:KM;jb0Ecbyd;y:L:cjbHjjjjbbgeBd3awcvBd2aecbaiz:xjjjbh3avcd4hxdnadTmbdnalTmbaxcdth8Ea8AhEaqhealhKadhAina3aEydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaKIdbaiIdxMUdxaiaKclfIdbaiIdzMUdzaiaKcwfIdbaiIdCMUdCaiaiIdKJbbjZMUdKaEclfhEaecxfheaKa8EfhKaAcufgAmbxdkka8AhKaqheadhEina3aKydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaiIdxJbbbbMUdxaiaiIdzJbbbbMUdzaiaiIdCJbbbbMUdCaiaiIdKJbbjZMUdKaKclfhKaecxfheaEcufgEmbkkdnaDTmba3hiaDheinaiaiIdbJbbbbJbbjZaicKfIdbgO:vaOJbbbb9BEgONUdbaiclfgKaOaKIdbNUdbaicwfgKaOaKIdbNUdbaicxfgKaOaKIdbNUdbaiczfgKaOaKIdbNUdbaicCfgKaOaKIdbNUdbaic3fhiaecufgembkkcbhEawcuaDcdtgCaDcFFFFi0Egicbyd;y:L:cjbHjjjjbbgeBdaawcoBd2awaicbyd;y:L:cjbHjjjjbbg8EBd8KaecFeaCz:xjjjbh5dnadTmbaoJbbjZJbbjZaY:vaPceSENgOaONhYaxcdthxalheinaYaecN:H:cjbalEgKIdwa3a8AydbgAc32fgiIdC:tgOaONaKIdbaiIdx:tgOaONaKIdlaiIdz:tgOaONMMNaqcwfIdbaiIdw:tgOaONaqIdbaiIdb:tgOaONaqclfIdbaiIdl:tgOaONMMMhOdndna5aAcdtgifgKydbcuSmba8EaifIdbaO9ETmekaKaEBdba8EaifaOUdbka8Aclfh8AaqcxfhqaeaxfheadaEcefgE9hmbkkaba5aCz:wjjjb8Acrhikaicdthiawcxfc98fheinaeaifydbcbyd;C:L:cjbH:bjjjbbaic98fgimbkkawc;Wbf8KjjjjbaDk:Pdidui99ducbhi8Jjjjjbca9Rglcbyd1:G:cjbBdKalcb8Pdj:G:cjb83izalcbydN:G:cjbBdwalcb8Pd:m:G:cjb83ibdndnaembJbbjFhvJbbjFhoJbbjFhrxekadcd4cdthwincbhdinalczfadfgDabadfIdbgvaDIdbgoaoav9EEUdbaladfgDavaDIdbgoaoav9DEUdbadclfgdcx9hmbkabawfhbaicefgiae9hmbkalIdwalIdK:thralIdlalIdC:thoalIdbalIdz:thvkJbbbbavavJbbbb9DEgvaoaoav9DEgvararav9DEk:H8Modui99lud99Aus998Jjjjjbcji9RgD8KjjjjbcbhqaDcxfcbc;Kbz:xjjjb8AaDcbBdwaD9cb83ibaDcbyd;i:L:cjbBd1eaDcb8Pd;a:L:cjb83ijeaDcbyd;u:L:cjbBd94aDcb8Pd;m:L:cjb83i9WdndnavmbJbbjFhkJbbjFhxJbbjFhmxekaocd4cdthPalhsincbhzinaDcjefazfgHasazfIdbgkaHIdbgxaxak9EEUdbaDc;WbfazfgHakaHIdbgxaxak9DEUdbazclfgzcx9hmbkasaPfhsaqcefgqav9hmbkaDId94aDId1e:thmaDIdtaDId:ee:thxaDId9WaDIdje:thkkJbbbbhOdnar:YgAJq;x8J88MaA:vJbbbbakakJbbbb9DEgkaxaxak9DEgkamamak9DENgxJbbbb9Bmbarc9:f:Yax:vhOkaDcCfhCaDcxfcxfhXcbhzinaDazfaDcjefazfIdbgkaxaDc;WbfazfIdbak:t:tJbbb:;NMUdbazclfgzcx9hmbkcbhQaDarar2gLar2gzcbyd;y:L:cjbHjjjjbbgHBdxaDceBd2aHcbazz:xjjjbgKcbcbadaialaoaraOaDawz:rjjjbcdhYaDcuaLcdtaLcFFFFi0Eg8Acbyd;y:L:cjbHjjjjbbgEBdzaDcdBd2aDcjefcbarz:xjjjb8Acbh3dnaLTmbdnarcb9kmbaKhzaEhHaLhsincbh3aHcbcuazaDcjefarz:AjjjbEBdbazarfhzaHclfhHascufgsmbxdkkaKhPcbh3cbhvindndnaKavar2faDcjefarz:AjjjbTmbcbhHaPhzarhsinazaHazRbbgqfgHcbaqE86bbazcefhzascufgsmbkaEavcdtfa3BdbaHa3fh3xekaEavcdtfcuBdbkaParfhPavcefgvaL9hmbkkdnabTmbaDcua3cotgza3cFFF8F0Ecbyd;y:L:cjbHjjjjbbgQBdCcihYaDciBd2aQcbazz:xjjjb8AaXhCkdnawceGmbaCa8Acbyd;y:L:cjbHjjjjbbg5BdbaDaYcefgzBd2aDcxfazcdtfaLcbyd;y:L:cjbHjjjjbbgzBdbaDaYcdfgYBd2azcbaLz:xjjjbh8EarcufhXdnarci9imbarc9:fhCararcef2aKfcefh8Aceh8Fina8Far2hPa8AhvcehqindnaEaqaPfcdtfydbcuSmbavhzaChHinazazRbbgscuasE86bbazcefhzaHcufgHmbkkavarfhvaqcefgqaX9hmbka8AaLfh8Aa8Fcefg8FaX9hmbkkarce9imbcbh8Acbhqcbhvina8EaqfhscbhzindnasazfgHRbbmbaHce86bba5a8AcdtfaqazfBdba8Acefh8Akarazcefgz9hmbkaqarfhqavcefgvar9hmbka8ATmbaKcefhaaKc9:fhharc9:fhgarci9ih8Jina8Ea5a8Acufg8Acdtfydbgvfcb86bbavar2hPdna8JmbaEavcdtfydbcuSmbaKaPfhHaghqindnaHcefgzRbbgscFe9hmbaHRbbmbcbhskazas86bbazhHaqcufgqmbkaharavcef2fhzaXhsindnazRbbgHcFe9hmbazcefRbbmbcbhHkazaH86bbazcufhzascufgsce9kmbkkaaaPfh8Kavavar9Ug8Lar29Rh8FcbhCindnaCceScuaCEa8Ffgzce9imbazaX9ombcuaCciSaCcdSEa8LfgHce9imbaHaX9ombaEaHar2azfg8McdtfydbcuSmba8Jmbaaa8Mar2fhzcbhqa8KhsaghvinazazRbbgHcbaHaHcFeSEasRbbEgP86bbascefhsazcefhzaPaH7aqVhqavcufgvmbkaqcFeGTmba8Ea8MfgzRbbmbazce86bba5a8Acdtfa8MBdba8Acefh8AkaCcefgCcl9hmbka8AmbkkdnaQTmbaKaEaQadaialaoaraOaDawz:rjjjba3TmbJbbjZaO:vhkawcjjjjlGhPdnawcdGTmbJbbnnaOaON:vh8NakJbbbZNhyaQhzinazczfgsIdbg8PazcCfIdbgx:vhmazcxfgqIdbgIax:vhAazcwfgvIdbg8Rax:vh8SakazydbgHcFrG:ZNhRakaHcq4cFrG:ZNh8UakaHcC4cFrG:ZNh8VdnaxJ:p;c;188Ng8WazcKfIdbMg8X:laxJ:983:g81Ngx9ETmba8Wazc3fIdbMazc8KfIdbg8Ya8Ya8X:vg8YN:tg8Z:lax9ETmba8WazcafIdbMazcyfIdbg8Wa8Wa8X:vg80N:tazc8SfIdba8Wa8YN:tg8Wa8Wa8Z:vg8WN:tg81:lax9ETmba8PJ:p;c;188NazcUfIdb:ta80a8RJ:p;c;188Nazc8WfIdb:tg8PN:ta8WaIJ:p;c;188Nazc80fIdb:ta8Ya8PN:tgIN:ta81:vgxam:tg8Ra8RNa8Pa8X:va8YaIa8Z:va8WaxN:tg8XN:ta80axN:tg8Wa8S:tg8Ya8YNa8XaA:tg8Ya8YNMMa8N9DTmbaxaRaxaR9EEgxakaRMgmaxam9DEhma8Xa8Ua8Xa8U9EEgxaka8UMgAaxaA9DEhAa8Wa8Va8Wa8V9EEgxaka8VMg8Saxa8S9DEh8SkdnaPTmbayaRMhmaya8UMhAaya8VMh8SkasamUdbaqaAUdbava8SUdbazc;abfhza3cufg3mbxdkkdnaPTmbakJbbbZNhxaQhzinazczfaxakazydbgHcFrG:ZNMUdbazcxfaxakaHcq4cFrG:ZNMUdbazcwfaxakaHcC4cFrG:ZNMUdbazc;abfhza3cufg3mbxdkkaQcCfhzinazc98fgHaHIdbazIdbgk:vUdbazc94fgHaHIdbak:vUdbazctfgHaHIdbak:vUdbazc;abfhza3cufg3mbkkcbhsdndnarcd9imbarcufh3aEarcdtfhadnabmbaKcefg8Mararcefgz2fh8JaKazfhba8MaLfh8Ecbhscbh8Kina8Kar2h8La8Mheabh8Aa8Eh8Fa8Jh5cbhXindnaEaXa8LfgqcdtgzfgHclfydbaHydbGaaazfgzydbGazclfydbGcuSmbclcbaKaqar2fgzarfRbbEazRbbcb9hVczcbazaLfgzRbbEVc;abcbazarfRbbEVhPaehza8AhHa8Fhqa5hva3hQindnaPclcbaHRbbEazRbbcb9hVczcbaqRbbEVc;abcbavRbbEVgPcetVgCTmbaCcFeSmbasaCRb;W;p:cjbfhskazcefhzaHcefhHaqcefhqavcefhvaQcufgQmbkkaearfhea8Aarfh8Aa8Farfh8Fa5arfh5aXcefgXa39hmbka8MaLfh8MabaLfhba8EaLfh8Ea8JaLfh8Ja8Kcefg8Ka39hmbxdkkJbbjZaO:vgkakJk;x8J88NNh8RawcdGh8EaDIdwhkaDIdlhxaDIdbhmcbhscbhPinaPar2h8KcbhvindnaEava8KfgqcdtgzfgHclfydbaHydbGaaazfgzydbGazclfydbGcuSmbcbh8AclcbaKaqar2fgYarfRbbEaYRbbcb9hVczcbaYaLfg8JRbbEVc;abcba8JarfRbbEVh8Lindna8LclcbaYa8Ag8Mcefg8AfgzarfRbbEazRbbcb9hVczcba8Ja8AfgzRbbEVc;abcbazarfRbbEVg8LcetVgCTmbaCcFeSmbcbhqdndndnaCRb;W;n:cjbcufPdebdka8ETmeaCcC2gz8Ve;W:L:cjbcltaz8Ve;Y:L:cjbcsGVh8FaKa8Mfh5cxhzaDcjefhHinaHaQaEa8Faz4gqce4ceGavfaqcd4ceGaPfar2fgXcdtfydbcotfa5aqceGfaXar2fRbbcotfcnfBdbaHclfhHazc98fgzc989hmbkaDydjegzIdyaDyd:megHIdyMaDyd:eegqIdyaDyd1egXIdyMMg8XaqIdwaXIdwMJbbbZNgANazIdUaHIdUMaqIdUaXIdUMMg8WMg8Sa8SMazIdaaHIdaMaqIdaaXIdaMMg8YaqIdzaXIdzMJbbbZNg8SNMa8SNazId8SaHId8SMaqId8SaXId8SMMgRa8SNazId80aHId80MaqId80aXId80MMg8UMg8Sa8SMazId3aHId3MaqId3aXId3MMg8VaqIdxaXIdxMJbbbZNg8SNMa8SNazId8KaHId8KMaqId8KaXId8KMMg8Za8SNazId8WaHId8WMaqId8WaXId8WMMg80Mg8Sa8SMazIdKaHIdKMaqIdKaXIdKMMgyaANMaANazId88aHId88MaqId88aXId88MMg8PMMM:lgIa8RazIdCaHIdCMaqIdCaXIdCMMN9Ea8XazIdwaHIdwMJbbbZNgANa8WMg8Sa8SMa8YazIdzaHIdzMJbbbZNg8SNMa8SNaRa8SNa8UMg8Sa8SMa8VazIdxaHIdxMJbbbZNg8SNMa8SNa8Za8SNa80Mg8Sa8SMayaANMaANa8PMMM:laIJ;d;1UZN9DGhqxekaKa8Mfh8FcbhzcrhHindnaCaz4ceGTmba8FazceGfazce4ceGavfazcd4aPfar2fgqar2fRbbgXcFeSmbaQaEaqcdtfydbcotfaXcotfc9efRbbaH4ceGTmbcbhqxdkaHcufhHcehqazcefgzcw9hmbkkaCcC2aqcq2fgH8Ve;W:L:cjbgzTmbaHc;Y:L:cjbfhqaKa8MfhCabasc8K2fhHindnasae9pmbaHaQaEazcD4ceGavfazcq4ceGaPfar2fgXcdtfydbcotfaCazcw4ceGfaXar2fRbbcotfgXc9ifIdbamMUdbaHclfaXc9mfIdbaxMUdbaHcwfaXc9qfIdbakMUdbaHcxfamaQaEazcv4ceGavfazco4ceGaPfar2fgXcdtfydbcotfaCazcl4ceGfaXar2fRbbcotfgXc9ifIdbMUdbaHczfaxaXc9mfIdbMUdbaHcCfakaXc9qfIdbMUdbaHcKfamaQaEazce4ceGavfazcd4ceGaPfar2fgXcdtfydbcotfaCazceGfaXar2fRbbcotfgzc9ifIdbMUdbaHc3faxazc9mfIdbMUdbaHcafakazc9qfIdbMUdbkaHc8KfhHascefhsaq8Vebhzaqcdfhqazmbkka8Aa39hmbkkavcefgva39hmbkaPcefgPa39hmbkaDyd2gYTmekaYcdtaDcxffc98fhzinazydbcbyd;C:L:cjbH:bjjjbbazc98fhzaYcufgYmbkkaDcjif8Kjjjjbask;Kxmiue99due99euz99eui99eud99dud99oudnalTmbaocd4hkaqcdGhxarc99fhqarcethmawawMhPcbhsindndnawavaiascdtfgoclfydbak2cdtfgzIdwgHavaoydbak2cdtfgOIdwgA:tgCaCNazIdbgXaOIdbgQ:tgLaLNazIdlgKaOIdlgY:tg8Aa8ANMMgEavaocwfydbak2cdtfgoIdwg3aA:tg5a5NaoIdbg8EaQ:tg8Fa8FNaoIdlgaaY:tghahNMMggaEag9EEgEa3aH:tgHaHNa8EaX:tgHaHNaaaK:tgHaHNMMgHaEaH9EE:rNgHaHMgH:lJbbb9p9DTmbaH:Ohoxekcjjjj94hokdnaLahNa8Aa8FN:tgHaHNa8Aa5NaCahN:tgXaXNaCa8FNaLa5N:tgKaKNMMg3Jbbbb9BmbJbbjZhEdnaoceaoce9kEgoamaoam9iEg8Jcd9imbJbbjZa8J:Z:vhEkarcb9imbaAaDIdw:th8KaYaDIdl:th8LaQaDIdb:th8Ma8Jcba8Jcb9kEh8NdnadTmbaHJbbjZa3:rgA:vgQNg3aAa8Jcefa8Jcdf2:Y:vgANh8EaKaQNgKaANhyaXaQNgXaXaANNh8PcbhIina8Jcba8Jcb9kEcefh8RaEaI:ZNgQaCNa8KMhgaQa8ANa8LMh8SaQaLNa8MMhRcbhzindndnaPaEaz:ZNgQahNa8SMgYNgH:lJbbb9p9DTmbaH:OhOxekcjjjj94hOkaOce91goaqaoaq6Eh8UdndnaPaQa5NagMgHNga:lJbbb9p9DTmbaa:Oh8Vxekcjjjj94h8Vka8Ua8Vce91goaqaoaq6Eg8Wcefar2fcefgoar2h8XdndnaPaQa8FNaRMgQNga:lJbbb9p9DTmbaa:Oh8Yxekcjjjj94h8Ykadaeaocdtfydbcotfaba8Yce91goaqaoaq6Eg8Zfa8XfcefRbbcotfgocnfa8Ucqta8ZcCtVa8WVBdbaoc9efg8Ua8URbbcea8YceGaOcetcdGVa8VcdtclGVtV86bbaoc9ifgOaQaANaOIdbMUdbaoc9mfgOaYaANaOIdbMUdbaoc9qfgOaHaANaOIdbMUdbaoc9ufgOaAaOIdbMUdbdnaxTmbaoc9yfgOa8PaOIdbMUdbaoc9CfgOaKayNaOIdbMUdbaoc9GfgOa3a8ENaOIdbMUdbaoc9KfgOaXayNaOIdbMUdbaoc9OfgOaXa8ENaOIdbMUdbaoc2fgOaKa8ENaOIdbMUdbaoc9WfgOaXaAa3aHNaXaQNaKaYNMMgY:mNgQNaOIdbMUdbaoctfgOaKaQNaOIdbMUdbaoc94fgOa3aQNaOIdbMUdbaoc98fgoaoIdbaYaQN:tUdbka8Razcefgz9hmbka8Jcufh8JaIa8NShoaIcefhIaoTmbxdkkcbh8Vina8Jcba8Jcb9kEcefh8UaEa8V:ZNgAaCNa8KMhYaAa8ANa8LMhHaAaLNa8MMhXcbhoindndnaPaEao:ZNgAahNaHMNgQ:lJbbb9p9DTmbaQ:Ohzxekcjjjj94hzkazce91gzaqazaq6EhzdndnaPaAa5NaYMNgQ:lJbbb9p9DTmbaQ:OhOxekcjjjj94hOkazaOce91gOaqaOaq6Ecefar2fcefar2hzdndnaPaAa8FNaXMNgA:lJbbb9p9DTmbaA:OhOxekcjjjj94hOkabaOce91gOaqaOaq6Efazfcefce86bba8Uaocefgo9hmbka8Jcufh8Ja8Va8NShoa8Vcefh8VaoTmbkkascifgsal6mbkkk:Nvezu8Jjjjjbcjd9Rgb8Kjjjjbcbheabcbcjdz:xjjjbhdc:W:H:cjbhbinabRbbgicC2glabcqf8Veb87e;4:L:cjbalabcdfgv8Peb83e;W:L:cjbaiabcefRbb86b;W;n:cjbadaifce86bbalavabcxfceaetc:F:d;avGEgi8Peb83e;6:L:cjbalai8Vew87e:c:M:cjbabcQfhbaecefgecK9hmbkcbhoinc;Y:L:cjbhrcbhvindnadavfgwRbbce9hmbavcC2c;W:L:cjbfhDcbhbcehqavc;W;n:cjbfhkinabcitc:G:H:cjbfhlcbhbcbheinaeavab4ceGalabfRbbtVheabcefgbcw9hmbkdnadaecFeGgxfgmRbbmbaxcC2c;W:L:cjbfhPcbhbcehsindnaDabcq2gif8VebgbTmbaraifheaPaifhiinaialabcl4csGfRbbcltalabcw4csGfRbbcwtValabcsGfRbbV87ebaicdfhiae8VebhbaecdfheabmbkkcehbasceGhecbhsaembkamce86bbaxakRbb86b;W;n:cjbkcehbaqceGhlcbhqalmbkawcd86bbkarcCfhravcefgvcjd9hmbkaocefgoci9hmbkcbhic;W:L:cjbhvincuhlavhbinalcefhlab8Vebheabcdfhbaembkaial86b;W;p:cjbavcCfhvaicefgicjd9hmbkadcjdf8Kjjjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk;Bidqui998Jjjjjbc;Wb9Rgl8Kjjjjbalcxfcbc;Kbz:xjjjb8Aadcd4adfhvcehoinaogrcethoarav6mbkalcuarcdtgoarcFFFFi0Ecbyd;y:L:cjbHjjjjbbgvBdxavcFeaoz:xjjjbhwdnadTmbaicd4hDarcufhqcbhkindndnawcbaeakaD2cdtfgrydlgiaicjjjj94SEgocH4ao7c:F:b:DD2cbarydbgxaxcjjjj94SEgocH4ao7c;D;O:B8J27cbarydwgmamcjjjj94SEgrcH4ar7c:3F;N8N27aqGgvcdtfgrydbgocuSmbam::hPai::hsax::hzcehiinaihrdnaeaoaD2cdtfgiIdbaz9CmbaiIdlas9CmbaiIdwaP9BmikarcefhiawavarfaqGgvcdtfgrydbgocu9hmbkkarakBdbakhokabakcdtfaoBdbakcefgkad9hmbkkalydxcbyd;C:L:cjbH:bjjjbbalc;Wbf8Kjjjjbk9teiucbcbyd;G:L:cjbgeabcifc98GfgbBd;G:L:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;G:L:cjbgeabcrfc94GfgbBd;G:L:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;G:L:cjbge9Rcifc98GaefgbBd;G:L:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk6eiucbhidnadTmbdninabRbbglaeRbbgv9hmeaecefheabcefhbadcufgdmbxdkkalav9Rhikaikk;0vdbcj:Gdk;yvFFuuFFuuFFuuFFuFFFuFFFuFbbbbbbbbebbbdbbbbbbbebbbebbbdbbbbbbbbbbbeeeeeebebbeebbebbebbbeeebbbbebbbbbbbbbbbbbbbbbbbeeeeeeebebbbeeebbeebbbbbebbbbbebebbbbbbbbbbbbbbbdiorbelvlbodveribbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbibbbbbbbbbbbbbbbbbbbbbobbbbbbbbbbbbbbbbbbbbbrbaebbbbbbbbbbbbbbbbbbsd8We8YbbbbbbbhiaebbbbbbQe8Ke9cebbbbbbbbbbbbbbbbLb8KebbbbbbbbbbbbbbbbbbKbbbbbbbbbbbbbbbbbbbbbYeJbilbbbbbbbbbbbbbbbbEe80e8WlbbbbbbzlAbbbbbbb5eJdnibbbbbbai8Kbbbbbbb8Ee9ce8Ylcibbbb8Yebbbbbbbb8FdOlAdbbbbbb80e8Ylbbbbbb88eTi8KiJv8Jlbbbbbbbbbbbb89e9td8Kv9qibbbbndlvaibbbbZd8Li8KvbbbbbbJdTibbbbbb9Pe81b9GvoiBvbbbbbbbbbbbb9Re9JbvoWibbbbvibbbbbbbb9VeWi9Gvbbbbbb8WvBbbbbbbb9:b9ceBvbbbbbbbbbbbbbbbbubWibbbbbbbbbbbbbbbbbb;Wd9hvSrbbbbbbWl9NvbbbbbbFbbbbbbbbbbbbbbbbbbbbbFFuuFFuuFFuuFFuFFFuFFFuFbc;y:Ldkxebbbdbbb;W:Obb",c=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var b,f=WebAssembly.instantiate(e(d),{}).then(function(t){b=t.instance,b.exports.__wasm_call_ctors()});function e(t){for(var m=new Uint8Array(t.length),l=0;l<t.length;++l){var j=t.charCodeAt(l);m[l]=j>96?j-97:j>64?j-39:j+4}for(var k=0,l=0;l<t.length;++l)m[k++]=m[l]<60?c[m[l]]:(m[l]-60)*64+m[++l];return m.buffer.slice(0,k)}function a(t){if(!t)throw new Error("Assertion failed")}function h(t){return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}function n(t,m,l,j){var k=b.exports.sbrk,o=k(l*4),x=k(l*j*4),O=new Uint8Array(b.exports.memory.buffer);O.set(h(m),x),t(o,x,l,j*4),O=new Uint8Array(b.exports.memory.buffer);var z=new Uint32Array(l);return new Uint8Array(z.buffer).set(O.subarray(o,o+l*4)),k(o-k(0)),z}function g(t,m,l){var j=b.exports.sbrk,k=j(m.length*4),o=j(l*4),x=new Uint8Array(b.exports.memory.buffer),O=h(m);x.set(O,k);var z=t(o,k,m.length,l);x=new Uint8Array(b.exports.memory.buffer);var N=new Uint32Array(l);new Uint8Array(N.buffer).set(x.subarray(o,o+l*4)),j(k-j(0));for(var u=0;u<m.length;++u)m[u]=N[m[u]];return[N,z]}function r(t){for(var m=0,l=0;l<t.length;++l){var j=t[l];m=m<j?j:m}return m}function M(t,m,l,j,k,o,x,O,z){var N=b.exports.sbrk,u=N(4),B=N(l*4),H=N(k*o),U=N(l*4),E=new Uint8Array(b.exports.memory.buffer);E.set(h(j),H),E.set(h(m),U);var T=t(B,U,l,H,k,o,x,O,z,u);E=new Uint8Array(b.exports.memory.buffer);var G=new Uint32Array(T);h(G).set(E.subarray(B,B+T*4));var _=new Float32Array(1);return h(_).set(E.subarray(u,u+4)),N(u-N(0)),[G,_[0]]}function i(t,m,l,j,k,o,x,O,z,N,u,B,H){var U=b.exports.sbrk,E=U(4),T=U(l*4),G=U(k*o),_=U(k*O),X=U(z.length*4),Oa=U(l*4),ba=N?U(k):0,ta=new Uint8Array(b.exports.memory.buffer);ta.set(h(j),G),ta.set(h(x),_),ta.set(h(z),X),ta.set(h(m),Oa),N&&ta.set(h(N),ba);var ha=t(T,Oa,l,G,k,o,_,O,X,z.length,ba,u,B,H,E);ta=new Uint8Array(b.exports.memory.buffer);var s=new Uint32Array(ha);h(s).set(ta.subarray(T,T+ha*4));var C=new Float32Array(1);return h(C).set(ta.subarray(E,E+4)),U(E-U(0)),[s,C[0]]}function y(t,m,l,j,k,o,x,O,z,N,u,B,H){var U=b.exports.sbrk,E=U(4),T=U(k*o),G=U(k*O),_=U(z.length*4),X=U(l*4),Oa=N?U(k):0,ba=new Uint8Array(b.exports.memory.buffer);ba.set(h(j),T),ba.set(h(x),G),ba.set(h(z),_),ba.set(h(m),X),N&&ba.set(h(N),Oa);var ta=t(X,l,T,k,o,G,O,_,z.length,Oa,u,B,H,E);ba=new Uint8Array(b.exports.memory.buffer),h(m).set(ba.subarray(X,X+ta*4)),h(j).set(ba.subarray(T,T+k*o)),h(x).set(ba.subarray(G,G+k*O));var ha=new Float32Array(1);return h(ha).set(ba.subarray(E,E+4)),U(E-U(0)),[ta,ha[0]]}function I(t,m,l,j){var k=b.exports.sbrk,o=k(l*j),x=new Uint8Array(b.exports.memory.buffer);x.set(h(m),o);var O=t(o,l,j);return k(o-k(0)),O}function A(t,m,l,j,k,o,x,O){var z=b.exports.sbrk,N=z(O*4),u=z(l*j),B=k?z(l*o):0,H=new Uint8Array(b.exports.memory.buffer);H.set(h(m),u),k&&H.set(h(k),B);var U=t(N,u,l,j,B,o,x,O);H=new Uint8Array(b.exports.memory.buffer);var E=new Uint32Array(U);return h(E).set(H.subarray(N,N+U*4)),z(N-z(0)),E}function w(t,m,l,j,k,o,x,O,z){var N=b.exports.sbrk,u=N(4),B=N(l*4),H=N(k*o),U=N(l*4),E=x?N(k):0,T=new Uint8Array(b.exports.memory.buffer);T.set(h(j),H),T.set(h(m),U),x&&T.set(h(x),E);var G=t(B,U,l,H,k,o,E,O,z,u);T=new Uint8Array(b.exports.memory.buffer);var _=new Uint32Array(G);h(_).set(T.subarray(B,B+G*4));var X=new Float32Array(1);return h(X).set(T.subarray(u,u+4)),N(u-N(0)),[_,X[0]]}function R(t,m,l,j,k,o,x){var O=b.exports.sbrk,z=O(l*4),N=O(k*o),u=O(l*4),B=new Uint8Array(b.exports.memory.buffer);B.set(h(j),N),B.set(h(m),u);var H=t(z,u,l,N,k,o,x);B=new Uint8Array(b.exports.memory.buffer);var U=new Uint32Array(H);return h(U).set(B.subarray(z,z+H*4)),O(z-O(0)),U}function Y(t,m,l,j,k,o){var x=b.exports.sbrk,O=x(l.byteLength),z=x(m.byteLength),N=new Uint8Array(b.exports.memory.buffer);N.set(h(l),O),N.set(h(m),z);var u=l.byteLength/j,B=t(0,0,z,m.length,O,u,j,k,o),H=x(B*9*4),U=t(H,B,z,m.length,O,u,j,k,o);a(U<=B),N=new Uint8Array(b.exports.memory.buffer);var E=new Float32Array(U*9);return h(E).set(N.subarray(H,H+E.byteLength)),x(O-x(0)),E}var S={LockBorder:1,Sparse:2,ErrorAbsolute:4,Prune:8,Regularize:16,Permissive:32,RegularizeLight:64,PreserveFolds:128,ErrorClamped:256,_InternalDebug:1<<30},q={Shell:1,Solve:2,Thicken:0,_InternalDebug:1<<30};return{ready:f,supported:!0,compactMesh:function(t){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0);var m=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),l=g(b.exports.meshopt_optimizeVertexFetchRemap,m,r(t)+1);if(t!==m)for(var j=0;j<m.length;++j)t[j]=m[j];return l},generatePositionRemap:function(t,m){return a(t instanceof Float32Array),a(t.length%m==0),a(m>=3),n(b.exports.meshopt_generatePositionRemap,t,t.length/m,m)},simplify:function(t,m,l,j,k,o){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j>=0&&j<=t.length),a(j%3==0),a(k>=0);for(var x=0,O=0;O<(o?o.length:0);++O)a(o[O]in S),x|=S[o[O]];var z=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),N=M(b.exports.meshopt_simplify,z,t.length,m,m.length/l,l*4,j,k,x);return N[0]=t instanceof Uint32Array?N[0]:new t.constructor(N[0]),N},simplifyWithAttributes:function(t,m,l,j,k,o,x,O,z,N){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j instanceof Float32Array),a(j.length==k*(m.length/l)),a(k>=0),a(x==null||x instanceof Uint8Array),a(x==null||x.length==m.length/l),a(O>=0&&O<=t.length),a(O%3==0),a(z>=0),a(Array.isArray(o)),a(k>=o.length),a(o.length<=32);for(var u=0;u<o.length;++u)a(o[u]>=0);for(var B=0,u=0;u<(N?N.length:0);++u)a(N[u]in S),B|=S[N[u]];var H=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),U=i(b.exports.meshopt_simplifyWithAttributes,H,t.length,m,m.length/l,l*4,j,k*4,new Float32Array(o),x,O,z,B);return U[0]=t instanceof Uint32Array?U[0]:new t.constructor(U[0]),U},simplifyWithUpdate:function(t,m,l,j,k,o,x,O,z,N){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j instanceof Float32Array),a(j.length==k*(m.length/l)),a(k>=0),a(x==null||x instanceof Uint8Array),a(x==null||x.length==m.length/l),a(O>=0&&O<=t.length),a(O%3==0),a(z>=0),a(Array.isArray(o)),a(k>=o.length),a(o.length<=32);for(var u=0;u<o.length;++u)a(o[u]>=0);for(var B=0,u=0;u<(N?N.length:0);++u)a(N[u]in S),B|=S[N[u]];var H=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),U=y(b.exports.meshopt_simplifyWithUpdate,H,t.length,m,m.length/l,l*4,j,k*4,new Float32Array(o),x,O,z,B);if(t!==H)for(var u=0;u<U[0];++u)t[u]=H[u];return U},getScale:function(t,m){return a(t instanceof Float32Array),a(t.length%m==0),a(m>=3),I(b.exports.meshopt_simplifyScale,t,t.length/m,m*4)},simplifyPoints:function(t,m,l,j,k,o){return a(t instanceof Float32Array),a(t.length%m==0),a(m>=3),a(l>=0&&l<=t.length/m),j?(a(j instanceof Float32Array),a(j.length%k==0),a(k>=3),a(t.length/m==j.length/k),A(b.exports.meshopt_simplifyPoints,t,t.length/m,m*4,j,k*4,o||0,l)):A(b.exports.meshopt_simplifyPoints,t,t.length/m,m*4,void 0,0,0,l)},simplifySloppy:function(t,m,l,j,k,o){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j==null||j instanceof Uint8Array),a(j==null||j.length==m.length/l),a(k>=0&&k<=t.length),a(k%3==0),a(o>=0);var x=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),O=w(b.exports.meshopt_simplifySloppy,x,t.length,m,m.length/l,l*4,j,k,o);return O[0]=t instanceof Uint32Array?O[0]:new t.constructor(O[0]),O},simplifyPrune:function(t,m,l,j){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j>=0);var k=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),o=R(b.exports.meshopt_simplifyPrune,k,t.length,m,m.length/l,l*4,j);return o=t instanceof Uint32Array?o:new t.constructor(o),o},remesh:function(t,m,l,j,k){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j>=4&&j<=256);for(var o=0,x=0;x<(k?k.length:0);++x)a(k[x]in q),o|=q[k[x]];var O=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t);return Y(b.exports.meshopt_remesh,O,m,l*4,j,o)}}})();var wb=cb.ready;function xb(d,c){let{pos:b,nor:f,aux:e}=d,a=b.length/3;if(d.index.length<300)return d;let[h]=cb.simplify(d.index,b,3,0,c,["LockBorder","ErrorAbsolute"]),n=new Int32Array(a).fill(-1),g=0;for(let I=0;I<h.length;I++)n[h[I]]<0&&(n[h[I]]=g++);let r=new Float32Array(g*3),M=new Int8Array(g*3),i=new Uint8Array(g*4);for(let I=0;I<a;I++){let A=n[I];A<0||(r[A*3]=b[I*3],r[A*3+1]=b[I*3+1],r[A*3+2]=b[I*3+2],M[A*3]=f[I*3],M[A*3+1]=f[I*3+1],M[A*3+2]=f[I*3+2],i[A*4]=e[I*4],i[A*4+1]=e[I*4+1],i[A*4+2]=e[I*4+2],i[A*4+3]=e[I*4+3])}let y=new Uint32Array(h.length);for(let I=0;I<h.length;I++)y[I]=n[h[I]];return{...d,pos:r,nor:M,aux:i,index:y,trisBefore:d.index.length/3}}var La=[0,0,0,0];self.onmessage=async d=>{let{id:c,task:b}=d.data;try{let f=performance.now(),e,a=[];if(b.type==="heights"){let{xs:h,zs:n,j0:g,j1:r}=b,M=h.length,i=new Float32Array((r-g)*M);for(let y=g;y<r;y++){let I=n[y],A=(y-g)*M;for(let w=0;w<M;w++)i[A+w]=Sa(h[w],I)}e={h:i,j0:g,j1:r},a=[i.buffer]}else if(b.type==="maps"){let{x0:h,z0:n,dx:g,nx:r,j0:M,j1:i}=b,y=new Float32Array((i-M)*r),I=new Uint8Array((i-M)*r*4);for(let A=M;A<i;A++){let w=n+A*g;for(let R=0;R<r;R++){let Y=h+R*g,S=(A-M)*r+R;y[S]=Sa(Y,w),mb(Y,w,La),I[S*4]=Math.round(La[0]*255),I[S*4+1]=Math.round(La[1]*255),I[S*4+2]=Math.round(La[2]*255),I[S*4+3]=Math.round(La[3]*255)}}e={h:y,m:I,j0:M,j1:i},a=[y.buffer,I.buffer]}else if(b.type==="sdf"){let h=sb[b.name],n={...h,cell:h.cell[b.quality]||h.cell.high},g=Ob(n,b.ix0,b.ix1);b.simplify>0&&(await wb,g=xb(g,b.simplify)),e=g,a=[g.pos.buffer,g.nor.buffer,g.aux.buffer,g.index.buffer]}e.ms=performance.now()-f,self.postMessage({id:c,result:e},a)}catch(f){self.postMessage({id:c,error:f.message+`\n`+f.stack})}};})();\n';function fg(a=Math.max(2,Math.min(12,(navigator.hardwareConcurrency||4)-1))){let e=URL.createObjectURL(new Blob([ug],{type:"text/javascript"})),t=[],n=new Map,i=0;for(let s=0;s<a;s++){let r=new Worker(e);r.busy=0,r.onmessage=o=>{let{id:c,result:l,error:h}=o.data,u=n.get(c);n.delete(c),r.busy--,h?u.reject(new Error(h)):u.resolve(l)},r.onerror=o=>console.error("[scene] worker error",o.message),t.push(r)}return{size:a,run(s,r=[]){return new Promise((o,c)=>{let l=++i;n.set(l,{resolve:o,reject:c});let h=t[0];for(let u of t)u.busy<h.busy&&(h=u);h.busy++,h.postMessage({id:l,task:s},r)})},dispose(){t.forEach(s=>s.terminate()),URL.revokeObjectURL(e)}}}function Jt(a){let e=a>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Yn=new Uint8Array(512),Ua=new Uint8Array(512);(function(){let e=Jt(20261107),t=new Uint8Array(256);for(let n=0;n<256;n++)t[n]=n;for(let n=255;n>0;n--){let i=Math.floor(e()*(n+1)),s=t[n];t[n]=t[i],t[i]=s}for(let n=0;n<512;n++)Yn[n]=t[n&255],Ua[n]=Yn[n]%12})();var on=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),JM=.5*(Math.sqrt(3)-1),lc=(3-Math.sqrt(3))/6,ZM=1/3,Ui=1/6;function Ft(a,e){let t=(a+e)*JM,n=Math.floor(a+t),i=Math.floor(e+t),s=(n+i)*lc,r=a-(n-s),o=e-(i-s),c,l;r>o?(c=1,l=0):(c=0,l=1);let h=r-c+lc,u=o-l+lc,f=r-1+2*lc,p=o-1+2*lc,m=n&255,b=i&255,d=0,g=.5-r*r-o*o;if(g>0){let y=Ua[m+Yn[b]]*3;g*=g,d+=g*g*(on[y]*r+on[y+1]*o)}let v=.5-h*h-u*u;if(v>0){let y=Ua[m+c+Yn[b+l]]*3;v*=v,d+=v*v*(on[y]*h+on[y+1]*u)}let _=.5-f*f-p*p;if(_>0){let y=Ua[m+1+Yn[b+1]]*3;_*=_,d+=_*_*(on[y]*f+on[y+1]*p)}return 70*d}function Tr(a,e,t){let n=(a+e+t)*ZM,i=Math.floor(a+n),s=Math.floor(e+n),r=Math.floor(t+n),o=(i+s+r)*Ui,c=a-(i-o),l=e-(s-o),h=t-(r-o),u,f,p,m,b,d;c>=l?l>=h?(u=1,f=0,p=0,m=1,b=1,d=0):c>=h?(u=1,f=0,p=0,m=1,b=0,d=1):(u=0,f=0,p=1,m=1,b=0,d=1):l<h?(u=0,f=0,p=1,m=0,b=1,d=1):c<h?(u=0,f=1,p=0,m=0,b=1,d=1):(u=0,f=1,p=0,m=1,b=1,d=0);let g=c-u+Ui,v=l-f+Ui,_=h-p+Ui,y=c-m+2*Ui,S=l-b+2*Ui,w=h-d+2*Ui,x=c-1+3*Ui,M=l-1+3*Ui,R=h-1+3*Ui,A=i&255,L=s&255,D=r&255,U=0,N=.6-c*c-l*l-h*h;if(N>0){let H=Ua[A+Yn[L+Yn[D]]]*3;N*=N,U+=N*N*(on[H]*c+on[H+1]*l+on[H+2]*h)}let F=.6-g*g-v*v-_*_;if(F>0){let H=Ua[A+u+Yn[L+f+Yn[D+p]]]*3;F*=F,U+=F*F*(on[H]*g+on[H+1]*v+on[H+2]*_)}let W=.6-y*y-S*S-w*w;if(W>0){let H=Ua[A+m+Yn[L+b+Yn[D+d]]]*3;W*=W,U+=W*W*(on[H]*y+on[H+1]*S+on[H+2]*w)}let j=.6-x*x-M*M-R*R;if(j>0){let H=Ua[A+1+Yn[L+1+Yn[D+1]]]*3;j*=j,U+=j*j*(on[H]*x+on[H+1]*M+on[H+2]*R)}return 32*U}function kh(a,e,t=5,n=2.03,i=.5){let s=0,r=1,o=0;for(let c=0;c<t;c++){s+=r*Ft(a,e),o+=r;let l=a*.8-e*.6,h=a*.6+e*.8;a=l*n+13.7,e=h*n+7.1,r*=i}return s/o}function pg(a,e,t=6,n=2,i=.5){let s=0,r=1,o=1,c=0;for(let l=0;l<t;l++){let h=1-Math.abs(Ft(a,e));h*=h,h*=o,o=Math.min(1,Math.max(0,h*1.6)),s+=r*h,c+=r;let u=a*.8-e*.6,f=a*.6+e*.8;a=u*n+3.1,e=f*n+17.9,r*=i}return s/c}function Fh(a,e,t,n=4,i=2.07,s=.5){let r=0,o=1,c=0;for(let l=0;l<n;l++)r+=o*Tr(a,e,t),c+=o,a=a*i+5.3,e=e*i+11.7,t=t*i+2.9,o*=s;return r/c}var ys=(a,e,t)=>a<e?e:a>t?t:a;function gt(a,e,t){let n=ys((t-a)/(e-a),0,1);return n*n*(3-2*n)}var ti=(a,e,t)=>a+(e-a)*t;function cn(a,e,t){let n=ys(.5+.5*(e-a)/t,0,1);return e+(a-e)*n-t*n*(1-n)}function wn(a,e,t){return-cn(-a,-e,t)}var Hn=_r(Mr(Th,3)),ni=_r(Mr(Qm,6)),hc=_r(Mr($m,3));var vi=[0,0,0,0];function Bh(a,e){let t=1.3*kh(a/170,e/170,3)+.55*Ft(a/37,e/41);t+=78*gt(-730,-1060,e)*(.85+.15*Ft(a/90,3.1));let n=a+26*Math.sin(e/112)+14*Ft(e/61,1.7);t+=64*gt(-148,-285,n)*(.8+.2*Ft(a/70,e/70));let i=a-34*Math.sin(e/150+1.3);t+=150*gt(172,480,i)*(.72+.28*kh(a/240,e/240,3));let s=(a+8)/94,r=(e-58)/64;t+=41.5*Math.exp(-(s*s+r*r));let o=(e-82)/64;t+=36*Math.exp(-o*o)*gt(0,-190,a),t+=3*kh(a/28,e/28,3)*Math.exp(-(s*s+r*r)*.5);let c=Math.max(0,Math.abs(a-30)-420),l=Math.max(0,-e-1220),h=Math.max(0,e-320),u=Math.hypot(c,l+h*.7);if(u>0){let f=gt(0,1500,u);t+=f*(150+640*pg(a/1300+7.3,e/1300-2.1,7))+f*f*160}return t}function mg(a,e){let t=1.7+.168*(-a-8)+.064*(-e-150);return t+=5.5*Ft(a/96+3.1,e/96)+1.4*Ft(a/37,e/33),Math.max(t,.9)}function QM(a,e){let t=(a-ei.x)/ei.rx,n=(e-ei.z)/ei.rz,i=Math.hypot(t,n)+.12*Ft(a/52,e/52);return gt(1,.84,i)}function $M(a,e){let n=mg(a,e)/ei.step,i=Math.floor(n),s=n-i,r=ei.step*(i+gt(.86,1,s));return r+=.24*gt(0,.025,s)*(1-gt(.035,.075,s)),r}function e1(a,e){let t=(a+112)/168,n=(e+236)/186;return gt(1.25,.9,Math.hypot(t,n)+.1*Ft(a/70,e/70))}function gg(a,e){let t=Bh(a,e),n=e1(a,e);n>0&&(t=ti(t,Math.max(t,mg(a,e)-.6),n));let i=QM(a,e);i>0&&(t=ti(t,$M(a,e),i));let s=Math.hypot(a-Ln.x,e-Ln.z);s<Ln.r+22&&(t=ti(t,Ln.y,gt(Ln.r+22,Ln.r,s)));let r=Math.hypot((a-Bn.x)*.9,e-Bn.z);r<Bn.r+30&&(t=ti(t,Bn.y+.35*Ft(a/13,e/13),gt(Bn.r+30,Bn.r-12,r)));let o=Math.hypot(a-Sn.x,e-Sn.z);if(o<Sn.r+6&&(t=Math.min(t,ti(Sn.level-1.6,t,gt(Sn.r-5,Sn.r+6,o)))),a>ni.minX-90&&a<ni.maxX+90&&e>ni.minZ-90&&e<ni.maxZ+90){ni.closest(a,e,vi);let c=vi[0],l=vi[1]/ni.length,h=ti(Li[0],Li[1],l),u=Rh+14*gt(.08,0,l)+1.5*Ft(vi[1]/30,.5),f=h+Math.max(0,c-u)*(2.5+.6*Ft(vi[1]/40,c/20))+1.2*Ft(a/9,e/9)*gt(u,u+6,c);t=Math.min(t,f)}if(a>hc.minX-6&&a<hc.maxX+6&&e>hc.minZ-6&&e<hc.maxZ+6){hc.closest(a,e,vi);let c=vi[0];c<2.4&&(t-=.6*(1-gt(.7,2.2,c)))}return t}var dc=2,Rr=(()=>{let a=Math.ceil(Hn.length/dc)+1,e=new Float32Array(a),t=new Uint8Array(a);for(let s=0;s<a;s++){let r=Hn.at(s*dc);e[s]=gg(r.x,r.z),Math.abs(r.z-Dt.z)<4&&r.x>Dt.x-Dt.span/2-6&&r.x<Dt.x+Dt.span/2+6&&(t[s]=1)}for(let s=0;s<a;s++){let r=Hn.at(s*dc),o=Math.abs(r.x-Dt.x)-Dt.span/2;Math.abs(r.z-Dt.z)<30&&o<18&&(e[s]=ti(e[s],Dt.y-.15,gt(18,4,o)))}let n=new Float32Array(a),i=4;for(let s=0;s<a;s++){let r=0,o=0;for(let c=-i;c<=i;c++){let l=Math.max(0,Math.min(a-1,s+c)),h=i+1-Math.abs(c);r+=e[l]*h,o+=h}n[s]=r/o}return{h:n,onBridge:t}})();function t1(a){let e=a/dc,t=Math.floor(e),n=e-t,i=Rr.h[Math.min(t,Rr.h.length-1)],s=Rr.h[Math.min(t+1,Rr.h.length-1)];return i+(s-i)*n}function zh(a,e){let t=gg(a,e);if(a>Hn.minX-6&&a<Hn.maxX+6&&e>Hn.minZ-6&&e<Hn.maxZ+6){Hn.closest(a,e,vi);let n=vi[0];if(n<3.4){let i=Math.round(vi[1]/dc);Rr.onBridge[Math.min(i,Rr.onBridge.length-1)]||(t=ti(t,t1(vi[1])-.1,gt(3.4,1.7,n)))}}return t}function bg(a,e,t,n,i){let s=[];for(let h=a;h<=e+1e-6;h+=t)s.push(h);let r=[],o=[],c=t,l=a;for(;l>-n;)c*=i,l-=c,r.push(l);for(c=t,l=s[s.length-1];l<n;)c*=i,l+=c,o.push(l);return Float32Array.from([...r.reverse(),...s,...o])}var ii={x0:-480,z0:-1100,w:1024,d:1280};async function xg(a,e,t,n){let i=performance.now(),s=bg(-340,380,e.terrainStep,7200,1.04),r=bg(-1e3,150,e.terrainStep,7200,1.04),o=s.length,c=r.length,l=new Float32Array(o*c),h=Math.ceil(c/(a.size*3)),u=[];for(let H=0;H<c;H+=h){let G=Math.min(c,H+h);u.push(a.run({type:"heights",xs:s,zs:r,j0:H,j1:G}).then(q=>l.set(q.h,q.j0*o)))}let f=e.mapStep,p=Math.round(ii.w/f),m=Math.round(ii.d/f),b=new Float32Array(p*m),d=new Uint8Array(p*m*4),g=Math.ceil(m/(a.size*3));for(let H=0;H<m;H+=g){let G=Math.min(m,H+g);u.push(a.run({type:"maps",x0:ii.x0,z0:ii.z0,dx:f,nx:p,j0:H,j1:G}).then(q=>{b.set(q.h,q.j0*p),d.set(q.m,q.j0*p*4)}))}await Promise.all(u);let v=performance.now(),_=new Float32Array(o*c*3),y=new Int8Array(o*c*3);for(let H=0;H<c;H++)for(let G=0;G<o;G++){let q=H*o+G;_[q*3]=s[G],_[q*3+1]=l[q],_[q*3+2]=r[H];let Y=Math.max(0,G-1),ce=Math.min(o-1,G+1),xe=Math.max(0,H-1),Z=Math.min(c-1,H+1),fe=(l[H*o+ce]-l[H*o+Y])/(s[ce]-s[Y]),Ie=(l[Z*o+G]-l[xe*o+G])/(r[Z]-r[xe]),ze=Math.hypot(fe,1,Ie);y[q*3]=Math.round(-fe/ze*127),y[q*3+1]=Math.round(1/ze*127),y[q*3+2]=Math.round(-Ie/ze*127)}let S=new Uint32Array((o-1)*(c-1)*6),w=0;for(let H=0;H<c-1;H++)for(let G=0;G<o-1;G++){let q=H*o+G,Y=q+1,ce=q+o,xe=ce+1;Math.abs(l[q]-l[xe])<Math.abs(l[Y]-l[ce])?(S[w++]=q,S[w++]=ce,S[w++]=xe,S[w++]=q,S[w++]=xe,S[w++]=Y):(S[w++]=q,S[w++]=ce,S[w++]=Y,S[w++]=Y,S[w++]=ce,S[w++]=xe)}let x=new rt;x.setAttribute("position",new ot(_,3)),x.setAttribute("normal",new ot(y,3,!0)),x.setIndex(new ot(S,1)),x.computeBoundingSphere();let M=new Uint8Array(p*m*4);for(let H=0;H<m;H++)for(let G=0;G<p;G++){let q=H*p+G,Y=b[H*p+Math.max(0,G-1)],ce=b[H*p+Math.min(p-1,G+1)],xe=b[Math.max(0,H-1)*p+G],Z=b[Math.min(m-1,H+1)*p+G],fe=(ce-Y)/(2*f),Ie=(Z-xe)/(2*f),ze=Math.hypot(fe,1,Ie);M[q*4]=Math.round((-fe/ze*.5+.5)*255),M[q*4+1]=Math.round((-Ie/ze*.5+.5)*255),M[q*4+2]=Math.round(1/ze*255),M[q*4+3]=255}let R=(H,G,q)=>{let Y=new ui(H,p,m,G,q);return Y.magFilter=Tt,Y.minFilter=en,Y.generateMipmaps=!0,Y.anisotropy=8,Y.needsUpdate=!0,Y},A=R(d,Pn,fn),L=R(M,Pn,fn),D=new ui(b,p,m,mr,Wt);D.magFilter=D.minFilter=Ht,D.needsUpdate=!0;let U={mask:A,normal:L,height:D,x0:ii.x0,z0:ii.z0,w:ii.w,d:ii.d,nx:p,nz:m,step:f,heights:b,masks:d},N=dg(t,U,{time:n}),F=new st(x,N);F.name="terrain",F.receiveShadow=!0,F.castShadow=e.terrainShadow,F.frustumCulled=!1;function W(H,G){let q=(H-ii.x0)/f,Y=(G-ii.z0)/f;if(q>=0&&Y>=0&&q<p-1&&Y<m-1){let ce=Math.floor(q),xe=Math.floor(Y),Z=q-ce,fe=Y-xe,Ie=xe*p+ce;return(b[Ie]*(1-Z)+b[Ie+1]*Z)*(1-fe)+(b[Ie+p]*(1-Z)+b[Ie+p+1]*Z)*fe}return zh(H,G)}function j(H,G,q){let Y=Math.round((H-ii.x0)/f),ce=Math.round((G-ii.z0)/f);return Y<0||ce<0||Y>=p||ce>=m?0:d[(ce*p+Y)*4+q]/255}return console.log(`[scene] terrain ${o}x${c} (${(o*c/1e6).toFixed(2)}M verts), heights+maps ${(v-i).toFixed(0)} ms, total ${(performance.now()-i).toFixed(0)} ms`),{mesh:F,maps:U,heightAt:W,maskAt:j,material:N}}var Hh=(function(){var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;X8:kdbk:kYi5ud9:du8Jjjjjbcjq9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCaAcethXaxaDfhiaOaeaoaeao6E9RhQalcl4cifcd4hLazcjdfaAfhKcbhYabaOad2fg8AhEaHh3incbh5dnawTmbaxaYcd4fRbbh5kcbh8Eazcjdfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcjdfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcjdfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaL6mva8FaLfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasaYcd4fRbbgociGPlbedrbkaATmdazaYfh8Fazcjdfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeazaYfhaazcjdfhhcbhoceh8EaKh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaQaocefgofmbka8FaXfh8FcdhoaacdfhaahaXfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8EazaYfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaKhainazcjdfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3aYclfgYad6mbkaza8AaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcjqf8Kjjjjbaok:bsesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:I9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:SBlEud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fgOavcjdfasaeaH9RaHasfae6EgAaAcsfgoc9WGgCSEhXaPaDfhQaocl4cifcd4hLavcj;cbfaCcetfhKavcj;cbfaCci2fhYavcj;cbfaCfh8AcbhEaoc;ab6h3incbh5dnawTmbaPaEcd4fRbbh5kcbh8Eavcj;cbfh8Findndndndna5a8Ecet4ciGgoc9:fPdebdkaxaQ9RaC6mwdnaCTmbavcj;cbfa8EaC2faQaC;8qbbkaQaAfhQxdkaCTmeavcj;cbfa8EaC2fcbaC;8kbxekaxaQ9RaL6moaoclVcbawEhraQaLfhocbhidna3mbaxao9Rc;Gb6mbcbhlina8FalfhidndndndndndnaQalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiczfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaicafaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaC0meaihlaxao9Rc;Fb0mbkkdnaiaC9pmbaici4hlinaxao9RcK6mwa8FaifhqdndndndndndnaQaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaoclffa8JRb:q:W:cjbfhoxikaqaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaocwffa8JRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbagaocdffa8JRb:q:W:cjbfhokalcdfhlaiczfgiaC6mbkkaohQaoTmoka8FaCfh8Fa8Ecefg8Ecl9hmbkdndndndnawTmbazaEcd4fRbbglciGPlbedwbkaCTmdaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep9Taapxeeeeeeeeeeeeeeeeghp9op9Hp9rgaa8Kp9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ughp9Abbbaladfglahaaaapmlvorlvorlvorlvorp9Ughp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp9Ughp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9AbbbaladfhlaoczfgoaC6mbxikkaCTmeaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep:neaapxebebebebebebebebghp9op:bep9rgaa8Kp:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeghp9Abbbaladfglahaaaapmlvorlvorlvorlvorp:oeghp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp:oeghp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9AbbbaladfhlaoczfgoaC6mbxdkkaCTmbaXaEfhrcbhocbalcl4gl9Rc8FGhiavaEfpbdbhhinaravcj;cbfaofpblbg8Ka8Aaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaKaofpblbg8NaYaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgaahp9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ma8PpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9AbbbaradfhraoczfgoaC6mbkkaEclfgEad6mbkdnaXavcjdf9hmbaAad2goTmbaOavcjdfao;8qbbkdnammbavaXaAcufad2fad;8qbbkaAaHfhHc9:hoaQhPaQmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkpPesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(a),s,r=WebAssembly.instantiate(i,{}).then(function(g){s=g.instance,s.exports.__wasm_call_ctors()});function o(g){for(var v=new Uint8Array(g.length),_=0;_<g.length;++_){var y=g.charCodeAt(_);v[_]=y>96?y-97:y>64?y-39:y+4}for(var S=0,_=0;_<g.length;++_)v[S++]=v[_]<60?n[v[_]]:(v[_]-60)*64+v[++_];return v.buffer.slice(0,S)}function c(g,v,_,y,S,w,x){var M=g.exports.sbrk,R=y+3&-4,A=M(R*S),L=M(w.length),D=new Uint8Array(g.exports.memory.buffer);D.set(w,L);var U=v(A,y,S,L,w.length);if(U==0&&x&&x(A,R,S),_.set(D.subarray(A,A+y*S)),M(A-M(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function p(g){var v={object:new Worker(g),pending:0,requests:{}};return v.object.onmessage=function(_){var y=_.data;v.pending-=y.count,v.requests[y.id][y.action](y.value),delete v.requests[y.id]},v}function m(g){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+d.name+";"+c.toString()+d.toString(),_=new Blob([v],{type:"text/javascript"}),y=URL.createObjectURL(_),S=u.length;S<g;++S)u[S]=p(y);for(var S=g;S<u.length;++S)u[S].object.postMessage({});u.length=g,URL.revokeObjectURL(y)}function b(g,v,_,y,S){for(var w=u[0],x=1;x<u.length;++x)u[x].pending<w.pending&&(w=u[x]);return new Promise(function(M,R){var A=new Uint8Array(_),L=++f;w.pending+=g,w.requests[L]={resolve:M,reject:R},w.object.postMessage({id:L,count:g,size:v,source:A,mode:y,filter:S},[A.buffer])})}function d(g){var v=g.data;self.ready.then(function(_){if(!v.id)return self.close();try{var y=new Uint8Array(v.count*v.size);c(_,_.exports[v.mode],y,v.count,v.size,v.source,_.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:y},[y.buffer])}catch(S){self.postMessage({id:v.id,count:v.count,action:"reject",value:S})}})}return{ready:r,supported:!0,useWorkers:function(g){m(g)},decodeVertexBuffer:function(g,v,_,y,S){c(s,s.exports.meshopt_decodeVertexBuffer,g,v,_,y,s.exports[l[S]])},decodeIndexBuffer:function(g,v,_,y){c(s,s.exports.meshopt_decodeIndexBuffer,g,v,_,y)},decodeIndexSequence:function(g,v,_,y){c(s,s.exports.meshopt_decodeIndexSequence,g,v,_,y)},decodeGltfBuffer:function(g,v,_,y,S,w){c(s,s.exports[h[S]],g,v,_,y,s.exports[l[w]])},decodeGltfBufferAsync:function(g,v,_,y,S){return u.length>0?b(g,v,_,h[y],l[S]):r.then(function(){var w=new Uint8Array(g*v);return c(s,s.exports[h[y]],w,g,v,_,s.exports[l[S]]),w})}}})();async function vg(a,e,t){let n=performance.now(),i=a.rock==="low"?"rocks_low.bin":"rocks_high.bin",s=await fetch(oa(i));if(!s.ok)throw new Error(`${i}: HTTP ${s.status}`);let r=+s.headers.get("content-length")||0,o;if(s.body&&r&&t){let g=s.body.getReader(),v=[],_=0;for(;;){let{done:S,value:w}=await g.read();if(S)break;v.push(w),_+=w.length,t(_/r)}o=new Uint8Array(_);let y=0;for(let S of v)o.set(S,y),y+=S.length}else o=new Uint8Array(await s.arrayBuffer());let c=performance.now();if(await Hh.ready,String.fromCharCode(o[0],o[1],o[2],o[3])!=="RKS1")throw new Error(i+": bad magic");let h=new DataView(o.buffer).getUint32(4,!0),u=JSON.parse(new TextDecoder().decode(o.subarray(8,8+h))),f=8+h,p=hg(e),m=new Ut;m.name="rocks";let b={},d=0;for(let g of u.volumes){let v=o.subarray(f+g.offset,f+g.offset+g.vLen),_=o.subarray(f+g.offset+g.vLen,f+g.offset+g.vLen+g.iLen),y=new Uint8Array(g.verts*16);Hh.decodeVertexBuffer(y,g.verts,16,v);let S=new Uint32Array(g.tris*3);Hh.decodeIndexBuffer(new Uint8Array(S.buffer),S.length,4,_);let w=new Uint16Array(y.buffer),x=new Int8Array(y.buffer),M=new Float32Array(g.verts*3),R=new Int8Array(g.verts*3),A=new Uint8Array(g.verts*4),[L,D,U]=g.bmin,N=g.step;for(let j=0;j<g.verts;j++)M[j*3]=L+w[j*8]*N,M[j*3+1]=D+w[j*8+1]*N,M[j*3+2]=U+w[j*8+2]*N,R[j*3]=x[j*16+8],R[j*3+1]=x[j*16+9],R[j*3+2]=x[j*16+10],A[j*4]=y[j*16+12],A[j*4+1]=y[j*16+13],A[j*4+2]=y[j*16+14],A[j*4+3]=y[j*16+15];let F=new rt;F.setAttribute("position",new ot(M,3)),F.setAttribute("normal",new ot(R,3,!0)),F.setAttribute("aux",new ot(A,4,!0)),F.setIndex(new ot(S,1)),F.computeBoundingSphere(),F.computeBoundingBox();let W=new st(F,p);W.name="rock-"+g.name,W.castShadow=g.name!=="far",W.receiveShadow=!0,m.add(W),b[g.name]=W,d+=g.tris}return console.log(`[scene] rocks ${i} ${(o.length/1048576).toFixed(1)} MB: download ${(c-n).toFixed(0)} ms, decode ${(performance.now()-c).toFixed(0)} ms, ${(d/1e3).toFixed(0)}k tris`),{group:m,meshes:b,material:p}}function uc(a,e=!1){let t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),s={},r={},o=a[0].morphTargetsRelative,c=new rt;c.morphTargetsRelative=o;let l=0;for(let h=0;h<a.length;++h){let u=a[h],f=0,p=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(u.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[m].length!==a[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.morphAttributes[m]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0,u=[];for(let f=0;f<a.length;++f){let p=a[f].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=a[f].attributes.position.count}c.setIndex(u)}for(let h in s){let u=yg(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in r){let u=r[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let b=0;b<r[h].length;++b)p.push(r[h][b][f]);let m=yg(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function yg(a){let e,t,n,i=-1,s=0;for(let l=0;l<a.length;++l){let h=a[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let r=new e(s),o=new ot(r,t,n),c=0;for(let l=0;l<a.length;++l){let h=a[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let f=0,p=h.count;f<p;f++)for(let m=0;m<t;m++){let b=h.getComponent(f,m);o.setComponent(f+u,m,b)}}else r.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Ou(a,e){if(e===tu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===gr||e===ec){let t=a.getIndex();if(t===null){let s=[],r=a.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)s.push(o);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}let n=t.count-2,i=[];if(e===gr)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),a.setIndex(i),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}var ai=new Ve,_g=new Nt,Mg=new C,Sg=new C,wg=new In,Gh=class{constructor(){this.parts={},this.stack=[new Ve]}get M(){return this.stack[this.stack.length-1]}push(e=0,t=0,n=0,i=0,s=1){return ai.compose(Sg.set(e,t,n),_g.setFromEuler(wg.set(0,i,0)),Mg.set(s,s,s)),this.stack.push(this.M.clone().multiply(ai)),this}pop(){return this.stack.pop(),this}add(e,t,n){let i=t.index?t.toNonIndexed():t;n&&i.applyMatrix4(n),i.applyMatrix4(this.M);for(let s of Object.keys(i.attributes))s!=="position"&&s!=="normal"&&s!=="uv"&&i.deleteAttribute(s);return i.attributes.uv||i.setAttribute("uv",new ot(new Float32Array(i.attributes.position.count*2),2)),(this.parts[e]??=[]).push(i),this}box(e,t,n,i,s,r,o,c=0){let l=n1.has(e)?"fit":i1.has(e)?"band":"m",h=a1(s,r,o,l);return ai.compose(Sg.set(t,n,i),_g.setFromEuler(wg.set(0,c,0)),Mg.set(1,1,1)),this.add(e,h,ai)}column(e,t,n,i,s,r,o=10,c=s*.9){let l=new Wn(c,s,r,o,1,!0);return s1(l,s,r),ai.makeTranslation(t,n+r/2,i),this.add(e,l,ai)}build(e){let t=new Ut;for(let[n,i]of Object.entries(this.parts)){let s=uc(i,!1);s.computeBoundingSphere();let r=new st(s,e[n]);r.name="arch-"+n,r.castShadow=!0,r.receiveShadow=!0,t.add(r)}return t}},n1=new Set(["lattice","door","gatedoor","stele"]),i1=new Set(["dougong"]);function a1(a,e,t,n="m"){let i=new Ai(a,e,t),s=i.attributes.uv,r=i.attributes.position,o=i.attributes.normal;if(n==="fit")return i;for(let c=0;c<s.count;c++){let l=r.getX(c),h=r.getY(c),u=r.getZ(c),f=Math.abs(o.getX(c)),p=Math.abs(o.getY(c));if(n==="band"){let m=f>.5?u:l;s.setXY(c,m,p>.5?.02:h/e+.5);continue}f>.5?s.setXY(c,u,h):p>.5?s.setXY(c,l,u):s.setXY(c,l,h)}return i}function s1(a,e,t){let n=a.attributes.uv;for(let i=0;i<n.count;i++)n.setXY(i,n.getX(i)*Math.PI*2*e,n.getY(i)*t)}function ca(a,e){let{A:t,B:n,H:i,lift:s=.9,kind:r="hip",vMax:o=1,thick:c=.32,nu:l=18,nv:h=10,tile:u="roof",under:f="wood",ridge:p=!0,gableOver:m=.8}=e,b=1.55,d=r==="gable"?0:1,g=(H,G,q)=>{if(r==="gable")return s*.25*Math.pow(1-q,2)*Math.pow(Math.abs(H)/t,4);let Y=t-Math.abs(H),ce=n-Math.abs(G),xe=Math.max(Y,ce);return s*Math.exp(-xe/(.42*n))*Math.pow(1-q,2.2)},v=H=>i*Math.pow(H,b),_=H=>{let G=0,q=16;for(let Y=0;Y<q;Y++){let ce=H*Y/q,xe=H*(Y+1)/q;G+=Math.hypot(n*(xe-ce),v(xe)-v(ce))}return G},y=r==="gable"?[0,1]:[0,1,2,3],S=[],w=[],x=[],M=[],R=[];for(let H=0;H<=h;H++)R.push(_(o*H/h));let A=(H,G,q,Y)=>{let ce=d*q*n,xe,Z;if(H<2){let fe=r==="gable"?t+m:t-ce;xe=G*fe,Z=(H===0?1:-1)*n*(1-q)}else{let fe=n-ce;Z=G*fe,xe=(H===2?1:-1)*(t-ce)}return Y[0]=xe,Y[1]=v(q)+g(xe,Z,q),Y[2]=Z,Y},L=[0,0,0],D=[0,0,0],U=[0,0,0],N=[0,0,0],F=[],W=[],j=[];for(let H of y){let G=[],q=[],Y=[],ce=[];for(let Ue=0;Ue<=h;Ue++){let je=o*Ue/h,ae=[];for(let ve=0;ve<=l;ve++){let ge=-1+2*ve/l;A(H,ge,je,L);let _e=H<2?L[0]:L[2];ae.push({p:L.slice(),uv:[_e,R[Ue]]})}ce.push(ae)}let xe=H===0?[0,0,1]:H===1?[0,0,-1]:H===2?[1,0,0]:[-1,0,0];for(let Ue=0;Ue<h;Ue++)for(let je=0;je<l;je++){let ae=ce[Ue][je],ve=ce[Ue][je+1],ge=ce[Ue+1][je],_e=ce[Ue+1][je+1],we=H===1||H===2,re=(ue,ye,Re)=>{we?(G.push(...ue.p,...Re.p,...ye.p),Y.push(...ue.uv,...Re.uv,...ye.uv)):(G.push(...ue.p,...ye.p,...Re.p),Y.push(...ue.uv,...ye.uv,...Re.uv))};re(ae,ve,_e),re(ae,_e,ge)}let Z=new rt;Z.setAttribute("position",new it(G,3)),Z.setAttribute("uv",new it(Y,2)),Z.computeVertexNormals(),F.push(Z);let fe=new Float32Array(G.length);for(let Ue=0;Ue<G.length;Ue+=9)for(let je=0;je<3;je++){let ae=Ue+(je===0?0:je===1?6:3);fe[Ue+je*3]=G[ae],fe[Ue+je*3+1]=G[ae+1]-c,fe[Ue+je*3+2]=G[ae+2]}let Ie=new rt;Ie.setAttribute("position",new ot(fe,3));let ze=new Float32Array(fe.length/3*2);for(let Ue=0;Ue<fe.length/3;Ue++)ze[Ue*2]=fe[Ue*3]+fe[Ue*3+2],ze[Ue*2+1]=fe[Ue*3+1]*3;Ie.setAttribute("uv",new ot(ze,2)),Ie.computeVertexNormals(),W.push(Ie);let Pe=[],Ye=[],xt=ce[0];for(let Ue=0;Ue<l;Ue++){let je=xt[Ue].p,ae=xt[Ue+1].p,ve=[je[0],je[1],je[2]],ge=[ae[0],ae[1],ae[2]],_e=[je[0],je[1]-c,je[2]],we=[ae[0],ae[1]-c,ae[2]],re=H===1||H===2;re?Pe.push(...ve,...ge,...we,...ve,...we,..._e):Pe.push(...ve,...we,...ge,...ve,..._e,...we);let ue=xt[Ue].uv[0],ye=xt[Ue+1].uv[0];re?Ye.push(ue,1,ye,1,ye,0,ue,1,ye,0,ue,0):Ye.push(ue,1,ye,0,ye,1,ue,1,ue,0,ye,0)}let Je=new rt;Je.setAttribute("position",new it(Pe,3)),Je.setAttribute("uv",new it(Ye,2)),Je.computeVertexNormals(),j.push(Je)}for(let H of F)a.add(u,H);for(let H of W)a.add(f,H);for(let H of j)a.add("trim",H);if(p&&o>=.999){let H=r==="gable"?t+m:t-n;if(H>.05){a.box("ridge",0,i+.22,0,2*H+.5,.55,.42),a.box("ridge",0,i+.55,0,2*H+.2,.14,.24);for(let G of[-1,1]){let q=[];for(let ce=0;ce<=6;ce++){let xe=ce/6;q.push(new C(G*(H+.1-.5*Math.sin(xe*2.6)*xe),i+.3+1.25*xe,0))}let Y=new Aa(new Yi(q),8,.22,6,!1);a.add("ridge",Y)}}else if(r!=="gable"){let G=new _n(.42,10,8);ai.makeTranslation(0,i+.45,0),a.add("gold",G,ai);let q=new vo(.2,1.4,8);ai.makeTranslation(0,i+1.4,0),a.add("gold",q,ai)}if(r!=="gable")for(let[G,q]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let Y=[];for(let Z=0;Z<=10;Z++){let fe=Z/10;A(0,G,fe,L),L[2]*=q,Y.push(new C(L[0],L[1]+.14,L[2]))}let ce=Y[0];Y.unshift(new C(ce.x*1+G*.35,ce.y+.45,ce.z+q*.35));let xe=new Aa(new Yi(Y),14,.17,5,!1);a.add("ridge",xe)}}}function Eg(a,e){let{nx:t=3,nz:n=2,bay:i=3.6,bayZ:s=i,h:r=4.2,colR:o=.22,wallAll:c=!1,open:l=!1,balcony:h=!1}=e,u=t*i,f=n*s,p=-u/2,m=-f/2;for(let g=0;g<=t;g++)for(let v=0;v<=n;v++)g>0&&g<t&&v>0&&v<n||a.column("pillar",p+g*i,0,m+v*s,o,r,8);let b=.42;a.box("beam",0,r-b/2,f/2,u+o*2,b,.3),a.box("beam",0,r-b/2,-f/2,u+o*2,b,.3),a.box("beam",u/2,r-b/2,0,.3,b,f),a.box("beam",-u/2,r-b/2,0,.3,b,f);let d=.62;if(a.box("dougong",0,r+d/2,f/2+.12,u+.9,d,.5),a.box("dougong",0,r+d/2,-f/2-.12,u+.9,d,.5),a.box("dougong",u/2+.12,r+d/2,0,.5,d,f+.9),a.box("dougong",-u/2-.12,r+d/2,0,.5,d,f+.9),a.box("wood",0,r+d,0,u+.6,.12,f+.6),!l){for(let _=0;_<t;_++){let y=p+(_+.5)*i,S=_===Math.floor(t/2);a.box(c?"wall":S?"door":"lattice",y,(r-b)/2,f/2-.06,i-o*2,r-b,.16),a.box(c?"wall":"lattice",y,(r-b)/2,-f/2+.06,i-o*2,r-b,.16)}for(let _=0;_<n;_++){let y=m+(_+.5)*s;for(let S of[-1,1])a.box("wall",S*(u/2-.06),(r-b)*.22,y,.16,(r-b)*.44,s-o*2),a.box("lattice",S*(u/2-.06),(r-b)*.72,y,.16,(r-b)*.56,s-o*2,0)}}return h&&Vh(a,u+1.6,f+1.6,0,1),{W:u,D:f,top:r+d}}function Vh(a,e,t,n,i=.95,s=0){[[[-e/2,t/2],[e/2,t/2]],[[e/2,t/2],[e/2,-t/2]],[[e/2,-t/2],[-e/2,-t/2]],[[-e/2,-t/2],[-e/2,t/2]]].forEach(([c,l],h)=>{let u=Math.hypot(l[0]-c[0],l[1]-c[1]),f=Math.max(1,Math.round(u/1.4)),p=Math.atan2(l[1]-c[1],l[0]-c[0]);for(let d=0;d<=f;d++){let g=d/f,v=c[0]+(l[0]-c[0])*g,_=c[1]+(l[1]-c[1])*g;h===0&&s>0&&Math.abs(v)<s/2||a.box("pillar",v,n+i/2,_,.14,i,.14)}let m=(c[0]+l[0])/2,b=(c[1]+l[1])/2;if(h===0&&s>0){let d=(e-s)/2;for(let g of[-1,1])a.box("pillar",g*(s/2+d/2),n+i,b,d,.1,.12),a.box("pillar",g*(s/2+d/2),n+i*.45,b,d,.06,.08)}else a.box("pillar",m,n+i,b,u,.1,.12,-p),a.box("pillar",m,n+i*.45,b,u,.06,.08,-p)})}function fc(a,e,t,n,i=!0,s=3.4){if(a.box("stone",0,n/2-.02,0,e,n,t),a.box("stone",0,n+.06,0,e+.3,.14,t+.3),i&&n>.25){let r=Math.max(2,Math.round(n/.18)),o=.3;for(let c=0;c<r;c++){let l=n*(r-c)/r;a.box("stone",0,l/2,t/2+o*(c+.5),s,l,o)}}}function Oa(a,e){let{nx:t=3,nz:n=2,bay:i=3.6,h:s=4.4,floors:r=1,base:o=1,kind:c="hip",liftK:l=1,pyramid:h=!1,wallAll:u=!1}=e,f=t*i,p=n*(e.bayZ??i);fc(a,f+2.4,p+2.4,o,e.steps??!0);let m=o+.13,b=i,d=e.bayZ??i;for(let g=0;g<r;g++){a.push(0,m,0);let v=Eg(a,{nx:t,nz:n,bay:b,bayZ:d,h:g===0?s:s*.78,wallAll:u,balcony:g>0});a.pop();let _=g===r-1,y=m+v.top,S=1.5+b*.12,w=v.W/2+S,x=v.D/2+S;if(a.push(0,y,0),_?h||Math.abs(w-x)<.01?ca(a,{A:Math.max(w,x),B:Math.max(w,x),H:Math.max(w,x)*.95,lift:1*l}):ca(a,{A:Math.max(w,x),B:Math.min(w,x),H:Math.min(w,x)*.82,lift:.95*l,kind:c}):ca(a,{A:w,B:x,H:x*.8,lift:.75*l,kind:"ring",vMax:.42,nv:5}),a.pop(),m=y+(_?0:x*.8*Math.pow(.42,1.55)+.1),b*=.86,d*=.86,!_){let M=t*b+1.8,R=n*d+1.8;a.box("wood",0,m-.1,0,M,.24,R)}}return{W:f,D:p}}function ku(a,e){let{size:t=4.2,h:n=3.6,base:i=.6,tiers:s=2}=e;fc(a,t+1.6,t+1.6,i,!1);let r=i+.13;a.push(0,r,0);let o=Eg(a,{nx:1,nz:1,bay:t,h:n,open:!0});Vh(a,t+.2,t+.2,0,.7,1.6),a.pop();let c=r+o.top,l=t/2+1.5;if(s>1){a.push(0,c,0),ca(a,{A:l,B:l,H:l*.8,lift:.9,kind:"ring",vMax:.42,nv:5}),a.pop(),c+=l*.8*Math.pow(.42,1.55);let h=t*.72;a.push(0,c,0),a.box("beam",0,.6,0,h,1.2,h),a.box("dougong",0,1.45,0,h+.5,.5,h+.5),a.pop(),c+=1.7,a.push(0,c,0),ca(a,{A:h/2+1.3,B:h/2+1.3,H:(h/2+1.3)*1.05,lift:.85}),a.pop()}else a.push(0,c,0),ca(a,{A:l,B:l,H:l*.95,lift:.95}),a.pop()}function jh(a,e){let{size:t=6,floors:n=5,h:i=3.2,base:s=1.2}=e;fc(a,t+2.5,t+2.5,s,!0,2.2);let r=s+.13,o=t;for(let c=0;c<n;c++){let l=c===0?i*1.25:i;a.push(0,r,0),a.box("wall",0,l/2,0,o,l,o);for(let f of[0,Math.PI/2,Math.PI,-Math.PI/2])a.push(0,0,0,f),a.box(c===0&&f===0?"door":"lattice",0,l*.46,o/2+.02,o*.34,l*.55,.08),a.pop();a.box("dougong",0,l+.25,0,o+.5,.5,o+.5),a.pop();let h=r+l+.5,u=o/2+1.2+o*.05;a.push(0,h,0),c===n-1?ca(a,{A:u,B:u,H:u*1.1,lift:.75}):ca(a,{A:u,B:u,H:u*.7,lift:.7,kind:"ring",vMax:.4,nv:4}),a.pop(),r=h+u*.7*Math.pow(.4,1.55),o*=.86}}function Ag(a,e){let{w:t=8,d:n=5.2,h:i=3}=e;a.box("stone",0,.3,0,t+.3,.6,n+.3),a.box("plaster",0,.6+i/2,0,t,i,n),a.box("door",0,.6+1.05,n/2+.02,1.4,2.1,.06),a.box("lattice",-t*.3,.6+1.6,n/2+.02,1.2,.9,.06),a.box("lattice",t*.3,.6+1.6,n/2+.02,1.2,.9,.06);let s=n*.42,r=new rt,o=[];for(let c of[-1,1]){let l=c*t/2,h=[l,0,n/2],u=[l,0,-n/2],f=[l,s,0];c>0?o.push(...h,...u,...f):o.push(...h,...f,...u)}r.setAttribute("position",new it(o,3)),r.setAttribute("uv",new it([0,0,5,0,2.5,2,0,0,2.5,2,5,0],2)),r.computeVertexNormals(),ai.makeTranslation(0,.6+i,0),a.add("plaster",r,ai),a.push(0,.6+i,0),ca(a,{A:t/2,B:n/2+.9,H:s+.35,kind:"gable",lift:.5,gableOver:.6,nu:8,nv:6,thick:.22}),a.pop()}function _s(a,e){let t=document.createElement("canvas");return t.width=a,t.height=e,[t,t.getContext("2d")]}function Ms(a,e=!0,t=!0){let n=new Ei(a);return e&&(n.colorSpace=Rt),t&&(n.wrapS=n.wrapT=vn),n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=en,n}function Wh(a,e,t,n=.08,i=1){let s=i*9301+49297,r=()=>(s=(s*9301+49297)%233280)/233280;for(let o=0;o<e*t/60;o++){let c=r()*n;a.fillStyle=r()<.5?`rgba(0,0,0,${c})`:`rgba(255,240,220,${c*.6})`,a.fillRect(r()*e,r()*t,1+r()*3,1+r()*3)}for(let o=0;o<e/6;o++){let c=r()*e,l=t*(.2+r()*.6),h=a.createLinearGradient(0,0,0,l);h.addColorStop(0,`rgba(0,0,0,${n*.8})`),h.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=h,a.fillRect(c,0,1+r()*2,l)}}function Fu(a="lattice"){let[n,i]=_s(512,512),s=a==="door"?"#5b1d14":"#4a1a12",r=a==="door"?"#2a1a12":"#cdbf9f";i.fillStyle=s,i.fillRect(0,0,512,512);let o=4,c=512/o;for(let l=0;l<o;l++){let h=l*c,u=9,f=14,p=512*.6;i.fillStyle=r,i.fillRect(h+u,f,c-2*u,p-f),i.strokeStyle=s,i.lineWidth=4;let m=5,b=(c-2*u)/m;for(let g=1;g<m;g++)i.beginPath(),i.moveTo(h+u+g*b,f),i.lineTo(h+u+g*b,p),i.stroke();let d=Math.round((p-f)/b);for(let g=1;g<d;g++){let v=f+g*(p-f)/d;i.beginPath(),i.moveTo(h+u,v),i.lineTo(h+c-u,v),i.stroke()}i.lineWidth=2.5;for(let g=0;g<d;g+=2)for(let v=0;v<m;v+=2){let _=h+u+(v+.5)*b,y=f+(g+.5)*(p-f)/d;i.strokeRect(_-b*.25,y-b*.25,b*.5,b*.5)}i.fillStyle="#3d140d",i.fillRect(h+u,p+8,c-2*u,30),i.fillRect(h+u,p+48,c-2*u,512-p-62),i.strokeStyle="#7a3a24",i.lineWidth=3,i.strokeRect(h+u+10,p+60,c-2*u-20,512-p-86),a==="door"&&(l===1||l===2)&&(i.strokeStyle="#c9a25a",i.lineWidth=3,i.beginPath(),i.arc(h+(l===1?c-22:22),512*.52,9,0,Math.PI*2),i.stroke()),i.fillStyle="rgba(0,0,0,0.6)",i.fillRect(h,0,2,512)}return Wh(i,512,512,.1,a==="door"?3:2),Ms(n,!0,!1)}function Tg(){let[t,n]=_s(256,128);n.fillStyle="#6e2318",n.fillRect(0,0,256,128);let i=256/2,s="#1f4f5a",r="#2f6a46",o="#d8d0b8",c="#13252a",l=[[.86,.3,60],[.6,.62,100],[.32,.92,150]];for(let[h,u,f]of l){let p=128*h;n.fillStyle=c,n.fillRect(i-f/2-2,p-13,f+4,26),n.fillStyle=h>.5?r:s,n.fillRect(i-f/2,p-11,f,22),n.fillStyle=o,n.fillRect(i-f/2,p-11,f,2),n.fillStyle=s;for(let m of[-1,0,1])n.fillRect(i+m*f/2-9,p-20,18,9)}return n.fillStyle=r,n.fillRect(i-16,114,32,14),n.fillStyle=s,n.fillRect(0,0,256,10),n.fillStyle=o,n.fillRect(0,10,256,2),Wh(n,256,128,.12,5),Ms(t)}function Rg(){let[t,n]=_s(256,512);n.fillStyle="#6a1a12",n.fillRect(0,0,256,512),n.fillStyle="#4a120c",n.fillRect(256/2-2,0,4,512);for(let i=0;i<9;i++)for(let s=0;s<4;s++)for(let r of[0,1]){let o=r*256/2+18+s*92/3,c=40+i*432/8,l=n.createRadialGradient(o-2,c-2,1,o,c,8);l.addColorStop(0,"#f2d68c"),l.addColorStop(1,"#7a5520"),n.fillStyle=l,n.beginPath(),n.arc(o,c,7,0,Math.PI*2),n.fill()}return Wh(n,256,512,.14,7),Ms(t,!0,!1)}function Ig(){let[t,n]=_s(512,1024),i=n.createLinearGradient(0,0,512,1024);i.addColorStop(0,"#6d6a63"),i.addColorStop(1,"#55524c"),n.fillStyle=i,n.fillRect(0,0,512,1024),Wh(n,512,1024,.2,11),n.strokeStyle="rgba(30,28,25,0.7)",n.lineWidth=6,n.strokeRect(26,26,460,972);let s=(c,l=700)=>`${l} ${c}px "STKaiti", "KaiTi", "Kaiti SC", "\u6977\u4F53", "BiauKai", "Noto Serif CJK SC", "Songti SC", serif`;n.textAlign="center",n.textBaseline="middle";let r=(c,l,h,u,f)=>{n.font=s(u),n.fillStyle="rgba(255,250,235,0.25)",n.fillText(c,l+3,h+3),n.fillStyle=f,n.fillText(c,l,h)};return["\u767D","\u864E","\u5CAD"].forEach((c,l)=>r(c,512*.56,230+l*270,230,"#8f1f14")),[..."\u5C71\u9AD8\u5FC5\u6709\u602A\u5CAD\u5CFB\u5374\u751F\u7CBE"].forEach((c,l)=>r(c,512*.18,140+l*78,60,"#2a2724")),Ms(t,!0,!1)}function Cg(){let[e,t]=_s(1024,1024);t.clearRect(0,0,1024,1024);let n=1024/2,i=(o,c,l)=>{t.strokeStyle=`rgba(255,214,120,${l})`,t.lineWidth=c,t.beginPath(),t.arc(n,n,o,0,Math.PI*2),t.stroke()};i(1024*.47,10,1),i(1024*.47,34,.25),i(1024*.385,5,.9),t.font=`700 ${1024*.06}px "STKaiti", "KaiTi", "Kaiti SC", serif`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="rgba(255,226,150,1)";let s="\u5535\u561B\u5462\u53ED\u54AA\u543D",r=24;for(let o=0;o<r;o++){let c=o/r*Math.PI*2;t.save(),t.translate(n+Math.cos(c)*1024*.428,n+Math.sin(c)*1024*.428),t.rotate(c+Math.PI/2),t.fillText(s[o%6],0,0),t.restore()}return Ms(e,!0,!1)}function Ng(a){let[n,i]=_s(512,1024);i.clearRect(0,0,512,1024);let s=77,r=()=>(s=s*16807%2147483647)/2147483647,o=a.width,c=a.height,l=[[.02,.01,.17,.42],[.2,.01,.18,.4],[.37,.01,.14,.36],[.52,.01,.15,.36],[.68,.01,.16,.42],[.02,.6,.19,.4],[.21,.56,.17,.44],[.38,.6,.17,.4]],h=9;for(let u=0;u<h;u++){let f=(u+.3+r()*.4)*512/h,p=1024*(.45+r()*.55);i.strokeStyle="rgba(60,50,30,0.9)",i.lineWidth=2,i.beginPath(),i.moveTo(f,0);let m=[];for(let b=0;b<p;b+=8)f+=(r()-.5)*3,m.push([f,b]),i.lineTo(f,b);i.stroke();for(let[b,d]of m){if(r()>.85-.4*(d/p))continue;let g=l[Math.floor(r()*l.length)],v=16+r()*20;i.save(),i.translate(b,d),i.rotate((r()-.5)*2.2+Math.PI);let _=.6+r()*.5;i.filter=`brightness(${_})`,i.drawImage(a,g[0]*o,g[1]*c,g[2]*o,g[3]*c,-v*.3,0,v*.6,v*1.3),i.restore()}}return i.filter="none",Ms(n,!0,!1)}function Pg(){let[e,t]=_s(256,256);t.clearRect(0,0,256,256);let n=91,i=()=>(n=n*16807%2147483647)/2147483647;for(let s=0;s<26;s++){let r=30+i()*196,o=30+i()*196,c=9+i()*9,l=330+i()*25,h=72+i()*16;for(let u=0;u<5;u++){let f=u/5*Math.PI*2+i();t.fillStyle=`hsla(${l},70%,${h}%,1)`,t.beginPath(),t.ellipse(r+Math.cos(f)*c*.55,o+Math.sin(f)*c*.55,c*.55,c*.38,f,0,Math.PI*2),t.fill()}t.fillStyle="#f7e27a",t.beginPath(),t.arc(r,o,c*.18,0,Math.PI*2),t.fill()}return Ms(e,!0,!1)}function ka(a,e,t,n,i,s){let r=a/n,o=e/i,c=t/s,l=Math.sqrt(r*r+o*o+c*c),h=r/n,u=o/i,f=c/s,p=Math.sqrt(h*h+u*u+f*f);return p<1e-9?-Math.min(n,i,s):l*(l-1)/p}function Bu(a,e,t,n,i,s){return Math.sqrt((a/n)**2+(e/i)**2+(t/s)**2)}function pc(a,e,t,n,i,s,r,o,c,l){let h=a-n,u=e-i,f=t-s,p=r-n,m=o-i,b=c-s,d=ys((h*p+u*m+f*b)/(p*p+m*m+b*b),0,1);return Math.hypot(h-p*d,u-m*d,f-b*d)-l}function r1(a,e,t,n,i,s,r,o,c,l,h){let u=a-n,f=e-i,p=t-s,m=r-n,b=o-i,d=c-s,g=ys((u*m+f*b+p*d)/(m*m+b*b+d*d),0,1);return(Math.hypot(u-m*g,f-b*g,p-d*g)-(l+(h-l)*g))*.9}function Lg(a,e,t,n,i,s,r){let o=Math.abs(a)-n+r,c=Math.abs(e)-i+r,l=Math.abs(t)-s+r;return Math.hypot(Math.max(o,0),Math.max(c,0),Math.max(l,0))+Math.min(Math.max(o,c,l),0)-r}function mc(a,e,t,n){let i=a-n.x,s=t-n.z,r=Math.hypot(i,s);if(r>n.r0*1.6+30)return r-n.r0*1.4;let o=ys((e-n.y0)/(n.y1-n.y0),0,1),c=i/(r+1e-6),l=s/(r+1e-6),h=3*l-4*l*l*l,u=c*c-l*l,f=2*l*c,p=h*u+(4*c*c*c-3*c)*f,m=.13*(h*n.c+c*n.s)+.07*p+.11*Ft(c*1.4+n.seed,l*1.4+e/55),b=ti(n.r0,n.r1,Math.pow(o,n.pow||1))*(1+m)+n.bulge*Math.sin(o*3.1),d=r-b;return d=wn(d,e-n.y1-7*Ft(i/22+n.seed,s/22),9),d=wn(d,n.y0-40-e,4),d*.82}function Zt(a,e,t,n,i,s,r,o={}){return{x:a,z:e,r0:t,r1:n,y0:i,y1:s,seed:r,c:Math.cos(r),s:Math.sin(r),bulge:o.bulge??0,pow:o.pow??1}}function Pr(a,e,t,n){let i=12*Fh(a/92,e/118,t/92,3);i+=3.2*Tr(a/10.5,e/72,t/10.5)+1.4*Tr(a/4.2,e/26,t/4.2);let s=e/16.5+.7*Ft(a/64,t/64),r=s-Math.floor(s);return i+=1.25*gt(.55,.85,r)*(1-gt(.85,1,r)),i*n}var[Fg,Bg,zg]=Na,o1=[[.12,7.5,18],[.34,7.5,19],[.62,19,64],[.9,10,27],[1.12,9,20]],c1=[[.2,6,14],[.56,14,44],[.86,8,18]],qh=[];for(let[a,e,t]of o1)for(let n of[-1,1]){let i=n*85*Math.sin(a),s=-26+77*Math.cos(a);qh.push({ax:i,ay:7,az:s,bx:i*1.03,by:-t,bz:s+3+t*.05,r1:e,r2:.9})}var zu=-140,Xh=[];for(let a=0;a<=10;a++){let e=-1.35+2.7*a/10;Xh.push([104*Math.sin(e),zu-8*(1-Math.cos(e)),-44+92*Math.cos(e)])}for(let[a,e,t]of c1)for(let n of[-1,1]){let i=n*100*Math.sin(a),s=-44+88*Math.cos(a);qh.push({ax:i,ay:zu+12,az:s,bx:i*.98,by:zu+12+t,bz:s-2,r1:e,r2:.8})}function l1(a,e,t){let n=Math.abs(a),i=ka(a,e-150,t+84,182,128,122),s=ka(a,e-46,t+26,116,78,106);return s=wn(s,-(e+2),5),i=cn(i,s,34),i=cn(i,pc(n,e,t,96,80,24,174,52,-50,24),14),i=cn(i,pc(n,e,t,16,196,46,152,178,-4,19),12),i=cn(i,pc(n,e,t,40,128,56,104,104,40,11),9),i=cn(i,pc(a,e,t,0,182,44,0,104,76,14),16),i}function h1(a,e,t){let n=1e9;for(let i=0;i<Xh.length-1;i++){let s=Xh[i],r=Xh[i+1];n=Math.min(n,pc(a,e,t,s[0],s[1],s[2],r[0],r[1],r[2],21))}return n}function d1(a,e,t){let n=1e9;for(let i=0;i<qh.length;i++){let s=qh[i],r=a-s.ax;r>30||r<-30||(n=Math.min(n,r1(a,e,t,s.ax,s.ay,s.az,s.bx,s.by,s.bz,s.r1,s.r2)))}return n}function Gu(a,e,t,n){let i=a-Fg,s=e-Bg,r=t-zg,o=-22-75e-5*i*i+11*Ft(i/74,s/96);s>200&&(o-=(s-200)*.38),o+=70*gt(-128,-168,s)*(1-gt(110,190,Math.abs(i))),s<-168&&(o+=(-168-s)*.8);let c=(r-o)*.72,l=286-88e-5*i*i+40*Ft(i/170,r/170)+18*Ft(i/60,r/60);c=wn(c,(s-l)*.7,30),c=wn(c,-(r+540),30);let h=1e9,u=1e9;if(i>-270&&i<270&&s>-230&&s<330&&r>-345){h=l1(i,s,r),c=cn(c,h,34);let p=Math.abs(i);if(c=wn(c,-ka(p-80,s-150,r-36,40,33,72),7),c=wn(c,-ka(i,s-94,r-66,24,31,58),6),c=wn(c,-ka(i,s+66,r+46,154,70,215),9),s<-60&&s>-210&&p<150&&r>-100){let m=h1(i,s,r);c=cn(c,m,16),h=Math.min(h,m)}s<20&&s>-160&&p<120&&r>-70&&r<90&&(u=d1(i,s,r),c=cn(c,u,3))}return n&&(n[0]=h,n[1]=u),c}var Cr=[0,0];function u1(a,e,t){let n=Gu(a,e,t,Cr),i=Cr[0],s=Cr[1];if(Math.abs(n)>48)return n;let r=i<30?gt(26,2,i):0,o=s<12?gt(9,.5,s):0;r=Math.max(r,o);let c=Pr(a,e,t,1),l=1.6*Fh(a/26,e/26,t/26,2)+.5*Tr(a/7,e/7,t/7);return n-ti(c,l*(1-o*.8),r)}function f1(a,e,t){return Gu(a,e,t,null)}function p1(a,e,t,n,i,s,r){Gu(a,e,t,Cr);let o=Cr[0],c=Cr[1],l=o<40?gt(30,4,o):0;l=Math.max(l,c<14?gt(12,1,c):0),r[0]=l;let h=a-Fg,u=e-Bg,f=t-zg,p=Math.abs(h),m=Bu(h,u+66,f+46,154,70,215),b=gt(1.25,1.02,m)*gt(25,-95,f),d=gt(1.25,1.02,Bu(p-80,u-150,f-36,40,33,72))*gt(34,-12,f),g=gt(1.25,1.02,Bu(h,u-94,f-66,24,31,58))*gt(50,14,f);r[1]=Math.max(b,d,g),r[2]=.15*(1-l)}var Dg=[Zt(-176,-372,30,22,20,236,1.3,{bulge:4}),Zt(-196,-470,38,26,20,300,2.1),Zt(-150,-214,22,15,30,182,3.7,{bulge:3}),Zt(-222,-112,34,24,30,214,4.4),Zt(-186,-612,42,30,20,340,5.9),Zt(-238,-762,50,34,20,380,6.6),Zt(-200,-40,24,18,36,150,7.2)],Nr=[[-205,112,-262,22,3,16],[-196,64,-166,16,3,12],[-150,182,-214,13,3,13]];function Hg(a,e,t){let n=-210-48*Math.sin((t+300)/165)-22*Ft(t/92,.3)-Math.max(0,e-40)*.07,i=(a-n)*.78,s=252+125*gt(-80,-540,t)+46*Ft(t/210,a/210);i=wn(i,(e-s)*.72,24),i=wn(i,(t-112)*.8,30),i=wn(i,-(t+955),30);for(let r=0;r<Dg.length;r++)i=cn(i,mc(a,e,t,Dg[r]),16);for(let r=0;r<Nr.length;r++){let o=Nr[r],c=Lg(a-o[0]+o[3]*.4,e-o[1]+o[4]+6,t-o[2],o[3]*1.4,o[4]+6,o[5],2.5);i=cn(i,c,4);let l=Lg(a-o[0]-2,e-o[1]-16,t-o[2],o[3]*.9,14,o[5]*.92,4);i=wn(i,-l,5)}return i}function m1(a,e,t){let n=Hg(a,e,t);if(Math.abs(n)>44)return n;let i=0;for(let s=0;s<Nr.length;s++){let r=Nr[s],o=Math.hypot((a-r[0])/(r[3]+8),(e-r[1])/10,(t-r[2])/(r[5]+8));i=Math.max(i,gt(1.6,.9,o))}return n-Pr(a,e,t,1-i*.9)}var Hu=[Zt(-150,-598,40,27,0,296,1.1,{bulge:5}),Zt(-98,-662,30,21,0,238,2.7),Zt(-212,-696,50,35,0,338,3.9),Zt(-56,-726,22,15,0,186,4.8,{bulge:3}),Zt(-168,-520,26,20,0,214,5.5),Zt(-252,-568,34,26,0,276,6.3),Zt(-118,-772,34,24,10,262,7.7),Zt(-20,-792,18,13,10,150,8.9,{bulge:2})];for(let a of Hu)a.y0=Bh(a.x,a.z)-6;function g1(a,e,t){let n=1e9;for(let i=0;i<Hu.length;i++)n=cn(n,mc(a,e,t,Hu[i]),12);return Math.abs(n)>40?n:n-Pr(a,e,t,.8)}var Ug=[Zt(118,-70,36,26,-44,196,2.4,{bulge:5,pow:.7}),Zt(92,-18,16,11,-10,64,3.3),Zt(150,-118,24,18,-44,128,5.1)];function b1(a,e,t){let n=1e9;for(let i=0;i<Ug.length;i++)n=cn(n,mc(a,e,t,Ug[i]),14);return n=cn(n,ka(a-104,e-160,t+58,34,20,32),14),Math.abs(n)>40?n:n-Pr(a,e,t,.9)}var x1=Zt(zn.x,zn.z,30,25,-48,zn.y,1.9,{bulge:3});function Gg(a,e,t){let n=mc(a,e,t,x1);n=wn(n,e-zn.y,2);let i=Dt.span/2;for(let s of[-1,1]){let r=Dt.x+s*(i+9),o=ka(a-r,e+18,t-Dt.z,20,26,22);o=wn(o,e-Dt.y+.6,2),n=cn(n,o,6)}return n}function v1(a,e,t){let n=Gg(a,e,t);if(Math.abs(n)>30)return n;let i=gt(zn.y-8,zn.y-1,e);return n-Pr(a,e,t,.75*(1-i*.85))}var Og=(()=>{let a=Jt(77),e=[],t=0;for(;e.length<46&&t++<4e3;){let n=-2600+a()*5200,i=-3100+a()*2900;if(i>-1350&&n<330||i>-1700&&Math.abs(n)<520||e.some(c=>Math.hypot(c.x-n,c.z-i)<170))continue;let s=45+a()*75,r=Bh(n,i)-20,o=220+a()*520;e.push(Zt(n,i,s,s*(.55+a()*.25),r,r+o,a()*10,{bulge:a()*10,pow:.8+a()*.6}))}return e})();function y1(a,e,t){let n=1e9;for(let i=0;i<Og.length;i++){let s=Og[i],r=a-s.x,o=t-s.z,c=r*r+o*o,l=s.r0*1.7+60;if(c>l*l){n=Math.min(n,Math.sqrt(c)-s.r0*1.5);continue}n=cn(n,mc(a,e,t,s),20)}return Math.abs(n)>50?n:n-Pr(a*.62,e*.62,t*.62,1.25)}var Ir=a=>(e,t,n,i,s,r,o)=>{o[0]=0,o[1]=0,o[2]=a},kg=(()=>{let a=Jt(4242),e=[],t=(i,s,r)=>{let o=zh(i,s),c=r*(.8+a()*.5),l=r*(.45+a()*.35),h=r*(.7+a()*.5),u=a()*Math.PI*2,f=[];for(let p=0;p<4;p++){let m=a()*Math.PI*2,b=(a()-.3)*1.2;f.push([Math.cos(m)*Math.cos(b),Math.sin(b),Math.sin(m)*Math.cos(b),r*(.45+a()*.3)])}e.push({x:i,y:o-l*.35,z:s,rx:c,ry:l,rz:h,c:Math.cos(u),s:Math.sin(u),planes:f,R:Math.max(c,l,h)*1.15})},n=[[-24,26,2.6],[-31,31,1.5],[27,21,3.2],[33,27,1.7],[-14,6,1.9],[17,2,2.4],[-46,12,3.8],[48,4,3.4],[7,22,.9],[-6,28,.7],[12,30,.6]];for(let[i,s,r]of n)t(i,s,r);for(let i=0;i<26;i++){let s=Hn.at(30+i*34+a()*18),r=a()<.5?-1:1,o=3.6+a()*6;t(s.x-s.tz*r*o,s.z+s.tx*r*o,.7+a()*1.8)}for(let i=0;i<22;i++){let s=ni.at(200+i*38+a()*20),r=a()<.5?-1:1,o=6+a()*4;t(s.x-s.tz*r*o,s.z+s.tx*r*o,1.2+a()*2.5)}return e})();function _1(a,e,t){let n=1e9;for(let i=0;i<kg.length;i++){let s=kg[i],r=a-s.x,o=e-s.y,c=t-s.z,l=r*r+o*o+c*c;if(l>(s.R+6)*(s.R+6)){n=Math.min(n,Math.sqrt(l)-s.R);continue}let h=r*s.c+c*s.s,u=-r*s.s+c*s.c,f=ka(h,o,u,s.rx,s.ry,s.rz);for(let p of s.planes)f=wn(f,h*p[0]+o*p[1]+u*p[2]-p[3],s.R*.12);n=cn(n,f,.6)}return n>2?n:n-.22*Fh(a/2.2,e/2.2,t/2.2,3)-.05*Tr(a/.6,e/.6,t/.6)}var Vu={skull:{bounds:[-480,-30,-1430,480,640,-870],cell:{high:1.3,mid:2.2,low:3.2},sdf:u1,sdfAO:f1,attrib:p1,lipschitz:3.4},left:{bounds:[-730,0,-970,-120,470,125],cell:{high:2,mid:2.8,low:4},sdf:m1,sdfAO:Hg,attrib:Ir(.22),lipschitz:2},mid:{bounds:[-320,-20,-820,20,350,-470],cell:{high:1.6,mid:2.4,low:3.4},sdf:g1,attrib:Ir(.32),lipschitz:2},right:{bounds:[20,-50,-190,200,225,40],cell:{high:1.1,mid:1.6,low:2.4},sdf:b1,attrib:Ir(.2),lipschitz:2},gorge:{bounds:[30,-52,-600,190,14,-205],cell:{high:1,mid:1.5,low:2.2},sdf:v1,sdfAO:Gg,attrib:Ir(.25),lipschitz:2},far:{bounds:[-2800,-60,-3300,2800,1e3,-220],cell:{high:7,mid:9,low:12},sdf:y1,attrib:Ir(.62),lipschitz:2.2},boulders:{bounds:[-130,-50,-1e3,260,60,60],cell:{high:.3,mid:.45,low:.7},sdf:_1,attrib:Ir(.14),lipschitz:2}};function Oi(a,e,t=e){let n=a.clone();return n.repeat.set(1/e,1/t),n.wrapS=n.wrapT=vn,n.needsUpdate=!0,n}function M1(a){let e=n=>new qt({roughness:.85,metalness:0,...n}),t=Tg();return t.repeat.set(1/1.3,1),{roof:e({map:Oi(a.roof_diff,2.6),normalMap:Oi(a.roof_nor,2.6),color:9278360,roughness:.78,side:Gt}),wood:e({map:Oi(a.planks_diff,2.2),color:7757902,side:Gt}),trim:e({map:Oi(a.planks_diff,2.2),color:3811872,side:Gt}),ridge:e({map:Oi(a.roof_diff,1.4),color:5396316,roughness:.75}),gold:e({color:13213776,metalness:.85,roughness:.35}),pillar:e({map:Oi(a.redwood_diff,1.6),color:11549222,roughness:.5}),beam:e({map:Oi(a.redwood_diff,1.6),color:7743771,roughness:.6}),dougong:e({map:t,roughness:.7}),wall:e({map:Oi(a.plaster_diff,2.5),color:15260870,roughness:.92}),plaster:e({color:14209216,roughness:.92}),door:e({map:Fu("door"),roughness:.7}),lattice:e({map:Fu("lattice"),roughness:.75}),stone:e({map:Oi(a.stonewall_diff,2.4),normalMap:Oi(a.stonewall_nor,2.4),color:13947080,roughness:.9}),gatedoor:e({map:Rg(),roughness:.6}),stele:e({map:Ig(),roughness:.85})}}function S1(a,{W:e=28,D:t=14,H:n=9.5,archW:i=5.4,archH:s=7.2}){let r=i/2,o=new Ji;o.moveTo(-e/2,-1.5),o.lineTo(-r,-1.5),o.lineTo(-r,s-r),o.absarc(0,s-r,r,Math.PI,0,!0),o.lineTo(r,-1.5),o.lineTo(e/2,-1.5),o.lineTo(e/2-.6,n),o.lineTo(-e/2+.6,n),o.closePath();let c=new Ea(o,{depth:t,bevelEnabled:!1,curveSegments:18});c.translate(0,0,-t/2),a.add("stone",c);let l=new Ji;l.absarc(0,s-r,r+.9,Math.PI,0,!0),l.lineTo(r,s-r),l.absarc(0,s-r,r,0,Math.PI,!1),l.closePath();let h=new Ea(l,{depth:.35,bevelEnabled:!1,curveSegments:18});for(let u of[1,-1]){let f=new Ve().makeTranslation(0,0,u>0?t/2:-t/2-.35);a.add("stone",h.clone(),f)}a.box("gatedoor",0,s/2-.75,0,i,s+1.5,.3);for(let u of[1,-1]){a.box("stone",0,n+.35,u*(t/2-.4),e-1.2,.7,.8);let f=Math.floor((e-2)/2.2);for(let p=0;p<=f;p++)a.box("stone",-(e-2)/2+p*(e-2)/f,n+1.15,u*(t/2-.4),1.1,.9,.8)}a.push(0,n,0),Oa(a,{nx:5,nz:2,bay:3.7,h:4.6,floors:2,base:.4,steps:!1}),a.pop()}function w1(a,{span:e=44,W:t=5.2}){let n=e+18,i=n/2,s=y=>.7*(1-(y/i)**2),r=16,o=-15,c=-1.7,l=c-o,h=(r*r+l*l)/(2*l),u=c-h,f=Math.asin((o-u)/h),p=new Ji;p.moveTo(-i,-26),p.lineTo(-r,-26),p.lineTo(-r,o);let m=28;for(let y=0;y<=m;y++){let S=Math.PI-f-(Math.PI-2*f)*y/m;p.lineTo(h*Math.cos(S),u+h*Math.sin(S))}p.lineTo(r,-26),p.lineTo(i,-26);for(let y=0;y<=20;y++){let S=i-n*y/20;p.lineTo(S,s(S))}p.closePath();let b=new Ea(p,{depth:t,bevelEnabled:!1});b.translate(0,0,-t/2),a.add("stone",b);let d=new Ji,g=[];for(let y=0;y<=m;y++){let S=f+(Math.PI-2*f)*y/m;g.push([Math.cos(S),Math.sin(S)])}d.moveTo(g[0][0]*(h+1.3),u+g[0][1]*(h+1.3));for(let y of g)d.lineTo(y[0]*(h+1.3),u+y[1]*(h+1.3));for(let y=g.length-1;y>=0;y--)d.lineTo(g[y][0]*h,u+g[y][1]*h);d.closePath();let v=new Ea(d,{depth:.3,bevelEnabled:!1});for(let y of[1,-1])a.add("stone",v.clone(),new Ve().makeTranslation(0,0,y>0?t/2:-t/2-.3));let _=18;for(let y of[1,-1]){let S=y*(t/2-.22);for(let w=0;w<=_;w++){let x=-i+2+(n-4)*w/_;if(a.box("stone",x,s(x)+.65,S,.32,1.3,.32),a.box("stone",x,s(x)+1.38,S,.22,.2,.22),w<_){let M=-i+2+(n-4)*(w+1)/_,R=(x+M)/2,A=Math.atan2(s(M)-s(x),M-x),L=new Ai(M-x-.3,.75,.14),D=new Ve().compose(new C(R,s(R)+.5,S),new Nt().setFromAxisAngle(new C(0,0,1),A),new C(1,1,1));a.add("stone",L,D)}}}}function E1(a){a.box("stone",0,.35,0,2.2,.7,1.3),a.box("stone",0,2.2,0,1.6,3.2,.42),a.box("stele",0,2.2,.215,1.52,3.1,.02);let e=new Wn(.82,.82,.46,16,1,!1,-Math.PI/2,Math.PI);e.rotateX(Math.PI/2),a.add("stone",e,new Ve().makeTranslation(0,3.8,0))}function Vg({T:a,heightAt:e}){let t=new Gh,n=[],i=(g,v,_=null)=>[g,_??e(g,v),v],s=(g,v,_,y,S,w,...x)=>{t.push(v,_,y,S),g(t,...x),t.pop(),n.push([v,y,w])},[r,o,c]=Nr;s(Oa,r[0]+2,r[1],r[2]+1,Math.PI/2-.25,14,{nx:3,nz:2,bay:4.2,h:4.8,floors:3,base:.6}),s(Oa,o[0]+4,o[1],o[2],Math.PI/2-.3,9,{nx:3,nz:1,bay:3.5,bayZ:4,h:4,floors:2,base:.5}),s(ku,c[0],c[1],c[2],.3,7,{size:4.6,h:3.6,base:.5,tiers:2}),s(S1,Ln.x,Ln.y-.2,Ln.z,.22,20,{});{let[g,v,_]=i(-116,-352);s(Oa,g,v,_,.3,14,{nx:5,nz:3,bay:3.8,h:5,floors:1,base:1.4})}{let[g,v,_]=i(-150,-318);s(jh,g,v,_,.4,7,{size:6.4,floors:5,h:3.4})}{let[g,v,_]=i(-64,-344);s(Oa,g,v,_,.1,9,{nx:3,nz:2,bay:3.4,h:4.2,floors:2,base:.9})}s(Oa,zn.x-2,zn.y,zn.z+2,-.55,12,{nx:3,nz:2,bay:3.9,h:4.6,floors:2,base:.8}),s(ku,zn.x+12,zn.y,zn.z-12,-.5,5,{size:3.6,h:3.2,base:.4,tiers:1});{let[g,v,_]=i(-108,-548);s(jh,g,v,_,.2,8,{size:7.5,floors:7,h:3.6})}{let[g,v,_]=i(-40,-610);s(Oa,g,v,_,.1,12,{nx:5,nz:2,bay:4,h:5,floors:2,base:1.2})}{let[g,v,_]=i(236,-470);s(jh,g,v,_,-.3,6,{size:6,floors:5,h:3.2})}let l=Jt(808),h=_r(Mr(Th,3)),u=[0,0,0,0],f=[],p=0;for(;f.length<15&&p++<3e3;){let g=l()*Math.PI*2,v=10+l()*(Bn.r+6),_=Bn.x+Math.cos(g)*v*1.1,y=Bn.z+Math.sin(g)*v;if(h.closest(_,y,u),u[0]<7.5||Math.hypot(_-Sn.x,y-Sn.z)<Sn.r+6||f.some(D=>Math.hypot(D[0]-_,D[1]-y)<11.5))continue;let S=e(_-4,y),w=e(_+4,y),x=e(_,y-4),M=e(_,y+4);if(Math.max(S,w,x,M)-Math.min(S,w,x,M)>1.6)continue;let R=h.at(u[1]),A=Math.atan2(R.x-_,R.z-y),L=Math.min(S,w,x,M)-.1;f.push([_,y]),s(Ag,_,L,y,A,6,{w:7+l()*3,d:4.8+l()*1.4,h:2.8+l()*.5})}t.push(Dt.x,Dt.y,Dt.z,0),w1(t,{span:Dt.span,W:Dt.width}),t.pop();{let[g,v,_]=i(13,10);s(E1,g,v-.25,_,.35,3)}let m=M1(a),b=t.build(m);b.name="architecture";let d=0;return b.traverse(g=>{g.isMesh&&(d+=g.geometry.attributes.position.count/3)}),console.log(`[scene] architecture ${b.children.length} meshes, ${(d/1e3).toFixed(0)}k tris, ${f.length} houses`),{group:b,placed:n,materials:m}}var Lr={twig:[{u0:0,v0:0,u1:.2109,v1:1,fill:.74,px:9993},{u0:.3086,v0:.4023,u1:.6406,v1:.7813,fill:.23,px:1787},{u0:.6406,v0:.4531,u1:.9531,v1:.832,fill:.19,px:1371},{u0:.6523,v0:.043,u1:.9375,v1:.3711,fill:.16,px:916},{u0:.1914,v0:.0508,u1:.4102,v1:.3164,fill:.19,px:663},{u0:.3125,v0:.707,u1:.9844,v1:1,fill:.05,px:650},{u0:.4961,v0:.2578,u1:.6289,v1:.4023,fill:.34,px:376},{u0:.3867,v0:.2891,u1:.4609,v1:.3828,fill:.44,px:165},{u0:.5391,v0:.0977,u1:.5898,v1:.2305,fill:.4,px:140},{u0:.2383,v0:.8086,u1:.2813,v1:.9805,fill:.32,px:121},{u0:.2109,v0:.8164,u1:.2344,v1:.9805,fill:.51,px:82}],leaves:[{u0:.1602,v0:.0156,u1:.3398,v1:.3945,fill:.64,px:2658},{u0:.2109,v0:.5742,u1:.3594,v1:1,fill:.6,px:2343},{u0:.0117,v0:.625,u1:.1875,v1:.9805,fill:.6,px:2297},{u0:.0117,v0:.0195,u1:.1484,v1:.4102,fill:.64,px:2076},{u0:.6914,v0:.0195,u1:.8203,v1:.418,fill:.61,px:1883},{u0:.5117,v0:.0469,u1:.6523,v1:.3672,fill:.67,px:1833},{u0:.418,v0:.6016,u1:.5664,v1:1,fill:.5,px:1828},{u0:.3555,v0:.0313,u1:.4883,v1:.3633,fill:.62,px:1643}],grassblade:[{u0:.7617,v0:.0781,u1:.9531,v1:.6211,fill:.39,px:2502},{u0:.0898,v0:.5469,u1:.832,v1:.7734,fill:.14,px:1487},{u0:.2188,v0:.7461,u1:.4727,v1:.8945,fill:.46,px:1039},{u0:.6094,v0:.7578,u1:.8164,v1:.8633,fill:.47,px:596},{u0:.2656,v0:.8867,u1:.4688,v1:1,fill:.33,px:463},{u0:.6016,v0:.8867,u1:.7852,v1:1,fill:.36,px:452},{u0:.1406,v0:.4805,u1:.4609,v1:.6211,fill:.13,px:364},{u0:.1797,v0:.0352,u1:.3086,v1:.3438,fill:.14,px:328},{u0:.5078,v0:.0508,u1:.8242,v1:.2148,fill:.1,px:307},{u0:.7266,v0:.1563,u1:.7773,v1:.5508,fill:.28,px:305},{u0:.0156,v0:.6211,u1:.082,v1:.7734,fill:.55,px:303},{u0:.707,v0:.2109,u1:.75,v1:.5898,fill:.32,px:272},{u0:.3242,v0:.3438,u1:.4414,v1:.4727,fill:.3,px:260},{u0:.5586,v0:.5547,u1:.6602,v1:.6484,fill:.48,px:253},{u0:.4297,v0:0,u1:.5898,v1:.0664,fill:.37,px:233},{u0:.2695,v0:.2852,u1:.4883,v1:.418,fill:.13,px:228},{u0:.0703,v0:.8945,u1:.1563,v1:1,fill:.35,px:184},{u0:.6406,v0:.2891,u1:.6758,v1:.4922,fill:.42,px:146},{u0:.25,v0:.293,u1:.3594,v1:.3711,fill:.28,px:132},{u0:.2734,v0:.4258,u1:.3438,v1:.4961,fill:.49,px:125},{u0:.3164,v0:.6094,u1:.3594,v1:.6914,fill:.65,px:111},{u0:.5,v0:.8438,u1:.5508,v1:.9063,fill:.68,px:105},{u0:.4727,v0:.2461,u1:.5391,v1:.3047,fill:.5,px:97},{u0:.6797,v0:.2891,u1:.707,v1:.5156,fill:.32,px:89},{u0:.2891,v0:.2188,u1:.3594,v1:.2852,fill:.36,px:86},{u0:.8477,v0:.0313,u1:.8828,v1:.1641,fill:.33,px:74},{u0:.5469,v0:.3398,u1:.6133,v1:.4375,fill:.21,px:71},{u0:.3984,v0:.4492,u1:.4609,v1:.5039,fill:.41,px:69},{u0:.832,v0:.6172,u1:.9336,v1:.6602,fill:.31,px:66},{u0:.1289,v0:.2617,u1:.1914,v1:.3086,fill:.46,px:65}],fern:[{u0:.3086,v0:.0195,u1:.4609,v1:.7656,fill:.41,px:2861},{u0:.0859,v0:.1094,u1:.2383,v1:.918,fill:.38,px:2855},{u0:.7188,v0:.1055,u1:.8398,v1:.7031,fill:.45,px:1985},{u0:.5391,v0:.0234,u1:.6641,v1:.5039,fill:.39,px:1403},{u0:.5078,v0:.5078,u1:.6328,v1:.9688,fill:.4,px:1382},{u0:.7188,v0:.6875,u1:.832,v1:.7695,fill:.33,px:167},{u0:.7539,v0:.7852,u1:.8203,v1:.8516,fill:.29,px:66}],flower:[{u0:0,v0:0,u1:1,v1:1,fill:.92,px:60195},{u0:.3867,v0:.8633,u1:.4805,v1:.9258,fill:.61,px:188},{u0:.0859,v0:.8594,u1:.168,v1:.9219,fill:.68,px:182},{u0:.6289,v0:.8555,u1:.7188,v1:.9375,fill:.4,px:158},{u0:.1289,v0:.7773,u1:.2148,v1:.8281,fill:.69,px:151},{u0:.2148,v0:.832,u1:.2656,v1:.9219,fill:.65,px:151},{u0:.3828,v0:.7969,u1:.4375,v1:.8672,fill:.58,px:112},{u0:.3008,v0:.8711,u1:.3477,v1:.9414,fill:.63,px:100}]};var qg=(a,e)=>[e.u0*a.width,e.v0*a.height,(e.u1-e.u0)*a.width,(e.v1-e.v0)*a.height];function Wu(a){let e=new Ei(a);return e.colorSpace=Rt,e.anisotropy=8,e}function T1(a){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),i=Jt(5),s=[1,2,3,4,6].map(r=>Lr.twig[r]);for(let r=0;r<34;r++){let o=s[Math.floor(i()*s.length)],[c,l,h,u]=qg(a,o),f=i()*Math.PI*2,p=i()*512*.22,m=512*(.32+i()*.2);n.save(),n.translate(512/2+Math.cos(f)*p,512/2+Math.sin(f)*p*.8),n.rotate(f+Math.PI/2+(i()-.5)*.8),n.filter=`brightness(${.55+i()*.6}) saturate(1.1)`,n.drawImage(a,c,l,h,u,-m/2,-m*.9,m,m*u/h),n.restore()}return Wu(t)}function jg(a,e=0){let n=document.createElement("canvas");n.width=n.height=512;let i=n.getContext("2d"),s=Jt(11+e);for(let r=0;r<120;r++){let o=Lr.leaves[Math.floor(s()*Lr.leaves.length)],[c,l,h,u]=qg(a,o),f=s()*Math.PI*2,p=Math.sqrt(s())*512*.36,m=512*(.07+s()*.05)*(.7+p/512);i.save(),i.translate(512/2+Math.cos(f)*p,512/2+Math.sin(f)*p),i.rotate(f+Math.PI/2+(s()-.5)*1.2),i.filter=`brightness(${.45+p/512*1.1+s()*.25}) hue-rotate(${e+(s()-.5)*16}deg)`,i.drawImage(a,c,l,h,u,-m*.35,-m,m*.7,m*.7*u/h),i.restore()}return Wu(n)}function R1(){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d"),i=Jt(23);for(let s=0;s<9;s++){let r=256*(.15+i()*.7),o=256*(.08+i()*.45);n.strokeStyle=`rgba(${70+i()*30},${110+i()*30},50,1)`,n.lineWidth=2,n.beginPath(),n.moveTo(256/2+(i()-.5)*20,256),n.quadraticCurveTo(r+(i()-.5)*30,(256+o)/2,r,o),n.stroke();let c=9+i()*7;for(let l=0;l<5;l++){let h=l/5*Math.PI*2+i(),u=88+i()*10;n.fillStyle=`hsl(${50+i()*20},${20+i()*20}%,${u}%)`,n.beginPath(),n.ellipse(r+Math.cos(h)*c*.55,o+Math.sin(h)*c*.5,c*.55,c*.33,h,0,Math.PI*2),n.fill()}n.fillStyle="#e8c640",n.beginPath(),n.arc(r,o,c*.2,0,Math.PI*2),n.fill()}return Wu(t)}function Dr(a){let e=a.length,t=new Float32Array(e*12),n=new Float32Array(e*12),i=new Float32Array(e*8),s=new Float32Array(e*12),r=new Uint32Array(e*6);a.forEach((c,l)=>{let{o:h,r:u,u:f,nrm:p,rect:m=[0,0,1,1],shade:b=1,bottom:d=!1}=c,g=d?[[-1,0],[1,0],[1,1],[-1,1]]:[[-1,-1],[1,-1],[1,1],[-1,1]],v=[[m[0],m[1]],[m[2],m[1]],[m[2],m[3]],[m[0],m[3]]];g.forEach(([_,y],S)=>{let w=(l*4+S)*3;t[w]=h[0]+u[0]*_+f[0]*y,t[w+1]=h[1]+u[1]*_+f[1]*y,t[w+2]=h[2]+u[2]*_+f[2]*y;let x=typeof p=="function"?p(t[w],t[w+1],t[w+2]):p;n[w]=x[0],n[w+1]=x[1],n[w+2]=x[2];let M=typeof b=="function"?b(y):b;s[w]=M,s[w+1]=M,s[w+2]=M,i[(l*4+S)*2]=v[S][0],i[(l*4+S)*2+1]=v[S][1]}),r.set([l*4,l*4+1,l*4+2,l*4,l*4+2,l*4+3],l*6)});let o=new rt;return o.setAttribute("position",new ot(t,3)),o.setAttribute("normal",new ot(n,3)),o.setAttribute("uv",new ot(i,2)),o.setAttribute("color",new ot(s,3)),o.setIndex(new ot(r,1)),o}var gc=a=>{let e=Math.hypot(a[0],a[1],a[2])||1;return[a[0]/e,a[1]/e,a[2]/e]};function Kh(a,e,t,n=6){let i=new Yi(a.map(u=>new C(...u))),s=Math.max(2,a.length),r=new Aa(i,s,1,n,!1),o=r.attributes.position,c=i.computeFrenetFrames(s,!1);for(let u=0;u<=s;u++){let f=u/s,p=i.getPointAt(f),m=e+(t-e)*f;for(let b=0;b<=n;b++){let d=u*(n+1)+b,g=o.getX(d)-p.x,v=o.getY(d)-p.y,_=o.getZ(d)-p.z;o.setXYZ(d,p.x+g*m,p.y+v*m,p.z+_*m)}}r.computeVertexNormals();let l=r.attributes.uv,h=i.getLength();for(let u=0;u<l.count;u++)l.setXY(u,l.getY(u)*Math.PI*2*e,l.getX(u)*h);return r}function I1(a,e){let t=Jt(a),n=[],i=0,s=0,r=(t()-.5)*.25,o=t()*Math.PI*2;for(let p=0;p<=5;p++){let m=p/5;i+=Math.cos(o)*r*e/5+(t()-.5)*.5,s+=Math.sin(o)*r*e/5+(t()-.5)*.5,n.push([i,m*e,s])}let c=[Kh(n,e*.028,e*.008,6)],l=[],h=[i*.6,e*.78,s*.6],u=(p,m,b)=>gc([p-h[0],(m-h[1])*1.4+2.5,b-h[2]]),f=4+Math.floor(t()*3);for(let p=0;p<f;p++){let m=.5+.5*p/(f-1),b=n[Math.min(5,Math.round(m*5))],d=p===f-1?1:2+Math.floor(t()*2);for(let g=0;g<d;g++){let v=t()*Math.PI*2,_=(p===f-1?.6:1)*e*(.22+t()*.16)*(1.15-m*.5),y=b[0]+Math.cos(v)*_,S=b[2]+Math.sin(v)*_,w=b[1]+(t()-.3)*e*.06;p<f-1&&c.push(Kh([b,[(b[0]+y)/2,b[1]+e*.03,(b[2]+S)/2],[y,w,S]],e*.011,e*.004,4));let x=e*(.17+t()*.08)*(p===f-1?1.25:1);for(let R=0;R<3;R++){let A=t()*Math.PI,L=(t()-.5)*.5,D=[Math.cos(A)*x,L*x,Math.sin(A)*x],U=[-Math.sin(A)*x*.85,(t()-.5)*.4*x,Math.cos(A)*x*.85];l.push({o:[y+(t()-.5)*x*.4,w+R*x*.12,S+(t()-.5)*x*.4],r:D,u:U,nrm:u,shade:.75+.25*m+(R===2?.1:0)})}let M=t()*Math.PI;l.push({o:[y,w+x*.1,S],r:[Math.cos(M)*x,0,Math.sin(M)*x],u:[0,x*.55,0],nrm:u,shade:.8})}}return{wood:uc(c.map(p=>p.toNonIndexed())),leaves:Dr(l)}}function C1(a,e){let t=Jt(a),n=[(t()-.5)*1.2,e*.42,(t()-.5)*1.2],i=[Kh([[0,0,0],[n[0]*.5,e*.2,n[2]*.5],n],e*.035,e*.018,7)],s=[n[0],e*.68,n[2]],r=e*.36;for(let h=0;h<4;h++){let u=h/4*Math.PI*2+t();i.push(Kh([n,[n[0]+Math.cos(u)*r*.5,e*.62,n[2]+Math.sin(u)*r*.5],[n[0]+Math.cos(u)*r*.8,e*.8,n[2]+Math.sin(u)*r*.8]],e*.016,e*.005,5))}let o=[],c=(h,u,f)=>gc([h-s[0],u-s[1]+r*.5,f-s[2]]),l=26;for(let h=0;h<l;h++){let u=1-2*(h+.5)/l,f=Math.sqrt(1-u*u),p=h*2.39996,m=[s[0]+Math.cos(p)*f*r,s[1]+u*r*(u<0?.6:.85),s[2]+Math.sin(p)*f*r],b=r*(.55+t()*.25),d=t()*Math.PI,g=[Math.cos(d)*b,(t()-.5)*b*.6,Math.sin(d)*b],v=[-Math.sin(d)*b*(t()-.5),b*.9,Math.cos(d)*b*(t()-.5)];o.push({o:m,r:g,u:v,nrm:c,shade:.62+.38*(u*.5+.5)})}return{wood:uc(i.map(h=>h.toNonIndexed())),leaves:Dr(o)}}function N1(a,e){let t=Jt(a),n=[],i=[0,e*.45,0],s=(r,o,c)=>gc([r-i[0],o-i[1]+e*.4,c-i[2]]);for(let r=0;r<9;r++){let o=r/9*Math.PI*2+t()*.5,c=e*.32*t(),l=e*(.45+t()*.2);n.push({o:[Math.cos(o)*c,e*(.38+t()*.25),Math.sin(o)*c],r:[Math.cos(o+1.57)*l,0,Math.sin(o+1.57)*l],u:[Math.cos(o)*l*.3,l*.85,Math.sin(o)*l*.3],nrm:s,shade:.7+t()*.3})}return{leaves:Dr(n)}}function Wg(a,e,t,n=3,i=1){let s=Jt(i),r=[];for(let o=0;o<n;o++){let c=o/n*Math.PI+s()*.3;r.push({o:[0,0,0],r:[Math.cos(c)*e/2,0,Math.sin(c)*e/2],u:[(s()-.5)*.2*t,t,(s()-.5)*.2*t],nrm:[0,1,0],rect:a,bottom:!0,shade:l=>.72+.28*l})}return Dr(r)}function Fa(a,e,t={}){let n=new qt({map:a,alphaTest:t.alphaTest??.42,side:Gt,roughness:.82,metalness:0,vertexColors:!0,color:t.color??16777215,envMapIntensity:t.env??.75}),i=t.sway??1;return n.onBeforeCompile=s=>{s.uniforms.uTime=e,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
			{
				#ifdef USE_INSTANCING
					vec3 ip = instanceMatrix[ 3 ].xyz;
				#else
					vec3 ip = vec3( 0.0 );
				#endif
				float ph = ip.x * 0.07 + ip.z * 0.11;
				float h = max( position.y, 0.0 );
				float w = sin( uTime * 1.7 + ph + position.x * 0.4 ) * 0.6 + sin( uTime * 3.1 + ph * 1.7 ) * 0.25;
				transformed.x += w * 0.012 * h * ${i.toFixed(3)};
				transformed.z += cos( uTime * 1.3 + ph ) * 0.008 * h * ${i.toFixed(3)};
			}`),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
			normal = normalize( vNormal );`)},n.customProgramCacheKey=()=>"foliage"+i,n}function Xg(a,e,t,n,i){let s=n;for(let r=0;r<90&&s>i;r++){let o=a(e,s,t);if(o<.4)return s;s-=Math.max(.5,o*.55)}return null}function ju(a,e,t,n,i=.8){let s=a(e+i,t,n)-a(e-i,t,n),r=a(e,t+i,n)-a(e,t-i,n),o=a(e,t,n+i)-a(e,t,n-i);return gc([s,r,o])}function Kg({T:a,terrain:e,placed:t,time:n,Q:i}){let s=performance.now(),r=new Ut;r.name="vegetation";let o=Jt(1234),c=e.heightAt,l=(re,ue,ye=0)=>t.some(Re=>Math.hypot(Re[0]-re,Re[1]-ue)<Re[2]+ye),h=(re,ue)=>Math.hypot(c(re+1.5,ue)-c(re-1.5,ue),c(re,ue+1.5)-c(re,ue-1.5))/(2*1.5),u=T1(a.twig.image),f=jg(a.leaves.image,0),p=jg(a.leaves.image,-25),m=Pg(),b=R1(),d=new qt({map:a.bark_diff,normalMap:a.bark_nor,color:10127994,roughness:.95});a.bark_diff.repeat.set(1/1.2,1/2.5),a.bark_nor.repeat.copy(a.bark_diff.repeat);let g=Fa(u,n,{color:12108964}),v=Fa(f,n,{color:13030560}),_=Fa(p,n,{color:11583624}),y=Fa(m,n,{alphaTest:.5}),S=Fa(a.grassblade,n,{color:13164688,alphaTest:.38,sway:2.2,env:.7}),w=Fa(b,n,{alphaTest:.4,sway:2}),x=Fa(a.fern,n,{alphaTest:.4,color:10530944,sway:1.2}),M=[101,102,103,104].map((re,ue)=>I1(re,11+ue*2.5)),R=[201,202,203].map((re,ue)=>C1(re,9+ue*2.2)),A=[301,302].map((re,ue)=>N1(re,2.2+ue*.8)),L=new Map,D=(re,ue,ye,Re,nt,O=!0)=>{L.has(re)||L.set(re,{geo:ue,mat:ye,list:[],shadow:O}),L.get(re).list.push([Re.clone(),nt])},U=new Ve,N=new Nt,F=new C,W=new C,j=new C(0,1,0),H=new Fe,G=(re,ue,ye,Re,nt,O)=>{if(N.setFromAxisAngle(j,O),U.compose(W.set(ue,ye,Re),N,F.set(nt,nt*(.9+o()*.2),nt)),H.setHSL(.27+(o()-.5)*.06,.32+o()*.2,.4+o()*.12).multiplyScalar(2.2),re==="pine"){let Xe=Math.floor(o()*M.length);D("pw"+Xe,M[Xe].wood,d,U,null),D("pl"+Xe,M[Xe].leaves,g,U,H.clone())}else if(re==="broad"){let Xe=Math.floor(o()*R.length),Ze=o()<.5?v:_;D("bw"+Xe,R[Xe].wood,d,U,null),D("bl"+Xe+Ze.uuid,R[Xe].leaves,Ze,U,H.clone())}else if(re==="blossom"){let Xe=Math.floor(o()*R.length);D("bw"+Xe,R[Xe].wood,d,U,null),D("bb"+Xe,R[Xe].leaves,y,U,new Fe(1,1,1))}else{let Xe=Math.floor(o()*A.length);D("sh"+Xe+(re==="pinkbush"?"p":""),A[Xe].leaves,re==="pinkbush"?y:o()<.5?v:_,U,re==="pinkbush"?new Fe(1,1,1):H.clone())}},q=i.treeStep,Y=e.maps,ce=0;for(let re=Y.z0+10;re<Y.z0+Y.d-10;re+=q)for(let ue=Y.x0+10;ue<Y.x0+Y.w-10;ue+=q){let ye=ue+(o()-.5)*q*.9,Re=re+(o()-.5)*q*.9,nt=e.maskAt(ye,Re,3),O=e.maskAt(ye,Re,0),Xe=e.maskAt(ye,Re,1),Ze=e.maskAt(ye,Re,2),lt=h(ye,Re),me=nt*.85+.03;if(Ze>.3&&(me*=.05),O>.05||Xe>.05||lt>1.3||o()>me)continue;let mt=ye-Pi.pos[0],Oe=Re-Pi.pos[2],Qe=Math.hypot(mt,Oe),P=Oe<0&&Math.abs(mt)<-Oe*.95+25&&Qe<260;if(Qe<30||l(ye,Re,3))continue;let E=c(ye,Re)-.3;if(P){o()<.25&&G("bush",ye,E,Re,.7+o()*.6,o()*6.28);continue}let K=o()<.6?"pine":o()<.75?"broad":"bush";if(G(K,ye,E,Re,.8+o()*.6,o()*6.28),ce++,o()<.5){let pe=o()*6.28,le=3+o()*4,Se=ye+Math.cos(pe)*le,Me=Re+Math.sin(pe)*le;e.maskAt(Se,Me,0)<.05&&!l(Se,Me,1)&&G("bush",Se,c(Se,Me)-.2,Me,.8+o()*.8,o()*6.28)}}let xe=0,Z=[["left",-700,-200,-950,110,22],["mid",-300,10,-810,-480,16],["skull",-460,460,-1400,-1e3,30],["right",40,190,-180,30,9],["gorge",100,180,-290,-215,8]];for(let[re,ue,ye,Re,nt,O]of Z){let Xe=Vu[re];for(let Ze=Re;Ze<nt;Ze+=O)for(let lt=ue;lt<ye;lt+=O){let me=lt+(o()-.5)*O,mt=Ze+(o()-.5)*O,Oe=Xg(Xe.sdf,me,mt,Xe.bounds[4]+5,Xe.bounds[1]+20);if(Oe===null||Oe<c(me,mt)+3||ju(Xe.sdf,me,Oe,mt)[1]<.55||l(me,mt,4))continue;let P=o()<.72?"pine":"bush";G(P,me,Oe-.5,mt,(re==="skull"?1.3:1)*(.8+o()*.6),o()*6.28),xe++;for(let E=0;E<2;E++){if(o()<.4)continue;let K=me+(o()-.5)*O,pe=mt+(o()-.5)*O,le=Xg(Xe.sdf,K,pe,Oe+30,Oe-30);le!==null&&ju(Xe.sdf,K,le,pe)[1]>.55&&!l(K,pe,4)&&G(o()<.6?"pine":"bush",K,le-.5,pe,.7+o()*.6,o()*6.28)}}}for(let[re,ue,ye]of[[42,-136,"blossom"],[6,-168,"blossom"],[50,-182,"pinkbush"],[30,-128,"pinkbush"],[58,-150,"pinkbush"],[-6,-132,"pinkbush"],[20,-196,"blossom"]])l(re,ue,1)||G(ye,re,c(re,ue)-.2,ue,ye==="blossom"?.75:1.2,o()*6.28);let Ie=[2,3,4,5,16].map(re=>Lr.grassblade[re]).map((re,ue)=>Wg([re.u0,1-re.v1,re.u1,1-re.v0],1.3*(re.u1-re.u0)/(re.v1-re.v0)*.9,1,2,40+ue)),ze=Wg([0,0,1,1],.7,.55,2,77),Ye=[0,1,2,3,4].map(re=>Lr.fern[re]).map((re,ue)=>{let ye=[],Re=Jt(90+ue);for(let nt=0;nt<5;nt++){let O=nt/5*Math.PI*2+Re(),Xe=1.1+Re()*.4,Ze=Xe*(re.u1-re.u0)/(re.v1-re.v0);ye.push({o:[0,0,0],r:[Math.cos(O+1.57)*Ze/2,0,Math.sin(O+1.57)*Ze/2],u:[Math.cos(O)*Xe*.75,Xe*.65,Math.sin(O)*Xe*.75],nrm:[0,1,0],rect:[re.u0,1-re.v1,re.u1,1-re.v0],bottom:!0,shade:lt=>.5+.5*lt})}return Dr(ye)}),xt=Pi.pos[0],Je=Pi.pos[2],Ue=0,je=0,ae=i.grassStep;for(let re=Je-360;re<Je+60;re+=ae)for(let ue=xt-220;ue<xt+220;ue+=ae){let ye=ue+(o()-.5)*ae*1.6,Re=re+(o()-.5)*ae*1.6,nt=Math.hypot(ye-xt,(Re-Je)*.8),O=nt<60?1:Math.max(.03,(60/nt)**2);if(o()>O)continue;let Xe=e.maskAt(ye,Re,0),Ze=e.maskAt(ye,Re,1),lt=e.maskAt(ye,Re,2),me=e.maskAt(ye,Re,3);if(Xe>.15||Ze>.05||h(ye,Re)>1)continue;let mt=c(ye,Re);if(lt>.25)continue;N.setFromAxisAngle(j,o()*6.28);let Oe=(.4+o()*.5)*(nt<25?.9:1.1);if(U.compose(W.set(ye,mt-.05,Re),N,F.set(Oe,Oe*(.8+o()*.5),Oe)),me>.5&&o()<.35){let P=Math.floor(o()*Ye.length);D("fern"+P,Ye[P],x,U,new Fe().setHSL(.22,.3,.5).multiplyScalar(1.6),!1);continue}if(Math.sin(ye*.21)*Math.cos(Re*.17)+Math.sin(ye*.07+Re*.05)>.55&&nt<140&&o()<.6)D("flower",ze,w,U,new Fe(1,1,1),!1),je++;else{let P=Math.floor(o()*Ie.length);H.setHSL(.24+(o()-.5)*.05,.45+o()*.2,.5+o()*.12).multiplyScalar(2.7),D("grass"+P,Ie[P],S,U,H.clone(),!1),Ue++}}let ve=Fa(Ng(a.leaves.image),n,{alphaTest:.4,sway:.6,color:11846810}),ge=[],_e=(re,ue,ye,Re,nt)=>{let O=Vu[re],Xe=ue;for(let Ze=0;Ze<80;Ze++){let lt=O.sdf(Xe,Re,nt);if(lt<.4){let me=ju(O.sdf,Xe,Re,nt,1);if(Math.abs(me[1])>.35)return;let mt=5+o()*6,Oe=14+o()*22,Qe=Xe+me[0]*.6,P=nt+me[2]*.6,E=gc([-me[2],0,me[0]]);ge.push({o:[Qe,Re-Oe/2,P],r:[E[0]*mt/2,0,E[2]*mt/2],u:[me[0]*.8,Oe/2,me[2]*.8],nrm:[me[0]*.6,.8,me[2]*.6],rect:[0,0,1,1],shade:K=>.55+.45*(K*.5+.5)});return}Xe+=ye*Math.max(.4,lt*.6)}};for(let re=-640;re<80;re+=9){let ue=70+o()*170;o()<.55&&_e("left",-90,-1,ue,re+(o()-.5)*6)}for(let re=-150;re<20;re+=7){let ue=40+o()*140;o()<.6&&_e("right",10,1,ue,re)}for(let re=-780;re<-480;re+=12){let ue=50+o()*200;o()<.5&&_e("mid",40,-1,ue,re)}if(ge.length){let re=new st(Dr(ge),ve);re.name="vines",re.castShadow=!0,re.receiveShadow=!0,r.add(re)}let we=0;for(let[re,{geo:ue,mat:ye,list:Re,shadow:nt}]of L){let O=new fi(ue,ye,Re.length);Re.forEach(([Xe,Ze],lt)=>{O.setMatrixAt(lt,Xe),Ze&&O.setColorAt(lt,Ze)}),O.instanceMatrix.needsUpdate=!0,O.instanceColor&&(O.instanceColor.needsUpdate=!0),O.computeBoundingSphere(),O.castShadow=nt&&ye!==d,O.receiveShadow=!0,O.name="veg-"+re,r.add(O),we+=Re.length}return console.log(`[scene] vegetation ${ce} trees, ${xe}+ cliff trees, ${Ue} grass, ${je} flowers, ${ge.length} vines, ${L.size} batches, ${(performance.now()-s).toFixed(0)} ms`),{group:r}}function Yg(a,e={}){let t=new qt({color:e.color??928554,roughness:.06,metalness:0,envMapIntensity:1.25});return t.onBeforeCompile=n=>{n.uniforms.uTime=a,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 flow;
varying vec2 vFlow;
varying vec3 vWP;`).replace("#include <fog_vertex>",`#include <fog_vertex>
vFlow = flow;
vWP = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
				uniform float uTime;
				varying vec2 vFlow;
				varying vec3 vWP;
				${Di}
				float gFoam = 0.0;`).replace("#include <color_fragment>",`#include <color_fragment>
			{
				// \u767D\u6CAB\uFF1A\u6CBF\u6D41\u5411\u62C9\u957F\u7684\u6761\u7EB9\uFF0C\u5CB8\u8FB9\uFF08vFlow.y \u63A5\u8FD1 \xB11\uFF09\u66F4\u591A
				vec2 q = vec2( vFlow.x * 0.08 - uTime * 0.9, vFlow.y * 3.0 );
				float f = vnoise( q * vec2( 1.0, 2.0 ) ) * 0.6 + vnoise( q * vec2( 3.1, 6.0 ) + 3.7 ) * 0.4;
				float edge = smoothstep( 0.55, 1.0, abs( vFlow.y ) );
				gFoam = smoothstep( 0.62, 0.85, f + edge * 0.35 ) * ${(e.foam??.6).toFixed(2)};
				diffuseColor.rgb = mix( diffuseColor.rgb, vec3( 0.75, 0.8, 0.78 ), gFoam );
			}`).replace("#include <roughnessmap_fragment>",`float roughnessFactor = mix( ${(e.rough??.05).toFixed(3)}, 0.7, gFoam );`).replace("#include <normal_fragment_maps>",`
			{
				vec2 p = vWP.xz;
				float t = uTime;
				float e = 0.35;
				#define WH( v ) ( vnoise( v * 0.45 + vec2( t * 0.35, t * 0.22 ) ) + 0.5 * vnoise( v * 1.3 - vec2( t * 0.5, - t * 0.4 ) ) + 0.25 * vnoise( v * 3.7 + t * 0.9 ) )
				float h0 = WH( p ), hx = WH( p + vec2( e, 0.0 ) ), hz = WH( p + vec2( 0.0, e ) );
				vec3 nw = normalize( vec3( - ( hx - h0 ) / e * ${(e.wave??.35).toFixed(3)}, 1.0, - ( hz - h0 ) / e * ${(e.wave??.35).toFixed(3)} ) );
				normal = normalize( ( viewMatrix * vec4( nw, 0.0 ) ).xyz );
			}`)},t.customProgramCacheKey=()=>"water"+(e.foam??.6)+"_"+(e.wave??.35),t}function Jg({time:a,heightAt:e}){let t=new Ut;t.name="water";let n=[],i=[],s=[],r=ni.length,o=6,c=0;for(let D=0;D<=r;D+=3){let U=ni.at(D),N=D/r,W=Li[0]+(Li[1]-Li[0])*N+2.4,j=Rh+14*gt(.08,0,N)+5;for(let H=0;H<=o;H++){let G=-1+2*H/o,q=U.x-U.tz*G*j,Y=U.z+U.tx*G*j;n.push(q,W,Y),i.push(D,G)}c++}for(let D=0;D<c-1;D++)for(let U=0;U<o;U++){let N=D*(o+1)+U,F=N+1,W=N+o+1,j=W+1;s.push(N,W,F,F,W,j)}let l=new rt;l.setAttribute("position",new it(n,3)),l.setAttribute("flow",new it(i,2)),l.setIndex(s),l.computeVertexNormals();let h=l.attributes.normal;for(let D=0;D<h.count;D++)h.setXYZ(D,0,1,0);let u=new st(l,Yg(a));u.material.side=Gt,u.receiveShadow=!0,u.name="river",t.add(u);let f=new as(Sn.r+1.5,48);f.rotateX(-Math.PI/2);let p=new Float32Array(f.attributes.position.count*2);for(let D=0;D<f.attributes.position.count;D++)p[D*2]=f.attributes.position.getX(D)*3,p[D*2+1]=0;f.setAttribute("flow",new ot(p,2));let m=new st(f,Yg(a,{color:1124900,foam:0,wave:.06,rough:.16}));m.position.set(Sn.x,Sn.level-.2,Sn.z),m.receiveShadow=!0,m.name="pond",t.add(m);let b=ni.at(0),d=new de(Nu.x-b.x,Nu.z-b.z).normalize(),g=[],v=null;for(let D=0;D<=70;D+=1){let U=b.x+d.x*D,N=b.z+d.y*D,F=e(U,N);g.push([U,F,N]),v===null&&F>Li[0]+50&&(v=D)}let _=Math.min(70,(v??60)+4),y=9,S=40,w=[],x=[],M=[];for(let D=0;D<=S;D++){let U=_*(1-D/S),N=b.x+d.x*U,F=b.z+d.y*U,W=e(N,F);D===S&&(W=Li[0]+2.4);let j=1.2+2.5*(D/S),H=N-d.x*j,G=F-d.y*j;for(let q of[-1,1])w.push(H-d.y*q*y/2*(1+D/S*.6),W+.4,G+d.x*q*y/2*(1+D/S*.6)),x.push(q*.5+.5,D/S)}for(let D=0;D<S;D++){let U=D*2;M.push(U,U+1,U+2,U+1,U+3,U+2)}let R=new rt;R.setAttribute("position",new it(w,3)),R.setAttribute("fuv",new it(x,2)),R.setIndex(M),R.computeVertexNormals();let A=new qt({color:15265520,roughness:.4,transparent:!0,depthWrite:!1,side:Gt,emissive:2304042});A.onBeforeCompile=D=>{D.uniforms.uTime=a,D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 fuv;
varying vec2 vFuv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFuv = fuv;`),D.fragmentShader=D.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec2 vFuv;
${Di}`).replace("#include <color_fragment>",`#include <color_fragment>
			{
				vec2 uv = vFuv;
				float strands = vnoise( vec2( uv.x * 26.0, uv.y * 3.0 - uTime * 1.6 ) ) * 0.6 + vnoise( vec2( uv.x * 61.0, uv.y * 7.0 - uTime * 2.7 ) ) * 0.4;
				float edge = smoothstep( 0.0, 0.18, uv.x ) * smoothstep( 1.0, 0.82, uv.x );
				float a = smoothstep( 0.3, 0.75, strands ) * edge;
				a = max( a, smoothstep( 0.82, 1.0, uv.y ) * 0.85 * edge );
				diffuseColor.a = a * 0.9;
			}`)},A.customProgramCacheKey=()=>"falls";let L=new st(R,A);return L.name="falls",L.renderOrder=2,t.add(L),console.log(`[scene] water: river ${c} rows, falls crest ${_.toFixed(0)} m from pool`),{group:t,fallsBase:new C(b.x,Li[0]+3,b.z)}}function Zg({time:a,fallsBase:e}){let t=Jt(66),n=[],[i,s,r]=Na;for(let m=0;m<46;m++){let b=t(),d=i+(t()-.5)*260*(.5+b),g=s-70-b*150+(t()-.5)*30,v=r+20+b*150+t()*30;n.push([d,g-25*b,v,34+t()*40+b*40,.13+.12*(1-b),1,.5+t()])}for(let m=0;m<60;m++){let b=-420+t()*840,d=-760-t()*220,g=30+t()*50;n.push([b,g,d,70+t()*70,.18+t()*.12,.3,.3+t()*.5])}for(let m=0;m<14;m++)n.push([e.x+(t()-.5)*30,e.y+4+t()*18,e.z+(t()-.5)*30,12+t()*14,.3,0,1.2+t()]);for(let m=0;m<24;m++){let b=-260-t()*520;n.push([80+(t()-.5)*60,-20+t()*25,b,26+t()*24,.2,.2,.5+t()])}let o=n.length,c=new mi(2,2),l=new Fo;l.index=c.index,l.setAttribute("position",c.attributes.position),l.setAttribute("uv",c.attributes.uv);let h=new Float32Array(o*4),u=new Float32Array(o*4);n.forEach((m,b)=>{h.set([m[0],m[1],m[2],m[3]],b*4),u.set([m[4],m[5],m[6],t()*100],b*4)}),l.setAttribute("iA",new On(h,4)),l.setAttribute("iB",new On(u,4)),l.instanceCount=o;let f=new kt({name:"Mist",transparent:!0,depthWrite:!1,uniforms:{uTime:a,uAtmos:rc.uAtmos,uGain:{value:1}},vertexShader:`
			attribute vec4 iA, iB;
			uniform float uTime;
			varying vec2 vUv;
			varying vec4 vB;
			varying vec3 vWP;
			void main() {
				vUv = uv;
				vB = iB;
				vec3 c = iA.xyz;
				// \u7F13\u6162\u6F02\u79FB\uFF1A\u5F80\u5916\u3001\u5F80\u4E0B\u6DCC
				float t = uTime * 0.02 * iB.z + iB.w;
				c += vec3( sin( t ) * 14.0, - abs( sin( t * 0.7 ) ) * 6.0, cos( t * 0.8 ) * 10.0 );
				vec3 right = vec3( viewMatrix[ 0 ][ 0 ], viewMatrix[ 1 ][ 0 ], viewMatrix[ 2 ][ 0 ] );
				vec3 up = vec3( viewMatrix[ 0 ][ 1 ], viewMatrix[ 1 ][ 1 ], viewMatrix[ 2 ][ 1 ] );
				float rad = iA.w;
				vec3 wp = c + ( right * position.x + up * position.y * 0.62 ) * rad;
				vWP = wp;
				gl_Position = projectionMatrix * viewMatrix * vec4( wp, 1.0 );
			}
		`,fragmentShader:`
			uniform float uTime, uGain;
			varying vec2 vUv;
			varying vec4 vB;
			varying vec3 vWP;
			${Di}
			${Nh}
			void main() {
				vec2 p = vUv * 2.0 - 1.0;
				float t = uTime * 0.03 * vB.z;
				float n = fbm( p * 1.6 + vB.w + vec2( t, - t * 0.6 ) );
				float m = smoothstep( 1.0, 0.15, length( p ) + ( n - 0.5 ) * 0.9 );
				m *= m;
				float a = m * vB.x * uGain;
				if ( a < 0.003 ) discard;
				// \u989C\u8272\uFF1A\u4E0A\u9762\u53D7\u5149\u504F\u6696\uFF0C\u4E0B\u9762\u504F\u51B7\uFF1B\u5996\u96FE\u6574\u4F53\u504F\u9752
				vec3 lit = mix( vec3( 1.0, 0.97, 0.92 ), vec3( 0.78, 0.9, 0.95 ), vB.y ) * ( 0.72 + 0.4 * vUv.y + 0.25 * n );
				lit *= 1.35;
				vec3 T, inCol;
				atmosTerms( vWP, T, inCol );
				vec3 col = lit * T + inCol * ( 1.0 - T );
				gl_FragColor = vec4( col, a );
			}
		`}),p=new st(l,f);return p.frustumCulled=!1,p.renderOrder=5,p.name="mist",{mesh:p,material:f}}function P1(){let a=Jt(3),e=[];return{longBone:i=>{let s=[];for(let o=0;o<=10;o++){let c=o/10,l=.035+.05*Math.pow(Math.abs(c-.5)*2,4);s.push(new de(l,(c-.5)*i))}return new Io(s,7)},skull:()=>{let i=new _n(.12,14,10);i.scale(1,.95,1.2);let s=new _n(.08,10,6);return s.scale(1.05,.6,1),s.translate(0,-.1,.06),[i,s]},r:a}}function Qg({heightAt:a}){let e=new Ut;e.name="story";let t=new qt({color:15327951,roughness:.55,metalness:0}),n=new qt({color:1380621,roughness:1}),{longBone:i,skull:s,r}=P1(),o=Hn.at(64),c=o.x-o.tz*8,l=o.z+o.tx*8,h=a(c,l),u=new Ot({map:Cg(),transparent:!0,depthWrite:!1,blending:qn,color:new Fe(4.5,3.2,1.4),fog:!0}),f=new st(new mi(9,9),u);f.rotation.x=-Math.PI/2,f.position.set(c,h+.12,l),f.renderOrder=3,e.add(f);let p=new kt({transparent:!0,depthWrite:!1,blending:qn,side:Gt,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
			void main(){
				float a = pow( 1.0 - vUv.y, 3.0 ) * ( 0.55 + 0.45 * sin( vUv.x * 62.83 + uTime * 0.8 ) * sin( vUv.x * 25.13 - uTime * 0.5 ) );
				gl_FragColor = vec4( vec3( 1.0, 0.78, 0.38 ) * a * 0.16, 1.0 );
			}`}),m=new st(new Wn(4.2,4.4,12,40,1,!0),p);m.position.set(c,h+6,l),m.renderOrder=4,e.add(m);let b=new hs(16762992,60,30,2);b.position.set(c,h+2.5,l),e.add(b);let d=[],g=(y,S,w,x)=>{let M=Hn.at(y),R=M.x+M.tz*S*4.2,A=M.z-M.tx*S*4.2,L=a(R,A),D=Math.round(9*w);for(let U=0;U<D;U++){let N=i(.3+r()*.25),F=new Ve().compose(new C(R+(r()-.5)*1.1*w,L+.05+r()*.08,A+(r()-.5)*1.1*w),new Nt().setFromEuler(new In(Math.PI/2+(r()-.5)*.4,r()*6.28,0,"YXZ")),new C(1,1,1));N.applyMatrix4(F),d.push(N)}for(let U of s())U.applyMatrix4(new Ve().compose(new C(R+.2,L+.12,A),new Nt().setFromEuler(new In(.3,r()*6.28,.2)),new C(1,1,1))),d.push(U);if(x){let U=new C(M.tx,0,M.tz),N=new C(-M.tz,0,M.tx),F=new C(R+N.x*1.6,L+.08,A+N.z*1.6);for(let W=0;W<14;W++){let j=new _n(.04,6,4);j.translate(F.x+U.x*W*.06,F.y,F.z+U.z*W*.06),d.push(j)}for(let W=0;W<6;W++)for(let j of[-1,1]){let H=new rs(.15,.012,4,10,Math.PI*.8);H.rotateY(j>0?0:Math.PI),H.rotateX(Math.PI/2),H.applyMatrix4(new Ve().makeRotationY(Math.atan2(U.x,U.z))),H.translate(F.x+U.x*(.25+W*.07),F.y+.06,F.z+U.z*(.25+W*.07)),d.push(H)}for(let[W,j]of[[.86,.45],[.86,-.45],[-.1,.25],[-.1,-.25]]){let H=i(.75);H.applyMatrix4(new Ve().compose(new C(F.x+U.x*(W-.3)+N.x*j*.5,F.y+.02,F.z+U.z*(W-.3)+N.z*j*.5),new Nt().setFromUnitVectors(new C(0,1,0),U.clone().addScaledVector(N,j*.6).normalize()),new C(1,1,1))),d.push(H)}for(let W of s())W.translate(F.x+U.x*1,F.y+.08,F.z+U.z*1),d.push(W)}};g(150,1,1,!1),g(560,-1,1.3,!1),g(Hn.length-30,1,1.6,!0);let v=L1(d),_=new st(v,t);return _.castShadow=!0,_.receiveShadow=!0,_.name="bones",e.add(_),{group:e,ring:f.position.clone(),update(y){p.uniforms.uTime.value=y,u.opacity=.75+.25*Math.sin(y*1.3),b.intensity=50+15*Math.sin(y*1.3),f.rotation.z=y*.05}}}function L1(a){let e=0,t=a.map(o=>{let c=o.index?o.toNonIndexed():o;for(let l of Object.keys(c.attributes))l!=="position"&&l!=="normal"&&c.deleteAttribute(l);return e+=c.attributes.position.count,c}),n=new Float32Array(e*3),i=new Float32Array(e*3),s=0;for(let o of t)n.set(o.attributes.position.array,s*3),i.set(o.attributes.normal.array,s*3),s+=o.attributes.position.count;let r=new rt;return r.setAttribute("position",new ot(n,3)),r.setAttribute("normal",new ot(i,3)),r.computeBoundingSphere(),r}function $g(a,e,t){let n=a.position.clone(),i=0,s=0,r={},o=null,c=null,l=-1e9,h=new C,u=new C,f=new C,p=new C;function m(S=i,w=s,x=u){return x.set(Math.sin(S)*Math.cos(w),Math.sin(w),-Math.cos(S)*Math.cos(w))}function b(S,w,x){n.copy(S);let M=p.copy(w).sub(S).normalize();i=Math.atan2(M.x,-M.z),s=Math.asin(Fn.clamp(M.y,-1,1)),x&&(a.fov=x,a.updateProjectionMatrix()),c=null,g()}function d(S,w,x,M=2.8){let R=new C().copy(w).sub(S).normalize(),A=Math.atan2(R.x,-R.z);for(;A-i>Math.PI;)A-=Math.PI*2;for(;A-i<-Math.PI;)A+=Math.PI*2;c={t:0,dur:M,p0:n.clone(),p1:S.clone(),y0:i,y1:A,q0:s,q1:Math.asin(Fn.clamp(R.y,-1,1)),f0:a.fov,f1:x||a.fov}}function g(){a.position.copy(n),a.lookAt(p.copy(n).add(m()))}e.addEventListener("pointerdown",S=>{o={x:S.clientX,y:S.clientY,id:S.pointerId},e.setPointerCapture?.(S.pointerId),l=performance.now(),c=null}),e.addEventListener("pointermove",S=>{if(!o||o.id!==S.pointerId)return;let w=.0028*a.fov/55;i+=(S.clientX-o.x)*w,s=Fn.clamp(s-(S.clientY-o.y)*w,-1.45,1.45),o.x=S.clientX,o.y=S.clientY,l=performance.now()});let v=()=>{o=null};e.addEventListener("pointerup",v),e.addEventListener("pointercancel",v),e.addEventListener("wheel",S=>{S.preventDefault();let w=Math.max(4,n.y-t(n.x,n.z));n.addScaledVector(m(),-Math.sign(S.deltaY)*Math.min(80,3+w*.12)),l=performance.now(),c=null},{passive:!1}),addEventListener("keydown",S=>{r[S.code]=!0,(S.code.startsWith("Key")||S.code.startsWith("Arrow"))&&(l=performance.now(),c=null)}),addEventListener("keyup",S=>{r[S.code]=!1}),addEventListener("blur",()=>{for(let S in r)r[S]=!1});let _=null;e.addEventListener("touchstart",S=>{S.touches.length===2&&(_=Math.hypot(S.touches[0].clientX-S.touches[1].clientX,S.touches[0].clientY-S.touches[1].clientY),o=null)},{passive:!0}),e.addEventListener("touchmove",S=>{if(_&&S.touches.length===2){let w=Math.hypot(S.touches[0].clientX-S.touches[1].clientX,S.touches[0].clientY-S.touches[1].clientY);n.addScaledVector(m(),(w-_)*.6),_=w}},{passive:!0}),e.addEventListener("touchend",()=>{_=null},{passive:!0});function y(S){if(c){c.t+=S;let x=Math.min(1,c.t/c.dur),M=x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;n.lerpVectors(c.p0,c.p1,M);let R=Math.sin(x*Math.PI)*Math.min(160,c.p0.distanceTo(c.p1)*.18);n.y+=R,i=c.y0+(c.y1-c.y0)*M,s=c.q0+(c.q1-c.q0)*M,a.fov=c.f0+(c.f1-c.f0)*M,a.updateProjectionMatrix(),x>=1&&(c=null)}else{let x=Math.max(2,n.y-t(n.x,n.z)),M=(r.ShiftLeft||r.ShiftRight?5:1)*Math.min(260,9+x*.5);m(i,0,u),f.set(Math.cos(i),0,Math.sin(i));let R=new C;(r.KeyW||r.ArrowUp)&&R.add(u),(r.KeyS||r.ArrowDown)&&R.sub(u),(r.KeyD||r.ArrowRight)&&R.add(f),(r.KeyA||r.ArrowLeft)&&R.sub(f),(r.KeyE||r.Space)&&(R.y+=1),(r.KeyQ||r.KeyC)&&(R.y-=1),R.lengthSq()>0&&R.normalize().multiplyScalar(M),h.lerp(R,1-Math.exp(-S*6)),n.addScaledVector(h,S)}let w=t(n.x,n.z)+1.6;n.y<w&&(n.y=w),g()}return{update:y,setView:b,flyTo:d,get idle(){return performance.now()-l},get flying(){return!!c},get yaw(){return i},get pitch(){return s}}}function Yh(a){let e=new Map,t=new Map,n=a.clone();return eb(a,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,r=e.get(i),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function eb(a,e,t){t(a,e);for(let n=0;n<a.children.length;n++)eb(a.children[n],e.children[n],t)}var Jh=class extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qu(t)}),this.register(function(t){return new $u(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new Zu(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Zh(t,bt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zh(t,bt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ff(t)})}load(e,t,n,i){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let l=ta.extractUrlBase(e);r=ta.resolveURL(l,this.path)}else r=ta.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new cs(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,r={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===sb){try{r[bt.KHR_BINARY_GLTF]=new pf(e)}catch(u){i&&i(u);return}s=JSON.parse(r[bt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new _f(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(u){case bt.KHR_MATERIALS_UNLIT:r[u]=new Ju;break;case bt.KHR_DRACO_MESH_COMPRESSION:r[u]=new mf(s,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:r[u]=new gf;break;case bt.KHR_MESH_QUANTIZATION:r[u]=new bf;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function D1(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}function jt(a,e,t){let n=a.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Yu=class{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new Fe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],dn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ko(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hs(h),l.distance=u;break;case"spot":l=new Oo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ki(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Ju=class{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ot}extendParams(e,t,n){let i=[];e.color=new Fe(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],dn),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Rt))}return Promise.all(i)}},Zu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Qu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(s,s)}return Promise.all(i)}},$u=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},ef=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},tf=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},nf=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],dn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Rt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},af=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},sf=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(s[0],s[1],s[2],dn),Promise.all(i)}},rf=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},of=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(s[0],s[1],s[2],dn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Rt)),Promise.all(i)}},cf=class{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},lf=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return jt(this.parser,e,this.name)!==null?Nn:null}extendMaterialParams(e,t){let n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},hf=class{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}},df=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}},uf=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}},Zh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(p){return p.buffer}):r.ready.then(function(){let p=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(p),h,u,f,i.mode,i.filter),p})})}else return null}},ff=class{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==si.TRIANGLES&&l.mode!==si.TRIANGLE_STRIP&&l.mode!==si.TRIANGLE_FAN&&l.mode!==void 0)return null;let r=n.extensions[this.name].attributes,o=[],c={};for(let l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let m of u){let b=new Ve,d=new C,g=new Nt,v=new C(1,1,1),_=new fi(m.geometry,m.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&d.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,S),c.SCALE&&v.fromBufferAttribute(c.SCALE,S),_.setMatrixAt(S,b.compose(d,g,v));let y=null;for(let S in c)if(S==="_COLOR_0"){let w=c[S];_.instanceColor=new On(w.array,w.itemSize,w.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(y===null){let x=_.geometry;y=new rt,y.name=x.name;for(let M in x.attributes)y.setAttribute(M,x.attributes[M]);for(let M in x.morphAttributes)y.morphAttributes[M]=x.morphAttributes[M];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(let M of x.groups)y.addGroup(M.start,M.count,M.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),_.geometry=y}let w=c[S];y.setAttribute(S,new On(w.array,w.itemSize,w.normalized))}It.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),p.push(_)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},sb="glTF",bc=12,tb={JSON:1313821514,BIN:5130562},pf=class{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,bc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sb)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-bc,s=new DataView(e,bc),r=0;for(;r<i;){let o=s.getUint32(r,!0);r+=4;let c=s.getUint32(r,!0);if(r+=4,c===tb.JSON){let l=new Uint8Array(e,bc+r,o);this.content=n.decode(l)}else if(c===tb.BIN){let l=bc+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},mf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(let h in r){let u=vf[h]||h.toLowerCase();o[u]=r[h]}for(let h in e.attributes){let u=vf[h]||h.toLowerCase();if(r[h]!==void 0){let f=n.accessors[e.attributes[h]],p=Ur[f.componentType];l[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(p){for(let m in p.attributes){let b=p.attributes[m],d=c[m];d!==void 0&&(b.normalized=d)}u(p)},o,l,dn,f)})})}},gf=class{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},bf=class{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}},Qh=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,f=u*u,p=f*u,m=e*l,b=m-l,d=-2*p+3*f,g=p-f,v=1-d,_=g-f+u;for(let y=0;y!==o;y++){let S=r[b+y+o],w=r[b+y+c]*h,x=r[m+y+o],M=r[m+y]*h;s[y]=v*S+_*w+d*x+g*M}return s}},U1=new Nt,xf=class extends Qh{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return U1.fromArray(s).normalize().toArray(s),s}},si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nb={9728:Ht,9729:Tt,9984:Nl,9985:fr,9986:gs,9987:en},ib={33071:Dn,33648:Ks,10497:vn},Xu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ba={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},O1={CUBICSPLINE:void 0,LINEAR:$a,STEP:Qa},qu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function k1(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new qt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ri})),a.DefaultMaterial}function Ss(a,e,t){for(let n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ki(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function F1(a,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);let r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):a.attributes.position;r.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):a.attributes.normal;o.push(f)}if(s){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):a.attributes.color;c.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=u),s&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function B1(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function z1(a){let e,t=a.extensions&&a.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ku(t.attributes):e=a.indices+":"+Ku(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+Ku(a.targets[n]);return e}function Ku(a){let e="",t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function yf(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function H1(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var G1=new Ve,_f=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new D1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?(this.textureLoader=new ls(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Bo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cs(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){let o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Ss(s,o,i),ki(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(r,o)=>{let c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(let[l,h]of r.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,r){n.load(ta.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let r=Xu[i.type],o=Ur[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new ot(l,r,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){let o=r[0],c=Xu[i.type],l=Ur[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,b,d;if(p&&p!==u){let g=Math.floor(f/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,_=t.cache.get(v);_||(b=new l(o,g*p,i.count*p/h),_=new ns(b,p/h),t.cache.add(v,_)),d=new Ma(_,c,f%p/h,m)}else o===null?b=new l(i.count*c):b=new l(o,f,i.count*c),d=new ot(b,c,m);if(i.sparse!==void 0){let g=Xu.SCALAR,v=Ur[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new v(r[1],_,i.sparse.count*g),w=new l(r[2],y,i.sparse.count*c);o!==null&&(d=new ot(d.array.slice(),d.itemSize,d.normalized)),d.normalized=!1;for(let x=0,M=S.length;x<M;x++){let R=S[x];if(d.setX(R,w[x*c]),c>=2&&d.setY(R,w[x*c+1]),c>=3&&d.setZ(R,w[x*c+2]),c>=4&&d.setW(R,w[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}d.normalized=m}return d})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s],o=this.textureLoader;if(r.uri){let c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,r=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(s.samplers||{})[r.sampler]||{};return h.magFilter=nb[f.magFilter]||Tt,h.minFilter=nb[f.minFilter]||en,h.wrapS=ib[f.wrapS]||vn,h.wrapT=ib[f.wrapT]||vn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ht&&h.minFilter!==Tt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let r=i.images[e],o=self.URL||self.webkitURL,c=r.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&r.bufferView!==void 0)h=n.getDependency("bufferView",r.bufferView).then(function(f){return new Promise(function(p,m){t.parse(f,p,m)})});else{if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(f){l=!0;let p=new Blob([f],{type:r.mimeType});return c=o.createObjectURL(p),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(p,m){let b=p;t.isImageBitmapLoader===!0&&(b=function(d){let g=new $t(d);g.needsUpdate=!0,p(g)}),t.load(ta.resolveURL(f,s.path),b,void 0,m)})})}let u=h.then(function(f){return l===!0&&o.revokeObjectURL(c),ki(f,r),f.userData.mimeType=r.mimeType||H1(r.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[bt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(r);r=s.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ir,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new nr,yn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return qt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],r,o={},c=s.extensions||{},l=[];if(c[bt.KHR_MATERIALS_UNLIT]){let u=i[bt.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Fe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],dn),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Rt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Gt);let h=s.alphaMode||qu.OPAQUE;if(h===qu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===qu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==Ot&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new de(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&r!==Ot&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==Ot){let u=s.emissiveFactor;o.emissive=new Fe().setRGB(u[0],u[1],u[2],dn)}return s.emissiveTexture!==void 0&&r!==Ot&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Rt)),Promise.all(l).then(function(){let u=new r(o);return s.name&&(u.name=s.name),ki(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ss(i,u,s),u})}createUniqueName(e){let t=Ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return ab(c,o,t)})}let r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=z1(l),u=i[h];if(u)r.push(u.promise);else{let f;l.extensions&&l.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=ab(new rt,l,t),l.mode===si.TRIANGLE_STRIP?f=f.then(p=>Ou(p,ec)):l.mode===si.TRIANGLE_FAN&&(f=f.then(p=>Ou(p,gr))),i[h]={primitive:l,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let c=0,l=r.length;c<l;c++){let h=r[c].material===void 0?k1(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,m=h.length;p<m;p++){let b=h[p],d=r[p],g,v=l[p];if(d.mode===si.TRIANGLES||d.mode===si.TRIANGLE_STRIP||d.mode===si.TRIANGLE_FAN||d.mode===void 0){let _=s.isSkinnedMesh===!0,y=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");_&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=_&&y?new lo(b,v):new st(b,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(d.mode===si.LINES)g=new uo(b,v);else if(d.mode===si.LINE_STRIP)g=new is(b,v);else if(d.mode===si.LINE_LOOP)g=new fo(b,v);else if(d.mode===si.POINTS)g=new po(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+d.mode);Object.keys(g.geometry.morphAttributes).length>0&&B1(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),ki(g,s),d.extensions&&Ss(i,g,d),t.assignFinalMaterial(g),u.push(g)}for(let p=0,m=u.length;p<m;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&Ss(i,u[0],s),u[0];let f=new Ut;s.extensions&&Ss(i,f,s),t.associations.set(f,{meshes:e});for(let p=0,m=u.length;p<m;p++)f.add(u[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Qt(Fn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Qn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),r=i,o=[],c=[];for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u){o.push(u);let f=new Ve;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ho(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let p=i.channels[u],m=i.samplers[p.sampler],b=p.target,d=b.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(r.push(this.getDependency("node",d)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",v)),l.push(m),h.push(b))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],p=u[1],m=u[2],b=u[3],d=u[4],g=[];for(let _=0,y=f.length;_<y;_++){let S=f[_],w=p[_],x=m[_],M=b[_],R=d[_];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let A=n._createAnimationTracks(S,w,x,M,R);if(A)for(let L=0;L<A.length;L++)g.push(A[L])}let v=new os(s,void 0,g);return ki(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,G1)});for(let p=0,m=u.length;p<m;p++)h.add(u[p]);if(h.userData.pivot!==void 0&&u.length>0){let p=h.userData.pivot,m=u[0];h.pivot=new C().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new tr:l.length>1?h=new Ut:l.length===1?h=l[0]:h=new It,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=r),ki(h,s),s.extensions&&Ss(n,h,s),s.matrix!==void 0){let u=new Ve;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ut;n.name&&(s.name=i.createUniqueName(n.name)),ki(s,n),n.extensions&&Ss(t,s,n);let r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];f.parent!==null?s.add(Yh(f)):s.add(f)}let l=h=>{let u=new Map;for(let[f,p]of i.associations)(f instanceof yn||f instanceof $t)&&u.set(f,p);return h.traverse(f=>{let p=i.associations.get(f);p!=null&&u.set(f,p)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let r=[],o=e.name?e.name:e.uuid,c=[];function l(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}Ba[s.path]===Ba.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Ba[s.path]){case Ba.weights:h=Qi;break;case Ba.rotation:h=$i;break;case Ba.translation:case Ba.scale:h=Ta;break;default:n.itemSize===1?h=Qi:h=Ta;break}let u=i.interpolation!==void 0?O1[i.interpolation]:$a,f=this._getArrayFromAccessor(n);for(let p=0,m=c.length;p<m;p++){let b=new h(c[p]+"."+Ba[s.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),r.push(b)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=yf(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof $i?xf:Qh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function V1(a,e,t){let n=e.attributes,i=new Cn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){let h=yf(Ur[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new C,c=new C;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],p=f.min,m=f.max;if(p!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),f.normalized){let b=yf(Ur[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;let r=new Un;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function ab(a,e,t){let n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(c){a.setAttribute(o,c)})}for(let r in n){let o=vf[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){let r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return ft.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),ki(a,e),V1(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?F1(a,e.targets,t):a})}var En={x:20,z:-120,r:105},Mf={wukong:{name:"\u5B59\u609F\u7A7A",file:"wukong.glb",icon:"wukong.webp",hp:110,speed:7.5,desc:"\u91D1\u7B8D\u68D2\u6A2A\u626B + \u70ED\u6897\u5F39\u3002\u6280\u80FD\uFF1A\u5206\u8EAB\u6BEB\u6BDB\uFF08\u53EC\u5524\u5206\u8EAB\uFF09\u3001\u753B\u5730\u4E3A\u7262\uFF08\u91D1\u5708\u6301\u7EED\u4F24\u5BB3\uFF09",weapon:"staff",skills:["clone","ring"],ult:"\u4E03\u5341\u4E8C\u53D8\xB7\u5DE8\u5927\u5316"},sorceress:{name:"\u767D\u9AA8\u5973\u672F\u58EB",file:"sorceress.glb",icon:"sorceress.webp",hp:80,speed:7,desc:"\u8FDC\u7A0B\u6CD5\u7403\uFF08\u5C04\u51FB\u7CFB\uFF09\u3002\u6280\u80FD\uFF1A\u5C0F\u53D1\u96F7\u9706\uFF08\u968F\u673A\u843D\u96F7\uFF09\u3001\u54C8\u5B57\u62A4\u76FE\uFF08\u7ED5\u8EAB\u65CB\u8F6C\uFF09",weapon:"orb",skills:["thunder","shield"],ult:"\u5927\u53D1\u96F7\u9706\xB7\u5168\u5C4F\u96F7\u66B4"},ox:{name:"\u725B\u9B54",file:"ox.glb",icon:"ox.webp",hp:160,speed:6.3,desc:"\u8019\u5B50\u8FD1\u6218\u91CD\u51FB\u5E26\u51FB\u9000\u3002\u6280\u80FD\uFF1A\u9000\uFF01\u9000\uFF01\u9000\uFF01\uFF08\u51FB\u9000\u51B2\u51FB\u6CE2\uFF09\u3001\u82AD\u6BD4Q\u4E86\uFF08\u51FB\u6740\u8D77\u706B\u7206\u70B8\uFF09",weapon:"rake",skills:["push","bbq"],ult:"\u86EE\u725B\u51B2\u649E\xB7\u9707\u5730"},untitled:{name:"\u6CD5\u738B",file:"untitled.glb",icon:"untitled.webp",hp:100,speed:7,desc:'"\u5178"\u5B57\u6CD5\u6756\u6162\u901F\u7206\u70B8\u5F39\uFF08\u7206\u53D1\u6D41\uFF09\u3002\u6280\u80FD\uFF1A\u5C2C\u7B11\u5149\u73AF\uFF08\u8EAB\u8FB9\u6301\u7EED\u4F24\u5BB3\uFF09\u3001\u6EDA\u6728\uFF08\u6728\u5934\u6EDA\u8FC7\u78BE\u602A\uFF09',weapon:"dian",skills:["aura","log"],ult:"\u5178\xB7\u5929\u964D\u6B63\u4E49\uFF08\u9668\u77F3\u96E8\uFF09"}},rb=["\u54C8\u54C8\u54C8","\u7EF7\u4E0D\u4F4F\u4E86","6","\u5178","\u6025\u4E86","\u7834\u9632\u4E86","\u5C0A\u561F\u5047\u561F"],$h={clone:{name:"\u5206\u8EAB\u6BEB\u6BDB",desc:"\u53EC\u5524\u4F1A\u81EA\u52A8\u6253\u602A\u7684\u5206\u8EAB"},ring:{name:"\u753B\u5730\u4E3A\u7262",desc:"\u811A\u4E0B\u91D1\u5708\uFF0C\u5708\u5185\u6301\u7EED\u4F24\u5BB3"},thunder:{name:"\u5C0F\u53D1\u96F7\u9706",desc:"\u6BCF 3 \u79D2\u968F\u673A\u5288 3 \u9053\u5C0F\u96F7"},shield:{name:"\u54C8\u5B57\u62A4\u76FE",desc:'\u51E0\u4E2A"\u54C8"\u5B57\u7ED5\u8EAB\u65CB\u8F6C\u4F24\u5BB3'},push:{name:"\u9000\uFF01\u9000\uFF01\u9000\uFF01",desc:"\u5468\u671F\u6027\u51FB\u9000\u51B2\u51FB\u6CE2"},bbq:{name:"\u82AD\u6BD4Q\u4E86",desc:"\u654C\u4EBA\u6B7B\u4EA1\u65F6\u539F\u5730\u7740\u706B\u7206\u70B8"},aura:{name:"\u5C2C\u7B11\u5149\u73AF",desc:"\u8EAB\u8FB9\u6301\u7EED\u4F24\u5BB3\u5708"},log:{name:"\u6EDA\u6728",desc:"\u6EDA\u6728\uFF1A\u4EC0\u4E48\u4E5F\u4E0D\u4F1A\u53D1\u751F\uFF08\u5B9E\u9645\uFF1A\u6728\u5934\u6EDA\u8FC7\u53BB\u78BE\u602A\uFF09"}};function ob({scene:a,camera:e,renderer:t,dom:n,heightAt:i,onExit:s}){let r=(I,V)=>i(I,V),o=new Jh,c=ut(),l={},h=new de,u=new C,f=new Ho,p=new jn(new C(0,1,0),0),m=!1,b={},d=null;addEventListener("keydown",I=>{l[I.code]=!0,!(!d||d.paused)&&(I.code==="Space"&&nt(),I.code==="KeyQ"&&O(),I.code==="Escape"&&Ee())}),addEventListener("keyup",I=>{l[I.code]=!1}),addEventListener("blur",()=>{for(let I in l)l[I]=!1;m=!1}),n.addEventListener("pointermove",I=>{h.set(I.clientX/innerWidth*2-1,-I.clientY/innerHeight*2+1)}),n.addEventListener("pointerdown",I=>{m=!0,h.set(I.clientX/innerWidth*2-1,-I.clientY/innerHeight*2+1)}),addEventListener("pointerup",()=>{m=!1});let g=j1("rgba(0,0,0,0.55)","rgba(0,0,0,0)"),v=new Ot({map:g,transparent:!0,depthWrite:!1}),_=new mi(1,1).rotateX(-Math.PI/2),y={imp:{hp:10,speed:3.4,r:.55,dmg:8,xp:1,color:15327951,scale:1,cost:1},wisp:{hp:6,speed:5.2,r:.45,dmg:6,xp:1,color:10124543,scale:.8,cost:1,emissive:4926106},brute:{hp:60,speed:2.4,r:1.1,dmg:18,xp:5,color:14207400,scale:2,cost:6},elite:{hp:260,speed:3,r:1.3,dmg:25,xp:30,color:15909198,scale:2.4,cost:30,emissive:5913088},boss:{hp:4e3,speed:2.6,r:3,dmg:40,xp:200,color:16117990,scale:5.5,cost:0,emissive:3342336}},S=420,w=(()=>{let I=new xo(.32,.6,3,8).translate(0,.65,0),V=new _n(.34,10,8).scale(1,.9,1.1).translate(0,1.45,.02),z=new _n(.08,6,4).translate(-.12,1.48,.3),B=z.clone().translate(.24,0,0);return X1([I,V,z,B])})(),x={};for(let[I,V]of Object.entries(y)){let z=new fi(w,new or({color:V.color,emissive:V.emissive||0}),I==="boss"?2:S);z.count=0,z.frustumCulled=!1,z.instanceMatrix.setUsage(ru),z.instanceColor=new On(new Float32Array(z.instanceMatrix.count*3).fill(1),3),x[I]=z}let M=new fi(_,v,S+2);M.frustumCulled=!1,M.count=0;let R=600,A=new fi(new Co(.22),new Ot({color:16769126}),R);A.frustumCulled=!1,A.count=0;let L={};function D(I,V="#ffd54a"){let z=I+V;if(L[z])return L[z];let B=document.createElement("canvas");B.width=Math.max(256,I.length*70+40),B.height=96;let $=B.getContext("2d");$.font='bold 64px "PingFang SC","Microsoft YaHei",sans-serif',$.textAlign="center",$.textBaseline="middle",$.lineWidth=10,$.strokeStyle="#3a1d00",$.strokeText(I,B.width/2,50),$.fillStyle=V,$.fillText(I,B.width/2,50),L.aspect=B.width/96;let ie=new Ei(B);return ie.colorSpace=Rt,L[z]=new er({map:ie,depthWrite:!1,fog:!1})}let U=new Ut;U.name="game",U.add(M,A,...Object.values(x));let N=new No(.9,1,48).rotateX(-Math.PI/2),F=new as(1,40).rotateX(-Math.PI/2),W=new Wn(.12,.25,30,6).translate(0,15,0),j=new Wn(.9,.9,7,10).rotateZ(Math.PI/2),H=new or({color:8015658}),G=new Ot({color:11635967}),q=new _n(.28,10,8),Y=new rs(1,.08,4,24,Math.PI*.9).rotateX(Math.PI/2);function ce(I,V,z){U.add(I),d.fx.push({mesh:I,life:V,t:0,update:z})}async function xe(I){b[I]||(b[I]=await o.loadAsync(oa("chars/"+Mf[I].file)));let V=b[I],z=Yh(V.scene);z.traverse(be=>{be.isMesh&&(be.castShadow=!1,be.frustumCulled=!1)});let B=new Ut;B.add(z),B.scale.setScalar(2.6);let $=new Cn().setFromObject(B);z.position.y-=$.min.y/2.6;let ie=new zo(z),se={};for(let be of V.animations)se[be.name]=ie.clipAction(be);return se.attack&&(se.attack.setLoop(ph),se.attack.clampWhenFinished=!1),{holder:B,mixer:ie,act:se,cur:null}}function Z(I,V,z=.15){if(I.cur===V||!I.act[V])return;I.act[V].reset().fadeIn(z).play(),I.cur&&I.act[I.cur]&&I.act[I.cur].fadeOut(z),I.cur=V}async function fe(I){c.select.classList.add("hidden"),c.loading.classList.remove("hidden");let V=Mf[I],z=await xe(I);c.loading.classList.add("hidden"),d&&Ie(),a.add(U);let B=new C(En.x,0,En.z+40);B.y=r(B.x,B.z),z.holder.position.copy(B),a.add(z.holder);let $=new st(_,v);$.scale.setScalar(1.6),a.add($),d={heroId:I,hero:V,h:z,shadow:$,pos:B,vel:new C,face:0,hp:V.hp,maxHp:V.hp,lv:1,xp:0,xpNext:5,kills:0,time:0,laugh:0,laughMax:50,paused:!1,over:!1,iframe:0,dashCd:0,dashT:0,attackT:0,ultT:0,stats:{dmg:1,rate:1,multi:0,pierce:0,area:1,speed:1,cd:1,back:!1,sides:!1,armor:0,magnet:3},skills:{},form:null,enemies:[],bullets:[],gems:[],fx:[],clones:[],spawnAcc:0,nextElite:75,nextBoss:200,bossAlive:!1,hash:new Map},d.skills[V.skills[0]]={lv:1,t:0},Z(z,"idle"),c.hud.classList.remove("hidden"),c.heroName.textContent=V.name,c.heroIcon.src=oa("chars/"+V.icon),ne(`${V.name} \u51FA\u6218\uFF01\u767D\u9AA8\u7CBE\u7684\u624B\u4E0B\u6765\u4E86`),k()}function Ie(){a.remove(d.h.holder,d.shadow,U);for(let I of d.fx)U.remove(I.mesh);for(let I of d.bullets)I.mesh&&U.remove(I.mesh);for(let I of d.clones)a.remove(I.h.holder);d=null}function ze(I,V){if(d.enemies.length>=S)return null;let z=y[I],B=d.time/60,$=1+.15*B+.004*B*B,ie,se;if(V)ie=V.x,se=V.z;else{let He=Math.random()*Math.PI*2,Ge=26+Math.random()*8;ie=d.pos.x+Math.cos(He)*Ge,se=d.pos.z+Math.sin(He)*Ge;let Te=ie-En.x,wt=se-En.z,Mt=Math.hypot(Te,wt);Mt>En.r&&(ie=En.x+Te/Mt*En.r,se=En.z+wt/Mt*En.r)}let be={type:I,t:z,x:ie,z:se,vx:0,vz:0,hp:z.hp*$,maxHp:z.hp*$,hit:0,slow:0,burn:0,phase:Math.random()*6};return d.enemies.push(be),be}function Pe(I){let V=d.time/60,z=Math.min(S,40+12*V*3);for(d.spawnAcc+=I*(2+1.5*V);d.spawnAcc>1&&(d.spawnAcc-=1,!(d.enemies.length>=z));){let B=Math.random();ze(V>2&&B<.12?"brute":V>.7&&B<.4?"wisp":"imp")}d.time>d.nextElite&&(d.nextElite+=60,ze("elite"),ne("\u7CBE\u82F1\u5C38\u9B54\u51FA\u73B0\uFF01\u6253\u6B7B\u5FC5\u6389\u5B9D\u7BB1")),d.time>d.nextBoss&&!d.bossAlive&&(d.nextBoss+=200,d.bossAlive=!0,ze("boss"),ne("\u524D\u65B9\u9AD8\u80FD\uFF01\u767D\u9AA8\u7CBE\u73B0\u51FA\u539F\u5F62"),Ae(.6))}function Ye(){if(f.setFromCamera(h,e),p.constant=-d.pos.y,f.ray.intersectPlane(p,u)){let I=new de(u.x-d.pos.x,u.z-d.pos.z);if(I.lengthSq()>.01)return Math.atan2(I.x,I.y)}return d.face}let xt={staff:.55,orb:.32,rake:.8,dian:1.1};function Je(I){if(d.attackT-=I,d.form==="auto"||!(m||Qe)||d.attackT>0)return;let V=d.stats,z=xt[d.hero.weapon]/V.rate;d.form==="gun"&&(z/=3),d.attackT=z;let B=Qe&&!m?Ue():Ye();d.face=B,Z(d.h,"attack",.05),d.h.attackHold=.35;let $=[],ie=1+V.multi;for(let be=0;be<ie;be++)$.push(B+(be-(ie-1)/2)*.16);V.back&&$.push(B+Math.PI),V.sides&&$.push(B+Math.PI/2,B-Math.PI/2);let se=d.hero.weapon;for(let be of $)(se==="staff"||se==="rake")&&je(be,se==="rake"),(se==="staff"||se==="orb"||se==="dian")&&ae(be,se)}function Ue(){let I=null,V=1e9;for(let z of d.enemies){let B=(z.x-d.pos.x)**2+(z.z-d.pos.z)**2;B<V&&(V=B,I=z)}return I?Math.atan2(I.x-d.pos.x,I.z-d.pos.z):d.face}function je(I,V){let z=d.stats,B=(V?4.2:3.4)*z.area,$=(V?26:14)*z.dmg;for(let se of d.enemies){let be=se.x-d.pos.x,He=se.z-d.pos.z,Ge=Math.hypot(be,He);if(Ge>B+se.t.r)continue;let Te=Math.atan2(be,He)-I;Te=Math.atan2(Math.sin(Te),Math.cos(Te)),Math.abs(Te)<1.1&&_e(se,$,V?7:3,be/Ge,He/Ge)}let ie=new st(Y,new Ot({color:V?16751164:16766282,transparent:!0}));ie.position.set(d.pos.x,d.pos.y+1.1,d.pos.z),ie.rotation.y=I-Math.PI*.45+Math.PI/2,ie.scale.setScalar(B),ce(ie,.22,(se,be)=>{se.mesh.material.opacity=1-be,se.mesh.rotation.y+=.12})}function ae(I,V){let z=d.stats,B=V==="dian"?"\u5178":d.form==="gun"?"\u54C8":rb[Math.random()*rb.length|0],$;if(V==="orb"&&!d.form)$=new st(q,G);else{$=new Sa(D(B,V==="dian"?"#ff8a3c":"#ffd54a"));let be=(V==="dian"?2.2:1.1)*z.area;$.scale.set(be*2.6,be,1)}$.position.set(d.pos.x,d.pos.y+1.2,d.pos.z),U.add($);let ie=V==="dian"?13:22,se=V==="dian"?34:V==="orb"?11:7;d.bullets.push({mesh:$,x:d.pos.x,z:d.pos.z,vx:Math.sin(I)*ie,vz:Math.cos(I)*ie,life:1.4,r:(V==="dian"?1.1:.6)*z.area,dmg:se*z.dmg*(d.form==="gun"?.45:1),pierce:z.pierce+0,boom:V==="dian"?3.2*z.area:0,boomer:d.form==="boomer",back:!1,hitSet:new Set})}function ve(I){for(let V=d.bullets.length-1;V>=0;V--){let z=d.bullets[V];if(z.life-=I,z.boomer&&!z.back&&z.life<.7&&(z.back=!0,z.hitSet.clear()),z.back){let $=d.pos.x-z.x,ie=d.pos.z-z.z,se=Math.hypot($,ie)+.001;z.vx=$/se*24,z.vz=ie/se*24,se<1&&(z.life=0)}z.x+=z.vx*I,z.z+=z.vz*I,z.mesh.position.set(z.x,r(z.x,z.z)+1.2,z.z);let B=z.life<=0;if(!B)for(let $ of te(z.x,z.z,z.r+3)){if(z.hitSet.has($)||$.hp<=0||($.x-z.x)**2+($.z-z.z)**2>(z.r+$.t.r)**2)continue;z.hitSet.add($);let ie=Math.hypot(z.vx,z.vz);if(_e($,z.dmg,2,z.vx/ie,z.vz/ie),z.boom){ge(z.x,z.z,z.boom,z.dmg*.6,16747068),B=!0;break}if(!z.boomer&&z.pierce--<=0){B=!0;break}}B&&(z.boom&&z.life<=0&&ge(z.x,z.z,z.boom,z.dmg*.6,16747068),U.remove(z.mesh),d.bullets.splice(V,1))}}function ge(I,V,z,B,$,ie=4){for(let be of te(I,V,z+2)){let He=be.x-I,Ge=be.z-V,Te=Math.hypot(He,Ge)+.001;Te<z+be.t.r&&_e(be,B,ie,He/Te,Ge/Te)}let se=new st(F,new Ot({color:$,transparent:!0,depthWrite:!1,blending:qn}));se.position.set(I,r(I,V)+.15,V),ce(se,.35,(be,He)=>{be.mesh.scale.setScalar(z*(.4+.6*He)),be.mesh.material.opacity=.8*(1-He)})}function _e(I,V,z,B,$){if(I.hp<=0)return;let ie=Math.random()<.08;ie&&(V*=2),I.hp-=V,I.hit=.1;let se=I.type==="boss"?.1:I.type==="elite"?.4:1;I.vx+=B*z*se,I.vz+=$*z*se,ie&&oe("\u66B4\u51FB\uFF01\u7EF7\u4E0D\u4F4F\u4E86",I.x,I.z,"#ff5252"),I.hp<=0&&we(I)}function we(I){d.kills++,d.laugh=Math.min(d.laughMax,d.laugh+(I.type==="boss"?40:I.type==="elite"?10:1));let V=Math.max(1,Math.round(I.t.xp/5));for(let z=0;z<V;z++)d.gems.length<R&&d.gems.push({x:I.x+(Math.random()-.5)*V*.4,z:I.z+(Math.random()-.5)*V*.4,v:I.t.xp/V});d.skills.bbq&&ge(I.x,I.z,2.2+d.skills.bbq.lv*.4,8*d.skills.bbq.lv*d.stats.dmg,16734751,2),(I.type==="elite"||I.type==="boss")&&mt(),I.type==="boss"&&(d.bossAlive=!1,ne("\u767D\u9AA8\u7CBE\u53C8\u88AB\u6253\u6B7B\u4E86\u4E00\u6B21\uFF01\uFF08\u540D\u573A\u9762\uFF09"))}function re(I){let V=d.stats;for(let[z,B]of Object.entries(d.skills)){B.t-=I;let $=B.lv;switch(z){case"thunder":if(B.t<=0){B.t=3*V.cd;let ie=d.enemies.filter(se=>(se.x-d.pos.x)**2+(se.z-d.pos.z)**2<400);for(let se=0;se<2+$+V.multi&&ie.length;se++){let be=ie[Math.random()*ie.length|0];ue(be.x,be.z,1.8*V.area,(18+8*$)*V.dmg)}}break;case"push":B.t<=0&&(B.t=Math.max(1.2,4-$*.4)*V.cd,ye(6+$*1.2,10*$*V.dmg,10,10479615),oe("\u9000\uFF01\u9000\uFF01\u9000\uFF01",d.pos.x,d.pos.z,"#9fe7ff"));break;case"aura":{B.mesh||(B.mesh=new st(F,new Ot({color:16743129,transparent:!0,opacity:.18,depthWrite:!1})),U.add(B.mesh));let ie=(2.6+$*.5)*V.area;if(B.mesh.scale.setScalar(ie),B.mesh.position.set(d.pos.x,d.pos.y+.12,d.pos.z),B.t<=0){B.t=.4;for(let se of te(d.pos.x,d.pos.z,ie+2))(se.x-d.pos.x)**2+(se.z-d.pos.z)**2<(ie+se.t.r)**2&&_e(se,(3+2*$)*V.dmg,.5,0,0)}break}case"ring":{if(B.t<=0){B.t=6*V.cd;let ie=(4+$)*V.area,se=d.pos.x,be=d.pos.z,He=new st(N,new Ot({color:16761402,transparent:!0,depthWrite:!1,blending:qn}));He.position.set(se,r(se,be)+.15,be),He.scale.setScalar(ie);let Ge=0;ce(He,4,(Te,wt,Mt)=>{if(Te.mesh.material.opacity=1-wt*.6,Ge-=Mt,Ge<=0){Ge=.3;for(let an of te(se,be,ie+2))(an.x-se)**2+(an.z-be)**2<ie*ie&&(_e(an,(4+3*$)*V.dmg,0,0,0),an.slow=.4)}})}break}case"shield":{let ie=2+$+Math.min(2,V.multi);for(B.items||(B.items=[]);B.items.length<ie;){let be=new Sa(D("\u54C8","#ffe066"));be.scale.set(2.2,.85,1),U.add(be),B.items.push(be)}let se=3*V.area;B.ang=(B.ang||0)+I*(2.4+$*.3),B.items.forEach((be,He)=>{let Ge=B.ang+He/B.items.length*Math.PI*2,Te=d.pos.x+Math.sin(Ge)*se,wt=d.pos.z+Math.cos(Ge)*se;be.position.set(Te,d.pos.y+1,wt);for(let Mt of te(Te,wt,2))(Mt.x-Te)**2+(Mt.z-wt)**2<(.8+Mt.t.r)**2&&(Mt.shT||0)<d.time&&(Mt.shT=d.time+.35,_e(Mt,(6+4*$)*V.dmg,4,Math.sin(Ge+1.57),Math.cos(Ge+1.57)))});break}case"log":if(B.t<=0){B.t=Math.max(3,8-$)*V.cd;for(let ie=0;ie<Math.ceil($/2);ie++)Re((8+6*$)*V.dmg)}break;case"clone":d.clones.length<Math.min(3,$)&&!B.loading&&(B.loading=!0,xe(d.heroId).then(ie=>{B.loading=!1,d&&(ie.holder.scale.setScalar(1.4),ie.holder.traverse(se=>{se.isMesh&&(se.material=se.material.clone(),se.material.transparent=!0,se.material.opacity=.75,se.material.color?.multiplyScalar(1.3))}),a.add(ie.holder),Z(ie,"walk"),d.clones.push({h:ie,a:Math.random()*6,t:0}),oe("\u5439\u4E00\u53E3\u6BEB\u6BDB\uFF01",d.pos.x,d.pos.z,"#ffd54a"))}));break}}d.clones.forEach((z,B)=>{z.a+=I*1.3,z.t-=I;let $=d.pos.x+Math.sin(z.a+B*2.1)*3.5,ie=d.pos.z+Math.cos(z.a+B*2.1)*3.5;if(z.h.holder.position.set($,r($,ie),ie),z.h.mixer.update(I),z.t<=0){let se=null,be=36;for(let He of te($,ie,6)){let Ge=(He.x-$)**2+(He.z-ie)**2;Ge<be&&(be=Ge,se=He)}if(se){z.t=.7;let He=Math.atan2(se.x-$,se.z-ie);z.h.holder.rotation.y=He,_e(se,(8+5*d.skills.clone.lv)*d.stats.dmg,3,Math.sin(He),Math.cos(He)),z.h.act.attack?.reset().play()}}})}function ue(I,V,z,B){let $=new st(W,new Ot({color:13232383,transparent:!0,blending:qn,depthWrite:!1}));$.position.set(I,r(I,V),V),ce($,.25,(ie,se)=>{ie.mesh.material.opacity=1-se}),ge(I,V,z,B,10474751,1)}function ye(I,V,z,B){let $=d.pos.x,ie=d.pos.z,se=new st(N,new Ot({color:B,transparent:!0,depthWrite:!1,blending:qn}));se.position.set($,d.pos.y+.3,ie),ce(se,.4,(be,He)=>{be.mesh.scale.setScalar(.5+I*He),be.mesh.material.opacity=1-He});for(let be of te($,ie,I+2)){let He=be.x-$,Ge=be.z-ie,Te=Math.hypot(He,Ge)+.001;Te<I&&_e(be,V,z,He/Te,Ge/Te)}}function Re(I){let V=Math.random()*Math.PI*2,z=d.pos.x-Math.sin(V)*25,B=d.pos.z-Math.cos(V)*25,$=new st(j,H);$.rotation.y=V;let ie=new Set;ce($,2.2,(se,be)=>{let He=z+Math.sin(V)*50*be,Ge=B+Math.cos(V)*50*be;se.mesh.position.set(He,r(He,Ge)+.9,Ge),se.mesh.rotateOnAxis(new C(1,0,0),.25);for(let Te of te(He,Ge,5)){if(ie.has(Te))continue;let wt=(Te.x-He)*Math.cos(V)-(Te.z-Ge)*Math.sin(V),Mt=(Te.x-He)*Math.sin(V)+(Te.z-Ge)*Math.cos(V);Math.abs(wt)<3.5&&Math.abs(Mt)<1.2+Te.t.r&&(ie.add(Te),_e(Te,I,6,Math.sin(V),Math.cos(V)))}}),oe("\u6EDA\u6728",z,B,"#c58b4a")}function nt(){if(d.dashCd>0||d.over)return;d.dashCd=1.2,d.dashT=.2,d.iframe=Math.max(d.iframe,.25);let I=d.vel.lengthSq()>.1?Math.atan2(d.vel.x,d.vel.z):d.face;d.vel.set(Math.sin(I)*26,0,Math.cos(I)*26)}function O(){if(d.laugh<d.laughMax*(d.firstUlt?1:.5)||d.ultT>0)return;d.firstUlt=!0,d.laugh=0,d.ultT=8,d.iframe=8.5;let I=document.createElement("div");I.className="g-ult",I.innerHTML=`<b>${d.hero.ult}</b>`,c.root.appendChild(I),setTimeout(()=>I.remove(),1100),Ae(.8),d.ultTick=0}function Xe(I){if(d.ultT<=0){d.h.holder.scale.setScalar(Fn.lerp(d.h.holder.scale.x,2.6,.2));return}d.ultT-=I,d.ultTick-=I;let V=d.heroId,z=V==="wukong"?5.5:2.6;if(d.h.holder.scale.setScalar(Fn.lerp(d.h.holder.scale.x,z,.15)),d.ultTick>0)return;let B=10+d.lv*3,$=(ie,se)=>ie.type==="boss"?Math.min(se,ie.maxHp*.08):se;if(V==="wukong"){d.ultTick=.6;let ie=14;for(let se of te(d.pos.x,d.pos.z,ie+2)){let be=se.x-d.pos.x,He=se.z-d.pos.z,Ge=Math.hypot(be,He)+.001;Ge<ie&&_e(se,$(se,B*2),8,be/Ge,He/Ge)}ye(ie,0,0,16766282),oe("\u54C8\uFF01",d.pos.x,d.pos.z,"#ffd54a")}else if(V==="sorceress"){d.ultTick=.12;let ie=Math.random()*6.28,se=Math.random()*18,be=d.pos.x+Math.sin(ie)*se,He=d.pos.z+Math.cos(ie)*se;for(let Ge of te(be,He,4))(Ge.x-be)**2+(Ge.z-He)**2<9&&_e(Ge,$(Ge,B*1.5),2,0,0);ue(be,He,3,0)}else if(V==="ox"){d.ultTick=.8,ye(12,0,0,16751164),Ae(.4);for(let ie of te(d.pos.x,d.pos.z,14)){let se=ie.x-d.pos.x,be=ie.z-d.pos.z,He=Math.hypot(se,be)+.001;He<12&&(_e(ie,$(ie,B*2.4),12,se/He,be/He),ie.slow=1.5)}}else{d.ultTick=.25;let ie=Math.random()*6.28,se=4+Math.random()*16,be=d.pos.x+Math.sin(ie)*se,He=d.pos.z+Math.cos(ie)*se,Ge=new Sa(D("\u5178","#ff6a2a"));Ge.scale.set(6,2.3,1),ce(Ge,.5,(Te,wt)=>{if(Te.mesh.position.set(be,r(be,He)+18*(1-wt)+1,He),wt>.95&&!Te.done){Te.done=!0;for(let Mt of te(be,He,6))(Mt.x-be)**2+(Mt.z-He)**2<25&&_e(Mt,$(Mt,B*2),6,0,0);ge(be,He,5,0,16738858)}})}}let Ze={gun:{name:"\u54C8\u54C8\u54C8\u673A\u5173\u67AA",desc:"\u5C04\u901F \xD73\u3001\u5355\u53D1\u4F24\u5BB3 \xD70.45\uFF08\u5C04\u51FB\u7CFB\uFF09"},boomer:{name:"6666 \u56DE\u65CB\u9556",desc:"\u5B50\u5F39\u98DE\u51FA\u53BB\u518D\u98DE\u56DE\u6765\uFF0C\u5F80\u8FD4\u90FD\u9020\u6210\u4F24\u5BB3\uFF08\u8D70\u4F4D\u7CFB\uFF09"},moyu:{name:"\u6478\u9C7C\u5927\u5E08",desc:"\u4E3B\u653B\u51FB\u4F24\u5BB3 \xD70.5\uFF0C\u6280\u80FD\u51B7\u5374 -30%\uFF0C\u6280\u80FD\u69FD +1\uFF08\u6280\u80FD\u6D41\uFF09"}};function lt(){let I=d.stats,V=[];if(d.lv>=5&&!d.form)return Object.entries(Ze).map(([ie,se])=>({tier:"gold",name:se.name,desc:se.desc,apply(){d.form=ie,ie==="moyu"&&(I.dmg*=.5,I.cd*=.7,d.extraSlot=1)}}));let z=Object.keys(d.skills),B=3+(d.extraSlot||0);for(let ie of Object.keys($h)){let se=d.skills[ie];if(se&&se.lv>=5||!se&&z.length>=B)continue;let be=d.hero.skills.includes(ie);!se&&!be&&Math.random()<.5||V.push({tier:se?"blue":"purple",name:`${$h[ie].name} ${se?"Lv"+(se.lv+1):"\uFF08\u65B0\u6280\u80FD\uFF09"}`,desc:$h[ie].desc,apply(){se?se.lv++:d.skills[ie]={lv:1,t:0}}})}let $=[["\u591A\u53D1 +1","\u6247\u5F62\u591A\u4E00\u53D1",()=>I.multi<4,()=>I.multi++],["\u5C41\u80A1\u4E5F\u5728\u7B11","\u5411\u80CC\u540E\u540C\u65F6\u5C04\u4E00\u53D1",()=>!I.back,()=>I.back=!0],["\u5DE6\u53F3\u5F00\u5F13","\u4E24\u4FA7\u5404\u5C04\u4E00\u53D1",()=>!I.sides,()=>I.sides=!0],["\u7A7F\u900F +1","\u5B50\u5F39\u591A\u7A7F\u4E00\u4E2A\u602A",()=>I.pierce<3,()=>I.pierce++],["\u7EA2\u6E29","\u4F24\u5BB3 +20%",()=>!0,()=>I.dmg*=1.2],["\u6025\u4E86","\u653B\u901F +18%",()=>!0,()=>I.rate*=1.18],["\u80BA\u6D3B\u91CF","\u8303\u56F4 +15%",()=>!0,()=>I.area*=1.15],["\u52A0\u901F","\u79FB\u901F +10%",()=>I.speed<1.6,()=>I.speed*=1.1],["\u539A\u8138\u76AE","\u53D7\u5230\u4F24\u5BB3 -15%",()=>I.armor<.6,()=>I.armor+=.15],["\u51B7\u5374\u7F29\u51CF","\u6280\u80FD\u51B7\u5374 -12%",()=>I.cd>.5,()=>I.cd*=.88],["\u5927\u80C3\u53E3","\u6700\u5927\u8840\u91CF +20 \u5E76\u56DE\u6EE1",()=>!0,()=>{d.maxHp+=20,d.hp=d.maxHp}]];for(let[ie,se,be,He]of $)be()&&V.push({tier:"white",name:ie,desc:se,apply:He});return W1(V),V.slice(0,3)}function me(){d.paused=!0;let I=lt();c.cards.innerHTML=`<h2>${d.lv>=5&&!d.form?"Lv5 \u9009\u62E9\u653B\u51FB\u5F62\u6001\uFF08\u4E0D\u53EF\u9006\uFF09":"\u5347\u7EA7\uFF01\u4E09\u9009\u4E00"}</h2>`;let V=document.createElement("div");V.className="g-row";for(let B of I){let $=document.createElement("button");$.className="g-card "+B.tier,$.innerHTML=`<b>${B.name}</b><span>${B.desc}</span>`,$.onclick=()=>{B.apply(),c.cards.classList.add("hidden"),d.paused=!1,k(),d.xp>=d.xpNext&&Oe(0)},V.appendChild($)}let z=document.createElement("button");z.className="g-skip",z.textContent="\u8DF3\u8FC7\uFF08\u56DE 20% \u8840\uFF09",z.onclick=()=>{d.hp=Math.min(d.maxHp,d.hp+d.maxHp*.2),c.cards.classList.add("hidden"),d.paused=!1},c.cards.append(V,z),c.cards.classList.remove("hidden")}function mt(){ne("\u76F2\u76D2\u5B9D\u7BB1\uFF01\u767D\u5AD6\u4E00\u6B21\u5347\u7EA7"),d.xp+=d.xpNext-d.xp,Oe(0)}function Oe(I){d.xp+=I,d.xp>=d.xpNext&&!d.paused&&(d.xp-=d.xpNext,d.lv++,d.xpNext=5+(d.lv-1)*7,oe("Lv"+d.lv,d.pos.x,d.pos.z,"#7dff9a"),me())}let Qe=!1,P=new Ve,E=new Nt,K=new C,pe=new C,le=new Fe,Se={},Me=0;function te(I,V,z){let B=[],ie=Math.floor((I-z)/4),se=Math.floor((I+z)/4),be=Math.floor((V-z)/4),He=Math.floor((V+z)/4);for(let Ge=ie;Ge<=se;Ge++)for(let Te=be;Te<=He;Te++){let wt=d.hash.get(Ge*73856093^Te*19349663);if(wt)for(let Mt of wt)B.push(Mt)}return B}function he(I){if(!d)return!1;if(d.paused||d.over)return Ce(),!0;d.time+=I,l.KeyF&&!d._fk&&(Qe=!Qe,ne(Qe?"\u81EA\u52A8\u5C04\u51FB\uFF1A\u5F00":"\u81EA\u52A8\u5C04\u51FB\uFF1A\u5173")),d._fk=l.KeyF;let V=d.stats,z=new C((l.KeyD||l.ArrowRight?1:0)-(l.KeyA||l.ArrowLeft?1:0),0,(l.KeyS||l.ArrowDown?1:0)-(l.KeyW||l.ArrowUp?1:0));z.lengthSq()&&z.normalize().multiplyScalar(d.hero.speed*V.speed*(d.ultT>0&&d.heroId==="ox"?1.6:1)),d.dashT-=I,d.dashCd-=I,d.iframe-=I,d.dashT<=0&&d.vel.lerp(z,1-Math.exp(-I*12)),d.pos.x+=d.vel.x*I,d.pos.z+=d.vel.z*I;let B=d.pos.x-En.x,$=d.pos.z-En.z,ie=Math.hypot(B,$);ie>En.r&&(d.pos.x=En.x+B/ie*En.r,d.pos.z=En.z+$/ie*En.r),d.pos.y=r(d.pos.x,d.pos.z);let se=z.lengthSq()>0;se&&!m&&!Qe&&(d.face=Math.atan2(z.x,z.z));let be=d.h.holder;be.position.copy(d.pos);let He=d.face-be.rotation.y;He=Math.atan2(Math.sin(He),Math.cos(He)),be.rotation.y+=He*Math.min(1,I*14),d.h.attackHold=(d.h.attackHold||0)-I,d.h.attackHold<=0&&Z(d.h,se?"walk":"idle"),d.h.act.walk&&(d.h.act.walk.timeScale=1.3*V.speed),d.h.mixer.update(I),d.shadow.position.set(d.pos.x,d.pos.y+.05,d.pos.z),be.visible=d.iframe>0&&d.ultT<=0&&d.dashT<=0?(d.time*20|0)%2===0:!0,d.hash.clear();for(let Ge of d.enemies){let Te=Math.floor(Ge.x/4)*73856093^Math.floor(Ge.z/4)*19349663,wt=d.hash.get(Te);wt||d.hash.set(Te,wt=[]),wt.push(Ge)}Pe(I),Je(I),re(I),ve(I),Xe(I);for(let Ge=d.enemies.length-1;Ge>=0;Ge--){let Te=d.enemies[Ge];if(Te.hp<=0){d.enemies.splice(Ge,1);continue}let wt=d.pos.x-Te.x,Mt=d.pos.z-Te.z,an=Math.hypot(wt,Mt)+.001,kr=Te.t.speed*(Te.slow>0?.4:1)*(1+d.time/600);Te.slow-=I,Te.hit-=I;let As=wt/an*kr,ha=Mt/an*kr;Te.type==="wisp"&&(Te.phase+=I*3,As+=Math.cos(Te.phase)*2,ha+=Math.sin(Te.phase)*2);for(let _i of te(Te.x,Te.z,2)){if(_i===Te)continue;let Fr=Te.x-_i.x,da=Te.z-_i.z,ua=Math.hypot(Fr,da),Ts=Te.t.r+_i.t.r;ua<Ts&&ua>1e-4&&(As+=Fr/ua*(Ts-ua)*6,ha+=da/ua*(Ts-ua)*6)}if(Te.vx*=Math.exp(-I*6),Te.vz*=Math.exp(-I*6),Te.x+=(As+Te.vx)*I,Te.z+=(ha+Te.vz)*I,an<Te.t.r+.7&&d.iframe<=0&&(d.hp-=Te.t.dmg*(1-V.armor)*(Te.type==="boss"?1:.5),d.iframe=.6,Ae(.25),oe(["\u7834\u9632\u4E86","\u6025\u4E86","\u963F\u4E00\u53E4~"][Math.random()*3|0],d.pos.x,d.pos.z,"#ff6b6b"),d.hp<=0))return Ne(),!0;if(an>70&&Te.type!=="boss"&&Te.type!=="elite"){let _i=Math.random()*6.28;Te.x=d.pos.x+Math.cos(_i)*30,Te.z=d.pos.z+Math.sin(_i)*30}}for(let Ge=d.gems.length-1;Ge>=0;Ge--){let Te=d.gems[Ge],wt=d.pos.x-Te.x,Mt=d.pos.z-Te.z,an=Math.hypot(wt,Mt);an<V.magnet&&(Te.x+=wt/an*18*I,Te.z+=Mt/an*18*I),an<.8&&(d.gems.splice(Ge,1),Oe(Te.v))}for(let Ge=d.fx.length-1;Ge>=0;Ge--){let Te=d.fx[Ge];Te.t+=I;let wt=Math.min(1,Te.t/Te.life);Te.update?.(Te,wt,I),wt>=1&&(U.remove(Te.mesh),d.fx.splice(Ge,1))}return Ce(),k(),!0}function Ce(){for(let B in x)Se[B]=0;let I=0;for(let B of d.enemies){let $=x[B.type],ie=Se[B.type]++;if(ie>=$.instanceMatrix.count)continue;let se=r(B.x,B.z)+(B.type==="wisp"?.6+Math.sin(d.time*4+B.phase)*.25:0),be=1+Math.sin(d.time*10+B.phase)*.06;E.setFromAxisAngle(It.DEFAULT_UP,Math.atan2(d.pos.x-B.x,d.pos.z-B.z)),K.set(B.t.scale,B.t.scale*be,B.t.scale),$.setMatrixAt(ie,P.compose(pe.set(B.x,se,B.z),E,K)),$.setColorAt(ie,B.hit>0?le.setRGB(3,3,3):le.setRGB(1,1,1)),I<M.instanceMatrix.count&&M.setMatrixAt(I++,P.compose(pe.set(B.x,r(B.x,B.z)+.04,B.z),E.identity(),K.setScalar(B.t.r*2.4)))}for(let B in x){let $=x[B];$.count=Se[B],$.instanceMatrix.needsUpdate=!0,$.instanceColor&&($.instanceColor.needsUpdate=!0)}M.count=I,M.instanceMatrix.needsUpdate=!0,A.count=d.gems.length,d.gems.forEach((B,$)=>A.setMatrixAt($,P.compose(pe.set(B.x,r(B.x,B.z)+.4+Math.sin(d.time*3+$)*.1,B.z),E.setFromAxisAngle(It.DEFAULT_UP,d.time*2+$),K.setScalar(1)))),A.instanceMatrix.needsUpdate=!0;let V=d.ultT>0?30:18,z=new C(d.pos.x,d.pos.y+V*.82,d.pos.z+V*.57);e.position.lerp(z,.12),Me=Math.max(0,Me-.016),Me>0&&e.position.add(new C((Math.random()-.5)*Me,(Math.random()-.5)*Me,0)),e.lookAt(d.pos.x,d.pos.y+1,d.pos.z)}function k(){c.hp.style.width=Math.max(0,d.hp)/d.maxHp*100+"%",c.xp.style.width=d.xp/d.xpNext*100+"%";let I=d.laughMax*(d.firstUlt?1:.5);c.laugh.style.width=Math.min(100,d.laugh/I*100)+"%",c.ultBtn.classList.toggle("ready",d.laugh>=I&&d.ultT<=0);let V=d.time|0;c.info.textContent=`Lv${d.lv}  ${String(V/60|0).padStart(2,"0")}:${String(V%60).padStart(2,"0")}  \u51FB\u6740 ${d.kills}  \u540C\u5C4F ${d.enemies.length}`,c.skills.innerHTML=(d.form?`<i class="form">${Ze[d.form].name}</i>`:"")+Object.entries(d.skills).map(([z,B])=>`<i>${$h[z].name} ${B.lv}</i>`).join("")}function oe(I,V,z,B){let $=new Sa(D(I,B));$.scale.set(.9*($.material.map.image.width/96),.9,1);let ie=r(V,z)+2.4;ce($,.8,(se,be)=>{se.mesh.position.set(V,ie+be*1.5,z),se.mesh.material.opacity=1-be*be})}function ne(I){let V=document.createElement("div");V.className="g-toast",V.textContent=I,c.toasts.appendChild(V),setTimeout(()=>V.remove(),2600)}function Ae(I){Me=Math.max(Me,I)}function Ee(){d.paused=!d.paused,c.pause.classList.toggle("hidden",!d.paused)}function Ne(){d.over=!0;let I=d.time|0;c.over.innerHTML=`<h2>${d.hero.name} \u7B11\u6655\u4E86</h2><p>\u4F60\u80C6\u5B50\u771F\u662F\u80A5\u561F\u561F\u7684\uFF0C\u8FD9\u90FD\u6562\u7AD9\u7740\u4E0D\u52A8</p>
			<p>\u5B58\u6D3B ${I/60|0} \u5206 ${I%60} \u79D2 \xB7 \u51FB\u6740 ${d.kills} \xB7 Lv${d.lv}${d.form?" \xB7 "+Ze[d.form].name:""}</p>
			<button class="g-btn" data-a="again">\u518D\u6765\u4E00\u5C40</button><button class="g-btn" data-a="pick">\u6362\u89D2\u8272</button>`,c.over.classList.remove("hidden"),c.over.querySelector("[data-a=again]").onclick=()=>{c.over.classList.add("hidden"),fe(d.heroId)},c.over.querySelector("[data-a=pick]").onclick=()=>{c.over.classList.add("hidden"),$e()}}function $e(){c.hud.classList.add("hidden"),c.select.classList.remove("hidden")}function ut(){let I=document.createElement("style");I.textContent=`
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
		.g-view{position:absolute;right:16px;top:14px;pointer-events:auto}
		`,document.head.appendChild(I);let V=document.createElement("div");V.className="g-ui",V.innerHTML=`
		<div class="g-panel" id="g-select"><h2>\u767D\u864E\u5CAD \xB7 \u9009\u62E9\u89D2\u8272</h2><div class="g-row" id="g-heroes"></div>
			<p style="opacity:.75;font-size:13px;margin-top:18px">WASD \u79FB\u52A8 \xB7 \u9F20\u6807\u7784\u51C6\u3001\u6309\u4F4F\u5DE6\u952E\u5C04\u51FB\uFF08F \u81EA\u52A8\u5C04\u51FB\uFF09\xB7 \u7A7A\u683C\u51B2\u523A \xB7 Q \u5927\u62DB \xB7 Esc \u6682\u505C</p></div>
		<div class="g-panel hidden" id="g-loading"><h2>\u89D2\u8272\u5165\u573A\u4E2D\u2026\u2026</h2></div>
		<div class="hidden" id="g-hud">
			<div class="g-hud"><div class="g-top"><img id="g-icon"><div class="g-bars"><b id="g-name"></b>
				<div class="g-bar" id="g-hp"><i></i></div><div class="g-bar" id="g-xp"><i></i></div></div></div>
				<div class="g-info" id="g-info"></div><div class="g-skills" id="g-skills"></div></div>
			<div class="g-ultbox"><button class="g-ultbtn" id="g-ult"><div id="g-laugh"></div><span style="position:relative">\u5927\u62DB Q</span></button></div>
			<div class="g-help">WASD \u79FB\u52A8 \xB7 \u5DE6\u952E\u5C04\u51FB \xB7 F \u81EA\u52A8\u5C04\u51FB \xB7 \u7A7A\u683C\u51B2\u523A \xB7 Q \u5927\u62DB \xB7 Esc \u6682\u505C</div>
			<a class="g-view g-btn" href="?mode=view">\u770B\u98CE\u666F\u6A21\u5F0F</a>
		</div>
		<div class="g-panel hidden" id="g-cards"></div>
		<div class="g-panel hidden" id="g-pause"><h2>\u6682\u505C</h2><p>\u6309 Esc \u7EE7\u7EED</p></div>
		<div class="g-panel hidden" id="g-over"></div>
		<div class="g-toasts" id="g-toasts"></div>`,document.body.appendChild(V);let z=ie=>V.querySelector("#"+ie),B=z("g-heroes");for(let[ie,se]of Object.entries(Mf)){let be=document.createElement("button");be.className="g-hero",be.innerHTML=`<img src="${oa("chars/"+se.icon)}"><b>${se.name}</b><span>${se.desc}<br>\u5927\u62DB\uFF1A${se.ult}</span>`,be.onclick=()=>fe(ie).catch(He=>{z("g-loading").innerHTML=`<h2>\u89D2\u8272\u52A0\u8F7D\u5931\u8D25</h2><p>${He.message}</p><button class="g-btn" onclick="location.reload()">\u91CD\u8BD5</button>`}),B.appendChild(be)}let $={root:V,select:z("g-select"),loading:z("g-loading"),hud:z("g-hud"),cards:z("g-cards"),pause:z("g-pause"),over:z("g-over"),toasts:z("g-toasts"),hp:z("g-hp").firstElementChild,xp:z("g-xp").firstElementChild,laugh:z("g-laugh"),ultBtn:z("g-ult"),info:z("g-info"),skills:z("g-skills"),heroName:z("g-name"),heroIcon:z("g-icon")};return $.ultBtn.onclick=()=>d&&O(),Object.defineProperty($.laugh.style,"width",{set(ie){$.laugh.style.height=ie}}),$}return{update:he,get active(){return!!d},start:fe,showSelect:$e,_stress:I=>{d.laugh=d.laughMax,d.hp=d.maxHp=1e6;for(let V=0;V<I;V++)ze(V%7?"imp":"wisp")},debug:()=>d&&{lv:d.lv,hp:d.hp,enemies:d.enemies.length,kills:d.kills,time:d.time,skills:Object.keys(d.skills),form:d.form}}}function j1(a,e){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),i=n.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,a),i.addColorStop(1,e),n.fillStyle=i,n.fillRect(0,0,64,64),new Ei(t)}function W1(a){for(let e=a.length-1;e>0;e--){let t=Math.random()*(e+1)|0;[a[e],a[t]]=[a[t],a[e]]}return a}function X1(a){let e=0,t=0;for(let l of a)e+=l.attributes.position.count,t+=l.index.count;let n=new Float32Array(e*3),i=new Float32Array(e*3),s=new Uint32Array(t),r=0,o=0;for(let l of a){n.set(l.attributes.position.array,r*3),i.set(l.attributes.normal.array,r*3);for(let h=0;h<l.index.count;h++)s[o++]=l.index.array[h]+r;r+=l.attributes.position.count}let c=new rt;return c.setAttribute("position",new ot(n,3)),c.setAttribute("normal",new ot(i,3)),c.setIndex(new ot(s,1)),c}var hb=vs.has("shot"),q1=matchMedia("(pointer: coarse)").matches,db={high:{dpr:Math.min(devicePixelRatio,1.5),msaa:4,shadow:4096,shadowFar:1700,terrainStep:1.25,mapStep:1,rock:"high",terrainShadow:!0,treeStep:8,grassStep:.9},mid:{dpr:Math.min(devicePixelRatio,1),msaa:2,shadow:2048,shadowFar:1400,terrainStep:2,mapStep:1.5,rock:"high",terrainShadow:!1,treeStep:10,grassStep:1.3},game:{dpr:Math.min(devicePixelRatio,1),msaa:0,shadow:1024,shadowFar:600,terrainStep:3,mapStep:2,rock:"low",terrainShadow:!1,treeStep:14,grassStep:2.2},low:{dpr:Math.min(devicePixelRatio,.8),msaa:0,shadow:1024,shadowFar:1e3,terrainStep:3,mapStep:2,rock:"low",terrainShadow:!1,treeStep:14,grassStep:2}},ub=vs.get("mode")!=="view"&&!vs.has("shot"),wf=db[vs.get("q")]?vs.get("q"):ub?"game":q1?"low":"high",yi={...db[wf],tier:wf};hb&&(yi.dpr=1);var Ef=document.getElementById("c"),ln=new vh({canvas:Ef,antialias:!1,powerPreference:"high-performance",stencil:!1});ln.setPixelRatio(yi.dpr);ln.setSize(innerWidth,innerHeight,!1);ln.toneMapping=ps;ln.toneMappingExposure=.9;ln.shadowMap.enabled=!0;ln.shadowMap.type=us;var An=new ts;An.fog=ig();var ri=new Qt(52,innerWidth/innerHeight,.3,3e4),Es={value:0},la=new Ah(Sr,3.1);la.position.copy(tg);la.castShadow=!0;la.shadow.mapSize.set(yi.shadow,yi.shadow);la.shadow.camera.near=1;la.shadow.camera.far=yi.shadowFar;la.shadow.bias=-4e-4;la.shadow.normalBias=.8;la.shadow.radius=2;An.add(la);var Ha={bar:document.querySelector("#bar i"),text:document.getElementById("loadText"),loading:document.getElementById("loading"),debug:document.getElementById("debug")},xc=(a,e)=>{Ha.bar.style.width=(a*100).toFixed(0)+"%",e&&(Ha.text.textContent=e)},ws={gen:{}};async function K1(){let a=new cr;a.onProgress=(r,o,c)=>xc(.05+.25*o/c);let e=new ls(a),t=["cliff_diff","cliff_nor","bone_diff","bone_nor","grass_diff","grass_nor","forest_diff","forest_nor","trail_diff","trail_nor","sky","roof_diff","roof_nor","stonewall_diff","stonewall_nor","planks_diff","redwood_diff","plaster_diff","twig","leaves","grassblade","fern","bark_diff","bark_nor"],n=new Mh(a).setDataType(Wt).loadAsync(oa("sky_hdr.hdr")),i=await Promise.all(t.map(r=>e.loadAsync(oa(r+".webp")))),s={};return t.forEach((r,o)=>{s[r]=i[o];let c=["twig","leaves","grassblade","fern"].includes(r);og(s[r],!r.endsWith("_nor"),!c)}),s.sky_hdr=await n,s}var za=null,Tf=null,Or=null;async function Y1(){let a=performance.now();xc(.02,"\u6B63\u5728\u8F7D\u5165\u8D34\u56FE\u2026\u2026");let e=fg(),t=await K1();ws.gen.textures=performance.now()-a;let n=ag(t.sky,t.sky_hdr);An.add(n.mesh),An.environment=n.buildEnv(ln),An.environmentIntensity=.55,xc(.32,"\u6B63\u5728\u5806\u5C71\uFF08\u5730\u5F62\u548C\u5CA9\u4F53\u5728\u540E\u53F0\u7EBF\u7A0B\u91CC\u751F\u6210\uFF09\u2026\u2026");let i=performance.now(),[s,r]=await Promise.all([xg(e,yi,t,Es),vg(yi,t)]);ws.gen.world=performance.now()-i,An.add(s.mesh),An.add(r.group),e.dispose(),xc(.8,"\u6B63\u5728\u76D6\u623F\u5B50\u3001\u79CD\u6811\u2026\u2026"),await new Promise(p=>setTimeout(p,0));let o=Vg({T:t,heightAt:s.heightAt});An.add(o.group);let c=Kg({T:t,terrain:s,placed:o.placed,time:Es,Q:yi});An.add(c.group);let l=Jg({time:Es,heightAt:s.heightAt});An.add(l.group);let h=Zg({time:Es,fallsBase:l.fallsBase});An.add(h.mesh);let u=Qg({heightAt:s.heightAt});An.add(u.group),za={sky:n,terrain:s,rocks:r,arch:o,veg:c,water:l,mist:h,story:u},Tf=rg(ln,An,ri,yi),Or=$g(ri,Ef,s.heightAt);let f=Ih("ref",s.heightAt);if(Or.setView(f.pos,f.look,f.fov),fb(),xc(.95,"\u6B63\u5728\u7F16\u8BD1\u7740\u8272\u5668\u2026\u2026"),await new Promise(p=>setTimeout(p,20)),ln.compile(An,ri),ws.gen.total=performance.now()-a,console.log(`[scene] ready in ${(ws.gen.total/1e3).toFixed(1)}s (textures ${(ws.gen.textures/1e3).toFixed(1)}s, world ${(ws.gen.world/1e3).toFixed(1)}s)`),Ha.loading.classList.add("hidden"),hb&&(Ha.loading.style.display="none"),J1(),ub){for(let p of["views","hud"]){let m=document.getElementById(p);m&&(m.style.display="none")}vc=ob({scene:An,camera:ri,renderer:ln,dom:Ef,heightAt:s.heightAt}),ri.fov=50,ri.far=420,ri.updateProjectionMatrix(),za.sky.mesh.scale.setScalar(380),za.sky.mesh.onBeforeRender=()=>za.sky.mesh.position.copy(ri.position)}td.ready=!0,requestAnimationFrame(mb)}function J1(){let a=document.getElementById("views");a&&(a.querySelectorAll("button[data-view]").forEach(e=>{e.addEventListener("click",()=>cb(e.dataset.view))}),addEventListener("keydown",e=>{if(vc)return;let t=Object.keys(Pu),n=parseInt(e.key,10);n>=1&&n<=t.length&&cb(t[n-1])}))}function cb(a){let e=Ih(a,za.terrain.heightAt);e&&Or.flyTo(e.pos,e.look,e.fov)}function fb(){ln.setPixelRatio(yi.dpr),ln.setSize(innerWidth,innerHeight,!1),ri.aspect=innerWidth/innerHeight,ri.updateProjectionMatrix(),Tf?.setSize(innerWidth,innerHeight,yi.dpr)}addEventListener("resize",fb);var lb=new ds,Af=!1,vc=null,ed=0,Sf=0;vs.has("debug")&&Ha.debug.classList.remove("hidden");function pb(a){ln.info.autoReset=!1,ln.info.reset(),za.story.update(Es.value),Tf.render(a)}function mb(a){if(requestAnimationFrame(mb),Af)return;lb.update(a);let e=Math.min(lb.getDelta(),1/20);if(Es.value+=e,(!vc||!vc.update(e))&&Or.update(e),pb(e),ed+=e,Sf++,ed>.5){let t=Sf/ed;if(ed=0,Sf=0,!Ha.debug.classList.contains("hidden")){let n=ln.info.render,i=ri.position;Ha.debug.textContent=`fps ${t.toFixed(0)}  calls ${n.calls}  tris ${(n.triangles/1e6).toFixed(2)}M  pos ${i.x.toFixed(0)},${i.y.toFixed(0)},${i.z.toFixed(0)}`}}}var td=window.__scene={ready:!1,error:null,shotDone:!1,shot(a){td.shotDone=!1,Af=!0,setTimeout(()=>{try{a.t!==void 0&&(Es.value=a.t);let e=null;typeof a.view=="string"?e=Ih(a.view,za.terrain.heightAt):a.pos&&(e={pos:new C(...a.pos),look:new C(...a.look),fov:a.fov||55}),e&&Or.setView(e.pos,e.look,e.fov);for(let n=0;n<(a.frames||3);n++)Or.update(0),pb(.016);let t=ln.getContext();t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array(4))}catch(e){console.error("[scene] shot error",e.message,e.stack)}td.shotDone=!0},20)},resume(){Af=!1},info(){let a=ln.getContext(),e=a.getExtension("WEBGL_debug_renderer_info"),t=ln.info.render;return{gpu:e?a.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown",tier:wf,gen:Object.fromEntries(Object.entries(ws.gen).map(([n,i])=>[n,+(i/1e3).toFixed(2)])),render:{calls:t.calls,tris:t.triangles},cam:ri.position.toArray().map(n=>+n.toFixed(1))}},get scene(){return An},get world(){return za},get game(){return vc},setAtmos:null};Y1().catch(a=>{console.error("[scene] init failed",a.message,a.stack),Ha.text.textContent="\u51FA\u9519\u4E86\uFF1A"+a.message,td.error=a.message});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

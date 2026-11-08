(()=>{var qo="187";var Fd=0,ql=1,Od=2;var fa=1,kd=2,Qa=3,Vi=0,Yt=1,Ct=2,xi=0,$a=1,Wi=2,Yl=3,Kl=4,Bd=5;var ua=100,zd=101,Hd=102,Gd=103,Vd=104,Wd=200,jd=201,Xd=202,qd=203,Jl=204,Zl=205,Yd=206,Kd=207,Jd=208,Zd=209,Qd=210,$d=211,ef=212,tf=213,nf=214,mo=0,bo=1,go=2,Ba=3,xo=4,vo=5,_o=6,yo=7,Ql=0,af=1,sf=2,Kn=0,dr=1,fr=2,ur=3,pa=4,pr=5,mr=6,br=7;var $l=300,ma=301,es=302,Yo=303,Ko=304,An=1e3,wn=1001,Mo=1002,Ut=1003,rf=1004;var gr=1005;var _t=1006,Jo=1007;var an=1008;var Kt=1009,eh=1010,th=1011,ts=1012,Zo=1013,zn=1014,Nt=1015,Tt=1016,Qo=1017,$o=1018,ba=1020,nh=35902,ih=35899,ah=1021,sh=1022,pn=1023,fi=1026,vi=1027,ns=1028,ec=1029,ji=1030,tc=1031;var nc=1033,xr=33776,vr=33777,_r=33778,yr=33779,ic=35840,ac=35841,sc=35842,rc=35843,oc=36196,cc=37492,lc=37496,hc=37488,dc=37489,Mr=37490,fc=37491,uc=37808,pc=37809,mc=37810,bc=37811,gc=37812,xc=37813,vc=37814,_c=37815,yc=37816,Mc=37817,Sc=37818,wc=37819,Ec=37820,Ac=37821,Tc=36492,Rc=36494,Ic=36495,Cc=36283,Nc=36284,Sr=36285,Pc=36286;var Us=2300,So=2301,uo=2302,Fl=2303,Ol=2400,kl=2401,Bl=2402;var of=3200;var Lc=0,cf=1,_i="",Rt="srgb",ca="srgb-linear",Ds="linear",pt="srgb";var po=7680;var lf=519,hf=512,df=513,ff=514,rh=515,uf=516,pf=517,oh=518,ch=519,mf=35044;var lh="300 es",En=2e3,Pi=2001;function up(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bf(){let i=za("canvas");return i.style.display="block",i}var id={},Ha=null;function hh(...i){let e="THREE."+i.shift();Ha?Ha("log",e,...i):console.log(e,...i)}function gf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=gf(i);let e="THREE."+i.shift();if(Ha)Ha("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=gf(i);let e="THREE."+i.shift();if(Ha)Ha("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Is(...i){let e=i.join(" ");e in id||(id[e]=!0,qe(...i))}function xf(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var vf={[mo]:mo,[go]:_o,[xo]:xo,[Ba]:vo,[bo]:bo,[_o]:go,[yo]:yo,[vo]:Ba},Vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let a=n[e];if(a!==void 0){let s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let a=n.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=1234567,Cs=Math.PI/180,Ga=180/Math.PI;function ga(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function dh(i,e){return(i%e+e)%e}function mp(i,e,t,n,a){return n+(i-e)*(a-n)/(t-e)}function bp(i,e,t){return i!==e?(t-i)/(e-i):0}function Ns(i,e,t){return(1-t)*i+t*e}function gp(i,e,t,n){return Ns(i,e,1-Math.exp(-t*n))}function xp(i,e=1){return e-Math.abs(dh(i,e*2)-e)}function vp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function _p(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Mp(i,e){return i+Math.random()*(e-i)}function Sp(i){return i*(.5-Math.random())}function wp(i){i!==void 0&&(ad=i);let e=ad+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ep(i){return i*Cs}function Ap(i){return i*Ga}function Tp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Rp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ip(i,e,t,n,a){let s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),l=s((e+n)/2),h=r((e+n)/2),d=s((e-n)/2),f=r((e-n)/2),u=s((n-e)/2),m=r((n-e)/2);switch(a){case"XYX":i.set(o*h,c*d,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*d,o*l);break;case"ZXZ":i.set(c*d,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*u,o*l);break;case"YXY":i.set(c*u,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*u,o*h,o*l);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function uh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function _f(i,e){if(e.constructor===Float32Array)return i;let t=uh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function yf(i,e){if(e.constructor===Float32Array)return i;let t=uh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var wr={DEG2RAD:Cs,RAD2DEG:Ga,generateUUID:ga,clamp:it,euclideanModulo:dh,mapLinear:mp,inverseLerp:bp,lerp:Ns,damp:gp,pingpong:xp,smoothstep:vp,smootherstep:_p,randInt:yp,randFloat:Mp,randFloatSpread:Sp,seededRandom:wp,degToRad:Ep,radToDeg:Ap,isPowerOfTwo:Tp,ceilPowerOfTwo:Rp,floorPowerOfTwo:fh,setQuaternionFromProperEuler:Ip,normalize:yf,denormalize:_f},ce=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*a+e.x,this.y=s*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,r,o){let c=n[a+0],l=n[a+1],h=n[a+2],d=n[a+3],f=s[r+0],u=s[r+1],m=s[r+2],g=s[r+3];if(d!==g||c!==f||l!==u||h!==m){let b=c*f+l*u+h*m+d*g;b<0&&(f=-f,u=-u,m=-m,g=-g,b=-b);let p=1-o;if(b<.9995){let _=Math.acos(b),y=Math.sin(_);p=Math.sin(p*_)/y,o=Math.sin(o*_)/y,c=c*p+f*o,l=l*p+u*o,h=h*p+m*o,d=d*p+g*o}else{c=c*p+f*o,l=l*p+u*o,h=h*p+m*o,d=d*p+g*o;let _=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=_,l*=_,h*=_,d*=_}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,a,s,r){let o=n[a],c=n[a+1],l=n[a+2],h=n[a+3],d=s[r],f=s[r+1],u=s[r+2],m=s[r+3];return e[t]=o*m+h*d+c*u-l*f,e[t+1]=c*m+h*f+l*d-o*u,e[t+2]=l*m+h*u+o*f-c*d,e[t+3]=h*m-o*d-c*f-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(a/2),d=o(s/2),f=c(n/2),u=c(a/2),m=c(s/2);switch(r){case"XYZ":this._x=f*h*d+l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d+f*u*m;break;case"YZX":this._x=f*h*d+l*u*m,this._y=l*u*d+f*h*m,this._z=l*h*m-f*u*d,this._w=l*h*d-f*u*m;break;case"XZY":this._x=f*h*d-l*u*m,this._y=l*u*d-f*h*m,this._z=l*h*m+f*u*d,this._w=l*h*d+f*u*m;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],a=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(s-l)*u,this._z=(r-a)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(a+r)/u,this._z=(s+l)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(s-l)/u,this._x=(a+r)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(r-a)/u,this._x=(s+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,a=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+a*l-s*c,this._y=a*h+r*c+s*o-n*l,this._z=s*h+r*l+n*c-a*o,this._w=r*h-n*o-a*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+a*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,a=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*a-o*n),h=2*(o*t-s*a),d=2*(s*n-r*t);return this.x=t+c*l+r*d-o*h,this.y=n+c*h+o*l-s*d,this.z=a+c*d+s*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,a=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=a*c-s*o,this.y=s*r-n*c,this.z=n*o-a*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ul=new L,sd=new Dt,Ze=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,a,s,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,c,l)}set(e,t,n,a,s,r,o,c,l){let h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],m=n[8],g=a[0],b=a[3],p=a[6],_=a[1],y=a[4],v=a[7],E=a[2],w=a[5],x=a[8];return s[0]=r*g+o*_+c*E,s[3]=r*b+o*y+c*w,s[6]=r*p+o*v+c*x,s[1]=l*g+h*_+d*E,s[4]=l*b+h*y+d*w,s[7]=l*p+h*v+d*x,s[2]=f*g+u*_+m*E,s[5]=f*b+u*y+m*w,s[8]=f*p+u*v+m*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*s*h+n*o*c+a*s*l-a*r*c}invert(){let e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*r-o*l,f=o*c-h*s,u=l*s-r*c,m=t*d+n*f+a*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return e[0]=d*g,e[1]=(a*l-h*n)*g,e[2]=(o*n-a*r)*g,e[3]=f*g,e[4]=(h*t-a*c)*g,e[5]=(a*s-o*t)*g,e[6]=u*g,e[7]=(n*c-l*t)*g,e[8]=(r*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,r,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-a*l,a*c,-a*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return Is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pl.makeScale(e,t)),this}rotate(e){return Is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pl.makeRotation(-e)),this}translate(e,t){return Is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},pl=new Ze,rd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),od=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cp(){let i={enabled:!0,workingColorSpace:ca,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===pt&&(a.r=di(a.r),a.g=di(a.g),a.b=di(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pt&&(a.r=Oa(a.r),a.g=Oa(a.g),a.b=Oa(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_i?Ds:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ca]:{primaries:e,whitePoint:n,transfer:Ds,toXYZ:rd,fromXYZ:od,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:rd,fromXYZ:od,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var st=Cp();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ma,wo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ma===void 0&&(Ma=za("canvas")),Ma.width=e.width,Ma.height=e.height;let a=Ma.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Ma}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=za("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=di(s[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Np=0,Va=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=ga(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(ml(a[r].image)):s.push(ml(a[r]))}else s=ml(a);n.url=s}return t||(e.images[this.uuid]=n),n}};function ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var Pp=0,bl=new L,nn=class i extends Vn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=wn,a=wn,s=_t,r=an,o=pn,c=Kt,l=i.DEFAULT_ANISOTROPY,h=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=ga(),this.name="",this.source=new Va(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(bl).x}get height(){return this.source.getSize(bl).y}get depth(){return this.source.getSize(bl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case An:e.x=e.x-Math.floor(e.x);break;case wn:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case An:e.y=e.y-Math.floor(e.y);break;case wn:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=$l;nn.DEFAULT_ANISOTROPY=1;var bt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s,c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],m=c[9],g=c[2],b=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(m-b)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(m+b)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(u+1)/2,E=(p+1)/2,w=(h+f)/4,x=(d+g)/4,M=(m+b)/4;return y>v&&y>E?y<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(y),a=w/n,s=x/n):v>E?v<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(v),n=w/a,s=M/a):E<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(E),n=x/s,a=M/s),this.set(n,a,s,t),this}let _=Math.sqrt((b-m)*(b-m)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(b-m)/_,this.y=(d-g)/_,this.z=(f-h)/_,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eo=class extends Vn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t),this.textures=[];let a=n.count;for(let s=0;s<a;s++)this.textures[s]=new nn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let a=Object.assign({},e.textures[t].image);this.textures[t].source=new Va(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},It=class extends Eo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Fs=class extends nn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ao=class extends nn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Je=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,a,s,r,o,c,l,h,d,f,u,m,g,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,c,l,h,d,f,u,m,g,b)}set(e,t,n,a,s,r,o,c,l,h,d,f,u,m,g,b){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=a,p[1]=s,p[5]=r,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=m,p[11]=g,p[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,a=1/Sa.setFromMatrixColumn(e,0).length(),s=1/Sa.setFromMatrixColumn(e,1).length(),r=1/Sa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,a=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=r*h,u=r*d,m=o*h,g=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=u+m*l,t[5]=f-g*l,t[9]=-o*c,t[2]=g-f*l,t[6]=m+u*l,t[10]=r*c}else if(e.order==="YXZ"){let f=c*h,u=c*d,m=l*h,g=l*d;t[0]=f+g*o,t[4]=m*o-u,t[8]=r*l,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=u*o-m,t[6]=g+f*o,t[10]=r*c}else if(e.order==="ZXY"){let f=c*h,u=c*d,m=l*h,g=l*d;t[0]=f-g*o,t[4]=-r*d,t[8]=m+u*o,t[1]=u+m*o,t[5]=r*h,t[9]=g-f*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){let f=r*h,u=r*d,m=o*h,g=o*d;t[0]=c*h,t[4]=m*l-u,t[8]=f*l+g,t[1]=c*d,t[5]=g*l+f,t[9]=u*l-m,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){let f=r*c,u=r*l,m=o*c,g=o*l;t[0]=c*h,t[4]=g-f*d,t[8]=m*d+u,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*d+m,t[10]=f-g*d}else if(e.order==="XZY"){let f=r*c,u=r*l,m=o*c,g=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+g,t[5]=r*h,t[9]=u*d-m,t[2]=m*d-u,t[6]=o*h,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lp,e,Up)}lookAt(e,t,n){let a=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ai.crossVectors(n,gn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ai.crossVectors(n,gn)),Ai.normalize(),Vr.crossVectors(gn,Ai),a[0]=Ai.x,a[4]=Vr.x,a[8]=gn.x,a[1]=Ai.y,a[5]=Vr.y,a[9]=gn.y,a[2]=Ai.z,a[6]=Vr.z,a[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],m=n[2],g=n[6],b=n[10],p=n[14],_=n[3],y=n[7],v=n[11],E=n[15],w=a[0],x=a[4],M=a[8],C=a[12],T=a[1],P=a[5],N=a[9],U=a[13],R=a[2],O=a[6],G=a[10],z=a[14],k=a[3],B=a[7],V=a[11],j=a[15];return s[0]=r*w+o*T+c*R+l*k,s[4]=r*x+o*P+c*O+l*B,s[8]=r*M+o*N+c*G+l*V,s[12]=r*C+o*U+c*z+l*j,s[1]=h*w+d*T+f*R+u*k,s[5]=h*x+d*P+f*O+u*B,s[9]=h*M+d*N+f*G+u*V,s[13]=h*C+d*U+f*z+u*j,s[2]=m*w+g*T+b*R+p*k,s[6]=m*x+g*P+b*O+p*B,s[10]=m*M+g*N+b*G+p*V,s[14]=m*C+g*U+b*z+p*j,s[3]=_*w+y*T+v*R+E*k,s[7]=_*x+y*P+v*O+E*B,s[11]=_*M+y*N+v*G+E*V,s[15]=_*C+y*U+v*z+E*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],u=e[14],m=e[3],g=e[7],b=e[11],p=e[15],_=c*u-l*f,y=o*u-l*d,v=o*f-c*d,E=r*u-l*h,w=r*f-c*h,x=r*d-o*h;return t*(g*_-b*y+p*v)-n*(m*_-b*E+p*w)+a*(m*y-g*E+p*x)-s*(m*v-g*w+b*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],a=e[8],s=e[1],r=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(r*h-o*l)-n*(s*h-o*c)+a*(s*l-r*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],u=e[11],m=e[12],g=e[13],b=e[14],p=e[15],_=t*o-n*r,y=t*c-a*r,v=t*l-s*r,E=n*c-a*o,w=n*l-s*o,x=a*l-s*c,M=h*g-d*m,C=h*b-f*m,T=h*p-u*m,P=d*b-f*g,N=d*p-u*g,U=f*p-u*b,R=_*U-y*N+v*P+E*T-w*C+x*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/R;return e[0]=(o*U-c*N+l*P)*O,e[1]=(a*N-n*U-s*P)*O,e[2]=(g*x-b*w+p*E)*O,e[3]=(f*w-d*x-u*E)*O,e[4]=(c*T-r*U-l*C)*O,e[5]=(t*U-a*T+s*C)*O,e[6]=(b*v-m*x-p*y)*O,e[7]=(h*x-f*v+u*y)*O,e[8]=(r*N-o*T+l*M)*O,e[9]=(n*T-t*N-s*M)*O,e[10]=(m*w-g*v+p*_)*O,e[11]=(d*v-h*w-u*_)*O,e[12]=(o*C-r*P-c*M)*O,e[13]=(t*P-n*C+a*M)*O,e[14]=(g*y-m*E-b*_)*O,e[15]=(h*E-d*y+f*_)*O,this}scale(e){let t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),a=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-a*c,l*c+a*o,0,l*o+a*c,h*o+n,h*c-a*r,0,l*c-a*o,h*c+a*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,r){return this.set(1,n,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){let a=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,h=r+r,d=o+o,f=s*l,u=s*h,m=s*d,g=r*h,b=r*d,p=o*d,_=c*l,y=c*h,v=c*d,E=n.x,w=n.y,x=n.z;return a[0]=(1-(g+p))*E,a[1]=(u+v)*E,a[2]=(m-y)*E,a[3]=0,a[4]=(u-v)*w,a[5]=(1-(f+p))*w,a[6]=(b+_)*w,a[7]=0,a[8]=(m+y)*x,a[9]=(b-_)*x,a[10]=(1-(f+g))*x,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){let a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=Sa.set(a[0],a[1],a[2]).length(),o=Sa.set(a[4],a[5],a[6]).length(),c=Sa.set(a[8],a[9],a[10]).length();s<0&&(r=-r),Dn.copy(this);let l=1/r,h=1/o,d=1/c;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,t.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,a,s,r,o=En,c=!1){let l=this.elements,h=2*s/(t-e),d=2*s/(n-a),f=(t+e)/(t-e),u=(n+a)/(n-a),m,g;if(c)m=s/(r-s),g=r*s/(r-s);else if(o===En)m=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===Pi)m=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,s,r,o=En,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-a),f=-(t+e)/(t-e),u=-(n+a)/(n-a),m,g;if(c)m=1/(r-s),g=r/(r-s);else if(o===En)m=-2/(r-s),g=-(r+s)/(r-s);else if(o===Pi)m=-1/(r-s),g=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Sa=new L,Dn=new Je,Lp=new L(0,0,0),Up=new L(1,1,1),Ai=new L,Vr=new L,gn=new L,cd=new Je,ld=new Dt,un=class i{constructor(e=0,t=0,n=0,a=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let a=e.elements,s=a[0],r=a[4],o=a[8],c=a[1],l=a[5],h=a[9],d=a[2],f=a[6],u=a[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-it(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,u),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ld.setFromEuler(this),this.setFromQuaternion(ld,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dp=0,hd=new L,wa=new Dt,ai=new Je,Wr=new L,Ms=new L,Fp=new L,Op=new Dt,dd=new L(1,0,0),fd=new L(0,1,0),ud=new L(0,0,1),pd={type:"added"},kp={type:"removed"},Ea={type:"childadded",child:null},gl={type:"childremoved",child:null},hn=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new un,n=new Dt,a=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ze}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wa.setFromAxisAngle(e,t),this.quaternion.multiply(wa),this}rotateOnWorldAxis(e,t){return wa.setFromAxisAngle(e,t),this.quaternion.premultiply(wa),this}rotateX(e){return this.rotateOnAxis(dd,e)}rotateY(e){return this.rotateOnAxis(fd,e)}rotateZ(e){return this.rotateOnAxis(ud,e)}translateOnAxis(e,t){return hd.copy(e).applyQuaternion(this.quaternion),this.position.add(hd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dd,e)}translateY(e){return this.translateOnAxis(fd,e)}translateZ(e){return this.translateOnAxis(ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wr.copy(e):Wr.set(e,t,n);let a=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Ms,Wr,this.up):ai.lookAt(Wr,Ms,this.up),this.quaternion.setFromRotationMatrix(ai),a&&(ai.extractRotation(a.matrixWorld),wa.setFromRotationMatrix(ai),this.quaternion.premultiply(wa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pd),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kp),gl.child=e,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pd),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,e,Fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,a=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*a,s[13]+=n-s[1]*t-s[5]*n-s[9]*a,s[14]+=a-s[2]*t-s[6]*n-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];a.animations.push(s(e.animations,c))}}if(t){let o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),d=r(e.shapes),f=r(e.skeletons),u=r(e.animations),m=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=a,n;function r(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hn.DEFAULT_UP=new L(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xt=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bp={type:"move"},Wa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,r=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let g of e.hand.values()){let b=t.getJointPose(g,n),p=this._getHandJoint(l,g);b!==null&&(p.matrix.fromArray(b.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=b.radius),p.visible=b!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;l.inputState.pinching&&f>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bp)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},jr={h:0,s:0,l:0};function xl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var We=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=st.workingColorSpace){if(e=dh(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=xl(r,s,e+1/3),this.g=xl(r,s,e),this.b=xl(r,s,e-1/3)}return st.colorSpaceToWorking(this,a),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=Mf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return st.workingToColorSpace(en.copy(this),e),Math.round(it(en.r*255,0,255))*65536+Math.round(it(en.g*255,0,255))*256+Math.round(it(en.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(en.copy(this),t);let n=en.r,a=en.g,s=en.b,r=Math.max(n,a,s),o=Math.min(n,a,s),c,l,h=(o+r)/2;if(o===r)c=0,l=0;else{let d=r-o;switch(l=h<=.5?d/(r+o):d/(2-r-o),r){case n:c=(a-s)/d+(a<s?6:0);break;case a:c=(s-n)/d+2;break;case s:c=(n-a)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Rt){st.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,a=en.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(jr);let n=Ns(Ti.h,jr.h,t),a=Ns(Ti.s,jr.s,t),s=Ns(Ti.l,jr.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new We;We.NAMES=Mf;var ks=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new We(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},la=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new L,si=new L,vl=new L,ri=new L,Aa=new L,Ta=new L,md=new L,_l=new L,yl=new L,Ml=new L,Sl=new bt,wl=new bt,El=new bt,Ni=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Fn.subVectors(e,t),a.cross(Fn);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){Fn.subVectors(a,t),si.subVectors(n,t),vl.subVectors(e,t);let r=Fn.dot(Fn),o=Fn.dot(si),c=Fn.dot(vl),l=si.dot(si),h=si.dot(vl),d=r*l-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,u=(l*c-o*h)*f,m=(r*h-o*c)*f;return s.set(1-u-m,m,u)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,a,s,r,o,c){return this.getBarycoord(e,t,n,a,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ri.x),c.addScaledVector(r,ri.y),c.addScaledVector(o,ri.z),c)}static getInterpolatedAttribute(e,t,n,a,s,r){return Sl.setScalar(0),wl.setScalar(0),El.setScalar(0),Sl.fromBufferAttribute(e,t),wl.fromBufferAttribute(e,n),El.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Sl,s.x),r.addScaledVector(wl,s.y),r.addScaledVector(El,s.z),r}static isFrontFacing(e,t,n,a){return Fn.subVectors(n,t),si.subVectors(e,t),Fn.cross(si).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Fn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,a=this.b,s=this.c,r,o;Aa.subVectors(a,n),Ta.subVectors(s,n),_l.subVectors(e,n);let c=Aa.dot(_l),l=Ta.dot(_l);if(c<=0&&l<=0)return t.copy(n);yl.subVectors(e,a);let h=Aa.dot(yl),d=Ta.dot(yl);if(h>=0&&d<=h)return t.copy(a);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return r=c/(c-h),t.copy(n).addScaledVector(Aa,r);Ml.subVectors(e,s);let u=Aa.dot(Ml),m=Ta.dot(Ml);if(m>=0&&u<=m)return t.copy(s);let g=u*l-c*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Ta,o);let b=h*m-u*d;if(b<=0&&d-h>=0&&u-m>=0)return md.subVectors(s,a),o=(d-h)/(d-h+(u-m)),t.copy(a).addScaledVector(md,o);let p=1/(b+g+f);return r=g*p,o=f*p,t.copy(n).addScaledVector(Aa,r).addScaledVector(Ta,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,On):On.fromBufferAttribute(s,r),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}let a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),qr.subVectors(this.max,Ss),Ra.subVectors(e.a,Ss),Ia.subVectors(e.b,Ss),Ca.subVectors(e.c,Ss),Ri.subVectors(Ia,Ra),Ii.subVectors(Ca,Ia),ia.subVectors(Ra,Ca);let t=[0,-Ri.z,Ri.y,0,-Ii.z,Ii.y,0,-ia.z,ia.y,Ri.z,0,-Ri.x,Ii.z,0,-Ii.x,ia.z,0,-ia.x,-Ri.y,Ri.x,0,-Ii.y,Ii.x,0,-ia.y,ia.x,0];return!Al(t,Ra,Ia,Ca,qr)||(t=[1,0,0,0,1,0,0,0,1],!Al(t,Ra,Ia,Ca,qr))?!1:(Yr.crossVectors(Ri,Ii),t=[Yr.x,Yr.y,Yr.z],Al(t,Ra,Ia,Ca,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},oi=[new L,new L,new L,new L,new L,new L,new L,new L],On=new L,Xr=new Wn,Ra=new L,Ia=new L,Ca=new L,Ri=new L,Ii=new L,ia=new L,Ss=new L,qr=new L,Yr=new L,aa=new L;function Al(i,e,t,n,a){for(let s=0,r=i.length-3;s<=r;s+=3){aa.fromArray(i,s);let o=a.x*Math.abs(aa.x)+a.y*Math.abs(aa.y)+a.z*Math.abs(aa.z),c=e.dot(aa),l=t.dot(aa),h=n.dot(aa);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var hi=zp();function zp(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),a=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,a[c]=24,a[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,a[c]=-l-1,a[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,a[c]=13,a[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,a[c]=24,a[c|256]=24):(n[c]=31744,n[c|256]=64512,a[c]=13,a[c|256]=13)}let s=new Uint32Array(2048),r=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)r[c]=c<<23;r[31]=1199570944,r[32]=2147483648;for(let c=33;c<63;++c)r[c]=2147483648+(c-32<<23);r[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:a,mantissaTable:s,exponentTable:r,offsetTable:o}}function Hp(i){Math.abs(i)>65504&&qe("DataUtils.toHalfFloat(): Value out of range."),i=it(i,-65504,65504),hi.floatView[0]=i;let e=hi.uint32View[0],t=e>>23&511;return hi.baseTable[t]+((e&8388607)>>hi.shiftTable[t])}function Gp(i){let e=i>>10;return hi.uint32View[0]=hi.mantissaTable[hi.offsetTable[e]+(i&1023)]+hi.exponentTable[e],hi.floatView[0]}var Li=class{static toHalfFloat(e){return Hp(e)}static fromHalfFloat(e){return Gp(e)}},Lt=new L,Kr=new ce,Vp=0,ot=class extends Vn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mf,this.updateRanges=[],this.gpuType=Nt,this.version=0,this._normalizationScale=e!==void 0?uh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),a=this._normalize(a)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),a=this._normalize(a),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):_f(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):yf(e,this.array)}};var Bs=class extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var zs=class extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wp=new Wn,ws=new L,Tl=new L,Ui=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wp.setFromPoints(e).getCenter(n);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);let t=ws.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(ws,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Tl)),this.expandByPoint(ws.copy(e.center).sub(Tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},jp=0,Sn=new Je,Rl=new hn,Na=new L,xn=new Wn,Es=new Wn,Gt=new L,ht=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?zs:Bs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Rl.lookAt(e),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Na).negate(),this.translate(Na.x,Na.y,Na.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let a=0,s=e.length;a<s;a++){let r=e[a];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(e.length,t.count);for(let a=0;a<n;a++){let s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){let s=t[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(xn.min,Es.min),xn.expandByPoint(Gt),Gt.addVectors(xn.max,Es.max),xn.expandByPoint(Gt)):(xn.expandByPoint(Es.min),xn.expandByPoint(Es.max))}xn.getCenter(n);let a=0;for(let s=0,r=e.count;s<r;s++)Gt.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(Gt));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Gt.fromBufferAttribute(o,l),c&&(Na.fromBufferAttribute(e,l),Gt.add(Na)),a=Math.max(a,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,a=t.normal,s=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new ot(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],c=[],l=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new L,c[C]=new L;let h=new L,d=new L,f=new L,u=new ce,m=new ce,g=new ce,b=new L,p=new L;function _(C,T,P){l[C]=l[T]=l[P]=1,h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,T),f.fromBufferAttribute(n,P),u.fromBufferAttribute(s,C),m.fromBufferAttribute(s,T),g.fromBufferAttribute(s,P),d.sub(h),f.sub(h),m.sub(u),g.sub(u);let N=1/(m.x*g.y-g.x*m.y);isFinite(N)&&(b.copy(d).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(N),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(N),o[C].add(b),o[T].add(b),o[P].add(b),c[C].add(p),c[T].add(p),c[P].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,T=y.length;C<T;++C){let P=y[C],N=P.start,U=P.count;for(let R=N,O=N+U;R<O;R+=3)_(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let v=new L,E=new L,w=new L,x=new L;function M(C){w.fromBufferAttribute(a,C),x.copy(w);let T=o[C];v.copy(T),v.sub(w.multiplyScalar(w.dot(T))).normalize(),E.crossVectors(x,T);let N=E.dot(c[C])<0?-1:1;r.setXYZW(C,v.x,v.y,v.z,N)}for(let C=0,T=n.count;C<T;++C)l[C]&&M(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let a=new L,s=new L,r=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let f=0,u=e.count;f<u;f+=3){let m=e.getX(f+0),g=e.getX(f+1),b=e.getX(f+2);a.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(b,l.x,l.y,l.z)}else for(let f=0,u=t.count;f<u;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),u=0,m=0;for(let g=0,b=c.length;g<b;g++){o.isInterleavedBufferAttribute?u=c[g]*o.data.stride+o.offset:u=c[g]*h;for(let p=0;p<h;p++)f[m++]=l[u++]}return new ot(f,h,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,a=this.attributes;for(let o in a){let c=a[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],u=e(f,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let a={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let u=l[d];h.push(u.toJSON(e.data))}h.length>0&&(a[c]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let a=e.attributes;for(let l in a){let h=a[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,h=r.length;l<h;l++){let d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Il=new L,Xp=new L,qp=new Ze,kn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let a=Il.subVectors(n,t).cross(Xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let a=e.delta(Il),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(a,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qp.getNormalMatrix(e),a=this.coplanarPoint(Il).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Yp=0,Di=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=$a,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Zl,this.blendEquation=ua,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){let r=[];for(let o in s){let c=s[o];delete c.metadata,r.push(c)}return r}if(t){let s=a(e.textures),r=a(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new We().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ci=new L,Cl=new L,Jr=new L,Zr=new L,To=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Cl.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Cl);let s=e.distanceTo(t)*.5,r=-this.direction.dot(Jr),o=Zr.dot(this.direction),c=-Zr.dot(Jr),l=Zr.lengthSq(),h=Math.abs(1-r*r),d,f,u,m;if(h>0)if(d=r*c-o,f=r*o-c,m=s*h,d>=0)if(f>=-m)if(f<=m){let g=1/h;d*=g,f*=g,u=d*(d+r*f+2*o)+f*(r*d+f+2*c)+l}else f=s,d=Math.max(0,-(r*f+o)),u=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(r*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-r*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),u=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-s,-c),s),u=f*(f+2*c)+l):(d=Math.max(0,-(r*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),u=-d*d+f*(f+2*c)+l);else f=r>0?-s:s,d=Math.max(0,-(r*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Cl).addScaledVector(Jr,f),u}intersectSphere(e,t){if(e.radius<0)return null;ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),a=ci.dot(ci)-n*n,s=e.radius*e.radius;if(a>s)return null;let r=Math.sqrt(s-a),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,r,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,a=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,a=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||s>a||((s>n||isNaN(n))&&(n=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,a,s){let r=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-r.x,f=e.y-r.y,u=e.z-r.z,m=t.x-r.x,g=t.y-r.y,b=t.z-r.z,p=n.x-r.x,_=n.y-r.y,y=n.z-r.z,v=Math.abs(c),E=Math.abs(l),w=Math.abs(h),x,M,C,T,P,N,U,R,O,G,z,k;if(v>=E&&v>=w?(C=c,N=d,O=m,k=p,c>=0?(x=l,M=h,T=f,P=u,U=g,R=b,G=_,z=y):(x=h,M=l,T=u,P=f,U=b,R=g,G=y,z=_)):E>=w?(C=l,N=f,O=g,k=_,l>=0?(x=h,M=c,T=u,P=d,U=b,R=m,G=y,z=p):(x=c,M=h,T=d,P=u,U=m,R=b,G=p,z=y)):(C=h,N=u,O=b,k=y,h>=0?(x=c,M=l,T=d,P=f,U=m,R=g,G=p,z=_):(x=l,M=c,T=f,P=d,U=g,R=m,G=_,z=p)),C===0)return null;let B=x/C,V=M/C,j=1/C,ie=T-B*N,le=P-V*N,Y=U-B*O,se=R-V*O,ve=G-B*k,Pe=z-V*k,we=ve*se-Pe*Y,ke=ie*Pe-le*ve,ft=Y*le-se*ie;if(a){if(we<0||ke<0||ft<0)return null}else if((we<0||ke<0||ft<0)&&(we>0||ke>0||ft>0))return null;let Be=we+ke+ft;if(Be===0)return null;let Te=j*(we*N+ke*O+ft*k);return(Be>0?Te<0:Te>0)?null:this.at(Te/Be,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fi=class extends Di{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bd=new Je,sa=new To,Qr=new Ui,gd=new L,$r=new L,eo=new L,to=new L,Nl=new L,no=new L,xd=new L,io=new L,dt=class extends hn{constructor(e=new ht,t=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);let o=this.morphTargetInfluences;if(s&&o){no.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Nl.fromBufferAttribute(d,e),r?no.addScaledVector(Nl,h):no.addScaledVector(Nl.sub(t),h))}t.add(no)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(s),sa.copy(e.ray).recast(e.near),!(Qr.containsPoint(sa.origin)===!1&&(sa.intersectSphere(Qr,gd)===null||sa.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(bd.copy(s).invert(),sa.copy(e.ray).applyMatrix4(bd),!(n.boundingBox!==null&&sa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sa)))}_computeIntersections(e,t,n){let a,s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){let b=f[m],p=r[b.materialIndex],_=Math.max(b.start,u.start),y=Math.min(o.count,Math.min(b.start+b.count,u.start+u.count));for(let v=_,E=y;v<E;v+=3){let w=o.getX(v),x=o.getX(v+1),M=o.getX(v+2);a=ao(this,p,e,n,l,h,d,w,x,M),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=b.materialIndex,t.push(a))}}else{let m=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let b=m,p=g;b<p;b+=3){let _=o.getX(b),y=o.getX(b+1),v=o.getX(b+2);a=ao(this,r,e,n,l,h,d,_,y,v),a&&(a.faceIndex=Math.floor(b/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,g=f.length;m<g;m++){let b=f[m],p=r[b.materialIndex],_=Math.max(b.start,u.start),y=Math.min(c.count,Math.min(b.start+b.count,u.start+u.count));for(let v=_,E=y;v<E;v+=3){let w=v,x=v+1,M=v+2;a=ao(this,p,e,n,l,h,d,w,x,M),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=b.materialIndex,t.push(a))}}else{let m=Math.max(0,u.start),g=Math.min(c.count,u.start+u.count);for(let b=m,p=g;b<p;b+=3){let _=b,y=b+1,v=b+2;a=ao(this,r,e,n,l,h,d,_,y,v),a&&(a.faceIndex=Math.floor(b/3),t.push(a))}}}};function Kp(i,e,t,n,a,s,r,o){let c;if(e.side===Yt?c=n.intersectTriangle(r,s,a,!0,o):c=n.intersectTriangle(a,s,r,e.side===Vi,o),c===null)return null;io.copy(o),io.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(io);return l<t.near||l>t.far?null:{distance:l,point:io.clone(),object:i}}function ao(i,e,t,n,a,s,r,o,c,l){i.getVertexPosition(o,$r),i.getVertexPosition(c,eo),i.getVertexPosition(l,to);let h=Kp(i,e,t,n,$r,eo,to,xd);if(h){let d=new L;Ni.getBarycoord(xd,$r,eo,to,d),a&&(h.uv=Ni.getInterpolatedAttribute(a,o,c,l,d,new ce)),s&&(h.uv1=Ni.getInterpolatedAttribute(s,o,c,l,d,new ce)),r&&(h.normal=Ni.getInterpolatedAttribute(r,o,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new L,materialIndex:0};Ni.getNormal($r,eo,to,f.normal),h.face=f,h.barycoord=d}return h}var jn=class extends nn{constructor(e=null,t=1,n=1,a,s,r,o,c,l=Ut,h=Ut,d,f){super(null,r,o,c,l,h,a,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=class extends ot{constructor(e,t,n,a=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Pa=new Je,vd=new Je,so=[],_d=new Wn,Jp=new Je,As=new dt,Ts=new Ui,Hs=class extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ui(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<n;a++)this.setMatrixAt(a,Jp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pa),_d.copy(e.boundingBox).applyMatrix4(Pa),this.boundingBox.union(_d)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Pa),Ts.copy(e.boundingSphere).applyMatrix4(Pa),this.boundingSphere.union(Ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,a=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=a[r+o]}raycast(e,t){let n=this.matrixWorld,a=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),e.ray.intersectsSphere(Ts)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,Pa),vd.multiplyMatrices(n,Pa),As.matrixWorld=vd,As.raycast(e,so);for(let r=0,o=so.length;r<o;r++){let c=so[r];c.instanceId=s,c.object=this,t.push(c)}so.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ui(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,a=n.length+1;this.morphTexture===null&&(this.morphTexture=new jn(new Float32Array(a*this.count),a,this.count,ns,Nt));let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let o=this.geometry.morphTargetsRelative?1:1-r,c=a*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ra=new Ui,Zp=new ce(.5,.5),ro=new L,Xn=class{constructor(e=new kn,t=new kn,n=new kn,a=new kn,s=new kn,r=new kn){this.planes=[e,t,n,a,s,r]}set(e,t,n,a,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){let a=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],f=s[6],u=s[7],m=s[8],g=s[9],b=s[10],p=s[11],_=s[12],y=s[13],v=s[14],E=s[15];if(a[0].setComponents(l-r,u-h,p-m,E-_).normalize(),a[1].setComponents(l+r,u+h,p+m,E+_).normalize(),a[2].setComponents(l+o,u+d,p+g,E+y).normalize(),a[3].setComponents(l-o,u-d,p-g,E-y).normalize(),n)a[4].setComponents(c,f,b,v).normalize(),a[5].setComponents(l-c,u-f,p-b,E-v).normalize();else if(a[4].setComponents(l-c,u-f,p-b,E-v).normalize(),t===En)a[5].setComponents(l+c,u+f,p+b,E+v).normalize();else if(t===Pi)a[5].setComponents(c,f,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ra.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ra.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ra)}intersectsSprite(e){ra.center.set(0,0,0);let t=Zp.distanceTo(e.center);return ra.radius=.7071067811865476+t,ra.applyMatrix4(e.matrixWorld),this.intersectsSphere(ra)}intersectsSphere(e){let t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let a=t[n];if(ro.x=a.normal.x>0?e.max.x:e.min.x,ro.y=a.normal.y>0?e.max.y:e.min.y,ro.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yd=new Je,Ro=class i{constructor(){this.coordinateSystem=En,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let a=0;a<t.length;a++){let s=t[a];yd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[a]===void 0&&(n[a]=new Xn),n[a].setFromProjectionMatrix(yd,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let a=0;a<e._count;a++)t[a]===void 0&&(t[a]=new Xn),t[a].copy(n[a]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Gs=class extends nn{constructor(e=[],t=ma,n,a,s,r,o,c,l,h){super(e,t,n,a,s,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ha=class extends nn{constructor(e,t,n,a,s,r,o,c,l){super(e,t,n,a,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bn=class extends nn{constructor(e,t,n=zn,a,s,r,o=Ut,c=Ut,l,h=fi,d=1){if(h!==fi&&h!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,a,s,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Va(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Vs=class extends Bn{constructor(e,t=zn,n=ma,a,s,r=Ut,o=Ut,c,l=fi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,a,s,r,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ws=class extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qn=class i extends ht{constructor(e=1,t=1,n=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:r};let o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let c=[],l=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,a,r,2),m("x","z","y",1,-1,e,n,-t,a,r,3),m("x","y","z",1,-1,e,t,n,a,s,4),m("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2));function m(g,b,p,_,y,v,E,w,x,M,C){let T=v/x,P=E/M,N=v/2,U=E/2,R=w/2,O=x+1,G=M+1,z=0,k=0,B=new L;for(let V=0;V<G;V++){let j=V*P-U;for(let ie=0;ie<O;ie++){let le=ie*T-N;B[g]=le*_,B[b]=j*y,B[p]=R,l.push(B.x,B.y,B.z),B[g]=0,B[b]=0,B[p]=w>0?1:-1,h.push(B.x,B.y,B.z),d.push(ie/x),d.push(1-V/M),z+=1}}for(let V=0;V<M;V++)for(let j=0;j<x;j++){let ie=f+j+O*V,le=f+j+O*(V+1),Y=f+(j+1)+O*(V+1),se=f+(j+1)+O*V;c.push(ie,le,se),c.push(le,Y,se),k+=6}o.addGroup(u,k,C),u+=k,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var js=class i extends ht{constructor(e=1,t=32,n=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:a},t=Math.max(3,t);let s=[],r=[],o=[],c=[],l=new L,h=new ce;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let u=n+d/t*a;l.x=e*Math.cos(u),l.y=e*Math.sin(u),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[f]/e+1)/2,h.y=(r[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yn=class i extends ht{constructor(e=1,t=1,n=1,a=32,s=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c};let l=this;a=Math.floor(a),s=Math.floor(s);let h=[],d=[],f=[],u=[],m=0,g=[],b=n/2,p=0;_(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(u,2));function _(){let v=new L,E=new L,w=0,x=(t-e)/n;for(let M=0;M<=s;M++){let C=[],T=M/s,P=T*(t-e)+e;for(let N=0;N<=a;N++){let U=N/a,R=U*c+o,O=Math.sin(R),G=Math.cos(R);E.x=P*O,E.y=-T*n+b,E.z=P*G,d.push(E.x,E.y,E.z),v.set(O,x,G).normalize(),f.push(v.x,v.y,v.z),u.push(U,1-T),C.push(m++)}g.push(C)}for(let M=0;M<a;M++)for(let C=0;C<s;C++){let T=g[C][M],P=g[C+1][M],N=g[C+1][M+1],U=g[C][M+1];(e>0||C!==0)&&(h.push(T,P,U),w+=3),(t>0||C!==s-1)&&(h.push(P,N,U),w+=3)}l.addGroup(p,w,0),p+=w}function y(v){let E=m,w=new ce,x=new L,M=0,C=v===!0?e:t,T=v===!0?1:-1;for(let N=1;N<=a;N++)d.push(0,b*T,0),f.push(0,T,0),u.push(.5,.5),m++;let P=m;for(let N=0;N<=a;N++){let R=N/a*c+o,O=Math.cos(R),G=Math.sin(R);x.x=C*G,x.y=b*T,x.z=C*O,d.push(x.x,x.y,x.z),f.push(0,T,0),w.x=O*.5+.5,w.y=G*.5*T+.5,u.push(w.x,w.y),m++}for(let N=0;N<a;N++){let U=E+N,R=P+N;v===!0?h.push(R,R+1,U):h.push(R+1,R,U),M+=3}l.addGroup(p,M,v===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Xs=class i extends Yn{constructor(e=1,t=1,n=32,a=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,a,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:a,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,a=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(a),t.push(s),a=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),a=0,s=n.length,r;t?r=t:r=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(a=Math.floor(o+(c-o)/2),l=n[a]-r,l<0)o=a+1;else if(l>0)c=a-1;else{c=a;break}if(a=c,n[a]===r)return a/(s-1);let h=n[a],f=n[a+1]-h,u=(r-h)/f;return(a+u)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);let r=this.getPoint(a),o=this.getPoint(s),c=t||(r.isVector2?new ce:new L);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,a=[],s=[],r=[],o=new L,c=new Je;for(let u=0;u<=e;u++){let m=u/e;a[u]=this.getTangentAt(m,new L)}s[0]=new L,r[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(a[0].x),d=Math.abs(a[0].y),f=Math.abs(a[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(a[0],n).normalize(),s[0].crossVectors(a[0],o),r[0].crossVectors(a[0],s[0]);for(let u=1;u<=e;u++){if(s[u]=s[u-1].clone(),r[u]=r[u-1].clone(),o.crossVectors(a[u-1],a[u]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(it(a[u-1].dot(a[u]),-1,1));s[u].applyMatrix4(c.makeRotationAxis(o,m))}r[u].crossVectors(a[u],s[u])}if(t===!0){let u=Math.acos(it(s[0].dot(s[e]),-1,1));u/=e,a[0].dot(o.crossVectors(s[0],s[e]))>0&&(u=-u);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(a[m],u*m)),r[m].crossVectors(a[m],s[m])}return{tangents:a,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ja=class extends vn{constructor(e=0,t=0,n=1,a=1,s=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ce){let n=t,a=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(r?s=0:s=a),this.aClockwise===!0&&!r&&(s===a?s=-a:s=s-a);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,u=l-this.aY;c=f*h-u*d+this.aX,l=f*d+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Io=class extends ja{constructor(e,t,n,a,s,r){super(e,t,n,n,a,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function ph(){let i=0,e=0,t=0,n=0;function a(s,r,o,c){i=s,e=o,t=-3*s+3*r-2*o-c,n=2*s-2*r+o+c}return{initCatmullRom:function(s,r,o,c,l){a(r,o,l*(o-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,o,c,l,h,d){let f=(r-s)/l-(o-s)/(l+h)+(o-r)/h,u=(o-r)/h-(c-r)/(h+d)+(c-o)/d;f*=h,u*=h,a(r,o,f,u)},calc:function(s){let r=s*s,o=r*s;return i+e*s+t*r+n*o}}}var Md=new L,Sd=new L,Pl=new ph,Ll=new ph,Ul=new ph,pi=class extends vn{constructor(e=[],t=!1,n="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=a}getPoint(e,t=new L){let n=t,a=this.points,s=a.length,r=(s-(this.closed?0:1))*e,o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=a[(o-1)%s]:(Sd.subVectors(a[0],a[1]).add(a[0]),l=Sd);let d=a[o%s],f=a[(o+1)%s];if(this.closed||o+2<s?h=a[(o+2)%s]:(Md.subVectors(a[s-1],a[s-2]).add(a[s-1]),h=Md),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(f),u),b=Math.pow(f.distanceToSquared(h),u);g<1e-4&&(g=1),m<1e-4&&(m=g),b<1e-4&&(b=g),Pl.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,m,g,b),Ll.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,m,g,b),Ul.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,m,g,b)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),Ll.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Ul.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(Pl.calc(c),Ll.calc(c),Ul.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let a=e.points[t];this.points.push(new L().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wd(i,e,t,n,a){let s=(n-e)*.5,r=(a-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+r)*c+(-3*t+3*n-2*s-r)*o+s*i+t}function Qp(i,e){let t=1-i;return t*t*e}function $p(i,e){return 2*(1-i)*i*e}function em(i,e){return i*i*e}function Ps(i,e,t,n){return Qp(i,e)+$p(i,t)+em(i,n)}function tm(i,e){let t=1-i;return t*t*t*e}function nm(i,e){let t=1-i;return 3*t*t*i*e}function im(i,e){return 3*(1-i)*i*i*e}function am(i,e){return i*i*i*e}function Ls(i,e,t,n,a){return tm(i,e)+nm(i,t)+im(i,n)+am(i,a)}var qs=class extends vn{constructor(e=new ce,t=new ce,n=new ce,a=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=a}getPoint(e,t=new ce){let n=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Ls(e,a.x,s.x,r.x,o.x),Ls(e,a.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Co=class extends vn{constructor(e=new L,t=new L,n=new L,a=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=a}getPoint(e,t=new L){let n=t,a=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Ls(e,a.x,s.x,r.x,o.x),Ls(e,a.y,s.y,r.y,o.y),Ls(e,a.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ys=class extends vn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends vn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ks=class extends vn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,a=this.v0,s=this.v1,r=this.v2;return n.set(Ps(e,a.x,s.x,r.x),Ps(e,a.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Js=class extends vn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,a=this.v0,s=this.v1,r=this.v2;return n.set(Ps(e,a.x,s.x,r.x),Ps(e,a.y,s.y,r.y),Ps(e,a.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zs=class extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,a=this.points,s=(a.length-1)*e,r=Math.floor(s),o=s-r,c=a[r===0?r:r-1],l=a[r],h=a[r>a.length-2?a.length-1:r+1],d=a[r>a.length-3?a.length-1:r+2];return n.set(wd(o,c.x,l.x,h.x,d.x),wd(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let a=e.points[t];this.points.push(a.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let a=e.points[t];this.points.push(new ce().fromArray(a))}return this}},Po=Object.freeze({__proto__:null,ArcCurve:Io,CatmullRomCurve3:pi,CubicBezierCurve:qs,CubicBezierCurve3:Co,EllipseCurve:ja,LineCurve:Ys,LineCurve3:No,QuadraticBezierCurve:Ks,QuadraticBezierCurve3:Js,SplineCurve:Zs}),Lo=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),a=this.getCurveLengths(),s=0;for(;s<a.length;){if(a[s]>=n){let r=a[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,a=this.curves.length;n<a;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let a=0,s=this.curves;a<s.length;a++){let r=s[a],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let a=e.curves[t];this.curves.push(new Po[a.type]().fromJSON(a))}return this.cacheLengths=null,this}},Qs=class extends Lo{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ys(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,a){let s=new Ks(this.currentPoint.clone(),new ce(e,t),new ce(n,a));return this.curves.push(s),this.currentPoint.set(n,a),this}bezierCurveTo(e,t,n,a,s,r){let o=new qs(this.currentPoint.clone(),new ce(e,t),new ce(n,a),new ce(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Zs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,a,s,r){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,a,s,r),this}absarc(e,t,n,a,s,r){return this.absellipse(e,t,n,n,a,s,r),this}ellipse(e,t,n,a,s,r,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,a,s,r,o,c),this}absellipse(e,t,n,a,s,r,o,c){let l=new ja(e,t,n,a,s,r,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},mi=class extends Qs{constructor(e){super(e),this.uuid=ga(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,a=this.holes.length;n<a;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let a=e.holes[t];this.holes.push(new Qs().fromJSON(a))}return this}};function sm(i,e,t=2){let n=e&&e.length,a=n?e[0]*t:i.length,s=Sf(i,0,a,t,!0),r=[];if(!s||s.next===s.prev)return r;let o,c,l;if(n&&(s=hm(i,e,s,t)),i.length>80*t){o=i[0],c=i[1];let h=o,d=c;for(let f=t;f<a;f+=t){let u=i[f],m=i[f+1];u<o&&(o=u),m<c&&(c=m),u>h&&(h=u),m>d&&(d=m)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return $s(s,r,t,o,c,l,0),r}function Sf(i,e,t,n,a){let s;if(a===ym(i,e,t,n)>0)for(let r=e;r<t;r+=n)s=Ed(r/n|0,i[r],i[r+1],s);else for(let r=t-n;r>=e;r-=n)s=Ed(r/n|0,i[r],i[r+1],s);return s&&Xa(s,s.next)&&(tr(s),s=s.next),s}function da(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Xa(t,t.next)||At(t.prev,t,t.next)===0)){if(tr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $s(i,e,t,n,a,s,r){if(!i)return;!r&&s&&mm(i,n,a,s);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?om(i,n,a,s):rm(i)){e.push(c.i,i.i,l.i),tr(i),i=l.next,o=l.next;continue}if(i=l,i===o){r?r===1?(i=cm(da(i),e),$s(i,e,t,n,a,s,2)):r===2&&lm(i,e,t,n,a,s):$s(da(i),e,t,n,a,s,1);break}}}function rm(i){let e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;let a=e.x,s=t.x,r=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(a,s,r),d=Math.min(o,c,l),f=Math.max(a,s,r),u=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=u&&Rs(a,o,s,c,r,l,m.x,m.y)&&At(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function om(i,e,t,n){let a=i.prev,s=i,r=i.next;if(At(a,s,r)>=0)return!1;let o=a.x,c=s.x,l=r.x,h=a.y,d=s.y,f=r.y,u=Math.min(o,c,l),m=Math.min(h,d,f),g=Math.max(o,c,l),b=Math.max(h,d,f),p=zl(u,m,e,t,n),_=zl(g,b,e,t,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=_;){if(y.x>=u&&y.x<=g&&y.y>=m&&y.y<=b&&y!==a&&y!==r&&Rs(o,h,c,d,l,f,y.x,y.y)&&At(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=u&&v.x<=g&&v.y>=m&&v.y<=b&&v!==a&&v!==r&&Rs(o,h,c,d,l,f,v.x,v.y)&&At(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=u&&y.x<=g&&y.y>=m&&y.y<=b&&y!==a&&y!==r&&Rs(o,h,c,d,l,f,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=u&&v.x<=g&&v.y>=m&&v.y<=b&&v!==a&&v!==r&&Rs(o,h,c,d,l,f,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function cm(i,e){let t=i;do{let n=t.prev,a=t.next.next;!Xa(n,a)&&Ef(n,t,t.next,a)&&er(n,a)&&er(a,n)&&(e.push(n.i,t.i,a.i),tr(t),tr(t.next),t=i=a),t=t.next}while(t!==i);return da(t)}function lm(i,e,t,n,a,s){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&xm(r,o)){let c=Af(r,o);r=da(r,r.next),c=da(c,c.next),$s(r,e,t,n,a,s,0),$s(c,e,t,n,a,s,0);return}o=o.next}r=r.next}while(r!==i)}function hm(i,e,t,n){let a=[];for(let s=0,r=e.length;s<r;s++){let o=e[s]*n,c=s<r-1?e[s+1]*n:i.length,l=Sf(i,o,c,n,!1);l===l.next&&(l.steiner=!0),a.push(gm(l))}a.sort(dm);for(let s=0;s<a.length;s++)t=fm(a[s],t);return t}function dm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=n-a}return t}function fm(i,e){let t=um(i,e);if(!t)return e;let n=Af(t,i);return da(n,n.next),da(t,t.next)}function um(i,e){let t=e,n=i.x,a=i.y,s=-1/0,r;if(Xa(i,t))return t;do{if(Xa(i,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,r=t.x<t.next.x?t:t.next,d===n))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,c=r.x,l=r.y,h=1/0;t=r;do{if(n>=t.x&&t.x>=c&&n!==t.x&&wf(a<l?n:s,a,c,l,a<l?s:n,a,t.x,t.y)){let d=Math.abs(a-t.y)/(n-t.x);er(t,i)&&(d<h||d===h&&(t.x>r.x||t.x===r.x&&pm(r,t)))&&(r=t,h=d)}t=t.next}while(t!==o);return r}function pm(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function mm(i,e,t,n){let a=i;do a.z===0&&(a.z=zl(a.x,a.y,e,t,n)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==i);a.prevZ.nextZ=null,a.prevZ=null,bm(a)}function bm(i){let e,t=1;do{let n=i,a;i=null;let s=null;for(e=0;n;){e++;let r=n,o=0;for(let l=0;l<t&&(o++,r=r.nextZ,!!r);l++);let c=t;for(;o>0||c>0&&r;)o!==0&&(c===0||!r||n.z<=r.z)?(a=n,n=n.nextZ,o--):(a=r,r=r.nextZ,c--),s?s.nextZ=a:i=a,a.prevZ=s,s=a;n=r}s.nextZ=null,t*=2}while(e>1);return i}function zl(i,e,t,n,a){return i=(i-t)*a|0,e=(e-n)*a|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function wf(i,e,t,n,a,s,r,o){return(a-r)*(e-o)>=(i-r)*(s-o)&&(i-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(s-o)>=(a-r)*(n-o)}function Rs(i,e,t,n,a,s,r,o){return!(i===r&&e===o)&&wf(i,e,t,n,a,s,r,o)}function xm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vm(i,e)&&(er(i,e)&&er(e,i)&&_m(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||Xa(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xa(i,e){return i.x===e.x&&i.y===e.y}function Ef(i,e,t,n){let a=co(At(i,e,t)),s=co(At(i,e,n)),r=co(At(t,n,i)),o=co(At(t,n,e));return!!(a!==s&&r!==o||a===0&&oo(i,t,e)||s===0&&oo(i,n,e)||r===0&&oo(t,i,n)||o===0&&oo(t,e,n))}function oo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function co(i){return i>0?1:i<0?-1:0}function vm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ef(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function er(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function _m(i,e){let t=i,n=!1,a=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&a<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Af(i,e){let t=Hl(i.i,i.x,i.y),n=Hl(e.i,e.x,e.y),a=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=a,a.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Ed(i,e,t,n){let a=Hl(i,e,t);return n?(a.next=n.next,a.prev=n,n.next.prev=a,n.next=a):(a.prev=a,a.next=a),a}function tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ym(i,e,t,n){let a=0;for(let s=e,r=t-n;s<t;s+=n)a+=(i[r]-i[s])*(i[s+1]+i[r+1]),r=s;return a}var Gl=class{static triangulate(e,t,n=2){return sm(e,t,n)}},oa=class i{static area(e){let t=e.length,n=0;for(let a=t-1,s=0;s<t;a=s++)n+=e[a].x*e[s].y-e[s].x*e[a].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],a=[],s=[];Ad(e),Td(n,e);let r=e.length;t.forEach(Ad);for(let c=0;c<t.length;c++)a.push(r),r+=t[c].length,Td(n,t[c]);let o=Gl.triangulate(n,a);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Ad(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Td(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Oi=class i extends ht{constructor(e=new mi([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,a=[],s=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];r(l)}this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(s,2)),this.computeVertexNormals();function r(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:u-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,b=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Mm,y,v=!1,E,w,x,M;if(p){y=p.getSpacedPoints(h),v=!0,f=!1;let J=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,J),w=new L,x=new L,M=new L}f||(b=0,u=0,m=0,g=0);let C=o.extractPoints(l),T=C.shape,P=C.holes;if(!oa.isClockWise(T)){T=T.reverse();for(let J=0,he=P.length;J<he;J++){let de=P[J];oa.isClockWise(de)&&(P[J]=de.reverse())}}function U(J){let de=10000000000000001e-36,Ae=J[0];for(let me=1;me<=J.length;me++){let Q=me%J.length,ae=J[Q],fe=ae.x-Ae.x,xe=ae.y-Ae.y,Ge=fe*fe+xe*xe,D=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(Ae.x),Math.abs(Ae.y)),Oe=de*D*D;if(Ge<=Oe){J.splice(Q,1),me--;continue}Ae=ae}}U(T),P.forEach(U);let R=P.length,O=T;for(let J=0;J<R;J++){let he=P[J];T=T.concat(he)}function G(J,he,de){return he||Ye("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(he,de)}let z=T.length;function k(J,he,de){let Ae,me,Q,ae=J.x-he.x,fe=J.y-he.y,xe=de.x-J.x,Ge=de.y-J.y,D=ae*ae+fe*fe,Oe=ae*Ge-fe*xe;if(Math.abs(Oe)>Number.EPSILON){let He=Math.sqrt(D),et=Math.sqrt(xe*xe+Ge*Ge),re=he.x-fe/He,rt=he.y+ae/He,Ne=de.x-Ge/et,je=de.y+xe/et,I=((Ne-re)*Ge-(je-rt)*xe)/(ae*Ge-fe*xe);Ae=re+ae*I-J.x,me=rt+fe*I-J.y;let S=Ae*Ae+me*me;if(S<=2)return new ce(Ae,me);Q=Math.sqrt(S/2)}else{let He=!1;ae>Number.EPSILON?xe>Number.EPSILON&&(He=!0):ae<-Number.EPSILON?xe<-Number.EPSILON&&(He=!0):Math.sign(fe)===Math.sign(Ge)&&(He=!0),He?(Ae=-fe,me=ae,Q=Math.sqrt(D)):(Ae=ae,me=fe,Q=Math.sqrt(D/2))}return new ce(Ae/Q,me/Q)}let B=[];for(let J=0,he=O.length,de=he-1,Ae=J+1;J<he;J++,de++,Ae++)de===he&&(de=0),Ae===he&&(Ae=0),B[J]=k(O[J],O[de],O[Ae]);let V=[],j,ie=B.concat();for(let J=0,he=R;J<he;J++){let de=P[J];j=[];for(let Ae=0,me=de.length,Q=me-1,ae=Ae+1;Ae<me;Ae++,Q++,ae++)Q===me&&(Q=0),ae===me&&(ae=0),j[Ae]=k(de[Ae],de[Q],de[ae]);V.push(j),ie=ie.concat(j)}let le;if(b===0)le=oa.triangulateShape(O,P);else{let J=[],he=[];for(let de=0;de<b;de++){let Ae=de/b,me=u*Math.cos(Ae*Math.PI/2),Q=m*Math.sin(Ae*Math.PI/2)+g;for(let ae=0,fe=O.length;ae<fe;ae++){let xe=G(O[ae],B[ae],Q);ke(xe.x,xe.y,-me),Ae===0&&J.push(xe)}for(let ae=0,fe=R;ae<fe;ae++){let xe=P[ae];j=V[ae];let Ge=[];for(let D=0,Oe=xe.length;D<Oe;D++){let He=G(xe[D],j[D],Q);ke(He.x,He.y,-me),Ae===0&&Ge.push(He)}Ae===0&&he.push(Ge)}}le=oa.triangulateShape(J,he)}let Y=le.length,se=m+g;for(let J=0;J<z;J++){let he=f?G(T[J],ie[J],se):T[J];v?(x.copy(E.normals[0]).multiplyScalar(he.x),w.copy(E.binormals[0]).multiplyScalar(he.y),M.copy(y[0]).add(x).add(w),ke(M.x,M.y,M.z)):ke(he.x,he.y,0)}for(let J=1;J<=h;J++)for(let he=0;he<z;he++){let de=f?G(T[he],ie[he],se):T[he];v?(x.copy(E.normals[J]).multiplyScalar(de.x),w.copy(E.binormals[J]).multiplyScalar(de.y),M.copy(y[J]).add(x).add(w),ke(M.x,M.y,M.z)):ke(de.x,de.y,d/h*J)}for(let J=b-1;J>=0;J--){let he=J/b,de=u*Math.cos(he*Math.PI/2),Ae=m*Math.sin(he*Math.PI/2)+g;for(let me=0,Q=O.length;me<Q;me++){let ae=G(O[me],B[me],Ae);ke(ae.x,ae.y,d+de)}for(let me=0,Q=P.length;me<Q;me++){let ae=P[me];j=V[me];for(let fe=0,xe=ae.length;fe<xe;fe++){let Ge=G(ae[fe],j[fe],Ae);v?ke(Ge.x,Ge.y+y[h-1].y,y[h-1].x+de):ke(Ge.x,Ge.y,d+de)}}}ve(),Pe();function ve(){let J=a.length/3;if(f){let he=0,de=z*he;for(let Ae=0;Ae<Y;Ae++){let me=le[Ae];ft(me[2]+de,me[1]+de,me[0]+de)}he=h+b*2,de=z*he;for(let Ae=0;Ae<Y;Ae++){let me=le[Ae];ft(me[0]+de,me[1]+de,me[2]+de)}}else{for(let he=0;he<Y;he++){let de=le[he];ft(de[2],de[1],de[0])}for(let he=0;he<Y;he++){let de=le[he];ft(de[0]+z*h,de[1]+z*h,de[2]+z*h)}}n.addGroup(J,a.length/3-J,0)}function Pe(){let J=a.length/3,he=0;we(O,he),he+=O.length;for(let de=0,Ae=P.length;de<Ae;de++){let me=P[de];we(me,he),he+=me.length}n.addGroup(J,a.length/3-J,1)}function we(J,he){let de=J.length;for(;--de>=0;){let Ae=de,me=de-1;me<0&&(me=J.length-1);for(let Q=0,ae=h+b*2;Q<ae;Q++){let fe=z*Q,xe=z*(Q+1),Ge=he+Ae+fe,D=he+me+fe,Oe=he+me+xe,He=he+Ae+xe;Be(Ge,D,Oe,He)}}}function ke(J,he,de){c.push(J),c.push(he),c.push(de)}function ft(J,he,de){Te(J),Te(he),Te(de);let Ae=a.length/3,me=_.generateTopUV(n,a,Ae-3,Ae-2,Ae-1);Le(me[0]),Le(me[1]),Le(me[2])}function Be(J,he,de,Ae){Te(J),Te(he),Te(Ae),Te(he),Te(de),Te(Ae);let me=a.length/3,Q=_.generateSideWallUV(n,a,me-6,me-3,me-2,me-1);Le(Q[0]),Le(Q[1]),Le(Q[3]),Le(Q[1]),Le(Q[2]),Le(Q[3])}function Te(J){a.push(c[J*3+0]),a.push(c[J*3+1]),a.push(c[J*3+2])}function Le(J){s.push(J.x),s.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sm(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}let a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new Po[a.type]().fromJSON(a)),new i(n,e.options)}},Mm={generateTopUV:function(i,e,t,n,a){let s=e[t*3],r=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[a*3],h=e[a*3+1];return[new ce(s,r),new ce(o,c),new ce(l,h)]},generateSideWallUV:function(i,e,t,n,a,s){let r=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[a*3],u=e[a*3+1],m=e[a*3+2],g=e[s*3],b=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(r-l)?[new ce(r,1-c),new ce(l,1-d),new ce(f,1-m),new ce(g,1-p)]:[new ce(o,1-c),new ce(h,1-d),new ce(u,1-m),new ce(b,1-p)]}};function Sm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,a=i.length;n<a;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var nr=class i extends ht{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:a},t=Math.floor(t),a=it(a,0,Math.PI*2);let s=[],r=[],o=[],c=[],l=[],h=1/t,d=new L,f=new ce,u=new L,m=new L,g=new L,b=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:b=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,u.x=p*1,u.y=-b,u.z=p*0,g.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:g.normalize(),c.push(g.x,g.y,g.z);break;default:b=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,u.x=p*1,u.y=-b,u.z=p*0,m.copy(u),u.x+=g.x,u.y+=g.y,u.z+=g.z,u.normalize(),c.push(u.x,u.y,u.z),g.copy(m)}for(let _=0;_<=t;_++){let y=n+_*h*a,v=Math.sin(y),E=Math.cos(y);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*v,d.y=e[w].y,d.z=e[w].x*E,r.push(d.x,d.y,d.z),f.x=_/t,f.y=w/(e.length-1),o.push(f.x,f.y);let x=c[3*w+0]*v,M=c[3*w+1],C=c[3*w+0]*E;l.push(x,M,C)}}for(let _=0;_<t;_++)for(let y=0;y<e.length-1;y++){let v=y+_*e.length,E=v,w=v+e.length,x=v+e.length+1,M=v+1;s.push(E,w,M),s.push(x,M,w)}this.setIndex(s),this.setAttribute("position",new Ke(r,3)),this.setAttribute("uv",new Ke(o,2)),this.setAttribute("normal",new Ke(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var bi=class i extends ht{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};let s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(a),l=o+1,h=c+1,d=e/o,f=t/c,u=[],m=[],g=[],b=[];for(let p=0;p<h;p++){let _=p*f-r;for(let y=0;y<l;y++){let v=y*d-s;m.push(v,-_,0),g.push(0,0,1),b.push(y/o),b.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let y=_+l*p,v=_+l*(p+1),E=_+1+l*(p+1),w=_+1+l*p;u.push(y,v,w),u.push(v,E,w)}this.setIndex(u),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Tn=class i extends ht{constructor(e=1,t=32,n=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(r+o,Math.PI),l=0,h=[],d=new L,f=new L,u=[],m=[],g=[],b=[];for(let p=0;p<=n;p++){let _=[],y=p/n,v=r+y*o,E=e*Math.cos(v),w=Math.sqrt(e*e-E*E),x=0;p===0&&r===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let M=0;M<=t;M++){let C=M/t,T=a+C*s;d.x=-w*Math.cos(T),d.y=E,d.z=w*Math.sin(T),m.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),b.push(C+x,1-y),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let y=h[p][_+1],v=h[p][_],E=h[p+1][_],w=h[p+1][_+1];(p!==0||r>0)&&u.push(y,v,w),(p!==n-1||c<Math.PI)&&u.push(v,E,w)}this.setIndex(u),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(g,3)),this.setAttribute("uv",new Ke(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ir=class i extends ht{constructor(e=1,t=.4,n=12,a=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:a,arc:s,thetaStart:r,thetaLength:o},n=Math.floor(n),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=new L,u=new L,m=new L;for(let g=0;g<=n;g++){let b=r+g/n*o;for(let p=0;p<=a;p++){let _=p/a*s;u.x=(e+t*Math.cos(b))*Math.cos(_),u.y=(e+t*Math.cos(b))*Math.sin(_),u.z=t*Math.sin(b),l.push(u.x,u.y,u.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),m.subVectors(u,f).normalize(),h.push(m.x,m.y,m.z),d.push(p/a),d.push(g/n)}}for(let g=1;g<=n;g++)for(let b=1;b<=a;b++){let p=(a+1)*g+b-1,_=(a+1)*(g-1)+b-1,y=(a+1)*(g-1)+b,v=(a+1)*g+b;c.push(p,_,v),c.push(_,y,v)}this.setIndex(c),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ki=class i extends ht{constructor(e=new Js(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,a=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:a,closed:s};let r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new L,c=new L,l=new ce,h=new L,d=[],f=[],u=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(u,2));function g(){for(let y=0;y<t;y++)b(y);b(s===!1?t:0),_(),p()}function b(y){h=e.getPointAt(y/t,h);let v=r.normals[y],E=r.binormals[y];for(let w=0;w<=a;w++){let x=w/a*Math.PI*2,M=Math.sin(x),C=-Math.cos(x);c.x=C*v.x+M*E.x,c.y=C*v.y+M*E.y,c.z=C*v.z+M*E.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=a;v++){let E=(a+1)*(y-1)+(v-1),w=(a+1)*y+(v-1),x=(a+1)*y+v,M=(a+1)*(y-1)+v;m.push(E,w,M),m.push(w,x,M)}}function _(){for(let y=0;y<=t;y++)for(let v=0;v<=a;v++)l.x=y/t,l.y=v/a,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Po[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function xa(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let a=i[t][n];if(Rd(a))a.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(Rd(a[0])){let s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[t][n]=s}else e[t][n]=a.slice();else e[t][n]=a}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=xa(i[t]);for(let a in n)e[a]=n[a]}return e}function Rd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var yi={clone:xa,merge:sn},Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,St=class extends Di{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=wm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new We().setHex(a.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(a.value);break;case"v3":this.uniforms[n].value=new L().fromArray(a.value);break;case"v4":this.uniforms[n].value=new bt().fromArray(a.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(a.value);break;case"m4":this.uniforms[n].value=new Je().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},qa=class extends St{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qt=class extends Di{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Uo=class extends Di{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Do=class extends Di{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function La(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Bi=class{constructor(e,t,n,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,a=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<a)){for(let o=n+2;;){if(a===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=a,a=t[++n],e<a)break e}r=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(a=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){let o=n+r>>>1;e<t[o]?r=o:n=o+1}if(a=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,a)}return this.interpolate_(n,s,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,a=this.valueSize,s=e*a;for(let r=0;r!==a;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fo=class extends Bi{constructor(e,t,n,a){super(e,t,n,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ol,endingEnd:Ol}}intervalChanged_(e,t,n){let a=this.parameterPositions,s=e-2,r=e+1,o=a[s],c=a[r];if(o===void 0)switch(this.getSettings_().endingStart){case kl:s=e,o=2*t-n;break;case Bl:s=a.length-2,o=t+a[s]-a[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kl:r=e,c=2*n-t;break;case Bl:r=1,c=n+a[1]-a[0];break;default:r=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(n-t)/(a-t),g=m*m,b=g*m,p=-f*b+2*f*g-f*m,_=(1+f)*b+(-1.5-2*f)*g+(-.5+f)*m+1,y=(-1-u)*b+(1.5+u)*g+.5*m,v=u*b-u*g;for(let E=0;E!==o;++E)s[E]=p*r[h+E]+_*r[l+E]+y*r[c+E]+v*r[d+E];return s}},Oo=class extends Bi{constructor(e,t,n,a){super(e,t,n,a)}interpolate_(e,t,n,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(a-t),d=1-h;for(let f=0;f!==o;++f)s[f]=r[l+f]*d+r[c+f]*h;return s}},ko=class extends Bi{constructor(e,t,n,a){super(e,t,n,a)}interpolate_(e){return this.copySampleValue_(e-1)}},Bo=class extends Bi{interpolate_(e,t,n,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(a-t),g=1-m;for(let b=0;b!==o;++b)s[b]=r[l+b]*g+r[c+b]*m;return s}let f=o*2,u=e-1;for(let m=0;m!==o;++m){let g=r[l+m],b=r[c+m],p=u*f+m*2,_=d[p],y=d[p+1],v=e*f+m*2,E=h[v],w=h[v+1],x=Rm(n,t,_,E,a);s[m]=Tf(x,g,y,w,b)}return s}};function Tf(i,e,t,n,a){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*a}function Tm(i,e,t,n,a){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(a-n)}function Rm(i,e,t,n,a){let s=(i-e)/(a-e);for(let r=0;r<8;r++){let o=Tf(s,e,t,n,a)-i;if(Math.abs(o)<1e-10)break;let c=Tm(s,e,t,n,a);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var _n=class{constructor(e,t,n,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=La(t,this.TimeBufferType),this.values=La(n,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:La(e.times,Array),values:La(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(n.interpolation=a),lo(e.settings)&&(n.settings={inTangents:La(e.settings.inTangents,Array),outTangents:La(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Bo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case So:t=this.InterpolantFactoryMethodLinear;break;case uo:t=this.InterpolantFactoryMethodSmooth;break;case Fl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return So;case this.InterpolantFactoryMethodSmooth:return uo;case this.InterpolantFactoryMethodBezier:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,a=t.length;n!==a;++n)t[n]+=e;lo(this.settings)&&(Id(this.settings.inTangents,e),Id(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,a=t.length;n!==a;++n)t[n]*=e;lo(this.settings)&&(Cd(this.settings.inTangents,e),Cd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,a=n.length,s=0,r=a-1;for(;s!==a&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,a=this.values,s=n.length;s===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Ye("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){Ye("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(a!==void 0&&pp(a))for(let o=0,c=a.length;o!==c;++o){let l=a[o];if(isNaN(l)){Ye("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),a=this.getInterpolation()===uo,s=e.length-1,r=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(a)c=!0;else{let d=o*n,f=d-n,u=d+n;for(let m=0;m!==n;++m){let g=t[d+m];if(g!==t[f+m]||g!==t[u+m]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];let d=o*n,f=r*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,a=new n(this.name,e,t);return a.createInterpolant=this.createInterpolant,lo(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function Id(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Cd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=So;var zi=class extends _n{constructor(e,t,n){super(e,t,n)}};zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Us;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var zo=class extends _n{constructor(e,t,n,a){super(e,t,n,a)}};zo.prototype.ValueTypeName="color";var Ho=class extends _n{constructor(e,t,n,a){super(e,t,n,a)}};Ho.prototype.ValueTypeName="number";var Go=class extends Bi{constructor(e,t,n,a){super(e,t,n,a)}interpolate_(e,t,n,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(a-t),l=e*o;for(let h=l+o;l!==h;l+=4)Dt.slerpFlat(s,0,r,l-o,r,l,c);return s}},ar=class extends _n{constructor(e,t,n,a){super(e,t,n,a)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}};ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends _n{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Us;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends _n{constructor(e,t,n,a){super(e,t,n,a)}};Vo.prototype.ValueTypeName="vector";var ka={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Nd(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Nd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Nd(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ya=class{constructor(e,t,n){let a=this,s=!1,r=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&a.onStart!==void 0&&a.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,a.onProgress!==void 0&&a.onProgress(h,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let u=l[d],m=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rf=new Ya,Gi=class{constructor(e){this.manager=e!==void 0?e:Rf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(a,s){n.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var li={},Vl=class extends Error{constructor(e,t){super(e),this.response=t}},Wo=class extends Gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=ka.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:a});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:a});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=li[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=f?parseInt(f):0,m=u!==0,g=0,b=new ReadableStream({start(p){_();function _(){d.read().then(({done:y,value:v})=>{if(y)p.close();else{g+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:u});for(let w=0,x=h.length;w<x;w++){let M=h[w];M.onProgress&&M.onProgress(E)}p.enqueue(v),_()}},y=>{p.error(y)})}}});return new Response(b)}else throw new Vl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,u=new TextDecoder(f);return l.arrayBuffer().then(m=>u.decode(m))}}}).then(l=>{ka.add(`file:${e}`,l);let h=li[e];delete li[e];for(let d=0,f=h.length;d<f;d++){let u=h[d];u.onLoad&&u.onLoad(l)}}).catch(l=>{let h=li[e];if(h===void 0)throw this.manager.itemError(e),l;delete li[e];for(let d=0,f=h.length;d<f;d++){let u=h[d];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ua=new WeakMap,jo=class extends Gi{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=ka.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let d=Ua.get(r);d===void 0&&(d=[],Ua.set(r,d)),d.push({onLoad:t,onError:a})}return r}let o=za("img");function c(){h(),t&&t(this);let d=Ua.get(this)||[];for(let f=0;f<d.length;f++){let u=d[f];u.onLoad&&u.onLoad(this)}Ua.delete(this),s.manager.itemEnd(e)}function l(d){h(),a&&a(d),ka.remove(`image:${e}`);let f=Ua.get(this)||[];for(let u=0;u<f.length;u++){let m=f[u];m.onError&&m.onError(d)}Ua.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ka.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var sr=class extends Gi{constructor(e){super(e)}load(e,t,n,a){let s=this,r=new jn,o=new Wo(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let l;try{l=s.parse(c)}catch(h){a!==void 0?a(h):Ye(h);return}s._applyTexData(r,l),t&&t(r,l)},n,a),r}createDataTexture(e){let t=new jn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:wn,e.wrapT=t.wrapT!==void 0?t.wrapT:wn,e.magFilter=t.magFilter!==void 0?t.magFilter:_t,e.minFilter=t.minFilter!==void 0?t.minFilter:_t,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=an),t.mipmapCount===1&&(e.minFilter=_t),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},rr=class extends Gi{constructor(e){super(e)}load(e,t,n,a){let s=new nn,r=new jo(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,a),s}},Ka=class extends hn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Dl=new Je,Pd=new L,Ld=new L,Ja=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xn,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pd),Ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ld),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Dl,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=a?a.z/s.x:1,o=a?a.w/s.y:1,c=a?a.x/s.x:0,l=a?a.y/s.y:0;e.coordinateSystem===Pi||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ho=new L,fo=new Dt,Gn=new L,or=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ho,fo,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,fo,Gn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ho,fo,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,fo,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ci=new L,Ud=new ce,Dd=new ce,tn=class extends or{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,Ud,Dd),t.subVectors(Dd,Ud)}setViewOffset(e,t,n,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*a/c,t-=r.offsetY*n/l,a*=r.width/c,n*=r.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Wl=class extends Ja{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},cr=class extends Ka{constructor(e,t,n=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=a,this.shadow=new Wl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},gi=class extends or{constructor(e=-1,t=1,n=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=n-e,r=n+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var lr=class extends ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Da=-90,Fa=1,Za=class extends hn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new tn(Da,Fa,e,t);a.layers=this.layers,this.add(a);let s=new tn(Da,Fa,e,t);s.layers=this.layers,this.add(s);let r=new tn(Da,Fa,e,t);r.layers=this.layers,this.add(r);let o=new tn(Da,Fa,e,t);o.layers=this.layers,this.add(o);let c=new tn(Da,Fa,e,t);c.layers=this.layers,this.add(c);let l=new tn(Da,Fa,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,a,s,r,o,c]=t;for(let l of t)this.remove(l);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pi)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,a),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,a),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,a),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=g,e.setRenderTarget(n,5,a),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Xo=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},hr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Im.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Im(){this._document.hidden===!1&&this.reset()}var bh="\\[\\]\\.:\\/",Cm=new RegExp("["+bh+"]","g"),gh="[^"+bh+"]",Nm="[^"+bh.replace("\\.","")+"]",Pm=/((?:WC+[\/:])*)/.source.replace("WC",gh),Lm=/(WCOD+)?/.source.replace("WCOD",Nm),Um=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),Dm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),Fm=new RegExp("^"+Pm+Lm+Um+Dm+"$"),Om=["material","materials","bones","map"],jl=class{constructor(e,t,n){let a=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,a=this._bindings[n];a!==void 0&&a.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=n.length;a!==s;++a)n[a].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cm,"")}static parseTrackName(e){let t=Fm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=n.nodeName&&n.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=n.nodeName.substring(a+1);Om.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,a),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},a=n(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let a=0,s=n.length;a!==s;++a)e[t++]=n[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let a=0,s=n.length;a!==s;++a)n[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let a=0,s=n.length;a!==s;++a)n[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let a=0,s=n.length;a!==s;++a)n[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,a=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[a];if(r===void 0){let l=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+l+"."+a+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=jl;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E_=new Float32Array(1);var Xl=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=a,this}};function xh(i,e,t,n){let a=km(n);switch(t){case ah:return i*e;case ns:return i*e/a.components*a.byteLength;case ec:return i*e/a.components*a.byteLength;case ji:return i*e*2/a.components*a.byteLength;case tc:return i*e*2/a.components*a.byteLength;case sh:return i*e*3/a.components*a.byteLength;case pn:return i*e*4/a.components*a.byteLength;case nc:return i*e*4/a.components*a.byteLength;case xr:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _r:case yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:case rc:return Math.max(i,16)*Math.max(e,8)/4;case ic:case sc:return Math.max(i,8)*Math.max(e,8)/2;case oc:case cc:case hc:case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lc:case Mr:case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tc:case Rc:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cc:case Nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sr:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function km(i){switch(i){case Kt:case eh:return{byteLength:1,components:1};case ts:case th:case Tt:return{byteLength:2,components:1};case Qo:case $o:return{byteLength:2,components:4};case zn:case Zo:case Nt:return{byteLength:4,components:1};case nh:case ih:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);function Jf(){let i=null,e=!1,t=null,n=null;function a(s,r){n=i.requestAnimationFrame(a),t(s,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Wm(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],g=d[u];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,d[f]=g)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let g=d[u];i.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:s,update:r}}var jm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xm=`#ifdef USE_ALPHAHASH
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
#endif`,qm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ym=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$m=`#ifdef USE_BATCHING
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
#endif`,eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ab=`#ifdef USE_IRIDESCENCE
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
#endif`,sb=`#ifdef USE_BUMPMAP
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
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pb=`#define PI 3.141592653589793
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
} // validated`,mb=`vec3 transformedNormal = objectNormal;
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
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_b="gl_FragColor = linearToOutputTexel( gl_FragColor );",yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ib=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nb=`#ifdef USE_GRADIENTMAP
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
}`,Pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Db=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hb=`PhysicalMaterial material;
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
#endif`,Gb=`uniform sampler2D dfgLUT;
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
}`,Vb=`
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
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
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
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xb=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$b=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eg=`#if defined( USE_POINTS_UV )
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
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
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
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
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
#endif`,pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ig=`float getShadowMask() {
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
}`,Cg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Og=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform float backgroundBlurriness;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
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
}`,Zg=`#if DEPTH_PACKING == 3200
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
}`,Qg=`#define DISTANCE
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
}`,$g=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`uniform float scale;
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
}`,i0=`uniform vec3 diffuse;
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
}`,a0=`#include <common>
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#define LAMBERT
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
}`,o0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,l0=`#define MATCAP
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
}`,h0=`#define NORMAL
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
}`,d0=`#define NORMAL
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
}`,f0=`#define PHONG
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
}`,u0=`#define PHONG
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
}`,p0=`#define STANDARD
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
}`,m0=`#define STANDARD
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
}`,b0=`#define TOON
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
}`,g0=`#define TOON
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
}`,x0=`uniform float size;
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
}`,v0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,y0=`uniform vec3 color;
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
}`,M0=`uniform float rotation;
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
}`,S0=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:jm,alphahash_pars_fragment:Xm,alphamap_fragment:qm,alphamap_pars_fragment:Ym,alphatest_fragment:Km,alphatest_pars_fragment:Jm,aomap_fragment:Zm,aomap_pars_fragment:Qm,batching_pars_vertex:$m,batching_vertex:eb,begin_vertex:tb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:ab,bumpmap_pars_fragment:sb,clipping_planes_fragment:rb,clipping_planes_pars_fragment:ob,clipping_planes_pars_vertex:cb,clipping_planes_vertex:lb,color_fragment:hb,color_pars_fragment:db,color_pars_vertex:fb,color_vertex:ub,common:pb,defaultnormal_vertex:mb,displacementmap_pars_vertex:bb,displacementmap_vertex:gb,emissivemap_fragment:xb,emissivemap_pars_fragment:vb,colorspace_fragment:_b,colorspace_pars_fragment:yb,envmap_fragment:Mb,envmap_common_pars_fragment:Sb,envmap_pars_fragment:wb,envmap_pars_vertex:Eb,envmap_physical_pars_fragment:Fb,envmap_vertex:Ab,fog_vertex:Tb,fog_pars_vertex:Rb,fog_fragment:Ib,fog_pars_fragment:Cb,gradientmap_pars_fragment:Nb,lightmap_pars_fragment:Pb,lights_lambert_fragment:Lb,lights_lambert_pars_fragment:Ub,lights_pars_begin:Db,lights_toon_fragment:Ob,lights_toon_pars_fragment:kb,lights_phong_fragment:Bb,lights_phong_pars_fragment:zb,lights_physical_fragment:Hb,lights_physical_pars_fragment:Gb,lights_fragment_begin:Vb,lights_fragment_maps:Wb,lights_fragment_end:jb,lightprobes_pars_fragment:Xb,logdepthbuf_fragment:qb,logdepthbuf_pars_fragment:Yb,logdepthbuf_pars_vertex:Kb,logdepthbuf_vertex:Jb,map_fragment:Zb,map_pars_fragment:Qb,map_particle_fragment:$b,map_particle_pars_fragment:eg,metalnessmap_fragment:tg,metalnessmap_pars_fragment:ng,morphinstance_vertex:ig,morphcolor_vertex:ag,morphnormal_vertex:sg,morphtarget_pars_vertex:rg,morphtarget_vertex:og,normal_fragment_begin:cg,normal_fragment_maps:lg,normal_pars_fragment:hg,normal_pars_vertex:dg,normal_vertex:fg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:pg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:bg,iridescence_pars_fragment:gg,opaque_fragment:xg,packing:vg,premultiplied_alpha_fragment:_g,project_vertex:yg,dithering_fragment:Mg,dithering_pars_fragment:Sg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Tg,shadowmap_vertex:Rg,shadowmask_pars_fragment:Ig,skinbase_vertex:Cg,skinning_pars_vertex:Ng,skinning_vertex:Pg,skinnormal_vertex:Lg,specularmap_fragment:Ug,specularmap_pars_fragment:Dg,tonemapping_fragment:Fg,tonemapping_pars_fragment:Og,transmission_fragment:kg,transmission_pars_fragment:Bg,uv_pars_fragment:zg,uv_pars_vertex:Hg,uv_vertex:Gg,worldpos_vertex:Vg,background_vert:Wg,background_frag:jg,backgroundCube_vert:Xg,backgroundCube_frag:qg,cube_vert:Yg,cube_frag:Kg,depth_vert:Jg,depth_frag:Zg,distance_vert:Qg,distance_frag:$g,equirect_vert:e0,equirect_frag:t0,linedashed_vert:n0,linedashed_frag:i0,meshbasic_vert:a0,meshbasic_frag:s0,meshlambert_vert:r0,meshlambert_frag:o0,meshmatcap_vert:c0,meshmatcap_frag:l0,meshnormal_vert:h0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:u0,meshphysical_vert:p0,meshphysical_frag:m0,meshtoon_vert:b0,meshtoon_frag:g0,points_vert:x0,points_frag:v0,shadow_vert:_0,shadow_frag:y0,sprite_vert:M0,sprite_frag:S0},Ie={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Zn={basic:{uniforms:sn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:sn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:sn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:sn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:sn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:sn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:sn([Ie.points,Ie.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:sn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:sn([Ie.common,Ie.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:sn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:sn([Ie.sprite,Ie.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:sn([Ie.common,Ie.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:sn([Ie.lights,Ie.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Zn.physical={uniforms:sn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Uc={r:0,b:0,g:0},w0=new Je,Zf=new Ze;Zf.set(-1,0,0,0,1,0,0,0,1);function E0(i,e,t,n,a,s){let r=new We(0),o=a===!0?0:1,c,l,h=null,d=0,f=null;function u(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let v=_.backgroundBlurriness>0;y=e.get(y,v)}return y}function m(_){let y=!1,v=u(_);v===null?b(r,o):v&&v.isColor&&(b(v,1),y=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(_,y){let v=u(y);v&&v.isCubeTexture?(l===void 0&&(l=new dt(new qn(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:xa(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Zf),l.material.toneMapped=st.getTransfer(v.colorSpace)!==pt,(h!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new dt(new bi(2,2),new St({name:"BackgroundMaterial",uniforms:xa(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(v.colorSpace)!==pt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function b(_,y){_.getRGB(Uc,mh(i)),t.buffers.color.setClear(Uc.r,Uc.g,Uc.b,y,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,y=1){r.set(_),o=y,b(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,b(r,o)},render:m,addToRenderList:g,dispose:p}}function A0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=f(null),s=a,r=!1;function o(P,N,U,R,O){let G=!1,z=d(P,R,U,N);s!==z&&(s=z,l(s.object)),G=u(P,R,U,O),G&&m(P,R,U,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(G||r)&&(r=!1,v(P,N,U,R),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,N,U,R){let O=R.wireframe===!0,G=n[N.id];G===void 0&&(G={},n[N.id]=G);let z=P.isInstancedMesh===!0?P.id:0,k=G[z];k===void 0&&(k={},G[z]=k);let B=k[U.id];B===void 0&&(B={},k[U.id]=B);let V=B[O];return V===void 0&&(V=f(c()),B[O]=V),V}function f(P){let N=[],U=[],R=[];for(let O=0;O<t;O++)N[O]=0,U[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:R,object:P,attributes:{},index:null}}function u(P,N,U,R){let O=s.attributes,G=N.attributes,z=0,k=U.getAttributes();for(let B in k)if(k[B].location>=0){let j=O[B],ie=G[B];if(ie===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor)),j===void 0||j.attribute!==ie||ie&&j.data!==ie.data)return!0;z++}return s.attributesNum!==z||s.index!==R}function m(P,N,U,R){let O={},G=N.attributes,z=0,k=U.getAttributes();for(let B in k)if(k[B].location>=0){let j=G[B];j===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(j=P.instanceColor));let ie={};ie.attribute=j,j&&j.data&&(ie.data=j.data),O[B]=ie,z++}s.attributes=O,s.attributesNum=z,s.index=R}function g(){let P=s.newAttributes;for(let N=0,U=P.length;N<U;N++)P[N]=0}function b(P){p(P,0)}function p(P,N){let U=s.newAttributes,R=s.enabledAttributes,O=s.attributeDivisors;U[P]=1,R[P]===0&&(i.enableVertexAttribArray(P),R[P]=1),O[P]!==N&&(i.vertexAttribDivisor(P,N),O[P]=N)}function _(){let P=s.newAttributes,N=s.enabledAttributes;for(let U=0,R=N.length;U<R;U++)N[U]!==P[U]&&(i.disableVertexAttribArray(U),N[U]=0)}function y(P,N,U,R,O,G,z){z===!0?i.vertexAttribIPointer(P,N,U,O,G):i.vertexAttribPointer(P,N,U,R,O,G)}function v(P,N,U,R){g();let O=R.attributes,G=U.getAttributes(),z=N.defaultAttributeValues;for(let k in G){let B=G[k];if(B.location>=0){let V=O[k];if(V===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){let j=V.normalized,ie=V.itemSize,le=e.get(V);if(le===void 0)continue;let Y=le.buffer,se=le.type,ve=le.bytesPerElement,Pe=se===i.INT||se===i.UNSIGNED_INT||V.gpuType===Zo;if(V.isInterleavedBufferAttribute){let we=V.data,ke=we.isInterleavedBuffer===!0?we.stride:we.itemSize,ft=V.offset;if(we.isInstancedInterleavedBuffer||we.isInstancedBufferAttribute){for(let Be=0;Be<B.locationSize;Be++)p(B.location+Be,we.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Be=0;Be<B.locationSize;Be++)b(B.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Be=0;Be<B.locationSize;Be++)y(B.location+Be,ie/B.locationSize,se,j,ke*ve,(ft+ie/B.locationSize*Be)*ve,Pe)}else{if(V.isInstancedBufferAttribute){for(let we=0;we<B.locationSize;we++)p(B.location+we,V.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let we=0;we<B.locationSize;we++)b(B.location+we);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let we=0;we<B.locationSize;we++)y(B.location+we,ie/B.locationSize,se,j,ie*ve,ie/B.locationSize*we*ve,Pe)}}else if(z!==void 0){let j=z[k];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(B.location,j);break;case 3:i.vertexAttrib3fv(B.location,j);break;case 4:i.vertexAttrib4fv(B.location,j);break;default:i.vertexAttrib1fv(B.location,j)}}}}_()}function E(){C();for(let P in n){let N=n[P];for(let U in N){let R=N[U];for(let O in R){let G=R[O];for(let z in G)h(G[z].object),delete G[z];delete R[O]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let U in N){let R=N[U];for(let O in R){let G=R[O];for(let z in G)h(G[z].object),delete G[z];delete R[O]}}delete n[P.id]}function x(P){for(let N in n){let U=n[N];for(let R in U){let O=U[R];if(O[P.id]===void 0)continue;let G=O[P.id];for(let z in G)h(G[z].object),delete G[z];delete O[P.id]}}}function M(P){for(let N in n){let U=n[N],R=P.isInstancedMesh===!0?P.id:0,O=U[R];if(O!==void 0){for(let G in O){let z=O[G];for(let k in z)h(z[k].object),delete z[k];delete O[G]}delete U[R],Object.keys(U).length===0&&delete n[N]}}}function C(){T(),r=!0,s!==a&&(s=a,l(s.object))}function T(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:C,resetDefaultState:T,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:x,initAttributes:g,enableAttribute:b,disableUnusedAttributes:_}}function T0(i,e,t){let n;function a(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let u=0;u<h;u++)f+=l[u];t.update(f,n,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function R0(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(x){return!(x!==pn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let M=x===Tt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Kt&&x!==Nt&&!M&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(qe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:b,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,maxSamples:E,samples:w}}function I0(i){let e=this,t=null,n=0,a=!1,s=!1,r=new kn,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||a;return a=f,n=d.length,u},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,g=d.clipIntersection,b=d.clipShadows,p=i.get(d);if(!a||m===null||m.length===0||s&&!b)s?h(null):l();else{let _=s?0:n,y=_*4,v=p.clippingState||null;c.value=v,v=h(m,f,y,u);for(let E=0;E!==y;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,m){let g=d!==null?d.length:0,b=null;if(g!==0){if(b=c.value,m!==!0||b===null){let p=u+g*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(b===null||b.length<p)&&(b=new Float32Array(p));for(let y=0,v=u;y!==g;++y,v+=4)r.copy(d[y]).applyMatrix4(_,o),r.normal.toArray(b,v),b[v+3]=r.constant}c.value=b,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,b}}var Tr=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Gs(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new qn(5,5,5),s=new St({name:"CubemapFromEquirect",uniforms:xa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:xi});s.uniforms.tEquirect.value=t;let r=new dt(a,s),o=t.minFilter;return t.minFilter===an&&(t.minFilter=_t),new Za(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(s)}},If=256,C0=3,N0=20,Qf=256,$f=16,P0=3,L0=new L,U0=new We,as=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Za(1,10,null),this._boxMesh=new dt(new qn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,a=100,s={}){let{size:r=256,position:o=L0}=s,c=this._renderer;this._setSize(r);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,f=c.autoClearColor,u=c.autoClearDepth,m=c.autoClearStencil,g=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,g===null&&(e.background=c.getClearColor(U0));let b=new Za(n,a,h);return b.position.copy(o),b.update(c,e),c.autoClear=d,c.autoClearColor=f,c.autoClearDepth=u,c.autoClearStencil=m,e.background=g,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(If,fh(e))}_fromTexture(e,t){e.mapping===ma||e.mapping===es?this._setSize(e.image.length===0?If:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Cf(e,!1,!1),n=Math.log2(e)-C0;for(let a=0;a<=n;a++)t.texture.mipmaps.push({width:e>>a,height:e>>a});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Cf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let a=this._boxMesh,s=this._cubeCamera;a.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let r=e.width>>t;e.viewport.set(0,0,r,r),s.update(this._renderer,a),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ma||e.mapping===es?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Nf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=D0(),this._integrationMaterial=F0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,a=this._ggxMaterial.uniforms;a.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/$f);for(let r=0;r<=n;r++){let o=i.lodToRoughness(r,n);if(r>n-P0)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Qf*Math.pow(o,4)))+.5:0;a.roughness.value=o,a.lodBias.value=c,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=O0());let n=this._blurMaterial,a=n.uniforms,s=this._sourceTarget;a.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,a.envMap.value=s.texture,this._renderCube(e,0,n),a.envMap.value=e.texture,this._renderCube(s,0,n)}};function Cf(i,e,t){return new Tr(i,{minFilter:an,generateMipmaps:e,type:Tt,colorSpace:ca,depthBuffer:t})}function Rr(i,e,t){return new St({name:i,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:t,side:Yt,blending:xi,depthTest:!1,depthWrite:!1})}function D0(){return Rr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qf}u

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
	`)}function F0(){return Rr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$f}},`

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
	`)}function O0(){return Rr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${N0}
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
	`)}function Nf(){return Rr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Pf(){return Rr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function k0(i){let e=new WeakMap,t=new WeakMap,n=null;function a(f,u=!1){return f==null?null:u?r(f):s(f)}function s(f){if(f&&f.isTexture){let u=f.mapping;if(u===Yo||u===Ko)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let g=new Tr(m.height);return g.fromEquirectangularTexture(i,f),e.set(f,g),f.addEventListener("dispose",l),o(g.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,m=u===Yo||u===Ko,g=u===ma||u===es;if(m||g){let b=t.get(f),p=b!==void 0?b.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new as(i)),b=m?n.fromEquirectangular(f,b):n.fromCubemap(f,b),b.texture.pmremVersion=f.pmremVersion,t.set(f,b),b.texture;if(b!==void 0)return b.texture;{let _=f.image;return m&&_&&_.height>0||g&&_&&c(_)?(n===null&&(n=new as(i)),b=m?n.fromEquirectangular(f):n.fromCubemap(f),b.texture.pmremVersion=f.pmremVersion,t.set(f,b),f.addEventListener("dispose",h),b.texture):null}}}return f}function o(f,u){return u===Yo?f.mapping=ma:u===Ko&&(f.mapping=es),f}function c(f){let u=0,m=6;for(let g=0;g<m;g++)f[g]!==void 0&&u++;return u===m}function l(f){let u=f.target;u.removeEventListener("dispose",l);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:d}}function B0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let a=t(n);return a===null&&Is("WebGLRenderer: "+n+" extension not supported."),a}}}function z0(i,e,t,n){let a={},s=new WeakMap,r=new FinalizationRegistry(m=>delete a[m]);function o(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let b in m.attributes)e.remove(m.attributes[b]);m.removeEventListener("dispose",o),delete a[m.id],r.unregister(m);let g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,g){return a[g.id]!==void 0||(g.addEventListener("dispose",o),a[g.id]=new WeakRef(g),r.register(g,g.id,g),t.memory.geometries++),g}function h(m){let g=m.attributes;for(let b in g)e.update(g[b],i.ARRAY_BUFFER)}function d(m){let g=m.index,b=m.attributes.position,p=0;if(b===void 0)return;let _=g!==null?g.array.length:b.array.length/3-1,y=b.count>=65535?zs:Bs,v=new y(Math.ceil(_/3)*6,1),E=v.array;if(g!==null){let x=g.array;p=g.version;for(let M=0,C=0;M<_;M+=3){let T=x[M+0],P=x[M+1],N=x[M+2];E[C++]=T,E[C++]=P,E[C++]=P,E[C++]=N,E[C++]=N,E[C++]=T}}else{p=b.version;for(let x=0,M=0;x<_;x+=3){let C=x+0,T=x+1,P=x+2;E[M++]=C,E[M++]=T,E[M++]=T,E[M++]=P,E[M++]=P,E[M++]=C}}v.version=p;let w=s.get(m);w&&e.remove(w),s.set(m,v)}function f(m){let g=s.get(m);if(g){let b=m.index;b!==null&&g.version<b.version&&d(m)}else d(m);return s.get(m)}function u(){for(let m in a){let g=a[m].deref();g!==void 0&&c(g)}}return{get:l,update:h,getWireframeAttribute:f,dispose:u}}function H0(i,e,t){let n;function a(d){n=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function c(d,f){i.drawElements(n,f,s,d*r),t.update(f,n,1)}function l(d,f,u){u!==0&&(i.drawElementsInstanced(n,f,s,d*r,u),t.update(f,n,u))}function h(d,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,u);let g=0;for(let b=0;b<u;b++)g+=f[b];t.update(g,n,1)}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function G0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ye("WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function V0(i,e,t){let n=new WeakMap,a=new bt;function s(r,o,c){let l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let C=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],y=0;u===!0&&(y=1),m===!0&&(y=2),g===!0&&(y=3);let v=o.attributes.position.count*y,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*E*4*d),x=new Fs(w,v,E,d);x.type=Nt,x.needsUpdate=!0;let M=y*4;for(let T=0;T<d;T++){let P=b[T],N=p[T],U=_[T],R=v*E*4*T;for(let O=0;O<P.count;O++){let G=O*M;u===!0&&(a.fromBufferAttribute(P,O),w[R+G+0]=a.x,w[R+G+1]=a.y,w[R+G+2]=a.z,w[R+G+3]=0),m===!0&&(a.fromBufferAttribute(N,O),w[R+G+4]=a.x,w[R+G+5]=a.y,w[R+G+6]=a.z,w[R+G+7]=0),g===!0&&(a.fromBufferAttribute(U,O),w[R+G+8]=a.x,w[R+G+9]=a.y,w[R+G+10]=a.z,w[R+G+11]=U.itemSize===4?a.w:1)}}f={count:d,texture:x,size:new ce(v,E)},n.set(o,f),o.addEventListener("dispose",C)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let u=0;for(let g=0;g<l.length;g++)u+=l[g];let m=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function W0(i,e,t,n,a){let s=new WeakMap;function r(l){let h=a.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return f}function o(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}var j0={[dr]:"LINEAR_TONE_MAPPING",[fr]:"REINHARD_TONE_MAPPING",[ur]:"CINEON_TONE_MAPPING",[pa]:"ACES_FILMIC_TONE_MAPPING",[mr]:"AGX_TONE_MAPPING",[br]:"NEUTRAL_TONE_MAPPING",[pr]:"CUSTOM_TONE_MAPPING"};function X0(i,e,t,n,a,s){let r=new It(e,t,{type:i,depthBuffer:a,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new ht;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let d=new qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new dt(h,d),u=new gi(-1,1,1,-1,0,1),m=null,g=null,b=!1,p,_=null,y=[],v=!1;this.setSize=function(E,w){r.setSize(E,w),o!==null&&o.setSize(E,w),c!==null&&c.setSize(E,w);for(let x=0;x<y.length;x++){let M=y[x];M.setSize&&M.setSize(E,w)}},this.setEffects=function(E){y=E,v=y.length>0&&y[0].isRenderPass===!0;let w=r.width,x=r.height;y.length>0&&o===null&&(o=new It(w,x,{type:Tt,depthBuffer:!1,stencilBuffer:!1}),c=new It(w,x,{type:Tt,depthBuffer:!1,stencilBuffer:!1}));let M=a===!0&&y.some(C=>C.needsDepthTexture===!0);M!==(r.depthTexture!==null)&&(M===!0&&l===null&&(l=new Bn(w,x),s===!0&&(l.format=vi,l.type=ba)),r.dispose(),r.depthTexture=M?l:null,r.resolveDepthBuffer=M,r.storeMultisampledDepthBuffer=M);for(let C=0;C<y.length;C++){let T=y[C];T.setSize&&T.setSize(w,x),M&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(l)}},this.begin=function(E,w){if(b||E.toneMapping===Kn&&y.length===0)return!1;if(_=w,w!==null){let x=w.width,M=w.height;(r.width!==x||r.height!==M)&&this.setSize(x,M)}return v===!1&&E.setRenderTarget(r),p=E.toneMapping,E.toneMapping=Kn,!0},this.hasRenderPass=function(){return v},this.end=function(E,w){E.toneMapping=p,b=!0;let x=r,M=o;for(let C=0;C<y.length;C++){let T=y[C];T.enabled!==!1&&(T.render(E,M,x,w),T.needsSwap!==!1&&(x=M,M=M===o?c:o))}if(m!==E.outputColorSpace||g!==E.toneMapping){m=E.outputColorSpace,g=E.toneMapping,d.defines={},st.getTransfer(m)===pt&&(d.defines.SRGB_TRANSFER="");let C=j0[g];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(_),E.render(f,u),_=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var eu=new nn,tu=new Bn(1,1),nu=new Vs(1),iu=new Fs,au=new Ao,su=new Gs,Lf=[],Uf=[],Df=new Float32Array(16),Ff=new Float32Array(9),Of=new Float32Array(4);function ss(i,e,t){let n=i[0];if(n<=0||n>0)return i;let a=e*t,s=Lf[a];if(s===void 0&&(s=new Float32Array(a),Lf[a]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(s,o)}return s}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oc(i,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function q0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function Z0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;Of.set(n),i.uniformMatrix2fv(this.addr,!1,Of),Bt(t,n)}}function Q0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;Ff.set(n),i.uniformMatrix3fv(this.addr,!1,Ff),Bt(t,n)}}function $0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;Df.set(n),i.uniformMatrix4fv(this.addr,!1,Df),Bt(t,n)}}function ex(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function ax(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function ox(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function kc(i){return i.version===0&&(i.compareFunction=ch,i.needsUpdate=!0),i}function cx(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?s=kc(tu):s=eu,t.setTexture2D(e||s,a)}function lx(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||au,a)}function hx(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=kc(nu):s=su,t.setTextureCube(e||s,a)}function dx(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||iu,a)}function fx(i){switch(i){case 5126:return q0;case 35664:return Y0;case 35665:return K0;case 35666:return J0;case 35674:return Z0;case 35675:return Q0;case 35676:return $0;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return ax;case 36294:return sx;case 36295:return rx;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return lx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return dx}}function ux(i,e){i.uniform1fv(this.addr,e)}function px(i,e){let t=ss(e,this.size,2);i.uniform2fv(this.addr,t)}function mx(i,e){let t=ss(e,this.size,3);i.uniform3fv(this.addr,t)}function bx(i,e){let t=ss(e,this.size,4);i.uniform4fv(this.addr,t)}function gx(i,e){let t=ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xx(i,e){let t=ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vx(i,e){let t=ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _x(i,e){i.uniform1iv(this.addr,e)}function yx(i,e){i.uniform2iv(this.addr,e)}function Mx(i,e){i.uniform3iv(this.addr,e)}function Sx(i,e){i.uniform4iv(this.addr,e)}function wx(i,e){i.uniform1uiv(this.addr,e)}function Ex(i,e){i.uniform2uiv(this.addr,e)}function Ax(i,e){i.uniform3uiv(this.addr,e)}function Tx(i,e){i.uniform4uiv(this.addr,e)}function Rx(i,e,t){let n=this.cache,a=e.length,s=Oc(t,a);kt(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));let r;this.type===i.SAMPLER_2D_SHADOW?r=kc(tu):r=eu;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||r,s[o])}function Ix(i,e,t){let n=this.cache,a=e.length,s=Oc(t,a);kt(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||au,s[r])}function Cx(i,e,t){let n=this.cache,a=e.length,s=Oc(t,a);kt(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));let r;this.type===i.SAMPLER_CUBE_SHADOW?r=kc(nu):r=su;for(let o=0;o!==a;++o)t.setTextureCube(e[o]||r,s[o])}function Nx(i,e,t){let n=this.cache,a=e.length,s=Oc(t,a);kt(n,s)||(i.uniform1iv(this.addr,s),Bt(n,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||iu,s[r])}function Px(i){switch(i){case 5126:return ux;case 35664:return px;case 35665:return mx;case 35666:return bx;case 35674:return gx;case 35675:return xx;case 35676:return vx;case 5124:case 35670:return _x;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return wx;case 36294:return Ex;case 36295:return Ax;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Ix;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Nx}}var yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fx(t.type)}},Mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Px(t.type)}},Sh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let o=a[s];o.setValue(e,t[o.id],n)}}},vh=/(\w+)(\])?(\[|\.)?/g;function kf(i,e){i.seq.push(e),i.map[e.id]=e}function Lx(i,e,t){let n=i.name,a=n.length;for(vh.lastIndex=0;;){let s=vh.exec(n),r=vh.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===a){kf(t,l===void 0?new yh(o,i,e):new Mh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Sh(o),kf(t,d)),t=d}}}var is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);Lx(o,c,this)}let a=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,t,n,a){let s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){let a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,r=t.length;s!==r;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){let n=[];for(let a=0,s=e.length;a!==s;++a){let r=e[a];r.id in t&&n.push(r)}return n}};function Bf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Ux=37297,Dx=0;function Fx(i,e){let t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}var zf=new Ze;function Ox(i){st._getMatrix(zf,st.workingColorSpace,i);let e=`mat3( ${zf.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case Ds:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Hf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Fx(i.getShaderSource(e),o)}else return s}function kx(i,e){let t=Ox(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Bx={[dr]:"Linear",[fr]:"Reinhard",[ur]:"Cineon",[pa]:"ACESFilmic",[mr]:"AgX",[br]:"Neutral",[pr]:"Custom"};function zx(i,e){let t=Bx[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dc=new L;function Hx(){st.getLuminanceCoefficients(Dc);let i=Dc.x.toFixed(4),e=Dc.y.toFixed(4),t=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ar).join(`
`)}function Vx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){let s=i.getActiveAttrib(e,a),r=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Ar(i){return i!==""}function Gf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Vf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(i){return i.replace(jx,Xx)}function Xx(i,e){let t=Qe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return wh(t)}var qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(i){return i.replace(qx,Yx)}function Yx(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function jf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Kx={[fa]:"SHADOWMAP_TYPE_PCF",[Qa]:"SHADOWMAP_TYPE_VSM"};function Jx(i){return Kx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zx={[es]:"ENVMAP_MODE_REFRACTION"};function Qx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $x={[Ql]:"ENVMAP_BLENDING_MULTIPLY",[af]:"ENVMAP_BLENDING_MIX",[sf]:"ENVMAP_BLENDING_ADD"};function ev(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$x[i.combine]||"ENVMAP_BLENDING_NONE"}function tv(i,e,t,n){let a=i.getContext(),s=t.defines,r=t.vertexShader,o=t.fragmentShader,c=Jx(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Qx(t),d=ev(t),f=Gx(t),u=Vx(s),m=a.createProgram(),g,b,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Ar).join(`
`),g.length>0&&(g+=`
`),b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(Ar).join(`
`),b.length>0&&(b+=`
`)):(g=[jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),b=[jf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Kn?zx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,kx("linearToOutputTexel",t.outputColorSpace),Hx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ar).join(`
`)),r=wh(r),r=Gf(r,t),r=Vf(r,t),o=wh(o),o=Gf(o,t),o=Vf(o,t),r=Wf(r),o=Wf(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,b=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let _=p+g+r,y=p+b+o,v=Bf(a,a.VERTEX_SHADER,_),E=Bf(a,a.FRAGMENT_SHADER,y);a.attachShader(m,v),a.attachShader(m,E),t.index0AttributeName!==void 0?a.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(m,0,"position"),a.linkProgram(m);function w(T){if(i.debug.checkShaderErrors){let P=a.getProgramInfoLog(m)||"",N=a.getShaderInfoLog(v)||"",U=a.getShaderInfoLog(E)||"",R=P.trim(),O=N.trim(),G=U.trim(),z=!0,k=!0;if(a.getProgramParameter(m,a.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,m,v,E);else{let B=Hf(a,v,"vertex"),V=Hf(a,E,"fragment");Ye("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(m,a.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+R+`
`+B+`
`+V)}else R!==""?qe("WebGLProgram: Program Info Log:",R):(O===""||G==="")&&(k=!1);k&&(T.diagnostics={runnable:z,programLog:R,vertexShader:{log:O,prefix:g},fragmentShader:{log:G,prefix:b}})}a.deleteShader(v),a.deleteShader(E),x=new is(a,m),M=Wx(a,m)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(m,Ux)),C},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dx++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=E,this}var nv=0,Eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ah(e),t.set(e,n)),n}},Ah=class{constructor(e){this.id=nv++,this.code=e,this.usedTimes=0}};function iv(i){return i===ji||i===Mr||i===Sr}function av(i,e,t,n,a,s){let r=new Os,o=new Eh,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,M,C,T,P,N){let U=T.fog,R=P.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?T.environment:null,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,z=e.get(x.envMap||O,G),k=f[x.type],B=n.precision;x.precision!==null&&(B=n.getMaxPrecision(x.precision),B!==x.precision&&qe("WebGLProgram.getParameters:",x.precision,"not supported, using",B,"instead."));let V=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,j=V!==void 0?V.length:0,ie=0;R.morphAttributes.position!==void 0&&(ie=1),R.morphAttributes.normal!==void 0&&(ie=2),R.morphAttributes.color!==void 0&&(ie=3);let le,Y,se,ve;if(k){let Re=Zn[k];le=Re.vertexShader,Y=Re.fragmentShader}else{le=x.vertexShader,Y=x.fragmentShader;let Re=o.getVertexShaderStage(x),gt=o.getFragmentShaderStage(x);o.update(x,Re,gt),se=Re.id,ve=gt.id}let Pe=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),ke=P.isInstancedMesh===!0,ft=P.isBatchedMesh===!0,Be=!!x.map,Te=!!x.matcap,Le=!!z,J=Le&&z.isPMREMTexture===!0,he=!!x.aoMap,de=!!x.lightMap,Ae=!!x.bumpMap&&x.wireframe===!1,me=!!x.normalMap,Q=!!x.displacementMap,ae=!!x.emissiveMap,fe=!!x.metalnessMap,xe=!!x.roughnessMap,Ge=x.anisotropy>0,D=x.clearcoat>0,Oe=x.diffuseRoughness>0,He=x.dispersion>0,et=x.retroreflectivity>0,re=x.iridescence>0,rt=x.sheen>0,Ne=x.transmission>0,je=Ge&&!!x.anisotropyMap,I=D&&!!x.clearcoatMap,S=D&&!!x.clearcoatNormalMap,W=D&&!!x.clearcoatRoughnessMap,oe=Oe&&!!x.diffuseRoughnessMap,ee=re&&!!x.iridescenceMap,pe=re&&!!x.iridescenceThicknessMap,ge=rt&&!!x.sheenColorMap,$=rt&&!!x.sheenRoughnessMap,te=!!x.specularMap,ye=!!x.specularColorMap,F=!!x.specularIntensityMap,ne=Ne&&!!x.transmissionMap,Z=Ne&&!!x.thicknessMap,Me=!!x.gradientMap,be=!!x.alphaMap,_e=x.alphaTest>0,Ve=!!x.alphaHash,nt=!!x.extensions,ue=Kn;x.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(ue=i.toneMapping);let Xe=J?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,tt={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:le,fragmentShader:Y,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:B,batching:ft,batchingColor:ft&&P._colorsTexture!==null,instancing:ke,instancingColor:ke&&P.instanceColor!==null,instancingMorph:ke&&P.morphTexture!==null,outputColorSpace:Pe===null?i.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:Te,envMap:Le,envMapMode:Le&&z.mapping,envMapPMREM:J,envMapMaxLod:J?Xe.length-1:null,envMapSize:J?Xe[0].width:null,aoMap:he,lightMap:de,bumpMap:Ae,normalMap:me,displacementMap:Q,emissiveMap:ae,normalMapObjectSpace:me&&x.normalMapType===cf,normalMapTangentSpace:me&&x.normalMapType===Lc,packedNormalMap:me&&x.normalMapType===Lc&&iv(x.normalMap.format),metalnessMap:fe,roughnessMap:xe,anisotropy:Ge,anisotropyMap:je,clearcoat:D,clearcoatMap:I,clearcoatNormalMap:S,clearcoatRoughnessMap:W,diffuseRoughness:Oe,diffuseRoughnessMap:oe,dispersion:He,retroreflection:et,iridescence:re,iridescenceMap:ee,iridescenceThicknessMap:pe,sheen:rt,sheenColorMap:ge,sheenRoughnessMap:$,specularMap:te,specularColorMap:ye,specularIntensityMap:F,transmission:Ne,transmissionMap:ne,thicknessMap:Z,gradientMap:Me,opaque:x.transparent===!1&&x.blending===$a&&x.alphaToCoverage===!1,alphaMap:be,alphaTest:_e,alphaHash:Ve,combine:x.combine,mapUv:Be&&u(x.map.channel),aoMapUv:he&&u(x.aoMap.channel),lightMapUv:de&&u(x.lightMap.channel),bumpMapUv:Ae&&u(x.bumpMap.channel),normalMapUv:me&&u(x.normalMap.channel),displacementMapUv:Q&&u(x.displacementMap.channel),emissiveMapUv:ae&&u(x.emissiveMap.channel),metalnessMapUv:fe&&u(x.metalnessMap.channel),roughnessMapUv:xe&&u(x.roughnessMap.channel),anisotropyMapUv:je&&u(x.anisotropyMap.channel),clearcoatMapUv:I&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:ee&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:$&&u(x.sheenRoughnessMap.channel),specularMapUv:te&&u(x.specularMap.channel),specularColorMapUv:ye&&u(x.specularColorMap.channel),specularIntensityMapUv:F&&u(x.specularIntensityMap.channel),transmissionMapUv:ne&&u(x.transmissionMap.channel),thicknessMapUv:Z&&u(x.thicknessMap.channel),alphaMapUv:be&&u(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(me||Ge),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!R.attributes.uv&&(Be||be),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:ie,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:N.filter(Re=>Re.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:ae&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ct,flipSided:x.side===Yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||ft)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function g(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)M.push(C),M.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(b(M,x),p(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function b(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapPMREM),x.push(M.envMapMaxLod),x.push(M.envMapSize),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.diffuseRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.numLightProbeGrids),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function p(x,M){r.disableAll(),M.instancing&&r.enable(0),M.instancingColor&&r.enable(1),M.instancingMorph&&r.enable(2),M.matcap&&r.enable(3),M.envMap&&r.enable(4),M.normalMapObjectSpace&&r.enable(5),M.normalMapTangentSpace&&r.enable(6),M.clearcoat&&r.enable(7),M.iridescence&&r.enable(8),M.alphaTest&&r.enable(9),M.vertexColors&&r.enable(10),M.vertexAlphas&&r.enable(11),M.vertexUv1s&&r.enable(12),M.vertexUv2s&&r.enable(13),M.vertexUv3s&&r.enable(14),M.vertexTangents&&r.enable(15),M.anisotropy&&r.enable(16),M.alphaHash&&r.enable(17),M.batching&&r.enable(18),M.dispersion&&r.enable(19),M.retroreflection&&r.enable(24),M.diffuseRoughness&&r.enable(25),M.batchingColor&&r.enable(20),M.gradientMap&&r.enable(21),M.packedNormalMap&&r.enable(22),M.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reversedDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),M.numLightProbeGrids>0&&r.enable(22),M.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function _(x){let M=f[x.type],C;if(M){let T=Zn[M];C=yi.clone(T.uniforms)}else C=x.uniforms;return C}function y(x,M){let C=h.get(M);return C!==void 0?++C.usedTimes:(C=new tv(i,M,x,a),l.push(C),h.set(M,C)),C}function v(x){if(--x.usedTimes===0){let M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:_,acquireProgram:y,releaseProgram:v,releaseShaderCache:E,programs:l,dispose:w}}function sv(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function a(r,o,c){i.get(r)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function rv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qf(){let i=[],e=0,t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function r(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,m,g,b,p){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:u,material:m,materialVariant:r(f),groupOrder:g,renderOrder:f.renderOrder,z:b,group:p},i[e]=_):(_.id=f.id,_.object=f,_.geometry=u,_.material=m,_.materialVariant=r(f),_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=b,_.group=p),e++,_}function c(f,u,m,g,b,p,_){_.reversedDepth===!0&&(b=-b);let y=o(f,u,m,g,b,p);m.transmission>0?n.push(y):m.transparent===!0?a.push(y):t.push(y)}function l(f,u,m,g,b,p){let _=o(f,u,m,g,b,p);m.transmission>0?n.unshift(_):m.transparent===!0?a.unshift(_):t.unshift(_)}function h(f,u){t.length>1&&t.sort(f||rv),n.length>1&&n.sort(u||Xf),a.length>1&&a.sort(u||Xf)}function d(){for(let f=e,u=i.length;f<u;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:c,unshift:l,finish:d,sort:h}}function ov(){let i=new WeakMap;function e(n,a){let s=i.get(n),r;return s===void 0?(r=new qf,i.set(n,[r])):a>=s.length?(r=new qf,s.push(r)):r=s[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function cv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new We};break;case"SpotLight":t={position:new L,direction:new L,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function lv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hv=0;function dv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fv(i){let e=new cv,t=lv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let a=new L,s=new Je,r=new Je;function o(l){let h=0,d=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let u=0,m=0,g=0,b=0,p=0,_=0,y=0,v=0,E=0,w=0,x=0,M=0,C=0,T=0;l.sort(dv);for(let N=0,U=l.length;N<U;N++){let R=l[N],O=R.color,G=R.intensity,z=R.distance,k=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ji?k=R.shadow.map.texture:k=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=O.r*G,d+=O.g*G,f+=O.b*G;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],G);T++}else if(R.isSunLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,j=t.get(R);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=k;let ie=V.getViewportCount();for(let le=0;le<ie;le++)n.sunShadowMatrix[g+le]=V.getMatrix(le),n.sunShadowCascade[g+le]=V._cascadeData[le];g+=ie,m++}n.sun[u]=B,u++}else if(R.isDirectionalLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,j=t.get(R);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.directionalShadow[b]=j,n.directionalShadowMap[b]=k,n.directionalShadowMatrix[b]=R.shadow.matrix,E++}n.directional[b]=B,b++}else if(R.isSpotLight){let B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(O).multiplyScalar(G),B.distance=z,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[_]=B;let V=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,V.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=V.matrix,R.castShadow){let j=t.get(R);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=k,x++}_++}else if(R.isRectAreaLight){let B=e.get(R);B.color.copy(O).multiplyScalar(G),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[y]=B,y++}else if(R.isPointLight){let B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){let V=R.shadow,j=t.get(R);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=R.shadow.matrix,w++}n.point[p]=B,p++}else if(R.isHemisphereLight){let B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(G),B.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[v]=B,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let P=n.hash;(P.sunLength!==u||P.directionalLength!==b||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==y||P.hemiLength!==v||P.numSunShadows!==m||P.numDirectionalShadows!==E||P.numPointShadows!==w||P.numSpotShadows!==x||P.numSpotMaps!==M||P.numLightProbes!==T)&&(n.sun.length=u,n.directional.length=b,n.spot.length=_,n.rectArea.length=y,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+M-C,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,P.sunLength=u,P.directionalLength=b,P.pointLength=p,P.spotLength=_,P.rectAreaLength=y,P.hemiLength=v,P.numSunShadows=m,P.numDirectionalShadows=E,P.numPointShadows=w,P.numSpotShadows=x,P.numSpotMaps=M,P.numLightProbes=T,n.version=hv++)}function c(l,h){let d=0,f=0,u=0,m=0,g=0,b=0,p=h.matrixWorldInverse;for(let _=0,y=l.length;_<y;_++){let v=l[_];if(v.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(p),f++}else if(v.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let E=n.rectArea[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),r.identity(),s.copy(v.matrixWorld),s.premultiply(p),r.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),g++}else if(v.isPointLight){let E=n.point[u];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),u++}else if(v.isHemisphereLight){let E=n.hemi[b];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),b++}}}return{setup:o,setupView:c,state:n}}function Yf(i){let e=new fv(i),t=[],n=[],a=[];function s(d){h.camera=d,t.length=0,n.length=0,a.length=0}function r(d){d.isLightProbeGrid?a.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),a.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function uv(i){let e=new WeakMap;function t(a,s=0){let r=e.get(a),o;return r===void 0?(o=new Yf(i),e.set(a,[o])):s>=r.length?(o=new Yf(i),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mv=`uniform sampler2D shadow_pass;
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
}`,bv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],gv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Kf=new Je,Er=new L,_h=new L;function xv(i,e,t){let n=new Xn,a=new ce,s=new ce,r=new bt,o=new Uo,c=new Do,l={},h=t.maxTextureSize,d={[Vi]:Yt,[Yt]:Vi,[Ct]:Ct},f=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:pv,fragmentShader:mv}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new ht;m.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new dt(m,f),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fa;let p=this.type;this.render=function(w,x,M){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||w.length===0)return;this.type===kd&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fa);let C=i.getRenderTarget(),T=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(xi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=p!==this.type;U&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(O=>O.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,O=w.length;R<O;R++){let G=w[R],z=G.shadow;if(z===void 0){qe("WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);let k=z.getFrameExtents();a.multiply(k),s.copy(z.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/k.x),a.x=s.x*k.x,z.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/k.y),a.y=s.y*k.y,z.mapSize.y=s.y));let B=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=B,z.map===null||U===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Qa){if(G.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new It(a.x,a.y,{format:ji,type:Tt,minFilter:_t,magFilter:_t,generateMipmaps:!1}),z.map.texture.name=G.name+".shadowMap",z.map.depthTexture=new Bn(a.x,a.y,Nt),z.map.depthTexture.name=G.name+".shadowMapDepth",z.map.depthTexture.format=fi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ut,z.map.depthTexture.magFilter=Ut}else G.isPointLight?(z.map=new Tr(a.x),z.map.depthTexture=new Vs(a.x,zn)):(z.map=new It(a.x,a.y),z.map.depthTexture=new Bn(a.x,a.y,zn)),z.map.depthTexture.name=G.name+".shadowMap",z.map.depthTexture.format=fi,this.type===fa?(z.map.depthTexture.compareFunction=B?oh:rh,z.map.depthTexture.minFilter=_t,z.map.depthTexture.magFilter=_t):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ut,z.map.depthTexture.magFilter=Ut);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==a.x||z.map.height!==a.y)&&z.map.setSize(a.x,a.y);let V=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();G.isPointLight!==!0&&z.updateMatrices(G,M);let j=z.camera.layers.mask&4294967294?z.camera.layers:M.layers;for(let ie=0;ie<V;ie++){let le=z.getCamera(ie);if(G.isPointLight){let Y=z.camera,se=z.matrix,ve=G.distance||Y.far;ve!==Y.far&&(Y.far=ve,Y.updateProjectionMatrix()),Er.setFromMatrixPosition(G.matrixWorld),Y.position.copy(Er),_h.copy(Y.position),_h.add(bv[ie]),Y.up.copy(gv[ie]),Y.lookAt(_h),Y.updateMatrixWorld(),se.makeTranslation(-Er.x,-Er.y,-Er.z),Kf.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Kf,Y.coordinateSystem,Y.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,ie),i.clear();else{ie===0&&(i.setRenderTarget(z.map),i.clear());let Y=z.getViewport(ie);r.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),N.viewport(r)}n=z.getFrustum(ie),v(x,M,le,G,j,this.type)}z.isPointLightShadow!==!0&&this.type===Qa&&_(z,M),z.needsUpdate=!1}p=this.type,b.needsUpdate=!1,i.setRenderTarget(C,T,P)};function _(w,x){let M=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new It(a.x,a.y,{format:ji,type:Tt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(x,null,M,f,g,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(x,null,M,u,g,null)}function y(w,x,M,C){let T=null,P=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=M.isPointLight===!0?c:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let N=T.uuid,U=x.uuid,R=l[N];R===void 0&&(R={},l[N]=R);let O=R[U];O===void 0&&(O=T.clone(),R[U]=O,x.addEventListener("dispose",E)),T=O}if(T.visible=x.visible,T.wireframe=x.wireframe,C===Qa?T.side=x.shadowSide!==null?x.shadowSide:x.side:T.side=x.shadowSide!==null?x.shadowSide:d[x.side],T.alphaMap=x.alphaMap,T.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,T.map=x.map,T.clipShadows=x.clipShadows,T.clippingPlanes=x.clippingPlanes,T.clipIntersection=x.clipIntersection,T.displacementMap=x.displacementMap,T.displacementScale=x.displacementScale,T.displacementBias=x.displacementBias,T.wireframeLinewidth=x.wireframeLinewidth,T.linewidth=x.linewidth,M.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let N=i.properties.get(T);N.light=M}return T}function v(w,x,M,C,T,P){if(w.visible===!1)return;if(w.layers.test(T)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Qa)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);let R=e.update(w),O=w.material;if(Array.isArray(O)){let G=R.groups;for(let z=0,k=G.length;z<k;z++){let B=G[z],V=O[B.materialIndex];if(V&&V.visible){let j=y(w,V,C,P);w.onBeforeShadow(i,w,x,M,R,j,B),i.renderBufferDirect(M,null,R,j,w,B),w.onAfterShadow(i,w,x,M,R,j,B)}}}else if(O.visible){let G=y(w,O,C,P);w.onBeforeShadow(i,w,x,M,R,G,null),i.renderBufferDirect(M,null,R,G,w,null),w.onAfterShadow(i,w,x,M,R,G,null)}}let U=w.children;for(let R=0,O=U.length;R<O;R++)v(U[R],x,M,C,T,P)}function E(w){w.target.removeEventListener("dispose",E);for(let M in l){let C=l[M],T=w.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}function vv(i,e){function t(){let F=!1,ne=new bt,Z=null,Me=new bt(0,0,0,0);return{setMask:function(be){Z!==be&&!F&&(i.colorMask(be,be,be,be),Z=be)},setLocked:function(be){F=be},setClear:function(be,_e,Ve,nt,ue){ue===!0&&(be*=nt,_e*=nt,Ve*=nt),ne.set(be,_e,Ve,nt),Me.equals(ne)===!1&&(i.clearColor(be,_e,Ve,nt),Me.copy(ne))},reset:function(){F=!1,Z=null,Me.set(-1,0,0,0)}}}function n(){let F=!1,ne=!1,Z=null,Me=null,be=null;return{setReversed:function(_e){if(ne!==_e){let Ve=e.get("EXT_clip_control");_e?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ne=_e;let nt=be;be=null,this.setClear(nt)}},getReversed:function(){return ne},setTest:function(_e){_e?we(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(_e){Z!==_e&&!F&&(i.depthMask(_e),Z=_e)},setFunc:function(_e){if(ne&&(_e=vf[_e]),Me!==_e){switch(_e){case mo:i.depthFunc(i.NEVER);break;case bo:i.depthFunc(i.ALWAYS);break;case go:i.depthFunc(i.LESS);break;case Ba:i.depthFunc(i.LEQUAL);break;case xo:i.depthFunc(i.EQUAL);break;case vo:i.depthFunc(i.GEQUAL);break;case _o:i.depthFunc(i.GREATER);break;case yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=_e}},setLocked:function(_e){F=_e},setClear:function(_e){be!==_e&&(be=_e,ne&&(_e=1-_e),i.clearDepth(_e))},reset:function(){F=!1,Z=null,Me=null,be=null,ne=!1}}}function a(){let F=!1,ne=null,Z=null,Me=null,be=null,_e=null,Ve=null,nt=null,ue=null;return{setTest:function(Xe){F||(Xe?we(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Xe){ne!==Xe&&!F&&(i.stencilMask(Xe),ne=Xe)},setFunc:function(Xe,tt,Re){(Z!==Xe||Me!==tt||be!==Re)&&(i.stencilFunc(Xe,tt,Re),Z=Xe,Me=tt,be=Re)},setOp:function(Xe,tt,Re){(_e!==Xe||Ve!==tt||nt!==Re)&&(i.stencilOp(Xe,tt,Re),_e=Xe,Ve=tt,nt=Re)},setLocked:function(Xe){F=Xe},setClear:function(Xe){ue!==Xe&&(i.clearStencil(Xe),ue=Xe)},reset:function(){F=!1,ne=null,Z=null,Me=null,be=null,_e=null,Ve=null,nt=null,ue=null}}}let s=new t,r=new n,o=new a,c={},l=new WeakMap,h={},d={},f={},u=new WeakMap,m=[],g=null,b=!1,p=null,_=null,y=null,v=null,E=null,w=null,x=null,M=new We(0,0,0),C=0,T=!1,P=null,N=null,U=null,R=null,O=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,k=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),z=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),z=k>=2);let V=null,j={},ie=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Y=new bt().fromArray(ie),se=new bt().fromArray(le);function ve(F,ne,Z,Me){let be=new Uint8Array(4),_e=i.createTexture();i.bindTexture(F,_e),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<Z;Ve++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(ne+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return _e}let Pe={};Pe[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pe[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),we(i.DEPTH_TEST),r.setFunc(Ba),Ae(!1),me(ql),we(i.CULL_FACE),he(xi);function we(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function ke(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function ft(F,ne){return f[F]!==ne?(i.bindFramebuffer(F,ne),f[F]=ne,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ne),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Be(F,ne){let Z=m,Me=!1;if(F){Z=u.get(ne),Z===void 0&&(Z=[],u.set(ne,Z));let be=F.textures;if(Z.length!==be.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,Ve=be.length;_e<Ve;_e++)Z[_e]=i.COLOR_ATTACHMENT0+_e;Z.length=be.length,Me=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,Me=!0);Me&&i.drawBuffers(Z)}function Te(F){return g!==F?(i.useProgram(F),g=F,!0):!1}let Le={[ua]:i.FUNC_ADD,[zd]:i.FUNC_SUBTRACT,[Hd]:i.FUNC_REVERSE_SUBTRACT};Le[Gd]=i.MIN,Le[Vd]=i.MAX;let J={[Wd]:i.ZERO,[jd]:i.ONE,[Xd]:i.SRC_COLOR,[Jl]:i.SRC_ALPHA,[Qd]:i.SRC_ALPHA_SATURATE,[Jd]:i.DST_COLOR,[Yd]:i.DST_ALPHA,[qd]:i.ONE_MINUS_SRC_COLOR,[Zl]:i.ONE_MINUS_SRC_ALPHA,[Zd]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[$d]:i.CONSTANT_COLOR,[ef]:i.ONE_MINUS_CONSTANT_COLOR,[tf]:i.CONSTANT_ALPHA,[nf]:i.ONE_MINUS_CONSTANT_ALPHA};function he(F,ne,Z,Me,be,_e,Ve,nt,ue,Xe){if(F===xi){b===!0&&(ke(i.BLEND),b=!1);return}if(b===!1&&(we(i.BLEND),b=!0),F!==Bd){if(F!==p||Xe!==T){if((_!==ua||E!==ua)&&(i.blendEquation(i.FUNC_ADD),_=ua,E=ua),Xe)switch(F){case $a:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wi:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",F);break}else switch(F){case $a:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yl:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kl:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",F);break}y=null,v=null,w=null,x=null,M.set(0,0,0),C=0,p=F,T=Xe}return}be=be||ne,_e=_e||Z,Ve=Ve||Me,(ne!==_||be!==E)&&(i.blendEquationSeparate(Le[ne],Le[be]),_=ne,E=be),(Z!==y||Me!==v||_e!==w||Ve!==x)&&(i.blendFuncSeparate(J[Z],J[Me],J[_e],J[Ve]),y=Z,v=Me,w=_e,x=Ve),(nt.equals(M)===!1||ue!==C)&&(i.blendColor(nt.r,nt.g,nt.b,ue),M.copy(nt),C=ue),p=F,T=!1}function de(F,ne){F.side===Ct?ke(i.CULL_FACE):we(i.CULL_FACE);let Z=F.side===Yt;ne&&(Z=!Z),Ae(Z),F.blending===$a&&F.transparent===!1?he(xi):he(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);let Me=F.stencilWrite;o.setTest(Me),Me&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ae(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?we(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(F){P!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),P=F)}function me(F){F!==Fd?(we(i.CULL_FACE),F!==N&&(F===ql?i.cullFace(i.BACK):F===Od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),N=F}function Q(F){F!==U&&(z&&i.lineWidth(F),U=F)}function ae(F,ne,Z){F?(we(i.POLYGON_OFFSET_FILL),(R!==ne||O!==Z)&&(R=ne,O=Z,r.getReversed()&&(ne=-ne,Z=-Z),i.polygonOffset(ne,Z))):ke(i.POLYGON_OFFSET_FILL)}function fe(F){F?we(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function xe(F){F===void 0&&(F=i.TEXTURE0+G-1),V!==F&&(i.activeTexture(F),V=F)}function Ge(F,ne,Z){Z===void 0&&(V===null?Z=i.TEXTURE0+G-1:Z=V);let Me=j[Z];Me===void 0&&(Me={type:void 0,texture:void 0},j[Z]=Me),(Me.type!==F||Me.texture!==ne)&&(V!==Z&&(i.activeTexture(Z),V=Z),i.bindTexture(F,ne||Pe[F]),Me.type=F,Me.texture=ne)}function D(){let F=j[V];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Oe(){try{i.compressedTexImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function He(){try{i.compressedTexImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function et(){try{i.texSubImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function re(){try{i.texSubImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function Ne(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function je(){try{i.texStorage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function I(){try{i.texStorage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function S(){try{i.texImage2D(...arguments)}catch(F){Ye("WebGLState:",F)}}function W(){try{i.texImage3D(...arguments)}catch(F){Ye("WebGLState:",F)}}function oe(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function ee(F,ne){d[F]!==ne&&(i.pixelStorei(F,ne),d[F]=ne)}function pe(F){Y.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Y.copy(F))}function ge(F){se.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),se.copy(F))}function $(F,ne){let Z=l.get(ne);Z===void 0&&(Z=new WeakMap,l.set(ne,Z));let Me=Z.get(F);Me===void 0&&(Me=i.getUniformBlockIndex(ne,F.name),i.uniformBlockBinding(ne,Me,Me),Z.set(F,Me))}function te(F,ne,Z){let be=l.get(ne).get(F);c[be]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,be,Z),c[be]=Z)}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},V=null,j={},f={},c={},u=new WeakMap,m=[],g=null,b=!1,p=null,_=null,y=null,v=null,E=null,w=null,x=null,M=new We(0,0,0),C=0,T=!1,P=null,N=null,U=null,R=null,O=null,Y.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:we,disable:ke,bindFramebuffer:ft,drawBuffers:Be,useProgram:Te,setBlending:he,setMaterial:de,setFlipSided:Ae,setCullFace:me,setLineWidth:Q,setPolygonOffset:ae,setScissorTest:fe,activeTexture:xe,bindTexture:Ge,unbindTexture:D,compressedTexImage2D:Oe,compressedTexImage3D:He,texImage2D:S,texImage3D:W,pixelStorei:ee,getParameter:oe,updateUBOMapping:$,uniformBlockBinding:te,texStorage2D:je,texStorage3D:I,texSubImage2D:et,texSubImage3D:re,compressedTexSubImage2D:rt,compressedTexSubImage3D:Ne,scissor:pe,viewport:ge,reset:ye}}function _v(i,e,t,n,a,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ce,h=new WeakMap,d=new Set,f,u=new WeakMap,m=new Set,g=new FinalizationRegistry(I=>m.delete(I)),b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,S){return b?new OffscreenCanvas(I,S):za("canvas")}function _(I,S,W){let oe=1,ee=je(I);if((ee.width>W||ee.height>W)&&(oe=W/Math.max(ee.width,ee.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let pe=Math.floor(oe*ee.width),ge=Math.floor(oe*ee.height);f===void 0&&(f=p(pe,ge));let $=S?p(pe,ge):f;return $.width=pe,$.height=ge,$.getContext("2d").drawImage(I,0,0,pe,ge),qe("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+pe+"x"+ge+")."),$}else return"data"in I&&qe("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function y(I){return I.generateMipmaps}function v(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(I,S,W,oe,ee,pe=!1){if(I!==null){if(i[I]!==void 0)return i[I];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ge;oe&&(ge=e.get("EXT_texture_norm16"),ge||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=S;if(S===i.RED&&(W===i.FLOAT&&($=i.R32F),W===i.HALF_FLOAT&&($=i.R16F),W===i.UNSIGNED_BYTE&&($=i.R8),W===i.UNSIGNED_SHORT&&ge&&($=ge.R16_EXT),W===i.SHORT&&ge&&($=ge.R16_SNORM_EXT)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.R8UI),W===i.UNSIGNED_SHORT&&($=i.R16UI),W===i.UNSIGNED_INT&&($=i.R32UI),W===i.BYTE&&($=i.R8I),W===i.SHORT&&($=i.R16I),W===i.INT&&($=i.R32I)),S===i.RG&&(W===i.FLOAT&&($=i.RG32F),W===i.HALF_FLOAT&&($=i.RG16F),W===i.UNSIGNED_BYTE&&($=i.RG8),W===i.UNSIGNED_SHORT&&ge&&($=ge.RG16_EXT),W===i.SHORT&&ge&&($=ge.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RG8UI),W===i.UNSIGNED_SHORT&&($=i.RG16UI),W===i.UNSIGNED_INT&&($=i.RG32UI),W===i.BYTE&&($=i.RG8I),W===i.SHORT&&($=i.RG16I),W===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGB8UI),W===i.UNSIGNED_SHORT&&($=i.RGB16UI),W===i.UNSIGNED_INT&&($=i.RGB32UI),W===i.BYTE&&($=i.RGB8I),W===i.SHORT&&($=i.RGB16I),W===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&($=i.RGBA8UI),W===i.UNSIGNED_SHORT&&($=i.RGBA16UI),W===i.UNSIGNED_INT&&($=i.RGBA32UI),W===i.BYTE&&($=i.RGBA8I),W===i.SHORT&&($=i.RGBA16I),W===i.INT&&($=i.RGBA32I)),S===i.RGB&&(W===i.UNSIGNED_SHORT&&ge&&($=ge.RGB16_EXT),W===i.SHORT&&ge&&($=ge.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){let te=pe?Ds:st.getTransfer(ee);W===i.FLOAT&&($=i.RGBA32F),W===i.HALF_FLOAT&&($=i.RGBA16F),W===i.UNSIGNED_BYTE&&($=te===pt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&ge&&($=ge.RGBA16_EXT),W===i.SHORT&&ge&&($=ge.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(I,S){let W;return I?S===null||S===zn||S===ba?W=i.DEPTH24_STENCIL8:S===Nt?W=i.DEPTH32F_STENCIL8:S===ts&&(W=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zn||S===ba?W=i.DEPTH_COMPONENT24:S===Nt?W=i.DEPTH_COMPONENT32F:S===ts&&(W=i.DEPTH_COMPONENT16),W}function M(I,S){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ut&&I.minFilter!==_t?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function C(I){let S=new WeakRef(I);n.get(I).__ref=S,m.add(S),g.register(I,S,S)}function T(I){let S=n.get(I).__ref;S!==void 0&&(m.delete(S),g.unregister(S))}function P(I){U(I.target)}function N(I){R(I.target)}function U(I){I.removeEventListener("dispose",P),T(I),G(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function R(I){I.removeEventListener("dispose",N),T(I),k(I)}function O(){for(let I of m){let S=I.deref();S!==void 0&&(S.isRenderTarget===!0?R(S):U(S))}m.clear(),d.clear()}function G(I){let S=n.get(I);if(S.__webglInit===void 0)return;let W=I.source,oe=u.get(W);if(oe){let ee=oe[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&z(I),Object.keys(oe).length===0&&u.delete(W)}n.remove(I)}function z(I){let S=n.get(I);i.deleteTexture(S.__webglTexture);let W=I.source,oe=u.get(W);delete oe[S.__cacheKey],r.memory.textures--}function k(I){let S=n.get(I);S.__depthDisposeCallback&&S.__depthDisposeCallback();let W=I.depthTexture;if(W&&W.renderTarget===I&&U(W),I.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(S.__webglFramebuffer[ee]))for(let pe=0;pe<S.__webglFramebuffer[ee].length;pe++)i.deleteFramebuffer(S.__webglFramebuffer[ee][pe]);else i.deleteFramebuffer(S.__webglFramebuffer[ee]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ee])}else{if(Array.isArray(S.__webglFramebuffer))for(let ee=0;ee<S.__webglFramebuffer.length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[ee]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ee=0;ee<S.__webglColorRenderbuffer.length;ee++)S.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ee]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let oe=I.textures;for(let ee=0,pe=oe.length;ee<pe;ee++){let ge=n.get(oe[ee]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),r.memory.textures--),n.remove(oe[ee])}n.remove(I)}let B=0;function V(){B=0}function j(){return B}function ie(I){B=I}function le(){let I=B;return I>=a.maxTextures&&qe("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+a.maxTextures),B+=1,I}function Y(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.mipmapsAutoUpdate),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function se(I,S){let W=n.get(I);if(I.isVideoTexture&&rt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){let oe=I.image;if(oe===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{de(W,I,S);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function ve(I,S){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){de(W,I,S);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function Pe(I,S){let W=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){de(W,I,S);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function we(I,S){let W=n.get(I);if(I.version>0&&W.__version!==I.version){Ae(W,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}let ke={[An]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Mo]:i.MIRRORED_REPEAT},ft={[Ut]:i.NEAREST,[rf]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[_t]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[an]:i.LINEAR_MIPMAP_LINEAR},Be={[hf]:i.NEVER,[ch]:i.ALWAYS,[df]:i.LESS,[rh]:i.LEQUAL,[ff]:i.EQUAL,[oh]:i.GEQUAL,[uf]:i.GREATER,[pf]:i.NOTEQUAL};function Te(I,S){if(S.type===Nt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===_t||S.magFilter===Jo||S.magFilter===gr||S.magFilter===an||S.minFilter===_t||S.minFilter===Jo||S.minFilter===gr||S.minFilter===an)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ke[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ke[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ke[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ft[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ft[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ut||S.minFilter!==gr&&S.minFilter!==an||S.type===Nt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Le(I,S){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",P),C(S));let oe=S.source,ee=u.get(oe);ee===void 0&&(ee={},u.set(oe,ee));let pe=Y(S);if(pe!==I.__cacheKey){ee[pe]===void 0&&(ee[pe]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,W=!0),ee[pe].usedTimes++;let ge=ee[I.__cacheKey];ge!==void 0&&(ee[I.__cacheKey].usedTimes--,ge.usedTimes===0&&z(S)),I.__cacheKey=pe,I.__webglTexture=ee[pe].texture}return W}function J(I,S,W){return Math.floor(Math.floor(I/W)/S)}function he(I,S,W,oe){let pe=I.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,W,oe,S.data);else{pe.sort((F,ne)=>F.start-ne.start);let ge=0;for(let F=1;F<pe.length;F++){let ne=pe[ge],Z=pe[F],Me=ne.start+ne.count,be=J(Z.start,S.width,4),_e=J(ne.start,S.width,4);Z.start<=Me+1&&be===_e&&J(Z.start+Z.count-1,S.width,4)===be?ne.count=Math.max(ne.count,Z.start+Z.count-ne.start):(++ge,pe[ge]=Z)}pe.length=ge+1;let $=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let F=0,ne=pe.length;F<ne;F++){let Z=pe[F],Me=Math.floor(Z.start/4),be=Math.ceil(Z.count/4),_e=Me%S.width,Ve=Math.floor(Me/S.width),nt=be,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(i.TEXTURE_2D,0,_e,Ve,nt,ue,W,oe,S.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function de(I,S,W){let oe=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=i.TEXTURE_3D);let ee=Le(I,S),pe=S.source;t.bindTexture(oe,I.__webglTexture,i.TEXTURE0+W);let ge=n.get(pe);if(pe.version!==ge.__version||ee===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ue=st.getPrimaries(st.workingColorSpace),Xe=S.colorSpace===_i?null:st.getPrimaries(S.colorSpace),tt=S.colorSpace===_i||ue===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let te=_(S.image,!1,a.maxTextureSize);te=Ne(S,te);let ye=s.convert(S.format,S.colorSpace),F=s.convert(S.type),ne=w(S.internalFormat,ye,F,S.normalized,S.colorSpace,S.isVideoTexture);Te(oe,S);let Z,Me=S.mipmaps,be=S.isVideoTexture!==!0,_e=ge.__version===void 0||ee===!0,Ve=pe.dataReady,nt=M(S,te);if(S.isDepthTexture)ne=x(S.format===vi,S.type),_e&&(be?t.texStorage2D(i.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,ye,F,null));else if(S.isDataTexture)if(Me.length>0){be&&_e&&t.texStorage2D(i.TEXTURE_2D,nt,ne,Me[0].width,Me[0].height);for(let ue=0,Xe=Me.length;ue<Xe;ue++)Z=Me[ue],be?Ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Z.width,Z.height,ye,F,Z.data):t.texImage2D(i.TEXTURE_2D,ue,ne,Z.width,Z.height,0,ye,F,Z.data);S.generateMipmaps=!1}else be?(_e&&t.texStorage2D(i.TEXTURE_2D,nt,ne,te.width,te.height),Ve&&he(S,te,ye,F)):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,ye,F,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){be&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,ne,Me[0].width,Me[0].height,te.depth);for(let ue=0,Xe=Me.length;ue<Xe;ue++)if(Z=Me[ue],S.format!==pn)if(ye!==null)if(be){if(Ve)if(S.layerUpdates.size>0){let tt=xh(Z.width,Z.height,S.format,S.type);for(let Re of S.layerUpdates){let gt=Z.data.subarray(Re*tt/Z.data.BYTES_PER_ELEMENT,(Re+1)*tt/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Re,Z.width,Z.height,1,ye,gt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Z.width,Z.height,te.depth,ye,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ne,Z.width,Z.height,te.depth,0,Z.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Z.width,Z.height,te.depth,ye,F,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ne,Z.width,Z.height,te.depth,0,ye,F,Z.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{be&&_e&&t.texStorage2D(i.TEXTURE_2D,nt,ne,Me[0].width,Me[0].height);for(let ue=0,Xe=Me.length;ue<Xe;ue++)Z=Me[ue],S.format!==pn?ye!==null?be?Ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Z.width,Z.height,ye,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ne,Z.width,Z.height,0,Z.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Z.width,Z.height,ye,F,Z.data):t.texImage2D(i.TEXTURE_2D,ue,ne,Z.width,Z.height,0,ye,F,Z.data)}else if(S.isDataArrayTexture)if(be){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,ne,te.width,te.height,te.depth),Ve)if(S.layerUpdates.size>0){let ue=xh(te.width,te.height,S.format,S.type);for(let Xe of S.layerUpdates){let tt=te.data.subarray(Xe*ue/te.data.BYTES_PER_ELEMENT,(Xe+1)*ue/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Xe,te.width,te.height,1,ye,F,tt)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ye,F,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,ye,F,te.data);else if(S.isData3DTexture)be?(_e&&t.texStorage3D(i.TEXTURE_3D,nt,ne,te.width,te.height,te.depth),Ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ye,F,te.data)):t.texImage3D(i.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,ye,F,te.data);else if(S.isFramebufferTexture){if(_e)if(be)t.texStorage2D(i.TEXTURE_2D,nt,ne,te.width,te.height);else{let ue=te.width,Xe=te.height;for(let tt=0;tt<nt;tt++)t.texImage2D(i.TEXTURE_2D,tt,ne,ue,Xe,0,ye,F,null),ue>>=1,Xe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),te.parentNode!==ue){ue.appendChild(te),d.add(S),ue.onpaint=Xe=>{let tt=Xe.changedElements;for(let Re of d)tt.includes(Re.image)&&(Re.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{let tt=i.RGBA,Re=i.RGBA,gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,tt,Re,gt,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Me.length>0){if(be&&_e){let ue=je(Me[0]);t.texStorage2D(i.TEXTURE_2D,nt,ne,ue.width,ue.height)}for(let ue=0,Xe=Me.length;ue<Xe;ue++)Z=Me[ue],be?Ve&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ye,F,Z):t.texImage2D(i.TEXTURE_2D,ue,ne,ye,F,Z);S.generateMipmaps=!1}else if(be){if(_e){let ue=je(te);t.texStorage2D(i.TEXTURE_2D,nt,ne,ue.width,ue.height)}Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,F,te)}else t.texImage2D(i.TEXTURE_2D,0,ne,ye,F,te);y(S)&&S.mipmapsAutoUpdate===!0&&v(oe),ge.__version=pe.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Ae(I,S,W){if(S.image.length!==6)return;let oe=Le(I,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+W);let pe=n.get(ee);if(ee.version!==pe.__version||oe===!0){t.activeTexture(i.TEXTURE0+W);let ge=st.getPrimaries(st.workingColorSpace),$=S.colorSpace===_i?null:st.getPrimaries(S.colorSpace),te=S.colorSpace===_i||ge===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ye=S.isCompressedTexture||S.image[0].isCompressedTexture,F=S.image[0]&&S.image[0].isDataTexture,ne=[];for(let Re=0;Re<6;Re++)!ye&&!F?ne[Re]=_(S.image[Re],!0,a.maxCubemapSize):ne[Re]=F?S.image[Re].image:S.image[Re],ne[Re]=Ne(S,ne[Re]);let Z=ne[0],Me=s.convert(S.format,S.colorSpace),be=s.convert(S.type),_e=w(S.internalFormat,Me,be,S.normalized,S.colorSpace),Ve=S.isVideoTexture!==!0,nt=pe.__version===void 0||oe===!0,ue=ee.dataReady,Xe=M(S,Z);Te(i.TEXTURE_CUBE_MAP,S);let tt;if(S.isDepthTexture){if(_e=x(S.format===vi,S.type),nt)if(Ve)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,_e,Z.width,Z.height);else for(let Re=0;Re<6;Re++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,_e,Z.width,Z.height,0,Me,be,null)}else if(ye){Ve&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,_e,Z.width,Z.height);for(let Re=0;Re<6;Re++){tt=ne[Re].mipmaps;for(let gt=0;gt<tt.length;gt++){let zt=tt[gt];S.format!==pn?Me!==null?Ve?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,gt,0,0,zt.width,zt.height,Me,zt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,gt,_e,zt.width,zt.height,0,zt.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,gt,0,0,zt.width,zt.height,Me,be,zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,gt,_e,zt.width,zt.height,0,Me,be,zt.data)}}}else{if(tt=S.mipmaps,Ve&&nt){tt.length>0&&Xe++;let Re=je(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,_e,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(F){Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ne[Re].width,ne[Re].height,Me,be,ne[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,_e,ne[Re].width,ne[Re].height,0,Me,be,ne[Re].data);for(let gt=0;gt<tt.length;gt++){let wi=tt[gt].image[Re].image;Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,gt+1,0,0,wi.width,wi.height,Me,be,wi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,gt+1,_e,wi.width,wi.height,0,Me,be,wi.data)}}else{Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Me,be,ne[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,_e,Me,be,ne[Re]);for(let gt=0;gt<tt.length;gt++){let zt=tt[gt];Ve?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,gt+1,0,0,Me,be,zt.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,gt+1,_e,Me,be,zt.image[Re])}}}y(S)&&S.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),pe.__version=ee.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function me(I,S,W,oe,ee,pe){let ge=s.convert(W.format,W.colorSpace),$=s.convert(W.type),te=w(W.internalFormat,ge,$,W.normalized,W.colorSpace),ye=n.get(S),F=n.get(W);if(F.__renderTarget=S,!ye.__hasExternalTextures){let ne=Math.max(1,S.width>>pe),Z=Math.max(1,S.height>>pe);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,pe,te,ne,Z,S.depth,0,ge,$,null):t.texImage2D(ee,pe,te,ne,Z,0,ge,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ee,F.__webglTexture,0,et(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ee,F.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Q(I,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let oe=S.depthTexture,ee=oe&&oe.isDepthTexture?oe.type:null,pe=x(S.stencilBuffer,ee),ge=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;re(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(S),pe,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(S),pe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,pe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,I)}else{let oe=S.textures;for(let ee=0;ee<oe.length;ee++){let pe=oe[ee],ge=s.convert(pe.format,pe.colorSpace),$=s.convert(pe.type),te=w(pe.internalFormat,ge,$,pe.normalized,pe.colorSpace);re(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(S),te,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(S),te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(I,S,W){let oe=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=n.get(S.depthTexture);ee.__renderTarget=S;let pe=oe?S.depthTexture.image[0]:S.depthTexture.image;(!ee.__webglTexture||pe.width!==S.width||pe.height!==S.height)&&(pe.width=S.width,pe.height=S.height,S.depthTexture.needsUpdate=!0),oe?we(S.depthTexture,0):se(S.depthTexture,0);let ge=ee.__webglTexture,$=et(S),te=oe?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ye=S.depthTexture.format===vi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===fi)re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,te,ge,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ye,te,ge,0);else if(S.depthTexture.format===vi)re(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,te,ge,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ye,te,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function fe(I){let S=n.get(I),W=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let oe=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),oe){let ee=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,oe.removeEventListener("dispose",ee)};oe.addEventListener("dispose",ee),S.__depthDisposeCallback=ee}S.__boundDepthTexture=oe}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let oe=0;oe<6;oe++)ae(S.__webglFramebuffer[oe],I,oe);else I.texture.mipmaps.length>0?ae(S.__webglFramebuffer[0],I,0):ae(S.__webglFramebuffer,I,0);else if(W){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]===void 0)S.__webglDepthbuffer[oe]=i.createRenderbuffer(),Q(S.__webglDepthbuffer[oe],I,!1);else{let ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=S.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,pe)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Q(S.__webglDepthbuffer,I,!1);else{let ee=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,pe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(I,S,W){let oe=n.get(I);S!==void 0&&me(oe.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&fe(I)}function Ge(I){let S=I.texture,W=n.get(I),oe=n.get(S);I.addEventListener("dispose",N),C(I);let ee=I.textures,pe=I.isWebGLCubeRenderTarget===!0,ge=ee.length>1;if(ge||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=S.version,r.memory.textures++),pe){W.__webglFramebuffer=[];for(let $=0;$<6;$++)if(S.mipmaps.length>0){W.__webglFramebuffer[$]=[];for(let te=0;te<S.mipmaps.length;te++)W.__webglFramebuffer[$][te]=i.createFramebuffer()}else W.__webglFramebuffer[$]=i.createFramebuffer()}else{if(S.mipmaps.length>0){W.__webglFramebuffer=[];for(let $=0;$<S.mipmaps.length;$++)W.__webglFramebuffer[$]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(ge)for(let $=0,te=ee.length;$<te;$++){let ye=n.get(ee[$]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),r.memory.textures++)}if(I.samples>0&&re(I)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let $=0;$<ee.length;$++){let te=ee[$];W.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[$]);let ye=s.convert(te.format,te.colorSpace),F=s.convert(te.type),ne=w(te.internalFormat,ye,F,te.normalized,te.colorSpace,I.isXRRenderTarget===!0),Z=et(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,ne,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,W.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Q(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Te(i.TEXTURE_CUBE_MAP,S);for(let $=0;$<6;$++)if(S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)me(W.__webglFramebuffer[$][te],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,te);else me(W.__webglFramebuffer[$],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);y(S)?v(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let $=0,te=ee.length;$<te;$++){let ye=ee[$],F=n.get(ye),ne=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ne=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,F.__webglTexture),Te(ne,ye),me(W.__webglFramebuffer,I,ye,i.COLOR_ATTACHMENT0+$,ne,0),y(ye)&&v(ne)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&($=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,oe.__webglTexture),Te($,S),S.mipmaps.length>0)for(let te=0;te<S.mipmaps.length;te++)me(W.__webglFramebuffer[te],I,S,i.COLOR_ATTACHMENT0,$,te);else me(W.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,$,0);y(S)?v($):S.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&fe(I)}function D(I){let S=I.textures;for(let W=0,oe=S.length;W<oe;W++){let ee=S[W];if(y(ee)&&ee.mipmapsAutoUpdate===!0){let pe=E(I),ge=n.get(ee).__webglTexture;t.bindTexture(pe,ge),v(pe),t.unbindTexture()}}}let Oe=[];function He(I){if(I.samples>0){if(re(I)===!1){let S=I.textures,W=I.width,oe=I.height,ee=i.COLOR_BUFFER_BIT,pe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(I),$=S.length>1;if($)for(let ye=0;ye<S.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);let F=n.get(S[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,W,oe,0,0,W,oe,ee,i.NEAREST),c===!0&&(Oe.length=0,Oe.push(i.COLOR_ATTACHMENT0+ye),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Oe.push(pe),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ye=0;ye<S.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,ge.__webglColorRenderbuffer[ye]);let F=n.get(S[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function et(I){return Math.min(a.maxSamples,I.samples)}function re(I){let S=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function rt(I){let S=r.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function Ne(I,S){let W=I.colorSpace,oe=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==ca&&W!==_i&&(st.getTransfer(W)===pt?(oe!==pn||ee!==Kt)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",W)),S}function je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=le,this.resetTextureUnits=V,this.getTextureUnits=j,this.setTextureUnits=ie,this.setTexture2D=se,this.setTexture2DArray=ve,this.setTexture3D=Pe,this.setTextureCube=we,this.rebindTextures=xe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=re,this.dispose=O}function yv(i,e){function t(n,a=_i){let s,r=st.getTransfer(a);if(n===Kt)return i.UNSIGNED_BYTE;if(n===Qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ih)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===eh)return i.BYTE;if(n===th)return i.SHORT;if(n===ts)return i.UNSIGNED_SHORT;if(n===Zo)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Nt)return i.FLOAT;if(n===Tt)return i.HALF_FLOAT;if(n===ah)return i.ALPHA;if(n===sh)return i.RGB;if(n===pn)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===ns)return i.RED;if(n===ec)return i.RED_INTEGER;if(n===ji)return i.RG;if(n===tc)return i.RG_INTEGER;if(n===nc)return i.RGBA_INTEGER;if(n===xr||n===vr||n===_r||n===yr)if(r===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ic||n===ac||n===sc||n===rc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===cc||n===lc||n===hc||n===dc||n===Mr||n===fc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===oc||n===cc)return r===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===lc)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===hc)return s.COMPRESSED_R11_EAC;if(n===dc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Mr)return s.COMPRESSED_RG11_EAC;if(n===fc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uc||n===pc||n===mc||n===bc||n===gc||n===xc||n===vc||n===_c||n===yc||n===Mc||n===Sc||n===wc||n===Ec||n===Ac)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uc)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mc)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bc)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ec)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ac)return r===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tc||n===Rc||n===Ic)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Tc)return r===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cc||n===Nc||n===Sr||n===Pc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Cc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ba?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
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

}`,Th=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ws(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new St({vertexShader:Mv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends Vn{constructor(e,t){super();let n=this,a=null,s=1,r=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,m=null,g=typeof XRWebGLBinding<"u",b=new Th,p={},_=t.getContextAttributes(),y=null,v=null,E=[],w=[],x=new ce,M=null,C=null,T=new tn;T.viewport=new bt;let P=new tn;P.viewport=new bt;let N=[T,P],U=new Xo,R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=E[Y];return se===void 0&&(se=new Wa,E[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=E[Y];return se===void 0&&(se=new Wa,E[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=E[Y];return se===void 0&&(se=new Wa,E[Y]=se),se.getHandSpace()};function G(Y){let se=w.indexOf(Y.inputSource);if(se===-1)return;let ve=E[se];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,l||r),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){a.removeEventListener("select",G),a.removeEventListener("selectstart",G),a.removeEventListener("selectend",G),a.removeEventListener("squeeze",G),a.removeEventListener("squeezestart",G),a.removeEventListener("squeezeend",G),a.removeEventListener("end",z),a.removeEventListener("inputsourceschange",k);for(let Y=0;Y<E.length;Y++){let se=w[Y];se!==null&&(w[Y]=null,E[Y].disconnect(se))}R=null,O=null,b.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(y),u=null,f=null,d=null,a=null,v=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(x.width,x.height,!1),C!==null){let Y=C.camera;Y.fov=C.fov,Y.zoom=C.zoom,Y.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(a,t)),d},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(y=e.getRenderTarget(),a.addEventListener("select",G),a.addEventListener("selectstart",G),a.addEventListener("selectend",G),a.addEventListener("squeeze",G),a.addEventListener("squeezestart",G),a.addEventListener("squeezeend",G),a.addEventListener("end",z),a.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(x),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Pe=null,we=null;_.depth&&(we=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=_.stencil?vi:fi,Pe=_.stencil?ba:zn);let ke={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ke),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new It(f.textureWidth,f.textureHeight,{format:pn,type:Kt,depthTexture:new Bn(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ve={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(a,t,ve),a.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),v=new It(u.framebufferWidth,u.framebufferHeight,{format:pn,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await a.requestReferenceSpace(o),le.setContext(a),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function k(Y){for(let se=0;se<Y.removed.length;se++){let ve=Y.removed[se],Pe=w.indexOf(ve);Pe>=0&&(w[Pe]=null,E[Pe].disconnect(ve))}for(let se=0;se<Y.added.length;se++){let ve=Y.added[se],Pe=w.indexOf(ve);if(Pe===-1){for(let ke=0;ke<E.length;ke++)if(ke>=w.length){w.push(ve),Pe=ke;break}else if(w[ke]===null){w[ke]=ve,Pe=ke;break}if(Pe===-1)break}let we=E[Pe];we&&we.connect(ve)}}function B(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let se=Y.near,ve=Y.far;b.texture!==null&&(b.depthNear>0&&(se=b.depthNear),b.depthFar>0&&(ve=b.depthFar)),U.near=P.near=T.near=se,U.far=P.far=T.far=ve,(R!==U.near||O!==U.far)&&(a.updateRenderState({depthNear:U.near,depthFar:U.far}),R=U.near,O=U.far),U.layers.mask=Y.layers.mask|6,T.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;let Pe=Y.parent,we=U.cameras;B(U,Pe);for(let ke=0;ke<we.length;ke++)B(we[ke],Pe);U.projectionMatrix.copy(T.projectionMatrix),U.projectionMatrixInverse.copy(T.projectionMatrixInverse),C===null&&Y.isPerspectiveCamera&&(C={camera:Y,fov:Y.fov,zoom:Y.zoom}),V(Y,U,Pe)};function V(Y,se,ve){ve===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ga*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(U)},this.getCameraTexture=function(Y){return p[Y]};let j=null;function ie(Y,se){if(h=se.getViewerPose(l||r),m=se,h!==null){let ve=h.views;u!==null&&(e.setRenderTargetFramebuffer(v,u.framebuffer),e.setRenderTarget(v));let Pe=!1;ve.length!==U.cameras.length&&(U.cameras.length=0,Pe=!0);for(let Be=0;Be<ve.length;Be++){let Te=ve[Be],Le=null;if(u!==null)Le=u.getViewport(Te);else{let he=d.getViewSubImage(f,Te);Le=he.viewport,Be===0&&(e.setRenderTargetTextures(v,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(v))}let J=N[Be];J===void 0&&(J=new tn,J.layers.enable(Be),J.viewport=new bt,N[Be]=J),J.matrix.fromArray(Te.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Te.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Le.x,Le.y,Le.width,Le.height),Be===0&&(U.matrix.copy(J.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Pe===!0&&U.cameras.push(J)}let we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){d=n.getBinding();let Be=d.getDepthInformation(ve[0]);Be&&Be.isValid&&Be.texture&&b.init(Be,a.renderState)}if(we&&we.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let Be=0;Be<ve.length;Be++){let Te=ve[Be].camera;if(Te){let Le=p[Te];Le||(Le=new Ws,p[Te]=Le);let J=d.getCameraImage(Te);Le.sourceTexture=J}}}}for(let ve=0;ve<E.length;ve++){let Pe=w[ve],we=E[ve];Pe!==null&&we!==void 0&&we.update(Pe,se,l||r)}j&&j(Y,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}let le=new Jf;le.setAnimationLoop(ie),this.setAnimationLoop=function(Y){j=Y},this.dispose=function(){}}},wv=new Je,ru=new Ze;ru.set(-1,0,0,0,1,0,0,0,1);function Ev(i,e){function t(b,p){b.matrixAutoUpdate===!0&&b.updateMatrix(),p.value.copy(b.matrix)}function n(b,p){p.color.getRGB(b.fogColor.value,mh(i)),p.isFog?(b.fogNear.value=p.near,b.fogFar.value=p.far):p.isFogExp2&&(b.fogDensity.value=p.density)}function a(b,p,_,y,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(b,p):p.isMeshLambertMaterial?(s(b,p),p.envMap&&(b.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(b,p),d(b,p)):p.isMeshPhongMaterial?(s(b,p),h(b,p),p.envMap&&(b.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(b,p),f(b,p),p.isMeshPhysicalMaterial&&u(b,p,v)):p.isMeshMatcapMaterial?(s(b,p),m(b,p)):p.isMeshDepthMaterial?s(b,p):p.isMeshDistanceMaterial?(s(b,p),g(b,p)):p.isMeshNormalMaterial?s(b,p):p.isLineBasicMaterial?(r(b,p),p.isLineDashedMaterial&&o(b,p)):p.isPointsMaterial?c(b,p,_,y):p.isSpriteMaterial?l(b,p):p.isShadowMaterial?(b.color.value.copy(p.color),b.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(b,p){b.opacity.value=p.opacity,p.color&&b.diffuse.value.copy(p.color),p.emissive&&b.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(b.map.value=p.map,t(p.map,b.mapTransform)),p.alphaMap&&(b.alphaMap.value=p.alphaMap,t(p.alphaMap,b.alphaMapTransform)),p.bumpMap&&(b.bumpMap.value=p.bumpMap,t(p.bumpMap,b.bumpMapTransform),b.bumpScale.value=p.bumpScale,p.side===Yt&&(b.bumpScale.value*=-1)),p.normalMap&&(b.normalMap.value=p.normalMap,t(p.normalMap,b.normalMapTransform),b.normalScale.value.copy(p.normalScale),p.side===Yt&&b.normalScale.value.negate()),p.displacementMap&&(b.displacementMap.value=p.displacementMap,t(p.displacementMap,b.displacementMapTransform),b.displacementScale.value=p.displacementScale,b.displacementBias.value=p.displacementBias),p.emissiveMap&&(b.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,b.emissiveMapTransform)),p.specularMap&&(b.specularMap.value=p.specularMap,t(p.specularMap,b.specularMapTransform)),p.alphaTest>0&&(b.alphaTest.value=p.alphaTest);let _=e.get(p),y=_.envMap,v=_.envMapRotation;y&&(b.envMap.value=y,b.envMapRotation.value.setFromMatrix4(wv.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(ru),b.reflectivity.value=p.reflectivity,b.ior.value=p.ior,b.refractionRatio.value=p.refractionRatio),p.lightMap&&(b.lightMap.value=p.lightMap,b.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,b.lightMapTransform)),p.aoMap&&(b.aoMap.value=p.aoMap,b.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,b.aoMapTransform))}function r(b,p){b.diffuse.value.copy(p.color),b.opacity.value=p.opacity,p.map&&(b.map.value=p.map,t(p.map,b.mapTransform))}function o(b,p){b.dashSize.value=p.dashSize,b.totalSize.value=p.dashSize+p.gapSize,b.scale.value=p.scale}function c(b,p,_,y){b.diffuse.value.copy(p.color),b.opacity.value=p.opacity,b.size.value=p.size*_,b.scale.value=y*.5,p.map&&(b.map.value=p.map,t(p.map,b.uvTransform)),p.alphaMap&&(b.alphaMap.value=p.alphaMap,t(p.alphaMap,b.alphaMapTransform)),p.alphaTest>0&&(b.alphaTest.value=p.alphaTest)}function l(b,p){b.diffuse.value.copy(p.color),b.opacity.value=p.opacity,b.rotation.value=p.rotation,p.map&&(b.map.value=p.map,t(p.map,b.mapTransform)),p.alphaMap&&(b.alphaMap.value=p.alphaMap,t(p.alphaMap,b.alphaMapTransform)),p.alphaTest>0&&(b.alphaTest.value=p.alphaTest)}function h(b,p){b.specular.value.copy(p.specular),b.shininess.value=Math.max(p.shininess,1e-4)}function d(b,p){p.gradientMap&&(b.gradientMap.value=p.gradientMap)}function f(b,p){b.metalness.value=p.metalness,p.metalnessMap&&(b.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,b.metalnessMapTransform)),b.roughness.value=p.roughness,p.roughnessMap&&(b.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,b.roughnessMapTransform)),p.envMap&&(b.envMapIntensity.value=p.envMapIntensity)}function u(b,p,_){b.ior.value=p.ior,p.diffuseRoughness>0&&(b.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(b.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,b.diffuseRoughnessMapTransform))),p.sheen>0&&(b.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),b.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(b.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,b.sheenColorMapTransform)),p.sheenRoughnessMap&&(b.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,b.sheenRoughnessMapTransform))),p.clearcoat>0&&(b.clearcoat.value=p.clearcoat,b.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(b.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,b.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(b.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&b.clearcoatNormalScale.value.negate())),p.dispersion>0&&(b.dispersion.value=p.dispersion),p.retroreflectivity>0&&(b.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(b.iridescence.value=p.iridescence,b.iridescenceIOR.value=p.iridescenceIOR,b.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,b.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(b.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,b.iridescenceMapTransform)),p.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),p.transmission>0&&(b.transmission.value=p.transmission,b.transmissionSamplerMap.value=_.texture,b.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(b.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,b.transmissionMapTransform)),b.thickness.value=p.thickness,p.thicknessMap&&(b.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=p.attenuationDistance,b.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(b.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(b.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=p.specularIntensity,b.specularColor.value.copy(p.specularColor),p.specularColorMap&&(b.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,b.specularColorMapTransform)),p.specularIntensityMap&&(b.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,b.specularIntensityMapTransform))}function m(b,p){p.matcap&&(b.matcap.value=p.matcap)}function g(b,p){let _=e.get(p).light;b.referencePosition.value.setFromMatrixPosition(_.matrixWorld),b.nearDistance.value=_.shadow.camera.near,b.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Av(i,e,t,n){let a={},s={};function r(_,y){let v=y.program;n.uniformBlockBinding(_,v,a[_.id])}function o(_,y){let v=a[_.id];v===void 0&&(m(_),v=c(_),a[_.id]=v,_.addEventListener("dispose",b));let E=y.program;n.updateUBOMapping(_,E);let w=e.render.frame;s[_.id]!==w&&(l(_),s[_.id]=w)}function c(_){let y=i.createBuffer(),v=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,v,E),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function l(_){let y=a[_.id],v=_.uniforms,E=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,x=v.length;w<x;w++){let M=v[w];if(Array.isArray(M))for(let C=0,T=M.length;C<T;C++)h(M[C],w,C,E);else h(M,w,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,y,v,E){if(f(_,y,v,E)===!0){let w=_.__offset,x=_.value;if(Array.isArray(x)){let M=0;for(let C=0;C<x.length;C++){let T=x[C],P=g(T,!0);d(T,_.__data,M),M+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,_.__data)}}function d(_,y,v){typeof _=="number"||typeof _=="boolean"?y[v]=_:_.isMatrix3?(y[v]=_.elements[0],y[v+1]=_.elements[1],y[v+2]=_.elements[2],y[v+3]=0,y[v+4]=_.elements[3],y[v+5]=_.elements[4],y[v+6]=_.elements[5],y[v+7]=0,y[v+8]=_.elements[6],y[v+9]=_.elements[7],y[v+10]=_.elements[8],y[v+11]=0):ArrayBuffer.isView(_)?y.set(_.subarray(0,y.length-v),v):_.toArray(y,v)}function f(_,y,v,E){let w=_.value,x=y+"_"+v;if(Array.isArray(w)){E[x]===void 0&&(E[x]=[]);let M=E[x],C=!1;for(let T=0;T<w.length;T++)u(w[T],M,T)===!0&&(C=!0);return C}return u(w,E,x)}function u(_,y,v){if(y[v]===void 0)return typeof _=="number"||typeof _=="boolean"?y[v]=_:ArrayBuffer.isView(_)?y[v]=_.slice():y[v]=_.clone(),!0;{let E=y[v];if(typeof _=="number"||typeof _=="boolean"){if(E!==_)return y[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(E.equals(_)===!1)return E.copy(_),!0}}return!1}function m(_){let y=_.uniforms,v=0,E=16;for(let x=0,M=y.length;x<M;x++){let C=Array.isArray(y[x])?y[x]:[y[x]];for(let T=0,P=C.length;T<P;T++){let N=C[T],U=Array.isArray(N.value)?N.value:[N.value],R=Array.isArray(y[x])||Array.isArray(N.value),O=v;for(let z=0,k=U.length;z<k;z++){let B=U[z],V=g(B,R),j=v%E,ie=j%V.boundary,le=j+ie;v+=ie,le!==0&&E-le<V.storage&&(v+=E-le),z===0&&(O=v),v+=V.storage}let G=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new G((v-O)/Float32Array.BYTES_PER_ELEMENT),N.__offset=O}}let w=v%E;return w>0&&(v+=E-w),_.__size=v,_.__cache={},this}function g(_,y){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",_),y===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function b(_){let y=_.target;y.removeEventListener("dispose",b),i.deleteBuffer(a[y.id]),delete a[y.id],delete s[y.id]}function p(){for(let _ in a)i.deleteBuffer(a[_]);a={},s={}}return{bind:r,update:o,dispose:p}}var Tv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function Rv(){return Jn===null&&(Jn=new jn(Tv,16,16,ji,Tt),Jn.name="DFG_LUT",Jn.minFilter=_t,Jn.magFilter=_t,Jn.wrapS=wn,Jn.wrapT=wn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var Fc=class{constructor(e={}){let{canvas:t=bf(),context:n=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=Kt}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;let g=u,b=new Set([nc,tc,ec]),p=new Set([Kt,zn,ts,ba,Qo,$o]),_=new Uint32Array(4),y=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},E=null,w=null,x=[],M=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,P=!1,N=null,U=null,R=null,O=null;this._outputColorSpace=Rt;let G=0,z=0,k=null,B=-1,V=null,j=new bt,ie=new bt,le=null,Y=new We(0),se=0,ve=t.width,Pe=t.height,we=1,ke=null,ft=null,Be=new bt(0,0,ve,Pe),Te=new bt(0,0,ve,Pe),Le=!1,J=new Xn,he=new Ro,de=!1,Ae=!1,me=new Je,Q=new L,ae=new bt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Ge(){return k===null?we:1}let D=n;function Oe(A,H){return t.getContext(A,H)}let He,et,re,rt,Ne,je,I,S,W,oe,ee,pe,ge,$,te,ye,F,ne,Z,Me,be,_e,Ve;try{let A={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qo}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Re,!1),D===null){let H="webgl2";if(D=Oe(H,A),D===null)throw Oe(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(A){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),Ye("WebGLRenderer: "+A.message),A}function nt(){He=new B0(D),He.init(),be=new yv(D,He),et=new R0(D,He,e,be),re=new vv(D,He),et.reversedDepthBuffer&&f&&re.buffers.depth.setReversed(!0),U=D.createFramebuffer(),R=D.createFramebuffer(),O=D.createFramebuffer(),rt=new G0(D),Ne=new sv,je=new _v(D,He,re,Ne,et,be,rt),I=new k0(T),S=new Wm(D),_e=new A0(D,S),W=new z0(D,S,rt,_e),oe=new W0(D,W,S,_e,rt),ne=new V0(D,et,je),te=new I0(Ne),ee=new av(T,I,He,et,_e,te),pe=new Ev(T,Ne),ge=new ov,$=new uv(He),F=new E0(T,I,re,oe,m,c),ye=new xv(T,oe,et),Ve=new Av(D,rt,et,re),Z=new T0(D,He,rt),Me=new H0(D,He,rt),rt.programs=ee.programs,T.capabilities=et,T.extensions=He,T.properties=Ne,T.renderLists=ge,T.shadowMap=ye,T.state=re,T.info=rt}g!==Kt&&(C=new X0(g,t.width,t.height,o,a,s));let ue=new Rh(T,D);this.xr=ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=He.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=He.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(A){A!==void 0&&(we=A,this.setSize(ve,Pe,!1))},this.getSize=function(A){return A.set(ve,Pe)},this.setSize=function(A,H,K=!0){if(ue.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=A,Pe=H,t.width=Math.floor(A*we),t.height=Math.floor(H*we),K===!0&&(t.style.width=A+"px",t.style.height=H+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(ve*we,Pe*we).floor()},this.setDrawingBufferSize=function(A,H,K){ve=A,Pe=H,we=K,t.width=Math.floor(A*K),t.height=Math.floor(H*K),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(g===Kt){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(Be)},this.setViewport=function(A,H,K,X){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,H,K,X),re.viewport(j.copy(Be).multiplyScalar(Ge()).round())},this.getScissor=function(A){return A.copy(Te)},this.setScissor=function(A,H,K,X){A.isVector4?Te.set(A.x,A.y,A.z,A.w):Te.set(A,H,K,X),re.scissor(ie.copy(Te).multiplyScalar(Ge()).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){re.setScissorTest(Le=A)},this.setOpaqueSort=function(A){ke=A},this.setTransparentSort=function(A){ft=A},this.getClearColor=function(A){return A.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,K=!0){let X=0;if(A){let q=!1;if(k!==null){let Ee=k.texture.format;q=b.has(Ee)}if(q){let Ee=k.texture.type,Ue=p.has(Ee),Se=F.getClearColor(),Ce=F.getClearAlpha(),ze=Se.r,$e=Se.g,ct=Se.b;Ue?(_[0]=ze,_[1]=$e,_[2]=ct,_[3]=Ce,D.clearBufferuiv(D.COLOR,0,_)):(y[0]=ze,y[1]=$e,y[2]=ct,y[3]=Ce,D.clearBufferiv(D.COLOR,0,y))}else X|=D.COLOR_BUFFER_BIT}H&&(X|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),F.dispose(),ge.dispose(),$.dispose(),je.dispose(),Ne.dispose(),I.dispose(),oe.dispose(),W.dispose(),_e.dispose(),Ve.dispose(),ee.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",qh),ue.removeEventListener("sessionend",Yh),ea.stop()};function Xe(A){A.preventDefault(),hh("WebGLRenderer: Context Lost."),P=!0}function tt(){hh("WebGLRenderer: Context Restored."),P=!1;let A=rt.autoReset,H=ye.enabled,K=ye.autoUpdate,X=ye.needsUpdate,q=ye.type;nt(),rt.autoReset=A,ye.enabled=H,ye.autoUpdate=K,ye.needsUpdate=X,ye.type=q}function Re(A){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function gt(A){let H=A.target;H.removeEventListener("dispose",gt),zt(H)}function zt(A){wi(A),Ne.remove(A)}function wi(A){let H=Ne.get(A).programs;H!==void 0&&(H.forEach(function(K){ee.releaseProgram(K)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,K,X,q,Ee){H===null&&(H=fe);let Ue=q.isMesh&&q.matrixWorld.determinantAffine()<0,Se=hp(A,H,K,X,q);re.setMaterial(X,Ue);let Ce=K.index,ze=1;if(X.wireframe===!0){if(Ce=W.getWireframeAttribute(K),Ce===void 0)return;ze=2}let $e=K.drawRange,ct=K.attributes.position,De=$e.start*ze,lt=($e.start+$e.count)*ze;Ee!==null&&(De=Math.max(De,Ee.start*ze),lt=Math.min(lt,(Ee.start+Ee.count)*ze)),Ce!==null?(De=Math.max(De,0),lt=Math.min(lt,Ce.count)):ct!=null&&(De=Math.max(De,0),lt=Math.min(lt,ct.count));let Pt=lt-De;if(Pt<0||Pt===1/0)return;_e.setup(q,X,Se,K,Ce);let vt,xt=Z;if(Ce!==null&&(vt=S.get(Ce),xt=Me,xt.setIndex(vt)),q.isMesh)X.wireframe===!0?(re.setLineWidth(X.wireframeLinewidth*Ge()),xt.setMode(D.LINES)):xt.setMode(D.TRIANGLES);else if(q.isLine){let Zt=X.linewidth;Zt===void 0&&(Zt=1),re.setLineWidth(Zt*Ge()),q.isLineSegments?xt.setMode(D.LINES):q.isLineLoop?xt.setMode(D.LINE_LOOP):xt.setMode(D.LINE_STRIP)}else q.isPoints?xt.setMode(D.POINTS):q.isSprite&&xt.setMode(D.TRIANGLES);if(q.isBatchedMesh)if(He.get("WEBGL_multi_draw"))xt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Zt=q._multiDrawStarts,Fe=q._multiDrawCounts,ln=q._multiDrawCount,mt=Ce?S.get(Ce).bytesPerElement:1,ta=Ne.get(X).currentProgram.getUniforms();for(let Qt=0;Qt<ln;Qt++)ta.setValue(D,"_gl_DrawID",Qt),xt.render(Zt[Qt]/mt,Fe[Qt])}else if(q.isInstancedMesh)xt.renderInstances(De,Pt,q.count);else if(K.isInstancedBufferGeometry){let Zt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Fe=Math.min(K.instanceCount,Zt);xt.renderInstances(De,Pt,Fe)}else xt.render(De,Pt)};function Xh(A,H,K,X){N!==null&&A.isNodeMaterial&&N.setObject(X,A),de===!0&&te.setState(A,K,!1),A.transparent===!0&&A.side===Ct&&A.forceSinglePass===!1?(A.side=Yt,A.needsUpdate=!0,ys(A,H,X),A.side=Vi,A.needsUpdate=!0,ys(A,H,X),A.side=Ct):ys(A,H,X)}this.compile=function(A,H,K=null){K===null&&(K=A),N!==null&&N.renderStart(A,H,K),w=$.get(K),w.init(H),M.push(w),K.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),A!==K&&A.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),Ae=this.localClippingEnabled,de=te.init(this.clippingPlanes,Ae),de===!0&&te.setGlobalState(this.clippingPlanes,H),N!==null&&ye.render(w.state.shadowsArray,K,H);let X=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let Ue=0;Ue<Ee.length;Ue++){let Se=Ee[Ue];Xh(Se,K,H,q),X.add(Se)}else Xh(Ee,K,H,q),X.add(Ee)}),w=M.pop(),N!==null&&N.renderEnd(),X},this.compileAsync=function(A,H,K=null){let X=this.compile(A,H,K);return new Promise(q=>{function Ee(){if(X.forEach(function(Ue){let Ce=Ne.get(Ue).currentProgram;(Ce===void 0||Ce.isReady())&&X.delete(Ue)}),X.size===0){q(A);return}setTimeout(Ee,10)}He.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let dl=null;function cp(A){dl&&dl(A)}function qh(){ea.stop()}function Yh(){ea.start()}let ea=new Jf;ea.setAnimationLoop(cp),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(A){dl=A,ue.setAnimationLoop(A),A===null?ea.stop():ea.start()},ue.addEventListener("sessionstart",qh),ue.addEventListener("sessionend",Yh),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(A,H);let K=ue.enabled===!0&&ue.isPresenting===!0,X=C!==null&&(k===null||K)&&C.begin(T,k);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(H),H=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,H,k),w=$.get(A,M.length),w.init(H),w.state.textureUnits=je.getTextureUnits(),M.push(w),me.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?he.setFromArrayCamera(H):J.setFromProjectionMatrix(me,En,H.reversedDepth),Ae=this.localClippingEnabled,de=te.init(this.clippingPlanes,Ae),E=ge.get(A,x.length),E.init(),x.push(E),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){let Ue=T.xr.getDepthSensingMesh();Ue!==null&&fl(Ue,H,-1/0,T.sortObjects)}fl(A,H,0,T.sortObjects),E.finish(),N!==null&&N.updateLights(w.state.lightsArray),T.sortObjects===!0&&E.sort(ke,ft),xe=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,xe&&F.addToRenderList(E,A),this.info.autoReset===!0&&this.info.reset(),de===!0&&te.beginShadows();let q=w.state.shadowsArray;if(ye.render(q,A,H),de===!0&&te.endShadows(),(X&&C.hasRenderPass())===!1){let Ue=E.opaque,Se=E.transmissive;if(w.setupLights(),H.isArrayCamera){let Ce=H.cameras;if(Se.length>0)for(let ze=0,$e=Ce.length;ze<$e;ze++){let ct=Ce[ze];Jh(Ue,Se,A,ct)}xe&&F.render(A);for(let ze=0,$e=Ce.length;ze<$e;ze++){let ct=Ce[ze];Kh(E,A,ct,ct.viewport)}}else Se.length>0&&Jh(Ue,Se,A,H),xe&&F.render(A),Kh(E,A,H)}k!==null&&z===0&&(je.updateMultisampleRenderTarget(k),je.updateRenderTargetMipmap(k)),X&&C.end(T),A.isScene===!0&&A.onAfterRender(T,A,H),_e.resetDefaultState(),B=-1,V=null,M.pop(),M.length>0?(w=M[M.length-1],je.setTextureUnits(w.state.textureUnits),de===!0&&te.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,N!==null&&N.renderEnd()};function fl(A,H,K,X){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){let Ue=H.isArrayCamera?he:J;if(!A.frustumCulled||A.intersectsFrustum(Ue)){X&&ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);let Se=oe.update(A),Ce=A.material;Ce.visible&&E.push(A,Se,Ce,K,ae.z,null,H)}}else if(A.isMesh||A.isLine||A.isPoints){let Ue=H.isArrayCamera?he:J;if(!A.frustumCulled||A.intersectsFrustum(Ue)){let Se=oe.update(A),Ce=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ae.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ae.copy(Se.boundingSphere.center)),ae.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Ce)){let ze=Se.groups;for(let $e=0,ct=ze.length;$e<ct;$e++){let De=ze[$e],lt=Ce[De.materialIndex];lt&&lt.visible&&E.push(A,Se,lt,K,ae.z,De,H)}}else Ce.visible&&E.push(A,Se,Ce,K,ae.z,null,H)}}}let Ee=A.children;for(let Ue=0,Se=Ee.length;Ue<Se;Ue++)fl(Ee[Ue],H,K,X)}function Kh(A,H,K,X){let{opaque:q,transmissive:Ee,transparent:Ue}=A;w.setupLightsView(K),de===!0&&te.setGlobalState(T.clippingPlanes,K),X&&re.viewport(j.copy(X)),q.length>0&&Hr(q,H,K),Ee.length>0&&Hr(Ee,H,K),Ue.length>0&&Hr(Ue,H,K),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Jh(A,H,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){let De=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new It(1,1,{generateMipmaps:!0,type:De?Tt:Kt,minFilter:an,samples:Math.max(4,et.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}let Ee=w.state.transmissionRenderTarget[X.id],Ue=X.viewport||j;Ee.setSize(Ue.z*T.transmissionResolutionScale,Ue.w*T.transmissionResolutionScale);let Se=T.getRenderTarget(),Ce=T.getActiveCubeFace(),ze=T.getActiveMipmapLevel();T.setRenderTarget(Ee),T.getClearColor(Y),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),xe&&F.render(K);let $e=T.toneMapping;T.toneMapping=Kn;let ct=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),de===!0&&te.setGlobalState(T.clippingPlanes,X),Hr(A,K,X),je.updateMultisampleRenderTarget(Ee),je.updateRenderTargetMipmap(Ee),He.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let lt=0,Pt=H.length;lt<Pt;lt++){let vt=H[lt],{object:xt,geometry:Zt,material:Fe,group:ln}=vt;if(Fe.side===Ct&&xt.layers.test(X.layers)){let mt=Fe.side;Fe.side=Yt,Fe.needsUpdate=!0,Zh(xt,K,X,Zt,Fe,ln),Fe.side=mt,Fe.needsUpdate=!0,De=!0}}De===!0&&(je.updateMultisampleRenderTarget(Ee),je.updateRenderTargetMipmap(Ee))}T.setRenderTarget(Se,Ce,ze),T.setClearColor(Y,se),ct!==void 0&&(X.viewport=ct),T.toneMapping=$e}function Hr(A,H,K){let X=H.isScene===!0?H.overrideMaterial:null;for(let q=0,Ee=A.length;q<Ee;q++){let Ue=A[q],{object:Se,geometry:Ce,group:ze}=Ue,$e=Ue.material;$e.allowOverride===!0&&X!==null&&($e=X),Se.layers.test(K.layers)&&Zh(Se,H,K,Ce,$e,ze)}}function Zh(A,H,K,X,q,Ee){N!==null&&q.isNodeMaterial&&N.setObject(A,q),A.onBeforeRender(T,H,K,X,q,Ee),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(T,H,K,X,A,Ee),q.transparent===!0&&q.side===Ct&&q.forceSinglePass===!1?(q.side=Yt,q.needsUpdate=!0,T.renderBufferDirect(K,H,X,q,A,Ee),q.side=Vi,q.needsUpdate=!0,T.renderBufferDirect(K,H,X,q,A,Ee),q.side=Ct):T.renderBufferDirect(K,H,X,q,A,Ee),A.onAfterRender(T,H,K,X,q,Ee)}function Qh(A){let H=0;for(let K of A)K.texture!==null&&H++;return H}function ys(A,H,K){H.isScene!==!0&&(H=fe);let X=Ne.get(A),q=w.state.lights,Ee=w.state.shadowsArray,Ue=q.state.version,Se=ee.getParameters(A,q.state,Ee,H,K,w.state.lightProbeGridArray),Ce=ee.getProgramCacheKey(Se),ze=X.programs;X.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,X.fog=H.fog;let $e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;X.envMap=I.get(A.envMap||X.environment,$e),X.envMapRotation=X.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",gt),ze=new Map,X.programs=ze,X.programVariants=new Map);let ct=ze.get(Ce);if(ct!==void 0){if(X.currentProgram===ct&&X.lightsStateVersion===Ue)return ed(A,Se),ct}else Se.uniforms=ee.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,K,Se),A.onBeforeCompile(Se,T),ct=ee.acquireProgram(Se,Ce),ze.set(Ce,ct),X.uniforms=Se.uniforms;let De=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=te.uniform),ed(A,Se),X.needsLights=fp(A),X.lightsStateVersion=Ue,X.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.sunLights.value=q.state.sun,De.sunLightShadows.value=q.state.sunShadow,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.sunShadowMatrix.value=q.state.sunShadowMatrix,De.sunShadowCascade.value=q.state.sunShadowCascade,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix),X.numLightProbeGrids=Qh(w.state.lightProbeGridArray),X.currentProgram=ct,X.uniformsList=null,ct}function lp(A,H,K,X,q){let Ee=Ne.get(A),Ue=Ee.currentProgram.id+","+X+","+q,Se=Ee.programVariants.get(Ue);return Se===void 0?(Se=ys(A,H,K),Ee.programVariants.set(Ue,Se)):(Ee.currentProgram=Se,Ee.uniformsList=null,Ee.outputColorSpace=X,Ee.toneMapping=q),Se}function $h(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=is.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function ed(A,H){let K=Ne.get(A);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function hp(A,H,K,X,q){H.isScene!==!0&&(H=fe),je.resetTextureUnits();let Ee=H.fog,Ue=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?H.environment:null,Se=k===null?T.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:st.workingColorSpace,Ce=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,ze=I.get(X.envMap||Ue,Ce),$e=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ct=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!K.morphAttributes.position,lt=!!K.morphAttributes.normal,Pt=!!K.morphAttributes.color,vt=Kn;X.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(vt=T.toneMapping);let xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Zt=xt!==void 0?xt.length:0,Fe=Ne.get(X),ln=w.state.lights;if(de===!0&&(Ae===!0||A!==V)){let Et=A===V&&X.id===B;te.setState(X,A,Et)}let mt=!1,ta=!1;X.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==ln.state.version||q.isBatchedMesh&&Fe.batching===!1||!q.isBatchedMesh&&Fe.batching===!0||q.isBatchedMesh&&Fe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Fe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Fe.instancing===!1||!q.isInstancedMesh&&Fe.instancing===!0||q.isSkinnedMesh&&Fe.skinning===!1||!q.isSkinnedMesh&&Fe.skinning===!0||q.isInstancedMesh&&Fe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Fe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Fe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Fe.instancingMorph===!1&&q.morphTexture!==null||Fe.envMap!==ze||X.fog===!0&&Fe.fog!==Ee||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==te.numPlanes||Fe.numIntersection!==te.numIntersection)||Fe.vertexAlphas!==$e||Fe.vertexTangents!==ct||Fe.morphTargets!==De||Fe.morphNormals!==lt||Fe.morphColors!==Pt||Fe.morphTargetsCount!==Zt||Fe.numLightProbeGrids!==Qh(w.state.lightProbeGridArray)?mt=!0:(Fe.outputColorSpace!==Se||Fe.toneMapping!==vt)&&(ta=!0):(mt=!0,Fe.__version=X.version);let Qt=Fe.currentProgram;(mt===!0||ta===!0)&&(Qt=ta===!0?lp(X,H,q,Se,vt):ys(X,H,q),N&&X.isNodeMaterial&&N.onUpdateProgram(X,Qt,Fe));let Gr=!1,Ei=!1,na=!1,ut=Qt.getUniforms(),jt=Fe.uniforms;if(re.useProgram(Qt.program)&&(Gr=!0,Ei=!0,na=!0),X.id!==B&&(B=X.id,Ei=!0),Gr||V!==A){re.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ut.setValue(D,"projectionMatrix",A.projectionMatrix),ut.setValue(D,"viewMatrix",A.matrixWorldInverse);let Ht=ut.map.cameraPosition;Ht!==void 0&&Ht.setValue(D,Q.setFromMatrixPosition(A.matrixWorld)),et.logarithmicDepthBuffer&&ut.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ut.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,Ei=!0,na=!0)}if(Fe.needsLights&&(ln.state.sunShadowMap.length>0&&ut.setValue(D,"sunShadowMap",ln.state.sunShadowMap,je),ln.state.directionalShadowMap.length>0&&ut.setValue(D,"directionalShadowMap",ln.state.directionalShadowMap,je),ln.state.spotShadowMap.length>0&&ut.setValue(D,"spotShadowMap",ln.state.spotShadowMap,je),ln.state.pointShadowMap.length>0&&ut.setValue(D,"pointShadowMap",ln.state.pointShadowMap,je)),q.isSkinnedMesh){ut.setOptional(D,q,"bindMatrix"),ut.setOptional(D,q,"bindMatrixInverse");let Et=q.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ut.setValue(D,"boneTexture",Et.boneTexture,je))}q.isBatchedMesh&&(ut.setOptional(D,q,"batchingTexture"),ut.setValue(D,"batchingTexture",q._matricesTexture,je),ut.setOptional(D,q,"batchingIdTexture"),ut.setValue(D,"batchingIdTexture",q._indirectTexture,je),ut.setOptional(D,q,"batchingColorTexture"),q._colorsTexture!==null&&ut.setValue(D,"batchingColorTexture",q._colorsTexture,je));let Un=K.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&ne.update(q,K,Qt),(Ei||Fe.receiveShadow!==q.receiveShadow)&&(Fe.receiveShadow=q.receiveShadow,ut.setValue(D,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&H.environment!==null&&(jt.envMapIntensity.value=H.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=Rv()),Ei){if(ut.setValue(D,"toneMappingExposure",T.toneMappingExposure),Fe.needsLights&&dp(jt,na),Ee&&X.fog===!0&&pe.refreshFogUniforms(jt,Ee),pe.refreshMaterialUniforms(jt,X,we,Pe,w.state.transmissionRenderTarget[A.id]),Fe.needsLights&&Fe.numLightProbeGrids>0){let Et=v,Ht=0;for(let ii of w.state.lightProbeGridArray)ii.texture!==null&&(Et.textures[Ht]=ii.texture,Et.min[Ht]=ii.boundingBox.min,Et.max[Ht]=ii.boundingBox.max,Et.resolution[Ht]=ii.resolution,Ht++);for(let ii in Et)Et[ii].length=Ht;jt.probesSH.value=Et.textures,jt.probesMin.value=Et.min,jt.probesMax.value=Et.max,jt.probesResolution.value=Et.resolution}is.upload(D,$h(Fe),jt,je)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(is.upload(D,$h(Fe),jt,je),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ut.setValue(D,"center",q.center),ut.setValue(D,"modelViewMatrix",q.modelViewMatrix),ut.setValue(D,"normalMatrix",q.normalMatrix),ut.setValue(D,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let Et=X.uniformsGroups;for(let Ht=0,ii=Et.length;Ht<ii;Ht++){let nd=Et[Ht];Ve.update(nd,Qt),Ve.bind(nd,Qt)}}return Qt}function dp(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function fp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,H,K){let X=Ne.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ne.get(A.texture).__webglTexture=H,Ne.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let K=Ne.get(A);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,K=0){k=A,G=H,z=K;let X=null,q=!1,Ee=!1;if(A){let Se=Ne.get(A);if(Se.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(D.FRAMEBUFFER,Se.__webglFramebuffer),j.copy(A.viewport),ie.copy(A.scissor),le=A.scissorTest,re.viewport(j),re.scissor(ie),re.setScissorTest(le),B=-1;return}else if(Se.__webglFramebuffer===void 0)je.setupRenderTarget(A);else if(Se.__hasExternalTextures)je.rebindTextures(A,Ne.get(A.texture).__webglTexture,Ne.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let $e=A.depthTexture;if(Se.__boundDepthTexture!==$e){if($e!==null&&Ne.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(A)}}let Ce=A.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Ee=!0);let ze=Ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[H])?X=ze[H][K]:X=ze[H],q=!0):A.samples>0&&je.useMultisampledRTT(A)===!1?X=Ne.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?X=ze[K]:X=ze,j.copy(A.viewport),ie.copy(A.scissor),le=A.scissorTest}else j.copy(Be).multiplyScalar(we).floor(),ie.copy(Te).multiplyScalar(we).floor(),le=Le;if(K!==0&&(X=U),re.bindFramebuffer(D.FRAMEBUFFER,X)&&re.drawBuffers(A,X),re.viewport(j),re.scissor(ie),re.setScissorTest(le),q){let Se=Ne.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Se.__webglTexture,K)}else if(Ee){let Se=H;for(let Ce=0;Ce<A.textures.length;Ce++){let ze=Ne.get(A.textures[Ce]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ce,ze.__webglTexture,K,Se)}}else if(A!==null&&K!==0){let Se=Ne.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Se.__webglTexture,K)}B=-1};function td(A){let H=Ne.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=et.textureFormatReadable(A.format),H.__typeReadable=et.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,K,X,q,Ee,Ue,Se=0){if(!(A&&A.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ce=Ce[Ue],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){re.bindFramebuffer(D.FRAMEBUFFER,Ce);try{let ze=A.textures[Se],$e=ze.format,ct=ze.type;A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se);let De=td(ze);if(De.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-X&&K>=0&&K<=A.height-q&&D.readPixels(H,K,X,q,be.convert($e),be.convert(ct),Ee)}finally{let ze=k!==null?Ne.get(k).__webglFramebuffer:null;re.bindFramebuffer(D.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(A,H,K,X,q,Ee,Ue,Se=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ce=Ce[Ue],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(H>=0&&H<=A.width-X&&K>=0&&K<=A.height-q){re.bindFramebuffer(D.FRAMEBUFFER,Ce);let ze=A.textures[Se],$e=ze.format,ct=ze.type;A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se);let De=td(ze);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,lt),D.bufferData(D.PIXEL_PACK_BUFFER,Ee.byteLength,D.STREAM_READ),D.readPixels(H,K,X,q,be.convert($e),be.convert(ct),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Pt=k!==null?Ne.get(k).__webglFramebuffer:null;re.bindFramebuffer(D.FRAMEBUFFER,Pt);let vt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await xf(D,vt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,lt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ee),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(lt),D.deleteSync(vt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,K=0){let X=Math.pow(2,-K),q=Math.floor(A.image.width*X),Ee=Math.floor(A.image.height*X),Ue=H!==null?H.x:0,Se=H!==null?H.y:0;je.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Ue,Se,q,Ee),re.unbindTexture()},this.copyTextureToTexture=function(A,H,K=null,X=null,q=0,Ee=0){let Ue,Se,Ce,ze,$e,ct,De,lt,Pt,vt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(K!==null)Ue=K.max.x-K.min.x,Se=K.max.y-K.min.y,Ce=K.isBox3?K.max.z-K.min.z:1,ze=K.min.x,$e=K.min.y,ct=K.isBox3?K.min.z:0;else{let ut=Math.pow(2,-q);Ue=Math.floor(vt.width*ut),Se=Math.floor(vt.height*ut),A.isDataArrayTexture?Ce=vt.depth:A.isData3DTexture?Ce=Math.floor(vt.depth*ut):Ce=1,ze=0,$e=0,ct=0}X!==null?(De=X.x,lt=X.y,Pt=X.z):(De=0,lt=0,Pt=0);let xt=be.convert(H.format),Zt=be.convert(H.type),Fe;H.isData3DTexture?(je.setTexture3D(H,0),Fe=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(je.setTexture2DArray(H,0),Fe=D.TEXTURE_2D_ARRAY):(je.setTexture2D(H,0),Fe=D.TEXTURE_2D),re.activeTexture(D.TEXTURE0),re.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),re.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),re.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);let ln=re.getParameter(D.UNPACK_ROW_LENGTH),mt=re.getParameter(D.UNPACK_IMAGE_HEIGHT),ta=re.getParameter(D.UNPACK_SKIP_PIXELS),Qt=re.getParameter(D.UNPACK_SKIP_ROWS),Gr=re.getParameter(D.UNPACK_SKIP_IMAGES);re.pixelStorei(D.UNPACK_ROW_LENGTH,vt.width),re.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt.height),re.pixelStorei(D.UNPACK_SKIP_PIXELS,ze),re.pixelStorei(D.UNPACK_SKIP_ROWS,$e),re.pixelStorei(D.UNPACK_SKIP_IMAGES,ct);let Ei=A.isDataArrayTexture||A.isData3DTexture,na=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let ut=Ne.get(A),jt=Ne.get(H),Un=Ne.get(ut.__renderTarget),Et=Ne.get(jt.__renderTarget);re.bindFramebuffer(D.READ_FRAMEBUFFER,Un.__webglFramebuffer),re.bindFramebuffer(D.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Ht=0;Ht<Ce;Ht++)Ei&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.get(A).__webglTexture,q,ct+Ht),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.get(H).__webglTexture,Ee,Pt+Ht)),D.blitFramebuffer(ze,$e,ze+Ue,$e+Se,De,lt,De+Ue,lt+Se,D.DEPTH_BUFFER_BIT,D.NEAREST);re.bindFramebuffer(D.READ_FRAMEBUFFER,null),re.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||Ne.has(A)){let ut=Ne.get(A),jt=Ne.get(H);re.bindFramebuffer(D.READ_FRAMEBUFFER,R),re.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let Un=0;Un<Ce;Un++)Ei?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.__webglTexture,q,ct+Un):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ut.__webglTexture,q),na?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,jt.__webglTexture,Ee,Pt+Un):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jt.__webglTexture,Ee),q!==0?D.blitFramebuffer(ze,$e,ze+Ue,$e+Se,De,lt,De+Ue,lt+Se,D.COLOR_BUFFER_BIT,D.NEAREST):na?D.copyTexSubImage3D(Fe,Ee,De,lt,Pt+Un,ze,$e,Ue,Se):D.copyTexSubImage2D(Fe,Ee,De,lt,ze,$e,Ue,Se);re.bindFramebuffer(D.READ_FRAMEBUFFER,null),re.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else na?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Fe,Ee,De,lt,Pt,Ue,Se,Ce,xt,Zt,vt.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(Fe,Ee,De,lt,Pt,Ue,Se,Ce,xt,vt.data):D.texSubImage3D(Fe,Ee,De,lt,Pt,Ue,Se,Ce,xt,Zt,vt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Ee,De,lt,Ue,Se,xt,Zt,vt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Ee,De,lt,vt.width,vt.height,xt,vt.data):D.texSubImage2D(D.TEXTURE_2D,Ee,De,lt,Ue,Se,xt,Zt,vt);re.pixelStorei(D.UNPACK_ROW_LENGTH,ln),re.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt),re.pixelStorei(D.UNPACK_SKIP_PIXELS,ta),re.pixelStorei(D.UNPACK_SKIP_ROWS,Qt),re.pixelStorei(D.UNPACK_SKIP_IMAGES,Gr),Ee===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&D.generateMipmap(Fe),re.unbindTexture()},this.initRenderTarget=function(A){Ne.get(A).__webglFramebuffer===void 0&&je.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?je.setTextureCube(A,0):A.isData3DTexture?je.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?je.setTexture2DArray(A,0):je.setTexture2D(A,0),re.unbindTexture()},this.resetState=function(){G=0,z=0,k=null,re.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var Bc=class extends sr{constructor(e){super(e),this.type=Tt}parse(e){let r=function(M,C){switch(M){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(C||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(C||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(C||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(C||""))}},h=`
`,d=function(M,C,T){C=C||1024;let N=M.pos,U=-1,R=0,O="",G=String.fromCharCode.apply(null,new Uint16Array(M.subarray(N,N+128)));for(;0>(U=G.indexOf(h))&&R<C&&N<M.byteLength;)O+=G,R+=G.length,N+=128,G=String.fromCharCode.apply(null,new Uint16Array(M.subarray(N,N+128)));return-1<U?(T!==!1&&(M.pos+=R+U+1),O+G.slice(0,U)):!1},f=function(M){let C=/^#\?(\S+)/,T=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},O,G;for((M.pos>=M.byteLength||!(O=d(M)))&&r(1,"no header found"),(G=O.match(C))||r(3,"bad initial token"),R.valid|=1,R.programtype=G[1],R.string+=O+`
`;O=d(M),O!==!1;){if(R.string+=O+`
`,O.charAt(0)==="#"){R.comments+=O+`
`;continue}if((G=O.match(T))&&(R.gamma=parseFloat(G[1])),(G=O.match(P))&&(R.exposure=parseFloat(G[1])),(G=O.match(N))&&(R.valid|=2,R.format=G[1]),(G=O.match(U))&&(R.valid|=4,R.height=parseInt(G[1],10),R.width=parseInt(G[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||r(3,"missing format specifier"),R.valid&4||r(3,"missing image size specifier"),R},u=function(M,C,T){let P=C;if(P<8||P>32767||M[0]!==2||M[1]!==2||M[2]&128)return new Uint8Array(M);P!==(M[2]<<8|M[3])&&r(3,"wrong scanline width");let N=new Uint8Array(4*C*T);N.length||r(4,"unable to allocate buffer space");let U=0,R=0,O=4*P,G=new Uint8Array(4),z=new Uint8Array(O),k=T;for(;k>0&&R<M.byteLength;){R+4>M.byteLength&&r(1),G[0]=M[R++],G[1]=M[R++],G[2]=M[R++],G[3]=M[R++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=P)&&r(3,"bad rgbe scanline format");let B=0,V;for(;B<O&&R<M.byteLength;){V=M[R++];let ie=V>128;if(ie&&(V-=128),(V===0||B+V>O)&&r(3,"bad scanline data"),ie){let le=M[R++];for(let Y=0;Y<V;Y++)z[B++]=le}else z.set(M.subarray(R,R+V),B),B+=V,R+=V}let j=P;for(let ie=0;ie<j;ie++){let le=0;N[U]=z[ie+le],le+=P,N[U+1]=z[ie+le],le+=P,N[U+2]=z[ie+le],le+=P,N[U+3]=z[ie+le],U+=4}k--}return N},m=function(M,C,T,P){let N=M[C+3],U=Math.pow(2,N-128)/255;T[P+0]=M[C+0]*U,T[P+1]=M[C+1]*U,T[P+2]=M[C+2]*U,T[P+3]=1},g=function(M,C,T,P){let N=M[C+3],U=Math.pow(2,N-128)/255;T[P+0]=Li.toHalfFloat(Math.min(M[C+0]*U,65504)),T[P+1]=Li.toHalfFloat(Math.min(M[C+1]*U,65504)),T[P+2]=Li.toHalfFloat(Math.min(M[C+2]*U,65504)),T[P+3]=Li.toHalfFloat(1)},b=new Uint8Array(e);b.pos=0;let p=f(b),_=p.width,y=p.height,v=u(b.subarray(b.pos),_,y),E,w,x;switch(this.type){case Nt:x=v.length/4;let M=new Float32Array(x*4);for(let T=0;T<x;T++)m(v,T*4,M,T*4);E=M,w=Nt;break;case Tt:x=v.length/4;let C=new Uint16Array(x*4);for(let T=0;T<x;T++)g(v,T*4,C,T*4);E=C,w=Tt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:_,height:y,data:E,header:p.string,gamma:p.gamma,exposure:p.exposure,type:w,colorSpace:ca,minFilter:_t,magFilter:_t,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var zc=new Je,Ih=new Je,Ch=new L,Hc=new L,Rn=new L,Nh=[new L,new L,new L,new L],Ph=[new L,new L,new L,new L],rs=[new L,new L,new L,new L,new L,new L,new L,new L],Mi=2,Iv=.1,Gc=class extends Ja{constructor(){super(new gi(-5,5,5,-5,.5,500)),this.isSunLightShadow=!0,this.mapSize.set(1024,1024),this._cameras=[],this._matrices=[],this._frustums=[],this._cascadeSplits=new Array(Mi+1).fill(0),this._cascadeData=[],this._viewportCount=Mi,this._frameExtents.set(2,1);for(let e=0;e<Mi;e++)this._cameras.push(new gi),this._matrices.push(new Je),this._frustums.push(new Xn),this._cascadeData.push(new bt);for(;this._viewports.length<Mi;)this._viewports.push(new bt)}getCamera(e=0){return this._cameras[e]}getMatrix(e=0){return this._matrices[e]}getFrustum(e=0){return this._frustums[e]}updateMatrices(e,t){if(t===void 0)return;let n=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.x),a=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.y);for(let b=0;b<Mi;b++)this._viewports[b].set(b+n,a,1-2*n,1-2*a);let s=this.mapSize.x*(1-2*n),r=this.mapSize.y*(1-2*a),o=Math.min(s,r),c=this.camera,l=t.near,h=Math.max(l+1e-6,Math.min(c.far,t.far)),d=this._cascadeSplits;d[0]=l;for(let b=1;b<Mi;b++){let p=b/Mi,_=l+(h-l)*p,y=l>0?l*Math.pow(h/l,p):_;d[b]=(_+y)*.5}d[Mi]=h,Ch.setFromMatrixPosition(e.matrixWorld).negate().normalize(),Hc.set(0,1,0),Math.abs(Hc.dot(Ch))>.99&&Hc.set(0,0,1),zc.lookAt(Rn.set(0,0,0),Ch,Hc),Ih.copy(zc).transpose().multiply(t.matrixWorld);let f=t.reversedDepth?1:t.coordinateSystem===Pi?0:-1,u=t.projectionMatrixInverse,m=-1/0;for(let b=0;b<4;b++){let p=b===0||b===1?1:-1,_=b===0||b===3?1:-1,y=Nh[b].set(p,_,f).applyMatrix4(u),v=Ph[b];t.isPerspectiveCamera===!0?v.copy(y).multiplyScalar(h/l):v.set(y.x,y.y,-h),y.applyMatrix4(Ih),v.applyMatrix4(Ih),m=Math.max(m,y.z,v.z)}m+=h;let g=c.near;for(let b=0;b<Mi;b++){let p=b===0?d[0]:this._cascadeData[b-1].z,_=d[b+1],y=_-Iv*(_-d[b]);this._cascadeData[b].set(b===0?-1e10:p,_,y,0);let v=(p-l)/(h-l),E=(_-l)/(h-l);Rn.set(0,0,0);for(let T=0;T<4;T++)rs[T*2].lerpVectors(Nh[T],Ph[T],v),rs[T*2+1].lerpVectors(Nh[T],Ph[T],E),Rn.add(rs[T*2]).add(rs[T*2+1]);Rn.multiplyScalar(1/8);let w=0,x=1/0;for(let T=0;T<8;T++)w=Math.max(w,rs[T].distanceToSquared(Rn)),x=Math.min(x,rs[T].z);let M=Math.sqrt(w);if(o>1){M/=1-1/o;let T=2*M/s,P=2*M/r;Rn.x=Math.round(Rn.x/T)*T,Rn.y=Math.round(Rn.y/P)*P}Rn.z=m+g,Rn.applyMatrix4(zc);let C=this._cameras[b];C.position.copy(Rn),C.quaternion.setFromRotationMatrix(zc),C.left=-M,C.right=M,C.top=M,C.bottom=-M,C.near=g,C.far=m-x+2*g,C.coordinateSystem=c.coordinateSystem,C._reversedDepth=c.reversedDepth,C.updateProjectionMatrix(),C.updateMatrixWorld(),this._updateMatrix(C,this._matrices[b],this._frustums[b],this._viewports[b])}}};var Vc=class extends Ka{constructor(e,t){super(e,t),this.isSunLight=!0,this.type="SunLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.shadow=new Gc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t}};var Xi=[0,320,-1080],Qn={pos:[0,41.2,40],look:[6,120,-1e3],fov:52},Wc=[[2,30],[9,8],[-4,-18],[12,-44],[4,-72],[20,-104],[24,-135],[32,-175],[28,-228],[38,-300],[46,-380],[42,-460],[48,-528],[54,-560],[98,-560],[108,-598],[96,-676],[72,-756],[46,-846]];var ou=[[172,-836],[132,-762],[92,-684],[77,-604],[76,-560],[81,-484],[96,-404],[104,-326],[98,-252],[112,-182],[162,-118],[262,-56],[420,-10]],$n=[-30,-44],jc=7.5,cu=[[-74,-286],[-63,-252],[-53,-216],[-41,-186],[-23,-162],[-4,-150],[12,-150],[40,-160],[70,-174],[100,-184]],rn={x:12,z:-150,r:12,level:.35},In={x:-102,z:-190,rx:92,rz:108,step:1.45},fn={x:-88,y:25,z:-304,r:26},Jt={x:28,y:1.2,z:-158,r:44},Mt={x:76,y:2.2,z:-560,span:44,width:5.2},Lh={x:186,z:-860,top:66,bottom:-30},mn={x:142,y:8,z:-252};function os(i){let e=[],t=0;for(let o=0;o<i.length-1;o++){let[c,l]=i[o],[h,d]=i[o+1],f=h-c,u=d-l,m=Math.hypot(f,u);e.push({ax:c,az:l,dx:f,dz:u,len:m,s0:t}),t+=m}let n=Math.min(...i.map(o=>o[0])),a=Math.max(...i.map(o=>o[0])),s=Math.min(...i.map(o=>o[1])),r=Math.max(...i.map(o=>o[1]));return{pts:i,segs:e,length:t,minX:n,maxX:a,minZ:s,maxZ:r,closest(o,c,l){let h=1e18,d=0,f=0,u=0;for(let m=0;m<e.length;m++){let g=e[m],b=((o-g.ax)*g.dx+(c-g.az)*g.dz)/(g.len*g.len);b=b<0?0:b>1?1:b;let p=g.ax+g.dx*b-o,_=g.az+g.dz*b-c,y=p*p+_*_;y<h&&(h=y,d=g.s0+g.len*b,f=m,u=b)}return l[0]=Math.sqrt(h),l[1]=d,l[2]=f,l[3]=u,l},at(o){o=Math.max(0,Math.min(t,o));let c=0;for(;c<e.length-1&&e[c].s0+e[c].len<o;)c++;let l=e[c],h=(o-l.s0)/l.len;return{x:l.ax+l.dx*h,z:l.az+l.dz*h,tx:l.dx/l.len,tz:l.dz/l.len,seg:c}}}}function cs(i,e=4){let t=[],n=a=>i[Math.max(0,Math.min(i.length-1,a))];for(let a=0;a<i.length-1;a++){let s=n(a-1),r=n(a),o=n(a+1),c=n(a+2),l=Math.hypot(o[0]-r[0],o[1]-r[1]),h=Math.max(1,Math.ceil(l/e));for(let d=0;d<h;d++){let f=d/h,u=f*f,m=u*f,g=(b,p,_,y)=>.5*(2*p+(-b+_)*f+(2*b-5*p+4*_-y)*u+(-b+3*p-3*_+y)*m);t.push([g(s[0],r[0],o[0],c[0]),g(s[1],r[1],o[1],c[1])])}}return t.push(i[i.length-1].slice()),t}function Cv(i,e){let t=wr.degToRad(i),n=wr.degToRad(e);return new L(Math.sin(t)*Math.cos(n),Math.sin(n),-Math.cos(t)*Math.cos(n)).normalize()}var Nv=122,Pv=33,qi=Cv(Nv,Pv),lu=qi.clone(),ls=new We(1,.87,.7);var L1={ref:{pos:[Qn.pos[0],2,Qn.pos[2]],ground:!0,look:Qn.look,fov:Qn.fov},skull:{pos:[30,210,-520],look:[Xi[0],Xi[1]-10,Xi[2]],fov:48},mouth:{pos:[60,250,-860],look:[0,260,-1080],fov:55},left:{pos:[-40,70,-90],look:[-210,120,-280],fov:55},terrace:{pos:[-10,30,-70],look:[In.x,8,In.z-40],fov:55},gate:{pos:[-30,30,-230],look:[fn.x,fn.y+10,fn.z],fov:50},village:{pos:[0,14,-105],look:[Jt.x,3,Jt.z],fov:55},bridge:{pos:[20,18,-500],look:[Mt.x,Mt.y-8,Mt.z],fov:55},temple:{pos:[80,34,-190],look:[142,14,-252],fov:55},ledge:{pos:[-95,135,-300],look:[-200,116,-262],fov:55},ring:{pos:[-6,9,-30],look:[20,1,-75],fov:55},aerial:{pos:[420,520,380],look:[-40,60,-560],fov:50},back:{pos:[60,30,-760],look:[0,60,40],fov:60}};var hs=i=>i.toFixed(5),hu=`
	const vec3 SUN_DIR = vec3( ${hs(qi.x)}, ${hs(qi.y)}, ${hs(qi.z)} );
	const vec3 SUN_COLOR = vec3( ${hs(ls.r)}, ${hs(ls.g)}, ${hs(ls.b)} );
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
`,qc=`
	uniform vec4 uAtmos;
	#define ATM uAtmos
	${hu}
`,Xc={haze:24e-5,mist:9e-4,bright:1,mistH:45},Ir={uAtmos:{value:new bt(Xc.haze,Xc.mist,Xc.bright,Xc.mistH)}};function du(){let i=Ir.uAtmos.value;return new ks(new We(i.x*1e3,i.y*1e3,i.z),i.w,1e9)}Qe.fog_pars_vertex=`
	#ifdef USE_FOG
		varying vec3 vFogWorldPos;
	#endif
`;Qe.fog_vertex=`
	#ifdef USE_FOG
		vFogWorldPos = cameraPosition + transpose( mat3( viewMatrix ) ) * mvPosition.xyz;
	#endif
`;Qe.fog_pars_fragment=`
	#ifdef USE_FOG
		uniform vec3 fogColor;
		uniform float fogNear;
		uniform float fogFar;
		varying vec3 vFogWorldPos;
		#define ATM vec4( fogColor.x * 0.001, fogColor.y * 0.001, fogColor.z, fogNear )
		${hu}
	#endif
`;Qe.fog_fragment=`
	#ifdef USE_FOG
		gl_FragColor.rgb = atmosApply( gl_FragColor.rgb, vFogWorldPos );
	#endif
`;function Lv(){if(location.hostname==="htmlpreview.github.io"){let i=decodeURIComponent(location.search).match(/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.*\/)[^/]*$/);if(i)return`https://raw.githubusercontent.com/${i[1]}/${i[2]}/${i[3]}/${i[4]}`}return"./baihuling/"}var Uv=Lv(),Cr=i=>Uv+"assets/"+i;function Dv(){let i=location.search,e=i.lastIndexOf(".html?");return e>=0?i.slice(e+6):i}var O1=new URLSearchParams(Dv());function fu(i,e){let{data:t,width:n,height:a}=e.image,s=0,r=0;for(let u=0;u<n*a;u++){let m=t[u*4]+t[u*4+1]+t[u*4+2];m>s&&(s=m,r=u)}let o=(r%n+.5)/n;for(let u=0;u<t.length;u++)(u&3)!==3&&(t[u]=Math.min(t[u],5));e.needsUpdate=!0,e.minFilter=_t,e.magFilter=_t,e.generateMipmaps=!1,i.colorSpace=Rt,i.minFilter=an,i.anisotropy=4,i.wrapS=An;let c=Math.atan2(qi.z,qi.x)/(2*Math.PI)+.5,l={uLdr:{value:i},uHdr:{value:e},uRot:{value:o-c},uGain:{value:1.55},uEnvMode:{value:0},uSunGain:{value:1},uAtmos:Ir.uAtmos},h=new St({name:"Sky",side:Yt,depthWrite:!1,depthTest:!1,uniforms:l,vertexShader:`
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
			${qc}
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
		`}),d=new dt(new Tn(1,64,32),h);d.frustumCulled=!1,d.renderOrder=-100,d.scale.setScalar(9e3),d.onBeforeRender=(u,m,g)=>d.position.copy(g.position);function f(u){let m=new la,g=h.clone();g.uniforms={...l,uEnvMode:{value:1}};let b=new dt(new Tn(1,64,32),g);b.scale.setScalar(100),m.add(b);let p=new as(u),_=p.fromScene(m,0,.1,1e3);return p.dispose(),g.dispose(),_.texture}return{mesh:d,uniforms:l,buildEnv:f}}var ds={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var yn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Fv=new gi(-1,1,1,-1,0,1),Uh=class extends ht{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},Ov=new Uh,Yi=class{constructor(e){this._mesh=new dt(Ov,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ki=class extends yn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=yi.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Yi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Nr=class extends yn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let a=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),s.buffers.stencil.setFunc(a.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(a.EQUAL,1,4294967295),s.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),s.buffers.stencil.setLocked(!0)}},Yc=class extends yn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Kc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ce);this._width=n.width,this._height=n.height,t=new It(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ki(ds),this.copyPass.material.blending=xi,this.timer=new hr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let a=0,s=this.passes.length;a<s;a++){let r=this.passes[a];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Nr!==void 0&&(r instanceof Nr?n=!0:r instanceof Yc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(n,a),this.renderTarget2.setSize(n,a);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Jc=class extends yn{constructor(e,t,n=null,a=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=a,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new We}render(e,t,n){let a=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=a}};var uu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var fs=class i extends yn{constructor(e,t=1,n,a){super(),this.strength=t,this.radius=n,this.threshold=a,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new We(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new It(s,r,{type:Tt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new It(s,r,{type:Tt,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new It(s,r,{type:Tt,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}let o=uu;this.highPassUniforms=yi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=yi.clone(ds.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:ds.vertexShader,fragmentShader:ds.fragmentShader,premultipliedAlpha:!0,blending:Wi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new We,this._oldClearAlpha=1,this._basic=new Fi,this._fsQuad=new Yi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(n,a);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,a),this.renderTargetsVertical[s].setSize(n,a),this.separableBlurMaterials[s].uniforms.invSize.value=new ce(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2)}render(e,t,n,a,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let a=[],s=[];for(let r=1;r<e;r+=2){let o=t[r],c=r+1<e?t[r+1]:0,l=o+c;a.push((r*o+(r+1)*c)/l),s.push(l)}return new St({defines:{KERNEL_PAIRS:a.length},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:a},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};fs.BlurDirectionX=new ce(1,0);fs.BlurDirectionY=new ce(0,1);var Pr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Zc=class extends yn{constructor(){super(),this.isOutputPass=!0,this.uniforms=yi.clone(Pr.uniforms),this.material=new qa({name:Pr.name,uniforms:this.uniforms,vertexShader:Pr.vertexShader,fragmentShader:Pr.fragmentShader}),this._fsQuad=new Yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===fr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ur?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===mr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===br?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===pr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ei=`
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
`,Dh=`
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
`;var Fh=`
	varying vec2 vUv;
	void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
`,kv={name:"Sanitize",uniforms:{tDiffuse:{value:null}},vertexShader:Fh,fragmentShader:`
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		bool bad( float x ) { return ( floatBitsToUint( x ) & 0x7f800000u ) == 0x7f800000u; }
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb;
			if ( bad( c.r ) || bad( c.g ) || bad( c.b ) ) c = vec3( 0.0 );
			gl_FragColor = vec4( clamp( c, 0.0, 200.0 ), 1.0 );
		}
	`},Bv={name:"Grade",uniforms:{tDiffuse:{value:null},uExposure:{value:1},uContrast:{value:1.08},uSat:{value:1.1},uWarm:{value:1}},vertexShader:Fh,fragmentShader:`
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
	`},zv={name:"Final",uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new ce(1,1)},uFade:{value:1},uVignette:{value:1}},vertexShader:Fh,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform float uTime, uFade, uVignette;
		uniform vec2 uRes;
		varying vec2 vUv;
		${ei}
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
	`};function pu(i,e,t,n){let a=i.getDrawingBufferSize(new ce),s=new Bn(a.x,a.y);s.type=Nt;let r=new It(a.x,a.y,{type:Tt,samples:n.msaa,depthTexture:s}),o=new Kc(i,r),c=new Jc(e,t);o.addPass(c),o.addPass(new Ki(kv));let l=[],h=new fs(new ce(a.x/2,a.y/2),.14,.5,3),d=new Ki(Bv),f=new Zc,u=new Ki(zv);return o.addPass(h),o.addPass(d),o.addPass(f),o.addPass(u),{composer:o,bloom:h,grade:d,final:u,target:r,depthTexture:s,insertAfterRender(m){o.insertPass(m,1+l.length),l.push(m)},setSize(m,g,b){o.setPixelRatio(b),o.setSize(m,g),u.uniforms.uRes.value.set(m*b,g*b);for(let p of l)p.setSize?.(m*b,g*b)},render(m){u.uniforms.uTime.value+=m,o.render(m)}}}function mu(i,e=!0,t=!0,n=8){return e&&(i.colorSpace=Rt),t&&(i.wrapS=i.wrapT=An),i.anisotropy=n,i}var Qc=`
	varying vec3 vWPos;
	varying vec3 vWNor;
`,bu=`
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
`,gu=`
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
`;function xu(i,e={}){let t=new qt({color:16777215,roughness:.86,metalness:0,envMapIntensity:e.env??1});return t.onBeforeCompile=n=>{Object.assign(n.uniforms,{tCliff:{value:i.cliff_diff},tCliffN:{value:i.cliff_nor},tBone:{value:i.bone_diff},tBoneN:{value:i.bone_nor},tGrass:{value:i.grass_diff}}),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
				attribute vec4 aux;
				varying vec4 vAux;
				${Qc}`).replace("#include <fog_vertex>",`#include <fog_vertex>
				${bu}
				vAux = aux;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
				uniform sampler2D tCliff, tCliffN, tBone, tBoneN, tGrass;
				varying vec4 vAux;
				${Qc}
				${ei}
				${Dh}
				${gu}
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
			}`)},t.customProgramCacheKey=()=>"rock-v1",t}function vu(i,e,t={}){let n=new qt({color:16777215,roughness:.92,metalness:0,envMapIntensity:.9});return n.onBeforeCompile=a=>{Object.assign(a.uniforms,{tGrass:{value:i.grass_diff},tGrassN:{value:i.grass_nor},tForest:{value:i.forest_diff},tForestN:{value:i.forest_nor},tTrail:{value:i.trail_diff},tTrailN:{value:i.trail_nor},tCliff:{value:i.cliff_diff},tCliffN:{value:i.cliff_nor},tMask:{value:e.mask},tNorm:{value:e.normal},uMapRect:{value:new bt(e.x0,e.z0,1/e.w,1/e.d)},uTime:t.time||{value:0}}),a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
				${Qc}`).replace("#include <fog_vertex>",`#include <fog_vertex>
				${bu}`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
				uniform sampler2D tGrass, tGrassN, tForest, tForestN, tTrail, tTrailN, tCliff, tCliffN, tMask, tNorm;
				uniform vec4 uMapRect;
				uniform float uTime;
				${Qc}
				${ei}
				${Dh}
				${gu}
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
					float idx = floor( p.y / ${In.step.toFixed(4)} + 0.02 );
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
			}`)},n.customProgramCacheKey=()=>"terrain-v1",n}var _u='(()=>{function Xa(d){let c=d>>>0;return function(){c=c+1831565813|0;let b=Math.imul(c^c>>>15,1|c);return b=b+Math.imul(b^b>>>7,61|b)^b,((b^b>>>14)>>>0)/4294967296}}var ga=new Uint8Array(512),Na=new Uint8Array(512);(function(){let c=Xa(20261107),b=new Uint8Array(256);for(let f=0;f<256;f++)b[f]=f;for(let f=255;f>0;f--){let e=Math.floor(c()*(f+1)),a=b[f];b[f]=b[e],b[e]=a}for(let f=0;f<512;f++)ga[f]=b[f&255],Na[f]=ga[f]%12})();var Q=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),Ub=.5*(Math.sqrt(3)-1),Ja=(3-Math.sqrt(3))/6,Rb=1/3,ja=1/6;function K(d,c){let b=(d+c)*Ub,f=Math.floor(d+b),e=Math.floor(c+b),a=(f+e)*Ja,h=d-(f-a),n=c-(e-a),g,r;h>n?(g=1,r=0):(g=0,r=1);let M=h-g+Ja,i=n-r+Ja,y=h-1+2*Ja,I=n-1+2*Ja,A=f&255,w=e&255,R=0,Y=.5-h*h-n*n;if(Y>0){let t=Na[A+ga[w]]*3;Y*=Y,R+=Y*Y*(Q[t]*h+Q[t+1]*n)}let S=.5-M*M-i*i;if(S>0){let t=Na[A+g+ga[w+r]]*3;S*=S,R+=S*S*(Q[t]*M+Q[t+1]*i)}let q=.5-y*y-I*I;if(q>0){let t=Na[A+1+ga[w+1]]*3;q*=q,R+=q*q*(Q[t]*y+Q[t+1]*I)}return 70*R}function Ra(d,c,b){let f=(d+c+b)*Rb,e=Math.floor(d+f),a=Math.floor(c+f),h=Math.floor(b+f),n=(e+a+h)*ja,g=d-(e-n),r=c-(a-n),M=b-(h-n),i,y,I,A,w,R;g>=r?r>=M?(i=1,y=0,I=0,A=1,w=1,R=0):g>=M?(i=1,y=0,I=0,A=1,w=0,R=1):(i=0,y=0,I=1,A=1,w=0,R=1):r<M?(i=0,y=0,I=1,A=0,w=1,R=1):g<M?(i=0,y=1,I=0,A=0,w=1,R=1):(i=0,y=1,I=0,A=1,w=1,R=0);let Y=g-i+ja,S=r-y+ja,q=M-I+ja,t=g-A+2*ja,m=r-w+2*ja,l=M-R+2*ja,j=g-1+3*ja,k=r-1+3*ja,o=M-1+3*ja,x=e&255,O=a&255,z=h&255,N=0,u=.6-g*g-r*r-M*M;if(u>0){let E=Na[x+ga[O+ga[z]]]*3;u*=u,N+=u*u*(Q[E]*g+Q[E+1]*r+Q[E+2]*M)}let B=.6-Y*Y-S*S-q*q;if(B>0){let E=Na[x+i+ga[O+y+ga[z+I]]]*3;B*=B,N+=B*B*(Q[E]*Y+Q[E+1]*S+Q[E+2]*q)}let H=.6-t*t-m*m-l*l;if(H>0){let E=Na[x+A+ga[O+w+ga[z+R]]]*3;H*=H,N+=H*H*(Q[E]*t+Q[E+1]*m+Q[E+2]*l)}let U=.6-j*j-k*k-o*o;if(U>0){let E=Na[x+1+ga[O+1+ga[z+1]]]*3;U*=U,N+=U*U*(Q[E]*j+Q[E+1]*k+Q[E+2]*o)}return 32*N}function Ea(d,c,b=5,f=2.03,e=.5){let a=0,h=1,n=0;for(let g=0;g<b;g++){a+=h*K(d,c),n+=h;let r=d*.8-c*.6,M=d*.6+c*.8;d=r*f+13.7,c=M*f+7.1,h*=e}return a/n}function eb(d,c,b=6,f=2,e=.5){let a=0,h=1,n=1,g=0;for(let r=0;r<b;r++){let M=1-Math.abs(K(d,c));M*=M,M*=n,n=Math.min(1,Math.max(0,M*1.6)),a+=h*M,g+=h;let i=d*.8-c*.6,y=d*.6+c*.8;d=i*f+3.1,c=y*f+17.9,h*=e}return a/g}function Va(d,c,b,f=4,e=2.07,a=.5){let h=0,n=1,g=0;for(let r=0;r<f;r++)h+=n*Ra(d,c,b),g+=n,d=d*e+5.3,c=c*e+11.7,b=b*e+2.9,n*=a;return h/g}var Aa=(d,c,b)=>d<c?c:d>b?b:d;function v(d,c,b){let f=Aa((b-d)/(c-d),0,1);return f*f*(3-2*f)}var la=(d,c,b)=>d+(c-d)*b;function Z(d,c,b){let f=Aa(.5+.5*(c-d)/b,0,1);return c+(d-c)*f-b*f*(1-f)}function aa(d,c,b){return-Z(-d,-c,b)}var hb=[0,320,-1080];var fb=[[2,30],[9,8],[-4,-18],[12,-44],[4,-72],[20,-104],[24,-135],[32,-175],[28,-228],[38,-300],[46,-380],[42,-460],[48,-528],[54,-560],[98,-560],[108,-598],[96,-676],[72,-756],[46,-846]];var tb=[[172,-836],[132,-762],[92,-684],[77,-604],[76,-560],[81,-484],[96,-404],[104,-326],[98,-252],[112,-182],[162,-118],[262,-56],[420,-10]],$a=[-30,-44],va=7.5,gb=[[-74,-286],[-63,-252],[-53,-216],[-41,-186],[-23,-162],[-4,-150],[12,-150],[40,-160],[70,-174],[100,-184]],ra={x:12,z:-150,r:12,level:.35},wa={x:-102,z:-190,rx:92,rz:108,step:1.45},ma={x:-88,y:25,z:-304,r:26},Ia={x:28,y:1.2,z:-158,r:44},ea={x:76,y:2.2,z:-560,span:44,width:5.2};var xa={x:142,y:8,z:-252};function Wa(d){let c=[],b=0;for(let n=0;n<d.length-1;n++){let[g,r]=d[n],[M,i]=d[n+1],y=M-g,I=i-r,A=Math.hypot(y,I);c.push({ax:g,az:r,dx:y,dz:I,len:A,s0:b}),b+=A}let f=Math.min(...d.map(n=>n[0])),e=Math.max(...d.map(n=>n[0])),a=Math.min(...d.map(n=>n[1])),h=Math.max(...d.map(n=>n[1]));return{pts:d,segs:c,length:b,minX:f,maxX:e,minZ:a,maxZ:h,closest(n,g,r){let M=1e18,i=0,y=0,I=0;for(let A=0;A<c.length;A++){let w=c[A],R=((n-w.ax)*w.dx+(g-w.az)*w.dz)/(w.len*w.len);R=R<0?0:R>1?1:R;let Y=w.ax+w.dx*R-n,S=w.az+w.dz*R-g,q=Y*Y+S*S;q<M&&(M=q,i=w.s0+w.len*R,y=A,I=R)}return r[0]=Math.sqrt(M),r[1]=i,r[2]=y,r[3]=I,r},at(n){n=Math.max(0,Math.min(b,n));let g=0;for(;g<c.length-1&&c[g].s0+c[g].len<n;)g++;let r=c[g],M=(n-r.s0)/r.len;return{x:r.ax+r.dx*M,z:r.az+r.dz*M,tx:r.dx/r.len,tz:r.dz/r.len,seg:g}}}}function Ta(d,c=4){let b=[],f=e=>d[Math.max(0,Math.min(d.length-1,e))];for(let e=0;e<d.length-1;e++){let a=f(e-1),h=f(e),n=f(e+1),g=f(e+2),r=Math.hypot(n[0]-h[0],n[1]-h[1]),M=Math.max(1,Math.ceil(r/c));for(let i=0;i<M;i++){let y=i/M,I=y*y,A=I*y,w=(R,Y,S,q)=>.5*(2*Y+(-R+S)*y+(2*R-5*Y+4*S-q)*I+(-R+3*Y-3*S+q)*A);b.push([w(a[0],h[0],n[0],g[0]),w(a[1],h[1],n[1],g[1])])}}return b.push(d[d.length-1].slice()),b}var Ma=Wa(Ta(fb,3)),ia=Wa(Ta(tb,6)),za=Wa(Ta(gb,3));var $=[0,0,0,0];function qa(d,c){let b=1.3*Ea(d/170,c/170,3)+.55*K(d/37,c/41);b+=78*v(-730,-1060,c)*(.85+.15*K(d/90,3.1));let f=d+26*Math.sin(c/112)+14*K(c/61,1.7);b+=64*v(-148,-285,f)*(.8+.2*K(d/70,c/70));let e=d-34*Math.sin(c/150+1.3);b+=150*v(172,480,e)*(.72+.28*Ea(d/240,c/240,3));let a=(d+8)/94,h=(c-58)/64;b+=41.5*Math.exp(-(a*a+h*h));let n=(c-82)/64;b+=36*Math.exp(-n*n)*v(0,-190,d),b+=3*Ea(d/28,c/28,3)*Math.exp(-(a*a+h*h)*.5);let g=Math.max(0,Math.abs(d-30)-420),r=Math.max(0,-c-1220),M=Math.max(0,c-320),i=Math.hypot(g,r+M*.7);if(i>0){let y=v(0,1500,i);b+=y*(150+640*eb(d/1300+7.3,c/1300-2.1,7))+y*y*160}return b}function nb(d,c){let b=1.7+.168*(-d-8)+.064*(-c-150);return b+=5.5*K(d/96+3.1,c/96)+1.4*K(d/37,c/33),Math.max(b,.9)}function lb(d,c){let b=(d-wa.x)/wa.rx,f=(c-wa.z)/wa.rz,e=Math.hypot(b,f)+.12*K(d/52,c/52);return v(1,.84,e)}function Eb(d,c){let f=nb(d,c)/wa.step,e=Math.floor(f),a=f-e,h=wa.step*(e+v(.86,1,a));return h+=.24*v(0,.025,a)*(1-v(.035,.075,a)),h}function vb(d,c){let b=(d+112)/168,f=(c+236)/186;return v(1.25,.9,Math.hypot(b,f)+.1*K(d/70,c/70))}function rb(d,c){let b=qa(d,c),f=vb(d,c);f>0&&(b=la(b,Math.max(b,nb(d,c)-.6),f));let e=lb(d,c);e>0&&(b=la(b,Eb(d,c),e));let a=Math.hypot(d-ma.x,c-ma.z);a<ma.r+22&&(b=la(b,ma.y,v(ma.r+22,ma.r,a)));let h=Math.hypot((d-Ia.x)*.9,c-Ia.z);h<Ia.r+30&&(b=la(b,Ia.y+.35*K(d/13,c/13),v(Ia.r+30,Ia.r-12,h)));let n=Math.hypot(d-ra.x,c-ra.z);if(n<ra.r+6&&(b=Math.min(b,la(ra.level-1.6,b,v(ra.r-5,ra.r+6,n)))),d>ia.minX-90&&d<ia.maxX+90&&c>ia.minZ-90&&c<ia.maxZ+90){ia.closest(d,c,$);let g=$[0],r=$[1]/ia.length,M=la($a[0],$a[1],r),i=va+14*v(.08,0,r)+1.5*K($[1]/30,.5),y=M+Math.max(0,g-i)*(2.5+.6*K($[1]/40,g/20))+1.2*K(d/9,c/9)*v(i,i+6,g);b=Math.min(b,y)}if(d>za.minX-6&&d<za.maxX+6&&c>za.minZ-6&&c<za.maxZ+6){za.closest(d,c,$);let g=$[0];g<2.4&&(b-=.6*(1-v(.7,2.2,g)))}return b}var Ca=2,ua=(()=>{let d=Math.ceil(Ma.length/Ca)+1,c=new Float32Array(d),b=new Uint8Array(d);for(let a=0;a<d;a++){let h=Ma.at(a*Ca);c[a]=rb(h.x,h.z),Math.abs(h.z-ea.z)<4&&h.x>ea.x-ea.span/2-6&&h.x<ea.x+ea.span/2+6&&(b[a]=1)}for(let a=0;a<d;a++){let h=Ma.at(a*Ca),n=Math.abs(h.x-ea.x)-ea.span/2;Math.abs(h.z-ea.z)<30&&n<18&&(c[a]=la(c[a],ea.y-.15,v(18,4,n)))}let f=new Float32Array(d),e=4;for(let a=0;a<d;a++){let h=0,n=0;for(let g=-e;g<=e;g++){let r=Math.max(0,Math.min(d-1,a+g)),M=e+1-Math.abs(g);h+=c[r]*M,n+=M}f[a]=h/n}return{h:f,onBridge:b}})();function zb(d){let c=d/Ca,b=Math.floor(c),f=c-b,e=ua.h[Math.min(b,ua.h.length-1)],a=ua.h[Math.min(b+1,ua.h.length-1)];return e+(a-e)*f}function Sa(d,c){let b=rb(d,c);if(d>Ma.minX-6&&d<Ma.maxX+6&&c>Ma.minZ-6&&c<Ma.maxZ+6){Ma.closest(d,c,$);let f=$[0];if(f<3.4){let e=Math.round($[1]/Ca);ua.onBridge[Math.min(e,ua.onBridge.length-1)]||(b=la(b,zb($[1])-.1,v(3.4,1.7,f)))}}return b}function mb(d,c,b){b[0]=0,b[1]=0,b[2]=0,b[3]=0,Ma.closest(d,c,$);let f=Math.round($[1]/Ca);ua.onBridge[Math.min(f,ua.onBridge.length-1)]||(b[0]=1-v(1.1,2.4,$[0]+.5*K(d/3,c/3))),ia.closest(d,c,$);let e=$[0],a=1-v(va-1,va+2,e);za.closest(d,c,$);let h=$[0];a=Math.max(a,1-v(.8,1.4,h));let n=Math.hypot(d-ra.x,c-ra.z);a=Math.max(a,1-v(ra.r-2,ra.r+.5,n)),b[1]=a,b[2]=lb(d,c);let g=v(-.15,.35,Ea(d/160+4.2,c/160-1.3,4));g*=1-b[2],g*=v(6,16,Math.hypot((d-Ia.x)*.9,c-Ia.z)-Ia.r),g*=1-b[0],g*=v(4,10,h)*v(va+2,va+12,e);let r=(d+8)/80,M=(c-50)/58;return g*=v(.6,1.6,r*r+M*M),g*=v(ma.r,ma.r+25,Math.hypot(d-ma.x,c-ma.z)),g=Math.max(g,v(-760,-900,c)*.95),g=Math.max(g*1,v(190,260,d)*v(0,.3,Ea(d/90,c/90,3)+.25)),b[3]=Aa(g,0,1),b}function sa(d,c,b,f,e,a){let h=d/f,n=c/e,g=b/a,r=Math.sqrt(h*h+n*n+g*g),M=h/f,i=n/e,y=g/a,I=Math.sqrt(M*M+i*i+y*y);return I<1e-9?-Math.min(f,e,a):r*(r-1)/I}function _a(d,c,b,f,e,a){return Math.sqrt((d/f)**2+(c/e)**2+(b/a)**2)}function Fa(d,c,b,f,e,a,h,n,g,r){let M=d-f,i=c-e,y=b-a,I=h-f,A=n-e,w=g-a,R=Aa((M*I+i*A+y*w)/(I*I+A*A+w*w),0,1);return Math.hypot(M-I*R,i-A*R,y-w*R)-r}function Cb(d,c,b,f,e,a,h,n,g,r,M){let i=d-f,y=c-e,I=b-a,A=h-f,w=n-e,R=g-a,Y=Aa((i*A+y*w+I*R)/(A*A+w*w+R*R),0,1);return(Math.hypot(i-A*Y,y-w*Y,I-R*Y)-(r+(M-r)*Y))*.9}function Mb(d,c,b,f,e,a,h){let n=Math.abs(d)-f+h,g=Math.abs(c)-e+h,r=Math.abs(b)-a+h;return Math.hypot(Math.max(n,0),Math.max(g,0),Math.max(r,0))+Math.min(Math.max(n,g,r),0)-h}function Ya(d,c,b,f){let e=d-f.x,a=b-f.z,h=Math.hypot(e,a);if(h>f.r0*1.6+30)return h-f.r0*1.4;let n=Aa((c-f.y0)/(f.y1-f.y0),0,1),g=e/(h+1e-6),r=a/(h+1e-6),M=3*r-4*r*r*r,i=g*g-r*r,y=2*r*g,I=M*i+(4*g*g*g-3*g)*y,A=.13*(M*f.c+g*f.s)+.07*I+.11*K(g*1.4+f.seed,r*1.4+c/55),w=la(f.r0,f.r1,Math.pow(n,f.pow||1))*(1+A)+f.bulge*Math.sin(n*3.1),R=h-w;return R=aa(R,c-f.y1-7*K(e/22+f.seed,a/22),9),R=aa(R,f.y0-40-c,4),R*.82}function P(d,c,b,f,e,a,h,n={}){return{x:d,z:c,r0:b,r1:f,y0:e,y1:a,seed:h,c:Math.cos(h),s:Math.sin(h),bulge:n.bulge??0,pow:n.pow??1}}function Da(d,c,b,f){let e=12*Va(d/92,c/118,b/92,3);e+=3.2*Ra(d/10.5,c/72,b/10.5)+1.4*Ra(d/4.2,c/26,b/4.2);let a=c/16.5+.7*K(d/64,b/64),h=a-Math.floor(a);return e+=1.25*v(.55,.85,h)*(1-v(.85,1,h)),e*f}var[ib,yb,Nb]=hb,Bb=[[.12,7.5,18],[.34,7.5,19],[.62,19,64],[.9,10,27],[1.12,9,20]],Hb=[[.2,6,14],[.56,14,44],[.86,8,18]],Ga=[];for(let[d,c,b]of Bb)for(let f of[-1,1]){let e=f*85*Math.sin(d),a=-26+77*Math.cos(d);Ga.push({ax:e,ay:7,az:a,bx:e*1.03,by:-b,bz:a+3+b*.05,r1:c,r2:.9})}var ab=-140,Pa=[];for(let d=0;d<=10;d++){let c=-1.35+2.7*d/10;Pa.push([104*Math.sin(c),ab-8*(1-Math.cos(c)),-44+92*Math.cos(c)])}for(let[d,c,b]of Hb)for(let f of[-1,1]){let e=f*100*Math.sin(d),a=-44+88*Math.cos(d);Ga.push({ax:e,ay:ab+12,az:a,bx:e*.98,by:ab+12+b,bz:a-2,r1:c,r2:.8})}function Db(d,c,b){let f=Math.abs(d),e=sa(d,c-150,b+84,182,128,122),a=sa(d,c-46,b+26,116,78,106);return a=aa(a,-(c+2),5),e=Z(e,a,34),e=Z(e,Fa(f,c,b,96,80,24,174,52,-50,24),14),e=Z(e,Fa(f,c,b,16,196,46,152,178,-4,19),12),e=Z(e,Fa(f,c,b,40,128,56,104,104,40,11),9),e=Z(e,Fa(d,c,b,0,182,44,0,104,76,14),16),e}function Jb(d,c,b){let f=1e9;for(let e=0;e<Pa.length-1;e++){let a=Pa[e],h=Pa[e+1];f=Math.min(f,Fa(d,c,b,a[0],a[1],a[2],h[0],h[1],h[2],21))}return f}function Sb(d,c,b){let f=1e9;for(let e=0;e<Ga.length;e++){let a=Ga[e],h=d-a.ax;h>30||h<-30||(f=Math.min(f,Cb(d,c,b,a.ax,a.ay,a.az,a.bx,a.by,a.bz,a.r1,a.r2)))}return f}function db(d,c,b,f){let e=d-ib,a=c-yb,h=b-Nb,n=-22-75e-5*e*e+11*K(e/74,a/96);a>200&&(n-=(a-200)*.38),n+=70*v(-128,-168,a)*(1-v(110,190,Math.abs(e))),a<-168&&(n+=(-168-a)*.8);let g=(h-n)*.72,r=286-88e-5*e*e+40*K(e/170,h/170)+18*K(e/60,h/60);g=aa(g,(a-r)*.7,30),g=aa(g,-(h+540),30);let M=1e9,i=1e9;if(e>-270&&e<270&&a>-230&&a<330&&h>-345){M=Db(e,a,h),g=Z(g,M,34);let I=Math.abs(e);if(g=aa(g,-sa(I-80,a-150,h-36,40,33,72),7),g=aa(g,-sa(e,a-94,h-66,24,31,58),6),g=aa(g,-sa(e,a+66,h+46,154,70,215),9),a<-60&&a>-210&&I<150&&h>-100){let A=Jb(e,a,h);g=Z(g,A,16),M=Math.min(M,A)}a<20&&a>-160&&I<120&&h>-70&&h<90&&(i=Sb(e,a,h),g=Z(g,i,3))}return f&&(f[0]=M,f[1]=i),g}var Ha=[0,0];function Fb(d,c,b){let f=db(d,c,b,Ha),e=Ha[0],a=Ha[1];if(Math.abs(f)>48)return f;let h=e<30?v(26,2,e):0,n=a<12?v(9,.5,a):0;h=Math.max(h,n);let g=Da(d,c,b,1),r=1.6*Va(d/26,c/26,b/26,2)+.5*Ra(d/7,c/7,b/7);return f-la(g,r*(1-n*.8),h)}function Yb(d,c,b){return db(d,c,b,null)}function Lb(d,c,b,f,e,a,h){db(d,c,b,Ha);let n=Ha[0],g=Ha[1],r=n<40?v(30,4,n):0;r=Math.max(r,g<14?v(12,1,g):0),h[0]=r;let M=d-ib,i=c-yb,y=b-Nb,I=Math.abs(M),A=_a(M,i+66,y+46,154,70,215),w=v(1.25,1.02,A)*v(25,-95,y),R=v(1.25,1.02,_a(I-80,i-150,y-36,40,33,72))*v(34,-12,y),Y=v(1.25,1.02,_a(M,i-94,y-66,24,31,58))*v(50,14,y);h[1]=Math.max(w,R,Y),h[2]=.15*(1-r)}var jb=[P(-176,-372,30,22,20,236,1.3,{bulge:4}),P(-196,-470,38,26,20,300,2.1),P(-150,-214,22,15,30,182,3.7,{bulge:3}),P(-222,-112,34,24,30,214,4.4),P(-186,-612,42,30,20,340,5.9),P(-238,-762,50,34,20,380,6.6),P(-200,-40,24,18,36,150,7.2)],Qa=[[-205,112,-262,22,3,16],[-196,64,-166,16,3,12],[-150,182,-214,13,3,13]];function Ab(d,c,b){let f=-210-48*Math.sin((b+300)/165)-22*K(b/92,.3)-Math.max(0,c-40)*.07,e=(d-f)*.78,a=252+125*v(-80,-540,b)+46*K(b/210,d/210);e=aa(e,(c-a)*.72,24),e=aa(e,(b-112)*.8,30),e=aa(e,-(b+955),30);for(let h=0;h<jb.length;h++)e=Z(e,Ya(d,c,b,jb[h]),16);for(let h=0;h<Qa.length;h++){let n=Qa[h],g=Mb(d-n[0]+n[3]*.4,c-n[1]+n[4]+6,b-n[2],n[3]*1.4,n[4]+6,n[5],2.5);e=Z(e,g,4);let r=Mb(d-n[0]-2,c-n[1]-16,b-n[2],n[3]*.9,14,n[5]*.92,4);e=aa(e,-r,5)}return e}function pb(d,c,b){let f=Ab(d,c,b);if(Math.abs(f)>44)return f;let e=0;for(let a=0;a<Qa.length;a++){let h=Qa[a],n=Math.hypot((d-h[0])/(h[3]+8),(c-h[1])/10,(b-h[2])/(h[5]+8));e=Math.max(e,v(1.6,.9,n))}return f-Da(d,c,b,1-e*.9)}var bb=[P(-150,-598,40,27,0,296,1.1,{bulge:5}),P(-98,-662,30,21,0,238,2.7),P(-212,-696,50,35,0,338,3.9),P(-56,-726,22,15,0,186,4.8,{bulge:3}),P(-168,-520,26,20,0,214,5.5),P(-252,-568,34,26,0,276,6.3),P(-118,-772,34,24,10,262,7.7),P(-20,-792,18,13,10,150,8.9,{bulge:2})];for(let d of bb)d.y0=qa(d.x,d.z)-6;function Kb(d,c,b){let f=1e9;for(let e=0;e<bb.length;e++)f=Z(f,Ya(d,c,b,bb[e]),12);return Math.abs(f)>40?f:f-Da(d,c,b,.8)}var Ib=[P(118,-70,36,26,-44,196,2.4,{bulge:5,pow:.7}),P(92,-18,16,11,-10,64,3.3),P(150,-118,24,18,-44,128,5.1)];function Xb(d,c,b){let f=1e9;for(let e=0;e<Ib.length;e++)f=Z(f,Ya(d,c,b,Ib[e]),14);return f=Z(f,sa(d-104,c-160,b+58,34,20,32),14),Math.abs(f)>40?f:f-Da(d,c,b,.9)}var Vb=P(xa.x,xa.z,30,25,-48,xa.y,1.9,{bulge:3});function ub(d,c,b){let f=Ya(d,c,b,Vb);f=aa(f,c-xa.y,2);let e=ea.span/2;for(let a of[-1,1]){let h=ea.x+a*(e+9),n=sa(d-h,c+18,b-ea.z,20,26,22);n=aa(n,c-ea.y+.6,2),f=Z(f,n,6)}return f}function Wb(d,c,b){let f=ub(d,c,b);if(Math.abs(f)>30)return f;let e=v(xa.y-8,xa.y-1,c);return f-Da(d,c,b,.75*(1-e*.85))}var kb=(()=>{let d=Xa(77),c=[],b=0;for(;c.length<46&&b++<4e3;){let f=-2600+d()*5200,e=-3100+d()*2900;if(e>-1350&&f<330||e>-1700&&Math.abs(f)<520||c.some(g=>Math.hypot(g.x-f,g.z-e)<170))continue;let a=45+d()*75,h=qa(f,e)-20,n=220+d()*520;c.push(P(f,e,a,a*(.55+d()*.25),h,h+n,d()*10,{bulge:d()*10,pow:.8+d()*.6}))}return c})();function Tb(d,c,b){let f=1e9;for(let e=0;e<kb.length;e++){let a=kb[e],h=d-a.x,n=b-a.z,g=h*h+n*n,r=a.r0*1.7+60;if(g>r*r){f=Math.min(f,Math.sqrt(g)-a.r0*1.5);continue}f=Z(f,Ya(d,c,b,a),20)}return Math.abs(f)>50?f:f-Da(d*.62,c*.62,b*.62,1.25)}var Ba=d=>(c,b,f,e,a,h,n)=>{n[0]=0,n[1]=0,n[2]=d},ob=(()=>{let d=Xa(4242),c=[],b=(e,a,h)=>{let n=Sa(e,a),g=h*(.8+d()*.5),r=h*(.45+d()*.35),M=h*(.7+d()*.5),i=d()*Math.PI*2,y=[];for(let I=0;I<4;I++){let A=d()*Math.PI*2,w=(d()-.3)*1.2;y.push([Math.cos(A)*Math.cos(w),Math.sin(w),Math.sin(A)*Math.cos(w),h*(.45+d()*.3)])}c.push({x:e,y:n-r*.35,z:a,rx:g,ry:r,rz:M,c:Math.cos(i),s:Math.sin(i),planes:y,R:Math.max(g,r,M)*1.15})},f=[[-24,26,2.6],[-31,31,1.5],[27,21,3.2],[33,27,1.7],[-14,6,1.9],[17,2,2.4],[-46,12,3.8],[48,4,3.4],[7,22,.9],[-6,28,.7],[12,30,.6]];for(let[e,a,h]of f)b(e,a,h);for(let e=0;e<26;e++){let a=Ma.at(30+e*34+d()*18),h=d()<.5?-1:1,n=3.6+d()*6;b(a.x-a.tz*h*n,a.z+a.tx*h*n,.7+d()*1.8)}for(let e=0;e<22;e++){let a=ia.at(200+e*38+d()*20),h=d()<.5?-1:1,n=6+d()*4;b(a.x-a.tz*h*n,a.z+a.tx*h*n,1.2+d()*2.5)}return c})();function qb(d,c,b){let f=1e9;for(let e=0;e<ob.length;e++){let a=ob[e],h=d-a.x,n=c-a.y,g=b-a.z,r=h*h+n*n+g*g;if(r>(a.R+6)*(a.R+6)){f=Math.min(f,Math.sqrt(r)-a.R);continue}let M=h*a.c+g*a.s,i=-h*a.s+g*a.c,y=sa(M,n,i,a.rx,a.ry,a.rz);for(let I of a.planes)y=aa(y,M*I[0]+n*I[1]+i*I[2]-I[3],a.R*.12);f=Z(f,y,.6)}return f>2?f:f-.22*Va(d/2.2,c/2.2,b/2.2,3)-.05*Ra(d/.6,c/.6,b/.6)}var sb={skull:{bounds:[-480,-30,-1430,480,640,-870],cell:{high:1.3,mid:2.2,low:3.2},sdf:Fb,sdfAO:Yb,attrib:Lb,lipschitz:3.4},left:{bounds:[-730,0,-970,-120,470,125],cell:{high:2,mid:2.8,low:4},sdf:pb,sdfAO:Ab,attrib:Ba(.22),lipschitz:2},mid:{bounds:[-320,-20,-820,20,350,-470],cell:{high:1.6,mid:2.4,low:3.4},sdf:Kb,attrib:Ba(.32),lipschitz:2},right:{bounds:[20,-50,-190,200,225,40],cell:{high:1.1,mid:1.6,low:2.4},sdf:Xb,attrib:Ba(.2),lipschitz:2},gorge:{bounds:[30,-52,-600,190,14,-205],cell:{high:1,mid:1.5,low:2.2},sdf:Wb,sdfAO:ub,attrib:Ba(.25),lipschitz:2},far:{bounds:[-2800,-60,-3300,2800,1e3,-220],cell:{high:7,mid:9,low:12},sdf:Tb,attrib:Ba(.62),lipschitz:2.2},boulders:{bounds:[-130,-50,-1e3,260,60,60],cell:{high:.3,mid:.45,low:.7},sdf:qb,attrib:Ba(.14),lipschitz:2}};function Ob(d,c,b){let{sdf:f,cell:e}=d,[a,h,n,g,r,M]=d.bounds,i=Math.ceil((g-a)/e),y=Math.ceil((r-h)/e),I=Math.ceil((M-n)/e);c=Math.max(0,c),b=Math.min(i,b);let A=Math.ceil(i/8),w=Math.ceil(y/8),R=Math.ceil(I/8),Y=d.lipschitz||1.7,S=(8*e*.8661+e)*Y,q=Math.max(0,Math.floor((c-1)/8)),t=Math.min(A-1,Math.floor((b-1)/8)),m=new Map,l=9,j=[],k=[],o=[],x=0;for(let s=0;s<R;s++)for(let C=0;C<w;C++)for(let D=q;D<=t;D++){let J=a+(D*8+4)*e,V=h+(C*8+8/2)*e,F=n+(s*8+8/2)*e,L=f(J,V,F);if(x++,Math.abs(L)>S)continue;let p=new Float32Array(l*l*l);for(let da=0;da<=8;da++)for(let W=0;W<=8;W++)for(let fa=0;fa<=8;fa++)p[fa+l*(W+l*da)]=f(a+(D*8+fa)*e,h+(C*8+W)*e,n+(s*8+da)*e);x+=l*l*l,m.set(D+A*(C+w*s),{bi:D,bj:C,bk:s,s:p,v:null})}let O=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],z=new Float32Array(8);for(let s of m.values()){let C=new Int32Array(512).fill(-1);s.v=C;let{s:D}=s;for(let J=0;J<8;J++)for(let V=0;V<8;V++)for(let F=0;F<8;F++){let L=s.bi*8+F,p=s.bj*8+V,da=s.bk*8+J;if(L<c-1||L>=b||p>=y||da>=I||L>=i)continue;let W=0;for(let ca=0;ca<8;ca++){let na=D[F+(ca&1)+l*(V+(ca>>1&1)+l*(J+(ca>>2)))];z[ca]=na,na<0&&(W|=1<<ca)}if(W===0||W===255)continue;let fa=0,Ua=0,pa=0,ya=0;for(let ca=0;ca<12;ca++){let na=O[ca][0],ka=O[ca][1],oa=z[na],Ka=z[ka];if(oa<0==Ka<0)continue;let Za=oa/(oa-Ka);fa+=(na&1)+((ka&1)-(na&1))*Za,Ua+=(na>>1&1)+((ka>>1&1)-(na>>1&1))*Za,pa+=(na>>2)+((ka>>2)-(na>>2))*Za,ya++}C[F+8*(V+8*J)]=j.length,j.push(a+(L+fa/ya)*e),k.push(h+(p+Ua/ya)*e),o.push(n+(da+pa/ya)*e)}}let N=(s,C,D)=>{if(s<0||C<0||D<0)return-1;let J=m.get((s/8|0)+A*((C/8|0)+w*(D/8|0)));return J?J.v[s%8+8*(C%8+8*(D%8))]:-1},u=[],B=(s,C,D,J,V)=>{if(s<0||C<0||D<0||J<0)return;if(V){let p=C;C=J,J=p}let F=(j[s]-j[D])**2+(k[s]-k[D])**2+(o[s]-o[D])**2,L=(j[C]-j[J])**2+(k[C]-k[J])**2+(o[C]-o[J])**2;F<L?u.push(s,C,D,s,D,J):u.push(s,C,J,C,D,J)};for(let s of m.values()){let{s:C}=s;for(let D=0;D<8;D++)for(let J=0;J<8;J++)for(let V=0;V<8;V++){let F=s.bi*8+V,L=s.bj*8+J,p=s.bk*8+D;if(F<c||F>=b||L>=y||p>=I)continue;let W=C[V+l*(J+l*D)]<0;L>0&&p>0&&C[V+1+l*(J+l*D)]<0!==W&&B(N(F,L,p),N(F,L-1,p),N(F,L-1,p-1),N(F,L,p-1),!W),F>0&&p>0&&C[V+l*(J+1+l*D)]<0!==W&&B(N(F,L,p),N(F,L,p-1),N(F-1,L,p-1),N(F-1,L,p),!W),F>0&&L>0&&C[V+l*(J+l*(D+1))]<0!==W&&B(N(F,L,p),N(F-1,L,p),N(F-1,L-1,p),N(F,L-1,p),!W)}}let H=new Int32Array(j.length).fill(-1),U=0;for(let s=0;s<u.length;s++){let C=u[s];H[C]<0&&(H[C]=U++)}let E=new Float32Array(U*3);for(let s=0;s<j.length;s++){let C=H[s];C<0||(E[C*3]=j[s],E[C*3+1]=k[s],E[C*3+2]=o[s])}let T=U>65535?new Uint32Array(u.length):new Uint32Array(u.length);for(let s=0;s<u.length;s++)T[s]=H[u[s]];let G=new Int8Array(U*3),_=new Uint8Array(U*4),X=e*.35,Oa=d.sdfAO||f,ba=[e*1.2,e*3.2,e*8,e*20],ta=[.5,.3,.2,.12],ha=new Float32Array(4);for(let s=0;s<U;s++){let C=E[s*3],D=E[s*3+1],J=E[s*3+2],V=f(C+X,D-X,J-X),F=f(C-X,D-X,J+X),L=f(C-X,D+X,J-X),p=f(C+X,D+X,J+X),da=V-F-L+p,W=-V-F+L+p,fa=-V+F-L+p,Ua=Math.hypot(da,W,fa)||1;da/=Ua,W/=Ua,fa/=Ua;let pa=(V+F+L+p)*.25,ya=Math.max(-e*.5,Math.min(e*.5,pa));C-=da*ya,D-=W*ya,J-=fa*ya,E[s*3]=C,E[s*3+1]=D,E[s*3+2]=J,G[s*3]=Math.round(da*127),G[s*3+1]=Math.round(W*127),G[s*3+2]=Math.round(fa*127);let ca=0;for(let ka=0;ka<4;ka++){let oa=ba[ka],Ka=Oa(C+da*oa,D+W*oa,J+fa*oa);ca+=ta[ka]*Math.max(0,oa-Ka)/oa}let na=Math.max(0,Math.min(1,1-ca));ha[0]=0,ha[1]=0,ha[2]=0,ha[3]=0,d.attrib&&d.attrib(C,D,J,da,W,fa,ha),_[s*4]=Math.round(na*255),_[s*4+1]=Math.round(Math.max(0,Math.min(1,ha[0]))*255),_[s*4+2]=Math.round(Math.max(0,Math.min(1,ha[1]))*255),_[s*4+3]=Math.round(Math.max(0,Math.min(1,ha[2]))*255)}return{pos:E,nor:G,aux:_,index:T,samples:x,blocks:m.size}}var cb=function(){var d="b9H79Tebbbe;veC9Geueu9Geub9Gbb9Gsuuuuuuuuuuuu99uueu9Gvuuuuub9Gruuuuuuub9Gouuuuuue999Gvuuuuueu9Gzuuuuuuuuuuu99uuuub9Gquuuuuuu99uueu9GPuuuuuuuuuuu99uueu9Gquuuuuuuu99ueu9Gruuuuuu99eu9Gwuuuuuu99ueu9Giuuue999GDuuuuuuuuueu9Gkuuuuuuuu99uub9Gluuuueu9Gluuuub9Giuuueui3EdilvorlwDiqkrxmPszdHObAAbeAlve9Weiiviebeoweuecj:Gdkr:Sdmo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95bw8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bD8A9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9O9v9W9K9HtWbqQ9TW79O9V9Wt9F79P9T9W29P9M959t29V9W9W95bkX9TW79O9V9Wt9F79P9T9W29P9M959qV919UWbmQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7bPX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2WbsP9TW79O9V9Wt9FVW9TW79Obza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbA59TW79O9V9Wt9F9NW9UWV9HtW9q9V79Pt9P9V9U9sW9T9H9WbCl79IV9RbXDwebcekdKYq:p:1dElbzOk:Q:tekYue99iuQ99eui99Due99xue9:w998Jjjjjbcj;sb9Rgs8Kjjjjbcbhzasc:Cefcbc;Kbz:xjjjb8AdnabaeSmbabaeadcdtz:wjjjb8AkdnamcdGTmbalcrfci4cbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egecdtfaHBdbasaecefBd;8ecbhlcbhednadTmbabheadhOinaHaeydbci4fcb86bbaeclfheaOcufgOmbkcbhlabheadhOinaHaeydbgAci4fgCaCRbbgCceaAcrGgAtV86bbaCcu7aA4ceGalfhlaeclfheaOcufgOmbkcualcdtalcFFFFi0Ehekaecbyd;y:L:cjbHjjjjbbhzasc:Cefasyd;8egecdtfazBdbasaecefBd;8ealcd4alfhOcehHinaHgecethHaeaO6mbkcbhXcuaecdtgOaecFFFFi0Ecbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egAcdtfaHBdbasaAcefBd;8eaHcFeaOz:xjjjbhQdnadTmbaecufhLcbhKindndnaQabaKcdtfgYydbgAc:v;t;h;Ev2aLGgOcdtfgCydbgHcuSmbceheinazaHcdtfydbaASmdaOaefhHaecefheaQaHaLGgOcdtfgCydbgHcu9hmbkkazaXcdtfaABdbaCaXBdbaXhHaXcefhXkaYaHBdbaKcefgKad9hmbkkaQcbyd;C:L:cjbH:bjjjbbasasyd;8ecufBd;8ekcbh8AcualcefgecdtaecFFFFi0Ecbyd;y:L:cjbHjjjjbbhKasc:Cefasyd;8egecdtfaKBdbasaKBdNeasaecefBd;8ecuadcitadcFFFFe0Ecbyd;y:L:cjbHjjjjbbhEasc:Cefasyd;8egecdtfaEBdbasaEBd:yeasaecefBd;8eascNefabadalcbz:cjjjbcualcdtgealcFFFFi0Eg3cbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egOcdtfaHBdbasaOcefBd;8ea3cbyd;y:L:cjbHjjjjbbhXasc:Cefasyd;8egOcdtfaXBdbasaOcefBd;8eaHaXaialavazasc:Cefz:djjjbalcbyd;y:L:cjbHjjjjbbh5asc:Cefasyd;8egOcdtfa5BdbasaOcefBd;8ea3cbyd;y:L:cjbHjjjjbbhOasc:Cefasyd;8egAcdtfaOBdbasaAcefBd;8ea3cbyd;y:L:cjbHjjjjbbhAasc:Cefasyd;8egCcdtfaABdbasaCcefBd;8eaOcFeaez:xjjjbh8EaAcFeaez:xjjjbh8FdnalTmbindnaKa8AgAcefg8AcdtfydbgCaKaAcdtgefydbgOSmbaCaO9RhYaEaOcitfhaa8Faefhha8EaefhLcbhCindndnaaaCcitfydbgQaA9hmbaLaABdbahaABdbxekdnaKaQcdtggfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheinaeydbaASmdaecwfheaOcufgOmbkka8FagfgeaAaQaeydbcuSEBdbaLaQaAaLydbcuSEBdbkaCcefgCaY9hmbkka8Aal9hmbkaHhOaXhAa8EhQa8FhCcbheindndnaeaOydbgL9hmbdnaeaAydbgL9hmbaQydbhLdnaCydbgYcu9hmbaLcu9hmba5aefcb86bbxikdnaYcuSmbaLcuSmbaeaYSmbaHaYcdtfydbaHaLcdtfydb9hmba5aefcd86bbxika5aefhadnaeaYSmbaeaLSmbaace86bbxikaacv86bbxdkdnaeaXaLcdtgYfydb9hmbdnaCydbgacuSmbaeaaSmbaQydbggcuSmbaeagSmba8FaYfydbghcuSmbahaLSmba8EaYfydbgYcuSmbaYaLSmbaHaacdtfydbgLaHaYcdtfydb9hmbaLaHagcdtfydbgYSmbaYaHahcdtfydb9hmba5aefcd86bbxika5aefcv86bbxdka5aefcv86bbxeka5aefa5aLfRbb86bbkaOclfhOaAclfhAaQclfhQaCclfhCalaecefge9hmbkdnamcaGTmbcbh8Jindndna5a8Jfg8KRbbg8Lc9:fPlbeebekdndndnaHa8Jcdtfydbgea8J9hmbcbhYcbh8MaqTmednazTmbcbh8Ma8JheinaqazaecdtgefydbfRbbce4a8MVceGh8MaXaefydbgea8J9hmbxikkcbh8Ma8JheinaqaefRbbce4a8MVceGh8MaXaecdtfydbgea8J9hmbxdkka5aefRbbhexeka8JheindnaKaecdtg8AfgeclfydbgOaeydbgeSmbaOae9RhgaEaecitfhhaHa8AfhacbhLinahaLcitfydbgQhednindnaKaecdtgCfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheaaydbhAdninaHaeydbcdtfydbaASmeaecwfheaOcufgOTmdxbkkcbhexdkaXaCfydbgeaQ9hmbkcehekaYaeVhYaLcefgLag9hmbkkaXa8Afydbgea8J9hmbka8LclciaYceGEa8MEheka8Kae86bbka8Jcefg8Jal9hmbkkdnaqTmbdndnazTmbazheaHhOalhAindnaqaeydbfRbbceGTmba5aOydbfcv86bbkaeclfheaOclfhOaAcufgAmbxdkkaqheaHhOalhAindnaeRbbceGTmba5aOydbfcv86bbkaecefheaOclfhOaAcufgAmbkkaHhealhAa5hOindna5aeydbfRbbcv9hmbaOcv86bbkaeclfheaOcefhOaAcufgAmbkkamceGTmba5healhOindndnaeRbbcufPlbeebekaecv86bbkaecefheaOcufgOmbkkcbh8Ncualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbh8Kasc:Cefasyd;8egecdtfa8KBdbasaecefBd;8eascbBd:qeas9cb83i1ea8Kaialavazasc1efz:ejjjbhydndnaDmbcbh8PcbhaxekcbhaawhecbhOindnaeIdbJbbbb9ETmbasaacdtfaOBdbaacefhakaeclfheaDaOcefgO9hmbkcuaaal2gecdtaecFFFFi0Ecbyd;y:L:cjbHjjjjbbh8Pasc:Cefasyd;8egecdtfa8PBdbasaecefBd;8ealTmbdnaambcbhaxekarcd4hgdnazTmbaacdthhcbhLa8PhYinaoazaLcdtfydbag2cdtfhQasheaYhOaahAinaOaQaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaOclfhOaAcufgAmbkaYahfhYaLcefgLal9hmbxdkkaacdthhcbhLa8PhYinaoaLag2cdtfhQasheaYhOaahAinaOaQaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaOclfhOaAcufgAmbkaYahfhYaLcefgLal9hmbkkcualc8S2gOalc;D;O;f8U0EgCcbyd;y:L:cjbHjjjjbbheasc:Cefasyd;8egAcdtfaeBdbasaAcefBd;8eaecbaOz:xjjjbhIcbh8RcbhgdnaaTmbcbh8NaCcbyd;y:L:cjbHjjjjbbhgasc:Cefasyd;8egecdtfagBdbasaecefBd;8eagcbaOz:xjjjb8Acuaaal2gecltgOaecFFFFb0Ecbyd;y:L:cjbHjjjjbbh8Rasc:Cefasyd;8egecdtfa8RBdbasaecefBd;8ea8RcbaOz:xjjjb8AamcjjjjdGTmbcualcltgealcFFFFb0Ecbyd;y:L:cjbHjjjjbbh8Nasc:Cefasyd;8egOcdtfa8NBdbasaOcefBd;8ea8Ncbaez:xjjjb8AkdnadTmbcbhQabhOina8KaOclfydbgLcx2fgeIdba8KaOydbgYcx2fgAIdbg8S:tgRa8KaOcwfydbghcx2fgCIdlaAIdlg8U:tg8VNaeIdla8U:tg8WaCIdba8S:tg8XN:tg8Ya8YNa8WaCIdwaAIdwg8Z:tg80NaeIdwa8Z:tg8Wa8VN:tg81a81Na8Wa8XNaRa80N:tg80a80NMMg8V:rhBa8Yh8Xa80h8Wa81hRdna8VJbbbb9EgATmba8YaB:vh8Xa80aB:vh8Wa81aB:vhRkaIaHaYcdtfydbgCc8S2fgeaRaB:rg8VaRNNg83aeIdbMUdbaea8Wa8Va8WNgUNg85aeIdlMUdlaea8Xa8Va8XNg86Ng87aeIdwMUdwaeaRaUNgUaeIdxMUdxaea86aRNg88aeIdzMUdzaea8Wa86Ng89aeIdCMUdCaeaRa8Va8Xa8ZNaRa8SNa8Ua8WNMM:mg8:Ng86NgRaeIdKMUdKaea8Wa86Ng8WaeId3MUd3aea8Xa86Ng8XaeIdaMUdaaea86a8:Ng86aeId8KMUd8Kaea8VaeIdyMUdyaIaHaLcdtfydbgLc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdyaIaHahcdtfydbgYc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdydna8NTmbdnaATmba8YaB:vh8Ya80aB:vh80a81aB:vh81ka8NaCcltfgeaBJbbbZNgRa80Ng8VaeIdlMUdlaeaRa8YNg8WaeIdwMUdwaeaRa81Ng8XaeIdbMUdbaeaRa8S:ma81Na8Ua80N:ta8Za8YN:tNgRaeIdxMUdxa8NaLcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxa8NaYcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxkaOcxfhOaQcifgQad6mbkkdnalTmbJq;x8J88J;n;m;m89J:v:;;w8ZamczGEamc;abGEh80cbhOaHhCazhQaIhea8KhAindnaOaCydb9hmbaOhLdnazTmbaQydbhLka80hRdnaqTmbJbbjZa80aqaLfRbbclGEhRkaecxfgLaLIdbJbbbbMUdbaeczfgLaLIdbJbbbbMUdbaecCfgLaLIdbJbbbbMUdbaeaRaecyfgLIdbg8YNgRaeIdbMUdbaeclfgYaRaYIdbMUdbaecwfgYaRaYIdbMUdbaecKfgYaYIdbaAIdbg8WaRN:tUdbaAcwfIdbh8Vaec3fgYaYIdbaRaAclfIdbg8XN:tUdbaecafgYaYIdbaRa8VN:tUdbaec8KfgYIdbh81aLa8YaRMUdbaYa81aRa8Va8VNa8Wa8WNa8Xa8XNMMNMUdbkaCclfhCaQclfhQaec8SfheaAcxfhAalaOcefgO9hmbkkdnadTmbcbh8AabhLinaba8AcdtfhYcbheindna5aLaefydbgCfRbbgOTmba5aYaec:G:G:cjbfydbcdtfydbgQfRbbcFeGgATmbdnaOclSghmbaOci6mbaAclSmbaAcd0mekdnaOcd0mba8EaCcdtfydbaQ9hmekdnaAcd0mba8FaQcdtfydbaC9hmekdndnahmbaAcl9hmekaOciSmeaAciSmekJbbbZJbbbZJbbacaAcdSEaOcdSEhUdna8KaYaec:K:G:cjbfydbcdtfydbcx2fgOIdwa8KaCcx2fgAIdwg86:tg8Sa8KaQcx2fghIdwa86:tg8Xa8XNahIdbaAIdbg8U:tg80a80NahIdlaAIdlg8Z:tg8Va8VNMMg81Na8Xa8Sa8XNaOIdba8U:tg83a80Na8VaOIdla8Z:tg85NMMg8WN:tg8Ya8YNa83a81Na80a8WN:tgRaRNa85a81Na8Va8WN:tg8Wa8WNMMgBJbbbb9ETmba8YaB:rgB:vh8Ya8WaB:vh8WaRaB:vhRkaUa81:rNgBa8Ya86NaRa8UNa8Za8WNMM:mg81Ng87a81Nh88a80a85Na8Va83N:tg81a81Na8Va8SNa8Xa85N:tg8Va8VNa8Xa83Na80a8SN:tg8Xa8XNMMg83:rh80a8Ya87Nh85a8Wa87Nh89aRa87Nh87a8WaBa8YNg8SNh8:a8SaRNhZaRaBa8WNgnNhca8Ya8SNh8Ya8WanNh8WaRaBaRNNh8Sdna83Jbbbb9ETmba81a80:vh81a8Xa80:vh8Xa8Va80:vh8VkaIaHaCcdtfydbc8S2fgOaOIdba8Sa8VaUa80:rNgRa8VNNMg80MUdbaOa8Wa8XaRa8XNg8SNMg83aOIdlMUdlaOa8Ya81aRa81Ng8WNMg8YaOIdwMUdwaOaca8Va8SNMg8SaOIdxMUdxaOaZa8Wa8VNMgUaOIdzMUdzaOa8:a8Xa8WNMg8WaOIdCMUdCaOa87a8VaRa81a86Na8Va8UNa8Za8XNMMg86:mNgRNMg8VaOIdKMUdKaOa89a8XaRNMg8XaOId3MUd3aOa85a81aRNMg81aOIdaMUdaaOa88a86aRN:tgRaOId8KMUd8KaOaBaOIdyMUdyaIaHaQcdtfydbc8S2fgOa80aOIdbMUdbaOa83aOIdlMUdlaOa8YaOIdwMUdwaOa8SaOIdxMUdxaOaUaOIdzMUdzaOa8WaOIdCMUdCaOa8VaOIdKMUdKaOa8XaOId3MUd3aOa81aOIdaMUdaaOaRaOId8KMUd8KaOaBaOIdyMUdykaeclfgecx9hmbkaLcxfhLa8Acifg8Aad6mbkkdnamcjeGTmbalTmbcbh9cindnaKa9cgecdtgOfydbghaKaecefg9ccdtfydbg8M9pmba8Kaecx2fhDaIaHaOfydbgCc8S2fh8AindnaHaEahcitfgeydbgLcdtfydbg8JaC0mbaeydlh8LcuhAaLheindnaKaecdtgYfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheindnaHaeydbcdtfydbaC9hmbaAcu9hhQaLhAaQmbaeclfydbhAkaecwfheaOcufgOmbkkaXaYfydbgeaL9hmbkaAaLSmbaAcuSmba8KaLcx2fgeIdbaDIdbg81:tgRa8Ka8Lcx2fgOIdlaDIdlg80:tg8XNaeIdla80:tg8VaOIdba81:tg8YN:tg86a8KaAcx2fgAIdba81:tg8Za8VNaAIdla80:tg83aRN:tg8SNa8VaOIdwaDIdwgB:tg8UNaeIdwaB:tg8Wa8XN:tg85a83a8WNaAIdwaB:tg87a8VN:tgUNa8Wa8YNaRa8UN:tg88a87aRNa8Za8WN:tg89NMMa86a86Na85a85Na88a88NMM:rJ:A:z9z:;Na8Sa8SNaUaUNa89a89NMM:rN9Gmbdna8Ua8Wa8WNaRaRNa8Va8VNMMg8SNa8Wa8Ua8WNa8YaRNa8Va8XNMMg86N:tg8Ua8UNa8Ya8SNaRa86N:tg8Ya8YNa8Xa8SNa8Va86N:tg86a86NMMg8XJbbbb9ETmba8Ua8X:rg8X:vh8Ua86a8X:vh86a8Ya8X:vh8Yka8S:rg8Xa8UaBNa8Ya81Na80a86NMM:mgUNg85aUNhUa8Ua85Nh88a86a85Nh89a8Ya85Nh8:a86a8Xa8UNg85NhZa85a8YNhna8Ya8Xa86NgcNhJa8Ua85Nh8Ua86acNh86a8Ya8Xa8YNNh85dna87a8SNa8Wa87a8WNa8ZaRNa8Va83NMMg8YN:tg8Wa8WNa8Za8SNaRa8YN:tgRaRNa83a8SNa8Va8YN:tg8Va8VNMMg8YJbbbb9ETmba8Wa8Y:rg8Y:vh8Wa8Va8Y:vh8VaRa8Y:vhRka8Aa8AIdba85aRa8XaRNNMg8SMUdba8Aa86a8Va8Xa8VNg8ZNMg86a8AIdlMUdla8Aa8Ua8Wa8Xa8WNg8YNMg8Ua8AIdwMUdwa8AaJaRa8ZNMg8Za8AIdxMUdxa8Aana8YaRNMg83a8AIdzMUdza8AaZa8Va8YNMg85a8AIdCMUdCa8Aa8:aRa8Xa8WaBNaRa81Na80a8VNMMg81:mNg8YNMgRa8AIdKMUdKa8Aa89a8Va8YNMg8Va8AId3MUd3a8Aa88a8Wa8YNMg8Wa8AIdaMUdaa8AaUa81a8YN:tg8Ya8AId8KMUd8Ka8Aa8Xa8XMg8Xa8AIdyMUdyaIa8Jc8S2fgea8SaeIdbMUdbaea86aeIdlMUdlaea8UaeIdwMUdwaea8ZaeIdxMUdxaea83aeIdzMUdzaea85aeIdCMUdCaeaRaeIdKMUdKaea8VaeId3MUd3aea8WaeIdaMUdaaea8YaeId8KMUd8Kaea8XaeIdyMUdykahcefgha8M9hmbkka9cal9hmbkkdnadTmbaaTmbcbhYinJbbbbh80a8KabaYcdtfgeclfydbgLcx2fgOIdwa8Kaeydbghcx2fgAIdwg8Z:tg8Va8VNaOIdbaAIdbg83:tg8Wa8WNaOIdlaAIdlg85:tg8Xa8XNMMg8Sa8Kaecwfydbg8Acx2fgeIdwa8Z:tg8YNa8Va8YNa8WaeIdba83:tg81Na8XaeIdla85:tgBNMMgRa8VN:tJbbbbJbbjZa8Sa8Ya8YNa81a81NaBaBNMMg8UNaRaRN:tg86:va86Jbbbb9BEg86Nh88a8Ua8VNaRa8YN:ta86Nh89a8SaBNaRa8XN:ta86Nh8:a8Ua8XNaRaBN:ta86NhZa8Sa81NaRa8WN:ta86Nhna8Ua8WNaRa81N:ta86Nhca8WaBNa8Xa81N:tgRaRNa8Xa8YNa8VaBN:tgRaRNa8Va81Na8Wa8YN:tgRaRNMM:rJbbbZNhRa8Pahaa2g8JcdtfhOa8Pa8Aaa2g8McdtfhAa8PaLaa2gDcdtfhCa8Z:mhJa85:mh9ea83:mhTascjdfheaahQJbbbbhBJbbbbh86Jbbbbh8SJbbbbh8UJbbbbh8ZJbbbbh83Jbbbbh85Jbbbbh87JbbbbhUinaecwfaRa89aCIdbaOIdbg8Y:tg8XNa88aAIdba8Y:tg81NMg8VNUdbaeclfaRaZa8XNa8:a81NMg8WNUdbaeaRaca8XNana81NMg8XNUdbaecxfaRaJa8VNa9ea8WNa8YaTa8XNMMMg8YNUdbaRa8Va8WNNa8ZMh8ZaRa8Va8XNNa8UMh8UaRa8Wa8XNNa8SMh8SaRa8Ya8YNNaUMhUaRa8Va8YNNa87Mh87aRa8Wa8YNNa85Mh85aRa8Xa8YNNa83Mh83aRa8Va8VNNa86Mh86aRa8Wa8WNNaBMhBaRa8Xa8XNNa80Mh80aOclfhOaCclfhCaAclfhAaeczfheaQcufgQmbkagahc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyagaLc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyaga8Ac8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdya8Ra8JcltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8RaDcltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8Ra8McltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbkaYcifgYad6mbkkcbhAdndnamcwGgSmbJbbbbh86cbh9hcbh9icbh6xekcbh9ha3cbyd;y:L:cjbHjjjjbbh6asc:Cefasyd;8egecdtfa6BdbasaecefBd;8ecua6alabadaHz:fjjjbgCcltaCcjjjjiGEcbyd;y:L:cjbHjjjjbbh9iasc:Cefasyd;8egecdtfa9iBdbasaecefBd;8ea9iaCa6a8Kalz:gjjjbJFFuuh86aCTmba9iheaChOinaeIdbgRa86a86aR9EEh86aeclfheaOcufgOmbkaCh9hkdnalTmbaKclfheaKydbhCa5hOalhQcbhAincbaeydbgLaC9RaORbbcpeGEaAfhAaOcefhOaeclfheaLhCaQcufgQmbkaAce4hAkcuadaA9Rcifg9kcx2a9kc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbh0asc:Cefasyd;8egecdtfa0BdbasaecefBd;8ecua9kcdta9kcFFFFi0Ecbyd;y:L:cjbHjjjjbbh9masc:Cefasyd;8egecdtfa9mBdbasaecefBd;8ea3cbyd;y:L:cjbHjjjjbbh9nasc:Cefasyd;8egecdtfa9nBdbasaecefBd;8ealcbyd;y:L:cjbHjjjjbbh9oasc:Cefasyd;8egecdtfa9oBdbasaecefBd;8eaxaxNayJbbjZamclGEg9pa9pN:vh87JbbbbhUdnadak9nmbdna9kci6mbamcjdGh9qaaclth9ra0cwfh9sJbbbbh85JbbbbhUinascNefabadalaHz:cjjjbabh8Acbh3cbh9tinaba9tcdtfh8McbheindnaHa8AaefydbgAcdtghfydbgCaHa8Maec:W:G:cjbfydbcdtfydbgOcdtg8JfydbgQSmba5aOfRbbgYco2a5aAfRbbgLfRb;a:G:cjbg8LaLco2aYfgDRb;a:G:cjbg9cVcFeGTmbdnaQaC9nmbaDRb;W:G:cjbcFeGmekdnaLcufcFeGce0mbaYTmba8EahfydbaO9hmekdnaLTmbaYcufcFeGce0mba8Fa8JfydbaA9hmeka0a3cx2fgCaOaAa9ccFeGgQEBdlaCaAaOaQEBdbaCaQa8LGcb9hBdwa3cefh3kaeclfgecx9hmbkdna9tcifg9tad9pmba8Acxfh8Aa3cifa9k9nmekka3TmdcbhDinaIaHa0aDcx2fghydbgLcdtgCfydbg8Jc8S2fgeIdwa8KahydlgYcx2fgOIdwg8WNaeIdzaOIdbg8XNaeIdaMgRaRMMa8WNaeIdlaOIdlg8YNaeIdCa8WNaeId3MgRaRMMa8YNaeIdba8XNaeIdxa8YNaeIdKMgRaRMMa8XNaeId8KMMM:lhRJbbbbJbbjZaeIdyg8V:va8VJbbbb9BEh8Vdndnahydwg8MmbJFFuuhBxekJbbbbJbbjZaIaHaYcdtfydbc8S2fgeIdyg81:va81Jbbbb9BEaeIdwa8KaLcx2fgOIdwg81NaeIdzaOIdbg80NaeIdaMgBaBMMa81NaeIdlaOIdlgBNaeIdCa81NaeId3Mg81a81MMaBNaeIdba80NaeIdxaBNaeIdKMg81a81MMa80NaeId8KMMM:lNhBka8VaRNh80dnaaTmbagaLc8S2fgAIdwa8WNaAIdza8XNaAIdaMgRaRMMa8WNaAIdla8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaYaa2gQcdtfhOa8RaLaa2g8AcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEh8Sdndna8MmbJbbbbhRxekagaYc8S2fgAIdwa8KaLcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8AcdtfhOa8RaQcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEhRka80a8SMh80aBaRMhBdndndna5aLfRbbc9:fPibeedkdna8Fa8Ea8EaCfydbaYSEaXaCfydbgQcdtfydbgCcu9hmbaXaYcdtfydbhCkagaQc8S2fgAIdwa8KaCcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaCaa2g8AcdtfhOa8RaQaa2g8JcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEh8Sdndna8MmbJbbbbhRxekagaCc8S2fgAIdwa8KaQcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8JcdtfhOa8Ra8AcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEhRka80a8SMh80aBaRMhBxdkaXaCfydbgCaLSmbaHaYcdtfydbh8Aindndna8EaCcdtgQfydbgecuSmbaHaecdtfydba8ASmekdna8FaQfydbgecuSmbaHaecdtfydba8ASmekaYhekagaCc8S2fgAIdwa8Kaecx2fgOIdwg8WNaAIdzaOIdbg8XNaAIdaMgRaRMMa8WNaAIdlaOIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Paeaa2cdtfhOa8RaCaa2cltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbka80aR:lgRa81aRa819DEaRa9qEMh80aXaQfydbgCaL9hmbkkdna5aYfRbbgeciSmbaecl9hmeka8MTmbaXaYcdtfydbgCaYSmbindndna8EaCcdtgQfydbgecuSmbaHaecdtfydba8JSmekdna8FaQfydbgecuSmbaHaecdtfydba8JSmekaLhekagaCc8S2fgAIdwa8Kaecx2fgOIdwg8WNaAIdzaOIdbg8XNaAIdaMgRaRMMa8WNaAIdlaOIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Paeaa2cdtfhOa8RaCaa2cltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaBaR:lgRa81aRa819DEaRa9qEMhBaXaQfydbgCaY9hmbkkahaBa80aBa809DgeEUdwahaLaYaea8Mcb9hGgeEBdlahaYaLaeEBdbaDcefgDa39hmbkascjdfcbcj;qbz:xjjjb8Aa9shea3hOinascjdfaeydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbcefBdbaecxfheaOcufgOmbkcbhecbhOinascjdfaefgAydbhCaAaOBdbaCaOfhOaeclfgecj;qb9hmbkcbhea9shOinascjdfaOydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbgAcefBdba9maAcdtfaeBdbaOcxfhOa3aecefge9hmbkadak9RgAci9Uh9udnalTmbcbhea9nhOinaOaeBdbaOclfhOalaecefge9hmbkkcbh9va9ocbalz:xjjjbh9caAcO9Uh9wa9uce4h9tcbh8Lcbh8Mdnina0a9ma8Mcdtfydbcx2fg8JIdwgRa879Emea8La9u9pmeJFFuuh8Vdna9ta39pmba0a9ma9tcdtfydbcx2fIdwJbb;aZNh8VkdnaRa8V9ETmbaRaU9ETmba8La9w0mdkdna9caHa8JydlgDcdtg9xfg8AydbgAfg9yRbba9caHa8Jydbghcdtg9zfydbgefg9ARbbVmba5ahfRbbh9BdndnaKaecdtfgOclfydbgCaOydbgOSmbaCaO9RhCa8KaAcx2fhLa8Kaecx2fhYaEaOcitfheindna9naeydbcdtfydbgOaASmba9naeclfydbcdtfydbgQaASmbaOaQSmba8KaQcx2fgQIdba8KaOcx2fgOIdbg8W:tgRaYIdlaOIdlg8X:tg80NaQIdla8X:tg8VaYIdba8W:tgBN:tg8YaRaLIdla8X:tg8SNa8VaLIdba8W:tg8UN:tg8XNa8VaYIdwaOIdwg81:tg8ZNaQIdwa81:tg8Wa80N:tg80a8VaLIdwa81:tg83Na8Wa8SN:tg8VNa8WaBNaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmikaecwfheaCcufgCmbkkdndna9Bc99fcFeGce0mba9na9zfaDBdbaXa9zfydbgeahSmeina8AydbhAdndna8EaecdtgOfydbgecuSmbaHaecdtfydbaASmekdna8FaOfydbgecuSmbaHaecdtfydbaASmekaDheka9naOfaeBdbaXaOfydbgeah9hmbxdkkdndna9BcFeGcdSmbaDhexekdna8Fa8Ea8Ea9zfydbaDSEaXa9zfydbghcdtfydbgecu9hmbaXa9xfydbheka9na9zfaDBdbka9nahcdtfaeBdbka9Ace86bba9yce86bba8JIdwgRaUaUaR9DEhUa9vcefh9vcecda9BcFeGceSEa8Lfh8Lxeka9tcefh9tka8Mcefg8Ma39hmbkka9vTmddnalTmbcbhLcbhhindna9nahcdtgefydbgAahSmbaHaAcdtfydbh8AdnahaHaefydb9hg8JmbaIa8Ac8S2fgeaIahc8S2fgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxaeaOIdzaeIdzMUdzaeaOIdCaeIdCMUdCaeaOIdKaeIdKMUdKaeaOId3aeId3MUd3aeaOIdaaeIdaMUdaaeaOId8KaeId8KMUd8KaeaOIdyaeIdyMUdya8NTmba8Na8Acltfgea8NahcltfgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxkaaTmbagaAc8S2fgeagahc8S2g8MfgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxaeaOIdzaeIdzMUdzaeaOIdCaeIdCMUdCaeaOIdKaeIdKMUdKaeaOId3aeId3MUd3aeaOIdaaeIdaMUdaaeaOId8KaeId8KMUd8KaeaOIdyaeIdyMUdya9raA2hYa8RhOaahCinaOaYfgeaOaLfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8JmbJbbbbJbbjZaIa8MfgeIdygR:vaRJbbbb9BEaeIdwa8Ka8Acx2fgOIdwgRNaeIdzaOIdbg8VNaeIdaMg8Wa8WMMaRNaeIdlaOIdlg8WNaeIdCaRNaeId3MgRaRMMa8WNaeIdba8VNaeIdxa8WNaeIdKMgRaRMMa8VNaeId8KMMM:lNgRa85a85aR9DEh85kaLa9rfhLahcefghal9hmbkcbhOa8EheindnaeydbgAcuSmbdnaOa9naAcdtgCfydbgA9hmbcuhAa8EaCfydbgCcuSmba9naCcdtfydbhAkaeaABdbkaeclfhealaOcefgO9hmbkcbhOa8FheindnaeydbgAcuSmbdnaOa9naAcdtgCfydbgA9hmbcuhAa8FaCfydbgCcuSmba9naCcdtfydbhAkaeaABdbkaeclfhealaOcefgO9hmbkka85aUaaEh85cbhOabhecbhAindnaHa9naeydbcdtfydbgLcdtfydbgCaHa9naeclfydbcdtfydbgYcdtfydbgQSmbaCaHa9naecwfydbcdtfydbg8AcdtfydbghSmbaQahSmbabaOcdtfgCaLBdbaCcwfa8ABdbaCclfaYBdbaOcifhOkaecxfheaAcifgAad6mbkdndnaSmbaOhdxekdnaOak0mbaOhdxekdna86a859FmbaOhdxekJFFuuh86cbhdabhecbhAindna9ia6aeydbgCcdtfydbcdtfIdbgRa859ETmbaeclf8Pdbh9CabadcdtfgQaCBdbaQclfa9C83dbaRa86a86aR9EEh86adcifhdkaecxfheaAcifgAaO6mbkkadak0mbxdkkascNefabadalaHz:cjjjbkdndnadak0mbadhYxekdnaSmbadhYxekdna86a879FmbadhYxekcehQina86Jbb;aZNgRa87aRa879DEh8WJbbbbhRdna9hTmba9ihea9hhOinaeIdbg8VaRa8Va8W9FEaRa8VaR9EEhRaeclfheaOcufgOmbkkJFFuuh86cbhYabhecbhOindna9ia6aeydbgAcdtfydbcdtfIdbg8Va8W9ETmbaeclf8Pdbh9CabaYcdtfgCaABdbaCclfa9C83dba8Va86a86a8V9EEh86aYcifhYkaecxfheaOcifgOad6mbkdnaQaYad9hVceGmbadhYxdkaRaUaUaR9DEhUaYak9nmecbhQaYhda86a879FmbkkdnamcjjjjdGTmba9ocbalz:xjjjbh8AdnaYTmbabheaYhOina8AaeydbgAfce86bba8AaHaAcdtfydbfce86bbaeclfheaOcufgOmbkkascNefabaYalaHz:cjjjbdndnalTmbcbhCindna8AaCfRbbTmbdna5aCfRbbPlbeebekdnaHaCcdtgLfydbgeaCSmba8KaCcx2fgOa8Kaecx2fgeydwBdwaOae8Pdb83dbxekaIaCc8S2fgQIdygnanJL:3;rUNgRMh87aQIdwgxaRMh8SaQIdlg9DaRMh8UaQIdbg9EaRMh81aQIdag9FaRa8KaCcx2fg8JIdwg88N:th8ZaQId3g9GaRa8JIdlg89N:th83aQIdKg9Ha8JIdbg8:aRN:th80JbbbbhZaQIdCg9IJbbbbMh85aQIdzg9JJbbbbMhBaQIdxg9KJbbbbMh86dndnaaTmbaChAinJbbbba87agaAc8S2fgOIdygR:vaRJbbbb9BEhRa8RaAaa2cltfheaOIdaa87Na8ZMh8ZaOId3a87Na83Mh83aOIdKa87Na80Mh80aOIdCa87Na85Mh85aOIdza87NaBMhBaOIdxa87Na86Mh86aOIdwa87Na8SMh8SaOIdla87Na8UMh8UaOIdba87Na81Mh81aahOina8ZaecwfIdbg8VaecxfIdbg8YNaRN:th8Za83aeclfIdbg8Wa8YNaRN:th83a85a8Wa8VNaRN:th85a81aeIdbg8Xa8XNaRN:th81a80a8Xa8YNaRN:th80aBa8Xa8VNaRN:thBa86a8Xa8WNaRN:th86a8Sa8Va8VNaRN:th8Sa8Ua8Wa8WNaRN:th8UaeczfheaOcufgOmbkaXaAcdtfydbgAaC9hmbka8NTmba8NaCcltfgeIdxhTaeIdwhcaeIdlhJaeIdbhRxekJbbbbhTJbbbbhcJbbbbhJJbbbbhRkaBa81:vg8Wa80Na8Z:ta85aBa86a81:vg8VN:tg8Za8Ua86a8VN:tg8Y:vg8Xa8Va80Na83:tg8UN:th83acaRa8WN:taJaRa8VN:tg86a8XN:tg85a8SaBa8WN:ta8Za8XN:tgB:vg8S:mh8Za86a8Y:vgc:mhJdnJbbbbaRaRa81:vg9eN:ta86acN:ta85a8SN:tg86:la87J:983:g81NgR9ETmba8Za83NaJa8UNa9ea80NaT:tMMa86:vhZka81:laR9ETmba8Y:laR9ETmbaB:laR9ETmba9e:maZNa8W:ma8ZaZNa83aB:vMgBNa8V:maJaZNa8X:maBNa8Ua8Y:vMMg85Na80:ma81:vMMMh87aKaLfgeclfydbgOaeydbge9RhhaEaecitfhLJbbbbhRdnaOaeSg8MmbJbbbbhRaLheahhAina8Kaeclfydbcx2fgOIdwa88:tg8Va8VNaOIdba8::tg8Va8VNaOIdla89:tg8Va8VNMMg8Va8Kaeydbcx2fgOIdwa88:tg8Wa8WNaOIdba8::tg8Wa8WNaOIdla89:tg8Wa8WNMMg8WaRaRa8W9DEgRaRa8V9DEhRaecwfheaAcufgAmbkaR:rgRaRNhRkaBa88:tg8Va8VNa87a8::tg8Va8VNa85a89:tg8Va8VNMMaR9EmbaQId8KhZdna8Mmbina8KaLclfydbcx2fgeIdba8KaLydbcx2fgOIdbg8W:tgRa89aOIdlg8X:tg80NaeIdla8X:tg8Va8:a8W:tg86N:tg8YaRa85a8X:tg8SNa8Va87a8W:tg8UN:tg8XNa8Va88aOIdwg81:tg8ZNaeIdwa81:tg8Wa80N:tg80a8VaBa81:tg83Na8Wa8SN:tg8VNa8Wa86NaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmdaLcwfhLahcufghmbkkJbbbbJbbjZan:vanJbbbb9BEgRaxaBNa9Ja87Na9FMg8Va8VMMaBNa9Da85Na9IaBNa9GMg8Va8VMMa85Na9Ea87Na9Ka85Na9HMg8Va8VMMa87NaZMMM:lNaRaxa88Na9Ja8:Na9FMg8Va8VMMa88Na9Da89Na9Ia88Na9GMg8Va8VMMa89Na9Ea8:Na9Ka89Na9HMg8Va8VMMa8:NaZMMM:lNJbb;aZNJ:983:g81M9Emba8JaBUdwa8Ja85Udla8Ja87UdbkaCcefgCal9hmbkdnaambcbhaxdkcbhQindna8AaQfRbbTmbaHaQcdtgefydbaQ9hmba5aQfhhaXaefh8Ja8KaQcx2fhAa8PaQaa2cdtfh8McbhEincuhCdnahRbbc99fcFeGce0mbaQhCa8JydbgeaQSmba8PaEcdtgOfhLa8MaOfIdbhRaQhCinaChOcuhCdnaLaeaa2cdtfIdbaR9CmbaOcuSmbaOhCagaec8S2fIdyagaOc8S2fIdy9ETmbaehCkaXaecdtfydbgeaQ9hmbkka8PaEcdtfhLa8RaEcltfhKaQheinaLaeaa2cdtfJbbbbJbbjZagaeaCaCcuSEgOc8S2fIdygR:vaRJbbbb9BEaKaOaa2cltfgOIdwaAIdwNaOIdbaAIdbNaOIdlaAIdlNMMaOIdxMNUdbaXaecdtfydbgeaQ9hmbkaEcefgEaa9hmbkkaQcefgQal9hmbxdkkaambcbhakaiavaoarawaaala8Ka8Pazasayasc1efa5a8Aaqz:hjjjbkdnamcjjjjlGTmbazmbaYTmbabhecbhLina5aeydbgAfRbbc3thQaecwfgXydbhHcjjjj94hCdna8EaAcdtgEfydbaeclfgKydbgOSmbcjjjj94cba8FaOcdtfydbaASEhCkaeaQaCVaAVBdba5aOfRbbc3thacjjjj94hCcjjjj94hQdna8EaOcdtfydbaHSmbcjjjj94cba8FaHcdtfydbaOSEhQkaKaaaQVaOVBdba5aHfRbbc3thOdna8EaHcdtfydbaASmbcjjjj94cba8FaEfydbaHSEhCkaXaOaCVaHVBdbaecxfheaLcifgLaY6mbkkdnazTmbaYTmbaYheinabazabydbcdtfydbBdbabclfhbaecufgembkkdnaPTmbaPa9paU:rNUdbkdnasyd;8egHTmbaHcdtasc:Ceffc98fheinaeydbcbyd;C:L:cjbH:bjjjbbaec98fheaHcufgHmbkkascj;sbf8KjjjjbaYk;Yieouabydlhvabydbclfcbaicdtz:xjjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfhearcufgrmbkkabydbcbBdbk:todDue99aicd4aifhrcehwinawgDcethwaDar6mbkcuaDcdtgraDcFFFFi0Ecbyd;y:L:cjbHjjjjbbhwaoaoyd9GgqcefBd9GaoaqcdtfawBdbawcFearz:xjjjbhkdnaiTmbalcd4hlaDcufhxcbhminamhDdnavTmbavamcdtfydbhDkcbadaDal2cdtfgDydlgwawcjjjj94SEgwcH4aw7c:F:b:DD2cbaDydbgwawcjjjj94SEgwcH4aw7c;D;O:B8J27cbaDydwgDaDcjjjj94SEgDcH4aD7c:3F;N8N27axGhwamcdthPdndndnavTmbakawcdtfgrydbgDcuSmeadavaPfydbal2cdtfgsIdbhzcehqinaqhrdnadavaDcdtfydbal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmlkarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbxdkkakawcdtfgrydbgDcuSmbadamal2cdtfgsIdbhzcehqinaqhrdnadaDal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmikarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbkkaramBdbamhDkabaPfaDBdbamcefgmai9hmbkkakcbyd;C:L:cjbH:bjjjbbaoaoyd9GcufBd9GdnaeTmbaiTmbcbhDaehwinawaDBdbawclfhwaiaDcefgD9hmbkcbhDaehwindnaDabydbgrSmbawaearcdtfgrydbBdbaraDBdbkabclfhbawclfhwaiaDcefgD9hmbkkk;:odvuv998Jjjjjbca9Rgocbyd1:G:cjbBdKaocb8Pdj:G:cjb83izaocbydN:G:cjbBdwaocb8Pd:m:G:cjb83ibdnadTmbaicd4hrdnabmbdnalTmbcbhwinaealawcdtfydbar2cdtfhDcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxikkarcdthwcbhDincbhiinaoczfaifgqaeaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaeawfheaDcefgDad9hmbxdkkdnalTmbcbhwinabawcx2fgiaealawcdtfydbar2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxdkkarcdthlcbhwaehDinabawcx2fgiaeawar2cdtfgqIdbUdbaiaqIdlUdlaiaqIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaDalfhDawcefgwad9hmbkkJbbbbaoIdbaoIdzgx:tgkakJbbbb9DEgkaoIdlaoIdCgm:tgPaPak9DEgkaoIdwaoIdKgP:tgsasak9DEhsdnabTmbadTmbJbbbbJbbjZas:vasJbbbb9BEhkinabakabIdbax:tNUdbabclfgoakaoIdbam:tNUdbabcwfgoakaoIdbaP:tNUdbabcxfhbadcufgdmbkkdnavTmbavaPUdwavamUdlavaxUdbkask:WlewudnaeTmbcbhvabhoinaoavBdbaoclfhoaeavcefgv9hmbkkdnaiTmbcbhrinadarcdtfhwcbhDinalawaDcdtgvyd:G:G:cjbcdtfydbcdtfydbhodnalawavfydbcdtfydbgqabaqcdtfgkydbgvSmbinakabavgqcdtfgxydbgvBdbaxhkaqav9hmbkkdnaoabaocdtfgkydbgvSmbinakabavgocdtfgxydbgvBdbaxhkaoav9hmbkkdnaqaoSmbabaqaoaqao0Ecdtfaqaoaqao6EBdbkaDcefgDci9hmbkarcifgrai6mbkkdnaembcbskcbhxindnalaxcdtgvfydbax9hmbaxhodnaxabavfgDydbgvSmbaDhqinaqabavgocdtfgkydbgvBdbakhqaoav9hmbkkaDaoBdbkaxcefgxae9hmbkcbhkabhvcbhoindndnaoalydbgq9hmbdnaoavydbgq9hmbavakBdbakcefhkxdkavabaqcdtfydbBdbxekavabaqcdtfydbBdbkalclfhlavclfhvaeaocefgo9hmbkakk;jiilud99euabcbaecltz:xjjjbhvdnalTmbadhoaihralhwinarcwfIdbhDarclfIdbhqavaoydbcltfgkarIdbakIdbMUdbakaqakIdlMUdlakaDakIdwMUdwakakIdxJbbjZMUdxaoclfhoarcxfhrawcufgwmbkkdnaeTmbavhkaehrinakcxfgoIdbhDaocbBdbakakIdbJbbbbJbbjZaD:vaDJbbbb9BEgDNUdbakclfgoaDaoIdbNUdbakcwfgoaDaoIdbNUdbakczfhkarcufgrmbkkdnalTmbinavadydbcltfgkaicwfIdbakIdw:tgDaDNaiIdbakIdb:tgDaDNaiclfIdbakIdl:tgDaDNMMgDakIdxgqaqaD9DEUdxadclfhdaicxfhialcufglmbkkdnaeTmbavcxfhkinabakIdbUdbakczfhkabclfhbaecufgembkkk:moerudnaoTmbaecd4hzdnavTmbaicd4hHavcdthOcbhAindnaPaAfRbbTmbaAhednaDTmbaDaAcdtfydbhekdnasTmbasaefRbbceGmekdnamaAfRbbcvSmbabaeaz2cdtfgiaraAcx2fgCIdbakNaxIdbMUdbaiaCIdlakNaxIdlMUdlaiaCIdwakNaxIdwMUdwkadaeaH2cdtfhXaqheawhiavhCinaXaeydbcdtgQfaiIdbalaQfIdb:vUdbaeclfheaiclfhiaCcufgCmbkkawaOfhwaAcefgAao9hmbxdkkdnasmbcbheaDhiindnaPaefRbbTmbaehCdnaDTmbaiydbhCkamaefRbbcvSmbabaCaz2cdtfgCarIdbakNaxIdbMUdbaCarclfIdbakNaxIdlMUdlaCarcwfIdbakNaxIdwMUdwkaiclfhiarcxfhraoaecefge9hmbxdkkdnaDTmbindnaPRbbTmbasaDydbgefRbbceGmbamRbbcvSmbabaeaz2cdtfgearIdbakNaxIdbMUdbaearclfIdbakNaxIdlMUdlaearcwfIdbakNaxIdwMUdwkaPcefhPaDclfhDamcefhmarcxfhraocufgombxdkkazcdthicbheindnaPaefRbbTmbasaefRbbceGmbamaefRbbcvSmbabarIdbakNaxIdbMUdbabclfarclfIdbakNaxIdlMUdbabcwfarcwfIdbakNaxIdwMUdbkarcxfhrabaifhbaoaecefge9hmbkkk8MbabaeadaialavcbcbcbcbcbaoarawaDz:bjjjbk8MbabaeadaialavaoarawaDaqakaxamaPz:bjjjbkRbababaeadaialavaoarawaDaqakaxcjjjjdVamz:bjjjbk:vgoque99due99duq998Jjjjjbc;Wb9Rgq8Kjjjjbcbhkaqcxfcbc;Kbz:xjjjb8Aaqcualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbgxBdxaqceBd2axaialavcbcbz:ejjjb8AaqcualcdtalcFFFFi0Egmcbyd;y:L:cjbHjjjjbbgiBdzaqcdBd2dndnJFF959eJbbjZawJbbjZawJbbjZ9DE:vawJ9VO:d869DEgw:lJbbb9p9DTmbaw:OhPxekcjjjj94hPkadci9Uhsarco9UhzdndnaombaPcd9imekdnalTmbaPcuf:YhwdnaoTmbcbhvaihHaxhOindndnaoavfRbbceGTmbavcjjjjlVhAxekdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHaOcxfhOalavcefgv9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkadTmbcbhkaehvcbhOinakaiavclfydbcdtfydbgHaiavcwfydbcdtfydbgA9haiavydbcdtfydbgXaH9haXaA9hGGfhkavcxfhvaOcifgOad6mbkkarci9UhQdndnaz:Z:rJbbbZMgw:lJbbb9p9DTmbaw:Ohvxekcjjjj94hvkaQ:ZhLcbhKc:bwhzdninakaQ9pmeazaP9Rcd9imeavazcufgOavaO9iEaPcefavaP9kEhYdnalTmbaYcuf:YhwdnaoTmbcbhOaihHaxhvindndnaoaOfRbbceGTmbaOcjjjjlVhAxekdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHavcxfhvalaOcefgO9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkcbhOdnadTmbaehvcbhHinaOaiavclfydbcdtfydbgAaiavcwfydbcdtfydbgX9haiavydbcdtfydbgraA9haraX9hGGfhOavcxfhvaHcifgHad6mbkkdnas:ZgCaL:taY:Ygwaz:Y:tg8ANak:ZgEaO:Zg3:tNaEaL:tawaP:Y:tg5Na3aC:tNMg8EJbbbb9BmbaCaE:ta5a8Aa3aL:tNNNa8E:vawMhwkdndnaOaQ0mbaOhkaYhPxekaOhsaYhzkdndnaKcl0mbdnawJbbbZMgw:lJbbb9p9DTmbaw:Ohvxdkcjjjj94hvxekaPazfcd9ThvkaKcefgKcs9hmbkkdndndnakmbJbbjZhwcbhOcdhvaDmexdkalcd4alfhHcehOinaOgvcethOavaH6mbkaqcuavcdtavcFFFFi0Ecbyd;y:L:cjbHjjjjbbgYBdCaqciBd2aqamcbyd;y:L:cjbHjjjjbbgzBdKaqclBd2dnalTmbaPcuf:YhwdnaoTmbcbhOaihAaxhHindndnaoaOfRbbceGTmbaOcjjjjlVhXxekdndnaHclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqthXdndnaHcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarVhXdndnaHIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarcCtVhXkaAaXBdbaAclfhAaHcxfhHalaOcefgO9hmbxdkkaxhOaihHalhAindndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcCthXdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkarcqtaXVhXdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaHaXarVBdbaOcxfhOaHclfhHaAcufgAmbkkaqcuaYavazaialz:mjjjbgXc8S2gvaXc;D;O;f8U0Ecbyd;y:L:cjbHjjjjbbgiBd3aqcvBd2aicbavz:xjjjbhOdnadTmbcbhraehiinaxaiclfydbgocx2fgvIdbaxaiydbgPcx2fgHIdbg3:tgCaxaicwfydbgYcx2fgAIdlaHIdlg8A:tgwNavIdla8A:tgEaAIdba3:tg8EN:tgLaLNaEaAIdwaHIdwg5:tg8FNavIdwa5:tgEawN:tgwawNaEa8ENaCa8FN:tgCaCNMMg8E:rhEJbbnnJbbjZazaPcdtfydbgvazaocdtfydbgASavazaYcdtfydbgoSGgHEh8Fdna8EJbbbb9ETmbaLaE:vhLaCaE:vhCawaE:vhwkaOavc8S2fgvavIdbawa8FaE:rNgEawNNg8FMUdbavaCaEaCNgaNghavIdlMUdlavaLaEaLNg8ENggavIdwMUdwavawaaNgaavIdxMUdxava8EawNg8JavIdzMUdzavaCa8ENg8EavIdCMUdCavawaEaLa5Nawa3Na8AaCNMM:mg8ANg3NgwavIdKMUdKavaCa3NgCavId3MUd3avaLa3NgLavIdaMUdaava3a8ANg3avId8KMUd8KavaEavIdyMUdydnaHmbaOaAc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdyaOaoc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdykaicxfhiarcifgrad6mbkkcbhAaqcuaXcdtgvaXcFFFFi0Egicbyd;y:L:cjbHjjjjbbgHBdaaqcoBd2aqaicbyd;y:L:cjbHjjjjbbgiBd8KaqcrBd2aHcFeavz:xjjjbhPdnalTmbazhHinJbbbbJbbjZaOaHydbgrc8S2fgvIdygw:vawJbbbb9BEavIdwaxcwfIdbgwNavIdzaxIdbgCNavIdaMgLaLMMawNavIdlaxclfIdbgLNavIdCawNavId3MgwawMMaLNavIdbaCNavIdxaLNavIdKMgwawMMaCNavId8KMMM:lNhwdndnaParcdtgvfgrydbcuSmbaiavfIdbaw9ETmekaraABdbaiavfawUdbkaHclfhHaxcxfhxalaAcefgA9hmbkkdndnaXmbJbbbbhwxekJbbbbhwinaiIdbgCawawaC9DEhwaiclfhiaXcufgXmbkaw:rhwkakcd4akfhOcehiinaigvcethiavaO6mbkcbhOaqcuavcdtgiavcFFFFi0Ecbyd;y:L:cjbHjjjjbbgHBdyaHcFeaiz:xjjjbhXdnadTmbavcufhrcbhkcbhxindnazaeaxcdtfgvydbcdtfydbgiazavclfydbcdtfydbgOSmbaiazavcwfydbcdtfydbgvSmbaOavSmbaPavcdtfydbhAdndnaPaOcdtfydbgvaPaicdtfydbgi9pmbavaA9pmbaAhlaihoavhAxekdnaAai9pmbaAav9pmbaihlavhoxekavhlaAhoaihAkabakcx2fgvaABdbavcwfaoBdbavclfalBdbdnaXaoc:3F;N8N2alc:F:b:DD27aAc;D;O:B8J27arGgOcdtfgvydbgicuSmbcehHinaHhvdnabaicx2fgiydbaA9hmbaiydlal9hmbaiydwaoSmikavcefhHaXaOavfarGgOcdtfgvydbgicu9hmbkkavakBdbakcefhkkaxcifgxad6mbkakci2hOkcwhvaDTmekaDawUdbkavcdthvaqcxfc98fhiinaiavfydbcbyd;C:L:cjbH:bjjjbbavc98fgvmbkaqc;Wbf8KjjjjbaOk:0iewuabcFeaecdtz:xjjjbhbdnalmbcbskaecufhvdndnaiTmbcbhocbhrindndndnabaiarcdtgwfydbgDcm4aD7c:v;t;h;Ev2gecs4ae7avGgqcdtfgkydbgxcuSmbceheinaiaxcdtgxfydbaDSmdaqaefhxaecefheabaxavGgqcdtfgkydbgxcu9hmbkkakarBdbaoheaocefhoxekadaxfydbhekadawfaeBdbarcefgral9hmbxdkkcbhocbhDindnabaDcm4aD7c:v;t;h;Ev2gecs4ae7avGgqcdtfgkydbgxcuSmbaxaDSmbceheinabaqaefavGgqcdtfgkydbgxcuSmeaecefheaxaD9hmbkkdndnaxcu9hmbakaDBdbaoheaocefhoxekadaxcdtfydbhekadaDcdtfaeBdbaDcefgDal9hmbkkaok:3ldrue9:8Jjjjjbc;Wb9Rgr8Kjjjjbcbhwarcxfcbc;Kbz:xjjjb8AdnabaeSmbabaeadcdtz:wjjjb8AkarcualcdtalcFFFFi0EgDcbyd;y:L:cjbHjjjjbbgqBdxarceBd2aqcbaialavcbarcxfz:djjjbcualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbhkarcxfaryd2gxcdtfakBdbaraxcefgmBd2akaialavcbcbz:ejjjb8AarcxfamcdtfaDcbyd;y:L:cjbHjjjjbbgiBdbaraxcdfgvBd2arcxfavcdtfcuaialaeadaqz:fjjjbgecltaecjjjjiGEcbyd;y:L:cjbHjjjjbbgqBdbaqaeaiakalz:gjjjbaxcifhkdnadTmbaoaoNhocbhwabhlcbheindnaqaialydbgvcdtfydbcdtfIdbao9ETmbalclf8PdbhPabawcdtfgDavBdbaDclfaP83dbawcifhwkalcxfhlaecifgead6mbkkdnakTmbaxcdtarcxffcwfhlinalydbcbyd;C:L:cjbH:bjjjbbalc98fhlakcufgkmbkkarc;Wbf8Kjjjjbawk;lOoDud99oue99vuv998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcxfcbc;Kbz:xjjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbgqBdxawceBd2aqaeadaicbcbz:ejjjb8AawcuadcdtadcFFFFi0Egkcbyd;y:L:cjbHjjjjbbgxBdzawcdBd2adcd4adfhecehiinaigmcethiamae6mbkcbhPawcuamcdtgsamcFFFFi0Ecbyd;y:L:cjbHjjjjbbgzBdCawciBd2dndnar:ZgH:rJbbbZMgO:lJbbb9p9DTmbaO:Ohixekcjjjj94hikamcufhAc:bwhCcbhXadhQcbhLinaiaCcufgeaiae9iEaPcefaiaP9kEhDdndnadTmbaDcuf:YhOaqhiaxheadhKindndnaiIdbaONJbbbZMgY:lJbbb9p9DTmbaY:Oh8Axekcjjjj94h8Aka8AcCth8AdndnaiclfIdbaONJbbbZMgY:lJbbb9p9DTmbaY:OhExekcjjjj94hEkaEcqta8AVh8AdndnaicwfIdbaONJbbbZMgY:lJbbb9p9DTmbaY:OhExekcjjjj94hEkaea8AaEVBdbaicxfhiaeclfheaKcufgKmbkazcFeasz:xjjjbh3cbh5cbh8Eindna3axa8Ecdtfydbg8Acm4a8A7c:v;t;h;Ev2gics4ai7aAGgKcdtfgEydbgecuSmbaea8ASmbcehiina3aKaifaAGgKcdtfgEydbgecuSmeaicefhiaea8A9hmbkkaEa8ABdba5aecuSfh5a8Ecefg8Ead9hmbxdkkazcFeasz:xjjjb8Acbh5kdnaQ:ZgYaH:taD:YgOaC:Y:tg8FNaX:Zgaa5:Zgh:tNaaaH:taOaP:Y:tggNahaY:tNMg8JJbbbb9BmbaYaa:taga8FahaH:tNNNa8J:vaOMhOkaPaDa5ar0geEhPaXa5aeEhXdna5arSmbaDaCaeEgCaP9Rcd9imbdndnaLcl0mbdnaOJbbbZMgO:lJbbb9p9DTmbaO:Ohixdkcjjjj94hixekaPaCfcd9Thika5aQaeEhQaLcefgLcs9hmekkdndnaXmbcihicbhDxekawakcbyd;y:L:cjbHjjjjbbg8ABdKawclBd2aPcuf:YhYdnadTmbaqhiaxheadhKindndnaiIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaEcCthEdndnaiclfIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:Oh3xekcjjjj94h3ka3cqtaEVhEdndnaicwfIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:Oh3xekcjjjj94h3kaeaEa3VBdbaicxfhiaeclfheaKcufgKmbkkawcuazama8Aaxadz:mjjjbgDc32giaDc;j:KM;jb0Ecbyd;y:L:cjbHjjjjbbgeBd3awcvBd2aecbaiz:xjjjbh3avcd4hxdnadTmbdnalTmbaxcdth8Ea8AhEaqhealhKadhAina3aEydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaKIdbaiIdxMUdxaiaKclfIdbaiIdzMUdzaiaKcwfIdbaiIdCMUdCaiaiIdKJbbjZMUdKaEclfhEaecxfheaKa8EfhKaAcufgAmbxdkka8AhKaqheadhEina3aKydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaiIdxJbbbbMUdxaiaiIdzJbbbbMUdzaiaiIdCJbbbbMUdCaiaiIdKJbbjZMUdKaKclfhKaecxfheaEcufgEmbkkdnaDTmba3hiaDheinaiaiIdbJbbbbJbbjZaicKfIdbgO:vaOJbbbb9BEgONUdbaiclfgKaOaKIdbNUdbaicwfgKaOaKIdbNUdbaicxfgKaOaKIdbNUdbaiczfgKaOaKIdbNUdbaicCfgKaOaKIdbNUdbaic3fhiaecufgembkkcbhEawcuaDcdtgCaDcFFFFi0Egicbyd;y:L:cjbHjjjjbbgeBdaawcoBd2awaicbyd;y:L:cjbHjjjjbbg8EBd8KaecFeaCz:xjjjbh5dnadTmbaoJbbjZJbbjZaY:vaPceSENgOaONhYaxcdthxalheinaYaecN:H:cjbalEgKIdwa3a8AydbgAc32fgiIdC:tgOaONaKIdbaiIdx:tgOaONaKIdlaiIdz:tgOaONMMNaqcwfIdbaiIdw:tgOaONaqIdbaiIdb:tgOaONaqclfIdbaiIdl:tgOaONMMMhOdndna5aAcdtgifgKydbcuSmba8EaifIdbaO9ETmekaKaEBdba8EaifaOUdbka8Aclfh8AaqcxfhqaeaxfheadaEcefgE9hmbkkaba5aCz:wjjjb8Acrhikaicdthiawcxfc98fheinaeaifydbcbyd;C:L:cjbH:bjjjbbaic98fgimbkkawc;Wbf8KjjjjbaDk:Pdidui99ducbhi8Jjjjjbca9Rglcbyd1:G:cjbBdKalcb8Pdj:G:cjb83izalcbydN:G:cjbBdwalcb8Pd:m:G:cjb83ibdndnaembJbbjFhvJbbjFhoJbbjFhrxekadcd4cdthwincbhdinalczfadfgDabadfIdbgvaDIdbgoaoav9EEUdbaladfgDavaDIdbgoaoav9DEUdbadclfgdcx9hmbkabawfhbaicefgiae9hmbkalIdwalIdK:thralIdlalIdC:thoalIdbalIdz:thvkJbbbbavavJbbbb9DEgvaoaoav9DEgvararav9DEk:H8Modui99lud99Aus998Jjjjjbcji9RgD8KjjjjbcbhqaDcxfcbc;Kbz:xjjjb8AaDcbBdwaD9cb83ibaDcbyd;i:L:cjbBd1eaDcb8Pd;a:L:cjb83ijeaDcbyd;u:L:cjbBd94aDcb8Pd;m:L:cjb83i9WdndnavmbJbbjFhkJbbjFhxJbbjFhmxekaocd4cdthPalhsincbhzinaDcjefazfgHasazfIdbgkaHIdbgxaxak9EEUdbaDc;WbfazfgHakaHIdbgxaxak9DEUdbazclfgzcx9hmbkasaPfhsaqcefgqav9hmbkaDId94aDId1e:thmaDIdtaDId:ee:thxaDId9WaDIdje:thkkJbbbbhOdnar:YgAJq;x8J88MaA:vJbbbbakakJbbbb9DEgkaxaxak9DEgkamamak9DENgxJbbbb9Bmbarc9:f:Yax:vhOkaDcCfhCaDcxfcxfhXcbhzinaDazfaDcjefazfIdbgkaxaDc;WbfazfIdbak:t:tJbbb:;NMUdbazclfgzcx9hmbkcbhQaDarar2gLar2gzcbyd;y:L:cjbHjjjjbbgHBdxaDceBd2aHcbazz:xjjjbgKcbcbadaialaoaraOaDawz:rjjjbcdhYaDcuaLcdtaLcFFFFi0Eg8Acbyd;y:L:cjbHjjjjbbgEBdzaDcdBd2aDcjefcbarz:xjjjb8Acbh3dnaLTmbdnarcb9kmbaKhzaEhHaLhsincbh3aHcbcuazaDcjefarz:AjjjbEBdbazarfhzaHclfhHascufgsmbxdkkaKhPcbh3cbhvindndnaKavar2faDcjefarz:AjjjbTmbcbhHaPhzarhsinazaHazRbbgqfgHcbaqE86bbazcefhzascufgsmbkaEavcdtfa3BdbaHa3fh3xekaEavcdtfcuBdbkaParfhPavcefgvaL9hmbkkdnabTmbaDcua3cotgza3cFFF8F0Ecbyd;y:L:cjbHjjjjbbgQBdCcihYaDciBd2aQcbazz:xjjjb8AaXhCkdnawceGmbaCa8Acbyd;y:L:cjbHjjjjbbg5BdbaDaYcefgzBd2aDcxfazcdtfaLcbyd;y:L:cjbHjjjjbbgzBdbaDaYcdfgYBd2azcbaLz:xjjjbh8EarcufhXdnarci9imbarc9:fhCararcef2aKfcefh8Aceh8Fina8Far2hPa8AhvcehqindnaEaqaPfcdtfydbcuSmbavhzaChHinazazRbbgscuasE86bbazcefhzaHcufgHmbkkavarfhvaqcefgqaX9hmbka8AaLfh8Aa8Fcefg8FaX9hmbkkarce9imbcbh8Acbhqcbhvina8EaqfhscbhzindnasazfgHRbbmbaHce86bba5a8AcdtfaqazfBdba8Acefh8Akarazcefgz9hmbkaqarfhqavcefgvar9hmbka8ATmbaKcefhaaKc9:fhharc9:fhgarci9ih8Jina8Ea5a8Acufg8Acdtfydbgvfcb86bbavar2hPdna8JmbaEavcdtfydbcuSmbaKaPfhHaghqindnaHcefgzRbbgscFe9hmbaHRbbmbcbhskazas86bbazhHaqcufgqmbkaharavcef2fhzaXhsindnazRbbgHcFe9hmbazcefRbbmbcbhHkazaH86bbazcufhzascufgsce9kmbkkaaaPfh8Kavavar9Ug8Lar29Rh8FcbhCindnaCceScuaCEa8Ffgzce9imbazaX9ombcuaCciSaCcdSEa8LfgHce9imbaHaX9ombaEaHar2azfg8McdtfydbcuSmba8Jmbaaa8Mar2fhzcbhqa8KhsaghvinazazRbbgHcbaHaHcFeSEasRbbEgP86bbascefhsazcefhzaPaH7aqVhqavcufgvmbkaqcFeGTmba8Ea8MfgzRbbmbazce86bba5a8Acdtfa8MBdba8Acefh8AkaCcefgCcl9hmbka8AmbkkdnaQTmbaKaEaQadaialaoaraOaDawz:rjjjba3TmbJbbjZaO:vhkawcjjjjlGhPdnawcdGTmbJbbnnaOaON:vh8NakJbbbZNhyaQhzinazczfgsIdbg8PazcCfIdbgx:vhmazcxfgqIdbgIax:vhAazcwfgvIdbg8Rax:vh8SakazydbgHcFrG:ZNhRakaHcq4cFrG:ZNh8UakaHcC4cFrG:ZNh8VdnaxJ:p;c;188Ng8WazcKfIdbMg8X:laxJ:983:g81Ngx9ETmba8Wazc3fIdbMazc8KfIdbg8Ya8Ya8X:vg8YN:tg8Z:lax9ETmba8WazcafIdbMazcyfIdbg8Wa8Wa8X:vg80N:tazc8SfIdba8Wa8YN:tg8Wa8Wa8Z:vg8WN:tg81:lax9ETmba8PJ:p;c;188NazcUfIdb:ta80a8RJ:p;c;188Nazc8WfIdb:tg8PN:ta8WaIJ:p;c;188Nazc80fIdb:ta8Ya8PN:tgIN:ta81:vgxam:tg8Ra8RNa8Pa8X:va8YaIa8Z:va8WaxN:tg8XN:ta80axN:tg8Wa8S:tg8Ya8YNa8XaA:tg8Ya8YNMMa8N9DTmbaxaRaxaR9EEgxakaRMgmaxam9DEhma8Xa8Ua8Xa8U9EEgxaka8UMgAaxaA9DEhAa8Wa8Va8Wa8V9EEgxaka8VMg8Saxa8S9DEh8SkdnaPTmbayaRMhmaya8UMhAaya8VMh8SkasamUdbaqaAUdbava8SUdbazc;abfhza3cufg3mbxdkkdnaPTmbakJbbbZNhxaQhzinazczfaxakazydbgHcFrG:ZNMUdbazcxfaxakaHcq4cFrG:ZNMUdbazcwfaxakaHcC4cFrG:ZNMUdbazc;abfhza3cufg3mbxdkkaQcCfhzinazc98fgHaHIdbazIdbgk:vUdbazc94fgHaHIdbak:vUdbazctfgHaHIdbak:vUdbazc;abfhza3cufg3mbkkcbhsdndnarcd9imbarcufh3aEarcdtfhadnabmbaKcefg8Mararcefgz2fh8JaKazfhba8MaLfh8Ecbhscbh8Kina8Kar2h8La8Mheabh8Aa8Eh8Fa8Jh5cbhXindnaEaXa8LfgqcdtgzfgHclfydbaHydbGaaazfgzydbGazclfydbGcuSmbclcbaKaqar2fgzarfRbbEazRbbcb9hVczcbazaLfgzRbbEVc;abcbazarfRbbEVhPaehza8AhHa8Fhqa5hva3hQindnaPclcbaHRbbEazRbbcb9hVczcbaqRbbEVc;abcbavRbbEVgPcetVgCTmbaCcFeSmbasaCRb;W;p:cjbfhskazcefhzaHcefhHaqcefhqavcefhvaQcufgQmbkkaearfhea8Aarfh8Aa8Farfh8Fa5arfh5aXcefgXa39hmbka8MaLfh8MabaLfhba8EaLfh8Ea8JaLfh8Ja8Kcefg8Ka39hmbxdkkJbbjZaO:vgkakJk;x8J88NNh8RawcdGh8EaDIdwhkaDIdlhxaDIdbhmcbhscbhPinaPar2h8KcbhvindnaEava8KfgqcdtgzfgHclfydbaHydbGaaazfgzydbGazclfydbGcuSmbcbh8AclcbaKaqar2fgYarfRbbEaYRbbcb9hVczcbaYaLfg8JRbbEVc;abcba8JarfRbbEVh8Lindna8LclcbaYa8Ag8Mcefg8AfgzarfRbbEazRbbcb9hVczcba8Ja8AfgzRbbEVc;abcbazarfRbbEVg8LcetVgCTmbaCcFeSmbcbhqdndndnaCRb;W;n:cjbcufPdebdka8ETmeaCcC2gz8Ve;W:L:cjbcltaz8Ve;Y:L:cjbcsGVh8FaKa8Mfh5cxhzaDcjefhHinaHaQaEa8Faz4gqce4ceGavfaqcd4ceGaPfar2fgXcdtfydbcotfa5aqceGfaXar2fRbbcotfcnfBdbaHclfhHazc98fgzc989hmbkaDydjegzIdyaDyd:megHIdyMaDyd:eegqIdyaDyd1egXIdyMMg8XaqIdwaXIdwMJbbbZNgANazIdUaHIdUMaqIdUaXIdUMMg8WMg8Sa8SMazIdaaHIdaMaqIdaaXIdaMMg8YaqIdzaXIdzMJbbbZNg8SNMa8SNazId8SaHId8SMaqId8SaXId8SMMgRa8SNazId80aHId80MaqId80aXId80MMg8UMg8Sa8SMazId3aHId3MaqId3aXId3MMg8VaqIdxaXIdxMJbbbZNg8SNMa8SNazId8KaHId8KMaqId8KaXId8KMMg8Za8SNazId8WaHId8WMaqId8WaXId8WMMg80Mg8Sa8SMazIdKaHIdKMaqIdKaXIdKMMgyaANMaANazId88aHId88MaqId88aXId88MMg8PMMM:lgIa8RazIdCaHIdCMaqIdCaXIdCMMN9Ea8XazIdwaHIdwMJbbbZNgANa8WMg8Sa8SMa8YazIdzaHIdzMJbbbZNg8SNMa8SNaRa8SNa8UMg8Sa8SMa8VazIdxaHIdxMJbbbZNg8SNMa8SNa8Za8SNa80Mg8Sa8SMayaANMaANa8PMMM:laIJ;d;1UZN9DGhqxekaKa8Mfh8FcbhzcrhHindnaCaz4ceGTmba8FazceGfazce4ceGavfazcd4aPfar2fgqar2fRbbgXcFeSmbaQaEaqcdtfydbcotfaXcotfc9efRbbaH4ceGTmbcbhqxdkaHcufhHcehqazcefgzcw9hmbkkaCcC2aqcq2fgH8Ve;W:L:cjbgzTmbaHc;Y:L:cjbfhqaKa8MfhCabasc8K2fhHindnasae9pmbaHaQaEazcD4ceGavfazcq4ceGaPfar2fgXcdtfydbcotfaCazcw4ceGfaXar2fRbbcotfgXc9ifIdbamMUdbaHclfaXc9mfIdbaxMUdbaHcwfaXc9qfIdbakMUdbaHcxfamaQaEazcv4ceGavfazco4ceGaPfar2fgXcdtfydbcotfaCazcl4ceGfaXar2fRbbcotfgXc9ifIdbMUdbaHczfaxaXc9mfIdbMUdbaHcCfakaXc9qfIdbMUdbaHcKfamaQaEazce4ceGavfazcd4ceGaPfar2fgXcdtfydbcotfaCazceGfaXar2fRbbcotfgzc9ifIdbMUdbaHc3faxazc9mfIdbMUdbaHcafakazc9qfIdbMUdbkaHc8KfhHascefhsaq8Vebhzaqcdfhqazmbkka8Aa39hmbkkavcefgva39hmbkaPcefgPa39hmbkaDyd2gYTmekaYcdtaDcxffc98fhzinazydbcbyd;C:L:cjbH:bjjjbbazc98fhzaYcufgYmbkkaDcjif8Kjjjjbask;Kxmiue99due99euz99eui99eud99dud99oudnalTmbaocd4hkaqcdGhxarc99fhqarcethmawawMhPcbhsindndnawavaiascdtfgoclfydbak2cdtfgzIdwgHavaoydbak2cdtfgOIdwgA:tgCaCNazIdbgXaOIdbgQ:tgLaLNazIdlgKaOIdlgY:tg8Aa8ANMMgEavaocwfydbak2cdtfgoIdwg3aA:tg5a5NaoIdbg8EaQ:tg8Fa8FNaoIdlgaaY:tghahNMMggaEag9EEgEa3aH:tgHaHNa8EaX:tgHaHNaaaK:tgHaHNMMgHaEaH9EE:rNgHaHMgH:lJbbb9p9DTmbaH:Ohoxekcjjjj94hokdnaLahNa8Aa8FN:tgHaHNa8Aa5NaCahN:tgXaXNaCa8FNaLa5N:tgKaKNMMg3Jbbbb9BmbJbbjZhEdnaoceaoce9kEgoamaoam9iEg8Jcd9imbJbbjZa8J:Z:vhEkarcb9imbaAaDIdw:th8KaYaDIdl:th8LaQaDIdb:th8Ma8Jcba8Jcb9kEh8NdnadTmbaHJbbjZa3:rgA:vgQNg3aAa8Jcefa8Jcdf2:Y:vgANh8EaKaQNgKaANhyaXaQNgXaXaANNh8PcbhIina8Jcba8Jcb9kEcefh8RaEaI:ZNgQaCNa8KMhgaQa8ANa8LMh8SaQaLNa8MMhRcbhzindndnaPaEaz:ZNgQahNa8SMgYNgH:lJbbb9p9DTmbaH:OhOxekcjjjj94hOkaOce91goaqaoaq6Eh8UdndnaPaQa5NagMgHNga:lJbbb9p9DTmbaa:Oh8Vxekcjjjj94h8Vka8Ua8Vce91goaqaoaq6Eg8Wcefar2fcefgoar2h8XdndnaPaQa8FNaRMgQNga:lJbbb9p9DTmbaa:Oh8Yxekcjjjj94h8Ykadaeaocdtfydbcotfaba8Yce91goaqaoaq6Eg8Zfa8XfcefRbbcotfgocnfa8Ucqta8ZcCtVa8WVBdbaoc9efg8Ua8URbbcea8YceGaOcetcdGVa8VcdtclGVtV86bbaoc9ifgOaQaANaOIdbMUdbaoc9mfgOaYaANaOIdbMUdbaoc9qfgOaHaANaOIdbMUdbaoc9ufgOaAaOIdbMUdbdnaxTmbaoc9yfgOa8PaOIdbMUdbaoc9CfgOaKayNaOIdbMUdbaoc9GfgOa3a8ENaOIdbMUdbaoc9KfgOaXayNaOIdbMUdbaoc9OfgOaXa8ENaOIdbMUdbaoc2fgOaKa8ENaOIdbMUdbaoc9WfgOaXaAa3aHNaXaQNaKaYNMMgY:mNgQNaOIdbMUdbaoctfgOaKaQNaOIdbMUdbaoc94fgOa3aQNaOIdbMUdbaoc98fgoaoIdbaYaQN:tUdbka8Razcefgz9hmbka8Jcufh8JaIa8NShoaIcefhIaoTmbxdkkcbh8Vina8Jcba8Jcb9kEcefh8UaEa8V:ZNgAaCNa8KMhYaAa8ANa8LMhHaAaLNa8MMhXcbhoindndnaPaEao:ZNgAahNaHMNgQ:lJbbb9p9DTmbaQ:Ohzxekcjjjj94hzkazce91gzaqazaq6EhzdndnaPaAa5NaYMNgQ:lJbbb9p9DTmbaQ:OhOxekcjjjj94hOkazaOce91gOaqaOaq6Ecefar2fcefar2hzdndnaPaAa8FNaXMNgA:lJbbb9p9DTmbaA:OhOxekcjjjj94hOkabaOce91gOaqaOaq6Efazfcefce86bba8Uaocefgo9hmbka8Jcufh8Ja8Va8NShoa8Vcefh8VaoTmbkkascifgsal6mbkkk:Nvezu8Jjjjjbcjd9Rgb8Kjjjjbcbheabcbcjdz:xjjjbhdc:W:H:cjbhbinabRbbgicC2glabcqf8Veb87e;4:L:cjbalabcdfgv8Peb83e;W:L:cjbaiabcefRbb86b;W;n:cjbadaifce86bbalavabcxfceaetc:F:d;avGEgi8Peb83e;6:L:cjbalai8Vew87e:c:M:cjbabcQfhbaecefgecK9hmbkcbhoinc;Y:L:cjbhrcbhvindnadavfgwRbbce9hmbavcC2c;W:L:cjbfhDcbhbcehqavc;W;n:cjbfhkinabcitc:G:H:cjbfhlcbhbcbheinaeavab4ceGalabfRbbtVheabcefgbcw9hmbkdnadaecFeGgxfgmRbbmbaxcC2c;W:L:cjbfhPcbhbcehsindnaDabcq2gif8VebgbTmbaraifheaPaifhiinaialabcl4csGfRbbcltalabcw4csGfRbbcwtValabcsGfRbbV87ebaicdfhiae8VebhbaecdfheabmbkkcehbasceGhecbhsaembkamce86bbaxakRbb86b;W;n:cjbkcehbaqceGhlcbhqalmbkawcd86bbkarcCfhravcefgvcjd9hmbkaocefgoci9hmbkcbhic;W:L:cjbhvincuhlavhbinalcefhlab8Vebheabcdfhbaembkaial86b;W;p:cjbavcCfhvaicefgicjd9hmbkadcjdf8Kjjjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk;Bidqui998Jjjjjbc;Wb9Rgl8Kjjjjbalcxfcbc;Kbz:xjjjb8Aadcd4adfhvcehoinaogrcethoarav6mbkalcuarcdtgoarcFFFFi0Ecbyd;y:L:cjbHjjjjbbgvBdxavcFeaoz:xjjjbhwdnadTmbaicd4hDarcufhqcbhkindndnawcbaeakaD2cdtfgrydlgiaicjjjj94SEgocH4ao7c:F:b:DD2cbarydbgxaxcjjjj94SEgocH4ao7c;D;O:B8J27cbarydwgmamcjjjj94SEgrcH4ar7c:3F;N8N27aqGgvcdtfgrydbgocuSmbam::hPai::hsax::hzcehiinaihrdnaeaoaD2cdtfgiIdbaz9CmbaiIdlas9CmbaiIdwaP9BmikarcefhiawavarfaqGgvcdtfgrydbgocu9hmbkkarakBdbakhokabakcdtfaoBdbakcefgkad9hmbkkalydxcbyd;C:L:cjbH:bjjjbbalc;Wbf8Kjjjjbk9teiucbcbyd;G:L:cjbgeabcifc98GfgbBd;G:L:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;G:L:cjbgeabcrfc94GfgbBd;G:L:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;G:L:cjbge9Rcifc98GaefgbBd;G:L:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk6eiucbhidnadTmbdninabRbbglaeRbbgv9hmeaecefheabcefhbadcufgdmbxdkkalav9Rhikaikk;0vdbcj:Gdk;yvFFuuFFuuFFuuFFuFFFuFFFuFbbbbbbbbebbbdbbbbbbbebbbebbbdbbbbbbbbbbbeeeeeebebbeebbebbebbbeeebbbbebbbbbbbbbbbbbbbbbbbeeeeeeebebbbeeebbeebbbbbebbbbbebebbbbbbbbbbbbbbbdiorbelvlbodveribbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbibbbbbbbbbbbbbbbbbbbbbobbbbbbbbbbbbbbbbbbbbbrbaebbbbbbbbbbbbbbbbbbsd8We8YbbbbbbbhiaebbbbbbQe8Ke9cebbbbbbbbbbbbbbbbLb8KebbbbbbbbbbbbbbbbbbKbbbbbbbbbbbbbbbbbbbbbYeJbilbbbbbbbbbbbbbbbbEe80e8WlbbbbbbzlAbbbbbbb5eJdnibbbbbbai8Kbbbbbbb8Ee9ce8Ylcibbbb8Yebbbbbbbb8FdOlAdbbbbbb80e8Ylbbbbbb88eTi8KiJv8Jlbbbbbbbbbbbb89e9td8Kv9qibbbbndlvaibbbbZd8Li8KvbbbbbbJdTibbbbbb9Pe81b9GvoiBvbbbbbbbbbbbb9Re9JbvoWibbbbvibbbbbbbb9VeWi9Gvbbbbbb8WvBbbbbbbb9:b9ceBvbbbbbbbbbbbbbbbbubWibbbbbbbbbbbbbbbbbb;Wd9hvSrbbbbbbWl9NvbbbbbbFbbbbbbbbbbbbbbbbbbbbbFFuuFFuuFFuuFFuFFFuFFFuFbc;y:Ldkxebbbdbbb;W:Obb",c=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var b,f=WebAssembly.instantiate(e(d),{}).then(function(t){b=t.instance,b.exports.__wasm_call_ctors()});function e(t){for(var m=new Uint8Array(t.length),l=0;l<t.length;++l){var j=t.charCodeAt(l);m[l]=j>96?j-97:j>64?j-39:j+4}for(var k=0,l=0;l<t.length;++l)m[k++]=m[l]<60?c[m[l]]:(m[l]-60)*64+m[++l];return m.buffer.slice(0,k)}function a(t){if(!t)throw new Error("Assertion failed")}function h(t){return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}function n(t,m,l,j){var k=b.exports.sbrk,o=k(l*4),x=k(l*j*4),O=new Uint8Array(b.exports.memory.buffer);O.set(h(m),x),t(o,x,l,j*4),O=new Uint8Array(b.exports.memory.buffer);var z=new Uint32Array(l);return new Uint8Array(z.buffer).set(O.subarray(o,o+l*4)),k(o-k(0)),z}function g(t,m,l){var j=b.exports.sbrk,k=j(m.length*4),o=j(l*4),x=new Uint8Array(b.exports.memory.buffer),O=h(m);x.set(O,k);var z=t(o,k,m.length,l);x=new Uint8Array(b.exports.memory.buffer);var N=new Uint32Array(l);new Uint8Array(N.buffer).set(x.subarray(o,o+l*4)),j(k-j(0));for(var u=0;u<m.length;++u)m[u]=N[m[u]];return[N,z]}function r(t){for(var m=0,l=0;l<t.length;++l){var j=t[l];m=m<j?j:m}return m}function M(t,m,l,j,k,o,x,O,z){var N=b.exports.sbrk,u=N(4),B=N(l*4),H=N(k*o),U=N(l*4),E=new Uint8Array(b.exports.memory.buffer);E.set(h(j),H),E.set(h(m),U);var T=t(B,U,l,H,k,o,x,O,z,u);E=new Uint8Array(b.exports.memory.buffer);var G=new Uint32Array(T);h(G).set(E.subarray(B,B+T*4));var _=new Float32Array(1);return h(_).set(E.subarray(u,u+4)),N(u-N(0)),[G,_[0]]}function i(t,m,l,j,k,o,x,O,z,N,u,B,H){var U=b.exports.sbrk,E=U(4),T=U(l*4),G=U(k*o),_=U(k*O),X=U(z.length*4),Oa=U(l*4),ba=N?U(k):0,ta=new Uint8Array(b.exports.memory.buffer);ta.set(h(j),G),ta.set(h(x),_),ta.set(h(z),X),ta.set(h(m),Oa),N&&ta.set(h(N),ba);var ha=t(T,Oa,l,G,k,o,_,O,X,z.length,ba,u,B,H,E);ta=new Uint8Array(b.exports.memory.buffer);var s=new Uint32Array(ha);h(s).set(ta.subarray(T,T+ha*4));var C=new Float32Array(1);return h(C).set(ta.subarray(E,E+4)),U(E-U(0)),[s,C[0]]}function y(t,m,l,j,k,o,x,O,z,N,u,B,H){var U=b.exports.sbrk,E=U(4),T=U(k*o),G=U(k*O),_=U(z.length*4),X=U(l*4),Oa=N?U(k):0,ba=new Uint8Array(b.exports.memory.buffer);ba.set(h(j),T),ba.set(h(x),G),ba.set(h(z),_),ba.set(h(m),X),N&&ba.set(h(N),Oa);var ta=t(X,l,T,k,o,G,O,_,z.length,Oa,u,B,H,E);ba=new Uint8Array(b.exports.memory.buffer),h(m).set(ba.subarray(X,X+ta*4)),h(j).set(ba.subarray(T,T+k*o)),h(x).set(ba.subarray(G,G+k*O));var ha=new Float32Array(1);return h(ha).set(ba.subarray(E,E+4)),U(E-U(0)),[ta,ha[0]]}function I(t,m,l,j){var k=b.exports.sbrk,o=k(l*j),x=new Uint8Array(b.exports.memory.buffer);x.set(h(m),o);var O=t(o,l,j);return k(o-k(0)),O}function A(t,m,l,j,k,o,x,O){var z=b.exports.sbrk,N=z(O*4),u=z(l*j),B=k?z(l*o):0,H=new Uint8Array(b.exports.memory.buffer);H.set(h(m),u),k&&H.set(h(k),B);var U=t(N,u,l,j,B,o,x,O);H=new Uint8Array(b.exports.memory.buffer);var E=new Uint32Array(U);return h(E).set(H.subarray(N,N+U*4)),z(N-z(0)),E}function w(t,m,l,j,k,o,x,O,z){var N=b.exports.sbrk,u=N(4),B=N(l*4),H=N(k*o),U=N(l*4),E=x?N(k):0,T=new Uint8Array(b.exports.memory.buffer);T.set(h(j),H),T.set(h(m),U),x&&T.set(h(x),E);var G=t(B,U,l,H,k,o,E,O,z,u);T=new Uint8Array(b.exports.memory.buffer);var _=new Uint32Array(G);h(_).set(T.subarray(B,B+G*4));var X=new Float32Array(1);return h(X).set(T.subarray(u,u+4)),N(u-N(0)),[_,X[0]]}function R(t,m,l,j,k,o,x){var O=b.exports.sbrk,z=O(l*4),N=O(k*o),u=O(l*4),B=new Uint8Array(b.exports.memory.buffer);B.set(h(j),N),B.set(h(m),u);var H=t(z,u,l,N,k,o,x);B=new Uint8Array(b.exports.memory.buffer);var U=new Uint32Array(H);return h(U).set(B.subarray(z,z+H*4)),O(z-O(0)),U}function Y(t,m,l,j,k,o){var x=b.exports.sbrk,O=x(l.byteLength),z=x(m.byteLength),N=new Uint8Array(b.exports.memory.buffer);N.set(h(l),O),N.set(h(m),z);var u=l.byteLength/j,B=t(0,0,z,m.length,O,u,j,k,o),H=x(B*9*4),U=t(H,B,z,m.length,O,u,j,k,o);a(U<=B),N=new Uint8Array(b.exports.memory.buffer);var E=new Float32Array(U*9);return h(E).set(N.subarray(H,H+E.byteLength)),x(O-x(0)),E}var S={LockBorder:1,Sparse:2,ErrorAbsolute:4,Prune:8,Regularize:16,Permissive:32,RegularizeLight:64,PreserveFolds:128,ErrorClamped:256,_InternalDebug:1<<30},q={Shell:1,Solve:2,Thicken:0,_InternalDebug:1<<30};return{ready:f,supported:!0,compactMesh:function(t){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0);var m=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),l=g(b.exports.meshopt_optimizeVertexFetchRemap,m,r(t)+1);if(t!==m)for(var j=0;j<m.length;++j)t[j]=m[j];return l},generatePositionRemap:function(t,m){return a(t instanceof Float32Array),a(t.length%m==0),a(m>=3),n(b.exports.meshopt_generatePositionRemap,t,t.length/m,m)},simplify:function(t,m,l,j,k,o){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j>=0&&j<=t.length),a(j%3==0),a(k>=0);for(var x=0,O=0;O<(o?o.length:0);++O)a(o[O]in S),x|=S[o[O]];var z=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),N=M(b.exports.meshopt_simplify,z,t.length,m,m.length/l,l*4,j,k,x);return N[0]=t instanceof Uint32Array?N[0]:new t.constructor(N[0]),N},simplifyWithAttributes:function(t,m,l,j,k,o,x,O,z,N){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j instanceof Float32Array),a(j.length==k*(m.length/l)),a(k>=0),a(x==null||x instanceof Uint8Array),a(x==null||x.length==m.length/l),a(O>=0&&O<=t.length),a(O%3==0),a(z>=0),a(Array.isArray(o)),a(k>=o.length),a(o.length<=32);for(var u=0;u<o.length;++u)a(o[u]>=0);for(var B=0,u=0;u<(N?N.length:0);++u)a(N[u]in S),B|=S[N[u]];var H=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),U=i(b.exports.meshopt_simplifyWithAttributes,H,t.length,m,m.length/l,l*4,j,k*4,new Float32Array(o),x,O,z,B);return U[0]=t instanceof Uint32Array?U[0]:new t.constructor(U[0]),U},simplifyWithUpdate:function(t,m,l,j,k,o,x,O,z,N){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j instanceof Float32Array),a(j.length==k*(m.length/l)),a(k>=0),a(x==null||x instanceof Uint8Array),a(x==null||x.length==m.length/l),a(O>=0&&O<=t.length),a(O%3==0),a(z>=0),a(Array.isArray(o)),a(k>=o.length),a(o.length<=32);for(var u=0;u<o.length;++u)a(o[u]>=0);for(var B=0,u=0;u<(N?N.length:0);++u)a(N[u]in S),B|=S[N[u]];var H=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),U=y(b.exports.meshopt_simplifyWithUpdate,H,t.length,m,m.length/l,l*4,j,k*4,new Float32Array(o),x,O,z,B);if(t!==H)for(var u=0;u<U[0];++u)t[u]=H[u];return U},getScale:function(t,m){return a(t instanceof Float32Array),a(t.length%m==0),a(m>=3),I(b.exports.meshopt_simplifyScale,t,t.length/m,m*4)},simplifyPoints:function(t,m,l,j,k,o){return a(t instanceof Float32Array),a(t.length%m==0),a(m>=3),a(l>=0&&l<=t.length/m),j?(a(j instanceof Float32Array),a(j.length%k==0),a(k>=3),a(t.length/m==j.length/k),A(b.exports.meshopt_simplifyPoints,t,t.length/m,m*4,j,k*4,o||0,l)):A(b.exports.meshopt_simplifyPoints,t,t.length/m,m*4,void 0,0,0,l)},simplifySloppy:function(t,m,l,j,k,o){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j==null||j instanceof Uint8Array),a(j==null||j.length==m.length/l),a(k>=0&&k<=t.length),a(k%3==0),a(o>=0);var x=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),O=w(b.exports.meshopt_simplifySloppy,x,t.length,m,m.length/l,l*4,j,k,o);return O[0]=t instanceof Uint32Array?O[0]:new t.constructor(O[0]),O},simplifyPrune:function(t,m,l,j){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j>=0);var k=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),o=R(b.exports.meshopt_simplifyPrune,k,t.length,m,m.length/l,l*4,j);return o=t instanceof Uint32Array?o:new t.constructor(o),o},remesh:function(t,m,l,j,k){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j>=4&&j<=256);for(var o=0,x=0;x<(k?k.length:0);++x)a(k[x]in q),o|=q[k[x]];var O=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t);return Y(b.exports.meshopt_remesh,O,m,l*4,j,o)}}}();var wb=cb.ready;function xb(d,c){let{pos:b,nor:f,aux:e}=d,a=b.length/3;if(d.index.length<300)return d;let[h]=cb.simplify(d.index,b,3,0,c,["LockBorder","ErrorAbsolute"]),n=new Int32Array(a).fill(-1),g=0;for(let I=0;I<h.length;I++)n[h[I]]<0&&(n[h[I]]=g++);let r=new Float32Array(g*3),M=new Int8Array(g*3),i=new Uint8Array(g*4);for(let I=0;I<a;I++){let A=n[I];A<0||(r[A*3]=b[I*3],r[A*3+1]=b[I*3+1],r[A*3+2]=b[I*3+2],M[A*3]=f[I*3],M[A*3+1]=f[I*3+1],M[A*3+2]=f[I*3+2],i[A*4]=e[I*4],i[A*4+1]=e[I*4+1],i[A*4+2]=e[I*4+2],i[A*4+3]=e[I*4+3])}let y=new Uint32Array(h.length);for(let I=0;I<h.length;I++)y[I]=n[h[I]];return{...d,pos:r,nor:M,aux:i,index:y,trisBefore:d.index.length/3}}var La=[0,0,0,0];self.onmessage=async d=>{let{id:c,task:b}=d.data;try{let f=performance.now(),e,a=[];if(b.type==="heights"){let{xs:h,zs:n,j0:g,j1:r}=b,M=h.length,i=new Float32Array((r-g)*M);for(let y=g;y<r;y++){let I=n[y],A=(y-g)*M;for(let w=0;w<M;w++)i[A+w]=Sa(h[w],I)}e={h:i,j0:g,j1:r},a=[i.buffer]}else if(b.type==="maps"){let{x0:h,z0:n,dx:g,nx:r,j0:M,j1:i}=b,y=new Float32Array((i-M)*r),I=new Uint8Array((i-M)*r*4);for(let A=M;A<i;A++){let w=n+A*g;for(let R=0;R<r;R++){let Y=h+R*g,S=(A-M)*r+R;y[S]=Sa(Y,w),mb(Y,w,La),I[S*4]=Math.round(La[0]*255),I[S*4+1]=Math.round(La[1]*255),I[S*4+2]=Math.round(La[2]*255),I[S*4+3]=Math.round(La[3]*255)}}e={h:y,m:I,j0:M,j1:i},a=[y.buffer,I.buffer]}else if(b.type==="sdf"){let h=sb[b.name],n={...h,cell:h.cell[b.quality]||h.cell.high},g=Ob(n,b.ix0,b.ix1);b.simplify>0&&(await wb,g=xb(g,b.simplify)),e=g,a=[g.pos.buffer,g.nor.buffer,g.aux.buffer,g.index.buffer]}e.ms=performance.now()-f,self.postMessage({id:c,result:e},a)}catch(f){self.postMessage({id:c,error:f.message+`\n`+f.stack})}};})();\n';function yu(i=Math.max(2,Math.min(12,(navigator.hardwareConcurrency||4)-1))){let e=URL.createObjectURL(new Blob([_u],{type:"text/javascript"})),t=[],n=new Map,a=0;for(let s=0;s<i;s++){let r=new Worker(e);r.busy=0,r.onmessage=o=>{let{id:c,result:l,error:h}=o.data,d=n.get(c);n.delete(c),r.busy--,h?d.reject(new Error(h)):d.resolve(l)},r.onerror=o=>console.error("[scene] worker error",o.message),t.push(r)}return{size:i,run(s,r=[]){return new Promise((o,c)=>{let l=++a;n.set(l,{resolve:o,reject:c});let h=t[0];for(let d of t)d.busy<h.busy&&(h=d);h.busy++,h.postMessage({id:l,task:s},r)})},dispose(){t.forEach(s=>s.terminate()),URL.revokeObjectURL(e)}}}function Ft(i){let e=i>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Mn=new Uint8Array(512),Ji=new Uint8Array(512);(function(){let e=Ft(20261107),t=new Uint8Array(256);for(let n=0;n<256;n++)t[n]=n;for(let n=255;n>0;n--){let a=Math.floor(e()*(n+1)),s=t[n];t[n]=t[a],t[a]=s}for(let n=0;n<512;n++)Mn[n]=t[n&255],Ji[n]=Mn[n]%12})();var Vt=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),Hv=.5*(Math.sqrt(3)-1),Lr=(3-Math.sqrt(3))/6,Gv=1/3,ti=1/6;function wt(i,e){let t=(i+e)*Hv,n=Math.floor(i+t),a=Math.floor(e+t),s=(n+a)*Lr,r=i-(n-s),o=e-(a-s),c,l;r>o?(c=1,l=0):(c=0,l=1);let h=r-c+Lr,d=o-l+Lr,f=r-1+2*Lr,u=o-1+2*Lr,m=n&255,g=a&255,b=0,p=.5-r*r-o*o;if(p>0){let v=Ji[m+Mn[g]]*3;p*=p,b+=p*p*(Vt[v]*r+Vt[v+1]*o)}let _=.5-h*h-d*d;if(_>0){let v=Ji[m+c+Mn[g+l]]*3;_*=_,b+=_*_*(Vt[v]*h+Vt[v+1]*d)}let y=.5-f*f-u*u;if(y>0){let v=Ji[m+1+Mn[g+1]]*3;y*=y,b+=y*y*(Vt[v]*f+Vt[v+1]*u)}return 70*b}function us(i,e,t){let n=(i+e+t)*Gv,a=Math.floor(i+n),s=Math.floor(e+n),r=Math.floor(t+n),o=(a+s+r)*ti,c=i-(a-o),l=e-(s-o),h=t-(r-o),d,f,u,m,g,b;c>=l?l>=h?(d=1,f=0,u=0,m=1,g=1,b=0):c>=h?(d=1,f=0,u=0,m=1,g=0,b=1):(d=0,f=0,u=1,m=1,g=0,b=1):l<h?(d=0,f=0,u=1,m=0,g=1,b=1):c<h?(d=0,f=1,u=0,m=0,g=1,b=1):(d=0,f=1,u=0,m=1,g=1,b=0);let p=c-d+ti,_=l-f+ti,y=h-u+ti,v=c-m+2*ti,E=l-g+2*ti,w=h-b+2*ti,x=c-1+3*ti,M=l-1+3*ti,C=h-1+3*ti,T=a&255,P=s&255,N=r&255,U=0,R=.6-c*c-l*l-h*h;if(R>0){let k=Ji[T+Mn[P+Mn[N]]]*3;R*=R,U+=R*R*(Vt[k]*c+Vt[k+1]*l+Vt[k+2]*h)}let O=.6-p*p-_*_-y*y;if(O>0){let k=Ji[T+d+Mn[P+f+Mn[N+u]]]*3;O*=O,U+=O*O*(Vt[k]*p+Vt[k+1]*_+Vt[k+2]*y)}let G=.6-v*v-E*E-w*w;if(G>0){let k=Ji[T+m+Mn[P+g+Mn[N+b]]]*3;G*=G,U+=G*G*(Vt[k]*v+Vt[k+1]*E+Vt[k+2]*w)}let z=.6-x*x-M*M-C*C;if(z>0){let k=Ji[T+1+Mn[P+1+Mn[N+1]]]*3;z*=z,U+=z*z*(Vt[k]*x+Vt[k+1]*M+Vt[k+2]*C)}return 32*U}function $c(i,e,t=5,n=2.03,a=.5){let s=0,r=1,o=0;for(let c=0;c<t;c++){s+=r*wt(i,e),o+=r;let l=i*.8-e*.6,h=i*.6+e*.8;i=l*n+13.7,e=h*n+7.1,r*=a}return s/o}function Mu(i,e,t=6,n=2,a=.5){let s=0,r=1,o=1,c=0;for(let l=0;l<t;l++){let h=1-Math.abs(wt(i,e));h*=h,h*=o,o=Math.min(1,Math.max(0,h*1.6)),s+=r*h,c+=r;let d=i*.8-e*.6,f=i*.6+e*.8;i=d*n+3.1,e=f*n+17.9,r*=a}return s/c}function el(i,e,t,n=4,a=2.07,s=.5){let r=0,o=1,c=0;for(let l=0;l<n;l++)r+=o*us(i,e,t),c+=o,i=i*a+5.3,e=e*a+11.7,t=t*a+2.9,o*=s;return r/c}var va=(i,e,t)=>i<e?e:i>t?t:i;function at(i,e,t){let n=va((t-i)/(e-i),0,1);return n*n*(3-2*n)}var Cn=(i,e,t)=>i+(e-i)*t;function Wt(i,e,t){let n=va(.5+.5*(e-i)/t,0,1);return e+(i-e)*n-t*n*(1-n)}function on(i,e,t){return-Wt(-i,-e,t)}var bn=os(cs(Wc,3)),Nn=os(cs(ou,6)),Ur=os(cs(cu,3));var Hn=[0,0,0,0];function tl(i,e){let t=1.3*$c(i/170,e/170,3)+.55*wt(i/37,e/41);t+=78*at(-730,-1060,e)*(.85+.15*wt(i/90,3.1));let n=i+26*Math.sin(e/112)+14*wt(e/61,1.7);t+=64*at(-148,-285,n)*(.8+.2*wt(i/70,e/70));let a=i-34*Math.sin(e/150+1.3);t+=150*at(172,480,a)*(.72+.28*$c(i/240,e/240,3));let s=(i+8)/94,r=(e-58)/64;t+=41.5*Math.exp(-(s*s+r*r));let o=(e-82)/64;t+=36*Math.exp(-o*o)*at(0,-190,i),t+=3*$c(i/28,e/28,3)*Math.exp(-(s*s+r*r)*.5);let c=Math.max(0,Math.abs(i-30)-420),l=Math.max(0,-e-1220),h=Math.max(0,e-320),d=Math.hypot(c,l+h*.7);if(d>0){let f=at(0,1500,d);t+=f*(150+640*Mu(i/1300+7.3,e/1300-2.1,7))+f*f*160}return t}function Su(i,e){let t=1.7+.168*(-i-8)+.064*(-e-150);return t+=5.5*wt(i/96+3.1,e/96)+1.4*wt(i/37,e/33),Math.max(t,.9)}function Vv(i,e){let t=(i-In.x)/In.rx,n=(e-In.z)/In.rz,a=Math.hypot(t,n)+.12*wt(i/52,e/52);return at(1,.84,a)}function Wv(i,e){let n=Su(i,e)/In.step,a=Math.floor(n),s=n-a,r=In.step*(a+at(.86,1,s));return r+=.24*at(0,.025,s)*(1-at(.035,.075,s)),r}function jv(i,e){let t=(i+112)/168,n=(e+236)/186;return at(1.25,.9,Math.hypot(t,n)+.1*wt(i/70,e/70))}function wu(i,e){let t=tl(i,e),n=jv(i,e);n>0&&(t=Cn(t,Math.max(t,Su(i,e)-.6),n));let a=Vv(i,e);a>0&&(t=Cn(t,Wv(i,e),a));let s=Math.hypot(i-fn.x,e-fn.z);s<fn.r+22&&(t=Cn(t,fn.y,at(fn.r+22,fn.r,s)));let r=Math.hypot((i-Jt.x)*.9,e-Jt.z);r<Jt.r+30&&(t=Cn(t,Jt.y+.35*wt(i/13,e/13),at(Jt.r+30,Jt.r-12,r)));let o=Math.hypot(i-rn.x,e-rn.z);if(o<rn.r+6&&(t=Math.min(t,Cn(rn.level-1.6,t,at(rn.r-5,rn.r+6,o)))),i>Nn.minX-90&&i<Nn.maxX+90&&e>Nn.minZ-90&&e<Nn.maxZ+90){Nn.closest(i,e,Hn);let c=Hn[0],l=Hn[1]/Nn.length,h=Cn($n[0],$n[1],l),d=jc+14*at(.08,0,l)+1.5*wt(Hn[1]/30,.5),f=h+Math.max(0,c-d)*(2.5+.6*wt(Hn[1]/40,c/20))+1.2*wt(i/9,e/9)*at(d,d+6,c);t=Math.min(t,f)}if(i>Ur.minX-6&&i<Ur.maxX+6&&e>Ur.minZ-6&&e<Ur.maxZ+6){Ur.closest(i,e,Hn);let c=Hn[0];c<2.4&&(t-=.6*(1-at(.7,2.2,c)))}return t}var Dr=2,ps=(()=>{let i=Math.ceil(bn.length/Dr)+1,e=new Float32Array(i),t=new Uint8Array(i);for(let s=0;s<i;s++){let r=bn.at(s*Dr);e[s]=wu(r.x,r.z),Math.abs(r.z-Mt.z)<4&&r.x>Mt.x-Mt.span/2-6&&r.x<Mt.x+Mt.span/2+6&&(t[s]=1)}for(let s=0;s<i;s++){let r=bn.at(s*Dr),o=Math.abs(r.x-Mt.x)-Mt.span/2;Math.abs(r.z-Mt.z)<30&&o<18&&(e[s]=Cn(e[s],Mt.y-.15,at(18,4,o)))}let n=new Float32Array(i),a=4;for(let s=0;s<i;s++){let r=0,o=0;for(let c=-a;c<=a;c++){let l=Math.max(0,Math.min(i-1,s+c)),h=a+1-Math.abs(c);r+=e[l]*h,o+=h}n[s]=r/o}return{h:n,onBridge:t}})();function Xv(i){let e=i/Dr,t=Math.floor(e),n=e-t,a=ps.h[Math.min(t,ps.h.length-1)],s=ps.h[Math.min(t+1,ps.h.length-1)];return a+(s-a)*n}function nl(i,e){let t=wu(i,e);if(i>bn.minX-6&&i<bn.maxX+6&&e>bn.minZ-6&&e<bn.maxZ+6){bn.closest(i,e,Hn);let n=Hn[0];if(n<3.4){let a=Math.round(Hn[1]/Dr);ps.onBridge[Math.min(a,ps.onBridge.length-1)]||(t=Cn(t,Xv(Hn[1])-.1,at(3.4,1.7,n)))}}return t}function Eu(i,e,t,n,a){let s=[];for(let h=i;h<=e+1e-6;h+=t)s.push(h);let r=[],o=[],c=t,l=i;for(;l>-n;)c*=a,l-=c,r.push(l);for(c=t,l=s[s.length-1];l<n;)c*=a,l+=c,o.push(l);return Float32Array.from([...r.reverse(),...s,...o])}var Pn={x0:-480,z0:-1100,w:1024,d:1280};async function Au(i,e,t,n){let a=performance.now(),s=Eu(-340,380,e.terrainStep,7200,1.04),r=Eu(-1e3,150,e.terrainStep,7200,1.04),o=s.length,c=r.length,l=new Float32Array(o*c),h=Math.ceil(c/(i.size*3)),d=[];for(let k=0;k<c;k+=h){let B=Math.min(c,k+h);d.push(i.run({type:"heights",xs:s,zs:r,j0:k,j1:B}).then(V=>l.set(V.h,V.j0*o)))}let f=e.mapStep,u=Math.round(Pn.w/f),m=Math.round(Pn.d/f),g=new Float32Array(u*m),b=new Uint8Array(u*m*4),p=Math.ceil(m/(i.size*3));for(let k=0;k<m;k+=p){let B=Math.min(m,k+p);d.push(i.run({type:"maps",x0:Pn.x0,z0:Pn.z0,dx:f,nx:u,j0:k,j1:B}).then(V=>{g.set(V.h,V.j0*u),b.set(V.m,V.j0*u*4)}))}await Promise.all(d);let _=performance.now(),y=new Float32Array(o*c*3),v=new Int8Array(o*c*3);for(let k=0;k<c;k++)for(let B=0;B<o;B++){let V=k*o+B;y[V*3]=s[B],y[V*3+1]=l[V],y[V*3+2]=r[k];let j=Math.max(0,B-1),ie=Math.min(o-1,B+1),le=Math.max(0,k-1),Y=Math.min(c-1,k+1),se=(l[k*o+ie]-l[k*o+j])/(s[ie]-s[j]),ve=(l[Y*o+B]-l[le*o+B])/(r[Y]-r[le]),Pe=Math.hypot(se,1,ve);v[V*3]=Math.round(-se/Pe*127),v[V*3+1]=Math.round(1/Pe*127),v[V*3+2]=Math.round(-ve/Pe*127)}let E=new Uint32Array((o-1)*(c-1)*6),w=0;for(let k=0;k<c-1;k++)for(let B=0;B<o-1;B++){let V=k*o+B,j=V+1,ie=V+o,le=ie+1;Math.abs(l[V]-l[le])<Math.abs(l[j]-l[ie])?(E[w++]=V,E[w++]=ie,E[w++]=le,E[w++]=V,E[w++]=le,E[w++]=j):(E[w++]=V,E[w++]=ie,E[w++]=j,E[w++]=j,E[w++]=ie,E[w++]=le)}let x=new ht;x.setAttribute("position",new ot(y,3)),x.setAttribute("normal",new ot(v,3,!0)),x.setIndex(new ot(E,1)),x.computeBoundingSphere();let M=new Uint8Array(u*m*4);for(let k=0;k<m;k++)for(let B=0;B<u;B++){let V=k*u+B,j=g[k*u+Math.max(0,B-1)],ie=g[k*u+Math.min(u-1,B+1)],le=g[Math.max(0,k-1)*u+B],Y=g[Math.min(m-1,k+1)*u+B],se=(ie-j)/(2*f),ve=(Y-le)/(2*f),Pe=Math.hypot(se,1,ve);M[V*4]=Math.round((-se/Pe*.5+.5)*255),M[V*4+1]=Math.round((-ve/Pe*.5+.5)*255),M[V*4+2]=Math.round(1/Pe*255),M[V*4+3]=255}let C=(k,B,V)=>{let j=new jn(k,u,m,B,V);return j.magFilter=_t,j.minFilter=an,j.generateMipmaps=!0,j.anisotropy=8,j.needsUpdate=!0,j},T=C(b,pn,Kt),P=C(M,pn,Kt),N=new jn(g,u,m,ns,Nt);N.magFilter=N.minFilter=Ut,N.needsUpdate=!0;let U={mask:T,normal:P,height:N,x0:Pn.x0,z0:Pn.z0,w:Pn.w,d:Pn.d,nx:u,nz:m,step:f,heights:g,masks:b},R=vu(t,U,{time:n}),O=new dt(x,R);O.name="terrain",O.receiveShadow=!0,O.castShadow=e.terrainShadow,O.frustumCulled=!1;function G(k,B){let V=(k-Pn.x0)/f,j=(B-Pn.z0)/f;if(V>=0&&j>=0&&V<u-1&&j<m-1){let ie=Math.floor(V),le=Math.floor(j),Y=V-ie,se=j-le,ve=le*u+ie;return(g[ve]*(1-Y)+g[ve+1]*Y)*(1-se)+(g[ve+u]*(1-Y)+g[ve+u+1]*Y)*se}return nl(k,B)}function z(k,B,V){let j=Math.round((k-Pn.x0)/f),ie=Math.round((B-Pn.z0)/f);return j<0||ie<0||j>=u||ie>=m?0:b[(ie*u+j)*4+V]/255}return console.log(`[scene] terrain ${o}x${c} (${(o*c/1e6).toFixed(2)}M verts), heights+maps ${(_-a).toFixed(0)} ms, total ${(performance.now()-a).toFixed(0)} ms`),{mesh:O,maps:U,heightAt:G,maskAt:z,material:R}}var il=function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;X8:kdbk:kYi5ud9:du8Jjjjjbcjq9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCaAcethXaxaDfhiaOaeaoaeao6E9RhQalcl4cifcd4hLazcjdfaAfhKcbhYabaOad2fg8AhEaHh3incbh5dnawTmbaxaYcd4fRbbh5kcbh8Eazcjdfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcjdfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcjdfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaL6mva8FaLfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasaYcd4fRbbgociGPlbedrbkaATmdazaYfh8Fazcjdfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeazaYfhaazcjdfhhcbhoceh8EaKh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaQaocefgofmbka8FaXfh8FcdhoaacdfhaahaXfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8EazaYfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaKhainazcjdfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3aYclfgYad6mbkaza8AaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcjqf8Kjjjjbaok:bsesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:I9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:SBlEud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fgOavcjdfasaeaH9RaHasfae6EgAaAcsfgoc9WGgCSEhXaPaDfhQaocl4cifcd4hLavcj;cbfaCcetfhKavcj;cbfaCci2fhYavcj;cbfaCfh8AcbhEaoc;ab6h3incbh5dnawTmbaPaEcd4fRbbh5kcbh8Eavcj;cbfh8Findndndndna5a8Ecet4ciGgoc9:fPdebdkaxaQ9RaC6mwdnaCTmbavcj;cbfa8EaC2faQaC;8qbbkaQaAfhQxdkaCTmeavcj;cbfa8EaC2fcbaC;8kbxekaxaQ9RaL6moaoclVcbawEhraQaLfhocbhidna3mbaxao9Rc;Gb6mbcbhlina8FalfhidndndndndndnaQalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiczfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaicafaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaC0meaihlaxao9Rc;Fb0mbkkdnaiaC9pmbaici4hlinaxao9RcK6mwa8FaifhqdndndndndndnaQaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaoclffa8JRb:q:W:cjbfhoxikaqaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaocwffa8JRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbagaocdffa8JRb:q:W:cjbfhokalcdfhlaiczfgiaC6mbkkaohQaoTmoka8FaCfh8Fa8Ecefg8Ecl9hmbkdndndndnawTmbazaEcd4fRbbglciGPlbedwbkaCTmdaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep9Taapxeeeeeeeeeeeeeeeeghp9op9Hp9rgaa8Kp9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ughp9Abbbaladfglahaaaapmlvorlvorlvorlvorp9Ughp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp9Ughp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9AbbbaladfhlaoczfgoaC6mbxikkaCTmeaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep:neaapxebebebebebebebebghp9op:bep9rgaa8Kp:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeghp9Abbbaladfglahaaaapmlvorlvorlvorlvorp:oeghp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp:oeghp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9AbbbaladfhlaoczfgoaC6mbxdkkaCTmbaXaEfhrcbhocbalcl4gl9Rc8FGhiavaEfpbdbhhinaravcj;cbfaofpblbg8Ka8Aaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaKaofpblbg8NaYaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgaahp9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ma8PpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9AbbbaradfhraoczfgoaC6mbkkaEclfgEad6mbkdnaXavcjdf9hmbaAad2goTmbaOavcjdfao;8qbbkdnammbavaXaAcufad2fad;8qbbkaAaHfhHc9:hoaQhPaQmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkpPesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var a=WebAssembly.validate(t)?o(e):o(i),s,r=WebAssembly.instantiate(a,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),y=0;y<p.length;++y){var v=p.charCodeAt(y);_[y]=v>96?v-97:v>64?v-39:v+4}for(var E=0,y=0;y<p.length;++y)_[E++]=_[y]<60?n[_[y]]:(_[y]-60)*64+_[++y];return _.buffer.slice(0,E)}function c(p,_,y,v,E,w,x){var M=p.exports.sbrk,C=v+3&-4,T=M(C*E),P=M(w.length),N=new Uint8Array(p.exports.memory.buffer);N.set(w,P);var U=_(T,v,E,P,w.length);if(U==0&&x&&x(T,C,E),y.set(N.subarray(T,T+v*E)),M(T-M(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function u(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(y){var v=y.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function m(p){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+b.name+";"+c.toString()+b.toString(),y=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(y),E=d.length;E<p;++E)d[E]=u(v);for(var E=p;E<d.length;++E)d[E].object.postMessage({});d.length=p,URL.revokeObjectURL(v)}function g(p,_,y,v,E){for(var w=d[0],x=1;x<d.length;++x)d[x].pending<w.pending&&(w=d[x]);return new Promise(function(M,C){var T=new Uint8Array(y),P=++f;w.pending+=p,w.requests[P]={resolve:M,reject:C},w.object.postMessage({id:P,count:p,size:_,source:T,mode:v,filter:E},[T.buffer])})}function b(p){var _=p.data;self.ready.then(function(y){if(!_.id)return self.close();try{var v=new Uint8Array(_.count*_.size);c(y,y.exports[_.mode],v,_.count,_.size,_.source,y.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:v},[v.buffer])}catch(E){self.postMessage({id:_.id,count:_.count,action:"reject",value:E})}})}return{ready:r,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,_,y,v,E){c(s,s.exports.meshopt_decodeVertexBuffer,p,_,y,v,s.exports[l[E]])},decodeIndexBuffer:function(p,_,y,v){c(s,s.exports.meshopt_decodeIndexBuffer,p,_,y,v)},decodeIndexSequence:function(p,_,y,v){c(s,s.exports.meshopt_decodeIndexSequence,p,_,y,v)},decodeGltfBuffer:function(p,_,y,v,E,w){c(s,s.exports[h[E]],p,_,y,v,s.exports[l[w]])},decodeGltfBufferAsync:function(p,_,y,v,E){return d.length>0?g(p,_,y,h[v],l[E]):r.then(function(){var w=new Uint8Array(p*_);return c(s,s.exports[h[v]],w,p,_,y,s.exports[l[E]]),w})}}}();async function Tu(i,e,t){let n=performance.now(),a=i.rock==="low"?"rocks_low.bin":"rocks_high.bin",s=await fetch(Cr(a));if(!s.ok)throw new Error(`${a}: HTTP ${s.status}`);let r=+s.headers.get("content-length")||0,o;if(s.body&&r&&t){let p=s.body.getReader(),_=[],y=0;for(;;){let{done:E,value:w}=await p.read();if(E)break;_.push(w),y+=w.length,t(y/r)}o=new Uint8Array(y);let v=0;for(let E of _)o.set(E,v),v+=E.length}else o=new Uint8Array(await s.arrayBuffer());let c=performance.now();if(await il.ready,String.fromCharCode(o[0],o[1],o[2],o[3])!=="RKS1")throw new Error(a+": bad magic");let h=new DataView(o.buffer).getUint32(4,!0),d=JSON.parse(new TextDecoder().decode(o.subarray(8,8+h))),f=8+h,u=xu(e),m=new Xt;m.name="rocks";let g={},b=0;for(let p of d.volumes){let _=o.subarray(f+p.offset,f+p.offset+p.vLen),y=o.subarray(f+p.offset+p.vLen,f+p.offset+p.vLen+p.iLen),v=new Uint8Array(p.verts*16);il.decodeVertexBuffer(v,p.verts,16,_);let E=new Uint32Array(p.tris*3);il.decodeIndexBuffer(new Uint8Array(E.buffer),E.length,4,y);let w=new Uint16Array(v.buffer),x=new Int8Array(v.buffer),M=new Float32Array(p.verts*3),C=new Int8Array(p.verts*3),T=new Uint8Array(p.verts*4),[P,N,U]=p.bmin,R=p.step;for(let z=0;z<p.verts;z++)M[z*3]=P+w[z*8]*R,M[z*3+1]=N+w[z*8+1]*R,M[z*3+2]=U+w[z*8+2]*R,C[z*3]=x[z*16+8],C[z*3+1]=x[z*16+9],C[z*3+2]=x[z*16+10],T[z*4]=v[z*16+12],T[z*4+1]=v[z*16+13],T[z*4+2]=v[z*16+14],T[z*4+3]=v[z*16+15];let O=new ht;O.setAttribute("position",new ot(M,3)),O.setAttribute("normal",new ot(C,3,!0)),O.setAttribute("aux",new ot(T,4,!0)),O.setIndex(new ot(E,1)),O.computeBoundingSphere(),O.computeBoundingBox();let G=new dt(O,u);G.name="rock-"+p.name,G.castShadow=p.name!=="far",G.receiveShadow=!0,m.add(G),g[p.name]=G,b+=p.tris}return console.log(`[scene] rocks ${a} ${(o.length/1048576).toFixed(1)} MB: download ${(c-n).toFixed(0)} ms, decode ${(performance.now()-c).toFixed(0)} ms, ${(b/1e3).toFixed(0)}k tris`),{group:m,meshes:g,material:u}}function Fr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),a=new Set(Object.keys(i[0].morphAttributes)),s={},r={},o=i[0].morphTargetsRelative,c=new ht;c.morphTargetsRelative=o;let l=0;for(let h=0;h<i.length;++h){let d=i[h],f=0,u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(d.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!a.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.morphAttributes[m]),u++}if(u!==a.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0,d=[];for(let f=0;f<i.length;++f){let u=i[f].index;for(let m=0;m<u.count;++m)d.push(u.getX(m)+h);h+=i[f].attributes.position.count}c.setIndex(d)}for(let h in s){let d=Ru(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in r){let d=r[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let g=0;g<r[h].length;++g)u.push(r[h][g][f]);let m=Ru(u);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function Ru(i){let e,t,n,a=-1,s=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=h.gpuType),a!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let r=new e(s),o=new ot(r,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let f=0,u=h.count;f<u;f++)for(let m=0;m<t;m++){let g=h.getComponent(f,m);o.setComponent(f+d,m,g)}}else r.set(h.array,c);c+=h.count*t}return a!==void 0&&(o.gpuType=a),o}var Ln=new Je,Iu=new Dt,Cu=new L,Nu=new L,Pu=new un,al=class{constructor(){this.parts={},this.stack=[new Je]}get M(){return this.stack[this.stack.length-1]}push(e=0,t=0,n=0,a=0,s=1){return Ln.compose(Nu.set(e,t,n),Iu.setFromEuler(Pu.set(0,a,0)),Cu.set(s,s,s)),this.stack.push(this.M.clone().multiply(Ln)),this}pop(){return this.stack.pop(),this}add(e,t,n){let a=t.index?t.toNonIndexed():t;n&&a.applyMatrix4(n),a.applyMatrix4(this.M);for(let s of Object.keys(a.attributes))s!=="position"&&s!=="normal"&&s!=="uv"&&a.deleteAttribute(s);return a.attributes.uv||a.setAttribute("uv",new ot(new Float32Array(a.attributes.position.count*2),2)),(this.parts[e]??=[]).push(a),this}box(e,t,n,a,s,r,o,c=0){let l=qv.has(e)?"fit":Yv.has(e)?"band":"m",h=Kv(s,r,o,l);return Ln.compose(Nu.set(t,n,a),Iu.setFromEuler(Pu.set(0,c,0)),Cu.set(1,1,1)),this.add(e,h,Ln)}column(e,t,n,a,s,r,o=10,c=s*.9){let l=new Yn(c,s,r,o,1,!0);return Jv(l,s,r),Ln.makeTranslation(t,n+r/2,a),this.add(e,l,Ln)}build(e){let t=new Xt;for(let[n,a]of Object.entries(this.parts)){let s=Fr(a,!1);s.computeBoundingSphere();let r=new dt(s,e[n]);r.name="arch-"+n,r.castShadow=!0,r.receiveShadow=!0,t.add(r)}return t}},qv=new Set(["lattice","door","gatedoor","stele"]),Yv=new Set(["dougong"]);function Kv(i,e,t,n="m"){let a=new qn(i,e,t),s=a.attributes.uv,r=a.attributes.position,o=a.attributes.normal;if(n==="fit")return a;for(let c=0;c<s.count;c++){let l=r.getX(c),h=r.getY(c),d=r.getZ(c),f=Math.abs(o.getX(c)),u=Math.abs(o.getY(c));if(n==="band"){let m=f>.5?d:l;s.setXY(c,m,u>.5?.02:h/e+.5);continue}f>.5?s.setXY(c,d,h):u>.5?s.setXY(c,l,d):s.setXY(c,l,h)}return a}function Jv(i,e,t){let n=i.attributes.uv;for(let a=0;a<n.count;a++)n.setXY(a,n.getX(a)*Math.PI*2*e,n.getY(a)*t)}function Si(i,e){let{A:t,B:n,H:a,lift:s=.9,kind:r="hip",vMax:o=1,thick:c=.32,nu:l=18,nv:h=10,tile:d="roof",under:f="wood",ridge:u=!0,gableOver:m=.8}=e,g=1.55,b=r==="gable"?0:1,p=(k,B,V)=>{if(r==="gable")return s*.25*Math.pow(1-V,2)*Math.pow(Math.abs(k)/t,4);let j=t-Math.abs(k),ie=n-Math.abs(B),le=Math.max(j,ie);return s*Math.exp(-le/(.42*n))*Math.pow(1-V,2.2)},_=k=>a*Math.pow(k,g),y=k=>{let B=0,V=16;for(let j=0;j<V;j++){let ie=k*j/V,le=k*(j+1)/V;B+=Math.hypot(n*(le-ie),_(le)-_(ie))}return B},v=r==="gable"?[0,1]:[0,1,2,3],E=[],w=[],x=[],M=[],C=[];for(let k=0;k<=h;k++)C.push(y(o*k/h));let T=(k,B,V,j)=>{let ie=b*V*n,le,Y;if(k<2){let se=r==="gable"?t+m:t-ie;le=B*se,Y=(k===0?1:-1)*n*(1-V)}else{let se=n-ie;Y=B*se,le=(k===2?1:-1)*(t-ie)}return j[0]=le,j[1]=_(V)+p(le,Y,V),j[2]=Y,j},P=[0,0,0],N=[0,0,0],U=[0,0,0],R=[0,0,0],O=[],G=[],z=[];for(let k of v){let B=[],V=[],j=[],ie=[];for(let Te=0;Te<=h;Te++){let Le=o*Te/h,J=[];for(let he=0;he<=l;he++){let de=-1+2*he/l;T(k,de,Le,P);let Ae=k<2?P[0]:P[2];J.push({p:P.slice(),uv:[Ae,C[Te]]})}ie.push(J)}let le=k===0?[0,0,1]:k===1?[0,0,-1]:k===2?[1,0,0]:[-1,0,0];for(let Te=0;Te<h;Te++)for(let Le=0;Le<l;Le++){let J=ie[Te][Le],he=ie[Te][Le+1],de=ie[Te+1][Le],Ae=ie[Te+1][Le+1],me=k===1||k===2,Q=(ae,fe,xe)=>{me?(B.push(...ae.p,...xe.p,...fe.p),j.push(...ae.uv,...xe.uv,...fe.uv)):(B.push(...ae.p,...fe.p,...xe.p),j.push(...ae.uv,...fe.uv,...xe.uv))};Q(J,he,Ae),Q(J,Ae,de)}let Y=new ht;Y.setAttribute("position",new Ke(B,3)),Y.setAttribute("uv",new Ke(j,2)),Y.computeVertexNormals(),O.push(Y);let se=new Float32Array(B.length);for(let Te=0;Te<B.length;Te+=9)for(let Le=0;Le<3;Le++){let J=Te+(Le===0?0:Le===1?6:3);se[Te+Le*3]=B[J],se[Te+Le*3+1]=B[J+1]-c,se[Te+Le*3+2]=B[J+2]}let ve=new ht;ve.setAttribute("position",new ot(se,3));let Pe=new Float32Array(se.length/3*2);for(let Te=0;Te<se.length/3;Te++)Pe[Te*2]=se[Te*3]+se[Te*3+2],Pe[Te*2+1]=se[Te*3+1]*3;ve.setAttribute("uv",new ot(Pe,2)),ve.computeVertexNormals(),G.push(ve);let we=[],ke=[],ft=ie[0];for(let Te=0;Te<l;Te++){let Le=ft[Te].p,J=ft[Te+1].p,he=[Le[0],Le[1],Le[2]],de=[J[0],J[1],J[2]],Ae=[Le[0],Le[1]-c,Le[2]],me=[J[0],J[1]-c,J[2]],Q=k===1||k===2;Q?we.push(...he,...de,...me,...he,...me,...Ae):we.push(...he,...me,...de,...he,...Ae,...me);let ae=ft[Te].uv[0],fe=ft[Te+1].uv[0];Q?ke.push(ae,1,fe,1,fe,0,ae,1,fe,0,ae,0):ke.push(ae,1,fe,0,fe,1,ae,1,ae,0,fe,0)}let Be=new ht;Be.setAttribute("position",new Ke(we,3)),Be.setAttribute("uv",new Ke(ke,2)),Be.computeVertexNormals(),z.push(Be)}for(let k of O)i.add(d,k);for(let k of G)i.add(f,k);for(let k of z)i.add("trim",k);if(u&&o>=.999){let k=r==="gable"?t+m:t-n;if(k>.05){i.box("ridge",0,a+.22,0,2*k+.5,.55,.42),i.box("ridge",0,a+.55,0,2*k+.2,.14,.24);for(let B of[-1,1]){let V=[];for(let ie=0;ie<=6;ie++){let le=ie/6;V.push(new L(B*(k+.1-.5*Math.sin(le*2.6)*le),a+.3+1.25*le,0))}let j=new ki(new pi(V),8,.22,6,!1);i.add("ridge",j)}}else if(r!=="gable"){let B=new Tn(.42,10,8);Ln.makeTranslation(0,a+.45,0),i.add("gold",B,Ln);let V=new Xs(.2,1.4,8);Ln.makeTranslation(0,a+1.4,0),i.add("gold",V,Ln)}if(r!=="gable")for(let[B,V]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let j=[];for(let Y=0;Y<=10;Y++){let se=Y/10;T(0,B,se,P),P[2]*=V,j.push(new L(P[0],P[1]+.14,P[2]))}let ie=j[0];j.unshift(new L(ie.x*1+B*.35,ie.y+.45,ie.z+V*.35));let le=new ki(new pi(j),14,.17,5,!1);i.add("ridge",le)}}}function Lu(i,e){let{nx:t=3,nz:n=2,bay:a=3.6,bayZ:s=a,h:r=4.2,colR:o=.22,wallAll:c=!1,open:l=!1,balcony:h=!1}=e,d=t*a,f=n*s,u=-d/2,m=-f/2;for(let p=0;p<=t;p++)for(let _=0;_<=n;_++)p>0&&p<t&&_>0&&_<n||i.column("pillar",u+p*a,0,m+_*s,o,r,8);let g=.42;i.box("beam",0,r-g/2,f/2,d+o*2,g,.3),i.box("beam",0,r-g/2,-f/2,d+o*2,g,.3),i.box("beam",d/2,r-g/2,0,.3,g,f),i.box("beam",-d/2,r-g/2,0,.3,g,f);let b=.62;if(i.box("dougong",0,r+b/2,f/2+.12,d+.9,b,.5),i.box("dougong",0,r+b/2,-f/2-.12,d+.9,b,.5),i.box("dougong",d/2+.12,r+b/2,0,.5,b,f+.9),i.box("dougong",-d/2-.12,r+b/2,0,.5,b,f+.9),i.box("wood",0,r+b,0,d+.6,.12,f+.6),!l){for(let y=0;y<t;y++){let v=u+(y+.5)*a,E=y===Math.floor(t/2);i.box(c?"wall":E?"door":"lattice",v,(r-g)/2,f/2-.06,a-o*2,r-g,.16),i.box(c?"wall":"lattice",v,(r-g)/2,-f/2+.06,a-o*2,r-g,.16)}for(let y=0;y<n;y++){let v=m+(y+.5)*s;for(let E of[-1,1])i.box("wall",E*(d/2-.06),(r-g)*.22,v,.16,(r-g)*.44,s-o*2),i.box("lattice",E*(d/2-.06),(r-g)*.72,v,.16,(r-g)*.56,s-o*2,0)}}return h&&sl(i,d+1.6,f+1.6,0,1),{W:d,D:f,top:r+b}}function sl(i,e,t,n,a=.95,s=0){[[[-e/2,t/2],[e/2,t/2]],[[e/2,t/2],[e/2,-t/2]],[[e/2,-t/2],[-e/2,-t/2]],[[-e/2,-t/2],[-e/2,t/2]]].forEach(([c,l],h)=>{let d=Math.hypot(l[0]-c[0],l[1]-c[1]),f=Math.max(1,Math.round(d/1.4)),u=Math.atan2(l[1]-c[1],l[0]-c[0]);for(let b=0;b<=f;b++){let p=b/f,_=c[0]+(l[0]-c[0])*p,y=c[1]+(l[1]-c[1])*p;h===0&&s>0&&Math.abs(_)<s/2||i.box("pillar",_,n+a/2,y,.14,a,.14)}let m=(c[0]+l[0])/2,g=(c[1]+l[1])/2;if(h===0&&s>0){let b=(e-s)/2;for(let p of[-1,1])i.box("pillar",p*(s/2+b/2),n+a,g,b,.1,.12),i.box("pillar",p*(s/2+b/2),n+a*.45,g,b,.06,.08)}else i.box("pillar",m,n+a,g,d,.1,.12,-u),i.box("pillar",m,n+a*.45,g,d,.06,.08,-u)})}function Or(i,e,t,n,a=!0,s=3.4){if(i.box("stone",0,n/2-.02,0,e,n,t),i.box("stone",0,n+.06,0,e+.3,.14,t+.3),a&&n>.25){let r=Math.max(2,Math.round(n/.18)),o=.3;for(let c=0;c<r;c++){let l=n*(r-c)/r;i.box("stone",0,l/2,t/2+o*(c+.5),s,l,o)}}}function Zi(i,e){let{nx:t=3,nz:n=2,bay:a=3.6,h:s=4.4,floors:r=1,base:o=1,kind:c="hip",liftK:l=1,pyramid:h=!1,wallAll:d=!1}=e,f=t*a,u=n*(e.bayZ??a);Or(i,f+2.4,u+2.4,o,e.steps??!0);let m=o+.13,g=a,b=e.bayZ??a;for(let p=0;p<r;p++){i.push(0,m,0);let _=Lu(i,{nx:t,nz:n,bay:g,bayZ:b,h:p===0?s:s*.78,wallAll:d,balcony:p>0});i.pop();let y=p===r-1,v=m+_.top,E=1.5+g*.12,w=_.W/2+E,x=_.D/2+E;if(i.push(0,v,0),y?h||Math.abs(w-x)<.01?Si(i,{A:Math.max(w,x),B:Math.max(w,x),H:Math.max(w,x)*.95,lift:1*l}):Si(i,{A:Math.max(w,x),B:Math.min(w,x),H:Math.min(w,x)*.82,lift:.95*l,kind:c}):Si(i,{A:w,B:x,H:x*.8,lift:.75*l,kind:"ring",vMax:.42,nv:5}),i.pop(),m=v+(y?0:x*.8*Math.pow(.42,1.55)+.1),g*=.86,b*=.86,!y){let M=t*g+1.8,C=n*b+1.8;i.box("wood",0,m-.1,0,M,.24,C)}}return{W:f,D:u}}function Oh(i,e){let{size:t=4.2,h:n=3.6,base:a=.6,tiers:s=2}=e;Or(i,t+1.6,t+1.6,a,!1);let r=a+.13;i.push(0,r,0);let o=Lu(i,{nx:1,nz:1,bay:t,h:n,open:!0});sl(i,t+.2,t+.2,0,.7,1.6),i.pop();let c=r+o.top,l=t/2+1.5;if(s>1){i.push(0,c,0),Si(i,{A:l,B:l,H:l*.8,lift:.9,kind:"ring",vMax:.42,nv:5}),i.pop(),c+=l*.8*Math.pow(.42,1.55);let h=t*.72;i.push(0,c,0),i.box("beam",0,.6,0,h,1.2,h),i.box("dougong",0,1.45,0,h+.5,.5,h+.5),i.pop(),c+=1.7,i.push(0,c,0),Si(i,{A:h/2+1.3,B:h/2+1.3,H:(h/2+1.3)*1.05,lift:.85}),i.pop()}else i.push(0,c,0),Si(i,{A:l,B:l,H:l*.95,lift:.95}),i.pop()}function rl(i,e){let{size:t=6,floors:n=5,h:a=3.2,base:s=1.2}=e;Or(i,t+2.5,t+2.5,s,!0,2.2);let r=s+.13,o=t;for(let c=0;c<n;c++){let l=c===0?a*1.25:a;i.push(0,r,0),i.box("wall",0,l/2,0,o,l,o);for(let f of[0,Math.PI/2,Math.PI,-Math.PI/2])i.push(0,0,0,f),i.box(c===0&&f===0?"door":"lattice",0,l*.46,o/2+.02,o*.34,l*.55,.08),i.pop();i.box("dougong",0,l+.25,0,o+.5,.5,o+.5),i.pop();let h=r+l+.5,d=o/2+1.2+o*.05;i.push(0,h,0),c===n-1?Si(i,{A:d,B:d,H:d*1.1,lift:.75}):Si(i,{A:d,B:d,H:d*.7,lift:.7,kind:"ring",vMax:.4,nv:4}),i.pop(),r=h+d*.7*Math.pow(.4,1.55),o*=.86}}function Uu(i,e){let{w:t=8,d:n=5.2,h:a=3}=e;i.box("stone",0,.3,0,t+.3,.6,n+.3),i.box("plaster",0,.6+a/2,0,t,a,n),i.box("door",0,.6+1.05,n/2+.02,1.4,2.1,.06),i.box("lattice",-t*.3,.6+1.6,n/2+.02,1.2,.9,.06),i.box("lattice",t*.3,.6+1.6,n/2+.02,1.2,.9,.06);let s=n*.42,r=new ht,o=[];for(let c of[-1,1]){let l=c*t/2,h=[l,0,n/2],d=[l,0,-n/2],f=[l,s,0];c>0?o.push(...h,...d,...f):o.push(...h,...f,...d)}r.setAttribute("position",new Ke(o,3)),r.setAttribute("uv",new Ke([0,0,5,0,2.5,2,0,0,2.5,2,5,0],2)),r.computeVertexNormals(),Ln.makeTranslation(0,.6+a,0),i.add("plaster",r,Ln),i.push(0,.6+a,0),Si(i,{A:t/2,B:n/2+.9,H:s+.35,kind:"gable",lift:.5,gableOver:.6,nu:8,nv:6,thick:.22}),i.pop()}function _a(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function ya(i,e=!0,t=!0){let n=new ha(i);return e&&(n.colorSpace=Rt),t&&(n.wrapS=n.wrapT=An),n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=an,n}function ol(i,e,t,n=.08,a=1){let s=a*9301+49297,r=()=>(s=(s*9301+49297)%233280)/233280;for(let o=0;o<e*t/60;o++){let c=r()*n;i.fillStyle=r()<.5?`rgba(0,0,0,${c})`:`rgba(255,240,220,${c*.6})`,i.fillRect(r()*e,r()*t,1+r()*3,1+r()*3)}for(let o=0;o<e/6;o++){let c=r()*e,l=t*(.2+r()*.6),h=i.createLinearGradient(0,0,0,l);h.addColorStop(0,`rgba(0,0,0,${n*.8})`),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.fillRect(c,0,1+r()*2,l)}}function kh(i="lattice"){let[n,a]=_a(512,512),s=i==="door"?"#5b1d14":"#4a1a12",r=i==="door"?"#2a1a12":"#cdbf9f";a.fillStyle=s,a.fillRect(0,0,512,512);let o=4,c=512/o;for(let l=0;l<o;l++){let h=l*c,d=9,f=14,u=512*.6;a.fillStyle=r,a.fillRect(h+d,f,c-2*d,u-f),a.strokeStyle=s,a.lineWidth=4;let m=5,g=(c-2*d)/m;for(let p=1;p<m;p++)a.beginPath(),a.moveTo(h+d+p*g,f),a.lineTo(h+d+p*g,u),a.stroke();let b=Math.round((u-f)/g);for(let p=1;p<b;p++){let _=f+p*(u-f)/b;a.beginPath(),a.moveTo(h+d,_),a.lineTo(h+c-d,_),a.stroke()}a.lineWidth=2.5;for(let p=0;p<b;p+=2)for(let _=0;_<m;_+=2){let y=h+d+(_+.5)*g,v=f+(p+.5)*(u-f)/b;a.strokeRect(y-g*.25,v-g*.25,g*.5,g*.5)}a.fillStyle="#3d140d",a.fillRect(h+d,u+8,c-2*d,30),a.fillRect(h+d,u+48,c-2*d,512-u-62),a.strokeStyle="#7a3a24",a.lineWidth=3,a.strokeRect(h+d+10,u+60,c-2*d-20,512-u-86),i==="door"&&(l===1||l===2)&&(a.strokeStyle="#c9a25a",a.lineWidth=3,a.beginPath(),a.arc(h+(l===1?c-22:22),512*.52,9,0,Math.PI*2),a.stroke()),a.fillStyle="rgba(0,0,0,0.6)",a.fillRect(h,0,2,512)}return ol(a,512,512,.1,i==="door"?3:2),ya(n,!0,!1)}function Du(){let[t,n]=_a(256,128);n.fillStyle="#6e2318",n.fillRect(0,0,256,128);let a=256/2,s="#1f4f5a",r="#2f6a46",o="#d8d0b8",c="#13252a",l=[[.86,.3,60],[.6,.62,100],[.32,.92,150]];for(let[h,d,f]of l){let u=128*h;n.fillStyle=c,n.fillRect(a-f/2-2,u-13,f+4,26),n.fillStyle=h>.5?r:s,n.fillRect(a-f/2,u-11,f,22),n.fillStyle=o,n.fillRect(a-f/2,u-11,f,2),n.fillStyle=s;for(let m of[-1,0,1])n.fillRect(a+m*f/2-9,u-20,18,9)}return n.fillStyle=r,n.fillRect(a-16,114,32,14),n.fillStyle=s,n.fillRect(0,0,256,10),n.fillStyle=o,n.fillRect(0,10,256,2),ol(n,256,128,.12,5),ya(t)}function Fu(){let[t,n]=_a(256,512);n.fillStyle="#6a1a12",n.fillRect(0,0,256,512),n.fillStyle="#4a120c",n.fillRect(256/2-2,0,4,512);for(let a=0;a<9;a++)for(let s=0;s<4;s++)for(let r of[0,1]){let o=r*256/2+18+s*92/3,c=40+a*432/8,l=n.createRadialGradient(o-2,c-2,1,o,c,8);l.addColorStop(0,"#f2d68c"),l.addColorStop(1,"#7a5520"),n.fillStyle=l,n.beginPath(),n.arc(o,c,7,0,Math.PI*2),n.fill()}return ol(n,256,512,.14,7),ya(t,!0,!1)}function Ou(){let[t,n]=_a(512,1024),a=n.createLinearGradient(0,0,512,1024);a.addColorStop(0,"#6d6a63"),a.addColorStop(1,"#55524c"),n.fillStyle=a,n.fillRect(0,0,512,1024),ol(n,512,1024,.2,11),n.strokeStyle="rgba(30,28,25,0.7)",n.lineWidth=6,n.strokeRect(26,26,460,972);let s=(c,l=700)=>`${l} ${c}px "STKaiti", "KaiTi", "Kaiti SC", "\u6977\u4F53", "BiauKai", "Noto Serif CJK SC", "Songti SC", serif`;n.textAlign="center",n.textBaseline="middle";let r=(c,l,h,d,f)=>{n.font=s(d),n.fillStyle="rgba(255,250,235,0.25)",n.fillText(c,l+3,h+3),n.fillStyle=f,n.fillText(c,l,h)};return["\u767D","\u864E","\u5CAD"].forEach((c,l)=>r(c,512*.56,230+l*270,230,"#8f1f14")),[..."\u5C71\u9AD8\u5FC5\u6709\u602A\u5CAD\u5CFB\u5374\u751F\u7CBE"].forEach((c,l)=>r(c,512*.18,140+l*78,60,"#2a2724")),ya(t,!0,!1)}function ku(){let[e,t]=_a(1024,1024);t.clearRect(0,0,1024,1024);let n=1024/2,a=(o,c,l)=>{t.strokeStyle=`rgba(255,214,120,${l})`,t.lineWidth=c,t.beginPath(),t.arc(n,n,o,0,Math.PI*2),t.stroke()};a(1024*.47,10,1),a(1024*.47,34,.25),a(1024*.385,5,.9),t.font=`700 ${1024*.06}px "STKaiti", "KaiTi", "Kaiti SC", serif`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="rgba(255,226,150,1)";let s="\u5535\u561B\u5462\u53ED\u54AA\u543D",r=24;for(let o=0;o<r;o++){let c=o/r*Math.PI*2;t.save(),t.translate(n+Math.cos(c)*1024*.428,n+Math.sin(c)*1024*.428),t.rotate(c+Math.PI/2),t.fillText(s[o%6],0,0),t.restore()}return ya(e,!0,!1)}function Bu(i){let[n,a]=_a(512,1024);a.clearRect(0,0,512,1024);let s=77,r=()=>(s=s*16807%2147483647)/2147483647,o=i.width,c=i.height,l=[[.02,.01,.17,.42],[.2,.01,.18,.4],[.37,.01,.14,.36],[.52,.01,.15,.36],[.68,.01,.16,.42],[.02,.6,.19,.4],[.21,.56,.17,.44],[.38,.6,.17,.4]],h=9;for(let d=0;d<h;d++){let f=(d+.3+r()*.4)*512/h,u=1024*(.45+r()*.55);a.strokeStyle="rgba(60,50,30,0.9)",a.lineWidth=2,a.beginPath(),a.moveTo(f,0);let m=[];for(let g=0;g<u;g+=8)f+=(r()-.5)*3,m.push([f,g]),a.lineTo(f,g);a.stroke();for(let[g,b]of m){if(r()>.85-.4*(b/u))continue;let p=l[Math.floor(r()*l.length)],_=16+r()*20;a.save(),a.translate(g,b),a.rotate((r()-.5)*2.2+Math.PI);let y=.6+r()*.5;a.filter=`brightness(${y})`,a.drawImage(i,p[0]*o,p[1]*c,p[2]*o,p[3]*c,-_*.3,0,_*.6,_*1.3),a.restore()}}return a.filter="none",ya(n,!0,!1)}function zu(){let[e,t]=_a(256,256);t.clearRect(0,0,256,256);let n=91,a=()=>(n=n*16807%2147483647)/2147483647;for(let s=0;s<26;s++){let r=30+a()*196,o=30+a()*196,c=9+a()*9,l=330+a()*25,h=72+a()*16;for(let d=0;d<5;d++){let f=d/5*Math.PI*2+a();t.fillStyle=`hsla(${l},70%,${h}%,1)`,t.beginPath(),t.ellipse(r+Math.cos(f)*c*.55,o+Math.sin(f)*c*.55,c*.55,c*.38,f,0,Math.PI*2),t.fill()}t.fillStyle="#f7e27a",t.beginPath(),t.arc(r,o,c*.18,0,Math.PI*2),t.fill()}return ya(e,!0,!1)}function Qi(i,e,t,n,a,s){let r=i/n,o=e/a,c=t/s,l=Math.sqrt(r*r+o*o+c*c),h=r/n,d=o/a,f=c/s,u=Math.sqrt(h*h+d*d+f*f);return u<1e-9?-Math.min(n,a,s):l*(l-1)/u}function Bh(i,e,t,n,a,s){return Math.sqrt((i/n)**2+(e/a)**2+(t/s)**2)}function kr(i,e,t,n,a,s,r,o,c,l){let h=i-n,d=e-a,f=t-s,u=r-n,m=o-a,g=c-s,b=va((h*u+d*m+f*g)/(u*u+m*m+g*g),0,1);return Math.hypot(h-u*b,d-m*b,f-g*b)-l}function Zv(i,e,t,n,a,s,r,o,c,l,h){let d=i-n,f=e-a,u=t-s,m=r-n,g=o-a,b=c-s,p=va((d*m+f*g+u*b)/(m*m+g*g+b*b),0,1);return(Math.hypot(d-m*p,f-g*p,u-b*p)-(l+(h-l)*p))*.9}function Hu(i,e,t,n,a,s,r){let o=Math.abs(i)-n+r,c=Math.abs(e)-a+r,l=Math.abs(t)-s+r;return Math.hypot(Math.max(o,0),Math.max(c,0),Math.max(l,0))+Math.min(Math.max(o,c,l),0)-r}function Br(i,e,t,n){let a=i-n.x,s=t-n.z,r=Math.hypot(a,s);if(r>n.r0*1.6+30)return r-n.r0*1.4;let o=va((e-n.y0)/(n.y1-n.y0),0,1),c=a/(r+1e-6),l=s/(r+1e-6),h=3*l-4*l*l*l,d=c*c-l*l,f=2*l*c,u=h*d+(4*c*c*c-3*c)*f,m=.13*(h*n.c+c*n.s)+.07*u+.11*wt(c*1.4+n.seed,l*1.4+e/55),g=Cn(n.r0,n.r1,Math.pow(o,n.pow||1))*(1+m)+n.bulge*Math.sin(o*3.1),b=r-g;return b=on(b,e-n.y1-7*wt(a/22+n.seed,s/22),9),b=on(b,n.y0-40-e,4),b*.82}function Ot(i,e,t,n,a,s,r,o={}){return{x:i,z:e,r0:t,r1:n,y0:a,y1:s,seed:r,c:Math.cos(r),s:Math.sin(r),bulge:o.bulge??0,pow:o.pow??1}}function xs(i,e,t,n){let a=12*el(i/92,e/118,t/92,3);a+=3.2*us(i/10.5,e/72,t/10.5)+1.4*us(i/4.2,e/26,t/4.2);let s=e/16.5+.7*wt(i/64,t/64),r=s-Math.floor(s);return a+=1.25*at(.55,.85,r)*(1-at(.85,1,r)),a*n}var[Xu,qu,Yu]=Xi,Qv=[[.12,7.5,18],[.34,7.5,19],[.62,19,64],[.9,10,27],[1.12,9,20]],$v=[[.2,6,14],[.56,14,44],[.86,8,18]],ll=[];for(let[i,e,t]of Qv)for(let n of[-1,1]){let a=n*85*Math.sin(i),s=-26+77*Math.cos(i);ll.push({ax:a,ay:7,az:s,bx:a*1.03,by:-t,bz:s+3+t*.05,r1:e,r2:.9})}var zh=-140,cl=[];for(let i=0;i<=10;i++){let e=-1.35+2.7*i/10;cl.push([104*Math.sin(e),zh-8*(1-Math.cos(e)),-44+92*Math.cos(e)])}for(let[i,e,t]of $v)for(let n of[-1,1]){let a=n*100*Math.sin(i),s=-44+88*Math.cos(i);ll.push({ax:a,ay:zh+12,az:s,bx:a*.98,by:zh+12+t,bz:s-2,r1:e,r2:.8})}function e_(i,e,t){let n=Math.abs(i),a=Qi(i,e-150,t+84,182,128,122),s=Qi(i,e-46,t+26,116,78,106);return s=on(s,-(e+2),5),a=Wt(a,s,34),a=Wt(a,kr(n,e,t,96,80,24,174,52,-50,24),14),a=Wt(a,kr(n,e,t,16,196,46,152,178,-4,19),12),a=Wt(a,kr(n,e,t,40,128,56,104,104,40,11),9),a=Wt(a,kr(i,e,t,0,182,44,0,104,76,14),16),a}function t_(i,e,t){let n=1e9;for(let a=0;a<cl.length-1;a++){let s=cl[a],r=cl[a+1];n=Math.min(n,kr(i,e,t,s[0],s[1],s[2],r[0],r[1],r[2],21))}return n}function n_(i,e,t){let n=1e9;for(let a=0;a<ll.length;a++){let s=ll[a],r=i-s.ax;r>30||r<-30||(n=Math.min(n,Zv(i,e,t,s.ax,s.ay,s.az,s.bx,s.by,s.bz,s.r1,s.r2)))}return n}function Gh(i,e,t,n){let a=i-Xu,s=e-qu,r=t-Yu,o=-22-75e-5*a*a+11*wt(a/74,s/96);s>200&&(o-=(s-200)*.38),o+=70*at(-128,-168,s)*(1-at(110,190,Math.abs(a))),s<-168&&(o+=(-168-s)*.8);let c=(r-o)*.72,l=286-88e-5*a*a+40*wt(a/170,r/170)+18*wt(a/60,r/60);c=on(c,(s-l)*.7,30),c=on(c,-(r+540),30);let h=1e9,d=1e9;if(a>-270&&a<270&&s>-230&&s<330&&r>-345){h=e_(a,s,r),c=Wt(c,h,34);let u=Math.abs(a);if(c=on(c,-Qi(u-80,s-150,r-36,40,33,72),7),c=on(c,-Qi(a,s-94,r-66,24,31,58),6),c=on(c,-Qi(a,s+66,r+46,154,70,215),9),s<-60&&s>-210&&u<150&&r>-100){let m=t_(a,s,r);c=Wt(c,m,16),h=Math.min(h,m)}s<20&&s>-160&&u<120&&r>-70&&r<90&&(d=n_(a,s,r),c=Wt(c,d,3))}return n&&(n[0]=h,n[1]=d),c}var bs=[0,0];function i_(i,e,t){let n=Gh(i,e,t,bs),a=bs[0],s=bs[1];if(Math.abs(n)>48)return n;let r=a<30?at(26,2,a):0,o=s<12?at(9,.5,s):0;r=Math.max(r,o);let c=xs(i,e,t,1),l=1.6*el(i/26,e/26,t/26,2)+.5*us(i/7,e/7,t/7);return n-Cn(c,l*(1-o*.8),r)}function a_(i,e,t){return Gh(i,e,t,null)}function s_(i,e,t,n,a,s,r){Gh(i,e,t,bs);let o=bs[0],c=bs[1],l=o<40?at(30,4,o):0;l=Math.max(l,c<14?at(12,1,c):0),r[0]=l;let h=i-Xu,d=e-qu,f=t-Yu,u=Math.abs(h),m=Bh(h,d+66,f+46,154,70,215),g=at(1.25,1.02,m)*at(25,-95,f),b=at(1.25,1.02,Bh(u-80,d-150,f-36,40,33,72))*at(34,-12,f),p=at(1.25,1.02,Bh(h,d-94,f-66,24,31,58))*at(50,14,f);r[1]=Math.max(g,b,p),r[2]=.15*(1-l)}var Gu=[Ot(-176,-372,30,22,20,236,1.3,{bulge:4}),Ot(-196,-470,38,26,20,300,2.1),Ot(-150,-214,22,15,30,182,3.7,{bulge:3}),Ot(-222,-112,34,24,30,214,4.4),Ot(-186,-612,42,30,20,340,5.9),Ot(-238,-762,50,34,20,380,6.6),Ot(-200,-40,24,18,36,150,7.2)],gs=[[-205,112,-262,22,3,16],[-196,64,-166,16,3,12],[-150,182,-214,13,3,13]];function Ku(i,e,t){let n=-210-48*Math.sin((t+300)/165)-22*wt(t/92,.3)-Math.max(0,e-40)*.07,a=(i-n)*.78,s=252+125*at(-80,-540,t)+46*wt(t/210,i/210);a=on(a,(e-s)*.72,24),a=on(a,(t-112)*.8,30),a=on(a,-(t+955),30);for(let r=0;r<Gu.length;r++)a=Wt(a,Br(i,e,t,Gu[r]),16);for(let r=0;r<gs.length;r++){let o=gs[r],c=Hu(i-o[0]+o[3]*.4,e-o[1]+o[4]+6,t-o[2],o[3]*1.4,o[4]+6,o[5],2.5);a=Wt(a,c,4);let l=Hu(i-o[0]-2,e-o[1]-16,t-o[2],o[3]*.9,14,o[5]*.92,4);a=on(a,-l,5)}return a}function r_(i,e,t){let n=Ku(i,e,t);if(Math.abs(n)>44)return n;let a=0;for(let s=0;s<gs.length;s++){let r=gs[s],o=Math.hypot((i-r[0])/(r[3]+8),(e-r[1])/10,(t-r[2])/(r[5]+8));a=Math.max(a,at(1.6,.9,o))}return n-xs(i,e,t,1-a*.9)}var Hh=[Ot(-150,-598,40,27,0,296,1.1,{bulge:5}),Ot(-98,-662,30,21,0,238,2.7),Ot(-212,-696,50,35,0,338,3.9),Ot(-56,-726,22,15,0,186,4.8,{bulge:3}),Ot(-168,-520,26,20,0,214,5.5),Ot(-252,-568,34,26,0,276,6.3),Ot(-118,-772,34,24,10,262,7.7),Ot(-20,-792,18,13,10,150,8.9,{bulge:2})];for(let i of Hh)i.y0=tl(i.x,i.z)-6;function o_(i,e,t){let n=1e9;for(let a=0;a<Hh.length;a++)n=Wt(n,Br(i,e,t,Hh[a]),12);return Math.abs(n)>40?n:n-xs(i,e,t,.8)}var Vu=[Ot(118,-70,36,26,-44,196,2.4,{bulge:5,pow:.7}),Ot(92,-18,16,11,-10,64,3.3),Ot(150,-118,24,18,-44,128,5.1)];function c_(i,e,t){let n=1e9;for(let a=0;a<Vu.length;a++)n=Wt(n,Br(i,e,t,Vu[a]),14);return n=Wt(n,Qi(i-104,e-160,t+58,34,20,32),14),Math.abs(n)>40?n:n-xs(i,e,t,.9)}var l_=Ot(mn.x,mn.z,30,25,-48,mn.y,1.9,{bulge:3});function Ju(i,e,t){let n=Br(i,e,t,l_);n=on(n,e-mn.y,2);let a=Mt.span/2;for(let s of[-1,1]){let r=Mt.x+s*(a+9),o=Qi(i-r,e+18,t-Mt.z,20,26,22);o=on(o,e-Mt.y+.6,2),n=Wt(n,o,6)}return n}function h_(i,e,t){let n=Ju(i,e,t);if(Math.abs(n)>30)return n;let a=at(mn.y-8,mn.y-1,e);return n-xs(i,e,t,.75*(1-a*.85))}var Wu=(()=>{let i=Ft(77),e=[],t=0;for(;e.length<46&&t++<4e3;){let n=-2600+i()*5200,a=-3100+i()*2900;if(a>-1350&&n<330||a>-1700&&Math.abs(n)<520||e.some(c=>Math.hypot(c.x-n,c.z-a)<170))continue;let s=45+i()*75,r=tl(n,a)-20,o=220+i()*520;e.push(Ot(n,a,s,s*(.55+i()*.25),r,r+o,i()*10,{bulge:i()*10,pow:.8+i()*.6}))}return e})();function d_(i,e,t){let n=1e9;for(let a=0;a<Wu.length;a++){let s=Wu[a],r=i-s.x,o=t-s.z,c=r*r+o*o,l=s.r0*1.7+60;if(c>l*l){n=Math.min(n,Math.sqrt(c)-s.r0*1.5);continue}n=Wt(n,Br(i,e,t,s),20)}return Math.abs(n)>50?n:n-xs(i*.62,e*.62,t*.62,1.25)}var ms=i=>(e,t,n,a,s,r,o)=>{o[0]=0,o[1]=0,o[2]=i},ju=(()=>{let i=Ft(4242),e=[],t=(a,s,r)=>{let o=nl(a,s),c=r*(.8+i()*.5),l=r*(.45+i()*.35),h=r*(.7+i()*.5),d=i()*Math.PI*2,f=[];for(let u=0;u<4;u++){let m=i()*Math.PI*2,g=(i()-.3)*1.2;f.push([Math.cos(m)*Math.cos(g),Math.sin(g),Math.sin(m)*Math.cos(g),r*(.45+i()*.3)])}e.push({x:a,y:o-l*.35,z:s,rx:c,ry:l,rz:h,c:Math.cos(d),s:Math.sin(d),planes:f,R:Math.max(c,l,h)*1.15})},n=[[-24,26,2.6],[-31,31,1.5],[27,21,3.2],[33,27,1.7],[-14,6,1.9],[17,2,2.4],[-46,12,3.8],[48,4,3.4],[7,22,.9],[-6,28,.7],[12,30,.6]];for(let[a,s,r]of n)t(a,s,r);for(let a=0;a<26;a++){let s=bn.at(30+a*34+i()*18),r=i()<.5?-1:1,o=3.6+i()*6;t(s.x-s.tz*r*o,s.z+s.tx*r*o,.7+i()*1.8)}for(let a=0;a<22;a++){let s=Nn.at(200+a*38+i()*20),r=i()<.5?-1:1,o=6+i()*4;t(s.x-s.tz*r*o,s.z+s.tx*r*o,1.2+i()*2.5)}return e})();function f_(i,e,t){let n=1e9;for(let a=0;a<ju.length;a++){let s=ju[a],r=i-s.x,o=e-s.y,c=t-s.z,l=r*r+o*o+c*c;if(l>(s.R+6)*(s.R+6)){n=Math.min(n,Math.sqrt(l)-s.R);continue}let h=r*s.c+c*s.s,d=-r*s.s+c*s.c,f=Qi(h,o,d,s.rx,s.ry,s.rz);for(let u of s.planes)f=on(f,h*u[0]+o*u[1]+d*u[2]-u[3],s.R*.12);n=Wt(n,f,.6)}return n>2?n:n-.22*el(i/2.2,e/2.2,t/2.2,3)-.05*us(i/.6,e/.6,t/.6)}var Vh={skull:{bounds:[-480,-30,-1430,480,640,-870],cell:{high:1.3,mid:2.2,low:3.2},sdf:i_,sdfAO:a_,attrib:s_,lipschitz:3.4},left:{bounds:[-730,0,-970,-120,470,125],cell:{high:2,mid:2.8,low:4},sdf:r_,sdfAO:Ku,attrib:ms(.22),lipschitz:2},mid:{bounds:[-320,-20,-820,20,350,-470],cell:{high:1.6,mid:2.4,low:3.4},sdf:o_,attrib:ms(.32),lipschitz:2},right:{bounds:[20,-50,-190,200,225,40],cell:{high:1.1,mid:1.6,low:2.4},sdf:c_,attrib:ms(.2),lipschitz:2},gorge:{bounds:[30,-52,-600,190,14,-205],cell:{high:1,mid:1.5,low:2.2},sdf:h_,sdfAO:Ju,attrib:ms(.25),lipschitz:2},far:{bounds:[-2800,-60,-3300,2800,1e3,-220],cell:{high:7,mid:9,low:12},sdf:d_,attrib:ms(.62),lipschitz:2.2},boulders:{bounds:[-130,-50,-1e3,260,60,60],cell:{high:.3,mid:.45,low:.7},sdf:f_,attrib:ms(.14),lipschitz:2}};function ni(i,e,t=e){let n=i.clone();return n.repeat.set(1/e,1/t),n.wrapS=n.wrapT=An,n.needsUpdate=!0,n}function u_(i){let e=n=>new qt({roughness:.85,metalness:0,...n}),t=Du();return t.repeat.set(1/1.3,1),{roof:e({map:ni(i.roof_diff,2.6),normalMap:ni(i.roof_nor,2.6),color:9278360,roughness:.78,side:Ct}),wood:e({map:ni(i.planks_diff,2.2),color:7757902,side:Ct}),trim:e({map:ni(i.planks_diff,2.2),color:3811872,side:Ct}),ridge:e({map:ni(i.roof_diff,1.4),color:5396316,roughness:.75}),gold:e({color:13213776,metalness:.85,roughness:.35}),pillar:e({map:ni(i.redwood_diff,1.6),color:11549222,roughness:.5}),beam:e({map:ni(i.redwood_diff,1.6),color:7743771,roughness:.6}),dougong:e({map:t,roughness:.7}),wall:e({map:ni(i.plaster_diff,2.5),color:15260870,roughness:.92}),plaster:e({color:14209216,roughness:.92}),door:e({map:kh("door"),roughness:.7}),lattice:e({map:kh("lattice"),roughness:.75}),stone:e({map:ni(i.stonewall_diff,2.4),normalMap:ni(i.stonewall_nor,2.4),color:13947080,roughness:.9}),gatedoor:e({map:Fu(),roughness:.6}),stele:e({map:Ou(),roughness:.85})}}function p_(i,{W:e=28,D:t=14,H:n=9.5,archW:a=5.4,archH:s=7.2}){let r=a/2,o=new mi;o.moveTo(-e/2,-1.5),o.lineTo(-r,-1.5),o.lineTo(-r,s-r),o.absarc(0,s-r,r,Math.PI,0,!0),o.lineTo(r,-1.5),o.lineTo(e/2,-1.5),o.lineTo(e/2-.6,n),o.lineTo(-e/2+.6,n),o.closePath();let c=new Oi(o,{depth:t,bevelEnabled:!1,curveSegments:18});c.translate(0,0,-t/2),i.add("stone",c);let l=new mi;l.absarc(0,s-r,r+.9,Math.PI,0,!0),l.lineTo(r,s-r),l.absarc(0,s-r,r,0,Math.PI,!1),l.closePath();let h=new Oi(l,{depth:.35,bevelEnabled:!1,curveSegments:18});for(let d of[1,-1]){let f=new Je().makeTranslation(0,0,d>0?t/2:-t/2-.35);i.add("stone",h.clone(),f)}i.box("gatedoor",0,s/2-.75,0,a,s+1.5,.3);for(let d of[1,-1]){i.box("stone",0,n+.35,d*(t/2-.4),e-1.2,.7,.8);let f=Math.floor((e-2)/2.2);for(let u=0;u<=f;u++)i.box("stone",-(e-2)/2+u*(e-2)/f,n+1.15,d*(t/2-.4),1.1,.9,.8)}i.push(0,n,0),Zi(i,{nx:5,nz:2,bay:3.7,h:4.6,floors:2,base:.4,steps:!1}),i.pop()}function m_(i,{span:e=44,W:t=5.2}){let n=e+18,a=n/2,s=v=>.7*(1-(v/a)**2),r=16,o=-15,c=-1.7,l=c-o,h=(r*r+l*l)/(2*l),d=c-h,f=Math.asin((o-d)/h),u=new mi;u.moveTo(-a,-26),u.lineTo(-r,-26),u.lineTo(-r,o);let m=28;for(let v=0;v<=m;v++){let E=Math.PI-f-(Math.PI-2*f)*v/m;u.lineTo(h*Math.cos(E),d+h*Math.sin(E))}u.lineTo(r,-26),u.lineTo(a,-26);for(let v=0;v<=20;v++){let E=a-n*v/20;u.lineTo(E,s(E))}u.closePath();let g=new Oi(u,{depth:t,bevelEnabled:!1});g.translate(0,0,-t/2),i.add("stone",g);let b=new mi,p=[];for(let v=0;v<=m;v++){let E=f+(Math.PI-2*f)*v/m;p.push([Math.cos(E),Math.sin(E)])}b.moveTo(p[0][0]*(h+1.3),d+p[0][1]*(h+1.3));for(let v of p)b.lineTo(v[0]*(h+1.3),d+v[1]*(h+1.3));for(let v=p.length-1;v>=0;v--)b.lineTo(p[v][0]*h,d+p[v][1]*h);b.closePath();let _=new Oi(b,{depth:.3,bevelEnabled:!1});for(let v of[1,-1])i.add("stone",_.clone(),new Je().makeTranslation(0,0,v>0?t/2:-t/2-.3));let y=18;for(let v of[1,-1]){let E=v*(t/2-.22);for(let w=0;w<=y;w++){let x=-a+2+(n-4)*w/y;if(i.box("stone",x,s(x)+.65,E,.32,1.3,.32),i.box("stone",x,s(x)+1.38,E,.22,.2,.22),w<y){let M=-a+2+(n-4)*(w+1)/y,C=(x+M)/2,T=Math.atan2(s(M)-s(x),M-x),P=new qn(M-x-.3,.75,.14),N=new Je().compose(new L(C,s(C)+.5,E),new Dt().setFromAxisAngle(new L(0,0,1),T),new L(1,1,1));i.add("stone",P,N)}}}}function b_(i){i.box("stone",0,.35,0,2.2,.7,1.3),i.box("stone",0,2.2,0,1.6,3.2,.42),i.box("stele",0,2.2,.215,1.52,3.1,.02);let e=new Yn(.82,.82,.46,16,1,!1,-Math.PI/2,Math.PI);e.rotateX(Math.PI/2),i.add("stone",e,new Je().makeTranslation(0,3.8,0))}function Zu({T:i,heightAt:e}){let t=new al,n=[],a=(p,_,y=null)=>[p,y??e(p,_),_],s=(p,_,y,v,E,w,...x)=>{t.push(_,y,v,E),p(t,...x),t.pop(),n.push([_,v,w])},[r,o,c]=gs;s(Zi,r[0]+2,r[1],r[2]+1,Math.PI/2-.25,14,{nx:3,nz:2,bay:4.2,h:4.8,floors:3,base:.6}),s(Zi,o[0]+4,o[1],o[2],Math.PI/2-.3,9,{nx:3,nz:1,bay:3.5,bayZ:4,h:4,floors:2,base:.5}),s(Oh,c[0],c[1],c[2],.3,7,{size:4.6,h:3.6,base:.5,tiers:2}),s(p_,fn.x,fn.y-.2,fn.z,.22,20,{});{let[p,_,y]=a(-116,-352);s(Zi,p,_,y,.3,14,{nx:5,nz:3,bay:3.8,h:5,floors:1,base:1.4})}{let[p,_,y]=a(-150,-318);s(rl,p,_,y,.4,7,{size:6.4,floors:5,h:3.4})}{let[p,_,y]=a(-64,-344);s(Zi,p,_,y,.1,9,{nx:3,nz:2,bay:3.4,h:4.2,floors:2,base:.9})}s(Zi,mn.x-2,mn.y,mn.z+2,-.55,12,{nx:3,nz:2,bay:3.9,h:4.6,floors:2,base:.8}),s(Oh,mn.x+12,mn.y,mn.z-12,-.5,5,{size:3.6,h:3.2,base:.4,tiers:1});{let[p,_,y]=a(-108,-548);s(rl,p,_,y,.2,8,{size:7.5,floors:7,h:3.6})}{let[p,_,y]=a(-40,-610);s(Zi,p,_,y,.1,12,{nx:5,nz:2,bay:4,h:5,floors:2,base:1.2})}{let[p,_,y]=a(236,-470);s(rl,p,_,y,-.3,6,{size:6,floors:5,h:3.2})}let l=Ft(808),h=os(cs(Wc,3)),d=[0,0,0,0],f=[],u=0;for(;f.length<15&&u++<3e3;){let p=l()*Math.PI*2,_=10+l()*(Jt.r+6),y=Jt.x+Math.cos(p)*_*1.1,v=Jt.z+Math.sin(p)*_;if(h.closest(y,v,d),d[0]<7.5||Math.hypot(y-rn.x,v-rn.z)<rn.r+6||f.some(N=>Math.hypot(N[0]-y,N[1]-v)<11.5))continue;let E=e(y-4,v),w=e(y+4,v),x=e(y,v-4),M=e(y,v+4);if(Math.max(E,w,x,M)-Math.min(E,w,x,M)>1.6)continue;let C=h.at(d[1]),T=Math.atan2(C.x-y,C.z-v),P=Math.min(E,w,x,M)-.1;f.push([y,v]),s(Uu,y,P,v,T,6,{w:7+l()*3,d:4.8+l()*1.4,h:2.8+l()*.5})}t.push(Mt.x,Mt.y,Mt.z,0),m_(t,{span:Mt.span,W:Mt.width}),t.pop();{let[p,_,y]=a(13,10);s(b_,p,_-.25,y,.35,3)}let m=u_(i),g=t.build(m);g.name="architecture";let b=0;return g.traverse(p=>{p.isMesh&&(b+=p.geometry.attributes.position.count/3)}),console.log(`[scene] architecture ${g.children.length} meshes, ${(b/1e3).toFixed(0)}k tris, ${f.length} houses`),{group:g,placed:n,materials:m}}var vs={twig:[{u0:0,v0:0,u1:.2109,v1:1,fill:.74,px:9993},{u0:.3086,v0:.4023,u1:.6406,v1:.7813,fill:.23,px:1787},{u0:.6406,v0:.4531,u1:.9531,v1:.832,fill:.19,px:1371},{u0:.6523,v0:.043,u1:.9375,v1:.3711,fill:.16,px:916},{u0:.1914,v0:.0508,u1:.4102,v1:.3164,fill:.19,px:663},{u0:.3125,v0:.707,u1:.9844,v1:1,fill:.05,px:650},{u0:.4961,v0:.2578,u1:.6289,v1:.4023,fill:.34,px:376},{u0:.3867,v0:.2891,u1:.4609,v1:.3828,fill:.44,px:165},{u0:.5391,v0:.0977,u1:.5898,v1:.2305,fill:.4,px:140},{u0:.2383,v0:.8086,u1:.2813,v1:.9805,fill:.32,px:121},{u0:.2109,v0:.8164,u1:.2344,v1:.9805,fill:.51,px:82}],leaves:[{u0:.1602,v0:.0156,u1:.3398,v1:.3945,fill:.64,px:2658},{u0:.2109,v0:.5742,u1:.3594,v1:1,fill:.6,px:2343},{u0:.0117,v0:.625,u1:.1875,v1:.9805,fill:.6,px:2297},{u0:.0117,v0:.0195,u1:.1484,v1:.4102,fill:.64,px:2076},{u0:.6914,v0:.0195,u1:.8203,v1:.418,fill:.61,px:1883},{u0:.5117,v0:.0469,u1:.6523,v1:.3672,fill:.67,px:1833},{u0:.418,v0:.6016,u1:.5664,v1:1,fill:.5,px:1828},{u0:.3555,v0:.0313,u1:.4883,v1:.3633,fill:.62,px:1643}],grassblade:[{u0:.7617,v0:.0781,u1:.9531,v1:.6211,fill:.39,px:2502},{u0:.0898,v0:.5469,u1:.832,v1:.7734,fill:.14,px:1487},{u0:.2188,v0:.7461,u1:.4727,v1:.8945,fill:.46,px:1039},{u0:.6094,v0:.7578,u1:.8164,v1:.8633,fill:.47,px:596},{u0:.2656,v0:.8867,u1:.4688,v1:1,fill:.33,px:463},{u0:.6016,v0:.8867,u1:.7852,v1:1,fill:.36,px:452},{u0:.1406,v0:.4805,u1:.4609,v1:.6211,fill:.13,px:364},{u0:.1797,v0:.0352,u1:.3086,v1:.3438,fill:.14,px:328},{u0:.5078,v0:.0508,u1:.8242,v1:.2148,fill:.1,px:307},{u0:.7266,v0:.1563,u1:.7773,v1:.5508,fill:.28,px:305},{u0:.0156,v0:.6211,u1:.082,v1:.7734,fill:.55,px:303},{u0:.707,v0:.2109,u1:.75,v1:.5898,fill:.32,px:272},{u0:.3242,v0:.3438,u1:.4414,v1:.4727,fill:.3,px:260},{u0:.5586,v0:.5547,u1:.6602,v1:.6484,fill:.48,px:253},{u0:.4297,v0:0,u1:.5898,v1:.0664,fill:.37,px:233},{u0:.2695,v0:.2852,u1:.4883,v1:.418,fill:.13,px:228},{u0:.0703,v0:.8945,u1:.1563,v1:1,fill:.35,px:184},{u0:.6406,v0:.2891,u1:.6758,v1:.4922,fill:.42,px:146},{u0:.25,v0:.293,u1:.3594,v1:.3711,fill:.28,px:132},{u0:.2734,v0:.4258,u1:.3438,v1:.4961,fill:.49,px:125},{u0:.3164,v0:.6094,u1:.3594,v1:.6914,fill:.65,px:111},{u0:.5,v0:.8438,u1:.5508,v1:.9063,fill:.68,px:105},{u0:.4727,v0:.2461,u1:.5391,v1:.3047,fill:.5,px:97},{u0:.6797,v0:.2891,u1:.707,v1:.5156,fill:.32,px:89},{u0:.2891,v0:.2188,u1:.3594,v1:.2852,fill:.36,px:86},{u0:.8477,v0:.0313,u1:.8828,v1:.1641,fill:.33,px:74},{u0:.5469,v0:.3398,u1:.6133,v1:.4375,fill:.21,px:71},{u0:.3984,v0:.4492,u1:.4609,v1:.5039,fill:.41,px:69},{u0:.832,v0:.6172,u1:.9336,v1:.6602,fill:.31,px:66},{u0:.1289,v0:.2617,u1:.1914,v1:.3086,fill:.46,px:65}],fern:[{u0:.3086,v0:.0195,u1:.4609,v1:.7656,fill:.41,px:2861},{u0:.0859,v0:.1094,u1:.2383,v1:.918,fill:.38,px:2855},{u0:.7188,v0:.1055,u1:.8398,v1:.7031,fill:.45,px:1985},{u0:.5391,v0:.0234,u1:.6641,v1:.5039,fill:.39,px:1403},{u0:.5078,v0:.5078,u1:.6328,v1:.9688,fill:.4,px:1382},{u0:.7188,v0:.6875,u1:.832,v1:.7695,fill:.33,px:167},{u0:.7539,v0:.7852,u1:.8203,v1:.8516,fill:.29,px:66}],flower:[{u0:0,v0:0,u1:1,v1:1,fill:.92,px:60195},{u0:.3867,v0:.8633,u1:.4805,v1:.9258,fill:.61,px:188},{u0:.0859,v0:.8594,u1:.168,v1:.9219,fill:.68,px:182},{u0:.6289,v0:.8555,u1:.7188,v1:.9375,fill:.4,px:158},{u0:.1289,v0:.7773,u1:.2148,v1:.8281,fill:.69,px:151},{u0:.2148,v0:.832,u1:.2656,v1:.9219,fill:.65,px:151},{u0:.3828,v0:.7969,u1:.4375,v1:.8672,fill:.58,px:112},{u0:.3008,v0:.8711,u1:.3477,v1:.9414,fill:.63,px:100}]};var tp=(i,e)=>[e.u0*i.width,e.v0*i.height,(e.u1-e.u0)*i.width,(e.v1-e.v0)*i.height];function jh(i){let e=new ha(i);return e.colorSpace=Rt,e.anisotropy=8,e}function x_(i){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),a=Ft(5),s=[1,2,3,4,6].map(r=>vs.twig[r]);for(let r=0;r<34;r++){let o=s[Math.floor(a()*s.length)],[c,l,h,d]=tp(i,o),f=a()*Math.PI*2,u=a()*512*.22,m=512*(.32+a()*.2);n.save(),n.translate(512/2+Math.cos(f)*u,512/2+Math.sin(f)*u*.8),n.rotate(f+Math.PI/2+(a()-.5)*.8),n.filter=`brightness(${.55+a()*.6}) saturate(1.1)`,n.drawImage(i,c,l,h,d,-m/2,-m*.9,m,m*d/h),n.restore()}return jh(t)}function Qu(i,e=0){let n=document.createElement("canvas");n.width=n.height=512;let a=n.getContext("2d"),s=Ft(11+e);for(let r=0;r<120;r++){let o=vs.leaves[Math.floor(s()*vs.leaves.length)],[c,l,h,d]=tp(i,o),f=s()*Math.PI*2,u=Math.sqrt(s())*512*.36,m=512*(.07+s()*.05)*(.7+u/512);a.save(),a.translate(512/2+Math.cos(f)*u,512/2+Math.sin(f)*u),a.rotate(f+Math.PI/2+(s()-.5)*1.2),a.filter=`brightness(${.45+u/512*1.1+s()*.25}) hue-rotate(${e+(s()-.5)*16}deg)`,a.drawImage(i,c,l,h,d,-m*.35,-m,m*.7,m*.7*d/h),a.restore()}return jh(n)}function v_(){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d"),a=Ft(23);for(let s=0;s<9;s++){let r=256*(.15+a()*.7),o=256*(.08+a()*.45);n.strokeStyle=`rgba(${70+a()*30},${110+a()*30},50,1)`,n.lineWidth=2,n.beginPath(),n.moveTo(256/2+(a()-.5)*20,256),n.quadraticCurveTo(r+(a()-.5)*30,(256+o)/2,r,o),n.stroke();let c=9+a()*7;for(let l=0;l<5;l++){let h=l/5*Math.PI*2+a(),d=88+a()*10;n.fillStyle=`hsl(${50+a()*20},${20+a()*20}%,${d}%)`,n.beginPath(),n.ellipse(r+Math.cos(h)*c*.55,o+Math.sin(h)*c*.5,c*.55,c*.33,h,0,Math.PI*2),n.fill()}n.fillStyle="#e8c640",n.beginPath(),n.arc(r,o,c*.2,0,Math.PI*2),n.fill()}return jh(t)}function _s(i){let e=i.length,t=new Float32Array(e*12),n=new Float32Array(e*12),a=new Float32Array(e*8),s=new Float32Array(e*12),r=new Uint32Array(e*6);i.forEach((c,l)=>{let{o:h,r:d,u:f,nrm:u,rect:m=[0,0,1,1],shade:g=1,bottom:b=!1}=c,p=b?[[-1,0],[1,0],[1,1],[-1,1]]:[[-1,-1],[1,-1],[1,1],[-1,1]],_=[[m[0],m[1]],[m[2],m[1]],[m[2],m[3]],[m[0],m[3]]];p.forEach(([y,v],E)=>{let w=(l*4+E)*3;t[w]=h[0]+d[0]*y+f[0]*v,t[w+1]=h[1]+d[1]*y+f[1]*v,t[w+2]=h[2]+d[2]*y+f[2]*v;let x=typeof u=="function"?u(t[w],t[w+1],t[w+2]):u;n[w]=x[0],n[w+1]=x[1],n[w+2]=x[2];let M=typeof g=="function"?g(v):g;s[w]=M,s[w+1]=M,s[w+2]=M,a[(l*4+E)*2]=_[E][0],a[(l*4+E)*2+1]=_[E][1]}),r.set([l*4,l*4+1,l*4+2,l*4,l*4+2,l*4+3],l*6)});let o=new ht;return o.setAttribute("position",new ot(t,3)),o.setAttribute("normal",new ot(n,3)),o.setAttribute("uv",new ot(a,2)),o.setAttribute("color",new ot(s,3)),o.setIndex(new ot(r,1)),o}var zr=i=>{let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]};function hl(i,e,t,n=6){let a=new pi(i.map(d=>new L(...d))),s=Math.max(2,i.length),r=new ki(a,s,1,n,!1),o=r.attributes.position,c=a.computeFrenetFrames(s,!1);for(let d=0;d<=s;d++){let f=d/s,u=a.getPointAt(f),m=e+(t-e)*f;for(let g=0;g<=n;g++){let b=d*(n+1)+g,p=o.getX(b)-u.x,_=o.getY(b)-u.y,y=o.getZ(b)-u.z;o.setXYZ(b,u.x+p*m,u.y+_*m,u.z+y*m)}}r.computeVertexNormals();let l=r.attributes.uv,h=a.getLength();for(let d=0;d<l.count;d++)l.setXY(d,l.getY(d)*Math.PI*2*e,l.getX(d)*h);return r}function __(i,e){let t=Ft(i),n=[],a=0,s=0,r=(t()-.5)*.25,o=t()*Math.PI*2;for(let u=0;u<=5;u++){let m=u/5;a+=Math.cos(o)*r*e/5+(t()-.5)*.5,s+=Math.sin(o)*r*e/5+(t()-.5)*.5,n.push([a,m*e,s])}let c=[hl(n,e*.028,e*.008,6)],l=[],h=[a*.6,e*.78,s*.6],d=(u,m,g)=>zr([u-h[0],(m-h[1])*1.4+2.5,g-h[2]]),f=4+Math.floor(t()*3);for(let u=0;u<f;u++){let m=.5+.5*u/(f-1),g=n[Math.min(5,Math.round(m*5))],b=u===f-1?1:2+Math.floor(t()*2);for(let p=0;p<b;p++){let _=t()*Math.PI*2,y=(u===f-1?.6:1)*e*(.22+t()*.16)*(1.15-m*.5),v=g[0]+Math.cos(_)*y,E=g[2]+Math.sin(_)*y,w=g[1]+(t()-.3)*e*.06;u<f-1&&c.push(hl([g,[(g[0]+v)/2,g[1]+e*.03,(g[2]+E)/2],[v,w,E]],e*.011,e*.004,4));let x=e*(.17+t()*.08)*(u===f-1?1.25:1);for(let C=0;C<3;C++){let T=t()*Math.PI,P=(t()-.5)*.5,N=[Math.cos(T)*x,P*x,Math.sin(T)*x],U=[-Math.sin(T)*x*.85,(t()-.5)*.4*x,Math.cos(T)*x*.85];l.push({o:[v+(t()-.5)*x*.4,w+C*x*.12,E+(t()-.5)*x*.4],r:N,u:U,nrm:d,shade:.75+.25*m+(C===2?.1:0)})}let M=t()*Math.PI;l.push({o:[v,w+x*.1,E],r:[Math.cos(M)*x,0,Math.sin(M)*x],u:[0,x*.55,0],nrm:d,shade:.8})}}return{wood:Fr(c.map(u=>u.toNonIndexed())),leaves:_s(l)}}function y_(i,e){let t=Ft(i),n=[(t()-.5)*1.2,e*.42,(t()-.5)*1.2],a=[hl([[0,0,0],[n[0]*.5,e*.2,n[2]*.5],n],e*.035,e*.018,7)],s=[n[0],e*.68,n[2]],r=e*.36;for(let h=0;h<4;h++){let d=h/4*Math.PI*2+t();a.push(hl([n,[n[0]+Math.cos(d)*r*.5,e*.62,n[2]+Math.sin(d)*r*.5],[n[0]+Math.cos(d)*r*.8,e*.8,n[2]+Math.sin(d)*r*.8]],e*.016,e*.005,5))}let o=[],c=(h,d,f)=>zr([h-s[0],d-s[1]+r*.5,f-s[2]]),l=26;for(let h=0;h<l;h++){let d=1-2*(h+.5)/l,f=Math.sqrt(1-d*d),u=h*2.39996,m=[s[0]+Math.cos(u)*f*r,s[1]+d*r*(d<0?.6:.85),s[2]+Math.sin(u)*f*r],g=r*(.55+t()*.25),b=t()*Math.PI,p=[Math.cos(b)*g,(t()-.5)*g*.6,Math.sin(b)*g],_=[-Math.sin(b)*g*(t()-.5),g*.9,Math.cos(b)*g*(t()-.5)];o.push({o:m,r:p,u:_,nrm:c,shade:.62+.38*(d*.5+.5)})}return{wood:Fr(a.map(h=>h.toNonIndexed())),leaves:_s(o)}}function M_(i,e){let t=Ft(i),n=[],a=[0,e*.45,0],s=(r,o,c)=>zr([r-a[0],o-a[1]+e*.4,c-a[2]]);for(let r=0;r<9;r++){let o=r/9*Math.PI*2+t()*.5,c=e*.32*t(),l=e*(.45+t()*.2);n.push({o:[Math.cos(o)*c,e*(.38+t()*.25),Math.sin(o)*c],r:[Math.cos(o+1.57)*l,0,Math.sin(o+1.57)*l],u:[Math.cos(o)*l*.3,l*.85,Math.sin(o)*l*.3],nrm:s,shade:.7+t()*.3})}return{leaves:_s(n)}}function $u(i,e,t,n=3,a=1){let s=Ft(a),r=[];for(let o=0;o<n;o++){let c=o/n*Math.PI+s()*.3;r.push({o:[0,0,0],r:[Math.cos(c)*e/2,0,Math.sin(c)*e/2],u:[(s()-.5)*.2*t,t,(s()-.5)*.2*t],nrm:[0,1,0],rect:i,bottom:!0,shade:l=>.72+.28*l})}return _s(r)}function $i(i,e,t={}){let n=new qt({map:i,alphaTest:t.alphaTest??.42,side:Ct,roughness:.82,metalness:0,vertexColors:!0,color:t.color??16777215,envMapIntensity:t.env??.75}),a=t.sway??1;return n.onBeforeCompile=s=>{s.uniforms.uTime=e,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
				transformed.x += w * 0.012 * h * ${a.toFixed(3)};
				transformed.z += cos( uTime * 1.3 + ph ) * 0.008 * h * ${a.toFixed(3)};
			}`),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
			normal = normalize( vNormal );`)},n.customProgramCacheKey=()=>"foliage"+a,n}function ep(i,e,t,n,a){let s=n;for(let r=0;r<90&&s>a;r++){let o=i(e,s,t);if(o<.4)return s;s-=Math.max(.5,o*.55)}return null}function Wh(i,e,t,n,a=.8){let s=i(e+a,t,n)-i(e-a,t,n),r=i(e,t+a,n)-i(e,t-a,n),o=i(e,t,n+a)-i(e,t,n-a);return zr([s,r,o])}function np({T:i,terrain:e,placed:t,time:n,Q:a}){let s=performance.now(),r=new Xt;r.name="vegetation";let o=Ft(1234),c=e.heightAt,l=(Q,ae,fe=0)=>t.some(xe=>Math.hypot(xe[0]-Q,xe[1]-ae)<xe[2]+fe),h=(Q,ae)=>Math.hypot(c(Q+1.5,ae)-c(Q-1.5,ae),c(Q,ae+1.5)-c(Q,ae-1.5))/(2*1.5),d=x_(i.twig.image),f=Qu(i.leaves.image,0),u=Qu(i.leaves.image,-25),m=zu(),g=v_(),b=new qt({map:i.bark_diff,normalMap:i.bark_nor,color:10127994,roughness:.95});i.bark_diff.repeat.set(1/1.2,1/2.5),i.bark_nor.repeat.copy(i.bark_diff.repeat);let p=$i(d,n,{color:12108964}),_=$i(f,n,{color:13030560}),y=$i(u,n,{color:11583624}),v=$i(m,n,{alphaTest:.5}),E=$i(i.grassblade,n,{color:13164688,alphaTest:.38,sway:2.2,env:.7}),w=$i(g,n,{alphaTest:.4,sway:2}),x=$i(i.fern,n,{alphaTest:.4,color:10530944,sway:1.2}),M=[101,102,103,104].map((Q,ae)=>__(Q,11+ae*2.5)),C=[201,202,203].map((Q,ae)=>y_(Q,9+ae*2.2)),T=[301,302].map((Q,ae)=>M_(Q,2.2+ae*.8)),P=new Map,N=(Q,ae,fe,xe,Ge,D=!0)=>{P.has(Q)||P.set(Q,{geo:ae,mat:fe,list:[],shadow:D}),P.get(Q).list.push([xe.clone(),Ge])},U=new Je,R=new Dt,O=new L,G=new L,z=new L(0,1,0),k=new We,B=(Q,ae,fe,xe,Ge,D)=>{if(R.setFromAxisAngle(z,D),U.compose(G.set(ae,fe,xe),R,O.set(Ge,Ge*(.9+o()*.2),Ge)),k.setHSL(.27+(o()-.5)*.06,.32+o()*.2,.4+o()*.12).multiplyScalar(2.2),Q==="pine"){let Oe=Math.floor(o()*M.length);N("pw"+Oe,M[Oe].wood,b,U,null),N("pl"+Oe,M[Oe].leaves,p,U,k.clone())}else if(Q==="broad"){let Oe=Math.floor(o()*C.length),He=o()<.5?_:y;N("bw"+Oe,C[Oe].wood,b,U,null),N("bl"+Oe+He.uuid,C[Oe].leaves,He,U,k.clone())}else if(Q==="blossom"){let Oe=Math.floor(o()*C.length);N("bw"+Oe,C[Oe].wood,b,U,null),N("bb"+Oe,C[Oe].leaves,v,U,new We(1,1,1))}else{let Oe=Math.floor(o()*T.length);N("sh"+Oe+(Q==="pinkbush"?"p":""),T[Oe].leaves,Q==="pinkbush"?v:o()<.5?_:y,U,Q==="pinkbush"?new We(1,1,1):k.clone())}},V=a.treeStep,j=e.maps,ie=0;for(let Q=j.z0+10;Q<j.z0+j.d-10;Q+=V)for(let ae=j.x0+10;ae<j.x0+j.w-10;ae+=V){let fe=ae+(o()-.5)*V*.9,xe=Q+(o()-.5)*V*.9,Ge=e.maskAt(fe,xe,3),D=e.maskAt(fe,xe,0),Oe=e.maskAt(fe,xe,1),He=e.maskAt(fe,xe,2),et=h(fe,xe),re=Ge*.85+.03;if(He>.3&&(re*=.05),D>.05||Oe>.05||et>1.3||o()>re)continue;let rt=fe-Qn.pos[0],Ne=xe-Qn.pos[2],je=Math.hypot(rt,Ne),I=Ne<0&&Math.abs(rt)<-Ne*.95+25&&je<260;if(je<30||l(fe,xe,3))continue;let S=c(fe,xe)-.3;if(I){o()<.25&&B("bush",fe,S,xe,.7+o()*.6,o()*6.28);continue}let W=o()<.6?"pine":o()<.75?"broad":"bush";if(B(W,fe,S,xe,.8+o()*.6,o()*6.28),ie++,o()<.5){let oe=o()*6.28,ee=3+o()*4,pe=fe+Math.cos(oe)*ee,ge=xe+Math.sin(oe)*ee;e.maskAt(pe,ge,0)<.05&&!l(pe,ge,1)&&B("bush",pe,c(pe,ge)-.2,ge,.8+o()*.8,o()*6.28)}}let le=0,Y=[["left",-700,-200,-950,110,22],["mid",-300,10,-810,-480,16],["skull",-460,460,-1400,-1e3,30],["right",40,190,-180,30,9],["gorge",100,180,-290,-215,8]];for(let[Q,ae,fe,xe,Ge,D]of Y){let Oe=Vh[Q];for(let He=xe;He<Ge;He+=D)for(let et=ae;et<fe;et+=D){let re=et+(o()-.5)*D,rt=He+(o()-.5)*D,Ne=ep(Oe.sdf,re,rt,Oe.bounds[4]+5,Oe.bounds[1]+20);if(Ne===null||Ne<c(re,rt)+3||Wh(Oe.sdf,re,Ne,rt)[1]<.55||l(re,rt,4))continue;let I=o()<.72?"pine":"bush";B(I,re,Ne-.5,rt,(Q==="skull"?1.3:1)*(.8+o()*.6),o()*6.28),le++;for(let S=0;S<2;S++){if(o()<.4)continue;let W=re+(o()-.5)*D,oe=rt+(o()-.5)*D,ee=ep(Oe.sdf,W,oe,Ne+30,Ne-30);ee!==null&&Wh(Oe.sdf,W,ee,oe)[1]>.55&&!l(W,oe,4)&&B(o()<.6?"pine":"bush",W,ee-.5,oe,.7+o()*.6,o()*6.28)}}}for(let[Q,ae,fe]of[[42,-136,"blossom"],[6,-168,"blossom"],[50,-182,"pinkbush"],[30,-128,"pinkbush"],[58,-150,"pinkbush"],[-6,-132,"pinkbush"],[20,-196,"blossom"]])l(Q,ae,1)||B(fe,Q,c(Q,ae)-.2,ae,fe==="blossom"?.75:1.2,o()*6.28);let ve=[2,3,4,5,16].map(Q=>vs.grassblade[Q]).map((Q,ae)=>$u([Q.u0,1-Q.v1,Q.u1,1-Q.v0],1.3*(Q.u1-Q.u0)/(Q.v1-Q.v0)*.9,1,2,40+ae)),Pe=$u([0,0,1,1],.7,.55,2,77),ke=[0,1,2,3,4].map(Q=>vs.fern[Q]).map((Q,ae)=>{let fe=[],xe=Ft(90+ae);for(let Ge=0;Ge<5;Ge++){let D=Ge/5*Math.PI*2+xe(),Oe=1.1+xe()*.4,He=Oe*(Q.u1-Q.u0)/(Q.v1-Q.v0);fe.push({o:[0,0,0],r:[Math.cos(D+1.57)*He/2,0,Math.sin(D+1.57)*He/2],u:[Math.cos(D)*Oe*.75,Oe*.65,Math.sin(D)*Oe*.75],nrm:[0,1,0],rect:[Q.u0,1-Q.v1,Q.u1,1-Q.v0],bottom:!0,shade:et=>.5+.5*et})}return _s(fe)}),ft=Qn.pos[0],Be=Qn.pos[2],Te=0,Le=0,J=a.grassStep;for(let Q=Be-360;Q<Be+60;Q+=J)for(let ae=ft-220;ae<ft+220;ae+=J){let fe=ae+(o()-.5)*J*1.6,xe=Q+(o()-.5)*J*1.6,Ge=Math.hypot(fe-ft,(xe-Be)*.8),D=Ge<60?1:Math.max(.03,(60/Ge)**2);if(o()>D)continue;let Oe=e.maskAt(fe,xe,0),He=e.maskAt(fe,xe,1),et=e.maskAt(fe,xe,2),re=e.maskAt(fe,xe,3);if(Oe>.15||He>.05||h(fe,xe)>1)continue;let rt=c(fe,xe);if(et>.25)continue;R.setFromAxisAngle(z,o()*6.28);let Ne=(.4+o()*.5)*(Ge<25?.9:1.1);if(U.compose(G.set(fe,rt-.05,xe),R,O.set(Ne,Ne*(.8+o()*.5),Ne)),re>.5&&o()<.35){let I=Math.floor(o()*ke.length);N("fern"+I,ke[I],x,U,new We().setHSL(.22,.3,.5).multiplyScalar(1.6),!1);continue}if(Math.sin(fe*.21)*Math.cos(xe*.17)+Math.sin(fe*.07+xe*.05)>.55&&Ge<140&&o()<.6)N("flower",Pe,w,U,new We(1,1,1),!1),Le++;else{let I=Math.floor(o()*ve.length);k.setHSL(.24+(o()-.5)*.05,.45+o()*.2,.5+o()*.12).multiplyScalar(2.7),N("grass"+I,ve[I],E,U,k.clone(),!1),Te++}}let he=$i(Bu(i.leaves.image),n,{alphaTest:.4,sway:.6,color:11846810}),de=[],Ae=(Q,ae,fe,xe,Ge)=>{let D=Vh[Q],Oe=ae;for(let He=0;He<80;He++){let et=D.sdf(Oe,xe,Ge);if(et<.4){let re=Wh(D.sdf,Oe,xe,Ge,1);if(Math.abs(re[1])>.35)return;let rt=5+o()*6,Ne=14+o()*22,je=Oe+re[0]*.6,I=Ge+re[2]*.6,S=zr([-re[2],0,re[0]]);de.push({o:[je,xe-Ne/2,I],r:[S[0]*rt/2,0,S[2]*rt/2],u:[re[0]*.8,Ne/2,re[2]*.8],nrm:[re[0]*.6,.8,re[2]*.6],rect:[0,0,1,1],shade:W=>.55+.45*(W*.5+.5)});return}Oe+=fe*Math.max(.4,et*.6)}};for(let Q=-640;Q<80;Q+=9){let ae=70+o()*170;o()<.55&&Ae("left",-90,-1,ae,Q+(o()-.5)*6)}for(let Q=-150;Q<20;Q+=7){let ae=40+o()*140;o()<.6&&Ae("right",10,1,ae,Q)}for(let Q=-780;Q<-480;Q+=12){let ae=50+o()*200;o()<.5&&Ae("mid",40,-1,ae,Q)}if(de.length){let Q=new dt(_s(de),he);Q.name="vines",Q.castShadow=!0,Q.receiveShadow=!0,r.add(Q)}let me=0;for(let[Q,{geo:ae,mat:fe,list:xe,shadow:Ge}]of P){let D=new Hs(ae,fe,xe.length);xe.forEach(([Oe,He],et)=>{D.setMatrixAt(et,Oe),He&&D.setColorAt(et,He)}),D.instanceMatrix.needsUpdate=!0,D.instanceColor&&(D.instanceColor.needsUpdate=!0),D.computeBoundingSphere(),D.castShadow=Ge&&fe!==b,D.receiveShadow=!0,D.name="veg-"+Q,r.add(D),me+=xe.length}return console.log(`[scene] vegetation ${ie} trees, ${le}+ cliff trees, ${Te} grass, ${Le} flowers, ${de.length} vines, ${P.size} batches, ${(performance.now()-s).toFixed(0)} ms`),{group:r}}function ip(i,e={}){let t=new qt({color:e.color??928554,roughness:.06,metalness:0,envMapIntensity:1.25});return t.onBeforeCompile=n=>{n.uniforms.uTime=i,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 flow;
varying vec2 vFlow;
varying vec3 vWP;`).replace("#include <fog_vertex>",`#include <fog_vertex>
vFlow = flow;
vWP = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
				uniform float uTime;
				varying vec2 vFlow;
				varying vec3 vWP;
				${ei}
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
			}`)},t.customProgramCacheKey=()=>"water"+(e.foam??.6)+"_"+(e.wave??.35),t}function ap({time:i,heightAt:e}){let t=new Xt;t.name="water";let n=[],a=[],s=[],r=Nn.length,o=6,c=0;for(let N=0;N<=r;N+=3){let U=Nn.at(N),R=N/r,G=$n[0]+($n[1]-$n[0])*R+2.4,z=jc+14*at(.08,0,R)+5;for(let k=0;k<=o;k++){let B=-1+2*k/o,V=U.x-U.tz*B*z,j=U.z+U.tx*B*z;n.push(V,G,j),a.push(N,B)}c++}for(let N=0;N<c-1;N++)for(let U=0;U<o;U++){let R=N*(o+1)+U,O=R+1,G=R+o+1,z=G+1;s.push(R,G,O,O,G,z)}let l=new ht;l.setAttribute("position",new Ke(n,3)),l.setAttribute("flow",new Ke(a,2)),l.setIndex(s),l.computeVertexNormals();let h=l.attributes.normal;for(let N=0;N<h.count;N++)h.setXYZ(N,0,1,0);let d=new dt(l,ip(i));d.material.side=Ct,d.receiveShadow=!0,d.name="river",t.add(d);let f=new js(rn.r+1.5,48);f.rotateX(-Math.PI/2);let u=new Float32Array(f.attributes.position.count*2);for(let N=0;N<f.attributes.position.count;N++)u[N*2]=f.attributes.position.getX(N)*3,u[N*2+1]=0;f.setAttribute("flow",new ot(u,2));let m=new dt(f,ip(i,{color:1124900,foam:0,wave:.06,rough:.16}));m.position.set(rn.x,rn.level-.2,rn.z),m.receiveShadow=!0,m.name="pond",t.add(m);let g=Nn.at(0),b=new ce(Lh.x-g.x,Lh.z-g.z).normalize(),p=[],_=null;for(let N=0;N<=70;N+=1){let U=g.x+b.x*N,R=g.z+b.y*N,O=e(U,R);p.push([U,O,R]),_===null&&O>$n[0]+50&&(_=N)}let y=Math.min(70,(_??60)+4),v=9,E=40,w=[],x=[],M=[];for(let N=0;N<=E;N++){let U=y*(1-N/E),R=g.x+b.x*U,O=g.z+b.y*U,G=e(R,O);N===E&&(G=$n[0]+2.4);let z=1.2+2.5*(N/E),k=R-b.x*z,B=O-b.y*z;for(let V of[-1,1])w.push(k-b.y*V*v/2*(1+N/E*.6),G+.4,B+b.x*V*v/2*(1+N/E*.6)),x.push(V*.5+.5,N/E)}for(let N=0;N<E;N++){let U=N*2;M.push(U,U+1,U+2,U+1,U+3,U+2)}let C=new ht;C.setAttribute("position",new Ke(w,3)),C.setAttribute("fuv",new Ke(x,2)),C.setIndex(M),C.computeVertexNormals();let T=new qt({color:15265520,roughness:.4,transparent:!0,depthWrite:!1,side:Ct,emissive:2304042});T.onBeforeCompile=N=>{N.uniforms.uTime=i,N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 fuv;
varying vec2 vFuv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFuv = fuv;`),N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec2 vFuv;
${ei}`).replace("#include <color_fragment>",`#include <color_fragment>
			{
				vec2 uv = vFuv;
				float strands = vnoise( vec2( uv.x * 26.0, uv.y * 3.0 - uTime * 1.6 ) ) * 0.6 + vnoise( vec2( uv.x * 61.0, uv.y * 7.0 - uTime * 2.7 ) ) * 0.4;
				float edge = smoothstep( 0.0, 0.18, uv.x ) * smoothstep( 1.0, 0.82, uv.x );
				float a = smoothstep( 0.3, 0.75, strands ) * edge;
				a = max( a, smoothstep( 0.82, 1.0, uv.y ) * 0.85 * edge );
				diffuseColor.a = a * 0.9;
			}`)},T.customProgramCacheKey=()=>"falls";let P=new dt(C,T);return P.name="falls",P.renderOrder=2,t.add(P),console.log(`[scene] water: river ${c} rows, falls crest ${y.toFixed(0)} m from pool`),{group:t,fallsBase:new L(g.x,$n[0]+3,g.z)}}function sp({time:i,fallsBase:e}){let t=Ft(66),n=[],[a,s,r]=Xi;for(let m=0;m<46;m++){let g=t(),b=a+(t()-.5)*260*(.5+g),p=s-70-g*150+(t()-.5)*30,_=r+20+g*150+t()*30;n.push([b,p-25*g,_,34+t()*40+g*40,.13+.12*(1-g),1,.5+t()])}for(let m=0;m<60;m++){let g=-420+t()*840,b=-760-t()*220,p=30+t()*50;n.push([g,p,b,70+t()*70,.18+t()*.12,.3,.3+t()*.5])}for(let m=0;m<14;m++)n.push([e.x+(t()-.5)*30,e.y+4+t()*18,e.z+(t()-.5)*30,12+t()*14,.3,0,1.2+t()]);for(let m=0;m<24;m++){let g=-260-t()*520;n.push([80+(t()-.5)*60,-20+t()*25,g,26+t()*24,.2,.2,.5+t()])}let o=n.length,c=new bi(2,2),l=new lr;l.index=c.index,l.setAttribute("position",c.attributes.position),l.setAttribute("uv",c.attributes.uv);let h=new Float32Array(o*4),d=new Float32Array(o*4);n.forEach((m,g)=>{h.set([m[0],m[1],m[2],m[3]],g*4),d.set([m[4],m[5],m[6],t()*100],g*4)}),l.setAttribute("iA",new ui(h,4)),l.setAttribute("iB",new ui(d,4)),l.instanceCount=o;let f=new St({name:"Mist",transparent:!0,depthWrite:!1,uniforms:{uTime:i,uAtmos:Ir.uAtmos,uGain:{value:1}},vertexShader:`
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
			${ei}
			${qc}
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
		`}),u=new dt(l,f);return u.frustumCulled=!1,u.renderOrder=5,u.name="mist",{mesh:u,material:f}}function S_(){let i=Ft(3),e=[];return{longBone:a=>{let s=[];for(let o=0;o<=10;o++){let c=o/10,l=.035+.05*Math.pow(Math.abs(c-.5)*2,4);s.push(new ce(l,(c-.5)*a))}return new nr(s,7)},skull:()=>{let a=new Tn(.12,14,10);a.scale(1,.95,1.2);let s=new Tn(.08,10,6);return s.scale(1.05,.6,1),s.translate(0,-.1,.06),[a,s]},r:i}}function rp({heightAt:i}){let e=new Xt;e.name="story";let t=new qt({color:15327951,roughness:.55,metalness:0}),n=new qt({color:1380621,roughness:1}),{longBone:a,skull:s,r}=S_(),o=bn.at(64),c=o.x-o.tz*8,l=o.z+o.tx*8,h=i(c,l),d=new Fi({map:ku(),transparent:!0,depthWrite:!1,blending:Wi,color:new We(4.5,3.2,1.4),fog:!0}),f=new dt(new bi(9,9),d);f.rotation.x=-Math.PI/2,f.position.set(c,h+.12,l),f.renderOrder=3,e.add(f);let u=new St({transparent:!0,depthWrite:!1,blending:Wi,side:Ct,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
			void main(){
				float a = pow( 1.0 - vUv.y, 3.0 ) * ( 0.55 + 0.45 * sin( vUv.x * 62.83 + uTime * 0.8 ) * sin( vUv.x * 25.13 - uTime * 0.5 ) );
				gl_FragColor = vec4( vec3( 1.0, 0.78, 0.38 ) * a * 0.16, 1.0 );
			}`}),m=new dt(new Yn(4.2,4.4,12,40,1,!0),u);m.position.set(c,h+6,l),m.renderOrder=4,e.add(m);let g=new cr(16762992,60,30,2);g.position.set(c,h+2.5,l),e.add(g);let b=[],p=(v,E,w,x)=>{let M=bn.at(v),C=M.x+M.tz*E*4.2,T=M.z-M.tx*E*4.2,P=i(C,T),N=Math.round(9*w);for(let U=0;U<N;U++){let R=a(.3+r()*.25),O=new Je().compose(new L(C+(r()-.5)*1.1*w,P+.05+r()*.08,T+(r()-.5)*1.1*w),new Dt().setFromEuler(new un(Math.PI/2+(r()-.5)*.4,r()*6.28,0,"YXZ")),new L(1,1,1));R.applyMatrix4(O),b.push(R)}for(let U of s())U.applyMatrix4(new Je().compose(new L(C+.2,P+.12,T),new Dt().setFromEuler(new un(.3,r()*6.28,.2)),new L(1,1,1))),b.push(U);if(x){let U=new L(M.tx,0,M.tz),R=new L(-M.tz,0,M.tx),O=new L(C+R.x*1.6,P+.08,T+R.z*1.6);for(let G=0;G<14;G++){let z=new Tn(.04,6,4);z.translate(O.x+U.x*G*.06,O.y,O.z+U.z*G*.06),b.push(z)}for(let G=0;G<6;G++)for(let z of[-1,1]){let k=new ir(.15,.012,4,10,Math.PI*.8);k.rotateY(z>0?0:Math.PI),k.rotateX(Math.PI/2),k.applyMatrix4(new Je().makeRotationY(Math.atan2(U.x,U.z))),k.translate(O.x+U.x*(.25+G*.07),O.y+.06,O.z+U.z*(.25+G*.07)),b.push(k)}for(let[G,z]of[[.86,.45],[.86,-.45],[-.1,.25],[-.1,-.25]]){let k=a(.75);k.applyMatrix4(new Je().compose(new L(O.x+U.x*(G-.3)+R.x*z*.5,O.y+.02,O.z+U.z*(G-.3)+R.z*z*.5),new Dt().setFromUnitVectors(new L(0,1,0),U.clone().addScaledVector(R,z*.6).normalize()),new L(1,1,1))),b.push(k)}for(let G of s())G.translate(O.x+U.x*1,O.y+.08,O.z+U.z*1),b.push(G)}};p(150,1,1,!1),p(560,-1,1.3,!1),p(bn.length-30,1,1.6,!0);let _=w_(b),y=new dt(_,t);return y.castShadow=!0,y.receiveShadow=!0,y.name="bones",e.add(y),{group:e,ring:f.position.clone(),update(v){u.uniforms.uTime.value=v,d.opacity=.75+.25*Math.sin(v*1.3),g.intensity=50+15*Math.sin(v*1.3),f.rotation.z=v*.05}}}function w_(i){let e=0,t=i.map(o=>{let c=o.index?o.toNonIndexed():o;for(let l of Object.keys(c.attributes))l!=="position"&&l!=="normal"&&c.deleteAttribute(l);return e+=c.attributes.position.count,c}),n=new Float32Array(e*3),a=new Float32Array(e*3),s=0;for(let o of t)n.set(o.attributes.position.array,s*3),a.set(o.attributes.normal.array,s*3),s+=o.attributes.position.count;let r=new ht;return r.setAttribute("position",new ot(n,3)),r.setAttribute("normal",new ot(a,3)),r.computeBoundingSphere(),r}var op={high:{dpr:1,msaa:0,shadow:1024,shadowFar:500,terrainStep:3,mapStep:2,rock:"low",terrainShadow:!1,treeStep:14,grassStep:2.2},low:{dpr:.7,msaa:0,shadow:512,shadowFar:300,terrainStep:4,mapStep:2.5,rock:"low",terrainShadow:!1,treeStep:20,grassStep:3.2}},cn=window.__baihuling={ready:!1,error:null,progress:0,active:!1,async init(i){return cn.started||(cn.started=(async()=>{let e=matchMedia("(pointer: coarse)").matches||innerWidth<820,t=new URLSearchParams(location.search).get("bq")||(e?"low":"high"),n={...op[t]||op.low,tier:t},a=new Fc({canvas:i,antialias:!1,powerPreference:"high-performance",stencil:!1});a.setPixelRatio(Math.min(devicePixelRatio,n.dpr)),a.setSize(innerWidth,innerHeight,!1),a.toneMapping=pa,a.toneMappingExposure=.9,a.shadowMap.enabled=!0,a.shadowMap.type=fa;let s=new la;s.fog=du();let r=new tn(45,innerWidth/innerHeight,.3,2200),o={value:0},c=new Vc(ls,3.1);c.position.copy(lu),c.castShadow=!0,c.shadow.mapSize.set(n.shadow,n.shadow),c.shadow.camera.near=1,c.shadow.camera.far=n.shadowFar,c.shadow.bias=-4e-4,c.shadow.normalBias=.8,s.add(c);let l=new Ya;l.onProgress=(U,R,O)=>cn.progress=.05+.35*R/O;let h=new rr(l),d=["cliff_diff","cliff_nor","bone_diff","bone_nor","grass_diff","grass_nor","forest_diff","forest_nor","trail_diff","trail_nor","sky","roof_diff","roof_nor","stonewall_diff","stonewall_nor","planks_diff","redwood_diff","plaster_diff","twig","leaves","grassblade","fern","bark_diff","bark_nor"],f=new Bc(l).setDataType(Nt).loadAsync(Cr("sky_hdr.hdr")),u=await Promise.all(d.map(U=>h.loadAsync(Cr(U+".webp").replace("assets/","assets-m/")))),m={};d.forEach((U,R)=>{m[U]=u[R];let O=["twig","leaves","grassblade","fern"].includes(U);mu(m[U],!U.endsWith("_nor"),!O)}),m.sky_hdr=await f;let g=fu(m.sky,m.sky_hdr);s.add(g.mesh),s.environment=g.buildEnv(a),s.environmentIntensity=.55;let b=yu(),[p,_]=await Promise.all([Au(b,n,m,o),Tu(n,m)]);b.dispose(),cn.progress=.8,s.add(p.mesh,_.group);let y=Zu({T:m,heightAt:p.heightAt});s.add(y.group);let v=np({T:m,terrain:p,placed:y.placed,time:o,Q:n});s.add(v.group);let E=ap({time:o,heightAt:p.heightAt});s.add(E.group);let w=sp({time:o,fallsBase:E.fallsBase});s.add(w.mesh);let x=rp({heightAt:p.heightAt});s.add(x.group);let M=pu(a,s,r,n),C=Jt.x-2,T=Jt.z+6,P=new L(C,p.heightAt(C,T),T),N=()=>{a.setSize(innerWidth,innerHeight,!1),r.aspect=innerWidth/innerHeight,r.updateProjectionMatrix(),M.setSize(innerWidth,innerHeight,Math.min(devicePixelRatio,n.dpr))};addEventListener("resize",N),N(),a.compile(s,r),Object.assign(cn,{renderer:a,scene:s,camera:r,post:M,story:x,time:o,origin:P,tier:t,ready:!0,progress:1})})().catch(e=>{cn.error=e.message,console.warn("[baihuling] "+e.message)})),cn.started},render(i,e,t=0){if(!cn.ready)return;cn.time.value+=e;let n=cn.camera;n.position.set(i.position.x,i.position.y,i.position.z).add(cn.origin),n.quaternion.set(i.quaternion.x,i.quaternion.y,i.quaternion.z,i.quaternion.w),n.fov!==i.fov&&(n.fov=i.fov,n.updateProjectionMatrix()),cn.renderer.toneMappingExposure=.9+t*1.6,cn.story.update(cn.time.value),cn.post.render(e)}};})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */

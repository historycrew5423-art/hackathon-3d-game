(()=>{var Np=0,Jd=1,Pp=2;var fs=1,Lp=2,hr=3,Ii=0,cn=1,Ot=2,aa=0,dr=1,An=2,Zd=3,Qd=4,Dp=5;var us=100,Up=101,kp=102,Op=103,Fp=104,Bp=200,zp=201,Hp=202,Gp=203,$d=204,ef=205,Vp=206,jp=207,Wp=208,qp=209,Xp=210,Kp=211,Yp=212,Jp=213,Zp=214,il=0,al=1,sl=2,Ks=3,rl=4,ol=5,cl=6,ll=7,Pl=0,Qp=1,$p=2,Ci=0,Vo=1,jo=2,Wo=3,ps=4,qo=5,Xo=6,Ko=7,Od="attached",em="detached",tf=300,ms=301,fr=302,Ll=303,Dl=304,pn=1e3,Nn=1001,Ys=1002,kt=1003,Ul=1004;var gs=1005;var St=1006,ur=1007;var Yt=1008;var ln=1009,nf=1010,af=1011,pr=1012,kl=1013,bi=1014,zt=1015,Ft=1016,Ol=1017,Fl=1018,bs=1020,sf=35902,rf=35899,of=1021,cf=1022,Tn=1023,Yi=1026,sa=1027,mr=1028,Bl=1029,Ia=1030,zl=1031;var Hl=1033,Yo=33776,Jo=33777,Zo=33778,Qo=33779,Gl=35840,Vl=35841,jl=35842,Wl=35843,ql=36196,Xl=37492,Kl=37496,Yl=37488,Jl=37489,$o=37490,Zl=37491,Ql=37808,$l=37809,eh=37810,th=37811,nh=37812,ih=37813,ah=37814,sh=37815,rh=37816,oh=37817,ch=37818,lh=37819,hh=37820,dh=37821,fh=36492,uh=36494,ph=36495,mh=36283,gh=36284,ec=36285,bh=36286,xh=2200,tm=2201,nm=2202,Za=2300,Qa=2301,tl=2302,Fd=2303,Xa=2400,Ka=2401,ao=2402,vh=2500,im=2501,lf=0,tc=1,gr=2,am=3200;var nc=0,sm=1,ra="",Et="srgb",rn="srgb-linear",so="linear",_t="srgb";var nl=7680;var rm=519,om=512,cm=513,lm=514,hf=515,hm=516,dm=517,df=518,ff=519,uf=35044,ic=35048;var pf="300 es",Yn=2e3,va=2001;function Sb(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function wb(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Js(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function fm(){let a=Js("canvas");return a.style.display="block",a}var Uu={},Zs=null;function ro(...a){let e="THREE."+a.shift();Zs?Zs("log",e,...a):console.log(e,...a)}function um(a){let e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function Qe(...a){a=um(a);let e="THREE."+a.shift();if(Zs)Zs("warn",e,...a);else{let t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function it(...a){a=um(a);let e="THREE."+a.shift();if(Zs)Zs("error",e,...a);else{let t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function Ja(...a){let e=a.join(" ");e in Uu||(Uu[e]=!0,Qe(...a))}function pm(a,e,t){return new Promise(function(n,i){function s(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:i();break;case a.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var mm={[il]:il,[sl]:cl,[rl]:rl,[Ks]:ol,[al]:al,[cl]:sl,[ll]:ll,[ol]:Ks},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ku=1234567,eo=Math.PI/180,$a=180/Math.PI;function xi(){let a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[a&255]+fn[a>>8&255]+fn[a>>16&255]+fn[a>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function pt(a,e,t){return Math.max(e,Math.min(t,a))}function mf(a,e){return(a%e+e)%e}function Eb(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function Ab(a,e,t){return a!==e?(t-a)/(e-a):0}function to(a,e,t){return(1-t)*a+t*e}function Tb(a,e,t,n){return to(a,e,1-Math.exp(-t*n))}function Rb(a,e=1){return e-Math.abs(mf(a,e*2)-e)}function Ib(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Cb(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Nb(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Pb(a,e){return a+Math.random()*(e-a)}function Lb(a){return a*(.5-Math.random())}function Db(a){a!==void 0&&(ku=a);let e=ku+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ub(a){return a*eo}function kb(a){return a*$a}function Ob(a){return a>0&&Number.isInteger(a)&&2**Math.round(Math.log2(a))===a}function Fb(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function gf(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function Bb(a,e,t,n,i){let s=Math.cos,r=Math.sin,o=s(t/2),c=r(t/2),l=s((e+n)/2),h=r((e+n)/2),d=s((e-n)/2),f=r((e-n)/2),p=s((n-e)/2),m=r((n-e)/2);switch(i){case"XYX":a.set(o*h,c*d,c*f,o*l);break;case"YZY":a.set(c*f,o*h,c*d,o*l);break;case"ZXZ":a.set(c*d,c*f,o*h,o*l);break;case"XZX":a.set(o*h,c*m,c*p,o*l);break;case"YXY":a.set(c*p,o*h,c*m,o*l);break;case"ZYZ":a.set(c*m,c*p,o*h,o*l);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yh(a){switch(a.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function bf(a,e){if(e.constructor===Float32Array)return a;let t=yh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(a/t,-1)}function xf(a,e){if(e.constructor===Float32Array)return a;let t=yh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(a*t)}var Un={DEG2RAD:eo,RAD2DEG:$a,generateUUID:xi,clamp:pt,euclideanModulo:mf,mapLinear:Eb,inverseLerp:Ab,lerp:to,damp:Tb,pingpong:Rb,smoothstep:Ib,smootherstep:Cb,randInt:Nb,randFloat:Pb,randFloatSpread:Lb,seededRandom:Db,degToRad:Ub,radToDeg:kb,isPowerOfTwo:Ob,ceilPowerOfTwo:Fb,floorPowerOfTwo:gf,setQuaternionFromProperEuler:Bb,normalize:xf,denormalize:bf},ge=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],f=s[r+0],p=s[r+1],m=s[r+2],x=s[r+3];if(d!==x||c!==f||l!==p||h!==m){let b=c*f+l*p+h*m+d*x;b<0&&(f=-f,p=-p,m=-m,x=-x,b=-b);let g=1-o;if(b<.9995){let y=Math.acos(b),_=Math.sin(y);g=Math.sin(g*y)/_,o=Math.sin(o*y)/_,c=c*g+f*o,l=l*g+p*o,h=h*g+m*o,d=d*g+x*o}else{c=c*g+f*o,l=l*g+p*o,h=h*g+m*o,d=d*g+x*o;let y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=s[r],f=s[r+1],p=s[r+2],m=s[r+3];return e[t]=o*m+h*d+c*p-l*f,e[t+1]=c*m+h*f+l*d-o*p,e[t+2]=l*m+h*p+o*f-c*d,e[t+3]=h*m-o*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),f=c(n/2),p=c(i/2),m=c(s/2);switch(r){case"XYZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"YXZ":this._x=f*h*d+l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"ZXY":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d-f*p*m;break;case"ZYX":this._x=f*h*d-l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d+f*p*m;break;case"YZX":this._x=f*h*d+l*p*m,this._y=l*p*d+f*h*m,this._z=l*h*m-f*p*d,this._w=l*h*d-f*p*m;break;case"XZY":this._x=f*h*d-l*p*m,this._y=l*p*d-f*h*m,this._z=l*h*m+f*p*d,this._w=l*h*d+f*p*m;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(r-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(r-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-s*c,this._y=i*h+r*c+s*o-n*l,this._z=s*h+r*l+n*c-i*o,this._w=r*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,r=-r,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*i-o*n),h=2*(o*t-s*i),d=2*(s*n-r*t);return this.x=t+c*l+r*d-o*h,this.y=n+c*h+o*l-s*d,this.z=i+c*d+s*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*r-n*c,this.z=n*o-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ld=new P,Ou=new Rt,ot=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,s,r,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l)}set(e,t,n,i,s,r,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],m=n[8],x=i[0],b=i[3],g=i[6],y=i[1],_=i[4],v=i[7],u=i[2],w=i[5],M=i[8];return s[0]=r*x+o*y+c*u,s[3]=r*b+o*_+c*w,s[6]=r*g+o*v+c*M,s[1]=l*x+h*y+d*u,s[4]=l*b+h*_+d*w,s[7]=l*g+h*v+d*M,s[2]=f*x+p*y+m*u,s[5]=f*b+p*_+m*w,s[8]=f*g+p*v+m*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*s*h+n*o*c+i*s*l-i*r*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*r-o*l,f=o*c-h*s,p=l*s-r*c,m=t*d+n*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=d*x,e[1]=(i*l-h*n)*x,e[2]=(o*n-i*r)*x,e[3]=f*x,e[4]=(h*t-i*c)*x,e[5]=(i*s-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(r*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-i*l,i*c,-i*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return Ja("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(hd.makeScale(e,t)),this}rotate(e){return Ja("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(hd.makeRotation(-e)),this}translate(e,t){return Ja("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},hd=new ot,Fu=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zb(){let a={enabled:!0,workingColorSpace:rn,spaces:{},convert:function(i,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===_t&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===_t&&(i.r=Xs(i.r),i.g=Xs(i.g),i.b=Xs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ra?so:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,r){return i.copy(this.spaces[r].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return a.define({[rn]:{primaries:e,whitePoint:n,transfer:so,toXYZ:Fu,fromXYZ:Bu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Fu,fromXYZ:Bu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),a}var ut=zb();function Ki(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Xs(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}var Is,hl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Is===void 0&&(Is=Js("canvas")),Is.width=e.width,Is.height=e.height;let i=Is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Js("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ki(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hb=0,Qs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(dd(i[r].image)):s.push(dd(i[r]))}else s=dd(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function dd(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?hl.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var Gb=0,fd=new P,Kt=class a extends fi{constructor(e=a.DEFAULT_IMAGE,t=a.DEFAULT_MAPPING,n=Nn,i=Nn,s=St,r=Yt,o=Tn,c=ln,l=a.DEFAULT_ANISOTROPY,h=ra){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=xi(),this.name="",this.source=new Qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(fd).x}get height(){return this.source.getSize(fd).y}get depth(){return this.source.getSize(fd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pn:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pn:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=tf;Kt.DEFAULT_ANISOTROPY=1;var yt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],m=c[9],x=c[2],b=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(m-b)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(m+b)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(p+1)/2,u=(g+1)/2,w=(h+f)/4,M=(d+x)/4,S=(m+b)/4;return _>v&&_>u?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=w/n,s=M/n):v>u?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=S/i):u<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(u),n=M/s,i=S/s),this.set(n,i,s,t),this}let y=Math.sqrt((b-m)*(b-m)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(b-m)/y,this.y=(d-x)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Kt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:St,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Qs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends dl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},oo=class extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends Kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kt,this.minFilter=kt,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xe=class a{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,s,r,o,c,l,h,d,f,p,m,x,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,r,o,c,l,h,d,f,p,m,x,b)}set(e,t,n,i,s,r,o,c,l,h,d,f,p,m,x,b){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=r,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=f,g[3]=p,g[7]=m,g[11]=x,g[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new a().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Cs.setFromMatrixColumn(e,0).length(),s=1/Cs.setFromMatrixColumn(e,1).length(),r=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=r*h,p=r*d,m=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+m*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=m+p*l,t[10]=r*c}else if(e.order==="YXZ"){let f=c*h,p=c*d,m=l*h,x=l*d;t[0]=f+x*o,t[4]=m*o-p,t[8]=r*l,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=p*o-m,t[6]=x+f*o,t[10]=r*c}else if(e.order==="ZXY"){let f=c*h,p=c*d,m=l*h,x=l*d;t[0]=f-x*o,t[4]=-r*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=r*h,t[9]=x-f*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){let f=r*h,p=r*d,m=o*h,x=o*d;t[0]=c*h,t[4]=m*l-p,t[8]=f*l+x,t[1]=c*d,t[5]=x*l+f,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){let f=r*c,p=r*l,m=o*c,x=o*l;t[0]=c*h,t[4]=x-f*d,t[8]=m*d+p,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+m,t[10]=f-x*d}else if(e.order==="XZY"){let f=r*c,p=r*l,m=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+x,t[5]=r*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vb,e,jb)}lookAt(e,t,n){let i=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ua.crossVectors(n,Bn),ua.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ua.crossVectors(n,Bn)),ua.normalize(),Ec.crossVectors(Bn,ua),i[0]=ua.x,i[4]=Ec.x,i[8]=Bn.x,i[1]=ua.y,i[5]=Ec.y,i[9]=Bn.y,i[2]=ua.z,i[6]=Ec.z,i[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],m=n[2],x=n[6],b=n[10],g=n[14],y=n[3],_=n[7],v=n[11],u=n[15],w=i[0],M=i[4],S=i[8],R=i[12],T=i[1],N=i[5],U=i[9],O=i[13],C=i[2],B=i[6],H=i[10],j=i[14],z=i[3],q=i[7],Y=i[11],ee=i[15];return s[0]=r*w+o*T+c*C+l*z,s[4]=r*M+o*N+c*B+l*q,s[8]=r*S+o*U+c*H+l*Y,s[12]=r*R+o*O+c*j+l*ee,s[1]=h*w+d*T+f*C+p*z,s[5]=h*M+d*N+f*B+p*q,s[9]=h*S+d*U+f*H+p*Y,s[13]=h*R+d*O+f*j+p*ee,s[2]=m*w+x*T+b*C+g*z,s[6]=m*M+x*N+b*B+g*q,s[10]=m*S+x*U+b*H+g*Y,s[14]=m*R+x*O+b*j+g*ee,s[3]=y*w+_*T+v*C+u*z,s[7]=y*M+_*N+v*B+u*q,s[11]=y*S+_*U+v*H+u*Y,s[15]=y*R+_*O+v*j+u*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],m=e[3],x=e[7],b=e[11],g=e[15],y=c*p-l*f,_=o*p-l*d,v=o*f-c*d,u=r*p-l*h,w=r*f-c*h,M=r*d-o*h;return t*(x*y-b*_+g*v)-n*(m*y-b*u+g*w)+i*(m*_-x*u+g*M)-s*(m*v-x*w+b*M)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(r*h-o*l)-n*(s*h-o*c)+i*(s*l-r*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],m=e[12],x=e[13],b=e[14],g=e[15],y=t*o-n*r,_=t*c-i*r,v=t*l-s*r,u=n*c-i*o,w=n*l-s*o,M=i*l-s*c,S=h*x-d*m,R=h*b-f*m,T=h*g-p*m,N=d*b-f*x,U=d*g-p*x,O=f*g-p*b,C=y*O-_*U+v*N+u*T-w*R+M*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/C;return e[0]=(o*O-c*U+l*N)*B,e[1]=(i*U-n*O-s*N)*B,e[2]=(x*M-b*w+g*u)*B,e[3]=(f*w-d*M-p*u)*B,e[4]=(c*T-r*O-l*R)*B,e[5]=(t*O-i*T+s*R)*B,e[6]=(b*v-m*M-g*_)*B,e[7]=(h*M-f*v+p*_)*B,e[8]=(r*U-o*T+l*S)*B,e[9]=(n*T-t*U-s*S)*B,e[10]=(m*w-x*v+g*y)*B,e[11]=(d*v-h*w-p*y)*B,e[12]=(o*R-r*N-c*S)*B,e[13]=(t*N-n*R+i*S)*B,e[14]=(x*_-m*u-b*y)*B,e[15]=(h*u-d*_+f*y)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,c=e.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*r,0,l*c-i*o,h*c+i*r,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,r=t._y,o=t._z,c=t._w,l=s+s,h=r+r,d=o+o,f=s*l,p=s*h,m=s*d,x=r*h,b=r*d,g=o*d,y=c*l,_=c*h,v=c*d,u=n.x,w=n.y,M=n.z;return i[0]=(1-(x+g))*u,i[1]=(p+v)*u,i[2]=(m-_)*u,i[3]=0,i[4]=(p-v)*w,i[5]=(1-(f+g))*w,i[6]=(b+y)*w,i[7]=0,i[8]=(m+_)*M,i[9]=(b-y)*M,i[10]=(1-(f+x))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=Cs.set(i[0],i[1],i[2]).length(),o=Cs.set(i[4],i[5],i[6]).length(),c=Cs.set(i[8],i[9],i[10]).length();s<0&&(r=-r),li.copy(this);let l=1/r,h=1/o,d=1/c;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=d,li.elements[9]*=d,li.elements[10]*=d,t.setFromRotationMatrix(li),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,r,o=Yn,c=!1){let l=this.elements,h=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),p=(n+i)/(n-i),m,x;if(c)m=s/(r-s),x=r*s/(r-s);else if(o===Yn)m=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(o===va)m=-r/(r-s),x=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=Yn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),p=-(n+i)/(n-i),m,x;if(c)m=1/(r-s),x=r/(r-s);else if(o===Yn)m=-2/(r-s),x=-(r+s)/(r-s);else if(o===va)m=-1/(r-s),x=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Cs=new P,li=new Xe,Vb=new P(0,0,0),jb=new P(1,1,1),ua=new P,Ec=new P,Bn=new P,zu=new Xe,Hu=new Rt,Sn=class a{constructor(e=0,t=0,n=0,i=a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wb=0,Gu=new P,Ns=new Rt,zi=new Xe,Ac=new P,Hr=new P,qb=new P,Xb=new Rt,Vu=new P(1,0,0),ju=new P(0,1,0),Wu=new P(0,0,1),qu={type:"added"},Kb={type:"removed"},Ps={type:"childadded",child:null},ud={type:"childremoved",child:null},wt=class a extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=a.DEFAULT_UP.clone();let e=new P,t=new Sn,n=new Rt,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new ot}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=a.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=a.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(ju,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(ju,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ac.copy(e):Ac.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Hr,Ac,this.up):zi.lookAt(Ac,Hr,this.up),this.quaternion.setFromRotationMatrix(zi),i&&(zi.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(zi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qu),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kb),ud.child=e,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qu),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,qb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,Xb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),d=r(e.shapes),f=r(e.skeletons),p=r(e.animations),m=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function r(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};wt.DEFAULT_UP=new P(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var It=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yb={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let x of e.hand.values()){let b=t.getJointPose(x,n),g=this._getHandJoint(l,x);b!==null&&(g.matrix.fromArray(b.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=b.radius),g.visible=b!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&f>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yb)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new It;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pa={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function pd(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=mf(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=pd(r,s,e+1/3),this.g=pd(r,s,e),this.b=pd(r,s,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let n=gm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return ut.workingToColorSpace(un.copy(this),e),Math.round(pt(un.r*255,0,255))*65536+Math.round(pt(un.g*255,0,255))*256+Math.round(pt(un.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(un.copy(this),t);let n=un.r,i=un.g,s=un.b,r=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+r)/2;if(o===r)c=0,l=0;else{let d=r-o;switch(l=h<=.5?d/(r+o):d/(2-r-o),r){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Et){ut.workingToColorSpace(un.copy(this),e);let t=un.r,n=un.g,i=un.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pa),this.setHSL(pa.h+e,pa.s+t,pa.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pa),e.getHSL(Tc);let n=to(pa.h,Tc.h,t),i=to(pa.s,Tc.s,t),s=to(pa.l,Tc.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new He;He.NAMES=gm;var co=class a{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},es=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new P,Hi=new P,md=new P,Gi=new P,Ls=new P,Ds=new P,Xu=new P,gd=new P,bd=new P,xd=new P,vd=new yt,yd=new yt,Md=new yt,qi=class a{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hi.subVectors(e,t),i.cross(hi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hi.subVectors(i,t),Hi.subVectors(n,t),md.subVectors(e,t);let r=hi.dot(hi),o=hi.dot(Hi),c=hi.dot(md),l=Hi.dot(Hi),h=Hi.dot(md),d=r*l-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,p=(l*c-o*h)*f,m=(r*h-o*c)*f;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,n,i,s,r,o,c){return this.getBarycoord(e,t,n,i,Gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gi.x),c.addScaledVector(r,Gi.y),c.addScaledVector(o,Gi.z),c)}static getInterpolatedAttribute(e,t,n,i,s,r){return vd.setScalar(0),yd.setScalar(0),Md.setScalar(0),vd.fromBufferAttribute(e,t),yd.fromBufferAttribute(e,n),Md.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(vd,s.x),r.addScaledVector(yd,s.y),r.addScaledVector(Md,s.z),r}static isFrontFacing(e,t,n,i){return hi.subVectors(n,t),Hi.subVectors(e,t),hi.cross(Hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),hi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return a.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return a.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return a.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return a.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return a.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,o;Ls.subVectors(i,n),Ds.subVectors(s,n),gd.subVectors(e,n);let c=Ls.dot(gd),l=Ds.dot(gd);if(c<=0&&l<=0)return t.copy(n);bd.subVectors(e,i);let h=Ls.dot(bd),d=Ds.dot(bd);if(h>=0&&d<=h)return t.copy(i);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return r=c/(c-h),t.copy(n).addScaledVector(Ls,r);xd.subVectors(e,s);let p=Ls.dot(xd),m=Ds.dot(xd);if(m>=0&&p<=m)return t.copy(s);let x=p*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Ds,o);let b=h*m-p*d;if(b<=0&&d-h>=0&&p-m>=0)return Xu.subVectors(s,i),o=(d-h)/(d-h+(p-m)),t.copy(i).addScaledVector(Xu,o);let g=1/(b+x+f);return r=x*g,o=f*g,t.copy(n).addScaledVector(Ls,r).addScaledVector(Ds,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,di):di.fromBufferAttribute(s,r),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rc.copy(n.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gr),Ic.subVectors(this.max,Gr),Us.subVectors(e.a,Gr),ks.subVectors(e.b,Gr),Os.subVectors(e.c,Gr),ma.subVectors(ks,Us),ga.subVectors(Os,ks),Va.subVectors(Us,Os);let t=[0,-ma.z,ma.y,0,-ga.z,ga.y,0,-Va.z,Va.y,ma.z,0,-ma.x,ga.z,0,-ga.x,Va.z,0,-Va.x,-ma.y,ma.x,0,-ga.y,ga.x,0,-Va.y,Va.x,0];return!_d(t,Us,ks,Os,Ic)||(t=[1,0,0,0,1,0,0,0,1],!_d(t,Us,ks,Os,Ic))?!1:(Cc.crossVectors(ma,ga),t=[Cc.x,Cc.y,Cc.z],_d(t,Us,ks,Os,Ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vi=[new P,new P,new P,new P,new P,new P,new P,new P],di=new P,Rc=new wn,Us=new P,ks=new P,Os=new P,ma=new P,ga=new P,Va=new P,Gr=new P,Ic=new P,Cc=new P,ja=new P;function _d(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){ja.fromArray(a,s);let o=i.x*Math.abs(ja.x)+i.y*Math.abs(ja.y)+i.z*Math.abs(ja.z),c=e.dot(ja),l=t.dot(ja),h=n.dot(ja);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Xi=Jb();function Jb(){let a=new ArrayBuffer(4),e=new Float32Array(a),t=new Uint32Array(a),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let s=new Uint32Array(2048),r=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)r[c]=c<<23;r[31]=1199570944,r[32]=2147483648;for(let c=33;c<63;++c)r[c]=2147483648+(c-32<<23);r[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:r,offsetTable:o}}function Zb(a){Math.abs(a)>65504&&Qe("DataUtils.toHalfFloat(): Value out of range."),a=pt(a,-65504,65504),Xi.floatView[0]=a;let e=Xi.uint32View[0],t=e>>23&511;return Xi.baseTable[t]+((e&8388607)>>Xi.shiftTable[t])}function Qb(a){let e=a>>10;return Xi.uint32View[0]=Xi.mantissaTable[Xi.offsetTable[e]+(a&1023)]+Xi.exponentTable[e],Xi.floatView[0]}var ya=class{static toHalfFloat(e){return Zb(e)}static fromHalfFloat(e){return Qb(e)}},jt=new P,Nc=new ge,$b=0,st=class extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$b++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uf,this.updateRanges=[],this.gpuType=zt,this.version=0,this._normalizationScale=e!==void 0?yh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nc.fromBufferAttribute(this,t),Nc.applyMatrix3(e),this.setXY(t,Nc.x,Nc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):bf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):xf(e,this.array)}};var lo=class extends st{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ho=class extends st{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends st{constructor(e,t,n){super(new Float32Array(e),t,n)}},e0=new wn,Vr=new P,Sd=new P,Pn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):e0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);let t=Vr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Sd)),this.expandByPoint(Vr.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},t0=0,Kn=new Xe,wd=new wt,Fs=new P,zn=new wn,jr=new wn,en=new P,rt=class a extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sb(e)?ho:lo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ot().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new et(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(zn.min,jr.min),zn.expandByPoint(en),en.addVectors(zn.max,jr.max),zn.expandByPoint(en)):(zn.expandByPoint(jr.min),zn.expandByPoint(jr.max))}zn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)en.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(en));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)en.fromBufferAttribute(o,l),c&&(Fs.fromBufferAttribute(e,l),en.add(Fs)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new st(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],c=[],l=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new P,c[R]=new P;let h=new P,d=new P,f=new P,p=new ge,m=new ge,x=new ge,b=new P,g=new P;function y(R,T,N){l[R]=l[T]=l[N]=1,h.fromBufferAttribute(n,R),d.fromBufferAttribute(n,T),f.fromBufferAttribute(n,N),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,T),x.fromBufferAttribute(s,N),d.sub(h),f.sub(h),m.sub(p),x.sub(p);let U=1/(m.x*x.y-x.x*m.y);isFinite(U)&&(b.copy(d).multiplyScalar(x.y).addScaledVector(f,-m.y).multiplyScalar(U),g.copy(f).multiplyScalar(m.x).addScaledVector(d,-x.x).multiplyScalar(U),o[R].add(b),o[T].add(b),o[N].add(b),c[R].add(g),c[T].add(g),c[N].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,T=_.length;R<T;++R){let N=_[R],U=N.start,O=N.count;for(let C=U,B=U+O;C<B;C+=3)y(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let v=new P,u=new P,w=new P,M=new P;function S(R){w.fromBufferAttribute(i,R),M.copy(w);let T=o[R];v.copy(T),v.sub(w.multiplyScalar(w.dot(T))).normalize(),u.crossVectors(M,T);let U=u.dot(c[R])<0?-1:1;r.setXYZW(R,v.x,v.y,v.z,U)}for(let R=0,T=n.count;R<T;++R)l[R]&&S(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new st(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new P,s=new P,r=new P,o=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),x=e.getX(f+1),b=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,b),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(b,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),p=0,m=0;for(let x=0,b=c.length;x<b;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*h;for(let g=0;g<h;g++)f[m++]=l[p++]}return new st(f,h,d)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new a,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,c=r.length;o<c;o++){let l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],d=s[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,h=r.length;l<h;l++){let d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ts=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uf,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ku(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ku(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Ku(a){return a.buffer._uuid===void 0&&(a.buffer._uuid=xi()),a.byteOffset===0&&a.byteLength===a.buffer.byteLength?a.buffer._uuid:a.buffer._uuid+":"+a.byteOffset+":"+a.byteLength}var _n=new P,Ma=class a{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?yh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new st(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new a(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):bf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):xf(e,this.data.array)}},Ed=new P,n0=new P,i0=new ot,Hn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ed.subVectors(n,t).cross(n0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ed),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||i0.getNormalMatrix(e),i=this.coplanarPoint(Ed).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},a0=0,mn=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=dr,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=ef,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nl,this.stencilZFail=nl,this.stencilZPass=nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let c=s[o];delete c.metadata,r.push(c)}return r}if(t){let s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new He().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ge().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tr=class extends mn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bs,Wr=new P,zs=new P,Hs=new P,Gs=new ge,qr=new ge,bm=new Xe,Pc=new P,Xr=new P,Lc=new P,Yu=new ge,Ad=new ge,Ju=new ge,Ji=class extends wt{constructor(e=new tr){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ts(t,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new Ma(n,3,0,!1)),Bs.setAttribute("uv",new Ma(n,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new ge(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&it('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),bm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-Hs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let r=this.center;Dc(Pc.set(-.5,-.5,0),Hs,r,zs,i,s),Dc(Xr.set(.5,-.5,0),Hs,r,zs,i,s),Dc(Lc.set(.5,.5,0),Hs,r,zs,i,s),Yu.set(0,0),Ad.set(1,0),Ju.set(1,1);let o=e.ray.intersectTriangle(Pc,Xr,Lc,!1,Wr);if(o===null&&(Dc(Xr.set(-.5,.5,0),Hs,r,zs,i,s),Ad.set(0,1),o=e.ray.intersectTriangle(Pc,Lc,Xr,!1,Wr),o===null))return;let c=e.ray.origin.distanceTo(Wr);c<e.near||c>e.far||t.push({distance:c,point:Wr.clone(),uv:qi.getInterpolation(Wr,Pc,Xr,Lc,Yu,Ad,Ju,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Dc(a,e,t,n,i,s){Gs.subVectors(a,t).addScalar(.5).multiply(n),i!==void 0?(qr.x=s*Gs.x-i*Gs.y,qr.y=i*Gs.x+s*Gs.y):qr.copy(Gs),a.copy(e),a.x+=qr.x,a.y+=qr.y,a.applyMatrix4(bm)}var ji=new P,Td=new P,Uc=new P,kc=new P,_a=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Td.copy(e).add(t).multiplyScalar(.5),Uc.copy(t).sub(e).normalize(),kc.copy(this.origin).sub(Td);let s=e.distanceTo(t)*.5,r=-this.direction.dot(Uc),o=kc.dot(this.direction),c=-kc.dot(Uc),l=kc.lengthSq(),h=Math.abs(1-r*r),d,f,p,m;if(h>0)if(d=r*c-o,f=r*o-c,m=s*h,d>=0)if(f>=-m)if(f<=m){let x=1/h;d*=x,f*=x,p=d*(d+r*f+2*o)+f*(r*d+f+2*c)+l}else f=s,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-r*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(r*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=r>0?-s:s,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Td).addScaledVector(Uc,f),p}intersectSphere(e,t){if(e.radius<0)return null;ji.subVectors(e.center,this.origin);let n=ji.dot(this.direction),i=ji.dot(ji)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,n,i,s){let r=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-r.x,f=e.y-r.y,p=e.z-r.z,m=t.x-r.x,x=t.y-r.y,b=t.z-r.z,g=n.x-r.x,y=n.y-r.y,_=n.z-r.z,v=Math.abs(c),u=Math.abs(l),w=Math.abs(h),M,S,R,T,N,U,O,C,B,H,j,z;if(v>=u&&v>=w?(R=c,U=d,B=m,z=g,c>=0?(M=l,S=h,T=f,N=p,O=x,C=b,H=y,j=_):(M=h,S=l,T=p,N=f,O=b,C=x,H=_,j=y)):u>=w?(R=l,U=f,B=x,z=y,l>=0?(M=h,S=c,T=p,N=d,O=b,C=m,H=_,j=g):(M=c,S=h,T=d,N=p,O=m,C=b,H=g,j=_)):(R=h,U=p,B=b,z=_,h>=0?(M=c,S=l,T=d,N=f,O=m,C=x,H=g,j=y):(M=l,S=c,T=f,N=d,O=x,C=m,H=y,j=g)),R===0)return null;let q=M/R,Y=S/R,ee=1/R,me=T-q*U,_e=N-Y*U,ie=O-q*B,be=C-Y*B,Pe=H-q*z,Fe=j-Y*z,Ie=Pe*be-Fe*ie,We=me*Fe-_e*Pe,ht=ie*_e-be*me;if(i){if(Ie<0||We<0||ht<0)return null}else if((Ie<0||We<0||ht<0)&&(Ie>0||We>0||ht>0))return null;let Ve=Ie+We+ht;if(Ve===0)return null;let Oe=ee*(Ie*U+We*B+ht*z);return(Ve>0?Oe<0:Oe>0)?null:this.at(Oe/Ve,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class extends mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zu=new Xe,Wa=new _a,Oc=new Pn,Qu=new P,Fc=new P,Bc=new P,zc=new P,Rd=new P,Hc=new P,$u=new P,Gc=new P,nt=class extends wt{constructor(e=new rt,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Hc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],d=s[c];h!==0&&(Rd.fromBufferAttribute(d,e),r?Hc.addScaledVector(Rd,h):Hc.addScaledVector(Rd.sub(t),h))}t.add(Hc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(s),Wa.copy(e.ray).recast(e.near),!(Oc.containsPoint(Wa.origin)===!1&&(Wa.intersectSphere(Oc,Qu)===null||Wa.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Zu.copy(s).invert(),Wa.copy(e.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&Wa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wa)))}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){let b=f[m],g=r[b.materialIndex],y=Math.max(b.start,p.start),_=Math.min(o.count,Math.min(b.start+b.count,p.start+p.count));for(let v=y,u=_;v<u;v+=3){let w=o.getX(v),M=o.getX(v+1),S=o.getX(v+2);i=Vc(this,g,e,n,l,h,d,w,M,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let b=m,g=x;b<g;b+=3){let y=o.getX(b),_=o.getX(b+1),v=o.getX(b+2);i=Vc(this,r,e,n,l,h,d,y,_,v),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,x=f.length;m<x;m++){let b=f[m],g=r[b.materialIndex],y=Math.max(b.start,p.start),_=Math.min(c.count,Math.min(b.start+b.count,p.start+p.count));for(let v=y,u=_;v<u;v+=3){let w=v,M=v+1,S=v+2;i=Vc(this,g,e,n,l,h,d,w,M,S),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=b.materialIndex,t.push(i))}}else{let m=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let b=m,g=x;b<g;b+=3){let y=b,_=b+1,v=b+2;i=Vc(this,r,e,n,l,h,d,y,_,v),i&&(i.faceIndex=Math.floor(b/3),t.push(i))}}}};function s0(a,e,t,n,i,s,r,o){let c;if(e.side===cn?c=n.intersectTriangle(r,s,i,!0,o):c=n.intersectTriangle(i,s,r,e.side===Ii,o),c===null)return null;Gc.copy(o),Gc.applyMatrix4(a.matrixWorld);let l=t.ray.origin.distanceTo(Gc);return l<t.near||l>t.far?null:{distance:l,point:Gc.clone(),object:a}}function Vc(a,e,t,n,i,s,r,o,c,l){a.getVertexPosition(o,Fc),a.getVertexPosition(c,Bc),a.getVertexPosition(l,zc);let h=s0(a,e,t,n,Fc,Bc,zc,$u);if(h){let d=new P;qi.getBarycoord($u,Fc,Bc,zc,d),i&&(h.uv=qi.getInterpolatedAttribute(i,o,c,l,d,new ge)),s&&(h.uv1=qi.getInterpolatedAttribute(s,o,c,l,d,new ge)),r&&(h.normal=qi.getInterpolatedAttribute(r,o,c,l,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new P,materialIndex:0};qi.getNormal(Fc,Bc,zc,f.normal),h.face=f,h.barycoord=d}return h}var Kr=new yt,ep=new yt,tp=new yt,r0=new yt,np=new Xe,jc=new P,Id=new Pn,ip=new Xe,Cd=new _a,fo=class extends nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Od,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jc),this.boundingBox.expandByPoint(jc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jc),this.boundingSphere.expandByPoint(jc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Id.copy(this.boundingSphere),Id.applyMatrix4(i),e.ray.intersectsSphere(Id)!==!1&&(ip.copy(i).invert(),Cd.copy(e.ray).applyMatrix4(ip),!(this.boundingBox!==null&&Cd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Od?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===em?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;ep.fromBufferAttribute(i.attributes.skinIndex,e),tp.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Kr.copy(t),t.set(0,0,0,0)):(Kr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Kr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let r=tp.getComponent(s);if(r!==0){let o=ep.getComponent(s);np.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(r0.copy(Kr).applyMatrix4(np),r)}}return t.isVector4&&(t.w=Kr.w),t.applyMatrix4(this.bindMatrixInverse)}},nr=class extends wt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ui=class extends Kt{constructor(e=null,t=1,n=1,i,s,r,o,c,l=kt,h=kt,d,f){super(null,r,o,c,l,h,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ap=new Xe,o0=new Xe,uo=class a{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let o=e[s]?e[s].matrixWorld:o0;ap.multiplyMatrices(o,t[s]),ap.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new a(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ui(t,e,e,Tn,zt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],r=t[s];r===void 0&&(Qe("Skeleton: No bone found with UUID:",s),r=new nr),this.bones.push(r),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let r=t[i];e.bones.push(r.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ln=class extends st{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new Xe,sp=new Xe,Wc=[],rp=new wn,c0=new Xe,Yr=new nt,Jr=new Pn,pi=class extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ln(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,c0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),rp.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(rp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),Jr.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Jr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[r+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(n),e.ray.intersectsSphere(Jr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Vs),sp.multiplyMatrices(n,Vs),Yr.matrixWorld=sp,Yr.raycast(e,Wc);for(let r=0,o=Wc.length;r<o;r++){let c=Wc[r];c.instanceId=s,c.object=this,t.push(c)}Wc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ln(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ui(new Float32Array(i*this.count),i,this.count,mr,zt));let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let o=this.geometry.morphTargetsRelative?1:1-r,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qa=new Pn,l0=new ge(.5,.5),qc=new P,Ei=class{constructor(e=new Hn,t=new Hn,n=new Hn,i=new Hn,s=new Hn,r=new Hn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],c=s[2],l=s[3],h=s[4],d=s[5],f=s[6],p=s[7],m=s[8],x=s[9],b=s[10],g=s[11],y=s[12],_=s[13],v=s[14],u=s[15];if(i[0].setComponents(l-r,p-h,g-m,u-y).normalize(),i[1].setComponents(l+r,p+h,g+m,u+y).normalize(),i[2].setComponents(l+o,p+d,g+x,u+_).normalize(),i[3].setComponents(l-o,p-d,g-x,u-_).normalize(),n)i[4].setComponents(c,f,b,v).normalize(),i[5].setComponents(l-c,p-f,g-b,u-v).normalize();else if(i[4].setComponents(l-c,p-f,g-b,u-v).normalize(),t===Yn)i[5].setComponents(l+c,p+f,g+b,u+v).normalize();else if(t===va)i[5].setComponents(c,f,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qa)}intersectsSprite(e){qa.center.set(0,0,0);let t=l0.distanceTo(e.center);return qa.radius=.7071067811865476+t,qa.applyMatrix4(e.matrixWorld),this.intersectsSphere(qa)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(qc.x=i.normal.x>0?e.max.x:e.min.x,qc.y=i.normal.y>0?e.max.y:e.min.y,qc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},op=new Xe,ul=class a{constructor(){this.coordinateSystem=Yn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let s=t[i];op.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ei),n[i].setFromProjectionMatrix(op,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Ei),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new a().copy(this)}};var ir=class extends mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},pl=new P,ml=new P,cp=new Xe,Zr=new _a,Xc=new Pn,Nd=new P,lp=new P,ns=class extends wt{constructor(e=new rt,t=new ir){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)pl.fromBufferAttribute(t,i-1),ml.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=pl.distanceTo(ml);e.setAttribute("lineDistance",new et(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xc.copy(n.boundingSphere),Xc.applyMatrix4(i),Xc.radius+=s,e.ray.intersectsSphere(Xc)===!1)return;cp.copy(i).invert(),Zr.copy(e.ray).applyMatrix4(cp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let x=p,b=m-1;x<b;x+=l){let g=h.getX(x),y=h.getX(x+1),_=Kc(this,e,Zr,c,g,y,x);_&&t.push(_)}if(this.isLineLoop){let x=h.getX(m-1),b=h.getX(p),g=Kc(this,e,Zr,c,x,b,m-1);g&&t.push(g)}}else{let p=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let x=p,b=m-1;x<b;x+=l){let g=Kc(this,e,Zr,c,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Kc(this,e,Zr,c,m-1,p,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Kc(a,e,t,n,i,s,r){let o=a.geometry.attributes.position;if(pl.fromBufferAttribute(o,i),ml.fromBufferAttribute(o,s),t.distanceSqToSegment(pl,ml,Nd,lp)>n)return;Nd.applyMatrix4(a.matrixWorld);let l=e.ray.origin.distanceTo(Nd);if(!(l<e.near||l>e.far))return{distance:l,point:lp.clone().applyMatrix4(a.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:a}}var hp=new P,dp=new P,po=class extends ns{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)hp.fromBufferAttribute(t,i),dp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hp.distanceTo(dp);e.setAttribute("lineDistance",new et(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},mo=class extends ns{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Sa=class extends mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fp=new Xe,Bd=new _a,Yc=new Pn,Jc=new P,is=class extends wt{constructor(e=new rt,t=new Sa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yc.copy(n.boundingSphere),Yc.applyMatrix4(i),Yc.radius+=s,e.ray.intersectsSphere(Yc)===!1)return;fp.copy(i).invert(),Bd.copy(e.ray).applyMatrix4(fp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let m=f,x=p;m<x;m++){let b=l.getX(m);Jc.fromBufferAttribute(d,b),up(Jc,b,c,i,e,t,this)}}else{let f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let m=f,x=p;m<x;m++)Jc.fromBufferAttribute(d,m),up(Jc,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function up(a,e,t,n,i,s,r){let o=Bd.distanceSqToPoint(a);if(o<t){let c=new P;Bd.closestPointToPoint(a,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var go=class extends Kt{constructor(e=[],t=ms,n,i,s,r,o,c,l,h){super(e,t,n,i,s,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ai=class extends Kt{constructor(e,t,n,i,s,r,o,c,l){super(e,t,n,i,s,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var mi=class extends Kt{constructor(e,t,n=bi,i,s,r,o=kt,c=kt,l,h=Yi,d=1){if(h!==Yi&&h!==sa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,i,s,r,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},bo=class extends mi{constructor(e,t=bi,n=ms,i,s,r=kt,o=kt,c,l=Yi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,r,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xo=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ti=class a extends rt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let c=[],l=[],h=[],d=[],f=0,p=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,i,r,2),m("x","z","y",1,-1,e,n,-t,i,r,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2));function m(x,b,g,y,_,v,u,w,M,S,R){let T=v/M,N=u/S,U=v/2,O=u/2,C=w/2,B=M+1,H=S+1,j=0,z=0,q=new P;for(let Y=0;Y<H;Y++){let ee=Y*N-O;for(let me=0;me<B;me++){let _e=me*T-U;q[x]=_e*y,q[b]=ee*_,q[g]=C,l.push(q.x,q.y,q.z),q[x]=0,q[b]=0,q[g]=w>0?1:-1,h.push(q.x,q.y,q.z),d.push(me/M),d.push(1-Y/S),j+=1}}for(let Y=0;Y<S;Y++)for(let ee=0;ee<M;ee++){let me=f+ee+B*Y,_e=f+ee+B*(Y+1),ie=f+(ee+1)+B*(Y+1),be=f+(ee+1)+B*Y;c.push(me,_e,be),c.push(_e,ie,be),z+=6}o.addGroup(p,z,R),p+=z,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},vo=class a extends rt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let r=[],o=[],c=[],l=[],h=t/2,d=Math.PI/2*e,f=t,p=2*d+f,m=n*2+s,x=i+1,b=new P,g=new P;for(let y=0;y<=m;y++){let _=0,v=0,u=0,w=0;if(y<=n){let R=y/n,T=R*Math.PI/2;v=-h-e*Math.cos(T),u=e*Math.sin(T),w=-e*Math.cos(T),_=R*d}else if(y<=n+s){let R=(y-n)/s;v=-h+R*t,u=e,w=0,_=d+R*f}else{let R=(y-n-s)/n,T=R*Math.PI/2;v=h+e*Math.sin(T),u=e*Math.cos(T),w=e*Math.sin(T),_=d+f+R*d}let M=Math.max(0,Math.min(1,_/p)),S=0;y===0?S=.5/i:y===m&&(S=-.5/i);for(let R=0;R<=i;R++){let T=R/i,N=T*Math.PI*2,U=Math.sin(N),O=Math.cos(N);g.x=-u*O,g.y=v,g.z=u*U,o.push(g.x,g.y,g.z),b.set(-u*O,w,u*U),b.normalize(),c.push(b.x,b.y,b.z),l.push(T+S,M)}if(y>0){let R=(y-1)*x;for(let T=0;T<i;T++){let N=R+T,U=R+T+1,O=y*x+T,C=y*x+T+1;r.push(N,U,O),r.push(U,C,O)}}}this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},as=class a extends rt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],r=[],o=[],c=[],l=new P,h=new ge;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let p=n+d/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[f]/e+1)/2,h.y=(r[f+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(o,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gn=class a extends rt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],d=[],f=[],p=[],m=0,x=[],b=n/2,g=0;y(),r===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(p,2));function y(){let v=new P,u=new P,w=0,M=(t-e)/n;for(let S=0;S<=s;S++){let R=[],T=S/s,N=T*(t-e)+e;for(let U=0;U<=i;U++){let O=U/i,C=O*c+o,B=Math.sin(C),H=Math.cos(C);u.x=N*B,u.y=-T*n+b,u.z=N*H,d.push(u.x,u.y,u.z),v.set(B,M,H).normalize(),f.push(v.x,v.y,v.z),p.push(O,1-T),R.push(m++)}x.push(R)}for(let S=0;S<i;S++)for(let R=0;R<s;R++){let T=x[R][S],N=x[R+1][S],U=x[R+1][S+1],O=x[R][S+1];(e>0||R!==0)&&(h.push(T,N,O),w+=3),(t>0||R!==s-1)&&(h.push(N,U,O),w+=3)}l.addGroup(g,w,0),g+=w}function _(v){let u=m,w=new ge,M=new P,S=0,R=v===!0?e:t,T=v===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,b*T,0),f.push(0,T,0),p.push(.5,.5),m++;let N=m;for(let U=0;U<=i;U++){let C=U/i*c+o,B=Math.cos(C),H=Math.sin(C);M.x=R*H,M.y=b*T,M.z=R*B,d.push(M.x,M.y,M.z),f.push(0,T,0),w.x=B*.5+.5,w.y=H*.5*T+.5,p.push(w.x,w.y),m++}for(let U=0;U<i;U++){let O=u+U,C=N+U;v===!0?h.push(C,C+1,O):h.push(C+1,C,O),S+=3}l.addGroup(g,S,v===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yo=class a extends Gn{constructor(e=1,t=1,n=32,i=1,s=!1,r=0,o=Math.PI*2){super(0,e,t,n,i,s,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:o}}static fromJSON(e){return new a(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gl=class a extends rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],r=[];o(i),l(n),h(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new P,v=new P,u=new P;for(let w=0;w<t.length;w+=3)p(t[w+0],_),p(t[w+1],v),p(t[w+2],u),c(_,v,u,y)}function c(y,_,v,u){let w=u+1,M=[];for(let S=0;S<=w;S++){M[S]=[];let R=y.clone().lerp(v,S/w),T=_.clone().lerp(v,S/w),N=w-S;for(let U=0;U<=N;U++)U===0&&S===w?M[S][U]=R:M[S][U]=R.clone().lerp(T,U/N)}for(let S=0;S<w;S++)for(let R=0;R<2*(w-S)-1;R++){let T=Math.floor(R/2);R%2===0?(f(M[S][T+1]),f(M[S+1][T]),f(M[S][T])):(f(M[S][T+1]),f(M[S+1][T+1]),f(M[S+1][T]))}}function l(y){let _=new P;for(let v=0;v<s.length;v+=3)_.x=s[v+0],_.y=s[v+1],_.z=s[v+2],_.normalize().multiplyScalar(y),s[v+0]=_.x,s[v+1]=_.y,s[v+2]=_.z}function h(){let y=new P;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];let v=b(y)/2/Math.PI+.5,u=g(y)/Math.PI+.5;r.push(v,1-u)}m(),d()}function d(){for(let y=0;y<r.length;y+=6){let _=r[y+0],v=r[y+2],u=r[y+4],w=Math.max(_,v,u),M=Math.min(_,v,u);w>.9&&M<.1&&(_<.2&&(r[y+0]+=1),v<.2&&(r[y+2]+=1),u<.2&&(r[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function p(y,_){let v=y*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function m(){let y=new P,_=new P,v=new P,u=new P,w=new ge,M=new ge,S=new ge;for(let R=0,T=0;R<s.length;R+=9,T+=6){y.set(s[R+0],s[R+1],s[R+2]),_.set(s[R+3],s[R+4],s[R+5]),v.set(s[R+6],s[R+7],s[R+8]),w.set(r[T+0],r[T+1]),M.set(r[T+2],r[T+3]),S.set(r[T+4],r[T+5]),u.copy(y).add(_).add(v).divideScalar(3);let N=b(u);x(w,T+0,y,N),x(M,T+2,_,N),x(S,T+4,v,N)}}function x(y,_,v,u){u<0&&y.x===1&&(r[_]=y.x-1),v.x===0&&v.z===0&&(r[_]=u/2/Math.PI+.5)}function b(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.vertices,e.indices,e.radius,e.detail)}};var Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,r;t?r=t:r=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-r,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(s-1);let h=n[i],f=n[i+1]-h,p=(r-h)/f;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let r=this.getPoint(i),o=this.getPoint(s),c=t||(r.isVector2?new ge:new P);return c.copy(o).sub(r).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,i=[],s=[],r=[],o=new P,c=new Xe;for(let p=0;p<=e;p++){let m=p/e;i[p]=this.getTangentAt(m,new P)}s[0]=new P,r[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),r[p]=r[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(pt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,m))}r[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(pt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],p*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},ar=class extends Vn{constructor(e=0,t=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ge){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*d+this.aX,l=f*d+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bl=class extends ar{constructor(e,t,n,i,s,r){super(e,t,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}};function vf(){let a=0,e=0,t=0,n=0;function i(s,r,o,c){a=s,e=o,t=-3*s+3*r-2*o-c,n=2*s-2*r+o+c}return{initCatmullRom:function(s,r,o,c,l){i(r,o,l*(o-s),l*(c-r))},initNonuniformCatmullRom:function(s,r,o,c,l,h,d){let f=(r-s)/l-(o-s)/(l+h)+(o-r)/h,p=(o-r)/h-(c-r)/(h+d)+(c-o)/d;f*=h,p*=h,i(r,o,f,p)},calc:function(s){let r=s*s,o=r*s;return a+e*s+t*r+n*o}}}var pp=new P,mp=new P,Pd=new vf,Ld=new vf,Dd=new vf,Zi=class extends Vn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){let n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e,o=Math.floor(r),c=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(mp.subVectors(i[0],i[1]).add(i[0]),l=mp);let d=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(pp.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=pp),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(f),p),b=Math.pow(f.distanceToSquared(h),p);x<1e-4&&(x=1),m<1e-4&&(m=x),b<1e-4&&(b=x),Pd.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,m,x,b),Ld.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,m,x,b),Dd.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,m,x,b)}else this.curveType==="catmullrom"&&(Pd.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),Ld.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Dd.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(Pd.calc(c),Ld.calc(c),Dd.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gp(a,e,t,n,i){let s=(n-e)*.5,r=(i-t)*.5,o=a*a,c=a*o;return(2*t-2*n+s+r)*c+(-3*t+3*n-2*s-r)*o+s*a+t}function h0(a,e){let t=1-a;return t*t*e}function d0(a,e){return 2*(1-a)*a*e}function f0(a,e){return a*a*e}function no(a,e,t,n){return h0(a,e)+d0(a,t)+f0(a,n)}function u0(a,e){let t=1-a;return t*t*t*e}function p0(a,e){let t=1-a;return 3*t*t*a*e}function m0(a,e){return 3*(1-a)*a*a*e}function g0(a,e){return a*a*a*e}function io(a,e,t,n,i){return u0(a,e)+p0(a,t)+m0(a,n)+g0(a,i)}var Mo=class extends Vn{constructor(e=new ge,t=new ge,n=new ge,i=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ge){let n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(io(e,i.x,s.x,r.x,o.x),io(e,i.y,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xl=class extends Vn{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){let n=t,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(io(e,i.x,s.x,r.x,o.x),io(e,i.y,s.y,r.y,o.y),io(e,i.z,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_o=class extends Vn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vl=class extends Vn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},So=class extends Vn{constructor(e=new ge,t=new ge,n=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ge){let n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(no(e,i.x,s.x,r.x),no(e,i.y,s.y,r.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wo=class extends Vn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,i=this.v0,s=this.v1,r=this.v2;return n.set(no(e,i.x,s.x,r.x),no(e,i.y,s.y,r.y),no(e,i.z,s.z,r.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eo=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let n=t,i=this.points,s=(i.length-1)*e,r=Math.floor(s),o=s-r,c=i[r===0?r:r-1],l=i[r],h=i[r>i.length-2?i.length-1:r+1],d=i[r>i.length-3?i.length-1:r+2];return n.set(gp(o,c.x,l.x,h.x,d.x),gp(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ge().fromArray(i))}return this}},yl=Object.freeze({__proto__:null,ArcCurve:bl,CatmullRomCurve3:Zi,CubicBezierCurve:Mo,CubicBezierCurve3:xl,EllipseCurve:ar,LineCurve:_o,LineCurve3:vl,QuadraticBezierCurve:So,QuadraticBezierCurve3:wo,SplineCurve:Eo}),Ml=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let r=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-r/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,c=r.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new yl[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},Ao=class extends Ml{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new _o(this.currentPoint.clone(),new ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new So(this.currentPoint.clone(),new ge(e,t),new ge(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,r){let o=new Mo(this.currentPoint.clone(),new ge(e,t),new ge(n,i),new ge(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Eo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,r){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,r),this}absarc(e,t,n,i,s,r){return this.absellipse(e,t,n,n,i,s,r),this}ellipse(e,t,n,i,s,r,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,r,o,c),this}absellipse(e,t,n,i,s,r,o,c){let l=new ar(e,t,n,i,s,r,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Qi=class extends Ao{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ao().fromJSON(i))}return this}};function b0(a,e,t=2){let n=e&&e.length,i=n?e[0]*t:a.length,s=xm(a,0,i,t,!0),r=[];if(!s||s.next===s.prev)return r;let o,c,l;if(n&&(s=_0(a,e,s,t)),a.length>80*t){o=a[0],c=a[1];let h=o,d=c;for(let f=t;f<i;f+=t){let p=a[f],m=a[f+1];p<o&&(o=p),m<c&&(c=m),p>h&&(h=p),m>d&&(d=m)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return To(s,r,t,o,c,l,0),r}function xm(a,e,t,n,i){let s;if(i===L0(a,e,t,n)>0)for(let r=e;r<t;r+=n)s=bp(r/n|0,a[r],a[r+1],s);else for(let r=t-n;r>=e;r-=n)s=bp(r/n|0,a[r],a[r+1],s);return s&&sr(s,s.next)&&(Io(s),s=s.next),s}function ss(a,e){if(!a)return a;e||(e=a);let t=a,n;do if(n=!1,!t.steiner&&(sr(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Io(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function To(a,e,t,n,i,s,r){if(!a)return;!r&&s&&T0(a,n,i,s);let o=a;for(;a.prev!==a.next;){let c=a.prev,l=a.next;if(s?v0(a,n,i,s):x0(a)){e.push(c.i,a.i,l.i),Io(a),a=l.next,o=l.next;continue}if(a=l,a===o){r?r===1?(a=y0(ss(a),e),To(a,e,t,n,i,s,2)):r===2&&M0(a,e,t,n,i,s):To(ss(a),e,t,n,i,s,1);break}}}function x0(a){let e=a.prev,t=a,n=a.next;if(Ut(e,t,n)>=0)return!1;let i=e.x,s=t.x,r=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(i,s,r),d=Math.min(o,c,l),f=Math.max(i,s,r),p=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=d&&m.y<=p&&Qr(i,o,s,c,r,l,m.x,m.y)&&Ut(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function v0(a,e,t,n){let i=a.prev,s=a,r=a.next;if(Ut(i,s,r)>=0)return!1;let o=i.x,c=s.x,l=r.x,h=i.y,d=s.y,f=r.y,p=Math.min(o,c,l),m=Math.min(h,d,f),x=Math.max(o,c,l),b=Math.max(h,d,f),g=zd(p,m,e,t,n),y=zd(x,b,e,t,n),_=a.prevZ,v=a.nextZ;for(;_&&_.z>=g&&v&&v.z<=y;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=b&&_!==i&&_!==r&&Qr(o,h,c,d,l,f,_.x,_.y)&&Ut(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=p&&v.x<=x&&v.y>=m&&v.y<=b&&v!==i&&v!==r&&Qr(o,h,c,d,l,f,v.x,v.y)&&Ut(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=x&&_.y>=m&&_.y<=b&&_!==i&&_!==r&&Qr(o,h,c,d,l,f,_.x,_.y)&&Ut(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=x&&v.y>=m&&v.y<=b&&v!==i&&v!==r&&Qr(o,h,c,d,l,f,v.x,v.y)&&Ut(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function y0(a,e){let t=a;do{let n=t.prev,i=t.next.next;!sr(n,i)&&ym(n,t,t.next,i)&&Ro(n,i)&&Ro(i,n)&&(e.push(n.i,t.i,i.i),Io(t),Io(t.next),t=a=i),t=t.next}while(t!==a);return ss(t)}function M0(a,e,t,n,i,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&C0(r,o)){let c=Mm(r,o);r=ss(r,r.next),c=ss(c,c.next),To(r,e,t,n,i,s,0),To(c,e,t,n,i,s,0);return}o=o.next}r=r.next}while(r!==a)}function _0(a,e,t,n){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s]*n,c=s<r-1?e[s+1]*n:a.length,l=xm(a,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(I0(l))}i.sort(S0);for(let s=0;s<i.length;s++)t=w0(i[s],t);return t}function S0(a,e){let t=a.x-e.x;if(t===0&&(t=a.y-e.y,t===0)){let n=(a.next.y-a.y)/(a.next.x-a.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function w0(a,e){let t=E0(a,e);if(!t)return e;let n=Mm(t,a);return ss(n,n.next),ss(t,t.next)}function E0(a,e){let t=e,n=a.x,i=a.y,s=-1/0,r;if(sr(a,t))return t;do{if(sr(a,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,r=t.x<t.next.x?t:t.next,d===n))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,c=r.x,l=r.y,h=1/0;t=r;do{if(n>=t.x&&t.x>=c&&n!==t.x&&vm(i<l?n:s,i,c,l,i<l?s:n,i,t.x,t.y)){let d=Math.abs(i-t.y)/(n-t.x);Ro(t,a)&&(d<h||d===h&&(t.x>r.x||t.x===r.x&&A0(r,t)))&&(r=t,h=d)}t=t.next}while(t!==o);return r}function A0(a,e){return Ut(a.prev,a,e.prev)<0&&Ut(e.next,a,a.next)<0}function T0(a,e,t,n){let i=a;do i.z===0&&(i.z=zd(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,R0(i)}function R0(a){let e,t=1;do{let n=a,i;a=null;let s=null;for(e=0;n;){e++;let r=n,o=0;for(let l=0;l<t&&(o++,r=r.nextZ,!!r);l++);let c=t;for(;o>0||c>0&&r;)o!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,o--):(i=r,r=r.nextZ,c--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;n=r}s.nextZ=null,t*=2}while(e>1);return a}function zd(a,e,t,n,i){return a=(a-t)*i|0,e=(e-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function I0(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function vm(a,e,t,n,i,s,r,o){return(i-r)*(e-o)>=(a-r)*(s-o)&&(a-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(s-o)>=(i-r)*(n-o)}function Qr(a,e,t,n,i,s,r,o){return!(a===r&&e===o)&&vm(a,e,t,n,i,s,r,o)}function C0(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!N0(a,e)&&(Ro(a,e)&&Ro(e,a)&&P0(a,e)&&(Ut(a.prev,a,e.prev)||Ut(a,e.prev,e))||sr(a,e)&&Ut(a.prev,a,a.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function sr(a,e){return a.x===e.x&&a.y===e.y}function ym(a,e,t,n){let i=Qc(Ut(a,e,t)),s=Qc(Ut(a,e,n)),r=Qc(Ut(t,n,a)),o=Qc(Ut(t,n,e));return!!(i!==s&&r!==o||i===0&&Zc(a,t,e)||s===0&&Zc(a,n,e)||r===0&&Zc(t,a,n)||o===0&&Zc(t,e,n))}function Zc(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function Qc(a){return a>0?1:a<0?-1:0}function N0(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&ym(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function Ro(a,e){return Ut(a.prev,a,a.next)<0?Ut(a,e,a.next)>=0&&Ut(a,a.prev,e)>=0:Ut(a,e,a.prev)<0||Ut(a,a.next,e)<0}function P0(a,e){let t=a,n=!1,i=(a.x+e.x)/2,s=(a.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==a);return n}function Mm(a,e){let t=Hd(a.i,a.x,a.y),n=Hd(e.i,e.x,e.y),i=a.next,s=e.prev;return a.next=e,e.prev=a,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function bp(a,e,t,n){let i=Hd(a,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Io(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Hd(a,e,t){return{i:a,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function L0(a,e,t,n){let i=0;for(let s=e,r=t-n;s<t;s+=n)i+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return i}var Gd=class{static triangulate(e,t,n=2){return b0(e,t,n)}},Ya=class a{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return a.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];xp(e),vp(n,e);let r=e.length;t.forEach(xp);for(let c=0;c<t.length;c++)i.push(r),r+=t[c].length,vp(n,t[c]);let o=Gd.triangulate(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function xp(a){let e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function vp(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}var wa=class a extends rt{constructor(e=new Qi([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];r(l)}this.setAttribute("position",new et(i,3)),this.setAttribute("uv",new et(s,2)),this.computeVertexNormals();function r(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,b=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:D0,_,v=!1,u,w,M,S;if(g){_=g.getSpacedPoints(h),v=!0,f=!1;let re=g.isCatmullRomCurve3?g.closed:!1;u=g.computeFrenetFrames(h,re),w=new P,M=new P,S=new P}f||(b=0,p=0,m=0,x=0);let R=o.extractPoints(l),T=R.shape,N=R.holes;if(!Ya.isClockWise(T)){T=T.reverse();for(let re=0,Me=N.length;re<Me;re++){let ye=N[re];Ya.isClockWise(ye)&&(N[re]=ye.reverse())}}function O(re){let ye=10000000000000001e-36,Ue=re[0];for(let Te=1;Te<=re.length;Te++){let oe=Te%re.length,de=re[oe],Ae=de.x-Ue.x,Ce=de.y-Ue.y,Je=Ae*Ae+Ce*Ce,F=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(Ue.x),Math.abs(Ue.y)),Ke=ye*F*F;if(Je<=Ke){re.splice(oe,1),Te--;continue}Ue=de}}O(T),N.forEach(O);let C=N.length,B=T;for(let re=0;re<C;re++){let Me=N[re];T=T.concat(Me)}function H(re,Me,ye){return Me||it("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(Me,ye)}let j=T.length;function z(re,Me,ye){let Ue,Te,oe,de=re.x-Me.x,Ae=re.y-Me.y,Ce=ye.x-re.x,Je=ye.y-re.y,F=de*de+Ae*Ae,Ke=de*Je-Ae*Ce;if(Math.abs(Ke)>Number.EPSILON){let Ze=Math.sqrt(F),ct=Math.sqrt(Ce*Ce+Je*Je),xe=Me.x-Ae/Ze,mt=Me.y+de/Ze,ze=ye.x-Je/ct,Ye=ye.y+Ce/ct,D=((ze-xe)*Je-(Ye-mt)*Ce)/(de*Je-Ae*Ce);Ue=xe+de*D-re.x,Te=mt+Ae*D-re.y;let A=Ue*Ue+Te*Te;if(A<=2)return new ge(Ue,Te);oe=Math.sqrt(A/2)}else{let Ze=!1;de>Number.EPSILON?Ce>Number.EPSILON&&(Ze=!0):de<-Number.EPSILON?Ce<-Number.EPSILON&&(Ze=!0):Math.sign(Ae)===Math.sign(Je)&&(Ze=!0),Ze?(Ue=-Ae,Te=de,oe=Math.sqrt(F)):(Ue=de,Te=Ae,oe=Math.sqrt(F/2))}return new ge(Ue/oe,Te/oe)}let q=[];for(let re=0,Me=B.length,ye=Me-1,Ue=re+1;re<Me;re++,ye++,Ue++)ye===Me&&(ye=0),Ue===Me&&(Ue=0),q[re]=z(B[re],B[ye],B[Ue]);let Y=[],ee,me=q.concat();for(let re=0,Me=C;re<Me;re++){let ye=N[re];ee=[];for(let Ue=0,Te=ye.length,oe=Te-1,de=Ue+1;Ue<Te;Ue++,oe++,de++)oe===Te&&(oe=0),de===Te&&(de=0),ee[Ue]=z(ye[Ue],ye[oe],ye[de]);Y.push(ee),me=me.concat(ee)}let _e;if(b===0)_e=Ya.triangulateShape(B,N);else{let re=[],Me=[];for(let ye=0;ye<b;ye++){let Ue=ye/b,Te=p*Math.cos(Ue*Math.PI/2),oe=m*Math.sin(Ue*Math.PI/2)+x;for(let de=0,Ae=B.length;de<Ae;de++){let Ce=H(B[de],q[de],oe);We(Ce.x,Ce.y,-Te),Ue===0&&re.push(Ce)}for(let de=0,Ae=C;de<Ae;de++){let Ce=N[de];ee=Y[de];let Je=[];for(let F=0,Ke=Ce.length;F<Ke;F++){let Ze=H(Ce[F],ee[F],oe);We(Ze.x,Ze.y,-Te),Ue===0&&Je.push(Ze)}Ue===0&&Me.push(Je)}}_e=Ya.triangulateShape(re,Me)}let ie=_e.length,be=m+x;for(let re=0;re<j;re++){let Me=f?H(T[re],me[re],be):T[re];v?(M.copy(u.normals[0]).multiplyScalar(Me.x),w.copy(u.binormals[0]).multiplyScalar(Me.y),S.copy(_[0]).add(M).add(w),We(S.x,S.y,S.z)):We(Me.x,Me.y,0)}for(let re=1;re<=h;re++)for(let Me=0;Me<j;Me++){let ye=f?H(T[Me],me[Me],be):T[Me];v?(M.copy(u.normals[re]).multiplyScalar(ye.x),w.copy(u.binormals[re]).multiplyScalar(ye.y),S.copy(_[re]).add(M).add(w),We(S.x,S.y,S.z)):We(ye.x,ye.y,d/h*re)}for(let re=b-1;re>=0;re--){let Me=re/b,ye=p*Math.cos(Me*Math.PI/2),Ue=m*Math.sin(Me*Math.PI/2)+x;for(let Te=0,oe=B.length;Te<oe;Te++){let de=H(B[Te],q[Te],Ue);We(de.x,de.y,d+ye)}for(let Te=0,oe=N.length;Te<oe;Te++){let de=N[Te];ee=Y[Te];for(let Ae=0,Ce=de.length;Ae<Ce;Ae++){let Je=H(de[Ae],ee[Ae],Ue);v?We(Je.x,Je.y+_[h-1].y,_[h-1].x+ye):We(Je.x,Je.y,d+ye)}}}Pe(),Fe();function Pe(){let re=i.length/3;if(f){let Me=0,ye=j*Me;for(let Ue=0;Ue<ie;Ue++){let Te=_e[Ue];ht(Te[2]+ye,Te[1]+ye,Te[0]+ye)}Me=h+b*2,ye=j*Me;for(let Ue=0;Ue<ie;Ue++){let Te=_e[Ue];ht(Te[0]+ye,Te[1]+ye,Te[2]+ye)}}else{for(let Me=0;Me<ie;Me++){let ye=_e[Me];ht(ye[2],ye[1],ye[0])}for(let Me=0;Me<ie;Me++){let ye=_e[Me];ht(ye[0]+j*h,ye[1]+j*h,ye[2]+j*h)}}n.addGroup(re,i.length/3-re,0)}function Fe(){let re=i.length/3,Me=0;Ie(B,Me),Me+=B.length;for(let ye=0,Ue=N.length;ye<Ue;ye++){let Te=N[ye];Ie(Te,Me),Me+=Te.length}n.addGroup(re,i.length/3-re,1)}function Ie(re,Me){let ye=re.length;for(;--ye>=0;){let Ue=ye,Te=ye-1;Te<0&&(Te=re.length-1);for(let oe=0,de=h+b*2;oe<de;oe++){let Ae=j*oe,Ce=j*(oe+1),Je=Me+Ue+Ae,F=Me+Te+Ae,Ke=Me+Te+Ce,Ze=Me+Ue+Ce;Ve(Je,F,Ke,Ze)}}}function We(re,Me,ye){c.push(re),c.push(Me),c.push(ye)}function ht(re,Me,ye){Oe(re),Oe(Me),Oe(ye);let Ue=i.length/3,Te=y.generateTopUV(n,i,Ue-3,Ue-2,Ue-1);qe(Te[0]),qe(Te[1]),qe(Te[2])}function Ve(re,Me,ye,Ue){Oe(re),Oe(Me),Oe(Ue),Oe(Me),Oe(ye),Oe(Ue);let Te=i.length/3,oe=y.generateSideWallUV(n,i,Te-6,Te-3,Te-2,Te-1);qe(oe[0]),qe(oe[1]),qe(oe[3]),qe(oe[1]),qe(oe[2]),qe(oe[3])}function Oe(re){i.push(c[re*3+0]),i.push(c[re*3+1]),i.push(c[re*3+2])}function qe(re){s.push(re.x),s.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return U0(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new yl[i.type]().fromJSON(i)),new a(n,e.options)}},D0={generateTopUV:function(a,e,t,n,i){let s=e[t*3],r=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new ge(s,r),new ge(o,c),new ge(l,h)]},generateSideWallUV:function(a,e,t,n,i,s){let r=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[i*3],p=e[i*3+1],m=e[i*3+2],x=e[s*3],b=e[s*3+1],g=e[s*3+2];return Math.abs(o-h)<Math.abs(r-l)?[new ge(r,1-c),new ge(l,1-d),new ge(f,1-m),new ge(x,1-g)]:[new ge(o,1-c),new ge(h,1-d),new ge(p,1-m),new ge(b,1-g)]}};function U0(a,e,t){if(t.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){let s=a[n];t.shapes.push(s.uuid)}else t.shapes.push(a.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Co=class a extends rt{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=pt(i,0,Math.PI*2);let s=[],r=[],o=[],c=[],l=[],h=1/t,d=new P,f=new ge,p=new P,m=new P,x=new P,b=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:b=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,p.x=g*1,p.y=-b,p.z=g*0,x.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:x.normalize(),c.push(x.x,x.y,x.z);break;default:b=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,p.x=g*1,p.y=-b,p.z=g*0,m.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),c.push(p.x,p.y,p.z),x.copy(m)}for(let y=0;y<=t;y++){let _=n+y*h*i,v=Math.sin(_),u=Math.cos(_);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*v,d.y=e[w].y,d.z=e[w].x*u,r.push(d.x,d.y,d.z),f.x=y/t,f.y=w/(e.length-1),o.push(f.x,f.y);let M=c[3*w+0]*v,S=c[3*w+1],R=c[3*w+0]*u;l.push(M,S,R)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){let v=_+y*e.length,u=v,w=v+e.length,M=v+e.length+1,S=v+1;s.push(u,w,S),s.push(M,S,w)}this.setIndex(s),this.setAttribute("position",new et(r,3)),this.setAttribute("uv",new et(o,2)),this.setAttribute("normal",new et(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.points,e.segments,e.phiStart,e.phiLength)}},No=class a extends gl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new a(e.radius,e.detail)}},Jn=class a extends rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,f=t/c,p=[],m=[],x=[],b=[];for(let g=0;g<h;g++){let y=g*f-r;for(let _=0;_<l;_++){let v=_*d-s;m.push(v,-y,0),x.push(0,0,1),b.push(_/o),b.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<o;y++){let _=y+l*g,v=y+l*(g+1),u=y+1+l*(g+1),w=y+1+l*g;p.push(_,v,w),p.push(v,u,w)}this.setIndex(p),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.width,e.height,e.widthSegments,e.heightSegments)}},Po=class a extends rt{constructor(e=.5,t=1,n=32,i=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],d=e,f=(t-e)/i,p=new P,m=new ge;for(let x=0;x<=i;x++){for(let b=0;b<=n;b++){let g=s+b/n*r;p.x=d*Math.cos(g),p.y=d*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}d+=f}for(let x=0;x<i;x++){let b=x*(n+1);for(let g=0;g<n;g++){let y=g+b,_=y,v=y+n+1,u=y+n+2,w=y+1;o.push(_,v,w),o.push(v,u,w)}}this.setIndex(o),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var on=class a extends rt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(r+o,Math.PI),l=0,h=[],d=new P,f=new P,p=[],m=[],x=[],b=[];for(let g=0;g<=n;g++){let y=[],_=g/n,v=r+_*o,u=e*Math.cos(v),w=Math.sqrt(e*e-u*u),M=0;g===0&&r===0?M=.5/t:g===n&&c===Math.PI&&(M=-.5/t);for(let S=0;S<=t;S++){let R=S/t,T=i+R*s;d.x=-w*Math.cos(T),d.y=u,d.z=w*Math.sin(T),m.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),b.push(R+M,1-_),y.push(l++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let _=h[g][y+1],v=h[g][y],u=h[g+1][y],w=h[g+1][y+1];(g!==0||r>0)&&p.push(_,v,w),(g!==n-1||c<Math.PI)&&p.push(v,u,w)}this.setIndex(p),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var rs=class a extends rt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:r,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],d=[],f=new P,p=new P,m=new P;for(let x=0;x<=n;x++){let b=r+x/n*o;for(let g=0;g<=i;g++){let y=g/i*s;p.x=(e+t*Math.cos(b))*Math.cos(y),p.y=(e+t*Math.cos(b))*Math.sin(y),p.z=t*Math.sin(b),l.push(p.x,p.y,p.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),m.subVectors(p,f).normalize(),h.push(m.x,m.y,m.z),d.push(g/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let b=1;b<=i;b++){let g=(i+1)*x+b-1,y=(i+1)*(x-1)+b-1,_=(i+1)*(x-1)+b,v=(i+1)*x+b;c.push(g,y,v),c.push(y,_,v)}this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new a(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ea=class a extends rt{constructor(e=new wo(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let r=e.computeFrenetFrames(t,s);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;let o=new P,c=new P,l=new ge,h=new P,d=[],f=[],p=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(p,2));function x(){for(let _=0;_<t;_++)b(_);b(s===!1?t:0),y(),g()}function b(_){h=e.getPointAt(_/t,h);let v=r.normals[_],u=r.binormals[_];for(let w=0;w<=i;w++){let M=w/i*Math.PI*2,S=Math.sin(M),R=-Math.cos(M);c.x=R*v.x+S*u.x,c.y=R*v.y+S*u.y,c.z=R*v.z+S*u.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function g(){for(let _=1;_<=t;_++)for(let v=1;v<=i;v++){let u=(i+1)*(_-1)+(v-1),w=(i+1)*_+(v-1),M=(i+1)*_+v,S=(i+1)*(_-1)+v;m.push(u,w,S),m.push(w,M,S)}}function y(){for(let _=0;_<=t;_++)for(let v=0;v<=i;v++)l.x=_/t,l.y=v/i,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new a(new yl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function xs(a){let e={};for(let t in a){e[t]={};for(let n in a[t]){let i=a[t][n];if(yp(i))i.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(yp(i[0])){let s=[];for(let r=0,o=i.length;r<o;r++)s[r]=i[r].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function gn(a){let e={};for(let t=0;t<a.length;t++){let n=xs(a[t]);for(let i in n)e[i]=n[i]}return e}function yp(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function k0(a){let e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function yf(a){let e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var oa={clone:xs,merge:gn},O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,F0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=F0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=k0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new He().setHex(i.value);break;case"v2":this.uniforms[n].value=new ge().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new yt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ot().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Xe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rr=class extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},En=class extends Gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ge(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ja('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ja('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var or=class extends mn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Pl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_l=class extends mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Sl=class extends mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function xa(a,e){return!a||a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function $r(a){return a!==void 0&&a.inTangents!==void 0&&a.outTangents!==void 0}function B0(a){function e(i,s){return a[i]-a[s]}let t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Mp(a,e,t){let n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[r++]=a[o+c]}return i}function z0(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push(...r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}var Ri=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){let o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},wl=class extends Ri{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xa,endingEnd:Xa}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],c=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ka:s=e,o=2*t-n;break;case ao:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ka:r=e,c=2*n-t;break;case ao:r=1,c=n+i[1]-i[0];break;default:r=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),x=m*m,b=x*m,g=-f*b+2*f*x-f*m,y=(1+f)*b+(-1.5-2*f)*x+(-.5+f)*m+1,_=(-1-p)*b+(1.5+p)*x+.5*m,v=p*b-p*x;for(let u=0;u!==o;++u)s[u]=g*r[h+u]+y*r[l+u]+_*r[c+u]+v*r[d+u];return s}},Lo=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==o;++f)s[f]=r[l+f]*d+r[c+f]*h;return s}},El=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Al=class extends Ri{interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(i-t),x=1-m;for(let b=0;b!==o;++b)s[b]=r[l+b]*x+r[c+b]*m;return s}let f=o*2,p=e-1;for(let m=0;m!==o;++m){let x=r[l+m],b=r[c+m],g=p*f+m*2,y=d[g],_=d[g+1],v=e*f+m*2,u=h[v],w=h[v+1],M=G0(n,t,y,u,i);s[m]=_m(M,x,_,w,b)}return s}};function _m(a,e,t,n,i){let s=1-a;return s*s*s*e+3*s*s*a*t+3*s*a*a*n+a*a*a*i}function H0(a,e,t,n,i){let s=1-a;return 3*s*s*(t-e)+6*s*a*(n-t)+3*a*a*(i-n)}function G0(a,e,t,n,i){let s=(a-e)/(i-e);for(let r=0;r<8;r++){let o=_m(s,e,t,n,i)-a;if(Math.abs(o)<1e-10)break;let c=H0(s,e,t,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Dn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xa(t,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xa(e.times,Array),values:xa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),$r(e.settings)&&(n.settings={inTangents:xa(e.settings.inTangents,Array),outTangents:xa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Al(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Za:t=this.InterpolantFactoryMethodDiscrete;break;case Qa:t=this.InterpolantFactoryMethodLinear;break;case tl:t=this.InterpolantFactoryMethodSmooth;break;case Fd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Za;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return tl;case this.InterpolantFactoryMethodBezier:return Fd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;$r(this.settings)&&(_p(this.settings.inTangents,e),_p(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;$r(this.settings)&&(Sp(this.settings.inTangents,e),Sp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(it("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(it("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){it("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){it("KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(i!==void 0&&wb(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){it("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===tl,s=e.length-1,r=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let d=o*n,f=d-n,p=d+n;for(let m=0;m!==n;++m){let x=t[d+m];if(x!==t[f+m]||x!==t[p+m]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];let d=o*n,f=r*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,$r(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function _p(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]+=e}function Sp(a,e){for(let t=0,n=a.length;t!==n;t+=2)a[t]*=e}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Qa;var $i=class extends Dn{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=Za;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}};Do.prototype.ValueTypeName="color";var ea=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}};ea.prototype.ValueTypeName="number";var Tl=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Rt.slerpFlat(s,0,r,l-o,r,l,c);return s}},ta=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends Dn{constructor(e,t,n){super(e,t,n)}};na.prototype.ValueTypeName="string";na.prototype.ValueBufferType=Array;na.prototype.DefaultInterpolation=Za;na.prototype.InterpolantFactoryMethodLinear=void 0;na.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends Dn{constructor(e,t,n,i){super(e,t,n,i)}};Aa.prototype.ValueTypeName="vector";var os=class{constructor(e="",t=-1,n=[],i=vh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=xi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(j0(n[r]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=n.length;s!==r;++s)t.push(Dn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,r=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=B0(c);c=Mp(c,1,h),l=Mp(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),r.push(new ea(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let d=h[1],f=i[d];f||(i[d]=f=[]),f.push(l)}}let r=[];for(let o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function V0(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ea;case"vector":case"vector2":case"vector3":case"vector4":return Aa;case"color":return Do;case"quaternion":return ta;case"bool":case"boolean":return $i;case"string":return na}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function j0(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=V0(a.type);if(a.times===void 0){let n=[],i=[];z0(a.keys,n,i,"value"),a.times=n,a.values=i}let t;return e.parse!==void 0?t=e.parse(a):t=new e(a.name,a.times,a.values,a.interpolation),$r(a.settings)&&(t.settings={inTangents:xa(a.settings.inTangents,Float32Array),outTangents:xa(a.settings.outTangents,Float32Array)}),t}var wi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(wp(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!wp(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function wp(a){try{let e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var cr=class{constructor(e,t,n){let i=this,s=!1,r=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],m=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sm=new cr,gi=class{constructor(e){this.manager=e!==void 0?e:Sm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wi={},Vd=class extends Error{constructor(e,t){super(e),this.response=t}},cs=class extends gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=wi.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:n,onError:i});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:n,onError:i});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Wi[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=f?parseInt(f):0,m=p!==0,x=0,b=new ReadableStream({start(g){y();function y(){d.read().then(({done:_,value:v})=>{if(_)g.close();else{x+=v.byteLength;let u=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:p});for(let w=0,M=h.length;w<M;w++){let S=h[w];S.onProgress&&S.onProgress(u)}g.enqueue(v),y()}},_=>{g.error(_)})}}});return new Response(b)}else throw new Vd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(m=>p.decode(m))}}}).then(l=>{wi.add(`file:${e}`,l);let h=Wi[e];delete Wi[e];for(let d=0,f=h.length;d<f;d++){let p=h[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{let h=Wi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Wi[e];for(let d=0,f=h.length;d<f;d++){let p=h[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var js=new WeakMap,Rl=class extends gi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=wi.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let d=js.get(r);d===void 0&&(d=[],js.set(r,d)),d.push({onLoad:t,onError:i})}return r}let o=Js("img");function c(){h(),t&&t(this);let d=js.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onLoad&&p.onLoad(this)}js.delete(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),wi.remove(`image:${e}`);let f=js.get(this)||[];for(let p=0;p<f.length;p++){let m=f[p];m.onError&&m.onError(d)}js.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wi.add(`image:${e}`,o),s.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Uo=class extends gi{constructor(e){super(e)}load(e,t,n,i){let s=this,r=new ui,o=new cs(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(c){let l;try{l=s.parse(c)}catch(h){i!==void 0?i(h):it(h);return}s._applyTexData(r,l),t&&t(r,l)},n,i),r}createDataTexture(e){let t=new ui;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Nn,e.wrapT=t.wrapT!==void 0?t.wrapT:Nn,e.magFilter=t.magFilter!==void 0?t.magFilter:St,e.minFilter=t.minFilter!==void 0?t.minFilter:St,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Yt),t.mipmapCount===1&&(e.minFilter=St),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},ls=class extends gi{constructor(e){super(e)}load(e,t,n,i){let s=new Kt,r=new Rl(this.manager);return r.setPriority(this.priority),r.setCache(this.cache),r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Ta=class extends wt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Ud=new Xe,Ep=new P,Ap=new P,Ra=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ei,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ep.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ep),Ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ap),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Ud.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ud,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===va||e.reversedDepth?t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$c=new P,el=new Rt,Si=new P,ko=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($c,el,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($c,el,Si.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($c,el,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($c,el,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ba=new P,Tp=new ge,Rp=new ge,Xt=class extends ko{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $a*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ba.x,ba.y).multiplyScalar(-e/ba.z),ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ba.x,ba.y).multiplyScalar(-e/ba.z)}getViewSize(e,t){return this.getViewBounds(e,Tp,Rp),t.subVectors(Rp,Tp)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(eo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let c=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/c,t-=r.offsetY*n/l,i*=r.width/c,n*=r.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},jd=class extends Ra{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=$a*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Oo=class extends Ta{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new jd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Wd=class extends Ra{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0}},hs=class extends Ta{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Zn=class extends ko{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},qd=class extends Ra{constructor(){super(new Zn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fo=class extends Ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new qd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ia=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Bo=class extends rt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var kd=new WeakMap,zo=class extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=wi.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(l=>{kd.has(r)===!0?(i&&i(kd.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return wi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),kd.set(c,l),wi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});wi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ws=-90,qs=1,lr=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Xt(Ws,qs,e,t);i.layers=this.layers,this.add(i);let s=new Xt(Ws,qs,e,t);s.layers=this.layers,this.add(s);let r=new Xt(Ws,qs,e,t);r.layers=this.layers,this.add(r);let o=new Xt(Ws,qs,e,t);o.layers=this.layers,this.add(o);let c=new Xt(Ws,qs,e,t);c.layers=this.layers,this.add(c);let l=new Xt(Ws,qs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,c]=t;for(let l of t)this.remove(l);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===va)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,c,l,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Il=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},ds=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=W0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function W0(){this._document.hidden===!1&&this.reset()}var Cl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,r;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,r=this.cumulativeWeight;if(r===0){for(let o=0;o!==i;++o)n[s+o]=n[o];r=t}else{r+=t;let o=t/r;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=r}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,r=i;s!==r;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){Rt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let r=this._workIndex*s;Rt.multiplyQuaternionsFlat(e,r,e,t,e,n),Rt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,s){let r=1-i;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*r+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let r=0;r!==s;++r){let o=t+r;e[o]=e[o]+e[n+r]*i}}},Mf="\\[\\]\\.:\\/",q0=new RegExp("["+Mf+"]","g"),_f="[^"+Mf+"]",X0="[^"+Mf.replace("\\.","")+"]",K0=/((?:WC+[\/:])*)/.source.replace("WC",_f),Y0=/(WCOD+)?/.source.replace("WCOD",X0),J0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_f),Z0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_f),Q0=new RegExp("^"+K0+Y0+J0+Z0+"$"),$0=["material","materials","bones","map"],Xd=class{constructor(e,t,n){let i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class a{constructor(e,t,n){this.path=t,this.parsedPath=n||a.parseTrackName(t),this.node=a.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new a.Composite(e,t,n):new a(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(q0,"")}static parseTrackName(e){let t=Q0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);$0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=a.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){it("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){it("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){it("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){it("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){it("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){it("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;it("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){it("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Xd;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,r=s.length,o=new Array(r),c={endingStart:Xa,endingEnd:Xa};for(let l=0;l!==r;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=tm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,r=s/i,o=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,r=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/r,l[1]=t/r,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let r=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case im:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(r),l[h].accumulateAdditive(o);break;case vh:default:for(let h=0,d=c.length;h!==d;++h)c[h].evaluate(r),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,r=n===nm;if(e===0)return s===-1?i:r&&(s&1)===1?t-i:i;if(n===xh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=i;if(r&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ka,i.endingEnd=Ka):(e?i.endingStart=this.zeroSlopeAtStart?Ka:Xa:i.endingStart=ao,t?i.endingEnd=this.zeroSlopeAtEnd?Ka:Xa:i.endingEnd=ao)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);let o=r.parameterPositions,c=r.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},ex=new Float32Array(1),Ho=class extends fi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,r=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let d=0;d!==s;++d){let f=i[d],p=f.name,m=h[p];if(m!==void 0)++m.referenceCount,r[d]=m;else{if(m=r[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,p));continue}let x=t&&t._propertyBindings[d].binding.parsedPath;m=new Cl(Tt.create(n,p,x),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,p),r[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{let o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,r=this._actionsByClip,o=r[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],c.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Lo(new Float32Array(2),new Float32Array(2),1,ex),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,r=typeof e=="string"?os.findByName(i,e):e,o=r!==null?r.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(r!==null?n=r.blendMode:n=vh),c!==void 0){let d=c.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;l=c.knownActions[0],r===null&&(r=l._clip)}if(r===null)return null;let h=new Nl(this,r,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?os.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,r);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let r=s.knownActions;for(let o=0,c=r.length;o!==c;++o){let l=r[o];this._deactivateAction(l);let h=l._cacheIndex,d=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let r in n){let o=n[r].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let r in s){let o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var Ip=new Xe,Go=class{constructor(e,t,n=0,i=1/0){this.ray=new _a(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):it("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ip.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ip),this}intersectObject(e,t=!0,n=[]){return Kd(e,this,n,t),n.sort(Cp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Kd(e[i],this,n,t);return n.sort(Cp),n}};function Cp(a,e){return a.distance-e.distance}function Kd(a,e,t,n){let i=!0;if(a.layers.test(e.layers)&&a.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=a.children;for(let r=0,o=s.length;r<o;r++)Kd(s[r],e,t,!0)}}var Yd=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};function Sf(a,e,t,n){let i=tx(n);switch(t){case of:return a*e;case mr:return a*e/i.components*i.byteLength;case Bl:return a*e/i.components*i.byteLength;case Ia:return a*e*2/i.components*i.byteLength;case zl:return a*e*2/i.components*i.byteLength;case cf:return a*e*3/i.components*i.byteLength;case Tn:return a*e*4/i.components*i.byteLength;case Hl:return a*e*4/i.components*i.byteLength;case Yo:case Jo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Qo:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Vl:case Wl:return Math.max(a,16)*Math.max(e,8)/4;case Gl:case jl:return Math.max(a,8)*Math.max(e,8)/2;case ql:case Xl:case Yl:case Jl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Kl:case $o:case Zl:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case rh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case ch:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case lh:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case hh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case fh:case uh:case ph:return Math.ceil(a/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(a/4)*Math.ceil(e/4)*8;case ec:case bh:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tx(a){switch(a){case ln:case nf:return{byteLength:1,components:1};case pr:case af:case Ft:return{byteLength:2,components:1};case Ol:case Fl:return{byteLength:2,components:4};case bi:case kl:case zt:return{byteLength:4,components:1};case sf:case rf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Wm(){let a=null,e=!1,t=null,n=null;function i(s,r){n=a.requestAnimationFrame(i),t(s,r)}return{start:function(){e!==!0&&t!==null&&a!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function ix(a){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,f=a.createBuffer();a.bindBuffer(c,f),a.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=a.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=a.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=a.HALF_FLOAT:p=a.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=a.SHORT;else if(l instanceof Uint32Array)p=a.UNSIGNED_INT;else if(l instanceof Int32Array)p=a.INT;else if(l instanceof Int8Array)p=a.BYTE;else if(l instanceof Uint8Array)p=a.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(a.bindBuffer(l,o),d.length===0)a.bufferSubData(l,0,h);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){let m=d[f],x=d[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){let x=d[p];a.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(a.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:r}}var ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sx=`#ifdef USE_ALPHAHASH
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
#endif`,rx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hx=`#ifdef USE_AOMAP
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
#endif`,dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fx=`#ifdef USE_BATCHING
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
#endif`,ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bx=`#ifdef USE_IRIDESCENCE
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
#endif`,xx=`#ifdef USE_BUMPMAP
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
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tx=`#define PI 3.141592653589793
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
} // validated`,Rx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Px=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ux=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jx=`#ifdef USE_GRADIENTMAP
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
}`,Wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Yx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ev=`PhysicalMaterial material;
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
#endif`,tv=`uniform sampler2D dfgLUT;
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
}`,nv=`
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
#endif`,iv=`#if defined( RE_IndirectDiffuse )
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
#endif`,av=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sv=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uv=`#if defined( USE_POINTS_UV )
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
#endif`,pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bv=`#if defined( USE_MORPHCOLORS )
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
#endif`,xv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vv=`#ifdef USE_MORPHTARGETS
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
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_v=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Av=`#ifdef USE_NORMALMAP
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
#endif`,Tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ov=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gv=`float getShadowMask() {
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
}`,Vv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jv=`#ifdef USE_SKINNING
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
#endif`,Wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qv=`#ifdef USE_SKINNING
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
#endif`,Xv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zv=`#ifdef USE_TRANSMISSION
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
#endif`,Qv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ay=`uniform sampler2D t2D;
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform float backgroundBlurriness;
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
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`#include <common>
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
}`,hy=`#if DEPTH_PACKING == 3200
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
}`,dy=`#define DISTANCE
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
}`,fy=`#define DISTANCE
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,py=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`uniform float scale;
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
}`,gy=`uniform vec3 diffuse;
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
}`,by=`#include <common>
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
}`,xy=`uniform vec3 diffuse;
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
}`,vy=`#define LAMBERT
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
}`,yy=`#define LAMBERT
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
}`,My=`#define MATCAP
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
}`,_y=`#define MATCAP
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
}`,Sy=`#define NORMAL
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
}`,wy=`#define NORMAL
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
}`,Ey=`#define PHONG
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
}`,Ay=`#define PHONG
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
}`,Ty=`#define STANDARD
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
}`,Ry=`#define STANDARD
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
}`,Iy=`#define TOON
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
}`,Cy=`#define TOON
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
}`,Ny=`uniform float size;
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
}`,Py=`uniform vec3 diffuse;
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
}`,Ly=`#include <common>
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
}`,Dy=`uniform vec3 color;
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
}`,Uy=`uniform float rotation;
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
}`,ky=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:ax,alphahash_pars_fragment:sx,alphamap_fragment:rx,alphamap_pars_fragment:ox,alphatest_fragment:cx,alphatest_pars_fragment:lx,aomap_fragment:hx,aomap_pars_fragment:dx,batching_pars_vertex:fx,batching_vertex:ux,begin_vertex:px,beginnormal_vertex:mx,bsdfs:gx,iridescence_fragment:bx,bumpmap_pars_fragment:xx,clipping_planes_fragment:vx,clipping_planes_pars_fragment:yx,clipping_planes_pars_vertex:Mx,clipping_planes_vertex:_x,color_fragment:Sx,color_pars_fragment:wx,color_pars_vertex:Ex,color_vertex:Ax,common:Tx,defaultnormal_vertex:Rx,displacementmap_pars_vertex:Ix,displacementmap_vertex:Cx,emissivemap_fragment:Nx,emissivemap_pars_fragment:Px,colorspace_fragment:Lx,colorspace_pars_fragment:Dx,envmap_fragment:Ux,envmap_common_pars_fragment:kx,envmap_pars_fragment:Ox,envmap_pars_vertex:Fx,envmap_physical_pars_fragment:Yx,envmap_vertex:Bx,fog_vertex:zx,fog_pars_vertex:Hx,fog_fragment:Gx,fog_pars_fragment:Vx,gradientmap_pars_fragment:jx,lightmap_pars_fragment:Wx,lights_lambert_fragment:qx,lights_lambert_pars_fragment:Xx,lights_pars_begin:Kx,lights_toon_fragment:Jx,lights_toon_pars_fragment:Zx,lights_phong_fragment:Qx,lights_phong_pars_fragment:$x,lights_physical_fragment:ev,lights_physical_pars_fragment:tv,lights_fragment_begin:nv,lights_fragment_maps:iv,lights_fragment_end:av,lightprobes_pars_fragment:sv,logdepthbuf_fragment:rv,logdepthbuf_pars_fragment:ov,logdepthbuf_pars_vertex:cv,logdepthbuf_vertex:lv,map_fragment:hv,map_pars_fragment:dv,map_particle_fragment:fv,map_particle_pars_fragment:uv,metalnessmap_fragment:pv,metalnessmap_pars_fragment:mv,morphinstance_vertex:gv,morphcolor_vertex:bv,morphnormal_vertex:xv,morphtarget_pars_vertex:vv,morphtarget_vertex:yv,normal_fragment_begin:Mv,normal_fragment_maps:_v,normal_pars_fragment:Sv,normal_pars_vertex:wv,normal_vertex:Ev,normalmap_pars_fragment:Av,clearcoat_normal_fragment_begin:Tv,clearcoat_normal_fragment_maps:Rv,clearcoat_pars_fragment:Iv,iridescence_pars_fragment:Cv,opaque_fragment:Nv,packing:Pv,premultiplied_alpha_fragment:Lv,project_vertex:Dv,dithering_fragment:Uv,dithering_pars_fragment:kv,roughnessmap_fragment:Ov,roughnessmap_pars_fragment:Fv,shadowmap_pars_fragment:Bv,shadowmap_pars_vertex:zv,shadowmap_vertex:Hv,shadowmask_pars_fragment:Gv,skinbase_vertex:Vv,skinning_pars_vertex:jv,skinning_vertex:Wv,skinnormal_vertex:qv,specularmap_fragment:Xv,specularmap_pars_fragment:Kv,tonemapping_fragment:Yv,tonemapping_pars_fragment:Jv,transmission_fragment:Zv,transmission_pars_fragment:Qv,uv_pars_fragment:$v,uv_pars_vertex:ey,uv_vertex:ty,worldpos_vertex:ny,background_vert:iy,background_frag:ay,backgroundCube_vert:sy,backgroundCube_frag:ry,cube_vert:oy,cube_frag:cy,depth_vert:ly,depth_frag:hy,distance_vert:dy,distance_frag:fy,equirect_vert:uy,equirect_frag:py,linedashed_vert:my,linedashed_frag:gy,meshbasic_vert:by,meshbasic_frag:xy,meshlambert_vert:vy,meshlambert_frag:yy,meshmatcap_vert:My,meshmatcap_frag:_y,meshnormal_vert:Sy,meshnormal_frag:wy,meshphong_vert:Ey,meshphong_frag:Ay,meshphysical_vert:Ty,meshphysical_frag:Ry,meshtoon_vert:Iy,meshtoon_frag:Cy,points_vert:Ny,points_frag:Py,shadow_vert:Ly,shadow_frag:Dy,sprite_vert:Uy,sprite_frag:ky},Ge={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Pi={basic:{uniforms:gn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:gn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:gn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:gn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:gn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new He(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:gn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:gn([Ge.points,Ge.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:gn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:gn([Ge.common,Ge.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:gn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:gn([Ge.sprite,Ge.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:gn([Ge.common,Ge.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:gn([Ge.lights,Ge.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Pi.physical={uniforms:gn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var Mh={r:0,b:0,g:0},Oy=new Xe,qm=new ot;qm.set(-1,0,0,0,1,0,0,0,1);function Fy(a,e,t,n,i,s){let r=new He(0),o=i===!0?0:1,c,l,h=null,d=0,f=null;function p(y){let _=y.isScene===!0?y.background:null;if(_&&_.isTexture){let v=y.backgroundBlurriness>0;_=e.get(_,v)}return _}function m(y){let _=!1,v=p(y);v===null?b(r,o):v&&v.isColor&&(b(v,1),_=!0);let u=a.xr.getEnvironmentBlendMode();u==="additive"?t.buffers.color.setClear(0,0,0,1,s):u==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(a.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function x(y,_){let v=p(_);v&&v.isCubeTexture?(l===void 0&&(l=new nt(new Ti(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:xs(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(u,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Oy.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(qm),l.material.toneMapped=ut.getTransfer(v.colorSpace)!==_t,(h!==v||d!==v.version||f!==a.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=a.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new nt(new Jn(2,2),new Pt({name:"BackgroundMaterial",uniforms:xs(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ut.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,f=a.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function b(y,_){y.getRGB(Mh,yf(a)),t.buffers.color.setClear(Mh.r,Mh.g,Mh.b,_,s)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(y,_=1){r.set(y),o=_,b(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,b(r,o)},render:m,addToRenderList:x,dispose:g}}function By(a,e){let t=a.getParameter(a.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,r=!1;function o(N,U,O,C,B){let H=!1,j=d(N,C,O,U);s!==j&&(s=j,l(s.object)),H=p(N,C,O,B),H&&m(N,C,O,B),B!==null&&e.update(B,a.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,v(N,U,O,C),B!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return a.createVertexArray()}function l(N){return a.bindVertexArray(N)}function h(N){return a.deleteVertexArray(N)}function d(N,U,O,C){let B=C.wireframe===!0,H=n[U.id];H===void 0&&(H={},n[U.id]=H);let j=N.isInstancedMesh===!0?N.id:0,z=H[j];z===void 0&&(z={},H[j]=z);let q=z[O.id];q===void 0&&(q={},z[O.id]=q);let Y=q[B];return Y===void 0&&(Y=f(c()),q[B]=Y),Y}function f(N){let U=[],O=[],C=[];for(let B=0;B<t;B++)U[B]=0,O[B]=0,C[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:O,attributeDivisors:C,object:N,attributes:{},index:null}}function p(N,U,O,C){let B=s.attributes,H=U.attributes,j=0,z=O.getAttributes();for(let q in z)if(z[q].location>=0){let ee=B[q],me=H[q];if(me===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(me=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(me=N.instanceColor)),ee===void 0||ee.attribute!==me||me&&ee.data!==me.data)return!0;j++}return s.attributesNum!==j||s.index!==C}function m(N,U,O,C){let B={},H=U.attributes,j=0,z=O.getAttributes();for(let q in z)if(z[q].location>=0){let ee=H[q];ee===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));let me={};me.attribute=ee,ee&&ee.data&&(me.data=ee.data),B[q]=me,j++}s.attributes=B,s.attributesNum=j,s.index=C}function x(){let N=s.newAttributes;for(let U=0,O=N.length;U<O;U++)N[U]=0}function b(N){g(N,0)}function g(N,U){let O=s.newAttributes,C=s.enabledAttributes,B=s.attributeDivisors;O[N]=1,C[N]===0&&(a.enableVertexAttribArray(N),C[N]=1),B[N]!==U&&(a.vertexAttribDivisor(N,U),B[N]=U)}function y(){let N=s.newAttributes,U=s.enabledAttributes;for(let O=0,C=U.length;O<C;O++)U[O]!==N[O]&&(a.disableVertexAttribArray(O),U[O]=0)}function _(N,U,O,C,B,H,j){j===!0?a.vertexAttribIPointer(N,U,O,B,H):a.vertexAttribPointer(N,U,O,C,B,H)}function v(N,U,O,C){x();let B=C.attributes,H=O.getAttributes(),j=U.defaultAttributeValues;for(let z in H){let q=H[z];if(q.location>=0){let Y=B[z];if(Y===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor)),Y!==void 0){let ee=Y.normalized,me=Y.itemSize,_e=e.get(Y);if(_e===void 0)continue;let ie=_e.buffer,be=_e.type,Pe=_e.bytesPerElement,Fe=be===a.INT||be===a.UNSIGNED_INT||Y.gpuType===kl;if(Y.isInterleavedBufferAttribute){let Ie=Y.data,We=Ie.isInterleavedBuffer===!0?Ie.stride:Ie.itemSize,ht=Y.offset;if(Ie.isInstancedInterleavedBuffer||Ie.isInstancedBufferAttribute){for(let Ve=0;Ve<q.locationSize;Ve++)g(q.location+Ve,Ie.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Ve=0;Ve<q.locationSize;Ve++)b(q.location+Ve);a.bindBuffer(a.ARRAY_BUFFER,ie);for(let Ve=0;Ve<q.locationSize;Ve++)_(q.location+Ve,me/q.locationSize,be,ee,We*Pe,(ht+me/q.locationSize*Ve)*Pe,Fe)}else{if(Y.isInstancedBufferAttribute){for(let Ie=0;Ie<q.locationSize;Ie++)g(q.location+Ie,Y.meshPerAttribute);N.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ie=0;Ie<q.locationSize;Ie++)b(q.location+Ie);a.bindBuffer(a.ARRAY_BUFFER,ie);for(let Ie=0;Ie<q.locationSize;Ie++)_(q.location+Ie,me/q.locationSize,be,ee,me*Pe,me/q.locationSize*Ie*Pe,Fe)}}else if(j!==void 0){let ee=j[z];if(ee!==void 0)switch(ee.length){case 2:a.vertexAttrib2fv(q.location,ee);break;case 3:a.vertexAttrib3fv(q.location,ee);break;case 4:a.vertexAttrib4fv(q.location,ee);break;default:a.vertexAttrib1fv(q.location,ee)}}}}y()}function u(){R();for(let N in n){let U=n[N];for(let O in U){let C=U[O];for(let B in C){let H=C[B];for(let j in H)h(H[j].object),delete H[j];delete C[B]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let U=n[N.id];for(let O in U){let C=U[O];for(let B in C){let H=C[B];for(let j in H)h(H[j].object),delete H[j];delete C[B]}}delete n[N.id]}function M(N){for(let U in n){let O=n[U];for(let C in O){let B=O[C];if(B[N.id]===void 0)continue;let H=B[N.id];for(let j in H)h(H[j].object),delete H[j];delete B[N.id]}}}function S(N){for(let U in n){let O=n[U],C=N.isInstancedMesh===!0?N.id:0,B=O[C];if(B!==void 0){for(let H in B){let j=B[H];for(let z in j)h(j[z].object),delete j[z];delete B[H]}delete O[C],Object.keys(O).length===0&&delete n[U]}}}function R(){T(),r=!0,s!==i&&(s=i,l(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:T,dispose:u,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:M,initAttributes:x,enableAttribute:b,disableUnusedAttributes:y}}function zy(a,e,t){let n;function i(c){n=c}function s(c,l){a.drawArrays(n,c,l),t.update(l,n,1)}function r(c,l,h){h!==0&&(a.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let p=0;p<h;p++)f+=l[p];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function Hy(a,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(M){return!(M!==Tn&&n.convert(M)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let S=M===Ft&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==ln&&M!==zt&&!S&&n.convert(M)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE))}function c(M){if(M==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Qe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),m=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_TEXTURE_SIZE),b=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),g=a.getParameter(a.MAX_VERTEX_ATTRIBS),y=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),_=a.getParameter(a.MAX_VARYING_VECTORS),v=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),u=a.getParameter(a.MAX_SAMPLES),w=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:b,maxAttributes:g,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,maxSamples:u,samples:w}}function Gy(a){let e=this,t=null,n=0,i=!1,s=!1,r=new Hn,o=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||i;return i=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let m=d.clippingPlanes,x=d.clipIntersection,b=d.clipShadows,g=a.get(d);if(!i||m===null||m.length===0||s&&!b)s?h(null):l();else{let y=s?0:n,_=y*4,v=g.clippingState||null;c.value=v,v=h(m,f,_,p);for(let u=0;u!==_;++u)v[u]=t[u];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,m){let x=d!==null?d.length:0,b=null;if(x!==0){if(b=c.value,m!==!0||b===null){let g=p+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(b===null||b.length<g)&&(b=new Float32Array(g));for(let _=0,v=p;_!==x;++_,v+=4)r.copy(d[_]).applyMatrix4(y,o),r.normal.toArray(b,v),b[v+3]=r.constant}c.value=b,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,b}}var rc=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new go(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ti(5,5,5),s=new Pt({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:aa});s.uniforms.tEquirect.value=t;let r=new nt(i,s),o=t.minFilter;return t.minFilter===Yt&&(t.minFilter=St),new lr(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}},wm=256,Vy=3,jy=20,Xm=256,Km=16,Wy=3,qy=new P,Xy=new He,xr=class a{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lr(1,10,null),this._boxMesh=new nt(new Ti(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:r=256,position:o=qy}=s,c=this._renderer;this._setSize(r);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,f=c.autoClearColor,p=c.autoClearDepth,m=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(Xy));let b=new lr(n,i,h);return b.position.copy(o),b.update(c,e),c.autoClear=d,c.autoClearColor=f,c.autoClearDepth=p,c.autoClearStencil=m,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(wm,gf(e))}_fromTexture(e,t){e.mapping===ms||e.mapping===fr?this._setSize(e.image.length===0?wm:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Em(e,!1,!1),n=Math.log2(e)-Vy;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Em(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;let r=e.width>>t;e.viewport.set(0,0,r,r),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ms||e.mapping===fr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tm()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Am()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ky(),this._integrationMaterial=Yy());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/Km);for(let r=0;r<=n;r++){let o=a.lodToRoughness(r,n);if(r>n-Wy)s.roughness.value=o,this._renderCube(e,r,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(Xm*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,r,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Jy());let n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}};function Em(a,e,t){return new rc(a,{minFilter:Yt,generateMipmaps:e,type:Ft,colorSpace:rn,depthBuffer:t})}function oc(a,e,t){return new Pt({name:a,uniforms:e,vertexShader:lt.cube_vert,fragmentShader:t,side:cn,blending:aa,depthTest:!1,depthWrite:!1})}function Ky(){return oc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Xm}u

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
	`)}function Yy(){return oc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Km}},`

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
	`)}function Jy(){return oc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${jy}
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
	`)}function Am(){return oc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Tm(){return oc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Zy(a){let e=new WeakMap,t=new WeakMap,n=null;function i(f,p=!1){return f==null?null:p?r(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===Ll||p===Dl)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new rc(m.height);return x.fromEquirectangularTexture(a,f),e.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let p=f.mapping,m=p===Ll||p===Dl,x=p===ms||p===fr;if(m||x){let b=t.get(f),g=b!==void 0?b.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new xr(a)),b=m?n.fromEquirectangular(f,b):n.fromCubemap(f,b),b.texture.pmremVersion=f.pmremVersion,t.set(f,b),b.texture;if(b!==void 0)return b.texture;{let y=f.image;return m&&y&&y.height>0||x&&y&&c(y)?(n===null&&(n=new xr(a)),b=m?n.fromEquirectangular(f):n.fromCubemap(f),b.texture.pmremVersion=f.pmremVersion,t.set(f,b),f.addEventListener("dispose",h),b.texture):null}}}return f}function o(f,p){return p===Ll?f.mapping=ms:p===Dl&&(f.mapping=fr),f}function c(f){let p=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&p++;return p===m}function l(f){let p=f.target;p.removeEventListener("dispose",l);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Qy(a){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=a.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ja("WebGLRenderer: "+n+" extension not supported."),i}}}function $y(a,e,t,n){let i={},s=new WeakMap,r=new FinalizationRegistry(m=>delete i[m]);function o(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let b in m.attributes)e.remove(m.attributes[b]);m.removeEventListener("dispose",o),delete i[m.id],r.unregister(m);let x=s.get(m);x&&(e.remove(x),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,x){return i[x.id]!==void 0||(x.addEventListener("dispose",o),i[x.id]=new WeakRef(x),r.register(x,x.id,x),t.memory.geometries++),x}function h(m){let x=m.attributes;for(let b in x)e.update(x[b],a.ARRAY_BUFFER)}function d(m){let x=m.index,b=m.attributes.position,g=0;if(b===void 0)return;let y=x!==null?x.array.length:b.array.length/3-1,_=b.count>=65535?ho:lo,v=new _(Math.ceil(y/3)*6,1),u=v.array;if(x!==null){let M=x.array;g=x.version;for(let S=0,R=0;S<y;S+=3){let T=M[S+0],N=M[S+1],U=M[S+2];u[R++]=T,u[R++]=N,u[R++]=N,u[R++]=U,u[R++]=U,u[R++]=T}}else{g=b.version;for(let M=0,S=0;M<y;M+=3){let R=M+0,T=M+1,N=M+2;u[S++]=R,u[S++]=T,u[S++]=T,u[S++]=N,u[S++]=N,u[S++]=R}}v.version=g;let w=s.get(m);w&&e.remove(w),s.set(m,v)}function f(m){let x=s.get(m);if(x){let b=m.index;b!==null&&x.version<b.version&&d(m)}else d(m);return s.get(m)}function p(){for(let m in i){let x=i[m].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:f,dispose:p}}function eM(a,e,t){let n;function i(d){n=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function c(d,f){a.drawElements(n,f,s,d*r),t.update(f,n,1)}function l(d,f,p){p!==0&&(a.drawElementsInstanced(n,f,s,d*r,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,p);let x=0;for(let b=0;b<p;b++)x+=f[b];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function tM(a){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case a.TRIANGLES:t.triangles+=o*(s/3);break;case a.LINES:t.lines+=o*(s/2);break;case a.LINE_STRIP:t.lines+=o*(s-1);break;case a.LINE_LOOP:t.lines+=o*s;break;case a.POINTS:t.points+=o*s;break;default:it("WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function nM(a,e,t){let n=new WeakMap,i=new yt;function s(r,o,c){let l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let R=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],_=0;p===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let v=o.attributes.position.count*_,u=1;v>e.maxTextureSize&&(u=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let w=new Float32Array(v*u*4*d),M=new oo(w,v,u,d);M.type=zt,M.needsUpdate=!0;let S=_*4;for(let T=0;T<d;T++){let N=b[T],U=g[T],O=y[T],C=v*u*4*T;for(let B=0;B<N.count;B++){let H=B*S;p===!0&&(i.fromBufferAttribute(N,B),w[C+H+0]=i.x,w[C+H+1]=i.y,w[C+H+2]=i.z,w[C+H+3]=0),m===!0&&(i.fromBufferAttribute(U,B),w[C+H+4]=i.x,w[C+H+5]=i.y,w[C+H+6]=i.z,w[C+H+7]=0),x===!0&&(i.fromBufferAttribute(O,B),w[C+H+8]=i.x,w[C+H+9]=i.y,w[C+H+10]=i.z,w[C+H+11]=O.itemSize===4?i.w:1)}}f={count:d,texture:M,size:new ge(v,u)},n.set(o,f),o.addEventListener("dispose",R)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(a,"morphTexture",r.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];let m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(a,"morphTargetBaseInfluence",m),c.getUniforms().setValue(a,"morphTargetInfluences",l)}c.getUniforms().setValue(a,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(a,"morphTargetsTextureSize",f.size)}return{update:s}}function iM(a,e,t,n,i){let s=new WeakMap;function r(l){let h=i.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,a.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,a.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function o(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}var aM={[Vo]:"LINEAR_TONE_MAPPING",[jo]:"REINHARD_TONE_MAPPING",[Wo]:"CINEON_TONE_MAPPING",[ps]:"ACES_FILMIC_TONE_MAPPING",[Xo]:"AGX_TONE_MAPPING",[Ko]:"NEUTRAL_TONE_MAPPING",[qo]:"CUSTOM_TONE_MAPPING"};function sM(a,e,t,n,i,s){let r=new Ht(e,t,{type:a,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new rt;h.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new et([0,2,0,0,2,0],2));let d=new rr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new nt(h,d),p=new Zn(-1,1,1,-1,0,1),m=null,x=null,b=!1,g,y=null,_=[],v=!1;this.setSize=function(u,w){r.setSize(u,w),o!==null&&o.setSize(u,w),c!==null&&c.setSize(u,w);for(let M=0;M<_.length;M++){let S=_[M];S.setSize&&S.setSize(u,w)}},this.setEffects=function(u){_=u,v=_.length>0&&_[0].isRenderPass===!0;let w=r.width,M=r.height;_.length>0&&o===null&&(o=new Ht(w,M,{type:Ft,depthBuffer:!1,stencilBuffer:!1}),c=new Ht(w,M,{type:Ft,depthBuffer:!1,stencilBuffer:!1}));let S=i===!0&&_.some(R=>R.needsDepthTexture===!0);S!==(r.depthTexture!==null)&&(S===!0&&l===null&&(l=new mi(w,M),s===!0&&(l.format=sa,l.type=bs)),r.dispose(),r.depthTexture=S?l:null,r.resolveDepthBuffer=S,r.storeMultisampledDepthBuffer=S);for(let R=0;R<_.length;R++){let T=_[R];T.setSize&&T.setSize(w,M),S&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(l)}},this.begin=function(u,w){if(b||u.toneMapping===Ci&&_.length===0)return!1;if(y=w,w!==null){let M=w.width,S=w.height;(r.width!==M||r.height!==S)&&this.setSize(M,S)}return v===!1&&u.setRenderTarget(r),g=u.toneMapping,u.toneMapping=Ci,!0},this.hasRenderPass=function(){return v},this.end=function(u,w){u.toneMapping=g,b=!0;let M=r,S=o;for(let R=0;R<_.length;R++){let T=_[R];T.enabled!==!1&&(T.render(u,S,M,w),T.needsSwap!==!1&&(M=S,S=S===o?c:o))}if(m!==u.outputColorSpace||x!==u.toneMapping){m=u.outputColorSpace,x=u.toneMapping,d.defines={},ut.getTransfer(m)===_t&&(d.defines.SRGB_TRANSFER="");let R=aM[x];R&&(d.defines[R]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=M.texture,u.setRenderTarget(y),u.render(f,p),y=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var Ym=new Kt,Jm=new mi(1,1),Zm=new bo(1),Qm=new oo,$m=new fl,eg=new go,Rm=[],Im=[],Cm=new Float32Array(16),Nm=new Float32Array(9),Pm=new Float32Array(4);function vr(a,e,t){let n=a[0];if(n<=0||n>0)return a;let i=e*t,s=Rm[i];if(s===void 0&&(s=new Float32Array(i),Rm[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function Jt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Zt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function wh(a,e){let t=Im[e];t===void 0&&(t=new Int32Array(e),Im[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function rM(a,e){let t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function oM(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;a.uniform2fv(this.addr,e),Zt(t,e)}}function cM(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;a.uniform3fv(this.addr,e),Zt(t,e)}}function lM(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;a.uniform4fv(this.addr,e),Zt(t,e)}}function hM(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;Pm.set(n),a.uniformMatrix2fv(this.addr,!1,Pm),Zt(t,n)}}function dM(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;Nm.set(n),a.uniformMatrix3fv(this.addr,!1,Nm),Zt(t,n)}}function fM(a,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,n))return;Cm.set(n),a.uniformMatrix4fv(this.addr,!1,Cm),Zt(t,n)}}function uM(a,e){let t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function pM(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;a.uniform2iv(this.addr,e),Zt(t,e)}}function mM(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;a.uniform3iv(this.addr,e),Zt(t,e)}}function gM(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;a.uniform4iv(this.addr,e),Zt(t,e)}}function bM(a,e){let t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function xM(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;a.uniform2uiv(this.addr,e),Zt(t,e)}}function vM(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;a.uniform3uiv(this.addr,e),Zt(t,e)}}function yM(a,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;a.uniform4uiv(this.addr,e),Zt(t,e)}}function Eh(a){return a.version===0&&(a.compareFunction=ff,a.needsUpdate=!0),a}function MM(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_2D_SHADOW?s=Eh(Jm):s=Ym,t.setTexture2D(e||s,i)}function _M(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$m,i)}function SM(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i);let s;this.type===a.SAMPLER_CUBE_SHADOW?s=Eh(Zm):s=eg,t.setTextureCube(e||s,i)}function wM(a,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qm,i)}function EM(a){switch(a){case 5126:return rM;case 35664:return oM;case 35665:return cM;case 35666:return lM;case 35674:return hM;case 35675:return dM;case 35676:return fM;case 5124:case 35670:return uM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return bM;case 36294:return xM;case 36295:return vM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return wM}}function AM(a,e){a.uniform1fv(this.addr,e)}function TM(a,e){let t=vr(e,this.size,2);a.uniform2fv(this.addr,t)}function RM(a,e){let t=vr(e,this.size,3);a.uniform3fv(this.addr,t)}function IM(a,e){let t=vr(e,this.size,4);a.uniform4fv(this.addr,t)}function CM(a,e){let t=vr(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function NM(a,e){let t=vr(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function PM(a,e){let t=vr(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function LM(a,e){a.uniform1iv(this.addr,e)}function DM(a,e){a.uniform2iv(this.addr,e)}function UM(a,e){a.uniform3iv(this.addr,e)}function kM(a,e){a.uniform4iv(this.addr,e)}function OM(a,e){a.uniform1uiv(this.addr,e)}function FM(a,e){a.uniform2uiv(this.addr,e)}function BM(a,e){a.uniform3uiv(this.addr,e)}function zM(a,e){a.uniform4uiv(this.addr,e)}function HM(a,e,t){let n=this.cache,i=e.length,s=wh(t,i);Jt(n,s)||(a.uniform1iv(this.addr,s),Zt(n,s));let r;this.type===a.SAMPLER_2D_SHADOW?r=Eh(Jm):r=Ym;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||r,s[o])}function GM(a,e,t){let n=this.cache,i=e.length,s=wh(t,i);Jt(n,s)||(a.uniform1iv(this.addr,s),Zt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||$m,s[r])}function VM(a,e,t){let n=this.cache,i=e.length,s=wh(t,i);Jt(n,s)||(a.uniform1iv(this.addr,s),Zt(n,s));let r;this.type===a.SAMPLER_CUBE_SHADOW?r=Eh(Zm):r=eg;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||r,s[o])}function jM(a,e,t){let n=this.cache,i=e.length,s=wh(t,i);Jt(n,s)||(a.uniform1iv(this.addr,s),Zt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Qm,s[r])}function WM(a){switch(a){case 5126:return AM;case 35664:return TM;case 35665:return RM;case 35666:return IM;case 35674:return CM;case 35675:return NM;case 35676:return PM;case 5124:case 35670:return LM;case 35667:case 35671:return DM;case 35668:case 35672:return UM;case 35669:case 35673:return kM;case 5125:return OM;case 36294:return FM;case 36295:return BM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return jM}}var Af=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=EM(t.type)}},Tf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WM(t.type)}},Rf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},wf=/(\w+)(\])?(\[|\.)?/g;function Lm(a,e){a.seq.push(e),a.map[e.id]=e}function qM(a,e,t){let n=a.name,i=n.length;for(wf.lastIndex=0;;){let s=wf.exec(n),r=wf.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===i){Lm(t,l===void 0?new Af(o,a,e):new Tf(o,a,e));break}else{let d=t.map[o];d===void 0&&(d=new Rf(o),Lm(t,d)),t=d}}}var br=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),c=e.getUniformLocation(t,o.name);qM(o,c,this)}let i=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(r):s.push(r);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];r.id in t&&n.push(r)}return n}};function Dm(a,e,t){let n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}var XM=37297,KM=0;function YM(a,e){let t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}var Um=new ot;function JM(a){ut._getMatrix(Um,ut.workingColorSpace,a);let e=`mat3( ${Um.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(a)){case so:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function km(a,e,t){let n=a.getShaderParameter(e,a.COMPILE_STATUS),s=(a.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+YM(a.getShaderSource(e),o)}else return s}function ZM(a,e){let t=JM(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var QM={[Vo]:"Linear",[jo]:"Reinhard",[Wo]:"Cineon",[ps]:"ACESFilmic",[Xo]:"AgX",[Ko]:"Neutral",[qo]:"Custom"};function $M(a,e){let t=QM[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var _h=new P;function e_(){ut.getLuminanceCoefficients(_h);let a=_h.x.toFixed(4),e=_h.y.toFixed(4),t=_h.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sc).join(`
`)}function n_(a){let e=[];for(let t in a){let n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function i_(a,e){let t={},n=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=a.getActiveAttrib(e,i),r=s.name,o=1;s.type===a.FLOAT_MAT2&&(o=2),s.type===a.FLOAT_MAT3&&(o=3),s.type===a.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function sc(a){return a!==""}function Om(a,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Fm(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(a){return a.replace(a_,s_)}function s_(a,e){let t=lt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return If(t)}var r_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(a){return a.replace(r_,o_)}function o_(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zm(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}var c_={[fs]:"SHADOWMAP_TYPE_PCF",[hr]:"SHADOWMAP_TYPE_VSM"};function l_(a){return c_[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var h_={[fr]:"ENVMAP_MODE_REFRACTION"};function d_(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":h_[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}var f_={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[Qp]:"ENVMAP_BLENDING_MIX",[$p]:"ENVMAP_BLENDING_ADD"};function u_(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":f_[a.combine]||"ENVMAP_BLENDING_NONE"}function p_(a,e,t,n){let i=a.getContext(),s=t.defines,r=t.vertexShader,o=t.fragmentShader,c=l_(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=d_(t),d=u_(t),f=t_(t),p=n_(s),m=i.createProgram(),x,b,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sc).join(`
`),x.length>0&&(x+=`
`),b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(sc).join(`
`),b.length>0&&(b+=`
`)):(x=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sc).join(`
`),b=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?lt.tonemapping_pars_fragment:"",t.toneMapping!==Ci?$M("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,ZM("linearToOutputTexel",t.outputColorSpace),e_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sc).join(`
`)),r=If(r),r=Om(r,t),r=Fm(r,t),o=If(o),o=Om(o,t),o=Fm(o,t),r=Bm(r),o=Bm(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,b=["#define varying in",t.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let y=g+x+r,_=g+b+o,v=Dm(i,i.VERTEX_SHADER,y),u=Dm(i,i.FRAGMENT_SHADER,_);i.attachShader(m,v),i.attachShader(m,u),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function w(T){if(a.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",U=i.getShaderInfoLog(v)||"",O=i.getShaderInfoLog(u)||"",C=N.trim(),B=U.trim(),H=O.trim(),j=!0,z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(j=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,m,v,u);else{let q=km(i,v,"vertex"),Y=km(i,u,"fragment");it("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+C+`
`+q+`
`+Y)}else C!==""?Qe("WebGLProgram: Program Info Log:",C):(B===""||H==="")&&(z=!1);z&&(T.diagnostics={runnable:j,programLog:C,vertexShader:{log:B,prefix:x},fragmentShader:{log:H,prefix:b}})}i.deleteShader(v),i.deleteShader(u),M=new br(i,m),S=i_(i,m)}let M;this.getUniforms=function(){return M===void 0&&w(this),M};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(m,XM)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=KM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=u,this}var m_=0,Cf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Nf(e),t.set(e,n)),n}},Nf=class{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}};function g_(a){return a===Ia||a===$o||a===ec}function b_(a,e,t,n,i,s){let r=new $s,o=new Cf,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,R,T,N,U){let O=T.fog,C=N.geometry,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?T.environment:null,H=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,j=e.get(M.envMap||B,H),z=f[M.type],q=n.precision;M.precision!==null&&(q=n.getMaxPrecision(M.precision),q!==M.precision&&Qe("WebGLProgram.getParameters:",M.precision,"not supported, using",q,"instead."));let Y=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,ee=Y!==void 0?Y.length:0,me=0;C.morphAttributes.position!==void 0&&(me=1),C.morphAttributes.normal!==void 0&&(me=2),C.morphAttributes.color!==void 0&&(me=3);let _e,ie,be,Pe;if(z){let Be=Pi[z];_e=Be.vertexShader,ie=Be.fragmentShader}else{_e=M.vertexShader,ie=M.fragmentShader;let Be=o.getVertexShaderStage(M),Mt=o.getFragmentShaderStage(M);o.update(M,Be,Mt),be=Be.id,Pe=Mt.id}let Fe=a.getRenderTarget(),Ie=a.state.buffers.depth.getReversed(),We=N.isInstancedMesh===!0,ht=N.isBatchedMesh===!0,Ve=!!M.map,Oe=!!M.matcap,qe=!!j,re=qe&&j.isPMREMTexture===!0,Me=!!M.aoMap,ye=!!M.lightMap,Ue=!!M.bumpMap&&M.wireframe===!1,Te=!!M.normalMap,oe=!!M.displacementMap,de=!!M.emissiveMap,Ae=!!M.metalnessMap,Ce=!!M.roughnessMap,Je=M.anisotropy>0,F=M.clearcoat>0,Ke=M.diffuseRoughness>0,Ze=M.dispersion>0,ct=M.retroreflectivity>0,xe=M.iridescence>0,mt=M.sheen>0,ze=M.transmission>0,Ye=Je&&!!M.anisotropyMap,D=F&&!!M.clearcoatMap,A=F&&!!M.clearcoatNormalMap,Q=F&&!!M.clearcoatRoughnessMap,ve=Ke&&!!M.diffuseRoughnessMap,le=xe&&!!M.iridescenceMap,Re=xe&&!!M.iridescenceThicknessMap,Ne=mt&&!!M.sheenColorMap,he=mt&&!!M.sheenRoughnessMap,fe=!!M.specularMap,Le=!!M.specularColorMap,V=!!M.specularIntensityMap,pe=ze&&!!M.transmissionMap,ce=ze&&!!M.thicknessMap,De=!!M.gradientMap,Ee=!!M.alphaMap,Se=M.alphaTest>0,$e=!!M.alphaHash,ft=!!M.extensions,we=Ci;M.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(we=a.toneMapping);let tt=re?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,dt={shaderID:z,shaderType:M.type,shaderName:M.name,vertexShader:_e,fragmentShader:ie,defines:M.defines,customVertexShaderID:be,customFragmentShaderID:Pe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:q,batching:ht,batchingColor:ht&&N._colorsTexture!==null,instancing:We,instancingColor:We&&N.instanceColor!==null,instancingMorph:We&&N.morphTexture!==null,outputColorSpace:Fe===null?a.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Ve,matcap:Oe,envMap:qe,envMapMode:qe&&j.mapping,envMapPMREM:re,envMapMaxLod:re?tt.length-1:null,envMapSize:re?tt[0].width:null,aoMap:Me,lightMap:ye,bumpMap:Ue,normalMap:Te,displacementMap:oe,emissiveMap:de,normalMapObjectSpace:Te&&M.normalMapType===sm,normalMapTangentSpace:Te&&M.normalMapType===nc,packedNormalMap:Te&&M.normalMapType===nc&&g_(M.normalMap.format),metalnessMap:Ae,roughnessMap:Ce,anisotropy:Je,anisotropyMap:Ye,clearcoat:F,clearcoatMap:D,clearcoatNormalMap:A,clearcoatRoughnessMap:Q,diffuseRoughness:Ke,diffuseRoughnessMap:ve,dispersion:Ze,retroreflection:ct,iridescence:xe,iridescenceMap:le,iridescenceThicknessMap:Re,sheen:mt,sheenColorMap:Ne,sheenRoughnessMap:he,specularMap:fe,specularColorMap:Le,specularIntensityMap:V,transmission:ze,transmissionMap:pe,thicknessMap:ce,gradientMap:De,opaque:M.transparent===!1&&M.blending===dr&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Se,alphaHash:$e,combine:M.combine,mapUv:Ve&&p(M.map.channel),aoMapUv:Me&&p(M.aoMap.channel),lightMapUv:ye&&p(M.lightMap.channel),bumpMapUv:Ue&&p(M.bumpMap.channel),normalMapUv:Te&&p(M.normalMap.channel),displacementMapUv:oe&&p(M.displacementMap.channel),emissiveMapUv:de&&p(M.emissiveMap.channel),metalnessMapUv:Ae&&p(M.metalnessMap.channel),roughnessMapUv:Ce&&p(M.roughnessMap.channel),anisotropyMapUv:Ye&&p(M.anisotropyMap.channel),clearcoatMapUv:D&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:A&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ve&&p(M.diffuseRoughnessMap.channel),iridescenceMapUv:le&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:he&&p(M.sheenRoughnessMap.channel),specularMapUv:fe&&p(M.specularMap.channel),specularColorMapUv:Le&&p(M.specularColorMap.channel),specularIntensityMapUv:V&&p(M.specularIntensityMap.channel),transmissionMapUv:pe&&p(M.transmissionMap.channel),thicknessMapUv:ce&&p(M.thicknessMap.channel),alphaMapUv:Ee&&p(M.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(Te||Je),vertexNormals:!!C.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!C.attributes.uv&&(Ve||Ee),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||C.attributes.normal===void 0&&Te===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ie,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:me,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(Be=>Be.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:we,decodeVideoTexture:Ve&&M.map.isVideoTexture===!0&&ut.getTransfer(M.map.colorSpace)===_t,decodeVideoTextureEmissive:de&&M.emissiveMap.isVideoTexture===!0&&ut.getTransfer(M.emissiveMap.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ot,flipSided:M.side===cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ft&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&M.extensions.multiDraw===!0||ht)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function x(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(b(S,M),g(S,M),S.push(a.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapPMREM),M.push(S.envMapMaxLod),M.push(S.envMapSize),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.diffuseRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.numSunLights),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numSunLightShadows),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.numLightProbeGrids),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function g(M,S){r.disableAll(),S.instancing&&r.enable(0),S.instancingColor&&r.enable(1),S.instancingMorph&&r.enable(2),S.matcap&&r.enable(3),S.envMap&&r.enable(4),S.normalMapObjectSpace&&r.enable(5),S.normalMapTangentSpace&&r.enable(6),S.clearcoat&&r.enable(7),S.iridescence&&r.enable(8),S.alphaTest&&r.enable(9),S.vertexColors&&r.enable(10),S.vertexAlphas&&r.enable(11),S.vertexUv1s&&r.enable(12),S.vertexUv2s&&r.enable(13),S.vertexUv3s&&r.enable(14),S.vertexTangents&&r.enable(15),S.anisotropy&&r.enable(16),S.alphaHash&&r.enable(17),S.batching&&r.enable(18),S.dispersion&&r.enable(19),S.retroreflection&&r.enable(24),S.diffuseRoughness&&r.enable(25),S.batchingColor&&r.enable(20),S.gradientMap&&r.enable(21),S.packedNormalMap&&r.enable(22),S.vertexNormals&&r.enable(23),M.push(r.mask),r.disableAll(),S.fog&&r.enable(0),S.useFog&&r.enable(1),S.flatShading&&r.enable(2),S.logarithmicDepthBuffer&&r.enable(3),S.reversedDepthBuffer&&r.enable(4),S.skinning&&r.enable(5),S.morphTargets&&r.enable(6),S.morphNormals&&r.enable(7),S.morphColors&&r.enable(8),S.premultipliedAlpha&&r.enable(9),S.shadowMapEnabled&&r.enable(10),S.doubleSided&&r.enable(11),S.flipSided&&r.enable(12),S.useDepthPacking&&r.enable(13),S.dithering&&r.enable(14),S.transmission&&r.enable(15),S.sheen&&r.enable(16),S.opaque&&r.enable(17),S.pointsUvs&&r.enable(18),S.decodeVideoTexture&&r.enable(19),S.decodeVideoTextureEmissive&&r.enable(20),S.alphaToCoverage&&r.enable(21),S.numLightProbeGrids>0&&r.enable(22),S.hasPositionAttribute&&r.enable(23),M.push(r.mask)}function y(M){let S=f[M.type],R;if(S){let T=Pi[S];R=oa.clone(T.uniforms)}else R=M.uniforms;return R}function _(M,S){let R=h.get(S);return R!==void 0?++R.usedTimes:(R=new p_(a,S,M,i),l.push(R),h.set(S,R)),R}function v(M){if(--M.usedTimes===0){let S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),h.delete(M.cacheKey),M.destroy()}}function u(M){o.remove(M)}function w(){o.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:y,acquireProgram:_,releaseProgram:v,releaseShaderCache:u,programs:l,dispose:w}}function x_(){let a=new WeakMap;function e(r){return a.has(r)}function t(r){let o=a.get(r);return o===void 0&&(o={},a.set(r,o)),o}function n(r){a.delete(r)}function i(r,o,c){a.get(r)[o]=c}function s(){a=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function v_(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Hm(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Gm(){let a=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,m,x,b,g){let y=a[e];return y===void 0?(y={id:f.id,object:f,geometry:p,material:m,materialVariant:r(f),groupOrder:x,renderOrder:f.renderOrder,z:b,group:g},a[e]=y):(y.id=f.id,y.object=f,y.geometry=p,y.material=m,y.materialVariant=r(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=b,y.group=g),e++,y}function c(f,p,m,x,b,g,y){y.reversedDepth===!0&&(b=-b);let _=o(f,p,m,x,b,g);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function l(f,p,m,x,b,g){let y=o(f,p,m,x,b,g);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):t.unshift(y)}function h(f,p){t.length>1&&t.sort(f||v_),n.length>1&&n.sort(p||Hm),i.length>1&&i.sort(p||Hm)}function d(){for(let f=e,p=a.length;f<p;f++){let m=a[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:h}}function y_(){let a=new WeakMap;function e(n,i){let s=a.get(n),r;return s===void 0?(r=new Gm,a.set(n,[r])):i>=s.length?(r=new Gm,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function M_(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new He};break;case"SpotLight":t={position:new P,direction:new P,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new P,halfWidth:new P,halfHeight:new P};break}return a[e.id]=t,t}}}function __(){let a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}var S_=0;function w_(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function E_(a){let e=new M_,t=__(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let i=new P,s=new Xe,r=new Xe;function o(l){let h=0,d=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let p=0,m=0,x=0,b=0,g=0,y=0,_=0,v=0,u=0,w=0,M=0,S=0,R=0,T=0;l.sort(w_);for(let U=0,O=l.length;U<O;U++){let C=l[U],B=C.color,H=C.intensity,j=C.distance,z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ia?z=C.shadow.map.texture:z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=B.r*H,d+=B.g*H,f+=B.b*H;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],H);T++}else if(C.isSunLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Y=C.shadow,ee=t.get(C);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[m]=ee,n.sunShadowMap[m]=z;let me=Y.getViewportCount();for(let _e=0;_e<me;_e++)n.sunShadowMatrix[x+_e]=Y.getMatrix(_e),n.sunShadowCascade[x+_e]=Y._cascadeData[_e];x+=me,m++}n.sun[p]=q,p++}else if(C.isDirectionalLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Y=C.shadow,ee=t.get(C);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,n.directionalShadow[b]=ee,n.directionalShadowMap[b]=z,n.directionalShadowMatrix[b]=C.shadow.matrix,u++}n.directional[b]=q,b++}else if(C.isSpotLight){let q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(B).multiplyScalar(H),q.distance=j,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[y]=q;let Y=C.shadow;if(C.map&&(n.spotLightMap[S]=C.map,S++,Y.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[y]=Y.matrix,C.castShadow){let ee=t.get(C);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,n.spotShadow[y]=ee,n.spotShadowMap[y]=z,M++}y++}else if(C.isRectAreaLight){let q=e.get(C);q.color.copy(B).multiplyScalar(H),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[_]=q,_++}else if(C.isPointLight){let q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){let Y=C.shadow,ee=t.get(C);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,n.pointShadow[g]=ee,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=C.shadow.matrix,w++}n.point[g]=q,g++}else if(C.isHemisphereLight){let q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(H),q.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[v]=q,v++}}_>0&&(a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let N=n.hash;(N.sunLength!==p||N.directionalLength!==b||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==_||N.hemiLength!==v||N.numSunShadows!==m||N.numDirectionalShadows!==u||N.numPointShadows!==w||N.numSpotShadows!==M||N.numSpotMaps!==S||N.numLightProbes!==T)&&(n.sun.length=p,n.directional.length=b,n.spot.length=y,n.rectArea.length=_,n.point.length=g,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=u,n.directionalShadowMap.length=u,n.directionalShadowMatrix.length=u,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=T,N.sunLength=p,N.directionalLength=b,N.pointLength=g,N.spotLength=y,N.rectAreaLength=_,N.hemiLength=v,N.numSunShadows=m,N.numDirectionalShadows=u,N.numPointShadows=w,N.numSpotShadows=M,N.numSpotMaps=S,N.numLightProbes=T,n.version=S_++)}function c(l,h){let d=0,f=0,p=0,m=0,x=0,b=0,g=h.matrixWorldInverse;for(let y=0,_=l.length;y<_;y++){let v=l[y];if(v.isSunLight){let u=n.sun[d];u.direction.setFromMatrixPosition(v.matrixWorld),u.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let u=n.directional[f];u.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),u.direction.sub(i),u.direction.transformDirection(g),f++}else if(v.isSpotLight){let u=n.spot[m];u.position.setFromMatrixPosition(v.matrixWorld),u.position.applyMatrix4(g),u.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),u.direction.sub(i),u.direction.transformDirection(g),m++}else if(v.isRectAreaLight){let u=n.rectArea[x];u.position.setFromMatrixPosition(v.matrixWorld),u.position.applyMatrix4(g),r.identity(),s.copy(v.matrixWorld),s.premultiply(g),r.extractRotation(s),u.halfWidth.set(v.width*.5,0,0),u.halfHeight.set(0,v.height*.5,0),u.halfWidth.applyMatrix4(r),u.halfHeight.applyMatrix4(r),x++}else if(v.isPointLight){let u=n.point[p];u.position.setFromMatrixPosition(v.matrixWorld),u.position.applyMatrix4(g),p++}else if(v.isHemisphereLight){let u=n.hemi[b];u.direction.setFromMatrixPosition(v.matrixWorld),u.direction.transformDirection(g),b++}}}return{setup:o,setupView:c,state:n}}function Vm(a){let e=new E_(a),t=[],n=[],i=[];function s(d){h.camera=d,t.length=0,n.length=0,i.length=0}function r(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:l,pushLight:r,pushShadow:o}}function A_(a){let e=new WeakMap;function t(i,s=0){let r=e.get(i),o;return r===void 0?(o=new Vm(a),e.set(i,[o])):s>=r.length?(o=new Vm(a),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var T_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
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
}`,I_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],C_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],jm=new Xe,ac=new P,Ef=new P;function N_(a,e,t){let n=new Ei,i=new ge,s=new ge,r=new yt,o=new _l,c=new Sl,l={},h=t.maxTextureSize,d={[Ii]:cn,[cn]:Ii,[Ot]:Ot},f=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:T_,fragmentShader:R_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new rt;m.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new nt(m,f),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fs;let g=this.type;this.render=function(w,M,S){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||w.length===0)return;this.type===Lp&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fs);let R=a.getRenderTarget(),T=a.getActiveCubeFace(),N=a.getActiveMipmapLevel(),U=a.state;U.setBlending(aa),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=g!==this.type;O&&M.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(B=>B.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,B=w.length;C<B;C++){let H=w[C],j=H.shadow;if(j===void 0){Qe("WebGLShadowMap:",H,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);let z=j.getFrameExtents();i.multiply(z),s.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,j.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,j.mapSize.y=s.y));let q=a.state.buffers.depth.getReversed();if(j.camera._reversedDepth=q,j.map===null||O===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===hr){if(H.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Ht(i.x,i.y,{format:Ia,type:Ft,minFilter:St,magFilter:St,generateMipmaps:!1}),j.map.texture.name=H.name+".shadowMap",j.map.depthTexture=new mi(i.x,i.y,zt),j.map.depthTexture.name=H.name+".shadowMapDepth",j.map.depthTexture.format=Yi,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=kt,j.map.depthTexture.magFilter=kt}else H.isPointLight?(j.map=new rc(i.x),j.map.depthTexture=new bo(i.x,bi)):(j.map=new Ht(i.x,i.y),j.map.depthTexture=new mi(i.x,i.y,bi)),j.map.depthTexture.name=H.name+".shadowMap",j.map.depthTexture.format=Yi,this.type===fs?(j.map.depthTexture.compareFunction=q?df:hf,j.map.depthTexture.minFilter=St,j.map.depthTexture.magFilter=St):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=kt,j.map.depthTexture.magFilter=kt);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==i.x||j.map.height!==i.y)&&j.map.setSize(i.x,i.y);let Y=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();H.isPointLight!==!0&&j.updateMatrices(H,S);let ee=(j.camera.layers.mask&4294967294)!==0?j.camera.layers:S.layers;for(let me=0;me<Y;me++){let _e=j.getCamera(me);if(H.isPointLight){let ie=j.camera,be=j.matrix,Pe=H.distance||ie.far;Pe!==ie.far&&(ie.far=Pe,ie.updateProjectionMatrix()),ac.setFromMatrixPosition(H.matrixWorld),ie.position.copy(ac),Ef.copy(ie.position),Ef.add(I_[me]),ie.up.copy(C_[me]),ie.lookAt(Ef),ie.updateMatrixWorld(),be.makeTranslation(-ac.x,-ac.y,-ac.z),jm.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),j._frustum.setFromProjectionMatrix(jm,ie.coordinateSystem,ie.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)a.setRenderTarget(j.map,me),a.clear();else{me===0&&(a.setRenderTarget(j.map),a.clear());let ie=j.getViewport(me);r.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),U.viewport(r)}n=j.getFrustum(me),v(M,S,_e,H,ee,this.type)}j.isPointLightShadow!==!0&&this.type===hr&&y(j,S),j.needsUpdate=!1}g=this.type,b.needsUpdate=!1,a.setRenderTarget(R,T,N)};function y(w,M){let S=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ht(i.x,i.y,{format:Ia,type:Ft}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(M,null,S,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(M,null,S,p,x,null)}function _(w,M,S,R){let T=null,N=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)T=N;else if(T=S.isPointLight===!0?c:o,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){let U=T.uuid,O=M.uuid,C=l[U];C===void 0&&(C={},l[U]=C);let B=C[O];B===void 0&&(B=T.clone(),C[O]=B,M.addEventListener("dispose",u)),T=B}if(T.visible=M.visible,T.wireframe=M.wireframe,R===hr?T.side=M.shadowSide!==null?M.shadowSide:M.side:T.side=M.shadowSide!==null?M.shadowSide:d[M.side],T.alphaMap=M.alphaMap,T.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,T.map=M.map,T.clipShadows=M.clipShadows,T.clippingPlanes=M.clippingPlanes,T.clipIntersection=M.clipIntersection,T.displacementMap=M.displacementMap,T.displacementScale=M.displacementScale,T.displacementBias=M.displacementBias,T.wireframeLinewidth=M.wireframeLinewidth,T.linewidth=M.linewidth,S.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let U=a.properties.get(T);U.light=S}return T}function v(w,M,S,R,T,N){if(w.visible===!1)return;if(w.layers.test(T)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===hr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let C=e.update(w),B=w.material;if(Array.isArray(B)){let H=C.groups;for(let j=0,z=H.length;j<z;j++){let q=H[j],Y=B[q.materialIndex];if(Y&&Y.visible){let ee=_(w,Y,R,N);w.onBeforeShadow(a,w,M,S,C,ee,q),a.renderBufferDirect(S,null,C,ee,w,q),w.onAfterShadow(a,w,M,S,C,ee,q)}}}else if(B.visible){let H=_(w,B,R,N);w.onBeforeShadow(a,w,M,S,C,H,null),a.renderBufferDirect(S,null,C,H,w,null),w.onAfterShadow(a,w,M,S,C,H,null)}}let O=w.children;for(let C=0,B=O.length;C<B;C++)v(O[C],M,S,R,T,N)}function u(w){w.target.removeEventListener("dispose",u);for(let S in l){let R=l[S],T=w.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}function P_(a,e){function t(){let V=!1,pe=new yt,ce=null,De=new yt(0,0,0,0);return{setMask:function(Ee){ce!==Ee&&!V&&(a.colorMask(Ee,Ee,Ee,Ee),ce=Ee)},setLocked:function(Ee){V=Ee},setClear:function(Ee,Se,$e,ft,we){we===!0&&(Ee*=ft,Se*=ft,$e*=ft),pe.set(Ee,Se,$e,ft),De.equals(pe)===!1&&(a.clearColor(Ee,Se,$e,ft),De.copy(pe))},reset:function(){V=!1,ce=null,De.set(-1,0,0,0)}}}function n(){let V=!1,pe=!1,ce=null,De=null,Ee=null;return{setReversed:function(Se){if(pe!==Se){let $e=e.get("EXT_clip_control");Se?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),pe=Se;let ft=Ee;Ee=null,this.setClear(ft)}},getReversed:function(){return pe},setTest:function(Se){Se?Ie(a.DEPTH_TEST):We(a.DEPTH_TEST)},setMask:function(Se){ce!==Se&&!V&&(a.depthMask(Se),ce=Se)},setFunc:function(Se){if(pe&&(Se=mm[Se]),De!==Se){switch(Se){case il:a.depthFunc(a.NEVER);break;case al:a.depthFunc(a.ALWAYS);break;case sl:a.depthFunc(a.LESS);break;case Ks:a.depthFunc(a.LEQUAL);break;case rl:a.depthFunc(a.EQUAL);break;case ol:a.depthFunc(a.GEQUAL);break;case cl:a.depthFunc(a.GREATER);break;case ll:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}De=Se}},setLocked:function(Se){V=Se},setClear:function(Se){Ee!==Se&&(Ee=Se,pe&&(Se=1-Se),a.clearDepth(Se))},reset:function(){V=!1,ce=null,De=null,Ee=null,pe=!1}}}function i(){let V=!1,pe=null,ce=null,De=null,Ee=null,Se=null,$e=null,ft=null,we=null;return{setTest:function(tt){V||(tt?Ie(a.STENCIL_TEST):We(a.STENCIL_TEST))},setMask:function(tt){pe!==tt&&!V&&(a.stencilMask(tt),pe=tt)},setFunc:function(tt,dt,Be){(ce!==tt||De!==dt||Ee!==Be)&&(a.stencilFunc(tt,dt,Be),ce=tt,De=dt,Ee=Be)},setOp:function(tt,dt,Be){(Se!==tt||$e!==dt||ft!==Be)&&(a.stencilOp(tt,dt,Be),Se=tt,$e=dt,ft=Be)},setLocked:function(tt){V=tt},setClear:function(tt){we!==tt&&(a.clearStencil(tt),we=tt)},reset:function(){V=!1,pe=null,ce=null,De=null,Ee=null,Se=null,$e=null,ft=null,we=null}}}let s=new t,r=new n,o=new i,c={},l=new WeakMap,h={},d={},f={},p=new WeakMap,m=[],x=null,b=!1,g=null,y=null,_=null,v=null,u=null,w=null,M=null,S=new He(0,0,0),R=0,T=!1,N=null,U=null,O=null,C=null,B=null,H=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,z=0,q=a.getParameter(a.VERSION);q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=z>=1):q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=z>=2);let Y=null,ee={},me=a.getParameter(a.SCISSOR_BOX),_e=a.getParameter(a.VIEWPORT),ie=new yt().fromArray(me),be=new yt().fromArray(_e);function Pe(V,pe,ce,De){let Ee=new Uint8Array(4),Se=a.createTexture();a.bindTexture(V,Se),a.texParameteri(V,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(V,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let $e=0;$e<ce;$e++)V===a.TEXTURE_3D||V===a.TEXTURE_2D_ARRAY?a.texImage3D(pe,0,a.RGBA,1,1,De,0,a.RGBA,a.UNSIGNED_BYTE,Ee):a.texImage2D(pe+$e,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ee);return Se}let Fe={};Fe[a.TEXTURE_2D]=Pe(a.TEXTURE_2D,a.TEXTURE_2D,1),Fe[a.TEXTURE_CUBE_MAP]=Pe(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[a.TEXTURE_2D_ARRAY]=Pe(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Fe[a.TEXTURE_3D]=Pe(a.TEXTURE_3D,a.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Ie(a.DEPTH_TEST),r.setFunc(Ks),Ue(!1),Te(Jd),Ie(a.CULL_FACE),Me(aa);function Ie(V){h[V]!==!0&&(a.enable(V),h[V]=!0)}function We(V){h[V]!==!1&&(a.disable(V),h[V]=!1)}function ht(V,pe){return f[V]!==pe?(a.bindFramebuffer(V,pe),f[V]=pe,V===a.DRAW_FRAMEBUFFER&&(f[a.FRAMEBUFFER]=pe),V===a.FRAMEBUFFER&&(f[a.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ve(V,pe){let ce=m,De=!1;if(V){ce=p.get(pe),ce===void 0&&(ce=[],p.set(pe,ce));let Ee=V.textures;if(ce.length!==Ee.length||ce[0]!==a.COLOR_ATTACHMENT0){for(let Se=0,$e=Ee.length;Se<$e;Se++)ce[Se]=a.COLOR_ATTACHMENT0+Se;ce.length=Ee.length,De=!0}}else ce[0]!==a.BACK&&(ce[0]=a.BACK,De=!0);De&&a.drawBuffers(ce)}function Oe(V){return x!==V?(a.useProgram(V),x=V,!0):!1}let qe={[us]:a.FUNC_ADD,[Up]:a.FUNC_SUBTRACT,[kp]:a.FUNC_REVERSE_SUBTRACT};qe[Op]=a.MIN,qe[Fp]=a.MAX;let re={[Bp]:a.ZERO,[zp]:a.ONE,[Hp]:a.SRC_COLOR,[$d]:a.SRC_ALPHA,[Xp]:a.SRC_ALPHA_SATURATE,[Wp]:a.DST_COLOR,[Vp]:a.DST_ALPHA,[Gp]:a.ONE_MINUS_SRC_COLOR,[ef]:a.ONE_MINUS_SRC_ALPHA,[qp]:a.ONE_MINUS_DST_COLOR,[jp]:a.ONE_MINUS_DST_ALPHA,[Kp]:a.CONSTANT_COLOR,[Yp]:a.ONE_MINUS_CONSTANT_COLOR,[Jp]:a.CONSTANT_ALPHA,[Zp]:a.ONE_MINUS_CONSTANT_ALPHA};function Me(V,pe,ce,De,Ee,Se,$e,ft,we,tt){if(V===aa){b===!0&&(We(a.BLEND),b=!1);return}if(b===!1&&(Ie(a.BLEND),b=!0),V!==Dp){if(V!==g||tt!==T){if((y!==us||u!==us)&&(a.blendEquation(a.FUNC_ADD),y=us,u=us),tt)switch(V){case dr:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case An:a.blendFunc(a.ONE,a.ONE);break;case Zd:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case Qd:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:it("WebGLState: Invalid blending: ",V);break}else switch(V){case dr:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case An:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case Zd:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qd:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",V);break}_=null,v=null,w=null,M=null,S.set(0,0,0),R=0,g=V,T=tt}return}Ee=Ee||pe,Se=Se||ce,$e=$e||De,(pe!==y||Ee!==u)&&(a.blendEquationSeparate(qe[pe],qe[Ee]),y=pe,u=Ee),(ce!==_||De!==v||Se!==w||$e!==M)&&(a.blendFuncSeparate(re[ce],re[De],re[Se],re[$e]),_=ce,v=De,w=Se,M=$e),(ft.equals(S)===!1||we!==R)&&(a.blendColor(ft.r,ft.g,ft.b,we),S.copy(ft),R=we),g=V,T=!1}function ye(V,pe){V.side===Ot?We(a.CULL_FACE):Ie(a.CULL_FACE);let ce=V.side===cn;pe&&(ce=!ce),Ue(ce),V.blending===dr&&V.transparent===!1?Me(aa):Me(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),s.setMask(V.colorWrite);let De=V.stencilWrite;o.setTest(De),De&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),de(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ie(a.SAMPLE_ALPHA_TO_COVERAGE):We(a.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(V){N!==V&&(V?a.frontFace(a.CW):a.frontFace(a.CCW),N=V)}function Te(V){V!==Np?(Ie(a.CULL_FACE),V!==U&&(V===Jd?a.cullFace(a.BACK):V===Pp?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):We(a.CULL_FACE),U=V}function oe(V){V!==O&&(j&&a.lineWidth(V),O=V)}function de(V,pe,ce){V?(Ie(a.POLYGON_OFFSET_FILL),(C!==pe||B!==ce)&&(C=pe,B=ce,r.getReversed()&&(pe=-pe,ce=-ce),a.polygonOffset(pe,ce))):We(a.POLYGON_OFFSET_FILL)}function Ae(V){V?Ie(a.SCISSOR_TEST):We(a.SCISSOR_TEST)}function Ce(V){V===void 0&&(V=a.TEXTURE0+H-1),Y!==V&&(a.activeTexture(V),Y=V)}function Je(V,pe,ce){ce===void 0&&(Y===null?ce=a.TEXTURE0+H-1:ce=Y);let De=ee[ce];De===void 0&&(De={type:void 0,texture:void 0},ee[ce]=De),(De.type!==V||De.texture!==pe)&&(Y!==ce&&(a.activeTexture(ce),Y=ce),a.bindTexture(V,pe||Fe[V]),De.type=V,De.texture=pe)}function F(){let V=ee[Y];V!==void 0&&V.type!==void 0&&(a.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ke(){try{a.compressedTexImage2D(...arguments)}catch(V){it("WebGLState:",V)}}function Ze(){try{a.compressedTexImage3D(...arguments)}catch(V){it("WebGLState:",V)}}function ct(){try{a.texSubImage2D(...arguments)}catch(V){it("WebGLState:",V)}}function xe(){try{a.texSubImage3D(...arguments)}catch(V){it("WebGLState:",V)}}function mt(){try{a.compressedTexSubImage2D(...arguments)}catch(V){it("WebGLState:",V)}}function ze(){try{a.compressedTexSubImage3D(...arguments)}catch(V){it("WebGLState:",V)}}function Ye(){try{a.texStorage2D(...arguments)}catch(V){it("WebGLState:",V)}}function D(){try{a.texStorage3D(...arguments)}catch(V){it("WebGLState:",V)}}function A(){try{a.texImage2D(...arguments)}catch(V){it("WebGLState:",V)}}function Q(){try{a.texImage3D(...arguments)}catch(V){it("WebGLState:",V)}}function ve(V){return d[V]!==void 0?d[V]:a.getParameter(V)}function le(V,pe){d[V]!==pe&&(a.pixelStorei(V,pe),d[V]=pe)}function Re(V){ie.equals(V)===!1&&(a.scissor(V.x,V.y,V.z,V.w),ie.copy(V))}function Ne(V){be.equals(V)===!1&&(a.viewport(V.x,V.y,V.z,V.w),be.copy(V))}function he(V,pe){let ce=l.get(pe);ce===void 0&&(ce=new WeakMap,l.set(pe,ce));let De=ce.get(V);De===void 0&&(De=a.getUniformBlockIndex(pe,V.name),a.uniformBlockBinding(pe,De,De),ce.set(V,De))}function fe(V,pe,ce){let Ee=l.get(pe).get(V);c[Ee]!==ce&&(a.bindBufferBase(a.UNIFORM_BUFFER,Ee,ce),c[Ee]=ce)}function Le(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),r.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),h={},d={},Y=null,ee={},f={},c={},p=new WeakMap,m=[],x=null,b=!1,g=null,y=null,_=null,v=null,u=null,w=null,M=null,S=new He(0,0,0),R=0,T=!1,N=null,U=null,O=null,C=null,B=null,ie.set(0,0,a.canvas.width,a.canvas.height),be.set(0,0,a.canvas.width,a.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Ie,disable:We,bindFramebuffer:ht,drawBuffers:Ve,useProgram:Oe,setBlending:Me,setMaterial:ye,setFlipSided:Ue,setCullFace:Te,setLineWidth:oe,setPolygonOffset:de,setScissorTest:Ae,activeTexture:Ce,bindTexture:Je,unbindTexture:F,compressedTexImage2D:Ke,compressedTexImage3D:Ze,texImage2D:A,texImage3D:Q,pixelStorei:le,getParameter:ve,updateUBOMapping:he,uniformBlockBinding:fe,texStorage2D:Ye,texStorage3D:D,texSubImage2D:ct,texSubImage3D:xe,compressedTexSubImage2D:mt,compressedTexSubImage3D:ze,scissor:Re,viewport:Ne,reset:Le}}function L_(a,e,t,n,i,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ge,h=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,x=new FinalizationRegistry(D=>m.delete(D)),b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,A){return b?new OffscreenCanvas(D,A):Js("canvas")}function y(D,A,Q){let ve=1,le=Ye(D);if((le.width>Q||le.height>Q)&&(ve=Q/Math.max(le.width,le.height)),ve<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let Re=Math.floor(ve*le.width),Ne=Math.floor(ve*le.height);f===void 0&&(f=g(Re,Ne));let he=A?g(Re,Ne):f;return he.width=Re,he.height=Ne,he.getContext("2d").drawImage(D,0,0,Re,Ne),Qe("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+Re+"x"+Ne+")."),he}else return"data"in D&&Qe("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),D;return D}function _(D){return D.generateMipmaps}function v(D){a.generateMipmap(D)}function u(D){return D.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?a.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function w(D,A,Q,ve,le,Re=!1){if(D!==null){if(a[D]!==void 0)return a[D];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ne;ve&&(Ne=e.get("EXT_texture_norm16"),Ne||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=A;if(A===a.RED&&(Q===a.FLOAT&&(he=a.R32F),Q===a.HALF_FLOAT&&(he=a.R16F),Q===a.UNSIGNED_BYTE&&(he=a.R8),Q===a.UNSIGNED_SHORT&&Ne&&(he=Ne.R16_EXT),Q===a.SHORT&&Ne&&(he=Ne.R16_SNORM_EXT)),A===a.RED_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.R8UI),Q===a.UNSIGNED_SHORT&&(he=a.R16UI),Q===a.UNSIGNED_INT&&(he=a.R32UI),Q===a.BYTE&&(he=a.R8I),Q===a.SHORT&&(he=a.R16I),Q===a.INT&&(he=a.R32I)),A===a.RG&&(Q===a.FLOAT&&(he=a.RG32F),Q===a.HALF_FLOAT&&(he=a.RG16F),Q===a.UNSIGNED_BYTE&&(he=a.RG8),Q===a.UNSIGNED_SHORT&&Ne&&(he=Ne.RG16_EXT),Q===a.SHORT&&Ne&&(he=Ne.RG16_SNORM_EXT)),A===a.RG_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.RG8UI),Q===a.UNSIGNED_SHORT&&(he=a.RG16UI),Q===a.UNSIGNED_INT&&(he=a.RG32UI),Q===a.BYTE&&(he=a.RG8I),Q===a.SHORT&&(he=a.RG16I),Q===a.INT&&(he=a.RG32I)),A===a.RGB_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.RGB8UI),Q===a.UNSIGNED_SHORT&&(he=a.RGB16UI),Q===a.UNSIGNED_INT&&(he=a.RGB32UI),Q===a.BYTE&&(he=a.RGB8I),Q===a.SHORT&&(he=a.RGB16I),Q===a.INT&&(he=a.RGB32I)),A===a.RGBA_INTEGER&&(Q===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),Q===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),Q===a.UNSIGNED_INT&&(he=a.RGBA32UI),Q===a.BYTE&&(he=a.RGBA8I),Q===a.SHORT&&(he=a.RGBA16I),Q===a.INT&&(he=a.RGBA32I)),A===a.RGB&&(Q===a.UNSIGNED_SHORT&&Ne&&(he=Ne.RGB16_EXT),Q===a.SHORT&&Ne&&(he=Ne.RGB16_SNORM_EXT),Q===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),Q===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),A===a.RGBA){let fe=Re?so:ut.getTransfer(le);Q===a.FLOAT&&(he=a.RGBA32F),Q===a.HALF_FLOAT&&(he=a.RGBA16F),Q===a.UNSIGNED_BYTE&&(he=fe===_t?a.SRGB8_ALPHA8:a.RGBA8),Q===a.UNSIGNED_SHORT&&Ne&&(he=Ne.RGBA16_EXT),Q===a.SHORT&&Ne&&(he=Ne.RGBA16_SNORM_EXT),Q===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),Q===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function M(D,A){let Q;return D?A===null||A===bi||A===bs?Q=a.DEPTH24_STENCIL8:A===zt?Q=a.DEPTH32F_STENCIL8:A===pr&&(Q=a.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===bi||A===bs?Q=a.DEPTH_COMPONENT24:A===zt?Q=a.DEPTH_COMPONENT32F:A===pr&&(Q=a.DEPTH_COMPONENT16),Q}function S(D,A){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==kt&&D.minFilter!==St?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function R(D){let A=new WeakRef(D);n.get(D).__ref=A,m.add(A),x.register(D,A,A)}function T(D){let A=n.get(D).__ref;A!==void 0&&(m.delete(A),x.unregister(A))}function N(D){O(D.target)}function U(D){C(D.target)}function O(D){D.removeEventListener("dispose",N),T(D),H(D),D.isVideoTexture&&h.delete(D),D.isHTMLTexture&&d.delete(D)}function C(D){D.removeEventListener("dispose",U),T(D),z(D)}function B(){for(let D of m){let A=D.deref();A!==void 0&&(A.isRenderTarget===!0?C(A):O(A))}m.clear(),d.clear()}function H(D){let A=n.get(D);if(A.__webglInit===void 0)return;let Q=D.source,ve=p.get(Q);if(ve){let le=ve[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&j(D),Object.keys(ve).length===0&&p.delete(Q)}n.remove(D)}function j(D){let A=n.get(D);a.deleteTexture(A.__webglTexture);let Q=D.source,ve=p.get(Q);delete ve[A.__cacheKey],r.memory.textures--}function z(D){let A=n.get(D);A.__depthDisposeCallback&&A.__depthDisposeCallback();let Q=D.depthTexture;if(Q&&Q.renderTarget===D&&O(Q),D.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(A.__webglFramebuffer[le]))for(let Re=0;Re<A.__webglFramebuffer[le].length;Re++)a.deleteFramebuffer(A.__webglFramebuffer[le][Re]);else a.deleteFramebuffer(A.__webglFramebuffer[le]);A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer[le])}else{if(Array.isArray(A.__webglFramebuffer))for(let le=0;le<A.__webglFramebuffer.length;le++)a.deleteFramebuffer(A.__webglFramebuffer[le]);else a.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&a.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let le=0;le<A.__webglColorRenderbuffer.length;le++)A.__webglColorRenderbuffer[le]&&a.deleteRenderbuffer(A.__webglColorRenderbuffer[le]);A.__webglDepthRenderbuffer&&a.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let ve=D.textures;for(let le=0,Re=ve.length;le<Re;le++){let Ne=n.get(ve[le]);Ne.__webglTexture&&(a.deleteTexture(Ne.__webglTexture),r.memory.textures--),n.remove(ve[le])}n.remove(D)}let q=0;function Y(){q=0}function ee(){return q}function me(D){q=D}function _e(){let D=q;return D>=i.maxTextures&&Qe("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+i.maxTextures),q+=1,D}function ie(D){let A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.mipmapsAutoUpdate),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function be(D,A){let Q=n.get(D);if(D.isVideoTexture&&mt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){let ve=D.image;if(ve===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(Q,D,A);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,Q.__webglTexture,a.TEXTURE0+A)}function Pe(D,A){let Q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){ye(Q,D,A);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,Q.__webglTexture,a.TEXTURE0+A)}function Fe(D,A){let Q=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){ye(Q,D,A);return}t.bindTexture(a.TEXTURE_3D,Q.__webglTexture,a.TEXTURE0+A)}function Ie(D,A){let Q=n.get(D);if(D.version>0&&Q.__version!==D.version){Ue(Q,D,A);return}t.bindTexture(a.TEXTURE_CUBE_MAP,Q.__webglTexture,a.TEXTURE0+A)}let We={[pn]:a.REPEAT,[Nn]:a.CLAMP_TO_EDGE,[Ys]:a.MIRRORED_REPEAT},ht={[kt]:a.NEAREST,[Ul]:a.NEAREST_MIPMAP_NEAREST,[gs]:a.NEAREST_MIPMAP_LINEAR,[St]:a.LINEAR,[ur]:a.LINEAR_MIPMAP_NEAREST,[Yt]:a.LINEAR_MIPMAP_LINEAR},Ve={[om]:a.NEVER,[ff]:a.ALWAYS,[cm]:a.LESS,[hf]:a.LEQUAL,[lm]:a.EQUAL,[df]:a.GEQUAL,[hm]:a.GREATER,[dm]:a.NOTEQUAL};function Oe(D,A){if(A.type===zt&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===St||A.magFilter===ur||A.magFilter===gs||A.magFilter===Yt||A.minFilter===St||A.minFilter===ur||A.minFilter===gs||A.minFilter===Yt)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(D,a.TEXTURE_WRAP_S,We[A.wrapS]),a.texParameteri(D,a.TEXTURE_WRAP_T,We[A.wrapT]),(D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY)&&a.texParameteri(D,a.TEXTURE_WRAP_R,We[A.wrapR]),a.texParameteri(D,a.TEXTURE_MAG_FILTER,ht[A.magFilter]),a.texParameteri(D,a.TEXTURE_MIN_FILTER,ht[A.minFilter]),A.compareFunction&&(a.texParameteri(D,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(D,a.TEXTURE_COMPARE_FUNC,Ve[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===kt||A.minFilter!==gs&&A.minFilter!==Yt||A.type===zt&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function qe(D,A){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",N),R(A));let ve=A.source,le=p.get(ve);le===void 0&&(le={},p.set(ve,le));let Re=ie(A);if(Re!==D.__cacheKey){le[Re]===void 0&&(le[Re]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,Q=!0),le[Re].usedTimes++;let Ne=le[D.__cacheKey];Ne!==void 0&&(le[D.__cacheKey].usedTimes--,Ne.usedTimes===0&&j(A)),D.__cacheKey=Re,D.__webglTexture=le[Re].texture}return Q}function re(D,A,Q){return Math.floor(Math.floor(D/Q)/A)}function Me(D,A,Q,ve){let Re=D.updateRanges;if(Re.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,A.width,A.height,Q,ve,A.data);else{Re.sort((V,pe)=>V.start-pe.start);let Ne=0;for(let V=1;V<Re.length;V++){let pe=Re[Ne],ce=Re[V],De=pe.start+pe.count,Ee=re(ce.start,A.width,4),Se=re(pe.start,A.width,4);ce.start<=De+1&&Ee===Se&&re(ce.start+ce.count-1,A.width,4)===Ee?pe.count=Math.max(pe.count,ce.start+ce.count-pe.start):(++Ne,Re[Ne]=ce)}Re.length=Ne+1;let he=t.getParameter(a.UNPACK_ROW_LENGTH),fe=t.getParameter(a.UNPACK_SKIP_PIXELS),Le=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,A.width);for(let V=0,pe=Re.length;V<pe;V++){let ce=Re[V],De=Math.floor(ce.start/4),Ee=Math.ceil(ce.count/4),Se=De%A.width,$e=Math.floor(De/A.width),ft=Ee,we=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(a.UNPACK_SKIP_ROWS,$e),t.texSubImage2D(a.TEXTURE_2D,0,Se,$e,ft,we,Q,ve,A.data)}D.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,he),t.pixelStorei(a.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(a.UNPACK_SKIP_ROWS,Le)}}function ye(D,A,Q){let ve=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ve=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ve=a.TEXTURE_3D);let le=qe(D,A),Re=A.source;t.bindTexture(ve,D.__webglTexture,a.TEXTURE0+Q);let Ne=n.get(Re);if(Re.version!==Ne.__version||le===!0){if(t.activeTexture(a.TEXTURE0+Q),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){let we=ut.getPrimaries(ut.workingColorSpace),tt=A.colorSpace===ra?null:ut.getPrimaries(A.colorSpace),dt=A.colorSpace===ra||we===tt?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt)}t.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment);let fe=y(A.image,!1,i.maxTextureSize);fe=ze(A,fe);let Le=s.convert(A.format,A.colorSpace),V=s.convert(A.type),pe=w(A.internalFormat,Le,V,A.normalized,A.colorSpace,A.isVideoTexture);Oe(ve,A);let ce,De=A.mipmaps,Ee=A.isVideoTexture!==!0,Se=Ne.__version===void 0||le===!0,$e=Re.dataReady,ft=S(A,fe);if(A.isDepthTexture)pe=M(A.format===sa,A.type),Se&&(Ee?t.texStorage2D(a.TEXTURE_2D,1,pe,fe.width,fe.height):t.texImage2D(a.TEXTURE_2D,0,pe,fe.width,fe.height,0,Le,V,null));else if(A.isDataTexture)if(De.length>0){Ee&&Se&&t.texStorage2D(a.TEXTURE_2D,ft,pe,De[0].width,De[0].height);for(let we=0,tt=De.length;we<tt;we++)ce=De[we],Ee?$e&&t.texSubImage2D(a.TEXTURE_2D,we,0,0,ce.width,ce.height,Le,V,ce.data):t.texImage2D(a.TEXTURE_2D,we,pe,ce.width,ce.height,0,Le,V,ce.data);A.generateMipmaps=!1}else Ee?(Se&&t.texStorage2D(a.TEXTURE_2D,ft,pe,fe.width,fe.height),$e&&Me(A,fe,Le,V)):t.texImage2D(a.TEXTURE_2D,0,pe,fe.width,fe.height,0,Le,V,fe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ee&&Se&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ft,pe,De[0].width,De[0].height,fe.depth);for(let we=0,tt=De.length;we<tt;we++)if(ce=De[we],A.format!==Tn)if(Le!==null)if(Ee){if($e)if(A.layerUpdates.size>0){let dt=Sf(ce.width,ce.height,A.format,A.type);for(let Be of A.layerUpdates){let Mt=ce.data.subarray(Be*dt/ce.data.BYTES_PER_ELEMENT,(Be+1)*dt/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,we,0,0,Be,ce.width,ce.height,1,Le,Mt)}}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,we,0,0,0,ce.width,ce.height,fe.depth,Le,ce.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,we,pe,ce.width,ce.height,fe.depth,0,ce.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?$e&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,we,0,0,0,ce.width,ce.height,fe.depth,Le,V,ce.data):t.texImage3D(a.TEXTURE_2D_ARRAY,we,pe,ce.width,ce.height,fe.depth,0,Le,V,ce.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Ee&&Se&&t.texStorage2D(a.TEXTURE_2D,ft,pe,De[0].width,De[0].height);for(let we=0,tt=De.length;we<tt;we++)ce=De[we],A.format!==Tn?Le!==null?Ee?$e&&t.compressedTexSubImage2D(a.TEXTURE_2D,we,0,0,ce.width,ce.height,Le,ce.data):t.compressedTexImage2D(a.TEXTURE_2D,we,pe,ce.width,ce.height,0,ce.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?$e&&t.texSubImage2D(a.TEXTURE_2D,we,0,0,ce.width,ce.height,Le,V,ce.data):t.texImage2D(a.TEXTURE_2D,we,pe,ce.width,ce.height,0,Le,V,ce.data)}else if(A.isDataArrayTexture)if(Ee){if(Se&&t.texStorage3D(a.TEXTURE_2D_ARRAY,ft,pe,fe.width,fe.height,fe.depth),$e)if(A.layerUpdates.size>0){let we=Sf(fe.width,fe.height,A.format,A.type);for(let tt of A.layerUpdates){let dt=fe.data.subarray(tt*we/fe.data.BYTES_PER_ELEMENT,(tt+1)*we/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,tt,fe.width,fe.height,1,Le,V,dt)}A.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Le,V,fe.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,pe,fe.width,fe.height,fe.depth,0,Le,V,fe.data);else if(A.isData3DTexture)Ee?(Se&&t.texStorage3D(a.TEXTURE_3D,ft,pe,fe.width,fe.height,fe.depth),$e&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Le,V,fe.data)):t.texImage3D(a.TEXTURE_3D,0,pe,fe.width,fe.height,fe.depth,0,Le,V,fe.data);else if(A.isFramebufferTexture){if(Se)if(Ee)t.texStorage2D(a.TEXTURE_2D,ft,pe,fe.width,fe.height);else{let we=fe.width,tt=fe.height;for(let dt=0;dt<ft;dt++)t.texImage2D(a.TEXTURE_2D,dt,pe,we,tt,0,Le,V,null),we>>=1,tt>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in a){let we=a.canvas;if(we.hasAttribute("layoutsubtree")||we.setAttribute("layoutsubtree","true"),fe.parentNode!==we){we.appendChild(fe),d.add(A),we.onpaint=tt=>{let dt=tt.changedElements;for(let Be of d)dt.includes(Be.image)&&(Be.needsUpdate=!0)},we.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,fe);else{let dt=a.RGBA,Be=a.RGBA,Mt=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,dt,Be,Mt,fe)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ee&&Se){let we=Ye(De[0]);t.texStorage2D(a.TEXTURE_2D,ft,pe,we.width,we.height)}for(let we=0,tt=De.length;we<tt;we++)ce=De[we],Ee?$e&&t.texSubImage2D(a.TEXTURE_2D,we,0,0,Le,V,ce):t.texImage2D(a.TEXTURE_2D,we,pe,Le,V,ce);A.generateMipmaps=!1}else if(Ee){if(Se){let we=Ye(fe);t.texStorage2D(a.TEXTURE_2D,ft,pe,we.width,we.height)}$e&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Le,V,fe)}else t.texImage2D(a.TEXTURE_2D,0,pe,Le,V,fe);_(A)&&A.mipmapsAutoUpdate===!0&&v(ve),Ne.__version=Re.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Ue(D,A,Q){if(A.image.length!==6)return;let ve=qe(D,A),le=A.source;t.bindTexture(a.TEXTURE_CUBE_MAP,D.__webglTexture,a.TEXTURE0+Q);let Re=n.get(le);if(le.version!==Re.__version||ve===!0){t.activeTexture(a.TEXTURE0+Q);let Ne=ut.getPrimaries(ut.workingColorSpace),he=A.colorSpace===ra?null:ut.getPrimaries(A.colorSpace),fe=A.colorSpace===ra||Ne===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Le=A.isCompressedTexture||A.image[0].isCompressedTexture,V=A.image[0]&&A.image[0].isDataTexture,pe=[];for(let Be=0;Be<6;Be++)!Le&&!V?pe[Be]=y(A.image[Be],!0,i.maxCubemapSize):pe[Be]=V?A.image[Be].image:A.image[Be],pe[Be]=ze(A,pe[Be]);let ce=pe[0],De=s.convert(A.format,A.colorSpace),Ee=s.convert(A.type),Se=w(A.internalFormat,De,Ee,A.normalized,A.colorSpace),$e=A.isVideoTexture!==!0,ft=Re.__version===void 0||ve===!0,we=le.dataReady,tt=S(A,ce);Oe(a.TEXTURE_CUBE_MAP,A);let dt;if(A.isDepthTexture){if(Se=M(A.format===sa,A.type),ft)if($e)t.texStorage2D(a.TEXTURE_CUBE_MAP,1,Se,ce.width,ce.height);else for(let Be=0;Be<6;Be++)t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Se,ce.width,ce.height,0,De,Ee,null)}else if(Le){$e&&ft&&t.texStorage2D(a.TEXTURE_CUBE_MAP,tt,Se,ce.width,ce.height);for(let Be=0;Be<6;Be++){dt=pe[Be].mipmaps;for(let Mt=0;Mt<dt.length;Mt++){let Vt=dt[Mt];A.format!==Tn?De!==null?$e?we&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Mt,0,0,Vt.width,Vt.height,De,Vt.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Mt,Se,Vt.width,Vt.height,0,Vt.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?we&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Mt,0,0,Vt.width,Vt.height,De,Ee,Vt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Mt,Se,Vt.width,Vt.height,0,De,Ee,Vt.data)}}}else{if(dt=A.mipmaps,$e&&ft){dt.length>0&&tt++;let Be=Ye(pe[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,tt,Se,Be.width,Be.height)}for(let Be=0;Be<6;Be++)if(V){$e?we&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,0,0,pe[Be].width,pe[Be].height,De,Ee,pe[Be].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Se,pe[Be].width,pe[Be].height,0,De,Ee,pe[Be].data);for(let Mt=0;Mt<dt.length;Mt++){let qn=dt[Mt].image[Be].image;$e?we&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Mt+1,0,0,qn.width,qn.height,De,Ee,qn.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Mt+1,Se,qn.width,qn.height,0,De,Ee,qn.data)}}else{$e?we&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,0,0,De,Ee,pe[Be]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Se,De,Ee,pe[Be]);for(let Mt=0;Mt<dt.length;Mt++){let Vt=dt[Mt];$e?we&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Mt+1,0,0,De,Ee,Vt.image[Be]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Be,Mt+1,Se,De,Ee,Vt.image[Be])}}}_(A)&&A.mipmapsAutoUpdate===!0&&v(a.TEXTURE_CUBE_MAP),Re.__version=le.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Te(D,A,Q,ve,le,Re){let Ne=s.convert(Q.format,Q.colorSpace),he=s.convert(Q.type),fe=w(Q.internalFormat,Ne,he,Q.normalized,Q.colorSpace),Le=n.get(A),V=n.get(Q);if(V.__renderTarget=A,!Le.__hasExternalTextures){let pe=Math.max(1,A.width>>Re),ce=Math.max(1,A.height>>Re);le===a.TEXTURE_3D||le===a.TEXTURE_2D_ARRAY?t.texImage3D(le,Re,fe,pe,ce,A.depth,0,Ne,he,null):t.texImage2D(le,Re,fe,pe,ce,0,Ne,he,null)}t.bindFramebuffer(a.FRAMEBUFFER,D),xe(A)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ve,le,V.__webglTexture,0,ct(A)):(le===a.TEXTURE_2D||le>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ve,le,V.__webglTexture,Re),t.bindFramebuffer(a.FRAMEBUFFER,null)}function oe(D,A,Q){if(a.bindRenderbuffer(a.RENDERBUFFER,D),A.depthBuffer){let ve=A.depthTexture,le=ve&&ve.isDepthTexture?ve.type:null,Re=M(A.stencilBuffer,le),Ne=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;xe(A)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ct(A),Re,A.width,A.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,ct(A),Re,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,Re,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ne,a.RENDERBUFFER,D)}else{let ve=A.textures;for(let le=0;le<ve.length;le++){let Re=ve[le],Ne=s.convert(Re.format,Re.colorSpace),he=s.convert(Re.type),fe=w(Re.internalFormat,Ne,he,Re.normalized,Re.colorSpace);xe(A)?o.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,ct(A),fe,A.width,A.height):Q?a.renderbufferStorageMultisample(a.RENDERBUFFER,ct(A),fe,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,fe,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function de(D,A,Q){let ve=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=n.get(A.depthTexture);le.__renderTarget=A;let Re=ve?A.depthTexture.image[0]:A.depthTexture.image;(!le.__webglTexture||Re.width!==A.width||Re.height!==A.height)&&(Re.width=A.width,Re.height=A.height,A.depthTexture.needsUpdate=!0),ve?Ie(A.depthTexture,0):be(A.depthTexture,0);let Ne=le.__webglTexture,he=ct(A),fe=ve?a.TEXTURE_CUBE_MAP_POSITIVE_X+Q:a.TEXTURE_2D,Le=A.depthTexture.format===sa?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(A.depthTexture.format===Yi)xe(A)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Le,fe,Ne,0,he):a.framebufferTexture2D(a.FRAMEBUFFER,Le,fe,Ne,0);else if(A.depthTexture.format===sa)xe(A)?o.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Le,fe,Ne,0,he):a.framebufferTexture2D(a.FRAMEBUFFER,Le,fe,Ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ae(D){let A=n.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){let ve=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ve){let le=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ve.removeEventListener("dispose",le)};ve.addEventListener("dispose",le),A.__depthDisposeCallback=le}A.__boundDepthTexture=ve}if(D.depthTexture&&!A.__autoAllocateDepthBuffer)if(Q)for(let ve=0;ve<6;ve++)de(A.__webglFramebuffer[ve],D,ve);else D.texture.mipmaps.length>0?de(A.__webglFramebuffer[0],D,0):de(A.__webglFramebuffer,D,0);else if(Q){A.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[ve]),A.__webglDepthbuffer[ve]===void 0)A.__webglDepthbuffer[ve]=a.createRenderbuffer(),oe(A.__webglDepthbuffer[ve],D,!1);else{let le=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=A.__webglDepthbuffer[ve];a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,le,a.RENDERBUFFER,Re)}}else if(D.texture.mipmaps.length>0?t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=a.createRenderbuffer(),oe(A.__webglDepthbuffer,D,!1);else{let le=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=A.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,le,a.RENDERBUFFER,Re)}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ce(D,A,Q){let ve=n.get(D);A!==void 0&&Te(ve.__webglFramebuffer,D,D.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Q!==void 0&&Ae(D)}function Je(D){let A=D.texture,Q=n.get(D),ve=n.get(A);D.addEventListener("dispose",U),R(D);let le=D.textures,Re=D.isWebGLCubeRenderTarget===!0,Ne=le.length>1;if(Ne||(ve.__webglTexture===void 0&&(ve.__webglTexture=a.createTexture()),ve.__version=A.version,r.memory.textures++),Re){Q.__webglFramebuffer=[];for(let he=0;he<6;he++)if(A.mipmaps.length>0){Q.__webglFramebuffer[he]=[];for(let fe=0;fe<A.mipmaps.length;fe++)Q.__webglFramebuffer[he][fe]=a.createFramebuffer()}else Q.__webglFramebuffer[he]=a.createFramebuffer()}else{if(A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let he=0;he<A.mipmaps.length;he++)Q.__webglFramebuffer[he]=a.createFramebuffer()}else Q.__webglFramebuffer=a.createFramebuffer();if(Ne)for(let he=0,fe=le.length;he<fe;he++){let Le=n.get(le[he]);Le.__webglTexture===void 0&&(Le.__webglTexture=a.createTexture(),r.memory.textures++)}if(D.samples>0&&xe(D)===!1){Q.__webglMultisampledFramebuffer=a.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let he=0;he<le.length;he++){let fe=le[he];Q.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Q.__webglColorRenderbuffer[he]);let Le=s.convert(fe.format,fe.colorSpace),V=s.convert(fe.type),pe=w(fe.internalFormat,Le,V,fe.normalized,fe.colorSpace,D.isXRRenderTarget===!0),ce=ct(D);a.renderbufferStorageMultisample(a.RENDERBUFFER,ce,pe,D.width,D.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,Q.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=a.createRenderbuffer(),oe(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Re){t.bindTexture(a.TEXTURE_CUBE_MAP,ve.__webglTexture),Oe(a.TEXTURE_CUBE_MAP,A);for(let he=0;he<6;he++)if(A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)Te(Q.__webglFramebuffer[he][fe],D,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else Te(Q.__webglFramebuffer[he],D,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(A)?v(a.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&a.texParameteri(a.TEXTURE_CUBE_MAP,a.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}else if(Ne){for(let he=0,fe=le.length;he<fe;he++){let Le=le[he],V=n.get(Le),pe=a.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(pe=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(pe,V.__webglTexture),Oe(pe,Le),Te(Q.__webglFramebuffer,D,Le,a.COLOR_ATTACHMENT0+he,pe,0),_(Le)&&v(pe)}t.unbindTexture()}else{let he=a.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(he,ve.__webglTexture),Oe(he,A),A.mipmaps.length>0)for(let fe=0;fe<A.mipmaps.length;fe++)Te(Q.__webglFramebuffer[fe],D,A,a.COLOR_ATTACHMENT0,he,fe);else Te(Q.__webglFramebuffer,D,A,a.COLOR_ATTACHMENT0,he,0);_(A)?v(he):A.mipmaps.length>0&&a.texParameteri(he,a.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),t.unbindTexture()}D.depthBuffer&&Ae(D)}function F(D){let A=D.textures;for(let Q=0,ve=A.length;Q<ve;Q++){let le=A[Q];if(_(le)&&le.mipmapsAutoUpdate===!0){let Re=u(D),Ne=n.get(le).__webglTexture;t.bindTexture(Re,Ne),v(Re),t.unbindTexture()}}}let Ke=[];function Ze(D){if(D.samples>0){if(xe(D)===!1){let A=D.textures,Q=D.width,ve=D.height,le=a.COLOR_BUFFER_BIT,Re=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ne=n.get(D),he=A.length>1;if(he)for(let Le=0;Le<A.length;Le++)t.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Le=0;Le<A.length;Le++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(le|=a.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(le|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ne.__webglColorRenderbuffer[Le]);let V=n.get(A[Le]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,V,0)}a.blitFramebuffer(0,0,Q,ve,0,0,Q,ve,le,a.NEAREST),c===!0&&(Ke.length=0,Ke.push(a.COLOR_ATTACHMENT0+Le),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&Ke.push(Re),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let Le=0;Le<A.length;Le++){t.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,Ne.__webglColorRenderbuffer[Le]);let V=n.get(A[Le]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Ne.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,V,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&c){let A=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[A])}}}function ct(D){return Math.min(i.maxSamples,D.samples)}function xe(D){let A=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function mt(D){let A=r.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}function ze(D,A){let Q=D.colorSpace,ve=D.format,le=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==rn&&Q!==ra&&(ut.getTransfer(Q)===_t?(ve!==Tn||le!==ln)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",Q)),A}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=_e,this.resetTextureUnits=Y,this.getTextureUnits=ee,this.setTextureUnits=me,this.setTexture2D=be,this.setTexture2DArray=Pe,this.setTexture3D=Fe,this.setTextureCube=Ie,this.rebindTextures=Ce,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=xe,this.dispose=B}function D_(a,e){function t(n,i=ra){let s,r=ut.getTransfer(i);if(n===ln)return a.UNSIGNED_BYTE;if(n===Ol)return a.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return a.UNSIGNED_SHORT_5_5_5_1;if(n===sf)return a.UNSIGNED_INT_5_9_9_9_REV;if(n===rf)return a.UNSIGNED_INT_10F_11F_11F_REV;if(n===nf)return a.BYTE;if(n===af)return a.SHORT;if(n===pr)return a.UNSIGNED_SHORT;if(n===kl)return a.INT;if(n===bi)return a.UNSIGNED_INT;if(n===zt)return a.FLOAT;if(n===Ft)return a.HALF_FLOAT;if(n===of)return a.ALPHA;if(n===cf)return a.RGB;if(n===Tn)return a.RGBA;if(n===Yi)return a.DEPTH_COMPONENT;if(n===sa)return a.DEPTH_STENCIL;if(n===mr)return a.RED;if(n===Bl)return a.RED_INTEGER;if(n===Ia)return a.RG;if(n===zl)return a.RG_INTEGER;if(n===Hl)return a.RGBA_INTEGER;if(n===Yo||n===Jo||n===Zo||n===Qo)if(r===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gl||n===Vl||n===jl||n===Wl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===Xl||n===Kl||n===Yl||n===Jl||n===$o||n===Zl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ql||n===Xl)return r===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Kl)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yl)return s.COMPRESSED_R11_EAC;if(n===Jl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===$o)return s.COMPRESSED_RG11_EAC;if(n===Zl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ql||n===$l||n===eh||n===th||n===nh||n===ih||n===ah||n===sh||n===rh||n===oh||n===ch||n===lh||n===hh||n===dh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ql)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$l)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===th)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ih)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ch)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dh)return r===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fh||n===uh||n===ph)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===fh)return r===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ph)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mh||n===gh||n===ec||n===bh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===mh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===gh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ec)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?a.UNSIGNED_INT_24_8:a[n]!==void 0?a[n]:null}return{convert:t}}var U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
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

}`,Pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pt({vertexShader:U_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lf=class extends fi{constructor(e,t){super();let n=this,i=null,s=1,r=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,m=null,x=typeof XRWebGLBinding<"u",b=new Pf,g={},y=t.getContextAttributes(),_=null,v=null,u=[],w=[],M=new ge,S=null,R=null,T=new Xt;T.viewport=new yt;let N=new Xt;N.viewport=new yt;let U=[T,N],O=new Il,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let be=u[ie];return be===void 0&&(be=new er,u[ie]=be),be.getTargetRaySpace()},this.getControllerGrip=function(ie){let be=u[ie];return be===void 0&&(be=new er,u[ie]=be),be.getGripSpace()},this.getHand=function(ie){let be=u[ie];return be===void 0&&(be=new er,u[ie]=be),be.getHandSpace()};function H(ie){let be=w.indexOf(ie.inputSource);if(be===-1)return;let Pe=u[be];Pe!==void 0&&(Pe.update(ie.inputSource,ie.frame,l||r),Pe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function j(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",z);for(let ie=0;ie<u.length;ie++){let be=w[ie];be!==null&&(w[ie]=null,u[ie].disconnect(be))}C=null,B=null,b.reset();for(let ie in g)delete g[ie];if(e.setRenderTarget(_),p=null,f=null,d=null,i=null,v=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(M.width,M.height,!1),R!==null){let ie=R.camera;ie.fov=R.fov,ie.zoom=R.zoom,ie.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",j),i.addEventListener("inputsourceschange",z),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(M),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Fe=null,Ie=null;y.depth&&(Ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=y.stencil?sa:Yi,Fe=y.stencil?bs:bi);let We={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(We),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ht(f.textureWidth,f.textureHeight,{format:Tn,type:ln,depthTexture:new mi(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Pe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Pe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ht(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await i.requestReferenceSpace(o),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function z(ie){for(let be=0;be<ie.removed.length;be++){let Pe=ie.removed[be],Fe=w.indexOf(Pe);Fe>=0&&(w[Fe]=null,u[Fe].disconnect(Pe))}for(let be=0;be<ie.added.length;be++){let Pe=ie.added[be],Fe=w.indexOf(Pe);if(Fe===-1){for(let We=0;We<u.length;We++)if(We>=w.length){w.push(Pe),Fe=We;break}else if(w[We]===null){w[We]=Pe,Fe=We;break}if(Fe===-1)break}let Ie=u[Fe];Ie&&Ie.connect(Pe)}}function q(ie,be){be===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(be.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;let be=ie.near,Pe=ie.far;b.texture!==null&&(b.depthNear>0&&(be=b.depthNear),b.depthFar>0&&(Pe=b.depthFar)),O.near=N.near=T.near=be,O.far=N.far=T.far=Pe,(C!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),C=O.near,B=O.far),O.layers.mask=ie.layers.mask|6,T.layers.mask=O.layers.mask&-5,N.layers.mask=O.layers.mask&-3;let Fe=ie.parent,Ie=O.cameras;q(O,Fe);for(let We=0;We<Ie.length;We++)q(Ie[We],Fe);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),R===null&&ie.isPerspectiveCamera&&(R={camera:ie,fov:ie.fov,zoom:ie.zoom}),Y(ie,O,Fe)};function Y(ie,be,Pe){Pe===null?ie.matrix.copy(be.matrixWorld):(ie.matrix.copy(Pe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(be.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(be.projectionMatrix),ie.projectionMatrixInverse.copy(be.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=$a*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(ie){c=ie,f!==null&&(f.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(O)},this.getCameraTexture=function(ie){return g[ie]};let ee=null;function me(ie,be){if(h=be.getViewerPose(l||r),m=be,h!==null){let Pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Fe=!1;Pe.length!==O.cameras.length&&(O.cameras.length=0,Fe=!0);for(let Ve=0;Ve<Pe.length;Ve++){let Oe=Pe[Ve],qe=null;if(p!==null)qe=p.getViewport(Oe);else{let Me=d.getViewSubImage(f,Oe);qe=Me.viewport,Ve===0&&(e.setRenderTargetTextures(v,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(v))}let re=U[Ve];re===void 0&&(re=new Xt,re.layers.enable(Ve),re.viewport=new yt,U[Ve]=re),re.matrix.fromArray(Oe.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Oe.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(qe.x,qe.y,qe.width,qe.height),Ve===0&&(O.matrix.copy(re.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Fe===!0&&O.cameras.push(re)}let Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Ve=d.getDepthInformation(Pe[0]);Ve&&Ve.isValid&&Ve.texture&&b.init(Ve,i.renderState)}if(Ie&&Ie.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let Ve=0;Ve<Pe.length;Ve++){let Oe=Pe[Ve].camera;if(Oe){let qe=g[Oe];qe||(qe=new xo,g[Oe]=qe);let re=d.getCameraImage(Oe);qe.sourceTexture=re}}}}for(let Pe=0;Pe<u.length;Pe++){let Fe=w[Pe],Ie=u[Pe];Fe!==null&&Ie!==void 0&&Ie.update(Fe,be,l||r)}ee&&ee(ie,be),be.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:be}),m=null}let _e=new Wm;_e.setAnimationLoop(me),this.setAnimationLoop=function(ie){ee=ie},this.dispose=function(){}}},O_=new Xe,tg=new ot;tg.set(-1,0,0,0,1,0,0,0,1);function F_(a,e){function t(b,g){b.matrixAutoUpdate===!0&&b.updateMatrix(),g.value.copy(b.matrix)}function n(b,g){g.color.getRGB(b.fogColor.value,yf(a)),g.isFog?(b.fogNear.value=g.near,b.fogFar.value=g.far):g.isFogExp2&&(b.fogDensity.value=g.density)}function i(b,g,y,_,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(b,g):g.isMeshLambertMaterial?(s(b,g),g.envMap&&(b.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(b,g),d(b,g)):g.isMeshPhongMaterial?(s(b,g),h(b,g),g.envMap&&(b.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(b,g),f(b,g),g.isMeshPhysicalMaterial&&p(b,g,v)):g.isMeshMatcapMaterial?(s(b,g),m(b,g)):g.isMeshDepthMaterial?s(b,g):g.isMeshDistanceMaterial?(s(b,g),x(b,g)):g.isMeshNormalMaterial?s(b,g):g.isLineBasicMaterial?(r(b,g),g.isLineDashedMaterial&&o(b,g)):g.isPointsMaterial?c(b,g,y,_):g.isSpriteMaterial?l(b,g):g.isShadowMaterial?(b.color.value.copy(g.color),b.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(b,g){b.opacity.value=g.opacity,g.color&&b.diffuse.value.copy(g.color),g.emissive&&b.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(b.map.value=g.map,t(g.map,b.mapTransform)),g.alphaMap&&(b.alphaMap.value=g.alphaMap,t(g.alphaMap,b.alphaMapTransform)),g.bumpMap&&(b.bumpMap.value=g.bumpMap,t(g.bumpMap,b.bumpMapTransform),b.bumpScale.value=g.bumpScale,g.side===cn&&(b.bumpScale.value*=-1)),g.normalMap&&(b.normalMap.value=g.normalMap,t(g.normalMap,b.normalMapTransform),b.normalScale.value.copy(g.normalScale),g.side===cn&&b.normalScale.value.negate()),g.displacementMap&&(b.displacementMap.value=g.displacementMap,t(g.displacementMap,b.displacementMapTransform),b.displacementScale.value=g.displacementScale,b.displacementBias.value=g.displacementBias),g.emissiveMap&&(b.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,b.emissiveMapTransform)),g.specularMap&&(b.specularMap.value=g.specularMap,t(g.specularMap,b.specularMapTransform)),g.alphaTest>0&&(b.alphaTest.value=g.alphaTest);let y=e.get(g),_=y.envMap,v=y.envMapRotation;_&&(b.envMap.value=_,b.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(tg),b.reflectivity.value=g.reflectivity,b.ior.value=g.ior,b.refractionRatio.value=g.refractionRatio),g.lightMap&&(b.lightMap.value=g.lightMap,b.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,b.lightMapTransform)),g.aoMap&&(b.aoMap.value=g.aoMap,b.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,b.aoMapTransform))}function r(b,g){b.diffuse.value.copy(g.color),b.opacity.value=g.opacity,g.map&&(b.map.value=g.map,t(g.map,b.mapTransform))}function o(b,g){b.dashSize.value=g.dashSize,b.totalSize.value=g.dashSize+g.gapSize,b.scale.value=g.scale}function c(b,g,y,_){b.diffuse.value.copy(g.color),b.opacity.value=g.opacity,b.size.value=g.size*y,b.scale.value=_*.5,g.map&&(b.map.value=g.map,t(g.map,b.uvTransform)),g.alphaMap&&(b.alphaMap.value=g.alphaMap,t(g.alphaMap,b.alphaMapTransform)),g.alphaTest>0&&(b.alphaTest.value=g.alphaTest)}function l(b,g){b.diffuse.value.copy(g.color),b.opacity.value=g.opacity,b.rotation.value=g.rotation,g.map&&(b.map.value=g.map,t(g.map,b.mapTransform)),g.alphaMap&&(b.alphaMap.value=g.alphaMap,t(g.alphaMap,b.alphaMapTransform)),g.alphaTest>0&&(b.alphaTest.value=g.alphaTest)}function h(b,g){b.specular.value.copy(g.specular),b.shininess.value=Math.max(g.shininess,1e-4)}function d(b,g){g.gradientMap&&(b.gradientMap.value=g.gradientMap)}function f(b,g){b.metalness.value=g.metalness,g.metalnessMap&&(b.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,b.metalnessMapTransform)),b.roughness.value=g.roughness,g.roughnessMap&&(b.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,b.roughnessMapTransform)),g.envMap&&(b.envMapIntensity.value=g.envMapIntensity)}function p(b,g,y){b.ior.value=g.ior,g.diffuseRoughness>0&&(b.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(b.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,b.diffuseRoughnessMapTransform))),g.sheen>0&&(b.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),b.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(b.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,b.sheenColorMapTransform)),g.sheenRoughnessMap&&(b.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,b.sheenRoughnessMapTransform))),g.clearcoat>0&&(b.clearcoat.value=g.clearcoat,b.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(b.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,b.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(b.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===cn&&b.clearcoatNormalScale.value.negate())),g.dispersion>0&&(b.dispersion.value=g.dispersion),g.retroreflectivity>0&&(b.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(b.iridescence.value=g.iridescence,b.iridescenceIOR.value=g.iridescenceIOR,b.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,b.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(b.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,b.iridescenceMapTransform)),g.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),g.transmission>0&&(b.transmission.value=g.transmission,b.transmissionSamplerMap.value=y.texture,b.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(b.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,b.transmissionMapTransform)),b.thickness.value=g.thickness,g.thicknessMap&&(b.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=g.attenuationDistance,b.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(b.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(b.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=g.specularIntensity,b.specularColor.value.copy(g.specularColor),g.specularColorMap&&(b.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,b.specularColorMapTransform)),g.specularIntensityMap&&(b.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,b.specularIntensityMapTransform))}function m(b,g){g.matcap&&(b.matcap.value=g.matcap)}function x(b,g){let y=e.get(g).light;b.referencePosition.value.setFromMatrixPosition(y.matrixWorld),b.nearDistance.value=y.shadow.camera.near,b.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function B_(a,e,t,n){let i={},s={};function r(y,_){let v=_.program;n.uniformBlockBinding(y,v,i[y.id])}function o(y,_){let v=i[y.id];v===void 0&&(m(y),v=c(y),i[y.id]=v,y.addEventListener("dispose",b));let u=_.program;n.updateUBOMapping(y,u);let w=e.render.frame;s[y.id]!==w&&(l(y),s[y.id]=w)}function c(y){let _=a.createBuffer(),v=y.__size,u=y.usage;return a.bindBuffer(a.UNIFORM_BUFFER,_),a.bufferData(a.UNIFORM_BUFFER,v,u),a.bindBuffer(a.UNIFORM_BUFFER,null),_}function l(y){let _=i[y.id],v=y.uniforms,u=y.__cache;a.bindBuffer(a.UNIFORM_BUFFER,_);for(let w=0,M=v.length;w<M;w++){let S=v[w];if(Array.isArray(S))for(let R=0,T=S.length;R<T;R++)h(S[R],w,R,u);else h(S,w,0,u)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function h(y,_,v,u){if(f(y,_,v,u)===!0){let w=y.__offset,M=y.value;if(Array.isArray(M)){let S=0;for(let R=0;R<M.length;R++){let T=M[R],N=x(T,!0);d(T,y.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(M,y.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,w,y.__data)}}function d(y,_,v){typeof y=="number"||typeof y=="boolean"?_[v]=y:y.isMatrix3?(_[v]=y.elements[0],_[v+1]=y.elements[1],_[v+2]=y.elements[2],_[v+3]=0,_[v+4]=y.elements[3],_[v+5]=y.elements[4],_[v+6]=y.elements[5],_[v+7]=0,_[v+8]=y.elements[6],_[v+9]=y.elements[7],_[v+10]=y.elements[8],_[v+11]=0):ArrayBuffer.isView(y)?_.set(y.subarray(0,_.length-v),v):y.toArray(_,v)}function f(y,_,v,u){let w=y.value,M=_+"_"+v;if(Array.isArray(w)){u[M]===void 0&&(u[M]=[]);let S=u[M],R=!1;for(let T=0;T<w.length;T++)p(w[T],S,T)===!0&&(R=!0);return R}return p(w,u,M)}function p(y,_,v){if(_[v]===void 0)return typeof y=="number"||typeof y=="boolean"?_[v]=y:ArrayBuffer.isView(y)?_[v]=y.slice():_[v]=y.clone(),!0;{let u=_[v];if(typeof y=="number"||typeof y=="boolean"){if(u!==y)return _[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(u.equals(y)===!1)return u.copy(y),!0}}return!1}function m(y){let _=y.uniforms,v=0,u=16;for(let M=0,S=_.length;M<S;M++){let R=Array.isArray(_[M])?_[M]:[_[M]];for(let T=0,N=R.length;T<N;T++){let U=R[T],O=Array.isArray(U.value)?U.value:[U.value],C=Array.isArray(_[M])||Array.isArray(U.value),B=v;for(let j=0,z=O.length;j<z;j++){let q=O[j],Y=x(q,C),ee=v%u,me=ee%Y.boundary,_e=ee+me;v+=me,_e!==0&&u-_e<Y.storage&&(v+=u-_e),j===0&&(B=v),v+=Y.storage}let H=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new H((v-B)/Float32Array.BYTES_PER_ELEMENT),U.__offset=B}}let w=v%u;return w>0&&(v+=u-w),y.__size=v,y.__cache={},this}function x(y,_){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",y),_===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function b(y){let _=y.target;_.removeEventListener("dispose",b),a.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function g(){for(let y in i)a.deleteBuffer(i[y]);i={},s={}}return{bind:r,update:o,dispose:g}}var z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function H_(){return Ni===null&&(Ni=new ui(z_,16,16,Ia,Ft),Ni.name="DFG_LUT",Ni.minFilter=St,Ni.magFilter=St,Ni.wrapS=Nn,Ni.wrapT=Nn,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var Sh=class{constructor(e={}){let{canvas:t=fm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=ln}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;let x=p,b=new Set([Hl,zl,Bl]),g=new Set([ln,bi,pr,bs,Ol,Fl]),y=new Uint32Array(4),_=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},u=null,w=null,M=[],S=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,N=!1,U=null,O=null,C=null,B=null;this._outputColorSpace=Et;let H=0,j=0,z=null,q=-1,Y=null,ee=new yt,me=new yt,_e=null,ie=new He(0),be=0,Pe=t.width,Fe=t.height,Ie=1,We=null,ht=null,Ve=new yt(0,0,Pe,Fe),Oe=new yt(0,0,Pe,Fe),qe=!1,re=new Ei,Me=new ul,ye=!1,Ue=!1,Te=new Xe,oe=new P,de=new yt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function Je(){return z===null?Ie:1}let F=n;function Ke(I,X){return t.getContext(I,X)}let Ze,ct,xe,mt,ze,Ye,D,A,Q,ve,le,Re,Ne,he,fe,Le,V,pe,ce,De,Ee,Se,$e;try{let I={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Be,!1),F===null){let X="webgl2";if(F=Ke(X,I),F===null)throw Ke(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(I){throw t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),it("WebGLRenderer: "+I.message),I}function ft(){Ze=new Qy(F),Ze.init(),Ee=new D_(F,Ze),ct=new Hy(F,Ze,e,Ee),xe=new P_(F,Ze),ct.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),O=F.createFramebuffer(),C=F.createFramebuffer(),B=F.createFramebuffer(),mt=new tM(F),ze=new x_,Ye=new L_(F,Ze,xe,ze,ct,Ee,mt),D=new Zy(T),A=new ix(F),Se=new By(F,A),Q=new $y(F,A,mt,Se),ve=new iM(F,Q,A,Se,mt),pe=new nM(F,ct,Ye),fe=new Gy(ze),le=new b_(T,D,Ze,ct,Se,fe),Re=new F_(T,ze),Ne=new y_,he=new A_(Ze),V=new Fy(T,D,xe,ve,m,c),Le=new N_(T,ve,ct),$e=new B_(F,mt,ct,xe),ce=new zy(F,Ze,mt),De=new eM(F,Ze,mt),mt.programs=le.programs,T.capabilities=ct,T.extensions=Ze,T.properties=ze,T.renderLists=Ne,T.shadowMap=Le,T.state=xe,T.info=mt}x!==ln&&(R=new sM(x,t.width,t.height,o,i,s));let we=new Lf(T,F);this.xr=we,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let I=Ze.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Ze.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(I){I!==void 0&&(Ie=I,this.setSize(Pe,Fe,!1))},this.getSize=function(I){return I.set(Pe,Fe)},this.setSize=function(I,X,ae=!0){if(we.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=I,Fe=X,t.width=Math.floor(I*Ie),t.height=Math.floor(X*Ie),ae===!0&&(t.style.width=I+"px",t.style.height=X+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,I,X)},this.getDrawingBufferSize=function(I){return I.set(Pe*Ie,Fe*Ie).floor()},this.setDrawingBufferSize=function(I,X,ae){Pe=I,Fe=X,Ie=ae,t.width=Math.floor(I*ae),t.height=Math.floor(X*ae),this.setViewport(0,0,I,X)},this.setEffects=function(I){if(x===ln){it("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let X=0;X<I.length;X++)if(I[X].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(ee)},this.getViewport=function(I){return I.copy(Ve)},this.setViewport=function(I,X,ae,te){I.isVector4?Ve.set(I.x,I.y,I.z,I.w):Ve.set(I,X,ae,te),xe.viewport(ee.copy(Ve).multiplyScalar(Je()).round())},this.getScissor=function(I){return I.copy(Oe)},this.setScissor=function(I,X,ae,te){I.isVector4?Oe.set(I.x,I.y,I.z,I.w):Oe.set(I,X,ae,te),xe.scissor(me.copy(Oe).multiplyScalar(Je()).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(I){xe.setScissorTest(qe=I)},this.setOpaqueSort=function(I){We=I},this.setTransparentSort=function(I){ht=I},this.getClearColor=function(I){return I.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(I=!0,X=!0,ae=!0){let te=0;if(I){let ne=!1;if(z!==null){let E=z.texture.format;ne=b.has(E)}if(ne){let E=z.texture.type,k=g.has(E),L=V.getClearColor(),W=V.getClearAlpha(),G=L.r,Z=L.g,K=L.b;k?(y[0]=G,y[1]=Z,y[2]=K,y[3]=W,F.clearBufferuiv(F.COLOR,0,y)):(_[0]=G,_[1]=Z,_[2]=K,_[3]=W,F.clearBufferiv(F.COLOR,0,_))}else te|=F.COLOR_BUFFER_BIT}X&&(te|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),U=I},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),V.dispose(),Ne.dispose(),he.dispose(),Ye.dispose(),ze.dispose(),D.dispose(),ve.dispose(),Q.dispose(),Se.dispose(),$e.dispose(),le.dispose(),we.dispose(),we.removeEventListener("sessionstart",As),we.removeEventListener("sessionend",Ts),Xn.stop()};function tt(I){I.preventDefault(),ro("WebGLRenderer: Context Lost."),N=!0}function dt(){ro("WebGLRenderer: Context Restored."),N=!1;let I=mt.autoReset,X=Le.enabled,ae=Le.autoUpdate,te=Le.needsUpdate,ne=Le.type;ft(),mt.autoReset=I,Le.enabled=X,Le.autoUpdate=ae,Le.needsUpdate=te,Le.type=ne}function Be(I){it("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Mt(I){let X=I.target;X.removeEventListener("dispose",Mt),Vt(X)}function Vt(I){qn(I),ze.remove(I)}function qn(I){let X=ze.get(I).programs;X!==void 0&&(X.forEach(function(ae){le.releaseProgram(ae)}),I.isShaderMaterial&&le.releaseShaderCache(I))}this.renderBufferDirect=function(I,X,ae,te,ne,E){X===null&&(X=Ae);let k=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,L=Br(I,X,ae,te,ne);xe.setMaterial(te,k);let W=ae.index,G=1;if(te.wireframe===!0){if(W=Q.getWireframeAttribute(ae),W===void 0)return;G=2}let Z=ae.drawRange,K=ae.attributes.position,J=Z.start*G,ue=(Z.start+Z.count)*G;E!==null&&(J=Math.max(J,E.start*G),ue=Math.min(ue,(E.start+E.count)*G)),W!==null?(J=Math.max(J,0),ue=Math.min(ue,W.count)):K!=null&&(J=Math.max(J,0),ue=Math.min(ue,K.count));let se=ue-J;if(se<0||se===1/0)return;Se.setup(ne,te,L,ae,W);let $,je=ce;if(W!==null&&($=A.get(W),je=De,je.setIndex($)),ne.isMesh)te.wireframe===!0?(xe.setLineWidth(te.wireframeLinewidth*Je()),je.setMode(F.LINES)):je.setMode(F.TRIANGLES);else if(ne.isLine){let at=te.linewidth;at===void 0&&(at=1),xe.setLineWidth(at*Je()),ne.isLineSegments?je.setMode(F.LINES):ne.isLineLoop?je.setMode(F.LINE_LOOP):je.setMode(F.LINE_STRIP)}else ne.isPoints?je.setMode(F.POINTS):ne.isSprite&&je.setMode(F.TRIANGLES);if(ne.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))je.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let at=ne._multiDrawStarts,ke=ne._multiDrawCounts,Qt=ne._multiDrawCount,xt=W?A.get(W).bytesPerElement:1,In=ze.get(te).currentProgram.getUniforms();for(let Nt=0;Nt<Qt;Nt++)In.setValue(F,"_gl_DrawID",Nt),je.render(at[Nt]/xt,ke[Nt])}else if(ne.isInstancedMesh)je.renderInstances(J,se,ne.count);else if(ae.isInstancedBufferGeometry){let at=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,ke=Math.min(ae.instanceCount,at);je.renderInstances(J,se,ke)}else je.render(J,se)};function _c(I,X,ae,te){U!==null&&I.isNodeMaterial&&U.setObject(te,I),ye===!0&&fe.setState(I,ae,!1),I.transparent===!0&&I.side===Ot&&I.forceSinglePass===!1?(I.side=cn,I.needsUpdate=!0,Ha(I,X,te),I.side=Ii,I.needsUpdate=!0,Ha(I,X,te),I.side=Ot):Ha(I,X,te)}this.compile=function(I,X,ae=null){ae===null&&(ae=I),U!==null&&U.renderStart(I,X,ae),w=he.get(ae),w.init(X),S.push(w),ae.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(w.pushLight(ne),ne.castShadow&&w.pushShadow(ne))}),I!==ae&&I.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(w.pushLight(ne),ne.castShadow&&w.pushShadow(ne))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),Ue=this.localClippingEnabled,ye=fe.init(this.clippingPlanes,Ue),ye===!0&&fe.setGlobalState(this.clippingPlanes,X),U!==null&&Le.render(w.state.shadowsArray,ae,X);let te=new Set;return I.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let E=ne.material;if(E)if(Array.isArray(E))for(let k=0;k<E.length;k++){let L=E[k];_c(L,ae,X,ne),te.add(L)}else _c(E,ae,X,ne),te.add(E)}),w=S.pop(),U!==null&&U.renderEnd(),te},this.compileAsync=function(I,X,ae=null){let te=this.compile(I,X,ae);return new Promise(ne=>{function E(){if(te.forEach(function(k){let W=ze.get(k).currentProgram;(W===void 0||W.isReady())&&te.delete(k)}),te.size===0){ne(I);return}setTimeout(E,10)}Ze.get("KHR_parallel_shader_compile")!==null?E():setTimeout(E,10)})};let Or=null;function od(I){Or&&Or(I)}function As(){Xn.stop()}function Ts(){Xn.start()}let Xn=new Wm;Xn.setAnimationLoop(od),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(I){Or=I,we.setAnimationLoop(I),I===null?Xn.stop():Xn.start()},we.addEventListener("sessionstart",As),we.addEventListener("sessionend",Ts),this.render=function(I,X){if(X!==void 0&&X.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(I,X);let ae=we.enabled===!0&&we.isPresenting===!0,te=R!==null&&(z===null||ae)&&R.begin(T,z);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(X),X=we.getCamera()),I.isScene===!0&&I.onBeforeRender(T,I,X,z),w=he.get(I,S.length),w.init(X),w.state.textureUnits=Ye.getTextureUnits(),S.push(w),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?Me.setFromArrayCamera(X):re.setFromProjectionMatrix(Te,Yn,X.reversedDepth),Ue=this.localClippingEnabled,ye=fe.init(this.clippingPlanes,Ue),u=Ne.get(I,M.length),u.init(),M.push(u),this.info.render.frame++,we.enabled===!0&&we.isPresenting===!0){let k=T.xr.getDepthSensingMesh();k!==null&&da(k,X,-1/0,T.sortObjects)}da(I,X,0,T.sortObjects),u.finish(),U!==null&&U.updateLights(w.state.lightsArray),T.sortObjects===!0&&u.sort(We,ht),Ce=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Ce&&V.addToRenderList(u,I),this.info.autoReset===!0&&this.info.reset(),ye===!0&&fe.beginShadows();let ne=w.state.shadowsArray;if(Le.render(ne,I,X),ye===!0&&fe.endShadows(),(te&&R.hasRenderPass())===!1){let k=u.opaque,L=u.transmissive;if(w.setupLights(),X.isArrayCamera){let W=X.cameras;if(L.length>0)for(let G=0,Z=W.length;G<Z;G++){let K=W[G];Fr(k,L,I,K)}Ce&&V.render(I);for(let G=0,Z=W.length;G<Z;G++){let K=W[G];Rs(u,I,K,K.viewport)}}else L.length>0&&Fr(k,L,I,X),Ce&&V.render(I),Rs(u,I,X)}z!==null&&j===0&&(Ye.updateMultisampleRenderTarget(z),Ye.updateRenderTargetMipmap(z)),te&&R.end(T),I.isScene===!0&&I.onAfterRender(T,I,X),Se.resetDefaultState(),q=-1,Y=null,S.pop(),S.length>0?(w=S[S.length-1],Ye.setTextureUnits(w.state.textureUnits),ye===!0&&fe.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,M.pop(),M.length>0?u=M[M.length-1]:u=null,U!==null&&U.renderEnd()};function da(I,X,ae,te){if(I.visible===!1)return;if(I.layers.test(X.layers)){if(I.isGroup)ae=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(X);else if(I.isLight)w.pushLight(I),I.castShadow&&w.pushShadow(I);else if(I.isSprite){let k=X.isArrayCamera?Me:re;if(!I.frustumCulled||I.intersectsFrustum(k)){te&&de.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Te);let L=ve.update(I),W=I.material;W.visible&&u.push(I,L,W,ae,de.z,null,X)}}else if(I.isMesh||I.isLine||I.isPoints){let k=X.isArrayCamera?Me:re;if(!I.frustumCulled||I.intersectsFrustum(k)){let L=ve.update(I),W=I.material;if(te&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),de.copy(I.boundingSphere.center)):(L.boundingSphere===null&&L.computeBoundingSphere(),de.copy(L.boundingSphere.center)),de.applyMatrix4(I.matrixWorld).applyMatrix4(Te)),Array.isArray(W)){let G=L.groups;for(let Z=0,K=G.length;Z<K;Z++){let J=G[Z],ue=W[J.materialIndex];ue&&ue.visible&&u.push(I,L,ue,ae,de.z,J,X)}}else W.visible&&u.push(I,L,W,ae,de.z,null,X)}}}let E=I.children;for(let k=0,L=E.length;k<L;k++)da(E[k],X,ae,te)}function Rs(I,X,ae,te){let{opaque:ne,transmissive:E,transparent:k}=I;w.setupLightsView(ae),ye===!0&&fe.setGlobalState(T.clippingPlanes,ae),te&&xe.viewport(ee.copy(te)),ne.length>0&&fa(ne,X,ae),E.length>0&&fa(E,X,ae),k.length>0&&fa(k,X,ae),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Fr(I,X,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[te.id]===void 0){let J=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[te.id]=new Ht(1,1,{generateMipmaps:!0,type:J?Ft:ln,minFilter:Yt,samples:Math.max(4,ct.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let E=w.state.transmissionRenderTarget[te.id],k=te.viewport||ee;E.setSize(k.z*T.transmissionResolutionScale,k.w*T.transmissionResolutionScale);let L=T.getRenderTarget(),W=T.getActiveCubeFace(),G=T.getActiveMipmapLevel();T.setRenderTarget(E),T.getClearColor(ie),be=T.getClearAlpha(),be<1&&T.setClearColor(16777215,.5),T.clear(),Ce&&V.render(ae);let Z=T.toneMapping;T.toneMapping=Ci;let K=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),w.setupLightsView(te),ye===!0&&fe.setGlobalState(T.clippingPlanes,te),fa(I,ae,te),Ye.updateMultisampleRenderTarget(E),Ye.updateRenderTargetMipmap(E),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let J=!1;for(let ue=0,se=X.length;ue<se;ue++){let $=X[ue],{object:je,geometry:at,material:ke,group:Qt}=$;if(ke.side===Ot&&je.layers.test(te.layers)){let xt=ke.side;ke.side=cn,ke.needsUpdate=!0,_i(je,ae,te,at,ke,Qt),ke.side=xt,ke.needsUpdate=!0,J=!0}}J===!0&&(Ye.updateMultisampleRenderTarget(E),Ye.updateRenderTargetMipmap(E))}T.setRenderTarget(L,W,G),T.setClearColor(ie,be),K!==void 0&&(te.viewport=K),T.toneMapping=Z}function fa(I,X,ae){let te=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,E=I.length;ne<E;ne++){let k=I[ne],{object:L,geometry:W,group:G}=k,Z=k.material;Z.allowOverride===!0&&te!==null&&(Z=te),L.layers.test(ae.layers)&&_i(L,X,ae,W,Z,G)}}function _i(I,X,ae,te,ne,E){U!==null&&ne.isNodeMaterial&&U.setObject(I,ne),I.onBeforeRender(T,X,ae,te,ne,E),I.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ne.onBeforeRender(T,X,ae,te,I,E),ne.transparent===!0&&ne.side===Ot&&ne.forceSinglePass===!1?(ne.side=cn,ne.needsUpdate=!0,T.renderBufferDirect(ae,X,te,ne,I,E),ne.side=Ii,ne.needsUpdate=!0,T.renderBufferDirect(ae,X,te,ne,I,E),ne.side=Ot):T.renderBufferDirect(ae,X,te,ne,I,E),I.onAfterRender(T,X,ae,te,ne,E)}function Sc(I){let X=0;for(let ae of I)ae.texture!==null&&X++;return X}function Ha(I,X,ae){X.isScene!==!0&&(X=Ae);let te=ze.get(I),ne=w.state.lights,E=w.state.shadowsArray,k=ne.state.version,L=le.getParameters(I,ne.state,E,X,ae,w.state.lightProbeGridArray),W=le.getProgramCacheKey(L),G=te.programs;te.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;let Z=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;te.envMap=D.get(I.envMap||te.environment,Z),te.envMapRotation=te.environment!==null&&I.envMap===null?X.environmentRotation:I.envMapRotation,G===void 0&&(I.addEventListener("dispose",Mt),G=new Map,te.programs=G,te.programVariants=new Map);let K=G.get(W);if(K!==void 0){if(te.currentProgram===K&&te.lightsStateVersion===k)return wc(I,L),K}else L.uniforms=le.getUniforms(I),U!==null&&I.isNodeMaterial&&U.build(I,ae,L),I.onBeforeCompile(L,T),K=le.acquireProgram(L,W),G.set(W,K),te.uniforms=L.uniforms;let J=te.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(J.clippingPlanes=fe.uniform),wc(I,L),te.needsLights=Mn(I),te.lightsStateVersion=k,te.needsLights&&(J.ambientLightColor.value=ne.state.ambient,J.lightProbe.value=ne.state.probe,J.sunLights.value=ne.state.sun,J.sunLightShadows.value=ne.state.sunShadow,J.directionalLights.value=ne.state.directional,J.directionalLightShadows.value=ne.state.directionalShadow,J.spotLights.value=ne.state.spot,J.spotLightShadows.value=ne.state.spotShadow,J.rectAreaLights.value=ne.state.rectArea,J.ltc_1.value=ne.state.rectAreaLTC1,J.ltc_2.value=ne.state.rectAreaLTC2,J.pointLights.value=ne.state.point,J.pointLightShadows.value=ne.state.pointShadow,J.hemisphereLights.value=ne.state.hemi,J.sunShadowMatrix.value=ne.state.sunShadowMatrix,J.sunShadowCascade.value=ne.state.sunShadowCascade,J.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,J.spotLightMatrix.value=ne.state.spotLightMatrix,J.spotLightMap.value=ne.state.spotLightMap,J.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.numLightProbeGrids=Sc(w.state.lightProbeGridArray),te.currentProgram=K,te.uniformsList=null,K}function cd(I,X,ae,te,ne){let E=ze.get(I),k=E.currentProgram.id+","+te+","+ne,L=E.programVariants.get(k);return L===void 0?(L=Ha(I,X,ae),E.programVariants.set(k,L)):(E.currentProgram=L,E.uniformsList=null,E.outputColorSpace=te,E.toneMapping=ne),L}function dn(I){if(I.uniformsList===null){let X=I.currentProgram.getUniforms();I.uniformsList=br.seqWithValue(X.seq,I.uniforms)}return I.uniformsList}function wc(I,X){let ae=ze.get(I);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function Br(I,X,ae,te,ne){X.isScene!==!0&&(X=Ae),Ye.resetTextureUnits();let E=X.fog,k=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,L=z===null?T.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ut.workingColorSpace,W=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,G=D.get(te.envMap||k,W),Z=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,K=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),J=!!ae.morphAttributes.position,ue=!!ae.morphAttributes.normal,se=!!ae.morphAttributes.color,$=Ci;te.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&($=T.toneMapping);let je=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,at=je!==void 0?je.length:0,ke=ze.get(te),Qt=w.state.lights;if(ye===!0&&(Ue===!0||I!==Y)){let Dt=I===Y&&te.id===q;fe.setState(te,I,Dt)}let xt=!1,In=!1;te.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==Qt.state.version||ne.isBatchedMesh&&ke.batching===!1||!ne.isBatchedMesh&&ke.batching===!0||ne.isBatchedMesh&&ke.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&ke.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&ke.instancing===!1||!ne.isInstancedMesh&&ke.instancing===!0||ne.isSkinnedMesh&&ke.skinning===!1||!ne.isSkinnedMesh&&ke.skinning===!0||ne.isInstancedMesh&&ke.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ke.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&ke.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&ke.instancingMorph===!1&&ne.morphTexture!==null||ke.envMap!==G||te.fog===!0&&ke.fog!==E||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==fe.numPlanes||ke.numIntersection!==fe.numIntersection)||ke.vertexAlphas!==Z||ke.vertexTangents!==K||ke.morphTargets!==J||ke.morphNormals!==ue||ke.morphColors!==se||ke.morphTargetsCount!==at||ke.numLightProbeGrids!==Sc(w.state.lightProbeGridArray)?xt=!0:(ke.outputColorSpace!==L||ke.toneMapping!==$)&&(In=!0):(xt=!0,ke.__version=te.version);let Nt=ke.currentProgram;(xt===!0||In===!0)&&(Nt=In===!0?cd(te,X,ne,L,$):Ha(te,X,ne),U&&te.isNodeMaterial&&U.onUpdateProgram(te,Nt,ke));let Ga=!1,oi=!1,Cn=!1,vt=Nt.getUniforms(),sn=ke.uniforms;if(xe.useProgram(Nt.program)&&(Ga=!0,oi=!0,Cn=!0),te.id!==q&&(q=te.id,oi=!0),Ga||Y!==I){xe.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),vt.setValue(F,"projectionMatrix",I.projectionMatrix),vt.setValue(F,"viewMatrix",I.matrixWorldInverse);let $t=vt.map.cameraPosition;$t!==void 0&&$t.setValue(F,oe.setFromMatrixPosition(I.matrixWorld)),ct.logarithmicDepthBuffer&&vt.setValue(F,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&vt.setValue(F,"isOrthographic",I.isOrthographicCamera===!0),Y!==I&&(Y=I,oi=!0,Cn=!0)}if(ke.needsLights&&(Qt.state.sunShadowMap.length>0&&vt.setValue(F,"sunShadowMap",Qt.state.sunShadowMap,Ye),Qt.state.directionalShadowMap.length>0&&vt.setValue(F,"directionalShadowMap",Qt.state.directionalShadowMap,Ye),Qt.state.spotShadowMap.length>0&&vt.setValue(F,"spotShadowMap",Qt.state.spotShadowMap,Ye),Qt.state.pointShadowMap.length>0&&vt.setValue(F,"pointShadowMap",Qt.state.pointShadowMap,Ye)),ne.isSkinnedMesh){vt.setOptional(F,ne,"bindMatrix"),vt.setOptional(F,ne,"bindMatrixInverse");let Dt=ne.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),vt.setValue(F,"boneTexture",Dt.boneTexture,Ye))}ne.isBatchedMesh&&(vt.setOptional(F,ne,"batchingTexture"),vt.setValue(F,"batchingTexture",ne._matricesTexture,Ye),vt.setOptional(F,ne,"batchingIdTexture"),vt.setValue(F,"batchingIdTexture",ne._indirectTexture,Ye),vt.setOptional(F,ne,"batchingColorTexture"),ne._colorsTexture!==null&&vt.setValue(F,"batchingColorTexture",ne._colorsTexture,Ye));let ci=ae.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&pe.update(ne,ae,Nt),(oi||ke.receiveShadow!==ne.receiveShadow)&&(ke.receiveShadow=ne.receiveShadow,vt.setValue(F,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(sn.envMapIntensity.value=X.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=H_()),oi){if(vt.setValue(F,"toneMappingExposure",T.toneMappingExposure),ke.needsLights&&zr(sn,Cn),E&&te.fog===!0&&Re.refreshFogUniforms(sn,E),Re.refreshMaterialUniforms(sn,te,Ie,Fe,w.state.transmissionRenderTarget[I.id]),ke.needsLights&&ke.numLightProbeGrids>0){let Dt=v,$t=0;for(let Bi of w.state.lightProbeGridArray)Bi.texture!==null&&(Dt.textures[$t]=Bi.texture,Dt.min[$t]=Bi.boundingBox.min,Dt.max[$t]=Bi.boundingBox.max,Dt.resolution[$t]=Bi.resolution,$t++);for(let Bi in Dt)Dt[Bi].length=$t;sn.probesSH.value=Dt.textures,sn.probesMin.value=Dt.min,sn.probesMax.value=Dt.max,sn.probesResolution.value=Dt.resolution}br.upload(F,dn(ke),sn,Ye)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(br.upload(F,dn(ke),sn,Ye),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&vt.setValue(F,"center",ne.center),vt.setValue(F,"modelViewMatrix",ne.modelViewMatrix),vt.setValue(F,"normalMatrix",ne.normalMatrix),vt.setValue(F,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){let Dt=te.uniformsGroups;for(let $t=0,Bi=Dt.length;$t<Bi;$t++){let Du=Dt[$t];$e.update(Du,Nt),$e.bind(Du,Nt)}}return Nt}function zr(I,X){I.ambientLightColor.needsUpdate=X,I.lightProbe.needsUpdate=X,I.sunLights.needsUpdate=X,I.sunLightShadows.needsUpdate=X,I.directionalLights.needsUpdate=X,I.directionalLightShadows.needsUpdate=X,I.pointLights.needsUpdate=X,I.pointLightShadows.needsUpdate=X,I.spotLights.needsUpdate=X,I.spotLightShadows.needsUpdate=X,I.rectAreaLights.needsUpdate=X,I.hemisphereLights.needsUpdate=X}function Mn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(I,X,ae){let te=ze.get(I);te.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ze.get(I.texture).__webglTexture=X,ze.get(I.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,X){let ae=ze.get(I);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(I,X=0,ae=0){z=I,H=X,j=ae;let te=null,ne=!1,E=!1;if(I){let L=ze.get(I);if(L.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(F.FRAMEBUFFER,L.__webglFramebuffer),ee.copy(I.viewport),me.copy(I.scissor),_e=I.scissorTest,xe.viewport(ee),xe.scissor(me),xe.setScissorTest(_e),q=-1;return}else if(L.__webglFramebuffer===void 0)Ye.setupRenderTarget(I);else if(L.__hasExternalTextures)Ye.rebindTextures(I,ze.get(I.texture).__webglTexture,ze.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Z=I.depthTexture;if(L.__boundDepthTexture!==Z){if(Z!==null&&ze.has(Z)&&(I.width!==Z.image.width||I.height!==Z.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(I)}}let W=I.texture;(W.isData3DTexture||W.isDataArrayTexture||W.isCompressedArrayTexture)&&(E=!0);let G=ze.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(G[X])?te=G[X][ae]:te=G[X],ne=!0):I.samples>0&&Ye.useMultisampledRTT(I)===!1?te=ze.get(I).__webglMultisampledFramebuffer:Array.isArray(G)?te=G[ae]:te=G,ee.copy(I.viewport),me.copy(I.scissor),_e=I.scissorTest}else ee.copy(Ve).multiplyScalar(Ie).floor(),me.copy(Oe).multiplyScalar(Ie).floor(),_e=qe;if(ae!==0&&(te=O),xe.bindFramebuffer(F.FRAMEBUFFER,te)&&xe.drawBuffers(I,te),xe.viewport(ee),xe.scissor(me),xe.setScissorTest(_e),ne){let L=ze.get(I.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,L.__webglTexture,ae)}else if(E){let L=X;for(let W=0;W<I.textures.length;W++){let G=ze.get(I.textures[W]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+W,G.__webglTexture,ae,L)}}else if(I!==null&&ae!==0){let L=ze.get(I.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,L.__webglTexture,ae)}q=-1};function ri(I){let X=ze.get(I);return(X.__readFormat!==I.format||X.__readType!==I.type)&&(X.__readFormat=I.format,X.__readType=I.type,X.__formatReadable=ct.textureFormatReadable(I.format),X.__typeReadable=ct.textureTypeReadable(I.type)),X}this.readRenderTargetPixels=function(I,X,ae,te,ne,E,k,L=0){if(!(I&&I.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=ze.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&k!==void 0&&(W=W[k],Array.isArray(W)&&(W=W[0])),W){xe.bindFramebuffer(F.FRAMEBUFFER,W);try{let G=I.textures[L],Z=G.format,K=G.type;I.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+L);let J=ri(G);if(J.__formatReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(J.__typeReadable===!1){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=I.width-te&&ae>=0&&ae<=I.height-ne&&F.readPixels(X,ae,te,ne,Ee.convert(Z),Ee.convert(K),E)}finally{let G=z!==null?ze.get(z).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,G)}}},this.readRenderTargetPixelsAsync=async function(I,X,ae,te,ne,E,k,L=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let W=ze.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&k!==void 0&&(W=W[k],Array.isArray(W)&&(W=W[0])),W)if(X>=0&&X<=I.width-te&&ae>=0&&ae<=I.height-ne){xe.bindFramebuffer(F.FRAMEBUFFER,W);let G=I.textures[L],Z=G.format,K=G.type;I.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+L);let J=ri(G);if(J.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(J.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.bufferData(F.PIXEL_PACK_BUFFER,E.byteLength,F.STREAM_READ),F.readPixels(X,ae,te,ne,Ee.convert(Z),Ee.convert(K),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let se=z!==null?ze.get(z).__webglFramebuffer:null;xe.bindFramebuffer(F.FRAMEBUFFER,se);let $=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await pm(F,$,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ue),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,E),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ue),F.deleteSync($),E}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,X=null,ae=0){let te=Math.pow(2,-ae),ne=Math.floor(I.image.width*te),E=Math.floor(I.image.height*te),k=X!==null?X.x:0,L=X!==null?X.y:0;Ye.setTexture2D(I,0),F.copyTexSubImage2D(F.TEXTURE_2D,ae,0,0,k,L,ne,E),xe.unbindTexture()},this.copyTextureToTexture=function(I,X,ae=null,te=null,ne=0,E=0){let k,L,W,G,Z,K,J,ue,se,$=I.isCompressedTexture?I.mipmaps[E]:I.image;if(ae!==null)k=ae.max.x-ae.min.x,L=ae.max.y-ae.min.y,W=ae.isBox3?ae.max.z-ae.min.z:1,G=ae.min.x,Z=ae.min.y,K=ae.isBox3?ae.min.z:0;else{let vt=Math.pow(2,-ne);k=Math.floor($.width*vt),L=Math.floor($.height*vt),I.isDataArrayTexture?W=$.depth:I.isData3DTexture?W=Math.floor($.depth*vt):W=1,G=0,Z=0,K=0}te!==null?(J=te.x,ue=te.y,se=te.z):(J=0,ue=0,se=0);let je=Ee.convert(X.format),at=Ee.convert(X.type),ke;X.isData3DTexture?(Ye.setTexture3D(X,0),ke=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Ye.setTexture2DArray(X,0),ke=F.TEXTURE_2D_ARRAY):(Ye.setTexture2D(X,0),ke=F.TEXTURE_2D),xe.activeTexture(F.TEXTURE0),xe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),xe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),xe.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);let Qt=xe.getParameter(F.UNPACK_ROW_LENGTH),xt=xe.getParameter(F.UNPACK_IMAGE_HEIGHT),In=xe.getParameter(F.UNPACK_SKIP_PIXELS),Nt=xe.getParameter(F.UNPACK_SKIP_ROWS),Ga=xe.getParameter(F.UNPACK_SKIP_IMAGES);xe.pixelStorei(F.UNPACK_ROW_LENGTH,$.width),xe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$.height),xe.pixelStorei(F.UNPACK_SKIP_PIXELS,G),xe.pixelStorei(F.UNPACK_SKIP_ROWS,Z),xe.pixelStorei(F.UNPACK_SKIP_IMAGES,K);let oi=I.isDataArrayTexture||I.isData3DTexture,Cn=X.isDataArrayTexture||X.isData3DTexture;if(I.isDepthTexture){let vt=ze.get(I),sn=ze.get(X),ci=ze.get(vt.__renderTarget),Dt=ze.get(sn.__renderTarget);xe.bindFramebuffer(F.READ_FRAMEBUFFER,ci.__webglFramebuffer),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let $t=0;$t<W;$t++)oi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(I).__webglTexture,ne,K+$t),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(X).__webglTexture,E,se+$t)),F.blitFramebuffer(G,Z,G+k,Z+L,J,ue,J+k,ue+L,F.DEPTH_BUFFER_BIT,F.NEAREST);xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ne!==0||I.isRenderTargetTexture||ze.has(I)){let vt=ze.get(I),sn=ze.get(X);xe.bindFramebuffer(F.READ_FRAMEBUFFER,C),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let ci=0;ci<W;ci++)oi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.__webglTexture,ne,K+ci):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vt.__webglTexture,ne),Cn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,sn.__webglTexture,E,se+ci):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,sn.__webglTexture,E),ne!==0?F.blitFramebuffer(G,Z,G+k,Z+L,J,ue,J+k,ue+L,F.COLOR_BUFFER_BIT,F.NEAREST):Cn?F.copyTexSubImage3D(ke,E,J,ue,se+ci,G,Z,k,L):F.copyTexSubImage2D(ke,E,J,ue,G,Z,k,L);xe.bindFramebuffer(F.READ_FRAMEBUFFER,null),xe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Cn?I.isDataTexture||I.isData3DTexture?F.texSubImage3D(ke,E,J,ue,se,k,L,W,je,at,$.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(ke,E,J,ue,se,k,L,W,je,$.data):F.texSubImage3D(ke,E,J,ue,se,k,L,W,je,at,$):I.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,E,J,ue,k,L,je,at,$.data):I.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,E,J,ue,$.width,$.height,je,$.data):F.texSubImage2D(F.TEXTURE_2D,E,J,ue,k,L,je,at,$);xe.pixelStorei(F.UNPACK_ROW_LENGTH,Qt),xe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt),xe.pixelStorei(F.UNPACK_SKIP_PIXELS,In),xe.pixelStorei(F.UNPACK_SKIP_ROWS,Nt),xe.pixelStorei(F.UNPACK_SKIP_IMAGES,Ga),E===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&F.generateMipmap(ke),xe.unbindTexture()},this.initRenderTarget=function(I){ze.get(I).__webglFramebuffer===void 0&&Ye.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?Ye.setTextureCube(I,0):I.isData3DTexture?Ye.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Ye.setTexture2DArray(I,0):Ye.setTexture2D(I,0),xe.unbindTexture()},this.resetState=function(){H=0,j=0,z=null,xe.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var Ah=class extends Uo{constructor(e){super(e),this.type=Ft}parse(e){let r=function(S,R){switch(S){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(R||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(R||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(R||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(R||""))}},d=function(S,R,T){R=R||1024;let U=S.pos,O=-1,C=0,B="",H=String.fromCharCode.apply(null,new Uint16Array(S.subarray(U,U+128)));for(;0>(O=H.indexOf(`
`))&&C<R&&U<S.byteLength;)B+=H,C+=H.length,U+=128,H=String.fromCharCode.apply(null,new Uint16Array(S.subarray(U,U+128)));return-1<O?(T!==!1&&(S.pos+=C+O+1),B+H.slice(0,O)):!1},f=function(S){let R=/^#\?(\S+)/,T=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*FORMAT=(\S+)\s*$/,O=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},B,H;for((S.pos>=S.byteLength||!(B=d(S)))&&r(1,"no header found"),(H=B.match(R))||r(3,"bad initial token"),C.valid|=1,C.programtype=H[1],C.string+=B+`
`;B=d(S),B!==!1;){if(C.string+=B+`
`,B.charAt(0)==="#"){C.comments+=B+`
`;continue}if((H=B.match(T))&&(C.gamma=parseFloat(H[1])),(H=B.match(N))&&(C.exposure=parseFloat(H[1])),(H=B.match(U))&&(C.valid|=2,C.format=H[1]),(H=B.match(O))&&(C.valid|=4,C.height=parseInt(H[1],10),C.width=parseInt(H[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||r(3,"missing format specifier"),C.valid&4||r(3,"missing image size specifier"),C},p=function(S,R,T){let N=R;if(N<8||N>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);N!==(S[2]<<8|S[3])&&r(3,"wrong scanline width");let U=new Uint8Array(4*R*T);U.length||r(4,"unable to allocate buffer space");let O=0,C=0,B=4*N,H=new Uint8Array(4),j=new Uint8Array(B),z=T;for(;z>0&&C<S.byteLength;){C+4>S.byteLength&&r(1),H[0]=S[C++],H[1]=S[C++],H[2]=S[C++],H[3]=S[C++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=N)&&r(3,"bad rgbe scanline format");let q=0,Y;for(;q<B&&C<S.byteLength;){Y=S[C++];let me=Y>128;if(me&&(Y-=128),(Y===0||q+Y>B)&&r(3,"bad scanline data"),me){let _e=S[C++];for(let ie=0;ie<Y;ie++)j[q++]=_e}else j.set(S.subarray(C,C+Y),q),q+=Y,C+=Y}let ee=N;for(let me=0;me<ee;me++){let _e=0;U[O]=j[me+_e],_e+=N,U[O+1]=j[me+_e],_e+=N,U[O+2]=j[me+_e],_e+=N,U[O+3]=j[me+_e],O+=4}z--}return U},m=function(S,R,T,N){let U=S[R+3],O=Math.pow(2,U-128)/255;T[N+0]=S[R+0]*O,T[N+1]=S[R+1]*O,T[N+2]=S[R+2]*O,T[N+3]=1},x=function(S,R,T,N){let U=S[R+3],O=Math.pow(2,U-128)/255;T[N+0]=ya.toHalfFloat(Math.min(S[R+0]*O,65504)),T[N+1]=ya.toHalfFloat(Math.min(S[R+1]*O,65504)),T[N+2]=ya.toHalfFloat(Math.min(S[R+2]*O,65504)),T[N+3]=ya.toHalfFloat(1)},b=new Uint8Array(e);b.pos=0;let g=f(b),y=g.width,_=g.height,v=p(b.subarray(b.pos),y,_),u,w,M;switch(this.type){case zt:M=v.length/4;let S=new Float32Array(M*4);for(let T=0;T<M;T++)m(v,T*4,S,T*4);u=S,w=zt;break;case Ft:M=v.length/4;let R=new Uint16Array(M*4);for(let T=0;T<M;T++)x(v,T*4,R,T*4);u=R,w=Ft;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:_,data:u,header:g.string,gamma:g.gamma,exposure:g.exposure,type:w,colorSpace:rn,minFilter:St,magFilter:St,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var Th=new Xe,Df=new Xe,Uf=new P,Rh=new P,Qn=new P,kf=[new P,new P,new P,new P],Of=[new P,new P,new P,new P],yr=[new P,new P,new P,new P,new P,new P,new P,new P],ca=2,G_=.1,Ih=class extends Ra{constructor(){super(new Zn(-5,5,5,-5,.5,500)),this.isSunLightShadow=!0,this.mapSize.set(1024,1024),this._cameras=[],this._matrices=[],this._frustums=[],this._cascadeSplits=new Array(ca+1).fill(0),this._cascadeData=[],this._viewportCount=ca,this._frameExtents.set(2,1);for(let e=0;e<ca;e++)this._cameras.push(new Zn),this._matrices.push(new Xe),this._frustums.push(new Ei),this._cascadeData.push(new yt);for(;this._viewports.length<ca;)this._viewports.push(new yt)}getCamera(e=0){return this._cameras[e]}getMatrix(e=0){return this._matrices[e]}getFrustum(e=0){return this._frustums[e]}updateMatrices(e,t){if(t===void 0)return;let n=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.x),i=Math.min(.25,(Math.ceil(this.radius)+1)/this.mapSize.y);for(let b=0;b<ca;b++)this._viewports[b].set(b+n,i,1-2*n,1-2*i);let s=this.mapSize.x*(1-2*n),r=this.mapSize.y*(1-2*i),o=Math.min(s,r),c=this.camera,l=t.near,h=Math.max(l+1e-6,Math.min(c.far,t.far)),d=this._cascadeSplits;d[0]=l;for(let b=1;b<ca;b++){let g=b/ca,y=l+(h-l)*g,_=l>0?l*Math.pow(h/l,g):y;d[b]=(y+_)*.5}d[ca]=h,Uf.setFromMatrixPosition(e.matrixWorld).negate().normalize(),Rh.set(0,1,0),Math.abs(Rh.dot(Uf))>.99&&Rh.set(0,0,1),Th.lookAt(Qn.set(0,0,0),Uf,Rh),Df.copy(Th).transpose().multiply(t.matrixWorld);let f=t.reversedDepth?1:t.coordinateSystem===va?0:-1,p=t.projectionMatrixInverse,m=-1/0;for(let b=0;b<4;b++){let g=b===0||b===1?1:-1,y=b===0||b===3?1:-1,_=kf[b].set(g,y,f).applyMatrix4(p),v=Of[b];t.isPerspectiveCamera===!0?v.copy(_).multiplyScalar(h/l):v.set(_.x,_.y,-h),_.applyMatrix4(Df),v.applyMatrix4(Df),m=Math.max(m,_.z,v.z)}m+=h;let x=c.near;for(let b=0;b<ca;b++){let g=b===0?d[0]:this._cascadeData[b-1].z,y=d[b+1],_=y-G_*(y-d[b]);this._cascadeData[b].set(b===0?-1e10:g,y,_,0);let v=(g-l)/(h-l),u=(y-l)/(h-l);Qn.set(0,0,0);for(let T=0;T<4;T++)yr[T*2].lerpVectors(kf[T],Of[T],v),yr[T*2+1].lerpVectors(kf[T],Of[T],u),Qn.add(yr[T*2]).add(yr[T*2+1]);Qn.multiplyScalar(1/8);let w=0,M=1/0;for(let T=0;T<8;T++)w=Math.max(w,yr[T].distanceToSquared(Qn)),M=Math.min(M,yr[T].z);let S=Math.sqrt(w);if(o>1){S/=1-1/o;let T=2*S/s,N=2*S/r;Qn.x=Math.round(Qn.x/T)*T,Qn.y=Math.round(Qn.y/N)*N}Qn.z=m+x,Qn.applyMatrix4(Th);let R=this._cameras[b];R.position.copy(Qn),R.quaternion.setFromRotationMatrix(Th),R.left=-S,R.right=S,R.top=S,R.bottom=-S,R.near=x,R.far=m-M+2*x,R.coordinateSystem=c.coordinateSystem,R._reversedDepth=c.reversedDepth,R.updateProjectionMatrix(),R.updateMatrixWorld(),this._updateMatrix(R,this._matrices[b],this._frustums[b],this._viewports[b])}}};var Ch=class extends Ta{constructor(e,t){super(e,t),this.isSunLight=!0,this.type="SunLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.shadow=new Ih}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t}};var Ca=[0,320,-1080],Li={pos:[0,41.2,40],look:[6,120,-1e3],fov:52},Nh=[[2,30],[9,8],[-4,-18],[12,-44],[4,-72],[20,-104],[24,-135],[32,-175],[28,-228],[38,-300],[46,-380],[42,-460],[48,-528],[54,-560],[98,-560],[108,-598],[96,-676],[72,-756],[46,-846]];var ng=[[172,-836],[132,-762],[92,-684],[77,-604],[76,-560],[81,-484],[96,-404],[104,-326],[98,-252],[112,-182],[162,-118],[262,-56],[420,-10]],Di=[-30,-44],Ph=7.5,ig=[[-74,-286],[-63,-252],[-53,-216],[-41,-186],[-23,-162],[-4,-150],[12,-150],[40,-160],[70,-174],[100,-184]],bn={x:12,z:-150,r:12,level:.35},$n={x:-102,z:-190,rx:92,rz:108,step:1.45},Rn={x:-88,y:25,z:-304,r:26},kn={x:28,y:1.2,z:-158,r:44},Ct={x:76,y:2.2,z:-560,span:44,width:5.2},Ff={x:186,z:-860,top:66,bottom:-30},On={x:142,y:8,z:-252};function Mr(a){let e=[],t=0;for(let o=0;o<a.length-1;o++){let[c,l]=a[o],[h,d]=a[o+1],f=h-c,p=d-l,m=Math.hypot(f,p);e.push({ax:c,az:l,dx:f,dz:p,len:m,s0:t}),t+=m}let n=Math.min(...a.map(o=>o[0])),i=Math.max(...a.map(o=>o[0])),s=Math.min(...a.map(o=>o[1])),r=Math.max(...a.map(o=>o[1]));return{pts:a,segs:e,length:t,minX:n,maxX:i,minZ:s,maxZ:r,closest(o,c,l){let h=1e18,d=0,f=0,p=0;for(let m=0;m<e.length;m++){let x=e[m],b=((o-x.ax)*x.dx+(c-x.az)*x.dz)/(x.len*x.len);b=b<0?0:b>1?1:b;let g=x.ax+x.dx*b-o,y=x.az+x.dz*b-c,_=g*g+y*y;_<h&&(h=_,d=x.s0+x.len*b,f=m,p=b)}return l[0]=Math.sqrt(h),l[1]=d,l[2]=f,l[3]=p,l},at(o){o=Math.max(0,Math.min(t,o));let c=0;for(;c<e.length-1&&e[c].s0+e[c].len<o;)c++;let l=e[c],h=(o-l.s0)/l.len;return{x:l.ax+l.dx*h,z:l.az+l.dz*h,tx:l.dx/l.len,tz:l.dz/l.len,seg:c}}}}function _r(a,e=4){let t=[],n=i=>a[Math.max(0,Math.min(a.length-1,i))];for(let i=0;i<a.length-1;i++){let s=n(i-1),r=n(i),o=n(i+1),c=n(i+2),l=Math.hypot(o[0]-r[0],o[1]-r[1]),h=Math.max(1,Math.ceil(l/e));for(let d=0;d<h;d++){let f=d/h,p=f*f,m=p*f,x=(b,g,y,_)=>.5*(2*g+(-b+y)*f+(2*b-5*g+4*y-_)*p+(-b+3*g-3*y+_)*m);t.push([x(s[0],r[0],o[0],c[0]),x(s[1],r[1],o[1],c[1])])}}return t.push(a[a.length-1].slice()),t}function V_(a,e){let t=Un.degToRad(a),n=Un.degToRad(e);return new P(Math.sin(t)*Math.cos(n),Math.sin(n),-Math.cos(t)*Math.cos(n)).normalize()}var j_=122,W_=33,Na=V_(j_,W_),sg=Na.clone(),Sr=new He(1,.87,.7),ag=a=>new P(...a),Bf={ref:{pos:[Li.pos[0],2,Li.pos[2]],ground:!0,look:Li.look,fov:Li.fov},skull:{pos:[30,210,-520],look:[Ca[0],Ca[1]-10,Ca[2]],fov:48},mouth:{pos:[60,250,-860],look:[0,260,-1080],fov:55},left:{pos:[-40,70,-90],look:[-210,120,-280],fov:55},terrace:{pos:[-10,30,-70],look:[$n.x,8,$n.z-40],fov:55},gate:{pos:[-30,30,-230],look:[Rn.x,Rn.y+10,Rn.z],fov:50},village:{pos:[0,14,-105],look:[kn.x,3,kn.z],fov:55},bridge:{pos:[20,18,-500],look:[Ct.x,Ct.y-8,Ct.z],fov:55},temple:{pos:[80,34,-190],look:[142,14,-252],fov:55},ledge:{pos:[-95,135,-300],look:[-200,116,-262],fov:55},ring:{pos:[-6,9,-30],look:[20,1,-75],fov:55},aerial:{pos:[420,520,380],look:[-40,60,-560],fov:50},back:{pos:[60,30,-760],look:[0,60,40],fov:60}};function Lh(a,e){let t=Bf[a];if(!t)return null;let n=ag(t.pos);return t.ground&&(n.y+=e(n.x,n.z)),{pos:n,look:ag(t.look),fov:t.fov}}var wr=a=>a.toFixed(5),rg=`
	const vec3 SUN_DIR = vec3( ${wr(Na.x)}, ${wr(Na.y)}, ${wr(Na.z)} );
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
`,Uh=`
	uniform vec4 uAtmos;
	#define ATM uAtmos
	${rg}
`,Dh={haze:24e-5,mist:9e-4,bright:1,mistH:45},cc={uAtmos:{value:new yt(Dh.haze,Dh.mist,Dh.bright,Dh.mistH)}};function og(){let a=cc.uAtmos.value;return new co(new He(a.x*1e3,a.y*1e3,a.z),a.w,1e9)}lt.fog_pars_vertex=`
	#ifdef USE_FOG
		varying vec3 vFogWorldPos;
	#endif
`;lt.fog_vertex=`
	#ifdef USE_FOG
		vFogWorldPos = cameraPosition + transpose( mat3( viewMatrix ) ) * mvPosition.xyz;
	#endif
`;lt.fog_pars_fragment=`
	#ifdef USE_FOG
		uniform vec3 fogColor;
		uniform float fogNear;
		uniform float fogFar;
		varying vec3 vFogWorldPos;
		#define ATM vec4( fogColor.x * 0.001, fogColor.y * 0.001, fogColor.z, fogNear )
		${rg}
	#endif
`;lt.fog_fragment=`
	#ifdef USE_FOG
		gl_FragColor.rgb = atmosApply( gl_FragColor.rgb, vFogWorldPos );
	#endif
`;function q_(){if(location.hostname==="htmlpreview.github.io"){let a=decodeURIComponent(location.search).match(/github\.com\/([^/]+)\/([^/]+)\/blob\/([^/]+)\/(.*\/)[^/]*$/);if(a)return`https://raw.githubusercontent.com/${a[1]}/${a[2]}/${a[3]}/${a[4]}`}return"./"}var X_=q_(),vi=a=>X_+"assets/"+a;function K_(){let a=location.search,e=a.lastIndexOf(".html?");return e>=0?a.slice(e+6):a}var vs=new URLSearchParams(K_());function cg(a,e){let{data:t,width:n,height:i}=e.image,s=0,r=0;for(let p=0;p<n*i;p++){let m=t[p*4]+t[p*4+1]+t[p*4+2];m>s&&(s=m,r=p)}let o=(r%n+.5)/n;for(let p=0;p<t.length;p++)(p&3)!==3&&(t[p]=Math.min(t[p],5));e.needsUpdate=!0,e.minFilter=St,e.magFilter=St,e.generateMipmaps=!1,a.colorSpace=Et,a.minFilter=Yt,a.anisotropy=4,a.wrapS=pn;let c=Math.atan2(Na.z,Na.x)/(2*Math.PI)+.5,l={uLdr:{value:a},uHdr:{value:e},uRot:{value:o-c},uGain:{value:1.55},uEnvMode:{value:0},uSunGain:{value:1},uAtmos:cc.uAtmos},h=new Pt({name:"Sky",side:cn,depthWrite:!1,depthTest:!1,uniforms:l,vertexShader:`
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
			${Uh}
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
		`}),d=new nt(new on(1,64,32),h);d.frustumCulled=!1,d.renderOrder=-100,d.scale.setScalar(9e3),d.onBeforeRender=(p,m,x)=>d.position.copy(x.position);function f(p){let m=new es,x=h.clone();x.uniforms={...l,uEnvMode:{value:1}};let b=new nt(new on(1,64,32),x);b.scale.setScalar(100),m.add(b);let g=new xr(p),y=g.fromScene(m,0,.1,1e3);return g.dispose(),x.dispose(),y.texture}return{mesh:d,uniforms:l,buildEnv:f}}var Er={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var jn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Y_=new Zn(-1,1,1,-1,0,1),zf=class extends rt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}},J_=new zf,Pa=class{constructor(e){this._mesh=new nt(J_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Y_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var La=class extends jn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=oa.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pa(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var lc=class extends jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},kh=class extends jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Oh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ge);this._width=n.width,this._height=n.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ft}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new La(Er),this.copyPass.material.blending=aa,this.timer=new ds}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}lc!==void 0&&(r instanceof lc?n=!0:r instanceof kh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fh=class extends jn{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new He}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}};var lg={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ar=class a extends jn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ge(e.x,e.y):new ge(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(s,r,{type:Ft,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ht(s,r,{type:Ft,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Ht(s,r,{type:Ft,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}let o=lg;this.highPassUniforms=oa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ge(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=oa.clone(Er.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:Er.vertexShader,fragmentShader:Er.fragmentShader,premultipliedAlpha:!0,blending:An,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new At,this._fsQuad=new Pa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ge(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=a.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=a.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let i=[],s=[];for(let r=1;r<e;r+=2){let o=t[r],c=r+1<e?t[r+1]:0,l=o+c;i.push((r*o+(r+1)*c)/l),s.push(l)}return new Pt({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new ge(.5,.5)},direction:{value:new ge(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ar.BlurDirectionX=new ge(1,0);Ar.BlurDirectionY=new ge(0,1);var hc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Bh=class extends jn{constructor(){super(),this.isOutputPass=!0,this.uniforms=oa.clone(hc.uniforms),this.material=new rr({name:hc.name,uniforms:this.uniforms,vertexShader:hc.vertexShader,fragmentShader:hc.fragmentShader}),this._fsQuad=new Pa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===_t&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vo?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ps?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ko?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ui=`
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
`,Hf=`
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
`;var Gf=`
	varying vec2 vUv;
	void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }
`,Z_={name:"Sanitize",uniforms:{tDiffuse:{value:null}},vertexShader:Gf,fragmentShader:`
		uniform sampler2D tDiffuse;
		varying vec2 vUv;
		bool bad( float x ) { return ( floatBitsToUint( x ) & 0x7f800000u ) == 0x7f800000u; }
		void main() {
			vec3 c = texture2D( tDiffuse, vUv ).rgb;
			if ( bad( c.r ) || bad( c.g ) || bad( c.b ) ) c = vec3( 0.0 );
			gl_FragColor = vec4( clamp( c, 0.0, 200.0 ), 1.0 );
		}
	`},Q_={name:"Grade",uniforms:{tDiffuse:{value:null},uExposure:{value:1},uContrast:{value:1.08},uSat:{value:1.1},uWarm:{value:1}},vertexShader:Gf,fragmentShader:`
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
	`},$_={name:"Final",uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new ge(1,1)},uFade:{value:1},uVignette:{value:1}},vertexShader:Gf,fragmentShader:`
		uniform sampler2D tDiffuse;
		uniform float uTime, uFade, uVignette;
		uniform vec2 uRes;
		varying vec2 vUv;
		${Ui}
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
	`};function hg(a,e,t,n){let i=a.getDrawingBufferSize(new ge),s=new mi(i.x,i.y);s.type=zt;let r=new Ht(i.x,i.y,{type:Ft,samples:n.msaa,depthTexture:s}),o=new Oh(a,r),c=new Fh(e,t);o.addPass(c),o.addPass(new La(Z_));let l=[],h=new Ar(new ge(i.x/2,i.y/2),.14,.5,3),d=new La(Q_),f=new Bh,p=new La($_);return o.addPass(h),o.addPass(d),o.addPass(f),o.addPass(p),{composer:o,bloom:h,grade:d,final:p,target:r,depthTexture:s,insertAfterRender(m){o.insertPass(m,1+l.length),l.push(m)},setSize(m,x,b){o.setPixelRatio(b),o.setSize(m,x),p.uniforms.uRes.value.set(m*b,x*b);for(let g of l)g.setSize?.(m*b,x*b)},render(m){p.uniforms.uTime.value+=m,o.render(m)}}}function dg(a,e=!0,t=!0,n=8){return e&&(a.colorSpace=Et),t&&(a.wrapS=a.wrapT=pn),a.anisotropy=n,a}var zh=`
	varying vec3 vWPos;
	varying vec3 vWNor;
`,fg=`
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
`,ug=`
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
`;function pg(a,e={}){let t=new Gt({color:16777215,roughness:.86,metalness:0,envMapIntensity:e.env??1});return t.onBeforeCompile=n=>{Object.assign(n.uniforms,{tCliff:{value:a.cliff_diff},tCliffN:{value:a.cliff_nor},tBone:{value:a.bone_diff},tBoneN:{value:a.bone_nor},tGrass:{value:a.grass_diff}}),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
				attribute vec4 aux;
				varying vec4 vAux;
				${zh}`).replace("#include <fog_vertex>",`#include <fog_vertex>
				${fg}
				vAux = aux;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
				uniform sampler2D tCliff, tCliffN, tBone, tBoneN, tGrass;
				varying vec4 vAux;
				${zh}
				${Ui}
				${Hf}
				${ug}
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
			}`)},t.customProgramCacheKey=()=>"rock-v1",t}function mg(a,e,t={}){let n=new Gt({color:16777215,roughness:.92,metalness:0,envMapIntensity:.9});return n.onBeforeCompile=i=>{Object.assign(i.uniforms,{tGrass:{value:a.grass_diff},tGrassN:{value:a.grass_nor},tForest:{value:a.forest_diff},tForestN:{value:a.forest_nor},tTrail:{value:a.trail_diff},tTrailN:{value:a.trail_nor},tCliff:{value:a.cliff_diff},tCliffN:{value:a.cliff_nor},tMask:{value:e.mask},tNorm:{value:e.normal},uMapRect:{value:new yt(e.x0,e.z0,1/e.w,1/e.d)},uTime:t.time||{value:0}}),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
				${zh}`).replace("#include <fog_vertex>",`#include <fog_vertex>
				${fg}`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
				uniform sampler2D tGrass, tGrassN, tForest, tForestN, tTrail, tTrailN, tCliff, tCliffN, tMask, tNorm;
				uniform vec4 uMapRect;
				uniform float uTime;
				${zh}
				${Ui}
				${Hf}
				${ug}
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
					float idx = floor( p.y / ${$n.step.toFixed(4)} + 0.02 );
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
			}`)},n.customProgramCacheKey=()=>"terrain-v1",n}var gg='(()=>{function Xa(d){let c=d>>>0;return function(){c=c+1831565813|0;let b=Math.imul(c^c>>>15,1|c);return b=b+Math.imul(b^b>>>7,61|b)^b,((b^b>>>14)>>>0)/4294967296}}var ga=new Uint8Array(512),Na=new Uint8Array(512);(function(){let c=Xa(20261107),b=new Uint8Array(256);for(let f=0;f<256;f++)b[f]=f;for(let f=255;f>0;f--){let e=Math.floor(c()*(f+1)),a=b[f];b[f]=b[e],b[e]=a}for(let f=0;f<512;f++)ga[f]=b[f&255],Na[f]=ga[f]%12})();var Q=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),Ub=.5*(Math.sqrt(3)-1),Ja=(3-Math.sqrt(3))/6,Rb=1/3,ja=1/6;function K(d,c){let b=(d+c)*Ub,f=Math.floor(d+b),e=Math.floor(c+b),a=(f+e)*Ja,h=d-(f-a),n=c-(e-a),g,r;h>n?(g=1,r=0):(g=0,r=1);let M=h-g+Ja,i=n-r+Ja,y=h-1+2*Ja,I=n-1+2*Ja,A=f&255,w=e&255,R=0,Y=.5-h*h-n*n;if(Y>0){let t=Na[A+ga[w]]*3;Y*=Y,R+=Y*Y*(Q[t]*h+Q[t+1]*n)}let S=.5-M*M-i*i;if(S>0){let t=Na[A+g+ga[w+r]]*3;S*=S,R+=S*S*(Q[t]*M+Q[t+1]*i)}let q=.5-y*y-I*I;if(q>0){let t=Na[A+1+ga[w+1]]*3;q*=q,R+=q*q*(Q[t]*y+Q[t+1]*I)}return 70*R}function Ra(d,c,b){let f=(d+c+b)*Rb,e=Math.floor(d+f),a=Math.floor(c+f),h=Math.floor(b+f),n=(e+a+h)*ja,g=d-(e-n),r=c-(a-n),M=b-(h-n),i,y,I,A,w,R;g>=r?r>=M?(i=1,y=0,I=0,A=1,w=1,R=0):g>=M?(i=1,y=0,I=0,A=1,w=0,R=1):(i=0,y=0,I=1,A=1,w=0,R=1):r<M?(i=0,y=0,I=1,A=0,w=1,R=1):g<M?(i=0,y=1,I=0,A=0,w=1,R=1):(i=0,y=1,I=0,A=1,w=1,R=0);let Y=g-i+ja,S=r-y+ja,q=M-I+ja,t=g-A+2*ja,m=r-w+2*ja,l=M-R+2*ja,j=g-1+3*ja,k=r-1+3*ja,o=M-1+3*ja,x=e&255,O=a&255,z=h&255,N=0,u=.6-g*g-r*r-M*M;if(u>0){let E=Na[x+ga[O+ga[z]]]*3;u*=u,N+=u*u*(Q[E]*g+Q[E+1]*r+Q[E+2]*M)}let B=.6-Y*Y-S*S-q*q;if(B>0){let E=Na[x+i+ga[O+y+ga[z+I]]]*3;B*=B,N+=B*B*(Q[E]*Y+Q[E+1]*S+Q[E+2]*q)}let H=.6-t*t-m*m-l*l;if(H>0){let E=Na[x+A+ga[O+w+ga[z+R]]]*3;H*=H,N+=H*H*(Q[E]*t+Q[E+1]*m+Q[E+2]*l)}let U=.6-j*j-k*k-o*o;if(U>0){let E=Na[x+1+ga[O+1+ga[z+1]]]*3;U*=U,N+=U*U*(Q[E]*j+Q[E+1]*k+Q[E+2]*o)}return 32*N}function Ea(d,c,b=5,f=2.03,e=.5){let a=0,h=1,n=0;for(let g=0;g<b;g++){a+=h*K(d,c),n+=h;let r=d*.8-c*.6,M=d*.6+c*.8;d=r*f+13.7,c=M*f+7.1,h*=e}return a/n}function eb(d,c,b=6,f=2,e=.5){let a=0,h=1,n=1,g=0;for(let r=0;r<b;r++){let M=1-Math.abs(K(d,c));M*=M,M*=n,n=Math.min(1,Math.max(0,M*1.6)),a+=h*M,g+=h;let i=d*.8-c*.6,y=d*.6+c*.8;d=i*f+3.1,c=y*f+17.9,h*=e}return a/g}function Va(d,c,b,f=4,e=2.07,a=.5){let h=0,n=1,g=0;for(let r=0;r<f;r++)h+=n*Ra(d,c,b),g+=n,d=d*e+5.3,c=c*e+11.7,b=b*e+2.9,n*=a;return h/g}var Aa=(d,c,b)=>d<c?c:d>b?b:d;function v(d,c,b){let f=Aa((b-d)/(c-d),0,1);return f*f*(3-2*f)}var la=(d,c,b)=>d+(c-d)*b;function Z(d,c,b){let f=Aa(.5+.5*(c-d)/b,0,1);return c+(d-c)*f-b*f*(1-f)}function aa(d,c,b){return-Z(-d,-c,b)}var hb=[0,320,-1080];var fb=[[2,30],[9,8],[-4,-18],[12,-44],[4,-72],[20,-104],[24,-135],[32,-175],[28,-228],[38,-300],[46,-380],[42,-460],[48,-528],[54,-560],[98,-560],[108,-598],[96,-676],[72,-756],[46,-846]];var tb=[[172,-836],[132,-762],[92,-684],[77,-604],[76,-560],[81,-484],[96,-404],[104,-326],[98,-252],[112,-182],[162,-118],[262,-56],[420,-10]],$a=[-30,-44],va=7.5,gb=[[-74,-286],[-63,-252],[-53,-216],[-41,-186],[-23,-162],[-4,-150],[12,-150],[40,-160],[70,-174],[100,-184]],ra={x:12,z:-150,r:12,level:.35},wa={x:-102,z:-190,rx:92,rz:108,step:1.45},ma={x:-88,y:25,z:-304,r:26},Ia={x:28,y:1.2,z:-158,r:44},ea={x:76,y:2.2,z:-560,span:44,width:5.2};var xa={x:142,y:8,z:-252};function Wa(d){let c=[],b=0;for(let n=0;n<d.length-1;n++){let[g,r]=d[n],[M,i]=d[n+1],y=M-g,I=i-r,A=Math.hypot(y,I);c.push({ax:g,az:r,dx:y,dz:I,len:A,s0:b}),b+=A}let f=Math.min(...d.map(n=>n[0])),e=Math.max(...d.map(n=>n[0])),a=Math.min(...d.map(n=>n[1])),h=Math.max(...d.map(n=>n[1]));return{pts:d,segs:c,length:b,minX:f,maxX:e,minZ:a,maxZ:h,closest(n,g,r){let M=1e18,i=0,y=0,I=0;for(let A=0;A<c.length;A++){let w=c[A],R=((n-w.ax)*w.dx+(g-w.az)*w.dz)/(w.len*w.len);R=R<0?0:R>1?1:R;let Y=w.ax+w.dx*R-n,S=w.az+w.dz*R-g,q=Y*Y+S*S;q<M&&(M=q,i=w.s0+w.len*R,y=A,I=R)}return r[0]=Math.sqrt(M),r[1]=i,r[2]=y,r[3]=I,r},at(n){n=Math.max(0,Math.min(b,n));let g=0;for(;g<c.length-1&&c[g].s0+c[g].len<n;)g++;let r=c[g],M=(n-r.s0)/r.len;return{x:r.ax+r.dx*M,z:r.az+r.dz*M,tx:r.dx/r.len,tz:r.dz/r.len,seg:g}}}}function Ta(d,c=4){let b=[],f=e=>d[Math.max(0,Math.min(d.length-1,e))];for(let e=0;e<d.length-1;e++){let a=f(e-1),h=f(e),n=f(e+1),g=f(e+2),r=Math.hypot(n[0]-h[0],n[1]-h[1]),M=Math.max(1,Math.ceil(r/c));for(let i=0;i<M;i++){let y=i/M,I=y*y,A=I*y,w=(R,Y,S,q)=>.5*(2*Y+(-R+S)*y+(2*R-5*Y+4*S-q)*I+(-R+3*Y-3*S+q)*A);b.push([w(a[0],h[0],n[0],g[0]),w(a[1],h[1],n[1],g[1])])}}return b.push(d[d.length-1].slice()),b}var Ma=Wa(Ta(fb,3)),ia=Wa(Ta(tb,6)),za=Wa(Ta(gb,3));var $=[0,0,0,0];function qa(d,c){let b=1.3*Ea(d/170,c/170,3)+.55*K(d/37,c/41);b+=78*v(-730,-1060,c)*(.85+.15*K(d/90,3.1));let f=d+26*Math.sin(c/112)+14*K(c/61,1.7);b+=64*v(-148,-285,f)*(.8+.2*K(d/70,c/70));let e=d-34*Math.sin(c/150+1.3);b+=150*v(172,480,e)*(.72+.28*Ea(d/240,c/240,3));let a=(d+8)/94,h=(c-58)/64;b+=41.5*Math.exp(-(a*a+h*h));let n=(c-82)/64;b+=36*Math.exp(-n*n)*v(0,-190,d),b+=3*Ea(d/28,c/28,3)*Math.exp(-(a*a+h*h)*.5);let g=Math.max(0,Math.abs(d-30)-420),r=Math.max(0,-c-1220),M=Math.max(0,c-320),i=Math.hypot(g,r+M*.7);if(i>0){let y=v(0,1500,i);b+=y*(150+640*eb(d/1300+7.3,c/1300-2.1,7))+y*y*160}return b}function nb(d,c){let b=1.7+.168*(-d-8)+.064*(-c-150);return b+=5.5*K(d/96+3.1,c/96)+1.4*K(d/37,c/33),Math.max(b,.9)}function lb(d,c){let b=(d-wa.x)/wa.rx,f=(c-wa.z)/wa.rz,e=Math.hypot(b,f)+.12*K(d/52,c/52);return v(1,.84,e)}function Eb(d,c){let f=nb(d,c)/wa.step,e=Math.floor(f),a=f-e,h=wa.step*(e+v(.86,1,a));return h+=.24*v(0,.025,a)*(1-v(.035,.075,a)),h}function vb(d,c){let b=(d+112)/168,f=(c+236)/186;return v(1.25,.9,Math.hypot(b,f)+.1*K(d/70,c/70))}function rb(d,c){let b=qa(d,c),f=vb(d,c);f>0&&(b=la(b,Math.max(b,nb(d,c)-.6),f));let e=lb(d,c);e>0&&(b=la(b,Eb(d,c),e));let a=Math.hypot(d-ma.x,c-ma.z);a<ma.r+22&&(b=la(b,ma.y,v(ma.r+22,ma.r,a)));let h=Math.hypot((d-Ia.x)*.9,c-Ia.z);h<Ia.r+30&&(b=la(b,Ia.y+.35*K(d/13,c/13),v(Ia.r+30,Ia.r-12,h)));let n=Math.hypot(d-ra.x,c-ra.z);if(n<ra.r+6&&(b=Math.min(b,la(ra.level-1.6,b,v(ra.r-5,ra.r+6,n)))),d>ia.minX-90&&d<ia.maxX+90&&c>ia.minZ-90&&c<ia.maxZ+90){ia.closest(d,c,$);let g=$[0],r=$[1]/ia.length,M=la($a[0],$a[1],r),i=va+14*v(.08,0,r)+1.5*K($[1]/30,.5),y=M+Math.max(0,g-i)*(2.5+.6*K($[1]/40,g/20))+1.2*K(d/9,c/9)*v(i,i+6,g);b=Math.min(b,y)}if(d>za.minX-6&&d<za.maxX+6&&c>za.minZ-6&&c<za.maxZ+6){za.closest(d,c,$);let g=$[0];g<2.4&&(b-=.6*(1-v(.7,2.2,g)))}return b}var Ca=2,ua=(()=>{let d=Math.ceil(Ma.length/Ca)+1,c=new Float32Array(d),b=new Uint8Array(d);for(let a=0;a<d;a++){let h=Ma.at(a*Ca);c[a]=rb(h.x,h.z),Math.abs(h.z-ea.z)<4&&h.x>ea.x-ea.span/2-6&&h.x<ea.x+ea.span/2+6&&(b[a]=1)}for(let a=0;a<d;a++){let h=Ma.at(a*Ca),n=Math.abs(h.x-ea.x)-ea.span/2;Math.abs(h.z-ea.z)<30&&n<18&&(c[a]=la(c[a],ea.y-.15,v(18,4,n)))}let f=new Float32Array(d),e=4;for(let a=0;a<d;a++){let h=0,n=0;for(let g=-e;g<=e;g++){let r=Math.max(0,Math.min(d-1,a+g)),M=e+1-Math.abs(g);h+=c[r]*M,n+=M}f[a]=h/n}return{h:f,onBridge:b}})();function zb(d){let c=d/Ca,b=Math.floor(c),f=c-b,e=ua.h[Math.min(b,ua.h.length-1)],a=ua.h[Math.min(b+1,ua.h.length-1)];return e+(a-e)*f}function Sa(d,c){let b=rb(d,c);if(d>Ma.minX-6&&d<Ma.maxX+6&&c>Ma.minZ-6&&c<Ma.maxZ+6){Ma.closest(d,c,$);let f=$[0];if(f<3.4){let e=Math.round($[1]/Ca);ua.onBridge[Math.min(e,ua.onBridge.length-1)]||(b=la(b,zb($[1])-.1,v(3.4,1.7,f)))}}return b}function mb(d,c,b){b[0]=0,b[1]=0,b[2]=0,b[3]=0,Ma.closest(d,c,$);let f=Math.round($[1]/Ca);ua.onBridge[Math.min(f,ua.onBridge.length-1)]||(b[0]=1-v(1.1,2.4,$[0]+.5*K(d/3,c/3))),ia.closest(d,c,$);let e=$[0],a=1-v(va-1,va+2,e);za.closest(d,c,$);let h=$[0];a=Math.max(a,1-v(.8,1.4,h));let n=Math.hypot(d-ra.x,c-ra.z);a=Math.max(a,1-v(ra.r-2,ra.r+.5,n)),b[1]=a,b[2]=lb(d,c);let g=v(-.15,.35,Ea(d/160+4.2,c/160-1.3,4));g*=1-b[2],g*=v(6,16,Math.hypot((d-Ia.x)*.9,c-Ia.z)-Ia.r),g*=1-b[0],g*=v(4,10,h)*v(va+2,va+12,e);let r=(d+8)/80,M=(c-50)/58;return g*=v(.6,1.6,r*r+M*M),g*=v(ma.r,ma.r+25,Math.hypot(d-ma.x,c-ma.z)),g=Math.max(g,v(-760,-900,c)*.95),g=Math.max(g*1,v(190,260,d)*v(0,.3,Ea(d/90,c/90,3)+.25)),b[3]=Aa(g,0,1),b}function sa(d,c,b,f,e,a){let h=d/f,n=c/e,g=b/a,r=Math.sqrt(h*h+n*n+g*g),M=h/f,i=n/e,y=g/a,I=Math.sqrt(M*M+i*i+y*y);return I<1e-9?-Math.min(f,e,a):r*(r-1)/I}function _a(d,c,b,f,e,a){return Math.sqrt((d/f)**2+(c/e)**2+(b/a)**2)}function Fa(d,c,b,f,e,a,h,n,g,r){let M=d-f,i=c-e,y=b-a,I=h-f,A=n-e,w=g-a,R=Aa((M*I+i*A+y*w)/(I*I+A*A+w*w),0,1);return Math.hypot(M-I*R,i-A*R,y-w*R)-r}function Cb(d,c,b,f,e,a,h,n,g,r,M){let i=d-f,y=c-e,I=b-a,A=h-f,w=n-e,R=g-a,Y=Aa((i*A+y*w+I*R)/(A*A+w*w+R*R),0,1);return(Math.hypot(i-A*Y,y-w*Y,I-R*Y)-(r+(M-r)*Y))*.9}function Mb(d,c,b,f,e,a,h){let n=Math.abs(d)-f+h,g=Math.abs(c)-e+h,r=Math.abs(b)-a+h;return Math.hypot(Math.max(n,0),Math.max(g,0),Math.max(r,0))+Math.min(Math.max(n,g,r),0)-h}function Ya(d,c,b,f){let e=d-f.x,a=b-f.z,h=Math.hypot(e,a);if(h>f.r0*1.6+30)return h-f.r0*1.4;let n=Aa((c-f.y0)/(f.y1-f.y0),0,1),g=e/(h+1e-6),r=a/(h+1e-6),M=3*r-4*r*r*r,i=g*g-r*r,y=2*r*g,I=M*i+(4*g*g*g-3*g)*y,A=.13*(M*f.c+g*f.s)+.07*I+.11*K(g*1.4+f.seed,r*1.4+c/55),w=la(f.r0,f.r1,Math.pow(n,f.pow||1))*(1+A)+f.bulge*Math.sin(n*3.1),R=h-w;return R=aa(R,c-f.y1-7*K(e/22+f.seed,a/22),9),R=aa(R,f.y0-40-c,4),R*.82}function P(d,c,b,f,e,a,h,n={}){return{x:d,z:c,r0:b,r1:f,y0:e,y1:a,seed:h,c:Math.cos(h),s:Math.sin(h),bulge:n.bulge??0,pow:n.pow??1}}function Da(d,c,b,f){let e=12*Va(d/92,c/118,b/92,3);e+=3.2*Ra(d/10.5,c/72,b/10.5)+1.4*Ra(d/4.2,c/26,b/4.2);let a=c/16.5+.7*K(d/64,b/64),h=a-Math.floor(a);return e+=1.25*v(.55,.85,h)*(1-v(.85,1,h)),e*f}var[ib,yb,Nb]=hb,Bb=[[.12,7.5,18],[.34,7.5,19],[.62,19,64],[.9,10,27],[1.12,9,20]],Hb=[[.2,6,14],[.56,14,44],[.86,8,18]],Ga=[];for(let[d,c,b]of Bb)for(let f of[-1,1]){let e=f*85*Math.sin(d),a=-26+77*Math.cos(d);Ga.push({ax:e,ay:7,az:a,bx:e*1.03,by:-b,bz:a+3+b*.05,r1:c,r2:.9})}var ab=-140,Pa=[];for(let d=0;d<=10;d++){let c=-1.35+2.7*d/10;Pa.push([104*Math.sin(c),ab-8*(1-Math.cos(c)),-44+92*Math.cos(c)])}for(let[d,c,b]of Hb)for(let f of[-1,1]){let e=f*100*Math.sin(d),a=-44+88*Math.cos(d);Ga.push({ax:e,ay:ab+12,az:a,bx:e*.98,by:ab+12+b,bz:a-2,r1:c,r2:.8})}function Db(d,c,b){let f=Math.abs(d),e=sa(d,c-150,b+84,182,128,122),a=sa(d,c-46,b+26,116,78,106);return a=aa(a,-(c+2),5),e=Z(e,a,34),e=Z(e,Fa(f,c,b,96,80,24,174,52,-50,24),14),e=Z(e,Fa(f,c,b,16,196,46,152,178,-4,19),12),e=Z(e,Fa(f,c,b,40,128,56,104,104,40,11),9),e=Z(e,Fa(d,c,b,0,182,44,0,104,76,14),16),e}function Jb(d,c,b){let f=1e9;for(let e=0;e<Pa.length-1;e++){let a=Pa[e],h=Pa[e+1];f=Math.min(f,Fa(d,c,b,a[0],a[1],a[2],h[0],h[1],h[2],21))}return f}function Sb(d,c,b){let f=1e9;for(let e=0;e<Ga.length;e++){let a=Ga[e],h=d-a.ax;h>30||h<-30||(f=Math.min(f,Cb(d,c,b,a.ax,a.ay,a.az,a.bx,a.by,a.bz,a.r1,a.r2)))}return f}function db(d,c,b,f){let e=d-ib,a=c-yb,h=b-Nb,n=-22-75e-5*e*e+11*K(e/74,a/96);a>200&&(n-=(a-200)*.38),n+=70*v(-128,-168,a)*(1-v(110,190,Math.abs(e))),a<-168&&(n+=(-168-a)*.8);let g=(h-n)*.72,r=286-88e-5*e*e+40*K(e/170,h/170)+18*K(e/60,h/60);g=aa(g,(a-r)*.7,30),g=aa(g,-(h+540),30);let M=1e9,i=1e9;if(e>-270&&e<270&&a>-230&&a<330&&h>-345){M=Db(e,a,h),g=Z(g,M,34);let I=Math.abs(e);if(g=aa(g,-sa(I-80,a-150,h-36,40,33,72),7),g=aa(g,-sa(e,a-94,h-66,24,31,58),6),g=aa(g,-sa(e,a+66,h+46,154,70,215),9),a<-60&&a>-210&&I<150&&h>-100){let A=Jb(e,a,h);g=Z(g,A,16),M=Math.min(M,A)}a<20&&a>-160&&I<120&&h>-70&&h<90&&(i=Sb(e,a,h),g=Z(g,i,3))}return f&&(f[0]=M,f[1]=i),g}var Ha=[0,0];function Fb(d,c,b){let f=db(d,c,b,Ha),e=Ha[0],a=Ha[1];if(Math.abs(f)>48)return f;let h=e<30?v(26,2,e):0,n=a<12?v(9,.5,a):0;h=Math.max(h,n);let g=Da(d,c,b,1),r=1.6*Va(d/26,c/26,b/26,2)+.5*Ra(d/7,c/7,b/7);return f-la(g,r*(1-n*.8),h)}function Yb(d,c,b){return db(d,c,b,null)}function Lb(d,c,b,f,e,a,h){db(d,c,b,Ha);let n=Ha[0],g=Ha[1],r=n<40?v(30,4,n):0;r=Math.max(r,g<14?v(12,1,g):0),h[0]=r;let M=d-ib,i=c-yb,y=b-Nb,I=Math.abs(M),A=_a(M,i+66,y+46,154,70,215),w=v(1.25,1.02,A)*v(25,-95,y),R=v(1.25,1.02,_a(I-80,i-150,y-36,40,33,72))*v(34,-12,y),Y=v(1.25,1.02,_a(M,i-94,y-66,24,31,58))*v(50,14,y);h[1]=Math.max(w,R,Y),h[2]=.15*(1-r)}var jb=[P(-176,-372,30,22,20,236,1.3,{bulge:4}),P(-196,-470,38,26,20,300,2.1),P(-150,-214,22,15,30,182,3.7,{bulge:3}),P(-222,-112,34,24,30,214,4.4),P(-186,-612,42,30,20,340,5.9),P(-238,-762,50,34,20,380,6.6),P(-200,-40,24,18,36,150,7.2)],Qa=[[-205,112,-262,22,3,16],[-196,64,-166,16,3,12],[-150,182,-214,13,3,13]];function Ab(d,c,b){let f=-210-48*Math.sin((b+300)/165)-22*K(b/92,.3)-Math.max(0,c-40)*.07,e=(d-f)*.78,a=252+125*v(-80,-540,b)+46*K(b/210,d/210);e=aa(e,(c-a)*.72,24),e=aa(e,(b-112)*.8,30),e=aa(e,-(b+955),30);for(let h=0;h<jb.length;h++)e=Z(e,Ya(d,c,b,jb[h]),16);for(let h=0;h<Qa.length;h++){let n=Qa[h],g=Mb(d-n[0]+n[3]*.4,c-n[1]+n[4]+6,b-n[2],n[3]*1.4,n[4]+6,n[5],2.5);e=Z(e,g,4);let r=Mb(d-n[0]-2,c-n[1]-16,b-n[2],n[3]*.9,14,n[5]*.92,4);e=aa(e,-r,5)}return e}function pb(d,c,b){let f=Ab(d,c,b);if(Math.abs(f)>44)return f;let e=0;for(let a=0;a<Qa.length;a++){let h=Qa[a],n=Math.hypot((d-h[0])/(h[3]+8),(c-h[1])/10,(b-h[2])/(h[5]+8));e=Math.max(e,v(1.6,.9,n))}return f-Da(d,c,b,1-e*.9)}var bb=[P(-150,-598,40,27,0,296,1.1,{bulge:5}),P(-98,-662,30,21,0,238,2.7),P(-212,-696,50,35,0,338,3.9),P(-56,-726,22,15,0,186,4.8,{bulge:3}),P(-168,-520,26,20,0,214,5.5),P(-252,-568,34,26,0,276,6.3),P(-118,-772,34,24,10,262,7.7),P(-20,-792,18,13,10,150,8.9,{bulge:2})];for(let d of bb)d.y0=qa(d.x,d.z)-6;function Kb(d,c,b){let f=1e9;for(let e=0;e<bb.length;e++)f=Z(f,Ya(d,c,b,bb[e]),12);return Math.abs(f)>40?f:f-Da(d,c,b,.8)}var Ib=[P(118,-70,36,26,-44,196,2.4,{bulge:5,pow:.7}),P(92,-18,16,11,-10,64,3.3),P(150,-118,24,18,-44,128,5.1)];function Xb(d,c,b){let f=1e9;for(let e=0;e<Ib.length;e++)f=Z(f,Ya(d,c,b,Ib[e]),14);return f=Z(f,sa(d-104,c-160,b+58,34,20,32),14),Math.abs(f)>40?f:f-Da(d,c,b,.9)}var Vb=P(xa.x,xa.z,30,25,-48,xa.y,1.9,{bulge:3});function ub(d,c,b){let f=Ya(d,c,b,Vb);f=aa(f,c-xa.y,2);let e=ea.span/2;for(let a of[-1,1]){let h=ea.x+a*(e+9),n=sa(d-h,c+18,b-ea.z,20,26,22);n=aa(n,c-ea.y+.6,2),f=Z(f,n,6)}return f}function Wb(d,c,b){let f=ub(d,c,b);if(Math.abs(f)>30)return f;let e=v(xa.y-8,xa.y-1,c);return f-Da(d,c,b,.75*(1-e*.85))}var kb=(()=>{let d=Xa(77),c=[],b=0;for(;c.length<46&&b++<4e3;){let f=-2600+d()*5200,e=-3100+d()*2900;if(e>-1350&&f<330||e>-1700&&Math.abs(f)<520||c.some(g=>Math.hypot(g.x-f,g.z-e)<170))continue;let a=45+d()*75,h=qa(f,e)-20,n=220+d()*520;c.push(P(f,e,a,a*(.55+d()*.25),h,h+n,d()*10,{bulge:d()*10,pow:.8+d()*.6}))}return c})();function Tb(d,c,b){let f=1e9;for(let e=0;e<kb.length;e++){let a=kb[e],h=d-a.x,n=b-a.z,g=h*h+n*n,r=a.r0*1.7+60;if(g>r*r){f=Math.min(f,Math.sqrt(g)-a.r0*1.5);continue}f=Z(f,Ya(d,c,b,a),20)}return Math.abs(f)>50?f:f-Da(d*.62,c*.62,b*.62,1.25)}var Ba=d=>(c,b,f,e,a,h,n)=>{n[0]=0,n[1]=0,n[2]=d},ob=(()=>{let d=Xa(4242),c=[],b=(e,a,h)=>{let n=Sa(e,a),g=h*(.8+d()*.5),r=h*(.45+d()*.35),M=h*(.7+d()*.5),i=d()*Math.PI*2,y=[];for(let I=0;I<4;I++){let A=d()*Math.PI*2,w=(d()-.3)*1.2;y.push([Math.cos(A)*Math.cos(w),Math.sin(w),Math.sin(A)*Math.cos(w),h*(.45+d()*.3)])}c.push({x:e,y:n-r*.35,z:a,rx:g,ry:r,rz:M,c:Math.cos(i),s:Math.sin(i),planes:y,R:Math.max(g,r,M)*1.15})},f=[[-24,26,2.6],[-31,31,1.5],[27,21,3.2],[33,27,1.7],[-14,6,1.9],[17,2,2.4],[-46,12,3.8],[48,4,3.4],[7,22,.9],[-6,28,.7],[12,30,.6]];for(let[e,a,h]of f)b(e,a,h);for(let e=0;e<26;e++){let a=Ma.at(30+e*34+d()*18),h=d()<.5?-1:1,n=3.6+d()*6;b(a.x-a.tz*h*n,a.z+a.tx*h*n,.7+d()*1.8)}for(let e=0;e<22;e++){let a=ia.at(200+e*38+d()*20),h=d()<.5?-1:1,n=6+d()*4;b(a.x-a.tz*h*n,a.z+a.tx*h*n,1.2+d()*2.5)}return c})();function qb(d,c,b){let f=1e9;for(let e=0;e<ob.length;e++){let a=ob[e],h=d-a.x,n=c-a.y,g=b-a.z,r=h*h+n*n+g*g;if(r>(a.R+6)*(a.R+6)){f=Math.min(f,Math.sqrt(r)-a.R);continue}let M=h*a.c+g*a.s,i=-h*a.s+g*a.c,y=sa(M,n,i,a.rx,a.ry,a.rz);for(let I of a.planes)y=aa(y,M*I[0]+n*I[1]+i*I[2]-I[3],a.R*.12);f=Z(f,y,.6)}return f>2?f:f-.22*Va(d/2.2,c/2.2,b/2.2,3)-.05*Ra(d/.6,c/.6,b/.6)}var sb={skull:{bounds:[-480,-30,-1430,480,640,-870],cell:{high:1.3,mid:2.2,low:3.2},sdf:Fb,sdfAO:Yb,attrib:Lb,lipschitz:3.4},left:{bounds:[-730,0,-970,-120,470,125],cell:{high:2,mid:2.8,low:4},sdf:pb,sdfAO:Ab,attrib:Ba(.22),lipschitz:2},mid:{bounds:[-320,-20,-820,20,350,-470],cell:{high:1.6,mid:2.4,low:3.4},sdf:Kb,attrib:Ba(.32),lipschitz:2},right:{bounds:[20,-50,-190,200,225,40],cell:{high:1.1,mid:1.6,low:2.4},sdf:Xb,attrib:Ba(.2),lipschitz:2},gorge:{bounds:[30,-52,-600,190,14,-205],cell:{high:1,mid:1.5,low:2.2},sdf:Wb,sdfAO:ub,attrib:Ba(.25),lipschitz:2},far:{bounds:[-2800,-60,-3300,2800,1e3,-220],cell:{high:7,mid:9,low:12},sdf:Tb,attrib:Ba(.62),lipschitz:2.2},boulders:{bounds:[-130,-50,-1e3,260,60,60],cell:{high:.3,mid:.45,low:.7},sdf:qb,attrib:Ba(.14),lipschitz:2}};function Ob(d,c,b){let{sdf:f,cell:e}=d,[a,h,n,g,r,M]=d.bounds,i=Math.ceil((g-a)/e),y=Math.ceil((r-h)/e),I=Math.ceil((M-n)/e);c=Math.max(0,c),b=Math.min(i,b);let A=Math.ceil(i/8),w=Math.ceil(y/8),R=Math.ceil(I/8),Y=d.lipschitz||1.7,S=(8*e*.8661+e)*Y,q=Math.max(0,Math.floor((c-1)/8)),t=Math.min(A-1,Math.floor((b-1)/8)),m=new Map,l=9,j=[],k=[],o=[],x=0;for(let s=0;s<R;s++)for(let C=0;C<w;C++)for(let D=q;D<=t;D++){let J=a+(D*8+4)*e,V=h+(C*8+8/2)*e,F=n+(s*8+8/2)*e,L=f(J,V,F);if(x++,Math.abs(L)>S)continue;let p=new Float32Array(l*l*l);for(let da=0;da<=8;da++)for(let W=0;W<=8;W++)for(let fa=0;fa<=8;fa++)p[fa+l*(W+l*da)]=f(a+(D*8+fa)*e,h+(C*8+W)*e,n+(s*8+da)*e);x+=l*l*l,m.set(D+A*(C+w*s),{bi:D,bj:C,bk:s,s:p,v:null})}let O=[[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]],z=new Float32Array(8);for(let s of m.values()){let C=new Int32Array(512).fill(-1);s.v=C;let{s:D}=s;for(let J=0;J<8;J++)for(let V=0;V<8;V++)for(let F=0;F<8;F++){let L=s.bi*8+F,p=s.bj*8+V,da=s.bk*8+J;if(L<c-1||L>=b||p>=y||da>=I||L>=i)continue;let W=0;for(let ca=0;ca<8;ca++){let na=D[F+(ca&1)+l*(V+(ca>>1&1)+l*(J+(ca>>2)))];z[ca]=na,na<0&&(W|=1<<ca)}if(W===0||W===255)continue;let fa=0,Ua=0,pa=0,ya=0;for(let ca=0;ca<12;ca++){let na=O[ca][0],ka=O[ca][1],oa=z[na],Ka=z[ka];if(oa<0==Ka<0)continue;let Za=oa/(oa-Ka);fa+=(na&1)+((ka&1)-(na&1))*Za,Ua+=(na>>1&1)+((ka>>1&1)-(na>>1&1))*Za,pa+=(na>>2)+((ka>>2)-(na>>2))*Za,ya++}C[F+8*(V+8*J)]=j.length,j.push(a+(L+fa/ya)*e),k.push(h+(p+Ua/ya)*e),o.push(n+(da+pa/ya)*e)}}let N=(s,C,D)=>{if(s<0||C<0||D<0)return-1;let J=m.get((s/8|0)+A*((C/8|0)+w*(D/8|0)));return J?J.v[s%8+8*(C%8+8*(D%8))]:-1},u=[],B=(s,C,D,J,V)=>{if(s<0||C<0||D<0||J<0)return;if(V){let p=C;C=J,J=p}let F=(j[s]-j[D])**2+(k[s]-k[D])**2+(o[s]-o[D])**2,L=(j[C]-j[J])**2+(k[C]-k[J])**2+(o[C]-o[J])**2;F<L?u.push(s,C,D,s,D,J):u.push(s,C,J,C,D,J)};for(let s of m.values()){let{s:C}=s;for(let D=0;D<8;D++)for(let J=0;J<8;J++)for(let V=0;V<8;V++){let F=s.bi*8+V,L=s.bj*8+J,p=s.bk*8+D;if(F<c||F>=b||L>=y||p>=I)continue;let W=C[V+l*(J+l*D)]<0;L>0&&p>0&&C[V+1+l*(J+l*D)]<0!==W&&B(N(F,L,p),N(F,L-1,p),N(F,L-1,p-1),N(F,L,p-1),!W),F>0&&p>0&&C[V+l*(J+1+l*D)]<0!==W&&B(N(F,L,p),N(F,L,p-1),N(F-1,L,p-1),N(F-1,L,p),!W),F>0&&L>0&&C[V+l*(J+l*(D+1))]<0!==W&&B(N(F,L,p),N(F-1,L,p),N(F-1,L-1,p),N(F,L-1,p),!W)}}let H=new Int32Array(j.length).fill(-1),U=0;for(let s=0;s<u.length;s++){let C=u[s];H[C]<0&&(H[C]=U++)}let E=new Float32Array(U*3);for(let s=0;s<j.length;s++){let C=H[s];C<0||(E[C*3]=j[s],E[C*3+1]=k[s],E[C*3+2]=o[s])}let T=U>65535?new Uint32Array(u.length):new Uint32Array(u.length);for(let s=0;s<u.length;s++)T[s]=H[u[s]];let G=new Int8Array(U*3),_=new Uint8Array(U*4),X=e*.35,Oa=d.sdfAO||f,ba=[e*1.2,e*3.2,e*8,e*20],ta=[.5,.3,.2,.12],ha=new Float32Array(4);for(let s=0;s<U;s++){let C=E[s*3],D=E[s*3+1],J=E[s*3+2],V=f(C+X,D-X,J-X),F=f(C-X,D-X,J+X),L=f(C-X,D+X,J-X),p=f(C+X,D+X,J+X),da=V-F-L+p,W=-V-F+L+p,fa=-V+F-L+p,Ua=Math.hypot(da,W,fa)||1;da/=Ua,W/=Ua,fa/=Ua;let pa=(V+F+L+p)*.25,ya=Math.max(-e*.5,Math.min(e*.5,pa));C-=da*ya,D-=W*ya,J-=fa*ya,E[s*3]=C,E[s*3+1]=D,E[s*3+2]=J,G[s*3]=Math.round(da*127),G[s*3+1]=Math.round(W*127),G[s*3+2]=Math.round(fa*127);let ca=0;for(let ka=0;ka<4;ka++){let oa=ba[ka],Ka=Oa(C+da*oa,D+W*oa,J+fa*oa);ca+=ta[ka]*Math.max(0,oa-Ka)/oa}let na=Math.max(0,Math.min(1,1-ca));ha[0]=0,ha[1]=0,ha[2]=0,ha[3]=0,d.attrib&&d.attrib(C,D,J,da,W,fa,ha),_[s*4]=Math.round(na*255),_[s*4+1]=Math.round(Math.max(0,Math.min(1,ha[0]))*255),_[s*4+2]=Math.round(Math.max(0,Math.min(1,ha[1]))*255),_[s*4+3]=Math.round(Math.max(0,Math.min(1,ha[2]))*255)}return{pos:E,nor:G,aux:_,index:T,samples:x,blocks:m.size}}var cb=(function(){var d="b9H79Tebbbe;veC9Geueu9Geub9Gbb9Gsuuuuuuuuuuuu99uueu9Gvuuuuub9Gruuuuuuub9Gouuuuuue999Gvuuuuueu9Gzuuuuuuuuuuu99uuuub9Gquuuuuuu99uueu9GPuuuuuuuuuuu99uueu9Gquuuuuuuu99ueu9Gruuuuuu99eu9Gwuuuuuu99ueu9Giuuue999GDuuuuuuuuueu9Gkuuuuuuuu99uub9Gluuuueu9Gluuuub9Giuuueui3EdilvorlwDiqkrxmPszdHObAAbeAlve9Weiiviebeoweuecj:Gdkr:Sdmo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95bw8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bD8A9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9O9v9W9K9HtWbqQ9TW79O9V9Wt9F79P9T9W29P9M959t29V9W9W95bkX9TW79O9V9Wt9F79P9T9W29P9M959qV919UWbmQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7bPX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2WbsP9TW79O9V9Wt9FVW9TW79Obza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbA59TW79O9V9Wt9F9NW9UWV9HtW9q9V79Pt9P9V9U9sW9T9H9WbCl79IV9RbXDwebcekdKYq:p:1dElbzOk:Q:tekYue99iuQ99eui99Due99xue9:w998Jjjjjbcj;sb9Rgs8Kjjjjbcbhzasc:Cefcbc;Kbz:xjjjb8AdnabaeSmbabaeadcdtz:wjjjb8AkdnamcdGTmbalcrfci4cbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egecdtfaHBdbasaecefBd;8ecbhlcbhednadTmbabheadhOinaHaeydbci4fcb86bbaeclfheaOcufgOmbkcbhlabheadhOinaHaeydbgAci4fgCaCRbbgCceaAcrGgAtV86bbaCcu7aA4ceGalfhlaeclfheaOcufgOmbkcualcdtalcFFFFi0Ehekaecbyd;y:L:cjbHjjjjbbhzasc:Cefasyd;8egecdtfazBdbasaecefBd;8ealcd4alfhOcehHinaHgecethHaeaO6mbkcbhXcuaecdtgOaecFFFFi0Ecbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egAcdtfaHBdbasaAcefBd;8eaHcFeaOz:xjjjbhQdnadTmbaecufhLcbhKindndnaQabaKcdtfgYydbgAc:v;t;h;Ev2aLGgOcdtfgCydbgHcuSmbceheinazaHcdtfydbaASmdaOaefhHaecefheaQaHaLGgOcdtfgCydbgHcu9hmbkkazaXcdtfaABdbaCaXBdbaXhHaXcefhXkaYaHBdbaKcefgKad9hmbkkaQcbyd;C:L:cjbH:bjjjbbasasyd;8ecufBd;8ekcbh8AcualcefgecdtaecFFFFi0Ecbyd;y:L:cjbHjjjjbbhKasc:Cefasyd;8egecdtfaKBdbasaKBdNeasaecefBd;8ecuadcitadcFFFFe0Ecbyd;y:L:cjbHjjjjbbhEasc:Cefasyd;8egecdtfaEBdbasaEBd:yeasaecefBd;8eascNefabadalcbz:cjjjbcualcdtgealcFFFFi0Eg3cbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egOcdtfaHBdbasaOcefBd;8ea3cbyd;y:L:cjbHjjjjbbhXasc:Cefasyd;8egOcdtfaXBdbasaOcefBd;8eaHaXaialavazasc:Cefz:djjjbalcbyd;y:L:cjbHjjjjbbh5asc:Cefasyd;8egOcdtfa5BdbasaOcefBd;8ea3cbyd;y:L:cjbHjjjjbbhOasc:Cefasyd;8egAcdtfaOBdbasaAcefBd;8ea3cbyd;y:L:cjbHjjjjbbhAasc:Cefasyd;8egCcdtfaABdbasaCcefBd;8eaOcFeaez:xjjjbh8EaAcFeaez:xjjjbh8FdnalTmbindnaKa8AgAcefg8AcdtfydbgCaKaAcdtgefydbgOSmbaCaO9RhYaEaOcitfhaa8Faefhha8EaefhLcbhCindndnaaaCcitfydbgQaA9hmbaLaABdbahaABdbxekdnaKaQcdtggfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheinaeydbaASmdaecwfheaOcufgOmbkka8FagfgeaAaQaeydbcuSEBdbaLaQaAaLydbcuSEBdbkaCcefgCaY9hmbkka8Aal9hmbkaHhOaXhAa8EhQa8FhCcbheindndnaeaOydbgL9hmbdnaeaAydbgL9hmbaQydbhLdnaCydbgYcu9hmbaLcu9hmba5aefcb86bbxikdnaYcuSmbaLcuSmbaeaYSmbaHaYcdtfydbaHaLcdtfydb9hmba5aefcd86bbxika5aefhadnaeaYSmbaeaLSmbaace86bbxikaacv86bbxdkdnaeaXaLcdtgYfydb9hmbdnaCydbgacuSmbaeaaSmbaQydbggcuSmbaeagSmba8FaYfydbghcuSmbahaLSmba8EaYfydbgYcuSmbaYaLSmbaHaacdtfydbgLaHaYcdtfydb9hmbaLaHagcdtfydbgYSmbaYaHahcdtfydb9hmba5aefcd86bbxika5aefcv86bbxdka5aefcv86bbxeka5aefa5aLfRbb86bbkaOclfhOaAclfhAaQclfhQaCclfhCalaecefge9hmbkdnamcaGTmbcbh8Jindndna5a8Jfg8KRbbg8Lc9:fPlbeebekdndndnaHa8Jcdtfydbgea8J9hmbcbhYcbh8MaqTmednazTmbcbh8Ma8JheinaqazaecdtgefydbfRbbce4a8MVceGh8MaXaefydbgea8J9hmbxikkcbh8Ma8JheinaqaefRbbce4a8MVceGh8MaXaecdtfydbgea8J9hmbxdkka5aefRbbhexeka8JheindnaKaecdtg8AfgeclfydbgOaeydbgeSmbaOae9RhgaEaecitfhhaHa8AfhacbhLinahaLcitfydbgQhednindnaKaecdtgCfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheaaydbhAdninaHaeydbcdtfydbaASmeaecwfheaOcufgOTmdxbkkcbhexdkaXaCfydbgeaQ9hmbkcehekaYaeVhYaLcefgLag9hmbkkaXa8Afydbgea8J9hmbka8LclciaYceGEa8MEheka8Kae86bbka8Jcefg8Jal9hmbkkdnaqTmbdndnazTmbazheaHhOalhAindnaqaeydbfRbbceGTmba5aOydbfcv86bbkaeclfheaOclfhOaAcufgAmbxdkkaqheaHhOalhAindnaeRbbceGTmba5aOydbfcv86bbkaecefheaOclfhOaAcufgAmbkkaHhealhAa5hOindna5aeydbfRbbcv9hmbaOcv86bbkaeclfheaOcefhOaAcufgAmbkkamceGTmba5healhOindndnaeRbbcufPlbeebekaecv86bbkaecefheaOcufgOmbkkcbh8Ncualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbh8Kasc:Cefasyd;8egecdtfa8KBdbasaecefBd;8eascbBd:qeas9cb83i1ea8Kaialavazasc1efz:ejjjbhydndnaDmbcbh8PcbhaxekcbhaawhecbhOindnaeIdbJbbbb9ETmbasaacdtfaOBdbaacefhakaeclfheaDaOcefgO9hmbkcuaaal2gecdtaecFFFFi0Ecbyd;y:L:cjbHjjjjbbh8Pasc:Cefasyd;8egecdtfa8PBdbasaecefBd;8ealTmbdnaambcbhaxekarcd4hgdnazTmbaacdthhcbhLa8PhYinaoazaLcdtfydbag2cdtfhQasheaYhOaahAinaOaQaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaOclfhOaAcufgAmbkaYahfhYaLcefgLal9hmbxdkkaacdthhcbhLa8PhYinaoaLag2cdtfhQasheaYhOaahAinaOaQaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaOclfhOaAcufgAmbkaYahfhYaLcefgLal9hmbkkcualc8S2gOalc;D;O;f8U0EgCcbyd;y:L:cjbHjjjjbbheasc:Cefasyd;8egAcdtfaeBdbasaAcefBd;8eaecbaOz:xjjjbhIcbh8RcbhgdnaaTmbcbh8NaCcbyd;y:L:cjbHjjjjbbhgasc:Cefasyd;8egecdtfagBdbasaecefBd;8eagcbaOz:xjjjb8Acuaaal2gecltgOaecFFFFb0Ecbyd;y:L:cjbHjjjjbbh8Rasc:Cefasyd;8egecdtfa8RBdbasaecefBd;8ea8RcbaOz:xjjjb8AamcjjjjdGTmbcualcltgealcFFFFb0Ecbyd;y:L:cjbHjjjjbbh8Nasc:Cefasyd;8egOcdtfa8NBdbasaOcefBd;8ea8Ncbaez:xjjjb8AkdnadTmbcbhQabhOina8KaOclfydbgLcx2fgeIdba8KaOydbgYcx2fgAIdbg8S:tgRa8KaOcwfydbghcx2fgCIdlaAIdlg8U:tg8VNaeIdla8U:tg8WaCIdba8S:tg8XN:tg8Ya8YNa8WaCIdwaAIdwg8Z:tg80NaeIdwa8Z:tg8Wa8VN:tg81a81Na8Wa8XNaRa80N:tg80a80NMMg8V:rhBa8Yh8Xa80h8Wa81hRdna8VJbbbb9EgATmba8YaB:vh8Xa80aB:vh8Wa81aB:vhRkaIaHaYcdtfydbgCc8S2fgeaRaB:rg8VaRNNg83aeIdbMUdbaea8Wa8Va8WNgUNg85aeIdlMUdlaea8Xa8Va8XNg86Ng87aeIdwMUdwaeaRaUNgUaeIdxMUdxaea86aRNg88aeIdzMUdzaea8Wa86Ng89aeIdCMUdCaeaRa8Va8Xa8ZNaRa8SNa8Ua8WNMM:mg8:Ng86NgRaeIdKMUdKaea8Wa86Ng8WaeId3MUd3aea8Xa86Ng8XaeIdaMUdaaea86a8:Ng86aeId8KMUd8Kaea8VaeIdyMUdyaIaHaLcdtfydbgLc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdyaIaHahcdtfydbgYc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdydna8NTmbdnaATmba8YaB:vh8Ya80aB:vh80a81aB:vh81ka8NaCcltfgeaBJbbbZNgRa80Ng8VaeIdlMUdlaeaRa8YNg8WaeIdwMUdwaeaRa81Ng8XaeIdbMUdbaeaRa8S:ma81Na8Ua80N:ta8Za8YN:tNgRaeIdxMUdxa8NaLcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxa8NaYcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxkaOcxfhOaQcifgQad6mbkkdnalTmbJq;x8J88J;n;m;m89J:v:;;w8ZamczGEamc;abGEh80cbhOaHhCazhQaIhea8KhAindnaOaCydb9hmbaOhLdnazTmbaQydbhLka80hRdnaqTmbJbbjZa80aqaLfRbbclGEhRkaecxfgLaLIdbJbbbbMUdbaeczfgLaLIdbJbbbbMUdbaecCfgLaLIdbJbbbbMUdbaeaRaecyfgLIdbg8YNgRaeIdbMUdbaeclfgYaRaYIdbMUdbaecwfgYaRaYIdbMUdbaecKfgYaYIdbaAIdbg8WaRN:tUdbaAcwfIdbh8Vaec3fgYaYIdbaRaAclfIdbg8XN:tUdbaecafgYaYIdbaRa8VN:tUdbaec8KfgYIdbh81aLa8YaRMUdbaYa81aRa8Va8VNa8Wa8WNa8Xa8XNMMNMUdbkaCclfhCaQclfhQaec8SfheaAcxfhAalaOcefgO9hmbkkdnadTmbcbh8AabhLinaba8AcdtfhYcbheindna5aLaefydbgCfRbbgOTmba5aYaec:G:G:cjbfydbcdtfydbgQfRbbcFeGgATmbdnaOclSghmbaOci6mbaAclSmbaAcd0mekdnaOcd0mba8EaCcdtfydbaQ9hmekdnaAcd0mba8FaQcdtfydbaC9hmekdndnahmbaAcl9hmekaOciSmeaAciSmekJbbbZJbbbZJbbacaAcdSEaOcdSEhUdna8KaYaec:K:G:cjbfydbcdtfydbcx2fgOIdwa8KaCcx2fgAIdwg86:tg8Sa8KaQcx2fghIdwa86:tg8Xa8XNahIdbaAIdbg8U:tg80a80NahIdlaAIdlg8Z:tg8Va8VNMMg81Na8Xa8Sa8XNaOIdba8U:tg83a80Na8VaOIdla8Z:tg85NMMg8WN:tg8Ya8YNa83a81Na80a8WN:tgRaRNa85a81Na8Va8WN:tg8Wa8WNMMgBJbbbb9ETmba8YaB:rgB:vh8Ya8WaB:vh8WaRaB:vhRkaUa81:rNgBa8Ya86NaRa8UNa8Za8WNMM:mg81Ng87a81Nh88a80a85Na8Va83N:tg81a81Na8Va8SNa8Xa85N:tg8Va8VNa8Xa83Na80a8SN:tg8Xa8XNMMg83:rh80a8Ya87Nh85a8Wa87Nh89aRa87Nh87a8WaBa8YNg8SNh8:a8SaRNhZaRaBa8WNgnNhca8Ya8SNh8Ya8WanNh8WaRaBaRNNh8Sdna83Jbbbb9ETmba81a80:vh81a8Xa80:vh8Xa8Va80:vh8VkaIaHaCcdtfydbc8S2fgOaOIdba8Sa8VaUa80:rNgRa8VNNMg80MUdbaOa8Wa8XaRa8XNg8SNMg83aOIdlMUdlaOa8Ya81aRa81Ng8WNMg8YaOIdwMUdwaOaca8Va8SNMg8SaOIdxMUdxaOaZa8Wa8VNMgUaOIdzMUdzaOa8:a8Xa8WNMg8WaOIdCMUdCaOa87a8VaRa81a86Na8Va8UNa8Za8XNMMg86:mNgRNMg8VaOIdKMUdKaOa89a8XaRNMg8XaOId3MUd3aOa85a81aRNMg81aOIdaMUdaaOa88a86aRN:tgRaOId8KMUd8KaOaBaOIdyMUdyaIaHaQcdtfydbc8S2fgOa80aOIdbMUdbaOa83aOIdlMUdlaOa8YaOIdwMUdwaOa8SaOIdxMUdxaOaUaOIdzMUdzaOa8WaOIdCMUdCaOa8VaOIdKMUdKaOa8XaOId3MUd3aOa81aOIdaMUdaaOaRaOId8KMUd8KaOaBaOIdyMUdykaeclfgecx9hmbkaLcxfhLa8Acifg8Aad6mbkkdnamcjeGTmbalTmbcbh9cindnaKa9cgecdtgOfydbghaKaecefg9ccdtfydbg8M9pmba8Kaecx2fhDaIaHaOfydbgCc8S2fh8AindnaHaEahcitfgeydbgLcdtfydbg8JaC0mbaeydlh8LcuhAaLheindnaKaecdtgYfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheindnaHaeydbcdtfydbaC9hmbaAcu9hhQaLhAaQmbaeclfydbhAkaecwfheaOcufgOmbkkaXaYfydbgeaL9hmbkaAaLSmbaAcuSmba8KaLcx2fgeIdbaDIdbg81:tgRa8Ka8Lcx2fgOIdlaDIdlg80:tg8XNaeIdla80:tg8VaOIdba81:tg8YN:tg86a8KaAcx2fgAIdba81:tg8Za8VNaAIdla80:tg83aRN:tg8SNa8VaOIdwaDIdwgB:tg8UNaeIdwaB:tg8Wa8XN:tg85a83a8WNaAIdwaB:tg87a8VN:tgUNa8Wa8YNaRa8UN:tg88a87aRNa8Za8WN:tg89NMMa86a86Na85a85Na88a88NMM:rJ:A:z9z:;Na8Sa8SNaUaUNa89a89NMM:rN9Gmbdna8Ua8Wa8WNaRaRNa8Va8VNMMg8SNa8Wa8Ua8WNa8YaRNa8Va8XNMMg86N:tg8Ua8UNa8Ya8SNaRa86N:tg8Ya8YNa8Xa8SNa8Va86N:tg86a86NMMg8XJbbbb9ETmba8Ua8X:rg8X:vh8Ua86a8X:vh86a8Ya8X:vh8Yka8S:rg8Xa8UaBNa8Ya81Na80a86NMM:mgUNg85aUNhUa8Ua85Nh88a86a85Nh89a8Ya85Nh8:a86a8Xa8UNg85NhZa85a8YNhna8Ya8Xa86NgcNhJa8Ua85Nh8Ua86acNh86a8Ya8Xa8YNNh85dna87a8SNa8Wa87a8WNa8ZaRNa8Va83NMMg8YN:tg8Wa8WNa8Za8SNaRa8YN:tgRaRNa83a8SNa8Va8YN:tg8Va8VNMMg8YJbbbb9ETmba8Wa8Y:rg8Y:vh8Wa8Va8Y:vh8VaRa8Y:vhRka8Aa8AIdba85aRa8XaRNNMg8SMUdba8Aa86a8Va8Xa8VNg8ZNMg86a8AIdlMUdla8Aa8Ua8Wa8Xa8WNg8YNMg8Ua8AIdwMUdwa8AaJaRa8ZNMg8Za8AIdxMUdxa8Aana8YaRNMg83a8AIdzMUdza8AaZa8Va8YNMg85a8AIdCMUdCa8Aa8:aRa8Xa8WaBNaRa81Na80a8VNMMg81:mNg8YNMgRa8AIdKMUdKa8Aa89a8Va8YNMg8Va8AId3MUd3a8Aa88a8Wa8YNMg8Wa8AIdaMUdaa8AaUa81a8YN:tg8Ya8AId8KMUd8Ka8Aa8Xa8XMg8Xa8AIdyMUdyaIa8Jc8S2fgea8SaeIdbMUdbaea86aeIdlMUdlaea8UaeIdwMUdwaea8ZaeIdxMUdxaea83aeIdzMUdzaea85aeIdCMUdCaeaRaeIdKMUdKaea8VaeId3MUd3aea8WaeIdaMUdaaea8YaeId8KMUd8Kaea8XaeIdyMUdykahcefgha8M9hmbkka9cal9hmbkkdnadTmbaaTmbcbhYinJbbbbh80a8KabaYcdtfgeclfydbgLcx2fgOIdwa8Kaeydbghcx2fgAIdwg8Z:tg8Va8VNaOIdbaAIdbg83:tg8Wa8WNaOIdlaAIdlg85:tg8Xa8XNMMg8Sa8Kaecwfydbg8Acx2fgeIdwa8Z:tg8YNa8Va8YNa8WaeIdba83:tg81Na8XaeIdla85:tgBNMMgRa8VN:tJbbbbJbbjZa8Sa8Ya8YNa81a81NaBaBNMMg8UNaRaRN:tg86:va86Jbbbb9BEg86Nh88a8Ua8VNaRa8YN:ta86Nh89a8SaBNaRa8XN:ta86Nh8:a8Ua8XNaRaBN:ta86NhZa8Sa81NaRa8WN:ta86Nhna8Ua8WNaRa81N:ta86Nhca8WaBNa8Xa81N:tgRaRNa8Xa8YNa8VaBN:tgRaRNa8Va81Na8Wa8YN:tgRaRNMM:rJbbbZNhRa8Pahaa2g8JcdtfhOa8Pa8Aaa2g8McdtfhAa8PaLaa2gDcdtfhCa8Z:mhJa85:mh9ea83:mhTascjdfheaahQJbbbbhBJbbbbh86Jbbbbh8SJbbbbh8UJbbbbh8ZJbbbbh83Jbbbbh85Jbbbbh87JbbbbhUinaecwfaRa89aCIdbaOIdbg8Y:tg8XNa88aAIdba8Y:tg81NMg8VNUdbaeclfaRaZa8XNa8:a81NMg8WNUdbaeaRaca8XNana81NMg8XNUdbaecxfaRaJa8VNa9ea8WNa8YaTa8XNMMMg8YNUdbaRa8Va8WNNa8ZMh8ZaRa8Va8XNNa8UMh8UaRa8Wa8XNNa8SMh8SaRa8Ya8YNNaUMhUaRa8Va8YNNa87Mh87aRa8Wa8YNNa85Mh85aRa8Xa8YNNa83Mh83aRa8Va8VNNa86Mh86aRa8Wa8WNNaBMhBaRa8Xa8XNNa80Mh80aOclfhOaCclfhCaAclfhAaeczfheaQcufgQmbkagahc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyagaLc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyaga8Ac8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdya8Ra8JcltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8RaDcltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8Ra8McltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbkaYcifgYad6mbkkcbhAdndnamcwGgSmbJbbbbh86cbh9hcbh9icbh6xekcbh9ha3cbyd;y:L:cjbHjjjjbbh6asc:Cefasyd;8egecdtfa6BdbasaecefBd;8ecua6alabadaHz:fjjjbgCcltaCcjjjjiGEcbyd;y:L:cjbHjjjjbbh9iasc:Cefasyd;8egecdtfa9iBdbasaecefBd;8ea9iaCa6a8Kalz:gjjjbJFFuuh86aCTmba9iheaChOinaeIdbgRa86a86aR9EEh86aeclfheaOcufgOmbkaCh9hkdnalTmbaKclfheaKydbhCa5hOalhQcbhAincbaeydbgLaC9RaORbbcpeGEaAfhAaOcefhOaeclfheaLhCaQcufgQmbkaAce4hAkcuadaA9Rcifg9kcx2a9kc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbh0asc:Cefasyd;8egecdtfa0BdbasaecefBd;8ecua9kcdta9kcFFFFi0Ecbyd;y:L:cjbHjjjjbbh9masc:Cefasyd;8egecdtfa9mBdbasaecefBd;8ea3cbyd;y:L:cjbHjjjjbbh9nasc:Cefasyd;8egecdtfa9nBdbasaecefBd;8ealcbyd;y:L:cjbHjjjjbbh9oasc:Cefasyd;8egecdtfa9oBdbasaecefBd;8eaxaxNayJbbjZamclGEg9pa9pN:vh87JbbbbhUdnadak9nmbdna9kci6mbamcjdGh9qaaclth9ra0cwfh9sJbbbbh85JbbbbhUinascNefabadalaHz:cjjjbabh8Acbh3cbh9tinaba9tcdtfh8McbheindnaHa8AaefydbgAcdtghfydbgCaHa8Maec:W:G:cjbfydbcdtfydbgOcdtg8JfydbgQSmba5aOfRbbgYco2a5aAfRbbgLfRb;a:G:cjbg8LaLco2aYfgDRb;a:G:cjbg9cVcFeGTmbdnaQaC9nmbaDRb;W:G:cjbcFeGmekdnaLcufcFeGce0mbaYTmba8EahfydbaO9hmekdnaLTmbaYcufcFeGce0mba8Fa8JfydbaA9hmeka0a3cx2fgCaOaAa9ccFeGgQEBdlaCaAaOaQEBdbaCaQa8LGcb9hBdwa3cefh3kaeclfgecx9hmbkdna9tcifg9tad9pmba8Acxfh8Aa3cifa9k9nmekka3TmdcbhDinaIaHa0aDcx2fghydbgLcdtgCfydbg8Jc8S2fgeIdwa8KahydlgYcx2fgOIdwg8WNaeIdzaOIdbg8XNaeIdaMgRaRMMa8WNaeIdlaOIdlg8YNaeIdCa8WNaeId3MgRaRMMa8YNaeIdba8XNaeIdxa8YNaeIdKMgRaRMMa8XNaeId8KMMM:lhRJbbbbJbbjZaeIdyg8V:va8VJbbbb9BEh8Vdndnahydwg8MmbJFFuuhBxekJbbbbJbbjZaIaHaYcdtfydbc8S2fgeIdyg81:va81Jbbbb9BEaeIdwa8KaLcx2fgOIdwg81NaeIdzaOIdbg80NaeIdaMgBaBMMa81NaeIdlaOIdlgBNaeIdCa81NaeId3Mg81a81MMaBNaeIdba80NaeIdxaBNaeIdKMg81a81MMa80NaeId8KMMM:lNhBka8VaRNh80dnaaTmbagaLc8S2fgAIdwa8WNaAIdza8XNaAIdaMgRaRMMa8WNaAIdla8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaYaa2gQcdtfhOa8RaLaa2g8AcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEh8Sdndna8MmbJbbbbhRxekagaYc8S2fgAIdwa8KaLcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8AcdtfhOa8RaQcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEhRka80a8SMh80aBaRMhBdndndna5aLfRbbc9:fPibeedkdna8Fa8Ea8EaCfydbaYSEaXaCfydbgQcdtfydbgCcu9hmbaXaYcdtfydbhCkagaQc8S2fgAIdwa8KaCcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaCaa2g8AcdtfhOa8RaQaa2g8JcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEh8Sdndna8MmbJbbbbhRxekagaCc8S2fgAIdwa8KaQcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8JcdtfhOa8Ra8AcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEhRka80a8SMh80aBaRMhBxdkaXaCfydbgCaLSmbaHaYcdtfydbh8Aindndna8EaCcdtgQfydbgecuSmbaHaecdtfydba8ASmekdna8FaQfydbgecuSmbaHaecdtfydba8ASmekaYhekagaCc8S2fgAIdwa8Kaecx2fgOIdwg8WNaAIdzaOIdbg8XNaAIdaMgRaRMMa8WNaAIdlaOIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Paeaa2cdtfhOa8RaCaa2cltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbka80aR:lgRa81aRa819DEaRa9qEMh80aXaQfydbgCaL9hmbkkdna5aYfRbbgeciSmbaecl9hmeka8MTmbaXaYcdtfydbgCaYSmbindndna8EaCcdtgQfydbgecuSmbaHaecdtfydba8JSmekdna8FaQfydbgecuSmbaHaecdtfydba8JSmekaLhekagaCc8S2fgAIdwa8Kaecx2fgOIdwg8WNaAIdzaOIdbg8XNaAIdaMgRaRMMa8WNaAIdlaOIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Paeaa2cdtfhOa8RaCaa2cltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaBaR:lgRa81aRa819DEaRa9qEMhBaXaQfydbgCaY9hmbkkahaBa80aBa809DgeEUdwahaLaYaea8Mcb9hGgeEBdlahaYaLaeEBdbaDcefgDa39hmbkascjdfcbcj;qbz:xjjjb8Aa9shea3hOinascjdfaeydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbcefBdbaecxfheaOcufgOmbkcbhecbhOinascjdfaefgAydbhCaAaOBdbaCaOfhOaeclfgecj;qb9hmbkcbhea9shOinascjdfaOydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbgAcefBdba9maAcdtfaeBdbaOcxfhOa3aecefge9hmbkadak9RgAci9Uh9udnalTmbcbhea9nhOinaOaeBdbaOclfhOalaecefge9hmbkkcbh9va9ocbalz:xjjjbh9caAcO9Uh9wa9uce4h9tcbh8Lcbh8Mdnina0a9ma8Mcdtfydbcx2fg8JIdwgRa879Emea8La9u9pmeJFFuuh8Vdna9ta39pmba0a9ma9tcdtfydbcx2fIdwJbb;aZNh8VkdnaRa8V9ETmbaRaU9ETmba8La9w0mdkdna9caHa8JydlgDcdtg9xfg8AydbgAfg9yRbba9caHa8Jydbghcdtg9zfydbgefg9ARbbVmba5ahfRbbh9BdndnaKaecdtfgOclfydbgCaOydbgOSmbaCaO9RhCa8KaAcx2fhLa8Kaecx2fhYaEaOcitfheindna9naeydbcdtfydbgOaASmba9naeclfydbcdtfydbgQaASmbaOaQSmba8KaQcx2fgQIdba8KaOcx2fgOIdbg8W:tgRaYIdlaOIdlg8X:tg80NaQIdla8X:tg8VaYIdba8W:tgBN:tg8YaRaLIdla8X:tg8SNa8VaLIdba8W:tg8UN:tg8XNa8VaYIdwaOIdwg81:tg8ZNaQIdwa81:tg8Wa80N:tg80a8VaLIdwa81:tg83Na8Wa8SN:tg8VNa8WaBNaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmikaecwfheaCcufgCmbkkdndna9Bc99fcFeGce0mba9na9zfaDBdbaXa9zfydbgeahSmeina8AydbhAdndna8EaecdtgOfydbgecuSmbaHaecdtfydbaASmekdna8FaOfydbgecuSmbaHaecdtfydbaASmekaDheka9naOfaeBdbaXaOfydbgeah9hmbxdkkdndna9BcFeGcdSmbaDhexekdna8Fa8Ea8Ea9zfydbaDSEaXa9zfydbghcdtfydbgecu9hmbaXa9xfydbheka9na9zfaDBdbka9nahcdtfaeBdbka9Ace86bba9yce86bba8JIdwgRaUaUaR9DEhUa9vcefh9vcecda9BcFeGceSEa8Lfh8Lxeka9tcefh9tka8Mcefg8Ma39hmbkka9vTmddnalTmbcbhLcbhhindna9nahcdtgefydbgAahSmbaHaAcdtfydbh8AdnahaHaefydb9hg8JmbaIa8Ac8S2fgeaIahc8S2fgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxaeaOIdzaeIdzMUdzaeaOIdCaeIdCMUdCaeaOIdKaeIdKMUdKaeaOId3aeId3MUd3aeaOIdaaeIdaMUdaaeaOId8KaeId8KMUd8KaeaOIdyaeIdyMUdya8NTmba8Na8Acltfgea8NahcltfgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxkaaTmbagaAc8S2fgeagahc8S2g8MfgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxaeaOIdzaeIdzMUdzaeaOIdCaeIdCMUdCaeaOIdKaeIdKMUdKaeaOId3aeId3MUd3aeaOIdaaeIdaMUdaaeaOId8KaeId8KMUd8KaeaOIdyaeIdyMUdya9raA2hYa8RhOaahCinaOaYfgeaOaLfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8JmbJbbbbJbbjZaIa8MfgeIdygR:vaRJbbbb9BEaeIdwa8Ka8Acx2fgOIdwgRNaeIdzaOIdbg8VNaeIdaMg8Wa8WMMaRNaeIdlaOIdlg8WNaeIdCaRNaeId3MgRaRMMa8WNaeIdba8VNaeIdxa8WNaeIdKMgRaRMMa8VNaeId8KMMM:lNgRa85a85aR9DEh85kaLa9rfhLahcefghal9hmbkcbhOa8EheindnaeydbgAcuSmbdnaOa9naAcdtgCfydbgA9hmbcuhAa8EaCfydbgCcuSmba9naCcdtfydbhAkaeaABdbkaeclfhealaOcefgO9hmbkcbhOa8FheindnaeydbgAcuSmbdnaOa9naAcdtgCfydbgA9hmbcuhAa8FaCfydbgCcuSmba9naCcdtfydbhAkaeaABdbkaeclfhealaOcefgO9hmbkka85aUaaEh85cbhOabhecbhAindnaHa9naeydbcdtfydbgLcdtfydbgCaHa9naeclfydbcdtfydbgYcdtfydbgQSmbaCaHa9naecwfydbcdtfydbg8AcdtfydbghSmbaQahSmbabaOcdtfgCaLBdbaCcwfa8ABdbaCclfaYBdbaOcifhOkaecxfheaAcifgAad6mbkdndnaSmbaOhdxekdnaOak0mbaOhdxekdna86a859FmbaOhdxekJFFuuh86cbhdabhecbhAindna9ia6aeydbgCcdtfydbcdtfIdbgRa859ETmbaeclf8Pdbh9CabadcdtfgQaCBdbaQclfa9C83dbaRa86a86aR9EEh86adcifhdkaecxfheaAcifgAaO6mbkkadak0mbxdkkascNefabadalaHz:cjjjbkdndnadak0mbadhYxekdnaSmbadhYxekdna86a879FmbadhYxekcehQina86Jbb;aZNgRa87aRa879DEh8WJbbbbhRdna9hTmba9ihea9hhOinaeIdbg8VaRa8Va8W9FEaRa8VaR9EEhRaeclfheaOcufgOmbkkJFFuuh86cbhYabhecbhOindna9ia6aeydbgAcdtfydbcdtfIdbg8Va8W9ETmbaeclf8Pdbh9CabaYcdtfgCaABdbaCclfa9C83dba8Va86a86a8V9EEh86aYcifhYkaecxfheaOcifgOad6mbkdnaQaYad9hVceGmbadhYxdkaRaUaUaR9DEhUaYak9nmecbhQaYhda86a879FmbkkdnamcjjjjdGTmba9ocbalz:xjjjbh8AdnaYTmbabheaYhOina8AaeydbgAfce86bba8AaHaAcdtfydbfce86bbaeclfheaOcufgOmbkkascNefabaYalaHz:cjjjbdndnalTmbcbhCindna8AaCfRbbTmbdna5aCfRbbPlbeebekdnaHaCcdtgLfydbgeaCSmba8KaCcx2fgOa8Kaecx2fgeydwBdwaOae8Pdb83dbxekaIaCc8S2fgQIdygnanJL:3;rUNgRMh87aQIdwgxaRMh8SaQIdlg9DaRMh8UaQIdbg9EaRMh81aQIdag9FaRa8KaCcx2fg8JIdwg88N:th8ZaQId3g9GaRa8JIdlg89N:th83aQIdKg9Ha8JIdbg8:aRN:th80JbbbbhZaQIdCg9IJbbbbMh85aQIdzg9JJbbbbMhBaQIdxg9KJbbbbMh86dndnaaTmbaChAinJbbbba87agaAc8S2fgOIdygR:vaRJbbbb9BEhRa8RaAaa2cltfheaOIdaa87Na8ZMh8ZaOId3a87Na83Mh83aOIdKa87Na80Mh80aOIdCa87Na85Mh85aOIdza87NaBMhBaOIdxa87Na86Mh86aOIdwa87Na8SMh8SaOIdla87Na8UMh8UaOIdba87Na81Mh81aahOina8ZaecwfIdbg8VaecxfIdbg8YNaRN:th8Za83aeclfIdbg8Wa8YNaRN:th83a85a8Wa8VNaRN:th85a81aeIdbg8Xa8XNaRN:th81a80a8Xa8YNaRN:th80aBa8Xa8VNaRN:thBa86a8Xa8WNaRN:th86a8Sa8Va8VNaRN:th8Sa8Ua8Wa8WNaRN:th8UaeczfheaOcufgOmbkaXaAcdtfydbgAaC9hmbka8NTmba8NaCcltfgeIdxhTaeIdwhcaeIdlhJaeIdbhRxekJbbbbhTJbbbbhcJbbbbhJJbbbbhRkaBa81:vg8Wa80Na8Z:ta85aBa86a81:vg8VN:tg8Za8Ua86a8VN:tg8Y:vg8Xa8Va80Na83:tg8UN:th83acaRa8WN:taJaRa8VN:tg86a8XN:tg85a8SaBa8WN:ta8Za8XN:tgB:vg8S:mh8Za86a8Y:vgc:mhJdnJbbbbaRaRa81:vg9eN:ta86acN:ta85a8SN:tg86:la87J:983:g81NgR9ETmba8Za83NaJa8UNa9ea80NaT:tMMa86:vhZka81:laR9ETmba8Y:laR9ETmbaB:laR9ETmba9e:maZNa8W:ma8ZaZNa83aB:vMgBNa8V:maJaZNa8X:maBNa8Ua8Y:vMMg85Na80:ma81:vMMMh87aKaLfgeclfydbgOaeydbge9RhhaEaecitfhLJbbbbhRdnaOaeSg8MmbJbbbbhRaLheahhAina8Kaeclfydbcx2fgOIdwa88:tg8Va8VNaOIdba8::tg8Va8VNaOIdla89:tg8Va8VNMMg8Va8Kaeydbcx2fgOIdwa88:tg8Wa8WNaOIdba8::tg8Wa8WNaOIdla89:tg8Wa8WNMMg8WaRaRa8W9DEgRaRa8V9DEhRaecwfheaAcufgAmbkaR:rgRaRNhRkaBa88:tg8Va8VNa87a8::tg8Va8VNa85a89:tg8Va8VNMMaR9EmbaQId8KhZdna8Mmbina8KaLclfydbcx2fgeIdba8KaLydbcx2fgOIdbg8W:tgRa89aOIdlg8X:tg80NaeIdla8X:tg8Va8:a8W:tg86N:tg8YaRa85a8X:tg8SNa8Va87a8W:tg8UN:tg8XNa8Va88aOIdwg81:tg8ZNaeIdwa81:tg8Wa80N:tg80a8VaBa81:tg83Na8Wa8SN:tg8VNa8Wa86NaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmdaLcwfhLahcufghmbkkJbbbbJbbjZan:vanJbbbb9BEgRaxaBNa9Ja87Na9FMg8Va8VMMaBNa9Da85Na9IaBNa9GMg8Va8VMMa85Na9Ea87Na9Ka85Na9HMg8Va8VMMa87NaZMMM:lNaRaxa88Na9Ja8:Na9FMg8Va8VMMa88Na9Da89Na9Ia88Na9GMg8Va8VMMa89Na9Ea8:Na9Ka89Na9HMg8Va8VMMa8:NaZMMM:lNJbb;aZNJ:983:g81M9Emba8JaBUdwa8Ja85Udla8Ja87UdbkaCcefgCal9hmbkdnaambcbhaxdkcbhQindna8AaQfRbbTmbaHaQcdtgefydbaQ9hmba5aQfhhaXaefh8Ja8KaQcx2fhAa8PaQaa2cdtfh8McbhEincuhCdnahRbbc99fcFeGce0mbaQhCa8JydbgeaQSmba8PaEcdtgOfhLa8MaOfIdbhRaQhCinaChOcuhCdnaLaeaa2cdtfIdbaR9CmbaOcuSmbaOhCagaec8S2fIdyagaOc8S2fIdy9ETmbaehCkaXaecdtfydbgeaQ9hmbkka8PaEcdtfhLa8RaEcltfhKaQheinaLaeaa2cdtfJbbbbJbbjZagaeaCaCcuSEgOc8S2fIdygR:vaRJbbbb9BEaKaOaa2cltfgOIdwaAIdwNaOIdbaAIdbNaOIdlaAIdlNMMaOIdxMNUdbaXaecdtfydbgeaQ9hmbkaEcefgEaa9hmbkkaQcefgQal9hmbxdkkaambcbhakaiavaoarawaaala8Ka8Pazasayasc1efa5a8Aaqz:hjjjbkdnamcjjjjlGTmbazmbaYTmbabhecbhLina5aeydbgAfRbbc3thQaecwfgXydbhHcjjjj94hCdna8EaAcdtgEfydbaeclfgKydbgOSmbcjjjj94cba8FaOcdtfydbaASEhCkaeaQaCVaAVBdba5aOfRbbc3thacjjjj94hCcjjjj94hQdna8EaOcdtfydbaHSmbcjjjj94cba8FaHcdtfydbaOSEhQkaKaaaQVaOVBdba5aHfRbbc3thOdna8EaHcdtfydbaASmbcjjjj94cba8FaEfydbaHSEhCkaXaOaCVaHVBdbaecxfheaLcifgLaY6mbkkdnazTmbaYTmbaYheinabazabydbcdtfydbBdbabclfhbaecufgembkkdnaPTmbaPa9paU:rNUdbkdnasyd;8egHTmbaHcdtasc:Ceffc98fheinaeydbcbyd;C:L:cjbH:bjjjbbaec98fheaHcufgHmbkkascj;sbf8KjjjjbaYk;Yieouabydlhvabydbclfcbaicdtz:xjjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfhearcufgrmbkkabydbcbBdbk:todDue99aicd4aifhrcehwinawgDcethwaDar6mbkcuaDcdtgraDcFFFFi0Ecbyd;y:L:cjbHjjjjbbhwaoaoyd9GgqcefBd9GaoaqcdtfawBdbawcFearz:xjjjbhkdnaiTmbalcd4hlaDcufhxcbhminamhDdnavTmbavamcdtfydbhDkcbadaDal2cdtfgDydlgwawcjjjj94SEgwcH4aw7c:F:b:DD2cbaDydbgwawcjjjj94SEgwcH4aw7c;D;O:B8J27cbaDydwgDaDcjjjj94SEgDcH4aD7c:3F;N8N27axGhwamcdthPdndndnavTmbakawcdtfgrydbgDcuSmeadavaPfydbal2cdtfgsIdbhzcehqinaqhrdnadavaDcdtfydbal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmlkarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbxdkkakawcdtfgrydbgDcuSmbadamal2cdtfgsIdbhzcehqinaqhrdnadaDal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmikarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbkkaramBdbamhDkabaPfaDBdbamcefgmai9hmbkkakcbyd;C:L:cjbH:bjjjbbaoaoyd9GcufBd9GdnaeTmbaiTmbcbhDaehwinawaDBdbawclfhwaiaDcefgD9hmbkcbhDaehwindnaDabydbgrSmbawaearcdtfgrydbBdbaraDBdbkabclfhbawclfhwaiaDcefgD9hmbkkk;:odvuv998Jjjjjbca9Rgocbyd1:G:cjbBdKaocb8Pdj:G:cjb83izaocbydN:G:cjbBdwaocb8Pd:m:G:cjb83ibdnadTmbaicd4hrdnabmbdnalTmbcbhwinaealawcdtfydbar2cdtfhDcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxikkarcdthwcbhDincbhiinaoczfaifgqaeaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaeawfheaDcefgDad9hmbxdkkdnalTmbcbhwinabawcx2fgiaealawcdtfydbar2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxdkkarcdthlcbhwaehDinabawcx2fgiaeawar2cdtfgqIdbUdbaiaqIdlUdlaiaqIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaDalfhDawcefgwad9hmbkkJbbbbaoIdbaoIdzgx:tgkakJbbbb9DEgkaoIdlaoIdCgm:tgPaPak9DEgkaoIdwaoIdKgP:tgsasak9DEhsdnabTmbadTmbJbbbbJbbjZas:vasJbbbb9BEhkinabakabIdbax:tNUdbabclfgoakaoIdbam:tNUdbabcwfgoakaoIdbaP:tNUdbabcxfhbadcufgdmbkkdnavTmbavaPUdwavamUdlavaxUdbkask:WlewudnaeTmbcbhvabhoinaoavBdbaoclfhoaeavcefgv9hmbkkdnaiTmbcbhrinadarcdtfhwcbhDinalawaDcdtgvyd:G:G:cjbcdtfydbcdtfydbhodnalawavfydbcdtfydbgqabaqcdtfgkydbgvSmbinakabavgqcdtfgxydbgvBdbaxhkaqav9hmbkkdnaoabaocdtfgkydbgvSmbinakabavgocdtfgxydbgvBdbaxhkaoav9hmbkkdnaqaoSmbabaqaoaqao0Ecdtfaqaoaqao6EBdbkaDcefgDci9hmbkarcifgrai6mbkkdnaembcbskcbhxindnalaxcdtgvfydbax9hmbaxhodnaxabavfgDydbgvSmbaDhqinaqabavgocdtfgkydbgvBdbakhqaoav9hmbkkaDaoBdbkaxcefgxae9hmbkcbhkabhvcbhoindndnaoalydbgq9hmbdnaoavydbgq9hmbavakBdbakcefhkxdkavabaqcdtfydbBdbxekavabaqcdtfydbBdbkalclfhlavclfhvaeaocefgo9hmbkakk;jiilud99euabcbaecltz:xjjjbhvdnalTmbadhoaihralhwinarcwfIdbhDarclfIdbhqavaoydbcltfgkarIdbakIdbMUdbakaqakIdlMUdlakaDakIdwMUdwakakIdxJbbjZMUdxaoclfhoarcxfhrawcufgwmbkkdnaeTmbavhkaehrinakcxfgoIdbhDaocbBdbakakIdbJbbbbJbbjZaD:vaDJbbbb9BEgDNUdbakclfgoaDaoIdbNUdbakcwfgoaDaoIdbNUdbakczfhkarcufgrmbkkdnalTmbinavadydbcltfgkaicwfIdbakIdw:tgDaDNaiIdbakIdb:tgDaDNaiclfIdbakIdl:tgDaDNMMgDakIdxgqaqaD9DEUdxadclfhdaicxfhialcufglmbkkdnaeTmbavcxfhkinabakIdbUdbakczfhkabclfhbaecufgembkkk:moerudnaoTmbaecd4hzdnavTmbaicd4hHavcdthOcbhAindnaPaAfRbbTmbaAhednaDTmbaDaAcdtfydbhekdnasTmbasaefRbbceGmekdnamaAfRbbcvSmbabaeaz2cdtfgiaraAcx2fgCIdbakNaxIdbMUdbaiaCIdlakNaxIdlMUdlaiaCIdwakNaxIdwMUdwkadaeaH2cdtfhXaqheawhiavhCinaXaeydbcdtgQfaiIdbalaQfIdb:vUdbaeclfheaiclfhiaCcufgCmbkkawaOfhwaAcefgAao9hmbxdkkdnasmbcbheaDhiindnaPaefRbbTmbaehCdnaDTmbaiydbhCkamaefRbbcvSmbabaCaz2cdtfgCarIdbakNaxIdbMUdbaCarclfIdbakNaxIdlMUdlaCarcwfIdbakNaxIdwMUdwkaiclfhiarcxfhraoaecefge9hmbxdkkdnaDTmbindnaPRbbTmbasaDydbgefRbbceGmbamRbbcvSmbabaeaz2cdtfgearIdbakNaxIdbMUdbaearclfIdbakNaxIdlMUdlaearcwfIdbakNaxIdwMUdwkaPcefhPaDclfhDamcefhmarcxfhraocufgombxdkkazcdthicbheindnaPaefRbbTmbasaefRbbceGmbamaefRbbcvSmbabarIdbakNaxIdbMUdbabclfarclfIdbakNaxIdlMUdbabcwfarcwfIdbakNaxIdwMUdbkarcxfhrabaifhbaoaecefge9hmbkkk8MbabaeadaialavcbcbcbcbcbaoarawaDz:bjjjbk8MbabaeadaialavaoarawaDaqakaxamaPz:bjjjbkRbababaeadaialavaoarawaDaqakaxcjjjjdVamz:bjjjbk:vgoque99due99duq998Jjjjjbc;Wb9Rgq8Kjjjjbcbhkaqcxfcbc;Kbz:xjjjb8Aaqcualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbgxBdxaqceBd2axaialavcbcbz:ejjjb8AaqcualcdtalcFFFFi0Egmcbyd;y:L:cjbHjjjjbbgiBdzaqcdBd2dndnJFF959eJbbjZawJbbjZawJbbjZ9DE:vawJ9VO:d869DEgw:lJbbb9p9DTmbaw:OhPxekcjjjj94hPkadci9Uhsarco9UhzdndnaombaPcd9imekdnalTmbaPcuf:YhwdnaoTmbcbhvaihHaxhOindndnaoavfRbbceGTmbavcjjjjlVhAxekdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHaOcxfhOalavcefgv9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkadTmbcbhkaehvcbhOinakaiavclfydbcdtfydbgHaiavcwfydbcdtfydbgA9haiavydbcdtfydbgXaH9haXaA9hGGfhkavcxfhvaOcifgOad6mbkkarci9UhQdndnaz:Z:rJbbbZMgw:lJbbb9p9DTmbaw:Ohvxekcjjjj94hvkaQ:ZhLcbhKc:bwhzdninakaQ9pmeazaP9Rcd9imeavazcufgOavaO9iEaPcefavaP9kEhYdnalTmbaYcuf:YhwdnaoTmbcbhOaihHaxhvindndnaoaOfRbbceGTmbaOcjjjjlVhAxekdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHavcxfhvalaOcefgO9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkcbhOdnadTmbaehvcbhHinaOaiavclfydbcdtfydbgAaiavcwfydbcdtfydbgX9haiavydbcdtfydbgraA9haraX9hGGfhOavcxfhvaHcifgHad6mbkkdnas:ZgCaL:taY:Ygwaz:Y:tg8ANak:ZgEaO:Zg3:tNaEaL:tawaP:Y:tg5Na3aC:tNMg8EJbbbb9BmbaCaE:ta5a8Aa3aL:tNNNa8E:vawMhwkdndnaOaQ0mbaOhkaYhPxekaOhsaYhzkdndnaKcl0mbdnawJbbbZMgw:lJbbb9p9DTmbaw:Ohvxdkcjjjj94hvxekaPazfcd9ThvkaKcefgKcs9hmbkkdndndnakmbJbbjZhwcbhOcdhvaDmexdkalcd4alfhHcehOinaOgvcethOavaH6mbkaqcuavcdtavcFFFFi0Ecbyd;y:L:cjbHjjjjbbgYBdCaqciBd2aqamcbyd;y:L:cjbHjjjjbbgzBdKaqclBd2dnalTmbaPcuf:YhwdnaoTmbcbhOaihAaxhHindndnaoaOfRbbceGTmbaOcjjjjlVhXxekdndnaHclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqthXdndnaHcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarVhXdndnaHIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarcCtVhXkaAaXBdbaAclfhAaHcxfhHalaOcefgO9hmbxdkkaxhOaihHalhAindndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcCthXdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkarcqtaXVhXdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaHaXarVBdbaOcxfhOaHclfhHaAcufgAmbkkaqcuaYavazaialz:mjjjbgXc8S2gvaXc;D;O;f8U0Ecbyd;y:L:cjbHjjjjbbgiBd3aqcvBd2aicbavz:xjjjbhOdnadTmbcbhraehiinaxaiclfydbgocx2fgvIdbaxaiydbgPcx2fgHIdbg3:tgCaxaicwfydbgYcx2fgAIdlaHIdlg8A:tgwNavIdla8A:tgEaAIdba3:tg8EN:tgLaLNaEaAIdwaHIdwg5:tg8FNavIdwa5:tgEawN:tgwawNaEa8ENaCa8FN:tgCaCNMMg8E:rhEJbbnnJbbjZazaPcdtfydbgvazaocdtfydbgASavazaYcdtfydbgoSGgHEh8Fdna8EJbbbb9ETmbaLaE:vhLaCaE:vhCawaE:vhwkaOavc8S2fgvavIdbawa8FaE:rNgEawNNg8FMUdbavaCaEaCNgaNghavIdlMUdlavaLaEaLNg8ENggavIdwMUdwavawaaNgaavIdxMUdxava8EawNg8JavIdzMUdzavaCa8ENg8EavIdCMUdCavawaEaLa5Nawa3Na8AaCNMM:mg8ANg3NgwavIdKMUdKavaCa3NgCavId3MUd3avaLa3NgLavIdaMUdaava3a8ANg3avId8KMUd8KavaEavIdyMUdydnaHmbaOaAc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdyaOaoc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdykaicxfhiarcifgrad6mbkkcbhAaqcuaXcdtgvaXcFFFFi0Egicbyd;y:L:cjbHjjjjbbgHBdaaqcoBd2aqaicbyd;y:L:cjbHjjjjbbgiBd8KaqcrBd2aHcFeavz:xjjjbhPdnalTmbazhHinJbbbbJbbjZaOaHydbgrc8S2fgvIdygw:vawJbbbb9BEavIdwaxcwfIdbgwNavIdzaxIdbgCNavIdaMgLaLMMawNavIdlaxclfIdbgLNavIdCawNavId3MgwawMMaLNavIdbaCNavIdxaLNavIdKMgwawMMaCNavId8KMMM:lNhwdndnaParcdtgvfgrydbcuSmbaiavfIdbaw9ETmekaraABdbaiavfawUdbkaHclfhHaxcxfhxalaAcefgA9hmbkkdndnaXmbJbbbbhwxekJbbbbhwinaiIdbgCawawaC9DEhwaiclfhiaXcufgXmbkaw:rhwkakcd4akfhOcehiinaigvcethiavaO6mbkcbhOaqcuavcdtgiavcFFFFi0Ecbyd;y:L:cjbHjjjjbbgHBdyaHcFeaiz:xjjjbhXdnadTmbavcufhrcbhkcbhxindnazaeaxcdtfgvydbcdtfydbgiazavclfydbcdtfydbgOSmbaiazavcwfydbcdtfydbgvSmbaOavSmbaPavcdtfydbhAdndnaPaOcdtfydbgvaPaicdtfydbgi9pmbavaA9pmbaAhlaihoavhAxekdnaAai9pmbaAav9pmbaihlavhoxekavhlaAhoaihAkabakcx2fgvaABdbavcwfaoBdbavclfalBdbdnaXaoc:3F;N8N2alc:F:b:DD27aAc;D;O:B8J27arGgOcdtfgvydbgicuSmbcehHinaHhvdnabaicx2fgiydbaA9hmbaiydlal9hmbaiydwaoSmikavcefhHaXaOavfarGgOcdtfgvydbgicu9hmbkkavakBdbakcefhkkaxcifgxad6mbkakci2hOkcwhvaDTmekaDawUdbkavcdthvaqcxfc98fhiinaiavfydbcbyd;C:L:cjbH:bjjjbbavc98fgvmbkaqc;Wbf8KjjjjbaOk:0iewuabcFeaecdtz:xjjjbhbdnalmbcbskaecufhvdndnaiTmbcbhocbhrindndndnabaiarcdtgwfydbgDcm4aD7c:v;t;h;Ev2gecs4ae7avGgqcdtfgkydbgxcuSmbceheinaiaxcdtgxfydbaDSmdaqaefhxaecefheabaxavGgqcdtfgkydbgxcu9hmbkkakarBdbaoheaocefhoxekadaxfydbhekadawfaeBdbarcefgral9hmbxdkkcbhocbhDindnabaDcm4aD7c:v;t;h;Ev2gecs4ae7avGgqcdtfgkydbgxcuSmbaxaDSmbceheinabaqaefavGgqcdtfgkydbgxcuSmeaecefheaxaD9hmbkkdndnaxcu9hmbakaDBdbaoheaocefhoxekadaxcdtfydbhekadaDcdtfaeBdbaDcefgDal9hmbkkaok:3ldrue9:8Jjjjjbc;Wb9Rgr8Kjjjjbcbhwarcxfcbc;Kbz:xjjjb8AdnabaeSmbabaeadcdtz:wjjjb8AkarcualcdtalcFFFFi0EgDcbyd;y:L:cjbHjjjjbbgqBdxarceBd2aqcbaialavcbarcxfz:djjjbcualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbhkarcxfaryd2gxcdtfakBdbaraxcefgmBd2akaialavcbcbz:ejjjb8AarcxfamcdtfaDcbyd;y:L:cjbHjjjjbbgiBdbaraxcdfgvBd2arcxfavcdtfcuaialaeadaqz:fjjjbgecltaecjjjjiGEcbyd;y:L:cjbHjjjjbbgqBdbaqaeaiakalz:gjjjbaxcifhkdnadTmbaoaoNhocbhwabhlcbheindnaqaialydbgvcdtfydbcdtfIdbao9ETmbalclf8PdbhPabawcdtfgDavBdbaDclfaP83dbawcifhwkalcxfhlaecifgead6mbkkdnakTmbaxcdtarcxffcwfhlinalydbcbyd;C:L:cjbH:bjjjbbalc98fhlakcufgkmbkkarc;Wbf8Kjjjjbawk;lOoDud99oue99vuv998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcxfcbc;Kbz:xjjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbgqBdxawceBd2aqaeadaicbcbz:ejjjb8AawcuadcdtadcFFFFi0Egkcbyd;y:L:cjbHjjjjbbgxBdzawcdBd2adcd4adfhecehiinaigmcethiamae6mbkcbhPawcuamcdtgsamcFFFFi0Ecbyd;y:L:cjbHjjjjbbgzBdCawciBd2dndnar:ZgH:rJbbbZMgO:lJbbb9p9DTmbaO:Ohixekcjjjj94hikamcufhAc:bwhCcbhXadhQcbhLinaiaCcufgeaiae9iEaPcefaiaP9kEhDdndnadTmbaDcuf:YhOaqhiaxheadhKindndnaiIdbaONJbbbZMgY:lJbbb9p9DTmbaY:Oh8Axekcjjjj94h8Aka8AcCth8AdndnaiclfIdbaONJbbbZMgY:lJbbb9p9DTmbaY:OhExekcjjjj94hEkaEcqta8AVh8AdndnaicwfIdbaONJbbbZMgY:lJbbb9p9DTmbaY:OhExekcjjjj94hEkaea8AaEVBdbaicxfhiaeclfheaKcufgKmbkazcFeasz:xjjjbh3cbh5cbh8Eindna3axa8Ecdtfydbg8Acm4a8A7c:v;t;h;Ev2gics4ai7aAGgKcdtfgEydbgecuSmbaea8ASmbcehiina3aKaifaAGgKcdtfgEydbgecuSmeaicefhiaea8A9hmbkkaEa8ABdba5aecuSfh5a8Ecefg8Ead9hmbxdkkazcFeasz:xjjjb8Acbh5kdnaQ:ZgYaH:taD:YgOaC:Y:tg8FNaX:Zgaa5:Zgh:tNaaaH:taOaP:Y:tggNahaY:tNMg8JJbbbb9BmbaYaa:taga8FahaH:tNNNa8J:vaOMhOkaPaDa5ar0geEhPaXa5aeEhXdna5arSmbaDaCaeEgCaP9Rcd9imbdndnaLcl0mbdnaOJbbbZMgO:lJbbb9p9DTmbaO:Ohixdkcjjjj94hixekaPaCfcd9Thika5aQaeEhQaLcefgLcs9hmekkdndnaXmbcihicbhDxekawakcbyd;y:L:cjbHjjjjbbg8ABdKawclBd2aPcuf:YhYdnadTmbaqhiaxheadhKindndnaiIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaEcCthEdndnaiclfIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:Oh3xekcjjjj94h3ka3cqtaEVhEdndnaicwfIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:Oh3xekcjjjj94h3kaeaEa3VBdbaicxfhiaeclfheaKcufgKmbkkawcuazama8Aaxadz:mjjjbgDc32giaDc;j:KM;jb0Ecbyd;y:L:cjbHjjjjbbgeBd3awcvBd2aecbaiz:xjjjbh3avcd4hxdnadTmbdnalTmbaxcdth8Ea8AhEaqhealhKadhAina3aEydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaKIdbaiIdxMUdxaiaKclfIdbaiIdzMUdzaiaKcwfIdbaiIdCMUdCaiaiIdKJbbjZMUdKaEclfhEaecxfheaKa8EfhKaAcufgAmbxdkka8AhKaqheadhEina3aKydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaiIdxJbbbbMUdxaiaiIdzJbbbbMUdzaiaiIdCJbbbbMUdCaiaiIdKJbbjZMUdKaKclfhKaecxfheaEcufgEmbkkdnaDTmba3hiaDheinaiaiIdbJbbbbJbbjZaicKfIdbgO:vaOJbbbb9BEgONUdbaiclfgKaOaKIdbNUdbaicwfgKaOaKIdbNUdbaicxfgKaOaKIdbNUdbaiczfgKaOaKIdbNUdbaicCfgKaOaKIdbNUdbaic3fhiaecufgembkkcbhEawcuaDcdtgCaDcFFFFi0Egicbyd;y:L:cjbHjjjjbbgeBdaawcoBd2awaicbyd;y:L:cjbHjjjjbbg8EBd8KaecFeaCz:xjjjbh5dnadTmbaoJbbjZJbbjZaY:vaPceSENgOaONhYaxcdthxalheinaYaecN:H:cjbalEgKIdwa3a8AydbgAc32fgiIdC:tgOaONaKIdbaiIdx:tgOaONaKIdlaiIdz:tgOaONMMNaqcwfIdbaiIdw:tgOaONaqIdbaiIdb:tgOaONaqclfIdbaiIdl:tgOaONMMMhOdndna5aAcdtgifgKydbcuSmba8EaifIdbaO9ETmekaKaEBdba8EaifaOUdbka8Aclfh8AaqcxfhqaeaxfheadaEcefgE9hmbkkaba5aCz:wjjjb8Acrhikaicdthiawcxfc98fheinaeaifydbcbyd;C:L:cjbH:bjjjbbaic98fgimbkkawc;Wbf8KjjjjbaDk:Pdidui99ducbhi8Jjjjjbca9Rglcbyd1:G:cjbBdKalcb8Pdj:G:cjb83izalcbydN:G:cjbBdwalcb8Pd:m:G:cjb83ibdndnaembJbbjFhvJbbjFhoJbbjFhrxekadcd4cdthwincbhdinalczfadfgDabadfIdbgvaDIdbgoaoav9EEUdbaladfgDavaDIdbgoaoav9DEUdbadclfgdcx9hmbkabawfhbaicefgiae9hmbkalIdwalIdK:thralIdlalIdC:thoalIdbalIdz:thvkJbbbbavavJbbbb9DEgvaoaoav9DEgvararav9DEk:H8Modui99lud99Aus998Jjjjjbcji9RgD8KjjjjbcbhqaDcxfcbc;Kbz:xjjjb8AaDcbBdwaD9cb83ibaDcbyd;i:L:cjbBd1eaDcb8Pd;a:L:cjb83ijeaDcbyd;u:L:cjbBd94aDcb8Pd;m:L:cjb83i9WdndnavmbJbbjFhkJbbjFhxJbbjFhmxekaocd4cdthPalhsincbhzinaDcjefazfgHasazfIdbgkaHIdbgxaxak9EEUdbaDc;WbfazfgHakaHIdbgxaxak9DEUdbazclfgzcx9hmbkasaPfhsaqcefgqav9hmbkaDId94aDId1e:thmaDIdtaDId:ee:thxaDId9WaDIdje:thkkJbbbbhOdnar:YgAJq;x8J88MaA:vJbbbbakakJbbbb9DEgkaxaxak9DEgkamamak9DENgxJbbbb9Bmbarc9:f:Yax:vhOkaDcCfhCaDcxfcxfhXcbhzinaDazfaDcjefazfIdbgkaxaDc;WbfazfIdbak:t:tJbbb:;NMUdbazclfgzcx9hmbkcbhQaDarar2gLar2gzcbyd;y:L:cjbHjjjjbbgHBdxaDceBd2aHcbazz:xjjjbgKcbcbadaialaoaraOaDawz:rjjjbcdhYaDcuaLcdtaLcFFFFi0Eg8Acbyd;y:L:cjbHjjjjbbgEBdzaDcdBd2aDcjefcbarz:xjjjb8Acbh3dnaLTmbdnarcb9kmbaKhzaEhHaLhsincbh3aHcbcuazaDcjefarz:AjjjbEBdbazarfhzaHclfhHascufgsmbxdkkaKhPcbh3cbhvindndnaKavar2faDcjefarz:AjjjbTmbcbhHaPhzarhsinazaHazRbbgqfgHcbaqE86bbazcefhzascufgsmbkaEavcdtfa3BdbaHa3fh3xekaEavcdtfcuBdbkaParfhPavcefgvaL9hmbkkdnabTmbaDcua3cotgza3cFFF8F0Ecbyd;y:L:cjbHjjjjbbgQBdCcihYaDciBd2aQcbazz:xjjjb8AaXhCkdnawceGmbaCa8Acbyd;y:L:cjbHjjjjbbg5BdbaDaYcefgzBd2aDcxfazcdtfaLcbyd;y:L:cjbHjjjjbbgzBdbaDaYcdfgYBd2azcbaLz:xjjjbh8EarcufhXdnarci9imbarc9:fhCararcef2aKfcefh8Aceh8Fina8Far2hPa8AhvcehqindnaEaqaPfcdtfydbcuSmbavhzaChHinazazRbbgscuasE86bbazcefhzaHcufgHmbkkavarfhvaqcefgqaX9hmbka8AaLfh8Aa8Fcefg8FaX9hmbkkarce9imbcbh8Acbhqcbhvina8EaqfhscbhzindnasazfgHRbbmbaHce86bba5a8AcdtfaqazfBdba8Acefh8Akarazcefgz9hmbkaqarfhqavcefgvar9hmbka8ATmbaKcefhaaKc9:fhharc9:fhgarci9ih8Jina8Ea5a8Acufg8Acdtfydbgvfcb86bbavar2hPdna8JmbaEavcdtfydbcuSmbaKaPfhHaghqindnaHcefgzRbbgscFe9hmbaHRbbmbcbhskazas86bbazhHaqcufgqmbkaharavcef2fhzaXhsindnazRbbgHcFe9hmbazcefRbbmbcbhHkazaH86bbazcufhzascufgsce9kmbkkaaaPfh8Kavavar9Ug8Lar29Rh8FcbhCindnaCceScuaCEa8Ffgzce9imbazaX9ombcuaCciSaCcdSEa8LfgHce9imbaHaX9ombaEaHar2azfg8McdtfydbcuSmba8Jmbaaa8Mar2fhzcbhqa8KhsaghvinazazRbbgHcbaHaHcFeSEasRbbEgP86bbascefhsazcefhzaPaH7aqVhqavcufgvmbkaqcFeGTmba8Ea8MfgzRbbmbazce86bba5a8Acdtfa8MBdba8Acefh8AkaCcefgCcl9hmbka8AmbkkdnaQTmbaKaEaQadaialaoaraOaDawz:rjjjba3TmbJbbjZaO:vhkawcjjjjlGhPdnawcdGTmbJbbnnaOaON:vh8NakJbbbZNhyaQhzinazczfgsIdbg8PazcCfIdbgx:vhmazcxfgqIdbgIax:vhAazcwfgvIdbg8Rax:vh8SakazydbgHcFrG:ZNhRakaHcq4cFrG:ZNh8UakaHcC4cFrG:ZNh8VdnaxJ:p;c;188Ng8WazcKfIdbMg8X:laxJ:983:g81Ngx9ETmba8Wazc3fIdbMazc8KfIdbg8Ya8Ya8X:vg8YN:tg8Z:lax9ETmba8WazcafIdbMazcyfIdbg8Wa8Wa8X:vg80N:tazc8SfIdba8Wa8YN:tg8Wa8Wa8Z:vg8WN:tg81:lax9ETmba8PJ:p;c;188NazcUfIdb:ta80a8RJ:p;c;188Nazc8WfIdb:tg8PN:ta8WaIJ:p;c;188Nazc80fIdb:ta8Ya8PN:tgIN:ta81:vgxam:tg8Ra8RNa8Pa8X:va8YaIa8Z:va8WaxN:tg8XN:ta80axN:tg8Wa8S:tg8Ya8YNa8XaA:tg8Ya8YNMMa8N9DTmbaxaRaxaR9EEgxakaRMgmaxam9DEhma8Xa8Ua8Xa8U9EEgxaka8UMgAaxaA9DEhAa8Wa8Va8Wa8V9EEgxaka8VMg8Saxa8S9DEh8SkdnaPTmbayaRMhmaya8UMhAaya8VMh8SkasamUdbaqaAUdbava8SUdbazc;abfhza3cufg3mbxdkkdnaPTmbakJbbbZNhxaQhzinazczfaxakazydbgHcFrG:ZNMUdbazcxfaxakaHcq4cFrG:ZNMUdbazcwfaxakaHcC4cFrG:ZNMUdbazc;abfhza3cufg3mbxdkkaQcCfhzinazc98fgHaHIdbazIdbgk:vUdbazc94fgHaHIdbak:vUdbazctfgHaHIdbak:vUdbazc;abfhza3cufg3mbkkcbhsdndnarcd9imbarcufh3aEarcdtfhadnabmbaKcefg8Mararcefgz2fh8JaKazfhba8MaLfh8Ecbhscbh8Kina8Kar2h8La8Mheabh8Aa8Eh8Fa8Jh5cbhXindnaEaXa8LfgqcdtgzfgHclfydbaHydbGaaazfgzydbGazclfydbGcuSmbclcbaKaqar2fgzarfRbbEazRbbcb9hVczcbazaLfgzRbbEVc;abcbazarfRbbEVhPaehza8AhHa8Fhqa5hva3hQindnaPclcbaHRbbEazRbbcb9hVczcbaqRbbEVc;abcbavRbbEVgPcetVgCTmbaCcFeSmbasaCRb;W;p:cjbfhskazcefhzaHcefhHaqcefhqavcefhvaQcufgQmbkkaearfhea8Aarfh8Aa8Farfh8Fa5arfh5aXcefgXa39hmbka8MaLfh8MabaLfhba8EaLfh8Ea8JaLfh8Ja8Kcefg8Ka39hmbxdkkJbbjZaO:vgkakJk;x8J88NNh8RawcdGh8EaDIdwhkaDIdlhxaDIdbhmcbhscbhPinaPar2h8KcbhvindnaEava8KfgqcdtgzfgHclfydbaHydbGaaazfgzydbGazclfydbGcuSmbcbh8AclcbaKaqar2fgYarfRbbEaYRbbcb9hVczcbaYaLfg8JRbbEVc;abcba8JarfRbbEVh8Lindna8LclcbaYa8Ag8Mcefg8AfgzarfRbbEazRbbcb9hVczcba8Ja8AfgzRbbEVc;abcbazarfRbbEVg8LcetVgCTmbaCcFeSmbcbhqdndndnaCRb;W;n:cjbcufPdebdka8ETmeaCcC2gz8Ve;W:L:cjbcltaz8Ve;Y:L:cjbcsGVh8FaKa8Mfh5cxhzaDcjefhHinaHaQaEa8Faz4gqce4ceGavfaqcd4ceGaPfar2fgXcdtfydbcotfa5aqceGfaXar2fRbbcotfcnfBdbaHclfhHazc98fgzc989hmbkaDydjegzIdyaDyd:megHIdyMaDyd:eegqIdyaDyd1egXIdyMMg8XaqIdwaXIdwMJbbbZNgANazIdUaHIdUMaqIdUaXIdUMMg8WMg8Sa8SMazIdaaHIdaMaqIdaaXIdaMMg8YaqIdzaXIdzMJbbbZNg8SNMa8SNazId8SaHId8SMaqId8SaXId8SMMgRa8SNazId80aHId80MaqId80aXId80MMg8UMg8Sa8SMazId3aHId3MaqId3aXId3MMg8VaqIdxaXIdxMJbbbZNg8SNMa8SNazId8KaHId8KMaqId8KaXId8KMMg8Za8SNazId8WaHId8WMaqId8WaXId8WMMg80Mg8Sa8SMazIdKaHIdKMaqIdKaXIdKMMgyaANMaANazId88aHId88MaqId88aXId88MMg8PMMM:lgIa8RazIdCaHIdCMaqIdCaXIdCMMN9Ea8XazIdwaHIdwMJbbbZNgANa8WMg8Sa8SMa8YazIdzaHIdzMJbbbZNg8SNMa8SNaRa8SNa8UMg8Sa8SMa8VazIdxaHIdxMJbbbZNg8SNMa8SNa8Za8SNa80Mg8Sa8SMayaANMaANa8PMMM:laIJ;d;1UZN9DGhqxekaKa8Mfh8FcbhzcrhHindnaCaz4ceGTmba8FazceGfazce4ceGavfazcd4aPfar2fgqar2fRbbgXcFeSmbaQaEaqcdtfydbcotfaXcotfc9efRbbaH4ceGTmbcbhqxdkaHcufhHcehqazcefgzcw9hmbkkaCcC2aqcq2fgH8Ve;W:L:cjbgzTmbaHc;Y:L:cjbfhqaKa8MfhCabasc8K2fhHindnasae9pmbaHaQaEazcD4ceGavfazcq4ceGaPfar2fgXcdtfydbcotfaCazcw4ceGfaXar2fRbbcotfgXc9ifIdbamMUdbaHclfaXc9mfIdbaxMUdbaHcwfaXc9qfIdbakMUdbaHcxfamaQaEazcv4ceGavfazco4ceGaPfar2fgXcdtfydbcotfaCazcl4ceGfaXar2fRbbcotfgXc9ifIdbMUdbaHczfaxaXc9mfIdbMUdbaHcCfakaXc9qfIdbMUdbaHcKfamaQaEazce4ceGavfazcd4ceGaPfar2fgXcdtfydbcotfaCazceGfaXar2fRbbcotfgzc9ifIdbMUdbaHc3faxazc9mfIdbMUdbaHcafakazc9qfIdbMUdbkaHc8KfhHascefhsaq8Vebhzaqcdfhqazmbkka8Aa39hmbkkavcefgva39hmbkaPcefgPa39hmbkaDyd2gYTmekaYcdtaDcxffc98fhzinazydbcbyd;C:L:cjbH:bjjjbbazc98fhzaYcufgYmbkkaDcjif8Kjjjjbask;Kxmiue99due99euz99eui99eud99dud99oudnalTmbaocd4hkaqcdGhxarc99fhqarcethmawawMhPcbhsindndnawavaiascdtfgoclfydbak2cdtfgzIdwgHavaoydbak2cdtfgOIdwgA:tgCaCNazIdbgXaOIdbgQ:tgLaLNazIdlgKaOIdlgY:tg8Aa8ANMMgEavaocwfydbak2cdtfgoIdwg3aA:tg5a5NaoIdbg8EaQ:tg8Fa8FNaoIdlgaaY:tghahNMMggaEag9EEgEa3aH:tgHaHNa8EaX:tgHaHNaaaK:tgHaHNMMgHaEaH9EE:rNgHaHMgH:lJbbb9p9DTmbaH:Ohoxekcjjjj94hokdnaLahNa8Aa8FN:tgHaHNa8Aa5NaCahN:tgXaXNaCa8FNaLa5N:tgKaKNMMg3Jbbbb9BmbJbbjZhEdnaoceaoce9kEgoamaoam9iEg8Jcd9imbJbbjZa8J:Z:vhEkarcb9imbaAaDIdw:th8KaYaDIdl:th8LaQaDIdb:th8Ma8Jcba8Jcb9kEh8NdnadTmbaHJbbjZa3:rgA:vgQNg3aAa8Jcefa8Jcdf2:Y:vgANh8EaKaQNgKaANhyaXaQNgXaXaANNh8PcbhIina8Jcba8Jcb9kEcefh8RaEaI:ZNgQaCNa8KMhgaQa8ANa8LMh8SaQaLNa8MMhRcbhzindndnaPaEaz:ZNgQahNa8SMgYNgH:lJbbb9p9DTmbaH:OhOxekcjjjj94hOkaOce91goaqaoaq6Eh8UdndnaPaQa5NagMgHNga:lJbbb9p9DTmbaa:Oh8Vxekcjjjj94h8Vka8Ua8Vce91goaqaoaq6Eg8Wcefar2fcefgoar2h8XdndnaPaQa8FNaRMgQNga:lJbbb9p9DTmbaa:Oh8Yxekcjjjj94h8Ykadaeaocdtfydbcotfaba8Yce91goaqaoaq6Eg8Zfa8XfcefRbbcotfgocnfa8Ucqta8ZcCtVa8WVBdbaoc9efg8Ua8URbbcea8YceGaOcetcdGVa8VcdtclGVtV86bbaoc9ifgOaQaANaOIdbMUdbaoc9mfgOaYaANaOIdbMUdbaoc9qfgOaHaANaOIdbMUdbaoc9ufgOaAaOIdbMUdbdnaxTmbaoc9yfgOa8PaOIdbMUdbaoc9CfgOaKayNaOIdbMUdbaoc9GfgOa3a8ENaOIdbMUdbaoc9KfgOaXayNaOIdbMUdbaoc9OfgOaXa8ENaOIdbMUdbaoc2fgOaKa8ENaOIdbMUdbaoc9WfgOaXaAa3aHNaXaQNaKaYNMMgY:mNgQNaOIdbMUdbaoctfgOaKaQNaOIdbMUdbaoc94fgOa3aQNaOIdbMUdbaoc98fgoaoIdbaYaQN:tUdbka8Razcefgz9hmbka8Jcufh8JaIa8NShoaIcefhIaoTmbxdkkcbh8Vina8Jcba8Jcb9kEcefh8UaEa8V:ZNgAaCNa8KMhYaAa8ANa8LMhHaAaLNa8MMhXcbhoindndnaPaEao:ZNgAahNaHMNgQ:lJbbb9p9DTmbaQ:Ohzxekcjjjj94hzkazce91gzaqazaq6EhzdndnaPaAa5NaYMNgQ:lJbbb9p9DTmbaQ:OhOxekcjjjj94hOkazaOce91gOaqaOaq6Ecefar2fcefar2hzdndnaPaAa8FNaXMNgA:lJbbb9p9DTmbaA:OhOxekcjjjj94hOkabaOce91gOaqaOaq6Efazfcefce86bba8Uaocefgo9hmbka8Jcufh8Ja8Va8NShoa8Vcefh8VaoTmbkkascifgsal6mbkkk:Nvezu8Jjjjjbcjd9Rgb8Kjjjjbcbheabcbcjdz:xjjjbhdc:W:H:cjbhbinabRbbgicC2glabcqf8Veb87e;4:L:cjbalabcdfgv8Peb83e;W:L:cjbaiabcefRbb86b;W;n:cjbadaifce86bbalavabcxfceaetc:F:d;avGEgi8Peb83e;6:L:cjbalai8Vew87e:c:M:cjbabcQfhbaecefgecK9hmbkcbhoinc;Y:L:cjbhrcbhvindnadavfgwRbbce9hmbavcC2c;W:L:cjbfhDcbhbcehqavc;W;n:cjbfhkinabcitc:G:H:cjbfhlcbhbcbheinaeavab4ceGalabfRbbtVheabcefgbcw9hmbkdnadaecFeGgxfgmRbbmbaxcC2c;W:L:cjbfhPcbhbcehsindnaDabcq2gif8VebgbTmbaraifheaPaifhiinaialabcl4csGfRbbcltalabcw4csGfRbbcwtValabcsGfRbbV87ebaicdfhiae8VebhbaecdfheabmbkkcehbasceGhecbhsaembkamce86bbaxakRbb86b;W;n:cjbkcehbaqceGhlcbhqalmbkawcd86bbkarcCfhravcefgvcjd9hmbkaocefgoci9hmbkcbhic;W:L:cjbhvincuhlavhbinalcefhlab8Vebheabcdfhbaembkaial86b;W;p:cjbavcCfhvaicefgicjd9hmbkadcjdf8Kjjjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk;Bidqui998Jjjjjbc;Wb9Rgl8Kjjjjbalcxfcbc;Kbz:xjjjb8Aadcd4adfhvcehoinaogrcethoarav6mbkalcuarcdtgoarcFFFFi0Ecbyd;y:L:cjbHjjjjbbgvBdxavcFeaoz:xjjjbhwdnadTmbaicd4hDarcufhqcbhkindndnawcbaeakaD2cdtfgrydlgiaicjjjj94SEgocH4ao7c:F:b:DD2cbarydbgxaxcjjjj94SEgocH4ao7c;D;O:B8J27cbarydwgmamcjjjj94SEgrcH4ar7c:3F;N8N27aqGgvcdtfgrydbgocuSmbam::hPai::hsax::hzcehiinaihrdnaeaoaD2cdtfgiIdbaz9CmbaiIdlas9CmbaiIdwaP9BmikarcefhiawavarfaqGgvcdtfgrydbgocu9hmbkkarakBdbakhokabakcdtfaoBdbakcefgkad9hmbkkalydxcbyd;C:L:cjbH:bjjjbbalc;Wbf8Kjjjjbk9teiucbcbyd;G:L:cjbgeabcifc98GfgbBd;G:L:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;G:L:cjbgeabcrfc94GfgbBd;G:L:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;G:L:cjbge9Rcifc98GaefgbBd;G:L:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk6eiucbhidnadTmbdninabRbbglaeRbbgv9hmeaecefheabcefhbadcufgdmbxdkkalav9Rhikaikk;0vdbcj:Gdk;yvFFuuFFuuFFuuFFuFFFuFFFuFbbbbbbbbebbbdbbbbbbbebbbebbbdbbbbbbbbbbbeeeeeebebbeebbebbebbbeeebbbbebbbbbbbbbbbbbbbbbbbeeeeeeebebbbeeebbeebbbbbebbbbbebebbbbbbbbbbbbbbbdiorbelvlbodveribbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbibbbbbbbbbbbbbbbbbbbbbobbbbbbbbbbbbbbbbbbbbbrbaebbbbbbbbbbbbbbbbbbsd8We8YbbbbbbbhiaebbbbbbQe8Ke9cebbbbbbbbbbbbbbbbLb8KebbbbbbbbbbbbbbbbbbKbbbbbbbbbbbbbbbbbbbbbYeJbilbbbbbbbbbbbbbbbbEe80e8WlbbbbbbzlAbbbbbbb5eJdnibbbbbbai8Kbbbbbbb8Ee9ce8Ylcibbbb8Yebbbbbbbb8FdOlAdbbbbbb80e8Ylbbbbbb88eTi8KiJv8Jlbbbbbbbbbbbb89e9td8Kv9qibbbbndlvaibbbbZd8Li8KvbbbbbbJdTibbbbbb9Pe81b9GvoiBvbbbbbbbbbbbb9Re9JbvoWibbbbvibbbbbbbb9VeWi9Gvbbbbbb8WvBbbbbbbb9:b9ceBvbbbbbbbbbbbbbbbbubWibbbbbbbbbbbbbbbbbb;Wd9hvSrbbbbbbWl9NvbbbbbbFbbbbbbbbbbbbbbbbbbbbbFFuuFFuuFFuuFFuFFFuFFFuFbc;y:Ldkxebbbdbbb;W:Obb",c=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var b,f=WebAssembly.instantiate(e(d),{}).then(function(t){b=t.instance,b.exports.__wasm_call_ctors()});function e(t){for(var m=new Uint8Array(t.length),l=0;l<t.length;++l){var j=t.charCodeAt(l);m[l]=j>96?j-97:j>64?j-39:j+4}for(var k=0,l=0;l<t.length;++l)m[k++]=m[l]<60?c[m[l]]:(m[l]-60)*64+m[++l];return m.buffer.slice(0,k)}function a(t){if(!t)throw new Error("Assertion failed")}function h(t){return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}function n(t,m,l,j){var k=b.exports.sbrk,o=k(l*4),x=k(l*j*4),O=new Uint8Array(b.exports.memory.buffer);O.set(h(m),x),t(o,x,l,j*4),O=new Uint8Array(b.exports.memory.buffer);var z=new Uint32Array(l);return new Uint8Array(z.buffer).set(O.subarray(o,o+l*4)),k(o-k(0)),z}function g(t,m,l){var j=b.exports.sbrk,k=j(m.length*4),o=j(l*4),x=new Uint8Array(b.exports.memory.buffer),O=h(m);x.set(O,k);var z=t(o,k,m.length,l);x=new Uint8Array(b.exports.memory.buffer);var N=new Uint32Array(l);new Uint8Array(N.buffer).set(x.subarray(o,o+l*4)),j(k-j(0));for(var u=0;u<m.length;++u)m[u]=N[m[u]];return[N,z]}function r(t){for(var m=0,l=0;l<t.length;++l){var j=t[l];m=m<j?j:m}return m}function M(t,m,l,j,k,o,x,O,z){var N=b.exports.sbrk,u=N(4),B=N(l*4),H=N(k*o),U=N(l*4),E=new Uint8Array(b.exports.memory.buffer);E.set(h(j),H),E.set(h(m),U);var T=t(B,U,l,H,k,o,x,O,z,u);E=new Uint8Array(b.exports.memory.buffer);var G=new Uint32Array(T);h(G).set(E.subarray(B,B+T*4));var _=new Float32Array(1);return h(_).set(E.subarray(u,u+4)),N(u-N(0)),[G,_[0]]}function i(t,m,l,j,k,o,x,O,z,N,u,B,H){var U=b.exports.sbrk,E=U(4),T=U(l*4),G=U(k*o),_=U(k*O),X=U(z.length*4),Oa=U(l*4),ba=N?U(k):0,ta=new Uint8Array(b.exports.memory.buffer);ta.set(h(j),G),ta.set(h(x),_),ta.set(h(z),X),ta.set(h(m),Oa),N&&ta.set(h(N),ba);var ha=t(T,Oa,l,G,k,o,_,O,X,z.length,ba,u,B,H,E);ta=new Uint8Array(b.exports.memory.buffer);var s=new Uint32Array(ha);h(s).set(ta.subarray(T,T+ha*4));var C=new Float32Array(1);return h(C).set(ta.subarray(E,E+4)),U(E-U(0)),[s,C[0]]}function y(t,m,l,j,k,o,x,O,z,N,u,B,H){var U=b.exports.sbrk,E=U(4),T=U(k*o),G=U(k*O),_=U(z.length*4),X=U(l*4),Oa=N?U(k):0,ba=new Uint8Array(b.exports.memory.buffer);ba.set(h(j),T),ba.set(h(x),G),ba.set(h(z),_),ba.set(h(m),X),N&&ba.set(h(N),Oa);var ta=t(X,l,T,k,o,G,O,_,z.length,Oa,u,B,H,E);ba=new Uint8Array(b.exports.memory.buffer),h(m).set(ba.subarray(X,X+ta*4)),h(j).set(ba.subarray(T,T+k*o)),h(x).set(ba.subarray(G,G+k*O));var ha=new Float32Array(1);return h(ha).set(ba.subarray(E,E+4)),U(E-U(0)),[ta,ha[0]]}function I(t,m,l,j){var k=b.exports.sbrk,o=k(l*j),x=new Uint8Array(b.exports.memory.buffer);x.set(h(m),o);var O=t(o,l,j);return k(o-k(0)),O}function A(t,m,l,j,k,o,x,O){var z=b.exports.sbrk,N=z(O*4),u=z(l*j),B=k?z(l*o):0,H=new Uint8Array(b.exports.memory.buffer);H.set(h(m),u),k&&H.set(h(k),B);var U=t(N,u,l,j,B,o,x,O);H=new Uint8Array(b.exports.memory.buffer);var E=new Uint32Array(U);return h(E).set(H.subarray(N,N+U*4)),z(N-z(0)),E}function w(t,m,l,j,k,o,x,O,z){var N=b.exports.sbrk,u=N(4),B=N(l*4),H=N(k*o),U=N(l*4),E=x?N(k):0,T=new Uint8Array(b.exports.memory.buffer);T.set(h(j),H),T.set(h(m),U),x&&T.set(h(x),E);var G=t(B,U,l,H,k,o,E,O,z,u);T=new Uint8Array(b.exports.memory.buffer);var _=new Uint32Array(G);h(_).set(T.subarray(B,B+G*4));var X=new Float32Array(1);return h(X).set(T.subarray(u,u+4)),N(u-N(0)),[_,X[0]]}function R(t,m,l,j,k,o,x){var O=b.exports.sbrk,z=O(l*4),N=O(k*o),u=O(l*4),B=new Uint8Array(b.exports.memory.buffer);B.set(h(j),N),B.set(h(m),u);var H=t(z,u,l,N,k,o,x);B=new Uint8Array(b.exports.memory.buffer);var U=new Uint32Array(H);return h(U).set(B.subarray(z,z+H*4)),O(z-O(0)),U}function Y(t,m,l,j,k,o){var x=b.exports.sbrk,O=x(l.byteLength),z=x(m.byteLength),N=new Uint8Array(b.exports.memory.buffer);N.set(h(l),O),N.set(h(m),z);var u=l.byteLength/j,B=t(0,0,z,m.length,O,u,j,k,o),H=x(B*9*4),U=t(H,B,z,m.length,O,u,j,k,o);a(U<=B),N=new Uint8Array(b.exports.memory.buffer);var E=new Float32Array(U*9);return h(E).set(N.subarray(H,H+E.byteLength)),x(O-x(0)),E}var S={LockBorder:1,Sparse:2,ErrorAbsolute:4,Prune:8,Regularize:16,Permissive:32,RegularizeLight:64,PreserveFolds:128,ErrorClamped:256,_InternalDebug:1<<30},q={Shell:1,Solve:2,Thicken:0,_InternalDebug:1<<30};return{ready:f,supported:!0,compactMesh:function(t){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0);var m=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),l=g(b.exports.meshopt_optimizeVertexFetchRemap,m,r(t)+1);if(t!==m)for(var j=0;j<m.length;++j)t[j]=m[j];return l},generatePositionRemap:function(t,m){return a(t instanceof Float32Array),a(t.length%m==0),a(m>=3),n(b.exports.meshopt_generatePositionRemap,t,t.length/m,m)},simplify:function(t,m,l,j,k,o){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j>=0&&j<=t.length),a(j%3==0),a(k>=0);for(var x=0,O=0;O<(o?o.length:0);++O)a(o[O]in S),x|=S[o[O]];var z=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),N=M(b.exports.meshopt_simplify,z,t.length,m,m.length/l,l*4,j,k,x);return N[0]=t instanceof Uint32Array?N[0]:new t.constructor(N[0]),N},simplifyWithAttributes:function(t,m,l,j,k,o,x,O,z,N){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j instanceof Float32Array),a(j.length==k*(m.length/l)),a(k>=0),a(x==null||x instanceof Uint8Array),a(x==null||x.length==m.length/l),a(O>=0&&O<=t.length),a(O%3==0),a(z>=0),a(Array.isArray(o)),a(k>=o.length),a(o.length<=32);for(var u=0;u<o.length;++u)a(o[u]>=0);for(var B=0,u=0;u<(N?N.length:0);++u)a(N[u]in S),B|=S[N[u]];var H=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),U=i(b.exports.meshopt_simplifyWithAttributes,H,t.length,m,m.length/l,l*4,j,k*4,new Float32Array(o),x,O,z,B);return U[0]=t instanceof Uint32Array?U[0]:new t.constructor(U[0]),U},simplifyWithUpdate:function(t,m,l,j,k,o,x,O,z,N){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j instanceof Float32Array),a(j.length==k*(m.length/l)),a(k>=0),a(x==null||x instanceof Uint8Array),a(x==null||x.length==m.length/l),a(O>=0&&O<=t.length),a(O%3==0),a(z>=0),a(Array.isArray(o)),a(k>=o.length),a(o.length<=32);for(var u=0;u<o.length;++u)a(o[u]>=0);for(var B=0,u=0;u<(N?N.length:0);++u)a(N[u]in S),B|=S[N[u]];var H=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),U=y(b.exports.meshopt_simplifyWithUpdate,H,t.length,m,m.length/l,l*4,j,k*4,new Float32Array(o),x,O,z,B);if(t!==H)for(var u=0;u<U[0];++u)t[u]=H[u];return U},getScale:function(t,m){return a(t instanceof Float32Array),a(t.length%m==0),a(m>=3),I(b.exports.meshopt_simplifyScale,t,t.length/m,m*4)},simplifyPoints:function(t,m,l,j,k,o){return a(t instanceof Float32Array),a(t.length%m==0),a(m>=3),a(l>=0&&l<=t.length/m),j?(a(j instanceof Float32Array),a(j.length%k==0),a(k>=3),a(t.length/m==j.length/k),A(b.exports.meshopt_simplifyPoints,t,t.length/m,m*4,j,k*4,o||0,l)):A(b.exports.meshopt_simplifyPoints,t,t.length/m,m*4,void 0,0,0,l)},simplifySloppy:function(t,m,l,j,k,o){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j==null||j instanceof Uint8Array),a(j==null||j.length==m.length/l),a(k>=0&&k<=t.length),a(k%3==0),a(o>=0);var x=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),O=w(b.exports.meshopt_simplifySloppy,x,t.length,m,m.length/l,l*4,j,k,o);return O[0]=t instanceof Uint32Array?O[0]:new t.constructor(O[0]),O},simplifyPrune:function(t,m,l,j){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j>=0);var k=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t),o=R(b.exports.meshopt_simplifyPrune,k,t.length,m,m.length/l,l*4,j);return o=t instanceof Uint32Array?o:new t.constructor(o),o},remesh:function(t,m,l,j,k){a(t instanceof Uint32Array||t instanceof Int32Array||t instanceof Uint16Array||t instanceof Int16Array),a(t.length%3==0),a(m instanceof Float32Array),a(m.length%l==0),a(l>=3),a(j>=4&&j<=256);for(var o=0,x=0;x<(k?k.length:0);++x)a(k[x]in q),o|=q[k[x]];var O=t.BYTES_PER_ELEMENT==4?t:new Uint32Array(t);return Y(b.exports.meshopt_remesh,O,m,l*4,j,o)}}})();var wb=cb.ready;function xb(d,c){let{pos:b,nor:f,aux:e}=d,a=b.length/3;if(d.index.length<300)return d;let[h]=cb.simplify(d.index,b,3,0,c,["LockBorder","ErrorAbsolute"]),n=new Int32Array(a).fill(-1),g=0;for(let I=0;I<h.length;I++)n[h[I]]<0&&(n[h[I]]=g++);let r=new Float32Array(g*3),M=new Int8Array(g*3),i=new Uint8Array(g*4);for(let I=0;I<a;I++){let A=n[I];A<0||(r[A*3]=b[I*3],r[A*3+1]=b[I*3+1],r[A*3+2]=b[I*3+2],M[A*3]=f[I*3],M[A*3+1]=f[I*3+1],M[A*3+2]=f[I*3+2],i[A*4]=e[I*4],i[A*4+1]=e[I*4+1],i[A*4+2]=e[I*4+2],i[A*4+3]=e[I*4+3])}let y=new Uint32Array(h.length);for(let I=0;I<h.length;I++)y[I]=n[h[I]];return{...d,pos:r,nor:M,aux:i,index:y,trisBefore:d.index.length/3}}var La=[0,0,0,0];self.onmessage=async d=>{let{id:c,task:b}=d.data;try{let f=performance.now(),e,a=[];if(b.type==="heights"){let{xs:h,zs:n,j0:g,j1:r}=b,M=h.length,i=new Float32Array((r-g)*M);for(let y=g;y<r;y++){let I=n[y],A=(y-g)*M;for(let w=0;w<M;w++)i[A+w]=Sa(h[w],I)}e={h:i,j0:g,j1:r},a=[i.buffer]}else if(b.type==="maps"){let{x0:h,z0:n,dx:g,nx:r,j0:M,j1:i}=b,y=new Float32Array((i-M)*r),I=new Uint8Array((i-M)*r*4);for(let A=M;A<i;A++){let w=n+A*g;for(let R=0;R<r;R++){let Y=h+R*g,S=(A-M)*r+R;y[S]=Sa(Y,w),mb(Y,w,La),I[S*4]=Math.round(La[0]*255),I[S*4+1]=Math.round(La[1]*255),I[S*4+2]=Math.round(La[2]*255),I[S*4+3]=Math.round(La[3]*255)}}e={h:y,m:I,j0:M,j1:i},a=[y.buffer,I.buffer]}else if(b.type==="sdf"){let h=sb[b.name],n={...h,cell:h.cell[b.quality]||h.cell.high},g=Ob(n,b.ix0,b.ix1);b.simplify>0&&(await wb,g=xb(g,b.simplify)),e=g,a=[g.pos.buffer,g.nor.buffer,g.aux.buffer,g.index.buffer]}e.ms=performance.now()-f,self.postMessage({id:c,result:e},a)}catch(f){self.postMessage({id:c,error:f.message+`\n`+f.stack})}};})();\n';function bg(a=Math.max(2,Math.min(12,(navigator.hardwareConcurrency||4)-1))){let e=URL.createObjectURL(new Blob([gg],{type:"text/javascript"})),t=[],n=new Map,i=0;for(let s=0;s<a;s++){let r=new Worker(e);r.busy=0,r.onmessage=o=>{let{id:c,result:l,error:h}=o.data,d=n.get(c);n.delete(c),r.busy--,h?d.reject(new Error(h)):d.resolve(l)},r.onerror=o=>console.error("[scene] worker error",o.message),t.push(r)}return{size:a,run(s,r=[]){return new Promise((o,c)=>{let l=++i;n.set(l,{resolve:o,reject:c});let h=t[0];for(let d of t)d.busy<h.busy&&(h=d);h.busy++,h.postMessage({id:l,task:s},r)})},dispose(){t.forEach(s=>s.terminate()),URL.revokeObjectURL(e)}}}function Wt(a){let e=a>>>0;return function(){e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Wn=new Uint8Array(512),Da=new Uint8Array(512);(function(){let e=Wt(20261107),t=new Uint8Array(256);for(let n=0;n<256;n++)t[n]=n;for(let n=255;n>0;n--){let i=Math.floor(e()*(n+1)),s=t[n];t[n]=t[i],t[i]=s}for(let n=0;n<512;n++)Wn[n]=t[n&255],Da[n]=Wn[n]%12})();var tn=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),e1=.5*(Math.sqrt(3)-1),dc=(3-Math.sqrt(3))/6,t1=1/3,ki=1/6;function Lt(a,e){let t=(a+e)*e1,n=Math.floor(a+t),i=Math.floor(e+t),s=(n+i)*dc,r=a-(n-s),o=e-(i-s),c,l;r>o?(c=1,l=0):(c=0,l=1);let h=r-c+dc,d=o-l+dc,f=r-1+2*dc,p=o-1+2*dc,m=n&255,x=i&255,b=0,g=.5-r*r-o*o;if(g>0){let v=Da[m+Wn[x]]*3;g*=g,b+=g*g*(tn[v]*r+tn[v+1]*o)}let y=.5-h*h-d*d;if(y>0){let v=Da[m+c+Wn[x+l]]*3;y*=y,b+=y*y*(tn[v]*h+tn[v+1]*d)}let _=.5-f*f-p*p;if(_>0){let v=Da[m+1+Wn[x+1]]*3;_*=_,b+=_*_*(tn[v]*f+tn[v+1]*p)}return 70*b}function Tr(a,e,t){let n=(a+e+t)*t1,i=Math.floor(a+n),s=Math.floor(e+n),r=Math.floor(t+n),o=(i+s+r)*ki,c=a-(i-o),l=e-(s-o),h=t-(r-o),d,f,p,m,x,b;c>=l?l>=h?(d=1,f=0,p=0,m=1,x=1,b=0):c>=h?(d=1,f=0,p=0,m=1,x=0,b=1):(d=0,f=0,p=1,m=1,x=0,b=1):l<h?(d=0,f=0,p=1,m=0,x=1,b=1):c<h?(d=0,f=1,p=0,m=0,x=1,b=1):(d=0,f=1,p=0,m=1,x=1,b=0);let g=c-d+ki,y=l-f+ki,_=h-p+ki,v=c-m+2*ki,u=l-x+2*ki,w=h-b+2*ki,M=c-1+3*ki,S=l-1+3*ki,R=h-1+3*ki,T=i&255,N=s&255,U=r&255,O=0,C=.6-c*c-l*l-h*h;if(C>0){let z=Da[T+Wn[N+Wn[U]]]*3;C*=C,O+=C*C*(tn[z]*c+tn[z+1]*l+tn[z+2]*h)}let B=.6-g*g-y*y-_*_;if(B>0){let z=Da[T+d+Wn[N+f+Wn[U+p]]]*3;B*=B,O+=B*B*(tn[z]*g+tn[z+1]*y+tn[z+2]*_)}let H=.6-v*v-u*u-w*w;if(H>0){let z=Da[T+m+Wn[N+x+Wn[U+b]]]*3;H*=H,O+=H*H*(tn[z]*v+tn[z+1]*u+tn[z+2]*w)}let j=.6-M*M-S*S-R*R;if(j>0){let z=Da[T+1+Wn[N+1+Wn[U+1]]]*3;j*=j,O+=j*j*(tn[z]*M+tn[z+1]*S+tn[z+2]*R)}return 32*O}function Hh(a,e,t=5,n=2.03,i=.5){let s=0,r=1,o=0;for(let c=0;c<t;c++){s+=r*Lt(a,e),o+=r;let l=a*.8-e*.6,h=a*.6+e*.8;a=l*n+13.7,e=h*n+7.1,r*=i}return s/o}function xg(a,e,t=6,n=2,i=.5){let s=0,r=1,o=1,c=0;for(let l=0;l<t;l++){let h=1-Math.abs(Lt(a,e));h*=h,h*=o,o=Math.min(1,Math.max(0,h*1.6)),s+=r*h,c+=r;let d=a*.8-e*.6,f=a*.6+e*.8;a=d*n+3.1,e=f*n+17.9,r*=i}return s/c}function Gh(a,e,t,n=4,i=2.07,s=.5){let r=0,o=1,c=0;for(let l=0;l<n;l++)r+=o*Tr(a,e,t),c+=o,a=a*i+5.3,e=e*i+11.7,t=t*i+2.9,o*=s;return r/c}var ys=(a,e,t)=>a<e?e:a>t?t:a;function gt(a,e,t){let n=ys((t-a)/(e-a),0,1);return n*n*(3-2*n)}var ei=(a,e,t)=>a+(e-a)*t;function nn(a,e,t){let n=ys(.5+.5*(e-a)/t,0,1);return e+(a-e)*n-t*n*(1-n)}function xn(a,e,t){return-nn(-a,-e,t)}var Fn=Mr(_r(Nh,3)),ti=Mr(_r(ng,6)),fc=Mr(_r(ig,3));var yi=[0,0,0,0];function Vh(a,e){let t=1.3*Hh(a/170,e/170,3)+.55*Lt(a/37,e/41);t+=78*gt(-730,-1060,e)*(.85+.15*Lt(a/90,3.1));let n=a+26*Math.sin(e/112)+14*Lt(e/61,1.7);t+=64*gt(-148,-285,n)*(.8+.2*Lt(a/70,e/70));let i=a-34*Math.sin(e/150+1.3);t+=150*gt(172,480,i)*(.72+.28*Hh(a/240,e/240,3));let s=(a+8)/94,r=(e-58)/64;t+=41.5*Math.exp(-(s*s+r*r));let o=(e-82)/64;t+=36*Math.exp(-o*o)*gt(0,-190,a),t+=3*Hh(a/28,e/28,3)*Math.exp(-(s*s+r*r)*.5);let c=Math.max(0,Math.abs(a-30)-420),l=Math.max(0,-e-1220),h=Math.max(0,e-320),d=Math.hypot(c,l+h*.7);if(d>0){let f=gt(0,1500,d);t+=f*(150+640*xg(a/1300+7.3,e/1300-2.1,7))+f*f*160}return t}function vg(a,e){let t=1.7+.168*(-a-8)+.064*(-e-150);return t+=5.5*Lt(a/96+3.1,e/96)+1.4*Lt(a/37,e/33),Math.max(t,.9)}function n1(a,e){let t=(a-$n.x)/$n.rx,n=(e-$n.z)/$n.rz,i=Math.hypot(t,n)+.12*Lt(a/52,e/52);return gt(1,.84,i)}function i1(a,e){let n=vg(a,e)/$n.step,i=Math.floor(n),s=n-i,r=$n.step*(i+gt(.86,1,s));return r+=.24*gt(0,.025,s)*(1-gt(.035,.075,s)),r}function a1(a,e){let t=(a+112)/168,n=(e+236)/186;return gt(1.25,.9,Math.hypot(t,n)+.1*Lt(a/70,e/70))}function yg(a,e){let t=Vh(a,e),n=a1(a,e);n>0&&(t=ei(t,Math.max(t,vg(a,e)-.6),n));let i=n1(a,e);i>0&&(t=ei(t,i1(a,e),i));let s=Math.hypot(a-Rn.x,e-Rn.z);s<Rn.r+22&&(t=ei(t,Rn.y,gt(Rn.r+22,Rn.r,s)));let r=Math.hypot((a-kn.x)*.9,e-kn.z);r<kn.r+30&&(t=ei(t,kn.y+.35*Lt(a/13,e/13),gt(kn.r+30,kn.r-12,r)));let o=Math.hypot(a-bn.x,e-bn.z);if(o<bn.r+6&&(t=Math.min(t,ei(bn.level-1.6,t,gt(bn.r-5,bn.r+6,o)))),a>ti.minX-90&&a<ti.maxX+90&&e>ti.minZ-90&&e<ti.maxZ+90){ti.closest(a,e,yi);let c=yi[0],l=yi[1]/ti.length,h=ei(Di[0],Di[1],l),d=Ph+14*gt(.08,0,l)+1.5*Lt(yi[1]/30,.5),f=h+Math.max(0,c-d)*(2.5+.6*Lt(yi[1]/40,c/20))+1.2*Lt(a/9,e/9)*gt(d,d+6,c);t=Math.min(t,f)}if(a>fc.minX-6&&a<fc.maxX+6&&e>fc.minZ-6&&e<fc.maxZ+6){fc.closest(a,e,yi);let c=yi[0];c<2.4&&(t-=.6*(1-gt(.7,2.2,c)))}return t}var uc=2,Rr=(()=>{let a=Math.ceil(Fn.length/uc)+1,e=new Float32Array(a),t=new Uint8Array(a);for(let s=0;s<a;s++){let r=Fn.at(s*uc);e[s]=yg(r.x,r.z),Math.abs(r.z-Ct.z)<4&&r.x>Ct.x-Ct.span/2-6&&r.x<Ct.x+Ct.span/2+6&&(t[s]=1)}for(let s=0;s<a;s++){let r=Fn.at(s*uc),o=Math.abs(r.x-Ct.x)-Ct.span/2;Math.abs(r.z-Ct.z)<30&&o<18&&(e[s]=ei(e[s],Ct.y-.15,gt(18,4,o)))}let n=new Float32Array(a),i=4;for(let s=0;s<a;s++){let r=0,o=0;for(let c=-i;c<=i;c++){let l=Math.max(0,Math.min(a-1,s+c)),h=i+1-Math.abs(c);r+=e[l]*h,o+=h}n[s]=r/o}return{h:n,onBridge:t}})();function s1(a){let e=a/uc,t=Math.floor(e),n=e-t,i=Rr.h[Math.min(t,Rr.h.length-1)],s=Rr.h[Math.min(t+1,Rr.h.length-1)];return i+(s-i)*n}function jh(a,e){let t=yg(a,e);if(a>Fn.minX-6&&a<Fn.maxX+6&&e>Fn.minZ-6&&e<Fn.maxZ+6){Fn.closest(a,e,yi);let n=yi[0];if(n<3.4){let i=Math.round(yi[1]/uc);Rr.onBridge[Math.min(i,Rr.onBridge.length-1)]||(t=ei(t,s1(yi[1])-.1,gt(3.4,1.7,n)))}}return t}function Mg(a,e,t,n,i){let s=[];for(let h=a;h<=e+1e-6;h+=t)s.push(h);let r=[],o=[],c=t,l=a;for(;l>-n;)c*=i,l-=c,r.push(l);for(c=t,l=s[s.length-1];l<n;)c*=i,l+=c,o.push(l);return Float32Array.from([...r.reverse(),...s,...o])}var ni={x0:-480,z0:-1100,w:1024,d:1280};async function _g(a,e,t,n){let i=performance.now(),s=Mg(-340,380,e.terrainStep,7200,1.04),r=Mg(-1e3,150,e.terrainStep,7200,1.04),o=s.length,c=r.length,l=new Float32Array(o*c),h=Math.ceil(c/(a.size*3)),d=[];for(let z=0;z<c;z+=h){let q=Math.min(c,z+h);d.push(a.run({type:"heights",xs:s,zs:r,j0:z,j1:q}).then(Y=>l.set(Y.h,Y.j0*o)))}let f=e.mapStep,p=Math.round(ni.w/f),m=Math.round(ni.d/f),x=new Float32Array(p*m),b=new Uint8Array(p*m*4),g=Math.ceil(m/(a.size*3));for(let z=0;z<m;z+=g){let q=Math.min(m,z+g);d.push(a.run({type:"maps",x0:ni.x0,z0:ni.z0,dx:f,nx:p,j0:z,j1:q}).then(Y=>{x.set(Y.h,Y.j0*p),b.set(Y.m,Y.j0*p*4)}))}await Promise.all(d);let y=performance.now(),_=new Float32Array(o*c*3),v=new Int8Array(o*c*3);for(let z=0;z<c;z++)for(let q=0;q<o;q++){let Y=z*o+q;_[Y*3]=s[q],_[Y*3+1]=l[Y],_[Y*3+2]=r[z];let ee=Math.max(0,q-1),me=Math.min(o-1,q+1),_e=Math.max(0,z-1),ie=Math.min(c-1,z+1),be=(l[z*o+me]-l[z*o+ee])/(s[me]-s[ee]),Pe=(l[ie*o+q]-l[_e*o+q])/(r[ie]-r[_e]),Fe=Math.hypot(be,1,Pe);v[Y*3]=Math.round(-be/Fe*127),v[Y*3+1]=Math.round(1/Fe*127),v[Y*3+2]=Math.round(-Pe/Fe*127)}let u=new Uint32Array((o-1)*(c-1)*6),w=0;for(let z=0;z<c-1;z++)for(let q=0;q<o-1;q++){let Y=z*o+q,ee=Y+1,me=Y+o,_e=me+1;Math.abs(l[Y]-l[_e])<Math.abs(l[ee]-l[me])?(u[w++]=Y,u[w++]=me,u[w++]=_e,u[w++]=Y,u[w++]=_e,u[w++]=ee):(u[w++]=Y,u[w++]=me,u[w++]=ee,u[w++]=ee,u[w++]=me,u[w++]=_e)}let M=new rt;M.setAttribute("position",new st(_,3)),M.setAttribute("normal",new st(v,3,!0)),M.setIndex(new st(u,1)),M.computeBoundingSphere();let S=new Uint8Array(p*m*4);for(let z=0;z<m;z++)for(let q=0;q<p;q++){let Y=z*p+q,ee=x[z*p+Math.max(0,q-1)],me=x[z*p+Math.min(p-1,q+1)],_e=x[Math.max(0,z-1)*p+q],ie=x[Math.min(m-1,z+1)*p+q],be=(me-ee)/(2*f),Pe=(ie-_e)/(2*f),Fe=Math.hypot(be,1,Pe);S[Y*4]=Math.round((-be/Fe*.5+.5)*255),S[Y*4+1]=Math.round((-Pe/Fe*.5+.5)*255),S[Y*4+2]=Math.round(1/Fe*255),S[Y*4+3]=255}let R=(z,q,Y)=>{let ee=new ui(z,p,m,q,Y);return ee.magFilter=St,ee.minFilter=Yt,ee.generateMipmaps=!0,ee.anisotropy=8,ee.needsUpdate=!0,ee},T=R(b,Tn,ln),N=R(S,Tn,ln),U=new ui(x,p,m,mr,zt);U.magFilter=U.minFilter=kt,U.needsUpdate=!0;let O={mask:T,normal:N,height:U,x0:ni.x0,z0:ni.z0,w:ni.w,d:ni.d,nx:p,nz:m,step:f,heights:x,masks:b},C=mg(t,O,{time:n}),B=new nt(M,C);B.name="terrain",B.receiveShadow=!0,B.castShadow=e.terrainShadow,B.frustumCulled=!1;function H(z,q){let Y=(z-ni.x0)/f,ee=(q-ni.z0)/f;if(Y>=0&&ee>=0&&Y<p-1&&ee<m-1){let me=Math.floor(Y),_e=Math.floor(ee),ie=Y-me,be=ee-_e,Pe=_e*p+me;return(x[Pe]*(1-ie)+x[Pe+1]*ie)*(1-be)+(x[Pe+p]*(1-ie)+x[Pe+p+1]*ie)*be}return jh(z,q)}function j(z,q,Y){let ee=Math.round((z-ni.x0)/f),me=Math.round((q-ni.z0)/f);return ee<0||me<0||ee>=p||me>=m?0:b[(me*p+ee)*4+Y]/255}return console.log(`[scene] terrain ${o}x${c} (${(o*c/1e6).toFixed(2)}M verts), heights+maps ${(y-i).toFixed(0)} ms, total ${(performance.now()-i).toFixed(0)} ms`),{mesh:B,maps:O,heightAt:H,maskAt:j,material:C}}var Wh=(function(){var a="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;X8:kdbk:kYi5ud9:du8Jjjjjbcjq9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCaAcethXaxaDfhiaOaeaoaeao6E9RhQalcl4cifcd4hLazcjdfaAfhKcbhYabaOad2fg8AhEaHh3incbh5dnawTmbaxaYcd4fRbbh5kcbh8Eazcjdfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcjdfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcjdfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaL6mva8FaLfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasaYcd4fRbbgociGPlbedrbkaATmdazaYfh8Fazcjdfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeazaYfhaazcjdfhhcbhoceh8EaKh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaQaocefgofmbka8FaXfh8FcdhoaacdfhaahaXfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8EazaYfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaKhainazcjdfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3aYclfgYad6mbkaza8AaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcjqf8Kjjjjbaok:bsesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:I9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:SBlEud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fgOavcjdfasaeaH9RaHasfae6EgAaAcsfgoc9WGgCSEhXaPaDfhQaocl4cifcd4hLavcj;cbfaCcetfhKavcj;cbfaCci2fhYavcj;cbfaCfh8AcbhEaoc;ab6h3incbh5dnawTmbaPaEcd4fRbbh5kcbh8Eavcj;cbfh8Findndndndna5a8Ecet4ciGgoc9:fPdebdkaxaQ9RaC6mwdnaCTmbavcj;cbfa8EaC2faQaC;8qbbkaQaAfhQxdkaCTmeavcj;cbfa8EaC2fcbaC;8kbxekaxaQ9RaL6moaoclVcbawEhraQaLfhocbhidna3mbaxao9Rc;Gb6mbcbhlina8FalfhidndndndndndnaQalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiczfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaicafaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaC0meaihlaxao9Rc;Fb0mbkkdnaiaC9pmbaici4hlinaxao9RcK6mwa8FaifhqdndndndndndnaQaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaoclffa8JRb:q:W:cjbfhoxikaqaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaocwffa8JRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbagaocdffa8JRb:q:W:cjbfhokalcdfhlaiczfgiaC6mbkkaohQaoTmoka8FaCfh8Fa8Ecefg8Ecl9hmbkdndndndnawTmbazaEcd4fRbbglciGPlbedwbkaCTmdaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep9Taapxeeeeeeeeeeeeeeeeghp9op9Hp9rgaa8Kp9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ughp9Abbbaladfglahaaaapmlvorlvorlvorlvorp9Ughp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp9Ughp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9AbbbaladfhlaoczfgoaC6mbxikkaCTmeaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep:neaapxebebebebebebebebghp9op:bep9rgaa8Kp:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeghp9Abbbaladfglahaaaapmlvorlvorlvorlvorp:oeghp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp:oeghp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9AbbbaladfhlaoczfgoaC6mbxdkkaCTmbaXaEfhrcbhocbalcl4gl9Rc8FGhiavaEfpbdbhhinaravcj;cbfaofpblbg8Ka8Aaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaKaofpblbg8NaYaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgaahp9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ma8PpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9AbbbaradfhraoczfgoaC6mbkkaEclfgEad6mbkdnaXavcjdf9hmbaAad2goTmbaOavcjdfao;8qbbkdnammbavaXaAcufad2fad;8qbbkaAaHfhHc9:hoaQhPaQmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkpPesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(a),s,r=WebAssembly.instantiate(i,{}).then(function(g){s=g.instance,s.exports.__wasm_call_ctors()});function o(g){for(var y=new Uint8Array(g.length),_=0;_<g.length;++_){var v=g.charCodeAt(_);y[_]=v>96?v-97:v>64?v-39:v+4}for(var u=0,_=0;_<g.length;++_)y[u++]=y[_]<60?n[y[_]]:(y[_]-60)*64+y[++_];return y.buffer.slice(0,u)}function c(g,y,_,v,u,w,M){var S=g.exports.sbrk,R=v+3&-4,T=S(R*u),N=S(w.length),U=new Uint8Array(g.exports.memory.buffer);U.set(w,N);var O=y(T,v,u,N,w.length);if(O==0&&M&&M(T,R,u),_.set(U.subarray(T,T+v*u)),S(T-S(0)),O!=0)throw new Error("Malformed buffer data: "+O)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function p(g){var y={object:new Worker(g),pending:0,requests:{}};return y.object.onmessage=function(_){var v=_.data;y.pending-=v.count,y.requests[v.id][v.action](v.value),delete y.requests[v.id]},y}function m(g){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+b.name+";"+c.toString()+b.toString(),_=new Blob([y],{type:"text/javascript"}),v=URL.createObjectURL(_),u=d.length;u<g;++u)d[u]=p(v);for(var u=g;u<d.length;++u)d[u].object.postMessage({});d.length=g,URL.revokeObjectURL(v)}function x(g,y,_,v,u){for(var w=d[0],M=1;M<d.length;++M)d[M].pending<w.pending&&(w=d[M]);return new Promise(function(S,R){var T=new Uint8Array(_),N=++f;w.pending+=g,w.requests[N]={resolve:S,reject:R},w.object.postMessage({id:N,count:g,size:y,source:T,mode:v,filter:u},[T.buffer])})}function b(g){var y=g.data;self.ready.then(function(_){if(!y.id)return self.close();try{var v=new Uint8Array(y.count*y.size);c(_,_.exports[y.mode],v,y.count,y.size,y.source,_.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:v},[v.buffer])}catch(u){self.postMessage({id:y.id,count:y.count,action:"reject",value:u})}})}return{ready:r,supported:!0,useWorkers:function(g){m(g)},decodeVertexBuffer:function(g,y,_,v,u){c(s,s.exports.meshopt_decodeVertexBuffer,g,y,_,v,s.exports[l[u]])},decodeIndexBuffer:function(g,y,_,v){c(s,s.exports.meshopt_decodeIndexBuffer,g,y,_,v)},decodeIndexSequence:function(g,y,_,v){c(s,s.exports.meshopt_decodeIndexSequence,g,y,_,v)},decodeGltfBuffer:function(g,y,_,v,u,w){c(s,s.exports[h[u]],g,y,_,v,s.exports[l[w]])},decodeGltfBufferAsync:function(g,y,_,v,u){return d.length>0?x(g,y,_,h[v],l[u]):r.then(function(){var w=new Uint8Array(g*y);return c(s,s.exports[h[v]],w,g,y,_,s.exports[l[u]]),w})}}})();async function Sg(a,e,t){let n=performance.now(),i=a.rock==="low"?"rocks_low.bin":"rocks_high.bin",s=await fetch(vi(i));if(!s.ok)throw new Error(`${i}: HTTP ${s.status}`);let r=+s.headers.get("content-length")||0,o;if(s.body&&r&&t){let g=s.body.getReader(),y=[],_=0;for(;;){let{done:u,value:w}=await g.read();if(u)break;y.push(w),_+=w.length,t(_/r)}o=new Uint8Array(_);let v=0;for(let u of y)o.set(u,v),v+=u.length}else o=new Uint8Array(await s.arrayBuffer());let c=performance.now();if(await Wh.ready,String.fromCharCode(o[0],o[1],o[2],o[3])!=="RKS1")throw new Error(i+": bad magic");let h=new DataView(o.buffer).getUint32(4,!0),d=JSON.parse(new TextDecoder().decode(o.subarray(8,8+h))),f=8+h,p=pg(e),m=new It;m.name="rocks";let x={},b=0;for(let g of d.volumes){let y=o.subarray(f+g.offset,f+g.offset+g.vLen),_=o.subarray(f+g.offset+g.vLen,f+g.offset+g.vLen+g.iLen),v=new Uint8Array(g.verts*16);Wh.decodeVertexBuffer(v,g.verts,16,y);let u=new Uint32Array(g.tris*3);Wh.decodeIndexBuffer(new Uint8Array(u.buffer),u.length,4,_);let w=new Uint16Array(v.buffer),M=new Int8Array(v.buffer),S=new Float32Array(g.verts*3),R=new Int8Array(g.verts*3),T=new Uint8Array(g.verts*4),[N,U,O]=g.bmin,C=g.step;for(let j=0;j<g.verts;j++)S[j*3]=N+w[j*8]*C,S[j*3+1]=U+w[j*8+1]*C,S[j*3+2]=O+w[j*8+2]*C,R[j*3]=M[j*16+8],R[j*3+1]=M[j*16+9],R[j*3+2]=M[j*16+10],T[j*4]=v[j*16+12],T[j*4+1]=v[j*16+13],T[j*4+2]=v[j*16+14],T[j*4+3]=v[j*16+15];let B=new rt;B.setAttribute("position",new st(S,3)),B.setAttribute("normal",new st(R,3,!0)),B.setAttribute("aux",new st(T,4,!0)),B.setIndex(new st(u,1)),B.computeBoundingSphere(),B.computeBoundingBox();let H=new nt(B,p);H.name="rock-"+g.name,H.castShadow=g.name!=="far",H.receiveShadow=!0,m.add(H),x[g.name]=H,b+=g.tris}return console.log(`[scene] rocks ${i} ${(o.length/1048576).toFixed(1)} MB: download ${(c-n).toFixed(0)} ms, decode ${(performance.now()-c).toFixed(0)} ms, ${(b/1e3).toFixed(0)}k tris`),{group:m,meshes:x,material:p}}function pc(a,e=!1){let t=a[0].index!==null,n=new Set(Object.keys(a[0].attributes)),i=new Set(Object.keys(a[0].morphAttributes)),s={},r={},o=a[0].morphTargetsRelative,c=new rt;c.morphTargetsRelative=o;let l=0;for(let h=0;h<a.length;++h){let d=a[h],f=0,p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;s[m]===void 0&&(s[m]=[]),s[m].push(d.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[m].length!==a[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.morphAttributes[m]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0,d=[];for(let f=0;f<a.length;++f){let p=a[f].index;for(let m=0;m<p.count;++m)d.push(p.getX(m)+h);h+=a[f].attributes.position.count}c.setIndex(d)}for(let h in s){let d=wg(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in r){let d=r[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){let p=[];for(let x=0;x<r[h].length;++x)p.push(r[h][x][f]);let m=wg(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function wg(a){let e,t,n,i=-1,s=0;for(let l=0;l<a.length;++l){let h=a[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let r=new e(s),o=new st(r,t,n),c=0;for(let l=0;l<a.length;++l){let h=a[l];if(h.isInterleavedBufferAttribute){let d=c/t;for(let f=0,p=h.count;f<p;f++)for(let m=0;m<t;m++){let x=h.getComponent(f,m);o.setComponent(f+d,m,x)}}else r.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Vf(a,e){if(e===lf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===gr||e===tc){let t=a.getIndex();if(t===null){let s=[],r=a.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)s.push(o);a.setIndex(s),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}let n=t.count-2,i=[];if(e===gr)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),a.setIndex(i),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}var ii=new Xe,Eg=new Rt,Ag=new P,Tg=new P,Rg=new Sn,qh=class{constructor(){this.parts={},this.stack=[new Xe]}get M(){return this.stack[this.stack.length-1]}push(e=0,t=0,n=0,i=0,s=1){return ii.compose(Tg.set(e,t,n),Eg.setFromEuler(Rg.set(0,i,0)),Ag.set(s,s,s)),this.stack.push(this.M.clone().multiply(ii)),this}pop(){return this.stack.pop(),this}add(e,t,n){let i=t.index?t.toNonIndexed():t;n&&i.applyMatrix4(n),i.applyMatrix4(this.M);for(let s of Object.keys(i.attributes))s!=="position"&&s!=="normal"&&s!=="uv"&&i.deleteAttribute(s);return i.attributes.uv||i.setAttribute("uv",new st(new Float32Array(i.attributes.position.count*2),2)),(this.parts[e]??=[]).push(i),this}box(e,t,n,i,s,r,o,c=0){let l=r1.has(e)?"fit":o1.has(e)?"band":"m",h=c1(s,r,o,l);return ii.compose(Tg.set(t,n,i),Eg.setFromEuler(Rg.set(0,c,0)),Ag.set(1,1,1)),this.add(e,h,ii)}column(e,t,n,i,s,r,o=10,c=s*.9){let l=new Gn(c,s,r,o,1,!0);return l1(l,s,r),ii.makeTranslation(t,n+r/2,i),this.add(e,l,ii)}build(e){let t=new It;for(let[n,i]of Object.entries(this.parts)){let s=pc(i,!1);s.computeBoundingSphere();let r=new nt(s,e[n]);r.name="arch-"+n,r.castShadow=!0,r.receiveShadow=!0,t.add(r)}return t}},r1=new Set(["lattice","door","gatedoor","stele"]),o1=new Set(["dougong"]);function c1(a,e,t,n="m"){let i=new Ti(a,e,t),s=i.attributes.uv,r=i.attributes.position,o=i.attributes.normal;if(n==="fit")return i;for(let c=0;c<s.count;c++){let l=r.getX(c),h=r.getY(c),d=r.getZ(c),f=Math.abs(o.getX(c)),p=Math.abs(o.getY(c));if(n==="band"){let m=f>.5?d:l;s.setXY(c,m,p>.5?.02:h/e+.5);continue}f>.5?s.setXY(c,d,h):p>.5?s.setXY(c,l,d):s.setXY(c,l,h)}return i}function l1(a,e,t){let n=a.attributes.uv;for(let i=0;i<n.count;i++)n.setXY(i,n.getX(i)*Math.PI*2*e,n.getY(i)*t)}function la(a,e){let{A:t,B:n,H:i,lift:s=.9,kind:r="hip",vMax:o=1,thick:c=.32,nu:l=18,nv:h=10,tile:d="roof",under:f="wood",ridge:p=!0,gableOver:m=.8}=e,x=1.55,b=r==="gable"?0:1,g=(z,q,Y)=>{if(r==="gable")return s*.25*Math.pow(1-Y,2)*Math.pow(Math.abs(z)/t,4);let ee=t-Math.abs(z),me=n-Math.abs(q),_e=Math.max(ee,me);return s*Math.exp(-_e/(.42*n))*Math.pow(1-Y,2.2)},y=z=>i*Math.pow(z,x),_=z=>{let q=0,Y=16;for(let ee=0;ee<Y;ee++){let me=z*ee/Y,_e=z*(ee+1)/Y;q+=Math.hypot(n*(_e-me),y(_e)-y(me))}return q},v=r==="gable"?[0,1]:[0,1,2,3],u=[],w=[],M=[],S=[],R=[];for(let z=0;z<=h;z++)R.push(_(o*z/h));let T=(z,q,Y,ee)=>{let me=b*Y*n,_e,ie;if(z<2){let be=r==="gable"?t+m:t-me;_e=q*be,ie=(z===0?1:-1)*n*(1-Y)}else{let be=n-me;ie=q*be,_e=(z===2?1:-1)*(t-me)}return ee[0]=_e,ee[1]=y(Y)+g(_e,ie,Y),ee[2]=ie,ee},N=[0,0,0],U=[0,0,0],O=[0,0,0],C=[0,0,0],B=[],H=[],j=[];for(let z of v){let q=[],Y=[],ee=[],me=[];for(let Oe=0;Oe<=h;Oe++){let qe=o*Oe/h,re=[];for(let Me=0;Me<=l;Me++){let ye=-1+2*Me/l;T(z,ye,qe,N);let Ue=z<2?N[0]:N[2];re.push({p:N.slice(),uv:[Ue,R[Oe]]})}me.push(re)}let _e=z===0?[0,0,1]:z===1?[0,0,-1]:z===2?[1,0,0]:[-1,0,0];for(let Oe=0;Oe<h;Oe++)for(let qe=0;qe<l;qe++){let re=me[Oe][qe],Me=me[Oe][qe+1],ye=me[Oe+1][qe],Ue=me[Oe+1][qe+1],Te=z===1||z===2,oe=(de,Ae,Ce)=>{Te?(q.push(...de.p,...Ce.p,...Ae.p),ee.push(...de.uv,...Ce.uv,...Ae.uv)):(q.push(...de.p,...Ae.p,...Ce.p),ee.push(...de.uv,...Ae.uv,...Ce.uv))};oe(re,Me,Ue),oe(re,Ue,ye)}let ie=new rt;ie.setAttribute("position",new et(q,3)),ie.setAttribute("uv",new et(ee,2)),ie.computeVertexNormals(),B.push(ie);let be=new Float32Array(q.length);for(let Oe=0;Oe<q.length;Oe+=9)for(let qe=0;qe<3;qe++){let re=Oe+(qe===0?0:qe===1?6:3);be[Oe+qe*3]=q[re],be[Oe+qe*3+1]=q[re+1]-c,be[Oe+qe*3+2]=q[re+2]}let Pe=new rt;Pe.setAttribute("position",new st(be,3));let Fe=new Float32Array(be.length/3*2);for(let Oe=0;Oe<be.length/3;Oe++)Fe[Oe*2]=be[Oe*3]+be[Oe*3+2],Fe[Oe*2+1]=be[Oe*3+1]*3;Pe.setAttribute("uv",new st(Fe,2)),Pe.computeVertexNormals(),H.push(Pe);let Ie=[],We=[],ht=me[0];for(let Oe=0;Oe<l;Oe++){let qe=ht[Oe].p,re=ht[Oe+1].p,Me=[qe[0],qe[1],qe[2]],ye=[re[0],re[1],re[2]],Ue=[qe[0],qe[1]-c,qe[2]],Te=[re[0],re[1]-c,re[2]],oe=z===1||z===2;oe?Ie.push(...Me,...ye,...Te,...Me,...Te,...Ue):Ie.push(...Me,...Te,...ye,...Me,...Ue,...Te);let de=ht[Oe].uv[0],Ae=ht[Oe+1].uv[0];oe?We.push(de,1,Ae,1,Ae,0,de,1,Ae,0,de,0):We.push(de,1,Ae,0,Ae,1,de,1,de,0,Ae,0)}let Ve=new rt;Ve.setAttribute("position",new et(Ie,3)),Ve.setAttribute("uv",new et(We,2)),Ve.computeVertexNormals(),j.push(Ve)}for(let z of B)a.add(d,z);for(let z of H)a.add(f,z);for(let z of j)a.add("trim",z);if(p&&o>=.999){let z=r==="gable"?t+m:t-n;if(z>.05){a.box("ridge",0,i+.22,0,2*z+.5,.55,.42),a.box("ridge",0,i+.55,0,2*z+.2,.14,.24);for(let q of[-1,1]){let Y=[];for(let me=0;me<=6;me++){let _e=me/6;Y.push(new P(q*(z+.1-.5*Math.sin(_e*2.6)*_e),i+.3+1.25*_e,0))}let ee=new Ea(new Zi(Y),8,.22,6,!1);a.add("ridge",ee)}}else if(r!=="gable"){let q=new on(.42,10,8);ii.makeTranslation(0,i+.45,0),a.add("gold",q,ii);let Y=new yo(.2,1.4,8);ii.makeTranslation(0,i+1.4,0),a.add("gold",Y,ii)}if(r!=="gable")for(let[q,Y]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let ee=[];for(let ie=0;ie<=10;ie++){let be=ie/10;T(0,q,be,N),N[2]*=Y,ee.push(new P(N[0],N[1]+.14,N[2]))}let me=ee[0];ee.unshift(new P(me.x*1+q*.35,me.y+.45,me.z+Y*.35));let _e=new Ea(new Zi(ee),14,.17,5,!1);a.add("ridge",_e)}}}function Ig(a,e){let{nx:t=3,nz:n=2,bay:i=3.6,bayZ:s=i,h:r=4.2,colR:o=.22,wallAll:c=!1,open:l=!1,balcony:h=!1}=e,d=t*i,f=n*s,p=-d/2,m=-f/2;for(let g=0;g<=t;g++)for(let y=0;y<=n;y++)g>0&&g<t&&y>0&&y<n||a.column("pillar",p+g*i,0,m+y*s,o,r,8);let x=.42;a.box("beam",0,r-x/2,f/2,d+o*2,x,.3),a.box("beam",0,r-x/2,-f/2,d+o*2,x,.3),a.box("beam",d/2,r-x/2,0,.3,x,f),a.box("beam",-d/2,r-x/2,0,.3,x,f);let b=.62;if(a.box("dougong",0,r+b/2,f/2+.12,d+.9,b,.5),a.box("dougong",0,r+b/2,-f/2-.12,d+.9,b,.5),a.box("dougong",d/2+.12,r+b/2,0,.5,b,f+.9),a.box("dougong",-d/2-.12,r+b/2,0,.5,b,f+.9),a.box("wood",0,r+b,0,d+.6,.12,f+.6),!l){for(let _=0;_<t;_++){let v=p+(_+.5)*i,u=_===Math.floor(t/2);a.box(c?"wall":u?"door":"lattice",v,(r-x)/2,f/2-.06,i-o*2,r-x,.16),a.box(c?"wall":"lattice",v,(r-x)/2,-f/2+.06,i-o*2,r-x,.16)}for(let _=0;_<n;_++){let v=m+(_+.5)*s;for(let u of[-1,1])a.box("wall",u*(d/2-.06),(r-x)*.22,v,.16,(r-x)*.44,s-o*2),a.box("lattice",u*(d/2-.06),(r-x)*.72,v,.16,(r-x)*.56,s-o*2,0)}}return h&&Xh(a,d+1.6,f+1.6,0,1),{W:d,D:f,top:r+b}}function Xh(a,e,t,n,i=.95,s=0){[[[-e/2,t/2],[e/2,t/2]],[[e/2,t/2],[e/2,-t/2]],[[e/2,-t/2],[-e/2,-t/2]],[[-e/2,-t/2],[-e/2,t/2]]].forEach(([c,l],h)=>{let d=Math.hypot(l[0]-c[0],l[1]-c[1]),f=Math.max(1,Math.round(d/1.4)),p=Math.atan2(l[1]-c[1],l[0]-c[0]);for(let b=0;b<=f;b++){let g=b/f,y=c[0]+(l[0]-c[0])*g,_=c[1]+(l[1]-c[1])*g;h===0&&s>0&&Math.abs(y)<s/2||a.box("pillar",y,n+i/2,_,.14,i,.14)}let m=(c[0]+l[0])/2,x=(c[1]+l[1])/2;if(h===0&&s>0){let b=(e-s)/2;for(let g of[-1,1])a.box("pillar",g*(s/2+b/2),n+i,x,b,.1,.12),a.box("pillar",g*(s/2+b/2),n+i*.45,x,b,.06,.08)}else a.box("pillar",m,n+i,x,d,.1,.12,-p),a.box("pillar",m,n+i*.45,x,d,.06,.08,-p)})}function mc(a,e,t,n,i=!0,s=3.4){if(a.box("stone",0,n/2-.02,0,e,n,t),a.box("stone",0,n+.06,0,e+.3,.14,t+.3),i&&n>.25){let r=Math.max(2,Math.round(n/.18)),o=.3;for(let c=0;c<r;c++){let l=n*(r-c)/r;a.box("stone",0,l/2,t/2+o*(c+.5),s,l,o)}}}function Ua(a,e){let{nx:t=3,nz:n=2,bay:i=3.6,h:s=4.4,floors:r=1,base:o=1,kind:c="hip",liftK:l=1,pyramid:h=!1,wallAll:d=!1}=e,f=t*i,p=n*(e.bayZ??i);mc(a,f+2.4,p+2.4,o,e.steps??!0);let m=o+.13,x=i,b=e.bayZ??i;for(let g=0;g<r;g++){a.push(0,m,0);let y=Ig(a,{nx:t,nz:n,bay:x,bayZ:b,h:g===0?s:s*.78,wallAll:d,balcony:g>0});a.pop();let _=g===r-1,v=m+y.top,u=1.5+x*.12,w=y.W/2+u,M=y.D/2+u;if(a.push(0,v,0),_?h||Math.abs(w-M)<.01?la(a,{A:Math.max(w,M),B:Math.max(w,M),H:Math.max(w,M)*.95,lift:1*l}):la(a,{A:Math.max(w,M),B:Math.min(w,M),H:Math.min(w,M)*.82,lift:.95*l,kind:c}):la(a,{A:w,B:M,H:M*.8,lift:.75*l,kind:"ring",vMax:.42,nv:5}),a.pop(),m=v+(_?0:M*.8*Math.pow(.42,1.55)+.1),x*=.86,b*=.86,!_){let S=t*x+1.8,R=n*b+1.8;a.box("wood",0,m-.1,0,S,.24,R)}}return{W:f,D:p}}function jf(a,e){let{size:t=4.2,h:n=3.6,base:i=.6,tiers:s=2}=e;mc(a,t+1.6,t+1.6,i,!1);let r=i+.13;a.push(0,r,0);let o=Ig(a,{nx:1,nz:1,bay:t,h:n,open:!0});Xh(a,t+.2,t+.2,0,.7,1.6),a.pop();let c=r+o.top,l=t/2+1.5;if(s>1){a.push(0,c,0),la(a,{A:l,B:l,H:l*.8,lift:.9,kind:"ring",vMax:.42,nv:5}),a.pop(),c+=l*.8*Math.pow(.42,1.55);let h=t*.72;a.push(0,c,0),a.box("beam",0,.6,0,h,1.2,h),a.box("dougong",0,1.45,0,h+.5,.5,h+.5),a.pop(),c+=1.7,a.push(0,c,0),la(a,{A:h/2+1.3,B:h/2+1.3,H:(h/2+1.3)*1.05,lift:.85}),a.pop()}else a.push(0,c,0),la(a,{A:l,B:l,H:l*.95,lift:.95}),a.pop()}function Kh(a,e){let{size:t=6,floors:n=5,h:i=3.2,base:s=1.2}=e;mc(a,t+2.5,t+2.5,s,!0,2.2);let r=s+.13,o=t;for(let c=0;c<n;c++){let l=c===0?i*1.25:i;a.push(0,r,0),a.box("wall",0,l/2,0,o,l,o);for(let f of[0,Math.PI/2,Math.PI,-Math.PI/2])a.push(0,0,0,f),a.box(c===0&&f===0?"door":"lattice",0,l*.46,o/2+.02,o*.34,l*.55,.08),a.pop();a.box("dougong",0,l+.25,0,o+.5,.5,o+.5),a.pop();let h=r+l+.5,d=o/2+1.2+o*.05;a.push(0,h,0),c===n-1?la(a,{A:d,B:d,H:d*1.1,lift:.75}):la(a,{A:d,B:d,H:d*.7,lift:.7,kind:"ring",vMax:.4,nv:4}),a.pop(),r=h+d*.7*Math.pow(.4,1.55),o*=.86}}function Cg(a,e){let{w:t=8,d:n=5.2,h:i=3}=e;a.box("stone",0,.3,0,t+.3,.6,n+.3),a.box("plaster",0,.6+i/2,0,t,i,n),a.box("door",0,.6+1.05,n/2+.02,1.4,2.1,.06),a.box("lattice",-t*.3,.6+1.6,n/2+.02,1.2,.9,.06),a.box("lattice",t*.3,.6+1.6,n/2+.02,1.2,.9,.06);let s=n*.42,r=new rt,o=[];for(let c of[-1,1]){let l=c*t/2,h=[l,0,n/2],d=[l,0,-n/2],f=[l,s,0];c>0?o.push(...h,...d,...f):o.push(...h,...f,...d)}r.setAttribute("position",new et(o,3)),r.setAttribute("uv",new et([0,0,5,0,2.5,2,0,0,2.5,2,5,0],2)),r.computeVertexNormals(),ii.makeTranslation(0,.6+i,0),a.add("plaster",r,ii),a.push(0,.6+i,0),la(a,{A:t/2,B:n/2+.9,H:s+.35,kind:"gable",lift:.5,gableOver:.6,nu:8,nv:6,thick:.22}),a.pop()}function Ms(a,e){let t=document.createElement("canvas");return t.width=a,t.height=e,[t,t.getContext("2d")]}function _s(a,e=!0,t=!0){let n=new Ai(a);return e&&(n.colorSpace=Et),t&&(n.wrapS=n.wrapT=pn),n.anisotropy=8,n.generateMipmaps=!0,n.minFilter=Yt,n}function Yh(a,e,t,n=.08,i=1){let s=i*9301+49297,r=()=>(s=(s*9301+49297)%233280)/233280;for(let o=0;o<e*t/60;o++){let c=r()*n;a.fillStyle=r()<.5?`rgba(0,0,0,${c})`:`rgba(255,240,220,${c*.6})`,a.fillRect(r()*e,r()*t,1+r()*3,1+r()*3)}for(let o=0;o<e/6;o++){let c=r()*e,l=t*(.2+r()*.6),h=a.createLinearGradient(0,0,0,l);h.addColorStop(0,`rgba(0,0,0,${n*.8})`),h.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=h,a.fillRect(c,0,1+r()*2,l)}}function Wf(a="lattice"){let[n,i]=Ms(512,512),s=a==="door"?"#5b1d14":"#4a1a12",r=a==="door"?"#2a1a12":"#cdbf9f";i.fillStyle=s,i.fillRect(0,0,512,512);let o=4,c=512/o;for(let l=0;l<o;l++){let h=l*c,d=9,f=14,p=512*.6;i.fillStyle=r,i.fillRect(h+d,f,c-2*d,p-f),i.strokeStyle=s,i.lineWidth=4;let m=5,x=(c-2*d)/m;for(let g=1;g<m;g++)i.beginPath(),i.moveTo(h+d+g*x,f),i.lineTo(h+d+g*x,p),i.stroke();let b=Math.round((p-f)/x);for(let g=1;g<b;g++){let y=f+g*(p-f)/b;i.beginPath(),i.moveTo(h+d,y),i.lineTo(h+c-d,y),i.stroke()}i.lineWidth=2.5;for(let g=0;g<b;g+=2)for(let y=0;y<m;y+=2){let _=h+d+(y+.5)*x,v=f+(g+.5)*(p-f)/b;i.strokeRect(_-x*.25,v-x*.25,x*.5,x*.5)}i.fillStyle="#3d140d",i.fillRect(h+d,p+8,c-2*d,30),i.fillRect(h+d,p+48,c-2*d,512-p-62),i.strokeStyle="#7a3a24",i.lineWidth=3,i.strokeRect(h+d+10,p+60,c-2*d-20,512-p-86),a==="door"&&(l===1||l===2)&&(i.strokeStyle="#c9a25a",i.lineWidth=3,i.beginPath(),i.arc(h+(l===1?c-22:22),512*.52,9,0,Math.PI*2),i.stroke()),i.fillStyle="rgba(0,0,0,0.6)",i.fillRect(h,0,2,512)}return Yh(i,512,512,.1,a==="door"?3:2),_s(n,!0,!1)}function Ng(){let[t,n]=Ms(256,128);n.fillStyle="#6e2318",n.fillRect(0,0,256,128);let i=256/2,s="#1f4f5a",r="#2f6a46",o="#d8d0b8",c="#13252a",l=[[.86,.3,60],[.6,.62,100],[.32,.92,150]];for(let[h,d,f]of l){let p=128*h;n.fillStyle=c,n.fillRect(i-f/2-2,p-13,f+4,26),n.fillStyle=h>.5?r:s,n.fillRect(i-f/2,p-11,f,22),n.fillStyle=o,n.fillRect(i-f/2,p-11,f,2),n.fillStyle=s;for(let m of[-1,0,1])n.fillRect(i+m*f/2-9,p-20,18,9)}return n.fillStyle=r,n.fillRect(i-16,114,32,14),n.fillStyle=s,n.fillRect(0,0,256,10),n.fillStyle=o,n.fillRect(0,10,256,2),Yh(n,256,128,.12,5),_s(t)}function Pg(){let[t,n]=Ms(256,512);n.fillStyle="#6a1a12",n.fillRect(0,0,256,512),n.fillStyle="#4a120c",n.fillRect(256/2-2,0,4,512);for(let i=0;i<9;i++)for(let s=0;s<4;s++)for(let r of[0,1]){let o=r*256/2+18+s*92/3,c=40+i*432/8,l=n.createRadialGradient(o-2,c-2,1,o,c,8);l.addColorStop(0,"#f2d68c"),l.addColorStop(1,"#7a5520"),n.fillStyle=l,n.beginPath(),n.arc(o,c,7,0,Math.PI*2),n.fill()}return Yh(n,256,512,.14,7),_s(t,!0,!1)}function Lg(){let[t,n]=Ms(512,1024),i=n.createLinearGradient(0,0,512,1024);i.addColorStop(0,"#6d6a63"),i.addColorStop(1,"#55524c"),n.fillStyle=i,n.fillRect(0,0,512,1024),Yh(n,512,1024,.2,11),n.strokeStyle="rgba(30,28,25,0.7)",n.lineWidth=6,n.strokeRect(26,26,460,972);let s=(c,l=700)=>`${l} ${c}px "STKaiti", "KaiTi", "Kaiti SC", "\u6977\u4F53", "BiauKai", "Noto Serif CJK SC", "Songti SC", serif`;n.textAlign="center",n.textBaseline="middle";let r=(c,l,h,d,f)=>{n.font=s(d),n.fillStyle="rgba(255,250,235,0.25)",n.fillText(c,l+3,h+3),n.fillStyle=f,n.fillText(c,l,h)};return["\u767D","\u864E","\u5CAD"].forEach((c,l)=>r(c,512*.56,230+l*270,230,"#8f1f14")),[..."\u5C71\u9AD8\u5FC5\u6709\u602A\u5CAD\u5CFB\u5374\u751F\u7CBE"].forEach((c,l)=>r(c,512*.18,140+l*78,60,"#2a2724")),_s(t,!0,!1)}function Dg(){let[e,t]=Ms(1024,1024);t.clearRect(0,0,1024,1024);let n=1024/2,i=(o,c,l)=>{t.strokeStyle=`rgba(255,214,120,${l})`,t.lineWidth=c,t.beginPath(),t.arc(n,n,o,0,Math.PI*2),t.stroke()};i(1024*.47,10,1),i(1024*.47,34,.25),i(1024*.385,5,.9),t.font=`700 ${1024*.06}px "STKaiti", "KaiTi", "Kaiti SC", serif`,t.textAlign="center",t.textBaseline="middle",t.fillStyle="rgba(255,226,150,1)";let s="\u5535\u561B\u5462\u53ED\u54AA\u543D",r=24;for(let o=0;o<r;o++){let c=o/r*Math.PI*2;t.save(),t.translate(n+Math.cos(c)*1024*.428,n+Math.sin(c)*1024*.428),t.rotate(c+Math.PI/2),t.fillText(s[o%6],0,0),t.restore()}return _s(e,!0,!1)}function Ug(a){let[n,i]=Ms(512,1024);i.clearRect(0,0,512,1024);let s=77,r=()=>(s=s*16807%2147483647)/2147483647,o=a.width,c=a.height,l=[[.02,.01,.17,.42],[.2,.01,.18,.4],[.37,.01,.14,.36],[.52,.01,.15,.36],[.68,.01,.16,.42],[.02,.6,.19,.4],[.21,.56,.17,.44],[.38,.6,.17,.4]],h=9;for(let d=0;d<h;d++){let f=(d+.3+r()*.4)*512/h,p=1024*(.45+r()*.55);i.strokeStyle="rgba(60,50,30,0.9)",i.lineWidth=2,i.beginPath(),i.moveTo(f,0);let m=[];for(let x=0;x<p;x+=8)f+=(r()-.5)*3,m.push([f,x]),i.lineTo(f,x);i.stroke();for(let[x,b]of m){if(r()>.85-.4*(b/p))continue;let g=l[Math.floor(r()*l.length)],y=16+r()*20;i.save(),i.translate(x,b),i.rotate((r()-.5)*2.2+Math.PI);let _=.6+r()*.5;i.filter=`brightness(${_})`,i.drawImage(a,g[0]*o,g[1]*c,g[2]*o,g[3]*c,-y*.3,0,y*.6,y*1.3),i.restore()}}return i.filter="none",_s(n,!0,!1)}function kg(){let[e,t]=Ms(256,256);t.clearRect(0,0,256,256);let n=91,i=()=>(n=n*16807%2147483647)/2147483647;for(let s=0;s<26;s++){let r=30+i()*196,o=30+i()*196,c=9+i()*9,l=330+i()*25,h=72+i()*16;for(let d=0;d<5;d++){let f=d/5*Math.PI*2+i();t.fillStyle=`hsla(${l},70%,${h}%,1)`,t.beginPath(),t.ellipse(r+Math.cos(f)*c*.55,o+Math.sin(f)*c*.55,c*.55,c*.38,f,0,Math.PI*2),t.fill()}t.fillStyle="#f7e27a",t.beginPath(),t.arc(r,o,c*.18,0,Math.PI*2),t.fill()}return _s(e,!0,!1)}function ka(a,e,t,n,i,s){let r=a/n,o=e/i,c=t/s,l=Math.sqrt(r*r+o*o+c*c),h=r/n,d=o/i,f=c/s,p=Math.sqrt(h*h+d*d+f*f);return p<1e-9?-Math.min(n,i,s):l*(l-1)/p}function qf(a,e,t,n,i,s){return Math.sqrt((a/n)**2+(e/i)**2+(t/s)**2)}function gc(a,e,t,n,i,s,r,o,c,l){let h=a-n,d=e-i,f=t-s,p=r-n,m=o-i,x=c-s,b=ys((h*p+d*m+f*x)/(p*p+m*m+x*x),0,1);return Math.hypot(h-p*b,d-m*b,f-x*b)-l}function h1(a,e,t,n,i,s,r,o,c,l,h){let d=a-n,f=e-i,p=t-s,m=r-n,x=o-i,b=c-s,g=ys((d*m+f*x+p*b)/(m*m+x*x+b*b),0,1);return(Math.hypot(d-m*g,f-x*g,p-b*g)-(l+(h-l)*g))*.9}function Og(a,e,t,n,i,s,r){let o=Math.abs(a)-n+r,c=Math.abs(e)-i+r,l=Math.abs(t)-s+r;return Math.hypot(Math.max(o,0),Math.max(c,0),Math.max(l,0))+Math.min(Math.max(o,c,l),0)-r}function bc(a,e,t,n){let i=a-n.x,s=t-n.z,r=Math.hypot(i,s);if(r>n.r0*1.6+30)return r-n.r0*1.4;let o=ys((e-n.y0)/(n.y1-n.y0),0,1),c=i/(r+1e-6),l=s/(r+1e-6),h=3*l-4*l*l*l,d=c*c-l*l,f=2*l*c,p=h*d+(4*c*c*c-3*c)*f,m=.13*(h*n.c+c*n.s)+.07*p+.11*Lt(c*1.4+n.seed,l*1.4+e/55),x=ei(n.r0,n.r1,Math.pow(o,n.pow||1))*(1+m)+n.bulge*Math.sin(o*3.1),b=r-x;return b=xn(b,e-n.y1-7*Lt(i/22+n.seed,s/22),9),b=xn(b,n.y0-40-e,4),b*.82}function qt(a,e,t,n,i,s,r,o={}){return{x:a,z:e,r0:t,r1:n,y0:i,y1:s,seed:r,c:Math.cos(r),s:Math.sin(r),bulge:o.bulge??0,pow:o.pow??1}}function Pr(a,e,t,n){let i=12*Gh(a/92,e/118,t/92,3);i+=3.2*Tr(a/10.5,e/72,t/10.5)+1.4*Tr(a/4.2,e/26,t/4.2);let s=e/16.5+.7*Lt(a/64,t/64),r=s-Math.floor(s);return i+=1.25*gt(.55,.85,r)*(1-gt(.85,1,r)),i*n}var[Gg,Vg,jg]=Ca,d1=[[.12,7.5,18],[.34,7.5,19],[.62,19,64],[.9,10,27],[1.12,9,20]],f1=[[.2,6,14],[.56,14,44],[.86,8,18]],Zh=[];for(let[a,e,t]of d1)for(let n of[-1,1]){let i=n*85*Math.sin(a),s=-26+77*Math.cos(a);Zh.push({ax:i,ay:7,az:s,bx:i*1.03,by:-t,bz:s+3+t*.05,r1:e,r2:.9})}var Xf=-140,Jh=[];for(let a=0;a<=10;a++){let e=-1.35+2.7*a/10;Jh.push([104*Math.sin(e),Xf-8*(1-Math.cos(e)),-44+92*Math.cos(e)])}for(let[a,e,t]of f1)for(let n of[-1,1]){let i=n*100*Math.sin(a),s=-44+88*Math.cos(a);Zh.push({ax:i,ay:Xf+12,az:s,bx:i*.98,by:Xf+12+t,bz:s-2,r1:e,r2:.8})}function u1(a,e,t){let n=Math.abs(a),i=ka(a,e-150,t+84,182,128,122),s=ka(a,e-46,t+26,116,78,106);return s=xn(s,-(e+2),5),i=nn(i,s,34),i=nn(i,gc(n,e,t,96,80,24,174,52,-50,24),14),i=nn(i,gc(n,e,t,16,196,46,152,178,-4,19),12),i=nn(i,gc(n,e,t,40,128,56,104,104,40,11),9),i=nn(i,gc(a,e,t,0,182,44,0,104,76,14),16),i}function p1(a,e,t){let n=1e9;for(let i=0;i<Jh.length-1;i++){let s=Jh[i],r=Jh[i+1];n=Math.min(n,gc(a,e,t,s[0],s[1],s[2],r[0],r[1],r[2],21))}return n}function m1(a,e,t){let n=1e9;for(let i=0;i<Zh.length;i++){let s=Zh[i],r=a-s.ax;r>30||r<-30||(n=Math.min(n,h1(a,e,t,s.ax,s.ay,s.az,s.bx,s.by,s.bz,s.r1,s.r2)))}return n}function Yf(a,e,t,n){let i=a-Gg,s=e-Vg,r=t-jg,o=-22-75e-5*i*i+11*Lt(i/74,s/96);s>200&&(o-=(s-200)*.38),o+=70*gt(-128,-168,s)*(1-gt(110,190,Math.abs(i))),s<-168&&(o+=(-168-s)*.8);let c=(r-o)*.72,l=286-88e-5*i*i+40*Lt(i/170,r/170)+18*Lt(i/60,r/60);c=xn(c,(s-l)*.7,30),c=xn(c,-(r+540),30);let h=1e9,d=1e9;if(i>-270&&i<270&&s>-230&&s<330&&r>-345){h=u1(i,s,r),c=nn(c,h,34);let p=Math.abs(i);if(c=xn(c,-ka(p-80,s-150,r-36,40,33,72),7),c=xn(c,-ka(i,s-94,r-66,24,31,58),6),c=xn(c,-ka(i,s+66,r+46,154,70,215),9),s<-60&&s>-210&&p<150&&r>-100){let m=p1(i,s,r);c=nn(c,m,16),h=Math.min(h,m)}s<20&&s>-160&&p<120&&r>-70&&r<90&&(d=m1(i,s,r),c=nn(c,d,3))}return n&&(n[0]=h,n[1]=d),c}var Cr=[0,0];function g1(a,e,t){let n=Yf(a,e,t,Cr),i=Cr[0],s=Cr[1];if(Math.abs(n)>48)return n;let r=i<30?gt(26,2,i):0,o=s<12?gt(9,.5,s):0;r=Math.max(r,o);let c=Pr(a,e,t,1),l=1.6*Gh(a/26,e/26,t/26,2)+.5*Tr(a/7,e/7,t/7);return n-ei(c,l*(1-o*.8),r)}function b1(a,e,t){return Yf(a,e,t,null)}function x1(a,e,t,n,i,s,r){Yf(a,e,t,Cr);let o=Cr[0],c=Cr[1],l=o<40?gt(30,4,o):0;l=Math.max(l,c<14?gt(12,1,c):0),r[0]=l;let h=a-Gg,d=e-Vg,f=t-jg,p=Math.abs(h),m=qf(h,d+66,f+46,154,70,215),x=gt(1.25,1.02,m)*gt(25,-95,f),b=gt(1.25,1.02,qf(p-80,d-150,f-36,40,33,72))*gt(34,-12,f),g=gt(1.25,1.02,qf(h,d-94,f-66,24,31,58))*gt(50,14,f);r[1]=Math.max(x,b,g),r[2]=.15*(1-l)}var Fg=[qt(-176,-372,30,22,20,236,1.3,{bulge:4}),qt(-196,-470,38,26,20,300,2.1),qt(-150,-214,22,15,30,182,3.7,{bulge:3}),qt(-222,-112,34,24,30,214,4.4),qt(-186,-612,42,30,20,340,5.9),qt(-238,-762,50,34,20,380,6.6),qt(-200,-40,24,18,36,150,7.2)],Nr=[[-205,112,-262,22,3,16],[-196,64,-166,16,3,12],[-150,182,-214,13,3,13]];function Wg(a,e,t){let n=-210-48*Math.sin((t+300)/165)-22*Lt(t/92,.3)-Math.max(0,e-40)*.07,i=(a-n)*.78,s=252+125*gt(-80,-540,t)+46*Lt(t/210,a/210);i=xn(i,(e-s)*.72,24),i=xn(i,(t-112)*.8,30),i=xn(i,-(t+955),30);for(let r=0;r<Fg.length;r++)i=nn(i,bc(a,e,t,Fg[r]),16);for(let r=0;r<Nr.length;r++){let o=Nr[r],c=Og(a-o[0]+o[3]*.4,e-o[1]+o[4]+6,t-o[2],o[3]*1.4,o[4]+6,o[5],2.5);i=nn(i,c,4);let l=Og(a-o[0]-2,e-o[1]-16,t-o[2],o[3]*.9,14,o[5]*.92,4);i=xn(i,-l,5)}return i}function v1(a,e,t){let n=Wg(a,e,t);if(Math.abs(n)>44)return n;let i=0;for(let s=0;s<Nr.length;s++){let r=Nr[s],o=Math.hypot((a-r[0])/(r[3]+8),(e-r[1])/10,(t-r[2])/(r[5]+8));i=Math.max(i,gt(1.6,.9,o))}return n-Pr(a,e,t,1-i*.9)}var Kf=[qt(-150,-598,40,27,0,296,1.1,{bulge:5}),qt(-98,-662,30,21,0,238,2.7),qt(-212,-696,50,35,0,338,3.9),qt(-56,-726,22,15,0,186,4.8,{bulge:3}),qt(-168,-520,26,20,0,214,5.5),qt(-252,-568,34,26,0,276,6.3),qt(-118,-772,34,24,10,262,7.7),qt(-20,-792,18,13,10,150,8.9,{bulge:2})];for(let a of Kf)a.y0=Vh(a.x,a.z)-6;function y1(a,e,t){let n=1e9;for(let i=0;i<Kf.length;i++)n=nn(n,bc(a,e,t,Kf[i]),12);return Math.abs(n)>40?n:n-Pr(a,e,t,.8)}var Bg=[qt(118,-70,36,26,-44,196,2.4,{bulge:5,pow:.7}),qt(92,-18,16,11,-10,64,3.3),qt(150,-118,24,18,-44,128,5.1)];function M1(a,e,t){let n=1e9;for(let i=0;i<Bg.length;i++)n=nn(n,bc(a,e,t,Bg[i]),14);return n=nn(n,ka(a-104,e-160,t+58,34,20,32),14),Math.abs(n)>40?n:n-Pr(a,e,t,.9)}var _1=qt(On.x,On.z,30,25,-48,On.y,1.9,{bulge:3});function qg(a,e,t){let n=bc(a,e,t,_1);n=xn(n,e-On.y,2);let i=Ct.span/2;for(let s of[-1,1]){let r=Ct.x+s*(i+9),o=ka(a-r,e+18,t-Ct.z,20,26,22);o=xn(o,e-Ct.y+.6,2),n=nn(n,o,6)}return n}function S1(a,e,t){let n=qg(a,e,t);if(Math.abs(n)>30)return n;let i=gt(On.y-8,On.y-1,e);return n-Pr(a,e,t,.75*(1-i*.85))}var zg=(()=>{let a=Wt(77),e=[],t=0;for(;e.length<46&&t++<4e3;){let n=-2600+a()*5200,i=-3100+a()*2900;if(i>-1350&&n<330||i>-1700&&Math.abs(n)<520||e.some(c=>Math.hypot(c.x-n,c.z-i)<170))continue;let s=45+a()*75,r=Vh(n,i)-20,o=220+a()*520;e.push(qt(n,i,s,s*(.55+a()*.25),r,r+o,a()*10,{bulge:a()*10,pow:.8+a()*.6}))}return e})();function w1(a,e,t){let n=1e9;for(let i=0;i<zg.length;i++){let s=zg[i],r=a-s.x,o=t-s.z,c=r*r+o*o,l=s.r0*1.7+60;if(c>l*l){n=Math.min(n,Math.sqrt(c)-s.r0*1.5);continue}n=nn(n,bc(a,e,t,s),20)}return Math.abs(n)>50?n:n-Pr(a*.62,e*.62,t*.62,1.25)}var Ir=a=>(e,t,n,i,s,r,o)=>{o[0]=0,o[1]=0,o[2]=a},Hg=(()=>{let a=Wt(4242),e=[],t=(i,s,r)=>{let o=jh(i,s),c=r*(.8+a()*.5),l=r*(.45+a()*.35),h=r*(.7+a()*.5),d=a()*Math.PI*2,f=[];for(let p=0;p<4;p++){let m=a()*Math.PI*2,x=(a()-.3)*1.2;f.push([Math.cos(m)*Math.cos(x),Math.sin(x),Math.sin(m)*Math.cos(x),r*(.45+a()*.3)])}e.push({x:i,y:o-l*.35,z:s,rx:c,ry:l,rz:h,c:Math.cos(d),s:Math.sin(d),planes:f,R:Math.max(c,l,h)*1.15})},n=[[-24,26,2.6],[-31,31,1.5],[27,21,3.2],[33,27,1.7],[-14,6,1.9],[17,2,2.4],[-46,12,3.8],[48,4,3.4],[7,22,.9],[-6,28,.7],[12,30,.6]];for(let[i,s,r]of n)t(i,s,r);for(let i=0;i<26;i++){let s=Fn.at(30+i*34+a()*18),r=a()<.5?-1:1,o=3.6+a()*6;t(s.x-s.tz*r*o,s.z+s.tx*r*o,.7+a()*1.8)}for(let i=0;i<22;i++){let s=ti.at(200+i*38+a()*20),r=a()<.5?-1:1,o=6+a()*4;t(s.x-s.tz*r*o,s.z+s.tx*r*o,1.2+a()*2.5)}return e})();function E1(a,e,t){let n=1e9;for(let i=0;i<Hg.length;i++){let s=Hg[i],r=a-s.x,o=e-s.y,c=t-s.z,l=r*r+o*o+c*c;if(l>(s.R+6)*(s.R+6)){n=Math.min(n,Math.sqrt(l)-s.R);continue}let h=r*s.c+c*s.s,d=-r*s.s+c*s.c,f=ka(h,o,d,s.rx,s.ry,s.rz);for(let p of s.planes)f=xn(f,h*p[0]+o*p[1]+d*p[2]-p[3],s.R*.12);n=nn(n,f,.6)}return n>2?n:n-.22*Gh(a/2.2,e/2.2,t/2.2,3)-.05*Tr(a/.6,e/.6,t/.6)}var Jf={skull:{bounds:[-480,-30,-1430,480,640,-870],cell:{high:1.3,mid:2.2,low:3.2},sdf:g1,sdfAO:b1,attrib:x1,lipschitz:3.4},left:{bounds:[-730,0,-970,-120,470,125],cell:{high:2,mid:2.8,low:4},sdf:v1,sdfAO:Wg,attrib:Ir(.22),lipschitz:2},mid:{bounds:[-320,-20,-820,20,350,-470],cell:{high:1.6,mid:2.4,low:3.4},sdf:y1,attrib:Ir(.32),lipschitz:2},right:{bounds:[20,-50,-190,200,225,40],cell:{high:1.1,mid:1.6,low:2.4},sdf:M1,attrib:Ir(.2),lipschitz:2},gorge:{bounds:[30,-52,-600,190,14,-205],cell:{high:1,mid:1.5,low:2.2},sdf:S1,sdfAO:qg,attrib:Ir(.25),lipschitz:2},far:{bounds:[-2800,-60,-3300,2800,1e3,-220],cell:{high:7,mid:9,low:12},sdf:w1,attrib:Ir(.62),lipschitz:2.2},boulders:{bounds:[-130,-50,-1e3,260,60,60],cell:{high:.3,mid:.45,low:.7},sdf:E1,attrib:Ir(.14),lipschitz:2}};function Oi(a,e,t=e){let n=a.clone();return n.repeat.set(1/e,1/t),n.wrapS=n.wrapT=pn,n.needsUpdate=!0,n}function A1(a){let e=n=>new Gt({roughness:.85,metalness:0,...n}),t=Ng();return t.repeat.set(1/1.3,1),{roof:e({map:Oi(a.roof_diff,2.6),normalMap:Oi(a.roof_nor,2.6),color:9278360,roughness:.78,side:Ot}),wood:e({map:Oi(a.planks_diff,2.2),color:7757902,side:Ot}),trim:e({map:Oi(a.planks_diff,2.2),color:3811872,side:Ot}),ridge:e({map:Oi(a.roof_diff,1.4),color:5396316,roughness:.75}),gold:e({color:13213776,metalness:.85,roughness:.35}),pillar:e({map:Oi(a.redwood_diff,1.6),color:11549222,roughness:.5}),beam:e({map:Oi(a.redwood_diff,1.6),color:7743771,roughness:.6}),dougong:e({map:t,roughness:.7}),wall:e({map:Oi(a.plaster_diff,2.5),color:15260870,roughness:.92}),plaster:e({color:14209216,roughness:.92}),door:e({map:Wf("door"),roughness:.7}),lattice:e({map:Wf("lattice"),roughness:.75}),stone:e({map:Oi(a.stonewall_diff,2.4),normalMap:Oi(a.stonewall_nor,2.4),color:13947080,roughness:.9}),gatedoor:e({map:Pg(),roughness:.6}),stele:e({map:Lg(),roughness:.85})}}function T1(a,{W:e=28,D:t=14,H:n=9.5,archW:i=5.4,archH:s=7.2}){let r=i/2,o=new Qi;o.moveTo(-e/2,-1.5),o.lineTo(-r,-1.5),o.lineTo(-r,s-r),o.absarc(0,s-r,r,Math.PI,0,!0),o.lineTo(r,-1.5),o.lineTo(e/2,-1.5),o.lineTo(e/2-.6,n),o.lineTo(-e/2+.6,n),o.closePath();let c=new wa(o,{depth:t,bevelEnabled:!1,curveSegments:18});c.translate(0,0,-t/2),a.add("stone",c);let l=new Qi;l.absarc(0,s-r,r+.9,Math.PI,0,!0),l.lineTo(r,s-r),l.absarc(0,s-r,r,0,Math.PI,!1),l.closePath();let h=new wa(l,{depth:.35,bevelEnabled:!1,curveSegments:18});for(let d of[1,-1]){let f=new Xe().makeTranslation(0,0,d>0?t/2:-t/2-.35);a.add("stone",h.clone(),f)}a.box("gatedoor",0,s/2-.75,0,i,s+1.5,.3);for(let d of[1,-1]){a.box("stone",0,n+.35,d*(t/2-.4),e-1.2,.7,.8);let f=Math.floor((e-2)/2.2);for(let p=0;p<=f;p++)a.box("stone",-(e-2)/2+p*(e-2)/f,n+1.15,d*(t/2-.4),1.1,.9,.8)}a.push(0,n,0),Ua(a,{nx:5,nz:2,bay:3.7,h:4.6,floors:2,base:.4,steps:!1}),a.pop()}function R1(a,{span:e=44,W:t=5.2}){let n=e+18,i=n/2,s=v=>.7*(1-(v/i)**2),r=16,o=-15,c=-1.7,l=c-o,h=(r*r+l*l)/(2*l),d=c-h,f=Math.asin((o-d)/h),p=new Qi;p.moveTo(-i,-26),p.lineTo(-r,-26),p.lineTo(-r,o);let m=28;for(let v=0;v<=m;v++){let u=Math.PI-f-(Math.PI-2*f)*v/m;p.lineTo(h*Math.cos(u),d+h*Math.sin(u))}p.lineTo(r,-26),p.lineTo(i,-26);for(let v=0;v<=20;v++){let u=i-n*v/20;p.lineTo(u,s(u))}p.closePath();let x=new wa(p,{depth:t,bevelEnabled:!1});x.translate(0,0,-t/2),a.add("stone",x);let b=new Qi,g=[];for(let v=0;v<=m;v++){let u=f+(Math.PI-2*f)*v/m;g.push([Math.cos(u),Math.sin(u)])}b.moveTo(g[0][0]*(h+1.3),d+g[0][1]*(h+1.3));for(let v of g)b.lineTo(v[0]*(h+1.3),d+v[1]*(h+1.3));for(let v=g.length-1;v>=0;v--)b.lineTo(g[v][0]*h,d+g[v][1]*h);b.closePath();let y=new wa(b,{depth:.3,bevelEnabled:!1});for(let v of[1,-1])a.add("stone",y.clone(),new Xe().makeTranslation(0,0,v>0?t/2:-t/2-.3));let _=18;for(let v of[1,-1]){let u=v*(t/2-.22);for(let w=0;w<=_;w++){let M=-i+2+(n-4)*w/_;if(a.box("stone",M,s(M)+.65,u,.32,1.3,.32),a.box("stone",M,s(M)+1.38,u,.22,.2,.22),w<_){let S=-i+2+(n-4)*(w+1)/_,R=(M+S)/2,T=Math.atan2(s(S)-s(M),S-M),N=new Ti(S-M-.3,.75,.14),U=new Xe().compose(new P(R,s(R)+.5,u),new Rt().setFromAxisAngle(new P(0,0,1),T),new P(1,1,1));a.add("stone",N,U)}}}}function I1(a){a.box("stone",0,.35,0,2.2,.7,1.3),a.box("stone",0,2.2,0,1.6,3.2,.42),a.box("stele",0,2.2,.215,1.52,3.1,.02);let e=new Gn(.82,.82,.46,16,1,!1,-Math.PI/2,Math.PI);e.rotateX(Math.PI/2),a.add("stone",e,new Xe().makeTranslation(0,3.8,0))}function Xg({T:a,heightAt:e}){let t=new qh,n=[],i=(g,y,_=null)=>[g,_??e(g,y),y],s=(g,y,_,v,u,w,...M)=>{t.push(y,_,v,u),g(t,...M),t.pop(),n.push([y,v,w])},[r,o,c]=Nr;s(Ua,r[0]+2,r[1],r[2]+1,Math.PI/2-.25,14,{nx:3,nz:2,bay:4.2,h:4.8,floors:3,base:.6}),s(Ua,o[0]+4,o[1],o[2],Math.PI/2-.3,9,{nx:3,nz:1,bay:3.5,bayZ:4,h:4,floors:2,base:.5}),s(jf,c[0],c[1],c[2],.3,7,{size:4.6,h:3.6,base:.5,tiers:2}),s(T1,Rn.x,Rn.y-.2,Rn.z,.22,20,{});{let[g,y,_]=i(-116,-352);s(Ua,g,y,_,.3,14,{nx:5,nz:3,bay:3.8,h:5,floors:1,base:1.4})}{let[g,y,_]=i(-150,-318);s(Kh,g,y,_,.4,7,{size:6.4,floors:5,h:3.4})}{let[g,y,_]=i(-64,-344);s(Ua,g,y,_,.1,9,{nx:3,nz:2,bay:3.4,h:4.2,floors:2,base:.9})}s(Ua,On.x-2,On.y,On.z+2,-.55,12,{nx:3,nz:2,bay:3.9,h:4.6,floors:2,base:.8}),s(jf,On.x+12,On.y,On.z-12,-.5,5,{size:3.6,h:3.2,base:.4,tiers:1});{let[g,y,_]=i(-108,-548);s(Kh,g,y,_,.2,8,{size:7.5,floors:7,h:3.6})}{let[g,y,_]=i(-40,-610);s(Ua,g,y,_,.1,12,{nx:5,nz:2,bay:4,h:5,floors:2,base:1.2})}{let[g,y,_]=i(236,-470);s(Kh,g,y,_,-.3,6,{size:6,floors:5,h:3.2})}let l=Wt(808),h=Mr(_r(Nh,3)),d=[0,0,0,0],f=[],p=0;for(;f.length<15&&p++<3e3;){let g=l()*Math.PI*2,y=10+l()*(kn.r+6),_=kn.x+Math.cos(g)*y*1.1,v=kn.z+Math.sin(g)*y;if(h.closest(_,v,d),d[0]<7.5||Math.hypot(_-bn.x,v-bn.z)<bn.r+6||f.some(U=>Math.hypot(U[0]-_,U[1]-v)<11.5))continue;let u=e(_-4,v),w=e(_+4,v),M=e(_,v-4),S=e(_,v+4);if(Math.max(u,w,M,S)-Math.min(u,w,M,S)>1.6)continue;let R=h.at(d[1]),T=Math.atan2(R.x-_,R.z-v),N=Math.min(u,w,M,S)-.1;f.push([_,v]),s(Cg,_,N,v,T,6,{w:7+l()*3,d:4.8+l()*1.4,h:2.8+l()*.5})}t.push(Ct.x,Ct.y,Ct.z,0),R1(t,{span:Ct.span,W:Ct.width}),t.pop();{let[g,y,_]=i(13,10);s(I1,g,y-.25,_,.35,3)}let m=A1(a),x=t.build(m);x.name="architecture";let b=0;return x.traverse(g=>{g.isMesh&&(b+=g.geometry.attributes.position.count/3)}),console.log(`[scene] architecture ${x.children.length} meshes, ${(b/1e3).toFixed(0)}k tris, ${f.length} houses`),{group:x,placed:n,materials:m}}var Lr={twig:[{u0:0,v0:0,u1:.2109,v1:1,fill:.74,px:9993},{u0:.3086,v0:.4023,u1:.6406,v1:.7813,fill:.23,px:1787},{u0:.6406,v0:.4531,u1:.9531,v1:.832,fill:.19,px:1371},{u0:.6523,v0:.043,u1:.9375,v1:.3711,fill:.16,px:916},{u0:.1914,v0:.0508,u1:.4102,v1:.3164,fill:.19,px:663},{u0:.3125,v0:.707,u1:.9844,v1:1,fill:.05,px:650},{u0:.4961,v0:.2578,u1:.6289,v1:.4023,fill:.34,px:376},{u0:.3867,v0:.2891,u1:.4609,v1:.3828,fill:.44,px:165},{u0:.5391,v0:.0977,u1:.5898,v1:.2305,fill:.4,px:140},{u0:.2383,v0:.8086,u1:.2813,v1:.9805,fill:.32,px:121},{u0:.2109,v0:.8164,u1:.2344,v1:.9805,fill:.51,px:82}],leaves:[{u0:.1602,v0:.0156,u1:.3398,v1:.3945,fill:.64,px:2658},{u0:.2109,v0:.5742,u1:.3594,v1:1,fill:.6,px:2343},{u0:.0117,v0:.625,u1:.1875,v1:.9805,fill:.6,px:2297},{u0:.0117,v0:.0195,u1:.1484,v1:.4102,fill:.64,px:2076},{u0:.6914,v0:.0195,u1:.8203,v1:.418,fill:.61,px:1883},{u0:.5117,v0:.0469,u1:.6523,v1:.3672,fill:.67,px:1833},{u0:.418,v0:.6016,u1:.5664,v1:1,fill:.5,px:1828},{u0:.3555,v0:.0313,u1:.4883,v1:.3633,fill:.62,px:1643}],grassblade:[{u0:.7617,v0:.0781,u1:.9531,v1:.6211,fill:.39,px:2502},{u0:.0898,v0:.5469,u1:.832,v1:.7734,fill:.14,px:1487},{u0:.2188,v0:.7461,u1:.4727,v1:.8945,fill:.46,px:1039},{u0:.6094,v0:.7578,u1:.8164,v1:.8633,fill:.47,px:596},{u0:.2656,v0:.8867,u1:.4688,v1:1,fill:.33,px:463},{u0:.6016,v0:.8867,u1:.7852,v1:1,fill:.36,px:452},{u0:.1406,v0:.4805,u1:.4609,v1:.6211,fill:.13,px:364},{u0:.1797,v0:.0352,u1:.3086,v1:.3438,fill:.14,px:328},{u0:.5078,v0:.0508,u1:.8242,v1:.2148,fill:.1,px:307},{u0:.7266,v0:.1563,u1:.7773,v1:.5508,fill:.28,px:305},{u0:.0156,v0:.6211,u1:.082,v1:.7734,fill:.55,px:303},{u0:.707,v0:.2109,u1:.75,v1:.5898,fill:.32,px:272},{u0:.3242,v0:.3438,u1:.4414,v1:.4727,fill:.3,px:260},{u0:.5586,v0:.5547,u1:.6602,v1:.6484,fill:.48,px:253},{u0:.4297,v0:0,u1:.5898,v1:.0664,fill:.37,px:233},{u0:.2695,v0:.2852,u1:.4883,v1:.418,fill:.13,px:228},{u0:.0703,v0:.8945,u1:.1563,v1:1,fill:.35,px:184},{u0:.6406,v0:.2891,u1:.6758,v1:.4922,fill:.42,px:146},{u0:.25,v0:.293,u1:.3594,v1:.3711,fill:.28,px:132},{u0:.2734,v0:.4258,u1:.3438,v1:.4961,fill:.49,px:125},{u0:.3164,v0:.6094,u1:.3594,v1:.6914,fill:.65,px:111},{u0:.5,v0:.8438,u1:.5508,v1:.9063,fill:.68,px:105},{u0:.4727,v0:.2461,u1:.5391,v1:.3047,fill:.5,px:97},{u0:.6797,v0:.2891,u1:.707,v1:.5156,fill:.32,px:89},{u0:.2891,v0:.2188,u1:.3594,v1:.2852,fill:.36,px:86},{u0:.8477,v0:.0313,u1:.8828,v1:.1641,fill:.33,px:74},{u0:.5469,v0:.3398,u1:.6133,v1:.4375,fill:.21,px:71},{u0:.3984,v0:.4492,u1:.4609,v1:.5039,fill:.41,px:69},{u0:.832,v0:.6172,u1:.9336,v1:.6602,fill:.31,px:66},{u0:.1289,v0:.2617,u1:.1914,v1:.3086,fill:.46,px:65}],fern:[{u0:.3086,v0:.0195,u1:.4609,v1:.7656,fill:.41,px:2861},{u0:.0859,v0:.1094,u1:.2383,v1:.918,fill:.38,px:2855},{u0:.7188,v0:.1055,u1:.8398,v1:.7031,fill:.45,px:1985},{u0:.5391,v0:.0234,u1:.6641,v1:.5039,fill:.39,px:1403},{u0:.5078,v0:.5078,u1:.6328,v1:.9688,fill:.4,px:1382},{u0:.7188,v0:.6875,u1:.832,v1:.7695,fill:.33,px:167},{u0:.7539,v0:.7852,u1:.8203,v1:.8516,fill:.29,px:66}],flower:[{u0:0,v0:0,u1:1,v1:1,fill:.92,px:60195},{u0:.3867,v0:.8633,u1:.4805,v1:.9258,fill:.61,px:188},{u0:.0859,v0:.8594,u1:.168,v1:.9219,fill:.68,px:182},{u0:.6289,v0:.8555,u1:.7188,v1:.9375,fill:.4,px:158},{u0:.1289,v0:.7773,u1:.2148,v1:.8281,fill:.69,px:151},{u0:.2148,v0:.832,u1:.2656,v1:.9219,fill:.65,px:151},{u0:.3828,v0:.7969,u1:.4375,v1:.8672,fill:.58,px:112},{u0:.3008,v0:.8711,u1:.3477,v1:.9414,fill:.63,px:100}]};var Zg=(a,e)=>[e.u0*a.width,e.v0*a.height,(e.u1-e.u0)*a.width,(e.v1-e.v0)*a.height];function Qf(a){let e=new Ai(a);return e.colorSpace=Et,e.anisotropy=8,e}function N1(a){let t=document.createElement("canvas");t.width=t.height=512;let n=t.getContext("2d"),i=Wt(5),s=[1,2,3,4,6].map(r=>Lr.twig[r]);for(let r=0;r<34;r++){let o=s[Math.floor(i()*s.length)],[c,l,h,d]=Zg(a,o),f=i()*Math.PI*2,p=i()*512*.22,m=512*(.32+i()*.2);n.save(),n.translate(512/2+Math.cos(f)*p,512/2+Math.sin(f)*p*.8),n.rotate(f+Math.PI/2+(i()-.5)*.8),n.filter=`brightness(${.55+i()*.6}) saturate(1.1)`,n.drawImage(a,c,l,h,d,-m/2,-m*.9,m,m*d/h),n.restore()}return Qf(t)}function Kg(a,e=0){let n=document.createElement("canvas");n.width=n.height=512;let i=n.getContext("2d"),s=Wt(11+e);for(let r=0;r<120;r++){let o=Lr.leaves[Math.floor(s()*Lr.leaves.length)],[c,l,h,d]=Zg(a,o),f=s()*Math.PI*2,p=Math.sqrt(s())*512*.36,m=512*(.07+s()*.05)*(.7+p/512);i.save(),i.translate(512/2+Math.cos(f)*p,512/2+Math.sin(f)*p),i.rotate(f+Math.PI/2+(s()-.5)*1.2),i.filter=`brightness(${.45+p/512*1.1+s()*.25}) hue-rotate(${e+(s()-.5)*16}deg)`,i.drawImage(a,c,l,h,d,-m*.35,-m,m*.7,m*.7*d/h),i.restore()}return Qf(n)}function P1(){let t=document.createElement("canvas");t.width=256,t.height=256;let n=t.getContext("2d"),i=Wt(23);for(let s=0;s<9;s++){let r=256*(.15+i()*.7),o=256*(.08+i()*.45);n.strokeStyle=`rgba(${70+i()*30},${110+i()*30},50,1)`,n.lineWidth=2,n.beginPath(),n.moveTo(256/2+(i()-.5)*20,256),n.quadraticCurveTo(r+(i()-.5)*30,(256+o)/2,r,o),n.stroke();let c=9+i()*7;for(let l=0;l<5;l++){let h=l/5*Math.PI*2+i(),d=88+i()*10;n.fillStyle=`hsl(${50+i()*20},${20+i()*20}%,${d}%)`,n.beginPath(),n.ellipse(r+Math.cos(h)*c*.55,o+Math.sin(h)*c*.5,c*.55,c*.33,h,0,Math.PI*2),n.fill()}n.fillStyle="#e8c640",n.beginPath(),n.arc(r,o,c*.2,0,Math.PI*2),n.fill()}return Qf(t)}function Dr(a){let e=a.length,t=new Float32Array(e*12),n=new Float32Array(e*12),i=new Float32Array(e*8),s=new Float32Array(e*12),r=new Uint32Array(e*6);a.forEach((c,l)=>{let{o:h,r:d,u:f,nrm:p,rect:m=[0,0,1,1],shade:x=1,bottom:b=!1}=c,g=b?[[-1,0],[1,0],[1,1],[-1,1]]:[[-1,-1],[1,-1],[1,1],[-1,1]],y=[[m[0],m[1]],[m[2],m[1]],[m[2],m[3]],[m[0],m[3]]];g.forEach(([_,v],u)=>{let w=(l*4+u)*3;t[w]=h[0]+d[0]*_+f[0]*v,t[w+1]=h[1]+d[1]*_+f[1]*v,t[w+2]=h[2]+d[2]*_+f[2]*v;let M=typeof p=="function"?p(t[w],t[w+1],t[w+2]):p;n[w]=M[0],n[w+1]=M[1],n[w+2]=M[2];let S=typeof x=="function"?x(v):x;s[w]=S,s[w+1]=S,s[w+2]=S,i[(l*4+u)*2]=y[u][0],i[(l*4+u)*2+1]=y[u][1]}),r.set([l*4,l*4+1,l*4+2,l*4,l*4+2,l*4+3],l*6)});let o=new rt;return o.setAttribute("position",new st(t,3)),o.setAttribute("normal",new st(n,3)),o.setAttribute("uv",new st(i,2)),o.setAttribute("color",new st(s,3)),o.setIndex(new st(r,1)),o}var xc=a=>{let e=Math.hypot(a[0],a[1],a[2])||1;return[a[0]/e,a[1]/e,a[2]/e]};function Qh(a,e,t,n=6){let i=new Zi(a.map(d=>new P(...d))),s=Math.max(2,a.length),r=new Ea(i,s,1,n,!1),o=r.attributes.position,c=i.computeFrenetFrames(s,!1);for(let d=0;d<=s;d++){let f=d/s,p=i.getPointAt(f),m=e+(t-e)*f;for(let x=0;x<=n;x++){let b=d*(n+1)+x,g=o.getX(b)-p.x,y=o.getY(b)-p.y,_=o.getZ(b)-p.z;o.setXYZ(b,p.x+g*m,p.y+y*m,p.z+_*m)}}r.computeVertexNormals();let l=r.attributes.uv,h=i.getLength();for(let d=0;d<l.count;d++)l.setXY(d,l.getY(d)*Math.PI*2*e,l.getX(d)*h);return r}function L1(a,e){let t=Wt(a),n=[],i=0,s=0,r=(t()-.5)*.25,o=t()*Math.PI*2;for(let p=0;p<=5;p++){let m=p/5;i+=Math.cos(o)*r*e/5+(t()-.5)*.5,s+=Math.sin(o)*r*e/5+(t()-.5)*.5,n.push([i,m*e,s])}let c=[Qh(n,e*.028,e*.008,6)],l=[],h=[i*.6,e*.78,s*.6],d=(p,m,x)=>xc([p-h[0],(m-h[1])*1.4+2.5,x-h[2]]),f=4+Math.floor(t()*3);for(let p=0;p<f;p++){let m=.5+.5*p/(f-1),x=n[Math.min(5,Math.round(m*5))],b=p===f-1?1:2+Math.floor(t()*2);for(let g=0;g<b;g++){let y=t()*Math.PI*2,_=(p===f-1?.6:1)*e*(.22+t()*.16)*(1.15-m*.5),v=x[0]+Math.cos(y)*_,u=x[2]+Math.sin(y)*_,w=x[1]+(t()-.3)*e*.06;p<f-1&&c.push(Qh([x,[(x[0]+v)/2,x[1]+e*.03,(x[2]+u)/2],[v,w,u]],e*.011,e*.004,4));let M=e*(.17+t()*.08)*(p===f-1?1.25:1);for(let R=0;R<3;R++){let T=t()*Math.PI,N=(t()-.5)*.5,U=[Math.cos(T)*M,N*M,Math.sin(T)*M],O=[-Math.sin(T)*M*.85,(t()-.5)*.4*M,Math.cos(T)*M*.85];l.push({o:[v+(t()-.5)*M*.4,w+R*M*.12,u+(t()-.5)*M*.4],r:U,u:O,nrm:d,shade:.75+.25*m+(R===2?.1:0)})}let S=t()*Math.PI;l.push({o:[v,w+M*.1,u],r:[Math.cos(S)*M,0,Math.sin(S)*M],u:[0,M*.55,0],nrm:d,shade:.8})}}return{wood:pc(c.map(p=>p.toNonIndexed())),leaves:Dr(l)}}function D1(a,e){let t=Wt(a),n=[(t()-.5)*1.2,e*.42,(t()-.5)*1.2],i=[Qh([[0,0,0],[n[0]*.5,e*.2,n[2]*.5],n],e*.035,e*.018,7)],s=[n[0],e*.68,n[2]],r=e*.36;for(let h=0;h<4;h++){let d=h/4*Math.PI*2+t();i.push(Qh([n,[n[0]+Math.cos(d)*r*.5,e*.62,n[2]+Math.sin(d)*r*.5],[n[0]+Math.cos(d)*r*.8,e*.8,n[2]+Math.sin(d)*r*.8]],e*.016,e*.005,5))}let o=[],c=(h,d,f)=>xc([h-s[0],d-s[1]+r*.5,f-s[2]]),l=26;for(let h=0;h<l;h++){let d=1-2*(h+.5)/l,f=Math.sqrt(1-d*d),p=h*2.39996,m=[s[0]+Math.cos(p)*f*r,s[1]+d*r*(d<0?.6:.85),s[2]+Math.sin(p)*f*r],x=r*(.55+t()*.25),b=t()*Math.PI,g=[Math.cos(b)*x,(t()-.5)*x*.6,Math.sin(b)*x],y=[-Math.sin(b)*x*(t()-.5),x*.9,Math.cos(b)*x*(t()-.5)];o.push({o:m,r:g,u:y,nrm:c,shade:.62+.38*(d*.5+.5)})}return{wood:pc(i.map(h=>h.toNonIndexed())),leaves:Dr(o)}}function U1(a,e){let t=Wt(a),n=[],i=[0,e*.45,0],s=(r,o,c)=>xc([r-i[0],o-i[1]+e*.4,c-i[2]]);for(let r=0;r<9;r++){let o=r/9*Math.PI*2+t()*.5,c=e*.32*t(),l=e*(.45+t()*.2);n.push({o:[Math.cos(o)*c,e*(.38+t()*.25),Math.sin(o)*c],r:[Math.cos(o+1.57)*l,0,Math.sin(o+1.57)*l],u:[Math.cos(o)*l*.3,l*.85,Math.sin(o)*l*.3],nrm:s,shade:.7+t()*.3})}return{leaves:Dr(n)}}function Yg(a,e,t,n=3,i=1){let s=Wt(i),r=[];for(let o=0;o<n;o++){let c=o/n*Math.PI+s()*.3;r.push({o:[0,0,0],r:[Math.cos(c)*e/2,0,Math.sin(c)*e/2],u:[(s()-.5)*.2*t,t,(s()-.5)*.2*t],nrm:[0,1,0],rect:a,bottom:!0,shade:l=>.72+.28*l})}return Dr(r)}function Oa(a,e,t={}){let n=new Gt({map:a,alphaTest:t.alphaTest??.42,side:Ot,roughness:.82,metalness:0,vertexColors:!0,color:t.color??16777215,envMapIntensity:t.env??.75}),i=t.sway??1;return n.onBeforeCompile=s=>{s.uniforms.uTime=e,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
			normal = normalize( vNormal );`)},n.customProgramCacheKey=()=>"foliage"+i,n}function Jg(a,e,t,n,i){let s=n;for(let r=0;r<90&&s>i;r++){let o=a(e,s,t);if(o<.4)return s;s-=Math.max(.5,o*.55)}return null}function Zf(a,e,t,n,i=.8){let s=a(e+i,t,n)-a(e-i,t,n),r=a(e,t+i,n)-a(e,t-i,n),o=a(e,t,n+i)-a(e,t,n-i);return xc([s,r,o])}function Qg({T:a,terrain:e,placed:t,time:n,Q:i}){let s=performance.now(),r=new It;r.name="vegetation";let o=Wt(1234),c=e.heightAt,l=(oe,de,Ae=0)=>t.some(Ce=>Math.hypot(Ce[0]-oe,Ce[1]-de)<Ce[2]+Ae),h=(oe,de)=>Math.hypot(c(oe+1.5,de)-c(oe-1.5,de),c(oe,de+1.5)-c(oe,de-1.5))/(2*1.5),d=N1(a.twig.image),f=Kg(a.leaves.image,0),p=Kg(a.leaves.image,-25),m=kg(),x=P1(),b=new Gt({map:a.bark_diff,normalMap:a.bark_nor,color:10127994,roughness:.95});a.bark_diff.repeat.set(1/1.2,1/2.5),a.bark_nor.repeat.copy(a.bark_diff.repeat);let g=Oa(d,n,{color:12108964}),y=Oa(f,n,{color:13030560}),_=Oa(p,n,{color:11583624}),v=Oa(m,n,{alphaTest:.5}),u=Oa(a.grassblade,n,{color:13164688,alphaTest:.38,sway:2.2,env:.7}),w=Oa(x,n,{alphaTest:.4,sway:2}),M=Oa(a.fern,n,{alphaTest:.4,color:10530944,sway:1.2}),S=[101,102,103,104].map((oe,de)=>L1(oe,11+de*2.5)),R=[201,202,203].map((oe,de)=>D1(oe,9+de*2.2)),T=[301,302].map((oe,de)=>U1(oe,2.2+de*.8)),N=new Map,U=(oe,de,Ae,Ce,Je,F=!0)=>{N.has(oe)||N.set(oe,{geo:de,mat:Ae,list:[],shadow:F}),N.get(oe).list.push([Ce.clone(),Je])},O=new Xe,C=new Rt,B=new P,H=new P,j=new P(0,1,0),z=new He,q=(oe,de,Ae,Ce,Je,F)=>{if(C.setFromAxisAngle(j,F),O.compose(H.set(de,Ae,Ce),C,B.set(Je,Je*(.9+o()*.2),Je)),z.setHSL(.27+(o()-.5)*.06,.32+o()*.2,.4+o()*.12).multiplyScalar(2.2),oe==="pine"){let Ke=Math.floor(o()*S.length);U("pw"+Ke,S[Ke].wood,b,O,null),U("pl"+Ke,S[Ke].leaves,g,O,z.clone())}else if(oe==="broad"){let Ke=Math.floor(o()*R.length),Ze=o()<.5?y:_;U("bw"+Ke,R[Ke].wood,b,O,null),U("bl"+Ke+Ze.uuid,R[Ke].leaves,Ze,O,z.clone())}else if(oe==="blossom"){let Ke=Math.floor(o()*R.length);U("bw"+Ke,R[Ke].wood,b,O,null),U("bb"+Ke,R[Ke].leaves,v,O,new He(1,1,1))}else{let Ke=Math.floor(o()*T.length);U("sh"+Ke+(oe==="pinkbush"?"p":""),T[Ke].leaves,oe==="pinkbush"?v:o()<.5?y:_,O,oe==="pinkbush"?new He(1,1,1):z.clone())}},Y=i.treeStep,ee=e.maps,me=0;for(let oe=ee.z0+10;oe<ee.z0+ee.d-10;oe+=Y)for(let de=ee.x0+10;de<ee.x0+ee.w-10;de+=Y){let Ae=de+(o()-.5)*Y*.9,Ce=oe+(o()-.5)*Y*.9,Je=e.maskAt(Ae,Ce,3),F=e.maskAt(Ae,Ce,0),Ke=e.maskAt(Ae,Ce,1),Ze=e.maskAt(Ae,Ce,2),ct=h(Ae,Ce),xe=Je*.85+.03;if(Ze>.3&&(xe*=.05),F>.05||Ke>.05||ct>1.3||o()>xe)continue;let mt=Ae-Li.pos[0],ze=Ce-Li.pos[2],Ye=Math.hypot(mt,ze),D=ze<0&&Math.abs(mt)<-ze*.95+25&&Ye<260;if(Ye<30||l(Ae,Ce,3))continue;let A=c(Ae,Ce)-.3;if(D){o()<.25&&q("bush",Ae,A,Ce,.7+o()*.6,o()*6.28);continue}let Q=o()<.6?"pine":o()<.75?"broad":"bush";if(q(Q,Ae,A,Ce,.8+o()*.6,o()*6.28),me++,o()<.5){let ve=o()*6.28,le=3+o()*4,Re=Ae+Math.cos(ve)*le,Ne=Ce+Math.sin(ve)*le;e.maskAt(Re,Ne,0)<.05&&!l(Re,Ne,1)&&q("bush",Re,c(Re,Ne)-.2,Ne,.8+o()*.8,o()*6.28)}}let _e=0,ie=[["left",-700,-200,-950,110,22],["mid",-300,10,-810,-480,16],["skull",-460,460,-1400,-1e3,30],["right",40,190,-180,30,9],["gorge",100,180,-290,-215,8]];for(let[oe,de,Ae,Ce,Je,F]of ie){let Ke=Jf[oe];for(let Ze=Ce;Ze<Je;Ze+=F)for(let ct=de;ct<Ae;ct+=F){let xe=ct+(o()-.5)*F,mt=Ze+(o()-.5)*F,ze=Jg(Ke.sdf,xe,mt,Ke.bounds[4]+5,Ke.bounds[1]+20);if(ze===null||ze<c(xe,mt)+3||Zf(Ke.sdf,xe,ze,mt)[1]<.55||l(xe,mt,4))continue;let D=o()<.72?"pine":"bush";q(D,xe,ze-.5,mt,(oe==="skull"?1.3:1)*(.8+o()*.6),o()*6.28),_e++;for(let A=0;A<2;A++){if(o()<.4)continue;let Q=xe+(o()-.5)*F,ve=mt+(o()-.5)*F,le=Jg(Ke.sdf,Q,ve,ze+30,ze-30);le!==null&&Zf(Ke.sdf,Q,le,ve)[1]>.55&&!l(Q,ve,4)&&q(o()<.6?"pine":"bush",Q,le-.5,ve,.7+o()*.6,o()*6.28)}}}for(let[oe,de,Ae]of[[42,-136,"blossom"],[6,-168,"blossom"],[50,-182,"pinkbush"],[30,-128,"pinkbush"],[58,-150,"pinkbush"],[-6,-132,"pinkbush"],[20,-196,"blossom"]])l(oe,de,1)||q(Ae,oe,c(oe,de)-.2,de,Ae==="blossom"?.75:1.2,o()*6.28);let Pe=[2,3,4,5,16].map(oe=>Lr.grassblade[oe]).map((oe,de)=>Yg([oe.u0,1-oe.v1,oe.u1,1-oe.v0],1.3*(oe.u1-oe.u0)/(oe.v1-oe.v0)*.9,1,2,40+de)),Fe=Yg([0,0,1,1],.7,.55,2,77),We=[0,1,2,3,4].map(oe=>Lr.fern[oe]).map((oe,de)=>{let Ae=[],Ce=Wt(90+de);for(let Je=0;Je<5;Je++){let F=Je/5*Math.PI*2+Ce(),Ke=1.1+Ce()*.4,Ze=Ke*(oe.u1-oe.u0)/(oe.v1-oe.v0);Ae.push({o:[0,0,0],r:[Math.cos(F+1.57)*Ze/2,0,Math.sin(F+1.57)*Ze/2],u:[Math.cos(F)*Ke*.75,Ke*.65,Math.sin(F)*Ke*.75],nrm:[0,1,0],rect:[oe.u0,1-oe.v1,oe.u1,1-oe.v0],bottom:!0,shade:ct=>.5+.5*ct})}return Dr(Ae)}),ht=Li.pos[0],Ve=Li.pos[2],Oe=0,qe=0,re=i.grassStep;for(let oe=Ve-360;oe<Ve+60;oe+=re)for(let de=ht-220;de<ht+220;de+=re){let Ae=de+(o()-.5)*re*1.6,Ce=oe+(o()-.5)*re*1.6,Je=Math.hypot(Ae-ht,(Ce-Ve)*.8),F=Je<60?1:Math.max(.03,(60/Je)**2);if(o()>F)continue;let Ke=e.maskAt(Ae,Ce,0),Ze=e.maskAt(Ae,Ce,1),ct=e.maskAt(Ae,Ce,2),xe=e.maskAt(Ae,Ce,3);if(Ke>.15||Ze>.05||h(Ae,Ce)>1)continue;let mt=c(Ae,Ce);if(ct>.25)continue;C.setFromAxisAngle(j,o()*6.28);let ze=(.4+o()*.5)*(Je<25?.9:1.1);if(O.compose(H.set(Ae,mt-.05,Ce),C,B.set(ze,ze*(.8+o()*.5),ze)),xe>.5&&o()<.35){let D=Math.floor(o()*We.length);U("fern"+D,We[D],M,O,new He().setHSL(.22,.3,.5).multiplyScalar(1.6),!1);continue}if(Math.sin(Ae*.21)*Math.cos(Ce*.17)+Math.sin(Ae*.07+Ce*.05)>.55&&Je<140&&o()<.6)U("flower",Fe,w,O,new He(1,1,1),!1),qe++;else{let D=Math.floor(o()*Pe.length);z.setHSL(.24+(o()-.5)*.05,.45+o()*.2,.5+o()*.12).multiplyScalar(2.7),U("grass"+D,Pe[D],u,O,z.clone(),!1),Oe++}}let Me=Oa(Ug(a.leaves.image),n,{alphaTest:.4,sway:.6,color:11846810}),ye=[],Ue=(oe,de,Ae,Ce,Je)=>{let F=Jf[oe],Ke=de;for(let Ze=0;Ze<80;Ze++){let ct=F.sdf(Ke,Ce,Je);if(ct<.4){let xe=Zf(F.sdf,Ke,Ce,Je,1);if(Math.abs(xe[1])>.35)return;let mt=5+o()*6,ze=14+o()*22,Ye=Ke+xe[0]*.6,D=Je+xe[2]*.6,A=xc([-xe[2],0,xe[0]]);ye.push({o:[Ye,Ce-ze/2,D],r:[A[0]*mt/2,0,A[2]*mt/2],u:[xe[0]*.8,ze/2,xe[2]*.8],nrm:[xe[0]*.6,.8,xe[2]*.6],rect:[0,0,1,1],shade:Q=>.55+.45*(Q*.5+.5)});return}Ke+=Ae*Math.max(.4,ct*.6)}};for(let oe=-640;oe<80;oe+=9){let de=70+o()*170;o()<.55&&Ue("left",-90,-1,de,oe+(o()-.5)*6)}for(let oe=-150;oe<20;oe+=7){let de=40+o()*140;o()<.6&&Ue("right",10,1,de,oe)}for(let oe=-780;oe<-480;oe+=12){let de=50+o()*200;o()<.5&&Ue("mid",40,-1,de,oe)}if(ye.length){let oe=new nt(Dr(ye),Me);oe.name="vines",oe.castShadow=!0,oe.receiveShadow=!0,r.add(oe)}let Te=0;for(let[oe,{geo:de,mat:Ae,list:Ce,shadow:Je}]of N){let F=new pi(de,Ae,Ce.length);Ce.forEach(([Ke,Ze],ct)=>{F.setMatrixAt(ct,Ke),Ze&&F.setColorAt(ct,Ze)}),F.instanceMatrix.needsUpdate=!0,F.instanceColor&&(F.instanceColor.needsUpdate=!0),F.computeBoundingSphere(),F.castShadow=Je&&Ae!==b,F.receiveShadow=!0,F.name="veg-"+oe,r.add(F),Te+=Ce.length}return console.log(`[scene] vegetation ${me} trees, ${_e}+ cliff trees, ${Oe} grass, ${qe} flowers, ${ye.length} vines, ${N.size} batches, ${(performance.now()-s).toFixed(0)} ms`),{group:r}}function $g(a,e={}){let t=new Gt({color:e.color??928554,roughness:.06,metalness:0,envMapIntensity:1.25});return t.onBeforeCompile=n=>{n.uniforms.uTime=a,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 flow;
varying vec2 vFlow;
varying vec3 vWP;`).replace("#include <fog_vertex>",`#include <fog_vertex>
vFlow = flow;
vWP = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
				uniform float uTime;
				varying vec2 vFlow;
				varying vec3 vWP;
				${Ui}
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
			}`)},t.customProgramCacheKey=()=>"water"+(e.foam??.6)+"_"+(e.wave??.35),t}function eb({time:a,heightAt:e}){let t=new It;t.name="water";let n=[],i=[],s=[],r=ti.length,o=6,c=0;for(let U=0;U<=r;U+=3){let O=ti.at(U),C=U/r,H=Di[0]+(Di[1]-Di[0])*C+2.4,j=Ph+14*gt(.08,0,C)+5;for(let z=0;z<=o;z++){let q=-1+2*z/o,Y=O.x-O.tz*q*j,ee=O.z+O.tx*q*j;n.push(Y,H,ee),i.push(U,q)}c++}for(let U=0;U<c-1;U++)for(let O=0;O<o;O++){let C=U*(o+1)+O,B=C+1,H=C+o+1,j=H+1;s.push(C,H,B,B,H,j)}let l=new rt;l.setAttribute("position",new et(n,3)),l.setAttribute("flow",new et(i,2)),l.setIndex(s),l.computeVertexNormals();let h=l.attributes.normal;for(let U=0;U<h.count;U++)h.setXYZ(U,0,1,0);let d=new nt(l,$g(a));d.material.side=Ot,d.receiveShadow=!0,d.name="river",t.add(d);let f=new as(bn.r+1.5,48);f.rotateX(-Math.PI/2);let p=new Float32Array(f.attributes.position.count*2);for(let U=0;U<f.attributes.position.count;U++)p[U*2]=f.attributes.position.getX(U)*3,p[U*2+1]=0;f.setAttribute("flow",new st(p,2));let m=new nt(f,$g(a,{color:1124900,foam:0,wave:.06,rough:.16}));m.position.set(bn.x,bn.level-.2,bn.z),m.receiveShadow=!0,m.name="pond",t.add(m);let x=ti.at(0),b=new ge(Ff.x-x.x,Ff.z-x.z).normalize(),g=[],y=null;for(let U=0;U<=70;U+=1){let O=x.x+b.x*U,C=x.z+b.y*U,B=e(O,C);g.push([O,B,C]),y===null&&B>Di[0]+50&&(y=U)}let _=Math.min(70,(y??60)+4),v=9,u=40,w=[],M=[],S=[];for(let U=0;U<=u;U++){let O=_*(1-U/u),C=x.x+b.x*O,B=x.z+b.y*O,H=e(C,B);U===u&&(H=Di[0]+2.4);let j=1.2+2.5*(U/u),z=C-b.x*j,q=B-b.y*j;for(let Y of[-1,1])w.push(z-b.y*Y*v/2*(1+U/u*.6),H+.4,q+b.x*Y*v/2*(1+U/u*.6)),M.push(Y*.5+.5,U/u)}for(let U=0;U<u;U++){let O=U*2;S.push(O,O+1,O+2,O+1,O+3,O+2)}let R=new rt;R.setAttribute("position",new et(w,3)),R.setAttribute("fuv",new et(M,2)),R.setIndex(S),R.computeVertexNormals();let T=new Gt({color:15265520,roughness:.4,transparent:!0,depthWrite:!1,side:Ot,emissive:2304042});T.onBeforeCompile=U=>{U.uniforms.uTime=a,U.vertexShader=U.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 fuv;
varying vec2 vFuv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFuv = fuv;`),U.fragmentShader=U.fragmentShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec2 vFuv;
${Ui}`).replace("#include <color_fragment>",`#include <color_fragment>
			{
				vec2 uv = vFuv;
				float strands = vnoise( vec2( uv.x * 26.0, uv.y * 3.0 - uTime * 1.6 ) ) * 0.6 + vnoise( vec2( uv.x * 61.0, uv.y * 7.0 - uTime * 2.7 ) ) * 0.4;
				float edge = smoothstep( 0.0, 0.18, uv.x ) * smoothstep( 1.0, 0.82, uv.x );
				float a = smoothstep( 0.3, 0.75, strands ) * edge;
				a = max( a, smoothstep( 0.82, 1.0, uv.y ) * 0.85 * edge );
				diffuseColor.a = a * 0.9;
			}`)},T.customProgramCacheKey=()=>"falls";let N=new nt(R,T);return N.name="falls",N.renderOrder=2,t.add(N),console.log(`[scene] water: river ${c} rows, falls crest ${_.toFixed(0)} m from pool`),{group:t,fallsBase:new P(x.x,Di[0]+3,x.z)}}function tb({time:a,fallsBase:e}){let t=Wt(66),n=[],[i,s,r]=Ca;for(let m=0;m<46;m++){let x=t(),b=i+(t()-.5)*260*(.5+x),g=s-70-x*150+(t()-.5)*30,y=r+20+x*150+t()*30;n.push([b,g-25*x,y,34+t()*40+x*40,.13+.12*(1-x),1,.5+t()])}for(let m=0;m<60;m++){let x=-420+t()*840,b=-760-t()*220,g=30+t()*50;n.push([x,g,b,70+t()*70,.18+t()*.12,.3,.3+t()*.5])}for(let m=0;m<14;m++)n.push([e.x+(t()-.5)*30,e.y+4+t()*18,e.z+(t()-.5)*30,12+t()*14,.3,0,1.2+t()]);for(let m=0;m<24;m++){let x=-260-t()*520;n.push([80+(t()-.5)*60,-20+t()*25,x,26+t()*24,.2,.2,.5+t()])}let o=n.length,c=new Jn(2,2),l=new Bo;l.index=c.index,l.setAttribute("position",c.attributes.position),l.setAttribute("uv",c.attributes.uv);let h=new Float32Array(o*4),d=new Float32Array(o*4);n.forEach((m,x)=>{h.set([m[0],m[1],m[2],m[3]],x*4),d.set([m[4],m[5],m[6],t()*100],x*4)}),l.setAttribute("iA",new Ln(h,4)),l.setAttribute("iB",new Ln(d,4)),l.instanceCount=o;let f=new Pt({name:"Mist",transparent:!0,depthWrite:!1,uniforms:{uTime:a,uAtmos:cc.uAtmos,uGain:{value:1}},vertexShader:`
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
			${Ui}
			${Uh}
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
		`}),p=new nt(l,f);return p.frustumCulled=!1,p.renderOrder=5,p.name="mist",{mesh:p,material:f}}function k1(){let a=Wt(3),e=[];return{longBone:i=>{let s=[];for(let o=0;o<=10;o++){let c=o/10,l=.035+.05*Math.pow(Math.abs(c-.5)*2,4);s.push(new ge(l,(c-.5)*i))}return new Co(s,7)},skull:()=>{let i=new on(.12,14,10);i.scale(1,.95,1.2);let s=new on(.08,10,6);return s.scale(1.05,.6,1),s.translate(0,-.1,.06),[i,s]},r:a}}function nb({heightAt:a}){let e=new It;e.name="story";let t=new Gt({color:15327951,roughness:.55,metalness:0}),n=new Gt({color:1380621,roughness:1}),{longBone:i,skull:s,r}=k1(),o=Fn.at(64),c=o.x-o.tz*8,l=o.z+o.tx*8,h=a(c,l),d=new At({map:Dg(),transparent:!0,depthWrite:!1,blending:An,color:new He(4.5,3.2,1.4),fog:!0}),f=new nt(new Jn(9,9),d);f.rotation.x=-Math.PI/2,f.position.set(c,h+.12,l),f.renderOrder=3,e.add(f);let p=new Pt({transparent:!0,depthWrite:!1,blending:An,side:Ot,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
			void main(){
				float a = pow( 1.0 - vUv.y, 3.0 ) * ( 0.55 + 0.45 * sin( vUv.x * 62.83 + uTime * 0.8 ) * sin( vUv.x * 25.13 - uTime * 0.5 ) );
				gl_FragColor = vec4( vec3( 1.0, 0.78, 0.38 ) * a * 0.16, 1.0 );
			}`}),m=new nt(new Gn(4.2,4.4,12,40,1,!0),p);m.position.set(c,h+6,l),m.renderOrder=4,e.add(m);let x=new hs(16762992,60,30,2);x.position.set(c,h+2.5,l),e.add(x);let b=[],g=(v,u,w,M)=>{let S=Fn.at(v),R=S.x+S.tz*u*4.2,T=S.z-S.tx*u*4.2,N=a(R,T),U=Math.round(9*w);for(let O=0;O<U;O++){let C=i(.3+r()*.25),B=new Xe().compose(new P(R+(r()-.5)*1.1*w,N+.05+r()*.08,T+(r()-.5)*1.1*w),new Rt().setFromEuler(new Sn(Math.PI/2+(r()-.5)*.4,r()*6.28,0,"YXZ")),new P(1,1,1));C.applyMatrix4(B),b.push(C)}for(let O of s())O.applyMatrix4(new Xe().compose(new P(R+.2,N+.12,T),new Rt().setFromEuler(new Sn(.3,r()*6.28,.2)),new P(1,1,1))),b.push(O);if(M){let O=new P(S.tx,0,S.tz),C=new P(-S.tz,0,S.tx),B=new P(R+C.x*1.6,N+.08,T+C.z*1.6);for(let H=0;H<14;H++){let j=new on(.04,6,4);j.translate(B.x+O.x*H*.06,B.y,B.z+O.z*H*.06),b.push(j)}for(let H=0;H<6;H++)for(let j of[-1,1]){let z=new rs(.15,.012,4,10,Math.PI*.8);z.rotateY(j>0?0:Math.PI),z.rotateX(Math.PI/2),z.applyMatrix4(new Xe().makeRotationY(Math.atan2(O.x,O.z))),z.translate(B.x+O.x*(.25+H*.07),B.y+.06,B.z+O.z*(.25+H*.07)),b.push(z)}for(let[H,j]of[[.86,.45],[.86,-.45],[-.1,.25],[-.1,-.25]]){let z=i(.75);z.applyMatrix4(new Xe().compose(new P(B.x+O.x*(H-.3)+C.x*j*.5,B.y+.02,B.z+O.z*(H-.3)+C.z*j*.5),new Rt().setFromUnitVectors(new P(0,1,0),O.clone().addScaledVector(C,j*.6).normalize()),new P(1,1,1))),b.push(z)}for(let H of s())H.translate(B.x+O.x*1,B.y+.08,B.z+O.z*1),b.push(H)}};g(150,1,1,!1),g(560,-1,1.3,!1),g(Fn.length-30,1,1.6,!0);let y=O1(b),_=new nt(y,t);return _.castShadow=!0,_.receiveShadow=!0,_.name="bones",e.add(_),{group:e,ring:f.position.clone(),update(v){p.uniforms.uTime.value=v,d.opacity=.75+.25*Math.sin(v*1.3),x.intensity=50+15*Math.sin(v*1.3),f.rotation.z=v*.05}}}function O1(a){let e=0,t=a.map(o=>{let c=o.index?o.toNonIndexed():o;for(let l of Object.keys(c.attributes))l!=="position"&&l!=="normal"&&c.deleteAttribute(l);return e+=c.attributes.position.count,c}),n=new Float32Array(e*3),i=new Float32Array(e*3),s=0;for(let o of t)n.set(o.attributes.position.array,s*3),i.set(o.attributes.normal.array,s*3),s+=o.attributes.position.count;let r=new rt;return r.setAttribute("position",new st(n,3)),r.setAttribute("normal",new st(i,3)),r.computeBoundingSphere(),r}function ib(a,e,t){let n=a.position.clone(),i=0,s=0,r={},o=null,c=null,l=-1e9,h=new P,d=new P,f=new P,p=new P;function m(u=i,w=s,M=d){return M.set(Math.sin(u)*Math.cos(w),Math.sin(w),-Math.cos(u)*Math.cos(w))}function x(u,w,M){n.copy(u);let S=p.copy(w).sub(u).normalize();i=Math.atan2(S.x,-S.z),s=Math.asin(Un.clamp(S.y,-1,1)),M&&(a.fov=M,a.updateProjectionMatrix()),c=null,g()}function b(u,w,M,S=2.8){let R=new P().copy(w).sub(u).normalize(),T=Math.atan2(R.x,-R.z);for(;T-i>Math.PI;)T-=Math.PI*2;for(;T-i<-Math.PI;)T+=Math.PI*2;c={t:0,dur:S,p0:n.clone(),p1:u.clone(),y0:i,y1:T,q0:s,q1:Math.asin(Un.clamp(R.y,-1,1)),f0:a.fov,f1:M||a.fov}}function g(){a.position.copy(n),a.lookAt(p.copy(n).add(m()))}e.addEventListener("pointerdown",u=>{o={x:u.clientX,y:u.clientY,id:u.pointerId},e.setPointerCapture?.(u.pointerId),l=performance.now(),c=null}),e.addEventListener("pointermove",u=>{if(!o||o.id!==u.pointerId)return;let w=.0028*a.fov/55;i+=(u.clientX-o.x)*w,s=Un.clamp(s-(u.clientY-o.y)*w,-1.45,1.45),o.x=u.clientX,o.y=u.clientY,l=performance.now()});let y=()=>{o=null};e.addEventListener("pointerup",y),e.addEventListener("pointercancel",y),e.addEventListener("wheel",u=>{u.preventDefault();let w=Math.max(4,n.y-t(n.x,n.z));n.addScaledVector(m(),-Math.sign(u.deltaY)*Math.min(80,3+w*.12)),l=performance.now(),c=null},{passive:!1}),addEventListener("keydown",u=>{r[u.code]=!0,(u.code.startsWith("Key")||u.code.startsWith("Arrow"))&&(l=performance.now(),c=null)}),addEventListener("keyup",u=>{r[u.code]=!1}),addEventListener("blur",()=>{for(let u in r)r[u]=!1});let _=null;e.addEventListener("touchstart",u=>{u.touches.length===2&&(_=Math.hypot(u.touches[0].clientX-u.touches[1].clientX,u.touches[0].clientY-u.touches[1].clientY),o=null)},{passive:!0}),e.addEventListener("touchmove",u=>{if(_&&u.touches.length===2){let w=Math.hypot(u.touches[0].clientX-u.touches[1].clientX,u.touches[0].clientY-u.touches[1].clientY);n.addScaledVector(m(),(w-_)*.6),_=w}},{passive:!0}),e.addEventListener("touchend",()=>{_=null},{passive:!0});function v(u){if(c){c.t+=u;let M=Math.min(1,c.t/c.dur),S=M<.5?4*M*M*M:1-Math.pow(-2*M+2,3)/2;n.lerpVectors(c.p0,c.p1,S);let R=Math.sin(M*Math.PI)*Math.min(160,c.p0.distanceTo(c.p1)*.18);n.y+=R,i=c.y0+(c.y1-c.y0)*S,s=c.q0+(c.q1-c.q0)*S,a.fov=c.f0+(c.f1-c.f0)*S,a.updateProjectionMatrix(),M>=1&&(c=null)}else{let M=Math.max(2,n.y-t(n.x,n.z)),S=(r.ShiftLeft||r.ShiftRight?5:1)*Math.min(260,9+M*.5);m(i,0,d),f.set(Math.cos(i),0,Math.sin(i));let R=new P;(r.KeyW||r.ArrowUp)&&R.add(d),(r.KeyS||r.ArrowDown)&&R.sub(d),(r.KeyD||r.ArrowRight)&&R.add(f),(r.KeyA||r.ArrowLeft)&&R.sub(f),(r.KeyE||r.Space)&&(R.y+=1),(r.KeyQ||r.KeyC)&&(R.y-=1),R.lengthSq()>0&&R.normalize().multiplyScalar(S),h.lerp(R,1-Math.exp(-u*6)),n.addScaledVector(h,u)}let w=t(n.x,n.z)+1.6;n.y<w&&(n.y=w),g()}return{update:v,setView:x,flyTo:b,get idle(){return performance.now()-l},get flying(){return!!c},get yaw(){return i},get pitch(){return s}}}function $h(a){let e=new Map,t=new Map,n=a.clone();return ab(a,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,r=e.get(i),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function ab(a,e,t){t(a,e);for(let n=0;n<a.children.length;n++)ab(a.children[n],e.children[n],t)}var ed=class extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new su(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new td(t,bt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new td(t,bt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new vu(t)})}load(e,t,n,i){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let l=ia.extractUrlBase(e);r=ia.resolveURL(l,this.path)}else r=ia.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new cs(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,r={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===lb){try{r[bt.KHR_BINARY_GLTF]=new yu(e)}catch(d){i&&i(d);return}s=JSON.parse(r[bt.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Tu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let d=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(d){case bt.KHR_MATERIALS_UNLIT:r[d]=new iu;break;case bt.KHR_DRACO_MESH_COMPRESSION:r[d]=new Mu(s,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:r[d]=new _u;break;case bt.KHR_MESH_QUANTIZATION:r[d]=new Su;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function F1(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}function Bt(a,e,t){let n=a.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},nu=class{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new He(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],rn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Fo(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new hs(h),l.distance=d;break;case"spot":l=new Oo(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Fi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},iu=class{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return At}extendParams(e,t,n){let i=[];e.color=new He(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],rn),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Et))}return Promise.all(i)}},au=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ge(s,s)}return Promise.all(i)}},ru=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}},ou=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},cu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},lu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],rn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Et)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},hu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},du=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(s[0],s[1],s[2],rn),Promise.all(i)}},fu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},uu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(s[0],s[1],s[2],rn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Et)),Promise.all(i)}},pu=class{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},mu=class{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?En:null}extendMaterialParams(e,t){let n=Bt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},gu=class{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}},bu=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}},xu=class{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=i.images[r.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,r.source,c)}},td=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(p){return p.buffer}):r.ready.then(function(){let p=new ArrayBuffer(h*d);return r.decodeGltfBuffer(new Uint8Array(p),h,d,f,i.mode,i.filter),p})})}else return null}},vu=class{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==ai.TRIANGLES&&l.mode!==ai.TRIANGLE_STRIP&&l.mode!==ai.TRIANGLE_FAN&&l.mode!==void 0)return null;let r=n.extensions[this.name].attributes,o=[],c={};for(let l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],f=l[0].count,p=[];for(let m of d){let x=new Xe,b=new P,g=new Rt,y=new P(1,1,1),_=new pi(m.geometry,m.material,f);for(let u=0;u<f;u++)c.TRANSLATION&&b.fromBufferAttribute(c.TRANSLATION,u),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,u),c.SCALE&&y.fromBufferAttribute(c.SCALE,u),_.setMatrixAt(u,x.compose(b,g,y));let v=null;for(let u in c)if(u==="_COLOR_0"){let w=c[u];_.instanceColor=new Ln(w.array,w.itemSize,w.normalized)}else if(u!=="TRANSLATION"&&u!=="ROTATION"&&u!=="SCALE"){if(v===null){let M=_.geometry;v=new rt,v.name=M.name;for(let S in M.attributes)v.setAttribute(S,M.attributes[S]);for(let S in M.morphAttributes)v.morphAttributes[S]=M.morphAttributes[S];M.index!==null&&v.setIndex(M.index),v.morphTargetsRelative=M.morphTargetsRelative;for(let S of M.groups)v.addGroup(S.start,S.count,S.materialIndex);M.boundingBox!==null&&(v.boundingBox=M.boundingBox.clone()),M.boundingSphere!==null&&(v.boundingSphere=M.boundingSphere.clone()),v.drawRange.start=M.drawRange.start,v.drawRange.count=M.drawRange.count,v.userData=Object.assign({},M.userData),_.geometry=v}let w=c[u];v.setAttribute(u,new Ln(w.array,w.itemSize,w.normalized))}wt.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),p.push(_)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},lb="glTF",vc=12,sb={JSON:1313821514,BIN:5130562},yu=class{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,vc),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==lb)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-vc,s=new DataView(e,vc),r=0;for(;r<i;){let o=s.getUint32(r,!0);r+=4;let c=s.getUint32(r,!0);if(r+=4,c===sb.JSON){let l=new Uint8Array(e,vc+r,o);this.content=n.decode(l)}else if(c===sb.BIN){let l=vc+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Mu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(let h in r){let d=Eu[h]||h.toLowerCase();o[d]=r[h]}for(let h in e.attributes){let d=Eu[h]||h.toLowerCase();if(r[h]!==void 0){let f=n.accessors[e.attributes[h]],p=Ur[f.componentType];l[d]=p.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,f){i.decodeDracoFile(h,function(p){for(let m in p.attributes){let x=p.attributes[m],b=c[m];b!==void 0&&(x.normalized=b)}d(p)},o,l,rn,f)})})}},_u=class{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Su=class{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}},nd=class extends Ri{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,d=(n-t)/h,f=d*d,p=f*d,m=e*l,x=m-l,b=-2*p+3*f,g=p-f,y=1-b,_=g-f+d;for(let v=0;v!==o;v++){let u=r[x+v+o],w=r[x+v+c]*h,M=r[m+v+o],S=r[m+v]*h;s[v]=y*u+_*w+b*M+g*S}return s}},B1=new Rt,wu=class extends nd{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return B1.fromArray(s).normalize().toArray(s),s}},ai={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rb={9728:kt,9729:St,9984:Ul,9985:ur,9986:gs,9987:Yt},ob={33071:Nn,33648:Ys,10497:pn},$f={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Eu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fa={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},z1={CUBICSPLINE:void 0,LINEAR:Qa,STEP:Za},eu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function H1(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new Gt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ii})),a.DefaultMaterial}function Ss(a,e,t){for(let n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function G1(a,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);let r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(n){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):a.attributes.position;r.push(f)}if(i){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):a.attributes.normal;o.push(f)}if(s){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):a.attributes.color;c.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],f=l[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=d),s&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function V1(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function j1(a){let e,t=a.extensions&&a.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+tu(t.attributes):e=a.indices+":"+tu(a.attributes)+":"+a.mode,a.targets!==void 0)for(let n=0,i=a.targets.length;n<i;n++)e+=":"+tu(a.targets[n]);return e}function tu(a){let e="",t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Au(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function W1(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":a.search(/\.ktx2($|\?)/i)>0||a.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var q1=new Xe,Tu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new F1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&r<98?(this.textureLoader=new ls(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new zo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cs(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){let o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};return Ss(s,o,i),Fi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let r=t[i].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(r,o)=>{let c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(let[l,h]of r.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,r){n.load(ia.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let r=$f[i.type],o=Ur[i.componentType],c=i.normalized===!0,l=new o(i.count*r);return Promise.resolve(new st(l,r,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){let o=r[0],c=$f[i.type],l=Ur[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,b;if(p&&p!==d){let g=Math.floor(f/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,_=t.cache.get(y);_||(x=new l(o,g*p,i.count*p/h),_=new ts(x,p/h),t.cache.add(y,_)),b=new Ma(_,c,f%p/h,m)}else o===null?x=new l(i.count*c):x=new l(o,f,i.count*c),b=new st(x,c,m);if(i.sparse!==void 0){let g=$f.SCALAR,y=Ur[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,u=new y(r[1],_,i.sparse.count*g),w=new l(r[2],v,i.sparse.count*c);o!==null&&(b=new st(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let M=0,S=u.length;M<S;M++){let R=u[M];if(b.setX(R,w[M*c]),c>=2&&b.setY(R,w[M*c+1]),c>=3&&b.setZ(R,w[M*c+2]),c>=4&&b.setW(R,w[M*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=m}return b})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s],o=this.textureLoader;if(r.uri){let c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,r=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(s.samplers||{})[r.sampler]||{};return h.magFilter=rb[f.magFilter]||St,h.minFilter=rb[f.minFilter]||Yt,h.wrapS=ob[f.wrapS]||pn,h.wrapT=ob[f.wrapT]||pn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==kt&&h.minFilter!==St,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let r=i.images[e],o=self.URL||self.webkitURL,c=r.uri||"",l=!1,h;if(t.isKTX2Loader===!0&&r.bufferView!==void 0)h=n.getDependency("bufferView",r.bufferView).then(function(f){return new Promise(function(p,m){t.parse(f,p,m)})});else{if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(f){l=!0;let p=new Blob([f],{type:r.mimeType});return c=o.createObjectURL(p),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(f){return new Promise(function(p,m){let x=p;t.isImageBitmapLoader===!0&&(x=function(b){let g=new Kt(b);g.needsUpdate=!0,p(g)}),t.load(ia.resolveURL(f,s.path),x,void 0,m)})})}let d=h.then(function(f){return l===!0&&o.revokeObjectURL(c),Fi(f,r),f.userData.mimeType=r.mimeType||W1(r.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[bt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(r);r=s.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,c)}}return i!==void 0&&(r.colorSpace=i),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Sa,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ir,mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),r&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Gt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],r,o={},c=s.extensions||{},l=[];if(c[bt.KHR_MATERIALS_UNLIT]){let d=i[bt.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{let d=s.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],rn),o.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Et)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ot);let h=s.alphaMode||eu.OPAQUE;if(h===eu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===eu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==At&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ge(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&r!==At&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==At){let d=s.emissiveFactor;o.emissive=new He().setRGB(d[0],d[1],d[2],rn)}return s.emissiveTexture!==void 0&&r!==At&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Et)),Promise.all(l).then(function(){let d=new r(o);return s.name&&(d.name=s.name),Fi(d,s),t.associations.set(d,{materials:e}),s.extensions&&Ss(i,d,s),d})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return cb(c,o,t)})}let r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=j1(l),d=i[h];if(d)r.push(d.promise);else{let f;l.extensions&&l.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=cb(new rt,l,t),l.mode===ai.TRIANGLE_STRIP?f=f.then(p=>Vf(p,tc)):l.mode===ai.TRIANGLE_FAN&&(f=f.then(p=>Vf(p,gr))),i[h]={primitive:l,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let c=0,l=r.length;c<l;c++){let h=r[c].material===void 0?H1(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let p=0,m=h.length;p<m;p++){let x=h[p],b=r[p],g,y=l[p];if(b.mode===ai.TRIANGLES||b.mode===ai.TRIANGLE_STRIP||b.mode===ai.TRIANGLE_FAN||b.mode===void 0){let _=s.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");_&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=_&&v?new fo(x,y):new nt(x,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(b.mode===ai.LINES)g=new po(x,y);else if(b.mode===ai.LINE_STRIP)g=new ns(x,y);else if(b.mode===ai.LINE_LOOP)g=new mo(x,y);else if(b.mode===ai.POINTS)g=new is(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(g.geometry.morphAttributes).length>0&&V1(g,s),g.name=t.createUniqueName(s.name||"mesh_"+e),Fi(g,s),b.extensions&&Ss(i,g,b),t.assignFinalMaterial(g),d.push(g)}for(let p=0,m=d.length;p<m;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&Ss(i,d[0],s),d[0];let f=new It;s.extensions&&Ss(i,f,s),t.associations.set(f,{meshes:e});for(let p=0,m=d.length;p<m;p++)f.add(d[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(Un.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Zn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),r=i,o=[],c=[];for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d){o.push(d);let f=new Xe;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new uo(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let d=0,f=i.channels.length;d<f;d++){let p=i.channels[d],m=i.samplers[p.sampler],x=p.target,b=x.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(r.push(this.getDependency("node",b)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",y)),l.push(m),h.push(x))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let f=d[0],p=d[1],m=d[2],x=d[3],b=d[4],g=[];for(let _=0,v=f.length;_<v;_++){let u=f[_],w=p[_],M=m[_],S=x[_],R=b[_];if(u===void 0)continue;u.updateMatrix&&u.updateMatrix();let T=n._createAnimationTracks(u,w,M,S,R);if(T)for(let N=0;N<T.length;N++)g.push(T[N])}let y=new os(s,void 0,g);return Fi(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),r})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(r),c]).then(function(l){let h=l[0],d=l[1],f=l[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,q1)});for(let p=0,m=d.length;p<m;p++)h.add(d[p]);if(h.userData.pivot!==void 0&&d.length>0){let p=h.userData.pivot,m=d[0];h.pivot=new P().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new nr:l.length>1?h=new It:l.length===1?h=l[0]:h=new wt,h!==l[0])for(let d=0,f=l.length;d<f;d++)h.add(l[d]);if(s.name&&(h.userData.name=s.name,h.name=r),Fi(h,s),s.extensions&&Ss(n,h,s),s.matrix!==void 0){let d=new Xe;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let d=i.associations.get(h);i.associations.set(h,{...d})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new It;n.name&&(s.name=i.createUniqueName(n.name)),Fi(s,n),n.extensions&&Ss(t,s,n);let r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(i.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){let f=c[h];f.parent!==null?s.add($h(f)):s.add(f)}let l=h=>{let d=new Map;for(let[f,p]of i.associations)(f instanceof mn||f instanceof Kt)&&d.set(f,p);return h.traverse(f=>{let p=i.associations.get(f);p!=null&&d.set(f,p)}),d};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let r=[],o=e.name?e.name:e.uuid,c=[];function l(p){p.morphTargetInfluences&&c.push(p.name?p.name:p.uuid)}Fa[s.path]===Fa.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Fa[s.path]){case Fa.weights:h=ea;break;case Fa.rotation:h=ta;break;case Fa.translation:case Fa.scale:h=Aa;break;default:n.itemSize===1?h=ea:h=Aa;break}let d=i.interpolation!==void 0?z1[i.interpolation]:Qa,f=this._getArrayFromAccessor(n);for(let p=0,m=c.length;p<m;p++){let x=new h(c[p]+"."+Fa[s.path],t.array,f,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),r.push(x)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Au(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ta?wu:nd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function X1(a,e,t){let n=e.attributes,i=new wn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){let h=Au(Ur[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new P,c=new P;for(let l=0,h=s.length;l<h;l++){let d=s[l];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],p=f.min,m=f.max;if(p!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),f.normalized){let x=Au(Ur[f.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;let r=new Pn;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function cb(a,e,t){let n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(c){a.setAttribute(o,c)})}for(let r in n){let o=Eu[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){let r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return ut.workingColorSpace!==rn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Fi(a,e),X1(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?G1(a,e.targets,t):a})}var hb={hit:["nl-dupu.mp3","gugugaga-1.mp3","nl-gajiaosai.mp3"],crit:["feidudu.mp3","nl-gagadilashui.mp3"],kill:["gugugaga-2.mp3","feidudu-echo.mp3"],hurt:["daodun.mp3","daodun-2.mp3"],skill:["nl-hola-gabadie.mp3","naiwa-pet-laugh.wav"],ult:["naiwa-baoxiao.mp3"],boss:["shanshenbu.mp3"],elite:["banana-cry-1.mp3","banana-cry-2.mp3"],level:["oiia-1.mp3","oiia-2.mp3"]},K1={hit:.09,crit:.25,kill:.12,hurt:.4,skill:.6,level:1,ult:3,boss:5,elite:2},Y1={hit:.45,kill:.6,crit:.9,level:2.2,elite:2.5};function db(){let a=null,e,t,n,i=0,s=0,r={},o={},c={master:.8,sfx:.9,bgm:.45};function l(){if(a)return a.state==="suspended"&&a.resume(),a;a=new(window.AudioContext||window.webkitAudioContext),e=a.createGain(),e.connect(a.destination);let S=a.createDynamicsCompressor();S.connect(e),t=a.createGain(),t.connect(S),n=a.createGain(),n.connect(S),h();for(let R of Object.values(hb))R.forEach(d);return a}function h(){a&&(e.gain.value=c.master,t.gain.value=c.sfx,n.gain.value=c.bgm)}function d(S){return r[S]||(r[S]=fetch(vi("audio/"+S)).then(R=>R.arrayBuffer()).then(R=>a.decodeAudioData(R)).then(R=>r[S]=R).catch(()=>null)),r[S]}function f(S,{rate:R=1,gain:T=1}={}){if(!a)return;let N=a.currentTime;if(o[S]&&N-o[S]<(K1[S]||.1))return;o[S]=N;let U=hb[S],O=r[U[Math.random()*U.length|0]];if(!O||O.then)return p(S);let C=a.createBufferSource();C.buffer=O,C.playbackRate.value=R*(.92+Math.random()*.16);let B=a.createGain();B.gain.value=T,C.connect(B).connect(t);let H=Y1[S];C.start(N,0,H),H&&(B.gain.setValueAtTime(T,N+H-.08),B.gain.linearRampToValueAtTime(0,N+H))}function p(S){let R=a.createOscillator(),T=a.createGain(),N=a.currentTime;R.type="square",R.frequency.setValueAtTime(S==="hurt"?160:660,N),R.frequency.exponentialRampToValueAtTime(80,N+.12),T.gain.setValueAtTime(.15,N),T.gain.exponentialRampToValueAtTime(.001,N+.14),R.connect(T).connect(t),R.start(N),R.stop(N+.15)}function m(S=1){if(!a)return;let R=a.currentTime,T=a.sampleRate*.4*S,N=a.createBuffer(1,T,a.sampleRate),U=N.getChannelData(0);for(let z=0;z<T;z++)U[z]=(Math.random()*2-1)*(1-z/T)**2;let O=a.createBufferSource();O.buffer=N;let C=a.createBiquadFilter();C.type="lowpass",C.frequency.value=700;let B=a.createGain();B.gain.value=.5*S,O.connect(C).connect(B).connect(t),O.start(R);let H=a.createOscillator(),j=a.createGain();H.frequency.setValueAtTime(120,R),H.frequency.exponentialRampToValueAtTime(35,R+.3),j.gain.setValueAtTime(.6*S,R),j.gain.exponentialRampToValueAtTime(.001,R+.35),H.connect(j).connect(t),H.start(R),H.stop(R+.4)}let x=[0,2,4,7,9,12,14,16],b=[0,2,4,2,5,4,2,0,3,4,5,7,5,4,2,4],g=[0,0,7,7,5,5,3,4],y=0,_=!1,v=0;function u(S,R,T,N,U){let O=a.createOscillator(),C=a.createGain();O.type=N,O.frequency.value=S,C.gain.setValueAtTime(0,R),C.gain.linearRampToValueAtTime(U,R+.01),C.gain.exponentialRampToValueAtTime(.001,R+T),O.connect(C).connect(n),O.start(R),O.stop(R+T+.02)}function w(S,R){if(R){let H=a.createOscillator(),j=a.createGain();H.frequency.setValueAtTime(150,S),H.frequency.exponentialRampToValueAtTime(40,S+.12),j.gain.setValueAtTime(.7,S),j.gain.exponentialRampToValueAtTime(.001,S+.15),H.connect(j).connect(n),H.start(S),H.stop(S+.16);return}let T=a.sampleRate*.05,N=a.createBuffer(1,T,a.sampleRate),U=N.getChannelData(0);for(let H=0;H<T;H++)U[H]=(Math.random()*2-1)*(1-H/T);let O=a.createBufferSource(),C=a.createBiquadFilter(),B=a.createGain();O.buffer=N,C.type="highpass",C.frequency.value=6e3,B.gain.value=.25,O.connect(C).connect(B).connect(n),O.start(S)}function M(){if(!_)return;let S=132+y*28,R=60/S/2,T=220*(y?1.19:1);for(;v<a.currentTime+.25;){let N=s%16,U=C=>T*2**(C/12);N%4===0&&w(v,!0),N%2===1&&w(v,!1),N%2===0&&u(U(g[(s>>1)%8]-12),v,R*1.8,"triangle",.32);let O=b[(s+(s>>5)%2*3)%16];s*7%5!==0&&u(U(x[O%8]+12),v,R*.9,y?"sawtooth":"square",.07),v+=R,s++}i=setTimeout(M,60)}return{unlock:l,play:f,boom:m,startBgm(){l(),!_&&(_=!0,v=a.currentTime+.1,M())},stopBgm(){_=!1,clearTimeout(i)},setIntense(S){y=S?1:0},vol:c,apply:h}}var vn={x:20,z:-120,r:105},Ru={wukong:{name:"\u5976\u5A03\xB7\u5B59\u609F\u7A7A",file:"wukong.glb",icon:"wukong.webp",hp:160,speed:7.8,desc:"\u81EA\u52A8\u91D1\u7B8D\u68D2\u6A2A\u626B + \u70ED\u6897\u5F39\u5E55",weapon:"staff",skills:["clone","ring","thunder","shield","push","bbq","aura","log"],ult:"\u4E03\u5341\u4E8C\u53D8\xB7\u5DE8\u5927\u5316"}},id=["\u54C8\u54C8\u54C8","\u7EF7\u4E0D\u4F4F\u4E86","666","\u5178","\u6025\u4E86","\u7834\u9632\u4E86","\u5C0A\u561F\u5047\u561F","\u5495\u5495\u560E\u560E","\u5976\u9F99","\u54E6\u54BF\u554A","\u9000\u9000\u9000","\u82AD\u6BD4Q","\u6CF0\u88E4\u8FA3","\u9065\u9065\u9886\u5148","\u4F9D\u6258\u7B54\u8FA9"],fb=["\u6025\u4E86","\u5C31\u8FD9\uFF1F","\u4F60\u4E2A\u8001\u516D","\u6211\u771F\u670D\u4E86","\u7B54\u8FA9","\u4E00\u773C\u4E01\u771F"],ad={clone:{name:"\u5206\u8EAB\u6BEB\u6BDB",desc:"\u53EC\u5524\u4F1A\u81EA\u52A8\u6253\u602A\u7684\u5206\u8EAB"},ring:{name:"\u753B\u5730\u4E3A\u7262",desc:"\u811A\u4E0B\u91D1\u5708\uFF0C\u5708\u5185\u6301\u7EED\u4F24\u5BB3"},thunder:{name:"\u5C0F\u53D1\u96F7\u9706",desc:"\u6BCF 3 \u79D2\u968F\u673A\u5288 3 \u9053\u5C0F\u96F7"},shield:{name:"\u54C8\u5B57\u62A4\u76FE",desc:'\u51E0\u4E2A"\u54C8"\u5B57\u7ED5\u8EAB\u65CB\u8F6C\u4F24\u5BB3'},push:{name:"\u9000\uFF01\u9000\uFF01\u9000\uFF01",desc:"\u5468\u671F\u6027\u51FB\u9000\u51B2\u51FB\u6CE2"},bbq:{name:"\u82AD\u6BD4Q\u4E86",desc:"\u654C\u4EBA\u6B7B\u4EA1\u65F6\u539F\u5730\u7740\u706B\u7206\u70B8"},aura:{name:"\u5C2C\u7B11\u5149\u73AF",desc:"\u8EAB\u8FB9\u6301\u7EED\u4F24\u5BB3\u5708"},log:{name:"\u6EDA\u6728",desc:"\u6EDA\u6728\uFF1A\u4EC0\u4E48\u4E5F\u4E0D\u4F1A\u53D1\u751F\uFF08\u5B9E\u9645\uFF1A\u6728\u5934\u6EDA\u8FC7\u53BB\u78BE\u602A\uFF09"}};function pb({scene:a,camera:e,renderer:t,dom:n,heightAt:i,onExit:s}){let r=(E,k)=>i(E,k),o=new ed,c={},l=new ge,h=new P,d=new Go,f=new Hn(new P(0,1,0),0),p=!1,m={},x=db(),b=1,g=["\u4FEF\u89C6","\u659C\u89C6","\u5E73\u89C6"],y=0,_=0,v=ne(),u=null;addEventListener("keydown",E=>{c[E.code]=!0,!(!u||u.paused)&&(E.code==="Space"&&Be(),E.code==="KeyQ"&&Mt(),E.code==="Escape"&&X(),E.code==="KeyV"&&(b=(b+1)%3,ri("\u89C6\u89D2\uFF1A"+g[b])))}),addEventListener("keyup",E=>{c[E.code]=!1}),addEventListener("blur",()=>{for(let E in c)c[E]=!1;p=!1}),n.addEventListener("pointermove",E=>{p&&b===2&&(_-=E.movementX*.006)}),n.addEventListener("pointermove",E=>{l.set(E.clientX/innerWidth*2-1,-E.clientY/innerHeight*2+1)}),n.addEventListener("pointerdown",E=>{p=!0,l.set(E.clientX/innerWidth*2-1,-E.clientY/innerHeight*2+1)}),addEventListener("pointerup",()=>{p=!1});let w=ub("rgba(0,0,0,0.55)","rgba(0,0,0,0)"),M=new At({map:w,transparent:!0,depthWrite:!1}),S=new Jn(1,1).rotateX(-Math.PI/2),R={imp:{hp:48,speed:3.6,r:.55,dmg:9,xp:1,color:15327951,scale:1,cost:1},wisp:{hp:30,speed:4.4,r:.45,dmg:7,xp:2,color:10124543,scale:.9,cost:1,emissive:4926106,shoot:3.2},brute:{hp:320,speed:2.6,r:1.1,dmg:20,xp:6,color:14207400,scale:2,cost:6,charge:5},elite:{hp:1800,speed:3,r:1.3,dmg:28,xp:30,color:15909198,scale:2.6,cost:30,emissive:5913088,slam:4,charge:6},boss:{hp:22e3,speed:2.8,r:2.6,dmg:35,xp:200,color:16117990,scale:5.5,cost:0,emissive:3342336}},T=420,N=(()=>{let E=new vo(.32,.6,3,8).translate(0,.65,0),k=new on(.34,10,8).scale(1,.9,1.1).translate(0,1.45,.02),L=new on(.08,6,4).translate(-.12,1.48,.3),W=L.clone().translate(.24,0,0);return Z1([E,k,L,W])})(),U={};for(let[E,k]of Object.entries(R)){let L=new pi(N,new or({color:k.color,emissive:k.emissive||0}),E==="boss"?2:T);L.count=0,L.frustumCulled=!1,L.instanceMatrix.setUsage(ic),L.instanceColor=new Ln(new Float32Array(L.instanceMatrix.count*3).fill(1),3),U[E]=L}let O=new pi(S,M,T+2);O.frustumCulled=!1,O.count=0;let C=600,B=new pi(new No(.22),new At({color:16769126}),C);B.frustumCulled=!1,B.count=0;let H={};function j(E,k="#ffd54a"){let L=E+k;if(H[L])return H[L];let W=document.createElement("canvas");W.width=Math.max(256,E.length*70+40),W.height=96;let G=W.getContext("2d");G.font='bold 64px "PingFang SC","Microsoft YaHei",sans-serif',G.textAlign="center",G.textBaseline="middle",G.lineWidth=10,G.strokeStyle="#3a1d00",G.strokeText(E,W.width/2,50),G.fillStyle=k,G.fillText(E,W.width/2,50),H.aspect=W.width/96;let Z=new Ai(W);return Z.colorSpace=Et,H[L]=new tr({map:Z,depthWrite:!1,fog:!1})}let z=new It;z.name="game",z.add(O,B,...Object.values(U));let q=new Po(.9,1,48).rotateX(-Math.PI/2),Y=new as(1,40).rotateX(-Math.PI/2),ee=new Gn(.12,.25,30,6).translate(0,15,0),me=new Gn(.9,.9,7,10).rotateZ(Math.PI/2),_e=new or({color:8015658}),ie=new At({color:11635967}),be=new on(.28,10,8),Pe=new rs(1,.08,4,24,Math.PI*.9).rotateX(Math.PI/2);function Fe(E,k,L){z.add(E),u.fx.push({mesh:E,life:k,t:0,update:L})}let Ie=2500,We=new Float32Array(Ie*3),ht=new Float32Array(Ie*3),Ve=new Float32Array(Ie*3),Oe=new Float32Array(Ie),qe=new Float32Array(Ie).fill(1),re=new Float32Array(Ie*3),Me=0,ye=new rt;ye.setAttribute("position",new st(We,3).setUsage(ic)),ye.setAttribute("color",new st(ht,3).setUsage(ic));let Ue=ub("rgba(255,255,255,1)","rgba(255,255,255,0)"),Te=new is(ye,new Sa({size:.7,map:Ue,vertexColors:!0,transparent:!0,depthWrite:!1,blending:An,fog:!1}));Te.frustumCulled=!1;let oe=new He;function de(E,k,L,W,G,Z=8,K=4,J=.6){oe.set(G);for(let ue=0;ue<W;ue++){let se=Me;Me=(Me+1)%Ie;let $=Math.random()*6.283,je=Z*(.3+Math.random());We[se*3]=E,We[se*3+1]=k,We[se*3+2]=L,Ve[se*3]=Math.cos($)*je,Ve[se*3+1]=K*(.4+Math.random()),Ve[se*3+2]=Math.sin($)*je;let at=.7+Math.random()*.6;re[se*3]=oe.r*at,re[se*3+1]=oe.g*at,re[se*3+2]=oe.b*at,Oe[se]=qe[se]=J*(.6+Math.random()*.8)}}function Ae(E){for(let k=0;k<Ie;k++){if(Oe[k]<=0){ht[k*3]&&(ht[k*3]=ht[k*3+1]=ht[k*3+2]=0,We[k*3+1]=-999);continue}Oe[k]-=E;let L=Math.max(0,Oe[k]/qe[k]);Ve[k*3+1]-=14*E,Ve[k*3]*=.97,Ve[k*3+2]*=.97,We[k*3]+=Ve[k*3]*E,We[k*3+1]+=Ve[k*3+1]*E,We[k*3+2]+=Ve[k*3+2]*E,ht[k*3]=re[k*3]*L,ht[k*3+1]=re[k*3+1]*L,ht[k*3+2]=re[k*3+2]*L}ye.attributes.position.needsUpdate=!0,ye.attributes.color.needsUpdate=!0}function Ce(E,k,L,W,G,Z=16722474){let K=new It,J=new nt(q,new At({color:Z,transparent:!0,depthWrite:!1,opacity:.9,fog:!1})),ue=new nt(Y,new At({color:Z,transparent:!0,depthWrite:!1,opacity:.35,fog:!1}));J.scale.setScalar(L),K.add(J,ue),K.position.set(E,r(E,k)+.2,k),Fe(K,W,(se,$)=>{ue.scale.setScalar(Math.max(.01,L*$)),J.material.opacity=.5+.5*Math.sin($*30),$>=1&&!se.done&&(se.done=!0,G())})}function Je(E,k,L,W,G,Z,K){let J=new nt(new Jn(G,W).rotateX(-Math.PI/2).translate(0,0,W/2),new At({color:16724016,transparent:!0,depthWrite:!1,opacity:.3,fog:!1}));J.position.set(E,r(E,k)+.25,k),J.rotation.y=L,Fe(J,Z,(ue,se)=>{J.material.opacity=.2+.4*(se*8%1),se>=1&&!ue.done&&(ue.done=!0,J.geometry.dispose(),K())})}function F(E,k){u.iframe>0||u.over||(u.hp-=E*(1-u.stats.armor),u.iframe=.5,I(.5),Ke("#ff2020"),x.play("hurt"),de(u.pos.x,u.pos.y+1.2,u.pos.z,20,16724016,6,5),Mn(k||["\u7834\u9632\u4E86","\u6025\u4E86","\u963F\u4E00\u53E4~","\u6211\u771F\u670D\u4E86"][Math.random()*4|0],u.pos.x,u.pos.z,"#ff6b6b"),u.hp<=0&&ae())}function Ke(E){v.flash.style.background=E,v.flash.style.opacity=.35,setTimeout(()=>v.flash.style.opacity=0,60)}let Ze=new on(.35,8,6),ct=new At({color:13073919,fog:!1}),xe=new At({color:16774358,fog:!1});function mt(E,k,L,W,G,Z=ct,K=1){let J=new nt(Ze,Z);J.scale.setScalar(K),z.add(J),u.ebullets.push({mesh:J,x:E,z:k,vx:Math.sin(L)*W,vz:Math.cos(L)*W,life:4,dmg:G,r:.4*K})}async function ze(E){m[E]||(m[E]=await o.loadAsync(vi("chars/"+Ru[E].file)));let k=m[E],L=$h(k.scene);L.traverse(J=>{J.isMesh&&(J.castShadow=!1,J.frustumCulled=!1)});let W=new It;W.add(L),W.scale.setScalar(2.6);let G=new wn().setFromObject(W);L.position.y-=G.min.y/2.6;let Z=new Ho(L),K={};for(let J of k.animations)K[J.name]=Z.clipAction(J);return K.attack&&(K.attack.setLoop(xh),K.attack.clampWhenFinished=!1),{holder:W,mixer:Z,act:K,cur:null}}function Ye(E,k,L=.15){if(E.cur===k||!E.act[k])return;E.act[k].reset().fadeIn(L).play(),E.cur&&E.act[E.cur]&&E.act[E.cur].fadeOut(L),E.cur=k}async function D(E){v.select.classList.add("hidden"),v.loading.classList.remove("hidden");let k=Ru[E],L=await ze(E);v.loading.classList.add("hidden"),u&&A(),a.add(z);let W=new P(vn.x,0,vn.z+40);W.y=r(W.x,W.z),L.holder.position.copy(W),a.add(L.holder);let G=new nt(S,M);G.scale.setScalar(1.6),a.add(G),u={heroId:E,hero:k,h:L,shadow:G,pos:W,vel:new P,face:0,hp:k.hp,maxHp:k.hp,lv:1,xp:0,xpNext:5,kills:0,time:0,laugh:0,laughMax:50,paused:!1,over:!1,iframe:0,dashCd:0,dashT:0,attackT:0,ultT:0,stats:{dmg:1,rate:1,multi:0,pierce:0,area:1,speed:1,cd:1,back:!1,sides:!1,armor:0,magnet:3},skills:{},form:null,enemies:[],bullets:[],gems:[],fx:[],clones:[],spawnAcc:0,nextElite:45,nextBoss:150,bossAlive:!1,hash:new Map},u.ebullets=[],u.boss=null,z.add(Te),u.skills.ring={lv:1,t:0},x.startBgm(),x.setIntense(!1),Ye(L,"idle"),v.hud.classList.remove("hidden"),v.heroName.textContent=k.name,v.heroIcon.src=vi("chars/"+k.icon),ri("\u5976\u5A03\u51FA\u51FB\uFF01\u81EA\u52A8\u5F00\u6253\uFF0C\u4F60\u53EA\u7BA1\u8D70\u4F4D"),ri("V \u5207\u6362\u89C6\u89D2 \xB7 \u7A7A\u683C\u51B2\u523A \xB7 Q \u5927\u62DB"),ve(),zr()}function A(){a.remove(u.h.holder,u.shadow,z);for(let E of u.fx)z.remove(E.mesh);for(let E of u.bullets)E.mesh&&z.remove(E.mesh);for(let E of u.clones)a.remove(E.h.holder);for(let E of u.ebullets)z.remove(E.mesh);u.boss&&a.remove(u.boss.h.holder),u=null}let Q=null;function ve(){Q||(Q=ze("boss").catch(()=>null))}Ru.boss={file:"sorceress.glb"};function le(E,k){if(u.enemies.length>=T)return null;let L=R[E],W=u.time/60,G=1+.15*W+.004*W*W,Z,K;if(k)Z=k.x,K=k.z;else{let ue=Math.random()*Math.PI*2,se=26+Math.random()*8;Z=u.pos.x+Math.cos(ue)*se,K=u.pos.z+Math.sin(ue)*se;let $=Z-vn.x,je=K-vn.z,at=Math.hypot($,je);at>vn.r&&(Z=vn.x+$/at*vn.r,K=vn.z+je/at*vn.r)}let J={type:E,t:L,x:Z,z:K,vx:0,vz:0,hp:L.hp*G,maxHp:L.hp*G,hit:0,slow:0,burn:0,phase:Math.random()*6};return J.cd=1+Math.random()*2,J.state="chase",u.enemies.push(J),E==="boss"&&Re(J),J}async function Re(E){let k=await ze("boss");!u||E.hp<=0||(k.holder.scale.setScalar(7),a.add(k.holder),Ye(k,"walk"),u.boss={e:E,h:k},E.model=!0,v.bossBar.classList.remove("hidden"))}function Ne(E){let k=u.time/60,L=Math.min(T,40+12*k*3);for(u.spawnAcc+=E*(2+1.5*k);u.spawnAcc>1&&(u.spawnAcc-=1,!(u.enemies.length>=L));){let W=Math.random();le(k>2&&W<.12?"brute":k>.7&&W<.4?"wisp":"imp")}u.time>u.nextElite&&(u.nextElite+=50,le("elite"),ri("\u7CBE\u82F1\u5C38\u9B54\u51FA\u73B0\uFF01\u5B83\u4F1A\u51B2\u950B\u3001\u7838\u5730"),x.play("elite")),u.time>u.nextBoss&&!u.bossAlive&&(u.nextBoss+=200,u.bossAlive=!0,le("boss"),ri("\u524D\u65B9\u9AD8\u80FD\uFF01\u767D\u9AA8\u7CBE\u73B0\u51FA\u539F\u5F62"),I(1),x.play("boss"),x.setIntense(!0),Ha())}function he(){if(d.setFromCamera(l,e),f.constant=-u.pos.y,d.ray.intersectPlane(f,h)){let E=new ge(h.x-u.pos.x,h.z-u.pos.z);if(E.lengthSq()>.01)return Math.atan2(E.x,E.y)}return u.face}let fe={staff:.42,orb:.32,rake:.8,dian:1.1};function Le(E){if(u.attackT-=E,u.form==="auto"||u.attackT>0||!u.enemies.length)return;let k=u.stats,L=fe[u.hero.weapon]/k.rate;u.form==="gun"&&(L/=3),u.attackT=L;let W=V();u.face=W,Ye(u.h,"attack",.05),u.h.attackHold=.35;let G=[],Z=1+k.multi;for(let J=0;J<Z;J++)G.push(W+(J-(Z-1)/2)*.16);k.back&&G.push(W+Math.PI),k.sides&&G.push(W+Math.PI/2,W-Math.PI/2);let K=u.hero.weapon;for(let J of G)(K==="staff"||K==="rake")&&pe(J,K==="rake"),(K==="staff"||K==="orb"||K==="dian")&&ce(J,K)}function V(){let E=null,k=1e9;for(let L of u.enemies){let W=(L.x-u.pos.x)**2+(L.z-u.pos.z)**2;W<k&&(k=W,E=L)}return E?Math.atan2(E.x-u.pos.x,E.z-u.pos.z):u.face}function pe(E,k){let L=u.stats,W=(k?4.2:4.4)*L.area,G=(k?26:22)*L.dmg;for(let K of u.enemies){let J=K.x-u.pos.x,ue=K.z-u.pos.z,se=Math.hypot(J,ue);if(se>W+K.t.r)continue;let $=Math.atan2(J,ue)-E;$=Math.atan2(Math.sin($),Math.cos($)),Math.abs($)<1.1&&Se(K,G,k?7:3,J/se,ue/se)}let Z=new nt(Pe,new At({color:k?16751164:16766282,transparent:!0}));Z.position.set(u.pos.x,u.pos.y+1.1,u.pos.z),Z.rotation.y=E-Math.PI*.45+Math.PI/2,Z.scale.setScalar(W),Z.material.blending=An,Z.material.depthWrite=!1,Fe(Z,.25,(K,J)=>{K.mesh.material.opacity=1-J,K.mesh.rotation.y+=.18,K.mesh.scale.setScalar(W*(.7+.5*J))}),de(u.pos.x+Math.sin(E)*2,u.pos.y+1.2,u.pos.z+Math.cos(E)*2,10,16766282,10,3,.35)}function ce(E,k){let L=u.stats,W=k==="dian"?"\u5178":u.form==="gun"?"\u54C8":id[Math.random()*id.length|0],G;if(k==="orb"&&!u.form)G=new nt(be,ie);else{G=new Ji(j(W,k==="dian"?"#ff8a3c":"#ffd54a"));let J=(k==="dian"?2.2:1.1)*L.area;G.scale.set(J*2.6,J,1)}G.position.set(u.pos.x,u.pos.y+1.2,u.pos.z),z.add(G);let Z=k==="dian"?13:22,K=k==="dian"?34:k==="orb"?11:12;u.bullets.push({mesh:G,x:u.pos.x,z:u.pos.z,vx:Math.sin(E)*Z,vz:Math.cos(E)*Z,life:1.4,r:(k==="dian"?1.1:.6)*L.area,dmg:K*L.dmg*(u.form==="gun"?.45:1),pierce:L.pierce+0,boom:k==="dian"?3.2*L.area:0,boomer:u.form==="boomer",back:!1,hitSet:new Set})}function De(E){for(let k=u.bullets.length-1;k>=0;k--){let L=u.bullets[k];if(L.life-=E,L.boomer&&!L.back&&L.life<.7&&(L.back=!0,L.hitSet.clear()),L.back){let G=u.pos.x-L.x,Z=u.pos.z-L.z,K=Math.hypot(G,Z)+.001;L.vx=G/K*24,L.vz=Z/K*24,K<1&&(L.life=0)}L.x+=L.vx*E,L.z+=L.vz*E,L.mesh.position.set(L.x,r(L.x,L.z)+1.2,L.z);let W=L.life<=0;if(!W)for(let G of dn(L.x,L.z,L.r+3)){if(L.hitSet.has(G)||G.hp<=0||(G.x-L.x)**2+(G.z-L.z)**2>(L.r+G.t.r)**2)continue;L.hitSet.add(G);let Z=Math.hypot(L.vx,L.vz);if(Se(G,L.dmg,2,L.vx/Z,L.vz/Z),L.boom){Ee(L.x,L.z,L.boom,L.dmg*.6,16747068),W=!0;break}if(!L.boomer&&L.pierce--<=0){W=!0;break}}W&&(L.boom&&L.life<=0&&Ee(L.x,L.z,L.boom,L.dmg*.6,16747068),z.remove(L.mesh),u.bullets.splice(k,1))}}function Ee(E,k,L,W,G,Z=4){for(let J of dn(E,k,L+2)){let ue=J.x-E,se=J.z-k,$=Math.hypot(ue,se)+.001;$<L+J.t.r&&Se(J,W,Z,ue/$,se/$)}let K=new nt(Y,new At({color:G,transparent:!0,depthWrite:!1,blending:An}));K.position.set(E,r(E,k)+.15,k),Fe(K,.35,(J,ue)=>{J.mesh.scale.setScalar(L*(.4+.6*ue)),J.mesh.material.opacity=.8*(1-ue)}),de(E,r(E,k)+.6,k,Math.min(40,8+L*5),G,4+L*2,6,.6),L>2.5&&(x.boom(Math.min(1.5,L/5)),I(Math.min(.6,L*.06)))}function Se(E,k,L,W,G){if(E.hp<=0)return;let Z=Math.random()<.08;Z&&(k*=2),E.hp-=k,E.hit=.12;let K=E.type==="boss"?.05:E.type==="elite"?.3:E.type==="brute"?.6:1.4;E.vx+=W*L*K,E.vz+=G*L*K;let J=r(E.x,E.z)+1.2*E.t.scale;de(E.x,J,E.z,Z?14:5,Z?16734780:16773552,Z?10:6,4,.4),u.dmgBudget=u.dmgBudget||0,(Z||u.dmgBudget<6||E.type==="boss"||E.type==="elite")&&(u.dmgBudget++,cd(Math.round(k),E.x,E.z,Z)),x.play(Z?"crit":"hit",{gain:Z?1:.55}),Z&&(Mn(["\u66B4\u51FB\uFF01\u7EF7\u4E0D\u4F4F\u4E86","\u82AD\u6BD4Q\u4E86","\u9065\u9065\u9886\u5148"][Math.random()*3|0],E.x,E.z,"#ff5252"),y=Math.max(y,.05),I(.2)),E.hp<=0&&$e(E)}function $e(E){u.kills++;let k=E.type!=="imp"&&E.type!=="wisp";de(E.x,r(E.x,E.z)+1,E.z,k?60:16,E.type==="wisp"?11635967:16774358,k?14:8,8,k?1:.6),x.play("kill",{gain:.6}),k&&(y=Math.max(y,E.type==="boss"?.4:.08),I(E.type==="boss"?1.5:.4),x.boom(1.2)),(Math.random()<.15||k)&&Mn(fb[Math.random()*fb.length|0],E.x,E.z,"#ffffff"),u.laugh=Math.min(u.laughMax,u.laugh+(E.type==="boss"?40:E.type==="elite"?10:1));let L=Math.max(1,Math.round(E.t.xp/5));for(let W=0;W<L;W++)u.gems.length<C&&u.gems.push({x:E.x+(Math.random()-.5)*L*.4,z:E.z+(Math.random()-.5)*L*.4,v:E.t.xp/L});u.skills.bbq&&Ee(E.x,E.z,2.2+u.skills.bbq.lv*.4,8*u.skills.bbq.lv*u.stats.dmg,16734751,2),(E.type==="elite"||E.type==="boss")&&od(),E.type==="boss"&&(u.bossAlive=!1,ri("\u767D\u9AA8\u7CBE\u53C8\u88AB\u6253\u6B7B\u4E86\u4E00\u6B21\uFF01\uFF08\u540D\u573A\u9762\uFF09"),x.play("ult"),x.setIntense(!1),u.boss&&(a.remove(u.boss.h.holder),u.boss=null),v.bossBar.classList.add("hidden"))}function ft(E){let k=u.stats;for(let[L,W]of Object.entries(u.skills)){W.t-=E;let G=W.lv;switch(L){case"thunder":if(W.t<=0){W.t=3*k.cd,Mn("\u5C0F\u53D1\u96F7\u9706\uFF01",u.pos.x,u.pos.z,"#9fd4ff");let Z=u.enemies.filter(K=>(K.x-u.pos.x)**2+(K.z-u.pos.z)**2<400);for(let K=0;K<2+G+k.multi&&Z.length;K++){let J=Z[Math.random()*Z.length|0];we(J.x,J.z,1.8*k.area,(18+8*G)*k.dmg)}}break;case"push":W.t<=0&&(W.t=Math.max(1.2,4-G*.4)*k.cd,tt(6+G*1.2,10*G*k.dmg,10,10479615),Mn("\u9000\uFF01\u9000\uFF01\u9000\uFF01",u.pos.x,u.pos.z,"#9fe7ff"));break;case"aura":{W.mesh||(W.mesh=new nt(Y,new At({color:16743129,transparent:!0,opacity:.18,depthWrite:!1})),z.add(W.mesh));let Z=(2.6+G*.5)*k.area;if(W.mesh.scale.setScalar(Z),W.mesh.position.set(u.pos.x,u.pos.y+.12,u.pos.z),W.t<=0){W.t=.4;for(let K of dn(u.pos.x,u.pos.z,Z+2))(K.x-u.pos.x)**2+(K.z-u.pos.z)**2<(Z+K.t.r)**2&&Se(K,(3+2*G)*k.dmg,.5,0,0)}break}case"ring":{if(W.t<=0){W.t=6*k.cd,x.play("skill",{gain:.6}),Mn("\u753B\u5730\u4E3A\u7262\uFF01",u.pos.x,u.pos.z,"#ffc23a");let Z=(4+G)*k.area,K=u.pos.x,J=u.pos.z,ue=new nt(q,new At({color:16761402,transparent:!0,depthWrite:!1,blending:An}));ue.position.set(K,r(K,J)+.15,J),ue.scale.setScalar(Z);let se=0;Fe(ue,4,($,je,at)=>{if($.mesh.material.opacity=1-je*.6,se-=at,se<=0){se=.3;for(let ke of dn(K,J,Z+2))(ke.x-K)**2+(ke.z-J)**2<Z*Z&&(Se(ke,(4+3*G)*k.dmg,0,0,0),ke.slow=.4)}})}break}case"shield":{let Z=2+G+Math.min(2,k.multi);for(W.items||(W.items=[]);W.items.length<Z;){let J=new Ji(j("\u54C8","#ffe066"));J.scale.set(2.2,.85,1),z.add(J),W.items.push(J)}let K=3*k.area;W.ang=(W.ang||0)+E*(2.4+G*.3),W.items.forEach((J,ue)=>{let se=W.ang+ue/W.items.length*Math.PI*2,$=u.pos.x+Math.sin(se)*K,je=u.pos.z+Math.cos(se)*K;J.position.set($,u.pos.y+1,je);for(let at of dn($,je,2))(at.x-$)**2+(at.z-je)**2<(.8+at.t.r)**2&&(at.shT||0)<u.time&&(at.shT=u.time+.35,Se(at,(6+4*G)*k.dmg,4,Math.sin(se+1.57),Math.cos(se+1.57)))});break}case"log":if(W.t<=0){W.t=Math.max(3,8-G)*k.cd;for(let Z=0;Z<Math.ceil(G/2);Z++)dt((8+6*G)*k.dmg)}break;case"clone":u.clones.length<Math.min(3,G)&&!W.loading&&(W.loading=!0,ze(u.heroId).then(Z=>{W.loading=!1,u&&(Z.holder.scale.setScalar(1.4),Z.holder.traverse(K=>{K.isMesh&&(K.material=K.material.clone(),K.material.transparent=!0,K.material.opacity=.75,K.material.color?.multiplyScalar(1.3))}),a.add(Z.holder),Ye(Z,"walk"),u.clones.push({h:Z,a:Math.random()*6,t:0}),Mn("\u5439\u4E00\u53E3\u6BEB\u6BDB\uFF01",u.pos.x,u.pos.z,"#ffd54a"))}));break}}u.clones.forEach((L,W)=>{L.a+=E*1.3,L.t-=E;let G=u.pos.x+Math.sin(L.a+W*2.1)*3.5,Z=u.pos.z+Math.cos(L.a+W*2.1)*3.5;if(L.h.holder.position.set(G,r(G,Z),Z),L.h.mixer.update(E),L.t<=0){let K=null,J=36;for(let ue of dn(G,Z,6)){let se=(ue.x-G)**2+(ue.z-Z)**2;se<J&&(J=se,K=ue)}if(K){L.t=.7;let ue=Math.atan2(K.x-G,K.z-Z);L.h.holder.rotation.y=ue,Se(K,(8+5*u.skills.clone.lv)*u.stats.dmg,3,Math.sin(ue),Math.cos(ue)),L.h.act.attack?.reset().play()}}})}function we(E,k,L,W){let G=new nt(ee,new At({color:13232383,transparent:!0,blending:An,depthWrite:!1}));G.position.set(E,r(E,k),k),Fe(G,.25,(Z,K)=>{Z.mesh.material.opacity=1-K}),Ee(E,k,L,W,10474751,1)}function tt(E,k,L,W){let G=u.pos.x,Z=u.pos.z,K=new nt(q,new At({color:W,transparent:!0,depthWrite:!1,blending:An}));K.position.set(G,u.pos.y+.3,Z),Fe(K,.4,(J,ue)=>{J.mesh.scale.setScalar(.5+E*ue),J.mesh.material.opacity=1-ue});for(let J of dn(G,Z,E+2)){let ue=J.x-G,se=J.z-Z,$=Math.hypot(ue,se)+.001;$<E&&Se(J,k,L,ue/$,se/$)}}function dt(E){let k=Math.random()*Math.PI*2,L=u.pos.x-Math.sin(k)*25,W=u.pos.z-Math.cos(k)*25,G=new nt(me,_e);G.rotation.y=k;let Z=new Set;Fe(G,2.2,(K,J)=>{let ue=L+Math.sin(k)*50*J,se=W+Math.cos(k)*50*J;K.mesh.position.set(ue,r(ue,se)+.9,se),K.mesh.rotateOnAxis(new P(1,0,0),.25);for(let $ of dn(ue,se,5)){if(Z.has($))continue;let je=($.x-ue)*Math.cos(k)-($.z-se)*Math.sin(k),at=($.x-ue)*Math.sin(k)+($.z-se)*Math.cos(k);Math.abs(je)<3.5&&Math.abs(at)<1.2+$.t.r&&(Z.add($),Se($,E,6,Math.sin(k),Math.cos(k)))}}),Mn("\u6EDA\u6728",L,W,"#c58b4a")}function Be(){if(u.dashCd>0||u.over)return;u.dashCd=1.2,u.dashT=.2,u.iframe=Math.max(u.iframe,.25);let E=u.vel.lengthSq()>.1?Math.atan2(u.vel.x,u.vel.z):u.face;u.vel.set(Math.sin(E)*26,0,Math.cos(E)*26)}function Mt(){if(u.laugh<u.laughMax*(u.firstUlt?1:.5)||u.ultT>0)return;u.firstUlt=!0,u.laugh=0,u.ultT=8,u.iframe=8.5,u.ultTick=0;let E=document.createElement("div");E.className="g-ult",E.innerHTML=`<b>${u.hero.ult}</b>`,v.root.appendChild(E),setTimeout(()=>E.remove(),1100),I(1.2),x.play("ult"),x.boom(2),y=.25,Ke("#ffd54a"),de(u.pos.x,u.pos.y+2,u.pos.z,300,16766282,22,12,1.4),u.ultTick=0}function Vt(E){if(u.ultT<=0){u.h.holder.scale.setScalar(Un.lerp(u.h.holder.scale.x,2.6,.2));return}u.ultT-=E,u.ultTick-=E;let k=u.heroId,L=k==="wukong"?5.5:2.6;if(u.h.holder.scale.setScalar(Un.lerp(u.h.holder.scale.x,L,.15)),u.ultTick>0)return;let W=10+u.lv*3,G=(Z,K)=>Z.type==="boss"?Math.min(K*3,Z.maxHp*.03):K*3;if(k==="wukong"){u.ultTick=.6;let Z=14;for(let K of dn(u.pos.x,u.pos.z,Z+2)){let J=K.x-u.pos.x,ue=K.z-u.pos.z,se=Math.hypot(J,ue)+.001;se<Z&&Se(K,G(K,W*2),8,J/se,ue/se)}tt(Z,0,0,16766282),Mn(id[Math.random()*id.length|0]+"\uFF01",u.pos.x,u.pos.z,"#ffd54a"),de(u.pos.x,u.pos.y+1,u.pos.z,120,16756782,24,6,.8),x.boom(1.4),I(.7);for(let K=0;K<6;K++){let J=Math.random()*6.28,ue=4+Math.random()*12;we(u.pos.x+Math.sin(J)*ue,u.pos.z+Math.cos(J)*ue,3,G({type:""},W))}}else if(k==="sorceress"){u.ultTick=.12;let Z=Math.random()*6.28,K=Math.random()*18,J=u.pos.x+Math.sin(Z)*K,ue=u.pos.z+Math.cos(Z)*K;for(let se of dn(J,ue,4))(se.x-J)**2+(se.z-ue)**2<9&&Se(se,G(se,W*1.5),2,0,0);we(J,ue,3,0)}else if(k==="ox"){u.ultTick=.8,tt(12,0,0,16751164),I(.4);for(let Z of dn(u.pos.x,u.pos.z,14)){let K=Z.x-u.pos.x,J=Z.z-u.pos.z,ue=Math.hypot(K,J)+.001;ue<12&&(Se(Z,G(Z,W*2.4),12,K/ue,J/ue),Z.slow=1.5)}}else{u.ultTick=.25;let Z=Math.random()*6.28,K=4+Math.random()*16,J=u.pos.x+Math.sin(Z)*K,ue=u.pos.z+Math.cos(Z)*K,se=new Ji(j("\u5178","#ff6a2a"));se.scale.set(6,2.3,1),Fe(se,.5,($,je)=>{if($.mesh.position.set(J,r(J,ue)+18*(1-je)+1,ue),je>.95&&!$.done){$.done=!0;for(let at of dn(J,ue,6))(at.x-J)**2+(at.z-ue)**2<25&&Se(at,G(at,W*2),6,0,0);Ee(J,ue,5,0,16738858)}})}}let qn={gun:{name:"\u54C8\u54C8\u54C8\u673A\u5173\u67AA",desc:"\u5C04\u901F \xD73\u3001\u5355\u53D1\u4F24\u5BB3 \xD70.45\uFF08\u5C04\u51FB\u7CFB\uFF09"},boomer:{name:"6666 \u56DE\u65CB\u9556",desc:"\u5B50\u5F39\u98DE\u51FA\u53BB\u518D\u98DE\u56DE\u6765\uFF0C\u5F80\u8FD4\u90FD\u9020\u6210\u4F24\u5BB3\uFF08\u8D70\u4F4D\u7CFB\uFF09"},moyu:{name:"\u6478\u9C7C\u5927\u5E08",desc:"\u4E3B\u653B\u51FB\u4F24\u5BB3 \xD70.5\uFF0C\u6280\u80FD\u51B7\u5374 -30%\uFF0C\u6280\u80FD\u69FD +1\uFF08\u6280\u80FD\u6D41\uFF09"}};function _c(){let E=u.stats,k=[];if(u.lv>=5&&!u.form)return Object.entries(qn).map(([Z,K])=>({tier:"gold",name:K.name,desc:K.desc,apply(){u.form=Z,Z==="moyu"&&(E.dmg*=.5,E.cd*=.7,u.extraSlot=1)}}));let L=Object.keys(u.skills),W=3+(u.extraSlot||0);for(let Z of Object.keys(ad)){let K=u.skills[Z];if(K&&K.lv>=5||!K&&L.length>=W)continue;let J=u.hero.skills.includes(Z);!K&&!J&&Math.random()<.5||k.push({tier:K?"blue":"purple",name:`${ad[Z].name} ${K?"Lv"+(K.lv+1):"\uFF08\u65B0\u6280\u80FD\uFF09"}`,desc:ad[Z].desc,apply(){K?K.lv++:u.skills[Z]={lv:1,t:0}}})}let G=[["\u591A\u53D1 +1","\u6247\u5F62\u591A\u4E00\u53D1",()=>E.multi<4,()=>E.multi++],["\u5C41\u80A1\u4E5F\u5728\u7B11","\u5411\u80CC\u540E\u540C\u65F6\u5C04\u4E00\u53D1",()=>!E.back,()=>E.back=!0],["\u5DE6\u53F3\u5F00\u5F13","\u4E24\u4FA7\u5404\u5C04\u4E00\u53D1",()=>!E.sides,()=>E.sides=!0],["\u7A7F\u900F +1","\u5B50\u5F39\u591A\u7A7F\u4E00\u4E2A\u602A",()=>E.pierce<3,()=>E.pierce++],["\u7EA2\u6E29","\u4F24\u5BB3 +20%",()=>!0,()=>E.dmg*=1.2],["\u6025\u4E86","\u653B\u901F +18%",()=>!0,()=>E.rate*=1.18],["\u80BA\u6D3B\u91CF","\u8303\u56F4 +15%",()=>!0,()=>E.area*=1.15],["\u52A0\u901F","\u79FB\u901F +10%",()=>E.speed<1.6,()=>E.speed*=1.1],["\u539A\u8138\u76AE","\u53D7\u5230\u4F24\u5BB3 -15%",()=>E.armor<.6,()=>E.armor+=.15],["\u51B7\u5374\u7F29\u51CF","\u6280\u80FD\u51B7\u5374 -12%",()=>E.cd>.5,()=>E.cd*=.88],["\u5927\u80C3\u53E3","\u6700\u5927\u8840\u91CF +20 \u5E76\u56DE\u6EE1",()=>!0,()=>{u.maxHp+=20,u.hp=u.maxHp}]];for(let[Z,K,J,ue]of G)J()&&k.push({tier:"white",name:Z,desc:K,apply:ue});return J1(k),k.slice(0,3)}function Or(){u.paused=!0;let E=_c();v.cards.innerHTML=`<h2>${u.lv>=5&&!u.form?"Lv5 \u9009\u62E9\u653B\u51FB\u5F62\u6001\uFF08\u4E0D\u53EF\u9006\uFF09":"\u5347\u7EA7\uFF01\u4E09\u9009\u4E00"}</h2>`;let k=document.createElement("div");k.className="g-row";for(let W of E){let G=document.createElement("button");G.className="g-card "+W.tier,G.innerHTML=`<b>${W.name}</b><span>${W.desc}</span>`,G.onclick=()=>{W.apply(),v.cards.classList.add("hidden"),u.paused=!1,zr(),u.xp>=u.xpNext&&As(0)},k.appendChild(G)}let L=document.createElement("button");L.className="g-skip",L.textContent="\u8DF3\u8FC7\uFF08\u56DE 20% \u8840\uFF09",L.onclick=()=>{u.hp=Math.min(u.maxHp,u.hp+u.maxHp*.2),v.cards.classList.add("hidden"),u.paused=!1},v.cards.append(k,L),v.cards.classList.remove("hidden")}function od(){ri("\u76F2\u76D2\u5B9D\u7BB1\uFF01\u767D\u5AD6\u4E00\u6B21\u5347\u7EA7"),u.xp+=u.xpNext-u.xp,As(0)}function As(E){u.xp+=E,u.xp>=u.xpNext&&!u.paused&&(u.xp-=u.xpNext,u.lv++,u.xpNext=5+(u.lv-1)*7,Mn("Lv"+u.lv,u.pos.x,u.pos.z,"#7dff9a"),x.play("level"),de(u.pos.x,u.pos.y+1,u.pos.z,80,8257434,10,10,1),Or())}let Ts=new Xe,Xn=new Rt,da=new P,Rs=new P,Fr=new He,fa={},_i=0;function Sc(E,k,L,W){let G=E.t,Z=u.time/60;if(E.type==="wisp"){if(E.cd=Math.max(1.6,G.shoot-Z*.2),k<24){let K=Math.atan2(L,W);for(let J of[-.2,0,.2])mt(E.x,E.z,K+J,10,8)}}else if(E.type==="brute"&&k<16){E.cd=G.charge,E.state="wind";let K=Math.atan2(L,W);Mn("\u51B2\uFF01",E.x,E.z,"#ff4040"),Je(E.x,E.z,K,16,2.2,.8,()=>{E.hp<=0||(E.state="dash",E.dashT=.7,E.dx=Math.sin(K),E.dz=Math.cos(K))})}else if(E.type==="elite")if(Math.random()<.5&&k<10){E.cd=G.slam,E.state="wind",Mn("\u6CF0\u5C71\u538B\u9876\uFF01",E.x,E.z,"#ff4040");let K=E.x,J=E.z;Ce(K,J,7,1.1,()=>{E.hp>0&&(E.state="chase"),Ee(K,J,.1,0,16734751),de(K,r(K,J),J,60,16752704,16,6),I(.6),x.boom(1.5),(u.pos.x-K)**2+(u.pos.z-J)**2<49&&F(30,"\u88AB\u7838\u6241\u4E86")})}else if(k<22){E.cd=G.charge,E.state="wind";let K=Math.atan2(L,W);Je(E.x,E.z,K,22,3,.9,()=>{E.hp<=0||(E.state="dash",E.dashT=.8,E.dx=Math.sin(K),E.dz=Math.cos(K))})}else E.cd=1;else if(E.type==="boss"){let K=E.hp<E.maxHp*.5;E.cd=K?2.4:3.4;let J=Math.random()*4|0,ue=se=>{Mn(se,E.x,E.z,"#e0aaff"),ri("\u767D\u9AA8\u7CBE\uFF1A"+se)};if(u.boss&&(Ye(u.boss.h,"attack",.05),u.boss.h.attackHold=.8),J===0){ue("\u767D\u9AA8\u5F39\u5E55\uFF01"),E.state="wind";let se=K?28:18;setTimeout(()=>{if(!(!u||E.hp<=0)){E.state="chase";for(let $=0;$<se;$++)mt(E.x,E.z,$/se*6.283+u.time,9,12,xe,1.3);x.play("skill")}},600)}else if(J===1){ue("\u9AA8\u523A\u5730\u72F1\uFF01");for(let se=0;se<(K?8:5);se++){let $=u.pos.x+(Math.random()-.5)*(se?14:0),je=u.pos.z+(Math.random()-.5)*(se?14:0);Ce($,je,3,1.2+se*.12,()=>{de($,r($,je),je,40,16774358,6,18,.8),x.boom(.8),(u.pos.x-$)**2+(u.pos.z-je)**2<9&&F(22,"\u88AB\u9AA8\u523A\u624E\u4E86")})}}else if(J===2&&k<30){ue("\u6211\u95EA\u73B0\uFF01"),E.state="wind";let se=Math.atan2(L,W);Je(E.x,E.z,se,30,5,1,()=>{E.hp<=0||(E.state="dash",E.dashT=.9,E.dx=Math.sin(se),E.dz=Math.cos(se),de(E.x,r(E.x,E.z)+2,E.z,80,13073919,12,6))})}else{ue("\u5C0F\u7684\u4EEC\uFF0C\u4E0A\uFF01");for(let se=0;se<(K?14:8);se++){let $=se/8*6.28;le(se%3?"imp":"wisp",{x:E.x+Math.sin($)*4,z:E.z+Math.cos($)*4})}}}else E.cd=2}function Ha(){let E=document.createElement("div");E.className="g-ult boss",E.innerHTML="<b>\u767D\u9AA8\u7CBE \xB7 \u73B0\u51FA\u539F\u5F62</b>",v.root.appendChild(E),setTimeout(()=>E.remove(),1600),y=.6,Ke("#8a2be2")}function cd(E,k,L,W){let G=new Ji(j(String(E),W?"#ff4040":"#ffffff").clone()),Z=W?1.4:.8;G.scale.set(Z*(G.material.map.image.width/96),Z,1);let K=r(k,L)+2,J=(Math.random()-.5)*1.2;Fe(G,.6,(ue,se)=>{ue.mesh.position.set(k+J,K+se*1.8,L),ue.mesh.material.opacity=1-se*se;let $=se<.15?1+(.15-se)*6:1;ue.mesh.scale.set(Z*$*(ue.mesh.material.map.image.width/96),Z*$,1)})}function dn(E,k,L){let W=[],Z=Math.floor((E-L)/4),K=Math.floor((E+L)/4),J=Math.floor((k-L)/4),ue=Math.floor((k+L)/4);for(let se=Z;se<=K;se++)for(let $=J;$<=ue;$++){let je=u.hash.get(se*73856093^$*19349663);if(je)for(let at of je)W.push(at)}return W}function wc(E){if(!u)return!1;if(u.paused||u.over)return Br(),!0;if(u.dmgBudget=0,Ae(E),y>0)return y-=E,Br(),!0;u.time+=E;let k=u.stats,L=new P((c.KeyD||c.ArrowRight?1:0)-(c.KeyA||c.ArrowLeft?1:0),0,(c.KeyS||c.ArrowDown?1:0)-(c.KeyW||c.ArrowUp?1:0));b===2&&L.lengthSq()&&L.applyAxisAngle(wt.DEFAULT_UP,_),L.lengthSq()&&L.normalize().multiplyScalar(u.hero.speed*k.speed*(u.ultT>0&&u.heroId==="ox"?1.6:1)),u.dashT-=E,u.dashCd-=E,u.iframe-=E,u.dashT<=0&&u.vel.lerp(L,1-Math.exp(-E*12)),u.pos.x+=u.vel.x*E,u.pos.z+=u.vel.z*E;let W=u.pos.x-vn.x,G=u.pos.z-vn.z,Z=Math.hypot(W,G);Z>vn.r&&(u.pos.x=vn.x+W/Z*vn.r,u.pos.z=vn.z+G/Z*vn.r),u.pos.y=r(u.pos.x,u.pos.z);let K=L.lengthSq()>0;K&&u.attackT<.2&&(u.face=Math.atan2(L.x,L.z));let J=u.h.holder;J.position.copy(u.pos);let ue=u.face-J.rotation.y;ue=Math.atan2(Math.sin(ue),Math.cos(ue)),J.rotation.y+=ue*Math.min(1,E*14),u.h.attackHold=(u.h.attackHold||0)-E,u.h.attackHold<=0&&Ye(u.h,K?"walk":"idle"),u.h.act.walk&&(u.h.act.walk.timeScale=1.3*k.speed),u.h.mixer.update(E),u.shadow.position.set(u.pos.x,u.pos.y+.05,u.pos.z),J.visible=u.iframe>0&&u.ultT<=0&&u.dashT<=0?(u.time*20|0)%2===0:!0,u.hash.clear();for(let se of u.enemies){let $=Math.floor(se.x/4)*73856093^Math.floor(se.z/4)*19349663,je=u.hash.get($);je||u.hash.set($,je=[]),je.push(se)}Ne(E),Le(E),ft(E),De(E),Vt(E);for(let se=u.enemies.length-1;se>=0;se--){let $=u.enemies[se];if($.hp<=0){u.enemies.splice(se,1);continue}let je=u.pos.x-$.x,at=u.pos.z-$.z,ke=Math.hypot(je,at)+.001,Qt=$.t.speed*($.slow>0?.4:1)*(1+u.time/600);$.slow-=E,$.hit-=E;let xt=je/ke*Qt,In=at/ke*Qt;$.type==="wisp"&&($.phase+=E*3,xt+=Math.cos($.phase)*2,In+=Math.sin($.phase)*2,ke<12&&(xt*=-.4,In*=-.4)),$.cd-=E,$.state==="wind"?xt=In=0:$.state==="dash"?(xt=$.dx*22,In=$.dz*22,$.dashT-=E,$.dashT<=0&&($.state="chase")):$.cd<=0&&Sc($,ke,je/ke,at/ke);for(let Nt of dn($.x,$.z,2)){if(Nt===$)continue;let Ga=$.x-Nt.x,oi=$.z-Nt.z,Cn=Math.hypot(Ga,oi),vt=$.t.r+Nt.t.r;Cn<vt&&Cn>1e-4&&(xt+=Ga/Cn*(vt-Cn)*6,In+=oi/Cn*(vt-Cn)*6)}if($.vx*=Math.exp(-E*6),$.vz*=Math.exp(-E*6),$.x+=(xt+$.vx)*E,$.z+=(In+$.vz)*E,ke<$.t.r+.7&&u.iframe<=0&&(F($.t.dmg*($.state==="dash"?1.4:.6)),u.over))return!0;if(ke>70&&$.type!=="boss"&&$.type!=="elite"){let Nt=Math.random()*6.28;$.x=u.pos.x+Math.cos(Nt)*30,$.z=u.pos.z+Math.sin(Nt)*30}}for(let se=u.ebullets.length-1;se>=0;se--){let $=u.ebullets[se];$.life-=E,$.x+=$.vx*E,$.z+=$.vz*E,$.mesh.position.set($.x,r($.x,$.z)+1.1,$.z),($.x-u.pos.x)**2+($.z-u.pos.z)**2<($.r+.6)**2&&(F($.dmg),$.life=0),$.life<=0&&(z.remove($.mesh),u.ebullets.splice(se,1))}if(u.boss){let{e:se,h:$}=u.boss;$.holder.position.set(se.x,r(se.x,se.z),se.z),$.holder.rotation.y=Math.atan2(u.pos.x-se.x,u.pos.z-se.z),$.attackHold=($.attackHold||0)-E,$.attackHold<=0&&Ye($,se.state==="wind"?"idle":"walk"),$.mixer.update(E),$.holder.traverse(je=>{je.isMesh&&je.material.emissive&&je.material.emissive.setScalar(se.hit>0?.6:0)}),v.bossFill.style.width=Math.max(0,se.hp/se.maxHp*100)+"%"}for(let se=u.gems.length-1;se>=0;se--){let $=u.gems[se],je=u.pos.x-$.x,at=u.pos.z-$.z,ke=Math.hypot(je,at);ke<k.magnet&&($.x+=je/ke*18*E,$.z+=at/ke*18*E),ke<.8&&(u.gems.splice(se,1),As($.v))}for(let se=u.fx.length-1;se>=0;se--){let $=u.fx[se];$.t+=E;let je=Math.min(1,$.t/$.life);$.update?.($,je,E),je>=1&&(z.remove($.mesh),u.fx.splice(se,1))}return Br(),zr(),!0}function Br(){for(let G in U)fa[G]=0;let E=0;for(let G of u.enemies){if(G.model)continue;let Z=U[G.type],K=fa[G.type]++;if(K>=Z.instanceMatrix.count)continue;let J=r(G.x,G.z)+(G.type==="wisp"?.6+Math.sin(u.time*4+G.phase)*.25:0),ue=1+Math.sin(u.time*10+G.phase)*.06;Xn.setFromAxisAngle(wt.DEFAULT_UP,Math.atan2(u.pos.x-G.x,u.pos.z-G.z)),da.set(G.t.scale,G.t.scale*ue,G.t.scale),Z.setMatrixAt(K,Ts.compose(Rs.set(G.x,J,G.z),Xn,da)),Z.setColorAt(K,G.hit>0?Fr.setRGB(3,3,3):Fr.setRGB(1,1,1)),E<O.instanceMatrix.count&&O.setMatrixAt(E++,Ts.compose(Rs.set(G.x,r(G.x,G.z)+.04,G.z),Xn.identity(),da.setScalar(G.t.r*2.4)))}for(let G in U){let Z=U[G];Z.count=fa[G],Z.instanceMatrix.needsUpdate=!0,Z.instanceColor&&(Z.instanceColor.needsUpdate=!0)}O.count=E,O.instanceMatrix.needsUpdate=!0,B.count=u.gems.length,u.gems.forEach((G,Z)=>B.setMatrixAt(Z,Ts.compose(Rs.set(G.x,r(G.x,G.z)+.4+Math.sin(u.time*3+Z)*.1,G.z),Xn.setFromAxisAngle(wt.DEFAULT_UP,u.time*2+Z),da.setScalar(1)))),B.instanceMatrix.needsUpdate=!0;let k=u.ultT>0?1.5:1,L;if(b===2){let G=11*k;L=new P(u.pos.x+Math.sin(_)*G,u.pos.y+4.2*k,u.pos.z+Math.cos(_)*G)}else{let[G,Z,K]=b===0?[30,.93,.36]:[22,.6,.8];L=new P(u.pos.x,u.pos.y+G*k*Z,u.pos.z+G*k*K),_=0}e.position.lerp(L,.12);let W=r(e.position.x,e.position.z)+1.5;e.position.y<W&&(e.position.y=W),_i=Math.max(0,_i-.016),_i>0&&e.position.add(new P((Math.random()-.5)*_i,(Math.random()-.5)*_i,0)),b===2?e.lookAt(u.pos.x-Math.sin(_)*6,u.pos.y+2.4,u.pos.z-Math.cos(_)*6):e.lookAt(u.pos.x,u.pos.y+1,u.pos.z)}function zr(){v.hp.style.width=Math.max(0,u.hp)/u.maxHp*100+"%",v.xp.style.width=u.xp/u.xpNext*100+"%";let E=u.laughMax*(u.firstUlt?1:.5);v.laugh.style.width=Math.min(100,u.laugh/E*100)+"%",v.ultBtn.classList.toggle("ready",u.laugh>=E&&u.ultT<=0);let k=u.time|0;v.info.textContent=`Lv${u.lv}  ${String(k/60|0).padStart(2,"0")}:${String(k%60).padStart(2,"0")}  \u51FB\u6740 ${u.kills}  \u540C\u5C4F ${u.enemies.length}`,v.skills.innerHTML=(u.form?`<i class="form">${qn[u.form].name}</i>`:"")+Object.entries(u.skills).map(([L,W])=>`<i>${ad[L].name} ${W.lv}</i>`).join("")}function Mn(E,k,L,W){let G=new Ji(j(E,W).clone());G.scale.set(.9*(G.material.map.image.width/96),.9,1);let Z=r(k,L)+2.4;Fe(G,.8,(K,J)=>{K.mesh.position.set(k,Z+J*1.5,L),K.mesh.material.opacity=1-J*J})}function ri(E){let k=document.createElement("div");k.className="g-toast",k.textContent=E,v.toasts.appendChild(k),setTimeout(()=>k.remove(),2600)}function I(E){_i=Math.max(_i,E)}function X(){u.paused=!u.paused,v.pause.classList.toggle("hidden",!u.paused)}function ae(){u.over=!0;let E=u.time|0;v.over.innerHTML=`<h2>${u.hero.name} \u7B11\u6655\u4E86</h2><p>\u4F60\u80C6\u5B50\u771F\u662F\u80A5\u561F\u561F\u7684\uFF0C\u8FD9\u90FD\u6562\u7AD9\u7740\u4E0D\u52A8</p>
			<p>\u5B58\u6D3B ${E/60|0} \u5206 ${E%60} \u79D2 \xB7 \u51FB\u6740 ${u.kills} \xB7 Lv${u.lv}${u.form?" \xB7 "+qn[u.form].name:""}</p>
			<button class="g-btn" data-a="again">\u518D\u6765\u4E00\u5C40</button><button class="g-btn" data-a="pick">\u4E3B\u83DC\u5355</button>`,v.over.classList.remove("hidden"),x.stopBgm(),x.play("elite"),v.bossBar.classList.add("hidden"),v.over.querySelector("[data-a=again]").onclick=()=>{v.over.classList.add("hidden"),D(u.heroId)},v.over.querySelector("[data-a=pick]").onclick=()=>location.reload()}function te(){v.hud.classList.add("hidden"),v.select.classList.remove("hidden")}function ne(){let E=document.createElement("style");E.textContent=`
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
		`,document.head.appendChild(E);let k=document.createElement("div");k.className="g-ui",k.innerHTML=`
		<div class="g-panel g-menu" id="g-select">
			<div class="g-title">\u4E09\u6253\u767D\u9AA8\u7CBE<small>\u5976\u5A03\u5927\u95F9\u767D\u864E\u5CAD</small></div>
			<img class="g-hero-img" src="${vi("chars/wukong.webp")}">
			<button class="g-btn big" id="g-go">\u5F00\u59CB\u6E38\u620F</button>
			<div class="g-row"><button class="g-btn" id="g-howbtn">\u64CD\u4F5C\u8BF4\u660E</button><button class="g-btn" id="g-setbtn">\u8BBE\u7F6E</button><a class="g-btn" href="?mode=view">\u770B\u98CE\u666F</a></div>
			<div class="g-sub hidden" id="g-how"><p>WASD \u79FB\u52A8 \xB7 \u653B\u51FB\u5168\u81EA\u52A8\uFF08\u91D1\u7B8D\u68D2 + \u70ED\u6897\u5F39\u5E55\uFF09<br>\u7A7A\u683C \u51B2\u523A\u65E0\u654C \xB7 Q \u4E03\u5341\u4E8C\u53D8\u5927\u62DB \xB7 V \u5207\u6362 \u4FEF\u89C6/\u659C\u89C6/\u5E73\u89C6<br>\u5E73\u89C6\u4E0B\u6309\u4F4F\u9F20\u6807\u5DE6\u952E\u62D6\u52A8\u8F6C\u89C6\u89D2 \xB7 Esc \u6682\u505C<br>\u7EA2\u8272\u533A\u57DF = \u602A\u7269\u8981\u653E\u6280\u80FD\u4E86\uFF0C\u5FEB\u8EB2\uFF01\u6491\u5230\u767D\u9AA8\u7CBE\u73B0\u8EAB\u5E76\u6253\u5012\u5979</p></div>
			<div class="g-sub hidden" id="g-set">
				<label>\u603B\u97F3\u91CF <input type="range" min="0" max="1" step="0.05" data-k="master"></label>
				<label>\u97F3\u6548 <input type="range" min="0" max="1" step="0.05" data-k="sfx"></label>
				<label>BGM <input type="range" min="0" max="1" step="0.05" data-k="bgm"></label>
				<label>\u521D\u59CB\u89C6\u89D2 <select id="g-cam"><option value="0">\u4FEF\u89C6</option><option value="1" selected>\u659C\u89C6</option><option value="2">\u5E73\u89C6</option></select></label>
			</div>
			<p class="g-note">\u97F3\u6548\u6765\u81EA\u961F\u53CB\u6574\u7406\u7684 naiwa-sfx \u7D20\u6750\u5305\uFF0C\u4EC5\u4F9B\u9ED1\u5BA2\u677E\u6F14\u793A</p>
		</div>
		<div class="g-panel hidden" id="g-loading"><h2>\u89D2\u8272\u5165\u573A\u4E2D\u2026\u2026</h2></div>
		<div class="hidden" id="g-hud">
			<div class="g-hud"><div class="g-top"><img id="g-icon"><div class="g-bars"><b id="g-name"></b>
				<div class="g-bar" id="g-hp"><i></i></div><div class="g-bar" id="g-xp"><i></i></div></div></div>
				<div class="g-info" id="g-info"></div><div class="g-skills" id="g-skills"></div></div>
			<div class="g-ultbox"><button class="g-ultbtn" id="g-ult"><div id="g-laugh"></div><span style="position:relative">\u5927\u62DB Q</span></button></div>
			<div class="g-help">WASD \u79FB\u52A8 \xB7 \u81EA\u52A8\u653B\u51FB \xB7 \u7A7A\u683C\u51B2\u523A \xB7 Q \u5927\u62DB \xB7 V \u89C6\u89D2 \xB7 Esc \u6682\u505C</div>
			<a class="g-view g-btn" href="?mode=view">\u770B\u98CE\u666F\u6A21\u5F0F</a>
		</div>
		<div class="g-panel hidden" id="g-cards"></div>
		<div class="g-panel hidden" id="g-pause"><h2>\u6682\u505C</h2><p>\u6309 Esc \u7EE7\u7EED</p><button class="g-btn" onclick="location.reload()">\u56DE\u5230\u4E3B\u83DC\u5355</button></div>
		<div class="g-panel hidden" id="g-over"></div>
		<div class="g-flash" id="g-flash"></div>
		<div class="g-boss hidden" id="g-boss"><b>\u767D\u9AA8\u7CBE</b><div class="g-bar"><i id="g-bossfill"></i></div></div>
		<div class="g-toasts" id="g-toasts"></div>`,document.body.appendChild(k);let L=G=>k.querySelector("#"+G);L("g-go").onclick=()=>{x.unlock(),D("wukong").catch(G=>{L("g-loading").innerHTML=`<h2>\u52A0\u8F7D\u5931\u8D25</h2><p>${G.message}</p><button class="g-btn" onclick="location.reload()">\u91CD\u8BD5</button>`})},L("g-howbtn").onclick=()=>{L("g-how").classList.toggle("hidden"),L("g-set").classList.add("hidden")},L("g-setbtn").onclick=()=>{L("g-set").classList.toggle("hidden"),L("g-how").classList.add("hidden")},k.querySelectorAll("input[data-k]").forEach(G=>{G.value=x.vol[G.dataset.k],G.oninput=()=>{x.vol[G.dataset.k]=+G.value,x.apply()}}),L("g-cam").onchange=G=>{b=+G.target.value};let W={root:k,select:L("g-select"),loading:L("g-loading"),hud:L("g-hud"),cards:L("g-cards"),pause:L("g-pause"),over:L("g-over"),toasts:L("g-toasts"),hp:L("g-hp").firstElementChild,xp:L("g-xp").firstElementChild,laugh:L("g-laugh"),ultBtn:L("g-ult"),info:L("g-info"),skills:L("g-skills"),heroName:L("g-name"),heroIcon:L("g-icon"),flash:L("g-flash"),bossBar:L("g-boss"),bossFill:L("g-bossfill")};return W.ultBtn.onclick=()=>u&&Mt(),Object.defineProperty(W.laugh.style,"width",{set(G){W.laugh.style.height=G}}),W}return{update:wc,get active(){return!!u},start:D,showSelect:te,_stress:E=>{u.laugh=u.laughMax,u.hp=u.maxHp=1e6;for(let k=0;k<E;k++)le(k%7?"imp":"wisp")},_cam:E=>{b=E},_boss:()=>{u.time=Math.max(u.time,150),u.nextBoss=0},debug:()=>u&&{lv:u.lv,hp:u.hp,enemies:u.enemies.length,kills:u.kills,time:u.time,skills:Object.keys(u.skills),form:u.form}}}function ub(a,e){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),i=n.createRadialGradient(32,32,0,32,32,32);return i.addColorStop(0,a),i.addColorStop(1,e),n.fillStyle=i,n.fillRect(0,0,64,64),new Ai(t)}function J1(a){for(let e=a.length-1;e>0;e--){let t=Math.random()*(e+1)|0;[a[e],a[t]]=[a[t],a[e]]}return a}function Z1(a){let e=0,t=0;for(let l of a)e+=l.attributes.position.count,t+=l.index.count;let n=new Float32Array(e*3),i=new Float32Array(e*3),s=new Uint32Array(t),r=0,o=0;for(let l of a){n.set(l.attributes.position.array,r*3),i.set(l.attributes.normal.array,r*3);for(let h=0;h<l.index.count;h++)s[o++]=l.index.array[h]+r;r+=l.attributes.position.count}let c=new rt;return c.setAttribute("position",new st(n,3)),c.setAttribute("normal",new st(i,3)),c.setIndex(new st(s,1)),c}var bb=vs.has("shot"),Q1=matchMedia("(pointer: coarse)").matches,xb={high:{dpr:Math.min(devicePixelRatio,1.5),msaa:4,shadow:4096,shadowFar:1700,terrainStep:1.25,mapStep:1,rock:"high",terrainShadow:!0,treeStep:8,grassStep:.9},mid:{dpr:Math.min(devicePixelRatio,1),msaa:2,shadow:2048,shadowFar:1400,terrainStep:2,mapStep:1.5,rock:"high",terrainShadow:!1,treeStep:10,grassStep:1.3},game:{dpr:Math.min(devicePixelRatio,1),msaa:0,shadow:1024,shadowFar:600,terrainStep:3,mapStep:2,rock:"low",terrainShadow:!1,treeStep:14,grassStep:2.2},low:{dpr:Math.min(devicePixelRatio,.8),msaa:0,shadow:1024,shadowFar:1e3,terrainStep:3,mapStep:2,rock:"low",terrainShadow:!1,treeStep:14,grassStep:2}},vb=vs.get("mode")!=="view"&&!vs.has("shot"),Cu=xb[vs.get("q")]?vs.get("q"):vb?"game":Q1?"low":"high",Mi={...xb[Cu],tier:Cu};bb&&(Mi.dpr=1);var Nu=document.getElementById("c"),an=new Sh({canvas:Nu,antialias:!1,powerPreference:"high-performance",stencil:!1});an.setPixelRatio(Mi.dpr);an.setSize(innerWidth,innerHeight,!1);an.toneMapping=ps;an.toneMappingExposure=.9;an.shadowMap.enabled=!0;an.shadowMap.type=fs;var yn=new es;yn.fog=og();var si=new Xt(52,innerWidth/innerHeight,.3,3e4),Es={value:0},ha=new Ch(Sr,3.1);ha.position.copy(sg);ha.castShadow=!0;ha.shadow.mapSize.set(Mi.shadow,Mi.shadow);ha.shadow.camera.near=1;ha.shadow.camera.far=Mi.shadowFar;ha.shadow.bias=-4e-4;ha.shadow.normalBias=.8;ha.shadow.radius=2;yn.add(ha);var za={bar:document.querySelector("#bar i"),text:document.getElementById("loadText"),loading:document.getElementById("loading"),debug:document.getElementById("debug")},yc=(a,e)=>{za.bar.style.width=(a*100).toFixed(0)+"%",e&&(za.text.textContent=e)},ws={gen:{}};async function $1(){let a=new cr;a.onProgress=(r,o,c)=>yc(.05+.25*o/c);let e=new ls(a),t=["cliff_diff","cliff_nor","bone_diff","bone_nor","grass_diff","grass_nor","forest_diff","forest_nor","trail_diff","trail_nor","sky","roof_diff","roof_nor","stonewall_diff","stonewall_nor","planks_diff","redwood_diff","plaster_diff","twig","leaves","grassblade","fern","bark_diff","bark_nor"],n=new Ah(a).setDataType(zt).loadAsync(vi("sky_hdr.hdr")),i=await Promise.all(t.map(r=>e.loadAsync(vi(r+".webp")))),s={};return t.forEach((r,o)=>{s[r]=i[o];let c=["twig","leaves","grassblade","fern"].includes(r);dg(s[r],!r.endsWith("_nor"),!c)}),s.sky_hdr=await n,s}var Ba=null,Lu=null,kr=null;async function eS(){let a=performance.now();yc(.02,"\u6B63\u5728\u8F7D\u5165\u8D34\u56FE\u2026\u2026");let e=bg(),t=await $1();ws.gen.textures=performance.now()-a;let n=cg(t.sky,t.sky_hdr);yn.add(n.mesh),yn.environment=n.buildEnv(an),yn.environmentIntensity=.55,yc(.32,"\u6B63\u5728\u5806\u5C71\uFF08\u5730\u5F62\u548C\u5CA9\u4F53\u5728\u540E\u53F0\u7EBF\u7A0B\u91CC\u751F\u6210\uFF09\u2026\u2026");let i=performance.now(),[s,r]=await Promise.all([_g(e,Mi,t,Es),Sg(Mi,t)]);ws.gen.world=performance.now()-i,yn.add(s.mesh),yn.add(r.group),e.dispose(),yc(.8,"\u6B63\u5728\u76D6\u623F\u5B50\u3001\u79CD\u6811\u2026\u2026"),await new Promise(p=>setTimeout(p,0));let o=Xg({T:t,heightAt:s.heightAt});yn.add(o.group);let c=Qg({T:t,terrain:s,placed:o.placed,time:Es,Q:Mi});yn.add(c.group);let l=eb({time:Es,heightAt:s.heightAt});yn.add(l.group);let h=tb({time:Es,fallsBase:l.fallsBase});yn.add(h.mesh);let d=nb({heightAt:s.heightAt});yn.add(d.group),Ba={sky:n,terrain:s,rocks:r,arch:o,veg:c,water:l,mist:h,story:d},Lu=hg(an,yn,si,Mi),kr=ib(si,Nu,s.heightAt);let f=Lh("ref",s.heightAt);if(kr.setView(f.pos,f.look,f.fov),yb(),yc(.95,"\u6B63\u5728\u7F16\u8BD1\u7740\u8272\u5668\u2026\u2026"),await new Promise(p=>setTimeout(p,20)),an.compile(yn,si),ws.gen.total=performance.now()-a,console.log(`[scene] ready in ${(ws.gen.total/1e3).toFixed(1)}s (textures ${(ws.gen.textures/1e3).toFixed(1)}s, world ${(ws.gen.world/1e3).toFixed(1)}s)`),za.loading.classList.add("hidden"),bb&&(za.loading.style.display="none"),tS(),vb){for(let p of["views","hud"]){let m=document.getElementById(p);m&&(m.style.display="none")}Mc=pb({scene:yn,camera:si,renderer:an,dom:Nu,heightAt:s.heightAt}),si.fov=55,si.far=900,si.updateProjectionMatrix(),Ba.sky.mesh.scale.setScalar(850),Ba.sky.mesh.onBeforeRender=()=>Ba.sky.mesh.position.copy(si.position)}rd.ready=!0,requestAnimationFrame(_b)}function tS(){let a=document.getElementById("views");a&&(a.querySelectorAll("button[data-view]").forEach(e=>{e.addEventListener("click",()=>mb(e.dataset.view))}),addEventListener("keydown",e=>{if(Mc)return;let t=Object.keys(Bf),n=parseInt(e.key,10);n>=1&&n<=t.length&&mb(t[n-1])}))}function mb(a){let e=Lh(a,Ba.terrain.heightAt);e&&kr.flyTo(e.pos,e.look,e.fov)}function yb(){an.setPixelRatio(Mi.dpr),an.setSize(innerWidth,innerHeight,!1),si.aspect=innerWidth/innerHeight,si.updateProjectionMatrix(),Lu?.setSize(innerWidth,innerHeight,Mi.dpr)}addEventListener("resize",yb);var gb=new ds,Pu=!1,Mc=null,sd=0,Iu=0;vs.has("debug")&&za.debug.classList.remove("hidden");function Mb(a){an.info.autoReset=!1,an.info.reset(),Ba.story.update(Es.value),Lu.render(a)}function _b(a){if(requestAnimationFrame(_b),Pu)return;gb.update(a);let e=Math.min(gb.getDelta(),1/20);if(Es.value+=e,(!Mc||!Mc.update(e))&&kr.update(e),Mb(e),sd+=e,Iu++,sd>.5){let t=Iu/sd;if(sd=0,Iu=0,!za.debug.classList.contains("hidden")){let n=an.info.render,i=si.position;za.debug.textContent=`fps ${t.toFixed(0)}  calls ${n.calls}  tris ${(n.triangles/1e6).toFixed(2)}M  pos ${i.x.toFixed(0)},${i.y.toFixed(0)},${i.z.toFixed(0)}`}}}var rd=window.__scene={ready:!1,error:null,shotDone:!1,shot(a){rd.shotDone=!1,Pu=!0,setTimeout(()=>{try{a.t!==void 0&&(Es.value=a.t);let e=null;typeof a.view=="string"?e=Lh(a.view,Ba.terrain.heightAt):a.pos&&(e={pos:new P(...a.pos),look:new P(...a.look),fov:a.fov||55}),e&&kr.setView(e.pos,e.look,e.fov);for(let n=0;n<(a.frames||3);n++)kr.update(0),Mb(.016);let t=an.getContext();t.readPixels(0,0,1,1,t.RGBA,t.UNSIGNED_BYTE,new Uint8Array(4))}catch(e){console.error("[scene] shot error",e.message,e.stack)}rd.shotDone=!0},20)},resume(){Pu=!1},info(){let a=an.getContext(),e=a.getExtension("WEBGL_debug_renderer_info"),t=an.info.render;return{gpu:e?a.getParameter(e.UNMASKED_RENDERER_WEBGL):"unknown",tier:Cu,gen:Object.fromEntries(Object.entries(ws.gen).map(([n,i])=>[n,+(i/1e3).toFixed(2)])),render:{calls:t.calls,tris:t.triangles},cam:si.position.toArray().map(n=>+n.toFixed(1))}},get scene(){return yn},get world(){return Ba},get game(){return Mc},setAtmos:null};eS().catch(a=>{console.error("[scene] init failed",a.message,a.stack),za.text.textContent="\u51FA\u9519\u4E86\uFF1A"+a.message,rd.error=a.message});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

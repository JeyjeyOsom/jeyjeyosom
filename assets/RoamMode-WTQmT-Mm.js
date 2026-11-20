import{C as Au,G as Ru,R as sl,a as dh,b as fh,c as Cs,Q as Cu,q as Pu,d as Lu,e as Du,f as Nu,g as Iu,h as Uu,H as Fu,i as Ou,j as zu,k as Bu,l as ku,m as Hu,n as Gu,o as Vu,p as Wu,r as Xu,s as qu,t as Yu,W as ia,u as lt,v as O,w as Ku,x as Zu,y as Ju,z as $u,A as Qu,B as ju,D as gr,V as td,E as ed,F as ya,I as xr}from"./index-B8RNbRCe.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rl="187",nd=0,Cl=1,id=2,Yr=1,sd=2,Bs=3,Hi=0,dn=1,bn=2,ms=0,Vs=1,Pl=2,Ll=3,Dl=4,rd=5,ds=100,ad=101,od=102,ld=103,cd=104,hd=200,ud=201,dd=202,fd=203,ph=204,mh=205,pd=206,md=207,gd=208,xd=209,_d=210,vd=211,Md=212,Sd=213,yd=214,ho=0,uo=1,fo=2,Js=3,po=4,mo=5,go=6,xo=7,gh=0,Ed=1,bd=2,fi=0,xh=1,_h=2,vh=3,Mh=4,Sh=5,yh=6,Eh=7,bh=300,_s=301,$s=302,Ea=303,ba=304,Qs=1e3,di=1001,_o=1002,Se=1003,wd=1004,_r=1005,un=1006,wa=1007,bi=1008,mn=1009,wh=1010,Th=1011,js=1012,al=1013,Jn=1014,Gn=1015,$n=1016,ol=1017,ll=1018,vs=1020,Ah=35902,Rh=35899,Ch=1021,Ph=1022,wn=1023,Ri=1026,wi=1027,cl=1028,hl=1029,Gi=1030,ul=1031,dl=1033,Kr=33776,Zr=33777,Jr=33778,$r=33779,vo=35840,Mo=35841,So=35842,yo=35843,Eo=36196,bo=37492,wo=37496,To=37488,Ao=37489,sa=37490,Ro=37491,Co=37808,Po=37809,Lo=37810,Do=37811,No=37812,Io=37813,Uo=37814,Fo=37815,Oo=37816,zo=37817,Bo=37818,ko=37819,Ho=37820,Go=37821,Vo=36492,Wo=36494,Xo=36495,qo=36283,Yo=36284,ra=36285,Ko=36286,Td=3200,Zo=0,Ad=1,yi="",En="srgb",tr="srgb-linear",aa="linear",me="srgb",Ta=7680,Rd=519,Cd=512,Pd=513,Ld=514,Lh=515,Dd=516,Nd=517,Dh=518,Nh=519,Id=35044,Nl="300 es",Vn=2e3,er=2001;function Ud(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function oa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fd(){const i=oa("canvas");return i.style.display="block",i}const Il={};function Ul(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ih(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Vt(...i){i=Ih(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ue(...i){i=Ih(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Qr(...i){const t=i.join(" ");t in Il||(Il[t]=!0,Vt(...i))}function Od(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const zd={[ho]:ho,[fo]:go,[po]:po,[Js]:mo,[uo]:uo,[go]:fo,[xo]:xo,[mo]:Js};class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Aa=Math.PI/180,Jo=180/Math.PI;function bs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Bd(i,t){return(i%t+t)%t}function Ra(i,t,e){return(1-e)*i+e*t}function kd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Hd(i,t){if(t.constructor===Float32Array)return i;const e=fl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Gd(i,t){if(t.constructor===Float32Array)return i;const e=fl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const bl=class bl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bl.prototype.isVector2=!0;let At=bl;class Ci{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){const S=Math.acos(m),E=Math.sin(S);g=Math.sin(g*S)/E,o=Math.sin(o*S)/E,l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+_*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+p*o,u=u*g+_*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-o*f,t[e+2]=c*p+h*f+o*d-l*u,t[e+3]=h*p-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const wl=class wl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wl.prototype.isVector3=!0;let U=wl;const Ca=new U,Fl=new Ci,Tl=class Tl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=s[0],m=s[3],g=s[6],S=s[1],E=s[4],y=s[7],T=s[2],R=s[5],x=s[8];return r[0]=a*_+o*S+l*T,r[3]=a*m+o*E+l*R,r[6]=a*g+o*y+l*x,r[1]=c*_+h*S+u*T,r[4]=c*m+h*E+u*R,r[7]=c*g+h*y+u*x,r[2]=d*_+f*S+p*T,r[5]=d*m+f*E+p*R,r[8]=d*g+f*y+p*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=e*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pa.makeScale(t,e)),this}rotate(t){return Qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pa.makeRotation(-t)),this}translate(t,e){return Qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Tl.prototype.isMatrix3=!0;let Xt=Tl;const Pa=new Xt,Ol=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vd(){const i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:t,whitePoint:n,transfer:aa,toXYZ:Ol,fromXYZ:zl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Ol,fromXYZ:zl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}const ie=Vd();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ji;class Wd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=oa("canvas")),Ji.width=t.width,Ji.height=t.height;const s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xd=0;class pl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(La(s[a].image)):r.push(La(s[a]))}else r=La(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function La(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}let qd=0;const Da=new U;class je extends Yi{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=di,s=di,r=un,a=bi,o=wn,l=mn,c=je.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=bs(),this.name="",this.source=new pl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Da).x}get height(){return this.source.getSize(Da).y}get depth(){return this.source.getSize(Da).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qs:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qs:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=bh;je.DEFAULT_ANISOTROPY=1;const Al=class Al{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(f+1)/2,T=(g+1)/2,R=(h+d)/4,x=(u+_)/4,b=(p+m)/4;return E>y&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=x/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=b/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=x/r,s=b/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-p)*(m-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Al.prototype.isVector4=!0;let Ee=Al;class Yd extends Yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new je({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new pl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Yd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uh extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Se,this.minFilter=Se,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kd extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Se,this.minFilter=Se,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const ga=class ga{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,p,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ga().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),a=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,p=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d+_*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,p=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,p=o*h,_=o*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,p=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,Jd)}lookAt(t,e,n){const s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),xi.crossVectors(n,fn),xi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),xi.crossVectors(n,fn)),xi.normalize(),vr.crossVectors(fn,xi),s[0]=xi.x,s[4]=vr.x,s[8]=fn.x,s[1]=xi.y,s[5]=vr.y,s[9]=fn.y,s[2]=xi.z,s[6]=vr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],S=n[3],E=n[7],y=n[11],T=n[15],R=s[0],x=s[4],b=s[8],k=s[12],N=s[1],F=s[5],G=s[9],J=s[13],D=s[2],K=s[6],j=s[10],X=s[14],rt=s[3],Y=s[7],et=s[11],it=s[15];return r[0]=a*R+o*N+l*D+c*rt,r[4]=a*x+o*F+l*K+c*Y,r[8]=a*b+o*G+l*j+c*et,r[12]=a*k+o*J+l*X+c*it,r[1]=h*R+u*N+d*D+f*rt,r[5]=h*x+u*F+d*K+f*Y,r[9]=h*b+u*G+d*j+f*et,r[13]=h*k+u*J+d*X+f*it,r[2]=p*R+_*N+m*D+g*rt,r[6]=p*x+_*F+m*K+g*Y,r[10]=p*b+_*G+m*j+g*et,r[14]=p*k+_*J+m*X+g*it,r[3]=S*R+E*N+y*D+T*rt,r[7]=S*x+E*F+y*K+T*Y,r[11]=S*b+E*G+y*j+T*et,r[15]=S*k+E*J+y*X+T*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],S=l*f-c*d,E=o*f-c*u,y=o*d-l*u,T=a*f-c*h,R=a*d-l*h,x=a*u-o*h;return e*(_*S-m*E+g*y)-n*(p*S-m*T+g*R)+s*(p*E-_*T+g*x)-r*(p*y-_*R+m*x)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],S=e*o-n*a,E=e*l-s*a,y=e*c-r*a,T=n*l-s*o,R=n*c-r*o,x=s*c-r*l,b=h*_-u*p,k=h*m-d*p,N=h*g-f*p,F=u*m-d*_,G=u*g-f*_,J=d*g-f*m,D=S*J-E*G+y*F+T*N-R*k+x*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/D;return t[0]=(o*J-l*G+c*F)*K,t[1]=(s*G-n*J-r*F)*K,t[2]=(_*x-m*R+g*T)*K,t[3]=(d*R-u*x-f*T)*K,t[4]=(l*N-a*J-c*k)*K,t[5]=(e*J-s*N+r*k)*K,t[6]=(m*y-p*x-g*E)*K,t[7]=(h*x-d*y+f*E)*K,t[8]=(a*G-o*N+c*b)*K,t[9]=(n*N-e*G-r*b)*K,t[10]=(p*R-_*y+g*S)*K,t[11]=(u*y-h*R-f*S)*K,t[12]=(o*k-a*F-l*b)*K,t[13]=(e*F-n*k+s*b)*K,t[14]=(_*E-p*T-m*S)*K,t[15]=(h*T-u*E+d*S)*K,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,_=a*h,m=a*u,g=o*u,S=l*c,E=l*h,y=l*u,T=n.x,R=n.y,x=n.z;return s[0]=(1-(_+g))*T,s[1]=(f+y)*T,s[2]=(p-E)*T,s[3]=0,s[4]=(f-y)*R,s[5]=(1-(d+g))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(p+E)*x,s[9]=(m-S)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),l=$i.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Nn.copy(this);const c=1/a,h=1/o,u=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Vn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Vn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===er)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Vn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Vn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===er)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ga.prototype.isMatrix4=!0;let ce=ga;const $i=new U,Nn=new ce,Zd=new U(0,0,0),Jd=new U(1,1,1),xi=new U,vr=new U,fn=new U,Bl=new ce,kl=new Ci;class Vi{constructor(t=0,e=0,n=0,s=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kl.setFromEuler(this),this.setFromQuaternion(kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $d=0;const Hl=new U,Qi=new Ci,ni=new ce,Mr=new U,Ps=new U,Qd=new U,jd=new Ci,Gl=new U(1,0,0),Vl=new U(0,1,0),Wl=new U(0,0,1),Xl={type:"added"},tf={type:"removed"},ji={type:"childadded",child:null},Na={type:"childremoved",child:null};class tn extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const t=new U,e=new Vi,n=new Ci,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Xt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(Vl,t)}rotateZ(t){return this.rotateOnAxis(Wl,t)}translateOnAxis(t,e){return Hl.copy(t).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(Vl,t)}translateZ(t){return this.translateOnAxis(Wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Ps,Mr,this.up):ni.lookAt(Mr,Ps,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(ni),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xl),ji.child=t,this.dispatchEvent(ji),ji.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xl),ji.child=t,this.dispatchEvent(ji),ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}tn.DEFAULT_UP=new U(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gn extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ef={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ef)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Bd(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ua(a,r,t+1/3),this.g=Ua(a,r,t),this.b=Ua(a,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=En){function n(r){r!==void 0&&parseFloat(r)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){const n=Fh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return ie.workingToColorSpace($e.copy(this),t),Math.round(te($e.r*255,0,255))*65536+Math.round(te($e.g*255,0,255))*256+Math.round(te($e.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace($e.copy(this),e);const n=$e.r,s=$e.g,r=$e.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=En){ie.workingToColorSpace($e.copy(this),t);const e=$e.r,n=$e.g,s=$e.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Sr);const n=Ra(_i.h,Sr.h,e),s=Ra(_i.s,Sr.s,e),r=Ra(_i.l,Sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new qt;qt.NAMES=Fh;class Oh extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const In=new U,ii=new U,Fa=new U,si=new U,ts=new U,es=new U,ql=new U,Oa=new U,za=new U,Ba=new U,ka=new Ee,Ha=new Ee,Ga=new Ee;class Hn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),ii.subVectors(n,e),Fa.subVectors(t,e);const a=In.dot(In),o=In.dot(ii),l=In.dot(Fa),c=ii.dot(ii),h=ii.dot(Fa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return ka.setScalar(0),Ha.setScalar(0),Ga.setScalar(0),ka.fromBufferAttribute(t,e),Ha.fromBufferAttribute(t,n),Ga.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ka,r.x),a.addScaledVector(Ha,r.y),a.addScaledVector(Ga,r.z),a}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),ii.subVectors(t,e),In.cross(ii).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),In.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ts.subVectors(s,n),es.subVectors(r,n),Oa.subVectors(t,n);const l=ts.dot(Oa),c=es.dot(Oa);if(l<=0&&c<=0)return e.copy(n);za.subVectors(t,s);const h=ts.dot(za),u=es.dot(za);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(ts,a);Ba.subVectors(t,r);const f=ts.dot(Ba),p=es.dot(Ba);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(es,o);const m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return ql.subVectors(r,s),o=(u-h)/(u-h+(f-p)),e.copy(s).addScaledVector(ql,o);const g=1/(m+_+d);return a=_*g,o=d*g,e.copy(n).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ki{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yr.copy(n.boundingBox)),yr.applyMatrix4(t.matrixWorld),this.union(yr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Er.subVectors(this.max,Ls),ns.subVectors(t.a,Ls),is.subVectors(t.b,Ls),ss.subVectors(t.c,Ls),vi.subVectors(is,ns),Mi.subVectors(ss,is),Ni.subVectors(ns,ss);let e=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-Ni.z,Ni.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,Ni.z,0,-Ni.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-Ni.y,Ni.x,0];return!Va(e,ns,is,ss,Er)||(e=[1,0,0,0,1,0,0,0,1],!Va(e,ns,is,ss,Er))?!1:(br.crossVectors(vi,Mi),e=[br.x,br.y,br.z],Va(e,ns,is,ss,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ri=[new U,new U,new U,new U,new U,new U,new U,new U],Un=new U,yr=new Ki,ns=new U,is=new U,ss=new U,vi=new U,Mi=new U,Ni=new U,Ls=new U,Er=new U,br=new U,Ii=new U;function Va(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ii.fromArray(i,r);const o=s.x*Math.abs(Ii.x)+s.y*Math.abs(Ii.y)+s.z*Math.abs(Ii.z),l=t.dot(Ii),c=e.dot(Ii),h=n.dot(Ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Fe=new U,wr=new At;let nf=0;class Rn extends Yi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Id,this.updateRanges=[],this.gpuType=Gn,this.version=0,this._normalizationScale=t!==void 0?fl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Hd(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Gd(t,this.array)}}class zh extends Rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bh extends Rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ae extends Rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const sf=new Ki,Ds=new U,Wa=new U;class cr{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Wa)),this.expandByPoint(Ds.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let rf=0;const yn=new ce,Xa=new tn,rs=new U,pn=new Ki,Ns=new Ki,Ge=new U;class vn extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ud(t)?Bh:zh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Ge.addVectors(pn.min,Ns.min),pn.expandByPoint(Ge),Ge.addVectors(pn.max,Ns.max),pn.expandByPoint(Ge)):(pn.expandByPoint(Ns.min),pn.expandByPoint(Ns.max))}pn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ge));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ge.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(t,c),Ge.add(rs)),s=Math.max(s,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Rn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let k=0;k<n.count;k++)o[k]=new U,l[k]=new U;const h=new U,u=new U,d=new U,f=new At,p=new At,_=new At,m=new U,g=new U;function S(k,N,F){c[k]=c[N]=c[F]=1,h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,N),d.fromBufferAttribute(n,F),f.fromBufferAttribute(r,k),p.fromBufferAttribute(r,N),_.fromBufferAttribute(r,F),u.sub(h),d.sub(h),p.sub(f),_.sub(f);const G=1/(p.x*_.y-_.x*p.y);isFinite(G)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(G),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(G),o[k].add(m),o[N].add(m),o[F].add(m),l[k].add(g),l[N].add(g),l[F].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let k=0,N=E.length;k<N;++k){const F=E[k],G=F.start,J=F.count;for(let D=G,K=G+J;D<K;D+=3)S(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new U,T=new U,R=new U,x=new U;function b(k){R.fromBufferAttribute(s,k),x.copy(R);const N=o[k];y.copy(N),y.sub(R.multiplyScalar(R.dot(N))).normalize(),T.crossVectors(x,N);const G=T.dot(l[k])<0?-1:1;a.setXYZW(k,y.x,y.y,y.z,G)}for(let k=0,N=n.count;k<N;++k)c[k]&&b(k);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Rn(d,h,u)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new vn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new U,af=new U,of=new Xt;class ci{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=qa.subVectors(n,e).cross(af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(qa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||of.getNormalMatrix(t),s=this.coplanarPoint(qa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let lf=0;class hr extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Vs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ta,this.stencilZFail=Ta,this.stencilZPass=Ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ci().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ai=new U,Ya=new U,Tr=new U,Ar=new U;class kh{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ya.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),Ar.copy(this.origin).sub(Ya);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Tr),o=Ar.dot(this.direction),l=-Ar.dot(Tr),c=Ar.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ya).addScaledVector(Tr,d),f}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);const n=ai.dot(this.direction),s=ai.dot(ai)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,p=e.x-a.x,_=e.y-a.y,m=e.z-a.z,g=n.x-a.x,S=n.y-a.y,E=n.z-a.z,y=Math.abs(l),T=Math.abs(c),R=Math.abs(h);let x,b,k,N,F,G,J,D,K,j,X,rt;if(y>=T&&y>=R?(k=l,G=u,K=p,rt=g,l>=0?(x=c,b=h,N=d,F=f,J=_,D=m,j=S,X=E):(x=h,b=c,N=f,F=d,J=m,D=_,j=E,X=S)):T>=R?(k=c,G=d,K=_,rt=S,c>=0?(x=h,b=l,N=f,F=u,J=m,D=p,j=E,X=g):(x=l,b=h,N=u,F=f,J=p,D=m,j=g,X=E)):(k=h,G=f,K=m,rt=E,h>=0?(x=l,b=c,N=u,F=d,J=p,D=_,j=g,X=S):(x=c,b=l,N=d,F=u,J=_,D=p,j=S,X=g)),k===0)return null;const Y=x/k,et=b/k,it=1/k,yt=N-Y*G,Dt=F-et*G,Q=J-Y*K,vt=D-et*K,wt=j-Y*rt,Ot=X-et*rt,_t=wt*vt-Ot*Q,Wt=yt*Ot-Dt*wt,be=Q*Dt-vt*yt;if(s){if(_t<0||Wt<0||be<0)return null}else if((_t<0||Wt<0||be<0)&&(_t>0||Wt>0||be>0))return null;const Bt=_t+Wt+be;if(Bt===0)return null;const re=it*(_t*G+Wt*K+be*rt);return(Bt>0?re<0:re>0)?null:this.at(re/Bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zn extends hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Yl=new ce,Ui=new kh,Rr=new cr,Kl=new U,Cr=new U,Pr=new U,Lr=new U,Ka=new U,Dr=new U,Zl=new U,Nr=new U;class Ft extends tn{constructor(t=new vn,e=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ka.fromBufferAttribute(u,t),a?Dr.addScaledVector(Ka,h):Dr.addScaledVector(Ka.sub(e),h))}e.add(Dr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(Rr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Rr,Kl)===null||Ui.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&(Yl.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,T=E;y<T;y+=3){const R=o.getX(y),x=o.getX(y+1),b=o.getX(y+2);s=Ir(this,g,t,n,c,h,u,R,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const S=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=Ir(this,a,t,n,c,h,u,S,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const m=d[p],g=a[m.materialIndex],S=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,T=E;y<T;y+=3){const R=y,x=y+1,b=y+2;s=Ir(this,g,t,n,c,h,u,R,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const S=m,E=m+1,y=m+2;s=Ir(this,a,t,n,c,h,u,S,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function cf(i,t,e,n,s,r,a,o){let l;if(t.side===dn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Hi,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Nr);return c<e.near||c>e.far?null:{distance:c,point:Nr.clone(),object:i}}function Ir(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Cr),i.getVertexPosition(l,Pr),i.getVertexPosition(c,Lr);const h=cf(i,t,e,n,Cr,Pr,Lr,Zl);if(h){const u=new U;Hn.getBarycoord(Zl,Cr,Pr,Lr,u),s&&(h.uv=Hn.getInterpolatedAttribute(s,o,l,c,u,new At)),r&&(h.uv1=Hn.getInterpolatedAttribute(r,o,l,c,u,new At)),a&&(h.normal=Hn.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};Hn.getNormal(Cr,Pr,Lr,d.normal),h.face=d,h.barycoord=u}return h}class xa extends je{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Se,h=Se,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jl extends Rn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const as=new ce,$l=new ce,Ur=[],Ql=new Ki,hf=new ce,Is=new Ft,Us=new cr;class Ti extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,hf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Ql.copy(t.boundingBox).applyMatrix4(as),this.boundingBox.union(Ql)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,as),Us.copy(t.boundingSphere).applyMatrix4(as),this.boundingSphere.union(Us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),t.ray.intersectsSphere(Us)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,as),$l.multiplyMatrices(n,as),Is.matrixWorld=$l,Is.raycast(t,Ur);for(let a=0,o=Ur.length;a<o;a++){const l=Ur[a];l.instanceId=r,l.object=this,e.push(l)}Ur.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xa(new Float32Array(s*this.count),s,this.count,cl,Gn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fi=new cr,uf=new At(.5,.5),Fr=new U;class nr{constructor(t=new ci,e=new ci,n=new ci,s=new ci,r=new ci,a=new ci){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],S=r[12],E=r[13],y=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,g-p,T-S).normalize(),s[1].setComponents(c+a,f+h,g+p,T+S).normalize(),s[2].setComponents(c+o,f+u,g+_,T+E).normalize(),s[3].setComponents(c-o,f-u,g-_,T-E).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,f-d,g-m,T-y).normalize();else if(s[4].setComponents(c-l,f-d,g-m,T-y).normalize(),e===Vn)s[5].setComponents(c+l,f+d,g+m,T+y).normalize();else if(e===er)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);const e=uf.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const jl=new ce;class gl{constructor(){this.coordinateSystem=Vn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];jl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new nr),n[s].setFromProjectionMatrix(jl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new nr),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new gl().copy(this)}}class Hh extends je{constructor(t=[],e=_s,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tc extends je{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ms extends je{constructor(t,e,n=Jn,s,r,a,o=Se,l=Se,c,h=Ri,u=1){if(h!==Ri&&h!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Gh extends Ms{constructor(t,e=Jn,n=_s,s,r,a=Se,o=Se,l,c=Ri){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Vh extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Pi extends vn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function p(_,m,g,S,E,y,T,R,x,b,k){const N=y/x,F=T/b,G=y/2,J=T/2,D=R/2,K=x+1,j=b+1;let X=0,rt=0;const Y=new U;for(let et=0;et<j;et++){const it=et*F-J;for(let yt=0;yt<K;yt++){const Dt=yt*N-G;Y[_]=Dt*S,Y[m]=it*E,Y[g]=D,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[g]=R>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(yt/x),u.push(1-et/b),X+=1}}for(let et=0;et<b;et++)for(let it=0;it<x;it++){const yt=d+it+K*et,Dt=d+it+K*(et+1),Q=d+(it+1)+K*(et+1),vt=d+(it+1)+K*et;l.push(yt,Dt,vt),l.push(Dt,Q,vt),rt+=6}o.addGroup(f,rt,k),f+=rt,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Vt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new At:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],r=[],a=[],o=new U,l=new ce;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class xl extends jn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new At){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class df extends xl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function _l(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const ec=new U,nc=new U,Za=new _l,Ja=new _l,$a=new _l;class ff extends jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(nc.subVectors(s[0],s[1]).add(s[0]),c=nc);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ec.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ec),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Za.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,_,m),Ja.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,_,m),$a.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ja.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),$a.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Za.calc(l),Ja.calc(l),$a.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ic(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function pf(i,t){const e=1-i;return e*e*t}function mf(i,t){return 2*(1-i)*i*t}function gf(i,t){return i*i*t}function Ws(i,t,e,n){return pf(i,t)+mf(i,e)+gf(i,n)}function xf(i,t){const e=1-i;return e*e*e*t}function _f(i,t){const e=1-i;return 3*e*e*i*t}function vf(i,t){return 3*(1-i)*i*i*t}function Mf(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return xf(i,t)+_f(i,e)+vf(i,n)+Mf(i,s)}class Wh extends jn{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(t,s.x,r.x,a.x,o.x),Xs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sf extends jn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Xs(t,s.x,r.x,a.x,o.x),Xs(t,s.y,r.y,a.y,o.y),Xs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xh extends jn{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yf extends jn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qh extends jn{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ws(t,s.x,r.x,a.x),Ws(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ef extends jn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ws(t,s.x,r.x,a.x),Ws(t,s.y,r.y,a.y),Ws(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ic(o,l.x,c.x,h.x,u.x),ic(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new At().fromArray(s))}return this}}var sc=Object.freeze({__proto__:null,ArcCurve:df,CatmullRomCurve3:ff,CubicBezierCurve:Wh,CubicBezierCurve3:Sf,EllipseCurve:xl,LineCurve:Xh,LineCurve3:yf,QuadraticBezierCurve:qh,QuadraticBezierCurve3:Ef,SplineCurve:Yh});class bf extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new sc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class Ss extends bf{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Xh(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new qh(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Wh(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Yh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new xl(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Kh extends Ss{constructor(t){super(t),this.uuid=bs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ss().fromJSON(s))}return this}}function wf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Zh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Pf(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){const f=i[d],p=i[d+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ir(r,a,e,o,l,c,0),a}function Zh(i,t,e,n,s){let r;if(s===Hf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=rc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=rc(a/n|0,i[a],i[a+1],r);return r&&ys(r,r.next)&&(rr(r),r=r.next),r}function Wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ys(e,e.next)||Te(e.prev,e,e.next)===0)){if(rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ir(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Uf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Af(i,n,s,r):Tf(i)){t.push(l.i,i.i,c.i),rr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Rf(Wi(i),t),ir(i,t,e,n,s,r,2)):a===2&&Cf(i,t,e,n,s,r):ir(Wi(i),t,e,n,s,r,1);break}}}function Tf(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ks(s,o,r,l,a,c,p.x,p.y)&&Te(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Af(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Te(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),p=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),g=$o(f,p,t,e,n),S=$o(_,m,t,e,n);let E=i.prevZ,y=i.nextZ;for(;E&&E.z>=g&&y&&y.z<=S;){if(E.x>=f&&E.x<=_&&E.y>=p&&E.y<=m&&E!==s&&E!==a&&ks(o,h,l,u,c,d,E.x,E.y)&&Te(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&ks(o,h,l,u,c,d,y.x,y.y)&&Te(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=g;){if(E.x>=f&&E.x<=_&&E.y>=p&&E.y<=m&&E!==s&&E!==a&&ks(o,h,l,u,c,d,E.x,E.y)&&Te(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=_&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&ks(o,h,l,u,c,d,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Rf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ys(n,s)&&$h(n,e,e.next,s)&&sr(n,s)&&sr(s,n)&&(t.push(n.i,e.i,s.i),rr(e),rr(e.next),e=i=s),e=e.next}while(e!==i);return Wi(e)}function Cf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zf(a,o)){let l=Qh(a,o);a=Wi(a,a.next),l=Wi(l,l.next),ir(a,t,e,n,s,r,0),ir(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Pf(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Zh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Of(c))}s.sort(Lf);for(let r=0;r<s.length;r++)e=Df(s[r],e);return e}function Lf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Df(i,t){const e=Nf(i,t);if(!e)return t;const n=Qh(e,i);return Wi(n,n.next),Wi(e,e.next)}function Nf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(ys(i,e))return e;do{if(ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Jh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);sr(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&If(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function If(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function Uf(i,t,e,n){let s=i;do s.z===0&&(s.z=$o(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ff(s)}function Ff(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function $o(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Of(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Jh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ks(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Jh(i,t,e,n,s,r,a,o)}function zf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Bf(i,t)&&(sr(i,t)&&sr(t,i)&&kf(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||ys(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ys(i,t){return i.x===t.x&&i.y===t.y}function $h(i,t,e,n){const s=zr(Te(i,t,e)),r=zr(Te(i,t,n)),a=zr(Te(e,n,i)),o=zr(Te(e,n,t));return!!(s!==r&&a!==o||s===0&&Or(i,e,t)||r===0&&Or(i,n,t)||a===0&&Or(e,i,n)||o===0&&Or(e,t,n))}function Or(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function zr(i){return i>0?1:i<0?-1:0}function Bf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$h(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function sr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function kf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Qh(i,t){const e=Qo(i.i,i.x,i.y),n=Qo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function rc(i,t,e,n){const s=Qo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qo(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Gf{static triangulate(t,e,n=2){return wf(t,e,n)}}class qs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return qs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ac(t),oc(n,t);let a=t.length;e.forEach(ac);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,oc(n,e[l]);const o=Gf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ac(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function oc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Kn extends vn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const S=g*d-a;for(let E=0;E<c;E++){const y=E*u-r;p.push(y,-S,0),_.push(0,0,1),m.push(E/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const E=S+c*g,y=S+c*(g+1),T=S+1+c*(g+1),R=S+1+c*g;f.push(E,y,R),f.push(y,T,R)}this.setIndex(f),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.widthSegments,t.heightSegments)}}class _a extends vn{constructor(t=new Kh([new At(0,.5),new At(-.5,-.5),new At(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(r,3)),this.setAttribute("uv",new Ae(a,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const p=d.holes;qs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const S=p[m];qs.isClockWise(S)===!0&&(p[m]=S.reverse())}const _=qs.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const S=p[m];f=f.concat(S)}for(let m=0,g=f.length;m<g;m++){const S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let m=0,g=_.length;m<g;m++){const S=_[m],E=S[0]+u,y=S[1]+u,T=S[2]+u;n.push(E,y,T),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Vf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new _a(n,t.curveSegments)}}function Vf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function Es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(lc(s))s.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(lc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function rn(i){const t={};for(let e=0;e<i.length;e++){const n=Es(i[e]);for(const s in n)t[s]=n[s]}return t}function lc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Wf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Xf={clone:Es,merge:rn};var qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qf,this.fragmentShader=Yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Wf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new At().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ce().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Kf extends Cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jr extends hr{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new qt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Zf extends hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jf extends hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class tu extends tn{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Qa=new ce,cc=new U,hc=new U;class $f{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;cc.setFromMatrixPosition(t.matrixWorld),e.position.copy(cc),hc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Qa,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===er||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Br=new U,kr=new Ci,Xn=new U;class vl extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Br,kr,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,kr,Xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Br,kr,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Br,kr,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Si=new U,uc=new At,dc=new At;class kn extends vl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,uc,dc),e.subVectors(dc,uc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class la extends vl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qf extends $f{constructor(){super(new la(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jf extends tu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Qf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class tp extends tu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const os=-90,ls=1;class jo extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(os,ls,t,e);s.layers=this.layers,this.add(s);const r=new kn(os,ls,t,e);r.layers=this.layers,this.add(r);const a=new kn(os,ls,t,e);a.layers=this.layers,this.add(a);const o=new kn(os,ls,t,e);o.layers=this.layers,this.add(o);const l=new kn(os,ls,t,e);l.layers=this.layers,this.add(l);const c=new kn(os,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ep extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const fc=new ce;class np{constructor(t,e,n=0,s=1/0){this.ray=new kh(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ue("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fc),this}intersectObject(t,e=!0,n=[]){return tl(t,this,n,e),n.sort(pc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)tl(t[s],this,n,e);return n.sort(pc),n}}function pc(i,t){return i.distance-t.distance}function tl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)tl(r[a],t,e,!0)}}function mc(i,t,e,n){const s=ip(n);switch(e){case Ch:return i*t;case cl:return i*t/s.components*s.byteLength;case hl:return i*t/s.components*s.byteLength;case Gi:return i*t*2/s.components*s.byteLength;case ul:return i*t*2/s.components*s.byteLength;case Ph:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case dl:return i*t*4/s.components*s.byteLength;case Kr:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:case yo:return Math.max(i,16)*Math.max(t,8)/4;case vo:case So:return Math.max(i,8)*Math.max(t,8)/2;case Eo:case bo:case To:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case sa:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vo:case Wo:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qo:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ip(i){switch(i){case mn:case wh:return{byteLength:1,components:1};case js:case Th:case $n:return{byteLength:2,components:1};case ol:case ll:return{byteLength:2,components:4};case Jn:case al:case Gn:return{byteLength:4,components:1};case Ah:case Rh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function eu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sp(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ap=`#ifdef USE_ALPHAHASH
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
#endif`,op=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
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
#endif`,dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fp=`#ifdef USE_BATCHING
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
#endif`,pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,vp=`#ifdef USE_BUMPMAP
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Rp=`#define PI 3.141592653589793
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
} // validated`,Cp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Jp=`#ifdef USE_ENVMAP
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
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e0=`PhysicalMaterial material;
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
#endif`,n0=`uniform sampler2D dfgLUT;
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
}`,i0=`
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
#endif`,s0=`#if defined( RE_IndirectDiffuse )
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
#endif`,r0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,o0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p0=`#if defined( USE_POINTS_UV )
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
#endif`,m0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,x0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_0=`#if defined( USE_MORPHCOLORS )
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
#endif`,v0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M0=`#ifdef USE_MORPHTARGETS
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
#endif`,S0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,E0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A0=`#ifdef USE_NORMALMAP
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
#endif`,R0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,I0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,k0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V0=`float getShadowMask() {
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
}`,W0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X0=`#ifdef USE_SKINNING
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
#endif`,q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y0=`#ifdef USE_SKINNING
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
#endif`,K0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,J0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Q0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform float backgroundBlurriness;
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
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
}`,um=`#if DEPTH_PACKING == 3200
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
}`,dm=`#define DISTANCE
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
}`,fm=`#define DISTANCE
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
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
}`,xm=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,Sm=`#define LAMBERT
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
}`,ym=`#define MATCAP
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
}`,Em=`#define MATCAP
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
}`,bm=`#define NORMAL
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
}`,wm=`#define NORMAL
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
}`,Tm=`#define PHONG
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
}`,Am=`#define PHONG
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
}`,Rm=`#define STANDARD
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
}`,Cm=`#define STANDARD
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
}`,Pm=`#define TOON
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
}`,Lm=`#define TOON
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
}`,Dm=`uniform float size;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Um=`uniform vec3 color;
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
}`,Fm=`uniform float rotation;
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
}`,Om=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:rp,alphahash_pars_fragment:ap,alphamap_fragment:op,alphamap_pars_fragment:lp,alphatest_fragment:cp,alphatest_pars_fragment:hp,aomap_fragment:up,aomap_pars_fragment:dp,batching_pars_vertex:fp,batching_vertex:pp,begin_vertex:mp,beginnormal_vertex:gp,bsdfs:xp,iridescence_fragment:_p,bumpmap_pars_fragment:vp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:yp,clipping_planes_vertex:Ep,color_fragment:bp,color_pars_fragment:wp,color_pars_vertex:Tp,color_vertex:Ap,common:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Dp,emissivemap_pars_fragment:Np,colorspace_fragment:Ip,colorspace_pars_fragment:Up,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:zp,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:Jp,envmap_vertex:kp,fog_vertex:Hp,fog_pars_vertex:Gp,fog_fragment:Vp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:Kp,lights_pars_begin:Zp,lights_toon_fragment:$p,lights_toon_pars_fragment:Qp,lights_phong_fragment:jp,lights_phong_pars_fragment:t0,lights_physical_fragment:e0,lights_physical_pars_fragment:n0,lights_fragment_begin:i0,lights_fragment_maps:s0,lights_fragment_end:r0,lightprobes_pars_fragment:a0,logdepthbuf_fragment:o0,logdepthbuf_pars_fragment:l0,logdepthbuf_pars_vertex:c0,logdepthbuf_vertex:h0,map_fragment:u0,map_pars_fragment:d0,map_particle_fragment:f0,map_particle_pars_fragment:p0,metalnessmap_fragment:m0,metalnessmap_pars_fragment:g0,morphinstance_vertex:x0,morphcolor_vertex:_0,morphnormal_vertex:v0,morphtarget_pars_vertex:M0,morphtarget_vertex:S0,normal_fragment_begin:y0,normal_fragment_maps:E0,normal_pars_fragment:b0,normal_pars_vertex:w0,normal_vertex:T0,normalmap_pars_fragment:A0,clearcoat_normal_fragment_begin:R0,clearcoat_normal_fragment_maps:C0,clearcoat_pars_fragment:P0,iridescence_pars_fragment:L0,opaque_fragment:D0,packing:N0,premultiplied_alpha_fragment:I0,project_vertex:U0,dithering_fragment:F0,dithering_pars_fragment:O0,roughnessmap_fragment:z0,roughnessmap_pars_fragment:B0,shadowmap_pars_fragment:k0,shadowmap_pars_vertex:H0,shadowmap_vertex:G0,shadowmask_pars_fragment:V0,skinbase_vertex:W0,skinning_pars_vertex:X0,skinning_vertex:q0,skinnormal_vertex:Y0,specularmap_fragment:K0,specularmap_pars_fragment:Z0,tonemapping_fragment:J0,tonemapping_pars_fragment:$0,transmission_fragment:Q0,transmission_pars_fragment:j0,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:am,backgroundCube_frag:om,cube_vert:lm,cube_frag:cm,depth_vert:hm,depth_frag:um,distance_vert:dm,distance_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:xm,meshbasic_vert:_m,meshbasic_frag:vm,meshlambert_vert:Mm,meshlambert_frag:Sm,meshmatcap_vert:ym,meshmatcap_frag:Em,meshnormal_vert:bm,meshnormal_frag:wm,meshphong_vert:Tm,meshphong_frag:Am,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Dm,points_frag:Nm,shadow_vert:Im,shadow_frag:Um,sprite_vert:Fm,sprite_frag:Om},St={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Yn={basic:{uniforms:rn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:rn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:rn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:rn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:rn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:rn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:rn([St.points,St.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:rn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:rn([St.common,St.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:rn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:rn([St.sprite,St.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:rn([St.common,St.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:rn([St.lights,St.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Yn.physical={uniforms:rn([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Hr={r:0,b:0,g:0},zm=new ce,nu=new Xt;nu.set(-1,0,0,0,1,0,0,0,1);function Bm(i,t,e,n,s,r){const a=new qt(0);let o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const y=S.backgroundBlurriness>0;E=t.get(E,y)}return E}function p(S){let E=!1;const y=f(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(S,E){const y=f(E);y&&y.isCubeTexture?(c===void 0&&(c=new Ft(new Pi(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Es(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(nu),c.material.toneMapped=ie.getTransfer(y.colorSpace)!==me,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ft(new Kn(2,2),new Cn({name:"BackgroundMaterial",uniforms:Es(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ie.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,E){S.getRGB(Hr,jh(i)),e.buffers.color.setClear(Hr.r,Hr.g,Hr.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:p,addToRenderList:_,dispose:g}}function km(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(F,G,J,D,K){let j=!1;const X=u(F,D,J,G);r!==X&&(r=X,c(r.object)),j=f(F,D,J,K),j&&p(F,D,J,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(F,G,J,D),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function u(F,G,J,D){const K=D.wireframe===!0;let j=n[G.id];j===void 0&&(j={},n[G.id]=j);const X=F.isInstancedMesh===!0?F.id:0;let rt=j[X];rt===void 0&&(rt={},j[X]=rt);let Y=rt[J.id];Y===void 0&&(Y={},rt[J.id]=Y);let et=Y[K];return et===void 0&&(et=d(l()),Y[K]=et),et}function d(F){const G=[],J=[],D=[];for(let K=0;K<e;K++)G[K]=0,J[K]=0,D[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:D,object:F,attributes:{},index:null}}function f(F,G,J,D){const K=r.attributes,j=G.attributes;let X=0;const rt=J.getAttributes();for(const Y in rt)if(rt[Y].location>=0){const it=K[Y];let yt=j[Y];if(yt===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(yt=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(yt=F.instanceColor)),it===void 0||it.attribute!==yt||yt&&it.data!==yt.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function p(F,G,J,D){const K={},j=G.attributes;let X=0;const rt=J.getAttributes();for(const Y in rt)if(rt[Y].location>=0){let it=j[Y];it===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(it=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(it=F.instanceColor));const yt={};yt.attribute=it,it&&it.data&&(yt.data=it.data),K[Y]=yt,X++}r.attributes=K,r.attributesNum=X,r.index=D}function _(){const F=r.newAttributes;for(let G=0,J=F.length;G<J;G++)F[G]=0}function m(F){g(F,0)}function g(F,G){const J=r.newAttributes,D=r.enabledAttributes,K=r.attributeDivisors;J[F]=1,D[F]===0&&(i.enableVertexAttribArray(F),D[F]=1),K[F]!==G&&(i.vertexAttribDivisor(F,G),K[F]=G)}function S(){const F=r.newAttributes,G=r.enabledAttributes;for(let J=0,D=G.length;J<D;J++)G[J]!==F[J]&&(i.disableVertexAttribArray(J),G[J]=0)}function E(F,G,J,D,K,j,X){X===!0?i.vertexAttribIPointer(F,G,J,K,j):i.vertexAttribPointer(F,G,J,D,K,j)}function y(F,G,J,D){_();const K=D.attributes,j=J.getAttributes(),X=G.defaultAttributeValues;for(const rt in j){const Y=j[rt];if(Y.location>=0){let et=K[rt];if(et===void 0&&(rt==="instanceMatrix"&&F.instanceMatrix&&(et=F.instanceMatrix),rt==="instanceColor"&&F.instanceColor&&(et=F.instanceColor)),et!==void 0){const it=et.normalized,yt=et.itemSize,Dt=t.get(et);if(Dt===void 0)continue;const Q=Dt.buffer,vt=Dt.type,wt=Dt.bytesPerElement,Ot=vt===i.INT||vt===i.UNSIGNED_INT||et.gpuType===al;if(et.isInterleavedBufferAttribute){const _t=et.data,Wt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,be=et.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Bt=0;Bt<Y.locationSize;Bt++)g(Y.location+Bt,_t.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Bt=0;Bt<Y.locationSize;Bt++)m(Y.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Bt=0;Bt<Y.locationSize;Bt++)E(Y.location+Bt,yt/Y.locationSize,vt,it,Wt*wt,(be+yt/Y.locationSize*Bt)*wt,Ot)}else{if(et.isInstancedBufferAttribute){for(let _t=0;_t<Y.locationSize;_t++)g(Y.location+_t,et.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let _t=0;_t<Y.locationSize;_t++)m(Y.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let _t=0;_t<Y.locationSize;_t++)E(Y.location+_t,yt/Y.locationSize,vt,it,yt*wt,yt/Y.locationSize*_t*wt,Ot)}}else if(X!==void 0){const it=X[rt];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(Y.location,it);break;case 3:i.vertexAttrib3fv(Y.location,it);break;case 4:i.vertexAttrib4fv(Y.location,it);break;default:i.vertexAttrib1fv(Y.location,it)}}}}S()}function T(){k();for(const F in n){const G=n[F];for(const J in G){const D=G[J];for(const K in D){const j=D[K];for(const X in j)h(j[X].object),delete j[X];delete D[K]}}delete n[F]}}function R(F){if(n[F.id]===void 0)return;const G=n[F.id];for(const J in G){const D=G[J];for(const K in D){const j=D[K];for(const X in j)h(j[X].object),delete j[X];delete D[K]}}delete n[F.id]}function x(F){for(const G in n){const J=n[G];for(const D in J){const K=J[D];if(K[F.id]===void 0)continue;const j=K[F.id];for(const X in j)h(j[X].object),delete j[X];delete K[F.id]}}}function b(F){for(const G in n){const J=n[G],D=F.isInstancedMesh===!0?F.id:0,K=J[D];if(K!==void 0){for(const j in K){const X=K[j];for(const rt in X)h(X[rt].object),delete X[rt];delete K[j]}delete J[D],Object.keys(J).length===0&&delete n[G]}}}function k(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Hm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Gm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==wn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const b=x===$n&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==mn&&x!==Gn&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Vt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,maxSamples:T,samples:R}}function Vm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ci,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,E=S*4;let y=g.clippingState||null;l.value=y,y=h(p,d,E,f);for(let T=0;T!==E;++T)y[T]=e[T];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,y=f;E!==_;++E,y+=4)a.copy(u[E]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}class Ml extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pi(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:ms});r.uniforms.tEquirect.value=e;const a=new Ft(s,r),o=e.minFilter;return e.minFilter===bi&&(e.minFilter=un),new jo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const gc=256,Wm=3,Xm=20,iu=256,su=16,qm=3,Ym=new U,Km=new qt;class ca{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new jo(1,10,null),this._boxMesh=new Ft(new Pi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Ym}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(Km));const m=new jo(n,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(gc,kd(t))}_fromTexture(t,e){t.mapping===_s||t.mapping===$s?this._setSize(t.image.length===0?gc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=xc(t,!1,!1),n=Math.log2(t)-Wm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xc(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===_s||t.mapping===$s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=_c()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Zm(),this._integrationMaterial=Jm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/su);for(let a=0;a<=n;a++){const o=ca.lodToRoughness(a,n);if(a>n-qm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(iu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=$m());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function xc(i,t,e){return new Ml(i,{minFilter:bi,generateMipmaps:t,type:$n,colorSpace:tr,depthBuffer:e})}function ur(i,t,e){return new Cn({name:i,uniforms:t,vertexShader:$t.cube_vert,fragmentShader:e,side:dn,blending:ms,depthTest:!1,depthWrite:!1})}function Zm(){return ur("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${iu}u

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
	`)}function Jm(){return ur("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:su}},`

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
	`)}function $m(){return ur("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Xm}
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
	`)}function _c(){return ur("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function vc(){return ur("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Qm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ea||f===ba)if(t.has(d)){const p=t.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const _=new Ml(p.height);return _.fromEquirectangularTexture(i,d),t.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,p=f===Ea||f===ba,_=f===_s||f===$s;if(p||_){let m=e.get(d);const g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new ca(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(n===null&&(n=new ca(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Ea?d.mapping=_s:f===ba&&(d.mapping=$s),d}function l(d){let f=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){const f=d.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function jm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Qr("WebGLRenderer: "+n+" extension not supported."),s}}}function tg(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(const m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);const _=r.get(p);_&&(t.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(p){const _=p.attributes;for(const m in _)t.update(_[m],i.ARRAY_BUFFER)}function u(p){const _=p.index,m=p.attributes.position;let g=0;if(m===void 0)return;const S=_!==null?_.array.length:m.array.length/3-1,E=m.count>=65535?Bh:zh,y=new E(Math.ceil(S/3)*6,1),T=y.array;if(_!==null){const x=_.array;g=_.version;for(let b=0,k=0;b<S;b+=3){const N=x[b+0],F=x[b+1],G=x[b+2];T[k++]=N,T[k++]=F,T[k++]=F,T[k++]=G,T[k++]=G,T[k++]=N}}else{g=m.version;for(let x=0,b=0;x<S;x+=3){const k=x+0,N=x+1,F=x+2;T[b++]=k,T[b++]=N,T[b++]=N,T[b++]=F,T[b++]=F,T[b++]=k}}y.version=g;const R=r.get(p);R&&t.remove(R),r.set(p,y)}function d(p){const _=r.get(p);if(_){const m=p.index;m!==null&&_.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(const p in s){const _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function eg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ng(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ig(i,t,e){const n=new WeakMap,s=new Ee;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let k=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",k)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),p===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const R=new Float32Array(y*T*4*u),x=new Uh(R,y,T,u);x.type=Gn,x.needsUpdate=!0;const b=E*4;for(let N=0;N<u;N++){const F=m[N],G=g[N],J=S[N],D=y*T*4*N;for(let K=0;K<F.count;K++){const j=K*b;f===!0&&(s.fromBufferAttribute(F,K),R[D+j+0]=s.x,R[D+j+1]=s.y,R[D+j+2]=s.z,R[D+j+3]=0),p===!0&&(s.fromBufferAttribute(G,K),R[D+j+4]=s.x,R[D+j+5]=s.y,R[D+j+6]=s.z,R[D+j+7]=0),_===!0&&(s.fromBufferAttribute(J,K),R[D+j+8]=s.x,R[D+j+9]=s.y,R[D+j+10]=s.z,R[D+j+11]=J.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new At(y,T)},n.set(o,d),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function sg(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const rg={[xh]:"LINEAR_TONE_MAPPING",[_h]:"REINHARD_TONE_MAPPING",[vh]:"CINEON_TONE_MAPPING",[Mh]:"ACES_FILMIC_TONE_MAPPING",[yh]:"AGX_TONE_MAPPING",[Eh]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};function ag(i,t,e,n,s,r){const a=new Zn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new vn;h.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ae([0,2,0,0,2,0],2));const u=new Kf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ft(h,u),f=new la(-1,1,1,-1,0,1);let p=null,_=null,m=!1,g,S=null,E=[],y=!1;this.setSize=function(T,R){a.setSize(T,R),o!==null&&o.setSize(T,R),l!==null&&l.setSize(T,R);for(let x=0;x<E.length;x++){const b=E[x];b.setSize&&b.setSize(T,R)}},this.setEffects=function(T){E=T,y=E.length>0&&E[0].isRenderPass===!0;const R=a.width,x=a.height;E.length>0&&o===null&&(o=new Zn(R,x,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new Zn(R,x,{type:$n,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&E.some(k=>k.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Ms(R,x),r===!0&&(c.format=wi,c.type=vs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let k=0;k<E.length;k++){const N=E[k];N.setSize&&N.setSize(R,x),b&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(T,R){if(m||T.toneMapping===fi&&E.length===0)return!1;if(S=R,R!==null){const x=R.width,b=R.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return y===!1&&T.setRenderTarget(a),g=T.toneMapping,T.toneMapping=fi,!0},this.hasRenderPass=function(){return y},this.end=function(T,R){T.toneMapping=g,m=!0;let x=a,b=o;for(let k=0;k<E.length;k++){const N=E[k];N.enabled!==!1&&(N.render(T,b,x,R),N.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(p!==T.outputColorSpace||_!==T.toneMapping){p=T.outputColorSpace,_=T.toneMapping,u.defines={},ie.getTransfer(p)===me&&(u.defines.SRGB_TRANSFER="");const k=rg[_];k&&(u.defines[k]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(S),T.render(d,f),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const ru=new je,au=new Ms(1,1),ou=new Gh(1),lu=new Uh,cu=new Kd,hu=new Hh,Mc=[],Sc=[],yc=new Float32Array(16),Ec=new Float32Array(9),bc=new Float32Array(4);function ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Mc[s];if(r===void 0&&(r=new Float32Array(s),Mc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function va(i,t){let e=Sc[t];e===void 0&&(e=new Int32Array(t),Sc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function ug(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;bc.set(n),i.uniformMatrix2fv(this.addr,!1,bc),ke(e,n)}}function dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;Ec.set(n),i.uniformMatrix3fv(this.addr,!1,Ec),ke(e,n)}}function fg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Be(e,n))return;yc.set(n),i.uniformMatrix4fv(this.addr,!1,yc),ke(e,n)}}function pg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function _g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function Ma(i){return i.version===0&&(i.compareFunction=Nh,i.needsUpdate=!0),i}function yg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ma(au):r=ru,e.setTexture2D(t||r,s)}function Eg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cu,s)}function bg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ma(ou):r=hu,e.setTextureCube(t||r,s)}function wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lu,s)}function Tg(i){switch(i){case 5126:return og;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return xg;case 5125:return _g;case 36294:return vg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return wg}}function Ag(i,t){i.uniform1fv(this.addr,t)}function Rg(i,t){const e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function Cg(i,t){const e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function Pg(i,t){const e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function Lg(i,t){const e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dg(i,t){const e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ng(i,t){const e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ig(i,t){i.uniform1iv(this.addr,t)}function Ug(i,t){i.uniform2iv(this.addr,t)}function Fg(i,t){i.uniform3iv(this.addr,t)}function Og(i,t){i.uniform4iv(this.addr,t)}function zg(i,t){i.uniform1uiv(this.addr,t)}function Bg(i,t){i.uniform2uiv(this.addr,t)}function kg(i,t){i.uniform3uiv(this.addr,t)}function Hg(i,t){i.uniform4uiv(this.addr,t)}function Gg(i,t,e){const n=this.cache,s=t.length,r=va(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ma(au):a=ru;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Vg(i,t,e){const n=this.cache,s=t.length,r=va(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cu,r[a])}function Wg(i,t,e){const n=this.cache,s=t.length,r=va(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ma(ou):a=hu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Xg(i,t,e){const n=this.cache,s=t.length,r=va(e,s);Be(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lu,r[a])}function qg(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Ng;case 5124:case 35670:return Ig;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return zg;case 36294:return Bg;case 36295:return kg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Gg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}class Yg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tg(e.type)}}class Kg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qg(e.type)}}class Zg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ja=/(\w+)(\])?(\[|\.)?/g;function wc(i,t){i.seq.push(t),i.map[t.id]=t}function Jg(i,t,e){const n=i.name,s=n.length;for(ja.lastIndex=0;;){const r=ja.exec(n),a=ja.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wc(e,c===void 0?new Yg(o,i,t):new Kg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Zg(o),wc(e,u)),e=u}}}class ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Jg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Tc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $g=37297;let Qg=0;function jg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ac=new Xt;function tx(i){ie._getMatrix(Ac,ie.workingColorSpace,i);const t=`mat3( ${Ac.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case aa:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Rc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+jg(i.getShaderSource(t),o)}else return r}function ex(i,t){const e=tx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const nx={[xh]:"Linear",[_h]:"Reinhard",[vh]:"Cineon",[Mh]:"ACESFilmic",[yh]:"AgX",[Eh]:"Neutral",[Sh]:"Custom"};function ix(i,t){const e=nx[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gr=new U;function sx(){ie.getLuminanceCoefficients(Gr);const i=Gr.x.toFixed(4),t=Gr.y.toFixed(4),e=Gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function ax(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ox(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Hs(i){return i!==""}function Cc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Pc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(lx,cx)}function cx(i,t){const e=$t[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return el(e)}const hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lc(i){return i.replace(hx,ux)}function ux(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const dx={[Yr]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function fx(i){return dx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const px={[$s]:"ENVMAP_MODE_REFRACTION"};function mx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":px[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gx={[gh]:"ENVMAP_BLENDING_MULTIPLY",[Ed]:"ENVMAP_BLENDING_MIX",[bd]:"ENVMAP_BLENDING_ADD"};function xx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":gx[i.combine]||"ENVMAP_BLENDING_NONE"}function _x(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=fx(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=mx(e),u=xx(e),d=rx(e),f=ax(r),p=s.createProgram();let _,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Hs).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Hs).join(`
`),m.length>0&&(m+=`
`)):(_=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),m=[Dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?$t.tonemapping_pars_fragment:"",e.toneMapping!==fi?ix("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,ex("linearToOutputTexel",e.outputColorSpace),sx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),a=el(a),a=Cc(a,e),a=Pc(a,e),o=el(o),o=Cc(o,e),o=Pc(o,e),a=Lc(a),o=Lc(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=g+_+a,E=g+m+o,y=Tc(s,s.VERTEX_SHADER,S),T=Tc(s,s.FRAGMENT_SHADER,E);s.attachShader(p,y),s.attachShader(p,T),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function R(N){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(p)||"",G=s.getShaderInfoLog(y)||"",J=s.getShaderInfoLog(T)||"",D=F.trim(),K=G.trim(),j=J.trim();let X=!0,rt=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,y,T);else{const Y=Rc(s,y,"vertex"),et=Rc(s,T,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+D+`
`+Y+`
`+et)}else D!==""?Vt("WebGLProgram: Program Info Log:",D):(K===""||j==="")&&(rt=!1);rt&&(N.diagnostics={runnable:X,programLog:D,vertexShader:{log:K,prefix:_},fragmentShader:{log:j,prefix:m}})}s.deleteShader(y),s.deleteShader(T),x=new ta(s,p),b=ox(s,p)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(p,$g)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}let vx=0;class Mx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sx(t),e.set(t,n)),n}}class Sx{constructor(t){this.id=vx++,this.code=t,this.usedTimes=0}}function yx(i){return i===Gi||i===sa||i===ra}function Ex(i,t,e,n,s,r){const a=new ml,o=new Mx,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,k,N,F,G){const J=N.fog,D=F.geometry,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=t.get(x.envMap||K,j),rt=d[x.type];let Y=n.precision;x.precision!==null&&(Y=n.getMaxPrecision(x.precision),Y!==x.precision&&Vt("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));const et=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,it=et!==void 0?et.length:0;let yt=0;D.morphAttributes.position!==void 0&&(yt=1),D.morphAttributes.normal!==void 0&&(yt=2),D.morphAttributes.color!==void 0&&(yt=3);let Dt,Q,vt,wt;if(rt){const xt=Yn[rt];Dt=xt.vertexShader,Q=xt.fragmentShader}else{Dt=x.vertexShader,Q=x.fragmentShader;const xt=o.getVertexShaderStage(x),he=o.getFragmentShaderStage(x);o.update(x,xt,he),vt=xt.id,wt=he.id}const Ot=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Wt=F.isInstancedMesh===!0,be=F.isBatchedMesh===!0,Bt=!!x.map,re=!!x.matcap,ae=!!X,Ht=ae&&X.isPMREMTexture===!0,ye=!!x.aoMap,Re=!!x.lightMap,Xe=!!x.bumpMap&&x.wireframe===!1,Me=!!x.normalMap,pe=!!x.displacementMap,Pe=!!x.emissiveMap,Ce=!!x.metalnessMap,cn=!!x.roughnessMap,qe=x.anisotropy>0,I=x.clearcoat>0,en=x.diffuseRoughness>0,de=x.dispersion>0,ge=x.retroreflectivity>0,ft=x.iridescence>0,Le=x.sheen>0,zt=x.transmission>0,kt=qe&&!!x.anisotropyMap,A=I&&!!x.clearcoatMap,v=I&&!!x.clearcoatNormalMap,z=I&&!!x.clearcoatRoughnessMap,nt=en&&!!x.diffuseRoughnessMap,tt=ft&&!!x.iridescenceMap,ct=ft&&!!x.iridescenceThicknessMap,pt=Le&&!!x.sheenColorMap,V=Le&&!!x.sheenRoughnessMap,Z=!!x.specularMap,ut=!!x.specularColorMap,P=!!x.specularIntensityMap,$=zt&&!!x.transmissionMap,q=zt&&!!x.thicknessMap,dt=!!x.gradientMap,st=!!x.alphaMap,ot=x.alphaTest>0,Nt=!!x.alphaHash,Kt=!!x.extensions;let at=fi;x.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(at=i.toneMapping);const It=Ht?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Gt={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:Dt,fragmentShader:Q,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:wt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:be,batchingColor:be&&F._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&F.instanceColor!==null,instancingMorph:Wt&&F.morphTexture!==null,outputColorSpace:Ot===null?i.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Bt,matcap:re,envMap:ae,envMapMode:ae&&X.mapping,envMapPMREM:Ht,envMapMaxLod:Ht?It.length-1:null,envMapSize:Ht?It[0].width:null,aoMap:ye,lightMap:Re,bumpMap:Xe,normalMap:Me,displacementMap:pe,emissiveMap:Pe,normalMapObjectSpace:Me&&x.normalMapType===Ad,normalMapTangentSpace:Me&&x.normalMapType===Zo,packedNormalMap:Me&&x.normalMapType===Zo&&yx(x.normalMap.format),metalnessMap:Ce,roughnessMap:cn,anisotropy:qe,anisotropyMap:kt,clearcoat:I,clearcoatMap:A,clearcoatNormalMap:v,clearcoatRoughnessMap:z,diffuseRoughness:en,diffuseRoughnessMap:nt,dispersion:de,retroreflection:ge,iridescence:ft,iridescenceMap:tt,iridescenceThicknessMap:ct,sheen:Le,sheenColorMap:pt,sheenRoughnessMap:V,specularMap:Z,specularColorMap:ut,specularIntensityMap:P,transmission:zt,transmissionMap:$,thicknessMap:q,gradientMap:dt,opaque:x.transparent===!1&&x.blending===Vs&&x.alphaToCoverage===!1,alphaMap:st,alphaTest:ot,alphaHash:Nt,combine:x.combine,mapUv:Bt&&f(x.map.channel),aoMapUv:ye&&f(x.aoMap.channel),lightMapUv:Re&&f(x.lightMap.channel),bumpMapUv:Xe&&f(x.bumpMap.channel),normalMapUv:Me&&f(x.normalMap.channel),displacementMapUv:pe&&f(x.displacementMap.channel),emissiveMapUv:Pe&&f(x.emissiveMap.channel),metalnessMapUv:Ce&&f(x.metalnessMap.channel),roughnessMapUv:cn&&f(x.roughnessMap.channel),anisotropyMapUv:kt&&f(x.anisotropyMap.channel),clearcoatMapUv:A&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:V&&f(x.sheenRoughnessMap.channel),specularMapUv:Z&&f(x.specularMap.channel),specularColorMapUv:ut&&f(x.specularColorMap.channel),specularIntensityMapUv:P&&f(x.specularIntensityMap.channel),transmissionMapUv:$&&f(x.transmissionMap.channel),thicknessMapUv:q&&f(x.thicknessMap.channel),alphaMapUv:st&&f(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Me||qe),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Bt||st),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&Me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:yt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:G.filter(xt=>xt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:at,decodeVideoTexture:Bt&&x.map.isVideoTexture===!0&&ie.getTransfer(x.map.colorSpace)===me,decodeVideoTextureEmissive:Pe&&x.emissiveMap.isVideoTexture===!0&&ie.getTransfer(x.emissiveMap.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bn,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Kt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&x.extensions.multiDraw===!0||be)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function _(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)b.push(k),b.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){const b=d[x.type];let k;if(b){const N=Yn[b];k=Xf.clone(N.uniforms)}else k=x.uniforms;return k}function E(x,b){let k=h.get(b);return k!==void 0?++k.usedTimes:(k=new _x(i,b,x,s),c.push(k),h.set(b,k)),k}function y(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function R(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:S,acquireProgram:E,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:R}}function bx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Nc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ic(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,_,m,g){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},i[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=a(d),S.groupOrder=_,S.renderOrder=d.renderOrder,S.z=m,S.group=g),t++,S}function l(d,f,p,_,m,g,S){S.reversedDepth===!0&&(m=-m);const E=o(d,f,p,_,m,g);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):e.push(E)}function c(d,f,p,_,m,g){const S=o(d,f,p,_,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?s.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||wx),n.length>1&&n.sort(f||Nc),s.length>1&&s.sort(f||Nc)}function u(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Tx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ic,i.set(n,[a])):s>=r.length?(a=new Ic,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ax(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new qt};break;case"SpotLight":e={position:new U,direction:new U,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Rx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cx=0;function Px(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lx(i){const t=new Ax,e=Rx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new ce,a=new ce;function o(c){let h=0,u=0,d=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,S=0,E=0,y=0,T=0,R=0,x=0,b=0,k=0,N=0;c.sort(Px);for(let G=0,J=c.length;G<J;G++){const D=c[G],K=D.color,j=D.intensity,X=D.distance;let rt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Gi?rt=D.shadow.map.texture:rt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=K.r*j,u+=K.g*j,d+=K.b*j;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],j);N++}else if(D.isSunLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,it=e.get(D);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[p]=it,n.sunShadowMap[p]=rt;const yt=et.getViewportCount();for(let Dt=0;Dt<yt;Dt++)n.sunShadowMatrix[_+Dt]=et.getMatrix(Dt),n.sunShadowCascade[_+Dt]=et._cascadeData[Dt];_+=yt,p++}n.sun[f]=Y,f++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,it=e.get(D);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=D.shadow.matrix,T++}n.directional[m]=Y,m++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(K).multiplyScalar(j),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[S]=Y;const et=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,et.updateMatrices(D),D.castShadow&&k++),n.spotLightMatrix[S]=et.matrix,D.castShadow){const it=e.get(D);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,n.spotShadow[S]=it,n.spotShadowMap[S]=rt,x++}S++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(K).multiplyScalar(j),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=Y,E++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const et=D.shadow,it=e.get(D);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,n.pointShadow[g]=it,n.pointShadowMap[g]=rt,n.pointShadowMatrix[g]=D.shadow.matrix,R++}n.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(j),Y.groundColor.copy(D.groundColor).multiplyScalar(j),n.hemi[y]=Y,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==g||F.spotLength!==S||F.rectAreaLength!==E||F.hemiLength!==y||F.numSunShadows!==p||F.numDirectionalShadows!==T||F.numPointShadows!==R||F.numSpotShadows!==x||F.numSpotMaps!==b||F.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=E,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-k,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=k,n.numLightProbes=N,F.sunLength=f,F.directionalLength=m,F.pointLength=g,F.spotLength=S,F.rectAreaLength=E,F.hemiLength=y,F.numSunShadows=p,F.numDirectionalShadows=T,F.numPointShadows=R,F.numSpotShadows=x,F.numSpotMaps=b,F.numLightProbes=N,n.version=Cx++)}function l(c,h){let u=0,d=0,f=0,p=0,_=0,m=0;const g=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){const y=c[S];if(y.isSunLight){const T=n.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),u++}else if(y.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),d++}else if(y.isSpotLight){const T=n.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function Uc(i){const t=new Lx(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Dx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Uc(i),t.set(s,[o])):r>=a.length?(o=new Uc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
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
}`,Ux=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Fx=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Fc=new ce,Fs=new U,to=new U;function Ox(i,t,e){let n=new nr;const s=new At,r=new At,a=new Ee,o=new Zf,l=new Jf,c={},h=e.maxTextureSize,u={[Hi]:dn,[dn]:Hi,[bn]:bn},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Nx,fragmentShader:Ix}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new vn;p.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yr;let g=this.type;this.render=function(R,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===sd&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yr);const k=i.getRenderTarget(),N=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ms),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const J=g!==this.type;J&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(K=>K.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,K=R.length;D<K;D++){const j=R[D],X=j.shadow;if(X===void 0){Vt("WebGLShadowMap:",j,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const rt=X.getFrameExtents();s.multiply(rt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,X.mapSize.y=r.y));const Y=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||J===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Bs){if(j.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Zn(s.x,s.y,{format:Gi,type:$n,minFilter:un,magFilter:un,generateMipmaps:!1}),X.map.texture.name=j.name+".shadowMap",X.map.depthTexture=new Ms(s.x,s.y,Gn),X.map.depthTexture.name=j.name+".shadowMapDepth",X.map.depthTexture.format=Ri,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Se,X.map.depthTexture.magFilter=Se}else j.isPointLight?(X.map=new Ml(s.x),X.map.depthTexture=new Gh(s.x,Jn)):(X.map=new Zn(s.x,s.y),X.map.depthTexture=new Ms(s.x,s.y,Jn)),X.map.depthTexture.name=j.name+".shadowMap",X.map.depthTexture.format=Ri,this.type===Yr?(X.map.depthTexture.compareFunction=Y?Dh:Lh,X.map.depthTexture.minFilter=un,X.map.depthTexture.magFilter=un):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Se,X.map.depthTexture.magFilter=Se);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);const et=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();j.isPointLight!==!0&&X.updateMatrices(j,b);const it=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:b.layers;for(let yt=0;yt<et;yt++){const Dt=X.getCamera(yt);if(j.isPointLight){const Q=X.camera,vt=X.matrix,wt=j.distance||Q.far;wt!==Q.far&&(Q.far=wt,Q.updateProjectionMatrix()),Fs.setFromMatrixPosition(j.matrixWorld),Q.position.copy(Fs),to.copy(Q.position),to.add(Ux[yt]),Q.up.copy(Fx[yt]),Q.lookAt(to),Q.updateMatrixWorld(),vt.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Fc.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Fc,Q.coordinateSystem,Q.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,yt),i.clear();else{yt===0&&(i.setRenderTarget(X.map),i.clear());const Q=X.getViewport(yt);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),G.viewport(a)}n=X.getFrustum(yt),y(x,b,Dt,j,it,this.type)}X.isPointLightShadow!==!0&&this.type===Bs&&S(X,b),X.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(k,N,F)};function S(R,x){const b=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new Zn(s.x,s.y,{format:Gi,type:$n}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(x,null,b,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(x,null,b,f,_,null)}function E(R,x,b,k){let N=null;const F=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)N=F;else if(N=b.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const G=N.uuid,J=x.uuid;let D=c[G];D===void 0&&(D={},c[G]=D);let K=D[J];K===void 0&&(K=N.clone(),D[J]=K,x.addEventListener("dispose",T)),N=K}if(N.visible=x.visible,N.wireframe=x.wireframe,k===Bs?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:u[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const G=i.properties.get(N);G.light=b}return N}function y(R,x,b,k,N,F){if(R.visible===!1)return;if(R.layers.test(N)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&F===Bs)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const D=t.update(R),K=R.material;if(Array.isArray(K)){const j=D.groups;for(let X=0,rt=j.length;X<rt;X++){const Y=j[X],et=K[Y.materialIndex];if(et&&et.visible){const it=E(R,et,k,F);R.onBeforeShadow(i,R,x,b,D,it,Y),i.renderBufferDirect(b,null,D,it,R,Y),R.onAfterShadow(i,R,x,b,D,it,Y)}}}else if(K.visible){const j=E(R,K,k,F);R.onBeforeShadow(i,R,x,b,D,j,null),i.renderBufferDirect(b,null,D,j,R,null),R.onAfterShadow(i,R,x,b,D,j,null)}}const J=R.children;for(let D=0,K=J.length;D<K;D++)y(J[D],x,b,k,N,F)}function T(R){R.target.removeEventListener("dispose",T);for(const b in c){const k=c[b],N=R.target.uuid;N in k&&(k[N].dispose(),delete k[N])}}}function zx(i,t){function e(){let P=!1;const $=new Ee;let q=null;const dt=new Ee(0,0,0,0);return{setMask:function(st){q!==st&&!P&&(i.colorMask(st,st,st,st),q=st)},setLocked:function(st){P=st},setClear:function(st,ot,Nt,Kt,at){at===!0&&(st*=Kt,ot*=Kt,Nt*=Kt),$.set(st,ot,Nt,Kt),dt.equals($)===!1&&(i.clearColor(st,ot,Nt,Kt),dt.copy($))},reset:function(){P=!1,q=null,dt.set(-1,0,0,0)}}}function n(){let P=!1,$=!1,q=null,dt=null,st=null;return{setReversed:function(ot){if($!==ot){const Nt=t.get("EXT_clip_control");ot?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),$=ot;const Kt=st;st=null,this.setClear(Kt)}},getReversed:function(){return $},setTest:function(ot){ot?_t(i.DEPTH_TEST):Wt(i.DEPTH_TEST)},setMask:function(ot){q!==ot&&!P&&(i.depthMask(ot),q=ot)},setFunc:function(ot){if($&&(ot=zd[ot]),dt!==ot){switch(ot){case ho:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case fo:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case po:i.depthFunc(i.EQUAL);break;case mo:i.depthFunc(i.GEQUAL);break;case go:i.depthFunc(i.GREATER);break;case xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=ot}},setLocked:function(ot){P=ot},setClear:function(ot){st!==ot&&(st=ot,$&&(ot=1-ot),i.clearDepth(ot))},reset:function(){P=!1,q=null,dt=null,st=null,$=!1}}}function s(){let P=!1,$=null,q=null,dt=null,st=null,ot=null,Nt=null,Kt=null,at=null;return{setTest:function(It){P||(It?_t(i.STENCIL_TEST):Wt(i.STENCIL_TEST))},setMask:function(It){$!==It&&!P&&(i.stencilMask(It),$=It)},setFunc:function(It,Gt,xt){(q!==It||dt!==Gt||st!==xt)&&(i.stencilFunc(It,Gt,xt),q=It,dt=Gt,st=xt)},setOp:function(It,Gt,xt){(ot!==It||Nt!==Gt||Kt!==xt)&&(i.stencilOp(It,Gt,xt),ot=It,Nt=Gt,Kt=xt)},setLocked:function(It){P=It},setClear:function(It){at!==It&&(i.clearStencil(It),at=It)},reset:function(){P=!1,$=null,q=null,dt=null,st=null,ot=null,Nt=null,Kt=null,at=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,S=null,E=null,y=null,T=null,R=null,x=null,b=new qt(0,0,0),k=0,N=!1,F=null,G=null,J=null,D=null,K=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,rt=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=rt>=1):Y.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=rt>=2);let et=null,it={};const yt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),Q=new Ee().fromArray(yt),vt=new Ee().fromArray(Dt);function wt(P,$,q,dt){const st=new Uint8Array(4),ot=i.createTexture();i.bindTexture(P,ot),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<q;Nt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D($+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return ot}const Ot={};Ot[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ot[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ot[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(Js),Xe(!1),Me(Cl),_t(i.CULL_FACE),ye(ms);function _t(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Wt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function be(P,$){return d[P]!==$?(i.bindFramebuffer(P,$),d[P]=$,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Bt(P,$){let q=p,dt=!1;if(P){q=f.get($),q===void 0&&(q=[],f.set($,q));const st=P.textures;if(q.length!==st.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Nt=st.length;ot<Nt;ot++)q[ot]=i.COLOR_ATTACHMENT0+ot;q.length=st.length,dt=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,dt=!0);dt&&i.drawBuffers(q)}function re(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const ae={[ds]:i.FUNC_ADD,[ad]:i.FUNC_SUBTRACT,[od]:i.FUNC_REVERSE_SUBTRACT};ae[ld]=i.MIN,ae[cd]=i.MAX;const Ht={[hd]:i.ZERO,[ud]:i.ONE,[dd]:i.SRC_COLOR,[ph]:i.SRC_ALPHA,[_d]:i.SRC_ALPHA_SATURATE,[gd]:i.DST_COLOR,[pd]:i.DST_ALPHA,[fd]:i.ONE_MINUS_SRC_COLOR,[mh]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[md]:i.ONE_MINUS_DST_ALPHA,[vd]:i.CONSTANT_COLOR,[Md]:i.ONE_MINUS_CONSTANT_COLOR,[Sd]:i.CONSTANT_ALPHA,[yd]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(P,$,q,dt,st,ot,Nt,Kt,at,It){if(P===ms){m===!0&&(Wt(i.BLEND),m=!1);return}if(m===!1&&(_t(i.BLEND),m=!0),P!==rd){if(P!==g||It!==N){if((S!==ds||T!==ds)&&(i.blendEquation(i.FUNC_ADD),S=ds,T=ds),It)switch(P){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pl:i.blendFunc(i.ONE,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ue("WebGLState: Invalid blending: ",P);break}else switch(P){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ll:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dl:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",P);break}E=null,y=null,R=null,x=null,b.set(0,0,0),k=0,g=P,N=It}return}st=st||$,ot=ot||q,Nt=Nt||dt,($!==S||st!==T)&&(i.blendEquationSeparate(ae[$],ae[st]),S=$,T=st),(q!==E||dt!==y||ot!==R||Nt!==x)&&(i.blendFuncSeparate(Ht[q],Ht[dt],Ht[ot],Ht[Nt]),E=q,y=dt,R=ot,x=Nt),(Kt.equals(b)===!1||at!==k)&&(i.blendColor(Kt.r,Kt.g,Kt.b,at),b.copy(Kt),k=at),g=P,N=!1}function Re(P,$){P.side===bn?Wt(i.CULL_FACE):_t(i.CULL_FACE);let q=P.side===dn;$&&(q=!q),Xe(q),P.blending===Vs&&P.transparent===!1?ye(ms):ye(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const dt=P.stencilWrite;o.setTest(dt),dt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(P){F!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),F=P)}function Me(P){P!==nd?(_t(i.CULL_FACE),P!==G&&(P===Cl?i.cullFace(i.BACK):P===id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Wt(i.CULL_FACE),G=P}function pe(P){P!==J&&(X&&i.lineWidth(P),J=P)}function Pe(P,$,q){P?(_t(i.POLYGON_OFFSET_FILL),(D!==$||K!==q)&&(D=$,K=q,a.getReversed()&&($=-$,q=-q),i.polygonOffset($,q))):Wt(i.POLYGON_OFFSET_FILL)}function Ce(P){P?_t(i.SCISSOR_TEST):Wt(i.SCISSOR_TEST)}function cn(P){P===void 0&&(P=i.TEXTURE0+j-1),et!==P&&(i.activeTexture(P),et=P)}function qe(P,$,q){q===void 0&&(et===null?q=i.TEXTURE0+j-1:q=et);let dt=it[q];dt===void 0&&(dt={type:void 0,texture:void 0},it[q]=dt),(dt.type!==P||dt.texture!==$)&&(et!==q&&(i.activeTexture(q),et=q),i.bindTexture(P,$||Ot[P]),dt.type=P,dt.texture=$)}function I(){const P=it[et];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function en(){try{i.compressedTexImage2D(...arguments)}catch(P){ue("WebGLState:",P)}}function de(){try{i.compressedTexImage3D(...arguments)}catch(P){ue("WebGLState:",P)}}function ge(){try{i.texSubImage2D(...arguments)}catch(P){ue("WebGLState:",P)}}function ft(){try{i.texSubImage3D(...arguments)}catch(P){ue("WebGLState:",P)}}function Le(){try{i.compressedTexSubImage2D(...arguments)}catch(P){ue("WebGLState:",P)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(P){ue("WebGLState:",P)}}function kt(){try{i.texStorage2D(...arguments)}catch(P){ue("WebGLState:",P)}}function A(){try{i.texStorage3D(...arguments)}catch(P){ue("WebGLState:",P)}}function v(){try{i.texImage2D(...arguments)}catch(P){ue("WebGLState:",P)}}function z(){try{i.texImage3D(...arguments)}catch(P){ue("WebGLState:",P)}}function nt(P){return u[P]!==void 0?u[P]:i.getParameter(P)}function tt(P,$){u[P]!==$&&(i.pixelStorei(P,$),u[P]=$)}function ct(P){Q.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function pt(P){vt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),vt.copy(P))}function V(P,$){let q=c.get($);q===void 0&&(q=new WeakMap,c.set($,q));let dt=q.get(P);dt===void 0&&(dt=i.getUniformBlockIndex($,P.name),i.uniformBlockBinding($,dt,dt),q.set(P,dt))}function Z(P,$,q){const st=c.get($).get(P);l[st]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,st,q),l[st]=q)}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},et=null,it={},d={},l={},f=new WeakMap,p=[],_=null,m=!1,g=null,S=null,E=null,y=null,T=null,R=null,x=null,b=new qt(0,0,0),k=0,N=!1,F=null,G=null,J=null,D=null,K=null,Q.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Wt,bindFramebuffer:be,drawBuffers:Bt,useProgram:re,setBlending:ye,setMaterial:Re,setFlipSided:Xe,setCullFace:Me,setLineWidth:pe,setPolygonOffset:Pe,setScissorTest:Ce,activeTexture:cn,bindTexture:qe,unbindTexture:I,compressedTexImage2D:en,compressedTexImage3D:de,texImage2D:v,texImage3D:z,pixelStorei:tt,getParameter:nt,updateUBOMapping:V,uniformBlockBinding:Z,texStorage2D:kt,texStorage3D:A,texSubImage2D:ge,texSubImage3D:ft,compressedTexSubImage2D:Le,compressedTexSubImage3D:zt,scissor:ct,viewport:pt,reset:ut}}function Bx(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,u=new Set;let d;const f=new WeakMap,p=new Set,_=new FinalizationRegistry(A=>p.delete(A));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return m?new OffscreenCanvas(A,v):oa("canvas")}function S(A,v,z){let nt=1;const tt=kt(A);if((tt.width>z||tt.height>z)&&(nt=z/Math.max(tt.width,tt.height)),nt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ct=Math.floor(nt*tt.width),pt=Math.floor(nt*tt.height);d===void 0&&(d=g(ct,pt));const V=v?g(ct,pt):d;return V.width=ct,V.height=pt,V.getContext("2d").drawImage(A,0,0,ct,pt),Vt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ct+"x"+pt+")."),V}else return"data"in A&&Vt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function E(A){return A.generateMipmaps}function y(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(A,v,z,nt,tt,ct=!1){if(A!==null){if(i[A]!==void 0)return i[A];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let pt;nt&&(pt=t.get("EXT_texture_norm16"),pt||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=v;if(v===i.RED&&(z===i.FLOAT&&(V=i.R32F),z===i.HALF_FLOAT&&(V=i.R16F),z===i.UNSIGNED_BYTE&&(V=i.R8),z===i.UNSIGNED_SHORT&&pt&&(V=pt.R16_EXT),z===i.SHORT&&pt&&(V=pt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(V=i.R8UI),z===i.UNSIGNED_SHORT&&(V=i.R16UI),z===i.UNSIGNED_INT&&(V=i.R32UI),z===i.BYTE&&(V=i.R8I),z===i.SHORT&&(V=i.R16I),z===i.INT&&(V=i.R32I)),v===i.RG&&(z===i.FLOAT&&(V=i.RG32F),z===i.HALF_FLOAT&&(V=i.RG16F),z===i.UNSIGNED_BYTE&&(V=i.RG8),z===i.UNSIGNED_SHORT&&pt&&(V=pt.RG16_EXT),z===i.SHORT&&pt&&(V=pt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(V=i.RG8UI),z===i.UNSIGNED_SHORT&&(V=i.RG16UI),z===i.UNSIGNED_INT&&(V=i.RG32UI),z===i.BYTE&&(V=i.RG8I),z===i.SHORT&&(V=i.RG16I),z===i.INT&&(V=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(V=i.RGB8UI),z===i.UNSIGNED_SHORT&&(V=i.RGB16UI),z===i.UNSIGNED_INT&&(V=i.RGB32UI),z===i.BYTE&&(V=i.RGB8I),z===i.SHORT&&(V=i.RGB16I),z===i.INT&&(V=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),z===i.UNSIGNED_INT&&(V=i.RGBA32UI),z===i.BYTE&&(V=i.RGBA8I),z===i.SHORT&&(V=i.RGBA16I),z===i.INT&&(V=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_SHORT&&pt&&(V=pt.RGB16_EXT),z===i.SHORT&&pt&&(V=pt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),v===i.RGBA){const Z=ct?aa:ie.getTransfer(tt);z===i.FLOAT&&(V=i.RGBA32F),z===i.HALF_FLOAT&&(V=i.RGBA16F),z===i.UNSIGNED_BYTE&&(V=Z===me?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&pt&&(V=pt.RGBA16_EXT),z===i.SHORT&&pt&&(V=pt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function x(A,v){let z;return A?v===null||v===Jn||v===vs?z=i.DEPTH24_STENCIL8:v===Gn?z=i.DEPTH32F_STENCIL8:v===js&&(z=i.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Jn||v===vs?z=i.DEPTH_COMPONENT24:v===Gn?z=i.DEPTH_COMPONENT32F:v===js&&(z=i.DEPTH_COMPONENT16),z}function b(A,v){return E(A)===!0||A.isFramebufferTexture&&A.minFilter!==Se&&A.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function k(A){const v=new WeakRef(A);n.get(A).__ref=v,p.add(v),_.register(A,v,v)}function N(A){const v=n.get(A).__ref;v!==void 0&&(p.delete(v),_.unregister(v))}function F(A){J(A.target)}function G(A){D(A.target)}function J(A){A.removeEventListener("dispose",F),N(A),j(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&u.delete(A)}function D(A){A.removeEventListener("dispose",G),N(A),rt(A)}function K(){for(const A of p){const v=A.deref();v!==void 0&&(v.isRenderTarget===!0?D(v):J(v))}p.clear(),u.clear()}function j(A){const v=n.get(A);if(v.__webglInit===void 0)return;const z=A.source,nt=f.get(z);if(nt){const tt=nt[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&X(A),Object.keys(nt).length===0&&f.delete(z)}n.remove(A)}function X(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const z=A.source,nt=f.get(z);delete nt[v.__cacheKey],a.memory.textures--}function rt(A){const v=n.get(A);v.__depthDisposeCallback&&v.__depthDisposeCallback();const z=A.depthTexture;if(z&&z.renderTarget===A&&J(z),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let ct=0;ct<v.__webglFramebuffer[tt].length;ct++)i.deleteFramebuffer(v.__webglFramebuffer[tt][ct]);else i.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[tt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const nt=A.textures;for(let tt=0,ct=nt.length;tt<ct;tt++){const pt=n.get(nt[tt]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(nt[tt])}n.remove(A)}let Y=0;function et(){Y=0}function it(){return Y}function yt(A){Y=A}function Dt(){const A=Y;return A>=s.maxTextures&&Vt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,A}function Q(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.mipmapsAutoUpdate),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function vt(A,v){const z=n.get(A);if(A.isVideoTexture&&Le(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){const nt=A.image;if(nt===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(z,A,v);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function wt(A,v){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Re(z,A,v);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function Ot(A,v){const z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){Re(z,A,v);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function _t(A,v){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Xe(z,A,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}const Wt={[Qs]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},be={[Se]:i.NEAREST,[wd]:i.NEAREST_MIPMAP_NEAREST,[_r]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},Bt={[Cd]:i.NEVER,[Nh]:i.ALWAYS,[Pd]:i.LESS,[Lh]:i.LEQUAL,[Ld]:i.EQUAL,[Dh]:i.GEQUAL,[Dd]:i.GREATER,[Nd]:i.NOTEQUAL};function re(A,v){if(v.type===Gn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===wa||v.magFilter===_r||v.magFilter===bi||v.minFilter===un||v.minFilter===wa||v.minFilter===_r||v.minFilter===bi)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Wt[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Wt[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Wt[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,be[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,be[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Bt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Se||v.minFilter!==_r&&v.minFilter!==bi||v.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ae(A,v){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",F),k(v));const nt=v.source;let tt=f.get(nt);tt===void 0&&(tt={},f.set(nt,tt));const ct=Q(v);if(ct!==A.__cacheKey){tt[ct]===void 0&&(tt[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),tt[ct].usedTimes++;const pt=tt[A.__cacheKey];pt!==void 0&&(tt[A.__cacheKey].usedTimes--,pt.usedTimes===0&&X(v)),A.__cacheKey=ct,A.__webglTexture=tt[ct].texture}return z}function Ht(A,v,z){return Math.floor(Math.floor(A/z)/v)}function ye(A,v,z,nt){const ct=A.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,nt,v.data);else{ct.sort((P,$)=>P.start-$.start);let pt=0;for(let P=1;P<ct.length;P++){const $=ct[pt],q=ct[P],dt=$.start+$.count,st=Ht(q.start,v.width,4),ot=Ht($.start,v.width,4);q.start<=dt+1&&st===ot&&Ht(q.start+q.count-1,v.width,4)===st?$.count=Math.max($.count,q.start+q.count-$.start):(++pt,ct[pt]=q)}ct.length=pt+1;const V=e.getParameter(i.UNPACK_ROW_LENGTH),Z=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let P=0,$=ct.length;P<$;P++){const q=ct[P],dt=Math.floor(q.start/4),st=Math.ceil(q.count/4),ot=dt%v.width,Nt=Math.floor(dt/v.width),Kt=st,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,Nt),e.texSubImage2D(i.TEXTURE_2D,0,ot,Nt,Kt,at,z,nt,v.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,V),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function Re(A,v,z){let nt=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(nt=i.TEXTURE_3D);const tt=ae(A,v),ct=v.source;e.bindTexture(nt,A.__webglTexture,i.TEXTURE0+z);const pt=n.get(ct);if(ct.version!==pt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const at=ie.getPrimaries(ie.workingColorSpace),It=v.colorSpace===yi?null:ie.getPrimaries(v.colorSpace),Gt=v.colorSpace===yi||at===It?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let Z=S(v.image,!1,s.maxTextureSize);Z=zt(v,Z);const ut=r.convert(v.format,v.colorSpace),P=r.convert(v.type);let $=R(v.internalFormat,ut,P,v.normalized,v.colorSpace,v.isVideoTexture);re(nt,v);let q;const dt=v.mipmaps,st=v.isVideoTexture!==!0,ot=pt.__version===void 0||tt===!0,Nt=ct.dataReady,Kt=b(v,Z);if(v.isDepthTexture)$=x(v.format===wi,v.type),ot&&(st?e.texStorage2D(i.TEXTURE_2D,1,$,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,$,Z.width,Z.height,0,ut,P,null));else if(v.isDataTexture)if(dt.length>0){st&&ot&&e.texStorage2D(i.TEXTURE_2D,Kt,$,dt[0].width,dt[0].height);for(let at=0,It=dt.length;at<It;at++)q=dt[at],st?Nt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,q.width,q.height,ut,P,q.data):e.texImage2D(i.TEXTURE_2D,at,$,q.width,q.height,0,ut,P,q.data);v.generateMipmaps=!1}else st?(ot&&e.texStorage2D(i.TEXTURE_2D,Kt,$,Z.width,Z.height),Nt&&ye(v,Z,ut,P)):e.texImage2D(i.TEXTURE_2D,0,$,Z.width,Z.height,0,ut,P,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){st&&ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,$,dt[0].width,dt[0].height,Z.depth);for(let at=0,It=dt.length;at<It;at++)if(q=dt[at],v.format!==wn)if(ut!==null)if(st){if(Nt)if(v.layerUpdates.size>0){const Gt=mc(q.width,q.height,v.format,v.type);for(const xt of v.layerUpdates){const he=q.data.subarray(xt*Gt/q.data.BYTES_PER_ELEMENT,(xt+1)*Gt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,xt,q.width,q.height,1,ut,he)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,Z.depth,ut,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,$,q.width,q.height,Z.depth,0,q.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?Nt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,q.width,q.height,Z.depth,ut,P,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,$,q.width,q.height,Z.depth,0,ut,P,q.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{st&&ot&&e.texStorage2D(i.TEXTURE_2D,Kt,$,dt[0].width,dt[0].height);for(let at=0,It=dt.length;at<It;at++)q=dt[at],v.format!==wn?ut!==null?st?Nt&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,q.width,q.height,ut,q.data):e.compressedTexImage2D(i.TEXTURE_2D,at,$,q.width,q.height,0,q.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?Nt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,q.width,q.height,ut,P,q.data):e.texImage2D(i.TEXTURE_2D,at,$,q.width,q.height,0,ut,P,q.data)}else if(v.isDataArrayTexture)if(st){if(ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Kt,$,Z.width,Z.height,Z.depth),Nt)if(v.layerUpdates.size>0){const at=mc(Z.width,Z.height,v.format,v.type);for(const It of v.layerUpdates){const Gt=Z.data.subarray(It*at/Z.data.BYTES_PER_ELEMENT,(It+1)*at/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,It,Z.width,Z.height,1,ut,P,Gt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ut,P,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,Z.width,Z.height,Z.depth,0,ut,P,Z.data);else if(v.isData3DTexture)st?(ot&&e.texStorage3D(i.TEXTURE_3D,Kt,$,Z.width,Z.height,Z.depth),Nt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ut,P,Z.data)):e.texImage3D(i.TEXTURE_3D,0,$,Z.width,Z.height,Z.depth,0,ut,P,Z.data);else if(v.isFramebufferTexture){if(ot)if(st)e.texStorage2D(i.TEXTURE_2D,Kt,$,Z.width,Z.height);else{let at=Z.width,It=Z.height;for(let Gt=0;Gt<Kt;Gt++)e.texImage2D(i.TEXTURE_2D,Gt,$,at,It,0,ut,P,null),at>>=1,It>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),Z.parentNode!==at){at.appendChild(Z),u.add(v),at.onpaint=It=>{const Gt=It.changedElements;for(const xt of u)Gt.includes(xt.image)&&(xt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{const Gt=i.RGBA,xt=i.RGBA,he=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Gt,xt,he,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(dt.length>0){if(st&&ot){const at=kt(dt[0]);e.texStorage2D(i.TEXTURE_2D,Kt,$,at.width,at.height)}for(let at=0,It=dt.length;at<It;at++)q=dt[at],st?Nt&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,ut,P,q):e.texImage2D(i.TEXTURE_2D,at,$,ut,P,q);v.generateMipmaps=!1}else if(st){if(ot){const at=kt(Z);e.texStorage2D(i.TEXTURE_2D,Kt,$,at.width,at.height)}Nt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,P,Z)}else e.texImage2D(i.TEXTURE_2D,0,$,ut,P,Z);E(v)&&v.mipmapsAutoUpdate===!0&&y(nt),pt.__version=ct.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Xe(A,v,z){if(v.image.length!==6)return;const nt=ae(A,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const ct=n.get(tt);if(tt.version!==ct.__version||nt===!0){e.activeTexture(i.TEXTURE0+z);const pt=ie.getPrimaries(ie.workingColorSpace),V=v.colorSpace===yi?null:ie.getPrimaries(v.colorSpace),Z=v.colorSpace===yi||pt===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ut=v.isCompressedTexture||v.image[0].isCompressedTexture,P=v.image[0]&&v.image[0].isDataTexture,$=[];for(let xt=0;xt<6;xt++)!ut&&!P?$[xt]=S(v.image[xt],!0,s.maxCubemapSize):$[xt]=P?v.image[xt].image:v.image[xt],$[xt]=zt(v,$[xt]);const q=$[0],dt=r.convert(v.format,v.colorSpace),st=r.convert(v.type);let ot=R(v.internalFormat,dt,st,v.normalized,v.colorSpace);const Nt=v.isVideoTexture!==!0,Kt=ct.__version===void 0||nt===!0,at=tt.dataReady;let It=b(v,q);re(i.TEXTURE_CUBE_MAP,v);let Gt;if(v.isDepthTexture){if(ot=x(v.format===wi,v.type),Kt)if(Nt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ot,q.width,q.height);else for(let xt=0;xt<6;xt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ot,q.width,q.height,0,dt,st,null)}else if(ut){Nt&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,ot,q.width,q.height);for(let xt=0;xt<6;xt++){Gt=$[xt].mipmaps;for(let he=0;he<Gt.length;he++){const De=Gt[he];v.format!==wn?dt!==null?Nt?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,he,0,0,De.width,De.height,dt,De.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,he,ot,De.width,De.height,0,De.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,he,0,0,De.width,De.height,dt,st,De.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,he,ot,De.width,De.height,0,dt,st,De.data)}}}else{if(Gt=v.mipmaps,Nt&&Kt){Gt.length>0&&It++;const xt=kt($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,ot,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(P){Nt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,$[xt].width,$[xt].height,dt,st,$[xt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ot,$[xt].width,$[xt].height,0,dt,st,$[xt].data);for(let he=0;he<Gt.length;he++){const Mn=Gt[he].image[xt].image;Nt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,he+1,0,0,Mn.width,Mn.height,dt,st,Mn.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,he+1,ot,Mn.width,Mn.height,0,dt,st,Mn.data)}}else{Nt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,dt,st,$[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ot,dt,st,$[xt]);for(let he=0;he<Gt.length;he++){const De=Gt[he];Nt?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,he+1,0,0,dt,st,De.image[xt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,he+1,ot,dt,st,De.image[xt])}}}E(v)&&v.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ct.__version=tt.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Me(A,v,z,nt,tt,ct){const pt=r.convert(z.format,z.colorSpace),V=r.convert(z.type),Z=R(z.internalFormat,pt,V,z.normalized,z.colorSpace),ut=n.get(v),P=n.get(z);if(P.__renderTarget=v,!ut.__hasExternalTextures){const $=Math.max(1,v.width>>ct),q=Math.max(1,v.height>>ct);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ct,Z,$,q,v.depth,0,pt,V,null):e.texImage2D(tt,ct,Z,$,q,0,pt,V,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ft(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,tt,P.__webglTexture,0,ge(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,tt,P.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(A,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const nt=v.depthTexture,tt=nt&&nt.isDepthTexture?nt.type:null,ct=x(v.stencilBuffer,tt),pt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(v),ct,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(v),ct,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ct,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,A)}else{const nt=v.textures;for(let tt=0;tt<nt.length;tt++){const ct=nt[tt],pt=r.convert(ct.format,ct.colorSpace),V=r.convert(ct.type),Z=R(ct.internalFormat,pt,V,ct.normalized,ct.colorSpace);ft(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(v),Z,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(v),Z,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Z,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(A,v,z){const nt=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const tt=n.get(v.depthTexture);tt.__renderTarget=v;const ct=nt?v.depthTexture.image[0]:v.depthTexture.image;(!tt.__webglTexture||ct.width!==v.width||ct.height!==v.height)&&(ct.width=v.width,ct.height=v.height,v.depthTexture.needsUpdate=!0),nt?_t(v.depthTexture,0):vt(v.depthTexture,0);const pt=tt.__webglTexture,V=ge(v),Z=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ut=v.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ri)ft(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,Z,pt,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,ut,Z,pt,0);else if(v.depthTexture.format===wi)ft(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,Z,pt,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,ut,Z,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ce(A){const v=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const nt=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),nt){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,nt.removeEventListener("dispose",tt)};nt.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=nt}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let nt=0;nt<6;nt++)Pe(v.__webglFramebuffer[nt],A,nt);else A.texture.mipmaps.length>0?Pe(v.__webglFramebuffer[0],A,0):Pe(v.__webglFramebuffer,A,0);else if(z){v.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[nt]),v.__webglDepthbuffer[nt]===void 0)v.__webglDepthbuffer[nt]=i.createRenderbuffer(),pe(v.__webglDepthbuffer[nt],A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=v.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ct)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),pe(v.__webglDepthbuffer,A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function cn(A,v,z){const nt=n.get(A);v!==void 0&&Me(nt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ce(A)}function qe(A){const v=A.texture,z=n.get(A),nt=n.get(v);A.addEventListener("dispose",G),k(A);const tt=A.textures,ct=A.isWebGLCubeRenderTarget===!0,pt=tt.length>1;if(pt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=v.version,a.memory.textures++),ct){z.__webglFramebuffer=[];for(let V=0;V<6;V++)if(v.mipmaps.length>0){z.__webglFramebuffer[V]=[];for(let Z=0;Z<v.mipmaps.length;Z++)z.__webglFramebuffer[V][Z]=i.createFramebuffer()}else z.__webglFramebuffer[V]=i.createFramebuffer()}else{if(v.mipmaps.length>0){z.__webglFramebuffer=[];for(let V=0;V<v.mipmaps.length;V++)z.__webglFramebuffer[V]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(pt)for(let V=0,Z=tt.length;V<Z;V++){const ut=n.get(tt[V]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ft(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let V=0;V<tt.length;V++){const Z=tt[V];z.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[V]);const ut=r.convert(Z.format,Z.colorSpace),P=r.convert(Z.type),$=R(Z.internalFormat,ut,P,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),q=ge(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,$,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,z.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),re(i.TEXTURE_CUBE_MAP,v);for(let V=0;V<6;V++)if(v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)Me(z.__webglFramebuffer[V][Z],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Z);else Me(z.__webglFramebuffer[V],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);E(v)?y(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(pt){for(let V=0,Z=tt.length;V<Z;V++){const ut=tt[V],P=n.get(ut);let $=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,P.__webglTexture),re($,ut),Me(z.__webglFramebuffer,A,ut,i.COLOR_ATTACHMENT0+V,$,0),E(ut)&&y($)}e.unbindTexture()}else{let V=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(V=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,nt.__webglTexture),re(V,v),v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)Me(z.__webglFramebuffer[Z],A,v,i.COLOR_ATTACHMENT0,V,Z);else Me(z.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,V,0);E(v)?y(V):v.mipmaps.length>0&&i.texParameteri(V,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&Ce(A)}function I(A){const v=A.textures;for(let z=0,nt=v.length;z<nt;z++){const tt=v[z];if(E(tt)&&tt.mipmapsAutoUpdate===!0){const ct=T(A),pt=n.get(tt).__webglTexture;e.bindTexture(ct,pt),y(ct),e.unbindTexture()}}}const en=[];function de(A){if(A.samples>0){if(ft(A)===!1){const v=A.textures,z=A.width,nt=A.height;let tt=i.COLOR_BUFFER_BIT;const ct=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(A),V=v.length>1;if(V)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);const P=n.get(v[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,z,nt,0,0,z,nt,tt,i.NEAREST),l===!0&&(en.length=0,en.push(i.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&en.push(ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,en))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ut]);const P=n.get(v[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ge(A){return Math.min(s.maxSamples,A.samples)}function ft(A){const v=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Le(A){const v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function zt(A,v){const z=A.colorSpace,nt=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==tr&&z!==yi&&(ie.getTransfer(z)===me?(nt!==wn||tt!==mn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",z)),v}function kt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Dt,this.resetTextureUnits=et,this.getTextureUnits=it,this.setTextureUnits=yt,this.setTexture2D=vt,this.setTexture2DArray=wt,this.setTexture3D=Ot,this.setTextureCube=_t,this.rebindTextures=cn,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=ft,this.dispose=K}function kx(i,t){function e(n,s=yi){let r;const a=ie.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ah)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wh)return i.BYTE;if(n===Th)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===al)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===$n)return i.HALF_FLOAT;if(n===Ch)return i.ALPHA;if(n===Ph)return i.RGB;if(n===wn)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===cl)return i.RED;if(n===hl)return i.RED_INTEGER;if(n===Gi)return i.RG;if(n===ul)return i.RG_INTEGER;if(n===dl)return i.RGBA_INTEGER;if(n===Kr||n===Zr||n===Jr||n===$r)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===Mo||n===So||n===yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===bo||n===wo||n===To||n===Ao||n===sa||n===Ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===bo)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===To)return r.COMPRESSED_R11_EAC;if(n===Ao)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Co||n===Po||n===Lo||n===Do||n===No||n===Io||n===Uo||n===Fo||n===Oo||n===zo||n===Bo||n===ko||n===Ho||n===Go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Wo||n===Xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vo)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===Yo||n===ra||n===Ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
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

}`;class Vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Vh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:Hx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wx extends Yi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new Vx,g={},S=e.getContextAttributes();let E=null,y=null;const T=[],R=[],x=new At;let b=null,k=null;const N=new kn;N.viewport=new Ee;const F=new kn;F.viewport=new Ee;const G=[N,F],J=new ep;let D=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let vt=T[Q];return vt===void 0&&(vt=new Ia,T[Q]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(Q){let vt=T[Q];return vt===void 0&&(vt=new Ia,T[Q]=vt),vt.getGripSpace()},this.getHand=function(Q){let vt=T[Q];return vt===void 0&&(vt=new Ia,T[Q]=vt),vt.getHandSpace()};function j(Q){const vt=R.indexOf(Q.inputSource);if(vt===-1)return;const wt=T[vt];wt!==void 0&&(wt.update(Q.inputSource,Q.frame,c||a),wt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",rt);for(let Q=0;Q<T.length;Q++){const vt=R[Q];vt!==null&&(R[Q]=null,T[Q].disconnect(vt))}D=null,K=null,m.reset();for(const Q in g)delete g[Q];if(t.setRenderTarget(E),f=null,d=null,u=null,s=null,y=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),k!==null){const Q=k.camera;Q.fov=k.fov,Q.zoom=k.zoom,Q.updateProjectionMatrix(),k=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",X),s.addEventListener("inputsourceschange",rt),S.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ot=null,_t=null;S.depth&&(_t=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=S.stencil?wi:Ri,Ot=S.stencil?vs:Jn);const Wt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Zn(d.textureWidth,d.textureHeight,{format:wn,type:mn,depthTexture:new Ms(d.textureWidth,d.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const wt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Zn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Dt.setContext(s),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(Q){for(let vt=0;vt<Q.removed.length;vt++){const wt=Q.removed[vt],Ot=R.indexOf(wt);Ot>=0&&(R[Ot]=null,T[Ot].disconnect(wt))}for(let vt=0;vt<Q.added.length;vt++){const wt=Q.added[vt];let Ot=R.indexOf(wt);if(Ot===-1){for(let Wt=0;Wt<T.length;Wt++)if(Wt>=R.length){R.push(wt),Ot=Wt;break}else if(R[Wt]===null){R[Wt]=wt,Ot=Wt;break}if(Ot===-1)break}const _t=T[Ot];_t&&_t.connect(wt)}}function Y(Q,vt){vt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(vt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let vt=Q.near,wt=Q.far;m.texture!==null&&(m.depthNear>0&&(vt=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),J.near=F.near=N.near=vt,J.far=F.far=N.far=wt,(D!==J.near||K!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),D=J.near,K=J.far),J.layers.mask=Q.layers.mask|6,N.layers.mask=J.layers.mask&-5,F.layers.mask=J.layers.mask&-3;const Ot=Q.parent,_t=J.cameras;Y(J,Ot);for(let Wt=0;Wt<_t.length;Wt++)Y(_t[Wt],Ot);J.projectionMatrix.copy(N.projectionMatrix),J.projectionMatrixInverse.copy(N.projectionMatrixInverse),k===null&&Q.isPerspectiveCamera&&(k={camera:Q,fov:Q.fov,zoom:Q.zoom}),et(Q,J,Ot)};function et(Q,vt,wt){wt===null?Q.matrix.copy(vt.matrixWorld):(Q.matrix.copy(wt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(vt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(vt.projectionMatrix),Q.projectionMatrixInverse.copy(vt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Jo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(J)},this.getCameraTexture=function(Q){return g[Q]};let it=null;function yt(Q,vt){if(h=vt.getViewerPose(c||a),p=vt,h!==null){const wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ot=!1;wt.length!==J.cameras.length&&(J.cameras.length=0,Ot=!0);for(let Bt=0;Bt<wt.length;Bt++){const re=wt[Bt];let ae=null;if(f!==null)ae=f.getViewport(re);else{const ye=u.getViewSubImage(d,re);ae=ye.viewport,Bt===0&&(t.setRenderTargetTextures(y,ye.colorTexture,ye.depthStencilTexture),t.setRenderTarget(y))}let Ht=G[Bt];Ht===void 0&&(Ht=new kn,Ht.layers.enable(Bt),Ht.viewport=new Ee,G[Bt]=Ht),Ht.matrix.fromArray(re.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(re.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ae.x,ae.y,ae.width,ae.height),Bt===0&&(J.matrix.copy(Ht.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ot===!0&&J.cameras.push(Ht)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Bt=u.getDepthInformation(wt[0]);Bt&&Bt.isValid&&Bt.texture&&m.init(Bt,s.renderState)}if(_t&&_t.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Bt=0;Bt<wt.length;Bt++){const re=wt[Bt].camera;if(re){let ae=g[re];ae||(ae=new Vh,g[re]=ae);const Ht=u.getCameraImage(re);ae.sourceTexture=Ht}}}}for(let wt=0;wt<T.length;wt++){const Ot=R[wt],_t=T[wt];Ot!==null&&_t!==void 0&&_t.update(Ot,vt,c||a)}it&&it(Q,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),p=null}const Dt=new eu;Dt.setAnimationLoop(yt),this.setAnimationLoop=function(Q){it=Q},this.dispose=function(){}}}const Xx=new ce,uu=new Xt;uu.set(-1,0,0,0,1,0,0,0,1);function qx(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,jh(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,S,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,S,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===dn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===dn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const S=t.get(g),E=S.envMap,y=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(uu),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,S){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===dn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Yx(i,t,e,n){let s={},r={};function a(S,E){const y=E.program;n.uniformBlockBinding(S,y,s[S.id])}function o(S,E){let y=s[S.id];y===void 0&&(p(S),y=l(S),s[S.id]=y,S.addEventListener("dispose",m));const T=E.program;n.updateUBOMapping(S,T);const R=t.render.frame;r[S.id]!==R&&(c(S),r[S.id]=R)}function l(S){const E=i.createBuffer(),y=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,y,T),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(S){const E=s[S.id],y=S.uniforms,T=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,x=y.length;R<x;R++){const b=y[R];if(Array.isArray(b))for(let k=0,N=b.length;k<N;k++)h(b[k],R,k,T);else h(b,R,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,E,y,T){if(d(S,E,y,T)===!0){const R=S.__offset,x=S.value;if(Array.isArray(x)){let b=0;for(let k=0;k<x.length;k++){const N=x[k],F=_(N,!0);u(N,S.__data,b),b+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,S.__data)}}function u(S,E,y){typeof S=="number"||typeof S=="boolean"?E[y]=S:S.isMatrix3?(E[y]=S.elements[0],E[y+1]=S.elements[1],E[y+2]=S.elements[2],E[y+3]=0,E[y+4]=S.elements[3],E[y+5]=S.elements[4],E[y+6]=S.elements[5],E[y+7]=0,E[y+8]=S.elements[6],E[y+9]=S.elements[7],E[y+10]=S.elements[8],E[y+11]=0):ArrayBuffer.isView(S)?E.set(S.subarray(0,E.length-y),y):S.toArray(E,y)}function d(S,E,y,T){const R=S.value,x=E+"_"+y;if(Array.isArray(R)){T[x]===void 0&&(T[x]=[]);const b=T[x];let k=!1;for(let N=0;N<R.length;N++)f(R[N],b,N)===!0&&(k=!0);return k}return f(R,T,x)}function f(S,E,y){if(E[y]===void 0)return typeof S=="number"||typeof S=="boolean"?E[y]=S:ArrayBuffer.isView(S)?E[y]=S.slice():E[y]=S.clone(),!0;{const T=E[y];if(typeof S=="number"||typeof S=="boolean"){if(T!==S)return E[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(T.equals(S)===!1)return T.copy(S),!0}}return!1}function p(S){const E=S.uniforms;let y=0;const T=16;for(let x=0,b=E.length;x<b;x++){const k=Array.isArray(E[x])?E[x]:[E[x]];for(let N=0,F=k.length;N<F;N++){const G=k[N],J=Array.isArray(G.value)?G.value:[G.value],D=Array.isArray(E[x])||Array.isArray(G.value);let K=y;for(let X=0,rt=J.length;X<rt;X++){const Y=J[X],et=_(Y,D),it=y%T,yt=it%et.boundary,Dt=it+yt;y+=yt,Dt!==0&&T-Dt<et.storage&&(y+=T-Dt),X===0&&(K=y),y+=et.storage}const j=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new j((y-K)/Float32Array.BYTES_PER_ELEMENT),G.__offset=K}}const R=y%T;return R>0&&(y+=T-R),S.__size=y,S.__cache={},this}function _(S,E){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",S),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(S){const E=S.target;E.removeEventListener("dispose",m),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(const S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:g}}const Kx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qn=null;function Zx(){return qn===null&&(qn=new xa(Kx,16,16,Gi,$n),qn.name="DFG_LUT",qn.minFilter=un,qn.magFilter=un,qn.wrapS=di,qn.wrapT=di,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}class Jx{constructor(t={}){const{canvas:e=Fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=f,m=new Set([dl,ul,hl]),g=new Set([mn,Jn,js,vs,ol,ll]),S=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let T=null,R=null;const x=[],b=[];let k=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1,G=null,J=null,D=null,K=null;this._outputColorSpace=En;let j=0,X=0,rt=null,Y=-1,et=null;const it=new Ee,yt=new Ee;let Dt=null;const Q=new qt(0);let vt=0,wt=e.width,Ot=e.height,_t=1,Wt=null,be=null;const Bt=new Ee(0,0,wt,Ot),re=new Ee(0,0,wt,Ot);let ae=!1;const Ht=new nr,ye=new gl;let Re=!1,Xe=!1;const Me=new ce,pe=new U,Pe=new Ee,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let cn=!1;function qe(){return rt===null?_t:1}let I=n;function en(M,L){return e.getContext(M,L)}let de,ge,ft,Le,zt,kt,A,v,z,nt,tt,ct,pt,V,Z,ut,P,$,q,dt,st,ot,Nt;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rl}`),e.addEventListener("webglcontextlost",It,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),I===null){const L="webgl2";if(I=en(L,M),I===null)throw en(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Kt()}catch(M){throw e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),ue("WebGLRenderer: "+M.message),M}function Kt(){de=new jm(I),de.init(),st=new kx(I,de),ge=new Gm(I,de,t,st),ft=new zx(I,de),ge.reversedDepthBuffer&&d&&ft.buffers.depth.setReversed(!0),J=I.createFramebuffer(),D=I.createFramebuffer(),K=I.createFramebuffer(),Le=new ng(I),zt=new bx,kt=new Bx(I,de,ft,zt,ge,st,Le),A=new Qm(N),v=new sp(I),ot=new km(I,v),z=new tg(I,v,Le,ot),nt=new sg(I,z,v,ot,Le),$=new ig(I,ge,kt),Z=new Vm(zt),tt=new Ex(N,A,de,ge,ot,Z),ct=new qx(N,zt),pt=new Tx,V=new Dx(de),P=new Bm(N,A,ft,nt,p,l),ut=new Ox(N,nt,ge),Nt=new Yx(I,Le,ge,ft),q=new Hm(I,de,Le),dt=new eg(I,de,Le),Le.programs=tt.programs,N.capabilities=ge,N.extensions=de,N.properties=zt,N.renderLists=pt,N.shadowMap=ut,N.state=ft,N.info=Le}_!==mn&&(k=new ag(_,e.width,e.height,o,s,r));const at=new Wx(N,I);this.xr=at,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=de.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=de.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(M){M!==void 0&&(_t=M,this.setSize(wt,Ot,!1))},this.getSize=function(M){return M.set(wt,Ot)},this.setSize=function(M,L,W=!0){if(at.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=M,Ot=L,e.width=Math.floor(M*_t),e.height=Math.floor(L*_t),W===!0&&(e.style.width=M+"px",e.style.height=L+"px"),k!==null&&k.setSize(e.width,e.height),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(wt*_t,Ot*_t).floor()},this.setDrawingBufferSize=function(M,L,W){wt=M,Ot=L,_t=W,e.width=Math.floor(M*W),e.height=Math.floor(L*W),this.setViewport(0,0,M,L)},this.setEffects=function(M){if(_===mn){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let L=0;L<M.length;L++)if(M[L].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(it)},this.getViewport=function(M){return M.copy(Bt)},this.setViewport=function(M,L,W,B){M.isVector4?Bt.set(M.x,M.y,M.z,M.w):Bt.set(M,L,W,B),ft.viewport(it.copy(Bt).multiplyScalar(qe()).round())},this.getScissor=function(M){return M.copy(re)},this.setScissor=function(M,L,W,B){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,L,W,B),ft.scissor(yt.copy(re).multiplyScalar(qe()).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(M){ft.setScissorTest(ae=M)},this.setOpaqueSort=function(M){Wt=M},this.setTransparentSort=function(M){be=M},this.getClearColor=function(M){return M.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,W=!0){let B=0;if(M){let H=!1;if(rt!==null){const gt=rt.texture.format;H=m.has(gt)}if(H){const gt=rt.texture.type,Ct=g.has(gt),mt=P.getClearColor(),Et=P.getClearAlpha(),Ut=mt.r,Yt=mt.g,ee=mt.b;Ct?(S[0]=Ut,S[1]=Yt,S[2]=ee,S[3]=Et,I.clearBufferuiv(I.COLOR,0,S)):(E[0]=Ut,E[1]=Yt,E[2]=ee,E[3]=Et,I.clearBufferiv(I.COLOR,0,E))}else B|=I.COLOR_BUFFER_BIT}L&&(B|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),G=M},this.dispose=function(){e.removeEventListener("webglcontextlost",It,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),P.dispose(),pt.dispose(),V.dispose(),kt.dispose(),zt.dispose(),A.dispose(),nt.dispose(),z.dispose(),ot.dispose(),Nt.dispose(),tt.dispose(),at.dispose(),at.removeEventListener("sessionstart",pr),at.removeEventListener("sessionend",As),nn.stop()};function It(M){M.preventDefault(),Ul("WebGLRenderer: Context Lost."),F=!0}function Gt(){Ul("WebGLRenderer: Context Restored."),F=!1;const M=Le.autoReset,L=ut.enabled,W=ut.autoUpdate,B=ut.needsUpdate,H=ut.type;Kt(),Le.autoReset=M,ut.enabled=L,ut.autoUpdate=W,ut.needsUpdate=B,ut.type=H}function xt(M){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function he(M){const L=M.target;L.removeEventListener("dispose",he),De(L)}function De(M){Mn(M),zt.remove(M)}function Mn(M){const L=zt.get(M).programs;L!==void 0&&(L.forEach(function(W){tt.releaseProgram(W)}),M.isShaderMaterial&&tt.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,W,B,H,gt){L===null&&(L=Ce);const Ct=H.isMesh&&H.matrixWorld.determinantAffine()<0,mt=Wn(M,L,W,B,H);ft.setMaterial(B,Ct);let Et=W.index,Ut=1;if(B.wireframe===!0){if(Et=z.getWireframeAttribute(W),Et===void 0)return;Ut=2}const Yt=W.drawRange,ee=W.attributes.position;let Pt=Yt.start*Ut,ne=(Yt.start+Yt.count)*Ut;gt!==null&&(Pt=Math.max(Pt,gt.start*Ut),ne=Math.min(ne,(gt.start+gt.count)*Ut)),Et!==null?(Pt=Math.max(Pt,0),ne=Math.min(ne,Et.count)):ee!=null&&(Pt=Math.max(Pt,0),ne=Math.min(ne,ee.count));const Ue=ne-Pt;if(Ue<0||Ue===1/0)return;ot.setup(H,B,mt,W,Et);let ve,_e=q;if(Et!==null&&(ve=v.get(Et),_e=dt,_e.setIndex(ve)),H.isMesh)B.wireframe===!0?(ft.setLineWidth(B.wireframeLinewidth*qe()),_e.setMode(I.LINES)):_e.setMode(I.TRIANGLES);else if(H.isLine){let Ke=B.linewidth;Ke===void 0&&(Ke=1),ft.setLineWidth(Ke*qe()),H.isLineSegments?_e.setMode(I.LINES):H.isLineLoop?_e.setMode(I.LINE_LOOP):_e.setMode(I.LINE_STRIP)}else H.isPoints?_e.setMode(I.POINTS):H.isSprite&&_e.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(de.get("WEBGL_multi_draw"))_e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ke=H._multiDrawStarts,Lt=H._multiDrawCounts,sn=H._multiDrawCount,fe=Et?v.get(Et).bytesPerElement:1,Li=zt.get(B).currentProgram.getUniforms();for(let Ze=0;Ze<sn;Ze++)Li.setValue(I,"_gl_DrawID",Ze),_e.render(Ke[Ze]/fe,Lt[Ze])}else if(H.isInstancedMesh)_e.renderInstances(Pt,Ue,H.count);else if(W.isInstancedBufferGeometry){const Ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Lt=Math.min(W.instanceCount,Ke);_e.renderInstances(Pt,Ue,Lt)}else _e.render(Pt,Ue)};function Ts(M,L,W,B){G!==null&&M.isNodeMaterial&&G.setObject(B,M),Re===!0&&Z.setState(M,W,!1),M.transparent===!0&&M.side===bn&&M.forceSinglePass===!1?(M.side=dn,M.needsUpdate=!0,Ie(M,L,B),M.side=Hi,M.needsUpdate=!0,Ie(M,L,B),M.side=bn):Ie(M,L,B)}this.compile=function(M,L,W=null){W===null&&(W=M),G!==null&&G.renderStart(M,L,W),R=V.get(W),R.init(L),b.push(R),W.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),M!==W&&M.traverseVisible(function(H){H.isLight&&H.layers.test(L.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),R.setupLights(),G!==null&&G.updateLights(R.state.lightsArray),Xe=this.localClippingEnabled,Re=Z.init(this.clippingPlanes,Xe),Re===!0&&Z.setGlobalState(this.clippingPlanes,L),G!==null&&ut.render(R.state.shadowsArray,W,L);const B=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const gt=H.material;if(gt)if(Array.isArray(gt))for(let Ct=0;Ct<gt.length;Ct++){const mt=gt[Ct];Ts(mt,W,L,H),B.add(mt)}else Ts(gt,W,L,H),B.add(gt)}),R=b.pop(),G!==null&&G.renderEnd(),B},this.compileAsync=function(M,L,W=null){const B=this.compile(M,L,W);return new Promise(H=>{function gt(){if(B.forEach(function(Ct){const Et=zt.get(Ct).currentProgram;(Et===void 0||Et.isReady())&&B.delete(Ct)}),B.size===0){H(M);return}setTimeout(gt,10)}de.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ln=null;function fr(M){Ln&&Ln(M)}function pr(){nn.stop()}function As(){nn.start()}const nn=new eu;nn.setAnimationLoop(fr),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(M){Ln=M,at.setAnimationLoop(M),M===null?nn.stop():nn.start()},at.addEventListener("sessionstart",pr),at.addEventListener("sessionend",As),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;G!==null&&G.renderStart(M,L);const W=at.enabled===!0&&at.isPresenting===!0,B=k!==null&&(rt===null||W)&&k.begin(N,rt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(L),L=at.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,L,rt),R=V.get(M,b.length),R.init(L),R.state.textureUnits=kt.getTextureUnits(),b.push(R),Me.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?ye.setFromArrayCamera(L):Ht.setFromProjectionMatrix(Me,Vn,L.reversedDepth),Xe=this.localClippingEnabled,Re=Z.init(this.clippingPlanes,Xe),T=pt.get(M,x.length),T.init(),x.push(T),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){const Ct=N.xr.getDepthSensingMesh();Ct!==null&&Zi(Ct,L,-1/0,N.sortObjects)}Zi(M,L,0,N.sortObjects),T.finish(),G!==null&&G.updateLights(R.state.lightsArray),N.sortObjects===!0&&T.sort(Wt,be),cn=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,cn&&P.addToRenderList(T,M),this.info.autoReset===!0&&this.info.reset(),Re===!0&&Z.beginShadows();const H=R.state.shadowsArray;if(ut.render(H,M,L),Re===!0&&Z.endShadows(),(B&&k.hasRenderPass())===!1){const Ct=T.opaque,mt=T.transmissive;if(R.setupLights(),L.isArrayCamera){const Et=L.cameras;if(mt.length>0)for(let Ut=0,Yt=Et.length;Ut<Yt;Ut++){const ee=Et[Ut];Rs(Ct,mt,M,ee)}cn&&P.render(M);for(let Ut=0,Yt=Et.length;Ut<Yt;Ut++){const ee=Et[Ut];ti(T,M,ee,ee.viewport)}}else mt.length>0&&Rs(Ct,mt,M,L),cn&&P.render(M),ti(T,M,L)}rt!==null&&X===0&&(kt.updateMultisampleRenderTarget(rt),kt.updateRenderTargetMipmap(rt)),B&&k.end(N),M.isScene===!0&&M.onAfterRender(N,M,L),ot.resetDefaultState(),Y=-1,et=null,b.pop(),b.length>0?(R=b[b.length-1],kt.setTextureUnits(R.state.textureUnits),Re===!0&&Z.setGlobalState(N.clippingPlanes,R.state.camera)):R=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,G!==null&&G.renderEnd()};function Zi(M,L,W,B){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)R.pushLight(M),M.castShadow&&R.pushShadow(M);else if(M.isSprite){const Ct=L.isArrayCamera?ye:Ht;if(!M.frustumCulled||M.intersectsFrustum(Ct)){B&&Pe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Me);const mt=nt.update(M),Et=M.material;Et.visible&&T.push(M,mt,Et,W,Pe.z,null,L)}}else if(M.isMesh||M.isLine||M.isPoints){const Ct=L.isArrayCamera?ye:Ht;if(!M.frustumCulled||M.intersectsFrustum(Ct)){const mt=nt.update(M),Et=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pe.copy(M.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Pe.copy(mt.boundingSphere.center)),Pe.applyMatrix4(M.matrixWorld).applyMatrix4(Me)),Array.isArray(Et)){const Ut=mt.groups;for(let Yt=0,ee=Ut.length;Yt<ee;Yt++){const Pt=Ut[Yt],ne=Et[Pt.materialIndex];ne&&ne.visible&&T.push(M,mt,ne,W,Pe.z,Pt,L)}}else Et.visible&&T.push(M,mt,Et,W,Pe.z,null,L)}}}const gt=M.children;for(let Ct=0,mt=gt.length;Ct<mt;Ct++)Zi(gt[Ct],L,W,B)}function ti(M,L,W,B){const{opaque:H,transmissive:gt,transparent:Ct}=M;R.setupLightsView(W),Re===!0&&Z.setGlobalState(N.clippingPlanes,W),B&&ft.viewport(it.copy(B)),H.length>0&&ht(H,L,W),gt.length>0&&ht(gt,L,W),Ct.length>0&&ht(Ct,L,W),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Rs(M,L,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[B.id]===void 0){const Pt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[B.id]=new Zn(1,1,{generateMipmaps:!0,type:Pt?$n:mn,minFilter:bi,samples:Math.max(4,ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const gt=R.state.transmissionRenderTarget[B.id],Ct=B.viewport||it;gt.setSize(Ct.z*N.transmissionResolutionScale,Ct.w*N.transmissionResolutionScale);const mt=N.getRenderTarget(),Et=N.getActiveCubeFace(),Ut=N.getActiveMipmapLevel();N.setRenderTarget(gt),N.getClearColor(Q),vt=N.getClearAlpha(),vt<1&&N.setClearColor(16777215,.5),N.clear(),cn&&P.render(W);const Yt=N.toneMapping;N.toneMapping=fi;const ee=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),R.setupLightsView(B),Re===!0&&Z.setGlobalState(N.clippingPlanes,B),ht(M,W,B),kt.updateMultisampleRenderTarget(gt),kt.updateRenderTargetMipmap(gt),de.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ne=0,Ue=L.length;ne<Ue;ne++){const ve=L[ne],{object:_e,geometry:Ke,material:Lt,group:sn}=ve;if(Lt.side===bn&&_e.layers.test(B.layers)){const fe=Lt.side;Lt.side=dn,Lt.needsUpdate=!0,Mt(_e,W,B,Ke,Lt,sn),Lt.side=fe,Lt.needsUpdate=!0,Pt=!0}}Pt===!0&&(kt.updateMultisampleRenderTarget(gt),kt.updateRenderTargetMipmap(gt))}N.setRenderTarget(mt,Et,Ut),N.setClearColor(Q,vt),ee!==void 0&&(B.viewport=ee),N.toneMapping=Yt}function ht(M,L,W){const B=L.isScene===!0?L.overrideMaterial:null;for(let H=0,gt=M.length;H<gt;H++){const Ct=M[H],{object:mt,geometry:Et,group:Ut}=Ct;let Yt=Ct.material;Yt.allowOverride===!0&&B!==null&&(Yt=B),mt.layers.test(W.layers)&&Mt(mt,L,W,Et,Yt,Ut)}}function Mt(M,L,W,B,H,gt){G!==null&&H.isNodeMaterial&&G.setObject(M,H),M.onBeforeRender(N,L,W,B,H,gt),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(N,L,W,B,M,gt),H.transparent===!0&&H.side===bn&&H.forceSinglePass===!1?(H.side=dn,H.needsUpdate=!0,N.renderBufferDirect(W,L,B,H,M,gt),H.side=Hi,H.needsUpdate=!0,N.renderBufferDirect(W,L,B,H,M,gt),H.side=bn):N.renderBufferDirect(W,L,B,H,M,gt),M.onAfterRender(N,L,W,B,H,gt)}function Zt(M){let L=0;for(const W of M)W.texture!==null&&L++;return L}function Ie(M,L,W){L.isScene!==!0&&(L=Ce);const B=zt.get(M),H=R.state.lights,gt=R.state.shadowsArray,Ct=H.state.version,mt=tt.getParameters(M,H.state,gt,L,W,R.state.lightProbeGridArray),Et=tt.getProgramCacheKey(mt);let Ut=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;const Yt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=A.get(M.envMap||B.environment,Yt),B.envMapRotation=B.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",he),Ut=new Map,B.programs=Ut,B.programVariants=new Map);let ee=Ut.get(Et);if(ee!==void 0){if(B.currentProgram===ee&&B.lightsStateVersion===Ct)return jt(M,mt),ee}else mt.uniforms=tt.getUniforms(M),G!==null&&M.isNodeMaterial&&G.build(M,W,mt),M.onBeforeCompile(mt,N),ee=tt.acquireProgram(mt,Et),Ut.set(Et,ee),B.uniforms=mt.uniforms;const Pt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pt.clippingPlanes=Z.uniform),jt(M,mt),B.needsLights=xe(M),B.lightsStateVersion=Ct,B.needsLights&&(Pt.ambientLightColor.value=H.state.ambient,Pt.lightProbe.value=H.state.probe,Pt.sunLights.value=H.state.sun,Pt.sunLightShadows.value=H.state.sunShadow,Pt.directionalLights.value=H.state.directional,Pt.directionalLightShadows.value=H.state.directionalShadow,Pt.spotLights.value=H.state.spot,Pt.spotLightShadows.value=H.state.spotShadow,Pt.rectAreaLights.value=H.state.rectArea,Pt.ltc_1.value=H.state.rectAreaLTC1,Pt.ltc_2.value=H.state.rectAreaLTC2,Pt.pointLights.value=H.state.point,Pt.pointLightShadows.value=H.state.pointShadow,Pt.hemisphereLights.value=H.state.hemi,Pt.sunShadowMatrix.value=H.state.sunShadowMatrix,Pt.sunShadowCascade.value=H.state.sunShadowCascade,Pt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pt.spotLightMatrix.value=H.state.spotLightMatrix,Pt.spotLightMap.value=H.state.spotLightMap,Pt.pointShadowMatrix.value=H.state.pointShadowMatrix),B.numLightProbeGrids=Zt(R.state.lightProbeGridArray),B.currentProgram=ee,B.uniformsList=null,ee}function Sn(M,L,W,B,H){const gt=zt.get(M),Ct=gt.currentProgram.id+","+B+","+H;let mt=gt.programVariants.get(Ct);return mt===void 0?(mt=Ie(M,L,W),gt.programVariants.set(Ct,mt)):(gt.currentProgram=mt,gt.uniformsList=null,gt.outputColorSpace=B,gt.toneMapping=H),mt}function Rt(M){if(M.uniformsList===null){const L=M.currentProgram.getUniforms();M.uniformsList=ta.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function jt(M,L){const W=zt.get(M);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function Wn(M,L,W,B,H){L.isScene!==!0&&(L=Ce),kt.resetTextureUnits();const gt=L.fog,Ct=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,mt=rt===null?N.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ie.workingColorSpace,Et=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ut=A.get(B.envMap||Ct,Et),Yt=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ee=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pt=!!W.morphAttributes.position,ne=!!W.morphAttributes.normal,Ue=!!W.morphAttributes.color;let ve=fi;B.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ve=N.toneMapping);const _e=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ke=_e!==void 0?_e.length:0,Lt=zt.get(B),sn=R.state.lights;if(Re===!0&&(Xe===!0||M!==et)){const we=M===et&&B.id===Y;Z.setState(B,M,we)}let fe=!1,Li=!1;B.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==sn.state.version||H.isBatchedMesh&&Lt.batching===!1||!H.isBatchedMesh&&Lt.batching===!0||H.isBatchedMesh&&Lt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Lt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Lt.instancing===!1||!H.isInstancedMesh&&Lt.instancing===!0||H.isSkinnedMesh&&Lt.skinning===!1||!H.isSkinnedMesh&&Lt.skinning===!0||H.isInstancedMesh&&Lt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Lt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Lt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Lt.instancingMorph===!1&&H.morphTexture!==null||Lt.envMap!==Ut||B.fog===!0&&Lt.fog!==gt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==Z.numPlanes||Lt.numIntersection!==Z.numIntersection)||Lt.vertexAlphas!==Yt||Lt.vertexTangents!==ee||Lt.morphTargets!==Pt||Lt.morphNormals!==ne||Lt.morphColors!==Ue||Lt.morphTargetsCount!==Ke||Lt.numLightProbeGrids!==Zt(R.state.lightProbeGridArray)?fe=!0:(Lt.outputColorSpace!==mt||Lt.toneMapping!==ve)&&(Li=!0):(fe=!0,Lt.__version=B.version);let Ze=Lt.currentProgram;(fe===!0||Li===!0)&&(Ze=Li===!0?Sn(B,L,H,mt,ve):Ie(B,L,H),G&&B.isNodeMaterial&&G.onUpdateProgram(B,Ze,Lt));let mr=!1,gi=!1,Di=!1;const oe=Ze.getUniforms(),We=Lt.uniforms;if(ft.useProgram(Ze.program)&&(mr=!0,gi=!0,Di=!0),B.id!==Y&&(Y=B.id,gi=!0),mr||et!==M){ft.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),oe.setValue(I,"projectionMatrix",M.projectionMatrix),oe.setValue(I,"viewMatrix",M.matrixWorldInverse);const He=oe.map.cameraPosition;He!==void 0&&He.setValue(I,pe.setFromMatrixPosition(M.matrixWorld)),ge.logarithmicDepthBuffer&&oe.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),et!==M&&(et=M,gi=!0,Di=!0)}if(Lt.needsLights&&(sn.state.sunShadowMap.length>0&&oe.setValue(I,"sunShadowMap",sn.state.sunShadowMap,kt),sn.state.directionalShadowMap.length>0&&oe.setValue(I,"directionalShadowMap",sn.state.directionalShadowMap,kt),sn.state.spotShadowMap.length>0&&oe.setValue(I,"spotShadowMap",sn.state.spotShadowMap,kt),sn.state.pointShadowMap.length>0&&oe.setValue(I,"pointShadowMap",sn.state.pointShadowMap,kt)),H.isSkinnedMesh){oe.setOptional(I,H,"bindMatrix"),oe.setOptional(I,H,"bindMatrixInverse");const we=H.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),oe.setValue(I,"boneTexture",we.boneTexture,kt))}H.isBatchedMesh&&(oe.setOptional(I,H,"batchingTexture"),oe.setValue(I,"batchingTexture",H._matricesTexture,kt),oe.setOptional(I,H,"batchingIdTexture"),oe.setValue(I,"batchingIdTexture",H._indirectTexture,kt),oe.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&oe.setValue(I,"batchingColorTexture",H._colorsTexture,kt));const Dn=W.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&$.update(H,W,Ze),(gi||Lt.receiveShadow!==H.receiveShadow)&&(Lt.receiveShadow=H.receiveShadow,oe.setValue(I,"receiveShadow",H.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(We.envMapIntensity.value=L.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=Zx()),gi){if(oe.setValue(I,"toneMappingExposure",N.toneMappingExposure),Lt.needsLights&&Ye(We,Di),gt&&B.fog===!0&&ct.refreshFogUniforms(We,gt),ct.refreshMaterialUniforms(We,B,_t,Ot,R.state.transmissionRenderTarget[M.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){const we=y;let He=0;for(const ei of R.state.lightProbeGridArray)ei.texture!==null&&(we.textures[He]=ei.texture,we.min[He]=ei.boundingBox.min,we.max[He]=ei.boundingBox.max,we.resolution[He]=ei.resolution,He++);for(const ei in we)we[ei].length=He;We.probesSH.value=we.textures,We.probesMin.value=we.min,We.probesMax.value=we.max,We.probesResolution.value=we.resolution}ta.upload(I,Rt(Lt),We,kt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ta.upload(I,Rt(Lt),We,kt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(I,"center",H.center),oe.setValue(I,"modelViewMatrix",H.modelViewMatrix),oe.setValue(I,"normalMatrix",H.normalMatrix),oe.setValue(I,"modelMatrix",H.matrixWorld),B.uniformsGroups!==void 0){const we=B.uniformsGroups;for(let He=0,ei=we.length;He<ei;He++){const Rl=we[He];Nt.update(Rl,Ze),Nt.bind(Rl,Ze)}}return Ze}function Ye(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.sunLights.needsUpdate=L,M.sunLightShadows.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function xe(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(M,L,W){const B=zt.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),zt.get(M.texture).__webglTexture=L,zt.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){const W=zt.get(M);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,W=0){rt=M,j=L,X=W;let B=null,H=!1,gt=!1;if(M){const mt=zt.get(M);if(mt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(I.FRAMEBUFFER,mt.__webglFramebuffer),it.copy(M.viewport),yt.copy(M.scissor),Dt=M.scissorTest,ft.viewport(it),ft.scissor(yt),ft.setScissorTest(Dt),Y=-1;return}else if(mt.__webglFramebuffer===void 0)kt.setupRenderTarget(M);else if(mt.__hasExternalTextures)kt.rebindTextures(M,zt.get(M.texture).__webglTexture,zt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Yt=M.depthTexture;if(mt.__boundDepthTexture!==Yt){if(Yt!==null&&zt.has(Yt)&&(M.width!==Yt.image.width||M.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(M)}}const Et=M.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(gt=!0);const Ut=zt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[L])?B=Ut[L][W]:B=Ut[L],H=!0):M.samples>0&&kt.useMultisampledRTT(M)===!1?B=zt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?B=Ut[W]:B=Ut,it.copy(M.viewport),yt.copy(M.scissor),Dt=M.scissorTest}else it.copy(Bt).multiplyScalar(_t).floor(),yt.copy(re).multiplyScalar(_t).floor(),Dt=ae;if(W!==0&&(B=J),ft.bindFramebuffer(I.FRAMEBUFFER,B)&&ft.drawBuffers(M,B),ft.viewport(it),ft.scissor(yt),ft.setScissorTest(Dt),H){const mt=zt.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,mt.__webglTexture,W)}else if(gt){const mt=L;for(let Et=0;Et<M.textures.length;Et++){const Ut=zt.get(M.textures[Et]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Et,Ut.__webglTexture,W,mt)}}else if(M!==null&&W!==0){const mt=zt.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,W)}Y=-1};function Ve(M){const L=zt.get(M);return(L.__readFormat!==M.format||L.__readType!==M.type)&&(L.__readFormat=M.format,L.__readType=M.type,L.__formatReadable=ge.textureFormatReadable(M.format),L.__typeReadable=ge.textureTypeReadable(M.type)),L}this.readRenderTargetPixels=function(M,L,W,B,H,gt,Ct,mt=0){if(!(M&&M.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=zt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ct!==void 0&&(Et=Et[Ct],Array.isArray(Et)&&(Et=Et[0])),Et){ft.bindFramebuffer(I.FRAMEBUFFER,Et);try{const Ut=M.textures[mt],Yt=Ut.format,ee=Ut.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+mt);const Pt=Ve(Ut);if(Pt.__formatReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-B&&W>=0&&W<=M.height-H&&I.readPixels(L,W,B,H,st.convert(Yt),st.convert(ee),gt)}finally{const Ut=rt!==null?zt.get(rt).__webglFramebuffer:null;ft.bindFramebuffer(I.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(M,L,W,B,H,gt,Ct,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=zt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ct!==void 0&&(Et=Et[Ct],Array.isArray(Et)&&(Et=Et[0])),Et)if(L>=0&&L<=M.width-B&&W>=0&&W<=M.height-H){ft.bindFramebuffer(I.FRAMEBUFFER,Et);const Ut=M.textures[mt],Yt=Ut.format,ee=Ut.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+mt);const Pt=Ve(Ut);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ne),I.bufferData(I.PIXEL_PACK_BUFFER,gt.byteLength,I.STREAM_READ),I.readPixels(L,W,B,H,st.convert(Yt),st.convert(ee),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Ue=rt!==null?zt.get(rt).__webglFramebuffer:null;ft.bindFramebuffer(I.FRAMEBUFFER,Ue);const ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Od(I,ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ne),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,gt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ne),I.deleteSync(ve),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,W=0){const B=Math.pow(2,-W),H=Math.floor(M.image.width*B),gt=Math.floor(M.image.height*B),Ct=L!==null?L.x:0,mt=L!==null?L.y:0;kt.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,Ct,mt,H,gt),ft.unbindTexture()},this.copyTextureToTexture=function(M,L,W=null,B=null,H=0,gt=0){let Ct,mt,Et,Ut,Yt,ee,Pt,ne,Ue;const ve=M.isCompressedTexture?M.mipmaps[gt]:M.image;if(W!==null)Ct=W.max.x-W.min.x,mt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,Ut=W.min.x,Yt=W.min.y,ee=W.isBox3?W.min.z:0;else{const oe=Math.pow(2,-H);Ct=Math.floor(ve.width*oe),mt=Math.floor(ve.height*oe),M.isDataArrayTexture?Et=ve.depth:M.isData3DTexture?Et=Math.floor(ve.depth*oe):Et=1,Ut=0,Yt=0,ee=0}B!==null?(Pt=B.x,ne=B.y,Ue=B.z):(Pt=0,ne=0,Ue=0);const _e=st.convert(L.format),Ke=st.convert(L.type);let Lt;L.isData3DTexture?(kt.setTexture3D(L,0),Lt=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(kt.setTexture2DArray(L,0),Lt=I.TEXTURE_2D_ARRAY):(kt.setTexture2D(L,0),Lt=I.TEXTURE_2D),ft.activeTexture(I.TEXTURE0),ft.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),ft.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ft.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);const sn=ft.getParameter(I.UNPACK_ROW_LENGTH),fe=ft.getParameter(I.UNPACK_IMAGE_HEIGHT),Li=ft.getParameter(I.UNPACK_SKIP_PIXELS),Ze=ft.getParameter(I.UNPACK_SKIP_ROWS),mr=ft.getParameter(I.UNPACK_SKIP_IMAGES);ft.pixelStorei(I.UNPACK_ROW_LENGTH,ve.width),ft.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve.height),ft.pixelStorei(I.UNPACK_SKIP_PIXELS,Ut),ft.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),ft.pixelStorei(I.UNPACK_SKIP_IMAGES,ee);const gi=M.isDataArrayTexture||M.isData3DTexture,Di=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){const oe=zt.get(M),We=zt.get(L),Dn=zt.get(oe.__renderTarget),we=zt.get(We.__renderTarget);ft.bindFramebuffer(I.READ_FRAMEBUFFER,Dn.__webglFramebuffer),ft.bindFramebuffer(I.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let He=0;He<Et;He++)gi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.get(M).__webglTexture,H,ee+He),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.get(L).__webglTexture,gt,Ue+He)),I.blitFramebuffer(Ut,Yt,Ut+Ct,Yt+mt,Pt,ne,Pt+Ct,ne+mt,I.DEPTH_BUFFER_BIT,I.NEAREST);ft.bindFramebuffer(I.READ_FRAMEBUFFER,null),ft.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||zt.has(M)){const oe=zt.get(M),We=zt.get(L);ft.bindFramebuffer(I.READ_FRAMEBUFFER,D),ft.bindFramebuffer(I.DRAW_FRAMEBUFFER,K);for(let Dn=0;Dn<Et;Dn++)gi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,oe.__webglTexture,H,ee+Dn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,oe.__webglTexture,H),Di?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,We.__webglTexture,gt,Ue+Dn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,We.__webglTexture,gt),H!==0?I.blitFramebuffer(Ut,Yt,Ut+Ct,Yt+mt,Pt,ne,Pt+Ct,ne+mt,I.COLOR_BUFFER_BIT,I.NEAREST):Di?I.copyTexSubImage3D(Lt,gt,Pt,ne,Ue+Dn,Ut,Yt,Ct,mt):I.copyTexSubImage2D(Lt,gt,Pt,ne,Ut,Yt,Ct,mt);ft.bindFramebuffer(I.READ_FRAMEBUFFER,null),ft.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Di?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Lt,gt,Pt,ne,Ue,Ct,mt,Et,_e,Ke,ve.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(Lt,gt,Pt,ne,Ue,Ct,mt,Et,_e,ve.data):I.texSubImage3D(Lt,gt,Pt,ne,Ue,Ct,mt,Et,_e,Ke,ve):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,gt,Pt,ne,Ct,mt,_e,Ke,ve.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,gt,Pt,ne,ve.width,ve.height,_e,ve.data):I.texSubImage2D(I.TEXTURE_2D,gt,Pt,ne,Ct,mt,_e,Ke,ve);ft.pixelStorei(I.UNPACK_ROW_LENGTH,sn),ft.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe),ft.pixelStorei(I.UNPACK_SKIP_PIXELS,Li),ft.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),ft.pixelStorei(I.UNPACK_SKIP_IMAGES,mr),gt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&I.generateMipmap(Lt),ft.unbindTexture()},this.initRenderTarget=function(M){zt.get(M).__webglFramebuffer===void 0&&kt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?kt.setTextureCube(M,0):M.isData3DTexture?kt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?kt.setTexture2DArray(M,0):kt.setTexture2D(M,0),ft.unbindTexture()},this.resetState=function(){j=0,X=0,rt=null,ft.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const Sl=42*Math.PI/180,Xi={x:1/16,z:1/(16*Math.sin(Sl))},Pn=86,xn=66;function ar(i){return 1+.045*Math.sin(3*i+1.1)+.03*Math.sin(5*i+2.3)+.02*Math.sin(7*i+.4)}function Qn(i,t){const e=i/Pn,n=t/xn;return Math.hypot(e,n)/ar(Math.atan2(n,e))}const Tn=.89,ha=.965;function ua(i,t){const e=t*ar(i);return{x:Math.cos(i)*e*Pn,z:Math.sin(i)*e*xn}}function An(i,t=180){const e=[];for(let n=0;n<t;n++){const s=n/t*Math.PI*2,r=i*ar(s);e.push({x:Math.cos(s)*r*Pn,z:Math.sin(s)*r*xn})}return e}const Ne={cx:0,cz:4,hx:58,hz:40,r:18,halfWidth:1.5},yl=(()=>{const{cx:i,cz:t,hx:e,hz:n,r:s}=Ne,r=e-s,a=n-s,o=Math.PI*s/2,l=(h,u,d,f,p)=>({kind:"line",length:p,x0:i+h,z0:t+u,tx:d,tz:f}),c=(h,u,d)=>({kind:"arc",length:o,cx:i+h,cz:t+u,a0:d});return[l(0,n,1,0,r),c(r,a,Math.PI/2),l(e,a,0,-1,a*2),c(r,-a,0),l(r,-n,-1,0,r*2),c(-r,-a,-Math.PI/2),l(-e,-a,0,1,a*2),c(-r,a,-Math.PI),l(-r,n,1,0,r)]})(),Oe=yl.reduce((i,t)=>i+t.length,0);function _n(i){let t=(i%Oe+Oe)%Oe;for(const e of yl){if(t>e.length){t-=e.length;continue}let n,s,r,a;if(e.kind==="line")n=e.x0+e.tx*t,s=e.z0+e.tz*t,r=e.tx,a=e.tz;else{const o=e.a0-t/Ne.r;n=e.cx+Math.cos(o)*Ne.r,s=e.cz+Math.sin(o)*Ne.r,r=Math.sin(o),a=-Math.cos(o)}return{x:n,z:s,tx:r,tz:a,nx:-a,nz:r}}return _n(0)}function dr(i,t){const{cx:e,cz:n,hx:s,hz:r,r:a}=Ne,o=Math.abs(i-e)-(s-a),l=Math.abs(t-n)-(r-a),c=Math.hypot(Math.max(o,0),Math.max(l,0)),h=Math.min(Math.max(o,l),0);return Math.abs(c+h-a)}function du(i,t){let e=1/0,n=0,s=0;for(const r of yl){let a,o,l;if(r.kind==="line")a=Math.min(Math.max((i-r.x0)*r.tx+(t-r.z0)*r.tz,0),r.length),o=r.x0+r.tx*a,l=r.z0+r.tz*a;else{let h=(r.a0-Math.atan2(t-r.cz,i-r.cx))%(Math.PI*2);h<0&&(h+=Math.PI*2);const u=r.length/Ne.r;h>u&&(h=h>u+(Math.PI*2-u)/2?0:u),a=h*Ne.r,o=r.cx+Math.cos(r.a0-h)*Ne.r,l=r.cz+Math.sin(r.a0-h)*Ne.r}const c=Math.hypot(i-o,t-l);c<e&&(e=c,n=s+a),s+=r.length}return n}const fu={title:{s:10,side:-1},about:{s:90,side:1},experience:{s:160,side:1},skills:{s:205,side:1},projects:{s:270,side:1},running:{s:327,side:-1},contact:{s:343,side:-1}},$x=6,Qx=3.6,jx=2.6,Ys=10;function t_(i,t=0){const e=Math.sin(t),n=Math.cos(t),s=Math.cos(t),r=-Math.sin(t),a=$x/2,o=Qx/2,l=a*Math.abs(s)+o*Math.abs(e),c=a*Math.abs(r)+o*Math.abs(n);return i.flatMap(h=>{const u=fu[h];if(!u)return[];const d=_n(u.s),f=d.nx*u.side,p=d.nz*u.side,_=a*Math.abs(s*f+r*p)+o*Math.abs(e*f+n*p),m=Ne.halfWidth+1.2+_,g=d.x+f*m,S=d.z+p*m;return[{zoneId:h,s:u.s,x:g,z:S,angle:t,facing:{x:e,z:n},door:{x:g+e*(o+1),z:S+n*(o+1)},hx:a,hz:o,minX:g-l,maxX:g+l,minZ:S-c,maxZ:S+c}]})}function e_(i,t,e){const n=t-i.x,s=e-i.z,r=Math.cos(i.angle),a=Math.sin(i.angle);return{x:n*r-s*a,z:n*a+s*r}}const ze={minX:-12,maxX:20,minZ:-8,maxZ:12},Jt={x:-32,z:-6,rx:9,rz:6},se={x:-8,z:-56,baseHalfX:34,baseHalfZ:9,layers:6,layerHeight:2.2};function Ei(i){const t=se.baseHalfX*(1-i*.16),e=se.baseHalfZ*(1-i*.12),n=se.x-i*2.4;return{cx:n,hx:t,hz:e,minX:n-t,maxX:n+t,front:se.z+e,y:i*se.layerHeight,top:(i+1)*se.layerHeight,ledge:{minX:n+t*.3,maxX:n+t*.8,front:se.z+e*.85}}}const On={x:-30,fromLayer:3,halfWidth:.56},an={x:-30,z:-45.9,rx:2.4,rz:1.3},ln={x:24,z0:57.5,z1:71,halfWidth:.8};function da(i,t,e=0){return Math.abs(i-ln.x)<ln.halfWidth+e&&t>ln.z0-e&&t<ln.z1+e}function n_(i,t,e=0){const n=(i-an.x)/(an.rx+e),s=(t-an.z)/(an.rz+e);return n*n+s*s<1}function pu(i,t,e=0){const n=(i-Jt.x)/(Jt.rx+e),s=(t-Jt.z)/(Jt.rz+e);return n*n+s*s<1}function mu(i,t,e=0){return i>ze.minX-e&&i<ze.maxX+e&&t>ze.minZ-e&&t<ze.maxZ+e}function mi(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function i_(i,t,e){return Math.abs(i-se.x)<se.baseHalfX+e&&Math.abs(t-se.z)<se.baseHalfZ+e+4}function s_(i){const t=mi(42087),e=(m,g,S)=>i.some(E=>m>E.minX-S&&m<E.maxX+S&&g>E.minZ-S&&g<E.maxZ+S||Math.hypot(m-E.door.x,g-E.door.z)<S+2),n=(m,g,S)=>Qn(m,g)>ha-.02||dr(m,g)<Ne.halfWidth+S||pu(m,g,S)||mu(m,g,S)||i_(m,g,S)||da(m,g,S+.6)||e(m,g,S),s=(m,g,S,E,y=[])=>{const T=[];let R=0;for(;T.length<m&&R<m*40;){R++;const x=E();n(x.x,x.z,g)||[...y,...T].some(b=>Math.hypot(b.x-x.x,b.z-x.z)<S)||T.push({x:x.x,z:x.z,rot:t()*Math.PI*2,scale:.92+t()*.2,variant:Math.floor(t()*3)})}return T},r=()=>({x:(t()*2-1)*Pn,z:(t()*2-1)*xn}),a=()=>{const m=t()*Math.PI*2,g=.8+t()*.12;return{x:Math.cos(m)*g*Pn*ar(m),z:Math.sin(m)*g*xn*ar(m)}},o=()=>{const m=t()*Math.PI*2,g=1.2+t()*.9;return{x:Jt.x+Math.cos(m)*Jt.rx*g,z:Jt.z+Math.sin(m)*Jt.rz*g}},l=[...s(46,1.4,3.2,a),...s(14,1.4,3,o)];l.push(...s(26,1.6,4.5,r,l));const c=s(26,1,3,r,l),h=s(70,.9,2.5,r,[...l,...c]),u=s(620,.3,.9,r),d=s(190,.4,.7,r,u),f=s(260,.6,2.2,r).map(m=>({...m,rot:0})),p=m=>Qn(m.x,m.z)<Tn-.02,_=[{x:-6,z:-2,rot:.4,scale:1,variant:0},{x:3,z:5,rot:2.2,scale:1,variant:1},{x:11,z:-3,rot:-.6,scale:1,variant:0},{x:15,z:7,rot:3.6,scale:1,variant:1},{x:-2,z:8,rot:1.5,scale:1,variant:1}];return{palms:l,rocks:c,tufts:u.filter(p),flowers:d.filter(p),bushes:h.filter(p),patches:f.filter(p),cows:_}}function ea(i,t){return dr(i,t)<Ne.halfWidth?"road":Qn(i,t)>Tn?"sand":"grass"}function or(i,t){return da(i,t,-.25)?!0:Qn(i,t)<ha&&!pu(i,t)&&!n_(i,t)}function r_(){const{minX:i,maxX:t,minZ:e,maxZ:n}=ze,s=[];for(let r=i;r<=t+.01;r+=2)s.push({x:r,z:e}),Math.abs(r-(i+t)/2)>2.5&&s.push({x:r,z:n});for(let r=e+2;r<n-.01;r+=2)s.push({x:i,z:r}),s.push({x:t,z:r});return s}function a_(){const{minX:i,maxX:t,minZ:e,maxZ:n}=ze,s=(i+t)/2,r=.15;return[{kind:"box",minX:i,maxX:t,minZ:e-r,maxZ:e+r},{kind:"box",minX:i,maxX:s-2.5,minZ:n-r,maxZ:n+r},{kind:"box",minX:s+2.5,maxX:t,minZ:n-r,maxZ:n+r},{kind:"box",minX:i-r,maxX:i+r,minZ:e,maxZ:n},{kind:"box",minX:t-r,maxX:t+r,minZ:e,maxZ:n}]}function o_(i,t){const e=[];for(const n of i)e.push({kind:"obb",x:n.x,z:n.z,hx:n.hx,hz:n.hz,angle:n.angle});for(const n of t.palms)e.push({kind:"circle",x:n.x,z:n.z,r:.35});for(const n of t.rocks)e.push({kind:"circle",x:n.x,z:n.z,r:.45*n.scale});for(const n of t.bushes)e.push({kind:"circle",x:n.x,z:n.z,r:.5*n.scale});return e.push(...a_()),e.push({kind:"box",minX:se.x-se.baseHalfX,maxX:se.x+se.baseHalfX,minZ:se.z-se.baseHalfZ,maxZ:se.z+se.baseHalfZ}),e}function l_(i){const t=[],e=Oe*i;for(let r=50;r<e-10;r+=50)t.push({s:Ys+r/i,metres:r});const n=[...Object.values(fu).map(r=>r.s),...t.map(r=>r.s)],s=[];for(let r=Ys+22;r<Ys+Oe-8;r+=34){let a=r;for(;n.some(o=>Math.abs((a-o+Oe*1.5)%Oe-Oe/2)<7);)a+=2;s.push(a%Oe)}return{posts:t,lamps:s}}const gu=4.5,c_=6.3,h_=40,u_=22,d_=5.6,f_=24,p_=.32;function Oc(i,t,e="right"){return{x:i,z:t,vx:0,vz:0,h:0,vh:0,airborne:!1,facing:e,moving:!1,sprinting:!1}}function zc(i,t,e){return Math.abs(t-i)<=e?t:i+Math.sign(t-i)*e}function xu(i,t,e,n){if(n.kind==="obb"){const h=Math.cos(n.angle),u=Math.sin(n.angle),d=i-n.x,f=t-n.z,p=xu(d*h-f*u,d*u+f*h,e,{kind:"box",minX:-n.hx,maxX:n.hx,minZ:-n.hz,maxZ:n.hz});return{x:n.x+p.x*h+p.z*u,z:n.z-p.x*u+p.z*h}}if(n.kind==="circle"){const h=i-n.x,u=t-n.z,d=Math.hypot(h,u),f=e+n.r;return d>=f?{x:i,z:t}:d<1e-6?{x:n.x+f,z:t}:{x:n.x+h/d*f,z:n.z+u/d*f}}const s=Math.min(Math.max(i,n.minX),n.maxX),r=Math.min(Math.max(t,n.minZ),n.maxZ),a=i-s,o=t-r,l=Math.hypot(a,o);if(l>=e)return{x:i,z:t};if(l>1e-6)return{x:s+a/l*e,z:r+o/l*e};const c=[{x:n.minX-e,z:t,depth:i-n.minX},{x:n.maxX+e,z:t,depth:n.maxX-i},{x:i,z:n.minZ-e,depth:t-n.minZ},{x:i,z:n.maxZ+e,depth:n.maxZ-t}];return c.sort((h,u)=>h.depth-u.depth),{x:c[0].x,z:c[0].z}}function m_(i,t,e,n,s,r,a=p_){let o={x:e,z:n};for(let l=0;l<3;l++)for(const c of s)o=xu(o.x,o.z,a,c);return r(o.x,o.z)?o:r(o.x,t)?{x:o.x,z:t}:r(i,o.z)?{x:i,z:o.z}:{x:i,z:t}}function g_(i,t,e){return i===0&&t===0?e:Math.abs(i)>=Math.abs(t)?i>0?"right":"left":t>0?"up":"down"}function x_(i,t,e,n,s,r){const a=Math.hypot(t.x,t.y),o=a>1?t.x/a:t.x,l=a>1?t.y/a:t.y,c=a>0,h=t.sprint?c_:gu,u=(n.right.x*o+n.up.x*l)*h,d=(n.right.z*o+n.up.z*l)*h,f=(c?h_:u_)*e,p=zc(i.vx,u,f),_=zc(i.vz,d,f),m=m_(i.x,i.z,i.x+p*e,i.z+_*e,s,r);let{h:g,vh:S,airborne:E}=i;t.jump&&!E&&(E=!0,S=d_),E&&(S-=f_*e,g+=S*e,g<=0&&(g=0,S=0,E=!1));let y=(m.x-i.x)/e,T=(m.z-i.z)/e;const R=Math.hypot(p,_),x=Math.hypot(y,T);if(x>R){const b=x>1e-9?R/x:0;y*=b,T*=b}return{x:m.x,z:m.z,vx:y,vz:T,h:g,vh:S,airborne:E,facing:g_(o,l,i.facing),moving:c,sprinting:c&&t.sprint}}const _u=1e3/343/gu;function __(i){if(i<.4)return null;const t=1e3/(i*_u);if(t>3540)return null;const e=Math.round(t),n=Math.floor(e/60),s=e%60;return`${n}:${String(s).padStart(2,"0")}`}const v_=[{n:[1,0,0],c:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]]},{n:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{n:[0,1,0],c:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{n:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{n:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{n:[0,0,-1],c:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]]}];function Qt(i,t=!0){const e=[],n=[],s=[],r=new qt;for(const o of i){r.setHex(o.color);for(const l of v_){if(t&&l.n[1]===-1&&o.y<=.001)continue;const c=l.c.map(([h,u,d])=>[o.x+h*o.w,o.y+u*o.h,o.z+d*o.d]);for(const h of[0,1,2,0,2,3])e.push(...c[h]),n.push(...l.n),s.push(r.r,r.g,r.b)}}const a=new vn;return a.setAttribute("position",new Ae(e,3)),a.setAttribute("normal",new Ae(n,3)),a.setAttribute("color",new Ae(s,3)),a.computeBoundingSphere(),a}function M_(i){return!i.startsWith("#")||i.length!==7?null:parseInt(i.slice(1),16)}function S_(i,t,e,n,s){const r=[];for(const[a,o,l,c,h]of i){const u=M_(h);u!==null&&r.push({x:(a-t/2)*n,y:(e-o-c)*n,z:-s/2,w:l*n,h:c*n,d:s,color:u})}return r}function C(i,t,e,n,s,r,a){return{x:i-n/2,y:t,z:e-r/2,w:n,h:s,d:r,color:a}}function cs(i,t){const e=[],n=[],s=new qt;for(const o of i){s.setHex(o.color);const l=o.x+o.w,c=o.z+o.d;for(const[h,u]of[[o.x,o.z],[o.x,c],[l,c],[o.x,o.z],[l,c],[l,o.z]])e.push(h,t,u),n.push(s.r,s.g,s.b)}const r=new vn;r.setAttribute("position",new Ae(e,3)),r.setAttribute("color",new Ae(n,3));const a=new Float32Array(e.length);for(let o=1;o<a.length;o+=3)a[o]=1;return r.setAttribute("normal",new Rn(a,3)),r.computeBoundingSphere(),r}const w={grass:7248469,grassDark:6063175,grassLight:8564066,sand:15258274,sandDark:14138248,asphalt:5130846,roadLine:15722198,roadDash:16763213,trunk:9399371,trunkDark:7755578,frond:5214026,frondDark:4093505,frondLight:6727254,coconut:7031342,rock:9406105,rockLight:10985392,rockDark:7761539,cowWhite:15919835,cowTan:15260357,cowSpot:4866104,muzzle:13215136,hoof:9075302,fence:13280379,fencePost:11109470,mountainLow:5995098,mountainMid:5599322,mountainHigh:7301760,mountainPeak:9208986,purple:5587087,purpleLight:7230888,purpleDark:4074099,gold:16763213,sunset:16742973,sunsetLight:16752732,magenta:12727915,cream:16774371,sky:8308968,ink:2302510,wood:10253394,woodDark:8346687,stone:7761284,stoneLight:9406112,canvas:14275299};function y_(){const i=[];for(let r=0;r<6;r++)i.push(C(r*.07,r*.5,0,.34,.5,.34,r%2?w.trunkDark:w.trunk));const e=3,n=6*.07;return[[1,0],[-1,0],[0,1],[0,-1],[.7,.7],[-.7,.7],[.7,-.7],[-.7,-.7]].forEach(([r,a],o)=>{const l=o%3===0?w.frondLight:o%3===1?w.frond:w.frondDark,c=[[.35,.05,.5],[.8,-.05,.46],[1.2,-.25,.4],[1.5,-.55,.32]];for(const[h,u,d]of c)i.push(C(n+r*h,e+u,a*h,d,.14,d,l))}),i.push(C(n,e+.05,0,.6,.22,.6,w.frond)),i.push(C(n+.18,e-.22,.12,.2,.2,.2,w.coconut)),i.push(C(n-.16,e-.24,-.08,.2,.2,.2,w.coconut)),i.push(C(n+.02,e-.26,-.2,.2,.2,.2,w.coconut)),i}function vu(i,t,e,n,s=2){const r=Xi.x*s,a=Xi.z*s,o=Math.floor(i.minX/r),l=Math.ceil(i.maxX/r),c=Math.floor(i.minZ/a),h=Math.ceil(i.maxZ/a),u=[];for(let d=c;d<h;d++){let f=null;for(let p=o;p<=l;p++){const _=p<l?t((p+.5)*r,(d+.5)*a):1/0,m=_<1||_<e&&(p+d&1)===0;m&&f===null&&(f=p),!m&&f!==null&&(u.push({x:f*r,z:d*a,w:(p-f)*r,d:a,color:n}),f=null)}}return u}function E_(i,t){const e=t===0?w.grassDark:w.grassLight,n=[];for(const s of i){const r=mi(Math.round(s.x*977)^Math.round(s.z*131)),a=s.scale,o=[{x:0,z:0,rx:1.4*a,rz:.62*a}];for(let h=0;h<2;h++)o.push({x:(r()-.5)*1.8*a,z:(r()-.5)*.7*a,rx:(.45+r()*.5)*a,rz:(.3+r()*.28)*a});const l=(h,u)=>Math.min(...o.map(d=>Math.hypot((h-s.x-d.x)/d.rx,(u-s.z-d.z)/d.rz))),c=2.6*a;n.push(...vu({minX:s.x-c,maxX:s.x+c,minZ:s.z-c/2,maxZ:s.z+c/2},l,1.28,e))}return n}function b_(i){const[t,e]=i===0?[w.frond,w.frondDark]:[w.frondLight,w.frond];return[C(0,0,0,1,.5,.8,e),C(-.1,.5,.05,.7,.3,.6,t),C(.38,0,.1,.5,.36,.5,t)]}function w_(i){return i===0?[C(0,0,0,.9,.42,.7,w.rock),C(.08,.42,-.04,.58,.26,.48,w.rockLight)]:i===1?[C(0,0,0,.6,.34,.6,w.rockDark),C(.42,0,.1,.4,.22,.4,w.rock)]:[C(0,0,0,1,.5,.8,w.rock),C(-.1,.5,.05,.7,.32,.55,w.rockLight),C(-.05,.82,0,.36,.18,.3,w.rockLight)]}function T_(){return[C(-.1,0,0,.07,.24,.07,w.grassLight),C(.04,0,.05,.07,.32,.07,w.grassDark),C(.13,0,-.04,.07,.2,.07,w.grassLight)]}const Bc=[16769955,16164544,16774371];function A_(i){return[C(0,0,0,.06,.2,.06,w.frondDark),C(0,.2,0,.18,.12,.18,Bc[i%Bc.length])]}function kc(i){const t=i===0?w.cowWhite:w.cowTan,e=[C(0,.5,0,1.4,.7,.72,t),C(-.72,.85,0,.1,.4,.1,t),C(-.74,.62,0,.14,.14,.14,w.cowSpot)];for(const[n,s]of[[.5,.25],[.5,-.25],[-.5,.25],[-.5,-.25]])e.push(C(n,.1,s,.18,.4,.18,t)),e.push(C(n,0,s,.2,.12,.2,w.hoof));return i===0&&(e.push(C(-.2,.9,.2,.5,.31,.34,w.cowSpot)),e.push(C(.35,.75,-.25,.34,.3,.24,w.cowSpot))),e}function Hc(i){const t=i===0?w.cowWhite:w.cowTan;return[C(.22,-.2,0,.44,.42,.46,t),C(.48,-.2,0,.12,.22,.36,w.muzzle),C(.3,.14,.3,.12,.1,.18,t),C(.3,.14,-.3,.12,.1,.18,t),C(.38,0,.17,.06,.08,.06,w.cowSpot),C(.38,0,-.17,.06,.08,.06,w.cowSpot)]}const Vr=11064552,R_=1512223,Gc=2302510,Vc=16769955,Wc=15222063,C_=[[11945274,9319212],[4157068,3101289]];function P_(){return[C(1.13,.43,.34,.06,.16,.24,16774358),C(1.13,.43,-.34,.06,.16,.24,16774358),C(-1.13,.43,.34,.06,.16,.24,16734780),C(-1.13,.43,-.34,.06,.16,.24,16734780)]}function L_(){return[C(-1.14,.41,.34,.06,.2,.28,16726826),C(-1.14,.41,-.34,.06,.2,.28,16726826)]}function D_(i,t){const e=[C(0,.22,0,2.2,.5,1.1,i),C(-.12,.72,0,1.2,.42,1,t),C(.49,.76,0,.06,.32,.86,Vr),C(-.73,.76,0,.06,.32,.86,Vr),C(-.12,.79,.5,.96,.24,.02,Vr),C(-.12,.79,-.5,.96,.24,.02,Vr),C(1.12,.24,0,.06,.16,1,Gc),C(-1.12,.24,0,.06,.16,1,Gc),C(1.12,.44,.34,.04,.14,.22,Vc),C(1.12,.44,-.34,.04,.14,.22,Vc),C(-1.12,.44,.34,.04,.14,.22,Wc),C(-1.12,.44,-.34,.04,.14,.22,Wc)];for(const[n,s]of[[.68,.5],[.68,-.5],[-.68,.5],[-.68,-.5]])e.push(C(n,0,s,.48,.46,.2,R_));return e}function N_(){const i=[];for(const o of r_())i.push(C(o.x,0,o.z,.18,.9,.18,w.fencePost));const{minX:t,maxX:e,minZ:n,maxZ:s}=ze,r=(t+e)/2,a=[[t,e,n],[t,r-2.5,s],[r+2.5,e,s]];for(const[o,l,c]of a)for(const h of[.32,.66])i.push({x:o,y:h,z:c-.05,w:l-o,h:.1,d:.1,color:w.fence});for(const o of[t,e])for(const l of[.32,.66])i.push({x:o-.05,y:l,z:n,w:.1,h:.1,d:s-n,color:w.fence});return Qt(i)}function eo(i,t,e,n,s){return[C(i,t,e,.18*n,.4*n,.18*n,w.trunkDark),C(i,t+.32*n,e,.86*n,.5*n,.74*n,s?w.frondDark:w.frond),C(i+.06*n,t+.82*n,e-.04*n,.52*n,.32*n,.46*n,s?w.frond:w.frondLight)]}function I_(){const i=[],t=mi(5143),{z:e,layers:n,layerHeight:s}=se,r=[w.mountainLow,w.mountainLow,w.mountainMid,w.mountainMid,w.mountainHigh,w.mountainPeak],a=[8824703,8824703,8362624,8362624,9407139,10854068],o=[w.grassDark,w.grassDark,6982239,6982239,w.rockLight,w.rockLight],l=[4875849,4875849,4677708,4677708,6117488,7498626],c={minX:On.x-On.halfWidth-.45,maxX:On.x+On.halfWidth+.45},h=(p,_)=>_<c.minX||p>c.maxX,u=p=>Math.round(p*16)/16;for(let p=0;p<n;p++){const _=Ei(p),m=_.ledge;i.push(C(_.cx,_.y,e,_.hx*2,s,_.hz*2,r[p])),i.push({x:m.minX,y:_.y,z:e-_.hz*.55,w:m.maxX-m.minX,h:s*1.35,d:_.hz*1.4,color:r[p]}),i.push({x:_.minX,y:_.y,z:_.front,w:_.hx*2,h:s-.01,d:.015,color:a[p]}),i.push({x:m.minX,y:_.top,z:m.front,w:m.maxX-m.minX,h:s*.35-.01,d:.015,color:a[p]});for(let g=0;g<Math.round(_.hx/3);g++){const S=u(1.4+t()*4.6),E=u(_.minX+.3+t()*(_.hx*2-S-.6)),y=_.y+.35+Math.floor(t()*(s-.75)*8)/8;h(E,E+S)&&i.push({x:E,y,z:_.front-.02,w:S,h:.1,d:.2,color:o[p]})}for(let g=0;g<Math.round(_.hx/4);g++){const S=u(.12+t()*.14),E=u(.5+t()*1),y=u(_.minX+.4+t()*(_.hx*2-.8)),T=_.y+t()*(s-E);h(y,y+S)&&i.push({x:y,y:T,z:_.front-.02,w:S,h:E,d:.05,color:l[p]})}if(p<n-1){const g=Ei(p+1),S=p<3?Math.round(_.hx/2.2):Math.round(_.hx/4);for(let E=0;E<S;E++){const y=_.minX+.6+t()*(_.hx*2-1.2),T=.8+t()*.45,R=t()<.55;if(!h(y-.5,y+.5)||y>m.minX-.6&&y<m.maxX+.6)continue;const b=y<g.minX-.6||y>g.maxX+.6?e-_.hz+.5:g.front+.45,k=b+t()*Math.max(0,_.front-.45-b);i.push(...eo(y,_.top,k,T,R))}}}const d=Ei(0);for(let p=d.minX+1.2;p<d.maxX-1;p+=2.6+t()*3){if(Math.abs(p-an.x)<an.rx+1.2)continue;const _=.7+t()*.8;i.push(C(p,0,d.front-.25,_,.35+t()*.5,.7,t()<.5?w.rock:w.rockDark))}for(const p of[-1,1])i.push(C(an.x+p*(an.rx+.5),0,d.front-.2,1,.7,.8,w.rock)),i.push(C(an.x+p*(an.rx+.45),.7,d.front-.25,.6,.3,.5,w.rockLight));const f=Ei(On.fromLayer);i.push(C(On.x,f.top,f.front-1.35,2.4,.65,.9,w.rockDark));for(let p=On.fromLayer-1;p>=0;p--){const _=Ei(p);for(const m of[-1,1])i.push(C(On.x+m*(On.halfWidth+.28),_.top,_.front-.3,.42,.28,.4,w.rock))}return i.push(C(se.x+30,0,e+2,14,2.4,10,w.mountainLow)),i.push(C(se.x+31,2.4,e+2,8,1.8,6,w.mountainMid)),i.push(...eo(se.x+26,2.4,e+6.2,1,!0)),i.push(...eo(se.x+35.5,2.4,e+6.4,.9,!1)),Qt(i)}function U_(){const{x:i,halfWidth:t,fromLayer:e}=On,n=Ei(e),s=[[n.top,n.front-.9]];for(let c=e;c>=0;c--){const h=Ei(c);s.push([h.top,h.front],[h.y,h.front])}s.push([0,Ei(0).front+.9]);const r=[],a=[];let o=0;for(let c=0;c<s.length-1;c++){const[h,u]=s[c],[d,f]=s[c+1],p=Math.hypot(d-h,f-u),_=h===d?.02:0,m=u===f?.03:0,g=o/2,S=(o+p)/2,E=[[i-t,h+_,u+m,0,g],[i+t,h+_,u+m,1,g],[i+t,d+_,f+m,1,S],[i-t,d+_,f+m,0,S]];for(const y of[0,1,2,0,2,3]){const[T,R,x,b,k]=E[y];r.push(T,R,x),a.push(b,k)}o+=p}const l=new vn;return l.setAttribute("position",new Ae(r,3)),l.setAttribute("uv",new Ae(a,2)),l.computeBoundingSphere(),l}function Ai(i){const t=new Kh;return i.forEach((e,n)=>n===0?t.moveTo(e.x,-e.z):t.lineTo(e.x,-e.z)),t.closePath(),t}function Xc(i,t,e){const n=new _a(i,1);n.rotateX(-Math.PI/2),n.translate(0,t,0);const s=n.getAttribute("position").count,r=new qt(e),a=new Float32Array(s*3);for(let o=0;o<s;o++)a.set([r.r,r.g,r.b],o*3);return n.setAttribute("color",new Rn(a,3)),n}function F_(){const i=Xc(Ai(An(1)),0,w.sand),t=Xc(Ai(An(Tn)),.004,w.grass),e=An(1),n=[];return e.forEach((s,r)=>{const a=e[(r+1)%e.length],o=Math.min(s.x,a.x),l=Math.min(s.z,a.z);n.push({x:o-.2,y:-.42,z:l-.2,w:Math.abs(a.x-s.x)+.4,h:.41,d:Math.abs(a.z-s.z)+.4,color:w.sandDark})}),[i,t,Qt(n,!1)]}function no(i,t,e,n,s=48){const r=[];for(let a=0;a<s;a++){const o=a/s*Math.PI*2;r.push({x:i+Math.cos(o)*e,z:t+Math.sin(o)*n})}return r}function O_(){const i=Ai(An(.992));return i.holes.push(new Ss(An(.983).map(t=>new At(t.x,-t.z)))),i}function z_(){const{x:i,z:t,rx:e,rz:n}=an,s=Ai(no(i,t,e,n,32));return s.holes.push(new Ss(no(i,t+.05,e-.2,n-.16,32).map(r=>new At(r.x,-r.z)))),{pool:Ai(no(i,t,e,n,32)),foam:s}}function B_(){const i=Ai(An(1.16));i.holes.push(new Ss(An(1).map(n=>new At(n.x,-n.z))));const t=Ai(An(1.016));t.holes.push(new Ss(An(.997).map(n=>new At(n.x,-n.z))));const e=[];for(let n=0;n<48;n++){const s=n/48*Math.PI*2;e.push({x:Jt.x+Math.cos(s)*Jt.rx,z:Jt.z+Math.sin(s)*Jt.rz})}return{shallow:i,foam:t,pond:Ai(e)}}const qc=Oe/Math.round(Oe/2);function k_(){const i=[],t=[],e=new qt,n=(h,u,d,f,p,_)=>{e.setHex(_);for(const m of[h,d,u,h,f,d])i.push(m.x,p,m.z),t.push(e.r,e.g,e.b)},s=.5,r=Math.ceil(Oe/s),a=Ne.halfWidth,o=.12;for(let h=0;h<r;h++){const u=h*s,d=Math.min((h+1)*s,Oe),f=_n(u),p=_n(d),_=(m,g)=>({x:m.x+m.nx*g,z:m.z+m.nz*g});n(_(f,-a),_(p,-a),_(p,a),_(f,a),.012,w.asphalt),n(_(f,a-.2-o),_(p,a-.2-o),_(p,a-.2),_(f,a-.2),.016,w.roadLine),n(_(f,-a+.2),_(p,-a+.2),_(p,-a+.2+o),_(f,-a+.2+o),.016,w.roadLine),u%qc<qc/2-.01&&n(_(f,-o/2),_(p,-o/2),_(p,o/2),_(f,o/2),.016,w.roadDash)}const l=new vn;l.setAttribute("position",new Ae(i,3)),l.setAttribute("color",new Ae(t,3));const c=new Float32Array(i.length);for(let h=1;h<c.length;h+=3)c[h]=1;return l.setAttribute("normal",new Rn(c,3)),l}const Wr=15722198,Yc=4143949;function oi(i,t,e,n,s,r,a,o=.25){const l=new qt(a);for(let c=t;c<e-1e-6;c+=o){const h=_n(c),u=_n(Math.min(c+o,e)),d=(p,_)=>({x:p.x+p.nx*_,z:p.z+p.nz*_}),f=[d(h,n),d(u,n),d(u,s),d(h,s)];for(const p of[0,2,1,0,3,2])i.positions.push(f[p].x,r,f[p].z),i.colors.push(l.r,l.g,l.b)}}function H_(i){const t=new vn;t.setAttribute("position",new Ae(i.positions,3)),t.setAttribute("color",new Ae(i.colors,3));const e=new Float32Array(i.positions.length);for(let n=1;n<e.length;n+=3)e[n]=1;return t.setAttribute("normal",new Rn(e,3)),t.computeBoundingSphere(),t}function G_(i,t){const e={positions:[],colors:[]},n=Ne.halfWidth,s=.019;for(let r=0;r<3;r++)for(let a=0;a<10;a++){const o=-n+a*2*n/10;oi(e,t-.45+r*.3,t-.15+r*.3,o,o+2*n/10,s,(r+a)%2?w.ink:Wr,.3)}for(const r of i)for(let a=0;a<6;a++){const o=-n+.25+a*.45;oi(e,r-.7,r+.7,o,o+.25,s,Wr,.35)}for(const r of[30,100,190,280])oi(e,r,r+1,-.75-.06,-.75+.06,s,Wr,.25),[.5,.36,.22,.08].forEach((o,l)=>{oi(e,r+1+l*.125,r+1.125+l*.125,-.75-o/2,-.75+o/2,s,Wr,.125)});for(const[r,a,o]of[[44,56,.55],[222,232,-.6]])oi(e,r,a,o,o+.07,s,Yc,.5),oi(e,r+.4,a-.6,o+.3,o+.37,s,Yc,.5);for(const[r,a]of[[120,-.6],[262,.5],[335,-.4]])oi(e,r,r+.4,a-.2,a+.2,s,3815239,.4),oi(e,r+.17,r+.23,a-.2,a+.2,s+.001,6117488,.06),oi(e,r,r+.4,a-.03,a+.03,s+.001,6117488,.4);return H_(e)}function V_(){const i=[],t=Ne.halfWidth;let e=0;for(let n=0;n<Oe-1e-6;e++){const s=_n(n+.125),r=Math.abs(s.tx)>.02&&Math.abs(s.tz)>.02,a=r?.25:.5,o=_n(n+a/2);for(const l of[-1,1]){const c=o.x+o.nx*l*(t+.1),h=o.z+o.nz*l*(t+.1);if(r)i.push(C(c,0,h,.2,.05,.2,Math.floor(e/2)%2?w.cream:w.magenta));else{const u=Math.abs(o.tx)>=Math.abs(o.tz);i.push(C(c,0,h,u?a+.02:.14,.05,u?.14:a+.02,e%2?w.rock:w.rockLight))}}n+=a}return Qt(i)}function W_(i,t){const e=String(i),n=(e.length*4+3)/16;return[C(0,0,0,.1,.62,.1,w.cream),C(0,.62,0,n,.5,.06,w.cream),C(0,.62,.031,n-2/16,.07,.01,w.sunset),...t(e,0,1.03,.035,w.ink)]}function X_(){return{pole:[C(0,0,0,.26,.12,.26,4867672),C(0,0,0,.12,2.5,.12,6117488),{x:0,y:2.42,z:-.05,w:1,h:.08,d:.1,color:6117488},C(1,2.32,0,.36,.14,.22,4867672)],bulb:[C(1,2.26,0,.24,.06,.14,16773572)]}}function io(i,t,e,n,s,r=0){const a=Xi.x*2,o=Xi.z*2,l=i-e,c=t+n,h=[];for(let u=Math.floor(-c*1.1*xn/o);u<=Math.ceil(c*1.1*xn/o);u++){const d=(u+.5)*o,f=d/xn,p=Pn*Math.sqrt(Math.max(0,(c*1.1)**2-f*f)),_=Pn*Math.sqrt(Math.max(0,(l*.9)**2-f*f));for(const m of[-1,1]){let g=null;const S=Math.floor(_/a),E=Math.ceil(p/a),y=T=>{if(g===null)return;const R=m>0?g:-T;h.push({x:R*a,z:u*o,w:(T-g)*a,d:o,color:s}),g=null};for(let T=S;T<=E;T++){const R=m*(T+.5)*a,x=T<E?Qn(R,d):1/0,b=x>=i&&x<=t||(x>=l&&x<i||x>t&&x<=c)&&(T+u+r+(m>0?0:1)&1)===0;b&&g===null&&(g=T),b||y(T)}y(E)}}return h}function q_(){const i=mi(77),t=[];for(let e=0;e<8;e++){const n=i()*Math.PI*2,s=.25+i()*.5,r=Jt.x+Math.cos(n)*Jt.rx*s,a=Jt.z+Math.sin(n)*Jt.rz*s,o=.35+i()*.25;t.push(...vu({minX:r-o,maxX:r+o,minZ:a-o,maxZ:a+o},(l,c)=>{const h=Math.atan2(c-a,l-r);return Math.abs(h-n)<.35?9:Math.hypot((l-r)/o,(c-a)/(o*.8))},1,e%2?w.frond:w.frondLight))}return t}function Y_(){const i=mi(77),t=[];for(let e=0;e<8;e++){const n=i()*Math.PI*2,s=.25+i()*.5;i(),!(e%3)&&t.push(C(Jt.x+Math.cos(n)*Jt.rx*s,.012,Jt.z+Math.sin(n)*Jt.rz*s,.14,.08,.14,16164544))}return t}function K_(){const i=mi(31),t=[];for(let e=0;e<7;e++){const n=-Math.PI*.95+i()*Math.PI*.9,s=Jt.x+Math.cos(n)*Jt.rx*1.02,r=Jt.z+Math.sin(n)*Jt.rz*1.02;for(let a=0;a<5;a++){const o=s+(i()-.5)*.8,l=r+(i()-.5)*.4,c=.45+i()*.35;t.push(C(o,0,l,.05,c,.05,a%2?w.frondDark:w.frond)),a%2===0&&t.push(C(o,c-.04,l,.08,.16,.08,w.trunkDark))}}return t}function Z_(){const{x:i,z0:t,z1:e,halfWidth:n}=ln,s=[];let r=0;for(let a=t;a<e-1e-6;a+=.25,r++)s.push({x:i-n,y:-.14,z:a,w:n*2-(r%5===2?.25:0),h:.16,d:.23,color:r%2?w.wood:w.woodDark});s.push({x:i-n-.04,y:-.2,z:t,w:.12,h:.12,d:e-t,color:w.trunkDark}),s.push({x:i+n-.08,y:-.2,z:t,w:.12,h:.12,d:e-t,color:w.trunkDark});for(let a=t+2.5;a<=e;a+=2)for(const o of[-1,1])s.push(C(i+o*(n-.05),-.7,a,.18,.95,.18,w.trunk));return s.push(C(i+n-.15,0,e-.3,.12,1.3,.12,w.trunkDark)),s.push(C(i-n+.35,.02,e-.6,.34,.08,.34,w.canvas)),Qt(s,!1)}function J_(){return[C(-.1,0,0,1.8,.3,.84,w.purpleDark),C(.95,.04,0,.3,.26,.56,w.purpleDark),C(1.18,.08,0,.16,.22,.28,w.purpleDark),C(-.1,.3,0,1.7,.02,.66,w.woodDark),C(-.45,.3,0,.18,.08,.66,w.wood),C(.35,.3,0,.18,.08,.66,w.wood),C(-.1,.3,.38,1.8,.08,.08,w.cream),C(-.1,.3,-.38,1.8,.08,.08,w.cream),C(-.98,.3,0,.08,.08,.84,w.cream),C(.95,.3,.26,.3,.08,.08,w.cream),C(.95,.3,-.26,.3,.08,.08,w.cream),C(1.15,.3,0,.12,.08,.3,w.cream),C(-.05,.38,.1,1.3,.04,.06,w.trunk),C(.62,.38,.1,.24,.04,.14,w.trunk)]}const Kc={0:"111101101101111",1:"010110010010111",2:"111001111100111",3:"111001011001111",4:"101101111001001",5:"111100111001111",6:"111100111101111",7:"111001010010010",8:"111101111101111",9:"111101111001111",":":"000010000010000",".":"000000000000010","-":"000000111000000","!":"010010010000010","?":"111001011000010"," ":"000000000000000",A:"010101111101101",B:"110101110101110",C:"011100100100011",D:"110101101101110",E:"111100110100111",F:"111100110100100",G:"011100101101011",H:"101101111101101",I:"111010010010111",J:"001001001101010",K:"101101110101101",L:"100100100100111",M:"101111111101101",N:"110101101101101",O:"010101101101010",P:"110101110100100",R:"110101110101101",S:"011100010001110",T:"111010010010010",U:"101101101101111",V:"101101101101010",W:"101101111111101",X:"101101010101101",Y:"101101010010010"},Gs=3,$_=5;function Sa(i){return i.length===0?0:i.length*(Gs+1)-1}function El(i,t,e,n){const s=[];return[...i.toUpperCase()].forEach((r,a)=>{const o=Kc[r]??Kc["?"];for(let l=0;l<$_;l++){let c=-1;for(let h=0;h<=Gs;h++){const u=h<Gs&&o[l*Gs+h]==="1";u&&c<0&&(c=h),!u&&c>=0&&(s.push([t+a*(Gs+1)+c,e+l,h-c,1,n]),c=-1)}}}),s}function Ks(i,t,e,n,s){for(const[r,a,o,l,c]of El(t,e,n,s))i.fillStyle=c,i.fillRect(r,a,o,l)}const so=8,Q_=Ne.halfWidth+1.5,Zc=10,Jc="roam-lap";class j_{running=!1;time=0;best=null;ghost=null;recording=[];nextCheckpoint=0;prevLapS=null;constructor(){try{const t=localStorage.getItem(Jc);if(!t)return;const e=JSON.parse(t);typeof e.best=="number"&&e.best>0&&(this.best=e.best),Array.isArray(e.ghost)&&e.ghost.every(n=>typeof n=="number")&&(this.ghost=e.ghost)}catch{}}reset(){this.running=!1,this.time=0,this.prevLapS=null}update(t,e,n,s){const r=Oe,a=dr(e,n)<Q_,o=((du(e,n)-Ys)%r+r)%r,l=this.prevLapS;if(this.prevLapS=a?o:null,this.running&&s)for(this.time+=t;this.recording.length/2<Math.floor(this.time*Zc)+1;)this.recording.push(e,n);if(!a||l===null)return null;const c=l>r-8&&o<8;if(l<8&&o>r-8)return this.running=!1,null;if(this.running&&this.nextCheckpoint<so){const d=this.nextCheckpoint*r/so;o>=d&&o<d+12&&this.nextCheckpoint++}if(!c)return null;let u=null;if(this.running&&this.nextCheckpoint>=so){const d=this.time,f=this.best===null||d<this.best;f&&(this.best=d,this.ghost=this.recording.map(p=>Math.round(p*100)/100),this.save()),u={time:d,newBest:f}}return this.running=!0,this.time=0,this.nextCheckpoint=1,this.recording=[e,n],u}ghostAt(t){const e=this.ghost;if(!e)return null;const n=t*Zc,s=Math.floor(n);if(s+1>=e.length/2)return null;const r=n-s,a=e[s*2],o=e[s*2+1],l=e[s*2+2],c=e[s*2+3];return{x:a+(l-a)*r,z:o+(c-o)*r,dx:l-a,dz:c-o}}save(){try{localStorage.setItem(Jc,JSON.stringify({best:this.best,ghost:this.ghost}))}catch{}}}function Zs(i){const t=Math.floor(i*10),e=Math.floor(t/600),n=Math.floor(t%600/10);return`${e}:${String(n).padStart(2,"0")}.${t%10}`}const Tt=1/16,bt=1/(16*Math.cos(Sl));function qi(i,t,e,n,s,r=1,a=.03){const o=t-Sa(i)*Tt*r/2;return El(i,0,0,"").map(([l,c,h,u])=>({x:o+l*Tt*r,y:e-(c+u)*bt*r,z:n,w:h*Tt*r,h:u*bt*r,d:a,color:s}))}function tv(i,t,e,n,s,r=1){const a=Xi.z*r,o=t-Sa(i)*Tt*r/2,l=e-5*a/2;return El(i,0,0,"").map(([c,h,u,d])=>({x:o+c*Tt*r,y:n,z:l+h*a,w:u*Tt*r,h:.01,d:d*a,color:s}))}function ev(i,t,e,n,s=.02){return i.flatMap(([r,a,o,l,c])=>c.startsWith("#")?[{x:t+r*Tt,y:e-(a+l)*bt,z:n,w:o*Tt,h:l*bt,d:s,color:parseInt(c.slice(1),16)}]:[])}function Mu(i,t,e,n){for(const[s,r,a,o,l]of t)i.fillStyle=l,i.fillRect(s+e,r+n,a,o)}const lr=(i,t,e,n=0)=>Math.floor(((i/t+n)%1+1)%1<.5?0:e)*bt;function nv(i,t,e,n,s,r,a=.42){const o=[],l=[[],[]],c=Math.max(2,Math.round((t-i)/a));for(let h=0;h<=c*3;h++){const u=i+(t-i)*h/(c*3),d=(u-(i+t)/2)/((t-i)/2);o.push({x:u,y:e-s*(1-d*d),z:n,w:(t-i)/(c*3)+.01,h:bt,d:.03,color:w.ink})}for(let h=1;h<c;h++){const u=i+(t-i)*h/c,d=(u-(i+t)/2)/((t-i)/2),f=e-s*(1-d*d),p=r[h%r.length];l[h%2].push({x:u-1.5*Tt,y:f-2*bt,z:n,w:3*Tt,h:2*bt,d:.03,color:p},{x:u-.5*Tt,y:f-4*bt,z:n,w:1*Tt,h:2*bt,d:.03,color:p})}return{line:o,flags:l}}const $c=i=>(t,e)=>{t.position.y=e.wake>.5&&Math.floor(e.t*5)%2===i?bt:0};function Qc(i,t,e,n,s,r,a){const o=[];for(let l=0;l<n;l++)for(let c=0;c<e;c++)o.push({x:i+c*2*Tt,y:t+(n-1-l)*2*bt,z:s,w:2*Tt,h:2*bt,d:.03,color:(l+c)%2?r:a});return o}function iv(){const i=[];for(const n of[-2.6,2.6])i.push(C(n,0,0,.92,.32,.92,w.purpleDark),C(n,.32,0,.8,.08,.8,w.purpleLight),C(n,0,0,.7,3.55,.7,w.purple),C(n,3.55,0,.84,.14,.84,w.gold),C(n,1,.36,.46,.95,.02,w.cream),C(n,1.15,.375,.34,2*bt,.01,w.sunset),C(n,1.3,.375,.34,2*bt,.01,w.magenta),C(n-.18,1.9,.36,Tt*2,bt*2,.02,w.purpleDark),C(n+.18,1.9,.36,Tt*2,bt*2,.02,w.purpleDark));i.push(C(0,2.35,0,4.6,1.1,.4,w.sunset),C(0,2.27,0,4.6,.08,.46,w.gold),C(0,3.45,0,4.6,.08,.46,w.gold),...qi("START",Tt*2,3.32-bt*2,.2,w.purpleDark,2,.02),...Qc(-2.05,2.55,4,3,.2,w.ink,w.cream),...Qc(2.05-8*Tt,2.55,4,3,.2,w.ink,w.cream),C(0,3.53,0,1.85,.72,.36,w.ink),C(0,3.53,0,1.95,.06,.42,w.purpleDark));for(let n=0;n<12;n++)i.push({x:-3+n*.5,y:0,z:1.6,w:.5,h:.02,d:.25,color:n%2?w.ink:w.cream}),i.push({x:-3+n*.5,y:0,z:1.85,w:.5,h:.02,d:.25,color:n%2?w.cream:w.ink});i.push({x:-2.2,y:0,z:1.05,w:4.4,h:.015,d:.45,color:w.ink});for(let n=0;n<9;n++)i.push(C(-2+n*.5,.015,1.27,Tt*2,.01,.06,w.gold));const t=nv(-2.25,2.25,2.2,.22,.3,[w.gold,w.magenta,w.sky,w.cream]);i.push(...t.line);const e=n=>{const s=[],r=[[-.2,.62,w.magenta],[.18,.72,w.sky],[0,.98,w.gold]];for(const[a,o,l]of r)s.push(C(a,o,0,.36,.38,.3,l)),s.push(C(a,o+.05,0,.44,.26,.24,l)),s.push(C(a-.09,o+.27,.15,Tt*2,bt*2,.01,w.cream)),s.push(C(a,o-.06,0,Tt*2,.06,Tt*2,l)),s.push(C(a*.5,0,0,Tt,o-.06,Tt,w.ink));return{boxes:s,at:[n*2.6,3.69,0],animate:(a,o)=>a.position.y=3.69+lr(o.t,1.6,1,n>0?.5:0)}};return{boxes:i,parts:[{boxes:qi("START",0,3.32,.21,w.cream,2,.03),glow:!0,animate:(n,s)=>{n.material.uniforms.uBoost.value=s.wake>.9&&Math.floor(s.t*2.5)%2?.82:1}},{boxes:t.flags[0],animate:$c(0)},{boxes:t.flags[1],animate:$c(1)},e(-1),e(1)],screens:[{cols:25,rows:7,at:[0,3.53+.36,.19],fps:10,draw:(n,s)=>{n.fillStyle="#23222E",n.fillRect(0,0,25,7);let r,a=s.wake>.5?"#FFE3A3":"#FFC94D";if(s.lap!==null)r=Zs(s.lap);else if(s.best!==null)r=Math.floor(s.t/1.5)%2===0||s.still?"BEST":Zs(s.best),a="#7EC8E8";else{const o=Math.floor(s.elapsed),l=Math.floor(s.t*2)%2===0||s.still?":":" ";r=`${String(Math.floor(o/60)%100).padStart(2,"0")}${l}${String(o%60).padStart(2,"0")}`}Ks(n,r,Math.floor((25-Sa(r))/2),1,a)}}],shadows:[{x:-2.6,z:0,w:.95,d:.95,lift:.5},{x:2.6,z:0,w:.95,d:.95,lift:.5},{x:0,z:0,w:4.6,d:.4,lift:2.9}],height:4.6}}const sv=[...sl,...dh],rv=[...sl,...fh];function av(){const i=[C(0,0,-.55,4.4,3,2.2,w.purple),C(0,3,-.55,4.5,.1,2.3,w.purpleDark),C(0,.84,.57,2.95,2.18,.04,w.ink),C(0,0,.85,4.6,.85,.6,w.purpleLight),C(0,.85,.85,4.7,.08,.68,w.gold),C(0,.2,1.16,4.2,.4,.02,w.purpleDark),C(-1.85,1.3,.56,.6,.95,.02,w.cream),C(-1.85,1.4,.575,.48,.5,.01,w.sunsetLight),C(-1.85,1.4,.58,.48,.16,.01,w.magenta),C(-1.85,1.75,.58,.2,.12,.01,w.gold),C(1.85,1.3,.56,.6,.95,.02,w.cream),C(1.85,1.4,.575,.48,.5,.01,w.sky),C(1.85,1.4,.58,.48,.2,.01,w.mountainLow),C(1.8,1.6,.585,.2,.18,.01,w.mountainHigh),C(1.7,0,1.45,.1,.55,.1,w.ink),C(1.7,.18,1.45,.34,.05,.34,w.ink),C(1.7,.55,1.45,.46,.1,.46,w.magenta)];for(let e=0;e<8;e++){const n=e%2?w.cream:w.sunset;i.push({x:-2.4+e*.6,y:3,z:-1.75,w:.6,h:.16,d:2.4,color:n})}i.push({x:-2.45,y:3,z:.62,w:4.9,h:.16,d:.04,color:w.gold});const t=e=>{const n=[];for(let s=e;s<9;s+=2)n.push(C(-2.4+s*.6,3.04,.68,Tt*2,bt*2,Tt*2,16769955));return{boxes:n,glow:!0,duskOnly:!0,animate:(s,r)=>s.visible=r.lit&&(r.wake<.5||Math.floor(r.t*3)%2===e)}};return{boxes:i,parts:[t(0),t(1)],screens:[{cols:44,rows:24,at:[0,.9+24*bt/2,.6],fps:10,draw:(e,n)=>{if(e.fillStyle="#140B2E",e.fillRect(0,0,44,24),n.wake<.12){Math.floor(n.t*1.5)%2===0&&(e.fillStyle="#FFC94D",e.fillRect(3,18,3,3));return}e.fillStyle="#FFC94D",e.fillRect(0,0,44,1),e.fillRect(0,23,44,1),e.fillRect(0,0,1,24),e.fillRect(43,0,1,24),e.fillStyle="#2B1B57",e.fillRect(2,2,17,20);const s=n.wake>.95&&Math.floor(n.t/.45)%2===1;Mu(e,s?rv:sv,2,2),Ks(e,"JUAN",22,3,"#FFF4E3"),e.fillStyle="#6E55A8",e.fillRect(22,9,20,1),Ks(e,"42087",22,11,"#FFC94D"),Ks(e,"P1",22,17,"#C2366B"),Math.floor(n.t*2)%2===0&&(e.fillStyle="#FFF4E3",e.fillRect(31,17,3,5));const r=Math.min(24,Math.ceil((n.wake-.12)/.6*24));r<24&&(e.fillStyle="#140B2E",e.fillRect(0,r,44,24-r),e.fillStyle="#7EC8E8",e.fillRect(0,r,44,1))}}],shadows:[{x:.3,z:-.3,w:4.6,d:2.6}],height:3.5}}function ov(){const i=[];for(const o of[-2.4,2.4])i.push(C(o,0,0,.35,2.95,.35,w.trunk),C(o,0,0,.45,.25,.45,w.trunkDark),C(o-.09,.4,.18,Tt,2.2,.01,w.trunkDark));i.push(C(0,.85,0,5.2,1.85,.26,w.wood),C(0,.85,.02,5.4,.12,.3,w.woodDark),C(0,2.62,.02,5.4,.12,.3,w.woodDark));for(const o of[1.3,1.75,2.2])i.push(C(0,o,.135,5.2,bt,.01,w.woodDark));i.push(C(0,2.9,0,5.9,.16,1,w.purpleDark),C(0,3.06,-.05,5.6,.16,.8,w.purple),C(0,3.22,-.1,5.3,.1,.5,w.purpleLight));for(let o=0;o<14;o++)i.push(C(-2.75+o*.42,2.9,.49,Tt,.16,.02,w.purple));[[-1.6,1.4,.8,.9,w.cream],[-.5,1.15,.8,1,w.cream],[.6,1.45,.9,.8,w.cream],[1.65,1.1,.7,.9,w.sunsetLight]].forEach(([o,l,c,h,u],d)=>{i.push(C(o,l,.16,c,h,.04,u)),i.push(C(o,l+h-bt*2,.185,Tt*2,bt*2,.02,d%2?w.gold:w.magenta));for(let _=0;_<3;_++){const m=c*(.7-(_+d)%3*.15);i.push({x:o-c/2+.1,y:l+h-.28-_*bt*3,z:.18,w:m,h:bt,d:.01,color:w.ink})}const f=o+c/2-.22,p=l+.12;i.push({x:f,y:p+bt,z:.18,w:Tt,h:bt,d:.012,color:w.gold},{x:f+Tt,y:p,z:.18,w:Tt,h:bt,d:.012,color:w.gold},{x:f+2*Tt,y:p+bt,z:.18,w:Tt,h:bt,d:.012,color:w.gold},{x:f+3*Tt,y:p+2*bt,z:.18,w:Tt,h:bt,d:.012,color:w.gold})}),i.push(C(-2.85,0,.95,.6,.55,.55,w.wood),C(-2.85,.27,1.23,.6,bt,.01,w.woodDark),C(-2.85,0,1.23,Tt*2,.55,.01,w.woodDark),C(2.85,0,1,.5,.7,.5,w.trunk),C(2.85,.12,1,.56,.08,.56,w.trunkDark),C(2.85,.5,1,.56,.08,.56,w.trunkDark),C(2.85,.7,1,.42,.02,.42,w.woodDark));const e=(o,l)=>o.position.y=3.3+(l.wake>.5?lr(l.t,.5,2):lr(l.t,2.4,1)),n={boxes:[C(0,0,0,.62,1.1,.1,w.purpleDark),C(0,-.25,0,Tt*2,.25,Tt*2,w.ink)],at:[0,3.3,0],animate:e},s={boxes:[{x:-2*Tt,y:1.1-6*bt,z:.05,w:4*Tt,h:5*bt,d:.03,color:w.gold},{x:-1*Tt,y:1.1-8*bt,z:.05,w:2*Tt,h:2*bt,d:.03,color:w.gold},{x:-2*Tt,y:1.1-11*bt,z:.05,w:4*Tt,h:2*bt,d:.03,color:w.gold}],glow:!0,at:[0,3.3,0],animate:e},r={boxes:[C(0,-.12,0,Tt,.12,Tt,w.ink),C(0,-.18,0,.3,.06,.3,w.ink),C(0,-.48,0,.3,.06,.3,w.ink),...[-1,1].flatMap(o=>[-1,1].map(l=>C(o*.12,-.42,l*.12,Tt,.24,Tt,w.ink)))],at:[2,2.9,.45],animate:(o,l)=>o.rotation.z=l.wake>.5?[0,.12,0,-.12][Math.floor(l.t*3)%4]:0},a={boxes:[C(0,-.41,0,.16,.2,.16,16763213),C(0,-.36,0,Tt*2,.1,.17,16774371)],glow:!0,duskOnly:!0,at:[2,2.9,.45],animate:(o,l)=>{o.visible=l.lit,o.rotation.z=l.wake>.5?[0,.12,0,-.12][Math.floor(l.t*3)%4]:0}};return{boxes:i,parts:[n,s,r,a],pools:[{x:2,z:.85,rx:.95,rz:.65,color:16763213}],shadows:[{x:.35,z:.3,w:5.6,d:.6}],height:4.3}}function lv(){const i=[C(0,.78,.6,4.6,.16,1.3,w.cream),C(0,.3,1.24,4.6,.48,.03,w.cream),C(0,.3,1.255,4.6,bt*2,.02,w.sunset),C(-2.1,0,.6,.14,.78,1.1,w.canvas),C(2.1,0,.6,.14,.78,1.1,w.canvas),C(0,0,-.9,1.6,.9,.9,w.wood),C(0,.9,-.9,1.7,.12,1,w.woodDark),C(-.2,1.02,-.9,.9,.42,.6,w.gold),...ev(Ru,-.2-3*Tt,1.4,-.59),C(1.5,.94,.65,.5,.6,.5,w.sky),C(1.5,1.54,.65,.2,.12,.2,w.cream),C(1.5,1.1,.92,.1,.08,.06,w.ink),C(2.75,0,1.45,.45,.6,.45,w.frondDark),C(2.75,.6,1.45,.5,.06,.5,w.ink),C(2.68,.66,1.4,Tt*3,bt*2,Tt*3,w.cream),C(2.85,.66,1.5,Tt*2,bt*2,Tt*2,w.cream)],t=[w.cream,w.cream,w.cream];for(let s=0;s<3;s++)for(let r=0;r<3-s;r++){const a=-1.95+r*.24+s*.12,o=.94+s*.22;i.push(C(a,o,.5,.18,.2,.18,t[s])),i.push(C(a,o+.2-bt,.5,.2,bt,.2,w.sky))}[w.gold,w.sunset,w.sky,w.magenta].forEach((s,r)=>{i.push(C(-1+r*.3,.94,.75,.2,.24,.2,w.cream)),i.push(C(-1+r*.3,1.16,.75,.16,bt,.16,s))});for(let s=0;s<4;s++){const r=.55+s*.1;i.push(C(r,.94,.55,.08,.08,.32,16767050),C(r,1,.36,.08,.08,.1,16767050),C(r,1,.74,.08,.08,.1,16767050),C(r,1.06,.31,.08,.06,.06,7031342))}for(const[s,r]of[[-2.5,-1.5],[2.5,-1.5],[-2.5,1.5],[2.5,1.5]])i.push(C(s,0,r,.14,2.6,.14,w.canvas)),i.push(C(s,0,r,.24,.08,.24,w.ink));for(let s=0;s<6;s++)i.push({x:-3+s,y:2.6,z:-1.8,w:1,h:.3,d:3.6,color:s%2?w.cream:w.sunset});i.push(C(0,2.9,0,6.2,.14,3.8,w.sunsetLight)),i.push(...tv("AID",0,-.2,3.04,w.cream,3));for(let s=0;s<12;s++)i.push({x:-3+s*.5+.1,y:2.5,z:1.76,w:.3,h:.1,d:.04,color:s%2?w.cream:w.sunset});const e={boxes:[C(0,0,0,.2,.24,.2,w.cream),C(0,.22,0,.16,bt,.16,w.sky)],at:[.2,.94,1.05],animate:(s,r)=>{s.visible=r.since>5,s.position.y=.94+(r.wake>.5?lr(r.t,.6,2):0)}},n={boxes:[C(0,0,0,Tt*2,bt*2,Tt*2,w.sky)],at:[1.5,1,.95],animate:(s,r)=>{const a=r.t*1.4%1;s.visible=r.wake>.5,s.position.y=1.05-Math.floor(a*4)*bt*2}};return{boxes:i,parts:[e,n],shadows:[{x:.3,z:.35,w:5.4,d:3.3}],height:3.2}}const ro="#140B2E";function cv(){const i=[],t=[],e=[];return[-1.25,1.25].forEach((n,s)=>{i.push(C(n,0,-.1,1.6,1,1.2,w.purple),C(n,1,-.2,1.6,1.9,1,w.purple),C(n,1,.45,1.6,.22,.66,w.purpleLight),C(n,2.9,-.15,1.7,.62,1.1,w.purpleDark),C(n,3.52,-.15,1.75,.08,1.15,w.gold),C(n,1.22,.31,1.36,1.38,.03,w.ink),C(n+.05,1.22,.62,.14,.06,.14,w.gold),C(n+.3,1.22,.6,.14,.06,.14,w.magenta),C(n+.55,1.22,.58,.14,.06,.14,w.sky),C(n,.25,.51,.7,.5,.02,w.purpleDark),...[0,1,2,3].map(r=>C(n-.62+r*.08,.1+r*.1,.505,.08,.1,.02,r%2?w.sunset:w.gold))),t.push({boxes:[C(0,0,0,1.5,.56,.03,s?w.magenta:w.sky),...qi(s?"SELECT":"LEVEL",0,.56-bt*1,.03,w.cream,1,.02)],glow:!0,at:[n,2.92,.42]}),t.push({boxes:[C(-.12,0,0,Tt*2,bt*3,.02,16734780),C(.12,0,0,Tt*2,bt*3,.02,16734780)],glow:!0,at:[n,.45,.53]});for(const r of[0,1]){const a=[];for(let o=r;o<8;o+=2)a.push(C(-.75+o*.214,0,0,Tt*2,bt*2,.03,16769955));t.push({boxes:a,glow:!0,at:[n,2.88,.44],animate:(o,l)=>o.visible=l.wake<.5||Math.floor(l.t*6)%2===r})}t.push({boxes:[C(0,0,0,.18,.04,.18,w.ink),C(0,0,0,Tt*2,.22,Tt*2,w.ink),C(0,.2,0,.12,.1,.12,15222063)],at:[n-.42,1.22,.55],animate:(r,a)=>r.rotation.z=a.wake>.5?[0,.35,0,-.35][Math.floor(a.t*4+s)%4]:0}),e.push({cols:18,rows:13,at:[n,1.22+.04+13*bt/2+.08,.335],fps:12,draw:(r,a)=>{if(r.fillStyle=ro,r.fillRect(0,0,18,13),a.wake<.2)Math.floor(a.t*1.2+s*.5)%2===0&&Ks(r,"COIN",2,4,"#FFC94D");else{const o=a.t/1.8+s*.5,l=Math.floor(o)%Cs.length;Mu(r,Cs[(l+s*2)%Cs.length],0,-6),r.fillStyle=ro,r.fillRect(0,11,18,2);for(let h=0;h<Cs.length;h++)r.fillStyle=h===(l+s*2)%Cs.length?"#FFC94D":"#3E2A73",r.fillRect(4+h*2,11,1,1);const c=o%1;if(c<.15&&!a.still){const h=Math.ceil(c/.15*11);r.fillStyle=ro,r.fillRect(0,h,18,11-h),r.fillStyle="#FFF4E3",r.fillRect(0,h,18,1)}}r.fillStyle="rgba(0,0,0,0.22)";for(let o=1;o<13;o+=2)r.fillRect(0,o,18,1)}})}),{boxes:i,parts:t,screens:e,floor:Array.from({length:48},(n,s)=>{const r=s%12,a=Math.floor(s/12);return{x:-2.4+r*.4,z:.85+a*.24,w:.4,d:.24,color:(r+a)%2?w.purpleDark:8006748}}),shadows:[{x:.3,z:-.1,w:4.4,d:1.5}],height:3.5}}function hv(){const i=S_(Au.slice(0,7),11,11,.17,.5),t=[C(0,0,0,2.8,.3,2.8,w.stone),C(0,.3,0,2.3,.3,2.3,w.stoneLight),C(0,.6,0,1.8,.22,1.8,w.stone),C(0,.3,1.155,2.3,bt,.01,w.gold)];for(const o of[-2.4,2.4])t.push(C(o,0,.6,.42,.2,.42,w.stone),C(o,0,.6,.3,1.7,.3,w.stone),C(o-.08,.3,.755,Tt,1.2,.01,w.stoneLight),C(o,1.7,.6,.55,.18,.55,w.ink),C(o,1.88,.6,.62,.06,.62,w.gold));const e=[];["010111010","101010101","111010010","100111001","011010110"].forEach((o,l)=>{const c=-.85+l*.4;for(let h=0;h<9;h++)o[h]==="1"&&e.push({x:c+h%3*Tt,y:.5-Math.floor(h/3)*bt,z:0,w:Tt,h:bt,d:.01,color:8308968})});const s=(o,l)=>(c,h)=>{const u=h.wake>.5?[o,1,l,1]:[o,1,1,1];c.material.uniforms.uBoost.value=u[Math.floor(h.t/(h.wake>.5?.15:.26))%4]},r=[{boxes:i,glow:!0,at:[0,1.1,0],animate:(o,l)=>{o.rotation.y=l.t*(.9+l.wake*1.2),o.position.y=1.1+lr(l.t,1.1,1)+l.wake*bt*2,s(.92,1.1)(o,l)}},{boxes:e,glow:!0,at:[0,0,1.16],animate:s(.8,1.25)}];for(const o of[-2.4,2.4])[[C(0,0,0,.36,.2,.36,16742973),C(0,.2,0,.24,.2,.24,16763213),C(0,.4,0,.1,.12,.1,16774371)],[C(0,0,0,.36,.24,.36,16742973),C(.04,.24,0,.2,.16,.2,16763213),C(-.04,.4,0,.1,.08,.1,16763213)],[C(0,0,0,.36,.18,.36,16742973),C(-.03,.18,0,.24,.24,.24,16763213),C(.03,.42,0,.1,.14,.1,16774371)]].forEach((c,h)=>r.push({boxes:c,glow:!0,at:[o,1.94,.6],animate:(u,d)=>u.visible=Math.floor(d.t*7+(o>0?1:0))%3===h}));for(let o=0;o<7;o++){const l=o/7*Math.PI*2;r.push({boxes:[C(0,0,0,Tt*2,bt*2,Tt*2,o%2?16774371:16769955)],glow:!0,at:[Math.cos(l)*.7,1.2,Math.sin(l)*.5],animate:(c,h)=>{const u=(h.t*.5+o/7)%1;c.visible=o<2||h.wake>.5,c.position.y=1+Math.floor(u*20)*bt,c.position.x=Math.cos(l)*.7+(Math.floor(u*6)%2?Tt:0)}})}const a=[];for(let o=-6;o<6;o++)for(let l=-4;l<5;l++){const c=o*.5+.25,h=l*.42+.21;Math.hypot(c/3.1,h/2)>1||Math.abs(c)<1.4&&Math.abs(h)<1.4||a.push({x:c-.23,z:h-.19,w:.46,d:.38,color:(o+l)%2?w.stone:w.stoneLight})}return{boxes:t,parts:r,floor:a,pools:[{x:0,z:.2,rx:2.4,rz:2,color:w.gold},{x:-2.4,z:1,rx:.8,rz:.55,color:w.sunsetLight},{x:2.4,z:1,rx:.8,rz:.55,color:w.sunsetLight}],shadows:[{x:.3,z:.25,w:3,d:3}],height:3.2}}function Su(){return{boxes:[C(0,0,0,1.2,3,.8,w.purple),C(0,2,.42,2.6,.9,.12,w.ink),...qi("0:00",0,2.75,.48,w.gold,2,.03)],height:3.2}}const uv={title:iv,about:av,experience:ov,skills:lv,projects:cv,contact:hv,running:Su};function dv(i){return(uv[i]??Su)()}const hi={dusk:{sun:16761510,sunI:.42,shade:10322621,shadeI:.66,sea:8284822,seaDeep:6113914,foam:15257558,sprite:15785190,lamps:!0},dawn:{sun:16773340,sunI:.48,shade:11977956,shadeI:.7,sea:10272994,seaDeep:8299727,foam:16186367,sprite:16777215,lamps:!1},night:{sun:7305432,sunI:.22,shade:4867984,shadeI:.55,sea:2894428,seaDeep:1907525,foam:9342152,sprite:11118300,lamps:!0},noon:{sun:16777215,sunI:.52,shade:13228784,shadeI:.72,sea:7320552,seaDeep:5216214,foam:16777215,sprite:16777215,lamps:!1}},fv={"dusk-to-dawn":[hi.dusk,hi.night,hi.dawn],"dawn-to-dusk":[hi.dawn,hi.noon,hi.dusk]};function on(i,t,e){const n=i>>16&255,s=i>>8&255,r=i&255,a=t>>16&255,o=t>>8&255,l=t&255,c=Math.round(n+(a-n)*e),h=Math.round(s+(o-s)*e),u=Math.round(r+(l-r)*e);return c<<16|h<<8|u}function jc(i,t,e){return{sun:on(i.sun,t.sun,e),sunI:i.sunI+(t.sunI-i.sunI)*e,shade:on(i.shade,t.shade,e),shadeI:i.shadeI+(t.shadeI-i.shadeI)*e,sea:on(i.sea,t.sea,e),seaDeep:on(i.seaDeep,t.seaDeep,e),foam:on(i.foam,t.foam,e),sprite:on(i.sprite,t.sprite,e),lamps:e<.5?i.lamps:t.lamps}}const th=i=>i*i*(3-2*i);function pv(i,t,e){const[n,s,r]=fv[i],a=Math.min(Math.max(t,0),1);return a<e?jc(n,s,th(a/e)):jc(s,r,th((a-e)/(1-e)))}function eh(i){const t=i===2?[0,255]:[0,128,255],e=new Uint8Array(t.length*4);t.forEach((s,r)=>e.set([s,s,s,255],r*4));const n=new xa(e,t.length,1,wn);return n.minFilter=Se,n.magFilter=Se,n.generateMipmaps=!1,n.needsUpdate=!0,n}const mv=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 p = vec4(position, 1.0);
    #ifdef USE_INSTANCING
      p = instanceMatrix * p;
    #endif
    gl_Position = projectionMatrix * modelViewMatrix * p;
  }
`,gv=`
  uniform vec3 uColor;
  uniform float uDensity;
  uniform float uShape;
  uniform float uFalloff;
  varying vec2 vUv;
  const float BAYER[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
  void main() {
    vec2 d = vUv - 0.5;
    float r;
    if (uShape > 2.5) {
      r = length(d) * 2.0;
      if (r < 0.7) discard;
    } else if (uShape > 1.5) {
      r = max(abs(d.x), abs(d.y)) * 2.0;
    } else if (uShape > 0.5) {
      float hw = 0.12 + 0.38 * vUv.x;
      if (abs(d.y) > hw) discard;
      r = max(abs(d.y) / hw * 0.55, vUv.x);
    } else {
      r = length(d) * 2.0;
    }
    if (r > 1.0) discard;
    ivec2 q = ivec2(mod(floor(gl_FragCoord.xy), 4.0));
    float threshold = (BAYER[q.x + q.y * 4] + 0.5) / 16.0;
    if (threshold > uDensity * mix(1.0, 1.0 - r * r, uFalloff)) discard;
    gl_FragColor = vec4(uColor, 1.0);
  }
`,xv={disc:0,cone:1,rect:2,ring:3};function Bn(i,t,e={}){return new Cn({uniforms:{uColor:{value:new qt(i)},uDensity:{value:t},uShape:{value:xv[e.shape??"disc"]},uFalloff:{value:e.falloff?1:0}},vertexShader:mv,fragmentShader:gv,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}const _v=`
  varying vec3 vColor;
  varying float vShade;
  void main() {
    vColor = color;
    vec3 n = normalize(mat3(modelMatrix) * normal);
    vShade = n.y > 0.5 ? 1.0 : (n.z > 0.5 ? 0.9 : 0.78);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,vv=`
  uniform float uBoost;
  varying vec3 vColor;
  varying float vShade;
  void main() {
    gl_FragColor = vec4(min(vColor * vShade * uBoost, vec3(1.0)), 1.0);
  }
`;function nl(){return new Cn({uniforms:{uBoost:{value:1}},vertexShader:_v,fragmentShader:vv,vertexColors:!0})}const li=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),hs=(i,t)=>Math.atan2(-t,i);function nh(i,t,e){let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+Math.max(-e,Math.min(e,n))}function ih(i){const t=(Sa(i)+4)/16,e=9*bt;return[C(0,0,0,t,e,.04,w.ink),C(0,-2*bt,0,2/16,2*bt,.04,w.ink),...qi(i,0,e-2*bt,.02,w.cream,1,.03)]}class Mv{mesh;items=[];m=new ce;c=new qt;max;constructor(t,e=160){this.max=e,this.mesh=new Ti(new Pi(1,1,1),new zn,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.setColorAt(0,this.c.setHex(16777215)),t.add(this.mesh)}spawn(t){this.items.length>=this.max&&this.items.shift(),this.items.push({...t,life:0})}update(t){let e=0;for(let n=this.items.length-1;n>=0;n--){const s=this.items[n];if(s.life+=t,s.life>=s.max){this.items.splice(n,1);continue}s.vy-=s.gravity*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<0&&(s.y=0,s.vy=0,s.vx*=.4,s.vz*=.4);const r=s.life/s.max<.6?s.size:s.size/2;this.m.makeScale(r,r,r),this.m.setPosition(s.x,s.y+r/2,s.z),this.mesh.setMatrixAt(e,this.m),this.mesh.setColorAt(e,this.c.setHex(s.color)),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}setTint(t){this.mesh.material.color.setHex(t)}}function Sv(i,t,e){const n=e_(i,t,e);return Math.abs(n.x)<2.3&&n.z>i.hz&&n.z<i.hz+1.6}class yv{scene;o;rand=mi(1206);glow=nl();particles;cows=[];flocks=[];crabs=[];fish;ripples;rippleMat=Bn(16186367,.6,{shape:"ring"});jump=null;nextJump=4;fireflies;fireflyHomes=[];butterflies=[];footprints;footprintMat;prints=[];lastPrint=null;printSide=1;lastDust=0;cup;takenAt=-1/0;yaw=0;carryUntil=-1/0;tossed=!0;m=new ce;constructor(t,e){this.scene=t,this.o=e,this.particles=new Mv(t),this.buildHerd(),this.buildBirds(),this.buildCrabs(),this.fish=new Ft(Qt([C(0,0,0,.32,.12,.1,16747082),C(.06,.08,0,.12,.04,.06,16774371),C(-.2,0,0,.08,.14,.04,16742973)]),this.o.occluder),this.fish.visible=!1,t.add(this.fish),this.ripples=[0,1].map(()=>{const o=new Ft(this.o.flatDisc(),this.rippleMat);return o.visible=!1,o.renderOrder=1,t.add(o),o}),this.fireflies=new Ti(new Pi(1,1,1),new zn({color:16773536}),48),this.fireflies.frustumCulled=!1;const n=[...this.o.bushes];for(let o=0;o<48;o++){const l=o%4===0?{x:Jt.x+(this.rand()-.5)*Jt.rx*2.4,z:Jt.z+(this.rand()-.5)*Jt.rz*2.4}:n[Math.floor(this.rand()*n.length)];l&&this.fireflyHomes.push({x:l.x+(this.rand()-.5)*1.6,z:l.z+(this.rand()-.5)*1.2,phase:this.rand()*10})}t.add(this.fireflies);const s=[16164544,16769955,8308968,16774371];[...this.o.flowers].sort(()=>this.rand()-.5).slice(0,16).forEach((o,l)=>{const c=s[l%s.length],h=new gn,u=new Ft(Qt([C(0,0,.1,.19,.02,.16,c),C(0,0,-.1,.19,.02,.16,c),C(0,-.01,0,.14,.04,.04,w.ink)]),this.o.occluder),d=new Ft(Qt([C(0,0,0,.16,.19,.03,c),C(0,-.01,0,.14,.04,.04,w.ink)]),this.o.occluder);h.add(u,d),t.add(h),this.butterflies.push({group:h,open:u,shut:d,home:{x:o.x,z:o.z},phase:this.rand()*10})}),this.footprintMat=new jr({color:12887151,gradientMap:this.o.gradient});const a=new Kn(1,1);a.rotateX(-Math.PI/2),this.footprints=new Ti(a,this.footprintMat,80),this.footprints.count=0,this.footprints.frustumCulled=!1,t.add(this.footprints),this.cup=new Ft(Qt([C(0,0,0,.18,.22,.18,w.cream),C(0,.2,0,.14,bt,.14,w.sky)]),this.o.occluder),this.cup.visible=!1,t.add(this.cup)}pointables(){return[...this.cows.map((t,e)=>({obj:t.group,caption:()=>t.watching?"A COW. SHE'S WATCHING YOU.":"A COW. SHE'S BUSY.",click:()=>this.moo(e)})),...this.crabs.map(t=>({obj:t.group,caption:()=>"A CRAB, SIDEWAYS.",click:()=>{t.state==="hidden"||this.o.reduceMotion||(t.state="flee",t.until=performance.now()/1e3+.6)}})),...this.flocks.flatMap(t=>t.birds.map(e=>({obj:e.group,caption:()=>"A LITTLE BROWN BIRD."})))]}moo(t){const e=this.cows[t],n=performance.now()/1e3;n-e.lastMoo<.8||(e.lastMoo=n,e.mooUntil=n+1.3,this.o.sfx("moo",e),this.o.event({kind:"moo",cow:t}))}sinceCup(t){return t-this.takenAt}setYaw(t){this.yaw=t;for(const e of this.cows)e.bang.rotation.y=t,e.moo.rotation.y=t}setGradient(t){this.footprintMat.gradientMap=t,this.footprintMat.needsUpdate=!0}setSky(t){this.particles.setTint(t.sprite),this.rippleMat.uniforms.uColor.value.setHex(t.foam)}update(t){if(this.updateHerd(t),this.updateCup(t),this.updateFootprints(t),this.o.reduceMotion){this.updateFireflies(t,!0),this.updateButterflies(t,!0);return}this.updateDust(t),this.updateBirds(t),this.updateCrabs(t),this.updateFish(t),this.updateFireflies(t,!1),this.updateButterflies(t,!1),this.particles.update(t.dt)}buildHerd(){const t=[Qt(kc(0)),Qt(kc(1))],e=[Qt(Hc(0)),Qt(Hc(1))],n=Qt(ih("!")),s=Qt(ih("MOO"));this.o.cows.forEach((r,a)=>{const o=new gn,l=new Ft(t[r.variant],this.o.occluder),c=new Ft(e[r.variant],this.o.occluder);c.position.set(.68,1,0),c.rotation.z=-.55;const h=new Ft(this.o.flatDisc(),this.o.shadow);h.scale.set(2,1,1.1),h.renderOrder=1,o.add(l,c,h),this.scene.add(o);const u=[n,s].map(f=>{const p=new Ft(f,this.glow);return p.visible=!1,this.scene.add(p),p}),d={kind:"circle",x:r.x,z:r.z,r:.85};this.o.solids.push(d),this.cows.push({group:o,head:c,bang:u[0],moo:u[1],solid:d,x:r.x,z:r.z,rot:r.rot,target:null,until:2+a*1.3,watching:!1,bangUntil:0,mooUntil:0,lastMoo:-10,phase:a*1.7})})}pickPasture(t){for(let e=0;e<12;e++){const n={x:ze.minX+1.6+this.rand()*(ze.maxX-ze.minX-3.2),z:ze.minZ+1.6+this.rand()*(ze.maxZ-ze.minZ-3.2)};if(!(li(n,t)<2||li(n,t)>8)&&!this.cows.some(s=>s!==t&&(li(n,s)<2.4||s.target&&li(n,s.target)<2.4)))return n}return null}updateHerd(t){const{t:e,dt:n,runner:s}=t;for(const r of this.cows){const a=li(s,r);if(a<5&&!r.watching?(r.watching=!0,r.bangUntil=e+.9):a>6.5&&r.watching&&(r.watching=!1,r.until=e+1.5+this.rand()*2,r.target=null),t.jumped&&a<3.6&&e-r.lastMoo>1.6&&(r.lastMoo=e,r.mooUntil=e+1.3,this.o.sfx("moo",r),this.o.event({kind:"moo",cow:this.cows.indexOf(r)})),this.o.reduceMotion)r.group.position.set(r.x,0,r.z),r.group.rotation.y=r.rot;else{if(r.group.position.y=0,r.watching)r.rot=nh(r.rot,hs(s.x-r.x,s.z-r.z),n*2.2),r.head.rotation.z=.1;else if(r.target){const o=r.target.x-r.x,l=r.target.z-r.z,c=Math.hypot(o,l);if(c<.08)r.target=null,r.until=e+3+this.rand()*6;else{const h=hs(o,l);r.rot=nh(r.rot,h,n*1.6);const u=Math.max(0,Math.cos(h-r.rot)),d=Math.min(c,.55*u*n);r.x+=o/c*d,r.z+=l/c*d,r.head.rotation.z=.1,r.group.position.y=Math.floor(e*4+r.phase)%2?bt:0}}else{const o=(e+r.phase)%2.6/2.6;r.head.rotation.z=o<.64?-.55:.1,e>r.until&&(r.target=this.pickPasture(r)),!r.target&&e>r.until&&(r.until=e+2)}r.group.position.x=r.x,r.group.position.z=r.z,r.group.rotation.y=r.rot,r.solid.x=r.x,r.solid.z=r.z}for(const[o,l]of[[r.bang,r.bangUntil],[r.moo,r.mooUntil]])o.visible=e<l,o.position.set(r.x+Math.sin(this.yaw)*.2,1.75,r.z+Math.cos(this.yaw)*.2);r.moo.visible&&(r.bang.visible=!1)}}grassSpot(t,e){for(let n=0;n<40;n++){let s;if(t&&e){const a=Math.atan2(t.z-e.z,t.x-e.x)+(this.rand()-.5)*1.4,o=12+this.rand()*12;s={x:t.x+Math.cos(a)*o,z:t.z+Math.sin(a)*o}}else s={x:(this.rand()*2-1)*70,z:(this.rand()*2-1)*50};if(!(!or(s.x,s.z)||ea(s.x,s.z)!=="grass"||mu(s.x,s.z,2))&&!(dr(s.x,s.z)<3.5||Qn(s.x,s.z)>Tn-.06))return s}return null}buildBirds(){const t=Qt([C(0,.06,0,.2,.12,.12,6114111),C(-.13,.12,0,.08,.04,.08,4864817),C(.02,0,.03,.02,.06,.02,w.gold),C(.02,0,-.03,.02,.06,.02,w.gold)]),e=Qt([C(0,0,0,.09,.09,.09,4141867),C(.06,.03,0,.04,.03,.03,w.gold)]),n=Qt([C(-.02,.16,.1,.1,.14,.03,8020818),C(-.02,.16,-.1,.1,.14,.03,8020818)]),s=Qt([C(-.02,.1,.1,.12,.03,.1,8020818),C(-.02,.1,-.1,.12,.03,.1,8020818)]);for(let r=0;r<4;r++){const a=this.grassSpot();if(!a)continue;const o=[];for(let l=0;l<4;l++){const c=new gn,h=new Ft(t,this.o.occluder),u=new Ft(e,this.o.occluder);u.position.set(.11,.16,0);const d=new Ft(n,this.o.occluder),f=new Ft(s,this.o.occluder);d.visible=f.visible=!1,c.add(h,u,d,f),c.rotation.y=this.rand()*Math.PI*2,this.scene.add(c);const p={x:(this.rand()-.5)*1.6,z:(this.rand()-.5)*1.1};c.position.set(a.x+p.x,0,a.z+p.z),o.push({group:c,head:u,wingsUp:d,wingsDown:f,off:p,phase:this.rand()*10})}this.flocks.push({birds:o,at:a,from:a,to:a,flying:!1,t0:0,dur:1})}}updateBirds(t){const{t:e,runner:n}=t;for(const s of this.flocks){if(!s.flying){const o=li(n,s.at);if(o<2.8||n.sprinting&&o<5){const l=this.grassSpot(s.at,n);l&&(s.flying=!0,s.from=s.at,s.to=l,s.t0=e,s.dur=li(s.at,l)/6,this.o.sfx("flap",s.at),this.o.event({kind:"birds"}))}if(Math.abs(s.at.x-t.focus.x)>22||Math.abs(s.at.z-t.focus.z)>18)continue;for(const l of s.birds){const c=Math.floor(e*2.5+l.phase*7)%3===0;l.head.position.y=c?.08:.16,l.head.position.x=c?.14:.11,l.wingsUp.visible=l.wingsDown.visible=!1}continue}let r=0;const a=hs(s.to.x-s.from.x,s.to.z-s.from.z);if(s.birds.forEach((o,l)=>{const c=Math.min(1,Math.max(0,(e-s.t0-l*.07)/s.dur));c>=1&&r++;const h=s.from.x+(s.to.x-s.from.x)*c+o.off.x,u=s.from.z+(s.to.z-s.from.z)*c+o.off.z;o.group.position.set(h,Math.sin(Math.PI*c)*(2.4+l%2*.4),u),o.group.rotation.y=a;const d=Math.floor(e*12+l)%2===0;o.wingsUp.visible=c>0&&c<1&&d,o.wingsDown.visible=c>0&&c<1&&!d,o.head.position.set(.11,.16,0)}),r===s.birds.length){s.flying=!1,s.at=s.to;for(const o of s.birds)o.group.rotation.y=this.rand()*Math.PI*2}}}beachSpot(){const t=this.rand()*Math.PI*2,e=Tn+.025+this.rand()*(ha-Tn-.045),n=ua(t,e),s=ua(t+.01,e),r=Math.hypot(s.x-n.x,s.z-n.z);return{p:n,tx:(s.x-n.x)/r,tz:(s.z-n.z)/r}}buildCrabs(){const n=Qt([C(0,.03,0,.3,.1,.2,14243643),C(0,.13,0,.22,.04,.14,15234127),C(-.06,.13,.07,.03,.08,.03,w.ink),C(.06,.13,.07,.03,.08,.03,w.ink),C(-.2,.04,.1,.1,.08,.1,15234127),C(.2,.04,.1,.1,.08,.1,15234127),C(-.19,0,-.04,.12,.03,.03,12076076),C(.19,0,-.04,.12,.03,.03,12076076),C(-.18,0,-.1,.1,.03,.03,12076076),C(.18,0,-.1,.1,.03,.03,12076076)]);for(let s=0;s<8;s++){const{p:r,tx:a,tz:o}=this.beachSpot(),l=new gn;l.add(new Ft(n,this.o.occluder)),l.position.set(r.x,0,r.z),l.rotation.y=hs(a,o),this.scene.add(l),this.crabs.push({group:l,x:r.x,z:r.z,tx:a,tz:o,state:"idle",until:this.rand()*3,dir:1})}}onBeach(t,e){const n=Qn(t,e);return n>Tn+.015&&n<ha-.01}updateCrabs(t){const{t:e,dt:n,runner:s}=t;for(const r of this.crabs){const a=li(s,r);if(r.state==="hidden"){if(e>r.until){const{p:c,tx:h,tz:u}=this.beachSpot();Object.assign(r,{x:c.x,z:c.z,tx:h,tz:u,state:"idle",until:e+1}),r.group.visible=!0,r.group.rotation.y=hs(h,u)}continue}if(r.state!=="flee"&&a<2.2){const c=(r.x-s.x)*r.tx+(r.z-s.z)*r.tz;r.dir=c>=0?1:-1,r.state="flee",r.until=e+.6}if(r.state==="idle"&&e>r.until?(r.state="scuttle",r.dir=this.rand()<.5?-1:1,r.until=e+.5+this.rand()*.8):r.state==="scuttle"&&e>r.until&&(r.state="idle",r.until=e+1+this.rand()*3),r.state==="flee"&&e>r.until){this.o.event({kind:"crab"}),r.state="hidden",r.until=e+7+this.rand()*6,r.group.visible=!1;continue}const o=r.state==="flee"?3.6:r.state==="scuttle"?1.1:0;if(o>0){const c=r.x+r.tx*r.dir*o*n,h=r.z+r.tz*r.dir*o*n;this.onBeach(c,h)?(r.x=c,r.z=h):r.dir=-r.dir}const l=r.state==="flee"&&e>r.until-.2?-.1:0;r.group.position.set(r.x,l+(o>0&&Math.floor(e*10)%2?bt:0),r.z)}}updateFish(t){const{t:e}=t,n=Math.abs(Jt.x-t.focus.x)<26&&Math.abs(Jt.z-t.focus.z)<22;if(this.jump){const s=(e-this.jump.t0)/.7;if(s>=1)this.ripple(1,this.jump.to,e),this.o.sfx("splash",this.jump.to),this.jump=null,this.nextJump=e+3+this.rand()*6;else{const{from:r,to:a}=this.jump;this.fish.visible=!0,this.fish.position.set(r.x+(a.x-r.x)*s,.05+4*.7*s*(1-s),r.z+(a.z-r.z)*s),this.fish.rotation.set(0,hs(a.x-r.x,a.z-r.z),(.5-s)*1.6)}}else if(this.fish.visible=!1,e>this.nextJump&&n){const s=this.rand()*Math.PI*2,r=this.rand()*.55,a={x:Jt.x+Math.cos(s)*Jt.rx*r,z:Jt.z+Math.sin(s)*Jt.rz*r},o=this.rand()*Math.PI*2;this.jump={from:a,to:{x:a.x+Math.cos(o)*.9,z:a.z+Math.sin(o)*.6},t0:e},this.ripple(0,a,e)}this.ripples.forEach(s=>{const r=s.userData.born;if(r===void 0)return;const a=Math.floor((e-r)/.16);s.visible=a<4;const o=.5+a*.35;s.scale.set(o*1.3,1,o*.9)})}ripple(t,e,n){const s=this.ripples[t];s.position.set(e.x,.012,e.z),s.userData.born=n}updateFireflies(t,e){if(this.fireflies.visible=t.lit&&t.rain<.3,!this.fireflies.visible)return;const n=e?0:t.t;this.fireflyHomes.forEach((s,r)=>{const a=e||(n*.7+s.phase)%1<.55,o=s.x+Math.round(Math.sin(n*.6+s.phase)*10)/16,l=s.z+Math.round(Math.cos(n*.45+s.phase*1.3)*6)*Xi.z,c=.45+Math.round(Math.sin(n*1.1+s.phase*2)*4)*bt,h=a?.09:0;this.m.makeScale(h,h,h),this.m.setPosition(o,c,l),this.fireflies.setMatrixAt(r,this.m)}),this.fireflies.count=this.fireflyHomes.length,this.fireflies.instanceMatrix.needsUpdate=!0}updateButterflies(t,e){const n=e?0:t.t;for(const s of this.butterflies){if(s.group.visible=!t.lit&&t.rain<.3,!s.group.visible||!e&&(Math.abs(s.home.x-t.focus.x)>22||Math.abs(s.home.z-t.focus.z)>18))continue;const r=e||Math.floor(n*7+s.phase)%2===0;s.open.visible=r,s.shut.visible=!r,s.group.position.set(s.home.x+Math.sin(n*.8+s.phase)*.9,.45+Math.round(Math.abs(Math.sin(n*2.6+s.phase))*3)*bt,s.home.z+Math.cos(n*.6+s.phase*1.3)*.6),s.group.rotation.y=Math.cos(n*.8+s.phase)>0?0:Math.PI}}updateDust(t){const{t:e,runner:n}=t,s=ea(n.x,n.z),a=t.wet>.5&&s!=="sand"?11060448:s==="road"?10130856:s==="sand"?15785912:13220239;if(t.landed)for(let l=0;l<7;l++){const c=l/7*Math.PI*2;this.particles.spawn({x:n.x+Math.cos(c)*.2,y:.02,z:n.z+Math.sin(c)*.12,vx:Math.cos(c)*1.3,vy:.7,vz:Math.sin(c)*.8,max:.42,size:.125,gravity:2,color:a})}const o=Math.hypot(n.vx,n.vz);n.sprinting&&!n.airborne&&o>5&&e-this.lastDust>.08&&(this.lastDust=e,this.particles.spawn({x:n.x-n.vx/o*.25+(this.rand()-.5)*.2,y:.02,z:n.z-n.vz/o*.25,vx:-n.vx*.12,vy:.6+this.rand()*.4,vz:-n.vz*.12,max:.5,size:.125,gravity:.6,color:a}))}updateFootprints(t){const{t:e,runner:n}=t;if(n.moving&&!n.airborne&&ea(n.x,n.z)==="sand"&&(!this.lastPrint||li(this.lastPrint,n)>.45)){const s=Math.hypot(n.vx,n.vz)||1;this.printSide=-this.printSide,this.prints.push({x:n.x-n.vz/s*.12*this.printSide,z:n.z+n.vx/s*.12*this.printSide,born:e}),this.prints.length>80&&this.prints.shift(),this.lastPrint={x:n.x,z:n.z}}for(;this.prints.length&&e-this.prints[0].born>9;)this.prints.shift();this.prints.forEach((s,r)=>{this.m.makeScale(2/16,1,Xi.z),this.m.setPosition(Math.round(s.x*16)/16,.003,s.z),this.footprints.setMatrixAt(r,this.m)}),this.footprints.count=this.prints.length,this.footprints.instanceMatrix.needsUpdate=!0}updateCup(t){const{t:e,runner:n}=t,s=this.o.aidStation;if(!s)return;const r=Math.hypot(n.vx,n.vz);if(e-this.takenAt>6&&r>3&&!n.airborne&&Sv(s,n.x,n.z)&&(this.takenAt=e,this.carryUntil=e+1.4,this.tossed=!1,this.o.sfx("cup",n),this.o.event({kind:"cup"})),this.cup.visible=e<this.carryUntil,this.cup.visible){const a=n.facing==="left"?-.35:n.facing==="right"?.35:0;this.cup.position.set(n.x+Math.cos(this.yaw)*a,1.35+n.h,n.z-Math.sin(this.yaw)*a+.05)}else if(!this.tossed){if(this.tossed=!0,this.o.reduceMotion)return;for(let a=0;a<6;a++)this.particles.spawn({x:n.x,y:1.4+n.h,z:n.z,vx:(this.rand()-.5)*1.6,vy:1.2+this.rand(),vz:(this.rand()-.5)*.8,max:.6,size:.0625,gravity:9,color:w.sky});this.particles.spawn({x:n.x,y:1.4,z:n.z,vx:-n.vx*.3-.6,vy:3,vz:-n.vz*.3,max:1,size:.16,gravity:9,color:w.cream})}}}const le={A:0,B:1,X:2,Y:3,LB:4,RB:5,RT:7,BACK:8,START:9,UP:12,DOWN:13,LEFT:14,RIGHT:15};function fs(){let i=[];try{i=Array.from(navigator.getGamepads?.()??[])}catch{return null}const t=i.filter(e=>!!e&&e.connected);return t.find(e=>e.mapping==="standard")??t[0]??null}function Qe(i,t){const e=i.buttons[t];return!!e&&(e.pressed||e.value>.5)}function il(i,t,e,n=.22){const s=i.axes[t]??0,r=i.axes[e]??0,a=Math.hypot(s,r);if(a<n)return{x:0,y:0};const o=Math.min(1,(a-n)/(1-n))/a;return{x:s*o,y:r*o}}class yu{before=[];now=[];update(t){this.before=this.now,this.now=t?t.buttons.map((e,n)=>Qe(t,n)):[]}down(t){return!!this.now[t]&&!this.before[t]}anyDown(){return this.now.some((t,e)=>t&&!this.before[e])}}const Ev={A:"A",B:"B",X:"X",Y:"Y",START:"START",BACK:"VIEW"},bv={A:"✕",B:"○",X:"□",Y:"△",START:"OPTIONS",BACK:"SHARE"};function ao(i){const t=i?.id.toLowerCase()??"";return t.includes("054c")||t.includes("dualsense")||t.includes("dualshock")||t.includes("playstation")?bv:Ev}function wv(i,t,e,n){i?.vibrationActuator?.playEffect?.("dual-rumble",{duration:t,strongMagnitude:e,weakMagnitude:n})?.catch(()=>{})}const Tv=118,Av=10;class Rv{stones=[];reduceMotion;constructor(t,e){this.reduceMotion=e.reduceMotion,[...e.years].sort((s,r)=>s-r).forEach((s,r)=>{const a=Tv+r*Av,o=_n(a),l=Ne.halfWidth+1.15,c={x:o.x-o.nx*l,z:o.z-o.nz*l},h=String(s),u=Math.max(1,(h.length*4+5)/16),d=new gn;d.add(new Ft(Qt([C(0,0,0,u+.12,1,.36,w.stone),C(0,1,0,u-.1,.12,.28,w.stoneLight),C(0,0,0,u+.3,.14,.5,w.rockDark),C(0,.32,.18,u-.06,9*bt,.03,w.gold),...qi(h,0,.32+7*bt,.21,w.ink,1,.02)]),e.occluder));const f=new Ft(e.flatDisc(),e.shadow);f.scale.set(u+.6,1,.7),f.position.set(.2,0,.25),f.renderOrder=1,f.visible=this.reduceMotion,d.add(f),d.position.set(c.x,this.reduceMotion?0:-1.2,c.z),d.visible=this.reduceMotion,t.add(d);const p=new Ft(Qt([C(0,0,0,u,.01,.18,w.trunkDark),C(-u/4,0,.1,u/3,.01,.1,w.trunkDark)]),e.solid);p.position.set(c.x,.005,c.z),p.visible=!this.reduceMotion,t.add(p);const _={kind:"circle",x:c.x,z:c.z,r:this.reduceMotion?.45:0};e.solids.push(_),this.stones.push({s:a,year:s,group:d,scar:p,at:c,risenAt:this.reduceMotion?0:null,solid:_})})}pointables(){return this.stones.map(t=>({obj:t.group,caption:()=>`A STONE FOR ${t.year}.`}))}allRisen(){return this.stones.every(t=>t.risenAt!==null)}update(t,e,n){const s=[];if(this.stones.length===0)return{year:null,rising:s};const r=dr(e,n)<Ne.halfWidth+3,a=du(e,n);for(const c of this.stones)if(c.risenAt===null&&r&&a>=c.s-3&&a<c.s+20&&(c.risenAt=t,c.group.visible=!0,s.push(c.at)),c.risenAt!==null&&!this.reduceMotion){const h=Math.min(6,Math.floor((t-c.risenAt)/.1));c.group.position.y=-1.2+h/6*1.2,c.group.children[1].visible=h===6,h===6&&(c.scar.visible=!1,c.solid.r=.45)}const o=this.stones[0],l=this.stones[this.stones.length-1];if(!r||a<o.s-6||a>l.s+10)return{year:null,rising:s};if(a<=o.s)return{year:o.year,rising:s};for(let c=0;c<this.stones.length-1;c++){const h=this.stones[c],u=this.stones[c+1];if(a<u.s)return{year:Math.floor(h.year+(u.year-h.year)*(a-h.s)/(u.s-h.s)),rising:s}}return{year:l.year,rising:s}}}const Cv=`
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Pv=`
  uniform float uTime;
  uniform float uDensity;
  uniform vec3 uNear;
  uniform vec3 uFar;
  float hash(float n) { return fract(sin(n * 12.9898) * 43758.5453); }
  bool drop(vec2 p, float shear, float base, float spread, float gapBase, float gapSpread, float seed) {
    float col = floor(p.x + p.y * shear) + seed;
    float h = hash(col);
    float speed = base + h * spread;
    float gap = gapBase + hash(col + 7.13) * gapSpread;
    float y = p.y + uTime * speed + h * 977.0;
    float k = floor(y / gap);
    float len = 3.0 + floor(hash(col * 1.71 + k) * 4.0);
    if (mod(y, gap) > len) return false;
    return hash(col * 3.31 + k * 1.37) < uDensity;
  }
  void main() {
    vec2 p = floor(gl_FragCoord.xy);
    if (drop(p, 0.3, 190.0, 110.0, 70.0, 90.0, 0.0)) {
      gl_FragColor = vec4(uNear, 1.0);
    } else if (drop(p, 0.22, 120.0, 60.0, 50.0, 70.0, 431.0)) {
      gl_FragColor = vec4(uFar, 1.0);
    } else {
      discard;
    }
  }
`;function Lv(i,t){return t<=0?i:{sun:on(i.sun,10134720,t*.7),sunI:i.sunI*(1-.42*t),shade:on(i.shade,8160936,t*.5),shadeI:i.shadeI*(1-.1*t),sea:on(i.sea,5990020,t*.5),seaDeep:on(i.seaDeep,4608108,t*.5),foam:on(i.foam,13160672,t*.4),sprite:on(i.sprite,13028316,t*.4),lamps:i.lamps||t>.6}}class Dv{mode="auto";intensity=0;wetness=0;reduceMotion;raining=!1;nextChange;rand=mi(2207);overlay=new Oh;overlayCamera=new vl;rainMat;ripples;rippleMat=Bn(16186367,.7,{shape:"ring"});rippleLife=[];puddleMat=Bn(4608108,0,{falloff:!0});m=new ce;constructor(t,e,n,s){this.reduceMotion=n,this.nextChange=s+70+this.rand()*80,this.rainMat=new Cn({uniforms:{uTime:{value:0},uDensity:{value:0},uNear:{value:new qt(14213360)},uFar:{value:new qt(10135236)}},vertexShader:Cv,fragmentShader:Pv,depthTest:!1,depthWrite:!1});const r=new Ft(new Kn(2,2),this.rainMat);r.frustumCulled=!1,this.overlay.add(r),this.ripples=new Ti(e(),this.rippleMat,28),this.ripples.count=0,this.ripples.frustumCulled=!1,this.ripples.renderOrder=1,t.add(this.ripples);const a=[],o=mi(919);for(let u=0;u<70;u++){const d=_n(o()*Oe),f=(o()<.5?-1:1)*(Ne.halfWidth*(.4+o()*.9));a.push({x:d.x+d.nx*f,z:d.z+d.nz*f,rot:Math.atan2(-d.tz,d.tx),sx:1+o()*1.6,sz:.5+o()*.5})}for(let u=0;u<40;u++){const d=(o()*2-1)*70,f=(o()*2-1)*50;!or(d,f)||Qn(d,f)>.88||a.push({x:d,z:f,rot:o()*Math.PI,sx:.8+o()*1.4,sz:.5+o()*.6})}const l=new Ti(e(),this.puddleMat,a.length),c=new Ci,h=new U(0,1,0);a.forEach((u,d)=>{c.setFromAxisAngle(h,u.rot),this.m.compose(new U(u.x,.003,u.z),c,new U(u.sx,1,u.sz)),l.setMatrixAt(d,this.m)}),l.instanceMatrix.needsUpdate=!0,l.renderOrder=1,l.frustumCulled=!1,t.add(l)}setMode(t,e){this.mode=t,this.nextChange=e+60+this.rand()*60}update(t,e,n){this.mode==="auto"&&!this.reduceMotion&&e>this.nextChange&&(this.raining=!this.raining,this.nextChange=e+(this.raining?60+this.rand()*60:160+this.rand()*160));const s=this.mode==="rain"?1:this.mode==="clear"||this.reduceMotion?0:this.raining?1:0,r=(o,l,c,h)=>o>l?Math.min(o,l+t/c):Math.max(o,l-t/h);this.intensity=r(s,this.intensity,6,8),this.wetness=r(s,this.wetness,18,40),this.rainMat.uniforms.uTime.value=this.reduceMotion?3.7:e,this.rainMat.uniforms.uDensity.value=this.intensity*.32,this.puddleMat.uniforms.uDensity.value=this.wetness*.6;const a=[];if(this.intensity>.05&&!this.reduceMotion){const o=Math.floor(this.intensity*60*t+this.rand());for(let l=0;l<o;l++){const c=n.x+(this.rand()*2-1)*13,h=n.z+(this.rand()*2-1)*10,u=Qn(c,h);((c-Jt.x)/Jt.rx)**2+((h-Jt.z)/Jt.rz)**2<.9?this.ripple(c,.013,h,e):u>1.02?this.ripple(c,-.33,h,e):or(c,h)&&a.push({x:c,z:h})}}return this.updateRipples(e),a}ripple(t,e,n,s){this.rippleLife.length>=28&&this.rippleLife.shift(),this.rippleLife.push({x:t,y:e,z:n,born:s})}updateRipples(t){for(;this.rippleLife.length&&t-this.rippleLife[0].born>.45;)this.rippleLife.shift();this.rippleLife.forEach((e,n)=>{const s=.3+Math.floor((t-e.born)/.15)*.22;this.m.makeScale(s*1.3,1,s),this.m.setPosition(e.x,e.y,e.z),this.ripples.setMatrixAt(n,this.m)}),this.ripples.count=this.rippleLife.length,this.ripples.instanceMatrix.needsUpdate=!0}setSky(t){this.rainMat.uniforms.uNear.value.setHex(on(t.foam,16777215,.2)),this.rainMat.uniforms.uFar.value.setHex(on(t.sea,t.foam,.45)),this.rippleMat.uniforms.uColor.value.setHex(t.foam),this.puddleMat.uniforms.uColor.value.setHex(on(t.seaDeep,2302510,.35))}render(t){if(this.intensity<=.01)return;const e=t.autoClear;t.autoClear=!1,t.render(this.overlay,this.overlayCamera),t.autoClear=e}dispose(){this.rainMat.dispose(),this.overlay.traverse(t=>{t instanceof Ft&&t.geometry.dispose()})}}ie.enabled=!1;const oo={yaw:45,lens:"perspective",rows:180,tones:2},Fn=16,Oi=Sl,lo=60,co=1/120,sh=1.25/Math.cos(Oi),rh=20,us=[1,4/3,2],ah="roam-zoom",zi=44,fa=1.5,Nv=7,Xr=2.4,Bi=["stand","a","b","jump","watch"],na=3*Bi.length,oh={right:0,left:0,down:1,up:2},Iv={right:0,up:Math.PI/2,left:Math.PI,down:-Math.PI/2};function lh(i=document.createElement("canvas"),t){i.width=16*na,i.height=40;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);const n=r=>{const a=r.toUpperCase();return t&&a==="#FF9A4A"?t.top:t&&a==="#7EC8E8"?t.bottom:r},s=[{shared:Ou,lamp:Fu,poses:{stand:Uu,a:Iu,b:Nu,jump:Du,watch:Lu}},{shared:sl,lamp:Hu,poses:{stand:dh,a:ku,b:Bu,jump:fh,watch:zu}},{shared:Yu,lamp:[],poses:{stand:qu,a:Xu,b:Wu,jump:Vu,watch:Gu}}];for(let r=0;r<2;r++)s.forEach(({shared:a,lamp:o,poses:l},c)=>{Bi.forEach((h,u)=>{const d=l[h],f=(c*Bi.length+u)*16,p=r*20;for(const[_,m,g,S,E]of[...a,...d,...r?o:[]])e.fillStyle=n(E),e.fillRect(f+_,p+m,g,S)})});return i}const hn=12,Uv=(()=>{const i=new Uint8Array(hn*hn);let t=7;const e=()=>(t=t*16807%2147483647)/2147483647,n=(s,r,a,o)=>{const l=Math.floor(e()*hn),c=a+Math.floor(e()*(o-a+1));for(let h=0;h<c;h++)i[(l+h)%hn*hn+s]=r};for(let s=0;s<hn;s++){const r=s===0||s===hn-1;for(let a=0;a<hn;a++)i[a*hn+s]=r?2:0;if(r){n(s,1,2,4);continue}s%3!==1&&n(s,1,3,7),e()<.45&&n(s,2,1,2)}return i})();class Fv{host;canvas;renderer;scene=new Oh;camera;look;cb;reduceMotion;landmarks;scenery;solids;labelAnchors=[];stations=[];openedAt=performance.now();life=null;weather=null;baseLight=hi.dusk;gradedAt=-1;lastRain=-1;lap=new j_;lastLapReport="";questRoad=null;lastYear=void 0;ghostMesh;ghostTex;zoom=0;lastWheel=0;goal=null;goalMarker;pointer=null;hoverAt=0;hoverDirty=!1;lastCaption=null;hovered=null;pointables=[];raycaster=new np;stridePhase=0;padEdges=new yu;stickTouch=null;panTouch=null;lastWaves=-1;told=new Set;banana=null;kit={top:"#FF9A4A",bottom:"#7EC8E8"};swayTime={value:0};swayDir={value:new At(1,0)};facers=[];swayMats=[];wash=null;boat=null;glints=null;glintSpots=[];cars=[];lamps=[];glowPools=[];gradient;solidMat;occluderMat;seaMat=new zn;shallowMat=new zn;foamMat=new zn;shadowMat;glowMat=nl();rectShadowMat=Bn(2825047,.5,{shape:"rect"});beamMat=Bn(16769955,.5,{shape:"cone",falloff:!0});tailPoolMat=Bn(15222063,.34,{falloff:!0});waterTex;waterMat;runnerMat;runnerTex;sun=new jf;shade=new tp;seeThrough={value:new Ee(-1e3,-1e3,rh,0)};runner;runnerMesh;runnerShadow;animClock=0;lampsLit=!1;stillSince=performance.now();jumped=!1;landed=!1;lampPool;focus=new U;pan=new U;axes={right:{x:1,z:0},up:{x:0,z:-1}};size={iw:320,ih:180,scale:1,left:0,top:0};held={up:!1,down:!1,left:!1,right:!1,sprint:!1};jumpQueued=!1;inputEnabled=!0;drag=null;raf=0;running=!1;paused=!0;hidden=!1;last=0;acc=0;frameTimes=[];frameTimeAt=0;lastPrompt=void 0;lastNearest="";lastPace=void 0;paceSpeed=0;moved=!1;stuck={timer:0,origin:{x:0,z:0},on:!1};sky;cycle=null;cycleMs=2800;cycleMid=.45;resizeObserver;tmp=new U;constructor(t,e,n){this.host=t,this.cb=n,this.look=e.look,this.reduceMotion=e.reduceMotion,this.sky=e.sky,this.canvas=document.createElement("canvas"),this.canvas.className="roam-canvas",this.canvas.setAttribute("aria-hidden","true"),t.appendChild(this.canvas);try{this.renderer=new Jx({canvas:this.canvas,antialias:!1,powerPreference:"default"})}catch(o){throw this.canvas.remove(),o}this.renderer.outputColorSpace=tr,this.renderer.setPixelRatio(1),this.gradient=eh(this.look.tones),this.solidMat=new jr({vertexColors:!0,gradientMap:this.gradient}),this.occluderMat=new jr({vertexColors:!0,gradientMap:this.gradient}),this.installSeeThrough(this.occluderMat),this.shadowMat=Bn(2825047,.5),this.waterTex=new xa(new Uint8Array(hn*hn*4),hn,hn,wn),this.waterTex.magFilter=Se,this.waterTex.minFilter=Se,this.waterTex.wrapS=Qs,this.waterTex.wrapT=Qs,this.waterTex.generateMipmaps=!1,this.waterMat=new zn({map:this.waterTex,side:bn}),this.runnerTex=new tc(lh()),this.runnerTex.magFilter=Se,this.runnerTex.minFilter=Se,this.runnerTex.generateMipmaps=!1,this.runnerTex.repeat.set(1/na,.5),this.runnerMat=new zn({map:this.runnerTex,alphaTest:.5,side:bn}),this.sun.position.set(-.416,.885,-.208),this.scene.add(this.sun,this.shade),this.landmarks=t_(e.zoneIds,e.look.yaw*Math.PI/180),this.scenery=s_(this.landmarks),this.solids=o_(this.landmarks,this.scenery),this.buildWorld(),this.life=new yv(this.scene,{reduceMotion:this.reduceMotion,cows:this.scenery.cows,flowers:this.scenery.flowers,bushes:this.scenery.bushes,aidStation:this.landmarks.find(o=>o.zoneId==="skills"),solids:this.solids,occluder:this.occluderMat,shadow:this.shadowMat,gradient:this.gradient,flatDisc:()=>this.flatDisc(),sfx:(o,l)=>this.sfxAt(o,l),event:o=>this.cb.onEvent(o)}),this.buildBanana(),this.pointables.push(...this.life.pointables()),this.weather=new Dv(this.scene,()=>this.flatDisc(),this.reduceMotion,performance.now()/1e3),this.lampPool=new Ft(this.flatDisc(),Bn(16769955,.42,{shape:"cone",falloff:!0})),this.lampPool.scale.set(3.2,1,2.2),this.scene.add(this.lampPool),this.goalMarker=new Ft(this.flatDisc(),Bn(16774371,.7,{shape:"ring"})),this.goalMarker.visible=!1,this.scene.add(this.goalMarker);try{const o=Number(localStorage.getItem(ah));(o===1||o===2)&&(this.zoom=o)}catch{}this.questRoad=new Rv(this.scene,{years:Cu.map(Pu).filter(o=>o!==null),occluder:this.occluderMat,solid:this.solidMat,shadow:this.shadowMat,flatDisc:()=>this.flatDisc(),solids:this.solids,reduceMotion:this.reduceMotion}),this.pointables.push(...this.questRoad.pointables()),this.facers.push(...this.questRoad.pointables().map(o=>o.obj));const s=new Kn(1,sh);s.translate(0,sh/2,0),this.runnerMesh=new Ft(s,this.runnerMat),this.runnerMesh.renderOrder=2,this.ghostTex=this.runnerTex.clone(),this.ghostTex.needsUpdate=!0;const r=new zn({map:this.ghostTex,alphaTest:.5,side:bn,color:14208511});r.onBeforeCompile=o=>{o.fragmentShader=o.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
 if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.0) < 0.5) discard;`)},this.ghostMesh=new Ft(s,r),this.ghostMesh.renderOrder=2,this.ghostMesh.visible=!1,this.scene.add(this.ghostMesh),this.runnerShadow=new Ft(this.flatDisc(),this.shadowMat),this.scene.add(this.runnerMesh,this.runnerShadow),this.stirStations(0,performance.now(),!0),this.scene.traverse(o=>{o instanceof Ft&&o.material instanceof Cn&&"uDensity"in o.material.uniforms&&(o.renderOrder=Math.max(o.renderOrder,1))});const a=this.landmarks[0];this.runner=Oc(a?.door.x??0,a?.door.z??40),this.camera=this.makeCamera(),this.applySky(hi[this.sky]),this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onBlur=this.onBlur.bind(this),this.onVisibility=this.onVisibility.bind(this),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onContextLost=this.onContextLost.bind(this),this.tick=this.tick.bind(this),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),document.addEventListener("visibilitychange",this.onVisibility),this.canvas.addEventListener("pointerdown",this.onPointerDown),this.onWheel=this.onWheel.bind(this),this.canvas.addEventListener("wheel",this.onWheel,{passive:!0}),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointercancel",this.onPointerUp),this.canvas.addEventListener("webglcontextlost",this.onContextLost),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize()}resume(){this.paused=!1,this.wake()}pause(){this.paused=!0,this.releaseKeys(),this.stop(),this.goal=null,this.pointer=null,this.hovered=null,this.lastCaption!==null&&(this.lastCaption=null,this.cb.onHover(null))}setInputEnabled(t){this.inputEnabled=t,t||this.releaseKeys()}placeAt(t,e="down"){const n=this.landmarks.find(s=>s.zoneId===t)??this.landmarks[0];n&&(this.runner=Oc(n.door.x,n.door.z,e),this.lap.reset(),this.pan.set(0,0,0),this.focus.set(this.runner.x+this.axes.up.x*Xr,0,this.runner.z+this.axes.up.z*Xr),this.stuck={timer:0,origin:{x:n.door.x,z:n.door.z},on:!1},this.cb.onStuck(!1),this.lastPrompt=void 0,this.running||this.renderOnce())}nearestZone(){return this.nearest().zoneId}runnerPosition(){return{x:this.runner.x,z:this.runner.z}}landmarkPlacements(){return this.landmarks}runnerOnScreen(){return this.toScreen(this.runner.x,.7+this.runner.h,this.runner.z)}setSky(t,e,n,s){if(this.cycleMs=n,this.cycleMid=s,e&&!this.reduceMotion){(!this.cycle||this.cycle.kind!==e)&&(this.cycle={kind:e,start:performance.now()});return}this.cycle=null,this.sky=t,this.applySky(hi[t]),this.running||this.renderOnce()}setLook(t){const e=t.tones!==this.look.tones;if(this.look=t,e){const n=this.gradient;this.gradient=eh(t.tones),this.solidMat.gradientMap=this.gradient,this.occluderMat.gradientMap=this.gradient;for(const s of this.swayMats)s.gradientMap=this.gradient;this.life?.setGradient(this.gradient),n.dispose()}this.camera=this.makeCamera(),this.resize()}dispose(){this.stop(),this.resizeObserver.disconnect(),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),document.removeEventListener("visibilitychange",this.onVisibility),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("wheel",this.onWheel),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerUp),this.canvas.removeEventListener("webglcontextlost",this.onContextLost);const t=new Set;this.scene.traverse(e=>{if(e instanceof Ft||e instanceof Ti){e.geometry.dispose();const n=e.material;(Array.isArray(n)?n:[n]).forEach(s=>t.add(s))}}),t.forEach(e=>e.dispose()),this.gradient.dispose(),this.runnerTex.dispose(),this.waterTex.dispose(),this.weather?.dispose(),this.ghostTex.dispose();for(const e of this.stations)for(const n of e.screens)n.tex.dispose();this.renderer.dispose(),this.renderer.forceContextLoss(),this.canvas.remove()}flatDisc(){const t=new Kn(1,1);return t.rotateX(-Math.PI/2),t.translate(0,.02,0),t}point(t,e){return this.pointables.push({obj:t,caption:()=>e}),t}add(t,e,n=0){const s=new Ft(t,e);return s.renderOrder=n,s.matrixAutoUpdate=!1,s.updateMatrix(),this.scene.add(s),s}instanced(t,e,n,s){const r=new Ti(t,e,Math.max(n.length,1));r.count=n.length;const a=new ce,o=new Ci,l=new U(0,1,0);return n.forEach((c,h)=>{o.setFromAxisAngle(l,c.rot);const[u,d]=s?s(c.scale):[c.scale,c.scale];a.compose(new U(c.x,0,c.z),o,new U(u,c.scale,d)),r.setMatrixAt(h,a)}),r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),this.scene.add(r),r}buildWorld(){const t=new Kn(1400,1400);t.rotateX(-Math.PI/2),t.translate(0,-.36,0),this.add(t,this.seaMat);const e=B_(),n=(l,c)=>{const h=new _a(l,1);return h.rotateX(-Math.PI/2),h.translate(0,c,0),h};this.add(n(e.shallow,-.35),this.shallowMat),this.add(n(e.foam,-.345),this.foamMat);for(const l of F_())this.add(l,this.solidMat);this.point(this.add(n(e.pond,.008),this.shallowMat),"THE POND. SOMETHING SPLASHES.");const s=z_();this.add(n(s.pool,.008),this.shallowMat),this.add(n(s.foam,.01),this.foamMat),this.wash=this.add(n(O_(),.003),this.foamMat),this.add(cs(io(.976,1,.012,0,12887670),.002),this.solidMat),this.add(cs(io(Tn,Tn,0,.011,w.grass),.004),this.solidMat),this.add(cs(io(Tn,Tn,.011,0,w.sand,1),.0045),this.solidMat),this.add(k_(),this.solidMat),this.add(G_(this.landmarks.filter(l=>l.zoneId!=="title").map(l=>l.s),Ys),this.solidMat),this.add(V_(),this.solidMat),this.buildRoadside(),this.point(this.add(Z_(),this.occluderMat),"THE PIER.");const r=new Ft(Qt(J_(),!1),this.occluderMat);r.position.set(ln.x+1.9,-.42,ln.z1-2.2),r.rotation.y=Math.PI/2,this.scene.add(r),this.boat=r,this.point(r,"A ROWING BOAT. NOT FOR HIRE."),this.add(cs(q_(),.011),this.solidMat),this.add(Qt(Y_()),this.solidMat),this.add(Qt(K_()),this.swayMaterial("occluder",.2,.7)),this.buildGlints(),this.point(this.add(I_(),this.occluderMat),"THE MOUNTAIN. ANOTHER DAY."),this.point(this.add(U_(),this.waterMat,1),"THE WATERFALL."),this.point(this.add(N_(),this.solidMat),"THE PASTURE FENCE.");const a=this.scenery;this.point(this.instanced(Qt(y_()),this.swayMaterial("occluder",1.6,2.4),a.palms),"A PALM."),this.instanced(this.flatDisc(),this.shadowMat,a.palms,l=>[1.5*l,1.1*l]);for(let l=0;l<3;l++){const c=a.rocks.filter(h=>h.variant===l);this.instanced(Qt(w_(l)),this.occluderMat,c),this.instanced(this.flatDisc(),this.shadowMat,c,h=>[1.1*h,.8*h])}for(let l=0;l<2;l++){const c=a.patches.filter(h=>h.variant%2===l);this.add(cs(E_(c,l),.006+l*5e-4),this.solidMat)}for(let l=0;l<2;l++){const c=a.bushes.filter(h=>h.variant%2===l);this.instanced(Qt(b_(l)),this.occluderMat,c),this.instanced(this.flatDisc(),this.shadowMat,c,h=>[1.4*h,1*h])}this.instanced(Qt(T_()),this.swayMaterial("solid",.08,.3),a.tufts);for(let l=0;l<3;l++)this.instanced(Qt(A_(l)),this.swayMaterial("solid",.12,.3),a.flowers.filter(c=>c.variant===l));const o=C_.map(([l,c])=>Qt(D_(l,c)));[.18,.5,.83].forEach((l,c)=>{const h=new gn;h.add(new Ft(o[c%o.length],this.occluderMat));const u=new Ft(this.flatDisc(),this.shadowMat);u.scale.set(2.7,1,1.5),h.add(u);const d=new Ft(Qt(P_()),this.glowMat),f=new Ft(this.flatDisc(),this.beamMat);f.scale.set(3.6,1,2.4),f.position.x=1.15+1.8;const p=new Ft(this.flatDisc(),this.tailPoolMat);p.scale.set(1.3,1,1.7),p.position.x=-1.75;const _=new Ft(Qt(L_()),this.glowMat);_.visible=!1,h.add(d,f,p,_),this.lamps.push(d,f,p),this.scene.add(h),this.point(h,"ONCOMING TRAFFIC. IT STOPS FOR YOU.");const m=[0,1].map(()=>({kind:"circle",x:0,z:0,r:.6}));this.solids.push(...m);const g={group:h,s:l*Oe,speed:0,solids:m,brake:_,waited:0,honked:-1/0};this.cars.push(g),this.moveCar(g,0)});for(const l of this.landmarks){const c=dv(l.zoneId),h=new gn;h.position.set(l.x,0,l.z),h.rotation.y=Math.atan2(l.facing.x,l.facing.z),h.add(new Ft(Qt(c.boxes),this.occluderMat));const u={zoneId:l.zoneId,door:l.door,centre:{x:l.x,z:l.z},wake:this.reduceMotion?1:0,parts:[],screens:[]};for(const f of c.parts??[]){const p=new Ft(Qt(f.boxes),f.glow?nl():this.occluderMat),[_,m,g]=f.at??[0,0,0];p.position.set(_,m,g),h.add(p),u.parts.push({mesh:p,part:f})}for(const f of c.screens??[]){const p=document.createElement("canvas");p.width=f.cols,p.height=f.rows;const _=new tc(p);_.magFilter=Se,_.minFilter=Se,_.generateMipmaps=!1;const m=new Ft(new Kn(f.cols/16,f.rows*bt),new zn({map:_}));m.position.set(...f.at),h.add(m),u.screens.push({screen:f,g:p.getContext("2d"),tex:_,drawnAt:-1/0})}c.floor&&h.add(new Ft(cs(c.floor,.007),this.solidMat));for(const f of c.shadows??[]){const p=new Ft(this.flatDisc(),this.rectShadowMat);p.scale.set(f.w,1,f.d);const _=this.sun.position,m=(f.lift??0)/_.y,g=-_.x*m,S=-_.z*m,E=Math.cos(l.angle),y=Math.sin(l.angle);p.position.set(f.x+g*E-S*y,0,f.z+g*y+S*E),h.add(p)}for(const f of c.pools??[]){const p=Bn(f.color,.3,{falloff:!0}),_=new Ft(this.flatDisc(),p);_.scale.set(f.rx*2,1,f.rz*2),_.position.set(f.x,0,f.z),h.add(_),this.glowPools.push(p)}this.stations.push(u);const d=l.zoneId;this.pointables.push({obj:h,caption:()=>"A DOOR INTO THE PAGE.",click:()=>this.cb.onOpen(d)}),this.scene.add(h),this.labelAnchors.push({zoneId:l.zoneId,pos:new U(l.x,c.height+.45,l.z)})}}moveCar(t,e){const r=_=>{const m=_n(_);return{x:m.x+m.nx*.75,z:m.z+m.nz*.75,p:m}},a=r(t.s),o=r(t.s-2.4),l=this.runner,c=!!l&&(Math.hypot(l.x-o.x,l.z-o.z)<1.7||Math.hypot(l.x-a.x,l.z-a.z)<1.6),h=c||this.reduceMotion?0:5;t.brake.visible=!this.reduceMotion&&(c||h<t.speed-.05),t.waited=c&&!this.reduceMotion?t.waited+e:0;const u=performance.now()/1e3;t.waited>1.4&&u-t.honked>4&&(t.honked=u,this.sfxAt("horn",t.solids[0]),this.tellOnce("honk"));const d=h<t.speed?14:3;t.speed=h>t.speed?Math.min(h,t.speed+d*e):Math.max(h,t.speed-d*e),t.s=(t.s-t.speed*e+Oe)%Oe;const f=r(t.s),p=this.camera?this.snapToPixels(f.x,f.z):f;t.group.position.set(p.x,0,p.z),t.group.rotation.y=Math.atan2(f.p.tz,-f.p.tx),t.solids.forEach((_,m)=>{const g=m===0?.55:-.55;_.x=f.x+f.p.tx*g,_.z=f.z+f.p.tz*g})}swayMaterial(t,e,n){const s=new jr({vertexColors:!0,gradientMap:this.gradient});t==="occluder"&&this.installSeeThrough(s);const r=s.onBeforeCompile.bind(s),a=this.swayTime,o=this.swayDir;return s.onBeforeCompile=(l,c)=>{r(l,c),l.uniforms.uSwayTime=a,l.uniforms.uSwayDir=o,l.vertexShader=`uniform float uSwayTime;
uniform vec2 uSwayDir;
`+l.vertexShader.replace("#include <project_vertex>",`vec4 mvPosition = vec4( transformed, 1.0 );
          #ifdef USE_INSTANCING
            mvPosition = instanceMatrix * mvPosition;
          #endif
          {
            float swayK = clamp((transformed.y - ${e.toFixed(3)}) / ${(n-e).toFixed(3)}, 0.0, 1.0);
            float gust = sin(uSwayTime * 1.7 + mvPosition.x * 0.31 + mvPosition.z * 0.17);
            mvPosition.xz += uSwayDir * floor(swayK * step(0.3, gust) + 0.5) / 16.0;
          }
          mvPosition = modelViewMatrix * mvPosition;
          gl_Position = projectionMatrix * mvPosition;`)},s.customProgramCacheKey=()=>`sway-${t}-${e}-${n}`,this.swayMats.push(s),s}buildRoadside(){const{posts:t,lamps:e}=l_(_u),n=(l,c)=>{const h=_n(l);return{p:h,x:h.x-h.nx*c,z:h.z-h.nz*c}};for(const l of t){const{x:c,z:h}=n(l.s,Ne.halfWidth+.7),u=this.add(Qt(W_(l.metres,qi)),this.occluderMat);u.position.set(c,0,h),u.updateMatrix(),this.facers.push(u),this.point(u,`${l.metres} METRES INTO THE LAP.`),this.solids.push({kind:"circle",x:c,z:h,r:.12})}const{pole:s,bulb:r}=X_(),a=Qt(s),o=Qt(r);for(const l of e){const{p:c,x:h,z:u}=n(l,Ne.halfWidth+.9),d=new gn;d.position.set(h,0,u),d.rotation.y=Math.atan2(-c.nz,c.nx);const f=new Ft(o,this.glowMat),p=new Ft(this.flatDisc(),Bn(16769955,.36,{falloff:!0}));p.scale.set(2.6,1,2),p.position.x=1,d.add(new Ft(a,this.occluderMat),f,p),this.scene.add(d),this.point(d,"A STREET LAMP."),this.lamps.push(f,p),this.solids.push({kind:"circle",x:h,z:u,r:.15})}}buildGlints(){for(let t=0;t<70;t++){const e=ua(Math.random()*Math.PI*2,1.05+Math.random()*.4);this.glintSpots.push({...e,phase:Math.random()})}this.glints=new Ti(new Pi(1,1,1),new zn({color:16777215}),this.glintSpots.length),this.glints.frustumCulled=!1,this.scene.add(this.glints),this.updateGlints(0)}updateGlints(t){const e=this.glints;if(!e)return;const n=new ce;this.glintSpots.forEach((s,r)=>{const a=this.reduceMotion?r%4===0:(t*.45+s.phase)%1<.12;n.makeScale(a?2/16:0,.01,a?.09:0),n.setPosition(s.x,-.34,s.z),e.setMatrixAt(r,n)}),e.instanceMatrix.needsUpdate=!0}installSeeThrough(t){const e=this.seeThrough;t.onBeforeCompile=n=>{n.uniforms.uSeeThrough=e,n.fragmentShader=`uniform vec4 uSeeThrough;
`+n.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
          {
            vec2 seeD = gl_FragCoord.xy - uSeeThrough.xy;
            if (dot(seeD, seeD) < uSeeThrough.z * uSeeThrough.z && gl_FragCoord.z < uSeeThrough.w - 0.0004) {
              if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.0) < 0.5) discard;
            }
          }`)},t.customProgramCacheKey=()=>"see-through"}makeCamera(){const t=this.look.yaw*Math.PI/180;this.axes={right:{x:Math.cos(t),z:-Math.sin(t)},up:{x:-Math.sin(t),z:-Math.cos(t)}},this.runnerMesh.rotation.y=t,this.runnerShadow.rotation.y=t,this.swayDir.value.set(this.axes.right.x,this.axes.right.z);for(const e of this.facers)e.rotation.y=t,e.matrixAutoUpdate||e.updateMatrix();return this.life?.setYaw(t),this.look.lens==="ortho"?new la(-1,1,1,-1,.1,400):new kn(30,1,1,400)}resize(){const t=Math.max(1,this.host.clientWidth),e=Math.max(1,this.host.clientHeight),n=Math.max(1,Math.floor(Math.min(t,e)/(this.look.rows*us[this.zoom]))),s=Math.ceil(t/n/2)*2,r=Math.ceil(e/n/2)*2;this.size={iw:s,ih:r,scale:n,left:Math.floor((t-s*n)/2),top:Math.floor((e-r*n)/2)},this.renderer.setSize(s,r,!1),Object.assign(this.canvas.style,{width:`${s*n}px`,height:`${r*n}px`,left:`${this.size.left}px`,top:`${this.size.top}px`});const a=s/2/Fn,o=r/2/Fn;this.camera instanceof la?Object.assign(this.camera,{left:-a,right:a,top:o,bottom:-o}):(this.camera.fov=2*Math.atan(o/lo)*180/Math.PI,this.camera.aspect=s/r),this.camera.updateProjectionMatrix(),this.running||this.renderOnce()}placeCamera(){const t=this.look.yaw*Math.PI/180,e=Math.cos(Oi)*lo,n=this.camera;if(n.position.set(this.focus.x+Math.sin(t)*e,Math.sin(Oi)*lo,this.focus.z+Math.cos(t)*e),n.lookAt(this.focus),n.updateMatrixWorld(),this.look.lens!=="ortho")return;const s=new U().setFromMatrixColumn(n.matrixWorld,0),r=new U().setFromMatrixColumn(n.matrixWorld,1),a=new U().setFromMatrixColumn(n.matrixWorld,2),o=n.position,l=d=>Math.round(d*Fn)/Fn,c=l(o.dot(s)),h=l(o.dot(r)),u=o.dot(a);n.position.copy(s.multiplyScalar(c)).add(r.multiplyScalar(h)).add(a.multiplyScalar(u)),n.updateMatrixWorld()}toScreen(t,e,n){const s=this.tmp.set(t,e,n).project(this.camera),{iw:r,ih:a,scale:o,left:l,top:c}=this.size;return{x:l+Math.round((s.x*.5+.5)*r)*o,y:c+Math.round((1-(s.y*.5+.5))*a)*o}}applySky(t){this.baseLight=t;const e=this.weather?.intensity??0;this.gradedAt=e;const n=Lv(t,e);this.weather?.setSky(n),this.paintSky(n)}paintSky(t){this.sun.color.setHex(t.sun),this.sun.intensity=t.sunI*Math.PI,this.shade.color.setHex(t.shade),this.shade.intensity=t.shadeI*Math.PI,this.seaMat.color.setHex(t.seaDeep),this.shallowMat.color.setHex(t.sea),this.foamMat.color.setHex(t.foam),this.glints?.material?.color.setHex(t.foam),this.renderer.setClearColor(t.seaDeep),this.runnerMat.color.setHex(t.sprite);const e=new qt(t.shade).multiplyScalar(.42);this.shadowMat.uniforms.uColor.value.copy(e),this.rectShadowMat.uniforms.uColor.value.copy(e),this.lampsLit=t.lamps;for(const n of this.stations)for(const{mesh:s,part:r}of n.parts)r.duskOnly&&(s.visible=t.lamps);for(const n of this.lamps)n.visible=t.lamps;for(const n of this.glowPools)n.uniforms.uDensity.value=t.lamps?.34:.16;this.life?.setSky(t),this.paintWater(t)}paintWater(t){const e=new qt(t.sea),n=new qt(t.foam),s=[e,e.clone().lerp(n,.45),n].map(a=>[a.r*255,a.g*255,a.b*255]),r=this.waterTex.image.data;Uv.forEach((a,o)=>r.set([...s[a],255],o*4)),this.waterTex.needsUpdate=!0}isTyping(t){const e=t.target;return!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT"||e.isContentEditable)}onKeyDown(t){if(!this.inputEnabled||this.isTyping(t)||t.metaKey||t.ctrlKey||t.altKey)return;let e=!0;switch(t.code){case"ArrowUp":case"KeyW":this.held.up=!0;break;case"ArrowDown":case"KeyS":this.held.down=!0;break;case"ArrowLeft":case"KeyA":this.held.left=!0;break;case"ArrowRight":case"KeyD":this.held.right=!0;break;case"ShiftLeft":case"ShiftRight":this.held.sprint=!0;break;case"Space":t.repeat||(this.jumpQueued=!0);break;case"KeyZ":t.repeat||this.setZoom((this.zoom+1)%us.length);break;case"Minus":this.setZoom(Math.min(us.length-1,this.zoom+1));break;case"Equal":this.setZoom(Math.max(0,this.zoom-1));break;case"KeyR":t.repeat||this.cb.onRespawn();break;default:e=!1}e&&t.preventDefault()}onKeyUp(t){switch(t.code){case"ArrowUp":case"KeyW":this.held.up=!1;break;case"ArrowDown":case"KeyS":this.held.down=!1;break;case"ArrowLeft":case"KeyA":this.held.left=!1;break;case"ArrowRight":case"KeyD":this.held.right=!1;break;case"ShiftLeft":case"ShiftRight":this.held.sprint=!1;break}}releaseKeys(){this.held.up=this.held.down=this.held.left=this.held.right=this.held.sprint=!1,this.jumpQueued=!1,this.drag=null,this.panTouch=null,this.stickTouch&&(this.stickTouch=null,this.reportStick())}onBlur(){this.releaseKeys()}onVisibility(){this.hidden=document.visibilityState==="hidden",this.hidden?(this.releaseKeys(),this.stop()):this.wake()}onPointerDown(t){if(this.inputEnabled){if(t.pointerType==="touch"){if(this.stickTouch)this.panTouch||(this.panTouch={id:t.pointerId,x:t.clientX,y:t.clientY});else{const e={x:t.clientX,y:t.clientY};this.stickTouch={id:t.pointerId,ox:e.x,oy:e.y,...e,t0:performance.now(),moved:0},this.reportStick()}return}t.button===0&&(this.drag={x:t.clientX,y:t.clientY},this.pointer={x:t.clientX,y:t.clientY,moved:0})}}panBy(t,e){const n=1/(this.size.scale*Fn),{right:s,up:r}=this.axes,a=-t*n,o=e*n/Math.sin(Oi);this.pan.x+=s.x*a+r.x*o,this.pan.z+=s.z*a+r.z*o;const l=Math.hypot(this.pan.x,this.pan.z);l>24&&this.pan.multiplyScalar(24/l)}onPointerMove(t){if(t.pointerType==="touch"){const s=this.stickTouch;s&&s.id===t.pointerId?(s.moved+=Math.abs(t.clientX-s.x)+Math.abs(t.clientY-s.y),s.x=t.clientX,s.y=t.clientY,this.reportStick()):this.panTouch&&this.panTouch.id===t.pointerId&&(this.panBy(t.clientX-this.panTouch.x,t.clientY-this.panTouch.y),this.panTouch={id:t.pointerId,x:t.clientX,y:t.clientY});return}if(t.target===this.canvas||this.drag?(this.hoverDirty=!0,this.pointer?this.pointer={...this.pointer,x:t.clientX,y:t.clientY}:this.pointer={x:t.clientX,y:t.clientY,moved:0}):this.lastCaption!==null&&(this.pointer=null,this.hoverDirty=!0),!this.drag)return;const e=t.clientX-this.drag.x,n=t.clientY-this.drag.y;this.drag={x:t.clientX,y:t.clientY},this.pointer&&(this.pointer.moved+=Math.abs(e)+Math.abs(n)),!(this.pointer&&this.pointer.moved<5)&&this.panBy(e,n)}onPointerUp(t){if(t.pointerType==="touch"){const n=this.stickTouch;n&&n.id===t.pointerId?(this.stickTouch=null,this.reportStick(),t.type==="pointerup"&&n.moved<12&&performance.now()-n.t0<350&&this.inputEnabled&&this.actAt(t.clientX,t.clientY,!0)):this.panTouch&&this.panTouch.id===t.pointerId&&(this.panTouch=null);return}const e=!this.drag||!this.pointer||this.pointer.moved>=5;this.drag=null,this.pointer&&(this.pointer.moved=0),!(e||t.target!==this.canvas||!this.inputEnabled)&&this.actAt(t.clientX,t.clientY,!1)}actAt(t,e,n){if(n&&(this.pointer={x:t,y:e,moved:0},this.lastCaption=null),this.hoverNow(),n&&(this.pointer=null),this.hovered?.click){this.hovered.click();return}const s=this.groundAt(t,e);s&&or(s.x,s.z)&&(this.goal=s,this.goalMarker.position.set(s.x,0,s.z))}reportStick(){const t=this.stickTouch;if(!t){this.cb.onStick(null);return}const e=Math.hypot(t.x-t.ox,t.y-t.oy);this.cb.onStick({ox:t.ox,oy:t.oy,x:t.x,y:t.y,sprint:e>zi*fa})}jump(){this.inputEnabled&&(this.jumpQueued=!0)}cycleZoom(){this.setZoom((this.zoom+1)%us.length)}onWheel(t){const e=performance.now();e-this.lastWheel<180||t.deltaY===0||(this.lastWheel=e,this.setZoom(Math.max(0,Math.min(us.length-1,this.zoom+(t.deltaY>0?1:-1)))))}readGamepad(t,e){const n=fs();if(this.padEdges.update(n),!n||!this.inputEnabled)return;const s=il(n,0,1);let r=s.x,a=-s.y;(Qe(n,le.LEFT)||Qe(n,le.RIGHT))&&(r=(Qe(n,le.RIGHT)?1:0)-(Qe(n,le.LEFT)?1:0)),(Qe(n,le.UP)||Qe(n,le.DOWN))&&(a=(Qe(n,le.UP)?1:0)-(Qe(n,le.DOWN)?1:0));const o=Qe(n,le.B)||(n.buttons[le.RT]?.value??0)>.5;!t.x&&!t.y&&(t.x=r,t.y=a),t.sprint||=o,this.padEdges.down(le.A)&&(this.jumpQueued=!0),this.padEdges.down(le.LB)&&this.setZoom(Math.min(us.length-1,this.zoom+1)),this.padEdges.down(le.RB)&&this.setZoom(Math.max(0,this.zoom-1)),this.padEdges.down(le.BACK)&&this.cb.onRespawn();const l=il(n,2,3);if(l.x||l.y){const{right:c,up:h}=this.axes;this.pan.x+=(c.x*l.x-h.x*l.y)*14*e,this.pan.z+=(c.z*l.x-h.z*l.y)*14*e;const u=Math.hypot(this.pan.x,this.pan.z);u>24&&this.pan.multiplyScalar(24/u)}(r||a||o||l.x||l.y||this.padEdges.anyDown())&&this.cb.onPad()}readStick(t){const e=this.stickTouch;if(!e||!this.inputEnabled||t.x||t.y)return;const n=e.x-e.ox,s=e.y-e.oy,r=Math.hypot(n,s);if(r<8)return;const a=Math.min(1,r/zi)/r;t.x=n*a,t.y=-s*a,r>zi*fa&&(t.sprint=!0)}setZoom(t){if(t!==this.zoom){this.zoom=t;try{localStorage.setItem(ah,String(t))}catch{}this.resize()}}ndc(t,e){const n=this.canvas.getBoundingClientRect();return new At((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1)}groundAt(t,e){this.raycaster.setFromCamera(this.ndc(t,e),this.camera);const n=this.raycaster.ray.intersectPlane(new ci(new U(0,1,0),0),new U);return n?{x:n.x,z:n.z}:null}hoverNow(){this.hoverDirty=!1,this.hoverAt=performance.now();let t=null;if(this.pointer&&this.inputEnabled){this.raycaster.setFromCamera(this.ndc(this.pointer.x,this.pointer.y),this.camera);const n=this.raycaster.intersectObjects(this.pointables.map(s=>s.obj),!0);for(const s of n){const r=s.object.material;if(r instanceof Cn&&"uDensity"in r.uniforms||!s.object.visible)continue;let a=s.object;for(;a&&!t;)t=this.pointables.find(o=>o.obj===a)??null,a=a.parent;if(t)break}}this.hovered=t;const e=t?t.caption():null;this.canvas.style.cursor=t?.click?"pointer":"",e!==this.lastCaption&&(this.lastCaption=e,this.cb.onHover(e))}onContextLost(t){t.preventDefault(),this.paused=!0,this.stop(),this.cb.onContextLost()}wake(){this.running||this.paused||this.hidden||(this.running=!0,this.last=performance.now(),this.raf=requestAnimationFrame(this.tick))}stop(){this.running=!1,cancelAnimationFrame(this.raf)}updateWeather(t,e){const n=this.weather;if(!n)return;const s=n.update(t,e/1e3,{x:this.focus.x,z:this.focus.z});(Math.abs(n.intensity-this.gradedAt)>.01||n.intensity===0&&this.gradedAt>0)&&this.applySky(this.baseLight);for(const a of s)for(const o of[-1,1])this.life?.particles.spawn({x:a.x,y:.01,z:a.z,vx:o*.5,vy:.9,vz:0,max:.16,size:1/16,gravity:6,color:15002872});const r=Math.round(n.intensity*20)/20;r!==this.lastRain&&(this.lastRain=r,this.cb.onRain(r))}setWeather(t){this.weather?.setMode(t,performance.now()/1e3)}updateLap(t){const e=this.runner,n=this.lap.update(t,e.x,e.z,this.inputEnabled),s={running:this.lap.running,time:Math.floor(this.lap.time*10)/10,best:this.lap.best,finished:n},r=`${s.running}|${s.time}|${s.best}`;(n||r!==this.lastLapReport)&&(this.lastLapReport=r,this.cb.onLap(s))}updateGhost(t){const e=this.lap.running?this.lap.ghostAt(this.lap.time):null;if(this.ghostMesh.visible=!!e,!e)return;const n=e.dx*this.axes.right.x+e.dz*this.axes.right.z,s=e.dx*this.axes.up.x+e.dz*this.axes.up.z,r=Math.abs(n)>=Math.abs(s)*.8?n>=0?"right":"left":s>0?"up":"down",o=Math.hypot(e.dx,e.dz)>.02?this.reduceMotion||Math.floor(t/130)%2?"a":"b":"stand",l=oh[r]*Bi.length+Bi.indexOf(o);this.ghostTex.offset.set(l/na,.5);const c=this.snapToPixels(e.x,e.z);this.ghostMesh.position.set(c.x,0,c.z),this.ghostMesh.scale.x=r==="left"?-1:1,this.ghostMesh.rotation.y=this.runnerMesh.rotation.y}tellOnce(t){this.told.has(t)||(this.told.add(t),this.cb.onEvent({kind:t}))}buildBanana(){const t=ua(-.62,.935),e=new gn,n=[0,1,2].flatMap(a=>[{x:-.12+a*.09,y:.02,z:-.16,w:.08,h:.08,d:.32,color:16767050},{x:-.12+a*.09,y:.08,z:-.22,w:.08,h:.08,d:.08,color:16767050},{x:-.12+a*.09,y:.08,z:.14,w:.08,h:.08,d:.08,color:16767050}]);n.push({x:-.12,y:.12,z:-.27,w:.26,h:.06,d:.06,color:7031342}),e.add(new Ft(Qt(n),this.occluderMat));const s=new Ft(Qt([{x:.12,y:.22,z:0,w:2/16,h:.1,d:.02,color:16774371}]),this.glowMat);e.add(s);const r=new Ft(this.flatDisc(),this.shadowMat);r.scale.set(.6,1,.4),e.add(r),e.position.set(t.x,0,t.z),this.scene.add(e),this.banana=e,this.point(e,"A BANANA?!")}hideBanana(){this.banana&&(this.banana.visible=!1),this.told.add("banana")}updateBanana(t){const e=this.banana,n=this.runner;!e||!e.visible||!n||(this.reduceMotion||(e.children[0].position.y=Math.floor(t/600)%2?1/16:0,e.children[1].visible=Math.floor(t/250)%8===0),Math.hypot(n.x-e.position.x,n.z-e.position.z)<.75&&(e.visible=!1,this.cb.onSfx("cup"),this.tellOnce("banana")))}setKit(t,e){this.kit={top:t,bottom:e};const n=this.runnerTex.image;lh(n,this.kit),this.runnerTex.needsUpdate=!0,this.ghostTex.needsUpdate=!0,this.running||this.renderOnce()}sfxAt(t,e){Math.abs(e.x-this.focus.x)<14&&Math.abs(e.z-this.focus.z)<12&&this.cb.onSfx(t)}nearest(){let t=this.landmarks[0],e=1/0;for(const n of this.landmarks){const s=Math.hypot(n.door.x-this.runner.x,n.door.z-this.runner.z);s<e&&(e=s,t=n)}return t}tick(t){if(!this.running)return;const e=Math.min((t-this.last)/1e3,1/30),n=t-this.last;this.last=t;for(const c of this.cars)this.moveCar(c,e);const s={x:(this.held.right?1:0)-(this.held.left?1:0),y:(this.held.up?1:0)-(this.held.down?1:0),sprint:this.held.sprint,jump:!1};if(this.readGamepad(s,e),this.readStick(s),(s.x||s.y||!this.inputEnabled||this.stuck.on)&&(this.goal=null),this.goal){const c=this.goal.x-this.runner.x,h=this.goal.z-this.runner.z,u=Math.hypot(c,h);u<.3?this.goal=null:(s.x=(c*this.axes.right.x+h*this.axes.right.z)/u,s.y=(c*this.axes.up.x+h*this.axes.up.z)/u)}if(this.goalMarker.visible=!!this.goal,this.goal){const c=this.reduceMotion||Math.floor(t/300)%2?.9:.7;this.goalMarker.scale.set(c,1,c*.75)}for(this.hoverDirty&&t-this.hoverAt>60&&this.hoverNow(),this.acc+=e,this.jumped=this.landed=!1;this.acc>=co;){s.jump=this.jumpQueued,this.jumpQueued=!1;const c=this.runner.airborne;this.runner=x_(this.runner,s,co,this.axes,this.solids,or),this.runner.airborne&&!c&&(this.jumped=!0,this.cb.onJump()),!this.runner.airborne&&c&&(this.landed=!0),this.acc-=co}const r=this.runner;r.moving&&!this.moved&&(this.moved=!0,this.cb.onMoved()),this.updateStuck(e,r.moving),this.updateLap(e),r.moving&&this.pan.multiplyScalar(Math.exp(-e*6));const a=r.x+this.pan.x+this.axes.up.x*Xr,o=r.z+this.pan.z+this.axes.up.z*Xr,l=1-Math.exp(-e*8);if(this.focus.x+=(a-this.focus.x)*l,this.focus.z+=(o-this.focus.z)*l,this.focus.x=Math.max(-Pn,Math.min(Pn,this.focus.x)),this.focus.z=Math.max(-xn,Math.min(xn,this.focus.z)),this.placeCamera(),this.animate(e,t),this.cycle){const c=(t-this.cycle.start)/this.cycleMs;this.applySky(pv(this.cycle.kind,c,this.cycleMid))}this.updateWeather(e,t),this.render(),this.report(e,n,t),this.raf=requestAnimationFrame(this.tick)}updateStuck(t,e){const n=this.stuck,s=this.runner;if(!e){n.timer=0,n.origin={x:s.x,z:s.z},n.on&&(n.on=!1,this.cb.onStuck(!1));return}n.timer+=t,Math.hypot(s.x-n.origin.x,s.z-n.origin.z)>.6?(n.timer=0,n.origin={x:s.x,z:s.z},n.on&&(n.on=!1,this.cb.onStuck(!1))):n.timer>1.6&&!n.on&&(n.on=!0,this.cb.onStuck(!0))}animate(t,e){const n=this.runner,s=Math.hypot(n.vx,n.vz);this.animClock+=t,(n.moving||n.airborne||s>.4)&&(this.stillSince=e);const r=(e-this.stillSince)/1e3;let a=r>4&&(r-4)%7<1.8?"watch":"stand";if(a==="watch"&&this.tellOnce("watch"),n.airborne)a="jump";else if(s>.4)if(this.reduceMotion)a="a";else{const f=n.sprinting?.11:.15;a=Math.floor(this.animClock/f)%2===0?"a":"b"}const o=oh[n.facing]*Bi.length+Bi.indexOf(a);this.runnerTex.offset.set(o/na,this.lampsLit?0:.5);const l=Math.floor(this.animClock/(n.sprinting?.11:.15));if(l!==this.stridePhase&&(this.stridePhase=l,!n.airborne&&s>.4&&t>0)){const f=da(n.x,n.z,-.25)?"wood":ea(n.x,n.z),p=(this.weather?.wetness??0)>.5&&(f==="road"||f==="grass");this.cb.onStep(p?"puddle":f)}const c=Math.round(n.h*Math.cos(Oi)*Fn)/(Math.cos(Oi)*Fn),h=this.snapToPixels(n.x,n.z);this.runnerMesh.position.set(h.x,c,h.z),this.runnerMesh.scale.x=n.facing==="left"?-1:1;const u=1-Math.min(n.h/1.5,.4);this.runnerShadow.position.set(h.x,0,h.z),this.runnerShadow.scale.set(.95*u,1,.5*u),this.lampPool.visible=this.lampsLit;const d=Iv[n.facing]+this.look.yaw*Math.PI/180;if(this.lampPool.position.set(h.x+Math.cos(d)*1.75,0,h.z-Math.sin(d)*1.75),this.lampPool.rotation.y=d,this.stirStations(t,e,!1),this.life?.update({dt:t,t:e/1e3,runner:n,jumped:this.jumped,landed:this.landed,lit:this.lampsLit,focus:{x:this.focus.x,z:this.focus.z},rain:this.weather?.intensity??0,wet:this.weather?.wetness??0}),this.jumped=this.landed=!1,this.updateGhost(e),this.questRoad&&n){const{year:f,rising:p}=this.questRoad.update(e/1e3,n.x,n.z);for(const _ of p)if(this.sfxAt("stone",_),!this.reduceMotion)for(let m=0;m<8;m++){const g=m/8*Math.PI*2;this.life?.particles.spawn({x:_.x+Math.cos(g)*.5,y:.05,z:_.z+Math.sin(g)*.3,vx:Math.cos(g)*1.2,vy:1,vz:Math.sin(g)*.6,max:.6,size:.125,gravity:2,color:13220239})}f!==this.lastYear&&(this.lastYear=f,this.cb.onYear(f)),p.length&&this.questRoad.allRisen()&&this.tellOnce("stones")}n&&n.z>ln.z1-1&&Math.abs(n.x-ln.x)<ln.halfWidth&&this.tellOnce("pier"),this.updateBanana(e),!this.reduceMotion&&(this.waterTex.offset.y=-Math.floor(e/85)/hn,this.swayTime.value=e/1e3,this.wash&&(this.wash.visible=Math.floor(e/850)%3===0),this.boat&&(this.boat.position.y=-.42+(Math.floor(e/760)%2?1/16:0)),this.updateGlints(e/1e3))}stirStations(t,e,n){const s=this.runner,r=this.reduceMotion?0:e/1e3,a=(e-this.openedAt)/1e3;for(const o of this.stations){if(!this.reduceMotion&&s){const u=Math.hypot(o.door.x-s.x,o.door.z-s.z)<Nv?1:0,d=t*1.6;o.wake=u>o.wake?Math.min(u,o.wake+d):Math.max(u,o.wake-d)}const l=Math.abs(o.centre.x-this.focus.x)<18&&Math.abs(o.centre.z-this.focus.z)<16;if(!n&&!l)continue;const c=o.zoneId==="skills"&&this.life?this.life.sinceCup(e/1e3):1/0,h={t:r,wake:o.wake,lit:this.lampsLit,elapsed:a,still:this.reduceMotion,since:c,lap:this.lap.running?this.lap.time:null,best:this.lap.best};if(n||!this.reduceMotion)for(const{mesh:u,part:d}of o.parts)d.duskOnly&&(u.visible=this.lampsLit),d.animate?.(u,h);for(const u of o.screens)!n&&e-u.drawnAt<1e3/u.screen.fps||(u.drawnAt=e,u.screen.draw(u.g,h),u.tex.needsUpdate=!0)}}snapToPixels(t,e){if(this.look.lens!=="ortho")return{x:t,z:e};const n=this.camera,s=new U().setFromMatrixColumn(n.matrixWorld,0),r=new U().setFromMatrixColumn(n.matrixWorld,1),a=new U(t,0,e),o=a.dot(s),l=a.dot(r),c=Math.round(o*Fn)/Fn-o,h=Math.round(l*Fn)/Fn-l,u=this.axes.up,d=h/Math.sin(Oi);return{x:t+s.x*c+u.x*d,z:e+s.z*c+u.z*d}}render(){const t=this.runner,e=this.tmp.set(this.runnerMesh.position.x,.6+t.h,this.runnerMesh.position.z).project(this.camera),{iw:n,ih:s}=this.size;this.seeThrough.value.set((e.x*.5+.5)*n,(e.y*.5+.5)*s,rh,e.z*.5+.5),this.renderer.render(this.scene,this.camera),this.weather?.render(this.renderer)}renderOnce(){this.placeCamera(),this.animate(0,performance.now()),this.render(),this.report(0,0,performance.now())}report(t,e,n){const s=this.nearest(),r=this.runner,o=(s?Math.hypot(s.door.x-r.x,s.door.z-r.z):1/0)<jx&&!r.airborne?s.zoneId:null;o!==this.lastPrompt&&(this.lastPrompt=o,this.cb.onPrompt(o)),s&&s.zoneId!==this.lastNearest&&(this.lastNearest=s.zoneId,this.cb.onNearest(s.zoneId));const l=Math.hypot(r.vx,r.vz);this.paceSpeed+=(l-this.paceSpeed)*Math.min(1,t*5);const c=r.moving?__(this.paceSpeed):null;c!==this.lastPace&&(this.lastPace=c,this.cb.onPace(c));const h=this.labelAnchors.map(({zoneId:d,pos:f})=>{const p=this.toScreen(f.x,f.y,f.z),_=p.x>0&&p.y>0&&p.x<this.host.clientWidth&&p.y<this.host.clientHeight;return{zoneId:d,x:p.x,y:p.y,onScreen:_}});this.cb.onFrame({labels:h,runner:this.runnerOnScreen(),world:{x:r.x,z:r.z}});const u=da(r.x,r.z)?1:Math.max(0,Math.min(1,(Qn(r.x,r.z)-.62)/.33));Math.abs(u-this.lastWaves)>.04&&(this.lastWaves=u,this.cb.onAmbience(u)),e>0&&(this.frameTimes.push(e),this.frameTimes.length>120&&this.frameTimes.shift(),n-this.frameTimeAt>500&&(this.frameTimeAt=n,this.cb.onFrameTime(this.frameTimes.reduce((d,f)=>d+f,0)/this.frameTimes.length)))}}const pa=[{id:"first-steps",name:"FIRST STEPS",hint:"Take your first stride on the island."},{id:"sightseer",name:"SIGHTSEER",hint:"Stand at every Landmark's door.",needs:ia.length},{id:"door",name:"THROUGH THE DOOR",hint:"Open a Landmark."},{id:"travel",name:"FAST TRAVEL",hint:"Jump to a Landmark from the map."},{id:"finisher",name:"FINISHER",hint:"Run a full Lap."},{id:"negative-split",name:"NEGATIVE SPLIT",hint:"Beat your best Lap."},{id:"sub-60",name:"SUB-60",hint:"Run a Lap in under a minute."},{id:"hydrated",name:"HYDRATED",hint:"Grab a cup at the aid station on the run."},{id:"herd",name:"HERD WHISPERER",hint:"Get a moo out of every cow.",needs:5},{id:"birds",name:"BIRDWATCHER",hint:"Send a flock into the air."},{id:"crab",name:"SIDESTEP",hint:"Spook a crab into the sand."},{id:"pier",name:"END OF THE PIER",hint:"Run to the end of the pier."},{id:"historian",name:"HISTORIAN",hint:"Raise every stone on the Quest Road."},{id:"skies",name:"DUSK TO DAWN",hint:"Run the island under both skies.",needs:2},{id:"rain",name:"RAIN RUNNER",hint:"Finish a Lap in the rain."},{id:"honk",name:"ROAD SENSE",hint:"Get honked at. Then move."},{id:"watch",name:"SPLIT CHECK",hint:"Stand still long enough to check your watch."},{id:"banana",name:"BANANA",hint:"Somewhere on the island.",secret:!0,cheer:"Yep, that's my banana."}],ps=[{id:"race",name:"RACE KIT",needs:0,top:"#FF9A4A",bottom:"#7EC8E8"},{id:"dawn",name:"DAWN KIT",needs:4,top:"#7EC8E8",bottom:"#FFF4E3"},{id:"sunset",name:"SUNSET KIT",needs:8,top:"#C2366B",bottom:"#FFC94D"},{id:"night",name:"NIGHT KIT",needs:12,top:"#6E55A8",bottom:"#7EC8E8"},{id:"gold",name:"GOLD KIT",needs:pa.length,top:"#FFC94D",bottom:"#FFF4E3"}],ch="roam-medals";class Ov{data={earned:{},sets:{},kit:"race"};constructor(){try{const t=localStorage.getItem(ch);if(!t)return;const e=JSON.parse(t),n=new Set(pa.map(s=>s.id));for(const[s,r]of Object.entries(e.earned??{}))n.has(s)&&typeof r=="number"&&(this.data.earned[s]=r);for(const[s,r]of Object.entries(e.sets??{}))n.has(s)&&Array.isArray(r)&&(this.data.sets[s]=r.filter(a=>typeof a=="string"));ps.some(s=>s.id===e.kit)&&(this.data.kit=e.kit),this.unlocked(this.data.kit)||(this.data.kit="race")}catch{}}has(t){return this.data.earned[t]!==void 0}count(){return Object.keys(this.data.earned).length}progress(t){return this.data.sets[t]?.length??0}record(t,e){const n=pa.find(a=>a.id===t);if(!n||this.has(t))return null;if(n.needs){const a=new Set(this.data.sets[t]??[]);if(e===void 0||a.has(e))return null;if(a.add(e),this.data.sets[t]=[...a],a.size<n.needs)return this.save(),null}const s=this.count();this.data.earned[t]=Date.now(),this.save();const r=ps.filter(a=>a.needs>s&&a.needs<=s+1);return{medal:n,kits:r}}unlocked(t){const e=ps.find(n=>n.id===t);return!!e&&this.count()>=e.needs}kit(){return ps.find(t=>t.id===this.data.kit)??ps[0]}setKit(t){this.unlocked(t)&&(this.data.kit=t,this.save())}save(){try{localStorage.setItem(ch,JSON.stringify(this.data))}catch{}}}const ma=6,ki=Pn*2+ma*2,xs=xn*2+ma*2,ui=i=>({x:i.x+Pn+ma,y:i.z+xn+ma});function Eu(i){const t=i.getContext("2d");if(!t)return;t.imageSmoothingEnabled=!1,t.fillStyle="#3E2A73",t.fillRect(0,0,ki,xs);const e=(c,h)=>{t.fillStyle=h,t.beginPath(),c.forEach((u,d)=>{const f=ui(u);d===0?t.moveTo(f.x,f.y):t.lineTo(f.x,f.y)}),t.closePath(),t.fill()};e(An(1.14),"#55408F"),e(An(1),"#E8D2A2"),e(An(Tn),"#6E9A55");const n=[];for(let c=0;c<32;c++){const h=c/32*Math.PI*2;n.push({x:Jt.x+Math.cos(h)*Jt.rx,z:Jt.z+Math.sin(h)*Jt.rz})}e(n,"#7EC8E8");const s=ui({x:se.x-se.baseHalfX,z:se.z-se.baseHalfZ});t.fillStyle="#4F6852",t.fillRect(s.x,s.y,se.baseHalfX*2,se.baseHalfZ*2),t.fillStyle="#6F6A80",t.fillRect(s.x+10,s.y+4,se.baseHalfX*2-26,se.baseHalfZ*2-8);const r=ui({x:On.x,z:se.z-2});t.fillStyle="#A8D4E8",t.fillRect(Math.round(r.x)-1,Math.round(r.y),2,Math.round(se.baseHalfZ+2));const a=[];for(let c=0;c<20;c++){const h=c/20*Math.PI*2;a.push({x:an.x+Math.cos(h)*an.rx,z:an.z+Math.sin(h)*an.rz})}e(a,"#7EC8E8");const o=ui({x:ln.x-ln.halfWidth,z:ln.z0});t.fillStyle="#9C7452",t.fillRect(Math.round(o.x),Math.round(o.y),2,Math.round(ln.z1-ln.z0));const l=ui({x:ze.minX,z:ze.minZ});t.fillStyle="#82AD62",t.fillRect(l.x,l.y,ze.maxX-ze.minX,ze.maxZ-ze.minZ),t.fillStyle="#4E4A5E";for(let c=0;c<Oe;c+=.5){const h=ui(_n(c));t.fillRect(Math.round(h.x)-1,Math.round(h.y)-1,3,3)}}function zv({landmarks:i,dotRef:t,onOpen:e}){const n=lt.useRef(null);return lt.useEffect(()=>{const s=n.current;if(!s)return;Eu(s);const r=s.getContext("2d");if(r){r.fillStyle="#FFC94D";for(const a of i){const o=ui({x:a.x,z:a.z});r.fillRect(Math.round(o.x)-2,Math.round(o.y)-2,4,4)}}},[i]),O.jsx("button",{onClick:e,"aria-label":"Open the map",className:"hidden md:block fixed left-6 bottom-6 z-[65] pixel-border bg-dusk-950/90 mx-1 p-1.5 focus-ring",children:O.jsxs("span",{className:"relative block",style:{width:ki,height:xs},children:[O.jsx("canvas",{ref:n,width:ki,height:xs,className:"crisp block","aria-hidden":"true"}),O.jsx("span",{ref:t,"aria-hidden":"true",className:"absolute w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 bg-sunset-500 animate-blink"})]})})}function Bv({landmarks:i,runner:t,onTravel:e,onClose:n}){const s=lt.useRef(null),r=lt.useRef(null);lt.useEffect(()=>{s.current&&Eu(s.current),r.current?.focus()},[]);const a=ia.filter(l=>i.some(c=>c.zoneId===l.id)),o=ui(t);return O.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-dusk-950/70 px-4",onClick:n,children:O.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"roam-map-title",className:"pixel-border bg-dusk-900 mx-1 p-4 md:p-6 flex flex-col md:flex-row gap-5 md:gap-8 max-h-full overflow-auto",onClick:l=>l.stopPropagation(),children:[O.jsxs("div",{className:"relative shrink-0 self-center",style:{width:ki*2,maxWidth:"100%"},children:[O.jsx("canvas",{ref:s,width:ki,height:xs,className:"crisp block w-full h-auto","aria-hidden":"true"}),a.map((l,c)=>{const h=i.find(d=>d.zoneId===l.id),u=ui({x:h.x,z:h.z});return O.jsx("button",{tabIndex:-1,"aria-hidden":"true",onClick:()=>e(l.id),title:l.zoneName,className:"absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gold-400 hover:bg-gold-300 text-dusk-950 font-arcade text-[9px] flex items-center justify-center",style:{left:`${u.x/ki*100}%`,top:`${u.y/xs*100}%`},children:c+1},l.id)}),O.jsx("span",{"aria-hidden":"true",className:"absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-sunset-500 animate-blink",style:{left:`${o.x/ki*100}%`,top:`${o.y/xs*100}%`}})]}),O.jsxs("div",{className:"min-w-[14rem]",children:[O.jsx("h2",{id:"roam-map-title",className:"font-arcade text-[11px] text-gold-400",children:"MAP"}),O.jsx("p",{className:"mt-3 font-body text-sm text-mist-300",children:"Fast travel to a Landmark."}),O.jsx("ol",{className:"mt-4 space-y-2",children:a.map((l,c)=>O.jsx("li",{children:O.jsxs("button",{ref:c===0?r:void 0,onClick:()=>e(l.id),className:"group w-full text-left font-arcade text-[9px] md:text-[10px] text-cream-100 hover:text-gold-300 focus-ring py-1",children:[O.jsx("span",{className:"text-gold-400",children:c+1})," ",O.jsx("span",{className:"opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",children:"▸"})," ",l.zoneName]})},l.id))}),O.jsxs("p",{className:"mt-5 font-arcade text-[8px] text-mist-300",children:[O.jsx("span",{className:"inline-block w-2 h-2 bg-sunset-500 mr-2","aria-hidden":"true"}),"YOU · M OR ESC TO CLOSE"]}),O.jsx("button",{onClick:n,className:"mt-4 font-arcade text-[9px] text-gold-400 hover:text-gold-300 focus-ring",children:"▸ CLOSE MAP"})]})]})})}const kv=[["WASD / ARROWS","Run"],["SHIFT","Sprint"],["SPACE","Jump"],["ENTER / E","Open a Landmark"],["CLICK","Run there, or open what you click"],["M","Map"],["Z / WHEEL","Zoom out and in"],["R","Back to the nearest Landmark"],["DRAG","Look around"],["ESC","Menu"]],hh={yaw:[[0,"STRAIGHT"],[45,"45°"]],lens:[["ortho","FLAT"],["perspective","DEPTH"]],rows:[[180,"320×180"],[270,"480×270"]],tones:[[2,"TWO"],[3,"THREE"]]},Hv={yaw:"ANGLE",lens:"LENS",rows:"PIXELS",tones:"TONES"};function Gv({muted:i,sky:t,look:e,showLook:n,frameMs:s,onResume:r,onToggleSound:a,onToggleSky:o,weather:l,onWeather:c,onLook:h,onExit:u,medals:d,medalCount:f,kits:p,kit:_,onKit:m,pad:g}){const S=lt.useRef(null);lt.useEffect(()=>S.current?.focus(),[]);const E="group block w-full text-left font-arcade text-[10px] md:text-[11px] text-cream-100 hover:text-gold-300 focus-ring py-1.5",y=O.jsx("span",{className:"opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",children:"▸ "});return O.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-dusk-950/70 px-4",onClick:r,children:O.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"roam-menu-title",className:"pixel-border bg-dusk-900 mx-1 p-6 md:p-8 w-full max-w-lg max-h-full overflow-auto",onClick:T=>T.stopPropagation(),children:[O.jsx("h2",{id:"roam-menu-title",className:"font-pixel font-bold text-3xl text-cream-100",children:"PAUSED"}),O.jsxs("div",{className:"mt-5 space-y-1",children:[O.jsxs("button",{ref:S,onClick:r,className:E,children:[y,"RESUME"]}),O.jsxs("button",{onClick:a,className:E,children:[y,"SOUND: ",i?"OFF":"ON"]}),O.jsxs("button",{onClick:o,className:E,children:[y,"SKY: ",t==="dusk"?"DUSK":"DAWN"]}),O.jsxs("button",{onClick:c,className:E,children:[y,"WEATHER: ",l==="auto"?"AUTO (SHOWERS)":l==="rain"?"RAIN":"CLEAR"]}),O.jsxs("button",{onClick:u,className:E,children:[y,"EXIT THE OVERWORLD"]})]}),n&&O.jsxs(O.Fragment,{children:[O.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"LOOK (PROTOTYPE)"}),O.jsxs("div",{className:"mt-3 space-y-2",children:[Object.keys(hh).map(T=>O.jsxs("div",{className:"flex items-center gap-3",children:[O.jsx("span",{className:"w-16 font-arcade text-[8px] text-mist-300",children:Hv[T]}),hh[T].map(([R,x])=>O.jsx("button",{"aria-pressed":e[T]===R,onClick:()=>h({...e,[T]:R}),className:`font-arcade text-[8px] px-2 py-1 focus-ring ${e[T]===R?"bg-gold-400 text-dusk-950":"bg-dusk-800 text-cream-100"}`,children:x},String(R)))]},T)),O.jsxs("p",{className:"font-arcade text-[8px] text-mist-300",children:["FRAME ",s?s.toFixed(1):"--"," MS"]})]})]}),O.jsxs("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:["MEDALS"," ",O.jsxs("span",{className:"text-mist-300",children:[f,"/",d.length]})]}),O.jsx("ul",{className:"mt-3 grid sm:grid-cols-2 gap-x-4 gap-y-2",children:d.map(T=>{const R=T.secret&&!T.earned;return O.jsxs("li",{className:"flex items-start gap-2",children:[O.jsx("span",{"aria-hidden":"true",className:`mt-0.5 inline-block w-3 h-3 shrink-0 ${T.earned?"bg-gold-400":"bg-dusk-700"}`}),O.jsxs("span",{className:"min-w-0",children:[O.jsxs("span",{className:`block font-arcade text-[8px] ${T.earned?"text-cream-100":"text-mist-300"}`,children:[R?"???":T.name,O.jsx("span",{className:"sr-only",children:T.earned?" (earned)":" (not yet)"})]}),O.jsxs("span",{className:"block font-body text-xs text-mist-300",children:[R?"A secret.":T.earned&&T.cheer?T.cheer:T.hint,!T.earned&&T.needs?` ${T.progress}/${T.needs}`:""]})]})]},T.id)})}),O.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"KIT"}),O.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:p.map(T=>O.jsxs("button",{disabled:!T.unlocked,"aria-pressed":_===T.id,onClick:()=>m(T.id),className:`flex items-center gap-2 font-arcade text-[8px] px-2 py-1.5 focus-ring disabled:opacity-50 ${_===T.id?"bg-gold-400 text-dusk-950":"bg-dusk-800 text-cream-100 hover:text-gold-300"}`,children:[O.jsxs("span",{"aria-hidden":"true",className:"inline-flex",children:[O.jsx("span",{className:"inline-block w-2 h-2",style:{background:T.top}}),O.jsx("span",{className:"inline-block w-2 h-2",style:{background:T.bottom}})]}),T.unlocked?T.name:`${T.name} · ${T.needs} MEDALS`]},T.id))}),O.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"CONTROLS"}),O.jsx("table",{className:"mt-3 w-full font-body text-sm",children:O.jsx("tbody",{children:kv.map(([T,R])=>O.jsxs("tr",{children:[O.jsx("td",{className:"py-1 pr-4 font-arcade text-[8px] text-gold-300 whitespace-nowrap",children:T}),O.jsx("td",{className:"py-1 text-mist-300",children:R})]},T))})}),O.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"TOUCH"}),O.jsx("table",{className:"mt-3 w-full font-body text-sm",children:O.jsx("tbody",{children:[["DRAG","Run, the way you drag (further is faster)"],["DRAG FAR","Sprint"],["TAP","Run there, or open what you tap"],["JUMP","Jump"],["TWO FINGERS","Look around"],["ZOOM","Zoom out and in"]].map(([T,R])=>O.jsxs("tr",{children:[O.jsx("td",{className:"py-1 pr-4 font-arcade text-[8px] text-gold-300 whitespace-nowrap",children:T}),O.jsx("td",{className:"py-1 text-mist-300",children:R})]},T))})}),O.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"GAMEPAD"}),O.jsx("table",{className:"mt-3 w-full font-body text-sm",children:O.jsx("tbody",{children:[["LEFT STICK / D-PAD","Run (tilt gently to jog)"],[`${g.B} / RT`,"Sprint"],[g.A,"Jump"],[g.X,"Open a Landmark"],[g.Y,"Map"],["LB / RB","Zoom out and in"],["RIGHT STICK","Look around"],[g.BACK,"Back to the nearest Landmark"],[g.START,"Menu"]].map(([T,R])=>O.jsxs("tr",{children:[O.jsx("td",{className:"py-1 pr-4 font-arcade text-[8px] text-gold-300 whitespace-nowrap",children:T}),O.jsx("td",{className:"py-1 text-mist-300",children:R})]},R))})})]})})}const bu="roam-look",wu="roam-weather";function Vv(){try{const i=localStorage.getItem(wu);return i==="clear"||i==="rain"?i:"auto"}catch{return"auto"}}const Tu=new URLSearchParams(window.location.search).has("look");function Wv(){if(!Tu)return oo;try{const i=localStorage.getItem(bu);if(!i)return oo;const t=JSON.parse(i);return{yaw:t.yaw===45?45:0,lens:t.lens==="perspective"?"perspective":"ortho",rows:t.rows===270?270:180,tones:t.tones===3?3:2}}catch{return oo}}const Os=()=>new Promise(i=>requestAnimationFrame(()=>i())),Xv=Pn+6,qv=xn+6,qr={left:30,right:30,top:100,bottom:88};function Yv(i,t,e,n){const s=e/2,r=n/2,a=i-s,o=t-r,l=a>0?(e-qr.right-s)/a:a<0?(qr.left-s)/a:1/0,c=o>0?(n-qr.bottom-r)/o:o<0?(qr.top-r)/o:1/0,h=Math.min(l,c),u=Math.round(Math.atan2(o,a)*180/Math.PI/45)*45;return{x:Math.round(s+a*h),y:Math.round(r+o*h),angle:u}}function Kv(i){const t=lt.useRef(null),e=lt.useRef(0),n=lt.useCallback((h,u,d)=>{const f=t.current;if(!f)return;f.style.display="block";const p=d===null?"none":`radial-gradient(circle at ${h}px ${u}px, transparent ${d}px, #000 ${d+1}px)`;f.style.maskImage=p,f.style.setProperty("-webkit-mask-image",p)},[]),s=lt.useCallback(()=>{t.current&&(t.current.style.display="none")},[]),r=lt.useCallback((h,u,d,f,p)=>new Promise(_=>{cancelAnimationFrame(e.current);const m=performance.now(),g=S=>{const E=Math.min(1,(S-m)/p);n(d,f,Math.round((h+(u-h)*E)/12)*12),E<1?e.current=requestAnimationFrame(g):_()};e.current=requestAnimationFrame(g)}),[n]),a=(h,u)=>Math.hypot(Math.max(h,window.innerWidth-h),Math.max(u,window.innerHeight-u))+12,o=lt.useCallback(async(h,u)=>{i||await r(a(h,u),0,h,u,380),n(0,0,null)},[i,r,n]),l=lt.useCallback(async(h,u)=>{i||await r(0,a(h,u),h,u,440),s()},[i,r,s]),c=lt.useCallback(()=>n(0,0,null),[n]);return lt.useEffect(()=>()=>cancelAnimationFrame(e.current),[]),lt.useMemo(()=>({ref:t,close:o,open:l,cover:c}),[o,l,c])}function zs({glyph:i}){return O.jsx("span",{className:"inline-block border border-gold-400 text-gold-400 px-1 leading-tight",children:i})}function uh(i){const t=document.querySelector('[role="dialog"][aria-modal="true"]');if(!t)return;const e=Array.from(t.querySelectorAll("button:not([disabled]), a[href]")).filter(r=>r.offsetParent!==null&&r.tabIndex>=0&&r.getAttribute("aria-hidden")!=="true");if(e.length===0)return;const n=e.indexOf(document.activeElement),s=e[(n+i+e.length)%e.length];s.focus({focusVisible:!0}),s.scrollIntoView({block:"nearest"})}const Zv=i=>{const t=i.target;return!!t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT"||t.isContentEditable)};function $v(){const i=Ku(),{view:t,doorZone:e,arrival:n,startedByGesture:s,setCovering:r,reportNearest:a}=i,{theme:o,cycle:l,toggle:c}=Zu(),{muted:h,toggleMuted:u,playSfx:d,playStep:f,setAmbience:p,setMode:_}=Ju(),[m]=lt.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches),[g]=lt.useState(()=>new URLSearchParams(window.location.search).has("look")),S=lt.useRef(null),E=lt.useRef(null),y=Kv(m),T=lt.useRef(new Map),[R,x]=lt.useState(!1),[b,k]=lt.useState("loading"),[N,F]=lt.useState(null),[G,J]=lt.useState(null),[D,K]=lt.useState("title"),[j,X]=lt.useState(null),[rt,Y]=lt.useState(!1),[et,it]=lt.useState(!1),[yt,Dt]=lt.useState("none"),[Q,vt]=lt.useState(0),[wt,Ot]=lt.useState(null),[_t,Wt]=lt.useState(null),[be,Bt]=lt.useState(null),re=lt.useRef(0),ae=lt.useRef(null);ae.current||(ae.current=new Ov);const Ht=ae.current,[ye,Re]=lt.useState([]),[Xe,Me]=lt.useState(()=>Ht.count()),[pe,Pe]=lt.useState(()=>xr.pad?ao(fs()):null),[Ce,cn]=lt.useState(()=>!xr.pad&&window.matchMedia("(pointer: coarse)").matches),qe=lt.useRef(Ce),I=lt.useRef(null),en=lt.useRef(null),de=lt.useRef(pe),ge=lt.useCallback(()=>{xr.pad=!0,!de.current&&(de.current=ao(fs()),Pe(de.current))},[]);lt.useEffect(()=>{const ht=Mt=>{xr.pad=!1;const Zt=Mt instanceof PointerEvent&&Mt.pointerType==="touch";qe.current!==Zt&&(qe.current=Zt,cn(Zt)),de.current&&(de.current=null,Pe(null))};return window.addEventListener("keydown",ht),window.addEventListener("pointerdown",ht),()=>{window.removeEventListener("keydown",ht),window.removeEventListener("pointerdown",ht)}},[]);const ft=lt.useCallback((ht,Mt,Zt)=>{de.current&&wv(fs(),ht,Mt,Zt)},[]),[Le,zt]=lt.useState(()=>Ht.kit().id),kt=lt.useRef(0),A=lt.useRef(null),v=lt.useRef(()=>{});v.current=(ht,Mt)=>{const Zt=Ht.record(ht,Mt);if(!Zt)return;d("medal"),ft(160,.3,.6),Me(Ht.count());const Ie=[{key:++kt.current,title:`MEDAL · ${Zt.medal.name}`,line:Zt.medal.cheer??Zt.medal.hint}];for(const Sn of Zt.kits)Ie.push({key:++kt.current,title:`${Sn.name} UNLOCKED`,line:"Wear it from the menu."});Re(Sn=>[...Sn,...Ie])};const z=lt.useCallback((ht,Mt)=>v.current(ht,Mt),[]);lt.useEffect(()=>{if(ye.length===0)return;const ht=window.setTimeout(()=>Re(Mt=>Mt.slice(1)),3400);return()=>window.clearTimeout(ht)},[ye]);const[nt,tt]=lt.useState(Wv),[ct,pt]=lt.useState(Vv),V=lt.useRef({roam:i,panel:yt,playSfx:d,playStep:f,setAmbience:p,view:t,theme:o,openDoor:(ht=>{})});V.current={...V.current,roam:i,panel:yt,playSfx:d,playStep:f,setAmbience:p,view:t,theme:o};const Z=lt.useRef(null),ut=lt.useRef(0),P=lt.useRef(null),$=lt.useRef(0),q=lt.useRef(0),dt=lt.useRef(Promise.resolve()),st=lt.useRef(!1),ot=lt.useCallback(ht=>{dt.current=dt.current.then(async()=>{st.current=!0;try{await ht()}finally{st.current=!1}})},[]),Nt=lt.useRef(()=>{}),Kt=lt.useRef(nt);Kt.current=nt;const at=lt.useRef(o);at.current=o,lt.useEffect(()=>{const ht=S.current;if(!ht)return;const Mt={onPrompt:Rt=>{J(Rt),Rt&&(V.current.playSfx("prompt"),v.current("sightseer",Rt))},onNearest:Rt=>{K(Rt),a(Rt)},onPace:X,onStuck:Y,onRespawn:()=>Nt.current(),onMoved:()=>{it(!0),v.current("first-steps")},onJump:()=>V.current.playSfx("jump"),onSfx:Rt=>V.current.playSfx(Rt),onLap:Rt=>{if(Ot(Rt.running||Rt.best!==null?Rt:null),Rt.finished){const jt=Rt.finished;V.current.playSfx(jt.newBest?"best":"lap"),ft(jt.newBest?320:180,.5,.8),Wt(jt),window.clearTimeout(re.current),re.current=window.setTimeout(()=>Wt(null),3600),v.current("finisher"),jt.newBest&&A.current!==null&&v.current("negative-split"),jt.time<60&&v.current("sub-60"),q.current>=.5&&v.current("rain")}A.current=Rt.best},onYear:Bt,onEvent:Rt=>{const jt=v.current;Rt.kind==="moo"?jt("herd",String(Rt.cow)):Rt.kind==="birds"?jt("birds"):Rt.kind==="crab"?jt("crab"):Rt.kind==="cup"?jt("hydrated"):Rt.kind==="pier"?jt("pier"):Rt.kind==="stones"?jt("historian"):Rt.kind==="honk"?jt("honk"):Rt.kind==="watch"?jt("watch"):Rt.kind==="banana"&&jt("banana")},onFrame:Rt=>{const jt=P.current;jt&&(jt.style.left=`${(Rt.world.x/(2*Xv)+.5)*100}%`,jt.style.top=`${(Rt.world.z/(2*qv)+.5)*100}%`);const Wn=window.innerWidth,Ye=window.innerHeight;for(const xe of Rt.labels){const Ve=T.current.get(xe.zoneId);if(Ve)if(Ve.style.visibility="visible",xe.onScreen)Ve.dataset.pin="false",Ve.style.transform=`translate(${xe.x}px, ${xe.y}px) translate(-50%, -100%)`;else{const M=Yv(xe.x,xe.y,Wn,Ye);Ve.dataset.pin="true",Ve.style.setProperty("--pin-angle",`${M.angle}deg`),Ve.style.transform=`translate(${M.x}px, ${M.y}px) translate(-50%, -50%)`}}},onFrameTime:vt,onContextLost:()=>F("The graphics device stopped responding."),onStep:Rt=>V.current.playStep(Rt),onAmbience:Rt=>{$.current=Rt,V.current.setAmbience({waves:Rt,dusk:V.current.theme==="dusk",rain:q.current})},onPad:ge,onHover:Rt=>{const jt=Z.current;jt&&(jt.textContent=Rt??"",jt.style.display=Rt?"block":"none",window.clearTimeout(ut.current),Rt&&qe.current&&(ut.current=window.setTimeout(()=>jt.style.display="none",1600)))},onStick:Rt=>{const jt=I.current,Wn=en.current;if(!jt||!Wn||(jt.style.display=Wn.style.display=Rt?"block":"none",!Rt))return;const Ye=Rt.x-Rt.ox,xe=Rt.y-Rt.oy,Ve=Math.hypot(Ye,xe),M=Ve>zi*fa?zi*fa/Ve:1;jt.style.transform=`translate(${Rt.ox}px, ${Rt.oy}px) translate(-50%, -50%)`,Wn.style.transform=`translate(${Rt.ox+Ye*M}px, ${Rt.oy+xe*M}px) translate(-50%, -50%)`,Wn.dataset.sprint=String(Rt.sprint)},onOpen:Rt=>V.current.openDoor(Rt),onRain:Rt=>{q.current=Rt,V.current.setAmbience({waves:$.current,dusk:V.current.theme==="dusk",rain:Rt})}};let Zt;try{Zt=new Fv(ht,{zoneIds:ia.map(Rt=>Rt.id),look:Kt.current,reduceMotion:m,sky:at.current},Mt)}catch{F("This browser couldn't start WebGL2.");return}E.current=Zt,Zt.setInputEnabled(!1);const Ie=ae.current?.kit();Ie&&Zt.setKit(Ie.top,Ie.bottom),ae.current?.has("banana")&&Zt.hideBanana(),x(!0);const Sn=window;return new URLSearchParams(window.location.search).has("look")&&(Sn.__overworld=Zt),()=>{Zt.dispose(),E.current=null,delete Sn.__overworld,window.clearTimeout(re.current)}},[]),lt.useEffect(()=>{R&&k(s?"live":"start")},[R]),lt.useEffect(()=>{E.current?.setSky(o,l,$u,Qu)},[o,l,R]);const It=b==="live"&&!N&&t==="overworld";lt.useEffect(()=>{if(It)return _("roam"),()=>_("browse")},[It,_]),lt.useEffect(()=>{if(It)return p({waves:$.current,dusk:o==="dusk",rain:q.current}),()=>p(null)},[It,o,p]),lt.useEffect(()=>{!It&&Z.current&&(Z.current.style.display="none")}),lt.useEffect(()=>{const ht=Mt=>{const Zt=Z.current;Zt&&(Zt.style.transform=`translate(${Mt.clientX+14}px, ${Mt.clientY+16}px)`)};return window.addEventListener("pointermove",ht),window.addEventListener("pointerdown",ht),()=>{window.removeEventListener("pointermove",ht),window.removeEventListener("pointerdown",ht)}},[]),lt.useEffect(()=>{et&&b==="live"&&t==="overworld"&&z("skies",o)},[et,b,t,o,z]),lt.useEffect(()=>{if(R){E.current?.setWeather(ct);try{localStorage.setItem(wu,ct)}catch{}}},[ct,R]),lt.useEffect(()=>{if(E.current?.setLook(nt),!!Tu)try{localStorage.setItem(bu,JSON.stringify(nt))}catch{}},[nt]);const Gt=lt.useRef("none"),xt=lt.useRef(!1),he=lt.useCallback(async()=>{const ht=E.current;if(!ht)return;Gt.current==="door"?await y.close(window.innerWidth/2,window.innerHeight/2):y.cover(),r(!0);const{arrivalZone:Mt}=V.current.roam;ht.placeAt(Mt,Gt.current==="none"&&Mt==="title"?"right":"down"),S.current&&(S.current.style.visibility="visible"),ht.resume(),Gt.current="overworld",await Os(),await Os();const Zt=ht.runnerOnScreen();await y.open(Zt.x,Zt.y),ht.setInputEnabled(V.current.panel==="none")},[y,r]),De=lt.useCallback(async ht=>{const Mt=E.current;if(Mt){if(Gt.current==="overworld"&&!xt.current){const Zt=Mt.runnerOnScreen();await y.close(Zt.x,Zt.y)}else y.cover();xt.current=!1,Mt.pause(),Dt("none"),S.current&&(S.current.style.visibility="hidden"),ju(ht),Gt.current="door",await Os(),await y.open(window.innerWidth/2,window.innerHeight/2)}},[y]),Mn=lt.useRef(""),Ts=lt.useRef(-1);lt.useEffect(()=>{!R||b!=="live"||(t==="overworld"&&(Mn.current!=="overworld"||n!==Ts.current)?ot(he):t==="door"&&Mn.current!=="door"&&e&&ot(()=>De(e)),Mn.current=t,Ts.current=n)},[t,n,e,R,b,ot,he,De]);const Ln=lt.useCallback(ht=>{st.current||V.current.view!=="overworld"||ot(async()=>{const Mt=E.current;if(!Mt)return;Mt.setInputEnabled(!1),V.current.playSfx("door"),ft(90,.2,.4);const Zt=Mt.runnerOnScreen();await y.close(Zt.x,Zt.y),xt.current=!0,v.current("door"),V.current.roam.openDoor(ht)})},[ot,y,ft]);V.current.openDoor=Ln;const fr=lt.useCallback(ht=>{Dt("none"),ot(async()=>{const Mt=E.current;if(!Mt)return;Mt.setInputEnabled(!1),V.current.playSfx("warp");const Zt=Mt.runnerOnScreen();await y.close(Zt.x,Zt.y),Mt.placeAt(ht,"down"),await Os(),await Os();const Ie=Mt.runnerOnScreen();await y.open(Ie.x,Ie.y),Mt.setInputEnabled(V.current.panel==="none")})},[ot,y]);Nt.current=()=>{!st.current&&E.current&&fr(E.current.nearestZone())};const pr=lt.useCallback(()=>{Dt("none"),ot(async()=>{const ht=E.current;ht?.setInputEnabled(!1);const Mt=ht?.runnerOnScreen()??{x:window.innerWidth/2,y:window.innerHeight/2};await y.close(Mt.x,Mt.y),V.current.roam.exit()})},[ot,y]);lt.useEffect(()=>{!R||b!=="live"||t!=="overworld"||st.current||(E.current?.setInputEnabled(yt==="none"),yt==="none"&&document.activeElement instanceof HTMLElement&&document.activeElement.blur())},[yt,R,b,t]);const As=lt.useRef({stage:b,view:t,panel:yt,prompt:G,failure:N,roam:i,openDoor:Ln,playSfx:d});As.current={stage:b,view:t,panel:yt,prompt:G,failure:N,roam:i,openDoor:Ln,playSfx:d},lt.useEffect(()=>{const ht=new yu;let Mt=0,Zt=performance.now(),Ie=0,Sn=0;const Rt=jt=>{Mt=requestAnimationFrame(Rt);const Wn=Math.min((jt-Zt)/1e3,1/20);Zt=jt;const Ye=fs();if(ht.update(Ye),!Ye)return;const xe=As.current;if(ht.anyDown()&&ge(),xe.failure){(ht.down(le.A)||ht.down(le.B))&&xe.roam.exit();return}if(xe.stage==="start"){ht.down(le.A)||ht.down(le.START)?k("live"):ht.down(le.B)&&xe.roam.exit();return}if(xe.stage!=="live"||st.current)return;const Ve=il(Ye,0,1);if(xe.view==="door"){const M=Qe(Ye,le.DOWN)?1:Qe(Ye,le.UP)?-1:Ve.y;M&&window.scrollBy(0,M*900*Wn),ht.down(le.B)&&xe.roam.backToOverworld();return}if(xe.view==="overworld"){if(xe.panel!=="none"){const M=Qe(Ye,le.DOWN)||Qe(Ye,le.RIGHT)||Ve.y>.6?1:Qe(Ye,le.UP)||Qe(Ye,le.LEFT)||Ve.y<-.6?-1:0;M?Ie?jt-Ie>350&&jt-Sn>140&&(Sn=jt,uh(M)):(Ie=jt,Sn=jt,uh(M)):Ie=0,ht.down(le.A)&&document.activeElement instanceof HTMLElement?document.activeElement.click():(ht.down(le.B)||ht.down(le.START)||xe.panel==="map"&&ht.down(le.Y))&&Dt("none");return}ht.down(le.X)&&xe.prompt?xe.openDoor(xe.prompt):ht.down(le.Y)?(xe.playSfx("menu"),Dt("map")):ht.down(le.START)&&(xe.playSfx("menu"),Dt("menu"))}};return Mt=requestAnimationFrame(Rt),()=>cancelAnimationFrame(Mt)},[ge]),lt.useEffect(()=>{const ht=Mt=>{if(!(Zv(Mt)||Mt.repeat||Mt.metaKey||Mt.ctrlKey||Mt.altKey)&&!N){if(b==="start"){(Mt.key==="Enter"||Mt.code==="Space")&&(Mt.preventDefault(),k("live"));return}if(!(b!=="live"||st.current)){if(t==="door"){Mt.key==="Escape"&&(Mt.preventDefault(),i.backToOverworld());return}if(yt==="map"){(Mt.key==="Escape"||Mt.code==="KeyM")&&(Mt.preventDefault(),Dt("none"));return}if(yt==="menu"){Mt.key==="Escape"&&(Mt.preventDefault(),Dt("none"));return}if(Mt.key==="Escape")Mt.preventDefault(),d("menu"),Dt("menu");else if(Mt.code==="KeyM")Mt.preventDefault(),d("menu"),Dt("map");else{if(Mt.key==="Enter"&&Mt.target instanceof HTMLButtonElement)return;(Mt.key==="Enter"||Mt.code==="KeyE")&&G&&(Mt.preventDefault(),Ln(G))}}}};return window.addEventListener("keydown",ht),()=>window.removeEventListener("keydown",ht)},[b,t,yt,G,N,i,Ln,d]);const nn=ht=>Mt=>{Mt.currentTarget.blur(),ht()},Zi=b==="live"&&!N,ti=Zi&&t==="overworld",Rs=E.current?.landmarkPlacements()??[];return O.jsxs(O.Fragment,{children:[O.jsx("div",{ref:S,className:"fixed inset-0 z-[60] overflow-hidden bg-dusk-950"}),O.jsx("div",{className:"fixed inset-0 z-[62] overflow-hidden pointer-events-none",style:{display:ti?"block":"none"},children:ia.map((ht,Mt)=>O.jsxs("button",{ref:Zt=>{Zt?T.current.set(ht.id,Zt):T.current.delete(ht.id)},onClick:nn(()=>Ln(ht.id)),"aria-label":`Open the ${gr(ht.id).toLowerCase()}`,title:ht.zoneName,"data-pin":"false",className:`group absolute left-0 top-0 pointer-events-auto whitespace-nowrap px-2 py-1 font-arcade text-[8px] md:text-[9px] focus-ring data-[pin=true]:px-1.5 data-[pin=true]:opacity-80 data-[pin=true]:hover:opacity-100 ${G===ht.id?"bg-gold-400 text-dusk-950":"bg-dusk-950/85 text-gold-300 hover:text-gold-400"}`,style:{visibility:"hidden"},children:[O.jsx("span",{className:"group-data-[pin=true]:hidden",children:ht.zoneName}),O.jsxs("span",{"aria-hidden":"true",className:"hidden group-data-[pin=true]:inline-flex items-center gap-1",children:[Mt+1,O.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",className:"crisp",style:{transform:"rotate(var(--pin-angle, 0deg))"},children:O.jsx("path",{d:"M0 0h2v8h-2zM2 2h2v4h-2zM4 3h2v2h-2z",fill:"currentColor"})})]})]},ht.id))}),ti&&O.jsxs(O.Fragment,{children:[O.jsxs("div",{className:"fixed inset-x-0 top-0 z-[65] flex items-start justify-between gap-3 px-4 md:px-6 py-3",children:[O.jsxs("div",{className:"hidden sm:block pixel-border bg-dusk-950/90 mx-1 px-3 py-2",children:[O.jsx("p",{className:"font-arcade text-[9px] md:text-[10px] text-gold-400",children:"THE OVERWORLD"}),O.jsx("p",{className:"mt-2 font-arcade text-[8px] text-mist-300",children:be!==null?O.jsxs(O.Fragment,{children:["QUEST ROAD · ",O.jsx("span",{className:"text-gold-300",children:be})]}):O.jsxs(O.Fragment,{children:["NEAR ",gr(D)]})})]}),O.jsxs("div",{className:"flex flex-wrap items-start justify-end gap-3",children:[wt&&O.jsxs("div",{className:"pixel-border bg-dusk-950/90 mx-1 px-3 py-2 text-right",children:[O.jsxs("p",{className:"font-arcade text-[8px] text-mist-300",children:["LAP"," ",O.jsx("span",{className:"text-[10px] md:text-[11px] text-gold-300 tabular-nums",children:wt.running?Zs(wt.time):"-:--.-"})]}),O.jsxs("p",{className:"mt-2 font-arcade text-[8px] text-mist-300",children:["BEST ",O.jsx("span",{className:"text-sunset-300 tabular-nums",children:wt.best!==null?Zs(wt.best):"-:--.-"})]})]}),O.jsxs("div",{className:"pixel-border bg-dusk-950/90 mx-1 px-3 py-2 text-right",children:[O.jsx("p",{className:"font-arcade text-[8px] text-mist-300",children:"PACE"}),O.jsxs("p",{className:"mt-2 font-arcade text-[10px] md:text-[11px] text-gold-300",children:[j??"--:--",O.jsx("span",{className:"text-[8px] text-mist-300",children:" /KM"})]})]}),O.jsxs("div",{className:"pixel-border bg-dusk-950/90 mx-1 px-3 py-2 flex items-center gap-4",children:[O.jsxs("button",{onClick:nn(()=>Dt("map")),className:"font-arcade text-[8px] md:text-[9px] text-cream-100 hover:text-gold-300 focus-ring",children:["MAP ",!Ce&&O.jsx("span",{className:"text-mist-300",children:pe?pe.Y:"M"})]}),O.jsxs("button",{onClick:nn(()=>Dt("menu")),className:"font-arcade text-[8px] md:text-[9px] text-cream-100 hover:text-gold-300 focus-ring",children:["MENU ",!Ce&&O.jsx("span",{className:"text-mist-300",children:pe?pe.START:"ESC"})]}),Ce&&O.jsx("button",{onClick:nn(()=>E.current?.cycleZoom()),className:"font-arcade text-[8px] md:text-[9px] text-cream-100 hover:text-gold-300 focus-ring",children:"ZOOM"}),O.jsx("button",{onClick:nn(u),"aria-label":h?"Unmute sound":"Mute sound",className:"text-mist-300 hover:text-gold-400 focus-ring",children:h?O.jsx(td,{size:14}):O.jsx(ed,{size:14})})]})]})]}),O.jsxs("div",{"aria-live":"polite",className:"fixed inset-x-0 top-24 z-[65] flex flex-col items-center gap-3 px-4 pointer-events-none",children:[ye[0]&&O.jsxs("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 text-center",children:[O.jsx("span",{className:"block font-arcade text-[9px] md:text-[10px] text-gold-400",children:ye[0].title}),O.jsx("span",{className:"mt-2 block font-body text-sm text-cream-100",children:ye[0].line})]},ye[0].key),_t&&O.jsxs("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[10px] md:text-[11px] text-cream-100 text-center leading-relaxed",children:["LAP ",O.jsx("span",{className:"text-gold-300",children:Zs(_t.time)}),_t.newBest&&O.jsxs(O.Fragment,{children:[O.jsx("br",{}),O.jsx("span",{className:"text-gold-400 animate-blink",children:"NEW BEST!"})]})]})]}),O.jsx("div",{"aria-live":"polite",className:`fixed inset-x-0 ${Ce?"bottom-28":"bottom-6"} z-[65] flex justify-center px-4 pointer-events-none`,children:G&&Ce&&!pe?O.jsxs("button",{onClick:nn(()=>Ln(G)),className:"pointer-events-auto select-none touch-manipulation pixel-border bg-gold-400 text-dusk-950 mx-1 px-5 py-4 font-arcade text-[10px] md:text-[11px] focus-ring",children:["▸ OPEN THE ",gr(G)]}):G?O.jsxs("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[9px] md:text-[10px] text-cream-100",children:[pe?O.jsx(zs,{glyph:pe.X}):O.jsx("span",{className:"text-gold-400 animate-blink",children:"ENTER"})," ▸ OPEN THE"," ",gr(G)]}):rt?O.jsx("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[9px] text-cream-100",children:Ce&&!pe?O.jsxs(O.Fragment,{children:["STUCK? ",O.jsx("span",{className:"text-gold-400",children:"TAP MAP"})," TO JUMP AHEAD"]}):O.jsxs(O.Fragment,{children:["STUCK? PRESS ",pe?O.jsx(zs,{glyph:pe.BACK}):O.jsx("span",{className:"text-gold-400",children:"R"})]})}):et?null:O.jsx("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[8px] md:text-[9px] text-cream-100 text-center leading-relaxed",children:pe?O.jsxs(O.Fragment,{children:[O.jsx("span",{className:"text-gold-400",children:"STICK"})," RUN · ",O.jsx(zs,{glyph:pe.B})," SPRINT · ",O.jsx(zs,{glyph:pe.A})," JUMP ·"," ",O.jsx(zs,{glyph:pe.Y})," MAP"]}):Ce?O.jsxs(O.Fragment,{children:[O.jsx("span",{className:"text-gold-400",children:"DRAG"})," TO RUN · ",O.jsx("span",{className:"text-gold-400",children:"FAR"})," TO SPRINT ·"," ",O.jsx("span",{className:"text-gold-400",children:"TAP"})," TO GO THERE"]}):O.jsxs(O.Fragment,{children:[O.jsx("span",{className:"text-gold-400",children:"WASD"})," RUN · ",O.jsx("span",{className:"text-gold-400",children:"SHIFT"})," SPRINT ·"," ",O.jsx("span",{className:"text-gold-400",children:"SPACE"})," JUMP · ",O.jsx("span",{className:"text-gold-400",children:"M"})," MAP"]})})})]}),O.jsx("div",{ref:I,"aria-hidden":"true",className:"fixed left-0 top-0 z-[64] pointer-events-none rounded-full border-2 border-cream-100/60 bg-dusk-950/20",style:{display:"none",width:zi*2,height:zi*2}}),O.jsx("div",{ref:en,"aria-hidden":"true",className:"fixed left-0 top-0 z-[64] pointer-events-none rounded-full bg-cream-100/70 data-[sprint=true]:bg-gold-400",style:{display:"none",width:36,height:36}}),ti&&Ce&&yt==="none"&&O.jsx("button",{onPointerDown:ht=>{ht.preventDefault(),E.current?.jump()},"aria-label":"Jump",className:"fixed right-5 bottom-6 z-[65] w-20 h-20 rounded-full select-none touch-manipulation pixel-border bg-dusk-950/80 font-arcade text-[10px] text-gold-400 active:bg-gold-400 active:text-dusk-950",children:"JUMP"}),O.jsx("div",{ref:Z,"aria-hidden":"true",className:"fixed left-0 top-0 z-[66] pointer-events-none pixel-border bg-dusk-950/90 px-2 py-1 font-arcade text-[8px] text-cream-100 whitespace-nowrap",style:{display:"none"}}),ti&&E.current&&O.jsx(zv,{landmarks:Rs,dotRef:P,onOpen:nn(()=>Dt("map"))}),Zi&&t==="door"&&O.jsx("div",{className:"fixed inset-x-0 bottom-6 z-[65] flex justify-center px-4 pointer-events-none",children:O.jsxs("button",{onClick:i.backToOverworld,className:"pointer-events-auto pixel-border bg-dusk-950/95 mx-1 px-4 py-3 font-arcade text-[9px] md:text-[10px] text-gold-400 hover:text-gold-300 focus-ring",children:["◂ BACK TO THE OVERWORLD ",O.jsx("span",{className:"text-mist-300",children:pe?pe.B:"ESC"})]})}),ti&&yt==="map"&&E.current&&O.jsx(Bv,{landmarks:Rs,runner:E.current.runnerPosition(),onTravel:ht=>{z("travel"),fr(ht)},onClose:()=>Dt("none")}),ti&&yt==="menu"&&O.jsx(Gv,{muted:h,sky:o,look:nt,showLook:g,frameMs:Q,onResume:()=>Dt("none"),onToggleSound:u,onToggleSky:()=>{Dt("none"),c()},weather:ct,onWeather:()=>pt(ht=>ht==="auto"?"rain":ht==="rain"?"clear":"auto"),onLook:tt,onExit:pr,pad:pe??ao(fs()),medals:pa.map(ht=>({...ht,earned:Ht.has(ht.id),progress:Ht.progress(ht.id)})),medalCount:Xe,kits:ps.map(ht=>({...ht,unlocked:Ht.unlocked(ht.id)})),kit:Le,onKit:ht=>{Ht.setKit(ht),zt(Ht.kit().id);const Mt=Ht.kit();E.current?.setKit(Mt.top,Mt.bottom)}}),O.jsx("div",{ref:y.ref,"aria-hidden":"true",className:"fixed inset-0 z-[75] bg-ground"}),N?O.jsx(ya,{title:"THE OVERWORLD COULDN'T START",message:N,action:{label:"BACK TO THE PAGE",onClick:i.exit}}):b==="loading"?O.jsx(ya,{title:"LOADING THE OVERWORLD"}):b==="start"?O.jsx(ya,{title:"THE OVERWORLD",message:"Run the island. Every Landmark is a door into the page.",action:{label:"PRESS START",onClick:()=>k("live"),blink:!0},secondary:{label:"BACK TO THE PAGE",onClick:i.exit}}):null]})}export{$v as default};

import{C as pu,G as mu,R as zo,a as $c,b as Qc,c as ds,Q as gu,q as xu,d as _u,e as vu,f as Mu,g as Su,h as yu,H as Eu,i as bu,j as wu,k as Tu,l as Au,m as Ru,n as Cu,o as Pu,p as Lu,r as Du,s as Nu,t as Iu,W as Fr,u as vt,v as K,w as Uu,x as Fu,y as Ou,z as zu,A as Bu,B as ku,D as na,V as Hu,E as Gu,F as ia}from"./index-CoBofzf3.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bo="187",Vu=0,ml=1,Wu=2,Tr=1,Xu=2,Ss=3,bi=0,je=1,hn=2,Qi=0,ws=1,gl=2,xl=3,_l=4,qu=5,Ji=100,Yu=101,Ku=102,Zu=103,Ju=104,$u=200,Qu=201,ju=202,td=203,jc=204,th=205,ed=206,nd=207,id=208,sd=209,rd=210,ad=211,od=212,ld=213,cd=214,Wa=0,Xa=1,qa=2,Ds=3,Ya=4,Ka=5,Za=6,Ja=7,eh=0,hd=1,ud=2,Qn=0,nh=1,ih=2,sh=3,rh=4,ah=5,oh=6,lh=7,ch=300,ns=301,Ns=302,sa=303,ra=304,Is=1e3,Jn=1001,$a=1002,ge=1003,dd=1004,Js=1005,Qe=1006,aa=1007,ci=1008,nn=1009,hh=1010,uh=1011,Us=1012,ko=1013,Un=1014,An=1015,Fn=1016,Ho=1017,Go=1018,is=1020,dh=35902,fh=35899,ph=1021,mh=1022,un=1023,di=1026,hi=1027,Vo=1028,Wo=1029,wi=1030,Xo=1031,qo=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,Qa=35840,ja=35841,to=35842,eo=35843,no=36196,io=37492,so=37496,ro=37488,ao=37489,Or=37490,oo=37491,lo=37808,co=37809,ho=37810,uo=37811,fo=37812,po=37813,mo=37814,go=37815,xo=37816,_o=37817,vo=37818,Mo=37819,So=37820,yo=37821,Eo=36492,bo=36494,wo=36495,To=36283,Ao=36284,zr=36285,Ro=36286,fd=3200,Co=0,pd=1,oi="",cn="srgb",Fs="srgb-linear",Br="linear",ce="srgb",oa=7680,md=519,gd=512,xd=513,_d=514,gh=515,vd=516,Md=517,xh=518,_h=519,Sd=35044,vl="300 es",Rn=2e3,Os=2001;function yd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ed(){const i=kr("canvas");return i.style.display="block",i}const Ml={};function Sl(...i){const t="THREE."+i.shift();console.log(t,...i)}function vh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ht(...i){i=vh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ae(...i){i=vh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Lr(...i){const t=i.join(" ");t in Ml||(Ml[t]=!0,Ht(...i))}function bd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const wd={[Wa]:Wa,[qa]:Za,[Ya]:Ya,[Ds]:Ka,[Xa]:Xa,[Za]:qa,[Ja]:Ja,[Ka]:Ds};class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],la=Math.PI/180,Po=180/Math.PI;function ls(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function Td(i,t){return(i%t+t)%t}function ca(i,t,e){return(1-e)*i+e*t}function Ad(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Yo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Rd(i,t){if(t.constructor===Float32Array)return i;const e=Yo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Cd(i,t){if(t.constructor===Float32Array)return i;const e=Yo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const il=class il{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};il.prototype.isVector2=!0;let At=il;class Li{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(u!==_||l!==d||c!==f||h!==m){let p=l*d+c*f+h*m+u*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){const M=Math.acos(p),E=Math.sin(M);g=Math.sin(g*M)/E,o=Math.sin(o*M)/E,l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+_*o}else{l=l*g+d*o,c=c*g+f*o,h=h*g+m*o,u=u*g+_*o;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-o*f,t[e+2]=c*m+h*f+o*d-l*u,t[e+3]=h*m-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sl=class sl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ha.copy(this).projectOnVector(t),this.sub(ha)}reflect(t){return this.sub(ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sl.prototype.isVector3=!0;let U=sl;const ha=new U,yl=new Li,rl=class rl{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],p=s[3],g=s[6],M=s[1],E=s[4],y=s[7],C=s[2],R=s[5],x=s[8];return r[0]=a*_+o*M+l*C,r[3]=a*p+o*E+l*R,r[6]=a*g+o*y+l*x,r[1]=c*_+h*M+u*C,r[4]=c*p+h*E+u*R,r[7]=c*g+h*y+u*x,r[2]=d*_+f*M+m*C,r[5]=d*p+f*E+m*R,r[8]=d*g+f*y+m*x,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ua.makeScale(t,e)),this}rotate(t){return Lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ua.makeRotation(-t)),this}translate(t,e){return Lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};rl.prototype.isMatrix3=!0;let Wt=rl;const ua=new Wt,El=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pd(){const i={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?Br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fs]:{primaries:t,whitePoint:n,transfer:Br,toXYZ:El,fromXYZ:bl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:El,fromXYZ:bl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),i}const ee=Pd();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ii;class Ld{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ii===void 0&&(Ii=kr("canvas")),Ii.width=t.width,Ii.height=t.height;const s=Ii.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=kr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dd=0;class Ko{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(da(s[a].image)):r.push(da(s[a]))}else r=da(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ld.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let Nd=0;const fa=new U;class Ve extends Pi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=Jn,s=Jn,r=Qe,a=ci,o=un,l=nn,c=Ve.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=ls(),this.name="",this.source=new Ko(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(fa).x}get height(){return this.source.getSize(fa).y}get depth(){return this.source.getSize(fa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Is:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Is:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=ch;Ve.DEFAULT_ANISOTROPY=1;const al=class al{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(f+1)/2,C=(g+1)/2,R=(h+d)/4,x=(u+_)/4,b=(m+p)/4;return E>y&&E>C?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=x/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=x/r,s=b/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};al.prototype.isVector4=!0;let _e=al;class Id extends Pi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ve({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ko(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Id{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mh extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ge,this.minFilter=ge,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ud extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ge,this.minFilter=ge,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Kr=class Kr{constructor(t,e,n,s,r,a,o,l,c,h,u,d,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,_,p)}set(t,e,n,s,r,a,o,l,c,h,u,d,f,m,_,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d+_*o,e[4]=m*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,m=o*h,_=o*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,Od)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ei.crossVectors(n,tn),ei.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ei.crossVectors(n,tn)),ei.normalize(),$s.crossVectors(tn,ei),s[0]=ei.x,s[4]=$s.x,s[8]=tn.x,s[1]=ei.y,s[5]=$s.y,s[9]=tn.y,s[2]=ei.z,s[6]=$s.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],M=n[3],E=n[7],y=n[11],C=n[15],R=s[0],x=s[4],b=s[8],B=s[12],N=s[1],F=s[5],H=s[9],Z=s[13],D=s[2],q=s[6],j=s[10],V=s[14],ot=s[3],X=s[7],et=s[11],rt=s[15];return r[0]=a*R+o*N+l*D+c*ot,r[4]=a*x+o*F+l*q+c*X,r[8]=a*b+o*H+l*j+c*et,r[12]=a*B+o*Z+l*V+c*rt,r[1]=h*R+u*N+d*D+f*ot,r[5]=h*x+u*F+d*q+f*X,r[9]=h*b+u*H+d*j+f*et,r[13]=h*B+u*Z+d*V+f*rt,r[2]=m*R+_*N+p*D+g*ot,r[6]=m*x+_*F+p*q+g*X,r[10]=m*b+_*H+p*j+g*et,r[14]=m*B+_*Z+p*V+g*rt,r[3]=M*R+E*N+y*D+C*ot,r[7]=M*x+E*F+y*q+C*X,r[11]=M*b+E*H+y*j+C*et,r[15]=M*B+E*Z+y*V+C*rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],M=l*f-c*d,E=o*f-c*u,y=o*d-l*u,C=a*f-c*h,R=a*d-l*h,x=a*u-o*h;return e*(_*M-p*E+g*y)-n*(m*M-p*C+g*R)+s*(m*E-_*C+g*x)-r*(m*y-_*R+p*x)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],M=e*o-n*a,E=e*l-s*a,y=e*c-r*a,C=n*l-s*o,R=n*c-r*o,x=s*c-r*l,b=h*_-u*m,B=h*p-d*m,N=h*g-f*m,F=u*p-d*_,H=u*g-f*_,Z=d*g-f*p,D=M*Z-E*H+y*F+C*N-R*B+x*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/D;return t[0]=(o*Z-l*H+c*F)*q,t[1]=(s*H-n*Z-r*F)*q,t[2]=(_*x-p*R+g*C)*q,t[3]=(d*R-u*x-f*C)*q,t[4]=(l*N-a*Z-c*B)*q,t[5]=(e*Z-s*N+r*B)*q,t[6]=(p*y-m*x-g*E)*q,t[7]=(h*x-d*y+f*E)*q,t[8]=(a*H-o*N+c*b)*q,t[9]=(n*N-e*H-r*b)*q,t[10]=(m*R-_*y+g*M)*q,t[11]=(u*y-h*R-f*M)*q,t[12]=(o*B-a*F-l*b)*q,t[13]=(e*F-n*B+s*b)*q,t[14]=(_*E-m*C-p*M)*q,t[15]=(h*C-u*E+d*M)*q,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,_=a*h,p=a*u,g=o*u,M=l*c,E=l*h,y=l*u,C=n.x,R=n.y,x=n.z;return s[0]=(1-(_+g))*C,s[1]=(f+y)*C,s[2]=(m-E)*C,s[3]=0,s[4]=(f-y)*R,s[5]=(1-(d+g))*R,s[6]=(p+M)*R,s[7]=0,s[8]=(m+E)*x,s[9]=(p-M)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ui.set(s[0],s[1],s[2]).length();const o=Ui.set(s[4],s[5],s[6]).length(),l=Ui.set(s[8],s[9],s[10]).length();r<0&&(a=-a),vn.copy(this);const c=1/a,h=1/o,u=1/l;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Rn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let m,_;if(l)m=r/(a-r),_=a*r/(a-r);else if(o===Rn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Os)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let m,_;if(l)m=1/(a-r),_=a/(a-r);else if(o===Rn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===Os)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Kr.prototype.isMatrix4=!0;let oe=Kr;const Ui=new U,vn=new oe,Fd=new U(0,0,0),Od=new U(1,1,1),ei=new U,$s=new U,tn=new U,wl=new oe,Tl=new Li;class Ti{constructor(t=0,e=0,n=0,s=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Zo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zd=0;const Al=new U,Fi=new Li,kn=new oe,Qs=new U,fs=new U,Bd=new U,kd=new Li,Rl=new U(1,0,0),Cl=new U(0,1,0),Pl=new U(0,0,1),Ll={type:"added"},Hd={type:"removed"},Oi={type:"childadded",child:null},pa={type:"childremoved",child:null};class We extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new U,e=new Ti,n=new Li,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Wt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Rl,t)}rotateY(t){return this.rotateOnAxis(Cl,t)}rotateZ(t){return this.rotateOnAxis(Pl,t)}translateOnAxis(t,e){return Al.copy(t).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rl,t)}translateY(t){return this.translateOnAxis(Cl,t)}translateZ(t){return this.translateOnAxis(Pl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(fs,Qs,this.up):kn.lookAt(Qs,fs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(kn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ll),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hd),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ll),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,Bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}We.DEFAULT_UP=new U(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sn extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gd={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},js={h:0,s:0,l:0};function ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Td(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ga(a,r,t+1/3),this.g=ga(a,r,t),this.b=ga(a,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return ee.workingToColorSpace(Ge.copy(this),t),Math.round(Qt(Ge.r*255,0,255))*65536+Math.round(Qt(Ge.g*255,0,255))*256+Math.round(Qt(Ge.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=cn){ee.workingToColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(js);const n=ca(ni.h,js.h,e),s=ca(ni.s,js.s,e),r=ca(ni.l,js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new Yt;Yt.NAMES=Sh;class Vd extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Mn=new U,Hn=new U,xa=new U,Gn=new U,zi=new U,Bi=new U,Dl=new U,_a=new U,va=new U,Ma=new U,Sa=new _e,ya=new _e,Ea=new _e;class Tn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Hn.subVectors(n,e),xa.subVectors(t,e);const a=Mn.dot(Mn),o=Mn.dot(Hn),l=Mn.dot(xa),c=Hn.dot(Hn),h=Hn.dot(xa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Sa.setScalar(0),ya.setScalar(0),Ea.setScalar(0),Sa.fromBufferAttribute(t,e),ya.fromBufferAttribute(t,n),Ea.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Sa,r.x),a.addScaledVector(ya,r.y),a.addScaledVector(Ea,r.z),a}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Hn.subVectors(t,e),Mn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),Mn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,n),Bi.subVectors(r,n),_a.subVectors(t,n);const l=zi.dot(_a),c=Bi.dot(_a);if(l<=0&&c<=0)return e.copy(n);va.subVectors(t,s);const h=zi.dot(va),u=Bi.dot(va);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(zi,a);Ma.subVectors(t,r);const f=zi.dot(Ma),m=Bi.dot(Ma);if(m>=0&&f<=m)return e.copy(r);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Bi,o);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Dl.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(Dl,o);const g=1/(p+_+d);return a=_*g,o=d*g,e.copy(n).addScaledVector(zi,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Di{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(t.matrixWorld),this.union(tr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),er.subVectors(this.max,ps),ki.subVectors(t.a,ps),Hi.subVectors(t.b,ps),Gi.subVectors(t.c,ps),ii.subVectors(Hi,ki),si.subVectors(Gi,Hi),xi.subVectors(ki,Gi);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-xi.z,xi.y,ii.z,0,-ii.x,si.z,0,-si.x,xi.z,0,-xi.x,-ii.y,ii.x,0,-si.y,si.x,0,-xi.y,xi.x,0];return!ba(e,ki,Hi,Gi,er)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,ki,Hi,Gi,er))?!1:(nr.crossVectors(ii,si),e=[nr.x,nr.y,nr.z],ba(e,ki,Hi,Gi,er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vn=[new U,new U,new U,new U,new U,new U,new U,new U],Sn=new U,tr=new Di,ki=new U,Hi=new U,Gi=new U,ii=new U,si=new U,xi=new U,ps=new U,er=new U,nr=new U,_i=new U;function ba(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_i.fromArray(i,r);const o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Re=new U,ir=new At;let Wd=0;class pn extends Pi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sd,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=t!==void 0?Yo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Rd(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Cd(t,this.array)}}class yh extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Eh extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Xd=new Di,ms=new U,wa=new U;class Ws{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(wa)),this.expandByPoint(ms.copy(t.center).sub(wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let qd=0;const ln=new oe,Ta=new We,Vi=new U,en=new Di,gs=new Di,Fe=new U;class an extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yd(t)?Eh:yh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(en.min,gs.min),en.expandByPoint(Fe),Fe.addVectors(en.max,gs.max),en.expandByPoint(Fe)):(en.expandByPoint(gs.min),en.expandByPoint(gs.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Fe.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(t,c),Fe.add(Vi)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new U,l[B]=new U;const h=new U,u=new U,d=new U,f=new At,m=new At,_=new At,p=new U,g=new U;function M(B,N,F){c[B]=c[N]=c[F]=1,h.fromBufferAttribute(n,B),u.fromBufferAttribute(n,N),d.fromBufferAttribute(n,F),f.fromBufferAttribute(r,B),m.fromBufferAttribute(r,N),_.fromBufferAttribute(r,F),u.sub(h),d.sub(h),m.sub(f),_.sub(f);const H=1/(m.x*_.y-_.x*m.y);isFinite(H)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(H),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(H),o[B].add(p),o[N].add(p),o[F].add(p),l[B].add(g),l[N].add(g),l[F].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let B=0,N=E.length;B<N;++B){const F=E[B],H=F.start,Z=F.count;for(let D=H,q=H+Z;D<q;D+=3)M(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new U,C=new U,R=new U,x=new U;function b(B){R.fromBufferAttribute(s,B),x.copy(R);const N=o[B];y.copy(N),y.sub(R.multiplyScalar(R.dot(N))).normalize(),C.crossVectors(x,N);const H=C.dot(l[B])<0?-1:1;a.setXYZW(B,y.x,y.y,y.z,H)}for(let B=0,N=n.count;B<N;++B)c[B]&&b(B);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new pn(d,h,u)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new an,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Aa=new U,Yd=new U,Kd=new Wt;class Kn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Aa.subVectors(n,e).cross(Yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Aa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kd.getNormalMatrix(t),s=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Zd=0;class Xs extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=ws,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=th,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Yt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Kn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new At().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Wn=new U,Ra=new U,sr=new U,rr=new U;class bh{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ra.copy(t).add(e).multiplyScalar(.5),sr.copy(e).sub(t).normalize(),rr.copy(this.origin).sub(Ra);const r=t.distanceTo(e)*.5,a=-this.direction.dot(sr),o=rr.dot(this.direction),l=-rr.dot(sr),c=rr.lengthSq(),h=Math.abs(1-a*a);let u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ra).addScaledVector(sr,d),f}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,d=t.y-a.y,f=t.z-a.z,m=e.x-a.x,_=e.y-a.y,p=e.z-a.z,g=n.x-a.x,M=n.y-a.y,E=n.z-a.z,y=Math.abs(l),C=Math.abs(c),R=Math.abs(h);let x,b,B,N,F,H,Z,D,q,j,V,ot;if(y>=C&&y>=R?(B=l,H=u,q=m,ot=g,l>=0?(x=c,b=h,N=d,F=f,Z=_,D=p,j=M,V=E):(x=h,b=c,N=f,F=d,Z=p,D=_,j=E,V=M)):C>=R?(B=c,H=d,q=_,ot=M,c>=0?(x=h,b=l,N=f,F=u,Z=p,D=m,j=E,V=g):(x=l,b=h,N=u,F=f,Z=m,D=p,j=g,V=E)):(B=h,H=f,q=p,ot=E,h>=0?(x=l,b=c,N=u,F=d,Z=m,D=_,j=g,V=M):(x=c,b=l,N=d,F=u,Z=_,D=m,j=M,V=g)),B===0)return null;const X=x/B,et=b/B,rt=1/B,bt=N-X*H,Nt=F-et*H,Q=Z-X*q,Mt=D-et*q,wt=j-X*ot,Ut=V-et*ot,_t=wt*Mt-Ut*Q,Gt=bt*Ut-Nt*wt,ve=Q*Nt-Mt*bt;if(s){if(_t<0||Gt<0||ve<0)return null}else if((_t<0||Gt<0||ve<0)&&(_t>0||Gt>0||ve>0))return null;const Ot=_t+Gt+ve;if(Ot===0)return null;const ie=rt*(_t*H+Gt*q+ve*ot);return(Ot>0?ie<0:ie>0)?null:this.at(ie/Ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bn extends Xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Nl=new oe,vi=new bh,ar=new Ws,Il=new U,or=new U,lr=new U,cr=new U,Ca=new U,hr=new U,Ul=new U,ur=new U;class Ft extends We{constructor(t=new an,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Ca.fromBufferAttribute(u,t),a?hr.addScaledVector(Ca,h):hr.addScaledVector(Ca.sub(e),h))}e.add(hr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(ar.containsPoint(vi.origin)===!1&&(vi.intersectSphere(ar,Il)===null||vi.origin.distanceToSquared(Il)>(t.far-t.near)**2))&&(Nl.copy(r).invert(),vi.copy(t.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=a[p.materialIndex],M=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,C=E;y<C;y+=3){const R=o.getX(y),x=o.getX(y+1),b=o.getX(y+2);s=dr(this,g,t,n,c,h,u,R,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const M=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);s=dr(this,a,t,n,c,h,u,M,E,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=a[p.materialIndex],M=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=M,C=E;y<C;y+=3){const R=y,x=y+1,b=y+2;s=dr(this,g,t,n,c,h,u,R,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const M=p,E=p+1,y=p+2;s=dr(this,a,t,n,c,h,u,M,E,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Jd(i,t,e,n,s,r,a,o){let l;if(t.side===je?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===bi,o),l===null)return null;ur.copy(o),ur.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ur);return c<e.near||c>e.far?null:{distance:c,point:ur.clone(),object:i}}function dr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,or),i.getVertexPosition(l,lr),i.getVertexPosition(c,cr);const h=Jd(i,t,e,n,or,lr,cr,Ul);if(h){const u=new U;Tn.getBarycoord(Ul,or,lr,cr,u),s&&(h.uv=Tn.getInterpolatedAttribute(s,o,l,c,u,new At)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,o,l,c,u,new At)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};Tn.getNormal(or,lr,cr,d.normal),h.face=d,h.barycoord=u}return h}class Zr extends Ve{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ge,h=ge,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fl extends pn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new oe,Ol=new oe,fr=[],zl=new Di,$d=new oe,xs=new Ft,_s=new Ws;class ts extends Ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$d)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),zl.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(zl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),_s.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),t.ray.intersectsSphere(_s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),Ol.multiplyMatrices(n,Wi),xs.matrixWorld=Ol,xs.raycast(t,fr);for(let a=0,o=fr.length;a<o;a++){const l=fr[a];l.instanceId=r,l.object=this,e.push(l)}fr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Fl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zr(new Float32Array(s*this.count),s,this.count,Vo,An));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Mi=new Ws,Qd=new At(.5,.5),pr=new U;class zs{constructor(t=new Kn,e=new Kn,n=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],M=r[12],E=r[13],y=r[14],C=r[15];if(s[0].setComponents(c-a,f-h,g-m,C-M).normalize(),s[1].setComponents(c+a,f+h,g+m,C+M).normalize(),s[2].setComponents(c+o,f+u,g+_,C+E).normalize(),s[3].setComponents(c-o,f-u,g-_,C-E).normalize(),n)s[4].setComponents(l,d,p,y).normalize(),s[5].setComponents(c-l,f-d,g-p,C-y).normalize();else if(s[4].setComponents(c-l,f-d,g-p,C-y).normalize(),e===Rn)s[5].setComponents(c+l,f+d,g+p,C+y).normalize();else if(e===Os)s[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){Mi.center.set(0,0,0);const e=Qd.distanceTo(t.center);return Mi.radius=.7071067811865476+e,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(pr.x=s.normal.x>0?t.max.x:t.min.x,pr.y=s.normal.y>0?t.max.y:t.min.y,pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Bl=new oe;class Jo{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Bl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new zs),n[s].setFromProjectionMatrix(Bl,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new zs),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new Jo().copy(this)}}class wh extends Ve{constructor(t=[],e=ns,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kl extends Ve{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ss extends Ve{constructor(t,e,n=Un,s,r,a,o=ge,l=ge,c,h=di,u=1){if(h!==di&&h!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ko(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Th extends ss{constructor(t,e=Un,n=ns,s,r,a=ge,o=ge,l,c=di){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ah extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class pi extends an{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function m(_,p,g,M,E,y,C,R,x,b,B){const N=y/x,F=C/b,H=y/2,Z=C/2,D=R/2,q=x+1,j=b+1;let V=0,ot=0;const X=new U;for(let et=0;et<j;et++){const rt=et*F-Z;for(let bt=0;bt<q;bt++){const Nt=bt*N-H;X[_]=Nt*M,X[p]=rt*E,X[g]=D,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[g]=R>0?1:-1,h.push(X.x,X.y,X.z),u.push(bt/x),u.push(1-et/b),V+=1}}for(let et=0;et<b;et++)for(let rt=0;rt<x;rt++){const bt=d+rt+q*et,Nt=d+rt+q*(et+1),Q=d+(rt+1)+q*(et+1),Mt=d+(rt+1)+q*et;l.push(bt,Nt,Mt),l.push(Nt,Q,Mt),ot+=6}o.addGroup(f,ot,B),f+=ot,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new At:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],r=[],a=[],o=new U,l=new oe;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Qt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}class $o extends On{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new At){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class jd extends $o{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Qo(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Hl=new U,Gl=new U,Pa=new Qo,La=new Qo,Da=new Qo;class tf extends On{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Gl.subVectors(s[0],s[1]).add(s[0]),c=Gl);const u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Hl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Hl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Pa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,p),La.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,p),Da.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Pa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),La.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Da.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Pa.calc(l),La.calc(l),Da.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vl(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function ef(i,t){const e=1-i;return e*e*t}function nf(i,t){return 2*(1-i)*i*t}function sf(i,t){return i*i*t}function Ts(i,t,e,n){return ef(i,t)+nf(i,e)+sf(i,n)}function rf(i,t){const e=1-i;return e*e*e*t}function af(i,t){const e=1-i;return 3*e*e*i*t}function of(i,t){return 3*(1-i)*i*i*t}function lf(i,t){return i*i*i*t}function As(i,t,e,n,s){return rf(i,t)+af(i,e)+of(i,n)+lf(i,s)}class Rh extends On{constructor(t=new At,e=new At,n=new At,s=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new At){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(As(t,s.x,r.x,a.x,o.x),As(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cf extends On{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(As(t,s.x,r.x,a.x,o.x),As(t,s.y,r.y,a.y,o.y),As(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ch extends On{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hf extends On{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ph extends On{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ts(t,s.x,r.x,a.x),Ts(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uf extends On{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ts(t,s.x,r.x,a.x),Ts(t,s.y,r.y,a.y),Ts(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lh extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Vl(o,l.x,c.x,h.x,u.x),Vl(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new At().fromArray(s))}return this}}var Wl=Object.freeze({__proto__:null,ArcCurve:jd,CatmullRomCurve3:tf,CubicBezierCurve:Rh,CubicBezierCurve3:cf,EllipseCurve:$o,LineCurve:Ch,LineCurve3:hf,QuadraticBezierCurve:Ph,QuadraticBezierCurve3:uf,SplineCurve:Lh});class df extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Wl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class rs extends df{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ch(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ph(this.currentPoint.clone(),new At(t,e),new At(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Rh(this.currentPoint.clone(),new At(t,e),new At(n,s),new At(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Lh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){const c=new $o(t,e,n,s,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Dh extends rs{constructor(t){super(t),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new rs().fromJSON(s))}return this}}function ff(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Nh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=_f(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,u=l;for(let d=e;d<s;d+=e){const f=i[d],m=i[d+1];f<o&&(o=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Bs(r,a,e,o,l,c,0),a}function Nh(i,t,e,n,s){let r;if(s===Cf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Xl(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Xl(a/n|0,i[a],i[a+1],r);return r&&as(r,r.next)&&(Hs(r),r=r.next),r}function Ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(as(e,e.next)||Se(e.prev,e,e.next)===0)){if(Hs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Bs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Ef(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?mf(i,n,s,r):pf(i)){t.push(l.i,i.i,c.i),Hs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=gf(Ai(i),t),Bs(i,t,e,n,s,r,2)):a===2&&xf(i,t,e,n,s,r):Bs(Ai(i),t,e,n,s,r,1);break}}}function pf(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c);let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ys(s,o,r,l,a,c,m.x,m.y)&&Se(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function mf(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Se(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(h,u,d),_=Math.max(o,l,c),p=Math.max(h,u,d),g=Lo(f,m,t,e,n),M=Lo(_,p,t,e,n);let E=i.prevZ,y=i.nextZ;for(;E&&E.z>=g&&y&&y.z<=M;){if(E.x>=f&&E.x<=_&&E.y>=m&&E.y<=p&&E!==s&&E!==a&&ys(o,h,l,u,c,d,E.x,E.y)&&Se(E.prev,E,E.next)>=0||(E=E.prevZ,y.x>=f&&y.x<=_&&y.y>=m&&y.y<=p&&y!==s&&y!==a&&ys(o,h,l,u,c,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;E&&E.z>=g;){if(E.x>=f&&E.x<=_&&E.y>=m&&E.y<=p&&E!==s&&E!==a&&ys(o,h,l,u,c,d,E.x,E.y)&&Se(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;y&&y.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=p&&y!==s&&y!==a&&ys(o,h,l,u,c,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function gf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!as(n,s)&&Uh(n,e,e.next,s)&&ks(n,s)&&ks(s,n)&&(t.push(n.i,e.i,s.i),Hs(e),Hs(e.next),e=i=s),e=e.next}while(e!==i);return Ai(e)}function xf(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tf(a,o)){let l=Fh(a,o);a=Ai(a,a.next),l=Ai(l,l.next),Bs(a,t,e,n,s,r,0),Bs(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function _f(i,t,e,n){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Nh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(wf(c))}s.sort(vf);for(let r=0;r<s.length;r++)e=Mf(s[r],e);return e}function vf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Mf(i,t){const e=Sf(i,t);if(!e)return t;const n=Fh(e,i);return Ai(n,n.next),Ai(e,e.next)}function Sf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,a;if(as(i,e))return e;do{if(as(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Ih(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);ks(e,i)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&yf(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function yf(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function Ef(i,t,e,n){let s=i;do s.z===0&&(s.z=Lo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bf(s)}function bf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Lo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ih(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ys(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Ih(i,t,e,n,s,r,a,o)}function Tf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Af(i,t)&&(ks(i,t)&&ks(t,i)&&Rf(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||as(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function as(i,t){return i.x===t.x&&i.y===t.y}function Uh(i,t,e,n){const s=gr(Se(i,t,e)),r=gr(Se(i,t,n)),a=gr(Se(e,n,i)),o=gr(Se(e,n,t));return!!(s!==r&&a!==o||s===0&&mr(i,e,t)||r===0&&mr(i,n,t)||a===0&&mr(e,i,n)||o===0&&mr(e,t,n))}function mr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function gr(i){return i>0?1:i<0?-1:0}function Af(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Uh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ks(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function Rf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fh(i,t){const e=Do(i.i,i.x,i.y),n=Do(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Xl(i,t,e,n){const s=Do(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Do(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Cf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Pf{static triangulate(t,e,n=2){return ff(t,e,n)}}class Rs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Rs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ql(t),Yl(n,t);let a=t.length;e.forEach(ql);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Yl(n,e[l]);const o=Pf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function ql(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Yl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class $n extends an{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,d=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){const M=g*d-a;for(let E=0;E<c;E++){const y=E*u-r;m.push(y,-M,0),_.push(0,0,1),p.push(E/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<o;M++){const E=M+c*g,y=M+c*(g+1),C=M+1+c*(g+1),R=M+1+c*g;f.push(E,y,R),f.push(y,C,R)}this.setIndex(f),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jr extends an{constructor(t=new Dh([new At(0,.5),new At(-.5,-.5),new At(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(r,3)),this.setAttribute("uv",new ye(a,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;Rs.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,g=m.length;p<g;p++){const M=m[p];Rs.isClockWise(M)===!0&&(m[p]=M.reverse())}const _=Rs.triangulateShape(f,m);for(let p=0,g=m.length;p<g;p++){const M=m[p];f=f.concat(M)}for(let p=0,g=f.length;p<g;p++){const M=f[p];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let p=0,g=_.length;p<g;p++){const M=_[p],E=M[0]+u,y=M[1]+u,C=M[2]+u;n.push(E,y,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Lf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];n.push(a)}return new Jr(n,t.curveSegments)}}function Lf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Kl(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Kl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=os(i[e]);for(const s in n)t[s]=n[s]}return t}function Kl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Df(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Nf={clone:os,merge:Ke};var If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(s.value);break;case"v2":this.uniforms[n].value=new At().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _e().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new oe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ff extends Cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dr extends Xs{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Yt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Of extends Xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zf extends Xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zh extends We{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Na=new oe,Zl=new U,Jl=new U;class Bf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zl),Jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jl),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Na,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Os||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xr=new U,_r=new Li,Ln=new U;class Bh extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xr,_r,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,_r,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xr,_r,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xr,_r,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ri=new U,$l=new At,Ql=new At;class wn extends Bh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ri.x,ri.y).multiplyScalar(-t/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-t/ri.z)}getViewSize(t,e){return this.getViewBounds(t,$l,Ql),e.subVectors(Ql,$l)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(la*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Hr extends Bh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class kf extends Bf{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hf extends zh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new kf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Gf extends zh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xi=-90,qi=1;class No extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Xi,qi,t,e);s.layers=this.layers,this.add(s);const r=new wn(Xi,qi,t,e);r.layers=this.layers,this.add(r);const a=new wn(Xi,qi,t,e);a.layers=this.layers,this.add(a);const o=new wn(Xi,qi,t,e);o.layers=this.layers,this.add(o);const l=new wn(Xi,qi,t,e);l.layers=this.layers,this.add(l);const c=new wn(Xi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Vf extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}const jl=new oe;class Wf{constructor(t,e,n=0,s=1/0){this.ray=new bh(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jl),this}intersectObject(t,e=!0,n=[]){return Io(t,this,n,e),n.sort(tc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Io(t[s],this,n,e);return n.sort(tc),n}}function tc(i,t){return i.distance-t.distance}function Io(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Io(r[a],t,e,!0)}}function ec(i,t,e,n){const s=Xf(n);switch(e){case ph:return i*t;case Vo:return i*t/s.components*s.byteLength;case Wo:return i*t/s.components*s.byteLength;case wi:return i*t*2/s.components*s.byteLength;case Xo:return i*t*2/s.components*s.byteLength;case mh:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case qo:return i*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:case eo:return Math.max(i,16)*Math.max(t,8)/4;case Qa:case to:return Math.max(i,8)*Math.max(t,8)/2;case no:case io:case ro:case ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case so:case Or:case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case uo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case yo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Eo:case bo:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case To:case Ao:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zr:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xf(i){switch(i){case nn:case hh:return{byteLength:1,components:1};case Us:case uh:case Fn:return{byteLength:2,components:1};case Ho:case Go:return{byteLength:2,components:4};case Un:case ko:case An:return{byteLength:4,components:1};case dh:case fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function qf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
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
#endif`,Zf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
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
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
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
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ap=`#ifdef USE_IRIDESCENCE
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
#endif`,op=`#ifdef USE_BUMPMAP
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gp=`#define PI 3.141592653589793
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
} // validated`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Np=`#ifdef USE_GRADIENTMAP
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
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Op=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vp=`PhysicalMaterial material;
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
#endif`,Wp=`uniform sampler2D dfgLUT;
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
}`,Xp=`
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Zp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n0=`#if defined( USE_POINTS_UV )
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
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a0=`#if defined( USE_MORPHCOLORS )
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
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
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
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
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
#endif`,g0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L0=`float getShadowMask() {
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
}`,D0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,F0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y0=`uniform sampler2D t2D;
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform float backgroundBlurriness;
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
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`#include <common>
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
}`,j0=`#if DEPTH_PACKING == 3200
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
}`,tm=`#define DISTANCE
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
}`,em=`#define DISTANCE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`uniform float scale;
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
}`,rm=`uniform vec3 diffuse;
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
}`,am=`#include <common>
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
}`,om=`uniform vec3 diffuse;
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
}`,lm=`#define LAMBERT
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define MATCAP
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
}`,um=`#define MATCAP
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
}`,dm=`#define NORMAL
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
}`,fm=`#define NORMAL
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
}`,pm=`#define PHONG
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
}`,mm=`#define PHONG
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
}`,gm=`#define STANDARD
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
}`,xm=`#define STANDARD
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
}`,_m=`#define TOON
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
}`,vm=`#define TOON
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
}`,Mm=`uniform float size;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,Em=`uniform vec3 color;
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
}`,bm=`uniform float rotation;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Yf,alphahash_pars_fragment:Kf,alphamap_fragment:Zf,alphamap_pars_fragment:Jf,alphatest_fragment:$f,alphatest_pars_fragment:Qf,aomap_fragment:jf,aomap_pars_fragment:tp,batching_pars_vertex:ep,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:sp,bsdfs:rp,iridescence_fragment:ap,bumpmap_pars_fragment:op,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:up,color_fragment:dp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,defaultnormal_vertex:xp,displacementmap_pars_vertex:_p,displacementmap_vertex:vp,emissivemap_fragment:Mp,emissivemap_pars_fragment:Sp,colorspace_fragment:yp,colorspace_pars_fragment:Ep,envmap_fragment:bp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Tp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:zp,envmap_vertex:Rp,fog_vertex:Cp,fog_pars_vertex:Pp,fog_fragment:Lp,fog_pars_fragment:Dp,gradientmap_pars_fragment:Np,lightmap_pars_fragment:Ip,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Fp,lights_pars_begin:Op,lights_toon_fragment:Bp,lights_toon_pars_fragment:kp,lights_phong_fragment:Hp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Vp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:Yp,lightprobes_pars_fragment:Kp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Qp,map_fragment:jp,map_pars_fragment:t0,map_particle_fragment:e0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:s0,morphinstance_vertex:r0,morphcolor_vertex:a0,morphnormal_vertex:o0,morphtarget_pars_vertex:l0,morphtarget_vertex:c0,normal_fragment_begin:h0,normal_fragment_maps:u0,normal_pars_fragment:d0,normal_pars_vertex:f0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:g0,clearcoat_normal_fragment_maps:x0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:v0,opaque_fragment:M0,packing:S0,premultiplied_alpha_fragment:y0,project_vertex:E0,dithering_fragment:b0,dithering_pars_fragment:w0,roughnessmap_fragment:T0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:R0,shadowmap_pars_vertex:C0,shadowmap_vertex:P0,shadowmask_pars_fragment:L0,skinbase_vertex:D0,skinning_pars_vertex:N0,skinning_vertex:I0,skinnormal_vertex:U0,specularmap_fragment:F0,specularmap_pars_fragment:O0,tonemapping_fragment:z0,tonemapping_pars_fragment:B0,transmission_fragment:k0,transmission_pars_fragment:H0,uv_pars_fragment:G0,uv_pars_vertex:V0,uv_vertex:W0,worldpos_vertex:X0,background_vert:q0,background_frag:Y0,backgroundCube_vert:K0,backgroundCube_frag:Z0,cube_vert:J0,cube_frag:$0,depth_vert:Q0,depth_frag:j0,distance_vert:tm,distance_frag:em,equirect_vert:nm,equirect_frag:im,linedashed_vert:sm,linedashed_frag:rm,meshbasic_vert:am,meshbasic_frag:om,meshlambert_vert:lm,meshlambert_frag:cm,meshmatcap_vert:hm,meshmatcap_frag:um,meshnormal_vert:dm,meshnormal_frag:fm,meshphong_vert:pm,meshphong_frag:mm,meshphysical_vert:gm,meshphysical_frag:xm,meshtoon_vert:_m,meshtoon_frag:vm,points_vert:Mm,points_frag:Sm,shadow_vert:ym,shadow_frag:Em,sprite_vert:bm,sprite_frag:wm},St={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Nn={basic:{uniforms:Ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ke([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ke([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ke([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ke([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ke([St.points,St.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ke([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ke([St.common,St.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ke([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ke([St.sprite,St.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Ke([St.common,St.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Ke([St.lights,St.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Nn.physical={uniforms:Ke([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const vr={r:0,b:0,g:0},Tm=new oe,Hh=new Wt;Hh.set(-1,0,0,0,1,0,0,0,1);function Am(i,t,e,n,s,r){const a=new Yt(0);let o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const y=M.backgroundBlurriness>0;E=t.get(E,y)}return E}function m(M){let E=!1;const y=f(M);y===null?p(a,o):y&&y.isColor&&(p(y,1),E=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,E){const y=f(E);y&&y.isCubeTexture?(c===void 0&&(c=new Ft(new pi(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:os(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hh),c.material.toneMapped=ee.getTransfer(y.colorSpace)!==ce,(h!==y||u!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ft(new $n(2,2),new Cn({name:"BackgroundMaterial",uniforms:os(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ee.getTransfer(y.colorSpace)!==ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,E){M.getRGB(vr,Oh(i)),e.buffers.color.setClear(vr.r,vr.g,vr.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:m,addToRenderList:_,dispose:g}}function Rm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(F,H,Z,D,q){let j=!1;const V=u(F,D,Z,H);r!==V&&(r=V,c(r.object)),j=f(F,D,Z,q),j&&m(F,D,Z,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(F,H,Z,D),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function u(F,H,Z,D){const q=D.wireframe===!0;let j=n[H.id];j===void 0&&(j={},n[H.id]=j);const V=F.isInstancedMesh===!0?F.id:0;let ot=j[V];ot===void 0&&(ot={},j[V]=ot);let X=ot[Z.id];X===void 0&&(X={},ot[Z.id]=X);let et=X[q];return et===void 0&&(et=d(l()),X[q]=et),et}function d(F){const H=[],Z=[],D=[];for(let q=0;q<e;q++)H[q]=0,Z[q]=0,D[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:D,object:F,attributes:{},index:null}}function f(F,H,Z,D){const q=r.attributes,j=H.attributes;let V=0;const ot=Z.getAttributes();for(const X in ot)if(ot[X].location>=0){const rt=q[X];let bt=j[X];if(bt===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(bt=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(bt=F.instanceColor)),rt===void 0||rt.attribute!==bt||bt&&rt.data!==bt.data)return!0;V++}return r.attributesNum!==V||r.index!==D}function m(F,H,Z,D){const q={},j=H.attributes;let V=0;const ot=Z.getAttributes();for(const X in ot)if(ot[X].location>=0){let rt=j[X];rt===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(rt=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(rt=F.instanceColor));const bt={};bt.attribute=rt,rt&&rt.data&&(bt.data=rt.data),q[X]=bt,V++}r.attributes=q,r.attributesNum=V,r.index=D}function _(){const F=r.newAttributes;for(let H=0,Z=F.length;H<Z;H++)F[H]=0}function p(F){g(F,0)}function g(F,H){const Z=r.newAttributes,D=r.enabledAttributes,q=r.attributeDivisors;Z[F]=1,D[F]===0&&(i.enableVertexAttribArray(F),D[F]=1),q[F]!==H&&(i.vertexAttribDivisor(F,H),q[F]=H)}function M(){const F=r.newAttributes,H=r.enabledAttributes;for(let Z=0,D=H.length;Z<D;Z++)H[Z]!==F[Z]&&(i.disableVertexAttribArray(Z),H[Z]=0)}function E(F,H,Z,D,q,j,V){V===!0?i.vertexAttribIPointer(F,H,Z,q,j):i.vertexAttribPointer(F,H,Z,D,q,j)}function y(F,H,Z,D){_();const q=D.attributes,j=Z.getAttributes(),V=H.defaultAttributeValues;for(const ot in j){const X=j[ot];if(X.location>=0){let et=q[ot];if(et===void 0&&(ot==="instanceMatrix"&&F.instanceMatrix&&(et=F.instanceMatrix),ot==="instanceColor"&&F.instanceColor&&(et=F.instanceColor)),et!==void 0){const rt=et.normalized,bt=et.itemSize,Nt=t.get(et);if(Nt===void 0)continue;const Q=Nt.buffer,Mt=Nt.type,wt=Nt.bytesPerElement,Ut=Mt===i.INT||Mt===i.UNSIGNED_INT||et.gpuType===ko;if(et.isInterleavedBufferAttribute){const _t=et.data,Gt=_t.isInterleavedBuffer===!0?_t.stride:_t.itemSize,ve=et.offset;if(_t.isInstancedInterleavedBuffer||_t.isInstancedBufferAttribute){for(let Ot=0;Ot<X.locationSize;Ot++)g(X.location+Ot,_t.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Ot=0;Ot<X.locationSize;Ot++)p(X.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let Ot=0;Ot<X.locationSize;Ot++)E(X.location+Ot,bt/X.locationSize,Mt,rt,Gt*wt,(ve+bt/X.locationSize*Ot)*wt,Ut)}else{if(et.isInstancedBufferAttribute){for(let _t=0;_t<X.locationSize;_t++)g(X.location+_t,et.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let _t=0;_t<X.locationSize;_t++)p(X.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let _t=0;_t<X.locationSize;_t++)E(X.location+_t,bt/X.locationSize,Mt,rt,bt*wt,bt/X.locationSize*_t*wt,Ut)}}else if(V!==void 0){const rt=V[ot];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(X.location,rt);break;case 3:i.vertexAttrib3fv(X.location,rt);break;case 4:i.vertexAttrib4fv(X.location,rt);break;default:i.vertexAttrib1fv(X.location,rt)}}}}M()}function C(){B();for(const F in n){const H=n[F];for(const Z in H){const D=H[Z];for(const q in D){const j=D[q];for(const V in j)h(j[V].object),delete j[V];delete D[q]}}delete n[F]}}function R(F){if(n[F.id]===void 0)return;const H=n[F.id];for(const Z in H){const D=H[Z];for(const q in D){const j=D[q];for(const V in j)h(j[V].object),delete j[V];delete D[q]}}delete n[F.id]}function x(F){for(const H in n){const Z=n[H];for(const D in Z){const q=Z[D];if(q[F.id]===void 0)continue;const j=q[F.id];for(const V in j)h(j[V].object),delete j[V];delete q[F.id]}}}function b(F){for(const H in n){const Z=n[H],D=F.isInstancedMesh===!0?F.id:0,q=Z[D];if(q!==void 0){for(const j in q){const V=q[j];for(const ot in V)h(V[ot].object),delete V[ot];delete q[j]}delete Z[D],Object.keys(Z).length===0&&delete n[H]}}}function B(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Cm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Pm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==un&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const b=x===Fn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==nn&&x!==An&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:y,maxSamples:C,samples:R}}function Lm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Kn,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,E=M*4;let y=g.clippingState||null;l.value=y,y=h(m,d,E,f);for(let C=0;C!==E;++C)y[C]=e[C];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,y=f;E!==_;++E,y+=4)a.copy(u[E]).applyMatrix4(M,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}class jo extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new wh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pi(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:Qi});r.uniforms.tEquirect.value=e;const a=new Ft(s,r),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=Qe),new No(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const nc=256,Dm=3,Nm=20,Gh=256,Vh=16,Im=3,Um=new U,Fm=new Yt;class Gr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new No(1,10,null),this._boxMesh=new Ft(new pi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Um}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(Fm));const p=new No(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(nc,Ad(t))}_fromTexture(t,e){t.mapping===ns||t.mapping===Ns?this._setSize(t.image.length===0?nc:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=ic(t,!1,!1),n=Math.log2(t)-Dm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ic(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ns||t.mapping===Ns?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=sc()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Om(),this._integrationMaterial=zm());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Vh);for(let a=0;a<=n;a++){const o=Gr.lodToRoughness(a,n);if(a>n-Im)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{const l=o>0?Math.log2(e)+.5*Math.log2(6/(Gh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Bm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function ic(i,t,e){return new jo(i,{minFilter:ci,generateMipmaps:t,type:Fn,colorSpace:Fs,depthBuffer:e})}function qs(i,t,e){return new Cn({name:i,uniforms:t,vertexShader:Kt.cube_vert,fragmentShader:e,side:je,blending:Qi,depthTest:!1,depthWrite:!1})}function Om(){return qs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gh}u

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
	`)}function zm(){return qs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vh}},`

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
	`)}function Bm(){return qs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Nm}
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
	`)}function sc(){return qs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function rc(){return qs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function km(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===sa||f===ra)if(t.has(d)){const m=t.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new jo(m.height);return _.fromEquirectangularTexture(i,d),t.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,m=f===sa||f===ra,_=f===ns||f===Ns;if(m||_){let p=e.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Gr(i)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return m&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Gr(i)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,f){return f===sa?d.mapping=ns:f===ra&&(d.mapping=Ns),d}function l(d){let f=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Hm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Lr("WebGLRenderer: "+n+" extension not supported."),s}}}function Gm(i,t,e,n){const s={},r=new WeakMap,a=new FinalizationRegistry(m=>delete s[m]);function o(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(const p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",o),delete s[m.id],a.unregister(m);const _=r.get(m);_&&(t.remove(_),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(m){const _=m.attributes;for(const p in _)t.update(_[p],i.ARRAY_BUFFER)}function u(m){const _=m.index,p=m.attributes.position;let g=0;if(p===void 0)return;const M=_!==null?_.array.length:p.array.length/3-1,E=p.count>=65535?Eh:yh,y=new E(Math.ceil(M/3)*6,1),C=y.array;if(_!==null){const x=_.array;g=_.version;for(let b=0,B=0;b<M;b+=3){const N=x[b+0],F=x[b+1],H=x[b+2];C[B++]=N,C[B++]=F,C[B++]=F,C[B++]=H,C[B++]=H,C[B++]=N}}else{g=p.version;for(let x=0,b=0;x<M;x+=3){const B=x+0,N=x+1,F=x+2;C[b++]=B,C[b++]=N,C[b++]=N,C[b++]=F,C[b++]=F,C[b++]=B}}y.version=g;const R=r.get(m);R&&t.remove(R),r.set(m,y)}function d(m){const _=r.get(m);if(_){const p=m.index;p!==null&&_.version<p.version&&u(m)}else u(m);return r.get(m)}function f(){for(const m in s){const _=s[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function Vm(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Wm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ae("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Xm(i,t,e){const n=new WeakMap,s=new _e;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let B=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const R=new Float32Array(y*C*4*u),x=new Mh(R,y,C,u);x.type=An,x.needsUpdate=!0;const b=E*4;for(let N=0;N<u;N++){const F=p[N],H=g[N],Z=M[N],D=y*C*4*N;for(let q=0;q<F.count;q++){const j=q*b;f===!0&&(s.fromBufferAttribute(F,q),R[D+j+0]=s.x,R[D+j+1]=s.y,R[D+j+2]=s.z,R[D+j+3]=0),m===!0&&(s.fromBufferAttribute(H,q),R[D+j+4]=s.x,R[D+j+5]=s.y,R[D+j+6]=s.z,R[D+j+7]=0),_===!0&&(s.fromBufferAttribute(Z,q),R[D+j+8]=s.x,R[D+j+9]=s.y,R[D+j+10]=s.z,R[D+j+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new At(y,C)},n.set(o,d),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function qm(i,t,e,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Ym={[nh]:"LINEAR_TONE_MAPPING",[ih]:"REINHARD_TONE_MAPPING",[sh]:"CINEON_TONE_MAPPING",[rh]:"ACES_FILMIC_TONE_MAPPING",[oh]:"AGX_TONE_MAPPING",[lh]:"NEUTRAL_TONE_MAPPING",[ah]:"CUSTOM_TONE_MAPPING"};function Km(i,t,e,n,s,r){const a=new In(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const h=new an;h.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ye([0,2,0,0,2,0],2));const u=new Ff({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ft(h,u),f=new Hr(-1,1,1,-1,0,1);let m=null,_=null,p=!1,g,M=null,E=[],y=!1;this.setSize=function(C,R){a.setSize(C,R),o!==null&&o.setSize(C,R),l!==null&&l.setSize(C,R);for(let x=0;x<E.length;x++){const b=E[x];b.setSize&&b.setSize(C,R)}},this.setEffects=function(C){E=C,y=E.length>0&&E[0].isRenderPass===!0;const R=a.width,x=a.height;E.length>0&&o===null&&(o=new In(R,x,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),l=new In(R,x,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));const b=s===!0&&E.some(B=>B.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new ss(R,x),r===!0&&(c.format=hi,c.type=is)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let B=0;B<E.length;B++){const N=E[B];N.setSize&&N.setSize(R,x),b&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(C,R){if(p||C.toneMapping===Qn&&E.length===0)return!1;if(M=R,R!==null){const x=R.width,b=R.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return y===!1&&C.setRenderTarget(a),g=C.toneMapping,C.toneMapping=Qn,!0},this.hasRenderPass=function(){return y},this.end=function(C,R){C.toneMapping=g,p=!0;let x=a,b=o;for(let B=0;B<E.length;B++){const N=E[B];N.enabled!==!1&&(N.render(C,b,x,R),N.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(m!==C.outputColorSpace||_!==C.toneMapping){m=C.outputColorSpace,_=C.toneMapping,u.defines={},ee.getTransfer(m)===ce&&(u.defines.SRGB_TRANSFER="");const B=Ym[_];B&&(u.defines[B]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(M),C.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Wh=new Ve,Xh=new ss(1,1),qh=new Th(1),Yh=new Mh,Kh=new Ud,Zh=new wh,ac=[],oc=[],lc=new Float32Array(16),cc=new Float32Array(9),hc=new Float32Array(4);function cs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ac[s];if(r===void 0&&(r=new Float32Array(s),ac[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $r(i,t){let e=oc[t];e===void 0&&(e=new Int32Array(t),oc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Qm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function jm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Ne(e,n))return;hc.set(n),i.uniformMatrix2fv(this.addr,!1,hc),Ie(e,n)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Ne(e,n))return;cc.set(n),i.uniformMatrix3fv(this.addr,!1,cc),Ie(e,n)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Ne(e,n))return;lc.set(n),i.uniformMatrix4fv(this.addr,!1,lc),Ie(e,n)}}function ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function Qr(i){return i.version===0&&(i.compareFunction=_h,i.needsUpdate=!0),i}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Qr(Xh):r=Wh,e.setTexture2D(t||r,s)}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kh,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Qr(qh):r=Zh,e.setTextureCube(t||r,s)}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yh,s)}function pg(i){switch(i){case 5126:return Zm;case 35664:return Jm;case 35665:return $m;case 35666:return Qm;case 35674:return jm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}function mg(i,t){i.uniform1fv(this.addr,t)}function gg(i,t){const e=cs(t,this.size,2);i.uniform2fv(this.addr,e)}function xg(i,t){const e=cs(t,this.size,3);i.uniform3fv(this.addr,e)}function _g(i,t){const e=cs(t,this.size,4);i.uniform4fv(this.addr,e)}function vg(i,t){const e=cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mg(i,t){const e=cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sg(i,t){const e=cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yg(i,t){i.uniform1iv(this.addr,t)}function Eg(i,t){i.uniform2iv(this.addr,t)}function bg(i,t){i.uniform3iv(this.addr,t)}function wg(i,t){i.uniform4iv(this.addr,t)}function Tg(i,t){i.uniform1uiv(this.addr,t)}function Ag(i,t){i.uniform2uiv(this.addr,t)}function Rg(i,t){i.uniform3uiv(this.addr,t)}function Cg(i,t){i.uniform4uiv(this.addr,t)}function Pg(i,t,e){const n=this.cache,s=t.length,r=$r(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Qr(Xh):a=Wh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Lg(i,t,e){const n=this.cache,s=t.length,r=$r(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Kh,r[a])}function Dg(i,t,e){const n=this.cache,s=t.length,r=$r(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Qr(qh):a=Zh;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Ng(i,t,e){const n=this.cache,s=t.length,r=$r(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yh,r[a])}function Ig(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return xg;case 35666:return _g;case 35674:return vg;case 35675:return Mg;case 35676:return Sg;case 5124:case 35670:return yg;case 35667:case 35671:return Eg;case 35668:case 35672:return bg;case 35669:case 35673:return wg;case 5125:return Tg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ng}}class Ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pg(e.type)}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ig(e.type)}}class Og{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function uc(i,t){i.seq.push(t),i.map[t.id]=t}function zg(i,t,e){const n=i.name,s=n.length;for(Ia.lastIndex=0;;){const r=Ia.exec(n),a=Ia.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){uc(e,c===void 0?new Ug(o,i,t):new Fg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Og(o),uc(e,u)),e=u}}}class Nr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);zg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function dc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Bg=37297;let kg=0;function Hg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const fc=new Wt;function Gg(i){ee._getMatrix(fc,ee.workingColorSpace,i);const t=`mat3( ${fc.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Br:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Hg(i.getShaderSource(t),o)}else return r}function Vg(i,t){const e=Gg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Wg={[nh]:"Linear",[ih]:"Reinhard",[sh]:"Cineon",[rh]:"ACESFilmic",[oh]:"AgX",[lh]:"Neutral",[ah]:"Custom"};function Xg(i,t){const e=Wg[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mr=new U;function qg(){ee.getLuminanceCoefficients(Mr);const i=Mr.x.toFixed(4),t=Mr.y.toFixed(4),e=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function Kg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Es(i){return i!==""}function mc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function gc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(i){return i.replace(Jg,$g)}function $g(i,t){const e=Kt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Uo(e)}const Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(Qg,jg)}function jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _c(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const tx={[Tr]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function ex(i){return tx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nx={[Ns]:"ENVMAP_MODE_REFRACTION"};function ix(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":nx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const sx={[eh]:"ENVMAP_BLENDING_MULTIPLY",[hd]:"ENVMAP_BLENDING_MIX",[ud]:"ENVMAP_BLENDING_ADD"};function rx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":sx[i.combine]||"ENVMAP_BLENDING_NONE"}function ax(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ex(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ix(e),u=rx(e),d=Yg(e),f=Kg(r),m=s.createProgram();let _,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Es).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(_=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Vg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=Uo(a),a=mc(a,e),a=gc(a,e),o=Uo(o),o=mc(o,e),o=gc(o,e),a=xc(a),o=xc(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=g+_+a,E=g+p+o,y=dc(s,s.VERTEX_SHADER,M),C=dc(s,s.FRAGMENT_SHADER,E);s.attachShader(m,y),s.attachShader(m,C),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function R(N){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(m)||"",H=s.getShaderInfoLog(y)||"",Z=s.getShaderInfoLog(C)||"",D=F.trim(),q=H.trim(),j=Z.trim();let V=!0,ot=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,y,C);else{const X=pc(s,y,"vertex"),et=pc(s,C,"fragment");ae("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+D+`
`+X+`
`+et)}else D!==""?Ht("WebGLProgram: Program Info Log:",D):(q===""||j==="")&&(ot=!1);ot&&(N.diagnostics={runnable:V,programLog:D,vertexShader:{log:q,prefix:_},fragmentShader:{log:j,prefix:p}})}s.deleteShader(y),s.deleteShader(C),x=new Nr(s,m),b=Zg(s,m)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(m,Bg)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=C,this}let ox=0;class lx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cx(t),e.set(t,n)),n}}class cx{constructor(t){this.id=ox++,this.code=t,this.usedTimes=0}}function hx(i){return i===wi||i===Or||i===zr}function ux(i,t,e,n,s,r){const a=new Zo,o=new lx,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,b,B,N,F,H){const Z=N.fog,D=F.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,V=t.get(x.envMap||q,j),ot=d[x.type];let X=n.precision;x.precision!==null&&(X=n.getMaxPrecision(x.precision),X!==x.precision&&Ht("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));const et=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,rt=et!==void 0?et.length:0;let bt=0;D.morphAttributes.position!==void 0&&(bt=1),D.morphAttributes.normal!==void 0&&(bt=2),D.morphAttributes.color!==void 0&&(bt=3);let Nt,Q,Mt,wt;if(ot){const it=Nn[ot];Nt=it.vertexShader,Q=it.fragmentShader}else{Nt=x.vertexShader,Q=x.fragmentShader;const it=o.getVertexShaderStage(x),Jt=o.getFragmentShaderStage(x);o.update(x,it,Jt),Mt=it.id,wt=Jt.id}const Ut=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Gt=F.isInstancedMesh===!0,ve=F.isBatchedMesh===!0,Ot=!!x.map,ie=!!x.matcap,se=!!V,kt=se&&V.isPMREMTexture===!0,xe=!!x.aoMap,Ee=!!x.lightMap,ze=!!x.bumpMap&&x.wireframe===!1,fe=!!x.normalMap,on=!!x.displacementMap,Te=!!x.emissiveMap,Xe=!!x.metalnessMap,qe=!!x.roughnessMap,be=x.anisotropy>0,I=x.clearcoat>0,Pe=x.diffuseRoughness>0,ue=x.dispersion>0,Xt=x.retroreflectivity>0,mt=x.iridescence>0,we=x.sheen>0,It=x.transmission>0,Bt=be&&!!x.anisotropyMap,T=I&&!!x.clearcoatMap,v=I&&!!x.clearcoatNormalMap,O=I&&!!x.clearcoatRoughnessMap,at=Pe&&!!x.diffuseRoughnessMap,tt=mt&&!!x.iridescenceMap,ct=mt&&!!x.iridescenceThicknessMap,dt=we&&!!x.sheenColorMap,Y=we&&!!x.sheenRoughnessMap,J=!!x.specularMap,ft=!!x.specularColorMap,P=!!x.specularIntensityMap,$=It&&!!x.transmissionMap,W=It&&!!x.thicknessMap,pt=!!x.gradientMap,ht=!!x.alphaMap,ut=x.alphaTest>0,Lt=!!x.alphaHash,Vt=!!x.extensions;let lt=Qn;x.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(lt=i.toneMapping);const nt=kt?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,st={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:Nt,fragmentShader:Q,defines:x.defines,customVertexShaderID:Mt,customFragmentShaderID:wt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:ve,batchingColor:ve&&F._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&F.instanceColor!==null,instancingMorph:Gt&&F.morphTexture!==null,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:ie,envMap:se,envMapMode:se&&V.mapping,envMapPMREM:kt,envMapMaxLod:kt?nt.length-1:null,envMapSize:kt?nt[0].width:null,aoMap:xe,lightMap:Ee,bumpMap:ze,normalMap:fe,displacementMap:on,emissiveMap:Te,normalMapObjectSpace:fe&&x.normalMapType===pd,normalMapTangentSpace:fe&&x.normalMapType===Co,packedNormalMap:fe&&x.normalMapType===Co&&hx(x.normalMap.format),metalnessMap:Xe,roughnessMap:qe,anisotropy:be,anisotropyMap:Bt,clearcoat:I,clearcoatMap:T,clearcoatNormalMap:v,clearcoatRoughnessMap:O,diffuseRoughness:Pe,diffuseRoughnessMap:at,dispersion:ue,retroreflection:Xt,iridescence:mt,iridescenceMap:tt,iridescenceThicknessMap:ct,sheen:we,sheenColorMap:dt,sheenRoughnessMap:Y,specularMap:J,specularColorMap:ft,specularIntensityMap:P,transmission:It,transmissionMap:$,thicknessMap:W,gradientMap:pt,opaque:x.transparent===!1&&x.blending===ws&&x.alphaToCoverage===!1,alphaMap:ht,alphaTest:ut,alphaHash:Lt,combine:x.combine,mapUv:Ot&&f(x.map.channel),aoMapUv:xe&&f(x.aoMap.channel),lightMapUv:Ee&&f(x.lightMap.channel),bumpMapUv:ze&&f(x.bumpMap.channel),normalMapUv:fe&&f(x.normalMap.channel),displacementMapUv:on&&f(x.displacementMap.channel),emissiveMapUv:Te&&f(x.emissiveMap.channel),metalnessMapUv:Xe&&f(x.metalnessMap.channel),roughnessMapUv:qe&&f(x.roughnessMap.channel),anisotropyMapUv:Bt&&f(x.anisotropyMap.channel),clearcoatMapUv:T&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(x.sheenRoughnessMap.channel),specularMapUv:J&&f(x.specularMap.channel),specularColorMapUv:ft&&f(x.specularColorMap.channel),specularIntensityMapUv:P&&f(x.specularIntensityMap.channel),transmissionMapUv:$&&f(x.transmissionMap.channel),thicknessMapUv:W&&f(x.thicknessMap.channel),alphaMapUv:ht&&f(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(fe||be),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Ot||ht),fog:!!Z,useFog:x.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&fe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:bt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.filter(it=>it.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&ee.getTransfer(x.map.colorSpace)===ce,decodeVideoTextureEmissive:Te&&x.emissiveMap.isVideoTexture===!0&&ee.getTransfer(x.emissiveMap.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===je,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Vt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&x.extensions.multiDraw===!0||ve)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function _(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const B in x.defines)b.push(B),b.push(x.defines[B]);return x.isRawShaderMaterial===!1&&(p(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){const b=d[x.type];let B;if(b){const N=Nn[b];B=Nf.clone(N.uniforms)}else B=x.uniforms;return B}function E(x,b){let B=h.get(b);return B!==void 0?++B.usedTimes:(B=new ax(i,b,x,s),c.push(B),h.set(b,B)),B}function y(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function C(x){o.remove(x)}function R(){o.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:M,acquireProgram:E,releaseProgram:y,releaseShaderCache:C,programs:c,dispose:R}}function dx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function fx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,_,p,g){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},i[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=m,M.materialVariant=a(d),M.groupOrder=_,M.renderOrder=d.renderOrder,M.z=p,M.group=g),t++,M}function l(d,f,m,_,p,g,M){M.reversedDepth===!0&&(p=-p);const E=o(d,f,m,_,p,g);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):e.push(E)}function c(d,f,m,_,p,g){const M=o(d,f,m,_,p,g);m.transmission>0?n.unshift(M):m.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||fx),n.length>1&&n.sort(f||vc),s.length>1&&s.sort(f||vc)}function u(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function px(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Mc,i.set(n,[a])):s>=r.length?(a=new Mc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Yt};break;case"SpotLight":e={position:new U,direction:new U,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function gx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let xx=0;function _x(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function vx(i){const t=new mx,e=gx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new oe,a=new oe;function o(c){let h=0,u=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,M=0,E=0,y=0,C=0,R=0,x=0,b=0,B=0,N=0;c.sort(_x);for(let H=0,Z=c.length;H<Z;H++){const D=c[H],q=D.color,j=D.intensity,V=D.distance;let ot=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===wi?ot=D.shadow.map.texture:ot=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=q.r*j,u+=q.g*j,d+=q.b*j;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],j);N++}else if(D.isSunLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,rt=e.get(D);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[m]=rt,n.sunShadowMap[m]=ot;const bt=et.getViewportCount();for(let Nt=0;Nt<bt;Nt++)n.sunShadowMatrix[_+Nt]=et.getMatrix(Nt),n.sunShadowCascade[_+Nt]=et._cascadeData[Nt];_+=bt,m++}n.sun[f]=X,f++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,rt=e.get(D);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,n.directionalShadow[p]=rt,n.directionalShadowMap[p]=ot,n.directionalShadowMatrix[p]=D.shadow.matrix,C++}n.directional[p]=X,p++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(q).multiplyScalar(j),X.distance=V,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[M]=X;const et=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,et.updateMatrices(D),D.castShadow&&B++),n.spotLightMatrix[M]=et.matrix,D.castShadow){const rt=e.get(D);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,n.spotShadow[M]=rt,n.spotShadowMap[M]=ot,x++}M++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(q).multiplyScalar(j),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=X,E++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const et=D.shadow,rt=e.get(D);rt.shadowIntensity=et.intensity,rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,rt.shadowCameraNear=et.camera.near,rt.shadowCameraFar=et.camera.far,n.pointShadow[g]=rt,n.pointShadowMap[g]=ot,n.pointShadowMatrix[g]=D.shadow.matrix,R++}n.point[g]=X,g++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(j),X.groundColor.copy(D.groundColor).multiplyScalar(j),n.hemi[y]=X,y++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.sunLength!==f||F.directionalLength!==p||F.pointLength!==g||F.spotLength!==M||F.rectAreaLength!==E||F.hemiLength!==y||F.numSunShadows!==m||F.numDirectionalShadows!==C||F.numPointShadows!==R||F.numSpotShadows!==x||F.numSpotMaps!==b||F.numLightProbes!==N)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=E,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-B,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=N,F.sunLength=f,F.directionalLength=p,F.pointLength=g,F.spotLength=M,F.rectAreaLength=E,F.hemiLength=y,F.numSunShadows=m,F.numDirectionalShadows=C,F.numPointShadows=R,F.numSpotShadows=x,F.numSpotMaps=b,F.numLightProbes=N,n.version=xx++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0,p=0;const g=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){const y=c[M];if(y.isSunLight){const C=n.sun[u];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(g),u++}else if(y.isDirectionalLight){const C=n.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),d++}else if(y.isSpotLight){const C=n.spot[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(g),m++}else if(y.isRectAreaLight){const C=n.rectArea[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const C=n.point[f];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const C=n.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function Sc(i){const t=new vx(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Mx(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Sc(i),t.set(s,[o])):r>=a.length?(o=new Sc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Sx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yx=`uniform sampler2D shadow_pass;
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
}`,Ex=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],bx=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],yc=new oe,vs=new U,Ua=new U;function wx(i,t,e){let n=new zs;const s=new At,r=new At,a=new _e,o=new Of,l=new zf,c={},h=e.maxTextureSize,u={[bi]:je,[je]:bi,[hn]:hn},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:Sx,fragmentShader:yx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new an;m.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tr;let g=this.type;this.render=function(R,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===Xu&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tr);const B=i.getRenderTarget(),N=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Qi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Z=g!==this.type;Z&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(q=>q.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,q=R.length;D<q;D++){const j=R[D],V=j.shadow;if(V===void 0){Ht("WebGLShadowMap:",j,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ot=V.getFrameExtents();s.multiply(ot),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,V.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||Z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ss){if(j.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new In(s.x,s.y,{format:wi,type:Fn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),V.map.texture.name=j.name+".shadowMap",V.map.depthTexture=new ss(s.x,s.y,An),V.map.depthTexture.name=j.name+".shadowMapDepth",V.map.depthTexture.format=di,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ge,V.map.depthTexture.magFilter=ge}else j.isPointLight?(V.map=new jo(s.x),V.map.depthTexture=new Th(s.x,Un)):(V.map=new In(s.x,s.y),V.map.depthTexture=new ss(s.x,s.y,Un)),V.map.depthTexture.name=j.name+".shadowMap",V.map.depthTexture.format=di,this.type===Tr?(V.map.depthTexture.compareFunction=X?xh:gh,V.map.depthTexture.minFilter=Qe,V.map.depthTexture.magFilter=Qe):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=ge,V.map.depthTexture.magFilter=ge);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);const et=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();j.isPointLight!==!0&&V.updateMatrices(j,b);const rt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let bt=0;bt<et;bt++){const Nt=V.getCamera(bt);if(j.isPointLight){const Q=V.camera,Mt=V.matrix,wt=j.distance||Q.far;wt!==Q.far&&(Q.far=wt,Q.updateProjectionMatrix()),vs.setFromMatrixPosition(j.matrixWorld),Q.position.copy(vs),Ua.copy(Q.position),Ua.add(Ex[bt]),Q.up.copy(bx[bt]),Q.lookAt(Ua),Q.updateMatrixWorld(),Mt.makeTranslation(-vs.x,-vs.y,-vs.z),yc.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(yc,Q.coordinateSystem,Q.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,bt),i.clear();else{bt===0&&(i.setRenderTarget(V.map),i.clear());const Q=V.getViewport(bt);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),H.viewport(a)}n=V.getFrustum(bt),y(x,b,Nt,j,rt,this.type)}V.isPointLightShadow!==!0&&this.type===Ss&&M(V,b),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(B,N,F)};function M(R,x){const b=t.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new In(s.x,s.y,{format:wi,type:Fn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(x,null,b,d,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(x,null,b,f,_,null)}function E(R,x,b,B){let N=null;const F=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)N=F;else if(N=b.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const H=N.uuid,Z=x.uuid;let D=c[H];D===void 0&&(D={},c[H]=D);let q=D[Z];q===void 0&&(q=N.clone(),D[Z]=q,x.addEventListener("dispose",C)),N=q}if(N.visible=x.visible,N.wireframe=x.wireframe,B===Ss?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:u[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const H=i.properties.get(N);H.light=b}return N}function y(R,x,b,B,N,F){if(R.visible===!1)return;if(R.layers.test(N)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&F===Ss)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const D=t.update(R),q=R.material;if(Array.isArray(q)){const j=D.groups;for(let V=0,ot=j.length;V<ot;V++){const X=j[V],et=q[X.materialIndex];if(et&&et.visible){const rt=E(R,et,B,F);R.onBeforeShadow(i,R,x,b,D,rt,X),i.renderBufferDirect(b,null,D,rt,R,X),R.onAfterShadow(i,R,x,b,D,rt,X)}}}else if(q.visible){const j=E(R,q,B,F);R.onBeforeShadow(i,R,x,b,D,j,null),i.renderBufferDirect(b,null,D,j,R,null),R.onAfterShadow(i,R,x,b,D,j,null)}}const Z=R.children;for(let D=0,q=Z.length;D<q;D++)y(Z[D],x,b,B,N,F)}function C(R){R.target.removeEventListener("dispose",C);for(const b in c){const B=c[b],N=R.target.uuid;N in B&&(B[N].dispose(),delete B[N])}}}function Tx(i,t){function e(){let P=!1;const $=new _e;let W=null;const pt=new _e(0,0,0,0);return{setMask:function(ht){W!==ht&&!P&&(i.colorMask(ht,ht,ht,ht),W=ht)},setLocked:function(ht){P=ht},setClear:function(ht,ut,Lt,Vt,lt){lt===!0&&(ht*=Vt,ut*=Vt,Lt*=Vt),$.set(ht,ut,Lt,Vt),pt.equals($)===!1&&(i.clearColor(ht,ut,Lt,Vt),pt.copy($))},reset:function(){P=!1,W=null,pt.set(-1,0,0,0)}}}function n(){let P=!1,$=!1,W=null,pt=null,ht=null;return{setReversed:function(ut){if($!==ut){const Lt=t.get("EXT_clip_control");ut?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),$=ut;const Vt=ht;ht=null,this.setClear(Vt)}},getReversed:function(){return $},setTest:function(ut){ut?_t(i.DEPTH_TEST):Gt(i.DEPTH_TEST)},setMask:function(ut){W!==ut&&!P&&(i.depthMask(ut),W=ut)},setFunc:function(ut){if($&&(ut=wd[ut]),pt!==ut){switch(ut){case Wa:i.depthFunc(i.NEVER);break;case Xa:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case Ds:i.depthFunc(i.LEQUAL);break;case Ya:i.depthFunc(i.EQUAL);break;case Ka:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=ut}},setLocked:function(ut){P=ut},setClear:function(ut){ht!==ut&&(ht=ut,$&&(ut=1-ut),i.clearDepth(ut))},reset:function(){P=!1,W=null,pt=null,ht=null,$=!1}}}function s(){let P=!1,$=null,W=null,pt=null,ht=null,ut=null,Lt=null,Vt=null,lt=null;return{setTest:function(nt){P||(nt?_t(i.STENCIL_TEST):Gt(i.STENCIL_TEST))},setMask:function(nt){$!==nt&&!P&&(i.stencilMask(nt),$=nt)},setFunc:function(nt,st,it){(W!==nt||pt!==st||ht!==it)&&(i.stencilFunc(nt,st,it),W=nt,pt=st,ht=it)},setOp:function(nt,st,it){(ut!==nt||Lt!==st||Vt!==it)&&(i.stencilOp(nt,st,it),ut=nt,Lt=st,Vt=it)},setLocked:function(nt){P=nt},setClear:function(nt){lt!==nt&&(i.clearStencil(nt),lt=nt)},reset:function(){P=!1,$=null,W=null,pt=null,ht=null,ut=null,Lt=null,Vt=null,lt=null}}}const r=new e,a=new n,o=new s;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,m=[],_=null,p=!1,g=null,M=null,E=null,y=null,C=null,R=null,x=null,b=new Yt(0,0,0),B=0,N=!1,F=null,H=null,Z=null,D=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,ot=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=ot>=1):X.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=ot>=2);let et=null,rt={};const bt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Q=new _e().fromArray(bt),Mt=new _e().fromArray(Nt);function wt(P,$,W,pt){const ht=new Uint8Array(4),ut=i.createTexture();i.bindTexture(P,ut),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<W;Lt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D($+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ut}const Ut={};Ut[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ut[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ut[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ut[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_t(i.DEPTH_TEST),a.setFunc(Ds),ze(!1),fe(ml),_t(i.CULL_FACE),xe(Qi);function _t(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Gt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function ve(P,$){return d[P]!==$?(i.bindFramebuffer(P,$),d[P]=$,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Ot(P,$){let W=m,pt=!1;if(P){W=f.get($),W===void 0&&(W=[],f.set($,W));const ht=P.textures;if(W.length!==ht.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Lt=ht.length;ut<Lt;ut++)W[ut]=i.COLOR_ATTACHMENT0+ut;W.length=ht.length,pt=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,pt=!0);pt&&i.drawBuffers(W)}function ie(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const se={[Ji]:i.FUNC_ADD,[Yu]:i.FUNC_SUBTRACT,[Ku]:i.FUNC_REVERSE_SUBTRACT};se[Zu]=i.MIN,se[Ju]=i.MAX;const kt={[$u]:i.ZERO,[Qu]:i.ONE,[ju]:i.SRC_COLOR,[jc]:i.SRC_ALPHA,[rd]:i.SRC_ALPHA_SATURATE,[id]:i.DST_COLOR,[ed]:i.DST_ALPHA,[td]:i.ONE_MINUS_SRC_COLOR,[th]:i.ONE_MINUS_SRC_ALPHA,[sd]:i.ONE_MINUS_DST_COLOR,[nd]:i.ONE_MINUS_DST_ALPHA,[ad]:i.CONSTANT_COLOR,[od]:i.ONE_MINUS_CONSTANT_COLOR,[ld]:i.CONSTANT_ALPHA,[cd]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(P,$,W,pt,ht,ut,Lt,Vt,lt,nt){if(P===Qi){p===!0&&(Gt(i.BLEND),p=!1);return}if(p===!1&&(_t(i.BLEND),p=!0),P!==qu){if(P!==g||nt!==N){if((M!==Ji||C!==Ji)&&(i.blendEquation(i.FUNC_ADD),M=Ji,C=Ji),nt)switch(P){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",P);break}else switch(P){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xl:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",P);break}E=null,y=null,R=null,x=null,b.set(0,0,0),B=0,g=P,N=nt}return}ht=ht||$,ut=ut||W,Lt=Lt||pt,($!==M||ht!==C)&&(i.blendEquationSeparate(se[$],se[ht]),M=$,C=ht),(W!==E||pt!==y||ut!==R||Lt!==x)&&(i.blendFuncSeparate(kt[W],kt[pt],kt[ut],kt[Lt]),E=W,y=pt,R=ut,x=Lt),(Vt.equals(b)===!1||lt!==B)&&(i.blendColor(Vt.r,Vt.g,Vt.b,lt),b.copy(Vt),B=lt),g=P,N=!1}function Ee(P,$){P.side===hn?Gt(i.CULL_FACE):_t(i.CULL_FACE);let W=P.side===je;$&&(W=!W),ze(W),P.blending===ws&&P.transparent===!1?xe(Qi):xe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const pt=P.stencilWrite;o.setTest(pt),pt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Te(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):Gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ze(P){F!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),F=P)}function fe(P){P!==Vu?(_t(i.CULL_FACE),P!==H&&(P===ml?i.cullFace(i.BACK):P===Wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Gt(i.CULL_FACE),H=P}function on(P){P!==Z&&(V&&i.lineWidth(P),Z=P)}function Te(P,$,W){P?(_t(i.POLYGON_OFFSET_FILL),(D!==$||q!==W)&&(D=$,q=W,a.getReversed()&&($=-$,W=-W),i.polygonOffset($,W))):Gt(i.POLYGON_OFFSET_FILL)}function Xe(P){P?_t(i.SCISSOR_TEST):Gt(i.SCISSOR_TEST)}function qe(P){P===void 0&&(P=i.TEXTURE0+j-1),et!==P&&(i.activeTexture(P),et=P)}function be(P,$,W){W===void 0&&(et===null?W=i.TEXTURE0+j-1:W=et);let pt=rt[W];pt===void 0&&(pt={type:void 0,texture:void 0},rt[W]=pt),(pt.type!==P||pt.texture!==$)&&(et!==W&&(i.activeTexture(W),et=W),i.bindTexture(P,$||Ut[P]),pt.type=P,pt.texture=$)}function I(){const P=rt[et];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Pe(){try{i.compressedTexImage2D(...arguments)}catch(P){ae("WebGLState:",P)}}function ue(){try{i.compressedTexImage3D(...arguments)}catch(P){ae("WebGLState:",P)}}function Xt(){try{i.texSubImage2D(...arguments)}catch(P){ae("WebGLState:",P)}}function mt(){try{i.texSubImage3D(...arguments)}catch(P){ae("WebGLState:",P)}}function we(){try{i.compressedTexSubImage2D(...arguments)}catch(P){ae("WebGLState:",P)}}function It(){try{i.compressedTexSubImage3D(...arguments)}catch(P){ae("WebGLState:",P)}}function Bt(){try{i.texStorage2D(...arguments)}catch(P){ae("WebGLState:",P)}}function T(){try{i.texStorage3D(...arguments)}catch(P){ae("WebGLState:",P)}}function v(){try{i.texImage2D(...arguments)}catch(P){ae("WebGLState:",P)}}function O(){try{i.texImage3D(...arguments)}catch(P){ae("WebGLState:",P)}}function at(P){return u[P]!==void 0?u[P]:i.getParameter(P)}function tt(P,$){u[P]!==$&&(i.pixelStorei(P,$),u[P]=$)}function ct(P){Q.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function dt(P){Mt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Mt.copy(P))}function Y(P,$){let W=c.get($);W===void 0&&(W=new WeakMap,c.set($,W));let pt=W.get(P);pt===void 0&&(pt=i.getUniformBlockIndex($,P.name),i.uniformBlockBinding($,pt,pt),W.set(P,pt))}function J(P,$,W){const ht=c.get($).get(P);l[ht]!==W&&(i.bindBufferBase(i.UNIFORM_BUFFER,ht,W),l[ht]=W)}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},et=null,rt={},d={},l={},f=new WeakMap,m=[],_=null,p=!1,g=null,M=null,E=null,y=null,C=null,R=null,x=null,b=new Yt(0,0,0),B=0,N=!1,F=null,H=null,Z=null,D=null,q=null,Q.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_t,disable:Gt,bindFramebuffer:ve,drawBuffers:Ot,useProgram:ie,setBlending:xe,setMaterial:Ee,setFlipSided:ze,setCullFace:fe,setLineWidth:on,setPolygonOffset:Te,setScissorTest:Xe,activeTexture:qe,bindTexture:be,unbindTexture:I,compressedTexImage2D:Pe,compressedTexImage3D:ue,texImage2D:v,texImage3D:O,pixelStorei:tt,getParameter:at,updateUBOMapping:Y,uniformBlockBinding:J,texStorage2D:Bt,texStorage3D:T,texSubImage2D:Xt,texSubImage3D:mt,compressedTexSubImage2D:we,compressedTexSubImage3D:It,scissor:ct,viewport:dt,reset:ft}}function Ax(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap,u=new Set;let d;const f=new WeakMap,m=new Set,_=new FinalizationRegistry(T=>m.delete(T));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return p?new OffscreenCanvas(T,v):kr("canvas")}function M(T,v,O){let at=1;const tt=Bt(T);if((tt.width>O||tt.height>O)&&(at=O/Math.max(tt.width,tt.height)),at<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ct=Math.floor(at*tt.width),dt=Math.floor(at*tt.height);d===void 0&&(d=g(ct,dt));const Y=v?g(ct,dt):d;return Y.width=ct,Y.height=dt,Y.getContext("2d").drawImage(T,0,0,ct,dt),Ht("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ct+"x"+dt+")."),Y}else return"data"in T&&Ht("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function E(T){return T.generateMipmaps}function y(T){i.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(T,v,O,at,tt,ct=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let dt;at&&(dt=t.get("EXT_texture_norm16"),dt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=v;if(v===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8),O===i.UNSIGNED_SHORT&&dt&&(Y=dt.R16_EXT),O===i.SHORT&&dt&&(Y=dt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),v===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8),O===i.UNSIGNED_SHORT&&dt&&(Y=dt.RG16_EXT),O===i.SHORT&&dt&&(Y=dt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_SHORT&&dt&&(Y=dt.RGB16_EXT),O===i.SHORT&&dt&&(Y=dt.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){const J=ct?Br:ee.getTransfer(tt);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=J===ce?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&dt&&(Y=dt.RGBA16_EXT),O===i.SHORT&&dt&&(Y=dt.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(T,v){let O;return T?v===null||v===Un||v===is?O=i.DEPTH24_STENCIL8:v===An?O=i.DEPTH32F_STENCIL8:v===Us&&(O=i.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Un||v===is?O=i.DEPTH_COMPONENT24:v===An?O=i.DEPTH_COMPONENT32F:v===Us&&(O=i.DEPTH_COMPONENT16),O}function b(T,v){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==ge&&T.minFilter!==Qe?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function B(T){const v=new WeakRef(T);n.get(T).__ref=v,m.add(v),_.register(T,v,v)}function N(T){const v=n.get(T).__ref;v!==void 0&&(m.delete(v),_.unregister(v))}function F(T){Z(T.target)}function H(T){D(T.target)}function Z(T){T.removeEventListener("dispose",F),N(T),j(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function D(T){T.removeEventListener("dispose",H),N(T),ot(T)}function q(){for(const T of m){const v=T.deref();v!==void 0&&(v.isRenderTarget===!0?D(v):Z(v))}m.clear(),u.clear()}function j(T){const v=n.get(T);if(v.__webglInit===void 0)return;const O=T.source,at=f.get(O);if(at){const tt=at[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&V(T),Object.keys(at).length===0&&f.delete(O)}n.remove(T)}function V(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const O=T.source,at=f.get(O);delete at[v.__cacheKey],a.memory.textures--}function ot(T){const v=n.get(T);v.__depthDisposeCallback&&v.__depthDisposeCallback();const O=T.depthTexture;if(O&&O.renderTarget===T&&Z(O),T.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let ct=0;ct<v.__webglFramebuffer[tt].length;ct++)i.deleteFramebuffer(v.__webglFramebuffer[tt][ct]);else i.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[tt]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const at=T.textures;for(let tt=0,ct=at.length;tt<ct;tt++){const dt=n.get(at[tt]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(at[tt])}n.remove(T)}let X=0;function et(){X=0}function rt(){return X}function bt(T){X=T}function Nt(){const T=X;return T>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function Q(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.mipmapsAutoUpdate),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Mt(T,v){const O=n.get(T);if(T.isVideoTexture&&we(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const at=T.image;if(at===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(O,T,v);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function wt(T,v){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Ee(O,T,v);return}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function Ut(T,v){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Ee(O,T,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function _t(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ze(O,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const Gt={[Is]:i.REPEAT,[Jn]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},ve={[ge]:i.NEAREST,[dd]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[aa]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},Ot={[gd]:i.NEVER,[_h]:i.ALWAYS,[xd]:i.LESS,[gh]:i.LEQUAL,[_d]:i.EQUAL,[xh]:i.GEQUAL,[vd]:i.GREATER,[Md]:i.NOTEQUAL};function ie(T,v){if(v.type===An&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Qe||v.magFilter===aa||v.magFilter===Js||v.magFilter===ci||v.minFilter===Qe||v.minFilter===aa||v.minFilter===Js||v.minFilter===ci)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Gt[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Gt[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Gt[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ve[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Ot[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ge||v.minFilter!==Js&&v.minFilter!==ci||v.type===An&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function se(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",F),B(v));const at=v.source;let tt=f.get(at);tt===void 0&&(tt={},f.set(at,tt));const ct=Q(v);if(ct!==T.__cacheKey){tt[ct]===void 0&&(tt[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),tt[ct].usedTimes++;const dt=tt[T.__cacheKey];dt!==void 0&&(tt[T.__cacheKey].usedTimes--,dt.usedTimes===0&&V(v)),T.__cacheKey=ct,T.__webglTexture=tt[ct].texture}return O}function kt(T,v,O){return Math.floor(Math.floor(T/O)/v)}function xe(T,v,O,at){const ct=T.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,at,v.data);else{ct.sort((P,$)=>P.start-$.start);let dt=0;for(let P=1;P<ct.length;P++){const $=ct[dt],W=ct[P],pt=$.start+$.count,ht=kt(W.start,v.width,4),ut=kt($.start,v.width,4);W.start<=pt+1&&ht===ut&&kt(W.start+W.count-1,v.width,4)===ht?$.count=Math.max($.count,W.start+W.count-$.start):(++dt,ct[dt]=W)}ct.length=dt+1;const Y=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let P=0,$=ct.length;P<$;P++){const W=ct[P],pt=Math.floor(W.start/4),ht=Math.ceil(W.count/4),ut=pt%v.width,Lt=Math.floor(pt/v.width),Vt=ht,lt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Lt),e.texSubImage2D(i.TEXTURE_2D,0,ut,Lt,Vt,lt,O,at,v.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function Ee(T,v,O){let at=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(at=i.TEXTURE_3D);const tt=se(T,v),ct=v.source;e.bindTexture(at,T.__webglTexture,i.TEXTURE0+O);const dt=n.get(ct);if(ct.version!==dt.__version||tt===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const lt=ee.getPrimaries(ee.workingColorSpace),nt=v.colorSpace===oi?null:ee.getPrimaries(v.colorSpace),st=v.colorSpace===oi||lt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let J=M(v.image,!1,s.maxTextureSize);J=It(v,J);const ft=r.convert(v.format,v.colorSpace),P=r.convert(v.type);let $=R(v.internalFormat,ft,P,v.normalized,v.colorSpace,v.isVideoTexture);ie(at,v);let W;const pt=v.mipmaps,ht=v.isVideoTexture!==!0,ut=dt.__version===void 0||tt===!0,Lt=ct.dataReady,Vt=b(v,J);if(v.isDepthTexture)$=x(v.format===hi,v.type),ut&&(ht?e.texStorage2D(i.TEXTURE_2D,1,$,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,ft,P,null));else if(v.isDataTexture)if(pt.length>0){ht&&ut&&e.texStorage2D(i.TEXTURE_2D,Vt,$,pt[0].width,pt[0].height);for(let lt=0,nt=pt.length;lt<nt;lt++)W=pt[lt],ht?Lt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,W.width,W.height,ft,P,W.data):e.texImage2D(i.TEXTURE_2D,lt,$,W.width,W.height,0,ft,P,W.data);v.generateMipmaps=!1}else ht?(ut&&e.texStorage2D(i.TEXTURE_2D,Vt,$,J.width,J.height),Lt&&xe(v,J,ft,P)):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,ft,P,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ht&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,$,pt[0].width,pt[0].height,J.depth);for(let lt=0,nt=pt.length;lt<nt;lt++)if(W=pt[lt],v.format!==un)if(ft!==null)if(ht){if(Lt)if(v.layerUpdates.size>0){const st=ec(W.width,W.height,v.format,v.type);for(const it of v.layerUpdates){const Jt=W.data.subarray(it*st/W.data.BYTES_PER_ELEMENT,(it+1)*st/W.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,it,W.width,W.height,1,ft,Jt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,W.width,W.height,J.depth,ft,W.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,$,W.width,W.height,J.depth,0,W.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,W.width,W.height,J.depth,ft,P,W.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,$,W.width,W.height,J.depth,0,ft,P,W.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ht&&ut&&e.texStorage2D(i.TEXTURE_2D,Vt,$,pt[0].width,pt[0].height);for(let lt=0,nt=pt.length;lt<nt;lt++)W=pt[lt],v.format!==un?ft!==null?ht?Lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,W.width,W.height,ft,W.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,$,W.width,W.height,0,W.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Lt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,W.width,W.height,ft,P,W.data):e.texImage2D(i.TEXTURE_2D,lt,$,W.width,W.height,0,ft,P,W.data)}else if(v.isDataArrayTexture)if(ht){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Vt,$,J.width,J.height,J.depth),Lt)if(v.layerUpdates.size>0){const lt=ec(J.width,J.height,v.format,v.type);for(const nt of v.layerUpdates){const st=J.data.subarray(nt*lt/J.data.BYTES_PER_ELEMENT,(nt+1)*lt/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,J.width,J.height,1,ft,P,st)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,P,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,J.width,J.height,J.depth,0,ft,P,J.data);else if(v.isData3DTexture)ht?(ut&&e.texStorage3D(i.TEXTURE_3D,Vt,$,J.width,J.height,J.depth),Lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,P,J.data)):e.texImage3D(i.TEXTURE_3D,0,$,J.width,J.height,J.depth,0,ft,P,J.data);else if(v.isFramebufferTexture){if(ut)if(ht)e.texStorage2D(i.TEXTURE_2D,Vt,$,J.width,J.height);else{let lt=J.width,nt=J.height;for(let st=0;st<Vt;st++)e.texImage2D(i.TEXTURE_2D,st,$,lt,nt,0,ft,P,null),lt>>=1,nt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){const lt=i.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),J.parentNode!==lt){lt.appendChild(J),u.add(v),lt.onpaint=nt=>{const st=nt.changedElements;for(const it of u)st.includes(it.image)&&(it.needsUpdate=!0)},lt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const st=i.RGBA,it=i.RGBA,Jt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,st,it,Jt,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(pt.length>0){if(ht&&ut){const lt=Bt(pt[0]);e.texStorage2D(i.TEXTURE_2D,Vt,$,lt.width,lt.height)}for(let lt=0,nt=pt.length;lt<nt;lt++)W=pt[lt],ht?Lt&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,ft,P,W):e.texImage2D(i.TEXTURE_2D,lt,$,ft,P,W);v.generateMipmaps=!1}else if(ht){if(ut){const lt=Bt(J);e.texStorage2D(i.TEXTURE_2D,Vt,$,lt.width,lt.height)}Lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,P,J)}else e.texImage2D(i.TEXTURE_2D,0,$,ft,P,J);E(v)&&v.mipmapsAutoUpdate===!0&&y(at),dt.__version=ct.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ze(T,v,O){if(v.image.length!==6)return;const at=se(T,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const ct=n.get(tt);if(tt.version!==ct.__version||at===!0){e.activeTexture(i.TEXTURE0+O);const dt=ee.getPrimaries(ee.workingColorSpace),Y=v.colorSpace===oi?null:ee.getPrimaries(v.colorSpace),J=v.colorSpace===oi||dt===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ft=v.isCompressedTexture||v.image[0].isCompressedTexture,P=v.image[0]&&v.image[0].isDataTexture,$=[];for(let it=0;it<6;it++)!ft&&!P?$[it]=M(v.image[it],!0,s.maxCubemapSize):$[it]=P?v.image[it].image:v.image[it],$[it]=It(v,$[it]);const W=$[0],pt=r.convert(v.format,v.colorSpace),ht=r.convert(v.type);let ut=R(v.internalFormat,pt,ht,v.normalized,v.colorSpace);const Lt=v.isVideoTexture!==!0,Vt=ct.__version===void 0||at===!0,lt=tt.dataReady;let nt=b(v,W);ie(i.TEXTURE_CUBE_MAP,v);let st;if(v.isDepthTexture){if(ut=x(v.format===hi,v.type),Vt)if(Lt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ut,W.width,W.height);else for(let it=0;it<6;it++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ut,W.width,W.height,0,pt,ht,null)}else if(ft){Lt&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,ut,W.width,W.height);for(let it=0;it<6;it++){st=$[it].mipmaps;for(let Jt=0;Jt<st.length;Jt++){const pe=st[Jt];v.format!==un?pt!==null?Lt?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Jt,0,0,pe.width,pe.height,pt,pe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Jt,ut,pe.width,pe.height,0,pe.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Jt,0,0,pe.width,pe.height,pt,ht,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Jt,ut,pe.width,pe.height,0,pt,ht,pe.data)}}}else{if(st=v.mipmaps,Lt&&Vt){st.length>0&&nt++;const it=Bt($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,nt,ut,it.width,it.height)}for(let it=0;it<6;it++)if(P){Lt?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,$[it].width,$[it].height,pt,ht,$[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ut,$[it].width,$[it].height,0,pt,ht,$[it].data);for(let Jt=0;Jt<st.length;Jt++){const zt=st[Jt].image[it].image;Lt?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Jt+1,0,0,zt.width,zt.height,pt,ht,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Jt+1,ut,zt.width,zt.height,0,pt,ht,zt.data)}}else{Lt?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,pt,ht,$[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ut,pt,ht,$[it]);for(let Jt=0;Jt<st.length;Jt++){const pe=st[Jt];Lt?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Jt+1,0,0,pt,ht,pe.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Jt+1,ut,pt,ht,pe.image[it])}}}E(v)&&v.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ct.__version=tt.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function fe(T,v,O,at,tt,ct){const dt=r.convert(O.format,O.colorSpace),Y=r.convert(O.type),J=R(O.internalFormat,dt,Y,O.normalized,O.colorSpace),ft=n.get(v),P=n.get(O);if(P.__renderTarget=v,!ft.__hasExternalTextures){const $=Math.max(1,v.width>>ct),W=Math.max(1,v.height>>ct);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,ct,J,$,W,v.depth,0,dt,Y,null):e.texImage2D(tt,ct,J,$,W,0,dt,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),mt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,tt,P.__webglTexture,0,Xt(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,tt,P.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function on(T,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const at=v.depthTexture,tt=at&&at.isDepthTexture?at.type:null,ct=x(v.stencilBuffer,tt),dt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(v),ct,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(v),ct,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ct,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,dt,i.RENDERBUFFER,T)}else{const at=v.textures;for(let tt=0;tt<at.length;tt++){const ct=at[tt],dt=r.convert(ct.format,ct.colorSpace),Y=r.convert(ct.type),J=R(ct.internalFormat,dt,Y,ct.normalized,ct.colorSpace);mt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xt(v),J,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt(v),J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(T,v,O){const at=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const tt=n.get(v.depthTexture);tt.__renderTarget=v;const ct=at?v.depthTexture.image[0]:v.depthTexture.image;(!tt.__webglTexture||ct.width!==v.width||ct.height!==v.height)&&(ct.width=v.width,ct.height=v.height,v.depthTexture.needsUpdate=!0),at?_t(v.depthTexture,0):Mt(v.depthTexture,0);const dt=tt.__webglTexture,Y=Xt(v),J=at?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ft=v.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===di)mt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,J,dt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ft,J,dt,0);else if(v.depthTexture.format===hi)mt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,J,dt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,ft,J,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(T){const v=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const at=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),at){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,at.removeEventListener("dispose",tt)};at.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=at}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(O)for(let at=0;at<6;at++)Te(v.__webglFramebuffer[at],T,at);else T.texture.mipmaps.length>0?Te(v.__webglFramebuffer[0],T,0):Te(v.__webglFramebuffer,T,0);else if(O){v.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[at]),v.__webglDepthbuffer[at]===void 0)v.__webglDepthbuffer[at]=i.createRenderbuffer(),on(v.__webglDepthbuffer[at],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=v.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ct)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),on(v.__webglDepthbuffer,T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(T,v,O){const at=n.get(T);v!==void 0&&fe(at.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Xe(T)}function be(T){const v=T.texture,O=n.get(T),at=n.get(v);T.addEventListener("dispose",H),B(T);const tt=T.textures,ct=T.isWebGLCubeRenderTarget===!0,dt=tt.length>1;if(dt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=v.version,a.memory.textures++),ct){O.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0){O.__webglFramebuffer[Y]=[];for(let J=0;J<v.mipmaps.length;J++)O.__webglFramebuffer[Y][J]=i.createFramebuffer()}else O.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(v.mipmaps.length>0){O.__webglFramebuffer=[];for(let Y=0;Y<v.mipmaps.length;Y++)O.__webglFramebuffer[Y]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(dt)for(let Y=0,J=tt.length;Y<J;Y++){const ft=n.get(tt[Y]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&mt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Y=0;Y<tt.length;Y++){const J=tt[Y];O.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[Y]);const ft=r.convert(J.format,J.colorSpace),P=r.convert(J.type),$=R(J.internalFormat,ft,P,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),W=Xt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,$,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,O.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),on(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),ie(i.TEXTURE_CUBE_MAP,v);for(let Y=0;Y<6;Y++)if(v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)fe(O.__webglFramebuffer[Y][J],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,J);else fe(O.__webglFramebuffer[Y],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);E(v)?y(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(dt){for(let Y=0,J=tt.length;Y<J;Y++){const ft=tt[Y],P=n.get(ft);let $=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,P.__webglTexture),ie($,ft),fe(O.__webglFramebuffer,T,ft,i.COLOR_ATTACHMENT0+Y,$,0),E(ft)&&y($)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,at.__webglTexture),ie(Y,v),v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)fe(O.__webglFramebuffer[J],T,v,i.COLOR_ATTACHMENT0,Y,J);else fe(O.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,Y,0);E(v)?y(Y):v.mipmaps.length>0&&i.texParameteri(Y,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&Xe(T)}function I(T){const v=T.textures;for(let O=0,at=v.length;O<at;O++){const tt=v[O];if(E(tt)&&tt.mipmapsAutoUpdate===!0){const ct=C(T),dt=n.get(tt).__webglTexture;e.bindTexture(ct,dt),y(ct),e.unbindTexture()}}}const Pe=[];function ue(T){if(T.samples>0){if(mt(T)===!1){const v=T.textures,O=T.width,at=T.height;let tt=i.COLOR_BUFFER_BIT;const ct=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=n.get(T),Y=v.length>1;if(Y)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);const P=n.get(v[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,P,0)}i.blitFramebuffer(0,0,O,at,0,0,O,at,tt,i.NEAREST),l===!0&&(Pe.length=0,Pe.push(i.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Pe.push(ct),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,dt.__webglColorRenderbuffer[ft]);const P=n.get(v[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,P,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Xt(T){return Math.min(s.maxSamples,T.samples)}function mt(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function we(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function It(T,v){const O=T.colorSpace,at=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Fs&&O!==oi&&(ee.getTransfer(O)===ce?(at!==un||tt!==nn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",O)),v}function Bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Nt,this.resetTextureUnits=et,this.getTextureUnits=rt,this.setTextureUnits=bt,this.setTexture2D=Mt,this.setTexture2DArray=wt,this.setTexture3D=Ut,this.setTextureCube=_t,this.rebindTextures=qe,this.setupRenderTarget=be,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=mt,this.dispose=q}function Rx(i,t){function e(n,s=oi){let r;const a=ee.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hh)return i.BYTE;if(n===uh)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===ko)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Fn)return i.HALF_FLOAT;if(n===ph)return i.ALPHA;if(n===mh)return i.RGB;if(n===un)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Vo)return i.RED;if(n===Wo)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===Xo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===ja||n===to||n===eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===to)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===no||n===io||n===so||n===ro||n===ao||n===Or||n===oo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===no||n===io)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===so)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ro)return r.COMPRESSED_R11_EAC;if(n===ao)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return r.COMPRESSED_RG11_EAC;if(n===oo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===xo||n===_o||n===vo||n===Mo||n===So||n===yo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===co)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ho)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===po)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===go)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===So)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===bo||n===wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Eo)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===To||n===Ao||n===zr||n===Ro)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===To)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Px=`
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

}`;class Lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ah(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:Cx,fragmentShader:Px,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dx extends Pi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new Lx,g={},M=e.getContextAttributes();let E=null,y=null;const C=[],R=[],x=new At;let b=null,B=null;const N=new wn;N.viewport=new _e;const F=new wn;F.viewport=new _e;const H=[N,F],Z=new Vf;let D=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let Mt=C[Q];return Mt===void 0&&(Mt=new ma,C[Q]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(Q){let Mt=C[Q];return Mt===void 0&&(Mt=new ma,C[Q]=Mt),Mt.getGripSpace()},this.getHand=function(Q){let Mt=C[Q];return Mt===void 0&&(Mt=new ma,C[Q]=Mt),Mt.getHandSpace()};function j(Q){const Mt=R.indexOf(Q.inputSource);if(Mt===-1)return;const wt=C[Mt];wt!==void 0&&(wt.update(Q.inputSource,Q.frame,c||a),wt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ot);for(let Q=0;Q<C.length;Q++){const Mt=R[Q];Mt!==null&&(R[Q]=null,C[Q].disconnect(Mt))}D=null,q=null,p.reset();for(const Q in g)delete g[Q];if(t.setRenderTarget(E),f=null,d=null,u=null,s=null,y=null,Nt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),B!==null){const Q=B.camera;Q.fov=B.fov,Q.zoom=B.zoom,Q.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ot),M.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ut=null,_t=null;M.depth&&(_t=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=M.stencil?hi:di,Ut=M.stencil?is:Un);const Gt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new In(d.textureWidth,d.textureHeight,{format:un,type:nn,depthTexture:new ss(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const wt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new In(f.framebufferWidth,f.framebufferHeight,{format:un,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Nt.setContext(s),Nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ot(Q){for(let Mt=0;Mt<Q.removed.length;Mt++){const wt=Q.removed[Mt],Ut=R.indexOf(wt);Ut>=0&&(R[Ut]=null,C[Ut].disconnect(wt))}for(let Mt=0;Mt<Q.added.length;Mt++){const wt=Q.added[Mt];let Ut=R.indexOf(wt);if(Ut===-1){for(let Gt=0;Gt<C.length;Gt++)if(Gt>=R.length){R.push(wt),Ut=Gt;break}else if(R[Gt]===null){R[Gt]=wt,Ut=Gt;break}if(Ut===-1)break}const _t=C[Ut];_t&&_t.connect(wt)}}function X(Q,Mt){Mt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(Mt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let Mt=Q.near,wt=Q.far;p.texture!==null&&(p.depthNear>0&&(Mt=p.depthNear),p.depthFar>0&&(wt=p.depthFar)),Z.near=F.near=N.near=Mt,Z.far=F.far=N.far=wt,(D!==Z.near||q!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),D=Z.near,q=Z.far),Z.layers.mask=Q.layers.mask|6,N.layers.mask=Z.layers.mask&-5,F.layers.mask=Z.layers.mask&-3;const Ut=Q.parent,_t=Z.cameras;X(Z,Ut);for(let Gt=0;Gt<_t.length;Gt++)X(_t[Gt],Ut);Z.projectionMatrix.copy(N.projectionMatrix),Z.projectionMatrixInverse.copy(N.projectionMatrixInverse),B===null&&Q.isPerspectiveCamera&&(B={camera:Q,fov:Q.fov,zoom:Q.zoom}),et(Q,Z,Ut)};function et(Q,Mt,wt){wt===null?Q.matrix.copy(Mt.matrixWorld):(Q.matrix.copy(wt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(Mt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(Mt.projectionMatrix),Q.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Po*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Z)},this.getCameraTexture=function(Q){return g[Q]};let rt=null;function bt(Q,Mt){if(h=Mt.getViewerPose(c||a),m=Mt,h!==null){const wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ut=!1;wt.length!==Z.cameras.length&&(Z.cameras.length=0,Ut=!0);for(let Ot=0;Ot<wt.length;Ot++){const ie=wt[Ot];let se=null;if(f!==null)se=f.getViewport(ie);else{const xe=u.getViewSubImage(d,ie);se=xe.viewport,Ot===0&&(t.setRenderTargetTextures(y,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(y))}let kt=H[Ot];kt===void 0&&(kt=new wn,kt.layers.enable(Ot),kt.viewport=new _e,H[Ot]=kt),kt.matrix.fromArray(ie.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(ie.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(se.x,se.y,se.width,se.height),Ot===0&&(Z.matrix.copy(kt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ut===!0&&Z.cameras.push(kt)}const _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Ot=u.getDepthInformation(wt[0]);Ot&&Ot.isValid&&Ot.texture&&p.init(Ot,s.renderState)}if(_t&&_t.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Ot=0;Ot<wt.length;Ot++){const ie=wt[Ot].camera;if(ie){let se=g[ie];se||(se=new Ah,g[ie]=se);const kt=u.getCameraImage(ie);se.sourceTexture=kt}}}}for(let wt=0;wt<C.length;wt++){const Ut=R[wt],_t=C[wt];Ut!==null&&_t!==void 0&&_t.update(Ut,Mt,c||a)}rt&&rt(Q,Mt),Mt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Mt}),m=null}const Nt=new kh;Nt.setAnimationLoop(bt),this.setAnimationLoop=function(Q){rt=Q},this.dispose=function(){}}}const Nx=new oe,Jh=new Wt;Jh.set(-1,0,0,0,1,0,0,0,1);function Ix(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Oh(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,M,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===je&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===je&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const M=t.get(g),E=M.envMap,y=M.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Jh),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,M){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===je&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ux(i,t,e,n){let s={},r={};function a(M,E){const y=E.program;n.uniformBlockBinding(M,y,s[M.id])}function o(M,E){let y=s[M.id];y===void 0&&(m(M),y=l(M),s[M.id]=y,M.addEventListener("dispose",p));const C=E.program;n.updateUBOMapping(M,C);const R=t.render.frame;r[M.id]!==R&&(c(M),r[M.id]=R)}function l(M){const E=i.createBuffer(),y=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,y,C),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(M){const E=s[M.id],y=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,x=y.length;R<x;R++){const b=y[R];if(Array.isArray(b))for(let B=0,N=b.length;B<N;B++)h(b[B],R,B,C);else h(b,R,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,E,y,C){if(d(M,E,y,C)===!0){const R=M.__offset,x=M.value;if(Array.isArray(x)){let b=0;for(let B=0;B<x.length;B++){const N=x[B],F=_(N,!0);u(N,M.__data,b),b+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,M.__data)}}function u(M,E,y){typeof M=="number"||typeof M=="boolean"?E[y]=M:M.isMatrix3?(E[y]=M.elements[0],E[y+1]=M.elements[1],E[y+2]=M.elements[2],E[y+3]=0,E[y+4]=M.elements[3],E[y+5]=M.elements[4],E[y+6]=M.elements[5],E[y+7]=0,E[y+8]=M.elements[6],E[y+9]=M.elements[7],E[y+10]=M.elements[8],E[y+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-y),y):M.toArray(E,y)}function d(M,E,y,C){const R=M.value,x=E+"_"+y;if(Array.isArray(R)){C[x]===void 0&&(C[x]=[]);const b=C[x];let B=!1;for(let N=0;N<R.length;N++)f(R[N],b,N)===!0&&(B=!0);return B}return f(R,C,x)}function f(M,E,y){if(E[y]===void 0)return typeof M=="number"||typeof M=="boolean"?E[y]=M:ArrayBuffer.isView(M)?E[y]=M.slice():E[y]=M.clone(),!0;{const C=E[y];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return E[y]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(C.equals(M)===!1)return C.copy(M),!0}}return!1}function m(M){const E=M.uniforms;let y=0;const C=16;for(let x=0,b=E.length;x<b;x++){const B=Array.isArray(E[x])?E[x]:[E[x]];for(let N=0,F=B.length;N<F;N++){const H=B[N],Z=Array.isArray(H.value)?H.value:[H.value],D=Array.isArray(E[x])||Array.isArray(H.value);let q=y;for(let V=0,ot=Z.length;V<ot;V++){const X=Z[V],et=_(X,D),rt=y%C,bt=rt%et.boundary,Nt=rt+bt;y+=bt,Nt!==0&&C-Nt<et.storage&&(y+=C-Nt),V===0&&(q=y),y+=et.storage}const j=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new j((y-q)/Float32Array.BYTES_PER_ELEMENT),H.__offset=q}}const R=y%C;return R>0&&(y+=C-R),M.__size=y,M.__cache={},this}function _(M,E){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=16,y.storage=48):M.isMatrix4?(y.boundary=16,y.storage=64):M.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(y.boundary=16,y.storage=M.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(M){const E=M.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:g}}const Fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Dn=null;function Ox(){return Dn===null&&(Dn=new Zr(Fx,16,16,wi,Fn),Dn.name="DFG_LUT",Dn.minFilter=Qe,Dn.magFilter=Qe,Dn.wrapS=Jn,Dn.wrapT=Jn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}class zx{constructor(t={}){const{canvas:e=Ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=nn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=f,p=new Set([qo,Xo,Wo]),g=new Set([nn,Un,Us,is,Ho,Go]),M=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let C=null,R=null;const x=[],b=[];let B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1,H=null,Z=null,D=null,q=null;this._outputColorSpace=cn;let j=0,V=0,ot=null,X=-1,et=null;const rt=new _e,bt=new _e;let Nt=null;const Q=new Yt(0);let Mt=0,wt=e.width,Ut=e.height,_t=1,Gt=null,ve=null;const Ot=new _e(0,0,wt,Ut),ie=new _e(0,0,wt,Ut);let se=!1;const kt=new zs,xe=new Jo;let Ee=!1,ze=!1;const fe=new oe,on=new U,Te=new _e,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function be(){return ot===null?_t:1}let I=n;function Pe(S,L){return e.getContext(S,L)}let ue,Xt,mt,we,It,Bt,T,v,O,at,tt,ct,dt,Y,J,ft,P,$,W,pt,ht,ut,Lt;try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bo}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",it,!1),I===null){const L="webgl2";if(I=Pe(L,S),I===null)throw Pe(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(S){throw e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",it,!1),ae("WebGLRenderer: "+S.message),S}function Vt(){ue=new Hm(I),ue.init(),ht=new Rx(I,ue),Xt=new Pm(I,ue,t,ht),mt=new Tx(I,ue),Xt.reversedDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),Z=I.createFramebuffer(),D=I.createFramebuffer(),q=I.createFramebuffer(),we=new Wm(I),It=new dx,Bt=new Ax(I,ue,mt,It,Xt,ht,we),T=new km(N),v=new qf(I),ut=new Rm(I,v),O=new Gm(I,v,we,ut),at=new qm(I,O,v,ut,we),$=new Xm(I,Xt,Bt),J=new Lm(It),tt=new ux(N,T,ue,Xt,ut,J),ct=new Ix(N,It),dt=new px,Y=new Mx(ue),P=new Am(N,T,mt,at,m,l),ft=new wx(N,at,Xt),Lt=new Ux(I,we,Xt,mt),W=new Cm(I,ue,we),pt=new Vm(I,ue,we),we.programs=tt.programs,N.capabilities=Xt,N.extensions=ue,N.properties=It,N.renderLists=dt,N.shadowMap=ft,N.state=mt,N.info=we}_!==nn&&(B=new Km(_,e.width,e.height,o,s,r));const lt=new Dx(N,I);this.xr=lt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=ue.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ue.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(S){S!==void 0&&(_t=S,this.setSize(wt,Ut,!1))},this.getSize=function(S){return S.set(wt,Ut)},this.setSize=function(S,L,G=!0){if(lt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=S,Ut=L,e.width=Math.floor(S*_t),e.height=Math.floor(L*_t),G===!0&&(e.style.width=S+"px",e.style.height=L+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(wt*_t,Ut*_t).floor()},this.setDrawingBufferSize=function(S,L,G){wt=S,Ut=L,_t=G,e.width=Math.floor(S*G),e.height=Math.floor(L*G),this.setViewport(0,0,S,L)},this.setEffects=function(S){if(_===nn){ae("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let L=0;L<S.length;L++)if(S[L].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(rt)},this.getViewport=function(S){return S.copy(Ot)},this.setViewport=function(S,L,G,z){S.isVector4?Ot.set(S.x,S.y,S.z,S.w):Ot.set(S,L,G,z),mt.viewport(rt.copy(Ot).multiplyScalar(be()).round())},this.getScissor=function(S){return S.copy(ie)},this.setScissor=function(S,L,G,z){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,L,G,z),mt.scissor(bt.copy(ie).multiplyScalar(be()).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(S){mt.setScissorTest(se=S)},this.setOpaqueSort=function(S){Gt=S},this.setTransparentSort=function(S){ve=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,L=!0,G=!0){let z=0;if(S){let k=!1;if(ot!==null){const xt=ot.texture.format;k=p.has(xt)}if(k){const xt=ot.texture.type,Rt=g.has(xt),gt=P.getClearColor(),yt=P.getClearAlpha(),Dt=gt.r,qt=gt.g,jt=gt.b;Rt?(M[0]=Dt,M[1]=qt,M[2]=jt,M[3]=yt,I.clearBufferuiv(I.COLOR,0,M)):(E[0]=Dt,E[1]=qt,E[2]=jt,E[3]=yt,I.clearBufferiv(I.COLOR,0,E))}else z|=I.COLOR_BUFFER_BIT}L&&(z|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),H=S},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",it,!1),P.dispose(),dt.dispose(),Y.dispose(),Bt.dispose(),It.dispose(),T.dispose(),at.dispose(),O.dispose(),ut.dispose(),Lt.dispose(),tt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",zn),lt.removeEventListener("sessionend",Pn),xn.stop()};function nt(S){S.preventDefault(),Sl("WebGLRenderer: Context Lost."),F=!0}function st(){Sl("WebGLRenderer: Context Restored."),F=!1;const S=we.autoReset,L=ft.enabled,G=ft.autoUpdate,z=ft.needsUpdate,k=ft.type;Vt(),we.autoReset=S,ft.enabled=L,ft.autoUpdate=G,ft.needsUpdate=z,ft.type=k}function it(S){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Jt(S){const L=S.target;L.removeEventListener("dispose",Jt),pe(L)}function pe(S){zt(S),It.remove(S)}function zt(S){const L=It.get(S).programs;L!==void 0&&(L.forEach(function(G){tt.releaseProgram(G)}),S.isShaderMaterial&&tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,G,z,k,xt){L===null&&(L=Xe);const Rt=k.isMesh&&k.matrixWorld.determinantAffine()<0,gt=uu(S,L,G,z,k);mt.setMaterial(z,Rt);let yt=G.index,Dt=1;if(z.wireframe===!0){if(yt=O.getWireframeAttribute(G),yt===void 0)return;Dt=2}const qt=G.drawRange,jt=G.attributes.position;let Ct=qt.start*Dt,te=(qt.start+qt.count)*Dt;xt!==null&&(Ct=Math.max(Ct,xt.start*Dt),te=Math.min(te,(xt.start+xt.count)*Dt)),yt!==null?(Ct=Math.max(Ct,0),te=Math.min(te,yt.count)):jt!=null&&(Ct=Math.max(Ct,0),te=Math.min(te,jt.count));const Ae=te-Ct;if(Ae<0||Ae===1/0)return;ut.setup(k,z,gt,G,yt);let de,he=W;if(yt!==null&&(de=v.get(yt),he=pt,he.setIndex(de)),k.isMesh)z.wireframe===!0?(mt.setLineWidth(z.wireframeLinewidth*be()),he.setMode(I.LINES)):he.setMode(I.TRIANGLES);else if(k.isLine){let Be=z.linewidth;Be===void 0&&(Be=1),mt.setLineWidth(Be*be()),k.isLineSegments?he.setMode(I.LINES):k.isLineLoop?he.setMode(I.LINE_LOOP):he.setMode(I.LINE_STRIP)}else k.isPoints?he.setMode(I.POINTS):k.isSprite&&he.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))he.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Be=k._multiDrawStarts,Pt=k._multiDrawCounts,Ye=k._multiDrawCount,le=yt?v.get(yt).bytesPerElement:1,mi=It.get(z).currentProgram.getUniforms();for(let ke=0;ke<Ye;ke++)mi.setValue(I,"_gl_DrawID",ke),he.render(Be[ke]/le,Pt[ke])}else if(k.isInstancedMesh)he.renderInstances(Ct,Ae,k.count);else if(G.isInstancedBufferGeometry){const Be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Pt=Math.min(G.instanceCount,Be);he.renderInstances(Ct,Ae,Pt)}else he.render(Ct,Ae)};function me(S,L,G,z){H!==null&&S.isNodeMaterial&&H.setObject(z,S),Ee===!0&&J.setState(S,G,!1),S.transparent===!0&&S.side===hn&&S.forceSinglePass===!1?(S.side=je,S.needsUpdate=!0,us(S,L,z),S.side=bi,S.needsUpdate=!0,us(S,L,z),S.side=hn):us(S,L,z)}this.compile=function(S,L,G=null){G===null&&(G=S),H!==null&&H.renderStart(S,L,G),R=Y.get(G),R.init(L),b.push(R),G.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(R.pushLight(k),k.castShadow&&R.pushShadow(k))}),S!==G&&S.traverseVisible(function(k){k.isLight&&k.layers.test(L.layers)&&(R.pushLight(k),k.castShadow&&R.pushShadow(k))}),R.setupLights(),H!==null&&H.updateLights(R.state.lightsArray),ze=this.localClippingEnabled,Ee=J.init(this.clippingPlanes,ze),Ee===!0&&J.setGlobalState(this.clippingPlanes,L),H!==null&&ft.render(R.state.shadowsArray,G,L);const z=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const xt=k.material;if(xt)if(Array.isArray(xt))for(let Rt=0;Rt<xt.length;Rt++){const gt=xt[Rt];me(gt,G,L,k),z.add(gt)}else me(xt,G,L,k),z.add(xt)}),R=b.pop(),H!==null&&H.renderEnd(),z},this.compileAsync=function(S,L,G=null){const z=this.compile(S,L,G);return new Promise(k=>{function xt(){if(z.forEach(function(Rt){const yt=It.get(Rt).currentProgram;(yt===void 0||yt.isReady())&&z.delete(Rt)}),z.size===0){k(S);return}setTimeout(xt,10)}ue.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let hs=null;function ta(S){hs&&hs(S)}function zn(){xn.stop()}function Pn(){xn.start()}const xn=new kh;xn.setAnimationLoop(ta),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(S){hs=S,lt.setAnimationLoop(S),S===null?xn.stop():xn.start()},lt.addEventListener("sessionstart",zn),lt.addEventListener("sessionend",Pn),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;H!==null&&H.renderStart(S,L);const G=lt.enabled===!0&&lt.isPresenting===!0,z=B!==null&&(ot===null||G)&&B.begin(N,ot);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(L),L=lt.getCamera()),S.isScene===!0&&S.onBeforeRender(N,S,L,ot),R=Y.get(S,b.length),R.init(L),R.state.textureUnits=Bt.getTextureUnits(),b.push(R),fe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?xe.setFromArrayCamera(L):kt.setFromProjectionMatrix(fe,Rn,L.reversedDepth),ze=this.localClippingEnabled,Ee=J.init(this.clippingPlanes,ze),C=dt.get(S,x.length),C.init(),x.push(C),this.info.render.frame++,lt.enabled===!0&&lt.isPresenting===!0){const Rt=N.xr.getDepthSensingMesh();Rt!==null&&ea(Rt,L,-1/0,N.sortObjects)}ea(S,L,0,N.sortObjects),C.finish(),H!==null&&H.updateLights(R.state.lightsArray),N.sortObjects===!0&&C.sort(Gt,ve),qe=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,qe&&P.addToRenderList(C,S),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&J.beginShadows();const k=R.state.shadowsArray;if(ft.render(k,S,L),Ee===!0&&J.endShadows(),(z&&B.hasRenderPass())===!1){const Rt=C.opaque,gt=C.transmissive;if(R.setupLights(),L.isArrayCamera){const yt=L.cameras;if(gt.length>0)for(let Dt=0,qt=yt.length;Dt<qt;Dt++){const jt=yt[Dt];ll(Rt,gt,S,jt)}qe&&P.render(S);for(let Dt=0,qt=yt.length;Dt<qt;Dt++){const jt=yt[Dt];ol(C,S,jt,jt.viewport)}}else gt.length>0&&ll(Rt,gt,S,L),qe&&P.render(S),ol(C,S,L)}ot!==null&&V===0&&(Bt.updateMultisampleRenderTarget(ot),Bt.updateRenderTargetMipmap(ot)),z&&B.end(N),S.isScene===!0&&S.onAfterRender(N,S,L),ut.resetDefaultState(),X=-1,et=null,b.pop(),b.length>0?(R=b[b.length-1],Bt.setTextureUnits(R.state.textureUnits),Ee===!0&&J.setGlobalState(N.clippingPlanes,R.state.camera)):R=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,H!==null&&H.renderEnd()};function ea(S,L,G,z){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)R.pushLight(S),S.castShadow&&R.pushShadow(S);else if(S.isSprite){const Rt=L.isArrayCamera?xe:kt;if(!S.frustumCulled||S.intersectsFrustum(Rt)){z&&Te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const gt=at.update(S),yt=S.material;yt.visible&&C.push(S,gt,yt,G,Te.z,null,L)}}else if(S.isMesh||S.isLine||S.isPoints){const Rt=L.isArrayCamera?xe:kt;if(!S.frustumCulled||S.intersectsFrustum(Rt)){const gt=at.update(S),yt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Te.copy(S.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Te.copy(gt.boundingSphere.center)),Te.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(yt)){const Dt=gt.groups;for(let qt=0,jt=Dt.length;qt<jt;qt++){const Ct=Dt[qt],te=yt[Ct.materialIndex];te&&te.visible&&C.push(S,gt,te,G,Te.z,Ct,L)}}else yt.visible&&C.push(S,gt,yt,G,Te.z,null,L)}}}const xt=S.children;for(let Rt=0,gt=xt.length;Rt<gt;Rt++)ea(xt[Rt],L,G,z)}function ol(S,L,G,z){const{opaque:k,transmissive:xt,transparent:Rt}=S;R.setupLightsView(G),Ee===!0&&J.setGlobalState(N.clippingPlanes,G),z&&mt.viewport(rt.copy(z)),k.length>0&&Ks(k,L,G),xt.length>0&&Ks(xt,L,G),Rt.length>0&&Ks(Rt,L,G),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function ll(S,L,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[z.id]===void 0){const Ct=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[z.id]=new In(1,1,{generateMipmaps:!0,type:Ct?Fn:nn,minFilter:ci,samples:Math.max(4,Xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}const xt=R.state.transmissionRenderTarget[z.id],Rt=z.viewport||rt;xt.setSize(Rt.z*N.transmissionResolutionScale,Rt.w*N.transmissionResolutionScale);const gt=N.getRenderTarget(),yt=N.getActiveCubeFace(),Dt=N.getActiveMipmapLevel();N.setRenderTarget(xt),N.getClearColor(Q),Mt=N.getClearAlpha(),Mt<1&&N.setClearColor(16777215,.5),N.clear(),qe&&P.render(G);const qt=N.toneMapping;N.toneMapping=Qn;const jt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),R.setupLightsView(z),Ee===!0&&J.setGlobalState(N.clippingPlanes,z),Ks(S,G,z),Bt.updateMultisampleRenderTarget(xt),Bt.updateRenderTargetMipmap(xt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let te=0,Ae=L.length;te<Ae;te++){const de=L[te],{object:he,geometry:Be,material:Pt,group:Ye}=de;if(Pt.side===hn&&he.layers.test(z.layers)){const le=Pt.side;Pt.side=je,Pt.needsUpdate=!0,cl(he,G,z,Be,Pt,Ye),Pt.side=le,Pt.needsUpdate=!0,Ct=!0}}Ct===!0&&(Bt.updateMultisampleRenderTarget(xt),Bt.updateRenderTargetMipmap(xt))}N.setRenderTarget(gt,yt,Dt),N.setClearColor(Q,Mt),jt!==void 0&&(z.viewport=jt),N.toneMapping=qt}function Ks(S,L,G){const z=L.isScene===!0?L.overrideMaterial:null;for(let k=0,xt=S.length;k<xt;k++){const Rt=S[k],{object:gt,geometry:yt,group:Dt}=Rt;let qt=Rt.material;qt.allowOverride===!0&&z!==null&&(qt=z),gt.layers.test(G.layers)&&cl(gt,L,G,yt,qt,Dt)}}function cl(S,L,G,z,k,xt){H!==null&&k.isNodeMaterial&&H.setObject(S,k),S.onBeforeRender(N,L,G,z,k,xt),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(N,L,G,z,S,xt),k.transparent===!0&&k.side===hn&&k.forceSinglePass===!1?(k.side=je,k.needsUpdate=!0,N.renderBufferDirect(G,L,z,k,S,xt),k.side=bi,k.needsUpdate=!0,N.renderBufferDirect(G,L,z,k,S,xt),k.side=hn):N.renderBufferDirect(G,L,z,k,S,xt),S.onAfterRender(N,L,G,z,k,xt)}function hl(S){let L=0;for(const G of S)G.texture!==null&&L++;return L}function us(S,L,G){L.isScene!==!0&&(L=Xe);const z=It.get(S),k=R.state.lights,xt=R.state.shadowsArray,Rt=k.state.version,gt=tt.getParameters(S,k.state,xt,L,G,R.state.lightProbeGridArray),yt=tt.getProgramCacheKey(gt);let Dt=z.programs;z.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,z.fog=L.fog;const qt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;z.envMap=T.get(S.envMap||z.environment,qt),z.envMapRotation=z.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",Jt),Dt=new Map,z.programs=Dt,z.programVariants=new Map);let jt=Dt.get(yt);if(jt!==void 0){if(z.currentProgram===jt&&z.lightsStateVersion===Rt)return dl(S,gt),jt}else gt.uniforms=tt.getUniforms(S),H!==null&&S.isNodeMaterial&&H.build(S,G,gt),S.onBeforeCompile(gt,N),jt=tt.acquireProgram(gt,yt),Dt.set(yt,jt),z.uniforms=gt.uniforms;const Ct=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ct.clippingPlanes=J.uniform),dl(S,gt),z.needsLights=fu(S),z.lightsStateVersion=Rt,z.needsLights&&(Ct.ambientLightColor.value=k.state.ambient,Ct.lightProbe.value=k.state.probe,Ct.sunLights.value=k.state.sun,Ct.sunLightShadows.value=k.state.sunShadow,Ct.directionalLights.value=k.state.directional,Ct.directionalLightShadows.value=k.state.directionalShadow,Ct.spotLights.value=k.state.spot,Ct.spotLightShadows.value=k.state.spotShadow,Ct.rectAreaLights.value=k.state.rectArea,Ct.ltc_1.value=k.state.rectAreaLTC1,Ct.ltc_2.value=k.state.rectAreaLTC2,Ct.pointLights.value=k.state.point,Ct.pointLightShadows.value=k.state.pointShadow,Ct.hemisphereLights.value=k.state.hemi,Ct.sunShadowMatrix.value=k.state.sunShadowMatrix,Ct.sunShadowCascade.value=k.state.sunShadowCascade,Ct.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ct.spotLightMatrix.value=k.state.spotLightMatrix,Ct.spotLightMap.value=k.state.spotLightMap,Ct.pointShadowMatrix.value=k.state.pointShadowMatrix),z.numLightProbeGrids=hl(R.state.lightProbeGridArray),z.currentProgram=jt,z.uniformsList=null,jt}function hu(S,L,G,z,k){const xt=It.get(S),Rt=xt.currentProgram.id+","+z+","+k;let gt=xt.programVariants.get(Rt);return gt===void 0?(gt=us(S,L,G),xt.programVariants.set(Rt,gt)):(xt.currentProgram=gt,xt.uniformsList=null,xt.outputColorSpace=z,xt.toneMapping=k),gt}function ul(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=Nr.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function dl(S,L){const G=It.get(S);G.outputColorSpace=L.outputColorSpace,G.batching=L.batching,G.batchingColor=L.batchingColor,G.instancing=L.instancing,G.instancingColor=L.instancingColor,G.instancingMorph=L.instancingMorph,G.skinning=L.skinning,G.morphTargets=L.morphTargets,G.morphNormals=L.morphNormals,G.morphColors=L.morphColors,G.morphTargetsCount=L.morphTargetsCount,G.numClippingPlanes=L.numClippingPlanes,G.numIntersection=L.numClipIntersection,G.vertexAlphas=L.vertexAlphas,G.vertexTangents=L.vertexTangents,G.toneMapping=L.toneMapping}function uu(S,L,G,z,k){L.isScene!==!0&&(L=Xe),Bt.resetTextureUnits();const xt=L.fog,Rt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?L.environment:null,gt=ot===null?N.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:ee.workingColorSpace,yt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Dt=T.get(z.envMap||Rt,yt),qt=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,jt=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ct=!!G.morphAttributes.position,te=!!G.morphAttributes.normal,Ae=!!G.morphAttributes.color;let de=Qn;z.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(de=N.toneMapping);const he=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Be=he!==void 0?he.length:0,Pt=It.get(z),Ye=R.state.lights;if(Ee===!0&&(ze===!0||S!==et)){const Me=S===et&&z.id===X;J.setState(z,S,Me)}let le=!1,mi=!1;z.version===Pt.__version?Pt.needsLights&&Pt.lightsStateVersion!==Ye.state.version||k.isBatchedMesh&&Pt.batching===!1||!k.isBatchedMesh&&Pt.batching===!0||k.isBatchedMesh&&Pt.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Pt.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Pt.instancing===!1||!k.isInstancedMesh&&Pt.instancing===!0||k.isSkinnedMesh&&Pt.skinning===!1||!k.isSkinnedMesh&&Pt.skinning===!0||k.isInstancedMesh&&Pt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pt.instancingMorph===!1&&k.morphTexture!==null||Pt.envMap!==Dt||z.fog===!0&&Pt.fog!==xt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==J.numPlanes||Pt.numIntersection!==J.numIntersection)||Pt.vertexAlphas!==qt||Pt.vertexTangents!==jt||Pt.morphTargets!==Ct||Pt.morphNormals!==te||Pt.morphColors!==Ae||Pt.morphTargetsCount!==Be||Pt.numLightProbeGrids!==hl(R.state.lightProbeGridArray)?le=!0:(Pt.outputColorSpace!==gt||Pt.toneMapping!==de)&&(mi=!0):(le=!0,Pt.__version=z.version);let ke=Pt.currentProgram;(le===!0||mi===!0)&&(ke=mi===!0?hu(z,L,k,gt,de):us(z,L,k),H&&z.isNodeMaterial&&H.onUpdateProgram(z,ke,Pt));let Zs=!1,ti=!1,gi=!1;const re=ke.getUniforms(),Oe=Pt.uniforms;if(mt.useProgram(ke.program)&&(Zs=!0,ti=!0,gi=!0),z.id!==X&&(X=z.id,ti=!0),Zs||et!==S){mt.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),re.setValue(I,"projectionMatrix",S.projectionMatrix),re.setValue(I,"viewMatrix",S.matrixWorldInverse);const Ue=re.map.cameraPosition;Ue!==void 0&&Ue.setValue(I,on.setFromMatrixPosition(S.matrixWorld)),Xt.logarithmicDepthBuffer&&re.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&re.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),et!==S&&(et=S,ti=!0,gi=!0)}if(Pt.needsLights&&(Ye.state.sunShadowMap.length>0&&re.setValue(I,"sunShadowMap",Ye.state.sunShadowMap,Bt),Ye.state.directionalShadowMap.length>0&&re.setValue(I,"directionalShadowMap",Ye.state.directionalShadowMap,Bt),Ye.state.spotShadowMap.length>0&&re.setValue(I,"spotShadowMap",Ye.state.spotShadowMap,Bt),Ye.state.pointShadowMap.length>0&&re.setValue(I,"pointShadowMap",Ye.state.pointShadowMap,Bt)),k.isSkinnedMesh){re.setOptional(I,k,"bindMatrix"),re.setOptional(I,k,"bindMatrixInverse");const Me=k.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),re.setValue(I,"boneTexture",Me.boneTexture,Bt))}k.isBatchedMesh&&(re.setOptional(I,k,"batchingTexture"),re.setValue(I,"batchingTexture",k._matricesTexture,Bt),re.setOptional(I,k,"batchingIdTexture"),re.setValue(I,"batchingIdTexture",k._indirectTexture,Bt),re.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&re.setValue(I,"batchingColorTexture",k._colorsTexture,Bt));const _n=G.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&$.update(k,G,ke),(ti||Pt.receiveShadow!==k.receiveShadow)&&(Pt.receiveShadow=k.receiveShadow,re.setValue(I,"receiveShadow",k.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&L.environment!==null&&(Oe.envMapIntensity.value=L.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=Ox()),ti){if(re.setValue(I,"toneMappingExposure",N.toneMappingExposure),Pt.needsLights&&du(Oe,gi),xt&&z.fog===!0&&ct.refreshFogUniforms(Oe,xt),ct.refreshMaterialUniforms(Oe,z,_t,Ut,R.state.transmissionRenderTarget[S.id]),Pt.needsLights&&Pt.numLightProbeGrids>0){const Me=y;let Ue=0;for(const Bn of R.state.lightProbeGridArray)Bn.texture!==null&&(Me.textures[Ue]=Bn.texture,Me.min[Ue]=Bn.boundingBox.min,Me.max[Ue]=Bn.boundingBox.max,Me.resolution[Ue]=Bn.resolution,Ue++);for(const Bn in Me)Me[Bn].length=Ue;Oe.probesSH.value=Me.textures,Oe.probesMin.value=Me.min,Oe.probesMax.value=Me.max,Oe.probesResolution.value=Me.resolution}Nr.upload(I,ul(Pt),Oe,Bt)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Nr.upload(I,ul(Pt),Oe,Bt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&re.setValue(I,"center",k.center),re.setValue(I,"modelViewMatrix",k.modelViewMatrix),re.setValue(I,"normalMatrix",k.normalMatrix),re.setValue(I,"modelMatrix",k.matrixWorld),z.uniformsGroups!==void 0){const Me=z.uniformsGroups;for(let Ue=0,Bn=Me.length;Ue<Bn;Ue++){const pl=Me[Ue];Lt.update(pl,ke),Lt.bind(pl,ke)}}return ke}function du(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.sunLights.needsUpdate=L,S.sunLightShadows.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function fu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(S,L,G){const z=It.get(S);z.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),It.get(S.texture).__webglTexture=L,It.get(S.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,L){const G=It.get(S);G.__webglFramebuffer=L,G.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,G=0){ot=S,j=L,V=G;let z=null,k=!1,xt=!1;if(S){const gt=It.get(S);if(gt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(I.FRAMEBUFFER,gt.__webglFramebuffer),rt.copy(S.viewport),bt.copy(S.scissor),Nt=S.scissorTest,mt.viewport(rt),mt.scissor(bt),mt.setScissorTest(Nt),X=-1;return}else if(gt.__webglFramebuffer===void 0)Bt.setupRenderTarget(S);else if(gt.__hasExternalTextures)Bt.rebindTextures(S,It.get(S.texture).__webglTexture,It.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const qt=S.depthTexture;if(gt.__boundDepthTexture!==qt){if(qt!==null&&It.has(qt)&&(S.width!==qt.image.width||S.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(S)}}const yt=S.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(xt=!0);const Dt=It.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Dt[L])?z=Dt[L][G]:z=Dt[L],k=!0):S.samples>0&&Bt.useMultisampledRTT(S)===!1?z=It.get(S).__webglMultisampledFramebuffer:Array.isArray(Dt)?z=Dt[G]:z=Dt,rt.copy(S.viewport),bt.copy(S.scissor),Nt=S.scissorTest}else rt.copy(Ot).multiplyScalar(_t).floor(),bt.copy(ie).multiplyScalar(_t).floor(),Nt=se;if(G!==0&&(z=Z),mt.bindFramebuffer(I.FRAMEBUFFER,z)&&mt.drawBuffers(S,z),mt.viewport(rt),mt.scissor(bt),mt.setScissorTest(Nt),k){const gt=It.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,gt.__webglTexture,G)}else if(xt){const gt=L;for(let yt=0;yt<S.textures.length;yt++){const Dt=It.get(S.textures[yt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+yt,Dt.__webglTexture,G,gt)}}else if(S!==null&&G!==0){const gt=It.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gt.__webglTexture,G)}X=-1};function fl(S){const L=It.get(S);return(L.__readFormat!==S.format||L.__readType!==S.type)&&(L.__readFormat=S.format,L.__readType=S.type,L.__formatReadable=Xt.textureFormatReadable(S.format),L.__typeReadable=Xt.textureTypeReadable(S.type)),L}this.readRenderTargetPixels=function(S,L,G,z,k,xt,Rt,gt=0){if(!(S&&S.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=It.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Rt!==void 0&&(yt=yt[Rt],Array.isArray(yt)&&(yt=yt[0])),yt){mt.bindFramebuffer(I.FRAMEBUFFER,yt);try{const Dt=S.textures[gt],qt=Dt.format,jt=Dt.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+gt);const Ct=fl(Dt);if(Ct.__formatReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-z&&G>=0&&G<=S.height-k&&I.readPixels(L,G,z,k,ht.convert(qt),ht.convert(jt),xt)}finally{const Dt=ot!==null?It.get(ot).__webglFramebuffer:null;mt.bindFramebuffer(I.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,L,G,z,k,xt,Rt,gt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=It.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Rt!==void 0&&(yt=yt[Rt],Array.isArray(yt)&&(yt=yt[0])),yt)if(L>=0&&L<=S.width-z&&G>=0&&G<=S.height-k){mt.bindFramebuffer(I.FRAMEBUFFER,yt);const Dt=S.textures[gt],qt=Dt.format,jt=Dt.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+gt);const Ct=fl(Dt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,te),I.bufferData(I.PIXEL_PACK_BUFFER,xt.byteLength,I.STREAM_READ),I.readPixels(L,G,z,k,ht.convert(qt),ht.convert(jt),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Ae=ot!==null?It.get(ot).__webglFramebuffer:null;mt.bindFramebuffer(I.FRAMEBUFFER,Ae);const de=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await bd(I,de,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,te),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xt),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(te),I.deleteSync(de),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,L=null,G=0){const z=Math.pow(2,-G),k=Math.floor(S.image.width*z),xt=Math.floor(S.image.height*z),Rt=L!==null?L.x:0,gt=L!==null?L.y:0;Bt.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,Rt,gt,k,xt),mt.unbindTexture()},this.copyTextureToTexture=function(S,L,G=null,z=null,k=0,xt=0){let Rt,gt,yt,Dt,qt,jt,Ct,te,Ae;const de=S.isCompressedTexture?S.mipmaps[xt]:S.image;if(G!==null)Rt=G.max.x-G.min.x,gt=G.max.y-G.min.y,yt=G.isBox3?G.max.z-G.min.z:1,Dt=G.min.x,qt=G.min.y,jt=G.isBox3?G.min.z:0;else{const re=Math.pow(2,-k);Rt=Math.floor(de.width*re),gt=Math.floor(de.height*re),S.isDataArrayTexture?yt=de.depth:S.isData3DTexture?yt=Math.floor(de.depth*re):yt=1,Dt=0,qt=0,jt=0}z!==null?(Ct=z.x,te=z.y,Ae=z.z):(Ct=0,te=0,Ae=0);const he=ht.convert(L.format),Be=ht.convert(L.type);let Pt;L.isData3DTexture?(Bt.setTexture3D(L,0),Pt=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Bt.setTexture2DArray(L,0),Pt=I.TEXTURE_2D_ARRAY):(Bt.setTexture2D(L,0),Pt=I.TEXTURE_2D),mt.activeTexture(I.TEXTURE0),mt.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),mt.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),mt.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);const Ye=mt.getParameter(I.UNPACK_ROW_LENGTH),le=mt.getParameter(I.UNPACK_IMAGE_HEIGHT),mi=mt.getParameter(I.UNPACK_SKIP_PIXELS),ke=mt.getParameter(I.UNPACK_SKIP_ROWS),Zs=mt.getParameter(I.UNPACK_SKIP_IMAGES);mt.pixelStorei(I.UNPACK_ROW_LENGTH,de.width),mt.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de.height),mt.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),mt.pixelStorei(I.UNPACK_SKIP_ROWS,qt),mt.pixelStorei(I.UNPACK_SKIP_IMAGES,jt);const ti=S.isDataArrayTexture||S.isData3DTexture,gi=L.isDataArrayTexture||L.isData3DTexture;if(S.isDepthTexture){const re=It.get(S),Oe=It.get(L),_n=It.get(re.__renderTarget),Me=It.get(Oe.__renderTarget);mt.bindFramebuffer(I.READ_FRAMEBUFFER,_n.__webglFramebuffer),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ue=0;Ue<yt;Ue++)ti&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,It.get(S).__webglTexture,k,jt+Ue),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,It.get(L).__webglTexture,xt,Ae+Ue)),I.blitFramebuffer(Dt,qt,Dt+Rt,qt+gt,Ct,te,Ct+Rt,te+gt,I.DEPTH_BUFFER_BIT,I.NEAREST);mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||It.has(S)){const re=It.get(S),Oe=It.get(L);mt.bindFramebuffer(I.READ_FRAMEBUFFER,D),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,q);for(let _n=0;_n<yt;_n++)ti?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,re.__webglTexture,k,jt+_n):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,re.__webglTexture,k),gi?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Oe.__webglTexture,xt,Ae+_n):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Oe.__webglTexture,xt),k!==0?I.blitFramebuffer(Dt,qt,Dt+Rt,qt+gt,Ct,te,Ct+Rt,te+gt,I.COLOR_BUFFER_BIT,I.NEAREST):gi?I.copyTexSubImage3D(Pt,xt,Ct,te,Ae+_n,Dt,qt,Rt,gt):I.copyTexSubImage2D(Pt,xt,Ct,te,Dt,qt,Rt,gt);mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else gi?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Pt,xt,Ct,te,Ae,Rt,gt,yt,he,Be,de.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(Pt,xt,Ct,te,Ae,Rt,gt,yt,he,de.data):I.texSubImage3D(Pt,xt,Ct,te,Ae,Rt,gt,yt,he,Be,de):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xt,Ct,te,Rt,gt,he,Be,de.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xt,Ct,te,de.width,de.height,he,de.data):I.texSubImage2D(I.TEXTURE_2D,xt,Ct,te,Rt,gt,he,Be,de);mt.pixelStorei(I.UNPACK_ROW_LENGTH,Ye),mt.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le),mt.pixelStorei(I.UNPACK_SKIP_PIXELS,mi),mt.pixelStorei(I.UNPACK_SKIP_ROWS,ke),mt.pixelStorei(I.UNPACK_SKIP_IMAGES,Zs),xt===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&I.generateMipmap(Pt),mt.unbindTexture()},this.initRenderTarget=function(S){It.get(S).__webglFramebuffer===void 0&&Bt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Bt.setTextureCube(S,0):S.isData3DTexture?Bt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Bt.setTexture2DArray(S,0):Bt.setTexture2D(S,0),mt.unbindTexture()},this.resetState=function(){j=0,V=0,ot=null,mt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}const tl=42*Math.PI/180,Ri={x:1/16,z:1/(16*Math.sin(tl))},mn=86,rn=66;function Gs(i){return 1+.045*Math.sin(3*i+1.1)+.03*Math.sin(5*i+2.3)+.02*Math.sin(7*i+.4)}function fi(i,t){const e=i/mn,n=t/rn;return Math.hypot(e,n)/Gs(Math.atan2(n,e))}const dn=.89,Vr=.965;function Wr(i,t){const e=t*Gs(i);return{x:Math.cos(i)*e*mn,z:Math.sin(i)*e*rn}}function fn(i,t=180){const e=[];for(let n=0;n<t;n++){const s=n/t*Math.PI*2,r=i*Gs(s);e.push({x:Math.cos(s)*r*mn,z:Math.sin(s)*r*rn})}return e}const Ce={cx:0,cz:4,hx:58,hz:40,r:18,halfWidth:1.5},el=(()=>{const{cx:i,cz:t,hx:e,hz:n,r:s}=Ce,r=e-s,a=n-s,o=Math.PI*s/2,l=(h,u,d,f,m)=>({kind:"line",length:m,x0:i+h,z0:t+u,tx:d,tz:f}),c=(h,u,d)=>({kind:"arc",length:o,cx:i+h,cz:t+u,a0:d});return[l(0,n,1,0,r),c(r,a,Math.PI/2),l(e,a,0,-1,a*2),c(r,-a,0),l(r,-n,-1,0,r*2),c(-r,-a,-Math.PI/2),l(-e,-a,0,1,a*2),c(-r,a,-Math.PI),l(-r,n,1,0,r)]})(),Le=el.reduce((i,t)=>i+t.length,0);function gn(i){let t=(i%Le+Le)%Le;for(const e of el){if(t>e.length){t-=e.length;continue}let n,s,r,a;if(e.kind==="line")n=e.x0+e.tx*t,s=e.z0+e.tz*t,r=e.tx,a=e.tz;else{const o=e.a0-t/Ce.r;n=e.cx+Math.cos(o)*Ce.r,s=e.cz+Math.sin(o)*Ce.r,r=Math.sin(o),a=-Math.cos(o)}return{x:n,z:s,tx:r,tz:a,nx:-a,nz:r}}return gn(0)}function Ys(i,t){const{cx:e,cz:n,hx:s,hz:r,r:a}=Ce,o=Math.abs(i-e)-(s-a),l=Math.abs(t-n)-(r-a),c=Math.hypot(Math.max(o,0),Math.max(l,0)),h=Math.min(Math.max(o,l),0);return Math.abs(c+h-a)}function $h(i,t){let e=1/0,n=0,s=0;for(const r of el){let a,o,l;if(r.kind==="line")a=Math.min(Math.max((i-r.x0)*r.tx+(t-r.z0)*r.tz,0),r.length),o=r.x0+r.tx*a,l=r.z0+r.tz*a;else{let h=(r.a0-Math.atan2(t-r.cz,i-r.cx))%(Math.PI*2);h<0&&(h+=Math.PI*2);const u=r.length/Ce.r;h>u&&(h=h>u+(Math.PI*2-u)/2?0:u),a=h*Ce.r,o=r.cx+Math.cos(r.a0-h)*Ce.r,l=r.cz+Math.sin(r.a0-h)*Ce.r}const c=Math.hypot(i-o,t-l);c<e&&(e=c,n=s+a),s+=r.length}return n}const Qh={title:{s:10,side:-1},about:{s:90,side:1},experience:{s:160,side:1},skills:{s:205,side:1},projects:{s:270,side:1},running:{s:327,side:-1},contact:{s:343,side:-1}},Bx=6,kx=3.6,Hx=2.6,Cs=10;function Gx(i,t=0){const e=Math.sin(t),n=Math.cos(t),s=Math.cos(t),r=-Math.sin(t),a=Bx/2,o=kx/2,l=a*Math.abs(s)+o*Math.abs(e),c=a*Math.abs(r)+o*Math.abs(n);return i.flatMap(h=>{const u=Qh[h];if(!u)return[];const d=gn(u.s),f=d.nx*u.side,m=d.nz*u.side,_=a*Math.abs(s*f+r*m)+o*Math.abs(e*f+n*m),p=Ce.halfWidth+1.2+_,g=d.x+f*p,M=d.z+m*p;return[{zoneId:h,s:u.s,x:g,z:M,angle:t,facing:{x:e,z:n},door:{x:g+e*(o+1),z:M+n*(o+1)},hx:a,hz:o,minX:g-l,maxX:g+l,minZ:M-c,maxZ:M+c}]})}function Vx(i,t,e){const n=t-i.x,s=e-i.z,r=Math.cos(i.angle),a=Math.sin(i.angle);return{x:n*r-s*a,z:n*a+s*r}}const De={minX:-12,maxX:20,minZ:-8,maxZ:12},$t={x:-32,z:-6,rx:9,rz:6},ne={x:-8,z:-56,baseHalfX:34,baseHalfZ:9,layers:6,layerHeight:2.2};function li(i){const t=ne.baseHalfX*(1-i*.16),e=ne.baseHalfZ*(1-i*.12),n=ne.x-i*2.4;return{cx:n,hx:t,hz:e,minX:n-t,maxX:n+t,front:ne.z+e,y:i*ne.layerHeight,top:(i+1)*ne.layerHeight,ledge:{minX:n+t*.3,maxX:n+t*.8,front:ne.z+e*.85}}}const En={x:-30,fromLayer:3,halfWidth:.56},Ze={x:-30,z:-45.9,rx:2.4,rz:1.3},Je={x:24,z0:57.5,z1:71,halfWidth:.8};function Xr(i,t,e=0){return Math.abs(i-Je.x)<Je.halfWidth+e&&t>Je.z0-e&&t<Je.z1+e}function Wx(i,t,e=0){const n=(i-Ze.x)/(Ze.rx+e),s=(t-Ze.z)/(Ze.rz+e);return n*n+s*s<1}function jh(i,t,e=0){const n=(i-$t.x)/($t.rx+e),s=(t-$t.z)/($t.rz+e);return n*n+s*s<1}function tu(i,t,e=0){return i>De.minX-e&&i<De.maxX+e&&t>De.minZ-e&&t<De.maxZ+e}function Ni(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Xx(i,t,e){return Math.abs(i-ne.x)<ne.baseHalfX+e&&Math.abs(t-ne.z)<ne.baseHalfZ+e+4}function qx(i){const t=Ni(42087),e=(p,g,M)=>i.some(E=>p>E.minX-M&&p<E.maxX+M&&g>E.minZ-M&&g<E.maxZ+M||Math.hypot(p-E.door.x,g-E.door.z)<M+2),n=(p,g,M)=>fi(p,g)>Vr-.02||Ys(p,g)<Ce.halfWidth+M||jh(p,g,M)||tu(p,g,M)||Xx(p,g,M)||Xr(p,g,M+.6)||e(p,g,M),s=(p,g,M,E,y=[])=>{const C=[];let R=0;for(;C.length<p&&R<p*40;){R++;const x=E();n(x.x,x.z,g)||[...y,...C].some(b=>Math.hypot(b.x-x.x,b.z-x.z)<M)||C.push({x:x.x,z:x.z,rot:t()*Math.PI*2,scale:.92+t()*.2,variant:Math.floor(t()*3)})}return C},r=()=>({x:(t()*2-1)*mn,z:(t()*2-1)*rn}),a=()=>{const p=t()*Math.PI*2,g=.8+t()*.12;return{x:Math.cos(p)*g*mn*Gs(p),z:Math.sin(p)*g*rn*Gs(p)}},o=()=>{const p=t()*Math.PI*2,g=1.2+t()*.9;return{x:$t.x+Math.cos(p)*$t.rx*g,z:$t.z+Math.sin(p)*$t.rz*g}},l=[...s(46,1.4,3.2,a),...s(14,1.4,3,o)];l.push(...s(26,1.6,4.5,r,l));const c=s(26,1,3,r,l),h=s(70,.9,2.5,r,[...l,...c]),u=s(620,.3,.9,r),d=s(190,.4,.7,r,u),f=s(260,.6,2.2,r).map(p=>({...p,rot:0})),m=p=>fi(p.x,p.z)<dn-.02,_=[{x:-6,z:-2,rot:.4,scale:1,variant:0},{x:3,z:5,rot:2.2,scale:1,variant:1},{x:11,z:-3,rot:-.6,scale:1,variant:0},{x:15,z:7,rot:3.6,scale:1,variant:1},{x:-2,z:8,rot:1.5,scale:1,variant:1}];return{palms:l,rocks:c,tufts:u.filter(m),flowers:d.filter(m),bushes:h.filter(m),patches:f.filter(m),cows:_}}function Ir(i,t){return Ys(i,t)<Ce.halfWidth?"road":fi(i,t)>dn?"sand":"grass"}function Fo(i,t){return Xr(i,t,-.25)?!0:fi(i,t)<Vr&&!jh(i,t)&&!Wx(i,t)}function Yx(){const{minX:i,maxX:t,minZ:e,maxZ:n}=De,s=[];for(let r=i;r<=t+.01;r+=2)s.push({x:r,z:e}),Math.abs(r-(i+t)/2)>2.5&&s.push({x:r,z:n});for(let r=e+2;r<n-.01;r+=2)s.push({x:i,z:r}),s.push({x:t,z:r});return s}function Kx(){const{minX:i,maxX:t,minZ:e,maxZ:n}=De,s=(i+t)/2,r=.15;return[{kind:"box",minX:i,maxX:t,minZ:e-r,maxZ:e+r},{kind:"box",minX:i,maxX:s-2.5,minZ:n-r,maxZ:n+r},{kind:"box",minX:s+2.5,maxX:t,minZ:n-r,maxZ:n+r},{kind:"box",minX:i-r,maxX:i+r,minZ:e,maxZ:n},{kind:"box",minX:t-r,maxX:t+r,minZ:e,maxZ:n}]}function Zx(i,t){const e=[];for(const n of i)e.push({kind:"obb",x:n.x,z:n.z,hx:n.hx,hz:n.hz,angle:n.angle});for(const n of t.palms)e.push({kind:"circle",x:n.x,z:n.z,r:.35});for(const n of t.rocks)e.push({kind:"circle",x:n.x,z:n.z,r:.45*n.scale});for(const n of t.bushes)e.push({kind:"circle",x:n.x,z:n.z,r:.5*n.scale});return e.push(...Kx()),e.push({kind:"box",minX:ne.x-ne.baseHalfX,maxX:ne.x+ne.baseHalfX,minZ:ne.z-ne.baseHalfZ,maxZ:ne.z+ne.baseHalfZ}),e}function Jx(i){const t=[],e=Le*i;for(let r=50;r<e-10;r+=50)t.push({s:Cs+r/i,metres:r});const n=[...Object.values(Qh).map(r=>r.s),...t.map(r=>r.s)],s=[];for(let r=Cs+22;r<Cs+Le-8;r+=34){let a=r;for(;n.some(o=>Math.abs((a-o+Le*1.5)%Le-Le/2)<7);)a+=2;s.push(a%Le)}return{posts:t,lamps:s}}const eu=4.5,$x=6.3,Qx=40,jx=22,t_=5.6,e_=24,n_=.32;function Ec(i,t,e="right"){return{x:i,z:t,vx:0,vz:0,h:0,vh:0,airborne:!1,facing:e,moving:!1,sprinting:!1}}function bc(i,t,e){return Math.abs(t-i)<=e?t:i+Math.sign(t-i)*e}function nu(i,t,e,n){if(n.kind==="obb"){const h=Math.cos(n.angle),u=Math.sin(n.angle),d=i-n.x,f=t-n.z,m=nu(d*h-f*u,d*u+f*h,e,{kind:"box",minX:-n.hx,maxX:n.hx,minZ:-n.hz,maxZ:n.hz});return{x:n.x+m.x*h+m.z*u,z:n.z-m.x*u+m.z*h}}if(n.kind==="circle"){const h=i-n.x,u=t-n.z,d=Math.hypot(h,u),f=e+n.r;return d>=f?{x:i,z:t}:d<1e-6?{x:n.x+f,z:t}:{x:n.x+h/d*f,z:n.z+u/d*f}}const s=Math.min(Math.max(i,n.minX),n.maxX),r=Math.min(Math.max(t,n.minZ),n.maxZ),a=i-s,o=t-r,l=Math.hypot(a,o);if(l>=e)return{x:i,z:t};if(l>1e-6)return{x:s+a/l*e,z:r+o/l*e};const c=[{x:n.minX-e,z:t,depth:i-n.minX},{x:n.maxX+e,z:t,depth:n.maxX-i},{x:i,z:n.minZ-e,depth:t-n.minZ},{x:i,z:n.maxZ+e,depth:n.maxZ-t}];return c.sort((h,u)=>h.depth-u.depth),{x:c[0].x,z:c[0].z}}function i_(i,t,e,n,s,r,a=n_){let o={x:e,z:n};for(let l=0;l<3;l++)for(const c of s)o=nu(o.x,o.z,a,c);return r(o.x,o.z)?o:r(o.x,t)?{x:o.x,z:t}:r(i,o.z)?{x:i,z:o.z}:{x:i,z:t}}function s_(i,t,e){return i===0&&t===0?e:Math.abs(i)>=Math.abs(t)?i>0?"right":"left":t>0?"up":"down"}function r_(i,t,e,n,s,r){const a=Math.hypot(t.x,t.y),o=a>1?t.x/a:t.x,l=a>1?t.y/a:t.y,c=a>0,h=t.sprint?$x:eu,u=(n.right.x*o+n.up.x*l)*h,d=(n.right.z*o+n.up.z*l)*h,f=(c?Qx:jx)*e,m=bc(i.vx,u,f),_=bc(i.vz,d,f),p=i_(i.x,i.z,i.x+m*e,i.z+_*e,s,r);let{h:g,vh:M,airborne:E}=i;t.jump&&!E&&(E=!0,M=t_),E&&(M-=e_*e,g+=M*e,g<=0&&(g=0,M=0,E=!1));let y=(p.x-i.x)/e,C=(p.z-i.z)/e;const R=Math.hypot(m,_),x=Math.hypot(y,C);if(x>R){const b=x>1e-9?R/x:0;y*=b,C*=b}return{x:p.x,z:p.z,vx:y,vz:C,h:g,vh:M,airborne:E,facing:s_(o,l,i.facing),moving:c,sprinting:c&&t.sprint}}const iu=1e3/343/eu;function a_(i){if(i<.4)return null;const t=1e3/(i*iu);if(t>3540)return null;const e=Math.round(t),n=Math.floor(e/60),s=e%60;return`${n}:${String(s).padStart(2,"0")}`}const o_=[{n:[1,0,0],c:[[1,0,1],[1,0,0],[1,1,0],[1,1,1]]},{n:[-1,0,0],c:[[0,0,0],[0,0,1],[0,1,1],[0,1,0]]},{n:[0,1,0],c:[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]},{n:[0,-1,0],c:[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]},{n:[0,0,1],c:[[0,0,1],[1,0,1],[1,1,1],[0,1,1]]},{n:[0,0,-1],c:[[1,0,0],[0,0,0],[0,1,0],[1,1,0]]}];function Zt(i,t=!0){const e=[],n=[],s=[],r=new Yt;for(const o of i){r.setHex(o.color);for(const l of o_){if(t&&l.n[1]===-1&&o.y<=.001)continue;const c=l.c.map(([h,u,d])=>[o.x+h*o.w,o.y+u*o.h,o.z+d*o.d]);for(const h of[0,1,2,0,2,3])e.push(...c[h]),n.push(...l.n),s.push(r.r,r.g,r.b)}}const a=new an;return a.setAttribute("position",new ye(e,3)),a.setAttribute("normal",new ye(n,3)),a.setAttribute("color",new ye(s,3)),a.computeBoundingSphere(),a}function l_(i){return!i.startsWith("#")||i.length!==7?null:parseInt(i.slice(1),16)}function c_(i,t,e,n,s){const r=[];for(const[a,o,l,c,h]of i){const u=l_(h);u!==null&&r.push({x:(a-t/2)*n,y:(e-o-c)*n,z:-s/2,w:l*n,h:c*n,d:s,color:u})}return r}function A(i,t,e,n,s,r,a){return{x:i-n/2,y:t,z:e-r/2,w:n,h:s,d:r,color:a}}function Yi(i,t){const e=[],n=[],s=new Yt;for(const o of i){s.setHex(o.color);const l=o.x+o.w,c=o.z+o.d;for(const[h,u]of[[o.x,o.z],[o.x,c],[l,c],[o.x,o.z],[l,c],[l,o.z]])e.push(h,t,u),n.push(s.r,s.g,s.b)}const r=new an;r.setAttribute("position",new ye(e,3)),r.setAttribute("color",new ye(n,3));const a=new Float32Array(e.length);for(let o=1;o<a.length;o+=3)a[o]=1;return r.setAttribute("normal",new pn(a,3)),r.computeBoundingSphere(),r}const w={grass:7248469,grassDark:6063175,grassLight:8564066,sand:15258274,sandDark:14138248,asphalt:5130846,roadLine:15722198,roadDash:16763213,trunk:9399371,trunkDark:7755578,frond:5214026,frondDark:4093505,frondLight:6727254,coconut:7031342,rock:9406105,rockLight:10985392,rockDark:7761539,cowWhite:15919835,cowTan:15260357,cowSpot:4866104,muzzle:13215136,hoof:9075302,fence:13280379,fencePost:11109470,mountainLow:5995098,mountainMid:5599322,mountainHigh:7301760,mountainPeak:9208986,purple:5587087,purpleLight:7230888,purpleDark:4074099,gold:16763213,sunset:16742973,sunsetLight:16752732,magenta:12727915,cream:16774371,sky:8308968,ink:2302510,wood:10253394,woodDark:8346687,stone:7761284,stoneLight:9406112,canvas:14275299};function h_(){const i=[];for(let r=0;r<6;r++)i.push(A(r*.07,r*.5,0,.34,.5,.34,r%2?w.trunkDark:w.trunk));const e=3,n=6*.07;return[[1,0],[-1,0],[0,1],[0,-1],[.7,.7],[-.7,.7],[.7,-.7],[-.7,-.7]].forEach(([r,a],o)=>{const l=o%3===0?w.frondLight:o%3===1?w.frond:w.frondDark,c=[[.35,.05,.5],[.8,-.05,.46],[1.2,-.25,.4],[1.5,-.55,.32]];for(const[h,u,d]of c)i.push(A(n+r*h,e+u,a*h,d,.14,d,l))}),i.push(A(n,e+.05,0,.6,.22,.6,w.frond)),i.push(A(n+.18,e-.22,.12,.2,.2,.2,w.coconut)),i.push(A(n-.16,e-.24,-.08,.2,.2,.2,w.coconut)),i.push(A(n+.02,e-.26,-.2,.2,.2,.2,w.coconut)),i}function su(i,t,e,n,s=2){const r=Ri.x*s,a=Ri.z*s,o=Math.floor(i.minX/r),l=Math.ceil(i.maxX/r),c=Math.floor(i.minZ/a),h=Math.ceil(i.maxZ/a),u=[];for(let d=c;d<h;d++){let f=null;for(let m=o;m<=l;m++){const _=m<l?t((m+.5)*r,(d+.5)*a):1/0,p=_<1||_<e&&(m+d&1)===0;p&&f===null&&(f=m),!p&&f!==null&&(u.push({x:f*r,z:d*a,w:(m-f)*r,d:a,color:n}),f=null)}}return u}function u_(i,t){const e=t===0?w.grassDark:w.grassLight,n=[];for(const s of i){const r=Ni(Math.round(s.x*977)^Math.round(s.z*131)),a=s.scale,o=[{x:0,z:0,rx:1.4*a,rz:.62*a}];for(let h=0;h<2;h++)o.push({x:(r()-.5)*1.8*a,z:(r()-.5)*.7*a,rx:(.45+r()*.5)*a,rz:(.3+r()*.28)*a});const l=(h,u)=>Math.min(...o.map(d=>Math.hypot((h-s.x-d.x)/d.rx,(u-s.z-d.z)/d.rz))),c=2.6*a;n.push(...su({minX:s.x-c,maxX:s.x+c,minZ:s.z-c/2,maxZ:s.z+c/2},l,1.28,e))}return n}function d_(i){const[t,e]=i===0?[w.frond,w.frondDark]:[w.frondLight,w.frond];return[A(0,0,0,1,.5,.8,e),A(-.1,.5,.05,.7,.3,.6,t),A(.38,0,.1,.5,.36,.5,t)]}function f_(i){return i===0?[A(0,0,0,.9,.42,.7,w.rock),A(.08,.42,-.04,.58,.26,.48,w.rockLight)]:i===1?[A(0,0,0,.6,.34,.6,w.rockDark),A(.42,0,.1,.4,.22,.4,w.rock)]:[A(0,0,0,1,.5,.8,w.rock),A(-.1,.5,.05,.7,.32,.55,w.rockLight),A(-.05,.82,0,.36,.18,.3,w.rockLight)]}function p_(){return[A(-.1,0,0,.07,.24,.07,w.grassLight),A(.04,0,.05,.07,.32,.07,w.grassDark),A(.13,0,-.04,.07,.2,.07,w.grassLight)]}const wc=[16769955,16164544,16774371];function m_(i){return[A(0,0,0,.06,.2,.06,w.frondDark),A(0,.2,0,.18,.12,.18,wc[i%wc.length])]}function Tc(i){const t=i===0?w.cowWhite:w.cowTan,e=[A(0,.5,0,1.4,.7,.72,t),A(-.72,.85,0,.1,.4,.1,t),A(-.74,.62,0,.14,.14,.14,w.cowSpot)];for(const[n,s]of[[.5,.25],[.5,-.25],[-.5,.25],[-.5,-.25]])e.push(A(n,.1,s,.18,.4,.18,t)),e.push(A(n,0,s,.2,.12,.2,w.hoof));return i===0&&(e.push(A(-.2,.9,.2,.5,.31,.34,w.cowSpot)),e.push(A(.35,.75,-.25,.34,.3,.24,w.cowSpot))),e}function Ac(i){const t=i===0?w.cowWhite:w.cowTan;return[A(.22,-.2,0,.44,.42,.46,t),A(.48,-.2,0,.12,.22,.36,w.muzzle),A(.3,.14,.3,.12,.1,.18,t),A(.3,.14,-.3,.12,.1,.18,t),A(.38,0,.17,.06,.08,.06,w.cowSpot),A(.38,0,-.17,.06,.08,.06,w.cowSpot)]}const Sr=11064552,g_=1512223,Rc=2302510,Cc=16769955,Pc=15222063,x_=[[11945274,9319212],[4157068,3101289]];function __(){return[A(1.13,.43,.34,.06,.16,.24,16774358),A(1.13,.43,-.34,.06,.16,.24,16774358),A(-1.13,.43,.34,.06,.16,.24,16734780),A(-1.13,.43,-.34,.06,.16,.24,16734780)]}function v_(){return[A(-1.14,.41,.34,.06,.2,.28,16726826),A(-1.14,.41,-.34,.06,.2,.28,16726826)]}function M_(i,t){const e=[A(0,.22,0,2.2,.5,1.1,i),A(-.12,.72,0,1.2,.42,1,t),A(.49,.76,0,.06,.32,.86,Sr),A(-.73,.76,0,.06,.32,.86,Sr),A(-.12,.79,.5,.96,.24,.02,Sr),A(-.12,.79,-.5,.96,.24,.02,Sr),A(1.12,.24,0,.06,.16,1,Rc),A(-1.12,.24,0,.06,.16,1,Rc),A(1.12,.44,.34,.04,.14,.22,Cc),A(1.12,.44,-.34,.04,.14,.22,Cc),A(-1.12,.44,.34,.04,.14,.22,Pc),A(-1.12,.44,-.34,.04,.14,.22,Pc)];for(const[n,s]of[[.68,.5],[.68,-.5],[-.68,.5],[-.68,-.5]])e.push(A(n,0,s,.48,.46,.2,g_));return e}function S_(){const i=[];for(const o of Yx())i.push(A(o.x,0,o.z,.18,.9,.18,w.fencePost));const{minX:t,maxX:e,minZ:n,maxZ:s}=De,r=(t+e)/2,a=[[t,e,n],[t,r-2.5,s],[r+2.5,e,s]];for(const[o,l,c]of a)for(const h of[.32,.66])i.push({x:o,y:h,z:c-.05,w:l-o,h:.1,d:.1,color:w.fence});for(const o of[t,e])for(const l of[.32,.66])i.push({x:o-.05,y:l,z:n,w:.1,h:.1,d:s-n,color:w.fence});return Zt(i)}function Fa(i,t,e,n,s){return[A(i,t,e,.18*n,.4*n,.18*n,w.trunkDark),A(i,t+.32*n,e,.86*n,.5*n,.74*n,s?w.frondDark:w.frond),A(i+.06*n,t+.82*n,e-.04*n,.52*n,.32*n,.46*n,s?w.frond:w.frondLight)]}function y_(){const i=[],t=Ni(5143),{z:e,layers:n,layerHeight:s}=ne,r=[w.mountainLow,w.mountainLow,w.mountainMid,w.mountainMid,w.mountainHigh,w.mountainPeak],a=[8824703,8824703,8362624,8362624,9407139,10854068],o=[w.grassDark,w.grassDark,6982239,6982239,w.rockLight,w.rockLight],l=[4875849,4875849,4677708,4677708,6117488,7498626],c={minX:En.x-En.halfWidth-.45,maxX:En.x+En.halfWidth+.45},h=(m,_)=>_<c.minX||m>c.maxX,u=m=>Math.round(m*16)/16;for(let m=0;m<n;m++){const _=li(m),p=_.ledge;i.push(A(_.cx,_.y,e,_.hx*2,s,_.hz*2,r[m])),i.push({x:p.minX,y:_.y,z:e-_.hz*.55,w:p.maxX-p.minX,h:s*1.35,d:_.hz*1.4,color:r[m]}),i.push({x:_.minX,y:_.y,z:_.front,w:_.hx*2,h:s-.01,d:.015,color:a[m]}),i.push({x:p.minX,y:_.top,z:p.front,w:p.maxX-p.minX,h:s*.35-.01,d:.015,color:a[m]});for(let g=0;g<Math.round(_.hx/3);g++){const M=u(1.4+t()*4.6),E=u(_.minX+.3+t()*(_.hx*2-M-.6)),y=_.y+.35+Math.floor(t()*(s-.75)*8)/8;h(E,E+M)&&i.push({x:E,y,z:_.front-.02,w:M,h:.1,d:.2,color:o[m]})}for(let g=0;g<Math.round(_.hx/4);g++){const M=u(.12+t()*.14),E=u(.5+t()*1),y=u(_.minX+.4+t()*(_.hx*2-.8)),C=_.y+t()*(s-E);h(y,y+M)&&i.push({x:y,y:C,z:_.front-.02,w:M,h:E,d:.05,color:l[m]})}if(m<n-1){const g=li(m+1),M=m<3?Math.round(_.hx/2.2):Math.round(_.hx/4);for(let E=0;E<M;E++){const y=_.minX+.6+t()*(_.hx*2-1.2),C=.8+t()*.45,R=t()<.55;if(!h(y-.5,y+.5)||y>p.minX-.6&&y<p.maxX+.6)continue;const b=y<g.minX-.6||y>g.maxX+.6?e-_.hz+.5:g.front+.45,B=b+t()*Math.max(0,_.front-.45-b);i.push(...Fa(y,_.top,B,C,R))}}}const d=li(0);for(let m=d.minX+1.2;m<d.maxX-1;m+=2.6+t()*3){if(Math.abs(m-Ze.x)<Ze.rx+1.2)continue;const _=.7+t()*.8;i.push(A(m,0,d.front-.25,_,.35+t()*.5,.7,t()<.5?w.rock:w.rockDark))}for(const m of[-1,1])i.push(A(Ze.x+m*(Ze.rx+.5),0,d.front-.2,1,.7,.8,w.rock)),i.push(A(Ze.x+m*(Ze.rx+.45),.7,d.front-.25,.6,.3,.5,w.rockLight));const f=li(En.fromLayer);i.push(A(En.x,f.top,f.front-1.35,2.4,.65,.9,w.rockDark));for(let m=En.fromLayer-1;m>=0;m--){const _=li(m);for(const p of[-1,1])i.push(A(En.x+p*(En.halfWidth+.28),_.top,_.front-.3,.42,.28,.4,w.rock))}return i.push(A(ne.x+30,0,e+2,14,2.4,10,w.mountainLow)),i.push(A(ne.x+31,2.4,e+2,8,1.8,6,w.mountainMid)),i.push(...Fa(ne.x+26,2.4,e+6.2,1,!0)),i.push(...Fa(ne.x+35.5,2.4,e+6.4,.9,!1)),Zt(i)}function E_(){const{x:i,halfWidth:t,fromLayer:e}=En,n=li(e),s=[[n.top,n.front-.9]];for(let c=e;c>=0;c--){const h=li(c);s.push([h.top,h.front],[h.y,h.front])}s.push([0,li(0).front+.9]);const r=[],a=[];let o=0;for(let c=0;c<s.length-1;c++){const[h,u]=s[c],[d,f]=s[c+1],m=Math.hypot(d-h,f-u),_=h===d?.02:0,p=u===f?.03:0,g=o/2,M=(o+m)/2,E=[[i-t,h+_,u+p,0,g],[i+t,h+_,u+p,1,g],[i+t,d+_,f+p,1,M],[i-t,d+_,f+p,0,M]];for(const y of[0,1,2,0,2,3]){const[C,R,x,b,B]=E[y];r.push(C,R,x),a.push(b,B)}o+=m}const l=new an;return l.setAttribute("position",new ye(r,3)),l.setAttribute("uv",new ye(a,2)),l.computeBoundingSphere(),l}function ui(i){const t=new Dh;return i.forEach((e,n)=>n===0?t.moveTo(e.x,-e.z):t.lineTo(e.x,-e.z)),t.closePath(),t}function Lc(i,t,e){const n=new Jr(i,1);n.rotateX(-Math.PI/2),n.translate(0,t,0);const s=n.getAttribute("position").count,r=new Yt(e),a=new Float32Array(s*3);for(let o=0;o<s;o++)a.set([r.r,r.g,r.b],o*3);return n.setAttribute("color",new pn(a,3)),n}function b_(){const i=Lc(ui(fn(1)),0,w.sand),t=Lc(ui(fn(dn)),.004,w.grass),e=fn(1),n=[];return e.forEach((s,r)=>{const a=e[(r+1)%e.length],o=Math.min(s.x,a.x),l=Math.min(s.z,a.z);n.push({x:o-.2,y:-.42,z:l-.2,w:Math.abs(a.x-s.x)+.4,h:.41,d:Math.abs(a.z-s.z)+.4,color:w.sandDark})}),[i,t,Zt(n,!1)]}function Oa(i,t,e,n,s=48){const r=[];for(let a=0;a<s;a++){const o=a/s*Math.PI*2;r.push({x:i+Math.cos(o)*e,z:t+Math.sin(o)*n})}return r}function w_(){const i=ui(fn(.992));return i.holes.push(new rs(fn(.983).map(t=>new At(t.x,-t.z)))),i}function T_(){const{x:i,z:t,rx:e,rz:n}=Ze,s=ui(Oa(i,t,e,n,32));return s.holes.push(new rs(Oa(i,t+.05,e-.2,n-.16,32).map(r=>new At(r.x,-r.z)))),{pool:ui(Oa(i,t,e,n,32)),foam:s}}function A_(){const i=ui(fn(1.16));i.holes.push(new rs(fn(1).map(n=>new At(n.x,-n.z))));const t=ui(fn(1.016));t.holes.push(new rs(fn(.997).map(n=>new At(n.x,-n.z))));const e=[];for(let n=0;n<48;n++){const s=n/48*Math.PI*2;e.push({x:$t.x+Math.cos(s)*$t.rx,z:$t.z+Math.sin(s)*$t.rz})}return{shallow:i,foam:t,pond:ui(e)}}const Dc=Le/Math.round(Le/2);function R_(){const i=[],t=[],e=new Yt,n=(h,u,d,f,m,_)=>{e.setHex(_);for(const p of[h,d,u,h,f,d])i.push(p.x,m,p.z),t.push(e.r,e.g,e.b)},s=.5,r=Math.ceil(Le/s),a=Ce.halfWidth,o=.12;for(let h=0;h<r;h++){const u=h*s,d=Math.min((h+1)*s,Le),f=gn(u),m=gn(d),_=(p,g)=>({x:p.x+p.nx*g,z:p.z+p.nz*g});n(_(f,-a),_(m,-a),_(m,a),_(f,a),.012,w.asphalt),n(_(f,a-.2-o),_(m,a-.2-o),_(m,a-.2),_(f,a-.2),.016,w.roadLine),n(_(f,-a+.2),_(m,-a+.2),_(m,-a+.2+o),_(f,-a+.2+o),.016,w.roadLine),u%Dc<Dc/2-.01&&n(_(f,-o/2),_(m,-o/2),_(m,o/2),_(f,o/2),.016,w.roadDash)}const l=new an;l.setAttribute("position",new ye(i,3)),l.setAttribute("color",new ye(t,3));const c=new Float32Array(i.length);for(let h=1;h<c.length;h+=3)c[h]=1;return l.setAttribute("normal",new pn(c,3)),l}const yr=15722198,Nc=4143949;function Xn(i,t,e,n,s,r,a,o=.25){const l=new Yt(a);for(let c=t;c<e-1e-6;c+=o){const h=gn(c),u=gn(Math.min(c+o,e)),d=(m,_)=>({x:m.x+m.nx*_,z:m.z+m.nz*_}),f=[d(h,n),d(u,n),d(u,s),d(h,s)];for(const m of[0,2,1,0,3,2])i.positions.push(f[m].x,r,f[m].z),i.colors.push(l.r,l.g,l.b)}}function C_(i){const t=new an;t.setAttribute("position",new ye(i.positions,3)),t.setAttribute("color",new ye(i.colors,3));const e=new Float32Array(i.positions.length);for(let n=1;n<e.length;n+=3)e[n]=1;return t.setAttribute("normal",new pn(e,3)),t.computeBoundingSphere(),t}function P_(i,t){const e={positions:[],colors:[]},n=Ce.halfWidth,s=.019;for(let r=0;r<3;r++)for(let a=0;a<10;a++){const o=-n+a*2*n/10;Xn(e,t-.45+r*.3,t-.15+r*.3,o,o+2*n/10,s,(r+a)%2?w.ink:yr,.3)}for(const r of i)for(let a=0;a<6;a++){const o=-n+.25+a*.45;Xn(e,r-.7,r+.7,o,o+.25,s,yr,.35)}for(const r of[30,100,190,280])Xn(e,r,r+1,-.75-.06,-.75+.06,s,yr,.25),[.5,.36,.22,.08].forEach((o,l)=>{Xn(e,r+1+l*.125,r+1.125+l*.125,-.75-o/2,-.75+o/2,s,yr,.125)});for(const[r,a,o]of[[44,56,.55],[222,232,-.6]])Xn(e,r,a,o,o+.07,s,Nc,.5),Xn(e,r+.4,a-.6,o+.3,o+.37,s,Nc,.5);for(const[r,a]of[[120,-.6],[262,.5],[335,-.4]])Xn(e,r,r+.4,a-.2,a+.2,s,3815239,.4),Xn(e,r+.17,r+.23,a-.2,a+.2,s+.001,6117488,.06),Xn(e,r,r+.4,a-.03,a+.03,s+.001,6117488,.4);return C_(e)}function L_(){const i=[],t=Ce.halfWidth;let e=0;for(let n=0;n<Le-1e-6;e++){const s=gn(n+.125),r=Math.abs(s.tx)>.02&&Math.abs(s.tz)>.02,a=r?.25:.5,o=gn(n+a/2);for(const l of[-1,1]){const c=o.x+o.nx*l*(t+.1),h=o.z+o.nz*l*(t+.1);if(r)i.push(A(c,0,h,.2,.05,.2,Math.floor(e/2)%2?w.cream:w.magenta));else{const u=Math.abs(o.tx)>=Math.abs(o.tz);i.push(A(c,0,h,u?a+.02:.14,.05,u?.14:a+.02,e%2?w.rock:w.rockLight))}}n+=a}return Zt(i)}function D_(i,t){const e=String(i),n=(e.length*4+3)/16;return[A(0,0,0,.1,.62,.1,w.cream),A(0,.62,0,n,.5,.06,w.cream),A(0,.62,.031,n-2/16,.07,.01,w.sunset),...t(e,0,1.03,.035,w.ink)]}function N_(){return{pole:[A(0,0,0,.26,.12,.26,4867672),A(0,0,0,.12,2.5,.12,6117488),{x:0,y:2.42,z:-.05,w:1,h:.08,d:.1,color:6117488},A(1,2.32,0,.36,.14,.22,4867672)],bulb:[A(1,2.26,0,.24,.06,.14,16773572)]}}function za(i,t,e,n,s,r=0){const a=Ri.x*2,o=Ri.z*2,l=i-e,c=t+n,h=[];for(let u=Math.floor(-c*1.1*rn/o);u<=Math.ceil(c*1.1*rn/o);u++){const d=(u+.5)*o,f=d/rn,m=mn*Math.sqrt(Math.max(0,(c*1.1)**2-f*f)),_=mn*Math.sqrt(Math.max(0,(l*.9)**2-f*f));for(const p of[-1,1]){let g=null;const M=Math.floor(_/a),E=Math.ceil(m/a),y=C=>{if(g===null)return;const R=p>0?g:-C;h.push({x:R*a,z:u*o,w:(C-g)*a,d:o,color:s}),g=null};for(let C=M;C<=E;C++){const R=p*(C+.5)*a,x=C<E?fi(R,d):1/0,b=x>=i&&x<=t||(x>=l&&x<i||x>t&&x<=c)&&(C+u+r+(p>0?0:1)&1)===0;b&&g===null&&(g=C),b||y(C)}y(E)}}return h}function I_(){const i=Ni(77),t=[];for(let e=0;e<8;e++){const n=i()*Math.PI*2,s=.25+i()*.5,r=$t.x+Math.cos(n)*$t.rx*s,a=$t.z+Math.sin(n)*$t.rz*s,o=.35+i()*.25;t.push(...su({minX:r-o,maxX:r+o,minZ:a-o,maxZ:a+o},(l,c)=>{const h=Math.atan2(c-a,l-r);return Math.abs(h-n)<.35?9:Math.hypot((l-r)/o,(c-a)/(o*.8))},1,e%2?w.frond:w.frondLight))}return t}function U_(){const i=Ni(77),t=[];for(let e=0;e<8;e++){const n=i()*Math.PI*2,s=.25+i()*.5;i(),!(e%3)&&t.push(A($t.x+Math.cos(n)*$t.rx*s,.012,$t.z+Math.sin(n)*$t.rz*s,.14,.08,.14,16164544))}return t}function F_(){const i=Ni(31),t=[];for(let e=0;e<7;e++){const n=-Math.PI*.95+i()*Math.PI*.9,s=$t.x+Math.cos(n)*$t.rx*1.02,r=$t.z+Math.sin(n)*$t.rz*1.02;for(let a=0;a<5;a++){const o=s+(i()-.5)*.8,l=r+(i()-.5)*.4,c=.45+i()*.35;t.push(A(o,0,l,.05,c,.05,a%2?w.frondDark:w.frond)),a%2===0&&t.push(A(o,c-.04,l,.08,.16,.08,w.trunkDark))}}return t}function O_(){const{x:i,z0:t,z1:e,halfWidth:n}=Je,s=[];let r=0;for(let a=t;a<e-1e-6;a+=.25,r++)s.push({x:i-n,y:-.14,z:a,w:n*2-(r%5===2?.25:0),h:.16,d:.23,color:r%2?w.wood:w.woodDark});s.push({x:i-n-.04,y:-.2,z:t,w:.12,h:.12,d:e-t,color:w.trunkDark}),s.push({x:i+n-.08,y:-.2,z:t,w:.12,h:.12,d:e-t,color:w.trunkDark});for(let a=t+2.5;a<=e;a+=2)for(const o of[-1,1])s.push(A(i+o*(n-.05),-.7,a,.18,.95,.18,w.trunk));return s.push(A(i+n-.15,0,e-.3,.12,1.3,.12,w.trunkDark)),s.push(A(i-n+.35,.02,e-.6,.34,.08,.34,w.canvas)),Zt(s,!1)}function z_(){return[A(-.1,0,0,1.8,.3,.84,w.purpleDark),A(.95,.04,0,.3,.26,.56,w.purpleDark),A(1.18,.08,0,.16,.22,.28,w.purpleDark),A(-.1,.3,0,1.7,.02,.66,w.woodDark),A(-.45,.3,0,.18,.08,.66,w.wood),A(.35,.3,0,.18,.08,.66,w.wood),A(-.1,.3,.38,1.8,.08,.08,w.cream),A(-.1,.3,-.38,1.8,.08,.08,w.cream),A(-.98,.3,0,.08,.08,.84,w.cream),A(.95,.3,.26,.3,.08,.08,w.cream),A(.95,.3,-.26,.3,.08,.08,w.cream),A(1.15,.3,0,.12,.08,.3,w.cream),A(-.05,.38,.1,1.3,.04,.06,w.trunk),A(.62,.38,.1,.24,.04,.14,w.trunk)]}const Ic={0:"111101101101111",1:"010110010010111",2:"111001111100111",3:"111001011001111",4:"101101111001001",5:"111100111001111",6:"111100111101111",7:"111001010010010",8:"111101111101111",9:"111101111001111",":":"000010000010000",".":"000000000000010","-":"000000111000000","!":"010010010000010","?":"111001011000010"," ":"000000000000000",A:"010101111101101",B:"110101110101110",C:"011100100100011",D:"110101101101110",E:"111100110100111",F:"111100110100100",G:"011100101101011",H:"101101111101101",I:"111010010010111",J:"001001001101010",K:"101101110101101",L:"100100100100111",M:"101111111101101",N:"110101101101101",O:"010101101101010",P:"110101110100100",R:"110101110101101",S:"011100010001110",T:"111010010010010",U:"101101101101111",V:"101101101101010",W:"101101111111101",X:"101101010101101",Y:"101101010010010"},bs=3,B_=5;function jr(i){return i.length===0?0:i.length*(bs+1)-1}function nl(i,t,e,n){const s=[];return[...i.toUpperCase()].forEach((r,a)=>{const o=Ic[r]??Ic["?"];for(let l=0;l<B_;l++){let c=-1;for(let h=0;h<=bs;h++){const u=h<bs&&o[l*bs+h]==="1";u&&c<0&&(c=h),!u&&c>=0&&(s.push([t+a*(bs+1)+c,e+l,h-c,1,n]),c=-1)}}}),s}function Ps(i,t,e,n,s){for(const[r,a,o,l,c]of nl(t,e,n,s))i.fillStyle=c,i.fillRect(r,a,o,l)}const Ba=8,k_=Ce.halfWidth+1.5,Uc=10,Fc="roam-lap";class H_{running=!1;time=0;best=null;ghost=null;recording=[];nextCheckpoint=0;prevLapS=null;constructor(){try{const t=localStorage.getItem(Fc);if(!t)return;const e=JSON.parse(t);typeof e.best=="number"&&e.best>0&&(this.best=e.best),Array.isArray(e.ghost)&&e.ghost.every(n=>typeof n=="number")&&(this.ghost=e.ghost)}catch{}}reset(){this.running=!1,this.time=0,this.prevLapS=null}update(t,e,n,s){const r=Le,a=Ys(e,n)<k_,o=(($h(e,n)-Cs)%r+r)%r,l=this.prevLapS;if(this.prevLapS=a?o:null,this.running&&s)for(this.time+=t;this.recording.length/2<Math.floor(this.time*Uc)+1;)this.recording.push(e,n);if(!a||l===null)return null;const c=l>r-8&&o<8;if(l<8&&o>r-8)return this.running=!1,null;if(this.running&&this.nextCheckpoint<Ba){const d=this.nextCheckpoint*r/Ba;o>=d&&o<d+12&&this.nextCheckpoint++}if(!c)return null;let u=null;if(this.running&&this.nextCheckpoint>=Ba){const d=this.time,f=this.best===null||d<this.best;f&&(this.best=d,this.ghost=this.recording.map(m=>Math.round(m*100)/100),this.save()),u={time:d,newBest:f}}return this.running=!0,this.time=0,this.nextCheckpoint=1,this.recording=[e,n],u}ghostAt(t){const e=this.ghost;if(!e)return null;const n=t*Uc,s=Math.floor(n);if(s+1>=e.length/2)return null;const r=n-s,a=e[s*2],o=e[s*2+1],l=e[s*2+2],c=e[s*2+3];return{x:a+(l-a)*r,z:o+(c-o)*r,dx:l-a,dz:c-o}}save(){try{localStorage.setItem(Fc,JSON.stringify({best:this.best,ghost:this.ghost}))}catch{}}}function Ls(i){const t=Math.floor(i*10),e=Math.floor(t/600),n=Math.floor(t%600/10);return`${e}:${String(n).padStart(2,"0")}.${t%10}`}const Tt=1/16,Et=1/(16*Math.cos(tl));function Ci(i,t,e,n,s,r=1,a=.03){const o=t-jr(i)*Tt*r/2;return nl(i,0,0,"").map(([l,c,h,u])=>({x:o+l*Tt*r,y:e-(c+u)*Et*r,z:n,w:h*Tt*r,h:u*Et*r,d:a,color:s}))}function G_(i,t,e,n,s,r=1){const a=Ri.z*r,o=t-jr(i)*Tt*r/2,l=e-5*a/2;return nl(i,0,0,"").map(([c,h,u,d])=>({x:o+c*Tt*r,y:n,z:l+h*a,w:u*Tt*r,h:.01,d:d*a,color:s}))}function V_(i,t,e,n,s=.02){return i.flatMap(([r,a,o,l,c])=>c.startsWith("#")?[{x:t+r*Tt,y:e-(a+l)*Et,z:n,w:o*Tt,h:l*Et,d:s,color:parseInt(c.slice(1),16)}]:[])}function ru(i,t,e,n){for(const[s,r,a,o,l]of t)i.fillStyle=l,i.fillRect(s+e,r+n,a,o)}const Vs=(i,t,e,n=0)=>Math.floor(((i/t+n)%1+1)%1<.5?0:e)*Et;function W_(i,t,e,n,s,r,a=.42){const o=[],l=[[],[]],c=Math.max(2,Math.round((t-i)/a));for(let h=0;h<=c*3;h++){const u=i+(t-i)*h/(c*3),d=(u-(i+t)/2)/((t-i)/2);o.push({x:u,y:e-s*(1-d*d),z:n,w:(t-i)/(c*3)+.01,h:Et,d:.03,color:w.ink})}for(let h=1;h<c;h++){const u=i+(t-i)*h/c,d=(u-(i+t)/2)/((t-i)/2),f=e-s*(1-d*d),m=r[h%r.length];l[h%2].push({x:u-1.5*Tt,y:f-2*Et,z:n,w:3*Tt,h:2*Et,d:.03,color:m},{x:u-.5*Tt,y:f-4*Et,z:n,w:1*Tt,h:2*Et,d:.03,color:m})}return{line:o,flags:l}}const Oc=i=>(t,e)=>{t.position.y=e.wake>.5&&Math.floor(e.t*5)%2===i?Et:0};function zc(i,t,e,n,s,r,a){const o=[];for(let l=0;l<n;l++)for(let c=0;c<e;c++)o.push({x:i+c*2*Tt,y:t+(n-1-l)*2*Et,z:s,w:2*Tt,h:2*Et,d:.03,color:(l+c)%2?r:a});return o}function X_(){const i=[];for(const n of[-2.6,2.6])i.push(A(n,0,0,.92,.32,.92,w.purpleDark),A(n,.32,0,.8,.08,.8,w.purpleLight),A(n,0,0,.7,3.55,.7,w.purple),A(n,3.55,0,.84,.14,.84,w.gold),A(n,1,.36,.46,.95,.02,w.cream),A(n,1.15,.375,.34,2*Et,.01,w.sunset),A(n,1.3,.375,.34,2*Et,.01,w.magenta),A(n-.18,1.9,.36,Tt*2,Et*2,.02,w.purpleDark),A(n+.18,1.9,.36,Tt*2,Et*2,.02,w.purpleDark));i.push(A(0,2.35,0,4.6,1.1,.4,w.sunset),A(0,2.27,0,4.6,.08,.46,w.gold),A(0,3.45,0,4.6,.08,.46,w.gold),...Ci("START",Tt*2,3.32-Et*2,.2,w.purpleDark,2,.02),...zc(-2.05,2.55,4,3,.2,w.ink,w.cream),...zc(2.05-8*Tt,2.55,4,3,.2,w.ink,w.cream),A(0,3.53,0,1.85,.72,.36,w.ink),A(0,3.53,0,1.95,.06,.42,w.purpleDark));for(let n=0;n<12;n++)i.push({x:-3+n*.5,y:0,z:1.6,w:.5,h:.02,d:.25,color:n%2?w.ink:w.cream}),i.push({x:-3+n*.5,y:0,z:1.85,w:.5,h:.02,d:.25,color:n%2?w.cream:w.ink});i.push({x:-2.2,y:0,z:1.05,w:4.4,h:.015,d:.45,color:w.ink});for(let n=0;n<9;n++)i.push(A(-2+n*.5,.015,1.27,Tt*2,.01,.06,w.gold));const t=W_(-2.25,2.25,2.2,.22,.3,[w.gold,w.magenta,w.sky,w.cream]);i.push(...t.line);const e=n=>{const s=[],r=[[-.2,.62,w.magenta],[.18,.72,w.sky],[0,.98,w.gold]];for(const[a,o,l]of r)s.push(A(a,o,0,.36,.38,.3,l)),s.push(A(a,o+.05,0,.44,.26,.24,l)),s.push(A(a-.09,o+.27,.15,Tt*2,Et*2,.01,w.cream)),s.push(A(a,o-.06,0,Tt*2,.06,Tt*2,l)),s.push(A(a*.5,0,0,Tt,o-.06,Tt,w.ink));return{boxes:s,at:[n*2.6,3.69,0],animate:(a,o)=>a.position.y=3.69+Vs(o.t,1.6,1,n>0?.5:0)}};return{boxes:i,parts:[{boxes:Ci("START",0,3.32,.21,w.cream,2,.03),glow:!0,animate:(n,s)=>{n.material.uniforms.uBoost.value=s.wake>.9&&Math.floor(s.t*2.5)%2?.82:1}},{boxes:t.flags[0],animate:Oc(0)},{boxes:t.flags[1],animate:Oc(1)},e(-1),e(1)],screens:[{cols:25,rows:7,at:[0,3.53+.36,.19],fps:10,draw:(n,s)=>{n.fillStyle="#23222E",n.fillRect(0,0,25,7);let r,a=s.wake>.5?"#FFE3A3":"#FFC94D";if(s.lap!==null)r=Ls(s.lap);else if(s.best!==null)r=Math.floor(s.t/1.5)%2===0||s.still?"BEST":Ls(s.best),a="#7EC8E8";else{const o=Math.floor(s.elapsed),l=Math.floor(s.t*2)%2===0||s.still?":":" ";r=`${String(Math.floor(o/60)%100).padStart(2,"0")}${l}${String(o%60).padStart(2,"0")}`}Ps(n,r,Math.floor((25-jr(r))/2),1,a)}}],shadows:[{x:-2.6,z:0,w:.95,d:.95,lift:.5},{x:2.6,z:0,w:.95,d:.95,lift:.5},{x:0,z:0,w:4.6,d:.4,lift:2.9}],height:4.6}}const q_=[...zo,...$c],Y_=[...zo,...Qc];function K_(){const i=[A(0,0,-.55,4.4,3,2.2,w.purple),A(0,3,-.55,4.5,.1,2.3,w.purpleDark),A(0,.84,.57,2.95,2.18,.04,w.ink),A(0,0,.85,4.6,.85,.6,w.purpleLight),A(0,.85,.85,4.7,.08,.68,w.gold),A(0,.2,1.16,4.2,.4,.02,w.purpleDark),A(-1.85,1.3,.56,.6,.95,.02,w.cream),A(-1.85,1.4,.575,.48,.5,.01,w.sunsetLight),A(-1.85,1.4,.58,.48,.16,.01,w.magenta),A(-1.85,1.75,.58,.2,.12,.01,w.gold),A(1.85,1.3,.56,.6,.95,.02,w.cream),A(1.85,1.4,.575,.48,.5,.01,w.sky),A(1.85,1.4,.58,.48,.2,.01,w.mountainLow),A(1.8,1.6,.585,.2,.18,.01,w.mountainHigh),A(1.7,0,1.45,.1,.55,.1,w.ink),A(1.7,.18,1.45,.34,.05,.34,w.ink),A(1.7,.55,1.45,.46,.1,.46,w.magenta)];for(let e=0;e<8;e++){const n=e%2?w.cream:w.sunset;i.push({x:-2.4+e*.6,y:3,z:-1.75,w:.6,h:.16,d:2.4,color:n})}i.push({x:-2.45,y:3,z:.62,w:4.9,h:.16,d:.04,color:w.gold});const t=e=>{const n=[];for(let s=e;s<9;s+=2)n.push(A(-2.4+s*.6,3.04,.68,Tt*2,Et*2,Tt*2,16769955));return{boxes:n,glow:!0,duskOnly:!0,animate:(s,r)=>s.visible=r.lit&&(r.wake<.5||Math.floor(r.t*3)%2===e)}};return{boxes:i,parts:[t(0),t(1)],screens:[{cols:44,rows:24,at:[0,.9+24*Et/2,.6],fps:10,draw:(e,n)=>{if(e.fillStyle="#140B2E",e.fillRect(0,0,44,24),n.wake<.12){Math.floor(n.t*1.5)%2===0&&(e.fillStyle="#FFC94D",e.fillRect(3,18,3,3));return}e.fillStyle="#FFC94D",e.fillRect(0,0,44,1),e.fillRect(0,23,44,1),e.fillRect(0,0,1,24),e.fillRect(43,0,1,24),e.fillStyle="#2B1B57",e.fillRect(2,2,17,20);const s=n.wake>.95&&Math.floor(n.t/.45)%2===1;ru(e,s?Y_:q_,2,2),Ps(e,"JUAN",22,3,"#FFF4E3"),e.fillStyle="#6E55A8",e.fillRect(22,9,20,1),Ps(e,"42087",22,11,"#FFC94D"),Ps(e,"P1",22,17,"#C2366B"),Math.floor(n.t*2)%2===0&&(e.fillStyle="#FFF4E3",e.fillRect(31,17,3,5));const r=Math.min(24,Math.ceil((n.wake-.12)/.6*24));r<24&&(e.fillStyle="#140B2E",e.fillRect(0,r,44,24-r),e.fillStyle="#7EC8E8",e.fillRect(0,r,44,1))}}],shadows:[{x:.3,z:-.3,w:4.6,d:2.6}],height:3.5}}function Z_(){const i=[];for(const o of[-2.4,2.4])i.push(A(o,0,0,.35,2.95,.35,w.trunk),A(o,0,0,.45,.25,.45,w.trunkDark),A(o-.09,.4,.18,Tt,2.2,.01,w.trunkDark));i.push(A(0,.85,0,5.2,1.85,.26,w.wood),A(0,.85,.02,5.4,.12,.3,w.woodDark),A(0,2.62,.02,5.4,.12,.3,w.woodDark));for(const o of[1.3,1.75,2.2])i.push(A(0,o,.135,5.2,Et,.01,w.woodDark));i.push(A(0,2.9,0,5.9,.16,1,w.purpleDark),A(0,3.06,-.05,5.6,.16,.8,w.purple),A(0,3.22,-.1,5.3,.1,.5,w.purpleLight));for(let o=0;o<14;o++)i.push(A(-2.75+o*.42,2.9,.49,Tt,.16,.02,w.purple));[[-1.6,1.4,.8,.9,w.cream],[-.5,1.15,.8,1,w.cream],[.6,1.45,.9,.8,w.cream],[1.65,1.1,.7,.9,w.sunsetLight]].forEach(([o,l,c,h,u],d)=>{i.push(A(o,l,.16,c,h,.04,u)),i.push(A(o,l+h-Et*2,.185,Tt*2,Et*2,.02,d%2?w.gold:w.magenta));for(let _=0;_<3;_++){const p=c*(.7-(_+d)%3*.15);i.push({x:o-c/2+.1,y:l+h-.28-_*Et*3,z:.18,w:p,h:Et,d:.01,color:w.ink})}const f=o+c/2-.22,m=l+.12;i.push({x:f,y:m+Et,z:.18,w:Tt,h:Et,d:.012,color:w.gold},{x:f+Tt,y:m,z:.18,w:Tt,h:Et,d:.012,color:w.gold},{x:f+2*Tt,y:m+Et,z:.18,w:Tt,h:Et,d:.012,color:w.gold},{x:f+3*Tt,y:m+2*Et,z:.18,w:Tt,h:Et,d:.012,color:w.gold})}),i.push(A(-2.85,0,.95,.6,.55,.55,w.wood),A(-2.85,.27,1.23,.6,Et,.01,w.woodDark),A(-2.85,0,1.23,Tt*2,.55,.01,w.woodDark),A(2.85,0,1,.5,.7,.5,w.trunk),A(2.85,.12,1,.56,.08,.56,w.trunkDark),A(2.85,.5,1,.56,.08,.56,w.trunkDark),A(2.85,.7,1,.42,.02,.42,w.woodDark));const e=(o,l)=>o.position.y=3.3+(l.wake>.5?Vs(l.t,.5,2):Vs(l.t,2.4,1)),n={boxes:[A(0,0,0,.62,1.1,.1,w.purpleDark),A(0,-.25,0,Tt*2,.25,Tt*2,w.ink)],at:[0,3.3,0],animate:e},s={boxes:[{x:-2*Tt,y:1.1-6*Et,z:.05,w:4*Tt,h:5*Et,d:.03,color:w.gold},{x:-1*Tt,y:1.1-8*Et,z:.05,w:2*Tt,h:2*Et,d:.03,color:w.gold},{x:-2*Tt,y:1.1-11*Et,z:.05,w:4*Tt,h:2*Et,d:.03,color:w.gold}],glow:!0,at:[0,3.3,0],animate:e},r={boxes:[A(0,-.12,0,Tt,.12,Tt,w.ink),A(0,-.18,0,.3,.06,.3,w.ink),A(0,-.48,0,.3,.06,.3,w.ink),...[-1,1].flatMap(o=>[-1,1].map(l=>A(o*.12,-.42,l*.12,Tt,.24,Tt,w.ink)))],at:[2,2.9,.45],animate:(o,l)=>o.rotation.z=l.wake>.5?[0,.12,0,-.12][Math.floor(l.t*3)%4]:0},a={boxes:[A(0,-.41,0,.16,.2,.16,16763213),A(0,-.36,0,Tt*2,.1,.17,16774371)],glow:!0,duskOnly:!0,at:[2,2.9,.45],animate:(o,l)=>{o.visible=l.lit,o.rotation.z=l.wake>.5?[0,.12,0,-.12][Math.floor(l.t*3)%4]:0}};return{boxes:i,parts:[n,s,r,a],pools:[{x:2,z:.85,rx:.95,rz:.65,color:16763213}],shadows:[{x:.35,z:.3,w:5.6,d:.6}],height:4.3}}function J_(){const i=[A(0,.78,.6,4.6,.16,1.3,w.cream),A(0,.3,1.24,4.6,.48,.03,w.cream),A(0,.3,1.255,4.6,Et*2,.02,w.sunset),A(-2.1,0,.6,.14,.78,1.1,w.canvas),A(2.1,0,.6,.14,.78,1.1,w.canvas),A(0,0,-.9,1.6,.9,.9,w.wood),A(0,.9,-.9,1.7,.12,1,w.woodDark),A(-.2,1.02,-.9,.9,.42,.6,w.gold),...V_(mu,-.2-3*Tt,1.4,-.59),A(1.5,.94,.65,.5,.6,.5,w.sky),A(1.5,1.54,.65,.2,.12,.2,w.cream),A(1.5,1.1,.92,.1,.08,.06,w.ink),A(2.75,0,1.45,.45,.6,.45,w.frondDark),A(2.75,.6,1.45,.5,.06,.5,w.ink),A(2.68,.66,1.4,Tt*3,Et*2,Tt*3,w.cream),A(2.85,.66,1.5,Tt*2,Et*2,Tt*2,w.cream)],t=[w.cream,w.cream,w.cream];for(let s=0;s<3;s++)for(let r=0;r<3-s;r++){const a=-1.95+r*.24+s*.12,o=.94+s*.22;i.push(A(a,o,.5,.18,.2,.18,t[s])),i.push(A(a,o+.2-Et,.5,.2,Et,.2,w.sky))}[w.gold,w.sunset,w.sky,w.magenta].forEach((s,r)=>{i.push(A(-1+r*.3,.94,.75,.2,.24,.2,w.cream)),i.push(A(-1+r*.3,1.16,.75,.16,Et,.16,s))});for(let s=0;s<4;s++){const r=.55+s*.1;i.push(A(r,.94,.55,.08,.08,.32,16767050),A(r,1,.36,.08,.08,.1,16767050),A(r,1,.74,.08,.08,.1,16767050),A(r,1.06,.31,.08,.06,.06,7031342))}for(const[s,r]of[[-2.5,-1.5],[2.5,-1.5],[-2.5,1.5],[2.5,1.5]])i.push(A(s,0,r,.14,2.6,.14,w.canvas)),i.push(A(s,0,r,.24,.08,.24,w.ink));for(let s=0;s<6;s++)i.push({x:-3+s,y:2.6,z:-1.8,w:1,h:.3,d:3.6,color:s%2?w.cream:w.sunset});i.push(A(0,2.9,0,6.2,.14,3.8,w.sunsetLight)),i.push(...G_("AID",0,-.2,3.04,w.cream,3));for(let s=0;s<12;s++)i.push({x:-3+s*.5+.1,y:2.5,z:1.76,w:.3,h:.1,d:.04,color:s%2?w.cream:w.sunset});const e={boxes:[A(0,0,0,.2,.24,.2,w.cream),A(0,.22,0,.16,Et,.16,w.sky)],at:[.2,.94,1.05],animate:(s,r)=>{s.visible=r.since>5,s.position.y=.94+(r.wake>.5?Vs(r.t,.6,2):0)}},n={boxes:[A(0,0,0,Tt*2,Et*2,Tt*2,w.sky)],at:[1.5,1,.95],animate:(s,r)=>{const a=r.t*1.4%1;s.visible=r.wake>.5,s.position.y=1.05-Math.floor(a*4)*Et*2}};return{boxes:i,parts:[e,n],shadows:[{x:.3,z:.35,w:5.4,d:3.3}],height:3.2}}const ka="#140B2E";function $_(){const i=[],t=[],e=[];return[-1.25,1.25].forEach((n,s)=>{i.push(A(n,0,-.1,1.6,1,1.2,w.purple),A(n,1,-.2,1.6,1.9,1,w.purple),A(n,1,.45,1.6,.22,.66,w.purpleLight),A(n,2.9,-.15,1.7,.62,1.1,w.purpleDark),A(n,3.52,-.15,1.75,.08,1.15,w.gold),A(n,1.22,.31,1.36,1.38,.03,w.ink),A(n+.05,1.22,.62,.14,.06,.14,w.gold),A(n+.3,1.22,.6,.14,.06,.14,w.magenta),A(n+.55,1.22,.58,.14,.06,.14,w.sky),A(n,.25,.51,.7,.5,.02,w.purpleDark),...[0,1,2,3].map(r=>A(n-.62+r*.08,.1+r*.1,.505,.08,.1,.02,r%2?w.sunset:w.gold))),t.push({boxes:[A(0,0,0,1.5,.56,.03,s?w.magenta:w.sky),...Ci(s?"SELECT":"LEVEL",0,.56-Et*1,.03,w.cream,1,.02)],glow:!0,at:[n,2.92,.42]}),t.push({boxes:[A(-.12,0,0,Tt*2,Et*3,.02,16734780),A(.12,0,0,Tt*2,Et*3,.02,16734780)],glow:!0,at:[n,.45,.53]});for(const r of[0,1]){const a=[];for(let o=r;o<8;o+=2)a.push(A(-.75+o*.214,0,0,Tt*2,Et*2,.03,16769955));t.push({boxes:a,glow:!0,at:[n,2.88,.44],animate:(o,l)=>o.visible=l.wake<.5||Math.floor(l.t*6)%2===r})}t.push({boxes:[A(0,0,0,.18,.04,.18,w.ink),A(0,0,0,Tt*2,.22,Tt*2,w.ink),A(0,.2,0,.12,.1,.12,15222063)],at:[n-.42,1.22,.55],animate:(r,a)=>r.rotation.z=a.wake>.5?[0,.35,0,-.35][Math.floor(a.t*4+s)%4]:0}),e.push({cols:18,rows:13,at:[n,1.22+.04+13*Et/2+.08,.335],fps:12,draw:(r,a)=>{if(r.fillStyle=ka,r.fillRect(0,0,18,13),a.wake<.2)Math.floor(a.t*1.2+s*.5)%2===0&&Ps(r,"COIN",2,4,"#FFC94D");else{const o=a.t/1.8+s*.5,l=Math.floor(o)%ds.length;ru(r,ds[(l+s*2)%ds.length],0,-6),r.fillStyle=ka,r.fillRect(0,11,18,2);for(let h=0;h<ds.length;h++)r.fillStyle=h===(l+s*2)%ds.length?"#FFC94D":"#3E2A73",r.fillRect(4+h*2,11,1,1);const c=o%1;if(c<.15&&!a.still){const h=Math.ceil(c/.15*11);r.fillStyle=ka,r.fillRect(0,h,18,11-h),r.fillStyle="#FFF4E3",r.fillRect(0,h,18,1)}}r.fillStyle="rgba(0,0,0,0.22)";for(let o=1;o<13;o+=2)r.fillRect(0,o,18,1)}})}),{boxes:i,parts:t,screens:e,floor:Array.from({length:48},(n,s)=>{const r=s%12,a=Math.floor(s/12);return{x:-2.4+r*.4,z:.85+a*.24,w:.4,d:.24,color:(r+a)%2?w.purpleDark:8006748}}),shadows:[{x:.3,z:-.1,w:4.4,d:1.5}],height:3.5}}function Q_(){const i=c_(pu.slice(0,7),11,11,.17,.5),t=[A(0,0,0,2.8,.3,2.8,w.stone),A(0,.3,0,2.3,.3,2.3,w.stoneLight),A(0,.6,0,1.8,.22,1.8,w.stone),A(0,.3,1.155,2.3,Et,.01,w.gold)];for(const o of[-2.4,2.4])t.push(A(o,0,.6,.42,.2,.42,w.stone),A(o,0,.6,.3,1.7,.3,w.stone),A(o-.08,.3,.755,Tt,1.2,.01,w.stoneLight),A(o,1.7,.6,.55,.18,.55,w.ink),A(o,1.88,.6,.62,.06,.62,w.gold));const e=[];["010111010","101010101","111010010","100111001","011010110"].forEach((o,l)=>{const c=-.85+l*.4;for(let h=0;h<9;h++)o[h]==="1"&&e.push({x:c+h%3*Tt,y:.5-Math.floor(h/3)*Et,z:0,w:Tt,h:Et,d:.01,color:8308968})});const s=(o,l)=>(c,h)=>{const u=h.wake>.5?[o,1,l,1]:[o,1,1,1];c.material.uniforms.uBoost.value=u[Math.floor(h.t/(h.wake>.5?.15:.26))%4]},r=[{boxes:i,glow:!0,at:[0,1.1,0],animate:(o,l)=>{o.rotation.y=l.t*(.9+l.wake*1.2),o.position.y=1.1+Vs(l.t,1.1,1)+l.wake*Et*2,s(.92,1.1)(o,l)}},{boxes:e,glow:!0,at:[0,0,1.16],animate:s(.8,1.25)}];for(const o of[-2.4,2.4])[[A(0,0,0,.36,.2,.36,16742973),A(0,.2,0,.24,.2,.24,16763213),A(0,.4,0,.1,.12,.1,16774371)],[A(0,0,0,.36,.24,.36,16742973),A(.04,.24,0,.2,.16,.2,16763213),A(-.04,.4,0,.1,.08,.1,16763213)],[A(0,0,0,.36,.18,.36,16742973),A(-.03,.18,0,.24,.24,.24,16763213),A(.03,.42,0,.1,.14,.1,16774371)]].forEach((c,h)=>r.push({boxes:c,glow:!0,at:[o,1.94,.6],animate:(u,d)=>u.visible=Math.floor(d.t*7+(o>0?1:0))%3===h}));for(let o=0;o<7;o++){const l=o/7*Math.PI*2;r.push({boxes:[A(0,0,0,Tt*2,Et*2,Tt*2,o%2?16774371:16769955)],glow:!0,at:[Math.cos(l)*.7,1.2,Math.sin(l)*.5],animate:(c,h)=>{const u=(h.t*.5+o/7)%1;c.visible=o<2||h.wake>.5,c.position.y=1+Math.floor(u*20)*Et,c.position.x=Math.cos(l)*.7+(Math.floor(u*6)%2?Tt:0)}})}const a=[];for(let o=-6;o<6;o++)for(let l=-4;l<5;l++){const c=o*.5+.25,h=l*.42+.21;Math.hypot(c/3.1,h/2)>1||Math.abs(c)<1.4&&Math.abs(h)<1.4||a.push({x:c-.23,z:h-.19,w:.46,d:.38,color:(o+l)%2?w.stone:w.stoneLight})}return{boxes:t,parts:r,floor:a,pools:[{x:0,z:.2,rx:2.4,rz:2,color:w.gold},{x:-2.4,z:1,rx:.8,rz:.55,color:w.sunsetLight},{x:2.4,z:1,rx:.8,rz:.55,color:w.sunsetLight}],shadows:[{x:.3,z:.25,w:3,d:3}],height:3.2}}function au(){return{boxes:[A(0,0,0,1.2,3,.8,w.purple),A(0,2,.42,2.6,.9,.12,w.ink),...Ci("0:00",0,2.75,.48,w.gold,2,.03)],height:3.2}}const j_={title:X_,about:K_,experience:Z_,skills:J_,projects:$_,contact:Q_,running:au};function tv(i){return(j_[i]??au)()}const ai={dusk:{sun:16761510,sunI:.42,shade:10322621,shadeI:.66,sea:8284822,seaDeep:6113914,foam:15257558,sprite:15785190,lamps:!0},dawn:{sun:16773340,sunI:.48,shade:11977956,shadeI:.7,sea:10272994,seaDeep:8299727,foam:16186367,sprite:16777215,lamps:!1},night:{sun:7305432,sunI:.22,shade:4867984,shadeI:.55,sea:2894428,seaDeep:1907525,foam:9342152,sprite:11118300,lamps:!0},noon:{sun:16777215,sunI:.52,shade:13228784,shadeI:.72,sea:7320552,seaDeep:5216214,foam:16777215,sprite:16777215,lamps:!1}},ev={"dusk-to-dawn":[ai.dusk,ai.night,ai.dawn],"dawn-to-dusk":[ai.dawn,ai.noon,ai.dusk]};function Ki(i,t,e){const n=i>>16&255,s=i>>8&255,r=i&255,a=t>>16&255,o=t>>8&255,l=t&255,c=Math.round(n+(a-n)*e),h=Math.round(s+(o-s)*e),u=Math.round(r+(l-r)*e);return c<<16|h<<8|u}function Bc(i,t,e){return{sun:Ki(i.sun,t.sun,e),sunI:i.sunI+(t.sunI-i.sunI)*e,shade:Ki(i.shade,t.shade,e),shadeI:i.shadeI+(t.shadeI-i.shadeI)*e,sea:Ki(i.sea,t.sea,e),seaDeep:Ki(i.seaDeep,t.seaDeep,e),foam:Ki(i.foam,t.foam,e),sprite:Ki(i.sprite,t.sprite,e),lamps:e<.5?i.lamps:t.lamps}}const kc=i=>i*i*(3-2*i);function nv(i,t,e){const[n,s,r]=ev[i],a=Math.min(Math.max(t,0),1);return a<e?Bc(n,s,kc(a/e)):Bc(s,r,kc((a-e)/(1-e)))}function Hc(i){const t=i===2?[0,255]:[0,128,255],e=new Uint8Array(t.length*4);t.forEach((s,r)=>e.set([s,s,s,255],r*4));const n=new Zr(e,t.length,1,un);return n.minFilter=ge,n.magFilter=ge,n.generateMipmaps=!1,n.needsUpdate=!0,n}const iv=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 p = vec4(position, 1.0);
    #ifdef USE_INSTANCING
      p = instanceMatrix * p;
    #endif
    gl_Position = projectionMatrix * modelViewMatrix * p;
  }
`,sv=`
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
`,rv={disc:0,cone:1,rect:2,ring:3};function Yn(i,t,e={}){return new Cn({uniforms:{uColor:{value:new Yt(i)},uDensity:{value:t},uShape:{value:rv[e.shape??"disc"]},uFalloff:{value:e.falloff?1:0}},vertexShader:iv,fragmentShader:sv,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})}const av=`
  varying vec3 vColor;
  varying float vShade;
  void main() {
    vColor = color;
    vec3 n = normalize(mat3(modelMatrix) * normal);
    vShade = n.y > 0.5 ? 1.0 : (n.z > 0.5 ? 0.9 : 0.78);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,ov=`
  uniform float uBoost;
  varying vec3 vColor;
  varying float vShade;
  void main() {
    gl_FragColor = vec4(min(vColor * vShade * uBoost, vec3(1.0)), 1.0);
  }
`;function Oo(){return new Cn({uniforms:{uBoost:{value:1}},vertexShader:av,fragmentShader:ov,vertexColors:!0})}const qn=(i,t)=>Math.hypot(i.x-t.x,i.z-t.z),Zi=(i,t)=>Math.atan2(-t,i);function Gc(i,t,e){let n=t-i;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return i+Math.max(-e,Math.min(e,n))}function Vc(i){const t=(jr(i)+4)/16,e=9*Et;return[A(0,0,0,t,e,.04,w.ink),A(0,-2*Et,0,2/16,2*Et,.04,w.ink),...Ci(i,0,e-2*Et,.02,w.cream,1,.03)]}class lv{mesh;items=[];m=new oe;c=new Yt;max;constructor(t,e=160){this.max=e,this.mesh=new ts(new pi(1,1,1),new bn,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.setColorAt(0,this.c.setHex(16777215)),t.add(this.mesh)}spawn(t){this.items.length>=this.max&&this.items.shift(),this.items.push({...t,life:0})}update(t){let e=0;for(let n=this.items.length-1;n>=0;n--){const s=this.items[n];if(s.life+=t,s.life>=s.max){this.items.splice(n,1);continue}s.vy-=s.gravity*t,s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<0&&(s.y=0,s.vy=0,s.vx*=.4,s.vz*=.4);const r=s.life/s.max<.6?s.size:s.size/2;this.m.makeScale(r,r,r),this.m.setPosition(s.x,s.y+r/2,s.z),this.mesh.setMatrixAt(e,this.m),this.mesh.setColorAt(e,this.c.setHex(s.color)),e++}this.mesh.count=e,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}setTint(t){this.mesh.material.color.setHex(t)}}function cv(i,t,e){const n=Vx(i,t,e);return Math.abs(n.x)<2.3&&n.z>i.hz&&n.z<i.hz+1.6}class hv{scene;o;rand=Ni(1206);glow=Oo();particles;cows=[];flocks=[];crabs=[];fish;ripples;rippleMat=Yn(16186367,.6,{shape:"ring"});jump=null;nextJump=4;fireflies;fireflyHomes=[];butterflies=[];footprints;footprintMat;prints=[];lastPrint=null;printSide=1;lastDust=0;cup;takenAt=-1/0;yaw=0;carryUntil=-1/0;tossed=!0;m=new oe;constructor(t,e){this.scene=t,this.o=e,this.particles=new lv(t),this.buildHerd(),this.buildBirds(),this.buildCrabs(),this.fish=new Ft(Zt([A(0,0,0,.32,.12,.1,16747082),A(.06,.08,0,.12,.04,.06,16774371),A(-.2,0,0,.08,.14,.04,16742973)]),this.o.occluder),this.fish.visible=!1,t.add(this.fish),this.ripples=[0,1].map(()=>{const o=new Ft(this.o.flatDisc(),this.rippleMat);return o.visible=!1,o.renderOrder=1,t.add(o),o}),this.fireflies=new ts(new pi(1,1,1),new bn({color:16773536}),48),this.fireflies.frustumCulled=!1;const n=[...this.o.bushes];for(let o=0;o<48;o++){const l=o%4===0?{x:$t.x+(this.rand()-.5)*$t.rx*2.4,z:$t.z+(this.rand()-.5)*$t.rz*2.4}:n[Math.floor(this.rand()*n.length)];l&&this.fireflyHomes.push({x:l.x+(this.rand()-.5)*1.6,z:l.z+(this.rand()-.5)*1.2,phase:this.rand()*10})}t.add(this.fireflies);const s=[16164544,16769955,8308968,16774371];[...this.o.flowers].sort(()=>this.rand()-.5).slice(0,16).forEach((o,l)=>{const c=s[l%s.length],h=new sn,u=new Ft(Zt([A(0,0,.1,.19,.02,.16,c),A(0,0,-.1,.19,.02,.16,c),A(0,-.01,0,.14,.04,.04,w.ink)]),this.o.occluder),d=new Ft(Zt([A(0,0,0,.16,.19,.03,c),A(0,-.01,0,.14,.04,.04,w.ink)]),this.o.occluder);h.add(u,d),t.add(h),this.butterflies.push({group:h,open:u,shut:d,home:{x:o.x,z:o.z},phase:this.rand()*10})}),this.footprintMat=new Dr({color:12887151,gradientMap:this.o.gradient});const a=new $n(1,1);a.rotateX(-Math.PI/2),this.footprints=new ts(a,this.footprintMat,80),this.footprints.count=0,this.footprints.frustumCulled=!1,t.add(this.footprints),this.cup=new Ft(Zt([A(0,0,0,.18,.22,.18,w.cream),A(0,.2,0,.14,Et,.14,w.sky)]),this.o.occluder),this.cup.visible=!1,t.add(this.cup)}pointables(){return[...this.cows.map((t,e)=>({obj:t.group,caption:()=>t.watching?"A COW. SHE'S WATCHING YOU.":"A COW. SHE'S BUSY.",click:()=>this.moo(e)})),...this.crabs.map(t=>({obj:t.group,caption:()=>"A CRAB, SIDEWAYS.",click:()=>{t.state==="hidden"||this.o.reduceMotion||(t.state="flee",t.until=performance.now()/1e3+.6)}})),...this.flocks.flatMap(t=>t.birds.map(e=>({obj:e.group,caption:()=>"A LITTLE BROWN BIRD."})))]}moo(t){const e=this.cows[t],n=performance.now()/1e3;n-e.lastMoo<.8||(e.lastMoo=n,e.mooUntil=n+1.3,this.o.sfx("moo",e),this.o.event({kind:"moo",cow:t}))}sinceCup(t){return t-this.takenAt}setYaw(t){this.yaw=t;for(const e of this.cows)e.bang.rotation.y=t,e.moo.rotation.y=t}setGradient(t){this.footprintMat.gradientMap=t,this.footprintMat.needsUpdate=!0}setSky(t){this.particles.setTint(t.sprite),this.rippleMat.uniforms.uColor.value.setHex(t.foam)}update(t){if(this.updateHerd(t),this.updateCup(t),this.updateFootprints(t),this.o.reduceMotion){this.fireflies.visible=t.lit,this.updateFireflies(t,!0);for(const e of this.butterflies)e.group.visible=!t.lit;this.updateButterflies(t,!0);return}this.updateDust(t),this.updateBirds(t),this.updateCrabs(t),this.updateFish(t),this.updateFireflies(t,!1),this.updateButterflies(t,!1),this.particles.update(t.dt)}buildHerd(){const t=[Zt(Tc(0)),Zt(Tc(1))],e=[Zt(Ac(0)),Zt(Ac(1))],n=Zt(Vc("!")),s=Zt(Vc("MOO"));this.o.cows.forEach((r,a)=>{const o=new sn,l=new Ft(t[r.variant],this.o.occluder),c=new Ft(e[r.variant],this.o.occluder);c.position.set(.68,1,0),c.rotation.z=-.55;const h=new Ft(this.o.flatDisc(),this.o.shadow);h.scale.set(2,1,1.1),h.renderOrder=1,o.add(l,c,h),this.scene.add(o);const u=[n,s].map(f=>{const m=new Ft(f,this.glow);return m.visible=!1,this.scene.add(m),m}),d={kind:"circle",x:r.x,z:r.z,r:.85};this.o.solids.push(d),this.cows.push({group:o,head:c,bang:u[0],moo:u[1],solid:d,x:r.x,z:r.z,rot:r.rot,target:null,until:2+a*1.3,watching:!1,bangUntil:0,mooUntil:0,lastMoo:-10,phase:a*1.7})})}pickPasture(t){for(let e=0;e<12;e++){const n={x:De.minX+1.6+this.rand()*(De.maxX-De.minX-3.2),z:De.minZ+1.6+this.rand()*(De.maxZ-De.minZ-3.2)};if(!(qn(n,t)<2||qn(n,t)>8)&&!this.cows.some(s=>s!==t&&(qn(n,s)<2.4||s.target&&qn(n,s.target)<2.4)))return n}return null}updateHerd(t){const{t:e,dt:n,runner:s}=t;for(const r of this.cows){const a=qn(s,r);if(a<5&&!r.watching?(r.watching=!0,r.bangUntil=e+.9):a>6.5&&r.watching&&(r.watching=!1,r.until=e+1.5+this.rand()*2,r.target=null),t.jumped&&a<3.6&&e-r.lastMoo>1.6&&(r.lastMoo=e,r.mooUntil=e+1.3,this.o.sfx("moo",r),this.o.event({kind:"moo",cow:this.cows.indexOf(r)})),this.o.reduceMotion)r.group.position.set(r.x,0,r.z),r.group.rotation.y=r.rot;else{if(r.group.position.y=0,r.watching)r.rot=Gc(r.rot,Zi(s.x-r.x,s.z-r.z),n*2.2),r.head.rotation.z=.1;else if(r.target){const o=r.target.x-r.x,l=r.target.z-r.z,c=Math.hypot(o,l);if(c<.08)r.target=null,r.until=e+3+this.rand()*6;else{const h=Zi(o,l);r.rot=Gc(r.rot,h,n*1.6);const u=Math.max(0,Math.cos(h-r.rot)),d=Math.min(c,.55*u*n);r.x+=o/c*d,r.z+=l/c*d,r.head.rotation.z=.1,r.group.position.y=Math.floor(e*4+r.phase)%2?Et:0}}else{const o=(e+r.phase)%2.6/2.6;r.head.rotation.z=o<.64?-.55:.1,e>r.until&&(r.target=this.pickPasture(r)),!r.target&&e>r.until&&(r.until=e+2)}r.group.position.x=r.x,r.group.position.z=r.z,r.group.rotation.y=r.rot,r.solid.x=r.x,r.solid.z=r.z}for(const[o,l]of[[r.bang,r.bangUntil],[r.moo,r.mooUntil]])o.visible=e<l,o.position.set(r.x+Math.sin(this.yaw)*.2,1.75,r.z+Math.cos(this.yaw)*.2);r.moo.visible&&(r.bang.visible=!1)}}grassSpot(t,e){for(let n=0;n<40;n++){let s;if(t&&e){const a=Math.atan2(t.z-e.z,t.x-e.x)+(this.rand()-.5)*1.4,o=12+this.rand()*12;s={x:t.x+Math.cos(a)*o,z:t.z+Math.sin(a)*o}}else s={x:(this.rand()*2-1)*70,z:(this.rand()*2-1)*50};if(!(!Fo(s.x,s.z)||Ir(s.x,s.z)!=="grass"||tu(s.x,s.z,2))&&!(Ys(s.x,s.z)<3.5||fi(s.x,s.z)>dn-.06))return s}return null}buildBirds(){const t=Zt([A(0,.06,0,.2,.12,.12,6114111),A(-.13,.12,0,.08,.04,.08,4864817),A(.02,0,.03,.02,.06,.02,w.gold),A(.02,0,-.03,.02,.06,.02,w.gold)]),e=Zt([A(0,0,0,.09,.09,.09,4141867),A(.06,.03,0,.04,.03,.03,w.gold)]),n=Zt([A(-.02,.16,.1,.1,.14,.03,8020818),A(-.02,.16,-.1,.1,.14,.03,8020818)]),s=Zt([A(-.02,.1,.1,.12,.03,.1,8020818),A(-.02,.1,-.1,.12,.03,.1,8020818)]);for(let r=0;r<4;r++){const a=this.grassSpot();if(!a)continue;const o=[];for(let l=0;l<4;l++){const c=new sn,h=new Ft(t,this.o.occluder),u=new Ft(e,this.o.occluder);u.position.set(.11,.16,0);const d=new Ft(n,this.o.occluder),f=new Ft(s,this.o.occluder);d.visible=f.visible=!1,c.add(h,u,d,f),c.rotation.y=this.rand()*Math.PI*2,this.scene.add(c);const m={x:(this.rand()-.5)*1.6,z:(this.rand()-.5)*1.1};c.position.set(a.x+m.x,0,a.z+m.z),o.push({group:c,head:u,wingsUp:d,wingsDown:f,off:m,phase:this.rand()*10})}this.flocks.push({birds:o,at:a,from:a,to:a,flying:!1,t0:0,dur:1})}}updateBirds(t){const{t:e,runner:n}=t;for(const s of this.flocks){if(!s.flying){const o=qn(n,s.at);if(o<2.8||n.sprinting&&o<5){const l=this.grassSpot(s.at,n);l&&(s.flying=!0,s.from=s.at,s.to=l,s.t0=e,s.dur=qn(s.at,l)/6,this.o.sfx("flap",s.at),this.o.event({kind:"birds"}))}if(Math.abs(s.at.x-t.focus.x)>22||Math.abs(s.at.z-t.focus.z)>18)continue;for(const l of s.birds){const c=Math.floor(e*2.5+l.phase*7)%3===0;l.head.position.y=c?.08:.16,l.head.position.x=c?.14:.11,l.wingsUp.visible=l.wingsDown.visible=!1}continue}let r=0;const a=Zi(s.to.x-s.from.x,s.to.z-s.from.z);if(s.birds.forEach((o,l)=>{const c=Math.min(1,Math.max(0,(e-s.t0-l*.07)/s.dur));c>=1&&r++;const h=s.from.x+(s.to.x-s.from.x)*c+o.off.x,u=s.from.z+(s.to.z-s.from.z)*c+o.off.z;o.group.position.set(h,Math.sin(Math.PI*c)*(2.4+l%2*.4),u),o.group.rotation.y=a;const d=Math.floor(e*12+l)%2===0;o.wingsUp.visible=c>0&&c<1&&d,o.wingsDown.visible=c>0&&c<1&&!d,o.head.position.set(.11,.16,0)}),r===s.birds.length){s.flying=!1,s.at=s.to;for(const o of s.birds)o.group.rotation.y=this.rand()*Math.PI*2}}}beachSpot(){const t=this.rand()*Math.PI*2,e=dn+.025+this.rand()*(Vr-dn-.045),n=Wr(t,e),s=Wr(t+.01,e),r=Math.hypot(s.x-n.x,s.z-n.z);return{p:n,tx:(s.x-n.x)/r,tz:(s.z-n.z)/r}}buildCrabs(){const n=Zt([A(0,.03,0,.3,.1,.2,14243643),A(0,.13,0,.22,.04,.14,15234127),A(-.06,.13,.07,.03,.08,.03,w.ink),A(.06,.13,.07,.03,.08,.03,w.ink),A(-.2,.04,.1,.1,.08,.1,15234127),A(.2,.04,.1,.1,.08,.1,15234127),A(-.19,0,-.04,.12,.03,.03,12076076),A(.19,0,-.04,.12,.03,.03,12076076),A(-.18,0,-.1,.1,.03,.03,12076076),A(.18,0,-.1,.1,.03,.03,12076076)]);for(let s=0;s<8;s++){const{p:r,tx:a,tz:o}=this.beachSpot(),l=new sn;l.add(new Ft(n,this.o.occluder)),l.position.set(r.x,0,r.z),l.rotation.y=Zi(a,o),this.scene.add(l),this.crabs.push({group:l,x:r.x,z:r.z,tx:a,tz:o,state:"idle",until:this.rand()*3,dir:1})}}onBeach(t,e){const n=fi(t,e);return n>dn+.015&&n<Vr-.01}updateCrabs(t){const{t:e,dt:n,runner:s}=t;for(const r of this.crabs){const a=qn(s,r);if(r.state==="hidden"){if(e>r.until){const{p:c,tx:h,tz:u}=this.beachSpot();Object.assign(r,{x:c.x,z:c.z,tx:h,tz:u,state:"idle",until:e+1}),r.group.visible=!0,r.group.rotation.y=Zi(h,u)}continue}if(r.state!=="flee"&&a<2.2){const c=(r.x-s.x)*r.tx+(r.z-s.z)*r.tz;r.dir=c>=0?1:-1,r.state="flee",r.until=e+.6}if(r.state==="idle"&&e>r.until?(r.state="scuttle",r.dir=this.rand()<.5?-1:1,r.until=e+.5+this.rand()*.8):r.state==="scuttle"&&e>r.until&&(r.state="idle",r.until=e+1+this.rand()*3),r.state==="flee"&&e>r.until){this.o.event({kind:"crab"}),r.state="hidden",r.until=e+7+this.rand()*6,r.group.visible=!1;continue}const o=r.state==="flee"?3.6:r.state==="scuttle"?1.1:0;if(o>0){const c=r.x+r.tx*r.dir*o*n,h=r.z+r.tz*r.dir*o*n;this.onBeach(c,h)?(r.x=c,r.z=h):r.dir=-r.dir}const l=r.state==="flee"&&e>r.until-.2?-.1:0;r.group.position.set(r.x,l+(o>0&&Math.floor(e*10)%2?Et:0),r.z)}}updateFish(t){const{t:e}=t,n=Math.abs($t.x-t.focus.x)<26&&Math.abs($t.z-t.focus.z)<22;if(this.jump){const s=(e-this.jump.t0)/.7;if(s>=1)this.ripple(1,this.jump.to,e),this.o.sfx("splash",this.jump.to),this.jump=null,this.nextJump=e+3+this.rand()*6;else{const{from:r,to:a}=this.jump;this.fish.visible=!0,this.fish.position.set(r.x+(a.x-r.x)*s,.05+4*.7*s*(1-s),r.z+(a.z-r.z)*s),this.fish.rotation.set(0,Zi(a.x-r.x,a.z-r.z),(.5-s)*1.6)}}else if(this.fish.visible=!1,e>this.nextJump&&n){const s=this.rand()*Math.PI*2,r=this.rand()*.55,a={x:$t.x+Math.cos(s)*$t.rx*r,z:$t.z+Math.sin(s)*$t.rz*r},o=this.rand()*Math.PI*2;this.jump={from:a,to:{x:a.x+Math.cos(o)*.9,z:a.z+Math.sin(o)*.6},t0:e},this.ripple(0,a,e)}this.ripples.forEach(s=>{const r=s.userData.born;if(r===void 0)return;const a=Math.floor((e-r)/.16);s.visible=a<4;const o=.5+a*.35;s.scale.set(o*1.3,1,o*.9)})}ripple(t,e,n){const s=this.ripples[t];s.position.set(e.x,.012,e.z),s.userData.born=n}updateFireflies(t,e){if(this.fireflies.visible=t.lit,!t.lit)return;const n=e?0:t.t;this.fireflyHomes.forEach((s,r)=>{const a=e||(n*.7+s.phase)%1<.55,o=s.x+Math.round(Math.sin(n*.6+s.phase)*10)/16,l=s.z+Math.round(Math.cos(n*.45+s.phase*1.3)*6)*Ri.z,c=.45+Math.round(Math.sin(n*1.1+s.phase*2)*4)*Et,h=a?.09:0;this.m.makeScale(h,h,h),this.m.setPosition(o,c,l),this.fireflies.setMatrixAt(r,this.m)}),this.fireflies.count=this.fireflyHomes.length,this.fireflies.instanceMatrix.needsUpdate=!0}updateButterflies(t,e){const n=e?0:t.t;for(const s of this.butterflies){if(s.group.visible=!t.lit,t.lit||!e&&(Math.abs(s.home.x-t.focus.x)>22||Math.abs(s.home.z-t.focus.z)>18))continue;const r=e||Math.floor(n*7+s.phase)%2===0;s.open.visible=r,s.shut.visible=!r,s.group.position.set(s.home.x+Math.sin(n*.8+s.phase)*.9,.45+Math.round(Math.abs(Math.sin(n*2.6+s.phase))*3)*Et,s.home.z+Math.cos(n*.6+s.phase*1.3)*.6),s.group.rotation.y=Math.cos(n*.8+s.phase)>0?0:Math.PI}}updateDust(t){const{t:e,runner:n}=t,s=Ir(n.x,n.z),r=s==="road"?10130856:s==="sand"?15785912:13220239;if(t.landed)for(let o=0;o<7;o++){const l=o/7*Math.PI*2;this.particles.spawn({x:n.x+Math.cos(l)*.2,y:.02,z:n.z+Math.sin(l)*.12,vx:Math.cos(l)*1.3,vy:.7,vz:Math.sin(l)*.8,max:.42,size:.125,gravity:2,color:r})}const a=Math.hypot(n.vx,n.vz);n.sprinting&&!n.airborne&&a>5&&e-this.lastDust>.08&&(this.lastDust=e,this.particles.spawn({x:n.x-n.vx/a*.25+(this.rand()-.5)*.2,y:.02,z:n.z-n.vz/a*.25,vx:-n.vx*.12,vy:.6+this.rand()*.4,vz:-n.vz*.12,max:.5,size:.125,gravity:.6,color:r}))}updateFootprints(t){const{t:e,runner:n}=t;if(n.moving&&!n.airborne&&Ir(n.x,n.z)==="sand"&&(!this.lastPrint||qn(this.lastPrint,n)>.45)){const s=Math.hypot(n.vx,n.vz)||1;this.printSide=-this.printSide,this.prints.push({x:n.x-n.vz/s*.12*this.printSide,z:n.z+n.vx/s*.12*this.printSide,born:e}),this.prints.length>80&&this.prints.shift(),this.lastPrint={x:n.x,z:n.z}}for(;this.prints.length&&e-this.prints[0].born>9;)this.prints.shift();this.prints.forEach((s,r)=>{this.m.makeScale(2/16,1,Ri.z),this.m.setPosition(Math.round(s.x*16)/16,.003,s.z),this.footprints.setMatrixAt(r,this.m)}),this.footprints.count=this.prints.length,this.footprints.instanceMatrix.needsUpdate=!0}updateCup(t){const{t:e,runner:n}=t,s=this.o.aidStation;if(!s)return;const r=Math.hypot(n.vx,n.vz);if(e-this.takenAt>6&&r>3&&!n.airborne&&cv(s,n.x,n.z)&&(this.takenAt=e,this.carryUntil=e+1.4,this.tossed=!1,this.o.sfx("cup",n),this.o.event({kind:"cup"})),this.cup.visible=e<this.carryUntil,this.cup.visible){const a=n.facing==="left"?-.35:n.facing==="right"?.35:0;this.cup.position.set(n.x+Math.cos(this.yaw)*a,1.35+n.h,n.z-Math.sin(this.yaw)*a+.05)}else if(!this.tossed){if(this.tossed=!0,this.o.reduceMotion)return;for(let a=0;a<6;a++)this.particles.spawn({x:n.x,y:1.4+n.h,z:n.z,vx:(this.rand()-.5)*1.6,vy:1.2+this.rand(),vz:(this.rand()-.5)*.8,max:.6,size:.0625,gravity:9,color:w.sky});this.particles.spawn({x:n.x,y:1.4,z:n.z,vx:-n.vx*.3-.6,vy:3,vz:-n.vz*.3,max:1,size:.16,gravity:9,color:w.cream})}}}const uv=118,dv=10;class fv{stones=[];reduceMotion;constructor(t,e){this.reduceMotion=e.reduceMotion,[...e.years].sort((s,r)=>s-r).forEach((s,r)=>{const a=uv+r*dv,o=gn(a),l=Ce.halfWidth+1.15,c={x:o.x-o.nx*l,z:o.z-o.nz*l},h=String(s),u=Math.max(1,(h.length*4+5)/16),d=new sn;d.add(new Ft(Zt([A(0,0,0,u+.12,1,.36,w.stone),A(0,1,0,u-.1,.12,.28,w.stoneLight),A(0,0,0,u+.3,.14,.5,w.rockDark),A(0,.32,.18,u-.06,9*Et,.03,w.gold),...Ci(h,0,.32+7*Et,.21,w.ink,1,.02)]),e.occluder));const f=new Ft(e.flatDisc(),e.shadow);f.scale.set(u+.6,1,.7),f.position.set(.2,0,.25),f.renderOrder=1,f.visible=this.reduceMotion,d.add(f),d.position.set(c.x,this.reduceMotion?0:-1.2,c.z),d.visible=this.reduceMotion,t.add(d);const m=new Ft(Zt([A(0,0,0,u,.01,.18,w.trunkDark),A(-u/4,0,.1,u/3,.01,.1,w.trunkDark)]),e.solid);m.position.set(c.x,.005,c.z),m.visible=!this.reduceMotion,t.add(m);const _={kind:"circle",x:c.x,z:c.z,r:this.reduceMotion?.45:0};e.solids.push(_),this.stones.push({s:a,year:s,group:d,scar:m,at:c,risenAt:this.reduceMotion?0:null,solid:_})})}pointables(){return this.stones.map(t=>({obj:t.group,caption:()=>`A STONE FOR ${t.year}.`}))}allRisen(){return this.stones.every(t=>t.risenAt!==null)}update(t,e,n){const s=[];if(this.stones.length===0)return{year:null,rising:s};const r=Ys(e,n)<Ce.halfWidth+3,a=$h(e,n);for(const c of this.stones)if(c.risenAt===null&&r&&a>=c.s-3&&a<c.s+20&&(c.risenAt=t,c.group.visible=!0,s.push(c.at)),c.risenAt!==null&&!this.reduceMotion){const h=Math.min(6,Math.floor((t-c.risenAt)/.1));c.group.position.y=-1.2+h/6*1.2,c.group.children[1].visible=h===6,h===6&&(c.scar.visible=!1,c.solid.r=.45)}const o=this.stones[0],l=this.stones[this.stones.length-1];if(!r||a<o.s-6||a>l.s+10)return{year:null,rising:s};if(a<=o.s)return{year:o.year,rising:s};for(let c=0;c<this.stones.length-1;c++){const h=this.stones[c],u=this.stones[c+1];if(a<u.s)return{year:Math.floor(h.year+(u.year-h.year)*(a-h.s)/(u.s-h.s)),rising:s}}return{year:l.year,rising:s}}}ee.enabled=!1;const Ha={yaw:45,lens:"perspective",rows:180,tones:2},yn=16,Si=tl,Ga=60,Va=1/120,Wc=1.25/Math.cos(Si),Xc=20,Er=[1,4/3,2],qc="roam-zoom",pv=7,br=2.4,yi=["stand","a","b","jump","watch"],Ur=3*yi.length,Yc={right:0,left:0,down:1,up:2},mv={right:0,up:Math.PI/2,left:Math.PI,down:-Math.PI/2};function Kc(i=document.createElement("canvas"),t){i.width=16*Ur,i.height=40;const e=i.getContext("2d");e.clearRect(0,0,i.width,i.height);const n=r=>{const a=r.toUpperCase();return t&&a==="#FF9A4A"?t.top:t&&a==="#7EC8E8"?t.bottom:r},s=[{shared:bu,lamp:Eu,poses:{stand:yu,a:Su,b:Mu,jump:vu,watch:_u}},{shared:zo,lamp:Ru,poses:{stand:$c,a:Au,b:Tu,jump:Qc,watch:wu}},{shared:Iu,lamp:[],poses:{stand:Nu,a:Du,b:Lu,jump:Pu,watch:Cu}}];for(let r=0;r<2;r++)s.forEach(({shared:a,lamp:o,poses:l},c)=>{yi.forEach((h,u)=>{const d=l[h],f=(c*yi.length+u)*16,m=r*20;for(const[_,p,g,M,E]of[...a,...d,...r?o:[]])e.fillStyle=n(E),e.fillRect(f+_,m+p,g,M)})});return i}const $e=12,gv=(()=>{const i=new Uint8Array($e*$e);let t=7;const e=()=>(t=t*16807%2147483647)/2147483647,n=(s,r,a,o)=>{const l=Math.floor(e()*$e),c=a+Math.floor(e()*(o-a+1));for(let h=0;h<c;h++)i[(l+h)%$e*$e+s]=r};for(let s=0;s<$e;s++){const r=s===0||s===$e-1;for(let a=0;a<$e;a++)i[a*$e+s]=r?2:0;if(r){n(s,1,2,4);continue}s%3!==1&&n(s,1,3,7),e()<.45&&n(s,2,1,2)}return i})();class xv{host;canvas;renderer;scene=new Vd;camera;look;cb;reduceMotion;landmarks;scenery;solids;labelAnchors=[];stations=[];openedAt=performance.now();life=null;lap=new H_;lastLapReport="";questRoad=null;lastYear=void 0;ghostMesh;ghostTex;zoom=0;lastWheel=0;goal=null;goalMarker;pointer=null;hoverAt=0;hoverDirty=!1;lastCaption=null;hovered=null;pointables=[];raycaster=new Wf;stridePhase=0;lastWaves=-1;told=new Set;banana=null;kit={top:"#FF9A4A",bottom:"#7EC8E8"};swayTime={value:0};swayDir={value:new At(1,0)};facers=[];swayMats=[];wash=null;boat=null;glints=null;glintSpots=[];cars=[];lamps=[];glowPools=[];gradient;solidMat;occluderMat;seaMat=new bn;shallowMat=new bn;foamMat=new bn;shadowMat;glowMat=Oo();rectShadowMat=Yn(2825047,.5,{shape:"rect"});beamMat=Yn(16769955,.5,{shape:"cone",falloff:!0});tailPoolMat=Yn(15222063,.34,{falloff:!0});waterTex;waterMat;runnerMat;runnerTex;sun=new Hf;shade=new Gf;seeThrough={value:new _e(-1e3,-1e3,Xc,0)};runner;runnerMesh;runnerShadow;animClock=0;lampsLit=!1;stillSince=performance.now();jumped=!1;landed=!1;lampPool;focus=new U;pan=new U;axes={right:{x:1,z:0},up:{x:0,z:-1}};size={iw:320,ih:180,scale:1,left:0,top:0};held={up:!1,down:!1,left:!1,right:!1,sprint:!1};jumpQueued=!1;inputEnabled=!0;drag=null;raf=0;running=!1;paused=!0;hidden=!1;last=0;acc=0;frameTimes=[];frameTimeAt=0;lastPrompt=void 0;lastNearest="";lastPace=void 0;paceSpeed=0;moved=!1;stuck={timer:0,origin:{x:0,z:0},on:!1};sky;cycle=null;cycleMs=2800;cycleMid=.45;resizeObserver;tmp=new U;constructor(t,e,n){this.host=t,this.cb=n,this.look=e.look,this.reduceMotion=e.reduceMotion,this.sky=e.sky,this.canvas=document.createElement("canvas"),this.canvas.className="roam-canvas",this.canvas.setAttribute("aria-hidden","true"),t.appendChild(this.canvas);try{this.renderer=new zx({canvas:this.canvas,antialias:!1,powerPreference:"default"})}catch(o){throw this.canvas.remove(),o}this.renderer.outputColorSpace=Fs,this.renderer.setPixelRatio(1),this.gradient=Hc(this.look.tones),this.solidMat=new Dr({vertexColors:!0,gradientMap:this.gradient}),this.occluderMat=new Dr({vertexColors:!0,gradientMap:this.gradient}),this.installSeeThrough(this.occluderMat),this.shadowMat=Yn(2825047,.5),this.waterTex=new Zr(new Uint8Array($e*$e*4),$e,$e,un),this.waterTex.magFilter=ge,this.waterTex.minFilter=ge,this.waterTex.wrapS=Is,this.waterTex.wrapT=Is,this.waterTex.generateMipmaps=!1,this.waterMat=new bn({map:this.waterTex,side:hn}),this.runnerTex=new kl(Kc()),this.runnerTex.magFilter=ge,this.runnerTex.minFilter=ge,this.runnerTex.generateMipmaps=!1,this.runnerTex.repeat.set(1/Ur,.5),this.runnerMat=new bn({map:this.runnerTex,alphaTest:.5,side:hn}),this.sun.position.set(-.416,.885,-.208),this.scene.add(this.sun,this.shade),this.landmarks=Gx(e.zoneIds,e.look.yaw*Math.PI/180),this.scenery=qx(this.landmarks),this.solids=Zx(this.landmarks,this.scenery),this.buildWorld(),this.life=new hv(this.scene,{reduceMotion:this.reduceMotion,cows:this.scenery.cows,flowers:this.scenery.flowers,bushes:this.scenery.bushes,aidStation:this.landmarks.find(o=>o.zoneId==="skills"),solids:this.solids,occluder:this.occluderMat,shadow:this.shadowMat,gradient:this.gradient,flatDisc:()=>this.flatDisc(),sfx:(o,l)=>this.sfxAt(o,l),event:o=>this.cb.onEvent(o)}),this.buildBanana(),this.pointables.push(...this.life.pointables()),this.lampPool=new Ft(this.flatDisc(),Yn(16769955,.42,{shape:"cone",falloff:!0})),this.lampPool.scale.set(3.2,1,2.2),this.scene.add(this.lampPool),this.goalMarker=new Ft(this.flatDisc(),Yn(16774371,.7,{shape:"ring"})),this.goalMarker.visible=!1,this.scene.add(this.goalMarker);try{const o=Number(localStorage.getItem(qc));(o===1||o===2)&&(this.zoom=o)}catch{}this.questRoad=new fv(this.scene,{years:gu.map(xu).filter(o=>o!==null),occluder:this.occluderMat,solid:this.solidMat,shadow:this.shadowMat,flatDisc:()=>this.flatDisc(),solids:this.solids,reduceMotion:this.reduceMotion}),this.pointables.push(...this.questRoad.pointables()),this.facers.push(...this.questRoad.pointables().map(o=>o.obj));const s=new $n(1,Wc);s.translate(0,Wc/2,0),this.runnerMesh=new Ft(s,this.runnerMat),this.runnerMesh.renderOrder=2,this.ghostTex=this.runnerTex.clone(),this.ghostTex.needsUpdate=!0;const r=new bn({map:this.ghostTex,alphaTest:.5,side:hn,color:14208511});r.onBeforeCompile=o=>{o.fragmentShader=o.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
 if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.0) < 0.5) discard;`)},this.ghostMesh=new Ft(s,r),this.ghostMesh.renderOrder=2,this.ghostMesh.visible=!1,this.scene.add(this.ghostMesh),this.runnerShadow=new Ft(this.flatDisc(),this.shadowMat),this.scene.add(this.runnerMesh,this.runnerShadow),this.stirStations(0,performance.now(),!0),this.scene.traverse(o=>{o instanceof Ft&&o.material instanceof Cn&&"uDensity"in o.material.uniforms&&(o.renderOrder=Math.max(o.renderOrder,1))});const a=this.landmarks[0];this.runner=Ec(a?.door.x??0,a?.door.z??40),this.camera=this.makeCamera(),this.applySky(ai[this.sky]),this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onBlur=this.onBlur.bind(this),this.onVisibility=this.onVisibility.bind(this),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onContextLost=this.onContextLost.bind(this),this.tick=this.tick.bind(this),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),document.addEventListener("visibilitychange",this.onVisibility),this.canvas.addEventListener("pointerdown",this.onPointerDown),this.onWheel=this.onWheel.bind(this),this.canvas.addEventListener("wheel",this.onWheel,{passive:!0}),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),this.canvas.addEventListener("webglcontextlost",this.onContextLost),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize()}resume(){this.paused=!1,this.wake()}pause(){this.paused=!0,this.releaseKeys(),this.stop(),this.goal=null,this.pointer=null,this.hovered=null,this.lastCaption!==null&&(this.lastCaption=null,this.cb.onHover(null))}setInputEnabled(t){this.inputEnabled=t,t||this.releaseKeys()}placeAt(t,e="down"){const n=this.landmarks.find(s=>s.zoneId===t)??this.landmarks[0];n&&(this.runner=Ec(n.door.x,n.door.z,e),this.lap.reset(),this.pan.set(0,0,0),this.focus.set(this.runner.x+this.axes.up.x*br,0,this.runner.z+this.axes.up.z*br),this.stuck={timer:0,origin:{x:n.door.x,z:n.door.z},on:!1},this.cb.onStuck(!1),this.lastPrompt=void 0,this.running||this.renderOnce())}nearestZone(){return this.nearest().zoneId}runnerPosition(){return{x:this.runner.x,z:this.runner.z}}landmarkPlacements(){return this.landmarks}runnerOnScreen(){return this.toScreen(this.runner.x,.7+this.runner.h,this.runner.z)}setSky(t,e,n,s){if(this.cycleMs=n,this.cycleMid=s,e&&!this.reduceMotion){(!this.cycle||this.cycle.kind!==e)&&(this.cycle={kind:e,start:performance.now()});return}this.cycle=null,this.sky=t,this.applySky(ai[t]),this.running||this.renderOnce()}setLook(t){const e=t.tones!==this.look.tones;if(this.look=t,e){const n=this.gradient;this.gradient=Hc(t.tones),this.solidMat.gradientMap=this.gradient,this.occluderMat.gradientMap=this.gradient;for(const s of this.swayMats)s.gradientMap=this.gradient;this.life?.setGradient(this.gradient),n.dispose()}this.camera=this.makeCamera(),this.resize()}dispose(){this.stop(),this.resizeObserver.disconnect(),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),document.removeEventListener("visibilitychange",this.onVisibility),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("wheel",this.onWheel),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("webglcontextlost",this.onContextLost);const t=new Set;this.scene.traverse(e=>{if(e instanceof Ft||e instanceof ts){e.geometry.dispose();const n=e.material;(Array.isArray(n)?n:[n]).forEach(s=>t.add(s))}}),t.forEach(e=>e.dispose()),this.gradient.dispose(),this.runnerTex.dispose(),this.waterTex.dispose(),this.ghostTex.dispose();for(const e of this.stations)for(const n of e.screens)n.tex.dispose();this.renderer.dispose(),this.renderer.forceContextLoss(),this.canvas.remove()}flatDisc(){const t=new $n(1,1);return t.rotateX(-Math.PI/2),t.translate(0,.02,0),t}point(t,e){return this.pointables.push({obj:t,caption:()=>e}),t}add(t,e,n=0){const s=new Ft(t,e);return s.renderOrder=n,s.matrixAutoUpdate=!1,s.updateMatrix(),this.scene.add(s),s}instanced(t,e,n,s){const r=new ts(t,e,Math.max(n.length,1));r.count=n.length;const a=new oe,o=new Li,l=new U(0,1,0);return n.forEach((c,h)=>{o.setFromAxisAngle(l,c.rot);const[u,d]=s?s(c.scale):[c.scale,c.scale];a.compose(new U(c.x,0,c.z),o,new U(u,c.scale,d)),r.setMatrixAt(h,a)}),r.instanceMatrix.needsUpdate=!0,r.computeBoundingSphere(),this.scene.add(r),r}buildWorld(){const t=new $n(1400,1400);t.rotateX(-Math.PI/2),t.translate(0,-.36,0),this.add(t,this.seaMat);const e=A_(),n=(l,c)=>{const h=new Jr(l,1);return h.rotateX(-Math.PI/2),h.translate(0,c,0),h};this.add(n(e.shallow,-.35),this.shallowMat),this.add(n(e.foam,-.345),this.foamMat);for(const l of b_())this.add(l,this.solidMat);this.point(this.add(n(e.pond,.008),this.shallowMat),"THE POND. SOMETHING SPLASHES.");const s=T_();this.add(n(s.pool,.008),this.shallowMat),this.add(n(s.foam,.01),this.foamMat),this.wash=this.add(n(w_(),.003),this.foamMat),this.add(Yi(za(.976,1,.012,0,12887670),.002),this.solidMat),this.add(Yi(za(dn,dn,0,.011,w.grass),.004),this.solidMat),this.add(Yi(za(dn,dn,.011,0,w.sand,1),.0045),this.solidMat),this.add(R_(),this.solidMat),this.add(P_(this.landmarks.filter(l=>l.zoneId!=="title").map(l=>l.s),Cs),this.solidMat),this.add(L_(),this.solidMat),this.buildRoadside(),this.point(this.add(O_(),this.occluderMat),"THE PIER.");const r=new Ft(Zt(z_(),!1),this.occluderMat);r.position.set(Je.x+1.9,-.42,Je.z1-2.2),r.rotation.y=Math.PI/2,this.scene.add(r),this.boat=r,this.point(r,"A ROWING BOAT. NOT FOR HIRE."),this.add(Yi(I_(),.011),this.solidMat),this.add(Zt(U_()),this.solidMat),this.add(Zt(F_()),this.swayMaterial("occluder",.2,.7)),this.buildGlints(),this.point(this.add(y_(),this.occluderMat),"THE MOUNTAIN. ANOTHER DAY."),this.point(this.add(E_(),this.waterMat,1),"THE WATERFALL."),this.point(this.add(S_(),this.solidMat),"THE PASTURE FENCE.");const a=this.scenery;this.point(this.instanced(Zt(h_()),this.swayMaterial("occluder",1.6,2.4),a.palms),"A PALM."),this.instanced(this.flatDisc(),this.shadowMat,a.palms,l=>[1.5*l,1.1*l]);for(let l=0;l<3;l++){const c=a.rocks.filter(h=>h.variant===l);this.instanced(Zt(f_(l)),this.occluderMat,c),this.instanced(this.flatDisc(),this.shadowMat,c,h=>[1.1*h,.8*h])}for(let l=0;l<2;l++){const c=a.patches.filter(h=>h.variant%2===l);this.add(Yi(u_(c,l),.006+l*5e-4),this.solidMat)}for(let l=0;l<2;l++){const c=a.bushes.filter(h=>h.variant%2===l);this.instanced(Zt(d_(l)),this.occluderMat,c),this.instanced(this.flatDisc(),this.shadowMat,c,h=>[1.4*h,1*h])}this.instanced(Zt(p_()),this.swayMaterial("solid",.08,.3),a.tufts);for(let l=0;l<3;l++)this.instanced(Zt(m_(l)),this.swayMaterial("solid",.12,.3),a.flowers.filter(c=>c.variant===l));const o=x_.map(([l,c])=>Zt(M_(l,c)));[.18,.5,.83].forEach((l,c)=>{const h=new sn;h.add(new Ft(o[c%o.length],this.occluderMat));const u=new Ft(this.flatDisc(),this.shadowMat);u.scale.set(2.7,1,1.5),h.add(u);const d=new Ft(Zt(__()),this.glowMat),f=new Ft(this.flatDisc(),this.beamMat);f.scale.set(3.6,1,2.4),f.position.x=1.15+1.8;const m=new Ft(this.flatDisc(),this.tailPoolMat);m.scale.set(1.3,1,1.7),m.position.x=-1.75;const _=new Ft(Zt(v_()),this.glowMat);_.visible=!1,h.add(d,f,m,_),this.lamps.push(d,f,m),this.scene.add(h),this.point(h,"ONCOMING TRAFFIC. IT STOPS FOR YOU.");const p=[0,1].map(()=>({kind:"circle",x:0,z:0,r:.6}));this.solids.push(...p);const g={group:h,s:l*Le,speed:0,solids:p,brake:_,waited:0,honked:-1/0};this.cars.push(g),this.moveCar(g,0)});for(const l of this.landmarks){const c=tv(l.zoneId),h=new sn;h.position.set(l.x,0,l.z),h.rotation.y=Math.atan2(l.facing.x,l.facing.z),h.add(new Ft(Zt(c.boxes),this.occluderMat));const u={zoneId:l.zoneId,door:l.door,centre:{x:l.x,z:l.z},wake:this.reduceMotion?1:0,parts:[],screens:[]};for(const f of c.parts??[]){const m=new Ft(Zt(f.boxes),f.glow?Oo():this.occluderMat),[_,p,g]=f.at??[0,0,0];m.position.set(_,p,g),h.add(m),u.parts.push({mesh:m,part:f})}for(const f of c.screens??[]){const m=document.createElement("canvas");m.width=f.cols,m.height=f.rows;const _=new kl(m);_.magFilter=ge,_.minFilter=ge,_.generateMipmaps=!1;const p=new Ft(new $n(f.cols/16,f.rows*Et),new bn({map:_}));p.position.set(...f.at),h.add(p),u.screens.push({screen:f,g:m.getContext("2d"),tex:_,drawnAt:-1/0})}c.floor&&h.add(new Ft(Yi(c.floor,.007),this.solidMat));for(const f of c.shadows??[]){const m=new Ft(this.flatDisc(),this.rectShadowMat);m.scale.set(f.w,1,f.d);const _=this.sun.position,p=(f.lift??0)/_.y,g=-_.x*p,M=-_.z*p,E=Math.cos(l.angle),y=Math.sin(l.angle);m.position.set(f.x+g*E-M*y,0,f.z+g*y+M*E),h.add(m)}for(const f of c.pools??[]){const m=Yn(f.color,.3,{falloff:!0}),_=new Ft(this.flatDisc(),m);_.scale.set(f.rx*2,1,f.rz*2),_.position.set(f.x,0,f.z),h.add(_),this.glowPools.push(m)}this.stations.push(u);const d=l.zoneId;this.pointables.push({obj:h,caption:()=>"A DOOR INTO THE PAGE.",click:()=>this.cb.onOpen(d)}),this.scene.add(h),this.labelAnchors.push({zoneId:l.zoneId,pos:new U(l.x,c.height+.45,l.z)})}}moveCar(t,e){const r=_=>{const p=gn(_);return{x:p.x+p.nx*.75,z:p.z+p.nz*.75,p}},a=r(t.s),o=r(t.s-2.4),l=this.runner,c=!!l&&(Math.hypot(l.x-o.x,l.z-o.z)<1.7||Math.hypot(l.x-a.x,l.z-a.z)<1.6),h=c||this.reduceMotion?0:5;t.brake.visible=!this.reduceMotion&&(c||h<t.speed-.05),t.waited=c&&!this.reduceMotion?t.waited+e:0;const u=performance.now()/1e3;t.waited>1.4&&u-t.honked>4&&(t.honked=u,this.sfxAt("horn",t.solids[0]),this.tellOnce("honk"));const d=h<t.speed?14:3;t.speed=h>t.speed?Math.min(h,t.speed+d*e):Math.max(h,t.speed-d*e),t.s=(t.s-t.speed*e+Le)%Le;const f=r(t.s),m=this.camera?this.snapToPixels(f.x,f.z):f;t.group.position.set(m.x,0,m.z),t.group.rotation.y=Math.atan2(f.p.tz,-f.p.tx),t.solids.forEach((_,p)=>{const g=p===0?.55:-.55;_.x=f.x+f.p.tx*g,_.z=f.z+f.p.tz*g})}swayMaterial(t,e,n){const s=new Dr({vertexColors:!0,gradientMap:this.gradient});t==="occluder"&&this.installSeeThrough(s);const r=s.onBeforeCompile.bind(s),a=this.swayTime,o=this.swayDir;return s.onBeforeCompile=(l,c)=>{r(l,c),l.uniforms.uSwayTime=a,l.uniforms.uSwayDir=o,l.vertexShader=`uniform float uSwayTime;
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
          gl_Position = projectionMatrix * mvPosition;`)},s.customProgramCacheKey=()=>`sway-${t}-${e}-${n}`,this.swayMats.push(s),s}buildRoadside(){const{posts:t,lamps:e}=Jx(iu),n=(l,c)=>{const h=gn(l);return{p:h,x:h.x-h.nx*c,z:h.z-h.nz*c}};for(const l of t){const{x:c,z:h}=n(l.s,Ce.halfWidth+.7),u=this.add(Zt(D_(l.metres,Ci)),this.occluderMat);u.position.set(c,0,h),u.updateMatrix(),this.facers.push(u),this.point(u,`${l.metres} METRES INTO THE LAP.`),this.solids.push({kind:"circle",x:c,z:h,r:.12})}const{pole:s,bulb:r}=N_(),a=Zt(s),o=Zt(r);for(const l of e){const{p:c,x:h,z:u}=n(l,Ce.halfWidth+.9),d=new sn;d.position.set(h,0,u),d.rotation.y=Math.atan2(-c.nz,c.nx);const f=new Ft(o,this.glowMat),m=new Ft(this.flatDisc(),Yn(16769955,.36,{falloff:!0}));m.scale.set(2.6,1,2),m.position.x=1,d.add(new Ft(a,this.occluderMat),f,m),this.scene.add(d),this.point(d,"A STREET LAMP."),this.lamps.push(f,m),this.solids.push({kind:"circle",x:h,z:u,r:.15})}}buildGlints(){for(let t=0;t<70;t++){const e=Wr(Math.random()*Math.PI*2,1.05+Math.random()*.4);this.glintSpots.push({...e,phase:Math.random()})}this.glints=new ts(new pi(1,1,1),new bn({color:16777215}),this.glintSpots.length),this.glints.frustumCulled=!1,this.scene.add(this.glints),this.updateGlints(0)}updateGlints(t){const e=this.glints;if(!e)return;const n=new oe;this.glintSpots.forEach((s,r)=>{const a=this.reduceMotion?r%4===0:(t*.45+s.phase)%1<.12;n.makeScale(a?2/16:0,.01,a?.09:0),n.setPosition(s.x,-.34,s.z),e.setMatrixAt(r,n)}),e.instanceMatrix.needsUpdate=!0}installSeeThrough(t){const e=this.seeThrough;t.onBeforeCompile=n=>{n.uniforms.uSeeThrough=e,n.fragmentShader=`uniform vec4 uSeeThrough;
`+n.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
          {
            vec2 seeD = gl_FragCoord.xy - uSeeThrough.xy;
            if (dot(seeD, seeD) < uSeeThrough.z * uSeeThrough.z && gl_FragCoord.z < uSeeThrough.w - 0.0004) {
              if (mod(floor(gl_FragCoord.x) + floor(gl_FragCoord.y), 2.0) < 0.5) discard;
            }
          }`)},t.customProgramCacheKey=()=>"see-through"}makeCamera(){const t=this.look.yaw*Math.PI/180;this.axes={right:{x:Math.cos(t),z:-Math.sin(t)},up:{x:-Math.sin(t),z:-Math.cos(t)}},this.runnerMesh.rotation.y=t,this.runnerShadow.rotation.y=t,this.swayDir.value.set(this.axes.right.x,this.axes.right.z);for(const e of this.facers)e.rotation.y=t,e.matrixAutoUpdate||e.updateMatrix();return this.life?.setYaw(t),this.look.lens==="ortho"?new Hr(-1,1,1,-1,.1,400):new wn(30,1,1,400)}resize(){const t=Math.max(1,this.host.clientWidth),e=Math.max(1,this.host.clientHeight),n=Math.max(1,Math.floor(e/(this.look.rows*Er[this.zoom]))),s=Math.ceil(t/n/2)*2,r=Math.ceil(e/n/2)*2;this.size={iw:s,ih:r,scale:n,left:Math.floor((t-s*n)/2),top:Math.floor((e-r*n)/2)},this.renderer.setSize(s,r,!1),Object.assign(this.canvas.style,{width:`${s*n}px`,height:`${r*n}px`,left:`${this.size.left}px`,top:`${this.size.top}px`});const a=s/2/yn,o=r/2/yn;this.camera instanceof Hr?Object.assign(this.camera,{left:-a,right:a,top:o,bottom:-o}):(this.camera.fov=2*Math.atan(o/Ga)*180/Math.PI,this.camera.aspect=s/r),this.camera.updateProjectionMatrix(),this.running||this.renderOnce()}placeCamera(){const t=this.look.yaw*Math.PI/180,e=Math.cos(Si)*Ga,n=this.camera;if(n.position.set(this.focus.x+Math.sin(t)*e,Math.sin(Si)*Ga,this.focus.z+Math.cos(t)*e),n.lookAt(this.focus),n.updateMatrixWorld(),this.look.lens!=="ortho")return;const s=new U().setFromMatrixColumn(n.matrixWorld,0),r=new U().setFromMatrixColumn(n.matrixWorld,1),a=new U().setFromMatrixColumn(n.matrixWorld,2),o=n.position,l=d=>Math.round(d*yn)/yn,c=l(o.dot(s)),h=l(o.dot(r)),u=o.dot(a);n.position.copy(s.multiplyScalar(c)).add(r.multiplyScalar(h)).add(a.multiplyScalar(u)),n.updateMatrixWorld()}toScreen(t,e,n){const s=this.tmp.set(t,e,n).project(this.camera),{iw:r,ih:a,scale:o,left:l,top:c}=this.size;return{x:l+Math.round((s.x*.5+.5)*r)*o,y:c+Math.round((1-(s.y*.5+.5))*a)*o}}applySky(t){this.sun.color.setHex(t.sun),this.sun.intensity=t.sunI*Math.PI,this.shade.color.setHex(t.shade),this.shade.intensity=t.shadeI*Math.PI,this.seaMat.color.setHex(t.seaDeep),this.shallowMat.color.setHex(t.sea),this.foamMat.color.setHex(t.foam),this.glints?.material?.color.setHex(t.foam),this.renderer.setClearColor(t.seaDeep),this.runnerMat.color.setHex(t.sprite);const e=new Yt(t.shade).multiplyScalar(.42);this.shadowMat.uniforms.uColor.value.copy(e),this.rectShadowMat.uniforms.uColor.value.copy(e),this.lampsLit=t.lamps;for(const n of this.stations)for(const{mesh:s,part:r}of n.parts)r.duskOnly&&(s.visible=t.lamps);for(const n of this.lamps)n.visible=t.lamps;for(const n of this.glowPools)n.uniforms.uDensity.value=t.lamps?.34:.16;this.life?.setSky(t),this.paintWater(t)}paintWater(t){const e=new Yt(t.sea),n=new Yt(t.foam),s=[e,e.clone().lerp(n,.45),n].map(a=>[a.r*255,a.g*255,a.b*255]),r=this.waterTex.image.data;gv.forEach((a,o)=>r.set([...s[a],255],o*4)),this.waterTex.needsUpdate=!0}isTyping(t){const e=t.target;return!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT"||e.isContentEditable)}onKeyDown(t){if(!this.inputEnabled||this.isTyping(t)||t.metaKey||t.ctrlKey||t.altKey)return;let e=!0;switch(t.code){case"ArrowUp":case"KeyW":this.held.up=!0;break;case"ArrowDown":case"KeyS":this.held.down=!0;break;case"ArrowLeft":case"KeyA":this.held.left=!0;break;case"ArrowRight":case"KeyD":this.held.right=!0;break;case"ShiftLeft":case"ShiftRight":this.held.sprint=!0;break;case"Space":t.repeat||(this.jumpQueued=!0);break;case"KeyZ":t.repeat||this.setZoom((this.zoom+1)%Er.length);break;case"Minus":this.setZoom(Math.min(Er.length-1,this.zoom+1));break;case"Equal":this.setZoom(Math.max(0,this.zoom-1));break;case"KeyR":t.repeat||this.cb.onRespawn();break;default:e=!1}e&&t.preventDefault()}onKeyUp(t){switch(t.code){case"ArrowUp":case"KeyW":this.held.up=!1;break;case"ArrowDown":case"KeyS":this.held.down=!1;break;case"ArrowLeft":case"KeyA":this.held.left=!1;break;case"ArrowRight":case"KeyD":this.held.right=!1;break;case"ShiftLeft":case"ShiftRight":this.held.sprint=!1;break}}releaseKeys(){this.held.up=this.held.down=this.held.left=this.held.right=this.held.sprint=!1,this.jumpQueued=!1,this.drag=null}onBlur(){this.releaseKeys()}onVisibility(){this.hidden=document.visibilityState==="hidden",this.hidden?(this.releaseKeys(),this.stop()):this.wake()}onPointerDown(t){t.button!==0||!this.inputEnabled||(this.drag={x:t.clientX,y:t.clientY},this.pointer={x:t.clientX,y:t.clientY,moved:0})}onPointerMove(t){if(t.target===this.canvas||this.drag?(this.hoverDirty=!0,this.pointer?this.pointer={...this.pointer,x:t.clientX,y:t.clientY}:this.pointer={x:t.clientX,y:t.clientY,moved:0}):this.lastCaption!==null&&(this.pointer=null,this.hoverDirty=!0),!this.drag)return;const e=t.clientX-this.drag.x,n=t.clientY-this.drag.y;if(this.drag={x:t.clientX,y:t.clientY},this.pointer&&(this.pointer.moved+=Math.abs(e)+Math.abs(n)),this.pointer&&this.pointer.moved<5)return;const s=1/(this.size.scale*yn),{right:r,up:a}=this.axes,o=-e*s,l=n*s/Math.sin(Si);this.pan.x+=r.x*o+a.x*l,this.pan.z+=r.z*o+a.z*l;const c=Math.hypot(this.pan.x,this.pan.z);c>24&&this.pan.multiplyScalar(24/c)}onPointerUp(t){const e=!this.drag||!this.pointer||this.pointer.moved>=5;if(this.drag=null,this.pointer&&(this.pointer.moved=0),e||t.target!==this.canvas||!this.inputEnabled)return;if(this.hoverNow(),this.hovered?.click){this.hovered.click();return}const n=this.groundAt(t.clientX,t.clientY);n&&Fo(n.x,n.z)&&(this.goal=n,this.goalMarker.position.set(n.x,0,n.z))}onWheel(t){const e=performance.now();e-this.lastWheel<180||t.deltaY===0||(this.lastWheel=e,this.setZoom(Math.max(0,Math.min(Er.length-1,this.zoom+(t.deltaY>0?1:-1)))))}setZoom(t){if(t!==this.zoom){this.zoom=t;try{localStorage.setItem(qc,String(t))}catch{}this.resize()}}ndc(t,e){const n=this.canvas.getBoundingClientRect();return new At((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1)}groundAt(t,e){this.raycaster.setFromCamera(this.ndc(t,e),this.camera);const n=this.raycaster.ray.intersectPlane(new Kn(new U(0,1,0),0),new U);return n?{x:n.x,z:n.z}:null}hoverNow(){this.hoverDirty=!1,this.hoverAt=performance.now();let t=null;if(this.pointer&&this.inputEnabled){this.raycaster.setFromCamera(this.ndc(this.pointer.x,this.pointer.y),this.camera);const n=this.raycaster.intersectObjects(this.pointables.map(s=>s.obj),!0);for(const s of n){const r=s.object.material;if(r instanceof Cn&&"uDensity"in r.uniforms||!s.object.visible)continue;let a=s.object;for(;a&&!t;)t=this.pointables.find(o=>o.obj===a)??null,a=a.parent;if(t)break}}this.hovered=t;const e=t?t.caption():null;this.canvas.style.cursor=t?.click?"pointer":"",e!==this.lastCaption&&(this.lastCaption=e,this.cb.onHover(e))}onContextLost(t){t.preventDefault(),this.paused=!0,this.stop(),this.cb.onContextLost()}wake(){this.running||this.paused||this.hidden||(this.running=!0,this.last=performance.now(),this.raf=requestAnimationFrame(this.tick))}stop(){this.running=!1,cancelAnimationFrame(this.raf)}updateLap(t){const e=this.runner,n=this.lap.update(t,e.x,e.z,this.inputEnabled),s={running:this.lap.running,time:Math.floor(this.lap.time*10)/10,best:this.lap.best,finished:n},r=`${s.running}|${s.time}|${s.best}`;(n||r!==this.lastLapReport)&&(this.lastLapReport=r,this.cb.onLap(s))}updateGhost(t){const e=this.lap.running?this.lap.ghostAt(this.lap.time):null;if(this.ghostMesh.visible=!!e,!e)return;const n=e.dx*this.axes.right.x+e.dz*this.axes.right.z,s=e.dx*this.axes.up.x+e.dz*this.axes.up.z,r=Math.abs(n)>=Math.abs(s)*.8?n>=0?"right":"left":s>0?"up":"down",o=Math.hypot(e.dx,e.dz)>.02?this.reduceMotion||Math.floor(t/130)%2?"a":"b":"stand",l=Yc[r]*yi.length+yi.indexOf(o);this.ghostTex.offset.set(l/Ur,.5);const c=this.snapToPixels(e.x,e.z);this.ghostMesh.position.set(c.x,0,c.z),this.ghostMesh.scale.x=r==="left"?-1:1,this.ghostMesh.rotation.y=this.runnerMesh.rotation.y}tellOnce(t){this.told.has(t)||(this.told.add(t),this.cb.onEvent({kind:t}))}buildBanana(){const t=Wr(-.62,.935),e=new sn,n=[0,1,2].flatMap(a=>[{x:-.12+a*.09,y:.02,z:-.16,w:.08,h:.08,d:.32,color:16767050},{x:-.12+a*.09,y:.08,z:-.22,w:.08,h:.08,d:.08,color:16767050},{x:-.12+a*.09,y:.08,z:.14,w:.08,h:.08,d:.08,color:16767050}]);n.push({x:-.12,y:.12,z:-.27,w:.26,h:.06,d:.06,color:7031342}),e.add(new Ft(Zt(n),this.occluderMat));const s=new Ft(Zt([{x:.12,y:.22,z:0,w:2/16,h:.1,d:.02,color:16774371}]),this.glowMat);e.add(s);const r=new Ft(this.flatDisc(),this.shadowMat);r.scale.set(.6,1,.4),e.add(r),e.position.set(t.x,0,t.z),this.scene.add(e),this.banana=e,this.point(e,"A BANANA?!")}hideBanana(){this.banana&&(this.banana.visible=!1),this.told.add("banana")}updateBanana(t){const e=this.banana,n=this.runner;!e||!e.visible||!n||(this.reduceMotion||(e.children[0].position.y=Math.floor(t/600)%2?1/16:0,e.children[1].visible=Math.floor(t/250)%8===0),Math.hypot(n.x-e.position.x,n.z-e.position.z)<.75&&(e.visible=!1,this.cb.onSfx("cup"),this.tellOnce("banana")))}setKit(t,e){this.kit={top:t,bottom:e};const n=this.runnerTex.image;Kc(n,this.kit),this.runnerTex.needsUpdate=!0,this.ghostTex.needsUpdate=!0,this.running||this.renderOnce()}sfxAt(t,e){Math.abs(e.x-this.focus.x)<14&&Math.abs(e.z-this.focus.z)<12&&this.cb.onSfx(t)}nearest(){let t=this.landmarks[0],e=1/0;for(const n of this.landmarks){const s=Math.hypot(n.door.x-this.runner.x,n.door.z-this.runner.z);s<e&&(e=s,t=n)}return t}tick(t){if(!this.running)return;const e=Math.min((t-this.last)/1e3,1/30),n=t-this.last;this.last=t;for(const c of this.cars)this.moveCar(c,e);const s={x:(this.held.right?1:0)-(this.held.left?1:0),y:(this.held.up?1:0)-(this.held.down?1:0),sprint:this.held.sprint,jump:!1};if((s.x||s.y||!this.inputEnabled||this.stuck.on)&&(this.goal=null),this.goal){const c=this.goal.x-this.runner.x,h=this.goal.z-this.runner.z,u=Math.hypot(c,h);u<.3?this.goal=null:(s.x=(c*this.axes.right.x+h*this.axes.right.z)/u,s.y=(c*this.axes.up.x+h*this.axes.up.z)/u)}if(this.goalMarker.visible=!!this.goal,this.goal){const c=this.reduceMotion||Math.floor(t/300)%2?.9:.7;this.goalMarker.scale.set(c,1,c*.75)}for(this.hoverDirty&&t-this.hoverAt>60&&this.hoverNow(),this.acc+=e,this.jumped=this.landed=!1;this.acc>=Va;){s.jump=this.jumpQueued,this.jumpQueued=!1;const c=this.runner.airborne;this.runner=r_(this.runner,s,Va,this.axes,this.solids,Fo),this.runner.airborne&&!c&&(this.jumped=!0,this.cb.onJump()),!this.runner.airborne&&c&&(this.landed=!0),this.acc-=Va}const r=this.runner;r.moving&&!this.moved&&(this.moved=!0,this.cb.onMoved()),this.updateStuck(e,r.moving),this.updateLap(e),r.moving&&this.pan.multiplyScalar(Math.exp(-e*6));const a=r.x+this.pan.x+this.axes.up.x*br,o=r.z+this.pan.z+this.axes.up.z*br,l=1-Math.exp(-e*8);if(this.focus.x+=(a-this.focus.x)*l,this.focus.z+=(o-this.focus.z)*l,this.focus.x=Math.max(-mn,Math.min(mn,this.focus.x)),this.focus.z=Math.max(-rn,Math.min(rn,this.focus.z)),this.placeCamera(),this.animate(e,t),this.cycle){const c=(t-this.cycle.start)/this.cycleMs;this.applySky(nv(this.cycle.kind,c,this.cycleMid))}this.render(),this.report(e,n,t),this.raf=requestAnimationFrame(this.tick)}updateStuck(t,e){const n=this.stuck,s=this.runner;if(!e){n.timer=0,n.origin={x:s.x,z:s.z},n.on&&(n.on=!1,this.cb.onStuck(!1));return}n.timer+=t,Math.hypot(s.x-n.origin.x,s.z-n.origin.z)>.6?(n.timer=0,n.origin={x:s.x,z:s.z},n.on&&(n.on=!1,this.cb.onStuck(!1))):n.timer>1.6&&!n.on&&(n.on=!0,this.cb.onStuck(!0))}animate(t,e){const n=this.runner,s=Math.hypot(n.vx,n.vz);this.animClock+=t,(n.moving||n.airborne||s>.4)&&(this.stillSince=e);const r=(e-this.stillSince)/1e3;let a=r>4&&(r-4)%7<1.8?"watch":"stand";if(a==="watch"&&this.tellOnce("watch"),n.airborne)a="jump";else if(s>.4)if(this.reduceMotion)a="a";else{const f=n.sprinting?.11:.15;a=Math.floor(this.animClock/f)%2===0?"a":"b"}const o=Yc[n.facing]*yi.length+yi.indexOf(a);this.runnerTex.offset.set(o/Ur,this.lampsLit?0:.5);const l=Math.floor(this.animClock/(n.sprinting?.11:.15));l!==this.stridePhase&&(this.stridePhase=l,!n.airborne&&s>.4&&t>0&&this.cb.onStep(Xr(n.x,n.z,-.25)?"wood":Ir(n.x,n.z)));const c=Math.round(n.h*Math.cos(Si)*yn)/(Math.cos(Si)*yn),h=this.snapToPixels(n.x,n.z);this.runnerMesh.position.set(h.x,c,h.z),this.runnerMesh.scale.x=n.facing==="left"?-1:1;const u=1-Math.min(n.h/1.5,.4);this.runnerShadow.position.set(h.x,0,h.z),this.runnerShadow.scale.set(.95*u,1,.5*u),this.lampPool.visible=this.lampsLit;const d=mv[n.facing]+this.look.yaw*Math.PI/180;if(this.lampPool.position.set(h.x+Math.cos(d)*1.75,0,h.z-Math.sin(d)*1.75),this.lampPool.rotation.y=d,this.stirStations(t,e,!1),this.life?.update({dt:t,t:e/1e3,runner:n,jumped:this.jumped,landed:this.landed,lit:this.lampsLit,focus:{x:this.focus.x,z:this.focus.z}}),this.jumped=this.landed=!1,this.updateGhost(e),this.questRoad&&n){const{year:f,rising:m}=this.questRoad.update(e/1e3,n.x,n.z);for(const _ of m)if(this.sfxAt("stone",_),!this.reduceMotion)for(let p=0;p<8;p++){const g=p/8*Math.PI*2;this.life?.particles.spawn({x:_.x+Math.cos(g)*.5,y:.05,z:_.z+Math.sin(g)*.3,vx:Math.cos(g)*1.2,vy:1,vz:Math.sin(g)*.6,max:.6,size:.125,gravity:2,color:13220239})}f!==this.lastYear&&(this.lastYear=f,this.cb.onYear(f)),m.length&&this.questRoad.allRisen()&&this.tellOnce("stones")}n&&n.z>Je.z1-1&&Math.abs(n.x-Je.x)<Je.halfWidth&&this.tellOnce("pier"),this.updateBanana(e),!this.reduceMotion&&(this.waterTex.offset.y=-Math.floor(e/85)/$e,this.swayTime.value=e/1e3,this.wash&&(this.wash.visible=Math.floor(e/850)%3===0),this.boat&&(this.boat.position.y=-.42+(Math.floor(e/760)%2?1/16:0)),this.updateGlints(e/1e3))}stirStations(t,e,n){const s=this.runner,r=this.reduceMotion?0:e/1e3,a=(e-this.openedAt)/1e3;for(const o of this.stations){if(!this.reduceMotion&&s){const u=Math.hypot(o.door.x-s.x,o.door.z-s.z)<pv?1:0,d=t*1.6;o.wake=u>o.wake?Math.min(u,o.wake+d):Math.max(u,o.wake-d)}const l=Math.abs(o.centre.x-this.focus.x)<18&&Math.abs(o.centre.z-this.focus.z)<16;if(!n&&!l)continue;const c=o.zoneId==="skills"&&this.life?this.life.sinceCup(e/1e3):1/0,h={t:r,wake:o.wake,lit:this.lampsLit,elapsed:a,still:this.reduceMotion,since:c,lap:this.lap.running?this.lap.time:null,best:this.lap.best};if(n||!this.reduceMotion)for(const{mesh:u,part:d}of o.parts)d.duskOnly&&(u.visible=this.lampsLit),d.animate?.(u,h);for(const u of o.screens)!n&&e-u.drawnAt<1e3/u.screen.fps||(u.drawnAt=e,u.screen.draw(u.g,h),u.tex.needsUpdate=!0)}}snapToPixels(t,e){if(this.look.lens!=="ortho")return{x:t,z:e};const n=this.camera,s=new U().setFromMatrixColumn(n.matrixWorld,0),r=new U().setFromMatrixColumn(n.matrixWorld,1),a=new U(t,0,e),o=a.dot(s),l=a.dot(r),c=Math.round(o*yn)/yn-o,h=Math.round(l*yn)/yn-l,u=this.axes.up,d=h/Math.sin(Si);return{x:t+s.x*c+u.x*d,z:e+s.z*c+u.z*d}}render(){const t=this.runner,e=this.tmp.set(this.runnerMesh.position.x,.6+t.h,this.runnerMesh.position.z).project(this.camera),{iw:n,ih:s}=this.size;this.seeThrough.value.set((e.x*.5+.5)*n,(e.y*.5+.5)*s,Xc,e.z*.5+.5),this.renderer.render(this.scene,this.camera)}renderOnce(){this.placeCamera(),this.animate(0,performance.now()),this.render(),this.report(0,0,performance.now())}report(t,e,n){const s=this.nearest(),r=this.runner,o=(s?Math.hypot(s.door.x-r.x,s.door.z-r.z):1/0)<Hx&&!r.airborne?s.zoneId:null;o!==this.lastPrompt&&(this.lastPrompt=o,this.cb.onPrompt(o)),s&&s.zoneId!==this.lastNearest&&(this.lastNearest=s.zoneId,this.cb.onNearest(s.zoneId));const l=Math.hypot(r.vx,r.vz);this.paceSpeed+=(l-this.paceSpeed)*Math.min(1,t*5);const c=r.moving?a_(this.paceSpeed):null;c!==this.lastPace&&(this.lastPace=c,this.cb.onPace(c));const h=this.labelAnchors.map(({zoneId:d,pos:f})=>{const m=this.toScreen(f.x,f.y,f.z),_=m.x>0&&m.y>0&&m.x<this.host.clientWidth&&m.y<this.host.clientHeight;return{zoneId:d,x:m.x,y:m.y,onScreen:_}});this.cb.onFrame({labels:h,runner:this.runnerOnScreen(),world:{x:r.x,z:r.z}});const u=Xr(r.x,r.z)?1:Math.max(0,Math.min(1,(fi(r.x,r.z)-.62)/.33));Math.abs(u-this.lastWaves)>.04&&(this.lastWaves=u,this.cb.onAmbience(u)),e>0&&(this.frameTimes.push(e),this.frameTimes.length>120&&this.frameTimes.shift(),n-this.frameTimeAt>500&&(this.frameTimeAt=n,this.cb.onFrameTime(this.frameTimes.reduce((d,f)=>d+f,0)/this.frameTimes.length)))}}const qr=[{id:"first-steps",name:"FIRST STEPS",hint:"Take your first stride on the island."},{id:"sightseer",name:"SIGHTSEER",hint:"Stand at every Landmark's door.",needs:Fr.length},{id:"door",name:"THROUGH THE DOOR",hint:"Open a Landmark."},{id:"travel",name:"FAST TRAVEL",hint:"Jump to a Landmark from the map."},{id:"finisher",name:"FINISHER",hint:"Run a full Lap."},{id:"negative-split",name:"NEGATIVE SPLIT",hint:"Beat your best Lap."},{id:"sub-60",name:"SUB-60",hint:"Run a Lap in under a minute."},{id:"hydrated",name:"HYDRATED",hint:"Grab a cup at the aid station on the run."},{id:"herd",name:"HERD WHISPERER",hint:"Get a moo out of every cow.",needs:5},{id:"birds",name:"BIRDWATCHER",hint:"Send a flock into the air."},{id:"crab",name:"SIDESTEP",hint:"Spook a crab into the sand."},{id:"pier",name:"END OF THE PIER",hint:"Run to the end of the pier."},{id:"historian",name:"HISTORIAN",hint:"Raise every stone on the Quest Road."},{id:"skies",name:"DUSK TO DAWN",hint:"Run the island under both skies.",needs:2},{id:"honk",name:"ROAD SENSE",hint:"Get honked at. Then move."},{id:"watch",name:"SPLIT CHECK",hint:"Stand still long enough to check your watch."},{id:"banana",name:"BANANA",hint:"Somewhere on the island.",secret:!0,cheer:"Yep, that's my banana."}],$i=[{id:"race",name:"RACE KIT",needs:0,top:"#FF9A4A",bottom:"#7EC8E8"},{id:"dawn",name:"DAWN KIT",needs:4,top:"#7EC8E8",bottom:"#FFF4E3"},{id:"sunset",name:"SUNSET KIT",needs:8,top:"#C2366B",bottom:"#FFC94D"},{id:"night",name:"NIGHT KIT",needs:12,top:"#6E55A8",bottom:"#7EC8E8"},{id:"gold",name:"GOLD KIT",needs:qr.length,top:"#FFC94D",bottom:"#FFF4E3"}],Zc="roam-medals";class _v{data={earned:{},sets:{},kit:"race"};constructor(){try{const t=localStorage.getItem(Zc);if(!t)return;const e=JSON.parse(t),n=new Set(qr.map(s=>s.id));for(const[s,r]of Object.entries(e.earned??{}))n.has(s)&&typeof r=="number"&&(this.data.earned[s]=r);for(const[s,r]of Object.entries(e.sets??{}))n.has(s)&&Array.isArray(r)&&(this.data.sets[s]=r.filter(a=>typeof a=="string"));$i.some(s=>s.id===e.kit)&&(this.data.kit=e.kit),this.unlocked(this.data.kit)||(this.data.kit="race")}catch{}}has(t){return this.data.earned[t]!==void 0}count(){return Object.keys(this.data.earned).length}progress(t){return this.data.sets[t]?.length??0}record(t,e){const n=qr.find(a=>a.id===t);if(!n||this.has(t))return null;if(n.needs){const a=new Set(this.data.sets[t]??[]);if(e===void 0||a.has(e))return null;if(a.add(e),this.data.sets[t]=[...a],a.size<n.needs)return this.save(),null}const s=this.count();this.data.earned[t]=Date.now(),this.save();const r=$i.filter(a=>a.needs>s&&a.needs<=s+1);return{medal:n,kits:r}}unlocked(t){const e=$i.find(n=>n.id===t);return!!e&&this.count()>=e.needs}kit(){return $i.find(t=>t.id===this.data.kit)??$i[0]}setKit(t){this.unlocked(t)&&(this.data.kit=t,this.save())}save(){try{localStorage.setItem(Zc,JSON.stringify(this.data))}catch{}}}const Yr=6,Ei=mn*2+Yr*2,es=rn*2+Yr*2,Zn=i=>({x:i.x+mn+Yr,y:i.z+rn+Yr});function ou(i){const t=i.getContext("2d");if(!t)return;t.imageSmoothingEnabled=!1,t.fillStyle="#3E2A73",t.fillRect(0,0,Ei,es);const e=(c,h)=>{t.fillStyle=h,t.beginPath(),c.forEach((u,d)=>{const f=Zn(u);d===0?t.moveTo(f.x,f.y):t.lineTo(f.x,f.y)}),t.closePath(),t.fill()};e(fn(1.14),"#55408F"),e(fn(1),"#E8D2A2"),e(fn(dn),"#6E9A55");const n=[];for(let c=0;c<32;c++){const h=c/32*Math.PI*2;n.push({x:$t.x+Math.cos(h)*$t.rx,z:$t.z+Math.sin(h)*$t.rz})}e(n,"#7EC8E8");const s=Zn({x:ne.x-ne.baseHalfX,z:ne.z-ne.baseHalfZ});t.fillStyle="#4F6852",t.fillRect(s.x,s.y,ne.baseHalfX*2,ne.baseHalfZ*2),t.fillStyle="#6F6A80",t.fillRect(s.x+10,s.y+4,ne.baseHalfX*2-26,ne.baseHalfZ*2-8);const r=Zn({x:En.x,z:ne.z-2});t.fillStyle="#A8D4E8",t.fillRect(Math.round(r.x)-1,Math.round(r.y),2,Math.round(ne.baseHalfZ+2));const a=[];for(let c=0;c<20;c++){const h=c/20*Math.PI*2;a.push({x:Ze.x+Math.cos(h)*Ze.rx,z:Ze.z+Math.sin(h)*Ze.rz})}e(a,"#7EC8E8");const o=Zn({x:Je.x-Je.halfWidth,z:Je.z0});t.fillStyle="#9C7452",t.fillRect(Math.round(o.x),Math.round(o.y),2,Math.round(Je.z1-Je.z0));const l=Zn({x:De.minX,z:De.minZ});t.fillStyle="#82AD62",t.fillRect(l.x,l.y,De.maxX-De.minX,De.maxZ-De.minZ),t.fillStyle="#4E4A5E";for(let c=0;c<Le;c+=.5){const h=Zn(gn(c));t.fillRect(Math.round(h.x)-1,Math.round(h.y)-1,3,3)}}function vv({landmarks:i,dotRef:t,onOpen:e}){const n=vt.useRef(null);return vt.useEffect(()=>{const s=n.current;if(!s)return;ou(s);const r=s.getContext("2d");if(r){r.fillStyle="#FFC94D";for(const a of i){const o=Zn({x:a.x,z:a.z});r.fillRect(Math.round(o.x)-2,Math.round(o.y)-2,4,4)}}},[i]),K.jsx("button",{onClick:e,"aria-label":"Open the map",className:"hidden md:block fixed left-6 bottom-6 z-[65] pixel-border bg-dusk-950/90 mx-1 p-1.5 focus-ring",children:K.jsxs("span",{className:"relative block",style:{width:Ei,height:es},children:[K.jsx("canvas",{ref:n,width:Ei,height:es,className:"crisp block","aria-hidden":"true"}),K.jsx("span",{ref:t,"aria-hidden":"true",className:"absolute w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 bg-sunset-500 animate-blink"})]})})}function Mv({landmarks:i,runner:t,onTravel:e,onClose:n}){const s=vt.useRef(null),r=vt.useRef(null);vt.useEffect(()=>{s.current&&ou(s.current),r.current?.focus()},[]);const a=Fr.filter(l=>i.some(c=>c.zoneId===l.id)),o=Zn(t);return K.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-dusk-950/70 px-4",onClick:n,children:K.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"roam-map-title",className:"pixel-border bg-dusk-900 mx-1 p-4 md:p-6 flex flex-col md:flex-row gap-5 md:gap-8 max-h-full overflow-auto",onClick:l=>l.stopPropagation(),children:[K.jsxs("div",{className:"relative shrink-0 self-center",style:{width:Ei*2,maxWidth:"100%"},children:[K.jsx("canvas",{ref:s,width:Ei,height:es,className:"crisp block w-full h-auto","aria-hidden":"true"}),a.map((l,c)=>{const h=i.find(d=>d.zoneId===l.id),u=Zn({x:h.x,z:h.z});return K.jsx("button",{tabIndex:-1,"aria-hidden":"true",onClick:()=>e(l.id),title:l.zoneName,className:"absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gold-400 hover:bg-gold-300 text-dusk-950 font-arcade text-[9px] flex items-center justify-center",style:{left:`${u.x/Ei*100}%`,top:`${u.y/es*100}%`},children:c+1},l.id)}),K.jsx("span",{"aria-hidden":"true",className:"absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-sunset-500 animate-blink",style:{left:`${o.x/Ei*100}%`,top:`${o.y/es*100}%`}})]}),K.jsxs("div",{className:"min-w-[14rem]",children:[K.jsx("h2",{id:"roam-map-title",className:"font-arcade text-[11px] text-gold-400",children:"MAP"}),K.jsx("p",{className:"mt-3 font-body text-sm text-mist-300",children:"Fast travel to a Landmark."}),K.jsx("ol",{className:"mt-4 space-y-2",children:a.map((l,c)=>K.jsx("li",{children:K.jsxs("button",{ref:c===0?r:void 0,onClick:()=>e(l.id),className:"group w-full text-left font-arcade text-[9px] md:text-[10px] text-cream-100 hover:text-gold-300 focus-ring py-1",children:[K.jsx("span",{className:"text-gold-400",children:c+1})," ",K.jsx("span",{className:"opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",children:"▸"})," ",l.zoneName]})},l.id))}),K.jsxs("p",{className:"mt-5 font-arcade text-[8px] text-mist-300",children:[K.jsx("span",{className:"inline-block w-2 h-2 bg-sunset-500 mr-2","aria-hidden":"true"}),"YOU · M OR ESC TO CLOSE"]}),K.jsx("button",{onClick:n,className:"mt-4 font-arcade text-[9px] text-gold-400 hover:text-gold-300 focus-ring",children:"▸ CLOSE MAP"})]})]})})}const Sv=[["WASD / ARROWS","Run"],["SHIFT","Sprint"],["SPACE","Jump"],["ENTER / E","Open a Landmark"],["CLICK","Run there, or open what you click"],["M","Map"],["Z / WHEEL","Zoom out and in"],["R","Back to the nearest Landmark"],["DRAG","Look around"],["ESC","Menu"]],Jc={yaw:[[0,"STRAIGHT"],[45,"45°"]],lens:[["ortho","FLAT"],["perspective","DEPTH"]],rows:[[180,"320×180"],[270,"480×270"]],tones:[[2,"TWO"],[3,"THREE"]]},yv={yaw:"ANGLE",lens:"LENS",rows:"PIXELS",tones:"TONES"};function Ev({muted:i,sky:t,look:e,showLook:n,frameMs:s,onResume:r,onToggleSound:a,onToggleSky:o,onLook:l,onExit:c,medals:h,medalCount:u,kits:d,kit:f,onKit:m}){const _=vt.useRef(null);vt.useEffect(()=>_.current?.focus(),[]);const p="group block w-full text-left font-arcade text-[10px] md:text-[11px] text-cream-100 hover:text-gold-300 focus-ring py-1.5",g=K.jsx("span",{className:"opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100",children:"▸ "});return K.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-dusk-950/70 px-4",onClick:r,children:K.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"roam-menu-title",className:"pixel-border bg-dusk-900 mx-1 p-6 md:p-8 w-full max-w-lg max-h-full overflow-auto",onClick:M=>M.stopPropagation(),children:[K.jsx("h2",{id:"roam-menu-title",className:"font-pixel font-bold text-3xl text-cream-100",children:"PAUSED"}),K.jsxs("div",{className:"mt-5 space-y-1",children:[K.jsxs("button",{ref:_,onClick:r,className:p,children:[g,"RESUME"]}),K.jsxs("button",{onClick:a,className:p,children:[g,"SOUND: ",i?"OFF":"ON"]}),K.jsxs("button",{onClick:o,className:p,children:[g,"SKY: ",t==="dusk"?"DUSK":"DAWN"]}),K.jsxs("button",{onClick:c,className:p,children:[g,"EXIT THE OVERWORLD"]})]}),n&&K.jsxs(K.Fragment,{children:[K.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"LOOK (PROTOTYPE)"}),K.jsxs("div",{className:"mt-3 space-y-2",children:[Object.keys(Jc).map(M=>K.jsxs("div",{className:"flex items-center gap-3",children:[K.jsx("span",{className:"w-16 font-arcade text-[8px] text-mist-300",children:yv[M]}),Jc[M].map(([E,y])=>K.jsx("button",{"aria-pressed":e[M]===E,onClick:()=>l({...e,[M]:E}),className:`font-arcade text-[8px] px-2 py-1 focus-ring ${e[M]===E?"bg-gold-400 text-dusk-950":"bg-dusk-800 text-cream-100"}`,children:y},String(E)))]},M)),K.jsxs("p",{className:"font-arcade text-[8px] text-mist-300",children:["FRAME ",s?s.toFixed(1):"--"," MS"]})]})]}),K.jsxs("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:["MEDALS"," ",K.jsxs("span",{className:"text-mist-300",children:[u,"/",h.length]})]}),K.jsx("ul",{className:"mt-3 grid sm:grid-cols-2 gap-x-4 gap-y-2",children:h.map(M=>{const E=M.secret&&!M.earned;return K.jsxs("li",{className:"flex items-start gap-2",children:[K.jsx("span",{"aria-hidden":"true",className:`mt-0.5 inline-block w-3 h-3 shrink-0 ${M.earned?"bg-gold-400":"bg-dusk-700"}`}),K.jsxs("span",{className:"min-w-0",children:[K.jsxs("span",{className:`block font-arcade text-[8px] ${M.earned?"text-cream-100":"text-mist-300"}`,children:[E?"???":M.name,K.jsx("span",{className:"sr-only",children:M.earned?" (earned)":" (not yet)"})]}),K.jsxs("span",{className:"block font-body text-xs text-mist-300",children:[E?"A secret.":M.earned&&M.cheer?M.cheer:M.hint,!M.earned&&M.needs?` ${M.progress}/${M.needs}`:""]})]})]},M.id)})}),K.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"KIT"}),K.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:d.map(M=>K.jsxs("button",{disabled:!M.unlocked,"aria-pressed":f===M.id,onClick:()=>m(M.id),className:`flex items-center gap-2 font-arcade text-[8px] px-2 py-1.5 focus-ring disabled:opacity-50 ${f===M.id?"bg-gold-400 text-dusk-950":"bg-dusk-800 text-cream-100 hover:text-gold-300"}`,children:[K.jsxs("span",{"aria-hidden":"true",className:"inline-flex",children:[K.jsx("span",{className:"inline-block w-2 h-2",style:{background:M.top}}),K.jsx("span",{className:"inline-block w-2 h-2",style:{background:M.bottom}})]}),M.unlocked?M.name:`${M.name} · ${M.needs} MEDALS`]},M.id))}),K.jsx("h3",{className:"mt-7 font-arcade text-[9px] text-gold-400",children:"CONTROLS"}),K.jsx("table",{className:"mt-3 w-full font-body text-sm",children:K.jsx("tbody",{children:Sv.map(([M,E])=>K.jsxs("tr",{children:[K.jsx("td",{className:"py-1 pr-4 font-arcade text-[8px] text-gold-300 whitespace-nowrap",children:M}),K.jsx("td",{className:"py-1 text-mist-300",children:E})]},M))})})]})})}const lu="roam-look",cu=new URLSearchParams(window.location.search).has("look");function bv(){if(!cu)return Ha;try{const i=localStorage.getItem(lu);if(!i)return Ha;const t=JSON.parse(i);return{yaw:t.yaw===45?45:0,lens:t.lens==="perspective"?"perspective":"ortho",rows:t.rows===270?270:180,tones:t.tones===3?3:2}}catch{return Ha}}const Ms=()=>new Promise(i=>requestAnimationFrame(()=>i())),wv=mn+6,Tv=rn+6,wr={left:30,right:30,top:100,bottom:88};function Av(i,t,e,n){const s=e/2,r=n/2,a=i-s,o=t-r,l=a>0?(e-wr.right-s)/a:a<0?(wr.left-s)/a:1/0,c=o>0?(n-wr.bottom-r)/o:o<0?(wr.top-r)/o:1/0,h=Math.min(l,c),u=Math.round(Math.atan2(o,a)*180/Math.PI/45)*45;return{x:Math.round(s+a*h),y:Math.round(r+o*h),angle:u}}function Rv(i){const t=vt.useRef(null),e=vt.useRef(0),n=vt.useCallback((h,u,d)=>{const f=t.current;if(!f)return;f.style.display="block";const m=d===null?"none":`radial-gradient(circle at ${h}px ${u}px, transparent ${d}px, #000 ${d+1}px)`;f.style.maskImage=m,f.style.setProperty("-webkit-mask-image",m)},[]),s=vt.useCallback(()=>{t.current&&(t.current.style.display="none")},[]),r=vt.useCallback((h,u,d,f,m)=>new Promise(_=>{cancelAnimationFrame(e.current);const p=performance.now(),g=M=>{const E=Math.min(1,(M-p)/m);n(d,f,Math.round((h+(u-h)*E)/12)*12),E<1?e.current=requestAnimationFrame(g):_()};e.current=requestAnimationFrame(g)}),[n]),a=(h,u)=>Math.hypot(Math.max(h,window.innerWidth-h),Math.max(u,window.innerHeight-u))+12,o=vt.useCallback(async(h,u)=>{i||await r(a(h,u),0,h,u,380),n(0,0,null)},[i,r,n]),l=vt.useCallback(async(h,u)=>{i||await r(0,a(h,u),h,u,440),s()},[i,r,s]),c=vt.useCallback(()=>n(0,0,null),[n]);return vt.useEffect(()=>()=>cancelAnimationFrame(e.current),[]),vt.useMemo(()=>({ref:t,close:o,open:l,cover:c}),[o,l,c])}const Cv=i=>{const t=i.target;return!!t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.tagName==="SELECT"||t.isContentEditable)};function Lv(){const i=Uu(),{view:t,doorZone:e,arrival:n,startedByGesture:s,setCovering:r,reportNearest:a}=i,{theme:o,cycle:l,toggle:c}=Fu(),{muted:h,toggleMuted:u,playSfx:d,playStep:f,setAmbience:m,setMode:_}=Ou(),[p]=vt.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches),[g]=vt.useState(()=>new URLSearchParams(window.location.search).has("look")),M=vt.useRef(null),E=vt.useRef(null),y=Rv(p),C=vt.useRef(new Map),[R,x]=vt.useState(!1),[b,B]=vt.useState("loading"),[N,F]=vt.useState(null),[H,Z]=vt.useState(null),[D,q]=vt.useState("title"),[j,V]=vt.useState(null),[ot,X]=vt.useState(!1),[et,rt]=vt.useState(!1),[bt,Nt]=vt.useState("none"),[Q,Mt]=vt.useState(0),[wt,Ut]=vt.useState(null),[_t,Gt]=vt.useState(null),[ve,Ot]=vt.useState(null),ie=vt.useRef(0),se=vt.useRef(null);se.current||(se.current=new _v);const kt=se.current,[xe,Ee]=vt.useState([]),[ze,fe]=vt.useState(()=>kt.count()),[on,Te]=vt.useState(()=>kt.kit().id),Xe=vt.useRef(0),qe=vt.useRef(null),be=vt.useRef(()=>{});be.current=(nt,st)=>{const it=kt.record(nt,st);if(!it)return;d("medal"),fe(kt.count());const Jt=[{key:++Xe.current,title:`MEDAL · ${it.medal.name}`,line:it.medal.cheer??it.medal.hint}];for(const pe of it.kits)Jt.push({key:++Xe.current,title:`${pe.name} UNLOCKED`,line:"Wear it from the menu."});Ee(pe=>[...pe,...Jt])};const I=vt.useCallback((nt,st)=>be.current(nt,st),[]);vt.useEffect(()=>{if(xe.length===0)return;const nt=window.setTimeout(()=>Ee(st=>st.slice(1)),3400);return()=>window.clearTimeout(nt)},[xe]);const[Pe,ue]=vt.useState(bv),Xt=vt.useRef({roam:i,panel:bt,playSfx:d,playStep:f,setAmbience:m,view:t,theme:o,openDoor:(nt=>{})});Xt.current={...Xt.current,roam:i,panel:bt,playSfx:d,playStep:f,setAmbience:m,view:t,theme:o};const mt=vt.useRef(null),we=vt.useRef(null),It=vt.useRef(0),Bt=vt.useRef(Promise.resolve()),T=vt.useRef(!1),v=vt.useCallback(nt=>{Bt.current=Bt.current.then(async()=>{T.current=!0;try{await nt()}finally{T.current=!1}})},[]),O=vt.useRef(()=>{}),at=vt.useRef(Pe);at.current=Pe;const tt=vt.useRef(o);tt.current=o,vt.useEffect(()=>{const nt=M.current;if(!nt)return;const st={onPrompt:zt=>{Z(zt),zt&&(Xt.current.playSfx("prompt"),be.current("sightseer",zt))},onNearest:zt=>{q(zt),a(zt)},onPace:V,onStuck:X,onRespawn:()=>O.current(),onMoved:()=>{rt(!0),be.current("first-steps")},onJump:()=>Xt.current.playSfx("jump"),onSfx:zt=>Xt.current.playSfx(zt),onLap:zt=>{if(Ut(zt.running||zt.best!==null?zt:null),zt.finished){const me=zt.finished;Xt.current.playSfx(me.newBest?"best":"lap"),Gt(me),window.clearTimeout(ie.current),ie.current=window.setTimeout(()=>Gt(null),3600),be.current("finisher"),me.newBest&&qe.current!==null&&be.current("negative-split"),me.time<60&&be.current("sub-60")}qe.current=zt.best},onYear:Ot,onEvent:zt=>{const me=be.current;zt.kind==="moo"?me("herd",String(zt.cow)):zt.kind==="birds"?me("birds"):zt.kind==="crab"?me("crab"):zt.kind==="cup"?me("hydrated"):zt.kind==="pier"?me("pier"):zt.kind==="stones"?me("historian"):zt.kind==="honk"?me("honk"):zt.kind==="watch"?me("watch"):zt.kind==="banana"&&me("banana")},onFrame:zt=>{const me=we.current;me&&(me.style.left=`${(zt.world.x/(2*wv)+.5)*100}%`,me.style.top=`${(zt.world.z/(2*Tv)+.5)*100}%`);const hs=window.innerWidth,ta=window.innerHeight;for(const zn of zt.labels){const Pn=C.current.get(zn.zoneId);if(Pn)if(Pn.style.visibility="visible",zn.onScreen)Pn.dataset.pin="false",Pn.style.transform=`translate(${zn.x}px, ${zn.y}px) translate(-50%, -100%)`;else{const xn=Av(zn.x,zn.y,hs,ta);Pn.dataset.pin="true",Pn.style.setProperty("--pin-angle",`${xn.angle}deg`),Pn.style.transform=`translate(${xn.x}px, ${xn.y}px) translate(-50%, -50%)`}}},onFrameTime:Mt,onContextLost:()=>F("The graphics device stopped responding."),onStep:zt=>Xt.current.playStep(zt),onAmbience:zt=>{It.current=zt,Xt.current.setAmbience({waves:zt,dusk:Xt.current.theme==="dusk"})},onHover:zt=>{const me=mt.current;me&&(me.textContent=zt??"",me.style.display=zt?"block":"none")},onOpen:zt=>Xt.current.openDoor(zt)};let it;try{it=new xv(nt,{zoneIds:Fr.map(zt=>zt.id),look:at.current,reduceMotion:p,sky:tt.current},st)}catch{F("This browser couldn't start WebGL2.");return}E.current=it,it.setInputEnabled(!1);const Jt=se.current?.kit();Jt&&it.setKit(Jt.top,Jt.bottom),se.current?.has("banana")&&it.hideBanana(),x(!0);const pe=window;return new URLSearchParams(window.location.search).has("look")&&(pe.__overworld=it),()=>{it.dispose(),E.current=null,delete pe.__overworld,window.clearTimeout(ie.current)}},[]),vt.useEffect(()=>{R&&B(s?"live":"start")},[R]),vt.useEffect(()=>{E.current?.setSky(o,l,zu,Bu)},[o,l,R]);const ct=b==="live"&&!N&&t==="overworld";vt.useEffect(()=>{if(ct)return _("roam"),()=>_("browse")},[ct,_]),vt.useEffect(()=>{if(ct)return m({waves:It.current,dusk:o==="dusk"}),()=>m(null)},[ct,o,m]),vt.useEffect(()=>{!ct&&mt.current&&(mt.current.style.display="none")}),vt.useEffect(()=>{const nt=st=>{const it=mt.current;it&&(it.style.transform=`translate(${st.clientX+14}px, ${st.clientY+16}px)`)};return window.addEventListener("pointermove",nt),()=>window.removeEventListener("pointermove",nt)},[]),vt.useEffect(()=>{et&&b==="live"&&t==="overworld"&&I("skies",o)},[et,b,t,o,I]),vt.useEffect(()=>{if(E.current?.setLook(Pe),!!cu)try{localStorage.setItem(lu,JSON.stringify(Pe))}catch{}},[Pe]);const dt=vt.useRef("none"),Y=vt.useRef(!1),J=vt.useCallback(async()=>{const nt=E.current;if(!nt)return;dt.current==="door"?await y.close(window.innerWidth/2,window.innerHeight/2):y.cover(),r(!0);const{arrivalZone:st}=Xt.current.roam;nt.placeAt(st,dt.current==="none"&&st==="title"?"right":"down"),M.current&&(M.current.style.visibility="visible"),nt.resume(),dt.current="overworld",await Ms(),await Ms();const it=nt.runnerOnScreen();await y.open(it.x,it.y),nt.setInputEnabled(Xt.current.panel==="none")},[y,r]),ft=vt.useCallback(async nt=>{const st=E.current;if(st){if(dt.current==="overworld"&&!Y.current){const it=st.runnerOnScreen();await y.close(it.x,it.y)}else y.cover();Y.current=!1,st.pause(),Nt("none"),M.current&&(M.current.style.visibility="hidden"),ku(nt),dt.current="door",await Ms(),await y.open(window.innerWidth/2,window.innerHeight/2)}},[y]),P=vt.useRef(""),$=vt.useRef(-1);vt.useEffect(()=>{!R||b!=="live"||(t==="overworld"&&(P.current!=="overworld"||n!==$.current)?v(J):t==="door"&&P.current!=="door"&&e&&v(()=>ft(e)),P.current=t,$.current=n)},[t,n,e,R,b,v,J,ft]);const W=vt.useCallback(nt=>{T.current||Xt.current.view!=="overworld"||v(async()=>{const st=E.current;if(!st)return;st.setInputEnabled(!1),Xt.current.playSfx("door");const it=st.runnerOnScreen();await y.close(it.x,it.y),Y.current=!0,be.current("door"),Xt.current.roam.openDoor(nt)})},[v,y]);Xt.current.openDoor=W;const pt=vt.useCallback(nt=>{Nt("none"),v(async()=>{const st=E.current;if(!st)return;st.setInputEnabled(!1),Xt.current.playSfx("warp");const it=st.runnerOnScreen();await y.close(it.x,it.y),st.placeAt(nt,"down"),await Ms(),await Ms();const Jt=st.runnerOnScreen();await y.open(Jt.x,Jt.y),st.setInputEnabled(Xt.current.panel==="none")})},[v,y]);O.current=()=>{!T.current&&E.current&&pt(E.current.nearestZone())};const ht=vt.useCallback(()=>{Nt("none"),v(async()=>{const nt=E.current;nt?.setInputEnabled(!1);const st=nt?.runnerOnScreen()??{x:window.innerWidth/2,y:window.innerHeight/2};await y.close(st.x,st.y),Xt.current.roam.exit()})},[v,y]);vt.useEffect(()=>{!R||b!=="live"||t!=="overworld"||T.current||(E.current?.setInputEnabled(bt==="none"),bt==="none"&&document.activeElement instanceof HTMLElement&&document.activeElement.blur())},[bt,R,b,t]),vt.useEffect(()=>{const nt=st=>{if(!(Cv(st)||st.repeat||st.metaKey||st.ctrlKey||st.altKey)&&!N){if(b==="start"){(st.key==="Enter"||st.code==="Space")&&(st.preventDefault(),B("live"));return}if(!(b!=="live"||T.current)){if(t==="door"){st.key==="Escape"&&(st.preventDefault(),i.backToOverworld());return}if(bt==="map"){(st.key==="Escape"||st.code==="KeyM")&&(st.preventDefault(),Nt("none"));return}if(bt==="menu"){st.key==="Escape"&&(st.preventDefault(),Nt("none"));return}if(st.key==="Escape")st.preventDefault(),d("menu"),Nt("menu");else if(st.code==="KeyM")st.preventDefault(),d("menu"),Nt("map");else{if(st.key==="Enter"&&st.target instanceof HTMLButtonElement)return;(st.key==="Enter"||st.code==="KeyE")&&H&&(st.preventDefault(),W(H))}}}};return window.addEventListener("keydown",nt),()=>window.removeEventListener("keydown",nt)},[b,t,bt,H,N,i,W,d]);const ut=nt=>st=>{st.currentTarget.blur(),nt()},Lt=b==="live"&&!N,Vt=Lt&&t==="overworld",lt=E.current?.landmarkPlacements()??[];return K.jsxs(K.Fragment,{children:[K.jsx("div",{ref:M,className:"fixed inset-0 z-[60] overflow-hidden bg-dusk-950"}),K.jsx("div",{className:"fixed inset-0 z-[62] overflow-hidden pointer-events-none",style:{display:Vt?"block":"none"},children:Fr.map((nt,st)=>K.jsxs("button",{ref:it=>{it?C.current.set(nt.id,it):C.current.delete(nt.id)},onClick:ut(()=>W(nt.id)),"aria-label":`Open the ${na(nt.id).toLowerCase()}`,title:nt.zoneName,"data-pin":"false",className:`group absolute left-0 top-0 pointer-events-auto whitespace-nowrap px-2 py-1 font-arcade text-[8px] md:text-[9px] focus-ring data-[pin=true]:px-1.5 data-[pin=true]:opacity-80 data-[pin=true]:hover:opacity-100 ${H===nt.id?"bg-gold-400 text-dusk-950":"bg-dusk-950/85 text-gold-300 hover:text-gold-400"}`,style:{visibility:"hidden"},children:[K.jsx("span",{className:"group-data-[pin=true]:hidden",children:nt.zoneName}),K.jsxs("span",{"aria-hidden":"true",className:"hidden group-data-[pin=true]:inline-flex items-center gap-1",children:[st+1,K.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",className:"crisp",style:{transform:"rotate(var(--pin-angle, 0deg))"},children:K.jsx("path",{d:"M0 0h2v8h-2zM2 2h2v4h-2zM4 3h2v2h-2z",fill:"currentColor"})})]})]},nt.id))}),Vt&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{className:"fixed inset-x-0 top-0 z-[65] flex items-start justify-between gap-3 px-4 md:px-6 py-3",children:[K.jsxs("div",{className:"pixel-border bg-dusk-950/90 mx-1 px-3 py-2",children:[K.jsx("p",{className:"font-arcade text-[9px] md:text-[10px] text-gold-400",children:"THE OVERWORLD"}),K.jsx("p",{className:"mt-2 font-arcade text-[8px] text-mist-300",children:ve!==null?K.jsxs(K.Fragment,{children:["QUEST ROAD · ",K.jsx("span",{className:"text-gold-300",children:ve})]}):K.jsxs(K.Fragment,{children:["NEAR ",na(D)]})})]}),K.jsxs("div",{className:"flex items-start gap-3",children:[wt&&K.jsxs("div",{className:"pixel-border bg-dusk-950/90 mx-1 px-3 py-2 text-right",children:[K.jsxs("p",{className:"font-arcade text-[8px] text-mist-300",children:["LAP"," ",K.jsx("span",{className:"text-[10px] md:text-[11px] text-gold-300 tabular-nums",children:wt.running?Ls(wt.time):"-:--.-"})]}),K.jsxs("p",{className:"mt-2 font-arcade text-[8px] text-mist-300",children:["BEST ",K.jsx("span",{className:"text-sunset-300 tabular-nums",children:wt.best!==null?Ls(wt.best):"-:--.-"})]})]}),K.jsxs("div",{className:"pixel-border bg-dusk-950/90 mx-1 px-3 py-2 text-right",children:[K.jsx("p",{className:"font-arcade text-[8px] text-mist-300",children:"PACE"}),K.jsxs("p",{className:"mt-2 font-arcade text-[10px] md:text-[11px] text-gold-300",children:[j??"--:--",K.jsx("span",{className:"text-[8px] text-mist-300",children:" /KM"})]})]}),K.jsxs("div",{className:"pixel-border bg-dusk-950/90 mx-1 px-3 py-2 flex items-center gap-4",children:[K.jsxs("button",{onClick:ut(()=>Nt("map")),className:"font-arcade text-[8px] md:text-[9px] text-cream-100 hover:text-gold-300 focus-ring",children:["MAP ",K.jsx("span",{className:"text-mist-300",children:"M"})]}),K.jsxs("button",{onClick:ut(()=>Nt("menu")),className:"font-arcade text-[8px] md:text-[9px] text-cream-100 hover:text-gold-300 focus-ring",children:["MENU ",K.jsx("span",{className:"text-mist-300",children:"ESC"})]}),K.jsx("button",{onClick:ut(u),"aria-label":h?"Unmute sound":"Mute sound",className:"text-mist-300 hover:text-gold-400 focus-ring",children:h?K.jsx(Hu,{size:14}):K.jsx(Gu,{size:14})})]})]})]}),K.jsxs("div",{"aria-live":"polite",className:"fixed inset-x-0 top-24 z-[65] flex flex-col items-center gap-3 px-4 pointer-events-none",children:[xe[0]&&K.jsxs("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 text-center",children:[K.jsx("span",{className:"block font-arcade text-[9px] md:text-[10px] text-gold-400",children:xe[0].title}),K.jsx("span",{className:"mt-2 block font-body text-sm text-cream-100",children:xe[0].line})]},xe[0].key),_t&&K.jsxs("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[10px] md:text-[11px] text-cream-100 text-center leading-relaxed",children:["LAP ",K.jsx("span",{className:"text-gold-300",children:Ls(_t.time)}),_t.newBest&&K.jsxs(K.Fragment,{children:[K.jsx("br",{}),K.jsx("span",{className:"text-gold-400 animate-blink",children:"NEW BEST!"})]})]})]}),K.jsx("div",{"aria-live":"polite",className:"fixed inset-x-0 bottom-6 z-[65] flex justify-center px-4 pointer-events-none",children:H?K.jsxs("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[9px] md:text-[10px] text-cream-100",children:[K.jsx("span",{className:"text-gold-400 animate-blink",children:"ENTER"})," ▸ OPEN THE ",na(H)]}):ot?K.jsxs("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[9px] text-cream-100",children:["STUCK? PRESS ",K.jsx("span",{className:"text-gold-400",children:"R"})]}):et?null:K.jsxs("p",{className:"pixel-border bg-dusk-950/90 mx-1 px-4 py-3 font-arcade text-[8px] md:text-[9px] text-cream-100 text-center leading-relaxed",children:[K.jsx("span",{className:"text-gold-400",children:"WASD"})," RUN · ",K.jsx("span",{className:"text-gold-400",children:"SHIFT"})," SPRINT ·"," ",K.jsx("span",{className:"text-gold-400",children:"SPACE"})," JUMP · ",K.jsx("span",{className:"text-gold-400",children:"M"})," MAP"]})})]}),K.jsx("div",{ref:mt,"aria-hidden":"true",className:"fixed left-0 top-0 z-[66] pointer-events-none pixel-border bg-dusk-950/90 px-2 py-1 font-arcade text-[8px] text-cream-100 whitespace-nowrap",style:{display:"none"}}),Vt&&E.current&&K.jsx(vv,{landmarks:lt,dotRef:we,onOpen:ut(()=>Nt("map"))}),Lt&&t==="door"&&K.jsx("div",{className:"fixed inset-x-0 bottom-6 z-[65] flex justify-center px-4 pointer-events-none",children:K.jsxs("button",{onClick:i.backToOverworld,className:"pointer-events-auto pixel-border bg-dusk-950/95 mx-1 px-4 py-3 font-arcade text-[9px] md:text-[10px] text-gold-400 hover:text-gold-300 focus-ring",children:["◂ BACK TO THE OVERWORLD ",K.jsx("span",{className:"text-mist-300",children:"ESC"})]})}),Vt&&bt==="map"&&E.current&&K.jsx(Mv,{landmarks:lt,runner:E.current.runnerPosition(),onTravel:nt=>{I("travel"),pt(nt)},onClose:()=>Nt("none")}),Vt&&bt==="menu"&&K.jsx(Ev,{muted:h,sky:o,look:Pe,showLook:g,frameMs:Q,onResume:()=>Nt("none"),onToggleSound:u,onToggleSky:()=>{Nt("none"),c()},onLook:ue,onExit:ht,medals:qr.map(nt=>({...nt,earned:kt.has(nt.id),progress:kt.progress(nt.id)})),medalCount:ze,kits:$i.map(nt=>({...nt,unlocked:kt.unlocked(nt.id)})),kit:on,onKit:nt=>{kt.setKit(nt),Te(kt.kit().id);const st=kt.kit();E.current?.setKit(st.top,st.bottom)}}),K.jsx("div",{ref:y.ref,"aria-hidden":"true",className:"fixed inset-0 z-[75] bg-ground"}),N?K.jsx(ia,{title:"THE OVERWORLD COULDN'T START",message:N,action:{label:"BACK TO THE PAGE",onClick:i.exit}}):b==="loading"?K.jsx(ia,{title:"LOADING THE OVERWORLD"}):b==="start"?K.jsx(ia,{title:"THE OVERWORLD",message:"Run the island. Every Landmark is a door into the page.",action:{label:"PRESS START",onClick:()=>B("live"),blink:!0},secondary:{label:"BACK TO THE PAGE",onClick:i.exit}}):null]})}export{Lv as default};
